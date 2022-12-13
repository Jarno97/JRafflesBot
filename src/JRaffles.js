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
const AutoGitUpdate = require('auto-git-update'), {PageEmittedEvents} = require('puppeteer'), {getRandomValues} = require('crypto'), {resolve} = require('path'), config = {
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
const delay = _0x3d6953 => new Promise(_0x4d8fda => setTimeout(_0x4d8fda, _0x3d6953));
async function getLicense(_0x4cf27f) {
    return axios['get']('https://api.hyper.co/v4/licenses/' + _0x4cf27f, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0xe5f5fb => _0xe5f5fb['data'])['catch'](() => null);
}
;
async function checkLicense(_0x525143) {
    console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
    const _0x2654e2 = await getLicense(_0x525143);
    username = JSON['stringify'](_0x2654e2['user']['username']);
    if (!_0x2654e2)
        return console['log']('License\x20not\x20found');
    if (!_0x2654e2['user'])
        return console['log']('License\x20not\x20bound');
    return _0x2654e2['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
    var _0x8dff56 = await prompt['get']('Module');
    return console['clear'](), _0x8dff56['Module'];
}
;
async function getSetting() {
    var _0x2820e6 = await prompt['get']('Setting');
    return console['clear'](), _0x2820e6['Setting'];
}
async function getTaskFile() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x56b207 = 0x0; _0x56b207 < taskFiles['length']; _0x56b207++) {
        console['log']('\x20(' + _0x56b207 + ')\x20' + taskFiles[_0x56b207]);
    }
    console['log']('');
    var _0x26129e = await prompt['get']('Task'), _0x5a3669 = fs['readFileSync']('../tasks/' + taskFiles[_0x26129e['Task']], 'utf-8');
    return taskCSV = Papa['parse'](_0x5a3669, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x26129e['Task']])), taskCSV;
}
async function getProxyFile() {
    console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x45b903 = 0x0; _0x45b903 < taskFiles['length']; _0x45b903++) {
        console['log']('\x20(' + _0x45b903 + ')\x20' + taskFiles[_0x45b903]);
    }
    console['log']('');
    var _0x1aec29 = await prompt['get']('Task'), _0x4e87d4 = fs['readFileSync']('../tasks/' + taskFiles[_0x1aec29['Task']], 'utf-8');
    return taskCSV = Papa['parse'](_0x4e87d4, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x1aec29['Task']])), taskCSV;
}
async function getValue() {
    var _0x304658 = await prompt['get']('Value');
    return console['clear'](), _0x304658['Value'];
}
async function getFunction(_0x4b827f) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x55d5a9 = 0x0; _0x55d5a9 < _0x4b827f['length']; _0x55d5a9++) {
        console['log']('\x20(' + _0x55d5a9 + ')\x20[' + _0x4b827f[_0x55d5a9]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x3f0e31 = await prompt['get']('Module');
    return _0x3f0e31['Module'];
}
async function getPassword() {
    var _0x438ed3 = await prompt['get']('Password');
    return console['clear'](), _0x438ed3['Password'];
}
;
async function getLinks() {
    var _0x4c79cf = await prompt['get']('Links');
    return _0x4c79cf['Links'];
}
;
async function getAfewProduct() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x3f6213 = 0x0; _0x3f6213 < afewProducts['length']; _0x3f6213++) {
        console['log']('\x20(' + _0x3f6213 + ')\x20' + afewProducts[_0x3f6213]);
    }
    ;
    console['log']();
    let _0x16d7ce = await prompt['get']('Product');
    console['clear'](), afewProduct = _0x16d7ce['Product'];
    return;
}
;
function getTime() {
    var _0x503d37 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x503d37;
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
async function sendWebhook(_0x53b396, _0x418a9f) {
    let _0x4b1bf5 = { 'headers': { 'content-type': 'application/json' } };
    await axios['post'](_0x53b396, _0x418a9f, _0x4b1bf5);
}
;
async function jig(_0x473a26, _0xff5ed0) {
    var _0x344ed3 = _0x473a26[_0xff5ed0]['Address1']['split'](''), _0x206a05 = _0x473a26[_0xff5ed0]['Address2']['split'](''), _0x17d062 = _0x473a26[_0xff5ed0]['Email']['split']('@');
    for (var _0x51498d = 0x0; _0x51498d < _0x344ed3['length']; _0x51498d++) {
        if (_0x344ed3[_0x51498d] == 'X') {
            var _0x573885 = Math['round'](Math['random']() * (letters['length'] - 0x1));
            _0x344ed3[_0x51498d] = lettersArray[_0x573885];
        }
    }
    ;
    for (var _0x51498d = 0x0; _0x51498d < _0x206a05['length']; _0x51498d++) {
        if (_0x206a05[_0x51498d] == 'X') {
            var _0x573885 = Math['round'](Math['random']() * (letters['length'] - 0x1));
            _0x206a05[_0x51498d] = lettersArray[_0x573885];
        }
    }
    ;
    _0x473a26[_0xff5ed0]['FirstName'] == 'RANDOM' && (_0x473a26[_0xff5ed0]['FirstName'] = random['first']());
    _0x473a26[_0xff5ed0]['LastName'] == 'RANDOM' && (_0x473a26[_0xff5ed0]['LastName'] = random['last']());
    _0x17d062[0x0] == 'RANDOM' ? _0x17d062[0x0] = '' + random['first']() + random['last']() + '@' : _0x17d062[0x0] = _0x17d062[0x0] + '@';
    _0x473a26[_0xff5ed0]['Email'] = _0x17d062['join'](''), _0x473a26[_0xff5ed0]['Address1'] = _0x344ed3['join'](''), _0x473a26[_0xff5ed0]['Address2'] = _0x206a05['join']('');
    return;
}
;
function getProxy() {
    let _0x14e6a7 = proxyFile['split']('\x0a'), _0x196fb5 = _0x14e6a7['map']((_0x712334, _0x1ae9be) => {
            sanatizeProxy = _0x712334['replace']('\x0d', '');
            if (_0x14e6a7[_0x1ae9be + 0x1] != undefined)
                return '' + sanatizeProxy;
            return '' + sanatizeProxy;
        });
    return _0x196fb5;
}
;
async function afewScraper() {
    var _0x269359 = getProxy()[0x1]['split'](':');
    const _0x1fa583 = await puppeteer['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x269359[0x0] + ':' + _0x269359[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x1f0238 = await _0x1fa583['newPage']();
        await _0x1f0238['authenticate']({
            'username': '' + _0x269359[0x2],
            'password': '' + _0x269359[0x3]
        }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x1f0238['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1f0238['setRequestInterception'](!![]), _0x1f0238['on']('request', _0x3eea1a => {
            _0x3eea1a['resourceType']() === 'image' || _0x3eea1a['resourceType']() === 'font' || _0x3eea1a['resourceType']() === 'media' ? _0x3eea1a['abort']() : _0x3eea1a['continue']();
        }), await _0x1f0238['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x1f0238['waitForTimeout'](0xbb8), await _0x1f0238['waitForSelector']('.product-card');
        const _0x2e8079 = await _0x1f0238['$$eval']('a.product-card', _0x51c243 => {
            return _0x51c243['map'](_0x26e73a => _0x26e73a['href']);
        });
        return afewProducts = _0x2e8079;
    } catch (_0x834e24) {
        console['log']('\x20' + _0x834e24);
    } finally {
        _0x1fa583['close'](), console['clear']();
    }
}
;
async function mahaFunction(_0x4d468c, _0x28c8d6, _0x53d2e4, _0x36205f) {
    await jig(_0x36205f, _0x4d468c);
    var _0x3a967f = [{
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
                    'value': '' + oqium[_0x4d468c]['Size']
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
    const _0x119adc = { 'embeds': _0x3a967f };
    if (settings['useRandomProxy'] = ![])
        var _0x15053f = getProxy()[_0x4d468c]['split'](':');
    else
        var _0x4a3a37 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x15053f = getProxy()[_0x4a3a37]['split'](':');
    var _0x455244 = _0x53d2e4['data'];
    _0x28c8d6 == 'exp' ? _0x455244['data']['attributes']['email'] = '' + _0x36205f[_0x4d468c]['FirstName'] + _0x36205f[_0x4d468c]['LastName'] + settings['catchall'] : _0x455244['data']['attributes']['email'] = '' + _0x36205f[_0x4d468c]['Email'];
    _0x455244['data']['attributes']['properties']['$first_name'] = '' + _0x36205f[_0x4d468c]['FirstName'], _0x455244['data']['attributes']['properties']['$last_name'] = '' + _0x36205f[_0x4d468c]['LastName'], _0x455244['data']['attributes']['properties']['$address1'] = _0x36205f[_0x4d468c]['Address1'] + '\x20' + _0x36205f[_0x4d468c]['Address2'], _0x455244['data']['attributes']['properties']['$zip'] = '' + _0x36205f[_0x4d468c]['Zip'], _0x455244['data']['attributes']['properties']['$city'] = '' + _0x36205f[_0x4d468c]['City'], _0x455244['data']['attributes']['properties']['$country'] = '' + _0x36205f[_0x4d468c]['Country'], _0x455244['data']['attributes']['properties']['Size'] = '' + _0x36205f[_0x4d468c]['Size'], _0x455244['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x36205f[_0x4d468c]['Follower'];
    var _0x581efe = {
        'jar': j,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x53d2e4['url'],
        'headers': _0x53d2e4['headers'],
        'body': JSON['stringify'](_0x455244),
        'proxy': 'http://' + _0x15053f[0x2] + ':' + _0x15053f[0x3] + '@' + _0x15053f[0x0] + ':' + _0x15053f[0x1]
    };
    return _0x28c8d6 === 'ver' && (_0x581efe['method'] = 'GET'), new Promise(function (_0x3cf85c, _0x52a8be) {
        callback = async (_0x4f8718, _0x42e687, _0x547101) => {
            !_0x4f8718 && _0x42e687['statusCode'] == 0xca || !_0x4f8718 && _0x42e687['statusCode'] == 0xc8 ? _0x3cf85c(console['log'](chalk['green'](getTime() + '\x20[' + _0x53d2e4['name'] + ']\x20Task\x20' + (_0x4d468c + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x3a967f[0x0]['title'] = 'Failed\x20entry', _0x3a967f[0x0]['description'] = '' + _0x4f8718, await sendWebhook(errorWH, _0x119adc), _0x52a8be(console['log'](getTime() + '\x20[' + _0x53d2e4['name'] + ']\x20Task\x20' + (_0x4d468c + 0x1) + ':\x20' + _0x4f8718)));
        };
        try {
            _0x28c8d6 === 'ver' ? console['log'](getTime() + '\x20[' + _0x53d2e4['name'] + ']\x20Task\x20' + (_0x4d468c + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + _0x53d2e4['name'] + ']\x20Task\x20' + (_0x4d468c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x455244['data']['attributes']['email']), request(_0x581efe, callback);
        } catch (_0x5462f4) {
            console['log'](getTime() + '\x20Task\x20' + (_0x4d468c + 0x1) + ':\x20' + _0x5462f4);
        }
    });
}
;
async function footshopModule(_0x2370bb) {
    var _0xb550a;
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x591084 = 0x0; _0x591084 < _0x2370bb['length']; _0x591084++) {
        await jig(_0x2370bb, _0x591084);
        if (_0x2370bb[_0x591084]['Email'] == '' || _0x2370bb[_0x591084]['FirstName'] == '' || _0x2370bb[_0x591084]['LastName'] == '' || _0x2370bb[_0x591084]['Country'] == '' || _0x2370bb[_0x591084]['Size'] == '' || _0x2370bb[_0x591084]['Address1'] == '' || _0x2370bb[_0x591084]['Zip'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        console['log'](_0x2370bb[_0x591084]['Url']);
        async function _0x218ef5() {
            var _0x4848ac = await axios['get']('https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_')['then'](_0x31310e => _0x31310e['data'])['catch'](() => undefined);
            console['log'](_0x4848ac);
            var _0x4d72cd = _0x4848ac['sizeSets']['Men']['sizes'];
            _0x4d72cd['length'] == 0x0 && (_0x4d72cd = _0x4848ac['sizeSets']['Women']['sizes'], _0x4d72cd['length'] == 0x0 && (_0x4d72cd = _0x4848ac['sizeSets']['Unisex']['sizes'], _0x4d72cd['length'] == 0x0 && (_0x4d72cd = _0x4848ac['sizeSets']['Kids']['sizes'])));
            ;
            async function _0x3cce0b() {
                for (var _0x20dc4b = 0x0; _0x20dc4b < _0x4d72cd['length']; _0x20dc4b++) {
                    if (_0x4d72cd[_0x20dc4b]['eur'] == _0x2370bb[_0x591084]['Size'])
                        return _0xb550a = _0x4d72cd[_0x20dc4b]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
                }
                return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x20Size\x20' + _0x2370bb[_0x591084]['Size'] + '\x20not\x20found'), ![];
            }
            ;
            let _0x40104a = await _0x3cce0b();
            if (_0x40104a == ![])
                return ![];
        }
        let _0x3f0bf4 = await _0x218ef5();
        if (_0x3f0bf4 == ![])
            continue;
        if (_0x2370bb[_0x591084]['Email'] == '' || _0x2370bb[_0x591084]['FirstName'] == '' || _0x2370bb[_0x591084]['LastName'] == '' || _0x2370bb[_0x591084]['Country'] == '' || _0x2370bb[_0x591084]['Size'] == '' || _0x2370bb[_0x591084]['Address1'] == '' || _0x2370bb[_0x591084]['Zip'] == '' || _0x2370bb[_0x591084]['Phone'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x1daf19 = 'https://releases.footshop.com/register/' + _0x2370bb[_0x591084]['Url'] + '/Men/' + _0xb550a;
        if (settings['useRandomProxy'] = ![])
            var _0x3dfbdf = getProxy()[_0x591084]['split'](':');
        else
            var _0x1c296e = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x3dfbdf = getProxy()[_0x1c296e]['split'](':');
        const _0x4a3a84 = await puppeteer['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x3dfbdf[0x0] + ':' + _0x3dfbdf[0x1]]
        });
        try {
            const _0x1b582d = await _0x4a3a84['newPage']();
            await _0x1b582d['authenticate']({
                'username': '' + _0x3dfbdf[0x2],
                'password': '' + _0x3dfbdf[0x3]
            }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1b582d['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1b582d['setRequestInterception'](!![]), _0x1b582d['on']('request', _0xa3cbe6 => {
                _0xa3cbe6['resourceType']() === 'image' || _0xa3cbe6['resourceType']() === 'font' || _0xa3cbe6['resourceType']() === 'media' ? _0xa3cbe6['abort']() : _0xa3cbe6['continue']();
            }), await _0x1b582d['goto']('' + _0x1daf19 + _0xb550a), await _0x1b582d['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1b582d['type']('input[name=\x22email\x22]', '' + _0x2370bb[_0x591084]['Email']), await delay(0x640), await _0x1b582d['type']('input[name=\x22phone\x22]', '' + _0x2370bb[_0x591084]['Phone']), await delay(0x4b0), await _0x1b582d['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
            try {
                await _0x1b582d['type']('input[name=\x22firstName\x22]', '' + _0x2370bb[_0x591084]['FirstName']), await delay(0x258);
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
                continue;
            }
            await _0x1b582d['type']('input[name=\x22lastName\x22]', '' + _0x2370bb[_0x591084]['LastName']), await delay(0xc8), await _0x1b582d['type']('input[name=\x22instagramUsername\x22]', '' + _0x2370bb[_0x591084]['Follower']), await delay(0x4b0), await _0x1b582d['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1b582d['select']('select[name=\x22country\x22]', '' + _0x2370bb[_0x591084]['Country']), await delay(0x2bc), await _0x1b582d['type']('input[name=\x22streetName\x22]', '' + _0x2370bb[_0x591084]['Address1']), await delay(0x258), await _0x1b582d['type']('input[name=\x22houseNumber\x22]', '' + _0x2370bb[_0x591084]['HouseNumber'] + _0x2370bb[_0x591084]['Address2']), await delay(0xc8), await _0x1b582d['type']('input[name=\x22postalCode\x22]', '' + _0x2370bb[_0x591084]['Zip']), await delay(0x1f4), await _0x1b582d['type']('input[name=\x22city\x22]', '' + _0x2370bb[_0x591084]['City']), await delay(0x4b0), await _0x1b582d['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x1b582d['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1b582d['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x1b582d['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1b582d['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1b582d['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x4b0), await _0x1b582d['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2370bb[_0x591084]['CardNumber']), await delay(0x320), await _0x1b582d['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2370bb[_0x591084]['ExpiryDate']), await delay(0x4b0), await _0x1b582d['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2370bb[_0x591084]['CVV']), await delay(0x226), await _0x1b582d['type']('input[name=\x22holderName\x22]', '' + _0x2370bb[_0x591084]['NameOnCard']), await delay(0x226), await _0x1b582d['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x1b582d['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await delay(0xbb8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x23f454) {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x591084 + 0x1) + '\x20:\x20' + _0x23f454);
        } finally {
            _0x4a3a84['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
        }
    }
}
afewFunction = async (_0x473fa9, _0x3c479b, _0x2496e7, _0xb1fd40) => {
    for (var _0x22bf05 = 0x0; _0x22bf05 < _0xb1fd40['length']; _0x22bf05++) {
        await jig(_0xb1fd40, _0x22bf05);
        var _0x4c1bce = [{
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
                        'value': '' + _0x473fa9
                    },
                    {
                        'name': 'Size',
                        'value': '' + _0xb1fd40[_0x22bf05]['Size']
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
        const _0x5d5481 = { 'embeds': _0x4c1bce };
        if (_0xb1fd40[_0x22bf05]['Email'] == '' || _0xb1fd40[_0x22bf05]['FirstName'] == '' || _0xb1fd40[_0x22bf05]['LastName'] == '' || _0xb1fd40[_0x22bf05]['Country'] == '' || _0xb1fd40[_0x22bf05]['Size'] == '' || _0xb1fd40[_0x22bf05]['Address1'] == '' || _0xb1fd40[_0x22bf05]['Zip'] == '') {
            console['log'](getTime() + '\x20[' + _0x2496e7['name'] + ']\x20Task\x20' + (_0x22bf05 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x511e80 = getProxy()[_0x22bf05]['split'](':');
        else
            var _0x1ee3d9 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x511e80 = getProxy()[_0x1ee3d9]['split'](':');
        const _0x4a042c = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x511e80[0x0] + ':' + _0x511e80[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x43493a = await _0x4a042c['newPage']();
            await _0x43493a['setDefaultNavigationTimeout'](0x1d4c0), await _0x43493a['authenticate']({
                'username': '' + _0x511e80[0x2],
                'password': '' + _0x511e80[0x3]
            }), console['log'](getTime() + '\x20[' + _0x2496e7['name'] + ']\x20Task\x20' + (_0x22bf05 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x43493a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x43493a['setRequestInterception'](!![]), _0x43493a['on']('request', _0x5400cf => {
                _0x5400cf['resourceType']() === 'image' || _0x5400cf['resourceType']() === 'font' || _0x5400cf['resourceType']() === 'media' ? _0x5400cf['abort']() : _0x5400cf['continue']();
            }), await _0x43493a['goto'](_0x473fa9), console['log'](getTime() + '\x20[' + _0x2496e7['name'] + ']\x20Task\x20' + (_0x22bf05 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x43493a['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + _0x2496e7['name'] + ']\x20Task\x20' + (_0x22bf05 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x43493a['waitForTimeout'](0x320);
            if (_0xb1fd40[_0x22bf05]['Size'] == 'RANDOM') {
                console['log'](getTime() + '\x20[' + _0x2496e7['name'] + ']\x20Task\x20' + (_0x22bf05 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x319bda = await _0x43493a['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x534250 => {
                    return _0x534250['map'](_0x4ad7da => _0x4ad7da['href']);
                });
                var _0x584e60 = Math['round'](Math['random']() * (_0x319bda['length'] - 0x1));
                await _0x43493a['goto']('' + _0x319bda[_0x584e60]);
            } else {
                console['log'](getTime() + '\x20[' + _0x2496e7['name'] + ']\x20Task\x20' + (_0x22bf05 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0xb1fd40[_0x22bf05]['Size']);
                try {
                    const _0x45509d = await _0x43493a['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0xb1fd40[_0x22bf05]['Size'] + '\x22]\x20>\x20a', _0x4f81d4 => {
                        return _0x4f81d4['map'](_0x474fcf => _0x474fcf['href']);
                    });
                    await _0x43493a['goto']('' + _0x45509d[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x2a8adb) {
                    console['log'](chalk['red'](getTime() + '\x20[' + _0x2496e7['name'] + ']\x20Task\x20' + (_0x22bf05 + 0x1) + '\x20:\x20' + _0x2a8adb + '\x20Size\x20not\x20found')), _0x4c1bce[0x0]['title'] = 'Failed\x20entry', _0x4c1bce[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x5d5481);
                    continue;
                }
                try {
                    await _0x43493a['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0xb1fd40[_0x22bf05]['Size'] + '\x22]'), await _0x43493a['waitForTimeout'](0x320), await _0x43493a['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0xb1fd40[_0x22bf05]['Size'] + '\x22]');
                } catch (_0x21e691) {
                    console['log'](chalk['red'](getTime() + '\x20[' + _0x2496e7['name'] + ']\x20Task\x20' + (_0x22bf05 + 0x1) + '\x20:\x20' + _0x21e691 + '\x20Size\x20not\x20found')), _0x4c1bce[0x0]['title'] = 'Failed\x20entry', _0x4c1bce[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x5d5481);
                    continue;
                }
            }
            await _0x43493a['waitForTimeout'](0x258), await _0x43493a['type']('#raffle-instagram', '' + _0xb1fd40[_0x22bf05]['Follower'], { 'delay': 0x64 }), await _0x43493a['waitForTimeout'](0x384), await _0x43493a['click']('#raffle-terms'), await _0x43493a['waitForTimeout'](0x384), await _0x43493a['evaluate'](() => {
                const _0x37d1c4 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x37d1c4['click']();
            }), await _0x43493a['waitForTimeout'](0xbb8), await _0x43493a['waitForSelector']('#checkout_email'), await delay(0x3e8), console['log'](getTime() + '\x20[' + _0x2496e7['name'] + ']\x20Task\x20' + (_0x22bf05 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x3c479b == 'sec' ? await _0x43493a['type']('#checkout_email', '' + _0xb1fd40[_0x22bf05]['FirstName'] + _0xb1fd40[_0x22bf05]['LastName'] + settings['catchall'], 0x32) : await _0x43493a['type']('#checkout_email', '' + _0xb1fd40[_0x22bf05]['Email'], 0x32);
            await delay(0x320), await _0x43493a['select']('#checkout_shipping_address_country', '' + _0xb1fd40[_0x22bf05]['Country']), await _0x43493a['waitForTimeout'](0x258), await _0x43493a['type']('#checkout_shipping_address_first_name', '' + _0xb1fd40[_0x22bf05]['FirstName']), await _0x43493a['waitForTimeout'](0x320), await _0x43493a['type']('#checkout_shipping_address_last_name', '' + _0xb1fd40[_0x22bf05]['LastName']), await _0x43493a['waitForTimeout'](0x2bc), await _0x43493a['type']('#checkout_shipping_address_address1', _0xb1fd40[_0x22bf05]['Address1'] + '\x20' + _0xb1fd40[_0x22bf05]['HouseNumber']), await _0x43493a['waitForTimeout'](0x2bc), await _0x43493a['type']('#checkout_shipping_address_address2', '' + _0xb1fd40[_0x22bf05]['Address2']), await _0x43493a['waitForTimeout'](0x2bc);
            _0xb1fd40[_0x22bf05]['Postcode'] == undefined ? await _0x43493a['type']('#checkout_shipping_address_zip', '' + _0xb1fd40[_0x22bf05]['Zip']) : await _0x43493a['type']('#checkout_shipping_address_zip', '' + _0xb1fd40[_0x22bf05]['Postcode']);
            await _0x43493a['waitForTimeout'](0x2bc), await _0x43493a['type']('#checkout_shipping_address_city', '' + _0xb1fd40[_0x22bf05]['City']), await _0x43493a['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + _0x2496e7['name'] + ']\x20Task\x20' + (_0x22bf05 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x43493a['evaluate'](() => {
                const _0x2fb71a = document['querySelector']('#continue_button');
                for (var _0x567900 = 0x0; _0x567900 < 0x5; _0x567900++) {
                    if (_0x2fb71a) {
                        _0x2fb71a['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x43493a['waitForTimeout'](0x1194), await _0x43493a['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), _0x43493a['evaluate'](() => {
                const _0x4f5eb0 = document['querySelector']('#continue_button');
                for (var _0x38cc84 = 0x0; _0x38cc84 < 0x5; _0x38cc84++) {
                    if (_0x4f5eb0) {
                        _0x4f5eb0['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x43493a['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + _0x2496e7['name'] + ']\x20Task\x20' + (_0x22bf05 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x43493a['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x43493a['evaluate'](() => {
                const _0x5ba467 = document['querySelector']('#continue_button');
                for (var _0x206687 = 0x0; _0x206687 < 0x5; _0x206687++) {
                    if (_0x5ba467) {
                        _0x5ba467['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x43493a['waitForTimeout'](0x1194), await _0x43493a['waitForSelector']('#continue_button'), _0x43493a['evaluate'](() => {
                const _0x418c11 = document['querySelector']('#continue_button');
                for (var _0x4a0e41 = 0x0; _0x4a0e41 < 0x5; _0x4a0e41++) {
                    if (_0x418c11) {
                        _0x418c11['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            });
            try {
                await _0x43493a['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x471bea) {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x2496e7['name'] + ']\x20Task\x20' + (_0x22bf05 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x471bea));
            }
            console['log'](chalk['green'](getTime() + '\x20[' + _0x2496e7['name'] + ']\x20Task\x20' + (_0x22bf05 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x5d5481);
        } catch (_0x2fba31) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x2496e7['name'] + ']\x20Task\x20' + (_0x22bf05 + 0x1) + '\x20:\x20' + _0x2fba31)), _0x4c1bce[0x0]['title'] = 'Failed\x20entry', _0x4c1bce[0x0]['description'] = '' + _0x2fba31, await sendWebhook(errorWH, _0x5d5481);
        } finally {
            _0x4a042c && _0x4a042c['close']();
            if (_0x22bf05 + 0x1 == _0xb1fd40['length']) {
                console['log'](chalk['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await delay(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
};
async function kickzAcc(_0x44ef94) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3957ce = 0x0; _0x3957ce < kickz['length']; _0x3957ce++) {
        await jig(kickz, _0x3957ce);
        if (kickz[_0x3957ce]['Email'] == '' || kickz[_0x3957ce]['Password'] == '' || kickz[_0x3957ce]['FirstName'] == '' || kickz[_0x3957ce]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x8dccec = getProxy()[_0x3957ce]['split'](':');
        else
            var _0x5bfca0 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x8dccec = getProxy()[_0x5bfca0]['split'](':');
        const _0x1b42c5 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x8dccec[0x0] + ':' + _0x8dccec[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1e341d = await _0x1b42c5['newPage']();
            await _0x1e341d['authenticate']({
                'username': '' + _0x8dccec[0x2],
                'password': '' + _0x8dccec[0x3]
            }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1e341d['setRequestInterception'](!![]), _0x1e341d['on']('request', _0x28ea49 => {
                _0x28ea49['resourceType']() === 'image' || _0x28ea49['resourceType']() === 'font' || _0x28ea49['resourceType']() === 'media' ? _0x28ea49['abort']() : _0x28ea49['continue']();
            }), await _0x1e341d['goto'](_0x44ef94), await delay(0xbb8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x1e341d['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1e341d['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1e341d['waitForSelector']('#button-register'), await _0x1e341d['click']('#button-register'), await _0x1e341d['waitForSelector']('#customer_salutation'), await _0x1e341d['select']('#customer_salutation', 'mr'), await delay(0x7d0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1e341d['waitForSelector']('#customer_firstname'), await _0x1e341d['type']('#customer_firstname', '' + kickz[_0x3957ce]['FirstName']), await delay(0x352), await _0x1e341d['waitForSelector']('#customer_lastname'), await _0x1e341d['type']('#customer_lastname', '' + kickz[_0x3957ce]['LastName']), await delay(0x352), await _0x1e341d['type']('#email-input', '' + kickz[_0x3957ce]['Email']), await delay(0x352), await _0x1e341d['type']('#email-confirm-input', '' + kickz[_0x3957ce]['Email']), await delay(0x352), await _0x1e341d['type']('#register-password', '' + kickz[_0x3957ce]['Password']), await delay(0x352), await _0x1e341d['type']('#password-confirm', '' + kickz[_0x3957ce]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x1e341d['click']('#consent'), await delay(0x1f4);
            const _0x48f7fe = await _0x1e341d['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x48f7fe) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x1e341d['click']('#buttonRegister'), await _0x1e341d['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20Account\x20' + kickz[_0x3957ce]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
            async function _0x59b8ce() {
                console['log'](chalk['yellow'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x228149 = await prompt['get']('Code');
                return _0x228149['Code'];
            }
            ;
            code = await _0x59b8ce(), delay(0x320), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20Verifying..'), await _0x1e341d['type']('#verificationCode', code), await delay(0x1f4), await _0x1e341d['click']('#buttonVerify'), await delay(0x190), await _0x1e341d['click']('#buttonVerify'), await delay(0x3e8);
            try {
                await _0x1e341d['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20Account\x20' + kickz[_0x3957ce]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + kickz[_0x3957ce]['Email'] + ',' + kickz[_0x3957ce]['Password'] + ','), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20Account\x20' + kickz[_0x3957ce]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x3e7efc) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3957ce + 0x1) + '\x20:\x20' + _0x3e7efc));
        } finally {
            _0x1b42c5 && _0x1b42c5['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
}
async function bwAcc(_0x5a427a, _0x444f6a) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x483946 = 0x0; _0x483946 < bouncewear['length']; _0x483946++) {
        await jig(bouncewear, _0x483946);
        if (bouncewear[_0x483946]['Email'] == '' || bouncewear[_0x483946]['Password'] == '' || bouncewear[_0x483946]['FirstName'] == '' || bouncewear[_0x483946]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x483946 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x702523 = getProxy()[_0x483946]['split'](':');
        else
            var _0x494e57 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x702523 = getProxy()[_0x494e57]['split'](':');
        const _0x2e9085 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x702523[0x0] + ':' + _0x702523[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x32ac86 = await _0x2e9085['newPage']();
            await _0x32ac86['authenticate']({
                'username': '' + _0x702523[0x2],
                'password': '' + _0x702523[0x3]
            }), console['log'](getTime() + '\x20[' + _0x444f6a['name'] + ']\x20Task\x20' + (_0x483946 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x32ac86['setRequestInterception'](!![]), _0x32ac86['on']('request', _0x3757e3 => {
                _0x3757e3['resourceType']() === 'image' || _0x3757e3['resourceType']() === 'font' || _0x3757e3['resourceType']() === 'media' ? _0x3757e3['abort']() : _0x3757e3['continue']();
            }), await _0x32ac86['goto'](_0x5a427a), await delay(0xbb8), await _0x32ac86['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x444f6a['name'] + ']\x20Task\x20' + (_0x483946 + 0x1) + '\x20:\x20Filling\x20information'), await _0x32ac86['type']('#RegisterForm-FirstName', '' + bouncewear[_0x483946]['FirstName']), await delay(0x226), await _0x32ac86['type']('#RegisterForm-LastName', '' + bouncewear[_0x483946]['LastName']), await delay(0x226), await _0x32ac86['type']('#RegisterForm-email', '' + bouncewear[_0x483946]['Email']), await delay(0x226), await _0x32ac86['type']('#RegisterForm-password', '' + bouncewear[_0x483946]['Password']), await delay(0x226), await _0x32ac86['click']('#marketing'), console['log'](getTime() + '\x20[' + _0x444f6a['name'] + ']\x20Task\x20' + (_0x483946 + 0x1) + '\x20:\x20Submitting..'), await _0x32ac86['$eval']('#RegisterForm', _0x462f9d => _0x462f9d['submit']()), await delay(0x1f40), console['log'](getTime() + '\x20[' + _0x444f6a['name'] + ']\x20Task\x20' + (_0x483946 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x32ac86['solveRecaptchas'](), await _0x32ac86['click']('.shopify-challenge__button.btn');
            async function _0x45bd49() {
                for (var _0x92edc = 0x0; _0x92edc < 0x4; _0x92edc++) {
                    try {
                        console['log']('try'), await _0x32ac86['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](getTime() + '\x20[' + _0x444f6a['name'] + ']\x20Task\x20' + (_0x483946 + 0x1) + '\x20:\x20' + chalk['red']('Catpcha\x20failed,\x20retrying..')), await _0x32ac86['solveRecaptchas'](), await _0x32ac86['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x45bd49(), console['log'](getTime() + '\x20[' + _0x444f6a['name'] + ']\x20Task\x20' + (_0x483946 + 0x1) + '\x20:\x20Captcha\x20Solved'), await delay(0x1f4);
            try {
                await _0x32ac86['waitForSelector']('.featured-title'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x444f6a['name'] + ']\x20Task\x20' + (_0x483946 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x483946]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x483946]['Email'] + ',' + bouncewear[_0x483946]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x444f6a['name'] + ']\x20Task\x20' + (_0x483946 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x483946]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x51f22f) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x483946 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x51f22f));
            }
        } catch (_0x286b75) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x483946 + 0x1) + '\x20:\x20' + _0x286b75));
        } finally {
            _0x2e9085 && _0x2e9085['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function pattaAcc(_0x10f6a5, _0xba249b, _0x46e0fa) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x484d55 = 0x0; _0x484d55 < _0x46e0fa['length']; _0x484d55++) {
        await jig(_0x46e0fa, _0x484d55);
        if (_0x46e0fa[_0x484d55]['Email'] == '' || _0x46e0fa[_0x484d55]['Password'] == '' || _0x46e0fa[_0x484d55]['FirstName'] == '' || _0x46e0fa[_0x484d55]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x484d55 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0xf7f7c9 = getProxy()[_0x484d55]['split'](':');
        else
            var _0x5ca1b3 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0xf7f7c9 = getProxy()[_0x5ca1b3]['split'](':');
        const _0x4971b8 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0xf7f7c9[0x0] + ':' + _0xf7f7c9[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1fcfc3 = await _0x4971b8['newPage']();
            await _0x1fcfc3['authenticate']({
                'username': '' + _0xf7f7c9[0x2],
                'password': '' + _0xf7f7c9[0x3]
            }), console['log'](getTime() + '\x20[' + _0xba249b['name'] + ']\x20Task\x20' + (_0x484d55 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1fcfc3['setRequestInterception'](!![]), _0x1fcfc3['on']('request', _0x16830b => {
                _0x16830b['resourceType']() === 'image' || _0x16830b['resourceType']() === 'font' || _0x16830b['resourceType']() === 'media' ? _0x16830b['abort']() : _0x16830b['continue']();
            }), await _0x1fcfc3['goto'](_0x10f6a5), await delay(0xbb8), await _0x1fcfc3['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0xba249b['name'] + ']\x20Task\x20' + (_0x484d55 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1fcfc3['type']('#RegisterForm-FirstName', '' + _0x46e0fa[_0x484d55]['FirstName']), await delay(0x226), await _0x1fcfc3['type']('#RegisterForm-LastName', '' + _0x46e0fa[_0x484d55]['LastName']), await delay(0x226), await _0x1fcfc3['type']('#RegisterForm-email', '' + _0x46e0fa[_0x484d55]['Email']), await delay(0x226), await _0x1fcfc3['type']('#RegisterForm-password', '' + _0x46e0fa[_0x484d55]['Password']), await delay(0x226), console['log'](getTime() + '\x20[' + _0xba249b['name'] + ']\x20Task\x20' + (_0x484d55 + 0x1) + '\x20:\x20Submitting..'), await _0x1fcfc3['$eval']('#RegisterForm', _0x28efe7 => _0x28efe7['submit']()), await delay(0x1f40);
            try {
                await _0x1fcfc3['waitForSelector']('.home-page-grid__collection'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0xba249b['name'] + ']\x20Task\x20' + (_0x484d55 + 0x1) + '\x20:\x20Account\x20' + _0x46e0fa[_0x484d55]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x46e0fa[_0x484d55]['Email'] + ',' + _0x46e0fa[_0x484d55]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0xba249b['name'] + ']\x20Task\x20' + (_0x484d55 + 0x1) + '\x20:\x20Account\x20' + _0x46e0fa[_0x484d55]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
            } catch (_0x3b1222) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x484d55 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3b1222));
            }
        } catch (_0xb74204) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x484d55 + 0x1) + '\x20:\x20' + _0xb74204));
        } finally {
            _0x4971b8 && _0x4971b8['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function pattaFunction(_0x25c02b, _0x339808, _0x1dbb80) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x584124 = 0x0; _0x584124 < _0x1dbb80['length']; _0x584124++) {
        await jig(_0x1dbb80, _0x584124);
        if (_0x1dbb80[_0x584124]['Email'] == '' || _0x1dbb80[_0x584124]['Password'] == '' || _0x1dbb80[_0x584124]['FirstName'] == '' || _0x1dbb80[_0x584124]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x584124 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x3ae8df = getProxy()[_0x584124]['split'](':');
        else
            var _0xd3a700 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x3ae8df = getProxy()[_0xd3a700]['split'](':');
        const _0x1e7831 = await puppeteer['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3ae8df[0x0] + ':' + _0x3ae8df[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3d9661 = await _0x1e7831['newPage']();
            await _0x3d9661['authenticate']({
                'username': '' + _0x3ae8df[0x2],
                'password': '' + _0x3ae8df[0x3]
            }), console['log'](getTime() + '\x20[' + _0x339808['name'] + ']\x20Task\x20' + (_0x584124 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3d9661['setRequestInterception'](!![]), _0x3d9661['on']('request', _0x9271d7 => {
                _0x9271d7['resourceType']() === 'image' || _0x9271d7['resourceType']() === 'font' || _0x9271d7['resourceType']() === 'media' ? _0x9271d7['abort']() : _0x9271d7['continue']();
            }), await _0x3d9661['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x3d9661['waitForSelector']('#CustomerEmail'), console['log'](getTime() + '\x20[' + _0x339808['name'] + ']\x20Task\x20' + (_0x584124 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3d9661['type']('#CustomerEmail', '' + _0x1dbb80[_0x584124]['Email']), await delay(0x12c), await _0x3d9661['type']('#CustomerPassword', '' + _0x1dbb80[_0x584124]['Password']), await delay(0x226), await _0x3d9661['$eval']('#customer_login', _0x7872c3 => _0x7872c3['submit']());
            try {
                await _0x3d9661['waitForSelector']('#orders'), await delay(0x4b0);
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x339808['name'] + ']\x20Task\x20' + (_0x584124 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x3d9661['goto']('' + _0x1dbb80[_0x584124]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x339808['name'] + ']\x20Task\x20' + (_0x584124 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x3d9661['waitForSelector']('#email');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x339808['name'] + ']\x20Task\x20' + (_0x584124 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x3d9661['type']('#email', '' + _0x1dbb80[_0x584124]['Email']), await delay(0x384), await _0x3d9661['type']('#first_name', '' + _0x1dbb80[_0x584124]['FirstName']), await delay(0x514), await _0x3d9661['type']('#last_name', '' + _0x1dbb80[_0x584124]['LastName']), await delay(0x514), await _0x3d9661['type']('#street_address', _0x1dbb80[_0x584124]['Address1'] + '\x20' + _0x1dbb80[_0x584124]['HouseNumber'] + '\x20' + _0x1dbb80[_0x584124]['Address2']), await delay(0x2bc), await _0x3d9661['type']('#zip_code', '' + _0x1dbb80[_0x584124]['Postcode']), await delay(0x320), await _0x3d9661['type']('#city', '' + _0x1dbb80[_0x584124]['City']), await delay(0x320), await _0x3d9661['type']('#bday', '' + _0x1dbb80[_0x584124]['Bday']), await delay(0x320), await _0x3d9661['type']('#instagram', '' + _0x1dbb80[_0x584124]['Follower']), await delay(0x352);
            if (_0x1dbb80[_0x584124]['Size'] == 'RANDOM') {
                const _0x404829 = await _0x3d9661['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0xb65440 => {
                    return _0xb65440['map'](_0x1ef892 => _0x1ef892['textContent']);
                });
                var _0x44c090 = Math['round'](Math['random']() * (_0x404829['length'] - 0x1));
                console['log'](getTime() + '\x20[' + _0x339808['name'] + ']\x20Task\x20' + (_0x584124 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x404829[_0x44c090]), await _0x3d9661['click']('label[data-eu-size=\x22' + _0x404829[_0x44c090] + '\x22]');
            } else {
                console['log'](getTime() + '\x20[' + _0x339808['name'] + ']\x20Task\x20' + (_0x584124 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x1dbb80[_0x584124]['Size']);
                try {
                    await _0x3d9661['click']('label[data-eu-size=\x22' + _0x1dbb80[_0x584124]['Size'] + '\x22]');
                } catch {
                    await _0x3d9661['click']('label[data-eu-size=\x22' + _0x1dbb80[_0x584124]['Size'] + '.0\x22]');
                }
            }
            await delay(0xbb8), await _0x3d9661['$$eval']('.raffle__checkbox-label', _0x1890b6 => _0x1890b6['forEach'](_0xb151bd => _0xb151bd['click']())), await delay(0x7d0), console['log'](getTime() + '\x20[' + _0x339808['name'] + ']\x20Task\x20' + (_0x584124 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x3d9661['click']('#raffle__form-submit'), await delay(0x1388);
            try {
                await _0x3d9661['waitForSelector']('#raffle__confirmation-message-container'), console['log'](chalk['green'](getTime() + '\x20[' + _0x339808['name'] + ']\x20Task\x20' + (_0x584124 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x238782) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x584124 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x238782));
            }
        } catch (_0x217906) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x584124 + 0x1) + '\x20:\x20' + _0x217906));
        } finally {
            _0x1e7831 && _0x1e7831['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function jdFunction(_0x1ae9a4, _0x1bbd92) {
    var _0x58afda = ![], _0x384c1a = ![];
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1fb876 = 0x0; _0x1fb876 < _0x1bbd92['length']; _0x1fb876++) {
        var _0x1adc28 = [{
                'type': 'rich',
                'title': 'Succesfull\x20Entry',
                'description': '' + _0x1ae9a4['name'],
                'color': 0xc0d6d6,
                'url': '',
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + username
                    },
                    {
                        'name': 'Product',
                        'value': '' + _0x1bbd92[_0x1fb876]['Url']
                    },
                    {
                        'name': 'Size',
                        'value': '' + _0x1bbd92[_0x1fb876]['Size']
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
        const _0x3f6a2e = { 'embeds': _0x1adc28 };
        await jig(_0x1bbd92, _0x1fb876);
        if (_0x1bbd92[_0x1fb876]['Email'] == '' || _0x1bbd92[_0x1fb876]['Url'] == '' || _0x1bbd92[_0x1fb876]['FirstName'] == '' || _0x1bbd92[_0x1fb876]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1fb876 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x101110 = getProxy()[_0x1fb876]['split'](':');
        else
            var _0x371bef = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x101110 = getProxy()[_0x371bef]['split'](':');
        const _0xe7784 = await puppeteer['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x101110[0x0] + ':' + _0x101110[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x696349 = await _0xe7784['newPage']();
            await _0x696349['authenticate']({
                'username': '' + _0x101110[0x2],
                'password': '' + _0x101110[0x3]
            }), console['log'](getTime() + '\x20[' + _0x1ae9a4['name'] + ']\x20Task\x20' + (_0x1fb876 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x696349['setRequestInterception'](!![]), _0x696349['on']('request', _0x3a8b42 => {
                _0x3a8b42['resourceType']() === 'image' || _0x3a8b42['resourceType']() === 'font' || _0x3a8b42['resourceType']() === 'media' ? _0x3a8b42['abort']() : _0x3a8b42['continue']();
            }), await _0x696349['goto']('' + _0x1bbd92[_0x1fb876]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](getTime() + '\x20[' + _0x1ae9a4['name'] + ']\x20Task\x20' + (_0x1fb876 + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x696349['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x696349['type']('#comp_firstname', '' + _0x1bbd92[_0x1fb876]['FirstName']), await _0x696349['waitForSelector']('#comp_lastname'), await _0x696349['type']('#comp_lastname', '' + _0x1bbd92[_0x1fb876]['LastName']), await _0x696349['waitForSelector']('#comp_email'), await _0x696349['type']('#comp_email', '' + _0x1bbd92[_0x1fb876]['Email']), await _0x696349['waitForSelector']('#comp_paypalemail'), await _0x696349['type']('#comp_paypalemail', '' + _0x1bbd92[_0x1fb876]['Email']), await _0x696349['waitForSelector']('#comp_mobile_end'), await _0x696349['type']('#comp_mobile_end', '' + _0x1bbd92[_0x1fb876]['Phone']), await _0x696349['waitForSelector']('#comp_dob'), await _0x696349['type']('#comp_dob', '08/09/1992'), console['log'](getTime() + '\x20[' + _0x1ae9a4['name'] + ']\x20Task\x20' + (_0x1fb876 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x1bbd92[_0x1fb876]['Size'] == 'RANDOM') {
                const _0x36e012 = await _0x696349['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5c63c8 => {
                    return _0x5c63c8['map'](_0x3a87e3 => _0x3a87e3['value']);
                });
                var _0x543053 = Math['round'](Math['random']() * (_0x36e012['length'] - 0x2));
                await _0x696349['select']('#shoesize', _0x36e012[_0x543053 + 0x1]), await delay(0x3e8);
            } else {
                const _0xfc480b = await _0x696349['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x381a59 => {
                        return _0x381a59['map'](_0x4d94bf => _0x4d94bf['innerText']);
                    }), _0x37d425 = await _0x696349['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x716d71 => {
                        return _0x716d71['map'](_0x3332ec => _0x3332ec['value']);
                    });
                var _0x1d7975 = _0x1bbd92[_0x1fb876]['Size'];
                for (var _0x5497d9 = 0x1; _0x5497d9 < _0x37d425['length']; _0x5497d9++) {
                    var _0xb08f72 = _0xfc480b[_0x5497d9]['split']('\x20')[0x0];
                    if (_0xb08f72 == _0x1d7975) {
                        await _0x696349['select']('#shoesize', _0x37d425[_0x5497d9]);
                        break;
                    } else {
                        if (_0x5497d9 + 0x1 == _0x37d425['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x696349['waitForSelector']('#comp_address1'), await _0x696349['type']('#comp_address1', _0x1bbd92[_0x1fb876]['Address1'] + '\x20' + _0x1bbd92[_0x1fb876]['HouseNumber']), await _0x696349['waitForSelector']('#comp_address2'), await _0x696349['type']('#comp_address2', '' + _0x1bbd92[_0x1fb876]['Address2']), await _0x696349['waitForSelector']('#comp_address2'), await _0x696349['type']('#comp_address3', '' + _0x1bbd92[_0x1fb876]['City']), await _0x696349['waitForSelector']('#comp_postcode'), await _0x696349['type']('#comp_postcode', '' + _0x1bbd92[_0x1fb876]['Zip']), console['log'](getTime() + '\x20[' + _0x1ae9a4['name'] + ']\x20Task\x20' + (_0x1fb876 + 0x1) + '\x20:\x20Sending\x20Entry'), await delay(0x4b0), await _0x696349['click']('label#emailhold'), await delay(0x5dc), await _0x696349['click']('#preauth_tandc_email\x20>\x20label'), await delay(0x5dc), await _0x696349['click']('#submit'), await _0x696349['waitForSelector']('#paymentWrap'), console['log'](getTime() + '\x20[' + _0x1ae9a4['name'] + ']\x20Task\x20' + (_0x1fb876 + 0x1) + '\x20:\x20' + chalk['blue']('Awaiting\x20Paypal\x20Payment')), _0xe7784['on']('targetcreated', async _0x5a6b15 => {
                if (_0x5a6b15['type']() === 'page') {
                    const _0x1b18d7 = await _0x5a6b15['page']();
                    async function _0x434269() {
                        try {
                            await _0x696349['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x384c1a = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0xf0fa8d() {
                        try {
                            await _0x696349['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x58afda = !![];
                            return;
                        } catch {
                        }
                    }
                    _0xf0fa8d(), _0x434269(), await delay(0x493e0);
                }
            });
            async function _0x3606a0() {
                for (let _0x55a171 = 0x0; _0x55a171 < 0x12c; _0x55a171++) {
                    if (_0x58afda == !![]) {
                        console['log'](chalk['green'](getTime() + '\x20[' + _0x1ae9a4['name'] + ']\x20Task\x20' + (_0x1fb876 + 0x1) + '\x20:\x20Raffle\x20Entered!')), sendWebhook(succesWH, _0x3f6a2e);
                        return;
                    } else {
                        if (_0x384c1a)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await delay(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await delay(0xbb8), await _0x696349['click']('.zoid-outlet'), await delay(0x7d0), await _0x3606a0();
        } catch (_0xa791c4) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x1ae9a4['name'] + ']\x20Task\x20' + (_0x1fb876 + 0x1) + '\x20:\x20' + _0xa791c4)), _0x1adc28[0x0]['title'] = 'Failed\x20entry', _0x1adc28[0x0]['description'] = _0x1ae9a4['name'] + ':\x20' + _0xa791c4, await sendWebhook(errorWH, _0x3f6a2e);
        } finally {
            _0xe7784 && _0xe7784['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function oqiumFunction(_0x2d654c, _0x4c05d7, _0x40ab40, _0x484cab) {
    await jig(_0x484cab, _0x2d654c);
    var _0x36422f = [{
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
                    'value': '' + _0x484cab[_0x2d654c]['Size']
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
    const _0x459ce3 = { 'embeds': _0x36422f };
    if (settings['useRandomProxy'] = ![])
        var _0x116821 = getProxy()[_0x2d654c]['split'](':');
    else
        var _0x4b5799 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x116821 = getProxy()[_0x4b5799]['split'](':');
    var _0x58bcbb = _0x40ab40['data'];
    _0x4c05d7 == 'exp' ? _0x58bcbb['data']['attributes']['email'] = '' + _0x484cab[_0x2d654c]['FirstName'] + _0x484cab[_0x2d654c]['LastName'] + settings['catchall'] : _0x58bcbb['data']['attributes']['email'] = '' + _0x484cab[_0x2d654c]['Email'];
    _0x58bcbb['data']['attributes']['properties']['$first_name'] = '' + _0x484cab[_0x2d654c]['FirstName'], _0x58bcbb['data']['attributes']['properties']['$last_name'] = '' + _0x484cab[_0x2d654c]['LastName'], _0x58bcbb['data']['attributes']['properties']['$address1'] = _0x484cab[_0x2d654c]['Address1'] + '\x20' + _0x484cab[_0x2d654c]['Address2'], _0x58bcbb['data']['attributes']['properties']['$zip'] = '' + _0x484cab[_0x2d654c]['Zip'], _0x58bcbb['data']['attributes']['properties']['$city'] = '' + _0x484cab[_0x2d654c]['City'], _0x58bcbb['data']['attributes']['properties']['$country'] = '' + _0x484cab[_0x2d654c]['Country'], _0x58bcbb['data']['attributes']['properties']['Size'] = '' + _0x484cab[_0x2d654c]['Size'], _0x58bcbb['data']['attributes']['properties']['$phone_number'] = '' + _0x484cab[_0x2d654c]['Phone'], _0x58bcbb['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x484cab[_0x2d654c]['Follower'];
    var _0x53099b = {
        'jar': j,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x40ab40['url'],
        'headers': _0x40ab40['headers'],
        'body': JSON['stringify'](_0x58bcbb),
        'proxy': 'http://' + _0x116821[0x2] + ':' + _0x116821[0x3] + '@' + _0x116821[0x0] + ':' + _0x116821[0x1]
    };
    return _0x4c05d7 === 'ver' && (_0x53099b['method'] = 'GET'), new Promise(function (_0x1e7122, _0x1ffaae) {
        callback = async (_0x4d046c, _0x3070b9, _0x2d37cc) => {
            !_0x4d046c && _0x3070b9['statusCode'] == 0xca || !_0x4d046c && _0x3070b9['statusCode'] == 0xc8 ? (await sendWebhook(succesWH, _0x459ce3), _0x1e7122(console['log'](chalk['green'](getTime() + '\x20[' + _0x40ab40['name'] + ']\x20Task\x20' + (_0x2d654c + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x36422f[0x0]['title'] = 'Failed\x20entry', _0x36422f[0x0]['description'] = '' + _0x4d046c, await sendWebhook(errorWH, _0x459ce3), _0x1ffaae(console['log'](getTime() + '\x20[' + _0x40ab40['name'] + ']\x20Task\x20' + (_0x2d654c + 0x1) + ':\x20' + _0x4d046c)));
        };
        try {
            console['log'](getTime() + '\x20[' + _0x40ab40['name'] + ']\x20Task\x20' + (_0x2d654c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x58bcbb['data']['attributes']['email']), request(_0x53099b, callback);
        } catch (_0x1358e2) {
            console['log'](getTime() + '\x20Task\x20' + (_0x2d654c + 0x1) + ':\x20' + _0x1358e2);
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
            async function _0xe0adbf() {
                console['clear'](), console['log']('Welcome\x20to\x20' + chalk['cyan']('JRaffles();') + '\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x2cc983 = 0x0; _0x2cc983 < modules['length']; _0x2cc983++) {
                    if (modules[_0x2cc983]['name'] === 'Reload\x20Settings' || modules[_0x2cc983]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x2cc983 + ')\x20[' + modules[_0x2cc983]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (modules['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (modules['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
                if (modules[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await getFunction(modules[taskModule]['modules']);
                    var _0x3d7694 = modules[taskModule]['modules'][taskFunction];
                    console['clear'](), await afewScraper(), await getAfewProduct();
                    var _0x59149b = await getTaskFile();
                    return await afewFunction(afewProducts[afewProduct], 'nor', _0x3d7694, _0x59149b), _0xe0adbf();
                } else {
                    if (modules[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await getFunction(modules[taskModule]['modules']);
                        var _0x3d7694 = modules[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x3bceca = await getTaskFile();
                            console['log']('Starting\x20' + _0x3bceca['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x2fef69 = 0x0; _0x2fef69 < _0x3bceca['length']; _0x2fef69++) {
                                console['log'](getTime() + '\x20[' + _0x3d7694['name'] + ']\x20Task\x20' + (_0x2fef69 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2fef69, 'nor', _0x3d7694, _0x3bceca), console['log'](getTime() + '\x20[' + _0x3d7694['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
                            }
                            ;
                            return _0xe0adbf();
                        } else {
                            if (taskFunction == 0x1) {
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x2fef69 = 0x0; _0x2fef69 < links['length']; _0x2fef69++) {
                                    _0x3d7694['url'] = links[_0x2fef69], console['log'](getTime() + '\x20[' + _0x3d7694['name'] + ']\x20Task\x20' + (_0x2fef69 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2fef69, 'ver', _0x3d7694), console['log'](getTime() + '\x20[' + _0x3d7694['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                                }
                                ;
                                return _0xe0adbf();
                            }
                        }
                    } else {
                        if (modules[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x36d587 = await getTaskFile();
                            return console['log'](_0x36d587), await footshopModule(_0x36d587), await delay(0x1388), _0xe0adbf();
                        } else {
                            if (modules[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await getFunction(modules[taskModule]['modules']);
                                var _0x3d7694 = modules[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x26a690 = await getTaskFile();
                                    console['log']('Starting\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x2fef69 = 0x0; _0x2fef69 < _0x26a690['length']; _0x2fef69++) {
                                        console['log'](getTime() + '\x20[' + _0x3d7694['name'] + ']\x20Task\x20' + (_0x2fef69 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await oqiumFunction(_0x2fef69, 'exp', _0x3d7694, _0x26a690);
                                        } catch {
                                            console['log'](chalk['red'](getTime() + '\x20[' + _0x3d7694['name'] + ']\x20Task\x20' + (_0x2fef69 + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](getTime() + '\x20[' + _0x3d7694['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                                    }
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x2fef69 = 0x0; _0x2fef69 < links['length']; _0x2fef69++) {
                                            try {
                                                modules[taskModule]['url'] = links[_0x2fef69], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x2fef69 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x2fef69, 'ver'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                                            } catch (_0x216170) {
                                            }
                                            ;
                                        }
                                        ;
                                    }
                                }
                                ;
                            } else {
                                if (modules[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await getFunction(modules[taskModule]['modules']);
                                    var _0x3d7694 = modules[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x3d7694);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (modules[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await getFunction(modules[taskModule]['modules']);
                                        var _0x3d7694 = modules[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x20d72c = await getTaskFile();
                                            return await pattaAcc('https://patta.nl/account/register', _0x3d7694, _0x20d72c), _0xe0adbf();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x20d72c = await getTaskFile();
                                                return await pattaFunction('', _0x3d7694, _0x20d72c), _0xe0adbf();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (modules[taskModule]['name'] == 'JD') {
                                            taskFunction = await getFunction(modules[taskModule]['modules']);
                                            var _0x3d7694 = modules[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x24b2a9 = await getTaskFile();
                                                return await jdFunction(_0x3d7694, _0x24b2a9), _0xe0adbf();
                                            }
                                        } else {
                                            if (modules[taskModule]['name'] == 'Change\x20Settings') {
                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                var _0x11f5fa = 0x0;
                                                for (const _0x3957dd in settings) {
                                                    console['log']('(' + _0x11f5fa + ')\x20' + _0x3957dd + '\x20:\x20' + settings[_0x3957dd]), _0x11f5fa++;
                                                }
                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x11f5fa + ')\x20Return\x20to\x20Main\x20Menu');
                                                var _0x69c943 = await getSetting();
                                                if (_0x69c943 == _0x11f5fa)
                                                    return _0xe0adbf();
                                                console['clear'];
                                                var _0x447ff6 = 0x0;
                                                for (var _0x195928 in settings) {
                                                    if (_0x69c943 == _0x447ff6) {
                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x195928 + '\x20:'), settings[_0x195928] = await getValue(), fs['writeFileSync']('../settings.json', JSON['stringify'](settings));
                                                        break;
                                                    } else
                                                        _0x447ff6++;
                                                }
                                                return console['log']('Settings\x20Saved!'), await delay(0xbb8), _0xe0adbf();
                                            } else {
                                                if (modules[taskModule]['name'] == 'Reload\x20Settings')
                                                    return console['log']('Reloading\x20settings'), await loadSettings(), _0xe0adbf();
                                                else {
                                                    if (taskModule == 0x45) {
                                                        modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                        var _0x1c8b78 = await getPassword();
                                                        _0x1c8b78 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
            await _0xe0adbf();
        } catch (_0x5e56ae) {
            return console['log'](_0x5e56ae), await delay(0x3a98);
        }
}
;
setTitle('JRaffles\x20' + version), loadSettings(), main();