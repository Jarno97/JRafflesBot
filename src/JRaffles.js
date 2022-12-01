const puppeteer = require('puppeteer-extra'), RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha'), StealthPlugin = require('puppeteer-extra-plugin-stealth'), chalk = require('chalk'), setTitle = require('node-bash-title'), fs = require('fs'), axios = require('axios'), Papa = require('papaparse');
var random = require('random-name');
const request = require('request'), proxyFile = fs['readFileSync']('../proxies.txt', 'utf-8');
var prompt = require('prompt');
const j = request['jar']();
var settings = {};
const succesWH = 'https://discord.com/api/webhooks/1044989608708030595/HUZ2q06RoQQ24n_rWWEsL6AgM5yXEeUi2SO9VyOLuQgGBeHIlXpPl9Xr5jYMLXwJKwPS', errorWH = 'https://discord.com/api/webhooks/1045001962262900766/ZXWdz3BSjNO08alABR8ERNBgR2SNcydTW-9XxsFuphHYfwHaojLBu3hkw1Ygi3MxOZdz', package = JSON['parse'](fs['readFileSync']('../package.json', 'utf-8')), version = package['version'];
var taskCSV, taskFiles, licenseKey, username;
const API_KEY = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
var catchall = settings['catchall'];
let afew = [], maha = [], footshop = [], auth = ![];
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', numbers = '0123456789';
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
  taskFiles = fs['readdirSync']('../tasks'), settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), !settings['delay'] && (settings['delay'] = 0x2710, fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['captchaKey'] && (settings['captchaKey'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['useRandomProxy'] && (settings['useRandomProxy'] = ![], fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x1c5c06 => new Promise(_0x4f65e0 => setTimeout(_0x4f65e0, _0x1c5c06));
async function getLicense(_0x5e754f) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x5e754f, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x276935 => _0x276935['data'])['catch'](() => null);
}
;
async function checkLicense(_0x403bbe) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0xf4d817 = await getLicense(_0x403bbe);
  username = JSON['stringify'](_0xf4d817['user']['username']);
  if (!_0xf4d817)
    return console['log']('License\x20not\x20found');
  if (!_0xf4d817['user'])
    return console['log']('License\x20not\x20bound');
  return _0xf4d817['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x5a580c = await prompt['get']('Module');
  return console['clear'](), _0x5a580c['Module'];
}
;
async function getSetting() {
  var _0x4d786e = await prompt['get']('Setting');
  return console['clear'](), _0x4d786e['Setting'];
}
async function getTaskFile() {
  console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
  for (var _0x34e9c7 = 0x0; _0x34e9c7 < taskFiles['length']; _0x34e9c7++) {
    console['log']('\x20(' + _0x34e9c7 + ')\x20' + taskFiles[_0x34e9c7]);
  }
  console['log']('');
  var _0xd9516f = await prompt['get']('Task'), _0x2e3854 = fs['readFileSync']('../tasks/' + taskFiles[_0xd9516f['Task']], 'utf-8');
  return taskCSV = Papa['parse'](_0x2e3854, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0xd9516f['Task']])), taskCSV;
}
async function getProxyFile() {
  console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
  for (var _0x55b52f = 0x0; _0x55b52f < taskFiles['length']; _0x55b52f++) {
    console['log']('\x20(' + _0x55b52f + ')\x20' + taskFiles[_0x55b52f]);
  }
  console['log']('');
  var _0x1f2ae8 = await prompt['get']('Task'), _0x246dde = fs['readFileSync']('../tasks/' + taskFiles[_0x1f2ae8['Task']], 'utf-8');
  return taskCSV = Papa['parse'](_0x246dde, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x1f2ae8['Task']])), taskCSV;
}
async function getValue() {
  var _0x33cb9c = await prompt['get']('Value');
  return console['clear'](), _0x33cb9c['Value'];
}
async function getFunction(_0x1334bb) {
  console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
  for (var _0x3c722c = 0x0; _0x3c722c < _0x1334bb['length']; _0x3c722c++) {
    console['log']('\x20(' + _0x3c722c + ')\x20[' + _0x1334bb[_0x3c722c]['name'] + ']');
  }
  ;
  console['log']('');
  var _0x1cc098 = await prompt['get']('Module');
  return _0x1cc098['Module'];
}
async function getPassword() {
  var _0xbc8772 = await prompt['get']('Password');
  return console['clear'](), _0xbc8772['Password'];
}
;
async function getLinks() {
  var _0x4f45c0 = await prompt['get']('Links');
  return _0x4f45c0['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x15db6b = 0x0; _0x15db6b < afewProducts['length']; _0x15db6b++) {
    console['log']('\x20(' + _0x15db6b + ')\x20' + afewProducts[_0x15db6b]);
  }
  ;
  console['log']();
  let _0x10035c = await prompt['get']('Product');
  console['clear'](), afewProduct = _0x10035c['Product'];
  return;
}
;
function getTime() {
  var _0x23259c = new Date(Date['now']())['toLocaleTimeString']();
  return _0x23259c;
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
  },
  {
    'name': 'PATTA',
    'modules': [
      { 'name': 'PATTA\x20Account\x20Generator' },
      { 'name': 'PATTA\x20Raffle\x20Entries' }
    ]
  },
  { 'name': 'Change\x20Settings' },
  { 'name': 'Reload\x20Settings' }
];
async function sendWebhook(_0x52eb46, _0x3aef0c) {
  let _0x2bef0d = { 'headers': { 'content-type': 'application/json' } };
  await axios['post'](_0x52eb46, _0x3aef0c, _0x2bef0d);
}
;
async function jig(_0x2c2c77, _0xc52f88) {
  var _0x4e5194 = _0x2c2c77[_0xc52f88]['Address1']['split'](''), _0x350918 = _0x2c2c77[_0xc52f88]['Address2']['split'](''), _0x132db3 = _0x2c2c77[_0xc52f88]['Email']['split']('@');
  for (var _0x214e70 = 0x0; _0x214e70 < _0x4e5194['length']; _0x214e70++) {
    if (_0x4e5194[_0x214e70] == 'X') {
      var _0x11cc4e = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x4e5194[_0x214e70] = lettersArray[_0x11cc4e];
    }
  }
  ;
  for (var _0x214e70 = 0x0; _0x214e70 < _0x350918['length']; _0x214e70++) {
    if (_0x350918[_0x214e70] == 'X') {
      var _0x11cc4e = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x350918[_0x214e70] = lettersArray[_0x11cc4e];
    }
  }
  ;
  _0x2c2c77[_0xc52f88]['FirstName'] == 'RANDOM' && (_0x2c2c77[_0xc52f88]['FirstName'] = random['first']());
  _0x2c2c77[_0xc52f88]['LastName'] == 'RANDOM' && (_0x2c2c77[_0xc52f88]['LastName'] = random['last']());
  _0x132db3[0x0] == 'RANDOM' ? _0x132db3[0x0] = '' + random['first']() + random['last']() + '@' : _0x132db3[0x0] = _0x132db3[0x0] + '@';
  _0x2c2c77[_0xc52f88]['Email'] = _0x132db3['join'](''), _0x2c2c77[_0xc52f88]['Address1'] = _0x4e5194['join'](''), _0x2c2c77[_0xc52f88]['Address2'] = _0x350918['join']('');
  return;
}
;
function getProxy() {
  let _0x28b632 = proxyFile['split']('\x0a'), _0x13af07 = _0x28b632['map']((_0x52f5c8, _0x342009) => {
    sanatizeProxy = _0x52f5c8['replace']('\x0d', '');
    if (_0x28b632[_0x342009 + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x13af07;
}
;
async function afewScraper() {
  var _0x1d04bb = getProxy()[0x1]['split'](':');
  const _0x14a7e7 = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x1d04bb[0x0] + ':' + _0x1d04bb[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x2a7ce0 = await _0x14a7e7['newPage']();
    await _0x2a7ce0['authenticate']({
      'username': '' + _0x1d04bb[0x2],
      'password': '' + _0x1d04bb[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x2a7ce0['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2a7ce0['setRequestInterception'](!![]), _0x2a7ce0['on']('request', _0x3a9a0c => {
      _0x3a9a0c['resourceType']() === 'image' || _0x3a9a0c['resourceType']() === 'font' || _0x3a9a0c['resourceType']() === 'media' ? _0x3a9a0c['abort']() : _0x3a9a0c['continue']();
    }), await _0x2a7ce0['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x2a7ce0['waitForTimeout'](0xbb8), await _0x2a7ce0['waitForSelector']('.product-card');
    const _0x56618c = await _0x2a7ce0['$$eval']('a.product-card', _0x708aaa => {
      return _0x708aaa['map'](_0x2e7d10 => _0x2e7d10['href']);
    });
    return afewProducts = _0x56618c;
  } catch (_0x33298b) {
    console['log']('\x20' + _0x33298b);
  } finally {
    _0x14a7e7['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0xf21cc9, _0x3c4bb5, _0x1109a7, _0x2804a6) {
  await jig(_0x2804a6, _0xf21cc9);
  var _0x21cc39 = [{
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
        'value': '' + oqium[_0xf21cc9]['Size']
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
  const _0x578c89 = { 'embeds': _0x21cc39 };
  if (settings['useRandomProxy'] = ![])
    var _0x3e5f59 = getProxy()[_0xf21cc9]['split'](':');
  else
    var _0xa1080f = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x3e5f59 = getProxy()[_0xa1080f]['split'](':');
  var _0x105ce1 = _0x1109a7['data'];
  _0x3c4bb5 == 'exp' ? _0x105ce1['data']['attributes']['email'] = '' + _0x2804a6[_0xf21cc9]['FirstName'] + _0x2804a6[_0xf21cc9]['LastName'] + settings['catchall'] : _0x105ce1['data']['attributes']['email'] = '' + _0x2804a6[_0xf21cc9]['Email'];
  _0x105ce1['data']['attributes']['properties']['$first_name'] = '' + _0x2804a6[_0xf21cc9]['FirstName'], _0x105ce1['data']['attributes']['properties']['$last_name'] = '' + _0x2804a6[_0xf21cc9]['LastName'], _0x105ce1['data']['attributes']['properties']['$address1'] = _0x2804a6[_0xf21cc9]['Address1'] + '\x20' + _0x2804a6[_0xf21cc9]['Address2'], _0x105ce1['data']['attributes']['properties']['$zip'] = '' + _0x2804a6[_0xf21cc9]['Zip'], _0x105ce1['data']['attributes']['properties']['$city'] = '' + _0x2804a6[_0xf21cc9]['City'], _0x105ce1['data']['attributes']['properties']['$country'] = '' + _0x2804a6[_0xf21cc9]['Country'], _0x105ce1['data']['attributes']['properties']['Size'] = '' + _0x2804a6[_0xf21cc9]['Size'], _0x105ce1['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x2804a6[_0xf21cc9]['Follower'];
  var _0x291262 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x1109a7['url'],
    'headers': _0x1109a7['headers'],
    'body': JSON['stringify'](_0x105ce1),
    'proxy': 'http://' + _0x3e5f59[0x2] + ':' + _0x3e5f59[0x3] + '@' + _0x3e5f59[0x0] + ':' + _0x3e5f59[0x1]
  };
  return _0x3c4bb5 === 'ver' && (_0x291262['method'] = 'GET'), new Promise(function (_0x5731b0, _0x598fe8) {
    callback = async (_0x15a11f, _0xe29e33, _0x213350) => {
      !_0x15a11f && _0xe29e33['statusCode'] == 0xca || !_0x15a11f && _0xe29e33['statusCode'] == 0xc8 ? _0x5731b0(console['log'](chalk['green'](getTime() + '\x20[' + _0x1109a7['name'] + ']\x20Task\x20' + (_0xf21cc9 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x21cc39[0x0]['title'] = 'Failed\x20entry', _0x21cc39[0x0]['description'] = '' + _0x15a11f, await sendWebhook(errorWH, _0x578c89), _0x598fe8(console['log'](getTime() + '\x20[' + _0x1109a7['name'] + ']\x20Task\x20' + (_0xf21cc9 + 0x1) + ':\x20' + _0x15a11f)));
    };
    try {
      _0x3c4bb5 === 'ver' ? console['log'](getTime() + '\x20[' + _0x1109a7['name'] + ']\x20Task\x20' + (_0xf21cc9 + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + _0x1109a7['name'] + ']\x20Task\x20' + (_0xf21cc9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x105ce1['data']['attributes']['email']), request(_0x291262, callback);
    } catch (_0x928445) {
      console['log'](getTime() + '\x20Task\x20' + (_0xf21cc9 + 0x1) + ':\x20' + _0x928445);
    }
  });
}
;
async function footshopModule(_0x57fb8d) {
  var _0x438e53;
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x457952 = 0x0; _0x457952 < _0x57fb8d['length']; _0x457952++) {
    await jig(_0x57fb8d, _0x457952);
    if (_0x57fb8d[_0x457952]['Email'] == '' || _0x57fb8d[_0x457952]['FirstName'] == '' || _0x57fb8d[_0x457952]['LastName'] == '' || _0x57fb8d[_0x457952]['Country'] == '' || _0x57fb8d[_0x457952]['Size'] == '' || _0x57fb8d[_0x457952]['Address1'] == '' || _0x57fb8d[_0x457952]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    console['log'](_0x57fb8d[_0x457952]['Url']);
    async function _0x409d33() {
      var _0x213f9b = await axios['get']('https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_')['then'](_0x5487b3 => _0x5487b3['data'])['catch'](() => undefined);
      console['log'](_0x213f9b);
      var _0x592649 = _0x213f9b['sizeSets']['Men']['sizes'];
      _0x592649['length'] == 0x0 && (_0x592649 = _0x213f9b['sizeSets']['Women']['sizes'], _0x592649['length'] == 0x0 && (_0x592649 = _0x213f9b['sizeSets']['Unisex']['sizes'], _0x592649['length'] == 0x0 && (_0x592649 = _0x213f9b['sizeSets']['Kids']['sizes'])));
      ;
      async function _0x45d767() {
        for (var _0x2de3c0 = 0x0; _0x2de3c0 < _0x592649['length']; _0x2de3c0++) {
          if (_0x592649[_0x2de3c0]['eur'] == _0x57fb8d[_0x457952]['Size'])
            return _0x438e53 = _0x592649[_0x2de3c0]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x20Size\x20' + _0x57fb8d[_0x457952]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x6a62d0 = await _0x45d767();
      if (_0x6a62d0 == ![])
        return ![];
    }
    let _0x50538e = await _0x409d33();
    if (_0x50538e == ![])
      continue;
    if (_0x57fb8d[_0x457952]['Email'] == '' || _0x57fb8d[_0x457952]['FirstName'] == '' || _0x57fb8d[_0x457952]['LastName'] == '' || _0x57fb8d[_0x457952]['Country'] == '' || _0x57fb8d[_0x457952]['Size'] == '' || _0x57fb8d[_0x457952]['Address1'] == '' || _0x57fb8d[_0x457952]['Zip'] == '' || _0x57fb8d[_0x457952]['Phone'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x57bdb6 = 'https://releases.footshop.com/register/' + _0x57fb8d[_0x457952]['Url'] + '/Men/' + _0x438e53;
    if (settings['useRandomProxy'] = ![])
      var _0x57f0dd = getProxy()[_0x457952]['split'](':');
    else
      var _0x5b82ef = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x57f0dd = getProxy()[_0x5b82ef]['split'](':');
    const _0x4a2d27 = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x57f0dd[0x0] + ':' + _0x57f0dd[0x1]]
    });
    try {
      const _0x1f5905 = await _0x4a2d27['newPage']();
      await _0x1f5905['authenticate']({
        'username': '' + _0x57f0dd[0x2],
        'password': '' + _0x57f0dd[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1f5905['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1f5905['setRequestInterception'](!![]), _0x1f5905['on']('request', _0x433f18 => {
        _0x433f18['resourceType']() === 'image' || _0x433f18['resourceType']() === 'font' || _0x433f18['resourceType']() === 'media' ? _0x433f18['abort']() : _0x433f18['continue']();
      }), await _0x1f5905['goto']('' + _0x57bdb6 + _0x438e53), await _0x1f5905['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1f5905['type']('input[name=\x22email\x22]', '' + _0x57fb8d[_0x457952]['Email']), await delay(0x640), await _0x1f5905['type']('input[name=\x22phone\x22]', '' + _0x57fb8d[_0x457952]['Phone']), await delay(0x4b0), await _0x1f5905['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
      try {
        await _0x1f5905['type']('input[name=\x22firstName\x22]', '' + _0x57fb8d[_0x457952]['FirstName']), await delay(0x258);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
        continue;
      }
      await _0x1f5905['type']('input[name=\x22lastName\x22]', '' + _0x57fb8d[_0x457952]['LastName']), await delay(0xc8), await _0x1f5905['type']('input[name=\x22instagramUsername\x22]', '' + _0x57fb8d[_0x457952]['Follower']), await delay(0x4b0), await _0x1f5905['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1f5905['select']('select[name=\x22country\x22]', '' + _0x57fb8d[_0x457952]['Country']), await delay(0x2bc), await _0x1f5905['type']('input[name=\x22streetName\x22]', '' + _0x57fb8d[_0x457952]['Address1']), await delay(0x258), await _0x1f5905['type']('input[name=\x22houseNumber\x22]', '' + _0x57fb8d[_0x457952]['HouseNumber'] + _0x57fb8d[_0x457952]['Address2']), await delay(0xc8), await _0x1f5905['type']('input[name=\x22postalCode\x22]', '' + _0x57fb8d[_0x457952]['Zip']), await delay(0x1f4), await _0x1f5905['type']('input[name=\x22city\x22]', '' + _0x57fb8d[_0x457952]['City']), await delay(0x4b0), await _0x1f5905['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x1f5905['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1f5905['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x1f5905['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1f5905['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1f5905['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x4b0), await _0x1f5905['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x57fb8d[_0x457952]['CardNumber']), await delay(0x320), await _0x1f5905['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x57fb8d[_0x457952]['ExpiryDate']), await delay(0x4b0), await _0x1f5905['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x57fb8d[_0x457952]['CVV']), await delay(0x226), await _0x1f5905['type']('input[name=\x22holderName\x22]', '' + _0x57fb8d[_0x457952]['NameOnCard']), await delay(0x226), await _0x1f5905['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x20Awaiting\x203DS');
      try {
        await _0x1f5905['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await delay(0xbb8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x203DS\x20Failed'));
      }
    } catch (_0x3178c7) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x457952 + 0x1) + '\x20:\x20' + _0x3178c7);
    } finally {
      _0x4a2d27['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x1042ed, _0x1a9952, _0x14a3a0, _0x1d9a99) => {
  for (var _0x497ceb = 0x0; _0x497ceb < _0x1d9a99['length']; _0x497ceb++) {
    await jig(_0x1d9a99, _0x497ceb);
    var _0x2a1260 = [{
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
          'value': '' + _0x1042ed
        },
        {
          'name': 'Size',
          'value': '' + _0x1d9a99[_0x497ceb]['Size']
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
    const _0x278fb1 = { 'embeds': _0x2a1260 };
    if (_0x1d9a99[_0x497ceb]['Email'] == '' || _0x1d9a99[_0x497ceb]['FirstName'] == '' || _0x1d9a99[_0x497ceb]['LastName'] == '' || _0x1d9a99[_0x497ceb]['Country'] == '' || _0x1d9a99[_0x497ceb]['Size'] == '' || _0x1d9a99[_0x497ceb]['Address1'] == '' || _0x1d9a99[_0x497ceb]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + _0x14a3a0['name'] + ']\x20Task\x20' + (_0x497ceb + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x383f4c = getProxy()[_0x497ceb]['split'](':');
    else
      var _0x24f653 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x383f4c = getProxy()[_0x24f653]['split'](':');
    const _0x7c0482 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x383f4c[0x0] + ':' + _0x383f4c[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x46d4a6 = await _0x7c0482['newPage']();
      await _0x46d4a6['setDefaultNavigationTimeout'](0x1d4c0), await _0x46d4a6['authenticate']({
        'username': '' + _0x383f4c[0x2],
        'password': '' + _0x383f4c[0x3]
      }), console['log'](getTime() + '\x20[' + _0x14a3a0['name'] + ']\x20Task\x20' + (_0x497ceb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x46d4a6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x46d4a6['setRequestInterception'](!![]), _0x46d4a6['on']('request', _0xd83f5c => {
        _0xd83f5c['resourceType']() === 'image' || _0xd83f5c['resourceType']() === 'font' || _0xd83f5c['resourceType']() === 'media' ? _0xd83f5c['abort']() : _0xd83f5c['continue']();
      }), await _0x46d4a6['goto'](_0x1042ed), console['log'](getTime() + '\x20[' + _0x14a3a0['name'] + ']\x20Task\x20' + (_0x497ceb + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x46d4a6['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + _0x14a3a0['name'] + ']\x20Task\x20' + (_0x497ceb + 0x1) + '\x20:\x20Cookies\x20received'), await _0x46d4a6['waitForTimeout'](0x320);
      if (_0x1d9a99[_0x497ceb]['Size'] == 'RANDOM') {
        console['log'](getTime() + '\x20[' + _0x14a3a0['name'] + ']\x20Task\x20' + (_0x497ceb + 0x1) + '\x20:\x20Choosing\x20random\x20size');
        const _0x176950 = await _0x46d4a6['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x5e9cd6 => {
          return _0x5e9cd6['map'](_0x450c3e => _0x450c3e['href']);
        });
        var _0x237059 = Math['round'](Math['random']() * (_0x176950['length'] - 0x1));
        await _0x46d4a6['goto']('' + _0x176950[_0x237059]);
      } else {
        console['log'](getTime() + '\x20[' + _0x14a3a0['name'] + ']\x20Task\x20' + (_0x497ceb + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1d9a99[_0x497ceb]['Size']), await _0x46d4a6['hover']('.release-type');
        try {
          await _0x46d4a6['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x1d9a99[_0x497ceb]['Size'] + '\x22]'), await _0x46d4a6['waitForTimeout'](0x320), await _0x46d4a6['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x1d9a99[_0x497ceb]['Size'] + '\x22]');
        } catch (_0x1a82b5) {
          console['log'](chalk['red'](getTime() + '\x20[' + _0x14a3a0['name'] + ']\x20Task\x20' + (_0x497ceb + 0x1) + '\x20:\x20' + _0x1a82b5 + '\x20Size\x20not\x20found')), _0x2a1260[0x0]['title'] = 'Failed\x20entry', _0x2a1260[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x278fb1);
          continue;
        }
      }
      await _0x46d4a6['waitForTimeout'](0x258), await _0x46d4a6['type']('#raffle-instagram', '' + _0x1d9a99[_0x497ceb]['Follower'], { 'delay': 0x64 }), await _0x46d4a6['waitForTimeout'](0x384), await _0x46d4a6['click']('#raffle-terms'), await _0x46d4a6['waitForTimeout'](0x384), await _0x46d4a6['evaluate'](() => {
        const _0x1a56d0 = document['querySelector']('button.btn[name=\x27add\x27]');
        _0x1a56d0['click']();
      }), await _0x46d4a6['waitForTimeout'](0xbb8), await _0x46d4a6['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + _0x14a3a0['name'] + ']\x20Task\x20' + (_0x497ceb + 0x1) + '\x20:\x20Filling\x20Information');
      _0x1a9952 == 'sec' ? await _0x46d4a6['type']('#checkout_email', '' + _0x1d9a99[_0x497ceb]['FirstName'] + _0x1d9a99[_0x497ceb]['LastName'] + settings['catchall']) : await _0x46d4a6['type']('#checkout_email', '' + _0x1d9a99[_0x497ceb]['Email']);
      await _0x46d4a6['waitForTimeout'](0x258), await _0x46d4a6['select']('#checkout_shipping_address_country', '' + _0x1d9a99[_0x497ceb]['Country']), await _0x46d4a6['waitForTimeout'](0x258), await _0x46d4a6['type']('#checkout_shipping_address_first_name', '' + _0x1d9a99[_0x497ceb]['FirstName']), await _0x46d4a6['waitForTimeout'](0x320), await _0x46d4a6['type']('#checkout_shipping_address_last_name', '' + _0x1d9a99[_0x497ceb]['LastName']), await _0x46d4a6['waitForTimeout'](0x2bc), await _0x46d4a6['type']('#checkout_shipping_address_address1', _0x1d9a99[_0x497ceb]['Address1'] + '\x20' + _0x1d9a99[_0x497ceb]['HouseNumber']), await _0x46d4a6['waitForTimeout'](0x2bc), await _0x46d4a6['type']('#checkout_shipping_address_address2', '' + _0x1d9a99[_0x497ceb]['Address2']), await _0x46d4a6['waitForTimeout'](0x2bc), await _0x46d4a6['type']('#checkout_shipping_address_zip', '' + _0x1d9a99[_0x497ceb]['Postcode']), await _0x46d4a6['waitForTimeout'](0x2bc), await _0x46d4a6['type']('#checkout_shipping_address_city', '' + _0x1d9a99[_0x497ceb]['City']), await _0x46d4a6['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + _0x14a3a0['name'] + ']\x20Task\x20' + (_0x497ceb + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x46d4a6['evaluate'](() => {
        const _0x2c3dfd = document['querySelector']('#continue_button');
        _0x2c3dfd && _0x2c3dfd['click']();
      }), await _0x46d4a6['waitForTimeout'](0x1194), await _0x46d4a6['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), await _0x46d4a6['evaluate'](() => {
        const _0xb65512 = document['querySelector']('#continue_button');
        _0xb65512 && _0xb65512['click']();
      }), await _0x46d4a6['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + _0x14a3a0['name'] + ']\x20Task\x20' + (_0x497ceb + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x46d4a6['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), await _0x46d4a6['evaluate'](() => {
        const _0x4cd781 = document['querySelector']('#continue_button');
        _0x4cd781 && _0x4cd781['click']();
      }), await _0x46d4a6['waitForTimeout'](0x1194), await _0x46d4a6['waitForSelector']('#continue_button'), await _0x46d4a6['evaluate'](() => {
        const _0x271020 = document['querySelector']('#continue_button');
        _0x271020 && _0x271020['click']();
      });
      try {
        await _0x46d4a6['waitForSelector']('div[data-step=\x22thank_you\x22]');
      } catch (_0x5d1ff0) {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x14a3a0['name'] + ']\x20Task\x20' + (_0x497ceb + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x5d1ff0));
      }
      console['log'](chalk['green'](getTime() + '\x20[' + _0x14a3a0['name'] + ']\x20Task\x20' + (_0x497ceb + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x278fb1);
    } catch (_0x4cbfc7) {
      console['log'](chalk['red'](getTime() + '\x20[' + _0x14a3a0['name'] + ']\x20Task\x20' + (_0x497ceb + 0x1) + '\x20:\x20' + _0x4cbfc7)), _0x2a1260[0x0]['title'] = 'Failed\x20entry', _0x2a1260[0x0]['description'] = '' + _0x4cbfc7, await sendWebhook(errorWH, _0x278fb1);
    } finally {
      _0x7c0482 && _0x7c0482['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function kickzAcc(_0x3b4ecb) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x2ad459 = 0x0; _0x2ad459 < kickz['length']; _0x2ad459++) {
    await jig(kickz, _0x2ad459);
    if (kickz[_0x2ad459]['Email'] == '' || kickz[_0x2ad459]['Password'] == '' || kickz[_0x2ad459]['FirstName'] == '' || kickz[_0x2ad459]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x1dbb33 = getProxy()[_0x2ad459]['split'](':');
    else
      var _0x54cab8 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x1dbb33 = getProxy()[_0x54cab8]['split'](':');
    const _0x5cee50 = await puppeteer['launch']({
      'headless': ![],
      'args': [
        '--proxy-server=' + _0x1dbb33[0x0] + ':' + _0x1dbb33[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0xc3a7a1 = await _0x5cee50['newPage']();
      await _0xc3a7a1['authenticate']({
        'username': '' + _0x1dbb33[0x2],
        'password': '' + _0x1dbb33[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xc3a7a1['setRequestInterception'](!![]), _0xc3a7a1['on']('request', _0x171d12 => {
        _0x171d12['resourceType']() === 'image' || _0x171d12['resourceType']() === 'font' || _0x171d12['resourceType']() === 'media' ? _0x171d12['abort']() : _0x171d12['continue']();
      }), await _0xc3a7a1['goto'](_0x3b4ecb), await delay(0xbb8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0xc3a7a1['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xc3a7a1['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xc3a7a1['waitForSelector']('#button-register'), await _0xc3a7a1['click']('#button-register'), await _0xc3a7a1['waitForSelector']('#customer_salutation'), await _0xc3a7a1['select']('#customer_salutation', 'mr'), await delay(0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xc3a7a1['waitForSelector']('#customer_firstname'), await _0xc3a7a1['type']('#customer_firstname', '' + kickz[_0x2ad459]['FirstName']), await delay(0x352), await _0xc3a7a1['waitForSelector']('#customer_lastname'), await _0xc3a7a1['type']('#customer_lastname', '' + kickz[_0x2ad459]['LastName']), await delay(0x352), await _0xc3a7a1['type']('#email-input', '' + kickz[_0x2ad459]['Email']), await delay(0x352), await _0xc3a7a1['type']('#email-confirm-input', '' + kickz[_0x2ad459]['Email']), await delay(0x352), await _0xc3a7a1['type']('#register-password', '' + kickz[_0x2ad459]['Password']), await delay(0x352), await _0xc3a7a1['type']('#password-confirm', '' + kickz[_0x2ad459]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0xc3a7a1['click']('#consent'), await delay(0x1f4);
      const _0x32bdb5 = await _0xc3a7a1['$']('div.inputErrorMsg.b-form_section-message');
      if (_0x32bdb5) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
        continue;
      }
      await _0xc3a7a1['click']('#buttonRegister'), await _0xc3a7a1['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x2ad459]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
      async function _0x44887b() {
        console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
        var _0x29b946 = await prompt['get']('Code');
        return _0x29b946['Code'];
      }
      ;
      code = await _0x44887b(), delay(0x320), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20Verifying..'), await _0xc3a7a1['type']('#verificationCode', code), await delay(0x1f4), await _0xc3a7a1['click']('#buttonVerify'), await delay(0x190), await _0xc3a7a1['click']('#buttonVerify'), await delay(0x3e8);
      try {
        await _0xc3a7a1['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x2ad459]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + kickz[_0x2ad459]['Email'] + ',' + kickz[_0x2ad459]['Password'] + ','), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x2ad459]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
      }
    } catch (_0x578794) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad459 + 0x1) + '\x20:\x20' + _0x578794));
    } finally {
      _0x5cee50 && _0x5cee50['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
}
async function bwAcc(_0x40461f, _0x340791) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x2da986 = 0x0; _0x2da986 < bouncewear['length']; _0x2da986++) {
    await jig(bouncewear, _0x2da986);
    if (bouncewear[_0x2da986]['Email'] == '' || bouncewear[_0x2da986]['Password'] == '' || bouncewear[_0x2da986]['FirstName'] == '' || bouncewear[_0x2da986]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2da986 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x4fbe7f = getProxy()[_0x2da986]['split'](':');
    else
      var _0x3a01e4 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x4fbe7f = getProxy()[_0x3a01e4]['split'](':');
    const _0x37a3ff = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x4fbe7f[0x0] + ':' + _0x4fbe7f[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x4343f1 = await _0x37a3ff['newPage']();
      await _0x4343f1['authenticate']({
        'username': '' + _0x4fbe7f[0x2],
        'password': '' + _0x4fbe7f[0x3]
      }), console['log'](getTime() + '\x20[' + _0x340791['name'] + ']\x20Task\x20' + (_0x2da986 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4343f1['setRequestInterception'](!![]), _0x4343f1['on']('request', _0x321db7 => {
        _0x321db7['resourceType']() === 'image' || _0x321db7['resourceType']() === 'font' || _0x321db7['resourceType']() === 'media' ? _0x321db7['abort']() : _0x321db7['continue']();
      }), await _0x4343f1['goto'](_0x40461f), await delay(0xbb8), await _0x4343f1['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x340791['name'] + ']\x20Task\x20' + (_0x2da986 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4343f1['type']('#RegisterForm-FirstName', '' + bouncewear[_0x2da986]['FirstName']), await delay(0x226), await _0x4343f1['type']('#RegisterForm-LastName', '' + bouncewear[_0x2da986]['LastName']), await delay(0x226), await _0x4343f1['type']('#RegisterForm-email', '' + bouncewear[_0x2da986]['Email']), await delay(0x226), await _0x4343f1['type']('#RegisterForm-password', '' + bouncewear[_0x2da986]['Password']), await delay(0x226), await _0x4343f1['click']('#marketing'), console['log'](getTime() + '\x20[' + _0x340791['name'] + ']\x20Task\x20' + (_0x2da986 + 0x1) + '\x20:\x20Submitting..'), await _0x4343f1['$eval']('#RegisterForm', _0x3f4d6e => _0x3f4d6e['submit']()), await delay(0x1f40), console['log'](getTime() + '\x20[' + _0x340791['name'] + ']\x20Task\x20' + (_0x2da986 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x4343f1['solveRecaptchas'](), await _0x4343f1['click']('.shopify-challenge__button.btn');
      async function _0x22bd1f() {
        for (var _0x3358b4 = 0x0; _0x3358b4 < 0x4; _0x3358b4++) {
          try {
            console['log']('try'), await _0x4343f1['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](getTime() + '\x20[' + _0x340791['name'] + ']\x20Task\x20' + (_0x2da986 + 0x1) + '\x20:\x20' + chalk['red']('Catpcha\x20failed,\x20retrying..')), await _0x4343f1['solveRecaptchas'](), await _0x4343f1['click']('.shopify-challenge__button.btn');
          } catch {
            console['log']('catch');
            break;
          }
        }
      }
      await _0x22bd1f(), console['log'](getTime() + '\x20[' + _0x340791['name'] + ']\x20Task\x20' + (_0x2da986 + 0x1) + '\x20:\x20Captcha\x20Solved'), await delay(0x1f4);
      try {
        await _0x4343f1['waitForSelector']('.featured-title'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x340791['name'] + ']\x20Task\x20' + (_0x2da986 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x2da986]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x2da986]['Email'] + ',' + bouncewear[_0x2da986]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x340791['name'] + ']\x20Task\x20' + (_0x2da986 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x2da986]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
      } catch (_0x24338d) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2da986 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x24338d));
      }
    } catch (_0xd8216) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2da986 + 0x1) + '\x20:\x20' + _0xd8216));
    } finally {
      _0x37a3ff && _0x37a3ff['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function pattaAcc(_0x28a2b3, _0x1addad, _0x5009a9) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x5d4fc4 = 0x0; _0x5d4fc4 < _0x5009a9['length']; _0x5d4fc4++) {
    await jig(_0x5009a9, _0x5d4fc4);
    if (_0x5009a9[_0x5d4fc4]['Email'] == '' || _0x5009a9[_0x5d4fc4]['Password'] == '' || _0x5009a9[_0x5d4fc4]['FirstName'] == '' || _0x5009a9[_0x5d4fc4]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5d4fc4 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x5de209 = getProxy()[_0x5d4fc4]['split'](':');
    else
      var _0xba516c = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x5de209 = getProxy()[_0xba516c]['split'](':');
    const _0xd05fff = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x5de209[0x0] + ':' + _0x5de209[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x4c6e03 = await _0xd05fff['newPage']();
      await _0x4c6e03['authenticate']({
        'username': '' + _0x5de209[0x2],
        'password': '' + _0x5de209[0x3]
      }), console['log'](getTime() + '\x20[' + _0x1addad['name'] + ']\x20Task\x20' + (_0x5d4fc4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4c6e03['setRequestInterception'](!![]), _0x4c6e03['on']('request', _0x1aae6c => {
        _0x1aae6c['resourceType']() === 'image' || _0x1aae6c['resourceType']() === 'font' || _0x1aae6c['resourceType']() === 'media' ? _0x1aae6c['abort']() : _0x1aae6c['continue']();
      }), await _0x4c6e03['goto'](_0x28a2b3), await delay(0xbb8), await _0x4c6e03['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x1addad['name'] + ']\x20Task\x20' + (_0x5d4fc4 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4c6e03['type']('#RegisterForm-FirstName', '' + _0x5009a9[_0x5d4fc4]['FirstName']), await delay(0x226), await _0x4c6e03['type']('#RegisterForm-LastName', '' + _0x5009a9[_0x5d4fc4]['LastName']), await delay(0x226), await _0x4c6e03['type']('#RegisterForm-email', '' + _0x5009a9[_0x5d4fc4]['Email']), await delay(0x226), await _0x4c6e03['type']('#RegisterForm-password', '' + _0x5009a9[_0x5d4fc4]['Password']), await delay(0x226), console['log'](getTime() + '\x20[' + _0x1addad['name'] + ']\x20Task\x20' + (_0x5d4fc4 + 0x1) + '\x20:\x20Submitting..'), await _0x4c6e03['$eval']('#RegisterForm', _0x8b98c1 => _0x8b98c1['submit']()), await delay(0x1f40);
      try {
        await _0x4c6e03['waitForSelector']('.home-page-grid__collection'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x1addad['name'] + ']\x20Task\x20' + (_0x5d4fc4 + 0x1) + '\x20:\x20Account\x20' + _0x5009a9[_0x5d4fc4]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x5009a9[_0x5d4fc4]['Email'] + ',' + _0x5009a9[_0x5d4fc4]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x1addad['name'] + ']\x20Task\x20' + (_0x5d4fc4 + 0x1) + '\x20:\x20Account\x20' + _0x5009a9[_0x5d4fc4]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
      } catch (_0x2a6e9f) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5d4fc4 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2a6e9f));
      }
    } catch (_0x35d197) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5d4fc4 + 0x1) + '\x20:\x20' + _0x35d197));
    } finally {
      _0xd05fff && _0xd05fff['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function pattaFunction(_0x36fb51, _0x23c41c, _0x58bff5) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x503156 = 0x0; _0x503156 < _0x58bff5['length']; _0x503156++) {
    await jig(_0x58bff5, _0x503156);
    if (_0x58bff5[_0x503156]['Email'] == '' || _0x58bff5[_0x503156]['Password'] == '' || _0x58bff5[_0x503156]['FirstName'] == '' || _0x58bff5[_0x503156]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x503156 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0xc58513 = getProxy()[_0x503156]['split'](':');
    else
      var _0x33f46c = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0xc58513 = getProxy()[_0x33f46c]['split'](':');
    const _0x43fe65 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0xc58513[0x0] + ':' + _0xc58513[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x114f08 = await _0x43fe65['newPage']();
      await _0x114f08['authenticate']({
        'username': '' + _0xc58513[0x2],
        'password': '' + _0xc58513[0x3]
      }), console['log'](getTime() + '\x20[' + _0x23c41c['name'] + ']\x20Task\x20' + (_0x503156 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x114f08['setRequestInterception'](!![]), _0x114f08['on']('request', _0x10414e => {
        _0x10414e['resourceType']() === 'image' || _0x10414e['resourceType']() === 'font' || _0x10414e['resourceType']() === 'media' ? _0x10414e['abort']() : _0x10414e['continue']();
      }), await _0x114f08['goto']('https://www.patta.nl/nl/account/login', {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), await _0x114f08['waitForSelector']('#CustomerEmail'), console['log'](getTime() + '\x20[' + _0x23c41c['name'] + ']\x20Task\x20' + (_0x503156 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x114f08['type']('#CustomerEmail', '' + _0x58bff5[_0x503156]['Email']), await delay(0x12c), await _0x114f08['type']('#CustomerPassword', '' + _0x58bff5[_0x503156]['Password']), await delay(0x226), await _0x114f08['$eval']('#customer_login', _0xf07200 => _0xf07200['submit']());
      try {
        await _0x114f08['waitForSelector']('#orders'), await delay(0x4b0);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x23c41c['name'] + ']\x20Task\x20' + (_0x503156 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
        continue;
      }
      await _0x114f08['goto']('' + _0x58bff5[_0x503156]['Url'], {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x23c41c['name'] + ']\x20Task\x20' + (_0x503156 + 0x1) + '\x20:\x20Starting\x20Entry');
      try {
        await _0x114f08['waitForSelector']('#email');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x23c41c['name'] + ']\x20Task\x20' + (_0x503156 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
      }
      await _0x114f08['type']('#email', '' + _0x58bff5[_0x503156]['Email']), await delay(0x384), await _0x114f08['type']('#first_name', '' + _0x58bff5[_0x503156]['FirstName']), await delay(0x514), await _0x114f08['type']('#last_name', '' + _0x58bff5[_0x503156]['LastName']), await delay(0x514), await _0x114f08['type']('#street_address', _0x58bff5[_0x503156]['Address1'] + '\x20' + _0x58bff5[_0x503156]['HouseNumber'] + '\x20' + _0x58bff5[_0x503156]['Address2']), await delay(0x2bc), await _0x114f08['type']('#zip_code', '' + _0x58bff5[_0x503156]['Postcode']), await delay(0x320), await _0x114f08['type']('#city', '' + _0x58bff5[_0x503156]['City']), await delay(0x320), await _0x114f08['type']('#bday', '' + _0x58bff5[_0x503156]['Bday']), await delay(0x320), await _0x114f08['type']('#instagram', '' + _0x58bff5[_0x503156]['Follower']), await delay(0x352);
      if (_0x58bff5[_0x503156]['Size'] == 'RANDOM') {
        const _0x4b2f62 = await _0x114f08['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x118fe7 => {
          return _0x118fe7['map'](_0x269af9 => _0x269af9['textContent']);
        });
        var _0x51a269 = Math['round'](Math['random']() * (_0x4b2f62['length'] - 0x1));
        console['log'](getTime() + '\x20[' + _0x23c41c['name'] + ']\x20Task\x20' + (_0x503156 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x4b2f62[_0x51a269]), await _0x114f08['click']('label[data-eu-size=\x22' + _0x4b2f62[_0x51a269] + '\x22]');
      } else {
        console['log'](getTime() + '\x20[' + _0x23c41c['name'] + ']\x20Task\x20' + (_0x503156 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x58bff5[_0x503156]['Size']);
        try {
          await _0x114f08['click']('label[data-eu-size=\x22' + _0x58bff5[_0x503156]['Size'] + '\x22]');
        } catch {
          await _0x114f08['click']('label[data-eu-size=\x22' + _0x58bff5[_0x503156]['Size'] + '.0\x22]');
        }
      }
      await delay(0xbb8), await _0x114f08['$$eval']('.raffle__checkbox-label', _0x4bbcc6 => _0x4bbcc6['forEach'](_0x28bc9b => _0x28bc9b['click']())), await delay(0x7d0), console['log'](getTime() + '\x20[' + _0x23c41c['name'] + ']\x20Task\x20' + (_0x503156 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x114f08['click']('#raffle__form-submit'), await delay(0x1388);
      try {
        await _0x114f08['waitForSelector']('#raffle__confirmation-message-container[class=\x22\x22]'), console['log'](chalk['green'](getTime() + '\x20[' + _0x23c41c['name'] + ']\x20Task\x20' + (_0x503156 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch (_0x100937) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x503156 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x100937));
      }
    } catch (_0xf2899) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x503156 + 0x1) + '\x20:\x20' + _0xf2899));
    } finally {
      _0x43fe65 && _0x43fe65['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function oqiumFunction(_0x591d01, _0x510ce5, _0x17fe96, _0x1d6fbb) {
  await jig(_0x1d6fbb, _0x591d01);
  var _0x34273c = [{
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
        'value': '' + _0x1d6fbb[_0x591d01]['Size']
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
  const _0x2c3faf = { 'embeds': _0x34273c };
  if (settings['useRandomProxy'] = ![])
    var _0x146fa3 = getProxy()[_0x591d01]['split'](':');
  else
    var _0x5111f2 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x146fa3 = getProxy()[_0x5111f2]['split'](':');
  var _0x33b73b = _0x17fe96['data'];
  _0x510ce5 == 'exp' ? _0x33b73b['data']['attributes']['email'] = '' + _0x1d6fbb[_0x591d01]['FirstName'] + _0x1d6fbb[_0x591d01]['LastName'] + settings['catchall'] : _0x33b73b['data']['attributes']['email'] = '' + _0x1d6fbb[_0x591d01]['Email'];
  _0x33b73b['data']['attributes']['properties']['$first_name'] = '' + _0x1d6fbb[_0x591d01]['FirstName'], _0x33b73b['data']['attributes']['properties']['$last_name'] = '' + _0x1d6fbb[_0x591d01]['LastName'], _0x33b73b['data']['attributes']['properties']['$address1'] = _0x1d6fbb[_0x591d01]['Address1'] + '\x20' + _0x1d6fbb[_0x591d01]['Address2'], _0x33b73b['data']['attributes']['properties']['$zip'] = '' + _0x1d6fbb[_0x591d01]['Zip'], _0x33b73b['data']['attributes']['properties']['$city'] = '' + _0x1d6fbb[_0x591d01]['City'], _0x33b73b['data']['attributes']['properties']['$country'] = '' + _0x1d6fbb[_0x591d01]['Country'], _0x33b73b['data']['attributes']['properties']['Size'] = '' + _0x1d6fbb[_0x591d01]['Size'], _0x33b73b['data']['attributes']['properties']['$phone_number'] = '' + _0x1d6fbb[_0x591d01]['Phone'], _0x33b73b['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x1d6fbb[_0x591d01]['Follower'];
  var _0x5ca53e = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x17fe96['url'],
    'headers': _0x17fe96['headers'],
    'body': JSON['stringify'](_0x33b73b),
    'proxy': 'http://' + _0x146fa3[0x2] + ':' + _0x146fa3[0x3] + '@' + _0x146fa3[0x0] + ':' + _0x146fa3[0x1]
  };
  return _0x510ce5 === 'ver' && (_0x5ca53e['method'] = 'GET'), new Promise(function (_0x129be3, _0x4a5d3a) {
    callback = async (_0x202738, _0x3abc6b, _0x434456) => {
      !_0x202738 && _0x3abc6b['statusCode'] == 0xca || !_0x202738 && _0x3abc6b['statusCode'] == 0xc8 ? (await sendWebhook(succesWH, _0x2c3faf), _0x129be3(console['log'](chalk['green'](getTime() + '\x20[' + _0x17fe96['name'] + ']\x20Task\x20' + (_0x591d01 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x34273c[0x0]['title'] = 'Failed\x20entry', _0x34273c[0x0]['description'] = '' + _0x202738, await sendWebhook(errorWH, _0x2c3faf), _0x4a5d3a(console['log'](getTime() + '\x20[' + _0x17fe96['name'] + ']\x20Task\x20' + (_0x591d01 + 0x1) + ':\x20' + _0x202738)));
    };
    try {
      console['log'](getTime() + '\x20[' + _0x17fe96['name'] + ']\x20Task\x20' + (_0x591d01 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x33b73b['data']['attributes']['email']), request(_0x5ca53e, callback);
    } catch (_0x57fa88) {
      console['log'](getTime() + '\x20Task\x20' + (_0x591d01 + 0x1) + ':\x20' + _0x57fa88);
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
      async function _0x29581b() {
        await delay(0x320), console['clear'](), console['log']('Welcome\x20to\x20' + chalk['cyan']('JRaffles();') + '\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
        for (var _0x5c0163 = 0x0; _0x5c0163 < modules['length']; _0x5c0163++) {
          if (modules[_0x5c0163]['name'] === 'Reload\x20Settings' || modules[_0x5c0163]['name'] === 'Change\x20Settings')
            continue;
          else
            console['log']('\x20(' + _0x5c0163 + ')\x20[' + modules[_0x5c0163]['name'] + ']');
        }
        ;
        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (modules['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (modules['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
        if (modules[taskModule]['name'] == 'AFEW\x20Store') {
          taskFunction = await getFunction(modules[taskModule]['modules']);
          var _0xcac349 = modules[taskModule]['modules'][taskFunction];
          console['clear'](), await afewScraper(), await getAfewProduct();
          var _0x3d7d63 = await getTaskFile();
          return await afewFunction(afewProducts[afewProduct], 'nor', _0xcac349, _0x3d7d63), _0x29581b();
        } else {
          if (modules[taskModule]['name'] == 'MAHA\x20Amsterdam') {
            taskFunction = await getFunction(modules[taskModule]['modules']);
            var _0xcac349 = modules[taskModule]['modules'][taskFunction];
            if (taskFunction == 0x0) {
              var _0x5e789d = await getTaskFile();
              console['log']('Starting\x20' + _0x5e789d['length'] + '\x20MAHA\x20Tasks');
              for (var _0x57ae67 = 0x0; _0x57ae67 < _0x5e789d['length']; _0x57ae67++) {
                console['log'](getTime() + '\x20[' + _0xcac349['name'] + ']\x20Task\x20' + (_0x57ae67 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x57ae67, 'nor', _0xcac349, _0x5e789d), console['log'](getTime() + '\x20[' + _0xcac349['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
              ;
              return _0x29581b();
            } else {
              if (taskFunction == 0x1) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x57ae67 = 0x0; _0x57ae67 < links['length']; _0x57ae67++) {
                  _0xcac349['url'] = links[_0x57ae67], console['log'](getTime() + '\x20[' + _0xcac349['name'] + ']\x20Task\x20' + (_0x57ae67 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x57ae67, 'ver', _0xcac349), console['log'](getTime() + '\x20[' + _0xcac349['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
                ;
                return _0x29581b();
              }
            }
          } else {
            if (modules[taskModule]['name'] == 'FOOTSHOP') {
              var _0x508802 = await getTaskFile();
              return console['log'](_0x508802), await footshopModule(_0x508802), await delay(0x1388), _0x29581b();
            } else {
              if (modules[taskModule]['name'] == 'OQIUM\x20Store') {
                taskFunction = await getFunction(modules[taskModule]['modules']);
                var _0xcac349 = modules[taskModule]['modules'][taskFunction];
                console['clear']();
                if (taskFunction == 0x0) {
                  var _0x19fd7f = await getTaskFile();
                  console['log']('Starting\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                  for (var _0x57ae67 = 0x0; _0x57ae67 < _0x19fd7f['length']; _0x57ae67++) {
                    console['log'](getTime() + '\x20[' + _0xcac349['name'] + ']\x20Task\x20' + (_0x57ae67 + 0x1) + ':\x20Getting\x20Session');
                    try {
                      await oqiumFunction(_0x57ae67, 'exp', _0xcac349, _0x19fd7f);
                    } catch {
                      console['log'](chalk['red'](getTime() + '\x20[' + _0xcac349['name'] + ']\x20Task\x20' + (_0x57ae67 + 0x1) + ':\x20Task\x20failed'));
                    }
                    console['log'](getTime() + '\x20[' + _0xcac349['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                  }
                } else {
                  if (taskFunction == 0x1) {
                    console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                    for (var _0x57ae67 = 0x0; _0x57ae67 < links['length']; _0x57ae67++) {
                      try {
                        modules[taskModule]['url'] = links[_0x57ae67], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57ae67 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x57ae67, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                      } catch (_0x5ae33a) {
                      }
                      ;
                    }
                    ;
                  }
                }
                ;
              } else {
                if (modules[taskModule]['name'] == 'BOUNCEWEAR') {
                  taskFunction = await getFunction(modules[taskModule]['modules']);
                  var _0xcac349 = modules[taskModule]['modules'][taskFunction];
                  console['clear']();
                  if (taskFunction == 0x0)
                    await bwAcc('https://bouncewear.com/nl/account/register', _0xcac349);
                  else {
                    if (taskFunction == 0x1) {
                    }
                  }
                  ;
                } else {
                  if (modules[taskModule]['name'] == 'PATTA') {
                    taskFunction = await getFunction(modules[taskModule]['modules']);
                    var _0xcac349 = modules[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x0) {
                      var _0x5ecd1d = await getTaskFile();
                      await pattaAcc('https://patta.nl/account/register', _0xcac349, _0x5ecd1d);
                    } else {
                      if (taskFunction == 0x1) {
                        var _0x5ecd1d = await getTaskFile();
                        await pattaFunction('', _0xcac349);
                      }
                    }
                    ;
                  } else {
                    if (modules[taskModule]['name'] == 'Change\x20Settings') {
                      console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                      var _0x559f44 = 0x0;
                      for (const _0x4d33fe in settings) {
                        console['log']('(' + _0x559f44 + ')\x20' + _0x4d33fe + '\x20:\x20' + settings[_0x4d33fe]), _0x559f44++;
                      }
                      console['log']('');
                      var _0xddcd50 = await getSetting();
                      console['clear'];
                      var _0x579ffe = 0x0;
                      for (var _0x4fd354 in settings) {
                        if (_0xddcd50 == _0x579ffe) {
                          console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x4fd354 + '\x20:'), settings[_0x4fd354] = await getValue(), fs['writeFileSync']('../settings.json', JSON['stringify'](settings));
                          break;
                        } else
                          _0x579ffe++;
                      }
                      return console['log']('Settings\x20Saved!'), await delay(0xbb8), _0x29581b();
                    } else {
                      if (modules[taskModule]['name'] == 'Reload\x20Settings')
                        return console['log']('Reloading\x20settings'), await loadSettings(), _0x29581b();
                      else {
                        if (taskModule == 0x45) {
                          modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                          var _0x458f00 = await getPassword();
                          _0x458f00 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
      await _0x29581b();
    } catch (_0x21003b) {
      return console['log'](_0x21003b), await delay(0x3a98);
    }
}
;
setTitle('JRaffles\x20' + version), loadSettings(), main();