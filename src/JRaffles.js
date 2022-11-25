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
  const _0x314ba2 = fs['readFileSync']('../tasks/afew.csv', 'utf8');
  afew = Papa['parse'](_0x314ba2, { 'header': !![] })['data'];
  const _0x3c1b9a = fs['readFileSync']('../tasks/maha.csv', 'utf-8');
  maha = Papa['parse'](_0x3c1b9a, { 'header': !![] })['data'];
  const _0x18b7c2 = fs['readFileSync']('../tasks/footshop.csv', 'utf-8');
  footshop = Papa['parse'](_0x18b7c2, { 'header': !![] })['data'];
  const _0x45f089 = fs['readFileSync']('../tasks/bstn.csv', 'utf-8');
  bstn = Papa['parse'](_0x45f089, { 'header': !![] })['data'];
  const _0x5127ce = fs['readFileSync']('../tasks/kickz.csv', 'utf-8');
  kickz = Papa['parse'](_0x5127ce, { 'header': !![] })['data'];
  const _0x3023d3 = fs['readFileSync']('../tasks/oqium.csv', 'utf-8');
  oqium = Papa['parse'](_0x3023d3, { 'header': !![] })['data'], settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x22cb0e => new Promise(_0x43474e => setTimeout(_0x43474e, _0x22cb0e));
async function getLicense(_0x37b11e) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x37b11e, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x5554df => _0x5554df['data'])['catch'](() => null);
}
;
async function checkLicense(_0x17342a) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x3d832b = await getLicense(_0x17342a);
  username = JSON['stringify'](_0x3d832b['user']['username']);
  if (!_0x3d832b)
    return console['log']('License\x20not\x20found');
  if (!_0x3d832b['user'])
    return console['log']('License\x20not\x20bound');
  return _0x3d832b['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x3dfb11 = await prompt['get']('Module');
  return console['clear'](), _0x3dfb11['Module'];
}
;
async function getPassword() {
  var _0x235be1 = await prompt['get']('Password');
  return console['clear'](), _0x235be1['Password'];
}
;
async function getLinks() {
  var _0x42e5c6 = await prompt['get']('Links');
  return _0x42e5c6['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x19e442 = 0x0; _0x19e442 < afewProducts['length']; _0x19e442++) {
    console['log']('\x20(' + _0x19e442 + ')\x20' + afewProducts[_0x19e442]);
  }
  ;
  console['log']();
  let _0x117c3f = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x117c3f['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x5d80de = new Date(Date['now']())['toLocaleTimeString']();
  return _0x5d80de;
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
async function sendWebhook(_0x4c3a60, _0x672a19) {
  let _0x4d98f5 = { 'headers': { 'content-type': 'application/json' } };
  await axios['post'](_0x4c3a60, _0x672a19, _0x4d98f5);
}
function getProxy() {
  let _0x12c69d = proxyFile['split']('\x0a'), _0x43a7b0 = _0x12c69d['map']((_0x1a4871, _0x807347) => {
    sanatizeProxy = _0x1a4871['replace']('\x0d', '');
    if (_0x12c69d[_0x807347 + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x43a7b0;
}
;
async function afewScraper() {
  var _0x431bf1 = getProxy()[0x1]['split'](':');
  const _0x525cfa = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x431bf1[0x0] + ':' + _0x431bf1[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x201475 = await _0x525cfa['newPage']();
    await _0x201475['authenticate']({
      'username': '' + _0x431bf1[0x2],
      'password': '' + _0x431bf1[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x201475['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x201475['setRequestInterception'](!![]), _0x201475['on']('request', _0x33b2ad => {
      _0x33b2ad['resourceType']() === 'image' || _0x33b2ad['resourceType']() === 'font' || _0x33b2ad['resourceType']() === 'media' ? _0x33b2ad['abort']() : _0x33b2ad['continue']();
    }), await _0x201475['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x201475['waitForTimeout'](0xbb8), await _0x201475['waitForSelector']('.product-card');
    const _0x329412 = await _0x201475['$$eval']('a.product-card', _0x2cacce => {
      return _0x2cacce['map'](_0x1383cd => _0x1383cd['href']);
    });
    return afewProducts = _0x329412;
  } catch (_0x4230e0) {
    console['log']('\x20' + _0x4230e0);
  } finally {
    _0x525cfa['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x528ba8, _0x5de084) {
  var _0x44dc11 = getProxy()[_0x528ba8]['split'](':'), _0x3dd995 = modules[taskModule]['data'];
  _0x5de084 == 'exp' ? _0x3dd995['data']['attributes']['email'] = '' + maha[_0x528ba8]['FirstName'] + maha[_0x528ba8]['LastName'] + settings['catchall'] : _0x3dd995['data']['attributes']['email'] = '' + maha[_0x528ba8]['Email'];
  _0x3dd995['data']['attributes']['properties']['$first_name'] = '' + maha[_0x528ba8]['FirstName'], _0x3dd995['data']['attributes']['properties']['$last_name'] = '' + maha[_0x528ba8]['LastName'], _0x3dd995['data']['attributes']['properties']['$address1'] = maha[_0x528ba8]['Address1'] + '\x20' + maha[_0x528ba8]['Address2'], _0x3dd995['data']['attributes']['properties']['$zip'] = '' + maha[_0x528ba8]['Zip'], _0x3dd995['data']['attributes']['properties']['$city'] = '' + maha[_0x528ba8]['City'], _0x3dd995['data']['attributes']['properties']['$country'] = '' + maha[_0x528ba8]['Country'], _0x3dd995['data']['attributes']['properties']['Size'] = '' + maha[_0x528ba8]['Size'], _0x3dd995['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x528ba8]['Follower'];
  var _0x164fda = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x3dd995),
    'proxy': 'http://' + _0x44dc11[0x2] + ':' + _0x44dc11[0x3] + '@' + _0x44dc11[0x0] + ':' + _0x44dc11[0x1]
  };
  return _0x5de084 === 'ver' && (_0x164fda['method'] = 'GET'), new Promise(function (_0x3e908a, _0x43880d) {
    callback = async (_0xb88b67, _0x385682, _0x2cfc04) => {
      !_0xb88b67 && _0x385682['statusCode'] == 0xca || !_0xb88b67 && _0x385682['statusCode'] == 0xc8 ? _0x3e908a(console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x528ba8 + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x43880d(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x528ba8 + 0x1) + ':\x20error\x20' + _0xb88b67 + '\x20' + JSON['stringify'](_0x385682)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x528ba8 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3dd995['data']['attributes']['email']), request(_0x164fda, callback);
    } catch (_0x44f1f3) {
      console['log'](getTime() + '\x20Task\x20' + (_0x528ba8 + 0x1) + ':\x20' + _0x44f1f3);
    }
  });
}
;
async function footshopModule() {
  var _0x1efa36;
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x356ee7 = 0x0; _0x356ee7 < footshop['length']; _0x356ee7++) {
    if (footshop[_0x356ee7]['Email'] == '' || footshop[_0x356ee7]['FirstName'] == '' || footshop[_0x356ee7]['LastName'] == '' || footshop[_0x356ee7]['Country'] == '' || footshop[_0x356ee7]['Size'] == '' || footshop[_0x356ee7]['Address1'] == '' || footshop[_0x356ee7]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    async function _0x21d6da() {
      var _0x521595 = await axios['get']('https://releases.footshop.com/api/raffles/' + footshop[_0x356ee7]['Pid'])['then'](_0x1f2745 => _0x1f2745['data'])['catch'](() => null);
      let _0x566c81 = _0x521595['sizeSets']['Men']['sizes'];
      async function _0x391a50() {
        for (var _0x2b2728 = 0x0; _0x2b2728 < _0x521595['sizeSets']['Men']['sizes']['length']; _0x2b2728++) {
          if (_0x566c81[_0x2b2728]['eur'] == footshop[_0x356ee7]['Size'])
            return _0x1efa36 = _0x566c81[_0x2b2728]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
        }
        return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x20Size\x20' + footshop[_0x356ee7]['Size'] + '\x20not\x20found'), ![];
      }
      ;
      let _0x8b1324 = await _0x391a50();
      if (_0x8b1324 == ![])
        return ![];
    }
    let _0x114743 = await _0x21d6da();
    if (_0x114743 == ![])
      continue;
    if (footshop[_0x356ee7]['Email'] == '' || footshop[_0x356ee7]['FirstName'] == '' || footshop[_0x356ee7]['LastName'] == '' || footshop[_0x356ee7]['Country'] == '' || footshop[_0x356ee7]['Size'] == '' || footshop[_0x356ee7]['Address1'] == '' || footshop[_0x356ee7]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    const _0x4159a2 = 'https://releases.footshop.com/register/' + footshop[_0x356ee7]['Pid'] + '/Men/' + _0x1efa36;
    var _0xec09fa = getProxy()[_0x356ee7]['split'](':');
    const _0x3aaf03 = await puppeteer['launch']({
      'headless': ![],
      'args': ['--proxy-server=' + _0xec09fa[0x0] + ':' + _0xec09fa[0x1]]
    });
    try {
      const _0x52725c = await _0x3aaf03['newPage']();
      await _0x52725c['authenticate']({
        'username': '' + _0xec09fa[0x2],
        'password': '' + _0xec09fa[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x52725c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x52725c['setRequestInterception'](!![]), _0x52725c['on']('request', _0x2d8dcc => {
        _0x2d8dcc['resourceType']() === 'image' || _0x2d8dcc['resourceType']() === 'font' || _0x2d8dcc['resourceType']() === 'media' ? _0x2d8dcc['abort']() : _0x2d8dcc['continue']();
      }), await _0x52725c['goto']('' + _0x4159a2 + _0x1efa36), await _0x52725c['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x52725c['type']('input[name=\x22email\x22]', '' + footshop[_0x356ee7]['Email']), await delay(0x640), await _0x52725c['type']('input[name=\x22phone\x22]', '' + footshop[_0x356ee7]['Phone']), await delay(0x4b0), await _0x52725c['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
      try {
        await _0x52725c['type']('input[name=\x22firstName\x22]', '' + footshop[_0x356ee7]['FirstName']), await delay(0x258);
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
        continue;
      }
      await _0x52725c['type']('input[name=\x22lastName\x22]', '' + footshop[_0x356ee7]['LastName']), await delay(0xc8), await _0x52725c['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x356ee7]['Follower']), await delay(0x4b0), await _0x52725c['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x52725c['select']('select[name=\x22country\x22]', '' + footshop[_0x356ee7]['Country']), await delay(0x2bc), await _0x52725c['type']('input[name=\x22streetName\x22]', '' + footshop[_0x356ee7]['Address1']), await delay(0x258), await _0x52725c['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x356ee7]['HouseNumber'] + footshop[_0x356ee7]['Address2']), await delay(0xc8), await _0x52725c['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x356ee7]['Zip']), await delay(0x1f4), await _0x52725c['type']('input[name=\x22city\x22]', '' + footshop[_0x356ee7]['City']), await delay(0x4b0), await _0x52725c['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x52725c['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x52725c['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x52725c['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x52725c['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x52725c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0x52725c['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x356ee7]['CardNumber']), await delay(0x320), await _0x52725c['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x356ee7]['ExpiryDate']), await delay(0x226), await _0x52725c['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x356ee7]['CVV']), await delay(0x226), await _0x52725c['type']('input[name=\x22holderName\x22]', '' + footshop[_0x356ee7]['NameOnCard']), await delay(0x226), await _0x52725c['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x20Awaiting\x203DS');
      const _0x31c414 = _0x52725c['waitForSelector']('div.alert.alert-danger');
      _0x31c414 && console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x203DS\x20Failed'));
      try {
        await _0x52725c['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x203DS\x20Failed'));
      }
    } catch (_0x5c941d) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x356ee7 + 0x1) + '\x20:\x20' + _0x5c941d);
    } finally {
      _0x3aaf03['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x49e9d9, _0x5e884b) => {
  for (var _0x2dd5be = 0x0; _0x2dd5be < afew['length']; _0x2dd5be++) {
    var _0xdda023 = [{
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
          'value': '' + _0x49e9d9
        },
        {
          'name': 'Size',
          'value': '' + afew[_0x2dd5be]['Size']
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
    const _0x5e6cf9 = { 'embeds': _0xdda023 };
    if (afew[_0x2dd5be]['Email'] == '' || afew[_0x2dd5be]['FirstName'] == '' || afew[_0x2dd5be]['LastName'] == '' || afew[_0x2dd5be]['Country'] == '' || afew[_0x2dd5be]['Size'] == '' || afew[_0x2dd5be]['Address1'] == '' || afew[_0x2dd5be]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2dd5be + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x1b764f = getProxy()[_0x2dd5be]['split'](':');
    const _0x252ded = await puppeteer['launch']({
      'headless': !![],
      'args': [
        '--proxy-server=' + _0x1b764f[0x0] + ':' + _0x1b764f[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x1bc387 = await _0x252ded['newPage']();
      await _0x1bc387['setDefaultNavigationTimeout'](0x1d4c0), await _0x1bc387['authenticate']({
        'username': '' + _0x1b764f[0x2],
        'password': '' + _0x1b764f[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2dd5be + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1bc387['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1bc387['setRequestInterception'](!![]), _0x1bc387['on']('request', _0x3447f2 => {
        _0x3447f2['resourceType']() === 'image' || _0x3447f2['resourceType']() === 'font' || _0x3447f2['resourceType']() === 'media' ? _0x3447f2['abort']() : _0x3447f2['continue']();
      }), await _0x1bc387['goto'](_0x49e9d9), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2dd5be + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x1bc387['waitForTimeout'](0xfa0);
      try {
        await _0x1bc387['waitForSelector']('#onetrust-accept-btn-handler', { 'timeout': 0x1d4c0 });
      } catch (_0xc54278) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2dd5be + 0x1) + '\x20:\x20Proxy\x20error,\x20retrying..')), _0xdda023[0x0]['title'] = 'Failed\x20entry', _0xdda023[0x0]['description'] = 'Proxy\x20error', await sendWebhook(errorWH, _0x5e6cf9), _0x2dd5be = _0x2dd5be - 0x1;
        continue;
      }
      await _0x1bc387['evaluate'](() => {
        const _0x35d883 = document['querySelector']('#onetrust-accept-btn-handler');
        _0x35d883['click']();
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2dd5be + 0x1) + '\x20:\x20Cookies\x20received'), await _0x1bc387['waitForTimeout'](0x320), await _0x1bc387['hover']('span[class=\x22release-type\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2dd5be + 0x1) + '\x20:\x20Choosing\x20Size\x20' + afew[_0x2dd5be]['Size']);
      try {
        await _0x1bc387['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x2dd5be]['Size'] + '\x22]'), await _0x1bc387['waitForTimeout'](0x320), await _0x1bc387['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x2dd5be]['Size'] + '\x22]');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2dd5be + 0x1) + '\x20:\x20Size\x20not\x20found')), _0xdda023[0x0]['title'] = 'Failed\x20entry', _0xdda023[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x5e6cf9);
        continue;
      }
      await _0x1bc387['waitForTimeout'](0x258), await _0x1bc387['type']('#raffle-instagram', '' + afew[_0x2dd5be]['Follower'], { 'delay': 0x64 }), await _0x1bc387['waitForTimeout'](0x384), await _0x1bc387['click']('#raffle-terms'), await _0x1bc387['waitForTimeout'](0x384);
      const [_0x453fad] = await _0x1bc387['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0x453fad && await _0x453fad['click']();
      ;
      await _0x1bc387['waitForTimeout'](0xbb8), await _0x1bc387['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2dd5be + 0x1) + '\x20:\x20Filling\x20Information'), _0x5e884b == 'sec' ? await _0x1bc387['type']('#checkout_email', '' + afew[_0x2dd5be]['FirstName'] + afew[_0x2dd5be]['LastName'] + settings['catchall']) : await _0x1bc387['type']('#checkout_email', '' + afew[_0x2dd5be]['Email']), await _0x1bc387['waitForTimeout'](0x258), await _0x1bc387['select']('#checkout_shipping_address_country', '' + afew[_0x2dd5be]['Country']), await _0x1bc387['waitForTimeout'](0x258), await _0x1bc387['type']('#checkout_shipping_address_first_name', '' + afew[_0x2dd5be]['FirstName']), await _0x1bc387['waitForTimeout'](0x320), await _0x1bc387['type']('#checkout_shipping_address_last_name', '' + afew[_0x2dd5be]['LastName']), await _0x1bc387['waitForTimeout'](0x2bc), await _0x1bc387['type']('#checkout_shipping_address_address1', '' + afew[_0x2dd5be]['Address1']), await _0x1bc387['waitForTimeout'](0x2bc), await _0x1bc387['type']('#checkout_shipping_address_address2', '' + afew[_0x2dd5be]['Address2']), await _0x1bc387['waitForTimeout'](0x2bc), await _0x1bc387['type']('#checkout_shipping_address_zip', '' + afew[_0x2dd5be]['Postcode']), await _0x1bc387['waitForTimeout'](0x2bc), await _0x1bc387['type']('#checkout_shipping_address_city', '' + afew[_0x2dd5be]['City']), await _0x1bc387['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2dd5be + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x1bc387['click']('#continue_button'), await _0x1bc387['waitForTimeout'](0x1194), await _0x1bc387['waitForSelector']('#continue_button'), await _0x1bc387['click']('#continue_button'), await _0x1bc387['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2dd5be + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1bc387['waitForSelector']('#continue_button'), await _0x1bc387['click']('#continue_button'), await _0x1bc387['waitForTimeout'](0x1194), await _0x1bc387['waitForSelector']('#continue_button'), await _0x1bc387['click']('#continue_button'), await _0x1bc387['waitForTimeout'](0x2af8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2dd5be + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x5e6cf9);
    } catch (_0x33bbed) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2dd5be + 0x1) + '\x20:\x20' + _0x33bbed)), _0xdda023[0x0]['title'] = 'Failed\x20entry', _0xdda023[0x0]['description'] = '' + _0x33bbed, await sendWebhook(errorWH, _0x5e6cf9);
    } finally {
      _0x252ded && _0x252ded['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function kickzAcc(_0x1a245e) {
  puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x59dae5 = 0x0; _0x59dae5 < kickz['length']; _0x59dae5++) {
    if (kickz[_0x59dae5]['Email'] == '' || kickz[_0x59dae5]['Password'] == '' || kickz[_0x59dae5]['FirstName'] == '' || kickz[_0x59dae5]['LastName'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x35cd85 = getProxy()[_0x59dae5]['split'](':');
    const _0x196931 = await puppeteer['launch']({
      'headless': ![],
      'args': [
        '--proxy-server=' + _0x35cd85[0x0] + ':' + _0x35cd85[0x1],
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });
    try {
      const _0x580b73 = await _0x196931['newPage']();
      await _0x580b73['authenticate']({
        'username': '' + _0x35cd85[0x2],
        'password': '' + _0x35cd85[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x580b73['setRequestInterception'](!![]), _0x580b73['on']('request', _0x421913 => {
        _0x421913['resourceType']() === 'image' || _0x421913['resourceType']() === 'font' || _0x421913['resourceType']() === 'media' ? _0x421913['abort']() : _0x421913['continue']();
      }), await _0x580b73['goto'](_0x1a245e), await delay(0xbb8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x580b73['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x580b73['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x580b73['waitForSelector']('#button-register'), await _0x580b73['click']('#button-register'), await _0x580b73['waitForSelector']('#customer_salutation'), await _0x580b73['select']('#customer_salutation', 'mr'), await delay(0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x580b73['waitForSelector']('#customer_firstname'), await _0x580b73['type']('#customer_firstname', '' + kickz[_0x59dae5]['FirstName']), await delay(0x352), await _0x580b73['waitForSelector']('#customer_lastname'), await _0x580b73['type']('#customer_lastname', '' + kickz[_0x59dae5]['LastName']), await delay(0x352), await _0x580b73['type']('#email-input', '' + kickz[_0x59dae5]['Email']), await delay(0x352), await _0x580b73['type']('#email-confirm-input', '' + kickz[_0x59dae5]['Email']), await delay(0x352), await _0x580b73['type']('#register-password', '' + kickz[_0x59dae5]['Password']), await delay(0x352), await _0x580b73['type']('#password-confirm', '' + kickz[_0x59dae5]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x580b73['click']('#consent'), await delay(0x1f4);
      const _0x4adf2e = await _0x580b73['$']('div.inputErrorMsg.b-form_section-message');
      if (_0x4adf2e) {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
        continue;
      }
      await _0x580b73['click']('#buttonRegister'), await _0x580b73['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x59dae5]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
      async function _0x2cb484() {
        console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
        var _0x2ee20a = await prompt['get']('Code');
        return _0x2ee20a['Code'];
      }
      ;
      code = await _0x2cb484(), delay(0x320), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20Verifying..'), await _0x580b73['type']('#verificationCode', code), await delay(0x1f4), await _0x580b73['click']('#buttonVerify'), await delay(0x190), await _0x580b73['click']('#buttonVerify'), await delay(0x3e8);
      try {
        await _0x580b73['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x59dae5]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + kickz[_0x59dae5]['Email'] + ',' + kickz[_0x59dae5]['Password'] + ','), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x59dae5]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
      } catch {
        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
      }
    } catch (_0x3940e5) {
      console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x59dae5 + 0x1) + '\x20:\x20' + _0x3940e5));
    } finally {
      _0x196931 && _0x196931['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
}
async function oqiumFunction(_0x39c40b, _0x5b91b2) {
  var _0x1a0026 = [{
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
        'value': '' + oqium[_0x39c40b]['Size']
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
  const _0x59fe98 = { 'embeds': _0x1a0026 };
  var _0x18e2d6 = getProxy()[_0x39c40b]['split'](':'), _0x3c0760 = modules[taskModule]['data'];
  _0x5b91b2 == 'exp' ? _0x3c0760['data']['attributes']['email'] = '' + oqium[_0x39c40b]['FirstName'] + oqium[_0x39c40b]['LastName'] + settings['catchall'] : _0x3c0760['data']['attributes']['email'] = '' + oqium[_0x39c40b]['Email'];
  _0x3c0760['data']['attributes']['properties']['$first_name'] = '' + oqium[_0x39c40b]['FirstName'], _0x3c0760['data']['attributes']['properties']['$last_name'] = '' + oqium[_0x39c40b]['LastName'], _0x3c0760['data']['attributes']['properties']['$address1'] = oqium[_0x39c40b]['Address1'] + '\x20' + oqium[_0x39c40b]['Address2'], _0x3c0760['data']['attributes']['properties']['$zip'] = '' + oqium[_0x39c40b]['Zip'], _0x3c0760['data']['attributes']['properties']['$city'] = '' + oqium[_0x39c40b]['City'], _0x3c0760['data']['attributes']['properties']['$country'] = '' + oqium[_0x39c40b]['Country'], _0x3c0760['data']['attributes']['properties']['Size'] = '' + oqium[_0x39c40b]['Size'], _0x3c0760['data']['attributes']['properties']['$phone_number'] = '' + oqium[_0x39c40b]['Phone'], _0x3c0760['data']['attributes']['properties']['Instagram\x20Account'] = '' + oqium[_0x39c40b]['Follower'];
  var _0x5e8151 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x3c0760),
    'proxy': 'http://' + _0x18e2d6[0x2] + ':' + _0x18e2d6[0x3] + '@' + _0x18e2d6[0x0] + ':' + _0x18e2d6[0x1]
  };
  return _0x5b91b2 === 'ver' && (_0x5e8151['method'] = 'GET'), new Promise(function (_0x199851, _0x3007dc) {
    callback = async (_0x48530e, _0x4a8a44, _0x3aec1d) => {
      !_0x48530e && _0x4a8a44['statusCode'] == 0xca || !_0x48530e && _0x4a8a44['statusCode'] == 0xc8 ? (await sendWebhook(succesWH, _0x59fe98), _0x199851(console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x39c40b + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x1a0026[0x0]['title'] = 'Failed\x20entry', _0x1a0026[0x0]['description'] = '' + JSON['stringify'](_0x4a8a44['statusCode']), await sendWebhook(errorWH, _0x59fe98), _0x3007dc(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x39c40b + 0x1) + ':\x20error\x20' + _0x48530e + '\x20' + JSON['stringify'](_0x4a8a44['statusCode']))));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x39c40b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3c0760['data']['attributes']['email']), request(_0x5e8151, callback);
    } catch (_0x51f0ce) {
      console['log'](getTime() + '\x20Task\x20' + (_0x39c40b + 0x1) + ':\x20' + _0x51f0ce);
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
      async function _0x536fa5() {
        await delay(0x320), console['clear'](), console['log']('Welcome\x20to\x20JRaffles();\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
        for (var _0x478737 = 0x0; _0x478737 < modules['length']; _0x478737++) {
          console['log']('\x20(' + _0x478737 + ')\x20' + modules[_0x478737]['name']);
        }
        ;
        console['log']('\x20(' + modules['length'] + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
        if (taskModule == 0x0)
          await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct]);
        else {
          if (taskModule == 0x1) {
            console['log']('Starting\x20' + maha['length'] + '\x20MAHA\x20Tasks');
            for (var _0x2d20b0 = 0x0; _0x2d20b0 < maha['length']; _0x2d20b0++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2d20b0 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2d20b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x2) {
              console['log']('Starting\x20' + maha['length'] + '\x20' + chalk['yellow']('Experimental') + '\x20MAHA\x20Tasks');
              for (var _0x2d20b0 = 0x0; _0x2d20b0 < maha['length']; _0x2d20b0++) {
                console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2d20b0 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2d20b0, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
              }
            } else {
              if (taskModule == 0x3) {
                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                for (var _0x2d20b0 = 0x0; _0x2d20b0 < links['length']; _0x2d20b0++) {
                  modules[taskModule]['url'] = links[_0x2d20b0], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2d20b0 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2d20b0, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                }
              } else {
                if (taskModule == 0x4)
                  await footshopModule(), await delay(0x1388);
                else {
                  if (taskModule == 0x5) {
                    console['log']('Starting\x20\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                    for (var _0x2d20b0 = 0x0; _0x2d20b0 < oqium['length']; _0x2d20b0++) {
                      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2d20b0 + 0x1) + ':\x20Getting\x20Session');
                      try {
                        await oqiumFunction(_0x2d20b0, 'exp');
                      } catch {
                        console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2d20b0 + 0x1) + ':\x20Task\x20failed'));
                      }
                      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                    }
                  } else {
                    if (taskModule == 0x6) {
                      console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                      for (var _0x2d20b0 = 0x0; _0x2d20b0 < links['length']; _0x2d20b0++) {
                        modules[taskModule]['url'] = links[_0x2d20b0], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2d20b0 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2d20b0, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                      }
                    } else {
                      if (taskModule == modules['length'])
                        return console['log']('Reloading\x20settings'), await loadSettings(), _0x536fa5();
                      else {
                        if (taskModule == 0x45) {
                          modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                          var _0x1ef25c = await getPassword();
                          _0x1ef25c == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
      await _0x536fa5();
    } catch (_0x10c12e) {
      return console['log'](_0x10c12e), await delay(0x3a98);
    }
}
;
setTitle('JRaffles'), loadSettings(), main();