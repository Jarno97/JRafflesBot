from packages.log.log import kolorki
from utils.fileops import config, load_proxies
from utils.constants import threadingamounttoexit
from utils.modules import exception_handler
from utils.webhooks import eawebhook
from utils.getproxy import get_proxy
from modules.Confirmed.constants import *
import tls_client
import threading
import csv
import names
from datetime import datetime
from colored import fg
from utils.utils import *
from modules.Confirmed.utils import *
from modules.Confirmed.confirmedentry import Login, InitializeTask
lock = threading.Lock()
path = "Raffle/Confirmed"
proxies = load_proxies(f"{path}/proxies.txt")


profilename, name, surname, email, password, dateofbirth, street, housenumber, postcode, countrycode, city, state, district, phoneprefix, phonenumber,cardnumber, cardmonth, cardyear, cardcvv = ReadCSV(path)

def SetProfileInfo(self):
    self.i = 0
    while True:
        try:
            profilepatload  = {
                'gender': 'M',
                'last_name': surname[self.taskid],
                'date_of_birth': dateofbirth[self.taskid],
                'first_name': name[self.taskid],
            }
            setprofiledata = self.session.patch("https://api.3stripes.net/gw-api/v2/user", json=profilepatload)
            if setprofiledata.status_code != 200:
                raise Exception(f'unknown status code [{setprofiledata.status_code}]')
            break
        except Exception as e:
            exception_handler(self, self.log, e, path, email[self.taskid], password[self.taskid], "Failed to set profile info")

def AddAddress(self):
    self.i = 0
    while True:
        try:
            addressdata = {
                "first_name": name[self.taskid],   
                "city": city[self.taskid],    
                "address1": street[self.taskid],   
                "postal_code": postcode[self.taskid],  
                "phone": f"{phoneprefix[self.taskid]+phonenumber[self.taskid]}",    
                "last_name": surname[self.taskid],    
                "district": district[self.taskid],
                "country_code": str(countrycode[self.taskid]).upper(),    
                "type": "SHIPPING",    
                "address2": housenumber[self.taskid]
            }
            addressadd = self.session.post('https://api.3stripes.net/gw-api/v2/user/addresses', json=addressdata)
            if addressadd.status_code != 200:
                raise Exception(f"unknown status code [{addressadd.status_code}]")
            break
        except Exception as e:
            exception_handler(self, self.log, e, path, email[self.task])

def confirmedaddressaddermain():
    class confirmedaddressadder(threading.Thread):
        def __init__(self, taskid):
            threading.Thread.__init__(self)
            self.taskid = taskid
            self.logtask_id = '{:03}'.format(taskid)
        def run(self):
            def log(color, message):
                with lock:
                    print(f"[{datetime.now()}] [CONFIRMED] [TASK {self.logtask_id}] {fg(color)}{message}"+kolorki.RES)
            self.log = log
            log(kolorki.BLUE,"Starting task...")
            InitializeTask(self)
            Login(self)
            RequestSleep()
            SetProfileInfo(self)
            log(kolorki.YELLOW, "Setted profile info")
            RequestSleep()
            AddAddress(self)
            log(kolorki.GREEN, "Added address to account!")
            TaskSleep()

    all_tasks = len(email)-1
    ThreadCount = int(config['threadsamount'])
    task_id = 1
    while all_tasks > 0:
        if threading.active_count() < ThreadCount + 1:
            task = confirmedaddressadder(task_id)
            task.start()
            all_tasks -= 1
            task_id += 1
    while True:
        if threading.active_count() == threadingamounttoexit:
            break