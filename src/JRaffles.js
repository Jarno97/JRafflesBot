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
  const _0x81adc5 = fs['readFileSync']('../tasks/afew.csv', 'utf8');
  afew = Papa['parse'](_0x81adc5, { 'header': !![] })['data'];
  const _0x16e345 = fs['readFileSync']('../tasks/maha.csv', 'utf-8');
  maha = Papa['parse'](_0x16e345, { 'header': !![] })['data'];
  const _0x4658c4 = fs['readFileSync']('../tasks/footshop.csv', 'utf-8');
  footshop = Papa['parse'](_0x4658c4, { 'header': !![] })['data'];
  const _0x19400d = fs['readFileSync']('../tasks/bstn.csv', 'utf-8');
  bstn = Papa['parse'](_0x19400d, { 'header': !![] })['data'];
  const _0x216f7a = fs['readFileSync']('../tasks/kickz.csv', 'utf-8');
  kickz = Papa['parse'](_0x216f7a, { 'header': !![] })['data'];
  const _0x15b1e3 = fs['readFileSync']('../tasks/oqium.csv', 'utf-8');
  oqium = Papa['parse'](_0x15b1e3, { 'header': !![] })['data'];
  const _0x790d19 = fs['readFileSync']('../tasks/patta.csv', 'utf-8');
  patta = Papa['parse'](_0x790d19, { 'header': !![] })['data'], settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), !settings['delay'] && (settings['delay'] = 0x2710, fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['captchaKey'] && (settings['captchaKey'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x2eaa19 => new Promise(_0x55c187 => setTimeout(_0x55c187, _0x2eaa19));
async function getLicense(_0x461d40) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x461d40, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x2039e9 => _0x2039e9['data'])['catch'](() => null);
}
;
async function checkLicense(_0x120453) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x43afef = await getLicense(_0x120453);
  username = JSON['stringify'](_0x43afef['user']['username']);
  if (!_0x43afef)
    return console['log']('License\x20not\x20found');
  if (!_0x43afef['user'])
    return console['log']('License\x20not\x20bound');
  return _0x43afef['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x5d374e = await prompt['get']('Module');
  return console['clear'](), _0x5d374e['Module'];
}
;
async function getSetting() {
  var _0x1a3b28 = await prompt['get']('Setting');
  return console['clear'](), _0x1a3b28['Setting'];
}
async function getValue() {
  var _0x9ed89a = await prompt['get']('Value');
  return console['clear'](), _0x9ed89a['Value'];
}
async function getFunction(_0x53e2b2) {
  console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
  for (var _0x5b9cc8 = 0x0; _0x5b9cc8 < _0x53e2b2['length']; _0x5b9cc8++) {
    console['log']('\x20(' + _0x5b9cc8 + ')\x20[' + _0x53e2b2[_0x5b9cc8]['name'] + ']');
  }
  ;
  var _0x200432 = await prompt['get']('Module');
  return _0x200432['Module'];
}
async function getPassword() {
  var _0x4247f5 = await prompt['get']('Password');
  return console['clear'](), _0x4247f5['Password'];
}
;
async function getLinks() {
  var _0x253187 = await prompt['get']('Links');
  return _0x253187['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x319d1b = 0x0; _0x319d1b < afewProducts['length']; _0x319d1b++) {
    console['log']('\x20(' + _0x319d1b + ')\x20' + afewProducts[_0x319d1b]);
  }
  ;
  console['log']();
  let _0x4c291c = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x4c291c['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x35ed63 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x35ed63;
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
  }
];
async function sendWebhook(_0x4d0104, _0x4c17b1) {
  let _0x3e06ec = { 'headers': { 'content-type': 'application/json' } };
  await axios['post'](_0x4d0104, _0x4c17b1, _0x3e06ec);
}
;
async function jig(_0x45f5e4, _0x35985d) {
  var _0x510c26 = _0x45f5e4[_0x35985d]['Address1']['split'](''), _0x139ade = _0x45f5e4[_0x35985d]['Address2']['split'](''), _0x468c47 = _0x45f5e4[_0x35985d]['Email']['split']('@');
  for (var _0x5bd9d1 = 0x0; _0x5bd9d1 < _0x510c26['length']; _0x5bd9d1++) {
    if (_0x510c26[_0x5bd9d1] == 'X') {
      var _0x20d42d = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x510c26[_0x5bd9d1] = lettersArray[_0x20d42d];
    }
  }
  ;
  for (var _0x5bd9d1 = 0x0; _0x5bd9d1 < _0x139ade['length']; _0x5bd9d1++) {
    if (_0x139ade[_0x5bd9d1] == 'X') {
      var _0x20d42d = Math['round'](Math['random']() * (letters['length'] - 0x1));
      _0x139ade[_0x5bd9d1] = lettersArray[_0x20d42d];
    }
  }
  ;
  _0x45f5e4[_0x35985d]['FirstName'] == 'RANDOM' && (_0x45f5e4[_0x35985d]['FirstName'] = random['first']());
  _0x45f5e4[_0x35985d]['LastName'] == 'RANDOM' && (_0x45f5e4[_0x35985d]['LastName'] = random['last']());
  _0x468c47[0x0] == 'RANDOM' ? _0x468c47[0x0] = '' + random['first']() + random['last']() + '@' : _0x468c47[0x0] = _0x468c47[0x0] + '@';
  _0x45f5e4[_0x35985d]['Email'] = _0x468c47['join'](''), _0x45f5e4[_0x35985d]['Address1'] = _0x510c26['join'](''), _0x45f5e4[_0x35985d]['Address2'] = _0x139ade['join']('');
  return;
}
;
function getProxy() {
  let _0x3501f1 = proxyFile['split']('\x0a'), _0x3635a5 = _0x3501f1['map']((_0x1c256f, _0x52840b) => {
    sanatizeProxy = _0x1c256f['replace']('\x0d', '');
    if (_0x3501f1[_0x52840b + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x3635a5;
}
;
async function afewScraper() {
  var _0x2c7072 = getProxy()[0x1]['split'](':');
  const _0x4ff332 = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x2c7072[0x0] + ':' + _0x2c7072[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x436934 = await _0x4ff332['newPage']();
    await _0x436934['authenticate']({
      'username': '' + _0x2c7072[0x2],
      'password': '' + _0x2c7072[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x436934['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x436934['setRequestInterception'](!![]), _0x436934['on']('request', _0x35fe83 => {
      _0x35fe83['resourceType']() === 'image' || _0x35fe83['resourceType']() === 'font' || _0x35fe83['resourceType']() === 'media' ? _0x35fe83['abort']() : _0x35fe83['continue']();
    }), await _0x436934['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x436934['waitForTimeout'](0xbb8), await _0x436934['waitForSelector']('.product-card');
    const _0x1c63b8 = await _0x436934['$$eval']('a.product-card', _0x1cc70a => {
      return _0x1cc70a['map'](_0x2cc9b8 => _0x2cc9b8['href']);
    });
    return afewProducts = _0x1c63b8;
  } catch (_0x1463e3) {
    console['log']('\x20' + _0x1463e3);
  } finally {
    _0x4ff332['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x2fb37c, _0x51742a, _0x27f639) {
  await jig(maha, _0x2fb37c);
  var _0x16f0da = [{
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
        'value': '' + oqium[_0x2fb37c]['Size']
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
  const _0xe71d31 = { 'embeds': _0x16f0da };
  var _0x4dadaf = getProxy()[_0x2fb37c]['split'](':'), _0x5a08ab = _0x27f639['data'];
  _0x51742a == 'exp' ? _0x5a08ab['data']['attributes']['email'] = '' + maha[_0x2fb37c]['FirstName'] + maha[_0x2fb37c]['LastName'] + settings['catchall'] : _0x5a08ab['data']['attributes']['email'] = '' + maha[_0x2fb37c]['Email'];
  _0x5a08ab['data']['attributes']['properties']['$first_name'] = '' + maha[_0x2fb37c]['FirstName'], _0x5a08ab['data']['attributes']['properties']['$last_name'] = '' + maha[_0x2fb37c]['LastName'], _0x5a08ab['data']['attributes']['properties']['$address1'] = maha[_0x2fb37c]['Address1'] + '\x20' + maha[_0x2fb37c]['Address2'], _0x5a08ab['data']['attributes']['properties']['$zip'] = '' + maha[_0x2fb37c]['Zip'], _0x5a08ab['data']['attributes']['properties']['$city'] = '' + maha[_0x2fb37c]['City'], _0x5a08ab['data']['attributes']['properties']['$country'] = '' + maha[_0x2fb37c]['Country'], _0x5a08ab['data']['attributes']['properties']['Size'] = '' + maha[_0x2fb37c]['Size'], _0x5a08ab['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x2fb37c]['Follower'];
  var _0x2389c4 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x27f639['url'],
    'headers': _0x27f639['headers'],
    'body': JSON['stringify'](_0x5a08ab),
    'proxy': 'http://' + _0x4dadaf[0x2] + ':' + _0x4dadaf[0x3] + '@' + _0x4dadaf[0x0] + ':' + _0x4dadaf[0x1]
  };
  return _0x51742a === 'ver' && (_0x2389c4['method'] = 'GET'), new Promise(function (_0x265a80, _0xe215fe) {
    callback = async (_0x224e16, _0x4fb8bc, _0x285eeb) => {
      !_0x224e16 && _0x4fb8bc['statusCode'] == 0xca || !_0x224e16 && _0x4fb8bc['statusCode'] == 0xc8 ? _0x265a80(console['log'](chalk['green'](getTime() + '\x20[' + _0x27f639['name'] + ']\x20Task\x20' + (_0x2fb37c + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x16f0da[0x0]['title'] = 'Failed\x20entry', _0x16f0da[0x0]['description'] = '' + _0x224e16, await sendWebhook(errorWH, _0xe71d31), _0xe215fe(console['log'](getTime() + '\x20[' + _0x27f639['name'] + ']\x20Task\x20' + (_0x2fb37c + 0x1) + ':\x20' + _0x224e16)));
    };
    try {
      _0x51742a === 'ver' ? console['log'](getTime() + '\x20[' + _0x27f639['name'] + ']\x20Task\x20' + (_0x2fb37c + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + _0x27f639['name'] + ']\x20Task\x20' + (_0x2fb37c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5a08ab['data']['attributes']['email']), request(_0x2389c4, callback);
    } catch (_0x4c21e6) {
      console['log'](getTime() + '\x20Task\x20' + (_0x2fb37c + 0x1) + ':\x20' + _0x4c21e6);
    }
  });
}
;
async function footshopModule() {
  var _0xb9be3c;
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x2b7c01 = 0x0; _0x2b7c01 < footshop['length']; _0x2b7c01++) {
    await jig(footshop, _0x2b7c01);
    if (footshop[_0x2b7c01]['Email'] == '' || footshop[_0x2b7c01]['FirstName'] == '' || footshop[_0x2b7c01]['LastName'] == '' || footshop[_0x2b7c01]['Country'] == '' || footshop[_0x2b7c01]['Size'] == '' || footshop[_0x2b7c01]['Address1'] == '' || footshop[_0x2b7c01]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    async function _0x24db28() {
      var _0x58be8c = await axios['get']('https://releases.footshop.com/api/raffles/' + footshop[_0x2b7c01]['Pid'])['then'](_0x1995bf => _0x1995bf['data'])['catch'](() => null), _0x3ca4b0 = _0x58be8c['sizeSets']['Men']['sizes'];
      _0x3ca4b0['length'] == 0x0 && (_0x3ca4b0 = _0x58be8c['sizeSets']['Women']['sizes'], _0x3ca4b0['length'] == 0x0 && (_0x3ca4b0 = _0x58be8c['sizeSets']['Unisex']['sizes'], _0x3ca4b0['length'] == 0x0 && (_0x3ca4b0 = _0x58be8c['sizeSets']['Kids']['sizes'])));
      ;
      async function _0x56da5d() {
        for (var _0x479f14 = 0x0; _0x479f14 < _0x3ca4b0['length']; _0x479f14++) {
          if (_0x3ca4b0[_0x479f14]['eur'] == footshop[_0x2b7c01]['Size'])
            return _0xb9be3c = _0x3ca4b0[_0x479f14]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x20Size\x20' + footshop[_0x2b7c01]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x1686e5 = await _0x56da5d();
      if (_0x1686e5 == ![])
        return ![];
    }
    let _0x3dab45 = await _0x24db28();
    if (_0x3dab45 == ![])
      continue;
    if (footshop[_0x2b7c01]['Email'] == '' || footshop[_0x2b7c01]['FirstName'] == '' || footshop[_0x2b7c01]['LastName'] == '' || footshop[_0x2b7c01]['Country'] == '' || footshop[_0x2b7c01]['Size'] == '' || footshop[_0x2b7c01]['Address1'] == '' || footshop[_0x2b7c01]['Zip'] == '' || footshop[_0x2b7c01]['Phone'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x3e7b53 = 'https://releases.footshop.com/register/' + footshop[_0x2b7c01]['Pid'] + '/Men/' + _0xb9be3c;
    var _0x5b5be5 = getProxy()[_0x2b7c01]['split'](':');
    const _0x2f73a1 = await puppeteer['launch']({
      'headless': ![],
      'args': ['--proxy-server=' + _0x5b5be5[0x0] + ':' + _0x5b5be5[0x1]]
    });
    try {
      const _0x5b9e82 = await _0x2f73a1['newPage']();
      await _0x5b9e82['authenticate']({
        'username': '' + _0x5b5be5[0x2],
        'password': '' + _0x5b5be5[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5b9e82['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5b9e82['setRequestInterception'](!![]), _0x5b9e82['on']('request', _0x46c8ab => {
        _0x46c8ab['resourceType']() === 'image' || _0x46c8ab['resourceType']() === 'font' || _0x46c8ab['resourceType']() === 'media' ? _0x46c8ab['abort']() : _0x46c8ab['continue']();
      }), await _0x5b9e82['goto']('' + _0x3e7b53 + _0xb9be3c), await _0x5b9e82['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5b9e82['type']('input[name=\x22email\x22]', '' + footshop[_0x2b7c01]['Email']), await delay(0x640), await _0x5b9e82['type']('input[name=\x22phone\x22]', '' + footshop[_0x2b7c01]['Phone']), await delay(0x4b0), await _0x5b9e82['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
      try {
        await _0x5b9e82['type']('input[name=\x22firstName\x22]', '' + footshop[_0x2b7c01]['FirstName']), await delay(0x258);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
        continue;
      }
      await _0x5b9e82['type']('input[name=\x22lastName\x22]', '' + footshop[_0x2b7c01]['LastName']), await delay(0xc8), await _0x5b9e82['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x2b7c01]['Follower']), await delay(0x4b0), await _0x5b9e82['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5b9e82['select']('select[name=\x22country\x22]', '' + footshop[_0x2b7c01]['Country']), await delay(0x2bc), await _0x5b9e82['type']('input[name=\x22streetName\x22]', '' + footshop[_0x2b7c01]['Address1']), await delay(0x258), await _0x5b9e82['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x2b7c01]['HouseNumber'] + footshop[_0x2b7c01]['Address2']), await delay(0xc8), await _0x5b9e82['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x2b7c01]['Zip']), await delay(0x1f4), await _0x5b9e82['type']('input[name=\x22city\x22]', '' + footshop[_0x2b7c01]['City']), await delay(0x4b0), await _0x5b9e82['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x5b9e82['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5b9e82['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x5b9e82['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5b9e82['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5b9e82['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x4b0), await _0x5b9e82['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x2b7c01]['CardNumber']), await delay(0x320), await _0x5b9e82['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x2b7c01]['ExpiryDate']), await delay(0x4b0), await _0x5b9e82['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x2b7c01]['CVV']), await delay(0x226), await _0x5b9e82['type']('input[name=\x22holderName\x22]', '' + footshop[_0x2b7c01]['NameOnCard']), await delay(0x226), await _0x5b9e82['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x20Awaiting\x203DS');
      try {
        await _0x5b9e82['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await delay(0xbb8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x203DS\x20Failed'));
      }
    } catch (_0x159739) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7c01 + 0x1) + '\x20:\x20' + _0x159739);
    } finally {
      _0x2f73a1['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x4751b0, _0x3aaade, _0x3c91aa) => {
  for (var _0x16873e = 0x0; _0x16873e < afew['length']; _0x16873e++) {
    await jig(afew, _0x16873e);
    var _0x3ba788 = [{
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
          'value': '' + _0x4751b0
        },
        {
          'name': 'Size',
          'value': '' + afew[_0x16873e]['Size']
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
    const _0x31fa11 = { 'embeds': _0x3ba788 };
    if (afew[_0x16873e]['Email'] == '' || afew[_0x16873e]['FirstName'] == '' || afew[_0x16873e]['LastName'] == '' || afew[_0x16873e]['Country'] == '' || afew[_0x16873e]['Size'] == '' || afew[_0x16873e]['Address1'] == '' || afew[_0x16873e]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + _0x3c91aa['name'] + ']\x20Task\x20' + (_0x16873e + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x4c8b57 = getProxy()[_0x16873e]['split'](':');
    const _0x1b69e8 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x4c8b57[0x0] + ':' + _0x4c8b57[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x541edb = await _0x1b69e8['newPage']();
      await _0x541edb['setDefaultNavigationTimeout'](0x1d4c0), await _0x541edb['authenticate']({
        'username': '' + _0x4c8b57[0x2],
        'password': '' + _0x4c8b57[0x3]
      }), console['log'](getTime() + '\x20[' + _0x3c91aa['name'] + ']\x20Task\x20' + (_0x16873e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x541edb['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x541edb['setRequestInterception'](!![]), _0x541edb['on']('request', _0x555b4c => {
        _0x555b4c['resourceType']() === 'image' || _0x555b4c['resourceType']() === 'font' || _0x555b4c['resourceType']() === 'media' ? _0x555b4c['abort']() : _0x555b4c['continue']();
      }), await _0x541edb['goto'](_0x4751b0), console['log'](getTime() + '\x20[' + _0x3c91aa['name'] + ']\x20Task\x20' + (_0x16873e + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x541edb['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + _0x3c91aa['name'] + ']\x20Task\x20' + (_0x16873e + 0x1) + '\x20:\x20Cookies\x20received'), await _0x541edb['waitForTimeout'](0x320);
      if (afew[_0x16873e]['Size'] == 'RANDOM') {
        console['log'](getTime() + '\x20[' + _0x3c91aa['name'] + ']\x20Task\x20' + (_0x16873e + 0x1) + '\x20:\x20Choosing\x20random\x20size');
        const _0x13a0a7 = await _0x541edb['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x58ed26 => {
          return _0x58ed26['map'](_0x371785 => _0x371785['href']);
        });
        var _0x309fd0 = Math['round'](Math['random']() * (_0x13a0a7['length'] - 0x1));
        await _0x541edb['goto']('' + _0x13a0a7[_0x309fd0]);
      } else {
        console['log'](getTime() + '\x20[' + _0x3c91aa['name'] + ']\x20Task\x20' + (_0x16873e + 0x1) + '\x20:\x20Choosing\x20Size\x20' + afew[_0x16873e]['Size']), await _0x541edb['hover']('.release-type');
        try {
          await _0x541edb['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x16873e]['Size'] + '\x22]'), await _0x541edb['waitForTimeout'](0x320), await _0x541edb['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x16873e]['Size'] + '\x22]');
        } catch (_0x3728b6) {
          console['log'](chalk['red'](getTime() + '\x20[' + _0x3c91aa['name'] + ']\x20Task\x20' + (_0x16873e + 0x1) + '\x20:\x20' + _0x3728b6 + '\x20Size\x20not\x20found')), _0x3ba788[0x0]['title'] = 'Failed\x20entry', _0x3ba788[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x31fa11);
          continue;
        }
      }
      await _0x541edb['waitForTimeout'](0x258), await _0x541edb['type']('#raffle-instagram', '' + afew[_0x16873e]['Follower'], { 'delay': 0x64 }), await _0x541edb['waitForTimeout'](0x384), await _0x541edb['click']('#raffle-terms'), await _0x541edb['waitForTimeout'](0x384), await _0x541edb['evaluate'](() => {
        const _0x3e2a9b = document['querySelector']('button.btn[name=\x27add\x27]');
        _0x3e2a9b['click']();
      }), await _0x541edb['waitForTimeout'](0xbb8), await _0x541edb['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + _0x3c91aa['name'] + ']\x20Task\x20' + (_0x16873e + 0x1) + '\x20:\x20Filling\x20Information');
      _0x3aaade == 'sec' ? await _0x541edb['type']('#checkout_email', '' + afew[_0x16873e]['FirstName'] + afew[_0x16873e]['LastName'] + settings['catchall']) : await _0x541edb['type']('#checkout_email', '' + afew[_0x16873e]['Email']);
      await _0x541edb['waitForTimeout'](0x258), await _0x541edb['select']('#checkout_shipping_address_country', '' + afew[_0x16873e]['Country']), await _0x541edb['waitForTimeout'](0x258), await _0x541edb['type']('#checkout_shipping_address_first_name', '' + afew[_0x16873e]['FirstName']), await _0x541edb['waitForTimeout'](0x320), await _0x541edb['type']('#checkout_shipping_address_last_name', '' + afew[_0x16873e]['LastName']), await _0x541edb['waitForTimeout'](0x2bc), await _0x541edb['type']('#checkout_shipping_address_address1', '' + afew[_0x16873e]['Address1']), await _0x541edb['waitForTimeout'](0x2bc), await _0x541edb['type']('#checkout_shipping_address_address2', '' + afew[_0x16873e]['Address2']), await _0x541edb['waitForTimeout'](0x2bc), await _0x541edb['type']('#checkout_shipping_address_zip', '' + afew[_0x16873e]['Postcode']), await _0x541edb['waitForTimeout'](0x2bc), await _0x541edb['type']('#checkout_shipping_address_city', '' + afew[_0x16873e]['City']), await _0x541edb['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + _0x3c91aa['name'] + ']\x20Task\x20' + (_0x16873e + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x541edb['evaluate'](() => {
        const _0x162749 = document['querySelector']('#continue_button');
        _0x162749 && _0x162749['click']();
      }), await _0x541edb['waitForTimeout'](0x1194), await _0x541edb['waitForSelector']('div.radio-wrapper'), await _0x541edb['evaluate'](() => {
        const _0x39c25a = document['querySelector']('#continue_button');
        _0x39c25a && _0x39c25a['click']();
      }), await _0x541edb['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + _0x3c91aa['name'] + ']\x20Task\x20' + (_0x16873e + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x541edb['waitForSelector']('#continue_button'), await _0x541edb['evaluate'](() => {
        const _0x460a43 = document['querySelector']('#continue_button');
        _0x460a43 && _0x460a43['click']();
      }), await _0x541edb['waitForTimeout'](0x1194), await _0x541edb['waitForSelector']('#continue_button'), await _0x541edb['evaluate'](() => {
        const _0x7beb82 = document['querySelector']('#continue_button');
        _0x7beb82 && _0x7beb82['click']();
      });
      try {
        await _0x541edb['waitForSelector']('div[data-step=\x22thank_you\x22]');
      } catch (_0x5ebd35) {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x3c91aa['name'] + ']\x20Task\x20' + (_0x16873e + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x5ebd35));
      }
      console['log'](chalk['green'](getTime() + '\x20[' + _0x3c91aa['name'] + ']\x20Task\x20' + (_0x16873e + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x31fa11);
    } catch (_0x53c448) {
      console['log'](chalk['red'](getTime() + '\x20[' + _0x3c91aa['name'] + ']\x20Task\x20' + (_0x16873e + 0x1) + '\x20:\x20' + _0x53c448)), _0x3ba788[0x0]['title'] = 'Failed\x20entry', _0x3ba788[0x0]['description'] = '' + _0x53c448, await sendWebhook(errorWH, _0x31fa11);
    } finally {
      _0x1b69e8 && _0x1b69e8['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function kickzAcc(_0x401e52) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0xa3f9c0 = 0x0; _0xa3f9c0 < kickz['length']; _0xa3f9c0++) {
    await jig(kickz, _0xa3f9c0);
    if (kickz[_0xa3f9c0]['Email'] == '' || kickz[_0xa3f9c0]['Password'] == '' || kickz[_0xa3f9c0]['FirstName'] == '' || kickz[_0xa3f9c0]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x32db69 = getProxy()[_0xa3f9c0]['split'](':');
    const _0x29c203 = await puppeteer['launch']({
      'headless': ![],
      'args': [
        '--proxy-server=' + _0x32db69[0x0] + ':' + _0x32db69[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x13d24f = await _0x29c203['newPage']();
      await _0x13d24f['authenticate']({
        'username': '' + _0x32db69[0x2],
        'password': '' + _0x32db69[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x13d24f['setRequestInterception'](!![]), _0x13d24f['on']('request', _0x2812ad => {
        _0x2812ad['resourceType']() === 'image' || _0x2812ad['resourceType']() === 'font' || _0x2812ad['resourceType']() === 'media' ? _0x2812ad['abort']() : _0x2812ad['continue']();
      }), await _0x13d24f['goto'](_0x401e52), await delay(0xbb8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x13d24f['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x13d24f['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x13d24f['waitForSelector']('#button-register'), await _0x13d24f['click']('#button-register'), await _0x13d24f['waitForSelector']('#customer_salutation'), await _0x13d24f['select']('#customer_salutation', 'mr'), await delay(0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x13d24f['waitForSelector']('#customer_firstname'), await _0x13d24f['type']('#customer_firstname', '' + kickz[_0xa3f9c0]['FirstName']), await delay(0x352), await _0x13d24f['waitForSelector']('#customer_lastname'), await _0x13d24f['type']('#customer_lastname', '' + kickz[_0xa3f9c0]['LastName']), await delay(0x352), await _0x13d24f['type']('#email-input', '' + kickz[_0xa3f9c0]['Email']), await delay(0x352), await _0x13d24f['type']('#email-confirm-input', '' + kickz[_0xa3f9c0]['Email']), await delay(0x352), await _0x13d24f['type']('#register-password', '' + kickz[_0xa3f9c0]['Password']), await delay(0x352), await _0x13d24f['type']('#password-confirm', '' + kickz[_0xa3f9c0]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x13d24f['click']('#consent'), await delay(0x1f4);
      const _0x6c350d = await _0x13d24f['$']('div.inputErrorMsg.b-form_section-message');
      if (_0x6c350d) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
        continue;
      }
      await _0x13d24f['click']('#buttonRegister'), await _0x13d24f['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20Account\x20' + kickz[_0xa3f9c0]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
      async function _0x30a4ea() {
        console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
        var _0x5c6031 = await prompt['get']('Code');
        return _0x5c6031['Code'];
      }
      ;
      code = await _0x30a4ea(), delay(0x320), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20Verifying..'), await _0x13d24f['type']('#verificationCode', code), await delay(0x1f4), await _0x13d24f['click']('#buttonVerify'), await delay(0x190), await _0x13d24f['click']('#buttonVerify'), await delay(0x3e8);
      try {
        await _0x13d24f['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20Account\x20' + kickz[_0xa3f9c0]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + kickz[_0xa3f9c0]['Email'] + ',' + kickz[_0xa3f9c0]['Password'] + ','), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20Account\x20' + kickz[_0xa3f9c0]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
      }
    } catch (_0x4ba7ae) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xa3f9c0 + 0x1) + '\x20:\x20' + _0x4ba7ae));
    } finally {
      _0x29c203 && _0x29c203['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
}
async function bwAcc(_0x2b4488, _0x3f0894) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x9b00 = 0x0; _0x9b00 < bouncewear['length']; _0x9b00++) {
    await jig(bouncewear, _0x9b00);
    if (bouncewear[_0x9b00]['Email'] == '' || bouncewear[_0x9b00]['Password'] == '' || bouncewear[_0x9b00]['FirstName'] == '' || bouncewear[_0x9b00]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x9b00 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x49b2de = getProxy()[_0x9b00]['split'](':');
    const _0x19e7be = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x49b2de[0x0] + ':' + _0x49b2de[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x1755b3 = await _0x19e7be['newPage']();
      await _0x1755b3['authenticate']({
        'username': '' + _0x49b2de[0x2],
        'password': '' + _0x49b2de[0x3]
      }), console['log'](getTime() + '\x20[' + _0x3f0894['name'] + ']\x20Task\x20' + (_0x9b00 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1755b3['setRequestInterception'](!![]), _0x1755b3['on']('request', _0x5cc9a4 => {
        _0x5cc9a4['resourceType']() === 'image' || _0x5cc9a4['resourceType']() === 'font' || _0x5cc9a4['resourceType']() === 'media' ? _0x5cc9a4['abort']() : _0x5cc9a4['continue']();
      }), await _0x1755b3['goto'](_0x2b4488), await delay(0xbb8), await _0x1755b3['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x3f0894['name'] + ']\x20Task\x20' + (_0x9b00 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1755b3['type']('#RegisterForm-FirstName', '' + bouncewear[_0x9b00]['FirstName']), await delay(0x226), await _0x1755b3['type']('#RegisterForm-LastName', '' + bouncewear[_0x9b00]['LastName']), await delay(0x226), await _0x1755b3['type']('#RegisterForm-email', '' + bouncewear[_0x9b00]['Email']), await delay(0x226), await _0x1755b3['type']('#RegisterForm-password', '' + bouncewear[_0x9b00]['Password']), await delay(0x226), await _0x1755b3['click']('#marketing'), console['log'](getTime() + '\x20[' + _0x3f0894['name'] + ']\x20Task\x20' + (_0x9b00 + 0x1) + '\x20:\x20Submitting..'), await _0x1755b3['$eval']('#RegisterForm', _0x12adca => _0x12adca['submit']()), await delay(0x1f40), console['log'](getTime() + '\x20[' + _0x3f0894['name'] + ']\x20Task\x20' + (_0x9b00 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x1755b3['solveRecaptchas'](), await _0x1755b3['click']('.shopify-challenge__button.btn');
      async function _0x528f34() {
        for (var _0x47c01f = 0x0; _0x47c01f < 0x4; _0x47c01f++) {
          try {
            console['log']('try'), await _0x1755b3['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](getTime() + '\x20[' + _0x3f0894['name'] + ']\x20Task\x20' + (_0x9b00 + 0x1) + '\x20:\x20' + chalk['red']('Catpcha\x20failed,\x20retrying..')), await _0x1755b3['solveRecaptchas'](), await _0x1755b3['click']('.shopify-challenge__button.btn');
          } catch {
            console['log']('catch');
            break;
          }
        }
      }
      await _0x528f34(), console['log'](getTime() + '\x20[' + _0x3f0894['name'] + ']\x20Task\x20' + (_0x9b00 + 0x1) + '\x20:\x20Captcha\x20Solved'), await delay(0x1f4);
      try {
        await _0x1755b3['waitForSelector']('.featured-title'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x3f0894['name'] + ']\x20Task\x20' + (_0x9b00 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x9b00]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x9b00]['Email'] + ',' + bouncewear[_0x9b00]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x3f0894['name'] + ']\x20Task\x20' + (_0x9b00 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x9b00]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
      } catch (_0xff4ed) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x9b00 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xff4ed));
      }
    } catch (_0x3c944f) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x9b00 + 0x1) + '\x20:\x20' + _0x3c944f));
    } finally {
      _0x19e7be && _0x19e7be['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function pattaAcc(_0x4a0fe0, _0x3b74aa) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x35d810 = 0x0; _0x35d810 < patta['length']; _0x35d810++) {
    await jig(patta, _0x35d810);
    if (patta[_0x35d810]['Email'] == '' || patta[_0x35d810]['Password'] == '' || patta[_0x35d810]['FirstName'] == '' || patta[_0x35d810]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x35d810 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x37de26 = getProxy()[_0x35d810]['split'](':');
    const _0x5ececb = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x37de26[0x0] + ':' + _0x37de26[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0xe6e9fb = await _0x5ececb['newPage']();
      await _0xe6e9fb['authenticate']({
        'username': '' + _0x37de26[0x2],
        'password': '' + _0x37de26[0x3]
      }), console['log'](getTime() + '\x20[' + _0x3b74aa['name'] + ']\x20Task\x20' + (_0x35d810 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xe6e9fb['setRequestInterception'](!![]), _0xe6e9fb['on']('request', _0x20a0d4 => {
        _0x20a0d4['resourceType']() === 'image' || _0x20a0d4['resourceType']() === 'font' || _0x20a0d4['resourceType']() === 'media' ? _0x20a0d4['abort']() : _0x20a0d4['continue']();
      }), await _0xe6e9fb['goto'](_0x4a0fe0), await delay(0xbb8), await _0xe6e9fb['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x3b74aa['name'] + ']\x20Task\x20' + (_0x35d810 + 0x1) + '\x20:\x20Filling\x20information'), await _0xe6e9fb['type']('#RegisterForm-FirstName', '' + patta[_0x35d810]['FirstName']), await delay(0x226), await _0xe6e9fb['type']('#RegisterForm-LastName', '' + patta[_0x35d810]['LastName']), await delay(0x226), await _0xe6e9fb['type']('#RegisterForm-email', '' + patta[_0x35d810]['Email']), await delay(0x226), await _0xe6e9fb['type']('#RegisterForm-password', '' + patta[_0x35d810]['Password']), await delay(0x226), console['log'](getTime() + '\x20[' + _0x3b74aa['name'] + ']\x20Task\x20' + (_0x35d810 + 0x1) + '\x20:\x20Submitting..'), await _0xe6e9fb['$eval']('#RegisterForm', _0xfcbc3d => _0xfcbc3d['submit']()), await delay(0x1f40);
      try {
        await _0xe6e9fb['waitForSelector']('.home-page-grid__collection'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x3b74aa['name'] + ']\x20Task\x20' + (_0x35d810 + 0x1) + '\x20:\x20Account\x20' + patta[_0x35d810]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/patta.csv', '\x0a' + patta[_0x35d810]['Email'] + ',' + patta[_0x35d810]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x3b74aa['name'] + ']\x20Task\x20' + (_0x35d810 + 0x1) + '\x20:\x20Account\x20' + patta[_0x35d810]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
      } catch (_0x2c2b7d) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x35d810 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2c2b7d));
      }
    } catch (_0x4ade07) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x35d810 + 0x1) + '\x20:\x20' + _0x4ade07));
    } finally {
      _0x5ececb && _0x5ececb['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function pattaFunction(_0x44a91a, _0x4b6c85) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x8110f1 = 0x0; _0x8110f1 < patta['length']; _0x8110f1++) {
    await jig(patta, _0x8110f1);
    if (patta[_0x8110f1]['Email'] == '' || patta[_0x8110f1]['Password'] == '' || patta[_0x8110f1]['FirstName'] == '' || patta[_0x8110f1]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8110f1 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x45a569 = getProxy()[_0x8110f1]['split'](':');
    const _0x2c600e = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x45a569[0x0] + ':' + _0x45a569[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x535e36 = await _0x2c600e['newPage']();
      await _0x535e36['authenticate']({
        'username': '' + _0x45a569[0x2],
        'password': '' + _0x45a569[0x3]
      }), console['log'](getTime() + '\x20[' + _0x4b6c85['name'] + ']\x20Task\x20' + (_0x8110f1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x535e36['setRequestInterception'](!![]), _0x535e36['on']('request', _0x14e758 => {
        _0x14e758['resourceType']() === 'image' || _0x14e758['resourceType']() === 'font' || _0x14e758['resourceType']() === 'media' ? _0x14e758['abort']() : _0x14e758['continue']();
      }), await _0x535e36['goto']('https://www.patta.nl/nl/account/login', {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), await _0x535e36['waitForSelector']('#CustomerEmail'), console['log'](getTime() + '\x20[' + _0x4b6c85['name'] + ']\x20Task\x20' + (_0x8110f1 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x535e36['type']('#CustomerEmail', '' + patta[_0x8110f1]['Email']), await delay(0x12c), await _0x535e36['type']('#CustomerPassword', '' + patta[_0x8110f1]['Password']), await delay(0x226), await _0x535e36['$eval']('#customer_login', _0x36f39c => _0x36f39c['submit']());
      try {
        await _0x535e36['waitForSelector']('#orders'), await delay(0x4b0);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x4b6c85['name'] + ']\x20Task\x20' + (_0x8110f1 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
        continue;
      }
      await _0x535e36['goto']('' + patta[_0x8110f1]['Url'], {
        'waitUntil': 'networkidle2',
        'timeout': 0xea60
      }), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x4b6c85['name'] + ']\x20Task\x20' + (_0x8110f1 + 0x1) + '\x20:\x20Starting\x20Entry');
      try {
        await _0x535e36['waitForSelector']('#email');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + _0x4b6c85['name'] + ']\x20Task\x20' + (_0x8110f1 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
      }
      await _0x535e36['type']('#email', '' + patta[_0x8110f1]['Email']), await delay(0x384), await _0x535e36['type']('#first_name', '' + patta[_0x8110f1]['FirstName']), await delay(0x514), await _0x535e36['type']('#last_name', '' + patta[_0x8110f1]['LastName']), await delay(0x514), await _0x535e36['type']('#street_address', patta[_0x8110f1]['Address1'] + '\x20' + patta[_0x8110f1]['Address2']), await delay(0x2bc), await _0x535e36['type']('#zip_code', '' + patta[_0x8110f1]['Postcode']), await delay(0x320), await _0x535e36['type']('#city', '' + patta[_0x8110f1]['City']), await delay(0x320), await _0x535e36['type']('#bday', '' + patta[_0x8110f1]['Bday']), await delay(0x320), await _0x535e36['type']('#instagram', '' + patta[_0x8110f1]['Follower']), await delay(0x352);
      if (patta[_0x8110f1]['Size'] == 'RANDOM') {
        const _0x48c9f5 = await _0x535e36['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x47f313 => {
          return _0x47f313['map'](_0x5b24d7 => _0x5b24d7['textContent']);
        });
        var _0x5d7825 = Math['round'](Math['random']() * (_0x48c9f5['length'] - 0x1));
        console['log'](getTime() + '\x20[' + _0x4b6c85['name'] + ']\x20Task\x20' + (_0x8110f1 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x48c9f5[_0x5d7825]), await _0x535e36['click']('label[data-eu-size=\x22' + _0x48c9f5[_0x5d7825] + '\x22]');
      } else {
        console['log'](getTime() + '\x20[' + _0x4b6c85['name'] + ']\x20Task\x20' + (_0x8110f1 + 0x1) + '\x20:\x20Picking\x20Size\x20' + patta[_0x8110f1]['Size']);
        try {
          await _0x535e36['click']('label[data-eu-size=\x22' + patta[_0x8110f1]['Size'] + '\x22]');
        } catch {
          await _0x535e36['click']('label[data-eu-size=\x22' + patta[_0x8110f1]['Size'] + '.0\x22]');
        }
      }
      await delay(0xbb8), await _0x535e36['$$eval']('.raffle__checkbox-label', _0x28aa01 => _0x28aa01['forEach'](_0x529192 => _0x529192['click']())), await delay(0x7d0), console['log'](getTime() + '\x20[' + _0x4b6c85['name'] + ']\x20Task\x20' + (_0x8110f1 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x535e36['click']('#raffle__form-submit'), await delay(0x1388);
      try {
        await _0x535e36['waitForSelector']('#raffle__confirmation-message-container[class=\x22\x22]'), console['log'](chalk['green'](getTime() + '\x20[' + _0x4b6c85['name'] + ']\x20Task\x20' + (_0x8110f1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch (_0x591ee5) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8110f1 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x591ee5));
      }
    } catch (_0x2a83c2) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x8110f1 + 0x1) + '\x20:\x20' + _0x2a83c2));
    } finally {
      _0x2c600e && _0x2c600e['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
    }
  }
}
async function oqiumFunction(_0x4f060f, _0x2c1bef, _0x1b04dd) {
  await jig(oqium, _0x4f060f);
  var _0x619bf1 = [{
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
        'value': '' + oqium[_0x4f060f]['Size']
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
  const _0x520544 = { 'embeds': _0x619bf1 };
  var _0x577ecd = getProxy()[_0x4f060f]['split'](':'), _0x215b47 = _0x1b04dd['data'];
  _0x2c1bef == 'exp' ? _0x215b47['data']['attributes']['email'] = '' + oqium[_0x4f060f]['FirstName'] + oqium[_0x4f060f]['LastName'] + settings['catchall'] : _0x215b47['data']['attributes']['email'] = '' + oqium[_0x4f060f]['Email'];
  _0x215b47['data']['attributes']['properties']['$first_name'] = '' + oqium[_0x4f060f]['FirstName'], _0x215b47['data']['attributes']['properties']['$last_name'] = '' + oqium[_0x4f060f]['LastName'], _0x215b47['data']['attributes']['properties']['$address1'] = oqium[_0x4f060f]['Address1'] + '\x20' + oqium[_0x4f060f]['Address2'], _0x215b47['data']['attributes']['properties']['$zip'] = '' + oqium[_0x4f060f]['Zip'], _0x215b47['data']['attributes']['properties']['$city'] = '' + oqium[_0x4f060f]['City'], _0x215b47['data']['attributes']['properties']['$country'] = '' + oqium[_0x4f060f]['Country'], _0x215b47['data']['attributes']['properties']['Size'] = '' + oqium[_0x4f060f]['Size'], _0x215b47['data']['attributes']['properties']['$phone_number'] = '' + oqium[_0x4f060f]['Phone'], _0x215b47['data']['attributes']['properties']['Instagram\x20Account'] = '' + oqium[_0x4f060f]['Follower'];
  var _0x5f2142 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': _0x1b04dd['url'],
    'headers': _0x1b04dd['headers'],
    'body': JSON['stringify'](_0x215b47),
    'proxy': 'http://' + _0x577ecd[0x2] + ':' + _0x577ecd[0x3] + '@' + _0x577ecd[0x0] + ':' + _0x577ecd[0x1]
  };
  return _0x2c1bef === 'ver' && (_0x5f2142['method'] = 'GET'), new Promise(function (_0x1836a4, _0x226e4c) {
    callback = async (_0x5f177f, _0x32a850, _0x52346b) => {
      !_0x5f177f && _0x32a850['statusCode'] == 0xca || !_0x5f177f && _0x32a850['statusCode'] == 0xc8 ? (await sendWebhook(succesWH, _0x520544), _0x1836a4(console['log'](chalk['green'](getTime() + '\x20[' + _0x1b04dd['name'] + ']\x20Task\x20' + (_0x4f060f + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x619bf1[0x0]['title'] = 'Failed\x20entry', _0x619bf1[0x0]['description'] = '' + _0x5f177f, await sendWebhook(errorWH, _0x520544), _0x226e4c(console['log'](getTime() + '\x20[' + _0x1b04dd['name'] + ']\x20Task\x20' + (_0x4f060f + 0x1) + ':\x20' + _0x5f177f)));
    };
    try {
      console['log'](getTime() + '\x20[' + _0x1b04dd['name'] + ']\x20Task\x20' + (_0x4f060f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x215b47['data']['attributes']['email']), request(_0x5f2142, callback);
    } catch (_0x1e1ce3) {
      console['log'](getTime() + '\x20Task\x20' + (_0x4f060f + 0x1) + ':\x20' + _0x1e1ce3);
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
      async function _0x3b475b() {
        await delay(0x320), console['clear'](), console['log']('Welcome\x20to\x20' + chalk['cyan']('JRaffles();') + '\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
        for (var _0x50db5 = 0x0; _0x50db5 < modules['length']; _0x50db5++) {
          console['log']('\x20(' + _0x50db5 + ')\x20[' + modules[_0x50db5]['name'] + ']');
        }
        ;
        console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + modules['length'] + ')\x20Change\x20Settings'), console['log']('\x20(' + (modules['length'] + 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
        if (modules[taskModule]['name'] == 'AFEW\x20Store') {
          taskFunction = await getFunction(modules[taskModule]['modules']);
          var _0x5877c0 = modules[taskModule]['modules'][taskFunction];
          return console['clear'](), await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'nor', _0x5877c0), _0x3b475b();
        } else {
          if (modules[taskModule]['name'] == 'MAHA\x20Amsterdam') {
            taskFunction = await getFunction(modules[taskModule]['modules']);
            var _0x5877c0 = modules[taskModule]['modules'][taskFunction];
            if (taskFunction == 0x0) {
              console['log']('Starting\x20' + maha['length'] + '\x20MAHA\x20Tasks');
              for (var _0x107e59 = 0x0; _0x107e59 < maha['length']; _0x107e59++) {
                console['log'](getTime() + '\x20[' + _0x5877c0['name'] + ']\x20Task\x20' + (_0x107e59 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x107e59, 'nor', _0x5877c0), console['log'](getTime() + '\x20[' + _0x5877c0['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
              ;
              return _0x3b475b();
            } else {
              if (taskFunction == 0x1) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x107e59 = 0x0; _0x107e59 < links['length']; _0x107e59++) {
                  _0x5877c0['url'] = links[_0x107e59], console['log'](getTime() + '\x20[' + _0x5877c0['name'] + ']\x20Task\x20' + (_0x107e59 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x107e59, 'ver', _0x5877c0), console['log'](getTime() + '\x20[' + _0x5877c0['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
                ;
                return _0x3b475b();
              }
            }
          } else {
            if (modules[taskModule]['name'] == 'FOOTSHOP')
              await footshopModule(), await delay(0x1388);
            else {
              if (modules[taskModule]['name'] == 'OQIUM\x20Store') {
                taskFunction = await getFunction(modules[taskModule]['modules']);
                var _0x5877c0 = modules[taskModule]['modules'][taskFunction];
                console['clear']();
                if (taskFunction == 0x0) {
                  console['log']('Starting\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                  for (var _0x107e59 = 0x0; _0x107e59 < oqium['length']; _0x107e59++) {
                    console['log'](getTime() + '\x20[' + _0x5877c0['name'] + ']\x20Task\x20' + (_0x107e59 + 0x1) + ':\x20Getting\x20Session');
                    try {
                      await oqiumFunction(_0x107e59, 'exp', _0x5877c0);
                    } catch {
                      console['log'](chalk['red'](getTime() + '\x20[' + _0x5877c0['name'] + ']\x20Task\x20' + (_0x107e59 + 0x1) + ':\x20Task\x20failed'));
                    }
                    console['log'](getTime() + '\x20[' + _0x5877c0['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                  }
                } else {
                  if (taskFunction == 0x1) {
                    console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                    for (var _0x107e59 = 0x0; _0x107e59 < links['length']; _0x107e59++) {
                      try {
                        modules[taskModule]['url'] = links[_0x107e59], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x107e59 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x107e59, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                      } catch (_0xc12a14) {
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
                  var _0x5877c0 = modules[taskModule]['modules'][taskFunction];
                  console['clear']();
                  if (taskFunction == 0x0)
                    await bwAcc('https://bouncewear.com/nl/account/register', _0x5877c0);
                  else {
                    if (taskFunction == 0x1) {
                    }
                  }
                  ;
                } else {
                  if (modules[taskModule]['name'] == 'PATTA') {
                    taskFunction = await getFunction(modules[taskModule]['modules']);
                    var _0x5877c0 = modules[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x0)
                      await pattaAcc('https://patta.nl/account/register', _0x5877c0);
                    else
                      taskFunction == 0x1 && await pattaFunction('', _0x5877c0);
                    ;
                  } else {
                    if (taskModule == modules['length']) {
                      console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                      var _0x31a24b = 0x0;
                      for (const _0x17b9fb in settings) {
                        console['log']('(' + _0x31a24b + ')\x20' + _0x17b9fb + '\x20:\x20' + settings[_0x17b9fb]), _0x31a24b++;
                      }
                      console['log']('');
                      var _0x15248a = await getSetting();
                      console['clear'];
                      var _0x7d28bf = 0x0;
                      for (var _0x408fdd in settings) {
                        if (_0x15248a == _0x7d28bf) {
                          console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x408fdd + '\x20:'), settings[_0x408fdd] = await getValue(), fs['writeFileSync']('../settings.json', JSON['stringify'](settings));
                          break;
                        } else
                          _0x7d28bf++;
                      }
                      return console['log']('Settings\x20Saved!'), await delay(0xbb8), _0x3b475b();
                    } else {
                      if (taskModule == modules['length'] + 0x1)
                        return console['log']('Reloading\x20settings'), await loadSettings(), _0x3b475b();
                      else {
                        if (taskModule == 0x45) {
                          modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                          var _0x1fcda1 = await getPassword();
                          _0x1fcda1 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
      await _0x3b475b();
    } catch (_0x5d08f7) {
      return console['log'](_0x5d08f7), await delay(0x3a98);
    }
}
;
setTitle('JRaffles'), loadSettings(), main();