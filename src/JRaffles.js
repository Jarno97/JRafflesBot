var _0x5785e5 = require('exe');
const { execFile: _0x25416a } = require('child_process'), _0x52fb25 = require('puppeteer-extra'), _0x5c313d = require('puppeteer-extra-plugin-recaptcha'), _0x18f355 = require('puppeteer-extra-plugin-stealth'), _0x2360bc = require('chalk'), _0x5d391b = require('node-bash-title'), _0x20810f = require('fs'), _0x1798d9 = require('axios'), _0x3b6bed = require('papaparse');
var _0x52e8ce = require('random-name');
const _0x246561 = require('request');
var _0x11b632 = require('prompt');
const _0x3fa45c = _0x246561['jar']();
var _0x4d870d = {};
const _0x2e1982 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x8d40b = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x3733e9 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x247721 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE';
var _0x30b497 = 'https://discord.com/api/webhooks/', _0x33cb5d = '' + _0x30b497 + _0x3733e9, _0x25796f = '' + _0x30b497 + _0x247721, _0x3feda7 = '' + _0x30b497 + _0x2e1982, _0x2da8bd = '' + _0x30b497 + _0x8d40b;
const _0x52c508 = JSON['parse'](_0x20810f['readFileSync']('../package.json', 'utf-8')), _0x231fbf = _0x52c508['version'];
var _0x1aba1f, _0x41e381, _0x1570e9, _0x5708a4, _0x2176db, _0x5e03a1, _0x51f778;
const _0x4b5b10 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x16f99d = ![];
const _0x4ffdfd = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x12d9ef = '0123456789';
var _0x448468 = _0x4ffdfd['split']('');
const _0x2fb050 = require('auto-git-update'), { PageEmittedEvents: _0x1ffb8b } = require('puppeteer'), { getRandomValues: _0xe631bb } = require('crypto'), { resolve: _0x460d5b } = require('path'), _0x1fd7fe = {
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
}, _0x4ba551 = new _0x2fb050(_0x1fd7fe);
async function _0x193349() {
    _0x2176db = _0x20810f['readdirSync']('../proxies'), _0x5708a4 = _0x20810f['readdirSync']('../tasks'), _0x4d870d = JSON['parse'](_0x20810f['readFileSync']('../settings.json', 'utf-8')), !_0x4d870d['delay'] && (_0x4d870d['delay'] = 0x2710, _0x20810f['writeFileSync']('../settings.json', JSON['stringify'](_0x4d870d))), !_0x4d870d['captchaKey'] && (_0x4d870d['captchaKey'] = '', _0x20810f['writeFileSync']('../settings.json', JSON['stringify'](_0x4d870d))), !_0x4d870d['useRandomProxy'] && (_0x4d870d['useRandomProxy'] = !![], _0x20810f['writeFileSync']('../settings.json', JSON['stringify'](_0x4d870d))), !_0x4d870d['webhook'] && (_0x4d870d['webhook'] = '', _0x20810f['writeFileSync']('../settings.json', JSON['stringify'](_0x4d870d))), _0x30b497 = _0x4d870d['webhook'], _0x5e03a1 = _0x4d870d['licenseKey'];
}
let _0x224487, _0x5769cf = [], _0x306c51;
const _0x35cc09 = _0x2e4aa7 => new Promise(_0x2cb9f1 => setTimeout(_0x2cb9f1, _0x2e4aa7));
function _0x5285b8(_0x4a7c36, _0x3b85a7) {
    return Math['floor'](Math['random']() * (_0x3b85a7 - _0x4a7c36 + 0x1) + _0x4a7c36);
}
async function _0x1c9e16(_0x4235ae) {
    return _0x1798d9['get']('https://api.hyper.co/v4/licenses/' + _0x4235ae, { 'headers': { 'Authorization': 'Bearer\x20' + _0x4b5b10 } })['then'](_0x55f714 => _0x55f714['data'])['catch'](() => null);
}
;
async function _0x1ce060(_0x1cb652) {
    console['clear'](), console['log']('Checking\x20license\x20' + _0x5e03a1 + '...'), await _0x35cc09(0x5dc);
    const _0x31a797 = await _0x1c9e16(_0x1cb652);
    _0x51f778 = JSON['stringify'](_0x31a797['user']['username'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x31a797)
        return console['log']('License\x20not\x20found');
    if (!_0x31a797['user'])
        return console['log']('License\x20not\x20bound');
    return _0x31a797['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x16f99d = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x16f99d = ![]);
}
async function _0x174000() {
    var _0x43bd1b = await _0x11b632['get']('Module');
    return console['clear'](), _0x43bd1b['Module'];
}
;
async function _0x2eab93() {
    var _0xa302be = await _0x11b632['get']('Setting');
    return console['clear'](), _0xa302be['Setting'];
}
async function _0x25ba85() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x115a30 = 0x0; _0x115a30 < _0x5708a4['length']; _0x115a30++) {
        console['log']('\x20(' + _0x115a30 + ')\x20' + _0x5708a4[_0x115a30]);
    }
    console['log']('');
    var _0x456615 = await _0x11b632['get']('Task'), _0x181984 = _0x20810f['readFileSync']('../tasks/' + _0x5708a4[_0x456615['Task']], 'utf-8');
    return _0x1570e9 = _0x3b6bed['parse'](_0x181984, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x2360bc['blue'](_0x5708a4[_0x456615['Task']])), _0x1aba1f = _0x5708a4[_0x456615['Task']], _0x1570e9;
}
async function _0x1a9c65() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x400257 = 0x0; _0x400257 < _0x2176db['length']; _0x400257++) {
        console['log']('\x20(' + _0x400257 + ')\x20' + _0x2176db[_0x400257]);
    }
    console['log']('');
    var _0x4f81de = await _0x11b632['get']('Proxies'), _0x3f12fe = _0x20810f['readFileSync']('../proxies/' + _0x2176db[_0x4f81de['Proxies']], 'utf-8')['split']('\x0a');
    let _0xa5a683 = _0x3f12fe['map']((_0x5b28e7, _0x30c138) => {
        sanatizeProxy = _0x5b28e7['replace']('\x0d', '');
        if (_0x3f12fe[_0x30c138 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x41e381 = _0x2176db[_0x4f81de['Proxies']], console['clear'](), _0xa5a683;
}
async function _0x281df7() {
    var _0x303d47 = await _0x11b632['get']('Value');
    return console['clear'](), _0x303d47['Value'];
}
async function _0x188e75(_0x265f1d) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x1f0fc4 = 0x0; _0x1f0fc4 < _0x265f1d['length']; _0x1f0fc4++) {
        console['log']('\x20(' + _0x1f0fc4 + ')\x20[' + _0x265f1d[_0x1f0fc4]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x1c78bd = await _0x11b632['get']('Module');
    return _0x1c78bd['Module'];
}
async function _0x4202b4() {
    var _0x3dab96 = await _0x11b632['get']('Password');
    return console['clear'](), _0x3dab96['Password'];
}
;
async function _0x2437f9() {
    var _0x57fa57 = await _0x11b632['get']('Links');
    return _0x57fa57['Links'];
}
;
async function _0x5395a8() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x2dd07a = 0x0; _0x2dd07a < _0x5769cf['length']; _0x2dd07a++) {
        console['log']('\x20(' + _0x2dd07a + ')\x20' + _0x5769cf[_0x2dd07a]);
    }
    ;
    console['log']();
    let _0x1b23f2 = await _0x11b632['get']('Product');
    console['clear'](), _0x306c51 = _0x1b23f2['Product'];
    return;
}
;
function _0x337a95() {
    var _0x5db32f = new Date(Date['now']())['toLocaleTimeString']();
    return _0x5db32f;
}
;
const _0xa60771 = [
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
async function _0x5c47f5(_0x53aad4, _0x33ceeb) {
    let _0x560f15 = { 'headers': { 'content-type': 'application/json' } };
    await _0x1798d9['post'](_0x53aad4, _0x33ceeb, _0x560f15);
}
;
async function _0x5860f3(_0x2d122e, _0x22c35c) {
    var _0xefb357 = _0x2d122e[_0x22c35c]['Address1']['split'](''), _0x2126cd = _0x2d122e[_0x22c35c]['Address2']['split'](''), _0x2b3dcb = _0x2d122e[_0x22c35c]['Email']['split']('@');
    for (var _0x221045 = 0x0; _0x221045 < _0xefb357['length']; _0x221045++) {
        if (_0xefb357[_0x221045] == 'X') {
            var _0xa21644 = Math['round'](Math['random']() * (_0x4ffdfd['length'] - 0x1));
            _0xefb357[_0x221045] = _0x448468[_0xa21644];
        }
    }
    ;
    for (var _0x221045 = 0x0; _0x221045 < _0x2126cd['length']; _0x221045++) {
        if (_0x2126cd[_0x221045] == 'X') {
            var _0xa21644 = Math['round'](Math['random']() * (_0x4ffdfd['length'] - 0x1));
            _0x2126cd[_0x221045] = _0x448468[_0xa21644];
        }
    }
    ;
    _0x2d122e[_0x22c35c]['FirstName'] == 'RANDOM' && (_0x2d122e[_0x22c35c]['FirstName'] = _0x52e8ce['first']());
    _0x2d122e[_0x22c35c]['LastName'] == 'RANDOM' && (_0x2d122e[_0x22c35c]['LastName'] = _0x52e8ce['last']());
    _0x2b3dcb[0x0] == 'RANDOM' ? _0x2b3dcb[0x0] = '' + _0x52e8ce['first']() + _0x52e8ce['last']() + '@' : _0x2b3dcb[0x0] = _0x2b3dcb[0x0] + '@';
    _0x2d122e[_0x22c35c]['Phone'] == 'RANDOM' && (_0x2d122e[_0x22c35c]['Phone'] = _0x5285b8(0x3b9aca00, 0x2540be3ff));
    if (_0x2d122e[_0x22c35c]['Follower'] == 'RANDOM') {
        var _0x288095 = _0x5285b8(0x1, 0x270f);
        _0x2d122e[_0x22c35c]['Follower'] = '' + _0x52e8ce['first']() + _0x52e8ce['last']() + _0x288095;
    }
    _0x2d122e[_0x22c35c]['Email'] = _0x2b3dcb['join'](''), _0x2d122e[_0x22c35c]['Address1'] = _0xefb357['join'](''), _0x2d122e[_0x22c35c]['Address2'] = _0x2126cd['join']('');
    return;
}
;
function _0x3840af() {
    let _0x38ec66 = proxyFile['split']('\x0a'), _0x5db5e2 = _0x38ec66['map']((_0x3b192d, _0x4318ea) => {
        sanatizeProxy = _0x3b192d['replace']('\x0d', '');
        if (_0x38ec66[_0x4318ea + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x5db5e2;
}
;
async function _0x1b7620(_0x2bdfe5) {
    var _0x14959c = _0x2bdfe5[0x1]['split'](':');
    const _0x2586c2 = await _0x52fb25['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x14959c[0x0] + ':' + _0x14959c[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x2b9650 = await _0x2586c2['newPage']();
        await _0x2b9650['authenticate']({
            'username': '' + _0x14959c[0x2],
            'password': '' + _0x14959c[0x3]
        }), console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x2b9650['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2b9650['setRequestInterception'](!![]), _0x2b9650['on']('request', _0x36ea9c => {
            _0x36ea9c['resourceType']() === 'image' || _0x36ea9c['resourceType']() === 'font' || _0x36ea9c['resourceType']() === 'media' ? _0x36ea9c['abort']() : _0x36ea9c['continue']();
        }), await _0x2b9650['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x2b9650['waitForTimeout'](0xbb8), await _0x2b9650['waitForSelector']('.product-card');
        const _0x386332 = await _0x2b9650['$$eval']('a.product-card', _0x56efaf => {
            return _0x56efaf['map'](_0x334231 => _0x334231['href']);
        });
        return _0x5769cf = _0x386332;
    } catch (_0x4c3ba4) {
        console['log']('\x20' + _0x4c3ba4);
    } finally {
        _0x2586c2['close'](), console['clear']();
    }
}
;
async function _0x2b5fd9(_0x3c15b7, _0x55f894, _0x5bc78c, _0x1712a1, _0x41cf68) {
    await _0x5860f3(_0x1712a1, _0x3c15b7);
    var _0x739072 = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x51f778
            },
            {
                'name': 'Size',
                'value': '' + _0x1712a1[_0x3c15b7]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x4d870d['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x231fbf
            }
        ]
    }];
    const _0x1199bc = { 'embeds': _0x739072 };
    if (_0x4d870d['useRandomProxy'] = ![])
        var _0x25d804 = _0x41cf68[_0x3c15b7]['split'](':');
    else
        var _0x1fe336 = Math['round'](Math['random']() * (_0x41cf68['length'] - 0x1)), _0x25d804 = _0x41cf68[_0x1fe336]['split'](':');
    var _0x393839 = _0x5bc78c['data'];
    _0x55f894 == 'exp' ? _0x393839['data']['attributes']['email'] = '' + _0x1712a1[_0x3c15b7]['FirstName'] + _0x1712a1[_0x3c15b7]['LastName'] + _0x4d870d['catchall'] : _0x393839['data']['attributes']['email'] = '' + _0x1712a1[_0x3c15b7]['Email'];
    _0x393839['data']['attributes']['properties']['$first_name'] = '' + _0x1712a1[_0x3c15b7]['FirstName'], _0x393839['data']['attributes']['properties']['$last_name'] = '' + _0x1712a1[_0x3c15b7]['LastName'], _0x393839['data']['attributes']['properties']['$address1'] = _0x1712a1[_0x3c15b7]['Address1'] + '\x20' + _0x1712a1[_0x3c15b7]['Address2'], _0x393839['data']['attributes']['properties']['$zip'] = '' + _0x1712a1[_0x3c15b7]['Zip'], _0x393839['data']['attributes']['properties']['$city'] = '' + _0x1712a1[_0x3c15b7]['City'], _0x393839['data']['attributes']['properties']['$country'] = '' + _0x1712a1[_0x3c15b7]['Country'], _0x393839['data']['attributes']['properties']['Size'] = '' + _0x1712a1[_0x3c15b7]['Size'], _0x393839['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x1712a1[_0x3c15b7]['Follower'];
    var _0x55b2c8 = {
        'jar': _0x3fa45c,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x5bc78c['url'],
        'headers': _0x5bc78c['headers'],
        'body': JSON['stringify'](_0x393839),
        'proxy': 'http://' + _0x25d804[0x2] + ':' + _0x25d804[0x3] + '@' + _0x25d804[0x0] + ':' + _0x25d804[0x1]
    };
    return _0x55f894 === 'ver' && (_0x55b2c8['method'] = 'GET'), new Promise(function (_0x1472ac, _0x4f8af5) {
        callback = async (_0x2858c1, _0x376584, _0x4e2fb5) => {
            !_0x2858c1 && _0x376584['statusCode'] == 0xca || !_0x2858c1 && _0x376584['statusCode'] == 0xc8 ? _0x1472ac(console['log'](_0x2360bc['green'](_0x337a95() + '\x20[' + _0x5bc78c['name'] + ']\x20Task\x20' + (_0x3c15b7 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x739072[0x0]['title'] = 'Failed\x20entry', _0x739072[0x0]['description'] = '' + _0x2858c1, await _0x5c47f5(_0x2da8bd, _0x1199bc), _0x4f8af5(console['log'](_0x337a95() + '\x20[' + _0x5bc78c['name'] + ']\x20Task\x20' + (_0x3c15b7 + 0x1) + ':\x20' + _0x2858c1)));
        };
        try {
            _0x55f894 === 'ver' ? console['log'](_0x337a95() + '\x20[' + _0x5bc78c['name'] + ']\x20Task\x20' + (_0x3c15b7 + 0x1) + ':\x20Verifying.') : console['log'](_0x337a95() + '\x20[' + _0x5bc78c['name'] + ']\x20Task\x20' + (_0x3c15b7 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x393839['data']['attributes']['email']), _0x246561(_0x55b2c8, callback);
        } catch (_0x3409cf) {
            console['log'](_0x337a95() + '\x20Task\x20' + (_0x3c15b7 + 0x1) + ':\x20' + _0x3409cf);
        }
    });
}
;
async function _0x4326ad(_0x221f07, _0x329170) {
    _0x52fb25['use'](_0x18f355()), _0x52fb25['use'](_0x5c313d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4d870d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4a1158 = 0x0; _0x4a1158 < _0x221f07['length']; _0x4a1158++) {
        var _0x39417e = '', _0xe5b9cd = 0x0, _0x58a456 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x51f778
                },
                {
                    'name': 'Product',
                    'value': '' + _0x221f07[_0x4a1158]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x221f07[_0x4a1158]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4d870d['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x231fbf
                }
            ]
        }];
        const _0x1f393b = { 'embeds': _0x58a456 };
        await _0x5860f3(_0x221f07, _0x4a1158);
        if (_0x221f07[_0x4a1158]['Email'] == '' || _0x221f07[_0x4a1158]['FirstName'] == '' || _0x221f07[_0x4a1158]['LastName'] == '' || _0x221f07[_0x4a1158]['Country'] == '' || _0x221f07[_0x4a1158]['Size'] == '' || _0x221f07[_0x4a1158]['Address1'] == '' || _0x221f07[_0x4a1158]['Zip'] == '') {
            console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x221f07[_0x4a1158]['Email'] == '' || _0x221f07[_0x4a1158]['FirstName'] == '' || _0x221f07[_0x4a1158]['LastName'] == '' || _0x221f07[_0x4a1158]['Country'] == '' || _0x221f07[_0x4a1158]['Size'] == '' || _0x221f07[_0x4a1158]['Address1'] == '' || _0x221f07[_0x4a1158]['Zip'] == '' || _0x221f07[_0x4a1158]['Phone'] == '') {
            console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x2b0917 = '' + _0x221f07[_0x4a1158]['Url'];
        if (_0x4d870d['useRandomProxy'] = ![])
            var _0x64116d = _0x329170[_0x4a1158]['split'](':');
        else
            var _0x44b333 = Math['round'](Math['random']() * (_0x329170['length'] - 0x1)), _0x64116d = _0x329170[_0x44b333]['split'](':');
        const _0x3593d1 = await _0x52fb25['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x64116d[0x0] + ':' + _0x64116d[0x1]]
        });
        try {
            const _0x4cc1f5 = await _0x3593d1['newPage']();
            await _0x4cc1f5['authenticate']({
                'username': '' + _0x64116d[0x2],
                'password': '' + _0x64116d[0x3]
            }), console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4cc1f5['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4cc1f5['setRequestInterception'](!![]), _0x4cc1f5['on']('request', _0x5d01de => {
                _0x5d01de['resourceType']() === 'image' || _0x5d01de['resourceType']() === 'font' || _0x5d01de['resourceType']() === 'media' ? _0x5d01de['abort']() : _0x5d01de['continue']();
            }), await _0x4cc1f5['goto'](_0x2b0917), await _0x35cc09(0xbb8), await _0x4cc1f5['waitForSelector']('.control__JhutY'), await _0x4cc1f5['click']('.control__JhutY'), await _0x35cc09(0x1f4);
            if (_0x221f07[_0x4a1158]['Size'] != 'RANDOM')
                try {
                    const _0x5bfede = await _0x4cc1f5['$x']('//div[contains(text(),\x20\x27' + _0x221f07[_0x4a1158]['Size'] + '\x27)]');
                    await _0x5bfede[0x0]['click']();
                } catch {
                    console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x370a63 = await _0x4cc1f5['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x407047 = Math['round'](Math['random']() * (_0x370a63['length'] - 0x1));
                await _0x370a63[_0x407047]['click']();
            }
            await _0x35cc09(0x4b0);
            const _0x567555 = await _0x4cc1f5['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x567555[0x0]['click'](), await _0x4cc1f5['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x4cc1f5['type']('input[name=\x22email\x22]', '' + _0x221f07[_0x4a1158]['Email']), await _0x35cc09(0x640), await _0x4cc1f5['type']('input[name=\x22phone\x22]', '' + _0x221f07[_0x4a1158]['Phone']), await _0x35cc09(0x4b0), await _0x4cc1f5['click']('button.btn.continue-button__1RtsS'), await _0x35cc09(0x4b0);
            try {
                await _0x4cc1f5['type']('input[name=\x22firstName\x22]', '' + _0x221f07[_0x4a1158]['FirstName']), await _0x35cc09(0x258);
            } catch {
                const _0x542bef = await _0x4cc1f5['$$eval']('.invalid-feedback\x20>\x20div', _0x591c51 => {
                    return _0x591c51['map'](_0x1f8a15 => _0x1f8a15['innerText']);
                });
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x20' + _0x542bef));
                continue;
            }
            await _0x4cc1f5['type']('input[name=\x22lastName\x22]', '' + _0x221f07[_0x4a1158]['LastName']), await _0x35cc09(0xc8), await _0x4cc1f5['type']('input[name=\x22instagramUsername\x22]', '' + _0x221f07[_0x4a1158]['Follower']), await _0x35cc09(0x4b0), await _0x4cc1f5['click']('button.btn.continue-button__1RtsS'), await _0x35cc09(0x3e8), console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x4cc1f5['select']('select[name=\x22country\x22]', '' + _0x221f07[_0x4a1158]['Country']), await _0x35cc09(0x2bc), await _0x4cc1f5['type']('input[name=\x22streetName\x22]', '' + _0x221f07[_0x4a1158]['Address1']), await _0x35cc09(0x258), await _0x4cc1f5['type']('input[name=\x22houseNumber\x22]', _0x221f07[_0x4a1158]['HouseNumber'] + '\x20' + _0x221f07[_0x4a1158]['Address2']), await _0x35cc09(0xc8), await _0x4cc1f5['type']('input[name=\x22postalCode\x22]', '' + _0x221f07[_0x4a1158]['Zip']), await _0x35cc09(0x1f4), await _0x4cc1f5['type']('input[name=\x22city\x22]', '' + _0x221f07[_0x4a1158]['City']), await _0x35cc09(0x4b0), await _0x4cc1f5['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x35cc09(0x4b0), await _0x4cc1f5['click']('button.btn.continue-button__1RtsS'), await _0x35cc09(0x4b0), console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x4cc1f5['solveRecaptchas'](), console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x35cc09(0xbb8), await _0x4cc1f5['click']('button.btn.continue-button__1RtsS'), await _0x35cc09(0x1388), console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x4cc1f5['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4cc1f5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x35cc09(0x4b0), await _0x4cc1f5['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x221f07[_0x4a1158]['CardNumber']), await _0x35cc09(0x320), await _0x4cc1f5['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x4cc1f5['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x221f07[_0x4a1158]['ExpiryDate']), await _0x35cc09(0x4b0), await _0x4cc1f5['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x4cc1f5['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x221f07[_0x4a1158]['CVV']), await _0x35cc09(0x226), await _0x4cc1f5['type']('input[name=\x22holderName\x22]', '' + _0x221f07[_0x4a1158]['NameOnCard']), await _0x35cc09(0x226), await _0x4cc1f5['click']('button.adyen-checkout__button'), console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x4cc1f5['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x35cc09(0xbb8), console['log'](_0x2360bc['green'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x5c47f5(_0x3feda7, _0x1f393b);
            } catch {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x2a22dc) {
            console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x20' + _0x2a22dc), _0x58a456[0x0]['title'] = 'Failed\x20' + _0xa60771[taskModule]['name'] + '\x20entry', _0x58a456[0x0]['description'] = '' + _0x2a22dc, await _0x5c47f5(_0x2da8bd, _0x1f393b), _0x39417e = 'yes';
        } finally {
            _0x3593d1['close']();
            if (_0x39417e == 'yes' && _0xe5b9cd != 0x5) {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1158 + 0x1) + '\x20:\x20Retrying')), _0x4a1158 = _0x4a1158 - 0x1, _0xe5b9cd = _0xe5b9cd + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x4d870d['footshopDelay'] + '\x20ms'), await _0x35cc09(_0x4d870d['footshopDelay']);
        }
    }
}
afewFunction = async (_0x50d9bf, _0x3b9e37, _0x215b61, _0x405115, _0x1a08fa) => {
    for (var _0x5a8e7f = 0x0; _0x5a8e7f < _0x405115['length']; _0x5a8e7f++) {
        var _0x2542a4 = '', _0x4af81d = 0x0;
        _0x5d391b(_0x215b61['name'] + '\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20/\x20' + _0x405115['length'] + '\x20||\x20File:\x20' + _0x1aba1f + '\x20Proxies:\x20' + _0x41e381), await _0x5860f3(_0x405115, _0x5a8e7f);
        var _0x53df95 = [{
            'type': 'rich',
            'title': 'Succesful\x20AFEW\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x51f778
                },
                {
                    'name': 'Product',
                    'value': '' + _0x50d9bf
                },
                {
                    'name': 'Size',
                    'value': '' + _0x405115[_0x5a8e7f]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4d870d['AfewDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x231fbf
                }
            ]
        }];
        const _0x118858 = { 'embeds': _0x53df95 };
        if (_0x405115[_0x5a8e7f]['Email'] == '' || _0x405115[_0x5a8e7f]['FirstName'] == '' || _0x405115[_0x5a8e7f]['LastName'] == '' || _0x405115[_0x5a8e7f]['Country'] == '' || _0x405115[_0x5a8e7f]['Size'] == '' || _0x405115[_0x5a8e7f]['Address1'] == '' || _0x405115[_0x5a8e7f]['Zip'] == '') {
            console['log'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4d870d['useRandomProxy'] = ![])
            var _0x1ed734 = _0x1a08fa[_0x5a8e7f]['split'](':');
        else
            var _0x1ff35e = Math['round'](Math['random']() * (_0x1a08fa['length'] - 0x1)), _0x1ed734 = _0x1a08fa[_0x1ff35e]['split'](':');
        const _0x462da3 = await _0x52fb25['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1ed734[0x0] + ':' + _0x1ed734[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1fedce = await _0x462da3['newPage']();
            await _0x1fedce['setDefaultNavigationTimeout'](0x1d4c0), await _0x1fedce['authenticate']({
                'username': '' + _0x1ed734[0x2],
                'password': '' + _0x1ed734[0x3]
            }), console['log'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1fedce['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1fedce['setRequestInterception'](!![]), _0x1fedce['on']('request', _0xda8fde => {
                _0xda8fde['resourceType']() === 'image' || _0xda8fde['resourceType']() === 'font' || _0xda8fde['resourceType']() === 'media' ? _0xda8fde['abort']() : _0xda8fde['continue']();
            }), await _0x1fedce['goto'](_0x50d9bf, { 'waitUntil': 'networkidle2' }), console['log'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x1fedce['waitForTimeout'](0xfa0), console['log'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20Cookies\x20received'), await _0x1fedce['waitForTimeout'](0x320);
            if (_0x405115[_0x5a8e7f]['Size'] == 'RANDOM') {
                console['log'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x21ffc7 = await _0x1fedce['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x18ca65 => {
                    return _0x18ca65['map'](_0x1ad200 => _0x1ad200['href']);
                });
                var _0x50051a = Math['round'](Math['random']() * (_0x21ffc7['length'] - 0x1));
                await _0x1fedce['goto']('' + _0x21ffc7[_0x50051a]);
            } else {
                console['log'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x405115[_0x5a8e7f]['Size']);
                try {
                    const _0x5f3a49 = await _0x1fedce['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x405115[_0x5a8e7f]['Size'] + '\x22]\x20>\x20a', _0x25c6e4 => {
                        return _0x25c6e4['map'](_0xe52cba => _0xe52cba['href']);
                    });
                    await _0x1fedce['goto']('' + _0x5f3a49[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0xacdb8e) {
                    console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20' + _0xacdb8e + '\x20Size\x20not\x20found')), _0x53df95[0x0]['title'] = 'Failed\x20entry', _0x53df95[0x0]['description'] = 'Size\x20not\x20found', await _0x5c47f5(_0x2da8bd, _0x118858);
                    continue;
                }
            }
            await _0x1fedce['waitForTimeout'](0x258), await _0x1fedce['type']('#raffle-instagram', '' + _0x405115[_0x5a8e7f]['Follower'], { 'delay': 0x64 }), await _0x1fedce['waitForTimeout'](0x384), await _0x1fedce['click']('#raffle-terms'), await _0x1fedce['waitForTimeout'](0x384), await _0x1fedce['evaluate'](() => {
                const _0x5a963d = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x5a963d['click']();
            }), await _0x1fedce['waitForTimeout'](0xbb8), await _0x1fedce['waitForSelector']('#checkout_email'), await _0x35cc09(0x3e8), console['log'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20Filling\x20Information');
            _0x3b9e37 == 'sec' ? await _0x1fedce['type']('#checkout_email', '' + _0x405115[_0x5a8e7f]['FirstName'] + _0x405115[_0x5a8e7f]['LastName'] + _0x4d870d['catchall'], 0x32) : await _0x1fedce['type']('#checkout_email', '' + _0x405115[_0x5a8e7f]['Email'], 0x32);
            await _0x35cc09(0x320), await _0x1fedce['select']('#checkout_shipping_address_country', '' + _0x405115[_0x5a8e7f]['Country']), await _0x1fedce['waitForTimeout'](0x258), await _0x1fedce['type']('#checkout_shipping_address_first_name', '' + _0x405115[_0x5a8e7f]['FirstName']), await _0x1fedce['waitForTimeout'](0x320), await _0x1fedce['type']('#checkout_shipping_address_last_name', '' + _0x405115[_0x5a8e7f]['LastName']), await _0x1fedce['waitForTimeout'](0x2bc), await _0x1fedce['type']('#checkout_shipping_address_address1', _0x405115[_0x5a8e7f]['Address1'] + '\x20' + _0x405115[_0x5a8e7f]['HouseNumber']), await _0x1fedce['waitForTimeout'](0x2bc), await _0x1fedce['type']('#checkout_shipping_address_address2', '' + _0x405115[_0x5a8e7f]['Address2']), await _0x1fedce['waitForTimeout'](0x2bc);
            _0x405115[_0x5a8e7f]['Postcode'] == undefined ? await _0x1fedce['type']('#checkout_shipping_address_zip', '' + _0x405115[_0x5a8e7f]['Zip']) : await _0x1fedce['type']('#checkout_shipping_address_zip', '' + _0x405115[_0x5a8e7f]['Postcode']);
            await _0x1fedce['waitForTimeout'](0x2bc), await _0x1fedce['type']('#checkout_shipping_address_city', '' + _0x405115[_0x5a8e7f]['City']), await _0x1fedce['waitForTimeout'](0x2bc), console['log'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x1fedce, _0x1fedce['evaluate'](() => {
                const _0x10f48d = document['querySelector']('#continue_button');
                for (var _0x170a4c = 0x0; _0x170a4c < 0x5; _0x170a4c++) {
                    if (_0x10f48d) {
                        _0x10f48d['click'](), _0x10f48d['click']();
                        break;
                    } else
                        _0x35cc09(0xfa0);
                }
            }), await _0x1fedce['waitForTimeout'](0x1194);
            try {
                await _0x1fedce['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x1fedce['evaluate'](() => {
                const _0x5aa6dc = document['querySelector']('#continue_button');
                for (var _0x4aacf2 = 0x0; _0x4aacf2 < 0x5; _0x4aacf2++) {
                    if (_0x5aa6dc) {
                        _0x5aa6dc['click']();
                        break;
                    } else
                        _0x35cc09(0xfa0);
                }
            }), await _0x1fedce['waitForTimeout'](0x7d0), console['log'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1fedce['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x1fedce['evaluate'](() => {
                const _0x1079e7 = document['querySelector']('#continue_button');
                for (var _0x580b82 = 0x0; _0x580b82 < 0x5; _0x580b82++) {
                    if (_0x1079e7) {
                        _0x1079e7['click']();
                        break;
                    } else
                        _0x35cc09(0xfa0);
                }
            }), await _0x1fedce['waitForTimeout'](0x1194), await _0x1fedce['waitForSelector']('#continue_button'), _0x1fedce['evaluate'](() => {
                const _0x2cdda6 = document['querySelector']('#continue_button');
                for (var _0x39987f = 0x0; _0x39987f < 0x5; _0x39987f++) {
                    if (_0x2cdda6) {
                        _0x2cdda6['click']();
                        break;
                    } else
                        _0x35cc09(0xfa0);
                }
            });
            try {
                await _0x1fedce['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x44ba61) {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x44ba61));
            }
            console['log'](_0x2360bc['green'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x5c47f5(_0x3feda7, _0x118858);
        } catch (_0x4308c3) {
            console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20' + _0x4308c3)), _0x53df95[0x0]['title'] = 'Failed\x20entry', _0x53df95[0x0]['description'] = '' + _0x4308c3, await _0x5c47f5(_0x2da8bd, _0x118858), _0x2542a4 = 'yes';
        } finally {
            _0x462da3 && _0x462da3['close']();
            if (_0x2542a4 == 'yes' && _0x4af81d != 0x5) {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x215b61['name'] + ']\x20Task\x20' + (_0x5a8e7f + 0x1) + '\x20:\x20Retrying')), _0x5a8e7f = _0x5a8e7f - 0x1, _0x4af81d = _0x4af81d + 0x1;
                continue;
            }
            if (_0x5a8e7f + 0x1 == _0x405115['length']) {
                console['log'](_0x2360bc['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x35cc09(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x4d870d['AfewDelay'] + '\x20ms'), await _0x35cc09(_0x4d870d['AfewDelay']);
        }
    }
};
async function _0x424a52(_0x5e6e17, _0x4a402e, _0x518170, _0x4f6525) {
    _0x52fb25['use'](_0x18f355()), _0x52fb25['use'](_0x5c313d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4d870d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4830b4 = 0x0; _0x4830b4 < _0x518170['length']; _0x4830b4++) {
        var _0x48f4ab = '', _0x30034b = 0x0;
        _0x5d391b(_0x4a402e['name'] + '\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20/\x20' + _0x518170['length'] + '\x20||\x20File:\x20' + _0x1aba1f + '\x20Proxies:\x20' + _0x41e381);
        var _0x18e7fd = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x51f778
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4d870d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x231fbf
                }
            ]
        }];
        const _0xdbbef1 = { 'embeds': _0x18e7fd };
        await _0x5860f3(_0x518170, _0x4830b4);
        if (_0x518170[_0x4830b4]['Email'] == '' || _0x518170[_0x4830b4]['Password'] == '' || _0x518170[_0x4830b4]['FirstName'] == '' || _0x518170[_0x4830b4]['LastName'] == '') {
            console['log'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4d870d['useRandomProxy'] = ![])
            var _0x45339a = _0x4f6525[_0x4830b4]['split'](':');
        else
            var _0x101f80 = Math['round'](Math['random']() * (_0x4f6525['length'] - 0x1)), _0x45339a = _0x4f6525[_0x101f80]['split'](':');
        const _0x4782e8 = await _0x52fb25['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x45339a[0x0] + ':' + _0x45339a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x17d7c6 = await _0x4782e8['newPage']();
            await _0x17d7c6['authenticate']({
                'username': '' + _0x45339a[0x2],
                'password': '' + _0x45339a[0x3]
            }), console['log'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x17d7c6['setRequestInterception'](!![]), _0x17d7c6['on']('request', _0x3c93d8 => {
                _0x3c93d8['resourceType']() === 'image' || _0x3c93d8['resourceType']() === 'font' || _0x3c93d8['resourceType']() === 'media' ? _0x3c93d8['abort']() : _0x3c93d8['continue']();
            }), await _0x17d7c6['goto'](_0x5e6e17), await _0x35cc09(0xbb8), console['log'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x17d7c6['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x17d7c6['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x17d7c6['waitForSelector']('#button-register'), await _0x35cc09(0x7d0), await _0x17d7c6['evaluate'](() => {
                const _0x5278db = document['querySelector']('#button-register');
                _0x5278db['click']();
            }), console['log'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x35cc09(0x1388), await _0x17d7c6['waitForSelector']('#customer_salutation'), await _0x17d7c6['select']('#customer_salutation', 'mr'), await _0x35cc09(0x7d0), await _0x17d7c6['waitForSelector']('#customer_firstname'), await _0x17d7c6['type']('#customer_firstname', '' + _0x518170[_0x4830b4]['FirstName']), await _0x35cc09(0x352), await _0x17d7c6['waitForSelector']('#customer_lastname'), await _0x17d7c6['type']('#customer_lastname', '' + _0x518170[_0x4830b4]['LastName']), await _0x35cc09(0x352), await _0x17d7c6['type']('#email-input', '' + _0x518170[_0x4830b4]['Email']), await _0x35cc09(0x352), await _0x17d7c6['type']('#email-confirm-input', '' + _0x518170[_0x4830b4]['Email']), await _0x35cc09(0x352), await _0x17d7c6['type']('#register-password', '' + _0x518170[_0x4830b4]['Password']), await _0x35cc09(0x352), await _0x17d7c6['type']('#password-confirm', '' + _0x518170[_0x4830b4]['Password']), await _0x35cc09(0x352), console['log'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x17d7c6['click']('#consent'), await _0x35cc09(0x1f4);
            const _0x1d91cf = await _0x17d7c6['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x1d91cf) {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x17d7c6['click']('#buttonRegister');
            try {
                await _0x17d7c6['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x2360bc['yellow'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20Account\x20' + _0x518170[_0x4830b4]['Email'] + '\x20Generated!')), console['log'](_0x2360bc['yellow'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x518170[_0x4830b4]['Email'])), await _0x35cc09(0x4b0);
            async function _0x291919() {
                console['log'](_0x2360bc['yellow'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x592619 = await _0x11b632['get']('Code');
                return _0x592619['Code'];
            }
            ;
            code = await _0x291919(), _0x35cc09(0x320), console['log'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20Verifying..'), await _0x17d7c6['type']('#verificationCode', code), await _0x35cc09(0x1f4), await _0x17d7c6['click']('#buttonVerify'), await _0x35cc09(0x190), await _0x17d7c6['click']('#buttonVerify'), await _0x35cc09(0x3e8);
            try {
                await _0x17d7c6['waitForSelector']('div.b-user_greeting'), console['log'](_0x2360bc['green'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20Account\x20' + _0x518170[_0x4830b4]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x20810f['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x518170[_0x4830b4]['Email'] + ',' + _0x518170[_0x4830b4]['Password'] + ','), console['log'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20Account\x20' + _0x518170[_0x4830b4]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27'), await _0x5c47f5(_0x25796f, _0xdbbef1);
            } catch {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x48db62) {
            console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20' + _0x48db62)), _0x18e7fd[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x18e7fd[0x0]['description'] = '' + _0x48db62, await _0x5c47f5(_0x2da8bd, _0xdbbef1), _0x48f4ab = 'yes';
        } finally {
            _0x4782e8 && _0x4782e8['close']();
            if (_0x48f4ab == 'yes' && _0x30034b != 0x5) {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x4a402e['name'] + ']\x20Task\x20' + (_0x4830b4 + 0x1) + '\x20:\x20Retrying')), _0x4830b4 = _0x4830b4 - 0x1, _0x30034b = _0x30034b + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x4d870d['delay'] + '\x20ms'), await _0x35cc09(_0x4d870d['delay']);
        }
    }
}
async function _0x2d6830(_0x2c9141, _0x45a126, _0x458c9a) {
    _0x52fb25['use'](_0x18f355()), _0x52fb25['use'](_0x5c313d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4d870d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x567bc7 = 0x0; _0x567bc7 < _0x45a126['length']; _0x567bc7++) {
        var _0x19a77c = '', _0x8df2a5 = 0x0;
        _0x5d391b(_0x2c9141['name'] + '\x20Task\x20' + (_0x567bc7 + 0x1) + '\x20/\x20' + _0x45a126['length'] + '\x20||\x20File:\x20' + _0x1aba1f + '\x20Proxies:\x20' + _0x41e381);
        var _0xda802f = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x51f778
                },
                {
                    'name': 'Product',
                    'value': '' + _0x45a126[_0x567bc7]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x45a126[_0x567bc7]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4d870d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x231fbf
                }
            ]
        }];
        const _0x3672a9 = { 'embeds': _0xda802f };
        await _0x5860f3(_0x45a126, _0x567bc7);
        if (_0x45a126[_0x567bc7]['Email'] == '' || _0x45a126[_0x567bc7]['Password'] == '' || _0x45a126[_0x567bc7]['FirstName'] == '' || _0x45a126[_0x567bc7]['LastName'] == '') {
            console['log'](_0x337a95() + '\x20[' + _0x2c9141['name'] + ']\x20Task\x20' + (_0x567bc7 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4d870d['useRandomProxy'] = ![])
            var _0x3a2261 = _0x458c9a[_0x567bc7]['split'](':');
        else
            var _0x1b08df = Math['round'](Math['random']() * (_0x458c9a['length'] - 0x1)), _0x3a2261 = _0x458c9a[_0x1b08df]['split'](':');
        const _0x3837b0 = await _0x52fb25['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3a2261[0x0] + ':' + _0x3a2261[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x258a1a = await _0x3837b0['newPage']();
            await _0x258a1a['authenticate']({
                'username': '' + _0x3a2261[0x2],
                'password': '' + _0x3a2261[0x3]
            }), console['log'](_0x337a95() + '\x20[' + _0x2c9141['name'] + ']\x20Task\x20' + (_0x567bc7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x258a1a['setRequestInterception'](!![]), _0x258a1a['on']('request', _0x40ddaa => {
                _0x40ddaa['resourceType']() === 'image' || _0x40ddaa['resourceType']() === 'font' || _0x40ddaa['resourceType']() === 'media' ? _0x40ddaa['abort']() : _0x40ddaa['continue']();
            }), await _0x258a1a['goto']('' + _0x45a126[_0x567bc7]['Url'], { 'waitUntil': 'networkidle2' }), await _0x35cc09(0x12c);
            try {
                await _0x258a1a['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x258a1a['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x337a95() + '\x20[' + _0x2c9141['name'] + ']\x20Task\x20' + (_0x567bc7 + 0x1) + '\x20:\x20Logging\x20in'), await _0x258a1a['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x258a1a['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x258a1a['waitForSelector']('#username'), await _0x258a1a['type']('#username', _0x45a126[_0x567bc7]['Email']), await _0x258a1a['waitForSelector']('#password'), await _0x258a1a['type']('#password', _0x45a126[_0x567bc7]['Password']), await _0x35cc09(0x190), await _0x258a1a['click']('#buttonSubmit'), await _0x258a1a['waitForSelector']('div.b-user_greeting'), console['log'](_0x337a95() + '\x20[' + _0x2c9141['name'] + ']\x20Task\x20' + (_0x567bc7 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x35cc09(0x1f4), await _0x258a1a['goto']('' + _0x45a126[_0x567bc7]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x337a95() + '\x20[' + _0x2c9141['name'] + ']\x20Task\x20' + (_0x567bc7 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x45a126[_0x567bc7]['Size']);
            let _0x30eec5 = _0x45a126[_0x567bc7]['Size']['replace']('.5', '\x201/2');
            await _0x258a1a['click']('button[title=\x22' + _0x30eec5 + '\x22]'), await _0x35cc09(0x1f4);
            try {
                await _0x258a1a['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x35cc09(0x12c), console['log'](_0x337a95() + '\x20[' + _0x2c9141['name'] + ']\x20Task\x20' + (_0x567bc7 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x258a1a['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x35cc09(0x12c), await _0x258a1a['type']('#dwfrm_raffle_addressFields_firstName', _0x45a126[_0x567bc7]['FirstName']), await _0x35cc09(0x12c), await _0x258a1a['type']('#dwfrm_raffle_addressFields_lastName', _0x45a126[_0x567bc7]['LastName']), await _0x35cc09(0x12c), await _0x258a1a['select']('#dwfrm_raffle_addressFields_country', _0x45a126[_0x567bc7]['Country']), await _0x35cc09(0x12c), await _0x258a1a['type']('#dwfrm_raffle_addressFields_city', _0x45a126[_0x567bc7]['City']), await _0x35cc09(0x12c);
            _0x45a126[_0x567bc7]['Postcode'] == undefined && (_0x45a126[_0x567bc7]['Postcode'] = _0x45a126[_0x567bc7]['Zip']);
            await _0x258a1a['type']('#dwfrm_raffle_addressFields_postalCode', _0x45a126[_0x567bc7]['Postcode']), await _0x35cc09(0x12c), await _0x258a1a['type']('#dwfrm_raffle_addressFields_address1', _0x45a126[_0x567bc7]['Address1']), await _0x35cc09(0x12c), await _0x258a1a['type']('#dwfrm_raffle_addressFields_address2', _0x45a126[_0x567bc7]['HouseNumber']), await _0x35cc09(0x12c), await _0x258a1a['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x45a126[_0x567bc7]['Address2']), await _0x35cc09(0x12c), await _0x258a1a['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x35cc09(0x12c), await _0x258a1a['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x45a126[_0x567bc7]['Follower']), await _0x35cc09(0x1f4), await _0x258a1a['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x35cc09(0x1f4), console['log'](_0x337a95() + '\x20[' + _0x2c9141['name'] + ']\x20Task\x20' + (_0x567bc7 + 0x1) + '\x20:\x20' + _0x2360bc['blue']('Awaiting\x20Paypal\x20Payment')), await _0x258a1a['click']('.b-paypal_button');
            try {
                await _0x258a1a['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x2360bc['green'](_0x337a95() + '\x20[' + _0x2c9141['name'] + ']\x20Task\x20' + (_0x567bc7 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x5c47f5(_0x3feda7, _0x3672a9);
            } catch (_0x57b2d6) {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x2c9141['name'] + ']\x20Task\x20' + (_0x567bc7 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x57b2d6));
            }
        } catch (_0x50f970) {
            console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x2c9141['name'] + ']\x20Task\x20' + (_0x567bc7 + 0x1) + '\x20:\x20' + _0x50f970)), _0xda802f[0x0]['title'] = 'Failed\x20kickz\x20Entry', _0xda802f[0x0]['description'] = '' + _0x50f970, await _0x5c47f5(_0x2da8bd, _0x3672a9), _0x19a77c = 'yes';
        } finally {
            _0x3837b0 && _0x3837b0['close']();
            if (_0x19a77c == 'yes' && _0x8df2a5 != 0x5) {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x2c9141['name'] + ']\x20Task\x20' + (_0x567bc7 + 0x1) + '\x20:\x20Retrying')), _0x567bc7 = _0x567bc7 - 0x1, _0x8df2a5 = _0x8df2a5 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x4d870d['AfewDelay'] + '\x20ms'), await _0x35cc09(_0x4d870d['AfewDelay']);
        }
    }
}
async function _0x340260(_0xabc009, _0x3925fc) {
    _0x52fb25['use'](_0x18f355()), _0x52fb25['use'](_0x5c313d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4d870d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3798b0 = 0x0; _0x3798b0 < bouncewear['length']; _0x3798b0++) {
        await _0x5860f3(bouncewear, _0x3798b0);
        if (bouncewear[_0x3798b0]['Email'] == '' || bouncewear[_0x3798b0]['Password'] == '' || bouncewear[_0x3798b0]['FirstName'] == '' || bouncewear[_0x3798b0]['LastName'] == '') {
            console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x3798b0 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4d870d['useRandomProxy'] = ![])
            var _0x31ed4a = _0x3840af()[_0x3798b0]['split'](':');
        else
            var _0x3697c2 = Math['round'](Math['random']() * (_0x3840af()['length'] - 0x1)), _0x31ed4a = _0x3840af()[_0x3697c2]['split'](':');
        const _0x44c4c8 = await _0x52fb25['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x31ed4a[0x0] + ':' + _0x31ed4a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x370bc9 = await _0x44c4c8['newPage']();
            await _0x370bc9['authenticate']({
                'username': '' + _0x31ed4a[0x2],
                'password': '' + _0x31ed4a[0x3]
            }), console['log'](_0x337a95() + '\x20[' + _0x3925fc['name'] + ']\x20Task\x20' + (_0x3798b0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x370bc9['setRequestInterception'](!![]), _0x370bc9['on']('request', _0x4f417c => {
                _0x4f417c['resourceType']() === 'image' || _0x4f417c['resourceType']() === 'font' || _0x4f417c['resourceType']() === 'media' ? _0x4f417c['abort']() : _0x4f417c['continue']();
            }), await _0x370bc9['goto'](_0xabc009), await _0x35cc09(0xbb8), await _0x370bc9['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x337a95() + '\x20[' + _0x3925fc['name'] + ']\x20Task\x20' + (_0x3798b0 + 0x1) + '\x20:\x20Filling\x20information'), await _0x370bc9['type']('#RegisterForm-FirstName', '' + bouncewear[_0x3798b0]['FirstName']), await _0x35cc09(0x226), await _0x370bc9['type']('#RegisterForm-LastName', '' + bouncewear[_0x3798b0]['LastName']), await _0x35cc09(0x226), await _0x370bc9['type']('#RegisterForm-email', '' + bouncewear[_0x3798b0]['Email']), await _0x35cc09(0x226), await _0x370bc9['type']('#RegisterForm-password', '' + bouncewear[_0x3798b0]['Password']), await _0x35cc09(0x226), await _0x370bc9['click']('#marketing'), console['log'](_0x337a95() + '\x20[' + _0x3925fc['name'] + ']\x20Task\x20' + (_0x3798b0 + 0x1) + '\x20:\x20Submitting..'), await _0x370bc9['$eval']('#RegisterForm', _0x54159f => _0x54159f['submit']()), await _0x35cc09(0x1f40), console['log'](_0x337a95() + '\x20[' + _0x3925fc['name'] + ']\x20Task\x20' + (_0x3798b0 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x370bc9['solveRecaptchas'](), await _0x370bc9['click']('.shopify-challenge__button.btn');
            async function _0x20b5ea() {
                for (var _0x539f38 = 0x0; _0x539f38 < 0x4; _0x539f38++) {
                    try {
                        console['log']('try'), await _0x370bc9['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x337a95() + '\x20[' + _0x3925fc['name'] + ']\x20Task\x20' + (_0x3798b0 + 0x1) + '\x20:\x20' + _0x2360bc['red']('Catpcha\x20failed,\x20retrying..')), await _0x370bc9['solveRecaptchas'](), await _0x370bc9['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x20b5ea(), console['log'](_0x337a95() + '\x20[' + _0x3925fc['name'] + ']\x20Task\x20' + (_0x3798b0 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x35cc09(0x1f4);
            try {
                await _0x370bc9['waitForSelector']('.featured-title'), await _0x35cc09(0x1f4), console['log'](_0x2360bc['green'](_0x337a95() + '\x20[' + _0x3925fc['name'] + ']\x20Task\x20' + (_0x3798b0 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3798b0]['Email'] + '\x20Generated!')), _0x20810f['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x3798b0]['Email'] + ',' + bouncewear[_0x3798b0]['Password']), console['log'](_0x2360bc['yellow'](_0x337a95() + '\x20[' + _0x3925fc['name'] + ']\x20Task\x20' + (_0x3798b0 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3798b0]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x111a9d) {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x3798b0 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x111a9d));
            }
        } catch (_0x4305fe) {
            console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x3798b0 + 0x1) + '\x20:\x20' + _0x4305fe));
        } finally {
            _0x44c4c8 && _0x44c4c8['close'](), console['log']('Waiting\x20for\x20' + _0x4d870d['delay'] + '\x20ms'), await _0x35cc09(_0x4d870d['delay']);
        }
    }
}
async function _0x35d6e8(_0x48abf5, _0x13e5af, _0x24dd45, _0x49f4a1) {
    _0x52fb25['use'](_0x18f355()), _0x52fb25['use'](_0x5c313d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4d870d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x590360 = 0x0; _0x590360 < _0x24dd45['length']; _0x590360++) {
        var _0x141e0f = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x51f778
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4d870d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x231fbf
                }
            ]
        }];
        const _0x138bb7 = { 'embeds': _0x141e0f };
        _0x5d391b(_0x13e5af['name'] + '\x20Task\x20' + (_0x590360 + 0x1) + '\x20/\x20' + _0x24dd45['length'] + '\x20||\x20File:\x20' + _0x1aba1f + '\x20Proxies:\x20' + _0x41e381), await _0x5860f3(_0x24dd45, _0x590360);
        if (_0x24dd45[_0x590360]['Email'] == '' || _0x24dd45[_0x590360]['Password'] == '' || _0x24dd45[_0x590360]['Password'] == undefined || _0x24dd45[_0x590360]['FirstName'] == '' || _0x24dd45[_0x590360]['LastName'] == '') {
            console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x590360 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4d870d['useRandomProxy'] = ![])
            var _0x2b2457 = _0x49f4a1[_0x590360]['split'](':');
        else
            var _0x1c2f08 = Math['round'](Math['random']() * (_0x49f4a1['length'] - 0x1)), _0x2b2457 = _0x49f4a1[_0x1c2f08]['split'](':');
        const _0x934d94 = await _0x52fb25['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2b2457[0x0] + ':' + _0x2b2457[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3686b1 = await _0x934d94['newPage']();
            await _0x3686b1['authenticate']({
                'username': '' + _0x2b2457[0x2],
                'password': '' + _0x2b2457[0x3]
            }), console['log'](_0x337a95() + '\x20[' + _0x13e5af['name'] + ']\x20Task\x20' + (_0x590360 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3686b1['setRequestInterception'](!![]), _0x3686b1['on']('request', _0x213785 => {
                _0x213785['resourceType']() === 'image' || _0x213785['resourceType']() === 'font' || _0x213785['resourceType']() === 'media' ? _0x213785['abort']() : _0x213785['continue']();
            }), await _0x3686b1['goto'](_0x48abf5), await _0x35cc09(0xbb8), await _0x3686b1['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x337a95() + '\x20[' + _0x13e5af['name'] + ']\x20Task\x20' + (_0x590360 + 0x1) + '\x20:\x20Filling\x20information'), await _0x3686b1['type']('#RegisterForm-FirstName', '' + _0x24dd45[_0x590360]['FirstName']), await _0x35cc09(0x226), await _0x3686b1['type']('#RegisterForm-LastName', '' + _0x24dd45[_0x590360]['LastName']), await _0x35cc09(0x226), await _0x3686b1['type']('#RegisterForm-email', '' + _0x24dd45[_0x590360]['Email']), await _0x35cc09(0x226), await _0x3686b1['type']('#RegisterForm-password', '' + _0x24dd45[_0x590360]['Password']), await _0x35cc09(0x226), console['log'](_0x337a95() + '\x20[' + _0x13e5af['name'] + ']\x20Task\x20' + (_0x590360 + 0x1) + '\x20:\x20Submitting..'), await _0x3686b1['$eval']('#RegisterForm', _0x2b787b => _0x2b787b['submit']()), await _0x35cc09(0x1f40);
            try {
                await _0x3686b1['waitForSelector']('.home-page-grid__collection'), await _0x35cc09(0x1f4), console['log'](_0x2360bc['green'](_0x337a95() + '\x20[' + _0x13e5af['name'] + ']\x20Task\x20' + (_0x590360 + 0x1) + '\x20:\x20Account\x20' + _0x24dd45[_0x590360]['Email'] + '\x20Generated!')), _0x20810f['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x24dd45[_0x590360]['Email'] + ',' + _0x24dd45[_0x590360]['Password']), console['log'](_0x2360bc['yellow'](_0x337a95() + '\x20[' + _0x13e5af['name'] + ']\x20Task\x20' + (_0x590360 + 0x1) + '\x20:\x20Account\x20' + _0x24dd45[_0x590360]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27')), await _0x5c47f5(_0x25796f, _0x138bb7);
            } catch (_0x5d64b6) {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x590360 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x5d64b6));
            }
        } catch (_0x96b0c0) {
            console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x590360 + 0x1) + '\x20:\x20' + _0x96b0c0));
        } finally {
            _0x934d94 && _0x934d94['close'](), console['log']('Waiting\x20for\x20' + _0x4d870d['delay'] + '\x20ms'), await _0x35cc09(_0x4d870d['delay']);
        }
    }
}
async function _0x424f6a(_0x4ea7dc, _0x284741, _0x235ab0, _0x32b92c) {
    _0x52fb25['use'](_0x18f355()), _0x52fb25['use'](_0x5c313d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4d870d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x34d3d8 = 0x0; _0x34d3d8 < _0x235ab0['length']; _0x34d3d8++) {
        var _0x255f46 = '', _0x396c51 = 0x0;
        _0x5d391b(_0x284741['name'] + '\x20Task\x20' + (_0x34d3d8 + 0x1) + '\x20/\x20' + _0x235ab0['length'] + '\x20||\x20File:\x20' + _0x1aba1f + '\x20Proxies:\x20' + _0x41e381), await _0x5860f3(_0x235ab0, _0x34d3d8);
        if (_0x235ab0[_0x34d3d8]['Email'] == '' || _0x235ab0[_0x34d3d8]['Password'] == '' || _0x235ab0[_0x34d3d8]['FirstName'] == '' || _0x235ab0[_0x34d3d8]['LastName'] == '') {
            console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x34d3d8 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4d870d['useRandomProxy'] = ![])
            var _0x3c9e8b = _0x32b92c[_0x34d3d8]['split'](':');
        else
            var _0x5d16bc = Math['round'](Math['random']() * (_0x32b92c['length'] - 0x1)), _0x3c9e8b = _0x32b92c[_0x5d16bc]['split'](':');
        const _0x12d065 = await _0x52fb25['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3c9e8b[0x0] + ':' + _0x3c9e8b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xad5b95 = await _0x12d065['newPage']();
            await _0xad5b95['authenticate']({
                'username': '' + _0x3c9e8b[0x2],
                'password': '' + _0x3c9e8b[0x3]
            }), console['log'](_0x337a95() + '\x20[' + _0x284741['name'] + ']\x20Task\x20' + (_0x34d3d8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xad5b95['setRequestInterception'](!![]), _0xad5b95['on']('request', _0xa11338 => {
                _0xa11338['resourceType']() === 'image' || _0xa11338['resourceType']() === 'font' || _0xa11338['resourceType']() === 'media' ? _0xa11338['abort']() : _0xa11338['continue']();
            }), await _0xad5b95['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0xad5b95['waitForSelector']('#CustomerEmail'), console['log'](_0x337a95() + '\x20[' + _0x284741['name'] + ']\x20Task\x20' + (_0x34d3d8 + 0x1) + '\x20:\x20Logging\x20in..'), await _0xad5b95['type']('#CustomerEmail', '' + _0x235ab0[_0x34d3d8]['Email']), await _0x35cc09(0x12c), await _0xad5b95['type']('#CustomerPassword', '' + _0x235ab0[_0x34d3d8]['Password']), await _0x35cc09(0x226), await _0xad5b95['$eval']('#customer_login', _0x44ccf5 => _0x44ccf5['submit']());
            try {
                await _0xad5b95['waitForSelector']('#orders'), await _0x35cc09(0x4b0);
            } catch {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x284741['name'] + ']\x20Task\x20' + (_0x34d3d8 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0xad5b95['goto']('' + _0x235ab0[_0x34d3d8]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x35cc09(0xbb8), console['log'](_0x337a95() + '\x20[' + _0x284741['name'] + ']\x20Task\x20' + (_0x34d3d8 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0xad5b95['waitForSelector']('#email');
            } catch {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x284741['name'] + ']\x20Task\x20' + (_0x34d3d8 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0xad5b95['type']('#email', '' + _0x235ab0[_0x34d3d8]['Email']), await _0x35cc09(0x384), await _0xad5b95['type']('#first_name', '' + _0x235ab0[_0x34d3d8]['FirstName']), await _0x35cc09(0x514), await _0xad5b95['type']('#last_name', '' + _0x235ab0[_0x34d3d8]['LastName']), await _0x35cc09(0x514), await _0xad5b95['type']('#street_address', _0x235ab0[_0x34d3d8]['Address1'] + '\x20' + _0x235ab0[_0x34d3d8]['HouseNumber'] + '\x20' + _0x235ab0[_0x34d3d8]['Address2']), await _0x35cc09(0x2bc);
            _0x235ab0[_0x34d3d8]['Postcode'] == undefined && (_0x235ab0[_0x34d3d8]['Postcode'] = _0x235ab0[_0x34d3d8]['Zip']);
            await _0xad5b95['type']('#zip_code', '' + _0x235ab0[_0x34d3d8]['Postcode']), await _0x35cc09(0x320), await _0xad5b95['type']('#city', '' + _0x235ab0[_0x34d3d8]['City']), await _0x35cc09(0x320), await _0xad5b95['type']('#bday', '01/01/1994'), await _0x35cc09(0x320), await _0xad5b95['type']('#instagram', '' + _0x235ab0[_0x34d3d8]['Follower']), await _0x35cc09(0x352);
            if (_0x235ab0[_0x34d3d8]['Size'] == 'RANDOM') {
                const _0x4ad60c = await _0xad5b95['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x52d560 => {
                    return _0x52d560['map'](_0x153543 => _0x153543['textContent']);
                });
                var _0x3fd072 = Math['round'](Math['random']() * (_0x4ad60c['length'] - 0x1));
                console['log'](_0x337a95() + '\x20[' + _0x284741['name'] + ']\x20Task\x20' + (_0x34d3d8 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x4ad60c[_0x3fd072]), await _0xad5b95['click']('label[data-eu-size=\x22' + _0x4ad60c[_0x3fd072] + '\x22]');
            } else {
                console['log'](_0x337a95() + '\x20[' + _0x284741['name'] + ']\x20Task\x20' + (_0x34d3d8 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x235ab0[_0x34d3d8]['Size']);
                try {
                    await _0xad5b95['click']('label[data-eu-size=\x22' + _0x235ab0[_0x34d3d8]['Size'] + '\x22]');
                } catch {
                    await _0xad5b95['click']('label[data-eu-size=\x22' + _0x235ab0[_0x34d3d8]['Size'] + '.0\x22]');
                }
            }
            await _0x35cc09(0xbb8), await _0xad5b95['$$eval']('.raffle__checkbox-label', _0xe9e606 => _0xe9e606['forEach'](_0x59c88c => _0x59c88c['click']())), await _0x35cc09(0x7d0), console['log'](_0x337a95() + '\x20[' + _0x284741['name'] + ']\x20Task\x20' + (_0x34d3d8 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0xad5b95['click']('#raffle__form-submit'), await _0x35cc09(0x1388);
            try {
                await _0xad5b95['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x2360bc['green'](_0x337a95() + '\x20[' + _0x284741['name'] + ']\x20Task\x20' + (_0x34d3d8 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x1483e6) {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x34d3d8 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x1483e6));
            }
        } catch (_0x7629a0) {
            console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x34d3d8 + 0x1) + '\x20:\x20' + _0x7629a0)), _0x255f46 = 'yes';
        } finally {
            _0x12d065 && _0x12d065['close']();
            if (_0x255f46 == 'yes' && _0x396c51 != 0x5) {
                console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x284741['name'] + ']\x20Task\x20' + (_0x34d3d8 + 0x1) + '\x20:\x20Retrying')), _0x34d3d8 = _0x34d3d8 - 0x1, _0x396c51 = _0x396c51 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x4d870d['delay'] + '\x20ms'), await _0x35cc09(_0x4d870d['delay']);
        }
    }
}
async function _0x46da9f(_0xb4f4a, _0x16ddda, _0x1b7e98) {
    var _0x2305bd = ![], _0x1eeb5b = ![];
    if (_0x4d870d['captchaKey'] == '' || _0x4d870d['captchaKey'] == undefined)
        return console['log'](_0x2360bc['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x52fb25['use'](_0x18f355()), _0x52fb25['use'](_0x5c313d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4d870d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5801e7 = 0x0; _0x5801e7 < _0x16ddda['length']; _0x5801e7++) {
        var _0x25c36a = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x16ddda[_0x5801e7]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x16ddda[_0x5801e7]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x51f778
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4d870d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x231fbf
                }
            ]
        }];
        const _0x54a7cd = { 'embeds': _0x25c36a };
        _0x5d391b(_0xb4f4a['name'] + '\x20Task\x20' + (_0x5801e7 + 0x1) + '\x20/\x20' + _0x16ddda['length'] + '\x20||\x20File:\x20' + _0x1aba1f + '\x20Proxies:\x20' + _0x41e381), await _0x5860f3(_0x16ddda, _0x5801e7);
        if (_0x16ddda[_0x5801e7]['Email'] == '' || _0x16ddda[_0x5801e7]['Url'] == '' || _0x16ddda[_0x5801e7]['FirstName'] == '' || _0x16ddda[_0x5801e7]['LastName'] == '') {
            console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x5801e7 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4d870d['useRandomProxy'] = ![])
            var _0x2c5b5e = _0x1b7e98[_0x5801e7]['split'](':');
        else
            var _0x5f0383 = Math['round'](Math['random']() * (_0x1b7e98['length'] - 0x1)), _0x2c5b5e = _0x1b7e98[_0x5f0383]['split'](':');
        const _0x51b9eb = await _0x52fb25['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2c5b5e[0x0] + ':' + _0x2c5b5e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1db968 = await _0x51b9eb['newPage']();
            await _0x1db968['authenticate']({
                'username': '' + _0x2c5b5e[0x2],
                'password': '' + _0x2c5b5e[0x3]
            }), console['log'](_0x337a95() + '\x20[' + _0xb4f4a['name'] + ']\x20Task\x20' + (_0x5801e7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1db968['setRequestInterception'](!![]), _0x1db968['on']('request', _0x244921 => {
                _0x244921['resourceType']() === 'image' || _0x244921['resourceType']() === 'font' || _0x244921['resourceType']() === 'media' ? _0x244921['abort']() : _0x244921['continue']();
            }), await _0x1db968['goto']('' + _0x16ddda[_0x5801e7]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](_0x337a95() + '\x20[' + _0xb4f4a['name'] + ']\x20Task\x20' + (_0x5801e7 + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x1db968['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x1db968['type']('#comp_firstname', '' + _0x16ddda[_0x5801e7]['FirstName']), await _0x1db968['waitForSelector']('#comp_lastname'), await _0x1db968['type']('#comp_lastname', '' + _0x16ddda[_0x5801e7]['LastName']), await _0x1db968['waitForSelector']('#comp_email'), await _0x1db968['type']('#comp_email', '' + _0x16ddda[_0x5801e7]['Email']), await _0x1db968['waitForSelector']('#comp_paypalemail'), await _0x1db968['type']('#comp_paypalemail', '' + _0x16ddda[_0x5801e7]['Email']), await _0x1db968['waitForSelector']('#comp_mobile_end'), await _0x1db968['type']('#comp_mobile_end', '' + _0x16ddda[_0x5801e7]['Phone']), await _0x1db968['waitForSelector']('#comp_dob'), await _0x1db968['type']('#comp_dob', '08/09/1992'), console['log'](_0x337a95() + '\x20[' + _0xb4f4a['name'] + ']\x20Task\x20' + (_0x5801e7 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x16ddda[_0x5801e7]['Size'] == 'RANDOM') {
                const _0x303af1 = await _0x1db968['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5d0b19 => {
                    return _0x5d0b19['map'](_0x56d382 => _0x56d382['value']);
                });
                var _0x10d070 = Math['round'](Math['random']() * (_0x303af1['length'] - 0x2));
                await _0x1db968['select']('#shoesize', _0x303af1[_0x10d070 + 0x1]), await _0x35cc09(0x3e8);
            } else {
                const _0x198cb1 = await _0x1db968['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x305ead => {
                    return _0x305ead['map'](_0x397fcb => _0x397fcb['innerText']);
                }), _0x5d419e = await _0x1db968['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x100794 => {
                    return _0x100794['map'](_0xd0547e => _0xd0547e['value']);
                });
                var _0x407892 = _0x16ddda[_0x5801e7]['Size'];
                for (var _0xec3b8d = 0x1; _0xec3b8d < _0x5d419e['length']; _0xec3b8d++) {
                    var _0x1ae617 = _0x198cb1[_0xec3b8d]['split']('\x20')[0x0];
                    if (_0x1ae617 == _0x407892) {
                        await _0x1db968['select']('#shoesize', _0x5d419e[_0xec3b8d]);
                        break;
                    } else {
                        if (_0xec3b8d + 0x1 == _0x5d419e['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x1db968['waitForSelector']('#comp_address1'), await _0x1db968['type']('#comp_address1', _0x16ddda[_0x5801e7]['Address1'] + '\x20' + _0x16ddda[_0x5801e7]['HouseNumber']), await _0x1db968['waitForSelector']('#comp_address2'), await _0x1db968['type']('#comp_address2', '' + _0x16ddda[_0x5801e7]['Address2']), await _0x1db968['waitForSelector']('#comp_address2'), await _0x1db968['type']('#comp_address3', '' + _0x16ddda[_0x5801e7]['City']), await _0x1db968['waitForSelector']('#comp_postcode'), await _0x1db968['type']('#comp_postcode', '' + _0x16ddda[_0x5801e7]['Zip']), console['log'](_0x337a95() + '\x20[' + _0xb4f4a['name'] + ']\x20Task\x20' + (_0x5801e7 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x35cc09(0x4b0), await _0x1db968['click']('label#emailhold'), await _0x35cc09(0x5dc), await _0x1db968['click']('#preauth_tandc_email\x20>\x20label'), await _0x35cc09(0x5dc), await _0x1db968['click']('#submit'), await _0x1db968['waitForSelector']('#paymentWrap'), console['log'](_0x337a95() + '\x20[' + _0xb4f4a['name'] + ']\x20Task\x20' + (_0x5801e7 + 0x1) + '\x20:\x20' + _0x2360bc['blue']('Awaiting\x20Paypal\x20Payment')), _0x51b9eb['on']('targetcreated', async _0x3c2b3e => {
                if (_0x3c2b3e['type']() === 'page') {
                    const _0x285b89 = await _0x3c2b3e['page']();
                    async function _0x2211f5() {
                        try {
                            await _0x1db968['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x1eeb5b = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x5d4bb2() {
                        try {
                            await _0x1db968['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x2305bd = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x5d4bb2(), _0x2211f5(), await _0x35cc09(0x493e0);
                }
            });
            async function _0x3ac267() {
                for (let _0x20e685 = 0x0; _0x20e685 < 0x12c; _0x20e685++) {
                    if (_0x2305bd == !![]) {
                        console['log'](_0x2360bc['green'](_0x337a95() + '\x20[' + _0xb4f4a['name'] + ']\x20Task\x20' + (_0x5801e7 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x5c47f5(_0x3feda7, _0x54a7cd);
                        return;
                    } else {
                        if (_0x1eeb5b)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x35cc09(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x35cc09(0xbb8), await _0x1db968['click']('.zoid-outlet'), await _0x35cc09(0x7d0), await _0x3ac267();
        } catch (_0x468e39) {
            console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0xb4f4a['name'] + ']\x20Task\x20' + (_0x5801e7 + 0x1) + '\x20:\x20' + _0x468e39)), _0x25c36a[0x0]['title'] = 'Failed\x20entry', _0x25c36a[0x0]['description'] = _0xb4f4a['name'] + ':\x20' + _0x468e39, await _0x5c47f5(_0x2da8bd, _0x54a7cd);
        } finally {
            _0x51b9eb && _0x51b9eb['close'](), console['log']('Waiting\x20for\x20' + _0x4d870d['delay'] + '\x20ms'), await _0x35cc09(_0x4d870d['delay']);
        }
    }
}
async function _0x24febe(_0x5bc541, _0x2f0f2b, _0x315e0a, _0x94b4ed) {
    var _0x1a3abe = {}, _0x1cada0 = [], _0x4a819c = {}, _0x506c5f = [
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
    !_0x94b4ed && (_0x94b4ed = {});
    if (_0x2f0f2b != 'ver') {
        _0x5d391b(_0x315e0a['name'] + '\x20Task\x20' + (_0x5bc541 + 0x1) + '\x20/\x20' + _0x94b4ed['length'] + '\x20||\x20File:\x20' + _0x1aba1f + '\x20Proxies:\x20' + _0x41e381), await _0x5860f3(_0x94b4ed, _0x5bc541), _0x1cada0 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x51f778
                },
                {
                    'name': 'Size',
                    'value': '' + _0x94b4ed[_0x5bc541]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4d870d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x231fbf
                }
            ]
        }], _0x4a819c = { 'embeds': _0x1cada0 }, _0x1a3abe = _0x315e0a['data'];
        _0x2f0f2b == 'exp' ? _0x1a3abe['data']['attributes']['email'] = '' + _0x94b4ed[_0x5bc541]['FirstName'] + _0x94b4ed[_0x5bc541]['LastName'] + _0x4d870d['catchall'] : _0x1a3abe['data']['attributes']['email'] = '' + _0x94b4ed[_0x5bc541]['Email'];
        if (_0x94b4ed[_0x5bc541]['Size'] == 'RANDOM') {
        }
        _0x1a3abe['data']['attributes']['properties']['$first_name'] = '' + _0x94b4ed[_0x5bc541]['FirstName'], _0x1a3abe['data']['attributes']['properties']['$last_name'] = '' + _0x94b4ed[_0x5bc541]['LastName'], _0x1a3abe['data']['attributes']['properties']['$address1'] = _0x94b4ed[_0x5bc541]['Address1'] + '\x20' + _0x94b4ed[_0x5bc541]['Address2'] + '\x20' + _0x94b4ed[_0x5bc541]['HouseNumber'], _0x1a3abe['data']['attributes']['properties']['$zip'] = '' + _0x94b4ed[_0x5bc541]['Zip'], _0x1a3abe['data']['attributes']['properties']['$city'] = '' + _0x94b4ed[_0x5bc541]['City'], _0x1a3abe['data']['attributes']['properties']['$country'] = '' + _0x94b4ed[_0x5bc541]['Country'], _0x1a3abe['data']['attributes']['properties']['Size'] = '' + _0x94b4ed[_0x5bc541]['Size'], _0x1a3abe['data']['attributes']['properties']['$phone_number'] = '' + _0x94b4ed[_0x5bc541]['Phone'], _0x1a3abe['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x94b4ed[_0x5bc541]['Follower'];
    }
    if (_0x4d870d['useRandomProxy'] = ![])
        var _0x3557e0 = _0x3840af()[_0x5bc541]['split'](':');
    else
        var _0x2a318e = Math['round'](Math['random']() * (_0x3840af()['length'] - 0x1)), _0x3557e0 = _0x3840af()[_0x2a318e]['split'](':');
    var _0x38e906 = {
        'jar': _0x3fa45c,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x315e0a['url'],
        'headers': _0x315e0a['headers'],
        'body': JSON['stringify'](_0x1a3abe),
        'proxy': 'http://' + _0x3557e0[0x2] + ':' + _0x3557e0[0x3] + '@' + _0x3557e0[0x0] + ':' + _0x3557e0[0x1]
    };
    return _0x2f0f2b != 'ver' && (_0x38e906['url'] = _0x315e0a['url'], _0x38e906['headers'] = _0x315e0a['headers']), _0x2f0f2b == 'ver' && (_0x38e906['method'] = 'GET'), new Promise(function (_0x18181b, _0x2b6c2f) {
        callback = async (_0x3368c0, _0x11b2ae, _0x247333) => {
            !_0x3368c0 && _0x11b2ae['statusCode'] == 0xca || !_0x3368c0 && _0x11b2ae['statusCode'] == 0xc8 ? (_0x2f0f2b != 'ver' && await _0x5c47f5(_0x3feda7, _0x4a819c), _0x18181b(console['log'](_0x2360bc['green'](_0x337a95() + '\x20[' + _0x315e0a['name'] + ']\x20Task\x20' + (_0x5bc541 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x2f0f2b != 'ver' && (_0x1cada0[0x0]['title'] = 'Failed\x20entry', _0x1cada0[0x0]['description'] = '' + _0x3368c0, await _0x5c47f5(_0x2da8bd, _0x4a819c)), _0x2b6c2f(console['log'](_0x337a95() + '\x20[' + _0x315e0a['name'] + ']\x20Task\x20' + (_0x5bc541 + 0x1) + ':\x20' + _0x3368c0)));
        };
        try {
            _0x2f0f2b != 'ver' && console['log'](_0x337a95() + '\x20[' + _0x315e0a['name'] + ']\x20Task\x20' + (_0x5bc541 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1a3abe['data']['attributes']['email']), _0x246561(_0x38e906, callback);
        } catch (_0x28cc4e) {
            console['log'](_0x337a95() + '\x20Task\x20' + (_0x5bc541 + 0x1) + ':\x20' + _0x28cc4e);
        }
    });
}
;
async function _0x570cfb() {
    await _0x193349(), console['clear']();
    if (_0x231fbf != 'devkey') {
        let _0x460084 = await _0x4ba551['autoUpdate']();
        if (_0x460084 === 'yes')
            return _0x5785e5('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x5e03a1 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x35cc09(0x2710);
        ;
    }
    await _0x1ce060(_0x5e03a1);
    if (_0x16f99d === ![])
        return console['log']('Closing\x20Browser'), await _0x35cc09(0xbb8);
    else
        try {
            var _0x4643ea = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x51f778
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x231fbf
                    }
                ]
            }];
            const _0x28d770 = { 'embeds': _0x4643ea };
            await _0x5c47f5(_0x33cb5d, _0x28d770);
            async function _0x2bef25() {
                _0x5d391b('JRaffles\x20' + _0x231fbf), console['clear'](), console['log']('Welcome\x20to\x20' + _0x2360bc['cyan']('JRaffles();') + '\x20' + _0x231fbf), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0xa051a5 = 0x0; _0xa051a5 < _0xa60771['length']; _0xa051a5++) {
                    if (_0xa60771[_0xa051a5]['name'] === 'Reload\x20Settings' || _0xa60771[_0xa051a5]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0xa051a5 + ')\x20[' + _0xa60771[_0xa051a5]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0xa60771['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0xa60771['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x174000();
                if (_0xa60771[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x188e75(_0xa60771[taskModule]['modules']);
                    var _0x162d9c = _0xa60771[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x536e24 = await _0x1a9c65();
                    await _0x1b7620(_0x536e24), await _0x5395a8();
                    var _0x4c285c = await _0x25ba85();
                    return await afewFunction(_0x5769cf[_0x306c51], 'nor', _0x162d9c, _0x4c285c, _0x536e24), _0x2bef25();
                } else {
                    if (_0xa60771[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x188e75(_0xa60771[taskModule]['modules']);
                        var _0x162d9c = _0xa60771[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x536e24 = await _0x1a9c65(), _0x2f951f = await _0x25ba85();
                            console['log']('Starting\x20' + _0x2f951f['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x52352c = 0x0; _0x52352c < _0x2f951f['length']; _0x52352c++) {
                                console['log'](_0x337a95() + '\x20[' + _0x162d9c['name'] + ']\x20Task\x20' + (_0x52352c + 0x1) + ':\x20Getting\x20Session'), await _0x2b5fd9(_0x52352c, 'nor', _0x162d9c, _0x2f951f, _0x536e24), console['log'](_0x337a95() + '\x20[' + _0x162d9c['name'] + ']\x20Sleeping\x20for\x20' + _0x4d870d['MahaDelay'] + '\x20ms'), await _0x35cc09(_0x4d870d['MahaDelay']);
                            }
                            ;
                            return _0x2bef25();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x536e24 = await _0x1a9c65();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x2437f9(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x52352c = 0x0; _0x52352c < links['length']; _0x52352c++) {
                                    _0x162d9c['url'] = links[_0x52352c], console['log'](_0x337a95() + '\x20[' + _0x162d9c['name'] + ']\x20Task\x20' + (_0x52352c + 0x1) + ':\x20Getting\x20Session'), await _0x2b5fd9(_0x52352c, 'ver', _0x162d9c, _0x2f951f, _0x536e24), console['log'](_0x337a95() + '\x20[' + _0x162d9c['name'] + ']\x20Sleeping\x20for\x20' + _0x4d870d['verificationDelay'] + '\x20ms'), await _0x35cc09(_0x4d870d['verificationDelay']);
                                }
                                ;
                                return _0x2bef25();
                            }
                        }
                    } else {
                        if (_0xa60771[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x536e24 = await _0x1a9c65(), _0x36050d = await _0x25ba85();
                            return await _0x4326ad(_0x36050d, _0x536e24), await _0x35cc09(0x1388), _0x2bef25();
                        } else {
                            if (_0xa60771[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x188e75(_0xa60771[taskModule]['modules']);
                                var _0x162d9c = _0xa60771[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x488046 = await _0x25ba85();
                                    console['log']('Starting\x20' + _0x2360bc['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x52352c = 0x0; _0x52352c < _0x488046['length']; _0x52352c++) {
                                        console['log'](_0x337a95() + '\x20[' + _0x162d9c['name'] + ']\x20Task\x20' + (_0x52352c + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x24febe(_0x52352c, 'nor', _0x162d9c, _0x488046);
                                        } catch {
                                            console['log'](_0x2360bc['red'](_0x337a95() + '\x20[' + _0x162d9c['name'] + ']\x20Task\x20' + (_0x52352c + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](_0x337a95() + '\x20[' + _0x162d9c['name'] + ']\x20Sleeping\x20for\x20' + _0x4d870d['delay'] + '\x20ms'), await _0x35cc09(_0x4d870d['delay']);
                                    }
                                    return _0x2bef25();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x2437f9(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x52352c = 0x0; _0x52352c < links['length']; _0x52352c++) {
                                            try {
                                                _0x162d9c['url'] = links[_0x52352c], console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Task\x20' + (_0x52352c + 0x1) + ':\x20Getting\x20Session'), await _0x24febe(_0x52352c, 'ver', _0x162d9c), console['log'](_0x337a95() + '\x20[' + _0xa60771[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x4d870d['verificationDelay'] + '\x20ms'), await _0x35cc09(_0x4d870d['verificationDelay']);
                                            } catch (_0x16368e) {
                                                console['log'](_0x16368e);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x2bef25();
                                    }
                                }
                                ;
                            } else {
                                if (_0xa60771[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x188e75(_0xa60771[taskModule]['modules']);
                                    var _0x162d9c = _0xa60771[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x340260('https://bouncewear.com/nl/account/register', _0x162d9c);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0xa60771[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x188e75(_0xa60771[taskModule]['modules']);
                                        var _0x162d9c = _0xa60771[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x536e24 = await _0x1a9c65(), _0x442df4 = await _0x25ba85();
                                            return await _0x35d6e8('https://patta.nl/account/register', _0x162d9c, _0x442df4, _0x536e24), _0x2bef25();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x536e24 = await _0x1a9c65(), _0x442df4 = await _0x25ba85();
                                                return await _0x424f6a('', _0x162d9c, _0x442df4, _0x536e24), _0x2bef25();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0xa60771[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await _0x188e75(_0xa60771[taskModule]['modules']);
                                            var _0x162d9c = _0xa60771[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x536e24 = await _0x1a9c65(), _0x3991b1 = await _0x25ba85();
                                                return await _0x424a52('https://www.kickz.com/nl/login/', _0x162d9c, _0x3991b1, _0x536e24), _0x2bef25();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x536e24 = await _0x1a9c65(), _0x3991b1 = await _0x25ba85();
                                                    return await _0x2d6830(_0x162d9c, _0x3991b1, _0x536e24), _0x2bef25();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0xa60771[taskModule]['name'] == 'JD') {
                                                taskFunction = await _0x188e75(_0xa60771[taskModule]['modules']);
                                                var _0x162d9c = _0xa60771[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x536e24 = await _0x1a9c65(), _0x1dbefc = await _0x25ba85();
                                                    return await _0x46da9f(_0x162d9c, _0x1dbefc, _0x536e24), _0x2bef25();
                                                }
                                            } else {
                                                if (_0xa60771[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x551225 = 0x0;
                                                    for (const _0x35dbeb in _0x4d870d) {
                                                        console['log']('(' + _0x551225 + ')\x20' + _0x35dbeb + '\x20:\x20' + _0x4d870d[_0x35dbeb]), _0x551225++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x551225 + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x404117 = await _0x2eab93();
                                                    if (_0x404117 == _0x551225)
                                                        return _0x2bef25();
                                                    console['clear'];
                                                    var _0x4ec7d0 = 0x0;
                                                    for (var _0x4c441b in _0x4d870d) {
                                                        if (_0x404117 == _0x4ec7d0) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x4c441b + '\x20:'), _0x4d870d[_0x4c441b] = await _0x281df7(), _0x20810f['writeFileSync']('../settings.json', JSON['stringify'](_0x4d870d));
                                                            break;
                                                        } else
                                                            _0x4ec7d0++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await _0x35cc09(0xbb8), _0x2bef25();
                                                } else {
                                                    if (_0xa60771[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await _0x193349(), _0x2bef25();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            _0xa60771[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x55e6c7 = await _0x4202b4();
                                                            _0x55e6c7 == 'ModuleVoorDeBoys' ? (await _0x1b7620(), await _0x5395a8(), await afewFunction(_0x5769cf[_0x306c51], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x35cc09(0xbb8));
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
            await _0x2bef25();
        } catch (_0x5206d6) {
            return console['log'](_0x5206d6), await _0x35cc09(0x3a98);
        }
}
;
_0x5d391b('JRaffles\x20' + _0x231fbf), _0x193349(), _0x570cfb();