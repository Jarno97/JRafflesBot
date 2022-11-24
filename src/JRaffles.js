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
  'exitOnComplete': !![]
}, updater = new AutoGitUpdate(config);
async function loadSettings() {
  const _0x27b2da = fs['readFileSync']('../tasks/afew.csv', 'utf8');
  afew = Papa['parse'](_0x27b2da, { 'header': !![] })['data'];
  const _0x2d5755 = fs['readFileSync']('../tasks/maha.csv', 'utf-8');
  maha = Papa['parse'](_0x2d5755, { 'header': !![] })['data'];
  const _0xf74fb3 = fs['readFileSync']('../tasks/footshop.csv', 'utf-8');
  footshop = Papa['parse'](_0xf74fb3, { 'header': !![] })['data'];
  const _0x4de5e5 = fs['readFileSync']('../tasks/bstn.csv', 'utf-8');
  bstn = Papa['parse'](_0x4de5e5, { 'header': !![] })['data'];
  const _0x284412 = fs['readFileSync']('../tasks/kickz.csv', 'utf-8');
  kickz = Papa['parse'](_0x284412, { 'header': !![] })['data'];
  const _0xbb0c9c = fs['readFileSync']('../tasks/oqium.csv', 'utf-8');
  oqium = Papa['parse'](_0xbb0c9c, { 'header': !![] })['data'], settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x1129ba => new Promise(_0x3f1ed1 => setTimeout(_0x3f1ed1, _0x1129ba));
async function getLicense(_0x254025) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x254025, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x2fc8e8 => _0x2fc8e8['data'])['catch'](() => null);
}
;
async function checkLicense(_0x406886) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x73ed41 = await getLicense(_0x406886);
  username = JSON['stringify'](_0x73ed41['user']['username']);
  if (!_0x73ed41)
    return console['log']('License\x20not\x20found');
  if (!_0x73ed41['user'])
    return console['log']('License\x20not\x20bound');
  return _0x73ed41['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x2638b2 = await prompt['get']('Module');
  return console['clear'](), _0x2638b2['Module'];
}
;
async function getPassword() {
  var _0x1455ab = await prompt['get']('Password');
  return console['clear'](), _0x1455ab['Password'];
}
;
async function getLinks() {
  var _0x1748b2 = await prompt['get']('Links');
  return _0x1748b2['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x4be155 = 0x0; _0x4be155 < afewProducts['length']; _0x4be155++) {
    console['log']('\x20(' + _0x4be155 + ')\x20' + afewProducts[_0x4be155]);
  }
  ;
  console['log']();
  let _0x397d57 = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x397d57['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x4f4e10 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x4f4e10;
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
async function sendWebhook(_0x78656f, _0x2a791b) {
  let _0x5e98f1 = { 'headers': { 'content-type': 'application/json' } };
  await axios['post'](_0x78656f, _0x2a791b, _0x5e98f1);
}
function getProxy() {
  let _0x236e42 = proxyFile['split']('\x0a'), _0x4c1661 = _0x236e42['map']((_0x30bb4f, _0x1c5943) => {
    sanatizeProxy = _0x30bb4f['replace']('\x0d', '');
    if (_0x236e42[_0x1c5943 + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x4c1661;
}
;
async function afewScraper() {
  var _0x1f23df = getProxy()[0x1]['split'](':');
  const _0x233247 = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x1f23df[0x0] + ':' + _0x1f23df[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x26f761 = await _0x233247['newPage']();
    await _0x26f761['authenticate']({
      'username': '' + _0x1f23df[0x2],
      'password': '' + _0x1f23df[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x26f761['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x26f761['setRequestInterception'](!![]), _0x26f761['on']('request', _0x364d1c => {
      _0x364d1c['resourceType']() === 'image' || _0x364d1c['resourceType']() === 'font' || _0x364d1c['resourceType']() === 'media' ? _0x364d1c['abort']() : _0x364d1c['continue']();
    }), await _0x26f761['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x26f761['waitForTimeout'](0xbb8), await _0x26f761['waitForSelector']('.product-card');
    const _0x174813 = await _0x26f761['$$eval']('a.product-card', _0x45ef29 => {
      return _0x45ef29['map'](_0x41dbe0 => _0x41dbe0['href']);
    });
    return afewProducts = _0x174813;
  } catch (_0x2cb9b5) {
    console['log']('\x20' + _0x2cb9b5);
  } finally {
    _0x233247['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0xc1d705, _0x3a7040) {
  var _0x3b94a2 = getProxy()[_0xc1d705]['split'](':'), _0x3e7863 = modules[taskModule]['data'];
  _0x3a7040 == 'exp' ? _0x3e7863['data']['attributes']['email'] = '' + maha[_0xc1d705]['FirstName'] + maha[_0xc1d705]['LastName'] + settings['catchall'] : _0x3e7863['data']['attributes']['email'] = '' + maha[_0xc1d705]['Email'];
  _0x3e7863['data']['attributes']['properties']['$first_name'] = '' + maha[_0xc1d705]['FirstName'], _0x3e7863['data']['attributes']['properties']['$last_name'] = '' + maha[_0xc1d705]['LastName'], _0x3e7863['data']['attributes']['properties']['$address1'] = maha[_0xc1d705]['Address1'] + '\x20' + maha[_0xc1d705]['Address2'], _0x3e7863['data']['attributes']['properties']['$zip'] = '' + maha[_0xc1d705]['Zip'], _0x3e7863['data']['attributes']['properties']['$city'] = '' + maha[_0xc1d705]['City'], _0x3e7863['data']['attributes']['properties']['$country'] = '' + maha[_0xc1d705]['Country'], _0x3e7863['data']['attributes']['properties']['Size'] = '' + maha[_0xc1d705]['Size'], _0x3e7863['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0xc1d705]['Follower'];
  var _0x2dffd8 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x3e7863),
    'proxy': 'http://' + _0x3b94a2[0x2] + ':' + _0x3b94a2[0x3] + '@' + _0x3b94a2[0x0] + ':' + _0x3b94a2[0x1]
  };
  return _0x3a7040 === 'ver' && (_0x2dffd8['method'] = 'GET'), new Promise(function (_0x592a12, _0x3a65c1) {
    callback = async (_0x5b447b, _0x4887f6, _0x3abf9f) => {
      !_0x5b447b && _0x4887f6['statusCode'] == 0xca || !_0x5b447b && _0x4887f6['statusCode'] == 0xc8 ? _0x592a12(console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xc1d705 + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x3a65c1(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xc1d705 + 0x1) + ':\x20error\x20' + _0x5b447b + '\x20' + JSON['stringify'](_0x4887f6)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xc1d705 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3e7863['data']['attributes']['email']), request(_0x2dffd8, callback);
    } catch (_0x16ff80) {
      console['log'](getTime() + '\x20Task\x20' + (_0xc1d705 + 0x1) + ':\x20' + _0x16ff80);
    }
  });
}
;
async function footshopModule() {
  var _0x3c6302;
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x3a4319 = 0x0; _0x3a4319 < footshop['length']; _0x3a4319++) {
    if (footshop[_0x3a4319]['Email'] == '' || footshop[_0x3a4319]['FirstName'] == '' || footshop[_0x3a4319]['LastName'] == '' || footshop[_0x3a4319]['Country'] == '' || footshop[_0x3a4319]['Size'] == '' || footshop[_0x3a4319]['Address1'] == '' || footshop[_0x3a4319]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    async function _0x1332ae() {
      var _0x435ece = await axios['get']('https://releases.footshop.com/api/raffles/' + footshop[_0x3a4319]['Pid'])['then'](_0x1042c7 => _0x1042c7['data'])['catch'](() => null);
      let _0x36f4d = _0x435ece['sizeSets']['Men']['sizes'];
      async function _0x381499() {
        for (var _0xa6bf0f = 0x0; _0xa6bf0f < _0x435ece['sizeSets']['Men']['sizes']['length']; _0xa6bf0f++) {
          if (_0x36f4d[_0xa6bf0f]['eur'] == footshop[_0x3a4319]['Size'])
            return _0x3c6302 = _0x36f4d[_0xa6bf0f]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x20Size\x20' + footshop[_0x3a4319]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x5dbb85 = await _0x381499();
      if (_0x5dbb85 == ![])
        return ![];
    }
    let _0x390941 = await _0x1332ae();
    if (_0x390941 == ![])
      continue;
    if (footshop[_0x3a4319]['Email'] == '' || footshop[_0x3a4319]['FirstName'] == '' || footshop[_0x3a4319]['LastName'] == '' || footshop[_0x3a4319]['Country'] == '' || footshop[_0x3a4319]['Size'] == '' || footshop[_0x3a4319]['Address1'] == '' || footshop[_0x3a4319]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x25f243 = 'https://releases.footshop.com/register/' + footshop[_0x3a4319]['Pid'] + '/Men/' + _0x3c6302;
    var _0x2854ed = getProxy()[_0x3a4319]['split'](':');
    const _0x2a6f23 = await puppeteer['launch']({
      'headless': ![],
      'args': ['--proxy-server=' + _0x2854ed[0x0] + ':' + _0x2854ed[0x1]]
    });
    try {
      const _0x1ee00b = await _0x2a6f23['newPage']();
      await _0x1ee00b['authenticate']({
        'username': '' + _0x2854ed[0x2],
        'password': '' + _0x2854ed[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1ee00b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1ee00b['setRequestInterception'](!![]), _0x1ee00b['on']('request', _0x1446a2 => {
        _0x1446a2['resourceType']() === 'image' || _0x1446a2['resourceType']() === 'font' || _0x1446a2['resourceType']() === 'media' ? _0x1446a2['abort']() : _0x1446a2['continue']();
      }), await _0x1ee00b['goto']('' + _0x25f243 + _0x3c6302), await _0x1ee00b['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1ee00b['type']('input[name=\x22email\x22]', '' + footshop[_0x3a4319]['Email']), await delay(0x640), await _0x1ee00b['type']('input[name=\x22phone\x22]', '' + footshop[_0x3a4319]['Phone']), await delay(0x4b0), await _0x1ee00b['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
      try {
        await _0x1ee00b['type']('input[name=\x22firstName\x22]', '' + footshop[_0x3a4319]['FirstName']), await delay(0x258);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
        continue;
      }
      await _0x1ee00b['type']('input[name=\x22lastName\x22]', '' + footshop[_0x3a4319]['LastName']), await delay(0xc8), await _0x1ee00b['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x3a4319]['Follower']), await delay(0x4b0), await _0x1ee00b['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1ee00b['select']('select[name=\x22country\x22]', '' + footshop[_0x3a4319]['Country']), await delay(0x2bc), await _0x1ee00b['type']('input[name=\x22streetName\x22]', '' + footshop[_0x3a4319]['Address1']), await delay(0x258), await _0x1ee00b['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x3a4319]['HouseNumber'] + footshop[_0x3a4319]['Address2']), await delay(0xc8), await _0x1ee00b['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x3a4319]['Zip']), await delay(0x1f4), await _0x1ee00b['type']('input[name=\x22city\x22]', '' + footshop[_0x3a4319]['City']), await delay(0x4b0), await _0x1ee00b['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x1ee00b['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1ee00b['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x1ee00b['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1ee00b['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1ee00b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0x1ee00b['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x3a4319]['CardNumber']), await delay(0x320), await _0x1ee00b['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x3a4319]['ExpiryDate']), await delay(0x226), await _0x1ee00b['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x3a4319]['CVV']), await delay(0x226), await _0x1ee00b['type']('input[name=\x22holderName\x22]', '' + footshop[_0x3a4319]['NameOnCard']), await delay(0x226), await _0x1ee00b['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x20Awaiting\x203DS');
      const _0x19de54 = _0x1ee00b['waitForSelector']('div.alert.alert-danger');
      _0x19de54 && console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x203DS\x20Failed'));
      try {
        await _0x1ee00b['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x203DS\x20Failed'));
      }
    } catch (_0x1d0e37) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4319 + 0x1) + '\x20:\x20' + _0x1d0e37);
    } finally {
      _0x2a6f23['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x46b949, _0x14fdaa) => {
  for (var _0x4c3709 = 0x0; _0x4c3709 < afew['length']; _0x4c3709++) {
    var _0x228424 = [{
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
          'value': '' + _0x46b949
        },
        {
          'name': 'Size',
          'value': '' + afew[_0x4c3709]['Size']
        },
        {
          'name': 'Delay',
          'value': '' + settings['AfewDelay']
        }
      ]
    }];
    const _0x35fb63 = { 'embeds': _0x228424 };
    if (afew[_0x4c3709]['Email'] == '' || afew[_0x4c3709]['FirstName'] == '' || afew[_0x4c3709]['LastName'] == '' || afew[_0x4c3709]['Country'] == '' || afew[_0x4c3709]['Size'] == '' || afew[_0x4c3709]['Address1'] == '' || afew[_0x4c3709]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3709 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x44dfc4 = getProxy()[_0x4c3709]['split'](':');
    const _0x2aab8e = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x44dfc4[0x0] + ':' + _0x44dfc4[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0xf7fbf4 = await _0x2aab8e['newPage']();
      await _0xf7fbf4['setDefaultNavigationTimeout'](0x1d4c0), await _0xf7fbf4['authenticate']({
        'username': '' + _0x44dfc4[0x2],
        'password': '' + _0x44dfc4[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3709 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xf7fbf4['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xf7fbf4['setRequestInterception'](!![]), _0xf7fbf4['on']('request', _0x3764c1 => {
        _0x3764c1['resourceType']() === 'image' || _0x3764c1['resourceType']() === 'font' || _0x3764c1['resourceType']() === 'media' ? _0x3764c1['abort']() : _0x3764c1['continue']();
      }), await _0xf7fbf4['goto'](_0x46b949), await _0xf7fbf4['waitForNavigation']({ 'waitUntil': 'networkidle0' }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3709 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0xf7fbf4['waitForTimeout'](0xfa0);
      try {
        await _0xf7fbf4['waitForSelector']('#onetrust-accept-btn-handler', { 'timeout': 0x1d4c0 });
      } catch (_0x2a9198) {
        if (_0x2a9198 instanceof TimeoutError) {
          console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3709 + 0x1) + '\x20:\x20Proxy\x20error,\x20retrying..')), _0x4c3709 = _0x4c3709 - 0x1;
          continue;
        }
      }
      await _0xf7fbf4['click']('#onetrust-accept-btn-handler'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3709 + 0x1) + '\x20:\x20Cookies\x20received'), await _0xf7fbf4['waitForTimeout'](0x320), await _0xf7fbf4['hover']('span[class=\x22release-type\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3709 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + afew[_0x4c3709]['Size']);
      try {
        await _0xf7fbf4['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x4c3709]['Size'] + '\x22]'), await _0xf7fbf4['waitForTimeout'](0x320), await _0xf7fbf4['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x4c3709]['Size'] + '\x22]');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3709 + 0x1) + '\x20:\x20Size\x20not\x20found')), _0x228424[0x0]['title'] = 'Failed\x20entry', _0x228424[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x35fb63);
        continue;
      }
      await _0xf7fbf4['waitForTimeout'](0x258), await _0xf7fbf4['type']('#raffle-instagram', '' + afew[_0x4c3709]['Follower'], { 'delay': 0x64 }), await _0xf7fbf4['waitForTimeout'](0x384), await _0xf7fbf4['click']('#raffle-terms'), await _0xf7fbf4['waitForTimeout'](0x384);
      const [_0x25af90] = await _0xf7fbf4['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0x25af90 && await _0x25af90['click']();
      ;
      await _0xf7fbf4['waitForTimeout'](0xbb8), await _0xf7fbf4['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3709 + 0x1) + '\x20:\x20Filling\x20Information'), _0x14fdaa == 'sec' ? await _0xf7fbf4['type']('#checkout_email', '' + afew[_0x4c3709]['FirstName'] + afew[_0x4c3709]['LastName'] + settings['catchall']) : await _0xf7fbf4['type']('#checkout_email', '' + afew[_0x4c3709]['Email']), await _0xf7fbf4['waitForTimeout'](0x258), await _0xf7fbf4['select']('#checkout_shipping_address_country', '' + afew[_0x4c3709]['Country']), await _0xf7fbf4['waitForTimeout'](0x258), await _0xf7fbf4['type']('#checkout_shipping_address_first_name', '' + afew[_0x4c3709]['FirstName']), await _0xf7fbf4['waitForTimeout'](0x320), await _0xf7fbf4['type']('#checkout_shipping_address_last_name', '' + afew[_0x4c3709]['LastName']), await _0xf7fbf4['waitForTimeout'](0x2bc), await _0xf7fbf4['type']('#checkout_shipping_address_address1', '' + afew[_0x4c3709]['Address1']), await _0xf7fbf4['waitForTimeout'](0x2bc), await _0xf7fbf4['type']('#checkout_shipping_address_address2', '' + afew[_0x4c3709]['Address2']), await _0xf7fbf4['waitForTimeout'](0x2bc), await _0xf7fbf4['type']('#checkout_shipping_address_zip', '' + afew[_0x4c3709]['Postcode']), await _0xf7fbf4['waitForTimeout'](0x2bc), await _0xf7fbf4['type']('#checkout_shipping_address_city', '' + afew[_0x4c3709]['City']), await _0xf7fbf4['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3709 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0xf7fbf4['click']('#continue_button'), await _0xf7fbf4['waitForTimeout'](0x1194), await _0xf7fbf4['waitForSelector']('#continue_button'), await _0xf7fbf4['click']('#continue_button'), await _0xf7fbf4['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3709 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xf7fbf4['waitForSelector']('#continue_button'), await _0xf7fbf4['click']('#continue_button'), await _0xf7fbf4['waitForTimeout'](0x1194), await _0xf7fbf4['waitForSelector']('#continue_button'), await _0xf7fbf4['click']('#continue_button'), await _0xf7fbf4['waitForTimeout'](0x2af8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3709 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x35fb63);
    } catch (_0x9fceec) {
      _0x9fceec instanceof TimeoutError && console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3709 + 0x1) + '\x20:\x20Proxy\x20banned,\x20next\x20task..')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c3709 + 0x1) + '\x20:\x20' + _0x9fceec)), _0x228424[0x0]['title'] = 'Failed\x20entry', _0x228424[0x0]['description'] = '' + _0x9fceec, await sendWebhook(errorWH, _0x35fb63);
    } finally {
      _0x2aab8e && _0x2aab8e['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function kickzAcc(_0x30ef60) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x57b4b8 = 0x0; _0x57b4b8 < kickz['length']; _0x57b4b8++) {
    if (kickz[_0x57b4b8]['Email'] == '' || kickz[_0x57b4b8]['Password'] == '' || kickz[_0x57b4b8]['FirstName'] == '' || kickz[_0x57b4b8]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x5342c8 = getProxy()[_0x57b4b8]['split'](':');
    const _0x1c936f = await puppeteer['launch']({
      'headless': ![],
      'args': [
        '--proxy-server=' + _0x5342c8[0x0] + ':' + _0x5342c8[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x1acc31 = await _0x1c936f['newPage']();
      await _0x1acc31['authenticate']({
        'username': '' + _0x5342c8[0x2],
        'password': '' + _0x5342c8[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1acc31['setRequestInterception'](!![]), _0x1acc31['on']('request', _0x51d117 => {
        _0x51d117['resourceType']() === 'image' || _0x51d117['resourceType']() === 'font' || _0x51d117['resourceType']() === 'media' ? _0x51d117['abort']() : _0x51d117['continue']();
      }), await _0x1acc31['goto'](_0x30ef60), await delay(0xbb8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x1acc31['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1acc31['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1acc31['waitForSelector']('#button-register'), await _0x1acc31['click']('#button-register'), await _0x1acc31['waitForSelector']('#customer_salutation'), await _0x1acc31['select']('#customer_salutation', 'mr'), await delay(0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1acc31['waitForSelector']('#customer_firstname'), await _0x1acc31['type']('#customer_firstname', '' + kickz[_0x57b4b8]['FirstName']), await delay(0x352), await _0x1acc31['waitForSelector']('#customer_lastname'), await _0x1acc31['type']('#customer_lastname', '' + kickz[_0x57b4b8]['LastName']), await delay(0x352), await _0x1acc31['type']('#email-input', '' + kickz[_0x57b4b8]['Email']), await delay(0x352), await _0x1acc31['type']('#email-confirm-input', '' + kickz[_0x57b4b8]['Email']), await delay(0x352), await _0x1acc31['type']('#register-password', '' + kickz[_0x57b4b8]['Password']), await delay(0x352), await _0x1acc31['type']('#password-confirm', '' + kickz[_0x57b4b8]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x1acc31['click']('#consent'), await delay(0x1f4);
      const _0x47ef01 = await _0x1acc31['$']('div.inputErrorMsg.b-form_section-message');
      if (_0x47ef01) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
        continue;
      }
      await _0x1acc31['click']('#buttonRegister'), await _0x1acc31['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x57b4b8]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
      async function _0x3bbdbb() {
        console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
        var _0x335f1b = await prompt['get']('Code');
        return _0x335f1b['Code'];
      }
      ;
      code = await _0x3bbdbb(), delay(0x320), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20Verifying..'), await _0x1acc31['type']('#verificationCode', code), await delay(0x1f4), await _0x1acc31['click']('#buttonVerify'), await delay(0x190), await _0x1acc31['click']('#buttonVerify'), await delay(0x3e8);
      try {
        await _0x1acc31['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x57b4b8]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + kickz[_0x57b4b8]['Email'] + ',' + kickz[_0x57b4b8]['Password'] + ','), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x57b4b8]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
      }
    } catch (_0x19fa2e) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x57b4b8 + 0x1) + '\x20:\x20' + _0x19fa2e));
    } finally {
      _0x1c936f && _0x1c936f['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
}
async function oqiumFunction(_0x725758, _0x56a58c) {
  var _0x59472f = [{
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
        'value': '' + oqium[_0x725758]['Size']
      },
      {
        'name': 'Delay',
        'value': '' + settings['delay']
      }
    ]
  }];
  const _0x2fe796 = { 'embeds': _0x59472f };
  var _0x2413b0 = getProxy()[_0x725758]['split'](':'), _0x4569b9 = modules[taskModule]['data'];
  _0x56a58c == 'exp' ? _0x4569b9['data']['attributes']['email'] = '' + oqium[_0x725758]['FirstName'] + oqium[_0x725758]['LastName'] + settings['catchall'] : _0x4569b9['data']['attributes']['email'] = '' + oqium[_0x725758]['Email'];
  _0x4569b9['data']['attributes']['properties']['$first_name'] = '' + oqium[_0x725758]['FirstName'], _0x4569b9['data']['attributes']['properties']['$last_name'] = '' + oqium[_0x725758]['LastName'], _0x4569b9['data']['attributes']['properties']['$address1'] = oqium[_0x725758]['Address1'] + '\x20' + oqium[_0x725758]['Address2'], _0x4569b9['data']['attributes']['properties']['$zip'] = '' + oqium[_0x725758]['Zip'], _0x4569b9['data']['attributes']['properties']['$city'] = '' + oqium[_0x725758]['City'], _0x4569b9['data']['attributes']['properties']['$country'] = '' + oqium[_0x725758]['Country'], _0x4569b9['data']['attributes']['properties']['Size'] = '' + oqium[_0x725758]['Size'], _0x4569b9['data']['attributes']['properties']['$phone_number'] = '' + oqium[_0x725758]['Phone'], _0x4569b9['data']['attributes']['properties']['Instagram\x20Account'] = '' + oqium[_0x725758]['Follower'];
  var _0x1fef62 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x4569b9),
    'proxy': 'http://' + _0x2413b0[0x2] + ':' + _0x2413b0[0x3] + '@' + _0x2413b0[0x0] + ':' + _0x2413b0[0x1]
  };
  return _0x56a58c === 'ver' && (_0x1fef62['method'] = 'GET'), new Promise(function (_0x279cd0, _0x170c7d) {
    callback = async (_0x481f2a, _0x5982ac, _0x1211db) => {
      !_0x481f2a && _0x5982ac['statusCode'] == 0xca || !_0x481f2a && _0x5982ac['statusCode'] == 0xc8 ? (await sendWebhook(succesWH, _0x2fe796), _0x279cd0(console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x725758 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x59472f[0x0]['title'] = 'Failed\x20entry', _0x59472f[0x0]['description'] = '' + JSON['stringify'](_0x5982ac['statusCode']), await sendWebhook(errorWH, _0x2fe796), _0x170c7d(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x725758 + 0x1) + ':\x20error\x20' + _0x481f2a + '\x20' + JSON['stringify'](_0x5982ac['statusCode']))));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x725758 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4569b9['data']['attributes']['email']), request(_0x1fef62, callback);
    } catch (_0x9efe3a) {
      console['log'](getTime() + '\x20Task\x20' + (_0x725758 + 0x1) + ':\x20' + _0x9efe3a);
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
      async function _0x1f6a4f() {
        await delay(0x320), console['clear'](), console['log']('Welcome\x20to\x20JRaffles();\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
        for (var _0x5ac151 = 0x0; _0x5ac151 < modules['length']; _0x5ac151++) {
          console['log']('\x20(' + _0x5ac151 + ')\x20' + modules[_0x5ac151]['name']);
        }
        ;
        console['log']('\x20(' + modules['length'] + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
        if (taskModule == 0x0)
          await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct]);
        else {
          if (taskModule == 0x1) {
            console['log']('Starting\x20' + maha['length'] + '\x20MAHA\x20Tasks');
            for (var _0x315603 = 0x0; _0x315603 < maha['length']; _0x315603++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x315603 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x315603), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x2) {
              console['log']('Starting\x20' + maha['length'] + '\x20' + chalk['yellow']('Experimental') + '\x20MAHA\x20Tasks');
              for (var _0x315603 = 0x0; _0x315603 < maha['length']; _0x315603++) {
                console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x315603 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x315603, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
            } else {
              if (taskModule == 0x3) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x315603 = 0x0; _0x315603 < links['length']; _0x315603++) {
                  modules[taskModule]['url'] = links[_0x315603], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x315603 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x315603, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
              } else {
                if (taskModule == 0x4)
                  await footshopModule(), await delay(0x1388);
                else {
                  if (taskModule == 0x5) {
                    console['log']('Starting\x20\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                    for (var _0x315603 = 0x0; _0x315603 < oqium['length']; _0x315603++) {
                      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x315603 + 0x1) + ':\x20Getting\x20Session');
                      try {
                        await oqiumFunction(_0x315603, 'exp');
                      } catch {
                        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x315603 + 0x1) + ':\x20Task\x20failed'));
                      }
                      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                    }
                  } else {
                    if (taskModule == 0x6) {
                      console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                      for (var _0x315603 = 0x0; _0x315603 < links['length']; _0x315603++) {
                        modules[taskModule]['url'] = links[_0x315603], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x315603 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x315603, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                      }
                    } else {
                      if (taskModule == modules['length'])
                        return console['log']('Reloading\x20settings'), await loadSettings(), _0x1f6a4f();
                      else {
                        if (taskModule == 0x45) {
                          modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                          var _0x28d67b = await getPassword();
                          _0x28d67b == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
      await _0x1f6a4f();
    } catch (_0x2e6faa) {
      return console['log'](_0x2e6faa), await delay(0x3a98);
    }
}
;
setTitle('JRaffles'), loadSettings(), main();