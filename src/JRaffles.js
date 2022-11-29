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
const AutoGitUpdate = require('auto-git-update'), { PageEmittedEvents } = require('puppeteer'), { getRandomValues } = require('crypto'), config = {
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
  const _0x20b9e5 = fs['readFileSync']('../tasks/afew.csv', 'utf8');
  afew = Papa['parse'](_0x20b9e5, { 'header': !![] })['data'];
  const _0x5549d4 = fs['readFileSync']('../tasks/maha.csv', 'utf-8');
  maha = Papa['parse'](_0x5549d4, { 'header': !![] })['data'];
  const _0x28b6d6 = fs['readFileSync']('../tasks/footshop.csv', 'utf-8');
  footshop = Papa['parse'](_0x28b6d6, { 'header': !![] })['data'];
  const _0x5b2a05 = fs['readFileSync']('../tasks/bstn.csv', 'utf-8');
  bstn = Papa['parse'](_0x5b2a05, { 'header': !![] })['data'];
  const _0x1ece3e = fs['readFileSync']('../tasks/kickz.csv', 'utf-8');
  kickz = Papa['parse'](_0x1ece3e, { 'header': !![] })['data'];
  const _0x433a52 = fs['readFileSync']('../tasks/oqium.csv', 'utf-8');
  oqium = Papa['parse'](_0x433a52, { 'header': !![] })['data'], settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), !settings['delay'] && (settings['delay'] = 0x2710, fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['captchaKey'] && (settings['captchaKey'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0xac29a5 => new Promise(_0x5f1a57 => setTimeout(_0x5f1a57, _0xac29a5));
async function getLicense(_0x2ef61b) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x2ef61b, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x1dba7a => _0x1dba7a['data'])['catch'](() => null);
}
;
async function checkLicense(_0x1ac76a) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x58b1b8 = await getLicense(_0x1ac76a);
  username = JSON['stringify'](_0x58b1b8['user']['username']);
  if (!_0x58b1b8)
    return console['log']('License\x20not\x20found');
  if (!_0x58b1b8['user'])
    return console['log']('License\x20not\x20bound');
  return _0x58b1b8['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x291269 = await prompt['get']('Module');
  return console['clear'](), _0x291269['Module'];
}
;
async function getSetting() {
  var _0x29541e = await prompt['get']('Setting');
  return console['clear'](), _0x29541e['Setting'];
}
async function getValue() {
  var _0x258f73 = await prompt['get']('Value');
  return console['clear'](), _0x258f73['Value'];
}
async function getFunction(_0x35c209) {
  console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
  for (var _0x3c9d59 = 0x0; _0x3c9d59 < _0x35c209['length']; _0x3c9d59++) {
    console['log']('\x20(' + _0x3c9d59 + ')\x20[' + _0x35c209[_0x3c9d59]['name'] + ']');
  }
  ;
  var _0x15b311 = await prompt['get']('Module');
  return _0x15b311['Module'];
}
async function getPassword() {
  var _0x3944d9 = await prompt['get']('Password');
  return console['clear'](), _0x3944d9['Password'];
}
;
async function getLinks() {
  var _0x5acfbb = await prompt['get']('Links');
  return _0x5acfbb['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x30c1b2 = 0x0; _0x30c1b2 < afewProducts['length']; _0x30c1b2++) {
    console['log']('\x20(' + _0x30c1b2 + ')\x20' + afewProducts[_0x30c1b2]);
  }
  ;
  console['log']();
  let _0x9cd857 = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x9cd857['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0xa22694 = new Date(Date['now']())['toLocaleTimeString']();
  return _0xa22694;
}
;
const modules = [
  {
    'name': 'AFEW\x20Store',
    'modules': [{ 'name': 'AFEW\x20Raffle\x20Entries' }]
  },
  {
    'name': 'MAHA\x20Amsterdam',
    'modules': [
      {
        'name': 'MAHA\x20Raffle\x20Entries',
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
        'name': 'MAHA\x20Raffle\x20Verification',
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
    ]
  },
  { 'name': 'FOOTSHOP' },
  {
    'name': 'OQIUM\x20Store',
    'modules': [
      {
        'name': 'OQIUM\x20Raffle\x20Entries',
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
        'name': 'OQIUM\x20Raffle\x20Verification',
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
    ]
  }
];
async function sendWebhook(_0x29e720, _0x72d967) {
  let _0x5661cc = { 'headers': { 'content-type': 'application/json' } };
  await axios['post'](_0x29e720, _0x72d967, _0x5661cc);
}
;
async function jig(_0x3fc4ef, _0x32aea9) {
  var _0x32154b = _0x3fc4ef[_0x32aea9]['Address1']['split'](''), _0x46219a = _0x3fc4ef[_0x32aea9]['Address2']['split'](''), _0x442925 = _0x3fc4ef[_0x32aea9]['Email']['split']('@');
  for (var _0x13b64e = 0x0; _0x13b64e < _0x32154b['length']; _0x13b64e++) {
    if (_0x32154b[_0x13b64e] == 'X') {
      var _0xba492b = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x32154b[_0x13b64e] = lettersArray[_0xba492b];
    }
  }
  ;
  for (var _0x13b64e = 0x0; _0x13b64e < _0x46219a['length']; _0x13b64e++) {
    if (_0x46219a[_0x13b64e] == 'X') {
      var _0xba492b = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x46219a[_0x13b64e] = lettersArray[_0xba492b];
    }
  }
  ;
  _0x3fc4ef[_0x32aea9]['FirstName'] == 'RANDOM' && (_0x3fc4ef[_0x32aea9]['FirstName'] = random['first']());
  _0x3fc4ef[_0x32aea9]['LastName'] == 'RANDOM' && (_0x3fc4ef[_0x32aea9]['LastName'] = random['last']());
  _0x442925[0x0] == 'RANDOM' ? _0x442925[0x0] = '' + random['first']() + random['last']() + '@' : _0x442925[0x0] = _0x442925[0x0] + '@';
  _0x3fc4ef[_0x32aea9]['Email'] = _0x442925['join'](''), _0x3fc4ef[_0x32aea9]['Address1'] = _0x32154b['join'](''), _0x3fc4ef[_0x32aea9]['Address2'] = _0x46219a['join']('');
  return;
}
;
function getProxy() {
  let _0x2ca5a2 = proxyFile['split']('\x0a'), _0x548a3b = _0x2ca5a2['map']((_0x4b731e, _0x28f7dd) => {
    sanatizeProxy = _0x4b731e['replace']('\x0d', '');
    if (_0x2ca5a2[_0x28f7dd + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x548a3b;
}
;
async function afewScraper() {
  var _0xa591de = getProxy()[0x1]['split'](':');
  const _0x3ecd01 = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0xa591de[0x0] + ':' + _0xa591de[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x348957 = await _0x3ecd01['newPage']();
    await _0x348957['authenticate']({
      'username': '' + _0xa591de[0x2],
      'password': '' + _0xa591de[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x348957['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x348957['setRequestInterception'](!![]), _0x348957['on']('request', _0x1a6d8f => {
      _0x1a6d8f['resourceType']() === 'image' || _0x1a6d8f['resourceType']() === 'font' || _0x1a6d8f['resourceType']() === 'media' ? _0x1a6d8f['abort']() : _0x1a6d8f['continue']();
    }), await _0x348957['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x348957['waitForTimeout'](0xbb8), await _0x348957['waitForSelector']('.product-card');
    const _0x19fcec = await _0x348957['$$eval']('a.product-card', _0x13bdf1 => {
      return _0x13bdf1['map'](_0x39e394 => _0x39e394['href']);
    });
    return afewProducts = _0x19fcec;
  } catch (_0x3557bc) {
    console['log']('\x20' + _0x3557bc);
  } finally {
    _0x3ecd01['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x24c809, _0x1b7e80, _0x1e47d2) {
  await jig(maha, _0x24c809);
  var _0x1fff5a = [{
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
        'value': '' + oqium[_0x24c809]['Size']
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
  const _0x4460de = { 'embeds': _0x1fff5a };
  var _0x597091 = getProxy()[_0x24c809]['split'](':'), _0x4034e6 = _0x1e47d2['data'];
  _0x1b7e80 == 'exp' ? _0x4034e6['data']['attributes']['email'] = '' + maha[_0x24c809]['FirstName'] + maha[_0x24c809]['LastName'] + settings['catchall'] : _0x4034e6['data']['attributes']['email'] = '' + maha[_0x24c809]['Email'];
  _0x4034e6['data']['attributes']['properties']['$first_name'] = '' + maha[_0x24c809]['FirstName'], _0x4034e6['data']['attributes']['properties']['$last_name'] = '' + maha[_0x24c809]['LastName'], _0x4034e6['data']['attributes']['properties']['$address1'] = maha[_0x24c809]['Address1'] + '\x20' + maha[_0x24c809]['Address2'], _0x4034e6['data']['attributes']['properties']['$zip'] = '' + maha[_0x24c809]['Zip'], _0x4034e6['data']['attributes']['properties']['$city'] = '' + maha[_0x24c809]['City'], _0x4034e6['data']['attributes']['properties']['$country'] = '' + maha[_0x24c809]['Country'], _0x4034e6['data']['attributes']['properties']['Size'] = '' + maha[_0x24c809]['Size'], _0x4034e6['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x24c809]['Follower'];
  var _0x3973d5 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x1e47d2['url'],
    'headers': _0x1e47d2['headers'],
    'body': JSON['stringify'](_0x4034e6),
    'proxy': 'http://' + _0x597091[0x2] + ':' + _0x597091[0x3] + '@' + _0x597091[0x0] + ':' + _0x597091[0x1]
  };
  return _0x1b7e80 === 'ver' && (_0x3973d5['method'] = 'GET'), new Promise(function (_0x5d5578, _0x231d85) {
    callback = async (_0xbd90f8, _0x410c89, _0x426e9c) => {
      !_0xbd90f8 && _0x410c89['statusCode'] == 0xca || !_0xbd90f8 && _0x410c89['statusCode'] == 0xc8 ? _0x5d5578(console['log'](chalk['green'](getTime() + '\x20[' + _0x1e47d2['name'] + ']\x20Task\x20' + (_0x24c809 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x1fff5a[0x0]['title'] = 'Failed\x20entry', _0x1fff5a[0x0]['description'] = '' + _0xbd90f8, await sendWebhook(errorWH, _0x4460de), _0x231d85(console['log'](getTime() + '\x20[' + _0x1e47d2['name'] + ']\x20Task\x20' + (_0x24c809 + 0x1) + ':\x20' + _0xbd90f8)));
    };
    try {
      _0x1b7e80 === 'ver' ? console['log'](getTime() + '\x20[' + _0x1e47d2['name'] + ']\x20Task\x20' + (_0x24c809 + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + _0x1e47d2['name'] + ']\x20Task\x20' + (_0x24c809 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4034e6['data']['attributes']['email']), request(_0x3973d5, callback);
    } catch (_0x1e1ed3) {
      console['log'](getTime() + '\x20Task\x20' + (_0x24c809 + 0x1) + ':\x20' + _0x1e1ed3);
    }
  });
}
;
async function footshopModule() {
  var _0x1e8c83;
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0xbcd7fb = 0x0; _0xbcd7fb < footshop['length']; _0xbcd7fb++) {
    await jig(footshop, _0xbcd7fb);
    if (footshop[_0xbcd7fb]['Email'] == '' || footshop[_0xbcd7fb]['FirstName'] == '' || footshop[_0xbcd7fb]['LastName'] == '' || footshop[_0xbcd7fb]['Country'] == '' || footshop[_0xbcd7fb]['Size'] == '' || footshop[_0xbcd7fb]['Address1'] == '' || footshop[_0xbcd7fb]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    async function _0x3e5fa9() {
      var _0x5d7efb = await axios['get']('https://releases.footshop.com/api/raffles/' + footshop[_0xbcd7fb]['Pid'])['then'](_0x514f34 => _0x514f34['data'])['catch'](() => null), _0x43a916 = _0x5d7efb['sizeSets']['Men']['sizes'];
      _0x43a916['length'] == 0x0 && (_0x43a916 = _0x5d7efb['sizeSets']['Women']['sizes'], _0x43a916['length'] == 0x0 && (_0x43a916 = _0x5d7efb['sizeSets']['Unisex']['sizes'], _0x43a916['length'] == 0x0 && (_0x43a916 = _0x5d7efb['sizeSets']['Kids']['sizes'])));
      ;
      async function _0x59de68() {
        for (var _0x455ced = 0x0; _0x455ced < _0x43a916['length']; _0x455ced++) {
          if (_0x43a916[_0x455ced]['eur'] == footshop[_0xbcd7fb]['Size'])
            return _0x1e8c83 = _0x43a916[_0x455ced]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x20Size\x20' + footshop[_0xbcd7fb]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x6c419a = await _0x59de68();
      if (_0x6c419a == ![])
        return ![];
    }
    let _0x5b66c0 = await _0x3e5fa9();
    if (_0x5b66c0 == ![])
      continue;
    if (footshop[_0xbcd7fb]['Email'] == '' || footshop[_0xbcd7fb]['FirstName'] == '' || footshop[_0xbcd7fb]['LastName'] == '' || footshop[_0xbcd7fb]['Country'] == '' || footshop[_0xbcd7fb]['Size'] == '' || footshop[_0xbcd7fb]['Address1'] == '' || footshop[_0xbcd7fb]['Zip'] == '' || footshop[_0xbcd7fb]['Phone'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x2064b1 = 'https://releases.footshop.com/register/' + footshop[_0xbcd7fb]['Pid'] + '/Men/' + _0x1e8c83;
    var _0x27e03b = getProxy()[_0xbcd7fb]['split'](':');
    const _0x5e1fb4 = await puppeteer['launch']({
      'headless': ![],
      'args': ['--proxy-server=' + _0x27e03b[0x0] + ':' + _0x27e03b[0x1]]
    });
    try {
      const _0x32f779 = await _0x5e1fb4['newPage']();
      await _0x32f779['authenticate']({
        'username': '' + _0x27e03b[0x2],
        'password': '' + _0x27e03b[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x32f779['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x32f779['setRequestInterception'](!![]), _0x32f779['on']('request', _0x146710 => {
        _0x146710['resourceType']() === 'image' || _0x146710['resourceType']() === 'font' || _0x146710['resourceType']() === 'media' ? _0x146710['abort']() : _0x146710['continue']();
      }), await _0x32f779['goto']('' + _0x2064b1 + _0x1e8c83), await _0x32f779['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x32f779['type']('input[name=\x22email\x22]', '' + footshop[_0xbcd7fb]['Email']), await delay(0x640), await _0x32f779['type']('input[name=\x22phone\x22]', '' + footshop[_0xbcd7fb]['Phone']), await delay(0x4b0), await _0x32f779['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
      try {
        await _0x32f779['type']('input[name=\x22firstName\x22]', '' + footshop[_0xbcd7fb]['FirstName']), await delay(0x258);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x20Duplicate\x20Entry'));
        continue;
      }
      await _0x32f779['type']('input[name=\x22lastName\x22]', '' + footshop[_0xbcd7fb]['LastName']), await delay(0xc8), await _0x32f779['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0xbcd7fb]['Follower']), await delay(0x4b0), await _0x32f779['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x32f779['select']('select[name=\x22country\x22]', '' + footshop[_0xbcd7fb]['Country']), await delay(0x2bc), await _0x32f779['type']('input[name=\x22streetName\x22]', '' + footshop[_0xbcd7fb]['Address1']), await delay(0x258), await _0x32f779['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0xbcd7fb]['HouseNumber'] + footshop[_0xbcd7fb]['Address2']), await delay(0xc8), await _0x32f779['type']('input[name=\x22postalCode\x22]', '' + footshop[_0xbcd7fb]['Zip']), await delay(0x1f4), await _0x32f779['type']('input[name=\x22city\x22]', '' + footshop[_0xbcd7fb]['City']), await delay(0x4b0), await _0x32f779['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x32f779['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x32f779['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x32f779['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x32f779['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x32f779['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x4b0), await _0x32f779['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0xbcd7fb]['CardNumber']), await delay(0x320), await _0x32f779['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0xbcd7fb]['ExpiryDate']), await delay(0x4b0), await _0x32f779['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0xbcd7fb]['CVV']), await delay(0x226), await _0x32f779['type']('input[name=\x22holderName\x22]', '' + footshop[_0xbcd7fb]['NameOnCard']), await delay(0x226), await _0x32f779['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x20Awaiting\x203DS');
      try {
        await _0x32f779['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await delay(0xbb8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x203DS\x20Failed'));
      }
    } catch (_0x31ff7b) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xbcd7fb + 0x1) + '\x20:\x20' + _0x31ff7b);
    } finally {
      _0x5e1fb4['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x43b36c, _0x300269, _0x278e81) => {
  for (var _0x28705a = 0x0; _0x28705a < afew['length']; _0x28705a++) {
    await jig(afew, _0x28705a);
    var _0x40acbe = [{
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
          'value': '' + _0x43b36c
        },
        {
          'name': 'Size',
          'value': '' + afew[_0x28705a]['Size']
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
    const _0xe49372 = { 'embeds': _0x40acbe };
    if (afew[_0x28705a]['Email'] == '' || afew[_0x28705a]['FirstName'] == '' || afew[_0x28705a]['LastName'] == '' || afew[_0x28705a]['Country'] == '' || afew[_0x28705a]['Size'] == '' || afew[_0x28705a]['Address1'] == '' || afew[_0x28705a]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + _0x278e81['name'] + ']\x20Task\x20' + (_0x28705a + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x2fe9f6 = getProxy()[_0x28705a]['split'](':');
    const _0x13edf4 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x2fe9f6[0x0] + ':' + _0x2fe9f6[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x416917 = await _0x13edf4['newPage']();
      await _0x416917['setDefaultNavigationTimeout'](0x1d4c0), await _0x416917['authenticate']({
        'username': '' + _0x2fe9f6[0x2],
        'password': '' + _0x2fe9f6[0x3]
      }), console['log'](getTime() + '\x20[' + _0x278e81['name'] + ']\x20Task\x20' + (_0x28705a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x416917['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x416917['setRequestInterception'](!![]), _0x416917['on']('request', _0x2410ff => {
        _0x2410ff['resourceType']() === 'image' || _0x2410ff['resourceType']() === 'font' || _0x2410ff['resourceType']() === 'media' ? _0x2410ff['abort']() : _0x2410ff['continue']();
      }), await _0x416917['goto'](_0x43b36c), console['log'](getTime() + '\x20[' + _0x278e81['name'] + ']\x20Task\x20' + (_0x28705a + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x416917['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + _0x278e81['name'] + ']\x20Task\x20' + (_0x28705a + 0x1) + '\x20:\x20Cookies\x20received'), await _0x416917['waitForTimeout'](0x320);
      if (afew[_0x28705a]['Size'] == 'RANDOM') {
        console['log'](getTime() + '\x20[' + _0x278e81['name'] + ']\x20Task\x20' + (_0x28705a + 0x1) + '\x20:\x20Choosing\x20random\x20size');
        const _0x59cd0e = await _0x416917['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x6f1e4 => {
          return _0x6f1e4['map'](_0x1e1bb5 => _0x1e1bb5['href']);
        });
        var _0x4f64b1 = Math['round'](Math['random']() * (_0x59cd0e['length'] - 0x1));
        await _0x416917['goto']('' + _0x59cd0e[_0x4f64b1]);
      } else {
        console['log'](getTime() + '\x20[' + _0x278e81['name'] + ']\x20Task\x20' + (_0x28705a + 0x1) + '\x20:\x20Choosing\x20Size\x20' + afew[_0x28705a]['Size']), await _0x416917['hover']('.release-type');
        try {
          await _0x416917['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x28705a]['Size'] + '\x22]'), await _0x416917['waitForTimeout'](0x320), await _0x416917['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x28705a]['Size'] + '\x22]');
        } catch (_0x39f3af) {
          console['log'](chalk['red'](getTime() + '\x20[' + _0x278e81['name'] + ']\x20Task\x20' + (_0x28705a + 0x1) + '\x20:\x20' + _0x39f3af + '\x20Size\x20not\x20found')), _0x40acbe[0x0]['title'] = 'Failed\x20entry', _0x40acbe[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0xe49372);
          continue;
        }
      }
      await _0x416917['waitForTimeout'](0x258), await _0x416917['type']('#raffle-instagram', '' + afew[_0x28705a]['Follower'], { 'delay': 0x64 }), await _0x416917['waitForTimeout'](0x384), await _0x416917['click']('#raffle-terms'), await _0x416917['waitForTimeout'](0x384), await _0x416917['evaluate'](() => {
        const _0x2d77a0 = document['querySelector']('button.btn[name=\x27add\x27]');
        _0x2d77a0['click']();
      }), await _0x416917['waitForTimeout'](0xbb8), await _0x416917['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + _0x278e81['name'] + ']\x20Task\x20' + (_0x28705a + 0x1) + '\x20:\x20Filling\x20Information');
      _0x300269 == 'sec' ? await _0x416917['type']('#checkout_email', '' + afew[_0x28705a]['FirstName'] + afew[_0x28705a]['LastName'] + settings['catchall']) : await _0x416917['type']('#checkout_email', '' + afew[_0x28705a]['Email']);
      await _0x416917['waitForTimeout'](0x258), await _0x416917['select']('#checkout_shipping_address_country', '' + afew[_0x28705a]['Country']), await _0x416917['waitForTimeout'](0x258), await _0x416917['type']('#checkout_shipping_address_first_name', '' + afew[_0x28705a]['FirstName']), await _0x416917['waitForTimeout'](0x320), await _0x416917['type']('#checkout_shipping_address_last_name', '' + afew[_0x28705a]['LastName']), await _0x416917['waitForTimeout'](0x2bc), await _0x416917['type']('#checkout_shipping_address_address1', '' + afew[_0x28705a]['Address1']), await _0x416917['waitForTimeout'](0x2bc), await _0x416917['type']('#checkout_shipping_address_address2', '' + afew[_0x28705a]['Address2']), await _0x416917['waitForTimeout'](0x2bc), await _0x416917['type']('#checkout_shipping_address_zip', '' + afew[_0x28705a]['Postcode']), await _0x416917['waitForTimeout'](0x2bc), await _0x416917['type']('#checkout_shipping_address_city', '' + afew[_0x28705a]['City']), await _0x416917['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + _0x278e81['name'] + ']\x20Task\x20' + (_0x28705a + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x416917['evaluate'](() => {
        const _0x420aaf = document['querySelector']('#continue_button');
        _0x420aaf && _0x420aaf['click']();
      }), await _0x416917['waitForTimeout'](0x1194), await _0x416917['waitForSelector']('div.radio-wrapper'), await _0x416917['evaluate'](() => {
        const _0x2ea6ce = document['querySelector']('#continue_button');
        _0x2ea6ce && _0x2ea6ce['click']();
      }), await _0x416917['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + _0x278e81['name'] + ']\x20Task\x20' + (_0x28705a + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x416917['waitForSelector']('#continue_button'), await _0x416917['evaluate'](() => {
        const _0x4b7496 = document['querySelector']('#continue_button');
        _0x4b7496 && _0x4b7496['click']();
      }), await _0x416917['waitForTimeout'](0x1194), await _0x416917['waitForSelector']('#continue_button'), await _0x416917['evaluate'](() => {
        const _0x167e78 = document['querySelector']('#continue_button');
        _0x167e78 && _0x167e78['click']();
      });
      try {
        await _0x416917['waitForSelector']('div[data-step=\x22thank_you\x22]');
      } catch (_0x59be90) {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x278e81['name'] + ']\x20Task\x20' + (_0x28705a + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x59be90));
      }
      console['log'](chalk['green'](getTime() + '\x20[' + _0x278e81['name'] + ']\x20Task\x20' + (_0x28705a + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0xe49372);
    } catch (_0x23173c) {
      console['log'](chalk['red'](getTime() + '\x20[' + _0x278e81['name'] + ']\x20Task\x20' + (_0x28705a + 0x1) + '\x20:\x20' + _0x23173c)), _0x40acbe[0x0]['title'] = 'Failed\x20entry', _0x40acbe[0x0]['description'] = '' + _0x23173c, await sendWebhook(errorWH, _0xe49372);
    } finally {
      _0x13edf4 && _0x13edf4['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function kickzAcc(_0x312f3d) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x330094 = 0x0; _0x330094 < kickz['length']; _0x330094++) {
    await jig(kickz, _0x330094);
    if (kickz[_0x330094]['Email'] == '' || kickz[_0x330094]['Password'] == '' || kickz[_0x330094]['FirstName'] == '' || kickz[_0x330094]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0xe0e30 = getProxy()[_0x330094]['split'](':');
    const _0x3915b8 = await puppeteer['launch']({
      'headless': ![],
      'args': [
        '--proxy-server=' + _0xe0e30[0x0] + ':' + _0xe0e30[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x193fc5 = await _0x3915b8['newPage']();
      await _0x193fc5['authenticate']({
        'username': '' + _0xe0e30[0x2],
        'password': '' + _0xe0e30[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x193fc5['setRequestInterception'](!![]), _0x193fc5['on']('request', _0xcb9a54 => {
        _0xcb9a54['resourceType']() === 'image' || _0xcb9a54['resourceType']() === 'font' || _0xcb9a54['resourceType']() === 'media' ? _0xcb9a54['abort']() : _0xcb9a54['continue']();
      }), await _0x193fc5['goto'](_0x312f3d), await delay(0xbb8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x193fc5['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x193fc5['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x193fc5['waitForSelector']('#button-register'), await _0x193fc5['click']('#button-register'), await _0x193fc5['waitForSelector']('#customer_salutation'), await _0x193fc5['select']('#customer_salutation', 'mr'), await delay(0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x193fc5['waitForSelector']('#customer_firstname'), await _0x193fc5['type']('#customer_firstname', '' + kickz[_0x330094]['FirstName']), await delay(0x352), await _0x193fc5['waitForSelector']('#customer_lastname'), await _0x193fc5['type']('#customer_lastname', '' + kickz[_0x330094]['LastName']), await delay(0x352), await _0x193fc5['type']('#email-input', '' + kickz[_0x330094]['Email']), await delay(0x352), await _0x193fc5['type']('#email-confirm-input', '' + kickz[_0x330094]['Email']), await delay(0x352), await _0x193fc5['type']('#register-password', '' + kickz[_0x330094]['Password']), await delay(0x352), await _0x193fc5['type']('#password-confirm', '' + kickz[_0x330094]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x193fc5['click']('#consent'), await delay(0x1f4);
      const _0x5e7ed3 = await _0x193fc5['$']('div.inputErrorMsg.b-form_section-message');
      if (_0x5e7ed3) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
        continue;
      }
      await _0x193fc5['click']('#buttonRegister'), await _0x193fc5['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x330094]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
      async function _0x556266() {
        console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
        var _0x52ac3b = await prompt['get']('Code');
        return _0x52ac3b['Code'];
      }
      ;
      code = await _0x556266(), delay(0x320), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20Verifying..'), await _0x193fc5['type']('#verificationCode', code), await delay(0x1f4), await _0x193fc5['click']('#buttonVerify'), await delay(0x190), await _0x193fc5['click']('#buttonVerify'), await delay(0x3e8);
      try {
        await _0x193fc5['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x330094]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + kickz[_0x330094]['Email'] + ',' + kickz[_0x330094]['Password'] + ','), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x330094]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
      }
    } catch (_0x9c48e4) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x330094 + 0x1) + '\x20:\x20' + _0x9c48e4));
    } finally {
      _0x3915b8 && _0x3915b8['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
}
async function oqiumFunction(_0xcebe5c, _0x455a00, _0x38e234) {
  await jig(oqium, _0xcebe5c);
  var _0x52ef04 = [{
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
        'value': '' + oqium[_0xcebe5c]['Size']
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
  const _0x9ac4cf = { 'embeds': _0x52ef04 };
  var _0x1aefe3 = getProxy()[_0xcebe5c]['split'](':'), _0x2c6c6a = _0x38e234['data'];
  _0x455a00 == 'exp' ? _0x2c6c6a['data']['attributes']['email'] = '' + oqium[_0xcebe5c]['FirstName'] + oqium[_0xcebe5c]['LastName'] + settings['catchall'] : _0x2c6c6a['data']['attributes']['email'] = '' + oqium[_0xcebe5c]['Email'];
  _0x2c6c6a['data']['attributes']['properties']['$first_name'] = '' + oqium[_0xcebe5c]['FirstName'], _0x2c6c6a['data']['attributes']['properties']['$last_name'] = '' + oqium[_0xcebe5c]['LastName'], _0x2c6c6a['data']['attributes']['properties']['$address1'] = oqium[_0xcebe5c]['Address1'] + '\x20' + oqium[_0xcebe5c]['Address2'], _0x2c6c6a['data']['attributes']['properties']['$zip'] = '' + oqium[_0xcebe5c]['Zip'], _0x2c6c6a['data']['attributes']['properties']['$city'] = '' + oqium[_0xcebe5c]['City'], _0x2c6c6a['data']['attributes']['properties']['$country'] = '' + oqium[_0xcebe5c]['Country'], _0x2c6c6a['data']['attributes']['properties']['Size'] = '' + oqium[_0xcebe5c]['Size'], _0x2c6c6a['data']['attributes']['properties']['$phone_number'] = '' + oqium[_0xcebe5c]['Phone'], _0x2c6c6a['data']['attributes']['properties']['Instagram\x20Account'] = '' + oqium[_0xcebe5c]['Follower'];
  var _0x43306f = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x38e234['url'],
    'headers': _0x38e234['headers'],
    'body': JSON['stringify'](_0x2c6c6a),
    'proxy': 'http://' + _0x1aefe3[0x2] + ':' + _0x1aefe3[0x3] + '@' + _0x1aefe3[0x0] + ':' + _0x1aefe3[0x1]
  };
  return _0x455a00 === 'ver' && (_0x43306f['method'] = 'GET'), new Promise(function (_0x29eb69, _0x331c8b) {
    callback = async (_0xb5d36b, _0x42477d, _0x2217db) => {
      !_0xb5d36b && _0x42477d['statusCode'] == 0xca || !_0xb5d36b && _0x42477d['statusCode'] == 0xc8 ? (await sendWebhook(succesWH, _0x9ac4cf), _0x29eb69(console['log'](chalk['green'](getTime() + '\x20[' + _0x38e234['name'] + ']\x20Task\x20' + (_0xcebe5c + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x52ef04[0x0]['title'] = 'Failed\x20entry', _0x52ef04[0x0]['description'] = '' + _0xb5d36b, await sendWebhook(errorWH, _0x9ac4cf), _0x331c8b(console['log'](getTime() + '\x20[' + _0x38e234['name'] + ']\x20Task\x20' + (_0xcebe5c + 0x1) + ':\x20' + _0xb5d36b)));
    };
    try {
      console['log'](getTime() + '\x20[' + _0x38e234['name'] + ']\x20Task\x20' + (_0xcebe5c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2c6c6a['data']['attributes']['email']), request(_0x43306f, callback);
    } catch (_0x5c1581) {
      console['log'](getTime() + '\x20Task\x20' + (_0xcebe5c + 0x1) + ':\x20' + _0x5c1581);
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
      async function _0x5995fc() {
        await delay(0x320), console['clear'](), console['log']('Welcome\x20to\x20' + chalk['cyan']('JRaffles();') + '\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
        for (var _0x500df4 = 0x0; _0x500df4 < modules['length']; _0x500df4++) {
          console['log']('\x20(' + _0x500df4 + ')\x20[' + modules[_0x500df4]['name'] + ']');
        }
        ;
        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + modules['length'] + ')\x20Change\x20Settings'), console['log']('\x20(' + (modules['length'] + 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
        if (taskModule == 0x0) {
          taskFunction = await getFunction(modules[taskModule]['modules']);
          var _0x28e67a = modules[taskModule]['modules'][taskFunction];
          return console['clear'](), await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'nor', _0x28e67a), _0x5995fc();
        } else {
          if (taskModule == 0x1) {
            taskFunction = await getFunction(modules[taskModule]['modules']);
            var _0x28e67a = modules[taskModule]['modules'][taskFunction];
            if (taskFunction == 0x0) {
              console['log']('Starting\x20' + maha['length'] + '\x20MAHA\x20Tasks');
              for (var _0x1403f0 = 0x0; _0x1403f0 < maha['length']; _0x1403f0++) {
                console['log'](getTime() + '\x20[' + _0x28e67a['name'] + ']\x20Task\x20' + (_0x1403f0 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x1403f0, 'nor', _0x28e67a), console['log'](getTime() + '\x20[' + _0x28e67a['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
              ;
              return _0x5995fc();
            } else {
              if (taskFunction == 0x1) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x1403f0 = 0x0; _0x1403f0 < links['length']; _0x1403f0++) {
                  _0x28e67a['url'] = links[_0x1403f0], console['log'](getTime() + '\x20[' + _0x28e67a['name'] + ']\x20Task\x20' + (_0x1403f0 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x1403f0, 'ver', _0x28e67a), console['log'](getTime() + '\x20[' + _0x28e67a['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
                ;
                return _0x5995fc();
              }
            }
          } else {
            if (taskModule == 0x2)
              await footshopModule(), await delay(0x1388);
            else {
              if (taskModule == 0x3) {
                taskFunction = await getFunction(modules[taskModule]['modules']);
                var _0x28e67a = modules[taskModule]['modules'][taskFunction];
                console['clear']();
                if (taskFunction == 0x0) {
                  console['log']('Starting\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                  for (var _0x1403f0 = 0x0; _0x1403f0 < oqium['length']; _0x1403f0++) {
                    console['log'](getTime() + '\x20[' + _0x28e67a['name'] + ']\x20Task\x20' + (_0x1403f0 + 0x1) + ':\x20Getting\x20Session');
                    try {
                      await oqiumFunction(_0x1403f0, 'exp', _0x28e67a);
                    } catch {
                      console['log'](chalk['red'](getTime() + '\x20[' + _0x28e67a['name'] + ']\x20Task\x20' + (_0x1403f0 + 0x1) + ':\x20Task\x20failed'));
                    }
                    console['log'](getTime() + '\x20[' + _0x28e67a['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                  }
                } else {
                  if (taskFunction == 0x1) {
                    console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                    for (var _0x1403f0 = 0x0; _0x1403f0 < links['length']; _0x1403f0++) {
                      try {
                        modules[taskModule]['url'] = links[_0x1403f0], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1403f0 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x1403f0, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                      } catch (_0x588198) {
                      }
                      ;
                    }
                    ;
                  }
                }
                ;
              } else {
                if (taskModule == modules['length']) {
                  console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                  var _0x119017 = 0x0;
                  for (const _0x4e9960 in settings) {
                    console['log']('(' + _0x119017 + ')\x20' + _0x4e9960 + '\x20:\x20' + settings[_0x4e9960]), _0x119017++;
                  }
                  console['log']('');
                  var _0x2f07b5 = await getSetting();
                  console['clear'];
                  var _0x26ed39 = 0x0;
                  for (var _0x12ed2a in settings) {
                    if (_0x2f07b5 == _0x26ed39) {
                      console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x12ed2a + '\x20:'), settings[_0x12ed2a] = await getValue(), fs['writeFileSync']('../settings.json', JSON['stringify'](settings));
                      break;
                    } else
                      _0x26ed39++;
                  }
                  return console['log']('Settings\x20Saved!'), await delay(0xbb8), _0x5995fc();
                } else {
                  if (taskModule == modules['length'] + 0x1)
                    return console['log']('Reloading\x20settings'), await loadSettings(), _0x5995fc();
                  else {
                    if (taskModule == 0x45) {
                      modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                      var _0xc2d9ff = await getPassword();
                      _0xc2d9ff == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
                    }
                  }
                }
              }
            }
          }
        }
      }
      await _0x5995fc();
    } catch (_0x287492) {
      return console['log'](_0x287492), await delay(0x3a98);
    }
}
;
setTitle('JRaffles'), loadSettings(), main();