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
  const _0x360121 = fs['readFileSync']('../tasks/afew.csv', 'utf8');
  afew = Papa['parse'](_0x360121, { 'header': !![] })['data'];
  const _0x3cac29 = fs['readFileSync']('../tasks/maha.csv', 'utf-8');
  maha = Papa['parse'](_0x3cac29, { 'header': !![] })['data'];
  const _0x23f5bf = fs['readFileSync']('../tasks/footshop.csv', 'utf-8');
  footshop = Papa['parse'](_0x23f5bf, { 'header': !![] })['data'];
  const _0x3e7645 = fs['readFileSync']('../tasks/bstn.csv', 'utf-8');
  bstn = Papa['parse'](_0x3e7645, { 'header': !![] })['data'];
  const _0x1e2122 = fs['readFileSync']('../tasks/kickz.csv', 'utf-8');
  kickz = Papa['parse'](_0x1e2122, { 'header': !![] })['data'];
  const _0x5cd89f = fs['readFileSync']('../tasks/oqium.csv', 'utf-8');
  oqium = Papa['parse'](_0x5cd89f, { 'header': !![] })['data'], settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x49316e => new Promise(_0x4fb54b => setTimeout(_0x4fb54b, _0x49316e));
async function getLicense(_0x56ebaa) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x56ebaa, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x4eff2d => _0x4eff2d['data'])['catch'](() => null);
}
;
async function checkLicense(_0x5b3626) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x1dbace = await getLicense(_0x5b3626);
  username = JSON['stringify'](_0x1dbace['user']['username']);
  if (!_0x1dbace)
    return console['log']('License\x20not\x20found');
  if (!_0x1dbace['user'])
    return console['log']('License\x20not\x20bound');
  return _0x1dbace['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x8eb273 = await prompt['get']('Module');
  return console['clear'](), _0x8eb273['Module'];
}
;
async function getPassword() {
  var _0x3a015c = await prompt['get']('Password');
  return console['clear'](), _0x3a015c['Password'];
}
;
async function getLinks() {
  var _0xb24694 = await prompt['get']('Links');
  return _0xb24694['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x5c8d89 = 0x0; _0x5c8d89 < afewProducts['length']; _0x5c8d89++) {
    console['log']('\x20(' + _0x5c8d89 + ')\x20' + afewProducts[_0x5c8d89]);
  }
  ;
  console['log']();
  let _0x555832 = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x555832['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x26b09d = new Date(Date['now']())['toLocaleTimeString']();
  return _0x26b09d;
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
async function sendWebhook(_0x1762a9, _0x4b8b23) {
  let _0x8bb7d0 = { 'headers': { 'content-type': 'application/json' } };
  await axios['post'](_0x1762a9, _0x4b8b23, _0x8bb7d0);
}
function getProxy() {
  let _0x305070 = proxyFile['split']('\x0a'), _0x467af0 = _0x305070['map']((_0x3bda24, _0xff753e) => {
    sanatizeProxy = _0x3bda24['replace']('\x0d', '');
    if (_0x305070[_0xff753e + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x467af0;
}
;
async function afewScraper() {
  var _0x25427e = getProxy()[0x1]['split'](':');
  const _0x2a9c9d = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x25427e[0x0] + ':' + _0x25427e[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x132f96 = await _0x2a9c9d['newPage']();
    await _0x132f96['authenticate']({
      'username': '' + _0x25427e[0x2],
      'password': '' + _0x25427e[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x132f96['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x132f96['setRequestInterception'](!![]), _0x132f96['on']('request', _0x5f04c9 => {
      _0x5f04c9['resourceType']() === 'image' || _0x5f04c9['resourceType']() === 'font' || _0x5f04c9['resourceType']() === 'media' ? _0x5f04c9['abort']() : _0x5f04c9['continue']();
    }), await _0x132f96['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x132f96['waitForTimeout'](0xbb8), await _0x132f96['waitForSelector']('.product-card');
    const _0x597aa7 = await _0x132f96['$$eval']('a.product-card', _0x36d59b => {
      return _0x36d59b['map'](_0x25e4a0 => _0x25e4a0['href']);
    });
    return afewProducts = _0x597aa7;
  } catch (_0x42e085) {
    console['log']('\x20' + _0x42e085);
  } finally {
    _0x2a9c9d['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x18552b, _0x25d5a8) {
  var _0x47fb41 = getProxy()[_0x18552b]['split'](':'), _0x5ffc41 = modules[taskModule]['data'];
  _0x25d5a8 == 'exp' ? _0x5ffc41['data']['attributes']['email'] = '' + maha[_0x18552b]['FirstName'] + maha[_0x18552b]['LastName'] + settings['catchall'] : _0x5ffc41['data']['attributes']['email'] = '' + maha[_0x18552b]['Email'];
  _0x5ffc41['data']['attributes']['properties']['$first_name'] = '' + maha[_0x18552b]['FirstName'], _0x5ffc41['data']['attributes']['properties']['$last_name'] = '' + maha[_0x18552b]['LastName'], _0x5ffc41['data']['attributes']['properties']['$address1'] = maha[_0x18552b]['Address1'] + '\x20' + maha[_0x18552b]['Address2'], _0x5ffc41['data']['attributes']['properties']['$zip'] = '' + maha[_0x18552b]['Zip'], _0x5ffc41['data']['attributes']['properties']['$city'] = '' + maha[_0x18552b]['City'], _0x5ffc41['data']['attributes']['properties']['$country'] = '' + maha[_0x18552b]['Country'], _0x5ffc41['data']['attributes']['properties']['Size'] = '' + maha[_0x18552b]['Size'], _0x5ffc41['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x18552b]['Follower'];
  var _0x3b5887 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x5ffc41),
    'proxy': 'http://' + _0x47fb41[0x2] + ':' + _0x47fb41[0x3] + '@' + _0x47fb41[0x0] + ':' + _0x47fb41[0x1]
  };
  return _0x25d5a8 === 'ver' && (_0x3b5887['method'] = 'GET'), new Promise(function (_0x2a0059, _0x1a839a) {
    callback = async (_0x2158b2, _0x4153c0, _0x24161d) => {
      !_0x2158b2 && _0x4153c0['statusCode'] == 0xca || !_0x2158b2 && _0x4153c0['statusCode'] == 0xc8 ? _0x2a0059(console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x18552b + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x1a839a(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x18552b + 0x1) + ':\x20error\x20' + _0x2158b2 + '\x20' + JSON['stringify'](_0x4153c0)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x18552b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5ffc41['data']['attributes']['email']), request(_0x3b5887, callback);
    } catch (_0x179de4) {
      console['log'](getTime() + '\x20Task\x20' + (_0x18552b + 0x1) + ':\x20' + _0x179de4);
    }
  });
}
;
async function footshopModule() {
  var _0x5e01fa;
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x3e5ce4 = 0x0; _0x3e5ce4 < footshop['length']; _0x3e5ce4++) {
    if (footshop[_0x3e5ce4]['Email'] == '' || footshop[_0x3e5ce4]['FirstName'] == '' || footshop[_0x3e5ce4]['LastName'] == '' || footshop[_0x3e5ce4]['Country'] == '' || footshop[_0x3e5ce4]['Size'] == '' || footshop[_0x3e5ce4]['Address1'] == '' || footshop[_0x3e5ce4]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    async function _0x418844() {
      var _0x1d07c4 = await axios['get']('https://releases.footshop.com/api/raffles/' + footshop[_0x3e5ce4]['Pid'])['then'](_0x4a1687 => _0x4a1687['data'])['catch'](() => null);
      let _0x1b5be5 = _0x1d07c4['sizeSets']['Men']['sizes'];
      async function _0x354ee1() {
        for (var _0x4ac44e = 0x0; _0x4ac44e < _0x1d07c4['sizeSets']['Men']['sizes']['length']; _0x4ac44e++) {
          if (_0x1b5be5[_0x4ac44e]['eur'] == footshop[_0x3e5ce4]['Size'])
            return _0x5e01fa = _0x1b5be5[_0x4ac44e]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x20Size\x20' + footshop[_0x3e5ce4]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x35773a = await _0x354ee1();
      if (_0x35773a == ![])
        return ![];
    }
    let _0x4d674d = await _0x418844();
    if (_0x4d674d == ![])
      continue;
    if (footshop[_0x3e5ce4]['Email'] == '' || footshop[_0x3e5ce4]['FirstName'] == '' || footshop[_0x3e5ce4]['LastName'] == '' || footshop[_0x3e5ce4]['Country'] == '' || footshop[_0x3e5ce4]['Size'] == '' || footshop[_0x3e5ce4]['Address1'] == '' || footshop[_0x3e5ce4]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x33217b = 'https://releases.footshop.com/register/' + footshop[_0x3e5ce4]['Pid'] + '/Men/' + _0x5e01fa;
    var _0x4f2a2c = getProxy()[_0x3e5ce4]['split'](':');
    const _0x2ff269 = await puppeteer['launch']({
      'headless': ![],
      'args': ['--proxy-server=' + _0x4f2a2c[0x0] + ':' + _0x4f2a2c[0x1]]
    });
    try {
      const _0x2b7db2 = await _0x2ff269['newPage']();
      await _0x2b7db2['authenticate']({
        'username': '' + _0x4f2a2c[0x2],
        'password': '' + _0x4f2a2c[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2b7db2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2b7db2['setRequestInterception'](!![]), _0x2b7db2['on']('request', _0x274215 => {
        _0x274215['resourceType']() === 'image' || _0x274215['resourceType']() === 'font' || _0x274215['resourceType']() === 'media' ? _0x274215['abort']() : _0x274215['continue']();
      }), await _0x2b7db2['goto']('' + _0x33217b + _0x5e01fa), await _0x2b7db2['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x2b7db2['type']('input[name=\x22email\x22]', '' + footshop[_0x3e5ce4]['Email']), await delay(0x640), await _0x2b7db2['type']('input[name=\x22phone\x22]', '' + footshop[_0x3e5ce4]['Phone']), await delay(0x4b0), await _0x2b7db2['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
      try {
        await _0x2b7db2['type']('input[name=\x22firstName\x22]', '' + footshop[_0x3e5ce4]['FirstName']), await delay(0x258);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
        continue;
      }
      await _0x2b7db2['type']('input[name=\x22lastName\x22]', '' + footshop[_0x3e5ce4]['LastName']), await delay(0xc8), await _0x2b7db2['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x3e5ce4]['Follower']), await delay(0x4b0), await _0x2b7db2['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x2b7db2['select']('select[name=\x22country\x22]', '' + footshop[_0x3e5ce4]['Country']), await delay(0x2bc), await _0x2b7db2['type']('input[name=\x22streetName\x22]', '' + footshop[_0x3e5ce4]['Address1']), await delay(0x258), await _0x2b7db2['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x3e5ce4]['HouseNumber'] + footshop[_0x3e5ce4]['Address2']), await delay(0xc8), await _0x2b7db2['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x3e5ce4]['Zip']), await delay(0x1f4), await _0x2b7db2['type']('input[name=\x22city\x22]', '' + footshop[_0x3e5ce4]['City']), await delay(0x4b0), await _0x2b7db2['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x2b7db2['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x2b7db2['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x2b7db2['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2b7db2['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2b7db2['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0x2b7db2['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x3e5ce4]['CardNumber']), await delay(0x320), await _0x2b7db2['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x3e5ce4]['ExpiryDate']), await delay(0x226), await _0x2b7db2['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x3e5ce4]['CVV']), await delay(0x226), await _0x2b7db2['type']('input[name=\x22holderName\x22]', '' + footshop[_0x3e5ce4]['NameOnCard']), await delay(0x226), await _0x2b7db2['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x20Awaiting\x203DS');
      const _0x4a1e01 = _0x2b7db2['waitForSelector']('div.alert.alert-danger');
      _0x4a1e01 && console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x203DS\x20Failed'));
      try {
        await _0x2b7db2['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x203DS\x20Failed'));
      }
    } catch (_0x222045) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3e5ce4 + 0x1) + '\x20:\x20' + _0x222045);
    } finally {
      _0x2ff269['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x592d1a, _0x5ae672) => {
  for (var _0x36918 = 0x0; _0x36918 < afew['length']; _0x36918++) {
    var _0x42be24 = [{
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
          'value': '' + _0x592d1a
        },
        {
          'name': 'Size',
          'value': '' + afew[_0x36918]['Size']
        },
        {
          'name': 'Delay',
          'value': '' + settings['AfewDelay']
        }
      ]
    }];
    const _0x204374 = { 'embeds': _0x42be24 };
    if (afew[_0x36918]['Email'] == '' || afew[_0x36918]['FirstName'] == '' || afew[_0x36918]['LastName'] == '' || afew[_0x36918]['Country'] == '' || afew[_0x36918]['Size'] == '' || afew[_0x36918]['Address1'] == '' || afew[_0x36918]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36918 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x104239 = getProxy()[_0x36918]['split'](':');
    const _0x185375 = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x104239[0x0] + ':' + _0x104239[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x2c7977 = await _0x185375['newPage']();
      await _0x2c7977['setDefaultNavigationTimeout'](0x1d4c0), await _0x2c7977['authenticate']({
        'username': '' + _0x104239[0x2],
        'password': '' + _0x104239[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36918 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2c7977['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2c7977['setRequestInterception'](!![]), _0x2c7977['on']('request', _0x3a75dc => {
        _0x3a75dc['resourceType']() === 'image' || _0x3a75dc['resourceType']() === 'font' || _0x3a75dc['resourceType']() === 'media' ? _0x3a75dc['abort']() : _0x3a75dc['continue']();
      }), await _0x2c7977['goto'](_0x592d1a), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36918 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x2c7977['waitForTimeout'](0xfa0);
      try {
        await _0x2c7977['waitForSelector']('#onetrust-accept-btn-handler', { 'timeout': 0x1d4c0 });
      } catch (_0x9c09d) {
        if (_0x9c09d instanceof TimeoutError) {
          console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36918 + 0x1) + '\x20:\x20Proxy\x20error,\x20retrying..')), _0x42be24[0x0]['title'] = 'Failed\x20entry', _0x42be24[0x0]['description'] = 'Proxy\x20error', await sendWebhook(errorWH, _0x204374), _0x36918 = _0x36918 - 0x1;
          continue;
        }
      }
      cookieButton = _0x2c7977['$$']('#onetrust-accept-btn-handler'), await cookieButton['evaluate'](_0x4d3876 => _0x4d3876['click']()), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36918 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x2c7977['waitForTimeout'](0x320), await _0x2c7977['hover']('span[class=\x22release-type\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36918 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + afew[_0x36918]['Size']);
      try {
        await _0x2c7977['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x36918]['Size'] + '\x22]'), await _0x2c7977['waitForTimeout'](0x320), await _0x2c7977['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x36918]['Size'] + '\x22]');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36918 + 0x1) + '\x20:\x20Size\x20not\x20found')), _0x42be24[0x0]['title'] = 'Failed\x20entry', _0x42be24[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x204374);
        continue;
      }
      await _0x2c7977['waitForTimeout'](0x258), await _0x2c7977['type']('#raffle-instagram', '' + afew[_0x36918]['Follower'], { 'delay': 0x64 }), await _0x2c7977['waitForTimeout'](0x384), await _0x2c7977['click']('#raffle-terms'), await _0x2c7977['waitForTimeout'](0x384);
      const [_0x170daf] = await _0x2c7977['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0x170daf && await _0x170daf['click']();
      ;
      await _0x2c7977['waitForTimeout'](0xbb8), await _0x2c7977['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36918 + 0x1) + '\x20:\x20Filling\x20Information'), _0x5ae672 == 'sec' ? await _0x2c7977['type']('#checkout_email', '' + afew[_0x36918]['FirstName'] + afew[_0x36918]['LastName'] + settings['catchall']) : await _0x2c7977['type']('#checkout_email', '' + afew[_0x36918]['Email']), await _0x2c7977['waitForTimeout'](0x258), await _0x2c7977['select']('#checkout_shipping_address_country', '' + afew[_0x36918]['Country']), await _0x2c7977['waitForTimeout'](0x258), await _0x2c7977['type']('#checkout_shipping_address_first_name', '' + afew[_0x36918]['FirstName']), await _0x2c7977['waitForTimeout'](0x320), await _0x2c7977['type']('#checkout_shipping_address_last_name', '' + afew[_0x36918]['LastName']), await _0x2c7977['waitForTimeout'](0x2bc), await _0x2c7977['type']('#checkout_shipping_address_address1', '' + afew[_0x36918]['Address1']), await _0x2c7977['waitForTimeout'](0x2bc), await _0x2c7977['type']('#checkout_shipping_address_address2', '' + afew[_0x36918]['Address2']), await _0x2c7977['waitForTimeout'](0x2bc), await _0x2c7977['type']('#checkout_shipping_address_zip', '' + afew[_0x36918]['Postcode']), await _0x2c7977['waitForTimeout'](0x2bc), await _0x2c7977['type']('#checkout_shipping_address_city', '' + afew[_0x36918]['City']), await _0x2c7977['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36918 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x2c7977['click']('#continue_button'), await _0x2c7977['waitForTimeout'](0x1194), await _0x2c7977['waitForSelector']('#continue_button'), await _0x2c7977['click']('#continue_button'), await _0x2c7977['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36918 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x2c7977['waitForSelector']('#continue_button'), await _0x2c7977['click']('#continue_button'), await _0x2c7977['waitForTimeout'](0x1194), await _0x2c7977['waitForSelector']('#continue_button'), await _0x2c7977['click']('#continue_button'), await _0x2c7977['waitForTimeout'](0x2af8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36918 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x204374);
    } catch (_0x1e3443) {
      _0x1e3443 instanceof TimeoutError && console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36918 + 0x1) + '\x20:\x20Proxy\x20banned,\x20next\x20task..')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36918 + 0x1) + '\x20:\x20' + _0x1e3443)), _0x42be24[0x0]['title'] = 'Failed\x20entry', _0x42be24[0x0]['description'] = '' + _0x1e3443, await sendWebhook(errorWH, _0x204374);
    } finally {
      _0x185375 && _0x185375['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function kickzAcc(_0x4485cf) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x1686df = 0x0; _0x1686df < kickz['length']; _0x1686df++) {
    if (kickz[_0x1686df]['Email'] == '' || kickz[_0x1686df]['Password'] == '' || kickz[_0x1686df]['FirstName'] == '' || kickz[_0x1686df]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x49a2e6 = getProxy()[_0x1686df]['split'](':');
    const _0x23af93 = await puppeteer['launch']({
      'headless': ![],
      'args': [
        '--proxy-server=' + _0x49a2e6[0x0] + ':' + _0x49a2e6[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0xacf59b = await _0x23af93['newPage']();
      await _0xacf59b['authenticate']({
        'username': '' + _0x49a2e6[0x2],
        'password': '' + _0x49a2e6[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20Getting\x20Session'), await _0xacf59b['setRequestInterception'](!![]), _0xacf59b['on']('request', _0x1dab92 => {
        _0x1dab92['resourceType']() === 'image' || _0x1dab92['resourceType']() === 'font' || _0x1dab92['resourceType']() === 'media' ? _0x1dab92['abort']() : _0x1dab92['continue']();
      }), await _0xacf59b['goto'](_0x4485cf), await delay(0xbb8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20Starting\x20Registration'), await _0xacf59b['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xacf59b['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xacf59b['waitForSelector']('#button-register'), await _0xacf59b['click']('#button-register'), await _0xacf59b['waitForSelector']('#customer_salutation'), await _0xacf59b['select']('#customer_salutation', 'mr'), await delay(0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xacf59b['waitForSelector']('#customer_firstname'), await _0xacf59b['type']('#customer_firstname', '' + kickz[_0x1686df]['FirstName']), await delay(0x352), await _0xacf59b['waitForSelector']('#customer_lastname'), await _0xacf59b['type']('#customer_lastname', '' + kickz[_0x1686df]['LastName']), await delay(0x352), await _0xacf59b['type']('#email-input', '' + kickz[_0x1686df]['Email']), await delay(0x352), await _0xacf59b['type']('#email-confirm-input', '' + kickz[_0x1686df]['Email']), await delay(0x352), await _0xacf59b['type']('#register-password', '' + kickz[_0x1686df]['Password']), await delay(0x352), await _0xacf59b['type']('#password-confirm', '' + kickz[_0x1686df]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0xacf59b['click']('#consent'), await delay(0x1f4);
      const _0x3fc25c = await _0xacf59b['$']('div.inputErrorMsg.b-form_section-message');
      if (_0x3fc25c) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
        continue;
      }
      await _0xacf59b['click']('#buttonRegister'), await _0xacf59b['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20Account\x20' + kickz[_0x1686df]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
      async function _0x584c1c() {
        console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
        var _0x41cd85 = await prompt['get']('Code');
        return _0x41cd85['Code'];
      }
      ;
      code = await _0x584c1c(), delay(0x320), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20Verifying..'), await _0xacf59b['type']('#verificationCode', code), await delay(0x1f4), await _0xacf59b['click']('#buttonVerify'), await delay(0x190), await _0xacf59b['click']('#buttonVerify'), await delay(0x3e8);
      try {
        await _0xacf59b['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20Account\x20' + kickz[_0x1686df]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + kickz[_0x1686df]['Email'] + ',' + kickz[_0x1686df]['Password'] + ','), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20Account\x20' + kickz[_0x1686df]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
      }
    } catch (_0x202840) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1686df + 0x1) + '\x20:\x20' + _0x202840));
    } finally {
      _0x23af93 && _0x23af93['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
}
async function oqiumFunction(_0x50a0f6, _0x5dfcdb) {
  var _0x44bf71 = [{
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
        'value': '' + oqium[_0x50a0f6]['Size']
      },
      {
        'name': 'Delay',
        'value': '' + settings['delay']
      }
    ]
  }];
  const _0x53c847 = { 'embeds': _0x44bf71 };
  var _0x334b11 = getProxy()[_0x50a0f6]['split'](':'), _0x448762 = modules[taskModule]['data'];
  _0x5dfcdb == 'exp' ? _0x448762['data']['attributes']['email'] = '' + oqium[_0x50a0f6]['FirstName'] + oqium[_0x50a0f6]['LastName'] + settings['catchall'] : _0x448762['data']['attributes']['email'] = '' + oqium[_0x50a0f6]['Email'];
  _0x448762['data']['attributes']['properties']['$first_name'] = '' + oqium[_0x50a0f6]['FirstName'], _0x448762['data']['attributes']['properties']['$last_name'] = '' + oqium[_0x50a0f6]['LastName'], _0x448762['data']['attributes']['properties']['$address1'] = oqium[_0x50a0f6]['Address1'] + '\x20' + oqium[_0x50a0f6]['Address2'], _0x448762['data']['attributes']['properties']['$zip'] = '' + oqium[_0x50a0f6]['Zip'], _0x448762['data']['attributes']['properties']['$city'] = '' + oqium[_0x50a0f6]['City'], _0x448762['data']['attributes']['properties']['$country'] = '' + oqium[_0x50a0f6]['Country'], _0x448762['data']['attributes']['properties']['Size'] = '' + oqium[_0x50a0f6]['Size'], _0x448762['data']['attributes']['properties']['$phone_number'] = '' + oqium[_0x50a0f6]['Phone'], _0x448762['data']['attributes']['properties']['Instagram\x20Account'] = '' + oqium[_0x50a0f6]['Follower'];
  var _0x35c304 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x448762),
    'proxy': 'http://' + _0x334b11[0x2] + ':' + _0x334b11[0x3] + '@' + _0x334b11[0x0] + ':' + _0x334b11[0x1]
  };
  return _0x5dfcdb === 'ver' && (_0x35c304['method'] = 'GET'), new Promise(function (_0x1addbf, _0x36960f) {
    callback = async (_0x39c5d, _0xeda100, _0x4cde15) => {
      !_0x39c5d && _0xeda100['statusCode'] == 0xca || !_0x39c5d && _0xeda100['statusCode'] == 0xc8 ? (await sendWebhook(succesWH, _0x53c847), _0x1addbf(console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x50a0f6 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x44bf71[0x0]['title'] = 'Failed\x20entry', _0x44bf71[0x0]['description'] = '' + JSON['stringify'](_0xeda100['statusCode']), await sendWebhook(errorWH, _0x53c847), _0x36960f(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x50a0f6 + 0x1) + ':\x20error\x20' + _0x39c5d + '\x20' + JSON['stringify'](_0xeda100['statusCode']))));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x50a0f6 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x448762['data']['attributes']['email']), request(_0x35c304, callback);
    } catch (_0x7111c0) {
      console['log'](getTime() + '\x20Task\x20' + (_0x50a0f6 + 0x1) + ':\x20' + _0x7111c0);
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
      async function _0x2bd464() {
        await delay(0x320), console['clear'](), console['log']('Welcome\x20to\x20JRaffles();\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
        for (var _0x2bc885 = 0x0; _0x2bc885 < modules['length']; _0x2bc885++) {
          console['log']('\x20(' + _0x2bc885 + ')\x20' + modules[_0x2bc885]['name']);
        }
        ;
        console['log']('\x20(' + modules['length'] + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
        if (taskModule == 0x0)
          await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct]);
        else {
          if (taskModule == 0x1) {
            console['log']('Starting\x20' + maha['length'] + '\x20MAHA\x20Tasks');
            for (var _0x2a199f = 0x0; _0x2a199f < maha['length']; _0x2a199f++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2a199f + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2a199f), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x2) {
              console['log']('Starting\x20' + maha['length'] + '\x20' + chalk['yellow']('Experimental') + '\x20MAHA\x20Tasks');
              for (var _0x2a199f = 0x0; _0x2a199f < maha['length']; _0x2a199f++) {
                console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2a199f + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2a199f, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
            } else {
              if (taskModule == 0x3) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x2a199f = 0x0; _0x2a199f < links['length']; _0x2a199f++) {
                  modules[taskModule]['url'] = links[_0x2a199f], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2a199f + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2a199f, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
              } else {
                if (taskModule == 0x4)
                  await footshopModule(), await delay(0x1388);
                else {
                  if (taskModule == 0x5) {
                    console['log']('Starting\x20\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                    for (var _0x2a199f = 0x0; _0x2a199f < oqium['length']; _0x2a199f++) {
                      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2a199f + 0x1) + ':\x20Getting\x20Session');
                      try {
                        await oqiumFunction(_0x2a199f, 'exp');
                      } catch {
                        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2a199f + 0x1) + ':\x20Task\x20failed'));
                      }
                      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                    }
                  } else {
                    if (taskModule == 0x6) {
                      console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                      for (var _0x2a199f = 0x0; _0x2a199f < links['length']; _0x2a199f++) {
                        modules[taskModule]['url'] = links[_0x2a199f], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2a199f + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2a199f, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                      }
                    } else {
                      if (taskModule == modules['length'])
                        return console['log']('Reloading\x20settings'), await loadSettings(), _0x2bd464();
                      else {
                        if (taskModule == 0x45) {
                          modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                          var _0x392f54 = await getPassword();
                          _0x392f54 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
      await _0x2bd464();
    } catch (_0x4cb892) {
      return console['log'](_0x4cb892), await delay(0x3a98);
    }
}
;
setTitle('JRaffles'), loadSettings(), main();