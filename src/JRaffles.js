var _0x15cee1 = require('exe');
const { execFile: _0x346eb4 } = require('child_process'), _0x8dd97f = require('puppeteer-extra'), _0x2c9766 = require('puppeteer-extra-plugin-recaptcha'), _0x163592 = require('puppeteer-extra-plugin-stealth'), _0x24b3c9 = require('chalk'), _0x544b3c = require('node-bash-title'), _0x144cbc = require('fs'), _0x367ce1 = require('axios'), _0x28550a = require('papaparse');
var _0x1500dc = require('random-name');
const _0x202863 = require('request');
var _0x19c0a0 = require('prompt');
const _0x1487a2 = _0x202863['jar']();
var _0x14bd83 = {};
const _0x2eafb4 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x321da6 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H';
var _0x999cb8 = 'https://discord.com/api/webhooks/', _0xa3dd4b = '' + _0x999cb8 + _0x2eafb4, _0x4516d2 = '' + _0x999cb8 + _0x321da6;
const _0x13e7af = JSON['parse'](_0x144cbc['readFileSync']('../package.json', 'utf-8')), _0x42e8b2 = _0x13e7af['version'];
var _0x3dc76a, _0x39cf16, _0x395e8b, _0x298e79, _0x63f278, _0x446f6a, _0x2d42b1;
const _0x36f0b2 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x22d66f = ![];
const _0x385f57 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x5d09e2 = '0123456789';
var _0x5f2909 = _0x385f57['split']('');
const _0x3a374b = require('auto-git-update'), { PageEmittedEvents: _0x3c921e } = require('puppeteer'), { getRandomValues: _0x478fad } = require('crypto'), { resolve: _0x18b2cd } = require('path'), _0x1cf2f2 = {
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
}, _0x3a53a3 = new _0x3a374b(_0x1cf2f2);
async function _0x1ce8b5() {
    _0x63f278 = _0x144cbc['readdirSync']('../proxies'), _0x298e79 = _0x144cbc['readdirSync']('../tasks'), _0x14bd83 = JSON['parse'](_0x144cbc['readFileSync']('../settings.json', 'utf-8')), !_0x14bd83['delay'] && (_0x14bd83['delay'] = 0x2710, _0x144cbc['writeFileSync']('../settings.json', JSON['stringify'](_0x14bd83))), !_0x14bd83['captchaKey'] && (_0x14bd83['captchaKey'] = '', _0x144cbc['writeFileSync']('../settings.json', JSON['stringify'](_0x14bd83))), !_0x14bd83['useRandomProxy'] && (_0x14bd83['useRandomProxy'] = ![], _0x144cbc['writeFileSync']('../settings.json', JSON['stringify'](_0x14bd83))), !_0x14bd83['webhook'] && (_0x14bd83['webhook'] = '', _0x144cbc['writeFileSync']('../settings.json', JSON['stringify'](_0x14bd83))), _0x999cb8 = _0x14bd83['webhook'], _0x446f6a = _0x14bd83['licenseKey'];
}
let _0x5c15ef, _0x528d69 = [], _0x1a9ef8;
const _0x576d66 = _0x1dc098 => new Promise(_0x3a149e => setTimeout(_0x3a149e, _0x1dc098));
function _0x2524bc(_0x2118b1, _0x4549c9) {
    return Math['floor'](Math['random']() * (_0x4549c9 - _0x2118b1 + 0x1) + _0x2118b1);
}
async function _0x3e2fa1(_0x56300b) {
    return _0x367ce1['get']('https://api.hyper.co/v4/licenses/' + _0x56300b, { 'headers': { 'Authorization': 'Bearer\x20' + _0x36f0b2 } })['then'](_0x2c87cd => _0x2c87cd['data'])['catch'](() => null);
}
;
async function _0x506be2(_0xc6f976) {
    console['clear'](), console['log']('Checking\x20license\x20' + _0x446f6a + '...'), await _0x576d66(0x5dc);
    const _0x207787 = await _0x3e2fa1(_0xc6f976);
    _0x2d42b1 = JSON['stringify'](_0x207787['user']['username']);
    if (!_0x207787)
        return console['log']('License\x20not\x20found');
    if (!_0x207787['user'])
        return console['log']('License\x20not\x20bound');
    return _0x207787['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x22d66f = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x22d66f = ![]);
}
async function _0x359497() {
    var _0x11c0ec = await _0x19c0a0['get']('Module');
    return console['clear'](), _0x11c0ec['Module'];
}
;
async function _0x1e8f52() {
    var _0x31e115 = await _0x19c0a0['get']('Setting');
    return console['clear'](), _0x31e115['Setting'];
}
async function _0x5c7133() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x11a8ee = 0x0; _0x11a8ee < _0x298e79['length']; _0x11a8ee++) {
        console['log']('\x20(' + _0x11a8ee + ')\x20' + _0x298e79[_0x11a8ee]);
    }
    console['log']('');
    var _0x3b7bf4 = await _0x19c0a0['get']('Task'), _0x5c4578 = _0x144cbc['readFileSync']('../tasks/' + _0x298e79[_0x3b7bf4['Task']], 'utf-8');
    return _0x395e8b = _0x28550a['parse'](_0x5c4578, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x24b3c9['blue'](_0x298e79[_0x3b7bf4['Task']])), _0x3dc76a = _0x298e79[_0x3b7bf4['Task']], _0x395e8b;
}
async function _0x2d5d8d() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x37fe65 = 0x0; _0x37fe65 < _0x63f278['length']; _0x37fe65++) {
        console['log']('\x20(' + _0x37fe65 + ')\x20' + _0x63f278[_0x37fe65]);
    }
    console['log']('');
    var _0x4cd774 = await _0x19c0a0['get']('Proxies'), _0xff09c6 = _0x144cbc['readFileSync']('../proxies/' + _0x63f278[_0x4cd774['Proxies']], 'utf-8')['split']('\x0a');
    let _0x1858a0 = _0xff09c6['map']((_0x34dd3e, _0x3dd9be) => {
        sanatizeProxy = _0x34dd3e['replace']('\x0d', '');
        if (_0xff09c6[_0x3dd9be + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x39cf16 = _0x63f278[_0x4cd774['Proxies']], console['clear'](), _0x1858a0;
}
async function _0x9cd970() {
    var _0x4d5a41 = await _0x19c0a0['get']('Value');
    return console['clear'](), _0x4d5a41['Value'];
}
async function _0x1d1ce1(_0x1a5b06) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x5e760a = 0x0; _0x5e760a < _0x1a5b06['length']; _0x5e760a++) {
        console['log']('\x20(' + _0x5e760a + ')\x20[' + _0x1a5b06[_0x5e760a]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x330117 = await _0x19c0a0['get']('Module');
    return _0x330117['Module'];
}
async function _0x1f66c8() {
    var _0x2cc771 = await _0x19c0a0['get']('Password');
    return console['clear'](), _0x2cc771['Password'];
}
;
async function _0x41bc1c() {
    var _0x3c54a2 = await _0x19c0a0['get']('Links');
    return _0x3c54a2['Links'];
}
;
async function _0x152ce4() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x1af85e = 0x0; _0x1af85e < _0x528d69['length']; _0x1af85e++) {
        console['log']('\x20(' + _0x1af85e + ')\x20' + _0x528d69[_0x1af85e]);
    }
    ;
    console['log']();
    let _0x53d95c = await _0x19c0a0['get']('Product');
    console['clear'](), _0x1a9ef8 = _0x53d95c['Product'];
    return;
}
;
function _0x39360f() {
    var _0x12b16a = new Date(Date['now']())['toLocaleTimeString']();
    return _0x12b16a;
}
;
const _0x246c5a = [
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
async function _0x1c0167(_0x299eab, _0x152bc8) {
    let _0x39fe6d = { 'headers': { 'content-type': 'application/json' } };
    await _0x367ce1['post'](_0x299eab, _0x152bc8, _0x39fe6d);
}
;
async function _0x333f7f(_0x5d3a38, _0x14a18f) {
    var _0x16d1f0 = _0x5d3a38[_0x14a18f]['Address1']['split'](''), _0x460e2f = _0x5d3a38[_0x14a18f]['Address2']['split'](''), _0x5da7e9 = _0x5d3a38[_0x14a18f]['Email']['split']('@');
    for (var _0x22c24a = 0x0; _0x22c24a < _0x16d1f0['length']; _0x22c24a++) {
        if (_0x16d1f0[_0x22c24a] == 'X') {
            var _0x5b7629 = Math['round'](Math['random']() * (_0x385f57['length'] - 0x1));
            _0x16d1f0[_0x22c24a] = _0x5f2909[_0x5b7629];
        }
    }
    ;
    for (var _0x22c24a = 0x0; _0x22c24a < _0x460e2f['length']; _0x22c24a++) {
        if (_0x460e2f[_0x22c24a] == 'X') {
            var _0x5b7629 = Math['round'](Math['random']() * (_0x385f57['length'] - 0x1));
            _0x460e2f[_0x22c24a] = _0x5f2909[_0x5b7629];
        }
    }
    ;
    _0x5d3a38[_0x14a18f]['FirstName'] == 'RANDOM' && (_0x5d3a38[_0x14a18f]['FirstName'] = _0x1500dc['first']());
    _0x5d3a38[_0x14a18f]['LastName'] == 'RANDOM' && (_0x5d3a38[_0x14a18f]['LastName'] = _0x1500dc['last']());
    _0x5da7e9[0x0] == 'RANDOM' ? _0x5da7e9[0x0] = '' + _0x1500dc['first']() + _0x1500dc['last']() + '@' : _0x5da7e9[0x0] = _0x5da7e9[0x0] + '@';
    _0x5d3a38[_0x14a18f]['Phone'] == 'RANDOM' && (_0x5d3a38[_0x14a18f]['Phone'] = _0x2524bc(0x3b9aca00, 0x2540be3ff));
    if (_0x5d3a38[_0x14a18f]['Follower'] == 'RANDOM') {
        var _0x55c9eb = _0x2524bc(0x1, 0x270f);
        _0x5d3a38[_0x14a18f]['Follower'] = '' + _0x1500dc['first']() + _0x1500dc['last']() + _0x55c9eb;
    }
    _0x5d3a38[_0x14a18f]['Email'] = _0x5da7e9['join'](''), _0x5d3a38[_0x14a18f]['Address1'] = _0x16d1f0['join'](''), _0x5d3a38[_0x14a18f]['Address2'] = _0x460e2f['join']('');
    return;
}
;
function _0x275eb2() {
    let _0x3f1d16 = proxyFile['split']('\x0a'), _0x27f77b = _0x3f1d16['map']((_0x4da581, _0x87f195) => {
        sanatizeProxy = _0x4da581['replace']('\x0d', '');
        if (_0x3f1d16[_0x87f195 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x27f77b;
}
;
async function _0x3d6a1d(_0x4b0e3f) {
    var _0x5af064 = _0x4b0e3f[0x1]['split'](':');
    const _0x5a8cf8 = await _0x8dd97f['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x5af064[0x0] + ':' + _0x5af064[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x242e19 = await _0x5a8cf8['newPage']();
        await _0x242e19['authenticate']({
            'username': '' + _0x5af064[0x2],
            'password': '' + _0x5af064[0x3]
        }), console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x242e19['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x242e19['setRequestInterception'](!![]), _0x242e19['on']('request', _0x542566 => {
            _0x542566['resourceType']() === 'image' || _0x542566['resourceType']() === 'font' || _0x542566['resourceType']() === 'media' ? _0x542566['abort']() : _0x542566['continue']();
        }), await _0x242e19['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x242e19['waitForTimeout'](0xbb8), await _0x242e19['waitForSelector']('.product-card');
        const _0x3e0d3e = await _0x242e19['$$eval']('a.product-card', _0x4fd358 => {
            return _0x4fd358['map'](_0x4ac960 => _0x4ac960['href']);
        });
        return _0x528d69 = _0x3e0d3e;
    } catch (_0x5753cd) {
        console['log']('\x20' + _0x5753cd);
    } finally {
        _0x5a8cf8['close'](), console['clear']();
    }
}
;
async function _0x9c281(_0x353384, _0x376415, _0x2c3288, _0x127acf, _0x2d508e) {
    await _0x333f7f(_0x127acf, _0x353384);
    var _0x4daa4c = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x2d42b1
            },
            {
                'name': 'Size',
                'value': '' + _0x127acf[_0x353384]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x14bd83['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x42e8b2
            }
        ]
    }];
    const _0x1202e8 = { 'embeds': _0x4daa4c };
    if (_0x14bd83['useRandomProxy'] = ![])
        var _0x49b521 = _0x2d508e[_0x353384]['split'](':');
    else
        var _0x1364e2 = Math['round'](Math['random']() * (_0x2d508e['length'] - 0x1)), _0x49b521 = _0x2d508e[_0x1364e2]['split'](':');
    var _0x19bdab = _0x2c3288['data'];
    _0x376415 == 'exp' ? _0x19bdab['data']['attributes']['email'] = '' + _0x127acf[_0x353384]['FirstName'] + _0x127acf[_0x353384]['LastName'] + _0x14bd83['catchall'] : _0x19bdab['data']['attributes']['email'] = '' + _0x127acf[_0x353384]['Email'];
    _0x19bdab['data']['attributes']['properties']['$first_name'] = '' + _0x127acf[_0x353384]['FirstName'], _0x19bdab['data']['attributes']['properties']['$last_name'] = '' + _0x127acf[_0x353384]['LastName'], _0x19bdab['data']['attributes']['properties']['$address1'] = _0x127acf[_0x353384]['Address1'] + '\x20' + _0x127acf[_0x353384]['Address2'], _0x19bdab['data']['attributes']['properties']['$zip'] = '' + _0x127acf[_0x353384]['Zip'], _0x19bdab['data']['attributes']['properties']['$city'] = '' + _0x127acf[_0x353384]['City'], _0x19bdab['data']['attributes']['properties']['$country'] = '' + _0x127acf[_0x353384]['Country'], _0x19bdab['data']['attributes']['properties']['Size'] = '' + _0x127acf[_0x353384]['Size'], _0x19bdab['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x127acf[_0x353384]['Follower'];
    var _0x56eabc = {
        'jar': _0x1487a2,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x2c3288['url'],
        'headers': _0x2c3288['headers'],
        'body': JSON['stringify'](_0x19bdab),
        'proxy': 'http://' + _0x49b521[0x2] + ':' + _0x49b521[0x3] + '@' + _0x49b521[0x0] + ':' + _0x49b521[0x1]
    };
    return _0x376415 === 'ver' && (_0x56eabc['method'] = 'GET'), new Promise(function (_0x46a0fb, _0x12a582) {
        callback = async (_0x53a18b, _0x448ead, _0x5e7be9) => {
            !_0x53a18b && _0x448ead['statusCode'] == 0xca || !_0x53a18b && _0x448ead['statusCode'] == 0xc8 ? _0x46a0fb(console['log'](_0x24b3c9['green'](_0x39360f() + '\x20[' + _0x2c3288['name'] + ']\x20Task\x20' + (_0x353384 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x4daa4c[0x0]['title'] = 'Failed\x20entry', _0x4daa4c[0x0]['description'] = '' + _0x53a18b, await _0x1c0167(_0x4516d2, _0x1202e8), _0x12a582(console['log'](_0x39360f() + '\x20[' + _0x2c3288['name'] + ']\x20Task\x20' + (_0x353384 + 0x1) + ':\x20' + _0x53a18b)));
        };
        try {
            _0x376415 === 'ver' ? console['log'](_0x39360f() + '\x20[' + _0x2c3288['name'] + ']\x20Task\x20' + (_0x353384 + 0x1) + ':\x20Verifying.') : console['log'](_0x39360f() + '\x20[' + _0x2c3288['name'] + ']\x20Task\x20' + (_0x353384 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x19bdab['data']['attributes']['email']), _0x202863(_0x56eabc, callback);
        } catch (_0x57379e) {
            console['log'](_0x39360f() + '\x20Task\x20' + (_0x353384 + 0x1) + ':\x20' + _0x57379e);
        }
    });
}
;
async function _0xd944c9(_0x137039, _0x2fdce5) {
    _0x8dd97f['use'](_0x163592()), _0x8dd97f['use'](_0x2c9766({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x14bd83['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1cc0c0 = 0x0; _0x1cc0c0 < _0x137039['length']; _0x1cc0c0++) {
        var _0x568598 = '', _0x2ba07e = 0x0, _0xe56f83 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2d42b1
                },
                {
                    'name': 'Product',
                    'value': '' + _0x137039[_0x1cc0c0]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x137039[_0x1cc0c0]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x14bd83['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x42e8b2
                }
            ]
        }];
        const _0x153c33 = { 'embeds': _0xe56f83 };
        await _0x333f7f(_0x137039, _0x1cc0c0);
        if (_0x137039[_0x1cc0c0]['Email'] == '' || _0x137039[_0x1cc0c0]['FirstName'] == '' || _0x137039[_0x1cc0c0]['LastName'] == '' || _0x137039[_0x1cc0c0]['Country'] == '' || _0x137039[_0x1cc0c0]['Size'] == '' || _0x137039[_0x1cc0c0]['Address1'] == '' || _0x137039[_0x1cc0c0]['Zip'] == '') {
            console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x137039[_0x1cc0c0]['Email'] == '' || _0x137039[_0x1cc0c0]['FirstName'] == '' || _0x137039[_0x1cc0c0]['LastName'] == '' || _0x137039[_0x1cc0c0]['Country'] == '' || _0x137039[_0x1cc0c0]['Size'] == '' || _0x137039[_0x1cc0c0]['Address1'] == '' || _0x137039[_0x1cc0c0]['Zip'] == '' || _0x137039[_0x1cc0c0]['Phone'] == '') {
            console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x4e71b8 = '' + _0x137039[_0x1cc0c0]['Url'];
        if (_0x14bd83['useRandomProxy'] = ![])
            var _0xc242b3 = _0x2fdce5[_0x1cc0c0]['split'](':');
        else
            var _0xd09750 = Math['round'](Math['random']() * (_0x2fdce5['length'] - 0x1)), _0xc242b3 = _0x2fdce5[_0xd09750]['split'](':');
        const _0x5b240b = await _0x8dd97f['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0xc242b3[0x0] + ':' + _0xc242b3[0x1]]
        });
        try {
            const _0x48166a = await _0x5b240b['newPage']();
            await _0x48166a['authenticate']({
                'username': '' + _0xc242b3[0x2],
                'password': '' + _0xc242b3[0x3]
            }), console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x48166a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x48166a['setRequestInterception'](!![]), _0x48166a['on']('request', _0x1a8cc8 => {
                _0x1a8cc8['resourceType']() === 'image' || _0x1a8cc8['resourceType']() === 'font' || _0x1a8cc8['resourceType']() === 'media' ? _0x1a8cc8['abort']() : _0x1a8cc8['continue']();
            }), await _0x48166a['goto'](_0x4e71b8), await _0x576d66(0xbb8), await _0x48166a['waitForSelector']('.control__JhutY'), await _0x48166a['click']('.control__JhutY'), await _0x576d66(0x1f4);
            if (_0x137039[_0x1cc0c0]['Size'] != 'RANDOM')
                try {
                    const _0xba8303 = await _0x48166a['$x']('//div[contains(text(),\x20\x27' + _0x137039[_0x1cc0c0]['Size'] + '\x27)]');
                    await _0xba8303[0x0]['click']();
                } catch {
                    console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x25f7ba = await _0x48166a['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x4144c5 = Math['round'](Math['random']() * (_0x25f7ba['length'] - 0x1));
                await _0x25f7ba[_0x4144c5]['click']();
            }
            await _0x576d66(0x4b0);
            const _0x165c33 = await _0x48166a['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x165c33[0x0]['click'](), await _0x48166a['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x48166a['type']('input[name=\x22email\x22]', '' + _0x137039[_0x1cc0c0]['Email']), await _0x576d66(0x640), await _0x48166a['type']('input[name=\x22phone\x22]', '' + _0x137039[_0x1cc0c0]['Phone']), await _0x576d66(0x4b0), await _0x48166a['click']('button.btn.continue-button__1RtsS'), await _0x576d66(0x4b0);
            try {
                await _0x48166a['type']('input[name=\x22firstName\x22]', '' + _0x137039[_0x1cc0c0]['FirstName']), await _0x576d66(0x258);
            } catch {
                const _0x1e321a = await _0x48166a['$$eval']('.invalid-feedback\x20>\x20div', _0x7b42be => {
                    return _0x7b42be['map'](_0x32e439 => _0x32e439['innerText']);
                });
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x20' + _0x1e321a));
                continue;
            }
            await _0x48166a['type']('input[name=\x22lastName\x22]', '' + _0x137039[_0x1cc0c0]['LastName']), await _0x576d66(0xc8), await _0x48166a['type']('input[name=\x22instagramUsername\x22]', '' + _0x137039[_0x1cc0c0]['Follower']), await _0x576d66(0x4b0), await _0x48166a['click']('button.btn.continue-button__1RtsS'), await _0x576d66(0x3e8), console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x48166a['select']('select[name=\x22country\x22]', '' + _0x137039[_0x1cc0c0]['Country']), await _0x576d66(0x2bc), await _0x48166a['type']('input[name=\x22streetName\x22]', '' + _0x137039[_0x1cc0c0]['Address1']), await _0x576d66(0x258), await _0x48166a['type']('input[name=\x22houseNumber\x22]', _0x137039[_0x1cc0c0]['HouseNumber'] + '\x20' + _0x137039[_0x1cc0c0]['Address2']), await _0x576d66(0xc8), await _0x48166a['type']('input[name=\x22postalCode\x22]', '' + _0x137039[_0x1cc0c0]['Zip']), await _0x576d66(0x1f4), await _0x48166a['type']('input[name=\x22city\x22]', '' + _0x137039[_0x1cc0c0]['City']), await _0x576d66(0x4b0), await _0x48166a['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x576d66(0x4b0), await _0x48166a['click']('button.btn.continue-button__1RtsS'), await _0x576d66(0x4b0), console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x48166a['solveRecaptchas'](), console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x576d66(0xbb8), await _0x48166a['click']('button.btn.continue-button__1RtsS'), await _0x576d66(0x1388), console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x48166a['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x48166a['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x576d66(0x4b0), await _0x48166a['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x137039[_0x1cc0c0]['CardNumber']), await _0x576d66(0x320), await _0x48166a['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x48166a['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x137039[_0x1cc0c0]['ExpiryDate']), await _0x576d66(0x4b0), await _0x48166a['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x48166a['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x137039[_0x1cc0c0]['CVV']), await _0x576d66(0x226), await _0x48166a['type']('input[name=\x22holderName\x22]', '' + _0x137039[_0x1cc0c0]['NameOnCard']), await _0x576d66(0x226), await _0x48166a['click']('button.adyen-checkout__button'), console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x48166a['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x576d66(0xbb8), console['log'](_0x24b3c9['green'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1c0167(_0xa3dd4b, _0x153c33);
            } catch {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x203DS\x20Failed')), _0x568598 = 'yes';
            }
        } catch (_0x46f01c) {
            console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x20' + _0x46f01c), _0xe56f83[0x0]['title'] = 'Failed\x20' + _0x246c5a[taskModule]['name'] + '\x20entry', _0xe56f83[0x0]['description'] = '' + _0x46f01c, await _0x1c0167(_0x4516d2, _0x153c33), _0x568598 = 'yes';
        } finally {
            _0x5b240b['close']();
            if (_0x568598 == 'yes' && _0x2ba07e != 0x5) {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x1cc0c0 + 0x1) + '\x20:\x20Retrying')), _0x1cc0c0 = _0x1cc0c0 - 0x1, _0x2ba07e = _0x2ba07e + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x14bd83['footshopDelay'] + '\x20ms'), await _0x576d66(_0x14bd83['footshopDelay']);
        }
    }
}
afewFunction = async (_0x17f1d, _0x18da45, _0x8c4400, _0x1a65c7, _0x8a6a80) => {
    for (var _0x2edca4 = 0x0; _0x2edca4 < _0x1a65c7['length']; _0x2edca4++) {
        var _0x5500ed = '', _0x431998 = 0x0;
        _0x544b3c(_0x8c4400['name'] + '\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20/\x20' + _0x1a65c7['length'] + '\x20||\x20File:\x20' + _0x3dc76a + '\x20Proxies:\x20' + _0x39cf16), await _0x333f7f(_0x1a65c7, _0x2edca4);
        var _0x2af406 = [{
            'type': 'rich',
            'title': 'Succesful\x20AFEW\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2d42b1
                },
                {
                    'name': 'Product',
                    'value': '' + _0x17f1d
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1a65c7[_0x2edca4]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x14bd83['AfewDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x42e8b2
                }
            ]
        }];
        const _0x515690 = { 'embeds': _0x2af406 };
        if (_0x1a65c7[_0x2edca4]['Email'] == '' || _0x1a65c7[_0x2edca4]['FirstName'] == '' || _0x1a65c7[_0x2edca4]['LastName'] == '' || _0x1a65c7[_0x2edca4]['Country'] == '' || _0x1a65c7[_0x2edca4]['Size'] == '' || _0x1a65c7[_0x2edca4]['Address1'] == '' || _0x1a65c7[_0x2edca4]['Zip'] == '') {
            console['log'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x14bd83['useRandomProxy'] = ![])
            var _0x142373 = _0x8a6a80[_0x2edca4]['split'](':');
        else
            var _0x2176c9 = Math['round'](Math['random']() * (_0x8a6a80['length'] - 0x1)), _0x142373 = _0x8a6a80[_0x2176c9]['split'](':');
        const _0x47af95 = await _0x8dd97f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x142373[0x0] + ':' + _0x142373[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x538014 = await _0x47af95['newPage']();
            await _0x538014['setDefaultNavigationTimeout'](0x1d4c0), await _0x538014['authenticate']({
                'username': '' + _0x142373[0x2],
                'password': '' + _0x142373[0x3]
            }), console['log'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x538014['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x538014['setRequestInterception'](!![]), _0x538014['on']('request', _0x2d5c8a => {
                _0x2d5c8a['resourceType']() === 'image' || _0x2d5c8a['resourceType']() === 'font' || _0x2d5c8a['resourceType']() === 'media' ? _0x2d5c8a['abort']() : _0x2d5c8a['continue']();
            }), await _0x538014['goto'](_0x17f1d, { 'waitUntil': 'networkidle2' }), console['log'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x538014['waitForTimeout'](0xfa0), console['log'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x538014['waitForTimeout'](0x320);
            if (_0x1a65c7[_0x2edca4]['Size'] == 'RANDOM') {
                console['log'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x189248 = await _0x538014['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0xdc1483 => {
                    return _0xdc1483['map'](_0x26a2d9 => _0x26a2d9['href']);
                });
                var _0x538157 = Math['round'](Math['random']() * (_0x189248['length'] - 0x1));
                await _0x538014['goto']('' + _0x189248[_0x538157]);
            } else {
                console['log'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1a65c7[_0x2edca4]['Size']);
                try {
                    const _0x237cb7 = await _0x538014['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x1a65c7[_0x2edca4]['Size'] + '\x22]\x20>\x20a', _0x86198d => {
                        return _0x86198d['map'](_0xf0332f => _0xf0332f['href']);
                    });
                    await _0x538014['goto']('' + _0x237cb7[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x1f7370) {
                    console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20' + _0x1f7370 + '\x20Size\x20not\x20found')), _0x2af406[0x0]['title'] = 'Failed\x20entry', _0x2af406[0x0]['description'] = 'Size\x20not\x20found', await _0x1c0167(_0x4516d2, _0x515690);
                    continue;
                }
            }
            await _0x538014['waitForTimeout'](0x258), await _0x538014['type']('#raffle-instagram', '' + _0x1a65c7[_0x2edca4]['Follower'], { 'delay': 0x64 }), await _0x538014['waitForTimeout'](0x384), await _0x538014['click']('#raffle-terms'), await _0x538014['waitForTimeout'](0x384), await _0x538014['evaluate'](() => {
                const _0x1ff516 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x1ff516['click']();
            }), await _0x538014['waitForTimeout'](0xbb8), await _0x538014['waitForSelector']('#checkout_email'), await _0x576d66(0x3e8), console['log'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x18da45 == 'sec' ? await _0x538014['type']('#checkout_email', '' + _0x1a65c7[_0x2edca4]['FirstName'] + _0x1a65c7[_0x2edca4]['LastName'] + _0x14bd83['catchall'], 0x32) : await _0x538014['type']('#checkout_email', '' + _0x1a65c7[_0x2edca4]['Email'], 0x32);
            await _0x576d66(0x320), await _0x538014['select']('#checkout_shipping_address_country', '' + _0x1a65c7[_0x2edca4]['Country']), await _0x538014['waitForTimeout'](0x258), await _0x538014['type']('#checkout_shipping_address_first_name', '' + _0x1a65c7[_0x2edca4]['FirstName']), await _0x538014['waitForTimeout'](0x320), await _0x538014['type']('#checkout_shipping_address_last_name', '' + _0x1a65c7[_0x2edca4]['LastName']), await _0x538014['waitForTimeout'](0x2bc), await _0x538014['type']('#checkout_shipping_address_address1', _0x1a65c7[_0x2edca4]['Address1'] + '\x20' + _0x1a65c7[_0x2edca4]['HouseNumber']), await _0x538014['waitForTimeout'](0x2bc), await _0x538014['type']('#checkout_shipping_address_address2', '' + _0x1a65c7[_0x2edca4]['Address2']), await _0x538014['waitForTimeout'](0x2bc);
            _0x1a65c7[_0x2edca4]['Postcode'] == undefined ? await _0x538014['type']('#checkout_shipping_address_zip', '' + _0x1a65c7[_0x2edca4]['Zip']) : await _0x538014['type']('#checkout_shipping_address_zip', '' + _0x1a65c7[_0x2edca4]['Postcode']);
            await _0x538014['waitForTimeout'](0x2bc), await _0x538014['type']('#checkout_shipping_address_city', '' + _0x1a65c7[_0x2edca4]['City']), await _0x538014['waitForTimeout'](0x2bc), console['log'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x538014, _0x538014['evaluate'](() => {
                const _0x4c37cf = document['querySelector']('#continue_button');
                for (var _0x4117dc = 0x0; _0x4117dc < 0x5; _0x4117dc++) {
                    if (_0x4c37cf) {
                        _0x4c37cf['click'](), _0x4c37cf['click']();
                        break;
                    } else
                        _0x576d66(0xfa0);
                }
            }), await _0x538014['waitForTimeout'](0x1194);
            try {
                await _0x538014['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x538014['evaluate'](() => {
                const _0x407a49 = document['querySelector']('#continue_button');
                for (var _0x41ff5d = 0x0; _0x41ff5d < 0x5; _0x41ff5d++) {
                    if (_0x407a49) {
                        _0x407a49['click']();
                        break;
                    } else
                        _0x576d66(0xfa0);
                }
            }), await _0x538014['waitForTimeout'](0x7d0), console['log'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x538014['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x538014['evaluate'](() => {
                const _0x585865 = document['querySelector']('#continue_button');
                for (var _0x34baea = 0x0; _0x34baea < 0x5; _0x34baea++) {
                    if (_0x585865) {
                        _0x585865['click']();
                        break;
                    } else
                        _0x576d66(0xfa0);
                }
            }), await _0x538014['waitForTimeout'](0x1194), await _0x538014['waitForSelector']('#continue_button'), _0x538014['evaluate'](() => {
                const _0x49b43c = document['querySelector']('#continue_button');
                for (var _0x2e9456 = 0x0; _0x2e9456 < 0x5; _0x2e9456++) {
                    if (_0x49b43c) {
                        _0x49b43c['click']();
                        break;
                    } else
                        _0x576d66(0xfa0);
                }
            });
            try {
                await _0x538014['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x2ea394) {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x2ea394));
            }
            console['log'](_0x24b3c9['green'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1c0167(_0xa3dd4b, _0x515690);
        } catch (_0x2bcc46) {
            console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20' + _0x2bcc46)), _0x2af406[0x0]['title'] = 'Failed\x20entry', _0x2af406[0x0]['description'] = '' + _0x2bcc46, await _0x1c0167(_0x4516d2, _0x515690), _0x5500ed = 'yes';
        } finally {
            _0x47af95 && _0x47af95['close']();
            if (_0x5500ed == 'yes' && _0x431998 != 0x5) {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x8c4400['name'] + ']\x20Task\x20' + (_0x2edca4 + 0x1) + '\x20:\x20Retrying')), _0x2edca4 = _0x2edca4 - 0x1, _0x431998 = _0x431998 + 0x1;
                continue;
            }
            if (_0x2edca4 + 0x1 == _0x1a65c7['length']) {
                console['log'](_0x24b3c9['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x576d66(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x14bd83['AfewDelay'] + '\x20ms'), await _0x576d66(_0x14bd83['AfewDelay']);
        }
    }
};
async function _0x4d7768(_0x4839f9, _0x1edae4, _0x2baaf7, _0x5ba014) {
    _0x8dd97f['use'](_0x163592()), _0x8dd97f['use'](_0x2c9766({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x14bd83['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x267368 = 0x0; _0x267368 < _0x2baaf7['length']; _0x267368++) {
        var _0x149137 = '', _0x35f810 = 0x0;
        _0x544b3c(_0x1edae4['name'] + '\x20Task\x20' + (_0x267368 + 0x1) + '\x20/\x20' + _0x2baaf7['length'] + '\x20||\x20File:\x20' + _0x3dc76a + '\x20Proxies:\x20' + _0x39cf16);
        var _0x4d6ddd = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2d42b1
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x14bd83['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x42e8b2
                }
            ]
        }];
        const _0x360cba = { 'embeds': _0x4d6ddd };
        await _0x333f7f(_0x2baaf7, _0x267368);
        if (_0x2baaf7[_0x267368]['Email'] == '' || _0x2baaf7[_0x267368]['Password'] == '' || _0x2baaf7[_0x267368]['FirstName'] == '' || _0x2baaf7[_0x267368]['LastName'] == '') {
            console['log'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x14bd83['useRandomProxy'] = ![])
            var _0x6760d3 = _0x5ba014[_0x267368]['split'](':');
        else
            var _0x1a4b79 = Math['round'](Math['random']() * (_0x5ba014['length'] - 0x1)), _0x6760d3 = _0x5ba014[_0x1a4b79]['split'](':');
        const _0x6e8271 = await _0x8dd97f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x6760d3[0x0] + ':' + _0x6760d3[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x9dd028 = await _0x6e8271['newPage']();
            await _0x9dd028['authenticate']({
                'username': '' + _0x6760d3[0x2],
                'password': '' + _0x6760d3[0x3]
            }), console['log'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x9dd028['setRequestInterception'](!![]), _0x9dd028['on']('request', _0x39ec4c => {
                _0x39ec4c['resourceType']() === 'image' || _0x39ec4c['resourceType']() === 'font' || _0x39ec4c['resourceType']() === 'media' ? _0x39ec4c['abort']() : _0x39ec4c['continue']();
            }), await _0x9dd028['goto'](_0x4839f9), await _0x576d66(0xbb8), console['log'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x9dd028['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x9dd028['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x9dd028['waitForSelector']('#button-register'), await _0x576d66(0x7d0), await _0x9dd028['evaluate'](() => {
                const _0xa0c140 = document['querySelector']('#button-register');
                _0xa0c140['click']();
            }), console['log'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x576d66(0x1388), await _0x9dd028['waitForSelector']('#customer_salutation'), await _0x9dd028['select']('#customer_salutation', 'mr'), await _0x576d66(0x7d0), await _0x9dd028['waitForSelector']('#customer_firstname'), await _0x9dd028['type']('#customer_firstname', '' + _0x2baaf7[_0x267368]['FirstName']), await _0x576d66(0x352), await _0x9dd028['waitForSelector']('#customer_lastname'), await _0x9dd028['type']('#customer_lastname', '' + _0x2baaf7[_0x267368]['LastName']), await _0x576d66(0x352), await _0x9dd028['type']('#email-input', '' + _0x2baaf7[_0x267368]['Email']), await _0x576d66(0x352), await _0x9dd028['type']('#email-confirm-input', '' + _0x2baaf7[_0x267368]['Email']), await _0x576d66(0x352), await _0x9dd028['type']('#register-password', '' + _0x2baaf7[_0x267368]['Password']), await _0x576d66(0x352), await _0x9dd028['type']('#password-confirm', '' + _0x2baaf7[_0x267368]['Password']), await _0x576d66(0x352), console['log'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x9dd028['click']('#consent'), await _0x576d66(0x1f4);
            const _0x15cdc9 = await _0x9dd028['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x15cdc9) {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x9dd028['click']('#buttonRegister');
            try {
                await _0x9dd028['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x24b3c9['yellow'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20Account\x20' + _0x2baaf7[_0x267368]['Email'] + '\x20Generated!')), console['log'](_0x24b3c9['yellow'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x2baaf7[_0x267368]['Email'])), await _0x576d66(0x4b0);
            async function _0x1a7344() {
                console['log'](_0x24b3c9['yellow'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x26b4f5 = await _0x19c0a0['get']('Code');
                return _0x26b4f5['Code'];
            }
            ;
            code = await _0x1a7344(), _0x576d66(0x320), console['log'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20Verifying..'), await _0x9dd028['type']('#verificationCode', code), await _0x576d66(0x1f4), await _0x9dd028['click']('#buttonVerify'), await _0x576d66(0x190), await _0x9dd028['click']('#buttonVerify'), await _0x576d66(0x3e8);
            try {
                await _0x9dd028['waitForSelector']('div.b-user_greeting'), console['log'](_0x24b3c9['green'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20Account\x20' + _0x2baaf7[_0x267368]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x144cbc['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x2baaf7[_0x267368]['Email'] + ',' + _0x2baaf7[_0x267368]['Password'] + ','), console['log'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20Account\x20' + _0x2baaf7[_0x267368]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27'), await _0x1c0167(_0xa3dd4b, _0x360cba);
            } catch {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x48e891) {
            console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20' + _0x48e891)), _0x4d6ddd[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x4d6ddd[0x0]['description'] = '' + _0x48e891, await _0x1c0167(_0x4516d2, _0x360cba), _0x149137 = 'yes';
        } finally {
            _0x6e8271 && _0x6e8271['close']();
            if (_0x149137 == 'yes' && _0x35f810 != 0x5) {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x1edae4['name'] + ']\x20Task\x20' + (_0x267368 + 0x1) + '\x20:\x20Retrying')), _0x267368 = _0x267368 - 0x1, _0x35f810 = _0x35f810 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x14bd83['delay'] + '\x20ms'), await _0x576d66(_0x14bd83['delay']);
        }
    }
}
async function _0x112a76(_0x5120e3, _0x1d4abd, _0x4d5eaa) {
    _0x8dd97f['use'](_0x163592()), _0x8dd97f['use'](_0x2c9766({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x14bd83['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x9c0d01 = 0x0; _0x9c0d01 < _0x1d4abd['length']; _0x9c0d01++) {
        var _0x362792 = '', _0x3bfddc = 0x0;
        _0x544b3c(_0x5120e3['name'] + '\x20Task\x20' + (_0x9c0d01 + 0x1) + '\x20/\x20' + _0x1d4abd['length'] + '\x20||\x20File:\x20' + _0x3dc76a + '\x20Proxies:\x20' + _0x39cf16);
        var _0x786782 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2d42b1
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x14bd83['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x42e8b2
                }
            ]
        }];
        const _0x24cda5 = { 'embeds': _0x786782 };
        await _0x333f7f(_0x1d4abd, _0x9c0d01);
        if (_0x1d4abd[_0x9c0d01]['Email'] == '' || _0x1d4abd[_0x9c0d01]['Password'] == '' || _0x1d4abd[_0x9c0d01]['FirstName'] == '' || _0x1d4abd[_0x9c0d01]['LastName'] == '') {
            console['log'](_0x39360f() + '\x20[' + _0x5120e3['name'] + ']\x20Task\x20' + (_0x9c0d01 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x14bd83['useRandomProxy'] = ![])
            var _0x2f3cee = _0x4d5eaa[_0x9c0d01]['split'](':');
        else
            var _0x1d364f = Math['round'](Math['random']() * (_0x4d5eaa['length'] - 0x1)), _0x2f3cee = _0x4d5eaa[_0x1d364f]['split'](':');
        const _0x552c91 = await _0x8dd97f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2f3cee[0x0] + ':' + _0x2f3cee[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x430457 = await _0x552c91['newPage']();
            await _0x430457['authenticate']({
                'username': '' + _0x2f3cee[0x2],
                'password': '' + _0x2f3cee[0x3]
            }), console['log'](_0x39360f() + '\x20[' + _0x5120e3['name'] + ']\x20Task\x20' + (_0x9c0d01 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x430457['setRequestInterception'](!![]), _0x430457['on']('request', _0x4ef2a6 => {
                _0x4ef2a6['resourceType']() === 'image' || _0x4ef2a6['resourceType']() === 'font' || _0x4ef2a6['resourceType']() === 'media' ? _0x4ef2a6['abort']() : _0x4ef2a6['continue']();
            }), await _0x430457['goto']('https://www.kickz.com/nl/login/', { 'waitUntil': 'networkidle2' }), await _0x576d66(0xbb8), console['log'](_0x39360f() + '\x20[' + _0x5120e3['name'] + ']\x20Task\x20' + (_0x9c0d01 + 0x1) + '\x20:\x20Logging\x20in'), await _0x430457['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x430457['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x430457['waitForSelector']('#username'), await _0x430457['type']('#username', _0x1d4abd[_0x9c0d01]['Email']), await _0x430457['waitForSelector']('#password'), await _0x430457['type']('#password', _0x1d4abd[_0x9c0d01]['Password']), await _0x576d66(0x190), await _0x430457['click']('#buttonSubmit'), await _0x430457['waitForSelector']('div.b-user_greeting'), console['log'](_0x39360f() + '\x20[' + _0x5120e3['name'] + ']\x20Task\x20' + (_0x9c0d01 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x576d66(0x1f4), await _0x430457['goto']('' + _0x1d4abd[_0x9c0d01]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x39360f() + '\x20[' + _0x5120e3['name'] + ']\x20Task\x20' + (_0x9c0d01 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x1d4abd[_0x9c0d01]['Size']);
            let _0x8ce566 = _0x1d4abd[_0x9c0d01]['Size']['replace']('.5', '\x201/2');
            await _0x430457['click']('button[title=\x22' + _0x8ce566 + '\x22]'), await _0x576d66(0x1f4);
            try {
                await _0x430457['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x576d66(0x12c), console['log'](_0x39360f() + '\x20[' + _0x5120e3['name'] + ']\x20Task\x20' + (_0x9c0d01 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x430457['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x576d66(0x12c), await _0x430457['type']('#dwfrm_raffle_addressFields_firstName', _0x1d4abd[_0x9c0d01]['FirstName']), await _0x576d66(0x12c), await _0x430457['type']('#dwfrm_raffle_addressFields_lastName', _0x1d4abd[_0x9c0d01]['LastName']), await _0x576d66(0x12c), await _0x430457['select']('#dwfrm_raffle_addressFields_country', _0x1d4abd[_0x9c0d01]['Country']), await _0x576d66(0x12c), await _0x430457['type']('#dwfrm_raffle_addressFields_city', _0x1d4abd[_0x9c0d01]['City']), await _0x576d66(0x12c);
            _0x1d4abd[_0x9c0d01]['Postcode'] == undefined && (_0x1d4abd[_0x9c0d01]['Postcode'] = _0x1d4abd[_0x9c0d01]['Zip']);
            await _0x430457['type']('#dwfrm_raffle_addressFields_postalCode', _0x1d4abd[_0x9c0d01]['Postcode']), await _0x576d66(0x12c), await _0x430457['type']('#dwfrm_raffle_addressFields_address1', _0x1d4abd[_0x9c0d01]['Address1']), await _0x576d66(0x12c), await _0x430457['type']('#dwfrm_raffle_addressFields_address2', _0x1d4abd[_0x9c0d01]['HouseNumber']), await _0x576d66(0x12c), await _0x430457['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x1d4abd[_0x9c0d01]['Address2']), await _0x576d66(0x12c), await _0x430457['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x576d66(0x12c), await _0x430457['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x1d4abd[_0x9c0d01]['Follower']), await _0x576d66(0x1f4), await _0x430457['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x576d66(0x1f4), console['log'](_0x39360f() + '\x20[' + _0x5120e3['name'] + ']\x20Task\x20' + (_0x9c0d01 + 0x1) + '\x20:\x20' + _0x24b3c9['blue']('Awaiting\x20Paypal\x20Payment')), await _0x430457['click']('.b-paypal_button');
            try {
                await _0x430457['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x24b3c9['green'](_0x39360f() + '\x20[' + _0x5120e3['name'] + ']\x20Task\x20' + (_0x9c0d01 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1c0167(_0xa3dd4b, _0x24cda5);
            } catch (_0x418cd0) {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x5120e3['name'] + ']\x20Task\x20' + (_0x9c0d01 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x418cd0));
            }
        } catch (_0x2f984b) {
            console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x5120e3['name'] + ']\x20Task\x20' + (_0x9c0d01 + 0x1) + '\x20:\x20' + _0x2f984b)), _0x786782[0x0]['title'] = 'Failed\x20kickz\x20Entry', _0x786782[0x0]['description'] = '' + _0x2f984b, await _0x1c0167(_0x4516d2, _0x24cda5), _0x362792 = 'yes';
        } finally {
            _0x552c91 && _0x552c91['close']();
            if (_0x362792 == 'yes' && _0x3bfddc != 0x5) {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x5120e3['name'] + ']\x20Task\x20' + (_0x9c0d01 + 0x1) + '\x20:\x20Retrying')), _0x9c0d01 = _0x9c0d01 - 0x1, _0x3bfddc = _0x3bfddc + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x14bd83['AfewDelay'] + '\x20ms'), await _0x576d66(_0x14bd83['AfewDelay']);
        }
    }
}
async function _0x66fc41(_0x4697df, _0x5e5301) {
    _0x8dd97f['use'](_0x163592()), _0x8dd97f['use'](_0x2c9766({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x14bd83['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x24c904 = 0x0; _0x24c904 < bouncewear['length']; _0x24c904++) {
        await _0x333f7f(bouncewear, _0x24c904);
        if (bouncewear[_0x24c904]['Email'] == '' || bouncewear[_0x24c904]['Password'] == '' || bouncewear[_0x24c904]['FirstName'] == '' || bouncewear[_0x24c904]['LastName'] == '') {
            console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x24c904 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x14bd83['useRandomProxy'] = ![])
            var _0x2e6257 = _0x275eb2()[_0x24c904]['split'](':');
        else
            var _0x22f8b1 = Math['round'](Math['random']() * (_0x275eb2()['length'] - 0x1)), _0x2e6257 = _0x275eb2()[_0x22f8b1]['split'](':');
        const _0x418a40 = await _0x8dd97f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2e6257[0x0] + ':' + _0x2e6257[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4886bd = await _0x418a40['newPage']();
            await _0x4886bd['authenticate']({
                'username': '' + _0x2e6257[0x2],
                'password': '' + _0x2e6257[0x3]
            }), console['log'](_0x39360f() + '\x20[' + _0x5e5301['name'] + ']\x20Task\x20' + (_0x24c904 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4886bd['setRequestInterception'](!![]), _0x4886bd['on']('request', _0x1b7ad7 => {
                _0x1b7ad7['resourceType']() === 'image' || _0x1b7ad7['resourceType']() === 'font' || _0x1b7ad7['resourceType']() === 'media' ? _0x1b7ad7['abort']() : _0x1b7ad7['continue']();
            }), await _0x4886bd['goto'](_0x4697df), await _0x576d66(0xbb8), await _0x4886bd['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x39360f() + '\x20[' + _0x5e5301['name'] + ']\x20Task\x20' + (_0x24c904 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4886bd['type']('#RegisterForm-FirstName', '' + bouncewear[_0x24c904]['FirstName']), await _0x576d66(0x226), await _0x4886bd['type']('#RegisterForm-LastName', '' + bouncewear[_0x24c904]['LastName']), await _0x576d66(0x226), await _0x4886bd['type']('#RegisterForm-email', '' + bouncewear[_0x24c904]['Email']), await _0x576d66(0x226), await _0x4886bd['type']('#RegisterForm-password', '' + bouncewear[_0x24c904]['Password']), await _0x576d66(0x226), await _0x4886bd['click']('#marketing'), console['log'](_0x39360f() + '\x20[' + _0x5e5301['name'] + ']\x20Task\x20' + (_0x24c904 + 0x1) + '\x20:\x20Submitting..'), await _0x4886bd['$eval']('#RegisterForm', _0x211dd1 => _0x211dd1['submit']()), await _0x576d66(0x1f40), console['log'](_0x39360f() + '\x20[' + _0x5e5301['name'] + ']\x20Task\x20' + (_0x24c904 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x4886bd['solveRecaptchas'](), await _0x4886bd['click']('.shopify-challenge__button.btn');
            async function _0x348a7a() {
                for (var _0x5db394 = 0x0; _0x5db394 < 0x4; _0x5db394++) {
                    try {
                        console['log']('try'), await _0x4886bd['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x39360f() + '\x20[' + _0x5e5301['name'] + ']\x20Task\x20' + (_0x24c904 + 0x1) + '\x20:\x20' + _0x24b3c9['red']('Catpcha\x20failed,\x20retrying..')), await _0x4886bd['solveRecaptchas'](), await _0x4886bd['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x348a7a(), console['log'](_0x39360f() + '\x20[' + _0x5e5301['name'] + ']\x20Task\x20' + (_0x24c904 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x576d66(0x1f4);
            try {
                await _0x4886bd['waitForSelector']('.featured-title'), await _0x576d66(0x1f4), console['log'](_0x24b3c9['green'](_0x39360f() + '\x20[' + _0x5e5301['name'] + ']\x20Task\x20' + (_0x24c904 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x24c904]['Email'] + '\x20Generated!')), _0x144cbc['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x24c904]['Email'] + ',' + bouncewear[_0x24c904]['Password']), console['log'](_0x24b3c9['yellow'](_0x39360f() + '\x20[' + _0x5e5301['name'] + ']\x20Task\x20' + (_0x24c904 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x24c904]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x555f2a) {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x24c904 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x555f2a));
            }
        } catch (_0x255cb1) {
            console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x24c904 + 0x1) + '\x20:\x20' + _0x255cb1));
        } finally {
            _0x418a40 && _0x418a40['close'](), console['log']('Waiting\x20for\x20' + _0x14bd83['delay'] + '\x20ms'), await _0x576d66(_0x14bd83['delay']);
        }
    }
}
async function _0x4a94d4(_0x2c61af, _0x18fe80, _0x55032d, _0x1eba15) {
    _0x8dd97f['use'](_0x163592()), _0x8dd97f['use'](_0x2c9766({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x14bd83['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x28ace4 = 0x0; _0x28ace4 < _0x55032d['length']; _0x28ace4++) {
        _0x544b3c(_0x18fe80['name'] + '\x20Task\x20' + (_0x28ace4 + 0x1) + '\x20/\x20' + _0x55032d['length'] + '\x20||\x20File:\x20' + _0x3dc76a + '\x20Proxies:\x20' + _0x39cf16), await _0x333f7f(_0x55032d, _0x28ace4);
        if (_0x55032d[_0x28ace4]['Email'] == '' || _0x55032d[_0x28ace4]['Password'] == '' || _0x55032d[_0x28ace4]['Password'] == undefined || _0x55032d[_0x28ace4]['FirstName'] == '' || _0x55032d[_0x28ace4]['LastName'] == '') {
            console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x28ace4 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x14bd83['useRandomProxy'] = ![])
            var _0x114f6f = _0x1eba15[_0x28ace4]['split'](':');
        else
            var _0x41396b = Math['round'](Math['random']() * (_0x1eba15['length'] - 0x1)), _0x114f6f = _0x1eba15[_0x41396b]['split'](':');
        const _0x10c8d6 = await _0x8dd97f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x114f6f[0x0] + ':' + _0x114f6f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x10b14e = await _0x10c8d6['newPage']();
            await _0x10b14e['authenticate']({
                'username': '' + _0x114f6f[0x2],
                'password': '' + _0x114f6f[0x3]
            }), console['log'](_0x39360f() + '\x20[' + _0x18fe80['name'] + ']\x20Task\x20' + (_0x28ace4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x10b14e['setRequestInterception'](!![]), _0x10b14e['on']('request', _0x31c780 => {
                _0x31c780['resourceType']() === 'image' || _0x31c780['resourceType']() === 'font' || _0x31c780['resourceType']() === 'media' ? _0x31c780['abort']() : _0x31c780['continue']();
            }), await _0x10b14e['goto'](_0x2c61af), await _0x576d66(0xbb8), await _0x10b14e['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x39360f() + '\x20[' + _0x18fe80['name'] + ']\x20Task\x20' + (_0x28ace4 + 0x1) + '\x20:\x20Filling\x20information'), await _0x10b14e['type']('#RegisterForm-FirstName', '' + _0x55032d[_0x28ace4]['FirstName']), await _0x576d66(0x226), await _0x10b14e['type']('#RegisterForm-LastName', '' + _0x55032d[_0x28ace4]['LastName']), await _0x576d66(0x226), await _0x10b14e['type']('#RegisterForm-email', '' + _0x55032d[_0x28ace4]['Email']), await _0x576d66(0x226), await _0x10b14e['type']('#RegisterForm-password', '' + _0x55032d[_0x28ace4]['Password']), await _0x576d66(0x226), console['log'](_0x39360f() + '\x20[' + _0x18fe80['name'] + ']\x20Task\x20' + (_0x28ace4 + 0x1) + '\x20:\x20Submitting..'), await _0x10b14e['$eval']('#RegisterForm', _0x39c6e5 => _0x39c6e5['submit']()), await _0x576d66(0x1f40);
            try {
                await _0x10b14e['waitForSelector']('.home-page-grid__collection'), await _0x576d66(0x1f4), console['log'](_0x24b3c9['green'](_0x39360f() + '\x20[' + _0x18fe80['name'] + ']\x20Task\x20' + (_0x28ace4 + 0x1) + '\x20:\x20Account\x20' + _0x55032d[_0x28ace4]['Email'] + '\x20Generated!')), _0x144cbc['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x55032d[_0x28ace4]['Email'] + ',' + _0x55032d[_0x28ace4]['Password']), console['log'](_0x24b3c9['yellow'](_0x39360f() + '\x20[' + _0x18fe80['name'] + ']\x20Task\x20' + (_0x28ace4 + 0x1) + '\x20:\x20Account\x20' + _0x55032d[_0x28ace4]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
            } catch (_0x4768a2) {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x28ace4 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4768a2));
            }
        } catch (_0x509152) {
            console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x28ace4 + 0x1) + '\x20:\x20' + _0x509152));
        } finally {
            _0x10c8d6 && _0x10c8d6['close'](), console['log']('Waiting\x20for\x20' + _0x14bd83['delay'] + '\x20ms'), await _0x576d66(_0x14bd83['delay']);
        }
    }
}
async function _0x255dc9(_0xd38b07, _0x216415, _0x386aa1, _0x313f46) {
    _0x8dd97f['use'](_0x163592()), _0x8dd97f['use'](_0x2c9766({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x14bd83['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3eecfe = 0x0; _0x3eecfe < _0x386aa1['length']; _0x3eecfe++) {
        var _0x5255d4 = '', _0x41b659 = 0x0;
        _0x544b3c(_0x216415['name'] + '\x20Task\x20' + (_0x3eecfe + 0x1) + '\x20/\x20' + _0x386aa1['length'] + '\x20||\x20File:\x20' + _0x3dc76a + '\x20Proxies:\x20' + _0x39cf16), await _0x333f7f(_0x386aa1, _0x3eecfe);
        if (_0x386aa1[_0x3eecfe]['Email'] == '' || _0x386aa1[_0x3eecfe]['Password'] == '' || _0x386aa1[_0x3eecfe]['FirstName'] == '' || _0x386aa1[_0x3eecfe]['LastName'] == '') {
            console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x3eecfe + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x14bd83['useRandomProxy'] = ![])
            var _0x1e1da9 = _0x313f46[_0x3eecfe]['split'](':');
        else
            var _0x2a40b4 = Math['round'](Math['random']() * (_0x313f46['length'] - 0x1)), _0x1e1da9 = _0x313f46[_0x2a40b4]['split'](':');
        const _0x26c289 = await _0x8dd97f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1e1da9[0x0] + ':' + _0x1e1da9[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2c92cf = await _0x26c289['newPage']();
            await _0x2c92cf['authenticate']({
                'username': '' + _0x1e1da9[0x2],
                'password': '' + _0x1e1da9[0x3]
            }), console['log'](_0x39360f() + '\x20[' + _0x216415['name'] + ']\x20Task\x20' + (_0x3eecfe + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2c92cf['setRequestInterception'](!![]), _0x2c92cf['on']('request', _0x2191e1 => {
                _0x2191e1['resourceType']() === 'image' || _0x2191e1['resourceType']() === 'font' || _0x2191e1['resourceType']() === 'media' ? _0x2191e1['abort']() : _0x2191e1['continue']();
            }), await _0x2c92cf['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x2c92cf['waitForSelector']('#CustomerEmail'), console['log'](_0x39360f() + '\x20[' + _0x216415['name'] + ']\x20Task\x20' + (_0x3eecfe + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2c92cf['type']('#CustomerEmail', '' + _0x386aa1[_0x3eecfe]['Email']), await _0x576d66(0x12c), await _0x2c92cf['type']('#CustomerPassword', '' + _0x386aa1[_0x3eecfe]['Password']), await _0x576d66(0x226), await _0x2c92cf['$eval']('#customer_login', _0x39ac66 => _0x39ac66['submit']());
            try {
                await _0x2c92cf['waitForSelector']('#orders'), await _0x576d66(0x4b0);
            } catch {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x216415['name'] + ']\x20Task\x20' + (_0x3eecfe + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x2c92cf['goto']('' + _0x386aa1[_0x3eecfe]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x576d66(0xbb8), console['log'](_0x39360f() + '\x20[' + _0x216415['name'] + ']\x20Task\x20' + (_0x3eecfe + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x2c92cf['waitForSelector']('#email');
            } catch {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x216415['name'] + ']\x20Task\x20' + (_0x3eecfe + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x2c92cf['type']('#email', '' + _0x386aa1[_0x3eecfe]['Email']), await _0x576d66(0x384), await _0x2c92cf['type']('#first_name', '' + _0x386aa1[_0x3eecfe]['FirstName']), await _0x576d66(0x514), await _0x2c92cf['type']('#last_name', '' + _0x386aa1[_0x3eecfe]['LastName']), await _0x576d66(0x514), await _0x2c92cf['type']('#street_address', _0x386aa1[_0x3eecfe]['Address1'] + '\x20' + _0x386aa1[_0x3eecfe]['HouseNumber'] + '\x20' + _0x386aa1[_0x3eecfe]['Address2']), await _0x576d66(0x2bc);
            _0x386aa1[_0x3eecfe]['Postcode'] == undefined && (_0x386aa1[_0x3eecfe]['Postcode'] = _0x386aa1[_0x3eecfe]['Zip']);
            await _0x2c92cf['type']('#zip_code', '' + _0x386aa1[_0x3eecfe]['Postcode']), await _0x576d66(0x320), await _0x2c92cf['type']('#city', '' + _0x386aa1[_0x3eecfe]['City']), await _0x576d66(0x320), await _0x2c92cf['type']('#bday', '' + _0x386aa1[_0x3eecfe]['Bday']), await _0x576d66(0x320), await _0x2c92cf['type']('#instagram', '' + _0x386aa1[_0x3eecfe]['Follower']), await _0x576d66(0x352);
            if (_0x386aa1[_0x3eecfe]['Size'] == 'RANDOM') {
                const _0x347a5e = await _0x2c92cf['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x25909a => {
                    return _0x25909a['map'](_0x4b482a => _0x4b482a['textContent']);
                });
                var _0x46f80b = Math['round'](Math['random']() * (_0x347a5e['length'] - 0x1));
                console['log'](_0x39360f() + '\x20[' + _0x216415['name'] + ']\x20Task\x20' + (_0x3eecfe + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x347a5e[_0x46f80b]), await _0x2c92cf['click']('label[data-eu-size=\x22' + _0x347a5e[_0x46f80b] + '\x22]');
            } else {
                console['log'](_0x39360f() + '\x20[' + _0x216415['name'] + ']\x20Task\x20' + (_0x3eecfe + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x386aa1[_0x3eecfe]['Size']);
                try {
                    await _0x2c92cf['click']('label[data-eu-size=\x22' + _0x386aa1[_0x3eecfe]['Size'] + '\x22]');
                } catch {
                    await _0x2c92cf['click']('label[data-eu-size=\x22' + _0x386aa1[_0x3eecfe]['Size'] + '.0\x22]');
                }
            }
            await _0x576d66(0xbb8), await _0x2c92cf['$$eval']('.raffle__checkbox-label', _0x41f9ec => _0x41f9ec['forEach'](_0x21235f => _0x21235f['click']())), await _0x576d66(0x7d0), console['log'](_0x39360f() + '\x20[' + _0x216415['name'] + ']\x20Task\x20' + (_0x3eecfe + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x2c92cf['click']('#raffle__form-submit'), await _0x576d66(0x1388);
            try {
                await _0x2c92cf['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x24b3c9['green'](_0x39360f() + '\x20[' + _0x216415['name'] + ']\x20Task\x20' + (_0x3eecfe + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x3a624c) {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x3eecfe + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x3a624c));
            }
        } catch (_0x2afeb9) {
            console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x3eecfe + 0x1) + '\x20:\x20' + _0x2afeb9)), _0x5255d4 = 'yes';
        } finally {
            _0x26c289 && _0x26c289['close']();
            if (_0x5255d4 == 'yes' && _0x41b659 != 0x5) {
                console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x216415['name'] + ']\x20Task\x20' + (_0x3eecfe + 0x1) + '\x20:\x20Retrying')), _0x3eecfe = _0x3eecfe - 0x1, _0x41b659 = _0x41b659 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x14bd83['delay'] + '\x20ms'), await _0x576d66(_0x14bd83['delay']);
        }
    }
}
async function _0xe03f97(_0x2d96c9, _0x5e7e68, _0x1b8e7c) {
    var _0x550d19 = ![], _0x553ec9 = ![];
    if (_0x14bd83['captchaKey'] == '' || _0x14bd83['captchaKey'] == undefined)
        return console['log'](_0x24b3c9['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x8dd97f['use'](_0x163592()), _0x8dd97f['use'](_0x2c9766({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x14bd83['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x54bab7 = 0x0; _0x54bab7 < _0x5e7e68['length']; _0x54bab7++) {
        var _0x41a0ee = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x5e7e68[_0x54bab7]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5e7e68[_0x54bab7]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x2d42b1
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x14bd83['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x42e8b2
                }
            ]
        }];
        const _0x57cba4 = { 'embeds': _0x41a0ee };
        _0x544b3c(_0x2d96c9['name'] + '\x20Task\x20' + (_0x54bab7 + 0x1) + '\x20/\x20' + _0x5e7e68['length'] + '\x20||\x20File:\x20' + _0x3dc76a + '\x20Proxies:\x20' + _0x39cf16), await _0x333f7f(_0x5e7e68, _0x54bab7);
        if (_0x5e7e68[_0x54bab7]['Email'] == '' || _0x5e7e68[_0x54bab7]['Url'] == '' || _0x5e7e68[_0x54bab7]['FirstName'] == '' || _0x5e7e68[_0x54bab7]['LastName'] == '') {
            console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x54bab7 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x14bd83['useRandomProxy'] = ![])
            var _0x694d1f = _0x1b8e7c[_0x54bab7]['split'](':');
        else
            var _0x356749 = Math['round'](Math['random']() * (_0x1b8e7c['length'] - 0x1)), _0x694d1f = _0x1b8e7c[_0x356749]['split'](':');
        const _0x572d85 = await _0x8dd97f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x694d1f[0x0] + ':' + _0x694d1f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xc8406a = await _0x572d85['newPage']();
            await _0xc8406a['authenticate']({
                'username': '' + _0x694d1f[0x2],
                'password': '' + _0x694d1f[0x3]
            }), console['log'](_0x39360f() + '\x20[' + _0x2d96c9['name'] + ']\x20Task\x20' + (_0x54bab7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xc8406a['setRequestInterception'](!![]), _0xc8406a['on']('request', _0x19fbf4 => {
                _0x19fbf4['resourceType']() === 'image' || _0x19fbf4['resourceType']() === 'font' || _0x19fbf4['resourceType']() === 'media' ? _0x19fbf4['abort']() : _0x19fbf4['continue']();
            }), await _0xc8406a['goto']('' + _0x5e7e68[_0x54bab7]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](_0x39360f() + '\x20[' + _0x2d96c9['name'] + ']\x20Task\x20' + (_0x54bab7 + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0xc8406a['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0xc8406a['type']('#comp_firstname', '' + _0x5e7e68[_0x54bab7]['FirstName']), await _0xc8406a['waitForSelector']('#comp_lastname'), await _0xc8406a['type']('#comp_lastname', '' + _0x5e7e68[_0x54bab7]['LastName']), await _0xc8406a['waitForSelector']('#comp_email'), await _0xc8406a['type']('#comp_email', '' + _0x5e7e68[_0x54bab7]['Email']), await _0xc8406a['waitForSelector']('#comp_paypalemail'), await _0xc8406a['type']('#comp_paypalemail', '' + _0x5e7e68[_0x54bab7]['Email']), await _0xc8406a['waitForSelector']('#comp_mobile_end'), await _0xc8406a['type']('#comp_mobile_end', '' + _0x5e7e68[_0x54bab7]['Phone']), await _0xc8406a['waitForSelector']('#comp_dob'), await _0xc8406a['type']('#comp_dob', '08/09/1992'), console['log'](_0x39360f() + '\x20[' + _0x2d96c9['name'] + ']\x20Task\x20' + (_0x54bab7 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x5e7e68[_0x54bab7]['Size'] == 'RANDOM') {
                const _0x216de9 = await _0xc8406a['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5996cc => {
                    return _0x5996cc['map'](_0x56af70 => _0x56af70['value']);
                });
                var _0x4ce6ae = Math['round'](Math['random']() * (_0x216de9['length'] - 0x2));
                await _0xc8406a['select']('#shoesize', _0x216de9[_0x4ce6ae + 0x1]), await _0x576d66(0x3e8);
            } else {
                const _0x434561 = await _0xc8406a['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1e3533 => {
                    return _0x1e3533['map'](_0xebede9 => _0xebede9['innerText']);
                }), _0x2a97fa = await _0xc8406a['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x14d6de => {
                    return _0x14d6de['map'](_0x160288 => _0x160288['value']);
                });
                var _0x2c80a8 = _0x5e7e68[_0x54bab7]['Size'];
                for (var _0x5acd6b = 0x1; _0x5acd6b < _0x2a97fa['length']; _0x5acd6b++) {
                    var _0x1c321a = _0x434561[_0x5acd6b]['split']('\x20')[0x0];
                    if (_0x1c321a == _0x2c80a8) {
                        await _0xc8406a['select']('#shoesize', _0x2a97fa[_0x5acd6b]);
                        break;
                    } else {
                        if (_0x5acd6b + 0x1 == _0x2a97fa['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0xc8406a['waitForSelector']('#comp_address1'), await _0xc8406a['type']('#comp_address1', _0x5e7e68[_0x54bab7]['Address1'] + '\x20' + _0x5e7e68[_0x54bab7]['HouseNumber']), await _0xc8406a['waitForSelector']('#comp_address2'), await _0xc8406a['type']('#comp_address2', '' + _0x5e7e68[_0x54bab7]['Address2']), await _0xc8406a['waitForSelector']('#comp_address2'), await _0xc8406a['type']('#comp_address3', '' + _0x5e7e68[_0x54bab7]['City']), await _0xc8406a['waitForSelector']('#comp_postcode'), await _0xc8406a['type']('#comp_postcode', '' + _0x5e7e68[_0x54bab7]['Zip']), console['log'](_0x39360f() + '\x20[' + _0x2d96c9['name'] + ']\x20Task\x20' + (_0x54bab7 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x576d66(0x4b0), await _0xc8406a['click']('label#emailhold'), await _0x576d66(0x5dc), await _0xc8406a['click']('#preauth_tandc_email\x20>\x20label'), await _0x576d66(0x5dc), await _0xc8406a['click']('#submit'), await _0xc8406a['waitForSelector']('#paymentWrap'), console['log'](_0x39360f() + '\x20[' + _0x2d96c9['name'] + ']\x20Task\x20' + (_0x54bab7 + 0x1) + '\x20:\x20' + _0x24b3c9['blue']('Awaiting\x20Paypal\x20Payment')), _0x572d85['on']('targetcreated', async _0x1d0dbe => {
                if (_0x1d0dbe['type']() === 'page') {
                    const _0x43d595 = await _0x1d0dbe['page']();
                    async function _0x2c2e0f() {
                        try {
                            await _0xc8406a['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x553ec9 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0xf982d7() {
                        try {
                            await _0xc8406a['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x550d19 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0xf982d7(), _0x2c2e0f(), await _0x576d66(0x493e0);
                }
            });
            async function _0x2590d1() {
                for (let _0x2917c4 = 0x0; _0x2917c4 < 0x12c; _0x2917c4++) {
                    if (_0x550d19 == !![]) {
                        console['log'](_0x24b3c9['green'](_0x39360f() + '\x20[' + _0x2d96c9['name'] + ']\x20Task\x20' + (_0x54bab7 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x1c0167(_0xa3dd4b, _0x57cba4);
                        return;
                    } else {
                        if (_0x553ec9)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x576d66(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x576d66(0xbb8), await _0xc8406a['click']('.zoid-outlet'), await _0x576d66(0x7d0), await _0x2590d1();
        } catch (_0x36cac8) {
            console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x2d96c9['name'] + ']\x20Task\x20' + (_0x54bab7 + 0x1) + '\x20:\x20' + _0x36cac8)), _0x41a0ee[0x0]['title'] = 'Failed\x20entry', _0x41a0ee[0x0]['description'] = _0x2d96c9['name'] + ':\x20' + _0x36cac8, await _0x1c0167(_0x4516d2, _0x57cba4);
        } finally {
            _0x572d85 && _0x572d85['close'](), console['log']('Waiting\x20for\x20' + _0x14bd83['delay'] + '\x20ms'), await _0x576d66(_0x14bd83['delay']);
        }
    }
}
async function _0x1d4f76(_0x438d2b, _0x109ecc, _0x2915ad, _0x44073a) {
    var _0x1135af = {}, _0x3b7f48 = [], _0x4cf05a = {}, _0x1e010a = [
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
    !_0x44073a && (_0x44073a = {});
    if (_0x109ecc != 'ver') {
        _0x544b3c(_0x2915ad['name'] + '\x20Task\x20' + (_0x438d2b + 0x1) + '\x20/\x20' + _0x44073a['length'] + '\x20||\x20File:\x20' + _0x3dc76a + '\x20Proxies:\x20' + _0x39cf16), await _0x333f7f(_0x44073a, _0x438d2b), _0x3b7f48 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2d42b1
                },
                {
                    'name': 'Size',
                    'value': '' + _0x44073a[_0x438d2b]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x14bd83['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x42e8b2
                }
            ]
        }], _0x4cf05a = { 'embeds': _0x3b7f48 }, _0x1135af = _0x2915ad['data'];
        _0x109ecc == 'exp' ? _0x1135af['data']['attributes']['email'] = '' + _0x44073a[_0x438d2b]['FirstName'] + _0x44073a[_0x438d2b]['LastName'] + _0x14bd83['catchall'] : _0x1135af['data']['attributes']['email'] = '' + _0x44073a[_0x438d2b]['Email'];
        if (_0x44073a[_0x438d2b]['Size'] == 'RANDOM') {
        }
        _0x1135af['data']['attributes']['properties']['$first_name'] = '' + _0x44073a[_0x438d2b]['FirstName'], _0x1135af['data']['attributes']['properties']['$last_name'] = '' + _0x44073a[_0x438d2b]['LastName'], _0x1135af['data']['attributes']['properties']['$address1'] = _0x44073a[_0x438d2b]['Address1'] + '\x20' + _0x44073a[_0x438d2b]['Address2'] + '\x20' + _0x44073a[_0x438d2b]['HouseNumber'], _0x1135af['data']['attributes']['properties']['$zip'] = '' + _0x44073a[_0x438d2b]['Zip'], _0x1135af['data']['attributes']['properties']['$city'] = '' + _0x44073a[_0x438d2b]['City'], _0x1135af['data']['attributes']['properties']['$country'] = '' + _0x44073a[_0x438d2b]['Country'], _0x1135af['data']['attributes']['properties']['Size'] = '' + _0x44073a[_0x438d2b]['Size'], _0x1135af['data']['attributes']['properties']['$phone_number'] = '' + _0x44073a[_0x438d2b]['Phone'], _0x1135af['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x44073a[_0x438d2b]['Follower'];
    }
    if (_0x14bd83['useRandomProxy'] = ![])
        var _0x3fee76 = _0x275eb2()[_0x438d2b]['split'](':');
    else
        var _0xac7c67 = Math['round'](Math['random']() * (_0x275eb2()['length'] - 0x1)), _0x3fee76 = _0x275eb2()[_0xac7c67]['split'](':');
    var _0x137dda = {
        'jar': _0x1487a2,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x2915ad['url'],
        'headers': _0x2915ad['headers'],
        'body': JSON['stringify'](_0x1135af),
        'proxy': 'http://' + _0x3fee76[0x2] + ':' + _0x3fee76[0x3] + '@' + _0x3fee76[0x0] + ':' + _0x3fee76[0x1]
    };
    return _0x109ecc != 'ver' && (_0x137dda['url'] = _0x2915ad['url'], _0x137dda['headers'] = _0x2915ad['headers']), _0x109ecc == 'ver' && (_0x137dda['method'] = 'GET'), new Promise(function (_0x183004, _0xfad13b) {
        callback = async (_0xf7d9a3, _0x1e48fb, _0x23dab7) => {
            !_0xf7d9a3 && _0x1e48fb['statusCode'] == 0xca || !_0xf7d9a3 && _0x1e48fb['statusCode'] == 0xc8 ? (_0x109ecc != 'ver' && await _0x1c0167(_0xa3dd4b, _0x4cf05a), _0x183004(console['log'](_0x24b3c9['green'](_0x39360f() + '\x20[' + _0x2915ad['name'] + ']\x20Task\x20' + (_0x438d2b + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x109ecc != 'ver' && (_0x3b7f48[0x0]['title'] = 'Failed\x20entry', _0x3b7f48[0x0]['description'] = '' + _0xf7d9a3, await _0x1c0167(_0x4516d2, _0x4cf05a)), _0xfad13b(console['log'](_0x39360f() + '\x20[' + _0x2915ad['name'] + ']\x20Task\x20' + (_0x438d2b + 0x1) + ':\x20' + _0xf7d9a3)));
        };
        try {
            _0x109ecc != 'ver' && console['log'](_0x39360f() + '\x20[' + _0x2915ad['name'] + ']\x20Task\x20' + (_0x438d2b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1135af['data']['attributes']['email']), _0x202863(_0x137dda, callback);
        } catch (_0xbc19bd) {
            console['log'](_0x39360f() + '\x20Task\x20' + (_0x438d2b + 0x1) + ':\x20' + _0xbc19bd);
        }
    });
}
;
async function _0x1727dc() {
    await _0x1ce8b5(), console['clear']();
    if (_0x42e8b2 != 'devkey') {
        let _0x858db6 = await _0x3a53a3['autoUpdate']();
        if (_0x858db6 === 'yes')
            return _0x15cee1('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x446f6a == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x576d66(0x2710);
        ;
    }
    await _0x506be2(_0x446f6a);
    if (_0x22d66f === ![])
        return console['log']('Closing\x20Browser'), await _0x576d66(0xbb8);
    else
        try {
            async function _0x14c291() {
                _0x544b3c('JRaffles\x20' + _0x42e8b2), console['clear'](), console['log']('Welcome\x20to\x20' + _0x24b3c9['cyan']('JRaffles();') + '\x20' + _0x42e8b2), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x8ec9f2 = 0x0; _0x8ec9f2 < _0x246c5a['length']; _0x8ec9f2++) {
                    if (_0x246c5a[_0x8ec9f2]['name'] === 'Reload\x20Settings' || _0x246c5a[_0x8ec9f2]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x8ec9f2 + ')\x20[' + _0x246c5a[_0x8ec9f2]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x246c5a['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x246c5a['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x359497();
                if (_0x246c5a[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x1d1ce1(_0x246c5a[taskModule]['modules']);
                    var _0x2f36b2 = _0x246c5a[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x53a82d = await _0x2d5d8d();
                    await _0x3d6a1d(_0x53a82d), await _0x152ce4();
                    var _0x14ba44 = await _0x5c7133();
                    return await afewFunction(_0x528d69[_0x1a9ef8], 'nor', _0x2f36b2, _0x14ba44, _0x53a82d), _0x14c291();
                } else {
                    if (_0x246c5a[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x1d1ce1(_0x246c5a[taskModule]['modules']);
                        var _0x2f36b2 = _0x246c5a[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x53a82d = await _0x2d5d8d(), _0x2c1edf = await _0x5c7133();
                            console['log']('Starting\x20' + _0x2c1edf['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x82ba1c = 0x0; _0x82ba1c < _0x2c1edf['length']; _0x82ba1c++) {
                                console['log'](_0x39360f() + '\x20[' + _0x2f36b2['name'] + ']\x20Task\x20' + (_0x82ba1c + 0x1) + ':\x20Getting\x20Session'), await _0x9c281(_0x82ba1c, 'nor', _0x2f36b2, _0x2c1edf, _0x53a82d), console['log'](_0x39360f() + '\x20[' + _0x2f36b2['name'] + ']\x20Sleeping\x20for\x20' + _0x14bd83['MahaDelay'] + '\x20ms'), await _0x576d66(_0x14bd83['MahaDelay']);
                            }
                            ;
                            return _0x14c291();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x53a82d = await _0x2d5d8d();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x41bc1c(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x82ba1c = 0x0; _0x82ba1c < links['length']; _0x82ba1c++) {
                                    _0x2f36b2['url'] = links[_0x82ba1c], console['log'](_0x39360f() + '\x20[' + _0x2f36b2['name'] + ']\x20Task\x20' + (_0x82ba1c + 0x1) + ':\x20Getting\x20Session'), await _0x9c281(_0x82ba1c, 'ver', _0x2f36b2, _0x2c1edf, _0x53a82d), console['log'](_0x39360f() + '\x20[' + _0x2f36b2['name'] + ']\x20Sleeping\x20for\x20' + _0x14bd83['verificationDelay'] + '\x20ms'), await _0x576d66(_0x14bd83['verificationDelay']);
                                }
                                ;
                                return _0x14c291();
                            }
                        }
                    } else {
                        if (_0x246c5a[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x53a82d = await _0x2d5d8d(), _0x2684b5 = await _0x5c7133();
                            return await _0xd944c9(_0x2684b5, _0x53a82d), await _0x576d66(0x1388), _0x14c291();
                        } else {
                            if (_0x246c5a[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x1d1ce1(_0x246c5a[taskModule]['modules']);
                                var _0x2f36b2 = _0x246c5a[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x2ddcca = await _0x5c7133();
                                    console['log']('Starting\x20' + _0x24b3c9['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x82ba1c = 0x0; _0x82ba1c < _0x2ddcca['length']; _0x82ba1c++) {
                                        console['log'](_0x39360f() + '\x20[' + _0x2f36b2['name'] + ']\x20Task\x20' + (_0x82ba1c + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x1d4f76(_0x82ba1c, 'nor', _0x2f36b2, _0x2ddcca);
                                        } catch {
                                            console['log'](_0x24b3c9['red'](_0x39360f() + '\x20[' + _0x2f36b2['name'] + ']\x20Task\x20' + (_0x82ba1c + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](_0x39360f() + '\x20[' + _0x2f36b2['name'] + ']\x20Sleeping\x20for\x20' + _0x14bd83['delay'] + '\x20ms'), await _0x576d66(_0x14bd83['delay']);
                                    }
                                    return _0x14c291();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x41bc1c(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x82ba1c = 0x0; _0x82ba1c < links['length']; _0x82ba1c++) {
                                            try {
                                                _0x2f36b2['url'] = links[_0x82ba1c], console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Task\x20' + (_0x82ba1c + 0x1) + ':\x20Getting\x20Session'), await _0x1d4f76(_0x82ba1c, 'ver', _0x2f36b2), console['log'](_0x39360f() + '\x20[' + _0x246c5a[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x14bd83['verificationDelay'] + '\x20ms'), await _0x576d66(_0x14bd83['verificationDelay']);
                                            } catch (_0x405e04) {
                                                console['log'](_0x405e04);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x14c291();
                                    }
                                }
                                ;
                            } else {
                                if (_0x246c5a[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x1d1ce1(_0x246c5a[taskModule]['modules']);
                                    var _0x2f36b2 = _0x246c5a[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x66fc41('https://bouncewear.com/nl/account/register', _0x2f36b2);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x246c5a[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x1d1ce1(_0x246c5a[taskModule]['modules']);
                                        var _0x2f36b2 = _0x246c5a[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x53a82d = await _0x2d5d8d(), _0x476151 = await _0x5c7133();
                                            return await _0x4a94d4('https://patta.nl/account/register', _0x2f36b2, _0x476151, _0x53a82d), _0x14c291();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x53a82d = await _0x2d5d8d(), _0x476151 = await _0x5c7133();
                                                return await _0x255dc9('', _0x2f36b2, _0x476151, _0x53a82d), _0x14c291();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x246c5a[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await _0x1d1ce1(_0x246c5a[taskModule]['modules']);
                                            var _0x2f36b2 = _0x246c5a[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x53a82d = await _0x2d5d8d(), _0x5018fb = await _0x5c7133();
                                                return await _0x4d7768('https://www.kickz.com/nl/login/', _0x2f36b2, _0x5018fb, _0x53a82d), _0x14c291();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x53a82d = await _0x2d5d8d(), _0x5018fb = await _0x5c7133();
                                                    return await _0x112a76(_0x2f36b2, _0x5018fb, _0x53a82d), _0x14c291();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x246c5a[taskModule]['name'] == 'JD') {
                                                taskFunction = await _0x1d1ce1(_0x246c5a[taskModule]['modules']);
                                                var _0x2f36b2 = _0x246c5a[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x53a82d = await _0x2d5d8d(), _0x41faf8 = await _0x5c7133();
                                                    return await _0xe03f97(_0x2f36b2, _0x41faf8, _0x53a82d), _0x14c291();
                                                }
                                            } else {
                                                if (_0x246c5a[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x1cb637 = 0x0;
                                                    for (const _0x3004ae in _0x14bd83) {
                                                        console['log']('(' + _0x1cb637 + ')\x20' + _0x3004ae + '\x20:\x20' + _0x14bd83[_0x3004ae]), _0x1cb637++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x1cb637 + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x4a0f9f = await _0x1e8f52();
                                                    if (_0x4a0f9f == _0x1cb637)
                                                        return _0x14c291();
                                                    console['clear'];
                                                    var _0xd8bb4f = 0x0;
                                                    for (var _0x5eafc9 in _0x14bd83) {
                                                        if (_0x4a0f9f == _0xd8bb4f) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x5eafc9 + '\x20:'), _0x14bd83[_0x5eafc9] = await _0x9cd970(), _0x144cbc['writeFileSync']('../settings.json', JSON['stringify'](_0x14bd83));
                                                            break;
                                                        } else
                                                            _0xd8bb4f++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await _0x576d66(0xbb8), _0x14c291();
                                                } else {
                                                    if (_0x246c5a[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await _0x1ce8b5(), _0x14c291();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            _0x246c5a[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x3b7ecf = await _0x1f66c8();
                                                            _0x3b7ecf == 'ModuleVoorDeBoys' ? (await _0x3d6a1d(), await _0x152ce4(), await afewFunction(_0x528d69[_0x1a9ef8], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x576d66(0xbb8));
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
            await _0x14c291();
        } catch (_0x3e4804) {
            return console['log'](_0x3e4804), await _0x576d66(0x3a98);
        }
}
;
_0x544b3c('JRaffles\x20' + _0x42e8b2), _0x1ce8b5(), _0x1727dc();