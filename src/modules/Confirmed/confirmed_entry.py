import base64
from bs4 import BeautifulSoup
from packages.log.log import kolorki, menu_log
from utils.fileops import config, load_proxies
from utils.constants import threadingamounttoexit
from utils.modules import exception_handler
from utils.webhooks import rafflewebhook
from utils.getproxy import get_proxy
import tls_client
import threading
import names
from datetime import datetime
from colored import fg
import json
from utils.utils import *
from utils import *
import random
import sys
lock = threading.Lock()
path = "Raffle/Confirmed"
proxies = load_proxies(f"{path}/proxies.txt")


profilename, name, surname, email, password, dateofbirth, street, housenumber, postcode, countrycode, city, state, district, phoneprefix, phonenumber,cardnumber, cardmonth, cardyear, cardcvv = ReadCSV(path)

def GetAllRaffles(countrycode):
    session = tls_client.Session(client_identifier="safari_ios_15_6")
    data = json.loads(session.get("https://api.3stripes.net/gw-api/v2/trilogy/stories/feed?page=1", headers=GetHeaders(countrycode, False)).text)
    productsdict = {}
    items = []
    for x in data["_embedded"]:
        if x["type"] == "product":
            if x['data']['type'] == 'hype_draw':
                productname = x['data']['id']
                items.append(productname)
                productsdict[productname] = {}
                productsdict[productname]["name"] = productname
                productsdict[productname]["pid"] = x['data']['hype_event']['event_id']
                productsdict[productname]["image"] = x['data']['asset']['data']['url']
                productsdict[productname]["price"] = x['data']['price']

    counter = 1
    for x in (items):
        menu_log(f"{counter}.{x}")
        counter = counter +1
    choice = input(fg(kolorki.BLUE)+'Choose option: '+kolorki.RES)
    chuj = (items[int(choice)-1])
    menu_log(f"Starting tasks for: {chuj}")
    return (productsdict[chuj])



def InitializeTask(self):
    self.i = 0
    while True:
        try:
            self.minimumsize = self.sizerange.split('-')[0]
            self.maximumsize = self.sizerange.split('-')[1]
            self.session = tls_client.Session(client_identifier="confirmed_ios")
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

def Login(self):
    self.i = 0
    while True:
        try:
            logindata = {
                'grant_type': 'password',
                'username': email[self.taskid],
                'password': password[self.taskid] 
            }
            login = self.session.post('https://api.3stripes.net/gw-api/v2/token', json=logindata)
            if login.status_code != 200:
                if login.status_code == 403:
                    self.session.headers = GetHeaders(countrycode[self.taskid], True)
                    raise Exception("Blocked by akamai... rolling sensor")
                elif login.status_code == 401:
                    raise Exception(f"Error: [{login.json()['detail']}]")
                elif "The provided market '-' in the header is not supported!" in login.text:
                    raise Exception("Unknown region found in csv!")
                else:
                    raise Exception(f"unknown status code: {login.status_code}")
            self.session.headers['Authorization'] = f"Bearer {login.json()['access_token']}"
            break
        except Exception as e:
            exception_handler(self, self.log, e, f'{path}/failed.csv', email[self.taskid], password[self.taskid], 'Failed to login!')

def GetUserCC(self):
    self.i = 0
    while True:
        try:
            cardget = self.session.get("https://api.3stripes.net/gw-api/v2/user/cards")
            if cardget.status_code != 200:
                raise Exception(f"unknown status code: {cardget.status_code}")
            self.ccdict = cardget.json()['cards'][0]
            break
        except Exception as e:
            exception_handler(self, self.log, e, f'{path}/failed.csv', email[self.taskid], password[self.taskid], 'Failed to get user CC!')

def AddUserCC(self):
    self.i = 0
    while True:
        try:
            cardData = {
                "card_number": cardnumber[self.taskid],
                "card_month": cardmonth[self.taskid],
                "card_year": cardyear[self.taskid],
                "card_cvv": cardcvv[self.taskid]
            }
            cardpost = self.session.post('https://api.3stripes.net/gw-api/v2/user/cards', data=cardData)
            if cardpost.status_code != 200:
                raise Exception(f"unknown status code: {cardData.status_code}")
        except Exception as e:
            print(e)

def ScrapeProductData(self):
    self.i = 0
    while True:
        try:
            productdata = self.session.get(f"https://api.3stripes.net/gw-api/v2/hype/products/{self.pid}/availability?experiemnt_product_data=false")
            if productdata.status_code != 200:
                raise Exception(f"unknown status code: {productdata.status_code}")
            productid = productdata.json()['product_id']
            sizes = []
            pidsizes = []

            for x in productdata.json()['_embedded']['variations']:
                sizes.append(x['size'])
                pidsizes.append(x['variation_product_id'])

            self.choosesize = random.choice(self.sizes)
            self.choosepid = pidsizes[self.sizes.index(self.choosesize)]
            break
        except Exception as e:
            log(str(e))

def InitiateSignUp(self):
    self.i = 0
    while True:
        try:
            basketdata = {
                "items": [{
                    "product_id": self.pid,
                    "variation_product_id": self.choosepid,
                    "quantity": 1
                }],
                "event_id": self.productdict["pid"]
            }
            basket = self.session.post(f"https://api.3stripes.net/gw-api/v2/hype/basket/", json=basketdata)
            if basket.status_code != 200:
                raise Exception(f'unknown status code! [{self.basket.status_code}]')
            self.basketid = basket.json()['basket_id']
            self.shippingbase = basket.json()['shipping_info']
            self.currency = basket.json()['currency']
            break
        except Exception as e:
            exception_handler(self, self.log, e, f'{path}/failed.csv', email[self.taskid], password[self.taskid], 'Failed to initaite sign up!')


def InitiatePayment(self):
    self.i = 0
    while True:
        try:
            data = {
                "items": [{
                    "product_id": self.pid,
                    "variation_product_id": self.choosepid,
                    "quantity": 1
                }],
                "invoice_info": {
                    "type": "0"
                },
                "selected_shipping_type_id": "home_delivery",
                "billing_info": {
                    "id": self.shippingbase['id'],
                    "personal_id": self.shippingbase['personal_id'],
                    "address1": self.shippingbase['address1'],
                    "phone": self.shippingbase['phone'],
                    "house_number": self.shippingbase['house_number'],
                    "colony": self.shippingbase['colony'],
                    "address2": self.shippingbase['address2'],
                    "middle_name": self.shippingbase['middle_name'],
                    "address3": self.shippingbase['address3'],
                    "first_name": self.shippingbase['first_name'],
                    "city": self.shippingbase['city'],
                    "document_type_id": self.shippingbase['document_type_id'],
                    "district": self.shippingbase['district'],
                    "postal_code": self.shippingbase['postal_code'],
                    "last_name": self.shippingbase['last_name'],
                    "country_code": self.shippingbase['country_code'],
                    "business_name": self.shippingbase['business_name'],
                    "tax_administration": self.shippingbase['tax_administration'],
                },
                "selected_carrier_service_id": "Standard-EFC-1",
                "shipping_info": {
                    "id": self.shippingbase['id'],
                    "personal_id": self.shippingbase['personal_id'],
                    "address1": self.shippingbase['address1'],
                    "phone": self.shippingbase['phone'],
                    "house_number": self.shippingbase['house_number'],
                    "colony": self.shippingbase['colony'],
                    "address2": self.shippingbase['address2'],
                    "middle_name": self.shippingbase['middle_name'],
                    "address3": self.shippingbase['address3'],
                    "first_name": self.shippingbase['first_name'],
                    "city": self.shippingbase['city'],
                    "document_type_id": self.shippingbase['document_type_id'],
                    "district": self.shippingbase['district'],
                    "postal_code": self.shippingbase['postal_code'],
                    "last_name": self.shippingbase['last_name'],
                    "country_code": self.shippingbase['country_code'],
                    "business_name": self.shippingbase['business_name'],
                    "tax_administration": self.shippingbase['tax_administration'],
                },
                "prefix_payment_method": self.paymentbase['card_bin'],
                "selected_invoice_type_id": "0",
                "event_id": self.productdict["pid"],
                "payment_info": {
                    "amount": self.price,
                    "security_check_info": {
                        "cvv": cardcvv[self.taskid],
                    },
                    "payment_info_reference_id": self.paymentbase['payment_info_reference_id'],
                    "payment_card_type": self.paymentbase['card_type'],
                    "event_id": self.productdict["pid"],
                    "currency": self.currency,
                    "payment_method_id": "CREDIT_CARD"
                },
                "selected_payment_method_id": "CREDIT_CARD"
            }
            ordersubmit = self.session.post(f"https://api.3stripes.net/gw-api/v2/hype/basket/{self.basketid}/order/", json=data)
            if ordersubmit.status_code != 200:
                raise Exception(f'unknown status code [{self.ordersubmit.status_code}]')
            if '{"order_number":"hype"}' in self.ordersubmit.text:
                if3ds = False
            else:
                if3ds = True
                base64token = ordersubmit.json()['3d_secure']['3d_secure_base64_html']
                self.paymentsitecode = base64.b64decode(base64token)
            break
        except Exception as e:
            exception_handler(self, self.log, e, f'{path}/failed.csv', email[self.taskid], password[self.taskid], 'Failed to initaite payment!')

    return if3ds


def Submit3Ds(self):
    self.i = 0
    while True:
        try:
            self.session.headers = {
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
            }

            soup = BeautifulSoup(self.paymentsitecode, 'lxml')
            self.paymentlink = soup.find('form', {'method': 'POST'})['action']
            self.parareq = soup.find('input', {'name': 'PaReq'})['value']
            self.md = soup.find('input', {'name': 'MD'})['value']
            self.termurl = soup.find('input', {'name': 'TermUrl'})['value']
            self.paymentdata = {
                'PaReq': self.parareq,
                'MD': self.md,
                'TermUrl': self.termurl
            }
            #print(self.termurl)
            self.firstpaymentpost = self.session.post(self.paymentlink, data=self.paymentdata)
            self.soup = BeautifulSoup(self.firstpaymentpost.text, 'lxml')
            self.adyenform = self.soup.find_all('script')
            self.token2 = self.adyenform[1].text.split("token:",1)[1].split(',',1)[0].replace("'", '').replace(" ", '')
            self.paymentadyen = base64.b64decode(self.token2).decode('utf-8')
            self.badpayload = json.loads(self.paymentadyen)

            self.payload = {
                'acsTransID': self.badpayload['acsTransID'],
                'messageVersion': self.badpayload['messageVersion'],
                'threeDSServerTransID': self.badpayload['threeDSServerTransID'],
                "messageType":"CReq",
                "challengeWindowSize":"05"
            }
            fixedpayload = base64.b64encode(json.dumps(self.payload).encode('utf-8')).decode('utf-8').replace("=", "")

            driver = loadchromedriver()
            #input()
            driver.get(self.badpayload['acsURL'])
            driver.execute_script(f"""
                var form = document.createElement('form');
                form.method = 'POST';
                form.name = 'form_3ds';
                var inp1 = document.createElement('input');
                inp1.type = 'hidden';
                inp1.name = 'creq';
                inp1.value = '{fixedpayload}';
                form.appendChild(inp1);

                var submit = document.createElement('input');
                submit.type = 'submit';
                form.appendChild(submit);
                document.body.appendChild(form);
                document.forms['form_3ds'].submit();
                """)
            while True:
                if 'checkoutshopper-live.adyen.com' in driver.current_url:
                    self.checkoutid = driver.current_url.split('pspReference=',1)[1]
                    self.log(kolorki.YELLOW,f"3DS challenge completed!")
                    driver.execute_script("""
                        document.write("<h1>Successfully authorized 3DS challenge!");
                        var url = new window.URL(window.location.href);
                        window.token = url.searchParams.get("token");
                        window.ba_token = url.searchParams.get("ba_token");""")

                    time.sleep(2)
                    driver.close()
                    break
                else:
                    time.sleep(5)
                    self.log(kolorki.YELLOW,f"Waiting for 3DS authentication...")
            break

        except Exception as e:
            exception_handler(self, self.log, e, f'{path}/failed.csv', email[self.taskid], password[self.taskid], 'Failed to submit 3ds!')

def SignUp(self):
    while True:
        try:
            self.getparesdata = {
                'MD': self.md,
                'PaReq': self.parareq,
                'TermUrl': self.termurl,
                'transStatus': 'Y',
                'spcSupported': 'false',
                'webAuthnSupported': 'false',
                'successfulWebAuthnPerformed': 'false',
                'webAuthnNotPerformedReason': '',
                'pspReference': self.checkoutid,
            }
            self.getpares = self.session.post("https://checkoutshopper-live.adyen.com/checkoutshopper/challengeShopper.shtml", data=self.getparesdata)
            self.soup = BeautifulSoup(self.getpares.text, 'lxml')
            self.pares = self.soup.find('input', {'name': 'PaRes'})['value']
            self.newmd = self.soup.find('input', {'name': 'MD'})['value']

            self.session.headers = GetHeaders(countrycode[self.taskid], True)
            #url = f'https://api.3stripes.net/gw-api/v2/hype/redirect/{self.basketid}/{self.checkoutid}/completeRedirect?x-api-key=ynbtczspamjr7uf43jqud5gz&accept-language=pl-PL'
            
            #self.entrysubmitdata = f'MD={self.md}&PaRes={self.parareq}'
            self.entrysubmitdata = {
                'MD': self.newmd,
                'PaRes': self.pares
            }
            
            self.entrysubmit = self.session.post(self.termurl, data=self.entrysubmitdata)
            
            self.soup = BeautifulSoup(self.entrysubmit.text, 'lxml')
            self.responseofsubmit = base64.b64decode(self.soup.find('input', {"name":"order"})['value'])
            
            #print(self.responseofsubmit)
            if '"order_number":"hype"' in self.responseofsubmit.decode('utf-8'):
                rafflewebhook("Confirmed", self.pid, self.choosesize, self.image, profilename[self.taskid], email[self.taskid], "-", self.logtask_id)
            else:
                raise Exception(f"[{self.responseofsubmit.decode('utf-8')}]")
            break
        except Exception as e:
            exception_handler(self, self.log, e, 'Raffle/Confirmed/failed.csv', email[self.taskid], password[self.taskid], 'Failed to submit entry!')


def confirmedentrymain():
    class confirmedentry(threading.Thread):
        def __init__(self, taskid, productdict, sizerange):
            threading.Thread.__init__(self)
            self.taskid = taskid
            self.logtask_id = '{:03}'.format(taskid)
            self.productdict = productdict
            self.sizerange = sizerange
        def run(self):
            def log(color, message):
                with lock:
                    print(f"[{datetime.now()}] [CONFIRMED] [TASK {self.logtask_id}] {fg(color)}{message}"+kolorki.RES)
            self.log = log
            log(kolorki.BLUE,"Starting task...")
            InitializeTask(self)
            Login(self)
            RequestSleep()
            GetUserCC(self)
            log(kolorki.YELLOW, "Fetched user's CC")
            RequestSleep()
            ScrapeProductData(self)
            log(kolorki.YELLOW, "Scraped product data!")
            RequestSleep()
            InitiateSignUp(self)
            log(kolorki.YELLOW, "Initiated sign up!")
            RequestSleep()
            if3ds = InitiatePayment()
            if if3ds:
                log(kolorki.YELLOW, "3Ds required!")
                RequestSleep()
            else:
                log(kolorki.GREEN, "Successfully signed up!")
                rafflewebhook("Confirmed", self.productdict["name"], self.choosesize, self.productdict["image"], profilename[self.taskid], email[self.taskid], "", self.taskid)
                sys.exit()    
            Submit3Ds(self)
            log(kolorki.YELLOW, "Completed 3Ds challenge")
            SignUp(self)
            log(kolorki.GREEN, "Successfully signed up!") 
            TaskSleep()       
    all_tasks = len(email)-1
    ThreadCount = int(config['threadsamount'])
    task_id = 1
    countrycode = input(fg(kolorki.BLUE)+"Enter country code to scrape raffles: "+kolorki.RES)
    proddict = GetAllRaffles(countrycode)
    sizerange = input(fg(kolorki.BLUE)+"Enter size range (e.g. 8-12): "+kolorki.RES)
    while all_tasks > 0:
        if threading.active_count() < ThreadCount + 1:
            task = confirmedentry(task_id,proddict, sizerange)
            task.start()
            all_tasks -= 1
            task_id += 1
    while True:
        if threading.active_count() == threadingamounttoexit:
            break