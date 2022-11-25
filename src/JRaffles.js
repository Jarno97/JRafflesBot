const puppeteer = require('puppeteer-extra'), RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha'), StealthPlugin = require('puppeteer-extra-plugin-stealth'), chalk = require('chalk'), setTitle = require('node-bash-title'), fs = require('fs'), axios = require('axios'), Papa = require('papaparse');
var random = require('random-name');
const request = require('request'), proxyFile = fs['readFileSync']('../proxies.txt', 'utf-8');
var prompt = require('prompt');
const j = request['jar']();
var settings = {};
const succesWH = 'https://discord.com/api/webhooks/1044989608708030595/HUZ2q06RoQQ24n_rWWEsL6AgM5yXEeUi2SO9VyOLuQgGBeHIlXpPl9Xr5jYMLXwJKwPS', errorWH = 'https://discord.com/api/webhooks/1045001962262900766/ZXWdz3BSjNO08alABR8ERNBgR2SNcydTW-9XxsFuphHYfwHaojLBu3hkw1Ygi3MxOZdz', package = JSON['parse'](fs['readFileSync']('../package.json', 'utf-8')), version = package['version'];
var licenseKey, username;
const API_KEY = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
var catchall = settings['catchall'];
let afew = [], maha = [], footshop = [], auth = ![];
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lettersArray = letters['split']('');
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
  'exitOnComplete': !![]
}, updater = new AutoGitUpdate(config);
async function loadSettings() {
  const _0x19cbbb = fs['readFileSync']('../tasks/afew.csv', 'utf8');
  afew = Papa['parse'](_0x19cbbb, { 'header': !![] })['data'];
  const _0x4c8c38 = fs['readFileSync']('../tasks/maha.csv', 'utf-8');
  maha = Papa['parse'](_0x4c8c38, { 'header': !![] })['data'];
  const _0x242b3a = fs['readFileSync']('../tasks/footshop.csv', 'utf-8');
  footshop = Papa['parse'](_0x242b3a, { 'header': !![] })['data'];
  const _0x4abdbf = fs['readFileSync']('../tasks/bstn.csv', 'utf-8');
  bstn = Papa['parse'](_0x4abdbf, { 'header': !![] })['data'];
  const _0x524e2a = fs['readFileSync']('../tasks/kickz.csv', 'utf-8');
  kickz = Papa['parse'](_0x524e2a, { 'header': !![] })['data'];
  const _0x26cc12 = fs['readFileSync']('../tasks/oqium.csv', 'utf-8');
  oqium = Papa['parse'](_0x26cc12, { 'header': !![] })['data'], settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x50f4e4 => new Promise(_0x55bdde => setTimeout(_0x55bdde, _0x50f4e4));
async function getLicense(_0x1bbe87) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x1bbe87, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x326c37 => _0x326c37['data'])['catch'](() => null);
}
;
async function checkLicense(_0x2930b4) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x3ff912 = await getLicense(_0x2930b4);
  username = JSON['stringify'](_0x3ff912['user']['username']);
  if (!_0x3ff912)
    return console['log']('License\x20not\x20found');
  if (!_0x3ff912['user'])
    return console['log']('License\x20not\x20bound');
  return _0x3ff912['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x118898 = await prompt['get']('Module');
  return console['clear'](), _0x118898['Module'];
}
;
async function getPassword() {
  var _0x494a36 = await prompt['get']('Password');
  return console['clear'](), _0x494a36['Password'];
}
;
async function getLinks() {
  var _0x420452 = await prompt['get']('Links');
  return _0x420452['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x2c426e = 0x0; _0x2c426e < afewProducts['length']; _0x2c426e++) {
    console['log']('\x20(' + _0x2c426e + ')\x20' + afewProducts[_0x2c426e]);
  }
  ;
  console['log']();
  let _0x4bdf49 = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x4bdf49['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x390908 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x390908;
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
  {
    'name': 'OQIUM\x20RAFFLE',
    'url': 'https://a.klaviyo.com/client/subscriptions/?company_id=R3sbqs',
    'data': {
      'data': {
        'type': 'subscription',
        'attributes': {
          'list_id': 'XRhWnB',
          'custom_source': 'DV4982-175',
          'email': 'Jarno_swinkelsn@live.nl',
          'properties': {
            '$first_name': '',
            '$last_name': '',
            '$phone_number': '',
            'Size': '',
            'Instagram\x20Account': '',
            '$address1': '',
            '$zip': '',
            '$city': '',
            '$country': '',
            'Accepts\x20Marketing': ['NoByRaffle'],
            '$consent_method': 'Klaviyo\x20Form',
            '$consent_form_id': 'YgUucY',
            '$consent_form_version': 0x7240fc,
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
      'origin': 'https://oqium.com',
      'referer': 'https://oqium.com/',
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
    'name': 'OQIUM\x20RAFFLE\x20Verification',
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
  }
];
async function sendWebhook(_0x40e6c2, _0xa7c9ef) {
  let _0x46fd9d = { 'headers': { 'content-type': 'application/json' } };
  await axios['post'](_0x40e6c2, _0xa7c9ef, _0x46fd9d);
}
;
async function jig(_0x3e9494, _0x5c31f5) {
  var _0x3a71b5 = _0x3e9494[_0x5c31f5]['Address1']['split'](''), _0x1f8dcb = _0x3e9494[_0x5c31f5]['Address2']['split'](''), _0x488eed = _0x3e9494[_0x5c31f5]['Email']['split']('@');
  for (var _0x306b03 = 0x0; _0x306b03 < _0x3a71b5['length']; _0x306b03++) {
    if (_0x3a71b5[_0x306b03] == 'X') {
      var _0x2568e8 = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x3a71b5[_0x306b03] = lettersArray[_0x2568e8];
    }
  }
  ;
  for (var _0x306b03 = 0x0; _0x306b03 < _0x1f8dcb['length']; _0x306b03++) {
    if (_0x1f8dcb[_0x306b03] == 'X') {
      var _0x2568e8 = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x1f8dcb[_0x306b03] = lettersArray[_0x2568e8];
    }
  }
  ;
  _0x3e9494[_0x5c31f5]['FirstName'] == 'RANDOM' && (_0x3e9494[_0x5c31f5]['FirstName'] = random['first']());
  _0x3e9494[_0x5c31f5]['LastName'] == 'RANDOM' && (_0x3e9494[_0x5c31f5]['LastName'] = random['last']());
  _0x488eed[0x0] == 'RANDOM' ? _0x488eed[0x0] = '' + random['first']() + random['last']() + '@' : _0x488eed[0x0] = _0x488eed[0x0] + '@';
  _0x3e9494[_0x5c31f5]['Email'] = _0x488eed['join'](''), _0x3e9494[_0x5c31f5]['Address1'] = _0x3a71b5['join'](''), _0x3e9494[_0x5c31f5]['Address2'] = _0x1f8dcb['join']('');
  return;
}
;
function getProxy() {
  let _0x22db85 = proxyFile['split']('\x0a'), _0x225b3d = _0x22db85['map']((_0x4f7cb5, _0x180f50) => {
    sanatizeProxy = _0x4f7cb5['replace']('\x0d', '');
    if (_0x22db85[_0x180f50 + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x225b3d;
}
;
async function afewScraper() {
  var _0x5c3ce4 = getProxy()[0x1]['split'](':');
  const _0x529d25 = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x5c3ce4[0x0] + ':' + _0x5c3ce4[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x35ee34 = await _0x529d25['newPage']();
    await _0x35ee34['authenticate']({
      'username': '' + _0x5c3ce4[0x2],
      'password': '' + _0x5c3ce4[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x35ee34['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x35ee34['setRequestInterception'](!![]), _0x35ee34['on']('request', _0x418adf => {
      _0x418adf['resourceType']() === 'image' || _0x418adf['resourceType']() === 'font' || _0x418adf['resourceType']() === 'media' ? _0x418adf['abort']() : _0x418adf['continue']();
    }), await _0x35ee34['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x35ee34['waitForTimeout'](0xbb8), await _0x35ee34['waitForSelector']('.product-card');
    const _0x5b8450 = await _0x35ee34['$$eval']('a.product-card', _0x306ff0 => {
      return _0x306ff0['map'](_0x57baaf => _0x57baaf['href']);
    });
    return afewProducts = _0x5b8450;
  } catch (_0x2dabe0) {
    console['log']('\x20' + _0x2dabe0);
  } finally {
    _0x529d25['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x3133c9, _0x3e9781) {
  await jig(maha, _0x3133c9);
  var _0x1d1016 = [{
    'type': 'rich',
    'title': 'Succesful\x20OQIUM\x20Entry',
    'description': '',
    'color': 0xc0d6d6,
    'fields': [
      {
        'name': 'User',
        'value': '' + username
      },
      {
        'name': 'Size',
        'value': '' + oqium[_0x3133c9]['Size']
      },
      {
        'name': 'Delay',
        'value': '' + settings['delay']
      },
      {
        'name': 'Version',
        'value': '' + version
      }
    ]
  }];
  const _0x262292 = { 'embeds': _0x1d1016 };
  var _0x2dfceb = getProxy()[_0x3133c9]['split'](':'), _0x2286a1 = modules[taskModule]['data'];
  _0x3e9781 == 'exp' ? _0x2286a1['data']['attributes']['email'] = '' + maha[_0x3133c9]['FirstName'] + maha[_0x3133c9]['LastName'] + settings['catchall'] : _0x2286a1['data']['attributes']['email'] = '' + maha[_0x3133c9]['Email'];
  _0x2286a1['data']['attributes']['properties']['$first_name'] = '' + maha[_0x3133c9]['FirstName'], _0x2286a1['data']['attributes']['properties']['$last_name'] = '' + maha[_0x3133c9]['LastName'], _0x2286a1['data']['attributes']['properties']['$address1'] = maha[_0x3133c9]['Address1'] + '\x20' + maha[_0x3133c9]['Address2'], _0x2286a1['data']['attributes']['properties']['$zip'] = '' + maha[_0x3133c9]['Zip'], _0x2286a1['data']['attributes']['properties']['$city'] = '' + maha[_0x3133c9]['City'], _0x2286a1['data']['attributes']['properties']['$country'] = '' + maha[_0x3133c9]['Country'], _0x2286a1['data']['attributes']['properties']['Size'] = '' + maha[_0x3133c9]['Size'], _0x2286a1['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x3133c9]['Follower'];
  var _0x599be3 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x2286a1),
    'proxy': 'http://' + _0x2dfceb[0x2] + ':' + _0x2dfceb[0x3] + '@' + _0x2dfceb[0x0] + ':' + _0x2dfceb[0x1]
  };
  return _0x3e9781 === 'ver' && (_0x599be3['method'] = 'GET'), new Promise(function (_0x3d67b9, _0x371784) {
    callback = async (_0x2b6622, _0x582395, _0x1d88c0) => {
      !_0x2b6622 && _0x582395['statusCode'] == 0xca || !_0x2b6622 && _0x582395['statusCode'] == 0xc8 ? _0x3d67b9(console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3133c9 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x1d1016[0x0]['title'] = 'Failed\x20entry', _0x1d1016[0x0]['description'] = '' + _0x2b6622, await sendWebhook(errorWH, _0x262292), _0x371784(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3133c9 + 0x1) + ':\x20' + _0x2b6622)));
    };
    try {
      _0x3e9781 === 'ver' ? console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3133c9 + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3133c9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2286a1['data']['attributes']['email']), request(_0x599be3, callback);
    } catch (_0x4db4f4) {
      console['log'](getTime() + '\x20Task\x20' + (_0x3133c9 + 0x1) + ':\x20' + _0x4db4f4);
    }
  });
}
;
async function footshopModule() {
  var _0x5e4053;
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x5c14a5 = 0x0; _0x5c14a5 < footshop['length']; _0x5c14a5++) {
    await jig(footshop, _0x5c14a5);
    if (footshop[_0x5c14a5]['Email'] == '' || footshop[_0x5c14a5]['FirstName'] == '' || footshop[_0x5c14a5]['LastName'] == '' || footshop[_0x5c14a5]['Country'] == '' || footshop[_0x5c14a5]['Size'] == '' || footshop[_0x5c14a5]['Address1'] == '' || footshop[_0x5c14a5]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    async function _0x5f211e() {
      var _0x5269a0 = await axios['get']('https://releases.footshop.com/api/raffles/' + footshop[_0x5c14a5]['Pid'])['then'](_0x1f421f => _0x1f421f['data'])['catch'](() => null);
      let _0x3b6263 = _0x5269a0['sizeSets']['Men']['sizes'];
      async function _0x457d7a() {
        for (var _0x3b0968 = 0x0; _0x3b0968 < _0x5269a0['sizeSets']['Men']['sizes']['length']; _0x3b0968++) {
          if (_0x3b6263[_0x3b0968]['eur'] == footshop[_0x5c14a5]['Size'])
            return _0x5e4053 = _0x3b6263[_0x3b0968]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x20Size\x20' + footshop[_0x5c14a5]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x17291d = await _0x457d7a();
      if (_0x17291d == ![])
        return ![];
    }
    let _0x559ee3 = await _0x5f211e();
    if (_0x559ee3 == ![])
      continue;
    if (footshop[_0x5c14a5]['Email'] == '' || footshop[_0x5c14a5]['FirstName'] == '' || footshop[_0x5c14a5]['LastName'] == '' || footshop[_0x5c14a5]['Country'] == '' || footshop[_0x5c14a5]['Size'] == '' || footshop[_0x5c14a5]['Address1'] == '' || footshop[_0x5c14a5]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x30c056 = 'https://releases.footshop.com/register/' + footshop[_0x5c14a5]['Pid'] + '/Men/' + _0x5e4053;
    var _0x3c2af5 = getProxy()[_0x5c14a5]['split'](':');
    const _0x56b0b6 = await puppeteer['launch']({
      'headless': ![],
      'args': ['--proxy-server=' + _0x3c2af5[0x0] + ':' + _0x3c2af5[0x1]]
    });
    try {
      const _0x40dea4 = await _0x56b0b6['newPage']();
      await _0x40dea4['authenticate']({
        'username': '' + _0x3c2af5[0x2],
        'password': '' + _0x3c2af5[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x40dea4['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x40dea4['setRequestInterception'](!![]), _0x40dea4['on']('request', _0x24bf04 => {
        _0x24bf04['resourceType']() === 'image' || _0x24bf04['resourceType']() === 'font' || _0x24bf04['resourceType']() === 'media' ? _0x24bf04['abort']() : _0x24bf04['continue']();
      }), await _0x40dea4['goto']('' + _0x30c056 + _0x5e4053), await _0x40dea4['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x40dea4['type']('input[name=\x22email\x22]', '' + footshop[_0x5c14a5]['Email']), await delay(0x640), await _0x40dea4['type']('input[name=\x22phone\x22]', '' + footshop[_0x5c14a5]['Phone']), await delay(0x4b0), await _0x40dea4['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
      try {
        await _0x40dea4['type']('input[name=\x22firstName\x22]', '' + footshop[_0x5c14a5]['FirstName']), await delay(0x258);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
        continue;
      }
      await _0x40dea4['type']('input[name=\x22lastName\x22]', '' + footshop[_0x5c14a5]['LastName']), await delay(0xc8), await _0x40dea4['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x5c14a5]['Follower']), await delay(0x4b0), await _0x40dea4['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x40dea4['select']('select[name=\x22country\x22]', '' + footshop[_0x5c14a5]['Country']), await delay(0x2bc), await _0x40dea4['type']('input[name=\x22streetName\x22]', '' + footshop[_0x5c14a5]['Address1']), await delay(0x258), await _0x40dea4['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x5c14a5]['HouseNumber'] + footshop[_0x5c14a5]['Address2']), await delay(0xc8), await _0x40dea4['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x5c14a5]['Zip']), await delay(0x1f4), await _0x40dea4['type']('input[name=\x22city\x22]', '' + footshop[_0x5c14a5]['City']), await delay(0x4b0), await _0x40dea4['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x40dea4['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x40dea4['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x40dea4['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x40dea4['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x40dea4['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0x40dea4['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x5c14a5]['CardNumber']), await delay(0x320), await _0x40dea4['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x5c14a5]['ExpiryDate']), await delay(0x226), await _0x40dea4['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x5c14a5]['CVV']), await delay(0x226), await _0x40dea4['type']('input[name=\x22holderName\x22]', '' + footshop[_0x5c14a5]['NameOnCard']), await delay(0x226), await _0x40dea4['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x20Awaiting\x203DS');
      const _0x23860e = _0x40dea4['waitForSelector']('div.alert.alert-danger');
      _0x23860e && console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x203DS\x20Failed'));
      try {
        await _0x40dea4['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x203DS\x20Failed'));
      }
    } catch (_0xc20890) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5c14a5 + 0x1) + '\x20:\x20' + _0xc20890);
    } finally {
      _0x56b0b6['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0xd587b, _0x555aa6) => {
  for (var _0x50e6a9 = 0x0; _0x50e6a9 < afew['length']; _0x50e6a9++) {
    await jig(afew, _0x50e6a9);
    var _0x1a4ab8 = [{
      'type': 'rich',
      'title': 'Succesful\x20AFEW\x20Entry',
      'description': '',
      'color': 0xc0d6d6,
      'fields': [
        {
          'name': 'User',
          'value': '' + username
        },
        {
          'name': 'Product',
          'value': '' + _0xd587b
        },
        {
          'name': 'Size',
          'value': '' + afew[_0x50e6a9]['Size']
        },
        {
          'name': 'Delay',
          'value': '' + settings['AfewDelay']
        },
        {
          'name': 'Version',
          'value': '' + version
        }
      ]
    }];
    const _0x59b226 = { 'embeds': _0x1a4ab8 };
    if (afew[_0x50e6a9]['Email'] == '' || afew[_0x50e6a9]['FirstName'] == '' || afew[_0x50e6a9]['LastName'] == '' || afew[_0x50e6a9]['Country'] == '' || afew[_0x50e6a9]['Size'] == '' || afew[_0x50e6a9]['Address1'] == '' || afew[_0x50e6a9]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x50e6a9 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x27d7d6 = getProxy()[_0x50e6a9]['split'](':');
    const _0x2c5e5b = await puppeteer['launch']({
      'headless': ![],
      'args': [
        '--proxy-server=' + _0x27d7d6[0x0] + ':' + _0x27d7d6[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x38315d = await _0x2c5e5b['newPage']();
      await _0x38315d['setDefaultNavigationTimeout'](0x1d4c0), await _0x38315d['authenticate']({
        'username': '' + _0x27d7d6[0x2],
        'password': '' + _0x27d7d6[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x50e6a9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x38315d['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x38315d['setRequestInterception'](!![]), _0x38315d['on']('request', _0x2b0a8f => {
        _0x2b0a8f['resourceType']() === 'image' || _0x2b0a8f['resourceType']() === 'font' || _0x2b0a8f['resourceType']() === 'media' ? _0x2b0a8f['abort']() : _0x2b0a8f['continue']();
      }), await _0x38315d['goto'](_0xd587b), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x50e6a9 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x38315d['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x50e6a9 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x38315d['waitForTimeout'](0x320), await _0x38315d['hover']('span[class=\x22release-type\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x50e6a9 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + afew[_0x50e6a9]['Size']);
      try {
        await _0x38315d['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x50e6a9]['Size'] + '\x22]'), await _0x38315d['waitForTimeout'](0x320), await _0x38315d['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x50e6a9]['Size'] + '\x22]');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x50e6a9 + 0x1) + '\x20:\x20Size\x20not\x20found')), _0x1a4ab8[0x0]['title'] = 'Failed\x20entry', _0x1a4ab8[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x59b226);
        continue;
      }
      await _0x38315d['waitForTimeout'](0x258), await _0x38315d['type']('#raffle-instagram', '' + afew[_0x50e6a9]['Follower'], { 'delay': 0x64 }), await _0x38315d['waitForTimeout'](0x384), await _0x38315d['click']('#raffle-terms'), await _0x38315d['waitForTimeout'](0x384), await _0x38315d['evaluate'](() => {
        const _0x364dfb = document['querySelector']('button.btn[name=\x27add\x27]');
        _0x364dfb['click']();
      }), await _0x38315d['waitForTimeout'](0xbb8), await _0x38315d['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x50e6a9 + 0x1) + '\x20:\x20Filling\x20Information'), _0x555aa6 == 'sec' ? await _0x38315d['type']('#checkout_email', '' + afew[_0x50e6a9]['FirstName'] + afew[_0x50e6a9]['LastName'] + settings['catchall']) : await _0x38315d['type']('#checkout_email', '' + afew[_0x50e6a9]['Email']), await _0x38315d['waitForTimeout'](0x258), await _0x38315d['select']('#checkout_shipping_address_country', '' + afew[_0x50e6a9]['Country']), await _0x38315d['waitForTimeout'](0x258), await _0x38315d['type']('#checkout_shipping_address_first_name', '' + afew[_0x50e6a9]['FirstName']), await _0x38315d['waitForTimeout'](0x320), await _0x38315d['type']('#checkout_shipping_address_last_name', '' + afew[_0x50e6a9]['LastName']), await _0x38315d['waitForTimeout'](0x2bc), await _0x38315d['type']('#checkout_shipping_address_address1', '' + afew[_0x50e6a9]['Address1']), await _0x38315d['waitForTimeout'](0x2bc), await _0x38315d['type']('#checkout_shipping_address_address2', '' + afew[_0x50e6a9]['Address2']), await _0x38315d['waitForTimeout'](0x2bc), await _0x38315d['type']('#checkout_shipping_address_zip', '' + afew[_0x50e6a9]['Postcode']), await _0x38315d['waitForTimeout'](0x2bc), await _0x38315d['type']('#checkout_shipping_address_city', '' + afew[_0x50e6a9]['City']), await _0x38315d['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x50e6a9 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x38315d['evaluate'](() => {
        const _0x358ea7 = document['querySelector']('#continue_button');
        _0x358ea7 && _0x358ea7['click']();
      }), await _0x38315d['waitForTimeout'](0x1194), await _0x38315d['waitForSelector']('div.radio-wrapper'), await _0x38315d['evaluate'](() => {
        const _0x5733f5 = document['querySelector']('#continue_button');
        _0x5733f5 && _0x5733f5['click']();
      }), await _0x38315d['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x50e6a9 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x38315d['waitForSelector']('#continue_button'), await _0x38315d['evaluate'](() => {
        const _0x1f1126 = document['querySelector']('#continue_button');
        _0x1f1126 && _0x1f1126['click']();
      }), await _0x38315d['waitForTimeout'](0x1194), await _0x38315d['waitForSelector']('#continue_button'), await _0x38315d['evaluate'](() => {
        const _0x2d3338 = document['querySelector']('#continue_button');
        _0x2d3338 && _0x2d3338['click']();
      }), await _0x38315d['waitForTimeout'](0x2af8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x50e6a9 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x59b226);
    } catch (_0x15ebf4) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x50e6a9 + 0x1) + '\x20:\x20' + _0x15ebf4)), _0x1a4ab8[0x0]['title'] = 'Failed\x20entry', _0x1a4ab8[0x0]['description'] = '' + _0x15ebf4, await sendWebhook(errorWH, _0x59b226);
    } finally {
      _0x2c5e5b && _0x2c5e5b['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function kickzAcc(_0x320fad) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x5df7ad = 0x0; _0x5df7ad < kickz['length']; _0x5df7ad++) {
    await jig(kickz, _0x5df7ad);
    if (kickz[_0x5df7ad]['Email'] == '' || kickz[_0x5df7ad]['Password'] == '' || kickz[_0x5df7ad]['FirstName'] == '' || kickz[_0x5df7ad]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x530b17 = getProxy()[_0x5df7ad]['split'](':');
    const _0x163cea = await puppeteer['launch']({
      'headless': ![],
      'args': [
        '--proxy-server=' + _0x530b17[0x0] + ':' + _0x530b17[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x5d22e3 = await _0x163cea['newPage']();
      await _0x5d22e3['authenticate']({
        'username': '' + _0x530b17[0x2],
        'password': '' + _0x530b17[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5d22e3['setRequestInterception'](!![]), _0x5d22e3['on']('request', _0x332ee1 => {
        _0x332ee1['resourceType']() === 'image' || _0x332ee1['resourceType']() === 'font' || _0x332ee1['resourceType']() === 'media' ? _0x332ee1['abort']() : _0x332ee1['continue']();
      }), await _0x5d22e3['goto'](_0x320fad), await delay(0xbb8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x5d22e3['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5d22e3['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5d22e3['waitForSelector']('#button-register'), await _0x5d22e3['click']('#button-register'), await _0x5d22e3['waitForSelector']('#customer_salutation'), await _0x5d22e3['select']('#customer_salutation', 'mr'), await delay(0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x5d22e3['waitForSelector']('#customer_firstname'), await _0x5d22e3['type']('#customer_firstname', '' + kickz[_0x5df7ad]['FirstName']), await delay(0x352), await _0x5d22e3['waitForSelector']('#customer_lastname'), await _0x5d22e3['type']('#customer_lastname', '' + kickz[_0x5df7ad]['LastName']), await delay(0x352), await _0x5d22e3['type']('#email-input', '' + kickz[_0x5df7ad]['Email']), await delay(0x352), await _0x5d22e3['type']('#email-confirm-input', '' + kickz[_0x5df7ad]['Email']), await delay(0x352), await _0x5d22e3['type']('#register-password', '' + kickz[_0x5df7ad]['Password']), await delay(0x352), await _0x5d22e3['type']('#password-confirm', '' + kickz[_0x5df7ad]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x5d22e3['click']('#consent'), await delay(0x1f4);
      const _0x44a02f = await _0x5d22e3['$']('div.inputErrorMsg.b-form_section-message');
      if (_0x44a02f) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
        continue;
      }
      await _0x5d22e3['click']('#buttonRegister'), await _0x5d22e3['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20Account\x20' + kickz[_0x5df7ad]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
      async function _0x5078d8() {
        console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
        var _0x3b043b = await prompt['get']('Code');
        return _0x3b043b['Code'];
      }
      ;
      code = await _0x5078d8(), delay(0x320), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20Verifying..'), await _0x5d22e3['type']('#verificationCode', code), await delay(0x1f4), await _0x5d22e3['click']('#buttonVerify'), await delay(0x190), await _0x5d22e3['click']('#buttonVerify'), await delay(0x3e8);
      try {
        await _0x5d22e3['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20Account\x20' + kickz[_0x5df7ad]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + kickz[_0x5df7ad]['Email'] + ',' + kickz[_0x5df7ad]['Password'] + ','), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20Account\x20' + kickz[_0x5df7ad]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
      }
    } catch (_0x3777b8) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5df7ad + 0x1) + '\x20:\x20' + _0x3777b8));
    } finally {
      _0x163cea && _0x163cea['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
}
async function oqiumFunction(_0x508919, _0x3bd6bf) {
  await jig(oqium, _0x508919);
  var _0x3f690e = [{
    'type': 'rich',
    'title': 'Succesful\x20OQIUM\x20Entry',
    'description': '',
    'color': 0xc0d6d6,
    'fields': [
      {
        'name': 'User',
        'value': '' + username
      },
      {
        'name': 'Size',
        'value': '' + oqium[_0x508919]['Size']
      },
      {
        'name': 'Delay',
        'value': '' + settings['delay']
      },
      {
        'name': 'Version',
        'value': '' + version
      }
    ]
  }];
  const _0x52e27d = { 'embeds': _0x3f690e };
  var _0x16fb9e = getProxy()[_0x508919]['split'](':'), _0x4bbbfb = modules[taskModule]['data'];
  _0x3bd6bf == 'exp' ? _0x4bbbfb['data']['attributes']['email'] = '' + oqium[_0x508919]['FirstName'] + oqium[_0x508919]['LastName'] + settings['catchall'] : _0x4bbbfb['data']['attributes']['email'] = '' + oqium[_0x508919]['Email'];
  _0x4bbbfb['data']['attributes']['properties']['$first_name'] = '' + oqium[_0x508919]['FirstName'], _0x4bbbfb['data']['attributes']['properties']['$last_name'] = '' + oqium[_0x508919]['LastName'], _0x4bbbfb['data']['attributes']['properties']['$address1'] = oqium[_0x508919]['Address1'] + '\x20' + oqium[_0x508919]['Address2'], _0x4bbbfb['data']['attributes']['properties']['$zip'] = '' + oqium[_0x508919]['Zip'], _0x4bbbfb['data']['attributes']['properties']['$city'] = '' + oqium[_0x508919]['City'], _0x4bbbfb['data']['attributes']['properties']['$country'] = '' + oqium[_0x508919]['Country'], _0x4bbbfb['data']['attributes']['properties']['Size'] = '' + oqium[_0x508919]['Size'], _0x4bbbfb['data']['attributes']['properties']['$phone_number'] = '' + oqium[_0x508919]['Phone'], _0x4bbbfb['data']['attributes']['properties']['Instagram\x20Account'] = '' + oqium[_0x508919]['Follower'];
  var _0x58e59d = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x4bbbfb),
    'proxy': 'http://' + _0x16fb9e[0x2] + ':' + _0x16fb9e[0x3] + '@' + _0x16fb9e[0x0] + ':' + _0x16fb9e[0x1]
  };
  return _0x3bd6bf === 'ver' && (_0x58e59d['method'] = 'GET'), new Promise(function (_0x6545a7, _0x345bd7) {
    callback = async (_0x25949c, _0x14595a, _0x1922b0) => {
      !_0x25949c && _0x14595a['statusCode'] == 0xca || !_0x25949c && _0x14595a['statusCode'] == 0xc8 ? (await sendWebhook(succesWH, _0x52e27d), _0x6545a7(console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x508919 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x3f690e[0x0]['title'] = 'Failed\x20entry', _0x3f690e[0x0]['description'] = '' + _0x25949c, await sendWebhook(errorWH, _0x52e27d), _0x345bd7(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x508919 + 0x1) + ':\x20' + _0x25949c)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x508919 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4bbbfb['data']['attributes']['email']), request(_0x58e59d, callback);
    } catch (_0x584c92) {
      console['log'](getTime() + '\x20Task\x20' + (_0x508919 + 0x1) + ':\x20' + _0x584c92);
    }
  });
}
;
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
      async function _0x46adbb() {
        await delay(0x320), console['clear'](), console['log']('Welcome\x20to\x20JRaffles();\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
        for (var _0x450c1f = 0x0; _0x450c1f < modules['length']; _0x450c1f++) {
          console['log']('\x20(' + _0x450c1f + ')\x20' + modules[_0x450c1f]['name']);
        }
        ;
        console['log']('\x20(' + modules['length'] + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
        if (taskModule == 0x0)
          await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct]);
        else {
          if (taskModule == 0x1) {
            console['log']('Starting\x20' + maha['length'] + '\x20MAHA\x20Tasks');
            for (var _0x4cd141 = 0x0; _0x4cd141 < maha['length']; _0x4cd141++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4cd141 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x4cd141), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x2) {
              console['log']('Starting\x20' + maha['length'] + '\x20' + chalk['yellow']('Experimental') + '\x20MAHA\x20Tasks');
              for (var _0x4cd141 = 0x0; _0x4cd141 < maha['length']; _0x4cd141++) {
                console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4cd141 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x4cd141, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
            } else {
              if (taskModule == 0x3) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x4cd141 = 0x0; _0x4cd141 < links['length']; _0x4cd141++) {
                  modules[taskModule]['url'] = links[_0x4cd141], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4cd141 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x4cd141, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
              } else {
                if (taskModule == 0x4)
                  await footshopModule(), await delay(0x1388);
                else {
                  if (taskModule == 0x5) {
                    console['log']('Starting\x20\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                    for (var _0x4cd141 = 0x0; _0x4cd141 < oqium['length']; _0x4cd141++) {
                      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4cd141 + 0x1) + ':\x20Getting\x20Session');
                      try {
                        await oqiumFunction(_0x4cd141, 'exp');
                      } catch {
                        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4cd141 + 0x1) + ':\x20Task\x20failed'));
                      }
                      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                    }
                  } else {
                    if (taskModule == 0x6) {
                      console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                      for (var _0x4cd141 = 0x0; _0x4cd141 < links['length']; _0x4cd141++) {
                        try {
                          modules[taskModule]['url'] = links[_0x4cd141], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4cd141 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x4cd141, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                        } catch (_0x5a45a2) {
                        }
                      }
                    } else {
                      if (taskModule == modules['length'])
                        return console['log']('Reloading\x20settings'), await loadSettings(), _0x46adbb();
                      else {
                        if (taskModule == 0x45) {
                          modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                          var _0x5638e7 = await getPassword();
                          _0x5638e7 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      await _0x46adbb();
    } catch (_0x36e8bd) {
      return console['log'](_0x36e8bd), await delay(0x3a98);
    }
}
;
setTitle('JRaffles'), loadSettings(), main();