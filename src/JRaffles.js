const puppeteer = require('puppeteer-extra'), RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha'), StealthPlugin = require('puppeteer-extra-plugin-stealth'), setTitle = require('node-bash-title'), chalk = require('chalk'), fs = require('fs'), axios = require('axios'), Papa = require('papaparse'), request = require('request'), proxyFile = fs['readFileSync']('../proxies.txt', 'utf-8');
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
  'executeOnComplete': 'JRaffles.exe'
}, updater = new AutoGitUpdate(config);
async function loadSettings() {
  const _0x39e5f9 = fs['readFileSync']('../tasks/afew.csv', 'utf8');
  afew = Papa['parse'](_0x39e5f9, { 'header': !![] })['data'];
  const _0x20e698 = fs['readFileSync']('../tasks/maha.csv', 'utf-8');
  maha = Papa['parse'](_0x20e698, { 'header': !![] })['data'];
  const _0x226d52 = fs['readFileSync']('../tasks/footshop.csv', 'utf-8');
  footshop = Papa['parse'](_0x226d52, { 'header': !![] })['data'];
  const _0x235f19 = fs['readFileSync']('../tasks/bstn.csv', 'utf-8');
  bstn = Papa['parse'](_0x235f19, { 'header': !![] })['data'], settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x3a0ab1 => new Promise(_0x1b2126 => setTimeout(_0x1b2126, _0x3a0ab1));
async function getLicense(_0xdc6696) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0xdc6696, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x20c5ae => _0x20c5ae['data'])['catch'](() => null);
}
;
async function checkLicense(_0x197efe) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x45103f = await getLicense(_0x197efe);
  if (!_0x45103f)
    return console['log']('License\x20not\x20found');
  if (!_0x45103f['user'])
    return console['log']('License\x20not\x20bound');
  return _0x45103f['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x4bad56 = await prompt['get']('Module');
  return console['clear'](), _0x4bad56['Module'];
}
;
async function getPassword() {
  var _0xb9b3c4 = await prompt['get']('Password');
  return console['clear'](), _0xb9b3c4['Password'];
}
;
async function getLinks() {
  var _0x1b9da5 = await prompt['get']('Links');
  return _0x1b9da5['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x5ee906 = 0x0; _0x5ee906 < afewProducts['length']; _0x5ee906++) {
    console['log']('\x20(' + _0x5ee906 + ')\x20' + afewProducts[_0x5ee906]);
  }
  ;
  console['log']();
  let _0x48dd6a = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x48dd6a['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x3e348b = new Date(Date['now']())['toLocaleTimeString']();
  return _0x3e348b;
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
  { 'name': 'BSTN\x20RAFFLE' }
];
modules[0x45] = { 'name': 'AFEW\x20SECRET' };
function getProxy() {
  let _0xc79557 = proxyFile['split']('\x0a'), _0x79b1f1 = _0xc79557['map']((_0x16ca4d, _0x599552) => {
    sanatizeProxy = _0x16ca4d['replace']('\x0d', '');
    if (_0xc79557[_0x599552 + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x79b1f1;
}
;
async function afewScraper() {
  var _0x21f8ab = getProxy()[0x1]['split'](':');
  const _0x5a4451 = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x21f8ab[0x0] + ':' + _0x21f8ab[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x53f414 = await _0x5a4451['newPage']();
    await _0x53f414['authenticate']({
      'username': '' + _0x21f8ab[0x2],
      'password': '' + _0x21f8ab[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x53f414['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x53f414['setRequestInterception'](!![]), _0x53f414['on']('request', _0x47bff5 => {
      _0x47bff5['resourceType']() === 'image' || _0x47bff5['resourceType']() === 'font' || _0x47bff5['resourceType']() === 'media' ? _0x47bff5['abort']() : _0x47bff5['continue']();
    }), await _0x53f414['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x53f414['waitForTimeout'](0xbb8), await _0x53f414['waitForSelector']('.product-card');
    const _0x161e7f = await _0x53f414['$$eval']('a.product-card', _0x56a2ca => {
      return _0x56a2ca['map'](_0x482694 => _0x482694['href']);
    });
    return afewProducts = _0x161e7f;
  } catch (_0x336ba4) {
    console['log']('\x20' + _0x336ba4);
  } finally {
    _0x5a4451['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x354ab9, _0x385011) {
  var _0xa8d46f = getProxy()[_0x354ab9]['split'](':'), _0x4c956d = modules[taskModule]['data'];
  _0x385011 == 'exp' ? _0x4c956d['data']['attributes']['email'] = '' + maha[_0x354ab9]['FirstName'] + maha[_0x354ab9]['LastName'] + catchall : _0x4c956d['data']['attributes']['email'] = '' + maha[_0x354ab9]['Email'];
  _0x4c956d['data']['attributes']['properties']['$first_name'] = '' + maha[_0x354ab9]['FirstName'], _0x4c956d['data']['attributes']['properties']['$last_name'] = '' + maha[_0x354ab9]['LastName'], _0x4c956d['data']['attributes']['properties']['$address1'] = maha[_0x354ab9]['Address1'] + '\x20' + maha[_0x354ab9]['Address2'], _0x4c956d['data']['attributes']['properties']['$zip'] = '' + maha[_0x354ab9]['Zip'], _0x4c956d['data']['attributes']['properties']['$city'] = '' + maha[_0x354ab9]['City'], _0x4c956d['data']['attributes']['properties']['$country'] = '' + maha[_0x354ab9]['Country'], _0x4c956d['data']['attributes']['properties']['Size'] = '' + maha[_0x354ab9]['Size'], _0x4c956d['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x354ab9]['Follower'];
  var _0x1b755a = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x4c956d),
    'proxy': 'http://' + _0xa8d46f[0x2] + ':' + _0xa8d46f[0x3] + '@' + _0xa8d46f[0x0] + ':' + _0xa8d46f[0x1]
  };
  return _0x385011 === 'ver' && (_0x1b755a['method'] = 'GET'), new Promise(function (_0x5e4a0a, _0x5cec79) {
    callback = async (_0x39f021, _0x23361c, _0x42fd1f) => {
      !_0x39f021 && _0x23361c['statusCode'] == 0xca || !_0x39f021 && _0x23361c['statusCode'] == 0xc8 ? _0x5e4a0a(console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x354ab9 + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x5cec79(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x354ab9 + 0x1) + ':\x20error\x20' + _0x39f021 + '\x20' + JSON['stringify'](_0x23361c)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x354ab9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4c956d['data']['attributes']['email']), request(_0x1b755a, callback);
    } catch (_0x3ae5b3) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x354ab9 + 0x1) + ':\x20' + _0x3ae5b3);
    }
  });
}
;
async function footshopModule() {
  var _0x20bc74;
  puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x8f706 = 0x0; _0x8f706 < footshop['length']; _0x8f706++) {
    if (footshop[_0x8f706]['Email'] == '' || footshop[_0x8f706]['FirstName'] == '' || footshop[_0x8f706]['LastName'] == '' || footshop[_0x8f706]['Country'] == '' || footshop[_0x8f706]['Size'] == '' || footshop[_0x8f706]['Address1'] == '' || footshop[_0x8f706]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8f706 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    async function _0x1a6e80() {
      var _0xac5bda = await axios['get']('https://releases.footshop.com/api/raffles/' + footshop[_0x8f706]['Pid'])['then'](_0x2a3406 => _0x2a3406['data'])['catch'](() => null);
      let _0x83a063 = _0xac5bda['sizeSets']['Men']['sizes'];
      async function _0x33072c() {
        for (var _0x38fd0f = 0x0; _0x38fd0f < _0xac5bda['sizeSets']['Men']['sizes']['length']; _0x38fd0f++) {
          if (_0x83a063[_0x38fd0f]['eur'] == footshop[_0x8f706]['Size'])
            return _0x20bc74 = _0x83a063[_0x38fd0f]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8f706 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8f706 + 0x1) + '\x20:\x20Size\x20' + footshop[_0x8f706]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x39b8f3 = await _0x33072c();
      if (_0x39b8f3 == ![])
        return ![];
    }
    let _0x319bd6 = await _0x1a6e80();
    if (_0x319bd6 == ![])
      continue;
    if (footshop[_0x8f706]['Email'] == '' || footshop[_0x8f706]['FirstName'] == '' || footshop[_0x8f706]['LastName'] == '' || footshop[_0x8f706]['Country'] == '' || footshop[_0x8f706]['Size'] == '' || footshop[_0x8f706]['Address1'] == '' || footshop[_0x8f706]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8f706 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x84839b = 'https://releases.footshop.com/register/' + footshop[_0x8f706]['Pid'] + '/Men/' + _0x20bc74;
    var _0x266eea = getProxy()[_0x8f706]['split'](':');
    const _0x26b9b7 = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x266eea[0x0] + ':' + _0x266eea[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x2213d6 = await _0x26b9b7['newPage']();
      await _0x2213d6['authenticate']({
        'username': '' + _0x266eea[0x2],
        'password': '' + _0x266eea[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8f706 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2213d6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2213d6['setRequestInterception'](!![]), _0x2213d6['on']('request', _0x3d51bb => {
        _0x3d51bb['resourceType']() === 'image' || _0x3d51bb['resourceType']() === 'font' || _0x3d51bb['resourceType']() === 'media' ? _0x3d51bb['abort']() : _0x3d51bb['continue']();
      }), await _0x2213d6['goto']('' + _0x84839b + _0x20bc74), await _0x2213d6['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8f706 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x2213d6['type']('input[name=\x22email\x22]', '' + footshop[_0x8f706]['Email']), await delay(0x640), await _0x2213d6['type']('input[name=\x22phone\x22]', '' + footshop[_0x8f706]['Phone']), await delay(0x4b0), await _0x2213d6['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), await _0x2213d6['type']('input[name=\x22firstName\x22]', '' + footshop[_0x8f706]['FirstName']), await delay(0x258), await _0x2213d6['type']('input[name=\x22lastName\x22]', '' + footshop[_0x8f706]['LastName']), await delay(0xc8), await _0x2213d6['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x8f706]['Follower']), await delay(0x4b0), await _0x2213d6['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8f706 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x2213d6['select']('select[name=\x22country\x22]', '' + footshop[_0x8f706]['Country']), await delay(0x2bc), await _0x2213d6['type']('input[name=\x22streetName\x22]', '' + footshop[_0x8f706]['Address1']), await delay(0x258), await _0x2213d6['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x8f706]['HouseNumber'] + footshop[_0x8f706]['Address2']), await delay(0xc8), await _0x2213d6['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x8f706]['Zip']), await delay(0x1f4), await _0x2213d6['type']('input[name=\x22city\x22]', '' + footshop[_0x8f706]['City']), await delay(0x4b0), await _0x2213d6['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x2213d6['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8f706 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x2213d6['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8f706 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x2213d6['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8f706 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2213d6['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2213d6['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0x2213d6['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x8f706]['CardNumber']), await delay(0x320), await _0x2213d6['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x8f706]['ExpiryDate']), await delay(0x226), await _0x2213d6['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x8f706]['CVV']), await delay(0x226), await _0x2213d6['type']('input[name=\x22holderName\x22]', '' + footshop[_0x8f706]['NameOnCard']), await delay(0x226), await _0x2213d6['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8f706 + 0x1) + '\x20:\x20Awaiting\x203DS'), await _0x2213d6['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8f706 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
    } catch (_0x937bcd) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8f706 + 0x1) + '\x20:\x20' + _0x937bcd);
    } finally {
      _0x26b9b7['close'](), settings['footshopDelay'] == '' ? (console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay'])) : (console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']));
    }
  }
}
afewFunction = async (_0x40f218, _0x1fbdc4) => {
  for (var _0x54ba94 = 0x0; _0x54ba94 < afew['length']; _0x54ba94++) {
    if (afew[_0x54ba94]['Email'] == '' || afew[_0x54ba94]['FirstName'] == '' || afew[_0x54ba94]['LastName'] == '' || afew[_0x54ba94]['Country'] == '' || afew[_0x54ba94]['Size'] == '' || afew[_0x54ba94]['Address1'] == '' || afew[_0x54ba94]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54ba94 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0xf2b7 = getProxy()[_0x54ba94]['split'](':');
    const _0x1d088e = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0xf2b7[0x0] + ':' + _0xf2b7[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x283f2e = await _0x1d088e['newPage']();
      await _0x283f2e['authenticate']({
        'username': '' + _0xf2b7[0x2],
        'password': '' + _0xf2b7[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54ba94 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x283f2e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x283f2e['setRequestInterception'](!![]), _0x283f2e['on']('request', _0x5a9125 => {
        _0x5a9125['resourceType']() === 'image' || _0x5a9125['resourceType']() === 'font' || _0x5a9125['resourceType']() === 'media' ? _0x5a9125['abort']() : _0x5a9125['continue']();
      }), await _0x283f2e['goto'](_0x40f218), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54ba94 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x283f2e['waitForTimeout'](0xfa0), await _0x283f2e['waitForSelector']('#onetrust-accept-btn-handler'), await _0x283f2e['click']('#onetrust-accept-btn-handler'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54ba94 + 0x1) + '\x20:\x20Got\x20cookies'), await _0x283f2e['waitForTimeout'](0x320), await _0x283f2e['hover']('span[class=\x22release-type\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54ba94 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + afew[_0x54ba94]['Size']);
      try {
        await _0x283f2e['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x54ba94]['Size'] + '\x22]'), await _0x283f2e['waitForTimeout'](0x320), await _0x283f2e['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x54ba94]['Size'] + '\x22]');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54ba94 + 0x1) + '\x20:\x20Size\x20not\x20found'));
        continue;
      }
      await _0x283f2e['waitForTimeout'](0x258), await _0x283f2e['type']('#raffle-instagram', '' + afew[_0x54ba94]['Follower'], { 'delay': 0x64 }), await _0x283f2e['waitForTimeout'](0x384), await _0x283f2e['click']('#raffle-terms'), await _0x283f2e['waitForTimeout'](0x384), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54ba94 + 0x1) + '\x20:\x20Sending\x20request');
      const [_0x227fcc] = await _0x283f2e['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0x227fcc && await _0x227fcc['click']();
      ;
      await _0x283f2e['waitForTimeout'](0xbb8), await _0x283f2e['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54ba94 + 0x1) + '\x20:\x20Filling\x20Information'), _0x1fbdc4 == 'sec' ? await _0x283f2e['type']('#checkout_email', '' + afew[_0x54ba94]['FirstName'] + afew[_0x54ba94]['LastName'] + settings['catchall']) : await _0x283f2e['type']('#checkout_email', '' + afew[_0x54ba94]['Email']), await _0x283f2e['waitForTimeout'](0x258), await _0x283f2e['select']('#checkout_shipping_address_country', '' + afew[_0x54ba94]['Country']), await _0x283f2e['waitForTimeout'](0x258), await _0x283f2e['type']('#checkout_shipping_address_first_name', '' + afew[_0x54ba94]['FirstName']), await _0x283f2e['waitForTimeout'](0x320), await _0x283f2e['type']('#checkout_shipping_address_last_name', '' + afew[_0x54ba94]['LastName']), await _0x283f2e['waitForTimeout'](0x2bc), await _0x283f2e['type']('#checkout_shipping_address_address1', '' + afew[_0x54ba94]['Address1']), await _0x283f2e['waitForTimeout'](0x2bc), await _0x283f2e['type']('#checkout_shipping_address_address2', '' + afew[_0x54ba94]['Address2']), await _0x283f2e['waitForTimeout'](0x2bc), await _0x283f2e['type']('#checkout_shipping_address_zip', '' + afew[_0x54ba94]['Postcode']), await _0x283f2e['waitForTimeout'](0x2bc), await _0x283f2e['type']('#checkout_shipping_address_city', '' + afew[_0x54ba94]['City']), await _0x283f2e['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54ba94 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x283f2e['click']('#continue_button'), await _0x283f2e['waitForTimeout'](0x1194), await _0x283f2e['waitForSelector']('#continue_button'), await _0x283f2e['click']('#continue_button'), await _0x283f2e['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54ba94 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x283f2e['waitForSelector']('#continue_button'), await _0x283f2e['click']('#continue_button'), await _0x283f2e['waitForTimeout'](0x1194), await _0x283f2e['waitForSelector']('#continue_button'), await _0x283f2e['click']('#continue_button'), await _0x283f2e['waitForTimeout'](0x2af8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54ba94 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
    } catch (_0xbbf303) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x54ba94 + 0x1) + '\x20:\x20' + _0xbbf303));
    } finally {
      _0x1d088e && _0x1d088e['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
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
      async function _0x1cc660() {
        await delay(0x320), console['clear'](), console['log']('Welcome\x20to\x20JRaffles();\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a\x0a\x20(0)\x20AFEW\x20Raffle\x0a\x20(1)\x20MAHA\x20Raffle\x0a\x20(2)\x20MAHA\x20Raffle\x20Experimental\x0a\x20(3)\x20MAHA\x20Link\x20Verification\x0a\x20(4)\x20Footshop\x20Raffle\x0a\x20(5)\x20Reload\x20Settings\x0a'), taskModule = await getModule();
        if (taskModule == 0x0)
          await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct]);
        else {
          if (taskModule == 0x1) {
            console['log']('Starting\x20' + maha['length'] + '\x20MAHA\x20Tasks');
            for (var _0x4bd89c = 0x0; _0x4bd89c < maha['length']; _0x4bd89c++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4bd89c + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x4bd89c), settings['MahaDelay'] == '' ? (console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay'])) : (console['log']('Waiting\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']));
            }
          } else {
            if (taskModule == 0x2) {
              console['log']('Starting\x20' + maha['length'] + '\x20Experimental\x20MAHA\x20Tasks');
              for (var _0x4bd89c = 0x0; _0x4bd89c < maha['length']; _0x4bd89c++) {
                console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4bd89c + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x4bd89c, 'exp'), settings['MahaDelay'] == '' ? (console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay'])) : (console['log']('Waiting\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']));
              }
            } else {
              if (taskModule == 0x3) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x4bd89c = 0x0; _0x4bd89c < links['length']; _0x4bd89c++) {
                  modules[taskModule]['url'] = links[_0x4bd89c], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4bd89c + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x4bd89c, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
              } else {
                if (taskModule == 0x4)
                  await footshopModule(), await delay(0x1388);
                else {
                  if (taskModule == 0x5)
                    return console['log']('Reloading\x20settings'), await loadSettings(), _0x1cc660();
                  else {
                    if (taskModule == 0x45) {
                      var _0x4cc01d = await getPassword();
                      _0x4cc01d == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
                    }
                  }
                }
              }
            }
          }
        }
      }
      await _0x1cc660();
    } catch (_0x31867b) {
      return console['log'](_0x31867b), await delay(0x3a98);
    }
}
;
setTitle('JRaffles'), loadSettings(), main();