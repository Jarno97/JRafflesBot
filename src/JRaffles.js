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
const delay = _0x4e4aa9 => new Promise(_0x528066 => setTimeout(_0x528066, _0x4e4aa9));
async function getLicense(_0x4f3008) {
    return axios['get']('https://api.hyper.co/v4/licenses/' + _0x4f3008, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x2aa7a7 => _0x2aa7a7['data'])['catch'](() => null);
}
;
async function checkLicense(_0x317496) {
    console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
    const _0x47c3d8 = await getLicense(_0x317496);
    username = JSON['stringify'](_0x47c3d8['user']['username']);
    if (!_0x47c3d8)
        return console['log']('License\x20not\x20found');
    if (!_0x47c3d8['user'])
        return console['log']('License\x20not\x20bound');
    return _0x47c3d8['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
    var _0x14b49f = await prompt['get']('Module');
    return console['clear'](), _0x14b49f['Module'];
}
;
async function getSetting() {
    var _0x23b3b7 = await prompt['get']('Setting');
    return console['clear'](), _0x23b3b7['Setting'];
}
async function getTaskFile() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x204baa = 0x0; _0x204baa < taskFiles['length']; _0x204baa++) {
        console['log']('\x20(' + _0x204baa + ')\x20' + taskFiles[_0x204baa]);
    }
    console['log']('');
    var _0x5ebd69 = await prompt['get']('Task'), _0x196a6f = fs['readFileSync']('../tasks/' + taskFiles[_0x5ebd69['Task']], 'utf-8');
    return taskCSV = Papa['parse'](_0x196a6f, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x5ebd69['Task']])), taskCSV;
}
async function getProxyFile() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x4c9293 = 0x0; _0x4c9293 < proxyFiles['length']; _0x4c9293++) {
        console['log']('\x20(' + _0x4c9293 + ')\x20' + proxyFiles[_0x4c9293]);
    }
    console['log']('');
    var _0x48ecc5 = await prompt['get']('Proxies'), _0x1d67ca = fs['readFileSync']('../proxies/' + proxyFiles[_0x48ecc5['Proxies']], 'utf-8')['split']('\x0a');
    let _0x530955 = _0x1d67ca['map']((_0x21a698, _0x52ec3f) => {
        sanatizeProxy = _0x21a698['replace']('\x0d', '');
        if (_0x1d67ca[_0x52ec3f + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return console['clear'](), _0x530955;
}
async function getValue() {
    var _0x2df2d5 = await prompt['get']('Value');
    return console['clear'](), _0x2df2d5['Value'];
}
async function getFunction(_0x2bd995) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x1f3d0b = 0x0; _0x1f3d0b < _0x2bd995['length']; _0x1f3d0b++) {
        console['log']('\x20(' + _0x1f3d0b + ')\x20[' + _0x2bd995[_0x1f3d0b]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x4afa76 = await prompt['get']('Module');
    return _0x4afa76['Module'];
}
async function getPassword() {
    var _0x42ebb8 = await prompt['get']('Password');
    return console['clear'](), _0x42ebb8['Password'];
}
;
async function getLinks() {
    var _0x8fd2c9 = await prompt['get']('Links');
    return _0x8fd2c9['Links'];
}
;
async function getAfewProduct() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x3690a5 = 0x0; _0x3690a5 < afewProducts['length']; _0x3690a5++) {
        console['log']('\x20(' + _0x3690a5 + ')\x20' + afewProducts[_0x3690a5]);
    }
    ;
    console['log']();
    let _0x51558e = await prompt['get']('Product');
    console['clear'](), afewProduct = _0x51558e['Product'];
    return;
}
;
function getTime() {
    var _0x5a23e8 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x5a23e8;
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
async function sendWebhook(_0x50d6e7, _0x4b485c) {
    let _0x35a070 = { 'headers': { 'content-type': 'application/json' } };
    await axios['post'](_0x50d6e7, _0x4b485c, _0x35a070);
}
;
async function jig(_0x74237a, _0x4467d3) {
    var _0x1dfeae = _0x74237a[_0x4467d3]['Address1']['split'](''), _0x4c94b3 = _0x74237a[_0x4467d3]['Address2']['split'](''), _0xf55554 = _0x74237a[_0x4467d3]['Email']['split']('@');
    for (var _0x60b758 = 0x0; _0x60b758 < _0x1dfeae['length']; _0x60b758++) {
        if (_0x1dfeae[_0x60b758] == 'X') {
            var _0x17dc33 = Math['round'](Math['random']() * (letters['length'] - 0x1));
            _0x1dfeae[_0x60b758] = lettersArray[_0x17dc33];
        }
    }
    ;
    for (var _0x60b758 = 0x0; _0x60b758 < _0x4c94b3['length']; _0x60b758++) {
        if (_0x4c94b3[_0x60b758] == 'X') {
            var _0x17dc33 = Math['round'](Math['random']() * (letters['length'] - 0x1));
            _0x4c94b3[_0x60b758] = lettersArray[_0x17dc33];
        }
    }
    ;
    _0x74237a[_0x4467d3]['FirstName'] == 'RANDOM' && (_0x74237a[_0x4467d3]['FirstName'] = random['first']());
    _0x74237a[_0x4467d3]['LastName'] == 'RANDOM' && (_0x74237a[_0x4467d3]['LastName'] = random['last']());
    _0xf55554[0x0] == 'RANDOM' ? _0xf55554[0x0] = '' + random['first']() + random['last']() + '@' : _0xf55554[0x0] = _0xf55554[0x0] + '@';
    _0x74237a[_0x4467d3]['Email'] = _0xf55554['join'](''), _0x74237a[_0x4467d3]['Address1'] = _0x1dfeae['join'](''), _0x74237a[_0x4467d3]['Address2'] = _0x4c94b3['join']('');
    return;
}
;
function getProxy() {
    let _0xb4dd7d = proxyFile['split']('\x0a'), _0x568857 = _0xb4dd7d['map']((_0x4f0412, _0x53d4f6) => {
        sanatizeProxy = _0x4f0412['replace']('\x0d', '');
        if (_0xb4dd7d[_0x53d4f6 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x568857;
}
;
async function afewScraper() {
    var _0x243665 = getProxy()[0x1]['split'](':');
    const _0x2bd77c = await puppeteer['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x243665[0x0] + ':' + _0x243665[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x58da38 = await _0x2bd77c['newPage']();
        await _0x58da38['authenticate']({
            'username': '' + _0x243665[0x2],
            'password': '' + _0x243665[0x3]
        }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x58da38['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x58da38['setRequestInterception'](!![]), _0x58da38['on']('request', _0xaa8301 => {
            _0xaa8301['resourceType']() === 'image' || _0xaa8301['resourceType']() === 'font' || _0xaa8301['resourceType']() === 'media' ? _0xaa8301['abort']() : _0xaa8301['continue']();
        }), await _0x58da38['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x58da38['waitForTimeout'](0xbb8), await _0x58da38['waitForSelector']('.product-card');
        const _0x4e8818 = await _0x58da38['$$eval']('a.product-card', _0x6c9a63 => {
            return _0x6c9a63['map'](_0x3a54aa => _0x3a54aa['href']);
        });
        return afewProducts = _0x4e8818;
    } catch (_0x50fd20) {
        console['log']('\x20' + _0x50fd20);
    } finally {
        _0x2bd77c['close'](), console['clear']();
    }
}
;
async function mahaFunction(_0x2240b4, _0x2f1875, _0x2acba5, _0x5851e3, _0x572443) {
    await jig(_0x5851e3, _0x2240b4);
    var _0x1da4f1 = [{
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
                'value': '' + _0x5851e3[_0x2240b4]['Size']
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
    const _0x1a6751 = { 'embeds': _0x1da4f1 };
    if (settings['useRandomProxy'] = ![])
        var _0x2f84f7 = _0x572443[_0x2240b4]['split'](':');
    else
        var _0x1fb2ee = Math['round'](Math['random']() * (_0x572443['length'] - 0x1)), _0x2f84f7 = _0x572443[_0x1fb2ee]['split'](':');
    var _0x4f0b6b = _0x2acba5['data'];
    _0x2f1875 == 'exp' ? _0x4f0b6b['data']['attributes']['email'] = '' + _0x5851e3[_0x2240b4]['FirstName'] + _0x5851e3[_0x2240b4]['LastName'] + settings['catchall'] : _0x4f0b6b['data']['attributes']['email'] = '' + _0x5851e3[_0x2240b4]['Email'];
    _0x4f0b6b['data']['attributes']['properties']['$first_name'] = '' + _0x5851e3[_0x2240b4]['FirstName'], _0x4f0b6b['data']['attributes']['properties']['$last_name'] = '' + _0x5851e3[_0x2240b4]['LastName'], _0x4f0b6b['data']['attributes']['properties']['$address1'] = _0x5851e3[_0x2240b4]['Address1'] + '\x20' + _0x5851e3[_0x2240b4]['Address2'], _0x4f0b6b['data']['attributes']['properties']['$zip'] = '' + _0x5851e3[_0x2240b4]['Zip'], _0x4f0b6b['data']['attributes']['properties']['$city'] = '' + _0x5851e3[_0x2240b4]['City'], _0x4f0b6b['data']['attributes']['properties']['$country'] = '' + _0x5851e3[_0x2240b4]['Country'], _0x4f0b6b['data']['attributes']['properties']['Size'] = '' + _0x5851e3[_0x2240b4]['Size'], _0x4f0b6b['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x5851e3[_0x2240b4]['Follower'];
    var _0x3becdd = {
        'jar': j,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x2acba5['url'],
        'headers': _0x2acba5['headers'],
        'body': JSON['stringify'](_0x4f0b6b),
        'proxy': 'http://' + _0x2f84f7[0x2] + ':' + _0x2f84f7[0x3] + '@' + _0x2f84f7[0x0] + ':' + _0x2f84f7[0x1]
    };
    return _0x2f1875 === 'ver' && (_0x3becdd['method'] = 'GET'), new Promise(function (_0x372b5a, _0x10dd18) {
        callback = async (_0x5dcaa8, _0x5e52af, _0x40138d) => {
            !_0x5dcaa8 && _0x5e52af['statusCode'] == 0xca || !_0x5dcaa8 && _0x5e52af['statusCode'] == 0xc8 ? _0x372b5a(console['log'](chalk['green'](getTime() + '\x20[' + _0x2acba5['name'] + ']\x20Task\x20' + (_0x2240b4 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x1da4f1[0x0]['title'] = 'Failed\x20entry', _0x1da4f1[0x0]['description'] = '' + _0x5dcaa8, await sendWebhook(errorWH, _0x1a6751), _0x10dd18(console['log'](getTime() + '\x20[' + _0x2acba5['name'] + ']\x20Task\x20' + (_0x2240b4 + 0x1) + ':\x20' + _0x5dcaa8)));
        };
        try {
            _0x2f1875 === 'ver' ? console['log'](getTime() + '\x20[' + _0x2acba5['name'] + ']\x20Task\x20' + (_0x2240b4 + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + _0x2acba5['name'] + ']\x20Task\x20' + (_0x2240b4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4f0b6b['data']['attributes']['email']), request(_0x3becdd, callback);
        } catch (_0x4f7e24) {
            console['log'](getTime() + '\x20Task\x20' + (_0x2240b4 + 0x1) + ':\x20' + _0x4f7e24);
        }
    });
}
;
async function footshopModule(_0x56a9c7, _0x1334f6) {
    var _0x51069d;
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4434e1 = 0x0; _0x4434e1 < _0x56a9c7['length']; _0x4434e1++) {
        await jig(_0x56a9c7, _0x4434e1);
        if (_0x56a9c7[_0x4434e1]['Email'] == '' || _0x56a9c7[_0x4434e1]['FirstName'] == '' || _0x56a9c7[_0x4434e1]['LastName'] == '' || _0x56a9c7[_0x4434e1]['Country'] == '' || _0x56a9c7[_0x4434e1]['Size'] == '' || _0x56a9c7[_0x4434e1]['Address1'] == '' || _0x56a9c7[_0x4434e1]['Zip'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        console['log'](_0x56a9c7[_0x4434e1]['Url']);
        async function _0x383d44() {
            var _0x45adcc = await axios['get']('https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_')['then'](_0x156ee9 => _0x156ee9['data'])['catch'](() => undefined);
            console['log'](_0x45adcc);
            var _0x1de7fe = _0x45adcc['sizeSets']['Men']['sizes'];
            _0x1de7fe['length'] == 0x0 && (_0x1de7fe = _0x45adcc['sizeSets']['Women']['sizes'], _0x1de7fe['length'] == 0x0 && (_0x1de7fe = _0x45adcc['sizeSets']['Unisex']['sizes'], _0x1de7fe['length'] == 0x0 && (_0x1de7fe = _0x45adcc['sizeSets']['Kids']['sizes'])));
            ;
            async function _0x2ee6ce() {
                for (var _0x162ef1 = 0x0; _0x162ef1 < _0x1de7fe['length']; _0x162ef1++) {
                    if (_0x1de7fe[_0x162ef1]['eur'] == _0x56a9c7[_0x4434e1]['Size'])
                        return _0x51069d = _0x1de7fe[_0x162ef1]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
                }
                return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x20Size\x20' + _0x56a9c7[_0x4434e1]['Size'] + '\x20not\x20found'), ![];
            }
            ;
            let _0x8d7468 = await _0x2ee6ce();
            if (_0x8d7468 == ![])
                return ![];
        }
        let _0x25d734 = await _0x383d44();
        if (_0x25d734 == ![])
            continue;
        if (_0x56a9c7[_0x4434e1]['Email'] == '' || _0x56a9c7[_0x4434e1]['FirstName'] == '' || _0x56a9c7[_0x4434e1]['LastName'] == '' || _0x56a9c7[_0x4434e1]['Country'] == '' || _0x56a9c7[_0x4434e1]['Size'] == '' || _0x56a9c7[_0x4434e1]['Address1'] == '' || _0x56a9c7[_0x4434e1]['Zip'] == '' || _0x56a9c7[_0x4434e1]['Phone'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x53799e = 'https://releases.footshop.com/register/' + _0x56a9c7[_0x4434e1]['Url'] + '/Men/' + _0x51069d;
        if (settings['useRandomProxy'] = ![])
            var _0x495a63 = _0x1334f6[_0x4434e1]['split'](':');
        else
            var _0x26299d = Math['round'](Math['random']() * (_0x1334f6['length'] - 0x1)), _0x495a63 = _0x1334f6[_0x26299d]['split'](':');
        const _0x48150e = await puppeteer['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x495a63[0x0] + ':' + _0x495a63[0x1]]
        });
        try {
            const _0x4be62e = await _0x48150e['newPage']();
            await _0x4be62e['authenticate']({
                'username': '' + _0x495a63[0x2],
                'password': '' + _0x495a63[0x3]
            }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4be62e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4be62e['setRequestInterception'](!![]), _0x4be62e['on']('request', _0x38ff2d => {
                _0x38ff2d['resourceType']() === 'image' || _0x38ff2d['resourceType']() === 'font' || _0x38ff2d['resourceType']() === 'media' ? _0x38ff2d['abort']() : _0x38ff2d['continue']();
            }), await _0x4be62e['goto']('' + _0x53799e + _0x51069d), await _0x4be62e['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x4be62e['type']('input[name=\x22email\x22]', '' + _0x56a9c7[_0x4434e1]['Email']), await delay(0x640), await _0x4be62e['type']('input[name=\x22phone\x22]', '' + _0x56a9c7[_0x4434e1]['Phone']), await delay(0x4b0), await _0x4be62e['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
            try {
                await _0x4be62e['type']('input[name=\x22firstName\x22]', '' + _0x56a9c7[_0x4434e1]['FirstName']), await delay(0x258);
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
                continue;
            }
            await _0x4be62e['type']('input[name=\x22lastName\x22]', '' + _0x56a9c7[_0x4434e1]['LastName']), await delay(0xc8), await _0x4be62e['type']('input[name=\x22instagramUsername\x22]', '' + _0x56a9c7[_0x4434e1]['Follower']), await delay(0x4b0), await _0x4be62e['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x4be62e['select']('select[name=\x22country\x22]', '' + _0x56a9c7[_0x4434e1]['Country']), await delay(0x2bc), await _0x4be62e['type']('input[name=\x22streetName\x22]', '' + _0x56a9c7[_0x4434e1]['Address1']), await delay(0x258), await _0x4be62e['type']('input[name=\x22houseNumber\x22]', '' + _0x56a9c7[_0x4434e1]['HouseNumber'] + _0x56a9c7[_0x4434e1]['Address2']), await delay(0xc8), await _0x4be62e['type']('input[name=\x22postalCode\x22]', '' + _0x56a9c7[_0x4434e1]['Zip']), await delay(0x1f4), await _0x4be62e['type']('input[name=\x22city\x22]', '' + _0x56a9c7[_0x4434e1]['City']), await delay(0x4b0), await _0x4be62e['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x4be62e['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x4be62e['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x4be62e['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x4be62e['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4be62e['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x4b0), await _0x4be62e['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x56a9c7[_0x4434e1]['CardNumber']), await delay(0x320), await _0x4be62e['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x56a9c7[_0x4434e1]['ExpiryDate']), await delay(0x4b0), await _0x4be62e['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x56a9c7[_0x4434e1]['CVV']), await delay(0x226), await _0x4be62e['type']('input[name=\x22holderName\x22]', '' + _0x56a9c7[_0x4434e1]['NameOnCard']), await delay(0x226), await _0x4be62e['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x4be62e['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await delay(0xbb8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x280b3a) {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4434e1 + 0x1) + '\x20:\x20' + _0x280b3a);
        } finally {
            _0x48150e['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
        }
    }
}
afewFunction = async (_0x48de86, _0x651a39, _0x387db4, _0x5ba8e5, _0x1795a3) => {
    for (var _0x1ef4c9 = 0x0; _0x1ef4c9 < _0x5ba8e5['length']; _0x1ef4c9++) {
        await jig(_0x5ba8e5, _0x1ef4c9);
        var _0xae8c78 = [{
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
                    'value': '' + _0x48de86
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5ba8e5[_0x1ef4c9]['Size']
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
        const _0x3f3bd0 = { 'embeds': _0xae8c78 };
        if (_0x5ba8e5[_0x1ef4c9]['Email'] == '' || _0x5ba8e5[_0x1ef4c9]['FirstName'] == '' || _0x5ba8e5[_0x1ef4c9]['LastName'] == '' || _0x5ba8e5[_0x1ef4c9]['Country'] == '' || _0x5ba8e5[_0x1ef4c9]['Size'] == '' || _0x5ba8e5[_0x1ef4c9]['Address1'] == '' || _0x5ba8e5[_0x1ef4c9]['Zip'] == '') {
            console['log'](getTime() + '\x20[' + _0x387db4['name'] + ']\x20Task\x20' + (_0x1ef4c9 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x50e9f0 = _0x1795a3[_0x1ef4c9]['split'](':');
        else
            var _0x1160bb = Math['round'](Math['random']() * (_0x1795a3['length'] - 0x1)), _0x50e9f0 = _0x1795a3[_0x1160bb]['split'](':');
        const _0x13f6b5 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x50e9f0[0x0] + ':' + _0x50e9f0[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x42346d = await _0x13f6b5['newPage']();
            await _0x42346d['setDefaultNavigationTimeout'](0x1d4c0), await _0x42346d['authenticate']({
                'username': '' + _0x50e9f0[0x2],
                'password': '' + _0x50e9f0[0x3]
            }), console['log'](getTime() + '\x20[' + _0x387db4['name'] + ']\x20Task\x20' + (_0x1ef4c9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x42346d['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x42346d['setRequestInterception'](!![]), _0x42346d['on']('request', _0x5ac1ea => {
                _0x5ac1ea['resourceType']() === 'image' || _0x5ac1ea['resourceType']() === 'font' || _0x5ac1ea['resourceType']() === 'media' ? _0x5ac1ea['abort']() : _0x5ac1ea['continue']();
            }), await _0x42346d['goto'](_0x48de86), console['log'](getTime() + '\x20[' + _0x387db4['name'] + ']\x20Task\x20' + (_0x1ef4c9 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x42346d['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + _0x387db4['name'] + ']\x20Task\x20' + (_0x1ef4c9 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x42346d['waitForTimeout'](0x320);
            if (_0x5ba8e5[_0x1ef4c9]['Size'] == 'RANDOM') {
                console['log'](getTime() + '\x20[' + _0x387db4['name'] + ']\x20Task\x20' + (_0x1ef4c9 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x51db33 = await _0x42346d['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x1eefe3 => {
                    return _0x1eefe3['map'](_0x4e4604 => _0x4e4604['href']);
                });
                var _0x47dc96 = Math['round'](Math['random']() * (_0x51db33['length'] - 0x1));
                await _0x42346d['goto']('' + _0x51db33[_0x47dc96]);
            } else {
                console['log'](getTime() + '\x20[' + _0x387db4['name'] + ']\x20Task\x20' + (_0x1ef4c9 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x5ba8e5[_0x1ef4c9]['Size']);
                try {
                    const _0xb82682 = await _0x42346d['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x5ba8e5[_0x1ef4c9]['Size'] + '\x22]\x20>\x20a', _0xd1489c => {
                        return _0xd1489c['map'](_0x3e1c77 => _0x3e1c77['href']);
                    });
                    await _0x42346d['goto']('' + _0xb82682[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x454d62) {
                    console['log'](chalk['red'](getTime() + '\x20[' + _0x387db4['name'] + ']\x20Task\x20' + (_0x1ef4c9 + 0x1) + '\x20:\x20' + _0x454d62 + '\x20Size\x20not\x20found')), _0xae8c78[0x0]['title'] = 'Failed\x20entry', _0xae8c78[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x3f3bd0);
                    continue;
                }
                try {
                    await _0x42346d['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x5ba8e5[_0x1ef4c9]['Size'] + '\x22]'), await _0x42346d['waitForTimeout'](0x320), await _0x42346d['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x5ba8e5[_0x1ef4c9]['Size'] + '\x22]');
                } catch (_0x4c62cf) {
                    console['log'](chalk['red'](getTime() + '\x20[' + _0x387db4['name'] + ']\x20Task\x20' + (_0x1ef4c9 + 0x1) + '\x20:\x20' + _0x4c62cf + '\x20Size\x20not\x20found')), _0xae8c78[0x0]['title'] = 'Failed\x20entry', _0xae8c78[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x3f3bd0);
                    continue;
                }
            }
            await _0x42346d['waitForTimeout'](0x258), await _0x42346d['type']('#raffle-instagram', '' + _0x5ba8e5[_0x1ef4c9]['Follower'], { 'delay': 0x64 }), await _0x42346d['waitForTimeout'](0x384), await _0x42346d['click']('#raffle-terms'), await _0x42346d['waitForTimeout'](0x384), await _0x42346d['evaluate'](() => {
                const _0x32847f = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x32847f['click']();
            }), await _0x42346d['waitForTimeout'](0xbb8), await _0x42346d['waitForSelector']('#checkout_email'), await delay(0x3e8), console['log'](getTime() + '\x20[' + _0x387db4['name'] + ']\x20Task\x20' + (_0x1ef4c9 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x651a39 == 'sec' ? await _0x42346d['type']('#checkout_email', '' + _0x5ba8e5[_0x1ef4c9]['FirstName'] + _0x5ba8e5[_0x1ef4c9]['LastName'] + settings['catchall'], 0x32) : await _0x42346d['type']('#checkout_email', '' + _0x5ba8e5[_0x1ef4c9]['Email'], 0x32);
            await delay(0x320), await _0x42346d['select']('#checkout_shipping_address_country', '' + _0x5ba8e5[_0x1ef4c9]['Country']), await _0x42346d['waitForTimeout'](0x258), await _0x42346d['type']('#checkout_shipping_address_first_name', '' + _0x5ba8e5[_0x1ef4c9]['FirstName']), await _0x42346d['waitForTimeout'](0x320), await _0x42346d['type']('#checkout_shipping_address_last_name', '' + _0x5ba8e5[_0x1ef4c9]['LastName']), await _0x42346d['waitForTimeout'](0x2bc), await _0x42346d['type']('#checkout_shipping_address_address1', _0x5ba8e5[_0x1ef4c9]['Address1'] + '\x20' + _0x5ba8e5[_0x1ef4c9]['HouseNumber']), await _0x42346d['waitForTimeout'](0x2bc), await _0x42346d['type']('#checkout_shipping_address_address2', '' + _0x5ba8e5[_0x1ef4c9]['Address2']), await _0x42346d['waitForTimeout'](0x2bc);
            _0x5ba8e5[_0x1ef4c9]['Postcode'] == undefined ? await _0x42346d['type']('#checkout_shipping_address_zip', '' + _0x5ba8e5[_0x1ef4c9]['Zip']) : await _0x42346d['type']('#checkout_shipping_address_zip', '' + _0x5ba8e5[_0x1ef4c9]['Postcode']);
            await _0x42346d['waitForTimeout'](0x2bc), await _0x42346d['type']('#checkout_shipping_address_city', '' + _0x5ba8e5[_0x1ef4c9]['City']), await _0x42346d['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + _0x387db4['name'] + ']\x20Task\x20' + (_0x1ef4c9 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x42346d['evaluate'](() => {
                const _0x1fefef = document['querySelector']('#continue_button');
                for (var _0x44e8e8 = 0x0; _0x44e8e8 < 0x5; _0x44e8e8++) {
                    if (_0x1fefef) {
                        _0x1fefef['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x42346d['waitForTimeout'](0x1194), await _0x42346d['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), _0x42346d['evaluate'](() => {
                const _0x4970ef = document['querySelector']('#continue_button');
                for (var _0x10a0a8 = 0x0; _0x10a0a8 < 0x5; _0x10a0a8++) {
                    if (_0x4970ef) {
                        _0x4970ef['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x42346d['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + _0x387db4['name'] + ']\x20Task\x20' + (_0x1ef4c9 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x42346d['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x42346d['evaluate'](() => {
                const _0x8144be = document['querySelector']('#continue_button');
                for (var _0x283290 = 0x0; _0x283290 < 0x5; _0x283290++) {
                    if (_0x8144be) {
                        _0x8144be['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x42346d['waitForTimeout'](0x1194), await _0x42346d['waitForSelector']('#continue_button'), _0x42346d['evaluate'](() => {
                const _0x207b4c = document['querySelector']('#continue_button');
                for (var _0x29173c = 0x0; _0x29173c < 0x5; _0x29173c++) {
                    if (_0x207b4c) {
                        _0x207b4c['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            });
            try {
                await _0x42346d['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x2edfcf) {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x387db4['name'] + ']\x20Task\x20' + (_0x1ef4c9 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x2edfcf));
            }
            console['log'](chalk['green'](getTime() + '\x20[' + _0x387db4['name'] + ']\x20Task\x20' + (_0x1ef4c9 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x3f3bd0);
        } catch (_0x4b68dc) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x387db4['name'] + ']\x20Task\x20' + (_0x1ef4c9 + 0x1) + '\x20:\x20' + _0x4b68dc)), _0xae8c78[0x0]['title'] = 'Failed\x20entry', _0xae8c78[0x0]['description'] = '' + _0x4b68dc, await sendWebhook(errorWH, _0x3f3bd0);
        } finally {
            _0x13f6b5 && _0x13f6b5['close']();
            if (_0x1ef4c9 + 0x1 == _0x5ba8e5['length']) {
                console['log'](chalk['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await delay(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
};
async function kickzAcc(_0xc98190, _0x1d5276, _0x2a5f89) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x22481f = 0x0; _0x22481f < _0x2a5f89['length']; _0x22481f++) {
        await jig(_0x2a5f89, _0x22481f);
        if (_0x2a5f89[_0x22481f]['Email'] == '' || _0x2a5f89[_0x22481f]['Password'] == '' || _0x2a5f89[_0x22481f]['FirstName'] == '' || _0x2a5f89[_0x22481f]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x1e65f7 = getProxy()[_0x22481f]['split'](':');
        else
            var _0x230389 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x1e65f7 = getProxy()[_0x230389]['split'](':');
        const _0x26dca4 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1e65f7[0x0] + ':' + _0x1e65f7[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x597332 = await _0x26dca4['newPage']();
            await _0x597332['authenticate']({
                'username': '' + _0x1e65f7[0x2],
                'password': '' + _0x1e65f7[0x3]
            }), console['log'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x597332['setRequestInterception'](!![]), _0x597332['on']('request', _0x541c47 => {
                _0x541c47['resourceType']() === 'image' || _0x541c47['resourceType']() === 'font' || _0x541c47['resourceType']() === 'media' ? _0x541c47['abort']() : _0x541c47['continue']();
            }), await _0x597332['goto'](_0xc98190), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x597332['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x597332['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x597332['waitForSelector']('#button-register'), await delay(0x7d0), await _0x597332['evaluate'](() => {
                const _0x3ea90e = document['querySelector']('#button-register');
                _0x3ea90e['click']();
            }), console['log'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20Setting\x20Credentials'), await delay(0x1388), await _0x597332['waitForSelector']('#customer_salutation'), await _0x597332['select']('#customer_salutation', 'mr'), await delay(0x7d0), await _0x597332['waitForSelector']('#customer_firstname'), await _0x597332['type']('#customer_firstname', '' + _0x2a5f89[_0x22481f]['FirstName']), await delay(0x352), await _0x597332['waitForSelector']('#customer_lastname'), await _0x597332['type']('#customer_lastname', '' + _0x2a5f89[_0x22481f]['LastName']), await delay(0x352), await _0x597332['type']('#email-input', '' + _0x2a5f89[_0x22481f]['Email']), await delay(0x352), await _0x597332['type']('#email-confirm-input', '' + _0x2a5f89[_0x22481f]['Email']), await delay(0x352), await _0x597332['type']('#register-password', '' + _0x2a5f89[_0x22481f]['Password']), await delay(0x352), await _0x597332['type']('#password-confirm', '' + _0x2a5f89[_0x22481f]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x597332['click']('#consent'), await delay(0x1f4);
            const _0x41c97a = await _0x597332['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x41c97a) {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x597332['click']('#buttonRegister'), await _0x597332['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20Account\x20' + _0x2a5f89[_0x22481f]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
            async function _0x22e74d() {
                console['log'](chalk['yellow'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0xc96c53 = await prompt['get']('Code');
                return _0xc96c53['Code'];
            }
            ;
            code = await _0x22e74d(), delay(0x320), console['log'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20Verifying..'), await _0x597332['type']('#verificationCode', code), await delay(0x1f4), await _0x597332['click']('#buttonVerify'), await delay(0x190), await _0x597332['click']('#buttonVerify'), await delay(0x3e8);
            try {
                await _0x597332['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20Account\x20' + _0x2a5f89[_0x22481f]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x2a5f89[_0x22481f]['Email'] + ',' + _0x2a5f89[_0x22481f]['Password'] + ','), console['log'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20Account\x20' + _0x2a5f89[_0x22481f]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x5103e3) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x1d5276['name'] + ']\x20Task\x20' + (_0x22481f + 0x1) + '\x20:\x20' + _0x5103e3));
        } finally {
            _0x26dca4 && _0x26dca4['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
}
async function kickzFunction(_0xfa23f, _0x221000) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2390f3 = 0x0; _0x2390f3 < _0x221000['length']; _0x2390f3++) {
        await jig(_0x221000, _0x2390f3);
        if (_0x221000[_0x2390f3]['Email'] == '' || _0x221000[_0x2390f3]['Password'] == '' || _0x221000[_0x2390f3]['FirstName'] == '' || _0x221000[_0x2390f3]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x20e905 = getProxy()[_0x2390f3]['split'](':');
        else
            var _0x17f841 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x20e905 = getProxy()[_0x17f841]['split'](':');
        const _0x269aaa = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x20e905[0x0] + ':' + _0x20e905[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x453dc3 = await _0x269aaa['newPage']();
            await _0x453dc3['authenticate']({
                'username': '' + _0x20e905[0x2],
                'password': '' + _0x20e905[0x3]
            }), console['log'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x453dc3['setRequestInterception'](!![]), _0x453dc3['on']('request', _0x3dd0dc => {
                _0x3dd0dc['resourceType']() === 'image' || _0x3dd0dc['resourceType']() === 'font' || _0x3dd0dc['resourceType']() === 'media' ? _0x3dd0dc['abort']() : _0x3dd0dc['continue']();
            }), await _0x453dc3['goto']('https://www.kickz.com/nl/login/'), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20Logging\x20in'), await _0x453dc3['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x453dc3['click']('#consent-dialog\x20>\x20section\x20>\x20button'), console['log'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20Setting\x20Credentials'), await delay(0x1388), await _0x453dc3['waitForSelector']('#customer_salutation'), await _0x453dc3['select']('#customer_salutation', 'mr'), await delay(0x7d0), await _0x453dc3['waitForSelector']('#customer_firstname'), await _0x453dc3['type']('#customer_firstname', '' + _0x221000[_0x2390f3]['FirstName']), await delay(0x352), await _0x453dc3['waitForSelector']('#customer_lastname'), await _0x453dc3['type']('#customer_lastname', '' + _0x221000[_0x2390f3]['LastName']), await delay(0x352), await _0x453dc3['type']('#email-input', '' + _0x221000[_0x2390f3]['Email']), await delay(0x352), await _0x453dc3['type']('#email-confirm-input', '' + _0x221000[_0x2390f3]['Email']), await delay(0x352), await _0x453dc3['type']('#register-password', '' + _0x221000[_0x2390f3]['Password']), await delay(0x352), await _0x453dc3['type']('#password-confirm', '' + _0x221000[_0x2390f3]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x453dc3['click']('#consent'), await delay(0x1f4);
            const _0x8ba386 = await _0x453dc3['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x8ba386) {
                console['log'](chalk['red'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x453dc3['click']('#buttonRegister'), await _0x453dc3['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20Account\x20' + _0x221000[_0x2390f3]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
            async function _0x265430() {
                console['log'](chalk['yellow'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x14097f = await prompt['get']('Code');
                return _0x14097f['Code'];
            }
            ;
            code = await _0x265430(), delay(0x320), console['log'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20Verifying..'), await _0x453dc3['type']('#verificationCode', code), await delay(0x1f4), await _0x453dc3['click']('#buttonVerify'), await delay(0x190), await _0x453dc3['click']('#buttonVerify'), await delay(0x3e8);
            try {
                await _0x453dc3['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20Account\x20' + _0x221000[_0x2390f3]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x221000[_0x2390f3]['Email'] + ',' + _0x221000[_0x2390f3]['Password'] + ','), console['log'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20Account\x20' + _0x221000[_0x2390f3]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x40efa7) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0xfa23f['name'] + ']\x20Task\x20' + (_0x2390f3 + 0x1) + '\x20:\x20' + _0x40efa7));
        } finally {
            _0x269aaa && _0x269aaa['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
}
async function bwAcc(_0x1fe1af, _0x5098db) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x29e10d = 0x0; _0x29e10d < bouncewear['length']; _0x29e10d++) {
        await jig(bouncewear, _0x29e10d);
        if (bouncewear[_0x29e10d]['Email'] == '' || bouncewear[_0x29e10d]['Password'] == '' || bouncewear[_0x29e10d]['FirstName'] == '' || bouncewear[_0x29e10d]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e10d + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x3b9638 = getProxy()[_0x29e10d]['split'](':');
        else
            var _0x21bfc9 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x3b9638 = getProxy()[_0x21bfc9]['split'](':');
        const _0x6faa3e = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3b9638[0x0] + ':' + _0x3b9638[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x11616c = await _0x6faa3e['newPage']();
            await _0x11616c['authenticate']({
                'username': '' + _0x3b9638[0x2],
                'password': '' + _0x3b9638[0x3]
            }), console['log'](getTime() + '\x20[' + _0x5098db['name'] + ']\x20Task\x20' + (_0x29e10d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x11616c['setRequestInterception'](!![]), _0x11616c['on']('request', _0x180331 => {
                _0x180331['resourceType']() === 'image' || _0x180331['resourceType']() === 'font' || _0x180331['resourceType']() === 'media' ? _0x180331['abort']() : _0x180331['continue']();
            }), await _0x11616c['goto'](_0x1fe1af), await delay(0xbb8), await _0x11616c['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x5098db['name'] + ']\x20Task\x20' + (_0x29e10d + 0x1) + '\x20:\x20Filling\x20information'), await _0x11616c['type']('#RegisterForm-FirstName', '' + bouncewear[_0x29e10d]['FirstName']), await delay(0x226), await _0x11616c['type']('#RegisterForm-LastName', '' + bouncewear[_0x29e10d]['LastName']), await delay(0x226), await _0x11616c['type']('#RegisterForm-email', '' + bouncewear[_0x29e10d]['Email']), await delay(0x226), await _0x11616c['type']('#RegisterForm-password', '' + bouncewear[_0x29e10d]['Password']), await delay(0x226), await _0x11616c['click']('#marketing'), console['log'](getTime() + '\x20[' + _0x5098db['name'] + ']\x20Task\x20' + (_0x29e10d + 0x1) + '\x20:\x20Submitting..'), await _0x11616c['$eval']('#RegisterForm', _0x6a37ce => _0x6a37ce['submit']()), await delay(0x1f40), console['log'](getTime() + '\x20[' + _0x5098db['name'] + ']\x20Task\x20' + (_0x29e10d + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x11616c['solveRecaptchas'](), await _0x11616c['click']('.shopify-challenge__button.btn');
            async function _0x2c7641() {
                for (var _0x2520e3 = 0x0; _0x2520e3 < 0x4; _0x2520e3++) {
                    try {
                        console['log']('try'), await _0x11616c['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](getTime() + '\x20[' + _0x5098db['name'] + ']\x20Task\x20' + (_0x29e10d + 0x1) + '\x20:\x20' + chalk['red']('Catpcha\x20failed,\x20retrying..')), await _0x11616c['solveRecaptchas'](), await _0x11616c['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x2c7641(), console['log'](getTime() + '\x20[' + _0x5098db['name'] + ']\x20Task\x20' + (_0x29e10d + 0x1) + '\x20:\x20Captcha\x20Solved'), await delay(0x1f4);
            try {
                await _0x11616c['waitForSelector']('.featured-title'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x5098db['name'] + ']\x20Task\x20' + (_0x29e10d + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x29e10d]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x29e10d]['Email'] + ',' + bouncewear[_0x29e10d]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x5098db['name'] + ']\x20Task\x20' + (_0x29e10d + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x29e10d]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x2318e2) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e10d + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2318e2));
            }
        } catch (_0x5c06b3) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x29e10d + 0x1) + '\x20:\x20' + _0x5c06b3));
        } finally {
            _0x6faa3e && _0x6faa3e['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function pattaAcc(_0x478140, _0x116dc5, _0x165289, _0x242037) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x540785 = 0x0; _0x540785 < _0x165289['length']; _0x540785++) {
        await jig(_0x165289, _0x540785);
        if (_0x165289[_0x540785]['Email'] == '' || _0x165289[_0x540785]['Password'] == '' || _0x165289[_0x540785]['Password'] == undefined || _0x165289[_0x540785]['FirstName'] == '' || _0x165289[_0x540785]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x540785 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x979b30 = _0x242037[_0x540785]['split'](':');
        else
            var _0x152b51 = Math['round'](Math['random']() * (_0x242037['length'] - 0x1)), _0x979b30 = _0x242037[_0x152b51]['split'](':');
        const _0x39b053 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x979b30[0x0] + ':' + _0x979b30[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5826e6 = await _0x39b053['newPage']();
            await _0x5826e6['authenticate']({
                'username': '' + _0x979b30[0x2],
                'password': '' + _0x979b30[0x3]
            }), console['log'](getTime() + '\x20[' + _0x116dc5['name'] + ']\x20Task\x20' + (_0x540785 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5826e6['setRequestInterception'](!![]), _0x5826e6['on']('request', _0xada19c => {
                _0xada19c['resourceType']() === 'image' || _0xada19c['resourceType']() === 'font' || _0xada19c['resourceType']() === 'media' ? _0xada19c['abort']() : _0xada19c['continue']();
            }), await _0x5826e6['goto'](_0x478140), await delay(0xbb8), await _0x5826e6['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x116dc5['name'] + ']\x20Task\x20' + (_0x540785 + 0x1) + '\x20:\x20Filling\x20information'), await _0x5826e6['type']('#RegisterForm-FirstName', '' + _0x165289[_0x540785]['FirstName']), await delay(0x226), await _0x5826e6['type']('#RegisterForm-LastName', '' + _0x165289[_0x540785]['LastName']), await delay(0x226), await _0x5826e6['type']('#RegisterForm-email', '' + _0x165289[_0x540785]['Email']), await delay(0x226), await _0x5826e6['type']('#RegisterForm-password', '' + _0x165289[_0x540785]['Password']), await delay(0x226), console['log'](getTime() + '\x20[' + _0x116dc5['name'] + ']\x20Task\x20' + (_0x540785 + 0x1) + '\x20:\x20Submitting..'), await _0x5826e6['$eval']('#RegisterForm', _0x243605 => _0x243605['submit']()), await delay(0x1f40);
            try {
                await _0x5826e6['waitForSelector']('.home-page-grid__collection'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x116dc5['name'] + ']\x20Task\x20' + (_0x540785 + 0x1) + '\x20:\x20Account\x20' + _0x165289[_0x540785]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x165289[_0x540785]['Email'] + ',' + _0x165289[_0x540785]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x116dc5['name'] + ']\x20Task\x20' + (_0x540785 + 0x1) + '\x20:\x20Account\x20' + _0x165289[_0x540785]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
            } catch (_0x551311) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x540785 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x551311));
            }
        } catch (_0x183208) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x540785 + 0x1) + '\x20:\x20' + _0x183208));
        } finally {
            _0x39b053 && _0x39b053['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function pattaFunction(_0x27f0d1, _0x1082d4, _0x4360d3, _0x1bac84) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3905c7 = 0x0; _0x3905c7 < _0x4360d3['length']; _0x3905c7++) {
        await jig(_0x4360d3, _0x3905c7);
        if (_0x4360d3[_0x3905c7]['Email'] == '' || _0x4360d3[_0x3905c7]['Password'] == '' || _0x4360d3[_0x3905c7]['FirstName'] == '' || _0x4360d3[_0x3905c7]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3905c7 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x925d5d = _0x1bac84[_0x3905c7]['split'](':');
        else
            var _0x5a39b0 = Math['round'](Math['random']() * (_0x1bac84['length'] - 0x1)), _0x925d5d = _0x1bac84[_0x5a39b0]['split'](':');
        const _0x8d3c2 = await puppeteer['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x925d5d[0x0] + ':' + _0x925d5d[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x417a6e = await _0x8d3c2['newPage']();
            await _0x417a6e['authenticate']({
                'username': '' + _0x925d5d[0x2],
                'password': '' + _0x925d5d[0x3]
            }), console['log'](getTime() + '\x20[' + _0x1082d4['name'] + ']\x20Task\x20' + (_0x3905c7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x417a6e['setRequestInterception'](!![]), _0x417a6e['on']('request', _0x100f08 => {
                _0x100f08['resourceType']() === 'image' || _0x100f08['resourceType']() === 'font' || _0x100f08['resourceType']() === 'media' ? _0x100f08['abort']() : _0x100f08['continue']();
            }), await _0x417a6e['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x417a6e['waitForSelector']('#CustomerEmail'), console['log'](getTime() + '\x20[' + _0x1082d4['name'] + ']\x20Task\x20' + (_0x3905c7 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x417a6e['type']('#CustomerEmail', '' + _0x4360d3[_0x3905c7]['Email']), await delay(0x12c), await _0x417a6e['type']('#CustomerPassword', '' + _0x4360d3[_0x3905c7]['Password']), await delay(0x226), await _0x417a6e['$eval']('#customer_login', _0x79fd07 => _0x79fd07['submit']());
            try {
                await _0x417a6e['waitForSelector']('#orders'), await delay(0x4b0);
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x1082d4['name'] + ']\x20Task\x20' + (_0x3905c7 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x417a6e['goto']('' + _0x4360d3[_0x3905c7]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x1082d4['name'] + ']\x20Task\x20' + (_0x3905c7 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x417a6e['waitForSelector']('#email');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x1082d4['name'] + ']\x20Task\x20' + (_0x3905c7 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x417a6e['type']('#email', '' + _0x4360d3[_0x3905c7]['Email']), await delay(0x384), await _0x417a6e['type']('#first_name', '' + _0x4360d3[_0x3905c7]['FirstName']), await delay(0x514), await _0x417a6e['type']('#last_name', '' + _0x4360d3[_0x3905c7]['LastName']), await delay(0x514), await _0x417a6e['type']('#street_address', _0x4360d3[_0x3905c7]['Address1'] + '\x20' + _0x4360d3[_0x3905c7]['HouseNumber'] + '\x20' + _0x4360d3[_0x3905c7]['Address2']), await delay(0x2bc), await _0x417a6e['type']('#zip_code', '' + _0x4360d3[_0x3905c7]['Postcode']), await delay(0x320), await _0x417a6e['type']('#city', '' + _0x4360d3[_0x3905c7]['City']), await delay(0x320), await _0x417a6e['type']('#bday', '' + _0x4360d3[_0x3905c7]['Bday']), await delay(0x320), await _0x417a6e['type']('#instagram', '' + _0x4360d3[_0x3905c7]['Follower']), await delay(0x352);
            if (_0x4360d3[_0x3905c7]['Size'] == 'RANDOM') {
                const _0x50c94e = await _0x417a6e['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x401090 => {
                    return _0x401090['map'](_0x2501c0 => _0x2501c0['textContent']);
                });
                var _0x5733df = Math['round'](Math['random']() * (_0x50c94e['length'] - 0x1));
                console['log'](getTime() + '\x20[' + _0x1082d4['name'] + ']\x20Task\x20' + (_0x3905c7 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x50c94e[_0x5733df]), await _0x417a6e['click']('label[data-eu-size=\x22' + _0x50c94e[_0x5733df] + '\x22]');
            } else {
                console['log'](getTime() + '\x20[' + _0x1082d4['name'] + ']\x20Task\x20' + (_0x3905c7 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x4360d3[_0x3905c7]['Size']);
                try {
                    await _0x417a6e['click']('label[data-eu-size=\x22' + _0x4360d3[_0x3905c7]['Size'] + '\x22]');
                } catch {
                    await _0x417a6e['click']('label[data-eu-size=\x22' + _0x4360d3[_0x3905c7]['Size'] + '.0\x22]');
                }
            }
            await delay(0xbb8), await _0x417a6e['$$eval']('.raffle__checkbox-label', _0x3bb9eb => _0x3bb9eb['forEach'](_0x146756 => _0x146756['click']())), await delay(0x7d0), console['log'](getTime() + '\x20[' + _0x1082d4['name'] + ']\x20Task\x20' + (_0x3905c7 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x417a6e['click']('#raffle__form-submit'), await delay(0x1388);
            try {
                await _0x417a6e['waitForSelector']('#raffle__confirmation-message-container'), console['log'](chalk['green'](getTime() + '\x20[' + _0x1082d4['name'] + ']\x20Task\x20' + (_0x3905c7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x2f4bb1) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3905c7 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x2f4bb1));
            }
        } catch (_0x24c52f) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3905c7 + 0x1) + '\x20:\x20' + _0x24c52f));
        } finally {
            _0x8d3c2 && _0x8d3c2['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function jdFunction(_0x5c9076, _0x975e08, _0x113498) {
    var _0x362124 = ![], _0x5ede4d = ![];
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4a5840 = 0x0; _0x4a5840 < _0x975e08['length']; _0x4a5840++) {
        var _0x300884 = [{
            'type': 'rich',
            'title': 'Succesfull\x20Entry',
            'description': '' + _0x5c9076['name'],
            'color': 0xc0d6d6,
            'url': '',
            'fields': [
                {
                    'name': 'User',
                    'value': '' + username
                },
                {
                    'name': 'Product',
                    'value': '' + _0x975e08[_0x4a5840]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x975e08[_0x4a5840]['Size']
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
        const _0x7fa2f9 = { 'embeds': _0x300884 };
        await jig(_0x975e08, _0x4a5840);
        if (_0x975e08[_0x4a5840]['Email'] == '' || _0x975e08[_0x4a5840]['Url'] == '' || _0x975e08[_0x4a5840]['FirstName'] == '' || _0x975e08[_0x4a5840]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4a5840 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x3c7dd1 = _0x113498[_0x4a5840]['split'](':');
        else
            var _0x31e5d3 = Math['round'](Math['random']() * (_0x113498['length'] - 0x1)), _0x3c7dd1 = _0x113498[_0x31e5d3]['split'](':');
        const _0x41fdc4 = await puppeteer['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3c7dd1[0x0] + ':' + _0x3c7dd1[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5dd9cc = await _0x41fdc4['newPage']();
            await _0x5dd9cc['authenticate']({
                'username': '' + _0x3c7dd1[0x2],
                'password': '' + _0x3c7dd1[0x3]
            }), console['log'](getTime() + '\x20[' + _0x5c9076['name'] + ']\x20Task\x20' + (_0x4a5840 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5dd9cc['setRequestInterception'](!![]), _0x5dd9cc['on']('request', _0x1624e0 => {
                _0x1624e0['resourceType']() === 'image' || _0x1624e0['resourceType']() === 'font' || _0x1624e0['resourceType']() === 'media' ? _0x1624e0['abort']() : _0x1624e0['continue']();
            }), await _0x5dd9cc['goto']('' + _0x975e08[_0x4a5840]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](getTime() + '\x20[' + _0x5c9076['name'] + ']\x20Task\x20' + (_0x4a5840 + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x5dd9cc['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x5dd9cc['type']('#comp_firstname', '' + _0x975e08[_0x4a5840]['FirstName']), await _0x5dd9cc['waitForSelector']('#comp_lastname'), await _0x5dd9cc['type']('#comp_lastname', '' + _0x975e08[_0x4a5840]['LastName']), await _0x5dd9cc['waitForSelector']('#comp_email'), await _0x5dd9cc['type']('#comp_email', '' + _0x975e08[_0x4a5840]['Email']), await _0x5dd9cc['waitForSelector']('#comp_paypalemail'), await _0x5dd9cc['type']('#comp_paypalemail', '' + _0x975e08[_0x4a5840]['Email']), await _0x5dd9cc['waitForSelector']('#comp_mobile_end'), await _0x5dd9cc['type']('#comp_mobile_end', '' + _0x975e08[_0x4a5840]['Phone']), await _0x5dd9cc['waitForSelector']('#comp_dob'), await _0x5dd9cc['type']('#comp_dob', '08/09/1992'), console['log'](getTime() + '\x20[' + _0x5c9076['name'] + ']\x20Task\x20' + (_0x4a5840 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x975e08[_0x4a5840]['Size'] == 'RANDOM') {
                const _0x47e740 = await _0x5dd9cc['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x43cc02 => {
                    return _0x43cc02['map'](_0x1dc72b => _0x1dc72b['value']);
                });
                var _0x536a95 = Math['round'](Math['random']() * (_0x47e740['length'] - 0x2));
                await _0x5dd9cc['select']('#shoesize', _0x47e740[_0x536a95 + 0x1]), await delay(0x3e8);
            } else {
                const _0x6b83b = await _0x5dd9cc['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1728fc => {
                    return _0x1728fc['map'](_0x1d867d => _0x1d867d['innerText']);
                }), _0x31a81e = await _0x5dd9cc['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x27b528 => {
                    return _0x27b528['map'](_0x422a46 => _0x422a46['value']);
                });
                var _0x152d02 = _0x975e08[_0x4a5840]['Size'];
                for (var _0x31325e = 0x1; _0x31325e < _0x31a81e['length']; _0x31325e++) {
                    var _0x2877b4 = _0x6b83b[_0x31325e]['split']('\x20')[0x0];
                    if (_0x2877b4 == _0x152d02) {
                        await _0x5dd9cc['select']('#shoesize', _0x31a81e[_0x31325e]);
                        break;
                    } else {
                        if (_0x31325e + 0x1 == _0x31a81e['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x5dd9cc['waitForSelector']('#comp_address1'), await _0x5dd9cc['type']('#comp_address1', _0x975e08[_0x4a5840]['Address1'] + '\x20' + _0x975e08[_0x4a5840]['HouseNumber']), await _0x5dd9cc['waitForSelector']('#comp_address2'), await _0x5dd9cc['type']('#comp_address2', '' + _0x975e08[_0x4a5840]['Address2']), await _0x5dd9cc['waitForSelector']('#comp_address2'), await _0x5dd9cc['type']('#comp_address3', '' + _0x975e08[_0x4a5840]['City']), await _0x5dd9cc['waitForSelector']('#comp_postcode'), await _0x5dd9cc['type']('#comp_postcode', '' + _0x975e08[_0x4a5840]['Zip']), console['log'](getTime() + '\x20[' + _0x5c9076['name'] + ']\x20Task\x20' + (_0x4a5840 + 0x1) + '\x20:\x20Sending\x20Entry'), await delay(0x4b0), await _0x5dd9cc['click']('label#emailhold'), await delay(0x5dc), await _0x5dd9cc['click']('#preauth_tandc_email\x20>\x20label'), await delay(0x5dc), await _0x5dd9cc['click']('#submit'), await _0x5dd9cc['waitForSelector']('#paymentWrap'), console['log'](getTime() + '\x20[' + _0x5c9076['name'] + ']\x20Task\x20' + (_0x4a5840 + 0x1) + '\x20:\x20' + chalk['blue']('Awaiting\x20Paypal\x20Payment')), _0x41fdc4['on']('targetcreated', async _0x40cfab => {
                if (_0x40cfab['type']() === 'page') {
                    const _0x117075 = await _0x40cfab['page']();
                    async function _0x9ea75a() {
                        try {
                            await _0x5dd9cc['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x5ede4d = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x204d32() {
                        try {
                            await _0x5dd9cc['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x362124 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x204d32(), _0x9ea75a(), await delay(0x493e0);
                }
            });
            async function _0x591b74() {
                for (let _0x3a8f52 = 0x0; _0x3a8f52 < 0x12c; _0x3a8f52++) {
                    if (_0x362124 == !![]) {
                        console['log'](chalk['green'](getTime() + '\x20[' + _0x5c9076['name'] + ']\x20Task\x20' + (_0x4a5840 + 0x1) + '\x20:\x20Raffle\x20Entered!')), sendWebhook(succesWH, _0x7fa2f9);
                        return;
                    } else {
                        if (_0x5ede4d)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await delay(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await delay(0xbb8), await _0x5dd9cc['click']('.zoid-outlet'), await delay(0x7d0), await _0x591b74();
        } catch (_0x3c0341) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x5c9076['name'] + ']\x20Task\x20' + (_0x4a5840 + 0x1) + '\x20:\x20' + _0x3c0341)), _0x300884[0x0]['title'] = 'Failed\x20entry', _0x300884[0x0]['description'] = _0x5c9076['name'] + ':\x20' + _0x3c0341, await sendWebhook(errorWH, _0x7fa2f9);
        } finally {
            _0x41fdc4 && _0x41fdc4['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function oqiumFunction(_0xf9d1a6, _0x5f1921, _0x336967, _0x36f94c) {
    var _0x4ddad4 = {}, _0x5ac2da = [], _0x46e7ea = {}, _0x2b3575 = [
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
    !_0x36f94c && (_0x36f94c = {});
    if (_0x5f1921 != 'ver') {
        await jig(_0x36f94c, _0xf9d1a6), _0x5ac2da = [{
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
                    'value': '' + _0x36f94c[_0xf9d1a6]['Size']
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
        }], _0x46e7ea = { 'embeds': _0x5ac2da }, _0x4ddad4 = _0x336967['data'];
        _0x5f1921 == 'exp' ? _0x4ddad4['data']['attributes']['email'] = '' + _0x36f94c[_0xf9d1a6]['FirstName'] + _0x36f94c[_0xf9d1a6]['LastName'] + settings['catchall'] : _0x4ddad4['data']['attributes']['email'] = '' + _0x36f94c[_0xf9d1a6]['Email'];
        if (_0x36f94c[_0xf9d1a6]['Size'] == 'RANDOM') {
        }
        _0x4ddad4['data']['attributes']['properties']['$first_name'] = '' + _0x36f94c[_0xf9d1a6]['FirstName'], _0x4ddad4['data']['attributes']['properties']['$last_name'] = '' + _0x36f94c[_0xf9d1a6]['LastName'], _0x4ddad4['data']['attributes']['properties']['$address1'] = _0x36f94c[_0xf9d1a6]['Address1'] + '\x20' + _0x36f94c[_0xf9d1a6]['Address2'] + '\x20' + _0x36f94c[_0xf9d1a6]['HouseNumber'], _0x4ddad4['data']['attributes']['properties']['$zip'] = '' + _0x36f94c[_0xf9d1a6]['Zip'], _0x4ddad4['data']['attributes']['properties']['$city'] = '' + _0x36f94c[_0xf9d1a6]['City'], _0x4ddad4['data']['attributes']['properties']['$country'] = '' + _0x36f94c[_0xf9d1a6]['Country'], _0x4ddad4['data']['attributes']['properties']['Size'] = '' + _0x36f94c[_0xf9d1a6]['Size'], _0x4ddad4['data']['attributes']['properties']['$phone_number'] = '' + _0x36f94c[_0xf9d1a6]['Phone'], _0x4ddad4['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x36f94c[_0xf9d1a6]['Follower'];
    }
    if (settings['useRandomProxy'] = ![])
        var _0x53f131 = getProxy()[_0xf9d1a6]['split'](':');
    else
        var _0x59e237 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x53f131 = getProxy()[_0x59e237]['split'](':');
    var _0x1a69cd = {
        'jar': j,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x336967['url'],
        'headers': _0x336967['headers'],
        'body': JSON['stringify'](_0x4ddad4),
        'proxy': 'http://' + _0x53f131[0x2] + ':' + _0x53f131[0x3] + '@' + _0x53f131[0x0] + ':' + _0x53f131[0x1]
    };
    return _0x5f1921 != 'ver' && (_0x1a69cd['url'] = _0x336967['url'], _0x1a69cd['headers'] = _0x336967['headers']), _0x5f1921 == 'ver' && (_0x1a69cd['method'] = 'GET'), new Promise(function (_0x29d7f9, _0x2fac2a) {
        callback = async (_0x131eaa, _0x468e9d, _0x17b694) => {
            !_0x131eaa && _0x468e9d['statusCode'] == 0xca || !_0x131eaa && _0x468e9d['statusCode'] == 0xc8 ? (_0x5f1921 != 'ver' && await sendWebhook(succesWH, _0x46e7ea), _0x29d7f9(console['log'](chalk['green'](getTime() + '\x20[' + _0x336967['name'] + ']\x20Task\x20' + (_0xf9d1a6 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x5f1921 != 'ver' && (_0x5ac2da[0x0]['title'] = 'Failed\x20entry', _0x5ac2da[0x0]['description'] = '' + _0x131eaa, await sendWebhook(errorWH, _0x46e7ea)), _0x2fac2a(console['log'](getTime() + '\x20[' + _0x336967['name'] + ']\x20Task\x20' + (_0xf9d1a6 + 0x1) + ':\x20' + _0x131eaa)));
        };
        try {
            _0x5f1921 != 'ver' && console['log'](getTime() + '\x20[' + _0x336967['name'] + ']\x20Task\x20' + (_0xf9d1a6 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4ddad4['data']['attributes']['email']), request(_0x1a69cd, callback);
        } catch (_0x316b7c) {
            console['log'](getTime() + '\x20Task\x20' + (_0xf9d1a6 + 0x1) + ':\x20' + _0x316b7c);
        }
    });
}
;
async function main() {
    await loadSettings(), console['clear']();
    if (version != 'devkey') {
        let _0x1cd940 = await updater['autoUpdate']();
        if (_0x1cd940 === 'yes')
            return console['log']('Restart\x20needed\x20after\x20Update'), exeCute('node\x20JRaffles.js');
        await delay(0x7d0), console['clear']();
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
            async function _0x2d8e87() {
                console['clear'](), console['log']('Welcome\x20to\x20' + chalk['cyan']('JRaffles();') + '\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x505a05 = 0x0; _0x505a05 < modules['length']; _0x505a05++) {
                    if (modules[_0x505a05]['name'] === 'Reload\x20Settings' || modules[_0x505a05]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x505a05 + ')\x20[' + modules[_0x505a05]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (modules['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (modules['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
                if (modules[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await getFunction(modules[taskModule]['modules']);
                    var _0x2e549f = modules[taskModule]['modules'][taskFunction];
                    console['clear'](), await afewScraper(), await getAfewProduct();
                    var _0x22b84d = await getProxyFile(), _0x129525 = await getTaskFile();
                    return await afewFunction(afewProducts[afewProduct], 'nor', _0x2e549f, _0x129525, _0x22b84d), _0x2d8e87();
                } else {
                    if (modules[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await getFunction(modules[taskModule]['modules']);
                        var _0x2e549f = modules[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x22b84d = await getProxyFile(), _0x1fb05d = await getTaskFile();
                            console['log']('Starting\x20' + _0x1fb05d['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x2cc825 = 0x0; _0x2cc825 < _0x1fb05d['length']; _0x2cc825++) {
                                console['log'](getTime() + '\x20[' + _0x2e549f['name'] + ']\x20Task\x20' + (_0x2cc825 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2cc825, 'nor', _0x2e549f, _0x1fb05d, _0x22b84d), console['log'](getTime() + '\x20[' + _0x2e549f['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
                            }
                            ;
                            return _0x2d8e87();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x22b84d = await getProxyFile();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x2cc825 = 0x0; _0x2cc825 < links['length']; _0x2cc825++) {
                                    _0x2e549f['url'] = links[_0x2cc825], console['log'](getTime() + '\x20[' + _0x2e549f['name'] + ']\x20Task\x20' + (_0x2cc825 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2cc825, 'ver', _0x2e549f, _0x1fb05d, _0x22b84d), console['log'](getTime() + '\x20[' + _0x2e549f['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                                }
                                ;
                                return _0x2d8e87();
                            }
                        }
                    } else {
                        if (modules[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x22b84d = await getProxyFile(), _0x2f26cd = await getTaskFile();
                            return console['log'](_0x2f26cd), await footshopModule(_0x2f26cd, _0x22b84d), await delay(0x1388), _0x2d8e87();
                        } else {
                            if (modules[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await getFunction(modules[taskModule]['modules']);
                                var _0x2e549f = modules[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0xee05fc = await getTaskFile();
                                    console['log']('Starting\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x2cc825 = 0x0; _0x2cc825 < _0xee05fc['length']; _0x2cc825++) {
                                        console['log'](getTime() + '\x20[' + _0x2e549f['name'] + ']\x20Task\x20' + (_0x2cc825 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await oqiumFunction(_0x2cc825, 'nor', _0x2e549f, _0xee05fc);
                                        } catch {
                                            console['log'](chalk['red'](getTime() + '\x20[' + _0x2e549f['name'] + ']\x20Task\x20' + (_0x2cc825 + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](getTime() + '\x20[' + _0x2e549f['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                                    }
                                    return _0x2d8e87();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x2cc825 = 0x0; _0x2cc825 < links['length']; _0x2cc825++) {
                                            try {
                                                _0x2e549f['url'] = links[_0x2cc825], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2cc825 + 0x1) + ':\x20Getting\x20Session'), await oqiumFunction(_0x2cc825, 'ver', _0x2e549f), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                                            } catch (_0x3ff082) {
                                                console['log'](_0x3ff082);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x2d8e87();
                                    }
                                }
                                ;
                            } else {
                                if (modules[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await getFunction(modules[taskModule]['modules']);
                                    var _0x2e549f = modules[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x2e549f);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (modules[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await getFunction(modules[taskModule]['modules']);
                                        var _0x2e549f = modules[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x22b84d = await getProxyFile(), _0x59c921 = await getTaskFile();
                                            return await pattaAcc('https://patta.nl/account/register', _0x2e549f, _0x59c921, _0x22b84d), _0x2d8e87();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x22b84d = await getProxyFile(), _0x59c921 = await getTaskFile();
                                                return await pattaFunction('', _0x2e549f, _0x59c921, _0x22b84d), _0x2d8e87();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (modules[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await getFunction(modules[taskModule]['modules']);
                                            var _0x2e549f = modules[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x49840f = await getTaskFile();
                                                return await kickzAcc('https://www.kickz.com/nl/login/', _0x2e549f, _0x49840f), _0x2d8e87();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x49840f = await getTaskFile();
                                                    return await kickzFunction('', _0x2e549f, _0x49840f), _0x2d8e87();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (modules[taskModule]['name'] == 'JD') {
                                                taskFunction = await getFunction(modules[taskModule]['modules']);
                                                var _0x2e549f = modules[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x22b84d = await getProxyFile(), _0x214916 = await getTaskFile();
                                                    return await jdFunction(_0x2e549f, _0x214916, _0x22b84d), _0x2d8e87();
                                                }
                                            } else {
                                                if (modules[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x2fdf55 = 0x0;
                                                    for (const _0xf5113a in settings) {
                                                        console['log']('(' + _0x2fdf55 + ')\x20' + _0xf5113a + '\x20:\x20' + settings[_0xf5113a]), _0x2fdf55++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x2fdf55 + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x4c14cf = await getSetting();
                                                    if (_0x4c14cf == _0x2fdf55)
                                                        return _0x2d8e87();
                                                    console['clear'];
                                                    var _0x4c3907 = 0x0;
                                                    for (var _0x219647 in settings) {
                                                        if (_0x4c14cf == _0x4c3907) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x219647 + '\x20:'), settings[_0x219647] = await getValue(), fs['writeFileSync']('../settings.json', JSON['stringify'](settings));
                                                            break;
                                                        } else
                                                            _0x4c3907++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await delay(0xbb8), _0x2d8e87();
                                                } else {
                                                    if (modules[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await loadSettings(), _0x2d8e87();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x4bb4df = await getPassword();
                                                            _0x4bb4df == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
            await _0x2d8e87();
        } catch (_0x50d36c) {
            return console['log'](_0x50d36c), await delay(0x3a98);
        }
}
;
setTitle('JRaffles\x20' + version), loadSettings(), main();