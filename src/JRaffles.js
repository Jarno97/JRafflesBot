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
const delay = _0x150386 => new Promise(_0x626255 => setTimeout(_0x626255, _0x150386));
async function getLicense(_0x4c2138) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x4c2138, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x5a24ae => _0x5a24ae['data'])['catch'](() => null);
}
;
async function checkLicense(_0x2148f3) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x51991a = await getLicense(_0x2148f3);
  if (!_0x51991a)
    return console['log']('License\x20not\x20found');
  if (!_0x51991a['user'])
    return console['log']('License\x20not\x20bound');
  return _0x51991a['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x33343e = await prompt['get']('Module');
  return console['clear'](), _0x33343e['Module'];
}
;
async function getPassword() {
  var _0x161772 = await prompt['get']('Password');
  return console['clear'](), _0x161772['Password'];
}
;
async function getLinks() {
  var _0xacbf9f = await prompt['get']('Links');
  return _0xacbf9f['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x17412b = 0x0; _0x17412b < afewProducts['length']; _0x17412b++) {
    console['log']('\x20(' + _0x17412b + ')\x20' + afewProducts[_0x17412b]);
  }
  ;
  let _0x4e6484 = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x4e6484['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x57bd5d = new Date(Date['now']())['toLocaleTimeString']();
  return _0x57bd5d;
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
  let _0x5468dd = proxyFile['split']('\x0a'), _0x20d4d3 = _0x5468dd['map']((_0x29acf2, _0x5cae0d) => {
    sanatizeProxy = _0x29acf2['replace']('\x0d', '');
    if (_0x5468dd[_0x5cae0d + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x20d4d3;
}
;
async function afewScraper() {
  var _0x84fa28 = getProxy()[0x1]['split'](':');
  const _0x399ac5 = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x84fa28[0x0] + ':' + _0x84fa28[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x4739c2 = await _0x399ac5['newPage']();
    await _0x4739c2['authenticate']({
      'username': '' + _0x84fa28[0x2],
      'password': '' + _0x84fa28[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x4739c2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4739c2['setRequestInterception'](!![]), _0x4739c2['on']('request', _0x44a93f => {
      _0x44a93f['resourceType']() === 'image' || _0x44a93f['resourceType']() === 'font' || _0x44a93f['resourceType']() === 'media' ? _0x44a93f['abort']() : _0x44a93f['continue']();
    }), await _0x4739c2['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x4739c2['waitForTimeout'](0xbb8), await _0x4739c2['waitForSelector']('.product-card');
    const _0x5754d3 = await _0x4739c2['$$eval']('a.product-card', _0x7802c4 => {
      return _0x7802c4['map'](_0xc207e9 => _0xc207e9['href']);
    });
    return afewProducts = _0x5754d3;
  } catch (_0x20ce8b) {
    console['log']('\x20' + _0x20ce8b);
  } finally {
    _0x399ac5['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x4d3f52, _0x224066) {
  var _0x2fd941 = getProxy()[_0x4d3f52]['split'](':'), _0xd4f6b7 = modules[taskModule]['data'];
  _0x224066 == 'exp' ? _0xd4f6b7['data']['attributes']['email'] = '' + maha[_0x4d3f52]['FirstName'] + maha[_0x4d3f52]['LastName'] + catchall : _0xd4f6b7['data']['attributes']['email'] = '' + maha[_0x4d3f52]['Email'];
  _0xd4f6b7['data']['attributes']['properties']['$first_name'] = '' + maha[_0x4d3f52]['FirstName'], _0xd4f6b7['data']['attributes']['properties']['$last_name'] = '' + maha[_0x4d3f52]['LastName'], _0xd4f6b7['data']['attributes']['properties']['$address1'] = maha[_0x4d3f52]['Address1'] + '\x20' + maha[_0x4d3f52]['Address2'], _0xd4f6b7['data']['attributes']['properties']['$zip'] = '' + maha[_0x4d3f52]['Zip'], _0xd4f6b7['data']['attributes']['properties']['$city'] = '' + maha[_0x4d3f52]['City'], _0xd4f6b7['data']['attributes']['properties']['$country'] = '' + maha[_0x4d3f52]['Country'], _0xd4f6b7['data']['attributes']['properties']['Size'] = '' + maha[_0x4d3f52]['Size'], _0xd4f6b7['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x4d3f52]['Follower'];
  var _0x1406dd = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0xd4f6b7),
    'proxy': 'http://' + _0x2fd941[0x2] + ':' + _0x2fd941[0x3] + '@' + _0x2fd941[0x0] + ':' + _0x2fd941[0x1]
  };
  return _0x224066 === 'ver' && (_0x1406dd['method'] = 'GET'), new Promise(function (_0x66633f, _0x28d471) {
    callback = async (_0x4d49fd, _0x5217e5, _0x9a4d46) => {
      !_0x4d49fd && _0x5217e5['statusCode'] == 0xca || !_0x4d49fd && _0x5217e5['statusCode'] == 0xc8 ? _0x66633f(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4d3f52 + 0x1) + ':\x20Raffle\x20Entered!')) : _0x28d471(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4d3f52 + 0x1) + ':\x20error\x20' + _0x4d49fd + '\x20' + JSON['stringify'](_0x5217e5)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4d3f52 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xd4f6b7['data']['attributes']['email']), request(_0x1406dd, callback);
    } catch (_0x460aac) {
      console['log'](getTime() + '\x20Task\x20' + (_0x4d3f52 + 0x1) + ':\x20' + _0x460aac);
    }
  });
}
;
async function footshopModule() {
  var _0xcd95f9;
  puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x2b0a89 = 0x0; _0x2b0a89 < footshop['length']; _0x2b0a89++) {
    if (footshop[_0x2b0a89]['Email'] == '' || footshop[_0x2b0a89]['FirstName'] == '' || footshop[_0x2b0a89]['LastName'] == '' || footshop[_0x2b0a89]['Country'] == '' || footshop[_0x2b0a89]['Size'] == '' || footshop[_0x2b0a89]['Address1'] == '' || footshop[_0x2b0a89]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b0a89 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    async function _0x8228ad() {
      var _0x31c0e4 = await axios['get']('https://releases.footshop.com/api/raffles/' + footshop[_0x2b0a89]['Pid'])['then'](_0x3fb113 => _0x3fb113['data'])['catch'](() => null);
      let _0x115027 = _0x31c0e4['sizeSets']['Men']['sizes'];
      async function _0x2e37c4() {
        for (var _0x4b7f73 = 0x0; _0x4b7f73 < _0x31c0e4['sizeSets']['Men']['sizes']['length']; _0x4b7f73++) {
          if (_0x115027[_0x4b7f73]['eur'] == footshop[_0x2b0a89]['Size'])
            return _0xcd95f9 = _0x115027[_0x4b7f73]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b0a89 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b0a89 + 0x1) + '\x20:\x20Size\x20' + footshop[_0x2b0a89]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x33b3b9 = await _0x2e37c4();
      if (_0x33b3b9 == ![])
        return ![];
    }
    let _0x4c8e5b = await _0x8228ad();
    if (_0x4c8e5b == ![])
      continue;
    if (footshop[_0x2b0a89]['Email'] == '' || footshop[_0x2b0a89]['FirstName'] == '' || footshop[_0x2b0a89]['LastName'] == '' || footshop[_0x2b0a89]['Country'] == '' || footshop[_0x2b0a89]['Size'] == '' || footshop[_0x2b0a89]['Address1'] == '' || footshop[_0x2b0a89]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b0a89 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x23f62b = 'https://releases.footshop.com/register/' + footshop[_0x2b0a89]['Pid'] + '/Men/' + _0xcd95f9;
    var _0x2d3a85 = getProxy()[_0x2b0a89]['split'](':');
    const _0xb37b5a = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x2d3a85[0x0] + ':' + _0x2d3a85[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x3eddb8 = await _0xb37b5a['newPage']();
      await _0x3eddb8['authenticate']({
        'username': '' + _0x2d3a85[0x2],
        'password': '' + _0x2d3a85[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b0a89 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3eddb8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3eddb8['setRequestInterception'](!![]), _0x3eddb8['on']('request', _0x286c21 => {
        _0x286c21['resourceType']() === 'image' || _0x286c21['resourceType']() === 'font' || _0x286c21['resourceType']() === 'media' ? _0x286c21['abort']() : _0x286c21['continue']();
      }), await _0x3eddb8['goto']('' + _0x23f62b + _0xcd95f9), await _0x3eddb8['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b0a89 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x3eddb8['type']('input[name=\x22email\x22]', '' + footshop[_0x2b0a89]['Email']), await delay(0x640), await _0x3eddb8['type']('input[name=\x22phone\x22]', '' + footshop[_0x2b0a89]['Phone']), await delay(0x4b0), await _0x3eddb8['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), await _0x3eddb8['type']('input[name=\x22firstName\x22]', '' + footshop[_0x2b0a89]['FirstName']), await delay(0x258), await _0x3eddb8['type']('input[name=\x22lastName\x22]', '' + footshop[_0x2b0a89]['LastName']), await delay(0xc8), await _0x3eddb8['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x2b0a89]['Follower']), await delay(0x4b0), await _0x3eddb8['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b0a89 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x3eddb8['select']('select[name=\x22country\x22]', '' + footshop[_0x2b0a89]['Country']), await delay(0x2bc), await _0x3eddb8['type']('input[name=\x22streetName\x22]', '' + footshop[_0x2b0a89]['Address1']), await delay(0x258), await _0x3eddb8['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x2b0a89]['HouseNumber'] + footshop[_0x2b0a89]['Address2']), await delay(0xc8), await _0x3eddb8['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x2b0a89]['Zip']), await delay(0x1f4), await _0x3eddb8['type']('input[name=\x22city\x22]', '' + footshop[_0x2b0a89]['City']), await delay(0x4b0), await _0x3eddb8['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x3eddb8['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b0a89 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x3eddb8['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b0a89 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x3eddb8['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b0a89 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x3eddb8['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3eddb8['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0x3eddb8['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x2b0a89]['CardNumber']), await delay(0x320), await _0x3eddb8['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x2b0a89]['ExpiryDate']), await delay(0x226), await _0x3eddb8['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x2b0a89]['CVV']), await delay(0x226), await _0x3eddb8['type']('input[name=\x22holderName\x22]', '' + footshop[_0x2b0a89]['NameOnCard']), await delay(0x226), await _0x3eddb8['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b0a89 + 0x1) + '\x20:\x20Awaiting\x203DS'), await _0x3eddb8['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b0a89 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x2c3694) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b0a89 + 0x1) + '\x20:\x20' + _0x2c3694);
    } finally {
      _0xb37b5a['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x477cbc, _0x26da8b) => {
  for (var _0x306f00 = 0x0; _0x306f00 < afew['length']; _0x306f00++) {
    if (afew[_0x306f00]['Email'] == '' || afew[_0x306f00]['FirstName'] == '' || afew[_0x306f00]['LastName'] == '' || afew[_0x306f00]['Country'] == '' || afew[_0x306f00]['Size'] == '' || afew[_0x306f00]['Address1'] == '' || afew[_0x306f00]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306f00 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0xe6dbc4 = getProxy()[_0x306f00]['split'](':');
    const _0x147f84 = await puppeteer['launch']({
      'headless': ![],
      'args': ['--proxy-server=' + _0xe6dbc4[0x0] + ':' + _0xe6dbc4[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x1c2d93 = await _0x147f84['newPage']();
      await _0x1c2d93['authenticate']({
        'username': '' + _0xe6dbc4[0x2],
        'password': '' + _0xe6dbc4[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306f00 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1c2d93['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1c2d93['setRequestInterception'](!![]), _0x1c2d93['on']('request', _0x34c3a3 => {
        _0x34c3a3['resourceType']() === 'image' || _0x34c3a3['resourceType']() === 'font' || _0x34c3a3['resourceType']() === 'media' ? _0x34c3a3['abort']() : _0x34c3a3['continue']();
      }), await _0x1c2d93['goto'](_0x477cbc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306f00 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x1c2d93['waitForTimeout'](0xfa0);
      const [_0x132781] = await _0x1c2d93['$x']('//button[contains(.,\x20\x27Alle\x27)]');
      _0x132781 && await _0x132781['click']();
      await _0x1c2d93['waitForTimeout'](0x320), await _0x1c2d93['hover']('span[class=\x22release-type\x22]'), await _0x1c2d93['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x306f00]['Size'] + '\x22]'), await _0x1c2d93['waitForTimeout'](0x320), await _0x1c2d93['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x306f00]['Size'] + '\x22]'), await _0x1c2d93['waitForTimeout'](0x258), await _0x1c2d93['type']('#raffle-instagram', '' + afew[_0x306f00]['Follower'], { 'delay': 0x64 }), await _0x1c2d93['waitForTimeout'](0x384), await _0x1c2d93['click']('#raffle-terms'), await _0x1c2d93['waitForTimeout'](0x384);
      const [_0x559b65] = await _0x1c2d93['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0x559b65 && await _0x559b65['click']();
      ;
      await _0x1c2d93['waitForTimeout'](0xbb8), await _0x1c2d93['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306f00 + 0x1) + '\x20:\x20Filling\x20Information'), _0x26da8b == 'sec' ? await _0x1c2d93['type']('#checkout_email', '' + afew[_0x306f00]['FirstName'] + afew[_0x306f00]['LastName'] + settings['catchall']) : await _0x1c2d93['type']('#checkout_email', '' + afew[_0x306f00]['Email']), await _0x1c2d93['waitForTimeout'](0x258), await _0x1c2d93['select']('#checkout_shipping_address_country', '' + afew[_0x306f00]['Country']), await _0x1c2d93['waitForTimeout'](0x258), await _0x1c2d93['type']('#checkout_shipping_address_first_name', '' + afew[_0x306f00]['FirstName']), await _0x1c2d93['waitForTimeout'](0x320), await _0x1c2d93['type']('#checkout_shipping_address_last_name', '' + afew[_0x306f00]['LastName']), await _0x1c2d93['waitForTimeout'](0x2bc), await _0x1c2d93['type']('#checkout_shipping_address_address1', '' + afew[_0x306f00]['Address1']), await _0x1c2d93['waitForTimeout'](0x2bc), await _0x1c2d93['type']('#checkout_shipping_address_address2', '' + afew[_0x306f00]['Address2']), await _0x1c2d93['waitForTimeout'](0x2bc), await _0x1c2d93['type']('#checkout_shipping_address_zip', '' + afew[_0x306f00]['Postcode']), await _0x1c2d93['waitForTimeout'](0x2bc), await _0x1c2d93['type']('#checkout_shipping_address_city', '' + afew[_0x306f00]['City']), await _0x1c2d93['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306f00 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x1c2d93['click']('#continue_button'), await _0x1c2d93['waitForTimeout'](0x1194), await _0x1c2d93['waitForSelector']('#continue_button'), await _0x1c2d93['click']('#continue_button'), await _0x1c2d93['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306f00 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1c2d93['waitForSelector']('#continue_button'), await _0x1c2d93['click']('#continue_button'), await _0x1c2d93['waitForTimeout'](0x1194), await _0x1c2d93['waitForSelector']('#continue_button'), await _0x1c2d93['click']('#continue_button'), await _0x1c2d93['waitForTimeout'](0x2af8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306f00 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x55dd6d) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306f00 + 0x1) + '\x20:\x20' + _0x55dd6d);
    } finally {
      _0x147f84 && _0x147f84['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
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
          for (var _0x5e5366 = 0x0; _0x5e5366 < maha['length']; _0x5e5366++) {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5e5366 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x5e5366), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
          }
        } else {
          if (taskModule == 0x2) {
            console['log']('Starting\x20' + maha['length'] + '\x20Experimental\x20MAHA\x20Tasks');
            for (var _0x5e5366 = 0x0; _0x5e5366 < maha['length']; _0x5e5366++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5e5366 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x5e5366, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x3) {
              console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
              for (var _0x5e5366 = 0x0; _0x5e5366 < links['length']; _0x5e5366++) {
                modules[taskModule]['url'] = links[_0x5e5366], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5e5366 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x5e5366, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
              }
            } else {
              if (taskModule == 0x4)
                await footshopModule(), await delay(0x1388);
              else {
                if (taskModule == 0x5) {
                  var _0x259f86 = await getPassword();
                  _0x259f86 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
                }
              }
            }
          }
        }
      }
    } catch (_0x549980) {
      return console['log'](_0x549980), await delay(0x3a98);
    }
}
;
main();