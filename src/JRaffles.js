var _0x8c8a8f = require('exe');
const { execFile: _0x50dc4a } = require('child_process'), _0x4f370d = require('puppeteer-extra'), _0x1c49cf = require('puppeteer-extra-plugin-recaptcha'), _0x467f25 = require('puppeteer-extra-plugin-stealth'), _0x1f9156 = require('chalk'), _0x14d892 = require('node-bash-title'), _0x566788 = require('fs'), _0x2ff578 = require('axios'), _0x34ab01 = require('papaparse');
var _0x18b987 = require('random-name');
const _0x1d63bc = require('request');
var _0x2f0a6a = require('prompt');
const _0x3a9a3b = _0x1d63bc['jar']();
var _0x1966b0 = {};
const _0x5829bd = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x18de68 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x3408d8 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x356846 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE';
var _0x23415f = 'https://discord.com/api/webhooks/', _0x4205d8 = '' + _0x23415f + _0x3408d8, _0x7b96af = '' + _0x23415f + _0x356846, _0x123656 = '' + _0x23415f + _0x5829bd, _0x38b098 = '' + _0x23415f + _0x18de68;
const _0x43007f = JSON['parse'](_0x566788['readFileSync']('../package.json', 'utf-8')), _0x13fa0b = _0x43007f['version'];
var _0x35d1f5, _0x553db5, _0x52f635, _0x21cecd, _0x3adfd0, _0x320b25, _0x5a0f1d;
const _0x1e4276 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x2dce64 = ![];
const _0x316716 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x1345e3 = '0123456789';
var _0x40da18 = _0x316716['split']('');
const _0x5dad89 = require('auto-git-update'), { PageEmittedEvents: _0x1987cf } = require('puppeteer'), { getRandomValues: _0x5b04c5 } = require('crypto'), { resolve: _0x2834dc } = require('path'), _0x38ed13 = {
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
}, _0x4ddb99 = new _0x5dad89(_0x38ed13);
async function _0x12232c() {
    _0x3adfd0 = _0x566788['readdirSync']('../proxies'), _0x21cecd = _0x566788['readdirSync']('../tasks'), _0x1966b0 = JSON['parse'](_0x566788['readFileSync']('../settings.json', 'utf-8')), !_0x1966b0['delay'] && (_0x1966b0['delay'] = 0x2710, _0x566788['writeFileSync']('../settings.json', JSON['stringify'](_0x1966b0))), !_0x1966b0['captchaKey'] && (_0x1966b0['captchaKey'] = '', _0x566788['writeFileSync']('../settings.json', JSON['stringify'](_0x1966b0))), !_0x1966b0['useRandomProxy'] && (_0x1966b0['useRandomProxy'] = !![], _0x566788['writeFileSync']('../settings.json', JSON['stringify'](_0x1966b0))), !_0x1966b0['webhook'] && (_0x1966b0['webhook'] = '', _0x566788['writeFileSync']('../settings.json', JSON['stringify'](_0x1966b0))), _0x23415f = _0x1966b0['webhook'], _0x320b25 = _0x1966b0['licenseKey'];
}
let _0x26984a, _0x4d4881 = [], _0x23f223;
const _0x3098db = _0x3eac11 => new Promise(_0x7a4d74 => setTimeout(_0x7a4d74, _0x3eac11));
function _0x119178(_0x18b658, _0x50a6c5) {
    return Math['floor'](Math['random']() * (_0x50a6c5 - _0x18b658 + 0x1) + _0x18b658);
}
async function _0x54b08e(_0x5dc036) {
    return _0x2ff578['get']('https://api.hyper.co/v4/licenses/' + _0x5dc036, { 'headers': { 'Authorization': 'Bearer\x20' + _0x1e4276 } })['then'](_0x1ffab5 => _0x1ffab5['data'])['catch'](() => null);
}
;
async function _0x210685(_0x2d1509) {
    console['clear']();
    if (_0x2d1509 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x5c33c3 = await _0x2f0a6a['get']('License');
        _0x5c33c3['License'] == 'AWGH-0N92-JE6S-HOHU' && console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), _0x2d1509 = _0x5c33c3['License'], _0x1966b0['licenseKey'] = _0x2d1509, _0x320b25 = _0x2d1509, _0x566788['writeFileSync']('../settings.json', JSON['stringify'](_0x1966b0));
    }
    console['log']('Checking\x20license\x20' + _0x320b25 + '...'), await _0x3098db(0x5dc);
    const _0x537df7 = await _0x54b08e(_0x2d1509);
    _0x5a0f1d = JSON['stringify'](_0x537df7['user']['username'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x537df7)
        return console['log']('License\x20not\x20found');
    if (!_0x537df7['user'])
        return console['log']('License\x20not\x20bound');
    return _0x537df7['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x2dce64 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x2dce64 = ![]);
}
async function _0x3be755() {
    var _0x55e3d7 = await _0x2f0a6a['get']('Module');
    return console['clear'](), _0x55e3d7['Module'];
}
;
async function _0x3ec96c() {
    var _0x529d8f = await _0x2f0a6a['get']('Setting');
    return console['clear'](), _0x529d8f['Setting'];
}
async function _0x4fa3de() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x38ce41 = 0x0; _0x38ce41 < _0x21cecd['length']; _0x38ce41++) {
        console['log']('\x20(' + _0x38ce41 + ')\x20' + _0x21cecd[_0x38ce41]);
    }
    console['log']('');
    var _0x3414c2 = await _0x2f0a6a['get']('Task'), _0x42d4e5 = _0x566788['readFileSync']('../tasks/' + _0x21cecd[_0x3414c2['Task']], 'utf-8');
    return _0x52f635 = _0x34ab01['parse'](_0x42d4e5, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x1f9156['blue'](_0x21cecd[_0x3414c2['Task']])), _0x35d1f5 = _0x21cecd[_0x3414c2['Task']], _0x52f635;
}
async function _0xf58dca() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x40b260 = 0x0; _0x40b260 < _0x3adfd0['length']; _0x40b260++) {
        console['log']('\x20(' + _0x40b260 + ')\x20' + _0x3adfd0[_0x40b260]);
    }
    console['log']('');
    var _0x46cfc1 = await _0x2f0a6a['get']('Proxies'), _0x37fcbe = _0x566788['readFileSync']('../proxies/' + _0x3adfd0[_0x46cfc1['Proxies']], 'utf-8')['split']('\x0a');
    let _0xbacacb = _0x37fcbe['map']((_0x1abbda, _0x230616) => {
        sanatizeProxy = _0x1abbda['replace']('\x0d', '');
        if (_0x37fcbe[_0x230616 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x553db5 = _0x3adfd0[_0x46cfc1['Proxies']], console['clear'](), _0xbacacb;
}
async function _0x2ce8cd() {
    var _0x12353a = await _0x2f0a6a['get']('Value');
    return console['clear'](), _0x12353a['Value'];
}
async function _0x42a7fe(_0x1b869d) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x111048 = 0x0; _0x111048 < _0x1b869d['length']; _0x111048++) {
        console['log']('\x20(' + _0x111048 + ')\x20[' + _0x1b869d[_0x111048]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x3f8373 = await _0x2f0a6a['get']('Module');
    return _0x3f8373['Module'];
}
async function _0x440434() {
    var _0x2ffc51 = await _0x2f0a6a['get']('Password');
    return console['clear'](), _0x2ffc51['Password'];
}
;
async function _0x4a4360() {
    var _0x3b0ffc = await _0x2f0a6a['get']('Links');
    return _0x3b0ffc['Links'];
}
;
async function _0x8bf400() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x1f3683 = 0x0; _0x1f3683 < _0x4d4881['length']; _0x1f3683++) {
        console['log']('\x20(' + _0x1f3683 + ')\x20' + _0x4d4881[_0x1f3683]);
    }
    ;
    console['log']();
    let _0x12f06b = await _0x2f0a6a['get']('Product');
    console['clear'](), _0x23f223 = _0x12f06b['Product'];
    return;
}
;
function _0x10594f() {
    var _0x2c989d = new Date(Date['now']())['toLocaleTimeString']();
    return _0x2c989d;
}
;
const _0x30722a = [
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
                            'list_id': 'VJnG3d',
                            'custom_source': 'DO8912-101',
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
                                '$consent_form_id': 'RwHCGb',
                                '$consent_form_version': 0x7c0710,
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
async function _0x3f2896(_0x52f7df, _0x173df7) {
    let _0x51ac49 = { 'headers': { 'content-type': 'application/json' } };
    await _0x2ff578['post'](_0x52f7df, _0x173df7, _0x51ac49);
}
;
async function _0x4d0c12(_0x272f8b, _0x55de89) {
    var _0x1f73ed = _0x272f8b[_0x55de89]['Address1']['split'](''), _0x2246a0 = _0x272f8b[_0x55de89]['Address2']['split'](''), _0x47585f = _0x272f8b[_0x55de89]['Email']['split']('@');
    for (var _0x438357 = 0x0; _0x438357 < _0x1f73ed['length']; _0x438357++) {
        if (_0x1f73ed[_0x438357] == 'X') {
            var _0x321fca = Math['round'](Math['random']() * (_0x316716['length'] - 0x1));
            _0x1f73ed[_0x438357] = _0x40da18[_0x321fca];
        }
    }
    ;
    for (var _0x438357 = 0x0; _0x438357 < _0x2246a0['length']; _0x438357++) {
        if (_0x2246a0[_0x438357] == 'X') {
            var _0x321fca = Math['round'](Math['random']() * (_0x316716['length'] - 0x1));
            _0x2246a0[_0x438357] = _0x40da18[_0x321fca];
        }
    }
    ;
    _0x272f8b[_0x55de89]['FirstName'] == 'RANDOM' && (_0x272f8b[_0x55de89]['FirstName'] = _0x18b987['first']());
    _0x272f8b[_0x55de89]['LastName'] == 'RANDOM' && (_0x272f8b[_0x55de89]['LastName'] = _0x18b987['last']());
    _0x47585f[0x0] == 'RANDOM' ? _0x47585f[0x0] = '' + _0x18b987['first']() + _0x18b987['last']() + '@' : _0x47585f[0x0] = _0x47585f[0x0] + '@';
    _0x272f8b[_0x55de89]['Phone'] == 'RANDOM' && (_0x272f8b[_0x55de89]['Phone'] = _0x119178(0x3b9aca00, 0x2540be3ff));
    if (_0x272f8b[_0x55de89]['Follower'] == 'RANDOM') {
        var _0x6b1d91 = _0x119178(0x1, 0x270f);
        _0x272f8b[_0x55de89]['Follower'] = '' + _0x18b987['first']() + _0x18b987['last']() + _0x6b1d91;
    }
    _0x272f8b[_0x55de89]['Email'] = _0x47585f['join'](''), _0x272f8b[_0x55de89]['Address1'] = _0x1f73ed['join'](''), _0x272f8b[_0x55de89]['Address2'] = _0x2246a0['join']('');
    return;
}
;
function _0x53a5ca() {
    let _0x413385 = proxyFile['split']('\x0a'), _0x18c301 = _0x413385['map']((_0x37429b, _0xb93cf7) => {
        sanatizeProxy = _0x37429b['replace']('\x0d', '');
        if (_0x413385[_0xb93cf7 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x18c301;
}
;
async function _0x5bdc1c(_0x3d5fd5) {
    var _0x22f497 = _0x3d5fd5[0x1]['split'](':');
    const _0x134198 = await _0x4f370d['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x22f497[0x0] + ':' + _0x22f497[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x39e7e3 = await _0x134198['newPage']();
        await _0x39e7e3['authenticate']({
            'username': '' + _0x22f497[0x2],
            'password': '' + _0x22f497[0x3]
        }), console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x39e7e3['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x39e7e3['setRequestInterception'](!![]), _0x39e7e3['on']('request', _0x3f07af => {
            _0x3f07af['resourceType']() === 'image' || _0x3f07af['resourceType']() === 'font' || _0x3f07af['resourceType']() === 'media' ? _0x3f07af['abort']() : _0x3f07af['continue']();
        }), await _0x39e7e3['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x39e7e3['waitForTimeout'](0xbb8), await _0x39e7e3['waitForSelector']('.product-card');
        const _0x5b4a11 = await _0x39e7e3['$$eval']('a.product-card', _0x32d6bb => {
            return _0x32d6bb['map'](_0x5c6632 => _0x5c6632['href']);
        });
        return _0x4d4881 = _0x5b4a11;
    } catch (_0x4386ea) {
        console['log']('\x20' + _0x4386ea);
    } finally {
        _0x134198['close'](), console['clear']();
    }
}
;
async function _0x3057cc(_0x5328df, _0x1dbf3f, _0x47288c, _0x1a8a54, _0x335152) {
    await _0x4d0c12(_0x1a8a54, _0x5328df);
    var _0x2b872b = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x5a0f1d
            },
            {
                'name': 'Size',
                'value': '' + _0x1a8a54[_0x5328df]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x1966b0['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x13fa0b
            }
        ]
    }];
    const _0x37c691 = { 'embeds': _0x2b872b };
    if (_0x1966b0['useRandomProxy'] = ![])
        var _0x46895d = _0x335152[_0x5328df]['split'](':');
    else
        var _0xc210e = Math['round'](Math['random']() * (_0x335152['length'] - 0x1)), _0x46895d = _0x335152[_0xc210e]['split'](':');
    var _0x1eb9ef = _0x47288c['data'];
    _0x1dbf3f == 'exp' ? _0x1eb9ef['data']['attributes']['email'] = '' + _0x1a8a54[_0x5328df]['FirstName'] + _0x1a8a54[_0x5328df]['LastName'] + _0x1966b0['catchall'] : _0x1eb9ef['data']['attributes']['email'] = '' + _0x1a8a54[_0x5328df]['Email'];
    _0x1eb9ef['data']['attributes']['properties']['$first_name'] = '' + _0x1a8a54[_0x5328df]['FirstName'], _0x1eb9ef['data']['attributes']['properties']['$last_name'] = '' + _0x1a8a54[_0x5328df]['LastName'], _0x1eb9ef['data']['attributes']['properties']['$address1'] = _0x1a8a54[_0x5328df]['Address1'] + '\x20' + _0x1a8a54[_0x5328df]['Address2'], _0x1eb9ef['data']['attributes']['properties']['$zip'] = '' + _0x1a8a54[_0x5328df]['Zip'], _0x1eb9ef['data']['attributes']['properties']['$city'] = '' + _0x1a8a54[_0x5328df]['City'], _0x1eb9ef['data']['attributes']['properties']['$country'] = '' + _0x1a8a54[_0x5328df]['Country'], _0x1eb9ef['data']['attributes']['properties']['Size'] = '' + _0x1a8a54[_0x5328df]['Size'], _0x1eb9ef['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x1a8a54[_0x5328df]['Follower'];
    var _0x51a5e3 = {
        'jar': _0x3a9a3b,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x47288c['url'],
        'headers': _0x47288c['headers'],
        'body': JSON['stringify'](_0x1eb9ef),
        'proxy': 'http://' + _0x46895d[0x2] + ':' + _0x46895d[0x3] + '@' + _0x46895d[0x0] + ':' + _0x46895d[0x1]
    };
    return _0x1dbf3f === 'ver' && (_0x51a5e3['method'] = 'GET'), new Promise(function (_0xd79381, _0x2d0e18) {
        callback = async (_0x48cf0f, _0x4830d0, _0x4ef62f) => {
            !_0x48cf0f && _0x4830d0['statusCode'] == 0xca || !_0x48cf0f && _0x4830d0['statusCode'] == 0xc8 ? _0xd79381(console['log'](_0x1f9156['green'](_0x10594f() + '\x20[' + _0x47288c['name'] + ']\x20Task\x20' + (_0x5328df + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x2b872b[0x0]['title'] = 'Failed\x20entry', _0x2b872b[0x0]['description'] = '' + _0x48cf0f, await _0x3f2896(_0x38b098, _0x37c691), _0x2d0e18(console['log'](_0x10594f() + '\x20[' + _0x47288c['name'] + ']\x20Task\x20' + (_0x5328df + 0x1) + ':\x20' + _0x48cf0f)));
        };
        try {
            _0x1dbf3f === 'ver' ? console['log'](_0x10594f() + '\x20[' + _0x47288c['name'] + ']\x20Task\x20' + (_0x5328df + 0x1) + ':\x20Verifying.') : console['log'](_0x10594f() + '\x20[' + _0x47288c['name'] + ']\x20Task\x20' + (_0x5328df + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1eb9ef['data']['attributes']['email']), _0x1d63bc(_0x51a5e3, callback);
        } catch (_0x471d75) {
            console['log'](_0x10594f() + '\x20Task\x20' + (_0x5328df + 0x1) + ':\x20' + _0x471d75);
        }
    });
}
;
async function _0x3b003f(_0x5497db, _0x56012c) {
    _0x4f370d['use'](_0x467f25()), _0x4f370d['use'](_0x1c49cf({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1966b0['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x20a524 = 0x0; _0x20a524 < _0x5497db['length']; _0x20a524++) {
        var _0x3aeac6 = '', _0xb4c3ee = 0x0, _0xafa489 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5a0f1d
                },
                {
                    'name': 'Product',
                    'value': '' + _0x5497db[_0x20a524]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5497db[_0x20a524]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1966b0['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x13fa0b
                }
            ]
        }];
        const _0x30e8aa = { 'embeds': _0xafa489 };
        await _0x4d0c12(_0x5497db, _0x20a524);
        if (_0x5497db[_0x20a524]['Email'] == '' || _0x5497db[_0x20a524]['FirstName'] == '' || _0x5497db[_0x20a524]['LastName'] == '' || _0x5497db[_0x20a524]['Country'] == '' || _0x5497db[_0x20a524]['Size'] == '' || _0x5497db[_0x20a524]['Address1'] == '' || _0x5497db[_0x20a524]['Zip'] == '') {
            console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5497db[_0x20a524]['Email'] == '' || _0x5497db[_0x20a524]['FirstName'] == '' || _0x5497db[_0x20a524]['LastName'] == '' || _0x5497db[_0x20a524]['Country'] == '' || _0x5497db[_0x20a524]['Size'] == '' || _0x5497db[_0x20a524]['Address1'] == '' || _0x5497db[_0x20a524]['Zip'] == '' || _0x5497db[_0x20a524]['Phone'] == '') {
            console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x54b896 = '' + _0x5497db[_0x20a524]['Url'];
        if (_0x1966b0['useRandomProxy'] = ![])
            var _0x56fb14 = _0x56012c[_0x20a524]['split'](':');
        else
            var _0x4f220c = Math['round'](Math['random']() * (_0x56012c['length'] - 0x1)), _0x56fb14 = _0x56012c[_0x4f220c]['split'](':');
        const _0x3feadb = await _0x4f370d['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x56fb14[0x0] + ':' + _0x56fb14[0x1]]
        });
        try {
            const _0x98caf3 = await _0x3feadb['newPage']();
            await _0x98caf3['authenticate']({
                'username': '' + _0x56fb14[0x2],
                'password': '' + _0x56fb14[0x3]
            }), console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x98caf3['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x98caf3['setRequestInterception'](!![]), _0x98caf3['on']('request', _0x36d440 => {
                _0x36d440['resourceType']() === 'image' || _0x36d440['resourceType']() === 'font' || _0x36d440['resourceType']() === 'media' ? _0x36d440['abort']() : _0x36d440['continue']();
            }), await _0x98caf3['goto'](_0x54b896), await _0x3098db(0xbb8), await _0x98caf3['waitForSelector']('.control__JhutY'), await _0x98caf3['click']('.control__JhutY'), await _0x3098db(0x1f4);
            if (_0x5497db[_0x20a524]['Size'] != 'RANDOM')
                try {
                    const _0xa11995 = await _0x98caf3['$x']('//div[contains(text(),\x20\x27' + _0x5497db[_0x20a524]['Size'] + '\x27)]');
                    await _0xa11995[0x0]['click']();
                } catch {
                    console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x2af3c3 = await _0x98caf3['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x18f2b9 = Math['round'](Math['random']() * (_0x2af3c3['length'] - 0x1));
                await _0x2af3c3[_0x18f2b9]['click']();
            }
            await _0x3098db(0x4b0);
            const _0x315cf1 = await _0x98caf3['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x315cf1[0x0]['click'](), await _0x98caf3['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x98caf3['type']('input[name=\x22email\x22]', '' + _0x5497db[_0x20a524]['Email']), await _0x3098db(0x640), await _0x98caf3['type']('input[name=\x22phone\x22]', '' + _0x5497db[_0x20a524]['Phone']), await _0x3098db(0x4b0), await _0x98caf3['click']('button.btn.continue-button__1RtsS'), await _0x3098db(0x4b0);
            try {
                await _0x98caf3['type']('input[name=\x22firstName\x22]', '' + _0x5497db[_0x20a524]['FirstName']), await _0x3098db(0x258);
            } catch {
                const _0x50e57f = await _0x98caf3['$$eval']('.invalid-feedback\x20>\x20div', _0x3132da => {
                    return _0x3132da['map'](_0x3134c3 => _0x3134c3['innerText']);
                });
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x20' + _0x50e57f));
                continue;
            }
            await _0x98caf3['type']('input[name=\x22lastName\x22]', '' + _0x5497db[_0x20a524]['LastName']), await _0x3098db(0xc8), await _0x98caf3['type']('input[name=\x22instagramUsername\x22]', '' + _0x5497db[_0x20a524]['Follower']), await _0x3098db(0x4b0), await _0x98caf3['click']('button.btn.continue-button__1RtsS'), await _0x3098db(0x3e8), console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x98caf3['select']('select[name=\x22country\x22]', '' + _0x5497db[_0x20a524]['Country']), await _0x3098db(0x2bc), await _0x98caf3['type']('input[name=\x22streetName\x22]', '' + _0x5497db[_0x20a524]['Address1']), await _0x3098db(0x258), await _0x98caf3['type']('input[name=\x22houseNumber\x22]', _0x5497db[_0x20a524]['HouseNumber'] + '\x20' + _0x5497db[_0x20a524]['Address2']), await _0x3098db(0xc8), await _0x98caf3['type']('input[name=\x22postalCode\x22]', '' + _0x5497db[_0x20a524]['Zip']), await _0x3098db(0x1f4), await _0x98caf3['type']('input[name=\x22city\x22]', '' + _0x5497db[_0x20a524]['City']), await _0x3098db(0x4b0), await _0x98caf3['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x3098db(0x4b0), await _0x98caf3['click']('button.btn.continue-button__1RtsS'), await _0x3098db(0x4b0), console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x98caf3['solveRecaptchas'](), console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x3098db(0xbb8), await _0x98caf3['click']('button.btn.continue-button__1RtsS'), await _0x3098db(0x1388), console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x98caf3['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x98caf3['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3098db(0x4b0), await _0x98caf3['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x5497db[_0x20a524]['CardNumber']), await _0x3098db(0x320), await _0x98caf3['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x98caf3['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x5497db[_0x20a524]['ExpiryDate']), await _0x3098db(0x4b0), await _0x98caf3['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x98caf3['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x5497db[_0x20a524]['CVV']), await _0x3098db(0x226), await _0x98caf3['type']('input[name=\x22holderName\x22]', '' + _0x5497db[_0x20a524]['NameOnCard']), await _0x3098db(0x226), await _0x98caf3['click']('button.adyen-checkout__button'), console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x98caf3['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x3098db(0xbb8), console['log'](_0x1f9156['green'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x3f2896(_0x123656, _0x30e8aa);
            } catch {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x2983f7) {
            console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x20' + _0x2983f7), _0xafa489[0x0]['title'] = 'Failed\x20' + _0x30722a[taskModule]['name'] + '\x20entry', _0xafa489[0x0]['description'] = '' + _0x2983f7, await _0x3f2896(_0x38b098, _0x30e8aa), _0x3aeac6 = 'yes';
        } finally {
            _0x3feadb['close']();
            if (_0x3aeac6 == 'yes' && _0xb4c3ee != 0x5) {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x20a524 + 0x1) + '\x20:\x20Retrying')), _0x20a524 = _0x20a524 - 0x1, _0xb4c3ee = _0xb4c3ee + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x1966b0['footshopDelay'] + '\x20ms'), await _0x3098db(_0x1966b0['footshopDelay']);
        }
    }
}
afewFunction = async (_0xd413d6, _0x1d0557, _0x9bc9bc, _0x334b3d, _0x184c2e) => {
    for (var _0x20df60 = 0x0; _0x20df60 < _0x334b3d['length']; _0x20df60++) {
        var _0x4c5618 = '', _0x403567 = 0x0;
        _0x14d892(_0x9bc9bc['name'] + '\x20Task\x20' + (_0x20df60 + 0x1) + '\x20/\x20' + _0x334b3d['length'] + '\x20||\x20File:\x20' + _0x35d1f5 + '\x20Proxies:\x20' + _0x553db5), await _0x4d0c12(_0x334b3d, _0x20df60);
        var _0xf1050a = [{
            'type': 'rich',
            'title': 'Succesful\x20AFEW\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5a0f1d
                },
                {
                    'name': 'Product',
                    'value': '' + _0xd413d6
                },
                {
                    'name': 'Size',
                    'value': '' + _0x334b3d[_0x20df60]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1966b0['AfewDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x13fa0b
                }
            ]
        }];
        const _0x405e51 = { 'embeds': _0xf1050a };
        if (_0x334b3d[_0x20df60]['Email'] == '' || _0x334b3d[_0x20df60]['FirstName'] == '' || _0x334b3d[_0x20df60]['LastName'] == '' || _0x334b3d[_0x20df60]['Country'] == '' || _0x334b3d[_0x20df60]['Size'] == '' || _0x334b3d[_0x20df60]['Address1'] == '' || _0x334b3d[_0x20df60]['Zip'] == '') {
            console['log'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1966b0['useRandomProxy'] = ![])
            var _0x3248f4 = _0x184c2e[_0x20df60]['split'](':');
        else
            var _0x14a846 = Math['round'](Math['random']() * (_0x184c2e['length'] - 0x1)), _0x3248f4 = _0x184c2e[_0x14a846]['split'](':');
        const _0x4f7d67 = await _0x4f370d['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3248f4[0x0] + ':' + _0x3248f4[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x39925b = await _0x4f7d67['newPage']();
            await _0x39925b['setDefaultNavigationTimeout'](0x1d4c0), await _0x39925b['authenticate']({
                'username': '' + _0x3248f4[0x2],
                'password': '' + _0x3248f4[0x3]
            }), console['log'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x39925b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x39925b['setRequestInterception'](!![]), _0x39925b['on']('request', _0x206f14 => {
                _0x206f14['resourceType']() === 'image' || _0x206f14['resourceType']() === 'font' || _0x206f14['resourceType']() === 'media' ? _0x206f14['abort']() : _0x206f14['continue']();
            }), await _0x39925b['goto'](_0xd413d6, { 'waitUntil': 'networkidle2' }), console['log'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x39925b['waitForTimeout'](0xfa0), console['log'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x39925b['waitForTimeout'](0x320);
            if (_0x334b3d[_0x20df60]['Size'] == 'RANDOM') {
                console['log'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x48af54 = await _0x39925b['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x845f46 => {
                    return _0x845f46['map'](_0x3a6853 => _0x3a6853['href']);
                });
                var _0x567a3b = Math['round'](Math['random']() * (_0x48af54['length'] - 0x1));
                await _0x39925b['goto']('' + _0x48af54[_0x567a3b]);
            } else {
                console['log'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x334b3d[_0x20df60]['Size']);
                try {
                    const _0x1487b2 = await _0x39925b['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x334b3d[_0x20df60]['Size'] + '\x22]\x20>\x20a', _0x350b84 => {
                        return _0x350b84['map'](_0x53a6a4 => _0x53a6a4['href']);
                    });
                    await _0x39925b['goto']('' + _0x1487b2[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x4e5281) {
                    console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20' + _0x4e5281 + '\x20Size\x20not\x20found')), _0xf1050a[0x0]['title'] = 'Failed\x20entry', _0xf1050a[0x0]['description'] = 'Size\x20not\x20found', await _0x3f2896(_0x38b098, _0x405e51);
                    continue;
                }
            }
            await _0x39925b['waitForTimeout'](0x258), await _0x39925b['type']('#raffle-instagram', '' + _0x334b3d[_0x20df60]['Follower'], { 'delay': 0x64 }), await _0x39925b['waitForTimeout'](0x384), await _0x39925b['click']('#raffle-terms'), await _0x39925b['waitForTimeout'](0x384), await _0x39925b['evaluate'](() => {
                const _0x5c2552 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x5c2552['click']();
            }), await _0x39925b['waitForTimeout'](0xbb8), await _0x39925b['waitForSelector']('#checkout_email'), await _0x3098db(0x3e8), console['log'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x1d0557 == 'sec' ? await _0x39925b['type']('#checkout_email', '' + _0x334b3d[_0x20df60]['FirstName'] + _0x334b3d[_0x20df60]['LastName'] + _0x1966b0['catchall'], 0x32) : await _0x39925b['type']('#checkout_email', '' + _0x334b3d[_0x20df60]['Email'], 0x32);
            await _0x3098db(0x320), await _0x39925b['select']('#checkout_shipping_address_country', '' + _0x334b3d[_0x20df60]['Country']), await _0x39925b['waitForTimeout'](0x258), await _0x39925b['type']('#checkout_shipping_address_first_name', '' + _0x334b3d[_0x20df60]['FirstName']), await _0x39925b['waitForTimeout'](0x320), await _0x39925b['type']('#checkout_shipping_address_last_name', '' + _0x334b3d[_0x20df60]['LastName']), await _0x39925b['waitForTimeout'](0x2bc), await _0x39925b['type']('#checkout_shipping_address_address1', _0x334b3d[_0x20df60]['Address1'] + '\x20' + _0x334b3d[_0x20df60]['HouseNumber']), await _0x39925b['waitForTimeout'](0x2bc), await _0x39925b['type']('#checkout_shipping_address_address2', '' + _0x334b3d[_0x20df60]['Address2']), await _0x39925b['waitForTimeout'](0x2bc);
            _0x334b3d[_0x20df60]['Postcode'] == undefined ? await _0x39925b['type']('#checkout_shipping_address_zip', '' + _0x334b3d[_0x20df60]['Zip']) : await _0x39925b['type']('#checkout_shipping_address_zip', '' + _0x334b3d[_0x20df60]['Postcode']);
            await _0x39925b['waitForTimeout'](0x2bc), await _0x39925b['type']('#checkout_shipping_address_city', '' + _0x334b3d[_0x20df60]['City']), await _0x39925b['waitForTimeout'](0x2bc), console['log'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x39925b, _0x39925b['evaluate'](() => {
                const _0x1b2b44 = document['querySelector']('#continue_button');
                for (var _0x532034 = 0x0; _0x532034 < 0x5; _0x532034++) {
                    if (_0x1b2b44) {
                        _0x1b2b44['click'](), _0x1b2b44['click']();
                        break;
                    } else
                        _0x3098db(0xfa0);
                }
            }), await _0x39925b['waitForTimeout'](0x1194);
            try {
                await _0x39925b['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x39925b['evaluate'](() => {
                const _0x130673 = document['querySelector']('#continue_button');
                for (var _0xa233fd = 0x0; _0xa233fd < 0x5; _0xa233fd++) {
                    if (_0x130673) {
                        _0x130673['click']();
                        break;
                    } else
                        _0x3098db(0xfa0);
                }
            }), await _0x39925b['waitForTimeout'](0x7d0), console['log'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x39925b['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x39925b['evaluate'](() => {
                const _0x312191 = document['querySelector']('#continue_button');
                for (var _0x17ae37 = 0x0; _0x17ae37 < 0x5; _0x17ae37++) {
                    if (_0x312191) {
                        _0x312191['click']();
                        break;
                    } else
                        _0x3098db(0xfa0);
                }
            }), await _0x39925b['waitForTimeout'](0x1194), await _0x39925b['waitForSelector']('#continue_button'), _0x39925b['evaluate'](() => {
                const _0x5cac9e = document['querySelector']('#continue_button');
                for (var _0x3d7fdc = 0x0; _0x3d7fdc < 0x5; _0x3d7fdc++) {
                    if (_0x5cac9e) {
                        _0x5cac9e['click']();
                        break;
                    } else
                        _0x3098db(0xfa0);
                }
            });
            try {
                await _0x39925b['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x4d684b) {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x4d684b));
            }
            console['log'](_0x1f9156['green'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x3f2896(_0x123656, _0x405e51);
        } catch (_0x1fec0f) {
            console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20' + _0x1fec0f)), _0xf1050a[0x0]['title'] = 'Failed\x20entry', _0xf1050a[0x0]['description'] = '' + _0x1fec0f, await _0x3f2896(_0x38b098, _0x405e51), _0x4c5618 = 'yes';
        } finally {
            _0x4f7d67 && _0x4f7d67['close']();
            if (_0x4c5618 == 'yes' && _0x403567 != 0x5) {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x9bc9bc['name'] + ']\x20Task\x20' + (_0x20df60 + 0x1) + '\x20:\x20Retrying')), _0x20df60 = _0x20df60 - 0x1, _0x403567 = _0x403567 + 0x1;
                continue;
            }
            if (_0x20df60 + 0x1 == _0x334b3d['length']) {
                console['log'](_0x1f9156['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x3098db(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x1966b0['AfewDelay'] + '\x20ms'), await _0x3098db(_0x1966b0['AfewDelay']);
        }
    }
};
async function _0x54af47(_0x2ef451, _0x5278c8, _0x5cfb75, _0x323bb1) {
    _0x4f370d['use'](_0x467f25()), _0x4f370d['use'](_0x1c49cf({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1966b0['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5d798a = 0x0; _0x5d798a < _0x5cfb75['length']; _0x5d798a++) {
        var _0xc5a78a = '', _0x6e7c5 = 0x0;
        _0x14d892(_0x5278c8['name'] + '\x20Task\x20' + (_0x5d798a + 0x1) + '\x20/\x20' + _0x5cfb75['length'] + '\x20||\x20File:\x20' + _0x35d1f5 + '\x20Proxies:\x20' + _0x553db5);
        var _0x28b2dd = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5a0f1d
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1966b0['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x13fa0b
                }
            ]
        }];
        const _0x5917cf = { 'embeds': _0x28b2dd };
        await _0x4d0c12(_0x5cfb75, _0x5d798a);
        if (_0x5cfb75[_0x5d798a]['Email'] == '' || _0x5cfb75[_0x5d798a]['Password'] == '' || _0x5cfb75[_0x5d798a]['FirstName'] == '' || _0x5cfb75[_0x5d798a]['LastName'] == '') {
            console['log'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1966b0['useRandomProxy'] = ![])
            var _0x21d458 = _0x323bb1[_0x5d798a]['split'](':');
        else
            var _0x43c984 = Math['round'](Math['random']() * (_0x323bb1['length'] - 0x1)), _0x21d458 = _0x323bb1[_0x43c984]['split'](':');
        const _0x6bbfa6 = await _0x4f370d['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x21d458[0x0] + ':' + _0x21d458[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x454b90 = await _0x6bbfa6['newPage']();
            await _0x454b90['authenticate']({
                'username': '' + _0x21d458[0x2],
                'password': '' + _0x21d458[0x3]
            }), console['log'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x454b90['setRequestInterception'](!![]), _0x454b90['on']('request', _0x2bdf78 => {
                _0x2bdf78['resourceType']() === 'image' || _0x2bdf78['resourceType']() === 'font' || _0x2bdf78['resourceType']() === 'media' ? _0x2bdf78['abort']() : _0x2bdf78['continue']();
            }), await _0x454b90['goto'](_0x2ef451), await _0x3098db(0xbb8), console['log'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x454b90['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x454b90['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x454b90['waitForSelector']('#button-register'), await _0x3098db(0x7d0), await _0x454b90['evaluate'](() => {
                const _0x181c08 = document['querySelector']('#button-register');
                _0x181c08['click']();
            }), console['log'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x3098db(0x1388), await _0x454b90['waitForSelector']('#customer_salutation'), await _0x454b90['select']('#customer_salutation', 'mr'), await _0x3098db(0x7d0), await _0x454b90['waitForSelector']('#customer_firstname'), await _0x454b90['type']('#customer_firstname', '' + _0x5cfb75[_0x5d798a]['FirstName']), await _0x3098db(0x352), await _0x454b90['waitForSelector']('#customer_lastname'), await _0x454b90['type']('#customer_lastname', '' + _0x5cfb75[_0x5d798a]['LastName']), await _0x3098db(0x352), await _0x454b90['type']('#email-input', '' + _0x5cfb75[_0x5d798a]['Email']), await _0x3098db(0x352), await _0x454b90['type']('#email-confirm-input', '' + _0x5cfb75[_0x5d798a]['Email']), await _0x3098db(0x352), await _0x454b90['type']('#register-password', '' + _0x5cfb75[_0x5d798a]['Password']), await _0x3098db(0x352), await _0x454b90['type']('#password-confirm', '' + _0x5cfb75[_0x5d798a]['Password']), await _0x3098db(0x352), console['log'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x454b90['click']('#consent'), await _0x3098db(0x1f4);
            const _0x345ece = await _0x454b90['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x345ece) {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x454b90['click']('#buttonRegister');
            try {
                await _0x454b90['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x1f9156['yellow'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20Account\x20' + _0x5cfb75[_0x5d798a]['Email'] + '\x20Generated!')), console['log'](_0x1f9156['yellow'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x5cfb75[_0x5d798a]['Email'])), await _0x3098db(0x4b0);
            async function _0xe8a230() {
                console['log'](_0x1f9156['yellow'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x4fcaac = await _0x2f0a6a['get']('Code');
                return _0x4fcaac['Code'];
            }
            ;
            code = await _0xe8a230(), _0x3098db(0x320), console['log'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20Verifying..'), await _0x454b90['type']('#verificationCode', code), await _0x3098db(0x1f4), await _0x454b90['click']('#buttonVerify'), await _0x3098db(0x190), await _0x454b90['click']('#buttonVerify'), await _0x3098db(0x3e8);
            try {
                await _0x454b90['waitForSelector']('div.b-user_greeting'), console['log'](_0x1f9156['green'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20Account\x20' + _0x5cfb75[_0x5d798a]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x566788['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x5cfb75[_0x5d798a]['Email'] + ',' + _0x5cfb75[_0x5d798a]['Password'] + ','), console['log'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20Account\x20' + _0x5cfb75[_0x5d798a]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27'), await _0x3f2896(_0x7b96af, _0x5917cf);
            } catch {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x5b0233) {
            console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20' + _0x5b0233)), _0x28b2dd[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x28b2dd[0x0]['description'] = '' + _0x5b0233, await _0x3f2896(_0x38b098, _0x5917cf), _0xc5a78a = 'yes';
        } finally {
            _0x6bbfa6 && _0x6bbfa6['close']();
            if (_0xc5a78a == 'yes' && _0x6e7c5 != 0x5) {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x5278c8['name'] + ']\x20Task\x20' + (_0x5d798a + 0x1) + '\x20:\x20Retrying')), _0x5d798a = _0x5d798a - 0x1, _0x6e7c5 = _0x6e7c5 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x1966b0['delay'] + '\x20ms'), await _0x3098db(_0x1966b0['delay']);
        }
    }
}
async function _0x315f69(_0x1ab229, _0x1785a4, _0x416afb) {
    _0x4f370d['use'](_0x467f25()), _0x4f370d['use'](_0x1c49cf({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1966b0['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x42828c = 0x0; _0x42828c < _0x1785a4['length']; _0x42828c++) {
        var _0x279560 = '', _0x20c43f = 0x0;
        _0x14d892(_0x1ab229['name'] + '\x20Task\x20' + (_0x42828c + 0x1) + '\x20/\x20' + _0x1785a4['length'] + '\x20||\x20File:\x20' + _0x35d1f5 + '\x20Proxies:\x20' + _0x553db5);
        var _0x208411 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5a0f1d
                },
                {
                    'name': 'Product',
                    'value': '' + _0x1785a4[_0x42828c]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1785a4[_0x42828c]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1966b0['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x13fa0b
                }
            ]
        }];
        const _0x3c2ec9 = { 'embeds': _0x208411 };
        await _0x4d0c12(_0x1785a4, _0x42828c);
        if (_0x1785a4[_0x42828c]['Email'] == '' || _0x1785a4[_0x42828c]['Password'] == '' || _0x1785a4[_0x42828c]['FirstName'] == '' || _0x1785a4[_0x42828c]['LastName'] == '') {
            console['log'](_0x10594f() + '\x20[' + _0x1ab229['name'] + ']\x20Task\x20' + (_0x42828c + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1966b0['useRandomProxy'] = ![])
            var _0x19661a = _0x416afb[_0x42828c]['split'](':');
        else
            var _0x20e996 = Math['round'](Math['random']() * (_0x416afb['length'] - 0x1)), _0x19661a = _0x416afb[_0x20e996]['split'](':');
        const _0x1df33b = await _0x4f370d['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x19661a[0x0] + ':' + _0x19661a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x365cbb = await _0x1df33b['newPage']();
            await _0x365cbb['authenticate']({
                'username': '' + _0x19661a[0x2],
                'password': '' + _0x19661a[0x3]
            }), console['log'](_0x10594f() + '\x20[' + _0x1ab229['name'] + ']\x20Task\x20' + (_0x42828c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x365cbb['setRequestInterception'](!![]), _0x365cbb['on']('request', _0x52de80 => {
                _0x52de80['resourceType']() === 'image' || _0x52de80['resourceType']() === 'font' || _0x52de80['resourceType']() === 'media' ? _0x52de80['abort']() : _0x52de80['continue']();
            }), await _0x365cbb['goto']('' + _0x1785a4[_0x42828c]['Url'], { 'waitUntil': 'networkidle2' }), await _0x3098db(0x12c);
            try {
                await _0x365cbb['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x365cbb['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x10594f() + '\x20[' + _0x1ab229['name'] + ']\x20Task\x20' + (_0x42828c + 0x1) + '\x20:\x20Logging\x20in'), await _0x365cbb['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x365cbb['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x365cbb['waitForSelector']('#username'), await _0x365cbb['type']('#username', _0x1785a4[_0x42828c]['Email']), await _0x365cbb['waitForSelector']('#password'), await _0x365cbb['type']('#password', _0x1785a4[_0x42828c]['Password']), await _0x3098db(0x190), await _0x365cbb['click']('#buttonSubmit'), await _0x365cbb['waitForSelector']('div.b-user_greeting'), console['log'](_0x10594f() + '\x20[' + _0x1ab229['name'] + ']\x20Task\x20' + (_0x42828c + 0x1) + '\x20:\x20Getting\x20Product'), await _0x3098db(0x1f4), await _0x365cbb['goto']('' + _0x1785a4[_0x42828c]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x10594f() + '\x20[' + _0x1ab229['name'] + ']\x20Task\x20' + (_0x42828c + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x1785a4[_0x42828c]['Size']);
            let _0x512605 = _0x1785a4[_0x42828c]['Size']['replace']('.5', '\x201/2');
            await _0x365cbb['click']('button[title=\x22' + _0x512605 + '\x22]'), await _0x3098db(0x1f4);
            try {
                await _0x365cbb['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x3098db(0x12c), console['log'](_0x10594f() + '\x20[' + _0x1ab229['name'] + ']\x20Task\x20' + (_0x42828c + 0x1) + '\x20:\x20Filling\x20Information'), await _0x365cbb['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x3098db(0x12c), await _0x365cbb['type']('#dwfrm_raffle_addressFields_firstName', _0x1785a4[_0x42828c]['FirstName']), await _0x3098db(0x12c), await _0x365cbb['type']('#dwfrm_raffle_addressFields_lastName', _0x1785a4[_0x42828c]['LastName']), await _0x3098db(0x12c), await _0x365cbb['select']('#dwfrm_raffle_addressFields_country', _0x1785a4[_0x42828c]['Country']), await _0x3098db(0x12c), await _0x365cbb['type']('#dwfrm_raffle_addressFields_city', _0x1785a4[_0x42828c]['City']), await _0x3098db(0x12c);
            _0x1785a4[_0x42828c]['Postcode'] == undefined && (_0x1785a4[_0x42828c]['Postcode'] = _0x1785a4[_0x42828c]['Zip']);
            await _0x365cbb['type']('#dwfrm_raffle_addressFields_postalCode', _0x1785a4[_0x42828c]['Postcode']), await _0x3098db(0x12c), await _0x365cbb['type']('#dwfrm_raffle_addressFields_address1', _0x1785a4[_0x42828c]['Address1']), await _0x3098db(0x12c), await _0x365cbb['type']('#dwfrm_raffle_addressFields_address2', _0x1785a4[_0x42828c]['HouseNumber']), await _0x3098db(0x12c), await _0x365cbb['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x1785a4[_0x42828c]['Address2']), await _0x3098db(0x12c), await _0x365cbb['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x3098db(0x12c), await _0x365cbb['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x1785a4[_0x42828c]['Follower']), await _0x3098db(0x1f4), await _0x365cbb['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x3098db(0x1f4), console['log'](_0x10594f() + '\x20[' + _0x1ab229['name'] + ']\x20Task\x20' + (_0x42828c + 0x1) + '\x20:\x20' + _0x1f9156['blue']('Awaiting\x20Paypal\x20Payment')), await _0x365cbb['click']('.b-paypal_button');
            try {
                await _0x365cbb['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x1f9156['green'](_0x10594f() + '\x20[' + _0x1ab229['name'] + ']\x20Task\x20' + (_0x42828c + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x3f2896(_0x123656, _0x3c2ec9);
            } catch (_0x5759a5) {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x1ab229['name'] + ']\x20Task\x20' + (_0x42828c + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x5759a5));
            }
        } catch (_0x50621e) {
            console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x1ab229['name'] + ']\x20Task\x20' + (_0x42828c + 0x1) + '\x20:\x20' + _0x50621e)), _0x208411[0x0]['title'] = 'Failed\x20kickz\x20Entry', _0x208411[0x0]['description'] = '' + _0x50621e, await _0x3f2896(_0x38b098, _0x3c2ec9), _0x279560 = 'yes';
        } finally {
            _0x1df33b && _0x1df33b['close']();
            if (_0x279560 == 'yes' && _0x20c43f != 0x5) {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x1ab229['name'] + ']\x20Task\x20' + (_0x42828c + 0x1) + '\x20:\x20Retrying')), _0x42828c = _0x42828c - 0x1, _0x20c43f = _0x20c43f + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x1966b0['AfewDelay'] + '\x20ms'), await _0x3098db(_0x1966b0['AfewDelay']);
        }
    }
}
async function _0x155d2c(_0x5e3486, _0x5099d8) {
    _0x4f370d['use'](_0x467f25()), _0x4f370d['use'](_0x1c49cf({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1966b0['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5b44ca = 0x0; _0x5b44ca < bouncewear['length']; _0x5b44ca++) {
        await _0x4d0c12(bouncewear, _0x5b44ca);
        if (bouncewear[_0x5b44ca]['Email'] == '' || bouncewear[_0x5b44ca]['Password'] == '' || bouncewear[_0x5b44ca]['FirstName'] == '' || bouncewear[_0x5b44ca]['LastName'] == '') {
            console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x5b44ca + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1966b0['useRandomProxy'] = ![])
            var _0x3c5e29 = _0x53a5ca()[_0x5b44ca]['split'](':');
        else
            var _0x26a8ee = Math['round'](Math['random']() * (_0x53a5ca()['length'] - 0x1)), _0x3c5e29 = _0x53a5ca()[_0x26a8ee]['split'](':');
        const _0x5359aa = await _0x4f370d['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3c5e29[0x0] + ':' + _0x3c5e29[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x13e293 = await _0x5359aa['newPage']();
            await _0x13e293['authenticate']({
                'username': '' + _0x3c5e29[0x2],
                'password': '' + _0x3c5e29[0x3]
            }), console['log'](_0x10594f() + '\x20[' + _0x5099d8['name'] + ']\x20Task\x20' + (_0x5b44ca + 0x1) + '\x20:\x20Getting\x20Session'), await _0x13e293['setRequestInterception'](!![]), _0x13e293['on']('request', _0xe45432 => {
                _0xe45432['resourceType']() === 'image' || _0xe45432['resourceType']() === 'font' || _0xe45432['resourceType']() === 'media' ? _0xe45432['abort']() : _0xe45432['continue']();
            }), await _0x13e293['goto'](_0x5e3486), await _0x3098db(0xbb8), await _0x13e293['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x10594f() + '\x20[' + _0x5099d8['name'] + ']\x20Task\x20' + (_0x5b44ca + 0x1) + '\x20:\x20Filling\x20information'), await _0x13e293['type']('#RegisterForm-FirstName', '' + bouncewear[_0x5b44ca]['FirstName']), await _0x3098db(0x226), await _0x13e293['type']('#RegisterForm-LastName', '' + bouncewear[_0x5b44ca]['LastName']), await _0x3098db(0x226), await _0x13e293['type']('#RegisterForm-email', '' + bouncewear[_0x5b44ca]['Email']), await _0x3098db(0x226), await _0x13e293['type']('#RegisterForm-password', '' + bouncewear[_0x5b44ca]['Password']), await _0x3098db(0x226), await _0x13e293['click']('#marketing'), console['log'](_0x10594f() + '\x20[' + _0x5099d8['name'] + ']\x20Task\x20' + (_0x5b44ca + 0x1) + '\x20:\x20Submitting..'), await _0x13e293['$eval']('#RegisterForm', _0x3d4c0a => _0x3d4c0a['submit']()), await _0x3098db(0x1f40), console['log'](_0x10594f() + '\x20[' + _0x5099d8['name'] + ']\x20Task\x20' + (_0x5b44ca + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x13e293['solveRecaptchas'](), await _0x13e293['click']('.shopify-challenge__button.btn');
            async function _0x17e998() {
                for (var _0x40a4ed = 0x0; _0x40a4ed < 0x4; _0x40a4ed++) {
                    try {
                        console['log']('try'), await _0x13e293['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x10594f() + '\x20[' + _0x5099d8['name'] + ']\x20Task\x20' + (_0x5b44ca + 0x1) + '\x20:\x20' + _0x1f9156['red']('Catpcha\x20failed,\x20retrying..')), await _0x13e293['solveRecaptchas'](), await _0x13e293['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x17e998(), console['log'](_0x10594f() + '\x20[' + _0x5099d8['name'] + ']\x20Task\x20' + (_0x5b44ca + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x3098db(0x1f4);
            try {
                await _0x13e293['waitForSelector']('.featured-title'), await _0x3098db(0x1f4), console['log'](_0x1f9156['green'](_0x10594f() + '\x20[' + _0x5099d8['name'] + ']\x20Task\x20' + (_0x5b44ca + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x5b44ca]['Email'] + '\x20Generated!')), _0x566788['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x5b44ca]['Email'] + ',' + bouncewear[_0x5b44ca]['Password']), console['log'](_0x1f9156['yellow'](_0x10594f() + '\x20[' + _0x5099d8['name'] + ']\x20Task\x20' + (_0x5b44ca + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x5b44ca]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x1b295a) {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x5b44ca + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1b295a));
            }
        } catch (_0x1dee28) {
            console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x5b44ca + 0x1) + '\x20:\x20' + _0x1dee28));
        } finally {
            _0x5359aa && _0x5359aa['close'](), console['log']('Waiting\x20for\x20' + _0x1966b0['delay'] + '\x20ms'), await _0x3098db(_0x1966b0['delay']);
        }
    }
}
async function _0x5a2899(_0x272529, _0x491282, _0x358beb, _0x11d867) {
    _0x4f370d['use'](_0x467f25()), _0x4f370d['use'](_0x1c49cf({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1966b0['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xc68eab = 0x0; _0xc68eab < _0x358beb['length']; _0xc68eab++) {
        var _0xd51e52 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5a0f1d
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1966b0['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x13fa0b
                }
            ]
        }];
        const _0x2ff110 = { 'embeds': _0xd51e52 };
        _0x14d892(_0x491282['name'] + '\x20Task\x20' + (_0xc68eab + 0x1) + '\x20/\x20' + _0x358beb['length'] + '\x20||\x20File:\x20' + _0x35d1f5 + '\x20Proxies:\x20' + _0x553db5), await _0x4d0c12(_0x358beb, _0xc68eab);
        if (_0x358beb[_0xc68eab]['Email'] == '' || _0x358beb[_0xc68eab]['Password'] == '' || _0x358beb[_0xc68eab]['Password'] == undefined || _0x358beb[_0xc68eab]['FirstName'] == '' || _0x358beb[_0xc68eab]['LastName'] == '') {
            console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0xc68eab + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1966b0['useRandomProxy'] = ![])
            var _0x46a169 = _0x11d867[_0xc68eab]['split'](':');
        else
            var _0x56fb94 = Math['round'](Math['random']() * (_0x11d867['length'] - 0x1)), _0x46a169 = _0x11d867[_0x56fb94]['split'](':');
        const _0x422902 = await _0x4f370d['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x46a169[0x0] + ':' + _0x46a169[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x219d9b = await _0x422902['newPage']();
            await _0x219d9b['authenticate']({
                'username': '' + _0x46a169[0x2],
                'password': '' + _0x46a169[0x3]
            }), console['log'](_0x10594f() + '\x20[' + _0x491282['name'] + ']\x20Task\x20' + (_0xc68eab + 0x1) + '\x20:\x20Getting\x20Session'), await _0x219d9b['setRequestInterception'](!![]), _0x219d9b['on']('request', _0x190971 => {
                _0x190971['resourceType']() === 'image' || _0x190971['resourceType']() === 'font' || _0x190971['resourceType']() === 'media' ? _0x190971['abort']() : _0x190971['continue']();
            }), await _0x219d9b['goto'](_0x272529), await _0x3098db(0xbb8), await _0x219d9b['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x10594f() + '\x20[' + _0x491282['name'] + ']\x20Task\x20' + (_0xc68eab + 0x1) + '\x20:\x20Filling\x20information'), await _0x219d9b['type']('#RegisterForm-FirstName', '' + _0x358beb[_0xc68eab]['FirstName']), await _0x3098db(0x226), await _0x219d9b['type']('#RegisterForm-LastName', '' + _0x358beb[_0xc68eab]['LastName']), await _0x3098db(0x226), await _0x219d9b['type']('#RegisterForm-email', '' + _0x358beb[_0xc68eab]['Email']), await _0x3098db(0x226), await _0x219d9b['type']('#RegisterForm-password', '' + _0x358beb[_0xc68eab]['Password']), await _0x3098db(0x226), console['log'](_0x10594f() + '\x20[' + _0x491282['name'] + ']\x20Task\x20' + (_0xc68eab + 0x1) + '\x20:\x20Submitting..'), await _0x219d9b['$eval']('#RegisterForm', _0x233fff => _0x233fff['submit']()), await _0x3098db(0x1f40);
            try {
                await _0x219d9b['waitForSelector']('.home-page-grid__collection'), await _0x3098db(0x1f4), console['log'](_0x1f9156['green'](_0x10594f() + '\x20[' + _0x491282['name'] + ']\x20Task\x20' + (_0xc68eab + 0x1) + '\x20:\x20Account\x20' + _0x358beb[_0xc68eab]['Email'] + '\x20Generated!')), _0x566788['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x358beb[_0xc68eab]['Email'] + ',' + _0x358beb[_0xc68eab]['Password']), console['log'](_0x1f9156['yellow'](_0x10594f() + '\x20[' + _0x491282['name'] + ']\x20Task\x20' + (_0xc68eab + 0x1) + '\x20:\x20Account\x20' + _0x358beb[_0xc68eab]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27')), await _0x3f2896(_0x7b96af, _0x2ff110);
            } catch (_0x33ae5b) {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0xc68eab + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x33ae5b));
            }
        } catch (_0x14fadf) {
            console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0xc68eab + 0x1) + '\x20:\x20' + _0x14fadf));
        } finally {
            _0x422902 && _0x422902['close'](), console['log']('Waiting\x20for\x20' + _0x1966b0['delay'] + '\x20ms'), await _0x3098db(_0x1966b0['delay']);
        }
    }
}
async function _0x5d3772(_0x4736c1, _0x5e04ef, _0x16a4d5, _0x38b4b8) {
    _0x4f370d['use'](_0x467f25()), _0x4f370d['use'](_0x1c49cf({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1966b0['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xb2fc1 = 0x0; _0xb2fc1 < _0x16a4d5['length']; _0xb2fc1++) {
        var _0x5a8f9a = '', _0x2115da = 0x0;
        _0x14d892(_0x5e04ef['name'] + '\x20Task\x20' + (_0xb2fc1 + 0x1) + '\x20/\x20' + _0x16a4d5['length'] + '\x20||\x20File:\x20' + _0x35d1f5 + '\x20Proxies:\x20' + _0x553db5), await _0x4d0c12(_0x16a4d5, _0xb2fc1);
        if (_0x16a4d5[_0xb2fc1]['Email'] == '' || _0x16a4d5[_0xb2fc1]['Password'] == '' || _0x16a4d5[_0xb2fc1]['FirstName'] == '' || _0x16a4d5[_0xb2fc1]['LastName'] == '') {
            console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0xb2fc1 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1966b0['useRandomProxy'] = ![])
            var _0x6481fe = _0x38b4b8[_0xb2fc1]['split'](':');
        else
            var _0x322fcd = Math['round'](Math['random']() * (_0x38b4b8['length'] - 0x1)), _0x6481fe = _0x38b4b8[_0x322fcd]['split'](':');
        const _0x417e1c = await _0x4f370d['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x6481fe[0x0] + ':' + _0x6481fe[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x67ac71 = await _0x417e1c['newPage']();
            await _0x67ac71['authenticate']({
                'username': '' + _0x6481fe[0x2],
                'password': '' + _0x6481fe[0x3]
            }), console['log'](_0x10594f() + '\x20[' + _0x5e04ef['name'] + ']\x20Task\x20' + (_0xb2fc1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x67ac71['setRequestInterception'](!![]), _0x67ac71['on']('request', _0x15f4d1 => {
                _0x15f4d1['resourceType']() === 'image' || _0x15f4d1['resourceType']() === 'font' || _0x15f4d1['resourceType']() === 'media' ? _0x15f4d1['abort']() : _0x15f4d1['continue']();
            }), await _0x67ac71['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x67ac71['waitForSelector']('#CustomerEmail'), console['log'](_0x10594f() + '\x20[' + _0x5e04ef['name'] + ']\x20Task\x20' + (_0xb2fc1 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x67ac71['type']('#CustomerEmail', '' + _0x16a4d5[_0xb2fc1]['Email']), await _0x3098db(0x12c), await _0x67ac71['type']('#CustomerPassword', '' + _0x16a4d5[_0xb2fc1]['Password']), await _0x3098db(0x226), await _0x67ac71['$eval']('#customer_login', _0x3a13bb => _0x3a13bb['submit']());
            try {
                await _0x67ac71['waitForSelector']('#orders'), await _0x3098db(0x4b0);
            } catch {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x5e04ef['name'] + ']\x20Task\x20' + (_0xb2fc1 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x67ac71['goto']('' + _0x16a4d5[_0xb2fc1]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x3098db(0xbb8), console['log'](_0x10594f() + '\x20[' + _0x5e04ef['name'] + ']\x20Task\x20' + (_0xb2fc1 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x67ac71['waitForSelector']('#email');
            } catch {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x5e04ef['name'] + ']\x20Task\x20' + (_0xb2fc1 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x67ac71['type']('#email', '' + _0x16a4d5[_0xb2fc1]['Email']), await _0x3098db(0x384), await _0x67ac71['type']('#first_name', '' + _0x16a4d5[_0xb2fc1]['FirstName']), await _0x3098db(0x514), await _0x67ac71['type']('#last_name', '' + _0x16a4d5[_0xb2fc1]['LastName']), await _0x3098db(0x514), await _0x67ac71['type']('#street_address', _0x16a4d5[_0xb2fc1]['Address1'] + '\x20' + _0x16a4d5[_0xb2fc1]['HouseNumber'] + '\x20' + _0x16a4d5[_0xb2fc1]['Address2']), await _0x3098db(0x2bc);
            _0x16a4d5[_0xb2fc1]['Postcode'] == undefined && (_0x16a4d5[_0xb2fc1]['Postcode'] = _0x16a4d5[_0xb2fc1]['Zip']);
            await _0x67ac71['type']('#zip_code', '' + _0x16a4d5[_0xb2fc1]['Postcode']), await _0x3098db(0x320), await _0x67ac71['type']('#city', '' + _0x16a4d5[_0xb2fc1]['City']), await _0x3098db(0x320), await _0x67ac71['type']('#bday', '01/01/1994'), await _0x3098db(0x320), await _0x67ac71['type']('#instagram', '' + _0x16a4d5[_0xb2fc1]['Follower']), await _0x3098db(0x352);
            if (_0x16a4d5[_0xb2fc1]['Size'] == 'RANDOM') {
                const _0x17568a = await _0x67ac71['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x46b7b8 => {
                    return _0x46b7b8['map'](_0x1791ae => _0x1791ae['textContent']);
                });
                var _0x29f016 = Math['round'](Math['random']() * (_0x17568a['length'] - 0x1));
                console['log'](_0x10594f() + '\x20[' + _0x5e04ef['name'] + ']\x20Task\x20' + (_0xb2fc1 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x17568a[_0x29f016]), await _0x67ac71['click']('label[data-eu-size=\x22' + _0x17568a[_0x29f016] + '\x22]');
            } else {
                console['log'](_0x10594f() + '\x20[' + _0x5e04ef['name'] + ']\x20Task\x20' + (_0xb2fc1 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x16a4d5[_0xb2fc1]['Size']);
                try {
                    await _0x67ac71['click']('label[data-eu-size=\x22' + _0x16a4d5[_0xb2fc1]['Size'] + '\x22]');
                } catch {
                    await _0x67ac71['click']('label[data-eu-size=\x22' + _0x16a4d5[_0xb2fc1]['Size'] + '.0\x22]');
                }
            }
            await _0x3098db(0xbb8), await _0x67ac71['$$eval']('.raffle__checkbox-label', _0x182393 => _0x182393['forEach'](_0x2cf896 => _0x2cf896['click']())), await _0x3098db(0x7d0), console['log'](_0x10594f() + '\x20[' + _0x5e04ef['name'] + ']\x20Task\x20' + (_0xb2fc1 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x67ac71['click']('#raffle__form-submit'), await _0x3098db(0x1388);
            try {
                await _0x67ac71['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x1f9156['green'](_0x10594f() + '\x20[' + _0x5e04ef['name'] + ']\x20Task\x20' + (_0xb2fc1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x5edbe8) {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0xb2fc1 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x5edbe8));
            }
        } catch (_0x22bb20) {
            console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0xb2fc1 + 0x1) + '\x20:\x20' + _0x22bb20)), _0x5a8f9a = 'yes';
        } finally {
            _0x417e1c && _0x417e1c['close']();
            if (_0x5a8f9a == 'yes' && _0x2115da != 0x5) {
                console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x5e04ef['name'] + ']\x20Task\x20' + (_0xb2fc1 + 0x1) + '\x20:\x20Retrying')), _0xb2fc1 = _0xb2fc1 - 0x1, _0x2115da = _0x2115da + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x1966b0['delay'] + '\x20ms'), await _0x3098db(_0x1966b0['delay']);
        }
    }
}
async function _0x393526(_0x539b63, _0x2d85e4, _0x2eb15a) {
    var _0x22c4cc = ![], _0x251cbf = ![];
    if (_0x1966b0['captchaKey'] == '' || _0x1966b0['captchaKey'] == undefined)
        return console['log'](_0x1f9156['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x4f370d['use'](_0x467f25()), _0x4f370d['use'](_0x1c49cf({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1966b0['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1017cd = 0x0; _0x1017cd < _0x2d85e4['length']; _0x1017cd++) {
        var _0x5853dc = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x2d85e4[_0x1017cd]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2d85e4[_0x1017cd]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x5a0f1d
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1966b0['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x13fa0b
                }
            ]
        }];
        const _0xf32551 = { 'embeds': _0x5853dc };
        _0x14d892(_0x539b63['name'] + '\x20Task\x20' + (_0x1017cd + 0x1) + '\x20/\x20' + _0x2d85e4['length'] + '\x20||\x20File:\x20' + _0x35d1f5 + '\x20Proxies:\x20' + _0x553db5), await _0x4d0c12(_0x2d85e4, _0x1017cd);
        if (_0x2d85e4[_0x1017cd]['Email'] == '' || _0x2d85e4[_0x1017cd]['Url'] == '' || _0x2d85e4[_0x1017cd]['FirstName'] == '' || _0x2d85e4[_0x1017cd]['LastName'] == '') {
            console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x1017cd + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1966b0['useRandomProxy'] = ![])
            var _0x584465 = _0x2eb15a[_0x1017cd]['split'](':');
        else
            var _0xe0c198 = Math['round'](Math['random']() * (_0x2eb15a['length'] - 0x1)), _0x584465 = _0x2eb15a[_0xe0c198]['split'](':');
        const _0x52948c = await _0x4f370d['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x584465[0x0] + ':' + _0x584465[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x6e7175 = await _0x52948c['newPage']();
            await _0x6e7175['authenticate']({
                'username': '' + _0x584465[0x2],
                'password': '' + _0x584465[0x3]
            }), console['log'](_0x10594f() + '\x20[' + _0x539b63['name'] + ']\x20Task\x20' + (_0x1017cd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x6e7175['setRequestInterception'](!![]), _0x6e7175['on']('request', _0x49d89b => {
                _0x49d89b['resourceType']() === 'image' || _0x49d89b['resourceType']() === 'font' || _0x49d89b['resourceType']() === 'media' ? _0x49d89b['abort']() : _0x49d89b['continue']();
            }), await _0x6e7175['goto']('' + _0x2d85e4[_0x1017cd]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](_0x10594f() + '\x20[' + _0x539b63['name'] + ']\x20Task\x20' + (_0x1017cd + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x6e7175['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x6e7175['type']('#comp_firstname', '' + _0x2d85e4[_0x1017cd]['FirstName']), await _0x6e7175['waitForSelector']('#comp_lastname'), await _0x6e7175['type']('#comp_lastname', '' + _0x2d85e4[_0x1017cd]['LastName']), await _0x6e7175['waitForSelector']('#comp_email'), await _0x6e7175['type']('#comp_email', '' + _0x2d85e4[_0x1017cd]['Email']), await _0x6e7175['waitForSelector']('#comp_paypalemail'), await _0x6e7175['type']('#comp_paypalemail', '' + _0x2d85e4[_0x1017cd]['Email']), await _0x6e7175['waitForSelector']('#comp_mobile_end'), await _0x6e7175['type']('#comp_mobile_end', '' + _0x2d85e4[_0x1017cd]['Phone']), await _0x6e7175['waitForSelector']('#comp_dob'), await _0x6e7175['type']('#comp_dob', '08/09/1992'), console['log'](_0x10594f() + '\x20[' + _0x539b63['name'] + ']\x20Task\x20' + (_0x1017cd + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x2d85e4[_0x1017cd]['Size'] == 'RANDOM') {
                const _0x3cab2e = await _0x6e7175['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3c1f61 => {
                    return _0x3c1f61['map'](_0x46463c => _0x46463c['value']);
                });
                var _0x4fef88 = Math['round'](Math['random']() * (_0x3cab2e['length'] - 0x2));
                await _0x6e7175['select']('#shoesize', _0x3cab2e[_0x4fef88 + 0x1]), await _0x3098db(0x3e8);
            } else {
                const _0x490cd1 = await _0x6e7175['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3f2260 => {
                    return _0x3f2260['map'](_0x2167ed => _0x2167ed['innerText']);
                }), _0x26a1d7 = await _0x6e7175['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4d71d9 => {
                    return _0x4d71d9['map'](_0x4efd3b => _0x4efd3b['value']);
                });
                var _0x1d8e1b = _0x2d85e4[_0x1017cd]['Size'];
                for (var _0x2e2567 = 0x1; _0x2e2567 < _0x26a1d7['length']; _0x2e2567++) {
                    var _0x1caa08 = _0x490cd1[_0x2e2567]['split']('\x20')[0x0];
                    if (_0x1caa08 == _0x1d8e1b) {
                        await _0x6e7175['select']('#shoesize', _0x26a1d7[_0x2e2567]);
                        break;
                    } else {
                        if (_0x2e2567 + 0x1 == _0x26a1d7['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x6e7175['waitForSelector']('#comp_address1'), await _0x6e7175['type']('#comp_address1', _0x2d85e4[_0x1017cd]['Address1'] + '\x20' + _0x2d85e4[_0x1017cd]['HouseNumber']), await _0x6e7175['waitForSelector']('#comp_address2'), await _0x6e7175['type']('#comp_address2', '' + _0x2d85e4[_0x1017cd]['Address2']), await _0x6e7175['waitForSelector']('#comp_address2'), await _0x6e7175['type']('#comp_address3', '' + _0x2d85e4[_0x1017cd]['City']), await _0x6e7175['waitForSelector']('#comp_postcode'), await _0x6e7175['type']('#comp_postcode', '' + _0x2d85e4[_0x1017cd]['Zip']), console['log'](_0x10594f() + '\x20[' + _0x539b63['name'] + ']\x20Task\x20' + (_0x1017cd + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x3098db(0x4b0), await _0x6e7175['click']('label#emailhold'), await _0x3098db(0x5dc), await _0x6e7175['click']('#preauth_tandc_email\x20>\x20label'), await _0x3098db(0x5dc), await _0x6e7175['click']('#submit'), await _0x6e7175['waitForSelector']('#paymentWrap'), console['log'](_0x10594f() + '\x20[' + _0x539b63['name'] + ']\x20Task\x20' + (_0x1017cd + 0x1) + '\x20:\x20' + _0x1f9156['blue']('Awaiting\x20Paypal\x20Payment')), _0x52948c['on']('targetcreated', async _0x79d1ff => {
                if (_0x79d1ff['type']() === 'page') {
                    const _0x1db195 = await _0x79d1ff['page']();
                    async function _0x21cc28() {
                        try {
                            await _0x6e7175['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x251cbf = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x308c78() {
                        try {
                            await _0x6e7175['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x22c4cc = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x308c78(), _0x21cc28(), await _0x3098db(0x493e0);
                }
            });
            async function _0x3f2735() {
                for (let _0x51c342 = 0x0; _0x51c342 < 0x12c; _0x51c342++) {
                    if (_0x22c4cc == !![]) {
                        console['log'](_0x1f9156['green'](_0x10594f() + '\x20[' + _0x539b63['name'] + ']\x20Task\x20' + (_0x1017cd + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x3f2896(_0x123656, _0xf32551);
                        return;
                    } else {
                        if (_0x251cbf)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x3098db(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x3098db(0xbb8), await _0x6e7175['click']('.zoid-outlet'), await _0x3098db(0x7d0), await _0x3f2735();
        } catch (_0x1c408d) {
            console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0x539b63['name'] + ']\x20Task\x20' + (_0x1017cd + 0x1) + '\x20:\x20' + _0x1c408d)), _0x5853dc[0x0]['title'] = 'Failed\x20entry', _0x5853dc[0x0]['description'] = _0x539b63['name'] + ':\x20' + _0x1c408d, await _0x3f2896(_0x38b098, _0xf32551);
        } finally {
            _0x52948c && _0x52948c['close'](), console['log']('Waiting\x20for\x20' + _0x1966b0['delay'] + '\x20ms'), await _0x3098db(_0x1966b0['delay']);
        }
    }
}
async function _0x238b12(_0x170b0d, _0x5c1d4d, _0x32847d, _0xdbf4e6, _0x192434) {
    var _0x24516a = {}, _0x4c6e15 = [], _0x538adb = {}, _0x30cfdb = [
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
    !_0xdbf4e6 && (_0xdbf4e6 = {});
    if (_0x5c1d4d != 'ver') {
        _0x14d892(_0x32847d['name'] + '\x20Task\x20' + (_0x170b0d + 0x1) + '\x20/\x20' + _0xdbf4e6['length'] + '\x20||\x20File:\x20' + _0x35d1f5 + '\x20Proxies:\x20' + _0x553db5), await _0x4d0c12(_0xdbf4e6, _0x170b0d), _0x4c6e15 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5a0f1d
                },
                {
                    'name': 'Size',
                    'value': '' + _0xdbf4e6[_0x170b0d]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1966b0['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x13fa0b
                }
            ]
        }], _0x538adb = { 'embeds': _0x4c6e15 }, _0x24516a = _0x32847d['data'];
        _0x5c1d4d == 'exp' ? _0x24516a['data']['attributes']['email'] = '' + _0xdbf4e6[_0x170b0d]['FirstName'] + _0xdbf4e6[_0x170b0d]['LastName'] + _0x1966b0['catchall'] : _0x24516a['data']['attributes']['email'] = '' + _0xdbf4e6[_0x170b0d]['Email'];
        if (_0xdbf4e6[_0x170b0d]['Size'] == 'RANDOM') {
        }
        _0x24516a['data']['attributes']['properties']['$first_name'] = '' + _0xdbf4e6[_0x170b0d]['FirstName'], _0x24516a['data']['attributes']['properties']['$last_name'] = '' + _0xdbf4e6[_0x170b0d]['LastName'], _0x24516a['data']['attributes']['properties']['$address1'] = _0xdbf4e6[_0x170b0d]['Address1'] + '\x20' + _0xdbf4e6[_0x170b0d]['Address2'] + '\x20' + _0xdbf4e6[_0x170b0d]['HouseNumber'], _0x24516a['data']['attributes']['properties']['$zip'] = '' + _0xdbf4e6[_0x170b0d]['Zip'], _0x24516a['data']['attributes']['properties']['$city'] = '' + _0xdbf4e6[_0x170b0d]['City'], _0x24516a['data']['attributes']['properties']['$country'] = '' + _0xdbf4e6[_0x170b0d]['Country'], _0x24516a['data']['attributes']['properties']['Size'] = '' + _0xdbf4e6[_0x170b0d]['Size'], _0x24516a['data']['attributes']['properties']['$phone_number'] = '' + _0xdbf4e6[_0x170b0d]['Phone'], _0x24516a['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0xdbf4e6[_0x170b0d]['Follower'];
    }
    if (_0x1966b0['useRandomProxy'] = ![])
        var _0x110136 = _0x192434[_0x170b0d]['split'](':');
    else
        var _0x8a2823 = Math['round'](Math['random']() * (_0x192434['length'] - 0x1)), _0x110136 = _0x192434[_0x8a2823]['split'](':');
    var _0x1d0290 = {
        'jar': _0x3a9a3b,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x32847d['url'],
        'headers': _0x32847d['headers'],
        'body': JSON['stringify'](_0x24516a),
        'proxy': 'http://' + _0x110136[0x2] + ':' + _0x110136[0x3] + '@' + _0x110136[0x0] + ':' + _0x110136[0x1]
    };
    return _0x5c1d4d != 'ver' && (_0x1d0290['url'] = _0x32847d['url'], _0x1d0290['headers'] = _0x32847d['headers']), _0x5c1d4d == 'ver' && (_0x1d0290['method'] = 'GET'), new Promise(function (_0x205ecb, _0x589bca) {
        callback = async (_0x203fc8, _0x1eb963, _0x1e3e88) => {
            !_0x203fc8 && _0x1eb963['statusCode'] == 0xca || !_0x203fc8 && _0x1eb963['statusCode'] == 0xc8 ? (_0x5c1d4d != 'ver' && await _0x3f2896(_0x123656, _0x538adb), _0x205ecb(console['log'](_0x1f9156['green'](_0x10594f() + '\x20[' + _0x32847d['name'] + ']\x20Task\x20' + (_0x170b0d + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x5c1d4d != 'ver' && (_0x4c6e15[0x0]['title'] = 'Failed\x20entry', _0x4c6e15[0x0]['description'] = '' + _0x203fc8, await _0x3f2896(_0x38b098, _0x538adb)), _0x589bca(console['log'](_0x10594f() + '\x20[' + _0x32847d['name'] + ']\x20Task\x20' + (_0x170b0d + 0x1) + ':\x20' + _0x203fc8)));
        };
        try {
            _0x5c1d4d != 'ver' && console['log'](_0x10594f() + '\x20[' + _0x32847d['name'] + ']\x20Task\x20' + (_0x170b0d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x24516a['data']['attributes']['email']), _0x1d63bc(_0x1d0290, callback);
        } catch (_0x47f38a) {
            console['log'](_0x10594f() + '\x20Task\x20' + (_0x170b0d + 0x1) + ':\x20' + _0x47f38a);
        }
    });
}
;
async function _0x55edd3() {
    await _0x12232c(), console['clear']();
    if (_0x13fa0b != 'devkey') {
        let _0x55e01d = await _0x4ddb99['autoUpdate']();
        if (_0x55e01d === 'yes')
            return _0x8c8a8f('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x320b25 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x3098db(0x2710);
        ;
    }
    await _0x210685(_0x320b25);
    if (_0x2dce64 === ![])
        return console['log']('Closing\x20Browser'), await _0x3098db(0xbb8);
    else
        try {
            var _0x591e3c = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x5a0f1d
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x13fa0b
                    }
                ]
            }];
            const _0x406d9e = { 'embeds': _0x591e3c };
            await _0x3f2896(_0x4205d8, _0x406d9e);
            async function _0x898386() {
                _0x14d892('JRaffles\x20' + _0x13fa0b), console['clear'](), console['log']('Welcome\x20to\x20' + _0x1f9156['cyan']('JRaffles();') + '\x20' + _0x13fa0b), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x4ff038 = 0x0; _0x4ff038 < _0x30722a['length']; _0x4ff038++) {
                    if (_0x30722a[_0x4ff038]['name'] === 'Reload\x20Settings' || _0x30722a[_0x4ff038]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x4ff038 + ')\x20[' + _0x30722a[_0x4ff038]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x30722a['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x30722a['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x3be755();
                if (_0x30722a[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x42a7fe(_0x30722a[taskModule]['modules']);
                    var _0xf3ca05 = _0x30722a[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x3cfbd3 = await _0xf58dca();
                    await _0x5bdc1c(_0x3cfbd3), await _0x8bf400();
                    var _0x38a3c2 = await _0x4fa3de();
                    return await afewFunction(_0x4d4881[_0x23f223], 'nor', _0xf3ca05, _0x38a3c2, _0x3cfbd3), _0x898386();
                } else {
                    if (_0x30722a[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x42a7fe(_0x30722a[taskModule]['modules']);
                        var _0xf3ca05 = _0x30722a[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x3cfbd3 = await _0xf58dca(), _0x4ccb34 = await _0x4fa3de();
                            console['log']('Starting\x20' + _0x4ccb34['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x4fdddf = 0x0; _0x4fdddf < _0x4ccb34['length']; _0x4fdddf++) {
                                console['log'](_0x10594f() + '\x20[' + _0xf3ca05['name'] + ']\x20Task\x20' + (_0x4fdddf + 0x1) + ':\x20Getting\x20Session'), await _0x3057cc(_0x4fdddf, 'nor', _0xf3ca05, _0x4ccb34, _0x3cfbd3), console['log'](_0x10594f() + '\x20[' + _0xf3ca05['name'] + ']\x20Sleeping\x20for\x20' + _0x1966b0['MahaDelay'] + '\x20ms'), await _0x3098db(_0x1966b0['MahaDelay']);
                            }
                            ;
                            return _0x898386();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x3cfbd3 = await _0xf58dca();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x4a4360(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x4fdddf = 0x0; _0x4fdddf < links['length']; _0x4fdddf++) {
                                    _0xf3ca05['url'] = links[_0x4fdddf], console['log'](_0x10594f() + '\x20[' + _0xf3ca05['name'] + ']\x20Task\x20' + (_0x4fdddf + 0x1) + ':\x20Getting\x20Session'), await _0x3057cc(_0x4fdddf, 'ver', _0xf3ca05, _0x4ccb34, _0x3cfbd3), console['log'](_0x10594f() + '\x20[' + _0xf3ca05['name'] + ']\x20Sleeping\x20for\x20' + _0x1966b0['verificationDelay'] + '\x20ms'), await _0x3098db(_0x1966b0['verificationDelay']);
                                }
                                ;
                                return _0x898386();
                            }
                        }
                    } else {
                        if (_0x30722a[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x3cfbd3 = await _0xf58dca(), _0x261358 = await _0x4fa3de();
                            return await _0x3b003f(_0x261358, _0x3cfbd3), await _0x3098db(0x1388), _0x898386();
                        } else {
                            if (_0x30722a[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x42a7fe(_0x30722a[taskModule]['modules']);
                                var _0xf3ca05 = _0x30722a[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x3cfbd3 = await _0xf58dca(), _0x47e89f = await _0x4fa3de();
                                    console['log']('Starting\x20' + _0x1f9156['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x4fdddf = 0x0; _0x4fdddf < _0x47e89f['length']; _0x4fdddf++) {
                                        console['log'](_0x10594f() + '\x20[' + _0xf3ca05['name'] + ']\x20Task\x20' + (_0x4fdddf + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x238b12(_0x4fdddf, 'nor', _0xf3ca05, _0x47e89f, _0x3cfbd3);
                                        } catch (_0x1f19e6) {
                                            console['log'](_0x1f9156['red'](_0x10594f() + '\x20[' + _0xf3ca05['name'] + ']\x20Task\x20' + (_0x4fdddf + 0x1) + ':\x20Task\x20failed\x20' + _0x1f19e6));
                                        }
                                        console['log'](_0x10594f() + '\x20[' + _0xf3ca05['name'] + ']\x20Sleeping\x20for\x20' + _0x1966b0['delay'] + '\x20ms'), await _0x3098db(_0x1966b0['delay']);
                                    }
                                    return _0x898386();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x3cfbd3 = await _0xf58dca();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x4a4360(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x4fdddf = 0x0; _0x4fdddf < links['length']; _0x4fdddf++) {
                                            try {
                                                _0xf3ca05['url'] = links[_0x4fdddf], console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Task\x20' + (_0x4fdddf + 0x1) + ':\x20Getting\x20Session'), await _0x238b12(_0x4fdddf, 'ver', _0xf3ca05, null, _0x3cfbd3), console['log'](_0x10594f() + '\x20[' + _0x30722a[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x1966b0['verificationDelay'] + '\x20ms'), await _0x3098db(_0x1966b0['verificationDelay']);
                                            } catch (_0x31adaf) {
                                                console['log'](_0x31adaf), await _0x3098db(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x898386();
                                    }
                                }
                                ;
                            } else {
                                if (_0x30722a[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x42a7fe(_0x30722a[taskModule]['modules']);
                                    var _0xf3ca05 = _0x30722a[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x155d2c('https://bouncewear.com/nl/account/register', _0xf3ca05);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x30722a[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x42a7fe(_0x30722a[taskModule]['modules']);
                                        var _0xf3ca05 = _0x30722a[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x3cfbd3 = await _0xf58dca(), _0xf48b50 = await _0x4fa3de();
                                            return await _0x5a2899('https://patta.nl/account/register', _0xf3ca05, _0xf48b50, _0x3cfbd3), _0x898386();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x3cfbd3 = await _0xf58dca(), _0xf48b50 = await _0x4fa3de();
                                                return await _0x5d3772('', _0xf3ca05, _0xf48b50, _0x3cfbd3), _0x898386();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x30722a[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await _0x42a7fe(_0x30722a[taskModule]['modules']);
                                            var _0xf3ca05 = _0x30722a[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x3cfbd3 = await _0xf58dca(), _0x2c62f1 = await _0x4fa3de();
                                                return await _0x54af47('https://www.kickz.com/nl/login/', _0xf3ca05, _0x2c62f1, _0x3cfbd3), _0x898386();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x3cfbd3 = await _0xf58dca(), _0x2c62f1 = await _0x4fa3de();
                                                    return await _0x315f69(_0xf3ca05, _0x2c62f1, _0x3cfbd3), _0x898386();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x30722a[taskModule]['name'] == 'JD') {
                                                taskFunction = await _0x42a7fe(_0x30722a[taskModule]['modules']);
                                                var _0xf3ca05 = _0x30722a[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x3cfbd3 = await _0xf58dca(), _0x7c1cdb = await _0x4fa3de();
                                                    return await _0x393526(_0xf3ca05, _0x7c1cdb, _0x3cfbd3), _0x898386();
                                                }
                                            } else {
                                                if (_0x30722a[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x32bb23 = 0x0;
                                                    for (const _0x4de713 in _0x1966b0) {
                                                        console['log']('(' + _0x32bb23 + ')\x20' + _0x4de713 + '\x20:\x20' + _0x1966b0[_0x4de713]), _0x32bb23++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x32bb23 + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x4a05d6 = await _0x3ec96c();
                                                    if (_0x4a05d6 == _0x32bb23)
                                                        return _0x898386();
                                                    console['clear'];
                                                    var _0x45f59e = 0x0;
                                                    for (var _0x2abcee in _0x1966b0) {
                                                        if (_0x4a05d6 == _0x45f59e) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x2abcee + '\x20:'), _0x1966b0[_0x2abcee] = await _0x2ce8cd(), _0x566788['writeFileSync']('../settings.json', JSON['stringify'](_0x1966b0));
                                                            break;
                                                        } else
                                                            _0x45f59e++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await _0x3098db(0xbb8), _0x898386();
                                                } else {
                                                    if (_0x30722a[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await _0x12232c(), _0x898386();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            _0x30722a[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x2b0a7f = await _0x440434();
                                                            _0x2b0a7f == 'ModuleVoorDeBoys' ? (await _0x5bdc1c(), await _0x8bf400(), await afewFunction(_0x4d4881[_0x23f223], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x3098db(0xbb8));
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
            await _0x898386();
        } catch (_0x1bf1ae) {
            return console['log'](_0x1bf1ae), await _0x3098db(0x3a98);
        }
}
;
_0x14d892('JRaffles\x20' + _0x13fa0b), _0x12232c();
try {
    _0x55edd3();
} catch (_0x36a2ca) {
    var _0xd9a122 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x5a0f1d
            },
            {
                'name': 'Version',
                'value': '' + _0x13fa0b
            },
            {
                'name': 'Error',
                'value': '' + _0x36a2ca
            }
        ]
    }];
    const _0xc11a = { 'embeds': _0xd9a122 };
    _0x3f2896(_0x38b098, _0xc11a);
}