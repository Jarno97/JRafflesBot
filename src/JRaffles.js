var _0x199f1c = require('exe');
const { execFile: _0x4b3956 } = require('child_process'), _0x59faa5 = require('puppeteer-extra'), _0x4f16ed = require('puppeteer-extra-plugin-recaptcha'), _0x2852d9 = require('puppeteer-extra-plugin-stealth'), _0xa19cd2 = require('chalk'), _0x470a51 = require('node-bash-title'), _0x4eda22 = require('fs'), _0x496cc3 = require('axios'), _0x5b1b0d = require('papaparse');
var _0x382a52 = require('random-name');
const _0x2743eb = require('request');
var _0x17112b = require('prompt');
const _0x13c002 = _0x2743eb['jar']();
var _0x2aae14 = {};
const _0x255413 = 'https://discord.com/api/webhooks/1044989608708030595/HUZ2q06RoQQ24n_rWWEsL6AgM5yXEeUi2SO9VyOLuQgGBeHIlXpPl9Xr5jYMLXwJKwPS', _0x30a729 = 'https://discord.com/api/webhooks/1045001962262900766/ZXWdz3BSjNO08alABR8ERNBgR2SNcydTW-9XxsFuphHYfwHaojLBu3hkw1Ygi3MxOZdz';
var _0x4769d6;
const _0x17ba17 = JSON['parse'](_0x4eda22['readFileSync']('../package.json', 'utf-8')), _0x2e3ef4 = _0x17ba17['version'];
var _0x548231, _0x42503a, _0x5bf73b, _0x3c290, _0x4751b0, _0x5614c4, _0x4cb812;
const _0x188320 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0xb39e41 = ![];
const _0x5bd16b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x38ae4e = '0123456789';
var _0x3ac151 = _0x5bd16b['split']('');
const _0x2d0e36 = require('auto-git-update'), { PageEmittedEvents: _0x57e0e3 } = require('puppeteer'), { getRandomValues: _0xa1cdf9 } = require('crypto'), { resolve: _0x25a4b7 } = require('path'), _0x4212df = {
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
}, _0x5c2d44 = new _0x2d0e36(_0x4212df);
async function _0x5075b6() {
    _0x4751b0 = _0x4eda22['readdirSync']('../proxies'), _0x3c290 = _0x4eda22['readdirSync']('../tasks'), _0x2aae14 = JSON['parse'](_0x4eda22['readFileSync']('../settings.json', 'utf-8')), !_0x2aae14['delay'] && (_0x2aae14['delay'] = 0x2710, _0x4eda22['writeFileSync']('../settings.json', JSON['stringify'](_0x2aae14))), !_0x2aae14['captchaKey'] && (_0x2aae14['captchaKey'] = '', _0x4eda22['writeFileSync']('../settings.json', JSON['stringify'](_0x2aae14))), !_0x2aae14['useRandomProxy'] && (_0x2aae14['useRandomProxy'] = ![], _0x4eda22['writeFileSync']('../settings.json', JSON['stringify'](_0x2aae14))), !_0x2aae14['webhook'] && (_0x2aae14['webhook'] = '', _0x4eda22['writeFileSync']('../settings.json', JSON['stringify'](_0x2aae14))), _0x4769d6 = _0x2aae14['webhook'], _0x5614c4 = _0x2aae14['licenseKey'];
}
let _0x582af7, _0x12fea7 = [], _0x2ee1fe;
const _0x17c69e = _0x7e9a4a => new Promise(_0x5cc71c => setTimeout(_0x5cc71c, _0x7e9a4a));
function _0x5b24af(_0x2d6012, _0x3e0af0) {
    return Math['floor'](Math['random']() * (_0x3e0af0 - _0x2d6012 + 0x1) + _0x2d6012);
}
async function _0x2bc051(_0x4aa26c) {
    return _0x496cc3['get']('https://api.hyper.co/v4/licenses/' + _0x4aa26c, { 'headers': { 'Authorization': 'Bearer\x20' + _0x188320 } })['then'](_0x58ab77 => _0x58ab77['data'])['catch'](() => null);
}
;
async function _0x5ec992(_0x50b76a) {
    console['clear'](), console['log']('Checking\x20license\x20' + _0x5614c4 + '...'), await _0x17c69e(0x5dc);
    const _0x3f32b7 = await _0x2bc051(_0x50b76a);
    _0x4cb812 = JSON['stringify'](_0x3f32b7['user']['username']);
    if (!_0x3f32b7)
        return console['log']('License\x20not\x20found');
    if (!_0x3f32b7['user'])
        return console['log']('License\x20not\x20bound');
    return _0x3f32b7['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0xb39e41 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0xb39e41 = ![]);
}
async function _0x4a793f() {
    var _0x5057e3 = await _0x17112b['get']('Module');
    return console['clear'](), _0x5057e3['Module'];
}
;
async function _0x5c0b89() {
    var _0xb6bb5 = await _0x17112b['get']('Setting');
    return console['clear'](), _0xb6bb5['Setting'];
}
async function _0x2b63bf() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x2ab10d = 0x0; _0x2ab10d < _0x3c290['length']; _0x2ab10d++) {
        console['log']('\x20(' + _0x2ab10d + ')\x20' + _0x3c290[_0x2ab10d]);
    }
    console['log']('');
    var _0xc58377 = await _0x17112b['get']('Task'), _0x102e4c = _0x4eda22['readFileSync']('../tasks/' + _0x3c290[_0xc58377['Task']], 'utf-8');
    return _0x5bf73b = _0x5b1b0d['parse'](_0x102e4c, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0xa19cd2['blue'](_0x3c290[_0xc58377['Task']])), _0x548231 = _0x3c290[_0xc58377['Task']], _0x5bf73b;
}
async function _0xd64c67() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x2b1e9b = 0x0; _0x2b1e9b < _0x4751b0['length']; _0x2b1e9b++) {
        console['log']('\x20(' + _0x2b1e9b + ')\x20' + _0x4751b0[_0x2b1e9b]);
    }
    console['log']('');
    var _0x304ba9 = await _0x17112b['get']('Proxies'), _0x4e64df = _0x4eda22['readFileSync']('../proxies/' + _0x4751b0[_0x304ba9['Proxies']], 'utf-8')['split']('\x0a');
    let _0x500957 = _0x4e64df['map']((_0x37c7e0, _0x4fe750) => {
        sanatizeProxy = _0x37c7e0['replace']('\x0d', '');
        if (_0x4e64df[_0x4fe750 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x42503a = _0x4751b0[_0x304ba9['Proxies']], console['clear'](), _0x500957;
}
async function _0x55916b() {
    var _0x2db07f = await _0x17112b['get']('Value');
    return console['clear'](), _0x2db07f['Value'];
}
async function _0x118fd6(_0x7a235e) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x35b74a = 0x0; _0x35b74a < _0x7a235e['length']; _0x35b74a++) {
        console['log']('\x20(' + _0x35b74a + ')\x20[' + _0x7a235e[_0x35b74a]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x23f926 = await _0x17112b['get']('Module');
    return _0x23f926['Module'];
}
async function _0x300ad1() {
    var _0x16b1b4 = await _0x17112b['get']('Password');
    return console['clear'](), _0x16b1b4['Password'];
}
;
async function _0x5a828f() {
    var _0x505954 = await _0x17112b['get']('Links');
    return _0x505954['Links'];
}
;
async function _0x31de6a() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x1b697c = 0x0; _0x1b697c < _0x12fea7['length']; _0x1b697c++) {
        console['log']('\x20(' + _0x1b697c + ')\x20' + _0x12fea7[_0x1b697c]);
    }
    ;
    console['log']();
    let _0x5b6048 = await _0x17112b['get']('Product');
    console['clear'](), _0x2ee1fe = _0x5b6048['Product'];
    return;
}
;
function _0xc0ef5e() {
    var _0x1f82e1 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x1f82e1;
}
;
const _0x702da2 = [
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
async function _0x566b34(_0x26d410, _0x3fa6c5) {
    let _0x129d09 = { 'headers': { 'content-type': 'application/json' } };
    await _0x496cc3['post'](_0x26d410, _0x3fa6c5, _0x129d09);
}
;
async function _0x2091e8(_0x85ef5, _0x4de428) {
    var _0x3ea373 = _0x85ef5[_0x4de428]['Address1']['split'](''), _0x466e2d = _0x85ef5[_0x4de428]['Address2']['split'](''), _0x51099b = _0x85ef5[_0x4de428]['Email']['split']('@');
    for (var _0x5dbd8d = 0x0; _0x5dbd8d < _0x3ea373['length']; _0x5dbd8d++) {
        if (_0x3ea373[_0x5dbd8d] == 'X') {
            var _0x130f6b = Math['round'](Math['random']() * (_0x5bd16b['length'] - 0x1));
            _0x3ea373[_0x5dbd8d] = _0x3ac151[_0x130f6b];
        }
    }
    ;
    for (var _0x5dbd8d = 0x0; _0x5dbd8d < _0x466e2d['length']; _0x5dbd8d++) {
        if (_0x466e2d[_0x5dbd8d] == 'X') {
            var _0x130f6b = Math['round'](Math['random']() * (_0x5bd16b['length'] - 0x1));
            _0x466e2d[_0x5dbd8d] = _0x3ac151[_0x130f6b];
        }
    }
    ;
    _0x85ef5[_0x4de428]['FirstName'] == 'RANDOM' && (_0x85ef5[_0x4de428]['FirstName'] = _0x382a52['first']());
    _0x85ef5[_0x4de428]['LastName'] == 'RANDOM' && (_0x85ef5[_0x4de428]['LastName'] = _0x382a52['last']());
    _0x51099b[0x0] == 'RANDOM' ? _0x51099b[0x0] = '' + _0x382a52['first']() + _0x382a52['last']() + '@' : _0x51099b[0x0] = _0x51099b[0x0] + '@';
    _0x85ef5[_0x4de428]['Phone'] == 'RANDOM' && (_0x85ef5[_0x4de428]['Phone'] = _0x5b24af(0x3b9aca00, 0x2540be3ff));
    if (_0x85ef5[_0x4de428]['Follower'] == 'RANDOM') {
        var _0x156c58 = _0x5b24af(0x1, 0x270f);
        _0x85ef5[_0x4de428]['Follower'] = '' + _0x382a52['first']() + _0x382a52['last']() + _0x156c58;
    }
    _0x85ef5[_0x4de428]['Email'] = _0x51099b['join'](''), _0x85ef5[_0x4de428]['Address1'] = _0x3ea373['join'](''), _0x85ef5[_0x4de428]['Address2'] = _0x466e2d['join']('');
    return;
}
;
function _0x4ddc9e() {
    let _0xa0abee = proxyFile['split']('\x0a'), _0x3b5c62 = _0xa0abee['map']((_0x5bd0fd, _0x2c4124) => {
        sanatizeProxy = _0x5bd0fd['replace']('\x0d', '');
        if (_0xa0abee[_0x2c4124 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3b5c62;
}
;
async function _0x4604b4(_0x40cbce) {
    var _0x41ebd6 = _0x40cbce[0x1]['split'](':');
    const _0x50a04f = await _0x59faa5['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x41ebd6[0x0] + ':' + _0x41ebd6[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x3e487e = await _0x50a04f['newPage']();
        await _0x3e487e['authenticate']({
            'username': '' + _0x41ebd6[0x2],
            'password': '' + _0x41ebd6[0x3]
        }), console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x3e487e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3e487e['setRequestInterception'](!![]), _0x3e487e['on']('request', _0x53baca => {
            _0x53baca['resourceType']() === 'image' || _0x53baca['resourceType']() === 'font' || _0x53baca['resourceType']() === 'media' ? _0x53baca['abort']() : _0x53baca['continue']();
        }), await _0x3e487e['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x3e487e['waitForTimeout'](0xbb8), await _0x3e487e['waitForSelector']('.product-card');
        const _0x1b020e = await _0x3e487e['$$eval']('a.product-card', _0x27685c => {
            return _0x27685c['map'](_0x1daf73 => _0x1daf73['href']);
        });
        return _0x12fea7 = _0x1b020e;
    } catch (_0x53a1e5) {
        console['log']('\x20' + _0x53a1e5);
    } finally {
        _0x50a04f['close'](), console['clear']();
    }
}
;
async function _0x25cc5c(_0x4e33d9, _0x306a80, _0xbe101c, _0x1d0dfd, _0x144297) {
    await _0x2091e8(_0x1d0dfd, _0x4e33d9);
    var _0xae919f = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x4cb812
            },
            {
                'name': 'Size',
                'value': '' + _0x1d0dfd[_0x4e33d9]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x2aae14['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x2e3ef4
            }
        ]
    }];
    const _0x3486cb = { 'embeds': _0xae919f };
    if (_0x2aae14['useRandomProxy'] = ![])
        var _0x5e8e7a = _0x144297[_0x4e33d9]['split'](':');
    else
        var _0x5a2f1a = Math['round'](Math['random']() * (_0x144297['length'] - 0x1)), _0x5e8e7a = _0x144297[_0x5a2f1a]['split'](':');
    var _0x4f2aa0 = _0xbe101c['data'];
    _0x306a80 == 'exp' ? _0x4f2aa0['data']['attributes']['email'] = '' + _0x1d0dfd[_0x4e33d9]['FirstName'] + _0x1d0dfd[_0x4e33d9]['LastName'] + _0x2aae14['catchall'] : _0x4f2aa0['data']['attributes']['email'] = '' + _0x1d0dfd[_0x4e33d9]['Email'];
    _0x4f2aa0['data']['attributes']['properties']['$first_name'] = '' + _0x1d0dfd[_0x4e33d9]['FirstName'], _0x4f2aa0['data']['attributes']['properties']['$last_name'] = '' + _0x1d0dfd[_0x4e33d9]['LastName'], _0x4f2aa0['data']['attributes']['properties']['$address1'] = _0x1d0dfd[_0x4e33d9]['Address1'] + '\x20' + _0x1d0dfd[_0x4e33d9]['Address2'], _0x4f2aa0['data']['attributes']['properties']['$zip'] = '' + _0x1d0dfd[_0x4e33d9]['Zip'], _0x4f2aa0['data']['attributes']['properties']['$city'] = '' + _0x1d0dfd[_0x4e33d9]['City'], _0x4f2aa0['data']['attributes']['properties']['$country'] = '' + _0x1d0dfd[_0x4e33d9]['Country'], _0x4f2aa0['data']['attributes']['properties']['Size'] = '' + _0x1d0dfd[_0x4e33d9]['Size'], _0x4f2aa0['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x1d0dfd[_0x4e33d9]['Follower'];
    var _0x22405b = {
        'jar': _0x13c002,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0xbe101c['url'],
        'headers': _0xbe101c['headers'],
        'body': JSON['stringify'](_0x4f2aa0),
        'proxy': 'http://' + _0x5e8e7a[0x2] + ':' + _0x5e8e7a[0x3] + '@' + _0x5e8e7a[0x0] + ':' + _0x5e8e7a[0x1]
    };
    return _0x306a80 === 'ver' && (_0x22405b['method'] = 'GET'), new Promise(function (_0x35317a, _0x5bc558) {
        callback = async (_0xb6217e, _0x28984f, _0x316b99) => {
            !_0xb6217e && _0x28984f['statusCode'] == 0xca || !_0xb6217e && _0x28984f['statusCode'] == 0xc8 ? _0x35317a(console['log'](_0xa19cd2['green'](_0xc0ef5e() + '\x20[' + _0xbe101c['name'] + ']\x20Task\x20' + (_0x4e33d9 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0xae919f[0x0]['title'] = 'Failed\x20entry', _0xae919f[0x0]['description'] = '' + _0xb6217e, await _0x566b34(_0x30a729, _0x3486cb), _0x5bc558(console['log'](_0xc0ef5e() + '\x20[' + _0xbe101c['name'] + ']\x20Task\x20' + (_0x4e33d9 + 0x1) + ':\x20' + _0xb6217e)));
        };
        try {
            _0x306a80 === 'ver' ? console['log'](_0xc0ef5e() + '\x20[' + _0xbe101c['name'] + ']\x20Task\x20' + (_0x4e33d9 + 0x1) + ':\x20Verifying.') : console['log'](_0xc0ef5e() + '\x20[' + _0xbe101c['name'] + ']\x20Task\x20' + (_0x4e33d9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4f2aa0['data']['attributes']['email']), _0x2743eb(_0x22405b, callback);
        } catch (_0x59e2b6) {
            console['log'](_0xc0ef5e() + '\x20Task\x20' + (_0x4e33d9 + 0x1) + ':\x20' + _0x59e2b6);
        }
    });
}
;
async function _0x229247(_0x2d38a6, _0x5a17d8) {
    _0x59faa5['use'](_0x2852d9()), _0x59faa5['use'](_0x4f16ed({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2aae14['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1385b4 = 0x0; _0x1385b4 < _0x2d38a6['length']; _0x1385b4++) {
        var _0x11111e = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x2d38a6[_0x1385b4]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2d38a6[_0x1385b4]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x4cb812
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2aae14['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2e3ef4
                }
            ]
        }];
        const _0x41b1b6 = { 'embeds': _0x11111e };
        await _0x2091e8(_0x2d38a6, _0x1385b4);
        if (_0x2d38a6[_0x1385b4]['Email'] == '' || _0x2d38a6[_0x1385b4]['FirstName'] == '' || _0x2d38a6[_0x1385b4]['LastName'] == '' || _0x2d38a6[_0x1385b4]['Country'] == '' || _0x2d38a6[_0x1385b4]['Size'] == '' || _0x2d38a6[_0x1385b4]['Address1'] == '' || _0x2d38a6[_0x1385b4]['Zip'] == '') {
            console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1385b4 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2d38a6[_0x1385b4]['Email'] == '' || _0x2d38a6[_0x1385b4]['FirstName'] == '' || _0x2d38a6[_0x1385b4]['LastName'] == '' || _0x2d38a6[_0x1385b4]['Country'] == '' || _0x2d38a6[_0x1385b4]['Size'] == '' || _0x2d38a6[_0x1385b4]['Address1'] == '' || _0x2d38a6[_0x1385b4]['Zip'] == '' || _0x2d38a6[_0x1385b4]['Phone'] == '') {
            console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1385b4 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x53a252 = '' + _0x2d38a6[_0x1385b4]['Url'];
        if (_0x2aae14['useRandomProxy'] = ![])
            var _0x49c975 = _0x5a17d8[_0x1385b4]['split'](':');
        else
            var _0x37bf0a = Math['round'](Math['random']() * (_0x5a17d8['length'] - 0x1)), _0x49c975 = _0x5a17d8[_0x37bf0a]['split'](':');
        const _0x1a9d2b = await _0x59faa5['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x49c975[0x0] + ':' + _0x49c975[0x1]]
        });
        try {
            const _0x52ceea = await _0x1a9d2b['newPage']();
            await _0x52ceea['authenticate']({
                'username': '' + _0x49c975[0x2],
                'password': '' + _0x49c975[0x3]
            }), console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1385b4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x52ceea['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x52ceea['setRequestInterception'](!![]), _0x52ceea['on']('request', _0x6bce7a => {
                _0x6bce7a['resourceType']() === 'image' || _0x6bce7a['resourceType']() === 'font' || _0x6bce7a['resourceType']() === 'media' ? _0x6bce7a['abort']() : _0x6bce7a['continue']();
            }), await _0x52ceea['goto'](_0x53a252), await _0x17c69e(0xbb8), await _0x52ceea['waitForSelector']('.control__JhutY'), await _0x52ceea['click']('.control__JhutY'), await _0x17c69e(0x1f4);
            if (_0x2d38a6[_0x1385b4]['Size'] != 'RANDOM')
                try {
                    const _0xe8a483 = await _0x52ceea['$x']('//div[contains(text(),\x20\x27' + _0x2d38a6[_0x1385b4]['Size'] + '\x27)]');
                    await _0xe8a483[0x0]['click']();
                } catch {
                    console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1385b4 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x481543 = await _0x52ceea['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x1a172f = Math['round'](Math['random']() * (_0x481543['length'] - 0x1));
                await _0x481543[_0x1a172f]['click']();
            }
            await _0x17c69e(0x4b0);
            const _0x848dd1 = await _0x52ceea['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x848dd1[0x0]['click'](), await _0x52ceea['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1385b4 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x52ceea['type']('input[name=\x22email\x22]', '' + _0x2d38a6[_0x1385b4]['Email']), await _0x17c69e(0x640), await _0x52ceea['type']('input[name=\x22phone\x22]', '' + _0x2d38a6[_0x1385b4]['Phone']), await _0x17c69e(0x4b0), await _0x52ceea['click']('button.btn.continue-button__1RtsS'), await _0x17c69e(0x4b0);
            try {
                await _0x52ceea['type']('input[name=\x22firstName\x22]', '' + _0x2d38a6[_0x1385b4]['FirstName']), await _0x17c69e(0x258);
            } catch {
                const _0x363607 = await _0x52ceea['$$eval']('.invalid-feedback\x20>\x20div', _0x324673 => {
                    return _0x324673['map'](_0x4dc079 => _0x4dc079['innerText']);
                });
                console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1385b4 + 0x1) + '\x20:\x20' + _0x363607));
                continue;
            }
            await _0x52ceea['type']('input[name=\x22lastName\x22]', '' + _0x2d38a6[_0x1385b4]['LastName']), await _0x17c69e(0xc8), await _0x52ceea['type']('input[name=\x22instagramUsername\x22]', '' + _0x2d38a6[_0x1385b4]['Follower']), await _0x17c69e(0x4b0), await _0x52ceea['click']('button.btn.continue-button__1RtsS'), await _0x17c69e(0x3e8), console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1385b4 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x52ceea['select']('select[name=\x22country\x22]', '' + _0x2d38a6[_0x1385b4]['Country']), await _0x17c69e(0x2bc), await _0x52ceea['type']('input[name=\x22streetName\x22]', '' + _0x2d38a6[_0x1385b4]['Address1']), await _0x17c69e(0x258), await _0x52ceea['type']('input[name=\x22houseNumber\x22]', _0x2d38a6[_0x1385b4]['HouseNumber'] + '\x20' + _0x2d38a6[_0x1385b4]['Address2']), await _0x17c69e(0xc8), await _0x52ceea['type']('input[name=\x22postalCode\x22]', '' + _0x2d38a6[_0x1385b4]['Zip']), await _0x17c69e(0x1f4), await _0x52ceea['type']('input[name=\x22city\x22]', '' + _0x2d38a6[_0x1385b4]['City']), await _0x17c69e(0x4b0), await _0x52ceea['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x17c69e(0x4b0), await _0x52ceea['click']('button.btn.continue-button__1RtsS'), await _0x17c69e(0x4b0), console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1385b4 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x52ceea['solveRecaptchas'](), console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1385b4 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x17c69e(0xbb8), await _0x52ceea['click']('button.btn.continue-button__1RtsS'), await _0x17c69e(0x1388), console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1385b4 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x52ceea['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x52ceea['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x17c69e(0x4b0), await _0x52ceea['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2d38a6[_0x1385b4]['CardNumber']), await _0x17c69e(0x320), await _0x52ceea['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x52ceea['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2d38a6[_0x1385b4]['ExpiryDate']), await _0x17c69e(0x4b0), await _0x52ceea['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x52ceea['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2d38a6[_0x1385b4]['CVV']), await _0x17c69e(0x226), await _0x52ceea['type']('input[name=\x22holderName\x22]', '' + _0x2d38a6[_0x1385b4]['NameOnCard']), await _0x17c69e(0x226), await _0x52ceea['click']('button.adyen-checkout__button'), console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1385b4 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x52ceea['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x17c69e(0xbb8), console['log'](_0xa19cd2['green'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1385b4 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x566b34(_0x255413, _0x41b1b6);
            } catch {
                console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1385b4 + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x6320c4) {
            console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1385b4 + 0x1) + '\x20:\x20' + _0x6320c4);
        } finally {
            _0x1a9d2b['close'](), console['log']('Waiting\x20for\x20' + _0x2aae14['footshopDelay'] + '\x20ms'), await _0x17c69e(_0x2aae14['footshopDelay']);
        }
    }
}
afewFunction = async (_0x4e8857, _0x27f74b, _0x207cd4, _0x5dc62d, _0x2b32a8) => {
    for (var _0x286505 = 0x0; _0x286505 < _0x5dc62d['length']; _0x286505++) {
        _0x470a51(_0x207cd4['name'] + '\x20Task\x20' + (_0x286505 + 0x1) + '\x20/\x20' + _0x5dc62d['length'] + '\x20||\x20File:\x20' + _0x548231 + '\x20Proxies:\x20' + _0x42503a), await _0x2091e8(_0x5dc62d, _0x286505);
        var _0x159de2 = [{
            'type': 'rich',
            'title': 'Succesful\x20AFEW\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4cb812
                },
                {
                    'name': 'Product',
                    'value': '' + _0x4e8857
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5dc62d[_0x286505]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2aae14['AfewDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2e3ef4
                }
            ]
        }];
        const _0x1bcc7a = { 'embeds': _0x159de2 };
        if (_0x5dc62d[_0x286505]['Email'] == '' || _0x5dc62d[_0x286505]['FirstName'] == '' || _0x5dc62d[_0x286505]['LastName'] == '' || _0x5dc62d[_0x286505]['Country'] == '' || _0x5dc62d[_0x286505]['Size'] == '' || _0x5dc62d[_0x286505]['Address1'] == '' || _0x5dc62d[_0x286505]['Zip'] == '') {
            console['log'](_0xc0ef5e() + '\x20[' + _0x207cd4['name'] + ']\x20Task\x20' + (_0x286505 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2aae14['useRandomProxy'] = ![])
            var _0x4016ea = _0x2b32a8[_0x286505]['split'](':');
        else
            var _0x32e4e2 = Math['round'](Math['random']() * (_0x2b32a8['length'] - 0x1)), _0x4016ea = _0x2b32a8[_0x32e4e2]['split'](':');
        const _0xc4a17 = await _0x59faa5['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4016ea[0x0] + ':' + _0x4016ea[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xbf0d6a = await _0xc4a17['newPage']();
            await _0xbf0d6a['setDefaultNavigationTimeout'](0x1d4c0), await _0xbf0d6a['authenticate']({
                'username': '' + _0x4016ea[0x2],
                'password': '' + _0x4016ea[0x3]
            }), console['log'](_0xc0ef5e() + '\x20[' + _0x207cd4['name'] + ']\x20Task\x20' + (_0x286505 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xbf0d6a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xbf0d6a['setRequestInterception'](!![]), _0xbf0d6a['on']('request', _0x5712b1 => {
                _0x5712b1['resourceType']() === 'image' || _0x5712b1['resourceType']() === 'font' || _0x5712b1['resourceType']() === 'media' ? _0x5712b1['abort']() : _0x5712b1['continue']();
            }), await _0xbf0d6a['goto'](_0x4e8857, { 'waitUntil': 'networkidle2' }), console['log'](_0xc0ef5e() + '\x20[' + _0x207cd4['name'] + ']\x20Task\x20' + (_0x286505 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0xbf0d6a['waitForTimeout'](0xfa0), console['log'](_0xc0ef5e() + '\x20[' + _0x207cd4['name'] + ']\x20Task\x20' + (_0x286505 + 0x1) + '\x20:\x20Cookies\x20received'), await _0xbf0d6a['waitForTimeout'](0x320);
            if (_0x5dc62d[_0x286505]['Size'] == 'RANDOM') {
                console['log'](_0xc0ef5e() + '\x20[' + _0x207cd4['name'] + ']\x20Task\x20' + (_0x286505 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x231d6f = await _0xbf0d6a['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x552332 => {
                    return _0x552332['map'](_0x533a70 => _0x533a70['href']);
                });
                var _0x2bd80e = Math['round'](Math['random']() * (_0x231d6f['length'] - 0x1));
                await _0xbf0d6a['goto']('' + _0x231d6f[_0x2bd80e]);
            } else {
                console['log'](_0xc0ef5e() + '\x20[' + _0x207cd4['name'] + ']\x20Task\x20' + (_0x286505 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x5dc62d[_0x286505]['Size']);
                try {
                    const _0x137c57 = await _0xbf0d6a['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x5dc62d[_0x286505]['Size'] + '\x22]\x20>\x20a', _0x43e91d => {
                        return _0x43e91d['map'](_0x32eaad => _0x32eaad['href']);
                    });
                    await _0xbf0d6a['goto']('' + _0x137c57[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0xbfcc56) {
                    console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x207cd4['name'] + ']\x20Task\x20' + (_0x286505 + 0x1) + '\x20:\x20' + _0xbfcc56 + '\x20Size\x20not\x20found')), _0x159de2[0x0]['title'] = 'Failed\x20entry', _0x159de2[0x0]['description'] = 'Size\x20not\x20found', await _0x566b34(_0x30a729, _0x1bcc7a);
                    continue;
                }
                try {
                    await _0xbf0d6a['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x5dc62d[_0x286505]['Size'] + '\x22]'), await _0xbf0d6a['waitForTimeout'](0x320), await _0xbf0d6a['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x5dc62d[_0x286505]['Size'] + '\x22]');
                } catch (_0x512f47) {
                    console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x207cd4['name'] + ']\x20Task\x20' + (_0x286505 + 0x1) + '\x20:\x20' + _0x512f47 + '\x20Size\x20not\x20found')), _0x159de2[0x0]['title'] = 'Failed\x20entry', _0x159de2[0x0]['description'] = 'Size\x20not\x20found', await _0x566b34(_0x30a729, _0x1bcc7a);
                    continue;
                }
            }
            await _0xbf0d6a['waitForTimeout'](0x258), await _0xbf0d6a['type']('#raffle-instagram', '' + _0x5dc62d[_0x286505]['Follower'], { 'delay': 0x64 }), await _0xbf0d6a['waitForTimeout'](0x384), await _0xbf0d6a['click']('#raffle-terms'), await _0xbf0d6a['waitForTimeout'](0x384), await _0xbf0d6a['evaluate'](() => {
                const _0x3c39ca = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x3c39ca['click']();
            }), await _0xbf0d6a['waitForTimeout'](0xbb8), await _0xbf0d6a['waitForSelector']('#checkout_email'), await _0x17c69e(0x3e8), console['log'](_0xc0ef5e() + '\x20[' + _0x207cd4['name'] + ']\x20Task\x20' + (_0x286505 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x27f74b == 'sec' ? await _0xbf0d6a['type']('#checkout_email', '' + _0x5dc62d[_0x286505]['FirstName'] + _0x5dc62d[_0x286505]['LastName'] + _0x2aae14['catchall'], 0x32) : await _0xbf0d6a['type']('#checkout_email', '' + _0x5dc62d[_0x286505]['Email'], 0x32);
            await _0x17c69e(0x320), await _0xbf0d6a['select']('#checkout_shipping_address_country', '' + _0x5dc62d[_0x286505]['Country']), await _0xbf0d6a['waitForTimeout'](0x258), await _0xbf0d6a['type']('#checkout_shipping_address_first_name', '' + _0x5dc62d[_0x286505]['FirstName']), await _0xbf0d6a['waitForTimeout'](0x320), await _0xbf0d6a['type']('#checkout_shipping_address_last_name', '' + _0x5dc62d[_0x286505]['LastName']), await _0xbf0d6a['waitForTimeout'](0x2bc), await _0xbf0d6a['type']('#checkout_shipping_address_address1', _0x5dc62d[_0x286505]['Address1'] + '\x20' + _0x5dc62d[_0x286505]['HouseNumber']), await _0xbf0d6a['waitForTimeout'](0x2bc), await _0xbf0d6a['type']('#checkout_shipping_address_address2', '' + _0x5dc62d[_0x286505]['Address2']), await _0xbf0d6a['waitForTimeout'](0x2bc);
            _0x5dc62d[_0x286505]['Postcode'] == undefined ? await _0xbf0d6a['type']('#checkout_shipping_address_zip', '' + _0x5dc62d[_0x286505]['Zip']) : await _0xbf0d6a['type']('#checkout_shipping_address_zip', '' + _0x5dc62d[_0x286505]['Postcode']);
            await _0xbf0d6a['waitForTimeout'](0x2bc), await _0xbf0d6a['type']('#checkout_shipping_address_city', '' + _0x5dc62d[_0x286505]['City']), await _0xbf0d6a['waitForTimeout'](0x2bc), console['log'](_0xc0ef5e() + '\x20[' + _0x207cd4['name'] + ']\x20Task\x20' + (_0x286505 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0xbf0d6a['evaluate'](() => {
                const _0x44af9c = document['querySelector']('#continue_button');
                for (var _0x1bcf53 = 0x0; _0x1bcf53 < 0x5; _0x1bcf53++) {
                    if (_0x44af9c) {
                        _0x44af9c['click']();
                        break;
                    } else
                        _0x17c69e(0xfa0);
                }
            }), await _0xbf0d6a['waitForTimeout'](0x1194), await _0xbf0d6a['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), _0xbf0d6a['evaluate'](() => {
                const _0x28005b = document['querySelector']('#continue_button');
                for (var _0x3414b8 = 0x0; _0x3414b8 < 0x5; _0x3414b8++) {
                    if (_0x28005b) {
                        _0x28005b['click']();
                        break;
                    } else
                        _0x17c69e(0xfa0);
                }
            }), await _0xbf0d6a['waitForTimeout'](0x7d0), console['log'](_0xc0ef5e() + '\x20[' + _0x207cd4['name'] + ']\x20Task\x20' + (_0x286505 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xbf0d6a['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0xbf0d6a['evaluate'](() => {
                const _0x377a54 = document['querySelector']('#continue_button');
                for (var _0x30d617 = 0x0; _0x30d617 < 0x5; _0x30d617++) {
                    if (_0x377a54) {
                        _0x377a54['click']();
                        break;
                    } else
                        _0x17c69e(0xfa0);
                }
            }), await _0xbf0d6a['waitForTimeout'](0x1194), await _0xbf0d6a['waitForSelector']('#continue_button'), _0xbf0d6a['evaluate'](() => {
                const _0x5a1740 = document['querySelector']('#continue_button');
                for (var _0x3fcc58 = 0x0; _0x3fcc58 < 0x5; _0x3fcc58++) {
                    if (_0x5a1740) {
                        _0x5a1740['click']();
                        break;
                    } else
                        _0x17c69e(0xfa0);
                }
            });
            try {
                await _0xbf0d6a['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x226fc4) {
                console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x207cd4['name'] + ']\x20Task\x20' + (_0x286505 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x226fc4));
            }
            console['log'](_0xa19cd2['green'](_0xc0ef5e() + '\x20[' + _0x207cd4['name'] + ']\x20Task\x20' + (_0x286505 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x566b34(_0x255413, _0x1bcc7a);
        } catch (_0xd7c4d) {
            console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x207cd4['name'] + ']\x20Task\x20' + (_0x286505 + 0x1) + '\x20:\x20' + _0xd7c4d)), _0x159de2[0x0]['title'] = 'Failed\x20entry', _0x159de2[0x0]['description'] = '' + _0xd7c4d, await _0x566b34(_0x30a729, _0x1bcc7a);
        } finally {
            _0xc4a17 && _0xc4a17['close']();
            if (_0x286505 + 0x1 == _0x5dc62d['length']) {
                console['log'](_0xa19cd2['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x17c69e(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x2aae14['AfewDelay'] + '\x20ms'), await _0x17c69e(_0x2aae14['AfewDelay']);
        }
    }
};
async function _0x281858(_0x2cdd7a, _0x13499d, _0x41b5a2, _0x29668c) {
    _0x59faa5['use'](_0x2852d9()), _0x59faa5['use'](_0x4f16ed({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2aae14['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x37b947 = 0x0; _0x37b947 < _0x41b5a2['length']; _0x37b947++) {
        _0x470a51(_0x13499d['name'] + '\x20Task\x20' + (_0x37b947 + 0x1) + '\x20/\x20' + _0x41b5a2['length'] + '\x20||\x20File:\x20' + _0x548231 + '\x20Proxies:\x20' + _0x42503a);
        var _0x1ac575 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4cb812
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2aae14['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2e3ef4
                }
            ]
        }];
        const _0x554245 = { 'embeds': _0x1ac575 };
        await _0x2091e8(_0x41b5a2, _0x37b947);
        if (_0x41b5a2[_0x37b947]['Email'] == '' || _0x41b5a2[_0x37b947]['Password'] == '' || _0x41b5a2[_0x37b947]['FirstName'] == '' || _0x41b5a2[_0x37b947]['LastName'] == '') {
            console['log'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2aae14['useRandomProxy'] = ![])
            var _0x3569c8 = _0x29668c[_0x37b947]['split'](':');
        else
            var _0x1027ba = Math['round'](Math['random']() * (_0x29668c['length'] - 0x1)), _0x3569c8 = _0x29668c[_0x1027ba]['split'](':');
        const _0x300050 = await _0x59faa5['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3569c8[0x0] + ':' + _0x3569c8[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x26fb68 = await _0x300050['newPage']();
            await _0x26fb68['authenticate']({
                'username': '' + _0x3569c8[0x2],
                'password': '' + _0x3569c8[0x3]
            }), console['log'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x26fb68['setRequestInterception'](!![]), _0x26fb68['on']('request', _0x2bd0a1 => {
                _0x2bd0a1['resourceType']() === 'image' || _0x2bd0a1['resourceType']() === 'font' || _0x2bd0a1['resourceType']() === 'media' ? _0x2bd0a1['abort']() : _0x2bd0a1['continue']();
            }), await _0x26fb68['goto'](_0x2cdd7a), await _0x17c69e(0xbb8), console['log'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x26fb68['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x26fb68['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x26fb68['waitForSelector']('#button-register'), await _0x17c69e(0x7d0), await _0x26fb68['evaluate'](() => {
                const _0x116e0a = document['querySelector']('#button-register');
                _0x116e0a['click']();
            }), console['log'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x17c69e(0x1388), await _0x26fb68['waitForSelector']('#customer_salutation'), await _0x26fb68['select']('#customer_salutation', 'mr'), await _0x17c69e(0x7d0), await _0x26fb68['waitForSelector']('#customer_firstname'), await _0x26fb68['type']('#customer_firstname', '' + _0x41b5a2[_0x37b947]['FirstName']), await _0x17c69e(0x352), await _0x26fb68['waitForSelector']('#customer_lastname'), await _0x26fb68['type']('#customer_lastname', '' + _0x41b5a2[_0x37b947]['LastName']), await _0x17c69e(0x352), await _0x26fb68['type']('#email-input', '' + _0x41b5a2[_0x37b947]['Email']), await _0x17c69e(0x352), await _0x26fb68['type']('#email-confirm-input', '' + _0x41b5a2[_0x37b947]['Email']), await _0x17c69e(0x352), await _0x26fb68['type']('#register-password', '' + _0x41b5a2[_0x37b947]['Password']), await _0x17c69e(0x352), await _0x26fb68['type']('#password-confirm', '' + _0x41b5a2[_0x37b947]['Password']), await _0x17c69e(0x352), console['log'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x26fb68['click']('#consent'), await _0x17c69e(0x1f4);
            const _0x11242c = await _0x26fb68['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x11242c) {
                console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x26fb68['click']('#buttonRegister');
            try {
                await _0x26fb68['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0xa19cd2['yellow'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20Account\x20' + _0x41b5a2[_0x37b947]['Email'] + '\x20Generated!')), console['log'](_0xa19cd2['yellow'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x41b5a2[_0x37b947]['Email'])), await _0x17c69e(0x4b0);
            async function _0x19cdc6() {
                console['log'](_0xa19cd2['yellow'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x397b0f = await _0x17112b['get']('Code');
                return _0x397b0f['Code'];
            }
            ;
            code = await _0x19cdc6(), _0x17c69e(0x320), console['log'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20Verifying..'), await _0x26fb68['type']('#verificationCode', code), await _0x17c69e(0x1f4), await _0x26fb68['click']('#buttonVerify'), await _0x17c69e(0x190), await _0x26fb68['click']('#buttonVerify'), await _0x17c69e(0x3e8);
            try {
                await _0x26fb68['waitForSelector']('div.b-user_greeting'), console['log'](_0xa19cd2['green'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20Account\x20' + _0x41b5a2[_0x37b947]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x4eda22['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x41b5a2[_0x37b947]['Email'] + ',' + _0x41b5a2[_0x37b947]['Password'] + ','), console['log'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20Account\x20' + _0x41b5a2[_0x37b947]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27'), await _0x566b34(_0x255413, _0x554245);
            } catch {
                console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x2dd34a) {
            console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x13499d['name'] + ']\x20Task\x20' + (_0x37b947 + 0x1) + '\x20:\x20' + _0x2dd34a)), _0x1ac575[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x1ac575[0x0]['description'] = '' + _0x2dd34a, await _0x566b34(_0x30a729, _0x554245);
        } finally {
            _0x300050 && _0x300050['close'](), console['log']('Waiting\x20for\x20' + _0x2aae14['delay'] + '\x20ms'), await _0x17c69e(_0x2aae14['delay']);
        }
    }
}
async function _0x109219(_0x4b1fdf, _0x1e2cc4, _0x56dd2f) {
    _0x59faa5['use'](_0x2852d9()), _0x59faa5['use'](_0x4f16ed({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2aae14['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4c672b = 0x0; _0x4c672b < _0x1e2cc4['length']; _0x4c672b++) {
        _0x470a51(_0x4b1fdf['name'] + '\x20Task\x20' + (_0x4c672b + 0x1) + '\x20/\x20' + _0x1e2cc4['length'] + '\x20||\x20File:\x20' + _0x548231 + '\x20Proxies:\x20' + _0x42503a);
        var _0x7c092f = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4cb812
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2aae14['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2e3ef4
                }
            ]
        }];
        const _0x4f8029 = { 'embeds': _0x7c092f };
        await _0x2091e8(_0x1e2cc4, _0x4c672b);
        if (_0x1e2cc4[_0x4c672b]['Email'] == '' || _0x1e2cc4[_0x4c672b]['Password'] == '' || _0x1e2cc4[_0x4c672b]['FirstName'] == '' || _0x1e2cc4[_0x4c672b]['LastName'] == '') {
            console['log'](_0xc0ef5e() + '\x20[' + _0x4b1fdf['name'] + ']\x20Task\x20' + (_0x4c672b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2aae14['useRandomProxy'] = ![])
            var _0x299760 = _0x56dd2f[_0x4c672b]['split'](':');
        else
            var _0x37298b = Math['round'](Math['random']() * (_0x56dd2f['length'] - 0x1)), _0x299760 = _0x56dd2f[_0x37298b]['split'](':');
        const _0x4cb382 = await _0x59faa5['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x299760[0x0] + ':' + _0x299760[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1729ba = await _0x4cb382['newPage']();
            await _0x1729ba['authenticate']({
                'username': '' + _0x299760[0x2],
                'password': '' + _0x299760[0x3]
            }), console['log'](_0xc0ef5e() + '\x20[' + _0x4b1fdf['name'] + ']\x20Task\x20' + (_0x4c672b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1729ba['setRequestInterception'](!![]), _0x1729ba['on']('request', _0x3fc291 => {
                _0x3fc291['resourceType']() === 'image' || _0x3fc291['resourceType']() === 'font' || _0x3fc291['resourceType']() === 'media' ? _0x3fc291['abort']() : _0x3fc291['continue']();
            }), await _0x1729ba['goto']('https://www.kickz.com/nl/login/', { 'waitUntil': 'networkidle2' }), await _0x17c69e(0xbb8), console['log'](_0xc0ef5e() + '\x20[' + _0x4b1fdf['name'] + ']\x20Task\x20' + (_0x4c672b + 0x1) + '\x20:\x20Logging\x20in'), await _0x1729ba['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1729ba['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1729ba['waitForSelector']('#username'), await _0x1729ba['type']('#username', _0x1e2cc4[_0x4c672b]['Email']), await _0x1729ba['waitForSelector']('#password'), await _0x1729ba['type']('#password', _0x1e2cc4[_0x4c672b]['Password']), await _0x17c69e(0x190), await _0x1729ba['click']('#buttonSubmit'), await _0x1729ba['waitForSelector']('div.b-user_greeting'), console['log'](_0xc0ef5e() + '\x20[' + _0x4b1fdf['name'] + ']\x20Task\x20' + (_0x4c672b + 0x1) + '\x20:\x20Getting\x20Product'), await _0x17c69e(0x1f4), await _0x1729ba['goto']('' + _0x1e2cc4[_0x4c672b]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0xc0ef5e() + '\x20[' + _0x4b1fdf['name'] + ']\x20Task\x20' + (_0x4c672b + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x1e2cc4[_0x4c672b]['Size']);
            let _0x5a0047 = _0x1e2cc4[_0x4c672b]['Size']['replace']('.5', '\x201/2');
            await _0x1729ba['click']('button[title=\x22' + _0x5a0047 + '\x22]'), await _0x17c69e(0x1f4);
            try {
                await _0x1729ba['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x17c69e(0x12c), console['log'](_0xc0ef5e() + '\x20[' + _0x4b1fdf['name'] + ']\x20Task\x20' + (_0x4c672b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1729ba['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x17c69e(0x12c), await _0x1729ba['type']('#dwfrm_raffle_addressFields_firstName', _0x1e2cc4[_0x4c672b]['FirstName']), await _0x17c69e(0x12c), await _0x1729ba['type']('#dwfrm_raffle_addressFields_lastName', _0x1e2cc4[_0x4c672b]['LastName']), await _0x17c69e(0x12c), await _0x1729ba['select']('#dwfrm_raffle_addressFields_country', _0x1e2cc4[_0x4c672b]['Country']), await _0x17c69e(0x12c), await _0x1729ba['type']('#dwfrm_raffle_addressFields_city', _0x1e2cc4[_0x4c672b]['City']), await _0x17c69e(0x12c);
            _0x1e2cc4[_0x4c672b]['Postcode'] == undefined && (_0x1e2cc4[_0x4c672b]['Postcode'] = _0x1e2cc4[_0x4c672b]['Zip']);
            await _0x1729ba['type']('#dwfrm_raffle_addressFields_postalCode', _0x1e2cc4[_0x4c672b]['Postcode']), await _0x17c69e(0x12c), await _0x1729ba['type']('#dwfrm_raffle_addressFields_address1', _0x1e2cc4[_0x4c672b]['Address1']), await _0x17c69e(0x12c), await _0x1729ba['type']('#dwfrm_raffle_addressFields_address2', _0x1e2cc4[_0x4c672b]['HouseNumber']), await _0x17c69e(0x12c), await _0x1729ba['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x1e2cc4[_0x4c672b]['Address2']), await _0x17c69e(0x12c), await _0x1729ba['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x17c69e(0x12c), await _0x1729ba['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x1e2cc4[_0x4c672b]['Follower']), await _0x17c69e(0x1f4), await _0x1729ba['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x17c69e(0x1f4), console['log'](_0xc0ef5e() + '\x20[' + _0x4b1fdf['name'] + ']\x20Task\x20' + (_0x4c672b + 0x1) + '\x20:\x20' + _0xa19cd2['blue']('Awaiting\x20Paypal\x20Payment')), await _0x1729ba['click']('.paypal-buttons.paypal-buttons-context-iframe.paypal-buttons-label-checkout.paypal-buttons-layout-vertical');
            try {
                await _0x1729ba['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0xa19cd2['green'](_0xc0ef5e() + '\x20[' + _0x4b1fdf['name'] + ']\x20Task\x20' + (_0x4c672b + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x566b34(_0x255413, _0x4f8029);
            } catch (_0x165360) {
                console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x4b1fdf['name'] + ']\x20Task\x20' + (_0x4c672b + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x165360));
            }
        } catch (_0x5cd0a5) {
            console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x4b1fdf['name'] + ']\x20Task\x20' + (_0x4c672b + 0x1) + '\x20:\x20' + _0x5cd0a5)), _0x7c092f[0x0]['title'] = 'Failed\x20kickz\x20Entry', _0x7c092f[0x0]['description'] = '' + _0x5cd0a5, await _0x566b34(_0x30a729, _0x4f8029);
        } finally {
            _0x4cb382 && _0x4cb382['close'](), console['log']('Waiting\x20for\x20' + _0x2aae14['AfewDelay'] + '\x20ms'), await _0x17c69e(_0x2aae14['AfewDelay']);
        }
    }
}
async function _0x36101e(_0x3f6a9d, _0x595c61) {
    _0x59faa5['use'](_0x2852d9()), _0x59faa5['use'](_0x4f16ed({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2aae14['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3c5179 = 0x0; _0x3c5179 < bouncewear['length']; _0x3c5179++) {
        await _0x2091e8(bouncewear, _0x3c5179);
        if (bouncewear[_0x3c5179]['Email'] == '' || bouncewear[_0x3c5179]['Password'] == '' || bouncewear[_0x3c5179]['FirstName'] == '' || bouncewear[_0x3c5179]['LastName'] == '') {
            console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x3c5179 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2aae14['useRandomProxy'] = ![])
            var _0x18fd43 = _0x4ddc9e()[_0x3c5179]['split'](':');
        else
            var _0x532100 = Math['round'](Math['random']() * (_0x4ddc9e()['length'] - 0x1)), _0x18fd43 = _0x4ddc9e()[_0x532100]['split'](':');
        const _0x3d444f = await _0x59faa5['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x18fd43[0x0] + ':' + _0x18fd43[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x54a263 = await _0x3d444f['newPage']();
            await _0x54a263['authenticate']({
                'username': '' + _0x18fd43[0x2],
                'password': '' + _0x18fd43[0x3]
            }), console['log'](_0xc0ef5e() + '\x20[' + _0x595c61['name'] + ']\x20Task\x20' + (_0x3c5179 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x54a263['setRequestInterception'](!![]), _0x54a263['on']('request', _0x3deaec => {
                _0x3deaec['resourceType']() === 'image' || _0x3deaec['resourceType']() === 'font' || _0x3deaec['resourceType']() === 'media' ? _0x3deaec['abort']() : _0x3deaec['continue']();
            }), await _0x54a263['goto'](_0x3f6a9d), await _0x17c69e(0xbb8), await _0x54a263['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0xc0ef5e() + '\x20[' + _0x595c61['name'] + ']\x20Task\x20' + (_0x3c5179 + 0x1) + '\x20:\x20Filling\x20information'), await _0x54a263['type']('#RegisterForm-FirstName', '' + bouncewear[_0x3c5179]['FirstName']), await _0x17c69e(0x226), await _0x54a263['type']('#RegisterForm-LastName', '' + bouncewear[_0x3c5179]['LastName']), await _0x17c69e(0x226), await _0x54a263['type']('#RegisterForm-email', '' + bouncewear[_0x3c5179]['Email']), await _0x17c69e(0x226), await _0x54a263['type']('#RegisterForm-password', '' + bouncewear[_0x3c5179]['Password']), await _0x17c69e(0x226), await _0x54a263['click']('#marketing'), console['log'](_0xc0ef5e() + '\x20[' + _0x595c61['name'] + ']\x20Task\x20' + (_0x3c5179 + 0x1) + '\x20:\x20Submitting..'), await _0x54a263['$eval']('#RegisterForm', _0x2edad3 => _0x2edad3['submit']()), await _0x17c69e(0x1f40), console['log'](_0xc0ef5e() + '\x20[' + _0x595c61['name'] + ']\x20Task\x20' + (_0x3c5179 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x54a263['solveRecaptchas'](), await _0x54a263['click']('.shopify-challenge__button.btn');
            async function _0xa5f168() {
                for (var _0x2ca422 = 0x0; _0x2ca422 < 0x4; _0x2ca422++) {
                    try {
                        console['log']('try'), await _0x54a263['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0xc0ef5e() + '\x20[' + _0x595c61['name'] + ']\x20Task\x20' + (_0x3c5179 + 0x1) + '\x20:\x20' + _0xa19cd2['red']('Catpcha\x20failed,\x20retrying..')), await _0x54a263['solveRecaptchas'](), await _0x54a263['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0xa5f168(), console['log'](_0xc0ef5e() + '\x20[' + _0x595c61['name'] + ']\x20Task\x20' + (_0x3c5179 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x17c69e(0x1f4);
            try {
                await _0x54a263['waitForSelector']('.featured-title'), await _0x17c69e(0x1f4), console['log'](_0xa19cd2['green'](_0xc0ef5e() + '\x20[' + _0x595c61['name'] + ']\x20Task\x20' + (_0x3c5179 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3c5179]['Email'] + '\x20Generated!')), _0x4eda22['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x3c5179]['Email'] + ',' + bouncewear[_0x3c5179]['Password']), console['log'](_0xa19cd2['yellow'](_0xc0ef5e() + '\x20[' + _0x595c61['name'] + ']\x20Task\x20' + (_0x3c5179 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3c5179]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x25dadd) {
                console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x3c5179 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x25dadd));
            }
        } catch (_0x42dba0) {
            console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x3c5179 + 0x1) + '\x20:\x20' + _0x42dba0));
        } finally {
            _0x3d444f && _0x3d444f['close'](), console['log']('Waiting\x20for\x20' + _0x2aae14['delay'] + '\x20ms'), await _0x17c69e(_0x2aae14['delay']);
        }
    }
}
async function _0x50cd96(_0x569159, _0x2cdbf3, _0x1da920, _0x5c9016) {
    _0x59faa5['use'](_0x2852d9()), _0x59faa5['use'](_0x4f16ed({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2aae14['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5c7b30 = 0x0; _0x5c7b30 < _0x1da920['length']; _0x5c7b30++) {
        _0x470a51(_0x2cdbf3['name'] + '\x20Task\x20' + (_0x5c7b30 + 0x1) + '\x20/\x20' + _0x1da920['length'] + '\x20||\x20File:\x20' + _0x548231 + '\x20Proxies:\x20' + _0x42503a), await _0x2091e8(_0x1da920, _0x5c7b30);
        if (_0x1da920[_0x5c7b30]['Email'] == '' || _0x1da920[_0x5c7b30]['Password'] == '' || _0x1da920[_0x5c7b30]['Password'] == undefined || _0x1da920[_0x5c7b30]['FirstName'] == '' || _0x1da920[_0x5c7b30]['LastName'] == '') {
            console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x5c7b30 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2aae14['useRandomProxy'] = ![])
            var _0x14fb1f = _0x5c9016[_0x5c7b30]['split'](':');
        else
            var _0x3b2bcc = Math['round'](Math['random']() * (_0x5c9016['length'] - 0x1)), _0x14fb1f = _0x5c9016[_0x3b2bcc]['split'](':');
        const _0xcf2698 = await _0x59faa5['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x14fb1f[0x0] + ':' + _0x14fb1f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1a1a9f = await _0xcf2698['newPage']();
            await _0x1a1a9f['authenticate']({
                'username': '' + _0x14fb1f[0x2],
                'password': '' + _0x14fb1f[0x3]
            }), console['log'](_0xc0ef5e() + '\x20[' + _0x2cdbf3['name'] + ']\x20Task\x20' + (_0x5c7b30 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1a1a9f['setRequestInterception'](!![]), _0x1a1a9f['on']('request', _0x5de2c5 => {
                _0x5de2c5['resourceType']() === 'image' || _0x5de2c5['resourceType']() === 'font' || _0x5de2c5['resourceType']() === 'media' ? _0x5de2c5['abort']() : _0x5de2c5['continue']();
            }), await _0x1a1a9f['goto'](_0x569159), await _0x17c69e(0xbb8), await _0x1a1a9f['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0xc0ef5e() + '\x20[' + _0x2cdbf3['name'] + ']\x20Task\x20' + (_0x5c7b30 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1a1a9f['type']('#RegisterForm-FirstName', '' + _0x1da920[_0x5c7b30]['FirstName']), await _0x17c69e(0x226), await _0x1a1a9f['type']('#RegisterForm-LastName', '' + _0x1da920[_0x5c7b30]['LastName']), await _0x17c69e(0x226), await _0x1a1a9f['type']('#RegisterForm-email', '' + _0x1da920[_0x5c7b30]['Email']), await _0x17c69e(0x226), await _0x1a1a9f['type']('#RegisterForm-password', '' + _0x1da920[_0x5c7b30]['Password']), await _0x17c69e(0x226), console['log'](_0xc0ef5e() + '\x20[' + _0x2cdbf3['name'] + ']\x20Task\x20' + (_0x5c7b30 + 0x1) + '\x20:\x20Submitting..'), await _0x1a1a9f['$eval']('#RegisterForm', _0x25e0c0 => _0x25e0c0['submit']()), await _0x17c69e(0x1f40);
            try {
                await _0x1a1a9f['waitForSelector']('.home-page-grid__collection'), await _0x17c69e(0x1f4), console['log'](_0xa19cd2['green'](_0xc0ef5e() + '\x20[' + _0x2cdbf3['name'] + ']\x20Task\x20' + (_0x5c7b30 + 0x1) + '\x20:\x20Account\x20' + _0x1da920[_0x5c7b30]['Email'] + '\x20Generated!')), _0x4eda22['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x1da920[_0x5c7b30]['Email'] + ',' + _0x1da920[_0x5c7b30]['Password']), console['log'](_0xa19cd2['yellow'](_0xc0ef5e() + '\x20[' + _0x2cdbf3['name'] + ']\x20Task\x20' + (_0x5c7b30 + 0x1) + '\x20:\x20Account\x20' + _0x1da920[_0x5c7b30]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
            } catch (_0x3fcf09) {
                console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x5c7b30 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3fcf09));
            }
        } catch (_0x300e85) {
            console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x5c7b30 + 0x1) + '\x20:\x20' + _0x300e85));
        } finally {
            _0xcf2698 && _0xcf2698['close'](), console['log']('Waiting\x20for\x20' + _0x2aae14['delay'] + '\x20ms'), await _0x17c69e(_0x2aae14['delay']);
        }
    }
}
async function _0x59e015(_0x195481, _0x1c73d7, _0x98624d, _0x21672f) {
    _0x59faa5['use'](_0x2852d9()), _0x59faa5['use'](_0x4f16ed({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2aae14['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x509445 = 0x0; _0x509445 < _0x98624d['length']; _0x509445++) {
        _0x470a51(_0x1c73d7['name'] + '\x20Task\x20' + (_0x509445 + 0x1) + '\x20/\x20' + _0x98624d['length'] + '\x20||\x20File:\x20' + _0x548231 + '\x20Proxies:\x20' + _0x42503a), await _0x2091e8(_0x98624d, _0x509445);
        if (_0x98624d[_0x509445]['Email'] == '' || _0x98624d[_0x509445]['Password'] == '' || _0x98624d[_0x509445]['FirstName'] == '' || _0x98624d[_0x509445]['LastName'] == '') {
            console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x509445 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2aae14['useRandomProxy'] = ![])
            var _0x3e5ca1 = _0x21672f[_0x509445]['split'](':');
        else
            var _0x2ee016 = Math['round'](Math['random']() * (_0x21672f['length'] - 0x1)), _0x3e5ca1 = _0x21672f[_0x2ee016]['split'](':');
        const _0x32977e = await _0x59faa5['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3e5ca1[0x0] + ':' + _0x3e5ca1[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x55c2a2 = await _0x32977e['newPage']();
            await _0x55c2a2['authenticate']({
                'username': '' + _0x3e5ca1[0x2],
                'password': '' + _0x3e5ca1[0x3]
            }), console['log'](_0xc0ef5e() + '\x20[' + _0x1c73d7['name'] + ']\x20Task\x20' + (_0x509445 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x55c2a2['setRequestInterception'](!![]), _0x55c2a2['on']('request', _0x360830 => {
                _0x360830['resourceType']() === 'image' || _0x360830['resourceType']() === 'font' || _0x360830['resourceType']() === 'media' ? _0x360830['abort']() : _0x360830['continue']();
            }), await _0x55c2a2['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x55c2a2['waitForSelector']('#CustomerEmail'), console['log'](_0xc0ef5e() + '\x20[' + _0x1c73d7['name'] + ']\x20Task\x20' + (_0x509445 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x55c2a2['type']('#CustomerEmail', '' + _0x98624d[_0x509445]['Email']), await _0x17c69e(0x12c), await _0x55c2a2['type']('#CustomerPassword', '' + _0x98624d[_0x509445]['Password']), await _0x17c69e(0x226), await _0x55c2a2['$eval']('#customer_login', _0x1896f9 => _0x1896f9['submit']());
            try {
                await _0x55c2a2['waitForSelector']('#orders'), await _0x17c69e(0x4b0);
            } catch {
                console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x1c73d7['name'] + ']\x20Task\x20' + (_0x509445 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x55c2a2['goto']('' + _0x98624d[_0x509445]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x17c69e(0xbb8), console['log'](_0xc0ef5e() + '\x20[' + _0x1c73d7['name'] + ']\x20Task\x20' + (_0x509445 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x55c2a2['waitForSelector']('#email');
            } catch {
                console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x1c73d7['name'] + ']\x20Task\x20' + (_0x509445 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x55c2a2['type']('#email', '' + _0x98624d[_0x509445]['Email']), await _0x17c69e(0x384), await _0x55c2a2['type']('#first_name', '' + _0x98624d[_0x509445]['FirstName']), await _0x17c69e(0x514), await _0x55c2a2['type']('#last_name', '' + _0x98624d[_0x509445]['LastName']), await _0x17c69e(0x514), await _0x55c2a2['type']('#street_address', _0x98624d[_0x509445]['Address1'] + '\x20' + _0x98624d[_0x509445]['HouseNumber'] + '\x20' + _0x98624d[_0x509445]['Address2']), await _0x17c69e(0x2bc);
            _0x98624d[_0x509445]['Postcode'] == undefined && (_0x98624d[_0x509445]['Postcode'] = _0x98624d[_0x509445]['Zip']);
            await _0x55c2a2['type']('#zip_code', '' + _0x98624d[_0x509445]['Postcode']), await _0x17c69e(0x320), await _0x55c2a2['type']('#city', '' + _0x98624d[_0x509445]['City']), await _0x17c69e(0x320), await _0x55c2a2['type']('#bday', '' + _0x98624d[_0x509445]['Bday']), await _0x17c69e(0x320), await _0x55c2a2['type']('#instagram', '' + _0x98624d[_0x509445]['Follower']), await _0x17c69e(0x352);
            if (_0x98624d[_0x509445]['Size'] == 'RANDOM') {
                const _0x35775e = await _0x55c2a2['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x204e18 => {
                    return _0x204e18['map'](_0xe7c61f => _0xe7c61f['textContent']);
                });
                var _0x1b6e86 = Math['round'](Math['random']() * (_0x35775e['length'] - 0x1));
                console['log'](_0xc0ef5e() + '\x20[' + _0x1c73d7['name'] + ']\x20Task\x20' + (_0x509445 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x35775e[_0x1b6e86]), await _0x55c2a2['click']('label[data-eu-size=\x22' + _0x35775e[_0x1b6e86] + '\x22]');
            } else {
                console['log'](_0xc0ef5e() + '\x20[' + _0x1c73d7['name'] + ']\x20Task\x20' + (_0x509445 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x98624d[_0x509445]['Size']);
                try {
                    await _0x55c2a2['click']('label[data-eu-size=\x22' + _0x98624d[_0x509445]['Size'] + '\x22]');
                } catch {
                    await _0x55c2a2['click']('label[data-eu-size=\x22' + _0x98624d[_0x509445]['Size'] + '.0\x22]');
                }
            }
            await _0x17c69e(0xbb8), await _0x55c2a2['$$eval']('.raffle__checkbox-label', _0x330376 => _0x330376['forEach'](_0x3a4758 => _0x3a4758['click']())), await _0x17c69e(0x7d0), console['log'](_0xc0ef5e() + '\x20[' + _0x1c73d7['name'] + ']\x20Task\x20' + (_0x509445 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x55c2a2['click']('#raffle__form-submit'), await _0x17c69e(0x1388);
            try {
                await _0x55c2a2['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0xa19cd2['green'](_0xc0ef5e() + '\x20[' + _0x1c73d7['name'] + ']\x20Task\x20' + (_0x509445 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x521e36) {
                console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x509445 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x521e36));
            }
        } catch (_0x29eae5) {
            console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x509445 + 0x1) + '\x20:\x20' + _0x29eae5));
        } finally {
            _0x32977e && _0x32977e['close'](), console['log']('Waiting\x20for\x20' + _0x2aae14['delay'] + '\x20ms'), await _0x17c69e(_0x2aae14['delay']);
        }
    }
}
async function _0x953b89(_0x2f87d2, _0x5ec463, _0x4f5851) {
    var _0x22a7e6 = ![], _0x14f363 = ![];
    if (_0x2aae14['captchaKey'] == '' || _0x2aae14['captchaKey'] == undefined)
        return console['log'](_0xa19cd2['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x59faa5['use'](_0x2852d9()), _0x59faa5['use'](_0x4f16ed({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2aae14['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x48cf39 = 0x0; _0x48cf39 < _0x5ec463['length']; _0x48cf39++) {
        var _0x39ba5c = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x5ec463[_0x48cf39]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5ec463[_0x48cf39]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x4cb812
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2aae14['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2e3ef4
                }
            ]
        }];
        const _0x3aaefd = { 'embeds': _0x39ba5c };
        _0x470a51(_0x2f87d2['name'] + '\x20Task\x20' + (_0x48cf39 + 0x1) + '\x20/\x20' + _0x5ec463['length'] + '\x20||\x20File:\x20' + _0x548231 + '\x20Proxies:\x20' + _0x42503a), await _0x2091e8(_0x5ec463, _0x48cf39);
        if (_0x5ec463[_0x48cf39]['Email'] == '' || _0x5ec463[_0x48cf39]['Url'] == '' || _0x5ec463[_0x48cf39]['FirstName'] == '' || _0x5ec463[_0x48cf39]['LastName'] == '') {
            console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x48cf39 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2aae14['useRandomProxy'] = ![])
            var _0x3c4174 = _0x4f5851[_0x48cf39]['split'](':');
        else
            var _0x22427b = Math['round'](Math['random']() * (_0x4f5851['length'] - 0x1)), _0x3c4174 = _0x4f5851[_0x22427b]['split'](':');
        const _0x4b579d = await _0x59faa5['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3c4174[0x0] + ':' + _0x3c4174[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3c569b = await _0x4b579d['newPage']();
            await _0x3c569b['authenticate']({
                'username': '' + _0x3c4174[0x2],
                'password': '' + _0x3c4174[0x3]
            }), console['log'](_0xc0ef5e() + '\x20[' + _0x2f87d2['name'] + ']\x20Task\x20' + (_0x48cf39 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3c569b['setRequestInterception'](!![]), _0x3c569b['on']('request', _0x340b21 => {
                _0x340b21['resourceType']() === 'image' || _0x340b21['resourceType']() === 'font' || _0x340b21['resourceType']() === 'media' ? _0x340b21['abort']() : _0x340b21['continue']();
            }), await _0x3c569b['goto']('' + _0x5ec463[_0x48cf39]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](_0xc0ef5e() + '\x20[' + _0x2f87d2['name'] + ']\x20Task\x20' + (_0x48cf39 + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x3c569b['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x3c569b['type']('#comp_firstname', '' + _0x5ec463[_0x48cf39]['FirstName']), await _0x3c569b['waitForSelector']('#comp_lastname'), await _0x3c569b['type']('#comp_lastname', '' + _0x5ec463[_0x48cf39]['LastName']), await _0x3c569b['waitForSelector']('#comp_email'), await _0x3c569b['type']('#comp_email', '' + _0x5ec463[_0x48cf39]['Email']), await _0x3c569b['waitForSelector']('#comp_paypalemail'), await _0x3c569b['type']('#comp_paypalemail', '' + _0x5ec463[_0x48cf39]['Email']), await _0x3c569b['waitForSelector']('#comp_mobile_end'), await _0x3c569b['type']('#comp_mobile_end', '' + _0x5ec463[_0x48cf39]['Phone']), await _0x3c569b['waitForSelector']('#comp_dob'), await _0x3c569b['type']('#comp_dob', '08/09/1992'), console['log'](_0xc0ef5e() + '\x20[' + _0x2f87d2['name'] + ']\x20Task\x20' + (_0x48cf39 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x5ec463[_0x48cf39]['Size'] == 'RANDOM') {
                const _0x26f181 = await _0x3c569b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5e2168 => {
                    return _0x5e2168['map'](_0x1c1a51 => _0x1c1a51['value']);
                });
                var _0x36b0d0 = Math['round'](Math['random']() * (_0x26f181['length'] - 0x2));
                await _0x3c569b['select']('#shoesize', _0x26f181[_0x36b0d0 + 0x1]), await _0x17c69e(0x3e8);
            } else {
                const _0x37f998 = await _0x3c569b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4cfa0a => {
                    return _0x4cfa0a['map'](_0xc192a2 => _0xc192a2['innerText']);
                }), _0x368b9e = await _0x3c569b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x449ca5 => {
                    return _0x449ca5['map'](_0xcd7877 => _0xcd7877['value']);
                });
                var _0x5d9067 = _0x5ec463[_0x48cf39]['Size'];
                for (var _0x584540 = 0x1; _0x584540 < _0x368b9e['length']; _0x584540++) {
                    var _0x30c34d = _0x37f998[_0x584540]['split']('\x20')[0x0];
                    if (_0x30c34d == _0x5d9067) {
                        await _0x3c569b['select']('#shoesize', _0x368b9e[_0x584540]);
                        break;
                    } else {
                        if (_0x584540 + 0x1 == _0x368b9e['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x3c569b['waitForSelector']('#comp_address1'), await _0x3c569b['type']('#comp_address1', _0x5ec463[_0x48cf39]['Address1'] + '\x20' + _0x5ec463[_0x48cf39]['HouseNumber']), await _0x3c569b['waitForSelector']('#comp_address2'), await _0x3c569b['type']('#comp_address2', '' + _0x5ec463[_0x48cf39]['Address2']), await _0x3c569b['waitForSelector']('#comp_address2'), await _0x3c569b['type']('#comp_address3', '' + _0x5ec463[_0x48cf39]['City']), await _0x3c569b['waitForSelector']('#comp_postcode'), await _0x3c569b['type']('#comp_postcode', '' + _0x5ec463[_0x48cf39]['Zip']), console['log'](_0xc0ef5e() + '\x20[' + _0x2f87d2['name'] + ']\x20Task\x20' + (_0x48cf39 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x17c69e(0x4b0), await _0x3c569b['click']('label#emailhold'), await _0x17c69e(0x5dc), await _0x3c569b['click']('#preauth_tandc_email\x20>\x20label'), await _0x17c69e(0x5dc), await _0x3c569b['click']('#submit'), await _0x3c569b['waitForSelector']('#paymentWrap'), console['log'](_0xc0ef5e() + '\x20[' + _0x2f87d2['name'] + ']\x20Task\x20' + (_0x48cf39 + 0x1) + '\x20:\x20' + _0xa19cd2['blue']('Awaiting\x20Paypal\x20Payment')), _0x4b579d['on']('targetcreated', async _0x2f510f => {
                if (_0x2f510f['type']() === 'page') {
                    const _0x23a8e2 = await _0x2f510f['page']();
                    async function _0x334dd2() {
                        try {
                            await _0x3c569b['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x14f363 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x123fc6() {
                        try {
                            await _0x3c569b['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x22a7e6 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x123fc6(), _0x334dd2(), await _0x17c69e(0x493e0);
                }
            });
            async function _0x4a9cf5() {
                for (let _0x38c300 = 0x0; _0x38c300 < 0x12c; _0x38c300++) {
                    if (_0x22a7e6 == !![]) {
                        console['log'](_0xa19cd2['green'](_0xc0ef5e() + '\x20[' + _0x2f87d2['name'] + ']\x20Task\x20' + (_0x48cf39 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x566b34(_0x255413, _0x3aaefd);
                        return;
                    } else {
                        if (_0x14f363)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x17c69e(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x17c69e(0xbb8), await _0x3c569b['click']('.zoid-outlet'), await _0x17c69e(0x7d0), await _0x4a9cf5();
        } catch (_0x503c82) {
            console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x2f87d2['name'] + ']\x20Task\x20' + (_0x48cf39 + 0x1) + '\x20:\x20' + _0x503c82)), _0x39ba5c[0x0]['title'] = 'Failed\x20entry', _0x39ba5c[0x0]['description'] = _0x2f87d2['name'] + ':\x20' + _0x503c82, await _0x566b34(_0x30a729, _0x3aaefd);
        } finally {
            _0x4b579d && _0x4b579d['close'](), console['log']('Waiting\x20for\x20' + _0x2aae14['delay'] + '\x20ms'), await _0x17c69e(_0x2aae14['delay']);
        }
    }
}
async function _0x4614dc(_0x4f7f41, _0x435560, _0x407230, _0xdeef0b) {
    var _0x57887d = {}, _0x251612 = [], _0xfebe6d = {}, _0x309f1b = [
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
    !_0xdeef0b && (_0xdeef0b = {});
    if (_0x435560 != 'ver') {
        _0x470a51(_0x407230['name'] + '\x20Task\x20' + (_0x4f7f41 + 0x1) + '\x20/\x20' + _0xdeef0b['length'] + '\x20||\x20File:\x20' + _0x548231 + '\x20Proxies:\x20' + _0x42503a), await _0x2091e8(_0xdeef0b, _0x4f7f41), _0x251612 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4cb812
                },
                {
                    'name': 'Size',
                    'value': '' + _0xdeef0b[_0x4f7f41]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2aae14['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2e3ef4
                }
            ]
        }], _0xfebe6d = { 'embeds': _0x251612 }, _0x57887d = _0x407230['data'];
        _0x435560 == 'exp' ? _0x57887d['data']['attributes']['email'] = '' + _0xdeef0b[_0x4f7f41]['FirstName'] + _0xdeef0b[_0x4f7f41]['LastName'] + _0x2aae14['catchall'] : _0x57887d['data']['attributes']['email'] = '' + _0xdeef0b[_0x4f7f41]['Email'];
        if (_0xdeef0b[_0x4f7f41]['Size'] == 'RANDOM') {
        }
        _0x57887d['data']['attributes']['properties']['$first_name'] = '' + _0xdeef0b[_0x4f7f41]['FirstName'], _0x57887d['data']['attributes']['properties']['$last_name'] = '' + _0xdeef0b[_0x4f7f41]['LastName'], _0x57887d['data']['attributes']['properties']['$address1'] = _0xdeef0b[_0x4f7f41]['Address1'] + '\x20' + _0xdeef0b[_0x4f7f41]['Address2'] + '\x20' + _0xdeef0b[_0x4f7f41]['HouseNumber'], _0x57887d['data']['attributes']['properties']['$zip'] = '' + _0xdeef0b[_0x4f7f41]['Zip'], _0x57887d['data']['attributes']['properties']['$city'] = '' + _0xdeef0b[_0x4f7f41]['City'], _0x57887d['data']['attributes']['properties']['$country'] = '' + _0xdeef0b[_0x4f7f41]['Country'], _0x57887d['data']['attributes']['properties']['Size'] = '' + _0xdeef0b[_0x4f7f41]['Size'], _0x57887d['data']['attributes']['properties']['$phone_number'] = '' + _0xdeef0b[_0x4f7f41]['Phone'], _0x57887d['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0xdeef0b[_0x4f7f41]['Follower'];
    }
    if (_0x2aae14['useRandomProxy'] = ![])
        var _0x3a02c7 = _0x4ddc9e()[_0x4f7f41]['split'](':');
    else
        var _0x2b0ba4 = Math['round'](Math['random']() * (_0x4ddc9e()['length'] - 0x1)), _0x3a02c7 = _0x4ddc9e()[_0x2b0ba4]['split'](':');
    var _0x2bbc27 = {
        'jar': _0x13c002,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x407230['url'],
        'headers': _0x407230['headers'],
        'body': JSON['stringify'](_0x57887d),
        'proxy': 'http://' + _0x3a02c7[0x2] + ':' + _0x3a02c7[0x3] + '@' + _0x3a02c7[0x0] + ':' + _0x3a02c7[0x1]
    };
    return _0x435560 != 'ver' && (_0x2bbc27['url'] = _0x407230['url'], _0x2bbc27['headers'] = _0x407230['headers']), _0x435560 == 'ver' && (_0x2bbc27['method'] = 'GET'), new Promise(function (_0x3d37dc, _0x13ec7b) {
        callback = async (_0x453f0c, _0x3f1070, _0x50f99f) => {
            !_0x453f0c && _0x3f1070['statusCode'] == 0xca || !_0x453f0c && _0x3f1070['statusCode'] == 0xc8 ? (_0x435560 != 'ver' && await _0x566b34(_0x255413, _0xfebe6d), _0x3d37dc(console['log'](_0xa19cd2['green'](_0xc0ef5e() + '\x20[' + _0x407230['name'] + ']\x20Task\x20' + (_0x4f7f41 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x435560 != 'ver' && (_0x251612[0x0]['title'] = 'Failed\x20entry', _0x251612[0x0]['description'] = '' + _0x453f0c, await _0x566b34(_0x30a729, _0xfebe6d)), _0x13ec7b(console['log'](_0xc0ef5e() + '\x20[' + _0x407230['name'] + ']\x20Task\x20' + (_0x4f7f41 + 0x1) + ':\x20' + _0x453f0c)));
        };
        try {
            _0x435560 != 'ver' && console['log'](_0xc0ef5e() + '\x20[' + _0x407230['name'] + ']\x20Task\x20' + (_0x4f7f41 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x57887d['data']['attributes']['email']), _0x2743eb(_0x2bbc27, callback);
        } catch (_0xaf4d35) {
            console['log'](_0xc0ef5e() + '\x20Task\x20' + (_0x4f7f41 + 0x1) + ':\x20' + _0xaf4d35);
        }
    });
}
;
async function _0x572730() {
    await _0x5075b6(), console['clear']();
    if (_0x2e3ef4 != 'devkey') {
        let _0x3fda63 = await _0x5c2d44['autoUpdate']();
        if (_0x3fda63 === 'yes')
            return _0x199f1c('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x5614c4 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x17c69e(0x2710);
        ;
    }
    await _0x5ec992(_0x5614c4);
    if (_0xb39e41 === ![])
        return console['log']('Closing\x20Browser'), await _0x17c69e(0xbb8);
    else
        try {
            async function _0x1f5bc5() {
                _0x470a51('JRaffles\x20' + _0x2e3ef4), console['clear'](), console['log']('Welcome\x20to\x20' + _0xa19cd2['cyan']('JRaffles();') + '\x20' + _0x2e3ef4), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x21d0f1 = 0x0; _0x21d0f1 < _0x702da2['length']; _0x21d0f1++) {
                    if (_0x702da2[_0x21d0f1]['name'] === 'Reload\x20Settings' || _0x702da2[_0x21d0f1]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x21d0f1 + ')\x20[' + _0x702da2[_0x21d0f1]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x702da2['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x702da2['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x4a793f();
                if (_0x702da2[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x118fd6(_0x702da2[taskModule]['modules']);
                    var _0x3799f2 = _0x702da2[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x46cee7 = await _0xd64c67();
                    await _0x4604b4(_0x46cee7), await _0x31de6a();
                    var _0x4ef2d0 = await _0x2b63bf();
                    return await afewFunction(_0x12fea7[_0x2ee1fe], 'nor', _0x3799f2, _0x4ef2d0, _0x46cee7), _0x1f5bc5();
                } else {
                    if (_0x702da2[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x118fd6(_0x702da2[taskModule]['modules']);
                        var _0x3799f2 = _0x702da2[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x46cee7 = await _0xd64c67(), _0x596076 = await _0x2b63bf();
                            console['log']('Starting\x20' + _0x596076['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x1b5970 = 0x0; _0x1b5970 < _0x596076['length']; _0x1b5970++) {
                                console['log'](_0xc0ef5e() + '\x20[' + _0x3799f2['name'] + ']\x20Task\x20' + (_0x1b5970 + 0x1) + ':\x20Getting\x20Session'), await _0x25cc5c(_0x1b5970, 'nor', _0x3799f2, _0x596076, _0x46cee7), console['log'](_0xc0ef5e() + '\x20[' + _0x3799f2['name'] + ']\x20Sleeping\x20for\x20' + _0x2aae14['MahaDelay'] + '\x20ms'), await _0x17c69e(_0x2aae14['MahaDelay']);
                            }
                            ;
                            return _0x1f5bc5();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x46cee7 = await _0xd64c67();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x5a828f(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x1b5970 = 0x0; _0x1b5970 < links['length']; _0x1b5970++) {
                                    _0x3799f2['url'] = links[_0x1b5970], console['log'](_0xc0ef5e() + '\x20[' + _0x3799f2['name'] + ']\x20Task\x20' + (_0x1b5970 + 0x1) + ':\x20Getting\x20Session'), await _0x25cc5c(_0x1b5970, 'ver', _0x3799f2, _0x596076, _0x46cee7), console['log'](_0xc0ef5e() + '\x20[' + _0x3799f2['name'] + ']\x20Sleeping\x20for\x20' + _0x2aae14['verificationDelay'] + '\x20ms'), await _0x17c69e(_0x2aae14['verificationDelay']);
                                }
                                ;
                                return _0x1f5bc5();
                            }
                        }
                    } else {
                        if (_0x702da2[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x46cee7 = await _0xd64c67(), _0x14b953 = await _0x2b63bf();
                            return await _0x229247(_0x14b953, _0x46cee7), await _0x17c69e(0x1388), _0x1f5bc5();
                        } else {
                            if (_0x702da2[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x118fd6(_0x702da2[taskModule]['modules']);
                                var _0x3799f2 = _0x702da2[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x314054 = await _0x2b63bf();
                                    console['log']('Starting\x20' + _0xa19cd2['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x1b5970 = 0x0; _0x1b5970 < _0x314054['length']; _0x1b5970++) {
                                        console['log'](_0xc0ef5e() + '\x20[' + _0x3799f2['name'] + ']\x20Task\x20' + (_0x1b5970 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x4614dc(_0x1b5970, 'nor', _0x3799f2, _0x314054);
                                        } catch {
                                            console['log'](_0xa19cd2['red'](_0xc0ef5e() + '\x20[' + _0x3799f2['name'] + ']\x20Task\x20' + (_0x1b5970 + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](_0xc0ef5e() + '\x20[' + _0x3799f2['name'] + ']\x20Sleeping\x20for\x20' + _0x2aae14['delay'] + '\x20ms'), await _0x17c69e(_0x2aae14['delay']);
                                    }
                                    return _0x1f5bc5();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x5a828f(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x1b5970 = 0x0; _0x1b5970 < links['length']; _0x1b5970++) {
                                            try {
                                                _0x3799f2['url'] = links[_0x1b5970], console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Task\x20' + (_0x1b5970 + 0x1) + ':\x20Getting\x20Session'), await _0x4614dc(_0x1b5970, 'ver', _0x3799f2), console['log'](_0xc0ef5e() + '\x20[' + _0x702da2[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x2aae14['verificationDelay'] + '\x20ms'), await _0x17c69e(_0x2aae14['verificationDelay']);
                                            } catch (_0x1da366) {
                                                console['log'](_0x1da366);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x1f5bc5();
                                    }
                                }
                                ;
                            } else {
                                if (_0x702da2[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x118fd6(_0x702da2[taskModule]['modules']);
                                    var _0x3799f2 = _0x702da2[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x36101e('https://bouncewear.com/nl/account/register', _0x3799f2);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x702da2[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x118fd6(_0x702da2[taskModule]['modules']);
                                        var _0x3799f2 = _0x702da2[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x46cee7 = await _0xd64c67(), _0x4c39fe = await _0x2b63bf();
                                            return await _0x50cd96('https://patta.nl/account/register', _0x3799f2, _0x4c39fe, _0x46cee7), _0x1f5bc5();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x46cee7 = await _0xd64c67(), _0x4c39fe = await _0x2b63bf();
                                                return await _0x59e015('', _0x3799f2, _0x4c39fe, _0x46cee7), _0x1f5bc5();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x702da2[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await _0x118fd6(_0x702da2[taskModule]['modules']);
                                            var _0x3799f2 = _0x702da2[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x46cee7 = await _0xd64c67(), _0x5e0e28 = await _0x2b63bf();
                                                return await _0x281858('https://www.kickz.com/nl/login/', _0x3799f2, _0x5e0e28, _0x46cee7), _0x1f5bc5();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x46cee7 = await _0xd64c67(), _0x5e0e28 = await _0x2b63bf();
                                                    return await _0x109219(_0x3799f2, _0x5e0e28, _0x46cee7), _0x1f5bc5();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x702da2[taskModule]['name'] == 'JD') {
                                                taskFunction = await _0x118fd6(_0x702da2[taskModule]['modules']);
                                                var _0x3799f2 = _0x702da2[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x46cee7 = await _0xd64c67(), _0x565f5e = await _0x2b63bf();
                                                    return await _0x953b89(_0x3799f2, _0x565f5e, _0x46cee7), _0x1f5bc5();
                                                }
                                            } else {
                                                if (_0x702da2[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0xcb5f97 = 0x0;
                                                    for (const _0x48add4 in _0x2aae14) {
                                                        console['log']('(' + _0xcb5f97 + ')\x20' + _0x48add4 + '\x20:\x20' + _0x2aae14[_0x48add4]), _0xcb5f97++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0xcb5f97 + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x27ef08 = await _0x5c0b89();
                                                    if (_0x27ef08 == _0xcb5f97)
                                                        return _0x1f5bc5();
                                                    console['clear'];
                                                    var _0x31a311 = 0x0;
                                                    for (var _0xe8da9d in _0x2aae14) {
                                                        if (_0x27ef08 == _0x31a311) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0xe8da9d + '\x20:'), _0x2aae14[_0xe8da9d] = await _0x55916b(), _0x4eda22['writeFileSync']('../settings.json', JSON['stringify'](_0x2aae14));
                                                            break;
                                                        } else
                                                            _0x31a311++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await _0x17c69e(0xbb8), _0x1f5bc5();
                                                } else {
                                                    if (_0x702da2[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await _0x5075b6(), _0x1f5bc5();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            _0x702da2[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x1845a1 = await _0x300ad1();
                                                            _0x1845a1 == 'ModuleVoorDeBoys' ? (await _0x4604b4(), await _0x31de6a(), await afewFunction(_0x12fea7[_0x2ee1fe], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x17c69e(0xbb8));
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
            await _0x1f5bc5();
        } catch (_0x5918ed) {
            return console['log'](_0x5918ed), await _0x17c69e(0x3a98);
        }
}
;
_0x470a51('JRaffles\x20' + _0x2e3ef4), _0x5075b6(), _0x572730();