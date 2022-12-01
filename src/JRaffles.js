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
  const _0x14f7bd = fs['readFileSync']('../tasks/afew.csv', 'utf8');
  afew = Papa['parse'](_0x14f7bd, { 'header': !![] })['data'];
  const _0x299f16 = fs['readFileSync']('../tasks/maha.csv', 'utf-8');
  maha = Papa['parse'](_0x299f16, { 'header': !![] })['data'];
  const _0x2bbc0e = fs['readFileSync']('../tasks/footshop.csv', 'utf-8');
  footshop = Papa['parse'](_0x2bbc0e, { 'header': !![] })['data'];
  const _0x1d84fe = fs['readFileSync']('../tasks/bstn.csv', 'utf-8');
  bstn = Papa['parse'](_0x1d84fe, { 'header': !![] })['data'];
  const _0xe33f13 = fs['readFileSync']('../tasks/kickz.csv', 'utf-8');
  kickz = Papa['parse'](_0xe33f13, { 'header': !![] })['data'];
  const _0x236a2 = fs['readFileSync']('../tasks/oqium.csv', 'utf-8');
  oqium = Papa['parse'](_0x236a2, { 'header': !![] })['data'];
  const _0x529bf9 = fs['readFileSync']('../tasks/patta.csv', 'utf-8');
  patta = Papa['parse'](_0x529bf9, { 'header': !![] })['data'], settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), !settings['delay'] && (settings['delay'] = 0x2710, fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['captchaKey'] && (settings['captchaKey'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['useRandomProxy'] && (settings['useRandomProxy'] = ![], fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x1a9c55 => new Promise(_0x4765cc => setTimeout(_0x4765cc, _0x1a9c55));
async function getLicense(_0x4a475f) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x4a475f, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x429695 => _0x429695['data'])['catch'](() => null);
}
;
async function checkLicense(_0x5da17b) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x2c369d = await getLicense(_0x5da17b);
  username = JSON['stringify'](_0x2c369d['user']['username']);
  if (!_0x2c369d)
    return console['log']('License\x20not\x20found');
  if (!_0x2c369d['user'])
    return console['log']('License\x20not\x20bound');
  return _0x2c369d['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x5ebfd8 = await prompt['get']('Module');
  return console['clear'](), _0x5ebfd8['Module'];
}
;
async function getSetting() {
  var _0x424b77 = await prompt['get']('Setting');
  return console['clear'](), _0x424b77['Setting'];
}
async function getValue() {
  var _0x117995 = await prompt['get']('Value');
  return console['clear'](), _0x117995['Value'];
}
async function getFunction(_0x3fe32e) {
  console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
  for (var _0x2b47aa = 0x0; _0x2b47aa < _0x3fe32e['length']; _0x2b47aa++) {
    console['log']('\x20(' + _0x2b47aa + ')\x20[' + _0x3fe32e[_0x2b47aa]['name'] + ']');
  }
  ;
  var _0x2e83c6 = await prompt['get']('Module');
  return _0x2e83c6['Module'];
}
async function getPassword() {
  var _0x25288e = await prompt['get']('Password');
  return console['clear'](), _0x25288e['Password'];
}
;
async function getLinks() {
  var _0xc11aa6 = await prompt['get']('Links');
  return _0xc11aa6['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x4a5f04 = 0x0; _0x4a5f04 < afewProducts['length']; _0x4a5f04++) {
    console['log']('\x20(' + _0x4a5f04 + ')\x20' + afewProducts[_0x4a5f04]);
  }
  ;
  console['log']();
  let _0x49a4eb = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x49a4eb['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x31f575 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x31f575;
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
async function sendWebhook(_0x26e17e, _0x9e3304) {
  let _0x1d3f36 = { 'headers': { 'content-type': 'application/json' } };
  await axios['post'](_0x26e17e, _0x9e3304, _0x1d3f36);
}
;
async function jig(_0x44ad97, _0x52320e) {
  var _0xf2c370 = _0x44ad97[_0x52320e]['Address1']['split'](''), _0x5cc5b6 = _0x44ad97[_0x52320e]['Address2']['split'](''), _0x5a1292 = _0x44ad97[_0x52320e]['Email']['split']('@');
  for (var _0x494e4a = 0x0; _0x494e4a < _0xf2c370['length']; _0x494e4a++) {
    if (_0xf2c370[_0x494e4a] == 'X') {
      var _0x2d8a7b = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0xf2c370[_0x494e4a] = lettersArray[_0x2d8a7b];
    }
  }
  ;
  for (var _0x494e4a = 0x0; _0x494e4a < _0x5cc5b6['length']; _0x494e4a++) {
    if (_0x5cc5b6[_0x494e4a] == 'X') {
      var _0x2d8a7b = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x5cc5b6[_0x494e4a] = lettersArray[_0x2d8a7b];
    }
  }
  ;
  _0x44ad97[_0x52320e]['FirstName'] == 'RANDOM' && (_0x44ad97[_0x52320e]['FirstName'] = random['first']());
  _0x44ad97[_0x52320e]['LastName'] == 'RANDOM' && (_0x44ad97[_0x52320e]['LastName'] = random['last']());
  _0x5a1292[0x0] == 'RANDOM' ? _0x5a1292[0x0] = '' + random['first']() + random['last']() + '@' : _0x5a1292[0x0] = _0x5a1292[0x0] + '@';
  _0x44ad97[_0x52320e]['Email'] = _0x5a1292['join'](''), _0x44ad97[_0x52320e]['Address1'] = _0xf2c370['join'](''), _0x44ad97[_0x52320e]['Address2'] = _0x5cc5b6['join']('');
  return;
}
;
function getProxy() {
  let _0x135e91 = proxyFile['split']('\x0a'), _0x570122 = _0x135e91['map']((_0xbb7dc5, _0x36ec2d) => {
    sanatizeProxy = _0xbb7dc5['replace']('\x0d', '');
    if (_0x135e91[_0x36ec2d + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x570122;
}
;
async function afewScraper() {
  var _0x49b48b = getProxy()[0x1]['split'](':');
  const _0x1487db = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x49b48b[0x0] + ':' + _0x49b48b[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x3a2496 = await _0x1487db['newPage']();
    await _0x3a2496['authenticate']({
      'username': '' + _0x49b48b[0x2],
      'password': '' + _0x49b48b[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x3a2496['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3a2496['setRequestInterception'](!![]), _0x3a2496['on']('request', _0x5c0c3c => {
      _0x5c0c3c['resourceType']() === 'image' || _0x5c0c3c['resourceType']() === 'font' || _0x5c0c3c['resourceType']() === 'media' ? _0x5c0c3c['abort']() : _0x5c0c3c['continue']();
    }), await _0x3a2496['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x3a2496['waitForTimeout'](0xbb8), await _0x3a2496['waitForSelector']('.product-card');
    const _0x2a3424 = await _0x3a2496['$$eval']('a.product-card', _0x4dbc5b => {
      return _0x4dbc5b['map'](_0x5e369a => _0x5e369a['href']);
    });
    return afewProducts = _0x2a3424;
  } catch (_0x254f72) {
    console['log']('\x20' + _0x254f72);
  } finally {
    _0x1487db['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x250b74, _0x2be757, _0x3d9764) {
  await jig(maha, _0x250b74);
  var _0xdec5b7 = [{
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
        'value': '' + oqium[_0x250b74]['Size']
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
  const _0x59f887 = { 'embeds': _0xdec5b7 };
  if (settings['useRandomProxy'] = ![])
    var _0x1393e1 = getProxy()[_0x250b74]['split'](':');
  else
    var _0x4037a3 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x1393e1 = getProxy()[_0x4037a3]['split'](':');
  var _0x29978b = _0x3d9764['data'];
  _0x2be757 == 'exp' ? _0x29978b['data']['attributes']['email'] = '' + maha[_0x250b74]['FirstName'] + maha[_0x250b74]['LastName'] + settings['catchall'] : _0x29978b['data']['attributes']['email'] = '' + maha[_0x250b74]['Email'];
  _0x29978b['data']['attributes']['properties']['$first_name'] = '' + maha[_0x250b74]['FirstName'], _0x29978b['data']['attributes']['properties']['$last_name'] = '' + maha[_0x250b74]['LastName'], _0x29978b['data']['attributes']['properties']['$address1'] = maha[_0x250b74]['Address1'] + '\x20' + maha[_0x250b74]['Address2'], _0x29978b['data']['attributes']['properties']['$zip'] = '' + maha[_0x250b74]['Zip'], _0x29978b['data']['attributes']['properties']['$city'] = '' + maha[_0x250b74]['City'], _0x29978b['data']['attributes']['properties']['$country'] = '' + maha[_0x250b74]['Country'], _0x29978b['data']['attributes']['properties']['Size'] = '' + maha[_0x250b74]['Size'], _0x29978b['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x250b74]['Follower'];
  var _0x4c9b28 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x3d9764['url'],
    'headers': _0x3d9764['headers'],
    'body': JSON['stringify'](_0x29978b),
    'proxy': 'http://' + _0x1393e1[0x2] + ':' + _0x1393e1[0x3] + '@' + _0x1393e1[0x0] + ':' + _0x1393e1[0x1]
  };
  return _0x2be757 === 'ver' && (_0x4c9b28['method'] = 'GET'), new Promise(function (_0x11dd75, _0x1b2489) {
    callback = async (_0x36f185, _0x38b82b, _0x25c14c) => {
      !_0x36f185 && _0x38b82b['statusCode'] == 0xca || !_0x36f185 && _0x38b82b['statusCode'] == 0xc8 ? _0x11dd75(console['log'](chalk['green'](getTime() + '\x20[' + _0x3d9764['name'] + ']\x20Task\x20' + (_0x250b74 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0xdec5b7[0x0]['title'] = 'Failed\x20entry', _0xdec5b7[0x0]['description'] = '' + _0x36f185, await sendWebhook(errorWH, _0x59f887), _0x1b2489(console['log'](getTime() + '\x20[' + _0x3d9764['name'] + ']\x20Task\x20' + (_0x250b74 + 0x1) + ':\x20' + _0x36f185)));
    };
    try {
      _0x2be757 === 'ver' ? console['log'](getTime() + '\x20[' + _0x3d9764['name'] + ']\x20Task\x20' + (_0x250b74 + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + _0x3d9764['name'] + ']\x20Task\x20' + (_0x250b74 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x29978b['data']['attributes']['email']), request(_0x4c9b28, callback);
    } catch (_0x43fcd5) {
      console['log'](getTime() + '\x20Task\x20' + (_0x250b74 + 0x1) + ':\x20' + _0x43fcd5);
    }
  });
}
;
async function footshopModule() {
  var _0x2b20b8;
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x306352 = 0x0; _0x306352 < footshop['length']; _0x306352++) {
    await jig(footshop, _0x306352);
    if (footshop[_0x306352]['Email'] == '' || footshop[_0x306352]['FirstName'] == '' || footshop[_0x306352]['LastName'] == '' || footshop[_0x306352]['Country'] == '' || footshop[_0x306352]['Size'] == '' || footshop[_0x306352]['Address1'] == '' || footshop[_0x306352]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    async function _0x4326f5() {
      var _0x47410c = await axios['get']('https://releases.footshop.com/api/raffles/' + footshop[_0x306352]['Pid'])['then'](_0x1dd496 => _0x1dd496['data'])['catch'](() => null), _0x3069de = _0x47410c['sizeSets']['Men']['sizes'];
      _0x3069de['length'] == 0x0 && (_0x3069de = _0x47410c['sizeSets']['Women']['sizes'], _0x3069de['length'] == 0x0 && (_0x3069de = _0x47410c['sizeSets']['Unisex']['sizes'], _0x3069de['length'] == 0x0 && (_0x3069de = _0x47410c['sizeSets']['Kids']['sizes'])));
      ;
      async function _0x445e10() {
        for (var _0x1f76d7 = 0x0; _0x1f76d7 < _0x3069de['length']; _0x1f76d7++) {
          if (_0x3069de[_0x1f76d7]['eur'] == footshop[_0x306352]['Size'])
            return _0x2b20b8 = _0x3069de[_0x1f76d7]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x20Size\x20' + footshop[_0x306352]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x34087a = await _0x445e10();
      if (_0x34087a == ![])
        return ![];
    }
    let _0x1b3d7c = await _0x4326f5();
    if (_0x1b3d7c == ![])
      continue;
    if (footshop[_0x306352]['Email'] == '' || footshop[_0x306352]['FirstName'] == '' || footshop[_0x306352]['LastName'] == '' || footshop[_0x306352]['Country'] == '' || footshop[_0x306352]['Size'] == '' || footshop[_0x306352]['Address1'] == '' || footshop[_0x306352]['Zip'] == '' || footshop[_0x306352]['Phone'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x4b8e2a = 'https://releases.footshop.com/register/' + footshop[_0x306352]['Pid'] + '/Men/' + _0x2b20b8;
    if (settings['useRandomProxy'] = ![])
      var _0x6cf02c = getProxy()[_0x306352]['split'](':');
    else
      var _0x208de6 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x6cf02c = getProxy()[_0x208de6]['split'](':');
    const _0xf8f2dc = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x6cf02c[0x0] + ':' + _0x6cf02c[0x1]]
    });
    try {
      const _0x495679 = await _0xf8f2dc['newPage']();
      await _0x495679['authenticate']({
        'username': '' + _0x6cf02c[0x2],
        'password': '' + _0x6cf02c[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x495679['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x495679['setRequestInterception'](!![]), _0x495679['on']('request', _0x2915cc => {
        _0x2915cc['resourceType']() === 'image' || _0x2915cc['resourceType']() === 'font' || _0x2915cc['resourceType']() === 'media' ? _0x2915cc['abort']() : _0x2915cc['continue']();
      }), await _0x495679['goto']('' + _0x4b8e2a + _0x2b20b8), await _0x495679['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x495679['type']('input[name=\x22email\x22]', '' + footshop[_0x306352]['Email']), await delay(0x640), await _0x495679['type']('input[name=\x22phone\x22]', '' + footshop[_0x306352]['Phone']), await delay(0x4b0), await _0x495679['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
      try {
        await _0x495679['type']('input[name=\x22firstName\x22]', '' + footshop[_0x306352]['FirstName']), await delay(0x258);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
        continue;
      }
      await _0x495679['type']('input[name=\x22lastName\x22]', '' + footshop[_0x306352]['LastName']), await delay(0xc8), await _0x495679['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x306352]['Follower']), await delay(0x4b0), await _0x495679['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x495679['select']('select[name=\x22country\x22]', '' + footshop[_0x306352]['Country']), await delay(0x2bc), await _0x495679['type']('input[name=\x22streetName\x22]', '' + footshop[_0x306352]['Address1']), await delay(0x258), await _0x495679['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x306352]['HouseNumber'] + footshop[_0x306352]['Address2']), await delay(0xc8), await _0x495679['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x306352]['Zip']), await delay(0x1f4), await _0x495679['type']('input[name=\x22city\x22]', '' + footshop[_0x306352]['City']), await delay(0x4b0), await _0x495679['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x495679['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x495679['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x495679['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x495679['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x495679['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x4b0), await _0x495679['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x306352]['CardNumber']), await delay(0x320), await _0x495679['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x306352]['ExpiryDate']), await delay(0x4b0), await _0x495679['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x306352]['CVV']), await delay(0x226), await _0x495679['type']('input[name=\x22holderName\x22]', '' + footshop[_0x306352]['NameOnCard']), await delay(0x226), await _0x495679['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x20Awaiting\x203DS');
      try {
        await _0x495679['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await delay(0xbb8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x203DS\x20Failed'));
      }
    } catch (_0xa09e99) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x306352 + 0x1) + '\x20:\x20' + _0xa09e99);
    } finally {
      _0xf8f2dc['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x5568a9, _0x352e73, _0x50fcf2) => {
  for (var _0x548027 = 0x0; _0x548027 < afew['length']; _0x548027++) {
    await jig(afew, _0x548027);
    var _0x560285 = [{
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
          'value': '' + _0x5568a9
        },
        {
          'name': 'Size',
          'value': '' + afew[_0x548027]['Size']
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
    const _0x2767c8 = { 'embeds': _0x560285 };
    if (afew[_0x548027]['Email'] == '' || afew[_0x548027]['FirstName'] == '' || afew[_0x548027]['LastName'] == '' || afew[_0x548027]['Country'] == '' || afew[_0x548027]['Size'] == '' || afew[_0x548027]['Address1'] == '' || afew[_0x548027]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + _0x50fcf2['name'] + ']\x20Task\x20' + (_0x548027 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x206fe6 = getProxy()[_0x548027]['split'](':');
    else
      var _0x4ecea2 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x206fe6 = getProxy()[_0x4ecea2]['split'](':');
    const _0x22a3e6 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x206fe6[0x0] + ':' + _0x206fe6[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x1245d8 = await _0x22a3e6['newPage']();
      await _0x1245d8['setDefaultNavigationTimeout'](0x1d4c0), await _0x1245d8['authenticate']({
        'username': '' + _0x206fe6[0x2],
        'password': '' + _0x206fe6[0x3]
      }), console['log'](getTime() + '\x20[' + _0x50fcf2['name'] + ']\x20Task\x20' + (_0x548027 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1245d8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1245d8['setRequestInterception'](!![]), _0x1245d8['on']('request', _0xcd8c91 => {
        _0xcd8c91['resourceType']() === 'image' || _0xcd8c91['resourceType']() === 'font' || _0xcd8c91['resourceType']() === 'media' ? _0xcd8c91['abort']() : _0xcd8c91['continue']();
      }), await _0x1245d8['goto'](_0x5568a9), console['log'](getTime() + '\x20[' + _0x50fcf2['name'] + ']\x20Task\x20' + (_0x548027 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x1245d8['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + _0x50fcf2['name'] + ']\x20Task\x20' + (_0x548027 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x1245d8['waitForTimeout'](0x320);
      if (afew[_0x548027]['Size'] == 'RANDOM') {
        console['log'](getTime() + '\x20[' + _0x50fcf2['name'] + ']\x20Task\x20' + (_0x548027 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
        const _0x1b76f7 = await _0x1245d8['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0xce2912 => {
          return _0xce2912['map'](_0x5dbbf5 => _0x5dbbf5['href']);
        });
        var _0x359228 = Math['round'](Math['random']() * (_0x1b76f7['length'] - 0x1));
        await _0x1245d8['goto']('' + _0x1b76f7[_0x359228]);
      } else {
        console['log'](getTime() + '\x20[' + _0x50fcf2['name'] + ']\x20Task\x20' + (_0x548027 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + afew[_0x548027]['Size']), await _0x1245d8['hover']('.release-type');
        try {
          await _0x1245d8['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x548027]['Size'] + '\x22]'), await _0x1245d8['waitForTimeout'](0x320), await _0x1245d8['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x548027]['Size'] + '\x22]');
        } catch (_0x4749ee) {
          console['log'](chalk['red'](getTime() + '\x20[' + _0x50fcf2['name'] + ']\x20Task\x20' + (_0x548027 + 0x1) + '\x20:\x20' + _0x4749ee + '\x20Size\x20not\x20found')), _0x560285[0x0]['title'] = 'Failed\x20entry', _0x560285[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x2767c8);
          continue;
        }
      }
      await _0x1245d8['waitForTimeout'](0x258), await _0x1245d8['type']('#raffle-instagram', '' + afew[_0x548027]['Follower'], { 'delay': 0x64 }), await _0x1245d8['waitForTimeout'](0x384), await _0x1245d8['click']('#raffle-terms'), await _0x1245d8['waitForTimeout'](0x384), await _0x1245d8['evaluate'](() => {
        const _0x3b53a9 = document['querySelector']('button.btn[name=\x27add\x27]');
        _0x3b53a9['click']();
      }), await _0x1245d8['waitForTimeout'](0xbb8), await _0x1245d8['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + _0x50fcf2['name'] + ']\x20Task\x20' + (_0x548027 + 0x1) + '\x20:\x20Filling\x20Information');
      _0x352e73 == 'sec' ? await _0x1245d8['type']('#checkout_email', '' + afew[_0x548027]['FirstName'] + afew[_0x548027]['LastName'] + settings['catchall']) : await _0x1245d8['type']('#checkout_email', '' + afew[_0x548027]['Email']);
      await _0x1245d8['waitForTimeout'](0x258), await _0x1245d8['select']('#checkout_shipping_address_country', '' + afew[_0x548027]['Country']), await _0x1245d8['waitForTimeout'](0x258), await _0x1245d8['type']('#checkout_shipping_address_first_name', '' + afew[_0x548027]['FirstName']), await _0x1245d8['waitForTimeout'](0x320), await _0x1245d8['type']('#checkout_shipping_address_last_name', '' + afew[_0x548027]['LastName']), await _0x1245d8['waitForTimeout'](0x2bc), await _0x1245d8['type']('#checkout_shipping_address_address1', '' + afew[_0x548027]['Address1']), await _0x1245d8['waitForTimeout'](0x2bc), await _0x1245d8['type']('#checkout_shipping_address_address2', '' + afew[_0x548027]['Address2']), await _0x1245d8['waitForTimeout'](0x2bc), await _0x1245d8['type']('#checkout_shipping_address_zip', '' + afew[_0x548027]['Postcode']), await _0x1245d8['waitForTimeout'](0x2bc), await _0x1245d8['type']('#checkout_shipping_address_city', '' + afew[_0x548027]['City']), await _0x1245d8['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + _0x50fcf2['name'] + ']\x20Task\x20' + (_0x548027 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x1245d8['evaluate'](() => {
        const _0x42c8f2 = document['querySelector']('#continue_button');
        _0x42c8f2 && _0x42c8f2['click']();
      }), await _0x1245d8['waitForTimeout'](0x1194), await _0x1245d8['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), await _0x1245d8['evaluate'](() => {
        const _0x29e9cf = document['querySelector']('#continue_button');
        _0x29e9cf && _0x29e9cf['click']();
      }), await _0x1245d8['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + _0x50fcf2['name'] + ']\x20Task\x20' + (_0x548027 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1245d8['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), await _0x1245d8['evaluate'](() => {
        const _0x18d60f = document['querySelector']('#continue_button');
        _0x18d60f && _0x18d60f['click']();
      }), await _0x1245d8['waitForTimeout'](0x1194), await _0x1245d8['waitForSelector']('#continue_button'), await _0x1245d8['evaluate'](() => {
        const _0x558cea = document['querySelector']('#continue_button');
        _0x558cea && _0x558cea['click']();
      });
      try {
        await _0x1245d8['waitForSelector']('div[data-step=\x22thank_you\x22]');
      } catch (_0x1e7ded) {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x50fcf2['name'] + ']\x20Task\x20' + (_0x548027 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x1e7ded));
      }
      console['log'](chalk['green'](getTime() + '\x20[' + _0x50fcf2['name'] + ']\x20Task\x20' + (_0x548027 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x2767c8);
    } catch (_0x5c057e) {
      console['log'](chalk['red'](getTime() + '\x20[' + _0x50fcf2['name'] + ']\x20Task\x20' + (_0x548027 + 0x1) + '\x20:\x20' + _0x5c057e)), _0x560285[0x0]['title'] = 'Failed\x20entry', _0x560285[0x0]['description'] = '' + _0x5c057e, await sendWebhook(errorWH, _0x2767c8);
    } finally {
      _0x22a3e6 && _0x22a3e6['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function kickzAcc(_0x2d3b36) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x30719d = 0x0; _0x30719d < kickz['length']; _0x30719d++) {
    await jig(kickz, _0x30719d);
    if (kickz[_0x30719d]['Email'] == '' || kickz[_0x30719d]['Password'] == '' || kickz[_0x30719d]['FirstName'] == '' || kickz[_0x30719d]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x3958bb = getProxy()[_0x30719d]['split'](':');
    else
      var _0x3eb49a = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x3958bb = getProxy()[_0x3eb49a]['split'](':');
    const _0xc0eb29 = await puppeteer['launch']({
      'headless': ![],
      'args': [
        '--proxy-server=' + _0x3958bb[0x0] + ':' + _0x3958bb[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x166d5d = await _0xc0eb29['newPage']();
      await _0x166d5d['authenticate']({
        'username': '' + _0x3958bb[0x2],
        'password': '' + _0x3958bb[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x166d5d['setRequestInterception'](!![]), _0x166d5d['on']('request', _0x3bb50b => {
        _0x3bb50b['resourceType']() === 'image' || _0x3bb50b['resourceType']() === 'font' || _0x3bb50b['resourceType']() === 'media' ? _0x3bb50b['abort']() : _0x3bb50b['continue']();
      }), await _0x166d5d['goto'](_0x2d3b36), await delay(0xbb8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x166d5d['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x166d5d['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x166d5d['waitForSelector']('#button-register'), await _0x166d5d['click']('#button-register'), await _0x166d5d['waitForSelector']('#customer_salutation'), await _0x166d5d['select']('#customer_salutation', 'mr'), await delay(0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x166d5d['waitForSelector']('#customer_firstname'), await _0x166d5d['type']('#customer_firstname', '' + kickz[_0x30719d]['FirstName']), await delay(0x352), await _0x166d5d['waitForSelector']('#customer_lastname'), await _0x166d5d['type']('#customer_lastname', '' + kickz[_0x30719d]['LastName']), await delay(0x352), await _0x166d5d['type']('#email-input', '' + kickz[_0x30719d]['Email']), await delay(0x352), await _0x166d5d['type']('#email-confirm-input', '' + kickz[_0x30719d]['Email']), await delay(0x352), await _0x166d5d['type']('#register-password', '' + kickz[_0x30719d]['Password']), await delay(0x352), await _0x166d5d['type']('#password-confirm', '' + kickz[_0x30719d]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x166d5d['click']('#consent'), await delay(0x1f4);
      const _0x5c84c4 = await _0x166d5d['$']('div.inputErrorMsg.b-form_section-message');
      if (_0x5c84c4) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
        continue;
      }
      await _0x166d5d['click']('#buttonRegister'), await _0x166d5d['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20Account\x20' + kickz[_0x30719d]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
      async function _0x1a94eb() {
        console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
        var _0x7e1c48 = await prompt['get']('Code');
        return _0x7e1c48['Code'];
      }
      ;
      code = await _0x1a94eb(), delay(0x320), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20Verifying..'), await _0x166d5d['type']('#verificationCode', code), await delay(0x1f4), await _0x166d5d['click']('#buttonVerify'), await delay(0x190), await _0x166d5d['click']('#buttonVerify'), await delay(0x3e8);
      try {
        await _0x166d5d['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20Account\x20' + kickz[_0x30719d]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + kickz[_0x30719d]['Email'] + ',' + kickz[_0x30719d]['Password'] + ','), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20Account\x20' + kickz[_0x30719d]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
      }
    } catch (_0x43f025) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x30719d + 0x1) + '\x20:\x20' + _0x43f025));
    } finally {
      _0xc0eb29 && _0xc0eb29['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
}
async function bwAcc(_0x3891b1, _0x55b6c3) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x3bf1fd = 0x0; _0x3bf1fd < bouncewear['length']; _0x3bf1fd++) {
    await jig(bouncewear, _0x3bf1fd);
    if (bouncewear[_0x3bf1fd]['Email'] == '' || bouncewear[_0x3bf1fd]['Password'] == '' || bouncewear[_0x3bf1fd]['FirstName'] == '' || bouncewear[_0x3bf1fd]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3bf1fd + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x35621c = getProxy()[_0x3bf1fd]['split'](':');
    else
      var _0x2d6ee8 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x35621c = getProxy()[_0x2d6ee8]['split'](':');
    const _0x51eae7 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x35621c[0x0] + ':' + _0x35621c[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x3cda06 = await _0x51eae7['newPage']();
      await _0x3cda06['authenticate']({
        'username': '' + _0x35621c[0x2],
        'password': '' + _0x35621c[0x3]
      }), console['log'](getTime() + '\x20[' + _0x55b6c3['name'] + ']\x20Task\x20' + (_0x3bf1fd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3cda06['setRequestInterception'](!![]), _0x3cda06['on']('request', _0x5eb31f => {
        _0x5eb31f['resourceType']() === 'image' || _0x5eb31f['resourceType']() === 'font' || _0x5eb31f['resourceType']() === 'media' ? _0x5eb31f['abort']() : _0x5eb31f['continue']();
      }), await _0x3cda06['goto'](_0x3891b1), await delay(0xbb8), await _0x3cda06['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x55b6c3['name'] + ']\x20Task\x20' + (_0x3bf1fd + 0x1) + '\x20:\x20Filling\x20information'), await _0x3cda06['type']('#RegisterForm-FirstName', '' + bouncewear[_0x3bf1fd]['FirstName']), await delay(0x226), await _0x3cda06['type']('#RegisterForm-LastName', '' + bouncewear[_0x3bf1fd]['LastName']), await delay(0x226), await _0x3cda06['type']('#RegisterForm-email', '' + bouncewear[_0x3bf1fd]['Email']), await delay(0x226), await _0x3cda06['type']('#RegisterForm-password', '' + bouncewear[_0x3bf1fd]['Password']), await delay(0x226), await _0x3cda06['click']('#marketing'), console['log'](getTime() + '\x20[' + _0x55b6c3['name'] + ']\x20Task\x20' + (_0x3bf1fd + 0x1) + '\x20:\x20Submitting..'), await _0x3cda06['$eval']('#RegisterForm', _0x5371e7 => _0x5371e7['submit']()), await delay(0x1f40), console['log'](getTime() + '\x20[' + _0x55b6c3['name'] + ']\x20Task\x20' + (_0x3bf1fd + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x3cda06['solveRecaptchas'](), await _0x3cda06['click']('.shopify-challenge__button.btn');
      async function _0x175e98() {
        for (var _0x49407b = 0x0; _0x49407b < 0x4; _0x49407b++) {
          try {
            console['log']('try'), await _0x3cda06['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](getTime() + '\x20[' + _0x55b6c3['name'] + ']\x20Task\x20' + (_0x3bf1fd + 0x1) + '\x20:\x20' + chalk['red']('Catpcha\x20failed,\x20retrying..')), await _0x3cda06['solveRecaptchas'](), await _0x3cda06['click']('.shopify-challenge__button.btn');
          } catch {
            console['log']('catch');
            break;
          }
        }
      }
      await _0x175e98(), console['log'](getTime() + '\x20[' + _0x55b6c3['name'] + ']\x20Task\x20' + (_0x3bf1fd + 0x1) + '\x20:\x20Captcha\x20Solved'), await delay(0x1f4);
      try {
        await _0x3cda06['waitForSelector']('.featured-title'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x55b6c3['name'] + ']\x20Task\x20' + (_0x3bf1fd + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3bf1fd]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x3bf1fd]['Email'] + ',' + bouncewear[_0x3bf1fd]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x55b6c3['name'] + ']\x20Task\x20' + (_0x3bf1fd + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3bf1fd]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
      } catch (_0x1590f9) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3bf1fd + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1590f9));
      }
    } catch (_0x4c48d9) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3bf1fd + 0x1) + '\x20:\x20' + _0x4c48d9));
    } finally {
      _0x51eae7 && _0x51eae7['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function pattaAcc(_0x15f739, _0x4a5dfe) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0xdc6781 = 0x0; _0xdc6781 < patta['length']; _0xdc6781++) {
    await jig(patta, _0xdc6781);
    if (patta[_0xdc6781]['Email'] == '' || patta[_0xdc6781]['Password'] == '' || patta[_0xdc6781]['FirstName'] == '' || patta[_0xdc6781]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xdc6781 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x5b7c77 = getProxy()[_0xdc6781]['split'](':');
    else
      var _0x57f97b = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x5b7c77 = getProxy()[_0x57f97b]['split'](':');
    const _0x1182a4 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x5b7c77[0x0] + ':' + _0x5b7c77[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x5851fa = await _0x1182a4['newPage']();
      await _0x5851fa['authenticate']({
        'username': '' + _0x5b7c77[0x2],
        'password': '' + _0x5b7c77[0x3]
      }), console['log'](getTime() + '\x20[' + _0x4a5dfe['name'] + ']\x20Task\x20' + (_0xdc6781 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5851fa['setRequestInterception'](!![]), _0x5851fa['on']('request', _0x14a830 => {
        _0x14a830['resourceType']() === 'image' || _0x14a830['resourceType']() === 'font' || _0x14a830['resourceType']() === 'media' ? _0x14a830['abort']() : _0x14a830['continue']();
      }), await _0x5851fa['goto'](_0x15f739), await delay(0xbb8), await _0x5851fa['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x4a5dfe['name'] + ']\x20Task\x20' + (_0xdc6781 + 0x1) + '\x20:\x20Filling\x20information'), await _0x5851fa['type']('#RegisterForm-FirstName', '' + patta[_0xdc6781]['FirstName']), await delay(0x226), await _0x5851fa['type']('#RegisterForm-LastName', '' + patta[_0xdc6781]['LastName']), await delay(0x226), await _0x5851fa['type']('#RegisterForm-email', '' + patta[_0xdc6781]['Email']), await delay(0x226), await _0x5851fa['type']('#RegisterForm-password', '' + patta[_0xdc6781]['Password']), await delay(0x226), console['log'](getTime() + '\x20[' + _0x4a5dfe['name'] + ']\x20Task\x20' + (_0xdc6781 + 0x1) + '\x20:\x20Submitting..'), await _0x5851fa['$eval']('#RegisterForm', _0x3e373f => _0x3e373f['submit']()), await delay(0x1f40);
      try {
        await _0x5851fa['waitForSelector']('.home-page-grid__collection'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x4a5dfe['name'] + ']\x20Task\x20' + (_0xdc6781 + 0x1) + '\x20:\x20Account\x20' + patta[_0xdc6781]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/patta.csv', '\x0a' + patta[_0xdc6781]['Email'] + ',' + patta[_0xdc6781]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x4a5dfe['name'] + ']\x20Task\x20' + (_0xdc6781 + 0x1) + '\x20:\x20Account\x20' + patta[_0xdc6781]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
      } catch (_0x4d188c) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xdc6781 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4d188c));
      }
    } catch (_0x4af2d1) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xdc6781 + 0x1) + '\x20:\x20' + _0x4af2d1));
    } finally {
      _0x1182a4 && _0x1182a4['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function pattaFunction(_0x4d5023, _0x35dde5) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x28b3af = 0x0; _0x28b3af < patta['length']; _0x28b3af++) {
    await jig(patta, _0x28b3af);
    if (patta[_0x28b3af]['Email'] == '' || patta[_0x28b3af]['Password'] == '' || patta[_0x28b3af]['FirstName'] == '' || patta[_0x28b3af]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x28b3af + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x4c3c14 = getProxy()[_0x28b3af]['split'](':');
    else
      var _0x2ea3ff = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x4c3c14 = getProxy()[_0x2ea3ff]['split'](':');
    const _0x477df5 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x4c3c14[0x0] + ':' + _0x4c3c14[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x15efa1 = await _0x477df5['newPage']();
      await _0x15efa1['authenticate']({
        'username': '' + _0x4c3c14[0x2],
        'password': '' + _0x4c3c14[0x3]
      }), console['log'](getTime() + '\x20[' + _0x35dde5['name'] + ']\x20Task\x20' + (_0x28b3af + 0x1) + '\x20:\x20Getting\x20Session'), await _0x15efa1['setRequestInterception'](!![]), _0x15efa1['on']('request', _0xb5acc0 => {
        _0xb5acc0['resourceType']() === 'image' || _0xb5acc0['resourceType']() === 'font' || _0xb5acc0['resourceType']() === 'media' ? _0xb5acc0['abort']() : _0xb5acc0['continue']();
      }), await _0x15efa1['goto']('https://www.patta.nl/nl/account/login', {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), await _0x15efa1['waitForSelector']('#CustomerEmail'), console['log'](getTime() + '\x20[' + _0x35dde5['name'] + ']\x20Task\x20' + (_0x28b3af + 0x1) + '\x20:\x20Logging\x20in..'), await _0x15efa1['type']('#CustomerEmail', '' + patta[_0x28b3af]['Email']), await delay(0x12c), await _0x15efa1['type']('#CustomerPassword', '' + patta[_0x28b3af]['Password']), await delay(0x226), await _0x15efa1['$eval']('#customer_login', _0x8d26b5 => _0x8d26b5['submit']());
      try {
        await _0x15efa1['waitForSelector']('#orders'), await delay(0x4b0);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x35dde5['name'] + ']\x20Task\x20' + (_0x28b3af + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
        continue;
      }
      await _0x15efa1['goto']('' + patta[_0x28b3af]['Url'], {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x35dde5['name'] + ']\x20Task\x20' + (_0x28b3af + 0x1) + '\x20:\x20Starting\x20Entry');
      try {
        await _0x15efa1['waitForSelector']('#email');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x35dde5['name'] + ']\x20Task\x20' + (_0x28b3af + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
      }
      await _0x15efa1['type']('#email', '' + patta[_0x28b3af]['Email']), await delay(0x384), await _0x15efa1['type']('#first_name', '' + patta[_0x28b3af]['FirstName']), await delay(0x514), await _0x15efa1['type']('#last_name', '' + patta[_0x28b3af]['LastName']), await delay(0x514), await _0x15efa1['type']('#street_address', patta[_0x28b3af]['Address1'] + '\x20' + patta[_0x28b3af]['Address2']), await delay(0x2bc), await _0x15efa1['type']('#zip_code', '' + patta[_0x28b3af]['Postcode']), await delay(0x320), await _0x15efa1['type']('#city', '' + patta[_0x28b3af]['City']), await delay(0x320), await _0x15efa1['type']('#bday', '' + patta[_0x28b3af]['Bday']), await delay(0x320), await _0x15efa1['type']('#instagram', '' + patta[_0x28b3af]['Follower']), await delay(0x352);
      if (patta[_0x28b3af]['Size'] == 'RANDOM') {
        const _0x3e20fb = await _0x15efa1['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x55ba80 => {
          return _0x55ba80['map'](_0x39aeb1 => _0x39aeb1['textContent']);
        });
        var _0x394a9c = Math['round'](Math['random']() * (_0x3e20fb['length'] - 0x1));
        console['log'](getTime() + '\x20[' + _0x35dde5['name'] + ']\x20Task\x20' + (_0x28b3af + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x3e20fb[_0x394a9c]), await _0x15efa1['click']('label[data-eu-size=\x22' + _0x3e20fb[_0x394a9c] + '\x22]');
      } else {
        console['log'](getTime() + '\x20[' + _0x35dde5['name'] + ']\x20Task\x20' + (_0x28b3af + 0x1) + '\x20:\x20Picking\x20Size\x20' + patta[_0x28b3af]['Size']);
        try {
          await _0x15efa1['click']('label[data-eu-size=\x22' + patta[_0x28b3af]['Size'] + '\x22]');
        } catch {
          await _0x15efa1['click']('label[data-eu-size=\x22' + patta[_0x28b3af]['Size'] + '.0\x22]');
        }
      }
      await delay(0xbb8), await _0x15efa1['$$eval']('.raffle__checkbox-label', _0xc46d2d => _0xc46d2d['forEach'](_0x1a6b90 => _0x1a6b90['click']())), await delay(0x7d0), console['log'](getTime() + '\x20[' + _0x35dde5['name'] + ']\x20Task\x20' + (_0x28b3af + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x15efa1['click']('#raffle__form-submit'), await delay(0x1388);
      try {
        await _0x15efa1['waitForSelector']('#raffle__confirmation-message-container[class=\x22\x22]'), console['log'](chalk['green'](getTime() + '\x20[' + _0x35dde5['name'] + ']\x20Task\x20' + (_0x28b3af + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch (_0x57e7b8) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x28b3af + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x57e7b8));
      }
    } catch (_0x6c357e) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x28b3af + 0x1) + '\x20:\x20' + _0x6c357e));
    } finally {
      _0x477df5 && _0x477df5['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function oqiumFunction(_0x2df687, _0x1dad49, _0x416617) {
  await jig(oqium, _0x2df687);
  var _0x55e6c5 = [{
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
        'value': '' + oqium[_0x2df687]['Size']
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
  const _0x2e9bff = { 'embeds': _0x55e6c5 };
  if (settings['useRandomProxy'] = ![])
    var _0x47079d = getProxy()[_0x2df687]['split'](':');
  else
    var _0xb38780 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x47079d = getProxy()[_0xb38780]['split'](':');
  var _0x543edc = _0x416617['data'];
  _0x1dad49 == 'exp' ? _0x543edc['data']['attributes']['email'] = '' + oqium[_0x2df687]['FirstName'] + oqium[_0x2df687]['LastName'] + settings['catchall'] : _0x543edc['data']['attributes']['email'] = '' + oqium[_0x2df687]['Email'];
  _0x543edc['data']['attributes']['properties']['$first_name'] = '' + oqium[_0x2df687]['FirstName'], _0x543edc['data']['attributes']['properties']['$last_name'] = '' + oqium[_0x2df687]['LastName'], _0x543edc['data']['attributes']['properties']['$address1'] = oqium[_0x2df687]['Address1'] + '\x20' + oqium[_0x2df687]['Address2'], _0x543edc['data']['attributes']['properties']['$zip'] = '' + oqium[_0x2df687]['Zip'], _0x543edc['data']['attributes']['properties']['$city'] = '' + oqium[_0x2df687]['City'], _0x543edc['data']['attributes']['properties']['$country'] = '' + oqium[_0x2df687]['Country'], _0x543edc['data']['attributes']['properties']['Size'] = '' + oqium[_0x2df687]['Size'], _0x543edc['data']['attributes']['properties']['$phone_number'] = '' + oqium[_0x2df687]['Phone'], _0x543edc['data']['attributes']['properties']['Instagram\x20Account'] = '' + oqium[_0x2df687]['Follower'];
  var _0x342ac9 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x416617['url'],
    'headers': _0x416617['headers'],
    'body': JSON['stringify'](_0x543edc),
    'proxy': 'http://' + _0x47079d[0x2] + ':' + _0x47079d[0x3] + '@' + _0x47079d[0x0] + ':' + _0x47079d[0x1]
  };
  return _0x1dad49 === 'ver' && (_0x342ac9['method'] = 'GET'), new Promise(function (_0x7ec19, _0x386ef6) {
    callback = async (_0x143f28, _0xbfdeb9, _0xecc6c1) => {
      !_0x143f28 && _0xbfdeb9['statusCode'] == 0xca || !_0x143f28 && _0xbfdeb9['statusCode'] == 0xc8 ? (await sendWebhook(succesWH, _0x2e9bff), _0x7ec19(console['log'](chalk['green'](getTime() + '\x20[' + _0x416617['name'] + ']\x20Task\x20' + (_0x2df687 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x55e6c5[0x0]['title'] = 'Failed\x20entry', _0x55e6c5[0x0]['description'] = '' + _0x143f28, await sendWebhook(errorWH, _0x2e9bff), _0x386ef6(console['log'](getTime() + '\x20[' + _0x416617['name'] + ']\x20Task\x20' + (_0x2df687 + 0x1) + ':\x20' + _0x143f28)));
    };
    try {
      console['log'](getTime() + '\x20[' + _0x416617['name'] + ']\x20Task\x20' + (_0x2df687 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x543edc['data']['attributes']['email']), request(_0x342ac9, callback);
    } catch (_0x705a33) {
      console['log'](getTime() + '\x20Task\x20' + (_0x2df687 + 0x1) + ':\x20' + _0x705a33);
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
      async function _0x2786e4() {
        await delay(0x320), console['clear'](), console['log'](getProxy()['length']), console['log']('Welcome\x20to\x20' + chalk['cyan']('JRaffles();') + '\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
        for (var _0x4f25a6 = 0x0; _0x4f25a6 < modules['length']; _0x4f25a6++) {
          if (modules[_0x4f25a6]['name'] === 'Reload\x20Settings' || modules[_0x4f25a6]['name'] === 'Change\x20Settings')
            continue;
          else
            console['log']('\x20(' + _0x4f25a6 + ')\x20[' + modules[_0x4f25a6]['name'] + ']');
        }
        ;
        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (modules['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (modules['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
        if (modules[taskModule]['name'] == 'AFEW\x20Store') {
          taskFunction = await getFunction(modules[taskModule]['modules']);
          var _0x32de48 = modules[taskModule]['modules'][taskFunction];
          return console['clear'](), await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'nor', _0x32de48), _0x2786e4();
        } else {
          if (modules[taskModule]['name'] == 'MAHA\x20Amsterdam') {
            taskFunction = await getFunction(modules[taskModule]['modules']);
            var _0x32de48 = modules[taskModule]['modules'][taskFunction];
            if (taskFunction == 0x0) {
              console['log']('Starting\x20' + maha['length'] + '\x20MAHA\x20Tasks');
              for (var _0x2e056d = 0x0; _0x2e056d < maha['length']; _0x2e056d++) {
                console['log'](getTime() + '\x20[' + _0x32de48['name'] + ']\x20Task\x20' + (_0x2e056d + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2e056d, 'nor', _0x32de48), console['log'](getTime() + '\x20[' + _0x32de48['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
              ;
              return _0x2786e4();
            } else {
              if (taskFunction == 0x1) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x2e056d = 0x0; _0x2e056d < links['length']; _0x2e056d++) {
                  _0x32de48['url'] = links[_0x2e056d], console['log'](getTime() + '\x20[' + _0x32de48['name'] + ']\x20Task\x20' + (_0x2e056d + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2e056d, 'ver', _0x32de48), console['log'](getTime() + '\x20[' + _0x32de48['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
                ;
                return _0x2786e4();
              }
            }
          } else {
            if (modules[taskModule]['name'] == 'FOOTSHOP')
              await footshopModule(), await delay(0x1388);
            else {
              if (modules[taskModule]['name'] == 'OQIUM\x20Store') {
                taskFunction = await getFunction(modules[taskModule]['modules']);
                var _0x32de48 = modules[taskModule]['modules'][taskFunction];
                console['clear']();
                if (taskFunction == 0x0) {
                  console['log']('Starting\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                  for (var _0x2e056d = 0x0; _0x2e056d < oqium['length']; _0x2e056d++) {
                    console['log'](getTime() + '\x20[' + _0x32de48['name'] + ']\x20Task\x20' + (_0x2e056d + 0x1) + ':\x20Getting\x20Session');
                    try {
                      await oqiumFunction(_0x2e056d, 'exp', _0x32de48);
                    } catch {
                      console['log'](chalk['red'](getTime() + '\x20[' + _0x32de48['name'] + ']\x20Task\x20' + (_0x2e056d + 0x1) + ':\x20Task\x20failed'));
                    }
                    console['log'](getTime() + '\x20[' + _0x32de48['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                  }
                } else {
                  if (taskFunction == 0x1) {
                    console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                    for (var _0x2e056d = 0x0; _0x2e056d < links['length']; _0x2e056d++) {
                      try {
                        modules[taskModule]['url'] = links[_0x2e056d], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e056d + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2e056d, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                      } catch (_0x5635fa) {
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
                  var _0x32de48 = modules[taskModule]['modules'][taskFunction];
                  console['clear']();
                  if (taskFunction == 0x0)
                    await bwAcc('https://bouncewear.com/nl/account/register', _0x32de48);
                  else {
                    if (taskFunction == 0x1) {
                    }
                  }
                  ;
                } else {
                  if (modules[taskModule]['name'] == 'PATTA') {
                    taskFunction = await getFunction(modules[taskModule]['modules']);
                    var _0x32de48 = modules[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x0)
                      await pattaAcc('https://patta.nl/account/register', _0x32de48);
                    else
                      taskFunction == 0x1 && await pattaFunction('', _0x32de48);
                    ;
                  } else {
                    if (modules[taskModule]['name'] == 'Change\x20Settings') {
                      console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                      var _0x35b199 = 0x0;
                      for (const _0x394dd8 in settings) {
                        console['log']('(' + _0x35b199 + ')\x20' + _0x394dd8 + '\x20:\x20' + settings[_0x394dd8]), _0x35b199++;
                      }
                      console['log']('');
                      var _0x262178 = await getSetting();
                      console['clear'];
                      var _0x36526f = 0x0;
                      for (var _0x3b0eed in settings) {
                        if (_0x262178 == _0x36526f) {
                          console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x3b0eed + '\x20:'), settings[_0x3b0eed] = await getValue(), fs['writeFileSync']('../settings.json', JSON['stringify'](settings));
                          break;
                        } else
                          _0x36526f++;
                      }
                      return console['log']('Settings\x20Saved!'), await delay(0xbb8), _0x2786e4();
                    } else {
                      if (modules[taskModule]['name'] == 'Reload\x20Settings')
                        return console['log']('Reloading\x20settings'), await loadSettings(), _0x2786e4();
                      else {
                        if (taskModule == 0x45) {
                          modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                          var _0x5ce7d0 = await getPassword();
                          _0x5ce7d0 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
      await _0x2786e4();
    } catch (_0x2b349b) {
      return console['log'](_0x2b349b), await delay(0x3a98);
    }
}
;
setTitle('JRaffles'), loadSettings(), main();