var _0x156f2a = require('exe');
const { execFile: _0x2204c2 } = require('child_process'), _0x223c5b = require('puppeteer-extra'), _0x137d7f = require('puppeteer-extra-plugin-recaptcha'), _0xcee43d = require('puppeteer-extra-plugin-stealth'), _0x1d632c = require('chalk'), _0xf1ad1a = require('node-bash-title'), _0x39affb = require('fs'), _0x2063b8 = require('axios'), _0x108da5 = require('papaparse');
var _0x5249a4 = require('random-name');
const _0x450097 = require('request');
var _0x3ab6af = require('prompt');
const _0x1b946c = _0x450097['jar']();
var _0x1ed47b = {};
const _0x496737 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x1eb456 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H';
var _0x2cb6b0 = 'https://discord.com/api/webhooks/', _0x20361f = '' + _0x2cb6b0 + _0x496737, _0x2e364a = '' + _0x2cb6b0 + _0x1eb456;
const _0x1ce8be = JSON['parse'](_0x39affb['readFileSync']('../package.json', 'utf-8')), _0x37aa18 = _0x1ce8be['version'];
var _0x4943ee, _0x10daaa, _0x4ebb76, _0x2d6054, _0x4a74e7, _0x3eb352, _0xbf25e5;
const _0xf3ef62 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x45f489 = ![];
const _0x574264 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x395b6f = '0123456789';
var _0x2b69dc = _0x574264['split']('');
const _0x1304dd = require('auto-git-update'), { PageEmittedEvents: _0x2b926e } = require('puppeteer'), { getRandomValues: _0x5e7497 } = require('crypto'), { resolve: _0x29bfea } = require('path'), _0x304b96 = {
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
}, _0x1e7a14 = new _0x1304dd(_0x304b96);
async function _0xba0894() {
    _0x4a74e7 = _0x39affb['readdirSync']('../proxies'), _0x2d6054 = _0x39affb['readdirSync']('../tasks'), _0x1ed47b = JSON['parse'](_0x39affb['readFileSync']('../settings.json', 'utf-8')), !_0x1ed47b['delay'] && (_0x1ed47b['delay'] = 0x2710, _0x39affb['writeFileSync']('../settings.json', JSON['stringify'](_0x1ed47b))), !_0x1ed47b['captchaKey'] && (_0x1ed47b['captchaKey'] = '', _0x39affb['writeFileSync']('../settings.json', JSON['stringify'](_0x1ed47b))), !_0x1ed47b['useRandomProxy'] && (_0x1ed47b['useRandomProxy'] = ![], _0x39affb['writeFileSync']('../settings.json', JSON['stringify'](_0x1ed47b))), !_0x1ed47b['webhook'] && (_0x1ed47b['webhook'] = '', _0x39affb['writeFileSync']('../settings.json', JSON['stringify'](_0x1ed47b))), _0x2cb6b0 = _0x1ed47b['webhook'], _0x3eb352 = _0x1ed47b['licenseKey'];
}
let _0x5e89e5, _0x449065 = [], _0x54e628;
const _0x5c87fd = _0x22c935 => new Promise(_0x3a2b54 => setTimeout(_0x3a2b54, _0x22c935));
function _0x194c1e(_0x15bec6, _0x1863d1) {
    return Math['floor'](Math['random']() * (_0x1863d1 - _0x15bec6 + 0x1) + _0x15bec6);
}
async function _0x220c58(_0x56d530) {
    return _0x2063b8['get']('https://api.hyper.co/v4/licenses/' + _0x56d530, { 'headers': { 'Authorization': 'Bearer\x20' + _0xf3ef62 } })['then'](_0x178ed6 => _0x178ed6['data'])['catch'](() => null);
}
;
async function _0x4058a4(_0xeb93b2) {
    console['clear'](), console['log']('Checking\x20license\x20' + _0x3eb352 + '...'), await _0x5c87fd(0x5dc);
    const _0x2667b4 = await _0x220c58(_0xeb93b2);
    _0xbf25e5 = JSON['stringify'](_0x2667b4['user']['username']);
    if (!_0x2667b4)
        return console['log']('License\x20not\x20found');
    if (!_0x2667b4['user'])
        return console['log']('License\x20not\x20bound');
    return _0x2667b4['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x45f489 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x45f489 = ![]);
}
async function _0x1934a7() {
    var _0x3af6d8 = await _0x3ab6af['get']('Module');
    return console['clear'](), _0x3af6d8['Module'];
}
;
async function _0x159765() {
    var _0x2de0da = await _0x3ab6af['get']('Setting');
    return console['clear'](), _0x2de0da['Setting'];
}
async function _0x211819() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x1a21b6 = 0x0; _0x1a21b6 < _0x2d6054['length']; _0x1a21b6++) {
        console['log']('\x20(' + _0x1a21b6 + ')\x20' + _0x2d6054[_0x1a21b6]);
    }
    console['log']('');
    var _0x469807 = await _0x3ab6af['get']('Task'), _0x2b609a = _0x39affb['readFileSync']('../tasks/' + _0x2d6054[_0x469807['Task']], 'utf-8');
    return _0x4ebb76 = _0x108da5['parse'](_0x2b609a, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x1d632c['blue'](_0x2d6054[_0x469807['Task']])), _0x4943ee = _0x2d6054[_0x469807['Task']], _0x4ebb76;
}
async function _0x40a792() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x498e08 = 0x0; _0x498e08 < _0x4a74e7['length']; _0x498e08++) {
        console['log']('\x20(' + _0x498e08 + ')\x20' + _0x4a74e7[_0x498e08]);
    }
    console['log']('');
    var _0x9a4599 = await _0x3ab6af['get']('Proxies'), _0x1c717b = _0x39affb['readFileSync']('../proxies/' + _0x4a74e7[_0x9a4599['Proxies']], 'utf-8')['split']('\x0a');
    let _0x2428ac = _0x1c717b['map']((_0x1225a5, _0x4e547d) => {
        sanatizeProxy = _0x1225a5['replace']('\x0d', '');
        if (_0x1c717b[_0x4e547d + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x10daaa = _0x4a74e7[_0x9a4599['Proxies']], console['clear'](), _0x2428ac;
}
async function _0x294167() {
    var _0x5370bd = await _0x3ab6af['get']('Value');
    return console['clear'](), _0x5370bd['Value'];
}
async function _0x1b2010(_0xc61e60) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x660f25 = 0x0; _0x660f25 < _0xc61e60['length']; _0x660f25++) {
        console['log']('\x20(' + _0x660f25 + ')\x20[' + _0xc61e60[_0x660f25]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x6d57af = await _0x3ab6af['get']('Module');
    return _0x6d57af['Module'];
}
async function _0x31fb8e() {
    var _0x552ee0 = await _0x3ab6af['get']('Password');
    return console['clear'](), _0x552ee0['Password'];
}
;
async function _0xc1536d() {
    var _0x1cef3b = await _0x3ab6af['get']('Links');
    return _0x1cef3b['Links'];
}
;
async function _0x124126() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x3ed741 = 0x0; _0x3ed741 < _0x449065['length']; _0x3ed741++) {
        console['log']('\x20(' + _0x3ed741 + ')\x20' + _0x449065[_0x3ed741]);
    }
    ;
    console['log']();
    let _0x210057 = await _0x3ab6af['get']('Product');
    console['clear'](), _0x54e628 = _0x210057['Product'];
    return;
}
;
function _0x241f76() {
    var _0x358a33 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x358a33;
}
;
const _0x40d0b2 = [
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
async function _0x35ed59(_0x353585, _0x24f283) {
    let _0x392de1 = { 'headers': { 'content-type': 'application/json' } };
    await _0x2063b8['post'](_0x353585, _0x24f283, _0x392de1);
}
;
async function _0x1803bf(_0x374220, _0x3a133e) {
    var _0x425ed8 = _0x374220[_0x3a133e]['Address1']['split'](''), _0xf9c9b5 = _0x374220[_0x3a133e]['Address2']['split'](''), _0x10db9b = _0x374220[_0x3a133e]['Email']['split']('@');
    for (var _0x2ca6bc = 0x0; _0x2ca6bc < _0x425ed8['length']; _0x2ca6bc++) {
        if (_0x425ed8[_0x2ca6bc] == 'X') {
            var _0x48b42c = Math['round'](Math['random']() * (_0x574264['length'] - 0x1));
            _0x425ed8[_0x2ca6bc] = _0x2b69dc[_0x48b42c];
        }
    }
    ;
    for (var _0x2ca6bc = 0x0; _0x2ca6bc < _0xf9c9b5['length']; _0x2ca6bc++) {
        if (_0xf9c9b5[_0x2ca6bc] == 'X') {
            var _0x48b42c = Math['round'](Math['random']() * (_0x574264['length'] - 0x1));
            _0xf9c9b5[_0x2ca6bc] = _0x2b69dc[_0x48b42c];
        }
    }
    ;
    _0x374220[_0x3a133e]['FirstName'] == 'RANDOM' && (_0x374220[_0x3a133e]['FirstName'] = _0x5249a4['first']());
    _0x374220[_0x3a133e]['LastName'] == 'RANDOM' && (_0x374220[_0x3a133e]['LastName'] = _0x5249a4['last']());
    _0x10db9b[0x0] == 'RANDOM' ? _0x10db9b[0x0] = '' + _0x5249a4['first']() + _0x5249a4['last']() + '@' : _0x10db9b[0x0] = _0x10db9b[0x0] + '@';
    _0x374220[_0x3a133e]['Phone'] == 'RANDOM' && (_0x374220[_0x3a133e]['Phone'] = _0x194c1e(0x3b9aca00, 0x2540be3ff));
    if (_0x374220[_0x3a133e]['Follower'] == 'RANDOM') {
        var _0x54ffbc = _0x194c1e(0x1, 0x270f);
        _0x374220[_0x3a133e]['Follower'] = '' + _0x5249a4['first']() + _0x5249a4['last']() + _0x54ffbc;
    }
    _0x374220[_0x3a133e]['Email'] = _0x10db9b['join'](''), _0x374220[_0x3a133e]['Address1'] = _0x425ed8['join'](''), _0x374220[_0x3a133e]['Address2'] = _0xf9c9b5['join']('');
    return;
}
;
function _0x19e913() {
    let _0x13fd43 = proxyFile['split']('\x0a'), _0x4fef7f = _0x13fd43['map']((_0x1f1520, _0x46624e) => {
        sanatizeProxy = _0x1f1520['replace']('\x0d', '');
        if (_0x13fd43[_0x46624e + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4fef7f;
}
;
async function _0xbd865(_0x19ecec) {
    var _0x1dab7a = _0x19ecec[0x1]['split'](':');
    const _0x5a7eca = await _0x223c5b['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x1dab7a[0x0] + ':' + _0x1dab7a[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x48f2ec = await _0x5a7eca['newPage']();
        await _0x48f2ec['authenticate']({
            'username': '' + _0x1dab7a[0x2],
            'password': '' + _0x1dab7a[0x3]
        }), console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x48f2ec['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x48f2ec['setRequestInterception'](!![]), _0x48f2ec['on']('request', _0x2ed4cd => {
            _0x2ed4cd['resourceType']() === 'image' || _0x2ed4cd['resourceType']() === 'font' || _0x2ed4cd['resourceType']() === 'media' ? _0x2ed4cd['abort']() : _0x2ed4cd['continue']();
        }), await _0x48f2ec['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x48f2ec['waitForTimeout'](0xbb8), await _0x48f2ec['waitForSelector']('.product-card');
        const _0xff0368 = await _0x48f2ec['$$eval']('a.product-card', _0xc76bc => {
            return _0xc76bc['map'](_0x35181e => _0x35181e['href']);
        });
        return _0x449065 = _0xff0368;
    } catch (_0x233e0e) {
        console['log']('\x20' + _0x233e0e);
    } finally {
        _0x5a7eca['close'](), console['clear']();
    }
}
;
async function _0x6934ed(_0x211613, _0x5cde9f, _0x572a50, _0x1cdb0d, _0x26b57c) {
    await _0x1803bf(_0x1cdb0d, _0x211613);
    var _0x3bc8cc = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0xbf25e5
            },
            {
                'name': 'Size',
                'value': '' + _0x1cdb0d[_0x211613]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x1ed47b['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x37aa18
            }
        ]
    }];
    const _0x3c9995 = { 'embeds': _0x3bc8cc };
    if (_0x1ed47b['useRandomProxy'] = ![])
        var _0x2a6787 = _0x26b57c[_0x211613]['split'](':');
    else
        var _0x2fe241 = Math['round'](Math['random']() * (_0x26b57c['length'] - 0x1)), _0x2a6787 = _0x26b57c[_0x2fe241]['split'](':');
    var _0x41c8c3 = _0x572a50['data'];
    _0x5cde9f == 'exp' ? _0x41c8c3['data']['attributes']['email'] = '' + _0x1cdb0d[_0x211613]['FirstName'] + _0x1cdb0d[_0x211613]['LastName'] + _0x1ed47b['catchall'] : _0x41c8c3['data']['attributes']['email'] = '' + _0x1cdb0d[_0x211613]['Email'];
    _0x41c8c3['data']['attributes']['properties']['$first_name'] = '' + _0x1cdb0d[_0x211613]['FirstName'], _0x41c8c3['data']['attributes']['properties']['$last_name'] = '' + _0x1cdb0d[_0x211613]['LastName'], _0x41c8c3['data']['attributes']['properties']['$address1'] = _0x1cdb0d[_0x211613]['Address1'] + '\x20' + _0x1cdb0d[_0x211613]['Address2'], _0x41c8c3['data']['attributes']['properties']['$zip'] = '' + _0x1cdb0d[_0x211613]['Zip'], _0x41c8c3['data']['attributes']['properties']['$city'] = '' + _0x1cdb0d[_0x211613]['City'], _0x41c8c3['data']['attributes']['properties']['$country'] = '' + _0x1cdb0d[_0x211613]['Country'], _0x41c8c3['data']['attributes']['properties']['Size'] = '' + _0x1cdb0d[_0x211613]['Size'], _0x41c8c3['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x1cdb0d[_0x211613]['Follower'];
    var _0x3a7898 = {
        'jar': _0x1b946c,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x572a50['url'],
        'headers': _0x572a50['headers'],
        'body': JSON['stringify'](_0x41c8c3),
        'proxy': 'http://' + _0x2a6787[0x2] + ':' + _0x2a6787[0x3] + '@' + _0x2a6787[0x0] + ':' + _0x2a6787[0x1]
    };
    return _0x5cde9f === 'ver' && (_0x3a7898['method'] = 'GET'), new Promise(function (_0x5319ea, _0x460112) {
        callback = async (_0x374e10, _0x141a73, _0x3f5916) => {
            !_0x374e10 && _0x141a73['statusCode'] == 0xca || !_0x374e10 && _0x141a73['statusCode'] == 0xc8 ? _0x5319ea(console['log'](_0x1d632c['green'](_0x241f76() + '\x20[' + _0x572a50['name'] + ']\x20Task\x20' + (_0x211613 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x3bc8cc[0x0]['title'] = 'Failed\x20entry', _0x3bc8cc[0x0]['description'] = '' + _0x374e10, await _0x35ed59(_0x2e364a, _0x3c9995), _0x460112(console['log'](_0x241f76() + '\x20[' + _0x572a50['name'] + ']\x20Task\x20' + (_0x211613 + 0x1) + ':\x20' + _0x374e10)));
        };
        try {
            _0x5cde9f === 'ver' ? console['log'](_0x241f76() + '\x20[' + _0x572a50['name'] + ']\x20Task\x20' + (_0x211613 + 0x1) + ':\x20Verifying.') : console['log'](_0x241f76() + '\x20[' + _0x572a50['name'] + ']\x20Task\x20' + (_0x211613 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x41c8c3['data']['attributes']['email']), _0x450097(_0x3a7898, callback);
        } catch (_0x3558ea) {
            console['log'](_0x241f76() + '\x20Task\x20' + (_0x211613 + 0x1) + ':\x20' + _0x3558ea);
        }
    });
}
;
async function _0x30d9de(_0x38f615, _0x4ff287) {
    _0x223c5b['use'](_0xcee43d()), _0x223c5b['use'](_0x137d7f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ed47b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x47165a = 0x0; _0x47165a < _0x38f615['length']; _0x47165a++) {
        var _0x5017ac = '', _0x4329dc = 0x0, _0x49e94e = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xbf25e5
                },
                {
                    'name': 'Product',
                    'value': '' + _0x38f615[_0x47165a]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x38f615[_0x47165a]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1ed47b['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37aa18
                }
            ]
        }];
        const _0x3ce08d = { 'embeds': _0x49e94e };
        await _0x1803bf(_0x38f615, _0x47165a);
        if (_0x38f615[_0x47165a]['Email'] == '' || _0x38f615[_0x47165a]['FirstName'] == '' || _0x38f615[_0x47165a]['LastName'] == '' || _0x38f615[_0x47165a]['Country'] == '' || _0x38f615[_0x47165a]['Size'] == '' || _0x38f615[_0x47165a]['Address1'] == '' || _0x38f615[_0x47165a]['Zip'] == '') {
            console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x38f615[_0x47165a]['Email'] == '' || _0x38f615[_0x47165a]['FirstName'] == '' || _0x38f615[_0x47165a]['LastName'] == '' || _0x38f615[_0x47165a]['Country'] == '' || _0x38f615[_0x47165a]['Size'] == '' || _0x38f615[_0x47165a]['Address1'] == '' || _0x38f615[_0x47165a]['Zip'] == '' || _0x38f615[_0x47165a]['Phone'] == '') {
            console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x42f9b4 = '' + _0x38f615[_0x47165a]['Url'];
        if (_0x1ed47b['useRandomProxy'] = ![])
            var _0x297e5e = _0x4ff287[_0x47165a]['split'](':');
        else
            var _0x502782 = Math['round'](Math['random']() * (_0x4ff287['length'] - 0x1)), _0x297e5e = _0x4ff287[_0x502782]['split'](':');
        const _0x4f153d = await _0x223c5b['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x297e5e[0x0] + ':' + _0x297e5e[0x1]]
        });
        try {
            const _0x16c659 = await _0x4f153d['newPage']();
            await _0x16c659['authenticate']({
                'username': '' + _0x297e5e[0x2],
                'password': '' + _0x297e5e[0x3]
            }), console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x16c659['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x16c659['setRequestInterception'](!![]), _0x16c659['on']('request', _0x22c734 => {
                _0x22c734['resourceType']() === 'image' || _0x22c734['resourceType']() === 'font' || _0x22c734['resourceType']() === 'media' ? _0x22c734['abort']() : _0x22c734['continue']();
            }), await _0x16c659['goto'](_0x42f9b4), await _0x5c87fd(0xbb8), await _0x16c659['waitForSelector']('.control__JhutY'), await _0x16c659['click']('.control__JhutY'), await _0x5c87fd(0x1f4);
            if (_0x38f615[_0x47165a]['Size'] != 'RANDOM')
                try {
                    const _0x1bdc7b = await _0x16c659['$x']('//div[contains(text(),\x20\x27' + _0x38f615[_0x47165a]['Size'] + '\x27)]');
                    await _0x1bdc7b[0x0]['click']();
                } catch {
                    console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x6c4351 = await _0x16c659['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x15531c = Math['round'](Math['random']() * (_0x6c4351['length'] - 0x1));
                await _0x6c4351[_0x15531c]['click']();
            }
            await _0x5c87fd(0x4b0);
            const _0x5c2ef1 = await _0x16c659['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x5c2ef1[0x0]['click'](), await _0x16c659['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x16c659['type']('input[name=\x22email\x22]', '' + _0x38f615[_0x47165a]['Email']), await _0x5c87fd(0x640), await _0x16c659['type']('input[name=\x22phone\x22]', '' + _0x38f615[_0x47165a]['Phone']), await _0x5c87fd(0x4b0), await _0x16c659['click']('button.btn.continue-button__1RtsS'), await _0x5c87fd(0x4b0);
            try {
                await _0x16c659['type']('input[name=\x22firstName\x22]', '' + _0x38f615[_0x47165a]['FirstName']), await _0x5c87fd(0x258);
            } catch {
                const _0x20d27f = await _0x16c659['$$eval']('.invalid-feedback\x20>\x20div', _0x3f6634 => {
                    return _0x3f6634['map'](_0x553884 => _0x553884['innerText']);
                });
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x20' + _0x20d27f));
                continue;
            }
            await _0x16c659['type']('input[name=\x22lastName\x22]', '' + _0x38f615[_0x47165a]['LastName']), await _0x5c87fd(0xc8), await _0x16c659['type']('input[name=\x22instagramUsername\x22]', '' + _0x38f615[_0x47165a]['Follower']), await _0x5c87fd(0x4b0), await _0x16c659['click']('button.btn.continue-button__1RtsS'), await _0x5c87fd(0x3e8), console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x16c659['select']('select[name=\x22country\x22]', '' + _0x38f615[_0x47165a]['Country']), await _0x5c87fd(0x2bc), await _0x16c659['type']('input[name=\x22streetName\x22]', '' + _0x38f615[_0x47165a]['Address1']), await _0x5c87fd(0x258), await _0x16c659['type']('input[name=\x22houseNumber\x22]', _0x38f615[_0x47165a]['HouseNumber'] + '\x20' + _0x38f615[_0x47165a]['Address2']), await _0x5c87fd(0xc8), await _0x16c659['type']('input[name=\x22postalCode\x22]', '' + _0x38f615[_0x47165a]['Zip']), await _0x5c87fd(0x1f4), await _0x16c659['type']('input[name=\x22city\x22]', '' + _0x38f615[_0x47165a]['City']), await _0x5c87fd(0x4b0), await _0x16c659['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x5c87fd(0x4b0), await _0x16c659['click']('button.btn.continue-button__1RtsS'), await _0x5c87fd(0x4b0), console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x16c659['solveRecaptchas'](), console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x5c87fd(0xbb8), await _0x16c659['click']('button.btn.continue-button__1RtsS'), await _0x5c87fd(0x1388), console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x16c659['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x16c659['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5c87fd(0x4b0), await _0x16c659['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x38f615[_0x47165a]['CardNumber']), await _0x5c87fd(0x320), await _0x16c659['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x16c659['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x38f615[_0x47165a]['ExpiryDate']), await _0x5c87fd(0x4b0), await _0x16c659['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x16c659['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x38f615[_0x47165a]['CVV']), await _0x5c87fd(0x226), await _0x16c659['type']('input[name=\x22holderName\x22]', '' + _0x38f615[_0x47165a]['NameOnCard']), await _0x5c87fd(0x226), await _0x16c659['click']('button.adyen-checkout__button'), console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x16c659['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x5c87fd(0xbb8), console['log'](_0x1d632c['green'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x35ed59(_0x20361f, _0x3ce08d);
            } catch {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x35e57f) {
            console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x20' + _0x35e57f), _0x49e94e[0x0]['title'] = 'Failed\x20' + _0x40d0b2[taskModule]['name'] + '\x20entry', _0x49e94e[0x0]['description'] = '' + _0x35e57f, await _0x35ed59(_0x2e364a, _0x3ce08d), _0x5017ac = 'yes';
        } finally {
            _0x4f153d['close']();
            if (_0x5017ac == 'yes' && _0x4329dc != 0x5) {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x47165a + 0x1) + '\x20:\x20Retrying')), _0x47165a = _0x47165a - 0x1, _0x4329dc = _0x4329dc + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x1ed47b['footshopDelay'] + '\x20ms'), await _0x5c87fd(_0x1ed47b['footshopDelay']);
        }
    }
}
afewFunction = async (_0x10ed8b, _0x1ea650, _0x41e6b7, _0x208aaa, _0x3dbdf8) => {
    for (var _0x4269cc = 0x0; _0x4269cc < _0x208aaa['length']; _0x4269cc++) {
        var _0x74285c = '', _0x55288c = 0x0;
        _0xf1ad1a(_0x41e6b7['name'] + '\x20Task\x20' + (_0x4269cc + 0x1) + '\x20/\x20' + _0x208aaa['length'] + '\x20||\x20File:\x20' + _0x4943ee + '\x20Proxies:\x20' + _0x10daaa), await _0x1803bf(_0x208aaa, _0x4269cc);
        var _0x19f88a = [{
            'type': 'rich',
            'title': 'Succesful\x20AFEW\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xbf25e5
                },
                {
                    'name': 'Product',
                    'value': '' + _0x10ed8b
                },
                {
                    'name': 'Size',
                    'value': '' + _0x208aaa[_0x4269cc]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1ed47b['AfewDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37aa18
                }
            ]
        }];
        const _0x486217 = { 'embeds': _0x19f88a };
        if (_0x208aaa[_0x4269cc]['Email'] == '' || _0x208aaa[_0x4269cc]['FirstName'] == '' || _0x208aaa[_0x4269cc]['LastName'] == '' || _0x208aaa[_0x4269cc]['Country'] == '' || _0x208aaa[_0x4269cc]['Size'] == '' || _0x208aaa[_0x4269cc]['Address1'] == '' || _0x208aaa[_0x4269cc]['Zip'] == '') {
            console['log'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1ed47b['useRandomProxy'] = ![])
            var _0x4116ef = _0x3dbdf8[_0x4269cc]['split'](':');
        else
            var _0x89af0f = Math['round'](Math['random']() * (_0x3dbdf8['length'] - 0x1)), _0x4116ef = _0x3dbdf8[_0x89af0f]['split'](':');
        const _0x30bc5c = await _0x223c5b['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4116ef[0x0] + ':' + _0x4116ef[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x531ecc = await _0x30bc5c['newPage']();
            await _0x531ecc['setDefaultNavigationTimeout'](0x1d4c0), await _0x531ecc['authenticate']({
                'username': '' + _0x4116ef[0x2],
                'password': '' + _0x4116ef[0x3]
            }), console['log'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x531ecc['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x531ecc['setRequestInterception'](!![]), _0x531ecc['on']('request', _0xc6ba5e => {
                _0xc6ba5e['resourceType']() === 'image' || _0xc6ba5e['resourceType']() === 'font' || _0xc6ba5e['resourceType']() === 'media' ? _0xc6ba5e['abort']() : _0xc6ba5e['continue']();
            }), await _0x531ecc['goto'](_0x10ed8b, { 'waitUntil': 'networkidle2' }), console['log'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x531ecc['waitForTimeout'](0xfa0), console['log'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20Cookies\x20received'), await _0x531ecc['waitForTimeout'](0x320);
            if (_0x208aaa[_0x4269cc]['Size'] == 'RANDOM') {
                console['log'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x55c0da = await _0x531ecc['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x2cc0d0 => {
                    return _0x2cc0d0['map'](_0x401358 => _0x401358['href']);
                });
                var _0x4b0b8a = Math['round'](Math['random']() * (_0x55c0da['length'] - 0x1));
                await _0x531ecc['goto']('' + _0x55c0da[_0x4b0b8a]);
            } else {
                console['log'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x208aaa[_0x4269cc]['Size']);
                try {
                    const _0x526ac4 = await _0x531ecc['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x208aaa[_0x4269cc]['Size'] + '\x22]\x20>\x20a', _0x264167 => {
                        return _0x264167['map'](_0x196272 => _0x196272['href']);
                    });
                    await _0x531ecc['goto']('' + _0x526ac4[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x3cb6d5) {
                    console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20' + _0x3cb6d5 + '\x20Size\x20not\x20found')), _0x19f88a[0x0]['title'] = 'Failed\x20entry', _0x19f88a[0x0]['description'] = 'Size\x20not\x20found', await _0x35ed59(_0x2e364a, _0x486217);
                    continue;
                }
            }
            await _0x531ecc['waitForTimeout'](0x258), await _0x531ecc['type']('#raffle-instagram', '' + _0x208aaa[_0x4269cc]['Follower'], { 'delay': 0x64 }), await _0x531ecc['waitForTimeout'](0x384), await _0x531ecc['click']('#raffle-terms'), await _0x531ecc['waitForTimeout'](0x384), await _0x531ecc['evaluate'](() => {
                const _0x7af1d6 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x7af1d6['click']();
            }), await _0x531ecc['waitForTimeout'](0xbb8), await _0x531ecc['waitForSelector']('#checkout_email'), await _0x5c87fd(0x3e8), console['log'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20Filling\x20Information');
            _0x1ea650 == 'sec' ? await _0x531ecc['type']('#checkout_email', '' + _0x208aaa[_0x4269cc]['FirstName'] + _0x208aaa[_0x4269cc]['LastName'] + _0x1ed47b['catchall'], 0x32) : await _0x531ecc['type']('#checkout_email', '' + _0x208aaa[_0x4269cc]['Email'], 0x32);
            await _0x5c87fd(0x320), await _0x531ecc['select']('#checkout_shipping_address_country', '' + _0x208aaa[_0x4269cc]['Country']), await _0x531ecc['waitForTimeout'](0x258), await _0x531ecc['type']('#checkout_shipping_address_first_name', '' + _0x208aaa[_0x4269cc]['FirstName']), await _0x531ecc['waitForTimeout'](0x320), await _0x531ecc['type']('#checkout_shipping_address_last_name', '' + _0x208aaa[_0x4269cc]['LastName']), await _0x531ecc['waitForTimeout'](0x2bc), await _0x531ecc['type']('#checkout_shipping_address_address1', _0x208aaa[_0x4269cc]['Address1'] + '\x20' + _0x208aaa[_0x4269cc]['HouseNumber']), await _0x531ecc['waitForTimeout'](0x2bc), await _0x531ecc['type']('#checkout_shipping_address_address2', '' + _0x208aaa[_0x4269cc]['Address2']), await _0x531ecc['waitForTimeout'](0x2bc);
            _0x208aaa[_0x4269cc]['Postcode'] == undefined ? await _0x531ecc['type']('#checkout_shipping_address_zip', '' + _0x208aaa[_0x4269cc]['Zip']) : await _0x531ecc['type']('#checkout_shipping_address_zip', '' + _0x208aaa[_0x4269cc]['Postcode']);
            await _0x531ecc['waitForTimeout'](0x2bc), await _0x531ecc['type']('#checkout_shipping_address_city', '' + _0x208aaa[_0x4269cc]['City']), await _0x531ecc['waitForTimeout'](0x2bc), console['log'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x531ecc, _0x531ecc['evaluate'](() => {
                const _0x34ea03 = document['querySelector']('#continue_button');
                for (var _0xbc4045 = 0x0; _0xbc4045 < 0x5; _0xbc4045++) {
                    if (_0x34ea03) {
                        _0x34ea03['click'](), _0x34ea03['click']();
                        break;
                    } else
                        _0x5c87fd(0xfa0);
                }
            }), await _0x531ecc['waitForTimeout'](0x1194);
            try {
                await _0x531ecc['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x531ecc['evaluate'](() => {
                const _0x2c6ce9 = document['querySelector']('#continue_button');
                for (var _0x37420e = 0x0; _0x37420e < 0x5; _0x37420e++) {
                    if (_0x2c6ce9) {
                        _0x2c6ce9['click']();
                        break;
                    } else
                        _0x5c87fd(0xfa0);
                }
            }), await _0x531ecc['waitForTimeout'](0x7d0), console['log'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x531ecc['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x531ecc['evaluate'](() => {
                const _0x335228 = document['querySelector']('#continue_button');
                for (var _0x324cb4 = 0x0; _0x324cb4 < 0x5; _0x324cb4++) {
                    if (_0x335228) {
                        _0x335228['click']();
                        break;
                    } else
                        _0x5c87fd(0xfa0);
                }
            }), await _0x531ecc['waitForTimeout'](0x1194), await _0x531ecc['waitForSelector']('#continue_button'), _0x531ecc['evaluate'](() => {
                const _0x454fdd = document['querySelector']('#continue_button');
                for (var _0xe77d47 = 0x0; _0xe77d47 < 0x5; _0xe77d47++) {
                    if (_0x454fdd) {
                        _0x454fdd['click']();
                        break;
                    } else
                        _0x5c87fd(0xfa0);
                }
            });
            try {
                await _0x531ecc['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x1ad9cc) {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x1ad9cc));
            }
            console['log'](_0x1d632c['green'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x35ed59(_0x20361f, _0x486217);
        } catch (_0x11d31e) {
            console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20' + _0x11d31e)), _0x19f88a[0x0]['title'] = 'Failed\x20entry', _0x19f88a[0x0]['description'] = '' + _0x11d31e, await _0x35ed59(_0x2e364a, _0x486217), _0x74285c = 'yes';
        } finally {
            _0x30bc5c && _0x30bc5c['close']();
            if (_0x74285c == 'yes' && _0x55288c != 0x5) {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x41e6b7['name'] + ']\x20Task\x20' + (_0x4269cc + 0x1) + '\x20:\x20Retrying')), _0x4269cc = _0x4269cc - 0x1, _0x55288c = _0x55288c + 0x1;
                continue;
            }
            if (_0x4269cc + 0x1 == _0x208aaa['length']) {
                console['log'](_0x1d632c['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x5c87fd(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x1ed47b['AfewDelay'] + '\x20ms'), await _0x5c87fd(_0x1ed47b['AfewDelay']);
        }
    }
};
async function _0x450af8(_0x163146, _0x967598, _0x4d8f20, _0x40528d) {
    _0x223c5b['use'](_0xcee43d()), _0x223c5b['use'](_0x137d7f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ed47b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x223b58 = 0x0; _0x223b58 < _0x4d8f20['length']; _0x223b58++) {
        var _0x2aecc5 = '', _0x3dd489 = 0x0;
        _0xf1ad1a(_0x967598['name'] + '\x20Task\x20' + (_0x223b58 + 0x1) + '\x20/\x20' + _0x4d8f20['length'] + '\x20||\x20File:\x20' + _0x4943ee + '\x20Proxies:\x20' + _0x10daaa);
        var _0x546d5a = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xbf25e5
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1ed47b['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37aa18
                }
            ]
        }];
        const _0x5e9f80 = { 'embeds': _0x546d5a };
        await _0x1803bf(_0x4d8f20, _0x223b58);
        if (_0x4d8f20[_0x223b58]['Email'] == '' || _0x4d8f20[_0x223b58]['Password'] == '' || _0x4d8f20[_0x223b58]['FirstName'] == '' || _0x4d8f20[_0x223b58]['LastName'] == '') {
            console['log'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1ed47b['useRandomProxy'] = ![])
            var _0x3a408e = _0x40528d[_0x223b58]['split'](':');
        else
            var _0x5c95d6 = Math['round'](Math['random']() * (_0x40528d['length'] - 0x1)), _0x3a408e = _0x40528d[_0x5c95d6]['split'](':');
        const _0x45b367 = await _0x223c5b['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3a408e[0x0] + ':' + _0x3a408e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1c58cc = await _0x45b367['newPage']();
            await _0x1c58cc['authenticate']({
                'username': '' + _0x3a408e[0x2],
                'password': '' + _0x3a408e[0x3]
            }), console['log'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1c58cc['setRequestInterception'](!![]), _0x1c58cc['on']('request', _0xe3a1f => {
                _0xe3a1f['resourceType']() === 'image' || _0xe3a1f['resourceType']() === 'font' || _0xe3a1f['resourceType']() === 'media' ? _0xe3a1f['abort']() : _0xe3a1f['continue']();
            }), await _0x1c58cc['goto'](_0x163146), await _0x5c87fd(0xbb8), console['log'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x1c58cc['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1c58cc['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1c58cc['waitForSelector']('#button-register'), await _0x5c87fd(0x7d0), await _0x1c58cc['evaluate'](() => {
                const _0x41d7e3 = document['querySelector']('#button-register');
                _0x41d7e3['click']();
            }), console['log'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x5c87fd(0x1388), await _0x1c58cc['waitForSelector']('#customer_salutation'), await _0x1c58cc['select']('#customer_salutation', 'mr'), await _0x5c87fd(0x7d0), await _0x1c58cc['waitForSelector']('#customer_firstname'), await _0x1c58cc['type']('#customer_firstname', '' + _0x4d8f20[_0x223b58]['FirstName']), await _0x5c87fd(0x352), await _0x1c58cc['waitForSelector']('#customer_lastname'), await _0x1c58cc['type']('#customer_lastname', '' + _0x4d8f20[_0x223b58]['LastName']), await _0x5c87fd(0x352), await _0x1c58cc['type']('#email-input', '' + _0x4d8f20[_0x223b58]['Email']), await _0x5c87fd(0x352), await _0x1c58cc['type']('#email-confirm-input', '' + _0x4d8f20[_0x223b58]['Email']), await _0x5c87fd(0x352), await _0x1c58cc['type']('#register-password', '' + _0x4d8f20[_0x223b58]['Password']), await _0x5c87fd(0x352), await _0x1c58cc['type']('#password-confirm', '' + _0x4d8f20[_0x223b58]['Password']), await _0x5c87fd(0x352), console['log'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x1c58cc['click']('#consent'), await _0x5c87fd(0x1f4);
            const _0x1b3f4b = await _0x1c58cc['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x1b3f4b) {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x1c58cc['click']('#buttonRegister');
            try {
                await _0x1c58cc['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x1d632c['yellow'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20Account\x20' + _0x4d8f20[_0x223b58]['Email'] + '\x20Generated!')), console['log'](_0x1d632c['yellow'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x4d8f20[_0x223b58]['Email'])), await _0x5c87fd(0x4b0);
            async function _0x240f48() {
                console['log'](_0x1d632c['yellow'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x3a8216 = await _0x3ab6af['get']('Code');
                return _0x3a8216['Code'];
            }
            ;
            code = await _0x240f48(), _0x5c87fd(0x320), console['log'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20Verifying..'), await _0x1c58cc['type']('#verificationCode', code), await _0x5c87fd(0x1f4), await _0x1c58cc['click']('#buttonVerify'), await _0x5c87fd(0x190), await _0x1c58cc['click']('#buttonVerify'), await _0x5c87fd(0x3e8);
            try {
                await _0x1c58cc['waitForSelector']('div.b-user_greeting'), console['log'](_0x1d632c['green'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20Account\x20' + _0x4d8f20[_0x223b58]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x39affb['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x4d8f20[_0x223b58]['Email'] + ',' + _0x4d8f20[_0x223b58]['Password'] + ','), console['log'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20Account\x20' + _0x4d8f20[_0x223b58]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27'), await _0x35ed59(_0x20361f, _0x5e9f80);
            } catch {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x5552b3) {
            console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20' + _0x5552b3)), _0x546d5a[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x546d5a[0x0]['description'] = '' + _0x5552b3, await _0x35ed59(_0x2e364a, _0x5e9f80), _0x2aecc5 = 'yes';
        } finally {
            _0x45b367 && _0x45b367['close']();
            if (_0x2aecc5 == 'yes' && _0x3dd489 != 0x5) {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x967598['name'] + ']\x20Task\x20' + (_0x223b58 + 0x1) + '\x20:\x20Retrying')), _0x223b58 = _0x223b58 - 0x1, _0x3dd489 = _0x3dd489 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x1ed47b['delay'] + '\x20ms'), await _0x5c87fd(_0x1ed47b['delay']);
        }
    }
}
async function _0xdc9f14(_0x261692, _0x1016a4, _0xf8deca) {
    _0x223c5b['use'](_0xcee43d()), _0x223c5b['use'](_0x137d7f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ed47b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x26403d = 0x0; _0x26403d < _0x1016a4['length']; _0x26403d++) {
        var _0x2168da = '', _0x2d0575 = 0x0;
        _0xf1ad1a(_0x261692['name'] + '\x20Task\x20' + (_0x26403d + 0x1) + '\x20/\x20' + _0x1016a4['length'] + '\x20||\x20File:\x20' + _0x4943ee + '\x20Proxies:\x20' + _0x10daaa);
        var _0x4db8d9 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xbf25e5
                },
                {
                    'name': 'Product',
                    'value': '' + _0x1016a4[_0x26403d]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1016a4[_0x26403d]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1ed47b['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37aa18
                }
            ]
        }];
        const _0xdfbf56 = { 'embeds': _0x4db8d9 };
        await _0x1803bf(_0x1016a4, _0x26403d);
        if (_0x1016a4[_0x26403d]['Email'] == '' || _0x1016a4[_0x26403d]['Password'] == '' || _0x1016a4[_0x26403d]['FirstName'] == '' || _0x1016a4[_0x26403d]['LastName'] == '') {
            console['log'](_0x241f76() + '\x20[' + _0x261692['name'] + ']\x20Task\x20' + (_0x26403d + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1ed47b['useRandomProxy'] = ![])
            var _0x25c9a4 = _0xf8deca[_0x26403d]['split'](':');
        else
            var _0xbb64cf = Math['round'](Math['random']() * (_0xf8deca['length'] - 0x1)), _0x25c9a4 = _0xf8deca[_0xbb64cf]['split'](':');
        const _0x5138fd = await _0x223c5b['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x25c9a4[0x0] + ':' + _0x25c9a4[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x56ae34 = await _0x5138fd['newPage']();
            await _0x56ae34['authenticate']({
                'username': '' + _0x25c9a4[0x2],
                'password': '' + _0x25c9a4[0x3]
            }), console['log'](_0x241f76() + '\x20[' + _0x261692['name'] + ']\x20Task\x20' + (_0x26403d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56ae34['setRequestInterception'](!![]), _0x56ae34['on']('request', _0x327fb1 => {
                _0x327fb1['resourceType']() === 'image' || _0x327fb1['resourceType']() === 'font' || _0x327fb1['resourceType']() === 'media' ? _0x327fb1['abort']() : _0x327fb1['continue']();
            }), await _0x56ae34['goto']('' + _0x1016a4[_0x26403d]['Url'], { 'waitUntil': 'networkidle2' }), await _0x5c87fd(0x12c);
            try {
                await _0x56ae34['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x56ae34['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x241f76() + '\x20[' + _0x261692['name'] + ']\x20Task\x20' + (_0x26403d + 0x1) + '\x20:\x20Logging\x20in'), await _0x56ae34['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x56ae34['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x56ae34['waitForSelector']('#username'), await _0x56ae34['type']('#username', _0x1016a4[_0x26403d]['Email']), await _0x56ae34['waitForSelector']('#password'), await _0x56ae34['type']('#password', _0x1016a4[_0x26403d]['Password']), await _0x5c87fd(0x190), await _0x56ae34['click']('#buttonSubmit'), await _0x56ae34['waitForSelector']('div.b-user_greeting'), console['log'](_0x241f76() + '\x20[' + _0x261692['name'] + ']\x20Task\x20' + (_0x26403d + 0x1) + '\x20:\x20Getting\x20Product'), await _0x5c87fd(0x1f4), await _0x56ae34['goto']('' + _0x1016a4[_0x26403d]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x241f76() + '\x20[' + _0x261692['name'] + ']\x20Task\x20' + (_0x26403d + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x1016a4[_0x26403d]['Size']);
            let _0x303a1a = _0x1016a4[_0x26403d]['Size']['replace']('.5', '\x201/2');
            await _0x56ae34['click']('button[title=\x22' + _0x303a1a + '\x22]'), await _0x5c87fd(0x1f4);
            try {
                await _0x56ae34['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x5c87fd(0x12c), console['log'](_0x241f76() + '\x20[' + _0x261692['name'] + ']\x20Task\x20' + (_0x26403d + 0x1) + '\x20:\x20Filling\x20Information'), await _0x56ae34['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x5c87fd(0x12c), await _0x56ae34['type']('#dwfrm_raffle_addressFields_firstName', _0x1016a4[_0x26403d]['FirstName']), await _0x5c87fd(0x12c), await _0x56ae34['type']('#dwfrm_raffle_addressFields_lastName', _0x1016a4[_0x26403d]['LastName']), await _0x5c87fd(0x12c), await _0x56ae34['select']('#dwfrm_raffle_addressFields_country', _0x1016a4[_0x26403d]['Country']), await _0x5c87fd(0x12c), await _0x56ae34['type']('#dwfrm_raffle_addressFields_city', _0x1016a4[_0x26403d]['City']), await _0x5c87fd(0x12c);
            _0x1016a4[_0x26403d]['Postcode'] == undefined && (_0x1016a4[_0x26403d]['Postcode'] = _0x1016a4[_0x26403d]['Zip']);
            await _0x56ae34['type']('#dwfrm_raffle_addressFields_postalCode', _0x1016a4[_0x26403d]['Postcode']), await _0x5c87fd(0x12c), await _0x56ae34['type']('#dwfrm_raffle_addressFields_address1', _0x1016a4[_0x26403d]['Address1']), await _0x5c87fd(0x12c), await _0x56ae34['type']('#dwfrm_raffle_addressFields_address2', _0x1016a4[_0x26403d]['HouseNumber']), await _0x5c87fd(0x12c), await _0x56ae34['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x1016a4[_0x26403d]['Address2']), await _0x5c87fd(0x12c), await _0x56ae34['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x5c87fd(0x12c), await _0x56ae34['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x1016a4[_0x26403d]['Follower']), await _0x5c87fd(0x1f4), await _0x56ae34['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x5c87fd(0x1f4), console['log'](_0x241f76() + '\x20[' + _0x261692['name'] + ']\x20Task\x20' + (_0x26403d + 0x1) + '\x20:\x20' + _0x1d632c['blue']('Awaiting\x20Paypal\x20Payment')), await _0x56ae34['click']('.b-paypal_button');
            try {
                await _0x56ae34['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x1d632c['green'](_0x241f76() + '\x20[' + _0x261692['name'] + ']\x20Task\x20' + (_0x26403d + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x35ed59(_0x20361f, _0xdfbf56);
            } catch (_0x2735cc) {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x261692['name'] + ']\x20Task\x20' + (_0x26403d + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x2735cc));
            }
        } catch (_0x54b157) {
            console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x261692['name'] + ']\x20Task\x20' + (_0x26403d + 0x1) + '\x20:\x20' + _0x54b157)), _0x4db8d9[0x0]['title'] = 'Failed\x20kickz\x20Entry', _0x4db8d9[0x0]['description'] = '' + _0x54b157, await _0x35ed59(_0x2e364a, _0xdfbf56), _0x2168da = 'yes';
        } finally {
            _0x5138fd && _0x5138fd['close']();
            if (_0x2168da == 'yes' && _0x2d0575 != 0x5) {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x261692['name'] + ']\x20Task\x20' + (_0x26403d + 0x1) + '\x20:\x20Retrying')), _0x26403d = _0x26403d - 0x1, _0x2d0575 = _0x2d0575 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x1ed47b['AfewDelay'] + '\x20ms'), await _0x5c87fd(_0x1ed47b['AfewDelay']);
        }
    }
}
async function _0x63a13d(_0xef78c5, _0x467d2b) {
    _0x223c5b['use'](_0xcee43d()), _0x223c5b['use'](_0x137d7f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ed47b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x17c756 = 0x0; _0x17c756 < bouncewear['length']; _0x17c756++) {
        await _0x1803bf(bouncewear, _0x17c756);
        if (bouncewear[_0x17c756]['Email'] == '' || bouncewear[_0x17c756]['Password'] == '' || bouncewear[_0x17c756]['FirstName'] == '' || bouncewear[_0x17c756]['LastName'] == '') {
            console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x17c756 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1ed47b['useRandomProxy'] = ![])
            var _0x47092a = _0x19e913()[_0x17c756]['split'](':');
        else
            var _0x1a11ce = Math['round'](Math['random']() * (_0x19e913()['length'] - 0x1)), _0x47092a = _0x19e913()[_0x1a11ce]['split'](':');
        const _0x55361b = await _0x223c5b['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x47092a[0x0] + ':' + _0x47092a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x340f6c = await _0x55361b['newPage']();
            await _0x340f6c['authenticate']({
                'username': '' + _0x47092a[0x2],
                'password': '' + _0x47092a[0x3]
            }), console['log'](_0x241f76() + '\x20[' + _0x467d2b['name'] + ']\x20Task\x20' + (_0x17c756 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x340f6c['setRequestInterception'](!![]), _0x340f6c['on']('request', _0x316212 => {
                _0x316212['resourceType']() === 'image' || _0x316212['resourceType']() === 'font' || _0x316212['resourceType']() === 'media' ? _0x316212['abort']() : _0x316212['continue']();
            }), await _0x340f6c['goto'](_0xef78c5), await _0x5c87fd(0xbb8), await _0x340f6c['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x241f76() + '\x20[' + _0x467d2b['name'] + ']\x20Task\x20' + (_0x17c756 + 0x1) + '\x20:\x20Filling\x20information'), await _0x340f6c['type']('#RegisterForm-FirstName', '' + bouncewear[_0x17c756]['FirstName']), await _0x5c87fd(0x226), await _0x340f6c['type']('#RegisterForm-LastName', '' + bouncewear[_0x17c756]['LastName']), await _0x5c87fd(0x226), await _0x340f6c['type']('#RegisterForm-email', '' + bouncewear[_0x17c756]['Email']), await _0x5c87fd(0x226), await _0x340f6c['type']('#RegisterForm-password', '' + bouncewear[_0x17c756]['Password']), await _0x5c87fd(0x226), await _0x340f6c['click']('#marketing'), console['log'](_0x241f76() + '\x20[' + _0x467d2b['name'] + ']\x20Task\x20' + (_0x17c756 + 0x1) + '\x20:\x20Submitting..'), await _0x340f6c['$eval']('#RegisterForm', _0xd1b91b => _0xd1b91b['submit']()), await _0x5c87fd(0x1f40), console['log'](_0x241f76() + '\x20[' + _0x467d2b['name'] + ']\x20Task\x20' + (_0x17c756 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x340f6c['solveRecaptchas'](), await _0x340f6c['click']('.shopify-challenge__button.btn');
            async function _0x17097c() {
                for (var _0x5139d0 = 0x0; _0x5139d0 < 0x4; _0x5139d0++) {
                    try {
                        console['log']('try'), await _0x340f6c['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x241f76() + '\x20[' + _0x467d2b['name'] + ']\x20Task\x20' + (_0x17c756 + 0x1) + '\x20:\x20' + _0x1d632c['red']('Catpcha\x20failed,\x20retrying..')), await _0x340f6c['solveRecaptchas'](), await _0x340f6c['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x17097c(), console['log'](_0x241f76() + '\x20[' + _0x467d2b['name'] + ']\x20Task\x20' + (_0x17c756 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x5c87fd(0x1f4);
            try {
                await _0x340f6c['waitForSelector']('.featured-title'), await _0x5c87fd(0x1f4), console['log'](_0x1d632c['green'](_0x241f76() + '\x20[' + _0x467d2b['name'] + ']\x20Task\x20' + (_0x17c756 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x17c756]['Email'] + '\x20Generated!')), _0x39affb['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x17c756]['Email'] + ',' + bouncewear[_0x17c756]['Password']), console['log'](_0x1d632c['yellow'](_0x241f76() + '\x20[' + _0x467d2b['name'] + ']\x20Task\x20' + (_0x17c756 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x17c756]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0xd9dccd) {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x17c756 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xd9dccd));
            }
        } catch (_0x3db7d1) {
            console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x17c756 + 0x1) + '\x20:\x20' + _0x3db7d1));
        } finally {
            _0x55361b && _0x55361b['close'](), console['log']('Waiting\x20for\x20' + _0x1ed47b['delay'] + '\x20ms'), await _0x5c87fd(_0x1ed47b['delay']);
        }
    }
}
async function _0x55e8a7(_0x2b05e7, _0x473f02, _0x32729b, _0x41dad0) {
    _0x223c5b['use'](_0xcee43d()), _0x223c5b['use'](_0x137d7f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ed47b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x48414d = 0x0; _0x48414d < _0x32729b['length']; _0x48414d++) {
        _0xf1ad1a(_0x473f02['name'] + '\x20Task\x20' + (_0x48414d + 0x1) + '\x20/\x20' + _0x32729b['length'] + '\x20||\x20File:\x20' + _0x4943ee + '\x20Proxies:\x20' + _0x10daaa), await _0x1803bf(_0x32729b, _0x48414d);
        if (_0x32729b[_0x48414d]['Email'] == '' || _0x32729b[_0x48414d]['Password'] == '' || _0x32729b[_0x48414d]['Password'] == undefined || _0x32729b[_0x48414d]['FirstName'] == '' || _0x32729b[_0x48414d]['LastName'] == '') {
            console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x48414d + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1ed47b['useRandomProxy'] = ![])
            var _0x2f4a65 = _0x41dad0[_0x48414d]['split'](':');
        else
            var _0x4ca1f4 = Math['round'](Math['random']() * (_0x41dad0['length'] - 0x1)), _0x2f4a65 = _0x41dad0[_0x4ca1f4]['split'](':');
        const _0x41f6fa = await _0x223c5b['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2f4a65[0x0] + ':' + _0x2f4a65[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x17c319 = await _0x41f6fa['newPage']();
            await _0x17c319['authenticate']({
                'username': '' + _0x2f4a65[0x2],
                'password': '' + _0x2f4a65[0x3]
            }), console['log'](_0x241f76() + '\x20[' + _0x473f02['name'] + ']\x20Task\x20' + (_0x48414d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x17c319['setRequestInterception'](!![]), _0x17c319['on']('request', _0xbc1ff6 => {
                _0xbc1ff6['resourceType']() === 'image' || _0xbc1ff6['resourceType']() === 'font' || _0xbc1ff6['resourceType']() === 'media' ? _0xbc1ff6['abort']() : _0xbc1ff6['continue']();
            }), await _0x17c319['goto'](_0x2b05e7), await _0x5c87fd(0xbb8), await _0x17c319['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x241f76() + '\x20[' + _0x473f02['name'] + ']\x20Task\x20' + (_0x48414d + 0x1) + '\x20:\x20Filling\x20information'), await _0x17c319['type']('#RegisterForm-FirstName', '' + _0x32729b[_0x48414d]['FirstName']), await _0x5c87fd(0x226), await _0x17c319['type']('#RegisterForm-LastName', '' + _0x32729b[_0x48414d]['LastName']), await _0x5c87fd(0x226), await _0x17c319['type']('#RegisterForm-email', '' + _0x32729b[_0x48414d]['Email']), await _0x5c87fd(0x226), await _0x17c319['type']('#RegisterForm-password', '' + _0x32729b[_0x48414d]['Password']), await _0x5c87fd(0x226), console['log'](_0x241f76() + '\x20[' + _0x473f02['name'] + ']\x20Task\x20' + (_0x48414d + 0x1) + '\x20:\x20Submitting..'), await _0x17c319['$eval']('#RegisterForm', _0x243588 => _0x243588['submit']()), await _0x5c87fd(0x1f40);
            try {
                await _0x17c319['waitForSelector']('.home-page-grid__collection'), await _0x5c87fd(0x1f4), console['log'](_0x1d632c['green'](_0x241f76() + '\x20[' + _0x473f02['name'] + ']\x20Task\x20' + (_0x48414d + 0x1) + '\x20:\x20Account\x20' + _0x32729b[_0x48414d]['Email'] + '\x20Generated!')), _0x39affb['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x32729b[_0x48414d]['Email'] + ',' + _0x32729b[_0x48414d]['Password']), console['log'](_0x1d632c['yellow'](_0x241f76() + '\x20[' + _0x473f02['name'] + ']\x20Task\x20' + (_0x48414d + 0x1) + '\x20:\x20Account\x20' + _0x32729b[_0x48414d]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
            } catch (_0x15cdab) {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x48414d + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x15cdab));
            }
        } catch (_0x333ee0) {
            console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x48414d + 0x1) + '\x20:\x20' + _0x333ee0));
        } finally {
            _0x41f6fa && _0x41f6fa['close'](), console['log']('Waiting\x20for\x20' + _0x1ed47b['delay'] + '\x20ms'), await _0x5c87fd(_0x1ed47b['delay']);
        }
    }
}
async function _0xb2a935(_0x4b240e, _0x38b288, _0x51a03f, _0x55f3e4) {
    _0x223c5b['use'](_0xcee43d()), _0x223c5b['use'](_0x137d7f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ed47b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2556ed = 0x0; _0x2556ed < _0x51a03f['length']; _0x2556ed++) {
        var _0x4ac4e2 = '', _0x1a9dc6 = 0x0;
        _0xf1ad1a(_0x38b288['name'] + '\x20Task\x20' + (_0x2556ed + 0x1) + '\x20/\x20' + _0x51a03f['length'] + '\x20||\x20File:\x20' + _0x4943ee + '\x20Proxies:\x20' + _0x10daaa), await _0x1803bf(_0x51a03f, _0x2556ed);
        if (_0x51a03f[_0x2556ed]['Email'] == '' || _0x51a03f[_0x2556ed]['Password'] == '' || _0x51a03f[_0x2556ed]['FirstName'] == '' || _0x51a03f[_0x2556ed]['LastName'] == '') {
            console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x2556ed + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1ed47b['useRandomProxy'] = ![])
            var _0x380b97 = _0x55f3e4[_0x2556ed]['split'](':');
        else
            var _0xbac86b = Math['round'](Math['random']() * (_0x55f3e4['length'] - 0x1)), _0x380b97 = _0x55f3e4[_0xbac86b]['split'](':');
        const _0x34a16b = await _0x223c5b['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x380b97[0x0] + ':' + _0x380b97[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3b05d6 = await _0x34a16b['newPage']();
            await _0x3b05d6['authenticate']({
                'username': '' + _0x380b97[0x2],
                'password': '' + _0x380b97[0x3]
            }), console['log'](_0x241f76() + '\x20[' + _0x38b288['name'] + ']\x20Task\x20' + (_0x2556ed + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3b05d6['setRequestInterception'](!![]), _0x3b05d6['on']('request', _0xab73b6 => {
                _0xab73b6['resourceType']() === 'image' || _0xab73b6['resourceType']() === 'font' || _0xab73b6['resourceType']() === 'media' ? _0xab73b6['abort']() : _0xab73b6['continue']();
            }), await _0x3b05d6['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x3b05d6['waitForSelector']('#CustomerEmail'), console['log'](_0x241f76() + '\x20[' + _0x38b288['name'] + ']\x20Task\x20' + (_0x2556ed + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3b05d6['type']('#CustomerEmail', '' + _0x51a03f[_0x2556ed]['Email']), await _0x5c87fd(0x12c), await _0x3b05d6['type']('#CustomerPassword', '' + _0x51a03f[_0x2556ed]['Password']), await _0x5c87fd(0x226), await _0x3b05d6['$eval']('#customer_login', _0x402e10 => _0x402e10['submit']());
            try {
                await _0x3b05d6['waitForSelector']('#orders'), await _0x5c87fd(0x4b0);
            } catch {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x38b288['name'] + ']\x20Task\x20' + (_0x2556ed + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x3b05d6['goto']('' + _0x51a03f[_0x2556ed]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x5c87fd(0xbb8), console['log'](_0x241f76() + '\x20[' + _0x38b288['name'] + ']\x20Task\x20' + (_0x2556ed + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x3b05d6['waitForSelector']('#email');
            } catch {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x38b288['name'] + ']\x20Task\x20' + (_0x2556ed + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x3b05d6['type']('#email', '' + _0x51a03f[_0x2556ed]['Email']), await _0x5c87fd(0x384), await _0x3b05d6['type']('#first_name', '' + _0x51a03f[_0x2556ed]['FirstName']), await _0x5c87fd(0x514), await _0x3b05d6['type']('#last_name', '' + _0x51a03f[_0x2556ed]['LastName']), await _0x5c87fd(0x514), await _0x3b05d6['type']('#street_address', _0x51a03f[_0x2556ed]['Address1'] + '\x20' + _0x51a03f[_0x2556ed]['HouseNumber'] + '\x20' + _0x51a03f[_0x2556ed]['Address2']), await _0x5c87fd(0x2bc);
            _0x51a03f[_0x2556ed]['Postcode'] == undefined && (_0x51a03f[_0x2556ed]['Postcode'] = _0x51a03f[_0x2556ed]['Zip']);
            await _0x3b05d6['type']('#zip_code', '' + _0x51a03f[_0x2556ed]['Postcode']), await _0x5c87fd(0x320), await _0x3b05d6['type']('#city', '' + _0x51a03f[_0x2556ed]['City']), await _0x5c87fd(0x320), await _0x3b05d6['type']('#bday', '' + _0x51a03f[_0x2556ed]['Bday']), await _0x5c87fd(0x320), await _0x3b05d6['type']('#instagram', '' + _0x51a03f[_0x2556ed]['Follower']), await _0x5c87fd(0x352);
            if (_0x51a03f[_0x2556ed]['Size'] == 'RANDOM') {
                const _0x4026ee = await _0x3b05d6['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x1c0461 => {
                    return _0x1c0461['map'](_0x1fcdc9 => _0x1fcdc9['textContent']);
                });
                var _0x3a0063 = Math['round'](Math['random']() * (_0x4026ee['length'] - 0x1));
                console['log'](_0x241f76() + '\x20[' + _0x38b288['name'] + ']\x20Task\x20' + (_0x2556ed + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x4026ee[_0x3a0063]), await _0x3b05d6['click']('label[data-eu-size=\x22' + _0x4026ee[_0x3a0063] + '\x22]');
            } else {
                console['log'](_0x241f76() + '\x20[' + _0x38b288['name'] + ']\x20Task\x20' + (_0x2556ed + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x51a03f[_0x2556ed]['Size']);
                try {
                    await _0x3b05d6['click']('label[data-eu-size=\x22' + _0x51a03f[_0x2556ed]['Size'] + '\x22]');
                } catch {
                    await _0x3b05d6['click']('label[data-eu-size=\x22' + _0x51a03f[_0x2556ed]['Size'] + '.0\x22]');
                }
            }
            await _0x5c87fd(0xbb8), await _0x3b05d6['$$eval']('.raffle__checkbox-label', _0x32eaad => _0x32eaad['forEach'](_0x3bd6b1 => _0x3bd6b1['click']())), await _0x5c87fd(0x7d0), console['log'](_0x241f76() + '\x20[' + _0x38b288['name'] + ']\x20Task\x20' + (_0x2556ed + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x3b05d6['click']('#raffle__form-submit'), await _0x5c87fd(0x1388);
            try {
                await _0x3b05d6['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x1d632c['green'](_0x241f76() + '\x20[' + _0x38b288['name'] + ']\x20Task\x20' + (_0x2556ed + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x193c90) {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x2556ed + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x193c90));
            }
        } catch (_0x3964d2) {
            console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x2556ed + 0x1) + '\x20:\x20' + _0x3964d2)), _0x4ac4e2 = 'yes';
        } finally {
            _0x34a16b && _0x34a16b['close']();
            if (_0x4ac4e2 == 'yes' && _0x1a9dc6 != 0x5) {
                console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x38b288['name'] + ']\x20Task\x20' + (_0x2556ed + 0x1) + '\x20:\x20Retrying')), _0x2556ed = _0x2556ed - 0x1, _0x1a9dc6 = _0x1a9dc6 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x1ed47b['delay'] + '\x20ms'), await _0x5c87fd(_0x1ed47b['delay']);
        }
    }
}
async function _0x5e0b88(_0x3dd771, _0x5c9978, _0x1df730) {
    var _0x4ed16c = ![], _0x4a79d1 = ![];
    if (_0x1ed47b['captchaKey'] == '' || _0x1ed47b['captchaKey'] == undefined)
        return console['log'](_0x1d632c['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x223c5b['use'](_0xcee43d()), _0x223c5b['use'](_0x137d7f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ed47b['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2f3f83 = 0x0; _0x2f3f83 < _0x5c9978['length']; _0x2f3f83++) {
        var _0x49821d = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x5c9978[_0x2f3f83]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5c9978[_0x2f3f83]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0xbf25e5
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1ed47b['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37aa18
                }
            ]
        }];
        const _0x2c96aa = { 'embeds': _0x49821d };
        _0xf1ad1a(_0x3dd771['name'] + '\x20Task\x20' + (_0x2f3f83 + 0x1) + '\x20/\x20' + _0x5c9978['length'] + '\x20||\x20File:\x20' + _0x4943ee + '\x20Proxies:\x20' + _0x10daaa), await _0x1803bf(_0x5c9978, _0x2f3f83);
        if (_0x5c9978[_0x2f3f83]['Email'] == '' || _0x5c9978[_0x2f3f83]['Url'] == '' || _0x5c9978[_0x2f3f83]['FirstName'] == '' || _0x5c9978[_0x2f3f83]['LastName'] == '') {
            console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x2f3f83 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1ed47b['useRandomProxy'] = ![])
            var _0x5c1071 = _0x1df730[_0x2f3f83]['split'](':');
        else
            var _0x79e7cf = Math['round'](Math['random']() * (_0x1df730['length'] - 0x1)), _0x5c1071 = _0x1df730[_0x79e7cf]['split'](':');
        const _0x24a527 = await _0x223c5b['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5c1071[0x0] + ':' + _0x5c1071[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4cc293 = await _0x24a527['newPage']();
            await _0x4cc293['authenticate']({
                'username': '' + _0x5c1071[0x2],
                'password': '' + _0x5c1071[0x3]
            }), console['log'](_0x241f76() + '\x20[' + _0x3dd771['name'] + ']\x20Task\x20' + (_0x2f3f83 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4cc293['setRequestInterception'](!![]), _0x4cc293['on']('request', _0x42d3bf => {
                _0x42d3bf['resourceType']() === 'image' || _0x42d3bf['resourceType']() === 'font' || _0x42d3bf['resourceType']() === 'media' ? _0x42d3bf['abort']() : _0x42d3bf['continue']();
            }), await _0x4cc293['goto']('' + _0x5c9978[_0x2f3f83]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](_0x241f76() + '\x20[' + _0x3dd771['name'] + ']\x20Task\x20' + (_0x2f3f83 + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x4cc293['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x4cc293['type']('#comp_firstname', '' + _0x5c9978[_0x2f3f83]['FirstName']), await _0x4cc293['waitForSelector']('#comp_lastname'), await _0x4cc293['type']('#comp_lastname', '' + _0x5c9978[_0x2f3f83]['LastName']), await _0x4cc293['waitForSelector']('#comp_email'), await _0x4cc293['type']('#comp_email', '' + _0x5c9978[_0x2f3f83]['Email']), await _0x4cc293['waitForSelector']('#comp_paypalemail'), await _0x4cc293['type']('#comp_paypalemail', '' + _0x5c9978[_0x2f3f83]['Email']), await _0x4cc293['waitForSelector']('#comp_mobile_end'), await _0x4cc293['type']('#comp_mobile_end', '' + _0x5c9978[_0x2f3f83]['Phone']), await _0x4cc293['waitForSelector']('#comp_dob'), await _0x4cc293['type']('#comp_dob', '08/09/1992'), console['log'](_0x241f76() + '\x20[' + _0x3dd771['name'] + ']\x20Task\x20' + (_0x2f3f83 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x5c9978[_0x2f3f83]['Size'] == 'RANDOM') {
                const _0xab0f9f = await _0x4cc293['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2885d8 => {
                    return _0x2885d8['map'](_0x50bdf4 => _0x50bdf4['value']);
                });
                var _0x2e5bbc = Math['round'](Math['random']() * (_0xab0f9f['length'] - 0x2));
                await _0x4cc293['select']('#shoesize', _0xab0f9f[_0x2e5bbc + 0x1]), await _0x5c87fd(0x3e8);
            } else {
                const _0x445947 = await _0x4cc293['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x45e6d1 => {
                    return _0x45e6d1['map'](_0x456a24 => _0x456a24['innerText']);
                }), _0x4246fb = await _0x4cc293['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x54ff08 => {
                    return _0x54ff08['map'](_0x485b44 => _0x485b44['value']);
                });
                var _0x30d939 = _0x5c9978[_0x2f3f83]['Size'];
                for (var _0x537097 = 0x1; _0x537097 < _0x4246fb['length']; _0x537097++) {
                    var _0x4fb393 = _0x445947[_0x537097]['split']('\x20')[0x0];
                    if (_0x4fb393 == _0x30d939) {
                        await _0x4cc293['select']('#shoesize', _0x4246fb[_0x537097]);
                        break;
                    } else {
                        if (_0x537097 + 0x1 == _0x4246fb['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x4cc293['waitForSelector']('#comp_address1'), await _0x4cc293['type']('#comp_address1', _0x5c9978[_0x2f3f83]['Address1'] + '\x20' + _0x5c9978[_0x2f3f83]['HouseNumber']), await _0x4cc293['waitForSelector']('#comp_address2'), await _0x4cc293['type']('#comp_address2', '' + _0x5c9978[_0x2f3f83]['Address2']), await _0x4cc293['waitForSelector']('#comp_address2'), await _0x4cc293['type']('#comp_address3', '' + _0x5c9978[_0x2f3f83]['City']), await _0x4cc293['waitForSelector']('#comp_postcode'), await _0x4cc293['type']('#comp_postcode', '' + _0x5c9978[_0x2f3f83]['Zip']), console['log'](_0x241f76() + '\x20[' + _0x3dd771['name'] + ']\x20Task\x20' + (_0x2f3f83 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5c87fd(0x4b0), await _0x4cc293['click']('label#emailhold'), await _0x5c87fd(0x5dc), await _0x4cc293['click']('#preauth_tandc_email\x20>\x20label'), await _0x5c87fd(0x5dc), await _0x4cc293['click']('#submit'), await _0x4cc293['waitForSelector']('#paymentWrap'), console['log'](_0x241f76() + '\x20[' + _0x3dd771['name'] + ']\x20Task\x20' + (_0x2f3f83 + 0x1) + '\x20:\x20' + _0x1d632c['blue']('Awaiting\x20Paypal\x20Payment')), _0x24a527['on']('targetcreated', async _0x1c5b6b => {
                if (_0x1c5b6b['type']() === 'page') {
                    const _0xef96c1 = await _0x1c5b6b['page']();
                    async function _0x1e89e5() {
                        try {
                            await _0x4cc293['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x4a79d1 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x3c60f7() {
                        try {
                            await _0x4cc293['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x4ed16c = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x3c60f7(), _0x1e89e5(), await _0x5c87fd(0x493e0);
                }
            });
            async function _0x1ff8e2() {
                for (let _0x1e858c = 0x0; _0x1e858c < 0x12c; _0x1e858c++) {
                    if (_0x4ed16c == !![]) {
                        console['log'](_0x1d632c['green'](_0x241f76() + '\x20[' + _0x3dd771['name'] + ']\x20Task\x20' + (_0x2f3f83 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x35ed59(_0x20361f, _0x2c96aa);
                        return;
                    } else {
                        if (_0x4a79d1)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x5c87fd(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x5c87fd(0xbb8), await _0x4cc293['click']('.zoid-outlet'), await _0x5c87fd(0x7d0), await _0x1ff8e2();
        } catch (_0x3b49ac) {
            console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x3dd771['name'] + ']\x20Task\x20' + (_0x2f3f83 + 0x1) + '\x20:\x20' + _0x3b49ac)), _0x49821d[0x0]['title'] = 'Failed\x20entry', _0x49821d[0x0]['description'] = _0x3dd771['name'] + ':\x20' + _0x3b49ac, await _0x35ed59(_0x2e364a, _0x2c96aa);
        } finally {
            _0x24a527 && _0x24a527['close'](), console['log']('Waiting\x20for\x20' + _0x1ed47b['delay'] + '\x20ms'), await _0x5c87fd(_0x1ed47b['delay']);
        }
    }
}
async function _0x3030c0(_0x2f38f3, _0x390aab, _0x106ee3, _0x35c246) {
    var _0x103769 = {}, _0x33d0e3 = [], _0x436e4c = {}, _0x222ab7 = [
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
    !_0x35c246 && (_0x35c246 = {});
    if (_0x390aab != 'ver') {
        _0xf1ad1a(_0x106ee3['name'] + '\x20Task\x20' + (_0x2f38f3 + 0x1) + '\x20/\x20' + _0x35c246['length'] + '\x20||\x20File:\x20' + _0x4943ee + '\x20Proxies:\x20' + _0x10daaa), await _0x1803bf(_0x35c246, _0x2f38f3), _0x33d0e3 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xbf25e5
                },
                {
                    'name': 'Size',
                    'value': '' + _0x35c246[_0x2f38f3]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1ed47b['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37aa18
                }
            ]
        }], _0x436e4c = { 'embeds': _0x33d0e3 }, _0x103769 = _0x106ee3['data'];
        _0x390aab == 'exp' ? _0x103769['data']['attributes']['email'] = '' + _0x35c246[_0x2f38f3]['FirstName'] + _0x35c246[_0x2f38f3]['LastName'] + _0x1ed47b['catchall'] : _0x103769['data']['attributes']['email'] = '' + _0x35c246[_0x2f38f3]['Email'];
        if (_0x35c246[_0x2f38f3]['Size'] == 'RANDOM') {
        }
        _0x103769['data']['attributes']['properties']['$first_name'] = '' + _0x35c246[_0x2f38f3]['FirstName'], _0x103769['data']['attributes']['properties']['$last_name'] = '' + _0x35c246[_0x2f38f3]['LastName'], _0x103769['data']['attributes']['properties']['$address1'] = _0x35c246[_0x2f38f3]['Address1'] + '\x20' + _0x35c246[_0x2f38f3]['Address2'] + '\x20' + _0x35c246[_0x2f38f3]['HouseNumber'], _0x103769['data']['attributes']['properties']['$zip'] = '' + _0x35c246[_0x2f38f3]['Zip'], _0x103769['data']['attributes']['properties']['$city'] = '' + _0x35c246[_0x2f38f3]['City'], _0x103769['data']['attributes']['properties']['$country'] = '' + _0x35c246[_0x2f38f3]['Country'], _0x103769['data']['attributes']['properties']['Size'] = '' + _0x35c246[_0x2f38f3]['Size'], _0x103769['data']['attributes']['properties']['$phone_number'] = '' + _0x35c246[_0x2f38f3]['Phone'], _0x103769['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x35c246[_0x2f38f3]['Follower'];
    }
    if (_0x1ed47b['useRandomProxy'] = ![])
        var _0x5ce4e7 = _0x19e913()[_0x2f38f3]['split'](':');
    else
        var _0x1dd9c9 = Math['round'](Math['random']() * (_0x19e913()['length'] - 0x1)), _0x5ce4e7 = _0x19e913()[_0x1dd9c9]['split'](':');
    var _0x545058 = {
        'jar': _0x1b946c,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x106ee3['url'],
        'headers': _0x106ee3['headers'],
        'body': JSON['stringify'](_0x103769),
        'proxy': 'http://' + _0x5ce4e7[0x2] + ':' + _0x5ce4e7[0x3] + '@' + _0x5ce4e7[0x0] + ':' + _0x5ce4e7[0x1]
    };
    return _0x390aab != 'ver' && (_0x545058['url'] = _0x106ee3['url'], _0x545058['headers'] = _0x106ee3['headers']), _0x390aab == 'ver' && (_0x545058['method'] = 'GET'), new Promise(function (_0x48e46c, _0x400b4c) {
        callback = async (_0x311384, _0x125b3b, _0x5a9b2c) => {
            !_0x311384 && _0x125b3b['statusCode'] == 0xca || !_0x311384 && _0x125b3b['statusCode'] == 0xc8 ? (_0x390aab != 'ver' && await _0x35ed59(_0x20361f, _0x436e4c), _0x48e46c(console['log'](_0x1d632c['green'](_0x241f76() + '\x20[' + _0x106ee3['name'] + ']\x20Task\x20' + (_0x2f38f3 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x390aab != 'ver' && (_0x33d0e3[0x0]['title'] = 'Failed\x20entry', _0x33d0e3[0x0]['description'] = '' + _0x311384, await _0x35ed59(_0x2e364a, _0x436e4c)), _0x400b4c(console['log'](_0x241f76() + '\x20[' + _0x106ee3['name'] + ']\x20Task\x20' + (_0x2f38f3 + 0x1) + ':\x20' + _0x311384)));
        };
        try {
            _0x390aab != 'ver' && console['log'](_0x241f76() + '\x20[' + _0x106ee3['name'] + ']\x20Task\x20' + (_0x2f38f3 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x103769['data']['attributes']['email']), _0x450097(_0x545058, callback);
        } catch (_0x564070) {
            console['log'](_0x241f76() + '\x20Task\x20' + (_0x2f38f3 + 0x1) + ':\x20' + _0x564070);
        }
    });
}
;
async function _0x220b43() {
    await _0xba0894(), console['clear']();
    if (_0x37aa18 != 'devkey') {
        let _0x4c044e = await _0x1e7a14['autoUpdate']();
        if (_0x4c044e === 'yes')
            return _0x156f2a('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x3eb352 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x5c87fd(0x2710);
        ;
    }
    await _0x4058a4(_0x3eb352);
    if (_0x45f489 === ![])
        return console['log']('Closing\x20Browser'), await _0x5c87fd(0xbb8);
    else
        try {
            async function _0xf68b5f() {
                _0xf1ad1a('JRaffles\x20' + _0x37aa18), console['clear'](), console['log']('Welcome\x20to\x20' + _0x1d632c['cyan']('JRaffles();') + '\x20' + _0x37aa18), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x84a1f7 = 0x0; _0x84a1f7 < _0x40d0b2['length']; _0x84a1f7++) {
                    if (_0x40d0b2[_0x84a1f7]['name'] === 'Reload\x20Settings' || _0x40d0b2[_0x84a1f7]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x84a1f7 + ')\x20[' + _0x40d0b2[_0x84a1f7]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x40d0b2['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x40d0b2['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x1934a7();
                if (_0x40d0b2[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x1b2010(_0x40d0b2[taskModule]['modules']);
                    var _0x1b9c0c = _0x40d0b2[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x519abb = await _0x40a792();
                    await _0xbd865(_0x519abb), await _0x124126();
                    var _0x47f5c2 = await _0x211819();
                    return await afewFunction(_0x449065[_0x54e628], 'nor', _0x1b9c0c, _0x47f5c2, _0x519abb), _0xf68b5f();
                } else {
                    if (_0x40d0b2[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x1b2010(_0x40d0b2[taskModule]['modules']);
                        var _0x1b9c0c = _0x40d0b2[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x519abb = await _0x40a792(), _0x12e470 = await _0x211819();
                            console['log']('Starting\x20' + _0x12e470['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x246b66 = 0x0; _0x246b66 < _0x12e470['length']; _0x246b66++) {
                                console['log'](_0x241f76() + '\x20[' + _0x1b9c0c['name'] + ']\x20Task\x20' + (_0x246b66 + 0x1) + ':\x20Getting\x20Session'), await _0x6934ed(_0x246b66, 'nor', _0x1b9c0c, _0x12e470, _0x519abb), console['log'](_0x241f76() + '\x20[' + _0x1b9c0c['name'] + ']\x20Sleeping\x20for\x20' + _0x1ed47b['MahaDelay'] + '\x20ms'), await _0x5c87fd(_0x1ed47b['MahaDelay']);
                            }
                            ;
                            return _0xf68b5f();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x519abb = await _0x40a792();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0xc1536d(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x246b66 = 0x0; _0x246b66 < links['length']; _0x246b66++) {
                                    _0x1b9c0c['url'] = links[_0x246b66], console['log'](_0x241f76() + '\x20[' + _0x1b9c0c['name'] + ']\x20Task\x20' + (_0x246b66 + 0x1) + ':\x20Getting\x20Session'), await _0x6934ed(_0x246b66, 'ver', _0x1b9c0c, _0x12e470, _0x519abb), console['log'](_0x241f76() + '\x20[' + _0x1b9c0c['name'] + ']\x20Sleeping\x20for\x20' + _0x1ed47b['verificationDelay'] + '\x20ms'), await _0x5c87fd(_0x1ed47b['verificationDelay']);
                                }
                                ;
                                return _0xf68b5f();
                            }
                        }
                    } else {
                        if (_0x40d0b2[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x519abb = await _0x40a792(), _0x38f01e = await _0x211819();
                            return await _0x30d9de(_0x38f01e, _0x519abb), await _0x5c87fd(0x1388), _0xf68b5f();
                        } else {
                            if (_0x40d0b2[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x1b2010(_0x40d0b2[taskModule]['modules']);
                                var _0x1b9c0c = _0x40d0b2[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x4308db = await _0x211819();
                                    console['log']('Starting\x20' + _0x1d632c['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x246b66 = 0x0; _0x246b66 < _0x4308db['length']; _0x246b66++) {
                                        console['log'](_0x241f76() + '\x20[' + _0x1b9c0c['name'] + ']\x20Task\x20' + (_0x246b66 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x3030c0(_0x246b66, 'nor', _0x1b9c0c, _0x4308db);
                                        } catch {
                                            console['log'](_0x1d632c['red'](_0x241f76() + '\x20[' + _0x1b9c0c['name'] + ']\x20Task\x20' + (_0x246b66 + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](_0x241f76() + '\x20[' + _0x1b9c0c['name'] + ']\x20Sleeping\x20for\x20' + _0x1ed47b['delay'] + '\x20ms'), await _0x5c87fd(_0x1ed47b['delay']);
                                    }
                                    return _0xf68b5f();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0xc1536d(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x246b66 = 0x0; _0x246b66 < links['length']; _0x246b66++) {
                                            try {
                                                _0x1b9c0c['url'] = links[_0x246b66], console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Task\x20' + (_0x246b66 + 0x1) + ':\x20Getting\x20Session'), await _0x3030c0(_0x246b66, 'ver', _0x1b9c0c), console['log'](_0x241f76() + '\x20[' + _0x40d0b2[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x1ed47b['verificationDelay'] + '\x20ms'), await _0x5c87fd(_0x1ed47b['verificationDelay']);
                                            } catch (_0x3a2995) {
                                                console['log'](_0x3a2995);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0xf68b5f();
                                    }
                                }
                                ;
                            } else {
                                if (_0x40d0b2[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x1b2010(_0x40d0b2[taskModule]['modules']);
                                    var _0x1b9c0c = _0x40d0b2[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x63a13d('https://bouncewear.com/nl/account/register', _0x1b9c0c);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x40d0b2[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x1b2010(_0x40d0b2[taskModule]['modules']);
                                        var _0x1b9c0c = _0x40d0b2[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x519abb = await _0x40a792(), _0x127059 = await _0x211819();
                                            return await _0x55e8a7('https://patta.nl/account/register', _0x1b9c0c, _0x127059, _0x519abb), _0xf68b5f();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x519abb = await _0x40a792(), _0x127059 = await _0x211819();
                                                return await _0xb2a935('', _0x1b9c0c, _0x127059, _0x519abb), _0xf68b5f();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x40d0b2[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await _0x1b2010(_0x40d0b2[taskModule]['modules']);
                                            var _0x1b9c0c = _0x40d0b2[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x519abb = await _0x40a792(), _0x316dbe = await _0x211819();
                                                return await _0x450af8('https://www.kickz.com/nl/login/', _0x1b9c0c, _0x316dbe, _0x519abb), _0xf68b5f();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x519abb = await _0x40a792(), _0x316dbe = await _0x211819();
                                                    return await _0xdc9f14(_0x1b9c0c, _0x316dbe, _0x519abb), _0xf68b5f();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x40d0b2[taskModule]['name'] == 'JD') {
                                                taskFunction = await _0x1b2010(_0x40d0b2[taskModule]['modules']);
                                                var _0x1b9c0c = _0x40d0b2[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x519abb = await _0x40a792(), _0x33cde5 = await _0x211819();
                                                    return await _0x5e0b88(_0x1b9c0c, _0x33cde5, _0x519abb), _0xf68b5f();
                                                }
                                            } else {
                                                if (_0x40d0b2[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x2d2a50 = 0x0;
                                                    for (const _0x2e4d78 in _0x1ed47b) {
                                                        console['log']('(' + _0x2d2a50 + ')\x20' + _0x2e4d78 + '\x20:\x20' + _0x1ed47b[_0x2e4d78]), _0x2d2a50++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x2d2a50 + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x4b97b4 = await _0x159765();
                                                    if (_0x4b97b4 == _0x2d2a50)
                                                        return _0xf68b5f();
                                                    console['clear'];
                                                    var _0x1efd14 = 0x0;
                                                    for (var _0x33af01 in _0x1ed47b) {
                                                        if (_0x4b97b4 == _0x1efd14) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x33af01 + '\x20:'), _0x1ed47b[_0x33af01] = await _0x294167(), _0x39affb['writeFileSync']('../settings.json', JSON['stringify'](_0x1ed47b));
                                                            break;
                                                        } else
                                                            _0x1efd14++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await _0x5c87fd(0xbb8), _0xf68b5f();
                                                } else {
                                                    if (_0x40d0b2[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await _0xba0894(), _0xf68b5f();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            _0x40d0b2[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x4ada5b = await _0x31fb8e();
                                                            _0x4ada5b == 'ModuleVoorDeBoys' ? (await _0xbd865(), await _0x124126(), await afewFunction(_0x449065[_0x54e628], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x5c87fd(0xbb8));
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
            await _0xf68b5f();
        } catch (_0xa9c8f1) {
            return console['log'](_0xa9c8f1), await _0x5c87fd(0x3a98);
        }
}
;
_0xf1ad1a('JRaffles\x20' + _0x37aa18), _0xba0894(), _0x220b43();