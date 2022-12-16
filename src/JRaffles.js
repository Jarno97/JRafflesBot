var _0x560404 = require('exe');
const { execFile: _0x348e53 } = require('child_process'), _0x1e34c6 = require('puppeteer-extra'), _0x2c2cfe = require('puppeteer-extra-plugin-recaptcha'), _0x1ef3fb = require('puppeteer-extra-plugin-stealth'), _0x25f83e = require('chalk'), _0x504346 = require('node-bash-title'), _0x55d88f = require('fs'), _0x5b54d9 = require('axios'), _0x13b920 = require('papaparse');
var _0x501434 = require('random-name');
const _0x2fa97e = require('request'), _0x732c8b = _0x55d88f['readFileSync']('../proxies.txt', 'utf-8');
var _0x159588 = require('prompt');
const _0x31f3d5 = _0x2fa97e['jar']();
var _0x54fd99 = {};
const _0x42d05c = 'https://discord.com/api/webhooks/1044989608708030595/HUZ2q06RoQQ24n_rWWEsL6AgM5yXEeUi2SO9VyOLuQgGBeHIlXpPl9Xr5jYMLXwJKwPS', _0x28c870 = 'https://discord.com/api/webhooks/1045001962262900766/ZXWdz3BSjNO08alABR8ERNBgR2SNcydTW-9XxsFuphHYfwHaojLBu3hkw1Ygi3MxOZdz';
var _0x1d9607;
const _0x3435f4 = JSON['parse'](_0x55d88f['readFileSync']('../package.json', 'utf-8')), _0x3f4489 = _0x3435f4['version'];
var _0x32d165, _0x5baf1b, _0x1b45f4, _0x3b499e, _0x2c3479, _0x14f34a, _0xdcde71;
const _0x1e69cf = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x5556c2 = ![];
const _0x1b8c4d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x5c0d7e = '0123456789';
var _0x564d30 = _0x1b8c4d['split']('');
const _0x30b1c6 = require('auto-git-update'), { PageEmittedEvents: _0x9fab98 } = require('puppeteer'), { getRandomValues: _0x53464f } = require('crypto'), { resolve: _0x18cccd } = require('path'), _0x3b9519 = {
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
}, _0x42667c = new _0x30b1c6(_0x3b9519);
async function _0x449b37() {
    _0x2c3479 = _0x55d88f['readdirSync']('../proxies'), _0x3b499e = _0x55d88f['readdirSync']('../tasks'), _0x54fd99 = JSON['parse'](_0x55d88f['readFileSync']('../settings.json', 'utf-8')), !_0x54fd99['delay'] && (_0x54fd99['delay'] = 0x2710, _0x55d88f['writeFileSync']('../settings.json', JSON['stringify'](_0x54fd99))), !_0x54fd99['captchaKey'] && (_0x54fd99['captchaKey'] = '', _0x55d88f['writeFileSync']('../settings.json', JSON['stringify'](_0x54fd99))), !_0x54fd99['useRandomProxy'] && (_0x54fd99['useRandomProxy'] = ![], _0x55d88f['writeFileSync']('../settings.json', JSON['stringify'](_0x54fd99))), !_0x54fd99['webhook'] && (_0x54fd99['webhook'] = '', _0x55d88f['writeFileSync']('../settings.json', JSON['stringify'](_0x54fd99))), _0x1d9607 = _0x54fd99['webhook'], _0x14f34a = _0x54fd99['licenseKey'];
}
let _0x289a16, _0x13d625 = [], _0x16997e;
const _0x4a1be2 = _0x237864 => new Promise(_0x2019c9 => setTimeout(_0x2019c9, _0x237864));
async function _0x4ac91d(_0x399336) {
    return _0x5b54d9['get']('https://api.hyper.co/v4/licenses/' + _0x399336, { 'headers': { 'Authorization': 'Bearer\x20' + _0x1e69cf } })['then'](_0x53a700 => _0x53a700['data'])['catch'](() => null);
}
;
async function _0x25e02b(_0x317ff7) {
    console['clear'](), console['log']('Checking\x20license\x20' + _0x14f34a + '...'), await _0x4a1be2(0x5dc);
    const _0x3d9fc8 = await _0x4ac91d(_0x317ff7);
    _0xdcde71 = JSON['stringify'](_0x3d9fc8['user']['username']);
    if (!_0x3d9fc8)
        return console['log']('License\x20not\x20found');
    if (!_0x3d9fc8['user'])
        return console['log']('License\x20not\x20bound');
    return _0x3d9fc8['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x5556c2 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x5556c2 = ![]);
}
async function _0x1639f0() {
    var _0x3d8700 = await _0x159588['get']('Module');
    return console['clear'](), _0x3d8700['Module'];
}
;
async function _0x49bd3f() {
    var _0x1fb572 = await _0x159588['get']('Setting');
    return console['clear'](), _0x1fb572['Setting'];
}
async function _0x579fba() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x4a9697 = 0x0; _0x4a9697 < _0x3b499e['length']; _0x4a9697++) {
        console['log']('\x20(' + _0x4a9697 + ')\x20' + _0x3b499e[_0x4a9697]);
    }
    console['log']('');
    var _0x2560b9 = await _0x159588['get']('Task'), _0x4893de = _0x55d88f['readFileSync']('../tasks/' + _0x3b499e[_0x2560b9['Task']], 'utf-8');
    return _0x1b45f4 = _0x13b920['parse'](_0x4893de, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x25f83e['blue'](_0x3b499e[_0x2560b9['Task']])), _0x32d165 = _0x3b499e[_0x2560b9['Task']], _0x1b45f4;
}
async function _0x221cdc() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x2ce549 = 0x0; _0x2ce549 < _0x2c3479['length']; _0x2ce549++) {
        console['log']('\x20(' + _0x2ce549 + ')\x20' + _0x2c3479[_0x2ce549]);
    }
    console['log']('');
    var _0x2a228f = await _0x159588['get']('Proxies'), _0x5d4fef = _0x55d88f['readFileSync']('../proxies/' + _0x2c3479[_0x2a228f['Proxies']], 'utf-8')['split']('\x0a');
    let _0x981b4a = _0x5d4fef['map']((_0xa8349f, _0xf6afac) => {
        sanatizeProxy = _0xa8349f['replace']('\x0d', '');
        if (_0x5d4fef[_0xf6afac + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x5baf1b = _0x2c3479[_0x2a228f['Proxies']], console['clear'](), _0x981b4a;
}
async function _0x3db4c6() {
    var _0x4f4e40 = await _0x159588['get']('Value');
    return console['clear'](), _0x4f4e40['Value'];
}
async function _0x110efe(_0x5841f2) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x2fc434 = 0x0; _0x2fc434 < _0x5841f2['length']; _0x2fc434++) {
        console['log']('\x20(' + _0x2fc434 + ')\x20[' + _0x5841f2[_0x2fc434]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x3428fe = await _0x159588['get']('Module');
    return _0x3428fe['Module'];
}
async function _0x1fd799() {
    var _0x104f62 = await _0x159588['get']('Password');
    return console['clear'](), _0x104f62['Password'];
}
;
async function _0x410f94() {
    var _0x4216af = await _0x159588['get']('Links');
    return _0x4216af['Links'];
}
;
async function _0x40d230() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x494915 = 0x0; _0x494915 < _0x13d625['length']; _0x494915++) {
        console['log']('\x20(' + _0x494915 + ')\x20' + _0x13d625[_0x494915]);
    }
    ;
    console['log']();
    let _0x87e516 = await _0x159588['get']('Product');
    console['clear'](), _0x16997e = _0x87e516['Product'];
    return;
}
;
function _0x22c21b() {
    var _0x3e12be = new Date(Date['now']())['toLocaleTimeString']();
    return _0x3e12be;
}
;
const _0x2cb586 = [
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
async function _0xbc69e3(_0x4a913a, _0x35171b) {
    let _0x57e494 = { 'headers': { 'content-type': 'application/json' } };
    await _0x5b54d9['post'](_0x4a913a, _0x35171b, _0x57e494);
}
;
async function _0x19a615(_0x408abc, _0xf0d57a) {
    var _0x16e480 = _0x408abc[_0xf0d57a]['Address1']['split'](''), _0x1bcde4 = _0x408abc[_0xf0d57a]['Address2']['split'](''), _0x27ca18 = _0x408abc[_0xf0d57a]['Email']['split']('@');
    for (var _0x556d00 = 0x0; _0x556d00 < _0x16e480['length']; _0x556d00++) {
        if (_0x16e480[_0x556d00] == 'X') {
            var _0x3a9324 = Math['round'](Math['random']() * (_0x1b8c4d['length'] - 0x1));
            _0x16e480[_0x556d00] = _0x564d30[_0x3a9324];
        }
    }
    ;
    for (var _0x556d00 = 0x0; _0x556d00 < _0x1bcde4['length']; _0x556d00++) {
        if (_0x1bcde4[_0x556d00] == 'X') {
            var _0x3a9324 = Math['round'](Math['random']() * (_0x1b8c4d['length'] - 0x1));
            _0x1bcde4[_0x556d00] = _0x564d30[_0x3a9324];
        }
    }
    ;
    _0x408abc[_0xf0d57a]['FirstName'] == 'RANDOM' && (_0x408abc[_0xf0d57a]['FirstName'] = _0x501434['first']());
    _0x408abc[_0xf0d57a]['LastName'] == 'RANDOM' && (_0x408abc[_0xf0d57a]['LastName'] = _0x501434['last']());
    _0x27ca18[0x0] == 'RANDOM' ? _0x27ca18[0x0] = '' + _0x501434['first']() + _0x501434['last']() + '@' : _0x27ca18[0x0] = _0x27ca18[0x0] + '@';
    _0x408abc[_0xf0d57a]['Email'] = _0x27ca18['join'](''), _0x408abc[_0xf0d57a]['Address1'] = _0x16e480['join'](''), _0x408abc[_0xf0d57a]['Address2'] = _0x1bcde4['join']('');
    return;
}
;
function _0xb281c5() {
    let _0x39e1a7 = _0x732c8b['split']('\x0a'), _0x27223e = _0x39e1a7['map']((_0xe7967c, _0x470c69) => {
        sanatizeProxy = _0xe7967c['replace']('\x0d', '');
        if (_0x39e1a7[_0x470c69 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x27223e;
}
;
async function _0x2e8db6() {
    var _0x4828f9 = _0xb281c5()[0x1]['split'](':');
    const _0x474e7c = await _0x1e34c6['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x4828f9[0x0] + ':' + _0x4828f9[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x875b79 = await _0x474e7c['newPage']();
        await _0x875b79['authenticate']({
            'username': '' + _0x4828f9[0x2],
            'password': '' + _0x4828f9[0x3]
        }), console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x875b79['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x875b79['setRequestInterception'](!![]), _0x875b79['on']('request', _0x4ea5f9 => {
            _0x4ea5f9['resourceType']() === 'image' || _0x4ea5f9['resourceType']() === 'font' || _0x4ea5f9['resourceType']() === 'media' ? _0x4ea5f9['abort']() : _0x4ea5f9['continue']();
        }), await _0x875b79['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x875b79['waitForTimeout'](0xbb8), await _0x875b79['waitForSelector']('.product-card');
        const _0x1358f3 = await _0x875b79['$$eval']('a.product-card', _0x1e4b8e => {
            return _0x1e4b8e['map'](_0x5acdee => _0x5acdee['href']);
        });
        return _0x13d625 = _0x1358f3;
    } catch (_0x57f788) {
        console['log']('\x20' + _0x57f788);
    } finally {
        _0x474e7c['close'](), console['clear']();
    }
}
;
async function _0x944492(_0x1e7918, _0x45ca44, _0x2ba8cf, _0x3aabde, _0x597c89) {
    await _0x19a615(_0x3aabde, _0x1e7918);
    var _0x856ba3 = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0xdcde71
            },
            {
                'name': 'Size',
                'value': '' + _0x3aabde[_0x1e7918]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x54fd99['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x3f4489
            }
        ]
    }];
    const _0x118a6c = { 'embeds': _0x856ba3 };
    if (_0x54fd99['useRandomProxy'] = ![])
        var _0x4c831b = _0x597c89[_0x1e7918]['split'](':');
    else
        var _0x2374f8 = Math['round'](Math['random']() * (_0x597c89['length'] - 0x1)), _0x4c831b = _0x597c89[_0x2374f8]['split'](':');
    var _0x3d51e9 = _0x2ba8cf['data'];
    _0x45ca44 == 'exp' ? _0x3d51e9['data']['attributes']['email'] = '' + _0x3aabde[_0x1e7918]['FirstName'] + _0x3aabde[_0x1e7918]['LastName'] + _0x54fd99['catchall'] : _0x3d51e9['data']['attributes']['email'] = '' + _0x3aabde[_0x1e7918]['Email'];
    _0x3d51e9['data']['attributes']['properties']['$first_name'] = '' + _0x3aabde[_0x1e7918]['FirstName'], _0x3d51e9['data']['attributes']['properties']['$last_name'] = '' + _0x3aabde[_0x1e7918]['LastName'], _0x3d51e9['data']['attributes']['properties']['$address1'] = _0x3aabde[_0x1e7918]['Address1'] + '\x20' + _0x3aabde[_0x1e7918]['Address2'], _0x3d51e9['data']['attributes']['properties']['$zip'] = '' + _0x3aabde[_0x1e7918]['Zip'], _0x3d51e9['data']['attributes']['properties']['$city'] = '' + _0x3aabde[_0x1e7918]['City'], _0x3d51e9['data']['attributes']['properties']['$country'] = '' + _0x3aabde[_0x1e7918]['Country'], _0x3d51e9['data']['attributes']['properties']['Size'] = '' + _0x3aabde[_0x1e7918]['Size'], _0x3d51e9['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x3aabde[_0x1e7918]['Follower'];
    var _0x1b6e2a = {
        'jar': _0x31f3d5,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x2ba8cf['url'],
        'headers': _0x2ba8cf['headers'],
        'body': JSON['stringify'](_0x3d51e9),
        'proxy': 'http://' + _0x4c831b[0x2] + ':' + _0x4c831b[0x3] + '@' + _0x4c831b[0x0] + ':' + _0x4c831b[0x1]
    };
    return _0x45ca44 === 'ver' && (_0x1b6e2a['method'] = 'GET'), new Promise(function (_0x21c7b8, _0xcad891) {
        callback = async (_0x15f466, _0x2ad8bc, _0x3fdb2d) => {
            !_0x15f466 && _0x2ad8bc['statusCode'] == 0xca || !_0x15f466 && _0x2ad8bc['statusCode'] == 0xc8 ? _0x21c7b8(console['log'](_0x25f83e['green'](_0x22c21b() + '\x20[' + _0x2ba8cf['name'] + ']\x20Task\x20' + (_0x1e7918 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x856ba3[0x0]['title'] = 'Failed\x20entry', _0x856ba3[0x0]['description'] = '' + _0x15f466, await _0xbc69e3(_0x28c870, _0x118a6c), _0xcad891(console['log'](_0x22c21b() + '\x20[' + _0x2ba8cf['name'] + ']\x20Task\x20' + (_0x1e7918 + 0x1) + ':\x20' + _0x15f466)));
        };
        try {
            _0x45ca44 === 'ver' ? console['log'](_0x22c21b() + '\x20[' + _0x2ba8cf['name'] + ']\x20Task\x20' + (_0x1e7918 + 0x1) + ':\x20Verifying.') : console['log'](_0x22c21b() + '\x20[' + _0x2ba8cf['name'] + ']\x20Task\x20' + (_0x1e7918 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3d51e9['data']['attributes']['email']), _0x2fa97e(_0x1b6e2a, callback);
        } catch (_0x151a63) {
            console['log'](_0x22c21b() + '\x20Task\x20' + (_0x1e7918 + 0x1) + ':\x20' + _0x151a63);
        }
    });
}
;
async function _0x55c462(_0x97547b, _0xa501fc) {
    var _0x29b2b0;
    _0x1e34c6['use'](_0x1ef3fb()), _0x1e34c6['use'](_0x2c2cfe({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x54fd99['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2b7a88 = 0x0; _0x2b7a88 < _0x97547b['length']; _0x2b7a88++) {
        await _0x19a615(_0x97547b, _0x2b7a88);
        if (_0x97547b[_0x2b7a88]['Email'] == '' || _0x97547b[_0x2b7a88]['FirstName'] == '' || _0x97547b[_0x2b7a88]['LastName'] == '' || _0x97547b[_0x2b7a88]['Country'] == '' || _0x97547b[_0x2b7a88]['Size'] == '' || _0x97547b[_0x2b7a88]['Address1'] == '' || _0x97547b[_0x2b7a88]['Zip'] == '') {
            console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        console['log'](_0x97547b[_0x2b7a88]['Url']);
        async function _0x5053ce() {
            var _0x5c0bfe = await _0x5b54d9['get']('https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_')['then'](_0x1e3c20 => _0x1e3c20['data'])['catch'](() => undefined);
            console['log'](_0x5c0bfe);
            var _0x9c49db = _0x5c0bfe['sizeSets']['Men']['sizes'];
            _0x9c49db['length'] == 0x0 && (_0x9c49db = _0x5c0bfe['sizeSets']['Women']['sizes'], _0x9c49db['length'] == 0x0 && (_0x9c49db = _0x5c0bfe['sizeSets']['Unisex']['sizes'], _0x9c49db['length'] == 0x0 && (_0x9c49db = _0x5c0bfe['sizeSets']['Kids']['sizes'])));
            ;
            async function _0x38e073() {
                for (var _0x4d0b50 = 0x0; _0x4d0b50 < _0x9c49db['length']; _0x4d0b50++) {
                    if (_0x9c49db[_0x4d0b50]['eur'] == _0x97547b[_0x2b7a88]['Size'])
                        return _0x29b2b0 = _0x9c49db[_0x4d0b50]['id'], console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
                }
                return console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x20Size\x20' + _0x97547b[_0x2b7a88]['Size'] + '\x20not\x20found'), ![];
            }
            ;
            let _0x4b5e86 = await _0x38e073();
            if (_0x4b5e86 == ![])
                return ![];
        }
        let _0x1c637b = await _0x5053ce();
        if (_0x1c637b == ![])
            continue;
        if (_0x97547b[_0x2b7a88]['Email'] == '' || _0x97547b[_0x2b7a88]['FirstName'] == '' || _0x97547b[_0x2b7a88]['LastName'] == '' || _0x97547b[_0x2b7a88]['Country'] == '' || _0x97547b[_0x2b7a88]['Size'] == '' || _0x97547b[_0x2b7a88]['Address1'] == '' || _0x97547b[_0x2b7a88]['Zip'] == '' || _0x97547b[_0x2b7a88]['Phone'] == '') {
            console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x22edb = 'https://releases.footshop.com/register/' + _0x97547b[_0x2b7a88]['Url'] + '/Men/' + _0x29b2b0;
        if (_0x54fd99['useRandomProxy'] = ![])
            var _0x58de32 = _0xa501fc[_0x2b7a88]['split'](':');
        else
            var _0x421ce7 = Math['round'](Math['random']() * (_0xa501fc['length'] - 0x1)), _0x58de32 = _0xa501fc[_0x421ce7]['split'](':');
        const _0x2e1751 = await _0x1e34c6['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x58de32[0x0] + ':' + _0x58de32[0x1]]
        });
        try {
            const _0x5cb9dc = await _0x2e1751['newPage']();
            await _0x5cb9dc['authenticate']({
                'username': '' + _0x58de32[0x2],
                'password': '' + _0x58de32[0x3]
            }), console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5cb9dc['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5cb9dc['setRequestInterception'](!![]), _0x5cb9dc['on']('request', _0x2b2950 => {
                _0x2b2950['resourceType']() === 'image' || _0x2b2950['resourceType']() === 'font' || _0x2b2950['resourceType']() === 'media' ? _0x2b2950['abort']() : _0x2b2950['continue']();
            }), await _0x5cb9dc['goto']('' + _0x22edb + _0x29b2b0), await _0x5cb9dc['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5cb9dc['type']('input[name=\x22email\x22]', '' + _0x97547b[_0x2b7a88]['Email']), await _0x4a1be2(0x640), await _0x5cb9dc['type']('input[name=\x22phone\x22]', '' + _0x97547b[_0x2b7a88]['Phone']), await _0x4a1be2(0x4b0), await _0x5cb9dc['click']('button.btn.continue-button__1RtsS'), await _0x4a1be2(0x4b0);
            try {
                await _0x5cb9dc['type']('input[name=\x22firstName\x22]', '' + _0x97547b[_0x2b7a88]['FirstName']), await _0x4a1be2(0x258);
            } catch {
                console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x20Duplicate\x20Entry'));
                continue;
            }
            await _0x5cb9dc['type']('input[name=\x22lastName\x22]', '' + _0x97547b[_0x2b7a88]['LastName']), await _0x4a1be2(0xc8), await _0x5cb9dc['type']('input[name=\x22instagramUsername\x22]', '' + _0x97547b[_0x2b7a88]['Follower']), await _0x4a1be2(0x4b0), await _0x5cb9dc['click']('button.btn.continue-button__1RtsS'), await _0x4a1be2(0x3e8), console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5cb9dc['select']('select[name=\x22country\x22]', '' + _0x97547b[_0x2b7a88]['Country']), await _0x4a1be2(0x2bc), await _0x5cb9dc['type']('input[name=\x22streetName\x22]', '' + _0x97547b[_0x2b7a88]['Address1']), await _0x4a1be2(0x258), await _0x5cb9dc['type']('input[name=\x22houseNumber\x22]', '' + _0x97547b[_0x2b7a88]['HouseNumber'] + _0x97547b[_0x2b7a88]['Address2']), await _0x4a1be2(0xc8), await _0x5cb9dc['type']('input[name=\x22postalCode\x22]', '' + _0x97547b[_0x2b7a88]['Zip']), await _0x4a1be2(0x1f4), await _0x5cb9dc['type']('input[name=\x22city\x22]', '' + _0x97547b[_0x2b7a88]['City']), await _0x4a1be2(0x4b0), await _0x5cb9dc['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x4a1be2(0x4b0), await _0x5cb9dc['click']('button.btn.continue-button__1RtsS'), await _0x4a1be2(0x4b0), console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5cb9dc['solveRecaptchas'](), console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x4a1be2(0xbb8), await _0x5cb9dc['click']('button.btn.continue-button__1RtsS'), await _0x4a1be2(0x1388), console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5cb9dc['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5cb9dc['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4a1be2(0x4b0), await _0x5cb9dc['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x97547b[_0x2b7a88]['CardNumber']), await _0x4a1be2(0x320), await _0x5cb9dc['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x97547b[_0x2b7a88]['ExpiryDate']), await _0x4a1be2(0x4b0), await _0x5cb9dc['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x97547b[_0x2b7a88]['CVV']), await _0x4a1be2(0x226), await _0x5cb9dc['type']('input[name=\x22holderName\x22]', '' + _0x97547b[_0x2b7a88]['NameOnCard']), await _0x4a1be2(0x226), await _0x5cb9dc['click']('button.adyen-checkout__button'), console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5cb9dc['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x4a1be2(0xbb8), console['log'](_0x25f83e['green'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch {
                console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x19dc8f) {
            console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x2b7a88 + 0x1) + '\x20:\x20' + _0x19dc8f);
        } finally {
            _0x2e1751['close'](), console['log']('Waiting\x20for\x20' + _0x54fd99['footshopDelay'] + '\x20ms'), await _0x4a1be2(_0x54fd99['footshopDelay']);
        }
    }
}
afewFunction = async (_0x47fa77, _0x21814b, _0x3503ed, _0x2616b0, _0xe69f44) => {
    for (var _0x5ea974 = 0x0; _0x5ea974 < _0x2616b0['length']; _0x5ea974++) {
        _0x504346(_0x3503ed['name'] + '\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20/\x20' + _0x2616b0['length'] + '\x20||\x20File:\x20' + _0x32d165 + '\x20Proxies:\x20' + _0x5baf1b), await _0x19a615(_0x2616b0, _0x5ea974);
        var _0xbd50fa = [{
            'type': 'rich',
            'title': 'Succesful\x20AFEW\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xdcde71
                },
                {
                    'name': 'Product',
                    'value': '' + _0x47fa77
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2616b0[_0x5ea974]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x54fd99['AfewDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3f4489
                }
            ]
        }];
        const _0x36e08f = { 'embeds': _0xbd50fa };
        if (_0x2616b0[_0x5ea974]['Email'] == '' || _0x2616b0[_0x5ea974]['FirstName'] == '' || _0x2616b0[_0x5ea974]['LastName'] == '' || _0x2616b0[_0x5ea974]['Country'] == '' || _0x2616b0[_0x5ea974]['Size'] == '' || _0x2616b0[_0x5ea974]['Address1'] == '' || _0x2616b0[_0x5ea974]['Zip'] == '') {
            console['log'](_0x22c21b() + '\x20[' + _0x3503ed['name'] + ']\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x54fd99['useRandomProxy'] = ![])
            var _0x3d1476 = _0xe69f44[_0x5ea974]['split'](':');
        else
            var _0x378d6a = Math['round'](Math['random']() * (_0xe69f44['length'] - 0x1)), _0x3d1476 = _0xe69f44[_0x378d6a]['split'](':');
        const _0x594677 = await _0x1e34c6['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3d1476[0x0] + ':' + _0x3d1476[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x51cf12 = await _0x594677['newPage']();
            await _0x51cf12['setDefaultNavigationTimeout'](0x1d4c0), await _0x51cf12['authenticate']({
                'username': '' + _0x3d1476[0x2],
                'password': '' + _0x3d1476[0x3]
            }), console['log'](_0x22c21b() + '\x20[' + _0x3503ed['name'] + ']\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x51cf12['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x51cf12['setRequestInterception'](!![]), _0x51cf12['on']('request', _0x2a8e1f => {
                _0x2a8e1f['resourceType']() === 'image' || _0x2a8e1f['resourceType']() === 'font' || _0x2a8e1f['resourceType']() === 'media' ? _0x2a8e1f['abort']() : _0x2a8e1f['continue']();
            }), await _0x51cf12['goto'](_0x47fa77, { 'waitUntil': 'networkidle2' }), console['log'](_0x22c21b() + '\x20[' + _0x3503ed['name'] + ']\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x51cf12['waitForTimeout'](0xfa0), console['log'](_0x22c21b() + '\x20[' + _0x3503ed['name'] + ']\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x51cf12['waitForTimeout'](0x320);
            if (_0x2616b0[_0x5ea974]['Size'] == 'RANDOM') {
                console['log'](_0x22c21b() + '\x20[' + _0x3503ed['name'] + ']\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x234906 = await _0x51cf12['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0xd70c79 => {
                    return _0xd70c79['map'](_0x504007 => _0x504007['href']);
                });
                var _0x5846b2 = Math['round'](Math['random']() * (_0x234906['length'] - 0x1));
                await _0x51cf12['goto']('' + _0x234906[_0x5846b2]);
            } else {
                console['log'](_0x22c21b() + '\x20[' + _0x3503ed['name'] + ']\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2616b0[_0x5ea974]['Size']);
                try {
                    const _0x29dcf7 = await _0x51cf12['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x2616b0[_0x5ea974]['Size'] + '\x22]\x20>\x20a', _0x10baf9 => {
                        return _0x10baf9['map'](_0x16f9f9 => _0x16f9f9['href']);
                    });
                    await _0x51cf12['goto']('' + _0x29dcf7[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x506fa7) {
                    console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x3503ed['name'] + ']\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20:\x20' + _0x506fa7 + '\x20Size\x20not\x20found')), _0xbd50fa[0x0]['title'] = 'Failed\x20entry', _0xbd50fa[0x0]['description'] = 'Size\x20not\x20found', await _0xbc69e3(_0x28c870, _0x36e08f);
                    continue;
                }
                try {
                    await _0x51cf12['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x2616b0[_0x5ea974]['Size'] + '\x22]'), await _0x51cf12['waitForTimeout'](0x320), await _0x51cf12['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x2616b0[_0x5ea974]['Size'] + '\x22]');
                } catch (_0x461f6b) {
                    console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x3503ed['name'] + ']\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20:\x20' + _0x461f6b + '\x20Size\x20not\x20found')), _0xbd50fa[0x0]['title'] = 'Failed\x20entry', _0xbd50fa[0x0]['description'] = 'Size\x20not\x20found', await _0xbc69e3(_0x28c870, _0x36e08f);
                    continue;
                }
            }
            await _0x51cf12['waitForTimeout'](0x258), await _0x51cf12['type']('#raffle-instagram', '' + _0x2616b0[_0x5ea974]['Follower'], { 'delay': 0x64 }), await _0x51cf12['waitForTimeout'](0x384), await _0x51cf12['click']('#raffle-terms'), await _0x51cf12['waitForTimeout'](0x384), await _0x51cf12['evaluate'](() => {
                const _0x16551f = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x16551f['click']();
            }), await _0x51cf12['waitForTimeout'](0xbb8), await _0x51cf12['waitForSelector']('#checkout_email'), await _0x4a1be2(0x3e8), console['log'](_0x22c21b() + '\x20[' + _0x3503ed['name'] + ']\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x21814b == 'sec' ? await _0x51cf12['type']('#checkout_email', '' + _0x2616b0[_0x5ea974]['FirstName'] + _0x2616b0[_0x5ea974]['LastName'] + _0x54fd99['catchall'], 0x32) : await _0x51cf12['type']('#checkout_email', '' + _0x2616b0[_0x5ea974]['Email'], 0x32);
            await _0x4a1be2(0x320), await _0x51cf12['select']('#checkout_shipping_address_country', '' + _0x2616b0[_0x5ea974]['Country']), await _0x51cf12['waitForTimeout'](0x258), await _0x51cf12['type']('#checkout_shipping_address_first_name', '' + _0x2616b0[_0x5ea974]['FirstName']), await _0x51cf12['waitForTimeout'](0x320), await _0x51cf12['type']('#checkout_shipping_address_last_name', '' + _0x2616b0[_0x5ea974]['LastName']), await _0x51cf12['waitForTimeout'](0x2bc), await _0x51cf12['type']('#checkout_shipping_address_address1', _0x2616b0[_0x5ea974]['Address1'] + '\x20' + _0x2616b0[_0x5ea974]['HouseNumber']), await _0x51cf12['waitForTimeout'](0x2bc), await _0x51cf12['type']('#checkout_shipping_address_address2', '' + _0x2616b0[_0x5ea974]['Address2']), await _0x51cf12['waitForTimeout'](0x2bc);
            _0x2616b0[_0x5ea974]['Postcode'] == undefined ? await _0x51cf12['type']('#checkout_shipping_address_zip', '' + _0x2616b0[_0x5ea974]['Zip']) : await _0x51cf12['type']('#checkout_shipping_address_zip', '' + _0x2616b0[_0x5ea974]['Postcode']);
            await _0x51cf12['waitForTimeout'](0x2bc), await _0x51cf12['type']('#checkout_shipping_address_city', '' + _0x2616b0[_0x5ea974]['City']), await _0x51cf12['waitForTimeout'](0x2bc), console['log'](_0x22c21b() + '\x20[' + _0x3503ed['name'] + ']\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x51cf12['evaluate'](() => {
                const _0x381630 = document['querySelector']('#continue_button');
                for (var _0x44e30d = 0x0; _0x44e30d < 0x5; _0x44e30d++) {
                    if (_0x381630) {
                        _0x381630['click']();
                        break;
                    } else
                        _0x4a1be2(0xfa0);
                }
            }), await _0x51cf12['waitForTimeout'](0x1194), await _0x51cf12['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), _0x51cf12['evaluate'](() => {
                const _0x142152 = document['querySelector']('#continue_button');
                for (var _0xdd64ee = 0x0; _0xdd64ee < 0x5; _0xdd64ee++) {
                    if (_0x142152) {
                        _0x142152['click']();
                        break;
                    } else
                        _0x4a1be2(0xfa0);
                }
            }), await _0x51cf12['waitForTimeout'](0x7d0), console['log'](_0x22c21b() + '\x20[' + _0x3503ed['name'] + ']\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x51cf12['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x51cf12['evaluate'](() => {
                const _0x3d55b5 = document['querySelector']('#continue_button');
                for (var _0x346cc4 = 0x0; _0x346cc4 < 0x5; _0x346cc4++) {
                    if (_0x3d55b5) {
                        _0x3d55b5['click']();
                        break;
                    } else
                        _0x4a1be2(0xfa0);
                }
            }), await _0x51cf12['waitForTimeout'](0x1194), await _0x51cf12['waitForSelector']('#continue_button'), _0x51cf12['evaluate'](() => {
                const _0x105fc2 = document['querySelector']('#continue_button');
                for (var _0x3d9126 = 0x0; _0x3d9126 < 0x5; _0x3d9126++) {
                    if (_0x105fc2) {
                        _0x105fc2['click']();
                        break;
                    } else
                        _0x4a1be2(0xfa0);
                }
            });
            try {
                await _0x51cf12['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x21e916) {
                console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x3503ed['name'] + ']\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x21e916));
            }
            console['log'](_0x25f83e['green'](_0x22c21b() + '\x20[' + _0x3503ed['name'] + ']\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0xbc69e3(_0x42d05c, _0x36e08f);
        } catch (_0x29f82a) {
            console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x3503ed['name'] + ']\x20Task\x20' + (_0x5ea974 + 0x1) + '\x20:\x20' + _0x29f82a)), _0xbd50fa[0x0]['title'] = 'Failed\x20entry', _0xbd50fa[0x0]['description'] = '' + _0x29f82a, await _0xbc69e3(_0x28c870, _0x36e08f);
        } finally {
            _0x594677 && _0x594677['close']();
            if (_0x5ea974 + 0x1 == _0x2616b0['length']) {
                console['log'](_0x25f83e['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x4a1be2(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x54fd99['AfewDelay'] + '\x20ms'), await _0x4a1be2(_0x54fd99['AfewDelay']);
        }
    }
};
async function _0x1b8dfd(_0x32bf44, _0x8df68, _0x21de4c) {
    _0x1e34c6['use'](_0x1ef3fb()), _0x1e34c6['use'](_0x2c2cfe({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x54fd99['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2dcc3f = 0x0; _0x2dcc3f < _0x21de4c['length']; _0x2dcc3f++) {
        await _0x19a615(_0x21de4c, _0x2dcc3f);
        if (_0x21de4c[_0x2dcc3f]['Email'] == '' || _0x21de4c[_0x2dcc3f]['Password'] == '' || _0x21de4c[_0x2dcc3f]['FirstName'] == '' || _0x21de4c[_0x2dcc3f]['LastName'] == '') {
            console['log'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x54fd99['useRandomProxy'] = ![])
            var _0x5bdf0d = _0xb281c5()[_0x2dcc3f]['split'](':');
        else
            var _0x30a104 = Math['round'](Math['random']() * (_0xb281c5()['length'] - 0x1)), _0x5bdf0d = _0xb281c5()[_0x30a104]['split'](':');
        const _0x552409 = await _0x1e34c6['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5bdf0d[0x0] + ':' + _0x5bdf0d[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x106483 = await _0x552409['newPage']();
            await _0x106483['authenticate']({
                'username': '' + _0x5bdf0d[0x2],
                'password': '' + _0x5bdf0d[0x3]
            }), console['log'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x106483['setRequestInterception'](!![]), _0x106483['on']('request', _0x4c26c0 => {
                _0x4c26c0['resourceType']() === 'image' || _0x4c26c0['resourceType']() === 'font' || _0x4c26c0['resourceType']() === 'media' ? _0x4c26c0['abort']() : _0x4c26c0['continue']();
            }), await _0x106483['goto'](_0x32bf44), await _0x4a1be2(0xbb8), console['log'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x106483['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x106483['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x106483['waitForSelector']('#button-register'), await _0x4a1be2(0x7d0), await _0x106483['evaluate'](() => {
                const _0x36107d = document['querySelector']('#button-register');
                _0x36107d['click']();
            }), console['log'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4a1be2(0x1388), await _0x106483['waitForSelector']('#customer_salutation'), await _0x106483['select']('#customer_salutation', 'mr'), await _0x4a1be2(0x7d0), await _0x106483['waitForSelector']('#customer_firstname'), await _0x106483['type']('#customer_firstname', '' + _0x21de4c[_0x2dcc3f]['FirstName']), await _0x4a1be2(0x352), await _0x106483['waitForSelector']('#customer_lastname'), await _0x106483['type']('#customer_lastname', '' + _0x21de4c[_0x2dcc3f]['LastName']), await _0x4a1be2(0x352), await _0x106483['type']('#email-input', '' + _0x21de4c[_0x2dcc3f]['Email']), await _0x4a1be2(0x352), await _0x106483['type']('#email-confirm-input', '' + _0x21de4c[_0x2dcc3f]['Email']), await _0x4a1be2(0x352), await _0x106483['type']('#register-password', '' + _0x21de4c[_0x2dcc3f]['Password']), await _0x4a1be2(0x352), await _0x106483['type']('#password-confirm', '' + _0x21de4c[_0x2dcc3f]['Password']), await _0x4a1be2(0x352), console['log'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x106483['click']('#consent'), await _0x4a1be2(0x1f4);
            const _0x171e02 = await _0x106483['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x171e02) {
                console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x106483['click']('#buttonRegister'), await _0x106483['waitForSelector']('#verificationCode'), console['log'](_0x25f83e['yellow'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20Account\x20' + _0x21de4c[_0x2dcc3f]['Email'] + '\x20Generated!')), console['log'](_0x25f83e['yellow'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await _0x4a1be2(0x4b0);
            async function _0x51ff38() {
                console['log'](_0x25f83e['yellow'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x363129 = await _0x159588['get']('Code');
                return _0x363129['Code'];
            }
            ;
            code = await _0x51ff38(), _0x4a1be2(0x320), console['log'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20Verifying..'), await _0x106483['type']('#verificationCode', code), await _0x4a1be2(0x1f4), await _0x106483['click']('#buttonVerify'), await _0x4a1be2(0x190), await _0x106483['click']('#buttonVerify'), await _0x4a1be2(0x3e8);
            try {
                await _0x106483['waitForSelector']('div.b-user_greeting'), console['log'](_0x25f83e['green'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20Account\x20' + _0x21de4c[_0x2dcc3f]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x55d88f['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x21de4c[_0x2dcc3f]['Email'] + ',' + _0x21de4c[_0x2dcc3f]['Password'] + ','), console['log'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20Account\x20' + _0x21de4c[_0x2dcc3f]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
            } catch {
                console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x5a4bd6) {
            console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x8df68['name'] + ']\x20Task\x20' + (_0x2dcc3f + 0x1) + '\x20:\x20' + _0x5a4bd6));
        } finally {
            _0x552409 && _0x552409['close'](), console['log']('Waiting\x20for\x20' + _0x54fd99['AfewDelay'] + '\x20ms'), await _0x4a1be2(_0x54fd99['AfewDelay']);
        }
    }
}
async function _0x78bf31(_0x5150e0, _0x3a0b88) {
    _0x1e34c6['use'](_0x1ef3fb()), _0x1e34c6['use'](_0x2c2cfe({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x54fd99['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x47b245 = 0x0; _0x47b245 < _0x3a0b88['length']; _0x47b245++) {
        await _0x19a615(_0x3a0b88, _0x47b245);
        if (_0x3a0b88[_0x47b245]['Email'] == '' || _0x3a0b88[_0x47b245]['Password'] == '' || _0x3a0b88[_0x47b245]['FirstName'] == '' || _0x3a0b88[_0x47b245]['LastName'] == '') {
            console['log'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x54fd99['useRandomProxy'] = ![])
            var _0x452c28 = _0xb281c5()[_0x47b245]['split'](':');
        else
            var _0x174160 = Math['round'](Math['random']() * (_0xb281c5()['length'] - 0x1)), _0x452c28 = _0xb281c5()[_0x174160]['split'](':');
        const _0x430349 = await _0x1e34c6['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x452c28[0x0] + ':' + _0x452c28[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x46156d = await _0x430349['newPage']();
            await _0x46156d['authenticate']({
                'username': '' + _0x452c28[0x2],
                'password': '' + _0x452c28[0x3]
            }), console['log'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x46156d['setRequestInterception'](!![]), _0x46156d['on']('request', _0x456244 => {
                _0x456244['resourceType']() === 'image' || _0x456244['resourceType']() === 'font' || _0x456244['resourceType']() === 'media' ? _0x456244['abort']() : _0x456244['continue']();
            }), await _0x46156d['goto']('https://www.kickz.com/nl/login/'), await _0x4a1be2(0xbb8), console['log'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20Logging\x20in'), await _0x46156d['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x46156d['click']('#consent-dialog\x20>\x20section\x20>\x20button'), console['log'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4a1be2(0x1388), await _0x46156d['waitForSelector']('#customer_salutation'), await _0x46156d['select']('#customer_salutation', 'mr'), await _0x4a1be2(0x7d0), await _0x46156d['waitForSelector']('#customer_firstname'), await _0x46156d['type']('#customer_firstname', '' + _0x3a0b88[_0x47b245]['FirstName']), await _0x4a1be2(0x352), await _0x46156d['waitForSelector']('#customer_lastname'), await _0x46156d['type']('#customer_lastname', '' + _0x3a0b88[_0x47b245]['LastName']), await _0x4a1be2(0x352), await _0x46156d['type']('#email-input', '' + _0x3a0b88[_0x47b245]['Email']), await _0x4a1be2(0x352), await _0x46156d['type']('#email-confirm-input', '' + _0x3a0b88[_0x47b245]['Email']), await _0x4a1be2(0x352), await _0x46156d['type']('#register-password', '' + _0x3a0b88[_0x47b245]['Password']), await _0x4a1be2(0x352), await _0x46156d['type']('#password-confirm', '' + _0x3a0b88[_0x47b245]['Password']), await _0x4a1be2(0x352), console['log'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x46156d['click']('#consent'), await _0x4a1be2(0x1f4);
            const _0x1276af = await _0x46156d['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x1276af) {
                console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x46156d['click']('#buttonRegister'), await _0x46156d['waitForSelector']('#verificationCode'), console['log'](_0x25f83e['yellow'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20Account\x20' + _0x3a0b88[_0x47b245]['Email'] + '\x20Generated!')), console['log'](_0x25f83e['yellow'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20Waiting\x20for\x20Verification\x20code')), await _0x4a1be2(0x4b0);
            async function _0x426be9() {
                console['log'](_0x25f83e['yellow'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x3fd375 = await _0x159588['get']('Code');
                return _0x3fd375['Code'];
            }
            ;
            code = await _0x426be9(), _0x4a1be2(0x320), console['log'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20Verifying..'), await _0x46156d['type']('#verificationCode', code), await _0x4a1be2(0x1f4), await _0x46156d['click']('#buttonVerify'), await _0x4a1be2(0x190), await _0x46156d['click']('#buttonVerify'), await _0x4a1be2(0x3e8);
            try {
                await _0x46156d['waitForSelector']('div.b-user_greeting'), console['log'](_0x25f83e['green'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20Account\x20' + _0x3a0b88[_0x47b245]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x55d88f['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x3a0b88[_0x47b245]['Email'] + ',' + _0x3a0b88[_0x47b245]['Password'] + ','), console['log'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20Account\x20' + _0x3a0b88[_0x47b245]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
            } catch {
                console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x143947) {
            console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x5150e0['name'] + ']\x20Task\x20' + (_0x47b245 + 0x1) + '\x20:\x20' + _0x143947));
        } finally {
            _0x430349 && _0x430349['close'](), console['log']('Waiting\x20for\x20' + _0x54fd99['AfewDelay'] + '\x20ms'), await _0x4a1be2(_0x54fd99['AfewDelay']);
        }
    }
}
async function _0x3684a2(_0x419f2a, _0x222f09) {
    _0x1e34c6['use'](_0x1ef3fb()), _0x1e34c6['use'](_0x2c2cfe({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x54fd99['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1ec05e = 0x0; _0x1ec05e < bouncewear['length']; _0x1ec05e++) {
        await _0x19a615(bouncewear, _0x1ec05e);
        if (bouncewear[_0x1ec05e]['Email'] == '' || bouncewear[_0x1ec05e]['Password'] == '' || bouncewear[_0x1ec05e]['FirstName'] == '' || bouncewear[_0x1ec05e]['LastName'] == '') {
            console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x1ec05e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x54fd99['useRandomProxy'] = ![])
            var _0x5cb96f = _0xb281c5()[_0x1ec05e]['split'](':');
        else
            var _0x530f2f = Math['round'](Math['random']() * (_0xb281c5()['length'] - 0x1)), _0x5cb96f = _0xb281c5()[_0x530f2f]['split'](':');
        const _0x4f8f57 = await _0x1e34c6['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5cb96f[0x0] + ':' + _0x5cb96f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3bd5aa = await _0x4f8f57['newPage']();
            await _0x3bd5aa['authenticate']({
                'username': '' + _0x5cb96f[0x2],
                'password': '' + _0x5cb96f[0x3]
            }), console['log'](_0x22c21b() + '\x20[' + _0x222f09['name'] + ']\x20Task\x20' + (_0x1ec05e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3bd5aa['setRequestInterception'](!![]), _0x3bd5aa['on']('request', _0x4a78a2 => {
                _0x4a78a2['resourceType']() === 'image' || _0x4a78a2['resourceType']() === 'font' || _0x4a78a2['resourceType']() === 'media' ? _0x4a78a2['abort']() : _0x4a78a2['continue']();
            }), await _0x3bd5aa['goto'](_0x419f2a), await _0x4a1be2(0xbb8), await _0x3bd5aa['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x22c21b() + '\x20[' + _0x222f09['name'] + ']\x20Task\x20' + (_0x1ec05e + 0x1) + '\x20:\x20Filling\x20information'), await _0x3bd5aa['type']('#RegisterForm-FirstName', '' + bouncewear[_0x1ec05e]['FirstName']), await _0x4a1be2(0x226), await _0x3bd5aa['type']('#RegisterForm-LastName', '' + bouncewear[_0x1ec05e]['LastName']), await _0x4a1be2(0x226), await _0x3bd5aa['type']('#RegisterForm-email', '' + bouncewear[_0x1ec05e]['Email']), await _0x4a1be2(0x226), await _0x3bd5aa['type']('#RegisterForm-password', '' + bouncewear[_0x1ec05e]['Password']), await _0x4a1be2(0x226), await _0x3bd5aa['click']('#marketing'), console['log'](_0x22c21b() + '\x20[' + _0x222f09['name'] + ']\x20Task\x20' + (_0x1ec05e + 0x1) + '\x20:\x20Submitting..'), await _0x3bd5aa['$eval']('#RegisterForm', _0x2b4224 => _0x2b4224['submit']()), await _0x4a1be2(0x1f40), console['log'](_0x22c21b() + '\x20[' + _0x222f09['name'] + ']\x20Task\x20' + (_0x1ec05e + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x3bd5aa['solveRecaptchas'](), await _0x3bd5aa['click']('.shopify-challenge__button.btn');
            async function _0x1f45b2() {
                for (var _0x3a1f43 = 0x0; _0x3a1f43 < 0x4; _0x3a1f43++) {
                    try {
                        console['log']('try'), await _0x3bd5aa['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x22c21b() + '\x20[' + _0x222f09['name'] + ']\x20Task\x20' + (_0x1ec05e + 0x1) + '\x20:\x20' + _0x25f83e['red']('Catpcha\x20failed,\x20retrying..')), await _0x3bd5aa['solveRecaptchas'](), await _0x3bd5aa['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x1f45b2(), console['log'](_0x22c21b() + '\x20[' + _0x222f09['name'] + ']\x20Task\x20' + (_0x1ec05e + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x4a1be2(0x1f4);
            try {
                await _0x3bd5aa['waitForSelector']('.featured-title'), await _0x4a1be2(0x1f4), console['log'](_0x25f83e['green'](_0x22c21b() + '\x20[' + _0x222f09['name'] + ']\x20Task\x20' + (_0x1ec05e + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1ec05e]['Email'] + '\x20Generated!')), _0x55d88f['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x1ec05e]['Email'] + ',' + bouncewear[_0x1ec05e]['Password']), console['log'](_0x25f83e['yellow'](_0x22c21b() + '\x20[' + _0x222f09['name'] + ']\x20Task\x20' + (_0x1ec05e + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1ec05e]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x1c16c9) {
                console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x1ec05e + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1c16c9));
            }
        } catch (_0x4b406e) {
            console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x1ec05e + 0x1) + '\x20:\x20' + _0x4b406e));
        } finally {
            _0x4f8f57 && _0x4f8f57['close'](), console['log']('Waiting\x20for\x20' + _0x54fd99['delay'] + '\x20ms'), await _0x4a1be2(_0x54fd99['delay']);
        }
    }
}
async function _0x2899a6(_0x5f5a21, _0x3a79bc, _0x3f7273, _0x376028) {
    _0x1e34c6['use'](_0x1ef3fb()), _0x1e34c6['use'](_0x2c2cfe({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x54fd99['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x566c35 = 0x0; _0x566c35 < _0x3f7273['length']; _0x566c35++) {
        _0x504346(_0x3a79bc['name'] + '\x20Task\x20' + (_0x566c35 + 0x1) + '\x20/\x20' + _0x3f7273['length'] + '\x20||\x20File:\x20' + _0x32d165 + '\x20Proxies:\x20' + _0x5baf1b), await _0x19a615(_0x3f7273, _0x566c35);
        if (_0x3f7273[_0x566c35]['Email'] == '' || _0x3f7273[_0x566c35]['Password'] == '' || _0x3f7273[_0x566c35]['Password'] == undefined || _0x3f7273[_0x566c35]['FirstName'] == '' || _0x3f7273[_0x566c35]['LastName'] == '') {
            console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x566c35 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x54fd99['useRandomProxy'] = ![])
            var _0x318827 = _0x376028[_0x566c35]['split'](':');
        else
            var _0x12e90 = Math['round'](Math['random']() * (_0x376028['length'] - 0x1)), _0x318827 = _0x376028[_0x12e90]['split'](':');
        const _0x242d4b = await _0x1e34c6['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x318827[0x0] + ':' + _0x318827[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x81bf76 = await _0x242d4b['newPage']();
            await _0x81bf76['authenticate']({
                'username': '' + _0x318827[0x2],
                'password': '' + _0x318827[0x3]
            }), console['log'](_0x22c21b() + '\x20[' + _0x3a79bc['name'] + ']\x20Task\x20' + (_0x566c35 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x81bf76['setRequestInterception'](!![]), _0x81bf76['on']('request', _0xde2f66 => {
                _0xde2f66['resourceType']() === 'image' || _0xde2f66['resourceType']() === 'font' || _0xde2f66['resourceType']() === 'media' ? _0xde2f66['abort']() : _0xde2f66['continue']();
            }), await _0x81bf76['goto'](_0x5f5a21), await _0x4a1be2(0xbb8), await _0x81bf76['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x22c21b() + '\x20[' + _0x3a79bc['name'] + ']\x20Task\x20' + (_0x566c35 + 0x1) + '\x20:\x20Filling\x20information'), await _0x81bf76['type']('#RegisterForm-FirstName', '' + _0x3f7273[_0x566c35]['FirstName']), await _0x4a1be2(0x226), await _0x81bf76['type']('#RegisterForm-LastName', '' + _0x3f7273[_0x566c35]['LastName']), await _0x4a1be2(0x226), await _0x81bf76['type']('#RegisterForm-email', '' + _0x3f7273[_0x566c35]['Email']), await _0x4a1be2(0x226), await _0x81bf76['type']('#RegisterForm-password', '' + _0x3f7273[_0x566c35]['Password']), await _0x4a1be2(0x226), console['log'](_0x22c21b() + '\x20[' + _0x3a79bc['name'] + ']\x20Task\x20' + (_0x566c35 + 0x1) + '\x20:\x20Submitting..'), await _0x81bf76['$eval']('#RegisterForm', _0x3f6807 => _0x3f6807['submit']()), await _0x4a1be2(0x1f40);
            try {
                await _0x81bf76['waitForSelector']('.home-page-grid__collection'), await _0x4a1be2(0x1f4), console['log'](_0x25f83e['green'](_0x22c21b() + '\x20[' + _0x3a79bc['name'] + ']\x20Task\x20' + (_0x566c35 + 0x1) + '\x20:\x20Account\x20' + _0x3f7273[_0x566c35]['Email'] + '\x20Generated!')), _0x55d88f['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x3f7273[_0x566c35]['Email'] + ',' + _0x3f7273[_0x566c35]['Password']), console['log'](_0x25f83e['yellow'](_0x22c21b() + '\x20[' + _0x3a79bc['name'] + ']\x20Task\x20' + (_0x566c35 + 0x1) + '\x20:\x20Account\x20' + _0x3f7273[_0x566c35]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
            } catch (_0x284821) {
                console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x566c35 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x284821));
            }
        } catch (_0x30af1e) {
            console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x566c35 + 0x1) + '\x20:\x20' + _0x30af1e));
        } finally {
            _0x242d4b && _0x242d4b['close'](), console['log']('Waiting\x20for\x20' + _0x54fd99['delay'] + '\x20ms'), await _0x4a1be2(_0x54fd99['delay']);
        }
    }
}
async function _0x43510c(_0x8dd322, _0x59362d, _0x2458d2, _0x12e55e) {
    _0x1e34c6['use'](_0x1ef3fb()), _0x1e34c6['use'](_0x2c2cfe({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x54fd99['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3e9cde = 0x0; _0x3e9cde < _0x2458d2['length']; _0x3e9cde++) {
        _0x504346(_0x59362d['name'] + '\x20Task\x20' + (_0x3e9cde + 0x1) + '\x20/\x20' + _0x2458d2['length'] + '\x20||\x20File:\x20' + _0x32d165 + '\x20Proxies:\x20' + _0x5baf1b), await _0x19a615(_0x2458d2, _0x3e9cde);
        if (_0x2458d2[_0x3e9cde]['Email'] == '' || _0x2458d2[_0x3e9cde]['Password'] == '' || _0x2458d2[_0x3e9cde]['FirstName'] == '' || _0x2458d2[_0x3e9cde]['LastName'] == '') {
            console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x3e9cde + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x54fd99['useRandomProxy'] = ![])
            var _0x4d181b = _0x12e55e[_0x3e9cde]['split'](':');
        else
            var _0x13e1a9 = Math['round'](Math['random']() * (_0x12e55e['length'] - 0x1)), _0x4d181b = _0x12e55e[_0x13e1a9]['split'](':');
        const _0x4411d9 = await _0x1e34c6['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4d181b[0x0] + ':' + _0x4d181b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x157921 = await _0x4411d9['newPage']();
            await _0x157921['authenticate']({
                'username': '' + _0x4d181b[0x2],
                'password': '' + _0x4d181b[0x3]
            }), console['log'](_0x22c21b() + '\x20[' + _0x59362d['name'] + ']\x20Task\x20' + (_0x3e9cde + 0x1) + '\x20:\x20Getting\x20Session'), await _0x157921['setRequestInterception'](!![]), _0x157921['on']('request', _0x3f54be => {
                _0x3f54be['resourceType']() === 'image' || _0x3f54be['resourceType']() === 'font' || _0x3f54be['resourceType']() === 'media' ? _0x3f54be['abort']() : _0x3f54be['continue']();
            }), await _0x157921['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x157921['waitForSelector']('#CustomerEmail'), console['log'](_0x22c21b() + '\x20[' + _0x59362d['name'] + ']\x20Task\x20' + (_0x3e9cde + 0x1) + '\x20:\x20Logging\x20in..'), await _0x157921['type']('#CustomerEmail', '' + _0x2458d2[_0x3e9cde]['Email']), await _0x4a1be2(0x12c), await _0x157921['type']('#CustomerPassword', '' + _0x2458d2[_0x3e9cde]['Password']), await _0x4a1be2(0x226), await _0x157921['$eval']('#customer_login', _0x4da8a1 => _0x4da8a1['submit']());
            try {
                await _0x157921['waitForSelector']('#orders'), await _0x4a1be2(0x4b0);
            } catch {
                console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x59362d['name'] + ']\x20Task\x20' + (_0x3e9cde + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x157921['goto']('' + _0x2458d2[_0x3e9cde]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4a1be2(0xbb8), console['log'](_0x22c21b() + '\x20[' + _0x59362d['name'] + ']\x20Task\x20' + (_0x3e9cde + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x157921['waitForSelector']('#email');
            } catch {
                console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x59362d['name'] + ']\x20Task\x20' + (_0x3e9cde + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x157921['type']('#email', '' + _0x2458d2[_0x3e9cde]['Email']), await _0x4a1be2(0x384), await _0x157921['type']('#first_name', '' + _0x2458d2[_0x3e9cde]['FirstName']), await _0x4a1be2(0x514), await _0x157921['type']('#last_name', '' + _0x2458d2[_0x3e9cde]['LastName']), await _0x4a1be2(0x514), await _0x157921['type']('#street_address', _0x2458d2[_0x3e9cde]['Address1'] + '\x20' + _0x2458d2[_0x3e9cde]['HouseNumber'] + '\x20' + _0x2458d2[_0x3e9cde]['Address2']), await _0x4a1be2(0x2bc), await _0x157921['type']('#zip_code', '' + _0x2458d2[_0x3e9cde]['Postcode']), await _0x4a1be2(0x320), await _0x157921['type']('#city', '' + _0x2458d2[_0x3e9cde]['City']), await _0x4a1be2(0x320), await _0x157921['type']('#bday', '' + _0x2458d2[_0x3e9cde]['Bday']), await _0x4a1be2(0x320), await _0x157921['type']('#instagram', '' + _0x2458d2[_0x3e9cde]['Follower']), await _0x4a1be2(0x352);
            if (_0x2458d2[_0x3e9cde]['Size'] == 'RANDOM') {
                const _0x249be1 = await _0x157921['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0xbe46b4 => {
                    return _0xbe46b4['map'](_0x5ace1e => _0x5ace1e['textContent']);
                });
                var _0x5b72ca = Math['round'](Math['random']() * (_0x249be1['length'] - 0x1));
                console['log'](_0x22c21b() + '\x20[' + _0x59362d['name'] + ']\x20Task\x20' + (_0x3e9cde + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x249be1[_0x5b72ca]), await _0x157921['click']('label[data-eu-size=\x22' + _0x249be1[_0x5b72ca] + '\x22]');
            } else {
                console['log'](_0x22c21b() + '\x20[' + _0x59362d['name'] + ']\x20Task\x20' + (_0x3e9cde + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x2458d2[_0x3e9cde]['Size']);
                try {
                    await _0x157921['click']('label[data-eu-size=\x22' + _0x2458d2[_0x3e9cde]['Size'] + '\x22]');
                } catch {
                    await _0x157921['click']('label[data-eu-size=\x22' + _0x2458d2[_0x3e9cde]['Size'] + '.0\x22]');
                }
            }
            await _0x4a1be2(0xbb8), await _0x157921['$$eval']('.raffle__checkbox-label', _0x1c9e02 => _0x1c9e02['forEach'](_0x5c23ee => _0x5c23ee['click']())), await _0x4a1be2(0x7d0), console['log'](_0x22c21b() + '\x20[' + _0x59362d['name'] + ']\x20Task\x20' + (_0x3e9cde + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x157921['click']('#raffle__form-submit'), await _0x4a1be2(0x1388);
            try {
                await _0x157921['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x25f83e['green'](_0x22c21b() + '\x20[' + _0x59362d['name'] + ']\x20Task\x20' + (_0x3e9cde + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x43e725) {
                console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x3e9cde + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x43e725));
            }
        } catch (_0xc45b58) {
            console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x3e9cde + 0x1) + '\x20:\x20' + _0xc45b58));
        } finally {
            _0x4411d9 && _0x4411d9['close'](), console['log']('Waiting\x20for\x20' + _0x54fd99['delay'] + '\x20ms'), await _0x4a1be2(_0x54fd99['delay']);
        }
    }
}
async function _0x55fa02(_0x276aee, _0x306058, _0xafaddd) {
    var _0x37c7e6 = ![], _0x5014c8 = ![];
    _0x1e34c6['use'](_0x1ef3fb()), _0x1e34c6['use'](_0x2c2cfe({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x54fd99['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x263ba3 = 0x0; _0x263ba3 < _0x306058['length']; _0x263ba3++) {
        var _0x42d764 = [{
            'type': 'rich',
            'title': 'Succesfull\x20Entry',
            'description': '' + _0x276aee['name'],
            'color': 0xc0d6d6,
            'url': '',
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xdcde71
                },
                {
                    'name': 'Product',
                    'value': '' + _0x306058[_0x263ba3]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x306058[_0x263ba3]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x54fd99['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3f4489
                }
            ]
        }];
        const _0x722369 = { 'embeds': _0x42d764 };
        _0x504346(_0x276aee['name'] + '\x20Task\x20' + (_0x263ba3 + 0x1) + '\x20/\x20' + _0x306058['length'] + '\x20||\x20File:\x20' + _0x32d165 + '\x20Proxies:\x20' + _0x5baf1b), await _0x19a615(_0x306058, _0x263ba3);
        if (_0x306058[_0x263ba3]['Email'] == '' || _0x306058[_0x263ba3]['Url'] == '' || _0x306058[_0x263ba3]['FirstName'] == '' || _0x306058[_0x263ba3]['LastName'] == '') {
            console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x263ba3 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x54fd99['useRandomProxy'] = ![])
            var _0x66163 = _0xafaddd[_0x263ba3]['split'](':');
        else
            var _0x54b8f6 = Math['round'](Math['random']() * (_0xafaddd['length'] - 0x1)), _0x66163 = _0xafaddd[_0x54b8f6]['split'](':');
        const _0x33ef87 = await _0x1e34c6['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x66163[0x0] + ':' + _0x66163[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4ad22a = await _0x33ef87['newPage']();
            await _0x4ad22a['authenticate']({
                'username': '' + _0x66163[0x2],
                'password': '' + _0x66163[0x3]
            }), console['log'](_0x22c21b() + '\x20[' + _0x276aee['name'] + ']\x20Task\x20' + (_0x263ba3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4ad22a['setRequestInterception'](!![]), _0x4ad22a['on']('request', _0x2011f2 => {
                _0x2011f2['resourceType']() === 'image' || _0x2011f2['resourceType']() === 'font' || _0x2011f2['resourceType']() === 'media' ? _0x2011f2['abort']() : _0x2011f2['continue']();
            }), await _0x4ad22a['goto']('' + _0x306058[_0x263ba3]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](_0x22c21b() + '\x20[' + _0x276aee['name'] + ']\x20Task\x20' + (_0x263ba3 + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x4ad22a['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x4ad22a['type']('#comp_firstname', '' + _0x306058[_0x263ba3]['FirstName']), await _0x4ad22a['waitForSelector']('#comp_lastname'), await _0x4ad22a['type']('#comp_lastname', '' + _0x306058[_0x263ba3]['LastName']), await _0x4ad22a['waitForSelector']('#comp_email'), await _0x4ad22a['type']('#comp_email', '' + _0x306058[_0x263ba3]['Email']), await _0x4ad22a['waitForSelector']('#comp_paypalemail'), await _0x4ad22a['type']('#comp_paypalemail', '' + _0x306058[_0x263ba3]['Email']), await _0x4ad22a['waitForSelector']('#comp_mobile_end'), await _0x4ad22a['type']('#comp_mobile_end', '' + _0x306058[_0x263ba3]['Phone']), await _0x4ad22a['waitForSelector']('#comp_dob'), await _0x4ad22a['type']('#comp_dob', '08/09/1992'), console['log'](_0x22c21b() + '\x20[' + _0x276aee['name'] + ']\x20Task\x20' + (_0x263ba3 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x306058[_0x263ba3]['Size'] == 'RANDOM') {
                const _0x4c4aba = await _0x4ad22a['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x56afc1 => {
                    return _0x56afc1['map'](_0x58d4d6 => _0x58d4d6['value']);
                });
                var _0x459110 = Math['round'](Math['random']() * (_0x4c4aba['length'] - 0x2));
                await _0x4ad22a['select']('#shoesize', _0x4c4aba[_0x459110 + 0x1]), await _0x4a1be2(0x3e8);
            } else {
                const _0x2e5650 = await _0x4ad22a['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x331144 => {
                    return _0x331144['map'](_0x375a8e => _0x375a8e['innerText']);
                }), _0x109137 = await _0x4ad22a['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x47c6a9 => {
                    return _0x47c6a9['map'](_0x507315 => _0x507315['value']);
                });
                var _0x251ab8 = _0x306058[_0x263ba3]['Size'];
                for (var _0x166dd4 = 0x1; _0x166dd4 < _0x109137['length']; _0x166dd4++) {
                    var _0x15b809 = _0x2e5650[_0x166dd4]['split']('\x20')[0x0];
                    if (_0x15b809 == _0x251ab8) {
                        await _0x4ad22a['select']('#shoesize', _0x109137[_0x166dd4]);
                        break;
                    } else {
                        if (_0x166dd4 + 0x1 == _0x109137['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x4ad22a['waitForSelector']('#comp_address1'), await _0x4ad22a['type']('#comp_address1', _0x306058[_0x263ba3]['Address1'] + '\x20' + _0x306058[_0x263ba3]['HouseNumber']), await _0x4ad22a['waitForSelector']('#comp_address2'), await _0x4ad22a['type']('#comp_address2', '' + _0x306058[_0x263ba3]['Address2']), await _0x4ad22a['waitForSelector']('#comp_address2'), await _0x4ad22a['type']('#comp_address3', '' + _0x306058[_0x263ba3]['City']), await _0x4ad22a['waitForSelector']('#comp_postcode'), await _0x4ad22a['type']('#comp_postcode', '' + _0x306058[_0x263ba3]['Zip']), console['log'](_0x22c21b() + '\x20[' + _0x276aee['name'] + ']\x20Task\x20' + (_0x263ba3 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4a1be2(0x4b0), await _0x4ad22a['click']('label#emailhold'), await _0x4a1be2(0x5dc), await _0x4ad22a['click']('#preauth_tandc_email\x20>\x20label'), await _0x4a1be2(0x5dc), await _0x4ad22a['click']('#submit'), await _0x4ad22a['waitForSelector']('#paymentWrap'), console['log'](_0x22c21b() + '\x20[' + _0x276aee['name'] + ']\x20Task\x20' + (_0x263ba3 + 0x1) + '\x20:\x20' + _0x25f83e['blue']('Awaiting\x20Paypal\x20Payment')), _0x33ef87['on']('targetcreated', async _0x2b2827 => {
                if (_0x2b2827['type']() === 'page') {
                    const _0x1c943a = await _0x2b2827['page']();
                    async function _0x1a78cc() {
                        try {
                            await _0x4ad22a['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x5014c8 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x273f5d() {
                        try {
                            await _0x4ad22a['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x37c7e6 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x273f5d(), _0x1a78cc(), await _0x4a1be2(0x493e0);
                }
            });
            async function _0x451a8d() {
                for (let _0x21fee3 = 0x0; _0x21fee3 < 0x12c; _0x21fee3++) {
                    if (_0x37c7e6 == !![]) {
                        console['log'](_0x25f83e['green'](_0x22c21b() + '\x20[' + _0x276aee['name'] + ']\x20Task\x20' + (_0x263ba3 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0xbc69e3(_0x42d05c, _0x722369);
                        return;
                    } else {
                        if (_0x5014c8)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x4a1be2(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x4a1be2(0xbb8), await _0x4ad22a['click']('.zoid-outlet'), await _0x4a1be2(0x7d0), await _0x451a8d();
        } catch (_0x4e7320) {
            console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x276aee['name'] + ']\x20Task\x20' + (_0x263ba3 + 0x1) + '\x20:\x20' + _0x4e7320)), _0x42d764[0x0]['title'] = 'Failed\x20entry', _0x42d764[0x0]['description'] = _0x276aee['name'] + ':\x20' + _0x4e7320, await _0xbc69e3(_0x28c870, _0x722369);
        } finally {
            _0x33ef87 && _0x33ef87['close'](), console['log']('Waiting\x20for\x20' + _0x54fd99['delay'] + '\x20ms'), await _0x4a1be2(_0x54fd99['delay']);
        }
    }
}
async function _0x3e9e7e(_0x318f23, _0x30be2c, _0xb3cb5f, _0x1f5791) {
    var _0x43d54f = {}, _0xb15847 = [], _0x4dacbf = {}, _0x1c3c6b = [
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
    !_0x1f5791 && (_0x1f5791 = {});
    if (_0x30be2c != 'ver') {
        _0x504346(_0xb3cb5f['name'] + '\x20Task\x20' + (_0x318f23 + 0x1) + '\x20/\x20' + _0x1f5791['length'] + '\x20||\x20File:\x20' + _0x32d165 + '\x20Proxies:\x20' + _0x5baf1b), await _0x19a615(_0x1f5791, _0x318f23), _0xb15847 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xdcde71
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1f5791[_0x318f23]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x54fd99['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3f4489
                }
            ]
        }], _0x4dacbf = { 'embeds': _0xb15847 }, _0x43d54f = _0xb3cb5f['data'];
        _0x30be2c == 'exp' ? _0x43d54f['data']['attributes']['email'] = '' + _0x1f5791[_0x318f23]['FirstName'] + _0x1f5791[_0x318f23]['LastName'] + _0x54fd99['catchall'] : _0x43d54f['data']['attributes']['email'] = '' + _0x1f5791[_0x318f23]['Email'];
        if (_0x1f5791[_0x318f23]['Size'] == 'RANDOM') {
        }
        _0x43d54f['data']['attributes']['properties']['$first_name'] = '' + _0x1f5791[_0x318f23]['FirstName'], _0x43d54f['data']['attributes']['properties']['$last_name'] = '' + _0x1f5791[_0x318f23]['LastName'], _0x43d54f['data']['attributes']['properties']['$address1'] = _0x1f5791[_0x318f23]['Address1'] + '\x20' + _0x1f5791[_0x318f23]['Address2'] + '\x20' + _0x1f5791[_0x318f23]['HouseNumber'], _0x43d54f['data']['attributes']['properties']['$zip'] = '' + _0x1f5791[_0x318f23]['Zip'], _0x43d54f['data']['attributes']['properties']['$city'] = '' + _0x1f5791[_0x318f23]['City'], _0x43d54f['data']['attributes']['properties']['$country'] = '' + _0x1f5791[_0x318f23]['Country'], _0x43d54f['data']['attributes']['properties']['Size'] = '' + _0x1f5791[_0x318f23]['Size'], _0x43d54f['data']['attributes']['properties']['$phone_number'] = '' + _0x1f5791[_0x318f23]['Phone'], _0x43d54f['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x1f5791[_0x318f23]['Follower'];
    }
    if (_0x54fd99['useRandomProxy'] = ![])
        var _0xf0eb63 = _0xb281c5()[_0x318f23]['split'](':');
    else
        var _0x4ea65b = Math['round'](Math['random']() * (_0xb281c5()['length'] - 0x1)), _0xf0eb63 = _0xb281c5()[_0x4ea65b]['split'](':');
    var _0x2f3276 = {
        'jar': _0x31f3d5,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0xb3cb5f['url'],
        'headers': _0xb3cb5f['headers'],
        'body': JSON['stringify'](_0x43d54f),
        'proxy': 'http://' + _0xf0eb63[0x2] + ':' + _0xf0eb63[0x3] + '@' + _0xf0eb63[0x0] + ':' + _0xf0eb63[0x1]
    };
    return _0x30be2c != 'ver' && (_0x2f3276['url'] = _0xb3cb5f['url'], _0x2f3276['headers'] = _0xb3cb5f['headers']), _0x30be2c == 'ver' && (_0x2f3276['method'] = 'GET'), new Promise(function (_0x75eb14, _0x4b3087) {
        callback = async (_0x2ed72b, _0x480287, _0x48685f) => {
            !_0x2ed72b && _0x480287['statusCode'] == 0xca || !_0x2ed72b && _0x480287['statusCode'] == 0xc8 ? (_0x30be2c != 'ver' && await _0xbc69e3(_0x42d05c, _0x4dacbf), _0x75eb14(console['log'](_0x25f83e['green'](_0x22c21b() + '\x20[' + _0xb3cb5f['name'] + ']\x20Task\x20' + (_0x318f23 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x30be2c != 'ver' && (_0xb15847[0x0]['title'] = 'Failed\x20entry', _0xb15847[0x0]['description'] = '' + _0x2ed72b, await _0xbc69e3(_0x28c870, _0x4dacbf)), _0x4b3087(console['log'](_0x22c21b() + '\x20[' + _0xb3cb5f['name'] + ']\x20Task\x20' + (_0x318f23 + 0x1) + ':\x20' + _0x2ed72b)));
        };
        try {
            _0x30be2c != 'ver' && console['log'](_0x22c21b() + '\x20[' + _0xb3cb5f['name'] + ']\x20Task\x20' + (_0x318f23 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x43d54f['data']['attributes']['email']), _0x2fa97e(_0x2f3276, callback);
        } catch (_0x32b032) {
            console['log'](_0x22c21b() + '\x20Task\x20' + (_0x318f23 + 0x1) + ':\x20' + _0x32b032);
        }
    });
}
;
async function _0x141f37() {
    await _0x449b37(), console['clear']();
    if (_0x3f4489 != 'devkey') {
        let _0x182b0 = await _0x42667c['autoUpdate']();
        if (_0x182b0 === 'yes')
            return _0x560404('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x14f34a == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x4a1be2(0x2710);
        ;
    }
    await _0x25e02b(_0x14f34a);
    if (_0x5556c2 === ![])
        return console['log']('Closing\x20Browser'), await _0x4a1be2(0xbb8);
    else
        try {
            async function _0x4b5747() {
                _0x504346('JRaffles\x20' + _0x3f4489), console['clear'](), console['log']('Welcome\x20to\x20' + _0x25f83e['cyan']('JRaffles();') + '\x20' + _0x3f4489), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x557beb = 0x0; _0x557beb < _0x2cb586['length']; _0x557beb++) {
                    if (_0x2cb586[_0x557beb]['name'] === 'Reload\x20Settings' || _0x2cb586[_0x557beb]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x557beb + ')\x20[' + _0x2cb586[_0x557beb]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x2cb586['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x2cb586['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x1639f0();
                if (_0x2cb586[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x110efe(_0x2cb586[taskModule]['modules']);
                    var _0x502c1a = _0x2cb586[taskModule]['modules'][taskFunction];
                    console['clear'](), await _0x2e8db6(), await _0x40d230();
                    var _0x2fe806 = await _0x221cdc(), _0x39c90f = await _0x579fba();
                    return await afewFunction(_0x13d625[_0x16997e], 'nor', _0x502c1a, _0x39c90f, _0x2fe806), _0x4b5747();
                } else {
                    if (_0x2cb586[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x110efe(_0x2cb586[taskModule]['modules']);
                        var _0x502c1a = _0x2cb586[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x2fe806 = await _0x221cdc(), _0x432ebc = await _0x579fba();
                            console['log']('Starting\x20' + _0x432ebc['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x3f3369 = 0x0; _0x3f3369 < _0x432ebc['length']; _0x3f3369++) {
                                console['log'](_0x22c21b() + '\x20[' + _0x502c1a['name'] + ']\x20Task\x20' + (_0x3f3369 + 0x1) + ':\x20Getting\x20Session'), await _0x944492(_0x3f3369, 'nor', _0x502c1a, _0x432ebc, _0x2fe806), console['log'](_0x22c21b() + '\x20[' + _0x502c1a['name'] + ']\x20Sleeping\x20for\x20' + _0x54fd99['MahaDelay'] + '\x20ms'), await _0x4a1be2(_0x54fd99['MahaDelay']);
                            }
                            ;
                            return _0x4b5747();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x2fe806 = await _0x221cdc();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x410f94(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x3f3369 = 0x0; _0x3f3369 < links['length']; _0x3f3369++) {
                                    _0x502c1a['url'] = links[_0x3f3369], console['log'](_0x22c21b() + '\x20[' + _0x502c1a['name'] + ']\x20Task\x20' + (_0x3f3369 + 0x1) + ':\x20Getting\x20Session'), await _0x944492(_0x3f3369, 'ver', _0x502c1a, _0x432ebc, _0x2fe806), console['log'](_0x22c21b() + '\x20[' + _0x502c1a['name'] + ']\x20Sleeping\x20for\x20' + _0x54fd99['verificationDelay'] + '\x20ms'), await _0x4a1be2(_0x54fd99['verificationDelay']);
                                }
                                ;
                                return _0x4b5747();
                            }
                        }
                    } else {
                        if (_0x2cb586[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x2fe806 = await _0x221cdc(), _0x4066d4 = await _0x579fba();
                            return console['log'](_0x4066d4), await _0x55c462(_0x4066d4, _0x2fe806), await _0x4a1be2(0x1388), _0x4b5747();
                        } else {
                            if (_0x2cb586[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x110efe(_0x2cb586[taskModule]['modules']);
                                var _0x502c1a = _0x2cb586[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x1bff31 = await _0x579fba();
                                    console['log']('Starting\x20' + _0x25f83e['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x3f3369 = 0x0; _0x3f3369 < _0x1bff31['length']; _0x3f3369++) {
                                        console['log'](_0x22c21b() + '\x20[' + _0x502c1a['name'] + ']\x20Task\x20' + (_0x3f3369 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x3e9e7e(_0x3f3369, 'nor', _0x502c1a, _0x1bff31);
                                        } catch {
                                            console['log'](_0x25f83e['red'](_0x22c21b() + '\x20[' + _0x502c1a['name'] + ']\x20Task\x20' + (_0x3f3369 + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](_0x22c21b() + '\x20[' + _0x502c1a['name'] + ']\x20Sleeping\x20for\x20' + _0x54fd99['delay'] + '\x20ms'), await _0x4a1be2(_0x54fd99['delay']);
                                    }
                                    return _0x4b5747();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x410f94(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x3f3369 = 0x0; _0x3f3369 < links['length']; _0x3f3369++) {
                                            try {
                                                _0x502c1a['url'] = links[_0x3f3369], console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Task\x20' + (_0x3f3369 + 0x1) + ':\x20Getting\x20Session'), await _0x3e9e7e(_0x3f3369, 'ver', _0x502c1a), console['log'](_0x22c21b() + '\x20[' + _0x2cb586[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x54fd99['verificationDelay'] + '\x20ms'), await _0x4a1be2(_0x54fd99['verificationDelay']);
                                            } catch (_0x3fb9ed) {
                                                console['log'](_0x3fb9ed);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x4b5747();
                                    }
                                }
                                ;
                            } else {
                                if (_0x2cb586[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x110efe(_0x2cb586[taskModule]['modules']);
                                    var _0x502c1a = _0x2cb586[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x3684a2('https://bouncewear.com/nl/account/register', _0x502c1a);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x2cb586[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x110efe(_0x2cb586[taskModule]['modules']);
                                        var _0x502c1a = _0x2cb586[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x2fe806 = await _0x221cdc(), _0x485855 = await _0x579fba();
                                            return await _0x2899a6('https://patta.nl/account/register', _0x502c1a, _0x485855, _0x2fe806), _0x4b5747();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x2fe806 = await _0x221cdc(), _0x485855 = await _0x579fba();
                                                return await _0x43510c('', _0x502c1a, _0x485855, _0x2fe806), _0x4b5747();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x2cb586[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await _0x110efe(_0x2cb586[taskModule]['modules']);
                                            var _0x502c1a = _0x2cb586[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x315c18 = await _0x579fba();
                                                return await _0x1b8dfd('https://www.kickz.com/nl/login/', _0x502c1a, _0x315c18), _0x4b5747();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x315c18 = await _0x579fba();
                                                    return await _0x78bf31('', _0x502c1a, _0x315c18), _0x4b5747();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x2cb586[taskModule]['name'] == 'JD') {
                                                taskFunction = await _0x110efe(_0x2cb586[taskModule]['modules']);
                                                var _0x502c1a = _0x2cb586[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x2fe806 = await _0x221cdc(), _0x176dbd = await _0x579fba();
                                                    return await _0x55fa02(_0x502c1a, _0x176dbd, _0x2fe806), _0x4b5747();
                                                }
                                            } else {
                                                if (_0x2cb586[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x38ec81 = 0x0;
                                                    for (const _0x153a38 in _0x54fd99) {
                                                        console['log']('(' + _0x38ec81 + ')\x20' + _0x153a38 + '\x20:\x20' + _0x54fd99[_0x153a38]), _0x38ec81++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x38ec81 + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x1496fd = await _0x49bd3f();
                                                    if (_0x1496fd == _0x38ec81)
                                                        return _0x4b5747();
                                                    console['clear'];
                                                    var _0x2d8932 = 0x0;
                                                    for (var _0xd557fc in _0x54fd99) {
                                                        if (_0x1496fd == _0x2d8932) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0xd557fc + '\x20:'), _0x54fd99[_0xd557fc] = await _0x3db4c6(), _0x55d88f['writeFileSync']('../settings.json', JSON['stringify'](_0x54fd99));
                                                            break;
                                                        } else
                                                            _0x2d8932++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await _0x4a1be2(0xbb8), _0x4b5747();
                                                } else {
                                                    if (_0x2cb586[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await _0x449b37(), _0x4b5747();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            _0x2cb586[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x1f2dbe = await _0x1fd799();
                                                            _0x1f2dbe == 'ModuleVoorDeBoys' ? (await _0x2e8db6(), await _0x40d230(), await afewFunction(_0x13d625[_0x16997e], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x4a1be2(0xbb8));
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
            await _0x4b5747();
        } catch (_0x31ad6f) {
            return console['log'](_0x31ad6f), await _0x4a1be2(0x3a98);
        }
}
;
_0x504346('JRaffles\x20' + _0x3f4489), _0x449b37(), _0x141f37();