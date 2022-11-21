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
const delay = _0x24491d => new Promise(_0x1515ff => setTimeout(_0x1515ff, _0x24491d));
async function getLicense(_0x3e6d48) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x3e6d48, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0xe5aeae => _0xe5aeae['data'])['catch'](() => null);
}
;
async function checkLicense(_0x46e9b1) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x42b22b = await getLicense(_0x46e9b1);
  if (!_0x42b22b)
    return console['log']('License\x20not\x20found');
  if (!_0x42b22b['user'])
    return console['log']('License\x20not\x20bound');
  return _0x42b22b['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0xa21730 = await prompt['get']('Module');
  return console['clear'](), _0xa21730['Module'];
}
;
async function getPassword() {
  var _0x3c8929 = await prompt['get']('Password');
  return console['clear'](), _0x3c8929['Password'];
}
;
async function getLinks() {
  var _0x3454c1 = await prompt['get']('Links');
  return _0x3454c1['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x16f908 = 0x0; _0x16f908 < afewProducts['length']; _0x16f908++) {
    console['log']('\x20(' + _0x16f908 + ')\x20' + afewProducts[_0x16f908]);
  }
  ;
  let _0x263b3d = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x263b3d['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x4869e4 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x4869e4;
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
  let _0x19c05a = proxyFile['split']('\x0a'), _0x246ba1 = _0x19c05a['map']((_0x4359e6, _0x3d2fdb) => {
    sanatizeProxy = _0x4359e6['replace']('\x0d', '');
    if (_0x19c05a[_0x3d2fdb + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x246ba1;
}
;
async function afewScraper() {
  var _0x61f127 = getProxy()[0x1]['split'](':');
  const _0x16d47e = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x61f127[0x0] + ':' + _0x61f127[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x3250aa = await _0x16d47e['newPage']();
    await _0x3250aa['authenticate']({
      'username': '' + _0x61f127[0x2],
      'password': '' + _0x61f127[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x3250aa['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3250aa['setRequestInterception'](!![]), _0x3250aa['on']('request', _0x2dca83 => {
      _0x2dca83['resourceType']() === 'image' || _0x2dca83['resourceType']() === 'font' || _0x2dca83['resourceType']() === 'media' ? _0x2dca83['abort']() : _0x2dca83['continue']();
    }), await _0x3250aa['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x3250aa['waitForTimeout'](0xbb8), await _0x3250aa['waitForSelector']('.product-card');
    const _0x392bbb = await _0x3250aa['$$eval']('a.product-card', _0x37e2d6 => {
      return _0x37e2d6['map'](_0x191fbe => _0x191fbe['href']);
    });
    return afewProducts = _0x392bbb;
  } catch (_0x39d94e) {
    console['log']('\x20' + _0x39d94e);
  } finally {
    _0x16d47e['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x316a67, _0x4cfeb3) {
  var _0x341895 = getProxy()[_0x316a67]['split'](':'), _0x47d1fd = modules[taskModule]['data'];
  _0x4cfeb3 == 'exp' ? _0x47d1fd['data']['attributes']['email'] = '' + maha[_0x316a67]['FirstName'] + maha[_0x316a67]['LastName'] + catchall : _0x47d1fd['data']['attributes']['email'] = '' + maha[_0x316a67]['Email'];
  _0x47d1fd['data']['attributes']['properties']['$first_name'] = '' + maha[_0x316a67]['FirstName'], _0x47d1fd['data']['attributes']['properties']['$last_name'] = '' + maha[_0x316a67]['LastName'], _0x47d1fd['data']['attributes']['properties']['$address1'] = maha[_0x316a67]['Address1'] + '\x20' + maha[_0x316a67]['Address2'], _0x47d1fd['data']['attributes']['properties']['$zip'] = '' + maha[_0x316a67]['Zip'], _0x47d1fd['data']['attributes']['properties']['$city'] = '' + maha[_0x316a67]['City'], _0x47d1fd['data']['attributes']['properties']['$country'] = '' + maha[_0x316a67]['Country'], _0x47d1fd['data']['attributes']['properties']['Size'] = '' + maha[_0x316a67]['Size'], _0x47d1fd['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x316a67]['Follower'];
  var _0x5c97ec = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x47d1fd),
    'proxy': 'http://' + _0x341895[0x2] + ':' + _0x341895[0x3] + '@' + _0x341895[0x0] + ':' + _0x341895[0x1]
  };
  return _0x4cfeb3 === 'ver' && (_0x5c97ec['method'] = 'GET'), new Promise(function (_0x3f1b89, _0x112466) {
    callback = async (_0x2233a2, _0x2d79ef, _0x5a3b9a) => {
      !_0x2233a2 && _0x2d79ef['statusCode'] == 0xca || !_0x2233a2 && _0x2d79ef['statusCode'] == 0xc8 ? _0x3f1b89(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x316a67 + 0x1) + ':\x20Raffle\x20Entered!')) : _0x112466(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x316a67 + 0x1) + ':\x20error\x20' + _0x2233a2 + '\x20' + JSON['stringify'](_0x2d79ef)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x316a67 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x47d1fd['data']['attributes']['email']), request(_0x5c97ec, callback);
    } catch (_0x28d366) {
      console['log'](getTime() + '\x20Task\x20' + (_0x316a67 + 0x1) + ':\x20' + _0x28d366);
    }
  });
}
;
async function footshopModule() {
  var _0x4d27d4;
  puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x2aa006 = 0x0; _0x2aa006 < footshop['length']; _0x2aa006++) {
    if (footshop[_0x2aa006]['Email'] == '' || footshop[_0x2aa006]['FirstName'] == '' || footshop[_0x2aa006]['LastName'] == '' || footshop[_0x2aa006]['Country'] == '' || footshop[_0x2aa006]['Size'] == '' || footshop[_0x2aa006]['Address1'] == '' || footshop[_0x2aa006]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2aa006 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    async function _0x43d2ae() {
      var _0x44170b = await axios['get']('https://releases.footshop.com/api/raffles/' + footshop[_0x2aa006]['Pid'])['then'](_0x555be1 => _0x555be1['data'])['catch'](() => null);
      let _0x4cef3a = _0x44170b['sizeSets']['Men']['sizes'];
      async function _0x1a0f01() {
        for (var _0x4e4193 = 0x0; _0x4e4193 < _0x44170b['sizeSets']['Men']['sizes']['length']; _0x4e4193++) {
          if (_0x4cef3a[_0x4e4193]['eur'] == footshop[_0x2aa006]['Size'])
            return _0x4d27d4 = _0x4cef3a[_0x4e4193]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2aa006 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2aa006 + 0x1) + '\x20:\x20Size\x20' + footshop[_0x2aa006]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x52466b = await _0x1a0f01();
      if (_0x52466b == ![])
        return ![];
    }
    let _0x12e8be = await _0x43d2ae();
    if (_0x12e8be == ![])
      continue;
    if (footshop[_0x2aa006]['Email'] == '' || footshop[_0x2aa006]['FirstName'] == '' || footshop[_0x2aa006]['LastName'] == '' || footshop[_0x2aa006]['Country'] == '' || footshop[_0x2aa006]['Size'] == '' || footshop[_0x2aa006]['Address1'] == '' || footshop[_0x2aa006]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2aa006 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x48928b = 'https://releases.footshop.com/register/' + footshop[_0x2aa006]['Pid'] + '/Men/' + _0x4d27d4;
    var _0x366e14 = getProxy()[_0x2aa006]['split'](':');
    const _0x246384 = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x366e14[0x0] + ':' + _0x366e14[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x74600f = await _0x246384['newPage']();
      await _0x74600f['authenticate']({
        'username': '' + _0x366e14[0x2],
        'password': '' + _0x366e14[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2aa006 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x74600f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x74600f['setRequestInterception'](!![]), _0x74600f['on']('request', _0x250abf => {
        _0x250abf['resourceType']() === 'image' || _0x250abf['resourceType']() === 'font' || _0x250abf['resourceType']() === 'media' ? _0x250abf['abort']() : _0x250abf['continue']();
      }), await _0x74600f['goto']('' + _0x48928b + _0x4d27d4), await _0x74600f['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2aa006 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x74600f['type']('input[name=\x22email\x22]', '' + footshop[_0x2aa006]['Email']), await delay(0x640), await _0x74600f['type']('input[name=\x22phone\x22]', '' + footshop[_0x2aa006]['Phone']), await delay(0x4b0), await _0x74600f['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), await _0x74600f['type']('input[name=\x22firstName\x22]', '' + footshop[_0x2aa006]['FirstName']), await delay(0x258), await _0x74600f['type']('input[name=\x22lastName\x22]', '' + footshop[_0x2aa006]['LastName']), await delay(0xc8), await _0x74600f['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x2aa006]['Follower']), await delay(0x4b0), await _0x74600f['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2aa006 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x74600f['select']('select[name=\x22country\x22]', '' + footshop[_0x2aa006]['Country']), await delay(0x2bc), await _0x74600f['type']('input[name=\x22streetName\x22]', '' + footshop[_0x2aa006]['Address1']), await delay(0x258), await _0x74600f['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x2aa006]['HouseNumber'] + footshop[_0x2aa006]['Address2']), await delay(0xc8), await _0x74600f['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x2aa006]['Zip']), await delay(0x1f4), await _0x74600f['type']('input[name=\x22city\x22]', '' + footshop[_0x2aa006]['City']), await delay(0x4b0), await _0x74600f['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x74600f['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2aa006 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x74600f['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2aa006 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x74600f['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2aa006 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x74600f['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x74600f['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0x74600f['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x2aa006]['CardNumber']), await delay(0x320), await _0x74600f['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x2aa006]['ExpiryDate']), await delay(0x226), await _0x74600f['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x2aa006]['CVV']), await delay(0x226), await _0x74600f['type']('input[name=\x22holderName\x22]', '' + footshop[_0x2aa006]['NameOnCard']), await delay(0x226), await _0x74600f['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2aa006 + 0x1) + '\x20:\x20Awaiting\x203DS'), await _0x74600f['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2aa006 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x579585) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2aa006 + 0x1) + '\x20:\x20' + _0x579585);
    } finally {
      _0x246384['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x52fc35, _0x3eace6) => {
  for (var _0x2b4418 = 0x0; _0x2b4418 < afew['length']; _0x2b4418++) {
    if (afew[_0x2b4418]['Email'] == '' || afew[_0x2b4418]['FirstName'] == '' || afew[_0x2b4418]['LastName'] == '' || afew[_0x2b4418]['Country'] == '' || afew[_0x2b4418]['Size'] == '' || afew[_0x2b4418]['Address1'] == '' || afew[_0x2b4418]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b4418 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x5add43 = getProxy()[_0x2b4418]['split'](':');
    const _0x1f8500 = await puppeteer['launch']({
      'headless': ![],
      'args': ['--proxy-server=' + _0x5add43[0x0] + ':' + _0x5add43[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x568f30 = await _0x1f8500['newPage']();
      await _0x568f30['authenticate']({
        'username': '' + _0x5add43[0x2],
        'password': '' + _0x5add43[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b4418 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x568f30['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x568f30['setRequestInterception'](!![]), _0x568f30['on']('request', _0x2d65f => {
        _0x2d65f['resourceType']() === 'image' || _0x2d65f['resourceType']() === 'font' || _0x2d65f['resourceType']() === 'media' ? _0x2d65f['abort']() : _0x2d65f['continue']();
      }), await _0x568f30['goto'](_0x52fc35), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b4418 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x568f30['waitForTimeout'](0xfa0);
      const [_0x5c397f] = await _0x568f30['$x']('//button[contains(.,\x20\x27Alle\x27)]');
      _0x5c397f && await _0x5c397f['click']();
      await _0x568f30['waitForTimeout'](0x320), await _0x568f30['hover']('span[class=\x22release-type\x22]'), await _0x568f30['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x2b4418]['Size'] + '\x22]'), await _0x568f30['waitForTimeout'](0x320), await _0x568f30['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x2b4418]['Size'] + '\x22]'), await _0x568f30['waitForTimeout'](0x258), await _0x568f30['type']('#raffle-instagram', '' + afew[_0x2b4418]['Follower'], { 'delay': 0x64 }), await _0x568f30['waitForTimeout'](0x384), await _0x568f30['click']('#raffle-terms'), await _0x568f30['waitForTimeout'](0x384);
      const [_0x2140c9] = await _0x568f30['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0x2140c9 && await _0x2140c9['click']();
      ;
      await _0x568f30['waitForTimeout'](0xbb8), await _0x568f30['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b4418 + 0x1) + '\x20:\x20Filling\x20Information'), _0x3eace6 == 'sec' ? await _0x568f30['type']('#checkout_email', '' + afew[_0x2b4418]['FirstName'] + afew[_0x2b4418]['LastName'] + settings['catchall']) : await _0x568f30['type']('#checkout_email', '' + afew[_0x2b4418]['Email']), await _0x568f30['waitForTimeout'](0x258), await _0x568f30['select']('#checkout_shipping_address_country', '' + afew[_0x2b4418]['Country']), await _0x568f30['waitForTimeout'](0x258), await _0x568f30['type']('#checkout_shipping_address_first_name', '' + afew[_0x2b4418]['FirstName']), await _0x568f30['waitForTimeout'](0x320), await _0x568f30['type']('#checkout_shipping_address_last_name', '' + afew[_0x2b4418]['LastName']), await _0x568f30['waitForTimeout'](0x2bc), await _0x568f30['type']('#checkout_shipping_address_address1', '' + afew[_0x2b4418]['Address1']), await _0x568f30['waitForTimeout'](0x2bc), await _0x568f30['type']('#checkout_shipping_address_address2', '' + afew[_0x2b4418]['Address2']), await _0x568f30['waitForTimeout'](0x2bc), await _0x568f30['type']('#checkout_shipping_address_zip', '' + afew[_0x2b4418]['Postcode']), await _0x568f30['waitForTimeout'](0x2bc), await _0x568f30['type']('#checkout_shipping_address_city', '' + afew[_0x2b4418]['City']), await _0x568f30['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b4418 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x568f30['click']('#continue_button'), await _0x568f30['waitForTimeout'](0x1194), await _0x568f30['waitForSelector']('#continue_button'), await _0x568f30['click']('#continue_button'), await _0x568f30['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b4418 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x568f30['waitForSelector']('#continue_button'), await _0x568f30['click']('#continue_button'), await _0x568f30['waitForTimeout'](0x1194), await _0x568f30['waitForSelector']('#continue_button'), await _0x568f30['click']('#continue_button'), await _0x568f30['waitForTimeout'](0x2af8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b4418 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x44d359) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b4418 + 0x1) + '\x20:\x20' + _0x44d359);
    } finally {
      _0x1f8500 && _0x1f8500['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
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
          for (var _0x1cb1a4 = 0x0; _0x1cb1a4 < maha['length']; _0x1cb1a4++) {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1cb1a4 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x1cb1a4), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
          }
        } else {
          if (taskModule == 0x2) {
            console['log']('Starting\x20' + maha['length'] + '\x20Experimental\x20MAHA\x20Tasks');
            for (var _0x1cb1a4 = 0x0; _0x1cb1a4 < maha['length']; _0x1cb1a4++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1cb1a4 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x1cb1a4, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x3) {
              console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
              for (var _0x1cb1a4 = 0x0; _0x1cb1a4 < links['length']; _0x1cb1a4++) {
                modules[taskModule]['url'] = links[_0x1cb1a4], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1cb1a4 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x1cb1a4, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
              }
            } else {
              if (taskModule == 0x4)
                await footshopModule(), await delay(0x1388);
              else {
                if (taskModule == 0x5) {
                  var _0x107775 = await getPassword();
                  _0x107775 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
                }
              }
            }
          }
        }
      }
    } catch (_0x41ec0b) {
      return console['log'](_0x41ec0b), await delay(0x3a98);
    }
}
;
main();