var _0xbf392b = require('exe');
const { execFile: _0x3135eb } = require('child_process'), _0x6c1f16 = require('puppeteer-extra'), _0x379a7e = require('puppeteer-extra-plugin-recaptcha'), _0xd76dde = require('puppeteer-extra-plugin-stealth'), _0x1c3f42 = require('chalk'), _0x592d91 = require('node-bash-title'), _0x1b9f9d = require('fs'), _0x3e0103 = require('axios'), _0x3e24c1 = require('papaparse');
var _0x4163f2 = require('random-name');
const _0x24768a = require('request');
var _0x22aae1 = require('prompt');
const _0x4f96de = _0x24768a['jar']();
var _0x3f1ef7 = {};
const _0x2646a2 = 'https://discord.com/api/webhooks/1044989608708030595/HUZ2q06RoQQ24n_rWWEsL6AgM5yXEeUi2SO9VyOLuQgGBeHIlXpPl9Xr5jYMLXwJKwPS', _0x36a990 = 'https://discord.com/api/webhooks/1045001962262900766/ZXWdz3BSjNO08alABR8ERNBgR2SNcydTW-9XxsFuphHYfwHaojLBu3hkw1Ygi3MxOZdz';
var _0x5bc651;
const _0x148f68 = JSON['parse'](_0x1b9f9d['readFileSync']('../package.json', 'utf-8')), _0x19be17 = _0x148f68['version'];
var _0x42c712, _0x41b88e, _0x5f5608, _0x4485d7, _0x26ceb1, _0x16904c, _0xe4d615;
const _0x3cbe5e = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x102433 = ![];
const _0x1094bf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x584e85 = '0123456789';
var _0x39c9ed = _0x1094bf['split']('');
const _0x49d7bd = require('auto-git-update'), { PageEmittedEvents: _0x434edb } = require('puppeteer'), { getRandomValues: _0x16da1b } = require('crypto'), { resolve: _0x2fb9f0 } = require('path'), _0xa3a4de = {
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
}, _0x182c62 = new _0x49d7bd(_0xa3a4de);
async function _0x2e4fcf() {
    _0x26ceb1 = _0x1b9f9d['readdirSync']('../proxies'), _0x4485d7 = _0x1b9f9d['readdirSync']('../tasks'), _0x3f1ef7 = JSON['parse'](_0x1b9f9d['readFileSync']('../settings.json', 'utf-8')), !_0x3f1ef7['delay'] && (_0x3f1ef7['delay'] = 0x2710, _0x1b9f9d['writeFileSync']('../settings.json', JSON['stringify'](_0x3f1ef7))), !_0x3f1ef7['captchaKey'] && (_0x3f1ef7['captchaKey'] = '', _0x1b9f9d['writeFileSync']('../settings.json', JSON['stringify'](_0x3f1ef7))), !_0x3f1ef7['useRandomProxy'] && (_0x3f1ef7['useRandomProxy'] = ![], _0x1b9f9d['writeFileSync']('../settings.json', JSON['stringify'](_0x3f1ef7))), !_0x3f1ef7['webhook'] && (_0x3f1ef7['webhook'] = '', _0x1b9f9d['writeFileSync']('../settings.json', JSON['stringify'](_0x3f1ef7))), _0x5bc651 = _0x3f1ef7['webhook'], _0x16904c = _0x3f1ef7['licenseKey'];
}
let _0xbb7d05, _0x2dcc75 = [], _0x1476c9;
const _0x280bcd = _0x185d5e => new Promise(_0x82d4ab => setTimeout(_0x82d4ab, _0x185d5e));
async function _0x208337(_0x115d4c) {
    return _0x3e0103['get']('https://api.hyper.co/v4/licenses/' + _0x115d4c, { 'headers': { 'Authorization': 'Bearer\x20' + _0x3cbe5e } })['then'](_0x8c429d => _0x8c429d['data'])['catch'](() => null);
}
;
async function _0x116e92(_0x3864db) {
    console['clear'](), console['log']('Checking\x20license\x20' + _0x16904c + '...'), await _0x280bcd(0x5dc);
    const _0xb67e6e = await _0x208337(_0x3864db);
    _0xe4d615 = JSON['stringify'](_0xb67e6e['user']['username']);
    if (!_0xb67e6e)
        return console['log']('License\x20not\x20found');
    if (!_0xb67e6e['user'])
        return console['log']('License\x20not\x20bound');
    return _0xb67e6e['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x102433 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x102433 = ![]);
}
async function _0x19b19b() {
    var _0xc63a75 = await _0x22aae1['get']('Module');
    return console['clear'](), _0xc63a75['Module'];
}
;
async function _0x1a321f() {
    var _0x20c85c = await _0x22aae1['get']('Setting');
    return console['clear'](), _0x20c85c['Setting'];
}
async function _0x22bd04() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x17d316 = 0x0; _0x17d316 < _0x4485d7['length']; _0x17d316++) {
        console['log']('\x20(' + _0x17d316 + ')\x20' + _0x4485d7[_0x17d316]);
    }
    console['log']('');
    var _0x578136 = await _0x22aae1['get']('Task'), _0x25b887 = _0x1b9f9d['readFileSync']('../tasks/' + _0x4485d7[_0x578136['Task']], 'utf-8');
    return _0x5f5608 = _0x3e24c1['parse'](_0x25b887, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x1c3f42['blue'](_0x4485d7[_0x578136['Task']])), _0x42c712 = _0x4485d7[_0x578136['Task']], _0x5f5608;
}
async function _0x14a98b() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0xd16a06 = 0x0; _0xd16a06 < _0x26ceb1['length']; _0xd16a06++) {
        console['log']('\x20(' + _0xd16a06 + ')\x20' + _0x26ceb1[_0xd16a06]);
    }
    console['log']('');
    var _0x5dbdd9 = await _0x22aae1['get']('Proxies'), _0x1e8571 = _0x1b9f9d['readFileSync']('../proxies/' + _0x26ceb1[_0x5dbdd9['Proxies']], 'utf-8')['split']('\x0a');
    let _0x2438f9 = _0x1e8571['map']((_0x2c1ce1, _0x4d19e3) => {
        sanatizeProxy = _0x2c1ce1['replace']('\x0d', '');
        if (_0x1e8571[_0x4d19e3 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x41b88e = _0x26ceb1[_0x5dbdd9['Proxies']], console['clear'](), _0x2438f9;
}
async function _0x40b810() {
    var _0x55a255 = await _0x22aae1['get']('Value');
    return console['clear'](), _0x55a255['Value'];
}
async function _0x496716(_0x1446d3) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x56ecfb = 0x0; _0x56ecfb < _0x1446d3['length']; _0x56ecfb++) {
        console['log']('\x20(' + _0x56ecfb + ')\x20[' + _0x1446d3[_0x56ecfb]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x3a6a93 = await _0x22aae1['get']('Module');
    return _0x3a6a93['Module'];
}
async function _0x13acf5() {
    var _0x2567bd = await _0x22aae1['get']('Password');
    return console['clear'](), _0x2567bd['Password'];
}
;
async function _0x4befe2() {
    var _0x4d2871 = await _0x22aae1['get']('Links');
    return _0x4d2871['Links'];
}
;
async function _0x5eb999() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x5c468f = 0x0; _0x5c468f < _0x2dcc75['length']; _0x5c468f++) {
        console['log']('\x20(' + _0x5c468f + ')\x20' + _0x2dcc75[_0x5c468f]);
    }
    ;
    console['log']();
    let _0x53ea17 = await _0x22aae1['get']('Product');
    console['clear'](), _0x1476c9 = _0x53ea17['Product'];
    return;
}
;
function _0x62f9f6() {
    var _0x567ba3 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x567ba3;
}
;
const _0x230263 = [
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
async function _0x196347(_0x2208ed, _0x4e9203) {
    let _0x2b5076 = { 'headers': { 'content-type': 'application/json' } };
    await _0x3e0103['post'](_0x2208ed, _0x4e9203, _0x2b5076);
}
;
async function _0x47c427(_0x3ed094, _0x249d0f) {
    var _0x3b6e20 = _0x3ed094[_0x249d0f]['Address1']['split'](''), _0x2bf29 = _0x3ed094[_0x249d0f]['Address2']['split'](''), _0x4826a8 = _0x3ed094[_0x249d0f]['Email']['split']('@');
    for (var _0x328cf2 = 0x0; _0x328cf2 < _0x3b6e20['length']; _0x328cf2++) {
        if (_0x3b6e20[_0x328cf2] == 'X') {
            var _0x196c9a = Math['round'](Math['random']() * (_0x1094bf['length'] - 0x1));
            _0x3b6e20[_0x328cf2] = _0x39c9ed[_0x196c9a];
        }
    }
    ;
    for (var _0x328cf2 = 0x0; _0x328cf2 < _0x2bf29['length']; _0x328cf2++) {
        if (_0x2bf29[_0x328cf2] == 'X') {
            var _0x196c9a = Math['round'](Math['random']() * (_0x1094bf['length'] - 0x1));
            _0x2bf29[_0x328cf2] = _0x39c9ed[_0x196c9a];
        }
    }
    ;
    _0x3ed094[_0x249d0f]['FirstName'] == 'RANDOM' && (_0x3ed094[_0x249d0f]['FirstName'] = _0x4163f2['first']());
    _0x3ed094[_0x249d0f]['LastName'] == 'RANDOM' && (_0x3ed094[_0x249d0f]['LastName'] = _0x4163f2['last']());
    _0x4826a8[0x0] == 'RANDOM' ? _0x4826a8[0x0] = '' + _0x4163f2['first']() + _0x4163f2['last']() + '@' : _0x4826a8[0x0] = _0x4826a8[0x0] + '@';
    _0x3ed094[_0x249d0f]['Email'] = _0x4826a8['join'](''), _0x3ed094[_0x249d0f]['Address1'] = _0x3b6e20['join'](''), _0x3ed094[_0x249d0f]['Address2'] = _0x2bf29['join']('');
    return;
}
;
function _0x4986e1() {
    let _0xe55006 = proxyFile['split']('\x0a'), _0x4fac53 = _0xe55006['map']((_0x4409fc, _0x549f8d) => {
        sanatizeProxy = _0x4409fc['replace']('\x0d', '');
        if (_0xe55006[_0x549f8d + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4fac53;
}
;
async function _0x34e211() {
    var _0x58c296 = _0x4986e1()[0x1]['split'](':');
    const _0x562eeb = await _0x6c1f16['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x58c296[0x0] + ':' + _0x58c296[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x6505c1 = await _0x562eeb['newPage']();
        await _0x6505c1['authenticate']({
            'username': '' + _0x58c296[0x2],
            'password': '' + _0x58c296[0x3]
        }), console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x6505c1['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x6505c1['setRequestInterception'](!![]), _0x6505c1['on']('request', _0x2f9e52 => {
            _0x2f9e52['resourceType']() === 'image' || _0x2f9e52['resourceType']() === 'font' || _0x2f9e52['resourceType']() === 'media' ? _0x2f9e52['abort']() : _0x2f9e52['continue']();
        }), await _0x6505c1['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x6505c1['waitForTimeout'](0xbb8), await _0x6505c1['waitForSelector']('.product-card');
        const _0x4df19 = await _0x6505c1['$$eval']('a.product-card', _0x4f7882 => {
            return _0x4f7882['map'](_0x323418 => _0x323418['href']);
        });
        return _0x2dcc75 = _0x4df19;
    } catch (_0x5442c4) {
        console['log']('\x20' + _0x5442c4);
    } finally {
        _0x562eeb['close'](), console['clear']();
    }
}
;
async function _0x4c92c2(_0x1b2bdd, _0x4e628f, _0x1f3349, _0x154acd, _0x39a11d) {
    await _0x47c427(_0x154acd, _0x1b2bdd);
    var _0x437fe1 = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0xe4d615
            },
            {
                'name': 'Size',
                'value': '' + _0x154acd[_0x1b2bdd]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x3f1ef7['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x19be17
            }
        ]
    }];
    const _0x2adefa = { 'embeds': _0x437fe1 };
    if (_0x3f1ef7['useRandomProxy'] = ![])
        var _0x35ff2d = _0x39a11d[_0x1b2bdd]['split'](':');
    else
        var _0x2f4b8f = Math['round'](Math['random']() * (_0x39a11d['length'] - 0x1)), _0x35ff2d = _0x39a11d[_0x2f4b8f]['split'](':');
    var _0x5349fd = _0x1f3349['data'];
    _0x4e628f == 'exp' ? _0x5349fd['data']['attributes']['email'] = '' + _0x154acd[_0x1b2bdd]['FirstName'] + _0x154acd[_0x1b2bdd]['LastName'] + _0x3f1ef7['catchall'] : _0x5349fd['data']['attributes']['email'] = '' + _0x154acd[_0x1b2bdd]['Email'];
    _0x5349fd['data']['attributes']['properties']['$first_name'] = '' + _0x154acd[_0x1b2bdd]['FirstName'], _0x5349fd['data']['attributes']['properties']['$last_name'] = '' + _0x154acd[_0x1b2bdd]['LastName'], _0x5349fd['data']['attributes']['properties']['$address1'] = _0x154acd[_0x1b2bdd]['Address1'] + '\x20' + _0x154acd[_0x1b2bdd]['Address2'], _0x5349fd['data']['attributes']['properties']['$zip'] = '' + _0x154acd[_0x1b2bdd]['Zip'], _0x5349fd['data']['attributes']['properties']['$city'] = '' + _0x154acd[_0x1b2bdd]['City'], _0x5349fd['data']['attributes']['properties']['$country'] = '' + _0x154acd[_0x1b2bdd]['Country'], _0x5349fd['data']['attributes']['properties']['Size'] = '' + _0x154acd[_0x1b2bdd]['Size'], _0x5349fd['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x154acd[_0x1b2bdd]['Follower'];
    var _0xe45e9c = {
        'jar': _0x4f96de,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x1f3349['url'],
        'headers': _0x1f3349['headers'],
        'body': JSON['stringify'](_0x5349fd),
        'proxy': 'http://' + _0x35ff2d[0x2] + ':' + _0x35ff2d[0x3] + '@' + _0x35ff2d[0x0] + ':' + _0x35ff2d[0x1]
    };
    return _0x4e628f === 'ver' && (_0xe45e9c['method'] = 'GET'), new Promise(function (_0x2e2b48, _0x3eb44f) {
        callback = async (_0x53e061, _0x4b8a0, _0x2bbb4b) => {
            !_0x53e061 && _0x4b8a0['statusCode'] == 0xca || !_0x53e061 && _0x4b8a0['statusCode'] == 0xc8 ? _0x2e2b48(console['log'](_0x1c3f42['green'](_0x62f9f6() + '\x20[' + _0x1f3349['name'] + ']\x20Task\x20' + (_0x1b2bdd + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x437fe1[0x0]['title'] = 'Failed\x20entry', _0x437fe1[0x0]['description'] = '' + _0x53e061, await _0x196347(_0x36a990, _0x2adefa), _0x3eb44f(console['log'](_0x62f9f6() + '\x20[' + _0x1f3349['name'] + ']\x20Task\x20' + (_0x1b2bdd + 0x1) + ':\x20' + _0x53e061)));
        };
        try {
            _0x4e628f === 'ver' ? console['log'](_0x62f9f6() + '\x20[' + _0x1f3349['name'] + ']\x20Task\x20' + (_0x1b2bdd + 0x1) + ':\x20Verifying.') : console['log'](_0x62f9f6() + '\x20[' + _0x1f3349['name'] + ']\x20Task\x20' + (_0x1b2bdd + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5349fd['data']['attributes']['email']), _0x24768a(_0xe45e9c, callback);
        } catch (_0x246368) {
            console['log'](_0x62f9f6() + '\x20Task\x20' + (_0x1b2bdd + 0x1) + ':\x20' + _0x246368);
        }
    });
}
;
async function _0x3b5a7a(_0x50c789, _0x121042) {
    var _0x5b2e2c;
    _0x6c1f16['use'](_0xd76dde()), _0x6c1f16['use'](_0x379a7e({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3f1ef7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2c82db = 0x0; _0x2c82db < _0x50c789['length']; _0x2c82db++) {
        await _0x47c427(_0x50c789, _0x2c82db);
        if (_0x50c789[_0x2c82db]['Email'] == '' || _0x50c789[_0x2c82db]['FirstName'] == '' || _0x50c789[_0x2c82db]['LastName'] == '' || _0x50c789[_0x2c82db]['Country'] == '' || _0x50c789[_0x2c82db]['Size'] == '' || _0x50c789[_0x2c82db]['Address1'] == '' || _0x50c789[_0x2c82db]['Zip'] == '') {
            console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        console['log'](_0x50c789[_0x2c82db]['Url']);
        async function _0x1f4dd2() {
            var _0x1a3626 = await _0x3e0103['get']('https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_')['then'](_0xc7e923 => _0xc7e923['data'])['catch'](() => undefined);
            console['log'](_0x1a3626);
            var _0x345f6b = _0x1a3626['sizeSets']['Men']['sizes'];
            _0x345f6b['length'] == 0x0 && (_0x345f6b = _0x1a3626['sizeSets']['Women']['sizes'], _0x345f6b['length'] == 0x0 && (_0x345f6b = _0x1a3626['sizeSets']['Unisex']['sizes'], _0x345f6b['length'] == 0x0 && (_0x345f6b = _0x1a3626['sizeSets']['Kids']['sizes'])));
            ;
            async function _0xf8d474() {
                for (var _0x5554e9 = 0x0; _0x5554e9 < _0x345f6b['length']; _0x5554e9++) {
                    if (_0x345f6b[_0x5554e9]['eur'] == _0x50c789[_0x2c82db]['Size'])
                        return _0x5b2e2c = _0x345f6b[_0x5554e9]['id'], console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
                }
                return console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x20Size\x20' + _0x50c789[_0x2c82db]['Size'] + '\x20not\x20found'), ![];
            }
            ;
            let _0x2b6b66 = await _0xf8d474();
            if (_0x2b6b66 == ![])
                return ![];
        }
        let _0x8a5936 = await _0x1f4dd2();
        if (_0x8a5936 == ![])
            continue;
        if (_0x50c789[_0x2c82db]['Email'] == '' || _0x50c789[_0x2c82db]['FirstName'] == '' || _0x50c789[_0x2c82db]['LastName'] == '' || _0x50c789[_0x2c82db]['Country'] == '' || _0x50c789[_0x2c82db]['Size'] == '' || _0x50c789[_0x2c82db]['Address1'] == '' || _0x50c789[_0x2c82db]['Zip'] == '' || _0x50c789[_0x2c82db]['Phone'] == '') {
            console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x23bc64 = 'https://releases.footshop.com/register/' + _0x50c789[_0x2c82db]['Url'] + '/Men/' + _0x5b2e2c;
        if (_0x3f1ef7['useRandomProxy'] = ![])
            var _0x98e0d0 = _0x121042[_0x2c82db]['split'](':');
        else
            var _0x4fec34 = Math['round'](Math['random']() * (_0x121042['length'] - 0x1)), _0x98e0d0 = _0x121042[_0x4fec34]['split'](':');
        const _0x5e8a2b = await _0x6c1f16['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x98e0d0[0x0] + ':' + _0x98e0d0[0x1]]
        });
        try {
            const _0x107a20 = await _0x5e8a2b['newPage']();
            await _0x107a20['authenticate']({
                'username': '' + _0x98e0d0[0x2],
                'password': '' + _0x98e0d0[0x3]
            }), console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x20Getting\x20Session'), await _0x107a20['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x107a20['setRequestInterception'](!![]), _0x107a20['on']('request', _0x2a3544 => {
                _0x2a3544['resourceType']() === 'image' || _0x2a3544['resourceType']() === 'font' || _0x2a3544['resourceType']() === 'media' ? _0x2a3544['abort']() : _0x2a3544['continue']();
            }), await _0x107a20['goto']('' + _0x23bc64 + _0x5b2e2c), await _0x107a20['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x107a20['type']('input[name=\x22email\x22]', '' + _0x50c789[_0x2c82db]['Email']), await _0x280bcd(0x640), await _0x107a20['type']('input[name=\x22phone\x22]', '' + _0x50c789[_0x2c82db]['Phone']), await _0x280bcd(0x4b0), await _0x107a20['click']('button.btn.continue-button__1RtsS'), await _0x280bcd(0x4b0);
            try {
                await _0x107a20['type']('input[name=\x22firstName\x22]', '' + _0x50c789[_0x2c82db]['FirstName']), await _0x280bcd(0x258);
            } catch {
                console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x20Duplicate\x20Entry'));
                continue;
            }
            await _0x107a20['type']('input[name=\x22lastName\x22]', '' + _0x50c789[_0x2c82db]['LastName']), await _0x280bcd(0xc8), await _0x107a20['type']('input[name=\x22instagramUsername\x22]', '' + _0x50c789[_0x2c82db]['Follower']), await _0x280bcd(0x4b0), await _0x107a20['click']('button.btn.continue-button__1RtsS'), await _0x280bcd(0x3e8), console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x107a20['select']('select[name=\x22country\x22]', '' + _0x50c789[_0x2c82db]['Country']), await _0x280bcd(0x2bc), await _0x107a20['type']('input[name=\x22streetName\x22]', '' + _0x50c789[_0x2c82db]['Address1']), await _0x280bcd(0x258), await _0x107a20['type']('input[name=\x22houseNumber\x22]', '' + _0x50c789[_0x2c82db]['HouseNumber'] + _0x50c789[_0x2c82db]['Address2']), await _0x280bcd(0xc8), await _0x107a20['type']('input[name=\x22postalCode\x22]', '' + _0x50c789[_0x2c82db]['Zip']), await _0x280bcd(0x1f4), await _0x107a20['type']('input[name=\x22city\x22]', '' + _0x50c789[_0x2c82db]['City']), await _0x280bcd(0x4b0), await _0x107a20['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x280bcd(0x4b0), await _0x107a20['click']('button.btn.continue-button__1RtsS'), await _0x280bcd(0x4b0), console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x107a20['solveRecaptchas'](), console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x280bcd(0xbb8), await _0x107a20['click']('button.btn.continue-button__1RtsS'), await _0x280bcd(0x1388), console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x107a20['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x107a20['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x280bcd(0x4b0), await _0x107a20['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x50c789[_0x2c82db]['CardNumber']), await _0x280bcd(0x320), await _0x107a20['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x50c789[_0x2c82db]['ExpiryDate']), await _0x280bcd(0x4b0), await _0x107a20['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x50c789[_0x2c82db]['CVV']), await _0x280bcd(0x226), await _0x107a20['type']('input[name=\x22holderName\x22]', '' + _0x50c789[_0x2c82db]['NameOnCard']), await _0x280bcd(0x226), await _0x107a20['click']('button.adyen-checkout__button'), console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x107a20['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x280bcd(0xbb8), console['log'](_0x1c3f42['green'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch {
                console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x1d04bf) {
            console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2c82db + 0x1) + '\x20:\x20' + _0x1d04bf);
        } finally {
            _0x5e8a2b['close'](), console['log']('Waiting\x20for\x20' + _0x3f1ef7['footshopDelay'] + '\x20ms'), await _0x280bcd(_0x3f1ef7['footshopDelay']);
        }
    }
}
afewFunction = async (_0x58c15d, _0x347019, _0x1d19e0, _0x32b241, _0x100a2b) => {
    for (var _0x31bf90 = 0x0; _0x31bf90 < _0x32b241['length']; _0x31bf90++) {
        _0x592d91(_0x1d19e0['name'] + '\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20/\x20' + _0x32b241['length'] + '\x20||\x20File:\x20' + _0x42c712 + '\x20Proxies:\x20' + _0x41b88e), await _0x47c427(_0x32b241, _0x31bf90);
        var _0x139ff6 = [{
            'type': 'rich',
            'title': 'Succesful\x20AFEW\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xe4d615
                },
                {
                    'name': 'Product',
                    'value': '' + _0x58c15d
                },
                {
                    'name': 'Size',
                    'value': '' + _0x32b241[_0x31bf90]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x3f1ef7['AfewDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x19be17
                }
            ]
        }];
        const _0x188dd6 = { 'embeds': _0x139ff6 };
        if (_0x32b241[_0x31bf90]['Email'] == '' || _0x32b241[_0x31bf90]['FirstName'] == '' || _0x32b241[_0x31bf90]['LastName'] == '' || _0x32b241[_0x31bf90]['Country'] == '' || _0x32b241[_0x31bf90]['Size'] == '' || _0x32b241[_0x31bf90]['Address1'] == '' || _0x32b241[_0x31bf90]['Zip'] == '') {
            console['log'](_0x62f9f6() + '\x20[' + _0x1d19e0['name'] + ']\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3f1ef7['useRandomProxy'] = ![])
            var _0x18386a = _0x100a2b[_0x31bf90]['split'](':');
        else
            var _0x55f833 = Math['round'](Math['random']() * (_0x100a2b['length'] - 0x1)), _0x18386a = _0x100a2b[_0x55f833]['split'](':');
        const _0x1c8c71 = await _0x6c1f16['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x18386a[0x0] + ':' + _0x18386a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3b2ac1 = await _0x1c8c71['newPage']();
            await _0x3b2ac1['setDefaultNavigationTimeout'](0x1d4c0), await _0x3b2ac1['authenticate']({
                'username': '' + _0x18386a[0x2],
                'password': '' + _0x18386a[0x3]
            }), console['log'](_0x62f9f6() + '\x20[' + _0x1d19e0['name'] + ']\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3b2ac1['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3b2ac1['setRequestInterception'](!![]), _0x3b2ac1['on']('request', _0x3ee62f => {
                _0x3ee62f['resourceType']() === 'image' || _0x3ee62f['resourceType']() === 'font' || _0x3ee62f['resourceType']() === 'media' ? _0x3ee62f['abort']() : _0x3ee62f['continue']();
            }), await _0x3b2ac1['goto'](_0x58c15d, { 'waitUntil': 'networkidle2' }), console['log'](_0x62f9f6() + '\x20[' + _0x1d19e0['name'] + ']\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x3b2ac1['waitForTimeout'](0xfa0), console['log'](_0x62f9f6() + '\x20[' + _0x1d19e0['name'] + ']\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x3b2ac1['waitForTimeout'](0x320);
            if (_0x32b241[_0x31bf90]['Size'] == 'RANDOM') {
                console['log'](_0x62f9f6() + '\x20[' + _0x1d19e0['name'] + ']\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x27e2e6 = await _0x3b2ac1['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x19c9e4 => {
                    return _0x19c9e4['map'](_0x4bdf73 => _0x4bdf73['href']);
                });
                var _0x428bb9 = Math['round'](Math['random']() * (_0x27e2e6['length'] - 0x1));
                await _0x3b2ac1['goto']('' + _0x27e2e6[_0x428bb9]);
            } else {
                console['log'](_0x62f9f6() + '\x20[' + _0x1d19e0['name'] + ']\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x32b241[_0x31bf90]['Size']);
                try {
                    const _0x5d6b7f = await _0x3b2ac1['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x32b241[_0x31bf90]['Size'] + '\x22]\x20>\x20a', _0x3b85a8 => {
                        return _0x3b85a8['map'](_0x307e57 => _0x307e57['href']);
                    });
                    await _0x3b2ac1['goto']('' + _0x5d6b7f[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x4bc1cf) {
                    console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x1d19e0['name'] + ']\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20:\x20' + _0x4bc1cf + '\x20Size\x20not\x20found')), _0x139ff6[0x0]['title'] = 'Failed\x20entry', _0x139ff6[0x0]['description'] = 'Size\x20not\x20found', await _0x196347(_0x36a990, _0x188dd6);
                    continue;
                }
                try {
                    await _0x3b2ac1['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x32b241[_0x31bf90]['Size'] + '\x22]'), await _0x3b2ac1['waitForTimeout'](0x320), await _0x3b2ac1['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x32b241[_0x31bf90]['Size'] + '\x22]');
                } catch (_0x58a6ec) {
                    console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x1d19e0['name'] + ']\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20:\x20' + _0x58a6ec + '\x20Size\x20not\x20found')), _0x139ff6[0x0]['title'] = 'Failed\x20entry', _0x139ff6[0x0]['description'] = 'Size\x20not\x20found', await _0x196347(_0x36a990, _0x188dd6);
                    continue;
                }
            }
            await _0x3b2ac1['waitForTimeout'](0x258), await _0x3b2ac1['type']('#raffle-instagram', '' + _0x32b241[_0x31bf90]['Follower'], { 'delay': 0x64 }), await _0x3b2ac1['waitForTimeout'](0x384), await _0x3b2ac1['click']('#raffle-terms'), await _0x3b2ac1['waitForTimeout'](0x384), await _0x3b2ac1['evaluate'](() => {
                const _0xd2c012 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0xd2c012['click']();
            }), await _0x3b2ac1['waitForTimeout'](0xbb8), await _0x3b2ac1['waitForSelector']('#checkout_email'), await _0x280bcd(0x3e8), console['log'](_0x62f9f6() + '\x20[' + _0x1d19e0['name'] + ']\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x347019 == 'sec' ? await _0x3b2ac1['type']('#checkout_email', '' + _0x32b241[_0x31bf90]['FirstName'] + _0x32b241[_0x31bf90]['LastName'] + _0x3f1ef7['catchall'], 0x32) : await _0x3b2ac1['type']('#checkout_email', '' + _0x32b241[_0x31bf90]['Email'], 0x32);
            await _0x280bcd(0x320), await _0x3b2ac1['select']('#checkout_shipping_address_country', '' + _0x32b241[_0x31bf90]['Country']), await _0x3b2ac1['waitForTimeout'](0x258), await _0x3b2ac1['type']('#checkout_shipping_address_first_name', '' + _0x32b241[_0x31bf90]['FirstName']), await _0x3b2ac1['waitForTimeout'](0x320), await _0x3b2ac1['type']('#checkout_shipping_address_last_name', '' + _0x32b241[_0x31bf90]['LastName']), await _0x3b2ac1['waitForTimeout'](0x2bc), await _0x3b2ac1['type']('#checkout_shipping_address_address1', _0x32b241[_0x31bf90]['Address1'] + '\x20' + _0x32b241[_0x31bf90]['HouseNumber']), await _0x3b2ac1['waitForTimeout'](0x2bc), await _0x3b2ac1['type']('#checkout_shipping_address_address2', '' + _0x32b241[_0x31bf90]['Address2']), await _0x3b2ac1['waitForTimeout'](0x2bc);
            _0x32b241[_0x31bf90]['Postcode'] == undefined ? await _0x3b2ac1['type']('#checkout_shipping_address_zip', '' + _0x32b241[_0x31bf90]['Zip']) : await _0x3b2ac1['type']('#checkout_shipping_address_zip', '' + _0x32b241[_0x31bf90]['Postcode']);
            await _0x3b2ac1['waitForTimeout'](0x2bc), await _0x3b2ac1['type']('#checkout_shipping_address_city', '' + _0x32b241[_0x31bf90]['City']), await _0x3b2ac1['waitForTimeout'](0x2bc), console['log'](_0x62f9f6() + '\x20[' + _0x1d19e0['name'] + ']\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x3b2ac1['evaluate'](() => {
                const _0xc4e1c3 = document['querySelector']('#continue_button');
                for (var _0x4e2960 = 0x0; _0x4e2960 < 0x5; _0x4e2960++) {
                    if (_0xc4e1c3) {
                        _0xc4e1c3['click']();
                        break;
                    } else
                        _0x280bcd(0xfa0);
                }
            }), await _0x3b2ac1['waitForTimeout'](0x1194), await _0x3b2ac1['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), _0x3b2ac1['evaluate'](() => {
                const _0x320410 = document['querySelector']('#continue_button');
                for (var _0x30103f = 0x0; _0x30103f < 0x5; _0x30103f++) {
                    if (_0x320410) {
                        _0x320410['click']();
                        break;
                    } else
                        _0x280bcd(0xfa0);
                }
            }), await _0x3b2ac1['waitForTimeout'](0x7d0), console['log'](_0x62f9f6() + '\x20[' + _0x1d19e0['name'] + ']\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3b2ac1['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x3b2ac1['evaluate'](() => {
                const _0x546216 = document['querySelector']('#continue_button');
                for (var _0x4d2480 = 0x0; _0x4d2480 < 0x5; _0x4d2480++) {
                    if (_0x546216) {
                        _0x546216['click']();
                        break;
                    } else
                        _0x280bcd(0xfa0);
                }
            }), await _0x3b2ac1['waitForTimeout'](0x1194), await _0x3b2ac1['waitForSelector']('#continue_button'), _0x3b2ac1['evaluate'](() => {
                const _0x430145 = document['querySelector']('#continue_button');
                for (var _0x138668 = 0x0; _0x138668 < 0x5; _0x138668++) {
                    if (_0x430145) {
                        _0x430145['click']();
                        break;
                    } else
                        _0x280bcd(0xfa0);
                }
            });
            try {
                await _0x3b2ac1['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x348938) {
                console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x1d19e0['name'] + ']\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x348938));
            }
            console['log'](_0x1c3f42['green'](_0x62f9f6() + '\x20[' + _0x1d19e0['name'] + ']\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x196347(_0x2646a2, _0x188dd6);
        } catch (_0x216914) {
            console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x1d19e0['name'] + ']\x20Task\x20' + (_0x31bf90 + 0x1) + '\x20:\x20' + _0x216914)), _0x139ff6[0x0]['title'] = 'Failed\x20entry', _0x139ff6[0x0]['description'] = '' + _0x216914, await _0x196347(_0x36a990, _0x188dd6);
        } finally {
            _0x1c8c71 && _0x1c8c71['close']();
            if (_0x31bf90 + 0x1 == _0x32b241['length']) {
                console['log'](_0x1c3f42['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x280bcd(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x3f1ef7['AfewDelay'] + '\x20ms'), await _0x280bcd(_0x3f1ef7['AfewDelay']);
        }
    }
};
async function _0x1085c1(_0x53d08c, _0x50ea17, _0x4a5576) {
    _0x6c1f16['use'](_0xd76dde()), _0x6c1f16['use'](_0x379a7e({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3f1ef7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xf379cd = 0x0; _0xf379cd < _0x4a5576['length']; _0xf379cd++) {
        _0x592d91(_0x50ea17['name'] + '\x20Task\x20' + (_0xf379cd + 0x1) + '\x20/\x20' + _0x4a5576['length'] + '\x20||\x20File:\x20' + _0x42c712 + '\x20Proxies:\x20' + _0x41b88e);
        var _0x2713fb = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xe4d615
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x3f1ef7['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x19be17
                }
            ]
        }];
        const _0x1fe52c = { 'embeds': _0x2713fb };
        await _0x47c427(_0x4a5576, _0xf379cd);
        if (_0x4a5576[_0xf379cd]['Email'] == '' || _0x4a5576[_0xf379cd]['Password'] == '' || _0x4a5576[_0xf379cd]['FirstName'] == '' || _0x4a5576[_0xf379cd]['LastName'] == '') {
            console['log'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3f1ef7['useRandomProxy'] = ![])
            var _0x26eaa6 = _0x4986e1()[_0xf379cd]['split'](':');
        else
            var _0x4287f1 = Math['round'](Math['random']() * (_0x4986e1()['length'] - 0x1)), _0x26eaa6 = _0x4986e1()[_0x4287f1]['split'](':');
        const _0x49ff35 = await _0x6c1f16['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x26eaa6[0x0] + ':' + _0x26eaa6[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x29870f = await _0x49ff35['newPage']();
            await _0x29870f['authenticate']({
                'username': '' + _0x26eaa6[0x2],
                'password': '' + _0x26eaa6[0x3]
            }), console['log'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x29870f['setRequestInterception'](!![]), _0x29870f['on']('request', _0x37bd24 => {
                _0x37bd24['resourceType']() === 'image' || _0x37bd24['resourceType']() === 'font' || _0x37bd24['resourceType']() === 'media' ? _0x37bd24['abort']() : _0x37bd24['continue']();
            }), await _0x29870f['goto'](_0x53d08c), await _0x280bcd(0xbb8), console['log'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x29870f['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x29870f['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x29870f['waitForSelector']('#button-register'), await _0x280bcd(0x7d0), await _0x29870f['evaluate'](() => {
                const _0x2fd210 = document['querySelector']('#button-register');
                _0x2fd210['click']();
            }), console['log'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x280bcd(0x1388), await _0x29870f['waitForSelector']('#customer_salutation'), await _0x29870f['select']('#customer_salutation', 'mr'), await _0x280bcd(0x7d0), await _0x29870f['waitForSelector']('#customer_firstname'), await _0x29870f['type']('#customer_firstname', '' + _0x4a5576[_0xf379cd]['FirstName']), await _0x280bcd(0x352), await _0x29870f['waitForSelector']('#customer_lastname'), await _0x29870f['type']('#customer_lastname', '' + _0x4a5576[_0xf379cd]['LastName']), await _0x280bcd(0x352), await _0x29870f['type']('#email-input', '' + _0x4a5576[_0xf379cd]['Email']), await _0x280bcd(0x352), await _0x29870f['type']('#email-confirm-input', '' + _0x4a5576[_0xf379cd]['Email']), await _0x280bcd(0x352), await _0x29870f['type']('#register-password', '' + _0x4a5576[_0xf379cd]['Password']), await _0x280bcd(0x352), await _0x29870f['type']('#password-confirm', '' + _0x4a5576[_0xf379cd]['Password']), await _0x280bcd(0x352), console['log'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x29870f['click']('#consent'), await _0x280bcd(0x1f4);
            const _0x57e0ea = await _0x29870f['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x57e0ea) {
                console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x29870f['click']('#buttonRegister');
            try {
                await _0x29870f['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x1c3f42['yellow'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20Account\x20' + _0x4a5576[_0xf379cd]['Email'] + '\x20Generated!')), console['log'](_0x1c3f42['yellow'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x4a5576[_0xf379cd]['Email'])), await _0x280bcd(0x4b0);
            async function _0x53b5c5() {
                console['log'](_0x1c3f42['yellow'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x146f77 = await _0x22aae1['get']('Code');
                return _0x146f77['Code'];
            }
            ;
            code = await _0x53b5c5(), _0x280bcd(0x320), console['log'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20Verifying..'), await _0x29870f['type']('#verificationCode', code), await _0x280bcd(0x1f4), await _0x29870f['click']('#buttonVerify'), await _0x280bcd(0x190), await _0x29870f['click']('#buttonVerify'), await _0x280bcd(0x3e8);
            try {
                await _0x29870f['waitForSelector']('div.b-user_greeting'), console['log'](_0x1c3f42['green'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20Account\x20' + _0x4a5576[_0xf379cd]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x1b9f9d['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x4a5576[_0xf379cd]['Email'] + ',' + _0x4a5576[_0xf379cd]['Password'] + ','), console['log'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20Account\x20' + _0x4a5576[_0xf379cd]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27'), await _0x196347(_0x2646a2, _0x1fe52c);
            } catch {
                console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x2b34cd) {
            console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x50ea17['name'] + ']\x20Task\x20' + (_0xf379cd + 0x1) + '\x20:\x20' + _0x2b34cd)), _0x2713fb[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x2713fb[0x0]['description'] = '' + _0x2b34cd, await _0x196347(_0x36a990, _0x1fe52c);
        } finally {
            _0x49ff35 && _0x49ff35['close'](), console['log']('Waiting\x20for\x20' + _0x3f1ef7['delay'] + '\x20ms'), await _0x280bcd(_0x3f1ef7['delay']);
        }
    }
}
async function _0x5f2f16(_0x179a0b, _0x294120) {
    _0x6c1f16['use'](_0xd76dde()), _0x6c1f16['use'](_0x379a7e({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3f1ef7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xb2fac0 = 0x0; _0xb2fac0 < _0x294120['length']; _0xb2fac0++) {
        _0x592d91(_0x179a0b['name'] + '\x20Task\x20' + (_0xb2fac0 + 0x1) + '\x20/\x20' + _0x294120['length'] + '\x20||\x20File:\x20' + _0x42c712 + '\x20Proxies:\x20' + _0x41b88e);
        var _0x9414d4 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xe4d615
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x3f1ef7['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x19be17
                }
            ]
        }];
        const _0x23e68d = { 'embeds': _0x9414d4 };
        await _0x47c427(_0x294120, _0xb2fac0);
        if (_0x294120[_0xb2fac0]['Email'] == '' || _0x294120[_0xb2fac0]['Password'] == '' || _0x294120[_0xb2fac0]['FirstName'] == '' || _0x294120[_0xb2fac0]['LastName'] == '') {
            console['log'](_0x62f9f6() + '\x20[' + _0x179a0b['name'] + ']\x20Task\x20' + (_0xb2fac0 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3f1ef7['useRandomProxy'] = ![])
            var _0x487f73 = _0x4986e1()[_0xb2fac0]['split'](':');
        else
            var _0x3cb3d5 = Math['round'](Math['random']() * (_0x4986e1()['length'] - 0x1)), _0x487f73 = _0x4986e1()[_0x3cb3d5]['split'](':');
        const _0x5c0acd = await _0x6c1f16['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x487f73[0x0] + ':' + _0x487f73[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x49e89c = await _0x5c0acd['newPage']();
            await _0x49e89c['authenticate']({
                'username': '' + _0x487f73[0x2],
                'password': '' + _0x487f73[0x3]
            }), console['log'](_0x62f9f6() + '\x20[' + _0x179a0b['name'] + ']\x20Task\x20' + (_0xb2fac0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x49e89c['setRequestInterception'](!![]), _0x49e89c['on']('request', _0x2c1c98 => {
                _0x2c1c98['resourceType']() === 'image' || _0x2c1c98['resourceType']() === 'font' || _0x2c1c98['resourceType']() === 'media' ? _0x2c1c98['abort']() : _0x2c1c98['continue']();
            }), await _0x49e89c['goto']('https://www.kickz.com/nl/login/', { 'waitUntil': 'networkidle2' }), await _0x280bcd(0xbb8), console['log'](_0x62f9f6() + '\x20[' + _0x179a0b['name'] + ']\x20Task\x20' + (_0xb2fac0 + 0x1) + '\x20:\x20Logging\x20in'), await _0x49e89c['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x49e89c['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x49e89c['waitForSelector']('#username'), await _0x49e89c['type']('#username', _0x294120[_0xb2fac0]['Email']), await _0x49e89c['waitForSelector']('#password'), await _0x49e89c['type']('#password', _0x294120[_0xb2fac0]['Password']), await _0x280bcd(0x190), await _0x49e89c['click']('#buttonSubmit'), await _0x49e89c['waitForSelector']('div.b-user_greeting'), console['log'](_0x62f9f6() + '\x20[' + _0x179a0b['name'] + ']\x20Task\x20' + (_0xb2fac0 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x280bcd(0x1f4), await _0x49e89c['goto']('' + _0x294120[_0xb2fac0]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x62f9f6() + '\x20[' + _0x179a0b['name'] + ']\x20Task\x20' + (_0xb2fac0 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x294120[_0xb2fac0]['Size']);
            let _0x172dde = _0x294120[_0xb2fac0]['Size']['replace']('.5', '\x201/2');
            await _0x49e89c['click']('button[title=\x22' + _0x172dde + '\x22]'), await _0x280bcd(0x1f4);
            try {
                await _0x49e89c['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x280bcd(0x12c), console['log'](_0x62f9f6() + '\x20[' + _0x179a0b['name'] + ']\x20Task\x20' + (_0xb2fac0 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x49e89c['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x280bcd(0x12c), await _0x49e89c['type']('#dwfrm_raffle_addressFields_firstName', _0x294120[_0xb2fac0]['FirstName']), await _0x280bcd(0x12c), await _0x49e89c['type']('#dwfrm_raffle_addressFields_lastName', _0x294120[_0xb2fac0]['LastName']), await _0x280bcd(0x12c), await _0x49e89c['select']('#dwfrm_raffle_addressFields_country', _0x294120[_0xb2fac0]['Country']), await _0x280bcd(0x12c), await _0x49e89c['type']('#dwfrm_raffle_addressFields_city', _0x294120[_0xb2fac0]['City']), await _0x280bcd(0x12c);
            _0x294120[_0xb2fac0]['Postcode'] == undefined && (_0x294120[_0xb2fac0]['Postcode'] = _0x294120[_0xb2fac0]['Zip']);
            await _0x49e89c['type']('#dwfrm_raffle_addressFields_postalCode', _0x294120[_0xb2fac0]['Postcode']), await _0x280bcd(0x12c), await _0x49e89c['type']('#dwfrm_raffle_addressFields_address1', _0x294120[_0xb2fac0]['Address1']), await _0x280bcd(0x12c), await _0x49e89c['type']('#dwfrm_raffle_addressFields_address2', _0x294120[_0xb2fac0]['HouseNumber']), await _0x280bcd(0x12c), await _0x49e89c['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x294120[_0xb2fac0]['Address2']), await _0x280bcd(0x12c), await _0x49e89c['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x280bcd(0x12c), await _0x49e89c['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x294120[_0xb2fac0]['Follower']), await _0x280bcd(0x1f4), await _0x49e89c['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x280bcd(0x1f4), console['log'](_0x62f9f6() + '\x20[' + _0x179a0b['name'] + ']\x20Task\x20' + (_0xb2fac0 + 0x1) + '\x20:\x20' + _0x1c3f42['blue']('Awaiting\x20Paypal\x20Payment')), await _0x49e89c['click']('.paypal-buttons.paypal-buttons-context-iframe.paypal-buttons-label-checkout.paypal-buttons-layout-vertical');
            try {
                await _0x49e89c['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x1c3f42['green'](_0x62f9f6() + '\x20[' + _0x179a0b['name'] + ']\x20Task\x20' + (_0xb2fac0 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x196347(_0x2646a2, _0x23e68d);
            } catch (_0x3316a7) {
                console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x179a0b['name'] + ']\x20Task\x20' + (_0xb2fac0 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x3316a7));
            }
        } catch (_0x4a29b9) {
            console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x179a0b['name'] + ']\x20Task\x20' + (_0xb2fac0 + 0x1) + '\x20:\x20' + _0x4a29b9)), _0x9414d4[0x0]['title'] = 'Failed\x20kickz\x20Entry', _0x9414d4[0x0]['description'] = '' + _0x4a29b9, await _0x196347(_0x36a990, _0x23e68d);
        } finally {
            _0x5c0acd && _0x5c0acd['close'](), console['log']('Waiting\x20for\x20' + _0x3f1ef7['AfewDelay'] + '\x20ms'), await _0x280bcd(_0x3f1ef7['AfewDelay']);
        }
    }
}
async function _0x3fd96f(_0x8d818c, _0x14621b) {
    _0x6c1f16['use'](_0xd76dde()), _0x6c1f16['use'](_0x379a7e({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3f1ef7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x59bef0 = 0x0; _0x59bef0 < bouncewear['length']; _0x59bef0++) {
        await _0x47c427(bouncewear, _0x59bef0);
        if (bouncewear[_0x59bef0]['Email'] == '' || bouncewear[_0x59bef0]['Password'] == '' || bouncewear[_0x59bef0]['FirstName'] == '' || bouncewear[_0x59bef0]['LastName'] == '') {
            console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x59bef0 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3f1ef7['useRandomProxy'] = ![])
            var _0x3c3a0c = _0x4986e1()[_0x59bef0]['split'](':');
        else
            var _0x4b8e65 = Math['round'](Math['random']() * (_0x4986e1()['length'] - 0x1)), _0x3c3a0c = _0x4986e1()[_0x4b8e65]['split'](':');
        const _0x50e966 = await _0x6c1f16['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3c3a0c[0x0] + ':' + _0x3c3a0c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x18db5d = await _0x50e966['newPage']();
            await _0x18db5d['authenticate']({
                'username': '' + _0x3c3a0c[0x2],
                'password': '' + _0x3c3a0c[0x3]
            }), console['log'](_0x62f9f6() + '\x20[' + _0x14621b['name'] + ']\x20Task\x20' + (_0x59bef0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x18db5d['setRequestInterception'](!![]), _0x18db5d['on']('request', _0x2fff37 => {
                _0x2fff37['resourceType']() === 'image' || _0x2fff37['resourceType']() === 'font' || _0x2fff37['resourceType']() === 'media' ? _0x2fff37['abort']() : _0x2fff37['continue']();
            }), await _0x18db5d['goto'](_0x8d818c), await _0x280bcd(0xbb8), await _0x18db5d['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x62f9f6() + '\x20[' + _0x14621b['name'] + ']\x20Task\x20' + (_0x59bef0 + 0x1) + '\x20:\x20Filling\x20information'), await _0x18db5d['type']('#RegisterForm-FirstName', '' + bouncewear[_0x59bef0]['FirstName']), await _0x280bcd(0x226), await _0x18db5d['type']('#RegisterForm-LastName', '' + bouncewear[_0x59bef0]['LastName']), await _0x280bcd(0x226), await _0x18db5d['type']('#RegisterForm-email', '' + bouncewear[_0x59bef0]['Email']), await _0x280bcd(0x226), await _0x18db5d['type']('#RegisterForm-password', '' + bouncewear[_0x59bef0]['Password']), await _0x280bcd(0x226), await _0x18db5d['click']('#marketing'), console['log'](_0x62f9f6() + '\x20[' + _0x14621b['name'] + ']\x20Task\x20' + (_0x59bef0 + 0x1) + '\x20:\x20Submitting..'), await _0x18db5d['$eval']('#RegisterForm', _0x12d8c5 => _0x12d8c5['submit']()), await _0x280bcd(0x1f40), console['log'](_0x62f9f6() + '\x20[' + _0x14621b['name'] + ']\x20Task\x20' + (_0x59bef0 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x18db5d['solveRecaptchas'](), await _0x18db5d['click']('.shopify-challenge__button.btn');
            async function _0x14bc0e() {
                for (var _0x3d9ef9 = 0x0; _0x3d9ef9 < 0x4; _0x3d9ef9++) {
                    try {
                        console['log']('try'), await _0x18db5d['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x62f9f6() + '\x20[' + _0x14621b['name'] + ']\x20Task\x20' + (_0x59bef0 + 0x1) + '\x20:\x20' + _0x1c3f42['red']('Catpcha\x20failed,\x20retrying..')), await _0x18db5d['solveRecaptchas'](), await _0x18db5d['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x14bc0e(), console['log'](_0x62f9f6() + '\x20[' + _0x14621b['name'] + ']\x20Task\x20' + (_0x59bef0 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x280bcd(0x1f4);
            try {
                await _0x18db5d['waitForSelector']('.featured-title'), await _0x280bcd(0x1f4), console['log'](_0x1c3f42['green'](_0x62f9f6() + '\x20[' + _0x14621b['name'] + ']\x20Task\x20' + (_0x59bef0 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x59bef0]['Email'] + '\x20Generated!')), _0x1b9f9d['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x59bef0]['Email'] + ',' + bouncewear[_0x59bef0]['Password']), console['log'](_0x1c3f42['yellow'](_0x62f9f6() + '\x20[' + _0x14621b['name'] + ']\x20Task\x20' + (_0x59bef0 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x59bef0]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x2fddc6) {
                console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x59bef0 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2fddc6));
            }
        } catch (_0x587469) {
            console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x59bef0 + 0x1) + '\x20:\x20' + _0x587469));
        } finally {
            _0x50e966 && _0x50e966['close'](), console['log']('Waiting\x20for\x20' + _0x3f1ef7['delay'] + '\x20ms'), await _0x280bcd(_0x3f1ef7['delay']);
        }
    }
}
async function _0x7a5d9f(_0xeaeb7d, _0x4e1b9c, _0x31a0e9, _0x3d8453) {
    _0x6c1f16['use'](_0xd76dde()), _0x6c1f16['use'](_0x379a7e({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3f1ef7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4f0866 = 0x0; _0x4f0866 < _0x31a0e9['length']; _0x4f0866++) {
        _0x592d91(_0x4e1b9c['name'] + '\x20Task\x20' + (_0x4f0866 + 0x1) + '\x20/\x20' + _0x31a0e9['length'] + '\x20||\x20File:\x20' + _0x42c712 + '\x20Proxies:\x20' + _0x41b88e), await _0x47c427(_0x31a0e9, _0x4f0866);
        if (_0x31a0e9[_0x4f0866]['Email'] == '' || _0x31a0e9[_0x4f0866]['Password'] == '' || _0x31a0e9[_0x4f0866]['Password'] == undefined || _0x31a0e9[_0x4f0866]['FirstName'] == '' || _0x31a0e9[_0x4f0866]['LastName'] == '') {
            console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x4f0866 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3f1ef7['useRandomProxy'] = ![])
            var _0x4f677a = _0x3d8453[_0x4f0866]['split'](':');
        else
            var _0x4a26be = Math['round'](Math['random']() * (_0x3d8453['length'] - 0x1)), _0x4f677a = _0x3d8453[_0x4a26be]['split'](':');
        const _0x50950f = await _0x6c1f16['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4f677a[0x0] + ':' + _0x4f677a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x45f2fb = await _0x50950f['newPage']();
            await _0x45f2fb['authenticate']({
                'username': '' + _0x4f677a[0x2],
                'password': '' + _0x4f677a[0x3]
            }), console['log'](_0x62f9f6() + '\x20[' + _0x4e1b9c['name'] + ']\x20Task\x20' + (_0x4f0866 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x45f2fb['setRequestInterception'](!![]), _0x45f2fb['on']('request', _0x2026c8 => {
                _0x2026c8['resourceType']() === 'image' || _0x2026c8['resourceType']() === 'font' || _0x2026c8['resourceType']() === 'media' ? _0x2026c8['abort']() : _0x2026c8['continue']();
            }), await _0x45f2fb['goto'](_0xeaeb7d), await _0x280bcd(0xbb8), await _0x45f2fb['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x62f9f6() + '\x20[' + _0x4e1b9c['name'] + ']\x20Task\x20' + (_0x4f0866 + 0x1) + '\x20:\x20Filling\x20information'), await _0x45f2fb['type']('#RegisterForm-FirstName', '' + _0x31a0e9[_0x4f0866]['FirstName']), await _0x280bcd(0x226), await _0x45f2fb['type']('#RegisterForm-LastName', '' + _0x31a0e9[_0x4f0866]['LastName']), await _0x280bcd(0x226), await _0x45f2fb['type']('#RegisterForm-email', '' + _0x31a0e9[_0x4f0866]['Email']), await _0x280bcd(0x226), await _0x45f2fb['type']('#RegisterForm-password', '' + _0x31a0e9[_0x4f0866]['Password']), await _0x280bcd(0x226), console['log'](_0x62f9f6() + '\x20[' + _0x4e1b9c['name'] + ']\x20Task\x20' + (_0x4f0866 + 0x1) + '\x20:\x20Submitting..'), await _0x45f2fb['$eval']('#RegisterForm', _0x57f06c => _0x57f06c['submit']()), await _0x280bcd(0x1f40);
            try {
                await _0x45f2fb['waitForSelector']('.home-page-grid__collection'), await _0x280bcd(0x1f4), console['log'](_0x1c3f42['green'](_0x62f9f6() + '\x20[' + _0x4e1b9c['name'] + ']\x20Task\x20' + (_0x4f0866 + 0x1) + '\x20:\x20Account\x20' + _0x31a0e9[_0x4f0866]['Email'] + '\x20Generated!')), _0x1b9f9d['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x31a0e9[_0x4f0866]['Email'] + ',' + _0x31a0e9[_0x4f0866]['Password']), console['log'](_0x1c3f42['yellow'](_0x62f9f6() + '\x20[' + _0x4e1b9c['name'] + ']\x20Task\x20' + (_0x4f0866 + 0x1) + '\x20:\x20Account\x20' + _0x31a0e9[_0x4f0866]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
            } catch (_0x27fdcf) {
                console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x4f0866 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x27fdcf));
            }
        } catch (_0x3b569d) {
            console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x4f0866 + 0x1) + '\x20:\x20' + _0x3b569d));
        } finally {
            _0x50950f && _0x50950f['close'](), console['log']('Waiting\x20for\x20' + _0x3f1ef7['delay'] + '\x20ms'), await _0x280bcd(_0x3f1ef7['delay']);
        }
    }
}
async function _0x52b1a9(_0x11e257, _0x2b572d, _0xfd2e9f, _0x3e6693) {
    _0x6c1f16['use'](_0xd76dde()), _0x6c1f16['use'](_0x379a7e({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3f1ef7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5b63f6 = 0x0; _0x5b63f6 < _0xfd2e9f['length']; _0x5b63f6++) {
        _0x592d91(_0x2b572d['name'] + '\x20Task\x20' + (_0x5b63f6 + 0x1) + '\x20/\x20' + _0xfd2e9f['length'] + '\x20||\x20File:\x20' + _0x42c712 + '\x20Proxies:\x20' + _0x41b88e), await _0x47c427(_0xfd2e9f, _0x5b63f6);
        if (_0xfd2e9f[_0x5b63f6]['Email'] == '' || _0xfd2e9f[_0x5b63f6]['Password'] == '' || _0xfd2e9f[_0x5b63f6]['FirstName'] == '' || _0xfd2e9f[_0x5b63f6]['LastName'] == '') {
            console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x5b63f6 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3f1ef7['useRandomProxy'] = ![])
            var _0x3ade9c = _0x3e6693[_0x5b63f6]['split'](':');
        else
            var _0x4ee5a7 = Math['round'](Math['random']() * (_0x3e6693['length'] - 0x1)), _0x3ade9c = _0x3e6693[_0x4ee5a7]['split'](':');
        const _0x3a6bb4 = await _0x6c1f16['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3ade9c[0x0] + ':' + _0x3ade9c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x303012 = await _0x3a6bb4['newPage']();
            await _0x303012['authenticate']({
                'username': '' + _0x3ade9c[0x2],
                'password': '' + _0x3ade9c[0x3]
            }), console['log'](_0x62f9f6() + '\x20[' + _0x2b572d['name'] + ']\x20Task\x20' + (_0x5b63f6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x303012['setRequestInterception'](!![]), _0x303012['on']('request', _0x5cfb87 => {
                _0x5cfb87['resourceType']() === 'image' || _0x5cfb87['resourceType']() === 'font' || _0x5cfb87['resourceType']() === 'media' ? _0x5cfb87['abort']() : _0x5cfb87['continue']();
            }), await _0x303012['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x303012['waitForSelector']('#CustomerEmail'), console['log'](_0x62f9f6() + '\x20[' + _0x2b572d['name'] + ']\x20Task\x20' + (_0x5b63f6 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x303012['type']('#CustomerEmail', '' + _0xfd2e9f[_0x5b63f6]['Email']), await _0x280bcd(0x12c), await _0x303012['type']('#CustomerPassword', '' + _0xfd2e9f[_0x5b63f6]['Password']), await _0x280bcd(0x226), await _0x303012['$eval']('#customer_login', _0x24822f => _0x24822f['submit']());
            try {
                await _0x303012['waitForSelector']('#orders'), await _0x280bcd(0x4b0);
            } catch {
                console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x2b572d['name'] + ']\x20Task\x20' + (_0x5b63f6 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x303012['goto']('' + _0xfd2e9f[_0x5b63f6]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x280bcd(0xbb8), console['log'](_0x62f9f6() + '\x20[' + _0x2b572d['name'] + ']\x20Task\x20' + (_0x5b63f6 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x303012['waitForSelector']('#email');
            } catch {
                console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x2b572d['name'] + ']\x20Task\x20' + (_0x5b63f6 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x303012['type']('#email', '' + _0xfd2e9f[_0x5b63f6]['Email']), await _0x280bcd(0x384), await _0x303012['type']('#first_name', '' + _0xfd2e9f[_0x5b63f6]['FirstName']), await _0x280bcd(0x514), await _0x303012['type']('#last_name', '' + _0xfd2e9f[_0x5b63f6]['LastName']), await _0x280bcd(0x514), await _0x303012['type']('#street_address', _0xfd2e9f[_0x5b63f6]['Address1'] + '\x20' + _0xfd2e9f[_0x5b63f6]['HouseNumber'] + '\x20' + _0xfd2e9f[_0x5b63f6]['Address2']), await _0x280bcd(0x2bc);
            _0xfd2e9f[_0x5b63f6]['Postcode'] == undefined && (_0xfd2e9f[_0x5b63f6]['Postcode'] = _0xfd2e9f[_0x5b63f6]['Zip']);
            await _0x303012['type']('#zip_code', '' + _0xfd2e9f[_0x5b63f6]['Postcode']), await _0x280bcd(0x320), await _0x303012['type']('#city', '' + _0xfd2e9f[_0x5b63f6]['City']), await _0x280bcd(0x320), await _0x303012['type']('#bday', '' + _0xfd2e9f[_0x5b63f6]['Bday']), await _0x280bcd(0x320), await _0x303012['type']('#instagram', '' + _0xfd2e9f[_0x5b63f6]['Follower']), await _0x280bcd(0x352);
            if (_0xfd2e9f[_0x5b63f6]['Size'] == 'RANDOM') {
                const _0x530535 = await _0x303012['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x166bb6 => {
                    return _0x166bb6['map'](_0x4481f2 => _0x4481f2['textContent']);
                });
                var _0x4890e1 = Math['round'](Math['random']() * (_0x530535['length'] - 0x1));
                console['log'](_0x62f9f6() + '\x20[' + _0x2b572d['name'] + ']\x20Task\x20' + (_0x5b63f6 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x530535[_0x4890e1]), await _0x303012['click']('label[data-eu-size=\x22' + _0x530535[_0x4890e1] + '\x22]');
            } else {
                console['log'](_0x62f9f6() + '\x20[' + _0x2b572d['name'] + ']\x20Task\x20' + (_0x5b63f6 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0xfd2e9f[_0x5b63f6]['Size']);
                try {
                    await _0x303012['click']('label[data-eu-size=\x22' + _0xfd2e9f[_0x5b63f6]['Size'] + '\x22]');
                } catch {
                    await _0x303012['click']('label[data-eu-size=\x22' + _0xfd2e9f[_0x5b63f6]['Size'] + '.0\x22]');
                }
            }
            await _0x280bcd(0xbb8), await _0x303012['$$eval']('.raffle__checkbox-label', _0x52b318 => _0x52b318['forEach'](_0x63044d => _0x63044d['click']())), await _0x280bcd(0x7d0), console['log'](_0x62f9f6() + '\x20[' + _0x2b572d['name'] + ']\x20Task\x20' + (_0x5b63f6 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x303012['click']('#raffle__form-submit'), await _0x280bcd(0x1388);
            try {
                await _0x303012['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x1c3f42['green'](_0x62f9f6() + '\x20[' + _0x2b572d['name'] + ']\x20Task\x20' + (_0x5b63f6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x512459) {
                console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x5b63f6 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x512459));
            }
        } catch (_0x1605df) {
            console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x5b63f6 + 0x1) + '\x20:\x20' + _0x1605df));
        } finally {
            _0x3a6bb4 && _0x3a6bb4['close'](), console['log']('Waiting\x20for\x20' + _0x3f1ef7['delay'] + '\x20ms'), await _0x280bcd(_0x3f1ef7['delay']);
        }
    }
}
async function _0x19c550(_0x45b6ab, _0x26dbc9, _0x39be12) {
    var _0x27c668 = ![], _0x4f5da9 = ![];
    _0x6c1f16['use'](_0xd76dde()), _0x6c1f16['use'](_0x379a7e({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x3f1ef7['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xfc5b7a = 0x0; _0xfc5b7a < _0x26dbc9['length']; _0xfc5b7a++) {
        var _0x3de92b = [{
            'type': 'rich',
            'title': 'Succesfull\x20Entry',
            'description': '' + _0x45b6ab['name'],
            'color': 0xc0d6d6,
            'url': '',
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xe4d615
                },
                {
                    'name': 'Product',
                    'value': '' + _0x26dbc9[_0xfc5b7a]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x26dbc9[_0xfc5b7a]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x3f1ef7['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x19be17
                }
            ]
        }];
        const _0xef15b2 = { 'embeds': _0x3de92b };
        _0x592d91(_0x45b6ab['name'] + '\x20Task\x20' + (_0xfc5b7a + 0x1) + '\x20/\x20' + _0x26dbc9['length'] + '\x20||\x20File:\x20' + _0x42c712 + '\x20Proxies:\x20' + _0x41b88e), await _0x47c427(_0x26dbc9, _0xfc5b7a);
        if (_0x26dbc9[_0xfc5b7a]['Email'] == '' || _0x26dbc9[_0xfc5b7a]['Url'] == '' || _0x26dbc9[_0xfc5b7a]['FirstName'] == '' || _0x26dbc9[_0xfc5b7a]['LastName'] == '') {
            console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0xfc5b7a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3f1ef7['useRandomProxy'] = ![])
            var _0x48200e = _0x39be12[_0xfc5b7a]['split'](':');
        else
            var _0x13c06b = Math['round'](Math['random']() * (_0x39be12['length'] - 0x1)), _0x48200e = _0x39be12[_0x13c06b]['split'](':');
        const _0x402845 = await _0x6c1f16['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x48200e[0x0] + ':' + _0x48200e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x197212 = await _0x402845['newPage']();
            await _0x197212['authenticate']({
                'username': '' + _0x48200e[0x2],
                'password': '' + _0x48200e[0x3]
            }), console['log'](_0x62f9f6() + '\x20[' + _0x45b6ab['name'] + ']\x20Task\x20' + (_0xfc5b7a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x197212['setRequestInterception'](!![]), _0x197212['on']('request', _0x20f49b => {
                _0x20f49b['resourceType']() === 'image' || _0x20f49b['resourceType']() === 'font' || _0x20f49b['resourceType']() === 'media' ? _0x20f49b['abort']() : _0x20f49b['continue']();
            }), await _0x197212['goto']('' + _0x26dbc9[_0xfc5b7a]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](_0x62f9f6() + '\x20[' + _0x45b6ab['name'] + ']\x20Task\x20' + (_0xfc5b7a + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x197212['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x197212['type']('#comp_firstname', '' + _0x26dbc9[_0xfc5b7a]['FirstName']), await _0x197212['waitForSelector']('#comp_lastname'), await _0x197212['type']('#comp_lastname', '' + _0x26dbc9[_0xfc5b7a]['LastName']), await _0x197212['waitForSelector']('#comp_email'), await _0x197212['type']('#comp_email', '' + _0x26dbc9[_0xfc5b7a]['Email']), await _0x197212['waitForSelector']('#comp_paypalemail'), await _0x197212['type']('#comp_paypalemail', '' + _0x26dbc9[_0xfc5b7a]['Email']), await _0x197212['waitForSelector']('#comp_mobile_end'), await _0x197212['type']('#comp_mobile_end', '' + _0x26dbc9[_0xfc5b7a]['Phone']), await _0x197212['waitForSelector']('#comp_dob'), await _0x197212['type']('#comp_dob', '08/09/1992'), console['log'](_0x62f9f6() + '\x20[' + _0x45b6ab['name'] + ']\x20Task\x20' + (_0xfc5b7a + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x26dbc9[_0xfc5b7a]['Size'] == 'RANDOM') {
                const _0x5e2a34 = await _0x197212['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5198fc => {
                    return _0x5198fc['map'](_0x1622d7 => _0x1622d7['value']);
                });
                var _0x1d9df3 = Math['round'](Math['random']() * (_0x5e2a34['length'] - 0x2));
                await _0x197212['select']('#shoesize', _0x5e2a34[_0x1d9df3 + 0x1]), await _0x280bcd(0x3e8);
            } else {
                const _0x95075a = await _0x197212['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x8ba661 => {
                    return _0x8ba661['map'](_0x5dbcf4 => _0x5dbcf4['innerText']);
                }), _0x2b1020 = await _0x197212['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5a816c => {
                    return _0x5a816c['map'](_0x2a18e2 => _0x2a18e2['value']);
                });
                var _0x27982a = _0x26dbc9[_0xfc5b7a]['Size'];
                for (var _0x28fefb = 0x1; _0x28fefb < _0x2b1020['length']; _0x28fefb++) {
                    var _0x11144f = _0x95075a[_0x28fefb]['split']('\x20')[0x0];
                    if (_0x11144f == _0x27982a) {
                        await _0x197212['select']('#shoesize', _0x2b1020[_0x28fefb]);
                        break;
                    } else {
                        if (_0x28fefb + 0x1 == _0x2b1020['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x197212['waitForSelector']('#comp_address1'), await _0x197212['type']('#comp_address1', _0x26dbc9[_0xfc5b7a]['Address1'] + '\x20' + _0x26dbc9[_0xfc5b7a]['HouseNumber']), await _0x197212['waitForSelector']('#comp_address2'), await _0x197212['type']('#comp_address2', '' + _0x26dbc9[_0xfc5b7a]['Address2']), await _0x197212['waitForSelector']('#comp_address2'), await _0x197212['type']('#comp_address3', '' + _0x26dbc9[_0xfc5b7a]['City']), await _0x197212['waitForSelector']('#comp_postcode'), await _0x197212['type']('#comp_postcode', '' + _0x26dbc9[_0xfc5b7a]['Zip']), console['log'](_0x62f9f6() + '\x20[' + _0x45b6ab['name'] + ']\x20Task\x20' + (_0xfc5b7a + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x280bcd(0x4b0), await _0x197212['click']('label#emailhold'), await _0x280bcd(0x5dc), await _0x197212['click']('#preauth_tandc_email\x20>\x20label'), await _0x280bcd(0x5dc), await _0x197212['click']('#submit'), await _0x197212['waitForSelector']('#paymentWrap'), console['log'](_0x62f9f6() + '\x20[' + _0x45b6ab['name'] + ']\x20Task\x20' + (_0xfc5b7a + 0x1) + '\x20:\x20' + _0x1c3f42['blue']('Awaiting\x20Paypal\x20Payment')), _0x402845['on']('targetcreated', async _0x39ee64 => {
                if (_0x39ee64['type']() === 'page') {
                    const _0x16edf3 = await _0x39ee64['page']();
                    async function _0x5d43ad() {
                        try {
                            await _0x197212['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x4f5da9 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x25ae3e() {
                        try {
                            await _0x197212['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x27c668 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x25ae3e(), _0x5d43ad(), await _0x280bcd(0x493e0);
                }
            });
            async function _0x28aaec() {
                for (let _0x31599b = 0x0; _0x31599b < 0x12c; _0x31599b++) {
                    if (_0x27c668 == !![]) {
                        console['log'](_0x1c3f42['green'](_0x62f9f6() + '\x20[' + _0x45b6ab['name'] + ']\x20Task\x20' + (_0xfc5b7a + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x196347(_0x2646a2, _0xef15b2);
                        return;
                    } else {
                        if (_0x4f5da9)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x280bcd(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x280bcd(0xbb8), await _0x197212['click']('.zoid-outlet'), await _0x280bcd(0x7d0), await _0x28aaec();
        } catch (_0x7c1004) {
            console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x45b6ab['name'] + ']\x20Task\x20' + (_0xfc5b7a + 0x1) + '\x20:\x20' + _0x7c1004)), _0x3de92b[0x0]['title'] = 'Failed\x20entry', _0x3de92b[0x0]['description'] = _0x45b6ab['name'] + ':\x20' + _0x7c1004, await _0x196347(_0x36a990, _0xef15b2);
        } finally {
            _0x402845 && _0x402845['close'](), console['log']('Waiting\x20for\x20' + _0x3f1ef7['delay'] + '\x20ms'), await _0x280bcd(_0x3f1ef7['delay']);
        }
    }
}
async function _0x197fb4(_0x19890f, _0x46f2d8, _0x5f0574, _0x595f06) {
    var _0x973934 = {}, _0x1a8955 = [], _0x64eef4 = {}, _0xa16f75 = [
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
    !_0x595f06 && (_0x595f06 = {});
    if (_0x46f2d8 != 'ver') {
        _0x592d91(_0x5f0574['name'] + '\x20Task\x20' + (_0x19890f + 0x1) + '\x20/\x20' + _0x595f06['length'] + '\x20||\x20File:\x20' + _0x42c712 + '\x20Proxies:\x20' + _0x41b88e), await _0x47c427(_0x595f06, _0x19890f), _0x1a8955 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xe4d615
                },
                {
                    'name': 'Size',
                    'value': '' + _0x595f06[_0x19890f]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x3f1ef7['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x19be17
                }
            ]
        }], _0x64eef4 = { 'embeds': _0x1a8955 }, _0x973934 = _0x5f0574['data'];
        _0x46f2d8 == 'exp' ? _0x973934['data']['attributes']['email'] = '' + _0x595f06[_0x19890f]['FirstName'] + _0x595f06[_0x19890f]['LastName'] + _0x3f1ef7['catchall'] : _0x973934['data']['attributes']['email'] = '' + _0x595f06[_0x19890f]['Email'];
        if (_0x595f06[_0x19890f]['Size'] == 'RANDOM') {
        }
        _0x973934['data']['attributes']['properties']['$first_name'] = '' + _0x595f06[_0x19890f]['FirstName'], _0x973934['data']['attributes']['properties']['$last_name'] = '' + _0x595f06[_0x19890f]['LastName'], _0x973934['data']['attributes']['properties']['$address1'] = _0x595f06[_0x19890f]['Address1'] + '\x20' + _0x595f06[_0x19890f]['Address2'] + '\x20' + _0x595f06[_0x19890f]['HouseNumber'], _0x973934['data']['attributes']['properties']['$zip'] = '' + _0x595f06[_0x19890f]['Zip'], _0x973934['data']['attributes']['properties']['$city'] = '' + _0x595f06[_0x19890f]['City'], _0x973934['data']['attributes']['properties']['$country'] = '' + _0x595f06[_0x19890f]['Country'], _0x973934['data']['attributes']['properties']['Size'] = '' + _0x595f06[_0x19890f]['Size'], _0x973934['data']['attributes']['properties']['$phone_number'] = '' + _0x595f06[_0x19890f]['Phone'], _0x973934['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x595f06[_0x19890f]['Follower'];
    }
    if (_0x3f1ef7['useRandomProxy'] = ![])
        var _0x3116a6 = _0x4986e1()[_0x19890f]['split'](':');
    else
        var _0x542902 = Math['round'](Math['random']() * (_0x4986e1()['length'] - 0x1)), _0x3116a6 = _0x4986e1()[_0x542902]['split'](':');
    var _0x4c37d8 = {
        'jar': _0x4f96de,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x5f0574['url'],
        'headers': _0x5f0574['headers'],
        'body': JSON['stringify'](_0x973934),
        'proxy': 'http://' + _0x3116a6[0x2] + ':' + _0x3116a6[0x3] + '@' + _0x3116a6[0x0] + ':' + _0x3116a6[0x1]
    };
    return _0x46f2d8 != 'ver' && (_0x4c37d8['url'] = _0x5f0574['url'], _0x4c37d8['headers'] = _0x5f0574['headers']), _0x46f2d8 == 'ver' && (_0x4c37d8['method'] = 'GET'), new Promise(function (_0x28ae30, _0x4db5a8) {
        callback = async (_0x2ac674, _0x37186d, _0x5afa80) => {
            !_0x2ac674 && _0x37186d['statusCode'] == 0xca || !_0x2ac674 && _0x37186d['statusCode'] == 0xc8 ? (_0x46f2d8 != 'ver' && await _0x196347(_0x2646a2, _0x64eef4), _0x28ae30(console['log'](_0x1c3f42['green'](_0x62f9f6() + '\x20[' + _0x5f0574['name'] + ']\x20Task\x20' + (_0x19890f + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x46f2d8 != 'ver' && (_0x1a8955[0x0]['title'] = 'Failed\x20entry', _0x1a8955[0x0]['description'] = '' + _0x2ac674, await _0x196347(_0x36a990, _0x64eef4)), _0x4db5a8(console['log'](_0x62f9f6() + '\x20[' + _0x5f0574['name'] + ']\x20Task\x20' + (_0x19890f + 0x1) + ':\x20' + _0x2ac674)));
        };
        try {
            _0x46f2d8 != 'ver' && console['log'](_0x62f9f6() + '\x20[' + _0x5f0574['name'] + ']\x20Task\x20' + (_0x19890f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x973934['data']['attributes']['email']), _0x24768a(_0x4c37d8, callback);
        } catch (_0x46c3c6) {
            console['log'](_0x62f9f6() + '\x20Task\x20' + (_0x19890f + 0x1) + ':\x20' + _0x46c3c6);
        }
    });
}
;
async function _0x16cdd8() {
    await _0x2e4fcf(), console['clear']();
    if (_0x19be17 != 'devkey') {
        let _0x34ee43 = await _0x182c62['autoUpdate']();
        if (_0x34ee43 === 'yes')
            return _0xbf392b('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x16904c == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x280bcd(0x2710);
        ;
    }
    await _0x116e92(_0x16904c);
    if (_0x102433 === ![])
        return console['log']('Closing\x20Browser'), await _0x280bcd(0xbb8);
    else
        try {
            async function _0x3b0ca1() {
                _0x592d91('JRaffles\x20' + _0x19be17), console['clear'](), console['log']('Welcome\x20to\x20' + _0x1c3f42['cyan']('JRaffles();') + '\x20' + _0x19be17), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x109c9d = 0x0; _0x109c9d < _0x230263['length']; _0x109c9d++) {
                    if (_0x230263[_0x109c9d]['name'] === 'Reload\x20Settings' || _0x230263[_0x109c9d]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x109c9d + ')\x20[' + _0x230263[_0x109c9d]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x230263['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x230263['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x19b19b();
                if (_0x230263[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x496716(_0x230263[taskModule]['modules']);
                    var _0x445a07 = _0x230263[taskModule]['modules'][taskFunction];
                    console['clear'](), await _0x34e211(), await _0x5eb999();
                    var _0x108c07 = await _0x14a98b(), _0x5e3358 = await _0x22bd04();
                    return await afewFunction(_0x2dcc75[_0x1476c9], 'nor', _0x445a07, _0x5e3358, _0x108c07), _0x3b0ca1();
                } else {
                    if (_0x230263[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x496716(_0x230263[taskModule]['modules']);
                        var _0x445a07 = _0x230263[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x108c07 = await _0x14a98b(), _0x58a9b6 = await _0x22bd04();
                            console['log']('Starting\x20' + _0x58a9b6['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x2ec9e3 = 0x0; _0x2ec9e3 < _0x58a9b6['length']; _0x2ec9e3++) {
                                console['log'](_0x62f9f6() + '\x20[' + _0x445a07['name'] + ']\x20Task\x20' + (_0x2ec9e3 + 0x1) + ':\x20Getting\x20Session'), await _0x4c92c2(_0x2ec9e3, 'nor', _0x445a07, _0x58a9b6, _0x108c07), console['log'](_0x62f9f6() + '\x20[' + _0x445a07['name'] + ']\x20Sleeping\x20for\x20' + _0x3f1ef7['MahaDelay'] + '\x20ms'), await _0x280bcd(_0x3f1ef7['MahaDelay']);
                            }
                            ;
                            return _0x3b0ca1();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x108c07 = await _0x14a98b();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x4befe2(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x2ec9e3 = 0x0; _0x2ec9e3 < links['length']; _0x2ec9e3++) {
                                    _0x445a07['url'] = links[_0x2ec9e3], console['log'](_0x62f9f6() + '\x20[' + _0x445a07['name'] + ']\x20Task\x20' + (_0x2ec9e3 + 0x1) + ':\x20Getting\x20Session'), await _0x4c92c2(_0x2ec9e3, 'ver', _0x445a07, _0x58a9b6, _0x108c07), console['log'](_0x62f9f6() + '\x20[' + _0x445a07['name'] + ']\x20Sleeping\x20for\x20' + _0x3f1ef7['verificationDelay'] + '\x20ms'), await _0x280bcd(_0x3f1ef7['verificationDelay']);
                                }
                                ;
                                return _0x3b0ca1();
                            }
                        }
                    } else {
                        if (_0x230263[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x108c07 = await _0x14a98b(), _0x36faef = await _0x22bd04();
                            return console['log'](_0x36faef), await _0x3b5a7a(_0x36faef, _0x108c07), await _0x280bcd(0x1388), _0x3b0ca1();
                        } else {
                            if (_0x230263[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x496716(_0x230263[taskModule]['modules']);
                                var _0x445a07 = _0x230263[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x587664 = await _0x22bd04();
                                    console['log']('Starting\x20' + _0x1c3f42['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x2ec9e3 = 0x0; _0x2ec9e3 < _0x587664['length']; _0x2ec9e3++) {
                                        console['log'](_0x62f9f6() + '\x20[' + _0x445a07['name'] + ']\x20Task\x20' + (_0x2ec9e3 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x197fb4(_0x2ec9e3, 'nor', _0x445a07, _0x587664);
                                        } catch {
                                            console['log'](_0x1c3f42['red'](_0x62f9f6() + '\x20[' + _0x445a07['name'] + ']\x20Task\x20' + (_0x2ec9e3 + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](_0x62f9f6() + '\x20[' + _0x445a07['name'] + ']\x20Sleeping\x20for\x20' + _0x3f1ef7['delay'] + '\x20ms'), await _0x280bcd(_0x3f1ef7['delay']);
                                    }
                                    return _0x3b0ca1();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x4befe2(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x2ec9e3 = 0x0; _0x2ec9e3 < links['length']; _0x2ec9e3++) {
                                            try {
                                                _0x445a07['url'] = links[_0x2ec9e3], console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Task\x20' + (_0x2ec9e3 + 0x1) + ':\x20Getting\x20Session'), await _0x197fb4(_0x2ec9e3, 'ver', _0x445a07), console['log'](_0x62f9f6() + '\x20[' + _0x230263[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x3f1ef7['verificationDelay'] + '\x20ms'), await _0x280bcd(_0x3f1ef7['verificationDelay']);
                                            } catch (_0x4f1189) {
                                                console['log'](_0x4f1189);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x3b0ca1();
                                    }
                                }
                                ;
                            } else {
                                if (_0x230263[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x496716(_0x230263[taskModule]['modules']);
                                    var _0x445a07 = _0x230263[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x3fd96f('https://bouncewear.com/nl/account/register', _0x445a07);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x230263[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x496716(_0x230263[taskModule]['modules']);
                                        var _0x445a07 = _0x230263[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x108c07 = await _0x14a98b(), _0x1bb902 = await _0x22bd04();
                                            return await _0x7a5d9f('https://patta.nl/account/register', _0x445a07, _0x1bb902, _0x108c07), _0x3b0ca1();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x108c07 = await _0x14a98b(), _0x1bb902 = await _0x22bd04();
                                                return await _0x52b1a9('', _0x445a07, _0x1bb902, _0x108c07), _0x3b0ca1();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x230263[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await _0x496716(_0x230263[taskModule]['modules']);
                                            var _0x445a07 = _0x230263[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x15e70e = await _0x22bd04();
                                                return await _0x1085c1('https://www.kickz.com/nl/login/', _0x445a07, _0x15e70e), _0x3b0ca1();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x15e70e = await _0x22bd04();
                                                    return await _0x5f2f16(_0x445a07, _0x15e70e), _0x3b0ca1();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x230263[taskModule]['name'] == 'JD') {
                                                taskFunction = await _0x496716(_0x230263[taskModule]['modules']);
                                                var _0x445a07 = _0x230263[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x108c07 = await _0x14a98b(), _0x37dcac = await _0x22bd04();
                                                    return await _0x19c550(_0x445a07, _0x37dcac, _0x108c07), _0x3b0ca1();
                                                }
                                            } else {
                                                if (_0x230263[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x52c50b = 0x0;
                                                    for (const _0x8cd996 in _0x3f1ef7) {
                                                        console['log']('(' + _0x52c50b + ')\x20' + _0x8cd996 + '\x20:\x20' + _0x3f1ef7[_0x8cd996]), _0x52c50b++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x52c50b + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x2cec98 = await _0x1a321f();
                                                    if (_0x2cec98 == _0x52c50b)
                                                        return _0x3b0ca1();
                                                    console['clear'];
                                                    var _0x41ca9b = 0x0;
                                                    for (var _0x6af289 in _0x3f1ef7) {
                                                        if (_0x2cec98 == _0x41ca9b) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x6af289 + '\x20:'), _0x3f1ef7[_0x6af289] = await _0x40b810(), _0x1b9f9d['writeFileSync']('../settings.json', JSON['stringify'](_0x3f1ef7));
                                                            break;
                                                        } else
                                                            _0x41ca9b++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await _0x280bcd(0xbb8), _0x3b0ca1();
                                                } else {
                                                    if (_0x230263[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await _0x2e4fcf(), _0x3b0ca1();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            _0x230263[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x10259a = await _0x13acf5();
                                                            _0x10259a == 'ModuleVoorDeBoys' ? (await _0x34e211(), await _0x5eb999(), await afewFunction(_0x2dcc75[_0x1476c9], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x280bcd(0xbb8));
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
            await _0x3b0ca1();
        } catch (_0x4484a7) {
            return console['log'](_0x4484a7), await _0x280bcd(0x3a98);
        }
}
;
_0x592d91('JRaffles\x20' + _0x19be17), _0x2e4fcf(), _0x16cdd8();