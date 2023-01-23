var _0x5b8fbc = require('exe');
const { execFile: _0x53792c } = require('child_process'), _0x1b66d4 = require('puppeteer-extra'), _0x2ba051 = require('puppeteer-extra-plugin-recaptcha'), _0x4c7671 = require('puppeteer-extra-plugin-stealth'), _0x11ce0d = require('chalk'), _0x31de1e = require('node-bash-title'), _0x486816 = require('fs'), _0x52bb10 = require('axios'), _0x25ff1d = require('papaparse');
var _0x471ab1 = require('random-name');
const _0x3b7b99 = require('request');
var _0x398618 = require('prompt');
const _0x2c7cef = _0x3b7b99['jar']();
var _0x333ea7 = {};
const _0x423cd0 = 'https://discord.com/api/webhooks/1044989608708030595/HUZ2q06RoQQ24n_rWWEsL6AgM5yXEeUi2SO9VyOLuQgGBeHIlXpPl9Xr5jYMLXwJKwPS', _0x29db11 = 'https://discord.com/api/webhooks/1045001962262900766/ZXWdz3BSjNO08alABR8ERNBgR2SNcydTW-9XxsFuphHYfwHaojLBu3hkw1Ygi3MxOZdz';
var _0x191e8f;
const _0x24cd96 = JSON['parse'](_0x486816['readFileSync']('../package.json', 'utf-8')), _0x4198e6 = _0x24cd96['version'];
var _0x249436, _0x598bd9, _0x270bc9, _0x29a6eb, _0x5c7e94, _0x2b68dd, _0x2458db;
const _0x517716 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x2c1f = ![];
const _0x3c3781 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x35414c = '0123456789';
var _0x575d6a = _0x3c3781['split']('');
const _0x25b18d = require('auto-git-update'), { PageEmittedEvents: _0x1a2227 } = require('puppeteer'), { getRandomValues: _0x4711ff } = require('crypto'), { resolve: _0x1b9b97 } = require('path'), _0x136139 = {
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
        'accounts/patta.csv',
        'tasks/kickz.csv',
        'accounts/kickz-verified.csv',
        'accounts/kickz-unverified.csv'
    ]
}, _0xa8c136 = new _0x25b18d(_0x136139);
async function _0x48c54c() {
    _0x5c7e94 = _0x486816['readdirSync']('../proxies'), _0x29a6eb = _0x486816['readdirSync']('../tasks'), _0x333ea7 = JSON['parse'](_0x486816['readFileSync']('../settings.json', 'utf-8')), !_0x333ea7['delay'] && (_0x333ea7['delay'] = 0x2710, _0x486816['writeFileSync']('../settings.json', JSON['stringify'](_0x333ea7))), !_0x333ea7['captchaKey'] && (_0x333ea7['captchaKey'] = '', _0x486816['writeFileSync']('../settings.json', JSON['stringify'](_0x333ea7))), !_0x333ea7['useRandomProxy'] && (_0x333ea7['useRandomProxy'] = ![], _0x486816['writeFileSync']('../settings.json', JSON['stringify'](_0x333ea7))), !_0x333ea7['webhook'] && (_0x333ea7['webhook'] = '', _0x486816['writeFileSync']('../settings.json', JSON['stringify'](_0x333ea7))), _0x191e8f = _0x333ea7['webhook'], _0x2b68dd = _0x333ea7['licenseKey'];
}
let _0x12a289, _0x581ba3 = [], _0x1a2a49;
const _0xde5053 = _0x2bca74 => new Promise(_0x27e6d5 => setTimeout(_0x27e6d5, _0x2bca74));
function _0x2faaaa(_0x2c7a6a, _0x30c08d) {
    return Math['floor'](Math['random']() * (_0x30c08d - _0x2c7a6a + 0x1) + _0x2c7a6a);
}
async function _0x32bd03(_0x50c3be) {
    return _0x52bb10['get']('https://api.hyper.co/v4/licenses/' + _0x50c3be, { 'headers': { 'Authorization': 'Bearer\x20' + _0x517716 } })['then'](_0x549f9a => _0x549f9a['data'])['catch'](() => null);
}
;
async function _0x350f59(_0x2d7e5c) {
    console['clear'](), console['log']('Checking\x20license\x20' + _0x2b68dd + '...'), await _0xde5053(0x5dc);
    const _0x95232f = await _0x32bd03(_0x2d7e5c);
    _0x2458db = JSON['stringify'](_0x95232f['user']['username']);
    if (!_0x95232f)
        return console['log']('License\x20not\x20found');
    if (!_0x95232f['user'])
        return console['log']('License\x20not\x20bound');
    return _0x95232f['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x2c1f = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x2c1f = ![]);
}
async function _0x2e3917() {
    var _0xaf00e5 = await _0x398618['get']('Module');
    return console['clear'](), _0xaf00e5['Module'];
}
;
async function _0x38535b() {
    var _0x58d2f9 = await _0x398618['get']('Setting');
    return console['clear'](), _0x58d2f9['Setting'];
}
async function _0x35fcef() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x54400e = 0x0; _0x54400e < _0x29a6eb['length']; _0x54400e++) {
        console['log']('\x20(' + _0x54400e + ')\x20' + _0x29a6eb[_0x54400e]);
    }
    console['log']('');
    var _0x26df34 = await _0x398618['get']('Task'), _0xd7cd3 = _0x486816['readFileSync']('../tasks/' + _0x29a6eb[_0x26df34['Task']], 'utf-8');
    return _0x270bc9 = _0x25ff1d['parse'](_0xd7cd3, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x11ce0d['blue'](_0x29a6eb[_0x26df34['Task']])), _0x249436 = _0x29a6eb[_0x26df34['Task']], _0x270bc9;
}
async function _0x178ab2() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x5bbae4 = 0x0; _0x5bbae4 < _0x5c7e94['length']; _0x5bbae4++) {
        console['log']('\x20(' + _0x5bbae4 + ')\x20' + _0x5c7e94[_0x5bbae4]);
    }
    console['log']('');
    var _0x172b04 = await _0x398618['get']('Proxies'), _0x585912 = _0x486816['readFileSync']('../proxies/' + _0x5c7e94[_0x172b04['Proxies']], 'utf-8')['split']('\x0a');
    let _0x2b679e = _0x585912['map']((_0xb8e5c7, _0x35e9db) => {
        sanatizeProxy = _0xb8e5c7['replace']('\x0d', '');
        if (_0x585912[_0x35e9db + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x598bd9 = _0x5c7e94[_0x172b04['Proxies']], console['clear'](), _0x2b679e;
}
async function _0x4eaa00() {
    var _0xf3f529 = await _0x398618['get']('Value');
    return console['clear'](), _0xf3f529['Value'];
}
async function _0x28d2b4(_0x779970) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x78d257 = 0x0; _0x78d257 < _0x779970['length']; _0x78d257++) {
        console['log']('\x20(' + _0x78d257 + ')\x20[' + _0x779970[_0x78d257]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x197cd3 = await _0x398618['get']('Module');
    return _0x197cd3['Module'];
}
async function _0xb89248() {
    var _0x41ce60 = await _0x398618['get']('Password');
    return console['clear'](), _0x41ce60['Password'];
}
;
async function _0xc6cd97() {
    var _0x583fb2 = await _0x398618['get']('Links');
    return _0x583fb2['Links'];
}
;
async function _0x379d3c() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x5c40ab = 0x0; _0x5c40ab < _0x581ba3['length']; _0x5c40ab++) {
        console['log']('\x20(' + _0x5c40ab + ')\x20' + _0x581ba3[_0x5c40ab]);
    }
    ;
    console['log']();
    let _0x484038 = await _0x398618['get']('Product');
    console['clear'](), _0x1a2a49 = _0x484038['Product'];
    return;
}
;
function _0x3a080e() {
    var _0x145716 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x145716;
}
;
const _0x4362fc = [
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
    {
        'name': 'KICKZ',
        'modules': [
            { 'name': 'KICKZ\x20Account\x20Generator' },
            { 'name': 'KICKZ\x20Raffle\x20Entries' }
        ]
    },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x1db5ab(_0x189c47, _0x12fba9) {
    let _0x16605d = { 'headers': { 'content-type': 'application/json' } };
    await _0x52bb10['post'](_0x189c47, _0x12fba9, _0x16605d);
}
;
async function _0x5a1c9d(_0x181196, _0x182a81) {
    var _0x357927 = _0x181196[_0x182a81]['Address1']['split'](''), _0x4be732 = _0x181196[_0x182a81]['Address2']['split'](''), _0x188ba4 = _0x181196[_0x182a81]['Email']['split']('@');
    for (var _0x5385fd = 0x0; _0x5385fd < _0x357927['length']; _0x5385fd++) {
        if (_0x357927[_0x5385fd] == 'X') {
            var _0x1f8d85 = Math['round'](Math['random']() * (_0x3c3781['length'] - 0x1));
            _0x357927[_0x5385fd] = _0x575d6a[_0x1f8d85];
        }
    }
    ;
    for (var _0x5385fd = 0x0; _0x5385fd < _0x4be732['length']; _0x5385fd++) {
        if (_0x4be732[_0x5385fd] == 'X') {
            var _0x1f8d85 = Math['round'](Math['random']() * (_0x3c3781['length'] - 0x1));
            _0x4be732[_0x5385fd] = _0x575d6a[_0x1f8d85];
        }
    }
    ;
    _0x181196[_0x182a81]['FirstName'] == 'RANDOM' && (_0x181196[_0x182a81]['FirstName'] = _0x471ab1['first']());
    _0x181196[_0x182a81]['LastName'] == 'RANDOM' && (_0x181196[_0x182a81]['LastName'] = _0x471ab1['last']());
    _0x188ba4[0x0] == 'RANDOM' ? _0x188ba4[0x0] = '' + _0x471ab1['first']() + _0x471ab1['last']() + '@' : _0x188ba4[0x0] = _0x188ba4[0x0] + '@';
    _0x181196[_0x182a81]['Phone'] == 'RANDOM' && (_0x181196[_0x182a81]['Phone'] = _0x2faaaa(0x3b9aca00, 0x2540be3ff));
    if (_0x181196[_0x182a81]['Follower'] == 'RANDOM') {
        var _0x4b2625 = _0x2faaaa(0x1, 0x270f);
        _0x181196[_0x182a81]['Follower'] = '' + _0x471ab1['first']() + _0x471ab1['last']() + _0x4b2625;
    }
    _0x181196[_0x182a81]['Email'] = _0x188ba4['join'](''), _0x181196[_0x182a81]['Address1'] = _0x357927['join'](''), _0x181196[_0x182a81]['Address2'] = _0x4be732['join']('');
    return;
}
;
function _0x45af39() {
    let _0x396544 = proxyFile['split']('\x0a'), _0x1dfba4 = _0x396544['map']((_0x396a28, _0x56a243) => {
        sanatizeProxy = _0x396a28['replace']('\x0d', '');
        if (_0x396544[_0x56a243 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x1dfba4;
}
;
async function _0x800f11(_0x208f4b) {
    var _0x33ebca = _0x208f4b[0x1]['split'](':');
    const _0x4ed593 = await _0x1b66d4['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x33ebca[0x0] + ':' + _0x33ebca[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x5112ae = await _0x4ed593['newPage']();
        await _0x5112ae['authenticate']({
            'username': '' + _0x33ebca[0x2],
            'password': '' + _0x33ebca[0x3]
        }), console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x5112ae['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5112ae['setRequestInterception'](!![]), _0x5112ae['on']('request', _0x4d1010 => {
            _0x4d1010['resourceType']() === 'image' || _0x4d1010['resourceType']() === 'font' || _0x4d1010['resourceType']() === 'media' ? _0x4d1010['abort']() : _0x4d1010['continue']();
        }), await _0x5112ae['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x5112ae['waitForTimeout'](0xbb8), await _0x5112ae['waitForSelector']('.product-card');
        const _0x4199b0 = await _0x5112ae['$$eval']('a.product-card', _0x5eec02 => {
            return _0x5eec02['map'](_0x184157 => _0x184157['href']);
        });
        return _0x581ba3 = _0x4199b0;
    } catch (_0x22d7dc) {
        console['log']('\x20' + _0x22d7dc);
    } finally {
        _0x4ed593['close'](), console['clear']();
    }
}
;
async function _0x2782ec(_0x60f85a, _0x8cbc6d, _0x57f06e, _0x1b366c, _0x54d82a) {
    await _0x5a1c9d(_0x1b366c, _0x60f85a);
    var _0xb2d914 = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x2458db
            },
            {
                'name': 'Size',
                'value': '' + _0x1b366c[_0x60f85a]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x333ea7['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x4198e6
            }
        ]
    }];
    const _0x12cab1 = { 'embeds': _0xb2d914 };
    if (_0x333ea7['useRandomProxy'] = ![])
        var _0x2211ad = _0x54d82a[_0x60f85a]['split'](':');
    else
        var _0x3e7d40 = Math['round'](Math['random']() * (_0x54d82a['length'] - 0x1)), _0x2211ad = _0x54d82a[_0x3e7d40]['split'](':');
    var _0x581bec = _0x57f06e['data'];
    _0x8cbc6d == 'exp' ? _0x581bec['data']['attributes']['email'] = '' + _0x1b366c[_0x60f85a]['FirstName'] + _0x1b366c[_0x60f85a]['LastName'] + _0x333ea7['catchall'] : _0x581bec['data']['attributes']['email'] = '' + _0x1b366c[_0x60f85a]['Email'];
    _0x581bec['data']['attributes']['properties']['$first_name'] = '' + _0x1b366c[_0x60f85a]['FirstName'], _0x581bec['data']['attributes']['properties']['$last_name'] = '' + _0x1b366c[_0x60f85a]['LastName'], _0x581bec['data']['attributes']['properties']['$address1'] = _0x1b366c[_0x60f85a]['Address1'] + '\x20' + _0x1b366c[_0x60f85a]['Address2'], _0x581bec['data']['attributes']['properties']['$zip'] = '' + _0x1b366c[_0x60f85a]['Zip'], _0x581bec['data']['attributes']['properties']['$city'] = '' + _0x1b366c[_0x60f85a]['City'], _0x581bec['data']['attributes']['properties']['$country'] = '' + _0x1b366c[_0x60f85a]['Country'], _0x581bec['data']['attributes']['properties']['Size'] = '' + _0x1b366c[_0x60f85a]['Size'], _0x581bec['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x1b366c[_0x60f85a]['Follower'];
    var _0x402e40 = {
        'jar': _0x2c7cef,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x57f06e['url'],
        'headers': _0x57f06e['headers'],
        'body': JSON['stringify'](_0x581bec),
        'proxy': 'http://' + _0x2211ad[0x2] + ':' + _0x2211ad[0x3] + '@' + _0x2211ad[0x0] + ':' + _0x2211ad[0x1]
    };
    return _0x8cbc6d === 'ver' && (_0x402e40['method'] = 'GET'), new Promise(function (_0x5c2612, _0x59b234) {
        callback = async (_0x55eee5, _0x4a2c3d, _0x35daf4) => {
            !_0x55eee5 && _0x4a2c3d['statusCode'] == 0xca || !_0x55eee5 && _0x4a2c3d['statusCode'] == 0xc8 ? _0x5c2612(console['log'](_0x11ce0d['green'](_0x3a080e() + '\x20[' + _0x57f06e['name'] + ']\x20Task\x20' + (_0x60f85a + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0xb2d914[0x0]['title'] = 'Failed\x20entry', _0xb2d914[0x0]['description'] = '' + _0x55eee5, await _0x1db5ab(_0x29db11, _0x12cab1), _0x59b234(console['log'](_0x3a080e() + '\x20[' + _0x57f06e['name'] + ']\x20Task\x20' + (_0x60f85a + 0x1) + ':\x20' + _0x55eee5)));
        };
        try {
            _0x8cbc6d === 'ver' ? console['log'](_0x3a080e() + '\x20[' + _0x57f06e['name'] + ']\x20Task\x20' + (_0x60f85a + 0x1) + ':\x20Verifying.') : console['log'](_0x3a080e() + '\x20[' + _0x57f06e['name'] + ']\x20Task\x20' + (_0x60f85a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x581bec['data']['attributes']['email']), _0x3b7b99(_0x402e40, callback);
        } catch (_0x54e4b9) {
            console['log'](_0x3a080e() + '\x20Task\x20' + (_0x60f85a + 0x1) + ':\x20' + _0x54e4b9);
        }
    });
}
;
async function _0x18c27c(_0x58a37d, _0x499950) {
    _0x1b66d4['use'](_0x4c7671()), _0x1b66d4['use'](_0x2ba051({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x333ea7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x34dcf8 = 0x0; _0x34dcf8 < _0x58a37d['length']; _0x34dcf8++) {
        var _0x3827a0 = '', _0x3b99b7 = 0x0, _0x51baf3 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2458db
                },
                {
                    'name': 'Product',
                    'value': '' + _0x58a37d[_0x34dcf8]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x58a37d[_0x34dcf8]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x333ea7['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4198e6
                }
            ]
        }];
        const _0x240141 = { 'embeds': _0x51baf3 };
        await _0x5a1c9d(_0x58a37d, _0x34dcf8);
        if (_0x58a37d[_0x34dcf8]['Email'] == '' || _0x58a37d[_0x34dcf8]['FirstName'] == '' || _0x58a37d[_0x34dcf8]['LastName'] == '' || _0x58a37d[_0x34dcf8]['Country'] == '' || _0x58a37d[_0x34dcf8]['Size'] == '' || _0x58a37d[_0x34dcf8]['Address1'] == '' || _0x58a37d[_0x34dcf8]['Zip'] == '') {
            console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x58a37d[_0x34dcf8]['Email'] == '' || _0x58a37d[_0x34dcf8]['FirstName'] == '' || _0x58a37d[_0x34dcf8]['LastName'] == '' || _0x58a37d[_0x34dcf8]['Country'] == '' || _0x58a37d[_0x34dcf8]['Size'] == '' || _0x58a37d[_0x34dcf8]['Address1'] == '' || _0x58a37d[_0x34dcf8]['Zip'] == '' || _0x58a37d[_0x34dcf8]['Phone'] == '') {
            console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x40bc2a = '' + _0x58a37d[_0x34dcf8]['Url'];
        if (_0x333ea7['useRandomProxy'] = ![])
            var _0x338c01 = _0x499950[_0x34dcf8]['split'](':');
        else
            var _0x48ac5b = Math['round'](Math['random']() * (_0x499950['length'] - 0x1)), _0x338c01 = _0x499950[_0x48ac5b]['split'](':');
        const _0x4d84ac = await _0x1b66d4['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x338c01[0x0] + ':' + _0x338c01[0x1]]
        });
        try {
            const _0x311961 = await _0x4d84ac['newPage']();
            await _0x311961['authenticate']({
                'username': '' + _0x338c01[0x2],
                'password': '' + _0x338c01[0x3]
            }), console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x311961['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x311961['setRequestInterception'](!![]), _0x311961['on']('request', _0x171a0c => {
                _0x171a0c['resourceType']() === 'image' || _0x171a0c['resourceType']() === 'font' || _0x171a0c['resourceType']() === 'media' ? _0x171a0c['abort']() : _0x171a0c['continue']();
            }), await _0x311961['goto'](_0x40bc2a), await _0xde5053(0xbb8), await _0x311961['waitForSelector']('.control__JhutY'), await _0x311961['click']('.control__JhutY'), await _0xde5053(0x1f4);
            if (_0x58a37d[_0x34dcf8]['Size'] != 'RANDOM')
                try {
                    const _0x2ed739 = await _0x311961['$x']('//div[contains(text(),\x20\x27' + _0x58a37d[_0x34dcf8]['Size'] + '\x27)]');
                    await _0x2ed739[0x0]['click']();
                } catch {
                    console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x30e1f9 = await _0x311961['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x3b5a48 = Math['round'](Math['random']() * (_0x30e1f9['length'] - 0x1));
                await _0x30e1f9[_0x3b5a48]['click']();
            }
            await _0xde5053(0x4b0);
            const _0x209e2e = await _0x311961['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x209e2e[0x0]['click'](), await _0x311961['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x311961['type']('input[name=\x22email\x22]', '' + _0x58a37d[_0x34dcf8]['Email']), await _0xde5053(0x640), await _0x311961['type']('input[name=\x22phone\x22]', '' + _0x58a37d[_0x34dcf8]['Phone']), await _0xde5053(0x4b0), await _0x311961['click']('button.btn.continue-button__1RtsS'), await _0xde5053(0x4b0);
            try {
                await _0x311961['type']('input[name=\x22firstName\x22]', '' + _0x58a37d[_0x34dcf8]['FirstName']), await _0xde5053(0x258);
            } catch {
                const _0x4a95a8 = await _0x311961['$$eval']('.invalid-feedback\x20>\x20div', _0x5e9bef => {
                    return _0x5e9bef['map'](_0x836052 => _0x836052['innerText']);
                });
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x20' + _0x4a95a8));
                continue;
            }
            await _0x311961['type']('input[name=\x22lastName\x22]', '' + _0x58a37d[_0x34dcf8]['LastName']), await _0xde5053(0xc8), await _0x311961['type']('input[name=\x22instagramUsername\x22]', '' + _0x58a37d[_0x34dcf8]['Follower']), await _0xde5053(0x4b0), await _0x311961['click']('button.btn.continue-button__1RtsS'), await _0xde5053(0x3e8), console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x311961['select']('select[name=\x22country\x22]', '' + _0x58a37d[_0x34dcf8]['Country']), await _0xde5053(0x2bc), await _0x311961['type']('input[name=\x22streetName\x22]', '' + _0x58a37d[_0x34dcf8]['Address1']), await _0xde5053(0x258), await _0x311961['type']('input[name=\x22houseNumber\x22]', _0x58a37d[_0x34dcf8]['HouseNumber'] + '\x20' + _0x58a37d[_0x34dcf8]['Address2']), await _0xde5053(0xc8), await _0x311961['type']('input[name=\x22postalCode\x22]', '' + _0x58a37d[_0x34dcf8]['Zip']), await _0xde5053(0x1f4), await _0x311961['type']('input[name=\x22city\x22]', '' + _0x58a37d[_0x34dcf8]['City']), await _0xde5053(0x4b0), await _0x311961['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0xde5053(0x4b0), await _0x311961['click']('button.btn.continue-button__1RtsS'), await _0xde5053(0x4b0), console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x311961['solveRecaptchas'](), console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0xde5053(0xbb8), await _0x311961['click']('button.btn.continue-button__1RtsS'), await _0xde5053(0x1388), console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x311961['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x311961['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xde5053(0x4b0), await _0x311961['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x58a37d[_0x34dcf8]['CardNumber']), await _0xde5053(0x320), await _0x311961['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x311961['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x58a37d[_0x34dcf8]['ExpiryDate']), await _0xde5053(0x4b0), await _0x311961['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x311961['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x58a37d[_0x34dcf8]['CVV']), await _0xde5053(0x226), await _0x311961['type']('input[name=\x22holderName\x22]', '' + _0x58a37d[_0x34dcf8]['NameOnCard']), await _0xde5053(0x226), await _0x311961['click']('button.adyen-checkout__button'), console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x311961['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0xde5053(0xbb8), console['log'](_0x11ce0d['green'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1db5ab(_0x423cd0, _0x240141);
            } catch {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x203DS\x20Failed')), _0x3827a0 = 'yes';
            }
        } catch (_0x459d29) {
            console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x20' + _0x459d29), _0x51baf3[0x0]['title'] = 'Failed\x20' + _0x4362fc[taskModule]['name'] + '\x20entry', _0x51baf3[0x0]['description'] = '' + _0x459d29, await _0x1db5ab(_0x29db11, _0x240141), _0x3827a0 = 'yes';
        } finally {
            _0x4d84ac['close']();
            if (_0x3827a0 == 'yes' && _0x3b99b7 != 0x5) {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x34dcf8 + 0x1) + '\x20:\x20Retrying')), _0x34dcf8 = _0x34dcf8 - 0x1, _0x3b99b7 = _0x3b99b7 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x333ea7['footshopDelay'] + '\x20ms'), await _0xde5053(_0x333ea7['footshopDelay']);
        }
    }
}
afewFunction = async (_0x43e0df, _0x297fa9, _0x3cecca, _0x57deda, _0x4846ec) => {
    for (var _0x1d8703 = 0x0; _0x1d8703 < _0x57deda['length']; _0x1d8703++) {
        var _0x53d907 = '', _0x2c22f0 = 0x0;
        _0x31de1e(_0x3cecca['name'] + '\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20/\x20' + _0x57deda['length'] + '\x20||\x20File:\x20' + _0x249436 + '\x20Proxies:\x20' + _0x598bd9), await _0x5a1c9d(_0x57deda, _0x1d8703);
        var _0x4bca49 = [{
            'type': 'rich',
            'title': 'Succesful\x20AFEW\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2458db
                },
                {
                    'name': 'Product',
                    'value': '' + _0x43e0df
                },
                {
                    'name': 'Size',
                    'value': '' + _0x57deda[_0x1d8703]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x333ea7['AfewDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4198e6
                }
            ]
        }];
        const _0x52a00a = { 'embeds': _0x4bca49 };
        if (_0x57deda[_0x1d8703]['Email'] == '' || _0x57deda[_0x1d8703]['FirstName'] == '' || _0x57deda[_0x1d8703]['LastName'] == '' || _0x57deda[_0x1d8703]['Country'] == '' || _0x57deda[_0x1d8703]['Size'] == '' || _0x57deda[_0x1d8703]['Address1'] == '' || _0x57deda[_0x1d8703]['Zip'] == '') {
            console['log'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x333ea7['useRandomProxy'] = ![])
            var _0x279db7 = _0x4846ec[_0x1d8703]['split'](':');
        else
            var _0x5ea06b = Math['round'](Math['random']() * (_0x4846ec['length'] - 0x1)), _0x279db7 = _0x4846ec[_0x5ea06b]['split'](':');
        const _0x3ee073 = await _0x1b66d4['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x279db7[0x0] + ':' + _0x279db7[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x23e0b7 = await _0x3ee073['newPage']();
            await _0x23e0b7['setDefaultNavigationTimeout'](0x1d4c0), await _0x23e0b7['authenticate']({
                'username': '' + _0x279db7[0x2],
                'password': '' + _0x279db7[0x3]
            }), console['log'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x23e0b7['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x23e0b7['setRequestInterception'](!![]), _0x23e0b7['on']('request', _0x3da266 => {
                _0x3da266['resourceType']() === 'image' || _0x3da266['resourceType']() === 'font' || _0x3da266['resourceType']() === 'media' ? _0x3da266['abort']() : _0x3da266['continue']();
            }), await _0x23e0b7['goto'](_0x43e0df, { 'waitUntil': 'networkidle2' }), console['log'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x23e0b7['waitForTimeout'](0xfa0), console['log'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x23e0b7['waitForTimeout'](0x320);
            if (_0x57deda[_0x1d8703]['Size'] == 'RANDOM') {
                console['log'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x5e1e0a = await _0x23e0b7['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x12d6fd => {
                    return _0x12d6fd['map'](_0x209327 => _0x209327['href']);
                });
                var _0x10542d = Math['round'](Math['random']() * (_0x5e1e0a['length'] - 0x1));
                await _0x23e0b7['goto']('' + _0x5e1e0a[_0x10542d]);
            } else {
                console['log'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x57deda[_0x1d8703]['Size']);
                try {
                    const _0x3c4dd7 = await _0x23e0b7['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x57deda[_0x1d8703]['Size'] + '\x22]\x20>\x20a', _0x8983c7 => {
                        return _0x8983c7['map'](_0x1eab29 => _0x1eab29['href']);
                    });
                    await _0x23e0b7['goto']('' + _0x3c4dd7[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x5d5a57) {
                    console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20' + _0x5d5a57 + '\x20Size\x20not\x20found')), _0x4bca49[0x0]['title'] = 'Failed\x20entry', _0x4bca49[0x0]['description'] = 'Size\x20not\x20found', await _0x1db5ab(_0x29db11, _0x52a00a);
                    continue;
                }
            }
            await _0x23e0b7['waitForTimeout'](0x258), await _0x23e0b7['type']('#raffle-instagram', '' + _0x57deda[_0x1d8703]['Follower'], { 'delay': 0x64 }), await _0x23e0b7['waitForTimeout'](0x384), await _0x23e0b7['click']('#raffle-terms'), await _0x23e0b7['waitForTimeout'](0x384), await _0x23e0b7['evaluate'](() => {
                const _0x2a83e9 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x2a83e9['click']();
            }), await _0x23e0b7['waitForTimeout'](0xbb8), await _0x23e0b7['waitForSelector']('#checkout_email'), await _0xde5053(0x3e8), console['log'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x297fa9 == 'sec' ? await _0x23e0b7['type']('#checkout_email', '' + _0x57deda[_0x1d8703]['FirstName'] + _0x57deda[_0x1d8703]['LastName'] + _0x333ea7['catchall'], 0x32) : await _0x23e0b7['type']('#checkout_email', '' + _0x57deda[_0x1d8703]['Email'], 0x32);
            await _0xde5053(0x320), await _0x23e0b7['select']('#checkout_shipping_address_country', '' + _0x57deda[_0x1d8703]['Country']), await _0x23e0b7['waitForTimeout'](0x258), await _0x23e0b7['type']('#checkout_shipping_address_first_name', '' + _0x57deda[_0x1d8703]['FirstName']), await _0x23e0b7['waitForTimeout'](0x320), await _0x23e0b7['type']('#checkout_shipping_address_last_name', '' + _0x57deda[_0x1d8703]['LastName']), await _0x23e0b7['waitForTimeout'](0x2bc), await _0x23e0b7['type']('#checkout_shipping_address_address1', _0x57deda[_0x1d8703]['Address1'] + '\x20' + _0x57deda[_0x1d8703]['HouseNumber']), await _0x23e0b7['waitForTimeout'](0x2bc), await _0x23e0b7['type']('#checkout_shipping_address_address2', '' + _0x57deda[_0x1d8703]['Address2']), await _0x23e0b7['waitForTimeout'](0x2bc);
            _0x57deda[_0x1d8703]['Postcode'] == undefined ? await _0x23e0b7['type']('#checkout_shipping_address_zip', '' + _0x57deda[_0x1d8703]['Zip']) : await _0x23e0b7['type']('#checkout_shipping_address_zip', '' + _0x57deda[_0x1d8703]['Postcode']);
            await _0x23e0b7['waitForTimeout'](0x2bc), await _0x23e0b7['type']('#checkout_shipping_address_city', '' + _0x57deda[_0x1d8703]['City']), await _0x23e0b7['waitForTimeout'](0x2bc), console['log'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x23e0b7, _0x23e0b7['evaluate'](() => {
                const _0x51d057 = document['querySelector']('#continue_button');
                for (var _0x58c8c9 = 0x0; _0x58c8c9 < 0x5; _0x58c8c9++) {
                    if (_0x51d057) {
                        _0x51d057['click'](), _0x51d057['click']();
                        break;
                    } else
                        _0xde5053(0xfa0);
                }
            }), await _0x23e0b7['waitForTimeout'](0x1194);
            try {
                await _0x23e0b7['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x23e0b7['evaluate'](() => {
                const _0x8be354 = document['querySelector']('#continue_button');
                for (var _0x1a38ee = 0x0; _0x1a38ee < 0x5; _0x1a38ee++) {
                    if (_0x8be354) {
                        _0x8be354['click']();
                        break;
                    } else
                        _0xde5053(0xfa0);
                }
            }), await _0x23e0b7['waitForTimeout'](0x7d0), console['log'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x23e0b7['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x23e0b7['evaluate'](() => {
                const _0x3597a8 = document['querySelector']('#continue_button');
                for (var _0x4c5d8a = 0x0; _0x4c5d8a < 0x5; _0x4c5d8a++) {
                    if (_0x3597a8) {
                        _0x3597a8['click']();
                        break;
                    } else
                        _0xde5053(0xfa0);
                }
            }), await _0x23e0b7['waitForTimeout'](0x1194), await _0x23e0b7['waitForSelector']('#continue_button'), _0x23e0b7['evaluate'](() => {
                const _0x1b0840 = document['querySelector']('#continue_button');
                for (var _0x2ed500 = 0x0; _0x2ed500 < 0x5; _0x2ed500++) {
                    if (_0x1b0840) {
                        _0x1b0840['click']();
                        break;
                    } else
                        _0xde5053(0xfa0);
                }
            });
            try {
                await _0x23e0b7['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x6e706e) {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x6e706e));
            }
            console['log'](_0x11ce0d['green'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1db5ab(_0x423cd0, _0x52a00a);
        } catch (_0x2bd4d8) {
            console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20' + _0x2bd4d8)), _0x4bca49[0x0]['title'] = 'Failed\x20entry', _0x4bca49[0x0]['description'] = '' + _0x2bd4d8, await _0x1db5ab(_0x29db11, _0x52a00a), _0x53d907 = 'yes';
        } finally {
            _0x3ee073 && _0x3ee073['close']();
            if (_0x53d907 == 'yes' && _0x2c22f0 != 0x5) {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x3cecca['name'] + ']\x20Task\x20' + (_0x1d8703 + 0x1) + '\x20:\x20Retrying')), _0x1d8703 = _0x1d8703 - 0x1, _0x2c22f0 = _0x2c22f0 + 0x1;
                continue;
            }
            if (_0x1d8703 + 0x1 == _0x57deda['length']) {
                console['log'](_0x11ce0d['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0xde5053(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x333ea7['AfewDelay'] + '\x20ms'), await _0xde5053(_0x333ea7['AfewDelay']);
        }
    }
};
async function _0x4a170f(_0x490e0d, _0x52f2b5, _0x55f8eb, _0x5b5755) {
    _0x1b66d4['use'](_0x4c7671()), _0x1b66d4['use'](_0x2ba051({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x333ea7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5c7fd0 = 0x0; _0x5c7fd0 < _0x55f8eb['length']; _0x5c7fd0++) {
        var _0x961b69 = '', _0x1dd001 = 0x0;
        _0x31de1e(_0x52f2b5['name'] + '\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20/\x20' + _0x55f8eb['length'] + '\x20||\x20File:\x20' + _0x249436 + '\x20Proxies:\x20' + _0x598bd9);
        var _0x4a2846 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2458db
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x333ea7['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4198e6
                }
            ]
        }];
        const _0x3b821a = { 'embeds': _0x4a2846 };
        await _0x5a1c9d(_0x55f8eb, _0x5c7fd0);
        if (_0x55f8eb[_0x5c7fd0]['Email'] == '' || _0x55f8eb[_0x5c7fd0]['Password'] == '' || _0x55f8eb[_0x5c7fd0]['FirstName'] == '' || _0x55f8eb[_0x5c7fd0]['LastName'] == '') {
            console['log'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x333ea7['useRandomProxy'] = ![])
            var _0x2121b9 = _0x5b5755[_0x5c7fd0]['split'](':');
        else
            var _0x232305 = Math['round'](Math['random']() * (_0x5b5755['length'] - 0x1)), _0x2121b9 = _0x5b5755[_0x232305]['split'](':');
        const _0x170204 = await _0x1b66d4['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2121b9[0x0] + ':' + _0x2121b9[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3a29e1 = await _0x170204['newPage']();
            await _0x3a29e1['authenticate']({
                'username': '' + _0x2121b9[0x2],
                'password': '' + _0x2121b9[0x3]
            }), console['log'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a29e1['setRequestInterception'](!![]), _0x3a29e1['on']('request', _0x220b1f => {
                _0x220b1f['resourceType']() === 'image' || _0x220b1f['resourceType']() === 'font' || _0x220b1f['resourceType']() === 'media' ? _0x220b1f['abort']() : _0x220b1f['continue']();
            }), await _0x3a29e1['goto'](_0x490e0d), await _0xde5053(0xbb8), console['log'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x3a29e1['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3a29e1['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3a29e1['waitForSelector']('#button-register'), await _0xde5053(0x7d0), await _0x3a29e1['evaluate'](() => {
                const _0x374fda = document['querySelector']('#button-register');
                _0x374fda['click']();
            }), console['log'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xde5053(0x1388), await _0x3a29e1['waitForSelector']('#customer_salutation'), await _0x3a29e1['select']('#customer_salutation', 'mr'), await _0xde5053(0x7d0), await _0x3a29e1['waitForSelector']('#customer_firstname'), await _0x3a29e1['type']('#customer_firstname', '' + _0x55f8eb[_0x5c7fd0]['FirstName']), await _0xde5053(0x352), await _0x3a29e1['waitForSelector']('#customer_lastname'), await _0x3a29e1['type']('#customer_lastname', '' + _0x55f8eb[_0x5c7fd0]['LastName']), await _0xde5053(0x352), await _0x3a29e1['type']('#email-input', '' + _0x55f8eb[_0x5c7fd0]['Email']), await _0xde5053(0x352), await _0x3a29e1['type']('#email-confirm-input', '' + _0x55f8eb[_0x5c7fd0]['Email']), await _0xde5053(0x352), await _0x3a29e1['type']('#register-password', '' + _0x55f8eb[_0x5c7fd0]['Password']), await _0xde5053(0x352), await _0x3a29e1['type']('#password-confirm', '' + _0x55f8eb[_0x5c7fd0]['Password']), await _0xde5053(0x352), console['log'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x3a29e1['click']('#consent'), await _0xde5053(0x1f4);
            const _0x2af6db = await _0x3a29e1['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x2af6db) {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x3a29e1['click']('#buttonRegister');
            try {
                await _0x3a29e1['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x11ce0d['yellow'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20Account\x20' + _0x55f8eb[_0x5c7fd0]['Email'] + '\x20Generated!')), console['log'](_0x11ce0d['yellow'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x55f8eb[_0x5c7fd0]['Email'])), await _0xde5053(0x4b0);
            async function _0x8bbb7e() {
                console['log'](_0x11ce0d['yellow'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x2d8ad0 = await _0x398618['get']('Code');
                return _0x2d8ad0['Code'];
            }
            ;
            code = await _0x8bbb7e(), _0xde5053(0x320), console['log'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20Verifying..'), await _0x3a29e1['type']('#verificationCode', code), await _0xde5053(0x1f4), await _0x3a29e1['click']('#buttonVerify'), await _0xde5053(0x190), await _0x3a29e1['click']('#buttonVerify'), await _0xde5053(0x3e8);
            try {
                await _0x3a29e1['waitForSelector']('div.b-user_greeting'), console['log'](_0x11ce0d['green'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20Account\x20' + _0x55f8eb[_0x5c7fd0]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x486816['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x55f8eb[_0x5c7fd0]['Email'] + ',' + _0x55f8eb[_0x5c7fd0]['Password'] + ','), console['log'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20Account\x20' + _0x55f8eb[_0x5c7fd0]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27'), await _0x1db5ab(_0x423cd0, _0x3b821a);
            } catch {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x3918b8) {
            console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20' + _0x3918b8)), _0x4a2846[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x4a2846[0x0]['description'] = '' + _0x3918b8, await _0x1db5ab(_0x29db11, _0x3b821a), _0x961b69 = 'yes';
        } finally {
            _0x170204 && _0x170204['close']();
            if (_0x961b69 == 'yes' && _0x1dd001 != 0x5) {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x52f2b5['name'] + ']\x20Task\x20' + (_0x5c7fd0 + 0x1) + '\x20:\x20Retrying')), _0x5c7fd0 = _0x5c7fd0 - 0x1, _0x1dd001 = _0x1dd001 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x333ea7['delay'] + '\x20ms'), await _0xde5053(_0x333ea7['delay']);
        }
    }
}
async function _0x278881(_0x22eb58, _0x1949ae, _0x2cb14d) {
    _0x1b66d4['use'](_0x4c7671()), _0x1b66d4['use'](_0x2ba051({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x333ea7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x451d1e = 0x0; _0x451d1e < _0x1949ae['length']; _0x451d1e++) {
        var _0x2ee7cc = '', _0x31f031 = 0x0;
        _0x31de1e(_0x22eb58['name'] + '\x20Task\x20' + (_0x451d1e + 0x1) + '\x20/\x20' + _0x1949ae['length'] + '\x20||\x20File:\x20' + _0x249436 + '\x20Proxies:\x20' + _0x598bd9);
        var _0x18f8cc = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2458db
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x333ea7['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4198e6
                }
            ]
        }];
        const _0x28fb36 = { 'embeds': _0x18f8cc };
        await _0x5a1c9d(_0x1949ae, _0x451d1e);
        if (_0x1949ae[_0x451d1e]['Email'] == '' || _0x1949ae[_0x451d1e]['Password'] == '' || _0x1949ae[_0x451d1e]['FirstName'] == '' || _0x1949ae[_0x451d1e]['LastName'] == '') {
            console['log'](_0x3a080e() + '\x20[' + _0x22eb58['name'] + ']\x20Task\x20' + (_0x451d1e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x333ea7['useRandomProxy'] = ![])
            var _0x533c53 = _0x2cb14d[_0x451d1e]['split'](':');
        else
            var _0xbdd9a1 = Math['round'](Math['random']() * (_0x2cb14d['length'] - 0x1)), _0x533c53 = _0x2cb14d[_0xbdd9a1]['split'](':');
        const _0x453ffc = await _0x1b66d4['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x533c53[0x0] + ':' + _0x533c53[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x563bcf = await _0x453ffc['newPage']();
            await _0x563bcf['authenticate']({
                'username': '' + _0x533c53[0x2],
                'password': '' + _0x533c53[0x3]
            }), console['log'](_0x3a080e() + '\x20[' + _0x22eb58['name'] + ']\x20Task\x20' + (_0x451d1e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x563bcf['setRequestInterception'](!![]), _0x563bcf['on']('request', _0x28780c => {
                _0x28780c['resourceType']() === 'image' || _0x28780c['resourceType']() === 'font' || _0x28780c['resourceType']() === 'media' ? _0x28780c['abort']() : _0x28780c['continue']();
            }), await _0x563bcf['goto']('https://www.kickz.com/nl/login/', { 'waitUntil': 'networkidle2' }), await _0xde5053(0xbb8), console['log'](_0x3a080e() + '\x20[' + _0x22eb58['name'] + ']\x20Task\x20' + (_0x451d1e + 0x1) + '\x20:\x20Logging\x20in'), await _0x563bcf['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x563bcf['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x563bcf['waitForSelector']('#username'), await _0x563bcf['type']('#username', _0x1949ae[_0x451d1e]['Email']), await _0x563bcf['waitForSelector']('#password'), await _0x563bcf['type']('#password', _0x1949ae[_0x451d1e]['Password']), await _0xde5053(0x190), await _0x563bcf['click']('#buttonSubmit'), await _0x563bcf['waitForSelector']('div.b-user_greeting'), console['log'](_0x3a080e() + '\x20[' + _0x22eb58['name'] + ']\x20Task\x20' + (_0x451d1e + 0x1) + '\x20:\x20Getting\x20Product'), await _0xde5053(0x1f4), await _0x563bcf['goto']('' + _0x1949ae[_0x451d1e]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3a080e() + '\x20[' + _0x22eb58['name'] + ']\x20Task\x20' + (_0x451d1e + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x1949ae[_0x451d1e]['Size']);
            let _0xa77fff = _0x1949ae[_0x451d1e]['Size']['replace']('.5', '\x201/2');
            await _0x563bcf['click']('button[title=\x22' + _0xa77fff + '\x22]'), await _0xde5053(0x1f4);
            try {
                await _0x563bcf['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0xde5053(0x12c), console['log'](_0x3a080e() + '\x20[' + _0x22eb58['name'] + ']\x20Task\x20' + (_0x451d1e + 0x1) + '\x20:\x20Filling\x20Information'), await _0x563bcf['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0xde5053(0x12c), await _0x563bcf['type']('#dwfrm_raffle_addressFields_firstName', _0x1949ae[_0x451d1e]['FirstName']), await _0xde5053(0x12c), await _0x563bcf['type']('#dwfrm_raffle_addressFields_lastName', _0x1949ae[_0x451d1e]['LastName']), await _0xde5053(0x12c), await _0x563bcf['select']('#dwfrm_raffle_addressFields_country', _0x1949ae[_0x451d1e]['Country']), await _0xde5053(0x12c), await _0x563bcf['type']('#dwfrm_raffle_addressFields_city', _0x1949ae[_0x451d1e]['City']), await _0xde5053(0x12c);
            _0x1949ae[_0x451d1e]['Postcode'] == undefined && (_0x1949ae[_0x451d1e]['Postcode'] = _0x1949ae[_0x451d1e]['Zip']);
            await _0x563bcf['type']('#dwfrm_raffle_addressFields_postalCode', _0x1949ae[_0x451d1e]['Postcode']), await _0xde5053(0x12c), await _0x563bcf['type']('#dwfrm_raffle_addressFields_address1', _0x1949ae[_0x451d1e]['Address1']), await _0xde5053(0x12c), await _0x563bcf['type']('#dwfrm_raffle_addressFields_address2', _0x1949ae[_0x451d1e]['HouseNumber']), await _0xde5053(0x12c), await _0x563bcf['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x1949ae[_0x451d1e]['Address2']), await _0xde5053(0x12c), await _0x563bcf['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0xde5053(0x12c), await _0x563bcf['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x1949ae[_0x451d1e]['Follower']), await _0xde5053(0x1f4), await _0x563bcf['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0xde5053(0x1f4), console['log'](_0x3a080e() + '\x20[' + _0x22eb58['name'] + ']\x20Task\x20' + (_0x451d1e + 0x1) + '\x20:\x20' + _0x11ce0d['blue']('Awaiting\x20Paypal\x20Payment')), await _0x563bcf['click']('.paypal-buttons.paypal-buttons-context-iframe.paypal-buttons-label-checkout.paypal-buttons-layout-vertical');
            try {
                await _0x563bcf['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x11ce0d['green'](_0x3a080e() + '\x20[' + _0x22eb58['name'] + ']\x20Task\x20' + (_0x451d1e + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1db5ab(_0x423cd0, _0x28fb36);
            } catch (_0x285127) {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x22eb58['name'] + ']\x20Task\x20' + (_0x451d1e + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x285127));
            }
        } catch (_0x20c1cf) {
            console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x22eb58['name'] + ']\x20Task\x20' + (_0x451d1e + 0x1) + '\x20:\x20' + _0x20c1cf)), _0x18f8cc[0x0]['title'] = 'Failed\x20kickz\x20Entry', _0x18f8cc[0x0]['description'] = '' + _0x20c1cf, await _0x1db5ab(_0x29db11, _0x28fb36), _0x2ee7cc = 'yes';
        } finally {
            _0x453ffc && _0x453ffc['close']();
            if (_0x2ee7cc == 'yes' && _0x31f031 != 0x5) {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x22eb58['name'] + ']\x20Task\x20' + (_0x451d1e + 0x1) + '\x20:\x20Retrying')), _0x451d1e = _0x451d1e - 0x1, _0x31f031 = _0x31f031 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x333ea7['AfewDelay'] + '\x20ms'), await _0xde5053(_0x333ea7['AfewDelay']);
        }
    }
}
async function _0x18f45d(_0x32185f, _0x52633e) {
    _0x1b66d4['use'](_0x4c7671()), _0x1b66d4['use'](_0x2ba051({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x333ea7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xc1ad9a = 0x0; _0xc1ad9a < bouncewear['length']; _0xc1ad9a++) {
        await _0x5a1c9d(bouncewear, _0xc1ad9a);
        if (bouncewear[_0xc1ad9a]['Email'] == '' || bouncewear[_0xc1ad9a]['Password'] == '' || bouncewear[_0xc1ad9a]['FirstName'] == '' || bouncewear[_0xc1ad9a]['LastName'] == '') {
            console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0xc1ad9a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x333ea7['useRandomProxy'] = ![])
            var _0xd6c670 = _0x45af39()[_0xc1ad9a]['split'](':');
        else
            var _0x50f2b6 = Math['round'](Math['random']() * (_0x45af39()['length'] - 0x1)), _0xd6c670 = _0x45af39()[_0x50f2b6]['split'](':');
        const _0x2b8466 = await _0x1b66d4['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0xd6c670[0x0] + ':' + _0xd6c670[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x34d6e9 = await _0x2b8466['newPage']();
            await _0x34d6e9['authenticate']({
                'username': '' + _0xd6c670[0x2],
                'password': '' + _0xd6c670[0x3]
            }), console['log'](_0x3a080e() + '\x20[' + _0x52633e['name'] + ']\x20Task\x20' + (_0xc1ad9a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x34d6e9['setRequestInterception'](!![]), _0x34d6e9['on']('request', _0x1dac4d => {
                _0x1dac4d['resourceType']() === 'image' || _0x1dac4d['resourceType']() === 'font' || _0x1dac4d['resourceType']() === 'media' ? _0x1dac4d['abort']() : _0x1dac4d['continue']();
            }), await _0x34d6e9['goto'](_0x32185f), await _0xde5053(0xbb8), await _0x34d6e9['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x3a080e() + '\x20[' + _0x52633e['name'] + ']\x20Task\x20' + (_0xc1ad9a + 0x1) + '\x20:\x20Filling\x20information'), await _0x34d6e9['type']('#RegisterForm-FirstName', '' + bouncewear[_0xc1ad9a]['FirstName']), await _0xde5053(0x226), await _0x34d6e9['type']('#RegisterForm-LastName', '' + bouncewear[_0xc1ad9a]['LastName']), await _0xde5053(0x226), await _0x34d6e9['type']('#RegisterForm-email', '' + bouncewear[_0xc1ad9a]['Email']), await _0xde5053(0x226), await _0x34d6e9['type']('#RegisterForm-password', '' + bouncewear[_0xc1ad9a]['Password']), await _0xde5053(0x226), await _0x34d6e9['click']('#marketing'), console['log'](_0x3a080e() + '\x20[' + _0x52633e['name'] + ']\x20Task\x20' + (_0xc1ad9a + 0x1) + '\x20:\x20Submitting..'), await _0x34d6e9['$eval']('#RegisterForm', _0x1bb3e3 => _0x1bb3e3['submit']()), await _0xde5053(0x1f40), console['log'](_0x3a080e() + '\x20[' + _0x52633e['name'] + ']\x20Task\x20' + (_0xc1ad9a + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x34d6e9['solveRecaptchas'](), await _0x34d6e9['click']('.shopify-challenge__button.btn');
            async function _0x54d5ed() {
                for (var _0x45f471 = 0x0; _0x45f471 < 0x4; _0x45f471++) {
                    try {
                        console['log']('try'), await _0x34d6e9['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x3a080e() + '\x20[' + _0x52633e['name'] + ']\x20Task\x20' + (_0xc1ad9a + 0x1) + '\x20:\x20' + _0x11ce0d['red']('Catpcha\x20failed,\x20retrying..')), await _0x34d6e9['solveRecaptchas'](), await _0x34d6e9['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x54d5ed(), console['log'](_0x3a080e() + '\x20[' + _0x52633e['name'] + ']\x20Task\x20' + (_0xc1ad9a + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0xde5053(0x1f4);
            try {
                await _0x34d6e9['waitForSelector']('.featured-title'), await _0xde5053(0x1f4), console['log'](_0x11ce0d['green'](_0x3a080e() + '\x20[' + _0x52633e['name'] + ']\x20Task\x20' + (_0xc1ad9a + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0xc1ad9a]['Email'] + '\x20Generated!')), _0x486816['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0xc1ad9a]['Email'] + ',' + bouncewear[_0xc1ad9a]['Password']), console['log'](_0x11ce0d['yellow'](_0x3a080e() + '\x20[' + _0x52633e['name'] + ']\x20Task\x20' + (_0xc1ad9a + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0xc1ad9a]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x2eee0c) {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0xc1ad9a + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2eee0c));
            }
        } catch (_0x2ea6be) {
            console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0xc1ad9a + 0x1) + '\x20:\x20' + _0x2ea6be));
        } finally {
            _0x2b8466 && _0x2b8466['close'](), console['log']('Waiting\x20for\x20' + _0x333ea7['delay'] + '\x20ms'), await _0xde5053(_0x333ea7['delay']);
        }
    }
}
async function _0x25a1af(_0x46b9b5, _0x2d6d77, _0x4196f5, _0x5e9628) {
    _0x1b66d4['use'](_0x4c7671()), _0x1b66d4['use'](_0x2ba051({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x333ea7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3f7669 = 0x0; _0x3f7669 < _0x4196f5['length']; _0x3f7669++) {
        _0x31de1e(_0x2d6d77['name'] + '\x20Task\x20' + (_0x3f7669 + 0x1) + '\x20/\x20' + _0x4196f5['length'] + '\x20||\x20File:\x20' + _0x249436 + '\x20Proxies:\x20' + _0x598bd9), await _0x5a1c9d(_0x4196f5, _0x3f7669);
        if (_0x4196f5[_0x3f7669]['Email'] == '' || _0x4196f5[_0x3f7669]['Password'] == '' || _0x4196f5[_0x3f7669]['Password'] == undefined || _0x4196f5[_0x3f7669]['FirstName'] == '' || _0x4196f5[_0x3f7669]['LastName'] == '') {
            console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x3f7669 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x333ea7['useRandomProxy'] = ![])
            var _0x188ad3 = _0x5e9628[_0x3f7669]['split'](':');
        else
            var _0x5db124 = Math['round'](Math['random']() * (_0x5e9628['length'] - 0x1)), _0x188ad3 = _0x5e9628[_0x5db124]['split'](':');
        const _0xc57d98 = await _0x1b66d4['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x188ad3[0x0] + ':' + _0x188ad3[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x109192 = await _0xc57d98['newPage']();
            await _0x109192['authenticate']({
                'username': '' + _0x188ad3[0x2],
                'password': '' + _0x188ad3[0x3]
            }), console['log'](_0x3a080e() + '\x20[' + _0x2d6d77['name'] + ']\x20Task\x20' + (_0x3f7669 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x109192['setRequestInterception'](!![]), _0x109192['on']('request', _0x5467dd => {
                _0x5467dd['resourceType']() === 'image' || _0x5467dd['resourceType']() === 'font' || _0x5467dd['resourceType']() === 'media' ? _0x5467dd['abort']() : _0x5467dd['continue']();
            }), await _0x109192['goto'](_0x46b9b5), await _0xde5053(0xbb8), await _0x109192['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x3a080e() + '\x20[' + _0x2d6d77['name'] + ']\x20Task\x20' + (_0x3f7669 + 0x1) + '\x20:\x20Filling\x20information'), await _0x109192['type']('#RegisterForm-FirstName', '' + _0x4196f5[_0x3f7669]['FirstName']), await _0xde5053(0x226), await _0x109192['type']('#RegisterForm-LastName', '' + _0x4196f5[_0x3f7669]['LastName']), await _0xde5053(0x226), await _0x109192['type']('#RegisterForm-email', '' + _0x4196f5[_0x3f7669]['Email']), await _0xde5053(0x226), await _0x109192['type']('#RegisterForm-password', '' + _0x4196f5[_0x3f7669]['Password']), await _0xde5053(0x226), console['log'](_0x3a080e() + '\x20[' + _0x2d6d77['name'] + ']\x20Task\x20' + (_0x3f7669 + 0x1) + '\x20:\x20Submitting..'), await _0x109192['$eval']('#RegisterForm', _0x3a5b69 => _0x3a5b69['submit']()), await _0xde5053(0x1f40);
            try {
                await _0x109192['waitForSelector']('.home-page-grid__collection'), await _0xde5053(0x1f4), console['log'](_0x11ce0d['green'](_0x3a080e() + '\x20[' + _0x2d6d77['name'] + ']\x20Task\x20' + (_0x3f7669 + 0x1) + '\x20:\x20Account\x20' + _0x4196f5[_0x3f7669]['Email'] + '\x20Generated!')), _0x486816['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x4196f5[_0x3f7669]['Email'] + ',' + _0x4196f5[_0x3f7669]['Password']), console['log'](_0x11ce0d['yellow'](_0x3a080e() + '\x20[' + _0x2d6d77['name'] + ']\x20Task\x20' + (_0x3f7669 + 0x1) + '\x20:\x20Account\x20' + _0x4196f5[_0x3f7669]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
            } catch (_0x583430) {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x3f7669 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x583430));
            }
        } catch (_0x4c9464) {
            console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x3f7669 + 0x1) + '\x20:\x20' + _0x4c9464));
        } finally {
            _0xc57d98 && _0xc57d98['close'](), console['log']('Waiting\x20for\x20' + _0x333ea7['delay'] + '\x20ms'), await _0xde5053(_0x333ea7['delay']);
        }
    }
}
async function _0x4ccb50(_0x167bf8, _0x153988, _0x52ff56, _0x9c7430) {
    _0x1b66d4['use'](_0x4c7671()), _0x1b66d4['use'](_0x2ba051({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x333ea7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3bf83a = 0x0; _0x3bf83a < _0x52ff56['length']; _0x3bf83a++) {
        var _0x49af99 = '', _0x2aae30 = 0x0;
        _0x31de1e(_0x153988['name'] + '\x20Task\x20' + (_0x3bf83a + 0x1) + '\x20/\x20' + _0x52ff56['length'] + '\x20||\x20File:\x20' + _0x249436 + '\x20Proxies:\x20' + _0x598bd9), await _0x5a1c9d(_0x52ff56, _0x3bf83a);
        if (_0x52ff56[_0x3bf83a]['Email'] == '' || _0x52ff56[_0x3bf83a]['Password'] == '' || _0x52ff56[_0x3bf83a]['FirstName'] == '' || _0x52ff56[_0x3bf83a]['LastName'] == '') {
            console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x3bf83a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x333ea7['useRandomProxy'] = ![])
            var _0x3b7224 = _0x9c7430[_0x3bf83a]['split'](':');
        else
            var _0x2b41a4 = Math['round'](Math['random']() * (_0x9c7430['length'] - 0x1)), _0x3b7224 = _0x9c7430[_0x2b41a4]['split'](':');
        const _0x44f71f = await _0x1b66d4['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3b7224[0x0] + ':' + _0x3b7224[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1447c5 = await _0x44f71f['newPage']();
            await _0x1447c5['authenticate']({
                'username': '' + _0x3b7224[0x2],
                'password': '' + _0x3b7224[0x3]
            }), console['log'](_0x3a080e() + '\x20[' + _0x153988['name'] + ']\x20Task\x20' + (_0x3bf83a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1447c5['setRequestInterception'](!![]), _0x1447c5['on']('request', _0x4545ea => {
                _0x4545ea['resourceType']() === 'image' || _0x4545ea['resourceType']() === 'font' || _0x4545ea['resourceType']() === 'media' ? _0x4545ea['abort']() : _0x4545ea['continue']();
            }), await _0x1447c5['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x1447c5['waitForSelector']('#CustomerEmail'), console['log'](_0x3a080e() + '\x20[' + _0x153988['name'] + ']\x20Task\x20' + (_0x3bf83a + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1447c5['type']('#CustomerEmail', '' + _0x52ff56[_0x3bf83a]['Email']), await _0xde5053(0x12c), await _0x1447c5['type']('#CustomerPassword', '' + _0x52ff56[_0x3bf83a]['Password']), await _0xde5053(0x226), await _0x1447c5['$eval']('#customer_login', _0x10394f => _0x10394f['submit']());
            try {
                await _0x1447c5['waitForSelector']('#orders'), await _0xde5053(0x4b0);
            } catch {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x153988['name'] + ']\x20Task\x20' + (_0x3bf83a + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x1447c5['goto']('' + _0x52ff56[_0x3bf83a]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0xde5053(0xbb8), console['log'](_0x3a080e() + '\x20[' + _0x153988['name'] + ']\x20Task\x20' + (_0x3bf83a + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x1447c5['waitForSelector']('#email');
            } catch {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x153988['name'] + ']\x20Task\x20' + (_0x3bf83a + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x1447c5['type']('#email', '' + _0x52ff56[_0x3bf83a]['Email']), await _0xde5053(0x384), await _0x1447c5['type']('#first_name', '' + _0x52ff56[_0x3bf83a]['FirstName']), await _0xde5053(0x514), await _0x1447c5['type']('#last_name', '' + _0x52ff56[_0x3bf83a]['LastName']), await _0xde5053(0x514), await _0x1447c5['type']('#street_address', _0x52ff56[_0x3bf83a]['Address1'] + '\x20' + _0x52ff56[_0x3bf83a]['HouseNumber'] + '\x20' + _0x52ff56[_0x3bf83a]['Address2']), await _0xde5053(0x2bc);
            _0x52ff56[_0x3bf83a]['Postcode'] == undefined && (_0x52ff56[_0x3bf83a]['Postcode'] = _0x52ff56[_0x3bf83a]['Zip']);
            await _0x1447c5['type']('#zip_code', '' + _0x52ff56[_0x3bf83a]['Postcode']), await _0xde5053(0x320), await _0x1447c5['type']('#city', '' + _0x52ff56[_0x3bf83a]['City']), await _0xde5053(0x320), await _0x1447c5['type']('#bday', '' + _0x52ff56[_0x3bf83a]['Bday']), await _0xde5053(0x320), await _0x1447c5['type']('#instagram', '' + _0x52ff56[_0x3bf83a]['Follower']), await _0xde5053(0x352);
            if (_0x52ff56[_0x3bf83a]['Size'] == 'RANDOM') {
                const _0x93ca95 = await _0x1447c5['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0xf380a4 => {
                    return _0xf380a4['map'](_0x357f0f => _0x357f0f['textContent']);
                });
                var _0xf18199 = Math['round'](Math['random']() * (_0x93ca95['length'] - 0x1));
                console['log'](_0x3a080e() + '\x20[' + _0x153988['name'] + ']\x20Task\x20' + (_0x3bf83a + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x93ca95[_0xf18199]), await _0x1447c5['click']('label[data-eu-size=\x22' + _0x93ca95[_0xf18199] + '\x22]');
            } else {
                console['log'](_0x3a080e() + '\x20[' + _0x153988['name'] + ']\x20Task\x20' + (_0x3bf83a + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x52ff56[_0x3bf83a]['Size']);
                try {
                    await _0x1447c5['click']('label[data-eu-size=\x22' + _0x52ff56[_0x3bf83a]['Size'] + '\x22]');
                } catch {
                    await _0x1447c5['click']('label[data-eu-size=\x22' + _0x52ff56[_0x3bf83a]['Size'] + '.0\x22]');
                }
            }
            await _0xde5053(0xbb8), await _0x1447c5['$$eval']('.raffle__checkbox-label', _0x2a304c => _0x2a304c['forEach'](_0x40a8d8 => _0x40a8d8['click']())), await _0xde5053(0x7d0), console['log'](_0x3a080e() + '\x20[' + _0x153988['name'] + ']\x20Task\x20' + (_0x3bf83a + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x1447c5['click']('#raffle__form-submit'), await _0xde5053(0x1388);
            try {
                await _0x1447c5['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x11ce0d['green'](_0x3a080e() + '\x20[' + _0x153988['name'] + ']\x20Task\x20' + (_0x3bf83a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x412aeb) {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x3bf83a + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x412aeb));
            }
        } catch (_0x4de088) {
            console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x3bf83a + 0x1) + '\x20:\x20' + _0x4de088)), _0x49af99 = 'yes';
        } finally {
            _0x44f71f && _0x44f71f['close']();
            if (_0x49af99 == 'yes' && _0x2aae30 != 0x5) {
                console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x153988['name'] + ']\x20Task\x20' + (_0x3bf83a + 0x1) + '\x20:\x20Retrying')), _0x3bf83a = _0x3bf83a - 0x1, _0x2aae30 = _0x2aae30 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x333ea7['delay'] + '\x20ms'), await _0xde5053(_0x333ea7['delay']);
        }
    }
}
async function _0xc61150(_0x20f246, _0x38bd14, _0x51707a) {
    var _0x2d4b05 = ![], _0x5c7133 = ![];
    if (_0x333ea7['captchaKey'] == '' || _0x333ea7['captchaKey'] == undefined)
        return console['log'](_0x11ce0d['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x1b66d4['use'](_0x4c7671()), _0x1b66d4['use'](_0x2ba051({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x333ea7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x53f196 = 0x0; _0x53f196 < _0x38bd14['length']; _0x53f196++) {
        var _0x5e72fe = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x38bd14[_0x53f196]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x38bd14[_0x53f196]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x2458db
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x333ea7['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4198e6
                }
            ]
        }];
        const _0x38f957 = { 'embeds': _0x5e72fe };
        _0x31de1e(_0x20f246['name'] + '\x20Task\x20' + (_0x53f196 + 0x1) + '\x20/\x20' + _0x38bd14['length'] + '\x20||\x20File:\x20' + _0x249436 + '\x20Proxies:\x20' + _0x598bd9), await _0x5a1c9d(_0x38bd14, _0x53f196);
        if (_0x38bd14[_0x53f196]['Email'] == '' || _0x38bd14[_0x53f196]['Url'] == '' || _0x38bd14[_0x53f196]['FirstName'] == '' || _0x38bd14[_0x53f196]['LastName'] == '') {
            console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x53f196 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x333ea7['useRandomProxy'] = ![])
            var _0x54a2d4 = _0x51707a[_0x53f196]['split'](':');
        else
            var _0x2a3d3e = Math['round'](Math['random']() * (_0x51707a['length'] - 0x1)), _0x54a2d4 = _0x51707a[_0x2a3d3e]['split'](':');
        const _0x312114 = await _0x1b66d4['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x54a2d4[0x0] + ':' + _0x54a2d4[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4b7cf4 = await _0x312114['newPage']();
            await _0x4b7cf4['authenticate']({
                'username': '' + _0x54a2d4[0x2],
                'password': '' + _0x54a2d4[0x3]
            }), console['log'](_0x3a080e() + '\x20[' + _0x20f246['name'] + ']\x20Task\x20' + (_0x53f196 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4b7cf4['setRequestInterception'](!![]), _0x4b7cf4['on']('request', _0x5b5145 => {
                _0x5b5145['resourceType']() === 'image' || _0x5b5145['resourceType']() === 'font' || _0x5b5145['resourceType']() === 'media' ? _0x5b5145['abort']() : _0x5b5145['continue']();
            }), await _0x4b7cf4['goto']('' + _0x38bd14[_0x53f196]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](_0x3a080e() + '\x20[' + _0x20f246['name'] + ']\x20Task\x20' + (_0x53f196 + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x4b7cf4['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x4b7cf4['type']('#comp_firstname', '' + _0x38bd14[_0x53f196]['FirstName']), await _0x4b7cf4['waitForSelector']('#comp_lastname'), await _0x4b7cf4['type']('#comp_lastname', '' + _0x38bd14[_0x53f196]['LastName']), await _0x4b7cf4['waitForSelector']('#comp_email'), await _0x4b7cf4['type']('#comp_email', '' + _0x38bd14[_0x53f196]['Email']), await _0x4b7cf4['waitForSelector']('#comp_paypalemail'), await _0x4b7cf4['type']('#comp_paypalemail', '' + _0x38bd14[_0x53f196]['Email']), await _0x4b7cf4['waitForSelector']('#comp_mobile_end'), await _0x4b7cf4['type']('#comp_mobile_end', '' + _0x38bd14[_0x53f196]['Phone']), await _0x4b7cf4['waitForSelector']('#comp_dob'), await _0x4b7cf4['type']('#comp_dob', '08/09/1992'), console['log'](_0x3a080e() + '\x20[' + _0x20f246['name'] + ']\x20Task\x20' + (_0x53f196 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x38bd14[_0x53f196]['Size'] == 'RANDOM') {
                const _0x10fac7 = await _0x4b7cf4['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x422a82 => {
                    return _0x422a82['map'](_0x32db30 => _0x32db30['value']);
                });
                var _0x3916f7 = Math['round'](Math['random']() * (_0x10fac7['length'] - 0x2));
                await _0x4b7cf4['select']('#shoesize', _0x10fac7[_0x3916f7 + 0x1]), await _0xde5053(0x3e8);
            } else {
                const _0x47d35f = await _0x4b7cf4['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1a57f2 => {
                    return _0x1a57f2['map'](_0xd36ffc => _0xd36ffc['innerText']);
                }), _0x50078f = await _0x4b7cf4['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x24596a => {
                    return _0x24596a['map'](_0x26d6a5 => _0x26d6a5['value']);
                });
                var _0x33e536 = _0x38bd14[_0x53f196]['Size'];
                for (var _0x53dff6 = 0x1; _0x53dff6 < _0x50078f['length']; _0x53dff6++) {
                    var _0x3bb9c4 = _0x47d35f[_0x53dff6]['split']('\x20')[0x0];
                    if (_0x3bb9c4 == _0x33e536) {
                        await _0x4b7cf4['select']('#shoesize', _0x50078f[_0x53dff6]);
                        break;
                    } else {
                        if (_0x53dff6 + 0x1 == _0x50078f['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x4b7cf4['waitForSelector']('#comp_address1'), await _0x4b7cf4['type']('#comp_address1', _0x38bd14[_0x53f196]['Address1'] + '\x20' + _0x38bd14[_0x53f196]['HouseNumber']), await _0x4b7cf4['waitForSelector']('#comp_address2'), await _0x4b7cf4['type']('#comp_address2', '' + _0x38bd14[_0x53f196]['Address2']), await _0x4b7cf4['waitForSelector']('#comp_address2'), await _0x4b7cf4['type']('#comp_address3', '' + _0x38bd14[_0x53f196]['City']), await _0x4b7cf4['waitForSelector']('#comp_postcode'), await _0x4b7cf4['type']('#comp_postcode', '' + _0x38bd14[_0x53f196]['Zip']), console['log'](_0x3a080e() + '\x20[' + _0x20f246['name'] + ']\x20Task\x20' + (_0x53f196 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xde5053(0x4b0), await _0x4b7cf4['click']('label#emailhold'), await _0xde5053(0x5dc), await _0x4b7cf4['click']('#preauth_tandc_email\x20>\x20label'), await _0xde5053(0x5dc), await _0x4b7cf4['click']('#submit'), await _0x4b7cf4['waitForSelector']('#paymentWrap'), console['log'](_0x3a080e() + '\x20[' + _0x20f246['name'] + ']\x20Task\x20' + (_0x53f196 + 0x1) + '\x20:\x20' + _0x11ce0d['blue']('Awaiting\x20Paypal\x20Payment')), _0x312114['on']('targetcreated', async _0x5ed26a => {
                if (_0x5ed26a['type']() === 'page') {
                    const _0x1be1c6 = await _0x5ed26a['page']();
                    async function _0x3eba9c() {
                        try {
                            await _0x4b7cf4['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x5c7133 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x3a7591() {
                        try {
                            await _0x4b7cf4['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x2d4b05 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x3a7591(), _0x3eba9c(), await _0xde5053(0x493e0);
                }
            });
            async function _0x212bd4() {
                for (let _0xceb3cc = 0x0; _0xceb3cc < 0x12c; _0xceb3cc++) {
                    if (_0x2d4b05 == !![]) {
                        console['log'](_0x11ce0d['green'](_0x3a080e() + '\x20[' + _0x20f246['name'] + ']\x20Task\x20' + (_0x53f196 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1db5ab(_0x423cd0, _0x38f957);
                        return;
                    } else {
                        if (_0x5c7133)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0xde5053(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0xde5053(0xbb8), await _0x4b7cf4['click']('.zoid-outlet'), await _0xde5053(0x7d0), await _0x212bd4();
        } catch (_0x8d7951) {
            console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x20f246['name'] + ']\x20Task\x20' + (_0x53f196 + 0x1) + '\x20:\x20' + _0x8d7951)), _0x5e72fe[0x0]['title'] = 'Failed\x20entry', _0x5e72fe[0x0]['description'] = _0x20f246['name'] + ':\x20' + _0x8d7951, await _0x1db5ab(_0x29db11, _0x38f957);
        } finally {
            _0x312114 && _0x312114['close'](), console['log']('Waiting\x20for\x20' + _0x333ea7['delay'] + '\x20ms'), await _0xde5053(_0x333ea7['delay']);
        }
    }
}
async function _0x58dc9e(_0x7d31c7, _0x26b6f1, _0x405ede, _0x3f1245) {
    var _0xbb8a80 = {}, _0x2689b8 = [], _0x29c17f = {}, _0x6dfff7 = [
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
    !_0x3f1245 && (_0x3f1245 = {});
    if (_0x26b6f1 != 'ver') {
        _0x31de1e(_0x405ede['name'] + '\x20Task\x20' + (_0x7d31c7 + 0x1) + '\x20/\x20' + _0x3f1245['length'] + '\x20||\x20File:\x20' + _0x249436 + '\x20Proxies:\x20' + _0x598bd9), await _0x5a1c9d(_0x3f1245, _0x7d31c7), _0x2689b8 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2458db
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3f1245[_0x7d31c7]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x333ea7['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4198e6
                }
            ]
        }], _0x29c17f = { 'embeds': _0x2689b8 }, _0xbb8a80 = _0x405ede['data'];
        _0x26b6f1 == 'exp' ? _0xbb8a80['data']['attributes']['email'] = '' + _0x3f1245[_0x7d31c7]['FirstName'] + _0x3f1245[_0x7d31c7]['LastName'] + _0x333ea7['catchall'] : _0xbb8a80['data']['attributes']['email'] = '' + _0x3f1245[_0x7d31c7]['Email'];
        if (_0x3f1245[_0x7d31c7]['Size'] == 'RANDOM') {
        }
        _0xbb8a80['data']['attributes']['properties']['$first_name'] = '' + _0x3f1245[_0x7d31c7]['FirstName'], _0xbb8a80['data']['attributes']['properties']['$last_name'] = '' + _0x3f1245[_0x7d31c7]['LastName'], _0xbb8a80['data']['attributes']['properties']['$address1'] = _0x3f1245[_0x7d31c7]['Address1'] + '\x20' + _0x3f1245[_0x7d31c7]['Address2'] + '\x20' + _0x3f1245[_0x7d31c7]['HouseNumber'], _0xbb8a80['data']['attributes']['properties']['$zip'] = '' + _0x3f1245[_0x7d31c7]['Zip'], _0xbb8a80['data']['attributes']['properties']['$city'] = '' + _0x3f1245[_0x7d31c7]['City'], _0xbb8a80['data']['attributes']['properties']['$country'] = '' + _0x3f1245[_0x7d31c7]['Country'], _0xbb8a80['data']['attributes']['properties']['Size'] = '' + _0x3f1245[_0x7d31c7]['Size'], _0xbb8a80['data']['attributes']['properties']['$phone_number'] = '' + _0x3f1245[_0x7d31c7]['Phone'], _0xbb8a80['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x3f1245[_0x7d31c7]['Follower'];
    }
    if (_0x333ea7['useRandomProxy'] = ![])
        var _0x3f531d = _0x45af39()[_0x7d31c7]['split'](':');
    else
        var _0x364886 = Math['round'](Math['random']() * (_0x45af39()['length'] - 0x1)), _0x3f531d = _0x45af39()[_0x364886]['split'](':');
    var _0xbb986a = {
        'jar': _0x2c7cef,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x405ede['url'],
        'headers': _0x405ede['headers'],
        'body': JSON['stringify'](_0xbb8a80),
        'proxy': 'http://' + _0x3f531d[0x2] + ':' + _0x3f531d[0x3] + '@' + _0x3f531d[0x0] + ':' + _0x3f531d[0x1]
    };
    return _0x26b6f1 != 'ver' && (_0xbb986a['url'] = _0x405ede['url'], _0xbb986a['headers'] = _0x405ede['headers']), _0x26b6f1 == 'ver' && (_0xbb986a['method'] = 'GET'), new Promise(function (_0x1b96f4, _0x63fa95) {
        callback = async (_0x411851, _0x133a54, _0x4cee56) => {
            !_0x411851 && _0x133a54['statusCode'] == 0xca || !_0x411851 && _0x133a54['statusCode'] == 0xc8 ? (_0x26b6f1 != 'ver' && await _0x1db5ab(_0x423cd0, _0x29c17f), _0x1b96f4(console['log'](_0x11ce0d['green'](_0x3a080e() + '\x20[' + _0x405ede['name'] + ']\x20Task\x20' + (_0x7d31c7 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x26b6f1 != 'ver' && (_0x2689b8[0x0]['title'] = 'Failed\x20entry', _0x2689b8[0x0]['description'] = '' + _0x411851, await _0x1db5ab(_0x29db11, _0x29c17f)), _0x63fa95(console['log'](_0x3a080e() + '\x20[' + _0x405ede['name'] + ']\x20Task\x20' + (_0x7d31c7 + 0x1) + ':\x20' + _0x411851)));
        };
        try {
            _0x26b6f1 != 'ver' && console['log'](_0x3a080e() + '\x20[' + _0x405ede['name'] + ']\x20Task\x20' + (_0x7d31c7 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xbb8a80['data']['attributes']['email']), _0x3b7b99(_0xbb986a, callback);
        } catch (_0x2a53a0) {
            console['log'](_0x3a080e() + '\x20Task\x20' + (_0x7d31c7 + 0x1) + ':\x20' + _0x2a53a0);
        }
    });
}
;
async function _0x1ff13d() {
    await _0x48c54c(), console['clear']();
    if (_0x4198e6 != 'devkey') {
        let _0x2936ec = await _0xa8c136['autoUpdate']();
        if (_0x2936ec === 'yes')
            return _0x5b8fbc('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x2b68dd == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0xde5053(0x2710);
        ;
    }
    await _0x350f59(_0x2b68dd);
    if (_0x2c1f === ![])
        return console['log']('Closing\x20Browser'), await _0xde5053(0xbb8);
    else
        try {
            async function _0x3c76ce() {
                _0x31de1e('JRaffles\x20' + _0x4198e6), console['clear'](), console['log']('Welcome\x20to\x20' + _0x11ce0d['cyan']('JRaffles();') + '\x20' + _0x4198e6), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x5ce5e = 0x0; _0x5ce5e < _0x4362fc['length']; _0x5ce5e++) {
                    if (_0x4362fc[_0x5ce5e]['name'] === 'Reload\x20Settings' || _0x4362fc[_0x5ce5e]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x5ce5e + ')\x20[' + _0x4362fc[_0x5ce5e]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x4362fc['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x4362fc['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2e3917();
                if (_0x4362fc[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x28d2b4(_0x4362fc[taskModule]['modules']);
                    var _0x29a928 = _0x4362fc[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x52f75e = await _0x178ab2();
                    await _0x800f11(_0x52f75e), await _0x379d3c();
                    var _0x2f2835 = await _0x35fcef();
                    return await afewFunction(_0x581ba3[_0x1a2a49], 'nor', _0x29a928, _0x2f2835, _0x52f75e), _0x3c76ce();
                } else {
                    if (_0x4362fc[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x28d2b4(_0x4362fc[taskModule]['modules']);
                        var _0x29a928 = _0x4362fc[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x52f75e = await _0x178ab2(), _0x169e3b = await _0x35fcef();
                            console['log']('Starting\x20' + _0x169e3b['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x4c52b8 = 0x0; _0x4c52b8 < _0x169e3b['length']; _0x4c52b8++) {
                                console['log'](_0x3a080e() + '\x20[' + _0x29a928['name'] + ']\x20Task\x20' + (_0x4c52b8 + 0x1) + ':\x20Getting\x20Session'), await _0x2782ec(_0x4c52b8, 'nor', _0x29a928, _0x169e3b, _0x52f75e), console['log'](_0x3a080e() + '\x20[' + _0x29a928['name'] + ']\x20Sleeping\x20for\x20' + _0x333ea7['MahaDelay'] + '\x20ms'), await _0xde5053(_0x333ea7['MahaDelay']);
                            }
                            ;
                            return _0x3c76ce();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x52f75e = await _0x178ab2();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0xc6cd97(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x4c52b8 = 0x0; _0x4c52b8 < links['length']; _0x4c52b8++) {
                                    _0x29a928['url'] = links[_0x4c52b8], console['log'](_0x3a080e() + '\x20[' + _0x29a928['name'] + ']\x20Task\x20' + (_0x4c52b8 + 0x1) + ':\x20Getting\x20Session'), await _0x2782ec(_0x4c52b8, 'ver', _0x29a928, _0x169e3b, _0x52f75e), console['log'](_0x3a080e() + '\x20[' + _0x29a928['name'] + ']\x20Sleeping\x20for\x20' + _0x333ea7['verificationDelay'] + '\x20ms'), await _0xde5053(_0x333ea7['verificationDelay']);
                                }
                                ;
                                return _0x3c76ce();
                            }
                        }
                    } else {
                        if (_0x4362fc[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x52f75e = await _0x178ab2(), _0x58308f = await _0x35fcef();
                            return await _0x18c27c(_0x58308f, _0x52f75e), await _0xde5053(0x1388), _0x3c76ce();
                        } else {
                            if (_0x4362fc[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x28d2b4(_0x4362fc[taskModule]['modules']);
                                var _0x29a928 = _0x4362fc[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x796cd4 = await _0x35fcef();
                                    console['log']('Starting\x20' + _0x11ce0d['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x4c52b8 = 0x0; _0x4c52b8 < _0x796cd4['length']; _0x4c52b8++) {
                                        console['log'](_0x3a080e() + '\x20[' + _0x29a928['name'] + ']\x20Task\x20' + (_0x4c52b8 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x58dc9e(_0x4c52b8, 'nor', _0x29a928, _0x796cd4);
                                        } catch {
                                            console['log'](_0x11ce0d['red'](_0x3a080e() + '\x20[' + _0x29a928['name'] + ']\x20Task\x20' + (_0x4c52b8 + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](_0x3a080e() + '\x20[' + _0x29a928['name'] + ']\x20Sleeping\x20for\x20' + _0x333ea7['delay'] + '\x20ms'), await _0xde5053(_0x333ea7['delay']);
                                    }
                                    return _0x3c76ce();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0xc6cd97(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x4c52b8 = 0x0; _0x4c52b8 < links['length']; _0x4c52b8++) {
                                            try {
                                                _0x29a928['url'] = links[_0x4c52b8], console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Task\x20' + (_0x4c52b8 + 0x1) + ':\x20Getting\x20Session'), await _0x58dc9e(_0x4c52b8, 'ver', _0x29a928), console['log'](_0x3a080e() + '\x20[' + _0x4362fc[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x333ea7['verificationDelay'] + '\x20ms'), await _0xde5053(_0x333ea7['verificationDelay']);
                                            } catch (_0x352e09) {
                                                console['log'](_0x352e09);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x3c76ce();
                                    }
                                }
                                ;
                            } else {
                                if (_0x4362fc[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x28d2b4(_0x4362fc[taskModule]['modules']);
                                    var _0x29a928 = _0x4362fc[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x18f45d('https://bouncewear.com/nl/account/register', _0x29a928);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x4362fc[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x28d2b4(_0x4362fc[taskModule]['modules']);
                                        var _0x29a928 = _0x4362fc[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x52f75e = await _0x178ab2(), _0x4b2465 = await _0x35fcef();
                                            return await _0x25a1af('https://patta.nl/account/register', _0x29a928, _0x4b2465, _0x52f75e), _0x3c76ce();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x52f75e = await _0x178ab2(), _0x4b2465 = await _0x35fcef();
                                                return await _0x4ccb50('', _0x29a928, _0x4b2465, _0x52f75e), _0x3c76ce();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x4362fc[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await _0x28d2b4(_0x4362fc[taskModule]['modules']);
                                            var _0x29a928 = _0x4362fc[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x52f75e = await _0x178ab2(), _0x2d332f = await _0x35fcef();
                                                return await _0x4a170f('https://www.kickz.com/nl/login/', _0x29a928, _0x2d332f, _0x52f75e), _0x3c76ce();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x52f75e = await _0x178ab2(), _0x2d332f = await _0x35fcef();
                                                    return await _0x278881(_0x29a928, _0x2d332f, _0x52f75e), _0x3c76ce();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x4362fc[taskModule]['name'] == 'JD') {
                                                taskFunction = await _0x28d2b4(_0x4362fc[taskModule]['modules']);
                                                var _0x29a928 = _0x4362fc[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x52f75e = await _0x178ab2(), _0x2fa11c = await _0x35fcef();
                                                    return await _0xc61150(_0x29a928, _0x2fa11c, _0x52f75e), _0x3c76ce();
                                                }
                                            } else {
                                                if (_0x4362fc[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x3f60c4 = 0x0;
                                                    for (const _0x5c5d60 in _0x333ea7) {
                                                        console['log']('(' + _0x3f60c4 + ')\x20' + _0x5c5d60 + '\x20:\x20' + _0x333ea7[_0x5c5d60]), _0x3f60c4++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x3f60c4 + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x410b3d = await _0x38535b();
                                                    if (_0x410b3d == _0x3f60c4)
                                                        return _0x3c76ce();
                                                    console['clear'];
                                                    var _0x12b15d = 0x0;
                                                    for (var _0x2eec3b in _0x333ea7) {
                                                        if (_0x410b3d == _0x12b15d) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x2eec3b + '\x20:'), _0x333ea7[_0x2eec3b] = await _0x4eaa00(), _0x486816['writeFileSync']('../settings.json', JSON['stringify'](_0x333ea7));
                                                            break;
                                                        } else
                                                            _0x12b15d++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await _0xde5053(0xbb8), _0x3c76ce();
                                                } else {
                                                    if (_0x4362fc[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await _0x48c54c(), _0x3c76ce();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            _0x4362fc[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x56fb41 = await _0xb89248();
                                                            _0x56fb41 == 'ModuleVoorDeBoys' ? (await _0x800f11(), await _0x379d3c(), await afewFunction(_0x581ba3[_0x1a2a49], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0xde5053(0xbb8));
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
            await _0x3c76ce();
        } catch (_0x1445d1) {
            return console['log'](_0x1445d1), await _0xde5053(0x3a98);
        }
}
;
_0x31de1e('JRaffles\x20' + _0x4198e6), _0x48c54c(), _0x1ff13d();