from constants import *
import threading
import csv
import random
import tls_client
from datetime import datetime
import faker
import ctypes
from utils import *

lock = threading.Lock()

ctypes.windll.kernel32.SetConsoleTitleW('ADIDAS CONFIRMED Account Generator')


class MyObject:

    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            setattr(self, key, value)

    def __str__(self):
        return f"MyObject: {self.Url}"

    def __getitem__(self, key):
        return getattr(self, key)

    def __setitem__(self, key, value):
        setattr(self, key, value)


tasks = []

with open('tasks.csv', 'r') as file:
    # Create a CSV reader with DictReader
    reader = csv.DictReader(file)

    # Read and process each row
    for row in reader:
        # Create an object using the row dictionary
        task = MyObject(**row)

        # Append the object to the list
        tasks.append(task)

with open('tasks.csv', 'w') as file:
    file.write(
        'Url,Size,Email,Password,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,Country,State,CardNumber,ExpiryDate,CVV,NameOnCard,Phone,Follower'
    )


def Proxies():
    with open('proxies.txt', 'r') as file:
        proxies = file.read().split('\n')
        sanitized_proxies = [
            proxy.replace("\r", "") for proxy in proxies if proxy
        ]
        return sanitized_proxies


def log(text, t):
    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    print("[" + current_time + "]" + " " + "[ADIDAS CONFIRMED]" +
          f" Task {t + 1}: " + text)


def InitializeTaskChrome(self):
    self.i = 0
    while True:
        try:
            self.session = tls_client.Session(client_identifier="chrome_107")
            self.i = 0
            proxies = Proxies()
            proxy = random.choice(proxies).split(':')
            # print(proxy_split)

            proxy_host = proxy[0]
            proxy_port = proxy[1]
            proxy_username = proxy[2]
            proxy_password = proxy[3]

            session_proxy = {
                'http':
                f'http://{proxy_username}:{proxy_password}@{proxy_host}:{proxy_port}',
                'https':
                f'http://{proxy_username}:{proxy_password}@{proxy_host}:{proxy_port}'
            }

            self.session.proxies.update(session_proxy)
            # self.session.proxies = session_proxy
            self.session.headers = GetHeaders(self.task['Country'], True)
            break
        except Exception as e:
            log(str(e), self.t)


def InitializeTask(self):
    i = 0
    while True:
        try:
            self.session = tls_client.Session(
                client_identifier="confirmed_ios")
            i = 0
            self.session.headers = GetHeaders(self.task['Country'], True)
            proxies = Proxies()
            proxy = random.choice(proxies).split(':')
            # print(proxy_split)

            proxy_host = proxy[0]
            proxy_port = proxy[1]
            proxy_username = proxy[2]
            proxy_password = proxy[3]

            session_proxy = {
                'http':
                f'http://{proxy_username}:{proxy_password}@{proxy_host}:{proxy_port}',
                'https':
                f'http://{proxy_username}:{proxy_password}@{proxy_host}:{proxy_port}'
            }

            self.session.proxies.update(session_proxy)
            break
        except Exception as e:
            log(e)


def Login(self):
    i = 0
    while True:
        try:
            logindata = {
                'grant_type': 'password',
                'username': self.task['Email'],
                'password': self.task['Password']
            }
            login = self.session.post(
                'https://api.3stripes.net/gw-api/v2/token', json=logindata)
            if login.status_code == 200:
                log('Successfully logged in', self.t)
            if login.status_code != 200:
                if login.status_code == 403:
                    proxies = Proxies()

                    proxy = random.choice(proxies).split(':')
                    # print(proxy_split)

                    proxy_host = proxy[0]
                    proxy_port = proxy[1]
                    proxy_username = proxy[2]
                    proxy_password = proxy[3]

                    session_proxy = {
                        'http':
                        f'http://{proxy_username}:{proxy_password}@{proxy_host}:{proxy_port}',
                        'https':
                        f'http://{proxy_username}:{proxy_password}@{proxy_host}:{proxy_port}'
                    }

                    self.session.proxies.update(session_proxy)
                    self.session.headers = GetHeaders(self.task['Country'],
                                                      True)
                    time.sleep(2.5)
                    raise Exception("Blocked by akamai... rolling sensor")
                elif login.status_code == 401:
                    time.sleep(1.5)
                    raise Exception(f"Error: [{login.json()['detail']}]")
                elif "The provided market '-' in the header is not supported!" in login.text:
                    time.sleep(1.5)
                    raise Exception("Unknown region found in csv!")
                else:
                    time.sleep(1.5)
                    raise Exception(
                        f"unknown status code: {login.status_code}")
            self.session.headers[
                'Authorization'] = f"Bearer {login.json()['access_token']}"
            break
        except Exception as e:
            log(str(e), self.t)


def Checkifexists(self):
    self.i = 0
    while True:
        try:
            test = self.session.get(
                f"https://api.3stripes.net/gw-api/v2/user/lookup?id={self.task['Email']}"
            )

            if test.status_code != 200:
                if test.status_code == 403:
                    self.session.headers = GetHeaders(self.task['Country'],
                                                      True)
                    time.sleep(3)
                    raise Exception("Blocked by akamai...")
                else:
                    raise Exception(
                        f"unknown status code [{test.status_code}]")
            if '"exist":true' in test.text:
                log(f'Account {self.mail} already exists', self.t)
                self.exists = True
            break
        except Exception as e:
            log(str(e), self.t)


def Register(self):
    self.i = 0
    while True:
        try:
            registerdata = {
                'email': self.task['Email'],
                'password': self.task['Password'],
                'membership_consent': True,
                'dormant_period': '1y',
            }

            register = self.session.post(
                'https://api.3stripes.net/gw-api/v2/user', json=registerdata)
            if register.status_code == 403:
                self.session.headers = GetHeaders(self.task['Country'], True)
                time.sleep(3.5)
                raise Exception('Blocked By Akamai, rerolling sensordata')
            if register.status_code != 200:
                self.session.headers = GetHeaders(self.task['Country'], True)
                time.sleep(2)
                log(f'Error registering account {str(register.status_code)}',
                    self.t)
                break
            email = self.task['Email']
            password = self.task['Password']
            with open('../accounts/confirmed.csv', 'a') as file:
                file.write(f'\n{email},{password}')
            break
        except Exception as e:
            log(str(e), self.t)


def SetProfileInfo(self):
    self.i = 0
    while True:
        try:
            profilepatload = {
                'gender': 'M',
                'last_name': self.task['LastName'],
                'date_of_birth': '06-02-1997',
                'first_name': self.task['FirstName'],
            }
            setprofiledata = self.session.patch(
                "https://api.3stripes.net/gw-api/v2/user", json=profilepatload)
            if setprofiledata.status_code != 200:
                self.session.headers = GetHeaders(self.task['Country'], True)
                time.sleep(4)
                raise Exception(f'unknown status code [{setprofiledata.text}]')
            break
        except Exception as e:
            log(str(e), self.t)


def AddAddress(self):
    self.i = 0
    while True:
        try:
            addressdata = {
                "first_name": self.task['FirstName'],
                "city": self.task['City'],
                "address1":
                self.task['Address1'] + '' + self.task['HouseNumber'],
                "postal_code": self.task['Zip'],
                "last_name": self.task['LastName'],
                "district": self.task['State'],
                "country_code": self.task['Country'],
                "type": "SHIPPING",
                "address2": self.task['Address2']
            }
            addressadd = self.session.post(
                'https://api.3stripes.net/gw-api/v2/user/addresses',
                json=addressdata)
            if addressadd.status_code != 200:
                time.sleep(1)
                raise Exception(
                    f"unknown status code [{addressadd.status_code}]")
            break
        except Exception as e:
            log(str(e), self.t)


class confirmedaccgen:

    def __init__(self):
        t = 0
        while t < len(tasks):
            self.t = t
            self.exists = False
            self.task = tasks[t]
            self.mail = self.task['Email']
            log("Initializing Task", t)
            InitializeTaskChrome(self)
            time.sleep(1.5)
            log('Checking for duplicates', t)
            # Checkifexists(self)
            # if self.exists:
            #     t = t + 1
            #     continue
            time.sleep(2.5)
            log('Registering..', t)
            self.success = False
            Register(self)
            log('Successfully Registered!', t)
            time.sleep(2)

            t = t + 1


class addInfo:

    def __init__(self):
        t = 0
        while t < len(tasks):
            self.t = t
            self.exists = False
            self.task = tasks[t]
            self.mail = self.task['Email']
            log("Initializing Task", t)
            InitializeTask(self)
            time.sleep(1.5)
            log('Logging in', t)
            Login(self)
            time.sleep(2)
            log('Setting Address Info', t)
            AddAddress(self)
            log('Address added!', t)
            # log('Setting Personal Info',t)
            # SetProfileInfo(self)

            t = t + 1


confirmedaccgen()
# addInfo()
