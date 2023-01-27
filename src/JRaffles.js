var _0x3ba515 = require('exe');
const { execFile: _0x30cf32 } = require('child_process'), _0x115035 = require('puppeteer-extra'), _0x355cb9 = require('puppeteer-extra-plugin-recaptcha'), _0x36a84b = require('puppeteer-extra-plugin-stealth'), _0x459672 = require('chalk'), _0x3e6041 = require('node-bash-title'), _0x4e61b9 = require('fs'), _0x337748 = require('axios'), _0x42e125 = require('papaparse');
var _0xe07cba = require('random-name');
const _0x3a42bb = require('request');
var _0x2d9706 = require('prompt');
const _0x505764 = _0x3a42bb['jar']();
var _0x3a4c3b = {};
const _0x2e56f7 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x5f2398 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x27ff63 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x25887b = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE';
var _0xe04e08 = 'https://discord.com/api/webhooks/', _0x21c007 = '' + _0xe04e08 + _0x27ff63, _0x2f0584 = '' + _0xe04e08 + _0x25887b, _0x3520fe = '' + _0xe04e08 + _0x2e56f7, _0x5d58d2 = '' + _0xe04e08 + _0x5f2398;
const _0x533886 = JSON['parse'](_0x4e61b9['readFileSync']('../package.json', 'utf-8')), _0x62dd8 = _0x533886['version'];
var _0x40e541, _0xefb743, _0x5d31cb, _0x392041, _0x13789d, _0x4e774b, _0x10eec3;
const _0x3c1f2b = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x33f8a0 = ![];
const _0x6820d3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x5a0532 = '0123456789';
var _0x4b8f38 = _0x6820d3['split']('');
const _0x4c5a8b = require('auto-git-update'), { PageEmittedEvents: _0x1bd081 } = require('puppeteer'), { getRandomValues: _0x239dba } = require('crypto'), { resolve: _0x260ca2 } = require('path'), _0x3c1b4d = {
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
}, _0x13ec2c = new _0x4c5a8b(_0x3c1b4d);
async function _0x29f18f() {
    _0x13789d = _0x4e61b9['readdirSync']('../proxies'), _0x392041 = _0x4e61b9['readdirSync']('../tasks'), _0x3a4c3b = JSON['parse'](_0x4e61b9['readFileSync']('../settings.json', 'utf-8')), !_0x3a4c3b['delay'] && (_0x3a4c3b['delay'] = 0x2710, _0x4e61b9['writeFileSync']('../settings.json', JSON['stringify'](_0x3a4c3b))), !_0x3a4c3b['captchaKey'] && (_0x3a4c3b['captchaKey'] = '', _0x4e61b9['writeFileSync']('../settings.json', JSON['stringify'](_0x3a4c3b))), !_0x3a4c3b['useRandomProxy'] && (_0x3a4c3b['useRandomProxy'] = !![], _0x4e61b9['writeFileSync']('../settings.json', JSON['stringify'](_0x3a4c3b))), !_0x3a4c3b['webhook'] && (_0x3a4c3b['webhook'] = '', _0x4e61b9['writeFileSync']('../settings.json', JSON['stringify'](_0x3a4c3b))), _0xe04e08 = _0x3a4c3b['webhook'], _0x4e774b = _0x3a4c3b['licenseKey'];
}
let _0x50fc21, _0x1b6a1d = [], _0x4bec8b;
const _0x4522c4 = _0x328742 => new Promise(_0x2ab77e => setTimeout(_0x2ab77e, _0x328742));
function _0x37ff7e(_0x322806, _0x491877) {
    return Math['floor'](Math['random']() * (_0x491877 - _0x322806 + 0x1) + _0x322806);
}
async function _0x934037(_0x191567) {
    return _0x337748['get']('https://api.hyper.co/v4/licenses/' + _0x191567, { 'headers': { 'Authorization': 'Bearer\x20' + _0x3c1f2b } })['then'](_0x3391b8 => _0x3391b8['data'])['catch'](() => null);
}
;
async function _0x5495ca(_0x3a2aa5) {
    console['clear'](), console['log']('Checking\x20license\x20' + _0x4e774b + '...'), await _0x4522c4(0x5dc);
    const _0x591202 = await _0x934037(_0x3a2aa5);
    _0x10eec3 = JSON['stringify'](_0x591202['user']['username'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x591202)
        return console['log']('License\x20not\x20found');
    if (!_0x591202['user'])
        return console['log']('License\x20not\x20bound');
    return _0x591202['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x33f8a0 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x33f8a0 = ![]);
}
async function _0x917b6b() {
    var _0x4bd8bc = await _0x2d9706['get']('Module');
    return console['clear'](), _0x4bd8bc['Module'];
}
;
async function _0x15f837() {
    var _0x15193e = await _0x2d9706['get']('Setting');
    return console['clear'](), _0x15193e['Setting'];
}
async function _0x5dc501() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x2067c0 = 0x0; _0x2067c0 < _0x392041['length']; _0x2067c0++) {
        console['log']('\x20(' + _0x2067c0 + ')\x20' + _0x392041[_0x2067c0]);
    }
    console['log']('');
    var _0x1d55e5 = await _0x2d9706['get']('Task'), _0x196589 = _0x4e61b9['readFileSync']('../tasks/' + _0x392041[_0x1d55e5['Task']], 'utf-8');
    return _0x5d31cb = _0x42e125['parse'](_0x196589, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x459672['blue'](_0x392041[_0x1d55e5['Task']])), _0x40e541 = _0x392041[_0x1d55e5['Task']], _0x5d31cb;
}
async function _0x21bbee() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0xa5a36e = 0x0; _0xa5a36e < _0x13789d['length']; _0xa5a36e++) {
        console['log']('\x20(' + _0xa5a36e + ')\x20' + _0x13789d[_0xa5a36e]);
    }
    console['log']('');
    var _0x148267 = await _0x2d9706['get']('Proxies'), _0x27f7b2 = _0x4e61b9['readFileSync']('../proxies/' + _0x13789d[_0x148267['Proxies']], 'utf-8')['split']('\x0a');
    let _0x2b284f = _0x27f7b2['map']((_0x432c97, _0x3a0648) => {
        sanatizeProxy = _0x432c97['replace']('\x0d', '');
        if (_0x27f7b2[_0x3a0648 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0xefb743 = _0x13789d[_0x148267['Proxies']], console['clear'](), _0x2b284f;
}
async function _0x4a4e9e() {
    var _0xf5bfad = await _0x2d9706['get']('Value');
    return console['clear'](), _0xf5bfad['Value'];
}
async function _0x301d85(_0x31708c) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x1123ed = 0x0; _0x1123ed < _0x31708c['length']; _0x1123ed++) {
        console['log']('\x20(' + _0x1123ed + ')\x20[' + _0x31708c[_0x1123ed]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x1fbd30 = await _0x2d9706['get']('Module');
    return _0x1fbd30['Module'];
}
async function _0x3df300() {
    var _0xf4d0e9 = await _0x2d9706['get']('Password');
    return console['clear'](), _0xf4d0e9['Password'];
}
;
async function _0x3e493c() {
    var _0x56139f = await _0x2d9706['get']('Links');
    return _0x56139f['Links'];
}
;
async function _0x583a64() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x45e846 = 0x0; _0x45e846 < _0x1b6a1d['length']; _0x45e846++) {
        console['log']('\x20(' + _0x45e846 + ')\x20' + _0x1b6a1d[_0x45e846]);
    }
    ;
    console['log']();
    let _0x4562bb = await _0x2d9706['get']('Product');
    console['clear'](), _0x4bec8b = _0x4562bb['Product'];
    return;
}
;
function _0x37c7ce() {
    var _0x3f7fbc = new Date(Date['now']())['toLocaleTimeString']();
    return _0x3f7fbc;
}
;
const _0x307f86 = [
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
async function _0x1a355b(_0x3ca708, _0x2fc943) {
    let _0x5268d1 = { 'headers': { 'content-type': 'application/json' } };
    await _0x337748['post'](_0x3ca708, _0x2fc943, _0x5268d1);
}
;
async function _0x52aac3(_0x11daa9, _0x2a2212) {
    var _0x2f9517 = _0x11daa9[_0x2a2212]['Address1']['split'](''), _0x4efcb5 = _0x11daa9[_0x2a2212]['Address2']['split'](''), _0x1cb313 = _0x11daa9[_0x2a2212]['Email']['split']('@');
    for (var _0x3462c3 = 0x0; _0x3462c3 < _0x2f9517['length']; _0x3462c3++) {
        if (_0x2f9517[_0x3462c3] == 'X') {
            var _0x439dc0 = Math['round'](Math['random']() * (_0x6820d3['length'] - 0x1));
            _0x2f9517[_0x3462c3] = _0x4b8f38[_0x439dc0];
        }
    }
    ;
    for (var _0x3462c3 = 0x0; _0x3462c3 < _0x4efcb5['length']; _0x3462c3++) {
        if (_0x4efcb5[_0x3462c3] == 'X') {
            var _0x439dc0 = Math['round'](Math['random']() * (_0x6820d3['length'] - 0x1));
            _0x4efcb5[_0x3462c3] = _0x4b8f38[_0x439dc0];
        }
    }
    ;
    _0x11daa9[_0x2a2212]['FirstName'] == 'RANDOM' && (_0x11daa9[_0x2a2212]['FirstName'] = _0xe07cba['first']());
    _0x11daa9[_0x2a2212]['LastName'] == 'RANDOM' && (_0x11daa9[_0x2a2212]['LastName'] = _0xe07cba['last']());
    _0x1cb313[0x0] == 'RANDOM' ? _0x1cb313[0x0] = '' + _0xe07cba['first']() + _0xe07cba['last']() + '@' : _0x1cb313[0x0] = _0x1cb313[0x0] + '@';
    _0x11daa9[_0x2a2212]['Phone'] == 'RANDOM' && (_0x11daa9[_0x2a2212]['Phone'] = _0x37ff7e(0x3b9aca00, 0x2540be3ff));
    if (_0x11daa9[_0x2a2212]['Follower'] == 'RANDOM') {
        var _0x2ae52f = _0x37ff7e(0x1, 0x270f);
        _0x11daa9[_0x2a2212]['Follower'] = '' + _0xe07cba['first']() + _0xe07cba['last']() + _0x2ae52f;
    }
    _0x11daa9[_0x2a2212]['Email'] = _0x1cb313['join'](''), _0x11daa9[_0x2a2212]['Address1'] = _0x2f9517['join'](''), _0x11daa9[_0x2a2212]['Address2'] = _0x4efcb5['join']('');
    return;
}
;
function _0x2c18e2() {
    let _0x4c9a3f = proxyFile['split']('\x0a'), _0x15a46d = _0x4c9a3f['map']((_0x341710, _0x24b598) => {
        sanatizeProxy = _0x341710['replace']('\x0d', '');
        if (_0x4c9a3f[_0x24b598 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x15a46d;
}
;
async function _0x4024b4(_0x5578d6) {
    var _0x5d2cba = _0x5578d6[0x1]['split'](':');
    const _0x4f72b4 = await _0x115035['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x5d2cba[0x0] + ':' + _0x5d2cba[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x57a24c = await _0x4f72b4['newPage']();
        await _0x57a24c['authenticate']({
            'username': '' + _0x5d2cba[0x2],
            'password': '' + _0x5d2cba[0x3]
        }), console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x57a24c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x57a24c['setRequestInterception'](!![]), _0x57a24c['on']('request', _0x20ab57 => {
            _0x20ab57['resourceType']() === 'image' || _0x20ab57['resourceType']() === 'font' || _0x20ab57['resourceType']() === 'media' ? _0x20ab57['abort']() : _0x20ab57['continue']();
        }), await _0x57a24c['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x57a24c['waitForTimeout'](0xbb8), await _0x57a24c['waitForSelector']('.product-card');
        const _0x418f58 = await _0x57a24c['$$eval']('a.product-card', _0x2e79ed => {
            return _0x2e79ed['map'](_0x1e1596 => _0x1e1596['href']);
        });
        return _0x1b6a1d = _0x418f58;
    } catch (_0x25ebdd) {
        console['log']('\x20' + _0x25ebdd);
    } finally {
        _0x4f72b4['close'](), console['clear']();
    }
}
;
async function _0x13a87b(_0x62fd7a, _0x6399f, _0x13ece6, _0x5a36c8, _0x2b0929) {
    await _0x52aac3(_0x5a36c8, _0x62fd7a);
    var _0xb3b33f = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x10eec3
            },
            {
                'name': 'Size',
                'value': '' + _0x5a36c8[_0x62fd7a]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x3a4c3b['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x62dd8
            }
        ]
    }];
    const _0x359f7c = { 'embeds': _0xb3b33f };
    if (_0x3a4c3b['useRandomProxy'] = ![])
        var _0x3373f8 = _0x2b0929[_0x62fd7a]['split'](':');
    else
        var _0xa1e38b = Math['round'](Math['random']() * (_0x2b0929['length'] - 0x1)), _0x3373f8 = _0x2b0929[_0xa1e38b]['split'](':');
    var _0x4bb8d9 = _0x13ece6['data'];
    _0x6399f == 'exp' ? _0x4bb8d9['data']['attributes']['email'] = '' + _0x5a36c8[_0x62fd7a]['FirstName'] + _0x5a36c8[_0x62fd7a]['LastName'] + _0x3a4c3b['catchall'] : _0x4bb8d9['data']['attributes']['email'] = '' + _0x5a36c8[_0x62fd7a]['Email'];
    _0x4bb8d9['data']['attributes']['properties']['$first_name'] = '' + _0x5a36c8[_0x62fd7a]['FirstName'], _0x4bb8d9['data']['attributes']['properties']['$last_name'] = '' + _0x5a36c8[_0x62fd7a]['LastName'], _0x4bb8d9['data']['attributes']['properties']['$address1'] = _0x5a36c8[_0x62fd7a]['Address1'] + '\x20' + _0x5a36c8[_0x62fd7a]['Address2'], _0x4bb8d9['data']['attributes']['properties']['$zip'] = '' + _0x5a36c8[_0x62fd7a]['Zip'], _0x4bb8d9['data']['attributes']['properties']['$city'] = '' + _0x5a36c8[_0x62fd7a]['City'], _0x4bb8d9['data']['attributes']['properties']['$country'] = '' + _0x5a36c8[_0x62fd7a]['Country'], _0x4bb8d9['data']['attributes']['properties']['Size'] = '' + _0x5a36c8[_0x62fd7a]['Size'], _0x4bb8d9['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x5a36c8[_0x62fd7a]['Follower'];
    var _0x22d487 = {
        'jar': _0x505764,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x13ece6['url'],
        'headers': _0x13ece6['headers'],
        'body': JSON['stringify'](_0x4bb8d9),
        'proxy': 'http://' + _0x3373f8[0x2] + ':' + _0x3373f8[0x3] + '@' + _0x3373f8[0x0] + ':' + _0x3373f8[0x1]
    };
    return _0x6399f === 'ver' && (_0x22d487['method'] = 'GET'), new Promise(function (_0x26e813, _0xe2d56a) {
        callback = async (_0x1b7282, _0x1e6a2b, _0x5a24ae) => {
            !_0x1b7282 && _0x1e6a2b['statusCode'] == 0xca || !_0x1b7282 && _0x1e6a2b['statusCode'] == 0xc8 ? _0x26e813(console['log'](_0x459672['green'](_0x37c7ce() + '\x20[' + _0x13ece6['name'] + ']\x20Task\x20' + (_0x62fd7a + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0xb3b33f[0x0]['title'] = 'Failed\x20entry', _0xb3b33f[0x0]['description'] = '' + _0x1b7282, await _0x1a355b(_0x5d58d2, _0x359f7c), _0xe2d56a(console['log'](_0x37c7ce() + '\x20[' + _0x13ece6['name'] + ']\x20Task\x20' + (_0x62fd7a + 0x1) + ':\x20' + _0x1b7282)));
        };
        try {
            _0x6399f === 'ver' ? console['log'](_0x37c7ce() + '\x20[' + _0x13ece6['name'] + ']\x20Task\x20' + (_0x62fd7a + 0x1) + ':\x20Verifying.') : console['log'](_0x37c7ce() + '\x20[' + _0x13ece6['name'] + ']\x20Task\x20' + (_0x62fd7a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4bb8d9['data']['attributes']['email']), _0x3a42bb(_0x22d487, callback);
        } catch (_0x383cff) {
            console['log'](_0x37c7ce() + '\x20Task\x20' + (_0x62fd7a + 0x1) + ':\x20' + _0x383cff);
        }
    });
}
;
async function _0x2d4835(_0x3b14ec, _0x416963) {
    _0x115035['use'](_0x36a84b()), _0x115035['use'](_0x355cb9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3a4c3b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x45ccfc = 0x0; _0x45ccfc < _0x3b14ec['length']; _0x45ccfc++) {
        var _0x309c2d = '', _0x45820b = 0x0, _0x350f22 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x10eec3
                },
                {
                    'name': 'Product',
                    'value': '' + _0x3b14ec[_0x45ccfc]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3b14ec[_0x45ccfc]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x3a4c3b['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x62dd8
                }
            ]
        }];
        const _0x3f05a3 = { 'embeds': _0x350f22 };
        await _0x52aac3(_0x3b14ec, _0x45ccfc);
        if (_0x3b14ec[_0x45ccfc]['Email'] == '' || _0x3b14ec[_0x45ccfc]['FirstName'] == '' || _0x3b14ec[_0x45ccfc]['LastName'] == '' || _0x3b14ec[_0x45ccfc]['Country'] == '' || _0x3b14ec[_0x45ccfc]['Size'] == '' || _0x3b14ec[_0x45ccfc]['Address1'] == '' || _0x3b14ec[_0x45ccfc]['Zip'] == '') {
            console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3b14ec[_0x45ccfc]['Email'] == '' || _0x3b14ec[_0x45ccfc]['FirstName'] == '' || _0x3b14ec[_0x45ccfc]['LastName'] == '' || _0x3b14ec[_0x45ccfc]['Country'] == '' || _0x3b14ec[_0x45ccfc]['Size'] == '' || _0x3b14ec[_0x45ccfc]['Address1'] == '' || _0x3b14ec[_0x45ccfc]['Zip'] == '' || _0x3b14ec[_0x45ccfc]['Phone'] == '') {
            console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x204c60 = '' + _0x3b14ec[_0x45ccfc]['Url'];
        if (_0x3a4c3b['useRandomProxy'] = ![])
            var _0x5dd39b = _0x416963[_0x45ccfc]['split'](':');
        else
            var _0x182b58 = Math['round'](Math['random']() * (_0x416963['length'] - 0x1)), _0x5dd39b = _0x416963[_0x182b58]['split'](':');
        const _0x2ada42 = await _0x115035['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x5dd39b[0x0] + ':' + _0x5dd39b[0x1]]
        });
        try {
            const _0x2295e5 = await _0x2ada42['newPage']();
            await _0x2295e5['authenticate']({
                'username': '' + _0x5dd39b[0x2],
                'password': '' + _0x5dd39b[0x3]
            }), console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2295e5['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2295e5['setRequestInterception'](!![]), _0x2295e5['on']('request', _0x107bec => {
                _0x107bec['resourceType']() === 'image' || _0x107bec['resourceType']() === 'font' || _0x107bec['resourceType']() === 'media' ? _0x107bec['abort']() : _0x107bec['continue']();
            }), await _0x2295e5['goto'](_0x204c60), await _0x4522c4(0xbb8), await _0x2295e5['waitForSelector']('.control__JhutY'), await _0x2295e5['click']('.control__JhutY'), await _0x4522c4(0x1f4);
            if (_0x3b14ec[_0x45ccfc]['Size'] != 'RANDOM')
                try {
                    const _0x48ed87 = await _0x2295e5['$x']('//div[contains(text(),\x20\x27' + _0x3b14ec[_0x45ccfc]['Size'] + '\x27)]');
                    await _0x48ed87[0x0]['click']();
                } catch {
                    console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x4a7c73 = await _0x2295e5['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x4e2ff4 = Math['round'](Math['random']() * (_0x4a7c73['length'] - 0x1));
                await _0x4a7c73[_0x4e2ff4]['click']();
            }
            await _0x4522c4(0x4b0);
            const _0x41c82a = await _0x2295e5['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x41c82a[0x0]['click'](), await _0x2295e5['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x2295e5['type']('input[name=\x22email\x22]', '' + _0x3b14ec[_0x45ccfc]['Email']), await _0x4522c4(0x640), await _0x2295e5['type']('input[name=\x22phone\x22]', '' + _0x3b14ec[_0x45ccfc]['Phone']), await _0x4522c4(0x4b0), await _0x2295e5['click']('button.btn.continue-button__1RtsS'), await _0x4522c4(0x4b0);
            try {
                await _0x2295e5['type']('input[name=\x22firstName\x22]', '' + _0x3b14ec[_0x45ccfc]['FirstName']), await _0x4522c4(0x258);
            } catch {
                const _0x5b485c = await _0x2295e5['$$eval']('.invalid-feedback\x20>\x20div', _0x5bede6 => {
                    return _0x5bede6['map'](_0x1e8017 => _0x1e8017['innerText']);
                });
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x20' + _0x5b485c));
                continue;
            }
            await _0x2295e5['type']('input[name=\x22lastName\x22]', '' + _0x3b14ec[_0x45ccfc]['LastName']), await _0x4522c4(0xc8), await _0x2295e5['type']('input[name=\x22instagramUsername\x22]', '' + _0x3b14ec[_0x45ccfc]['Follower']), await _0x4522c4(0x4b0), await _0x2295e5['click']('button.btn.continue-button__1RtsS'), await _0x4522c4(0x3e8), console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x2295e5['select']('select[name=\x22country\x22]', '' + _0x3b14ec[_0x45ccfc]['Country']), await _0x4522c4(0x2bc), await _0x2295e5['type']('input[name=\x22streetName\x22]', '' + _0x3b14ec[_0x45ccfc]['Address1']), await _0x4522c4(0x258), await _0x2295e5['type']('input[name=\x22houseNumber\x22]', _0x3b14ec[_0x45ccfc]['HouseNumber'] + '\x20' + _0x3b14ec[_0x45ccfc]['Address2']), await _0x4522c4(0xc8), await _0x2295e5['type']('input[name=\x22postalCode\x22]', '' + _0x3b14ec[_0x45ccfc]['Zip']), await _0x4522c4(0x1f4), await _0x2295e5['type']('input[name=\x22city\x22]', '' + _0x3b14ec[_0x45ccfc]['City']), await _0x4522c4(0x4b0), await _0x2295e5['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x4522c4(0x4b0), await _0x2295e5['click']('button.btn.continue-button__1RtsS'), await _0x4522c4(0x4b0), console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x2295e5['solveRecaptchas'](), console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x4522c4(0xbb8), await _0x2295e5['click']('button.btn.continue-button__1RtsS'), await _0x4522c4(0x1388), console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x2295e5['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2295e5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4522c4(0x4b0), await _0x2295e5['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x3b14ec[_0x45ccfc]['CardNumber']), await _0x4522c4(0x320), await _0x2295e5['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2295e5['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x3b14ec[_0x45ccfc]['ExpiryDate']), await _0x4522c4(0x4b0), await _0x2295e5['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2295e5['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x3b14ec[_0x45ccfc]['CVV']), await _0x4522c4(0x226), await _0x2295e5['type']('input[name=\x22holderName\x22]', '' + _0x3b14ec[_0x45ccfc]['NameOnCard']), await _0x4522c4(0x226), await _0x2295e5['click']('button.adyen-checkout__button'), console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x2295e5['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x4522c4(0xbb8), console['log'](_0x459672['green'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1a355b(_0x3520fe, _0x3f05a3);
            } catch {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x2a6533) {
            console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x20' + _0x2a6533), _0x350f22[0x0]['title'] = 'Failed\x20' + _0x307f86[taskModule]['name'] + '\x20entry', _0x350f22[0x0]['description'] = '' + _0x2a6533, await _0x1a355b(_0x5d58d2, _0x3f05a3), _0x309c2d = 'yes';
        } finally {
            _0x2ada42['close']();
            if (_0x309c2d == 'yes' && _0x45820b != 0x5) {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x45ccfc + 0x1) + '\x20:\x20Retrying')), _0x45ccfc = _0x45ccfc - 0x1, _0x45820b = _0x45820b + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x3a4c3b['footshopDelay'] + '\x20ms'), await _0x4522c4(_0x3a4c3b['footshopDelay']);
        }
    }
}
afewFunction = async (_0xc8e1ab, _0x1b37dd, _0x410b59, _0x5ec7aa, _0x788a2) => {
    for (var _0x3686e3 = 0x0; _0x3686e3 < _0x5ec7aa['length']; _0x3686e3++) {
        var _0x2d9ad0 = '', _0x331694 = 0x0;
        _0x3e6041(_0x410b59['name'] + '\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20/\x20' + _0x5ec7aa['length'] + '\x20||\x20File:\x20' + _0x40e541 + '\x20Proxies:\x20' + _0xefb743), await _0x52aac3(_0x5ec7aa, _0x3686e3);
        var _0x53d1bb = [{
            'type': 'rich',
            'title': 'Succesful\x20AFEW\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x10eec3
                },
                {
                    'name': 'Product',
                    'value': '' + _0xc8e1ab
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5ec7aa[_0x3686e3]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x3a4c3b['AfewDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x62dd8
                }
            ]
        }];
        const _0x335708 = { 'embeds': _0x53d1bb };
        if (_0x5ec7aa[_0x3686e3]['Email'] == '' || _0x5ec7aa[_0x3686e3]['FirstName'] == '' || _0x5ec7aa[_0x3686e3]['LastName'] == '' || _0x5ec7aa[_0x3686e3]['Country'] == '' || _0x5ec7aa[_0x3686e3]['Size'] == '' || _0x5ec7aa[_0x3686e3]['Address1'] == '' || _0x5ec7aa[_0x3686e3]['Zip'] == '') {
            console['log'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3a4c3b['useRandomProxy'] = ![])
            var _0x1f37d6 = _0x788a2[_0x3686e3]['split'](':');
        else
            var _0x10c587 = Math['round'](Math['random']() * (_0x788a2['length'] - 0x1)), _0x1f37d6 = _0x788a2[_0x10c587]['split'](':');
        const _0x246a63 = await _0x115035['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1f37d6[0x0] + ':' + _0x1f37d6[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1a94f1 = await _0x246a63['newPage']();
            await _0x1a94f1['setDefaultNavigationTimeout'](0x1d4c0), await _0x1a94f1['authenticate']({
                'username': '' + _0x1f37d6[0x2],
                'password': '' + _0x1f37d6[0x3]
            }), console['log'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1a94f1['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1a94f1['setRequestInterception'](!![]), _0x1a94f1['on']('request', _0x4471a5 => {
                _0x4471a5['resourceType']() === 'image' || _0x4471a5['resourceType']() === 'font' || _0x4471a5['resourceType']() === 'media' ? _0x4471a5['abort']() : _0x4471a5['continue']();
            }), await _0x1a94f1['goto'](_0xc8e1ab, { 'waitUntil': 'networkidle2' }), console['log'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x1a94f1['waitForTimeout'](0xfa0), console['log'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x1a94f1['waitForTimeout'](0x320);
            if (_0x5ec7aa[_0x3686e3]['Size'] == 'RANDOM') {
                console['log'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x3fc367 = await _0x1a94f1['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x144dfd => {
                    return _0x144dfd['map'](_0x463d30 => _0x463d30['href']);
                });
                var _0xeaabb8 = Math['round'](Math['random']() * (_0x3fc367['length'] - 0x1));
                await _0x1a94f1['goto']('' + _0x3fc367[_0xeaabb8]);
            } else {
                console['log'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x5ec7aa[_0x3686e3]['Size']);
                try {
                    const _0x42e9d7 = await _0x1a94f1['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x5ec7aa[_0x3686e3]['Size'] + '\x22]\x20>\x20a', _0x52e5a8 => {
                        return _0x52e5a8['map'](_0xbac417 => _0xbac417['href']);
                    });
                    await _0x1a94f1['goto']('' + _0x42e9d7[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x17a72c) {
                    console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20' + _0x17a72c + '\x20Size\x20not\x20found')), _0x53d1bb[0x0]['title'] = 'Failed\x20entry', _0x53d1bb[0x0]['description'] = 'Size\x20not\x20found', await _0x1a355b(_0x5d58d2, _0x335708);
                    continue;
                }
            }
            await _0x1a94f1['waitForTimeout'](0x258), await _0x1a94f1['type']('#raffle-instagram', '' + _0x5ec7aa[_0x3686e3]['Follower'], { 'delay': 0x64 }), await _0x1a94f1['waitForTimeout'](0x384), await _0x1a94f1['click']('#raffle-terms'), await _0x1a94f1['waitForTimeout'](0x384), await _0x1a94f1['evaluate'](() => {
                const _0x1f45f9 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x1f45f9['click']();
            }), await _0x1a94f1['waitForTimeout'](0xbb8), await _0x1a94f1['waitForSelector']('#checkout_email'), await _0x4522c4(0x3e8), console['log'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x1b37dd == 'sec' ? await _0x1a94f1['type']('#checkout_email', '' + _0x5ec7aa[_0x3686e3]['FirstName'] + _0x5ec7aa[_0x3686e3]['LastName'] + _0x3a4c3b['catchall'], 0x32) : await _0x1a94f1['type']('#checkout_email', '' + _0x5ec7aa[_0x3686e3]['Email'], 0x32);
            await _0x4522c4(0x320), await _0x1a94f1['select']('#checkout_shipping_address_country', '' + _0x5ec7aa[_0x3686e3]['Country']), await _0x1a94f1['waitForTimeout'](0x258), await _0x1a94f1['type']('#checkout_shipping_address_first_name', '' + _0x5ec7aa[_0x3686e3]['FirstName']), await _0x1a94f1['waitForTimeout'](0x320), await _0x1a94f1['type']('#checkout_shipping_address_last_name', '' + _0x5ec7aa[_0x3686e3]['LastName']), await _0x1a94f1['waitForTimeout'](0x2bc), await _0x1a94f1['type']('#checkout_shipping_address_address1', _0x5ec7aa[_0x3686e3]['Address1'] + '\x20' + _0x5ec7aa[_0x3686e3]['HouseNumber']), await _0x1a94f1['waitForTimeout'](0x2bc), await _0x1a94f1['type']('#checkout_shipping_address_address2', '' + _0x5ec7aa[_0x3686e3]['Address2']), await _0x1a94f1['waitForTimeout'](0x2bc);
            _0x5ec7aa[_0x3686e3]['Postcode'] == undefined ? await _0x1a94f1['type']('#checkout_shipping_address_zip', '' + _0x5ec7aa[_0x3686e3]['Zip']) : await _0x1a94f1['type']('#checkout_shipping_address_zip', '' + _0x5ec7aa[_0x3686e3]['Postcode']);
            await _0x1a94f1['waitForTimeout'](0x2bc), await _0x1a94f1['type']('#checkout_shipping_address_city', '' + _0x5ec7aa[_0x3686e3]['City']), await _0x1a94f1['waitForTimeout'](0x2bc), console['log'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x1a94f1, _0x1a94f1['evaluate'](() => {
                const _0x5b078a = document['querySelector']('#continue_button');
                for (var _0x4b202a = 0x0; _0x4b202a < 0x5; _0x4b202a++) {
                    if (_0x5b078a) {
                        _0x5b078a['click'](), _0x5b078a['click']();
                        break;
                    } else
                        _0x4522c4(0xfa0);
                }
            }), await _0x1a94f1['waitForTimeout'](0x1194);
            try {
                await _0x1a94f1['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x1a94f1['evaluate'](() => {
                const _0xe02025 = document['querySelector']('#continue_button');
                for (var _0x51f524 = 0x0; _0x51f524 < 0x5; _0x51f524++) {
                    if (_0xe02025) {
                        _0xe02025['click']();
                        break;
                    } else
                        _0x4522c4(0xfa0);
                }
            }), await _0x1a94f1['waitForTimeout'](0x7d0), console['log'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1a94f1['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x1a94f1['evaluate'](() => {
                const _0xa814c8 = document['querySelector']('#continue_button');
                for (var _0x1adba2 = 0x0; _0x1adba2 < 0x5; _0x1adba2++) {
                    if (_0xa814c8) {
                        _0xa814c8['click']();
                        break;
                    } else
                        _0x4522c4(0xfa0);
                }
            }), await _0x1a94f1['waitForTimeout'](0x1194), await _0x1a94f1['waitForSelector']('#continue_button'), _0x1a94f1['evaluate'](() => {
                const _0x51b6b5 = document['querySelector']('#continue_button');
                for (var _0x3970f8 = 0x0; _0x3970f8 < 0x5; _0x3970f8++) {
                    if (_0x51b6b5) {
                        _0x51b6b5['click']();
                        break;
                    } else
                        _0x4522c4(0xfa0);
                }
            });
            try {
                await _0x1a94f1['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x4e725f) {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x4e725f));
            }
            console['log'](_0x459672['green'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1a355b(_0x3520fe, _0x335708);
        } catch (_0x13af48) {
            console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20' + _0x13af48)), _0x53d1bb[0x0]['title'] = 'Failed\x20entry', _0x53d1bb[0x0]['description'] = '' + _0x13af48, await _0x1a355b(_0x5d58d2, _0x335708), _0x2d9ad0 = 'yes';
        } finally {
            _0x246a63 && _0x246a63['close']();
            if (_0x2d9ad0 == 'yes' && _0x331694 != 0x5) {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x410b59['name'] + ']\x20Task\x20' + (_0x3686e3 + 0x1) + '\x20:\x20Retrying')), _0x3686e3 = _0x3686e3 - 0x1, _0x331694 = _0x331694 + 0x1;
                continue;
            }
            if (_0x3686e3 + 0x1 == _0x5ec7aa['length']) {
                console['log'](_0x459672['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x4522c4(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x3a4c3b['AfewDelay'] + '\x20ms'), await _0x4522c4(_0x3a4c3b['AfewDelay']);
        }
    }
};
async function _0x309644(_0x1c3d47, _0x536dea, _0x2b721b, _0x27524e) {
    _0x115035['use'](_0x36a84b()), _0x115035['use'](_0x355cb9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3a4c3b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x51a668 = 0x0; _0x51a668 < _0x2b721b['length']; _0x51a668++) {
        var _0xd42854 = '', _0x12540b = 0x0;
        _0x3e6041(_0x536dea['name'] + '\x20Task\x20' + (_0x51a668 + 0x1) + '\x20/\x20' + _0x2b721b['length'] + '\x20||\x20File:\x20' + _0x40e541 + '\x20Proxies:\x20' + _0xefb743);
        var _0xebfc6a = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x10eec3
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x3a4c3b['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x62dd8
                }
            ]
        }];
        const _0x33bde8 = { 'embeds': _0xebfc6a };
        await _0x52aac3(_0x2b721b, _0x51a668);
        if (_0x2b721b[_0x51a668]['Email'] == '' || _0x2b721b[_0x51a668]['Password'] == '' || _0x2b721b[_0x51a668]['FirstName'] == '' || _0x2b721b[_0x51a668]['LastName'] == '') {
            console['log'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3a4c3b['useRandomProxy'] = ![])
            var _0x18c7a2 = _0x27524e[_0x51a668]['split'](':');
        else
            var _0xff692d = Math['round'](Math['random']() * (_0x27524e['length'] - 0x1)), _0x18c7a2 = _0x27524e[_0xff692d]['split'](':');
        const _0x3342c2 = await _0x115035['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x18c7a2[0x0] + ':' + _0x18c7a2[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x55a917 = await _0x3342c2['newPage']();
            await _0x55a917['authenticate']({
                'username': '' + _0x18c7a2[0x2],
                'password': '' + _0x18c7a2[0x3]
            }), console['log'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x55a917['setRequestInterception'](!![]), _0x55a917['on']('request', _0x5eec81 => {
                _0x5eec81['resourceType']() === 'image' || _0x5eec81['resourceType']() === 'font' || _0x5eec81['resourceType']() === 'media' ? _0x5eec81['abort']() : _0x5eec81['continue']();
            }), await _0x55a917['goto'](_0x1c3d47), await _0x4522c4(0xbb8), console['log'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x55a917['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x55a917['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x55a917['waitForSelector']('#button-register'), await _0x4522c4(0x7d0), await _0x55a917['evaluate'](() => {
                const _0x396263 = document['querySelector']('#button-register');
                _0x396263['click']();
            }), console['log'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4522c4(0x1388), await _0x55a917['waitForSelector']('#customer_salutation'), await _0x55a917['select']('#customer_salutation', 'mr'), await _0x4522c4(0x7d0), await _0x55a917['waitForSelector']('#customer_firstname'), await _0x55a917['type']('#customer_firstname', '' + _0x2b721b[_0x51a668]['FirstName']), await _0x4522c4(0x352), await _0x55a917['waitForSelector']('#customer_lastname'), await _0x55a917['type']('#customer_lastname', '' + _0x2b721b[_0x51a668]['LastName']), await _0x4522c4(0x352), await _0x55a917['type']('#email-input', '' + _0x2b721b[_0x51a668]['Email']), await _0x4522c4(0x352), await _0x55a917['type']('#email-confirm-input', '' + _0x2b721b[_0x51a668]['Email']), await _0x4522c4(0x352), await _0x55a917['type']('#register-password', '' + _0x2b721b[_0x51a668]['Password']), await _0x4522c4(0x352), await _0x55a917['type']('#password-confirm', '' + _0x2b721b[_0x51a668]['Password']), await _0x4522c4(0x352), console['log'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x55a917['click']('#consent'), await _0x4522c4(0x1f4);
            const _0x55b76e = await _0x55a917['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x55b76e) {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x55a917['click']('#buttonRegister');
            try {
                await _0x55a917['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x459672['yellow'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20Account\x20' + _0x2b721b[_0x51a668]['Email'] + '\x20Generated!')), console['log'](_0x459672['yellow'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x2b721b[_0x51a668]['Email'])), await _0x4522c4(0x4b0);
            async function _0x257b10() {
                console['log'](_0x459672['yellow'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0xa91556 = await _0x2d9706['get']('Code');
                return _0xa91556['Code'];
            }
            ;
            code = await _0x257b10(), _0x4522c4(0x320), console['log'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20Verifying..'), await _0x55a917['type']('#verificationCode', code), await _0x4522c4(0x1f4), await _0x55a917['click']('#buttonVerify'), await _0x4522c4(0x190), await _0x55a917['click']('#buttonVerify'), await _0x4522c4(0x3e8);
            try {
                await _0x55a917['waitForSelector']('div.b-user_greeting'), console['log'](_0x459672['green'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20Account\x20' + _0x2b721b[_0x51a668]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x4e61b9['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x2b721b[_0x51a668]['Email'] + ',' + _0x2b721b[_0x51a668]['Password'] + ','), console['log'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20Account\x20' + _0x2b721b[_0x51a668]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27'), await _0x1a355b(_0x2f0584, _0x33bde8);
            } catch {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x4aee7c) {
            console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20' + _0x4aee7c)), _0xebfc6a[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0xebfc6a[0x0]['description'] = '' + _0x4aee7c, await _0x1a355b(_0x5d58d2, _0x33bde8), _0xd42854 = 'yes';
        } finally {
            _0x3342c2 && _0x3342c2['close']();
            if (_0xd42854 == 'yes' && _0x12540b != 0x5) {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x536dea['name'] + ']\x20Task\x20' + (_0x51a668 + 0x1) + '\x20:\x20Retrying')), _0x51a668 = _0x51a668 - 0x1, _0x12540b = _0x12540b + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x3a4c3b['delay'] + '\x20ms'), await _0x4522c4(_0x3a4c3b['delay']);
        }
    }
}
async function _0xe8e981(_0x34383a, _0x3baaca, _0x22aec3) {
    _0x115035['use'](_0x36a84b()), _0x115035['use'](_0x355cb9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3a4c3b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xdfe928 = 0x0; _0xdfe928 < _0x3baaca['length']; _0xdfe928++) {
        var _0x2fef63 = '', _0x5a1033 = 0x0;
        _0x3e6041(_0x34383a['name'] + '\x20Task\x20' + (_0xdfe928 + 0x1) + '\x20/\x20' + _0x3baaca['length'] + '\x20||\x20File:\x20' + _0x40e541 + '\x20Proxies:\x20' + _0xefb743);
        var _0x16b176 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x10eec3
                },
                {
                    'name': 'Product',
                    'value': '' + _0x3baaca[_0xdfe928]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3baaca[_0xdfe928]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x3a4c3b['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x62dd8
                }
            ]
        }];
        const _0x36aeea = { 'embeds': _0x16b176 };
        await _0x52aac3(_0x3baaca, _0xdfe928);
        if (_0x3baaca[_0xdfe928]['Email'] == '' || _0x3baaca[_0xdfe928]['Password'] == '' || _0x3baaca[_0xdfe928]['FirstName'] == '' || _0x3baaca[_0xdfe928]['LastName'] == '') {
            console['log'](_0x37c7ce() + '\x20[' + _0x34383a['name'] + ']\x20Task\x20' + (_0xdfe928 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3a4c3b['useRandomProxy'] = ![])
            var _0x453214 = _0x22aec3[_0xdfe928]['split'](':');
        else
            var _0xab7c14 = Math['round'](Math['random']() * (_0x22aec3['length'] - 0x1)), _0x453214 = _0x22aec3[_0xab7c14]['split'](':');
        const _0x164dbd = await _0x115035['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x453214[0x0] + ':' + _0x453214[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5d2fad = await _0x164dbd['newPage']();
            await _0x5d2fad['authenticate']({
                'username': '' + _0x453214[0x2],
                'password': '' + _0x453214[0x3]
            }), console['log'](_0x37c7ce() + '\x20[' + _0x34383a['name'] + ']\x20Task\x20' + (_0xdfe928 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5d2fad['setRequestInterception'](!![]), _0x5d2fad['on']('request', _0x2986ae => {
                _0x2986ae['resourceType']() === 'image' || _0x2986ae['resourceType']() === 'font' || _0x2986ae['resourceType']() === 'media' ? _0x2986ae['abort']() : _0x2986ae['continue']();
            }), await _0x5d2fad['goto']('' + _0x3baaca[_0xdfe928]['Url'], { 'waitUntil': 'networkidle2' }), await _0x4522c4(0x12c);
            try {
                await _0x5d2fad['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x5d2fad['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x37c7ce() + '\x20[' + _0x34383a['name'] + ']\x20Task\x20' + (_0xdfe928 + 0x1) + '\x20:\x20Logging\x20in'), await _0x5d2fad['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5d2fad['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5d2fad['waitForSelector']('#username'), await _0x5d2fad['type']('#username', _0x3baaca[_0xdfe928]['Email']), await _0x5d2fad['waitForSelector']('#password'), await _0x5d2fad['type']('#password', _0x3baaca[_0xdfe928]['Password']), await _0x4522c4(0x190), await _0x5d2fad['click']('#buttonSubmit'), await _0x5d2fad['waitForSelector']('div.b-user_greeting'), console['log'](_0x37c7ce() + '\x20[' + _0x34383a['name'] + ']\x20Task\x20' + (_0xdfe928 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x4522c4(0x1f4), await _0x5d2fad['goto']('' + _0x3baaca[_0xdfe928]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x37c7ce() + '\x20[' + _0x34383a['name'] + ']\x20Task\x20' + (_0xdfe928 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x3baaca[_0xdfe928]['Size']);
            let _0xf6ecdb = _0x3baaca[_0xdfe928]['Size']['replace']('.5', '\x201/2');
            await _0x5d2fad['click']('button[title=\x22' + _0xf6ecdb + '\x22]'), await _0x4522c4(0x1f4);
            try {
                await _0x5d2fad['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x4522c4(0x12c), console['log'](_0x37c7ce() + '\x20[' + _0x34383a['name'] + ']\x20Task\x20' + (_0xdfe928 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5d2fad['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x4522c4(0x12c), await _0x5d2fad['type']('#dwfrm_raffle_addressFields_firstName', _0x3baaca[_0xdfe928]['FirstName']), await _0x4522c4(0x12c), await _0x5d2fad['type']('#dwfrm_raffle_addressFields_lastName', _0x3baaca[_0xdfe928]['LastName']), await _0x4522c4(0x12c), await _0x5d2fad['select']('#dwfrm_raffle_addressFields_country', _0x3baaca[_0xdfe928]['Country']), await _0x4522c4(0x12c), await _0x5d2fad['type']('#dwfrm_raffle_addressFields_city', _0x3baaca[_0xdfe928]['City']), await _0x4522c4(0x12c);
            _0x3baaca[_0xdfe928]['Postcode'] == undefined && (_0x3baaca[_0xdfe928]['Postcode'] = _0x3baaca[_0xdfe928]['Zip']);
            await _0x5d2fad['type']('#dwfrm_raffle_addressFields_postalCode', _0x3baaca[_0xdfe928]['Postcode']), await _0x4522c4(0x12c), await _0x5d2fad['type']('#dwfrm_raffle_addressFields_address1', _0x3baaca[_0xdfe928]['Address1']), await _0x4522c4(0x12c), await _0x5d2fad['type']('#dwfrm_raffle_addressFields_address2', _0x3baaca[_0xdfe928]['HouseNumber']), await _0x4522c4(0x12c), await _0x5d2fad['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x3baaca[_0xdfe928]['Address2']), await _0x4522c4(0x12c), await _0x5d2fad['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x4522c4(0x12c), await _0x5d2fad['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x3baaca[_0xdfe928]['Follower']), await _0x4522c4(0x1f4), await _0x5d2fad['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x4522c4(0x1f4), console['log'](_0x37c7ce() + '\x20[' + _0x34383a['name'] + ']\x20Task\x20' + (_0xdfe928 + 0x1) + '\x20:\x20' + _0x459672['blue']('Awaiting\x20Paypal\x20Payment')), await _0x5d2fad['click']('.b-paypal_button');
            try {
                await _0x5d2fad['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x459672['green'](_0x37c7ce() + '\x20[' + _0x34383a['name'] + ']\x20Task\x20' + (_0xdfe928 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1a355b(_0x3520fe, _0x36aeea);
            } catch (_0x563fa4) {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x34383a['name'] + ']\x20Task\x20' + (_0xdfe928 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x563fa4));
            }
        } catch (_0x3c64b5) {
            console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x34383a['name'] + ']\x20Task\x20' + (_0xdfe928 + 0x1) + '\x20:\x20' + _0x3c64b5)), _0x16b176[0x0]['title'] = 'Failed\x20kickz\x20Entry', _0x16b176[0x0]['description'] = '' + _0x3c64b5, await _0x1a355b(_0x5d58d2, _0x36aeea), _0x2fef63 = 'yes';
        } finally {
            _0x164dbd && _0x164dbd['close']();
            if (_0x2fef63 == 'yes' && _0x5a1033 != 0x5) {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x34383a['name'] + ']\x20Task\x20' + (_0xdfe928 + 0x1) + '\x20:\x20Retrying')), _0xdfe928 = _0xdfe928 - 0x1, _0x5a1033 = _0x5a1033 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x3a4c3b['AfewDelay'] + '\x20ms'), await _0x4522c4(_0x3a4c3b['AfewDelay']);
        }
    }
}
async function _0x783202(_0x5d5849, _0x39c5c5) {
    _0x115035['use'](_0x36a84b()), _0x115035['use'](_0x355cb9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3a4c3b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x9a6ff8 = 0x0; _0x9a6ff8 < bouncewear['length']; _0x9a6ff8++) {
        await _0x52aac3(bouncewear, _0x9a6ff8);
        if (bouncewear[_0x9a6ff8]['Email'] == '' || bouncewear[_0x9a6ff8]['Password'] == '' || bouncewear[_0x9a6ff8]['FirstName'] == '' || bouncewear[_0x9a6ff8]['LastName'] == '') {
            console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x9a6ff8 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3a4c3b['useRandomProxy'] = ![])
            var _0x79746b = _0x2c18e2()[_0x9a6ff8]['split'](':');
        else
            var _0x29fc8a = Math['round'](Math['random']() * (_0x2c18e2()['length'] - 0x1)), _0x79746b = _0x2c18e2()[_0x29fc8a]['split'](':');
        const _0x3824ee = await _0x115035['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x79746b[0x0] + ':' + _0x79746b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x22d857 = await _0x3824ee['newPage']();
            await _0x22d857['authenticate']({
                'username': '' + _0x79746b[0x2],
                'password': '' + _0x79746b[0x3]
            }), console['log'](_0x37c7ce() + '\x20[' + _0x39c5c5['name'] + ']\x20Task\x20' + (_0x9a6ff8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x22d857['setRequestInterception'](!![]), _0x22d857['on']('request', _0x2f38bd => {
                _0x2f38bd['resourceType']() === 'image' || _0x2f38bd['resourceType']() === 'font' || _0x2f38bd['resourceType']() === 'media' ? _0x2f38bd['abort']() : _0x2f38bd['continue']();
            }), await _0x22d857['goto'](_0x5d5849), await _0x4522c4(0xbb8), await _0x22d857['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x37c7ce() + '\x20[' + _0x39c5c5['name'] + ']\x20Task\x20' + (_0x9a6ff8 + 0x1) + '\x20:\x20Filling\x20information'), await _0x22d857['type']('#RegisterForm-FirstName', '' + bouncewear[_0x9a6ff8]['FirstName']), await _0x4522c4(0x226), await _0x22d857['type']('#RegisterForm-LastName', '' + bouncewear[_0x9a6ff8]['LastName']), await _0x4522c4(0x226), await _0x22d857['type']('#RegisterForm-email', '' + bouncewear[_0x9a6ff8]['Email']), await _0x4522c4(0x226), await _0x22d857['type']('#RegisterForm-password', '' + bouncewear[_0x9a6ff8]['Password']), await _0x4522c4(0x226), await _0x22d857['click']('#marketing'), console['log'](_0x37c7ce() + '\x20[' + _0x39c5c5['name'] + ']\x20Task\x20' + (_0x9a6ff8 + 0x1) + '\x20:\x20Submitting..'), await _0x22d857['$eval']('#RegisterForm', _0x26a581 => _0x26a581['submit']()), await _0x4522c4(0x1f40), console['log'](_0x37c7ce() + '\x20[' + _0x39c5c5['name'] + ']\x20Task\x20' + (_0x9a6ff8 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x22d857['solveRecaptchas'](), await _0x22d857['click']('.shopify-challenge__button.btn');
            async function _0x249817() {
                for (var _0x12a6cf = 0x0; _0x12a6cf < 0x4; _0x12a6cf++) {
                    try {
                        console['log']('try'), await _0x22d857['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x37c7ce() + '\x20[' + _0x39c5c5['name'] + ']\x20Task\x20' + (_0x9a6ff8 + 0x1) + '\x20:\x20' + _0x459672['red']('Catpcha\x20failed,\x20retrying..')), await _0x22d857['solveRecaptchas'](), await _0x22d857['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x249817(), console['log'](_0x37c7ce() + '\x20[' + _0x39c5c5['name'] + ']\x20Task\x20' + (_0x9a6ff8 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x4522c4(0x1f4);
            try {
                await _0x22d857['waitForSelector']('.featured-title'), await _0x4522c4(0x1f4), console['log'](_0x459672['green'](_0x37c7ce() + '\x20[' + _0x39c5c5['name'] + ']\x20Task\x20' + (_0x9a6ff8 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x9a6ff8]['Email'] + '\x20Generated!')), _0x4e61b9['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x9a6ff8]['Email'] + ',' + bouncewear[_0x9a6ff8]['Password']), console['log'](_0x459672['yellow'](_0x37c7ce() + '\x20[' + _0x39c5c5['name'] + ']\x20Task\x20' + (_0x9a6ff8 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x9a6ff8]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x40fdcf) {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x9a6ff8 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x40fdcf));
            }
        } catch (_0x3a98b0) {
            console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x9a6ff8 + 0x1) + '\x20:\x20' + _0x3a98b0));
        } finally {
            _0x3824ee && _0x3824ee['close'](), console['log']('Waiting\x20for\x20' + _0x3a4c3b['delay'] + '\x20ms'), await _0x4522c4(_0x3a4c3b['delay']);
        }
    }
}
async function _0x55dee1(_0x4d6125, _0x4d29f1, _0x5261a3, _0x1b0da4) {
    _0x115035['use'](_0x36a84b()), _0x115035['use'](_0x355cb9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3a4c3b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x411fc9 = 0x0; _0x411fc9 < _0x5261a3['length']; _0x411fc9++) {
        var _0xef72f3 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x10eec3
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x3a4c3b['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x62dd8
                }
            ]
        }];
        const _0x98ddb9 = { 'embeds': _0xef72f3 };
        _0x3e6041(_0x4d29f1['name'] + '\x20Task\x20' + (_0x411fc9 + 0x1) + '\x20/\x20' + _0x5261a3['length'] + '\x20||\x20File:\x20' + _0x40e541 + '\x20Proxies:\x20' + _0xefb743), await _0x52aac3(_0x5261a3, _0x411fc9);
        if (_0x5261a3[_0x411fc9]['Email'] == '' || _0x5261a3[_0x411fc9]['Password'] == '' || _0x5261a3[_0x411fc9]['Password'] == undefined || _0x5261a3[_0x411fc9]['FirstName'] == '' || _0x5261a3[_0x411fc9]['LastName'] == '') {
            console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x411fc9 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3a4c3b['useRandomProxy'] = ![])
            var _0x191b02 = _0x1b0da4[_0x411fc9]['split'](':');
        else
            var _0x758075 = Math['round'](Math['random']() * (_0x1b0da4['length'] - 0x1)), _0x191b02 = _0x1b0da4[_0x758075]['split'](':');
        const _0x1503f8 = await _0x115035['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x191b02[0x0] + ':' + _0x191b02[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2b1097 = await _0x1503f8['newPage']();
            await _0x2b1097['authenticate']({
                'username': '' + _0x191b02[0x2],
                'password': '' + _0x191b02[0x3]
            }), console['log'](_0x37c7ce() + '\x20[' + _0x4d29f1['name'] + ']\x20Task\x20' + (_0x411fc9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2b1097['setRequestInterception'](!![]), _0x2b1097['on']('request', _0x437761 => {
                _0x437761['resourceType']() === 'image' || _0x437761['resourceType']() === 'font' || _0x437761['resourceType']() === 'media' ? _0x437761['abort']() : _0x437761['continue']();
            }), await _0x2b1097['goto'](_0x4d6125), await _0x4522c4(0xbb8), await _0x2b1097['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x37c7ce() + '\x20[' + _0x4d29f1['name'] + ']\x20Task\x20' + (_0x411fc9 + 0x1) + '\x20:\x20Filling\x20information'), await _0x2b1097['type']('#RegisterForm-FirstName', '' + _0x5261a3[_0x411fc9]['FirstName']), await _0x4522c4(0x226), await _0x2b1097['type']('#RegisterForm-LastName', '' + _0x5261a3[_0x411fc9]['LastName']), await _0x4522c4(0x226), await _0x2b1097['type']('#RegisterForm-email', '' + _0x5261a3[_0x411fc9]['Email']), await _0x4522c4(0x226), await _0x2b1097['type']('#RegisterForm-password', '' + _0x5261a3[_0x411fc9]['Password']), await _0x4522c4(0x226), console['log'](_0x37c7ce() + '\x20[' + _0x4d29f1['name'] + ']\x20Task\x20' + (_0x411fc9 + 0x1) + '\x20:\x20Submitting..'), await _0x2b1097['$eval']('#RegisterForm', _0x59011b => _0x59011b['submit']()), await _0x4522c4(0x1f40);
            try {
                await _0x2b1097['waitForSelector']('.home-page-grid__collection'), await _0x4522c4(0x1f4), console['log'](_0x459672['green'](_0x37c7ce() + '\x20[' + _0x4d29f1['name'] + ']\x20Task\x20' + (_0x411fc9 + 0x1) + '\x20:\x20Account\x20' + _0x5261a3[_0x411fc9]['Email'] + '\x20Generated!')), _0x4e61b9['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x5261a3[_0x411fc9]['Email'] + ',' + _0x5261a3[_0x411fc9]['Password']), console['log'](_0x459672['yellow'](_0x37c7ce() + '\x20[' + _0x4d29f1['name'] + ']\x20Task\x20' + (_0x411fc9 + 0x1) + '\x20:\x20Account\x20' + _0x5261a3[_0x411fc9]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27')), await _0x1a355b(_0x2f0584, _0x98ddb9);
            } catch (_0x498ce7) {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x411fc9 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x498ce7));
            }
        } catch (_0x1d80c4) {
            console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x411fc9 + 0x1) + '\x20:\x20' + _0x1d80c4));
        } finally {
            _0x1503f8 && _0x1503f8['close'](), console['log']('Waiting\x20for\x20' + _0x3a4c3b['delay'] + '\x20ms'), await _0x4522c4(_0x3a4c3b['delay']);
        }
    }
}
async function _0x519ab6(_0x56263d, _0xbbac01, _0x1f11c1, _0x2c8d0c) {
    _0x115035['use'](_0x36a84b()), _0x115035['use'](_0x355cb9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3a4c3b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x495712 = 0x0; _0x495712 < _0x1f11c1['length']; _0x495712++) {
        var _0x2611e0 = '', _0x3ea214 = 0x0;
        _0x3e6041(_0xbbac01['name'] + '\x20Task\x20' + (_0x495712 + 0x1) + '\x20/\x20' + _0x1f11c1['length'] + '\x20||\x20File:\x20' + _0x40e541 + '\x20Proxies:\x20' + _0xefb743), await _0x52aac3(_0x1f11c1, _0x495712);
        if (_0x1f11c1[_0x495712]['Email'] == '' || _0x1f11c1[_0x495712]['Password'] == '' || _0x1f11c1[_0x495712]['FirstName'] == '' || _0x1f11c1[_0x495712]['LastName'] == '') {
            console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x495712 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3a4c3b['useRandomProxy'] = ![])
            var _0x33c3c1 = _0x2c8d0c[_0x495712]['split'](':');
        else
            var _0x1b9ac1 = Math['round'](Math['random']() * (_0x2c8d0c['length'] - 0x1)), _0x33c3c1 = _0x2c8d0c[_0x1b9ac1]['split'](':');
        const _0x5e78f6 = await _0x115035['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x33c3c1[0x0] + ':' + _0x33c3c1[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4d60ea = await _0x5e78f6['newPage']();
            await _0x4d60ea['authenticate']({
                'username': '' + _0x33c3c1[0x2],
                'password': '' + _0x33c3c1[0x3]
            }), console['log'](_0x37c7ce() + '\x20[' + _0xbbac01['name'] + ']\x20Task\x20' + (_0x495712 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4d60ea['setRequestInterception'](!![]), _0x4d60ea['on']('request', _0x56deec => {
                _0x56deec['resourceType']() === 'image' || _0x56deec['resourceType']() === 'font' || _0x56deec['resourceType']() === 'media' ? _0x56deec['abort']() : _0x56deec['continue']();
            }), await _0x4d60ea['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4d60ea['waitForSelector']('#CustomerEmail'), console['log'](_0x37c7ce() + '\x20[' + _0xbbac01['name'] + ']\x20Task\x20' + (_0x495712 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4d60ea['type']('#CustomerEmail', '' + _0x1f11c1[_0x495712]['Email']), await _0x4522c4(0x12c), await _0x4d60ea['type']('#CustomerPassword', '' + _0x1f11c1[_0x495712]['Password']), await _0x4522c4(0x226), await _0x4d60ea['$eval']('#customer_login', _0x52440e => _0x52440e['submit']());
            try {
                await _0x4d60ea['waitForSelector']('#orders'), await _0x4522c4(0x4b0);
            } catch {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0xbbac01['name'] + ']\x20Task\x20' + (_0x495712 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x4d60ea['goto']('' + _0x1f11c1[_0x495712]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4522c4(0xbb8), console['log'](_0x37c7ce() + '\x20[' + _0xbbac01['name'] + ']\x20Task\x20' + (_0x495712 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x4d60ea['waitForSelector']('#email');
            } catch {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0xbbac01['name'] + ']\x20Task\x20' + (_0x495712 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x4d60ea['type']('#email', '' + _0x1f11c1[_0x495712]['Email']), await _0x4522c4(0x384), await _0x4d60ea['type']('#first_name', '' + _0x1f11c1[_0x495712]['FirstName']), await _0x4522c4(0x514), await _0x4d60ea['type']('#last_name', '' + _0x1f11c1[_0x495712]['LastName']), await _0x4522c4(0x514), await _0x4d60ea['type']('#street_address', _0x1f11c1[_0x495712]['Address1'] + '\x20' + _0x1f11c1[_0x495712]['HouseNumber'] + '\x20' + _0x1f11c1[_0x495712]['Address2']), await _0x4522c4(0x2bc);
            _0x1f11c1[_0x495712]['Postcode'] == undefined && (_0x1f11c1[_0x495712]['Postcode'] = _0x1f11c1[_0x495712]['Zip']);
            await _0x4d60ea['type']('#zip_code', '' + _0x1f11c1[_0x495712]['Postcode']), await _0x4522c4(0x320), await _0x4d60ea['type']('#city', '' + _0x1f11c1[_0x495712]['City']), await _0x4522c4(0x320), await _0x4d60ea['type']('#bday', '01/01/1994'), await _0x4522c4(0x320), await _0x4d60ea['type']('#instagram', '' + _0x1f11c1[_0x495712]['Follower']), await _0x4522c4(0x352);
            if (_0x1f11c1[_0x495712]['Size'] == 'RANDOM') {
                const _0x97a94c = await _0x4d60ea['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x1f451f => {
                    return _0x1f451f['map'](_0x3ad537 => _0x3ad537['textContent']);
                });
                var _0x35b9a7 = Math['round'](Math['random']() * (_0x97a94c['length'] - 0x1));
                console['log'](_0x37c7ce() + '\x20[' + _0xbbac01['name'] + ']\x20Task\x20' + (_0x495712 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x97a94c[_0x35b9a7]), await _0x4d60ea['click']('label[data-eu-size=\x22' + _0x97a94c[_0x35b9a7] + '\x22]');
            } else {
                console['log'](_0x37c7ce() + '\x20[' + _0xbbac01['name'] + ']\x20Task\x20' + (_0x495712 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x1f11c1[_0x495712]['Size']);
                try {
                    await _0x4d60ea['click']('label[data-eu-size=\x22' + _0x1f11c1[_0x495712]['Size'] + '\x22]');
                } catch {
                    await _0x4d60ea['click']('label[data-eu-size=\x22' + _0x1f11c1[_0x495712]['Size'] + '.0\x22]');
                }
            }
            await _0x4522c4(0xbb8), await _0x4d60ea['$$eval']('.raffle__checkbox-label', _0x528f28 => _0x528f28['forEach'](_0x3a6160 => _0x3a6160['click']())), await _0x4522c4(0x7d0), console['log'](_0x37c7ce() + '\x20[' + _0xbbac01['name'] + ']\x20Task\x20' + (_0x495712 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x4d60ea['click']('#raffle__form-submit'), await _0x4522c4(0x1388);
            try {
                await _0x4d60ea['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x459672['green'](_0x37c7ce() + '\x20[' + _0xbbac01['name'] + ']\x20Task\x20' + (_0x495712 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x271333) {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x495712 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x271333));
            }
        } catch (_0x440764) {
            console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x495712 + 0x1) + '\x20:\x20' + _0x440764)), _0x2611e0 = 'yes';
        } finally {
            _0x5e78f6 && _0x5e78f6['close']();
            if (_0x2611e0 == 'yes' && _0x3ea214 != 0x5) {
                console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0xbbac01['name'] + ']\x20Task\x20' + (_0x495712 + 0x1) + '\x20:\x20Retrying')), _0x495712 = _0x495712 - 0x1, _0x3ea214 = _0x3ea214 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x3a4c3b['delay'] + '\x20ms'), await _0x4522c4(_0x3a4c3b['delay']);
        }
    }
}
async function _0x484a40(_0x34b115, _0x3ad753, _0x4cf8d5) {
    var _0x2d5b2f = ![], _0x419d9d = ![];
    if (_0x3a4c3b['captchaKey'] == '' || _0x3a4c3b['captchaKey'] == undefined)
        return console['log'](_0x459672['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x115035['use'](_0x36a84b()), _0x115035['use'](_0x355cb9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3a4c3b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1a8a2e = 0x0; _0x1a8a2e < _0x3ad753['length']; _0x1a8a2e++) {
        var _0x47dc6c = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x3ad753[_0x1a8a2e]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3ad753[_0x1a8a2e]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x10eec3
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x3a4c3b['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x62dd8
                }
            ]
        }];
        const _0x40c418 = { 'embeds': _0x47dc6c };
        _0x3e6041(_0x34b115['name'] + '\x20Task\x20' + (_0x1a8a2e + 0x1) + '\x20/\x20' + _0x3ad753['length'] + '\x20||\x20File:\x20' + _0x40e541 + '\x20Proxies:\x20' + _0xefb743), await _0x52aac3(_0x3ad753, _0x1a8a2e);
        if (_0x3ad753[_0x1a8a2e]['Email'] == '' || _0x3ad753[_0x1a8a2e]['Url'] == '' || _0x3ad753[_0x1a8a2e]['FirstName'] == '' || _0x3ad753[_0x1a8a2e]['LastName'] == '') {
            console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x1a8a2e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3a4c3b['useRandomProxy'] = ![])
            var _0x1f861e = _0x4cf8d5[_0x1a8a2e]['split'](':');
        else
            var _0x59ccbf = Math['round'](Math['random']() * (_0x4cf8d5['length'] - 0x1)), _0x1f861e = _0x4cf8d5[_0x59ccbf]['split'](':');
        const _0x5c0cfd = await _0x115035['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1f861e[0x0] + ':' + _0x1f861e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2e3a18 = await _0x5c0cfd['newPage']();
            await _0x2e3a18['authenticate']({
                'username': '' + _0x1f861e[0x2],
                'password': '' + _0x1f861e[0x3]
            }), console['log'](_0x37c7ce() + '\x20[' + _0x34b115['name'] + ']\x20Task\x20' + (_0x1a8a2e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2e3a18['setRequestInterception'](!![]), _0x2e3a18['on']('request', _0x6aabed => {
                _0x6aabed['resourceType']() === 'image' || _0x6aabed['resourceType']() === 'font' || _0x6aabed['resourceType']() === 'media' ? _0x6aabed['abort']() : _0x6aabed['continue']();
            }), await _0x2e3a18['goto']('' + _0x3ad753[_0x1a8a2e]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](_0x37c7ce() + '\x20[' + _0x34b115['name'] + ']\x20Task\x20' + (_0x1a8a2e + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x2e3a18['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x2e3a18['type']('#comp_firstname', '' + _0x3ad753[_0x1a8a2e]['FirstName']), await _0x2e3a18['waitForSelector']('#comp_lastname'), await _0x2e3a18['type']('#comp_lastname', '' + _0x3ad753[_0x1a8a2e]['LastName']), await _0x2e3a18['waitForSelector']('#comp_email'), await _0x2e3a18['type']('#comp_email', '' + _0x3ad753[_0x1a8a2e]['Email']), await _0x2e3a18['waitForSelector']('#comp_paypalemail'), await _0x2e3a18['type']('#comp_paypalemail', '' + _0x3ad753[_0x1a8a2e]['Email']), await _0x2e3a18['waitForSelector']('#comp_mobile_end'), await _0x2e3a18['type']('#comp_mobile_end', '' + _0x3ad753[_0x1a8a2e]['Phone']), await _0x2e3a18['waitForSelector']('#comp_dob'), await _0x2e3a18['type']('#comp_dob', '08/09/1992'), console['log'](_0x37c7ce() + '\x20[' + _0x34b115['name'] + ']\x20Task\x20' + (_0x1a8a2e + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x3ad753[_0x1a8a2e]['Size'] == 'RANDOM') {
                const _0x1ee210 = await _0x2e3a18['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x425be9 => {
                    return _0x425be9['map'](_0x7bad10 => _0x7bad10['value']);
                });
                var _0x463eec = Math['round'](Math['random']() * (_0x1ee210['length'] - 0x2));
                await _0x2e3a18['select']('#shoesize', _0x1ee210[_0x463eec + 0x1]), await _0x4522c4(0x3e8);
            } else {
                const _0x5a9306 = await _0x2e3a18['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1ad75b => {
                    return _0x1ad75b['map'](_0x52c685 => _0x52c685['innerText']);
                }), _0x4f4734 = await _0x2e3a18['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3fe521 => {
                    return _0x3fe521['map'](_0x1bdb32 => _0x1bdb32['value']);
                });
                var _0x3b7b32 = _0x3ad753[_0x1a8a2e]['Size'];
                for (var _0x1140df = 0x1; _0x1140df < _0x4f4734['length']; _0x1140df++) {
                    var _0x35b6cf = _0x5a9306[_0x1140df]['split']('\x20')[0x0];
                    if (_0x35b6cf == _0x3b7b32) {
                        await _0x2e3a18['select']('#shoesize', _0x4f4734[_0x1140df]);
                        break;
                    } else {
                        if (_0x1140df + 0x1 == _0x4f4734['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x2e3a18['waitForSelector']('#comp_address1'), await _0x2e3a18['type']('#comp_address1', _0x3ad753[_0x1a8a2e]['Address1'] + '\x20' + _0x3ad753[_0x1a8a2e]['HouseNumber']), await _0x2e3a18['waitForSelector']('#comp_address2'), await _0x2e3a18['type']('#comp_address2', '' + _0x3ad753[_0x1a8a2e]['Address2']), await _0x2e3a18['waitForSelector']('#comp_address2'), await _0x2e3a18['type']('#comp_address3', '' + _0x3ad753[_0x1a8a2e]['City']), await _0x2e3a18['waitForSelector']('#comp_postcode'), await _0x2e3a18['type']('#comp_postcode', '' + _0x3ad753[_0x1a8a2e]['Zip']), console['log'](_0x37c7ce() + '\x20[' + _0x34b115['name'] + ']\x20Task\x20' + (_0x1a8a2e + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4522c4(0x4b0), await _0x2e3a18['click']('label#emailhold'), await _0x4522c4(0x5dc), await _0x2e3a18['click']('#preauth_tandc_email\x20>\x20label'), await _0x4522c4(0x5dc), await _0x2e3a18['click']('#submit'), await _0x2e3a18['waitForSelector']('#paymentWrap'), console['log'](_0x37c7ce() + '\x20[' + _0x34b115['name'] + ']\x20Task\x20' + (_0x1a8a2e + 0x1) + '\x20:\x20' + _0x459672['blue']('Awaiting\x20Paypal\x20Payment')), _0x5c0cfd['on']('targetcreated', async _0xe98c5f => {
                if (_0xe98c5f['type']() === 'page') {
                    const _0x5df460 = await _0xe98c5f['page']();
                    async function _0x3295f1() {
                        try {
                            await _0x2e3a18['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x419d9d = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x55a969() {
                        try {
                            await _0x2e3a18['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x2d5b2f = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x55a969(), _0x3295f1(), await _0x4522c4(0x493e0);
                }
            });
            async function _0x5c68a9() {
                for (let _0x5cbf43 = 0x0; _0x5cbf43 < 0x12c; _0x5cbf43++) {
                    if (_0x2d5b2f == !![]) {
                        console['log'](_0x459672['green'](_0x37c7ce() + '\x20[' + _0x34b115['name'] + ']\x20Task\x20' + (_0x1a8a2e + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1a355b(_0x3520fe, _0x40c418);
                        return;
                    } else {
                        if (_0x419d9d)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x4522c4(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x4522c4(0xbb8), await _0x2e3a18['click']('.zoid-outlet'), await _0x4522c4(0x7d0), await _0x5c68a9();
        } catch (_0x22117f) {
            console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x34b115['name'] + ']\x20Task\x20' + (_0x1a8a2e + 0x1) + '\x20:\x20' + _0x22117f)), _0x47dc6c[0x0]['title'] = 'Failed\x20entry', _0x47dc6c[0x0]['description'] = _0x34b115['name'] + ':\x20' + _0x22117f, await _0x1a355b(_0x5d58d2, _0x40c418);
        } finally {
            _0x5c0cfd && _0x5c0cfd['close'](), console['log']('Waiting\x20for\x20' + _0x3a4c3b['delay'] + '\x20ms'), await _0x4522c4(_0x3a4c3b['delay']);
        }
    }
}
async function _0x1765c3(_0x2c1bef, _0x2f8509, _0xf708d3, _0x5bcd54) {
    var _0x4c3e5d = {}, _0x1ec100 = [], _0x29a387 = {}, _0xa1c3ee = [
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
    !_0x5bcd54 && (_0x5bcd54 = {});
    if (_0x2f8509 != 'ver') {
        _0x3e6041(_0xf708d3['name'] + '\x20Task\x20' + (_0x2c1bef + 0x1) + '\x20/\x20' + _0x5bcd54['length'] + '\x20||\x20File:\x20' + _0x40e541 + '\x20Proxies:\x20' + _0xefb743), await _0x52aac3(_0x5bcd54, _0x2c1bef), _0x1ec100 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x10eec3
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5bcd54[_0x2c1bef]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x3a4c3b['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x62dd8
                }
            ]
        }], _0x29a387 = { 'embeds': _0x1ec100 }, _0x4c3e5d = _0xf708d3['data'];
        _0x2f8509 == 'exp' ? _0x4c3e5d['data']['attributes']['email'] = '' + _0x5bcd54[_0x2c1bef]['FirstName'] + _0x5bcd54[_0x2c1bef]['LastName'] + _0x3a4c3b['catchall'] : _0x4c3e5d['data']['attributes']['email'] = '' + _0x5bcd54[_0x2c1bef]['Email'];
        if (_0x5bcd54[_0x2c1bef]['Size'] == 'RANDOM') {
        }
        _0x4c3e5d['data']['attributes']['properties']['$first_name'] = '' + _0x5bcd54[_0x2c1bef]['FirstName'], _0x4c3e5d['data']['attributes']['properties']['$last_name'] = '' + _0x5bcd54[_0x2c1bef]['LastName'], _0x4c3e5d['data']['attributes']['properties']['$address1'] = _0x5bcd54[_0x2c1bef]['Address1'] + '\x20' + _0x5bcd54[_0x2c1bef]['Address2'] + '\x20' + _0x5bcd54[_0x2c1bef]['HouseNumber'], _0x4c3e5d['data']['attributes']['properties']['$zip'] = '' + _0x5bcd54[_0x2c1bef]['Zip'], _0x4c3e5d['data']['attributes']['properties']['$city'] = '' + _0x5bcd54[_0x2c1bef]['City'], _0x4c3e5d['data']['attributes']['properties']['$country'] = '' + _0x5bcd54[_0x2c1bef]['Country'], _0x4c3e5d['data']['attributes']['properties']['Size'] = '' + _0x5bcd54[_0x2c1bef]['Size'], _0x4c3e5d['data']['attributes']['properties']['$phone_number'] = '' + _0x5bcd54[_0x2c1bef]['Phone'], _0x4c3e5d['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x5bcd54[_0x2c1bef]['Follower'];
    }
    if (_0x3a4c3b['useRandomProxy'] = ![])
        var _0x1363af = _0x2c18e2()[_0x2c1bef]['split'](':');
    else
        var _0x2100e0 = Math['round'](Math['random']() * (_0x2c18e2()['length'] - 0x1)), _0x1363af = _0x2c18e2()[_0x2100e0]['split'](':');
    var _0xba8b7 = {
        'jar': _0x505764,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0xf708d3['url'],
        'headers': _0xf708d3['headers'],
        'body': JSON['stringify'](_0x4c3e5d),
        'proxy': 'http://' + _0x1363af[0x2] + ':' + _0x1363af[0x3] + '@' + _0x1363af[0x0] + ':' + _0x1363af[0x1]
    };
    return _0x2f8509 != 'ver' && (_0xba8b7['url'] = _0xf708d3['url'], _0xba8b7['headers'] = _0xf708d3['headers']), _0x2f8509 == 'ver' && (_0xba8b7['method'] = 'GET'), new Promise(function (_0x30daf3, _0x330b64) {
        callback = async (_0x24c2d1, _0x1e0d8c, _0x507a87) => {
            !_0x24c2d1 && _0x1e0d8c['statusCode'] == 0xca || !_0x24c2d1 && _0x1e0d8c['statusCode'] == 0xc8 ? (_0x2f8509 != 'ver' && await _0x1a355b(_0x3520fe, _0x29a387), _0x30daf3(console['log'](_0x459672['green'](_0x37c7ce() + '\x20[' + _0xf708d3['name'] + ']\x20Task\x20' + (_0x2c1bef + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x2f8509 != 'ver' && (_0x1ec100[0x0]['title'] = 'Failed\x20entry', _0x1ec100[0x0]['description'] = '' + _0x24c2d1, await _0x1a355b(_0x5d58d2, _0x29a387)), _0x330b64(console['log'](_0x37c7ce() + '\x20[' + _0xf708d3['name'] + ']\x20Task\x20' + (_0x2c1bef + 0x1) + ':\x20' + _0x24c2d1)));
        };
        try {
            _0x2f8509 != 'ver' && console['log'](_0x37c7ce() + '\x20[' + _0xf708d3['name'] + ']\x20Task\x20' + (_0x2c1bef + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4c3e5d['data']['attributes']['email']), _0x3a42bb(_0xba8b7, callback);
        } catch (_0x426378) {
            console['log'](_0x37c7ce() + '\x20Task\x20' + (_0x2c1bef + 0x1) + ':\x20' + _0x426378);
        }
    });
}
;
async function _0x21f514() {
    await _0x29f18f(), console['clear']();
    if (_0x62dd8 != 'devkey') {
        let _0x9cdc5d = await _0x13ec2c['autoUpdate']();
        if (_0x9cdc5d === 'yes')
            return _0x3ba515('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x4e774b == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x4522c4(0x2710);
        ;
    }
    await _0x5495ca(_0x4e774b);
    if (_0x33f8a0 === ![])
        return console['log']('Closing\x20Browser'), await _0x4522c4(0xbb8);
    else
        try {
            var _0x81174c = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x10eec3
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x62dd8
                    }
                ]
            }];
            const _0x3d6caa = { 'embeds': _0x81174c };
            await _0x1a355b(_0x21c007, _0x3d6caa);
            async function _0x18eff4() {
                _0x3e6041('JRaffles\x20' + _0x62dd8), console['clear'](), console['log']('Welcome\x20to\x20' + _0x459672['cyan']('JRaffles();') + '\x20' + _0x62dd8), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x2363f = 0x0; _0x2363f < _0x307f86['length']; _0x2363f++) {
                    if (_0x307f86[_0x2363f]['name'] === 'Reload\x20Settings' || _0x307f86[_0x2363f]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x2363f + ')\x20[' + _0x307f86[_0x2363f]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x307f86['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x307f86['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x917b6b();
                if (_0x307f86[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x301d85(_0x307f86[taskModule]['modules']);
                    var _0x5c9d1b = _0x307f86[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x172ee1 = await _0x21bbee();
                    await _0x4024b4(_0x172ee1), await _0x583a64();
                    var _0x506480 = await _0x5dc501();
                    return await afewFunction(_0x1b6a1d[_0x4bec8b], 'nor', _0x5c9d1b, _0x506480, _0x172ee1), _0x18eff4();
                } else {
                    if (_0x307f86[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x301d85(_0x307f86[taskModule]['modules']);
                        var _0x5c9d1b = _0x307f86[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x172ee1 = await _0x21bbee(), _0x18f1cd = await _0x5dc501();
                            console['log']('Starting\x20' + _0x18f1cd['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x4fd23f = 0x0; _0x4fd23f < _0x18f1cd['length']; _0x4fd23f++) {
                                console['log'](_0x37c7ce() + '\x20[' + _0x5c9d1b['name'] + ']\x20Task\x20' + (_0x4fd23f + 0x1) + ':\x20Getting\x20Session'), await _0x13a87b(_0x4fd23f, 'nor', _0x5c9d1b, _0x18f1cd, _0x172ee1), console['log'](_0x37c7ce() + '\x20[' + _0x5c9d1b['name'] + ']\x20Sleeping\x20for\x20' + _0x3a4c3b['MahaDelay'] + '\x20ms'), await _0x4522c4(_0x3a4c3b['MahaDelay']);
                            }
                            ;
                            return _0x18eff4();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x172ee1 = await _0x21bbee();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x3e493c(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x4fd23f = 0x0; _0x4fd23f < links['length']; _0x4fd23f++) {
                                    _0x5c9d1b['url'] = links[_0x4fd23f], console['log'](_0x37c7ce() + '\x20[' + _0x5c9d1b['name'] + ']\x20Task\x20' + (_0x4fd23f + 0x1) + ':\x20Getting\x20Session'), await _0x13a87b(_0x4fd23f, 'ver', _0x5c9d1b, _0x18f1cd, _0x172ee1), console['log'](_0x37c7ce() + '\x20[' + _0x5c9d1b['name'] + ']\x20Sleeping\x20for\x20' + _0x3a4c3b['verificationDelay'] + '\x20ms'), await _0x4522c4(_0x3a4c3b['verificationDelay']);
                                }
                                ;
                                return _0x18eff4();
                            }
                        }
                    } else {
                        if (_0x307f86[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x172ee1 = await _0x21bbee(), _0x4ed104 = await _0x5dc501();
                            return await _0x2d4835(_0x4ed104, _0x172ee1), await _0x4522c4(0x1388), _0x18eff4();
                        } else {
                            if (_0x307f86[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x301d85(_0x307f86[taskModule]['modules']);
                                var _0x5c9d1b = _0x307f86[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x405cb1 = await _0x5dc501();
                                    console['log']('Starting\x20' + _0x459672['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x4fd23f = 0x0; _0x4fd23f < _0x405cb1['length']; _0x4fd23f++) {
                                        console['log'](_0x37c7ce() + '\x20[' + _0x5c9d1b['name'] + ']\x20Task\x20' + (_0x4fd23f + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x1765c3(_0x4fd23f, 'nor', _0x5c9d1b, _0x405cb1);
                                        } catch {
                                            console['log'](_0x459672['red'](_0x37c7ce() + '\x20[' + _0x5c9d1b['name'] + ']\x20Task\x20' + (_0x4fd23f + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](_0x37c7ce() + '\x20[' + _0x5c9d1b['name'] + ']\x20Sleeping\x20for\x20' + _0x3a4c3b['delay'] + '\x20ms'), await _0x4522c4(_0x3a4c3b['delay']);
                                    }
                                    return _0x18eff4();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x3e493c(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x4fd23f = 0x0; _0x4fd23f < links['length']; _0x4fd23f++) {
                                            try {
                                                _0x5c9d1b['url'] = links[_0x4fd23f], console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Task\x20' + (_0x4fd23f + 0x1) + ':\x20Getting\x20Session'), await _0x1765c3(_0x4fd23f, 'ver', _0x5c9d1b), console['log'](_0x37c7ce() + '\x20[' + _0x307f86[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x3a4c3b['verificationDelay'] + '\x20ms'), await _0x4522c4(_0x3a4c3b['verificationDelay']);
                                            } catch (_0x50b50e) {
                                                console['log'](_0x50b50e);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x18eff4();
                                    }
                                }
                                ;
                            } else {
                                if (_0x307f86[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x301d85(_0x307f86[taskModule]['modules']);
                                    var _0x5c9d1b = _0x307f86[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x783202('https://bouncewear.com/nl/account/register', _0x5c9d1b);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x307f86[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x301d85(_0x307f86[taskModule]['modules']);
                                        var _0x5c9d1b = _0x307f86[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x172ee1 = await _0x21bbee(), _0x285bac = await _0x5dc501();
                                            return await _0x55dee1('https://patta.nl/account/register', _0x5c9d1b, _0x285bac, _0x172ee1), _0x18eff4();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x172ee1 = await _0x21bbee(), _0x285bac = await _0x5dc501();
                                                return await _0x519ab6('', _0x5c9d1b, _0x285bac, _0x172ee1), _0x18eff4();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x307f86[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await _0x301d85(_0x307f86[taskModule]['modules']);
                                            var _0x5c9d1b = _0x307f86[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x172ee1 = await _0x21bbee(), _0x444597 = await _0x5dc501();
                                                return await _0x309644('https://www.kickz.com/nl/login/', _0x5c9d1b, _0x444597, _0x172ee1), _0x18eff4();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x172ee1 = await _0x21bbee(), _0x444597 = await _0x5dc501();
                                                    return await _0xe8e981(_0x5c9d1b, _0x444597, _0x172ee1), _0x18eff4();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x307f86[taskModule]['name'] == 'JD') {
                                                taskFunction = await _0x301d85(_0x307f86[taskModule]['modules']);
                                                var _0x5c9d1b = _0x307f86[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x172ee1 = await _0x21bbee(), _0x54cfaa = await _0x5dc501();
                                                    return await _0x484a40(_0x5c9d1b, _0x54cfaa, _0x172ee1), _0x18eff4();
                                                }
                                            } else {
                                                if (_0x307f86[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x41c3e4 = 0x0;
                                                    for (const _0x4a1d27 in _0x3a4c3b) {
                                                        console['log']('(' + _0x41c3e4 + ')\x20' + _0x4a1d27 + '\x20:\x20' + _0x3a4c3b[_0x4a1d27]), _0x41c3e4++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x41c3e4 + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x5507bf = await _0x15f837();
                                                    if (_0x5507bf == _0x41c3e4)
                                                        return _0x18eff4();
                                                    console['clear'];
                                                    var _0x211a2e = 0x0;
                                                    for (var _0x28aefc in _0x3a4c3b) {
                                                        if (_0x5507bf == _0x211a2e) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x28aefc + '\x20:'), _0x3a4c3b[_0x28aefc] = await _0x4a4e9e(), _0x4e61b9['writeFileSync']('../settings.json', JSON['stringify'](_0x3a4c3b));
                                                            break;
                                                        } else
                                                            _0x211a2e++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await _0x4522c4(0xbb8), _0x18eff4();
                                                } else {
                                                    if (_0x307f86[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await _0x29f18f(), _0x18eff4();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            _0x307f86[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x7a3dac = await _0x3df300();
                                                            _0x7a3dac == 'ModuleVoorDeBoys' ? (await _0x4024b4(), await _0x583a64(), await afewFunction(_0x1b6a1d[_0x4bec8b], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x4522c4(0xbb8));
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
            await _0x18eff4();
        } catch (_0x2e05e4) {
            return console['log'](_0x2e05e4), await _0x4522c4(0x3a98);
        }
}
;
_0x3e6041('JRaffles\x20' + _0x62dd8), _0x29f18f(), _0x21f514();