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
  const _0x424059 = fs['readFileSync']('../tasks/footshop.csv', 'utf-8');
  footshop = Papa['parse'](_0x424059, { 'header': !![] })['data'];
  const _0x1fae79 = fs['readFileSync']('../tasks/bstn.csv', 'utf-8');
  bstn = Papa['parse'](_0x1fae79, { 'header': !![] })['data'];
  const _0x1dbdfe = fs['readFileSync']('../tasks/kickz.csv', 'utf-8');
  kickz = Papa['parse'](_0x1dbdfe, { 'header': !![] })['data'];
  const _0x1ea77d = fs['readFileSync']('../tasks/oqium.csv', 'utf-8');
  oqium = Papa['parse'](_0x1ea77d, { 'header': !![] })['data'];
  const _0x37be41 = fs['readFileSync']('../tasks/patta.csv', 'utf-8');
  patta = Papa['parse'](_0x37be41, { 'header': !![] })['data'], taskFiles = fs['readdirSync']('../tasks'), settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), !settings['delay'] && (settings['delay'] = 0x2710, fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['captchaKey'] && (settings['captchaKey'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['useRandomProxy'] && (settings['useRandomProxy'] = ![], fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x4d94c1 => new Promise(_0x59a97d => setTimeout(_0x59a97d, _0x4d94c1));
async function getLicense(_0x4ecbc7) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x4ecbc7, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x94e207 => _0x94e207['data'])['catch'](() => null);
}
;
async function checkLicense(_0xa053f8) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x2ecbdc = await getLicense(_0xa053f8);
  username = JSON['stringify'](_0x2ecbdc['user']['username']);
  if (!_0x2ecbdc)
    return console['log']('License\x20not\x20found');
  if (!_0x2ecbdc['user'])
    return console['log']('License\x20not\x20bound');
  return _0x2ecbdc['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x5032c8 = await prompt['get']('Module');
  return console['clear'](), _0x5032c8['Module'];
}
;
async function getSetting() {
  var _0x2f2423 = await prompt['get']('Setting');
  return console['clear'](), _0x2f2423['Setting'];
}
async function getTaskFile() {
  console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
  for (var _0x40fe8c = 0x0; _0x40fe8c < taskFiles['length']; _0x40fe8c++) {
    console['log']('\x20(' + _0x40fe8c + ')\x20' + taskFiles[_0x40fe8c]);
  }
  console['log']('');
  var _0x26ce65 = await prompt['get']('Task'), _0x318718 = fs['readFileSync']('../tasks/' + taskFiles[_0x26ce65['Task']], 'utf-8');
  return taskCSV = Papa['parse'](_0x318718, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x26ce65['Task']])), taskCSV;
}
async function getValue() {
  var _0xf36b0 = await prompt['get']('Value');
  return console['clear'](), _0xf36b0['Value'];
}
async function getFunction(_0x5e67c4) {
  console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
  for (var _0x39a18d = 0x0; _0x39a18d < _0x5e67c4['length']; _0x39a18d++) {
    console['log']('\x20(' + _0x39a18d + ')\x20[' + _0x5e67c4[_0x39a18d]['name'] + ']');
  }
  ;
  console['log']('');
  var _0x4ab98b = await prompt['get']('Module');
  return _0x4ab98b['Module'];
}
async function getPassword() {
  var _0x1747df = await prompt['get']('Password');
  return console['clear'](), _0x1747df['Password'];
}
;
async function getLinks() {
  var _0x28917c = await prompt['get']('Links');
  return _0x28917c['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x1a70bf = 0x0; _0x1a70bf < afewProducts['length']; _0x1a70bf++) {
    console['log']('\x20(' + _0x1a70bf + ')\x20' + afewProducts[_0x1a70bf]);
  }
  ;
  console['log']();
  let _0x5ad3f7 = await prompt['get']('Product');
  console['clear'](), afewProduct = _0x5ad3f7['Product'];
  return;
}
;
function getTime() {
  var _0x107e94 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x107e94;
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
async function sendWebhook(_0x566c23, _0x2a87b9) {
  let _0x270b28 = { 'headers': { 'content-type': 'application/json' } };
  await axios['post'](_0x566c23, _0x2a87b9, _0x270b28);
}
;
async function jig(_0x1a9ff9, _0x3584db) {
  var _0x1c2783 = _0x1a9ff9[_0x3584db]['Address1']['split'](''), _0x1b3e1f = _0x1a9ff9[_0x3584db]['Address2']['split'](''), _0xd34a0 = _0x1a9ff9[_0x3584db]['Email']['split']('@');
  for (var _0x3ed8a0 = 0x0; _0x3ed8a0 < _0x1c2783['length']; _0x3ed8a0++) {
    if (_0x1c2783[_0x3ed8a0] == 'X') {
      var _0x1512b7 = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x1c2783[_0x3ed8a0] = lettersArray[_0x1512b7];
    }
  }
  ;
  for (var _0x3ed8a0 = 0x0; _0x3ed8a0 < _0x1b3e1f['length']; _0x3ed8a0++) {
    if (_0x1b3e1f[_0x3ed8a0] == 'X') {
      var _0x1512b7 = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x1b3e1f[_0x3ed8a0] = lettersArray[_0x1512b7];
    }
  }
  ;
  _0x1a9ff9[_0x3584db]['FirstName'] == 'RANDOM' && (_0x1a9ff9[_0x3584db]['FirstName'] = random['first']());
  _0x1a9ff9[_0x3584db]['LastName'] == 'RANDOM' && (_0x1a9ff9[_0x3584db]['LastName'] = random['last']());
  _0xd34a0[0x0] == 'RANDOM' ? _0xd34a0[0x0] = '' + random['first']() + random['last']() + '@' : _0xd34a0[0x0] = _0xd34a0[0x0] + '@';
  _0x1a9ff9[_0x3584db]['Email'] = _0xd34a0['join'](''), _0x1a9ff9[_0x3584db]['Address1'] = _0x1c2783['join'](''), _0x1a9ff9[_0x3584db]['Address2'] = _0x1b3e1f['join']('');
  return;
}
;
function getProxy() {
  let _0xce14a2 = proxyFile['split']('\x0a'), _0xd12ca4 = _0xce14a2['map']((_0x1f5dd5, _0x2e59d3) => {
    sanatizeProxy = _0x1f5dd5['replace']('\x0d', '');
    if (_0xce14a2[_0x2e59d3 + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0xd12ca4;
}
;
async function afewScraper() {
  var _0x1b0446 = getProxy()[0x1]['split'](':');
  const _0x44372a = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x1b0446[0x0] + ':' + _0x1b0446[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x4b5612 = await _0x44372a['newPage']();
    await _0x4b5612['authenticate']({
      'username': '' + _0x1b0446[0x2],
      'password': '' + _0x1b0446[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x4b5612['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4b5612['setRequestInterception'](!![]), _0x4b5612['on']('request', _0x45e118 => {
      _0x45e118['resourceType']() === 'image' || _0x45e118['resourceType']() === 'font' || _0x45e118['resourceType']() === 'media' ? _0x45e118['abort']() : _0x45e118['continue']();
    }), await _0x4b5612['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x4b5612['waitForTimeout'](0xbb8), await _0x4b5612['waitForSelector']('.product-card');
    const _0x552001 = await _0x4b5612['$$eval']('a.product-card', _0xd361bc => {
      return _0xd361bc['map'](_0x2ae517 => _0x2ae517['href']);
    });
    return afewProducts = _0x552001;
  } catch (_0x5ebc1b) {
    console['log']('\x20' + _0x5ebc1b);
  } finally {
    _0x44372a['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x4e346e, _0x21d663, _0x204023, _0x14da8f) {
  await jig(_0x14da8f, _0x4e346e);
  var _0x3f5c2b = [{
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
        'value': '' + oqium[_0x4e346e]['Size']
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
  const _0x4b3f7c = { 'embeds': _0x3f5c2b };
  if (settings['useRandomProxy'] = ![])
    var _0x3117b5 = getProxy()[_0x4e346e]['split'](':');
  else
    var _0x47e03a = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x3117b5 = getProxy()[_0x47e03a]['split'](':');
  var _0x508eb6 = _0x204023['data'];
  _0x21d663 == 'exp' ? _0x508eb6['data']['attributes']['email'] = '' + _0x14da8f[_0x4e346e]['FirstName'] + _0x14da8f[_0x4e346e]['LastName'] + settings['catchall'] : _0x508eb6['data']['attributes']['email'] = '' + _0x14da8f[_0x4e346e]['Email'];
  _0x508eb6['data']['attributes']['properties']['$first_name'] = '' + _0x14da8f[_0x4e346e]['FirstName'], _0x508eb6['data']['attributes']['properties']['$last_name'] = '' + _0x14da8f[_0x4e346e]['LastName'], _0x508eb6['data']['attributes']['properties']['$address1'] = _0x14da8f[_0x4e346e]['Address1'] + '\x20' + _0x14da8f[_0x4e346e]['Address2'], _0x508eb6['data']['attributes']['properties']['$zip'] = '' + _0x14da8f[_0x4e346e]['Zip'], _0x508eb6['data']['attributes']['properties']['$city'] = '' + _0x14da8f[_0x4e346e]['City'], _0x508eb6['data']['attributes']['properties']['$country'] = '' + _0x14da8f[_0x4e346e]['Country'], _0x508eb6['data']['attributes']['properties']['Size'] = '' + _0x14da8f[_0x4e346e]['Size'], _0x508eb6['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x14da8f[_0x4e346e]['Follower'];
  var _0x570a7e = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x204023['url'],
    'headers': _0x204023['headers'],
    'body': JSON['stringify'](_0x508eb6),
    'proxy': 'http://' + _0x3117b5[0x2] + ':' + _0x3117b5[0x3] + '@' + _0x3117b5[0x0] + ':' + _0x3117b5[0x1]
  };
  return _0x21d663 === 'ver' && (_0x570a7e['method'] = 'GET'), new Promise(function (_0x148682, _0x17f174) {
    callback = async (_0x5e2ca6, _0x2d43c7, _0x34e178) => {
      !_0x5e2ca6 && _0x2d43c7['statusCode'] == 0xca || !_0x5e2ca6 && _0x2d43c7['statusCode'] == 0xc8 ? _0x148682(console['log'](chalk['green'](getTime() + '\x20[' + _0x204023['name'] + ']\x20Task\x20' + (_0x4e346e + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x3f5c2b[0x0]['title'] = 'Failed\x20entry', _0x3f5c2b[0x0]['description'] = '' + _0x5e2ca6, await sendWebhook(errorWH, _0x4b3f7c), _0x17f174(console['log'](getTime() + '\x20[' + _0x204023['name'] + ']\x20Task\x20' + (_0x4e346e + 0x1) + ':\x20' + _0x5e2ca6)));
    };
    try {
      _0x21d663 === 'ver' ? console['log'](getTime() + '\x20[' + _0x204023['name'] + ']\x20Task\x20' + (_0x4e346e + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + _0x204023['name'] + ']\x20Task\x20' + (_0x4e346e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x508eb6['data']['attributes']['email']), request(_0x570a7e, callback);
    } catch (_0x304f4a) {
      console['log'](getTime() + '\x20Task\x20' + (_0x4e346e + 0x1) + ':\x20' + _0x304f4a);
    }
  });
}
;
async function footshopModule(_0x355a2f) {
  var _0xe5a2a7;
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x2e8a81 = 0x0; _0x2e8a81 < _0x355a2f['length']; _0x2e8a81++) {
    await jig(_0x355a2f, _0x2e8a81);
    if (_0x355a2f[_0x2e8a81]['Email'] == '' || _0x355a2f[_0x2e8a81]['FirstName'] == '' || _0x355a2f[_0x2e8a81]['LastName'] == '' || _0x355a2f[_0x2e8a81]['Country'] == '' || _0x355a2f[_0x2e8a81]['Size'] == '' || _0x355a2f[_0x2e8a81]['Address1'] == '' || _0x355a2f[_0x2e8a81]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    console['log'](_0x355a2f[_0x2e8a81]['Url']);
    async function _0x111ead() {
      var _0x30c537 = await axios['get']('https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_')['then'](_0x55397f => _0x55397f['data'])['catch'](() => undefined);
      console['log'](_0x30c537);
      var _0x271d42 = _0x30c537['sizeSets']['Men']['sizes'];
      _0x271d42['length'] == 0x0 && (_0x271d42 = _0x30c537['sizeSets']['Women']['sizes'], _0x271d42['length'] == 0x0 && (_0x271d42 = _0x30c537['sizeSets']['Unisex']['sizes'], _0x271d42['length'] == 0x0 && (_0x271d42 = _0x30c537['sizeSets']['Kids']['sizes'])));
      ;
      async function _0x4735ce() {
        for (var _0x4a6138 = 0x0; _0x4a6138 < _0x271d42['length']; _0x4a6138++) {
          if (_0x271d42[_0x4a6138]['eur'] == _0x355a2f[_0x2e8a81]['Size'])
            return _0xe5a2a7 = _0x271d42[_0x4a6138]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x20Size\x20' + _0x355a2f[_0x2e8a81]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x488840 = await _0x4735ce();
      if (_0x488840 == ![])
        return ![];
    }
    let _0x4b2571 = await _0x111ead();
    if (_0x4b2571 == ![])
      continue;
    if (_0x355a2f[_0x2e8a81]['Email'] == '' || _0x355a2f[_0x2e8a81]['FirstName'] == '' || _0x355a2f[_0x2e8a81]['LastName'] == '' || _0x355a2f[_0x2e8a81]['Country'] == '' || _0x355a2f[_0x2e8a81]['Size'] == '' || _0x355a2f[_0x2e8a81]['Address1'] == '' || _0x355a2f[_0x2e8a81]['Zip'] == '' || _0x355a2f[_0x2e8a81]['Phone'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x5e178e = 'https://releases.footshop.com/register/' + _0x355a2f[_0x2e8a81]['Url'] + '/Men/' + _0xe5a2a7;
    if (settings['useRandomProxy'] = ![])
      var _0x38a210 = getProxy()[_0x2e8a81]['split'](':');
    else
      var _0x358e78 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x38a210 = getProxy()[_0x358e78]['split'](':');
    const _0x4f09f0 = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x38a210[0x0] + ':' + _0x38a210[0x1]]
    });
    try {
      const _0x14cdd3 = await _0x4f09f0['newPage']();
      await _0x14cdd3['authenticate']({
        'username': '' + _0x38a210[0x2],
        'password': '' + _0x38a210[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x14cdd3['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x14cdd3['setRequestInterception'](!![]), _0x14cdd3['on']('request', _0x571eff => {
        _0x571eff['resourceType']() === 'image' || _0x571eff['resourceType']() === 'font' || _0x571eff['resourceType']() === 'media' ? _0x571eff['abort']() : _0x571eff['continue']();
      }), await _0x14cdd3['goto']('' + _0x5e178e + _0xe5a2a7), await _0x14cdd3['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x14cdd3['type']('input[name=\x22email\x22]', '' + _0x355a2f[_0x2e8a81]['Email']), await delay(0x640), await _0x14cdd3['type']('input[name=\x22phone\x22]', '' + _0x355a2f[_0x2e8a81]['Phone']), await delay(0x4b0), await _0x14cdd3['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
      try {
        await _0x14cdd3['type']('input[name=\x22firstName\x22]', '' + _0x355a2f[_0x2e8a81]['FirstName']), await delay(0x258);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
        continue;
      }
      await _0x14cdd3['type']('input[name=\x22lastName\x22]', '' + _0x355a2f[_0x2e8a81]['LastName']), await delay(0xc8), await _0x14cdd3['type']('input[name=\x22instagramUsername\x22]', '' + _0x355a2f[_0x2e8a81]['Follower']), await delay(0x4b0), await _0x14cdd3['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x14cdd3['select']('select[name=\x22country\x22]', '' + _0x355a2f[_0x2e8a81]['Country']), await delay(0x2bc), await _0x14cdd3['type']('input[name=\x22streetName\x22]', '' + _0x355a2f[_0x2e8a81]['Address1']), await delay(0x258), await _0x14cdd3['type']('input[name=\x22houseNumber\x22]', '' + _0x355a2f[_0x2e8a81]['HouseNumber'] + _0x355a2f[_0x2e8a81]['Address2']), await delay(0xc8), await _0x14cdd3['type']('input[name=\x22postalCode\x22]', '' + _0x355a2f[_0x2e8a81]['Zip']), await delay(0x1f4), await _0x14cdd3['type']('input[name=\x22city\x22]', '' + _0x355a2f[_0x2e8a81]['City']), await delay(0x4b0), await _0x14cdd3['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x14cdd3['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x14cdd3['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x14cdd3['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x14cdd3['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x14cdd3['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x4b0), await _0x14cdd3['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x355a2f[_0x2e8a81]['CardNumber']), await delay(0x320), await _0x14cdd3['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x355a2f[_0x2e8a81]['ExpiryDate']), await delay(0x4b0), await _0x14cdd3['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x355a2f[_0x2e8a81]['CVV']), await delay(0x226), await _0x14cdd3['type']('input[name=\x22holderName\x22]', '' + _0x355a2f[_0x2e8a81]['NameOnCard']), await delay(0x226), await _0x14cdd3['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x20Awaiting\x203DS');
      try {
        await _0x14cdd3['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await delay(0xbb8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x203DS\x20Failed'));
      }
    } catch (_0x2b463a) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8a81 + 0x1) + '\x20:\x20' + _0x2b463a);
    } finally {
      _0x4f09f0['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x12e025, _0x72de0b, _0x38f023, _0xeadd8d) => {
  for (var _0x372f03 = 0x0; _0x372f03 < _0xeadd8d['length']; _0x372f03++) {
    await jig(_0xeadd8d, _0x372f03);
    var _0x4bc32a = [{
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
          'value': '' + _0x12e025
        },
        {
          'name': 'Size',
          'value': '' + _0xeadd8d[_0x372f03]['Size']
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
    const _0x4f33a0 = { 'embeds': _0x4bc32a };
    if (_0xeadd8d[_0x372f03]['Email'] == '' || _0xeadd8d[_0x372f03]['FirstName'] == '' || _0xeadd8d[_0x372f03]['LastName'] == '' || _0xeadd8d[_0x372f03]['Country'] == '' || _0xeadd8d[_0x372f03]['Size'] == '' || _0xeadd8d[_0x372f03]['Address1'] == '' || _0xeadd8d[_0x372f03]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + _0x38f023['name'] + ']\x20Task\x20' + (_0x372f03 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x319328 = getProxy()[_0x372f03]['split'](':');
    else
      var _0x259f7e = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x319328 = getProxy()[_0x259f7e]['split'](':');
    const _0x10e788 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x319328[0x0] + ':' + _0x319328[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x29f96a = await _0x10e788['newPage']();
      await _0x29f96a['setDefaultNavigationTimeout'](0x1d4c0), await _0x29f96a['authenticate']({
        'username': '' + _0x319328[0x2],
        'password': '' + _0x319328[0x3]
      }), console['log'](getTime() + '\x20[' + _0x38f023['name'] + ']\x20Task\x20' + (_0x372f03 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x29f96a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x29f96a['setRequestInterception'](!![]), _0x29f96a['on']('request', _0x14a5a2 => {
        _0x14a5a2['resourceType']() === 'image' || _0x14a5a2['resourceType']() === 'font' || _0x14a5a2['resourceType']() === 'media' ? _0x14a5a2['abort']() : _0x14a5a2['continue']();
      }), await _0x29f96a['goto'](_0x12e025), console['log'](getTime() + '\x20[' + _0x38f023['name'] + ']\x20Task\x20' + (_0x372f03 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x29f96a['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + _0x38f023['name'] + ']\x20Task\x20' + (_0x372f03 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x29f96a['waitForTimeout'](0x320);
      if (_0xeadd8d[_0x372f03]['Size'] == 'RANDOM') {
        console['log'](getTime() + '\x20[' + _0x38f023['name'] + ']\x20Task\x20' + (_0x372f03 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
        const _0x5d74be = await _0x29f96a['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x5b0b26 => {
          return _0x5b0b26['map'](_0x59a8e4 => _0x59a8e4['href']);
        });
        var _0x2fca92 = Math['round'](Math['random']() * (_0x5d74be['length'] - 0x1));
        await _0x29f96a['goto']('' + _0x5d74be[_0x2fca92]);
      } else {
        console['log'](getTime() + '\x20[' + _0x38f023['name'] + ']\x20Task\x20' + (_0x372f03 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0xeadd8d[_0x372f03]['Size']), await _0x29f96a['hover']('.release-type');
        try {
          await _0x29f96a['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0xeadd8d[_0x372f03]['Size'] + '\x22]'), await _0x29f96a['waitForTimeout'](0x320), await _0x29f96a['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0xeadd8d[_0x372f03]['Size'] + '\x22]');
        } catch (_0x5f8df3) {
          console['log'](chalk['red'](getTime() + '\x20[' + _0x38f023['name'] + ']\x20Task\x20' + (_0x372f03 + 0x1) + '\x20:\x20' + _0x5f8df3 + '\x20Size\x20not\x20found')), _0x4bc32a[0x0]['title'] = 'Failed\x20entry', _0x4bc32a[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x4f33a0);
          continue;
        }
      }
      await _0x29f96a['waitForTimeout'](0x258), await _0x29f96a['type']('#raffle-instagram', '' + _0xeadd8d[_0x372f03]['Follower'], { 'delay': 0x64 }), await _0x29f96a['waitForTimeout'](0x384), await _0x29f96a['click']('#raffle-terms'), await _0x29f96a['waitForTimeout'](0x384), await _0x29f96a['evaluate'](() => {
        const _0xbb50e4 = document['querySelector']('button.btn[name=\x27add\x27]');
        _0xbb50e4['click']();
      }), await _0x29f96a['waitForTimeout'](0xbb8), await _0x29f96a['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + _0x38f023['name'] + ']\x20Task\x20' + (_0x372f03 + 0x1) + '\x20:\x20Filling\x20Information');
      _0x72de0b == 'sec' ? await _0x29f96a['type']('#checkout_email', '' + _0xeadd8d[_0x372f03]['FirstName'] + _0xeadd8d[_0x372f03]['LastName'] + settings['catchall']) : await _0x29f96a['type']('#checkout_email', '' + _0xeadd8d[_0x372f03]['Email']);
      await _0x29f96a['waitForTimeout'](0x258), await _0x29f96a['select']('#checkout_shipping_address_country', '' + _0xeadd8d[_0x372f03]['Country']), await _0x29f96a['waitForTimeout'](0x258), await _0x29f96a['type']('#checkout_shipping_address_first_name', '' + _0xeadd8d[_0x372f03]['FirstName']), await _0x29f96a['waitForTimeout'](0x320), await _0x29f96a['type']('#checkout_shipping_address_last_name', '' + _0xeadd8d[_0x372f03]['LastName']), await _0x29f96a['waitForTimeout'](0x2bc), await _0x29f96a['type']('#checkout_shipping_address_address1', '' + _0xeadd8d[_0x372f03]['Address1']), await _0x29f96a['waitForTimeout'](0x2bc), await _0x29f96a['type']('#checkout_shipping_address_address2', '' + _0xeadd8d[_0x372f03]['Address2']), await _0x29f96a['waitForTimeout'](0x2bc), await _0x29f96a['type']('#checkout_shipping_address_zip', '' + _0xeadd8d[_0x372f03]['Postcode']), await _0x29f96a['waitForTimeout'](0x2bc), await _0x29f96a['type']('#checkout_shipping_address_city', '' + _0xeadd8d[_0x372f03]['City']), await _0x29f96a['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + _0x38f023['name'] + ']\x20Task\x20' + (_0x372f03 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x29f96a['evaluate'](() => {
        const _0x4f484b = document['querySelector']('#continue_button');
        _0x4f484b && _0x4f484b['click']();
      }), await _0x29f96a['waitForTimeout'](0x1194), await _0x29f96a['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), await _0x29f96a['evaluate'](() => {
        const _0x2872a4 = document['querySelector']('#continue_button');
        _0x2872a4 && _0x2872a4['click']();
      }), await _0x29f96a['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + _0x38f023['name'] + ']\x20Task\x20' + (_0x372f03 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x29f96a['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), await _0x29f96a['evaluate'](() => {
        const _0x1bf00e = document['querySelector']('#continue_button');
        _0x1bf00e && _0x1bf00e['click']();
      }), await _0x29f96a['waitForTimeout'](0x1194), await _0x29f96a['waitForSelector']('#continue_button'), await _0x29f96a['evaluate'](() => {
        const _0x5af2a6 = document['querySelector']('#continue_button');
        _0x5af2a6 && _0x5af2a6['click']();
      });
      try {
        await _0x29f96a['waitForSelector']('div[data-step=\x22thank_you\x22]');
      } catch (_0x3adef4) {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x38f023['name'] + ']\x20Task\x20' + (_0x372f03 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x3adef4));
      }
      console['log'](chalk['green'](getTime() + '\x20[' + _0x38f023['name'] + ']\x20Task\x20' + (_0x372f03 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x4f33a0);
    } catch (_0x267958) {
      console['log'](chalk['red'](getTime() + '\x20[' + _0x38f023['name'] + ']\x20Task\x20' + (_0x372f03 + 0x1) + '\x20:\x20' + _0x267958)), _0x4bc32a[0x0]['title'] = 'Failed\x20entry', _0x4bc32a[0x0]['description'] = '' + _0x267958, await sendWebhook(errorWH, _0x4f33a0);
    } finally {
      _0x10e788 && _0x10e788['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function kickzAcc(_0x20307e) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0xfc090e = 0x0; _0xfc090e < kickz['length']; _0xfc090e++) {
    await jig(kickz, _0xfc090e);
    if (kickz[_0xfc090e]['Email'] == '' || kickz[_0xfc090e]['Password'] == '' || kickz[_0xfc090e]['FirstName'] == '' || kickz[_0xfc090e]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x47ce2e = getProxy()[_0xfc090e]['split'](':');
    else
      var _0x39a890 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x47ce2e = getProxy()[_0x39a890]['split'](':');
    const _0x3c6f8d = await puppeteer['launch']({
      'headless': ![],
      'args': [
        '--proxy-server=' + _0x47ce2e[0x0] + ':' + _0x47ce2e[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x145c42 = await _0x3c6f8d['newPage']();
      await _0x145c42['authenticate']({
        'username': '' + _0x47ce2e[0x2],
        'password': '' + _0x47ce2e[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x145c42['setRequestInterception'](!![]), _0x145c42['on']('request', _0x57cde9 => {
        _0x57cde9['resourceType']() === 'image' || _0x57cde9['resourceType']() === 'font' || _0x57cde9['resourceType']() === 'media' ? _0x57cde9['abort']() : _0x57cde9['continue']();
      }), await _0x145c42['goto'](_0x20307e), await delay(0xbb8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x145c42['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x145c42['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x145c42['waitForSelector']('#button-register'), await _0x145c42['click']('#button-register'), await _0x145c42['waitForSelector']('#customer_salutation'), await _0x145c42['select']('#customer_salutation', 'mr'), await delay(0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x145c42['waitForSelector']('#customer_firstname'), await _0x145c42['type']('#customer_firstname', '' + kickz[_0xfc090e]['FirstName']), await delay(0x352), await _0x145c42['waitForSelector']('#customer_lastname'), await _0x145c42['type']('#customer_lastname', '' + kickz[_0xfc090e]['LastName']), await delay(0x352), await _0x145c42['type']('#email-input', '' + kickz[_0xfc090e]['Email']), await delay(0x352), await _0x145c42['type']('#email-confirm-input', '' + kickz[_0xfc090e]['Email']), await delay(0x352), await _0x145c42['type']('#register-password', '' + kickz[_0xfc090e]['Password']), await delay(0x352), await _0x145c42['type']('#password-confirm', '' + kickz[_0xfc090e]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x145c42['click']('#consent'), await delay(0x1f4);
      const _0x3217b4 = await _0x145c42['$']('div.inputErrorMsg.b-form_section-message');
      if (_0x3217b4) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
        continue;
      }
      await _0x145c42['click']('#buttonRegister'), await _0x145c42['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20Account\x20' + kickz[_0xfc090e]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
      async function _0x5f25af() {
        console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
        var _0x11e46b = await prompt['get']('Code');
        return _0x11e46b['Code'];
      }
      ;
      code = await _0x5f25af(), delay(0x320), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20Verifying..'), await _0x145c42['type']('#verificationCode', code), await delay(0x1f4), await _0x145c42['click']('#buttonVerify'), await delay(0x190), await _0x145c42['click']('#buttonVerify'), await delay(0x3e8);
      try {
        await _0x145c42['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20Account\x20' + kickz[_0xfc090e]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + kickz[_0xfc090e]['Email'] + ',' + kickz[_0xfc090e]['Password'] + ','), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20Account\x20' + kickz[_0xfc090e]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
      }
    } catch (_0x582699) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfc090e + 0x1) + '\x20:\x20' + _0x582699));
    } finally {
      _0x3c6f8d && _0x3c6f8d['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
}
async function bwAcc(_0x2d6ab3, _0x52377b) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x1d6ea9 = 0x0; _0x1d6ea9 < bouncewear['length']; _0x1d6ea9++) {
    await jig(bouncewear, _0x1d6ea9);
    if (bouncewear[_0x1d6ea9]['Email'] == '' || bouncewear[_0x1d6ea9]['Password'] == '' || bouncewear[_0x1d6ea9]['FirstName'] == '' || bouncewear[_0x1d6ea9]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1d6ea9 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x4cb073 = getProxy()[_0x1d6ea9]['split'](':');
    else
      var _0x53c9e1 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x4cb073 = getProxy()[_0x53c9e1]['split'](':');
    const _0x3a796c = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x4cb073[0x0] + ':' + _0x4cb073[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x4567f9 = await _0x3a796c['newPage']();
      await _0x4567f9['authenticate']({
        'username': '' + _0x4cb073[0x2],
        'password': '' + _0x4cb073[0x3]
      }), console['log'](getTime() + '\x20[' + _0x52377b['name'] + ']\x20Task\x20' + (_0x1d6ea9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4567f9['setRequestInterception'](!![]), _0x4567f9['on']('request', _0x158529 => {
        _0x158529['resourceType']() === 'image' || _0x158529['resourceType']() === 'font' || _0x158529['resourceType']() === 'media' ? _0x158529['abort']() : _0x158529['continue']();
      }), await _0x4567f9['goto'](_0x2d6ab3), await delay(0xbb8), await _0x4567f9['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x52377b['name'] + ']\x20Task\x20' + (_0x1d6ea9 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4567f9['type']('#RegisterForm-FirstName', '' + bouncewear[_0x1d6ea9]['FirstName']), await delay(0x226), await _0x4567f9['type']('#RegisterForm-LastName', '' + bouncewear[_0x1d6ea9]['LastName']), await delay(0x226), await _0x4567f9['type']('#RegisterForm-email', '' + bouncewear[_0x1d6ea9]['Email']), await delay(0x226), await _0x4567f9['type']('#RegisterForm-password', '' + bouncewear[_0x1d6ea9]['Password']), await delay(0x226), await _0x4567f9['click']('#marketing'), console['log'](getTime() + '\x20[' + _0x52377b['name'] + ']\x20Task\x20' + (_0x1d6ea9 + 0x1) + '\x20:\x20Submitting..'), await _0x4567f9['$eval']('#RegisterForm', _0xdbfa00 => _0xdbfa00['submit']()), await delay(0x1f40), console['log'](getTime() + '\x20[' + _0x52377b['name'] + ']\x20Task\x20' + (_0x1d6ea9 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x4567f9['solveRecaptchas'](), await _0x4567f9['click']('.shopify-challenge__button.btn');
      async function _0x1d6153() {
        for (var _0x40b18a = 0x0; _0x40b18a < 0x4; _0x40b18a++) {
          try {
            console['log']('try'), await _0x4567f9['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](getTime() + '\x20[' + _0x52377b['name'] + ']\x20Task\x20' + (_0x1d6ea9 + 0x1) + '\x20:\x20' + chalk['red']('Catpcha\x20failed,\x20retrying..')), await _0x4567f9['solveRecaptchas'](), await _0x4567f9['click']('.shopify-challenge__button.btn');
          } catch {
            console['log']('catch');
            break;
          }
        }
      }
      await _0x1d6153(), console['log'](getTime() + '\x20[' + _0x52377b['name'] + ']\x20Task\x20' + (_0x1d6ea9 + 0x1) + '\x20:\x20Captcha\x20Solved'), await delay(0x1f4);
      try {
        await _0x4567f9['waitForSelector']('.featured-title'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x52377b['name'] + ']\x20Task\x20' + (_0x1d6ea9 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1d6ea9]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x1d6ea9]['Email'] + ',' + bouncewear[_0x1d6ea9]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x52377b['name'] + ']\x20Task\x20' + (_0x1d6ea9 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1d6ea9]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
      } catch (_0xbe7867) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1d6ea9 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xbe7867));
      }
    } catch (_0x20db0b) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1d6ea9 + 0x1) + '\x20:\x20' + _0x20db0b));
    } finally {
      _0x3a796c && _0x3a796c['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function pattaAcc(_0x2cdb67, _0xfedb44, _0x47e99b) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x5e5a6e = 0x0; _0x5e5a6e < _0x47e99b['length']; _0x5e5a6e++) {
    await jig(_0x47e99b, _0x5e5a6e);
    if (_0x47e99b[_0x5e5a6e]['Email'] == '' || _0x47e99b[_0x5e5a6e]['Password'] == '' || _0x47e99b[_0x5e5a6e]['FirstName'] == '' || _0x47e99b[_0x5e5a6e]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5e5a6e + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x2e2838 = getProxy()[_0x5e5a6e]['split'](':');
    else
      var _0x5ebaed = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x2e2838 = getProxy()[_0x5ebaed]['split'](':');
    const _0x7aaf1c = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x2e2838[0x0] + ':' + _0x2e2838[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x5f5c4e = await _0x7aaf1c['newPage']();
      await _0x5f5c4e['authenticate']({
        'username': '' + _0x2e2838[0x2],
        'password': '' + _0x2e2838[0x3]
      }), console['log'](getTime() + '\x20[' + _0xfedb44['name'] + ']\x20Task\x20' + (_0x5e5a6e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5f5c4e['setRequestInterception'](!![]), _0x5f5c4e['on']('request', _0x33f082 => {
        _0x33f082['resourceType']() === 'image' || _0x33f082['resourceType']() === 'font' || _0x33f082['resourceType']() === 'media' ? _0x33f082['abort']() : _0x33f082['continue']();
      }), await _0x5f5c4e['goto'](_0x2cdb67), await delay(0xbb8), await _0x5f5c4e['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0xfedb44['name'] + ']\x20Task\x20' + (_0x5e5a6e + 0x1) + '\x20:\x20Filling\x20information'), await _0x5f5c4e['type']('#RegisterForm-FirstName', '' + _0x47e99b[_0x5e5a6e]['FirstName']), await delay(0x226), await _0x5f5c4e['type']('#RegisterForm-LastName', '' + _0x47e99b[_0x5e5a6e]['LastName']), await delay(0x226), await _0x5f5c4e['type']('#RegisterForm-email', '' + _0x47e99b[_0x5e5a6e]['Email']), await delay(0x226), await _0x5f5c4e['type']('#RegisterForm-password', '' + _0x47e99b[_0x5e5a6e]['Password']), await delay(0x226), console['log'](getTime() + '\x20[' + _0xfedb44['name'] + ']\x20Task\x20' + (_0x5e5a6e + 0x1) + '\x20:\x20Submitting..'), await _0x5f5c4e['$eval']('#RegisterForm', _0xd06d5e => _0xd06d5e['submit']()), await delay(0x1f40);
      try {
        await _0x5f5c4e['waitForSelector']('.home-page-grid__collection'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0xfedb44['name'] + ']\x20Task\x20' + (_0x5e5a6e + 0x1) + '\x20:\x20Account\x20' + _0x47e99b[_0x5e5a6e]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x47e99b[_0x5e5a6e]['Email'] + ',' + _0x47e99b[_0x5e5a6e]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0xfedb44['name'] + ']\x20Task\x20' + (_0x5e5a6e + 0x1) + '\x20:\x20Account\x20' + _0x47e99b[_0x5e5a6e]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
      } catch (_0x19a548) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5e5a6e + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x19a548));
      }
    } catch (_0x59f284) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5e5a6e + 0x1) + '\x20:\x20' + _0x59f284));
    } finally {
      _0x7aaf1c && _0x7aaf1c['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function pattaFunction(_0x99a589, _0x17ea12, _0x396dca) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x2588b4 = 0x0; _0x2588b4 < _0x396dca['length']; _0x2588b4++) {
    await jig(_0x396dca, _0x2588b4);
    if (_0x396dca[_0x2588b4]['Email'] == '' || _0x396dca[_0x2588b4]['Password'] == '' || _0x396dca[_0x2588b4]['FirstName'] == '' || _0x396dca[_0x2588b4]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2588b4 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    if (settings['useRandomProxy'] = ![])
      var _0x5011cf = getProxy()[_0x2588b4]['split'](':');
    else
      var _0x21fc49 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x5011cf = getProxy()[_0x21fc49]['split'](':');
    const _0x9150f9 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x5011cf[0x0] + ':' + _0x5011cf[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x33728d = await _0x9150f9['newPage']();
      await _0x33728d['authenticate']({
        'username': '' + _0x5011cf[0x2],
        'password': '' + _0x5011cf[0x3]
      }), console['log'](getTime() + '\x20[' + _0x17ea12['name'] + ']\x20Task\x20' + (_0x2588b4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x33728d['setRequestInterception'](!![]), _0x33728d['on']('request', _0x1cc93f => {
        _0x1cc93f['resourceType']() === 'image' || _0x1cc93f['resourceType']() === 'font' || _0x1cc93f['resourceType']() === 'media' ? _0x1cc93f['abort']() : _0x1cc93f['continue']();
      }), await _0x33728d['goto']('https://www.patta.nl/nl/account/login', {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), await _0x33728d['waitForSelector']('#CustomerEmail'), console['log'](getTime() + '\x20[' + _0x17ea12['name'] + ']\x20Task\x20' + (_0x2588b4 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x33728d['type']('#CustomerEmail', '' + _0x396dca[_0x2588b4]['Email']), await delay(0x12c), await _0x33728d['type']('#CustomerPassword', '' + _0x396dca[_0x2588b4]['Password']), await delay(0x226), await _0x33728d['$eval']('#customer_login', _0x57df58 => _0x57df58['submit']());
      try {
        await _0x33728d['waitForSelector']('#orders'), await delay(0x4b0);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x17ea12['name'] + ']\x20Task\x20' + (_0x2588b4 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
        continue;
      }
      await _0x33728d['goto']('' + _0x396dca[_0x2588b4]['Url'], {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x17ea12['name'] + ']\x20Task\x20' + (_0x2588b4 + 0x1) + '\x20:\x20Starting\x20Entry');
      try {
        await _0x33728d['waitForSelector']('#email');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x17ea12['name'] + ']\x20Task\x20' + (_0x2588b4 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
      }
      await _0x33728d['type']('#email', '' + _0x396dca[_0x2588b4]['Email']), await delay(0x384), await _0x33728d['type']('#first_name', '' + _0x396dca[_0x2588b4]['FirstName']), await delay(0x514), await _0x33728d['type']('#last_name', '' + _0x396dca[_0x2588b4]['LastName']), await delay(0x514), await _0x33728d['type']('#street_address', _0x396dca[_0x2588b4]['Address1'] + '\x20' + _0x396dca[_0x2588b4]['Address2']), await delay(0x2bc), await _0x33728d['type']('#zip_code', '' + _0x396dca[_0x2588b4]['Postcode']), await delay(0x320), await _0x33728d['type']('#city', '' + _0x396dca[_0x2588b4]['City']), await delay(0x320), await _0x33728d['type']('#bday', '' + _0x396dca[_0x2588b4]['Bday']), await delay(0x320), await _0x33728d['type']('#instagram', '' + _0x396dca[_0x2588b4]['Follower']), await delay(0x352);
      if (_0x396dca[_0x2588b4]['Size'] == 'RANDOM') {
        const _0x2c3f1f = await _0x33728d['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x3a4f5d => {
          return _0x3a4f5d['map'](_0x2e0b9b => _0x2e0b9b['textContent']);
        });
        var _0x4df718 = Math['round'](Math['random']() * (_0x2c3f1f['length'] - 0x1));
        console['log'](getTime() + '\x20[' + _0x17ea12['name'] + ']\x20Task\x20' + (_0x2588b4 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x2c3f1f[_0x4df718]), await _0x33728d['click']('label[data-eu-size=\x22' + _0x2c3f1f[_0x4df718] + '\x22]');
      } else {
        console['log'](getTime() + '\x20[' + _0x17ea12['name'] + ']\x20Task\x20' + (_0x2588b4 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x396dca[_0x2588b4]['Size']);
        try {
          await _0x33728d['click']('label[data-eu-size=\x22' + _0x396dca[_0x2588b4]['Size'] + '\x22]');
        } catch {
          await _0x33728d['click']('label[data-eu-size=\x22' + _0x396dca[_0x2588b4]['Size'] + '.0\x22]');
        }
      }
      await delay(0xbb8), await _0x33728d['$$eval']('.raffle__checkbox-label', _0x1690cc => _0x1690cc['forEach'](_0x37f884 => _0x37f884['click']())), await delay(0x7d0), console['log'](getTime() + '\x20[' + _0x17ea12['name'] + ']\x20Task\x20' + (_0x2588b4 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x33728d['click']('#raffle__form-submit'), await delay(0x1388);
      try {
        await _0x33728d['waitForSelector']('#raffle__confirmation-message-container[class=\x22\x22]'), console['log'](chalk['green'](getTime() + '\x20[' + _0x17ea12['name'] + ']\x20Task\x20' + (_0x2588b4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch (_0x404144) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2588b4 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x404144));
      }
    } catch (_0x53ca41) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2588b4 + 0x1) + '\x20:\x20' + _0x53ca41));
    } finally {
      _0x9150f9 && _0x9150f9['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function oqiumFunction(_0x4b06d4, _0x4d512c, _0x428ba4, _0x3d87eb) {
  await jig(_0x3d87eb, _0x4b06d4);
  var _0x3f6595 = [{
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
        'value': '' + _0x3d87eb[_0x4b06d4]['Size']
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
  const _0x18f6f6 = { 'embeds': _0x3f6595 };
  if (settings['useRandomProxy'] = ![])
    var _0x447303 = getProxy()[_0x4b06d4]['split'](':');
  else
    var _0x58d49e = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x447303 = getProxy()[_0x58d49e]['split'](':');
  var _0x1766e0 = _0x428ba4['data'];
  _0x4d512c == 'exp' ? _0x1766e0['data']['attributes']['email'] = '' + _0x3d87eb[_0x4b06d4]['FirstName'] + _0x3d87eb[_0x4b06d4]['LastName'] + settings['catchall'] : _0x1766e0['data']['attributes']['email'] = '' + _0x3d87eb[_0x4b06d4]['Email'];
  _0x1766e0['data']['attributes']['properties']['$first_name'] = '' + _0x3d87eb[_0x4b06d4]['FirstName'], _0x1766e0['data']['attributes']['properties']['$last_name'] = '' + _0x3d87eb[_0x4b06d4]['LastName'], _0x1766e0['data']['attributes']['properties']['$address1'] = _0x3d87eb[_0x4b06d4]['Address1'] + '\x20' + _0x3d87eb[_0x4b06d4]['Address2'], _0x1766e0['data']['attributes']['properties']['$zip'] = '' + _0x3d87eb[_0x4b06d4]['Zip'], _0x1766e0['data']['attributes']['properties']['$city'] = '' + _0x3d87eb[_0x4b06d4]['City'], _0x1766e0['data']['attributes']['properties']['$country'] = '' + _0x3d87eb[_0x4b06d4]['Country'], _0x1766e0['data']['attributes']['properties']['Size'] = '' + _0x3d87eb[_0x4b06d4]['Size'], _0x1766e0['data']['attributes']['properties']['$phone_number'] = '' + _0x3d87eb[_0x4b06d4]['Phone'], _0x1766e0['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x3d87eb[_0x4b06d4]['Follower'];
  var _0x700d2f = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x428ba4['url'],
    'headers': _0x428ba4['headers'],
    'body': JSON['stringify'](_0x1766e0),
    'proxy': 'http://' + _0x447303[0x2] + ':' + _0x447303[0x3] + '@' + _0x447303[0x0] + ':' + _0x447303[0x1]
  };
  return _0x4d512c === 'ver' && (_0x700d2f['method'] = 'GET'), new Promise(function (_0x315c7e, _0x1f8109) {
    callback = async (_0x4af1e5, _0x4d7de4, _0x328e90) => {
      !_0x4af1e5 && _0x4d7de4['statusCode'] == 0xca || !_0x4af1e5 && _0x4d7de4['statusCode'] == 0xc8 ? (await sendWebhook(succesWH, _0x18f6f6), _0x315c7e(console['log'](chalk['green'](getTime() + '\x20[' + _0x428ba4['name'] + ']\x20Task\x20' + (_0x4b06d4 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x3f6595[0x0]['title'] = 'Failed\x20entry', _0x3f6595[0x0]['description'] = '' + _0x4af1e5, await sendWebhook(errorWH, _0x18f6f6), _0x1f8109(console['log'](getTime() + '\x20[' + _0x428ba4['name'] + ']\x20Task\x20' + (_0x4b06d4 + 0x1) + ':\x20' + _0x4af1e5)));
    };
    try {
      console['log'](getTime() + '\x20[' + _0x428ba4['name'] + ']\x20Task\x20' + (_0x4b06d4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1766e0['data']['attributes']['email']), request(_0x700d2f, callback);
    } catch (_0xf58891) {
      console['log'](getTime() + '\x20Task\x20' + (_0x4b06d4 + 0x1) + ':\x20' + _0xf58891);
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
      async function _0x255575() {
        await delay(0x320), console['clear'](), console['log']('Welcome\x20to\x20' + chalk['cyan']('JRaffles();') + '\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
        for (var _0x4e5783 = 0x0; _0x4e5783 < modules['length']; _0x4e5783++) {
          if (modules[_0x4e5783]['name'] === 'Reload\x20Settings' || modules[_0x4e5783]['name'] === 'Change\x20Settings')
            continue;
          else
            console['log']('\x20(' + _0x4e5783 + ')\x20[' + modules[_0x4e5783]['name'] + ']');
        }
        ;
        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (modules['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (modules['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
        if (modules[taskModule]['name'] == 'AFEW\x20Store') {
          taskFunction = await getFunction(modules[taskModule]['modules']);
          var _0x3c44fe = modules[taskModule]['modules'][taskFunction];
          console['clear'](), await afewScraper(), await getAfewProduct();
          var _0x1d028d = await getTaskFile();
          return await afewFunction(afewProducts[afewProduct], 'nor', _0x3c44fe, _0x1d028d), _0x255575();
        } else {
          if (modules[taskModule]['name'] == 'MAHA\x20Amsterdam') {
            taskFunction = await getFunction(modules[taskModule]['modules']);
            var _0x3c44fe = modules[taskModule]['modules'][taskFunction];
            if (taskFunction == 0x0) {
              var _0x5cd098 = await getTaskFile();
              console['log']('Starting\x20' + _0x5cd098['length'] + '\x20MAHA\x20Tasks');
              for (var _0x1d4eb1 = 0x0; _0x1d4eb1 < _0x5cd098['length']; _0x1d4eb1++) {
                console['log'](getTime() + '\x20[' + _0x3c44fe['name'] + ']\x20Task\x20' + (_0x1d4eb1 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x1d4eb1, 'nor', _0x3c44fe, _0x5cd098), console['log'](getTime() + '\x20[' + _0x3c44fe['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
              ;
              return _0x255575();
            } else {
              if (taskFunction == 0x1) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x1d4eb1 = 0x0; _0x1d4eb1 < links['length']; _0x1d4eb1++) {
                  _0x3c44fe['url'] = links[_0x1d4eb1], console['log'](getTime() + '\x20[' + _0x3c44fe['name'] + ']\x20Task\x20' + (_0x1d4eb1 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x1d4eb1, 'ver', _0x3c44fe), console['log'](getTime() + '\x20[' + _0x3c44fe['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
                ;
                return _0x255575();
              }
            }
          } else {
            if (modules[taskModule]['name'] == 'FOOTSHOP') {
              var _0x4f44e0 = await getTaskFile();
              return console['log'](_0x4f44e0), await footshopModule(_0x4f44e0), await delay(0x1388), _0x255575();
            } else {
              if (modules[taskModule]['name'] == 'OQIUM\x20Store') {
                taskFunction = await getFunction(modules[taskModule]['modules']);
                var _0x3c44fe = modules[taskModule]['modules'][taskFunction];
                console['clear']();
                if (taskFunction == 0x0) {
                  var _0x111103 = await getTaskFile();
                  console['log']('Starting\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                  for (var _0x1d4eb1 = 0x0; _0x1d4eb1 < _0x111103['length']; _0x1d4eb1++) {
                    console['log'](getTime() + '\x20[' + _0x3c44fe['name'] + ']\x20Task\x20' + (_0x1d4eb1 + 0x1) + ':\x20Getting\x20Session');
                    try {
                      await oqiumFunction(_0x1d4eb1, 'exp', _0x3c44fe, _0x111103);
                    } catch {
                      console['log'](chalk['red'](getTime() + '\x20[' + _0x3c44fe['name'] + ']\x20Task\x20' + (_0x1d4eb1 + 0x1) + ':\x20Task\x20failed'));
                    }
                    console['log'](getTime() + '\x20[' + _0x3c44fe['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                  }
                } else {
                  if (taskFunction == 0x1) {
                    console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                    for (var _0x1d4eb1 = 0x0; _0x1d4eb1 < links['length']; _0x1d4eb1++) {
                      try {
                        modules[taskModule]['url'] = links[_0x1d4eb1], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1d4eb1 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x1d4eb1, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                      } catch (_0x55a8d9) {
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
                  var _0x3c44fe = modules[taskModule]['modules'][taskFunction];
                  console['clear']();
                  if (taskFunction == 0x0)
                    await bwAcc('https://bouncewear.com/nl/account/register', _0x3c44fe);
                  else {
                    if (taskFunction == 0x1) {
                    }
                  }
                  ;
                } else {
                  if (modules[taskModule]['name'] == 'PATTA') {
                    taskFunction = await getFunction(modules[taskModule]['modules']);
                    var _0x3c44fe = modules[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x0) {
                      var _0x376948 = await getTaskFile();
                      await pattaAcc('https://patta.nl/account/register', _0x3c44fe, _0x376948);
                    } else {
                      if (taskFunction == 0x1) {
                        var _0x376948 = await getTaskFile();
                        await pattaFunction('', _0x3c44fe);
                      }
                    }
                    ;
                  } else {
                    if (modules[taskModule]['name'] == 'Change\x20Settings') {
                      console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                      var _0x305eac = 0x0;
                      for (const _0x5413b7 in settings) {
                        console['log']('(' + _0x305eac + ')\x20' + _0x5413b7 + '\x20:\x20' + settings[_0x5413b7]), _0x305eac++;
                      }
                      console['log']('');
                      var _0x4e1905 = await getSetting();
                      console['clear'];
                      var _0x2319cd = 0x0;
                      for (var _0x4088d6 in settings) {
                        if (_0x4e1905 == _0x2319cd) {
                          console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x4088d6 + '\x20:'), settings[_0x4088d6] = await getValue(), fs['writeFileSync']('../settings.json', JSON['stringify'](settings));
                          break;
                        } else
                          _0x2319cd++;
                      }
                      return console['log']('Settings\x20Saved!'), await delay(0xbb8), _0x255575();
                    } else {
                      if (modules[taskModule]['name'] == 'Reload\x20Settings')
                        return console['log']('Reloading\x20settings'), await loadSettings(), _0x255575();
                      else {
                        if (taskModule == 0x45) {
                          modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                          var _0x399c0a = await getPassword();
                          _0x399c0a == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
      await _0x255575();
    } catch (_0x32893e) {
      return console['log'](_0x32893e), await delay(0x3a98);
    }
}
;
setTitle('JRaffles\x20' + version), loadSettings(), main();