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
        'tasks/patta.csv'
    ]
}, updater = new AutoGitUpdate(config);
async function loadSettings() {
    taskFiles = fs['readdirSync']('../tasks'), settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), !settings['delay'] && (settings['delay'] = 0x2710, fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['captchaKey'] && (settings['captchaKey'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['useRandomProxy'] && (settings['useRandomProxy'] = ![], fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['webhook'] && (settings['webhook'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), webhook = settings['webhook'], licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x1cabf8 => new Promise(_0x447c9f => setTimeout(_0x447c9f, _0x1cabf8));
async function getLicense(_0x3242d1) {
    return axios['get']('https://api.hyper.co/v4/licenses/' + _0x3242d1, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x486285 => _0x486285['data'])['catch'](() => null);
}
;
async function checkLicense(_0x2dce76) {
    console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
    const _0x46519a = await getLicense(_0x2dce76);
    username = JSON['stringify'](_0x46519a['user']['username']);
    if (!_0x46519a)
        return console['log']('License\x20not\x20found');
    if (!_0x46519a['user'])
        return console['log']('License\x20not\x20bound');
    return _0x46519a['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
    var _0x40a51c = await prompt['get']('Module');
    return console['clear'](), _0x40a51c['Module'];
}
;
async function getSetting() {
    var _0x586e5a = await prompt['get']('Setting');
    return console['clear'](), _0x586e5a['Setting'];
}
async function getTaskFile() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x513cde = 0x0; _0x513cde < taskFiles['length']; _0x513cde++) {
        console['log']('\x20(' + _0x513cde + ')\x20' + taskFiles[_0x513cde]);
    }
    console['log']('');
    var _0x214055 = await prompt['get']('Task'), _0x1036cc = fs['readFileSync']('../tasks/' + taskFiles[_0x214055['Task']], 'utf-8');
    return taskCSV = Papa['parse'](_0x1036cc, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x214055['Task']])), taskCSV;
}
async function getProxyFile() {
    console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0xd77c4 = 0x0; _0xd77c4 < taskFiles['length']; _0xd77c4++) {
        console['log']('\x20(' + _0xd77c4 + ')\x20' + taskFiles[_0xd77c4]);
    }
    console['log']('');
    var _0x1988d9 = await prompt['get']('Task'), _0x2ada07 = fs['readFileSync']('../tasks/' + taskFiles[_0x1988d9['Task']], 'utf-8');
    return taskCSV = Papa['parse'](_0x2ada07, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x1988d9['Task']])), taskCSV;
}
async function getValue() {
    var _0x5c54e0 = await prompt['get']('Value');
    return console['clear'](), _0x5c54e0['Value'];
}
async function getFunction(_0x222a0c) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x4920f5 = 0x0; _0x4920f5 < _0x222a0c['length']; _0x4920f5++) {
        console['log']('\x20(' + _0x4920f5 + ')\x20[' + _0x222a0c[_0x4920f5]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x6bddd8 = await prompt['get']('Module');
    return _0x6bddd8['Module'];
}
async function getPassword() {
    var _0x8e355a = await prompt['get']('Password');
    return console['clear'](), _0x8e355a['Password'];
}
;
async function getLinks() {
    var _0x236d03 = await prompt['get']('Links');
    return _0x236d03['Links'];
}
;
async function getAfewProduct() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x282237 = 0x0; _0x282237 < afewProducts['length']; _0x282237++) {
        console['log']('\x20(' + _0x282237 + ')\x20' + afewProducts[_0x282237]);
    }
    ;
    console['log']();
    let _0x45e39f = await prompt['get']('Product');
    console['clear'](), afewProduct = _0x45e39f['Product'];
    return;
}
;
function getTime() {
    var _0x2d288f = new Date(Date['now']())['toLocaleTimeString']();
    return _0x2d288f;
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
async function sendWebhook(_0x2fe67e, _0x46f98d) {
    let _0x19a20c = { 'headers': { 'content-type': 'application/json' } };
    await axios['post'](_0x2fe67e, _0x46f98d, _0x19a20c);
}
;
async function jig(_0x458c3b, _0x10982b) {
    var _0x155247 = _0x458c3b[_0x10982b]['Address1']['split'](''), _0x55eb3b = _0x458c3b[_0x10982b]['Address2']['split'](''), _0x17d016 = _0x458c3b[_0x10982b]['Email']['split']('@');
    for (var _0x3dde74 = 0x0; _0x3dde74 < _0x155247['length']; _0x3dde74++) {
        if (_0x155247[_0x3dde74] == 'X') {
            var _0x24c1dc = Math['round'](Math['random']() * (letters['length'] - 0x1));
            _0x155247[_0x3dde74] = lettersArray[_0x24c1dc];
        }
    }
    ;
    for (var _0x3dde74 = 0x0; _0x3dde74 < _0x55eb3b['length']; _0x3dde74++) {
        if (_0x55eb3b[_0x3dde74] == 'X') {
            var _0x24c1dc = Math['round'](Math['random']() * (letters['length'] - 0x1));
            _0x55eb3b[_0x3dde74] = lettersArray[_0x24c1dc];
        }
    }
    ;
    _0x458c3b[_0x10982b]['FirstName'] == 'RANDOM' && (_0x458c3b[_0x10982b]['FirstName'] = random['first']());
    _0x458c3b[_0x10982b]['LastName'] == 'RANDOM' && (_0x458c3b[_0x10982b]['LastName'] = random['last']());
    _0x17d016[0x0] == 'RANDOM' ? _0x17d016[0x0] = '' + random['first']() + random['last']() + '@' : _0x17d016[0x0] = _0x17d016[0x0] + '@';
    _0x458c3b[_0x10982b]['Email'] = _0x17d016['join'](''), _0x458c3b[_0x10982b]['Address1'] = _0x155247['join'](''), _0x458c3b[_0x10982b]['Address2'] = _0x55eb3b['join']('');
    return;
}
;
function getProxy() {
    let _0x21fbac = proxyFile['split']('\x0a'), _0xb623f8 = _0x21fbac['map']((_0x39a1e0, _0x437c11) => {
        sanatizeProxy = _0x39a1e0['replace']('\x0d', '');
        if (_0x21fbac[_0x437c11 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0xb623f8;
}
;
async function afewScraper() {
    var _0x172835 = getProxy()[0x1]['split'](':');
    const _0x171bfd = await puppeteer['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x172835[0x0] + ':' + _0x172835[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x1e7899 = await _0x171bfd['newPage']();
        await _0x1e7899['authenticate']({
            'username': '' + _0x172835[0x2],
            'password': '' + _0x172835[0x3]
        }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x1e7899['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1e7899['setRequestInterception'](!![]), _0x1e7899['on']('request', _0x1db994 => {
            _0x1db994['resourceType']() === 'image' || _0x1db994['resourceType']() === 'font' || _0x1db994['resourceType']() === 'media' ? _0x1db994['abort']() : _0x1db994['continue']();
        }), await _0x1e7899['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x1e7899['waitForTimeout'](0xbb8), await _0x1e7899['waitForSelector']('.product-card');
        const _0xeea81c = await _0x1e7899['$$eval']('a.product-card', _0x24401e => {
            return _0x24401e['map'](_0x372d7a => _0x372d7a['href']);
        });
        return afewProducts = _0xeea81c;
    } catch (_0x1b719e) {
        console['log']('\x20' + _0x1b719e);
    } finally {
        _0x171bfd['close'](), console['clear']();
    }
}
;
async function mahaFunction(_0x5ef13e, _0x31ce9a, _0x385106, _0x4fad08) {
    await jig(_0x4fad08, _0x5ef13e);
    var _0x1dfb1b = [{
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
                'value': '' + oqium[_0x5ef13e]['Size']
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
    const _0x3002e9 = { 'embeds': _0x1dfb1b };
    if (settings['useRandomProxy'] = ![])
        var _0x296136 = getProxy()[_0x5ef13e]['split'](':');
    else
        var _0x936404 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x296136 = getProxy()[_0x936404]['split'](':');
    var _0x38d2b1 = _0x385106['data'];
    _0x31ce9a == 'exp' ? _0x38d2b1['data']['attributes']['email'] = '' + _0x4fad08[_0x5ef13e]['FirstName'] + _0x4fad08[_0x5ef13e]['LastName'] + settings['catchall'] : _0x38d2b1['data']['attributes']['email'] = '' + _0x4fad08[_0x5ef13e]['Email'];
    _0x38d2b1['data']['attributes']['properties']['$first_name'] = '' + _0x4fad08[_0x5ef13e]['FirstName'], _0x38d2b1['data']['attributes']['properties']['$last_name'] = '' + _0x4fad08[_0x5ef13e]['LastName'], _0x38d2b1['data']['attributes']['properties']['$address1'] = _0x4fad08[_0x5ef13e]['Address1'] + '\x20' + _0x4fad08[_0x5ef13e]['Address2'], _0x38d2b1['data']['attributes']['properties']['$zip'] = '' + _0x4fad08[_0x5ef13e]['Zip'], _0x38d2b1['data']['attributes']['properties']['$city'] = '' + _0x4fad08[_0x5ef13e]['City'], _0x38d2b1['data']['attributes']['properties']['$country'] = '' + _0x4fad08[_0x5ef13e]['Country'], _0x38d2b1['data']['attributes']['properties']['Size'] = '' + _0x4fad08[_0x5ef13e]['Size'], _0x38d2b1['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x4fad08[_0x5ef13e]['Follower'];
    var _0x46eba0 = {
        'jar': j,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x385106['url'],
        'headers': _0x385106['headers'],
        'body': JSON['stringify'](_0x38d2b1),
        'proxy': 'http://' + _0x296136[0x2] + ':' + _0x296136[0x3] + '@' + _0x296136[0x0] + ':' + _0x296136[0x1]
    };
    return _0x31ce9a === 'ver' && (_0x46eba0['method'] = 'GET'), new Promise(function (_0x4d8d43, _0x203269) {
        callback = async (_0x12d86a, _0x5ef438, _0x3d2db8) => {
            !_0x12d86a && _0x5ef438['statusCode'] == 0xca || !_0x12d86a && _0x5ef438['statusCode'] == 0xc8 ? _0x4d8d43(console['log'](chalk['green'](getTime() + '\x20[' + _0x385106['name'] + ']\x20Task\x20' + (_0x5ef13e + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x1dfb1b[0x0]['title'] = 'Failed\x20entry', _0x1dfb1b[0x0]['description'] = '' + _0x12d86a, await sendWebhook(errorWH, _0x3002e9), _0x203269(console['log'](getTime() + '\x20[' + _0x385106['name'] + ']\x20Task\x20' + (_0x5ef13e + 0x1) + ':\x20' + _0x12d86a)));
        };
        try {
            _0x31ce9a === 'ver' ? console['log'](getTime() + '\x20[' + _0x385106['name'] + ']\x20Task\x20' + (_0x5ef13e + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + _0x385106['name'] + ']\x20Task\x20' + (_0x5ef13e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x38d2b1['data']['attributes']['email']), request(_0x46eba0, callback);
        } catch (_0x5b1f79) {
            console['log'](getTime() + '\x20Task\x20' + (_0x5ef13e + 0x1) + ':\x20' + _0x5b1f79);
        }
    });
}
;
async function footshopModule(_0x4d1af9) {
    var _0x5b7ce8;
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x58e729 = 0x0; _0x58e729 < _0x4d1af9['length']; _0x58e729++) {
        await jig(_0x4d1af9, _0x58e729);
        if (_0x4d1af9[_0x58e729]['Email'] == '' || _0x4d1af9[_0x58e729]['FirstName'] == '' || _0x4d1af9[_0x58e729]['LastName'] == '' || _0x4d1af9[_0x58e729]['Country'] == '' || _0x4d1af9[_0x58e729]['Size'] == '' || _0x4d1af9[_0x58e729]['Address1'] == '' || _0x4d1af9[_0x58e729]['Zip'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        console['log'](_0x4d1af9[_0x58e729]['Url']);
        async function _0x25a2ae() {
            var _0x2a6b99 = await axios['get']('https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_')['then'](_0x42b06f => _0x42b06f['data'])['catch'](() => undefined);
            console['log'](_0x2a6b99);
            var _0x152896 = _0x2a6b99['sizeSets']['Men']['sizes'];
            _0x152896['length'] == 0x0 && (_0x152896 = _0x2a6b99['sizeSets']['Women']['sizes'], _0x152896['length'] == 0x0 && (_0x152896 = _0x2a6b99['sizeSets']['Unisex']['sizes'], _0x152896['length'] == 0x0 && (_0x152896 = _0x2a6b99['sizeSets']['Kids']['sizes'])));
            ;
            async function _0x259d72() {
                for (var _0xbbf20 = 0x0; _0xbbf20 < _0x152896['length']; _0xbbf20++) {
                    if (_0x152896[_0xbbf20]['eur'] == _0x4d1af9[_0x58e729]['Size'])
                        return _0x5b7ce8 = _0x152896[_0xbbf20]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
                }
                return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x20Size\x20' + _0x4d1af9[_0x58e729]['Size'] + '\x20not\x20found'), ![];
            }
            ;
            let _0x20963d = await _0x259d72();
            if (_0x20963d == ![])
                return ![];
        }
        let _0x2c1c6f = await _0x25a2ae();
        if (_0x2c1c6f == ![])
            continue;
        if (_0x4d1af9[_0x58e729]['Email'] == '' || _0x4d1af9[_0x58e729]['FirstName'] == '' || _0x4d1af9[_0x58e729]['LastName'] == '' || _0x4d1af9[_0x58e729]['Country'] == '' || _0x4d1af9[_0x58e729]['Size'] == '' || _0x4d1af9[_0x58e729]['Address1'] == '' || _0x4d1af9[_0x58e729]['Zip'] == '' || _0x4d1af9[_0x58e729]['Phone'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x37695f = 'https://releases.footshop.com/register/' + _0x4d1af9[_0x58e729]['Url'] + '/Men/' + _0x5b7ce8;
        if (settings['useRandomProxy'] = ![])
            var _0x4c3397 = getProxy()[_0x58e729]['split'](':');
        else
            var _0x454666 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x4c3397 = getProxy()[_0x454666]['split'](':');
        const _0x30a374 = await puppeteer['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x4c3397[0x0] + ':' + _0x4c3397[0x1]]
        });
        try {
            const _0x37e086 = await _0x30a374['newPage']();
            await _0x37e086['authenticate']({
                'username': '' + _0x4c3397[0x2],
                'password': '' + _0x4c3397[0x3]
            }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x37e086['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x37e086['setRequestInterception'](!![]), _0x37e086['on']('request', _0x2ee5ff => {
                _0x2ee5ff['resourceType']() === 'image' || _0x2ee5ff['resourceType']() === 'font' || _0x2ee5ff['resourceType']() === 'media' ? _0x2ee5ff['abort']() : _0x2ee5ff['continue']();
            }), await _0x37e086['goto']('' + _0x37695f + _0x5b7ce8), await _0x37e086['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x37e086['type']('input[name=\x22email\x22]', '' + _0x4d1af9[_0x58e729]['Email']), await delay(0x640), await _0x37e086['type']('input[name=\x22phone\x22]', '' + _0x4d1af9[_0x58e729]['Phone']), await delay(0x4b0), await _0x37e086['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
            try {
                await _0x37e086['type']('input[name=\x22firstName\x22]', '' + _0x4d1af9[_0x58e729]['FirstName']), await delay(0x258);
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
                continue;
            }
            await _0x37e086['type']('input[name=\x22lastName\x22]', '' + _0x4d1af9[_0x58e729]['LastName']), await delay(0xc8), await _0x37e086['type']('input[name=\x22instagramUsername\x22]', '' + _0x4d1af9[_0x58e729]['Follower']), await delay(0x4b0), await _0x37e086['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x37e086['select']('select[name=\x22country\x22]', '' + _0x4d1af9[_0x58e729]['Country']), await delay(0x2bc), await _0x37e086['type']('input[name=\x22streetName\x22]', '' + _0x4d1af9[_0x58e729]['Address1']), await delay(0x258), await _0x37e086['type']('input[name=\x22houseNumber\x22]', '' + _0x4d1af9[_0x58e729]['HouseNumber'] + _0x4d1af9[_0x58e729]['Address2']), await delay(0xc8), await _0x37e086['type']('input[name=\x22postalCode\x22]', '' + _0x4d1af9[_0x58e729]['Zip']), await delay(0x1f4), await _0x37e086['type']('input[name=\x22city\x22]', '' + _0x4d1af9[_0x58e729]['City']), await delay(0x4b0), await _0x37e086['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x37e086['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x37e086['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x37e086['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x37e086['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x37e086['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x4b0), await _0x37e086['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x4d1af9[_0x58e729]['CardNumber']), await delay(0x320), await _0x37e086['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x4d1af9[_0x58e729]['ExpiryDate']), await delay(0x4b0), await _0x37e086['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x4d1af9[_0x58e729]['CVV']), await delay(0x226), await _0x37e086['type']('input[name=\x22holderName\x22]', '' + _0x4d1af9[_0x58e729]['NameOnCard']), await delay(0x226), await _0x37e086['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x37e086['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await delay(0xbb8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x2ff104) {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x58e729 + 0x1) + '\x20:\x20' + _0x2ff104);
        } finally {
            _0x30a374['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
        }
    }
}
afewFunction = async (_0x103546, _0x440e30, _0x2f2042, _0x43344c) => {
    for (var _0x208ce2 = 0x0; _0x208ce2 < _0x43344c['length']; _0x208ce2++) {
        await jig(_0x43344c, _0x208ce2);
        var _0x13e8df = [{
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
                    'value': '' + _0x103546
                },
                {
                    'name': 'Size',
                    'value': '' + _0x43344c[_0x208ce2]['Size']
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
        const _0x59a4db = { 'embeds': _0x13e8df };
        if (_0x43344c[_0x208ce2]['Email'] == '' || _0x43344c[_0x208ce2]['FirstName'] == '' || _0x43344c[_0x208ce2]['LastName'] == '' || _0x43344c[_0x208ce2]['Country'] == '' || _0x43344c[_0x208ce2]['Size'] == '' || _0x43344c[_0x208ce2]['Address1'] == '' || _0x43344c[_0x208ce2]['Zip'] == '') {
            console['log'](getTime() + '\x20[' + _0x2f2042['name'] + ']\x20Task\x20' + (_0x208ce2 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x5955a1 = getProxy()[_0x208ce2]['split'](':');
        else
            var _0x333d39 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x5955a1 = getProxy()[_0x333d39]['split'](':');
        const _0x25674e = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5955a1[0x0] + ':' + _0x5955a1[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x47beca = await _0x25674e['newPage']();
            await _0x47beca['setDefaultNavigationTimeout'](0x1d4c0), await _0x47beca['authenticate']({
                'username': '' + _0x5955a1[0x2],
                'password': '' + _0x5955a1[0x3]
            }), console['log'](getTime() + '\x20[' + _0x2f2042['name'] + ']\x20Task\x20' + (_0x208ce2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x47beca['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x47beca['setRequestInterception'](!![]), _0x47beca['on']('request', _0x2e20bc => {
                _0x2e20bc['resourceType']() === 'image' || _0x2e20bc['resourceType']() === 'font' || _0x2e20bc['resourceType']() === 'media' ? _0x2e20bc['abort']() : _0x2e20bc['continue']();
            }), await _0x47beca['goto'](_0x103546), console['log'](getTime() + '\x20[' + _0x2f2042['name'] + ']\x20Task\x20' + (_0x208ce2 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x47beca['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + _0x2f2042['name'] + ']\x20Task\x20' + (_0x208ce2 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x47beca['waitForTimeout'](0x320);
            if (_0x43344c[_0x208ce2]['Size'] == 'RANDOM') {
                console['log'](getTime() + '\x20[' + _0x2f2042['name'] + ']\x20Task\x20' + (_0x208ce2 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x230bb6 = await _0x47beca['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x4ef86b => {
                    return _0x4ef86b['map'](_0x1b3596 => _0x1b3596['href']);
                });
                var _0x27eada = Math['round'](Math['random']() * (_0x230bb6['length'] - 0x1));
                await _0x47beca['goto']('' + _0x230bb6[_0x27eada]);
            } else {
                console['log'](getTime() + '\x20[' + _0x2f2042['name'] + ']\x20Task\x20' + (_0x208ce2 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x43344c[_0x208ce2]['Size']);
                try {
                    const _0x5792df = await _0x47beca['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x43344c[_0x208ce2]['Size'] + '\x22]\x20>\x20a', _0x2e0cfc => {
                        return _0x2e0cfc['map'](_0x1ff688 => _0x1ff688['href']);
                    });
                    await _0x47beca['goto']('' + _0x5792df[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x2b3201) {
                    console['log'](chalk['red'](getTime() + '\x20[' + _0x2f2042['name'] + ']\x20Task\x20' + (_0x208ce2 + 0x1) + '\x20:\x20' + _0x2b3201 + '\x20Size\x20not\x20found')), _0x13e8df[0x0]['title'] = 'Failed\x20entry', _0x13e8df[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x59a4db);
                    continue;
                }
                try {
                    await _0x47beca['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x43344c[_0x208ce2]['Size'] + '\x22]'), await _0x47beca['waitForTimeout'](0x320), await _0x47beca['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x43344c[_0x208ce2]['Size'] + '\x22]');
                } catch (_0x1031c4) {
                    console['log'](chalk['red'](getTime() + '\x20[' + _0x2f2042['name'] + ']\x20Task\x20' + (_0x208ce2 + 0x1) + '\x20:\x20' + _0x1031c4 + '\x20Size\x20not\x20found')), _0x13e8df[0x0]['title'] = 'Failed\x20entry', _0x13e8df[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x59a4db);
                    continue;
                }
            }
            await _0x47beca['waitForTimeout'](0x258), await _0x47beca['type']('#raffle-instagram', '' + _0x43344c[_0x208ce2]['Follower'], { 'delay': 0x64 }), await _0x47beca['waitForTimeout'](0x384), await _0x47beca['click']('#raffle-terms'), await _0x47beca['waitForTimeout'](0x384), await _0x47beca['evaluate'](() => {
                const _0x18ed4b = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x18ed4b['click']();
            }), await _0x47beca['waitForTimeout'](0xbb8), await _0x47beca['waitForSelector']('#checkout_email'), await delay(0x3e8), console['log'](getTime() + '\x20[' + _0x2f2042['name'] + ']\x20Task\x20' + (_0x208ce2 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x440e30 == 'sec' ? await _0x47beca['type']('#checkout_email', '' + _0x43344c[_0x208ce2]['FirstName'] + _0x43344c[_0x208ce2]['LastName'] + settings['catchall'], 0x32) : await _0x47beca['type']('#checkout_email', '' + _0x43344c[_0x208ce2]['Email'], 0x32);
            await delay(0x320), await _0x47beca['select']('#checkout_shipping_address_country', '' + _0x43344c[_0x208ce2]['Country']), await _0x47beca['waitForTimeout'](0x258), await _0x47beca['type']('#checkout_shipping_address_first_name', '' + _0x43344c[_0x208ce2]['FirstName']), await _0x47beca['waitForTimeout'](0x320), await _0x47beca['type']('#checkout_shipping_address_last_name', '' + _0x43344c[_0x208ce2]['LastName']), await _0x47beca['waitForTimeout'](0x2bc), await _0x47beca['type']('#checkout_shipping_address_address1', _0x43344c[_0x208ce2]['Address1'] + '\x20' + _0x43344c[_0x208ce2]['HouseNumber']), await _0x47beca['waitForTimeout'](0x2bc), await _0x47beca['type']('#checkout_shipping_address_address2', '' + _0x43344c[_0x208ce2]['Address2']), await _0x47beca['waitForTimeout'](0x2bc);
            _0x43344c[_0x208ce2]['Postcode'] == undefined ? await _0x47beca['type']('#checkout_shipping_address_zip', '' + _0x43344c[_0x208ce2]['Zip']) : await _0x47beca['type']('#checkout_shipping_address_zip', '' + _0x43344c[_0x208ce2]['Postcode']);
            await _0x47beca['waitForTimeout'](0x2bc), await _0x47beca['type']('#checkout_shipping_address_city', '' + _0x43344c[_0x208ce2]['City']), await _0x47beca['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + _0x2f2042['name'] + ']\x20Task\x20' + (_0x208ce2 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x47beca['evaluate'](() => {
                const _0x32542e = document['querySelector']('#continue_button');
                for (var _0x2ce446 = 0x0; _0x2ce446 < 0x5; _0x2ce446++) {
                    if (_0x32542e) {
                        _0x32542e['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x47beca['waitForTimeout'](0x1194), await _0x47beca['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), _0x47beca['evaluate'](() => {
                const _0x3ebe9b = document['querySelector']('#continue_button');
                for (var _0x38611d = 0x0; _0x38611d < 0x5; _0x38611d++) {
                    if (_0x3ebe9b) {
                        _0x3ebe9b['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x47beca['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + _0x2f2042['name'] + ']\x20Task\x20' + (_0x208ce2 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x47beca['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x47beca['evaluate'](() => {
                const _0x409161 = document['querySelector']('#continue_button');
                for (var _0x5e6d97 = 0x0; _0x5e6d97 < 0x5; _0x5e6d97++) {
                    if (_0x409161) {
                        _0x409161['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x47beca['waitForTimeout'](0x1194), await _0x47beca['waitForSelector']('#continue_button'), _0x47beca['evaluate'](() => {
                const _0x240ea3 = document['querySelector']('#continue_button');
                for (var _0x56478e = 0x0; _0x56478e < 0x5; _0x56478e++) {
                    if (_0x240ea3) {
                        _0x240ea3['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            });
            try {
                await _0x47beca['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x4c5c90) {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x2f2042['name'] + ']\x20Task\x20' + (_0x208ce2 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x4c5c90));
            }
            console['log'](chalk['green'](getTime() + '\x20[' + _0x2f2042['name'] + ']\x20Task\x20' + (_0x208ce2 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x59a4db);
        } catch (_0x3843d7) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x2f2042['name'] + ']\x20Task\x20' + (_0x208ce2 + 0x1) + '\x20:\x20' + _0x3843d7)), _0x13e8df[0x0]['title'] = 'Failed\x20entry', _0x13e8df[0x0]['description'] = '' + _0x3843d7, await sendWebhook(errorWH, _0x59a4db);
        } finally {
            _0x25674e && _0x25674e['close']();
            if (_0x208ce2 + 0x1 == _0x43344c['length']) {
                console['log'](chalk['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await delay(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
};
async function kickzAcc(_0x22b10c, _0xdebf2b, _0x4e5a43) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x149160 = 0x0; _0x149160 < _0x4e5a43['length']; _0x149160++) {
        await jig(_0x4e5a43, _0x149160);
        if (_0x4e5a43[_0x149160]['Email'] == '' || _0x4e5a43[_0x149160]['Password'] == '' || _0x4e5a43[_0x149160]['FirstName'] == '' || _0x4e5a43[_0x149160]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x2991a4 = getProxy()[_0x149160]['split'](':');
        else
            var _0xa18cf4 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x2991a4 = getProxy()[_0xa18cf4]['split'](':');
        const _0x315288 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2991a4[0x0] + ':' + _0x2991a4[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4d612f = await _0x315288['newPage']();
            await _0x4d612f['authenticate']({
                'username': '' + _0x2991a4[0x2],
                'password': '' + _0x2991a4[0x3]
            }), console['log'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4d612f['setRequestInterception'](!![]), _0x4d612f['on']('request', _0x2cac5b => {
                _0x2cac5b['resourceType']() === 'image' || _0x2cac5b['resourceType']() === 'font' || _0x2cac5b['resourceType']() === 'media' ? _0x2cac5b['abort']() : _0x2cac5b['continue']();
            }), await _0x4d612f['goto'](_0x22b10c), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x4d612f['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4d612f['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4d612f['waitForSelector']('#button-register'), await delay(0x7d0), await _0x4d612f['evaluate'](() => {
                const _0x1b14c0 = document['querySelector']('#button-register');
                _0x1b14c0['click']();
            }), console['log'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20Setting\x20Credentials'), await delay(0x1388), await _0x4d612f['waitForSelector']('#customer_salutation'), await _0x4d612f['select']('#customer_salutation', 'mr'), await delay(0x7d0), await _0x4d612f['waitForSelector']('#customer_firstname'), await _0x4d612f['type']('#customer_firstname', '' + _0x4e5a43[_0x149160]['FirstName']), await delay(0x352), await _0x4d612f['waitForSelector']('#customer_lastname'), await _0x4d612f['type']('#customer_lastname', '' + _0x4e5a43[_0x149160]['LastName']), await delay(0x352), await _0x4d612f['type']('#email-input', '' + _0x4e5a43[_0x149160]['Email']), await delay(0x352), await _0x4d612f['type']('#email-confirm-input', '' + _0x4e5a43[_0x149160]['Email']), await delay(0x352), await _0x4d612f['type']('#register-password', '' + _0x4e5a43[_0x149160]['Password']), await delay(0x352), await _0x4d612f['type']('#password-confirm', '' + _0x4e5a43[_0x149160]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x4d612f['click']('#consent'), await delay(0x1f4);
            const _0x11360d = await _0x4d612f['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x11360d) {
                console['log'](chalk['red'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x4d612f['click']('#buttonRegister'), await _0x4d612f['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20Account\x20' + _0x4e5a43[_0x149160]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
            async function _0x529ffb() {
                console['log'](chalk['yellow'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x12519d = await prompt['get']('Code');
                return _0x12519d['Code'];
            }
            ;
            code = await _0x529ffb(), delay(0x320), console['log'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20Verifying..'), await _0x4d612f['type']('#verificationCode', code), await delay(0x1f4), await _0x4d612f['click']('#buttonVerify'), await delay(0x190), await _0x4d612f['click']('#buttonVerify'), await delay(0x3e8);
            try {
                await _0x4d612f['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20Account\x20' + _0x4e5a43[_0x149160]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x4e5a43[_0x149160]['Email'] + ',' + _0x4e5a43[_0x149160]['Password'] + ','), console['log'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20Account\x20' + _0x4e5a43[_0x149160]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x2610fe) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0xdebf2b['name'] + ']\x20Task\x20' + (_0x149160 + 0x1) + '\x20:\x20' + _0x2610fe));
        } finally {
            _0x315288 && _0x315288['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
}
async function kickzFunction(_0x196d04, _0x2d72b4) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x51954b = 0x0; _0x51954b < _0x2d72b4['length']; _0x51954b++) {
        await jig(_0x2d72b4, _0x51954b);
        if (_0x2d72b4[_0x51954b]['Email'] == '' || _0x2d72b4[_0x51954b]['Password'] == '' || _0x2d72b4[_0x51954b]['FirstName'] == '' || _0x2d72b4[_0x51954b]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x2bb2ff = getProxy()[_0x51954b]['split'](':');
        else
            var _0x650187 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x2bb2ff = getProxy()[_0x650187]['split'](':');
        const _0x208261 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2bb2ff[0x0] + ':' + _0x2bb2ff[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x11f473 = await _0x208261['newPage']();
            await _0x11f473['authenticate']({
                'username': '' + _0x2bb2ff[0x2],
                'password': '' + _0x2bb2ff[0x3]
            }), console['log'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x11f473['setRequestInterception'](!![]), _0x11f473['on']('request', _0x504cdd => {
                _0x504cdd['resourceType']() === 'image' || _0x504cdd['resourceType']() === 'font' || _0x504cdd['resourceType']() === 'media' ? _0x504cdd['abort']() : _0x504cdd['continue']();
            }), await _0x11f473['goto']('https://www.kickz.com/nl/login/'), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20Logging\x20in'), await _0x11f473['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x11f473['click']('#consent-dialog\x20>\x20section\x20>\x20button'), console['log'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20Setting\x20Credentials'), await delay(0x1388), await _0x11f473['waitForSelector']('#customer_salutation'), await _0x11f473['select']('#customer_salutation', 'mr'), await delay(0x7d0), await _0x11f473['waitForSelector']('#customer_firstname'), await _0x11f473['type']('#customer_firstname', '' + _0x2d72b4[_0x51954b]['FirstName']), await delay(0x352), await _0x11f473['waitForSelector']('#customer_lastname'), await _0x11f473['type']('#customer_lastname', '' + _0x2d72b4[_0x51954b]['LastName']), await delay(0x352), await _0x11f473['type']('#email-input', '' + _0x2d72b4[_0x51954b]['Email']), await delay(0x352), await _0x11f473['type']('#email-confirm-input', '' + _0x2d72b4[_0x51954b]['Email']), await delay(0x352), await _0x11f473['type']('#register-password', '' + _0x2d72b4[_0x51954b]['Password']), await delay(0x352), await _0x11f473['type']('#password-confirm', '' + _0x2d72b4[_0x51954b]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x11f473['click']('#consent'), await delay(0x1f4);
            const _0x7e9801 = await _0x11f473['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x7e9801) {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x11f473['click']('#buttonRegister'), await _0x11f473['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20Account\x20' + _0x2d72b4[_0x51954b]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
            async function _0x6ffda6() {
                console['log'](chalk['yellow'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x170b1b = await prompt['get']('Code');
                return _0x170b1b['Code'];
            }
            ;
            code = await _0x6ffda6(), delay(0x320), console['log'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20Verifying..'), await _0x11f473['type']('#verificationCode', code), await delay(0x1f4), await _0x11f473['click']('#buttonVerify'), await delay(0x190), await _0x11f473['click']('#buttonVerify'), await delay(0x3e8);
            try {
                await _0x11f473['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20Account\x20' + _0x2d72b4[_0x51954b]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x2d72b4[_0x51954b]['Email'] + ',' + _0x2d72b4[_0x51954b]['Password'] + ','), console['log'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20Account\x20' + _0x2d72b4[_0x51954b]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x23f6ae) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x196d04['name'] + ']\x20Task\x20' + (_0x51954b + 0x1) + '\x20:\x20' + _0x23f6ae));
        } finally {
            _0x208261 && _0x208261['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
}
async function bwAcc(_0x435edf, _0x29a018) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1c1704 = 0x0; _0x1c1704 < bouncewear['length']; _0x1c1704++) {
        await jig(bouncewear, _0x1c1704);
        if (bouncewear[_0x1c1704]['Email'] == '' || bouncewear[_0x1c1704]['Password'] == '' || bouncewear[_0x1c1704]['FirstName'] == '' || bouncewear[_0x1c1704]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1c1704 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x4b4227 = getProxy()[_0x1c1704]['split'](':');
        else
            var _0xb7fc89 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x4b4227 = getProxy()[_0xb7fc89]['split'](':');
        const _0x253960 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4b4227[0x0] + ':' + _0x4b4227[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x518203 = await _0x253960['newPage']();
            await _0x518203['authenticate']({
                'username': '' + _0x4b4227[0x2],
                'password': '' + _0x4b4227[0x3]
            }), console['log'](getTime() + '\x20[' + _0x29a018['name'] + ']\x20Task\x20' + (_0x1c1704 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x518203['setRequestInterception'](!![]), _0x518203['on']('request', _0x2658a5 => {
                _0x2658a5['resourceType']() === 'image' || _0x2658a5['resourceType']() === 'font' || _0x2658a5['resourceType']() === 'media' ? _0x2658a5['abort']() : _0x2658a5['continue']();
            }), await _0x518203['goto'](_0x435edf), await delay(0xbb8), await _0x518203['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x29a018['name'] + ']\x20Task\x20' + (_0x1c1704 + 0x1) + '\x20:\x20Filling\x20information'), await _0x518203['type']('#RegisterForm-FirstName', '' + bouncewear[_0x1c1704]['FirstName']), await delay(0x226), await _0x518203['type']('#RegisterForm-LastName', '' + bouncewear[_0x1c1704]['LastName']), await delay(0x226), await _0x518203['type']('#RegisterForm-email', '' + bouncewear[_0x1c1704]['Email']), await delay(0x226), await _0x518203['type']('#RegisterForm-password', '' + bouncewear[_0x1c1704]['Password']), await delay(0x226), await _0x518203['click']('#marketing'), console['log'](getTime() + '\x20[' + _0x29a018['name'] + ']\x20Task\x20' + (_0x1c1704 + 0x1) + '\x20:\x20Submitting..'), await _0x518203['$eval']('#RegisterForm', _0x3e198e => _0x3e198e['submit']()), await delay(0x1f40), console['log'](getTime() + '\x20[' + _0x29a018['name'] + ']\x20Task\x20' + (_0x1c1704 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x518203['solveRecaptchas'](), await _0x518203['click']('.shopify-challenge__button.btn');
            async function _0x29cd6f() {
                for (var _0x2c4e1e = 0x0; _0x2c4e1e < 0x4; _0x2c4e1e++) {
                    try {
                        console['log']('try'), await _0x518203['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](getTime() + '\x20[' + _0x29a018['name'] + ']\x20Task\x20' + (_0x1c1704 + 0x1) + '\x20:\x20' + chalk['red']('Catpcha\x20failed,\x20retrying..')), await _0x518203['solveRecaptchas'](), await _0x518203['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x29cd6f(), console['log'](getTime() + '\x20[' + _0x29a018['name'] + ']\x20Task\x20' + (_0x1c1704 + 0x1) + '\x20:\x20Captcha\x20Solved'), await delay(0x1f4);
            try {
                await _0x518203['waitForSelector']('.featured-title'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x29a018['name'] + ']\x20Task\x20' + (_0x1c1704 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1c1704]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x1c1704]['Email'] + ',' + bouncewear[_0x1c1704]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x29a018['name'] + ']\x20Task\x20' + (_0x1c1704 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1c1704]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x3ab2a5) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1c1704 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3ab2a5));
            }
        } catch (_0x39fa5a) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1c1704 + 0x1) + '\x20:\x20' + _0x39fa5a));
        } finally {
            _0x253960 && _0x253960['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function pattaAcc(_0x544fba, _0x3e9830, _0x436d87) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x18ef4f = 0x0; _0x18ef4f < _0x436d87['length']; _0x18ef4f++) {
        await jig(_0x436d87, _0x18ef4f);
        if (_0x436d87[_0x18ef4f]['Email'] == '' || _0x436d87[_0x18ef4f]['Password'] == '' || _0x436d87[_0x18ef4f]['FirstName'] == '' || _0x436d87[_0x18ef4f]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x18ef4f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x2c8da9 = getProxy()[_0x18ef4f]['split'](':');
        else
            var _0x13be37 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x2c8da9 = getProxy()[_0x13be37]['split'](':');
        const _0x1932e1 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2c8da9[0x0] + ':' + _0x2c8da9[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x355eeb = await _0x1932e1['newPage']();
            await _0x355eeb['authenticate']({
                'username': '' + _0x2c8da9[0x2],
                'password': '' + _0x2c8da9[0x3]
            }), console['log'](getTime() + '\x20[' + _0x3e9830['name'] + ']\x20Task\x20' + (_0x18ef4f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x355eeb['setRequestInterception'](!![]), _0x355eeb['on']('request', _0x326523 => {
                _0x326523['resourceType']() === 'image' || _0x326523['resourceType']() === 'font' || _0x326523['resourceType']() === 'media' ? _0x326523['abort']() : _0x326523['continue']();
            }), await _0x355eeb['goto'](_0x544fba), await delay(0xbb8), await _0x355eeb['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x3e9830['name'] + ']\x20Task\x20' + (_0x18ef4f + 0x1) + '\x20:\x20Filling\x20information'), await _0x355eeb['type']('#RegisterForm-FirstName', '' + _0x436d87[_0x18ef4f]['FirstName']), await delay(0x226), await _0x355eeb['type']('#RegisterForm-LastName', '' + _0x436d87[_0x18ef4f]['LastName']), await delay(0x226), await _0x355eeb['type']('#RegisterForm-email', '' + _0x436d87[_0x18ef4f]['Email']), await delay(0x226), await _0x355eeb['type']('#RegisterForm-password', '' + _0x436d87[_0x18ef4f]['Password']), await delay(0x226), console['log'](getTime() + '\x20[' + _0x3e9830['name'] + ']\x20Task\x20' + (_0x18ef4f + 0x1) + '\x20:\x20Submitting..'), await _0x355eeb['$eval']('#RegisterForm', _0x45b9cc => _0x45b9cc['submit']()), await delay(0x1f40);
            try {
                await _0x355eeb['waitForSelector']('.home-page-grid__collection'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x3e9830['name'] + ']\x20Task\x20' + (_0x18ef4f + 0x1) + '\x20:\x20Account\x20' + _0x436d87[_0x18ef4f]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x436d87[_0x18ef4f]['Email'] + ',' + _0x436d87[_0x18ef4f]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x3e9830['name'] + ']\x20Task\x20' + (_0x18ef4f + 0x1) + '\x20:\x20Account\x20' + _0x436d87[_0x18ef4f]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
            } catch (_0x1bf265) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x18ef4f + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1bf265));
            }
        } catch (_0x28fb0a) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x18ef4f + 0x1) + '\x20:\x20' + _0x28fb0a));
        } finally {
            _0x1932e1 && _0x1932e1['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function pattaFunction(_0x3bb85b, _0x50a27d, _0x47b4f7) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5bd8bf = 0x0; _0x5bd8bf < _0x47b4f7['length']; _0x5bd8bf++) {
        await jig(_0x47b4f7, _0x5bd8bf);
        if (_0x47b4f7[_0x5bd8bf]['Email'] == '' || _0x47b4f7[_0x5bd8bf]['Password'] == '' || _0x47b4f7[_0x5bd8bf]['FirstName'] == '' || _0x47b4f7[_0x5bd8bf]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5bd8bf + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0xc7afbe = getProxy()[_0x5bd8bf]['split'](':');
        else
            var _0x189c8f = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0xc7afbe = getProxy()[_0x189c8f]['split'](':');
        const _0x198224 = await puppeteer['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xc7afbe[0x0] + ':' + _0xc7afbe[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3969be = await _0x198224['newPage']();
            await _0x3969be['authenticate']({
                'username': '' + _0xc7afbe[0x2],
                'password': '' + _0xc7afbe[0x3]
            }), console['log'](getTime() + '\x20[' + _0x50a27d['name'] + ']\x20Task\x20' + (_0x5bd8bf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3969be['setRequestInterception'](!![]), _0x3969be['on']('request', _0x55daf9 => {
                _0x55daf9['resourceType']() === 'image' || _0x55daf9['resourceType']() === 'font' || _0x55daf9['resourceType']() === 'media' ? _0x55daf9['abort']() : _0x55daf9['continue']();
            }), await _0x3969be['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x3969be['waitForSelector']('#CustomerEmail'), console['log'](getTime() + '\x20[' + _0x50a27d['name'] + ']\x20Task\x20' + (_0x5bd8bf + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3969be['type']('#CustomerEmail', '' + _0x47b4f7[_0x5bd8bf]['Email']), await delay(0x12c), await _0x3969be['type']('#CustomerPassword', '' + _0x47b4f7[_0x5bd8bf]['Password']), await delay(0x226), await _0x3969be['$eval']('#customer_login', _0x469c92 => _0x469c92['submit']());
            try {
                await _0x3969be['waitForSelector']('#orders'), await delay(0x4b0);
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x50a27d['name'] + ']\x20Task\x20' + (_0x5bd8bf + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x3969be['goto']('' + _0x47b4f7[_0x5bd8bf]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x50a27d['name'] + ']\x20Task\x20' + (_0x5bd8bf + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x3969be['waitForSelector']('#email');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x50a27d['name'] + ']\x20Task\x20' + (_0x5bd8bf + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x3969be['type']('#email', '' + _0x47b4f7[_0x5bd8bf]['Email']), await delay(0x384), await _0x3969be['type']('#first_name', '' + _0x47b4f7[_0x5bd8bf]['FirstName']), await delay(0x514), await _0x3969be['type']('#last_name', '' + _0x47b4f7[_0x5bd8bf]['LastName']), await delay(0x514), await _0x3969be['type']('#street_address', _0x47b4f7[_0x5bd8bf]['Address1'] + '\x20' + _0x47b4f7[_0x5bd8bf]['HouseNumber'] + '\x20' + _0x47b4f7[_0x5bd8bf]['Address2']), await delay(0x2bc), await _0x3969be['type']('#zip_code', '' + _0x47b4f7[_0x5bd8bf]['Postcode']), await delay(0x320), await _0x3969be['type']('#city', '' + _0x47b4f7[_0x5bd8bf]['City']), await delay(0x320), await _0x3969be['type']('#bday', '' + _0x47b4f7[_0x5bd8bf]['Bday']), await delay(0x320), await _0x3969be['type']('#instagram', '' + _0x47b4f7[_0x5bd8bf]['Follower']), await delay(0x352);
            if (_0x47b4f7[_0x5bd8bf]['Size'] == 'RANDOM') {
                const _0x1141c2 = await _0x3969be['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x5872bc => {
                    return _0x5872bc['map'](_0x3e02e6 => _0x3e02e6['textContent']);
                });
                var _0x34ccf5 = Math['round'](Math['random']() * (_0x1141c2['length'] - 0x1));
                console['log'](getTime() + '\x20[' + _0x50a27d['name'] + ']\x20Task\x20' + (_0x5bd8bf + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x1141c2[_0x34ccf5]), await _0x3969be['click']('label[data-eu-size=\x22' + _0x1141c2[_0x34ccf5] + '\x22]');
            } else {
                console['log'](getTime() + '\x20[' + _0x50a27d['name'] + ']\x20Task\x20' + (_0x5bd8bf + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x47b4f7[_0x5bd8bf]['Size']);
                try {
                    await _0x3969be['click']('label[data-eu-size=\x22' + _0x47b4f7[_0x5bd8bf]['Size'] + '\x22]');
                } catch {
                    await _0x3969be['click']('label[data-eu-size=\x22' + _0x47b4f7[_0x5bd8bf]['Size'] + '.0\x22]');
                }
            }
            await delay(0xbb8), await _0x3969be['$$eval']('.raffle__checkbox-label', _0x5faa8c => _0x5faa8c['forEach'](_0x26b0af => _0x26b0af['click']())), await delay(0x7d0), console['log'](getTime() + '\x20[' + _0x50a27d['name'] + ']\x20Task\x20' + (_0x5bd8bf + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x3969be['click']('#raffle__form-submit'), await delay(0x1388);
            try {
                await _0x3969be['waitForSelector']('#raffle__confirmation-message-container'), console['log'](chalk['green'](getTime() + '\x20[' + _0x50a27d['name'] + ']\x20Task\x20' + (_0x5bd8bf + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x50540d) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5bd8bf + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x50540d));
            }
        } catch (_0x1ab546) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x5bd8bf + 0x1) + '\x20:\x20' + _0x1ab546));
        } finally {
            _0x198224 && _0x198224['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function jdFunction(_0x2a7aa2, _0x2f624e) {
    var _0x6ab158 = ![], _0x2101f9 = ![];
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4f7d55 = 0x0; _0x4f7d55 < _0x2f624e['length']; _0x4f7d55++) {
        var _0x2f0da7 = [{
            'type': 'rich',
            'title': 'Succesfull\x20Entry',
            'description': '' + _0x2a7aa2['name'],
            'color': 0xc0d6d6,
            'url': '',
            'fields': [
                {
                    'name': 'User',
                    'value': '' + username
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2f624e[_0x4f7d55]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2f624e[_0x4f7d55]['Size']
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
        const _0x318bb5 = { 'embeds': _0x2f0da7 };
        await jig(_0x2f624e, _0x4f7d55);
        if (_0x2f624e[_0x4f7d55]['Email'] == '' || _0x2f624e[_0x4f7d55]['Url'] == '' || _0x2f624e[_0x4f7d55]['FirstName'] == '' || _0x2f624e[_0x4f7d55]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x4f7d55 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x304c7f = getProxy()[_0x4f7d55]['split'](':');
        else
            var _0x1758df = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x304c7f = getProxy()[_0x1758df]['split'](':');
        const _0x29d52e = await puppeteer['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x304c7f[0x0] + ':' + _0x304c7f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5c58c7 = await _0x29d52e['newPage']();
            await _0x5c58c7['authenticate']({
                'username': '' + _0x304c7f[0x2],
                'password': '' + _0x304c7f[0x3]
            }), console['log'](getTime() + '\x20[' + _0x2a7aa2['name'] + ']\x20Task\x20' + (_0x4f7d55 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5c58c7['setRequestInterception'](!![]), _0x5c58c7['on']('request', _0x17fa60 => {
                _0x17fa60['resourceType']() === 'image' || _0x17fa60['resourceType']() === 'font' || _0x17fa60['resourceType']() === 'media' ? _0x17fa60['abort']() : _0x17fa60['continue']();
            }), await _0x5c58c7['goto']('' + _0x2f624e[_0x4f7d55]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](getTime() + '\x20[' + _0x2a7aa2['name'] + ']\x20Task\x20' + (_0x4f7d55 + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x5c58c7['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x5c58c7['type']('#comp_firstname', '' + _0x2f624e[_0x4f7d55]['FirstName']), await _0x5c58c7['waitForSelector']('#comp_lastname'), await _0x5c58c7['type']('#comp_lastname', '' + _0x2f624e[_0x4f7d55]['LastName']), await _0x5c58c7['waitForSelector']('#comp_email'), await _0x5c58c7['type']('#comp_email', '' + _0x2f624e[_0x4f7d55]['Email']), await _0x5c58c7['waitForSelector']('#comp_paypalemail'), await _0x5c58c7['type']('#comp_paypalemail', '' + _0x2f624e[_0x4f7d55]['Email']), await _0x5c58c7['waitForSelector']('#comp_mobile_end'), await _0x5c58c7['type']('#comp_mobile_end', '' + _0x2f624e[_0x4f7d55]['Phone']), await _0x5c58c7['waitForSelector']('#comp_dob'), await _0x5c58c7['type']('#comp_dob', '08/09/1992'), console['log'](getTime() + '\x20[' + _0x2a7aa2['name'] + ']\x20Task\x20' + (_0x4f7d55 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x2f624e[_0x4f7d55]['Size'] == 'RANDOM') {
                const _0x4a5f6d = await _0x5c58c7['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x326c8d => {
                    return _0x326c8d['map'](_0x17d4e3 => _0x17d4e3['value']);
                });
                var _0x1f75f4 = Math['round'](Math['random']() * (_0x4a5f6d['length'] - 0x2));
                await _0x5c58c7['select']('#shoesize', _0x4a5f6d[_0x1f75f4 + 0x1]), await delay(0x3e8);
            } else {
                const _0x347d35 = await _0x5c58c7['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1dcee9 => {
                    return _0x1dcee9['map'](_0x3ccc3d => _0x3ccc3d['innerText']);
                }), _0x61748f = await _0x5c58c7['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4c6268 => {
                    return _0x4c6268['map'](_0x4d029c => _0x4d029c['value']);
                });
                var _0x10375c = _0x2f624e[_0x4f7d55]['Size'];
                for (var _0xd4e382 = 0x1; _0xd4e382 < _0x61748f['length']; _0xd4e382++) {
                    var _0x348e42 = _0x347d35[_0xd4e382]['split']('\x20')[0x0];
                    if (_0x348e42 == _0x10375c) {
                        await _0x5c58c7['select']('#shoesize', _0x61748f[_0xd4e382]);
                        break;
                    } else {
                        if (_0xd4e382 + 0x1 == _0x61748f['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x5c58c7['waitForSelector']('#comp_address1'), await _0x5c58c7['type']('#comp_address1', _0x2f624e[_0x4f7d55]['Address1'] + '\x20' + _0x2f624e[_0x4f7d55]['HouseNumber']), await _0x5c58c7['waitForSelector']('#comp_address2'), await _0x5c58c7['type']('#comp_address2', '' + _0x2f624e[_0x4f7d55]['Address2']), await _0x5c58c7['waitForSelector']('#comp_address2'), await _0x5c58c7['type']('#comp_address3', '' + _0x2f624e[_0x4f7d55]['City']), await _0x5c58c7['waitForSelector']('#comp_postcode'), await _0x5c58c7['type']('#comp_postcode', '' + _0x2f624e[_0x4f7d55]['Zip']), console['log'](getTime() + '\x20[' + _0x2a7aa2['name'] + ']\x20Task\x20' + (_0x4f7d55 + 0x1) + '\x20:\x20Sending\x20Entry'), await delay(0x4b0), await _0x5c58c7['click']('label#emailhold'), await delay(0x5dc), await _0x5c58c7['click']('#preauth_tandc_email\x20>\x20label'), await delay(0x5dc), await _0x5c58c7['click']('#submit'), await _0x5c58c7['waitForSelector']('#paymentWrap'), console['log'](getTime() + '\x20[' + _0x2a7aa2['name'] + ']\x20Task\x20' + (_0x4f7d55 + 0x1) + '\x20:\x20' + chalk['blue']('Awaiting\x20Paypal\x20Payment')), _0x29d52e['on']('targetcreated', async _0xc69e12 => {
                if (_0xc69e12['type']() === 'page') {
                    const _0x25a29f = await _0xc69e12['page']();
                    async function _0x311f9d() {
                        try {
                            await _0x5c58c7['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x2101f9 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x1a313c() {
                        try {
                            await _0x5c58c7['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x6ab158 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x1a313c(), _0x311f9d(), await delay(0x493e0);
                }
            });
            async function _0x35805b() {
                for (let _0x3a418d = 0x0; _0x3a418d < 0x12c; _0x3a418d++) {
                    if (_0x6ab158 == !![]) {
                        console['log'](chalk['green'](getTime() + '\x20[' + _0x2a7aa2['name'] + ']\x20Task\x20' + (_0x4f7d55 + 0x1) + '\x20:\x20Raffle\x20Entered!')), sendWebhook(succesWH, _0x318bb5);
                        return;
                    } else {
                        if (_0x2101f9)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await delay(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await delay(0xbb8), await _0x5c58c7['click']('.zoid-outlet'), await delay(0x7d0), await _0x35805b();
        } catch (_0x1b2200) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x2a7aa2['name'] + ']\x20Task\x20' + (_0x4f7d55 + 0x1) + '\x20:\x20' + _0x1b2200)), _0x2f0da7[0x0]['title'] = 'Failed\x20entry', _0x2f0da7[0x0]['description'] = _0x2a7aa2['name'] + ':\x20' + _0x1b2200, await sendWebhook(errorWH, _0x318bb5);
        } finally {
            _0x29d52e && _0x29d52e['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function oqiumFunction(_0x51b390, _0x249e8a, _0x2f3add, _0x1585f6) {
    var _0x4cfdf5 = {}, _0x58f8c5 = [], _0x36daad = {};
    !_0x1585f6 && (_0x1585f6 = {});
    _0x249e8a != 'ver' && (await jig(_0x1585f6, _0x51b390), _0x58f8c5 = [{
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
                'value': '' + _0x1585f6[_0x51b390]['Size']
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
    }], _0x36daad = { 'embeds': _0x58f8c5 }, _0x4cfdf5 = _0x2f3add['data'], _0x249e8a == 'exp' ? _0x4cfdf5['data']['attributes']['email'] = '' + _0x1585f6[_0x51b390]['FirstName'] + _0x1585f6[_0x51b390]['LastName'] + settings['catchall'] : _0x4cfdf5['data']['attributes']['email'] = '' + _0x1585f6[_0x51b390]['Email'], _0x4cfdf5['data']['attributes']['properties']['$first_name'] = '' + _0x1585f6[_0x51b390]['FirstName'], _0x4cfdf5['data']['attributes']['properties']['$last_name'] = '' + _0x1585f6[_0x51b390]['LastName'], _0x4cfdf5['data']['attributes']['properties']['$address1'] = _0x1585f6[_0x51b390]['Address1'] + '\x20' + _0x1585f6[_0x51b390]['Address2'] + '\x20' + _0x1585f6[_0x51b390]['HouseNumber'], _0x4cfdf5['data']['attributes']['properties']['$zip'] = '' + _0x1585f6[_0x51b390]['Zip'], _0x4cfdf5['data']['attributes']['properties']['$city'] = '' + _0x1585f6[_0x51b390]['City'], _0x4cfdf5['data']['attributes']['properties']['$country'] = '' + _0x1585f6[_0x51b390]['Country'], _0x4cfdf5['data']['attributes']['properties']['Size'] = '' + _0x1585f6[_0x51b390]['Size'], _0x4cfdf5['data']['attributes']['properties']['$phone_number'] = '' + _0x1585f6[_0x51b390]['Phone'], _0x4cfdf5['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x1585f6[_0x51b390]['Follower']);
    if (settings['useRandomProxy'] = ![])
        var _0x34addd = getProxy()[_0x51b390]['split'](':');
    else
        var _0x183843 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x34addd = getProxy()[_0x183843]['split'](':');
    var _0x286c63 = {
        'jar': j,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x2f3add['url'],
        'headers': _0x2f3add['headers'],
        'body': JSON['stringify'](_0x4cfdf5),
        'proxy': 'http://' + _0x34addd[0x2] + ':' + _0x34addd[0x3] + '@' + _0x34addd[0x0] + ':' + _0x34addd[0x1]
    };
    return _0x249e8a != 'ver' && (_0x286c63['url'] = _0x2f3add['url'], _0x286c63['headers'] = _0x2f3add['headers']), _0x249e8a == 'ver' && (_0x286c63['method'] = 'GET'), new Promise(function (_0x37d77d, _0x538c3e) {
        callback = async (_0x231cbf, _0x36373f, _0x2c36f5) => {
            !_0x231cbf && _0x36373f['statusCode'] == 0xca || !_0x231cbf && _0x36373f['statusCode'] == 0xc8 ? (_0x249e8a != 'ver' && await sendWebhook(succesWH, _0x36daad), _0x37d77d(console['log'](chalk['green'](getTime() + '\x20[' + _0x2f3add['name'] + ']\x20Task\x20' + (_0x51b390 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x249e8a != 'ver' && (_0x58f8c5[0x0]['title'] = 'Failed\x20entry', _0x58f8c5[0x0]['description'] = '' + _0x231cbf, await sendWebhook(errorWH, _0x36daad)), _0x538c3e(console['log'](getTime() + '\x20[' + _0x2f3add['name'] + ']\x20Task\x20' + (_0x51b390 + 0x1) + ':\x20' + _0x231cbf)));
        };
        try {
            _0x249e8a != 'ver' && console['log'](getTime() + '\x20[' + _0x2f3add['name'] + ']\x20Task\x20' + (_0x51b390 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4cfdf5['data']['attributes']['email']), request(_0x286c63, callback);
        } catch (_0x2f1928) {
            console['log'](getTime() + '\x20Task\x20' + (_0x51b390 + 0x1) + ':\x20' + _0x2f1928);
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
            async function _0x42b3ce() {
                console['clear'](), console['log']('Welcome\x20to\x20' + chalk['cyan']('JRaffles();') + '\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x5b6778 = 0x0; _0x5b6778 < modules['length']; _0x5b6778++) {
                    if (modules[_0x5b6778]['name'] === 'Reload\x20Settings' || modules[_0x5b6778]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x5b6778 + ')\x20[' + modules[_0x5b6778]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (modules['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (modules['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
                if (modules[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await getFunction(modules[taskModule]['modules']);
                    var _0x3c72f2 = modules[taskModule]['modules'][taskFunction];
                    console['clear'](), await afewScraper(), await getAfewProduct();
                    var _0x4fbeb0 = await getTaskFile();
                    return await afewFunction(afewProducts[afewProduct], 'nor', _0x3c72f2, _0x4fbeb0), _0x42b3ce();
                } else {
                    if (modules[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await getFunction(modules[taskModule]['modules']);
                        var _0x3c72f2 = modules[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x4dbd24 = await getTaskFile();
                            console['log']('Starting\x20' + _0x4dbd24['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x3a397a = 0x0; _0x3a397a < _0x4dbd24['length']; _0x3a397a++) {
                                console['log'](getTime() + '\x20[' + _0x3c72f2['name'] + ']\x20Task\x20' + (_0x3a397a + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x3a397a, 'nor', _0x3c72f2, _0x4dbd24), console['log'](getTime() + '\x20[' + _0x3c72f2['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
                            }
                            ;
                            return _0x42b3ce();
                        } else {
                            if (taskFunction == 0x1) {
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x3a397a = 0x0; _0x3a397a < links['length']; _0x3a397a++) {
                                    _0x3c72f2['url'] = links[_0x3a397a], console['log'](getTime() + '\x20[' + _0x3c72f2['name'] + ']\x20Task\x20' + (_0x3a397a + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x3a397a, 'ver', _0x3c72f2), console['log'](getTime() + '\x20[' + _0x3c72f2['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                                }
                                ;
                                return _0x42b3ce();
                            }
                        }
                    } else {
                        if (modules[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x4fc95c = await getTaskFile();
                            return console['log'](_0x4fc95c), await footshopModule(_0x4fc95c), await delay(0x1388), _0x42b3ce();
                        } else {
                            if (modules[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await getFunction(modules[taskModule]['modules']);
                                var _0x3c72f2 = modules[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x1143ef = await getTaskFile();
                                    console['log']('Starting\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x3a397a = 0x0; _0x3a397a < _0x1143ef['length']; _0x3a397a++) {
                                        console['log'](getTime() + '\x20[' + _0x3c72f2['name'] + ']\x20Task\x20' + (_0x3a397a + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await oqiumFunction(_0x3a397a, 'nor', _0x3c72f2, _0x1143ef);
                                        } catch {
                                            console['log'](chalk['red'](getTime() + '\x20[' + _0x3c72f2['name'] + ']\x20Task\x20' + (_0x3a397a + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](getTime() + '\x20[' + _0x3c72f2['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                                    }
                                    return _0x42b3ce();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x3a397a = 0x0; _0x3a397a < links['length']; _0x3a397a++) {
                                            try {
                                                _0x3c72f2['url'] = links[_0x3a397a], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a397a + 0x1) + ':\x20Getting\x20Session'), await oqiumFunction(_0x3a397a, 'ver', _0x3c72f2), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                                            } catch (_0x531de3) {
                                                console['log'](_0x531de3);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x42b3ce();
                                    }
                                }
                                ;
                            } else {
                                if (modules[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await getFunction(modules[taskModule]['modules']);
                                    var _0x3c72f2 = modules[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x3c72f2);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (modules[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await getFunction(modules[taskModule]['modules']);
                                        var _0x3c72f2 = modules[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x47c08e = await getTaskFile();
                                            return await pattaAcc('https://patta.nl/account/register', _0x3c72f2, _0x47c08e), _0x42b3ce();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x47c08e = await getTaskFile();
                                                return await pattaFunction('', _0x3c72f2, _0x47c08e), _0x42b3ce();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (modules[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await getFunction(modules[taskModule]['modules']);
                                            var _0x3c72f2 = modules[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x47c08e = await getTaskFile();
                                                return await kickzAcc('https://www.kickz.com/nl/login/', _0x3c72f2, _0x47c08e), _0x42b3ce();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x47c08e = await getTaskFile();
                                                    return await pattaFunction('', _0x3c72f2, _0x47c08e), _0x42b3ce();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (modules[taskModule]['name'] == 'JD') {
                                                taskFunction = await getFunction(modules[taskModule]['modules']);
                                                var _0x3c72f2 = modules[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x3ede13 = await getTaskFile();
                                                    return await jdFunction(_0x3c72f2, _0x3ede13), _0x42b3ce();
                                                }
                                            } else {
                                                if (modules[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x5a747c = 0x0;
                                                    for (const _0x318215 in settings) {
                                                        console['log']('(' + _0x5a747c + ')\x20' + _0x318215 + '\x20:\x20' + settings[_0x318215]), _0x5a747c++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x5a747c + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0xc3058d = await getSetting();
                                                    if (_0xc3058d == _0x5a747c)
                                                        return _0x42b3ce();
                                                    console['clear'];
                                                    var _0x39739f = 0x0;
                                                    for (var _0x545bb6 in settings) {
                                                        if (_0xc3058d == _0x39739f) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x545bb6 + '\x20:'), settings[_0x545bb6] = await getValue(), fs['writeFileSync']('../settings.json', JSON['stringify'](settings));
                                                            break;
                                                        } else
                                                            _0x39739f++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await delay(0xbb8), _0x42b3ce();
                                                } else {
                                                    if (modules[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await loadSettings(), _0x42b3ce();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x4f7447 = await getPassword();
                                                            _0x4f7447 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
            await _0x42b3ce();
        } catch (_0x21df6a) {
            return console['log'](_0x21df6a), await delay(0x3a98);
        }
}
;
setTitle('JRaffles\x20' + version), loadSettings(), main();