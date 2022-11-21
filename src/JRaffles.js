const puppeteer = require('puppeteer-extra'), RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha'), fs = require('fs'), axios = require('axios'), Papa = require('papaparse'), request = require('request'), proxyFile = fs['readFileSync']('../proxies.txt', 'utf-8');
var prompt = require('prompt');
const j = request['jar']();
var settings = {};
const package = JSON['parse'](fs['readFileSync']('../package.json', 'utf-8')), version = package['version'];
var licenseKey;
const API_KEY = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
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
async function loadSettings() {
  const _0x16e6d3 = fs['readFileSync']('../tasks/afew.csv', 'utf8');
  afew = Papa['parse'](_0x16e6d3, { 'header': !![] })['data'];
  const _0x2bea03 = fs['readFileSync']('../tasks/maha.csv', 'utf-8');
  maha = Papa['parse'](_0x2bea03, { 'header': !![] })['data'];
  const _0x4ce918 = fs['readFileSync']('../tasks/footshop.csv', 'utf-8');
  footshop = Papa['parse'](_0x4ce918, { 'header': !![] })['data'], settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x2056a5 => new Promise(_0x2f754f => setTimeout(_0x2f754f, _0x2056a5));
async function getLicense(_0x504f55) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x504f55, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x1aeb31 => _0x1aeb31['data'])['catch'](() => null);
}
;
async function checkLicense(_0x1e8edc) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x304ada = await getLicense(_0x1e8edc);
  if (!_0x304ada)
    return console['log']('License\x20not\x20found');
  if (!_0x304ada['user'])
    return console['log']('License\x20not\x20bound');
  return _0x304ada['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x50aeaa = await prompt['get']('Module');
  return console['clear'](), _0x50aeaa['Module'];
}
;
async function getPassword() {
  var _0x9a41bd = await prompt['get']('Password');
  return console['clear'](), _0x9a41bd['Password'];
}
;
async function getLinks() {
  var _0xc4f7cd = await prompt['get']('Links');
  return _0xc4f7cd['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x372528 = 0x0; _0x372528 < afewProducts['length']; _0x372528++) {
    console['log']('\x20(' + _0x372528 + ')\x20' + afewProducts[_0x372528]);
  }
  ;
  console['log']();
  let _0x55bc1d = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x55bc1d['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x110602 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x110602;
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
  { 'name': 'FOOTSHOP\x20RAFFLE' }
];
modules[0x45] = { 'name': 'AFEW\x20SECRET' };
function getProxy() {
  let _0x3a195c = proxyFile['split']('\x0a'), _0x1557dd = _0x3a195c['map']((_0x5b7953, _0x20b5f0) => {
    sanatizeProxy = _0x5b7953['replace']('\x0d', '');
    if (_0x3a195c[_0x20b5f0 + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x1557dd;
}
;
async function afewScraper() {
  var _0x4c8782 = getProxy()[0x1]['split'](':');
  const _0x2f4553 = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x4c8782[0x0] + ':' + _0x4c8782[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x5f43f1 = await _0x2f4553['newPage']();
    await _0x5f43f1['authenticate']({
      'username': '' + _0x4c8782[0x2],
      'password': '' + _0x4c8782[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x5f43f1['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5f43f1['setRequestInterception'](!![]), _0x5f43f1['on']('request', _0x3ced84 => {
      _0x3ced84['resourceType']() === 'image' || _0x3ced84['resourceType']() === 'font' || _0x3ced84['resourceType']() === 'media' ? _0x3ced84['abort']() : _0x3ced84['continue']();
    }), await _0x5f43f1['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x5f43f1['waitForTimeout'](0xbb8), await _0x5f43f1['waitForSelector']('.product-card');
    const _0x3fc8e8 = await _0x5f43f1['$$eval']('a.product-card', _0x96874e => {
      return _0x96874e['map'](_0x44a583 => _0x44a583['href']);
    });
    return afewProducts = _0x3fc8e8;
  } catch (_0x11113f) {
    console['log']('\x20' + _0x11113f);
  } finally {
    _0x2f4553['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x579551, _0xf43a48) {
  var _0x383b9a = getProxy()[_0x579551]['split'](':'), _0x35866a = modules[taskModule]['data'];
  _0xf43a48 == 'exp' ? _0x35866a['data']['attributes']['email'] = '' + maha[_0x579551]['FirstName'] + maha[_0x579551]['LastName'] + catchall : _0x35866a['data']['attributes']['email'] = '' + maha[_0x579551]['Email'];
  _0x35866a['data']['attributes']['properties']['$first_name'] = '' + maha[_0x579551]['FirstName'], _0x35866a['data']['attributes']['properties']['$last_name'] = '' + maha[_0x579551]['LastName'], _0x35866a['data']['attributes']['properties']['$address1'] = maha[_0x579551]['Address1'] + '\x20' + maha[_0x579551]['Address2'], _0x35866a['data']['attributes']['properties']['$zip'] = '' + maha[_0x579551]['Zip'], _0x35866a['data']['attributes']['properties']['$city'] = '' + maha[_0x579551]['City'], _0x35866a['data']['attributes']['properties']['$country'] = '' + maha[_0x579551]['Country'], _0x35866a['data']['attributes']['properties']['Size'] = '' + maha[_0x579551]['Size'], _0x35866a['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x579551]['Follower'];
  var _0x82c684 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x35866a),
    'proxy': 'http://' + _0x383b9a[0x2] + ':' + _0x383b9a[0x3] + '@' + _0x383b9a[0x0] + ':' + _0x383b9a[0x1]
  };
  return _0xf43a48 === 'ver' && (_0x82c684['method'] = 'GET'), new Promise(function (_0x155cb4, _0x5a4a27) {
    callback = async (_0x35afd1, _0x2cac04, _0x4b8df7) => {
      !_0x35afd1 && _0x2cac04['statusCode'] == 0xca || !_0x35afd1 && _0x2cac04['statusCode'] == 0xc8 ? _0x155cb4(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x579551 + 0x1) + ':\x20Raffle\x20Entered!')) : _0x5a4a27(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x579551 + 0x1) + ':\x20error\x20' + _0x35afd1 + '\x20' + JSON['stringify'](_0x2cac04)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x579551 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x35866a['data']['attributes']['email']), request(_0x82c684, callback);
    } catch (_0x56a6dc) {
      console['log'](getTime() + '\x20Task\x20' + (_0x579551 + 0x1) + ':\x20' + _0x56a6dc);
    }
  });
}
;
async function footshopModule() {
  var _0x27ab71;
  puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x29e780 = 0x0; _0x29e780 < footshop['length']; _0x29e780++) {
    if (footshop[_0x29e780]['Email'] == '' || footshop[_0x29e780]['FirstName'] == '' || footshop[_0x29e780]['LastName'] == '' || footshop[_0x29e780]['Country'] == '' || footshop[_0x29e780]['Size'] == '' || footshop[_0x29e780]['Address1'] == '' || footshop[_0x29e780]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e780 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    async function _0x653572() {
      var _0x15b318 = await axios['get']('https://releases.footshop.com/api/raffles/' + footshop[_0x29e780]['Pid'])['then'](_0x3c73f3 => _0x3c73f3['data'])['catch'](() => null);
      let _0x102677 = _0x15b318['sizeSets']['Men']['sizes'];
      async function _0xfec410() {
        for (var _0x55f9fe = 0x0; _0x55f9fe < _0x15b318['sizeSets']['Men']['sizes']['length']; _0x55f9fe++) {
          if (_0x102677[_0x55f9fe]['eur'] == footshop[_0x29e780]['Size'])
            return _0x27ab71 = _0x102677[_0x55f9fe]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e780 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e780 + 0x1) + '\x20:\x20Size\x20' + footshop[_0x29e780]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x19deda = await _0xfec410();
      if (_0x19deda == ![])
        return ![];
    }
    let _0x2a1421 = await _0x653572();
    if (_0x2a1421 == ![])
      continue;
    if (footshop[_0x29e780]['Email'] == '' || footshop[_0x29e780]['FirstName'] == '' || footshop[_0x29e780]['LastName'] == '' || footshop[_0x29e780]['Country'] == '' || footshop[_0x29e780]['Size'] == '' || footshop[_0x29e780]['Address1'] == '' || footshop[_0x29e780]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e780 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x59f639 = 'https://releases.footshop.com/register/' + footshop[_0x29e780]['Pid'] + '/Men/' + _0x27ab71;
    var _0x5453c6 = getProxy()[_0x29e780]['split'](':');
    const _0x5ef0d8 = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x5453c6[0x0] + ':' + _0x5453c6[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x1d3a07 = await _0x5ef0d8['newPage']();
      await _0x1d3a07['authenticate']({
        'username': '' + _0x5453c6[0x2],
        'password': '' + _0x5453c6[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e780 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1d3a07['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1d3a07['setRequestInterception'](!![]), _0x1d3a07['on']('request', _0x735162 => {
        _0x735162['resourceType']() === 'image' || _0x735162['resourceType']() === 'font' || _0x735162['resourceType']() === 'media' ? _0x735162['abort']() : _0x735162['continue']();
      }), await _0x1d3a07['goto']('' + _0x59f639 + _0x27ab71), await _0x1d3a07['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e780 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1d3a07['type']('input[name=\x22email\x22]', '' + footshop[_0x29e780]['Email']), await delay(0x640), await _0x1d3a07['type']('input[name=\x22phone\x22]', '' + footshop[_0x29e780]['Phone']), await delay(0x4b0), await _0x1d3a07['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), await _0x1d3a07['type']('input[name=\x22firstName\x22]', '' + footshop[_0x29e780]['FirstName']), await delay(0x258), await _0x1d3a07['type']('input[name=\x22lastName\x22]', '' + footshop[_0x29e780]['LastName']), await delay(0xc8), await _0x1d3a07['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x29e780]['Follower']), await delay(0x4b0), await _0x1d3a07['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e780 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1d3a07['select']('select[name=\x22country\x22]', '' + footshop[_0x29e780]['Country']), await delay(0x2bc), await _0x1d3a07['type']('input[name=\x22streetName\x22]', '' + footshop[_0x29e780]['Address1']), await delay(0x258), await _0x1d3a07['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x29e780]['HouseNumber'] + footshop[_0x29e780]['Address2']), await delay(0xc8), await _0x1d3a07['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x29e780]['Zip']), await delay(0x1f4), await _0x1d3a07['type']('input[name=\x22city\x22]', '' + footshop[_0x29e780]['City']), await delay(0x4b0), await _0x1d3a07['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x1d3a07['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e780 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1d3a07['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e780 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x1d3a07['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e780 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1d3a07['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1d3a07['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0x1d3a07['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x29e780]['CardNumber']), await delay(0x320), await _0x1d3a07['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x29e780]['ExpiryDate']), await delay(0x226), await _0x1d3a07['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x29e780]['CVV']), await delay(0x226), await _0x1d3a07['type']('input[name=\x22holderName\x22]', '' + footshop[_0x29e780]['NameOnCard']), await delay(0x226), await _0x1d3a07['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e780 + 0x1) + '\x20:\x20Awaiting\x203DS'), await _0x1d3a07['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e780 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0xa17a2b) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e780 + 0x1) + '\x20:\x20' + _0xa17a2b);
    } finally {
      _0x5ef0d8['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x2a0bc0, _0x650b3c) => {
  for (var _0x811abb = 0x0; _0x811abb < afew['length']; _0x811abb++) {
    if (afew[_0x811abb]['Email'] == '' || afew[_0x811abb]['FirstName'] == '' || afew[_0x811abb]['LastName'] == '' || afew[_0x811abb]['Country'] == '' || afew[_0x811abb]['Size'] == '' || afew[_0x811abb]['Address1'] == '' || afew[_0x811abb]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x811abb + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x3a3cb3 = getProxy()[_0x811abb]['split'](':');
    const _0x5281b0 = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x3a3cb3[0x0] + ':' + _0x3a3cb3[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x3d2346 = await _0x5281b0['newPage']();
      await _0x3d2346['authenticate']({
        'username': '' + _0x3a3cb3[0x2],
        'password': '' + _0x3a3cb3[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x811abb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3d2346['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3d2346['setRequestInterception'](!![]), _0x3d2346['on']('request', _0xbeffdf => {
        _0xbeffdf['resourceType']() === 'image' || _0xbeffdf['resourceType']() === 'font' || _0xbeffdf['resourceType']() === 'media' ? _0xbeffdf['abort']() : _0xbeffdf['continue']();
      }), await _0x3d2346['goto'](_0x2a0bc0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x811abb + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x3d2346['waitForTimeout'](0xfa0);
      const [_0x4a3554] = await _0x3d2346['$x']('//button[contains(.,\x20\x27Alle\x27)]');
      _0x4a3554 && await _0x4a3554['click']();
      await _0x3d2346['waitForTimeout'](0x320), await _0x3d2346['hover']('span[class=\x22release-type\x22]'), await _0x3d2346['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x811abb]['Size'] + '\x22]'), await _0x3d2346['waitForTimeout'](0x320), await _0x3d2346['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x811abb]['Size'] + '\x22]'), await _0x3d2346['waitForTimeout'](0x258), await _0x3d2346['type']('#raffle-instagram', '' + afew[_0x811abb]['Follower'], { 'delay': 0x64 }), await _0x3d2346['waitForTimeout'](0x384), await _0x3d2346['click']('#raffle-terms'), await _0x3d2346['waitForTimeout'](0x384);
      const [_0x5223a3] = await _0x3d2346['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0x5223a3 && await _0x5223a3['click']();
      ;
      await _0x3d2346['waitForTimeout'](0xbb8), await _0x3d2346['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x811abb + 0x1) + '\x20:\x20Filling\x20Information'), _0x650b3c == 'sec' ? await _0x3d2346['type']('#checkout_email', '' + afew[_0x811abb]['FirstName'] + afew[_0x811abb]['LastName'] + settings['catchall']) : await _0x3d2346['type']('#checkout_email', '' + afew[_0x811abb]['Email']), await _0x3d2346['waitForTimeout'](0x258), await _0x3d2346['select']('#checkout_shipping_address_country', '' + afew[_0x811abb]['Country']), await _0x3d2346['waitForTimeout'](0x258), await _0x3d2346['type']('#checkout_shipping_address_first_name', '' + afew[_0x811abb]['FirstName']), await _0x3d2346['waitForTimeout'](0x320), await _0x3d2346['type']('#checkout_shipping_address_last_name', '' + afew[_0x811abb]['LastName']), await _0x3d2346['waitForTimeout'](0x2bc), await _0x3d2346['type']('#checkout_shipping_address_address1', '' + afew[_0x811abb]['Address1']), await _0x3d2346['waitForTimeout'](0x2bc), await _0x3d2346['type']('#checkout_shipping_address_address2', '' + afew[_0x811abb]['Address2']), await _0x3d2346['waitForTimeout'](0x2bc), await _0x3d2346['type']('#checkout_shipping_address_zip', '' + afew[_0x811abb]['Postcode']), await _0x3d2346['waitForTimeout'](0x2bc), await _0x3d2346['type']('#checkout_shipping_address_city', '' + afew[_0x811abb]['City']), await _0x3d2346['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x811abb + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x3d2346['click']('#continue_button'), await _0x3d2346['waitForTimeout'](0x1194), await _0x3d2346['waitForSelector']('#continue_button'), await _0x3d2346['click']('#continue_button'), await _0x3d2346['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x811abb + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3d2346['waitForSelector']('#continue_button'), await _0x3d2346['click']('#continue_button'), await _0x3d2346['waitForTimeout'](0x1194), await _0x3d2346['waitForSelector']('#continue_button'), await _0x3d2346['click']('#continue_button'), await _0x3d2346['waitForTimeout'](0x2af8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x811abb + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0xe2384d) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x811abb + 0x1) + '\x20:\x20' + _0xe2384d);
    } finally {
      _0x5281b0 && _0x5281b0['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function main() {
  await loadSettings(), console['clear']();
  version != 'devkey' && (await updater['autoUpdate'](), console['clear']());
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
      async function _0x46f82b() {
        await delay(0x320), console['clear'](), console['log']('Welcome\x20to\x20JRaffles();\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a\x0a\x20(0)\x20AFEW\x20Raffle\x0a\x20(1)\x20MAHA\x20Raffle\x0a\x20(2)\x20MAHA\x20Raffle\x20Experimental\x0a\x20(3)\x20MAHA\x20Link\x20Verification\x0a\x20(4)\x20Footshop\x20Raffle\x0a\x20(5)\x20Reload\x20Settings\x0a'), taskModule = await getModule();
        if (taskModule == 0x0)
          await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct]);
        else {
          if (taskModule == 0x1) {
            console['log']('Starting\x20' + maha['length'] + '\x20MAHA\x20Tasks');
            for (var _0x4a999e = 0x0; _0x4a999e < maha['length']; _0x4a999e++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4a999e + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x4a999e), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x2) {
              console['log']('Starting\x20' + maha['length'] + '\x20Experimental\x20MAHA\x20Tasks');
              for (var _0x4a999e = 0x0; _0x4a999e < maha['length']; _0x4a999e++) {
                console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4a999e + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x4a999e, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
            } else {
              if (taskModule == 0x3) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x4a999e = 0x0; _0x4a999e < links['length']; _0x4a999e++) {
                  modules[taskModule]['url'] = links[_0x4a999e], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4a999e + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x4a999e, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
              } else {
                if (taskModule == 0x4)
                  await footshopModule(), await delay(0x1388);
                else {
                  if (taskModule == 0x5)
                    return console['log']('Reloading\x20settings'), await loadSettings(), _0x46f82b();
                  else {
                    if (taskModule == 0x45) {
                      var _0x58d942 = await getPassword();
                      _0x58d942 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
                    }
                  }
                }
              }
            }
          }
        }
      }
      await _0x46f82b();
    } catch (_0xd74d22) {
      return console['log'](_0xd74d22), await delay(0x3a98);
    }
}
;
loadSettings(), main();