var _0x47ef0d = require('exe');
const { execFile: _0x49288e } = require('child_process'), _0x16a300 = require('puppeteer-extra'), _0x179bad = require('puppeteer-extra-plugin-recaptcha'), _0x576b38 = require('puppeteer-extra-plugin-stealth'), _0x3e0bfa = require('chalk'), _0x3db4c3 = require('node-bash-title'), _0x1756c4 = require('fs'), _0x4a110b = require('axios'), _0xf61aa1 = require('papaparse');
var _0x3e423f = require('random-name');
const _0x49d6e9 = require('request');
var _0x1b8136 = require('prompt');
const _0x1544f9 = _0x49d6e9['jar']();
var _0x51a9b9 = {};
const _0x59ba1c = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x548a28 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x5d8786 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x5e8dcf = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE';
var _0x2c7c0e = 'https://discord.com/api/webhooks/', _0x2a10b9 = '' + _0x2c7c0e + _0x5d8786, _0xa2b78c = '' + _0x2c7c0e + _0x5e8dcf, _0x1f6165 = '' + _0x2c7c0e + _0x59ba1c, _0x2e3634 = '' + _0x2c7c0e + _0x548a28;
const _0x513a23 = JSON['parse'](_0x1756c4['readFileSync']('../package.json', 'utf-8')), _0x5b009f = _0x513a23['version'];
var _0x58db63, _0x48a573, _0x5dcd18, _0x3c0cfa, _0xf05026, _0x5abc4b, _0x4a8559;
const _0x2ccb02 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x4eb88c = ![];
const _0x4e7030 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x131efa = '0123456789';
var _0x97020f = _0x4e7030['split']('');
const _0x386796 = require('auto-git-update'), { PageEmittedEvents: _0x17217a } = require('puppeteer'), { getRandomValues: _0x557de6 } = require('crypto'), { resolve: _0xdcb0cf } = require('path'), _0x428080 = {
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
}, _0x1be884 = new _0x386796(_0x428080);
async function _0x8af8cf() {
    _0xf05026 = _0x1756c4['readdirSync']('../proxies'), _0x3c0cfa = _0x1756c4['readdirSync']('../tasks'), _0x51a9b9 = JSON['parse'](_0x1756c4['readFileSync']('../settings.json', 'utf-8')), !_0x51a9b9['delay'] && (_0x51a9b9['delay'] = 0x2710, _0x1756c4['writeFileSync']('../settings.json', JSON['stringify'](_0x51a9b9))), !_0x51a9b9['captchaKey'] && (_0x51a9b9['captchaKey'] = '', _0x1756c4['writeFileSync']('../settings.json', JSON['stringify'](_0x51a9b9))), !_0x51a9b9['useRandomProxy'] && (_0x51a9b9['useRandomProxy'] = !![], _0x1756c4['writeFileSync']('../settings.json', JSON['stringify'](_0x51a9b9))), !_0x51a9b9['webhook'] && (_0x51a9b9['webhook'] = '', _0x1756c4['writeFileSync']('../settings.json', JSON['stringify'](_0x51a9b9))), _0x2c7c0e = _0x51a9b9['webhook'], _0x5abc4b = _0x51a9b9['licenseKey'];
}
let _0x47f801, _0x464ec1 = [], _0x3a564c;
const _0x4378a2 = _0x134db5 => new Promise(_0x593a10 => setTimeout(_0x593a10, _0x134db5));
function _0x2f760e(_0x232569, _0x32b303) {
    return Math['floor'](Math['random']() * (_0x32b303 - _0x232569 + 0x1) + _0x232569);
}
async function _0x2bc78f(_0x1f40d7) {
    return _0x4a110b['get']('https://api.hyper.co/v4/licenses/' + _0x1f40d7, { 'headers': { 'Authorization': 'Bearer\x20' + _0x2ccb02 } })['then'](_0x290b4b => _0x290b4b['data'])['catch'](() => null);
}
;
async function _0x17f1b1(_0x4368f5) {
    console['clear']();
    if (_0x4368f5 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x533c14 = await _0x1b8136['get']('License');
        _0x533c14['License'] == 'AWGH-0N92-JE6S-HOHU' && console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), _0x4368f5 = _0x533c14['License'], _0x51a9b9['licenseKey'] = _0x4368f5, _0x5abc4b = _0x4368f5, _0x1756c4['writeFileSync']('../settings.json', JSON['stringify'](_0x51a9b9));
    }
    console['log']('Checking\x20license\x20' + _0x5abc4b + '...'), await _0x4378a2(0x5dc);
    const _0x2462d2 = await _0x2bc78f(_0x4368f5);
    _0x4a8559 = JSON['stringify'](_0x2462d2['user']['username'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x2462d2)
        return console['log']('License\x20not\x20found');
    if (!_0x2462d2['user'])
        return console['log']('License\x20not\x20bound');
    return _0x2462d2['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x4eb88c = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x4eb88c = ![]);
}
async function _0x48c586() {
    var _0xe5703f = await _0x1b8136['get']('Module');
    return console['clear'](), _0xe5703f['Module'];
}
;
async function _0x436e6d() {
    var _0x4153b5 = await _0x1b8136['get']('Setting');
    return console['clear'](), _0x4153b5['Setting'];
}
async function _0x16312c() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x7ca30 = 0x0; _0x7ca30 < _0x3c0cfa['length']; _0x7ca30++) {
        console['log']('\x20(' + _0x7ca30 + ')\x20' + _0x3c0cfa[_0x7ca30]);
    }
    console['log']('');
    var _0x3e188c = await _0x1b8136['get']('Task'), _0x88677a = _0x1756c4['readFileSync']('../tasks/' + _0x3c0cfa[_0x3e188c['Task']], 'utf-8');
    return _0x5dcd18 = _0xf61aa1['parse'](_0x88677a, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x3e0bfa['blue'](_0x3c0cfa[_0x3e188c['Task']])), _0x58db63 = _0x3c0cfa[_0x3e188c['Task']], _0x5dcd18;
}
async function _0x31669b() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x291061 = 0x0; _0x291061 < _0xf05026['length']; _0x291061++) {
        console['log']('\x20(' + _0x291061 + ')\x20' + _0xf05026[_0x291061]);
    }
    console['log']('');
    var _0x20db1a = await _0x1b8136['get']('Proxies'), _0x278646 = _0x1756c4['readFileSync']('../proxies/' + _0xf05026[_0x20db1a['Proxies']], 'utf-8')['split']('\x0a');
    let _0x47bda6 = _0x278646['map']((_0xeee7a8, _0xc70206) => {
        sanatizeProxy = _0xeee7a8['replace']('\x0d', '');
        if (_0x278646[_0xc70206 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x48a573 = _0xf05026[_0x20db1a['Proxies']], console['clear'](), _0x47bda6;
}
async function _0x102f17() {
    var _0x281480 = await _0x1b8136['get']('Value');
    return console['clear'](), _0x281480['Value'];
}
async function _0x656fe8(_0x5055b3) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x4cf299 = 0x0; _0x4cf299 < _0x5055b3['length']; _0x4cf299++) {
        console['log']('\x20(' + _0x4cf299 + ')\x20[' + _0x5055b3[_0x4cf299]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x2b673b = await _0x1b8136['get']('Module');
    return _0x2b673b['Module'];
}
async function _0x3e00b4() {
    var _0x1a32b0 = await _0x1b8136['get']('Password');
    return console['clear'](), _0x1a32b0['Password'];
}
;
async function _0x2d37b9() {
    var _0x39b3b3 = await _0x1b8136['get']('Links');
    return _0x39b3b3['Links'];
}
;
async function _0xae1082() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x22f8b0 = 0x0; _0x22f8b0 < _0x464ec1['length']; _0x22f8b0++) {
        console['log']('\x20(' + _0x22f8b0 + ')\x20' + _0x464ec1[_0x22f8b0]);
    }
    ;
    console['log']();
    let _0x19a903 = await _0x1b8136['get']('Product');
    console['clear'](), _0x3a564c = _0x19a903['Product'];
    return;
}
;
function _0x1aa97b() {
    var _0x54c73b = new Date(Date['now']())['toLocaleTimeString']();
    return _0x54c73b;
}
;
const _0x350dc5 = [
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
async function _0xf9223d(_0x551cf2, _0x3f1ded) {
    let _0x2ab0fa = { 'headers': { 'content-type': 'application/json' } };
    await _0x4a110b['post'](_0x551cf2, _0x3f1ded, _0x2ab0fa);
}
;
async function _0x3bbefd(_0x4d758e, _0x2382c1) {
    var _0x5d6c6e = _0x4d758e[_0x2382c1]['Address1']['split'](''), _0x1e60b8 = _0x4d758e[_0x2382c1]['Address2']['split'](''), _0x48b37c = _0x4d758e[_0x2382c1]['Email']['split']('@');
    for (var _0x40d27e = 0x0; _0x40d27e < _0x5d6c6e['length']; _0x40d27e++) {
        if (_0x5d6c6e[_0x40d27e] == 'X') {
            var _0x26d5ae = Math['round'](Math['random']() * (_0x4e7030['length'] - 0x1));
            _0x5d6c6e[_0x40d27e] = _0x97020f[_0x26d5ae];
        }
    }
    ;
    for (var _0x40d27e = 0x0; _0x40d27e < _0x1e60b8['length']; _0x40d27e++) {
        if (_0x1e60b8[_0x40d27e] == 'X') {
            var _0x26d5ae = Math['round'](Math['random']() * (_0x4e7030['length'] - 0x1));
            _0x1e60b8[_0x40d27e] = _0x97020f[_0x26d5ae];
        }
    }
    ;
    _0x4d758e[_0x2382c1]['FirstName'] == 'RANDOM' && (_0x4d758e[_0x2382c1]['FirstName'] = _0x3e423f['first']());
    _0x4d758e[_0x2382c1]['LastName'] == 'RANDOM' && (_0x4d758e[_0x2382c1]['LastName'] = _0x3e423f['last']());
    _0x48b37c[0x0] == 'RANDOM' ? _0x48b37c[0x0] = '' + _0x3e423f['first']() + _0x3e423f['last']() + '@' : _0x48b37c[0x0] = _0x48b37c[0x0] + '@';
    _0x4d758e[_0x2382c1]['Phone'] == 'RANDOM' && (_0x4d758e[_0x2382c1]['Phone'] = _0x2f760e(0x3b9aca00, 0x2540be3ff));
    if (_0x4d758e[_0x2382c1]['Follower'] == 'RANDOM') {
        var _0x5624fe = _0x2f760e(0x1, 0x270f);
        _0x4d758e[_0x2382c1]['Follower'] = '' + _0x3e423f['first']() + _0x3e423f['last']() + _0x5624fe;
    }
    _0x4d758e[_0x2382c1]['Email'] = _0x48b37c['join'](''), _0x4d758e[_0x2382c1]['Address1'] = _0x5d6c6e['join'](''), _0x4d758e[_0x2382c1]['Address2'] = _0x1e60b8['join']('');
    return;
}
;
function _0x123e14() {
    let _0x413dfc = proxyFile['split']('\x0a'), _0x866c87 = _0x413dfc['map']((_0x3434c3, _0x48def1) => {
        sanatizeProxy = _0x3434c3['replace']('\x0d', '');
        if (_0x413dfc[_0x48def1 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x866c87;
}
;
async function _0x71605(_0x362869) {
    var _0x2186d0 = _0x362869[0x1]['split'](':');
    const _0x3979f8 = await _0x16a300['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x2186d0[0x0] + ':' + _0x2186d0[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x2173ab = await _0x3979f8['newPage']();
        await _0x2173ab['authenticate']({
            'username': '' + _0x2186d0[0x2],
            'password': '' + _0x2186d0[0x3]
        }), console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x2173ab['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2173ab['setRequestInterception'](!![]), _0x2173ab['on']('request', _0x83d137 => {
            _0x83d137['resourceType']() === 'image' || _0x83d137['resourceType']() === 'font' || _0x83d137['resourceType']() === 'media' ? _0x83d137['abort']() : _0x83d137['continue']();
        }), await _0x2173ab['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x2173ab['waitForTimeout'](0xbb8), await _0x2173ab['waitForSelector']('.product-card');
        const _0xf855a1 = await _0x2173ab['$$eval']('a.product-card', _0x30e2f0 => {
            return _0x30e2f0['map'](_0x4d412b => _0x4d412b['href']);
        });
        return _0x464ec1 = _0xf855a1;
    } catch (_0x35c35c) {
        console['log']('\x20' + _0x35c35c);
    } finally {
        _0x3979f8['close'](), console['clear']();
    }
}
;
async function _0xb0b156(_0xe6bbf, _0x5d40b3, _0x3c9c80, _0x32204b, _0x4438b9) {
    await _0x3bbefd(_0x32204b, _0xe6bbf);
    var _0x256ccf = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x4a8559
            },
            {
                'name': 'Size',
                'value': '' + _0x32204b[_0xe6bbf]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x51a9b9['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x5b009f
            }
        ]
    }];
    const _0x542212 = { 'embeds': _0x256ccf };
    if (_0x51a9b9['useRandomProxy'] = ![])
        var _0x478e5d = _0x4438b9[_0xe6bbf]['split'](':');
    else
        var _0x32e594 = Math['round'](Math['random']() * (_0x4438b9['length'] - 0x1)), _0x478e5d = _0x4438b9[_0x32e594]['split'](':');
    var _0x351cf9 = _0x3c9c80['data'];
    _0x5d40b3 == 'exp' ? _0x351cf9['data']['attributes']['email'] = '' + _0x32204b[_0xe6bbf]['FirstName'] + _0x32204b[_0xe6bbf]['LastName'] + _0x51a9b9['catchall'] : _0x351cf9['data']['attributes']['email'] = '' + _0x32204b[_0xe6bbf]['Email'];
    _0x351cf9['data']['attributes']['properties']['$first_name'] = '' + _0x32204b[_0xe6bbf]['FirstName'], _0x351cf9['data']['attributes']['properties']['$last_name'] = '' + _0x32204b[_0xe6bbf]['LastName'], _0x351cf9['data']['attributes']['properties']['$address1'] = _0x32204b[_0xe6bbf]['Address1'] + '\x20' + _0x32204b[_0xe6bbf]['Address2'], _0x351cf9['data']['attributes']['properties']['$zip'] = '' + _0x32204b[_0xe6bbf]['Zip'], _0x351cf9['data']['attributes']['properties']['$city'] = '' + _0x32204b[_0xe6bbf]['City'], _0x351cf9['data']['attributes']['properties']['$country'] = '' + _0x32204b[_0xe6bbf]['Country'], _0x351cf9['data']['attributes']['properties']['Size'] = '' + _0x32204b[_0xe6bbf]['Size'], _0x351cf9['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x32204b[_0xe6bbf]['Follower'];
    var _0x2efd92 = {
        'jar': _0x1544f9,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x3c9c80['url'],
        'headers': _0x3c9c80['headers'],
        'body': JSON['stringify'](_0x351cf9),
        'proxy': 'http://' + _0x478e5d[0x2] + ':' + _0x478e5d[0x3] + '@' + _0x478e5d[0x0] + ':' + _0x478e5d[0x1]
    };
    return _0x5d40b3 === 'ver' && (_0x2efd92['method'] = 'GET'), new Promise(function (_0x14c80, _0x40031b) {
        callback = async (_0x13a5f6, _0x4a5cc0, _0x1bdca1) => {
            !_0x13a5f6 && _0x4a5cc0['statusCode'] == 0xca || !_0x13a5f6 && _0x4a5cc0['statusCode'] == 0xc8 ? _0x14c80(console['log'](_0x3e0bfa['green'](_0x1aa97b() + '\x20[' + _0x3c9c80['name'] + ']\x20Task\x20' + (_0xe6bbf + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x256ccf[0x0]['title'] = 'Failed\x20entry', _0x256ccf[0x0]['description'] = '' + _0x13a5f6, await _0xf9223d(_0x2e3634, _0x542212), _0x40031b(console['log'](_0x1aa97b() + '\x20[' + _0x3c9c80['name'] + ']\x20Task\x20' + (_0xe6bbf + 0x1) + ':\x20' + _0x13a5f6)));
        };
        try {
            _0x5d40b3 === 'ver' ? console['log'](_0x1aa97b() + '\x20[' + _0x3c9c80['name'] + ']\x20Task\x20' + (_0xe6bbf + 0x1) + ':\x20Verifying.') : console['log'](_0x1aa97b() + '\x20[' + _0x3c9c80['name'] + ']\x20Task\x20' + (_0xe6bbf + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x351cf9['data']['attributes']['email']), _0x49d6e9(_0x2efd92, callback);
        } catch (_0x551ccb) {
            console['log'](_0x1aa97b() + '\x20Task\x20' + (_0xe6bbf + 0x1) + ':\x20' + _0x551ccb);
        }
    });
}
;
async function _0x45ff0a(_0x36f75c, _0x13ec77) {
    _0x16a300['use'](_0x576b38()), _0x16a300['use'](_0x179bad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x51a9b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5e6a8a = 0x0; _0x5e6a8a < _0x36f75c['length']; _0x5e6a8a++) {
        var _0x4d59e8 = '', _0x1a33f8 = 0x0, _0x1b96ff = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4a8559
                },
                {
                    'name': 'Product',
                    'value': '' + _0x36f75c[_0x5e6a8a]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x36f75c[_0x5e6a8a]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x51a9b9['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x5b009f
                }
            ]
        }];
        const _0x2448d6 = { 'embeds': _0x1b96ff };
        await _0x3bbefd(_0x36f75c, _0x5e6a8a);
        if (_0x36f75c[_0x5e6a8a]['Email'] == '' || _0x36f75c[_0x5e6a8a]['FirstName'] == '' || _0x36f75c[_0x5e6a8a]['LastName'] == '' || _0x36f75c[_0x5e6a8a]['Country'] == '' || _0x36f75c[_0x5e6a8a]['Size'] == '' || _0x36f75c[_0x5e6a8a]['Address1'] == '' || _0x36f75c[_0x5e6a8a]['Zip'] == '') {
            console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x36f75c[_0x5e6a8a]['Email'] == '' || _0x36f75c[_0x5e6a8a]['FirstName'] == '' || _0x36f75c[_0x5e6a8a]['LastName'] == '' || _0x36f75c[_0x5e6a8a]['Country'] == '' || _0x36f75c[_0x5e6a8a]['Size'] == '' || _0x36f75c[_0x5e6a8a]['Address1'] == '' || _0x36f75c[_0x5e6a8a]['Zip'] == '' || _0x36f75c[_0x5e6a8a]['Phone'] == '') {
            console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x1c27c5 = '' + _0x36f75c[_0x5e6a8a]['Url'];
        if (_0x51a9b9['useRandomProxy'] = ![])
            var _0x117cae = _0x13ec77[_0x5e6a8a]['split'](':');
        else
            var _0x3549d0 = Math['round'](Math['random']() * (_0x13ec77['length'] - 0x1)), _0x117cae = _0x13ec77[_0x3549d0]['split'](':');
        const _0x24ccc9 = await _0x16a300['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x117cae[0x0] + ':' + _0x117cae[0x1]]
        });
        try {
            const _0x2575ce = await _0x24ccc9['newPage']();
            await _0x2575ce['authenticate']({
                'username': '' + _0x117cae[0x2],
                'password': '' + _0x117cae[0x3]
            }), console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2575ce['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2575ce['setRequestInterception'](!![]), _0x2575ce['on']('request', _0x224bdf => {
                _0x224bdf['resourceType']() === 'image' || _0x224bdf['resourceType']() === 'font' || _0x224bdf['resourceType']() === 'media' ? _0x224bdf['abort']() : _0x224bdf['continue']();
            }), await _0x2575ce['goto'](_0x1c27c5), await _0x4378a2(0xbb8), await _0x2575ce['waitForSelector']('.control__JhutY'), await _0x2575ce['click']('.control__JhutY'), await _0x4378a2(0x1f4);
            if (_0x36f75c[_0x5e6a8a]['Size'] != 'RANDOM')
                try {
                    const _0x26caed = await _0x2575ce['$x']('//div[contains(text(),\x20\x27' + _0x36f75c[_0x5e6a8a]['Size'] + '\x27)]');
                    await _0x26caed[0x0]['click']();
                } catch {
                    console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x3218f3 = await _0x2575ce['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x331cc9 = Math['round'](Math['random']() * (_0x3218f3['length'] - 0x1));
                await _0x3218f3[_0x331cc9]['click']();
            }
            await _0x4378a2(0x4b0);
            const _0x380220 = await _0x2575ce['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x380220[0x0]['click'](), await _0x2575ce['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x2575ce['type']('input[name=\x22email\x22]', '' + _0x36f75c[_0x5e6a8a]['Email']), await _0x4378a2(0x640), await _0x2575ce['type']('input[name=\x22phone\x22]', '' + _0x36f75c[_0x5e6a8a]['Phone']), await _0x4378a2(0x4b0), await _0x2575ce['click']('button.btn.continue-button__1RtsS'), await _0x4378a2(0x4b0);
            try {
                await _0x2575ce['type']('input[name=\x22firstName\x22]', '' + _0x36f75c[_0x5e6a8a]['FirstName']), await _0x4378a2(0x258);
            } catch {
                const _0x169ee4 = await _0x2575ce['$$eval']('.invalid-feedback\x20>\x20div', _0x294dbf => {
                    return _0x294dbf['map'](_0x131010 => _0x131010['innerText']);
                });
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x20' + _0x169ee4));
                continue;
            }
            await _0x2575ce['type']('input[name=\x22lastName\x22]', '' + _0x36f75c[_0x5e6a8a]['LastName']), await _0x4378a2(0xc8), await _0x2575ce['type']('input[name=\x22instagramUsername\x22]', '' + _0x36f75c[_0x5e6a8a]['Follower']), await _0x4378a2(0x4b0), await _0x2575ce['click']('button.btn.continue-button__1RtsS'), await _0x4378a2(0x3e8), console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x2575ce['select']('select[name=\x22country\x22]', '' + _0x36f75c[_0x5e6a8a]['Country']), await _0x4378a2(0x2bc), await _0x2575ce['type']('input[name=\x22streetName\x22]', '' + _0x36f75c[_0x5e6a8a]['Address1']), await _0x4378a2(0x258), await _0x2575ce['type']('input[name=\x22houseNumber\x22]', _0x36f75c[_0x5e6a8a]['HouseNumber'] + '\x20' + _0x36f75c[_0x5e6a8a]['Address2']), await _0x4378a2(0xc8), await _0x2575ce['type']('input[name=\x22postalCode\x22]', '' + _0x36f75c[_0x5e6a8a]['Zip']), await _0x4378a2(0x1f4), await _0x2575ce['type']('input[name=\x22city\x22]', '' + _0x36f75c[_0x5e6a8a]['City']), await _0x4378a2(0x4b0), await _0x2575ce['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x4378a2(0x4b0), await _0x2575ce['click']('button.btn.continue-button__1RtsS'), await _0x4378a2(0x4b0), console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x2575ce['solveRecaptchas'](), console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x4378a2(0xbb8), await _0x2575ce['click']('button.btn.continue-button__1RtsS'), await _0x4378a2(0x1388), console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2575ce['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2575ce['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4378a2(0x4b0), await _0x2575ce['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x36f75c[_0x5e6a8a]['CardNumber']), await _0x4378a2(0x320), await _0x2575ce['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2575ce['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x36f75c[_0x5e6a8a]['ExpiryDate']), await _0x4378a2(0x4b0), await _0x2575ce['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2575ce['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x36f75c[_0x5e6a8a]['CVV']), await _0x4378a2(0x226), await _0x2575ce['type']('input[name=\x22holderName\x22]', '' + _0x36f75c[_0x5e6a8a]['NameOnCard']), await _0x4378a2(0x226), await _0x2575ce['click']('button.adyen-checkout__button'), console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x2575ce['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x4378a2(0xbb8), console['log'](_0x3e0bfa['green'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0xf9223d(_0x1f6165, _0x2448d6);
            } catch {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x8c0b9c) {
            console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x20' + _0x8c0b9c), _0x1b96ff[0x0]['title'] = 'Failed\x20' + _0x350dc5[taskModule]['name'] + '\x20entry', _0x1b96ff[0x0]['description'] = '' + _0x8c0b9c, await _0xf9223d(_0x2e3634, _0x2448d6), _0x4d59e8 = 'yes';
        } finally {
            _0x24ccc9['close']();
            if (_0x4d59e8 == 'yes' && _0x1a33f8 != 0x5) {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x5e6a8a + 0x1) + '\x20:\x20Retrying')), _0x5e6a8a = _0x5e6a8a - 0x1, _0x1a33f8 = _0x1a33f8 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x51a9b9['footshopDelay'] + '\x20ms'), await _0x4378a2(_0x51a9b9['footshopDelay']);
        }
    }
}
afewFunction = async (_0x1c88f5, _0x342db3, _0x1e0498, _0x2ac677, _0x36888b) => {
    for (var _0x2bba6 = 0x0; _0x2bba6 < _0x2ac677['length']; _0x2bba6++) {
        var _0x17c438 = '', _0x330a4c = 0x0;
        _0x3db4c3(_0x1e0498['name'] + '\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20/\x20' + _0x2ac677['length'] + '\x20||\x20File:\x20' + _0x58db63 + '\x20Proxies:\x20' + _0x48a573), await _0x3bbefd(_0x2ac677, _0x2bba6);
        var _0x2fcb83 = [{
            'type': 'rich',
            'title': 'Succesful\x20AFEW\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4a8559
                },
                {
                    'name': 'Product',
                    'value': '' + _0x1c88f5
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2ac677[_0x2bba6]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x51a9b9['AfewDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x5b009f
                }
            ]
        }];
        const _0x3427e7 = { 'embeds': _0x2fcb83 };
        if (_0x2ac677[_0x2bba6]['Email'] == '' || _0x2ac677[_0x2bba6]['FirstName'] == '' || _0x2ac677[_0x2bba6]['LastName'] == '' || _0x2ac677[_0x2bba6]['Country'] == '' || _0x2ac677[_0x2bba6]['Size'] == '' || _0x2ac677[_0x2bba6]['Address1'] == '' || _0x2ac677[_0x2bba6]['Zip'] == '') {
            console['log'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x51a9b9['useRandomProxy'] = ![])
            var _0x3b0b26 = _0x36888b[_0x2bba6]['split'](':');
        else
            var _0x142fee = Math['round'](Math['random']() * (_0x36888b['length'] - 0x1)), _0x3b0b26 = _0x36888b[_0x142fee]['split'](':');
        const _0x15d552 = await _0x16a300['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3b0b26[0x0] + ':' + _0x3b0b26[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5adf98 = await _0x15d552['newPage']();
            await _0x5adf98['setDefaultNavigationTimeout'](0x1d4c0), await _0x5adf98['authenticate']({
                'username': '' + _0x3b0b26[0x2],
                'password': '' + _0x3b0b26[0x3]
            }), console['log'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5adf98['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5adf98['setRequestInterception'](!![]), _0x5adf98['on']('request', _0x1bb404 => {
                _0x1bb404['resourceType']() === 'image' || _0x1bb404['resourceType']() === 'font' || _0x1bb404['resourceType']() === 'media' ? _0x1bb404['abort']() : _0x1bb404['continue']();
            }), await _0x5adf98['goto'](_0x1c88f5, { 'waitUntil': 'networkidle2' }), console['log'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x5adf98['waitForTimeout'](0xfa0), console['log'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x5adf98['waitForTimeout'](0x320);
            if (_0x2ac677[_0x2bba6]['Size'] == 'RANDOM') {
                console['log'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x168729 = await _0x5adf98['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x1130eb => {
                    return _0x1130eb['map'](_0x26723d => _0x26723d['href']);
                });
                var _0x504047 = Math['round'](Math['random']() * (_0x168729['length'] - 0x1));
                await _0x5adf98['goto']('' + _0x168729[_0x504047]);
            } else {
                console['log'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2ac677[_0x2bba6]['Size']);
                try {
                    const _0x408e79 = await _0x5adf98['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x2ac677[_0x2bba6]['Size'] + '\x22]\x20>\x20a', _0x14c565 => {
                        return _0x14c565['map'](_0x44f7fa => _0x44f7fa['href']);
                    });
                    await _0x5adf98['goto']('' + _0x408e79[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x2ec9e0) {
                    console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20' + _0x2ec9e0 + '\x20Size\x20not\x20found')), _0x2fcb83[0x0]['title'] = 'Failed\x20entry', _0x2fcb83[0x0]['description'] = 'Size\x20not\x20found', await _0xf9223d(_0x2e3634, _0x3427e7);
                    continue;
                }
            }
            await _0x5adf98['waitForTimeout'](0x258), await _0x5adf98['type']('#raffle-instagram', '' + _0x2ac677[_0x2bba6]['Follower'], { 'delay': 0x64 }), await _0x5adf98['waitForTimeout'](0x384), await _0x5adf98['click']('#raffle-terms'), await _0x5adf98['waitForTimeout'](0x384), await _0x5adf98['evaluate'](() => {
                const _0x4a1b76 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x4a1b76['click']();
            }), await _0x5adf98['waitForTimeout'](0xbb8), await _0x5adf98['waitForSelector']('#checkout_email'), await _0x4378a2(0x3e8), console['log'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x342db3 == 'sec' ? await _0x5adf98['type']('#checkout_email', '' + _0x2ac677[_0x2bba6]['FirstName'] + _0x2ac677[_0x2bba6]['LastName'] + _0x51a9b9['catchall'], 0x32) : await _0x5adf98['type']('#checkout_email', '' + _0x2ac677[_0x2bba6]['Email'], 0x32);
            await _0x4378a2(0x320), await _0x5adf98['select']('#checkout_shipping_address_country', '' + _0x2ac677[_0x2bba6]['Country']), await _0x5adf98['waitForTimeout'](0x258), await _0x5adf98['type']('#checkout_shipping_address_first_name', '' + _0x2ac677[_0x2bba6]['FirstName']), await _0x5adf98['waitForTimeout'](0x320), await _0x5adf98['type']('#checkout_shipping_address_last_name', '' + _0x2ac677[_0x2bba6]['LastName']), await _0x5adf98['waitForTimeout'](0x2bc), await _0x5adf98['type']('#checkout_shipping_address_address1', _0x2ac677[_0x2bba6]['Address1'] + '\x20' + _0x2ac677[_0x2bba6]['HouseNumber']), await _0x5adf98['waitForTimeout'](0x2bc), await _0x5adf98['type']('#checkout_shipping_address_address2', '' + _0x2ac677[_0x2bba6]['Address2']), await _0x5adf98['waitForTimeout'](0x2bc);
            _0x2ac677[_0x2bba6]['Postcode'] == undefined ? await _0x5adf98['type']('#checkout_shipping_address_zip', '' + _0x2ac677[_0x2bba6]['Zip']) : await _0x5adf98['type']('#checkout_shipping_address_zip', '' + _0x2ac677[_0x2bba6]['Postcode']);
            await _0x5adf98['waitForTimeout'](0x2bc), await _0x5adf98['type']('#checkout_shipping_address_city', '' + _0x2ac677[_0x2bba6]['City']), await _0x5adf98['waitForTimeout'](0x2bc), console['log'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x5adf98, _0x5adf98['evaluate'](() => {
                const _0x2c014d = document['querySelector']('#continue_button');
                for (var _0x8c9b8e = 0x0; _0x8c9b8e < 0x5; _0x8c9b8e++) {
                    if (_0x2c014d) {
                        _0x2c014d['click'](), _0x2c014d['click']();
                        break;
                    } else
                        _0x4378a2(0xfa0);
                }
            }), await _0x5adf98['waitForTimeout'](0x1194);
            try {
                await _0x5adf98['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x5adf98['evaluate'](() => {
                const _0x5c0c04 = document['querySelector']('#continue_button');
                for (var _0x190473 = 0x0; _0x190473 < 0x5; _0x190473++) {
                    if (_0x5c0c04) {
                        _0x5c0c04['click']();
                        break;
                    } else
                        _0x4378a2(0xfa0);
                }
            }), await _0x5adf98['waitForTimeout'](0x7d0), console['log'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x5adf98['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x5adf98['evaluate'](() => {
                const _0x5d7418 = document['querySelector']('#continue_button');
                for (var _0x5ba54c = 0x0; _0x5ba54c < 0x5; _0x5ba54c++) {
                    if (_0x5d7418) {
                        _0x5d7418['click']();
                        break;
                    } else
                        _0x4378a2(0xfa0);
                }
            }), await _0x5adf98['waitForTimeout'](0x1194), await _0x5adf98['waitForSelector']('#continue_button'), _0x5adf98['evaluate'](() => {
                const _0x3a3250 = document['querySelector']('#continue_button');
                for (var _0x5afe3f = 0x0; _0x5afe3f < 0x5; _0x5afe3f++) {
                    if (_0x3a3250) {
                        _0x3a3250['click']();
                        break;
                    } else
                        _0x4378a2(0xfa0);
                }
            });
            try {
                await _0x5adf98['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x2c4317) {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x2c4317));
            }
            console['log'](_0x3e0bfa['green'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0xf9223d(_0x1f6165, _0x3427e7);
        } catch (_0x5c6204) {
            console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20' + _0x5c6204)), _0x2fcb83[0x0]['title'] = 'Failed\x20entry', _0x2fcb83[0x0]['description'] = '' + _0x5c6204, await _0xf9223d(_0x2e3634, _0x3427e7), _0x17c438 = 'yes';
        } finally {
            _0x15d552 && _0x15d552['close']();
            if (_0x17c438 == 'yes' && _0x330a4c != 0x5) {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x1e0498['name'] + ']\x20Task\x20' + (_0x2bba6 + 0x1) + '\x20:\x20Retrying')), _0x2bba6 = _0x2bba6 - 0x1, _0x330a4c = _0x330a4c + 0x1;
                continue;
            }
            if (_0x2bba6 + 0x1 == _0x2ac677['length']) {
                console['log'](_0x3e0bfa['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x4378a2(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x51a9b9['AfewDelay'] + '\x20ms'), await _0x4378a2(_0x51a9b9['AfewDelay']);
        }
    }
};
async function _0x3ab8b7(_0x1ca03a, _0x30cb5d, _0x5d4fc7, _0xf599b5) {
    _0x16a300['use'](_0x576b38()), _0x16a300['use'](_0x179bad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x51a9b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2bf567 = 0x0; _0x2bf567 < _0x5d4fc7['length']; _0x2bf567++) {
        var _0x3bcf32 = '', _0x51a790 = 0x0;
        _0x3db4c3(_0x30cb5d['name'] + '\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20/\x20' + _0x5d4fc7['length'] + '\x20||\x20File:\x20' + _0x58db63 + '\x20Proxies:\x20' + _0x48a573);
        var _0x38227a = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4a8559
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x51a9b9['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x5b009f
                }
            ]
        }];
        const _0x4619b8 = { 'embeds': _0x38227a };
        await _0x3bbefd(_0x5d4fc7, _0x2bf567);
        if (_0x5d4fc7[_0x2bf567]['Email'] == '' || _0x5d4fc7[_0x2bf567]['Password'] == '' || _0x5d4fc7[_0x2bf567]['FirstName'] == '' || _0x5d4fc7[_0x2bf567]['LastName'] == '') {
            console['log'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x51a9b9['useRandomProxy'] = ![])
            var _0x2d604a = _0xf599b5[_0x2bf567]['split'](':');
        else
            var _0x593c6a = Math['round'](Math['random']() * (_0xf599b5['length'] - 0x1)), _0x2d604a = _0xf599b5[_0x593c6a]['split'](':');
        const _0x743fb6 = await _0x16a300['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2d604a[0x0] + ':' + _0x2d604a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2ea566 = await _0x743fb6['newPage']();
            await _0x2ea566['authenticate']({
                'username': '' + _0x2d604a[0x2],
                'password': '' + _0x2d604a[0x3]
            }), console['log'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2ea566['setRequestInterception'](!![]), _0x2ea566['on']('request', _0x47bfd8 => {
                _0x47bfd8['resourceType']() === 'image' || _0x47bfd8['resourceType']() === 'font' || _0x47bfd8['resourceType']() === 'media' ? _0x47bfd8['abort']() : _0x47bfd8['continue']();
            }), await _0x2ea566['goto'](_0x1ca03a), await _0x4378a2(0xbb8), console['log'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x2ea566['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2ea566['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2ea566['waitForSelector']('#button-register'), await _0x4378a2(0x7d0), await _0x2ea566['evaluate'](() => {
                const _0x1831b3 = document['querySelector']('#button-register');
                _0x1831b3['click']();
            }), console['log'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4378a2(0x1388), await _0x2ea566['waitForSelector']('#customer_salutation'), await _0x2ea566['select']('#customer_salutation', 'mr'), await _0x4378a2(0x7d0), await _0x2ea566['waitForSelector']('#customer_firstname'), await _0x2ea566['type']('#customer_firstname', '' + _0x5d4fc7[_0x2bf567]['FirstName']), await _0x4378a2(0x352), await _0x2ea566['waitForSelector']('#customer_lastname'), await _0x2ea566['type']('#customer_lastname', '' + _0x5d4fc7[_0x2bf567]['LastName']), await _0x4378a2(0x352), await _0x2ea566['type']('#email-input', '' + _0x5d4fc7[_0x2bf567]['Email']), await _0x4378a2(0x352), await _0x2ea566['type']('#email-confirm-input', '' + _0x5d4fc7[_0x2bf567]['Email']), await _0x4378a2(0x352), await _0x2ea566['type']('#register-password', '' + _0x5d4fc7[_0x2bf567]['Password']), await _0x4378a2(0x352), await _0x2ea566['type']('#password-confirm', '' + _0x5d4fc7[_0x2bf567]['Password']), await _0x4378a2(0x352), console['log'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x2ea566['click']('#consent'), await _0x4378a2(0x1f4);
            const _0x24c4ee = await _0x2ea566['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x24c4ee) {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x2ea566['click']('#buttonRegister');
            try {
                await _0x2ea566['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x3e0bfa['yellow'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20Account\x20' + _0x5d4fc7[_0x2bf567]['Email'] + '\x20Generated!')), console['log'](_0x3e0bfa['yellow'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x5d4fc7[_0x2bf567]['Email'])), await _0x4378a2(0x4b0);
            async function _0x5e2ad6() {
                console['log'](_0x3e0bfa['yellow'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x140976 = await _0x1b8136['get']('Code');
                return _0x140976['Code'];
            }
            ;
            code = await _0x5e2ad6(), _0x4378a2(0x320), console['log'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20Verifying..'), await _0x2ea566['type']('#verificationCode', code), await _0x4378a2(0x1f4), await _0x2ea566['click']('#buttonVerify'), await _0x4378a2(0x190), await _0x2ea566['click']('#buttonVerify'), await _0x4378a2(0x3e8);
            try {
                await _0x2ea566['waitForSelector']('div.b-user_greeting'), console['log'](_0x3e0bfa['green'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20Account\x20' + _0x5d4fc7[_0x2bf567]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x1756c4['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x5d4fc7[_0x2bf567]['Email'] + ',' + _0x5d4fc7[_0x2bf567]['Password'] + ','), console['log'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20Account\x20' + _0x5d4fc7[_0x2bf567]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27'), await _0xf9223d(_0xa2b78c, _0x4619b8);
            } catch {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x36fa1e) {
            console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20' + _0x36fa1e)), _0x38227a[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x38227a[0x0]['description'] = '' + _0x36fa1e, await _0xf9223d(_0x2e3634, _0x4619b8), _0x3bcf32 = 'yes';
        } finally {
            _0x743fb6 && _0x743fb6['close']();
            if (_0x3bcf32 == 'yes' && _0x51a790 != 0x5) {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x30cb5d['name'] + ']\x20Task\x20' + (_0x2bf567 + 0x1) + '\x20:\x20Retrying')), _0x2bf567 = _0x2bf567 - 0x1, _0x51a790 = _0x51a790 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x51a9b9['delay'] + '\x20ms'), await _0x4378a2(_0x51a9b9['delay']);
        }
    }
}
async function _0x1f6989(_0x1dda05, _0x453a3b, _0xc0e20e) {
    _0x16a300['use'](_0x576b38()), _0x16a300['use'](_0x179bad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x51a9b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x337fec = 0x0; _0x337fec < _0x453a3b['length']; _0x337fec++) {
        var _0x45e735 = '', _0x24f8bb = 0x0;
        _0x3db4c3(_0x1dda05['name'] + '\x20Task\x20' + (_0x337fec + 0x1) + '\x20/\x20' + _0x453a3b['length'] + '\x20||\x20File:\x20' + _0x58db63 + '\x20Proxies:\x20' + _0x48a573);
        var _0x50415c = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4a8559
                },
                {
                    'name': 'Product',
                    'value': '' + _0x453a3b[_0x337fec]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x453a3b[_0x337fec]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x51a9b9['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x5b009f
                }
            ]
        }];
        const _0xae6427 = { 'embeds': _0x50415c };
        await _0x3bbefd(_0x453a3b, _0x337fec);
        if (_0x453a3b[_0x337fec]['Email'] == '' || _0x453a3b[_0x337fec]['Password'] == '' || _0x453a3b[_0x337fec]['FirstName'] == '' || _0x453a3b[_0x337fec]['LastName'] == '') {
            console['log'](_0x1aa97b() + '\x20[' + _0x1dda05['name'] + ']\x20Task\x20' + (_0x337fec + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x51a9b9['useRandomProxy'] = ![])
            var _0x42b6bb = _0xc0e20e[_0x337fec]['split'](':');
        else
            var _0x497c5b = Math['round'](Math['random']() * (_0xc0e20e['length'] - 0x1)), _0x42b6bb = _0xc0e20e[_0x497c5b]['split'](':');
        const _0x16ca52 = await _0x16a300['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x42b6bb[0x0] + ':' + _0x42b6bb[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x56317d = await _0x16ca52['newPage']();
            await _0x56317d['authenticate']({
                'username': '' + _0x42b6bb[0x2],
                'password': '' + _0x42b6bb[0x3]
            }), console['log'](_0x1aa97b() + '\x20[' + _0x1dda05['name'] + ']\x20Task\x20' + (_0x337fec + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56317d['setRequestInterception'](!![]), _0x56317d['on']('request', _0x5b0fa7 => {
                _0x5b0fa7['resourceType']() === 'image' || _0x5b0fa7['resourceType']() === 'font' || _0x5b0fa7['resourceType']() === 'media' ? _0x5b0fa7['abort']() : _0x5b0fa7['continue']();
            }), await _0x56317d['goto']('' + _0x453a3b[_0x337fec]['Url'], { 'waitUntil': 'networkidle2' }), await _0x4378a2(0x12c);
            try {
                await _0x56317d['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x56317d['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x1aa97b() + '\x20[' + _0x1dda05['name'] + ']\x20Task\x20' + (_0x337fec + 0x1) + '\x20:\x20Logging\x20in'), await _0x56317d['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x56317d['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x56317d['waitForSelector']('#username'), await _0x56317d['type']('#username', _0x453a3b[_0x337fec]['Email']), await _0x56317d['waitForSelector']('#password'), await _0x56317d['type']('#password', _0x453a3b[_0x337fec]['Password']), await _0x4378a2(0x190), await _0x56317d['click']('#buttonSubmit'), await _0x56317d['waitForSelector']('div.b-user_greeting'), console['log'](_0x1aa97b() + '\x20[' + _0x1dda05['name'] + ']\x20Task\x20' + (_0x337fec + 0x1) + '\x20:\x20Getting\x20Product'), await _0x4378a2(0x1f4), await _0x56317d['goto']('' + _0x453a3b[_0x337fec]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1aa97b() + '\x20[' + _0x1dda05['name'] + ']\x20Task\x20' + (_0x337fec + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x453a3b[_0x337fec]['Size']);
            let _0x4b3f93 = _0x453a3b[_0x337fec]['Size']['replace']('.5', '\x201/2');
            await _0x56317d['click']('button[title=\x22' + _0x4b3f93 + '\x22]'), await _0x4378a2(0x1f4);
            try {
                await _0x56317d['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x4378a2(0x12c), console['log'](_0x1aa97b() + '\x20[' + _0x1dda05['name'] + ']\x20Task\x20' + (_0x337fec + 0x1) + '\x20:\x20Filling\x20Information'), await _0x56317d['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x4378a2(0x12c), await _0x56317d['type']('#dwfrm_raffle_addressFields_firstName', _0x453a3b[_0x337fec]['FirstName']), await _0x4378a2(0x12c), await _0x56317d['type']('#dwfrm_raffle_addressFields_lastName', _0x453a3b[_0x337fec]['LastName']), await _0x4378a2(0x12c), await _0x56317d['select']('#dwfrm_raffle_addressFields_country', _0x453a3b[_0x337fec]['Country']), await _0x4378a2(0x12c), await _0x56317d['type']('#dwfrm_raffle_addressFields_city', _0x453a3b[_0x337fec]['City']), await _0x4378a2(0x12c);
            _0x453a3b[_0x337fec]['Postcode'] == undefined && (_0x453a3b[_0x337fec]['Postcode'] = _0x453a3b[_0x337fec]['Zip']);
            await _0x56317d['type']('#dwfrm_raffle_addressFields_postalCode', _0x453a3b[_0x337fec]['Postcode']), await _0x4378a2(0x12c), await _0x56317d['type']('#dwfrm_raffle_addressFields_address1', _0x453a3b[_0x337fec]['Address1']), await _0x4378a2(0x12c), await _0x56317d['type']('#dwfrm_raffle_addressFields_address2', _0x453a3b[_0x337fec]['HouseNumber']), await _0x4378a2(0x12c), await _0x56317d['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x453a3b[_0x337fec]['Address2']), await _0x4378a2(0x12c), await _0x56317d['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x4378a2(0x12c), await _0x56317d['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x453a3b[_0x337fec]['Follower']), await _0x4378a2(0x1f4), await _0x56317d['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x4378a2(0x1f4), console['log'](_0x1aa97b() + '\x20[' + _0x1dda05['name'] + ']\x20Task\x20' + (_0x337fec + 0x1) + '\x20:\x20' + _0x3e0bfa['blue']('Awaiting\x20Paypal\x20Payment')), await _0x56317d['click']('.b-paypal_button');
            try {
                await _0x56317d['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x3e0bfa['green'](_0x1aa97b() + '\x20[' + _0x1dda05['name'] + ']\x20Task\x20' + (_0x337fec + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0xf9223d(_0x1f6165, _0xae6427);
            } catch (_0x32ca59) {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x1dda05['name'] + ']\x20Task\x20' + (_0x337fec + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x32ca59));
            }
        } catch (_0x42ec1d) {
            console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x1dda05['name'] + ']\x20Task\x20' + (_0x337fec + 0x1) + '\x20:\x20' + _0x42ec1d)), _0x50415c[0x0]['title'] = 'Failed\x20kickz\x20Entry', _0x50415c[0x0]['description'] = '' + _0x42ec1d, await _0xf9223d(_0x2e3634, _0xae6427), _0x45e735 = 'yes';
        } finally {
            _0x16ca52 && _0x16ca52['close']();
            if (_0x45e735 == 'yes' && _0x24f8bb != 0x5) {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x1dda05['name'] + ']\x20Task\x20' + (_0x337fec + 0x1) + '\x20:\x20Retrying')), _0x337fec = _0x337fec - 0x1, _0x24f8bb = _0x24f8bb + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x51a9b9['AfewDelay'] + '\x20ms'), await _0x4378a2(_0x51a9b9['AfewDelay']);
        }
    }
}
async function _0x54040b(_0xa86ccf, _0x4829e8) {
    _0x16a300['use'](_0x576b38()), _0x16a300['use'](_0x179bad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x51a9b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x27d0af = 0x0; _0x27d0af < bouncewear['length']; _0x27d0af++) {
        await _0x3bbefd(bouncewear, _0x27d0af);
        if (bouncewear[_0x27d0af]['Email'] == '' || bouncewear[_0x27d0af]['Password'] == '' || bouncewear[_0x27d0af]['FirstName'] == '' || bouncewear[_0x27d0af]['LastName'] == '') {
            console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x27d0af + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x51a9b9['useRandomProxy'] = ![])
            var _0x515f61 = _0x123e14()[_0x27d0af]['split'](':');
        else
            var _0xb46494 = Math['round'](Math['random']() * (_0x123e14()['length'] - 0x1)), _0x515f61 = _0x123e14()[_0xb46494]['split'](':');
        const _0xdca0be = await _0x16a300['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x515f61[0x0] + ':' + _0x515f61[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x618d9c = await _0xdca0be['newPage']();
            await _0x618d9c['authenticate']({
                'username': '' + _0x515f61[0x2],
                'password': '' + _0x515f61[0x3]
            }), console['log'](_0x1aa97b() + '\x20[' + _0x4829e8['name'] + ']\x20Task\x20' + (_0x27d0af + 0x1) + '\x20:\x20Getting\x20Session'), await _0x618d9c['setRequestInterception'](!![]), _0x618d9c['on']('request', _0x23d430 => {
                _0x23d430['resourceType']() === 'image' || _0x23d430['resourceType']() === 'font' || _0x23d430['resourceType']() === 'media' ? _0x23d430['abort']() : _0x23d430['continue']();
            }), await _0x618d9c['goto'](_0xa86ccf), await _0x4378a2(0xbb8), await _0x618d9c['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1aa97b() + '\x20[' + _0x4829e8['name'] + ']\x20Task\x20' + (_0x27d0af + 0x1) + '\x20:\x20Filling\x20information'), await _0x618d9c['type']('#RegisterForm-FirstName', '' + bouncewear[_0x27d0af]['FirstName']), await _0x4378a2(0x226), await _0x618d9c['type']('#RegisterForm-LastName', '' + bouncewear[_0x27d0af]['LastName']), await _0x4378a2(0x226), await _0x618d9c['type']('#RegisterForm-email', '' + bouncewear[_0x27d0af]['Email']), await _0x4378a2(0x226), await _0x618d9c['type']('#RegisterForm-password', '' + bouncewear[_0x27d0af]['Password']), await _0x4378a2(0x226), await _0x618d9c['click']('#marketing'), console['log'](_0x1aa97b() + '\x20[' + _0x4829e8['name'] + ']\x20Task\x20' + (_0x27d0af + 0x1) + '\x20:\x20Submitting..'), await _0x618d9c['$eval']('#RegisterForm', _0x30ca9b => _0x30ca9b['submit']()), await _0x4378a2(0x1f40), console['log'](_0x1aa97b() + '\x20[' + _0x4829e8['name'] + ']\x20Task\x20' + (_0x27d0af + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x618d9c['solveRecaptchas'](), await _0x618d9c['click']('.shopify-challenge__button.btn');
            async function _0x1d5294() {
                for (var _0x26db7f = 0x0; _0x26db7f < 0x4; _0x26db7f++) {
                    try {
                        console['log']('try'), await _0x618d9c['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x1aa97b() + '\x20[' + _0x4829e8['name'] + ']\x20Task\x20' + (_0x27d0af + 0x1) + '\x20:\x20' + _0x3e0bfa['red']('Catpcha\x20failed,\x20retrying..')), await _0x618d9c['solveRecaptchas'](), await _0x618d9c['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x1d5294(), console['log'](_0x1aa97b() + '\x20[' + _0x4829e8['name'] + ']\x20Task\x20' + (_0x27d0af + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x4378a2(0x1f4);
            try {
                await _0x618d9c['waitForSelector']('.featured-title'), await _0x4378a2(0x1f4), console['log'](_0x3e0bfa['green'](_0x1aa97b() + '\x20[' + _0x4829e8['name'] + ']\x20Task\x20' + (_0x27d0af + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x27d0af]['Email'] + '\x20Generated!')), _0x1756c4['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x27d0af]['Email'] + ',' + bouncewear[_0x27d0af]['Password']), console['log'](_0x3e0bfa['yellow'](_0x1aa97b() + '\x20[' + _0x4829e8['name'] + ']\x20Task\x20' + (_0x27d0af + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x27d0af]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0xb7b176) {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x27d0af + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xb7b176));
            }
        } catch (_0x33f9ea) {
            console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x27d0af + 0x1) + '\x20:\x20' + _0x33f9ea));
        } finally {
            _0xdca0be && _0xdca0be['close'](), console['log']('Waiting\x20for\x20' + _0x51a9b9['delay'] + '\x20ms'), await _0x4378a2(_0x51a9b9['delay']);
        }
    }
}
async function _0x845fa0(_0x1d03d7, _0x2645d9, _0x2fa957, _0x309d86) {
    _0x16a300['use'](_0x576b38()), _0x16a300['use'](_0x179bad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x51a9b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xf0be3c = 0x0; _0xf0be3c < _0x2fa957['length']; _0xf0be3c++) {
        var _0x2f15eb = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4a8559
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x51a9b9['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x5b009f
                }
            ]
        }];
        const _0x384ea0 = { 'embeds': _0x2f15eb };
        _0x3db4c3(_0x2645d9['name'] + '\x20Task\x20' + (_0xf0be3c + 0x1) + '\x20/\x20' + _0x2fa957['length'] + '\x20||\x20File:\x20' + _0x58db63 + '\x20Proxies:\x20' + _0x48a573), await _0x3bbefd(_0x2fa957, _0xf0be3c);
        if (_0x2fa957[_0xf0be3c]['Email'] == '' || _0x2fa957[_0xf0be3c]['Password'] == '' || _0x2fa957[_0xf0be3c]['Password'] == undefined || _0x2fa957[_0xf0be3c]['FirstName'] == '' || _0x2fa957[_0xf0be3c]['LastName'] == '') {
            console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0xf0be3c + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x51a9b9['useRandomProxy'] = ![])
            var _0x1230cc = _0x309d86[_0xf0be3c]['split'](':');
        else
            var _0xad0577 = Math['round'](Math['random']() * (_0x309d86['length'] - 0x1)), _0x1230cc = _0x309d86[_0xad0577]['split'](':');
        const _0x365431 = await _0x16a300['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1230cc[0x0] + ':' + _0x1230cc[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2f1d7b = await _0x365431['newPage']();
            await _0x2f1d7b['authenticate']({
                'username': '' + _0x1230cc[0x2],
                'password': '' + _0x1230cc[0x3]
            }), console['log'](_0x1aa97b() + '\x20[' + _0x2645d9['name'] + ']\x20Task\x20' + (_0xf0be3c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2f1d7b['setRequestInterception'](!![]), _0x2f1d7b['on']('request', _0xdcb009 => {
                _0xdcb009['resourceType']() === 'image' || _0xdcb009['resourceType']() === 'font' || _0xdcb009['resourceType']() === 'media' ? _0xdcb009['abort']() : _0xdcb009['continue']();
            }), await _0x2f1d7b['goto'](_0x1d03d7), await _0x4378a2(0xbb8), await _0x2f1d7b['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1aa97b() + '\x20[' + _0x2645d9['name'] + ']\x20Task\x20' + (_0xf0be3c + 0x1) + '\x20:\x20Filling\x20information'), await _0x2f1d7b['type']('#RegisterForm-FirstName', '' + _0x2fa957[_0xf0be3c]['FirstName']), await _0x4378a2(0x226), await _0x2f1d7b['type']('#RegisterForm-LastName', '' + _0x2fa957[_0xf0be3c]['LastName']), await _0x4378a2(0x226), await _0x2f1d7b['type']('#RegisterForm-email', '' + _0x2fa957[_0xf0be3c]['Email']), await _0x4378a2(0x226), await _0x2f1d7b['type']('#RegisterForm-password', '' + _0x2fa957[_0xf0be3c]['Password']), await _0x4378a2(0x226), console['log'](_0x1aa97b() + '\x20[' + _0x2645d9['name'] + ']\x20Task\x20' + (_0xf0be3c + 0x1) + '\x20:\x20Submitting..'), await _0x2f1d7b['$eval']('#RegisterForm', _0x4e5a99 => _0x4e5a99['submit']()), await _0x4378a2(0x1f40);
            try {
                await _0x2f1d7b['waitForSelector']('.home-page-grid__collection'), await _0x4378a2(0x1f4), console['log'](_0x3e0bfa['green'](_0x1aa97b() + '\x20[' + _0x2645d9['name'] + ']\x20Task\x20' + (_0xf0be3c + 0x1) + '\x20:\x20Account\x20' + _0x2fa957[_0xf0be3c]['Email'] + '\x20Generated!')), _0x1756c4['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x2fa957[_0xf0be3c]['Email'] + ',' + _0x2fa957[_0xf0be3c]['Password']), console['log'](_0x3e0bfa['yellow'](_0x1aa97b() + '\x20[' + _0x2645d9['name'] + ']\x20Task\x20' + (_0xf0be3c + 0x1) + '\x20:\x20Account\x20' + _0x2fa957[_0xf0be3c]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27')), await _0xf9223d(_0xa2b78c, _0x384ea0);
            } catch (_0x30846e) {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0xf0be3c + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x30846e));
            }
        } catch (_0x2ab234) {
            console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0xf0be3c + 0x1) + '\x20:\x20' + _0x2ab234));
        } finally {
            _0x365431 && _0x365431['close'](), console['log']('Waiting\x20for\x20' + _0x51a9b9['delay'] + '\x20ms'), await _0x4378a2(_0x51a9b9['delay']);
        }
    }
}
async function _0x5505c2(_0x301799, _0x3c9440, _0x3f33a7, _0x53ef58) {
    _0x16a300['use'](_0x576b38()), _0x16a300['use'](_0x179bad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x51a9b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x59ab97 = 0x0; _0x59ab97 < _0x3f33a7['length']; _0x59ab97++) {
        var _0x5aac9d = '', _0x28e3f9 = 0x0;
        _0x3db4c3(_0x3c9440['name'] + '\x20Task\x20' + (_0x59ab97 + 0x1) + '\x20/\x20' + _0x3f33a7['length'] + '\x20||\x20File:\x20' + _0x58db63 + '\x20Proxies:\x20' + _0x48a573), await _0x3bbefd(_0x3f33a7, _0x59ab97);
        if (_0x3f33a7[_0x59ab97]['Email'] == '' || _0x3f33a7[_0x59ab97]['Password'] == '' || _0x3f33a7[_0x59ab97]['FirstName'] == '' || _0x3f33a7[_0x59ab97]['LastName'] == '') {
            console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x59ab97 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x51a9b9['useRandomProxy'] = ![])
            var _0x5ddf18 = _0x53ef58[_0x59ab97]['split'](':');
        else
            var _0x34b272 = Math['round'](Math['random']() * (_0x53ef58['length'] - 0x1)), _0x5ddf18 = _0x53ef58[_0x34b272]['split'](':');
        const _0x45e0a9 = await _0x16a300['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5ddf18[0x0] + ':' + _0x5ddf18[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4bf3c4 = await _0x45e0a9['newPage']();
            await _0x4bf3c4['authenticate']({
                'username': '' + _0x5ddf18[0x2],
                'password': '' + _0x5ddf18[0x3]
            }), console['log'](_0x1aa97b() + '\x20[' + _0x3c9440['name'] + ']\x20Task\x20' + (_0x59ab97 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4bf3c4['setRequestInterception'](!![]), _0x4bf3c4['on']('request', _0x147a97 => {
                _0x147a97['resourceType']() === 'image' || _0x147a97['resourceType']() === 'font' || _0x147a97['resourceType']() === 'media' ? _0x147a97['abort']() : _0x147a97['continue']();
            }), await _0x4bf3c4['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4bf3c4['waitForSelector']('#CustomerEmail'), console['log'](_0x1aa97b() + '\x20[' + _0x3c9440['name'] + ']\x20Task\x20' + (_0x59ab97 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4bf3c4['type']('#CustomerEmail', '' + _0x3f33a7[_0x59ab97]['Email']), await _0x4378a2(0x12c), await _0x4bf3c4['type']('#CustomerPassword', '' + _0x3f33a7[_0x59ab97]['Password']), await _0x4378a2(0x226), await _0x4bf3c4['$eval']('#customer_login', _0x26f14d => _0x26f14d['submit']());
            try {
                await _0x4bf3c4['waitForSelector']('#orders'), await _0x4378a2(0x4b0);
            } catch {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x3c9440['name'] + ']\x20Task\x20' + (_0x59ab97 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x4bf3c4['goto']('' + _0x3f33a7[_0x59ab97]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4378a2(0xbb8), console['log'](_0x1aa97b() + '\x20[' + _0x3c9440['name'] + ']\x20Task\x20' + (_0x59ab97 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x4bf3c4['waitForSelector']('#email');
            } catch {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x3c9440['name'] + ']\x20Task\x20' + (_0x59ab97 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x4bf3c4['type']('#email', '' + _0x3f33a7[_0x59ab97]['Email']), await _0x4378a2(0x384), await _0x4bf3c4['type']('#first_name', '' + _0x3f33a7[_0x59ab97]['FirstName']), await _0x4378a2(0x514), await _0x4bf3c4['type']('#last_name', '' + _0x3f33a7[_0x59ab97]['LastName']), await _0x4378a2(0x514), await _0x4bf3c4['type']('#street_address', _0x3f33a7[_0x59ab97]['Address1'] + '\x20' + _0x3f33a7[_0x59ab97]['HouseNumber'] + '\x20' + _0x3f33a7[_0x59ab97]['Address2']), await _0x4378a2(0x2bc);
            _0x3f33a7[_0x59ab97]['Postcode'] == undefined && (_0x3f33a7[_0x59ab97]['Postcode'] = _0x3f33a7[_0x59ab97]['Zip']);
            await _0x4bf3c4['type']('#zip_code', '' + _0x3f33a7[_0x59ab97]['Postcode']), await _0x4378a2(0x320), await _0x4bf3c4['type']('#city', '' + _0x3f33a7[_0x59ab97]['City']), await _0x4378a2(0x320), await _0x4bf3c4['type']('#bday', '01/01/1994'), await _0x4378a2(0x320), await _0x4bf3c4['type']('#instagram', '' + _0x3f33a7[_0x59ab97]['Follower']), await _0x4378a2(0x352);
            if (_0x3f33a7[_0x59ab97]['Size'] == 'RANDOM') {
                const _0x1d3b4f = await _0x4bf3c4['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x175dfa => {
                    return _0x175dfa['map'](_0x3da15e => _0x3da15e['textContent']);
                });
                var _0x57b6a7 = Math['round'](Math['random']() * (_0x1d3b4f['length'] - 0x1));
                console['log'](_0x1aa97b() + '\x20[' + _0x3c9440['name'] + ']\x20Task\x20' + (_0x59ab97 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x1d3b4f[_0x57b6a7]), await _0x4bf3c4['click']('label[data-eu-size=\x22' + _0x1d3b4f[_0x57b6a7] + '\x22]');
            } else {
                console['log'](_0x1aa97b() + '\x20[' + _0x3c9440['name'] + ']\x20Task\x20' + (_0x59ab97 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x3f33a7[_0x59ab97]['Size']);
                try {
                    await _0x4bf3c4['click']('label[data-eu-size=\x22' + _0x3f33a7[_0x59ab97]['Size'] + '\x22]');
                } catch {
                    await _0x4bf3c4['click']('label[data-eu-size=\x22' + _0x3f33a7[_0x59ab97]['Size'] + '.0\x22]');
                }
            }
            await _0x4378a2(0xbb8), await _0x4bf3c4['$$eval']('.raffle__checkbox-label', _0x3c88d2 => _0x3c88d2['forEach'](_0x4bfb70 => _0x4bfb70['click']())), await _0x4378a2(0x7d0), console['log'](_0x1aa97b() + '\x20[' + _0x3c9440['name'] + ']\x20Task\x20' + (_0x59ab97 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x4bf3c4['click']('#raffle__form-submit'), await _0x4378a2(0x1388);
            try {
                await _0x4bf3c4['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x3e0bfa['green'](_0x1aa97b() + '\x20[' + _0x3c9440['name'] + ']\x20Task\x20' + (_0x59ab97 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x1a78bd) {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x59ab97 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x1a78bd));
            }
        } catch (_0x2b5233) {
            console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x59ab97 + 0x1) + '\x20:\x20' + _0x2b5233)), _0x5aac9d = 'yes';
        } finally {
            _0x45e0a9 && _0x45e0a9['close']();
            if (_0x5aac9d == 'yes' && _0x28e3f9 != 0x5) {
                console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x3c9440['name'] + ']\x20Task\x20' + (_0x59ab97 + 0x1) + '\x20:\x20Retrying')), _0x59ab97 = _0x59ab97 - 0x1, _0x28e3f9 = _0x28e3f9 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x51a9b9['delay'] + '\x20ms'), await _0x4378a2(_0x51a9b9['delay']);
        }
    }
}
async function _0x36439c(_0x46ab83, _0x29ecab, _0x7edb2f) {
    var _0x1e9261 = ![], _0x43ba86 = ![];
    if (_0x51a9b9['captchaKey'] == '' || _0x51a9b9['captchaKey'] == undefined)
        return console['log'](_0x3e0bfa['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x16a300['use'](_0x576b38()), _0x16a300['use'](_0x179bad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x51a9b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x198431 = 0x0; _0x198431 < _0x29ecab['length']; _0x198431++) {
        var _0x3d859b = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x29ecab[_0x198431]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x29ecab[_0x198431]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x4a8559
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x51a9b9['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x5b009f
                }
            ]
        }];
        const _0x57a47f = { 'embeds': _0x3d859b };
        _0x3db4c3(_0x46ab83['name'] + '\x20Task\x20' + (_0x198431 + 0x1) + '\x20/\x20' + _0x29ecab['length'] + '\x20||\x20File:\x20' + _0x58db63 + '\x20Proxies:\x20' + _0x48a573), await _0x3bbefd(_0x29ecab, _0x198431);
        if (_0x29ecab[_0x198431]['Email'] == '' || _0x29ecab[_0x198431]['Url'] == '' || _0x29ecab[_0x198431]['FirstName'] == '' || _0x29ecab[_0x198431]['LastName'] == '') {
            console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x198431 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x51a9b9['useRandomProxy'] = ![])
            var _0x3f2b8e = _0x7edb2f[_0x198431]['split'](':');
        else
            var _0x103fff = Math['round'](Math['random']() * (_0x7edb2f['length'] - 0x1)), _0x3f2b8e = _0x7edb2f[_0x103fff]['split'](':');
        const _0x452c6 = await _0x16a300['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3f2b8e[0x0] + ':' + _0x3f2b8e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x49bc00 = await _0x452c6['newPage']();
            await _0x49bc00['authenticate']({
                'username': '' + _0x3f2b8e[0x2],
                'password': '' + _0x3f2b8e[0x3]
            }), console['log'](_0x1aa97b() + '\x20[' + _0x46ab83['name'] + ']\x20Task\x20' + (_0x198431 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x49bc00['setRequestInterception'](!![]), _0x49bc00['on']('request', _0x148a71 => {
                _0x148a71['resourceType']() === 'image' || _0x148a71['resourceType']() === 'font' || _0x148a71['resourceType']() === 'media' ? _0x148a71['abort']() : _0x148a71['continue']();
            }), await _0x49bc00['goto']('' + _0x29ecab[_0x198431]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](_0x1aa97b() + '\x20[' + _0x46ab83['name'] + ']\x20Task\x20' + (_0x198431 + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x49bc00['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x49bc00['type']('#comp_firstname', '' + _0x29ecab[_0x198431]['FirstName']), await _0x49bc00['waitForSelector']('#comp_lastname'), await _0x49bc00['type']('#comp_lastname', '' + _0x29ecab[_0x198431]['LastName']), await _0x49bc00['waitForSelector']('#comp_email'), await _0x49bc00['type']('#comp_email', '' + _0x29ecab[_0x198431]['Email']), await _0x49bc00['waitForSelector']('#comp_paypalemail'), await _0x49bc00['type']('#comp_paypalemail', '' + _0x29ecab[_0x198431]['Email']), await _0x49bc00['waitForSelector']('#comp_mobile_end'), await _0x49bc00['type']('#comp_mobile_end', '' + _0x29ecab[_0x198431]['Phone']), await _0x49bc00['waitForSelector']('#comp_dob'), await _0x49bc00['type']('#comp_dob', '08/09/1992'), console['log'](_0x1aa97b() + '\x20[' + _0x46ab83['name'] + ']\x20Task\x20' + (_0x198431 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x29ecab[_0x198431]['Size'] == 'RANDOM') {
                const _0x2b8f76 = await _0x49bc00['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5bd57b => {
                    return _0x5bd57b['map'](_0x1d68c5 => _0x1d68c5['value']);
                });
                var _0x1f9a18 = Math['round'](Math['random']() * (_0x2b8f76['length'] - 0x2));
                await _0x49bc00['select']('#shoesize', _0x2b8f76[_0x1f9a18 + 0x1]), await _0x4378a2(0x3e8);
            } else {
                const _0x15af6e = await _0x49bc00['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3595de => {
                    return _0x3595de['map'](_0x481901 => _0x481901['innerText']);
                }), _0x42ce1f = await _0x49bc00['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3357ff => {
                    return _0x3357ff['map'](_0x41f415 => _0x41f415['value']);
                });
                var _0x526064 = _0x29ecab[_0x198431]['Size'];
                for (var _0x3e7272 = 0x1; _0x3e7272 < _0x42ce1f['length']; _0x3e7272++) {
                    var _0x227afa = _0x15af6e[_0x3e7272]['split']('\x20')[0x0];
                    if (_0x227afa == _0x526064) {
                        await _0x49bc00['select']('#shoesize', _0x42ce1f[_0x3e7272]);
                        break;
                    } else {
                        if (_0x3e7272 + 0x1 == _0x42ce1f['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x49bc00['waitForSelector']('#comp_address1'), await _0x49bc00['type']('#comp_address1', _0x29ecab[_0x198431]['Address1'] + '\x20' + _0x29ecab[_0x198431]['HouseNumber']), await _0x49bc00['waitForSelector']('#comp_address2'), await _0x49bc00['type']('#comp_address2', '' + _0x29ecab[_0x198431]['Address2']), await _0x49bc00['waitForSelector']('#comp_address2'), await _0x49bc00['type']('#comp_address3', '' + _0x29ecab[_0x198431]['City']), await _0x49bc00['waitForSelector']('#comp_postcode'), await _0x49bc00['type']('#comp_postcode', '' + _0x29ecab[_0x198431]['Zip']), console['log'](_0x1aa97b() + '\x20[' + _0x46ab83['name'] + ']\x20Task\x20' + (_0x198431 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4378a2(0x4b0), await _0x49bc00['click']('label#emailhold'), await _0x4378a2(0x5dc), await _0x49bc00['click']('#preauth_tandc_email\x20>\x20label'), await _0x4378a2(0x5dc), await _0x49bc00['click']('#submit'), await _0x49bc00['waitForSelector']('#paymentWrap'), console['log'](_0x1aa97b() + '\x20[' + _0x46ab83['name'] + ']\x20Task\x20' + (_0x198431 + 0x1) + '\x20:\x20' + _0x3e0bfa['blue']('Awaiting\x20Paypal\x20Payment')), _0x452c6['on']('targetcreated', async _0x3e7893 => {
                if (_0x3e7893['type']() === 'page') {
                    const _0x5d0d78 = await _0x3e7893['page']();
                    async function _0x264249() {
                        try {
                            await _0x49bc00['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x43ba86 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x361913() {
                        try {
                            await _0x49bc00['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x1e9261 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x361913(), _0x264249(), await _0x4378a2(0x493e0);
                }
            });
            async function _0x579db5() {
                for (let _0x3b7926 = 0x0; _0x3b7926 < 0x12c; _0x3b7926++) {
                    if (_0x1e9261 == !![]) {
                        console['log'](_0x3e0bfa['green'](_0x1aa97b() + '\x20[' + _0x46ab83['name'] + ']\x20Task\x20' + (_0x198431 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0xf9223d(_0x1f6165, _0x57a47f);
                        return;
                    } else {
                        if (_0x43ba86)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x4378a2(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x4378a2(0xbb8), await _0x49bc00['click']('.zoid-outlet'), await _0x4378a2(0x7d0), await _0x579db5();
        } catch (_0x1e1e99) {
            console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x46ab83['name'] + ']\x20Task\x20' + (_0x198431 + 0x1) + '\x20:\x20' + _0x1e1e99)), _0x3d859b[0x0]['title'] = 'Failed\x20entry', _0x3d859b[0x0]['description'] = _0x46ab83['name'] + ':\x20' + _0x1e1e99, await _0xf9223d(_0x2e3634, _0x57a47f);
        } finally {
            _0x452c6 && _0x452c6['close'](), console['log']('Waiting\x20for\x20' + _0x51a9b9['delay'] + '\x20ms'), await _0x4378a2(_0x51a9b9['delay']);
        }
    }
}
async function _0x2e255(_0x1e50bb, _0x62ed45, _0x4e340a, _0x24d1d5, _0x329202) {
    var _0x40f073 = {}, _0x3719c2 = [], _0x147657 = {}, _0x5eeabf = [
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
    !_0x24d1d5 && (_0x24d1d5 = {});
    if (_0x62ed45 != 'ver') {
        _0x3db4c3(_0x4e340a['name'] + '\x20Task\x20' + (_0x1e50bb + 0x1) + '\x20/\x20' + _0x24d1d5['length'] + '\x20||\x20File:\x20' + _0x58db63 + '\x20Proxies:\x20' + _0x48a573), await _0x3bbefd(_0x24d1d5, _0x1e50bb), _0x3719c2 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4a8559
                },
                {
                    'name': 'Size',
                    'value': '' + _0x24d1d5[_0x1e50bb]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x51a9b9['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x5b009f
                }
            ]
        }], _0x147657 = { 'embeds': _0x3719c2 }, _0x40f073 = _0x4e340a['data'];
        _0x62ed45 == 'exp' ? _0x40f073['data']['attributes']['email'] = '' + _0x24d1d5[_0x1e50bb]['FirstName'] + _0x24d1d5[_0x1e50bb]['LastName'] + _0x51a9b9['catchall'] : _0x40f073['data']['attributes']['email'] = '' + _0x24d1d5[_0x1e50bb]['Email'];
        if (_0x24d1d5[_0x1e50bb]['Size'] == 'RANDOM') {
        }
        _0x40f073['data']['attributes']['properties']['$first_name'] = '' + _0x24d1d5[_0x1e50bb]['FirstName'], _0x40f073['data']['attributes']['properties']['$last_name'] = '' + _0x24d1d5[_0x1e50bb]['LastName'], _0x40f073['data']['attributes']['properties']['$address1'] = _0x24d1d5[_0x1e50bb]['Address1'] + '\x20' + _0x24d1d5[_0x1e50bb]['Address2'] + '\x20' + _0x24d1d5[_0x1e50bb]['HouseNumber'], _0x40f073['data']['attributes']['properties']['$zip'] = '' + _0x24d1d5[_0x1e50bb]['Zip'], _0x40f073['data']['attributes']['properties']['$city'] = '' + _0x24d1d5[_0x1e50bb]['City'], _0x40f073['data']['attributes']['properties']['$country'] = '' + _0x24d1d5[_0x1e50bb]['Country'], _0x40f073['data']['attributes']['properties']['Size'] = '' + _0x24d1d5[_0x1e50bb]['Size'], _0x40f073['data']['attributes']['properties']['$phone_number'] = '' + _0x24d1d5[_0x1e50bb]['Phone'], _0x40f073['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x24d1d5[_0x1e50bb]['Follower'];
    }
    if (_0x51a9b9['useRandomProxy'] = ![])
        var _0x2a7073 = _0x329202[_0x1e50bb]['split'](':');
    else
        var _0x5ee242 = Math['round'](Math['random']() * (_0x329202['length'] - 0x1)), _0x2a7073 = _0x329202[_0x5ee242]['split'](':');
    var _0x18a6fc = {
        'jar': _0x1544f9,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x4e340a['url'],
        'headers': _0x4e340a['headers'],
        'body': JSON['stringify'](_0x40f073),
        'proxy': 'http://' + _0x2a7073[0x2] + ':' + _0x2a7073[0x3] + '@' + _0x2a7073[0x0] + ':' + _0x2a7073[0x1]
    };
    return _0x62ed45 != 'ver' && (_0x18a6fc['url'] = _0x4e340a['url'], _0x18a6fc['headers'] = _0x4e340a['headers']), _0x62ed45 == 'ver' && (_0x18a6fc['method'] = 'GET'), new Promise(function (_0x189b16, _0x51c1f5) {
        callback = async (_0x431d3a, _0x9093ff, _0x1123ab) => {
            !_0x431d3a && _0x9093ff['statusCode'] == 0xca || !_0x431d3a && _0x9093ff['statusCode'] == 0xc8 ? (_0x62ed45 != 'ver' && await _0xf9223d(_0x1f6165, _0x147657), _0x189b16(console['log'](_0x3e0bfa['green'](_0x1aa97b() + '\x20[' + _0x4e340a['name'] + ']\x20Task\x20' + (_0x1e50bb + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x62ed45 != 'ver' && (_0x3719c2[0x0]['title'] = 'Failed\x20entry', _0x3719c2[0x0]['description'] = '' + _0x431d3a, await _0xf9223d(_0x2e3634, _0x147657)), _0x51c1f5(console['log'](_0x1aa97b() + '\x20[' + _0x4e340a['name'] + ']\x20Task\x20' + (_0x1e50bb + 0x1) + ':\x20' + _0x431d3a)));
        };
        try {
            _0x62ed45 != 'ver' && console['log'](_0x1aa97b() + '\x20[' + _0x4e340a['name'] + ']\x20Task\x20' + (_0x1e50bb + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x40f073['data']['attributes']['email']), _0x49d6e9(_0x18a6fc, callback);
        } catch (_0x26f5ea) {
            console['log'](_0x1aa97b() + '\x20Task\x20' + (_0x1e50bb + 0x1) + ':\x20' + _0x26f5ea);
        }
    });
}
;
async function _0x395ddc() {
    await _0x8af8cf(), console['clear']();
    if (_0x5b009f != 'devkey') {
        let _0x316fc0 = await _0x1be884['autoUpdate']();
        if (_0x316fc0 === 'yes')
            return _0x47ef0d('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x5abc4b == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x4378a2(0x2710);
        ;
    }
    await _0x17f1b1(_0x5abc4b);
    if (_0x4eb88c === ![])
        return console['log']('Closing\x20Browser'), await _0x4378a2(0xbb8);
    else
        try {
            var _0x41abe1 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x4a8559
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x5b009f
                    }
                ]
            }];
            const _0x686fc = { 'embeds': _0x41abe1 };
            await _0xf9223d(_0x2a10b9, _0x686fc);
            async function _0xcddd5() {
                _0x3db4c3('JRaffles\x20' + _0x5b009f), console['clear'](), console['log']('Welcome\x20to\x20' + _0x3e0bfa['cyan']('JRaffles();') + '\x20' + _0x5b009f), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x4fb6d6 = 0x0; _0x4fb6d6 < _0x350dc5['length']; _0x4fb6d6++) {
                    if (_0x350dc5[_0x4fb6d6]['name'] === 'Reload\x20Settings' || _0x350dc5[_0x4fb6d6]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x4fb6d6 + ')\x20[' + _0x350dc5[_0x4fb6d6]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x350dc5['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x350dc5['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x48c586();
                if (_0x350dc5[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x656fe8(_0x350dc5[taskModule]['modules']);
                    var _0x38f013 = _0x350dc5[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0xc5aa6c = await _0x31669b();
                    await _0x71605(_0xc5aa6c), await _0xae1082();
                    var _0x1192b5 = await _0x16312c();
                    return await afewFunction(_0x464ec1[_0x3a564c], 'nor', _0x38f013, _0x1192b5, _0xc5aa6c), _0xcddd5();
                } else {
                    if (_0x350dc5[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x656fe8(_0x350dc5[taskModule]['modules']);
                        var _0x38f013 = _0x350dc5[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0xc5aa6c = await _0x31669b(), _0x3ff2c3 = await _0x16312c();
                            console['log']('Starting\x20' + _0x3ff2c3['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x9893cb = 0x0; _0x9893cb < _0x3ff2c3['length']; _0x9893cb++) {
                                console['log'](_0x1aa97b() + '\x20[' + _0x38f013['name'] + ']\x20Task\x20' + (_0x9893cb + 0x1) + ':\x20Getting\x20Session'), await _0xb0b156(_0x9893cb, 'nor', _0x38f013, _0x3ff2c3, _0xc5aa6c), console['log'](_0x1aa97b() + '\x20[' + _0x38f013['name'] + ']\x20Sleeping\x20for\x20' + _0x51a9b9['MahaDelay'] + '\x20ms'), await _0x4378a2(_0x51a9b9['MahaDelay']);
                            }
                            ;
                            return _0xcddd5();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0xc5aa6c = await _0x31669b();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x2d37b9(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x9893cb = 0x0; _0x9893cb < links['length']; _0x9893cb++) {
                                    _0x38f013['url'] = links[_0x9893cb], console['log'](_0x1aa97b() + '\x20[' + _0x38f013['name'] + ']\x20Task\x20' + (_0x9893cb + 0x1) + ':\x20Getting\x20Session'), await _0xb0b156(_0x9893cb, 'ver', _0x38f013, _0x3ff2c3, _0xc5aa6c), console['log'](_0x1aa97b() + '\x20[' + _0x38f013['name'] + ']\x20Sleeping\x20for\x20' + _0x51a9b9['verificationDelay'] + '\x20ms'), await _0x4378a2(_0x51a9b9['verificationDelay']);
                                }
                                ;
                                return _0xcddd5();
                            }
                        }
                    } else {
                        if (_0x350dc5[taskModule]['name'] == 'FOOTSHOP') {
                            var _0xc5aa6c = await _0x31669b(), _0x52fbcd = await _0x16312c();
                            return await _0x45ff0a(_0x52fbcd, _0xc5aa6c), await _0x4378a2(0x1388), _0xcddd5();
                        } else {
                            if (_0x350dc5[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x656fe8(_0x350dc5[taskModule]['modules']);
                                var _0x38f013 = _0x350dc5[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0xc5aa6c = await _0x31669b(), _0x364ea3 = await _0x16312c();
                                    console['log']('Starting\x20' + _0x3e0bfa['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x9893cb = 0x0; _0x9893cb < _0x364ea3['length']; _0x9893cb++) {
                                        console['log'](_0x1aa97b() + '\x20[' + _0x38f013['name'] + ']\x20Task\x20' + (_0x9893cb + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x2e255(_0x9893cb, 'nor', _0x38f013, _0x364ea3, _0xc5aa6c);
                                        } catch (_0x34679c) {
                                            console['log'](_0x3e0bfa['red'](_0x1aa97b() + '\x20[' + _0x38f013['name'] + ']\x20Task\x20' + (_0x9893cb + 0x1) + ':\x20Task\x20failed\x20' + _0x34679c));
                                        }
                                        console['log'](_0x1aa97b() + '\x20[' + _0x38f013['name'] + ']\x20Sleeping\x20for\x20' + _0x51a9b9['delay'] + '\x20ms'), await _0x4378a2(_0x51a9b9['delay']);
                                    }
                                    return _0xcddd5();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x2d37b9(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x9893cb = 0x0; _0x9893cb < links['length']; _0x9893cb++) {
                                            try {
                                                _0x38f013['url'] = links[_0x9893cb], console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Task\x20' + (_0x9893cb + 0x1) + ':\x20Getting\x20Session'), await _0x2e255(_0x9893cb, 'ver', _0x38f013), console['log'](_0x1aa97b() + '\x20[' + _0x350dc5[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x51a9b9['verificationDelay'] + '\x20ms'), await _0x4378a2(_0x51a9b9['verificationDelay']);
                                            } catch (_0x537aaa) {
                                                console['log'](_0x537aaa);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0xcddd5();
                                    }
                                }
                                ;
                            } else {
                                if (_0x350dc5[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x656fe8(_0x350dc5[taskModule]['modules']);
                                    var _0x38f013 = _0x350dc5[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x54040b('https://bouncewear.com/nl/account/register', _0x38f013);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x350dc5[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x656fe8(_0x350dc5[taskModule]['modules']);
                                        var _0x38f013 = _0x350dc5[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0xc5aa6c = await _0x31669b(), _0x468923 = await _0x16312c();
                                            return await _0x845fa0('https://patta.nl/account/register', _0x38f013, _0x468923, _0xc5aa6c), _0xcddd5();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0xc5aa6c = await _0x31669b(), _0x468923 = await _0x16312c();
                                                return await _0x5505c2('', _0x38f013, _0x468923, _0xc5aa6c), _0xcddd5();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x350dc5[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await _0x656fe8(_0x350dc5[taskModule]['modules']);
                                            var _0x38f013 = _0x350dc5[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0xc5aa6c = await _0x31669b(), _0x13b351 = await _0x16312c();
                                                return await _0x3ab8b7('https://www.kickz.com/nl/login/', _0x38f013, _0x13b351, _0xc5aa6c), _0xcddd5();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0xc5aa6c = await _0x31669b(), _0x13b351 = await _0x16312c();
                                                    return await _0x1f6989(_0x38f013, _0x13b351, _0xc5aa6c), _0xcddd5();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x350dc5[taskModule]['name'] == 'JD') {
                                                taskFunction = await _0x656fe8(_0x350dc5[taskModule]['modules']);
                                                var _0x38f013 = _0x350dc5[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0xc5aa6c = await _0x31669b(), _0x188946 = await _0x16312c();
                                                    return await _0x36439c(_0x38f013, _0x188946, _0xc5aa6c), _0xcddd5();
                                                }
                                            } else {
                                                if (_0x350dc5[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x117eeb = 0x0;
                                                    for (const _0x34074c in _0x51a9b9) {
                                                        console['log']('(' + _0x117eeb + ')\x20' + _0x34074c + '\x20:\x20' + _0x51a9b9[_0x34074c]), _0x117eeb++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x117eeb + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x202a62 = await _0x436e6d();
                                                    if (_0x202a62 == _0x117eeb)
                                                        return _0xcddd5();
                                                    console['clear'];
                                                    var _0x32aec1 = 0x0;
                                                    for (var _0x519e57 in _0x51a9b9) {
                                                        if (_0x202a62 == _0x32aec1) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x519e57 + '\x20:'), _0x51a9b9[_0x519e57] = await _0x102f17(), _0x1756c4['writeFileSync']('../settings.json', JSON['stringify'](_0x51a9b9));
                                                            break;
                                                        } else
                                                            _0x32aec1++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await _0x4378a2(0xbb8), _0xcddd5();
                                                } else {
                                                    if (_0x350dc5[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await _0x8af8cf(), _0xcddd5();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            _0x350dc5[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x4cc7d6 = await _0x3e00b4();
                                                            _0x4cc7d6 == 'ModuleVoorDeBoys' ? (await _0x71605(), await _0xae1082(), await afewFunction(_0x464ec1[_0x3a564c], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x4378a2(0xbb8));
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
            await _0xcddd5();
        } catch (_0x5228fc) {
            return console['log'](_0x5228fc), await _0x4378a2(0x3a98);
        }
}
;
_0x3db4c3('JRaffles\x20' + _0x5b009f), _0x8af8cf();
try {
    _0x395ddc();
} catch (_0x5715d) {
    var _0x1e70c4 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x4a8559
            },
            {
                'name': 'Version',
                'value': '' + _0x5b009f
            },
            {
                'name': 'Error',
                'value': '' + _0x5715d
            }
        ]
    }];
    const _0x345c85 = { 'embeds': _0x1e70c4 };
    _0xf9223d(_0x2e3634, _0x345c85);
}