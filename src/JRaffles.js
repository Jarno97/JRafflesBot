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
const delay = _0x25bbc0 => new Promise(_0x404b00 => setTimeout(_0x404b00, _0x25bbc0));
async function getLicense(_0x1db677) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x1db677, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x14675f => _0x14675f['data'])['catch'](() => null);
}
;
async function checkLicense(_0x372fa6) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x55a345 = await getLicense(_0x372fa6);
  username = JSON['stringify'](_0x55a345['user']['username']);
  if (!_0x55a345)
    return console['log']('License\x20not\x20found');
  if (!_0x55a345['user'])
    return console['log']('License\x20not\x20bound');
  return _0x55a345['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x595694 = await prompt['get']('Module');
  return console['clear'](), _0x595694['Module'];
}
;
async function getSetting() {
  var _0x1f75fd = await prompt['get']('Setting');
  return console['clear'](), _0x1f75fd['Setting'];
}
async function getTaskFile() {
  console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
  for (var _0x28b44f = 0x0; _0x28b44f < taskFiles['length']; _0x28b44f++) {
    console['log']('\x20(' + _0x28b44f + ')\x20' + taskFiles[_0x28b44f]);
  }
  console['log']('');
  var _0x5eb75b = await prompt['get']('Task'), _0x4ff2b7 = fs['readFileSync']('../tasks/' + taskFiles[_0x5eb75b['Task']], 'utf-8');
  return taskCSV = Papa['parse'](_0x4ff2b7, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x5eb75b['Task']])), taskCSV;
}
async function getProxyFile() {
  console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
  for (var _0x350d2f = 0x0; _0x350d2f < taskFiles['length']; _0x350d2f++) {
    console['log']('\x20(' + _0x350d2f + ')\x20' + taskFiles[_0x350d2f]);
  }
  console['log']('');
  var _0x2136e4 = await prompt['get']('Task'), _0x51edbb = fs['readFileSync']('../tasks/' + taskFiles[_0x2136e4['Task']], 'utf-8');
  return taskCSV = Papa['parse'](_0x51edbb, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x2136e4['Task']])), taskCSV;
}
async function getValue() {
  var _0x58aa47 = await prompt['get']('Value');
  return console['clear'](), _0x58aa47['Value'];
}
async function getFunction(_0x5ea212) {
  console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
  for (var _0x658c61 = 0x0; _0x658c61 < _0x5ea212['length']; _0x658c61++) {
    console['log']('\x20(' + _0x658c61 + ')\x20[' + _0x5ea212[_0x658c61]['name'] + ']');
  }
  ;
  console['log']('');
  var _0x32fe0a = await prompt['get']('Module');
  return _0x32fe0a['Module'];
}
async function getPassword() {
  var _0x1c31e6 = await prompt['get']('Password');
  return console['clear'](), _0x1c31e6['Password'];
}
;
async function getLinks() {
  var _0x26a875 = await prompt['get']('Links');
  return _0x26a875['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0xa1feff = 0x0; _0xa1feff < afewProducts['length']; _0xa1feff++) {
    console['log']('\x20(' + _0xa1feff + ')\x20' + afewProducts[_0xa1feff]);
  }
  ;
  console['log']();
  let _0x306ab9 = await prompt['get']('Product');
  console['clear'](), afewProduct = _0x306ab9['Product'];
  return;
}
;
function getTime() {
  var _0x3e0fb6 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x3e0fb6;
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
async function sendWebhook(_0x3dd22f, _0x1d37b2) {
  let _0x11724c = { 'headers': { 'content-type': 'application/json' } };
  await axios['post'](_0x3dd22f, _0x1d37b2, _0x11724c);
}
;
async function jig(_0x5c33dc, _0x2b4e5a) {
  var _0x287ced = _0x5c33dc[_0x2b4e5a]['Address1']['split'](''), _0x36f8fc = _0x5c33dc[_0x2b4e5a]['Address2']['split'](''), _0xed824 = _0x5c33dc[_0x2b4e5a]['Email']['split']('@');
  for (var _0xdbbf52 = 0x0; _0xdbbf52 < _0x287ced['length']; _0xdbbf52++) {
    if (_0x287ced[_0xdbbf52] == 'X') {
      var _0x43b3d1 = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x287ced[_0xdbbf52] = lettersArray[_0x43b3d1];
    }
  }
  ;
  for (var _0xdbbf52 = 0x0; _0xdbbf52 < _0x36f8fc['length']; _0xdbbf52++) {
    if (_0x36f8fc[_0xdbbf52] == 'X') {
      var _0x43b3d1 = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x36f8fc[_0xdbbf52] = lettersArray[_0x43b3d1];
    }
  }
  ;
  _0x5c33dc[_0x2b4e5a]['FirstName'] == 'RANDOM' && (_0x5c33dc[_0x2b4e5a]['FirstName'] = random['first']());
  _0x5c33dc[_0x2b4e5a]['LastName'] == 'RANDOM' && (_0x5c33dc[_0x2b4e5a]['LastName'] = random['last']());
  _0xed824[0x0] == 'RANDOM' ? _0xed824[0x0] = '' + random['first']() + random['last']() + '@' : _0xed824[0x0] = _0xed824[0x0] + '@';
  _0x5c33dc[_0x2b4e5a]['Email'] = _0xed824['join'](''), _0x5c33dc[_0x2b4e5a]['Address1'] = _0x287ced['join'](''), _0x5c33dc[_0x2b4e5a]['Address2'] = _0x36f8fc['join']('');
  return;
}
;
function getProxy() {
  let _0x55ff8a = proxyFile['split']('\x0a'), _0x2c37cb = _0x55ff8a['map']((_0x167aa2, _0x135c0a) => {
    sanatizeProxy = _0x167aa2['replace']('\x0d', '');
    if (_0x55ff8a[_0x135c0a + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x2c37cb;
}
;
async function afewScraper() {
  var _0x337348 = getProxy()[0x1]['split'](':');
  const _0x4f93cd = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x337348[0x0] + ':' + _0x337348[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x417d39 = await _0x4f93cd['newPage']();
    await _0x417d39['authenticate']({
      'username': '' + _0x337348[0x2],
      'password': '' + _0x337348[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x417d39['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x417d39['setRequestInterception'](!![]), _0x417d39['on']('request', _0x599238 => {
      _0x599238['resourceType']() === 'image' || _0x599238['resourceType']() === 'font' || _0x599238['resourceType']() === 'media' ? _0x599238['abort']() : _0x599238['continue']();
    }), await _0x417d39['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x417d39['waitForTimeout'](0xbb8), await _0x417d39['waitForSelector']('.product-card');
    const _0x187f63 = await _0x417d39['$$eval']('a.product-card', _0x658f40 => {
      return _0x658f40['map'](_0x43a84c => _0x43a84c['href']);
    });
    return afewProducts = _0x187f63;
  } catch (_0x47b3bf) {
    console['log']('\x20' + _0x47b3bf);
  } finally {
    _0x4f93cd['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x1f8065, _0x367305, _0x405c3c, _0x20a07f) {
  await jig(_0x20a07f, _0x1f8065);
  var _0xa16b14 = [{
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
        'value': '' + oqium[_0x1f8065]['Size']
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
  const _0x236e56 = { 'embeds': _0xa16b14 };
  if (settings['useRandomProxy'] = ![])
    var _0x7bec73 = getProxy()[_0x1f8065]['split'](':');
  else
    var _0x4c2b6b = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x7bec73 = getProxy()[_0x4c2b6b]['split'](':');
  var _0x291b15 = _0x405c3c['data'];
  _0x367305 == 'exp' ? _0x291b15['data']['attributes']['email'] = '' + _0x20a07f[_0x1f8065]['FirstName'] + _0x20a07f[_0x1f8065]['LastName'] + settings['catchall'] : _0x291b15['data']['attributes']['email'] = '' + _0x20a07f[_0x1f8065]['Email'];
  _0x291b15['data']['attributes']['properties']['$first_name'] = '' + _0x20a07f[_0x1f8065]['FirstName'], _0x291b15['data']['attributes']['properties']['$last_name'] = '' + _0x20a07f[_0x1f8065]['LastName'], _0x291b15['data']['attributes']['properties']['$address1'] = _0x20a07f[_0x1f8065]['Address1'] + '\x20' + _0x20a07f[_0x1f8065]['Address2'], _0x291b15['data']['attributes']['properties']['$zip'] = '' + _0x20a07f[_0x1f8065]['Zip'], _0x291b15['data']['attributes']['properties']['$city'] = '' + _0x20a07f[_0x1f8065]['City'], _0x291b15['data']['attributes']['properties']['$country'] = '' + _0x20a07f[_0x1f8065]['Country'], _0x291b15['data']['attributes']['properties']['Size'] = '' + _0x20a07f[_0x1f8065]['Size'], _0x291b15['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x20a07f[_0x1f8065]['Follower'];
  var _0x444632 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x405c3c['url'],
    'headers': _0x405c3c['headers'],
    'body': JSON['stringify'](_0x291b15),
    'proxy': 'http://' + _0x7bec73[0x2] + ':' + _0x7bec73[0x3] + '@' + _0x7bec73[0x0] + ':' + _0x7bec73[0x1]
  };
  return _0x367305 === 'ver' && (_0x444632['method'] = 'GET'), new Promise(function (_0x4fbc9e, _0x1423ef) {
    callback = async (_0x5a49bb, _0x1d3abe, _0xbfa0a9) => {
      !_0x5a49bb && _0x1d3abe['statusCode'] == 0xca || !_0x5a49bb && _0x1d3abe['statusCode'] == 0xc8 ? _0x4fbc9e(console['log'](chalk['green'](getTime() + '\x20[' + _0x405c3c['name'] + ']\x20Task\x20' + (_0x1f8065 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0xa16b14[0x0]['title'] = 'Failed\x20entry', _0xa16b14[0x0]['description'] = '' + _0x5a49bb, await sendWebhook(errorWH, _0x236e56), _0x1423ef(console['log'](getTime() + '\x20[' + _0x405c3c['name'] + ']\x20Task\x20' + (_0x1f8065 + 0x1) + ':\x20' + _0x5a49bb)));
    };
    try {
      _0x367305 === 'ver' ? console['log'](getTime() + '\x20[' + _0x405c3c['name'] + ']\x20Task\x20' + (_0x1f8065 + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + _0x405c3c['name'] + ']\x20Task\x20' + (_0x1f8065 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x291b15['data']['attributes']['email']), request(_0x444632, callback);
    } catch (_0x439b99) {
      console['log'](getTime() + '\x20Task\x20' + (_0x1f8065 + 0x1) + ':\x20' + _0x439b99);
    }
  });
}
;
async function footshopModule(_0x51a8dd) {
  var _0x474718;
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x543bb6 = 0x0; _0x543bb6 < _0x51a8dd['length']; _0x543bb6++) {
    await jig(_0x51a8dd, _0x543bb6);
    if (_0x51a8dd[_0x543bb6]['Email'] == '' || _0x51a8dd[_0x543bb6]['FirstName'] == '' || _0x51a8dd[_0x543bb6]['LastName'] == '' || _0x51a8dd[_0x543bb6]['Country'] == '' || _0x51a8dd[_0x543bb6]['Size'] == '' || _0x51a8dd[_0x543bb6]['Address1'] == '' || _0x51a8dd[_0x543bb6]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    console['log'](_0x51a8dd[_0x543bb6]['Url']);
    async function _0x2e2ac5() {
      var _0x55f888 = await axios['get']('https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_')['then'](_0x211d5d => _0x211d5d['data'])['catch'](() => undefined);
      console['log'](_0x55f888);
      var _0x5b26a8 = _0x55f888['sizeSets']['Men']['sizes'];
      _0x5b26a8['length'] == 0x0 && (_0x5b26a8 = _0x55f888['sizeSets']['Women']['sizes'], _0x5b26a8['length'] == 0x0 && (_0x5b26a8 = _0x55f888['sizeSets']['Unisex']['sizes'], _0x5b26a8['length'] == 0x0 && (_0x5b26a8 = _0x55f888['sizeSets']['Kids']['sizes'])));
      ;
      async function _0x5eed45() {
        for (var _0xeae230 = 0x0; _0xeae230 < _0x5b26a8['length']; _0xeae230++) {
          if (_0x5b26a8[_0xeae230]['eur'] == _0x51a8dd[_0x543bb6]['Size'])
            return _0x474718 = _0x5b26a8[_0xeae230]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x20Size\x20' + _0x51a8dd[_0x543bb6]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x53423f = await _0x5eed45();
      if (_0x53423f == ![])
        return ![];
    }
    let _0x3ab2cb = await _0x2e2ac5();
    if (_0x3ab2cb == ![])
      continue;
    if (_0x51a8dd[_0x543bb6]['Email'] == '' || _0x51a8dd[_0x543bb6]['FirstName'] == '' || _0x51a8dd[_0x543bb6]['LastName'] == '' || _0x51a8dd[_0x543bb6]['Country'] == '' || _0x51a8dd[_0x543bb6]['Size'] == '' || _0x51a8dd[_0x543bb6]['Address1'] == '' || _0x51a8dd[_0x543bb6]['Zip'] == '' || _0x51a8dd[_0x543bb6]['Phone'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0xcf45cb = 'https://releases.footshop.com/register/' + _0x51a8dd[_0x543bb6]['Url'] + '/Men/' + _0x474718;
    if (settings['useRandomProxy'] = ![])
      var _0x5e27a6 = getProxy()[_0x543bb6]['split'](':');
    else
      var _0x3428aa = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x5e27a6 = getProxy()[_0x3428aa]['split'](':');
    const _0x136bf4 = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x5e27a6[0x0] + ':' + _0x5e27a6[0x1]]
    });
    try {
      const _0x2ac482 = await _0x136bf4['newPage']();
      await _0x2ac482['authenticate']({
        'username': '' + _0x5e27a6[0x2],
        'password': '' + _0x5e27a6[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2ac482['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2ac482['setRequestInterception'](!![]), _0x2ac482['on']('request', _0x3eecbb => {
        _0x3eecbb['resourceType']() === 'image' || _0x3eecbb['resourceType']() === 'font' || _0x3eecbb['resourceType']() === 'media' ? _0x3eecbb['abort']() : _0x3eecbb['continue']();
      }), await _0x2ac482['goto']('' + _0xcf45cb + _0x474718), await _0x2ac482['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x2ac482['type']('input[name=\x22email\x22]', '' + _0x51a8dd[_0x543bb6]['Email']), await delay(0x640), await _0x2ac482['type']('input[name=\x22phone\x22]', '' + _0x51a8dd[_0x543bb6]['Phone']), await delay(0x4b0), await _0x2ac482['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
      try {
        await _0x2ac482['type']('input[name=\x22firstName\x22]', '' + _0x51a8dd[_0x543bb6]['FirstName']), await delay(0x258);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
        continue;
      }
      await _0x2ac482['type']('input[name=\x22lastName\x22]', '' + _0x51a8dd[_0x543bb6]['LastName']), await delay(0xc8), await _0x2ac482['type']('input[name=\x22instagramUsername\x22]', '' + _0x51a8dd[_0x543bb6]['Follower']), await delay(0x4b0), await _0x2ac482['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x2ac482['select']('select[name=\x22country\x22]', '' + _0x51a8dd[_0x543bb6]['Country']), await delay(0x2bc), await _0x2ac482['type']('input[name=\x22streetName\x22]', '' + _0x51a8dd[_0x543bb6]['Address1']), await delay(0x258), await _0x2ac482['type']('input[name=\x22houseNumber\x22]', '' + _0x51a8dd[_0x543bb6]['HouseNumber'] + _0x51a8dd[_0x543bb6]['Address2']), await delay(0xc8), await _0x2ac482['type']('input[name=\x22postalCode\x22]', '' + _0x51a8dd[_0x543bb6]['Zip']), await delay(0x1f4), await _0x2ac482['type']('input[name=\x22city\x22]', '' + _0x51a8dd[_0x543bb6]['City']), await delay(0x4b0), await _0x2ac482['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x2ac482['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x2ac482['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x2ac482['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2ac482['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2ac482['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x4b0), await _0x2ac482['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x51a8dd[_0x543bb6]['CardNumber']), await delay(0x320), await _0x2ac482['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x51a8dd[_0x543bb6]['ExpiryDate']), await delay(0x4b0), await _0x2ac482['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x51a8dd[_0x543bb6]['CVV']), await delay(0x226), await _0x2ac482['type']('input[name=\x22holderName\x22]', '' + _0x51a8dd[_0x543bb6]['NameOnCard']), await delay(0x226), await _0x2ac482['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x20Awaiting\x203DS');
      try {
        await _0x2ac482['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await delay(0xbb8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x203DS\x20Failed'));
      }
    } catch (_0x55a0ae) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x543bb6 + 0x1) + '\x20:\x20' + _0x55a0ae);
    } finally {
      _0x136bf4['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x23ed52, _0x51a0be, _0x565baf, _0x66d8d5) => {
  for (var _0x460fe4 = 0x0; _0x460fe4 < _0x66d8d5['length']; _0x460fe4++) {
    await jig(_0x66d8d5, _0x460fe4);
    var _0xe77345 = [{
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
          'value': '' + _0x23ed52
        },
        {
          'name': 'Size',
          'value': '' + _0x66d8d5[_0x460fe4]['Size']
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
    const _0x270236 = { 'embeds': _0xe77345 };
    if (_0x66d8d5[_0x460fe4]['Email'] == '' || _0x66d8d5[_0x460fe4]['FirstName'] == '' || _0x66d8d5[_0x460fe4]['LastName'] == '' || _0x66d8d5[_0x460fe4]['Country'] == '' || _0x66d8d5[_0x460fe4]['Size'] == '' || _0x66d8d5[_0x460fe4]['Address1'] == '' || _0x66d8d5[_0x460fe4]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + _0x565baf['name'] + ']\x20Task\x20' + (_0x460fe4 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0xc3f647 = getProxy()[_0x460fe4]['split'](':');
    else
      var _0x2b1adc = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0xc3f647 = getProxy()[_0x2b1adc]['split'](':');
    const _0x428026 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0xc3f647[0x0] + ':' + _0xc3f647[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x455f80 = await _0x428026['newPage']();
      await _0x455f80['setDefaultNavigationTimeout'](0x1d4c0), await _0x455f80['authenticate']({
        'username': '' + _0xc3f647[0x2],
        'password': '' + _0xc3f647[0x3]
      }), console['log'](getTime() + '\x20[' + _0x565baf['name'] + ']\x20Task\x20' + (_0x460fe4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x455f80['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x455f80['setRequestInterception'](!![]), _0x455f80['on']('request', _0x2cf403 => {
        _0x2cf403['resourceType']() === 'image' || _0x2cf403['resourceType']() === 'font' || _0x2cf403['resourceType']() === 'media' ? _0x2cf403['abort']() : _0x2cf403['continue']();
      }), await _0x455f80['goto'](_0x23ed52), console['log'](getTime() + '\x20[' + _0x565baf['name'] + ']\x20Task\x20' + (_0x460fe4 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x455f80['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + _0x565baf['name'] + ']\x20Task\x20' + (_0x460fe4 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x455f80['waitForTimeout'](0x320);
      if (_0x66d8d5[_0x460fe4]['Size'] == 'RANDOM') {
        console['log'](getTime() + '\x20[' + _0x565baf['name'] + ']\x20Task\x20' + (_0x460fe4 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
        const _0x1793c2 = await _0x455f80['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x471879 => {
          return _0x471879['map'](_0x1f7aaa => _0x1f7aaa['href']);
        });
        var _0x428e75 = Math['round'](Math['random']() * (_0x1793c2['length'] - 0x1));
        await _0x455f80['goto']('' + _0x1793c2[_0x428e75]);
      } else {
        console['log'](getTime() + '\x20[' + _0x565baf['name'] + ']\x20Task\x20' + (_0x460fe4 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x66d8d5[_0x460fe4]['Size']), await _0x455f80['hover']('.release-type');
        try {
          await _0x455f80['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x66d8d5[_0x460fe4]['Size'] + '\x22]'), await _0x455f80['waitForTimeout'](0x320), await _0x455f80['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x66d8d5[_0x460fe4]['Size'] + '\x22]');
        } catch (_0x28902b) {
          console['log'](chalk['red'](getTime() + '\x20[' + _0x565baf['name'] + ']\x20Task\x20' + (_0x460fe4 + 0x1) + '\x20:\x20' + _0x28902b + '\x20Size\x20not\x20found')), _0xe77345[0x0]['title'] = 'Failed\x20entry', _0xe77345[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x270236);
          continue;
        }
      }
      await _0x455f80['waitForTimeout'](0x258), await _0x455f80['type']('#raffle-instagram', '' + _0x66d8d5[_0x460fe4]['Follower'], { 'delay': 0x64 }), await _0x455f80['waitForTimeout'](0x384), await _0x455f80['click']('#raffle-terms'), await _0x455f80['waitForTimeout'](0x384), await _0x455f80['evaluate'](() => {
        const _0x4d505a = document['querySelector']('button.btn[name=\x27add\x27]');
        _0x4d505a['click']();
      }), await _0x455f80['waitForTimeout'](0xbb8), await _0x455f80['waitForSelector']('#checkout_email'), await delay(0x3e8), console['log'](getTime() + '\x20[' + _0x565baf['name'] + ']\x20Task\x20' + (_0x460fe4 + 0x1) + '\x20:\x20Filling\x20Information');
      _0x51a0be == 'sec' ? await _0x455f80['type']('#checkout_email', '' + _0x66d8d5[_0x460fe4]['FirstName'] + _0x66d8d5[_0x460fe4]['LastName'] + settings['catchall'], 0x32) : await _0x455f80['type']('#checkout_email', '' + _0x66d8d5[_0x460fe4]['Email'], 0x32);
      await delay(0x320), await _0x455f80['select']('#checkout_shipping_address_country', '' + _0x66d8d5[_0x460fe4]['Country']), await _0x455f80['waitForTimeout'](0x258), await _0x455f80['type']('#checkout_shipping_address_first_name', '' + _0x66d8d5[_0x460fe4]['FirstName']), await _0x455f80['waitForTimeout'](0x320), await _0x455f80['type']('#checkout_shipping_address_last_name', '' + _0x66d8d5[_0x460fe4]['LastName']), await _0x455f80['waitForTimeout'](0x2bc), await _0x455f80['type']('#checkout_shipping_address_address1', _0x66d8d5[_0x460fe4]['Address1'] + '\x20' + _0x66d8d5[_0x460fe4]['HouseNumber']), await _0x455f80['waitForTimeout'](0x2bc), await _0x455f80['type']('#checkout_shipping_address_address2', '' + _0x66d8d5[_0x460fe4]['Address2']), await _0x455f80['waitForTimeout'](0x2bc), await _0x455f80['type']('#checkout_shipping_address_zip', '' + _0x66d8d5[_0x460fe4]['Postcode']), await _0x455f80['waitForTimeout'](0x2bc), await _0x455f80['type']('#checkout_shipping_address_city', '' + _0x66d8d5[_0x460fe4]['City']), await _0x455f80['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + _0x565baf['name'] + ']\x20Task\x20' + (_0x460fe4 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x455f80['evaluate'](() => {
        const _0x3e8314 = document['querySelector']('#continue_button');
        for (var _0x3269bf = 0x0; _0x3269bf < 0x5; _0x3269bf++) {
          if (_0x3e8314) {
            _0x3e8314['click']();
            break;
          } else
            delay(0xfa0);
        }
      }), await _0x455f80['waitForTimeout'](0x1194), await _0x455f80['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), _0x455f80['evaluate'](() => {
        const _0x10f27d = document['querySelector']('#continue_button');
        for (var _0x5f2818 = 0x0; _0x5f2818 < 0x5; _0x5f2818++) {
          if (_0x10f27d) {
            _0x10f27d['click']();
            break;
          } else
            delay(0xfa0);
        }
      }), await _0x455f80['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + _0x565baf['name'] + ']\x20Task\x20' + (_0x460fe4 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x455f80['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x455f80['evaluate'](() => {
        const _0x3d6686 = document['querySelector']('#continue_button');
        for (var _0x116848 = 0x0; _0x116848 < 0x5; _0x116848++) {
          if (_0x3d6686) {
            _0x3d6686['click']();
            break;
          } else
            delay(0xfa0);
        }
      }), await _0x455f80['waitForTimeout'](0x1194), await _0x455f80['waitForSelector']('#continue_button'), _0x455f80['evaluate'](() => {
        const _0x33f7ae = document['querySelector']('#continue_button');
        for (var _0x263302 = 0x0; _0x263302 < 0x5; _0x263302++) {
          if (_0x33f7ae) {
            _0x33f7ae['click']();
            break;
          } else
            delay(0xfa0);
        }
      });
      try {
        await _0x455f80['waitForSelector']('div[data-step=\x22thank_you\x22]');
      } catch (_0x2ff9a6) {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x565baf['name'] + ']\x20Task\x20' + (_0x460fe4 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x2ff9a6));
      }
      console['log'](chalk['green'](getTime() + '\x20[' + _0x565baf['name'] + ']\x20Task\x20' + (_0x460fe4 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x270236);
    } catch (_0xdc72c4) {
      console['log'](chalk['red'](getTime() + '\x20[' + _0x565baf['name'] + ']\x20Task\x20' + (_0x460fe4 + 0x1) + '\x20:\x20' + _0xdc72c4)), _0xe77345[0x0]['title'] = 'Failed\x20entry', _0xe77345[0x0]['description'] = '' + _0xdc72c4, await sendWebhook(errorWH, _0x270236);
    } finally {
      _0x428026 && _0x428026['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function kickzAcc(_0x4cc69d) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x675aa1 = 0x0; _0x675aa1 < kickz['length']; _0x675aa1++) {
    await jig(kickz, _0x675aa1);
    if (kickz[_0x675aa1]['Email'] == '' || kickz[_0x675aa1]['Password'] == '' || kickz[_0x675aa1]['FirstName'] == '' || kickz[_0x675aa1]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x59b984 = getProxy()[_0x675aa1]['split'](':');
    else
      var _0x260d11 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x59b984 = getProxy()[_0x260d11]['split'](':');
    const _0x3d1d20 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x59b984[0x0] + ':' + _0x59b984[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0xbd352b = await _0x3d1d20['newPage']();
      await _0xbd352b['authenticate']({
        'username': '' + _0x59b984[0x2],
        'password': '' + _0x59b984[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xbd352b['setRequestInterception'](!![]), _0xbd352b['on']('request', _0x1c1c6c => {
        _0x1c1c6c['resourceType']() === 'image' || _0x1c1c6c['resourceType']() === 'font' || _0x1c1c6c['resourceType']() === 'media' ? _0x1c1c6c['abort']() : _0x1c1c6c['continue']();
      }), await _0xbd352b['goto'](_0x4cc69d), await delay(0xbb8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0xbd352b['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xbd352b['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xbd352b['waitForSelector']('#button-register'), await _0xbd352b['click']('#button-register'), await _0xbd352b['waitForSelector']('#customer_salutation'), await _0xbd352b['select']('#customer_salutation', 'mr'), await delay(0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xbd352b['waitForSelector']('#customer_firstname'), await _0xbd352b['type']('#customer_firstname', '' + kickz[_0x675aa1]['FirstName']), await delay(0x352), await _0xbd352b['waitForSelector']('#customer_lastname'), await _0xbd352b['type']('#customer_lastname', '' + kickz[_0x675aa1]['LastName']), await delay(0x352), await _0xbd352b['type']('#email-input', '' + kickz[_0x675aa1]['Email']), await delay(0x352), await _0xbd352b['type']('#email-confirm-input', '' + kickz[_0x675aa1]['Email']), await delay(0x352), await _0xbd352b['type']('#register-password', '' + kickz[_0x675aa1]['Password']), await delay(0x352), await _0xbd352b['type']('#password-confirm', '' + kickz[_0x675aa1]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0xbd352b['click']('#consent'), await delay(0x1f4);
      const _0x1a7372 = await _0xbd352b['$']('div.inputErrorMsg.b-form_section-message');
      if (_0x1a7372) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
        continue;
      }
      await _0xbd352b['click']('#buttonRegister'), await _0xbd352b['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x675aa1]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
      async function _0x1720cf() {
        console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
        var _0xeaba54 = await prompt['get']('Code');
        return _0xeaba54['Code'];
      }
      ;
      code = await _0x1720cf(), delay(0x320), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20Verifying..'), await _0xbd352b['type']('#verificationCode', code), await delay(0x1f4), await _0xbd352b['click']('#buttonVerify'), await delay(0x190), await _0xbd352b['click']('#buttonVerify'), await delay(0x3e8);
      try {
        await _0xbd352b['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x675aa1]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + kickz[_0x675aa1]['Email'] + ',' + kickz[_0x675aa1]['Password'] + ','), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x675aa1]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
      }
    } catch (_0x3c2d4a) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x675aa1 + 0x1) + '\x20:\x20' + _0x3c2d4a));
    } finally {
      _0x3d1d20 && _0x3d1d20['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
}
async function bwAcc(_0x39cc74, _0x50a184) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x1df0e3 = 0x0; _0x1df0e3 < bouncewear['length']; _0x1df0e3++) {
    await jig(bouncewear, _0x1df0e3);
    if (bouncewear[_0x1df0e3]['Email'] == '' || bouncewear[_0x1df0e3]['Password'] == '' || bouncewear[_0x1df0e3]['FirstName'] == '' || bouncewear[_0x1df0e3]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1df0e3 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x48c7e0 = getProxy()[_0x1df0e3]['split'](':');
    else
      var _0x39a4a1 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x48c7e0 = getProxy()[_0x39a4a1]['split'](':');
    const _0x33232b = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x48c7e0[0x0] + ':' + _0x48c7e0[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0xcf1120 = await _0x33232b['newPage']();
      await _0xcf1120['authenticate']({
        'username': '' + _0x48c7e0[0x2],
        'password': '' + _0x48c7e0[0x3]
      }), console['log'](getTime() + '\x20[' + _0x50a184['name'] + ']\x20Task\x20' + (_0x1df0e3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xcf1120['setRequestInterception'](!![]), _0xcf1120['on']('request', _0x16036f => {
        _0x16036f['resourceType']() === 'image' || _0x16036f['resourceType']() === 'font' || _0x16036f['resourceType']() === 'media' ? _0x16036f['abort']() : _0x16036f['continue']();
      }), await _0xcf1120['goto'](_0x39cc74), await delay(0xbb8), await _0xcf1120['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x50a184['name'] + ']\x20Task\x20' + (_0x1df0e3 + 0x1) + '\x20:\x20Filling\x20information'), await _0xcf1120['type']('#RegisterForm-FirstName', '' + bouncewear[_0x1df0e3]['FirstName']), await delay(0x226), await _0xcf1120['type']('#RegisterForm-LastName', '' + bouncewear[_0x1df0e3]['LastName']), await delay(0x226), await _0xcf1120['type']('#RegisterForm-email', '' + bouncewear[_0x1df0e3]['Email']), await delay(0x226), await _0xcf1120['type']('#RegisterForm-password', '' + bouncewear[_0x1df0e3]['Password']), await delay(0x226), await _0xcf1120['click']('#marketing'), console['log'](getTime() + '\x20[' + _0x50a184['name'] + ']\x20Task\x20' + (_0x1df0e3 + 0x1) + '\x20:\x20Submitting..'), await _0xcf1120['$eval']('#RegisterForm', _0x5f5b91 => _0x5f5b91['submit']()), await delay(0x1f40), console['log'](getTime() + '\x20[' + _0x50a184['name'] + ']\x20Task\x20' + (_0x1df0e3 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0xcf1120['solveRecaptchas'](), await _0xcf1120['click']('.shopify-challenge__button.btn');
      async function _0x147bf5() {
        for (var _0x4d0ca4 = 0x0; _0x4d0ca4 < 0x4; _0x4d0ca4++) {
          try {
            console['log']('try'), await _0xcf1120['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](getTime() + '\x20[' + _0x50a184['name'] + ']\x20Task\x20' + (_0x1df0e3 + 0x1) + '\x20:\x20' + chalk['red']('Catpcha\x20failed,\x20retrying..')), await _0xcf1120['solveRecaptchas'](), await _0xcf1120['click']('.shopify-challenge__button.btn');
          } catch {
            console['log']('catch');
            break;
          }
        }
      }
      await _0x147bf5(), console['log'](getTime() + '\x20[' + _0x50a184['name'] + ']\x20Task\x20' + (_0x1df0e3 + 0x1) + '\x20:\x20Captcha\x20Solved'), await delay(0x1f4);
      try {
        await _0xcf1120['waitForSelector']('.featured-title'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x50a184['name'] + ']\x20Task\x20' + (_0x1df0e3 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1df0e3]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x1df0e3]['Email'] + ',' + bouncewear[_0x1df0e3]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x50a184['name'] + ']\x20Task\x20' + (_0x1df0e3 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1df0e3]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
      } catch (_0x315d08) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1df0e3 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x315d08));
      }
    } catch (_0x57ff58) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1df0e3 + 0x1) + '\x20:\x20' + _0x57ff58));
    } finally {
      _0x33232b && _0x33232b['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function pattaAcc(_0x2aebd9, _0x438629, _0x3a7bfb) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x41eb07 = 0x0; _0x41eb07 < _0x3a7bfb['length']; _0x41eb07++) {
    await jig(_0x3a7bfb, _0x41eb07);
    if (_0x3a7bfb[_0x41eb07]['Email'] == '' || _0x3a7bfb[_0x41eb07]['Password'] == '' || _0x3a7bfb[_0x41eb07]['FirstName'] == '' || _0x3a7bfb[_0x41eb07]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x41eb07 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x510bbe = getProxy()[_0x41eb07]['split'](':');
    else
      var _0x11ada1 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x510bbe = getProxy()[_0x11ada1]['split'](':');
    const _0x3891a3 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x510bbe[0x0] + ':' + _0x510bbe[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x243e90 = await _0x3891a3['newPage']();
      await _0x243e90['authenticate']({
        'username': '' + _0x510bbe[0x2],
        'password': '' + _0x510bbe[0x3]
      }), console['log'](getTime() + '\x20[' + _0x438629['name'] + ']\x20Task\x20' + (_0x41eb07 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x243e90['setRequestInterception'](!![]), _0x243e90['on']('request', _0x33b9f8 => {
        _0x33b9f8['resourceType']() === 'image' || _0x33b9f8['resourceType']() === 'font' || _0x33b9f8['resourceType']() === 'media' ? _0x33b9f8['abort']() : _0x33b9f8['continue']();
      }), await _0x243e90['goto'](_0x2aebd9), await delay(0xbb8), await _0x243e90['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x438629['name'] + ']\x20Task\x20' + (_0x41eb07 + 0x1) + '\x20:\x20Filling\x20information'), await _0x243e90['type']('#RegisterForm-FirstName', '' + _0x3a7bfb[_0x41eb07]['FirstName']), await delay(0x226), await _0x243e90['type']('#RegisterForm-LastName', '' + _0x3a7bfb[_0x41eb07]['LastName']), await delay(0x226), await _0x243e90['type']('#RegisterForm-email', '' + _0x3a7bfb[_0x41eb07]['Email']), await delay(0x226), await _0x243e90['type']('#RegisterForm-password', '' + _0x3a7bfb[_0x41eb07]['Password']), await delay(0x226), console['log'](getTime() + '\x20[' + _0x438629['name'] + ']\x20Task\x20' + (_0x41eb07 + 0x1) + '\x20:\x20Submitting..'), await _0x243e90['$eval']('#RegisterForm', _0x59e49c => _0x59e49c['submit']()), await delay(0x1f40);
      try {
        await _0x243e90['waitForSelector']('.home-page-grid__collection'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x438629['name'] + ']\x20Task\x20' + (_0x41eb07 + 0x1) + '\x20:\x20Account\x20' + _0x3a7bfb[_0x41eb07]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x3a7bfb[_0x41eb07]['Email'] + ',' + _0x3a7bfb[_0x41eb07]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x438629['name'] + ']\x20Task\x20' + (_0x41eb07 + 0x1) + '\x20:\x20Account\x20' + _0x3a7bfb[_0x41eb07]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
      } catch (_0x42dbc2) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x41eb07 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x42dbc2));
      }
    } catch (_0x54daa4) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x41eb07 + 0x1) + '\x20:\x20' + _0x54daa4));
    } finally {
      _0x3891a3 && _0x3891a3['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function pattaFunction(_0x27869a, _0x3140ab, _0x20e03c) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x2a9a3d = 0x0; _0x2a9a3d < _0x20e03c['length']; _0x2a9a3d++) {
    await jig(_0x20e03c, _0x2a9a3d);
    if (_0x20e03c[_0x2a9a3d]['Email'] == '' || _0x20e03c[_0x2a9a3d]['Password'] == '' || _0x20e03c[_0x2a9a3d]['FirstName'] == '' || _0x20e03c[_0x2a9a3d]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2a9a3d + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x4e2968 = getProxy()[_0x2a9a3d]['split'](':');
    else
      var _0x1833e7 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x4e2968 = getProxy()[_0x1833e7]['split'](':');
    const _0x33c3ec = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x4e2968[0x0] + ':' + _0x4e2968[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x2f45c7 = await _0x33c3ec['newPage']();
      await _0x2f45c7['authenticate']({
        'username': '' + _0x4e2968[0x2],
        'password': '' + _0x4e2968[0x3]
      }), console['log'](getTime() + '\x20[' + _0x3140ab['name'] + ']\x20Task\x20' + (_0x2a9a3d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2f45c7['setRequestInterception'](!![]), _0x2f45c7['on']('request', _0x2e357d => {
        _0x2e357d['resourceType']() === 'image' || _0x2e357d['resourceType']() === 'font' || _0x2e357d['resourceType']() === 'media' ? _0x2e357d['abort']() : _0x2e357d['continue']();
      }), await _0x2f45c7['goto']('https://www.patta.nl/nl/account/login', {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), await _0x2f45c7['waitForSelector']('#CustomerEmail'), console['log'](getTime() + '\x20[' + _0x3140ab['name'] + ']\x20Task\x20' + (_0x2a9a3d + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2f45c7['type']('#CustomerEmail', '' + _0x20e03c[_0x2a9a3d]['Email']), await delay(0x12c), await _0x2f45c7['type']('#CustomerPassword', '' + _0x20e03c[_0x2a9a3d]['Password']), await delay(0x226), await _0x2f45c7['$eval']('#customer_login', _0x24b2c6 => _0x24b2c6['submit']());
      try {
        await _0x2f45c7['waitForSelector']('#orders'), await delay(0x4b0);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x3140ab['name'] + ']\x20Task\x20' + (_0x2a9a3d + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
        continue;
      }
      await _0x2f45c7['goto']('' + _0x20e03c[_0x2a9a3d]['Url'], {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x3140ab['name'] + ']\x20Task\x20' + (_0x2a9a3d + 0x1) + '\x20:\x20Starting\x20Entry');
      try {
        await _0x2f45c7['waitForSelector']('#email');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x3140ab['name'] + ']\x20Task\x20' + (_0x2a9a3d + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
      }
      await _0x2f45c7['type']('#email', '' + _0x20e03c[_0x2a9a3d]['Email']), await delay(0x384), await _0x2f45c7['type']('#first_name', '' + _0x20e03c[_0x2a9a3d]['FirstName']), await delay(0x514), await _0x2f45c7['type']('#last_name', '' + _0x20e03c[_0x2a9a3d]['LastName']), await delay(0x514), await _0x2f45c7['type']('#street_address', _0x20e03c[_0x2a9a3d]['Address1'] + '\x20' + _0x20e03c[_0x2a9a3d]['HouseNumber'] + '\x20' + _0x20e03c[_0x2a9a3d]['Address2']), await delay(0x2bc), await _0x2f45c7['type']('#zip_code', '' + _0x20e03c[_0x2a9a3d]['Postcode']), await delay(0x320), await _0x2f45c7['type']('#city', '' + _0x20e03c[_0x2a9a3d]['City']), await delay(0x320), await _0x2f45c7['type']('#bday', '' + _0x20e03c[_0x2a9a3d]['Bday']), await delay(0x320), await _0x2f45c7['type']('#instagram', '' + _0x20e03c[_0x2a9a3d]['Follower']), await delay(0x352);
      if (_0x20e03c[_0x2a9a3d]['Size'] == 'RANDOM') {
        const _0x28bc24 = await _0x2f45c7['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x2fedb4 => {
          return _0x2fedb4['map'](_0x1c16ed => _0x1c16ed['textContent']);
        });
        var _0x2d3bbf = Math['round'](Math['random']() * (_0x28bc24['length'] - 0x1));
        console['log'](getTime() + '\x20[' + _0x3140ab['name'] + ']\x20Task\x20' + (_0x2a9a3d + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x28bc24[_0x2d3bbf]), await _0x2f45c7['click']('label[data-eu-size=\x22' + _0x28bc24[_0x2d3bbf] + '\x22]');
      } else {
        console['log'](getTime() + '\x20[' + _0x3140ab['name'] + ']\x20Task\x20' + (_0x2a9a3d + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x20e03c[_0x2a9a3d]['Size']);
        try {
          await _0x2f45c7['click']('label[data-eu-size=\x22' + _0x20e03c[_0x2a9a3d]['Size'] + '\x22]');
        } catch {
          await _0x2f45c7['click']('label[data-eu-size=\x22' + _0x20e03c[_0x2a9a3d]['Size'] + '.0\x22]');
        }
      }
      await delay(0xbb8), await _0x2f45c7['$$eval']('.raffle__checkbox-label', _0x1859a3 => _0x1859a3['forEach'](_0x35fc68 => _0x35fc68['click']())), await delay(0x7d0), console['log'](getTime() + '\x20[' + _0x3140ab['name'] + ']\x20Task\x20' + (_0x2a9a3d + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x2f45c7['click']('#raffle__form-submit'), await delay(0x1388);
      try {
        await _0x2f45c7['waitForSelector']('#raffle__confirmation-message-container[class=\x22\x22]'), console['log'](chalk['green'](getTime() + '\x20[' + _0x3140ab['name'] + ']\x20Task\x20' + (_0x2a9a3d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch (_0x1c68ca) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2a9a3d + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x1c68ca));
      }
    } catch (_0x2a2f6b) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2a9a3d + 0x1) + '\x20:\x20' + _0x2a2f6b));
    } finally {
      _0x33c3ec && _0x33c3ec['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function jdFunction(_0x110030, _0x596c05) {
  var _0x50bd6f = ![], _0x42790d = ![];
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x45b02a = 0x0; _0x45b02a < _0x596c05['length']; _0x45b02a++) {
    var _0x57f39b = [{
      'type': 'rich',
      'title': 'Succesfull\x20Entry',
      'description': '' + _0x110030['name'],
      'color': 0xc0d6d6,
      'url': '',
      'fields': [
        {
          'name': 'Product',
          'value': '' + _0x596c05[_0x45b02a]['Url']
        },
        {
          'name': 'Size',
          'value': '' + _0x596c05[_0x45b02a]['Size']
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
    const _0x19bdd4 = { 'embeds': _0x57f39b };
    await jig(_0x596c05, _0x45b02a);
    if (_0x596c05[_0x45b02a]['Email'] == '' || _0x596c05[_0x45b02a]['Url'] == '' || _0x596c05[_0x45b02a]['FirstName'] == '' || _0x596c05[_0x45b02a]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x45b02a + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0xce350e = getProxy()[_0x45b02a]['split'](':');
    else
      var _0x49336a = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0xce350e = getProxy()[_0x49336a]['split'](':');
    const _0x37be60 = await puppeteer['launch']({
      'headless': ![],
      'args': [
        '--proxy-server=' + _0xce350e[0x0] + ':' + _0xce350e[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x2cda36 = await _0x37be60['newPage']();
      await _0x2cda36['authenticate']({
        'username': '' + _0xce350e[0x2],
        'password': '' + _0xce350e[0x3]
      }), console['log'](getTime() + '\x20[' + _0x110030['name'] + ']\x20Task\x20' + (_0x45b02a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2cda36['setRequestInterception'](!![]), _0x2cda36['on']('request', _0x33d59c => {
        _0x33d59c['resourceType']() === 'image' || _0x33d59c['resourceType']() === 'font' || _0x33d59c['resourceType']() === 'media' ? _0x33d59c['abort']() : _0x33d59c['continue']();
      }), await _0x2cda36['goto']('' + _0x596c05[_0x45b02a]['Url'], {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), console['log'](getTime() + '\x20[' + _0x110030['name'] + ']\x20Task\x20' + (_0x45b02a + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2cda36['waitForSelector']('#comp_firstname'), await _0x2cda36['type']('#comp_firstname', '' + _0x596c05[_0x45b02a]['FirstName']), await _0x2cda36['waitForSelector']('#comp_lastname'), await _0x2cda36['type']('#comp_lastname', '' + _0x596c05[_0x45b02a]['LastName']), await _0x2cda36['waitForSelector']('#comp_email'), await _0x2cda36['type']('#comp_email', '' + _0x596c05[_0x45b02a]['Email']), await _0x2cda36['waitForSelector']('#comp_paypalemail'), await _0x2cda36['type']('#comp_paypalemail', '' + _0x596c05[_0x45b02a]['Email']), await _0x2cda36['waitForSelector']('#comp_mobile_end'), await _0x2cda36['type']('#comp_mobile_end', '' + _0x596c05[_0x45b02a]['Phone']), await _0x2cda36['waitForSelector']('#comp_dob'), await _0x2cda36['type']('#comp_dob', '08/09/1992'), console['log'](getTime() + '\x20[' + _0x110030['name'] + ']\x20Task\x20' + (_0x45b02a + 0x1) + '\x20:\x20Choosing\x20Size');
      if (_0x596c05[_0x45b02a]['Size'] == 'RANDOM') {
        const _0x56ed6a = await _0x2cda36['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1e8533 => {
          return _0x1e8533['map'](_0x505c44 => _0x505c44['value']);
        });
        var _0x2fa46c = Math['round'](Math['random']() * (_0x56ed6a['length'] - 0x2));
        await _0x2cda36['select']('#shoesize', _0x56ed6a[_0x2fa46c + 0x1]), await delay(0x3e8);
      } else {
        const _0x4a5021 = await _0x2cda36['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x30ed78 => {
          return _0x30ed78['map'](_0x34a5b4 => _0x34a5b4['innerText']);
        }), _0xb63182 = await _0x2cda36['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x282c13 => {
          return _0x282c13['map'](_0x4e7764 => _0x4e7764['value']);
        });
        var _0x214a6a = _0x596c05[_0x45b02a]['Size'];
        for (var _0x3bafdf = 0x1; _0x3bafdf < _0xb63182['length']; _0x3bafdf++) {
          var _0x59c553 = _0x4a5021[_0x3bafdf]['split']('\x20')[0x0];
          if (_0x59c553 == _0x214a6a) {
            await _0x2cda36['select']('#shoesize', _0xb63182[_0x3bafdf]);
            break;
          } else {
            if (_0x3bafdf + 0x1 == _0xb63182['length'])
              throw new Error('Size\x20Not\x20Found..');
          }
        }
      }
      await _0x2cda36['waitForSelector']('#comp_address1'), await _0x2cda36['type']('#comp_address1', _0x596c05[_0x45b02a]['Address1'] + '\x20' + _0x596c05[_0x45b02a]['HouseNumber']), await _0x2cda36['waitForSelector']('#comp_address2'), await _0x2cda36['type']('#comp_address2', '' + _0x596c05[_0x45b02a]['Address2']), await _0x2cda36['waitForSelector']('#comp_address2'), await _0x2cda36['type']('#comp_address3', '' + _0x596c05[_0x45b02a]['City']), await _0x2cda36['waitForSelector']('#comp_postcode'), await _0x2cda36['type']('#comp_postcode', '' + _0x596c05[_0x45b02a]['Zip']), console['log'](getTime() + '\x20[' + _0x110030['name'] + ']\x20Task\x20' + (_0x45b02a + 0x1) + '\x20:\x20Sending\x20Entry'), await delay(0x4b0), await _0x2cda36['click']('label#emailhold'), await delay(0x5dc), await _0x2cda36['click']('#preauth_tandc_email\x20>\x20label'), await delay(0x5dc), await _0x2cda36['click']('#submit'), await _0x2cda36['waitForSelector']('#paymentWrap'), console['log'](getTime() + '\x20[' + _0x110030['name'] + ']\x20Task\x20' + (_0x45b02a + 0x1) + '\x20:\x20' + chalk['blue']('Awaiting\x20Paypal\x20Payment')), _0x37be60['on']('targetcreated', async _0x3ea9fb => {
        if (_0x3ea9fb['type']() === 'page') {
          const _0x76c933 = await _0x3ea9fb['page']();
          async function _0x38c3ca() {
            try {
              await _0x2cda36['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x42790d = !![];
              return;
            } catch {
            }
          }
          async function _0x3dc428() {
            try {
              await _0x2cda36['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x50bd6f = !![];
              return;
            } catch {
            }
          }
          _0x3dc428(), _0x38c3ca(), await delay(0x493e0);
        }
      });
      async function _0x25e4c3() {
        for (let _0x237da1 = 0x0; _0x237da1 < 0x12c; _0x237da1++) {
          if (_0x50bd6f == !![]) {
            console['log'](chalk['green'](getTime() + '\x20[' + _0x110030['name'] + ']\x20Task\x20' + (_0x45b02a + 0x1) + '\x20:\x20Raffle\x20Entered!')), sendWebhook(succesWH, _0x19bdd4);
            return;
          } else {
            if (_0x42790d)
              throw new Error('Paypal\x20Error:\x20Target\x20closed');
            else
              await delay(0x3e8);
          }
        }
        throw new Error('Paypal\x20Error');
      }
      await delay(0xbb8), await _0x2cda36['click']('.zoid-outlet'), await delay(0x7d0), await _0x25e4c3();
    } catch (_0x468817) {
      console['log'](chalk['red'](getTime() + '\x20[' + _0x110030['name'] + ']\x20Task\x20' + (_0x45b02a + 0x1) + '\x20:\x20' + _0x468817)), _0x57f39b[0x0]['title'] = 'Failed\x20entry', _0x57f39b[0x0]['description'] = _0x110030['name'] + ':\x20' + _0x468817, await sendWebhook(errorWH, _0x19bdd4);
    } finally {
      _0x37be60 && _0x37be60['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function oqiumFunction(_0x380e3f, _0x3b6e7d, _0x4ac69f, _0x10ddb2) {
  await jig(_0x10ddb2, _0x380e3f);
  var _0x257892 = [{
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
        'value': '' + _0x10ddb2[_0x380e3f]['Size']
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
  const _0x1c956f = { 'embeds': _0x257892 };
  if (settings['useRandomProxy'] = ![])
    var _0x2c23b8 = getProxy()[_0x380e3f]['split'](':');
  else
    var _0x5411f3 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x2c23b8 = getProxy()[_0x5411f3]['split'](':');
  var _0x499726 = _0x4ac69f['data'];
  _0x3b6e7d == 'exp' ? _0x499726['data']['attributes']['email'] = '' + _0x10ddb2[_0x380e3f]['FirstName'] + _0x10ddb2[_0x380e3f]['LastName'] + settings['catchall'] : _0x499726['data']['attributes']['email'] = '' + _0x10ddb2[_0x380e3f]['Email'];
  _0x499726['data']['attributes']['properties']['$first_name'] = '' + _0x10ddb2[_0x380e3f]['FirstName'], _0x499726['data']['attributes']['properties']['$last_name'] = '' + _0x10ddb2[_0x380e3f]['LastName'], _0x499726['data']['attributes']['properties']['$address1'] = _0x10ddb2[_0x380e3f]['Address1'] + '\x20' + _0x10ddb2[_0x380e3f]['Address2'], _0x499726['data']['attributes']['properties']['$zip'] = '' + _0x10ddb2[_0x380e3f]['Zip'], _0x499726['data']['attributes']['properties']['$city'] = '' + _0x10ddb2[_0x380e3f]['City'], _0x499726['data']['attributes']['properties']['$country'] = '' + _0x10ddb2[_0x380e3f]['Country'], _0x499726['data']['attributes']['properties']['Size'] = '' + _0x10ddb2[_0x380e3f]['Size'], _0x499726['data']['attributes']['properties']['$phone_number'] = '' + _0x10ddb2[_0x380e3f]['Phone'], _0x499726['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x10ddb2[_0x380e3f]['Follower'];
  var _0x56ef63 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x4ac69f['url'],
    'headers': _0x4ac69f['headers'],
    'body': JSON['stringify'](_0x499726),
    'proxy': 'http://' + _0x2c23b8[0x2] + ':' + _0x2c23b8[0x3] + '@' + _0x2c23b8[0x0] + ':' + _0x2c23b8[0x1]
  };
  return _0x3b6e7d === 'ver' && (_0x56ef63['method'] = 'GET'), new Promise(function (_0x2cb672, _0x255c04) {
    callback = async (_0x386969, _0x365d42, _0x47f0fa) => {
      !_0x386969 && _0x365d42['statusCode'] == 0xca || !_0x386969 && _0x365d42['statusCode'] == 0xc8 ? (await sendWebhook(succesWH, _0x1c956f), _0x2cb672(console['log'](chalk['green'](getTime() + '\x20[' + _0x4ac69f['name'] + ']\x20Task\x20' + (_0x380e3f + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x257892[0x0]['title'] = 'Failed\x20entry', _0x257892[0x0]['description'] = '' + _0x386969, await sendWebhook(errorWH, _0x1c956f), _0x255c04(console['log'](getTime() + '\x20[' + _0x4ac69f['name'] + ']\x20Task\x20' + (_0x380e3f + 0x1) + ':\x20' + _0x386969)));
    };
    try {
      console['log'](getTime() + '\x20[' + _0x4ac69f['name'] + ']\x20Task\x20' + (_0x380e3f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x499726['data']['attributes']['email']), request(_0x56ef63, callback);
    } catch (_0x1db097) {
      console['log'](getTime() + '\x20Task\x20' + (_0x380e3f + 0x1) + ':\x20' + _0x1db097);
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
      async function _0x23a78d() {
        console['clear'](), console['log']('Welcome\x20to\x20' + chalk['cyan']('JRaffles();') + '\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
        for (var _0xffd3b8 = 0x0; _0xffd3b8 < modules['length']; _0xffd3b8++) {
          if (modules[_0xffd3b8]['name'] === 'Reload\x20Settings' || modules[_0xffd3b8]['name'] === 'Change\x20Settings')
            continue;
          else
            console['log']('\x20(' + _0xffd3b8 + ')\x20[' + modules[_0xffd3b8]['name'] + ']');
        }
        ;
        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (modules['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (modules['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
        if (modules[taskModule]['name'] == 'AFEW\x20Store') {
          taskFunction = await getFunction(modules[taskModule]['modules']);
          var _0x49f71d = modules[taskModule]['modules'][taskFunction];
          console['clear'](), await afewScraper(), await getAfewProduct();
          var _0x3e1523 = await getTaskFile();
          return await afewFunction(afewProducts[afewProduct], 'nor', _0x49f71d, _0x3e1523), _0x23a78d();
        } else {
          if (modules[taskModule]['name'] == 'MAHA\x20Amsterdam') {
            taskFunction = await getFunction(modules[taskModule]['modules']);
            var _0x49f71d = modules[taskModule]['modules'][taskFunction];
            if (taskFunction == 0x0) {
              var _0x22257e = await getTaskFile();
              console['log']('Starting\x20' + _0x22257e['length'] + '\x20MAHA\x20Tasks');
              for (var _0x393239 = 0x0; _0x393239 < _0x22257e['length']; _0x393239++) {
                console['log'](getTime() + '\x20[' + _0x49f71d['name'] + ']\x20Task\x20' + (_0x393239 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x393239, 'nor', _0x49f71d, _0x22257e), console['log'](getTime() + '\x20[' + _0x49f71d['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
              ;
              return _0x23a78d();
            } else {
              if (taskFunction == 0x1) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x393239 = 0x0; _0x393239 < links['length']; _0x393239++) {
                  _0x49f71d['url'] = links[_0x393239], console['log'](getTime() + '\x20[' + _0x49f71d['name'] + ']\x20Task\x20' + (_0x393239 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x393239, 'ver', _0x49f71d), console['log'](getTime() + '\x20[' + _0x49f71d['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
                ;
                return _0x23a78d();
              }
            }
          } else {
            if (modules[taskModule]['name'] == 'FOOTSHOP') {
              var _0x5874e9 = await getTaskFile();
              return console['log'](_0x5874e9), await footshopModule(_0x5874e9), await delay(0x1388), _0x23a78d();
            } else {
              if (modules[taskModule]['name'] == 'OQIUM\x20Store') {
                taskFunction = await getFunction(modules[taskModule]['modules']);
                var _0x49f71d = modules[taskModule]['modules'][taskFunction];
                console['clear']();
                if (taskFunction == 0x0) {
                  var _0x170e9c = await getTaskFile();
                  console['log']('Starting\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                  for (var _0x393239 = 0x0; _0x393239 < _0x170e9c['length']; _0x393239++) {
                    console['log'](getTime() + '\x20[' + _0x49f71d['name'] + ']\x20Task\x20' + (_0x393239 + 0x1) + ':\x20Getting\x20Session');
                    try {
                      await oqiumFunction(_0x393239, 'exp', _0x49f71d, _0x170e9c);
                    } catch {
                      console['log'](chalk['red'](getTime() + '\x20[' + _0x49f71d['name'] + ']\x20Task\x20' + (_0x393239 + 0x1) + ':\x20Task\x20failed'));
                    }
                    console['log'](getTime() + '\x20[' + _0x49f71d['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                  }
                } else {
                  if (taskFunction == 0x1) {
                    console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                    for (var _0x393239 = 0x0; _0x393239 < links['length']; _0x393239++) {
                      try {
                        modules[taskModule]['url'] = links[_0x393239], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x393239 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x393239, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                      } catch (_0x2a5369) {
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
                  var _0x49f71d = modules[taskModule]['modules'][taskFunction];
                  console['clear']();
                  if (taskFunction == 0x0)
                    await bwAcc('https://bouncewear.com/nl/account/register', _0x49f71d);
                  else {
                    if (taskFunction == 0x1) {
                    }
                  }
                  ;
                } else {
                  if (modules[taskModule]['name'] == 'PATTA') {
                    taskFunction = await getFunction(modules[taskModule]['modules']);
                    var _0x49f71d = modules[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x0) {
                      var _0x496588 = await getTaskFile();
                      return await pattaAcc('https://patta.nl/account/register', _0x49f71d, _0x496588), _0x23a78d();
                    } else {
                      if (taskFunction == 0x1) {
                        var _0x496588 = await getTaskFile();
                        return await pattaFunction('', _0x49f71d), _0x23a78d();
                      }
                    }
                    ;
                  } else {
                    if (modules[taskModule]['name'] == 'JD') {
                      taskFunction = await getFunction(modules[taskModule]['modules']);
                      var _0x49f71d = modules[taskModule]['modules'][taskFunction];
                      console['clear']();
                      if (taskFunction == 0x0) {
                        var _0x2d98f0 = await getTaskFile();
                        return await jdFunction(_0x49f71d, _0x2d98f0), _0x23a78d();
                      }
                    } else {
                      if (modules[taskModule]['name'] == 'Change\x20Settings') {
                        console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                        var _0x58adb8 = 0x0;
                        for (const _0xbcf8dc in settings) {
                          console['log']('(' + _0x58adb8 + ')\x20' + _0xbcf8dc + '\x20:\x20' + settings[_0xbcf8dc]), _0x58adb8++;
                        }
                        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x58adb8 + ')\x20Return\x20to\x20Main\x20Menu');
                        var _0x548260 = await getSetting();
                        if (_0x548260 == _0x58adb8)
                          return _0x23a78d();
                        console['clear'];
                        var _0x426317 = 0x0;
                        for (var _0x3cc3d8 in settings) {
                          if (_0x548260 == _0x426317) {
                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x3cc3d8 + '\x20:'), settings[_0x3cc3d8] = await getValue(), fs['writeFileSync']('../settings.json', JSON['stringify'](settings));
                            break;
                          } else
                            _0x426317++;
                        }
                        return console['log']('Settings\x20Saved!'), await delay(0xbb8), _0x23a78d();
                      } else {
                        if (modules[taskModule]['name'] == 'Reload\x20Settings')
                          return console['log']('Reloading\x20settings'), await loadSettings(), _0x23a78d();
                        else {
                          if (taskModule == 0x45) {
                            modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                            var _0x375e2f = await getPassword();
                            _0x375e2f == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
      await _0x23a78d();
    } catch (_0x5db1c8) {
      return console['log'](_0x5db1c8), await delay(0x3a98);
    }
}
;
setTitle('JRaffles\x20' + version), loadSettings(), main();