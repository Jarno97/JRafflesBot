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
    'settings.json',
    'proxies.txt',
    'tasks/maha.csv',
    'tasks/footshop.csv',
    'tasks/afew.csv'
  ],
  'exitOnComplete': ![]
}, updater = new AutoGitUpdate(config);
let testValues, afewProducts = [], afewProduct;
const delay = _0x110d6c => new Promise(_0x4ffd47 => setTimeout(_0x4ffd47, _0x110d6c));
async function getLicense(_0x70bda4) {
  return axios['get']('https://api.hyper.co/v4/licenses/' + _0x70bda4, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x15d4c9 => _0x15d4c9['data'])['catch'](() => null);
}
;
async function checkLicense(_0x3e64b1) {
  console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
  const _0x28cb59 = await getLicense(_0x3e64b1);
  if (!_0x28cb59)
    return console['log']('License\x20not\x20found');
  if (!_0x28cb59['user'])
    return console['log']('License\x20not\x20bound');
  return _0x28cb59['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
  var _0x5b9c70 = await prompt['get']('Module');
  return console['clear'](), _0x5b9c70['Module'];
}
;
async function getPassword() {
  var _0x6a289 = await prompt['get']('Password');
  return console['clear'](), _0x6a289['Password'];
}
;
async function getLinks() {
  var _0x45cbc4 = await prompt['get']('Links');
  return _0x45cbc4['Links'];
}
;
async function getAfewProduct() {
  console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
  for (var _0x1fc1d7 = 0x0; _0x1fc1d7 < afewProducts['length']; _0x1fc1d7++) {
    console['log']('\x20(' + _0x1fc1d7 + ')\x20' + afewProducts[_0x1fc1d7]);
  }
  ;
  let _0x3034f7 = await prompt['get']('Product');
  return console['clear'](), afewProduct = _0x3034f7['Product'], console['log'](afewProducts[afewProduct] + '\x20chosen.\x0a\x20Starting\x20tasks..');
}
;
function getTime() {
  var _0x110ee7 = new Date(Date['now']())['toLocaleTimeString']();
  return _0x110ee7;
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
  let _0x2a632f = proxyFile['split']('\x0a'), _0x135bba = _0x2a632f['map']((_0x31106f, _0x1eeba6) => {
    sanatizeProxy = _0x31106f['replace']('\x0d', '');
    if (_0x2a632f[_0x1eeba6 + 0x1] != undefined)
      return '' + sanatizeProxy;
    return '' + sanatizeProxy;
  });
  return _0x135bba;
}
;
async function afewScraper() {
  var _0x515b5e = getProxy()[0x1]['split'](':');
  const _0x3fa484 = await puppeteer['launch']({
    'headless': !![],
    'args': ['--proxy-server=' + _0x515b5e[0x0] + ':' + _0x515b5e[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
  });
  try {
    const _0x43c663 = await _0x3fa484['newPage']();
    await _0x43c663['authenticate']({
      'username': '' + _0x515b5e[0x2],
      'password': '' + _0x515b5e[0x3]
    }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x43c663['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x43c663['setRequestInterception'](!![]), _0x43c663['on']('request', _0x2c5c0b => {
      _0x2c5c0b['resourceType']() === 'image' || _0x2c5c0b['resourceType']() === 'font' || _0x2c5c0b['resourceType']() === 'media' ? _0x2c5c0b['abort']() : _0x2c5c0b['continue']();
    }), await _0x43c663['goto']('https://de.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x43c663['waitForTimeout'](0xbb8), await _0x43c663['waitForSelector']('.product-card');
    const _0x495a7e = await _0x43c663['$$eval']('a.product-card', _0x4523bc => {
      return _0x4523bc['map'](_0x2e61e9 => _0x2e61e9['href']);
    });
    return afewProducts = _0x495a7e;
  } catch (_0x1881e2) {
    console['log']('\x20' + _0x1881e2);
  } finally {
    _0x3fa484['close'](), console['clear']();
  }
}
;
async function mahaFunction(_0x28aca8, _0x16e26d) {
  var _0x4e45c3 = getProxy()[_0x28aca8]['split'](':'), _0x4027e5 = modules[taskModule]['data'];
  _0x16e26d == 'exp' ? _0x4027e5['data']['attributes']['email'] = '' + maha[_0x28aca8]['FirstName'] + maha[_0x28aca8]['LastName'] + catchall : _0x4027e5['data']['attributes']['email'] = '' + maha[_0x28aca8]['Email'];
  _0x4027e5['data']['attributes']['properties']['$first_name'] = '' + maha[_0x28aca8]['FirstName'], _0x4027e5['data']['attributes']['properties']['$last_name'] = '' + maha[_0x28aca8]['LastName'], _0x4027e5['data']['attributes']['properties']['$address1'] = maha[_0x28aca8]['Address1'] + '\x20' + maha[_0x28aca8]['Address2'], _0x4027e5['data']['attributes']['properties']['$zip'] = '' + maha[_0x28aca8]['Zip'], _0x4027e5['data']['attributes']['properties']['$city'] = '' + maha[_0x28aca8]['City'], _0x4027e5['data']['attributes']['properties']['$country'] = '' + maha[_0x28aca8]['Country'], _0x4027e5['data']['attributes']['properties']['Size'] = '' + maha[_0x28aca8]['Size'], _0x4027e5['data']['attributes']['properties']['Instagram\x20Handle'] = '' + maha[_0x28aca8]['Follower'];
  var _0xf05b84 = {
    'jar': j,
    'followAllRedirects': !![],
    'method': 'POST',
    'url': modules[taskModule]['url'],
    'headers': modules[taskModule]['headers'],
    'body': JSON['stringify'](_0x4027e5),
    'proxy': 'http://' + _0x4e45c3[0x2] + ':' + _0x4e45c3[0x3] + '@' + _0x4e45c3[0x0] + ':' + _0x4e45c3[0x1]
  };
  return _0x16e26d === 'ver' && (_0xf05b84['method'] = 'GET'), new Promise(function (_0x31c28f, _0xd6f616) {
    callback = async (_0x4afb05, _0x2634d7, _0x15f0fb) => {
      !_0x4afb05 && _0x2634d7['statusCode'] == 0xca || !_0x4afb05 && _0x2634d7['statusCode'] == 0xc8 ? _0x31c28f(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x28aca8 + 0x1) + ':\x20Raffle\x20Entered!')) : _0xd6f616(console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x28aca8 + 0x1) + ':\x20error\x20' + _0x4afb05 + '\x20' + JSON['stringify'](_0x2634d7)));
    };
    try {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x28aca8 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4027e5['data']['attributes']['email']), request(_0xf05b84, callback);
    } catch (_0x4ac419) {
      console['log'](getTime() + '\x20Task\x20' + (_0x28aca8 + 0x1) + ':\x20' + _0x4ac419);
    }
  });
}
;
async function footshopModule(_0x5e61e4) {
  var _0x30fa8a;
  puppeteer['use'](RecaptchaPlugin({
    'provider': {
      'id': '2captcha',
      'token': '' + settings['captchaKey']
    },
    'visualFeedback': !![]
  }));
  for (var _0x3ac688 = 0x0; _0x3ac688 < footshop['length']; _0x3ac688++) {
    async function _0x590acd() {
      var _0x5addaa = await axios['get']('https://releases.footshop.com/api/raffles/dnbFe4QB3xHSyCfZuQE3')['then'](_0x402ade => _0x402ade['data'])['catch'](() => null);
      let _0x39e193 = _0x5addaa['sizeSets']['Men']['sizes'];
      for (var _0x59ddbf = 0x0; _0x59ddbf < _0x5addaa['sizeSets']['Men']['sizes']['length']; _0x59ddbf++) {
        if (_0x39e193[_0x59ddbf]['eur'] == footshop[_0x3ac688]['Size'])
          return _0x30fa8a = _0x39e193[_0x59ddbf]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ac688 + 0x1) + '\x20:\x20Found\x20SizePid');
      }
    }
    await _0x590acd();
    if (footshop[_0x3ac688]['Email'] == '' || footshop[_0x3ac688]['FirstName'] == '' || footshop[_0x3ac688]['LastName'] == '' || footshop[_0x3ac688]['Country'] == '' || footshop[_0x3ac688]['Size'] == '' || footshop[_0x3ac688]['Address1'] == '' || footshop[_0x3ac688]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ac688 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x8e30c3 = getProxy()[_0x3ac688]['split'](':');
    const _0x3a13aa = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x8e30c3[0x0] + ':' + _0x8e30c3[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x1d2dbe = await _0x3a13aa['newPage']();
      await _0x1d2dbe['authenticate']({
        'username': '' + _0x8e30c3[0x2],
        'password': '' + _0x8e30c3[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ac688 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1d2dbe['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1d2dbe['setRequestInterception'](!![]), _0x1d2dbe['on']('request', _0x1cd7ae => {
        _0x1cd7ae['resourceType']() === 'image' || _0x1cd7ae['resourceType']() === 'font' || _0x1cd7ae['resourceType']() === 'media' ? _0x1cd7ae['abort']() : _0x1cd7ae['continue']();
      }), await _0x1d2dbe['goto']('' + _0x5e61e4 + _0x30fa8a), await _0x1d2dbe['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ac688 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1d2dbe['type']('input[name=\x22email\x22]', '' + footshop[_0x3ac688]['Email']), await delay(0x640), await _0x1d2dbe['type']('input[name=\x22phone\x22]', '' + footshop[_0x3ac688]['Phone']), await delay(0x4b0), await _0x1d2dbe['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), await _0x1d2dbe['type']('input[name=\x22firstName\x22]', '' + footshop[_0x3ac688]['FirstName']), await delay(0x258), await _0x1d2dbe['type']('input[name=\x22lastName\x22]', '' + footshop[_0x3ac688]['LastName']), await delay(0xc8), await _0x1d2dbe['type']('input[name=\x22instagramUsername\x22]', '' + footshop[_0x3ac688]['Follower']), await delay(0x4b0), await _0x1d2dbe['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ac688 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1d2dbe['select']('select[name=\x22country\x22]', '' + footshop[_0x3ac688]['Country']), await delay(0x2bc), await _0x1d2dbe['type']('input[name=\x22streetName\x22]', '' + footshop[_0x3ac688]['Address1']), await delay(0x258), await _0x1d2dbe['type']('input[name=\x22houseNumber\x22]', '' + footshop[_0x3ac688]['Address2']), await delay(0xc8), await _0x1d2dbe['type']('input[name=\x22postalCode\x22]', '' + footshop[_0x3ac688]['Zip']), await delay(0x1f4), await _0x1d2dbe['type']('input[name=\x22city\x22]', '' + footshop[_0x3ac688]['City']), await delay(0x4b0), await _0x1d2dbe['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x1d2dbe['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ac688 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1d2dbe['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ac688 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x1d2dbe['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ac688 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1d2dbe['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1d2dbe['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x190), await _0x1d2dbe['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + footshop[_0x3ac688]['CardNumber']), await delay(0x320), await _0x1d2dbe['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + footshop[_0x3ac688]['ExpiryDate']), await delay(0x226), await _0x1d2dbe['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + footshop[_0x3ac688]['CVV']), await delay(0x226), await _0x1d2dbe['type']('input[name=\x22holderName\x22]', '' + footshop[_0x3ac688]['NameOnCard']), await delay(0x226), await _0x1d2dbe['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ac688 + 0x1) + '\x20:\x20Awaiting\x203DS'), await _0x1d2dbe['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ac688 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x244c73) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ac688 + 0x1) + '\x20:\x20' + _0x244c73);
    } finally {
      _0x3a13aa['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
    }
  }
}
afewFunction = async (_0x442d08, _0x13448d) => {
  for (var _0x49c711 = 0x0; _0x49c711 < afew['length']; _0x49c711++) {
    if (afew[_0x49c711]['Email'] == '' || afew[_0x49c711]['FirstName'] == '' || afew[_0x49c711]['LastName'] == '' || afew[_0x49c711]['Country'] == '' || afew[_0x49c711]['Size'] == '' || afew[_0x49c711]['Address1'] == '' || afew[_0x49c711]['Zip'] == '') {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x49c711 + 0x1) + '\x20:\x20Invalid\x20CSV');
      continue;
    }
    var _0x4a38de = getProxy()[_0x49c711]['split'](':');
    const _0x5c5765 = await puppeteer['launch']({
      'headless': !![],
      'args': ['--proxy-server=' + _0x4a38de[0x0] + ':' + _0x4a38de[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
      const _0x337fe6 = await _0x5c5765['newPage']();
      await _0x337fe6['authenticate']({
        'username': '' + _0x4a38de[0x2],
        'password': '' + _0x4a38de[0x3]
      }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x49c711 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x337fe6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x337fe6['setRequestInterception'](!![]), _0x337fe6['on']('request', _0x410e37 => {
        _0x410e37['resourceType']() === 'image' || _0x410e37['resourceType']() === 'font' || _0x410e37['resourceType']() === 'media' ? _0x410e37['abort']() : _0x410e37['continue']();
      }), await _0x337fe6['goto'](_0x442d08), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x49c711 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x337fe6['waitForTimeout'](0xfa0);
      const [_0x4a31a3] = await _0x337fe6['$x']('//button[contains(.,\x20\x27Alle\x27)]');
      _0x4a31a3 && await _0x4a31a3['click']();
      await _0x337fe6['waitForTimeout'](0x320), await _0x337fe6['hover']('span[class=\x22release-type\x22]'), await _0x337fe6['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x49c711]['Size'] + '\x22]'), await _0x337fe6['waitForTimeout'](0x320), await _0x337fe6['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + afew[_0x49c711]['Size'] + '\x22]'), await _0x337fe6['waitForTimeout'](0x258), await _0x337fe6['type']('#raffle-instagram', '' + afew[_0x49c711]['Follower'], { 'delay': 0x64 }), await _0x337fe6['waitForTimeout'](0x384), await _0x337fe6['click']('#raffle-terms'), await _0x337fe6['waitForTimeout'](0x384);
      const [_0x3954d5] = await _0x337fe6['$x']('//button[contains(.,\x20\x27Enter\x20Raffle\x27)]');
      _0x3954d5 && await _0x3954d5['click']();
      ;
      await _0x337fe6['waitForTimeout'](0xbb8), await _0x337fe6['waitForSelector']('#checkout_email'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x49c711 + 0x1) + '\x20:\x20Filling\x20Information'), _0x13448d == 'sec' ? await _0x337fe6['type']('#checkout_email', '' + afew[_0x49c711]['FirstName'] + afew[_0x49c711]['LastName'] + settings['catchall']) : await _0x337fe6['type']('#checkout_email', '' + afew[_0x49c711]['Email']), await _0x337fe6['waitForTimeout'](0x258), await _0x337fe6['select']('#checkout_shipping_address_country', '' + afew[_0x49c711]['Country']), await _0x337fe6['waitForTimeout'](0x258), await _0x337fe6['type']('#checkout_shipping_address_first_name', '' + afew[_0x49c711]['FirstName']), await _0x337fe6['waitForTimeout'](0x320), await _0x337fe6['type']('#checkout_shipping_address_last_name', '' + afew[_0x49c711]['LastName']), await _0x337fe6['waitForTimeout'](0x2bc), await _0x337fe6['type']('#checkout_shipping_address_address1', '' + afew[_0x49c711]['Address1']), await _0x337fe6['waitForTimeout'](0x2bc), await _0x337fe6['type']('#checkout_shipping_address_address2', '' + afew[_0x49c711]['Address2']), await _0x337fe6['waitForTimeout'](0x2bc), await _0x337fe6['type']('#checkout_shipping_address_zip', '' + afew[_0x49c711]['Postcode']), await _0x337fe6['waitForTimeout'](0x2bc), await _0x337fe6['type']('#checkout_shipping_address_city', '' + afew[_0x49c711]['City']), await _0x337fe6['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x49c711 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x337fe6['click']('#continue_button'), await _0x337fe6['waitForTimeout'](0x1194), await _0x337fe6['waitForSelector']('#continue_button'), await _0x337fe6['click']('#continue_button'), await _0x337fe6['waitForTimeout'](0x1194), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x49c711 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x337fe6['waitForSelector']('#continue_button'), await _0x337fe6['click']('#continue_button'), await _0x337fe6['waitForTimeout'](0x1194), await _0x337fe6['waitForSelector']('#continue_button'), await _0x337fe6['click']('#continue_button'), await _0x337fe6['waitForTimeout'](0x2af8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x49c711 + 0x1) + '\x20:\x20Raffle\x20Entered!');
    } catch (_0x8593e9) {
      console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x49c711 + 0x1) + '\x20:\x20' + _0x8593e9);
    } finally {
      _0x5c5765['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
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
          for (var _0x2016e6 = 0x0; _0x2016e6 < maha['length']; _0x2016e6++) {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2016e6 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2016e6), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
          }
        } else {
          if (taskModule == 0x2) {
            console['log']('Starting\x20' + maha['length'] + '\x20Experimental\x20MAHA\x20Tasks');
            for (var _0x2016e6 = 0x0; _0x2016e6 < maha['length']; _0x2016e6++) {
              console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2016e6 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2016e6, 'exp'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
            }
          } else {
            if (taskModule == 0x3) {
              console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
              for (var _0x2016e6 = 0x0; _0x2016e6 < links['length']; _0x2016e6++) {
                modules[taskModule]['url'] = links[_0x2016e6], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2016e6 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2016e6, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
              }
            } else {
              if (taskModule == 0x4)
                await footshopModule('https://releases.footshop.com/register/dnbFe4QB3xHSyCfZuQE3/Men/');
              else {
                if (taskModule == 0x5) {
                  var _0x37bba6 = await getPassword();
                  _0x37bba6 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
                }
              }
            }
          }
        }
      }
    } catch (_0x1e516e) {
      return console['log'](_0x1e516e), await delay(0x3a98);
    }
}
;
main();