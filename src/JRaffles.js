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
        'tasks/afew.csv'
    ],
    'executeOnComplete': 'JRaffles.exe'
}, updater = new AutoGitUpdate(config);
async function loadSettings() {
    taskFiles = fs['readdirSync']('../tasks'), settings = JSON['parse'](fs['readFileSync']('../settings.json', 'utf-8')), !settings['delay'] && (settings['delay'] = 0x2710, fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['captchaKey'] && (settings['captchaKey'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['useRandomProxy'] && (settings['useRandomProxy'] = ![], fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), !settings['webhook'] && (settings['webhook'] = '', fs['writeFileSync']('../settings.json', JSON['stringify'](settings))), webhook = settings['webhook'], licenseKey = settings['licenseKey'];
}
let testValues, afewProducts = [], afewProduct;
const delay = _0x4dcf17 => new Promise(_0x3be0f7 => setTimeout(_0x3be0f7, _0x4dcf17));
async function getLicense(_0x434e69) {
    return axios['get']('https://api.hyper.co/v4/licenses/' + _0x434e69, { 'headers': { 'Authorization': 'Bearer\x20' + API_KEY } })['then'](_0x221dad => _0x221dad['data'])['catch'](() => null);
}
;
async function checkLicense(_0x3351e1) {
    console['clear'](), console['log']('Checking\x20license\x20' + licenseKey + '...'), await delay(0x5dc);
    const _0x455909 = await getLicense(_0x3351e1);
    username = JSON['stringify'](_0x455909['user']['username']);
    if (!_0x455909)
        return console['log']('License\x20not\x20found');
    if (!_0x455909['user'])
        return console['log']('License\x20not\x20bound');
    return _0x455909['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), auth = !![]) : (console['log']('Could\x20not\x20find\x20license..'), auth = ![]);
}
async function getModule() {
    var _0x5cf53f = await prompt['get']('Module');
    return console['clear'](), _0x5cf53f['Module'];
}
;
async function getSetting() {
    var _0x1027f2 = await prompt['get']('Setting');
    return console['clear'](), _0x1027f2['Setting'];
}
async function getTaskFile() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x1a8506 = 0x0; _0x1a8506 < taskFiles['length']; _0x1a8506++) {
        console['log']('\x20(' + _0x1a8506 + ')\x20' + taskFiles[_0x1a8506]);
    }
    console['log']('');
    var _0x17428b = await prompt['get']('Task'), _0x56ff87 = fs['readFileSync']('../tasks/' + taskFiles[_0x17428b['Task']], 'utf-8');
    return taskCSV = Papa['parse'](_0x56ff87, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x17428b['Task']])), taskCSV;
}
async function getProxyFile() {
    console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x526ced = 0x0; _0x526ced < taskFiles['length']; _0x526ced++) {
        console['log']('\x20(' + _0x526ced + ')\x20' + taskFiles[_0x526ced]);
    }
    console['log']('');
    var _0x5498a0 = await prompt['get']('Task'), _0x5cb750 = fs['readFileSync']('../tasks/' + taskFiles[_0x5498a0['Task']], 'utf-8');
    return taskCSV = Papa['parse'](_0x5cb750, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + chalk['blue'](taskFiles[_0x5498a0['Task']])), taskCSV;
}
async function getValue() {
    var _0x4466fa = await prompt['get']('Value');
    return console['clear'](), _0x4466fa['Value'];
}
async function getFunction(_0xb882e6) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x47b8d2 = 0x0; _0x47b8d2 < _0xb882e6['length']; _0x47b8d2++) {
        console['log']('\x20(' + _0x47b8d2 + ')\x20[' + _0xb882e6[_0x47b8d2]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x364ddb = await prompt['get']('Module');
    return _0x364ddb['Module'];
}
async function getPassword() {
    var _0x4c5ae5 = await prompt['get']('Password');
    return console['clear'](), _0x4c5ae5['Password'];
}
;
async function getLinks() {
    var _0x364f0e = await prompt['get']('Links');
    return _0x364f0e['Links'];
}
;
async function getAfewProduct() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x239baf = 0x0; _0x239baf < afewProducts['length']; _0x239baf++) {
        console['log']('\x20(' + _0x239baf + ')\x20' + afewProducts[_0x239baf]);
    }
    ;
    console['log']();
    let _0x23bbe7 = await prompt['get']('Product');
    console['clear'](), afewProduct = _0x23bbe7['Product'];
    return;
}
;
function getTime() {
    var _0x39817f = new Date(Date['now']())['toLocaleTimeString']();
    return _0x39817f;
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
async function sendWebhook(_0x15f757, _0x16c614) {
    let _0xc328da = { 'headers': { 'content-type': 'application/json' } };
    await axios['post'](_0x15f757, _0x16c614, _0xc328da);
}
;
async function jig(_0x45c9b4, _0x34ffea) {
    var _0x1b9ae5 = _0x45c9b4[_0x34ffea]['Address1']['split'](''), _0x1a8ef4 = _0x45c9b4[_0x34ffea]['Address2']['split'](''), _0x49b029 = _0x45c9b4[_0x34ffea]['Email']['split']('@');
    for (var _0x39ac61 = 0x0; _0x39ac61 < _0x1b9ae5['length']; _0x39ac61++) {
        if (_0x1b9ae5[_0x39ac61] == 'X') {
            var _0x434cfe = Math['round'](Math['random']() * (letters['length'] - 0x1));
            _0x1b9ae5[_0x39ac61] = lettersArray[_0x434cfe];
        }
    }
    ;
    for (var _0x39ac61 = 0x0; _0x39ac61 < _0x1a8ef4['length']; _0x39ac61++) {
        if (_0x1a8ef4[_0x39ac61] == 'X') {
            var _0x434cfe = Math['round'](Math['random']() * (letters['length'] - 0x1));
            _0x1a8ef4[_0x39ac61] = lettersArray[_0x434cfe];
        }
    }
    ;
    _0x45c9b4[_0x34ffea]['FirstName'] == 'RANDOM' && (_0x45c9b4[_0x34ffea]['FirstName'] = random['first']());
    _0x45c9b4[_0x34ffea]['LastName'] == 'RANDOM' && (_0x45c9b4[_0x34ffea]['LastName'] = random['last']());
    _0x49b029[0x0] == 'RANDOM' ? _0x49b029[0x0] = '' + random['first']() + random['last']() + '@' : _0x49b029[0x0] = _0x49b029[0x0] + '@';
    _0x45c9b4[_0x34ffea]['Email'] = _0x49b029['join'](''), _0x45c9b4[_0x34ffea]['Address1'] = _0x1b9ae5['join'](''), _0x45c9b4[_0x34ffea]['Address2'] = _0x1a8ef4['join']('');
    return;
}
;
function getProxy() {
    let _0x37b449 = proxyFile['split']('\x0a'), _0xca167d = _0x37b449['map']((_0x19938a, _0x56d4e4) => {
        sanatizeProxy = _0x19938a['replace']('\x0d', '');
        if (_0x37b449[_0x56d4e4 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0xca167d;
}
;
async function afewScraper() {
    var _0x219b7d = getProxy()[0x1]['split'](':');
    const _0x30b3c8 = await puppeteer['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x219b7d[0x0] + ':' + _0x219b7d[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x4ea431 = await _0x30b3c8['newPage']();
        await _0x4ea431['authenticate']({
            'username': '' + _0x219b7d[0x2],
            'password': '' + _0x219b7d[0x3]
        }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x4ea431['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4ea431['setRequestInterception'](!![]), _0x4ea431['on']('request', _0x8855c3 => {
            _0x8855c3['resourceType']() === 'image' || _0x8855c3['resourceType']() === 'font' || _0x8855c3['resourceType']() === 'media' ? _0x8855c3['abort']() : _0x8855c3['continue']();
        }), await _0x4ea431['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x4ea431['waitForTimeout'](0xbb8), await _0x4ea431['waitForSelector']('.product-card');
        const _0x3642f6 = await _0x4ea431['$$eval']('a.product-card', _0x317d53 => {
            return _0x317d53['map'](_0x4fe9aa => _0x4fe9aa['href']);
        });
        return afewProducts = _0x3642f6;
    } catch (_0x3afe53) {
        console['log']('\x20' + _0x3afe53);
    } finally {
        _0x30b3c8['close'](), console['clear']();
    }
}
;
async function mahaFunction(_0x4c8ca9, _0x3b1468, _0x18cf0f, _0x3b45ec) {
    await jig(_0x3b45ec, _0x4c8ca9);
    var _0x1be40a = [{
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
                'value': '' + oqium[_0x4c8ca9]['Size']
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
    const _0x59b6b1 = { 'embeds': _0x1be40a };
    if (settings['useRandomProxy'] = ![])
        var _0x361b6b = getProxy()[_0x4c8ca9]['split'](':');
    else
        var _0x4577f5 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x361b6b = getProxy()[_0x4577f5]['split'](':');
    var _0x1b3bde = _0x18cf0f['data'];
    _0x3b1468 == 'exp' ? _0x1b3bde['data']['attributes']['email'] = '' + _0x3b45ec[_0x4c8ca9]['FirstName'] + _0x3b45ec[_0x4c8ca9]['LastName'] + settings['catchall'] : _0x1b3bde['data']['attributes']['email'] = '' + _0x3b45ec[_0x4c8ca9]['Email'];
    _0x1b3bde['data']['attributes']['properties']['$first_name'] = '' + _0x3b45ec[_0x4c8ca9]['FirstName'], _0x1b3bde['data']['attributes']['properties']['$last_name'] = '' + _0x3b45ec[_0x4c8ca9]['LastName'], _0x1b3bde['data']['attributes']['properties']['$address1'] = _0x3b45ec[_0x4c8ca9]['Address1'] + '\x20' + _0x3b45ec[_0x4c8ca9]['Address2'], _0x1b3bde['data']['attributes']['properties']['$zip'] = '' + _0x3b45ec[_0x4c8ca9]['Zip'], _0x1b3bde['data']['attributes']['properties']['$city'] = '' + _0x3b45ec[_0x4c8ca9]['City'], _0x1b3bde['data']['attributes']['properties']['$country'] = '' + _0x3b45ec[_0x4c8ca9]['Country'], _0x1b3bde['data']['attributes']['properties']['Size'] = '' + _0x3b45ec[_0x4c8ca9]['Size'], _0x1b3bde['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x3b45ec[_0x4c8ca9]['Follower'];
    var _0x27882b = {
        'jar': j,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x18cf0f['url'],
        'headers': _0x18cf0f['headers'],
        'body': JSON['stringify'](_0x1b3bde),
        'proxy': 'http://' + _0x361b6b[0x2] + ':' + _0x361b6b[0x3] + '@' + _0x361b6b[0x0] + ':' + _0x361b6b[0x1]
    };
    return _0x3b1468 === 'ver' && (_0x27882b['method'] = 'GET'), new Promise(function (_0x5004ef, _0x1c8a3c) {
        callback = async (_0x149202, _0x5858a6, _0x1b33f2) => {
            !_0x149202 && _0x5858a6['statusCode'] == 0xca || !_0x149202 && _0x5858a6['statusCode'] == 0xc8 ? _0x5004ef(console['log'](chalk['green'](getTime() + '\x20[' + _0x18cf0f['name'] + ']\x20Task\x20' + (_0x4c8ca9 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x1be40a[0x0]['title'] = 'Failed\x20entry', _0x1be40a[0x0]['description'] = '' + _0x149202, await sendWebhook(errorWH, _0x59b6b1), _0x1c8a3c(console['log'](getTime() + '\x20[' + _0x18cf0f['name'] + ']\x20Task\x20' + (_0x4c8ca9 + 0x1) + ':\x20' + _0x149202)));
        };
        try {
            _0x3b1468 === 'ver' ? console['log'](getTime() + '\x20[' + _0x18cf0f['name'] + ']\x20Task\x20' + (_0x4c8ca9 + 0x1) + ':\x20Verifying.') : console['log'](getTime() + '\x20[' + _0x18cf0f['name'] + ']\x20Task\x20' + (_0x4c8ca9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1b3bde['data']['attributes']['email']), request(_0x27882b, callback);
        } catch (_0x1f2b7d) {
            console['log'](getTime() + '\x20Task\x20' + (_0x4c8ca9 + 0x1) + ':\x20' + _0x1f2b7d);
        }
    });
}
;
async function footshopModule(_0x2acebc) {
    var _0x8a639;
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x36fae8 = 0x0; _0x36fae8 < _0x2acebc['length']; _0x36fae8++) {
        await jig(_0x2acebc, _0x36fae8);
        if (_0x2acebc[_0x36fae8]['Email'] == '' || _0x2acebc[_0x36fae8]['FirstName'] == '' || _0x2acebc[_0x36fae8]['LastName'] == '' || _0x2acebc[_0x36fae8]['Country'] == '' || _0x2acebc[_0x36fae8]['Size'] == '' || _0x2acebc[_0x36fae8]['Address1'] == '' || _0x2acebc[_0x36fae8]['Zip'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        console['log'](_0x2acebc[_0x36fae8]['Url']);
        async function _0x11eea3() {
            var _0x2bd175 = await axios['get']('https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_')['then'](_0x58147d => _0x58147d['data'])['catch'](() => undefined);
            console['log'](_0x2bd175);
            var _0x5ebcb4 = _0x2bd175['sizeSets']['Men']['sizes'];
            _0x5ebcb4['length'] == 0x0 && (_0x5ebcb4 = _0x2bd175['sizeSets']['Women']['sizes'], _0x5ebcb4['length'] == 0x0 && (_0x5ebcb4 = _0x2bd175['sizeSets']['Unisex']['sizes'], _0x5ebcb4['length'] == 0x0 && (_0x5ebcb4 = _0x2bd175['sizeSets']['Kids']['sizes'])));
            ;
            async function _0x480391() {
                for (var _0x185869 = 0x0; _0x185869 < _0x5ebcb4['length']; _0x185869++) {
                    if (_0x5ebcb4[_0x185869]['eur'] == _0x2acebc[_0x36fae8]['Size'])
                        return _0x8a639 = _0x5ebcb4[_0x185869]['id'], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
                }
                return console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x20Size\x20' + _0x2acebc[_0x36fae8]['Size'] + '\x20not\x20found'), ![];
            }
            ;
            let _0x4a401d = await _0x480391();
            if (_0x4a401d == ![])
                return ![];
        }
        let _0x2d3196 = await _0x11eea3();
        if (_0x2d3196 == ![])
            continue;
        if (_0x2acebc[_0x36fae8]['Email'] == '' || _0x2acebc[_0x36fae8]['FirstName'] == '' || _0x2acebc[_0x36fae8]['LastName'] == '' || _0x2acebc[_0x36fae8]['Country'] == '' || _0x2acebc[_0x36fae8]['Size'] == '' || _0x2acebc[_0x36fae8]['Address1'] == '' || _0x2acebc[_0x36fae8]['Zip'] == '' || _0x2acebc[_0x36fae8]['Phone'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x59df41 = 'https://releases.footshop.com/register/' + _0x2acebc[_0x36fae8]['Url'] + '/Men/' + _0x8a639;
        if (settings['useRandomProxy'] = ![])
            var _0x5822a5 = getProxy()[_0x36fae8]['split'](':');
        else
            var _0x3e0f92 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x5822a5 = getProxy()[_0x3e0f92]['split'](':');
        const _0xe22d86 = await puppeteer['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x5822a5[0x0] + ':' + _0x5822a5[0x1]]
        });
        try {
            const _0x5298ef = await _0xe22d86['newPage']();
            await _0x5298ef['authenticate']({
                'username': '' + _0x5822a5[0x2],
                'password': '' + _0x5822a5[0x3]
            }), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5298ef['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5298ef['setRequestInterception'](!![]), _0x5298ef['on']('request', _0x23fb49 => {
                _0x23fb49['resourceType']() === 'image' || _0x23fb49['resourceType']() === 'font' || _0x23fb49['resourceType']() === 'media' ? _0x23fb49['abort']() : _0x23fb49['continue']();
            }), await _0x5298ef['goto']('' + _0x59df41 + _0x8a639), await _0x5298ef['waitForSelector']('input[name=\x22email\x22]'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5298ef['type']('input[name=\x22email\x22]', '' + _0x2acebc[_0x36fae8]['Email']), await delay(0x640), await _0x5298ef['type']('input[name=\x22phone\x22]', '' + _0x2acebc[_0x36fae8]['Phone']), await delay(0x4b0), await _0x5298ef['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0);
            try {
                await _0x5298ef['type']('input[name=\x22firstName\x22]', '' + _0x2acebc[_0x36fae8]['FirstName']), await delay(0x258);
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
                continue;
            }
            await _0x5298ef['type']('input[name=\x22lastName\x22]', '' + _0x2acebc[_0x36fae8]['LastName']), await delay(0xc8), await _0x5298ef['type']('input[name=\x22instagramUsername\x22]', '' + _0x2acebc[_0x36fae8]['Follower']), await delay(0x4b0), await _0x5298ef['click']('button.btn.continue-button__1RtsS'), await delay(0x3e8), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5298ef['select']('select[name=\x22country\x22]', '' + _0x2acebc[_0x36fae8]['Country']), await delay(0x2bc), await _0x5298ef['type']('input[name=\x22streetName\x22]', '' + _0x2acebc[_0x36fae8]['Address1']), await delay(0x258), await _0x5298ef['type']('input[name=\x22houseNumber\x22]', '' + _0x2acebc[_0x36fae8]['HouseNumber'] + _0x2acebc[_0x36fae8]['Address2']), await delay(0xc8), await _0x5298ef['type']('input[name=\x22postalCode\x22]', '' + _0x2acebc[_0x36fae8]['Zip']), await delay(0x1f4), await _0x5298ef['type']('input[name=\x22city\x22]', '' + _0x2acebc[_0x36fae8]['City']), await delay(0x4b0), await _0x5298ef['click']('input[name=\x22consent::privacy-policy-101\x22]'), await delay(0x4b0), await _0x5298ef['click']('button.btn.continue-button__1RtsS'), await delay(0x4b0), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5298ef['solveRecaptchas'](), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await delay(0xbb8), await _0x5298ef['click']('button.btn.continue-button__1RtsS'), await delay(0x1388), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5298ef['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5298ef['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await delay(0x4b0), await _0x5298ef['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2acebc[_0x36fae8]['CardNumber']), await delay(0x320), await _0x5298ef['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2acebc[_0x36fae8]['ExpiryDate']), await delay(0x4b0), await _0x5298ef['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2acebc[_0x36fae8]['CVV']), await delay(0x226), await _0x5298ef['type']('input[name=\x22holderName\x22]', '' + _0x2acebc[_0x36fae8]['NameOnCard']), await delay(0x226), await _0x5298ef['click']('button.adyen-checkout__button'), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5298ef['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await delay(0xbb8), console['log'](chalk['green'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x4c258b) {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x36fae8 + 0x1) + '\x20:\x20' + _0x4c258b);
        } finally {
            _0xe22d86['close'](), console['log']('Waiting\x20for\x20' + settings['footshopDelay'] + '\x20ms'), await delay(settings['footshopDelay']);
        }
    }
}
afewFunction = async (_0x3215b9, _0x419dee, _0x41ba25, _0x24fb76) => {
    for (var _0x52dee9 = 0x0; _0x52dee9 < _0x24fb76['length']; _0x52dee9++) {
        await jig(_0x24fb76, _0x52dee9);
        var _0x53f29b = [{
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
                    'value': '' + _0x3215b9
                },
                {
                    'name': 'Size',
                    'value': '' + _0x24fb76[_0x52dee9]['Size']
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
        const _0x5c0deb = { 'embeds': _0x53f29b };
        if (_0x24fb76[_0x52dee9]['Email'] == '' || _0x24fb76[_0x52dee9]['FirstName'] == '' || _0x24fb76[_0x52dee9]['LastName'] == '' || _0x24fb76[_0x52dee9]['Country'] == '' || _0x24fb76[_0x52dee9]['Size'] == '' || _0x24fb76[_0x52dee9]['Address1'] == '' || _0x24fb76[_0x52dee9]['Zip'] == '') {
            console['log'](getTime() + '\x20[' + _0x41ba25['name'] + ']\x20Task\x20' + (_0x52dee9 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x283634 = getProxy()[_0x52dee9]['split'](':');
        else
            var _0xb31c2e = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x283634 = getProxy()[_0xb31c2e]['split'](':');
        const _0x1eb134 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x283634[0x0] + ':' + _0x283634[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4a04c0 = await _0x1eb134['newPage']();
            await _0x4a04c0['setDefaultNavigationTimeout'](0x1d4c0), await _0x4a04c0['authenticate']({
                'username': '' + _0x283634[0x2],
                'password': '' + _0x283634[0x3]
            }), console['log'](getTime() + '\x20[' + _0x41ba25['name'] + ']\x20Task\x20' + (_0x52dee9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4a04c0['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4a04c0['setRequestInterception'](!![]), _0x4a04c0['on']('request', _0x467ac6 => {
                _0x467ac6['resourceType']() === 'image' || _0x467ac6['resourceType']() === 'font' || _0x467ac6['resourceType']() === 'media' ? _0x467ac6['abort']() : _0x467ac6['continue']();
            }), await _0x4a04c0['goto'](_0x3215b9), console['log'](getTime() + '\x20[' + _0x41ba25['name'] + ']\x20Task\x20' + (_0x52dee9 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x4a04c0['waitForTimeout'](0xfa0), console['log'](getTime() + '\x20[' + _0x41ba25['name'] + ']\x20Task\x20' + (_0x52dee9 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x4a04c0['waitForTimeout'](0x320);
            if (_0x24fb76[_0x52dee9]['Size'] == 'RANDOM') {
                console['log'](getTime() + '\x20[' + _0x41ba25['name'] + ']\x20Task\x20' + (_0x52dee9 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x51636e = await _0x4a04c0['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x32df7d => {
                    return _0x32df7d['map'](_0x204cf9 => _0x204cf9['href']);
                });
                var _0x2b2da6 = Math['round'](Math['random']() * (_0x51636e['length'] - 0x1));
                await _0x4a04c0['goto']('' + _0x51636e[_0x2b2da6]);
            } else {
                console['log'](getTime() + '\x20[' + _0x41ba25['name'] + ']\x20Task\x20' + (_0x52dee9 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x24fb76[_0x52dee9]['Size']);
                try {
                    const _0x20048d = await _0x4a04c0['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x24fb76[_0x52dee9]['Size'] + '\x22]\x20>\x20a', _0x2a3e78 => {
                        return _0x2a3e78['map'](_0x85a939 => _0x85a939['href']);
                    });
                    await _0x4a04c0['goto']('' + _0x20048d[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x5e232d) {
                    console['log'](chalk['red'](getTime() + '\x20[' + _0x41ba25['name'] + ']\x20Task\x20' + (_0x52dee9 + 0x1) + '\x20:\x20' + _0x5e232d + '\x20Size\x20not\x20found')), _0x53f29b[0x0]['title'] = 'Failed\x20entry', _0x53f29b[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x5c0deb);
                    continue;
                }
                try {
                    await _0x4a04c0['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x24fb76[_0x52dee9]['Size'] + '\x22]'), await _0x4a04c0['waitForTimeout'](0x320), await _0x4a04c0['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x24fb76[_0x52dee9]['Size'] + '\x22]');
                } catch (_0x53bb07) {
                    console['log'](chalk['red'](getTime() + '\x20[' + _0x41ba25['name'] + ']\x20Task\x20' + (_0x52dee9 + 0x1) + '\x20:\x20' + _0x53bb07 + '\x20Size\x20not\x20found')), _0x53f29b[0x0]['title'] = 'Failed\x20entry', _0x53f29b[0x0]['description'] = 'Size\x20not\x20found', await sendWebhook(errorWH, _0x5c0deb);
                    continue;
                }
            }
            await _0x4a04c0['waitForTimeout'](0x258), await _0x4a04c0['type']('#raffle-instagram', '' + _0x24fb76[_0x52dee9]['Follower'], { 'delay': 0x64 }), await _0x4a04c0['waitForTimeout'](0x384), await _0x4a04c0['click']('#raffle-terms'), await _0x4a04c0['waitForTimeout'](0x384), await _0x4a04c0['evaluate'](() => {
                const _0x1cdf46 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x1cdf46['click']();
            }), await _0x4a04c0['waitForTimeout'](0xbb8), await _0x4a04c0['waitForSelector']('#checkout_email'), await delay(0x3e8), console['log'](getTime() + '\x20[' + _0x41ba25['name'] + ']\x20Task\x20' + (_0x52dee9 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x419dee == 'sec' ? await _0x4a04c0['type']('#checkout_email', '' + _0x24fb76[_0x52dee9]['FirstName'] + _0x24fb76[_0x52dee9]['LastName'] + settings['catchall'], 0x32) : await _0x4a04c0['type']('#checkout_email', '' + _0x24fb76[_0x52dee9]['Email'], 0x32);
            await delay(0x320), await _0x4a04c0['select']('#checkout_shipping_address_country', '' + _0x24fb76[_0x52dee9]['Country']), await _0x4a04c0['waitForTimeout'](0x258), await _0x4a04c0['type']('#checkout_shipping_address_first_name', '' + _0x24fb76[_0x52dee9]['FirstName']), await _0x4a04c0['waitForTimeout'](0x320), await _0x4a04c0['type']('#checkout_shipping_address_last_name', '' + _0x24fb76[_0x52dee9]['LastName']), await _0x4a04c0['waitForTimeout'](0x2bc), await _0x4a04c0['type']('#checkout_shipping_address_address1', _0x24fb76[_0x52dee9]['Address1'] + '\x20' + _0x24fb76[_0x52dee9]['HouseNumber']), await _0x4a04c0['waitForTimeout'](0x2bc), await _0x4a04c0['type']('#checkout_shipping_address_address2', '' + _0x24fb76[_0x52dee9]['Address2']), await _0x4a04c0['waitForTimeout'](0x2bc);
            _0x24fb76[_0x52dee9]['Postcode'] == undefined ? await _0x4a04c0['type']('#checkout_shipping_address_zip', '' + _0x24fb76[_0x52dee9]['Zip']) : await _0x4a04c0['type']('#checkout_shipping_address_zip', '' + _0x24fb76[_0x52dee9]['Postcode']);
            await _0x4a04c0['waitForTimeout'](0x2bc), await _0x4a04c0['type']('#checkout_shipping_address_city', '' + _0x24fb76[_0x52dee9]['City']), await _0x4a04c0['waitForTimeout'](0x2bc), console['log'](getTime() + '\x20[' + _0x41ba25['name'] + ']\x20Task\x20' + (_0x52dee9 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x4a04c0['evaluate'](() => {
                const _0x216975 = document['querySelector']('#continue_button');
                for (var _0x485e5c = 0x0; _0x485e5c < 0x5; _0x485e5c++) {
                    if (_0x216975) {
                        _0x216975['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x4a04c0['waitForTimeout'](0x1194), await _0x4a04c0['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), _0x4a04c0['evaluate'](() => {
                const _0x3a7dfc = document['querySelector']('#continue_button');
                for (var _0x128cb8 = 0x0; _0x128cb8 < 0x5; _0x128cb8++) {
                    if (_0x3a7dfc) {
                        _0x3a7dfc['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x4a04c0['waitForTimeout'](0x7d0), console['log'](getTime() + '\x20[' + _0x41ba25['name'] + ']\x20Task\x20' + (_0x52dee9 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4a04c0['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x4a04c0['evaluate'](() => {
                const _0x157186 = document['querySelector']('#continue_button');
                for (var _0x163c31 = 0x0; _0x163c31 < 0x5; _0x163c31++) {
                    if (_0x157186) {
                        _0x157186['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            }), await _0x4a04c0['waitForTimeout'](0x1194), await _0x4a04c0['waitForSelector']('#continue_button'), _0x4a04c0['evaluate'](() => {
                const _0x3ed38c = document['querySelector']('#continue_button');
                for (var _0x6e19e = 0x0; _0x6e19e < 0x5; _0x6e19e++) {
                    if (_0x3ed38c) {
                        _0x3ed38c['click']();
                        break;
                    } else
                        delay(0xfa0);
                }
            });
            try {
                await _0x4a04c0['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x443802) {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x41ba25['name'] + ']\x20Task\x20' + (_0x52dee9 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x443802));
            }
            console['log'](chalk['green'](getTime() + '\x20[' + _0x41ba25['name'] + ']\x20Task\x20' + (_0x52dee9 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await sendWebhook(succesWH, _0x5c0deb);
        } catch (_0x15df22) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x41ba25['name'] + ']\x20Task\x20' + (_0x52dee9 + 0x1) + '\x20:\x20' + _0x15df22)), _0x53f29b[0x0]['title'] = 'Failed\x20entry', _0x53f29b[0x0]['description'] = '' + _0x15df22, await sendWebhook(errorWH, _0x5c0deb);
        } finally {
            _0x1eb134 && _0x1eb134['close']();
            if (_0x52dee9 + 0x1 == _0x24fb76['length']) {
                console['log'](chalk['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await delay(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
};
async function kickzAcc(_0x58adb3, _0x409524, _0x59cafb) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3af8c1 = 0x0; _0x3af8c1 < _0x59cafb['length']; _0x3af8c1++) {
        await jig(_0x59cafb, _0x3af8c1);
        if (_0x59cafb[_0x3af8c1]['Email'] == '' || _0x59cafb[_0x3af8c1]['Password'] == '' || _0x59cafb[_0x3af8c1]['FirstName'] == '' || _0x59cafb[_0x3af8c1]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x253b1e = getProxy()[_0x3af8c1]['split'](':');
        else
            var _0x4fcc94 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x253b1e = getProxy()[_0x4fcc94]['split'](':');
        const _0x31d3f1 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x253b1e[0x0] + ':' + _0x253b1e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x32ba04 = await _0x31d3f1['newPage']();
            await _0x32ba04['authenticate']({
                'username': '' + _0x253b1e[0x2],
                'password': '' + _0x253b1e[0x3]
            }), console['log'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x32ba04['setRequestInterception'](!![]), _0x32ba04['on']('request', _0x4daeb5 => {
                _0x4daeb5['resourceType']() === 'image' || _0x4daeb5['resourceType']() === 'font' || _0x4daeb5['resourceType']() === 'media' ? _0x4daeb5['abort']() : _0x4daeb5['continue']();
            }), await _0x32ba04['goto'](_0x58adb3), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x32ba04['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x32ba04['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x32ba04['waitForSelector']('#button-register'), await delay(0x7d0), await _0x32ba04['evaluate'](() => {
                const _0xdd697d = document['querySelector']('#button-register');
                _0xdd697d['click']();
            }), console['log'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20Setting\x20Credentials'), await delay(0x1388), await _0x32ba04['waitForSelector']('#customer_salutation'), await _0x32ba04['select']('#customer_salutation', 'mr'), await delay(0x7d0), await _0x32ba04['waitForSelector']('#customer_firstname'), await _0x32ba04['type']('#customer_firstname', '' + _0x59cafb[_0x3af8c1]['FirstName']), await delay(0x352), await _0x32ba04['waitForSelector']('#customer_lastname'), await _0x32ba04['type']('#customer_lastname', '' + _0x59cafb[_0x3af8c1]['LastName']), await delay(0x352), await _0x32ba04['type']('#email-input', '' + _0x59cafb[_0x3af8c1]['Email']), await delay(0x352), await _0x32ba04['type']('#email-confirm-input', '' + _0x59cafb[_0x3af8c1]['Email']), await delay(0x352), await _0x32ba04['type']('#register-password', '' + _0x59cafb[_0x3af8c1]['Password']), await delay(0x352), await _0x32ba04['type']('#password-confirm', '' + _0x59cafb[_0x3af8c1]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x32ba04['click']('#consent'), await delay(0x1f4);
            const _0x5a9cf3 = await _0x32ba04['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x5a9cf3) {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x32ba04['click']('#buttonRegister'), await _0x32ba04['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20Account\x20' + _0x59cafb[_0x3af8c1]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
            async function _0x510cdb() {
                console['log'](chalk['yellow'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x29f6bb = await prompt['get']('Code');
                return _0x29f6bb['Code'];
            }
            ;
            code = await _0x510cdb(), delay(0x320), console['log'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20Verifying..'), await _0x32ba04['type']('#verificationCode', code), await delay(0x1f4), await _0x32ba04['click']('#buttonVerify'), await delay(0x190), await _0x32ba04['click']('#buttonVerify'), await delay(0x3e8);
            try {
                await _0x32ba04['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20Account\x20' + _0x59cafb[_0x3af8c1]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x59cafb[_0x3af8c1]['Email'] + ',' + _0x59cafb[_0x3af8c1]['Password'] + ','), console['log'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20Account\x20' + _0x59cafb[_0x3af8c1]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x1a15e6) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x409524['name'] + ']\x20Task\x20' + (_0x3af8c1 + 0x1) + '\x20:\x20' + _0x1a15e6));
        } finally {
            _0x31d3f1 && _0x31d3f1['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
}
async function kickzFunction(_0x1a0487, _0x3e8490) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x531be3 = 0x0; _0x531be3 < _0x3e8490['length']; _0x531be3++) {
        await jig(_0x3e8490, _0x531be3);
        if (_0x3e8490[_0x531be3]['Email'] == '' || _0x3e8490[_0x531be3]['Password'] == '' || _0x3e8490[_0x531be3]['FirstName'] == '' || _0x3e8490[_0x531be3]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0xc0417d = getProxy()[_0x531be3]['split'](':');
        else
            var _0x3a7b3a = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0xc0417d = getProxy()[_0x3a7b3a]['split'](':');
        const _0x353f3f = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0xc0417d[0x0] + ':' + _0xc0417d[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x7f0ee2 = await _0x353f3f['newPage']();
            await _0x7f0ee2['authenticate']({
                'username': '' + _0xc0417d[0x2],
                'password': '' + _0xc0417d[0x3]
            }), console['log'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x7f0ee2['setRequestInterception'](!![]), _0x7f0ee2['on']('request', _0x3681ea => {
                _0x3681ea['resourceType']() === 'image' || _0x3681ea['resourceType']() === 'font' || _0x3681ea['resourceType']() === 'media' ? _0x3681ea['abort']() : _0x3681ea['continue']();
            }), await _0x7f0ee2['goto']('https://www.kickz.com/nl/login/'), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20Logging\x20in'), await _0x7f0ee2['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x7f0ee2['click']('#consent-dialog\x20>\x20section\x20>\x20button'), console['log'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20Setting\x20Credentials'), await delay(0x1388), await _0x7f0ee2['waitForSelector']('#customer_salutation'), await _0x7f0ee2['select']('#customer_salutation', 'mr'), await delay(0x7d0), await _0x7f0ee2['waitForSelector']('#customer_firstname'), await _0x7f0ee2['type']('#customer_firstname', '' + _0x3e8490[_0x531be3]['FirstName']), await delay(0x352), await _0x7f0ee2['waitForSelector']('#customer_lastname'), await _0x7f0ee2['type']('#customer_lastname', '' + _0x3e8490[_0x531be3]['LastName']), await delay(0x352), await _0x7f0ee2['type']('#email-input', '' + _0x3e8490[_0x531be3]['Email']), await delay(0x352), await _0x7f0ee2['type']('#email-confirm-input', '' + _0x3e8490[_0x531be3]['Email']), await delay(0x352), await _0x7f0ee2['type']('#register-password', '' + _0x3e8490[_0x531be3]['Password']), await delay(0x352), await _0x7f0ee2['type']('#password-confirm', '' + _0x3e8490[_0x531be3]['Password']), await delay(0x352), console['log'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x7f0ee2['click']('#consent'), await delay(0x1f4);
            const _0x4cd63c = await _0x7f0ee2['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x4cd63c) {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x7f0ee2['click']('#buttonRegister'), await _0x7f0ee2['waitForSelector']('#verificationCode'), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20Account\x20' + _0x3e8490[_0x531be3]['Email'] + '\x20Generated!')), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await delay(0x4b0);
            async function _0x59cdb4() {
                console['log'](chalk['yellow'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x2a1c68 = await prompt['get']('Code');
                return _0x2a1c68['Code'];
            }
            ;
            code = await _0x59cdb4(), delay(0x320), console['log'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20Verifying..'), await _0x7f0ee2['type']('#verificationCode', code), await delay(0x1f4), await _0x7f0ee2['click']('#buttonVerify'), await delay(0x190), await _0x7f0ee2['click']('#buttonVerify'), await delay(0x3e8);
            try {
                await _0x7f0ee2['waitForSelector']('div.b-user_greeting'), console['log'](chalk['green'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20Account\x20' + _0x3e8490[_0x531be3]['Email'] + '\x20Generated\x20&\x20Verified!')), fs['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x3e8490[_0x531be3]['Email'] + ',' + _0x3e8490[_0x531be3]['Password'] + ','), console['log'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20Account\x20' + _0x3e8490[_0x531be3]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](chalk['red'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x2cb079) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x1a0487['name'] + ']\x20Task\x20' + (_0x531be3 + 0x1) + '\x20:\x20' + _0x2cb079));
        } finally {
            _0x353f3f && _0x353f3f['close'](), console['log']('Waiting\x20for\x20' + settings['AfewDelay'] + '\x20ms'), await delay(settings['AfewDelay']);
        }
    }
}
async function bwAcc(_0x3de613, _0x151709) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3ae6dd = 0x0; _0x3ae6dd < bouncewear['length']; _0x3ae6dd++) {
        await jig(bouncewear, _0x3ae6dd);
        if (bouncewear[_0x3ae6dd]['Email'] == '' || bouncewear[_0x3ae6dd]['Password'] == '' || bouncewear[_0x3ae6dd]['FirstName'] == '' || bouncewear[_0x3ae6dd]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ae6dd + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x546f8c = getProxy()[_0x3ae6dd]['split'](':');
        else
            var _0x3dfba5 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x546f8c = getProxy()[_0x3dfba5]['split'](':');
        const _0x349352 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x546f8c[0x0] + ':' + _0x546f8c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x165020 = await _0x349352['newPage']();
            await _0x165020['authenticate']({
                'username': '' + _0x546f8c[0x2],
                'password': '' + _0x546f8c[0x3]
            }), console['log'](getTime() + '\x20[' + _0x151709['name'] + ']\x20Task\x20' + (_0x3ae6dd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x165020['setRequestInterception'](!![]), _0x165020['on']('request', _0x39b683 => {
                _0x39b683['resourceType']() === 'image' || _0x39b683['resourceType']() === 'font' || _0x39b683['resourceType']() === 'media' ? _0x39b683['abort']() : _0x39b683['continue']();
            }), await _0x165020['goto'](_0x3de613), await delay(0xbb8), await _0x165020['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x151709['name'] + ']\x20Task\x20' + (_0x3ae6dd + 0x1) + '\x20:\x20Filling\x20information'), await _0x165020['type']('#RegisterForm-FirstName', '' + bouncewear[_0x3ae6dd]['FirstName']), await delay(0x226), await _0x165020['type']('#RegisterForm-LastName', '' + bouncewear[_0x3ae6dd]['LastName']), await delay(0x226), await _0x165020['type']('#RegisterForm-email', '' + bouncewear[_0x3ae6dd]['Email']), await delay(0x226), await _0x165020['type']('#RegisterForm-password', '' + bouncewear[_0x3ae6dd]['Password']), await delay(0x226), await _0x165020['click']('#marketing'), console['log'](getTime() + '\x20[' + _0x151709['name'] + ']\x20Task\x20' + (_0x3ae6dd + 0x1) + '\x20:\x20Submitting..'), await _0x165020['$eval']('#RegisterForm', _0x6ac57f => _0x6ac57f['submit']()), await delay(0x1f40), console['log'](getTime() + '\x20[' + _0x151709['name'] + ']\x20Task\x20' + (_0x3ae6dd + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x165020['solveRecaptchas'](), await _0x165020['click']('.shopify-challenge__button.btn');
            async function _0x4d78e2() {
                for (var _0x41049e = 0x0; _0x41049e < 0x4; _0x41049e++) {
                    try {
                        console['log']('try'), await _0x165020['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](getTime() + '\x20[' + _0x151709['name'] + ']\x20Task\x20' + (_0x3ae6dd + 0x1) + '\x20:\x20' + chalk['red']('Catpcha\x20failed,\x20retrying..')), await _0x165020['solveRecaptchas'](), await _0x165020['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x4d78e2(), console['log'](getTime() + '\x20[' + _0x151709['name'] + ']\x20Task\x20' + (_0x3ae6dd + 0x1) + '\x20:\x20Captcha\x20Solved'), await delay(0x1f4);
            try {
                await _0x165020['waitForSelector']('.featured-title'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x151709['name'] + ']\x20Task\x20' + (_0x3ae6dd + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3ae6dd]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x3ae6dd]['Email'] + ',' + bouncewear[_0x3ae6dd]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x151709['name'] + ']\x20Task\x20' + (_0x3ae6dd + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3ae6dd]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x182afd) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ae6dd + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x182afd));
            }
        } catch (_0x5c1178) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3ae6dd + 0x1) + '\x20:\x20' + _0x5c1178));
        } finally {
            _0x349352 && _0x349352['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function pattaAcc(_0x24c5fb, _0x30346a, _0x5e9d8e) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3a0878 = 0x0; _0x3a0878 < _0x5e9d8e['length']; _0x3a0878++) {
        await jig(_0x5e9d8e, _0x3a0878);
        if (_0x5e9d8e[_0x3a0878]['Email'] == '' || _0x5e9d8e[_0x3a0878]['Password'] == '' || _0x5e9d8e[_0x3a0878]['FirstName'] == '' || _0x5e9d8e[_0x3a0878]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a0878 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x48c1b1 = getProxy()[_0x3a0878]['split'](':');
        else
            var _0x48ce62 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x48c1b1 = getProxy()[_0x48ce62]['split'](':');
        const _0x24e1e4 = await puppeteer['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x48c1b1[0x0] + ':' + _0x48c1b1[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2af501 = await _0x24e1e4['newPage']();
            await _0x2af501['authenticate']({
                'username': '' + _0x48c1b1[0x2],
                'password': '' + _0x48c1b1[0x3]
            }), console['log'](getTime() + '\x20[' + _0x30346a['name'] + ']\x20Task\x20' + (_0x3a0878 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2af501['setRequestInterception'](!![]), _0x2af501['on']('request', _0x5c0bb2 => {
                _0x5c0bb2['resourceType']() === 'image' || _0x5c0bb2['resourceType']() === 'font' || _0x5c0bb2['resourceType']() === 'media' ? _0x5c0bb2['abort']() : _0x5c0bb2['continue']();
            }), await _0x2af501['goto'](_0x24c5fb), await delay(0xbb8), await _0x2af501['waitForSelector']('#RegisterForm-FirstName'), console['log'](getTime() + '\x20[' + _0x30346a['name'] + ']\x20Task\x20' + (_0x3a0878 + 0x1) + '\x20:\x20Filling\x20information'), await _0x2af501['type']('#RegisterForm-FirstName', '' + _0x5e9d8e[_0x3a0878]['FirstName']), await delay(0x226), await _0x2af501['type']('#RegisterForm-LastName', '' + _0x5e9d8e[_0x3a0878]['LastName']), await delay(0x226), await _0x2af501['type']('#RegisterForm-email', '' + _0x5e9d8e[_0x3a0878]['Email']), await delay(0x226), await _0x2af501['type']('#RegisterForm-password', '' + _0x5e9d8e[_0x3a0878]['Password']), await delay(0x226), console['log'](getTime() + '\x20[' + _0x30346a['name'] + ']\x20Task\x20' + (_0x3a0878 + 0x1) + '\x20:\x20Submitting..'), await _0x2af501['$eval']('#RegisterForm', _0x1d18e3 => _0x1d18e3['submit']()), await delay(0x1f40);
            try {
                await _0x2af501['waitForSelector']('.home-page-grid__collection'), await delay(0x1f4), console['log'](chalk['green'](getTime() + '\x20[' + _0x30346a['name'] + ']\x20Task\x20' + (_0x3a0878 + 0x1) + '\x20:\x20Account\x20' + _0x5e9d8e[_0x3a0878]['Email'] + '\x20Generated!')), fs['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x5e9d8e[_0x3a0878]['Email'] + ',' + _0x5e9d8e[_0x3a0878]['Password']), console['log'](chalk['yellow'](getTime() + '\x20[' + _0x30346a['name'] + ']\x20Task\x20' + (_0x3a0878 + 0x1) + '\x20:\x20Account\x20' + _0x5e9d8e[_0x3a0878]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
            } catch (_0x568c93) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a0878 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x568c93));
            }
        } catch (_0x4e3f76) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x3a0878 + 0x1) + '\x20:\x20' + _0x4e3f76));
        } finally {
            _0x24e1e4 && _0x24e1e4['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function pattaFunction(_0x295a5c, _0x2d1dfd, _0x47cf7d) {
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1efa17 = 0x0; _0x1efa17 < _0x47cf7d['length']; _0x1efa17++) {
        await jig(_0x47cf7d, _0x1efa17);
        if (_0x47cf7d[_0x1efa17]['Email'] == '' || _0x47cf7d[_0x1efa17]['Password'] == '' || _0x47cf7d[_0x1efa17]['FirstName'] == '' || _0x47cf7d[_0x1efa17]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1efa17 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x11b622 = getProxy()[_0x1efa17]['split'](':');
        else
            var _0x4480f9 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x11b622 = getProxy()[_0x4480f9]['split'](':');
        const _0x43c60f = await puppeteer['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x11b622[0x0] + ':' + _0x11b622[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3104d2 = await _0x43c60f['newPage']();
            await _0x3104d2['authenticate']({
                'username': '' + _0x11b622[0x2],
                'password': '' + _0x11b622[0x3]
            }), console['log'](getTime() + '\x20[' + _0x2d1dfd['name'] + ']\x20Task\x20' + (_0x1efa17 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3104d2['setRequestInterception'](!![]), _0x3104d2['on']('request', _0x4c9c7d => {
                _0x4c9c7d['resourceType']() === 'image' || _0x4c9c7d['resourceType']() === 'font' || _0x4c9c7d['resourceType']() === 'media' ? _0x4c9c7d['abort']() : _0x4c9c7d['continue']();
            }), await _0x3104d2['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x3104d2['waitForSelector']('#CustomerEmail'), console['log'](getTime() + '\x20[' + _0x2d1dfd['name'] + ']\x20Task\x20' + (_0x1efa17 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3104d2['type']('#CustomerEmail', '' + _0x47cf7d[_0x1efa17]['Email']), await delay(0x12c), await _0x3104d2['type']('#CustomerPassword', '' + _0x47cf7d[_0x1efa17]['Password']), await delay(0x226), await _0x3104d2['$eval']('#customer_login', _0x1881c5 => _0x1881c5['submit']());
            try {
                await _0x3104d2['waitForSelector']('#orders'), await delay(0x4b0);
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x2d1dfd['name'] + ']\x20Task\x20' + (_0x1efa17 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x3104d2['goto']('' + _0x47cf7d[_0x1efa17]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await delay(0xbb8), console['log'](getTime() + '\x20[' + _0x2d1dfd['name'] + ']\x20Task\x20' + (_0x1efa17 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x3104d2['waitForSelector']('#email');
            } catch {
                console['log'](chalk['red'](getTime() + '\x20[' + _0x2d1dfd['name'] + ']\x20Task\x20' + (_0x1efa17 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x3104d2['type']('#email', '' + _0x47cf7d[_0x1efa17]['Email']), await delay(0x384), await _0x3104d2['type']('#first_name', '' + _0x47cf7d[_0x1efa17]['FirstName']), await delay(0x514), await _0x3104d2['type']('#last_name', '' + _0x47cf7d[_0x1efa17]['LastName']), await delay(0x514), await _0x3104d2['type']('#street_address', _0x47cf7d[_0x1efa17]['Address1'] + '\x20' + _0x47cf7d[_0x1efa17]['HouseNumber'] + '\x20' + _0x47cf7d[_0x1efa17]['Address2']), await delay(0x2bc), await _0x3104d2['type']('#zip_code', '' + _0x47cf7d[_0x1efa17]['Postcode']), await delay(0x320), await _0x3104d2['type']('#city', '' + _0x47cf7d[_0x1efa17]['City']), await delay(0x320), await _0x3104d2['type']('#bday', '' + _0x47cf7d[_0x1efa17]['Bday']), await delay(0x320), await _0x3104d2['type']('#instagram', '' + _0x47cf7d[_0x1efa17]['Follower']), await delay(0x352);
            if (_0x47cf7d[_0x1efa17]['Size'] == 'RANDOM') {
                const _0x2ed5ff = await _0x3104d2['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x38de0e => {
                    return _0x38de0e['map'](_0x357db5 => _0x357db5['textContent']);
                });
                var _0x306da5 = Math['round'](Math['random']() * (_0x2ed5ff['length'] - 0x1));
                console['log'](getTime() + '\x20[' + _0x2d1dfd['name'] + ']\x20Task\x20' + (_0x1efa17 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x2ed5ff[_0x306da5]), await _0x3104d2['click']('label[data-eu-size=\x22' + _0x2ed5ff[_0x306da5] + '\x22]');
            } else {
                console['log'](getTime() + '\x20[' + _0x2d1dfd['name'] + ']\x20Task\x20' + (_0x1efa17 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x47cf7d[_0x1efa17]['Size']);
                try {
                    await _0x3104d2['click']('label[data-eu-size=\x22' + _0x47cf7d[_0x1efa17]['Size'] + '\x22]');
                } catch {
                    await _0x3104d2['click']('label[data-eu-size=\x22' + _0x47cf7d[_0x1efa17]['Size'] + '.0\x22]');
                }
            }
            await delay(0xbb8), await _0x3104d2['$$eval']('.raffle__checkbox-label', _0xeb970e => _0xeb970e['forEach'](_0x4edacb => _0x4edacb['click']())), await delay(0x7d0), console['log'](getTime() + '\x20[' + _0x2d1dfd['name'] + ']\x20Task\x20' + (_0x1efa17 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x3104d2['click']('#raffle__form-submit'), await delay(0x1388);
            try {
                await _0x3104d2['waitForSelector']('#raffle__confirmation-message-container'), console['log'](chalk['green'](getTime() + '\x20[' + _0x2d1dfd['name'] + ']\x20Task\x20' + (_0x1efa17 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x42eff3) {
                console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1efa17 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x42eff3));
            }
        } catch (_0x3a9eda) {
            console['log'](chalk['red'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1efa17 + 0x1) + '\x20:\x20' + _0x3a9eda));
        } finally {
            _0x43c60f && _0x43c60f['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function jdFunction(_0x406eee, _0x1b928a) {
    var _0x24f0c3 = ![], _0x4bfb30 = ![];
    puppeteer['use'](StealthPlugin()), puppeteer['use'](RecaptchaPlugin({
        'provider': {
            'id': '2captcha',
            'token': '' + settings['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xca6981 = 0x0; _0xca6981 < _0x1b928a['length']; _0xca6981++) {
        var _0x1a736e = [{
            'type': 'rich',
            'title': 'Succesfull\x20Entry',
            'description': '' + _0x406eee['name'],
            'color': 0xc0d6d6,
            'url': '',
            'fields': [
                {
                    'name': 'User',
                    'value': '' + username
                },
                {
                    'name': 'Product',
                    'value': '' + _0x1b928a[_0xca6981]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1b928a[_0xca6981]['Size']
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
        const _0x29b6a9 = { 'embeds': _0x1a736e };
        await jig(_0x1b928a, _0xca6981);
        if (_0x1b928a[_0xca6981]['Email'] == '' || _0x1b928a[_0xca6981]['Url'] == '' || _0x1b928a[_0xca6981]['FirstName'] == '' || _0x1b928a[_0xca6981]['LastName'] == '') {
            console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0xca6981 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (settings['useRandomProxy'] = ![])
            var _0x55d17 = getProxy()[_0xca6981]['split'](':');
        else
            var _0x20aa38 = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x55d17 = getProxy()[_0x20aa38]['split'](':');
        const _0xc79742 = await puppeteer['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x55d17[0x0] + ':' + _0x55d17[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x48d919 = await _0xc79742['newPage']();
            await _0x48d919['authenticate']({
                'username': '' + _0x55d17[0x2],
                'password': '' + _0x55d17[0x3]
            }), console['log'](getTime() + '\x20[' + _0x406eee['name'] + ']\x20Task\x20' + (_0xca6981 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x48d919['setRequestInterception'](!![]), _0x48d919['on']('request', _0x1cab52 => {
                _0x1cab52['resourceType']() === 'image' || _0x1cab52['resourceType']() === 'font' || _0x1cab52['resourceType']() === 'media' ? _0x1cab52['abort']() : _0x1cab52['continue']();
            }), await _0x48d919['goto']('' + _0x1b928a[_0xca6981]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](getTime() + '\x20[' + _0x406eee['name'] + ']\x20Task\x20' + (_0xca6981 + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x48d919['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x48d919['type']('#comp_firstname', '' + _0x1b928a[_0xca6981]['FirstName']), await _0x48d919['waitForSelector']('#comp_lastname'), await _0x48d919['type']('#comp_lastname', '' + _0x1b928a[_0xca6981]['LastName']), await _0x48d919['waitForSelector']('#comp_email'), await _0x48d919['type']('#comp_email', '' + _0x1b928a[_0xca6981]['Email']), await _0x48d919['waitForSelector']('#comp_paypalemail'), await _0x48d919['type']('#comp_paypalemail', '' + _0x1b928a[_0xca6981]['Email']), await _0x48d919['waitForSelector']('#comp_mobile_end'), await _0x48d919['type']('#comp_mobile_end', '' + _0x1b928a[_0xca6981]['Phone']), await _0x48d919['waitForSelector']('#comp_dob'), await _0x48d919['type']('#comp_dob', '08/09/1992'), console['log'](getTime() + '\x20[' + _0x406eee['name'] + ']\x20Task\x20' + (_0xca6981 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x1b928a[_0xca6981]['Size'] == 'RANDOM') {
                const _0x19d16a = await _0x48d919['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x842952 => {
                    return _0x842952['map'](_0x131e5e => _0x131e5e['value']);
                });
                var _0xd00f6c = Math['round'](Math['random']() * (_0x19d16a['length'] - 0x2));
                await _0x48d919['select']('#shoesize', _0x19d16a[_0xd00f6c + 0x1]), await delay(0x3e8);
            } else {
                const _0x314517 = await _0x48d919['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x585815 => {
                    return _0x585815['map'](_0x21e457 => _0x21e457['innerText']);
                }), _0x75a9e6 = await _0x48d919['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x69778e => {
                    return _0x69778e['map'](_0x2e6881 => _0x2e6881['value']);
                });
                var _0x11a2de = _0x1b928a[_0xca6981]['Size'];
                for (var _0x20dbaa = 0x1; _0x20dbaa < _0x75a9e6['length']; _0x20dbaa++) {
                    var _0x2404a8 = _0x314517[_0x20dbaa]['split']('\x20')[0x0];
                    if (_0x2404a8 == _0x11a2de) {
                        await _0x48d919['select']('#shoesize', _0x75a9e6[_0x20dbaa]);
                        break;
                    } else {
                        if (_0x20dbaa + 0x1 == _0x75a9e6['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x48d919['waitForSelector']('#comp_address1'), await _0x48d919['type']('#comp_address1', _0x1b928a[_0xca6981]['Address1'] + '\x20' + _0x1b928a[_0xca6981]['HouseNumber']), await _0x48d919['waitForSelector']('#comp_address2'), await _0x48d919['type']('#comp_address2', '' + _0x1b928a[_0xca6981]['Address2']), await _0x48d919['waitForSelector']('#comp_address2'), await _0x48d919['type']('#comp_address3', '' + _0x1b928a[_0xca6981]['City']), await _0x48d919['waitForSelector']('#comp_postcode'), await _0x48d919['type']('#comp_postcode', '' + _0x1b928a[_0xca6981]['Zip']), console['log'](getTime() + '\x20[' + _0x406eee['name'] + ']\x20Task\x20' + (_0xca6981 + 0x1) + '\x20:\x20Sending\x20Entry'), await delay(0x4b0), await _0x48d919['click']('label#emailhold'), await delay(0x5dc), await _0x48d919['click']('#preauth_tandc_email\x20>\x20label'), await delay(0x5dc), await _0x48d919['click']('#submit'), await _0x48d919['waitForSelector']('#paymentWrap'), console['log'](getTime() + '\x20[' + _0x406eee['name'] + ']\x20Task\x20' + (_0xca6981 + 0x1) + '\x20:\x20' + chalk['blue']('Awaiting\x20Paypal\x20Payment')), _0xc79742['on']('targetcreated', async _0x16cacb => {
                if (_0x16cacb['type']() === 'page') {
                    const _0x312e90 = await _0x16cacb['page']();
                    async function _0x1e71ab() {
                        try {
                            await _0x48d919['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x4bfb30 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x5cd8d4() {
                        try {
                            await _0x48d919['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x24f0c3 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x5cd8d4(), _0x1e71ab(), await delay(0x493e0);
                }
            });
            async function _0x656a81() {
                for (let _0x1e6e0c = 0x0; _0x1e6e0c < 0x12c; _0x1e6e0c++) {
                    if (_0x24f0c3 == !![]) {
                        console['log'](chalk['green'](getTime() + '\x20[' + _0x406eee['name'] + ']\x20Task\x20' + (_0xca6981 + 0x1) + '\x20:\x20Raffle\x20Entered!')), sendWebhook(succesWH, _0x29b6a9);
                        return;
                    } else {
                        if (_0x4bfb30)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await delay(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await delay(0xbb8), await _0x48d919['click']('.zoid-outlet'), await delay(0x7d0), await _0x656a81();
        } catch (_0x41a39e) {
            console['log'](chalk['red'](getTime() + '\x20[' + _0x406eee['name'] + ']\x20Task\x20' + (_0xca6981 + 0x1) + '\x20:\x20' + _0x41a39e)), _0x1a736e[0x0]['title'] = 'Failed\x20entry', _0x1a736e[0x0]['description'] = _0x406eee['name'] + ':\x20' + _0x41a39e, await sendWebhook(errorWH, _0x29b6a9);
        } finally {
            _0xc79742 && _0xc79742['close'](), console['log']('Waiting\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
        }
    }
}
async function oqiumFunction(_0x264cd6, _0x520f03, _0x5d3ff5, _0x344ab9) {
    var _0x301c07 = {}, _0x4bcb1f = [], _0xbbd52b = {};
    !_0x344ab9 && (_0x344ab9 = {});
    _0x520f03 != 'ver' && (await jig(_0x344ab9, _0x264cd6), _0x4bcb1f = [{
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
                'value': '' + _0x344ab9[_0x264cd6]['Size']
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
    }], _0xbbd52b = { 'embeds': _0x4bcb1f }, _0x301c07 = _0x5d3ff5['data'], _0x520f03 == 'exp' ? _0x301c07['data']['attributes']['email'] = '' + _0x344ab9[_0x264cd6]['FirstName'] + _0x344ab9[_0x264cd6]['LastName'] + settings['catchall'] : _0x301c07['data']['attributes']['email'] = '' + _0x344ab9[_0x264cd6]['Email'], _0x301c07['data']['attributes']['properties']['$first_name'] = '' + _0x344ab9[_0x264cd6]['FirstName'], _0x301c07['data']['attributes']['properties']['$last_name'] = '' + _0x344ab9[_0x264cd6]['LastName'], _0x301c07['data']['attributes']['properties']['$address1'] = _0x344ab9[_0x264cd6]['Address1'] + '\x20' + _0x344ab9[_0x264cd6]['Address2'] + '\x20' + _0x344ab9[_0x264cd6]['HouseNumber'], _0x301c07['data']['attributes']['properties']['$zip'] = '' + _0x344ab9[_0x264cd6]['Zip'], _0x301c07['data']['attributes']['properties']['$city'] = '' + _0x344ab9[_0x264cd6]['City'], _0x301c07['data']['attributes']['properties']['$country'] = '' + _0x344ab9[_0x264cd6]['Country'], _0x301c07['data']['attributes']['properties']['Size'] = '' + _0x344ab9[_0x264cd6]['Size'], _0x301c07['data']['attributes']['properties']['$phone_number'] = '' + _0x344ab9[_0x264cd6]['Phone'], _0x301c07['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x344ab9[_0x264cd6]['Follower']);
    if (settings['useRandomProxy'] = ![])
        var _0x14c5aa = getProxy()[_0x264cd6]['split'](':');
    else
        var _0x5959cd = Math['round'](Math['random']() * (getProxy()['length'] - 0x1)), _0x14c5aa = getProxy()[_0x5959cd]['split'](':');
    var _0x45a295 = {
        'jar': j,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x5d3ff5['url'],
        'headers': _0x5d3ff5['headers'],
        'body': JSON['stringify'](_0x301c07),
        'proxy': 'http://' + _0x14c5aa[0x2] + ':' + _0x14c5aa[0x3] + '@' + _0x14c5aa[0x0] + ':' + _0x14c5aa[0x1]
    };
    return _0x520f03 != 'ver' && (_0x45a295['url'] = _0x5d3ff5['url'], _0x45a295['headers'] = _0x5d3ff5['headers']), _0x520f03 == 'ver' && (_0x45a295['method'] = 'GET'), new Promise(function (_0x440671, _0x2e97af) {
        callback = async (_0x12d7e6, _0x2b2a83, _0x57fc78) => {
            !_0x12d7e6 && _0x2b2a83['statusCode'] == 0xca || !_0x12d7e6 && _0x2b2a83['statusCode'] == 0xc8 ? (_0x520f03 != 'ver' && await sendWebhook(succesWH, _0xbbd52b), _0x440671(console['log'](chalk['green'](getTime() + '\x20[' + _0x5d3ff5['name'] + ']\x20Task\x20' + (_0x264cd6 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x520f03 != 'ver' && (_0x4bcb1f[0x0]['title'] = 'Failed\x20entry', _0x4bcb1f[0x0]['description'] = '' + _0x12d7e6, await sendWebhook(errorWH, _0xbbd52b)), _0x2e97af(console['log'](getTime() + '\x20[' + _0x5d3ff5['name'] + ']\x20Task\x20' + (_0x264cd6 + 0x1) + ':\x20' + _0x12d7e6)));
        };
        try {
            _0x520f03 != 'ver' && console['log'](getTime() + '\x20[' + _0x5d3ff5['name'] + ']\x20Task\x20' + (_0x264cd6 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x301c07['data']['attributes']['email']), request(_0x45a295, callback);
        } catch (_0xb65abe) {
            console['log'](getTime() + '\x20Task\x20' + (_0x264cd6 + 0x1) + ':\x20' + _0xb65abe);
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
            async function _0x48d2c3() {
                console['clear'](), console['log']('Welcome\x20to\x20' + chalk['cyan']('JRaffles();') + '\x20' + version), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x447eb1 = 0x0; _0x447eb1 < modules['length']; _0x447eb1++) {
                    if (modules[_0x447eb1]['name'] === 'Reload\x20Settings' || modules[_0x447eb1]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x447eb1 + ')\x20[' + modules[_0x447eb1]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (modules['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (modules['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await getModule();
                if (modules[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await getFunction(modules[taskModule]['modules']);
                    var _0x4d96fc = modules[taskModule]['modules'][taskFunction];
                    console['clear'](), await afewScraper(), await getAfewProduct();
                    var _0x10fab5 = await getTaskFile();
                    return await afewFunction(afewProducts[afewProduct], 'nor', _0x4d96fc, _0x10fab5), _0x48d2c3();
                } else {
                    if (modules[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await getFunction(modules[taskModule]['modules']);
                        var _0x4d96fc = modules[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x1401ce = await getTaskFile();
                            console['log']('Starting\x20' + _0x1401ce['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x1bb372 = 0x0; _0x1bb372 < _0x1401ce['length']; _0x1bb372++) {
                                console['log'](getTime() + '\x20[' + _0x4d96fc['name'] + ']\x20Task\x20' + (_0x1bb372 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x1bb372, 'nor', _0x4d96fc, _0x1401ce), console['log'](getTime() + '\x20[' + _0x4d96fc['name'] + ']\x20Sleeping\x20for\x20' + settings['MahaDelay'] + '\x20ms'), await delay(settings['MahaDelay']);
                            }
                            ;
                            return _0x48d2c3();
                        } else {
                            if (taskFunction == 0x1) {
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x1bb372 = 0x0; _0x1bb372 < links['length']; _0x1bb372++) {
                                    _0x4d96fc['url'] = links[_0x1bb372], console['log'](getTime() + '\x20[' + _0x4d96fc['name'] + ']\x20Task\x20' + (_0x1bb372 + 0x1) + ':\x20Getting\x20Session'), await mahaFunction(_0x1bb372, 'ver', _0x4d96fc), console['log'](getTime() + '\x20[' + _0x4d96fc['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                                }
                                ;
                                return _0x48d2c3();
                            }
                        }
                    } else {
                        if (modules[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x5bd6ff = await getTaskFile();
                            return console['log'](_0x5bd6ff), await footshopModule(_0x5bd6ff), await delay(0x1388), _0x48d2c3();
                        } else {
                            if (modules[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await getFunction(modules[taskModule]['modules']);
                                var _0x4d96fc = modules[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0xef1660 = await getTaskFile();
                                    console['log']('Starting\x20' + chalk['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x1bb372 = 0x0; _0x1bb372 < _0xef1660['length']; _0x1bb372++) {
                                        console['log'](getTime() + '\x20[' + _0x4d96fc['name'] + ']\x20Task\x20' + (_0x1bb372 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await oqiumFunction(_0x1bb372, 'nor', _0x4d96fc, _0xef1660);
                                        } catch {
                                            console['log'](chalk['red'](getTime() + '\x20[' + _0x4d96fc['name'] + ']\x20Task\x20' + (_0x1bb372 + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](getTime() + '\x20[' + _0x4d96fc['name'] + ']\x20Sleeping\x20for\x20' + settings['delay'] + '\x20ms'), await delay(settings['delay']);
                                    }
                                    return _0x48d2c3();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await getLinks(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x1bb372 = 0x0; _0x1bb372 < links['length']; _0x1bb372++) {
                                            try {
                                                _0x4d96fc['url'] = links[_0x1bb372], console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Task\x20' + (_0x1bb372 + 0x1) + ':\x20Getting\x20Session'), await oqiumFunction(_0x1bb372, 'ver', _0x4d96fc), console['log'](getTime() + '\x20[' + modules[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + settings['verificationDelay'] + '\x20ms'), await delay(settings['verificationDelay']);
                                            } catch (_0x2026bf) {
                                                console['log'](_0x2026bf);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x48d2c3();
                                    }
                                }
                                ;
                            } else {
                                if (modules[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await getFunction(modules[taskModule]['modules']);
                                    var _0x4d96fc = modules[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await bwAcc('https://bouncewear.com/nl/account/register', _0x4d96fc);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (modules[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await getFunction(modules[taskModule]['modules']);
                                        var _0x4d96fc = modules[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x385dfb = await getTaskFile();
                                            return await pattaAcc('https://patta.nl/account/register', _0x4d96fc, _0x385dfb), _0x48d2c3();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x385dfb = await getTaskFile();
                                                return await pattaFunction('', _0x4d96fc, _0x385dfb), _0x48d2c3();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (modules[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await getFunction(modules[taskModule]['modules']);
                                            var _0x4d96fc = modules[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x385dfb = await getTaskFile();
                                                return await kickzAcc('https://www.kickz.com/nl/login/', _0x4d96fc, _0x385dfb), _0x48d2c3();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x385dfb = await getTaskFile();
                                                    return await pattaFunction('', _0x4d96fc, _0x385dfb), _0x48d2c3();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (modules[taskModule]['name'] == 'JD') {
                                                taskFunction = await getFunction(modules[taskModule]['modules']);
                                                var _0x4d96fc = modules[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x27cfc8 = await getTaskFile();
                                                    return await jdFunction(_0x4d96fc, _0x27cfc8), _0x48d2c3();
                                                }
                                            } else {
                                                if (modules[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x5863a5 = 0x0;
                                                    for (const _0x2f1f78 in settings) {
                                                        console['log']('(' + _0x5863a5 + ')\x20' + _0x2f1f78 + '\x20:\x20' + settings[_0x2f1f78]), _0x5863a5++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x5863a5 + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x56f6f2 = await getSetting();
                                                    if (_0x56f6f2 == _0x5863a5)
                                                        return _0x48d2c3();
                                                    console['clear'];
                                                    var _0x473494 = 0x0;
                                                    for (var _0x50d94c in settings) {
                                                        if (_0x56f6f2 == _0x473494) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x50d94c + '\x20:'), settings[_0x50d94c] = await getValue(), fs['writeFileSync']('../settings.json', JSON['stringify'](settings));
                                                            break;
                                                        } else
                                                            _0x473494++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await delay(0xbb8), _0x48d2c3();
                                                } else {
                                                    if (modules[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await loadSettings(), _0x48d2c3();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            modules[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x23cc92 = await getPassword();
                                                            _0x23cc92 == 'ModuleVoorDeBoys' ? (await afewScraper(), await getAfewProduct(), await afewFunction(afewProducts[afewProduct], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await delay(0xbb8));
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
            await _0x48d2c3();
        } catch (_0x1ef8ec) {
            return console['log'](_0x1ef8ec), await delay(0x3a98);
        }
}
;
setTitle('JRaffles\x20' + version), loadSettings(), main();