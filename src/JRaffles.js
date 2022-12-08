const puppeteer = require('puppeteer-extra'), RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha'), StealthPlugin = require('puppeteer-extra-plugin-stealth'), chalk = require('chalk'), setTitle = require('node-bash-title'), fs = require('fs'), axios = require('axios'), Papa = require('papaparse');
var random = require('random-name');
const request = require('request'), proxyFile = fs['readFileSync']('../proxies.txt', 'utf-8');
var prompt = require('prompt');
const j = request['jar']();
var settings = {};
const succesWH = 'https://discord.com/api/webhooks/1044989608708030595/HUZ2q06RoQQ24n_rWWEsL6AgM5yXEeUi2SO9VyOLuQgGBeHIlXpPl9Xr5jYMLXwJKwPS', errorWH = 'https://discord.com/api/webhooks/1045001962262900766/ZXWdz3BSjNO08alABR8ERNBgR2SNcydTW-9XxsFuphHYfwHaojLBu3hkw1Ygi3MxOZdz';
var webhook;
const package = JSON['parse'](fs['readFileSync']('../package.json', 'utf-8')), version = package['version'];
var taskCSV, taskFiles, licenseKey, username;
const API_KEY = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
var catchall = settings['catchall'];
let afew = [], maha = [], footshop = [], auth = ![];
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', numbers = '0123456789';
var lettersArray = letters['split']('');
const AutoGitUpdate = require('auto-git-update'), { PageEmittedEvents } = require('puppeteer'), { getRandomValues } = require('crypto'), { resolve } = require('path'), config = {
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
  'executeOnComplete': 'JRaffles.exe'
}, updater = new AutoGitUpdate(config);
async function loadSettings() {
  taskFiles = fs['readdirSync']('../tasks'), settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), !settings['delay'] && (settings['delay'] = 0x2710, fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['captchaKey'] && (settings['captchaKey'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['useRandomProxy'] && (settings['useRandomProxy'] = ![], fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['webhook'] && (settings['webhook'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), webhook = settings['webhook'], licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x45f816 => new Promise(_0x261317 => setTimeout(_0x261317, _0x45f816));
async function getLicense(_0x385685) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x385685, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x171bd4 => _0x171bd4['data'])['catch'](() => null);
}
;
async function checkLicense(_0xc2054c) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x44b3a1 = await getLicense(_0xc2054c);
  username = JSON['stringify'](_0x44b3a1['user']['username']);
  if (!_0x44b3a1)
    return console['log']('License\x20not\x20found');
  if (!_0x44b3a1['user'])
    return console['log']('License\x20not\x20bound');
  return _0x44b3a1['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x3129c6 = await prompt['get']('Module');
  return console['clear'](), _0x3129c6['Module'];
}
;
async function getSetting() {
  var _0x4dd448 = await prompt['get']('Setting');
  return console['clear'](), _0x4dd448['Setting'];
}
async function getTaskFile() {
  console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
  for (var _0xada4c8 = 0x0; _0xada4c8 < taskFiles['length']; _0xada4c8++) {
    console['log']('\x20(' + _0xada4c8 + ')\x20' + taskFiles[_0xada4c8]);
  }
  console['log']('');
  var _0x2418dd = await prompt['get']('Task'), _0x589d75 = fs['readFileSync']('../tasks/' + taskFiles[_0x2418dd['Task']], 'utf-8');
  return taskCSV = Papa['parse'](_0x589d75, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x2418dd['Task']])), taskCSV;
}
async function getProxyFile() {
  console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
  for (var _0x425a78 = 0x0; _0x425a78 < taskFiles['length']; _0x425a78++) {
    console['log']('\x20(' + _0x425a78 + ')\x20' + taskFiles[_0x425a78]);
  }
  console['log']('');
  var _0x1e2246 = await prompt['get']('Task'), _0x264067 = fs['readFileSync']('../tasks/' + taskFiles[_0x1e2246['Task']], 'utf-8');
  return taskCSV = Papa['parse'](_0x264067, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x1e2246['Task']])), taskCSV;
}
async function getValue() {
  var _0x32b4fa = await prompt['get']('Value');
  return console['clear'](), _0x32b4fa['Value'];
}
async function getFunction(_0x4a9681) {
  console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
  for (var _0x1305d2 = 0x0; _0x1305d2 < _0x4a9681['length']; _0x1305d2++) {
    console['log']('\x20(' + _0x1305d2 + ')\x20[' + _0x4a9681[_0x1305d2]['name'] + ']');
  }
  ;
  console['log']('');
  var _0x5ed4f7 = await prompt['get']('Module');
  return _0x5ed4f7['Module'];
}
async function getPassword() {
  var _0x8e8a03 = await prompt['get']('Password');
  return console['clear'](), _0x8e8a03['Password'];
}
;
async function getLinks() {
  var _0x1d01c7 = await prompt['get']('Links');
  return _0x1d01c7['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x1a8b16 = 0x0; _0x1a8b16 < afewProducts['length']; _0x1a8b16++) {
    console['log']('\x20(' + _0x1a8b16 + ')\x20' + afewProducts[_0x1a8b16]);
  }
  ;
  console['log']();
  let _0x29a129 = await prompt['get']('Product');
  console['clear'](), afewProduct = _0x29a129['Product'];
  return;
}
;
function getTime() {
  var _0x4a7336 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x4a7336;
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
  {
    'name': 'JD',
    'modules': [{ 'name': 'JD\x20Raffle\x20Entries' }]
  },
  { 'name': 'Change\x20Settings' },
  { 'name': 'Reload\x20Settings' }
];
async function sendWebhook(_0x14e958, _0x2fa7d9) {
  let _0x2f6889 = { 'headers': { 'content-type': 'application/json' } };
  await axios['post'](_0x14e958, _0x2fa7d9, _0x2f6889);
}
;
async function jig(_0x3c9ed7, _0xb74a81) {
  var _0xd8044 = _0x3c9ed7[_0xb74a81]['Address1']['split'](''), _0x38a516 = _0x3c9ed7[_0xb74a81]['Address2']['split'](''), _0x433817 = _0x3c9ed7[_0xb74a81]['Email']['split']('@');
  for (var _0x13c1ea = 0x0; _0x13c1ea < _0xd8044['length']; _0x13c1ea++) {
    if (_0xd8044[_0x13c1ea] == 'X') {
      var _0x2f20a5 = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0xd8044[_0x13c1ea] = lettersArray[_0x2f20a5];
    }
  }
  ;
  for (var _0x13c1ea = 0x0; _0x13c1ea < _0x38a516['length']; _0x13c1ea++) {
    if (_0x38a516[_0x13c1ea] == 'X') {
      var _0x2f20a5 = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x38a516[_0x13c1ea] = lettersArray[_0x2f20a5];
    }
  }
  ;
  _0x3c9ed7[_0xb74a81]['FirstName'] == 'RANDOM' && (_0x3c9ed7[_0xb74a81]['FirstName'] = random['first']());
  _0x3c9ed7[_0xb74a81]['LastName'] == 'RANDOM' && (_0x3c9ed7[_0xb74a81]['LastName'] = random['last']());
  _0x433817[0x0] == 'RANDOM' ? _0x433817[0x0] = '' + random['first']() + random['last']() + '@' : _0x433817[0x0] = _0x433817[0x0] + '@';
  _0x3c9ed7[_0xb74a81]['Email'] = _0x433817['join'](''), _0x3c9ed7[_0xb74a81]['Address1'] = _0xd8044['join'](''), _0x3c9ed7[_0xb74a81]['Address2'] = _0x38a516['join']('');
  return;
}
;
function getProxy() {
  let _0x418fff = proxyFile['split']('\x0a'), _0x1dfbb9 = _0x418fff['map']((_0x6aa100, _0x559bbb) => {
    sanatizeProxy = _0x6aa100['replace']('\x0d', '');
    if (_0x418fff[_0x559bbb + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x1dfbb9;
}
;
async function afewScraper() {
  var _0x30273e = getProxy()[0x1]['split'](':');
  const _0xef7d54 = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x30273e[0x0] + ':' + _0x30273e[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x3d1ab0 = await _0xef7d54['newPage']();
    await _0x3d1ab0['authenticate']({
      'username': '' + _0x30273e[0x2],
      'password': '' + _0x30273e[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x3d1ab0['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3d1ab0['setRequestInterception'](!![]), _0x3d1ab0['on']('request', _0x4297e9 => {
      _0x4297e9['resourceType']() === 'image' || _0x4297e9['resourceType']() === 'font' || _0x4297e9['resourceType']() === 'media' ? _0x4297e9['abort']() : _0x4297e9['continue']();
    }), await _0x3d1ab0['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x3d1ab0['waitForTimeout'](0xbb8), await _0x3d1ab0['waitForSelector']('.product-card');
    const _0x526f44 = await _0x3d1ab0['$$eval']('a.product-card', _0x1a91d5 => {
      return _0x1a91d5['map'](_0x5170b8 => _0x5170b8['href']);
    });
    return afewProducts = _0x526f44;
  } catch (_0x388984) {
    console['log']('\x20' + _0x388984);
  } finally {
    _0xef7d54['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x44948c, _0x5d5f1d, _0x46ed4a, _0x15a2ef) {
  await jig(_0x15a2ef, _0x44948c);
  var _0x3ddc58 = [{
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
        'value': '' + oqium[_0x44948c]['Size']
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
  const _0x5a5530 = { 'embeds': _0x3ddc58 };
  if (settings['useRandomProxy'] = ![])
    var _0x555048 = getProxy()[_0x44948c]['split'](':');
  else
    var _0x1d8db2 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x555048 = getProxy()[_0x1d8db2]['split'](':');
  var _0x1f5427 = _0x46ed4a['data'];
  _0x5d5f1d == 'exp' ? _0x1f5427['data']['attributes']['email'] = '' + _0x15a2ef[_0x44948c]['FirstName'] + _0x15a2ef[_0x44948c]['LastName'] + settings['catchall'] : _0x1f5427['data']['attributes']['email'] = '' + _0x15a2ef[_0x44948c]['Email'];
  _0x1f5427['data']['attributes']['properties']['$first_name'] = '' + _0x15a2ef[_0x44948c]['FirstName'], _0x1f5427['data']['attributes']['properties']['$last_name'] = '' + _0x15a2ef[_0x44948c]['LastName'], _0x1f5427['data']['attributes']['properties']['$address1'] = _0x15a2ef[_0x44948c]['Address1'] + '\x20' + _0x15a2ef[_0x44948c]['Address2'], _0x1f5427['data']['attributes']['properties']['$zip'] = '' + _0x15a2ef[_0x44948c]['Zip'], _0x1f5427['data']['attributes']['properties']['$city'] = '' + _0x15a2ef[_0x44948c]['City'], _0x1f5427['data']['attributes']['properties']['$country'] = '' + _0x15a2ef[_0x44948c]['Country'], _0x1f5427['data']['attributes']['properties']['Size'] = '' + _0x15a2ef[_0x44948c]['Size'], _0x1f5427['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x15a2ef[_0x44948c]['Follower'];
  var _0x133a82 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x46ed4a['url'],
    'headers': _0x46ed4a['headers'],
    'body': JSON['stringify'](_0x1f5427),
    'proxy': 'http://' + _0x555048[0x2] + ':' + _0x555048[0x3] + '@' + _0x555048[0x0] + ':' + _0x555048[0x1]
  };
  return _0x5d5f1d === 'ver' && (_0x133a82['method'] = 'GET'), new Promise(function (_0x380f02, _0x383268) {
    callback = async (_0x3a3535, _0x2aeeee, _0x1940b4) => {
      !_0x3a3535 && _0x2aeeee['statusCode'] == 0xca || !_0x3a3535 && _0x2aeeee['statusCode'] == 0xc8 ? _0x380f02(console['log'](chalk['green'](getTime() + '\x20[' + _0x46ed4a['name'] + ']\x20Task\x20' + (_0x44948c + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x3ddc58[0x0]['title'] = 'Failed\x20entry', _0x3ddc58[0x0]['description'] = '' + _0x3a3535, await sendWebhook(errorWH, _0x5a5530), _0x383268(console['log'](getTime() + '\x20[' + _0x46ed4a['name'] + ']\x20Task\x20' + (_0x44948c + 0x1) + ':\x20' + _0x3a3535)));
    };
    try {
      _0x5d5f1d === 'ver' ? console['log'](getTime() + '\x20[' + _0x46ed4a['name'] + ']\x20Task\x20' + (_0x44948c + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + _0x46ed4a['name'] + ']\x20Task\x20' + (_0x44948c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1f5427['data']['attributes']['email']), request(_0x133a82, callback);
    } catch (_0x4e8d4c) {
      console['log'](getTime() + '\x20Task\x20' + (_0x44948c + 0x1) + ':\x20' + _0x4e8d4c);
    }
  });
}
;
async function footshopModule(_0x1ac39a) {
  var _0x5f44f9;
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x10c282 = 0x0; _0x10c282 < _0x1ac39a['length']; _0x10c282++) {
    await jig(_0x1ac39a, _0x10c282);
    if (_0x1ac39a[_0x10c282]['Email'] == '' || _0x1ac39a[_0x10c282]['FirstName'] == '' || _0x1ac39a[_0x10c282]['LastName'] == '' || _0x1ac39a[_0x10c282]['Country'] == '' || _0x1ac39a[_0x10c282]['Size'] == '' || _0x1ac39a[_0x10c282]['Address1'] == '' || _0x1ac39a[_0x10c282]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    console['log'](_0x1ac39a[_0x10c282]['Url']);
    async function _0x6fda0c() {
      var _0x385caf = await axios['get']('https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_')['then'](_0x519eb3 => _0x519eb3['data'])['catch'](() => undefined);
      console['log'](_0x385caf);
      var _0x59f51e = _0x385caf['sizeSets']['Men']['sizes'];
      _0x59f51e['length'] == 0x0 && (_0x59f51e = _0x385caf['sizeSets']['Women']['sizes'], _0x59f51e['length'] == 0x0 && (_0x59f51e = _0x385caf['sizeSets']['Unisex']['sizes'], _0x59f51e['length'] == 0x0 && (_0x59f51e = _0x385caf['sizeSets']['Kids']['sizes'])));
      ;
      async function _0x199c4a() {
        for (var _0x5ef53f = 0x0; _0x5ef53f < _0x59f51e['length']; _0x5ef53f++) {
          if (_0x59f51e[_0x5ef53f]['eur'] == _0x1ac39a[_0x10c282]['Size'])
            return _0x5f44f9 = _0x59f51e[_0x5ef53f]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x20Size\x20' + _0x1ac39a[_0x10c282]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x533ca4 = await _0x199c4a();
      if (_0x533ca4 == ![])
        return ![];
    }
    let _0x52341a = await _0x6fda0c();
    if (_0x52341a == ![])
      continue;
    if (_0x1ac39a[_0x10c282]['Email'] == '' || _0x1ac39a[_0x10c282]['FirstName'] == '' || _0x1ac39a[_0x10c282]['LastName'] == '' || _0x1ac39a[_0x10c282]['Country'] == '' || _0x1ac39a[_0x10c282]['Size'] == '' || _0x1ac39a[_0x10c282]['Address1'] == '' || _0x1ac39a[_0x10c282]['Zip'] == '' || _0x1ac39a[_0x10c282]['Phone'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x540284 = 'https://releases.footshop.com/register/' + _0x1ac39a[_0x10c282]['Url'] + '/Men/' + _0x5f44f9;
    if (settings['useRandomProxy'] = ![])
      var _0x353e8b = getProxy()[_0x10c282]['split'](':');
    else
      var _0x3cfd5a = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x353e8b = getProxy()[_0x3cfd5a]['split'](':');
    const _0x4b3c98 = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x353e8b[0x0] + ':' + _0x353e8b[0x1]]
    });
    try {
      const _0x149f1f = await _0x4b3c98['newPage']();
      await _0x149f1f['authenticate']({
        'username': '' + _0x353e8b[0x2],
        'password': '' + _0x353e8b[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x149f1f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x149f1f['setRequestInterception'](!![]), _0x149f1f['on']('request', _0x2f686b => {
        _0x2f686b['resourceType']() === 'image' || _0x2f686b['resourceType']() === 'font' || _0x2f686b['resourceType']() === 'media' ? _0x2f686b['abort']() : _0x2f686b['continue']();
      }), await _0x149f1f['goto']('' + _0x540284 + _0x5f44f9), await _0x149f1f['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x149f1f['type']('input[name=\x22email\x22]', '' + _0x1ac39a[_0x10c282]['Email']), await delay(0x640), await _0x149f1f['type']('input[name=\x22phone\x22]', '' + _0x1ac39a[_0x10c282]['Phone']), await delay(0x4b0), await _0x149f1f['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
      try {
        await _0x149f1f['type']('input[name=\x22firstName\x22]', '' + _0x1ac39a[_0x10c282]['FirstName']), await delay(0x258);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
        continue;
      }
      await _0x149f1f['type']('input[name=\x22lastName\x22]', '' + _0x1ac39a[_0x10c282]['LastName']), await delay(0xc8), await _0x149f1f['type']('input[name=\x22instagramUsername\x22]', '' + _0x1ac39a[_0x10c282]['Follower']), await delay(0x4b0), await _0x149f1f['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x149f1f['select']('select[name=\x22country\x22]', '' + _0x1ac39a[_0x10c282]['Country']), await delay(0x2bc), await _0x149f1f['type']('input[name=\x22streetName\x22]', '' + _0x1ac39a[_0x10c282]['Address1']), await delay(0x258), await _0x149f1f['type']('input[name=\x22houseNumber\x22]', '' + _0x1ac39a[_0x10c282]['HouseNumber'] + _0x1ac39a[_0x10c282]['Address2']), await delay(0xc8), await _0x149f1f['type']('input[name=\x22postalCode\x22]', '' + _0x1ac39a[_0x10c282]['Zip']), await delay(0x1f4), await _0x149f1f['type']('input[name=\x22city\x22]', '' + _0x1ac39a[_0x10c282]['City']), await delay(0x4b0), await _0x149f1f['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x149f1f['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x149f1f['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x149f1f['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x149f1f['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x149f1f['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x4b0), await _0x149f1f['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x1ac39a[_0x10c282]['CardNumber']), await delay(0x320), await _0x149f1f['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x1ac39a[_0x10c282]['ExpiryDate']), await delay(0x4b0), await _0x149f1f['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x1ac39a[_0x10c282]['CVV']), await delay(0x226), await _0x149f1f['type']('input[name=\x22holderName\x22]', '' + _0x1ac39a[_0x10c282]['NameOnCard']), await delay(0x226), await _0x149f1f['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x20Awaiting\x203DS');
      try {
        await _0x149f1f['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await delay(0xbb8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x203DS\x20Failed'));
      }
    } catch (_0x23f145) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x10c282 + 0x1) + '\x20:\x20' + _0x23f145);
    } finally {
      _0x4b3c98['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x37e3c0, _0x4cec9c, _0x784384, _0x169580) => {
  for (var _0x575016 = 0x0; _0x575016 < _0x169580['length']; _0x575016++) {
    await jig(_0x169580, _0x575016);
    var _0x4701dc = [{
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
          'value': '' + _0x37e3c0
        },
        {
          'name': 'Size',
          'value': '' + _0x169580[_0x575016]['Size']
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
    const _0x284849 = { 'embeds': _0x4701dc };
    if (_0x169580[_0x575016]['Email'] == '' || _0x169580[_0x575016]['FirstName'] == '' || _0x169580[_0x575016]['LastName'] == '' || _0x169580[_0x575016]['Country'] == '' || _0x169580[_0x575016]['Size'] == '' || _0x169580[_0x575016]['Address1'] == '' || _0x169580[_0x575016]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + _0x784384['name'] + ']\x20Task\x20' + (_0x575016 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x58480c = getProxy()[_0x575016]['split'](':');
    else
      var _0x1dc5e6 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x58480c = getProxy()[_0x1dc5e6]['split'](':');
    const _0x2869ef = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x58480c[0x0] + ':' + _0x58480c[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x5bf866 = await _0x2869ef['newPage']();
      await _0x5bf866['setDefaultNavigationTimeout'](0x1d4c0), await _0x5bf866['authenticate']({
        'username': '' + _0x58480c[0x2],
        'password': '' + _0x58480c[0x3]
      }), console['log'](getTime() + '\x20[' + _0x784384['name'] + ']\x20Task\x20' + (_0x575016 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5bf866['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5bf866['setRequestInterception'](!![]), _0x5bf866['on']('request', _0x3e05c8 => {
        _0x3e05c8['resourceType']() === 'image' || _0x3e05c8['resourceType']() === 'font' || _0x3e05c8['resourceType']() === 'media' ? _0x3e05c8['abort']() : _0x3e05c8['continue']();
      }), await _0x5bf866['goto'](_0x37e3c0), console['log'](getTime() + '\x20[' + _0x784384['name'] + ']\x20Task\x20' + (_0x575016 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x5bf866['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + _0x784384['name'] + ']\x20Task\x20' + (_0x575016 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x5bf866['waitForTimeout'](0x320);
      if (_0x169580[_0x575016]['Size'] == 'RANDOM') {
        console['log'](getTime() + '\x20[' + _0x784384['name'] + ']\x20Task\x20' + (_0x575016 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
        const _0xeb9e3b = await _0x5bf866['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x3b24f2 => {
          return _0x3b24f2['map'](_0x215311 => _0x215311['href']);
        });
        var _0x152581 = Math['round'](Math['random']() * (_0xeb9e3b['length'] - 0x1));
        await _0x5bf866['goto']('' + _0xeb9e3b[_0x152581]);
      } else {
        console['log'](getTime() + '\x20[' + _0x784384['name'] + ']\x20Task\x20' + (_0x575016 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x169580[_0x575016]['Size']);
        const _0x16a791 = await _0x5bf866['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x17c547 => {
          return _0x17c547['map'](_0x5e6711 => _0x5e6711['href']);
        });
        await _0x5bf866['hover']('.release-type');
        try {
          await _0x5bf866['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x169580[_0x575016]['Size'] + '\x22]'), await _0x5bf866['waitForTimeout'](0x320), await _0x5bf866['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x169580[_0x575016]['Size'] + '\x22]');
        } catch (_0x1936bb) {
          console['log'](chalk['red'](getTime() + '\x20[' + _0x784384['name'] + ']\x20Task\x20' + (_0x575016 + 0x1) + '\x20:\x20' + _0x1936bb + '\x20Size\x20not\x20found')), _0x4701dc[0x0]['title'] = 'Failed\x20entry', _0x4701dc[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x284849);
          continue;
        }
      }
      await _0x5bf866['waitForTimeout'](0x258), await _0x5bf866['type']('#raffle-instagram', '' + _0x169580[_0x575016]['Follower'], { 'delay': 0x64 }), await _0x5bf866['waitForTimeout'](0x384), await _0x5bf866['click']('#raffle-terms'), await _0x5bf866['waitForTimeout'](0x384), await _0x5bf866['evaluate'](() => {
        const _0x4648f8 = document['querySelector']('button.btn[name=\x27add\x27]');
        _0x4648f8['click']();
      }), await _0x5bf866['waitForTimeout'](0xbb8), await _0x5bf866['waitForSelector']('#checkout_email'), await delay(0x3e8), console['log'](getTime() + '\x20[' + _0x784384['name'] + ']\x20Task\x20' + (_0x575016 + 0x1) + '\x20:\x20Filling\x20Information');
      _0x4cec9c == 'sec' ? await _0x5bf866['type']('#checkout_email', '' + _0x169580[_0x575016]['FirstName'] + _0x169580[_0x575016]['LastName'] + settings['catchall'], 0x32) : await _0x5bf866['type']('#checkout_email', '' + _0x169580[_0x575016]['Email'], 0x32);
      await delay(0x320), await _0x5bf866['select']('#checkout_shipping_address_country', '' + _0x169580[_0x575016]['Country']), await _0x5bf866['waitForTimeout'](0x258), await _0x5bf866['type']('#checkout_shipping_address_first_name', '' + _0x169580[_0x575016]['FirstName']), await _0x5bf866['waitForTimeout'](0x320), await _0x5bf866['type']('#checkout_shipping_address_last_name', '' + _0x169580[_0x575016]['LastName']), await _0x5bf866['waitForTimeout'](0x2bc), await _0x5bf866['type']('#checkout_shipping_address_address1', _0x169580[_0x575016]['Address1'] + '\x20' + _0x169580[_0x575016]['HouseNumber']), await _0x5bf866['waitForTimeout'](0x2bc), await _0x5bf866['type']('#checkout_shipping_address_address2', '' + _0x169580[_0x575016]['Address2']), await _0x5bf866['waitForTimeout'](0x2bc);
      _0x169580[_0x575016]['Postcode'] == undefined ? await _0x5bf866['type']('#checkout_shipping_address_zip', '' + _0x169580[_0x575016]['Zip']) : await _0x5bf866['type']('#checkout_shipping_address_zip', '' + _0x169580[_0x575016]['Postcode']);
      await _0x5bf866['waitForTimeout'](0x2bc), await _0x5bf866['type']('#checkout_shipping_address_city', '' + _0x169580[_0x575016]['City']), await _0x5bf866['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + _0x784384['name'] + ']\x20Task\x20' + (_0x575016 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x5bf866['evaluate'](() => {
        const _0x3a1c3a = document['querySelector']('#continue_button');
        for (var _0x3d4473 = 0x0; _0x3d4473 < 0x5; _0x3d4473++) {
          if (_0x3a1c3a) {
            _0x3a1c3a['click']();
            break;
          } else
            delay(0xfa0);
        }
      }), await _0x5bf866['waitForTimeout'](0x1194), await _0x5bf866['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), _0x5bf866['evaluate'](() => {
        const _0x45b8a0 = document['querySelector']('#continue_button');
        for (var _0x50cf17 = 0x0; _0x50cf17 < 0x5; _0x50cf17++) {
          if (_0x45b8a0) {
            _0x45b8a0['click']();
            break;
          } else
            delay(0xfa0);
        }
      }), await _0x5bf866['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + _0x784384['name'] + ']\x20Task\x20' + (_0x575016 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x5bf866['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x5bf866['evaluate'](() => {
        const _0x11dde2 = document['querySelector']('#continue_button');
        for (var _0x114b8e = 0x0; _0x114b8e < 0x5; _0x114b8e++) {
          if (_0x11dde2) {
            _0x11dde2['click']();
            break;
          } else
            delay(0xfa0);
        }
      }), await _0x5bf866['waitForTimeout'](0x1194), await _0x5bf866['waitForSelector']('#continue_button'), _0x5bf866['evaluate'](() => {
        const _0x426785 = document['querySelector']('#continue_button');
        for (var _0x3bad82 = 0x0; _0x3bad82 < 0x5; _0x3bad82++) {
          if (_0x426785) {
            _0x426785['click']();
            break;
          } else
            delay(0xfa0);
        }
      });
      try {
        await _0x5bf866['waitForSelector']('div[data-step=\x22thank_you\x22]');
      } catch (_0x5ecd6a) {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x784384['name'] + ']\x20Task\x20' + (_0x575016 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x5ecd6a));
      }
      console['log'](chalk['green'](getTime() + '\x20[' + _0x784384['name'] + ']\x20Task\x20' + (_0x575016 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x284849);
    } catch (_0x158bb6) {
      console['log'](chalk['red'](getTime() + '\x20[' + _0x784384['name'] + ']\x20Task\x20' + (_0x575016 + 0x1) + '\x20:\x20' + _0x158bb6)), _0x4701dc[0x0]['title'] = 'Failed\x20entry', _0x4701dc[0x0]['description'] = '' + _0x158bb6, await sendWebhook(errorWH, _0x284849);
    } finally {
      _0x2869ef && _0x2869ef['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function kickzAcc(_0x4c4610) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x3ade64 = 0x0; _0x3ade64 < kickz['length']; _0x3ade64++) {
    await jig(kickz, _0x3ade64);
    if (kickz[_0x3ade64]['Email'] == '' || kickz[_0x3ade64]['Password'] == '' || kickz[_0x3ade64]['FirstName'] == '' || kickz[_0x3ade64]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x2b415c = getProxy()[_0x3ade64]['split'](':');
    else
      var _0x35a691 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x2b415c = getProxy()[_0x35a691]['split'](':');
    const _0x19e871 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x2b415c[0x0] + ':' + _0x2b415c[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x2117f9 = await _0x19e871['newPage']();
      await _0x2117f9['authenticate']({
        'username': '' + _0x2b415c[0x2],
        'password': '' + _0x2b415c[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2117f9['setRequestInterception'](!![]), _0x2117f9['on']('request', _0x3fca77 => {
        _0x3fca77['resourceType']() === 'image' || _0x3fca77['resourceType']() === 'font' || _0x3fca77['resourceType']() === 'media' ? _0x3fca77['abort']() : _0x3fca77['continue']();
      }), await _0x2117f9['goto'](_0x4c4610), await delay(0xbb8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x2117f9['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2117f9['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2117f9['waitForSelector']('#button-register'), await _0x2117f9['click']('#button-register'), await _0x2117f9['waitForSelector']('#customer_salutation'), await _0x2117f9['select']('#customer_salutation', 'mr'), await delay(0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x2117f9['waitForSelector']('#customer_firstname'), await _0x2117f9['type']('#customer_firstname', '' + kickz[_0x3ade64]['FirstName']), await delay(0x352), await _0x2117f9['waitForSelector']('#customer_lastname'), await _0x2117f9['type']('#customer_lastname', '' + kickz[_0x3ade64]['LastName']), await delay(0x352), await _0x2117f9['type']('#email-input', '' + kickz[_0x3ade64]['Email']), await delay(0x352), await _0x2117f9['type']('#email-confirm-input', '' + kickz[_0x3ade64]['Email']), await delay(0x352), await _0x2117f9['type']('#register-password', '' + kickz[_0x3ade64]['Password']), await delay(0x352), await _0x2117f9['type']('#password-confirm', '' + kickz[_0x3ade64]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x2117f9['click']('#consent'), await delay(0x1f4);
      const _0x26609b = await _0x2117f9['$']('div.inputErrorMsg.b-form_section-message');
      if (_0x26609b) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
        continue;
      }
      await _0x2117f9['click']('#buttonRegister'), await _0x2117f9['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x3ade64]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
      async function _0x32fcfb() {
        console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
        var _0x24cf1c = await prompt['get']('Code');
        return _0x24cf1c['Code'];
      }
      ;
      code = await _0x32fcfb(), delay(0x320), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20Verifying..'), await _0x2117f9['type']('#verificationCode', code), await delay(0x1f4), await _0x2117f9['click']('#buttonVerify'), await delay(0x190), await _0x2117f9['click']('#buttonVerify'), await delay(0x3e8);
      try {
        await _0x2117f9['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x3ade64]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + kickz[_0x3ade64]['Email'] + ',' + kickz[_0x3ade64]['Password'] + ','), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x3ade64]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
      }
    } catch (_0x59df39) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ade64 + 0x1) + '\x20:\x20' + _0x59df39));
    } finally {
      _0x19e871 && _0x19e871['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
}
async function bwAcc(_0x235547, _0x6de41e) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x2bfdca = 0x0; _0x2bfdca < bouncewear['length']; _0x2bfdca++) {
    await jig(bouncewear, _0x2bfdca);
    if (bouncewear[_0x2bfdca]['Email'] == '' || bouncewear[_0x2bfdca]['Password'] == '' || bouncewear[_0x2bfdca]['FirstName'] == '' || bouncewear[_0x2bfdca]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2bfdca + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x435f9d = getProxy()[_0x2bfdca]['split'](':');
    else
      var _0x3bbc49 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x435f9d = getProxy()[_0x3bbc49]['split'](':');
    const _0x4eba72 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x435f9d[0x0] + ':' + _0x435f9d[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x428370 = await _0x4eba72['newPage']();
      await _0x428370['authenticate']({
        'username': '' + _0x435f9d[0x2],
        'password': '' + _0x435f9d[0x3]
      }), console['log'](getTime() + '\x20[' + _0x6de41e['name'] + ']\x20Task\x20' + (_0x2bfdca + 0x1) + '\x20:\x20Getting\x20Session'), await _0x428370['setRequestInterception'](!![]), _0x428370['on']('request', _0x407721 => {
        _0x407721['resourceType']() === 'image' || _0x407721['resourceType']() === 'font' || _0x407721['resourceType']() === 'media' ? _0x407721['abort']() : _0x407721['continue']();
      }), await _0x428370['goto'](_0x235547), await delay(0xbb8), await _0x428370['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x6de41e['name'] + ']\x20Task\x20' + (_0x2bfdca + 0x1) + '\x20:\x20Filling\x20information'), await _0x428370['type']('#RegisterForm-FirstName', '' + bouncewear[_0x2bfdca]['FirstName']), await delay(0x226), await _0x428370['type']('#RegisterForm-LastName', '' + bouncewear[_0x2bfdca]['LastName']), await delay(0x226), await _0x428370['type']('#RegisterForm-email', '' + bouncewear[_0x2bfdca]['Email']), await delay(0x226), await _0x428370['type']('#RegisterForm-password', '' + bouncewear[_0x2bfdca]['Password']), await delay(0x226), await _0x428370['click']('#marketing'), console['log'](getTime() + '\x20[' + _0x6de41e['name'] + ']\x20Task\x20' + (_0x2bfdca + 0x1) + '\x20:\x20Submitting..'), await _0x428370['$eval']('#RegisterForm', _0x444f36 => _0x444f36['submit']()), await delay(0x1f40), console['log'](getTime() + '\x20[' + _0x6de41e['name'] + ']\x20Task\x20' + (_0x2bfdca + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x428370['solveRecaptchas'](), await _0x428370['click']('.shopify-challenge__button.btn');
      async function _0x12e2eb() {
        for (var _0x257532 = 0x0; _0x257532 < 0x4; _0x257532++) {
          try {
            console['log']('try'), await _0x428370['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](getTime() + '\x20[' + _0x6de41e['name'] + ']\x20Task\x20' + (_0x2bfdca + 0x1) + '\x20:\x20' + chalk['red']('Catpcha\x20failed,\x20retrying..')), await _0x428370['solveRecaptchas'](), await _0x428370['click']('.shopify-challenge__button.btn');
          } catch {
            console['log']('catch');
            break;
          }
        }
      }
      await _0x12e2eb(), console['log'](getTime() + '\x20[' + _0x6de41e['name'] + ']\x20Task\x20' + (_0x2bfdca + 0x1) + '\x20:\x20Captcha\x20Solved'), await delay(0x1f4);
      try {
        await _0x428370['waitForSelector']('.featured-title'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x6de41e['name'] + ']\x20Task\x20' + (_0x2bfdca + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x2bfdca]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x2bfdca]['Email'] + ',' + bouncewear[_0x2bfdca]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x6de41e['name'] + ']\x20Task\x20' + (_0x2bfdca + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x2bfdca]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
      } catch (_0x672c97) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2bfdca + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x672c97));
      }
    } catch (_0x5f334b) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2bfdca + 0x1) + '\x20:\x20' + _0x5f334b));
    } finally {
      _0x4eba72 && _0x4eba72['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function pattaAcc(_0x2f58ac, _0x3bfa23, _0x569a19) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x4401bf = 0x0; _0x4401bf < _0x569a19['length']; _0x4401bf++) {
    await jig(_0x569a19, _0x4401bf);
    if (_0x569a19[_0x4401bf]['Email'] == '' || _0x569a19[_0x4401bf]['Password'] == '' || _0x569a19[_0x4401bf]['FirstName'] == '' || _0x569a19[_0x4401bf]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4401bf + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x5c8bf9 = getProxy()[_0x4401bf]['split'](':');
    else
      var _0x13e352 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x5c8bf9 = getProxy()[_0x13e352]['split'](':');
    const _0x653be4 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x5c8bf9[0x0] + ':' + _0x5c8bf9[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x59d977 = await _0x653be4['newPage']();
      await _0x59d977['authenticate']({
        'username': '' + _0x5c8bf9[0x2],
        'password': '' + _0x5c8bf9[0x3]
      }), console['log'](getTime() + '\x20[' + _0x3bfa23['name'] + ']\x20Task\x20' + (_0x4401bf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x59d977['setRequestInterception'](!![]), _0x59d977['on']('request', _0x35b002 => {
        _0x35b002['resourceType']() === 'image' || _0x35b002['resourceType']() === 'font' || _0x35b002['resourceType']() === 'media' ? _0x35b002['abort']() : _0x35b002['continue']();
      }), await _0x59d977['goto'](_0x2f58ac), await delay(0xbb8), await _0x59d977['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x3bfa23['name'] + ']\x20Task\x20' + (_0x4401bf + 0x1) + '\x20:\x20Filling\x20information'), await _0x59d977['type']('#RegisterForm-FirstName', '' + _0x569a19[_0x4401bf]['FirstName']), await delay(0x226), await _0x59d977['type']('#RegisterForm-LastName', '' + _0x569a19[_0x4401bf]['LastName']), await delay(0x226), await _0x59d977['type']('#RegisterForm-email', '' + _0x569a19[_0x4401bf]['Email']), await delay(0x226), await _0x59d977['type']('#RegisterForm-password', '' + _0x569a19[_0x4401bf]['Password']), await delay(0x226), console['log'](getTime() + '\x20[' + _0x3bfa23['name'] + ']\x20Task\x20' + (_0x4401bf + 0x1) + '\x20:\x20Submitting..'), await _0x59d977['$eval']('#RegisterForm', _0x5a8cd4 => _0x5a8cd4['submit']()), await delay(0x1f40);
      try {
        await _0x59d977['waitForSelector']('.home-page-grid__collection'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x3bfa23['name'] + ']\x20Task\x20' + (_0x4401bf + 0x1) + '\x20:\x20Account\x20' + _0x569a19[_0x4401bf]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x569a19[_0x4401bf]['Email'] + ',' + _0x569a19[_0x4401bf]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x3bfa23['name'] + ']\x20Task\x20' + (_0x4401bf + 0x1) + '\x20:\x20Account\x20' + _0x569a19[_0x4401bf]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
      } catch (_0xa9a1b2) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4401bf + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xa9a1b2));
      }
    } catch (_0x35fbba) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4401bf + 0x1) + '\x20:\x20' + _0x35fbba));
    } finally {
      _0x653be4 && _0x653be4['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function pattaFunction(_0x34a15a, _0x2936ea, _0x705292) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x39360d = 0x0; _0x39360d < _0x705292['length']; _0x39360d++) {
    await jig(_0x705292, _0x39360d);
    if (_0x705292[_0x39360d]['Email'] == '' || _0x705292[_0x39360d]['Password'] == '' || _0x705292[_0x39360d]['FirstName'] == '' || _0x705292[_0x39360d]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x39360d + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x54d47f = getProxy()[_0x39360d]['split'](':');
    else
      var _0x3d1f5c = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x54d47f = getProxy()[_0x3d1f5c]['split'](':');
    const _0x223d5c = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x54d47f[0x0] + ':' + _0x54d47f[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x3dcd38 = await _0x223d5c['newPage']();
      await _0x3dcd38['authenticate']({
        'username': '' + _0x54d47f[0x2],
        'password': '' + _0x54d47f[0x3]
      }), console['log'](getTime() + '\x20[' + _0x2936ea['name'] + ']\x20Task\x20' + (_0x39360d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3dcd38['setRequestInterception'](!![]), _0x3dcd38['on']('request', _0x2677d3 => {
        _0x2677d3['resourceType']() === 'image' || _0x2677d3['resourceType']() === 'font' || _0x2677d3['resourceType']() === 'media' ? _0x2677d3['abort']() : _0x2677d3['continue']();
      }), await _0x3dcd38['goto']('https://www.patta.nl/nl/account/login', {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), await _0x3dcd38['waitForSelector']('#CustomerEmail'), console['log'](getTime() + '\x20[' + _0x2936ea['name'] + ']\x20Task\x20' + (_0x39360d + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3dcd38['type']('#CustomerEmail', '' + _0x705292[_0x39360d]['Email']), await delay(0x12c), await _0x3dcd38['type']('#CustomerPassword', '' + _0x705292[_0x39360d]['Password']), await delay(0x226), await _0x3dcd38['$eval']('#customer_login', _0x5c9e5a => _0x5c9e5a['submit']());
      try {
        await _0x3dcd38['waitForSelector']('#orders'), await delay(0x4b0);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x2936ea['name'] + ']\x20Task\x20' + (_0x39360d + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
        continue;
      }
      await _0x3dcd38['goto']('' + _0x705292[_0x39360d]['Url'], {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x2936ea['name'] + ']\x20Task\x20' + (_0x39360d + 0x1) + '\x20:\x20Starting\x20Entry');
      try {
        await _0x3dcd38['waitForSelector']('#email');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x2936ea['name'] + ']\x20Task\x20' + (_0x39360d + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
      }
      await _0x3dcd38['type']('#email', '' + _0x705292[_0x39360d]['Email']), await delay(0x384), await _0x3dcd38['type']('#first_name', '' + _0x705292[_0x39360d]['FirstName']), await delay(0x514), await _0x3dcd38['type']('#last_name', '' + _0x705292[_0x39360d]['LastName']), await delay(0x514), await _0x3dcd38['type']('#street_address', _0x705292[_0x39360d]['Address1'] + '\x20' + _0x705292[_0x39360d]['HouseNumber'] + '\x20' + _0x705292[_0x39360d]['Address2']), await delay(0x2bc), await _0x3dcd38['type']('#zip_code', '' + _0x705292[_0x39360d]['Postcode']), await delay(0x320), await _0x3dcd38['type']('#city', '' + _0x705292[_0x39360d]['City']), await delay(0x320), await _0x3dcd38['type']('#bday', '' + _0x705292[_0x39360d]['Bday']), await delay(0x320), await _0x3dcd38['type']('#instagram', '' + _0x705292[_0x39360d]['Follower']), await delay(0x352);
      if (_0x705292[_0x39360d]['Size'] == 'RANDOM') {
        const _0x1c2473 = await _0x3dcd38['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x304655 => {
          return _0x304655['map'](_0x2c02fe => _0x2c02fe['textContent']);
        });
        var _0x288e1c = Math['round'](Math['random']() * (_0x1c2473['length'] - 0x1));
        console['log'](getTime() + '\x20[' + _0x2936ea['name'] + ']\x20Task\x20' + (_0x39360d + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x1c2473[_0x288e1c]), await _0x3dcd38['click']('label[data-eu-size=\x22' + _0x1c2473[_0x288e1c] + '\x22]');
      } else {
        console['log'](getTime() + '\x20[' + _0x2936ea['name'] + ']\x20Task\x20' + (_0x39360d + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x705292[_0x39360d]['Size']);
        try {
          await _0x3dcd38['click']('label[data-eu-size=\x22' + _0x705292[_0x39360d]['Size'] + '\x22]');
        } catch {
          await _0x3dcd38['click']('label[data-eu-size=\x22' + _0x705292[_0x39360d]['Size'] + '.0\x22]');
        }
      }
      await delay(0xbb8), await _0x3dcd38['$$eval']('.raffle__checkbox-label', _0x3fbdba => _0x3fbdba['forEach'](_0x9a66a2 => _0x9a66a2['click']())), await delay(0x7d0), console['log'](getTime() + '\x20[' + _0x2936ea['name'] + ']\x20Task\x20' + (_0x39360d + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x3dcd38['click']('#raffle__form-submit'), await delay(0x1388);
      try {
        await _0x3dcd38['waitForSelector']('#raffle__confirmation-message-container[class=\x22\x22]'), console['log'](chalk['green'](getTime() + '\x20[' + _0x2936ea['name'] + ']\x20Task\x20' + (_0x39360d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch (_0x46a6c4) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x39360d + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x46a6c4));
      }
    } catch (_0x66a341) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x39360d + 0x1) + '\x20:\x20' + _0x66a341));
    } finally {
      _0x223d5c && _0x223d5c['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function jdFunction(_0x649608, _0x260e26) {
  var _0x4766e6 = ![], _0x7663d3 = ![];
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x5ef92f = 0x0; _0x5ef92f < _0x260e26['length']; _0x5ef92f++) {
    var _0x4b6447 = [{
      'type': 'rich',
      'title': 'Succesfull\x20Entry',
      'description': '' + _0x649608['name'],
      'color': 0xc0d6d6,
      'url': '',
      'fields': [
        {
          'name': 'Product',
          'value': '' + _0x260e26[_0x5ef92f]['Url']
        },
        {
          'name': 'Size',
          'value': '' + _0x260e26[_0x5ef92f]['Size']
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
    const _0x51af76 = { 'embeds': _0x4b6447 };
    await jig(_0x260e26, _0x5ef92f);
    if (_0x260e26[_0x5ef92f]['Email'] == '' || _0x260e26[_0x5ef92f]['Url'] == '' || _0x260e26[_0x5ef92f]['FirstName'] == '' || _0x260e26[_0x5ef92f]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5ef92f + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x230703 = getProxy()[_0x5ef92f]['split'](':');
    else
      var _0x501a43 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x230703 = getProxy()[_0x501a43]['split'](':');
    const _0x2a67b5 = await puppeteer['launch']({
      'headless': ![],
      'args': [
        '--proxy-server=' + _0x230703[0x0] + ':' + _0x230703[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x37c404 = await _0x2a67b5['newPage']();
      await _0x37c404['authenticate']({
        'username': '' + _0x230703[0x2],
        'password': '' + _0x230703[0x3]
      }), console['log'](getTime() + '\x20[' + _0x649608['name'] + ']\x20Task\x20' + (_0x5ef92f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x37c404['setRequestInterception'](!![]), _0x37c404['on']('request', _0x4f6a11 => {
        _0x4f6a11['resourceType']() === 'image' || _0x4f6a11['resourceType']() === 'font' || _0x4f6a11['resourceType']() === 'media' ? _0x4f6a11['abort']() : _0x4f6a11['continue']();
      }), await _0x37c404['goto']('' + _0x260e26[_0x5ef92f]['Url'], {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), console['log'](getTime() + '\x20[' + _0x649608['name'] + ']\x20Task\x20' + (_0x5ef92f + 0x1) + '\x20:\x20Filling\x20Information'), await _0x37c404['waitForSelector']('#comp_firstname'), await _0x37c404['type']('#comp_firstname', '' + _0x260e26[_0x5ef92f]['FirstName']), await _0x37c404['waitForSelector']('#comp_lastname'), await _0x37c404['type']('#comp_lastname', '' + _0x260e26[_0x5ef92f]['LastName']), await _0x37c404['waitForSelector']('#comp_email'), await _0x37c404['type']('#comp_email', '' + _0x260e26[_0x5ef92f]['Email']), await _0x37c404['waitForSelector']('#comp_paypalemail'), await _0x37c404['type']('#comp_paypalemail', '' + _0x260e26[_0x5ef92f]['Email']), await _0x37c404['waitForSelector']('#comp_mobile_end'), await _0x37c404['type']('#comp_mobile_end', '' + _0x260e26[_0x5ef92f]['Phone']), await _0x37c404['waitForSelector']('#comp_dob'), await _0x37c404['type']('#comp_dob', '08/09/1992'), console['log'](getTime() + '\x20[' + _0x649608['name'] + ']\x20Task\x20' + (_0x5ef92f + 0x1) + '\x20:\x20Choosing\x20Size');
      if (_0x260e26[_0x5ef92f]['Size'] == 'RANDOM') {
        const _0xb19991 = await _0x37c404['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4a898c => {
          return _0x4a898c['map'](_0xd1b43f => _0xd1b43f['value']);
        });
        var _0x5d77de = Math['round'](Math['random']() * (_0xb19991['length'] - 0x2));
        await _0x37c404['select']('#shoesize', _0xb19991[_0x5d77de + 0x1]), await delay(0x3e8);
      } else {
        const _0x30f685 = await _0x37c404['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x547769 => {
          return _0x547769['map'](_0x240f55 => _0x240f55['innerText']);
        }), _0x1ad83c = await _0x37c404['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xfcaae5 => {
          return _0xfcaae5['map'](_0x12296b => _0x12296b['value']);
        });
        var _0x3231d7 = _0x260e26[_0x5ef92f]['Size'];
        for (var _0x3076df = 0x1; _0x3076df < _0x1ad83c['length']; _0x3076df++) {
          var _0x23d2d3 = _0x30f685[_0x3076df]['split']('\x20')[0x0];
          if (_0x23d2d3 == _0x3231d7) {
            await _0x37c404['select']('#shoesize', _0x1ad83c[_0x3076df]);
            break;
          } else {
            if (_0x3076df + 0x1 == _0x1ad83c['length'])
              throw new Error('Size\x20Not\x20Found..');
          }
        }
      }
      await _0x37c404['waitForSelector']('#comp_address1'), await _0x37c404['type']('#comp_address1', _0x260e26[_0x5ef92f]['Address1'] + '\x20' + _0x260e26[_0x5ef92f]['HouseNumber']), await _0x37c404['waitForSelector']('#comp_address2'), await _0x37c404['type']('#comp_address2', '' + _0x260e26[_0x5ef92f]['Address2']), await _0x37c404['waitForSelector']('#comp_address2'), await _0x37c404['type']('#comp_address3', '' + _0x260e26[_0x5ef92f]['City']), await _0x37c404['waitForSelector']('#comp_postcode'), await _0x37c404['type']('#comp_postcode', '' + _0x260e26[_0x5ef92f]['Zip']), console['log'](getTime() + '\x20[' + _0x649608['name'] + ']\x20Task\x20' + (_0x5ef92f + 0x1) + '\x20:\x20Sending\x20Entry'), await delay(0x4b0), await _0x37c404['click']('label#emailhold'), await delay(0x5dc), await _0x37c404['click']('#preauth_tandc_email\x20>\x20label'), await delay(0x5dc), await _0x37c404['click']('#submit'), await _0x37c404['waitForSelector']('#paymentWrap'), console['log'](getTime() + '\x20[' + _0x649608['name'] + ']\x20Task\x20' + (_0x5ef92f + 0x1) + '\x20:\x20' + chalk['blue']('Awaiting\x20Paypal\x20Payment')), _0x2a67b5['on']('targetcreated', async _0x2f3de0 => {
        if (_0x2f3de0['type']() === 'page') {
          const _0x2f09ef = await _0x2f3de0['page']();
          async function _0xe8828a() {
            try {
              await _0x37c404['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x7663d3 = !![];
              return;
            } catch {
            }
          }
          async function _0x14682a() {
            try {
              await _0x37c404['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x4766e6 = !![];
              return;
            } catch {
            }
          }
          _0x14682a(), _0xe8828a(), await delay(0x493e0);
        }
      });
      async function _0x2a0586() {
        for (let _0x1568d9 = 0x0; _0x1568d9 < 0x12c; _0x1568d9++) {
          if (_0x4766e6 == !![]) {
            console['log'](chalk['green'](getTime() + '\x20[' + _0x649608['name'] + ']\x20Task\x20' + (_0x5ef92f + 0x1) + '\x20:\x20Raffle\x20Entered!')), sendWebhook(succesWH, _0x51af76);
            return;
          } else {
            if (_0x7663d3)
              throw new Error('Paypal\x20Error:\x20Target\x20closed');
            else
              await delay(0x3e8);
          }
        }
        throw new Error('Paypal\x20Error');
      }
      await delay(0xbb8), await _0x37c404['click']('.zoid-outlet'), await delay(0x7d0), await _0x2a0586();
    } catch (_0x45a230) {
      console['log'](chalk['red'](getTime() + '\x20[' + _0x649608['name'] + ']\x20Task\x20' + (_0x5ef92f + 0x1) + '\x20:\x20' + _0x45a230)), _0x4b6447[0x0]['title'] = 'Failed\x20entry', _0x4b6447[0x0]['description'] = _0x649608['name'] + ':\x20' + _0x45a230, await sendWebhook(errorWH, _0x51af76);
    } finally {
      _0x2a67b5 && _0x2a67b5['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function oqiumFunction(_0x21098b, _0x102c06, _0x9ba825, _0x5ac31d) {
  await jig(_0x5ac31d, _0x21098b);
  var _0x1ee296 = [{
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
        'value': '' + _0x5ac31d[_0x21098b]['Size']
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
  const _0xdb233c = { 'embeds': _0x1ee296 };
  if (settings['useRandomProxy'] = ![])
    var _0x1762b6 = getProxy()[_0x21098b]['split'](':');
  else
    var _0x1f2a7d = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x1762b6 = getProxy()[_0x1f2a7d]['split'](':');
  var _0x57aa6a = _0x9ba825['data'];
  _0x102c06 == 'exp' ? _0x57aa6a['data']['attributes']['email'] = '' + _0x5ac31d[_0x21098b]['FirstName'] + _0x5ac31d[_0x21098b]['LastName'] + settings['catchall'] : _0x57aa6a['data']['attributes']['email'] = '' + _0x5ac31d[_0x21098b]['Email'];
  _0x57aa6a['data']['attributes']['properties']['$first_name'] = '' + _0x5ac31d[_0x21098b]['FirstName'], _0x57aa6a['data']['attributes']['properties']['$last_name'] = '' + _0x5ac31d[_0x21098b]['LastName'], _0x57aa6a['data']['attributes']['properties']['$address1'] = _0x5ac31d[_0x21098b]['Address1'] + '\x20' + _0x5ac31d[_0x21098b]['Address2'], _0x57aa6a['data']['attributes']['properties']['$zip'] = '' + _0x5ac31d[_0x21098b]['Zip'], _0x57aa6a['data']['attributes']['properties']['$city'] = '' + _0x5ac31d[_0x21098b]['City'], _0x57aa6a['data']['attributes']['properties']['$country'] = '' + _0x5ac31d[_0x21098b]['Country'], _0x57aa6a['data']['attributes']['properties']['Size'] = '' + _0x5ac31d[_0x21098b]['Size'], _0x57aa6a['data']['attributes']['properties']['$phone_number'] = '' + _0x5ac31d[_0x21098b]['Phone'], _0x57aa6a['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x5ac31d[_0x21098b]['Follower'];
  var _0x21330b = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x9ba825['url'],
    'headers': _0x9ba825['headers'],
    'body': JSON['stringify'](_0x57aa6a),
    'proxy': 'http://' + _0x1762b6[0x2] + ':' + _0x1762b6[0x3] + '@' + _0x1762b6[0x0] + ':' + _0x1762b6[0x1]
  };
  return _0x102c06 === 'ver' && (_0x21330b['method'] = 'GET'), new Promise(function (_0x54c200, _0x3cc2ce) {
    callback = async (_0x3e9a70, _0x4c2ea1, _0x1207a4) => {
      !_0x3e9a70 && _0x4c2ea1['statusCode'] == 0xca || !_0x3e9a70 && _0x4c2ea1['statusCode'] == 0xc8 ? (await sendWebhook(succesWH, _0xdb233c), _0x54c200(console['log'](chalk['green'](getTime() + '\x20[' + _0x9ba825['name'] + ']\x20Task\x20' + (_0x21098b + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x1ee296[0x0]['title'] = 'Failed\x20entry', _0x1ee296[0x0]['description'] = '' + _0x3e9a70, await sendWebhook(errorWH, _0xdb233c), _0x3cc2ce(console['log'](getTime() + '\x20[' + _0x9ba825['name'] + ']\x20Task\x20' + (_0x21098b + 0x1) + ':\x20' + _0x3e9a70)));
    };
    try {
      console['log'](getTime() + '\x20[' + _0x9ba825['name'] + ']\x20Task\x20' + (_0x21098b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x57aa6a['data']['attributes']['email']), request(_0x21330b, callback);
    } catch (_0x315af0) {
      console['log'](getTime() + '\x20Task\x20' + (_0x21098b + 0x1) + ':\x20' + _0x315af0);
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
      async function _0x1283b0() {
        console['clear'](), console['log']('Welcome\x20to\x20' + chalk['cyan']('JRaffles();') + '\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
        for (var _0x162728 = 0x0; _0x162728 < modules['length']; _0x162728++) {
          if (modules[_0x162728]['name'] === 'Reload\x20Settings' || modules[_0x162728]['name'] === 'Change\x20Settings')
            continue;
          else
            console['log']('\x20(' + _0x162728 + ')\x20[' + modules[_0x162728]['name'] + ']');
        }
        ;
        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (modules['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (modules['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
        if (modules[taskModule]['name'] == 'AFEW\x20Store') {
          taskFunction = await getFunction(modules[taskModule]['modules']);
          var _0x29aaec = modules[taskModule]['modules'][taskFunction];
          console['clear'](), await afewScraper(), await getAfewProduct();
          var _0x1bd46d = await getTaskFile();
          return await afewFunction(afewProducts[afewProduct], 'nor', _0x29aaec, _0x1bd46d), _0x1283b0();
        } else {
          if (modules[taskModule]['name'] == 'MAHA\x20Amsterdam') {
            taskFunction = await getFunction(modules[taskModule]['modules']);
            var _0x29aaec = modules[taskModule]['modules'][taskFunction];
            if (taskFunction == 0x0) {
              var _0x5cb231 = await getTaskFile();
              console['log']('Starting\x20' + _0x5cb231['length'] + '\x20MAHA\x20Tasks');
              for (var _0x58e5c6 = 0x0; _0x58e5c6 < _0x5cb231['length']; _0x58e5c6++) {
                console['log'](getTime() + '\x20[' + _0x29aaec['name'] + ']\x20Task\x20' + (_0x58e5c6 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x58e5c6, 'nor', _0x29aaec, _0x5cb231), console['log'](getTime() + '\x20[' + _0x29aaec['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
              ;
              return _0x1283b0();
            } else {
              if (taskFunction == 0x1) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x58e5c6 = 0x0; _0x58e5c6 < links['length']; _0x58e5c6++) {
                  _0x29aaec['url'] = links[_0x58e5c6], console['log'](getTime() + '\x20[' + _0x29aaec['name'] + ']\x20Task\x20' + (_0x58e5c6 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x58e5c6, 'ver', _0x29aaec), console['log'](getTime() + '\x20[' + _0x29aaec['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
                ;
                return _0x1283b0();
              }
            }
          } else {
            if (modules[taskModule]['name'] == 'FOOTSHOP') {
              var _0x3e16ed = await getTaskFile();
              return console['log'](_0x3e16ed), await footshopModule(_0x3e16ed), await delay(0x1388), _0x1283b0();
            } else {
              if (modules[taskModule]['name'] == 'OQIUM\x20Store') {
                taskFunction = await getFunction(modules[taskModule]['modules']);
                var _0x29aaec = modules[taskModule]['modules'][taskFunction];
                console['clear']();
                if (taskFunction == 0x0) {
                  var _0x3b1635 = await getTaskFile();
                  console['log']('Starting\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                  for (var _0x58e5c6 = 0x0; _0x58e5c6 < _0x3b1635['length']; _0x58e5c6++) {
                    console['log'](getTime() + '\x20[' + _0x29aaec['name'] + ']\x20Task\x20' + (_0x58e5c6 + 0x1) + ':\x20Getting\x20Session');
                    try {
                      await oqiumFunction(_0x58e5c6, 'exp', _0x29aaec, _0x3b1635);
                    } catch {
                      console['log'](chalk['red'](getTime() + '\x20[' + _0x29aaec['name'] + ']\x20Task\x20' + (_0x58e5c6 + 0x1) + ':\x20Task\x20failed'));
                    }
                    console['log'](getTime() + '\x20[' + _0x29aaec['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                  }
                } else {
                  if (taskFunction == 0x1) {
                    console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                    for (var _0x58e5c6 = 0x0; _0x58e5c6 < links['length']; _0x58e5c6++) {
                      try {
                        modules[taskModule]['url'] = links[_0x58e5c6], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e5c6 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x58e5c6, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                      } catch (_0x46a583) {
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
                  var _0x29aaec = modules[taskModule]['modules'][taskFunction];
                  console['clear']();
                  if (taskFunction == 0x0)
                    await bwAcc('https://bouncewear.com/nl/account/register', _0x29aaec);
                  else {
                    if (taskFunction == 0x1) {
                    }
                  }
                  ;
                } else {
                  if (modules[taskModule]['name'] == 'PATTA') {
                    taskFunction = await getFunction(modules[taskModule]['modules']);
                    var _0x29aaec = modules[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x0) {
                      var _0x3f7b91 = await getTaskFile();
                      return await pattaAcc('https://patta.nl/account/register', _0x29aaec, _0x3f7b91), _0x1283b0();
                    } else {
                      if (taskFunction == 0x1) {
                        var _0x3f7b91 = await getTaskFile();
                        return await pattaFunction('', _0x29aaec), _0x1283b0();
                      }
                    }
                    ;
                  } else {
                    if (modules[taskModule]['name'] == 'JD') {
                      taskFunction = await getFunction(modules[taskModule]['modules']);
                      var _0x29aaec = modules[taskModule]['modules'][taskFunction];
                      console['clear']();
                      if (taskFunction == 0x0) {
                        var _0x52ecb4 = await getTaskFile();
                        return await jdFunction(_0x29aaec, _0x52ecb4), _0x1283b0();
                      }
                    } else {
                      if (modules[taskModule]['name'] == 'Change\x20Settings') {
                        console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                        var _0x3a05ba = 0x0;
                        for (const _0x2feff4 in settings) {
                          console['log']('(' + _0x3a05ba + ')\x20' + _0x2feff4 + '\x20:\x20' + settings[_0x2feff4]), _0x3a05ba++;
                        }
                        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x3a05ba + ')\x20Return\x20to\x20Main\x20Menu');
                        var _0x39ea20 = await getSetting();
                        if (_0x39ea20 == _0x3a05ba)
                          return _0x1283b0();
                        console['clear'];
                        var _0x10ea85 = 0x0;
                        for (var _0x18f00e in settings) {
                          if (_0x39ea20 == _0x10ea85) {
                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x18f00e + '\x20:'), settings[_0x18f00e] = await getValue(), fs['writeFileSync']('../settings.json', JSON['stringify'](settings));
                            break;
                          } else
                            _0x10ea85++;
                        }
                        return console['log']('Settings\x20Saved!'), await delay(0xbb8), _0x1283b0();
                      } else {
                        if (modules[taskModule]['name'] == 'Reload\x20Settings')
                          return console['log']('Reloading\x20settings'), await loadSettings(), _0x1283b0();
                        else {
                          if (taskModule == 0x45) {
                            modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                            var _0x39c087 = await getPassword();
                            _0x39c087 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
      }
      await _0x1283b0();
    } catch (_0x1686bd) {
      return console['log'](_0x1686bd), await delay(0x3a98);
    }
}
;
setTitle('JRaffles\x20' + version), loadSettings(), main();