const puppeteer = require('puppeteer-extra'), RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha'), fs = require('fs'), axios = require('axios'), Papa = require('papaparse'), request = require('request'), proxyFile = fs['readFileSync']('../proxies.txt', 'utf-8');
var prompt = require('prompt');
const j = request['jar'](), settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), package = JSON['parse'](fs['readFileSync']('package.json', 'utf-8')), version = package['version'], licenseKey = settings['licenseKey'], API_KEY = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
var catchall = settings['catchall'];
let afew = [], maha = [], footshop = [], auth = ![];
const AutoGitUpdate = require('auto-git-update'), config = {
  'repository': 'https://github.com/Jarno97/JRafflesBot',
  'branch': 'main',
  'fromReleases': ![],
  'tempLocation': 'C:/temp/jraffles',
  'ignoreFiles': [
    'settings.json',
    'proxies.txt',
    'tasks/maha.csv',
    'tasks/footshop.csv',
    'tasks/afew.csv'
  ],
  'exitOnComplete': !![],
  'executeOnComplete': '../JRaffles.exe'
}, updater = new AutoGitUpdate(config);
let testValues, afewProducts = [], afewProduct;
const delay = _0x5e7b61 => new Promise(_0x3b21e7 => setTimeout(_0x3b21e7, _0x5e7b61));
async function getLicense(_0x4c2e2e) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x4c2e2e, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x3cc24f => _0x3cc24f['data'])['catch'](() => null);
}
;
async function checkLicense(_0x2812a1) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x1005ee = await getLicense(_0x2812a1);
  if (!_0x1005ee)
    return console['log']('License\x20not\x20found');
  if (!_0x1005ee['user'])
    return console['log']('License\x20not\x20bound');
  return _0x1005ee['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x10f4d6 = await prompt['get']('Module');
  return console['clear'](), _0x10f4d6['Module'];
}
;
async function getPassword() {
  var _0x47fa43 = await prompt['get']('Password');
  return console['clear'](), _0x47fa43['Password'];
}
;
async function getLinks() {
  var _0x307b6f = await prompt['get']('Links');
  return _0x307b6f['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x3a94aa = 0x0; _0x3a94aa < afewProducts['length']; _0x3a94aa++) {
    console['log']('\x20(' + _0x3a94aa + ')\x20' + afewProducts[_0x3a94aa]);
  }
  ;
  let _0x167b99 = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x167b99['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x3ad48c = new Date(Date['now']())['toLocaleTimeString']();
  return _0x3ad48c;
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
  let _0x123094 = proxyFile['split']('\x0a'), _0x21020e = _0x123094['map']((_0x54da1a, _0x4a6ada) => {
    sanatizeProxy = _0x54da1a['replace']('\x0d', '');
    if (_0x123094[_0x4a6ada + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x21020e;
}
;
async function afewScraper() {
  var _0x56746b = getProxy()[0x1]['split'](':');
  const _0x2f662c = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x56746b[0x0] + ':' + _0x56746b[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x3acd9c = await _0x2f662c['newPage']();
    await _0x3acd9c['authenticate']({
      'username': '' + _0x56746b[0x2],
      'password': '' + _0x56746b[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x3acd9c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3acd9c['setRequestInterception'](!![]), _0x3acd9c['on']('request', _0x37c874 => {
      _0x37c874['resourceType']() === 'image' || _0x37c874['resourceType']() === 'font' || _0x37c874['resourceType']() === 'media' ? _0x37c874['abort']() : _0x37c874['continue']();
    }), await _0x3acd9c['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x3acd9c['waitForTimeout'](0xbb8), await _0x3acd9c['waitForSelector']('.product-card');
    const _0x555df1 = await _0x3acd9c['$$eval']('a.product-card', _0x1c3a90 => {
      return _0x1c3a90['map'](_0x39d497 => _0x39d497['href']);
    });
    return afewProducts = _0x555df1;
  } catch (_0x3d5db0) {
    console['log']('\x20' + _0x3d5db0);
  } finally {
    _0x2f662c['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x41f10a, _0x31a5f8) {
  var _0xc83ae1 = getProxy()[_0x41f10a]['split'](':'), _0x26ff21 = modules[taskModule]['data'];
  _0x31a5f8 == 'exp' ? _0x26ff21['data']['attributes']['email'] = '' + maha[_0x41f10a]['FirstName'] + maha[_0x41f10a]['LastName'] + catchall : _0x26ff21['data']['attributes']['email'] = '' + maha[_0x41f10a]['Email'];
  _0x26ff21['data']['attributes']['properties']['$first_name'] = '' + maha[_0x41f10a]['FirstName'], _0x26ff21['data']['attributes']['properties']['$last_name'] = '' + maha[_0x41f10a]['LastName'], _0x26ff21['data']['attributes']['properties']['$address1'] = maha[_0x41f10a]['Address1'] + '\x20' + maha[_0x41f10a]['Address2'], _0x26ff21['data']['attributes']['properties']['$zip'] = '' + maha[_0x41f10a]['Zip'], _0x26ff21['data']['attributes']['properties']['$city'] = '' + maha[_0x41f10a]['City'], _0x26ff21['data']['attributes']['properties']['$country'] = '' + maha[_0x41f10a]['Country'], _0x26ff21['data']['attributes']['properties']['Size'] = '' + maha[_0x41f10a]['Size'], _0x26ff21['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x41f10a]['Follower'];
  var _0x58bcc6 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x26ff21),
    'proxy': 'http://' + _0xc83ae1[0x2] + ':' + _0xc83ae1[0x3] + '@' + _0xc83ae1[0x0] + ':' + _0xc83ae1[0x1]
  };
  return _0x31a5f8 === 'ver' && (_0x58bcc6['method'] = 'GET'), new Promise(function (_0x56e366, _0x127cb8) {
    callback = async (_0x4ce849, _0x225549, _0xb822d9) => {
      !_0x4ce849 && _0x225549['statusCode'] == 0xca || !_0x4ce849 && _0x225549['statusCode'] == 0xc8 ? _0x56e366(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x41f10a + 0x1) + ':\x20Raffle\x20Entered!')) : _0x127cb8(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x41f10a + 0x1) + ':\x20error\x20' + _0x4ce849 + '\x20' + JSON['stringify'](_0x225549)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x41f10a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x26ff21['data']['attributes']['email']), request(_0x58bcc6, callback);
    } catch (_0x496294) {
      console['log'](getTime() + '\x20Task\x20' + (_0x41f10a + 0x1) + ':\x20' + _0x496294);
    }
  });
}
;
async function footshopModule() {
  var _0x4845e6;
  puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x3af3c = 0x0; _0x3af3c < footshop['length']; _0x3af3c++) {
    async function _0x283167() {
      var _0x4e51f8 = await axios['get']('https://releases.footshop.com/api/raffles/dnbFe4QB3xHSyCfZuQE3')['then'](_0x2ef180 => _0x2ef180['data'])['catch'](() => null);
      let _0xcb9623 = _0x4e51f8['sizeSets']['Men']['sizes'];
      for (var _0x4c80b4 = 0x0; _0x4c80b4 < _0x4e51f8['sizeSets']['Men']['sizes']['length']; _0x4c80b4++) {
        if (_0xcb9623[_0x4c80b4]['eur'] == footshop[_0x3af3c]['Size'])
          return _0x4845e6 = _0xcb9623[_0x4c80b4]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3af3c + 0x1) + '\x20:\x20Found\x20SizePid');
      }
    }
    await _0x283167();
    if (footshop[_0x3af3c]['Email'] == '' || footshop[_0x3af3c]['FirstName'] == '' || footshop[_0x3af3c]['LastName'] == '' || footshop[_0x3af3c]['Country'] == '' || footshop[_0x3af3c]['Size'] == '' || footshop[_0x3af3c]['Address1'] == '' || footshop[_0x3af3c]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3af3c + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x2681b6 = 'https://releases.footshop.com/register/' + footshop[_0x3af3c]['Pid'] + '/Men/' + _0x4845e6;
    var _0x78d53a = getProxy()[_0x3af3c]['split'](':');
    const _0x498e6b = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x78d53a[0x0] + ':' + _0x78d53a[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x5cd121 = await _0x498e6b['newPage']();
      await _0x5cd121['authenticate']({
        'username': '' + _0x78d53a[0x2],
        'password': '' + _0x78d53a[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3af3c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5cd121['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5cd121['setRequestInterception'](!![]), _0x5cd121['on']('request', _0x5788d1 => {
        _0x5788d1['resourceType']() === 'image' || _0x5788d1['resourceType']() === 'font' || _0x5788d1['resourceType']() === 'media' ? _0x5788d1['abort']() : _0x5788d1['continue']();
      }), await _0x5cd121['goto']('' + _0x2681b6 + _0x4845e6), await _0x5cd121['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3af3c + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5cd121['type']('input[name=\x22email\x22]', '' + footshop[_0x3af3c]['Email']), await delay(0x640), await _0x5cd121['type']('input[name=\x22phone\x22]', '' + footshop[_0x3af3c]['Phone']), await delay(0x4b0), await _0x5cd121['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), await _0x5cd121['type']('input[name=\x22firstName\x22]', '' + footshop[_0x3af3c]['FirstName']), await delay(0x258), await _0x5cd121['type']('input[name=\x22lastName\x22]', '' + footshop[_0x3af3c]['LastName']), await delay(0xc8), await _0x5cd121['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x3af3c]['Follower']), await delay(0x4b0), await _0x5cd121['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3af3c + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5cd121['select']('select[name=\x22country\x22]', '' + footshop[_0x3af3c]['Country']), await delay(0x2bc), await _0x5cd121['type']('input[name=\x22streetName\x22]', '' + footshop[_0x3af3c]['Address1']), await delay(0x258), await _0x5cd121['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x3af3c]['Address2']), await delay(0xc8), await _0x5cd121['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x3af3c]['Zip']), await delay(0x1f4), await _0x5cd121['type']('input[name=\x22city\x22]', '' + footshop[_0x3af3c]['City']), await delay(0x4b0), await _0x5cd121['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x5cd121['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3af3c + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5cd121['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3af3c + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x5cd121['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3af3c + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5cd121['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5cd121['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0x5cd121['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x3af3c]['CardNumber']), await delay(0x320), await _0x5cd121['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x3af3c]['ExpiryDate']), await delay(0x226), await _0x5cd121['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x3af3c]['CVV']), await delay(0x226), await _0x5cd121['type']('input[name=\x22holderName\x22]', '' + footshop[_0x3af3c]['NameOnCard']), await delay(0x226), await _0x5cd121['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3af3c + 0x1) + '\x20:\x20Awaiting\x203DS'), await _0x5cd121['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3af3c + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x23e260) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3af3c + 0x1) + '\x20:\x20' + _0x23e260);
    } finally {
      _0x498e6b['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x587950, _0x567085) => {
  for (var _0x54561c = 0x0; _0x54561c < afew['length']; _0x54561c++) {
    if (afew[_0x54561c]['Email'] == '' || afew[_0x54561c]['FirstName'] == '' || afew[_0x54561c]['LastName'] == '' || afew[_0x54561c]['Country'] == '' || afew[_0x54561c]['Size'] == '' || afew[_0x54561c]['Address1'] == '' || afew[_0x54561c]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54561c + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x1491ce = getProxy()[_0x54561c]['split'](':');
    const _0x29eb82 = await puppeteer['launch']({
      'headless': ![],
      'args': ['--proxy-server=' + _0x1491ce[0x0] + ':' + _0x1491ce[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x3c6e73 = await _0x29eb82['newPage']();
      await _0x3c6e73['authenticate']({
        'username': '' + _0x1491ce[0x2],
        'password': '' + _0x1491ce[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54561c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3c6e73['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3c6e73['setRequestInterception'](!![]), _0x3c6e73['on']('request', _0x66a310 => {
        _0x66a310['resourceType']() === 'image' || _0x66a310['resourceType']() === 'font' || _0x66a310['resourceType']() === 'media' ? _0x66a310['abort']() : _0x66a310['continue']();
      }), await _0x3c6e73['goto'](_0x587950), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54561c + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x3c6e73['waitForTimeout'](0xfa0);
      const [_0x18f59d] = await _0x3c6e73['$x']('//button[contains(.,\x20\x27Alle\x27)]');
      _0x18f59d && await _0x18f59d['click']();
      await _0x3c6e73['waitForTimeout'](0x320), await _0x3c6e73['hover']('span[class=\x22release-type\x22]'), await _0x3c6e73['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x54561c]['Size'] + '\x22]'), await _0x3c6e73['waitForTimeout'](0x320), await _0x3c6e73['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x54561c]['Size'] + '\x22]'), await _0x3c6e73['waitForTimeout'](0x258), await _0x3c6e73['type']('#raffle-instagram', '' + afew[_0x54561c]['Follower'], { 'delay': 0x64 }), await _0x3c6e73['waitForTimeout'](0x384), await _0x3c6e73['click']('#raffle-terms'), await _0x3c6e73['waitForTimeout'](0x384);
      const [_0x5a68e6] = await _0x3c6e73['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0x5a68e6 && await _0x5a68e6['click']();
      ;
      await _0x3c6e73['waitForTimeout'](0xbb8), await _0x3c6e73['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54561c + 0x1) + '\x20:\x20Filling\x20Information'), _0x567085 == 'sec' ? await _0x3c6e73['type']('#checkout_email', '' + afew[_0x54561c]['FirstName'] + afew[_0x54561c]['LastName'] + settings['catchall']) : await _0x3c6e73['type']('#checkout_email', '' + afew[_0x54561c]['Email']), await _0x3c6e73['waitForTimeout'](0x258), await _0x3c6e73['select']('#checkout_shipping_address_country', '' + afew[_0x54561c]['Country']), await _0x3c6e73['waitForTimeout'](0x258), await _0x3c6e73['type']('#checkout_shipping_address_first_name', '' + afew[_0x54561c]['FirstName']), await _0x3c6e73['waitForTimeout'](0x320), await _0x3c6e73['type']('#checkout_shipping_address_last_name', '' + afew[_0x54561c]['LastName']), await _0x3c6e73['waitForTimeout'](0x2bc), await _0x3c6e73['type']('#checkout_shipping_address_address1', '' + afew[_0x54561c]['Address1']), await _0x3c6e73['waitForTimeout'](0x2bc), await _0x3c6e73['type']('#checkout_shipping_address_address2', '' + afew[_0x54561c]['Address2']), await _0x3c6e73['waitForTimeout'](0x2bc), await _0x3c6e73['type']('#checkout_shipping_address_zip', '' + afew[_0x54561c]['Postcode']), await _0x3c6e73['waitForTimeout'](0x2bc), await _0x3c6e73['type']('#checkout_shipping_address_city', '' + afew[_0x54561c]['City']), await _0x3c6e73['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54561c + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x3c6e73['click']('#continue_button'), await _0x3c6e73['waitForTimeout'](0x1194), await _0x3c6e73['waitForSelector']('#continue_button'), await _0x3c6e73['click']('#continue_button'), await _0x3c6e73['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54561c + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3c6e73['waitForSelector']('#continue_button'), await _0x3c6e73['click']('#continue_button'), await _0x3c6e73['waitForTimeout'](0x1194), await _0x3c6e73['waitForSelector']('#continue_button'), await _0x3c6e73['click']('#continue_button'), await _0x3c6e73['waitForTimeout'](0x2af8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54561c + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x30c197) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54561c + 0x1) + '\x20:\x20' + _0x30c197);
    } finally {
      _0x29eb82['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function main() {
  console['clear'](), await updater['autoUpdate'](), console['clear']();
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
          for (var _0x559843 = 0x0; _0x559843 < maha['length']; _0x559843++) {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x559843 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x559843), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
          }
        } else {
          if (taskModule == 0x2) {
            console['log']('Starting\x20' + maha['length'] + '\x20Experimental\x20MAHA\x20Tasks');
            for (var _0x559843 = 0x0; _0x559843 < maha['length']; _0x559843++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x559843 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x559843, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x3) {
              console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
              for (var _0x559843 = 0x0; _0x559843 < links['length']; _0x559843++) {
                modules[taskModule]['url'] = links[_0x559843], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x559843 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x559843, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
              }
            } else {
              if (taskModule == 0x4)
                await footshopModule();
              else {
                if (taskModule == 0x5) {
                  var _0x349f8e = await getPassword();
                  _0x349f8e == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
                }
              }
            }
          }
        }
      }
    } catch (_0x1e6266) {
      return console['log'](_0x1e6266), await delay(0x3a98);
    }
}
;
main();