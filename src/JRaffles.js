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
  'exitOnComplete': ![]
}, updater = new AutoGitUpdate(config);
let testValues, afewProducts = [], afewProduct;
const delay = _0x1e2a8f => new Promise(_0x1e2fc2 => setTimeout(_0x1e2fc2, _0x1e2a8f));
async function getLicense(_0x4f88b0) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x4f88b0, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x2e1f21 => _0x2e1f21['data'])['catch'](() => null);
}
;
async function checkLicense(_0x1bb40a) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x791e96 = await getLicense(_0x1bb40a);
  if (!_0x791e96)
    return console['log']('License\x20not\x20found');
  if (!_0x791e96['user'])
    return console['log']('License\x20not\x20bound');
  return _0x791e96['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x28e062 = await prompt['get']('Module');
  return console['clear'](), _0x28e062['Module'];
}
;
async function getPassword() {
  var _0x3b9d40 = await prompt['get']('Password');
  return console['clear'](), _0x3b9d40['Password'];
}
;
async function getLinks() {
  var _0x4cfeb6 = await prompt['get']('Links');
  return _0x4cfeb6['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0xd5a6b1 = 0x0; _0xd5a6b1 < afewProducts['length']; _0xd5a6b1++) {
    console['log']('\x20(' + _0xd5a6b1 + ')\x20' + afewProducts[_0xd5a6b1]);
  }
  ;
  let _0x40a1f0 = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x40a1f0['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x2339a2 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x2339a2;
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
  let _0x4863a7 = proxyFile['split']('\x0a'), _0x4c4120 = _0x4863a7['map']((_0x3f7bc7, _0x38b815) => {
    sanatizeProxy = _0x3f7bc7['replace']('\x0d', '');
    if (_0x4863a7[_0x38b815 + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x4c4120;
}
;
async function afewScraper() {
  var _0x51f27a = getProxy()[0x1]['split'](':');
  const _0x124b46 = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x51f27a[0x0] + ':' + _0x51f27a[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x4f65bd = await _0x124b46['newPage']();
    await _0x4f65bd['authenticate']({
      'username': '' + _0x51f27a[0x2],
      'password': '' + _0x51f27a[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x4f65bd['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4f65bd['setRequestInterception'](!![]), _0x4f65bd['on']('request', _0x31f9f1 => {
      _0x31f9f1['resourceType']() === 'image' || _0x31f9f1['resourceType']() === 'font' || _0x31f9f1['resourceType']() === 'media' ? _0x31f9f1['abort']() : _0x31f9f1['continue']();
    }), await _0x4f65bd['goto']('https://de.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x4f65bd['waitForTimeout'](0xbb8), await _0x4f65bd['waitForSelector']('.product-card');
    const _0x41f897 = await _0x4f65bd['$$eval']('a.product-card', _0x38a22d => {
      return _0x38a22d['map'](_0x19835e => _0x19835e['href']);
    });
    return afewProducts = _0x41f897;
  } catch (_0x206ddc) {
    console['log']('\x20' + _0x206ddc);
  } finally {
    _0x124b46['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x53e47a, _0x129ade) {
  var _0x3640c7 = getProxy()[_0x53e47a]['split'](':'), _0x3f7cbe = modules[taskModule]['data'];
  _0x129ade == 'exp' ? _0x3f7cbe['data']['attributes']['email'] = '' + maha[_0x53e47a]['FirstName'] + maha[_0x53e47a]['LastName'] + catchall : _0x3f7cbe['data']['attributes']['email'] = '' + maha[_0x53e47a]['Email'];
  _0x3f7cbe['data']['attributes']['properties']['$first_name'] = '' + maha[_0x53e47a]['FirstName'], _0x3f7cbe['data']['attributes']['properties']['$last_name'] = '' + maha[_0x53e47a]['LastName'], _0x3f7cbe['data']['attributes']['properties']['$address1'] = maha[_0x53e47a]['Address1'] + '\x20' + maha[_0x53e47a]['Address2'], _0x3f7cbe['data']['attributes']['properties']['$zip'] = '' + maha[_0x53e47a]['Zip'], _0x3f7cbe['data']['attributes']['properties']['$city'] = '' + maha[_0x53e47a]['City'], _0x3f7cbe['data']['attributes']['properties']['$country'] = '' + maha[_0x53e47a]['Country'], _0x3f7cbe['data']['attributes']['properties']['Size'] = '' + maha[_0x53e47a]['Size'], _0x3f7cbe['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x53e47a]['Follower'];
  var _0xb3219c = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x3f7cbe),
    'proxy': 'http://' + _0x3640c7[0x2] + ':' + _0x3640c7[0x3] + '@' + _0x3640c7[0x0] + ':' + _0x3640c7[0x1]
  };
  return _0x129ade === 'ver' && (_0xb3219c['method'] = 'GET'), new Promise(function (_0x35d186, _0x1e3597) {
    callback = async (_0x5b411b, _0x5f299e, _0x96d8bb) => {
      !_0x5b411b && _0x5f299e['statusCode'] == 0xca || !_0x5b411b && _0x5f299e['statusCode'] == 0xc8 ? _0x35d186(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x53e47a + 0x1) + ':\x20Raffle\x20Entered!')) : _0x1e3597(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x53e47a + 0x1) + ':\x20error\x20' + _0x5b411b + '\x20' + JSON['stringify'](_0x5f299e)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x53e47a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3f7cbe['data']['attributes']['email']), request(_0xb3219c, callback);
    } catch (_0x1b9921) {
      console['log'](getTime() + '\x20Task\x20' + (_0x53e47a + 0x1) + ':\x20' + _0x1b9921);
    }
  });
}
;
async function footshopModule(_0x1c5ff0) {
  var _0x389fc5;
  puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x2e8cb2 = 0x0; _0x2e8cb2 < footshop['length']; _0x2e8cb2++) {
    async function _0x497c8f() {
      var _0x2511fb = await axios['get']('https://releases.footshop.com/api/raffles/dnbFe4QB3xHSyCfZuQE3')['then'](_0x5ad567 => _0x5ad567['data'])['catch'](() => null);
      let _0x219f9f = _0x2511fb['sizeSets']['Men']['sizes'];
      for (var _0x1cbc6e = 0x0; _0x1cbc6e < _0x2511fb['sizeSets']['Men']['sizes']['length']; _0x1cbc6e++) {
        if (_0x219f9f[_0x1cbc6e]['eur'] == footshop[_0x2e8cb2]['Size'])
          return _0x389fc5 = _0x219f9f[_0x1cbc6e]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8cb2 + 0x1) + '\x20:\x20Found\x20SizePid');
      }
    }
    await _0x497c8f();
    if (footshop[_0x2e8cb2]['Email'] == '' || footshop[_0x2e8cb2]['FirstName'] == '' || footshop[_0x2e8cb2]['LastName'] == '' || footshop[_0x2e8cb2]['Country'] == '' || footshop[_0x2e8cb2]['Size'] == '' || footshop[_0x2e8cb2]['Address1'] == '' || footshop[_0x2e8cb2]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8cb2 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x335198 = getProxy()[_0x2e8cb2]['split'](':');
    const _0x17e9d4 = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x335198[0x0] + ':' + _0x335198[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x1754ef = await _0x17e9d4['newPage']();
      await _0x1754ef['authenticate']({
        'username': '' + _0x335198[0x2],
        'password': '' + _0x335198[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8cb2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1754ef['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1754ef['setRequestInterception'](!![]), _0x1754ef['on']('request', _0x45a22c => {
        _0x45a22c['resourceType']() === 'image' || _0x45a22c['resourceType']() === 'font' || _0x45a22c['resourceType']() === 'media' ? _0x45a22c['abort']() : _0x45a22c['continue']();
      }), await _0x1754ef['goto']('' + _0x1c5ff0 + _0x389fc5), await _0x1754ef['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8cb2 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1754ef['type']('input[name=\x22email\x22]', '' + footshop[_0x2e8cb2]['Email']), await delay(0x640), await _0x1754ef['type']('input[name=\x22phone\x22]', '' + footshop[_0x2e8cb2]['Phone']), await delay(0x4b0), await _0x1754ef['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), await _0x1754ef['type']('input[name=\x22firstName\x22]', '' + footshop[_0x2e8cb2]['FirstName']), await delay(0x258), await _0x1754ef['type']('input[name=\x22lastName\x22]', '' + footshop[_0x2e8cb2]['LastName']), await delay(0xc8), await _0x1754ef['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x2e8cb2]['Follower']), await delay(0x4b0), await _0x1754ef['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8cb2 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1754ef['select']('select[name=\x22country\x22]', '' + footshop[_0x2e8cb2]['Country']), await delay(0x2bc), await _0x1754ef['type']('input[name=\x22streetName\x22]', '' + footshop[_0x2e8cb2]['Address1']), await delay(0x258), await _0x1754ef['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x2e8cb2]['Address2']), await delay(0xc8), await _0x1754ef['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x2e8cb2]['Zip']), await delay(0x1f4), await _0x1754ef['type']('input[name=\x22city\x22]', '' + footshop[_0x2e8cb2]['City']), await delay(0x4b0), await _0x1754ef['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x1754ef['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8cb2 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1754ef['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8cb2 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x1754ef['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8cb2 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1754ef['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1754ef['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0x1754ef['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x2e8cb2]['CardNumber']), await delay(0x320), await _0x1754ef['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x2e8cb2]['ExpiryDate']), await delay(0x226), await _0x1754ef['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x2e8cb2]['CVV']), await delay(0x226), await _0x1754ef['type']('input[name=\x22holderName\x22]', '' + footshop[_0x2e8cb2]['NameOnCard']), await delay(0x226), await _0x1754ef['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8cb2 + 0x1) + '\x20:\x20Awaiting\x203DS'), await _0x1754ef['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8cb2 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x39516a) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2e8cb2 + 0x1) + '\x20:\x20' + _0x39516a);
    } finally {
      _0x17e9d4['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x4aaedc, _0x6fdd35) => {
  for (var _0xd8c09 = 0x0; _0xd8c09 < afew['length']; _0xd8c09++) {
    if (afew[_0xd8c09]['Email'] == '' || afew[_0xd8c09]['FirstName'] == '' || afew[_0xd8c09]['LastName'] == '' || afew[_0xd8c09]['Country'] == '' || afew[_0xd8c09]['Size'] == '' || afew[_0xd8c09]['Address1'] == '' || afew[_0xd8c09]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xd8c09 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x49fef9 = getProxy()[_0xd8c09]['split'](':');
    const _0x3387d4 = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x49fef9[0x0] + ':' + _0x49fef9[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x39bc46 = await _0x3387d4['newPage']();
      await _0x39bc46['authenticate']({
        'username': '' + _0x49fef9[0x2],
        'password': '' + _0x49fef9[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xd8c09 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x39bc46['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x39bc46['setRequestInterception'](!![]), _0x39bc46['on']('request', _0xc8f7ba => {
        _0xc8f7ba['resourceType']() === 'image' || _0xc8f7ba['resourceType']() === 'font' || _0xc8f7ba['resourceType']() === 'media' ? _0xc8f7ba['abort']() : _0xc8f7ba['continue']();
      }), await _0x39bc46['goto'](_0x4aaedc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xd8c09 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x39bc46['waitForTimeout'](0xfa0);
      const [_0xd0fc99] = await _0x39bc46['$x']('//button[contains(.,\x20\x27Alle\x27)]');
      _0xd0fc99 && await _0xd0fc99['click']();
      await _0x39bc46['waitForTimeout'](0x320), await _0x39bc46['hover']('span[class=\x22release-type\x22]'), await _0x39bc46['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0xd8c09]['Size'] + '\x22]'), await _0x39bc46['waitForTimeout'](0x320), await _0x39bc46['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0xd8c09]['Size'] + '\x22]'), await _0x39bc46['waitForTimeout'](0x258), await _0x39bc46['type']('#raffle-instagram', '' + afew[_0xd8c09]['Follower'], { 'delay': 0x64 }), await _0x39bc46['waitForTimeout'](0x384), await _0x39bc46['click']('#raffle-terms'), await _0x39bc46['waitForTimeout'](0x384);
      const [_0xfcc19b] = await _0x39bc46['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0xfcc19b && await _0xfcc19b['click']();
      ;
      await _0x39bc46['waitForTimeout'](0xbb8), await _0x39bc46['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xd8c09 + 0x1) + '\x20:\x20Filling\x20Information'), _0x6fdd35 == 'sec' ? await _0x39bc46['type']('#checkout_email', '' + afew[_0xd8c09]['FirstName'] + afew[_0xd8c09]['LastName'] + settings['catchall']) : await _0x39bc46['type']('#checkout_email', '' + afew[_0xd8c09]['Email']), await _0x39bc46['waitForTimeout'](0x258), await _0x39bc46['select']('#checkout_shipping_address_country', '' + afew[_0xd8c09]['Country']), await _0x39bc46['waitForTimeout'](0x258), await _0x39bc46['type']('#checkout_shipping_address_first_name', '' + afew[_0xd8c09]['FirstName']), await _0x39bc46['waitForTimeout'](0x320), await _0x39bc46['type']('#checkout_shipping_address_last_name', '' + afew[_0xd8c09]['LastName']), await _0x39bc46['waitForTimeout'](0x2bc), await _0x39bc46['type']('#checkout_shipping_address_address1', '' + afew[_0xd8c09]['Address1']), await _0x39bc46['waitForTimeout'](0x2bc), await _0x39bc46['type']('#checkout_shipping_address_address2', '' + afew[_0xd8c09]['Address2']), await _0x39bc46['waitForTimeout'](0x2bc), await _0x39bc46['type']('#checkout_shipping_address_zip', '' + afew[_0xd8c09]['Postcode']), await _0x39bc46['waitForTimeout'](0x2bc), await _0x39bc46['type']('#checkout_shipping_address_city', '' + afew[_0xd8c09]['City']), await _0x39bc46['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xd8c09 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x39bc46['click']('#continue_button'), await _0x39bc46['waitForTimeout'](0x1194), await _0x39bc46['waitForSelector']('#continue_button'), await _0x39bc46['click']('#continue_button'), await _0x39bc46['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xd8c09 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x39bc46['waitForSelector']('#continue_button'), await _0x39bc46['click']('#continue_button'), await _0x39bc46['waitForTimeout'](0x1194), await _0x39bc46['waitForSelector']('#continue_button'), await _0x39bc46['click']('#continue_button'), await _0x39bc46['waitForTimeout'](0x2af8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xd8c09 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x713c20) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xd8c09 + 0x1) + '\x20:\x20' + _0x713c20);
    } finally {
      _0x3387d4['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
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
          for (var _0x55821a = 0x0; _0x55821a < maha['length']; _0x55821a++) {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x55821a + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x55821a), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
          }
        } else {
          if (taskModule == 0x2) {
            console['log']('Starting\x20' + maha['length'] + '\x20Experimental\x20MAHA\x20Tasks');
            for (var _0x55821a = 0x0; _0x55821a < maha['length']; _0x55821a++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x55821a + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x55821a, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x3) {
              console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
              for (var _0x55821a = 0x0; _0x55821a < links['length']; _0x55821a++) {
                modules[taskModule]['url'] = links[_0x55821a], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x55821a + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x55821a, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
              }
            } else {
              if (taskModule == 0x4)
                await footshopModule('https://releases.footshop.com/register/dnbFe4QB3xHSyCfZuQE3/Men/');
              else {
                if (taskModule == 0x5) {
                  var _0x51ad03 = await getPassword();
                  _0x51ad03 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
                }
              }
            }
          }
        }
      }
    } catch (_0x1c3b1e) {
      return console['log'](_0x1c3b1e), await delay(0x3a98);
    }
}
;
main();