import requests
import json
import uuid

with open('../settings.json', 'r') as settings:
    settings_parsed = json.load(settings)
    CapKey = settings_parsed['CapSolver']



class AkamaiBMPClient:
    def get_sensor():
        deviceId = str(uuid.uuid4())
        s = requests.Session()

        headers = {
            'Host': 'api.capsolver.com',
            'Content-Type': 'application/json'
        }
        data = {
            "clientKey": CapKey,
            "task": {
                "type": "AntiAkamaiBMPTask",
                "packageName": "com.adidas.confirmed.app",
                "country": "DE",
                "AppID": "AF928354-B915-442E-AAB2-B6106BB35F30",
                "version": "3.2.3",
                "deviceId": deviceId,
                "deviceName": "iPhone14,3/16.4.1",
                "count": 1,
            }
        }
        response = s.post('https://api.capsolver.com/akamaibmp/invoke',
                          data=json.dumps(data),
                          headers=headers)
        sensor = response.json()
        # print(response.json())
        return str(sensor['solution']['sensors'][0])