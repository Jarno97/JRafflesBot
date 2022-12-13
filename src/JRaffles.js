const puppeteer = require('puppeteer-extra'), RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha'), StealthPlugin = require('puppeteer-extra-plugin-stealth'), chalk = require('chalk'), setTitle = require('node-bash-title'), fs = require('fs'), axios = require('axios'), Papa = require('papaparse');
var random = require('random-name');
const request = require('request'), proxyFile = fs['readFileSync']('../proxies.txt', 'utf-8');
var prompt = require('prompt');
const j = request['jar']();
var settings = {};
const succesWH = 'https://discord.com/api/webhooks/1044989608708030595/HUZ2q06RoQQ24n_rWWEsL6AgM5yXEeUi2SO9VyOLuQgGBeHIlXpPl9Xr5jYMLXwJKwPS', errorWH = 'https://discord.com/api/webhooks/1045001962262900766/ZXWdz3BSjNO08alABR8ERNBgR2SNcydTW-9XxsFuphHYfwHaojLBu3hkw1Ygi3MxOZdz';
var webhook;
const package = JSON['parse'](fs['readFileSync']('../package.json', 'utf-8')), version = package['version'];
var taskCSV, taskFiles, licenseKey, username;
const API_KEY = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
var catchall = settings['catchall'];
let afew = [], maha = [], footshop = [], auth = ![];
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
        'tasks/afew.csv'
    ],
    'executeOnComplete': 'JRaffles.exe'
}, updater = new AutoGitUpdate(config);
async function loadSettings() {
    taskFiles = fs['readdirSync']('../tasks'), settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), !settings['delay'] && (settings['delay'] = 0x2710, fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['captchaKey'] && (settings['captchaKey'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['useRandomProxy'] && (settings['useRandomProxy'] = ![], fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['webhook'] && (settings['webhook'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), webhook = settings['webhook'], licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x77453a => new Promise(_0x4d0aa7 => setTimeout(_0x4d0aa7, _0x77453a));
async function getLicense(_0x5165e9) {
    return axios['get']('https://api.hyper.co/v4/licenses/' + _0x5165e9, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x283b33 => _0x283b33['data'])['catch'](() => null);
}
;
async function checkLicense(_0x2c595f) {
    console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
    const _0x2420a3 = await getLicense(_0x2c595f);
    username = JSON['stringify'](_0x2420a3['user']['username']);
    if (!_0x2420a3)
        return console['log']('License\x20not\x20found');
    if (!_0x2420a3['user'])
        return console['log']('License\x20not\x20bound');
    return _0x2420a3['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
    var _0x103d35 = await prompt['get']('Module');
    return console['clear'](), _0x103d35['Module'];
}
;
async function getSetting() {
    var _0x29f339 = await prompt['get']('Setting');
    return console['clear'](), _0x29f339['Setting'];
}
async function getTaskFile() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x4c05a9 = 0x0; _0x4c05a9 < taskFiles['length']; _0x4c05a9++) {
        console['log']('\x20(' + _0x4c05a9 + ')\x20' + taskFiles[_0x4c05a9]);
    }
    console['log']('');
    var _0x3e2aeb = await prompt['get']('Task'), _0x58346e = fs['readFileSync']('../tasks/' + taskFiles[_0x3e2aeb['Task']], 'utf-8');
    return taskCSV = Papa['parse'](_0x58346e, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x3e2aeb['Task']])), taskCSV;
}
async function getProxyFile() {
    console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x598d85 = 0x0; _0x598d85 < taskFiles['length']; _0x598d85++) {
        console['log']('\x20(' + _0x598d85 + ')\x20' + taskFiles[_0x598d85]);
    }
    console['log']('');
    var _0x4a8a2d = await prompt['get']('Task'), _0x6892bd = fs['readFileSync']('../tasks/' + taskFiles[_0x4a8a2d['Task']], 'utf-8');
    return taskCSV = Papa['parse'](_0x6892bd, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x4a8a2d['Task']])), taskCSV;
}
async function getValue() {
    var _0x1e4928 = await prompt['get']('Value');
    return console['clear'](), _0x1e4928['Value'];
}
async function getFunction(_0x546ea0) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x2a90f7 = 0x0; _0x2a90f7 < _0x546ea0['length']; _0x2a90f7++) {
        console['log']('\x20(' + _0x2a90f7 + ')\x20[' + _0x546ea0[_0x2a90f7]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x57510e = await prompt['get']('Module');
    return _0x57510e['Module'];
}
async function getPassword() {
    var _0x2d2b6b = await prompt['get']('Password');
    return console['clear'](), _0x2d2b6b['Password'];
}
;
async function getLinks() {
    var _0x22b007 = await prompt['get']('Links');
    return _0x22b007['Links'];
}
;
async function getAfewProduct() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x3bca73 = 0x0; _0x3bca73 < afewProducts['length']; _0x3bca73++) {
        console['log']('\x20(' + _0x3bca73 + ')\x20' + afewProducts[_0x3bca73]);
    }
    ;
    console['log']();
    let _0x47e5b1 = await prompt['get']('Product');
    console['clear'](), afewProduct = _0x47e5b1['Product'];
    return;
}
;
function getTime() {
    var _0x73717f = new Date(Date['now']())['toLocaleTimeString']();
    return _0x73717f;
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
async function sendWebhook(_0x1fad29, _0x32e085) {
    let _0x44fbd9 = { 'headers': { 'content-type': 'application/json' } };
    await axios['post'](_0x1fad29, _0x32e085, _0x44fbd9);
}
;
async function jig(_0x33884f, _0x1b56af) {
    var _0x272607 = _0x33884f[_0x1b56af]['Address1']['split'](''), _0x397c78 = _0x33884f[_0x1b56af]['Address2']['split'](''), _0x2eb59a = _0x33884f[_0x1b56af]['Email']['split']('@');
    for (var _0x14d327 = 0x0; _0x14d327 < _0x272607['length']; _0x14d327++) {
        if (_0x272607[_0x14d327] == 'X') {
            var _0x4ace6b = Math['round'](Math['random']() * (letters['length'] - 0x1));
            _0x272607[_0x14d327] = lettersArray[_0x4ace6b];
        }
    }
    ;
    for (var _0x14d327 = 0x0; _0x14d327 < _0x397c78['length']; _0x14d327++) {
        if (_0x397c78[_0x14d327] == 'X') {
            var _0x4ace6b = Math['round'](Math['random']() * (letters['length'] - 0x1));
            _0x397c78[_0x14d327] = lettersArray[_0x4ace6b];
        }
    }
    ;
    _0x33884f[_0x1b56af]['FirstName'] == 'RANDOM' && (_0x33884f[_0x1b56af]['FirstName'] = random['first']());
    _0x33884f[_0x1b56af]['LastName'] == 'RANDOM' && (_0x33884f[_0x1b56af]['LastName'] = random['last']());
    _0x2eb59a[0x0] == 'RANDOM' ? _0x2eb59a[0x0] = '' + random['first']() + random['last']() + '@' : _0x2eb59a[0x0] = _0x2eb59a[0x0] + '@';
    _0x33884f[_0x1b56af]['Email'] = _0x2eb59a['join'](''), _0x33884f[_0x1b56af]['Address1'] = _0x272607['join'](''), _0x33884f[_0x1b56af]['Address2'] = _0x397c78['join']('');
    return;
}
;
function getProxy() {
    let _0x4f400f = proxyFile['split']('\x0a'), _0x3426ba = _0x4f400f['map']((_0xe6ffa0, _0x5642b3) => {
        sanatizeProxy = _0xe6ffa0['replace']('\x0d', '');
        if (_0x4f400f[_0x5642b3 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3426ba;
}
;
async function afewScraper() {
    var _0x494566 = getProxy()[0x1]['split'](':');
    const _0x376411 = await puppeteer['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x494566[0x0] + ':' + _0x494566[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x5c9d25 = await _0x376411['newPage']();
        await _0x5c9d25['authenticate']({
            'username': '' + _0x494566[0x2],
            'password': '' + _0x494566[0x3]
        }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x5c9d25['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5c9d25['setRequestInterception'](!![]), _0x5c9d25['on']('request', _0x50ca7b => {
            _0x50ca7b['resourceType']() === 'image' || _0x50ca7b['resourceType']() === 'font' || _0x50ca7b['resourceType']() === 'media' ? _0x50ca7b['abort']() : _0x50ca7b['continue']();
        }), await _0x5c9d25['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x5c9d25['waitForTimeout'](0xbb8), await _0x5c9d25['waitForSelector']('.product-card');
        const _0x3a3a87 = await _0x5c9d25['$$eval']('a.product-card', _0x2e6f4b => {
            return _0x2e6f4b['map'](_0x12a9b3 => _0x12a9b3['href']);
        });
        return afewProducts = _0x3a3a87;
    } catch (_0x1ba4e2) {
        console['log']('\x20' + _0x1ba4e2);
    } finally {
        _0x376411['close'](), console['clear']();
    }
}
;
async function mahaFunction(_0x5b7448, _0x16cd6e, _0x5b642a, _0x311702) {
    await jig(_0x311702, _0x5b7448);
    var _0x48fb7b = [{
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
                'value': '' + oqium[_0x5b7448]['Size']
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
    const _0x33e552 = { 'embeds': _0x48fb7b };
    if (settings['useRandomProxy'] = ![])
        var _0x4f66ae = getProxy()[_0x5b7448]['split'](':');
    else
        var _0x4968eb = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x4f66ae = getProxy()[_0x4968eb]['split'](':');
    var _0x14e884 = _0x5b642a['data'];
    _0x16cd6e == 'exp' ? _0x14e884['data']['attributes']['email'] = '' + _0x311702[_0x5b7448]['FirstName'] + _0x311702[_0x5b7448]['LastName'] + settings['catchall'] : _0x14e884['data']['attributes']['email'] = '' + _0x311702[_0x5b7448]['Email'];
    _0x14e884['data']['attributes']['properties']['$first_name'] = '' + _0x311702[_0x5b7448]['FirstName'], _0x14e884['data']['attributes']['properties']['$last_name'] = '' + _0x311702[_0x5b7448]['LastName'], _0x14e884['data']['attributes']['properties']['$address1'] = _0x311702[_0x5b7448]['Address1'] + '\x20' + _0x311702[_0x5b7448]['Address2'], _0x14e884['data']['attributes']['properties']['$zip'] = '' + _0x311702[_0x5b7448]['Zip'], _0x14e884['data']['attributes']['properties']['$city'] = '' + _0x311702[_0x5b7448]['City'], _0x14e884['data']['attributes']['properties']['$country'] = '' + _0x311702[_0x5b7448]['Country'], _0x14e884['data']['attributes']['properties']['Size'] = '' + _0x311702[_0x5b7448]['Size'], _0x14e884['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x311702[_0x5b7448]['Follower'];
    var _0x4ddb57 = {
        'jar': j,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x5b642a['url'],
        'headers': _0x5b642a['headers'],
        'body': JSON['stringify'](_0x14e884),
        'proxy': 'http://' + _0x4f66ae[0x2] + ':' + _0x4f66ae[0x3] + '@' + _0x4f66ae[0x0] + ':' + _0x4f66ae[0x1]
    };
    return _0x16cd6e === 'ver' && (_0x4ddb57['method'] = 'GET'), new Promise(function (_0x56f88f, _0x5e2a55) {
        callback = async (_0x351a7d, _0x5bfe84, _0x5e3c55) => {
            !_0x351a7d && _0x5bfe84['statusCode'] == 0xca || !_0x351a7d && _0x5bfe84['statusCode'] == 0xc8 ? _0x56f88f(console['log'](chalk['green'](getTime() + '\x20[' + _0x5b642a['name'] + ']\x20Task\x20' + (_0x5b7448 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x48fb7b[0x0]['title'] = 'Failed\x20entry', _0x48fb7b[0x0]['description'] = '' + _0x351a7d, await sendWebhook(errorWH, _0x33e552), _0x5e2a55(console['log'](getTime() + '\x20[' + _0x5b642a['name'] + ']\x20Task\x20' + (_0x5b7448 + 0x1) + ':\x20' + _0x351a7d)));
        };
        try {
            _0x16cd6e === 'ver' ? console['log'](getTime() + '\x20[' + _0x5b642a['name'] + ']\x20Task\x20' + (_0x5b7448 + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + _0x5b642a['name'] + ']\x20Task\x20' + (_0x5b7448 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x14e884['data']['attributes']['email']), request(_0x4ddb57, callback);
        } catch (_0x1f7f10) {
            console['log'](getTime() + '\x20Task\x20' + (_0x5b7448 + 0x1) + ':\x20' + _0x1f7f10);
        }
    });
}
;
async function footshopModule(_0x2c16c5) {
    var _0x352a40;
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x398dd8 = 0x0; _0x398dd8 < _0x2c16c5['length']; _0x398dd8++) {
        await jig(_0x2c16c5, _0x398dd8);
        if (_0x2c16c5[_0x398dd8]['Email'] == '' || _0x2c16c5[_0x398dd8]['FirstName'] == '' || _0x2c16c5[_0x398dd8]['LastName'] == '' || _0x2c16c5[_0x398dd8]['Country'] == '' || _0x2c16c5[_0x398dd8]['Size'] == '' || _0x2c16c5[_0x398dd8]['Address1'] == '' || _0x2c16c5[_0x398dd8]['Zip'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        console['log'](_0x2c16c5[_0x398dd8]['Url']);
        async function _0x1fcbe7() {
            var _0x3ccbbe = await axios['get']('https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_')['then'](_0x6dd061 => _0x6dd061['data'])['catch'](() => undefined);
            console['log'](_0x3ccbbe);
            var _0x914604 = _0x3ccbbe['sizeSets']['Men']['sizes'];
            _0x914604['length'] == 0x0 && (_0x914604 = _0x3ccbbe['sizeSets']['Women']['sizes'], _0x914604['length'] == 0x0 && (_0x914604 = _0x3ccbbe['sizeSets']['Unisex']['sizes'], _0x914604['length'] == 0x0 && (_0x914604 = _0x3ccbbe['sizeSets']['Kids']['sizes'])));
            ;
            async function _0x3d5fce() {
                for (var _0x51dd16 = 0x0; _0x51dd16 < _0x914604['length']; _0x51dd16++) {
                    if (_0x914604[_0x51dd16]['eur'] == _0x2c16c5[_0x398dd8]['Size'])
                        return _0x352a40 = _0x914604[_0x51dd16]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
                }
                return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x20Size\x20' + _0x2c16c5[_0x398dd8]['Size'] + '\x20not\x20found'), ![];
            }
            ;
            let _0x24acc9 = await _0x3d5fce();
            if (_0x24acc9 == ![])
                return ![];
        }
        let _0x5087d4 = await _0x1fcbe7();
        if (_0x5087d4 == ![])
            continue;
        if (_0x2c16c5[_0x398dd8]['Email'] == '' || _0x2c16c5[_0x398dd8]['FirstName'] == '' || _0x2c16c5[_0x398dd8]['LastName'] == '' || _0x2c16c5[_0x398dd8]['Country'] == '' || _0x2c16c5[_0x398dd8]['Size'] == '' || _0x2c16c5[_0x398dd8]['Address1'] == '' || _0x2c16c5[_0x398dd8]['Zip'] == '' || _0x2c16c5[_0x398dd8]['Phone'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x2d00cf = 'https://releases.footshop.com/register/' + _0x2c16c5[_0x398dd8]['Url'] + '/Men/' + _0x352a40;
        if (settings['useRandomProxy'] = ![])
            var _0x302965 = getProxy()[_0x398dd8]['split'](':');
        else
            var _0x1db46b = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x302965 = getProxy()[_0x1db46b]['split'](':');
        const _0x402af9 = await puppeteer['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x302965[0x0] + ':' + _0x302965[0x1]]
        });
        try {
            const _0x5027e4 = await _0x402af9['newPage']();
            await _0x5027e4['authenticate']({
                'username': '' + _0x302965[0x2],
                'password': '' + _0x302965[0x3]
            }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5027e4['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5027e4['setRequestInterception'](!![]), _0x5027e4['on']('request', _0x44f246 => {
                _0x44f246['resourceType']() === 'image' || _0x44f246['resourceType']() === 'font' || _0x44f246['resourceType']() === 'media' ? _0x44f246['abort']() : _0x44f246['continue']();
            }), await _0x5027e4['goto']('' + _0x2d00cf + _0x352a40), await _0x5027e4['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5027e4['type']('input[name=\x22email\x22]', '' + _0x2c16c5[_0x398dd8]['Email']), await delay(0x640), await _0x5027e4['type']('input[name=\x22phone\x22]', '' + _0x2c16c5[_0x398dd8]['Phone']), await delay(0x4b0), await _0x5027e4['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
            try {
                await _0x5027e4['type']('input[name=\x22firstName\x22]', '' + _0x2c16c5[_0x398dd8]['FirstName']), await delay(0x258);
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
                continue;
            }
            await _0x5027e4['type']('input[name=\x22lastName\x22]', '' + _0x2c16c5[_0x398dd8]['LastName']), await delay(0xc8), await _0x5027e4['type']('input[name=\x22instagramUsername\x22]', '' + _0x2c16c5[_0x398dd8]['Follower']), await delay(0x4b0), await _0x5027e4['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5027e4['select']('select[name=\x22country\x22]', '' + _0x2c16c5[_0x398dd8]['Country']), await delay(0x2bc), await _0x5027e4['type']('input[name=\x22streetName\x22]', '' + _0x2c16c5[_0x398dd8]['Address1']), await delay(0x258), await _0x5027e4['type']('input[name=\x22houseNumber\x22]', '' + _0x2c16c5[_0x398dd8]['HouseNumber'] + _0x2c16c5[_0x398dd8]['Address2']), await delay(0xc8), await _0x5027e4['type']('input[name=\x22postalCode\x22]', '' + _0x2c16c5[_0x398dd8]['Zip']), await delay(0x1f4), await _0x5027e4['type']('input[name=\x22city\x22]', '' + _0x2c16c5[_0x398dd8]['City']), await delay(0x4b0), await _0x5027e4['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x5027e4['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5027e4['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x5027e4['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5027e4['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5027e4['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x4b0), await _0x5027e4['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2c16c5[_0x398dd8]['CardNumber']), await delay(0x320), await _0x5027e4['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2c16c5[_0x398dd8]['ExpiryDate']), await delay(0x4b0), await _0x5027e4['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2c16c5[_0x398dd8]['CVV']), await delay(0x226), await _0x5027e4['type']('input[name=\x22holderName\x22]', '' + _0x2c16c5[_0x398dd8]['NameOnCard']), await delay(0x226), await _0x5027e4['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5027e4['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await delay(0xbb8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x48e4ed) {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x398dd8 + 0x1) + '\x20:\x20' + _0x48e4ed);
        } finally {
            _0x402af9['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
        }
    }
}
afewFunction = async (_0x33dea2, _0x2b49f4, _0x30d7cc, _0x17eba1) => {
    for (var _0x41040f = 0x0; _0x41040f < _0x17eba1['length']; _0x41040f++) {
        await jig(_0x17eba1, _0x41040f);
        var _0x3f6c2d = [{
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
                    'value': '' + _0x33dea2
                },
                {
                    'name': 'Size',
                    'value': '' + _0x17eba1[_0x41040f]['Size']
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
        const _0x5d2b97 = { 'embeds': _0x3f6c2d };
        if (_0x17eba1[_0x41040f]['Email'] == '' || _0x17eba1[_0x41040f]['FirstName'] == '' || _0x17eba1[_0x41040f]['LastName'] == '' || _0x17eba1[_0x41040f]['Country'] == '' || _0x17eba1[_0x41040f]['Size'] == '' || _0x17eba1[_0x41040f]['Address1'] == '' || _0x17eba1[_0x41040f]['Zip'] == '') {
            console['log'](getTime() + '\x20[' + _0x30d7cc['name'] + ']\x20Task\x20' + (_0x41040f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x44cbae = getProxy()[_0x41040f]['split'](':');
        else
            var _0x1b3427 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x44cbae = getProxy()[_0x1b3427]['split'](':');
        const _0xc6e07d = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x44cbae[0x0] + ':' + _0x44cbae[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x50155a = await _0xc6e07d['newPage']();
            await _0x50155a['setDefaultNavigationTimeout'](0x1d4c0), await _0x50155a['authenticate']({
                'username': '' + _0x44cbae[0x2],
                'password': '' + _0x44cbae[0x3]
            }), console['log'](getTime() + '\x20[' + _0x30d7cc['name'] + ']\x20Task\x20' + (_0x41040f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x50155a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x50155a['setRequestInterception'](!![]), _0x50155a['on']('request', _0x184e89 => {
                _0x184e89['resourceType']() === 'image' || _0x184e89['resourceType']() === 'font' || _0x184e89['resourceType']() === 'media' ? _0x184e89['abort']() : _0x184e89['continue']();
            }), await _0x50155a['goto'](_0x33dea2), console['log'](getTime() + '\x20[' + _0x30d7cc['name'] + ']\x20Task\x20' + (_0x41040f + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x50155a['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + _0x30d7cc['name'] + ']\x20Task\x20' + (_0x41040f + 0x1) + '\x20:\x20Cookies\x20received'), await _0x50155a['waitForTimeout'](0x320);
            if (_0x17eba1[_0x41040f]['Size'] == 'RANDOM') {
                console['log'](getTime() + '\x20[' + _0x30d7cc['name'] + ']\x20Task\x20' + (_0x41040f + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x958cc3 = await _0x50155a['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x3b6ee4 => {
                    return _0x3b6ee4['map'](_0x49f54a => _0x49f54a['href']);
                });
                var _0x4b6277 = Math['round'](Math['random']() * (_0x958cc3['length'] - 0x1));
                await _0x50155a['goto']('' + _0x958cc3[_0x4b6277]);
            } else {
                console['log'](getTime() + '\x20[' + _0x30d7cc['name'] + ']\x20Task\x20' + (_0x41040f + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x17eba1[_0x41040f]['Size']);
                try {
                    const _0x40a1e9 = await _0x50155a['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x17eba1[_0x41040f]['Size'] + '\x22]\x20>\x20a', _0xafddfe => {
                        return _0xafddfe['map'](_0x1a4a70 => _0x1a4a70['href']);
                    });
                    await _0x50155a['goto']('' + _0x40a1e9[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x4b3bde) {
                    console['log'](chalk['red'](getTime() + '\x20[' + _0x30d7cc['name'] + ']\x20Task\x20' + (_0x41040f + 0x1) + '\x20:\x20' + _0x4b3bde + '\x20Size\x20not\x20found')), _0x3f6c2d[0x0]['title'] = 'Failed\x20entry', _0x3f6c2d[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x5d2b97);
                    continue;
                }
                try {
                    await _0x50155a['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x17eba1[_0x41040f]['Size'] + '\x22]'), await _0x50155a['waitForTimeout'](0x320), await _0x50155a['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x17eba1[_0x41040f]['Size'] + '\x22]');
                } catch (_0x234245) {
                    console['log'](chalk['red'](getTime() + '\x20[' + _0x30d7cc['name'] + ']\x20Task\x20' + (_0x41040f + 0x1) + '\x20:\x20' + _0x234245 + '\x20Size\x20not\x20found')), _0x3f6c2d[0x0]['title'] = 'Failed\x20entry', _0x3f6c2d[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x5d2b97);
                    continue;
                }
            }
            await _0x50155a['waitForTimeout'](0x258), await _0x50155a['type']('#raffle-instagram', '' + _0x17eba1[_0x41040f]['Follower'], { 'delay': 0x64 }), await _0x50155a['waitForTimeout'](0x384), await _0x50155a['click']('#raffle-terms'), await _0x50155a['waitForTimeout'](0x384), await _0x50155a['evaluate'](() => {
                const _0x374f6c = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x374f6c['click']();
            }), await _0x50155a['waitForTimeout'](0xbb8), await _0x50155a['waitForSelector']('#checkout_email'), await delay(0x3e8), console['log'](getTime() + '\x20[' + _0x30d7cc['name'] + ']\x20Task\x20' + (_0x41040f + 0x1) + '\x20:\x20Filling\x20Information');
            _0x2b49f4 == 'sec' ? await _0x50155a['type']('#checkout_email', '' + _0x17eba1[_0x41040f]['FirstName'] + _0x17eba1[_0x41040f]['LastName'] + settings['catchall'], 0x32) : await _0x50155a['type']('#checkout_email', '' + _0x17eba1[_0x41040f]['Email'], 0x32);
            await delay(0x320), await _0x50155a['select']('#checkout_shipping_address_country', '' + _0x17eba1[_0x41040f]['Country']), await _0x50155a['waitForTimeout'](0x258), await _0x50155a['type']('#checkout_shipping_address_first_name', '' + _0x17eba1[_0x41040f]['FirstName']), await _0x50155a['waitForTimeout'](0x320), await _0x50155a['type']('#checkout_shipping_address_last_name', '' + _0x17eba1[_0x41040f]['LastName']), await _0x50155a['waitForTimeout'](0x2bc), await _0x50155a['type']('#checkout_shipping_address_address1', _0x17eba1[_0x41040f]['Address1'] + '\x20' + _0x17eba1[_0x41040f]['HouseNumber']), await _0x50155a['waitForTimeout'](0x2bc), await _0x50155a['type']('#checkout_shipping_address_address2', '' + _0x17eba1[_0x41040f]['Address2']), await _0x50155a['waitForTimeout'](0x2bc);
            _0x17eba1[_0x41040f]['Postcode'] == undefined ? await _0x50155a['type']('#checkout_shipping_address_zip', '' + _0x17eba1[_0x41040f]['Zip']) : await _0x50155a['type']('#checkout_shipping_address_zip', '' + _0x17eba1[_0x41040f]['Postcode']);
            await _0x50155a['waitForTimeout'](0x2bc), await _0x50155a['type']('#checkout_shipping_address_city', '' + _0x17eba1[_0x41040f]['City']), await _0x50155a['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + _0x30d7cc['name'] + ']\x20Task\x20' + (_0x41040f + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x50155a['evaluate'](() => {
                const _0x2cc270 = document['querySelector']('#continue_button');
                for (var _0x24f29d = 0x0; _0x24f29d < 0x5; _0x24f29d++) {
                    if (_0x2cc270) {
                        _0x2cc270['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x50155a['waitForTimeout'](0x1194), await _0x50155a['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), _0x50155a['evaluate'](() => {
                const _0x580aad = document['querySelector']('#continue_button');
                for (var _0xa1abb1 = 0x0; _0xa1abb1 < 0x5; _0xa1abb1++) {
                    if (_0x580aad) {
                        _0x580aad['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x50155a['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + _0x30d7cc['name'] + ']\x20Task\x20' + (_0x41040f + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x50155a['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x50155a['evaluate'](() => {
                const _0x2ca54b = document['querySelector']('#continue_button');
                for (var _0x37a26d = 0x0; _0x37a26d < 0x5; _0x37a26d++) {
                    if (_0x2ca54b) {
                        _0x2ca54b['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x50155a['waitForTimeout'](0x1194), await _0x50155a['waitForSelector']('#continue_button'), _0x50155a['evaluate'](() => {
                const _0x52d6f1 = document['querySelector']('#continue_button');
                for (var _0x36b479 = 0x0; _0x36b479 < 0x5; _0x36b479++) {
                    if (_0x52d6f1) {
                        _0x52d6f1['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            });
            try {
                await _0x50155a['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x37a9e2) {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x30d7cc['name'] + ']\x20Task\x20' + (_0x41040f + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x37a9e2));
            }
            console['log'](chalk['green'](getTime() + '\x20[' + _0x30d7cc['name'] + ']\x20Task\x20' + (_0x41040f + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x5d2b97);
        } catch (_0x4a1f64) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x30d7cc['name'] + ']\x20Task\x20' + (_0x41040f + 0x1) + '\x20:\x20' + _0x4a1f64)), _0x3f6c2d[0x0]['title'] = 'Failed\x20entry', _0x3f6c2d[0x0]['description'] = '' + _0x4a1f64, await sendWebhook(errorWH, _0x5d2b97);
        } finally {
            _0xc6e07d && _0xc6e07d['close']();
            if (_0x41040f + 0x1 == _0x17eba1['length']) {
                console['log'](chalk['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await delay(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
};
async function kickzAcc(_0x38248f) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2f8020 = 0x0; _0x2f8020 < kickz['length']; _0x2f8020++) {
        await jig(kickz, _0x2f8020);
        if (kickz[_0x2f8020]['Email'] == '' || kickz[_0x2f8020]['Password'] == '' || kickz[_0x2f8020]['FirstName'] == '' || kickz[_0x2f8020]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x1d5a78 = getProxy()[_0x2f8020]['split'](':');
        else
            var _0x35f5bc = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x1d5a78 = getProxy()[_0x35f5bc]['split'](':');
        const _0x1f3890 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1d5a78[0x0] + ':' + _0x1d5a78[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x48906f = await _0x1f3890['newPage']();
            await _0x48906f['authenticate']({
                'username': '' + _0x1d5a78[0x2],
                'password': '' + _0x1d5a78[0x3]
            }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x48906f['setRequestInterception'](!![]), _0x48906f['on']('request', _0x4b1cf2 => {
                _0x4b1cf2['resourceType']() === 'image' || _0x4b1cf2['resourceType']() === 'font' || _0x4b1cf2['resourceType']() === 'media' ? _0x4b1cf2['abort']() : _0x4b1cf2['continue']();
            }), await _0x48906f['goto'](_0x38248f), await delay(0xbb8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x48906f['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x48906f['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x48906f['waitForSelector']('#button-register'), await _0x48906f['click']('#button-register'), await _0x48906f['waitForSelector']('#customer_salutation'), await _0x48906f['select']('#customer_salutation', 'mr'), await delay(0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x48906f['waitForSelector']('#customer_firstname'), await _0x48906f['type']('#customer_firstname', '' + kickz[_0x2f8020]['FirstName']), await delay(0x352), await _0x48906f['waitForSelector']('#customer_lastname'), await _0x48906f['type']('#customer_lastname', '' + kickz[_0x2f8020]['LastName']), await delay(0x352), await _0x48906f['type']('#email-input', '' + kickz[_0x2f8020]['Email']), await delay(0x352), await _0x48906f['type']('#email-confirm-input', '' + kickz[_0x2f8020]['Email']), await delay(0x352), await _0x48906f['type']('#register-password', '' + kickz[_0x2f8020]['Password']), await delay(0x352), await _0x48906f['type']('#password-confirm', '' + kickz[_0x2f8020]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x48906f['click']('#consent'), await delay(0x1f4);
            const _0x5205b3 = await _0x48906f['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x5205b3) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x48906f['click']('#buttonRegister'), await _0x48906f['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x2f8020]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
            async function _0x30b8c2() {
                console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x327ab4 = await prompt['get']('Code');
                return _0x327ab4['Code'];
            }
            ;
            code = await _0x30b8c2(), delay(0x320), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20Verifying..'), await _0x48906f['type']('#verificationCode', code), await delay(0x1f4), await _0x48906f['click']('#buttonVerify'), await delay(0x190), await _0x48906f['click']('#buttonVerify'), await delay(0x3e8);
            try {
                await _0x48906f['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x2f8020]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + kickz[_0x2f8020]['Email'] + ',' + kickz[_0x2f8020]['Password'] + ','), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20Account\x20' + kickz[_0x2f8020]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x45494b) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8020 + 0x1) + '\x20:\x20' + _0x45494b));
        } finally {
            _0x1f3890 && _0x1f3890['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
}
async function bwAcc(_0x5a64b4, _0x3ed8ac) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xf920fc = 0x0; _0xf920fc < bouncewear['length']; _0xf920fc++) {
        await jig(bouncewear, _0xf920fc);
        if (bouncewear[_0xf920fc]['Email'] == '' || bouncewear[_0xf920fc]['Password'] == '' || bouncewear[_0xf920fc]['FirstName'] == '' || bouncewear[_0xf920fc]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xf920fc + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x582b1a = getProxy()[_0xf920fc]['split'](':');
        else
            var _0xc8ed1 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x582b1a = getProxy()[_0xc8ed1]['split'](':');
        const _0x18d576 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x582b1a[0x0] + ':' + _0x582b1a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3a06b8 = await _0x18d576['newPage']();
            await _0x3a06b8['authenticate']({
                'username': '' + _0x582b1a[0x2],
                'password': '' + _0x582b1a[0x3]
            }), console['log'](getTime() + '\x20[' + _0x3ed8ac['name'] + ']\x20Task\x20' + (_0xf920fc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a06b8['setRequestInterception'](!![]), _0x3a06b8['on']('request', _0x106695 => {
                _0x106695['resourceType']() === 'image' || _0x106695['resourceType']() === 'font' || _0x106695['resourceType']() === 'media' ? _0x106695['abort']() : _0x106695['continue']();
            }), await _0x3a06b8['goto'](_0x5a64b4), await delay(0xbb8), await _0x3a06b8['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x3ed8ac['name'] + ']\x20Task\x20' + (_0xf920fc + 0x1) + '\x20:\x20Filling\x20information'), await _0x3a06b8['type']('#RegisterForm-FirstName', '' + bouncewear[_0xf920fc]['FirstName']), await delay(0x226), await _0x3a06b8['type']('#RegisterForm-LastName', '' + bouncewear[_0xf920fc]['LastName']), await delay(0x226), await _0x3a06b8['type']('#RegisterForm-email', '' + bouncewear[_0xf920fc]['Email']), await delay(0x226), await _0x3a06b8['type']('#RegisterForm-password', '' + bouncewear[_0xf920fc]['Password']), await delay(0x226), await _0x3a06b8['click']('#marketing'), console['log'](getTime() + '\x20[' + _0x3ed8ac['name'] + ']\x20Task\x20' + (_0xf920fc + 0x1) + '\x20:\x20Submitting..'), await _0x3a06b8['$eval']('#RegisterForm', _0x2e48d3 => _0x2e48d3['submit']()), await delay(0x1f40), console['log'](getTime() + '\x20[' + _0x3ed8ac['name'] + ']\x20Task\x20' + (_0xf920fc + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x3a06b8['solveRecaptchas'](), await _0x3a06b8['click']('.shopify-challenge__button.btn');
            async function _0x428889() {
                for (var _0x597414 = 0x0; _0x597414 < 0x4; _0x597414++) {
                    try {
                        console['log']('try'), await _0x3a06b8['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](getTime() + '\x20[' + _0x3ed8ac['name'] + ']\x20Task\x20' + (_0xf920fc + 0x1) + '\x20:\x20' + chalk['red']('Catpcha\x20failed,\x20retrying..')), await _0x3a06b8['solveRecaptchas'](), await _0x3a06b8['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x428889(), console['log'](getTime() + '\x20[' + _0x3ed8ac['name'] + ']\x20Task\x20' + (_0xf920fc + 0x1) + '\x20:\x20Captcha\x20Solved'), await delay(0x1f4);
            try {
                await _0x3a06b8['waitForSelector']('.featured-title'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x3ed8ac['name'] + ']\x20Task\x20' + (_0xf920fc + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0xf920fc]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0xf920fc]['Email'] + ',' + bouncewear[_0xf920fc]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x3ed8ac['name'] + ']\x20Task\x20' + (_0xf920fc + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0xf920fc]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x3048f0) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xf920fc + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3048f0));
            }
        } catch (_0x26f00a) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xf920fc + 0x1) + '\x20:\x20' + _0x26f00a));
        } finally {
            _0x18d576 && _0x18d576['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function pattaAcc(_0x42d6e8, _0x2e35a6, _0x4631ce) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x15a46c = 0x0; _0x15a46c < _0x4631ce['length']; _0x15a46c++) {
        await jig(_0x4631ce, _0x15a46c);
        if (_0x4631ce[_0x15a46c]['Email'] == '' || _0x4631ce[_0x15a46c]['Password'] == '' || _0x4631ce[_0x15a46c]['FirstName'] == '' || _0x4631ce[_0x15a46c]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x15a46c + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x22e042 = getProxy()[_0x15a46c]['split'](':');
        else
            var _0x5b24fb = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x22e042 = getProxy()[_0x5b24fb]['split'](':');
        const _0x869934 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x22e042[0x0] + ':' + _0x22e042[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4942a9 = await _0x869934['newPage']();
            await _0x4942a9['authenticate']({
                'username': '' + _0x22e042[0x2],
                'password': '' + _0x22e042[0x3]
            }), console['log'](getTime() + '\x20[' + _0x2e35a6['name'] + ']\x20Task\x20' + (_0x15a46c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4942a9['setRequestInterception'](!![]), _0x4942a9['on']('request', _0x5ae3fd => {
                _0x5ae3fd['resourceType']() === 'image' || _0x5ae3fd['resourceType']() === 'font' || _0x5ae3fd['resourceType']() === 'media' ? _0x5ae3fd['abort']() : _0x5ae3fd['continue']();
            }), await _0x4942a9['goto'](_0x42d6e8), await delay(0xbb8), await _0x4942a9['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x2e35a6['name'] + ']\x20Task\x20' + (_0x15a46c + 0x1) + '\x20:\x20Filling\x20information'), await _0x4942a9['type']('#RegisterForm-FirstName', '' + _0x4631ce[_0x15a46c]['FirstName']), await delay(0x226), await _0x4942a9['type']('#RegisterForm-LastName', '' + _0x4631ce[_0x15a46c]['LastName']), await delay(0x226), await _0x4942a9['type']('#RegisterForm-email', '' + _0x4631ce[_0x15a46c]['Email']), await delay(0x226), await _0x4942a9['type']('#RegisterForm-password', '' + _0x4631ce[_0x15a46c]['Password']), await delay(0x226), console['log'](getTime() + '\x20[' + _0x2e35a6['name'] + ']\x20Task\x20' + (_0x15a46c + 0x1) + '\x20:\x20Submitting..'), await _0x4942a9['$eval']('#RegisterForm', _0x5872d4 => _0x5872d4['submit']()), await delay(0x1f40);
            try {
                await _0x4942a9['waitForSelector']('.home-page-grid__collection'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x2e35a6['name'] + ']\x20Task\x20' + (_0x15a46c + 0x1) + '\x20:\x20Account\x20' + _0x4631ce[_0x15a46c]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x4631ce[_0x15a46c]['Email'] + ',' + _0x4631ce[_0x15a46c]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x2e35a6['name'] + ']\x20Task\x20' + (_0x15a46c + 0x1) + '\x20:\x20Account\x20' + _0x4631ce[_0x15a46c]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
            } catch (_0x16794e) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x15a46c + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x16794e));
            }
        } catch (_0x23b107) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x15a46c + 0x1) + '\x20:\x20' + _0x23b107));
        } finally {
            _0x869934 && _0x869934['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function pattaFunction(_0x276101, _0x1f4954, _0x34580a) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1af62 = 0x0; _0x1af62 < _0x34580a['length']; _0x1af62++) {
        await jig(_0x34580a, _0x1af62);
        if (_0x34580a[_0x1af62]['Email'] == '' || _0x34580a[_0x1af62]['Password'] == '' || _0x34580a[_0x1af62]['FirstName'] == '' || _0x34580a[_0x1af62]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1af62 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x386a7a = getProxy()[_0x1af62]['split'](':');
        else
            var _0x2d8360 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x386a7a = getProxy()[_0x2d8360]['split'](':');
        const _0x18819f = await puppeteer['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x386a7a[0x0] + ':' + _0x386a7a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x37f11 = await _0x18819f['newPage']();
            await _0x37f11['authenticate']({
                'username': '' + _0x386a7a[0x2],
                'password': '' + _0x386a7a[0x3]
            }), console['log'](getTime() + '\x20[' + _0x1f4954['name'] + ']\x20Task\x20' + (_0x1af62 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x37f11['setRequestInterception'](!![]), _0x37f11['on']('request', _0x216d4a => {
                _0x216d4a['resourceType']() === 'image' || _0x216d4a['resourceType']() === 'font' || _0x216d4a['resourceType']() === 'media' ? _0x216d4a['abort']() : _0x216d4a['continue']();
            }), await _0x37f11['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x37f11['waitForSelector']('#CustomerEmail'), console['log'](getTime() + '\x20[' + _0x1f4954['name'] + ']\x20Task\x20' + (_0x1af62 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x37f11['type']('#CustomerEmail', '' + _0x34580a[_0x1af62]['Email']), await delay(0x12c), await _0x37f11['type']('#CustomerPassword', '' + _0x34580a[_0x1af62]['Password']), await delay(0x226), await _0x37f11['$eval']('#customer_login', _0x548edf => _0x548edf['submit']());
            try {
                await _0x37f11['waitForSelector']('#orders'), await delay(0x4b0);
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x1f4954['name'] + ']\x20Task\x20' + (_0x1af62 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x37f11['goto']('' + _0x34580a[_0x1af62]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x1f4954['name'] + ']\x20Task\x20' + (_0x1af62 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x37f11['waitForSelector']('#email');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x1f4954['name'] + ']\x20Task\x20' + (_0x1af62 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x37f11['type']('#email', '' + _0x34580a[_0x1af62]['Email']), await delay(0x384), await _0x37f11['type']('#first_name', '' + _0x34580a[_0x1af62]['FirstName']), await delay(0x514), await _0x37f11['type']('#last_name', '' + _0x34580a[_0x1af62]['LastName']), await delay(0x514), await _0x37f11['type']('#street_address', _0x34580a[_0x1af62]['Address1'] + '\x20' + _0x34580a[_0x1af62]['HouseNumber'] + '\x20' + _0x34580a[_0x1af62]['Address2']), await delay(0x2bc), await _0x37f11['type']('#zip_code', '' + _0x34580a[_0x1af62]['Postcode']), await delay(0x320), await _0x37f11['type']('#city', '' + _0x34580a[_0x1af62]['City']), await delay(0x320), await _0x37f11['type']('#bday', '' + _0x34580a[_0x1af62]['Bday']), await delay(0x320), await _0x37f11['type']('#instagram', '' + _0x34580a[_0x1af62]['Follower']), await delay(0x352);
            if (_0x34580a[_0x1af62]['Size'] == 'RANDOM') {
                const _0x4631fd = await _0x37f11['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x30b7bd => {
                    return _0x30b7bd['map'](_0x1d70cb => _0x1d70cb['textContent']);
                });
                var _0x275f2b = Math['round'](Math['random']() * (_0x4631fd['length'] - 0x1));
                console['log'](getTime() + '\x20[' + _0x1f4954['name'] + ']\x20Task\x20' + (_0x1af62 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x4631fd[_0x275f2b]), await _0x37f11['click']('label[data-eu-size=\x22' + _0x4631fd[_0x275f2b] + '\x22]');
            } else {
                console['log'](getTime() + '\x20[' + _0x1f4954['name'] + ']\x20Task\x20' + (_0x1af62 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x34580a[_0x1af62]['Size']);
                try {
                    await _0x37f11['click']('label[data-eu-size=\x22' + _0x34580a[_0x1af62]['Size'] + '\x22]');
                } catch {
                    await _0x37f11['click']('label[data-eu-size=\x22' + _0x34580a[_0x1af62]['Size'] + '.0\x22]');
                }
            }
            await delay(0xbb8), await _0x37f11['$$eval']('.raffle__checkbox-label', _0x189ad4 => _0x189ad4['forEach'](_0x574f72 => _0x574f72['click']())), await delay(0x7d0), console['log'](getTime() + '\x20[' + _0x1f4954['name'] + ']\x20Task\x20' + (_0x1af62 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x37f11['click']('#raffle__form-submit'), await delay(0x1388);
            try {
                await _0x37f11['waitForSelector']('#raffle__confirmation-message-container'), console['log'](chalk['green'](getTime() + '\x20[' + _0x1f4954['name'] + ']\x20Task\x20' + (_0x1af62 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x9daa79) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1af62 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x9daa79));
            }
        } catch (_0x89cc20) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1af62 + 0x1) + '\x20:\x20' + _0x89cc20));
        } finally {
            _0x18819f && _0x18819f['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function jdFunction(_0x54df86, _0x192159) {
    var _0x126488 = ![], _0xd43064 = ![];
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x237ae8 = 0x0; _0x237ae8 < _0x192159['length']; _0x237ae8++) {
        var _0x35c160 = [{
            'type': 'rich',
            'title': 'Succesfull\x20Entry',
            'description': '' + _0x54df86['name'],
            'color': 0xc0d6d6,
            'url': '',
            'fields': [
                {
                    'name': 'User',
                    'value': '' + username
                },
                {
                    'name': 'Product',
                    'value': '' + _0x192159[_0x237ae8]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x192159[_0x237ae8]['Size']
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
        const _0x3f2658 = { 'embeds': _0x35c160 };
        await jig(_0x192159, _0x237ae8);
        if (_0x192159[_0x237ae8]['Email'] == '' || _0x192159[_0x237ae8]['Url'] == '' || _0x192159[_0x237ae8]['FirstName'] == '' || _0x192159[_0x237ae8]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x237ae8 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x4ceb99 = getProxy()[_0x237ae8]['split'](':');
        else
            var _0x6f24a4 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x4ceb99 = getProxy()[_0x6f24a4]['split'](':');
        const _0x15b41a = await puppeteer['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4ceb99[0x0] + ':' + _0x4ceb99[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x7c2458 = await _0x15b41a['newPage']();
            await _0x7c2458['authenticate']({
                'username': '' + _0x4ceb99[0x2],
                'password': '' + _0x4ceb99[0x3]
            }), console['log'](getTime() + '\x20[' + _0x54df86['name'] + ']\x20Task\x20' + (_0x237ae8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x7c2458['setRequestInterception'](!![]), _0x7c2458['on']('request', _0x4db3e0 => {
                _0x4db3e0['resourceType']() === 'image' || _0x4db3e0['resourceType']() === 'font' || _0x4db3e0['resourceType']() === 'media' ? _0x4db3e0['abort']() : _0x4db3e0['continue']();
            }), await _0x7c2458['goto']('' + _0x192159[_0x237ae8]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](getTime() + '\x20[' + _0x54df86['name'] + ']\x20Task\x20' + (_0x237ae8 + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x7c2458['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x7c2458['type']('#comp_firstname', '' + _0x192159[_0x237ae8]['FirstName']), await _0x7c2458['waitForSelector']('#comp_lastname'), await _0x7c2458['type']('#comp_lastname', '' + _0x192159[_0x237ae8]['LastName']), await _0x7c2458['waitForSelector']('#comp_email'), await _0x7c2458['type']('#comp_email', '' + _0x192159[_0x237ae8]['Email']), await _0x7c2458['waitForSelector']('#comp_paypalemail'), await _0x7c2458['type']('#comp_paypalemail', '' + _0x192159[_0x237ae8]['Email']), await _0x7c2458['waitForSelector']('#comp_mobile_end'), await _0x7c2458['type']('#comp_mobile_end', '' + _0x192159[_0x237ae8]['Phone']), await _0x7c2458['waitForSelector']('#comp_dob'), await _0x7c2458['type']('#comp_dob', '08/09/1992'), console['log'](getTime() + '\x20[' + _0x54df86['name'] + ']\x20Task\x20' + (_0x237ae8 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x192159[_0x237ae8]['Size'] == 'RANDOM') {
                const _0x4211fe = await _0x7c2458['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2849f8 => {
                    return _0x2849f8['map'](_0x4a7edb => _0x4a7edb['value']);
                });
                var _0x5c9a07 = Math['round'](Math['random']() * (_0x4211fe['length'] - 0x2));
                await _0x7c2458['select']('#shoesize', _0x4211fe[_0x5c9a07 + 0x1]), await delay(0x3e8);
            } else {
                const _0x33819d = await _0x7c2458['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xa6b3d3 => {
                    return _0xa6b3d3['map'](_0x520257 => _0x520257['innerText']);
                }), _0x52ba89 = await _0x7c2458['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3466a0 => {
                    return _0x3466a0['map'](_0xb25d49 => _0xb25d49['value']);
                });
                var _0x115134 = _0x192159[_0x237ae8]['Size'];
                for (var _0x1aae6f = 0x1; _0x1aae6f < _0x52ba89['length']; _0x1aae6f++) {
                    var _0x65d3d4 = _0x33819d[_0x1aae6f]['split']('\x20')[0x0];
                    if (_0x65d3d4 == _0x115134) {
                        await _0x7c2458['select']('#shoesize', _0x52ba89[_0x1aae6f]);
                        break;
                    } else {
                        if (_0x1aae6f + 0x1 == _0x52ba89['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x7c2458['waitForSelector']('#comp_address1'), await _0x7c2458['type']('#comp_address1', _0x192159[_0x237ae8]['Address1'] + '\x20' + _0x192159[_0x237ae8]['HouseNumber']), await _0x7c2458['waitForSelector']('#comp_address2'), await _0x7c2458['type']('#comp_address2', '' + _0x192159[_0x237ae8]['Address2']), await _0x7c2458['waitForSelector']('#comp_address2'), await _0x7c2458['type']('#comp_address3', '' + _0x192159[_0x237ae8]['City']), await _0x7c2458['waitForSelector']('#comp_postcode'), await _0x7c2458['type']('#comp_postcode', '' + _0x192159[_0x237ae8]['Zip']), console['log'](getTime() + '\x20[' + _0x54df86['name'] + ']\x20Task\x20' + (_0x237ae8 + 0x1) + '\x20:\x20Sending\x20Entry'), await delay(0x4b0), await _0x7c2458['click']('label#emailhold'), await delay(0x5dc), await _0x7c2458['click']('#preauth_tandc_email\x20>\x20label'), await delay(0x5dc), await _0x7c2458['click']('#submit'), await _0x7c2458['waitForSelector']('#paymentWrap'), console['log'](getTime() + '\x20[' + _0x54df86['name'] + ']\x20Task\x20' + (_0x237ae8 + 0x1) + '\x20:\x20' + chalk['blue']('Awaiting\x20Paypal\x20Payment')), _0x15b41a['on']('targetcreated', async _0x710f81 => {
                if (_0x710f81['type']() === 'page') {
                    const _0x56070e = await _0x710f81['page']();
                    async function _0xced7b6() {
                        try {
                            await _0x7c2458['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0xd43064 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x2c2d3a() {
                        try {
                            await _0x7c2458['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x126488 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x2c2d3a(), _0xced7b6(), await delay(0x493e0);
                }
            });
            async function _0x5d2f47() {
                for (let _0x4a4958 = 0x0; _0x4a4958 < 0x12c; _0x4a4958++) {
                    if (_0x126488 == !![]) {
                        console['log'](chalk['green'](getTime() + '\x20[' + _0x54df86['name'] + ']\x20Task\x20' + (_0x237ae8 + 0x1) + '\x20:\x20Raffle\x20Entered!')), sendWebhook(succesWH, _0x3f2658);
                        return;
                    } else {
                        if (_0xd43064)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await delay(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await delay(0xbb8), await _0x7c2458['click']('.zoid-outlet'), await delay(0x7d0), await _0x5d2f47();
        } catch (_0x1a60b5) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x54df86['name'] + ']\x20Task\x20' + (_0x237ae8 + 0x1) + '\x20:\x20' + _0x1a60b5)), _0x35c160[0x0]['title'] = 'Failed\x20entry', _0x35c160[0x0]['description'] = _0x54df86['name'] + ':\x20' + _0x1a60b5, await sendWebhook(errorWH, _0x3f2658);
        } finally {
            _0x15b41a && _0x15b41a['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function oqiumFunction(_0x4396da, _0x105873, _0x30a85c, _0x8a5b91) {
    var _0x1b732f = {}, _0x2c00f0 = [], _0x53945b = {};
    !_0x8a5b91 && (_0x8a5b91 = {});
    _0x105873 != 'ver' && (await jig(_0x8a5b91, _0x4396da), _0x2c00f0 = [{
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
                'value': '' + _0x8a5b91[_0x4396da]['Size']
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
    }], _0x53945b = { 'embeds': _0x2c00f0 }, _0x1b732f = _0x30a85c['data'], _0x105873 == 'exp' ? _0x1b732f['data']['attributes']['email'] = '' + _0x8a5b91[_0x4396da]['FirstName'] + _0x8a5b91[_0x4396da]['LastName'] + settings['catchall'] : _0x1b732f['data']['attributes']['email'] = '' + _0x8a5b91[_0x4396da]['Email'], _0x1b732f['data']['attributes']['properties']['$first_name'] = '' + _0x8a5b91[_0x4396da]['FirstName'], _0x1b732f['data']['attributes']['properties']['$last_name'] = '' + _0x8a5b91[_0x4396da]['LastName'], _0x1b732f['data']['attributes']['properties']['$address1'] = _0x8a5b91[_0x4396da]['Address1'] + '\x20' + _0x8a5b91[_0x4396da]['Address2'] + '\x20' + _0x8a5b91[_0x4396da]['HouseNumber'], _0x1b732f['data']['attributes']['properties']['$zip'] = '' + _0x8a5b91[_0x4396da]['Zip'], _0x1b732f['data']['attributes']['properties']['$city'] = '' + _0x8a5b91[_0x4396da]['City'], _0x1b732f['data']['attributes']['properties']['$country'] = '' + _0x8a5b91[_0x4396da]['Country'], _0x1b732f['data']['attributes']['properties']['Size'] = '' + _0x8a5b91[_0x4396da]['Size'], _0x1b732f['data']['attributes']['properties']['$phone_number'] = '' + _0x8a5b91[_0x4396da]['Phone'], _0x1b732f['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x8a5b91[_0x4396da]['Follower']);
    if (settings['useRandomProxy'] = ![])
        var _0x168833 = getProxy()[_0x4396da]['split'](':');
    else
        var _0x2aa6cd = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x168833 = getProxy()[_0x2aa6cd]['split'](':');
    var _0x49fced = {
        'jar': j,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x30a85c['url'],
        'headers': _0x30a85c['headers'],
        'body': JSON['stringify'](_0x1b732f),
        'proxy': 'http://' + _0x168833[0x2] + ':' + _0x168833[0x3] + '@' + _0x168833[0x0] + ':' + _0x168833[0x1]
    };
    return _0x105873 != 'ver' && (_0x49fced['url'] = _0x30a85c['url'], _0x49fced['headers'] = _0x30a85c['headers']), _0x105873 == 'ver' && (_0x49fced['method'] = 'GET'), new Promise(function (_0x5de90a, _0x4457f6) {
        callback = async (_0x21a514, _0x3a3f75, _0x57fdd1) => {
            !_0x21a514 && _0x3a3f75['statusCode'] == 0xca || !_0x21a514 && _0x3a3f75['statusCode'] == 0xc8 ? (_0x105873 != 'ver' && await sendWebhook(succesWH, _0x53945b), _0x5de90a(console['log'](chalk['green'](getTime() + '\x20[' + _0x30a85c['name'] + ']\x20Task\x20' + (_0x4396da + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x105873 != 'ver' && (_0x2c00f0[0x0]['title'] = 'Failed\x20entry', _0x2c00f0[0x0]['description'] = '' + _0x21a514, await sendWebhook(errorWH, _0x53945b)), _0x4457f6(console['log'](getTime() + '\x20[' + _0x30a85c['name'] + ']\x20Task\x20' + (_0x4396da + 0x1) + ':\x20' + _0x21a514)));
        };
        try {
            _0x105873 != 'ver' && console['log'](getTime() + '\x20[' + _0x30a85c['name'] + ']\x20Task\x20' + (_0x4396da + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1b732f['data']['attributes']['email']), request(_0x49fced, callback);
        } catch (_0x1fbd1c) {
            console['log'](getTime() + '\x20Task\x20' + (_0x4396da + 0x1) + ':\x20' + _0x1fbd1c);
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
            async function _0x37e9e5() {
                console['clear'](), console['log']('Welcome\x20to\x20' + chalk['cyan']('JRaffles();') + '\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x54afe9 = 0x0; _0x54afe9 < modules['length']; _0x54afe9++) {
                    if (modules[_0x54afe9]['name'] === 'Reload\x20Settings' || modules[_0x54afe9]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x54afe9 + ')\x20[' + modules[_0x54afe9]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (modules['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (modules['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
                if (modules[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await getFunction(modules[taskModule]['modules']);
                    var _0x414ee1 = modules[taskModule]['modules'][taskFunction];
                    console['clear'](), await afewScraper(), await getAfewProduct();
                    var _0x45deda = await getTaskFile();
                    return await afewFunction(afewProducts[afewProduct], 'nor', _0x414ee1, _0x45deda), _0x37e9e5();
                } else {
                    if (modules[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await getFunction(modules[taskModule]['modules']);
                        var _0x414ee1 = modules[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x5dfaaa = await getTaskFile();
                            console['log']('Starting\x20' + _0x5dfaaa['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x53dea2 = 0x0; _0x53dea2 < _0x5dfaaa['length']; _0x53dea2++) {
                                console['log'](getTime() + '\x20[' + _0x414ee1['name'] + ']\x20Task\x20' + (_0x53dea2 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x53dea2, 'nor', _0x414ee1, _0x5dfaaa), console['log'](getTime() + '\x20[' + _0x414ee1['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
                            }
                            ;
                            return _0x37e9e5();
                        } else {
                            if (taskFunction == 0x1) {
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x53dea2 = 0x0; _0x53dea2 < links['length']; _0x53dea2++) {
                                    _0x414ee1['url'] = links[_0x53dea2], console['log'](getTime() + '\x20[' + _0x414ee1['name'] + ']\x20Task\x20' + (_0x53dea2 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x53dea2, 'ver', _0x414ee1), console['log'](getTime() + '\x20[' + _0x414ee1['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                                }
                                ;
                                return _0x37e9e5();
                            }
                        }
                    } else {
                        if (modules[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x12e289 = await getTaskFile();
                            return console['log'](_0x12e289), await footshopModule(_0x12e289), await delay(0x1388), _0x37e9e5();
                        } else {
                            if (modules[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await getFunction(modules[taskModule]['modules']);
                                var _0x414ee1 = modules[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x4c189d = await getTaskFile();
                                    console['log']('Starting\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x53dea2 = 0x0; _0x53dea2 < _0x4c189d['length']; _0x53dea2++) {
                                        console['log'](getTime() + '\x20[' + _0x414ee1['name'] + ']\x20Task\x20' + (_0x53dea2 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await oqiumFunction(_0x53dea2, 'exp', _0x414ee1, _0x4c189d);
                                        } catch {
                                            console['log'](chalk['red'](getTime() + '\x20[' + _0x414ee1['name'] + ']\x20Task\x20' + (_0x53dea2 + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](getTime() + '\x20[' + _0x414ee1['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                                    }
                                    return _0x37e9e5();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x53dea2 = 0x0; _0x53dea2 < links['length']; _0x53dea2++) {
                                            try {
                                                _0x414ee1['url'] = links[_0x53dea2], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x53dea2 + 0x1) + ':\x20Getting\x20Session'), await oqiumFunction(_0x53dea2, 'ver', _0x414ee1), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                                            } catch (_0x236ee6) {
                                                console['log'](_0x236ee6);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x37e9e5();
                                    }
                                }
                                ;
                            } else {
                                if (modules[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await getFunction(modules[taskModule]['modules']);
                                    var _0x414ee1 = modules[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x414ee1);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (modules[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await getFunction(modules[taskModule]['modules']);
                                        var _0x414ee1 = modules[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x4a2e21 = await getTaskFile();
                                            return await pattaAcc('https://patta.nl/account/register', _0x414ee1, _0x4a2e21), _0x37e9e5();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x4a2e21 = await getTaskFile();
                                                return await pattaFunction('', _0x414ee1, _0x4a2e21), _0x37e9e5();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (modules[taskModule]['name'] == 'JD') {
                                            taskFunction = await getFunction(modules[taskModule]['modules']);
                                            var _0x414ee1 = modules[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x181ee9 = await getTaskFile();
                                                return await jdFunction(_0x414ee1, _0x181ee9), _0x37e9e5();
                                            }
                                        } else {
                                            if (modules[taskModule]['name'] == 'Change\x20Settings') {
                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                var _0x4379ae = 0x0;
                                                for (const _0x132d1e in settings) {
                                                    console['log']('(' + _0x4379ae + ')\x20' + _0x132d1e + '\x20:\x20' + settings[_0x132d1e]), _0x4379ae++;
                                                }
                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x4379ae + ')\x20Return\x20to\x20Main\x20Menu');
                                                var _0x8fcdd1 = await getSetting();
                                                if (_0x8fcdd1 == _0x4379ae)
                                                    return _0x37e9e5();
                                                console['clear'];
                                                var _0x4077e4 = 0x0;
                                                for (var _0x1e6da3 in settings) {
                                                    if (_0x8fcdd1 == _0x4077e4) {
                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x1e6da3 + '\x20:'), settings[_0x1e6da3] = await getValue(), fs['writeFileSync']('../settings.json', JSON['stringify'](settings));
                                                        break;
                                                    } else
                                                        _0x4077e4++;
                                                }
                                                return console['log']('Settings\x20Saved!'), await delay(0xbb8), _0x37e9e5();
                                            } else {
                                                if (modules[taskModule]['name'] == 'Reload\x20Settings')
                                                    return console['log']('Reloading\x20settings'), await loadSettings(), _0x37e9e5();
                                                else {
                                                    if (taskModule == 0x45) {
                                                        modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                        var _0x5d8ec9 = await getPassword();
                                                        _0x5d8ec9 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
            await _0x37e9e5();
        } catch (_0x566616) {
            return console['log'](_0x566616), await delay(0x3a98);
        }
}
;
setTitle('JRaffles\x20' + version), loadSettings(), main();