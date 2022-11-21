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
const delay = _0x29d658 => new Promise(_0x5cec9b => setTimeout(_0x5cec9b, _0x29d658));
async function getLicense(_0xfa6a53) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0xfa6a53, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x564d95 => _0x564d95['data'])['catch'](() => null);
}
;
async function checkLicense(_0x2d3c27) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x53b31d = await getLicense(_0x2d3c27);
  if (!_0x53b31d)
    return console['log']('License\x20not\x20found');
  if (!_0x53b31d['user'])
    return console['log']('License\x20not\x20bound');
  return _0x53b31d['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x520aac = await prompt['get']('Module');
  return console['clear'](), _0x520aac['Module'];
}
;
async function getPassword() {
  var _0x43aa60 = await prompt['get']('Password');
  return console['clear'](), _0x43aa60['Password'];
}
;
async function getLinks() {
  var _0x382175 = await prompt['get']('Links');
  return _0x382175['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x1bcd2a = 0x0; _0x1bcd2a < afewProducts['length']; _0x1bcd2a++) {
    console['log']('\x20(' + _0x1bcd2a + ')\x20' + afewProducts[_0x1bcd2a]);
  }
  ;
  let _0xdf4da3 = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0xdf4da3['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x3116b0 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x3116b0;
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
  let _0x4e6ade = proxyFile['split']('\x0a'), _0x1f0f28 = _0x4e6ade['map']((_0x3095b9, _0x2b2ea8) => {
    sanatizeProxy = _0x3095b9['replace']('\x0d', '');
    if (_0x4e6ade[_0x2b2ea8 + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x1f0f28;
}
;
async function afewScraper() {
  var _0x5e343d = getProxy()[0x1]['split'](':');
  const _0x592a39 = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x5e343d[0x0] + ':' + _0x5e343d[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x2d3704 = await _0x592a39['newPage']();
    await _0x2d3704['authenticate']({
      'username': '' + _0x5e343d[0x2],
      'password': '' + _0x5e343d[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x2d3704['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2d3704['setRequestInterception'](!![]), _0x2d3704['on']('request', _0x433ed6 => {
      _0x433ed6['resourceType']() === 'image' || _0x433ed6['resourceType']() === 'font' || _0x433ed6['resourceType']() === 'media' ? _0x433ed6['abort']() : _0x433ed6['continue']();
    }), await _0x2d3704['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x2d3704['waitForTimeout'](0xbb8), await _0x2d3704['waitForSelector']('.product-card');
    const _0x10108d = await _0x2d3704['$$eval']('a.product-card', _0x40bae3 => {
      return _0x40bae3['map'](_0x1c05c2 => _0x1c05c2['href']);
    });
    return afewProducts = _0x10108d;
  } catch (_0x2be1d8) {
    console['log']('\x20' + _0x2be1d8);
  } finally {
    _0x592a39['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x14618d, _0x3a16fd) {
  var _0x277838 = getProxy()[_0x14618d]['split'](':'), _0xd222d = modules[taskModule]['data'];
  _0x3a16fd == 'exp' ? _0xd222d['data']['attributes']['email'] = '' + maha[_0x14618d]['FirstName'] + maha[_0x14618d]['LastName'] + catchall : _0xd222d['data']['attributes']['email'] = '' + maha[_0x14618d]['Email'];
  _0xd222d['data']['attributes']['properties']['$first_name'] = '' + maha[_0x14618d]['FirstName'], _0xd222d['data']['attributes']['properties']['$last_name'] = '' + maha[_0x14618d]['LastName'], _0xd222d['data']['attributes']['properties']['$address1'] = maha[_0x14618d]['Address1'] + '\x20' + maha[_0x14618d]['Address2'], _0xd222d['data']['attributes']['properties']['$zip'] = '' + maha[_0x14618d]['Zip'], _0xd222d['data']['attributes']['properties']['$city'] = '' + maha[_0x14618d]['City'], _0xd222d['data']['attributes']['properties']['$country'] = '' + maha[_0x14618d]['Country'], _0xd222d['data']['attributes']['properties']['Size'] = '' + maha[_0x14618d]['Size'], _0xd222d['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x14618d]['Follower'];
  var _0x3ca33e = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0xd222d),
    'proxy': 'http://' + _0x277838[0x2] + ':' + _0x277838[0x3] + '@' + _0x277838[0x0] + ':' + _0x277838[0x1]
  };
  return _0x3a16fd === 'ver' && (_0x3ca33e['method'] = 'GET'), new Promise(function (_0x238ec4, _0x1e7784) {
    callback = async (_0x436fce, _0x5eaa0b, _0x4c0d42) => {
      !_0x436fce && _0x5eaa0b['statusCode'] == 0xca || !_0x436fce && _0x5eaa0b['statusCode'] == 0xc8 ? _0x238ec4(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x14618d + 0x1) + ':\x20Raffle\x20Entered!')) : _0x1e7784(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x14618d + 0x1) + ':\x20error\x20' + _0x436fce + '\x20' + JSON['stringify'](_0x5eaa0b)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x14618d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xd222d['data']['attributes']['email']), request(_0x3ca33e, callback);
    } catch (_0x12f542) {
      console['log'](getTime() + '\x20Task\x20' + (_0x14618d + 0x1) + ':\x20' + _0x12f542);
    }
  });
}
;
async function footshopModule() {
  var _0x4f8217;
  puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x439a45 = 0x0; _0x439a45 < footshop['length']; _0x439a45++) {
    if (footshop[_0x439a45]['Email'] == '' || footshop[_0x439a45]['FirstName'] == '' || footshop[_0x439a45]['LastName'] == '' || footshop[_0x439a45]['Country'] == '' || footshop[_0x439a45]['Size'] == '' || footshop[_0x439a45]['Address1'] == '' || footshop[_0x439a45]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x439a45 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    async function _0x34ef59() {
      var _0x241e03 = await axios['get']('https://releases.footshop.com/api/raffles/' + footshop[_0x439a45]['Pid'])['then'](_0x57c866 => _0x57c866['data'])['catch'](() => null);
      let _0x39bb6d = _0x241e03['sizeSets']['Men']['sizes'];
      for (var _0x3b47d8 = 0x0; _0x3b47d8 < _0x241e03['sizeSets']['Men']['sizes']['length']; _0x3b47d8++) {
        if (_0x39bb6d[_0x3b47d8]['eur'] == footshop[_0x439a45]['Size'])
          return _0x4f8217 = _0x39bb6d[_0x3b47d8]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x439a45 + 0x1) + '\x20:\x20Found\x20SizePid');
      }
    }
    await _0x34ef59();
    if (footshop[_0x439a45]['Email'] == '' || footshop[_0x439a45]['FirstName'] == '' || footshop[_0x439a45]['LastName'] == '' || footshop[_0x439a45]['Country'] == '' || footshop[_0x439a45]['Size'] == '' || footshop[_0x439a45]['Address1'] == '' || footshop[_0x439a45]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x439a45 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x30b894 = 'https://releases.footshop.com/register/' + footshop[_0x439a45]['Pid'] + '/Men/' + _0x4f8217;
    var _0x55f63b = getProxy()[_0x439a45]['split'](':');
    const _0xb005d = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x55f63b[0x0] + ':' + _0x55f63b[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x30b8bd = await _0xb005d['newPage']();
      await _0x30b8bd['authenticate']({
        'username': '' + _0x55f63b[0x2],
        'password': '' + _0x55f63b[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x439a45 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x30b8bd['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x30b8bd['setRequestInterception'](!![]), _0x30b8bd['on']('request', _0x902dff => {
        _0x902dff['resourceType']() === 'image' || _0x902dff['resourceType']() === 'font' || _0x902dff['resourceType']() === 'media' ? _0x902dff['abort']() : _0x902dff['continue']();
      }), await _0x30b8bd['goto']('' + _0x30b894 + _0x4f8217), await _0x30b8bd['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x439a45 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x30b8bd['type']('input[name=\x22email\x22]', '' + footshop[_0x439a45]['Email']), await delay(0x640), await _0x30b8bd['type']('input[name=\x22phone\x22]', '' + footshop[_0x439a45]['Phone']), await delay(0x4b0), await _0x30b8bd['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), await _0x30b8bd['type']('input[name=\x22firstName\x22]', '' + footshop[_0x439a45]['FirstName']), await delay(0x258), await _0x30b8bd['type']('input[name=\x22lastName\x22]', '' + footshop[_0x439a45]['LastName']), await delay(0xc8), await _0x30b8bd['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x439a45]['Follower']), await delay(0x4b0), await _0x30b8bd['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x439a45 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x30b8bd['select']('select[name=\x22country\x22]', '' + footshop[_0x439a45]['Country']), await delay(0x2bc), await _0x30b8bd['type']('input[name=\x22streetName\x22]', '' + footshop[_0x439a45]['Address1']), await delay(0x258), await _0x30b8bd['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x439a45]['HouseNumber'] + footshop[_0x439a45]['Address2']), await delay(0xc8), await _0x30b8bd['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x439a45]['Zip']), await delay(0x1f4), await _0x30b8bd['type']('input[name=\x22city\x22]', '' + footshop[_0x439a45]['City']), await delay(0x4b0), await _0x30b8bd['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x30b8bd['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x439a45 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x30b8bd['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x439a45 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x30b8bd['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x439a45 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x30b8bd['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x30b8bd['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0x30b8bd['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x439a45]['CardNumber']), await delay(0x320), await _0x30b8bd['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x439a45]['ExpiryDate']), await delay(0x226), await _0x30b8bd['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x439a45]['CVV']), await delay(0x226), await _0x30b8bd['type']('input[name=\x22holderName\x22]', '' + footshop[_0x439a45]['NameOnCard']), await delay(0x226), await _0x30b8bd['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x439a45 + 0x1) + '\x20:\x20Awaiting\x203DS'), await _0x30b8bd['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x439a45 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x1d024b) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x439a45 + 0x1) + '\x20:\x20' + _0x1d024b);
    } finally {
      _0xb005d['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0xe6295f, _0xdaaccc) => {
  for (var _0x2bff37 = 0x0; _0x2bff37 < afew['length']; _0x2bff37++) {
    if (afew[_0x2bff37]['Email'] == '' || afew[_0x2bff37]['FirstName'] == '' || afew[_0x2bff37]['LastName'] == '' || afew[_0x2bff37]['Country'] == '' || afew[_0x2bff37]['Size'] == '' || afew[_0x2bff37]['Address1'] == '' || afew[_0x2bff37]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2bff37 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x2128ff = getProxy()[_0x2bff37]['split'](':');
    const _0x70fe1c = await puppeteer['launch']({
      'headless': ![],
      'args': ['--proxy-server=' + _0x2128ff[0x0] + ':' + _0x2128ff[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x21cfc9 = await _0x70fe1c['newPage']();
      await _0x21cfc9['authenticate']({
        'username': '' + _0x2128ff[0x2],
        'password': '' + _0x2128ff[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2bff37 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x21cfc9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x21cfc9['setRequestInterception'](!![]), _0x21cfc9['on']('request', _0x5e3a5b => {
        _0x5e3a5b['resourceType']() === 'image' || _0x5e3a5b['resourceType']() === 'font' || _0x5e3a5b['resourceType']() === 'media' ? _0x5e3a5b['abort']() : _0x5e3a5b['continue']();
      }), await _0x21cfc9['goto'](_0xe6295f), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2bff37 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x21cfc9['waitForTimeout'](0xfa0);
      const [_0x50e79d] = await _0x21cfc9['$x']('//button[contains(.,\x20\x27Alle\x27)]');
      _0x50e79d && await _0x50e79d['click']();
      await _0x21cfc9['waitForTimeout'](0x320), await _0x21cfc9['hover']('span[class=\x22release-type\x22]'), await _0x21cfc9['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x2bff37]['Size'] + '\x22]'), await _0x21cfc9['waitForTimeout'](0x320), await _0x21cfc9['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x2bff37]['Size'] + '\x22]'), await _0x21cfc9['waitForTimeout'](0x258), await _0x21cfc9['type']('#raffle-instagram', '' + afew[_0x2bff37]['Follower'], { 'delay': 0x64 }), await _0x21cfc9['waitForTimeout'](0x384), await _0x21cfc9['click']('#raffle-terms'), await _0x21cfc9['waitForTimeout'](0x384);
      const [_0x527907] = await _0x21cfc9['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0x527907 && await _0x527907['click']();
      ;
      await _0x21cfc9['waitForTimeout'](0xbb8), await _0x21cfc9['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2bff37 + 0x1) + '\x20:\x20Filling\x20Information'), _0xdaaccc == 'sec' ? await _0x21cfc9['type']('#checkout_email', '' + afew[_0x2bff37]['FirstName'] + afew[_0x2bff37]['LastName'] + settings['catchall']) : await _0x21cfc9['type']('#checkout_email', '' + afew[_0x2bff37]['Email']), await _0x21cfc9['waitForTimeout'](0x258), await _0x21cfc9['select']('#checkout_shipping_address_country', '' + afew[_0x2bff37]['Country']), await _0x21cfc9['waitForTimeout'](0x258), await _0x21cfc9['type']('#checkout_shipping_address_first_name', '' + afew[_0x2bff37]['FirstName']), await _0x21cfc9['waitForTimeout'](0x320), await _0x21cfc9['type']('#checkout_shipping_address_last_name', '' + afew[_0x2bff37]['LastName']), await _0x21cfc9['waitForTimeout'](0x2bc), await _0x21cfc9['type']('#checkout_shipping_address_address1', '' + afew[_0x2bff37]['Address1']), await _0x21cfc9['waitForTimeout'](0x2bc), await _0x21cfc9['type']('#checkout_shipping_address_address2', '' + afew[_0x2bff37]['Address2']), await _0x21cfc9['waitForTimeout'](0x2bc), await _0x21cfc9['type']('#checkout_shipping_address_zip', '' + afew[_0x2bff37]['Postcode']), await _0x21cfc9['waitForTimeout'](0x2bc), await _0x21cfc9['type']('#checkout_shipping_address_city', '' + afew[_0x2bff37]['City']), await _0x21cfc9['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2bff37 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x21cfc9['click']('#continue_button'), await _0x21cfc9['waitForTimeout'](0x1194), await _0x21cfc9['waitForSelector']('#continue_button'), await _0x21cfc9['click']('#continue_button'), await _0x21cfc9['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2bff37 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x21cfc9['waitForSelector']('#continue_button'), await _0x21cfc9['click']('#continue_button'), await _0x21cfc9['waitForTimeout'](0x1194), await _0x21cfc9['waitForSelector']('#continue_button'), await _0x21cfc9['click']('#continue_button'), await _0x21cfc9['waitForTimeout'](0x2af8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2bff37 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x3034fb) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2bff37 + 0x1) + '\x20:\x20' + _0x3034fb);
    } finally {
      _0x70fe1c['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
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
          for (var _0x2de812 = 0x0; _0x2de812 < maha['length']; _0x2de812++) {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2de812 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2de812), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
          }
        } else {
          if (taskModule == 0x2) {
            console['log']('Starting\x20' + maha['length'] + '\x20Experimental\x20MAHA\x20Tasks');
            for (var _0x2de812 = 0x0; _0x2de812 < maha['length']; _0x2de812++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2de812 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2de812, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x3) {
              console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
              for (var _0x2de812 = 0x0; _0x2de812 < links['length']; _0x2de812++) {
                modules[taskModule]['url'] = links[_0x2de812], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2de812 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2de812, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
              }
            } else {
              if (taskModule == 0x4)
                await footshopModule();
              else {
                if (taskModule == 0x5) {
                  var _0x154d68 = await getPassword();
                  _0x154d68 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
                }
              }
            }
          }
        }
      }
    } catch (_0x1b70bf) {
      return console['log'](_0x1b70bf), await delay(0x3a98);
    }
}
;
main();