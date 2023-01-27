var _0x678f2c = require('exe');
const { execFile: _0x4ba567 } = require('child_process'), _0x3672a1 = require('puppeteer-extra'), _0x86d56d = require('puppeteer-extra-plugin-recaptcha'), _0x2bb104 = require('puppeteer-extra-plugin-stealth'), _0x555803 = require('chalk'), _0x58cfeb = require('node-bash-title'), _0x1ce35f = require('fs'), _0x578300 = require('axios'), _0x322da8 = require('papaparse');
var _0xa0be0c = require('random-name');
const _0x37aeda = require('request');
var _0x498610 = require('prompt');
const _0x2cc6a9 = _0x37aeda['jar']();
var _0x50ba2c = {};
const _0x281acc = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x300e77 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x138a7e = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x27d833 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE';
var _0x3f6a6e = 'https://discord.com/api/webhooks/', _0xfeb107 = '' + _0x3f6a6e + _0x138a7e, _0x147c7c = '' + _0x3f6a6e + _0x27d833, _0x184a41 = '' + _0x3f6a6e + _0x281acc, _0x24d596 = '' + _0x3f6a6e + _0x300e77;
const _0x2515bd = JSON['parse'](_0x1ce35f['readFileSync']('../package.json', 'utf-8')), _0xcb2ade = _0x2515bd['version'];
var _0x57186d, _0x23b65f, _0x4f5f3f, _0x3570de, _0xa0af19, _0x3fba73, _0x20e912;
const _0x228f6e = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x50ae6a = ![];
const _0x41401e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x3c1570 = '0123456789';
var _0x48ded4 = _0x41401e['split']('');
const _0x92dd54 = require('auto-git-update'), { PageEmittedEvents: _0xe32cb7 } = require('puppeteer'), { getRandomValues: _0x10d9b6 } = require('crypto'), { resolve: _0x402474 } = require('path'), _0x437ba1 = {
    'repository': 'https://github.com/Jarno97/JRafflesBot',
    'branch': 'main',
    'fromReleases': ![],
    'tempLocation': 'C:/temp/jraffles'
}, _0x5c0644 = new _0x92dd54(_0x437ba1);
async function _0x4c0bef() {
    _0xa0af19 = _0x1ce35f['readdirSync']('../proxies'), _0x3570de = _0x1ce35f['readdirSync']('../tasks'), _0x50ba2c = JSON['parse'](_0x1ce35f['readFileSync']('../settings.json', 'utf-8')), !_0x50ba2c['delay'] && (_0x50ba2c['delay'] = 0x2710, _0x1ce35f['writeFileSync']('../settings.json', JSON['stringify'](_0x50ba2c))), !_0x50ba2c['captchaKey'] && (_0x50ba2c['captchaKey'] = '', _0x1ce35f['writeFileSync']('../settings.json', JSON['stringify'](_0x50ba2c))), !_0x50ba2c['useRandomProxy'] && (_0x50ba2c['useRandomProxy'] = !![], _0x1ce35f['writeFileSync']('../settings.json', JSON['stringify'](_0x50ba2c))), !_0x50ba2c['webhook'] && (_0x50ba2c['webhook'] = '', _0x1ce35f['writeFileSync']('../settings.json', JSON['stringify'](_0x50ba2c))), _0x3f6a6e = _0x50ba2c['webhook'], _0x3fba73 = _0x50ba2c['licenseKey'];
}
let _0x29122f, _0x49c999 = [], _0x272c43;
const _0x127b8e = _0x19c220 => new Promise(_0x5582f8 => setTimeout(_0x5582f8, _0x19c220));
function _0x584a3b(_0x1f22e9, _0x1e1fde) {
    return Math['floor'](Math['random']() * (_0x1e1fde - _0x1f22e9 + 0x1) + _0x1f22e9);
}
async function _0x11c5ed(_0x1dbaa9) {
    return _0x578300['get']('https://api.hyper.co/v4/licenses/' + _0x1dbaa9, { 'headers': { 'Authorization': 'Bearer\x20' + _0x228f6e } })['then'](_0x2679a0 => _0x2679a0['data'])['catch'](() => null);
}
;
async function _0x61ab69(_0x5503dc) {
    console['clear'](), console['log']('Checking\x20license\x20' + _0x3fba73 + '...'), await _0x127b8e(0x5dc);
    const _0x956ad7 = await _0x11c5ed(_0x5503dc);
    _0x20e912 = JSON['stringify'](_0x956ad7['user']['username'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x956ad7)
        return console['log']('License\x20not\x20found');
    if (!_0x956ad7['user'])
        return console['log']('License\x20not\x20bound');
    return _0x956ad7['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x50ae6a = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x50ae6a = ![]);
}
async function _0x52d11f() {
    var _0x3356bc = await _0x498610['get']('Module');
    return console['clear'](), _0x3356bc['Module'];
}
;
async function _0x268aa4() {
    var _0x2a5ec5 = await _0x498610['get']('Setting');
    return console['clear'](), _0x2a5ec5['Setting'];
}
async function _0x100e14() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x3d5d07 = 0x0; _0x3d5d07 < _0x3570de['length']; _0x3d5d07++) {
        console['log']('\x20(' + _0x3d5d07 + ')\x20' + _0x3570de[_0x3d5d07]);
    }
    console['log']('');
    var _0x4cfd6b = await _0x498610['get']('Task'), _0x304ff7 = _0x1ce35f['readFileSync']('../tasks/' + _0x3570de[_0x4cfd6b['Task']], 'utf-8');
    return _0x4f5f3f = _0x322da8['parse'](_0x304ff7, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x555803['blue'](_0x3570de[_0x4cfd6b['Task']])), _0x57186d = _0x3570de[_0x4cfd6b['Task']], _0x4f5f3f;
}
async function _0x34ee81() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x101263 = 0x0; _0x101263 < _0xa0af19['length']; _0x101263++) {
        console['log']('\x20(' + _0x101263 + ')\x20' + _0xa0af19[_0x101263]);
    }
    console['log']('');
    var _0x697119 = await _0x498610['get']('Proxies'), _0xd5deea = _0x1ce35f['readFileSync']('../proxies/' + _0xa0af19[_0x697119['Proxies']], 'utf-8')['split']('\x0a');
    let _0x4697a5 = _0xd5deea['map']((_0x38164d, _0x3448bb) => {
        sanatizeProxy = _0x38164d['replace']('\x0d', '');
        if (_0xd5deea[_0x3448bb + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x23b65f = _0xa0af19[_0x697119['Proxies']], console['clear'](), _0x4697a5;
}
async function _0x478383() {
    var _0x4af9d4 = await _0x498610['get']('Value');
    return console['clear'](), _0x4af9d4['Value'];
}
async function _0x23ca5a(_0x334f90) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x3522bf = 0x0; _0x3522bf < _0x334f90['length']; _0x3522bf++) {
        console['log']('\x20(' + _0x3522bf + ')\x20[' + _0x334f90[_0x3522bf]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x478977 = await _0x498610['get']('Module');
    return _0x478977['Module'];
}
async function _0xdc74fe() {
    var _0x4c175f = await _0x498610['get']('Password');
    return console['clear'](), _0x4c175f['Password'];
}
;
async function _0x38e411() {
    var _0x27568d = await _0x498610['get']('Links');
    return _0x27568d['Links'];
}
;
async function _0x5066a3() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x27e2a7 = 0x0; _0x27e2a7 < _0x49c999['length']; _0x27e2a7++) {
        console['log']('\x20(' + _0x27e2a7 + ')\x20' + _0x49c999[_0x27e2a7]);
    }
    ;
    console['log']();
    let _0x3be05f = await _0x498610['get']('Product');
    console['clear'](), _0x272c43 = _0x3be05f['Product'];
    return;
}
;
function _0x139c28() {
    var _0xdd85a = new Date(Date['now']())['toLocaleTimeString']();
    return _0xdd85a;
}
;
const _0x350147 = [
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
async function _0x1a83e7(_0xcfe28e, _0x17f497) {
    let _0x27a727 = { 'headers': { 'content-type': 'application/json' } };
    await _0x578300['post'](_0xcfe28e, _0x17f497, _0x27a727);
}
;
async function _0x2cdff8(_0x4bb6e3, _0x547661) {
    var _0x14f33f = _0x4bb6e3[_0x547661]['Address1']['split'](''), _0x2b87bc = _0x4bb6e3[_0x547661]['Address2']['split'](''), _0x1115f3 = _0x4bb6e3[_0x547661]['Email']['split']('@');
    for (var _0xb0ce02 = 0x0; _0xb0ce02 < _0x14f33f['length']; _0xb0ce02++) {
        if (_0x14f33f[_0xb0ce02] == 'X') {
            var _0x2e00ec = Math['round'](Math['random']() * (_0x41401e['length'] - 0x1));
            _0x14f33f[_0xb0ce02] = _0x48ded4[_0x2e00ec];
        }
    }
    ;
    for (var _0xb0ce02 = 0x0; _0xb0ce02 < _0x2b87bc['length']; _0xb0ce02++) {
        if (_0x2b87bc[_0xb0ce02] == 'X') {
            var _0x2e00ec = Math['round'](Math['random']() * (_0x41401e['length'] - 0x1));
            _0x2b87bc[_0xb0ce02] = _0x48ded4[_0x2e00ec];
        }
    }
    ;
    _0x4bb6e3[_0x547661]['FirstName'] == 'RANDOM' && (_0x4bb6e3[_0x547661]['FirstName'] = _0xa0be0c['first']());
    _0x4bb6e3[_0x547661]['LastName'] == 'RANDOM' && (_0x4bb6e3[_0x547661]['LastName'] = _0xa0be0c['last']());
    _0x1115f3[0x0] == 'RANDOM' ? _0x1115f3[0x0] = '' + _0xa0be0c['first']() + _0xa0be0c['last']() + '@' : _0x1115f3[0x0] = _0x1115f3[0x0] + '@';
    _0x4bb6e3[_0x547661]['Phone'] == 'RANDOM' && (_0x4bb6e3[_0x547661]['Phone'] = _0x584a3b(0x3b9aca00, 0x2540be3ff));
    if (_0x4bb6e3[_0x547661]['Follower'] == 'RANDOM') {
        var _0x2f5d94 = _0x584a3b(0x1, 0x270f);
        _0x4bb6e3[_0x547661]['Follower'] = '' + _0xa0be0c['first']() + _0xa0be0c['last']() + _0x2f5d94;
    }
    _0x4bb6e3[_0x547661]['Email'] = _0x1115f3['join'](''), _0x4bb6e3[_0x547661]['Address1'] = _0x14f33f['join'](''), _0x4bb6e3[_0x547661]['Address2'] = _0x2b87bc['join']('');
    return;
}
;
function _0x3315ae() {
    let _0x2f1401 = proxyFile['split']('\x0a'), _0x3a54d6 = _0x2f1401['map']((_0x17b7bc, _0x231988) => {
        sanatizeProxy = _0x17b7bc['replace']('\x0d', '');
        if (_0x2f1401[_0x231988 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3a54d6;
}
;
async function _0x228397(_0x458571) {
    var _0x156066 = _0x458571[0x1]['split'](':');
    const _0x535f95 = await _0x3672a1['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x156066[0x0] + ':' + _0x156066[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x3a9425 = await _0x535f95['newPage']();
        await _0x3a9425['authenticate']({
            'username': '' + _0x156066[0x2],
            'password': '' + _0x156066[0x3]
        }), console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x3a9425['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3a9425['setRequestInterception'](!![]), _0x3a9425['on']('request', _0x2628b7 => {
            _0x2628b7['resourceType']() === 'image' || _0x2628b7['resourceType']() === 'font' || _0x2628b7['resourceType']() === 'media' ? _0x2628b7['abort']() : _0x2628b7['continue']();
        }), await _0x3a9425['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x3a9425['waitForTimeout'](0xbb8), await _0x3a9425['waitForSelector']('.product-card');
        const _0x481ef4 = await _0x3a9425['$$eval']('a.product-card', _0x53028b => {
            return _0x53028b['map'](_0x122ebb => _0x122ebb['href']);
        });
        return _0x49c999 = _0x481ef4;
    } catch (_0x1589d7) {
        console['log']('\x20' + _0x1589d7);
    } finally {
        _0x535f95['close'](), console['clear']();
    }
}
;
async function _0x142c55(_0x48856b, _0x16a02b, _0x27eb30, _0x222874, _0x4449e5) {
    await _0x2cdff8(_0x222874, _0x48856b);
    var _0x32e2fe = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x20e912
            },
            {
                'name': 'Size',
                'value': '' + _0x222874[_0x48856b]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x50ba2c['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0xcb2ade
            }
        ]
    }];
    const _0x4c0fc0 = { 'embeds': _0x32e2fe };
    if (_0x50ba2c['useRandomProxy'] = ![])
        var _0x37df70 = _0x4449e5[_0x48856b]['split'](':');
    else
        var _0x326c8d = Math['round'](Math['random']() * (_0x4449e5['length'] - 0x1)), _0x37df70 = _0x4449e5[_0x326c8d]['split'](':');
    var _0x25f657 = _0x27eb30['data'];
    _0x16a02b == 'exp' ? _0x25f657['data']['attributes']['email'] = '' + _0x222874[_0x48856b]['FirstName'] + _0x222874[_0x48856b]['LastName'] + _0x50ba2c['catchall'] : _0x25f657['data']['attributes']['email'] = '' + _0x222874[_0x48856b]['Email'];
    _0x25f657['data']['attributes']['properties']['$first_name'] = '' + _0x222874[_0x48856b]['FirstName'], _0x25f657['data']['attributes']['properties']['$last_name'] = '' + _0x222874[_0x48856b]['LastName'], _0x25f657['data']['attributes']['properties']['$address1'] = _0x222874[_0x48856b]['Address1'] + '\x20' + _0x222874[_0x48856b]['Address2'], _0x25f657['data']['attributes']['properties']['$zip'] = '' + _0x222874[_0x48856b]['Zip'], _0x25f657['data']['attributes']['properties']['$city'] = '' + _0x222874[_0x48856b]['City'], _0x25f657['data']['attributes']['properties']['$country'] = '' + _0x222874[_0x48856b]['Country'], _0x25f657['data']['attributes']['properties']['Size'] = '' + _0x222874[_0x48856b]['Size'], _0x25f657['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x222874[_0x48856b]['Follower'];
    var _0x45b7ef = {
        'jar': _0x2cc6a9,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x27eb30['url'],
        'headers': _0x27eb30['headers'],
        'body': JSON['stringify'](_0x25f657),
        'proxy': 'http://' + _0x37df70[0x2] + ':' + _0x37df70[0x3] + '@' + _0x37df70[0x0] + ':' + _0x37df70[0x1]
    };
    return _0x16a02b === 'ver' && (_0x45b7ef['method'] = 'GET'), new Promise(function (_0x12f110, _0x14100b) {
        callback = async (_0x46213d, _0x43126f, _0x17104b) => {
            !_0x46213d && _0x43126f['statusCode'] == 0xca || !_0x46213d && _0x43126f['statusCode'] == 0xc8 ? _0x12f110(console['log'](_0x555803['green'](_0x139c28() + '\x20[' + _0x27eb30['name'] + ']\x20Task\x20' + (_0x48856b + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x32e2fe[0x0]['title'] = 'Failed\x20entry', _0x32e2fe[0x0]['description'] = '' + _0x46213d, await _0x1a83e7(_0x24d596, _0x4c0fc0), _0x14100b(console['log'](_0x139c28() + '\x20[' + _0x27eb30['name'] + ']\x20Task\x20' + (_0x48856b + 0x1) + ':\x20' + _0x46213d)));
        };
        try {
            _0x16a02b === 'ver' ? console['log'](_0x139c28() + '\x20[' + _0x27eb30['name'] + ']\x20Task\x20' + (_0x48856b + 0x1) + ':\x20Verifying.') : console['log'](_0x139c28() + '\x20[' + _0x27eb30['name'] + ']\x20Task\x20' + (_0x48856b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x25f657['data']['attributes']['email']), _0x37aeda(_0x45b7ef, callback);
        } catch (_0x572a71) {
            console['log'](_0x139c28() + '\x20Task\x20' + (_0x48856b + 0x1) + ':\x20' + _0x572a71);
        }
    });
}
;
async function _0x35f6fd(_0x151b7f, _0x3d209a) {
    _0x3672a1['use'](_0x2bb104()), _0x3672a1['use'](_0x86d56d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x50ba2c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x101e3f = 0x0; _0x101e3f < _0x151b7f['length']; _0x101e3f++) {
        var _0x3f79d0 = '', _0x20f332 = 0x0, _0x1cef1c = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x20e912
                },
                {
                    'name': 'Product',
                    'value': '' + _0x151b7f[_0x101e3f]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x151b7f[_0x101e3f]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x50ba2c['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0xcb2ade
                }
            ]
        }];
        const _0x2e2a87 = { 'embeds': _0x1cef1c };
        await _0x2cdff8(_0x151b7f, _0x101e3f);
        if (_0x151b7f[_0x101e3f]['Email'] == '' || _0x151b7f[_0x101e3f]['FirstName'] == '' || _0x151b7f[_0x101e3f]['LastName'] == '' || _0x151b7f[_0x101e3f]['Country'] == '' || _0x151b7f[_0x101e3f]['Size'] == '' || _0x151b7f[_0x101e3f]['Address1'] == '' || _0x151b7f[_0x101e3f]['Zip'] == '') {
            console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x151b7f[_0x101e3f]['Email'] == '' || _0x151b7f[_0x101e3f]['FirstName'] == '' || _0x151b7f[_0x101e3f]['LastName'] == '' || _0x151b7f[_0x101e3f]['Country'] == '' || _0x151b7f[_0x101e3f]['Size'] == '' || _0x151b7f[_0x101e3f]['Address1'] == '' || _0x151b7f[_0x101e3f]['Zip'] == '' || _0x151b7f[_0x101e3f]['Phone'] == '') {
            console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x1af420 = '' + _0x151b7f[_0x101e3f]['Url'];
        if (_0x50ba2c['useRandomProxy'] = ![])
            var _0x2b5efa = _0x3d209a[_0x101e3f]['split'](':');
        else
            var _0x302cab = Math['round'](Math['random']() * (_0x3d209a['length'] - 0x1)), _0x2b5efa = _0x3d209a[_0x302cab]['split'](':');
        const _0x4c3394 = await _0x3672a1['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x2b5efa[0x0] + ':' + _0x2b5efa[0x1]]
        });
        try {
            const _0x1f540f = await _0x4c3394['newPage']();
            await _0x1f540f['authenticate']({
                'username': '' + _0x2b5efa[0x2],
                'password': '' + _0x2b5efa[0x3]
            }), console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1f540f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1f540f['setRequestInterception'](!![]), _0x1f540f['on']('request', _0x3dd269 => {
                _0x3dd269['resourceType']() === 'image' || _0x3dd269['resourceType']() === 'font' || _0x3dd269['resourceType']() === 'media' ? _0x3dd269['abort']() : _0x3dd269['continue']();
            }), await _0x1f540f['goto'](_0x1af420), await _0x127b8e(0xbb8), await _0x1f540f['waitForSelector']('.control__JhutY'), await _0x1f540f['click']('.control__JhutY'), await _0x127b8e(0x1f4);
            if (_0x151b7f[_0x101e3f]['Size'] != 'RANDOM')
                try {
                    const _0x3c1036 = await _0x1f540f['$x']('//div[contains(text(),\x20\x27' + _0x151b7f[_0x101e3f]['Size'] + '\x27)]');
                    await _0x3c1036[0x0]['click']();
                } catch {
                    console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x520460 = await _0x1f540f['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x1b1c18 = Math['round'](Math['random']() * (_0x520460['length'] - 0x1));
                await _0x520460[_0x1b1c18]['click']();
            }
            await _0x127b8e(0x4b0);
            const _0x542f02 = await _0x1f540f['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x542f02[0x0]['click'](), await _0x1f540f['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1f540f['type']('input[name=\x22email\x22]', '' + _0x151b7f[_0x101e3f]['Email']), await _0x127b8e(0x640), await _0x1f540f['type']('input[name=\x22phone\x22]', '' + _0x151b7f[_0x101e3f]['Phone']), await _0x127b8e(0x4b0), await _0x1f540f['click']('button.btn.continue-button__1RtsS'), await _0x127b8e(0x4b0);
            try {
                await _0x1f540f['type']('input[name=\x22firstName\x22]', '' + _0x151b7f[_0x101e3f]['FirstName']), await _0x127b8e(0x258);
            } catch {
                const _0x1df6c6 = await _0x1f540f['$$eval']('.invalid-feedback\x20>\x20div', _0x4779ea => {
                    return _0x4779ea['map'](_0x548e0a => _0x548e0a['innerText']);
                });
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x20' + _0x1df6c6));
                continue;
            }
            await _0x1f540f['type']('input[name=\x22lastName\x22]', '' + _0x151b7f[_0x101e3f]['LastName']), await _0x127b8e(0xc8), await _0x1f540f['type']('input[name=\x22instagramUsername\x22]', '' + _0x151b7f[_0x101e3f]['Follower']), await _0x127b8e(0x4b0), await _0x1f540f['click']('button.btn.continue-button__1RtsS'), await _0x127b8e(0x3e8), console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1f540f['select']('select[name=\x22country\x22]', '' + _0x151b7f[_0x101e3f]['Country']), await _0x127b8e(0x2bc), await _0x1f540f['type']('input[name=\x22streetName\x22]', '' + _0x151b7f[_0x101e3f]['Address1']), await _0x127b8e(0x258), await _0x1f540f['type']('input[name=\x22houseNumber\x22]', _0x151b7f[_0x101e3f]['HouseNumber'] + '\x20' + _0x151b7f[_0x101e3f]['Address2']), await _0x127b8e(0xc8), await _0x1f540f['type']('input[name=\x22postalCode\x22]', '' + _0x151b7f[_0x101e3f]['Zip']), await _0x127b8e(0x1f4), await _0x1f540f['type']('input[name=\x22city\x22]', '' + _0x151b7f[_0x101e3f]['City']), await _0x127b8e(0x4b0), await _0x1f540f['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x127b8e(0x4b0), await _0x1f540f['click']('button.btn.continue-button__1RtsS'), await _0x127b8e(0x4b0), console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1f540f['solveRecaptchas'](), console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x127b8e(0xbb8), await _0x1f540f['click']('button.btn.continue-button__1RtsS'), await _0x127b8e(0x1388), console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1f540f['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1f540f['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x127b8e(0x4b0), await _0x1f540f['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x151b7f[_0x101e3f]['CardNumber']), await _0x127b8e(0x320), await _0x1f540f['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1f540f['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x151b7f[_0x101e3f]['ExpiryDate']), await _0x127b8e(0x4b0), await _0x1f540f['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1f540f['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x151b7f[_0x101e3f]['CVV']), await _0x127b8e(0x226), await _0x1f540f['type']('input[name=\x22holderName\x22]', '' + _0x151b7f[_0x101e3f]['NameOnCard']), await _0x127b8e(0x226), await _0x1f540f['click']('button.adyen-checkout__button'), console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x1f540f['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x127b8e(0xbb8), console['log'](_0x555803['green'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1a83e7(_0x184a41, _0x2e2a87);
            } catch {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x4746da) {
            console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x20' + _0x4746da), _0x1cef1c[0x0]['title'] = 'Failed\x20' + _0x350147[taskModule]['name'] + '\x20entry', _0x1cef1c[0x0]['description'] = '' + _0x4746da, await _0x1a83e7(_0x24d596, _0x2e2a87), _0x3f79d0 = 'yes';
        } finally {
            _0x4c3394['close']();
            if (_0x3f79d0 == 'yes' && _0x20f332 != 0x5) {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x101e3f + 0x1) + '\x20:\x20Retrying')), _0x101e3f = _0x101e3f - 0x1, _0x20f332 = _0x20f332 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x50ba2c['footshopDelay'] + '\x20ms'), await _0x127b8e(_0x50ba2c['footshopDelay']);
        }
    }
}
afewFunction = async (_0x2ae91b, _0xa43b35, _0x1f1dd2, _0x4397bd, _0x4d81dc) => {
    for (var _0x40bb47 = 0x0; _0x40bb47 < _0x4397bd['length']; _0x40bb47++) {
        var _0x171631 = '', _0x4b1e06 = 0x0;
        _0x58cfeb(_0x1f1dd2['name'] + '\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20/\x20' + _0x4397bd['length'] + '\x20||\x20File:\x20' + _0x57186d + '\x20Proxies:\x20' + _0x23b65f), await _0x2cdff8(_0x4397bd, _0x40bb47);
        var _0xe762d5 = [{
            'type': 'rich',
            'title': 'Succesful\x20AFEW\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x20e912
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2ae91b
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4397bd[_0x40bb47]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x50ba2c['AfewDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0xcb2ade
                }
            ]
        }];
        const _0x2066d7 = { 'embeds': _0xe762d5 };
        if (_0x4397bd[_0x40bb47]['Email'] == '' || _0x4397bd[_0x40bb47]['FirstName'] == '' || _0x4397bd[_0x40bb47]['LastName'] == '' || _0x4397bd[_0x40bb47]['Country'] == '' || _0x4397bd[_0x40bb47]['Size'] == '' || _0x4397bd[_0x40bb47]['Address1'] == '' || _0x4397bd[_0x40bb47]['Zip'] == '') {
            console['log'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x50ba2c['useRandomProxy'] = ![])
            var _0x5d4f3a = _0x4d81dc[_0x40bb47]['split'](':');
        else
            var _0x2b363e = Math['round'](Math['random']() * (_0x4d81dc['length'] - 0x1)), _0x5d4f3a = _0x4d81dc[_0x2b363e]['split'](':');
        const _0x333b95 = await _0x3672a1['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5d4f3a[0x0] + ':' + _0x5d4f3a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x124c99 = await _0x333b95['newPage']();
            await _0x124c99['setDefaultNavigationTimeout'](0x1d4c0), await _0x124c99['authenticate']({
                'username': '' + _0x5d4f3a[0x2],
                'password': '' + _0x5d4f3a[0x3]
            }), console['log'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x124c99['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x124c99['setRequestInterception'](!![]), _0x124c99['on']('request', _0x2661d4 => {
                _0x2661d4['resourceType']() === 'image' || _0x2661d4['resourceType']() === 'font' || _0x2661d4['resourceType']() === 'media' ? _0x2661d4['abort']() : _0x2661d4['continue']();
            }), await _0x124c99['goto'](_0x2ae91b, { 'waitUntil': 'networkidle2' }), console['log'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x124c99['waitForTimeout'](0xfa0), console['log'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x124c99['waitForTimeout'](0x320);
            if (_0x4397bd[_0x40bb47]['Size'] == 'RANDOM') {
                console['log'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x2e2ac0 = await _0x124c99['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x35457a => {
                    return _0x35457a['map'](_0x5526ad => _0x5526ad['href']);
                });
                var _0x231b43 = Math['round'](Math['random']() * (_0x2e2ac0['length'] - 0x1));
                await _0x124c99['goto']('' + _0x2e2ac0[_0x231b43]);
            } else {
                console['log'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4397bd[_0x40bb47]['Size']);
                try {
                    const _0x1228c3 = await _0x124c99['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x4397bd[_0x40bb47]['Size'] + '\x22]\x20>\x20a', _0x20aa31 => {
                        return _0x20aa31['map'](_0x23ab2e => _0x23ab2e['href']);
                    });
                    await _0x124c99['goto']('' + _0x1228c3[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0xbd530) {
                    console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20' + _0xbd530 + '\x20Size\x20not\x20found')), _0xe762d5[0x0]['title'] = 'Failed\x20entry', _0xe762d5[0x0]['description'] = 'Size\x20not\x20found', await _0x1a83e7(_0x24d596, _0x2066d7);
                    continue;
                }
            }
            await _0x124c99['waitForTimeout'](0x258), await _0x124c99['type']('#raffle-instagram', '' + _0x4397bd[_0x40bb47]['Follower'], { 'delay': 0x64 }), await _0x124c99['waitForTimeout'](0x384), await _0x124c99['click']('#raffle-terms'), await _0x124c99['waitForTimeout'](0x384), await _0x124c99['evaluate'](() => {
                const _0x3f543b = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x3f543b['click']();
            }), await _0x124c99['waitForTimeout'](0xbb8), await _0x124c99['waitForSelector']('#checkout_email'), await _0x127b8e(0x3e8), console['log'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20Filling\x20Information');
            _0xa43b35 == 'sec' ? await _0x124c99['type']('#checkout_email', '' + _0x4397bd[_0x40bb47]['FirstName'] + _0x4397bd[_0x40bb47]['LastName'] + _0x50ba2c['catchall'], 0x32) : await _0x124c99['type']('#checkout_email', '' + _0x4397bd[_0x40bb47]['Email'], 0x32);
            await _0x127b8e(0x320), await _0x124c99['select']('#checkout_shipping_address_country', '' + _0x4397bd[_0x40bb47]['Country']), await _0x124c99['waitForTimeout'](0x258), await _0x124c99['type']('#checkout_shipping_address_first_name', '' + _0x4397bd[_0x40bb47]['FirstName']), await _0x124c99['waitForTimeout'](0x320), await _0x124c99['type']('#checkout_shipping_address_last_name', '' + _0x4397bd[_0x40bb47]['LastName']), await _0x124c99['waitForTimeout'](0x2bc), await _0x124c99['type']('#checkout_shipping_address_address1', _0x4397bd[_0x40bb47]['Address1'] + '\x20' + _0x4397bd[_0x40bb47]['HouseNumber']), await _0x124c99['waitForTimeout'](0x2bc), await _0x124c99['type']('#checkout_shipping_address_address2', '' + _0x4397bd[_0x40bb47]['Address2']), await _0x124c99['waitForTimeout'](0x2bc);
            _0x4397bd[_0x40bb47]['Postcode'] == undefined ? await _0x124c99['type']('#checkout_shipping_address_zip', '' + _0x4397bd[_0x40bb47]['Zip']) : await _0x124c99['type']('#checkout_shipping_address_zip', '' + _0x4397bd[_0x40bb47]['Postcode']);
            await _0x124c99['waitForTimeout'](0x2bc), await _0x124c99['type']('#checkout_shipping_address_city', '' + _0x4397bd[_0x40bb47]['City']), await _0x124c99['waitForTimeout'](0x2bc), console['log'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x124c99, _0x124c99['evaluate'](() => {
                const _0x295c0a = document['querySelector']('#continue_button');
                for (var _0x27d37e = 0x0; _0x27d37e < 0x5; _0x27d37e++) {
                    if (_0x295c0a) {
                        _0x295c0a['click'](), _0x295c0a['click']();
                        break;
                    } else
                        _0x127b8e(0xfa0);
                }
            }), await _0x124c99['waitForTimeout'](0x1194);
            try {
                await _0x124c99['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x124c99['evaluate'](() => {
                const _0x57f7b9 = document['querySelector']('#continue_button');
                for (var _0x89355e = 0x0; _0x89355e < 0x5; _0x89355e++) {
                    if (_0x57f7b9) {
                        _0x57f7b9['click']();
                        break;
                    } else
                        _0x127b8e(0xfa0);
                }
            }), await _0x124c99['waitForTimeout'](0x7d0), console['log'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x124c99['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x124c99['evaluate'](() => {
                const _0x21128a = document['querySelector']('#continue_button');
                for (var _0x52ca2b = 0x0; _0x52ca2b < 0x5; _0x52ca2b++) {
                    if (_0x21128a) {
                        _0x21128a['click']();
                        break;
                    } else
                        _0x127b8e(0xfa0);
                }
            }), await _0x124c99['waitForTimeout'](0x1194), await _0x124c99['waitForSelector']('#continue_button'), _0x124c99['evaluate'](() => {
                const _0x250b2e = document['querySelector']('#continue_button');
                for (var _0x4e3cbd = 0x0; _0x4e3cbd < 0x5; _0x4e3cbd++) {
                    if (_0x250b2e) {
                        _0x250b2e['click']();
                        break;
                    } else
                        _0x127b8e(0xfa0);
                }
            });
            try {
                await _0x124c99['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x3136a7) {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x3136a7));
            }
            console['log'](_0x555803['green'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1a83e7(_0x184a41, _0x2066d7);
        } catch (_0x1df70a) {
            console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20' + _0x1df70a)), _0xe762d5[0x0]['title'] = 'Failed\x20entry', _0xe762d5[0x0]['description'] = '' + _0x1df70a, await _0x1a83e7(_0x24d596, _0x2066d7), _0x171631 = 'yes';
        } finally {
            _0x333b95 && _0x333b95['close']();
            if (_0x171631 == 'yes' && _0x4b1e06 != 0x5) {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x1f1dd2['name'] + ']\x20Task\x20' + (_0x40bb47 + 0x1) + '\x20:\x20Retrying')), _0x40bb47 = _0x40bb47 - 0x1, _0x4b1e06 = _0x4b1e06 + 0x1;
                continue;
            }
            if (_0x40bb47 + 0x1 == _0x4397bd['length']) {
                console['log'](_0x555803['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x127b8e(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x50ba2c['AfewDelay'] + '\x20ms'), await _0x127b8e(_0x50ba2c['AfewDelay']);
        }
    }
};
async function _0x3002e9(_0x2050de, _0x567e6d, _0x2993e1, _0x109c9b) {
    _0x3672a1['use'](_0x2bb104()), _0x3672a1['use'](_0x86d56d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x50ba2c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x508dbb = 0x0; _0x508dbb < _0x2993e1['length']; _0x508dbb++) {
        var _0x501fd9 = '', _0x414c15 = 0x0;
        _0x58cfeb(_0x567e6d['name'] + '\x20Task\x20' + (_0x508dbb + 0x1) + '\x20/\x20' + _0x2993e1['length'] + '\x20||\x20File:\x20' + _0x57186d + '\x20Proxies:\x20' + _0x23b65f);
        var _0x33959a = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x20e912
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x50ba2c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0xcb2ade
                }
            ]
        }];
        const _0x3556e2 = { 'embeds': _0x33959a };
        await _0x2cdff8(_0x2993e1, _0x508dbb);
        if (_0x2993e1[_0x508dbb]['Email'] == '' || _0x2993e1[_0x508dbb]['Password'] == '' || _0x2993e1[_0x508dbb]['FirstName'] == '' || _0x2993e1[_0x508dbb]['LastName'] == '') {
            console['log'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x50ba2c['useRandomProxy'] = ![])
            var _0x3b405a = _0x109c9b[_0x508dbb]['split'](':');
        else
            var _0x360588 = Math['round'](Math['random']() * (_0x109c9b['length'] - 0x1)), _0x3b405a = _0x109c9b[_0x360588]['split'](':');
        const _0x1b0755 = await _0x3672a1['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3b405a[0x0] + ':' + _0x3b405a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x25591f = await _0x1b0755['newPage']();
            await _0x25591f['authenticate']({
                'username': '' + _0x3b405a[0x2],
                'password': '' + _0x3b405a[0x3]
            }), console['log'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x25591f['setRequestInterception'](!![]), _0x25591f['on']('request', _0x860cc1 => {
                _0x860cc1['resourceType']() === 'image' || _0x860cc1['resourceType']() === 'font' || _0x860cc1['resourceType']() === 'media' ? _0x860cc1['abort']() : _0x860cc1['continue']();
            }), await _0x25591f['goto'](_0x2050de), await _0x127b8e(0xbb8), console['log'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x25591f['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x25591f['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x25591f['waitForSelector']('#button-register'), await _0x127b8e(0x7d0), await _0x25591f['evaluate'](() => {
                const _0x2dcab3 = document['querySelector']('#button-register');
                _0x2dcab3['click']();
            }), console['log'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x127b8e(0x1388), await _0x25591f['waitForSelector']('#customer_salutation'), await _0x25591f['select']('#customer_salutation', 'mr'), await _0x127b8e(0x7d0), await _0x25591f['waitForSelector']('#customer_firstname'), await _0x25591f['type']('#customer_firstname', '' + _0x2993e1[_0x508dbb]['FirstName']), await _0x127b8e(0x352), await _0x25591f['waitForSelector']('#customer_lastname'), await _0x25591f['type']('#customer_lastname', '' + _0x2993e1[_0x508dbb]['LastName']), await _0x127b8e(0x352), await _0x25591f['type']('#email-input', '' + _0x2993e1[_0x508dbb]['Email']), await _0x127b8e(0x352), await _0x25591f['type']('#email-confirm-input', '' + _0x2993e1[_0x508dbb]['Email']), await _0x127b8e(0x352), await _0x25591f['type']('#register-password', '' + _0x2993e1[_0x508dbb]['Password']), await _0x127b8e(0x352), await _0x25591f['type']('#password-confirm', '' + _0x2993e1[_0x508dbb]['Password']), await _0x127b8e(0x352), console['log'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x25591f['click']('#consent'), await _0x127b8e(0x1f4);
            const _0x581c8a = await _0x25591f['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x581c8a) {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x25591f['click']('#buttonRegister');
            try {
                await _0x25591f['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x555803['yellow'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20Account\x20' + _0x2993e1[_0x508dbb]['Email'] + '\x20Generated!')), console['log'](_0x555803['yellow'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x2993e1[_0x508dbb]['Email'])), await _0x127b8e(0x4b0);
            async function _0x27057e() {
                console['log'](_0x555803['yellow'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x70ef73 = await _0x498610['get']('Code');
                return _0x70ef73['Code'];
            }
            ;
            code = await _0x27057e(), _0x127b8e(0x320), console['log'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20Verifying..'), await _0x25591f['type']('#verificationCode', code), await _0x127b8e(0x1f4), await _0x25591f['click']('#buttonVerify'), await _0x127b8e(0x190), await _0x25591f['click']('#buttonVerify'), await _0x127b8e(0x3e8);
            try {
                await _0x25591f['waitForSelector']('div.b-user_greeting'), console['log'](_0x555803['green'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20Account\x20' + _0x2993e1[_0x508dbb]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x1ce35f['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x2993e1[_0x508dbb]['Email'] + ',' + _0x2993e1[_0x508dbb]['Password'] + ','), console['log'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20Account\x20' + _0x2993e1[_0x508dbb]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27'), await _0x1a83e7(_0x147c7c, _0x3556e2);
            } catch {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x2e031c) {
            console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20' + _0x2e031c)), _0x33959a[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x33959a[0x0]['description'] = '' + _0x2e031c, await _0x1a83e7(_0x24d596, _0x3556e2), _0x501fd9 = 'yes';
        } finally {
            _0x1b0755 && _0x1b0755['close']();
            if (_0x501fd9 == 'yes' && _0x414c15 != 0x5) {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x567e6d['name'] + ']\x20Task\x20' + (_0x508dbb + 0x1) + '\x20:\x20Retrying')), _0x508dbb = _0x508dbb - 0x1, _0x414c15 = _0x414c15 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x50ba2c['delay'] + '\x20ms'), await _0x127b8e(_0x50ba2c['delay']);
        }
    }
}
async function _0x319dc1(_0x128f8a, _0x30e97f, _0x5c9dc8) {
    _0x3672a1['use'](_0x2bb104()), _0x3672a1['use'](_0x86d56d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x50ba2c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x23bdfe = 0x0; _0x23bdfe < _0x30e97f['length']; _0x23bdfe++) {
        var _0x1b62ca = '', _0x3d894a = 0x0;
        _0x58cfeb(_0x128f8a['name'] + '\x20Task\x20' + (_0x23bdfe + 0x1) + '\x20/\x20' + _0x30e97f['length'] + '\x20||\x20File:\x20' + _0x57186d + '\x20Proxies:\x20' + _0x23b65f);
        var _0x12e800 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x20e912
                },
                {
                    'name': 'Product',
                    'value': '' + _0x30e97f[_0x23bdfe]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x30e97f[_0x23bdfe]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x50ba2c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0xcb2ade
                }
            ]
        }];
        const _0x372f5c = { 'embeds': _0x12e800 };
        await _0x2cdff8(_0x30e97f, _0x23bdfe);
        if (_0x30e97f[_0x23bdfe]['Email'] == '' || _0x30e97f[_0x23bdfe]['Password'] == '' || _0x30e97f[_0x23bdfe]['FirstName'] == '' || _0x30e97f[_0x23bdfe]['LastName'] == '') {
            console['log'](_0x139c28() + '\x20[' + _0x128f8a['name'] + ']\x20Task\x20' + (_0x23bdfe + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x50ba2c['useRandomProxy'] = ![])
            var _0x131dd9 = _0x5c9dc8[_0x23bdfe]['split'](':');
        else
            var _0xd765a1 = Math['round'](Math['random']() * (_0x5c9dc8['length'] - 0x1)), _0x131dd9 = _0x5c9dc8[_0xd765a1]['split'](':');
        const _0x29a3d9 = await _0x3672a1['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x131dd9[0x0] + ':' + _0x131dd9[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x100b02 = await _0x29a3d9['newPage']();
            await _0x100b02['authenticate']({
                'username': '' + _0x131dd9[0x2],
                'password': '' + _0x131dd9[0x3]
            }), console['log'](_0x139c28() + '\x20[' + _0x128f8a['name'] + ']\x20Task\x20' + (_0x23bdfe + 0x1) + '\x20:\x20Getting\x20Session'), await _0x100b02['setRequestInterception'](!![]), _0x100b02['on']('request', _0x56f0e2 => {
                _0x56f0e2['resourceType']() === 'image' || _0x56f0e2['resourceType']() === 'font' || _0x56f0e2['resourceType']() === 'media' ? _0x56f0e2['abort']() : _0x56f0e2['continue']();
            }), await _0x100b02['goto']('' + _0x30e97f[_0x23bdfe]['Url'], { 'waitUntil': 'networkidle2' }), await _0x127b8e(0x12c);
            try {
                await _0x100b02['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x100b02['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x139c28() + '\x20[' + _0x128f8a['name'] + ']\x20Task\x20' + (_0x23bdfe + 0x1) + '\x20:\x20Logging\x20in'), await _0x100b02['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x100b02['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x100b02['waitForSelector']('#username'), await _0x100b02['type']('#username', _0x30e97f[_0x23bdfe]['Email']), await _0x100b02['waitForSelector']('#password'), await _0x100b02['type']('#password', _0x30e97f[_0x23bdfe]['Password']), await _0x127b8e(0x190), await _0x100b02['click']('#buttonSubmit'), await _0x100b02['waitForSelector']('div.b-user_greeting'), console['log'](_0x139c28() + '\x20[' + _0x128f8a['name'] + ']\x20Task\x20' + (_0x23bdfe + 0x1) + '\x20:\x20Getting\x20Product'), await _0x127b8e(0x1f4), await _0x100b02['goto']('' + _0x30e97f[_0x23bdfe]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x139c28() + '\x20[' + _0x128f8a['name'] + ']\x20Task\x20' + (_0x23bdfe + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x30e97f[_0x23bdfe]['Size']);
            let _0x33b70d = _0x30e97f[_0x23bdfe]['Size']['replace']('.5', '\x201/2');
            await _0x100b02['click']('button[title=\x22' + _0x33b70d + '\x22]'), await _0x127b8e(0x1f4);
            try {
                await _0x100b02['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x127b8e(0x12c), console['log'](_0x139c28() + '\x20[' + _0x128f8a['name'] + ']\x20Task\x20' + (_0x23bdfe + 0x1) + '\x20:\x20Filling\x20Information'), await _0x100b02['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x127b8e(0x12c), await _0x100b02['type']('#dwfrm_raffle_addressFields_firstName', _0x30e97f[_0x23bdfe]['FirstName']), await _0x127b8e(0x12c), await _0x100b02['type']('#dwfrm_raffle_addressFields_lastName', _0x30e97f[_0x23bdfe]['LastName']), await _0x127b8e(0x12c), await _0x100b02['select']('#dwfrm_raffle_addressFields_country', _0x30e97f[_0x23bdfe]['Country']), await _0x127b8e(0x12c), await _0x100b02['type']('#dwfrm_raffle_addressFields_city', _0x30e97f[_0x23bdfe]['City']), await _0x127b8e(0x12c);
            _0x30e97f[_0x23bdfe]['Postcode'] == undefined && (_0x30e97f[_0x23bdfe]['Postcode'] = _0x30e97f[_0x23bdfe]['Zip']);
            await _0x100b02['type']('#dwfrm_raffle_addressFields_postalCode', _0x30e97f[_0x23bdfe]['Postcode']), await _0x127b8e(0x12c), await _0x100b02['type']('#dwfrm_raffle_addressFields_address1', _0x30e97f[_0x23bdfe]['Address1']), await _0x127b8e(0x12c), await _0x100b02['type']('#dwfrm_raffle_addressFields_address2', _0x30e97f[_0x23bdfe]['HouseNumber']), await _0x127b8e(0x12c), await _0x100b02['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x30e97f[_0x23bdfe]['Address2']), await _0x127b8e(0x12c), await _0x100b02['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x127b8e(0x12c), await _0x100b02['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x30e97f[_0x23bdfe]['Follower']), await _0x127b8e(0x1f4), await _0x100b02['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x127b8e(0x1f4), console['log'](_0x139c28() + '\x20[' + _0x128f8a['name'] + ']\x20Task\x20' + (_0x23bdfe + 0x1) + '\x20:\x20' + _0x555803['blue']('Awaiting\x20Paypal\x20Payment')), await _0x100b02['click']('.b-paypal_button');
            try {
                await _0x100b02['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x555803['green'](_0x139c28() + '\x20[' + _0x128f8a['name'] + ']\x20Task\x20' + (_0x23bdfe + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1a83e7(_0x184a41, _0x372f5c);
            } catch (_0x3ee8ba) {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x128f8a['name'] + ']\x20Task\x20' + (_0x23bdfe + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x3ee8ba));
            }
        } catch (_0x22f88a) {
            console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x128f8a['name'] + ']\x20Task\x20' + (_0x23bdfe + 0x1) + '\x20:\x20' + _0x22f88a)), _0x12e800[0x0]['title'] = 'Failed\x20kickz\x20Entry', _0x12e800[0x0]['description'] = '' + _0x22f88a, await _0x1a83e7(_0x24d596, _0x372f5c), _0x1b62ca = 'yes';
        } finally {
            _0x29a3d9 && _0x29a3d9['close']();
            if (_0x1b62ca == 'yes' && _0x3d894a != 0x5) {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x128f8a['name'] + ']\x20Task\x20' + (_0x23bdfe + 0x1) + '\x20:\x20Retrying')), _0x23bdfe = _0x23bdfe - 0x1, _0x3d894a = _0x3d894a + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x50ba2c['AfewDelay'] + '\x20ms'), await _0x127b8e(_0x50ba2c['AfewDelay']);
        }
    }
}
async function _0x6b1f49(_0x438017, _0x4b6d30) {
    _0x3672a1['use'](_0x2bb104()), _0x3672a1['use'](_0x86d56d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x50ba2c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3936b2 = 0x0; _0x3936b2 < bouncewear['length']; _0x3936b2++) {
        await _0x2cdff8(bouncewear, _0x3936b2);
        if (bouncewear[_0x3936b2]['Email'] == '' || bouncewear[_0x3936b2]['Password'] == '' || bouncewear[_0x3936b2]['FirstName'] == '' || bouncewear[_0x3936b2]['LastName'] == '') {
            console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x3936b2 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x50ba2c['useRandomProxy'] = ![])
            var _0x828d4f = _0x3315ae()[_0x3936b2]['split'](':');
        else
            var _0x339b39 = Math['round'](Math['random']() * (_0x3315ae()['length'] - 0x1)), _0x828d4f = _0x3315ae()[_0x339b39]['split'](':');
        const _0x4dfe41 = await _0x3672a1['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x828d4f[0x0] + ':' + _0x828d4f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4ab2fd = await _0x4dfe41['newPage']();
            await _0x4ab2fd['authenticate']({
                'username': '' + _0x828d4f[0x2],
                'password': '' + _0x828d4f[0x3]
            }), console['log'](_0x139c28() + '\x20[' + _0x4b6d30['name'] + ']\x20Task\x20' + (_0x3936b2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4ab2fd['setRequestInterception'](!![]), _0x4ab2fd['on']('request', _0x2ddaac => {
                _0x2ddaac['resourceType']() === 'image' || _0x2ddaac['resourceType']() === 'font' || _0x2ddaac['resourceType']() === 'media' ? _0x2ddaac['abort']() : _0x2ddaac['continue']();
            }), await _0x4ab2fd['goto'](_0x438017), await _0x127b8e(0xbb8), await _0x4ab2fd['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x139c28() + '\x20[' + _0x4b6d30['name'] + ']\x20Task\x20' + (_0x3936b2 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4ab2fd['type']('#RegisterForm-FirstName', '' + bouncewear[_0x3936b2]['FirstName']), await _0x127b8e(0x226), await _0x4ab2fd['type']('#RegisterForm-LastName', '' + bouncewear[_0x3936b2]['LastName']), await _0x127b8e(0x226), await _0x4ab2fd['type']('#RegisterForm-email', '' + bouncewear[_0x3936b2]['Email']), await _0x127b8e(0x226), await _0x4ab2fd['type']('#RegisterForm-password', '' + bouncewear[_0x3936b2]['Password']), await _0x127b8e(0x226), await _0x4ab2fd['click']('#marketing'), console['log'](_0x139c28() + '\x20[' + _0x4b6d30['name'] + ']\x20Task\x20' + (_0x3936b2 + 0x1) + '\x20:\x20Submitting..'), await _0x4ab2fd['$eval']('#RegisterForm', _0xc59241 => _0xc59241['submit']()), await _0x127b8e(0x1f40), console['log'](_0x139c28() + '\x20[' + _0x4b6d30['name'] + ']\x20Task\x20' + (_0x3936b2 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x4ab2fd['solveRecaptchas'](), await _0x4ab2fd['click']('.shopify-challenge__button.btn');
            async function _0x4c9c8b() {
                for (var _0x4f4802 = 0x0; _0x4f4802 < 0x4; _0x4f4802++) {
                    try {
                        console['log']('try'), await _0x4ab2fd['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x139c28() + '\x20[' + _0x4b6d30['name'] + ']\x20Task\x20' + (_0x3936b2 + 0x1) + '\x20:\x20' + _0x555803['red']('Catpcha\x20failed,\x20retrying..')), await _0x4ab2fd['solveRecaptchas'](), await _0x4ab2fd['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x4c9c8b(), console['log'](_0x139c28() + '\x20[' + _0x4b6d30['name'] + ']\x20Task\x20' + (_0x3936b2 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x127b8e(0x1f4);
            try {
                await _0x4ab2fd['waitForSelector']('.featured-title'), await _0x127b8e(0x1f4), console['log'](_0x555803['green'](_0x139c28() + '\x20[' + _0x4b6d30['name'] + ']\x20Task\x20' + (_0x3936b2 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3936b2]['Email'] + '\x20Generated!')), _0x1ce35f['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x3936b2]['Email'] + ',' + bouncewear[_0x3936b2]['Password']), console['log'](_0x555803['yellow'](_0x139c28() + '\x20[' + _0x4b6d30['name'] + ']\x20Task\x20' + (_0x3936b2 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3936b2]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x30f703) {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x3936b2 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x30f703));
            }
        } catch (_0x267d21) {
            console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x3936b2 + 0x1) + '\x20:\x20' + _0x267d21));
        } finally {
            _0x4dfe41 && _0x4dfe41['close'](), console['log']('Waiting\x20for\x20' + _0x50ba2c['delay'] + '\x20ms'), await _0x127b8e(_0x50ba2c['delay']);
        }
    }
}
async function _0x593dce(_0x3361cc, _0x44c23a, _0x57fe61, _0x2218be) {
    _0x3672a1['use'](_0x2bb104()), _0x3672a1['use'](_0x86d56d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x50ba2c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x586c65 = 0x0; _0x586c65 < _0x57fe61['length']; _0x586c65++) {
        var _0x251071 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x20e912
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x50ba2c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0xcb2ade
                }
            ]
        }];
        const _0x427749 = { 'embeds': _0x251071 };
        _0x58cfeb(_0x44c23a['name'] + '\x20Task\x20' + (_0x586c65 + 0x1) + '\x20/\x20' + _0x57fe61['length'] + '\x20||\x20File:\x20' + _0x57186d + '\x20Proxies:\x20' + _0x23b65f), await _0x2cdff8(_0x57fe61, _0x586c65);
        if (_0x57fe61[_0x586c65]['Email'] == '' || _0x57fe61[_0x586c65]['Password'] == '' || _0x57fe61[_0x586c65]['Password'] == undefined || _0x57fe61[_0x586c65]['FirstName'] == '' || _0x57fe61[_0x586c65]['LastName'] == '') {
            console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x586c65 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x50ba2c['useRandomProxy'] = ![])
            var _0x522fa2 = _0x2218be[_0x586c65]['split'](':');
        else
            var _0x423d42 = Math['round'](Math['random']() * (_0x2218be['length'] - 0x1)), _0x522fa2 = _0x2218be[_0x423d42]['split'](':');
        const _0x452b7e = await _0x3672a1['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x522fa2[0x0] + ':' + _0x522fa2[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1506e3 = await _0x452b7e['newPage']();
            await _0x1506e3['authenticate']({
                'username': '' + _0x522fa2[0x2],
                'password': '' + _0x522fa2[0x3]
            }), console['log'](_0x139c28() + '\x20[' + _0x44c23a['name'] + ']\x20Task\x20' + (_0x586c65 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1506e3['setRequestInterception'](!![]), _0x1506e3['on']('request', _0x2a72e2 => {
                _0x2a72e2['resourceType']() === 'image' || _0x2a72e2['resourceType']() === 'font' || _0x2a72e2['resourceType']() === 'media' ? _0x2a72e2['abort']() : _0x2a72e2['continue']();
            }), await _0x1506e3['goto'](_0x3361cc), await _0x127b8e(0xbb8), await _0x1506e3['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x139c28() + '\x20[' + _0x44c23a['name'] + ']\x20Task\x20' + (_0x586c65 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1506e3['type']('#RegisterForm-FirstName', '' + _0x57fe61[_0x586c65]['FirstName']), await _0x127b8e(0x226), await _0x1506e3['type']('#RegisterForm-LastName', '' + _0x57fe61[_0x586c65]['LastName']), await _0x127b8e(0x226), await _0x1506e3['type']('#RegisterForm-email', '' + _0x57fe61[_0x586c65]['Email']), await _0x127b8e(0x226), await _0x1506e3['type']('#RegisterForm-password', '' + _0x57fe61[_0x586c65]['Password']), await _0x127b8e(0x226), console['log'](_0x139c28() + '\x20[' + _0x44c23a['name'] + ']\x20Task\x20' + (_0x586c65 + 0x1) + '\x20:\x20Submitting..'), await _0x1506e3['$eval']('#RegisterForm', _0x196bbf => _0x196bbf['submit']()), await _0x127b8e(0x1f40);
            try {
                await _0x1506e3['waitForSelector']('.home-page-grid__collection'), await _0x127b8e(0x1f4), console['log'](_0x555803['green'](_0x139c28() + '\x20[' + _0x44c23a['name'] + ']\x20Task\x20' + (_0x586c65 + 0x1) + '\x20:\x20Account\x20' + _0x57fe61[_0x586c65]['Email'] + '\x20Generated!')), _0x1ce35f['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x57fe61[_0x586c65]['Email'] + ',' + _0x57fe61[_0x586c65]['Password']), console['log'](_0x555803['yellow'](_0x139c28() + '\x20[' + _0x44c23a['name'] + ']\x20Task\x20' + (_0x586c65 + 0x1) + '\x20:\x20Account\x20' + _0x57fe61[_0x586c65]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27')), await _0x1a83e7(_0x147c7c, _0x427749);
            } catch (_0x387358) {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x586c65 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x387358));
            }
        } catch (_0xa2e830) {
            console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x586c65 + 0x1) + '\x20:\x20' + _0xa2e830));
        } finally {
            _0x452b7e && _0x452b7e['close'](), console['log']('Waiting\x20for\x20' + _0x50ba2c['delay'] + '\x20ms'), await _0x127b8e(_0x50ba2c['delay']);
        }
    }
}
async function _0x1e44bb(_0x3eb934, _0x593743, _0x10e4c8, _0x5cedee) {
    _0x3672a1['use'](_0x2bb104()), _0x3672a1['use'](_0x86d56d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x50ba2c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x219873 = 0x0; _0x219873 < _0x10e4c8['length']; _0x219873++) {
        var _0x271c2d = '', _0x57f40c = 0x0;
        _0x58cfeb(_0x593743['name'] + '\x20Task\x20' + (_0x219873 + 0x1) + '\x20/\x20' + _0x10e4c8['length'] + '\x20||\x20File:\x20' + _0x57186d + '\x20Proxies:\x20' + _0x23b65f), await _0x2cdff8(_0x10e4c8, _0x219873);
        if (_0x10e4c8[_0x219873]['Email'] == '' || _0x10e4c8[_0x219873]['Password'] == '' || _0x10e4c8[_0x219873]['FirstName'] == '' || _0x10e4c8[_0x219873]['LastName'] == '') {
            console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x219873 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x50ba2c['useRandomProxy'] = ![])
            var _0x1296b6 = _0x5cedee[_0x219873]['split'](':');
        else
            var _0x1a669f = Math['round'](Math['random']() * (_0x5cedee['length'] - 0x1)), _0x1296b6 = _0x5cedee[_0x1a669f]['split'](':');
        const _0x24ae00 = await _0x3672a1['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1296b6[0x0] + ':' + _0x1296b6[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x306d3c = await _0x24ae00['newPage']();
            await _0x306d3c['authenticate']({
                'username': '' + _0x1296b6[0x2],
                'password': '' + _0x1296b6[0x3]
            }), console['log'](_0x139c28() + '\x20[' + _0x593743['name'] + ']\x20Task\x20' + (_0x219873 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x306d3c['setRequestInterception'](!![]), _0x306d3c['on']('request', _0x3fb7db => {
                _0x3fb7db['resourceType']() === 'image' || _0x3fb7db['resourceType']() === 'font' || _0x3fb7db['resourceType']() === 'media' ? _0x3fb7db['abort']() : _0x3fb7db['continue']();
            }), await _0x306d3c['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x306d3c['waitForSelector']('#CustomerEmail'), console['log'](_0x139c28() + '\x20[' + _0x593743['name'] + ']\x20Task\x20' + (_0x219873 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x306d3c['type']('#CustomerEmail', '' + _0x10e4c8[_0x219873]['Email']), await _0x127b8e(0x12c), await _0x306d3c['type']('#CustomerPassword', '' + _0x10e4c8[_0x219873]['Password']), await _0x127b8e(0x226), await _0x306d3c['$eval']('#customer_login', _0x29de8c => _0x29de8c['submit']());
            try {
                await _0x306d3c['waitForSelector']('#orders'), await _0x127b8e(0x4b0);
            } catch {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x593743['name'] + ']\x20Task\x20' + (_0x219873 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x306d3c['goto']('' + _0x10e4c8[_0x219873]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x127b8e(0xbb8), console['log'](_0x139c28() + '\x20[' + _0x593743['name'] + ']\x20Task\x20' + (_0x219873 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x306d3c['waitForSelector']('#email');
            } catch {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x593743['name'] + ']\x20Task\x20' + (_0x219873 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x306d3c['type']('#email', '' + _0x10e4c8[_0x219873]['Email']), await _0x127b8e(0x384), await _0x306d3c['type']('#first_name', '' + _0x10e4c8[_0x219873]['FirstName']), await _0x127b8e(0x514), await _0x306d3c['type']('#last_name', '' + _0x10e4c8[_0x219873]['LastName']), await _0x127b8e(0x514), await _0x306d3c['type']('#street_address', _0x10e4c8[_0x219873]['Address1'] + '\x20' + _0x10e4c8[_0x219873]['HouseNumber'] + '\x20' + _0x10e4c8[_0x219873]['Address2']), await _0x127b8e(0x2bc);
            _0x10e4c8[_0x219873]['Postcode'] == undefined && (_0x10e4c8[_0x219873]['Postcode'] = _0x10e4c8[_0x219873]['Zip']);
            await _0x306d3c['type']('#zip_code', '' + _0x10e4c8[_0x219873]['Postcode']), await _0x127b8e(0x320), await _0x306d3c['type']('#city', '' + _0x10e4c8[_0x219873]['City']), await _0x127b8e(0x320), await _0x306d3c['type']('#bday', '01/01/1994'), await _0x127b8e(0x320), await _0x306d3c['type']('#instagram', '' + _0x10e4c8[_0x219873]['Follower']), await _0x127b8e(0x352);
            if (_0x10e4c8[_0x219873]['Size'] == 'RANDOM') {
                const _0xe5e95e = await _0x306d3c['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x221068 => {
                    return _0x221068['map'](_0x325b17 => _0x325b17['textContent']);
                });
                var _0x4c3616 = Math['round'](Math['random']() * (_0xe5e95e['length'] - 0x1));
                console['log'](_0x139c28() + '\x20[' + _0x593743['name'] + ']\x20Task\x20' + (_0x219873 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0xe5e95e[_0x4c3616]), await _0x306d3c['click']('label[data-eu-size=\x22' + _0xe5e95e[_0x4c3616] + '\x22]');
            } else {
                console['log'](_0x139c28() + '\x20[' + _0x593743['name'] + ']\x20Task\x20' + (_0x219873 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x10e4c8[_0x219873]['Size']);
                try {
                    await _0x306d3c['click']('label[data-eu-size=\x22' + _0x10e4c8[_0x219873]['Size'] + '\x22]');
                } catch {
                    await _0x306d3c['click']('label[data-eu-size=\x22' + _0x10e4c8[_0x219873]['Size'] + '.0\x22]');
                }
            }
            await _0x127b8e(0xbb8), await _0x306d3c['$$eval']('.raffle__checkbox-label', _0x314e77 => _0x314e77['forEach'](_0x1986fd => _0x1986fd['click']())), await _0x127b8e(0x7d0), console['log'](_0x139c28() + '\x20[' + _0x593743['name'] + ']\x20Task\x20' + (_0x219873 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x306d3c['click']('#raffle__form-submit'), await _0x127b8e(0x1388);
            try {
                await _0x306d3c['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x555803['green'](_0x139c28() + '\x20[' + _0x593743['name'] + ']\x20Task\x20' + (_0x219873 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x5e8e9a) {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x219873 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x5e8e9a));
            }
        } catch (_0xf61c8b) {
            console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x219873 + 0x1) + '\x20:\x20' + _0xf61c8b)), _0x271c2d = 'yes';
        } finally {
            _0x24ae00 && _0x24ae00['close']();
            if (_0x271c2d == 'yes' && _0x57f40c != 0x5) {
                console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x593743['name'] + ']\x20Task\x20' + (_0x219873 + 0x1) + '\x20:\x20Retrying')), _0x219873 = _0x219873 - 0x1, _0x57f40c = _0x57f40c + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x50ba2c['delay'] + '\x20ms'), await _0x127b8e(_0x50ba2c['delay']);
        }
    }
}
async function _0x98ee29(_0x2fa78e, _0x20802e, _0x88efaa) {
    var _0x262ba8 = ![], _0x20b577 = ![];
    if (_0x50ba2c['captchaKey'] == '' || _0x50ba2c['captchaKey'] == undefined)
        return console['log'](_0x555803['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x3672a1['use'](_0x2bb104()), _0x3672a1['use'](_0x86d56d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x50ba2c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x49296b = 0x0; _0x49296b < _0x20802e['length']; _0x49296b++) {
        var _0x5359be = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x20802e[_0x49296b]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x20802e[_0x49296b]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x20e912
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x50ba2c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0xcb2ade
                }
            ]
        }];
        const _0x384489 = { 'embeds': _0x5359be };
        _0x58cfeb(_0x2fa78e['name'] + '\x20Task\x20' + (_0x49296b + 0x1) + '\x20/\x20' + _0x20802e['length'] + '\x20||\x20File:\x20' + _0x57186d + '\x20Proxies:\x20' + _0x23b65f), await _0x2cdff8(_0x20802e, _0x49296b);
        if (_0x20802e[_0x49296b]['Email'] == '' || _0x20802e[_0x49296b]['Url'] == '' || _0x20802e[_0x49296b]['FirstName'] == '' || _0x20802e[_0x49296b]['LastName'] == '') {
            console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x49296b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x50ba2c['useRandomProxy'] = ![])
            var _0x5c9a60 = _0x88efaa[_0x49296b]['split'](':');
        else
            var _0x9f08ee = Math['round'](Math['random']() * (_0x88efaa['length'] - 0x1)), _0x5c9a60 = _0x88efaa[_0x9f08ee]['split'](':');
        const _0x41ec17 = await _0x3672a1['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5c9a60[0x0] + ':' + _0x5c9a60[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3980c4 = await _0x41ec17['newPage']();
            await _0x3980c4['authenticate']({
                'username': '' + _0x5c9a60[0x2],
                'password': '' + _0x5c9a60[0x3]
            }), console['log'](_0x139c28() + '\x20[' + _0x2fa78e['name'] + ']\x20Task\x20' + (_0x49296b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3980c4['setRequestInterception'](!![]), _0x3980c4['on']('request', _0x4b3278 => {
                _0x4b3278['resourceType']() === 'image' || _0x4b3278['resourceType']() === 'font' || _0x4b3278['resourceType']() === 'media' ? _0x4b3278['abort']() : _0x4b3278['continue']();
            }), await _0x3980c4['goto']('' + _0x20802e[_0x49296b]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](_0x139c28() + '\x20[' + _0x2fa78e['name'] + ']\x20Task\x20' + (_0x49296b + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x3980c4['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x3980c4['type']('#comp_firstname', '' + _0x20802e[_0x49296b]['FirstName']), await _0x3980c4['waitForSelector']('#comp_lastname'), await _0x3980c4['type']('#comp_lastname', '' + _0x20802e[_0x49296b]['LastName']), await _0x3980c4['waitForSelector']('#comp_email'), await _0x3980c4['type']('#comp_email', '' + _0x20802e[_0x49296b]['Email']), await _0x3980c4['waitForSelector']('#comp_paypalemail'), await _0x3980c4['type']('#comp_paypalemail', '' + _0x20802e[_0x49296b]['Email']), await _0x3980c4['waitForSelector']('#comp_mobile_end'), await _0x3980c4['type']('#comp_mobile_end', '' + _0x20802e[_0x49296b]['Phone']), await _0x3980c4['waitForSelector']('#comp_dob'), await _0x3980c4['type']('#comp_dob', '08/09/1992'), console['log'](_0x139c28() + '\x20[' + _0x2fa78e['name'] + ']\x20Task\x20' + (_0x49296b + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x20802e[_0x49296b]['Size'] == 'RANDOM') {
                const _0x51ae62 = await _0x3980c4['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3095f2 => {
                    return _0x3095f2['map'](_0x3e4976 => _0x3e4976['value']);
                });
                var _0x4ca486 = Math['round'](Math['random']() * (_0x51ae62['length'] - 0x2));
                await _0x3980c4['select']('#shoesize', _0x51ae62[_0x4ca486 + 0x1]), await _0x127b8e(0x3e8);
            } else {
                const _0xcf5089 = await _0x3980c4['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4a38c5 => {
                    return _0x4a38c5['map'](_0x4041e3 => _0x4041e3['innerText']);
                }), _0x5cda0b = await _0x3980c4['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x461be2 => {
                    return _0x461be2['map'](_0x248a43 => _0x248a43['value']);
                });
                var _0x3a0a67 = _0x20802e[_0x49296b]['Size'];
                for (var _0x3d4d60 = 0x1; _0x3d4d60 < _0x5cda0b['length']; _0x3d4d60++) {
                    var _0x277591 = _0xcf5089[_0x3d4d60]['split']('\x20')[0x0];
                    if (_0x277591 == _0x3a0a67) {
                        await _0x3980c4['select']('#shoesize', _0x5cda0b[_0x3d4d60]);
                        break;
                    } else {
                        if (_0x3d4d60 + 0x1 == _0x5cda0b['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x3980c4['waitForSelector']('#comp_address1'), await _0x3980c4['type']('#comp_address1', _0x20802e[_0x49296b]['Address1'] + '\x20' + _0x20802e[_0x49296b]['HouseNumber']), await _0x3980c4['waitForSelector']('#comp_address2'), await _0x3980c4['type']('#comp_address2', '' + _0x20802e[_0x49296b]['Address2']), await _0x3980c4['waitForSelector']('#comp_address2'), await _0x3980c4['type']('#comp_address3', '' + _0x20802e[_0x49296b]['City']), await _0x3980c4['waitForSelector']('#comp_postcode'), await _0x3980c4['type']('#comp_postcode', '' + _0x20802e[_0x49296b]['Zip']), console['log'](_0x139c28() + '\x20[' + _0x2fa78e['name'] + ']\x20Task\x20' + (_0x49296b + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x127b8e(0x4b0), await _0x3980c4['click']('label#emailhold'), await _0x127b8e(0x5dc), await _0x3980c4['click']('#preauth_tandc_email\x20>\x20label'), await _0x127b8e(0x5dc), await _0x3980c4['click']('#submit'), await _0x3980c4['waitForSelector']('#paymentWrap'), console['log'](_0x139c28() + '\x20[' + _0x2fa78e['name'] + ']\x20Task\x20' + (_0x49296b + 0x1) + '\x20:\x20' + _0x555803['blue']('Awaiting\x20Paypal\x20Payment')), _0x41ec17['on']('targetcreated', async _0x204f1d => {
                if (_0x204f1d['type']() === 'page') {
                    const _0x392cea = await _0x204f1d['page']();
                    async function _0x254b30() {
                        try {
                            await _0x3980c4['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x20b577 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x15aff8() {
                        try {
                            await _0x3980c4['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x262ba8 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x15aff8(), _0x254b30(), await _0x127b8e(0x493e0);
                }
            });
            async function _0xc925fc() {
                for (let _0x44e4c6 = 0x0; _0x44e4c6 < 0x12c; _0x44e4c6++) {
                    if (_0x262ba8 == !![]) {
                        console['log'](_0x555803['green'](_0x139c28() + '\x20[' + _0x2fa78e['name'] + ']\x20Task\x20' + (_0x49296b + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1a83e7(_0x184a41, _0x384489);
                        return;
                    } else {
                        if (_0x20b577)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x127b8e(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x127b8e(0xbb8), await _0x3980c4['click']('.zoid-outlet'), await _0x127b8e(0x7d0), await _0xc925fc();
        } catch (_0x5d8560) {
            console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x2fa78e['name'] + ']\x20Task\x20' + (_0x49296b + 0x1) + '\x20:\x20' + _0x5d8560)), _0x5359be[0x0]['title'] = 'Failed\x20entry', _0x5359be[0x0]['description'] = _0x2fa78e['name'] + ':\x20' + _0x5d8560, await _0x1a83e7(_0x24d596, _0x384489);
        } finally {
            _0x41ec17 && _0x41ec17['close'](), console['log']('Waiting\x20for\x20' + _0x50ba2c['delay'] + '\x20ms'), await _0x127b8e(_0x50ba2c['delay']);
        }
    }
}
async function _0xb12117(_0x5a7ccc, _0x4ac6ba, _0x371a92, _0x5c7695) {
    var _0x27be67 = {}, _0x37196e = [], _0xa86956 = {}, _0x1a498a = [
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
    !_0x5c7695 && (_0x5c7695 = {});
    if (_0x4ac6ba != 'ver') {
        _0x58cfeb(_0x371a92['name'] + '\x20Task\x20' + (_0x5a7ccc + 0x1) + '\x20/\x20' + _0x5c7695['length'] + '\x20||\x20File:\x20' + _0x57186d + '\x20Proxies:\x20' + _0x23b65f), await _0x2cdff8(_0x5c7695, _0x5a7ccc), _0x37196e = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x20e912
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5c7695[_0x5a7ccc]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x50ba2c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0xcb2ade
                }
            ]
        }], _0xa86956 = { 'embeds': _0x37196e }, _0x27be67 = _0x371a92['data'];
        _0x4ac6ba == 'exp' ? _0x27be67['data']['attributes']['email'] = '' + _0x5c7695[_0x5a7ccc]['FirstName'] + _0x5c7695[_0x5a7ccc]['LastName'] + _0x50ba2c['catchall'] : _0x27be67['data']['attributes']['email'] = '' + _0x5c7695[_0x5a7ccc]['Email'];
        if (_0x5c7695[_0x5a7ccc]['Size'] == 'RANDOM') {
        }
        _0x27be67['data']['attributes']['properties']['$first_name'] = '' + _0x5c7695[_0x5a7ccc]['FirstName'], _0x27be67['data']['attributes']['properties']['$last_name'] = '' + _0x5c7695[_0x5a7ccc]['LastName'], _0x27be67['data']['attributes']['properties']['$address1'] = _0x5c7695[_0x5a7ccc]['Address1'] + '\x20' + _0x5c7695[_0x5a7ccc]['Address2'] + '\x20' + _0x5c7695[_0x5a7ccc]['HouseNumber'], _0x27be67['data']['attributes']['properties']['$zip'] = '' + _0x5c7695[_0x5a7ccc]['Zip'], _0x27be67['data']['attributes']['properties']['$city'] = '' + _0x5c7695[_0x5a7ccc]['City'], _0x27be67['data']['attributes']['properties']['$country'] = '' + _0x5c7695[_0x5a7ccc]['Country'], _0x27be67['data']['attributes']['properties']['Size'] = '' + _0x5c7695[_0x5a7ccc]['Size'], _0x27be67['data']['attributes']['properties']['$phone_number'] = '' + _0x5c7695[_0x5a7ccc]['Phone'], _0x27be67['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x5c7695[_0x5a7ccc]['Follower'];
    }
    if (_0x50ba2c['useRandomProxy'] = ![])
        var _0x11dc20 = _0x3315ae()[_0x5a7ccc]['split'](':');
    else
        var _0x5aeb6f = Math['round'](Math['random']() * (_0x3315ae()['length'] - 0x1)), _0x11dc20 = _0x3315ae()[_0x5aeb6f]['split'](':');
    var _0x3dba29 = {
        'jar': _0x2cc6a9,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x371a92['url'],
        'headers': _0x371a92['headers'],
        'body': JSON['stringify'](_0x27be67),
        'proxy': 'http://' + _0x11dc20[0x2] + ':' + _0x11dc20[0x3] + '@' + _0x11dc20[0x0] + ':' + _0x11dc20[0x1]
    };
    return _0x4ac6ba != 'ver' && (_0x3dba29['url'] = _0x371a92['url'], _0x3dba29['headers'] = _0x371a92['headers']), _0x4ac6ba == 'ver' && (_0x3dba29['method'] = 'GET'), new Promise(function (_0x399bd8, _0x2dca80) {
        callback = async (_0x2be43c, _0x4d8508, _0x9f6b3c) => {
            !_0x2be43c && _0x4d8508['statusCode'] == 0xca || !_0x2be43c && _0x4d8508['statusCode'] == 0xc8 ? (_0x4ac6ba != 'ver' && await _0x1a83e7(_0x184a41, _0xa86956), _0x399bd8(console['log'](_0x555803['green'](_0x139c28() + '\x20[' + _0x371a92['name'] + ']\x20Task\x20' + (_0x5a7ccc + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x4ac6ba != 'ver' && (_0x37196e[0x0]['title'] = 'Failed\x20entry', _0x37196e[0x0]['description'] = '' + _0x2be43c, await _0x1a83e7(_0x24d596, _0xa86956)), _0x2dca80(console['log'](_0x139c28() + '\x20[' + _0x371a92['name'] + ']\x20Task\x20' + (_0x5a7ccc + 0x1) + ':\x20' + _0x2be43c)));
        };
        try {
            _0x4ac6ba != 'ver' && console['log'](_0x139c28() + '\x20[' + _0x371a92['name'] + ']\x20Task\x20' + (_0x5a7ccc + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x27be67['data']['attributes']['email']), _0x37aeda(_0x3dba29, callback);
        } catch (_0x5360b5) {
            console['log'](_0x139c28() + '\x20Task\x20' + (_0x5a7ccc + 0x1) + ':\x20' + _0x5360b5);
        }
    });
}
;
async function _0x12dd52() {
    await _0x4c0bef(), console['clear']();
    if (_0xcb2ade != 'devkey') {
        let _0x29b2fd = await _0x5c0644['autoUpdate']();
        if (_0x29b2fd === 'yes')
            return _0x678f2c('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x3fba73 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x127b8e(0x2710);
        ;
    }
    await _0x61ab69(_0x3fba73);
    if (_0x50ae6a === ![])
        return console['log']('Closing\x20Browser'), await _0x127b8e(0xbb8);
    else
        try {
            var _0x4b154d = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x20e912
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0xcb2ade
                    }
                ]
            }];
            const _0x2daeee = { 'embeds': _0x4b154d };
            await _0x1a83e7(_0xfeb107, _0x2daeee);
            async function _0x491bc3() {
                _0x58cfeb('JRaffles\x20' + _0xcb2ade), console['clear'](), console['log']('Welcome\x20to\x20' + _0x555803['cyan']('JRaffles();') + '\x20' + _0xcb2ade), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x1ba5d4 = 0x0; _0x1ba5d4 < _0x350147['length']; _0x1ba5d4++) {
                    if (_0x350147[_0x1ba5d4]['name'] === 'Reload\x20Settings' || _0x350147[_0x1ba5d4]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x1ba5d4 + ')\x20[' + _0x350147[_0x1ba5d4]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x350147['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x350147['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x52d11f();
                if (_0x350147[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x23ca5a(_0x350147[taskModule]['modules']);
                    var _0x5eeabb = _0x350147[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x3454db = await _0x34ee81();
                    await _0x228397(_0x3454db), await _0x5066a3();
                    var _0x220f23 = await _0x100e14();
                    return await afewFunction(_0x49c999[_0x272c43], 'nor', _0x5eeabb, _0x220f23, _0x3454db), _0x491bc3();
                } else {
                    if (_0x350147[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x23ca5a(_0x350147[taskModule]['modules']);
                        var _0x5eeabb = _0x350147[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x3454db = await _0x34ee81(), _0x20b48 = await _0x100e14();
                            console['log']('Starting\x20' + _0x20b48['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x1ba476 = 0x0; _0x1ba476 < _0x20b48['length']; _0x1ba476++) {
                                console['log'](_0x139c28() + '\x20[' + _0x5eeabb['name'] + ']\x20Task\x20' + (_0x1ba476 + 0x1) + ':\x20Getting\x20Session'), await _0x142c55(_0x1ba476, 'nor', _0x5eeabb, _0x20b48, _0x3454db), console['log'](_0x139c28() + '\x20[' + _0x5eeabb['name'] + ']\x20Sleeping\x20for\x20' + _0x50ba2c['MahaDelay'] + '\x20ms'), await _0x127b8e(_0x50ba2c['MahaDelay']);
                            }
                            ;
                            return _0x491bc3();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x3454db = await _0x34ee81();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x38e411(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x1ba476 = 0x0; _0x1ba476 < links['length']; _0x1ba476++) {
                                    _0x5eeabb['url'] = links[_0x1ba476], console['log'](_0x139c28() + '\x20[' + _0x5eeabb['name'] + ']\x20Task\x20' + (_0x1ba476 + 0x1) + ':\x20Getting\x20Session'), await _0x142c55(_0x1ba476, 'ver', _0x5eeabb, _0x20b48, _0x3454db), console['log'](_0x139c28() + '\x20[' + _0x5eeabb['name'] + ']\x20Sleeping\x20for\x20' + _0x50ba2c['verificationDelay'] + '\x20ms'), await _0x127b8e(_0x50ba2c['verificationDelay']);
                                }
                                ;
                                return _0x491bc3();
                            }
                        }
                    } else {
                        if (_0x350147[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x3454db = await _0x34ee81(), _0x1d4e86 = await _0x100e14();
                            return await _0x35f6fd(_0x1d4e86, _0x3454db), await _0x127b8e(0x1388), _0x491bc3();
                        } else {
                            if (_0x350147[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x23ca5a(_0x350147[taskModule]['modules']);
                                var _0x5eeabb = _0x350147[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x3cbbc1 = await _0x100e14();
                                    console['log']('Starting\x20' + _0x555803['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x1ba476 = 0x0; _0x1ba476 < _0x3cbbc1['length']; _0x1ba476++) {
                                        console['log'](_0x139c28() + '\x20[' + _0x5eeabb['name'] + ']\x20Task\x20' + (_0x1ba476 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0xb12117(_0x1ba476, 'nor', _0x5eeabb, _0x3cbbc1);
                                        } catch {
                                            console['log'](_0x555803['red'](_0x139c28() + '\x20[' + _0x5eeabb['name'] + ']\x20Task\x20' + (_0x1ba476 + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](_0x139c28() + '\x20[' + _0x5eeabb['name'] + ']\x20Sleeping\x20for\x20' + _0x50ba2c['delay'] + '\x20ms'), await _0x127b8e(_0x50ba2c['delay']);
                                    }
                                    return _0x491bc3();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x38e411(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x1ba476 = 0x0; _0x1ba476 < links['length']; _0x1ba476++) {
                                            try {
                                                _0x5eeabb['url'] = links[_0x1ba476], console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Task\x20' + (_0x1ba476 + 0x1) + ':\x20Getting\x20Session'), await _0xb12117(_0x1ba476, 'ver', _0x5eeabb), console['log'](_0x139c28() + '\x20[' + _0x350147[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x50ba2c['verificationDelay'] + '\x20ms'), await _0x127b8e(_0x50ba2c['verificationDelay']);
                                            } catch (_0x30de29) {
                                                console['log'](_0x30de29);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x491bc3();
                                    }
                                }
                                ;
                            } else {
                                if (_0x350147[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x23ca5a(_0x350147[taskModule]['modules']);
                                    var _0x5eeabb = _0x350147[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x6b1f49('https://bouncewear.com/nl/account/register', _0x5eeabb);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x350147[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x23ca5a(_0x350147[taskModule]['modules']);
                                        var _0x5eeabb = _0x350147[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x3454db = await _0x34ee81(), _0xf8809a = await _0x100e14();
                                            return await _0x593dce('https://patta.nl/account/register', _0x5eeabb, _0xf8809a, _0x3454db), _0x491bc3();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x3454db = await _0x34ee81(), _0xf8809a = await _0x100e14();
                                                return await _0x1e44bb('', _0x5eeabb, _0xf8809a, _0x3454db), _0x491bc3();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x350147[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await _0x23ca5a(_0x350147[taskModule]['modules']);
                                            var _0x5eeabb = _0x350147[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x3454db = await _0x34ee81(), _0x38a9c1 = await _0x100e14();
                                                return await _0x3002e9('https://www.kickz.com/nl/login/', _0x5eeabb, _0x38a9c1, _0x3454db), _0x491bc3();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x3454db = await _0x34ee81(), _0x38a9c1 = await _0x100e14();
                                                    return await _0x319dc1(_0x5eeabb, _0x38a9c1, _0x3454db), _0x491bc3();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x350147[taskModule]['name'] == 'JD') {
                                                taskFunction = await _0x23ca5a(_0x350147[taskModule]['modules']);
                                                var _0x5eeabb = _0x350147[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x3454db = await _0x34ee81(), _0x3b88e3 = await _0x100e14();
                                                    return await _0x98ee29(_0x5eeabb, _0x3b88e3, _0x3454db), _0x491bc3();
                                                }
                                            } else {
                                                if (_0x350147[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x2fe83c = 0x0;
                                                    for (const _0x2a3ea3 in _0x50ba2c) {
                                                        console['log']('(' + _0x2fe83c + ')\x20' + _0x2a3ea3 + '\x20:\x20' + _0x50ba2c[_0x2a3ea3]), _0x2fe83c++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x2fe83c + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x1e15e1 = await _0x268aa4();
                                                    if (_0x1e15e1 == _0x2fe83c)
                                                        return _0x491bc3();
                                                    console['clear'];
                                                    var _0x5039aa = 0x0;
                                                    for (var _0x28f133 in _0x50ba2c) {
                                                        if (_0x1e15e1 == _0x5039aa) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x28f133 + '\x20:'), _0x50ba2c[_0x28f133] = await _0x478383(), _0x1ce35f['writeFileSync']('../settings.json', JSON['stringify'](_0x50ba2c));
                                                            break;
                                                        } else
                                                            _0x5039aa++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await _0x127b8e(0xbb8), _0x491bc3();
                                                } else {
                                                    if (_0x350147[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await _0x4c0bef(), _0x491bc3();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            _0x350147[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x3f3a95 = await _0xdc74fe();
                                                            _0x3f3a95 == 'ModuleVoorDeBoys' ? (await _0x228397(), await _0x5066a3(), await afewFunction(_0x49c999[_0x272c43], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x127b8e(0xbb8));
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
            await _0x491bc3();
        } catch (_0x165694) {
            return console['log'](_0x165694), await _0x127b8e(0x3a98);
        }
}
;
_0x58cfeb('JRaffles\x20' + _0xcb2ade), _0x4c0bef(), _0x12dd52();