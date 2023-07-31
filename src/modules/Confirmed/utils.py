from akamai_bmp_client import AkamaiBMPClient
from collections import OrderedDict
import hashlib
import time
import csv

def generate_signature():
    payload = "m79qyapn2kbucuv96ednvh22"+ "adxnNmeJs6" + str(round(time.time()))
    return hashlib.sha256(payload.encode('utf-8')).hexdigest().upper()
def GetHeaders(countrycode, sensorbool):

    ua = "app/CONFIRMED; os/iOS; os-version/16.1.1; app-version/4.23.0; buildnumber/2023.5.15.18.52; type/iPhone14,5; fingerprint/EC99A58D-30FA-4FC4-9E8E-BDB2519F2FF8"
    headers = OrderedDict([
    ('X-Api-key', 'qbSxC4cM5zqtyJ14pPIKZQFN'),
    ('X-Signature', generate_signature()),
    ('Accept-Language', f'{str(countrycode).lower()}-{str(countrycode).upper()}'),
    ('Content-Type', 'application/json'),
    ('Accept', 'application/hal+json'),
    ('User-Agent', 'CONFIRMED/2023.5.15.18.52 CFNetwork/1399 Darwin/22.1.0'),
    ('x-forter-mobile-uid', 'EC99A58D-30FA-4FC4-9E8E-BDB2519F2FF8'),
    ('x-device-info', ua),
    ('x-app-info', 'platform/iOS version/4.23.0'),
    ])
    if sensorbool:
        sensor = AkamaiBMPClient.get_sensor()
        if sensor == "error":
            GetHeaders(countrycode, True)
        else:
            headers["X-acf-sensor-data"] = sensor
    return headers


def ReadCSV(path):
    profilename = []
    name = []
    surname = []
    email = []
    password = []
    dateofbirth = []
    street = []
    housenumber = []
    postcode = []
    countrycode = []
    city = []
    state = []
    phoneprefix = []
    phonenumber = []
    cardnumber = []
    cardmonth = []
    cardyear = []
    cardcvv = []
    district = []
    with open(f'{path}/tasks.csv', encoding="utf8") as csvDataFile:
        csvReader = csv.reader(csvDataFile)
        for row in csvReader:
            profilename.append(row[0])
            name.append(row[1])
            surname.append(row[2])
            email.append(row[3])
            password.append(row[4])
            dateofbirth.append(row[5])
            street.append(row[6])
            housenumber.append(row[7])
            postcode.append(row[8])
            countrycode.append(row[9])
            city.append(row[10])
            state.append(row[11])
            district.append(row[12])
            phoneprefix.append(row[13])
            phonenumber.append(row[14])
            cardnumber.append(row[15])
            cardmonth.append(row[16])
            cardyear.append(row[17])
            cardcvv.append(row[18])
    return profilename, name, surname, email, password, dateofbirth, street, housenumber, postcode, countrycode, city, state, district, phoneprefix, phonenumber,cardnumber, cardmonth, cardyear, cardcvv
    