const puppeteer = require('puppeteer-extra'), RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha'), fs = require('fs'), axios = require('axios'), Papa = require('papaparse'), request = require('request'), proxyFile = fs['readFileSync']('../proxies.txt', 'utf-8');
var prompt = require('prompt');
const j = request['jar'](), settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), package = JSON['parse'](fs['readFileSync']('package.json', 'utf-8')), version = package['version'], licenseKey = settings['licenseKey'], API_KEY = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
var catchall = settings['catchall'];
let afew = [], maha = [], footshop = [], auth = ![], testValues, afewProducts = [], afewProduct;
const delay = _0x60826d => new Promise(_0xf46f41 => setTimeout(_0xf46f41, _0x60826d));
async function getLicense(_0x1b1ec5) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x1b1ec5, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x202c03 => _0x202c03['data'])['catch'](() => null);
}
;
async function checkLicense(_0x54bbf1) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x5b9e5b = await getLicense(_0x54bbf1);
  if (!_0x5b9e5b)
    return console['log']('License\x20not\x20found');
  if (!_0x5b9e5b['user'])
    return console['log']('License\x20not\x20bound');
  return _0x5b9e5b['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0xf80250 = await prompt['get']('Module');
  return console['clear'](), _0xf80250['Module'];
}
;
async function getPassword() {
  var _0x428bbe = await prompt['get']('Password');
  return console['clear'](), _0x428bbe['Password'];
}
;
async function getLinks() {
  var _0x2e8899 = await prompt['get']('Links');
  return _0x2e8899['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0xff0e04 = 0x0; _0xff0e04 < afewProducts['length']; _0xff0e04++) {
    console['log']('\x20(' + _0xff0e04 + ')\x20' + afewProducts[_0xff0e04]);
  }
  ;
  let _0x24eb5e = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x24eb5e['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x544ad2 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x544ad2;
}
;
const modules = [
  { 'name': 'AFEW\x20RAFFLE' },
  {
    'name': 'MAHA\x20RAFFLE',
    'url': 'https://a.klaviyo.com/client/subscriptions/?company_id=THxSew',
    'data': {
      'data': {
        'type': 'subscription',
        'attributes': {
          'list_id': 'TFTWYv',
          'custom_source': 'Air\x20Jordan\x201\x20Retro\x20High\x20OG\x20Lost\x20and\x20Found',
          'email': '',
          'properties': {
            '$address1': '',
            '$city': '',
            '$country': '',
            '$first_name': '',
            '$last_name': '',
            '$zip': '',
            '$consent_method': 'Klaviyo\x20Form',
            '$consent_form_id': 'V4PNGA',
            '$consent_form_version': 0x6fd46d,
            'Instagram\x20Handle': '',
            'Shipping': 'Shipping',
            'Size': '',
            'services': '{\x22shopify\x22:{\x22source\x22:\x22form\x22}}',
            '$timezone_offset': 0x1
          }
        }
      }
    },
    'headers': {
      'accept': '*/*',
      'accept-encoding': 'gzip,\x20deflate,\x20br',
      'access-control-allow-headers': '*',
      'content-type': 'application/json',
      'origin': 'https://www.maha-amsterdam.com',
      'referer': 'https://www.maha-amsterdam.com/',
      'revision': '2022-02-16',
      'User-Agent': 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36',
      'sec-ch-ua': '\x22Chromium\x22;v=\x22106\x22,\x20\x22Google\x20Chrome\x22;v=\x22106\x22,\x20\x22Not;A=Brand\x22;v=\x2299\x22',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '\x27Windows\x27',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site'
    }
  },
  {
    'name': 'MAHA\x20RAFFLE\x20Experimental',
    'url': 'https://a.klaviyo.com/client/subscriptions/?company_id=THxSew',
    'data': {
      'data': {
        'type': 'subscription',
        'attributes': {
          'list_id': 'TFTWYv',
          'custom_source': 'Air\x20Jordan\x201\x20Retro\x20High\x20OG\x20Lost\x20and\x20Found',
          'email': '',
          'properties': {
            '$address1': '',
            '$city': '',
            '$country': '',
            '$first_name': '',
            '$last_name': '',
            '$zip': '',
            '$consent_method': 'Klaviyo\x20Form',
            '$consent_form_id': 'V4PNGA',
            '$consent_form_version': 0x6fd46d,
            'Instagram\x20Handle': '',
            'Shipping': 'Shipping',
            'Size': '',
            'services': '{\x22shopify\x22:{\x22source\x22:\x22form\x22}}',
            '$timezone_offset': 0x1
          }
        }
      }
    },
    'headers': {
      'accept': '*/*',
      'accept-encoding': 'gzip,\x20deflate,\x20br',
      'access-control-allow-headers': '*',
      'content-type': 'application/json',
      'revision': '2022-02-16',
      'User-Agent': 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36',
      'sec-ch-ua': '\x22Chromium\x22;v=\x22106\x22,\x20\x22Google\x20Chrome\x22;v=\x22106\x22,\x20\x22Not;A=Brand\x22;v=\x2299\x22',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '\x27Windows\x27',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site'
    }
  },
  {
    'name': 'MAHA\x20RAFFLE\x20Verification',
    'url': '',
    'data': {
      'data': {
        'type': 'subscription',
        'attributes': {
          'list_id': 'TFTWYv',
          'custom_source': 'Air\x20Jordan\x201\x20Retro\x20High\x20OG\x20Lost\x20and\x20Found',
          'email': '',
          'properties': {
            '$address1': '',
            '$city': '',
            '$country': '',
            '$first_name': '',
            '$last_name': '',
            '$zip': '',
            '$consent_method': 'Klaviyo\x20Form',
            '$consent_form_id': 'V4PNGA',
            '$consent_form_version': 0x6fd46d,
            'Instagram\x20Handle': '',
            'Shipping': 'Shipping',
            'Size': '',
            'services': '{\x22shopify\x22:{\x22source\x22:\x22form\x22}}',
            '$timezone_offset': 0x1
          }
        }
      }
    },
    'headers': {
      'accept': '*/*',
      'accept-encoding': 'gzip,\x20deflate,\x20br',
      'access-control-allow-headers': '*',
      'content-type': 'application/json',
      'origin': 'https://www.maha-amsterdam.com',
      'referer': 'https://www.maha-amsterdam.com/',
      'revision': '2022-02-16',
      'User-Agent': 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36',
      'sec-ch-ua': '\x22Chromium\x22;v=\x22106\x22,\x20\x22Google\x20Chrome\x22;v=\x22106\x22,\x20\x22Not;A=Brand\x22;v=\x2299\x22',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '\x27Windows\x27',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'cross-site'
    }
  },
  { 'name': 'FOOTSHOP\x20RAFFLE' },
  { 'name': 'AFEW\x20SECRET' }
], afewCSV = fs['readFileSync']('../tasks/afew.csv', 'utf8');
afew = Papa['parse'](afewCSV, { 'header': !![] })['data'];
const mahaCSV = fs['readFileSync']('../tasks/maha.csv', 'utf-8');
maha = Papa['parse'](mahaCSV, { 'header': !![] })['data'];
const footshopCSV = fs['readFileSync']('../tasks/footshop.csv', 'utf-8');
footshop = Papa['parse'](footshopCSV, { 'header': !![] })['data'];
function getProxy() {
  let _0x3a2cc9 = proxyFile['split']('\x0a'), _0x1f60d4 = _0x3a2cc9['map']((_0x121c01, _0x37a2d8) => {
    sanatizeProxy = _0x121c01['replace']('\x0d', '');
    if (_0x3a2cc9[_0x37a2d8 + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x1f60d4;
}
;
async function afewScraper() {
  var _0x134a6f = getProxy()[0x1]['split'](':');
  const _0x38082c = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x134a6f[0x0] + ':' + _0x134a6f[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0xbcfa4d = await _0x38082c['newPage']();
    await _0xbcfa4d['authenticate']({
      'username': '' + _0x134a6f[0x2],
      'password': '' + _0x134a6f[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0xbcfa4d['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xbcfa4d['setRequestInterception'](!![]), _0xbcfa4d['on']('request', _0x14a6dc => {
      _0x14a6dc['resourceType']() === 'image' || _0x14a6dc['resourceType']() === 'font' || _0x14a6dc['resourceType']() === 'media' ? _0x14a6dc['abort']() : _0x14a6dc['continue']();
    }), await _0xbcfa4d['goto']('https://de.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0xbcfa4d['waitForTimeout'](0xbb8), await _0xbcfa4d['waitForSelector']('.product-card');
    const _0x24fa6e = await _0xbcfa4d['$$eval']('a.product-card', _0x2dd177 => {
      return _0x2dd177['map'](_0x937ff5 => _0x937ff5['href']);
    });
    return afewProducts = _0x24fa6e;
  } catch (_0x273280) {
    console['log']('\x20' + _0x273280);
  } finally {
    _0x38082c['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0xa4975c, _0x2908bb) {
  var _0x3524a1 = getProxy()[_0xa4975c]['split'](':'), _0x1ce834 = modules[taskModule]['data'];
  _0x2908bb == 'exp' ? _0x1ce834['data']['attributes']['email'] = '' + maha[_0xa4975c]['FirstName'] + maha[_0xa4975c]['LastName'] + catchall : _0x1ce834['data']['attributes']['email'] = '' + maha[_0xa4975c]['Email'];
  _0x1ce834['data']['attributes']['properties']['$first_name'] = '' + maha[_0xa4975c]['FirstName'], _0x1ce834['data']['attributes']['properties']['$last_name'] = '' + maha[_0xa4975c]['LastName'], _0x1ce834['data']['attributes']['properties']['$address1'] = maha[_0xa4975c]['Address1'] + '\x20' + maha[_0xa4975c]['Address2'], _0x1ce834['data']['attributes']['properties']['$zip'] = '' + maha[_0xa4975c]['Zip'], _0x1ce834['data']['attributes']['properties']['$city'] = '' + maha[_0xa4975c]['City'], _0x1ce834['data']['attributes']['properties']['$country'] = '' + maha[_0xa4975c]['Country'], _0x1ce834['data']['attributes']['properties']['Size'] = '' + maha[_0xa4975c]['Size'], _0x1ce834['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0xa4975c]['Follower'];
  var _0x295de4 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x1ce834),
    'proxy': 'http://' + _0x3524a1[0x2] + ':' + _0x3524a1[0x3] + '@' + _0x3524a1[0x0] + ':' + _0x3524a1[0x1]
  };
  return _0x2908bb === 'ver' && (_0x295de4['method'] = 'GET'), new Promise(function (_0x4ab641, _0x21a316) {
    callback = async (_0x255da1, _0x3e0515, _0xe37904) => {
      !_0x255da1 && _0x3e0515['statusCode'] == 0xca || !_0x255da1 && _0x3e0515['statusCode'] == 0xc8 ? _0x4ab641(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa4975c + 0x1) + ':\x20Raffle\x20Entered!')) : _0x21a316(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa4975c + 0x1) + ':\x20error\x20' + _0x255da1 + '\x20' + JSON['stringify'](_0x3e0515)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa4975c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1ce834['data']['attributes']['email']), request(_0x295de4, callback);
    } catch (_0x263c54) {
      console['log'](getTime() + '\x20Task\x20' + (_0xa4975c + 0x1) + ':\x20' + _0x263c54);
    }
  });
}
;
async function footshopModule(_0x19eec8) {
  var _0x58626c;
  puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x11d095 = 0x0; _0x11d095 < footshop['length']; _0x11d095++) {
    async function _0x529beb() {
      var _0xc9b97b = await axios['get']('https://releases.footshop.com/api/raffles/dnbFe4QB3xHSyCfZuQE3')['then'](_0xf6e3b4 => _0xf6e3b4['data'])['catch'](() => null);
      let _0x208676 = _0xc9b97b['sizeSets']['Men']['sizes'];
      for (var _0x399ea4 = 0x0; _0x399ea4 < _0xc9b97b['sizeSets']['Men']['sizes']['length']; _0x399ea4++) {
        if (_0x208676[_0x399ea4]['eur'] == footshop[_0x11d095]['Size'])
          return _0x58626c = _0x208676[_0x399ea4]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11d095 + 0x1) + '\x20:\x20Found\x20SizePid');
      }
    }
    await _0x529beb();
    if (footshop[_0x11d095]['Email'] == '' || footshop[_0x11d095]['FirstName'] == '' || footshop[_0x11d095]['LastName'] == '' || footshop[_0x11d095]['Country'] == '' || footshop[_0x11d095]['Size'] == '' || footshop[_0x11d095]['Address1'] == '' || footshop[_0x11d095]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11d095 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x3cd084 = getProxy()[_0x11d095]['split'](':');
    const _0x48d664 = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x3cd084[0x0] + ':' + _0x3cd084[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x278fb7 = await _0x48d664['newPage']();
      await _0x278fb7['authenticate']({
        'username': '' + _0x3cd084[0x2],
        'password': '' + _0x3cd084[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11d095 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x278fb7['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x278fb7['setRequestInterception'](!![]), _0x278fb7['on']('request', _0x311f96 => {
        _0x311f96['resourceType']() === 'image' || _0x311f96['resourceType']() === 'font' || _0x311f96['resourceType']() === 'media' ? _0x311f96['abort']() : _0x311f96['continue']();
      }), await _0x278fb7['goto']('' + _0x19eec8 + _0x58626c), await _0x278fb7['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11d095 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x278fb7['type']('input[name=\x22email\x22]', '' + footshop[_0x11d095]['Email']), await delay(0x640), await _0x278fb7['type']('input[name=\x22phone\x22]', '' + footshop[_0x11d095]['Phone']), await delay(0x4b0), await _0x278fb7['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), await _0x278fb7['type']('input[name=\x22firstName\x22]', '' + footshop[_0x11d095]['FirstName']), await delay(0x258), await _0x278fb7['type']('input[name=\x22lastName\x22]', '' + footshop[_0x11d095]['LastName']), await delay(0xc8), await _0x278fb7['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x11d095]['Follower']), await delay(0x4b0), await _0x278fb7['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11d095 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x278fb7['select']('select[name=\x22country\x22]', '' + footshop[_0x11d095]['Country']), await delay(0x2bc), await _0x278fb7['type']('input[name=\x22streetName\x22]', '' + footshop[_0x11d095]['Address1']), await delay(0x258), await _0x278fb7['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x11d095]['Address2']), await delay(0xc8), await _0x278fb7['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x11d095]['Zip']), await delay(0x1f4), await _0x278fb7['type']('input[name=\x22city\x22]', '' + footshop[_0x11d095]['City']), await delay(0x4b0), await _0x278fb7['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x278fb7['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11d095 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x278fb7['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11d095 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x278fb7['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11d095 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x278fb7['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x278fb7['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0x278fb7['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x11d095]['CardNumber']), await delay(0x320), await _0x278fb7['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x11d095]['ExpiryDate']), await delay(0x226), await _0x278fb7['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x11d095]['CVV']), await delay(0x226), await _0x278fb7['type']('input[name=\x22holderName\x22]', '' + footshop[_0x11d095]['NameOnCard']), await delay(0x226), await _0x278fb7['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11d095 + 0x1) + '\x20:\x20Awaiting\x203DS'), await _0x278fb7['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11d095 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x3da57e) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11d095 + 0x1) + '\x20:\x20' + _0x3da57e);
    } finally {
      _0x48d664['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x468833, _0x41b47e) => {
  for (var _0x5ca350 = 0x0; _0x5ca350 < afew['length']; _0x5ca350++) {
    if (afew[_0x5ca350]['Email'] == '' || afew[_0x5ca350]['FirstName'] == '' || afew[_0x5ca350]['LastName'] == '' || afew[_0x5ca350]['Country'] == '' || afew[_0x5ca350]['Size'] == '' || afew[_0x5ca350]['Address1'] == '' || afew[_0x5ca350]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5ca350 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x493e78 = getProxy()[_0x5ca350]['split'](':');
    const _0x49958c = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x493e78[0x0] + ':' + _0x493e78[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x5af28b = await _0x49958c['newPage']();
      await _0x5af28b['authenticate']({
        'username': '' + _0x493e78[0x2],
        'password': '' + _0x493e78[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5ca350 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5af28b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5af28b['setRequestInterception'](!![]), _0x5af28b['on']('request', _0x4df408 => {
        _0x4df408['resourceType']() === 'image' || _0x4df408['resourceType']() === 'font' || _0x4df408['resourceType']() === 'media' ? _0x4df408['abort']() : _0x4df408['continue']();
      }), await _0x5af28b['goto'](_0x468833), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5ca350 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x5af28b['waitForTimeout'](0xfa0);
      const [_0x46a92e] = await _0x5af28b['$x']('//button[contains(.,\x20\x27Alle\x27)]');
      _0x46a92e && await _0x46a92e['click']();
      await _0x5af28b['waitForTimeout'](0x320), await _0x5af28b['hover']('span[class=\x22release-type\x22]'), await _0x5af28b['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x5ca350]['Size'] + '\x22]'), await _0x5af28b['waitForTimeout'](0x320), await _0x5af28b['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x5ca350]['Size'] + '\x22]'), await _0x5af28b['waitForTimeout'](0x258), await _0x5af28b['type']('#raffle-instagram', '' + afew[_0x5ca350]['Follower'], { 'delay': 0x64 }), await _0x5af28b['waitForTimeout'](0x384), await _0x5af28b['click']('#raffle-terms'), await _0x5af28b['waitForTimeout'](0x384);
      const [_0x3d3bbe] = await _0x5af28b['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0x3d3bbe && await _0x3d3bbe['click']();
      ;
      await _0x5af28b['waitForTimeout'](0xbb8), await _0x5af28b['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5ca350 + 0x1) + '\x20:\x20Filling\x20Information'), _0x41b47e == 'sec' ? await _0x5af28b['type']('#checkout_email', '' + afew[_0x5ca350]['FirstName'] + afew[_0x5ca350]['LastName'] + settings['catchall']) : await _0x5af28b['type']('#checkout_email', '' + afew[_0x5ca350]['Email']), await _0x5af28b['waitForTimeout'](0x258), await _0x5af28b['select']('#checkout_shipping_address_country', '' + afew[_0x5ca350]['Country']), await _0x5af28b['waitForTimeout'](0x258), await _0x5af28b['type']('#checkout_shipping_address_first_name', '' + afew[_0x5ca350]['FirstName']), await _0x5af28b['waitForTimeout'](0x320), await _0x5af28b['type']('#checkout_shipping_address_last_name', '' + afew[_0x5ca350]['LastName']), await _0x5af28b['waitForTimeout'](0x2bc), await _0x5af28b['type']('#checkout_shipping_address_address1', '' + afew[_0x5ca350]['Address1']), await _0x5af28b['waitForTimeout'](0x2bc), await _0x5af28b['type']('#checkout_shipping_address_address2', '' + afew[_0x5ca350]['Address2']), await _0x5af28b['waitForTimeout'](0x2bc), await _0x5af28b['type']('#checkout_shipping_address_zip', '' + afew[_0x5ca350]['Postcode']), await _0x5af28b['waitForTimeout'](0x2bc), await _0x5af28b['type']('#checkout_shipping_address_city', '' + afew[_0x5ca350]['City']), await _0x5af28b['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5ca350 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x5af28b['click']('#continue_button'), await _0x5af28b['waitForTimeout'](0x1194), await _0x5af28b['waitForSelector']('#continue_button'), await _0x5af28b['click']('#continue_button'), await _0x5af28b['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5ca350 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x5af28b['waitForSelector']('#continue_button'), await _0x5af28b['click']('#continue_button'), await _0x5af28b['waitForTimeout'](0x1194), await _0x5af28b['waitForSelector']('#continue_button'), await _0x5af28b['click']('#continue_button'), await _0x5af28b['waitForTimeout'](0x2af8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5ca350 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x20226d) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5ca350 + 0x1) + '\x20:\x20' + _0x20226d);
    } finally {
      _0x49958c['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function main() {
  console['clear']();
  if (licenseKey == '') {
    console['log']('No\x20key\x20found\x20in\x20settings.json');
    return await delay(0x2710);
    ;
  }
  if (proxyFile['length'] == 0x0)
    return console['log']('No\x20proxies\x20found\x20in\x20proxies.txt'), await delay(0x2710);
  await checkLicense(licenseKey);
  if (auth === ![])
    return console['log']('Closing\x20Browser'), await delay(0xbb8);
  else
    try {
      await delay(0x320), console['clear'](), console['log']('Welcome\x20to\x20JRaffles();\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a\x0a\x20(0)\x20AFEW\x20Raffle\x0a\x20(1)\x20MAHA\x20Raffle\x0a\x20(2)\x20MAHA\x20Raffle\x20Experimental\x0a\x20(3)\x20MAHA\x20Link\x20Verification\x0a\x20(4)\x20Footshop\x20Raffle\x0a'), taskModule = await getModule();
      if (taskModule == 0x0)
        await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct]);
      else {
        if (taskModule == 0x1) {
          console['log']('Starting\x20' + maha['length'] + '\x20MAHA\x20Tasks');
          for (var _0x2d03dd = 0x0; _0x2d03dd < maha['length']; _0x2d03dd++) {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2d03dd + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2d03dd), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
          }
        } else {
          if (taskModule == 0x2) {
            console['log']('Starting\x20' + maha['length'] + '\x20Experimental\x20MAHA\x20Tasks');
            for (var _0x2d03dd = 0x0; _0x2d03dd < maha['length']; _0x2d03dd++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2d03dd + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2d03dd, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x3) {
              console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
              for (var _0x2d03dd = 0x0; _0x2d03dd < links['length']; _0x2d03dd++) {
                modules[taskModule]['url'] = links[_0x2d03dd], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2d03dd + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2d03dd, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
              }
            } else {
              if (taskModule == 0x4)
                await footshopModule('https://releases.footshop.com/register/dnbFe4QB3xHSyCfZuQE3/Men/');
              else {
                if (taskModule == 0x5) {
                  var _0x434df9 = await getPassword();
                  _0x434df9 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
                }
              }
            }
          }
        }
      }
    } catch (_0x28cf71) {
      return console['log'](_0x28cf71), await delay(0x3a98);
    }
}
;
main();