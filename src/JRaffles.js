const puppeteer = require('puppeteer-extra'), RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha'), fs = require('fs'), axios = require('axios'), Papa = require('papaparse'), request = require('request'), proxyFile = fs['readFileSync']('../proxies.txt', 'utf-8');
var prompt = require('prompt');
const j = request['jar'](), settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), package = JSON['parse'](fs['readFileSync']('package.json', 'utf-8')), version = package['version'], licenseKey = settings['licenseKey'], API_KEY = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
var catchall = settings['catchall'];
let afew = [], maha = [], footshop = [], auth = ![];
const AutoGitUpdate = require('auto-git-update'), config = {
  'repository': 'https://github.com/Jarno97/JRafflesBot',
  'branch': 'main',
  'fromReleases': ![],
  'tempLocation': 'C:/temp/jraffles',
  'ignoreFiles': [
    '../settings.json',
    '../proxies.txt',
    '../tasks/maha.csv',
    '../tasks/footshop.csv',
    '../tasks/afew.csv'
  ],
  'exitOnComplete': ![]
}, updater = new AutoGitUpdate(config);
let testValues, afewProducts = [], afewProduct;
const delay = _0x4a570b => new Promise(_0x167ebe => setTimeout(_0x167ebe, _0x4a570b));
async function getLicense(_0x4837e7) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x4837e7, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x14ce57 => _0x14ce57['data'])['catch'](() => null);
}
;
async function checkLicense(_0x1dd24a) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x5574c0 = await getLicense(_0x1dd24a);
  if (!_0x5574c0)
    return console['log']('License\x20not\x20found');
  if (!_0x5574c0['user'])
    return console['log']('License\x20not\x20bound');
  return _0x5574c0['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x325f92 = await prompt['get']('Module');
  return console['clear'](), _0x325f92['Module'];
}
;
async function getPassword() {
  var _0x571aa2 = await prompt['get']('Password');
  return console['clear'](), _0x571aa2['Password'];
}
;
async function getLinks() {
  var _0x48642c = await prompt['get']('Links');
  return _0x48642c['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x2149e9 = 0x0; _0x2149e9 < afewProducts['length']; _0x2149e9++) {
    console['log']('\x20(' + _0x2149e9 + ')\x20' + afewProducts[_0x2149e9]);
  }
  ;
  let _0x46241c = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x46241c['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x144749 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x144749;
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
  { 'name': 'AFEW\x20SECRET' }
], afewCSV = fs['readFileSync']('../tasks/afew.csv', 'utf8');
afew = Papa['parse'](afewCSV, { 'header': !![] })['data'];
const mahaCSV = fs['readFileSync']('../tasks/maha.csv', 'utf-8');
maha = Papa['parse'](mahaCSV, { 'header': !![] })['data'];
const footshopCSV = fs['readFileSync']('../tasks/footshop.csv', 'utf-8');
footshop = Papa['parse'](footshopCSV, { 'header': !![] })['data'];
function getProxy() {
  let _0xcc001a = proxyFile['split']('\x0a'), _0x417c31 = _0xcc001a['map']((_0xc92607, _0x1ea76c) => {
    sanatizeProxy = _0xc92607['replace']('\x0d', '');
    if (_0xcc001a[_0x1ea76c + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x417c31;
}
;
async function afewScraper() {
  var _0x1527b3 = getProxy()[0x1]['split'](':');
  const _0x1de10f = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x1527b3[0x0] + ':' + _0x1527b3[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x39438c = await _0x1de10f['newPage']();
    await _0x39438c['authenticate']({
      'username': '' + _0x1527b3[0x2],
      'password': '' + _0x1527b3[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x39438c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x39438c['setRequestInterception'](!![]), _0x39438c['on']('request', _0xd65e71 => {
      _0xd65e71['resourceType']() === 'image' || _0xd65e71['resourceType']() === 'font' || _0xd65e71['resourceType']() === 'media' ? _0xd65e71['abort']() : _0xd65e71['continue']();
    }), await _0x39438c['goto']('https://de.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x39438c['waitForTimeout'](0xbb8), await _0x39438c['waitForSelector']('.product-card');
    const _0x5d4885 = await _0x39438c['$$eval']('a.product-card', _0x146eb9 => {
      return _0x146eb9['map'](_0x5f395f => _0x5f395f['href']);
    });
    return afewProducts = _0x5d4885;
  } catch (_0x4d6c22) {
    console['log']('\x20' + _0x4d6c22);
  } finally {
    _0x1de10f['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x536819, _0x2d9fff) {
  var _0x47e98c = getProxy()[_0x536819]['split'](':'), _0x1746bb = modules[taskModule]['data'];
  _0x2d9fff == 'exp' ? _0x1746bb['data']['attributes']['email'] = '' + maha[_0x536819]['FirstName'] + maha[_0x536819]['LastName'] + catchall : _0x1746bb['data']['attributes']['email'] = '' + maha[_0x536819]['Email'];
  _0x1746bb['data']['attributes']['properties']['$first_name'] = '' + maha[_0x536819]['FirstName'], _0x1746bb['data']['attributes']['properties']['$last_name'] = '' + maha[_0x536819]['LastName'], _0x1746bb['data']['attributes']['properties']['$address1'] = maha[_0x536819]['Address1'] + '\x20' + maha[_0x536819]['Address2'], _0x1746bb['data']['attributes']['properties']['$zip'] = '' + maha[_0x536819]['Zip'], _0x1746bb['data']['attributes']['properties']['$city'] = '' + maha[_0x536819]['City'], _0x1746bb['data']['attributes']['properties']['$country'] = '' + maha[_0x536819]['Country'], _0x1746bb['data']['attributes']['properties']['Size'] = '' + maha[_0x536819]['Size'], _0x1746bb['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x536819]['Follower'];
  var _0x340589 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x1746bb),
    'proxy': 'http://' + _0x47e98c[0x2] + ':' + _0x47e98c[0x3] + '@' + _0x47e98c[0x0] + ':' + _0x47e98c[0x1]
  };
  return _0x2d9fff === 'ver' && (_0x340589['method'] = 'GET'), new Promise(function (_0x4822c5, _0x359401) {
    callback = async (_0xe0ecb1, _0x227447, _0x13cd71) => {
      !_0xe0ecb1 && _0x227447['statusCode'] == 0xca || !_0xe0ecb1 && _0x227447['statusCode'] == 0xc8 ? _0x4822c5(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x536819 + 0x1) + ':\x20Raffle\x20Entered!')) : _0x359401(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x536819 + 0x1) + ':\x20error\x20' + _0xe0ecb1 + '\x20' + JSON['stringify'](_0x227447)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x536819 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1746bb['data']['attributes']['email']), request(_0x340589, callback);
    } catch (_0x419b0a) {
      console['log'](getTime() + '\x20Task\x20' + (_0x536819 + 0x1) + ':\x20' + _0x419b0a);
    }
  });
}
;
async function footshopModule(_0x2057d7) {
  var _0x3822b0;
  puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x304d23 = 0x0; _0x304d23 < footshop['length']; _0x304d23++) {
    async function _0x5a3b9b() {
      var _0x199f80 = await axios['get']('https://releases.footshop.com/api/raffles/dnbFe4QB3xHSyCfZuQE3')['then'](_0xc8fe68 => _0xc8fe68['data'])['catch'](() => null);
      let _0x233457 = _0x199f80['sizeSets']['Men']['sizes'];
      for (var _0x85869a = 0x0; _0x85869a < _0x199f80['sizeSets']['Men']['sizes']['length']; _0x85869a++) {
        if (_0x233457[_0x85869a]['eur'] == footshop[_0x304d23]['Size'])
          return _0x3822b0 = _0x233457[_0x85869a]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x304d23 + 0x1) + '\x20:\x20Found\x20SizePid');
      }
    }
    await _0x5a3b9b();
    if (footshop[_0x304d23]['Email'] == '' || footshop[_0x304d23]['FirstName'] == '' || footshop[_0x304d23]['LastName'] == '' || footshop[_0x304d23]['Country'] == '' || footshop[_0x304d23]['Size'] == '' || footshop[_0x304d23]['Address1'] == '' || footshop[_0x304d23]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x304d23 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x35980d = getProxy()[_0x304d23]['split'](':');
    const _0x4131b9 = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x35980d[0x0] + ':' + _0x35980d[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0xbe1c2a = await _0x4131b9['newPage']();
      await _0xbe1c2a['authenticate']({
        'username': '' + _0x35980d[0x2],
        'password': '' + _0x35980d[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x304d23 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xbe1c2a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xbe1c2a['setRequestInterception'](!![]), _0xbe1c2a['on']('request', _0x322cf6 => {
        _0x322cf6['resourceType']() === 'image' || _0x322cf6['resourceType']() === 'font' || _0x322cf6['resourceType']() === 'media' ? _0x322cf6['abort']() : _0x322cf6['continue']();
      }), await _0xbe1c2a['goto']('' + _0x2057d7 + _0x3822b0), await _0xbe1c2a['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x304d23 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0xbe1c2a['type']('input[name=\x22email\x22]', '' + footshop[_0x304d23]['Email']), await delay(0x640), await _0xbe1c2a['type']('input[name=\x22phone\x22]', '' + footshop[_0x304d23]['Phone']), await delay(0x4b0), await _0xbe1c2a['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), await _0xbe1c2a['type']('input[name=\x22firstName\x22]', '' + footshop[_0x304d23]['FirstName']), await delay(0x258), await _0xbe1c2a['type']('input[name=\x22lastName\x22]', '' + footshop[_0x304d23]['LastName']), await delay(0xc8), await _0xbe1c2a['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x304d23]['Follower']), await delay(0x4b0), await _0xbe1c2a['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x304d23 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0xbe1c2a['select']('select[name=\x22country\x22]', '' + footshop[_0x304d23]['Country']), await delay(0x2bc), await _0xbe1c2a['type']('input[name=\x22streetName\x22]', '' + footshop[_0x304d23]['Address1']), await delay(0x258), await _0xbe1c2a['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x304d23]['Address2']), await delay(0xc8), await _0xbe1c2a['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x304d23]['Zip']), await delay(0x1f4), await _0xbe1c2a['type']('input[name=\x22city\x22]', '' + footshop[_0x304d23]['City']), await delay(0x4b0), await _0xbe1c2a['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0xbe1c2a['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x304d23 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0xbe1c2a['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x304d23 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0xbe1c2a['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x304d23 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0xbe1c2a['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xbe1c2a['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0xbe1c2a['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x304d23]['CardNumber']), await delay(0x320), await _0xbe1c2a['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x304d23]['ExpiryDate']), await delay(0x226), await _0xbe1c2a['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x304d23]['CVV']), await delay(0x226), await _0xbe1c2a['type']('input[name=\x22holderName\x22]', '' + footshop[_0x304d23]['NameOnCard']), await delay(0x226), await _0xbe1c2a['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x304d23 + 0x1) + '\x20:\x20Awaiting\x203DS'), await _0xbe1c2a['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x304d23 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x52427a) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x304d23 + 0x1) + '\x20:\x20' + _0x52427a);
    } finally {
      _0x4131b9['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x3fac40, _0x499ac3) => {
  for (var _0x421e3c = 0x0; _0x421e3c < afew['length']; _0x421e3c++) {
    if (afew[_0x421e3c]['Email'] == '' || afew[_0x421e3c]['FirstName'] == '' || afew[_0x421e3c]['LastName'] == '' || afew[_0x421e3c]['Country'] == '' || afew[_0x421e3c]['Size'] == '' || afew[_0x421e3c]['Address1'] == '' || afew[_0x421e3c]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x421e3c + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x62af0f = getProxy()[_0x421e3c]['split'](':');
    const _0x1d377c = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x62af0f[0x0] + ':' + _0x62af0f[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x1b3a91 = await _0x1d377c['newPage']();
      await _0x1b3a91['authenticate']({
        'username': '' + _0x62af0f[0x2],
        'password': '' + _0x62af0f[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x421e3c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1b3a91['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1b3a91['setRequestInterception'](!![]), _0x1b3a91['on']('request', _0xea903c => {
        _0xea903c['resourceType']() === 'image' || _0xea903c['resourceType']() === 'font' || _0xea903c['resourceType']() === 'media' ? _0xea903c['abort']() : _0xea903c['continue']();
      }), await _0x1b3a91['goto'](_0x3fac40), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x421e3c + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x1b3a91['waitForTimeout'](0xfa0);
      const [_0xa19c60] = await _0x1b3a91['$x']('//button[contains(.,\x20\x27Alle\x27)]');
      _0xa19c60 && await _0xa19c60['click']();
      await _0x1b3a91['waitForTimeout'](0x320), await _0x1b3a91['hover']('span[class=\x22release-type\x22]'), await _0x1b3a91['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x421e3c]['Size'] + '\x22]'), await _0x1b3a91['waitForTimeout'](0x320), await _0x1b3a91['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x421e3c]['Size'] + '\x22]'), await _0x1b3a91['waitForTimeout'](0x258), await _0x1b3a91['type']('#raffle-instagram', '' + afew[_0x421e3c]['Follower'], { 'delay': 0x64 }), await _0x1b3a91['waitForTimeout'](0x384), await _0x1b3a91['click']('#raffle-terms'), await _0x1b3a91['waitForTimeout'](0x384);
      const [_0x386f70] = await _0x1b3a91['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0x386f70 && await _0x386f70['click']();
      ;
      await _0x1b3a91['waitForTimeout'](0xbb8), await _0x1b3a91['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x421e3c + 0x1) + '\x20:\x20Filling\x20Information'), _0x499ac3 == 'sec' ? await _0x1b3a91['type']('#checkout_email', '' + afew[_0x421e3c]['FirstName'] + afew[_0x421e3c]['LastName'] + settings['catchall']) : await _0x1b3a91['type']('#checkout_email', '' + afew[_0x421e3c]['Email']), await _0x1b3a91['waitForTimeout'](0x258), await _0x1b3a91['select']('#checkout_shipping_address_country', '' + afew[_0x421e3c]['Country']), await _0x1b3a91['waitForTimeout'](0x258), await _0x1b3a91['type']('#checkout_shipping_address_first_name', '' + afew[_0x421e3c]['FirstName']), await _0x1b3a91['waitForTimeout'](0x320), await _0x1b3a91['type']('#checkout_shipping_address_last_name', '' + afew[_0x421e3c]['LastName']), await _0x1b3a91['waitForTimeout'](0x2bc), await _0x1b3a91['type']('#checkout_shipping_address_address1', '' + afew[_0x421e3c]['Address1']), await _0x1b3a91['waitForTimeout'](0x2bc), await _0x1b3a91['type']('#checkout_shipping_address_address2', '' + afew[_0x421e3c]['Address2']), await _0x1b3a91['waitForTimeout'](0x2bc), await _0x1b3a91['type']('#checkout_shipping_address_zip', '' + afew[_0x421e3c]['Postcode']), await _0x1b3a91['waitForTimeout'](0x2bc), await _0x1b3a91['type']('#checkout_shipping_address_city', '' + afew[_0x421e3c]['City']), await _0x1b3a91['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x421e3c + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x1b3a91['click']('#continue_button'), await _0x1b3a91['waitForTimeout'](0x1194), await _0x1b3a91['waitForSelector']('#continue_button'), await _0x1b3a91['click']('#continue_button'), await _0x1b3a91['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x421e3c + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1b3a91['waitForSelector']('#continue_button'), await _0x1b3a91['click']('#continue_button'), await _0x1b3a91['waitForTimeout'](0x1194), await _0x1b3a91['waitForSelector']('#continue_button'), await _0x1b3a91['click']('#continue_button'), await _0x1b3a91['waitForTimeout'](0x2af8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x421e3c + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x4951d0) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x421e3c + 0x1) + '\x20:\x20' + _0x4951d0);
    } finally {
      _0x1d377c['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
    }
  }
};
async function main() {
  console['clear'](), await updater['autoUpdate'](), console['clear']();
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
      await delay(0x320), console['clear'](), console['log']('Welcome\x20to\x20JRaffles();\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a\x0a\x20(0)\x20AFEW\x20Raffle\x0a\x20(1)\x20MAHA\x20Raffle\x0a\x20(2)\x20MAHA\x20Raffle\x20Experimental\x0a\x20(3)\x20MAHA\x20Link\x20Verification\x0a\x20(4)\x20Footshop\x20Raffle\x0a'), taskModule = await getModule();
      if (taskModule == 0x0)
        await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct]);
      else {
        if (taskModule == 0x1) {
          console['log']('Starting\x20' + maha['length'] + '\x20MAHA\x20Tasks');
          for (var _0xfd2782 = 0x0; _0xfd2782 < maha['length']; _0xfd2782++) {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfd2782 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0xfd2782), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
          }
        } else {
          if (taskModule == 0x2) {
            console['log']('Starting\x20' + maha['length'] + '\x20Experimental\x20MAHA\x20Tasks');
            for (var _0xfd2782 = 0x0; _0xfd2782 < maha['length']; _0xfd2782++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfd2782 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0xfd2782, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x3) {
              console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
              for (var _0xfd2782 = 0x0; _0xfd2782 < links['length']; _0xfd2782++) {
                modules[taskModule]['url'] = links[_0xfd2782], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xfd2782 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0xfd2782, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
              }
            } else {
              if (taskModule == 0x4)
                await footshopModule('https://releases.footshop.com/register/dnbFe4QB3xHSyCfZuQE3/Men/');
              else {
                if (taskModule == 0x5) {
                  var _0x4141d2 = await getPassword();
                  _0x4141d2 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
                }
              }
            }
          }
        }
      }
    } catch (_0x107ac1) {
      return console['log'](_0x107ac1), await delay(0x3a98);
    }
}
;
main();