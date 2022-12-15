var exeCute = require('exe');
const { execFile } = require('child_process'), puppeteer = require('puppeteer-extra'), RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha'), StealthPlugin = require('puppeteer-extra-plugin-stealth'), chalk = require('chalk'), setTitle = require('node-bash-title'), fs = require('fs'), axios = require('axios'), Papa = require('papaparse');
var random = require('random-name');
const request = require('request'), proxyFile = fs['readFileSync']('../proxies.txt', 'utf-8');
var prompt = require('prompt');
const j = request['jar']();
var settings = {};
const succesWH = 'https://discord.com/api/webhooks/1044989608708030595/HUZ2q06RoQQ24n_rWWEsL6AgM5yXEeUi2SO9VyOLuQgGBeHIlXpPl9Xr5jYMLXwJKwPS', errorWH = 'https://discord.com/api/webhooks/1045001962262900766/ZXWdz3BSjNO08alABR8ERNBgR2SNcydTW-9XxsFuphHYfwHaojLBu3hkw1Ygi3MxOZdz';
var webhook;
const package = JSON['parse'](fs['readFileSync']('../package.json', 'utf-8')), version = package['version'];
var taskCSV, taskFiles, proxyFiles, licenseKey, username;
const API_KEY = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let auth = ![];
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
        'tasks/afew.csv',
        'tasks/oqium.csv',
        'tasks/patta.csv',
        'accounts/patta.csv'
    ]
}, updater = new AutoGitUpdate(config);
async function loadSettings() {
    proxyFiles = fs['readdirSync']('../proxies'), taskFiles = fs['readdirSync']('../tasks'), settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), !settings['delay'] && (settings['delay'] = 0x2710, fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['captchaKey'] && (settings['captchaKey'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['useRandomProxy'] && (settings['useRandomProxy'] = ![], fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['webhook'] && (settings['webhook'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), webhook = settings['webhook'], licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x693b0b => new Promise(_0x35aa38 => setTimeout(_0x35aa38, _0x693b0b));
async function getLicense(_0x19c68a) {
    return axios['get']('https://api.hyper.co/v4/licenses/' + _0x19c68a, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x331740 => _0x331740['data'])['catch'](() => null);
}
;
async function checkLicense(_0x5133d3) {
    console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
    const _0x54f09a = await getLicense(_0x5133d3);
    username = JSON['stringify'](_0x54f09a['user']['username']);
    if (!_0x54f09a)
        return console['log']('License\x20not\x20found');
    if (!_0x54f09a['user'])
        return console['log']('License\x20not\x20bound');
    return _0x54f09a['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
    var _0x1f7bcd = await prompt['get']('Module');
    return console['clear'](), _0x1f7bcd['Module'];
}
;
async function getSetting() {
    var _0x4e6dec = await prompt['get']('Setting');
    return console['clear'](), _0x4e6dec['Setting'];
}
async function getTaskFile() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x28e6ea = 0x0; _0x28e6ea < taskFiles['length']; _0x28e6ea++) {
        console['log']('\x20(' + _0x28e6ea + ')\x20' + taskFiles[_0x28e6ea]);
    }
    console['log']('');
    var _0x4aeb3b = await prompt['get']('Task'), _0x48de5a = fs['readFileSync']('../tasks/' + taskFiles[_0x4aeb3b['Task']], 'utf-8');
    return taskCSV = Papa['parse'](_0x48de5a, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x4aeb3b['Task']])), taskCSV;
}
async function getProxyFile() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x2a6ab4 = 0x0; _0x2a6ab4 < proxyFiles['length']; _0x2a6ab4++) {
        console['log']('\x20(' + _0x2a6ab4 + ')\x20' + proxyFiles[_0x2a6ab4]);
    }
    console['log']('');
    var _0x8cb7c3 = await prompt['get']('Proxies'), _0x210d43 = fs['readFileSync']('../proxies/' + proxyFiles[_0x8cb7c3['Proxies']], 'utf-8')['split']('\x0a');
    let _0x5501e4 = _0x210d43['map']((_0x36b8ff, _0x2fd49f) => {
        sanatizeProxy = _0x36b8ff['replace']('\x0d', '');
        if (_0x210d43[_0x2fd49f + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return console['clear'](), _0x5501e4;
}
async function getValue() {
    var _0xc144f6 = await prompt['get']('Value');
    return console['clear'](), _0xc144f6['Value'];
}
async function getFunction(_0x30d5a5) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x32409d = 0x0; _0x32409d < _0x30d5a5['length']; _0x32409d++) {
        console['log']('\x20(' + _0x32409d + ')\x20[' + _0x30d5a5[_0x32409d]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x432dca = await prompt['get']('Module');
    return _0x432dca['Module'];
}
async function getPassword() {
    var _0x1a0283 = await prompt['get']('Password');
    return console['clear'](), _0x1a0283['Password'];
}
;
async function getLinks() {
    var _0x275a67 = await prompt['get']('Links');
    return _0x275a67['Links'];
}
;
async function getAfewProduct() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x2b62c4 = 0x0; _0x2b62c4 < afewProducts['length']; _0x2b62c4++) {
        console['log']('\x20(' + _0x2b62c4 + ')\x20' + afewProducts[_0x2b62c4]);
    }
    ;
    console['log']();
    let _0x4bca0a = await prompt['get']('Product');
    console['clear'](), afewProduct = _0x4bca0a['Product'];
    return;
}
;
function getTime() {
    var _0xa18b96 = new Date(Date['now']())['toLocaleTimeString']();
    return _0xa18b96;
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
                            'list_id': 'VYd6b2',
                            'custom_source': 'DM7866-001',
                            'email': '',
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
                                '$consent_form_id': 'UvPHZd',
                                '$consent_form_version': 0x75a8bb,
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
async function sendWebhook(_0x540f09, _0x4422e4) {
    let _0x61a37c = { 'headers': { 'content-type': 'application/json' } };
    await axios['post'](_0x540f09, _0x4422e4, _0x61a37c);
}
;
async function jig(_0x5b6b45, _0x36e2e1) {
    var _0x40d10d = _0x5b6b45[_0x36e2e1]['Address1']['split'](''), _0x1e76ed = _0x5b6b45[_0x36e2e1]['Address2']['split'](''), _0x3c0294 = _0x5b6b45[_0x36e2e1]['Email']['split']('@');
    for (var _0x3cec3b = 0x0; _0x3cec3b < _0x40d10d['length']; _0x3cec3b++) {
        if (_0x40d10d[_0x3cec3b] == 'X') {
            var _0x226023 = Math['round'](Math['random']() * (letters['length'] - 0x1));
            _0x40d10d[_0x3cec3b] = lettersArray[_0x226023];
        }
    }
    ;
    for (var _0x3cec3b = 0x0; _0x3cec3b < _0x1e76ed['length']; _0x3cec3b++) {
        if (_0x1e76ed[_0x3cec3b] == 'X') {
            var _0x226023 = Math['round'](Math['random']() * (letters['length'] - 0x1));
            _0x1e76ed[_0x3cec3b] = lettersArray[_0x226023];
        }
    }
    ;
    _0x5b6b45[_0x36e2e1]['FirstName'] == 'RANDOM' && (_0x5b6b45[_0x36e2e1]['FirstName'] = random['first']());
    _0x5b6b45[_0x36e2e1]['LastName'] == 'RANDOM' && (_0x5b6b45[_0x36e2e1]['LastName'] = random['last']());
    _0x3c0294[0x0] == 'RANDOM' ? _0x3c0294[0x0] = '' + random['first']() + random['last']() + '@' : _0x3c0294[0x0] = _0x3c0294[0x0] + '@';
    _0x5b6b45[_0x36e2e1]['Email'] = _0x3c0294['join'](''), _0x5b6b45[_0x36e2e1]['Address1'] = _0x40d10d['join'](''), _0x5b6b45[_0x36e2e1]['Address2'] = _0x1e76ed['join']('');
    return;
}
;
function getProxy() {
    let _0x2d8b71 = proxyFile['split']('\x0a'), _0x1c86d9 = _0x2d8b71['map']((_0x3da815, _0x44a977) => {
        sanatizeProxy = _0x3da815['replace']('\x0d', '');
        if (_0x2d8b71[_0x44a977 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x1c86d9;
}
;
async function afewScraper() {
    var _0x431265 = getProxy()[0x1]['split'](':');
    const _0xd2ff43 = await puppeteer['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x431265[0x0] + ':' + _0x431265[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x5abdf0 = await _0xd2ff43['newPage']();
        await _0x5abdf0['authenticate']({
            'username': '' + _0x431265[0x2],
            'password': '' + _0x431265[0x3]
        }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x5abdf0['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5abdf0['setRequestInterception'](!![]), _0x5abdf0['on']('request', _0x253ed1 => {
            _0x253ed1['resourceType']() === 'image' || _0x253ed1['resourceType']() === 'font' || _0x253ed1['resourceType']() === 'media' ? _0x253ed1['abort']() : _0x253ed1['continue']();
        }), await _0x5abdf0['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x5abdf0['waitForTimeout'](0xbb8), await _0x5abdf0['waitForSelector']('.product-card');
        const _0x29812a = await _0x5abdf0['$$eval']('a.product-card', _0x3b16a1 => {
            return _0x3b16a1['map'](_0x4bb2f2 => _0x4bb2f2['href']);
        });
        return afewProducts = _0x29812a;
    } catch (_0x1bd7d7) {
        console['log']('\x20' + _0x1bd7d7);
    } finally {
        _0xd2ff43['close'](), console['clear']();
    }
}
;
async function mahaFunction(_0x2f0027, _0x5ad1d5, _0x363e9e, _0x266df9, _0x58869c) {
    await jig(_0x266df9, _0x2f0027);
    var _0x184139 = [{
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
                'value': '' + _0x266df9[_0x2f0027]['Size']
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
    const _0x538f32 = { 'embeds': _0x184139 };
    if (settings['useRandomProxy'] = ![])
        var _0x217b49 = _0x58869c[_0x2f0027]['split'](':');
    else
        var _0x80c10b = Math['round'](Math['random']() * (_0x58869c['length'] - 0x1)), _0x217b49 = _0x58869c[_0x80c10b]['split'](':');
    var _0x9c6636 = _0x363e9e['data'];
    _0x5ad1d5 == 'exp' ? _0x9c6636['data']['attributes']['email'] = '' + _0x266df9[_0x2f0027]['FirstName'] + _0x266df9[_0x2f0027]['LastName'] + settings['catchall'] : _0x9c6636['data']['attributes']['email'] = '' + _0x266df9[_0x2f0027]['Email'];
    _0x9c6636['data']['attributes']['properties']['$first_name'] = '' + _0x266df9[_0x2f0027]['FirstName'], _0x9c6636['data']['attributes']['properties']['$last_name'] = '' + _0x266df9[_0x2f0027]['LastName'], _0x9c6636['data']['attributes']['properties']['$address1'] = _0x266df9[_0x2f0027]['Address1'] + '\x20' + _0x266df9[_0x2f0027]['Address2'], _0x9c6636['data']['attributes']['properties']['$zip'] = '' + _0x266df9[_0x2f0027]['Zip'], _0x9c6636['data']['attributes']['properties']['$city'] = '' + _0x266df9[_0x2f0027]['City'], _0x9c6636['data']['attributes']['properties']['$country'] = '' + _0x266df9[_0x2f0027]['Country'], _0x9c6636['data']['attributes']['properties']['Size'] = '' + _0x266df9[_0x2f0027]['Size'], _0x9c6636['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x266df9[_0x2f0027]['Follower'];
    var _0x3689bc = {
        'jar': j,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x363e9e['url'],
        'headers': _0x363e9e['headers'],
        'body': JSON['stringify'](_0x9c6636),
        'proxy': 'http://' + _0x217b49[0x2] + ':' + _0x217b49[0x3] + '@' + _0x217b49[0x0] + ':' + _0x217b49[0x1]
    };
    return _0x5ad1d5 === 'ver' && (_0x3689bc['method'] = 'GET'), new Promise(function (_0x4772a7, _0x37e894) {
        callback = async (_0x414496, _0x19d7e4, _0xe1d5df) => {
            !_0x414496 && _0x19d7e4['statusCode'] == 0xca || !_0x414496 && _0x19d7e4['statusCode'] == 0xc8 ? _0x4772a7(console['log'](chalk['green'](getTime() + '\x20[' + _0x363e9e['name'] + ']\x20Task\x20' + (_0x2f0027 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x184139[0x0]['title'] = 'Failed\x20entry', _0x184139[0x0]['description'] = '' + _0x414496, await sendWebhook(errorWH, _0x538f32), _0x37e894(console['log'](getTime() + '\x20[' + _0x363e9e['name'] + ']\x20Task\x20' + (_0x2f0027 + 0x1) + ':\x20' + _0x414496)));
        };
        try {
            _0x5ad1d5 === 'ver' ? console['log'](getTime() + '\x20[' + _0x363e9e['name'] + ']\x20Task\x20' + (_0x2f0027 + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + _0x363e9e['name'] + ']\x20Task\x20' + (_0x2f0027 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x9c6636['data']['attributes']['email']), request(_0x3689bc, callback);
        } catch (_0x3a5d7d) {
            console['log'](getTime() + '\x20Task\x20' + (_0x2f0027 + 0x1) + ':\x20' + _0x3a5d7d);
        }
    });
}
;
async function footshopModule(_0x7c0956, _0x42c5da) {
    var _0x4eb063;
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4c993e = 0x0; _0x4c993e < _0x7c0956['length']; _0x4c993e++) {
        await jig(_0x7c0956, _0x4c993e);
        if (_0x7c0956[_0x4c993e]['Email'] == '' || _0x7c0956[_0x4c993e]['FirstName'] == '' || _0x7c0956[_0x4c993e]['LastName'] == '' || _0x7c0956[_0x4c993e]['Country'] == '' || _0x7c0956[_0x4c993e]['Size'] == '' || _0x7c0956[_0x4c993e]['Address1'] == '' || _0x7c0956[_0x4c993e]['Zip'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        console['log'](_0x7c0956[_0x4c993e]['Url']);
        async function _0x9c7129() {
            var _0x43168d = await axios['get']('https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_')['then'](_0x24b88e => _0x24b88e['data'])['catch'](() => undefined);
            console['log'](_0x43168d);
            var _0x4546f6 = _0x43168d['sizeSets']['Men']['sizes'];
            _0x4546f6['length'] == 0x0 && (_0x4546f6 = _0x43168d['sizeSets']['Women']['sizes'], _0x4546f6['length'] == 0x0 && (_0x4546f6 = _0x43168d['sizeSets']['Unisex']['sizes'], _0x4546f6['length'] == 0x0 && (_0x4546f6 = _0x43168d['sizeSets']['Kids']['sizes'])));
            ;
            async function _0x24ca94() {
                for (var _0x159151 = 0x0; _0x159151 < _0x4546f6['length']; _0x159151++) {
                    if (_0x4546f6[_0x159151]['eur'] == _0x7c0956[_0x4c993e]['Size'])
                        return _0x4eb063 = _0x4546f6[_0x159151]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
                }
                return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x20Size\x20' + _0x7c0956[_0x4c993e]['Size'] + '\x20not\x20found'), ![];
            }
            ;
            let _0x4532f2 = await _0x24ca94();
            if (_0x4532f2 == ![])
                return ![];
        }
        let _0x2baa25 = await _0x9c7129();
        if (_0x2baa25 == ![])
            continue;
        if (_0x7c0956[_0x4c993e]['Email'] == '' || _0x7c0956[_0x4c993e]['FirstName'] == '' || _0x7c0956[_0x4c993e]['LastName'] == '' || _0x7c0956[_0x4c993e]['Country'] == '' || _0x7c0956[_0x4c993e]['Size'] == '' || _0x7c0956[_0x4c993e]['Address1'] == '' || _0x7c0956[_0x4c993e]['Zip'] == '' || _0x7c0956[_0x4c993e]['Phone'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x20d354 = 'https://releases.footshop.com/register/' + _0x7c0956[_0x4c993e]['Url'] + '/Men/' + _0x4eb063;
        if (settings['useRandomProxy'] = ![])
            var _0x5a4ed2 = _0x42c5da[_0x4c993e]['split'](':');
        else
            var _0x3a268f = Math['round'](Math['random']() * (_0x42c5da['length'] - 0x1)), _0x5a4ed2 = _0x42c5da[_0x3a268f]['split'](':');
        const _0x5d5ca4 = await puppeteer['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x5a4ed2[0x0] + ':' + _0x5a4ed2[0x1]]
        });
        try {
            const _0x3efbff = await _0x5d5ca4['newPage']();
            await _0x3efbff['authenticate']({
                'username': '' + _0x5a4ed2[0x2],
                'password': '' + _0x5a4ed2[0x3]
            }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3efbff['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3efbff['setRequestInterception'](!![]), _0x3efbff['on']('request', _0x3bdff9 => {
                _0x3bdff9['resourceType']() === 'image' || _0x3bdff9['resourceType']() === 'font' || _0x3bdff9['resourceType']() === 'media' ? _0x3bdff9['abort']() : _0x3bdff9['continue']();
            }), await _0x3efbff['goto']('' + _0x20d354 + _0x4eb063), await _0x3efbff['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x3efbff['type']('input[name=\x22email\x22]', '' + _0x7c0956[_0x4c993e]['Email']), await delay(0x640), await _0x3efbff['type']('input[name=\x22phone\x22]', '' + _0x7c0956[_0x4c993e]['Phone']), await delay(0x4b0), await _0x3efbff['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
            try {
                await _0x3efbff['type']('input[name=\x22firstName\x22]', '' + _0x7c0956[_0x4c993e]['FirstName']), await delay(0x258);
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x20Duplicate\x20Entry'));
                continue;
            }
            await _0x3efbff['type']('input[name=\x22lastName\x22]', '' + _0x7c0956[_0x4c993e]['LastName']), await delay(0xc8), await _0x3efbff['type']('input[name=\x22instagramUsername\x22]', '' + _0x7c0956[_0x4c993e]['Follower']), await delay(0x4b0), await _0x3efbff['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x3efbff['select']('select[name=\x22country\x22]', '' + _0x7c0956[_0x4c993e]['Country']), await delay(0x2bc), await _0x3efbff['type']('input[name=\x22streetName\x22]', '' + _0x7c0956[_0x4c993e]['Address1']), await delay(0x258), await _0x3efbff['type']('input[name=\x22houseNumber\x22]', '' + _0x7c0956[_0x4c993e]['HouseNumber'] + _0x7c0956[_0x4c993e]['Address2']), await delay(0xc8), await _0x3efbff['type']('input[name=\x22postalCode\x22]', '' + _0x7c0956[_0x4c993e]['Zip']), await delay(0x1f4), await _0x3efbff['type']('input[name=\x22city\x22]', '' + _0x7c0956[_0x4c993e]['City']), await delay(0x4b0), await _0x3efbff['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x3efbff['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x3efbff['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x3efbff['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x3efbff['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3efbff['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x4b0), await _0x3efbff['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x7c0956[_0x4c993e]['CardNumber']), await delay(0x320), await _0x3efbff['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x7c0956[_0x4c993e]['ExpiryDate']), await delay(0x4b0), await _0x3efbff['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x7c0956[_0x4c993e]['CVV']), await delay(0x226), await _0x3efbff['type']('input[name=\x22holderName\x22]', '' + _0x7c0956[_0x4c993e]['NameOnCard']), await delay(0x226), await _0x3efbff['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x3efbff['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await delay(0xbb8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x2aa115) {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4c993e + 0x1) + '\x20:\x20' + _0x2aa115);
        } finally {
            _0x5d5ca4['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
        }
    }
}
afewFunction = async (_0xf145fb, _0x11171f, _0x16d95b, _0x272a6e, _0x420a18) => {
    for (var _0xb65bdc = 0x0; _0xb65bdc < _0x272a6e['length']; _0xb65bdc++) {
        await jig(_0x272a6e, _0xb65bdc);
        var _0x482c28 = [{
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
                    'value': '' + _0xf145fb
                },
                {
                    'name': 'Size',
                    'value': '' + _0x272a6e[_0xb65bdc]['Size']
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
        const _0x5b52d6 = { 'embeds': _0x482c28 };
        if (_0x272a6e[_0xb65bdc]['Email'] == '' || _0x272a6e[_0xb65bdc]['FirstName'] == '' || _0x272a6e[_0xb65bdc]['LastName'] == '' || _0x272a6e[_0xb65bdc]['Country'] == '' || _0x272a6e[_0xb65bdc]['Size'] == '' || _0x272a6e[_0xb65bdc]['Address1'] == '' || _0x272a6e[_0xb65bdc]['Zip'] == '') {
            console['log'](getTime() + '\x20[' + _0x16d95b['name'] + ']\x20Task\x20' + (_0xb65bdc + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x51595f = _0x420a18[_0xb65bdc]['split'](':');
        else
            var _0x37e77b = Math['round'](Math['random']() * (_0x420a18['length'] - 0x1)), _0x51595f = _0x420a18[_0x37e77b]['split'](':');
        const _0x554d90 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x51595f[0x0] + ':' + _0x51595f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4c47f5 = await _0x554d90['newPage']();
            await _0x4c47f5['setDefaultNavigationTimeout'](0x1d4c0), await _0x4c47f5['authenticate']({
                'username': '' + _0x51595f[0x2],
                'password': '' + _0x51595f[0x3]
            }), console['log'](getTime() + '\x20[' + _0x16d95b['name'] + ']\x20Task\x20' + (_0xb65bdc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4c47f5['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4c47f5['setRequestInterception'](!![]), _0x4c47f5['on']('request', _0x15654c => {
                _0x15654c['resourceType']() === 'image' || _0x15654c['resourceType']() === 'font' || _0x15654c['resourceType']() === 'media' ? _0x15654c['abort']() : _0x15654c['continue']();
            }), await _0x4c47f5['goto'](_0xf145fb), console['log'](getTime() + '\x20[' + _0x16d95b['name'] + ']\x20Task\x20' + (_0xb65bdc + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x4c47f5['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + _0x16d95b['name'] + ']\x20Task\x20' + (_0xb65bdc + 0x1) + '\x20:\x20Cookies\x20received'), await _0x4c47f5['waitForTimeout'](0x320);
            if (_0x272a6e[_0xb65bdc]['Size'] == 'RANDOM') {
                console['log'](getTime() + '\x20[' + _0x16d95b['name'] + ']\x20Task\x20' + (_0xb65bdc + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x2151af = await _0x4c47f5['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x37da3e => {
                    return _0x37da3e['map'](_0x58b565 => _0x58b565['href']);
                });
                var _0x153a1c = Math['round'](Math['random']() * (_0x2151af['length'] - 0x1));
                await _0x4c47f5['goto']('' + _0x2151af[_0x153a1c]);
            } else {
                console['log'](getTime() + '\x20[' + _0x16d95b['name'] + ']\x20Task\x20' + (_0xb65bdc + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x272a6e[_0xb65bdc]['Size']);
                try {
                    const _0x3ff745 = await _0x4c47f5['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x272a6e[_0xb65bdc]['Size'] + '\x22]\x20>\x20a', _0x4d0de4 => {
                        return _0x4d0de4['map'](_0x4cab86 => _0x4cab86['href']);
                    });
                    await _0x4c47f5['goto']('' + _0x3ff745[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x624050) {
                    console['log'](chalk['red'](getTime() + '\x20[' + _0x16d95b['name'] + ']\x20Task\x20' + (_0xb65bdc + 0x1) + '\x20:\x20' + _0x624050 + '\x20Size\x20not\x20found')), _0x482c28[0x0]['title'] = 'Failed\x20entry', _0x482c28[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x5b52d6);
                    continue;
                }
                try {
                    await _0x4c47f5['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x272a6e[_0xb65bdc]['Size'] + '\x22]'), await _0x4c47f5['waitForTimeout'](0x320), await _0x4c47f5['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x272a6e[_0xb65bdc]['Size'] + '\x22]');
                } catch (_0x95cd45) {
                    console['log'](chalk['red'](getTime() + '\x20[' + _0x16d95b['name'] + ']\x20Task\x20' + (_0xb65bdc + 0x1) + '\x20:\x20' + _0x95cd45 + '\x20Size\x20not\x20found')), _0x482c28[0x0]['title'] = 'Failed\x20entry', _0x482c28[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x5b52d6);
                    continue;
                }
            }
            await _0x4c47f5['waitForTimeout'](0x258), await _0x4c47f5['type']('#raffle-instagram', '' + _0x272a6e[_0xb65bdc]['Follower'], { 'delay': 0x64 }), await _0x4c47f5['waitForTimeout'](0x384), await _0x4c47f5['click']('#raffle-terms'), await _0x4c47f5['waitForTimeout'](0x384), await _0x4c47f5['evaluate'](() => {
                const _0x51a978 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x51a978['click']();
            }), await _0x4c47f5['waitForTimeout'](0xbb8), await _0x4c47f5['waitForSelector']('#checkout_email'), await delay(0x3e8), console['log'](getTime() + '\x20[' + _0x16d95b['name'] + ']\x20Task\x20' + (_0xb65bdc + 0x1) + '\x20:\x20Filling\x20Information');
            _0x11171f == 'sec' ? await _0x4c47f5['type']('#checkout_email', '' + _0x272a6e[_0xb65bdc]['FirstName'] + _0x272a6e[_0xb65bdc]['LastName'] + settings['catchall'], 0x32) : await _0x4c47f5['type']('#checkout_email', '' + _0x272a6e[_0xb65bdc]['Email'], 0x32);
            await delay(0x320), await _0x4c47f5['select']('#checkout_shipping_address_country', '' + _0x272a6e[_0xb65bdc]['Country']), await _0x4c47f5['waitForTimeout'](0x258), await _0x4c47f5['type']('#checkout_shipping_address_first_name', '' + _0x272a6e[_0xb65bdc]['FirstName']), await _0x4c47f5['waitForTimeout'](0x320), await _0x4c47f5['type']('#checkout_shipping_address_last_name', '' + _0x272a6e[_0xb65bdc]['LastName']), await _0x4c47f5['waitForTimeout'](0x2bc), await _0x4c47f5['type']('#checkout_shipping_address_address1', _0x272a6e[_0xb65bdc]['Address1'] + '\x20' + _0x272a6e[_0xb65bdc]['HouseNumber']), await _0x4c47f5['waitForTimeout'](0x2bc), await _0x4c47f5['type']('#checkout_shipping_address_address2', '' + _0x272a6e[_0xb65bdc]['Address2']), await _0x4c47f5['waitForTimeout'](0x2bc);
            _0x272a6e[_0xb65bdc]['Postcode'] == undefined ? await _0x4c47f5['type']('#checkout_shipping_address_zip', '' + _0x272a6e[_0xb65bdc]['Zip']) : await _0x4c47f5['type']('#checkout_shipping_address_zip', '' + _0x272a6e[_0xb65bdc]['Postcode']);
            await _0x4c47f5['waitForTimeout'](0x2bc), await _0x4c47f5['type']('#checkout_shipping_address_city', '' + _0x272a6e[_0xb65bdc]['City']), await _0x4c47f5['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + _0x16d95b['name'] + ']\x20Task\x20' + (_0xb65bdc + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x4c47f5['evaluate'](() => {
                const _0x555d98 = document['querySelector']('#continue_button');
                for (var _0x24f573 = 0x0; _0x24f573 < 0x5; _0x24f573++) {
                    if (_0x555d98) {
                        _0x555d98['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x4c47f5['waitForTimeout'](0x1194), await _0x4c47f5['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), _0x4c47f5['evaluate'](() => {
                const _0x29a300 = document['querySelector']('#continue_button');
                for (var _0x2978a7 = 0x0; _0x2978a7 < 0x5; _0x2978a7++) {
                    if (_0x29a300) {
                        _0x29a300['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x4c47f5['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + _0x16d95b['name'] + ']\x20Task\x20' + (_0xb65bdc + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4c47f5['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x4c47f5['evaluate'](() => {
                const _0x4f8c7f = document['querySelector']('#continue_button');
                for (var _0x2c315b = 0x0; _0x2c315b < 0x5; _0x2c315b++) {
                    if (_0x4f8c7f) {
                        _0x4f8c7f['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x4c47f5['waitForTimeout'](0x1194), await _0x4c47f5['waitForSelector']('#continue_button'), _0x4c47f5['evaluate'](() => {
                const _0x2b5478 = document['querySelector']('#continue_button');
                for (var _0x48bce9 = 0x0; _0x48bce9 < 0x5; _0x48bce9++) {
                    if (_0x2b5478) {
                        _0x2b5478['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            });
            try {
                await _0x4c47f5['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x19b7b3) {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x16d95b['name'] + ']\x20Task\x20' + (_0xb65bdc + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x19b7b3));
            }
            console['log'](chalk['green'](getTime() + '\x20[' + _0x16d95b['name'] + ']\x20Task\x20' + (_0xb65bdc + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x5b52d6);
        } catch (_0x12e70a) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x16d95b['name'] + ']\x20Task\x20' + (_0xb65bdc + 0x1) + '\x20:\x20' + _0x12e70a)), _0x482c28[0x0]['title'] = 'Failed\x20entry', _0x482c28[0x0]['description'] = '' + _0x12e70a, await sendWebhook(errorWH, _0x5b52d6);
        } finally {
            _0x554d90 && _0x554d90['close']();
            if (_0xb65bdc + 0x1 == _0x272a6e['length']) {
                console['log'](chalk['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await delay(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
};
async function kickzAcc(_0x40049c, _0x4cd7b7, _0x50ef8c) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4f29bf = 0x0; _0x4f29bf < _0x50ef8c['length']; _0x4f29bf++) {
        await jig(_0x50ef8c, _0x4f29bf);
        if (_0x50ef8c[_0x4f29bf]['Email'] == '' || _0x50ef8c[_0x4f29bf]['Password'] == '' || _0x50ef8c[_0x4f29bf]['FirstName'] == '' || _0x50ef8c[_0x4f29bf]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x56ec30 = getProxy()[_0x4f29bf]['split'](':');
        else
            var _0xd6d8a7 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x56ec30 = getProxy()[_0xd6d8a7]['split'](':');
        const _0x22237e = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x56ec30[0x0] + ':' + _0x56ec30[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x261111 = await _0x22237e['newPage']();
            await _0x261111['authenticate']({
                'username': '' + _0x56ec30[0x2],
                'password': '' + _0x56ec30[0x3]
            }), console['log'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x261111['setRequestInterception'](!![]), _0x261111['on']('request', _0x39119b => {
                _0x39119b['resourceType']() === 'image' || _0x39119b['resourceType']() === 'font' || _0x39119b['resourceType']() === 'media' ? _0x39119b['abort']() : _0x39119b['continue']();
            }), await _0x261111['goto'](_0x40049c), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x261111['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x261111['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x261111['waitForSelector']('#button-register'), await delay(0x7d0), await _0x261111['evaluate'](() => {
                const _0x87de37 = document['querySelector']('#button-register');
                _0x87de37['click']();
            }), console['log'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20Setting\x20Credentials'), await delay(0x1388), await _0x261111['waitForSelector']('#customer_salutation'), await _0x261111['select']('#customer_salutation', 'mr'), await delay(0x7d0), await _0x261111['waitForSelector']('#customer_firstname'), await _0x261111['type']('#customer_firstname', '' + _0x50ef8c[_0x4f29bf]['FirstName']), await delay(0x352), await _0x261111['waitForSelector']('#customer_lastname'), await _0x261111['type']('#customer_lastname', '' + _0x50ef8c[_0x4f29bf]['LastName']), await delay(0x352), await _0x261111['type']('#email-input', '' + _0x50ef8c[_0x4f29bf]['Email']), await delay(0x352), await _0x261111['type']('#email-confirm-input', '' + _0x50ef8c[_0x4f29bf]['Email']), await delay(0x352), await _0x261111['type']('#register-password', '' + _0x50ef8c[_0x4f29bf]['Password']), await delay(0x352), await _0x261111['type']('#password-confirm', '' + _0x50ef8c[_0x4f29bf]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x261111['click']('#consent'), await delay(0x1f4);
            const _0x503c92 = await _0x261111['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x503c92) {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x261111['click']('#buttonRegister'), await _0x261111['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20Account\x20' + _0x50ef8c[_0x4f29bf]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
            async function _0x1a1cb5() {
                console['log'](chalk['yellow'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x50ef35 = await prompt['get']('Code');
                return _0x50ef35['Code'];
            }
            ;
            code = await _0x1a1cb5(), delay(0x320), console['log'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20Verifying..'), await _0x261111['type']('#verificationCode', code), await delay(0x1f4), await _0x261111['click']('#buttonVerify'), await delay(0x190), await _0x261111['click']('#buttonVerify'), await delay(0x3e8);
            try {
                await _0x261111['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20Account\x20' + _0x50ef8c[_0x4f29bf]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x50ef8c[_0x4f29bf]['Email'] + ',' + _0x50ef8c[_0x4f29bf]['Password'] + ','), console['log'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20Account\x20' + _0x50ef8c[_0x4f29bf]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x317ef4) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x4cd7b7['name'] + ']\x20Task\x20' + (_0x4f29bf + 0x1) + '\x20:\x20' + _0x317ef4));
        } finally {
            _0x22237e && _0x22237e['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
}
async function kickzFunction(_0xa16666, _0x2b473a) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x53ce6d = 0x0; _0x53ce6d < _0x2b473a['length']; _0x53ce6d++) {
        await jig(_0x2b473a, _0x53ce6d);
        if (_0x2b473a[_0x53ce6d]['Email'] == '' || _0x2b473a[_0x53ce6d]['Password'] == '' || _0x2b473a[_0x53ce6d]['FirstName'] == '' || _0x2b473a[_0x53ce6d]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x16b633 = getProxy()[_0x53ce6d]['split'](':');
        else
            var _0x351f2c = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x16b633 = getProxy()[_0x351f2c]['split'](':');
        const _0x473c43 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x16b633[0x0] + ':' + _0x16b633[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x440b6c = await _0x473c43['newPage']();
            await _0x440b6c['authenticate']({
                'username': '' + _0x16b633[0x2],
                'password': '' + _0x16b633[0x3]
            }), console['log'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x440b6c['setRequestInterception'](!![]), _0x440b6c['on']('request', _0x2de40f => {
                _0x2de40f['resourceType']() === 'image' || _0x2de40f['resourceType']() === 'font' || _0x2de40f['resourceType']() === 'media' ? _0x2de40f['abort']() : _0x2de40f['continue']();
            }), await _0x440b6c['goto']('https://www.kickz.com/nl/login/'), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20Logging\x20in'), await _0x440b6c['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x440b6c['click']('#consent-dialog\x20>\x20section\x20>\x20button'), console['log'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20Setting\x20Credentials'), await delay(0x1388), await _0x440b6c['waitForSelector']('#customer_salutation'), await _0x440b6c['select']('#customer_salutation', 'mr'), await delay(0x7d0), await _0x440b6c['waitForSelector']('#customer_firstname'), await _0x440b6c['type']('#customer_firstname', '' + _0x2b473a[_0x53ce6d]['FirstName']), await delay(0x352), await _0x440b6c['waitForSelector']('#customer_lastname'), await _0x440b6c['type']('#customer_lastname', '' + _0x2b473a[_0x53ce6d]['LastName']), await delay(0x352), await _0x440b6c['type']('#email-input', '' + _0x2b473a[_0x53ce6d]['Email']), await delay(0x352), await _0x440b6c['type']('#email-confirm-input', '' + _0x2b473a[_0x53ce6d]['Email']), await delay(0x352), await _0x440b6c['type']('#register-password', '' + _0x2b473a[_0x53ce6d]['Password']), await delay(0x352), await _0x440b6c['type']('#password-confirm', '' + _0x2b473a[_0x53ce6d]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x440b6c['click']('#consent'), await delay(0x1f4);
            const _0x36e9a6 = await _0x440b6c['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x36e9a6) {
                console['log'](chalk['red'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x440b6c['click']('#buttonRegister'), await _0x440b6c['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20Account\x20' + _0x2b473a[_0x53ce6d]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
            async function _0x2b7507() {
                console['log'](chalk['yellow'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x562f0c = await prompt['get']('Code');
                return _0x562f0c['Code'];
            }
            ;
            code = await _0x2b7507(), delay(0x320), console['log'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20Verifying..'), await _0x440b6c['type']('#verificationCode', code), await delay(0x1f4), await _0x440b6c['click']('#buttonVerify'), await delay(0x190), await _0x440b6c['click']('#buttonVerify'), await delay(0x3e8);
            try {
                await _0x440b6c['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20Account\x20' + _0x2b473a[_0x53ce6d]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x2b473a[_0x53ce6d]['Email'] + ',' + _0x2b473a[_0x53ce6d]['Password'] + ','), console['log'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20Account\x20' + _0x2b473a[_0x53ce6d]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x378660) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0xa16666['name'] + ']\x20Task\x20' + (_0x53ce6d + 0x1) + '\x20:\x20' + _0x378660));
        } finally {
            _0x473c43 && _0x473c43['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
}
async function bwAcc(_0x371ca0, _0x56f9b3) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x36abd0 = 0x0; _0x36abd0 < bouncewear['length']; _0x36abd0++) {
        await jig(bouncewear, _0x36abd0);
        if (bouncewear[_0x36abd0]['Email'] == '' || bouncewear[_0x36abd0]['Password'] == '' || bouncewear[_0x36abd0]['FirstName'] == '' || bouncewear[_0x36abd0]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36abd0 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x13a80b = getProxy()[_0x36abd0]['split'](':');
        else
            var _0x1a7630 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x13a80b = getProxy()[_0x1a7630]['split'](':');
        const _0x1fde82 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x13a80b[0x0] + ':' + _0x13a80b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4d8c9d = await _0x1fde82['newPage']();
            await _0x4d8c9d['authenticate']({
                'username': '' + _0x13a80b[0x2],
                'password': '' + _0x13a80b[0x3]
            }), console['log'](getTime() + '\x20[' + _0x56f9b3['name'] + ']\x20Task\x20' + (_0x36abd0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4d8c9d['setRequestInterception'](!![]), _0x4d8c9d['on']('request', _0x2bffc5 => {
                _0x2bffc5['resourceType']() === 'image' || _0x2bffc5['resourceType']() === 'font' || _0x2bffc5['resourceType']() === 'media' ? _0x2bffc5['abort']() : _0x2bffc5['continue']();
            }), await _0x4d8c9d['goto'](_0x371ca0), await delay(0xbb8), await _0x4d8c9d['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x56f9b3['name'] + ']\x20Task\x20' + (_0x36abd0 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4d8c9d['type']('#RegisterForm-FirstName', '' + bouncewear[_0x36abd0]['FirstName']), await delay(0x226), await _0x4d8c9d['type']('#RegisterForm-LastName', '' + bouncewear[_0x36abd0]['LastName']), await delay(0x226), await _0x4d8c9d['type']('#RegisterForm-email', '' + bouncewear[_0x36abd0]['Email']), await delay(0x226), await _0x4d8c9d['type']('#RegisterForm-password', '' + bouncewear[_0x36abd0]['Password']), await delay(0x226), await _0x4d8c9d['click']('#marketing'), console['log'](getTime() + '\x20[' + _0x56f9b3['name'] + ']\x20Task\x20' + (_0x36abd0 + 0x1) + '\x20:\x20Submitting..'), await _0x4d8c9d['$eval']('#RegisterForm', _0x40f4af => _0x40f4af['submit']()), await delay(0x1f40), console['log'](getTime() + '\x20[' + _0x56f9b3['name'] + ']\x20Task\x20' + (_0x36abd0 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x4d8c9d['solveRecaptchas'](), await _0x4d8c9d['click']('.shopify-challenge__button.btn');
            async function _0x30c4bd() {
                for (var _0x38bcc9 = 0x0; _0x38bcc9 < 0x4; _0x38bcc9++) {
                    try {
                        console['log']('try'), await _0x4d8c9d['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](getTime() + '\x20[' + _0x56f9b3['name'] + ']\x20Task\x20' + (_0x36abd0 + 0x1) + '\x20:\x20' + chalk['red']('Catpcha\x20failed,\x20retrying..')), await _0x4d8c9d['solveRecaptchas'](), await _0x4d8c9d['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x30c4bd(), console['log'](getTime() + '\x20[' + _0x56f9b3['name'] + ']\x20Task\x20' + (_0x36abd0 + 0x1) + '\x20:\x20Captcha\x20Solved'), await delay(0x1f4);
            try {
                await _0x4d8c9d['waitForSelector']('.featured-title'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x56f9b3['name'] + ']\x20Task\x20' + (_0x36abd0 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x36abd0]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x36abd0]['Email'] + ',' + bouncewear[_0x36abd0]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x56f9b3['name'] + ']\x20Task\x20' + (_0x36abd0 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x36abd0]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x40b74a) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36abd0 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x40b74a));
            }
        } catch (_0x2a7bf2) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36abd0 + 0x1) + '\x20:\x20' + _0x2a7bf2));
        } finally {
            _0x1fde82 && _0x1fde82['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function pattaAcc(_0x19921f, _0x554e65, _0x2efc2e, _0x379135) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x24387d = 0x0; _0x24387d < _0x2efc2e['length']; _0x24387d++) {
        await jig(_0x2efc2e, _0x24387d);
        if (_0x2efc2e[_0x24387d]['Email'] == '' || _0x2efc2e[_0x24387d]['Password'] == '' || _0x2efc2e[_0x24387d]['Password'] == undefined || _0x2efc2e[_0x24387d]['FirstName'] == '' || _0x2efc2e[_0x24387d]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x24387d + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x452edd = _0x379135[_0x24387d]['split'](':');
        else
            var _0x4ed21a = Math['round'](Math['random']() * (_0x379135['length'] - 0x1)), _0x452edd = _0x379135[_0x4ed21a]['split'](':');
        const _0x6a6f2c = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x452edd[0x0] + ':' + _0x452edd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x31e9b7 = await _0x6a6f2c['newPage']();
            await _0x31e9b7['authenticate']({
                'username': '' + _0x452edd[0x2],
                'password': '' + _0x452edd[0x3]
            }), console['log'](getTime() + '\x20[' + _0x554e65['name'] + ']\x20Task\x20' + (_0x24387d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x31e9b7['setRequestInterception'](!![]), _0x31e9b7['on']('request', _0x19af9f => {
                _0x19af9f['resourceType']() === 'image' || _0x19af9f['resourceType']() === 'font' || _0x19af9f['resourceType']() === 'media' ? _0x19af9f['abort']() : _0x19af9f['continue']();
            }), await _0x31e9b7['goto'](_0x19921f), await delay(0xbb8), await _0x31e9b7['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x554e65['name'] + ']\x20Task\x20' + (_0x24387d + 0x1) + '\x20:\x20Filling\x20information'), await _0x31e9b7['type']('#RegisterForm-FirstName', '' + _0x2efc2e[_0x24387d]['FirstName']), await delay(0x226), await _0x31e9b7['type']('#RegisterForm-LastName', '' + _0x2efc2e[_0x24387d]['LastName']), await delay(0x226), await _0x31e9b7['type']('#RegisterForm-email', '' + _0x2efc2e[_0x24387d]['Email']), await delay(0x226), await _0x31e9b7['type']('#RegisterForm-password', '' + _0x2efc2e[_0x24387d]['Password']), await delay(0x226), console['log'](getTime() + '\x20[' + _0x554e65['name'] + ']\x20Task\x20' + (_0x24387d + 0x1) + '\x20:\x20Submitting..'), await _0x31e9b7['$eval']('#RegisterForm', _0x2b20a2 => _0x2b20a2['submit']()), await delay(0x1f40);
            try {
                await _0x31e9b7['waitForSelector']('.home-page-grid__collection'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x554e65['name'] + ']\x20Task\x20' + (_0x24387d + 0x1) + '\x20:\x20Account\x20' + _0x2efc2e[_0x24387d]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x2efc2e[_0x24387d]['Email'] + ',' + _0x2efc2e[_0x24387d]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x554e65['name'] + ']\x20Task\x20' + (_0x24387d + 0x1) + '\x20:\x20Account\x20' + _0x2efc2e[_0x24387d]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
            } catch (_0x7e289f) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x24387d + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x7e289f));
            }
        } catch (_0x3ff7bd) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x24387d + 0x1) + '\x20:\x20' + _0x3ff7bd));
        } finally {
            _0x6a6f2c && _0x6a6f2c['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function pattaFunction(_0x93d388, _0xf9e074, _0x53fcbe, _0x1f72a6) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2f64d7 = 0x0; _0x2f64d7 < _0x53fcbe['length']; _0x2f64d7++) {
        await jig(_0x53fcbe, _0x2f64d7);
        if (_0x53fcbe[_0x2f64d7]['Email'] == '' || _0x53fcbe[_0x2f64d7]['Password'] == '' || _0x53fcbe[_0x2f64d7]['FirstName'] == '' || _0x53fcbe[_0x2f64d7]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f64d7 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x2cbc38 = _0x1f72a6[_0x2f64d7]['split'](':');
        else
            var _0x318ec9 = Math['round'](Math['random']() * (_0x1f72a6['length'] - 0x1)), _0x2cbc38 = _0x1f72a6[_0x318ec9]['split'](':');
        const _0x4f77da = await puppeteer['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2cbc38[0x0] + ':' + _0x2cbc38[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3b4638 = await _0x4f77da['newPage']();
            await _0x3b4638['authenticate']({
                'username': '' + _0x2cbc38[0x2],
                'password': '' + _0x2cbc38[0x3]
            }), console['log'](getTime() + '\x20[' + _0xf9e074['name'] + ']\x20Task\x20' + (_0x2f64d7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3b4638['setRequestInterception'](!![]), _0x3b4638['on']('request', _0x5f0f71 => {
                _0x5f0f71['resourceType']() === 'image' || _0x5f0f71['resourceType']() === 'font' || _0x5f0f71['resourceType']() === 'media' ? _0x5f0f71['abort']() : _0x5f0f71['continue']();
            }), await _0x3b4638['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x3b4638['waitForSelector']('#CustomerEmail'), console['log'](getTime() + '\x20[' + _0xf9e074['name'] + ']\x20Task\x20' + (_0x2f64d7 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3b4638['type']('#CustomerEmail', '' + _0x53fcbe[_0x2f64d7]['Email']), await delay(0x12c), await _0x3b4638['type']('#CustomerPassword', '' + _0x53fcbe[_0x2f64d7]['Password']), await delay(0x226), await _0x3b4638['$eval']('#customer_login', _0x29094a => _0x29094a['submit']());
            try {
                await _0x3b4638['waitForSelector']('#orders'), await delay(0x4b0);
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0xf9e074['name'] + ']\x20Task\x20' + (_0x2f64d7 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x3b4638['goto']('' + _0x53fcbe[_0x2f64d7]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0xf9e074['name'] + ']\x20Task\x20' + (_0x2f64d7 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x3b4638['waitForSelector']('#email');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0xf9e074['name'] + ']\x20Task\x20' + (_0x2f64d7 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x3b4638['type']('#email', '' + _0x53fcbe[_0x2f64d7]['Email']), await delay(0x384), await _0x3b4638['type']('#first_name', '' + _0x53fcbe[_0x2f64d7]['FirstName']), await delay(0x514), await _0x3b4638['type']('#last_name', '' + _0x53fcbe[_0x2f64d7]['LastName']), await delay(0x514), await _0x3b4638['type']('#street_address', _0x53fcbe[_0x2f64d7]['Address1'] + '\x20' + _0x53fcbe[_0x2f64d7]['HouseNumber'] + '\x20' + _0x53fcbe[_0x2f64d7]['Address2']), await delay(0x2bc), await _0x3b4638['type']('#zip_code', '' + _0x53fcbe[_0x2f64d7]['Postcode']), await delay(0x320), await _0x3b4638['type']('#city', '' + _0x53fcbe[_0x2f64d7]['City']), await delay(0x320), await _0x3b4638['type']('#bday', '' + _0x53fcbe[_0x2f64d7]['Bday']), await delay(0x320), await _0x3b4638['type']('#instagram', '' + _0x53fcbe[_0x2f64d7]['Follower']), await delay(0x352);
            if (_0x53fcbe[_0x2f64d7]['Size'] == 'RANDOM') {
                const _0x2badec = await _0x3b4638['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x4ab734 => {
                    return _0x4ab734['map'](_0xe459e => _0xe459e['textContent']);
                });
                var _0xc597ac = Math['round'](Math['random']() * (_0x2badec['length'] - 0x1));
                console['log'](getTime() + '\x20[' + _0xf9e074['name'] + ']\x20Task\x20' + (_0x2f64d7 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x2badec[_0xc597ac]), await _0x3b4638['click']('label[data-eu-size=\x22' + _0x2badec[_0xc597ac] + '\x22]');
            } else {
                console['log'](getTime() + '\x20[' + _0xf9e074['name'] + ']\x20Task\x20' + (_0x2f64d7 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x53fcbe[_0x2f64d7]['Size']);
                try {
                    await _0x3b4638['click']('label[data-eu-size=\x22' + _0x53fcbe[_0x2f64d7]['Size'] + '\x22]');
                } catch {
                    await _0x3b4638['click']('label[data-eu-size=\x22' + _0x53fcbe[_0x2f64d7]['Size'] + '.0\x22]');
                }
            }
            await delay(0xbb8), await _0x3b4638['$$eval']('.raffle__checkbox-label', _0x402873 => _0x402873['forEach'](_0x4b0cec => _0x4b0cec['click']())), await delay(0x7d0), console['log'](getTime() + '\x20[' + _0xf9e074['name'] + ']\x20Task\x20' + (_0x2f64d7 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x3b4638['click']('#raffle__form-submit'), await delay(0x1388);
            try {
                await _0x3b4638['waitForSelector']('#raffle__confirmation-message-container'), console['log'](chalk['green'](getTime() + '\x20[' + _0xf9e074['name'] + ']\x20Task\x20' + (_0x2f64d7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x483781) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f64d7 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x483781));
            }
        } catch (_0x39d2c5) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f64d7 + 0x1) + '\x20:\x20' + _0x39d2c5));
        } finally {
            _0x4f77da && _0x4f77da['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function jdFunction(_0x271064, _0x4cdec1, _0x1498a9) {
    var _0x4dcce4 = ![], _0x460ed1 = ![];
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x52898b = 0x0; _0x52898b < _0x4cdec1['length']; _0x52898b++) {
        var _0x29b7a7 = [{
            'type': 'rich',
            'title': 'Succesfull\x20Entry',
            'description': '' + _0x271064['name'],
            'color': 0xc0d6d6,
            'url': '',
            'fields': [
                {
                    'name': 'User',
                    'value': '' + username
                },
                {
                    'name': 'Product',
                    'value': '' + _0x4cdec1[_0x52898b]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4cdec1[_0x52898b]['Size']
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
        const _0x5e5d60 = { 'embeds': _0x29b7a7 };
        await jig(_0x4cdec1, _0x52898b);
        if (_0x4cdec1[_0x52898b]['Email'] == '' || _0x4cdec1[_0x52898b]['Url'] == '' || _0x4cdec1[_0x52898b]['FirstName'] == '' || _0x4cdec1[_0x52898b]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x52898b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x344efb = _0x1498a9[_0x52898b]['split'](':');
        else
            var _0x2252fc = Math['round'](Math['random']() * (_0x1498a9['length'] - 0x1)), _0x344efb = _0x1498a9[_0x2252fc]['split'](':');
        const _0xe05d67 = await puppeteer['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x344efb[0x0] + ':' + _0x344efb[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xb4152e = await _0xe05d67['newPage']();
            await _0xb4152e['authenticate']({
                'username': '' + _0x344efb[0x2],
                'password': '' + _0x344efb[0x3]
            }), console['log'](getTime() + '\x20[' + _0x271064['name'] + ']\x20Task\x20' + (_0x52898b + 0x1) + '\x20:\x20Getting\x20Session'), await _0xb4152e['setRequestInterception'](!![]), _0xb4152e['on']('request', _0x35bbc2 => {
                _0x35bbc2['resourceType']() === 'image' || _0x35bbc2['resourceType']() === 'font' || _0x35bbc2['resourceType']() === 'media' ? _0x35bbc2['abort']() : _0x35bbc2['continue']();
            }), await _0xb4152e['goto']('' + _0x4cdec1[_0x52898b]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](getTime() + '\x20[' + _0x271064['name'] + ']\x20Task\x20' + (_0x52898b + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0xb4152e['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0xb4152e['type']('#comp_firstname', '' + _0x4cdec1[_0x52898b]['FirstName']), await _0xb4152e['waitForSelector']('#comp_lastname'), await _0xb4152e['type']('#comp_lastname', '' + _0x4cdec1[_0x52898b]['LastName']), await _0xb4152e['waitForSelector']('#comp_email'), await _0xb4152e['type']('#comp_email', '' + _0x4cdec1[_0x52898b]['Email']), await _0xb4152e['waitForSelector']('#comp_paypalemail'), await _0xb4152e['type']('#comp_paypalemail', '' + _0x4cdec1[_0x52898b]['Email']), await _0xb4152e['waitForSelector']('#comp_mobile_end'), await _0xb4152e['type']('#comp_mobile_end', '' + _0x4cdec1[_0x52898b]['Phone']), await _0xb4152e['waitForSelector']('#comp_dob'), await _0xb4152e['type']('#comp_dob', '08/09/1992'), console['log'](getTime() + '\x20[' + _0x271064['name'] + ']\x20Task\x20' + (_0x52898b + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x4cdec1[_0x52898b]['Size'] == 'RANDOM') {
                const _0x3b873c = await _0xb4152e['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x88eaf2 => {
                    return _0x88eaf2['map'](_0x5528c9 => _0x5528c9['value']);
                });
                var _0x45e17d = Math['round'](Math['random']() * (_0x3b873c['length'] - 0x2));
                await _0xb4152e['select']('#shoesize', _0x3b873c[_0x45e17d + 0x1]), await delay(0x3e8);
            } else {
                const _0x3a980c = await _0xb4152e['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3f34b1 => {
                    return _0x3f34b1['map'](_0x1f27c7 => _0x1f27c7['innerText']);
                }), _0x1ad955 = await _0xb4152e['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5e9613 => {
                    return _0x5e9613['map'](_0x19b511 => _0x19b511['value']);
                });
                var _0x5d25e9 = _0x4cdec1[_0x52898b]['Size'];
                for (var _0x552db3 = 0x1; _0x552db3 < _0x1ad955['length']; _0x552db3++) {
                    var _0x55ce94 = _0x3a980c[_0x552db3]['split']('\x20')[0x0];
                    if (_0x55ce94 == _0x5d25e9) {
                        await _0xb4152e['select']('#shoesize', _0x1ad955[_0x552db3]);
                        break;
                    } else {
                        if (_0x552db3 + 0x1 == _0x1ad955['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0xb4152e['waitForSelector']('#comp_address1'), await _0xb4152e['type']('#comp_address1', _0x4cdec1[_0x52898b]['Address1'] + '\x20' + _0x4cdec1[_0x52898b]['HouseNumber']), await _0xb4152e['waitForSelector']('#comp_address2'), await _0xb4152e['type']('#comp_address2', '' + _0x4cdec1[_0x52898b]['Address2']), await _0xb4152e['waitForSelector']('#comp_address2'), await _0xb4152e['type']('#comp_address3', '' + _0x4cdec1[_0x52898b]['City']), await _0xb4152e['waitForSelector']('#comp_postcode'), await _0xb4152e['type']('#comp_postcode', '' + _0x4cdec1[_0x52898b]['Zip']), console['log'](getTime() + '\x20[' + _0x271064['name'] + ']\x20Task\x20' + (_0x52898b + 0x1) + '\x20:\x20Sending\x20Entry'), await delay(0x4b0), await _0xb4152e['click']('label#emailhold'), await delay(0x5dc), await _0xb4152e['click']('#preauth_tandc_email\x20>\x20label'), await delay(0x5dc), await _0xb4152e['click']('#submit'), await _0xb4152e['waitForSelector']('#paymentWrap'), console['log'](getTime() + '\x20[' + _0x271064['name'] + ']\x20Task\x20' + (_0x52898b + 0x1) + '\x20:\x20' + chalk['blue']('Awaiting\x20Paypal\x20Payment')), _0xe05d67['on']('targetcreated', async _0x4e4027 => {
                if (_0x4e4027['type']() === 'page') {
                    const _0x5f900 = await _0x4e4027['page']();
                    async function _0x1ce0b8() {
                        try {
                            await _0xb4152e['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x460ed1 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0xdeb0bc() {
                        try {
                            await _0xb4152e['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x4dcce4 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0xdeb0bc(), _0x1ce0b8(), await delay(0x493e0);
                }
            });
            async function _0x3110dc() {
                for (let _0x3b0ced = 0x0; _0x3b0ced < 0x12c; _0x3b0ced++) {
                    if (_0x4dcce4 == !![]) {
                        console['log'](chalk['green'](getTime() + '\x20[' + _0x271064['name'] + ']\x20Task\x20' + (_0x52898b + 0x1) + '\x20:\x20Raffle\x20Entered!')), sendWebhook(succesWH, _0x5e5d60);
                        return;
                    } else {
                        if (_0x460ed1)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await delay(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await delay(0xbb8), await _0xb4152e['click']('.zoid-outlet'), await delay(0x7d0), await _0x3110dc();
        } catch (_0x25a547) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x271064['name'] + ']\x20Task\x20' + (_0x52898b + 0x1) + '\x20:\x20' + _0x25a547)), _0x29b7a7[0x0]['title'] = 'Failed\x20entry', _0x29b7a7[0x0]['description'] = _0x271064['name'] + ':\x20' + _0x25a547, await sendWebhook(errorWH, _0x5e5d60);
        } finally {
            _0xe05d67 && _0xe05d67['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function oqiumFunction(_0x2e12f8, _0x5ed64d, _0x2ecb92, _0x24bbb9) {
    var _0xb75a88 = {}, _0x1d18ea = [], _0x36ff39 = {}, _0x827be6 = [
        '40',
        '40,5',
        '41',
        '42',
        '42,5',
        '43',
        '44',
        '45',
        '45,5',
        '46',
        '47',
        '47,5',
        '48'
    ];
    !_0x24bbb9 && (_0x24bbb9 = {});
    if (_0x5ed64d != 'ver') {
        await jig(_0x24bbb9, _0x2e12f8), _0x1d18ea = [{
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
                    'value': '' + _0x24bbb9[_0x2e12f8]['Size']
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
        }], _0x36ff39 = { 'embeds': _0x1d18ea }, _0xb75a88 = _0x2ecb92['data'];
        _0x5ed64d == 'exp' ? _0xb75a88['data']['attributes']['email'] = '' + _0x24bbb9[_0x2e12f8]['FirstName'] + _0x24bbb9[_0x2e12f8]['LastName'] + settings['catchall'] : _0xb75a88['data']['attributes']['email'] = '' + _0x24bbb9[_0x2e12f8]['Email'];
        if (_0x24bbb9[_0x2e12f8]['Size'] == 'RANDOM') {
        }
        _0xb75a88['data']['attributes']['properties']['$first_name'] = '' + _0x24bbb9[_0x2e12f8]['FirstName'], _0xb75a88['data']['attributes']['properties']['$last_name'] = '' + _0x24bbb9[_0x2e12f8]['LastName'], _0xb75a88['data']['attributes']['properties']['$address1'] = _0x24bbb9[_0x2e12f8]['Address1'] + '\x20' + _0x24bbb9[_0x2e12f8]['Address2'] + '\x20' + _0x24bbb9[_0x2e12f8]['HouseNumber'], _0xb75a88['data']['attributes']['properties']['$zip'] = '' + _0x24bbb9[_0x2e12f8]['Zip'], _0xb75a88['data']['attributes']['properties']['$city'] = '' + _0x24bbb9[_0x2e12f8]['City'], _0xb75a88['data']['attributes']['properties']['$country'] = '' + _0x24bbb9[_0x2e12f8]['Country'], _0xb75a88['data']['attributes']['properties']['Size'] = '' + _0x24bbb9[_0x2e12f8]['Size'], _0xb75a88['data']['attributes']['properties']['$phone_number'] = '' + _0x24bbb9[_0x2e12f8]['Phone'], _0xb75a88['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x24bbb9[_0x2e12f8]['Follower'];
    }
    if (settings['useRandomProxy'] = ![])
        var _0x4d8722 = getProxy()[_0x2e12f8]['split'](':');
    else
        var _0x1c7d98 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x4d8722 = getProxy()[_0x1c7d98]['split'](':');
    var _0x2c9fbe = {
        'jar': j,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x2ecb92['url'],
        'headers': _0x2ecb92['headers'],
        'body': JSON['stringify'](_0xb75a88),
        'proxy': 'http://' + _0x4d8722[0x2] + ':' + _0x4d8722[0x3] + '@' + _0x4d8722[0x0] + ':' + _0x4d8722[0x1]
    };
    return _0x5ed64d != 'ver' && (_0x2c9fbe['url'] = _0x2ecb92['url'], _0x2c9fbe['headers'] = _0x2ecb92['headers']), _0x5ed64d == 'ver' && (_0x2c9fbe['method'] = 'GET'), new Promise(function (_0x4ed4d8, _0x5f1e81) {
        callback = async (_0xb7796d, _0x3df88c, _0x4b92dc) => {
            !_0xb7796d && _0x3df88c['statusCode'] == 0xca || !_0xb7796d && _0x3df88c['statusCode'] == 0xc8 ? (_0x5ed64d != 'ver' && await sendWebhook(succesWH, _0x36ff39), _0x4ed4d8(console['log'](chalk['green'](getTime() + '\x20[' + _0x2ecb92['name'] + ']\x20Task\x20' + (_0x2e12f8 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x5ed64d != 'ver' && (_0x1d18ea[0x0]['title'] = 'Failed\x20entry', _0x1d18ea[0x0]['description'] = '' + _0xb7796d, await sendWebhook(errorWH, _0x36ff39)), _0x5f1e81(console['log'](getTime() + '\x20[' + _0x2ecb92['name'] + ']\x20Task\x20' + (_0x2e12f8 + 0x1) + ':\x20' + _0xb7796d)));
        };
        try {
            _0x5ed64d != 'ver' && console['log'](getTime() + '\x20[' + _0x2ecb92['name'] + ']\x20Task\x20' + (_0x2e12f8 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xb75a88['data']['attributes']['email']), request(_0x2c9fbe, callback);
        } catch (_0x5bba40) {
            console['log'](getTime() + '\x20Task\x20' + (_0x2e12f8 + 0x1) + ':\x20' + _0x5bba40);
        }
    });
}
;
async function main() {
    await loadSettings(), console['clear']();
    if (version != 'devkey') {
        let _0x2293bb = await updater['autoUpdate']();
        if (_0x2293bb === 'yes')
            return exeCute('node\x20JRaffles.js');
        console['clear']();
    }
    if (licenseKey == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await delay(0x2710);
        ;
    }
    await checkLicense(licenseKey);
    if (auth === ![])
        return console['log']('Closing\x20Browser'), await delay(0xbb8);
    else
        try {
            async function _0x4317e5() {
                console['clear'](), console['log']('Welcome\x20to\x20' + chalk['cyan']('JRaffles();') + '\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x49feb2 = 0x0; _0x49feb2 < modules['length']; _0x49feb2++) {
                    if (modules[_0x49feb2]['name'] === 'Reload\x20Settings' || modules[_0x49feb2]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x49feb2 + ')\x20[' + modules[_0x49feb2]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (modules['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (modules['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
                if (modules[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await getFunction(modules[taskModule]['modules']);
                    var _0x47592b = modules[taskModule]['modules'][taskFunction];
                    console['clear'](), await afewScraper(), await getAfewProduct();
                    var _0x1a1af2 = await getProxyFile(), _0x581d2a = await getTaskFile();
                    return await afewFunction(afewProducts[afewProduct], 'nor', _0x47592b, _0x581d2a, _0x1a1af2), _0x4317e5();
                } else {
                    if (modules[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await getFunction(modules[taskModule]['modules']);
                        var _0x47592b = modules[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x1a1af2 = await getProxyFile(), _0x643ad2 = await getTaskFile();
                            console['log']('Starting\x20' + _0x643ad2['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x34b330 = 0x0; _0x34b330 < _0x643ad2['length']; _0x34b330++) {
                                console['log'](getTime() + '\x20[' + _0x47592b['name'] + ']\x20Task\x20' + (_0x34b330 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x34b330, 'nor', _0x47592b, _0x643ad2, _0x1a1af2), console['log'](getTime() + '\x20[' + _0x47592b['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
                            }
                            ;
                            return _0x4317e5();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x1a1af2 = await getProxyFile();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x34b330 = 0x0; _0x34b330 < links['length']; _0x34b330++) {
                                    _0x47592b['url'] = links[_0x34b330], console['log'](getTime() + '\x20[' + _0x47592b['name'] + ']\x20Task\x20' + (_0x34b330 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x34b330, 'ver', _0x47592b, _0x643ad2, _0x1a1af2), console['log'](getTime() + '\x20[' + _0x47592b['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                                }
                                ;
                                return _0x4317e5();
                            }
                        }
                    } else {
                        if (modules[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x1a1af2 = await getProxyFile(), _0x3fda91 = await getTaskFile();
                            return console['log'](_0x3fda91), await footshopModule(_0x3fda91, _0x1a1af2), await delay(0x1388), _0x4317e5();
                        } else {
                            if (modules[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await getFunction(modules[taskModule]['modules']);
                                var _0x47592b = modules[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x14fd52 = await getTaskFile();
                                    console['log']('Starting\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x34b330 = 0x0; _0x34b330 < _0x14fd52['length']; _0x34b330++) {
                                        console['log'](getTime() + '\x20[' + _0x47592b['name'] + ']\x20Task\x20' + (_0x34b330 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await oqiumFunction(_0x34b330, 'nor', _0x47592b, _0x14fd52);
                                        } catch {
                                            console['log'](chalk['red'](getTime() + '\x20[' + _0x47592b['name'] + ']\x20Task\x20' + (_0x34b330 + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](getTime() + '\x20[' + _0x47592b['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                                    }
                                    return _0x4317e5();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x34b330 = 0x0; _0x34b330 < links['length']; _0x34b330++) {
                                            try {
                                                _0x47592b['url'] = links[_0x34b330], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x34b330 + 0x1) + ':\x20Getting\x20Session'), await oqiumFunction(_0x34b330, 'ver', _0x47592b), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                                            } catch (_0x45c1d0) {
                                                console['log'](_0x45c1d0);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x4317e5();
                                    }
                                }
                                ;
                            } else {
                                if (modules[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await getFunction(modules[taskModule]['modules']);
                                    var _0x47592b = modules[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x47592b);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (modules[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await getFunction(modules[taskModule]['modules']);
                                        var _0x47592b = modules[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x1a1af2 = await getProxyFile(), _0x157312 = await getTaskFile();
                                            return await pattaAcc('https://patta.nl/account/register', _0x47592b, _0x157312, _0x1a1af2), _0x4317e5();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x1a1af2 = await getProxyFile(), _0x157312 = await getTaskFile();
                                                return await pattaFunction('', _0x47592b, _0x157312, _0x1a1af2), _0x4317e5();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (modules[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await getFunction(modules[taskModule]['modules']);
                                            var _0x47592b = modules[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x4839e2 = await getTaskFile();
                                                return await kickzAcc('https://www.kickz.com/nl/login/', _0x47592b, _0x4839e2), _0x4317e5();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x4839e2 = await getTaskFile();
                                                    return await kickzFunction('', _0x47592b, _0x4839e2), _0x4317e5();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (modules[taskModule]['name'] == 'JD') {
                                                taskFunction = await getFunction(modules[taskModule]['modules']);
                                                var _0x47592b = modules[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x1a1af2 = await getProxyFile(), _0xcea911 = await getTaskFile();
                                                    return await jdFunction(_0x47592b, _0xcea911, _0x1a1af2), _0x4317e5();
                                                }
                                            } else {
                                                if (modules[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x56d10f = 0x0;
                                                    for (const _0xa4ba15 in settings) {
                                                        console['log']('(' + _0x56d10f + ')\x20' + _0xa4ba15 + '\x20:\x20' + settings[_0xa4ba15]), _0x56d10f++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x56d10f + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x86b93c = await getSetting();
                                                    if (_0x86b93c == _0x56d10f)
                                                        return _0x4317e5();
                                                    console['clear'];
                                                    var _0x2c4aae = 0x0;
                                                    for (var _0x2c2984 in settings) {
                                                        if (_0x86b93c == _0x2c4aae) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x2c2984 + '\x20:'), settings[_0x2c2984] = await getValue(), fs['writeFileSync']('../settings.json', JSON['stringify'](settings));
                                                            break;
                                                        } else
                                                            _0x2c4aae++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await delay(0xbb8), _0x4317e5();
                                                } else {
                                                    if (modules[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await loadSettings(), _0x4317e5();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x4f6712 = await getPassword();
                                                            _0x4f6712 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
            }
            await _0x4317e5();
        } catch (_0x120ece) {
            return console['log'](_0x120ece), await delay(0x3a98);
        }
}
;
setTitle('JRaffles\x20' + version), loadSettings(), main();