const puppeteer = require('puppeteer-extra'), RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha'), StealthPlugin = require('puppeteer-extra-plugin-stealth'), chalk = require('chalk'), setTitle = require('node-bash-title'), fs = require('fs'), axios = require('axios'), Papa = require('papaparse'), request = require('request'), proxyFile = fs['readFileSync']('../proxies.txt', 'utf-8');
var prompt = require('prompt');
const j = request['jar']();
var settings = {};
const succesWH = 'https://discord.com/api/webhooks/1044989608708030595/HUZ2q06RoQQ24n_rWWEsL6AgM5yXEeUi2SO9VyOLuQgGBeHIlXpPl9Xr5jYMLXwJKwPS', errorWH = 'https://discord.com/api/webhooks/1045001962262900766/ZXWdz3BSjNO08alABR8ERNBgR2SNcydTW-9XxsFuphHYfwHaojLBu3hkw1Ygi3MxOZdz', package = JSON['parse'](fs['readFileSync']('../package.json', 'utf-8')), version = package['version'];
var licenseKey, username;
const API_KEY = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
var catchall = settings['catchall'];
let afew = [], maha = [], footshop = [], auth = ![];
const AutoGitUpdate = require('auto-git-update'), { PageEmittedEvents } = require('puppeteer'), config = {
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
  const _0x4a2b0b = fs['readFileSync']('../tasks/afew.csv', 'utf8');
  afew = Papa['parse'](_0x4a2b0b, { 'header': !![] })['data'];
  const _0x42451e = fs['readFileSync']('../tasks/maha.csv', 'utf-8');
  maha = Papa['parse'](_0x42451e, { 'header': !![] })['data'];
  const _0x350f81 = fs['readFileSync']('../tasks/footshop.csv', 'utf-8');
  footshop = Papa['parse'](_0x350f81, { 'header': !![] })['data'];
  const _0x53a8f7 = fs['readFileSync']('../tasks/bstn.csv', 'utf-8');
  bstn = Papa['parse'](_0x53a8f7, { 'header': !![] })['data'];
  const _0x432d33 = fs['readFileSync']('../tasks/kickz.csv', 'utf-8');
  kickz = Papa['parse'](_0x432d33, { 'header': !![] })['data'], settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x2d1774 => new Promise(_0x185fd6 => setTimeout(_0x185fd6, _0x2d1774));
async function getLicense(_0x533218) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x533218, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x21f2bf => _0x21f2bf['data'])['catch'](() => null);
}
;
async function checkLicense(_0x1fd617) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0xa753a7 = await getLicense(_0x1fd617);
  username = JSON['stringify'](_0xa753a7['user']['username']);
  if (!_0xa753a7)
    return console['log']('License\x20not\x20found');
  if (!_0xa753a7['user'])
    return console['log']('License\x20not\x20bound');
  return _0xa753a7['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x1d131f = await prompt['get']('Module');
  return console['clear'](), _0x1d131f['Module'];
}
;
async function getPassword() {
  var _0x1d480c = await prompt['get']('Password');
  return console['clear'](), _0x1d480c['Password'];
}
;
async function getLinks() {
  var _0x561be3 = await prompt['get']('Links');
  return _0x561be3['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x3180e0 = 0x0; _0x3180e0 < afewProducts['length']; _0x3180e0++) {
    console['log']('\x20(' + _0x3180e0 + ')\x20' + afewProducts[_0x3180e0]);
  }
  ;
  console['log']();
  let _0x46c0a4 = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x46c0a4['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x451e63 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x451e63;
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
async function sendWebhook(_0x22f386, _0x1c886f) {
  let _0x3f5174 = { 'headers': { 'content-type': 'application/json' } };
  await axios['post'](_0x22f386, _0x1c886f, _0x3f5174);
}
function getProxy() {
  let _0x596da0 = proxyFile['split']('\x0a'), _0x256eff = _0x596da0['map']((_0x1fe943, _0x1dcdd5) => {
    sanatizeProxy = _0x1fe943['replace']('\x0d', '');
    if (_0x596da0[_0x1dcdd5 + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x256eff;
}
;
async function afewScraper() {
  var _0x169a27 = getProxy()[0x1]['split'](':');
  const _0x9fe470 = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x169a27[0x0] + ':' + _0x169a27[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x3ea844 = await _0x9fe470['newPage']();
    await _0x3ea844['authenticate']({
      'username': '' + _0x169a27[0x2],
      'password': '' + _0x169a27[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x3ea844['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3ea844['setRequestInterception'](!![]), _0x3ea844['on']('request', _0x51e7ac => {
      _0x51e7ac['resourceType']() === 'image' || _0x51e7ac['resourceType']() === 'font' || _0x51e7ac['resourceType']() === 'media' ? _0x51e7ac['abort']() : _0x51e7ac['continue']();
    }), await _0x3ea844['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x3ea844['waitForTimeout'](0xbb8), await _0x3ea844['waitForSelector']('.product-card');
    const _0x190411 = await _0x3ea844['$$eval']('a.product-card', _0x27cec0 => {
      return _0x27cec0['map'](_0xbd991c => _0xbd991c['href']);
    });
    return afewProducts = _0x190411;
  } catch (_0x59f097) {
    console['log']('\x20' + _0x59f097);
  } finally {
    _0x9fe470['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x4b3587, _0x12848d) {
  var _0x607a4f = getProxy()[_0x4b3587]['split'](':'), _0x26c2db = modules[taskModule]['data'];
  _0x12848d == 'exp' ? _0x26c2db['data']['attributes']['email'] = '' + maha[_0x4b3587]['FirstName'] + maha[_0x4b3587]['LastName'] + catchall : _0x26c2db['data']['attributes']['email'] = '' + maha[_0x4b3587]['Email'];
  _0x26c2db['data']['attributes']['properties']['$first_name'] = '' + maha[_0x4b3587]['FirstName'], _0x26c2db['data']['attributes']['properties']['$last_name'] = '' + maha[_0x4b3587]['LastName'], _0x26c2db['data']['attributes']['properties']['$address1'] = maha[_0x4b3587]['Address1'] + '\x20' + maha[_0x4b3587]['Address2'], _0x26c2db['data']['attributes']['properties']['$zip'] = '' + maha[_0x4b3587]['Zip'], _0x26c2db['data']['attributes']['properties']['$city'] = '' + maha[_0x4b3587]['City'], _0x26c2db['data']['attributes']['properties']['$country'] = '' + maha[_0x4b3587]['Country'], _0x26c2db['data']['attributes']['properties']['Size'] = '' + maha[_0x4b3587]['Size'], _0x26c2db['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x4b3587]['Follower'];
  var _0x169cee = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x26c2db),
    'proxy': 'http://' + _0x607a4f[0x2] + ':' + _0x607a4f[0x3] + '@' + _0x607a4f[0x0] + ':' + _0x607a4f[0x1]
  };
  return _0x12848d === 'ver' && (_0x169cee['method'] = 'GET'), new Promise(function (_0x9135cf, _0x8f8355) {
    callback = async (_0x303216, _0x58819f, _0x25e5f1) => {
      !_0x303216 && _0x58819f['statusCode'] == 0xca || !_0x303216 && _0x58819f['statusCode'] == 0xc8 ? _0x9135cf(console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4b3587 + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x8f8355(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4b3587 + 0x1) + ':\x20error\x20' + _0x303216 + '\x20' + JSON['stringify'](_0x58819f)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4b3587 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x26c2db['data']['attributes']['email']), request(_0x169cee, callback);
    } catch (_0x3e988e) {
      console['log'](getTime() + '\x20Task\x20' + (_0x4b3587 + 0x1) + ':\x20' + _0x3e988e);
    }
  });
}
;
async function footshopModule() {
  var _0x2a794b;
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x1b9638 = 0x0; _0x1b9638 < footshop['length']; _0x1b9638++) {
    if (footshop[_0x1b9638]['Email'] == '' || footshop[_0x1b9638]['FirstName'] == '' || footshop[_0x1b9638]['LastName'] == '' || footshop[_0x1b9638]['Country'] == '' || footshop[_0x1b9638]['Size'] == '' || footshop[_0x1b9638]['Address1'] == '' || footshop[_0x1b9638]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    async function _0x5b87e6() {
      var _0x438755 = await axios['get']('https://releases.footshop.com/api/raffles/' + footshop[_0x1b9638]['Pid'])['then'](_0x5b2c85 => _0x5b2c85['data'])['catch'](() => null);
      let _0x115987 = _0x438755['sizeSets']['Men']['sizes'];
      async function _0xadaff5() {
        for (var _0x9aec6 = 0x0; _0x9aec6 < _0x438755['sizeSets']['Men']['sizes']['length']; _0x9aec6++) {
          if (_0x115987[_0x9aec6]['eur'] == footshop[_0x1b9638]['Size'])
            return _0x2a794b = _0x115987[_0x9aec6]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x20Size\x20' + footshop[_0x1b9638]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0xab366a = await _0xadaff5();
      if (_0xab366a == ![])
        return ![];
    }
    let _0x384c0e = await _0x5b87e6();
    if (_0x384c0e == ![])
      continue;
    if (footshop[_0x1b9638]['Email'] == '' || footshop[_0x1b9638]['FirstName'] == '' || footshop[_0x1b9638]['LastName'] == '' || footshop[_0x1b9638]['Country'] == '' || footshop[_0x1b9638]['Size'] == '' || footshop[_0x1b9638]['Address1'] == '' || footshop[_0x1b9638]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x2a8c2d = 'https://releases.footshop.com/register/' + footshop[_0x1b9638]['Pid'] + '/Men/' + _0x2a794b;
    var _0x31503c = getProxy()[_0x1b9638]['split'](':');
    const _0x45e00e = await puppeteer['launch']({
      'headless': ![],
      'args': ['--proxy-server=' + _0x31503c[0x0] + ':' + _0x31503c[0x1]]
    });
    try {
      const _0xc76ee = await _0x45e00e['newPage']();
      await _0xc76ee['authenticate']({
        'username': '' + _0x31503c[0x2],
        'password': '' + _0x31503c[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xc76ee['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xc76ee['setRequestInterception'](!![]), _0xc76ee['on']('request', _0x4afda6 => {
        _0x4afda6['resourceType']() === 'image' || _0x4afda6['resourceType']() === 'font' || _0x4afda6['resourceType']() === 'media' ? _0x4afda6['abort']() : _0x4afda6['continue']();
      }), await _0xc76ee['goto']('' + _0x2a8c2d + _0x2a794b), await _0xc76ee['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0xc76ee['type']('input[name=\x22email\x22]', '' + footshop[_0x1b9638]['Email']), await delay(0x640), await _0xc76ee['type']('input[name=\x22phone\x22]', '' + footshop[_0x1b9638]['Phone']), await delay(0x4b0), await _0xc76ee['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
      try {
        await _0xc76ee['type']('input[name=\x22firstName\x22]', '' + footshop[_0x1b9638]['FirstName']), await delay(0x258);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
        continue;
      }
      await _0xc76ee['type']('input[name=\x22lastName\x22]', '' + footshop[_0x1b9638]['LastName']), await delay(0xc8), await _0xc76ee['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x1b9638]['Follower']), await delay(0x4b0), await _0xc76ee['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0xc76ee['select']('select[name=\x22country\x22]', '' + footshop[_0x1b9638]['Country']), await delay(0x2bc), await _0xc76ee['type']('input[name=\x22streetName\x22]', '' + footshop[_0x1b9638]['Address1']), await delay(0x258), await _0xc76ee['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x1b9638]['HouseNumber'] + footshop[_0x1b9638]['Address2']), await delay(0xc8), await _0xc76ee['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x1b9638]['Zip']), await delay(0x1f4), await _0xc76ee['type']('input[name=\x22city\x22]', '' + footshop[_0x1b9638]['City']), await delay(0x4b0), await _0xc76ee['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0xc76ee['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0xc76ee['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0xc76ee['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0xc76ee['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xc76ee['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0xc76ee['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x1b9638]['CardNumber']), await delay(0x320), await _0xc76ee['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x1b9638]['ExpiryDate']), await delay(0x226), await _0xc76ee['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x1b9638]['CVV']), await delay(0x226), await _0xc76ee['type']('input[name=\x22holderName\x22]', '' + footshop[_0x1b9638]['NameOnCard']), await delay(0x226), await _0xc76ee['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x20Awaiting\x203DS');
      const _0x40c84d = _0xc76ee['waitForSelector']('div.alert.alert-danger');
      _0x40c84d && console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x203DS\x20Failed'));
      try {
        await _0xc76ee['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x203DS\x20Failed'));
      }
    } catch (_0x16e750) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9638 + 0x1) + '\x20:\x20' + _0x16e750);
    } finally {
      _0x45e00e['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x459894, _0x202400) => {
  for (var _0x11bbe1 = 0x0; _0x11bbe1 < afew['length']; _0x11bbe1++) {
    var _0x2d9a09 = [{
      'type': 'rich',
      'title': 'Succesful\x20Entry',
      'description': '',
      'color': 0xc0d6d6,
      'fields': [
        {
          'name': 'User',
          'value': '' + username
        },
        {
          'name': 'Product',
          'value': '' + _0x459894
        },
        {
          'name': 'Size',
          'value': '' + afew[_0x11bbe1]['Size']
        },
        {
          'name': 'Delay',
          'value': '' + settings['AfewDelay']
        }
      ]
    }];
    const _0x37706c = { 'embeds': _0x2d9a09 };
    if (afew[_0x11bbe1]['Email'] == '' || afew[_0x11bbe1]['FirstName'] == '' || afew[_0x11bbe1]['LastName'] == '' || afew[_0x11bbe1]['Country'] == '' || afew[_0x11bbe1]['Size'] == '' || afew[_0x11bbe1]['Address1'] == '' || afew[_0x11bbe1]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11bbe1 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x3adbfd = getProxy()[_0x11bbe1]['split'](':');
    const _0x41cb2f = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x3adbfd[0x0] + ':' + _0x3adbfd[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x5e11df = await _0x41cb2f['newPage']();
      await _0x5e11df['authenticate']({
        'username': '' + _0x3adbfd[0x2],
        'password': '' + _0x3adbfd[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11bbe1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5e11df['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5e11df['setRequestInterception'](!![]), _0x5e11df['on']('request', _0x1d9b4b => {
        _0x1d9b4b['resourceType']() === 'image' || _0x1d9b4b['resourceType']() === 'font' || _0x1d9b4b['resourceType']() === 'media' ? _0x1d9b4b['abort']() : _0x1d9b4b['continue']();
      }), await _0x5e11df['goto'](_0x459894), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11bbe1 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x5e11df['waitForTimeout'](0xfa0), await _0x5e11df['waitForSelector']('#onetrust-accept-btn-handler'), await _0x5e11df['click']('#onetrust-accept-btn-handler'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11bbe1 + 0x1) + '\x20:\x20Got\x20cookies'), await _0x5e11df['waitForTimeout'](0x320), await _0x5e11df['hover']('span[class=\x22release-type\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11bbe1 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + afew[_0x11bbe1]['Size']);
      try {
        await _0x5e11df['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x11bbe1]['Size'] + '\x22]'), await _0x5e11df['waitForTimeout'](0x320), await _0x5e11df['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x11bbe1]['Size'] + '\x22]');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11bbe1 + 0x1) + '\x20:\x20Size\x20not\x20found')), _0x2d9a09[0x0]['title'] = 'Failed\x20entry', _0x2d9a09[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x37706c);
        continue;
      }
      await _0x5e11df['waitForTimeout'](0x258), await _0x5e11df['type']('#raffle-instagram', '' + afew[_0x11bbe1]['Follower'], { 'delay': 0x64 }), await _0x5e11df['waitForTimeout'](0x384), await _0x5e11df['click']('#raffle-terms'), await _0x5e11df['waitForTimeout'](0x384), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11bbe1 + 0x1) + '\x20:\x20Sending\x20request');
      const [_0xf7934d] = await _0x5e11df['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0xf7934d && await _0xf7934d['click']();
      ;
      await _0x5e11df['waitForTimeout'](0xbb8), await _0x5e11df['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11bbe1 + 0x1) + '\x20:\x20Filling\x20Information'), _0x202400 == 'sec' ? await _0x5e11df['type']('#checkout_email', '' + afew[_0x11bbe1]['FirstName'] + afew[_0x11bbe1]['LastName'] + settings['catchall']) : await _0x5e11df['type']('#checkout_email', '' + afew[_0x11bbe1]['Email']), await _0x5e11df['waitForTimeout'](0x258), await _0x5e11df['select']('#checkout_shipping_address_country', '' + afew[_0x11bbe1]['Country']), await _0x5e11df['waitForTimeout'](0x258), await _0x5e11df['type']('#checkout_shipping_address_first_name', '' + afew[_0x11bbe1]['FirstName']), await _0x5e11df['waitForTimeout'](0x320), await _0x5e11df['type']('#checkout_shipping_address_last_name', '' + afew[_0x11bbe1]['LastName']), await _0x5e11df['waitForTimeout'](0x2bc), await _0x5e11df['type']('#checkout_shipping_address_address1', '' + afew[_0x11bbe1]['Address1']), await _0x5e11df['waitForTimeout'](0x2bc), await _0x5e11df['type']('#checkout_shipping_address_address2', '' + afew[_0x11bbe1]['Address2']), await _0x5e11df['waitForTimeout'](0x2bc), await _0x5e11df['type']('#checkout_shipping_address_zip', '' + afew[_0x11bbe1]['Postcode']), await _0x5e11df['waitForTimeout'](0x2bc), await _0x5e11df['type']('#checkout_shipping_address_city', '' + afew[_0x11bbe1]['City']), await _0x5e11df['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11bbe1 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x5e11df['click']('#continue_button'), await _0x5e11df['waitForTimeout'](0x1194), await _0x5e11df['waitForSelector']('#continue_button'), await _0x5e11df['click']('#continue_button'), await _0x5e11df['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11bbe1 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x5e11df['waitForSelector']('#continue_button'), await _0x5e11df['click']('#continue_button'), await _0x5e11df['waitForTimeout'](0x1194), await _0x5e11df['waitForSelector']('#continue_button'), await _0x5e11df['click']('#continue_button'), await _0x5e11df['waitForTimeout'](0x2af8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11bbe1 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x37706c);
    } catch (_0x3979d2) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x11bbe1 + 0x1) + '\x20:\x20' + _0x3979d2)), _0x2d9a09[0x0]['title'] = 'Failed\x20entry', _0x2d9a09[0x0]['description'] = '' + _0x3979d2, await sendWebhook(errorWH, _0x37706c);
    } finally {
      _0x41cb2f && _0x41cb2f['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
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
      async function _0x535933() {
        await delay(0x320), console['clear'](), console['log']('Welcome\x20to\x20JRaffles();\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
        for (var _0x511748 = 0x0; _0x511748 < modules['length']; _0x511748++) {
          console['log']('\x20(' + _0x511748 + ')\x20' + modules[_0x511748]['name']);
        }
        ;
        console['log']('\x20(' + (modules['length'] + 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
        if (taskModule == 0x0)
          await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct]);
        else {
          if (taskModule == 0x1) {
            console['log']('Starting\x20' + maha['length'] + '\x20MAHA\x20Tasks');
            for (var _0x210b56 = 0x0; _0x210b56 < maha['length']; _0x210b56++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x210b56 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x210b56), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x2) {
              console['log']('Starting\x20' + maha['length'] + '\x20Experimental\x20MAHA\x20Tasks');
              for (var _0x210b56 = 0x0; _0x210b56 < maha['length']; _0x210b56++) {
                console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x210b56 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x210b56, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
            } else {
              if (taskModule == 0x3) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x210b56 = 0x0; _0x210b56 < links['length']; _0x210b56++) {
                  modules[taskModule]['url'] = links[_0x210b56], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x210b56 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x210b56, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
              } else {
                if (taskModule == 0x4)
                  await footshopModule(), await delay(0x1388);
                else {
                  if (taskModule == 0x5)
                    return console['log']('Reloading\x20settings'), await loadSettings(), _0x535933();
                  else {
                    if (taskModule == 0x45) {
                      modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                      var _0x31660a = await getPassword();
                      _0x31660a == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
                    }
                  }
                }
              }
            }
          }
        }
      }
      await _0x535933();
    } catch (_0x33323f) {
      return console['log'](_0x33323f), await delay(0x3a98);
    }
}
;
setTitle('JRaffles'), loadSettings(), main();