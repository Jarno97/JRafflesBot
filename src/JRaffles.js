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
  const _0x1eaed5 = fs['readFileSync']('../tasks/afew.csv', 'utf8');
  afew = Papa['parse'](_0x1eaed5, { 'header': !![] })['data'];
  const _0x5d2d7a = fs['readFileSync']('../tasks/maha.csv', 'utf-8');
  maha = Papa['parse'](_0x5d2d7a, { 'header': !![] })['data'];
  const _0x5eb1ba = fs['readFileSync']('../tasks/footshop.csv', 'utf-8');
  footshop = Papa['parse'](_0x5eb1ba, { 'header': !![] })['data'], settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x43ecab => new Promise(_0x50a256 => setTimeout(_0x50a256, _0x43ecab));
async function getLicense(_0x3a5de6) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x3a5de6, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x4eca45 => _0x4eca45['data'])['catch'](() => null);
}
;
async function checkLicense(_0x28a502) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x58f0af = await getLicense(_0x28a502);
  if (!_0x58f0af)
    return console['log']('License\x20not\x20found');
  if (!_0x58f0af['user'])
    return console['log']('License\x20not\x20bound');
  return _0x58f0af['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x96a8ac = await prompt['get']('Module');
  return console['clear'](), _0x96a8ac['Module'];
}
;
async function getPassword() {
  var _0x49953e = await prompt['get']('Password');
  return console['clear'](), _0x49953e['Password'];
}
;
async function getLinks() {
  var _0x1b9203 = await prompt['get']('Links');
  return _0x1b9203['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x547729 = 0x0; _0x547729 < afewProducts['length']; _0x547729++) {
    console['log']('\x20(' + _0x547729 + ')\x20' + afewProducts[_0x547729]);
  }
  ;
  let _0x537a66 = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x537a66['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x145277 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x145277;
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
  let _0x17ce6f = proxyFile['split']('\x0a'), _0x591156 = _0x17ce6f['map']((_0x73e02c, _0x3a6787) => {
    sanatizeProxy = _0x73e02c['replace']('\x0d', '');
    if (_0x17ce6f[_0x3a6787 + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x591156;
}
;
async function afewScraper() {
  var _0x2535b2 = getProxy()[0x1]['split'](':');
  const _0x1f845e = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x2535b2[0x0] + ':' + _0x2535b2[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x329f41 = await _0x1f845e['newPage']();
    await _0x329f41['authenticate']({
      'username': '' + _0x2535b2[0x2],
      'password': '' + _0x2535b2[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x329f41['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x329f41['setRequestInterception'](!![]), _0x329f41['on']('request', _0x359795 => {
      _0x359795['resourceType']() === 'image' || _0x359795['resourceType']() === 'font' || _0x359795['resourceType']() === 'media' ? _0x359795['abort']() : _0x359795['continue']();
    }), await _0x329f41['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x329f41['waitForTimeout'](0xbb8), await _0x329f41['waitForSelector']('.product-card');
    const _0x3cad44 = await _0x329f41['$$eval']('a.product-card', _0x2d371a => {
      return _0x2d371a['map'](_0x13aa2d => _0x13aa2d['href']);
    });
    return afewProducts = _0x3cad44;
  } catch (_0x2d5da4) {
    console['log']('\x20' + _0x2d5da4);
  } finally {
    _0x1f845e['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0xd7f94f, _0x51ff44) {
  var _0x24f005 = getProxy()[_0xd7f94f]['split'](':'), _0x46e3f0 = modules[taskModule]['data'];
  _0x51ff44 == 'exp' ? _0x46e3f0['data']['attributes']['email'] = '' + maha[_0xd7f94f]['FirstName'] + maha[_0xd7f94f]['LastName'] + catchall : _0x46e3f0['data']['attributes']['email'] = '' + maha[_0xd7f94f]['Email'];
  _0x46e3f0['data']['attributes']['properties']['$first_name'] = '' + maha[_0xd7f94f]['FirstName'], _0x46e3f0['data']['attributes']['properties']['$last_name'] = '' + maha[_0xd7f94f]['LastName'], _0x46e3f0['data']['attributes']['properties']['$address1'] = maha[_0xd7f94f]['Address1'] + '\x20' + maha[_0xd7f94f]['Address2'], _0x46e3f0['data']['attributes']['properties']['$zip'] = '' + maha[_0xd7f94f]['Zip'], _0x46e3f0['data']['attributes']['properties']['$city'] = '' + maha[_0xd7f94f]['City'], _0x46e3f0['data']['attributes']['properties']['$country'] = '' + maha[_0xd7f94f]['Country'], _0x46e3f0['data']['attributes']['properties']['Size'] = '' + maha[_0xd7f94f]['Size'], _0x46e3f0['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0xd7f94f]['Follower'];
  var _0x17032f = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x46e3f0),
    'proxy': 'http://' + _0x24f005[0x2] + ':' + _0x24f005[0x3] + '@' + _0x24f005[0x0] + ':' + _0x24f005[0x1]
  };
  return _0x51ff44 === 'ver' && (_0x17032f['method'] = 'GET'), new Promise(function (_0x486a85, _0x49d51d) {
    callback = async (_0x5f5a2e, _0x177d9f, _0x43d1c9) => {
      !_0x5f5a2e && _0x177d9f['statusCode'] == 0xca || !_0x5f5a2e && _0x177d9f['statusCode'] == 0xc8 ? _0x486a85(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xd7f94f + 0x1) + ':\x20Raffle\x20Entered!')) : _0x49d51d(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xd7f94f + 0x1) + ':\x20error\x20' + _0x5f5a2e + '\x20' + JSON['stringify'](_0x177d9f)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xd7f94f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x46e3f0['data']['attributes']['email']), request(_0x17032f, callback);
    } catch (_0x540c0c) {
      console['log'](getTime() + '\x20Task\x20' + (_0xd7f94f + 0x1) + ':\x20' + _0x540c0c);
    }
  });
}
;
async function footshopModule() {
  var _0x12bad4;
  puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x268fc6 = 0x0; _0x268fc6 < footshop['length']; _0x268fc6++) {
    if (footshop[_0x268fc6]['Email'] == '' || footshop[_0x268fc6]['FirstName'] == '' || footshop[_0x268fc6]['LastName'] == '' || footshop[_0x268fc6]['Country'] == '' || footshop[_0x268fc6]['Size'] == '' || footshop[_0x268fc6]['Address1'] == '' || footshop[_0x268fc6]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x268fc6 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    async function _0xff105c() {
      var _0x485b77 = await axios['get']('https://releases.footshop.com/api/raffles/' + footshop[_0x268fc6]['Pid'])['then'](_0x1a879b => _0x1a879b['data'])['catch'](() => null);
      let _0x2b07e4 = _0x485b77['sizeSets']['Men']['sizes'];
      async function _0x535cc7() {
        for (var _0x1aa9e4 = 0x0; _0x1aa9e4 < _0x485b77['sizeSets']['Men']['sizes']['length']; _0x1aa9e4++) {
          if (_0x2b07e4[_0x1aa9e4]['eur'] == footshop[_0x268fc6]['Size'])
            return _0x12bad4 = _0x2b07e4[_0x1aa9e4]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x268fc6 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x268fc6 + 0x1) + '\x20:\x20Size\x20' + footshop[_0x268fc6]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x2ce6fa = await _0x535cc7();
      if (_0x2ce6fa == ![])
        return ![];
    }
    let _0x18f2f3 = await _0xff105c();
    if (_0x18f2f3 == ![])
      continue;
    if (footshop[_0x268fc6]['Email'] == '' || footshop[_0x268fc6]['FirstName'] == '' || footshop[_0x268fc6]['LastName'] == '' || footshop[_0x268fc6]['Country'] == '' || footshop[_0x268fc6]['Size'] == '' || footshop[_0x268fc6]['Address1'] == '' || footshop[_0x268fc6]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x268fc6 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x32b771 = 'https://releases.footshop.com/register/' + footshop[_0x268fc6]['Pid'] + '/Men/' + _0x12bad4;
    var _0x4e3844 = getProxy()[_0x268fc6]['split'](':');
    const _0x211655 = await puppeteer['launch']({
      'headless': ![],
      'args': ['--proxy-server=' + _0x4e3844[0x0] + ':' + _0x4e3844[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x49bd63 = await _0x211655['newPage']();
      await _0x49bd63['authenticate']({
        'username': '' + _0x4e3844[0x2],
        'password': '' + _0x4e3844[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x268fc6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x49bd63['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x49bd63['setRequestInterception'](!![]), _0x49bd63['on']('request', _0x1301aa => {
        _0x1301aa['resourceType']() === 'image' || _0x1301aa['resourceType']() === 'font' || _0x1301aa['resourceType']() === 'media' ? _0x1301aa['abort']() : _0x1301aa['continue']();
      }), await _0x49bd63['goto']('' + _0x32b771 + _0x12bad4), await _0x49bd63['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x268fc6 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x49bd63['type']('input[name=\x22email\x22]', '' + footshop[_0x268fc6]['Email']), await delay(0x640), await _0x49bd63['type']('input[name=\x22phone\x22]', '' + footshop[_0x268fc6]['Phone']), await delay(0x4b0), await _0x49bd63['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), await _0x49bd63['type']('input[name=\x22firstName\x22]', '' + footshop[_0x268fc6]['FirstName']), await delay(0x258), await _0x49bd63['type']('input[name=\x22lastName\x22]', '' + footshop[_0x268fc6]['LastName']), await delay(0xc8), await _0x49bd63['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x268fc6]['Follower']), await delay(0x4b0), await _0x49bd63['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x268fc6 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x49bd63['select']('select[name=\x22country\x22]', '' + footshop[_0x268fc6]['Country']), await delay(0x2bc), await _0x49bd63['type']('input[name=\x22streetName\x22]', '' + footshop[_0x268fc6]['Address1']), await delay(0x258), await _0x49bd63['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x268fc6]['HouseNumber'] + footshop[_0x268fc6]['Address2']), await delay(0xc8), await _0x49bd63['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x268fc6]['Zip']), await delay(0x1f4), await _0x49bd63['type']('input[name=\x22city\x22]', '' + footshop[_0x268fc6]['City']), await delay(0x4b0), await _0x49bd63['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x49bd63['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x268fc6 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x49bd63['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x268fc6 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x49bd63['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x268fc6 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x49bd63['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x49bd63['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0x49bd63['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x268fc6]['CardNumber']), await delay(0x320), await _0x49bd63['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x268fc6]['ExpiryDate']), await delay(0x226), await _0x49bd63['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x268fc6]['CVV']), await delay(0x226), await _0x49bd63['type']('input[name=\x22holderName\x22]', '' + footshop[_0x268fc6]['NameOnCard']), await delay(0x226), await _0x49bd63['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x268fc6 + 0x1) + '\x20:\x20Awaiting\x203DS'), await _0x49bd63['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x268fc6 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0xbfe7f1) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x268fc6 + 0x1) + '\x20:\x20' + _0xbfe7f1);
    } finally {
      _0x211655['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x2655c4, _0x155af8) => {
  for (var _0x4520be = 0x0; _0x4520be < afew['length']; _0x4520be++) {
    if (afew[_0x4520be]['Email'] == '' || afew[_0x4520be]['FirstName'] == '' || afew[_0x4520be]['LastName'] == '' || afew[_0x4520be]['Country'] == '' || afew[_0x4520be]['Size'] == '' || afew[_0x4520be]['Address1'] == '' || afew[_0x4520be]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4520be + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x380df6 = getProxy()[_0x4520be]['split'](':');
    const _0x487819 = await puppeteer['launch']({
      'headless': ![],
      'args': ['--proxy-server=' + _0x380df6[0x0] + ':' + _0x380df6[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x226211 = await _0x487819['newPage']();
      await _0x226211['authenticate']({
        'username': '' + _0x380df6[0x2],
        'password': '' + _0x380df6[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4520be + 0x1) + '\x20:\x20Getting\x20Session'), await _0x226211['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x226211['setRequestInterception'](!![]), _0x226211['on']('request', _0x535863 => {
        _0x535863['resourceType']() === 'image' || _0x535863['resourceType']() === 'font' || _0x535863['resourceType']() === 'media' ? _0x535863['abort']() : _0x535863['continue']();
      }), await _0x226211['goto'](_0x2655c4), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4520be + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x226211['waitForTimeout'](0xfa0);
      const [_0x4142ba] = await _0x226211['$x']('//button[contains(.,\x20\x27Alle\x27)]');
      _0x4142ba && await _0x4142ba['click']();
      await _0x226211['waitForTimeout'](0x320), await _0x226211['hover']('span[class=\x22release-type\x22]'), await _0x226211['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x4520be]['Size'] + '\x22]'), await _0x226211['waitForTimeout'](0x320), await _0x226211['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x4520be]['Size'] + '\x22]'), await _0x226211['waitForTimeout'](0x258), await _0x226211['type']('#raffle-instagram', '' + afew[_0x4520be]['Follower'], { 'delay': 0x64 }), await _0x226211['waitForTimeout'](0x384), await _0x226211['click']('#raffle-terms'), await _0x226211['waitForTimeout'](0x384);
      const [_0x575151] = await _0x226211['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0x575151 && await _0x575151['click']();
      ;
      await _0x226211['waitForTimeout'](0xbb8), await _0x226211['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4520be + 0x1) + '\x20:\x20Filling\x20Information'), _0x155af8 == 'sec' ? await _0x226211['type']('#checkout_email', '' + afew[_0x4520be]['FirstName'] + afew[_0x4520be]['LastName'] + settings['catchall']) : await _0x226211['type']('#checkout_email', '' + afew[_0x4520be]['Email']), await _0x226211['waitForTimeout'](0x258), await _0x226211['select']('#checkout_shipping_address_country', '' + afew[_0x4520be]['Country']), await _0x226211['waitForTimeout'](0x258), await _0x226211['type']('#checkout_shipping_address_first_name', '' + afew[_0x4520be]['FirstName']), await _0x226211['waitForTimeout'](0x320), await _0x226211['type']('#checkout_shipping_address_last_name', '' + afew[_0x4520be]['LastName']), await _0x226211['waitForTimeout'](0x2bc), await _0x226211['type']('#checkout_shipping_address_address1', '' + afew[_0x4520be]['Address1']), await _0x226211['waitForTimeout'](0x2bc), await _0x226211['type']('#checkout_shipping_address_address2', '' + afew[_0x4520be]['Address2']), await _0x226211['waitForTimeout'](0x2bc), await _0x226211['type']('#checkout_shipping_address_zip', '' + afew[_0x4520be]['Postcode']), await _0x226211['waitForTimeout'](0x2bc), await _0x226211['type']('#checkout_shipping_address_city', '' + afew[_0x4520be]['City']), await _0x226211['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4520be + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x226211['click']('#continue_button'), await _0x226211['waitForTimeout'](0x1194), await _0x226211['waitForSelector']('#continue_button'), await _0x226211['click']('#continue_button'), await _0x226211['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4520be + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x226211['waitForSelector']('#continue_button'), await _0x226211['click']('#continue_button'), await _0x226211['waitForTimeout'](0x1194), await _0x226211['waitForSelector']('#continue_button'), await _0x226211['click']('#continue_button'), await _0x226211['waitForTimeout'](0x2af8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4520be + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x1825f9) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4520be + 0x1) + '\x20:\x20' + _0x1825f9);
    } finally {
      _0x487819 && _0x487819['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
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
      async function _0x1f8267() {
        await delay(0x320), console['clear'](), console['log']('Welcome\x20to\x20JRaffles();\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a\x0a\x20(0)\x20AFEW\x20Raffle\x0a\x20(1)\x20MAHA\x20Raffle\x0a\x20(2)\x20MAHA\x20Raffle\x20Experimental\x0a\x20(3)\x20MAHA\x20Link\x20Verification\x0a\x20(4)\x20Footshop\x20Raffle\x0a'), taskModule = await getModule();
        if (taskModule == 0x0)
          await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct]);
        else {
          if (taskModule == 0x1) {
            console['log']('Starting\x20' + maha['length'] + '\x20MAHA\x20Tasks');
            for (var _0x28193d = 0x0; _0x28193d < maha['length']; _0x28193d++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x28193d + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x28193d), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x2) {
              console['log']('Starting\x20' + maha['length'] + '\x20Experimental\x20MAHA\x20Tasks');
              for (var _0x28193d = 0x0; _0x28193d < maha['length']; _0x28193d++) {
                console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x28193d + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x28193d, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
            } else {
              if (taskModule == 0x3) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x28193d = 0x0; _0x28193d < links['length']; _0x28193d++) {
                  modules[taskModule]['url'] = links[_0x28193d], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x28193d + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x28193d, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
              } else {
                if (taskModule == 0x4)
                  await footshopModule(), await delay(0x1388);
                else {
                  if (taskModule == 0x5)
                    return console['log']('Reloading\x20settings'), await loadSettings(), _0x1f8267();
                  else {
                    if (taskModule == 0x45) {
                      var _0x253ca6 = await getPassword();
                      _0x253ca6 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
                    }
                  }
                }
              }
            }
          }
        }
      }
      await _0x1f8267();
    } catch (_0x387a80) {
      return console['log'](_0x387a80), await delay(0x3a98);
    }
}
;
loadSettings(), main();