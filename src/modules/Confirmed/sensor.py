import requests
import time
import tls_client
import json
import random
from bs4 import BeautifulSoup
import base64
from akamai_bmp_client import AkamaiBMPClient
from datetime import datetime
from utils import *
from py_adyen_encrypt import encryptor

ADYEN_KEY = ''


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

globalt = 0


def log(text):
    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    print("[" + current_time + "]" + " " + "[ADIDAS CONFIRMED]" +
          f" Task {globalt+1}: " + text)


def Proxies():
    with open('proxies.txt', 'r') as file:
        proxies = file.read().split('\n')
        sanitized_proxies = [
            proxy.replace("\r", "") for proxy in proxies if proxy
        ]
        return sanitized_proxies


def GetAllRaffles(countrycode, self):
    session = tls_client.Session(client_identifier="safari_ios_15_6")
    data = json.loads(
        session.get(
            "https://api.3stripes.net/gw-api/v2/trilogy/stories/feed?page=1",
            headers=GetHeaders(countrycode, False)).text)
    productsdict = {}
    items = []
    for x in data["_embedded"]:
        # print(x)
        if x["type"] == "product":
            if x['data']['type'] == 'hype_draw':
                productname = x['data']['id']
                items.append(productname)
                productsdict[productname] = {}
                productsdict[productname]["name"] = productname
                productsdict[productname]["pid"] = x['data']['hype_event'][
                    'event_id']
                productsdict[productname]["image"] = x['data']['asset'][
                    'data']['url']
                productsdict[productname]["price"] = x['data']['price']

    counter = 1
    url = self.task["Url"]
    print(f'Fetching {url}')
    for x in (items):
        if x == self.task["Url"]:
            chuj = x

    print(f"Starting tasks for: {chuj}")
    return (productsdict[chuj])


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

            session = requests.Session()

            session_proxy = {
                'http':
                f'http://{proxy_username}:{proxy_password}@{proxy_host}:{proxy_port}',
                'https':
                f'http://{proxy_username}:{proxy_password}@{proxy_host}:{proxy_port}'
            }

            # self.session.proxies.update(session_proxy)
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
                log('Successfully logged in')
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
            log(str(e))


def GetUserCC(self):
    self.i = 0
    while True:
        try:
            cardget = self.session.get(
                "https://api.3stripes.net/gw-api/v2/user/cards")
            if cardget.status_code != 200:
                time.sleep(5)
                raise Exception(f"unknown status code: {cardget.status_code}")
            if not cardget.json()['cards']:
                log('No card found in Account, adding CC')
                self.addCard = True
                break
            self.ccdict = cardget.json()['cards'][0]
            number = self.ccdict['number']
            log(f'Found Credit Card ending with {number}')
            # print(self.ccdict)
            break
        except Exception as e:
            log(str(e))


def GenerateCard(self):
    month = self.task['ExpiryDate'].split('/')[0]
    year = '20' + self.task['ExpiryDate'].split('/')[1]
    enc = encryptor(
        adyen_public_key=
        '10001|B0C2259F5CB5FECDB8F4010E526520723BDDFC6133019DF20F24E84CC199AA226663436BE449EA4FF9E058F21ED13F4F1F2BC34236AAA1171EA5989D7B486DCB147521C970575A83D9C395BCB896166A0BCE6D55C1414A13C81851306B84F513ED179F41E93C69027D83BF09DAABA9C3451AA8C8523F97A7741439B36573B3100E0FFAB08CBEA2785F3D2D2717073D6F3E243DD27BAEEB2F917502BC460B9D7F36CE6650F8CEA047C3F803C7CEC8F141B1C9194C83B8EDECB20B15614CC3A6FC773B48667C82BA726C474BCB9AB6B75D2092CE4E423A604EA3DB9E2223CE8C966FF76532F8AF37308098AE55F644DCD869EE475462E8E0B11F88B5345E200C6D',
        adyen_version='_0_1_1')
    self.enc_card = enc.encrypt_card(card=self.task['CardNumber'],
                                     cvv=self.task['CVV'],
                                     month=month,
                                     year=year)
    # print(self.enc_card)


def ScrapeProductData(self):
    self.i = 0
    while True:
        try:
            productdata = self.session.get(
                f"https://api.3stripes.net/gw-api/v2/hype/products/{self.pid}/availability?experiemnt_product_data=false"
            )
            if productdata.status_code != 200:
                time.sleep(3)
                raise Exception(
                    f"unknown status code: {productdata.status_code}")
            self.productid = productdata.json()['product_id']
            sizes = []
            pidsizes = []

            for x in productdata.json()['_embedded']['variations']:
                sizes.append(x['size'])
                pidsizes.append(x['variation_product_id'])
            # print(sizes)
            self.choosepid = random.choice(pidsizes)
            log('Got Productdata')
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
                "event_id":
                self.proddict["pid"]
            }
            basket = self.session.post(
                f"https://api.3stripes.net/gw-api/v2/hype/basket/",
                json=basketdata)
            if basket.status_code != 200:
                if 'HypeEventAlreadyParticipating' in str(basket.json()):
                    log('Task Already Entered')
                    self.skip = True
                    break
                raise Exception(f'unknown status code! [{basket.json()}]')
            # print(basket.text)
            self.basketid = basket.json()['basket_id']
            self.shippingbase = basket.json()['shipping_info']
            # print(self.shippingbase)
            self.currency = basket.json()['currency']
            break
        except Exception as e:
            log(str(e))


def InitiatePayment(self):
    self.i = 0
    while True:
        try:
            if self.addCard == False:
                data = {
                    "items": [{
                        "product_id": self.pid,
                        "variation_product_id": self.choosepid,
                        "quantity": 1
                    }],
                    "invoice_info": {
                        "type": "0"
                    },
                    "selected_shipping_type_id":
                    "home_delivery",
                    "billing_info": {
                        "id":
                        self.shippingbase['id'],
                        "personal_id":
                        self.shippingbase['personal_id'],
                        "address1":
                        self.shippingbase['address1'],
                        "house_number":
                        self.shippingbase['house_number'],
                        "colony":
                        self.shippingbase['colony'],
                        "address2":
                        self.shippingbase['address2'],
                        "middle_name":
                        self.shippingbase['middle_name'],
                        "address3":
                        self.shippingbase['address3'],
                        "first_name":
                        self.shippingbase['first_name'],
                        "city":
                        self.shippingbase['city'],
                        "document_type_id":
                        self.shippingbase['document_type_id'],
                        "district":
                        self.shippingbase['district'],
                        "postal_code":
                        self.shippingbase['postal_code'],
                        "last_name":
                        self.shippingbase['last_name'],
                        "country_code":
                        self.shippingbase['country_code'],
                        "business_name":
                        self.shippingbase['business_name'],
                        "tax_administration":
                        self.shippingbase['tax_administration'],
                    },
                    "selected_carrier_service_id":
                    "Standard-EFC-1",
                    "shipping_info": {
                        "id":
                        self.shippingbase['id'],
                        "personal_id":
                        self.shippingbase['personal_id'],
                        "address1":
                        self.shippingbase['address1'],
                        "house_number":
                        self.shippingbase['house_number'],
                        "colony":
                        self.shippingbase['colony'],
                        "address2":
                        self.shippingbase['address2'],
                        "middle_name":
                        self.shippingbase['middle_name'],
                        "address3":
                        self.shippingbase['address3'],
                        "first_name":
                        self.shippingbase['first_name'],
                        "city":
                        self.shippingbase['city'],
                        "document_type_id":
                        self.shippingbase['document_type_id'],
                        "district":
                        self.shippingbase['district'],
                        "postal_code":
                        self.shippingbase['postal_code'],
                        "last_name":
                        self.shippingbase['last_name'],
                        "country_code":
                        self.shippingbase['country_code'],
                        "business_name":
                        self.shippingbase['business_name'],
                        "tax_administration":
                        self.shippingbase['tax_administration'],
                    },
                    "prefix_payment_method":
                    self.ccdict['card_bin'],
                    "selected_invoice_type_id":
                    "0",
                    "event_id":
                    self.proddict["pid"],
                    "payment_info": {
                        "amount":
                        self.proddict['price'],
                        "security_check_info": {
                            "cvv": self.task['CVV'],
                        },
                        "payment_info_reference_id":
                        self.ccdict['payment_info_reference_id'],
                        "payment_card_type":
                        self.ccdict['card_type'],
                        "event_id":
                        self.proddict["pid"],
                        "currency":
                        self.currency,
                        "payment_method_id":
                        "CREDIT_CARD"
                    },
                    "selected_payment_method_id":
                    "CREDIT_CARD"
                }
            else:
                data = {
                    "items": [{
                        "product_id": self.pid,
                        "variation_product_id": self.choosepid,
                        "quantity": 1
                    }],
                    "invoice_info": {
                        "type": "0"
                    },
                    "selected_shipping_type_id":
                    "home_delivery",
                    "billing_info": {
                        "id":
                        self.shippingbase['id'],
                        "personal_id":
                        self.shippingbase['personal_id'],
                        "address1":
                        self.shippingbase['address1'],
                        "house_number":
                        self.shippingbase['house_number'],
                        "colony":
                        self.shippingbase['colony'],
                        "address2":
                        self.shippingbase['address2'],
                        "middle_name":
                        self.shippingbase['middle_name'],
                        "address3":
                        self.shippingbase['address3'],
                        "first_name":
                        self.shippingbase['first_name'],
                        "city":
                        self.shippingbase['city'],
                        "document_type_id":
                        self.shippingbase['document_type_id'],
                        "district":
                        self.shippingbase['district'],
                        "postal_code":
                        self.shippingbase['postal_code'],
                        "last_name":
                        self.shippingbase['last_name'],
                        "country_code":
                        self.shippingbase['country_code'],
                        "business_name":
                        self.shippingbase['business_name'],
                        "tax_administration":
                        self.shippingbase['tax_administration'],
                    },
                    "selected_carrier_service_id":
                    "Standard-EFC-1",
                    "shipping_info": {
                        "id":
                        self.shippingbase['id'],
                        "personal_id":
                        self.shippingbase['personal_id'],
                        "address1":
                        self.shippingbase['address1'],
                        "house_number":
                        self.shippingbase['house_number'],
                        "colony":
                        self.shippingbase['colony'],
                        "address2":
                        self.shippingbase['address2'],
                        "middle_name":
                        self.shippingbase['middle_name'],
                        "address3":
                        self.shippingbase['address3'],
                        "first_name":
                        self.shippingbase['first_name'],
                        "city":
                        self.shippingbase['city'],
                        "document_type_id":
                        self.shippingbase['document_type_id'],
                        "district":
                        self.shippingbase['district'],
                        "postal_code":
                        self.shippingbase['postal_code'],
                        "last_name":
                        self.shippingbase['last_name'],
                        "country_code":
                        self.shippingbase['country_code'],
                        "business_name":
                        self.shippingbase['business_name'],
                        "tax_administration":
                        self.shippingbase['tax_administration'],
                    },
                    "prefix_payment_method":
                    self.task['CardNumber'][0:5],
                    "selected_invoice_type_id":
                    "0",
                    "event_id":
                    self.proddict["pid"],
                    "payment_info": {
                        "amount": self.proddict['price'],
                        'payment_card_encrypted': {
                            'encrypted_card_number': self.enc_card['card'],
                            'encrypted_security_code': self.enc_card['cvv'],
                            'encrypted_expiry_month': self.enc_card['month'],
                            'encrypted_expiry_year': self.enc_card['year']
                        },
                        "payment_card_type": 'MASTER',
                        "event_id": self.proddict["pid"],
                        "save_payment_card": True,
                        "currency": self.currency,
                        "payment_method_id": "CREDIT_CARD"
                    },
                    "selected_payment_method_id":
                    "CREDIT_CARD"
                }
            ordersubmit = self.session.post(
                f"https://api.3stripes.net/gw-api/v2/hype/basket/{self.basketid}/order/",
                json=data)
            if ordersubmit.status_code != 200:
                raise Exception(
                    f'unknown status code [{ordersubmit.status_code}] {ordersubmit.text}'
                )
            if '{"order_number":"hype"}' in ordersubmit.text:
                if3ds = False
            else:
                if3ds = True
                base64token = ordersubmit.json(
                )['3d_secure']['3d_secure_base64_html']
                self.paymentsitecode = base64.b64decode(base64token)
            break
        except Exception as e:
            log(str(e))

    return if3ds


def Submit3Ds(self):
    self.i = 0
    while True:
        try:
            self.session.headers = {
                "user-agent":
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
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
            self.firstpaymentpost = self.session.post(self.paymentlink,
                                                      data=self.paymentdata)
            self.soup = BeautifulSoup(self.firstpaymentpost.text, 'lxml')
            self.adyenform = self.soup.find_all('script')
            self.token2 = self.adyenform[1].text.split("token:", 1)[1].split(
                ',', 1)[0].replace("'", '').replace(" ", '')
            self.paymentadyen = base64.b64decode(self.token2).decode('utf-8')
            self.badpayload = json.loads(self.paymentadyen)

            self.payload = {
                'acsTransID': self.badpayload['acsTransID'],
                'messageVersion': self.badpayload['messageVersion'],
                'threeDSServerTransID':
                self.badpayload['threeDSServerTransID'],
                "messageType": "CReq",
                "challengeWindowSize": "05"
            }
            fixedpayload = base64.b64encode(
                json.dumps(
                    self.payload).encode('utf-8')).decode('utf-8').replace(
                        "=", "")

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
                    self.checkoutid = driver.current_url.split(
                        'pspReference=', 1)[1]
                    self.log(kolorki.YELLOW, f"3DS challenge completed!")
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
                    self.log(kolorki.YELLOW,
                             f"Waiting for 3DS authentication...")
            break

        except Exception as e:
            exception_handler(self, self.log, e, f'{path}/failed.csv',
                              email[self.taskid], password[self.taskid],
                              'Failed to submit 3ds!')


class fetch:

    def __init__(self):
        t = 0
        print('Fetching Product Info')
        self.i = 0
        self.task = tasks[0]
        proddict = GetAllRaffles(tasks[0]['Country'], self)
        while t < len(tasks):
            global globalt
            self.task = tasks[t]
            self.proddict = proddict
            # GetAllRaffles('NL')
            # self.pid = self.task['Url']
            self.pid = self.proddict['name']
            self.skip = False
            # time.sleep(3)
            InitializeTask(self)
            log('Initialized Task')
            Login(self)
            time.sleep(3)
            self.addCard = False
            GetUserCC(self)
            if self.addCard == True:
                GenerateCard(self)
            time.sleep(3)
            ScrapeProductData(self)
            time.sleep(2)
            log('Initiating Signup')
            InitiateSignUp(self)
            if self.skip:
                t = t + 1
                globalt = globalt + 1
                continue
            log('Initiating Payment')
            time.sleep(3)
            if3ds = InitiatePayment(self)
            if if3ds:
                log('3DS Required!!')
            else:
                log('Raffle Entered!')
                t = t + 1
                globalt = globalt + 1
            time.sleep(10)


# log('Getting session')
# time.sleep(2)
# log('Logging in..')
# time.sleep(1.4)
# log('Fetching Product')
# time.sleep(0.5)
# log('PID Found')
# log('Looking for CC')
# time.sleep(1.3)
# log('CC Found: Ending on 4789')
# time.sleep(1.8)
# # log('Credit Card Successfully added to Account!')
# time.sleep(2)
# log('Sending Entry')
# time.sleep(0.9)
# log('Solving Adyen')
# time.sleep(2.3)
# log('Awaiting 3DS')
# time.sleep(16)
# log('Successfully Entered Raffle!')
# time.sleep(1.3)

fetch()