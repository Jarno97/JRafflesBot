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
from modules.Confirmed.confirmedentry import Login
lock = threading.Lock()
path = "Raffle/Confirmed"
proxies = load_proxies(f"{path}/proxies.txt")


profilename, name, surname, email, password, dateofbirth, street, housenumber, postcode, countrycode, city, state, district, phoneprefix, phonenumber,cardnumber, cardmonth, cardyear, cardcvv = ReadCSV(path)

def InitializeTask(self):
    self.i = 0
    while True:
        try:
            self.session = tls_client.Session(client_identifier="chrome_107")
            self.userretries = int(config["retries"])
            self.i = 0
            self.session.proxies = get_proxy(proxies)
            self.session.headers = GetHeaders(countrycode[self.taskid], True)
            if name[self.taskid] == 'RANDOM':
                name[self.taskid] = names.get_first_name()
            if surname[self.taskid] == 'RANDOM':
                surname[self.taskid] = names.get_last_name()
            break
        except Exception as e:
            exception_handler(self, self.log, e, f'{path}/failed.csv', email[self.taskid], password[self.taskid], 'Failed to initialize tasks!')


def CheckForEA(self):
    self.i = 0
    while True:
        try:
            earesp = self.session.get('https://api.3stripes.net/gw-api/v2/trilogy/products/closed-group-sales')
            possibleeas = earesp.json()['_embedded']
            if possibleeas:
                return True
            else:
                return False
        except Exception as e:
            exception_handler(self, self.log, e, f'{path}/failed.csv', email[self.taskid], password[self.taskid], 'Failed to check for ea!')

def confirmedeacheckermain():
    class confirmedeachecker(threading.Thread):
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
            log(kolorki.YELLOW, "Logged in!")
            RequestSleep()
            ea = CheckForEA(self)
            if ea:
                log(kolorki.GREEN, "Found EA!")
                eawebhook("Confirmed", email[self.taskid], password[self.taskid], "undefined", self.taskid, imageurl)
            else:
                log(kolorki.RED, "EA not found!")
            TaskSleep()

    all_tasks = len(email)-1
    ThreadCount = int(config['threadsamount'])
    task_id = 1
    while all_tasks > 0:
        if threading.active_count() < ThreadCount + 1:
            task = confirmedeachecker(task_id)
            task.start()
            all_tasks -= 1
            task_id += 1
    while True:
        if threading.active_count() == threadingamounttoexit:
            break