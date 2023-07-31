
from constants import *
import threading
import csv
from datetime import datetime
from utils import *
from confirmedeachecker import InitializeTask
lock = threading.Lock()




profilename = []
name = []
surname = []
email = []
password = []
street = []
housenumber = []
postcode = []
countrycode = []
city = []
phone = []
cardnumber = []
cardmonth = []
cardyear = []
cardcvv = []
with open(f'{path}/tasks.csv', encoding="utf8") as csvDataFile:
    csvReader = csv.reader(csvDataFile)
    for row in csvReader:
        profilename.append(row[0])
        name.append(row[1])
        surname.append(row[2])
        email.append(row[3])
        password.append(row[4])
        street.append(row[5])
        housenumber.append(row[6])
        postcode.append(row[7])
        countrycode.append(row[8])
        city.append(row[9])
        phone.append(row[10])
        cardnumber.append(row[11])
        cardmonth.append(row[12])
        cardyear.append(row[13])
        cardcvv.append(row[14])


def Checkifexists(self):
    self.i = 0
    while True:
        try:
            test = self.session.get(f"https://api.3stripes.net/gw-api/v2/user/lookup?id={email[self.taskid]}")
                    
            if test.status_code != 200:
                if test == 403:
                    self.session.headers = GetHeaders(countrycode[self.taskid], True)
                    raise Exception("Blocked by akamai...")
                else:
                    raise Exception(f"unknown status code [{test.status_code}]")
            if '"exist":true' in self.test.text:
                raise Exception('Account with this email already exists')
            break
        except Exception as e:
            exception_handler(self, self.log, e, f'{path}/failed.csv', email[self.taskid], password[self.taskid], 'Failed to register account!')

def Register(self):
    self.i = 0
    while True:
        try:
            registerdata = {
                'email': email[self.taskid],
                'password': password[self.taskid],
                'membership_consent': True,
                'dormant_period': '1y',
            }

            register = self.session.post('https://api.3stripes.net/gw-api/v2/user', json=registerdata)

            if register.status_code != 200:
                self.session.headers = GetHeaders(countrycode[self.taskid], True)
                raise Exception(f'Failed to register account! [{register.status_code}]')
            break
        except Exception as e:
            exception_handler(self, self.log, e, f'{path}/failed.csv', email[self.taskid], password[self.taskid], 'Failed to register account!')
def confirmedaccgenmain():
    class confirmedaccgen(threading.Thread):
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
            Checkifexists(self)
            RequestSleep()
            Register(self)
            accgenwebhook("Confirmed", email[self.taskid], password[self.taskid], imageurl, self.taskid)
            TaskSleep()


    all_tasks = len(email)-1
    ThreadCount = int(config['threadsamount'])
    task_id = 1
    while all_tasks > 0:
        if threading.active_count() < ThreadCount + 1:
            task = confirmedaccgen(task_id)
            task.start()
            all_tasks -= 1
            task_id += 1
    while True:
        if threading.active_count() == threadingamounttoexit:
            break