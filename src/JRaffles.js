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
const delay = _0x495a6f => new Promise(_0x5dcd43 => setTimeout(_0x5dcd43, _0x495a6f));
async function getLicense(_0x170f42) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x170f42, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x1660b9 => _0x1660b9['data'])['catch'](() => null);
}
;
async function checkLicense(_0x3f8da0) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x1b49e8 = await getLicense(_0x3f8da0);
  username = JSON['stringify'](_0x1b49e8['user']['username']);
  if (!_0x1b49e8)
    return console['log']('License\x20not\x20found');
  if (!_0x1b49e8['user'])
    return console['log']('License\x20not\x20bound');
  return _0x1b49e8['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x1b84d8 = await prompt['get']('Module');
  return console['clear'](), _0x1b84d8['Module'];
}
;
async function getSetting() {
  var _0x46c4a2 = await prompt['get']('Setting');
  return console['clear'](), _0x46c4a2['Setting'];
}
async function getTaskFile() {
  console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
  for (var _0x3222f4 = 0x0; _0x3222f4 < taskFiles['length']; _0x3222f4++) {
    console['log']('\x20(' + _0x3222f4 + ')\x20' + taskFiles[_0x3222f4]);
  }
  console['log']('');
  var _0x322582 = await prompt['get']('Task'), _0x291109 = fs['readFileSync']('../tasks/' + taskFiles[_0x322582['Task']], 'utf-8');
  return taskCSV = Papa['parse'](_0x291109, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x322582['Task']])), taskCSV;
}
async function getProxyFile() {
  console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
  for (var _0x3ddd42 = 0x0; _0x3ddd42 < taskFiles['length']; _0x3ddd42++) {
    console['log']('\x20(' + _0x3ddd42 + ')\x20' + taskFiles[_0x3ddd42]);
  }
  console['log']('');
  var _0x187a43 = await prompt['get']('Task'), _0x58012a = fs['readFileSync']('../tasks/' + taskFiles[_0x187a43['Task']], 'utf-8');
  return taskCSV = Papa['parse'](_0x58012a, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x187a43['Task']])), taskCSV;
}
async function getValue() {
  var _0x5cb940 = await prompt['get']('Value');
  return console['clear'](), _0x5cb940['Value'];
}
async function getFunction(_0x5229bc) {
  console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
  for (var _0x412b17 = 0x0; _0x412b17 < _0x5229bc['length']; _0x412b17++) {
    console['log']('\x20(' + _0x412b17 + ')\x20[' + _0x5229bc[_0x412b17]['name'] + ']');
  }
  ;
  console['log']('');
  var _0x4f91fe = await prompt['get']('Module');
  return _0x4f91fe['Module'];
}
async function getPassword() {
  var _0x436274 = await prompt['get']('Password');
  return console['clear'](), _0x436274['Password'];
}
;
async function getLinks() {
  var _0x242b1a = await prompt['get']('Links');
  return _0x242b1a['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x4d0f71 = 0x0; _0x4d0f71 < afewProducts['length']; _0x4d0f71++) {
    console['log']('\x20(' + _0x4d0f71 + ')\x20' + afewProducts[_0x4d0f71]);
  }
  ;
  console['log']();
  let _0x159995 = await prompt['get']('Product');
  console['clear'](), afewProduct = _0x159995['Product'];
  return;
}
;
function getTime() {
  var _0x1da77d = new Date(Date['now']())['toLocaleTimeString']();
  return _0x1da77d;
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
async function sendWebhook(_0x2500eb, _0x4a8403) {
  let _0x4ae04e = { 'headers': { 'content-type': 'application/json' } };
  await axios['post'](_0x2500eb, _0x4a8403, _0x4ae04e);
}
;
async function jig(_0x27dcf9, _0x1f62aa) {
  var _0x4374d3 = _0x27dcf9[_0x1f62aa]['Address1']['split'](''), _0x35fa33 = _0x27dcf9[_0x1f62aa]['Address2']['split'](''), _0x52e92c = _0x27dcf9[_0x1f62aa]['Email']['split']('@');
  for (var _0xbb5722 = 0x0; _0xbb5722 < _0x4374d3['length']; _0xbb5722++) {
    if (_0x4374d3[_0xbb5722] == 'X') {
      var _0xe88b79 = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x4374d3[_0xbb5722] = lettersArray[_0xe88b79];
    }
  }
  ;
  for (var _0xbb5722 = 0x0; _0xbb5722 < _0x35fa33['length']; _0xbb5722++) {
    if (_0x35fa33[_0xbb5722] == 'X') {
      var _0xe88b79 = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x35fa33[_0xbb5722] = lettersArray[_0xe88b79];
    }
  }
  ;
  _0x27dcf9[_0x1f62aa]['FirstName'] == 'RANDOM' && (_0x27dcf9[_0x1f62aa]['FirstName'] = random['first']());
  _0x27dcf9[_0x1f62aa]['LastName'] == 'RANDOM' && (_0x27dcf9[_0x1f62aa]['LastName'] = random['last']());
  _0x52e92c[0x0] == 'RANDOM' ? _0x52e92c[0x0] = '' + random['first']() + random['last']() + '@' : _0x52e92c[0x0] = _0x52e92c[0x0] + '@';
  _0x27dcf9[_0x1f62aa]['Email'] = _0x52e92c['join'](''), _0x27dcf9[_0x1f62aa]['Address1'] = _0x4374d3['join'](''), _0x27dcf9[_0x1f62aa]['Address2'] = _0x35fa33['join']('');
  return;
}
;
function getProxy() {
  let _0x3edb9c = proxyFile['split']('\x0a'), _0x663266 = _0x3edb9c['map']((_0x5bdea3, _0x202359) => {
    sanatizeProxy = _0x5bdea3['replace']('\x0d', '');
    if (_0x3edb9c[_0x202359 + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x663266;
}
;
async function afewScraper() {
  var _0xf362fc = getProxy()[0x1]['split'](':');
  const _0x2d7e14 = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0xf362fc[0x0] + ':' + _0xf362fc[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x4732d4 = await _0x2d7e14['newPage']();
    await _0x4732d4['authenticate']({
      'username': '' + _0xf362fc[0x2],
      'password': '' + _0xf362fc[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x4732d4['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4732d4['setRequestInterception'](!![]), _0x4732d4['on']('request', _0x5d1dd4 => {
      _0x5d1dd4['resourceType']() === 'image' || _0x5d1dd4['resourceType']() === 'font' || _0x5d1dd4['resourceType']() === 'media' ? _0x5d1dd4['abort']() : _0x5d1dd4['continue']();
    }), await _0x4732d4['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x4732d4['waitForTimeout'](0xbb8), await _0x4732d4['waitForSelector']('.product-card');
    const _0x1678e7 = await _0x4732d4['$$eval']('a.product-card', _0x52b550 => {
      return _0x52b550['map'](_0x5baaa4 => _0x5baaa4['href']);
    });
    return afewProducts = _0x1678e7;
  } catch (_0x2eb3d6) {
    console['log']('\x20' + _0x2eb3d6);
  } finally {
    _0x2d7e14['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x3cc5b1, _0x48d6df, _0x3eda86, _0x4e1443) {
  await jig(_0x4e1443, _0x3cc5b1);
  var _0x1e1840 = [{
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
        'value': '' + oqium[_0x3cc5b1]['Size']
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
  const _0x19f050 = { 'embeds': _0x1e1840 };
  if (settings['useRandomProxy'] = ![])
    var _0x28c6d1 = getProxy()[_0x3cc5b1]['split'](':');
  else
    var _0x3db50c = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x28c6d1 = getProxy()[_0x3db50c]['split'](':');
  var _0x57264e = _0x3eda86['data'];
  _0x48d6df == 'exp' ? _0x57264e['data']['attributes']['email'] = '' + _0x4e1443[_0x3cc5b1]['FirstName'] + _0x4e1443[_0x3cc5b1]['LastName'] + settings['catchall'] : _0x57264e['data']['attributes']['email'] = '' + _0x4e1443[_0x3cc5b1]['Email'];
  _0x57264e['data']['attributes']['properties']['$first_name'] = '' + _0x4e1443[_0x3cc5b1]['FirstName'], _0x57264e['data']['attributes']['properties']['$last_name'] = '' + _0x4e1443[_0x3cc5b1]['LastName'], _0x57264e['data']['attributes']['properties']['$address1'] = _0x4e1443[_0x3cc5b1]['Address1'] + '\x20' + _0x4e1443[_0x3cc5b1]['Address2'], _0x57264e['data']['attributes']['properties']['$zip'] = '' + _0x4e1443[_0x3cc5b1]['Zip'], _0x57264e['data']['attributes']['properties']['$city'] = '' + _0x4e1443[_0x3cc5b1]['City'], _0x57264e['data']['attributes']['properties']['$country'] = '' + _0x4e1443[_0x3cc5b1]['Country'], _0x57264e['data']['attributes']['properties']['Size'] = '' + _0x4e1443[_0x3cc5b1]['Size'], _0x57264e['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x4e1443[_0x3cc5b1]['Follower'];
  var _0x1c5438 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x3eda86['url'],
    'headers': _0x3eda86['headers'],
    'body': JSON['stringify'](_0x57264e),
    'proxy': 'http://' + _0x28c6d1[0x2] + ':' + _0x28c6d1[0x3] + '@' + _0x28c6d1[0x0] + ':' + _0x28c6d1[0x1]
  };
  return _0x48d6df === 'ver' && (_0x1c5438['method'] = 'GET'), new Promise(function (_0x48a9ef, _0x590d1b) {
    callback = async (_0x278bc1, _0x1979d6, _0x37307c) => {
      !_0x278bc1 && _0x1979d6['statusCode'] == 0xca || !_0x278bc1 && _0x1979d6['statusCode'] == 0xc8 ? _0x48a9ef(console['log'](chalk['green'](getTime() + '\x20[' + _0x3eda86['name'] + ']\x20Task\x20' + (_0x3cc5b1 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x1e1840[0x0]['title'] = 'Failed\x20entry', _0x1e1840[0x0]['description'] = '' + _0x278bc1, await sendWebhook(errorWH, _0x19f050), _0x590d1b(console['log'](getTime() + '\x20[' + _0x3eda86['name'] + ']\x20Task\x20' + (_0x3cc5b1 + 0x1) + ':\x20' + _0x278bc1)));
    };
    try {
      _0x48d6df === 'ver' ? console['log'](getTime() + '\x20[' + _0x3eda86['name'] + ']\x20Task\x20' + (_0x3cc5b1 + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + _0x3eda86['name'] + ']\x20Task\x20' + (_0x3cc5b1 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x57264e['data']['attributes']['email']), request(_0x1c5438, callback);
    } catch (_0x157864) {
      console['log'](getTime() + '\x20Task\x20' + (_0x3cc5b1 + 0x1) + ':\x20' + _0x157864);
    }
  });
}
;
async function footshopModule(_0x21ff44) {
  var _0xe5fd1e;
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x2cb364 = 0x0; _0x2cb364 < _0x21ff44['length']; _0x2cb364++) {
    await jig(_0x21ff44, _0x2cb364);
    if (_0x21ff44[_0x2cb364]['Email'] == '' || _0x21ff44[_0x2cb364]['FirstName'] == '' || _0x21ff44[_0x2cb364]['LastName'] == '' || _0x21ff44[_0x2cb364]['Country'] == '' || _0x21ff44[_0x2cb364]['Size'] == '' || _0x21ff44[_0x2cb364]['Address1'] == '' || _0x21ff44[_0x2cb364]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    console['log'](_0x21ff44[_0x2cb364]['Url']);
    async function _0x92d1ff() {
      var _0x471f49 = await axios['get']('https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_')['then'](_0x53dfb8 => _0x53dfb8['data'])['catch'](() => undefined);
      console['log'](_0x471f49);
      var _0x1ea90f = _0x471f49['sizeSets']['Men']['sizes'];
      _0x1ea90f['length'] == 0x0 && (_0x1ea90f = _0x471f49['sizeSets']['Women']['sizes'], _0x1ea90f['length'] == 0x0 && (_0x1ea90f = _0x471f49['sizeSets']['Unisex']['sizes'], _0x1ea90f['length'] == 0x0 && (_0x1ea90f = _0x471f49['sizeSets']['Kids']['sizes'])));
      ;
      async function _0x5238c5() {
        for (var _0x3c8735 = 0x0; _0x3c8735 < _0x1ea90f['length']; _0x3c8735++) {
          if (_0x1ea90f[_0x3c8735]['eur'] == _0x21ff44[_0x2cb364]['Size'])
            return _0xe5fd1e = _0x1ea90f[_0x3c8735]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x20Size\x20' + _0x21ff44[_0x2cb364]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x22a343 = await _0x5238c5();
      if (_0x22a343 == ![])
        return ![];
    }
    let _0x2ef6c0 = await _0x92d1ff();
    if (_0x2ef6c0 == ![])
      continue;
    if (_0x21ff44[_0x2cb364]['Email'] == '' || _0x21ff44[_0x2cb364]['FirstName'] == '' || _0x21ff44[_0x2cb364]['LastName'] == '' || _0x21ff44[_0x2cb364]['Country'] == '' || _0x21ff44[_0x2cb364]['Size'] == '' || _0x21ff44[_0x2cb364]['Address1'] == '' || _0x21ff44[_0x2cb364]['Zip'] == '' || _0x21ff44[_0x2cb364]['Phone'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x19959c = 'https://releases.footshop.com/register/' + _0x21ff44[_0x2cb364]['Url'] + '/Men/' + _0xe5fd1e;
    if (settings['useRandomProxy'] = ![])
      var _0x154a5e = getProxy()[_0x2cb364]['split'](':');
    else
      var _0x1e55eb = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x154a5e = getProxy()[_0x1e55eb]['split'](':');
    const _0x37ed97 = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x154a5e[0x0] + ':' + _0x154a5e[0x1]]
    });
    try {
      const _0x186359 = await _0x37ed97['newPage']();
      await _0x186359['authenticate']({
        'username': '' + _0x154a5e[0x2],
        'password': '' + _0x154a5e[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x186359['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x186359['setRequestInterception'](!![]), _0x186359['on']('request', _0x23968f => {
        _0x23968f['resourceType']() === 'image' || _0x23968f['resourceType']() === 'font' || _0x23968f['resourceType']() === 'media' ? _0x23968f['abort']() : _0x23968f['continue']();
      }), await _0x186359['goto']('' + _0x19959c + _0xe5fd1e), await _0x186359['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x186359['type']('input[name=\x22email\x22]', '' + _0x21ff44[_0x2cb364]['Email']), await delay(0x640), await _0x186359['type']('input[name=\x22phone\x22]', '' + _0x21ff44[_0x2cb364]['Phone']), await delay(0x4b0), await _0x186359['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
      try {
        await _0x186359['type']('input[name=\x22firstName\x22]', '' + _0x21ff44[_0x2cb364]['FirstName']), await delay(0x258);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
        continue;
      }
      await _0x186359['type']('input[name=\x22lastName\x22]', '' + _0x21ff44[_0x2cb364]['LastName']), await delay(0xc8), await _0x186359['type']('input[name=\x22instagramUsername\x22]', '' + _0x21ff44[_0x2cb364]['Follower']), await delay(0x4b0), await _0x186359['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x186359['select']('select[name=\x22country\x22]', '' + _0x21ff44[_0x2cb364]['Country']), await delay(0x2bc), await _0x186359['type']('input[name=\x22streetName\x22]', '' + _0x21ff44[_0x2cb364]['Address1']), await delay(0x258), await _0x186359['type']('input[name=\x22houseNumber\x22]', '' + _0x21ff44[_0x2cb364]['HouseNumber'] + _0x21ff44[_0x2cb364]['Address2']), await delay(0xc8), await _0x186359['type']('input[name=\x22postalCode\x22]', '' + _0x21ff44[_0x2cb364]['Zip']), await delay(0x1f4), await _0x186359['type']('input[name=\x22city\x22]', '' + _0x21ff44[_0x2cb364]['City']), await delay(0x4b0), await _0x186359['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x186359['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x186359['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x186359['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x186359['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x186359['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x4b0), await _0x186359['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x21ff44[_0x2cb364]['CardNumber']), await delay(0x320), await _0x186359['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x21ff44[_0x2cb364]['ExpiryDate']), await delay(0x4b0), await _0x186359['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x21ff44[_0x2cb364]['CVV']), await delay(0x226), await _0x186359['type']('input[name=\x22holderName\x22]', '' + _0x21ff44[_0x2cb364]['NameOnCard']), await delay(0x226), await _0x186359['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x20Awaiting\x203DS');
      try {
        await _0x186359['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await delay(0xbb8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x203DS\x20Failed'));
      }
    } catch (_0x4ce00c) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cb364 + 0x1) + '\x20:\x20' + _0x4ce00c);
    } finally {
      _0x37ed97['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x286df5, _0x289dce, _0x4a1b33, _0x2b95f0) => {
  for (var _0x16f01f = 0x0; _0x16f01f < _0x2b95f0['length']; _0x16f01f++) {
    await jig(_0x2b95f0, _0x16f01f);
    var _0x1f80e1 = [{
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
          'value': '' + _0x286df5
        },
        {
          'name': 'Size',
          'value': '' + _0x2b95f0[_0x16f01f]['Size']
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
    const _0xf62ec0 = { 'embeds': _0x1f80e1 };
    if (_0x2b95f0[_0x16f01f]['Email'] == '' || _0x2b95f0[_0x16f01f]['FirstName'] == '' || _0x2b95f0[_0x16f01f]['LastName'] == '' || _0x2b95f0[_0x16f01f]['Country'] == '' || _0x2b95f0[_0x16f01f]['Size'] == '' || _0x2b95f0[_0x16f01f]['Address1'] == '' || _0x2b95f0[_0x16f01f]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + _0x4a1b33['name'] + ']\x20Task\x20' + (_0x16f01f + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x3ad2a5 = getProxy()[_0x16f01f]['split'](':');
    else
      var _0x39982a = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x3ad2a5 = getProxy()[_0x39982a]['split'](':');
    const _0x18e4ce = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x3ad2a5[0x0] + ':' + _0x3ad2a5[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x3a89cd = await _0x18e4ce['newPage']();
      await _0x3a89cd['setDefaultNavigationTimeout'](0x1d4c0), await _0x3a89cd['authenticate']({
        'username': '' + _0x3ad2a5[0x2],
        'password': '' + _0x3ad2a5[0x3]
      }), console['log'](getTime() + '\x20[' + _0x4a1b33['name'] + ']\x20Task\x20' + (_0x16f01f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a89cd['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3a89cd['setRequestInterception'](!![]), _0x3a89cd['on']('request', _0x4e1313 => {
        _0x4e1313['resourceType']() === 'image' || _0x4e1313['resourceType']() === 'font' || _0x4e1313['resourceType']() === 'media' ? _0x4e1313['abort']() : _0x4e1313['continue']();
      }), await _0x3a89cd['goto'](_0x286df5), console['log'](getTime() + '\x20[' + _0x4a1b33['name'] + ']\x20Task\x20' + (_0x16f01f + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x3a89cd['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + _0x4a1b33['name'] + ']\x20Task\x20' + (_0x16f01f + 0x1) + '\x20:\x20Cookies\x20received'), await _0x3a89cd['waitForTimeout'](0x320);
      if (_0x2b95f0[_0x16f01f]['Size'] == 'RANDOM') {
        console['log'](getTime() + '\x20[' + _0x4a1b33['name'] + ']\x20Task\x20' + (_0x16f01f + 0x1) + '\x20:\x20Choosing\x20random\x20size');
        const _0x4acb01 = await _0x3a89cd['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x1292f2 => {
          return _0x1292f2['map'](_0x137aff => _0x137aff['href']);
        });
        var _0x5ead45 = Math['round'](Math['random']() * (_0x4acb01['length'] - 0x1));
        await _0x3a89cd['goto']('' + _0x4acb01[_0x5ead45]);
      } else {
        console['log'](getTime() + '\x20[' + _0x4a1b33['name'] + ']\x20Task\x20' + (_0x16f01f + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2b95f0[_0x16f01f]['Size']);
        try {
          const _0x56c56c = await _0x3a89cd['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x2b95f0[_0x16f01f]['Size'] + '\x22]\x20>\x20a', _0x254259 => {
            return _0x254259['map'](_0x51586c => _0x51586c['href']);
          });
          await _0x3a89cd['goto']('' + _0x56c56c[0x0], { 'waitUntil': 'networkidle2' });
        } catch (_0x36d3b9) {
          console['log'](chalk['red'](getTime() + '\x20[' + _0x4a1b33['name'] + ']\x20Task\x20' + (_0x16f01f + 0x1) + '\x20:\x20' + _0x36d3b9 + '\x20Size\x20not\x20found')), _0x1f80e1[0x0]['title'] = 'Failed\x20entry', _0x1f80e1[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0xf62ec0);
          continue;
        }
        try {
          await _0x3a89cd['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x2b95f0[_0x16f01f]['Size'] + '\x22]'), await _0x3a89cd['waitForTimeout'](0x320), await _0x3a89cd['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x2b95f0[_0x16f01f]['Size'] + '\x22]');
        } catch (_0x48ff6e) {
          console['log'](chalk['red'](getTime() + '\x20[' + _0x4a1b33['name'] + ']\x20Task\x20' + (_0x16f01f + 0x1) + '\x20:\x20' + _0x48ff6e + '\x20Size\x20not\x20found')), _0x1f80e1[0x0]['title'] = 'Failed\x20entry', _0x1f80e1[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0xf62ec0);
          continue;
        }
      }
      await _0x3a89cd['waitForTimeout'](0x258), await _0x3a89cd['type']('#raffle-instagram', '' + _0x2b95f0[_0x16f01f]['Follower'], { 'delay': 0x64 }), await _0x3a89cd['waitForTimeout'](0x384), await _0x3a89cd['click']('#raffle-terms'), await _0x3a89cd['waitForTimeout'](0x384), await _0x3a89cd['evaluate'](() => {
        const _0x5897ea = document['querySelector']('button.btn[name=\x27add\x27]');
        _0x5897ea['click']();
      }), await _0x3a89cd['waitForTimeout'](0xbb8), await _0x3a89cd['waitForSelector']('#checkout_email'), await delay(0x3e8), console['log'](getTime() + '\x20[' + _0x4a1b33['name'] + ']\x20Task\x20' + (_0x16f01f + 0x1) + '\x20:\x20Filling\x20Information');
      _0x289dce == 'sec' ? await _0x3a89cd['type']('#checkout_email', '' + _0x2b95f0[_0x16f01f]['FirstName'] + _0x2b95f0[_0x16f01f]['LastName'] + settings['catchall'], 0x32) : await _0x3a89cd['type']('#checkout_email', '' + _0x2b95f0[_0x16f01f]['Email'], 0x32);
      await delay(0x320), await _0x3a89cd['select']('#checkout_shipping_address_country', '' + _0x2b95f0[_0x16f01f]['Country']), await _0x3a89cd['waitForTimeout'](0x258), await _0x3a89cd['type']('#checkout_shipping_address_first_name', '' + _0x2b95f0[_0x16f01f]['FirstName']), await _0x3a89cd['waitForTimeout'](0x320), await _0x3a89cd['type']('#checkout_shipping_address_last_name', '' + _0x2b95f0[_0x16f01f]['LastName']), await _0x3a89cd['waitForTimeout'](0x2bc), await _0x3a89cd['type']('#checkout_shipping_address_address1', _0x2b95f0[_0x16f01f]['Address1'] + '\x20' + _0x2b95f0[_0x16f01f]['HouseNumber']), await _0x3a89cd['waitForTimeout'](0x2bc), await _0x3a89cd['type']('#checkout_shipping_address_address2', '' + _0x2b95f0[_0x16f01f]['Address2']), await _0x3a89cd['waitForTimeout'](0x2bc);
      _0x2b95f0[_0x16f01f]['Postcode'] == undefined ? await _0x3a89cd['type']('#checkout_shipping_address_zip', '' + _0x2b95f0[_0x16f01f]['Zip']) : await _0x3a89cd['type']('#checkout_shipping_address_zip', '' + _0x2b95f0[_0x16f01f]['Postcode']);
      await _0x3a89cd['waitForTimeout'](0x2bc), await _0x3a89cd['type']('#checkout_shipping_address_city', '' + _0x2b95f0[_0x16f01f]['City']), await _0x3a89cd['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + _0x4a1b33['name'] + ']\x20Task\x20' + (_0x16f01f + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x3a89cd['evaluate'](() => {
        const _0x2a4dbe = document['querySelector']('#continue_button');
        for (var _0xf5ea08 = 0x0; _0xf5ea08 < 0x5; _0xf5ea08++) {
          if (_0x2a4dbe) {
            _0x2a4dbe['click']();
            break;
          } else
            delay(0xfa0);
        }
      }), await _0x3a89cd['waitForTimeout'](0x1194), await _0x3a89cd['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), _0x3a89cd['evaluate'](() => {
        const _0x1edd3d = document['querySelector']('#continue_button');
        for (var _0x40d80f = 0x0; _0x40d80f < 0x5; _0x40d80f++) {
          if (_0x1edd3d) {
            _0x1edd3d['click']();
            break;
          } else
            delay(0xfa0);
        }
      }), await _0x3a89cd['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + _0x4a1b33['name'] + ']\x20Task\x20' + (_0x16f01f + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3a89cd['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x3a89cd['evaluate'](() => {
        const _0x514327 = document['querySelector']('#continue_button');
        for (var _0xde8019 = 0x0; _0xde8019 < 0x5; _0xde8019++) {
          if (_0x514327) {
            _0x514327['click']();
            break;
          } else
            delay(0xfa0);
        }
      }), await _0x3a89cd['waitForTimeout'](0x1194), await _0x3a89cd['waitForSelector']('#continue_button'), _0x3a89cd['evaluate'](() => {
        const _0x1169f4 = document['querySelector']('#continue_button');
        for (var _0x986db9 = 0x0; _0x986db9 < 0x5; _0x986db9++) {
          if (_0x1169f4) {
            _0x1169f4['click']();
            break;
          } else
            delay(0xfa0);
        }
      });
      try {
        await _0x3a89cd['waitForSelector']('div[data-step=\x22thank_you\x22]');
      } catch (_0x10fb89) {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x4a1b33['name'] + ']\x20Task\x20' + (_0x16f01f + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x10fb89));
      }
      console['log'](chalk['green'](getTime() + '\x20[' + _0x4a1b33['name'] + ']\x20Task\x20' + (_0x16f01f + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0xf62ec0);
    } catch (_0xd69425) {
      console['log'](chalk['red'](getTime() + '\x20[' + _0x4a1b33['name'] + ']\x20Task\x20' + (_0x16f01f + 0x1) + '\x20:\x20' + _0xd69425)), _0x1f80e1[0x0]['title'] = 'Failed\x20entry', _0x1f80e1[0x0]['description'] = '' + _0xd69425, await sendWebhook(errorWH, _0xf62ec0);
    } finally {
      _0x18e4ce && _0x18e4ce['close']();
      if (_0x16f01f + 0x1 == _0x2b95f0['length']) {
        console['log'](chalk['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await delay(0x7d0);
        break;
      }
      console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function kickzAcc(_0x144876) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x131b6e = 0x0; _0x131b6e < kickz['length']; _0x131b6e++) {
    await jig(kickz, _0x131b6e);
    if (kickz[_0x131b6e]['Email'] == '' || kickz[_0x131b6e]['Password'] == '' || kickz[_0x131b6e]['FirstName'] == '' || kickz[_0x131b6e]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x3a2baf = getProxy()[_0x131b6e]['split'](':');
    else
      var _0x34512b = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x3a2baf = getProxy()[_0x34512b]['split'](':');
    const _0x592bdf = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x3a2baf[0x0] + ':' + _0x3a2baf[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0xa1e12f = await _0x592bdf['newPage']();
      await _0xa1e12f['authenticate']({
        'username': '' + _0x3a2baf[0x2],
        'password': '' + _0x3a2baf[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20Getting\x20Session'), await _0xa1e12f['setRequestInterception'](!![]), _0xa1e12f['on']('request', _0x5ea742 => {
        _0x5ea742['resourceType']() === 'image' || _0x5ea742['resourceType']() === 'font' || _0x5ea742['resourceType']() === 'media' ? _0x5ea742['abort']() : _0x5ea742['continue']();
      }), await _0xa1e12f['goto'](_0x144876), await delay(0xbb8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20Starting\x20Registration'), await _0xa1e12f['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xa1e12f['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xa1e12f['waitForSelector']('#button-register'), await _0xa1e12f['click']('#button-register'), await _0xa1e12f['waitForSelector']('#customer_salutation'), await _0xa1e12f['select']('#customer_salutation', 'mr'), await delay(0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xa1e12f['waitForSelector']('#customer_firstname'), await _0xa1e12f['type']('#customer_firstname', '' + kickz[_0x131b6e]['FirstName']), await delay(0x352), await _0xa1e12f['waitForSelector']('#customer_lastname'), await _0xa1e12f['type']('#customer_lastname', '' + kickz[_0x131b6e]['LastName']), await delay(0x352), await _0xa1e12f['type']('#email-input', '' + kickz[_0x131b6e]['Email']), await delay(0x352), await _0xa1e12f['type']('#email-confirm-input', '' + kickz[_0x131b6e]['Email']), await delay(0x352), await _0xa1e12f['type']('#register-password', '' + kickz[_0x131b6e]['Password']), await delay(0x352), await _0xa1e12f['type']('#password-confirm', '' + kickz[_0x131b6e]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0xa1e12f['click']('#consent'), await delay(0x1f4);
      const _0x26e33b = await _0xa1e12f['$']('div.inputErrorMsg.b-form_section-message');
      if (_0x26e33b) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
        continue;
      }
      await _0xa1e12f['click']('#buttonRegister'), await _0xa1e12f['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20Account\x20' + kickz[_0x131b6e]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
      async function _0x520aae() {
        console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
        var _0x2c5946 = await prompt['get']('Code');
        return _0x2c5946['Code'];
      }
      ;
      code = await _0x520aae(), delay(0x320), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20Verifying..'), await _0xa1e12f['type']('#verificationCode', code), await delay(0x1f4), await _0xa1e12f['click']('#buttonVerify'), await delay(0x190), await _0xa1e12f['click']('#buttonVerify'), await delay(0x3e8);
      try {
        await _0xa1e12f['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20Account\x20' + kickz[_0x131b6e]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + kickz[_0x131b6e]['Email'] + ',' + kickz[_0x131b6e]['Password'] + ','), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20Account\x20' + kickz[_0x131b6e]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
      }
    } catch (_0x402412) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x131b6e + 0x1) + '\x20:\x20' + _0x402412));
    } finally {
      _0x592bdf && _0x592bdf['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
}
async function bwAcc(_0x1286b9, _0x1b198e) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x44caa3 = 0x0; _0x44caa3 < bouncewear['length']; _0x44caa3++) {
    await jig(bouncewear, _0x44caa3);
    if (bouncewear[_0x44caa3]['Email'] == '' || bouncewear[_0x44caa3]['Password'] == '' || bouncewear[_0x44caa3]['FirstName'] == '' || bouncewear[_0x44caa3]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x44caa3 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x507220 = getProxy()[_0x44caa3]['split'](':');
    else
      var _0x1ada26 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x507220 = getProxy()[_0x1ada26]['split'](':');
    const _0x4ed58c = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x507220[0x0] + ':' + _0x507220[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x4ee4ea = await _0x4ed58c['newPage']();
      await _0x4ee4ea['authenticate']({
        'username': '' + _0x507220[0x2],
        'password': '' + _0x507220[0x3]
      }), console['log'](getTime() + '\x20[' + _0x1b198e['name'] + ']\x20Task\x20' + (_0x44caa3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4ee4ea['setRequestInterception'](!![]), _0x4ee4ea['on']('request', _0x20df72 => {
        _0x20df72['resourceType']() === 'image' || _0x20df72['resourceType']() === 'font' || _0x20df72['resourceType']() === 'media' ? _0x20df72['abort']() : _0x20df72['continue']();
      }), await _0x4ee4ea['goto'](_0x1286b9), await delay(0xbb8), await _0x4ee4ea['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x1b198e['name'] + ']\x20Task\x20' + (_0x44caa3 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4ee4ea['type']('#RegisterForm-FirstName', '' + bouncewear[_0x44caa3]['FirstName']), await delay(0x226), await _0x4ee4ea['type']('#RegisterForm-LastName', '' + bouncewear[_0x44caa3]['LastName']), await delay(0x226), await _0x4ee4ea['type']('#RegisterForm-email', '' + bouncewear[_0x44caa3]['Email']), await delay(0x226), await _0x4ee4ea['type']('#RegisterForm-password', '' + bouncewear[_0x44caa3]['Password']), await delay(0x226), await _0x4ee4ea['click']('#marketing'), console['log'](getTime() + '\x20[' + _0x1b198e['name'] + ']\x20Task\x20' + (_0x44caa3 + 0x1) + '\x20:\x20Submitting..'), await _0x4ee4ea['$eval']('#RegisterForm', _0x40a666 => _0x40a666['submit']()), await delay(0x1f40), console['log'](getTime() + '\x20[' + _0x1b198e['name'] + ']\x20Task\x20' + (_0x44caa3 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x4ee4ea['solveRecaptchas'](), await _0x4ee4ea['click']('.shopify-challenge__button.btn');
      async function _0x3b559c() {
        for (var _0x2a3e05 = 0x0; _0x2a3e05 < 0x4; _0x2a3e05++) {
          try {
            console['log']('try'), await _0x4ee4ea['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](getTime() + '\x20[' + _0x1b198e['name'] + ']\x20Task\x20' + (_0x44caa3 + 0x1) + '\x20:\x20' + chalk['red']('Catpcha\x20failed,\x20retrying..')), await _0x4ee4ea['solveRecaptchas'](), await _0x4ee4ea['click']('.shopify-challenge__button.btn');
          } catch {
            console['log']('catch');
            break;
          }
        }
      }
      await _0x3b559c(), console['log'](getTime() + '\x20[' + _0x1b198e['name'] + ']\x20Task\x20' + (_0x44caa3 + 0x1) + '\x20:\x20Captcha\x20Solved'), await delay(0x1f4);
      try {
        await _0x4ee4ea['waitForSelector']('.featured-title'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x1b198e['name'] + ']\x20Task\x20' + (_0x44caa3 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x44caa3]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x44caa3]['Email'] + ',' + bouncewear[_0x44caa3]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x1b198e['name'] + ']\x20Task\x20' + (_0x44caa3 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x44caa3]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
      } catch (_0x2f7b07) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x44caa3 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2f7b07));
      }
    } catch (_0xadf682) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x44caa3 + 0x1) + '\x20:\x20' + _0xadf682));
    } finally {
      _0x4ed58c && _0x4ed58c['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function pattaAcc(_0x510457, _0x3b18fa, _0x5ce3e7) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x40d38e = 0x0; _0x40d38e < _0x5ce3e7['length']; _0x40d38e++) {
    await jig(_0x5ce3e7, _0x40d38e);
    if (_0x5ce3e7[_0x40d38e]['Email'] == '' || _0x5ce3e7[_0x40d38e]['Password'] == '' || _0x5ce3e7[_0x40d38e]['FirstName'] == '' || _0x5ce3e7[_0x40d38e]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x40d38e + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x5698bf = getProxy()[_0x40d38e]['split'](':');
    else
      var _0x22738f = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x5698bf = getProxy()[_0x22738f]['split'](':');
    const _0x3a1574 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x5698bf[0x0] + ':' + _0x5698bf[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x1b0379 = await _0x3a1574['newPage']();
      await _0x1b0379['authenticate']({
        'username': '' + _0x5698bf[0x2],
        'password': '' + _0x5698bf[0x3]
      }), console['log'](getTime() + '\x20[' + _0x3b18fa['name'] + ']\x20Task\x20' + (_0x40d38e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1b0379['setRequestInterception'](!![]), _0x1b0379['on']('request', _0x147ed1 => {
        _0x147ed1['resourceType']() === 'image' || _0x147ed1['resourceType']() === 'font' || _0x147ed1['resourceType']() === 'media' ? _0x147ed1['abort']() : _0x147ed1['continue']();
      }), await _0x1b0379['goto'](_0x510457), await delay(0xbb8), await _0x1b0379['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x3b18fa['name'] + ']\x20Task\x20' + (_0x40d38e + 0x1) + '\x20:\x20Filling\x20information'), await _0x1b0379['type']('#RegisterForm-FirstName', '' + _0x5ce3e7[_0x40d38e]['FirstName']), await delay(0x226), await _0x1b0379['type']('#RegisterForm-LastName', '' + _0x5ce3e7[_0x40d38e]['LastName']), await delay(0x226), await _0x1b0379['type']('#RegisterForm-email', '' + _0x5ce3e7[_0x40d38e]['Email']), await delay(0x226), await _0x1b0379['type']('#RegisterForm-password', '' + _0x5ce3e7[_0x40d38e]['Password']), await delay(0x226), console['log'](getTime() + '\x20[' + _0x3b18fa['name'] + ']\x20Task\x20' + (_0x40d38e + 0x1) + '\x20:\x20Submitting..'), await _0x1b0379['$eval']('#RegisterForm', _0x18c310 => _0x18c310['submit']()), await delay(0x1f40);
      try {
        await _0x1b0379['waitForSelector']('.home-page-grid__collection'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x3b18fa['name'] + ']\x20Task\x20' + (_0x40d38e + 0x1) + '\x20:\x20Account\x20' + _0x5ce3e7[_0x40d38e]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x5ce3e7[_0x40d38e]['Email'] + ',' + _0x5ce3e7[_0x40d38e]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x3b18fa['name'] + ']\x20Task\x20' + (_0x40d38e + 0x1) + '\x20:\x20Account\x20' + _0x5ce3e7[_0x40d38e]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
      } catch (_0x1e6e9a) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x40d38e + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1e6e9a));
      }
    } catch (_0x198ba8) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x40d38e + 0x1) + '\x20:\x20' + _0x198ba8));
    } finally {
      _0x3a1574 && _0x3a1574['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function pattaFunction(_0x2002f8, _0x1ddd78, _0x552432) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x55eed1 = 0x0; _0x55eed1 < _0x552432['length']; _0x55eed1++) {
    await jig(_0x552432, _0x55eed1);
    if (_0x552432[_0x55eed1]['Email'] == '' || _0x552432[_0x55eed1]['Password'] == '' || _0x552432[_0x55eed1]['FirstName'] == '' || _0x552432[_0x55eed1]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x55eed1 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x106c9f = getProxy()[_0x55eed1]['split'](':');
    else
      var _0x5610f3 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x106c9f = getProxy()[_0x5610f3]['split'](':');
    const _0x282259 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x106c9f[0x0] + ':' + _0x106c9f[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x4eed68 = await _0x282259['newPage']();
      await _0x4eed68['authenticate']({
        'username': '' + _0x106c9f[0x2],
        'password': '' + _0x106c9f[0x3]
      }), console['log'](getTime() + '\x20[' + _0x1ddd78['name'] + ']\x20Task\x20' + (_0x55eed1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4eed68['setRequestInterception'](!![]), _0x4eed68['on']('request', _0x3fb56b => {
        _0x3fb56b['resourceType']() === 'image' || _0x3fb56b['resourceType']() === 'font' || _0x3fb56b['resourceType']() === 'media' ? _0x3fb56b['abort']() : _0x3fb56b['continue']();
      }), await _0x4eed68['goto']('https://www.patta.nl/nl/account/login', {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), await _0x4eed68['waitForSelector']('#CustomerEmail'), console['log'](getTime() + '\x20[' + _0x1ddd78['name'] + ']\x20Task\x20' + (_0x55eed1 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4eed68['type']('#CustomerEmail', '' + _0x552432[_0x55eed1]['Email']), await delay(0x12c), await _0x4eed68['type']('#CustomerPassword', '' + _0x552432[_0x55eed1]['Password']), await delay(0x226), await _0x4eed68['$eval']('#customer_login', _0x27a4a8 => _0x27a4a8['submit']());
      try {
        await _0x4eed68['waitForSelector']('#orders'), await delay(0x4b0);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x1ddd78['name'] + ']\x20Task\x20' + (_0x55eed1 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
        continue;
      }
      await _0x4eed68['goto']('' + _0x552432[_0x55eed1]['Url'], {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x1ddd78['name'] + ']\x20Task\x20' + (_0x55eed1 + 0x1) + '\x20:\x20Starting\x20Entry');
      try {
        await _0x4eed68['waitForSelector']('#email');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x1ddd78['name'] + ']\x20Task\x20' + (_0x55eed1 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
      }
      await _0x4eed68['type']('#email', '' + _0x552432[_0x55eed1]['Email']), await delay(0x384), await _0x4eed68['type']('#first_name', '' + _0x552432[_0x55eed1]['FirstName']), await delay(0x514), await _0x4eed68['type']('#last_name', '' + _0x552432[_0x55eed1]['LastName']), await delay(0x514), await _0x4eed68['type']('#street_address', _0x552432[_0x55eed1]['Address1'] + '\x20' + _0x552432[_0x55eed1]['HouseNumber'] + '\x20' + _0x552432[_0x55eed1]['Address2']), await delay(0x2bc), await _0x4eed68['type']('#zip_code', '' + _0x552432[_0x55eed1]['Postcode']), await delay(0x320), await _0x4eed68['type']('#city', '' + _0x552432[_0x55eed1]['City']), await delay(0x320), await _0x4eed68['type']('#bday', '' + _0x552432[_0x55eed1]['Bday']), await delay(0x320), await _0x4eed68['type']('#instagram', '' + _0x552432[_0x55eed1]['Follower']), await delay(0x352);
      if (_0x552432[_0x55eed1]['Size'] == 'RANDOM') {
        const _0x337aaf = await _0x4eed68['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x39c821 => {
          return _0x39c821['map'](_0x4edec8 => _0x4edec8['textContent']);
        });
        var _0x51197a = Math['round'](Math['random']() * (_0x337aaf['length'] - 0x1));
        console['log'](getTime() + '\x20[' + _0x1ddd78['name'] + ']\x20Task\x20' + (_0x55eed1 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x337aaf[_0x51197a]), await _0x4eed68['click']('label[data-eu-size=\x22' + _0x337aaf[_0x51197a] + '\x22]');
      } else {
        console['log'](getTime() + '\x20[' + _0x1ddd78['name'] + ']\x20Task\x20' + (_0x55eed1 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x552432[_0x55eed1]['Size']);
        try {
          await _0x4eed68['click']('label[data-eu-size=\x22' + _0x552432[_0x55eed1]['Size'] + '\x22]');
        } catch {
          await _0x4eed68['click']('label[data-eu-size=\x22' + _0x552432[_0x55eed1]['Size'] + '.0\x22]');
        }
      }
      await delay(0xbb8), await _0x4eed68['$$eval']('.raffle__checkbox-label', _0x5c61bf => _0x5c61bf['forEach'](_0x311cc0 => _0x311cc0['click']())), await delay(0x7d0), console['log'](getTime() + '\x20[' + _0x1ddd78['name'] + ']\x20Task\x20' + (_0x55eed1 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x4eed68['click']('#raffle__form-submit'), await delay(0x1388);
      try {
        await _0x4eed68['waitForSelector']('#raffle__confirmation-message-container[class=\x22\x22]'), console['log'](chalk['green'](getTime() + '\x20[' + _0x1ddd78['name'] + ']\x20Task\x20' + (_0x55eed1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch (_0x2d7476) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x55eed1 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x2d7476));
      }
    } catch (_0x1a5bfb) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x55eed1 + 0x1) + '\x20:\x20' + _0x1a5bfb));
    } finally {
      _0x282259 && _0x282259['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function jdFunction(_0x417611, _0x452130) {
  var _0x5cadee = ![], _0x24b5fb = ![];
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x19a3ad = 0x0; _0x19a3ad < _0x452130['length']; _0x19a3ad++) {
    var _0x388b69 = [{
      'type': 'rich',
      'title': 'Succesfull\x20Entry',
      'description': '' + _0x417611['name'],
      'color': 0xc0d6d6,
      'url': '',
      'fields': [
        {
          'name': 'Product',
          'value': '' + _0x452130[_0x19a3ad]['Url']
        },
        {
          'name': 'Size',
          'value': '' + _0x452130[_0x19a3ad]['Size']
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
    const _0x3ceac4 = { 'embeds': _0x388b69 };
    await jig(_0x452130, _0x19a3ad);
    if (_0x452130[_0x19a3ad]['Email'] == '' || _0x452130[_0x19a3ad]['Url'] == '' || _0x452130[_0x19a3ad]['FirstName'] == '' || _0x452130[_0x19a3ad]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x19a3ad + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x13a02c = getProxy()[_0x19a3ad]['split'](':');
    else
      var _0x2e0528 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x13a02c = getProxy()[_0x2e0528]['split'](':');
    const _0x850085 = await puppeteer['launch']({
      'headless': ![],
      'args': [
        '--proxy-server=' + _0x13a02c[0x0] + ':' + _0x13a02c[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x134354 = await _0x850085['newPage']();
      await _0x134354['authenticate']({
        'username': '' + _0x13a02c[0x2],
        'password': '' + _0x13a02c[0x3]
      }), console['log'](getTime() + '\x20[' + _0x417611['name'] + ']\x20Task\x20' + (_0x19a3ad + 0x1) + '\x20:\x20Getting\x20Session'), await _0x134354['setRequestInterception'](!![]), _0x134354['on']('request', _0x52d2c3 => {
        _0x52d2c3['resourceType']() === 'image' || _0x52d2c3['resourceType']() === 'font' || _0x52d2c3['resourceType']() === 'media' ? _0x52d2c3['abort']() : _0x52d2c3['continue']();
      }), await _0x134354['goto']('' + _0x452130[_0x19a3ad]['Url'], {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), console['log'](getTime() + '\x20[' + _0x417611['name'] + ']\x20Task\x20' + (_0x19a3ad + 0x1) + '\x20:\x20Filling\x20Information'), await _0x134354['waitForSelector']('#comp_firstname'), await _0x134354['type']('#comp_firstname', '' + _0x452130[_0x19a3ad]['FirstName']), await _0x134354['waitForSelector']('#comp_lastname'), await _0x134354['type']('#comp_lastname', '' + _0x452130[_0x19a3ad]['LastName']), await _0x134354['waitForSelector']('#comp_email'), await _0x134354['type']('#comp_email', '' + _0x452130[_0x19a3ad]['Email']), await _0x134354['waitForSelector']('#comp_paypalemail'), await _0x134354['type']('#comp_paypalemail', '' + _0x452130[_0x19a3ad]['Email']), await _0x134354['waitForSelector']('#comp_mobile_end'), await _0x134354['type']('#comp_mobile_end', '' + _0x452130[_0x19a3ad]['Phone']), await _0x134354['waitForSelector']('#comp_dob'), await _0x134354['type']('#comp_dob', '08/09/1992'), console['log'](getTime() + '\x20[' + _0x417611['name'] + ']\x20Task\x20' + (_0x19a3ad + 0x1) + '\x20:\x20Choosing\x20Size');
      if (_0x452130[_0x19a3ad]['Size'] == 'RANDOM') {
        const _0xa190b = await _0x134354['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x298af9 => {
          return _0x298af9['map'](_0x1c6536 => _0x1c6536['value']);
        });
        var _0x27ea74 = Math['round'](Math['random']() * (_0xa190b['length'] - 0x2));
        await _0x134354['select']('#shoesize', _0xa190b[_0x27ea74 + 0x1]), await delay(0x3e8);
      } else {
        const _0x1b25be = await _0x134354['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1d15c1 => {
          return _0x1d15c1['map'](_0x24965b => _0x24965b['innerText']);
        }), _0x2fd4c8 = await _0x134354['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x319a0e => {
          return _0x319a0e['map'](_0x5c473a => _0x5c473a['value']);
        });
        var _0x55ae53 = _0x452130[_0x19a3ad]['Size'];
        for (var _0x482018 = 0x1; _0x482018 < _0x2fd4c8['length']; _0x482018++) {
          var _0x42d87b = _0x1b25be[_0x482018]['split']('\x20')[0x0];
          if (_0x42d87b == _0x55ae53) {
            await _0x134354['select']('#shoesize', _0x2fd4c8[_0x482018]);
            break;
          } else {
            if (_0x482018 + 0x1 == _0x2fd4c8['length'])
              throw new Error('Size\x20Not\x20Found..');
          }
        }
      }
      await _0x134354['waitForSelector']('#comp_address1'), await _0x134354['type']('#comp_address1', _0x452130[_0x19a3ad]['Address1'] + '\x20' + _0x452130[_0x19a3ad]['HouseNumber']), await _0x134354['waitForSelector']('#comp_address2'), await _0x134354['type']('#comp_address2', '' + _0x452130[_0x19a3ad]['Address2']), await _0x134354['waitForSelector']('#comp_address2'), await _0x134354['type']('#comp_address3', '' + _0x452130[_0x19a3ad]['City']), await _0x134354['waitForSelector']('#comp_postcode'), await _0x134354['type']('#comp_postcode', '' + _0x452130[_0x19a3ad]['Zip']), console['log'](getTime() + '\x20[' + _0x417611['name'] + ']\x20Task\x20' + (_0x19a3ad + 0x1) + '\x20:\x20Sending\x20Entry'), await delay(0x4b0), await _0x134354['click']('label#emailhold'), await delay(0x5dc), await _0x134354['click']('#preauth_tandc_email\x20>\x20label'), await delay(0x5dc), await _0x134354['click']('#submit'), await _0x134354['waitForSelector']('#paymentWrap'), console['log'](getTime() + '\x20[' + _0x417611['name'] + ']\x20Task\x20' + (_0x19a3ad + 0x1) + '\x20:\x20' + chalk['blue']('Awaiting\x20Paypal\x20Payment')), _0x850085['on']('targetcreated', async _0x50f82d => {
        if (_0x50f82d['type']() === 'page') {
          const _0x3d82d7 = await _0x50f82d['page']();
          async function _0x30ec6f() {
            try {
              await _0x134354['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x24b5fb = !![];
              return;
            } catch {
            }
          }
          async function _0x11b98c() {
            try {
              await _0x134354['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x5cadee = !![];
              return;
            } catch {
            }
          }
          _0x11b98c(), _0x30ec6f(), await delay(0x493e0);
        }
      });
      async function _0x391001() {
        for (let _0x21ec3a = 0x0; _0x21ec3a < 0x12c; _0x21ec3a++) {
          if (_0x5cadee == !![]) {
            console['log'](chalk['green'](getTime() + '\x20[' + _0x417611['name'] + ']\x20Task\x20' + (_0x19a3ad + 0x1) + '\x20:\x20Raffle\x20Entered!')), sendWebhook(succesWH, _0x3ceac4);
            return;
          } else {
            if (_0x24b5fb)
              throw new Error('Paypal\x20Error:\x20Target\x20closed');
            else
              await delay(0x3e8);
          }
        }
        throw new Error('Paypal\x20Error');
      }
      await delay(0xbb8), await _0x134354['click']('.zoid-outlet'), await delay(0x7d0), await _0x391001();
    } catch (_0x1684c4) {
      console['log'](chalk['red'](getTime() + '\x20[' + _0x417611['name'] + ']\x20Task\x20' + (_0x19a3ad + 0x1) + '\x20:\x20' + _0x1684c4)), _0x388b69[0x0]['title'] = 'Failed\x20entry', _0x388b69[0x0]['description'] = _0x417611['name'] + ':\x20' + _0x1684c4, await sendWebhook(errorWH, _0x3ceac4);
    } finally {
      _0x850085 && _0x850085['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function oqiumFunction(_0x5b4480, _0x28d790, _0x2357d9, _0x4c7b11) {
  await jig(_0x4c7b11, _0x5b4480);
  var _0x306b18 = [{
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
        'value': '' + _0x4c7b11[_0x5b4480]['Size']
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
  const _0x2a2037 = { 'embeds': _0x306b18 };
  if (settings['useRandomProxy'] = ![])
    var _0x35b878 = getProxy()[_0x5b4480]['split'](':');
  else
    var _0x1ca19a = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x35b878 = getProxy()[_0x1ca19a]['split'](':');
  var _0x90638 = _0x2357d9['data'];
  _0x28d790 == 'exp' ? _0x90638['data']['attributes']['email'] = '' + _0x4c7b11[_0x5b4480]['FirstName'] + _0x4c7b11[_0x5b4480]['LastName'] + settings['catchall'] : _0x90638['data']['attributes']['email'] = '' + _0x4c7b11[_0x5b4480]['Email'];
  _0x90638['data']['attributes']['properties']['$first_name'] = '' + _0x4c7b11[_0x5b4480]['FirstName'], _0x90638['data']['attributes']['properties']['$last_name'] = '' + _0x4c7b11[_0x5b4480]['LastName'], _0x90638['data']['attributes']['properties']['$address1'] = _0x4c7b11[_0x5b4480]['Address1'] + '\x20' + _0x4c7b11[_0x5b4480]['Address2'], _0x90638['data']['attributes']['properties']['$zip'] = '' + _0x4c7b11[_0x5b4480]['Zip'], _0x90638['data']['attributes']['properties']['$city'] = '' + _0x4c7b11[_0x5b4480]['City'], _0x90638['data']['attributes']['properties']['$country'] = '' + _0x4c7b11[_0x5b4480]['Country'], _0x90638['data']['attributes']['properties']['Size'] = '' + _0x4c7b11[_0x5b4480]['Size'], _0x90638['data']['attributes']['properties']['$phone_number'] = '' + _0x4c7b11[_0x5b4480]['Phone'], _0x90638['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4c7b11[_0x5b4480]['Follower'];
  var _0x35dcd2 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x2357d9['url'],
    'headers': _0x2357d9['headers'],
    'body': JSON['stringify'](_0x90638),
    'proxy': 'http://' + _0x35b878[0x2] + ':' + _0x35b878[0x3] + '@' + _0x35b878[0x0] + ':' + _0x35b878[0x1]
  };
  return _0x28d790 === 'ver' && (_0x35dcd2['method'] = 'GET'), new Promise(function (_0x350a17, _0x251da8) {
    callback = async (_0x413b30, _0x473d95, _0x5aadd2) => {
      !_0x413b30 && _0x473d95['statusCode'] == 0xca || !_0x413b30 && _0x473d95['statusCode'] == 0xc8 ? (await sendWebhook(succesWH, _0x2a2037), _0x350a17(console['log'](chalk['green'](getTime() + '\x20[' + _0x2357d9['name'] + ']\x20Task\x20' + (_0x5b4480 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x306b18[0x0]['title'] = 'Failed\x20entry', _0x306b18[0x0]['description'] = '' + _0x413b30, await sendWebhook(errorWH, _0x2a2037), _0x251da8(console['log'](getTime() + '\x20[' + _0x2357d9['name'] + ']\x20Task\x20' + (_0x5b4480 + 0x1) + ':\x20' + _0x413b30)));
    };
    try {
      console['log'](getTime() + '\x20[' + _0x2357d9['name'] + ']\x20Task\x20' + (_0x5b4480 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x90638['data']['attributes']['email']), request(_0x35dcd2, callback);
    } catch (_0x4f7ec3) {
      console['log'](getTime() + '\x20Task\x20' + (_0x5b4480 + 0x1) + ':\x20' + _0x4f7ec3);
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
      async function _0x13a15f() {
        console['clear'](), console['log']('Welcome\x20to\x20' + chalk['cyan']('JRaffles();') + '\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
        for (var _0x2d7718 = 0x0; _0x2d7718 < modules['length']; _0x2d7718++) {
          if (modules[_0x2d7718]['name'] === 'Reload\x20Settings' || modules[_0x2d7718]['name'] === 'Change\x20Settings')
            continue;
          else
            console['log']('\x20(' + _0x2d7718 + ')\x20[' + modules[_0x2d7718]['name'] + ']');
        }
        ;
        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (modules['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (modules['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
        if (modules[taskModule]['name'] == 'AFEW\x20Store') {
          taskFunction = await getFunction(modules[taskModule]['modules']);
          var _0x2fa1e8 = modules[taskModule]['modules'][taskFunction];
          console['clear'](), await afewScraper(), await getAfewProduct();
          var _0x29bc5b = await getTaskFile();
          return await afewFunction(afewProducts[afewProduct], 'nor', _0x2fa1e8, _0x29bc5b), _0x13a15f();
        } else {
          if (modules[taskModule]['name'] == 'MAHA\x20Amsterdam') {
            taskFunction = await getFunction(modules[taskModule]['modules']);
            var _0x2fa1e8 = modules[taskModule]['modules'][taskFunction];
            if (taskFunction == 0x0) {
              var _0x94af42 = await getTaskFile();
              console['log']('Starting\x20' + _0x94af42['length'] + '\x20MAHA\x20Tasks');
              for (var _0x48a87b = 0x0; _0x48a87b < _0x94af42['length']; _0x48a87b++) {
                console['log'](getTime() + '\x20[' + _0x2fa1e8['name'] + ']\x20Task\x20' + (_0x48a87b + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x48a87b, 'nor', _0x2fa1e8, _0x94af42), console['log'](getTime() + '\x20[' + _0x2fa1e8['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
              ;
              return _0x13a15f();
            } else {
              if (taskFunction == 0x1) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x48a87b = 0x0; _0x48a87b < links['length']; _0x48a87b++) {
                  _0x2fa1e8['url'] = links[_0x48a87b], console['log'](getTime() + '\x20[' + _0x2fa1e8['name'] + ']\x20Task\x20' + (_0x48a87b + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x48a87b, 'ver', _0x2fa1e8), console['log'](getTime() + '\x20[' + _0x2fa1e8['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
                ;
                return _0x13a15f();
              }
            }
          } else {
            if (modules[taskModule]['name'] == 'FOOTSHOP') {
              var _0x2cbcb9 = await getTaskFile();
              return console['log'](_0x2cbcb9), await footshopModule(_0x2cbcb9), await delay(0x1388), _0x13a15f();
            } else {
              if (modules[taskModule]['name'] == 'OQIUM\x20Store') {
                taskFunction = await getFunction(modules[taskModule]['modules']);
                var _0x2fa1e8 = modules[taskModule]['modules'][taskFunction];
                console['clear']();
                if (taskFunction == 0x0) {
                  var _0x58e70b = await getTaskFile();
                  console['log']('Starting\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                  for (var _0x48a87b = 0x0; _0x48a87b < _0x58e70b['length']; _0x48a87b++) {
                    console['log'](getTime() + '\x20[' + _0x2fa1e8['name'] + ']\x20Task\x20' + (_0x48a87b + 0x1) + ':\x20Getting\x20Session');
                    try {
                      await oqiumFunction(_0x48a87b, 'exp', _0x2fa1e8, _0x58e70b);
                    } catch {
                      console['log'](chalk['red'](getTime() + '\x20[' + _0x2fa1e8['name'] + ']\x20Task\x20' + (_0x48a87b + 0x1) + ':\x20Task\x20failed'));
                    }
                    console['log'](getTime() + '\x20[' + _0x2fa1e8['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                  }
                } else {
                  if (taskFunction == 0x1) {
                    console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                    for (var _0x48a87b = 0x0; _0x48a87b < links['length']; _0x48a87b++) {
                      try {
                        modules[taskModule]['url'] = links[_0x48a87b], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x48a87b + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x48a87b, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                      } catch (_0x328b81) {
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
                  var _0x2fa1e8 = modules[taskModule]['modules'][taskFunction];
                  console['clear']();
                  if (taskFunction == 0x0)
                    await bwAcc('https://bouncewear.com/nl/account/register', _0x2fa1e8);
                  else {
                    if (taskFunction == 0x1) {
                    }
                  }
                  ;
                } else {
                  if (modules[taskModule]['name'] == 'PATTA') {
                    taskFunction = await getFunction(modules[taskModule]['modules']);
                    var _0x2fa1e8 = modules[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x0) {
                      var _0x28d7fd = await getTaskFile();
                      return await pattaAcc('https://patta.nl/account/register', _0x2fa1e8, _0x28d7fd), _0x13a15f();
                    } else {
                      if (taskFunction == 0x1) {
                        var _0x28d7fd = await getTaskFile();
                        return await pattaFunction('', _0x2fa1e8), _0x13a15f();
                      }
                    }
                    ;
                  } else {
                    if (modules[taskModule]['name'] == 'JD') {
                      taskFunction = await getFunction(modules[taskModule]['modules']);
                      var _0x2fa1e8 = modules[taskModule]['modules'][taskFunction];
                      console['clear']();
                      if (taskFunction == 0x0) {
                        var _0xf0f907 = await getTaskFile();
                        return await jdFunction(_0x2fa1e8, _0xf0f907), _0x13a15f();
                      }
                    } else {
                      if (modules[taskModule]['name'] == 'Change\x20Settings') {
                        console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                        var _0x3227c3 = 0x0;
                        for (const _0x12bf7c in settings) {
                          console['log']('(' + _0x3227c3 + ')\x20' + _0x12bf7c + '\x20:\x20' + settings[_0x12bf7c]), _0x3227c3++;
                        }
                        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x3227c3 + ')\x20Return\x20to\x20Main\x20Menu');
                        var _0x5e902e = await getSetting();
                        if (_0x5e902e == _0x3227c3)
                          return _0x13a15f();
                        console['clear'];
                        var _0x1de9c4 = 0x0;
                        for (var _0x437593 in settings) {
                          if (_0x5e902e == _0x1de9c4) {
                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x437593 + '\x20:'), settings[_0x437593] = await getValue(), fs['writeFileSync']('../settings.json', JSON['stringify'](settings));
                            break;
                          } else
                            _0x1de9c4++;
                        }
                        return console['log']('Settings\x20Saved!'), await delay(0xbb8), _0x13a15f();
                      } else {
                        if (modules[taskModule]['name'] == 'Reload\x20Settings')
                          return console['log']('Reloading\x20settings'), await loadSettings(), _0x13a15f();
                        else {
                          if (taskModule == 0x45) {
                            modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                            var _0x2d1588 = await getPassword();
                            _0x2d1588 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
      await _0x13a15f();
    } catch (_0x31eee4) {
      return console['log'](_0x31eee4), await delay(0x3a98);
    }
}
;
setTitle('JRaffles\x20' + version), loadSettings(), main();