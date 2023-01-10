const { FakeBrowser: _0x14215c } = require('fakebrowser');
var _0x2c5340 = require('exe');
const { execFile: _0x3c78ff } = require('child_process'), _0xb88319 = require('puppeteer-extra'), _0x1cd94a = require('puppeteer-extra-plugin-recaptcha'), _0x4cd4c1 = require('puppeteer-extra-plugin-stealth'), _0x159a64 = require('chalk'), _0x42dae0 = require('node-bash-title'), _0x1918a1 = require('fs'), _0x457a0a = require('axios'), _0xc4e6af = require('papaparse');
var _0x3ff66a = require('random-name');
const _0x375cf2 = require('request');
var _0xd518b = require('prompt');
const _0x27c0b7 = _0x375cf2['jar']();
var _0x222040 = {};
const _0x571a63 = 'https://discord.com/api/webhooks/1044989608708030595/HUZ2q06RoQQ24n_rWWEsL6AgM5yXEeUi2SO9VyOLuQgGBeHIlXpPl9Xr5jYMLXwJKwPS', _0x9cf284 = 'https://discord.com/api/webhooks/1045001962262900766/ZXWdz3BSjNO08alABR8ERNBgR2SNcydTW-9XxsFuphHYfwHaojLBu3hkw1Ygi3MxOZdz';
var _0x305ee9;
const _0x48cf89 = JSON['parse'](_0x1918a1['readFileSync']('../package.json', 'utf-8')), _0x4fe7b4 = _0x48cf89['version'];
var _0x2f8f64, _0x11240, _0x47864c, _0x2745fb, _0x2b1f45, _0x49382a, _0x3b5beb;
const _0x35f8c3 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x45f94a = ![];
const _0x521f0a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x3f741d = '0123456789';
var _0x2aa951 = _0x521f0a['split']('');
const _0x3e6b68 = require('auto-git-update'), { PageEmittedEvents: _0x7467d8 } = require('puppeteer'), { getRandomValues: _0x454fb0 } = require('crypto'), { resolve: _0x46f79d } = require('path'), _0x5a2fda = {
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
}, _0x4eae43 = new _0x3e6b68(_0x5a2fda);
async function _0x42f0f0() {
    _0x2b1f45 = _0x1918a1['readdirSync']('../proxies'), _0x2745fb = _0x1918a1['readdirSync']('../tasks'), _0x222040 = JSON['parse'](_0x1918a1['readFileSync']('../settings.json', 'utf-8')), !_0x222040['delay'] && (_0x222040['delay'] = 0x2710, _0x1918a1['writeFileSync']('../settings.json', JSON['stringify'](_0x222040))), !_0x222040['captchaKey'] && (_0x222040['captchaKey'] = '', _0x1918a1['writeFileSync']('../settings.json', JSON['stringify'](_0x222040))), !_0x222040['useRandomProxy'] && (_0x222040['useRandomProxy'] = ![], _0x1918a1['writeFileSync']('../settings.json', JSON['stringify'](_0x222040))), !_0x222040['webhook'] && (_0x222040['webhook'] = '', _0x1918a1['writeFileSync']('../settings.json', JSON['stringify'](_0x222040))), _0x305ee9 = _0x222040['webhook'], _0x49382a = _0x222040['licenseKey'];
}
let _0x494e13, _0x4d71ca = [], _0x333b2b;
const _0x304dee = _0x2168fd => new Promise(_0x2a9762 => setTimeout(_0x2a9762, _0x2168fd));
function _0x3f7556(_0x566b17, _0x1bdd87) {
    return Math['floor'](Math['random']() * (_0x1bdd87 - _0x566b17 + 0x1) + _0x566b17);
}
async function _0x31cd0f(_0x43c41f) {
    return _0x457a0a['get']('https://api.hyper.co/v4/licenses/' + _0x43c41f, { 'headers': { 'Authorization': 'Bearer\x20' + _0x35f8c3 } })['then'](_0x2a08e0 => _0x2a08e0['data'])['catch'](() => null);
}
;
async function _0x41312f(_0xdc1eaf) {
    console['clear'](), console['log']('Checking\x20license\x20' + _0x49382a + '...'), await _0x304dee(0x5dc);
    const _0x4315bd = await _0x31cd0f(_0xdc1eaf);
    _0x3b5beb = JSON['stringify'](_0x4315bd['user']['username']);
    if (!_0x4315bd)
        return console['log']('License\x20not\x20found');
    if (!_0x4315bd['user'])
        return console['log']('License\x20not\x20bound');
    return _0x4315bd['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x45f94a = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x45f94a = ![]);
}
async function _0x172f2b() {
    var _0xa8a781 = await _0xd518b['get']('Module');
    return console['clear'](), _0xa8a781['Module'];
}
;
async function _0x2026d3() {
    var _0x4b8266 = await _0xd518b['get']('Setting');
    return console['clear'](), _0x4b8266['Setting'];
}
async function _0x2b72a3() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x637d7b = 0x0; _0x637d7b < _0x2745fb['length']; _0x637d7b++) {
        console['log']('\x20(' + _0x637d7b + ')\x20' + _0x2745fb[_0x637d7b]);
    }
    console['log']('');
    var _0x131787 = await _0xd518b['get']('Task'), _0xea3b40 = _0x1918a1['readFileSync']('../tasks/' + _0x2745fb[_0x131787['Task']], 'utf-8');
    return _0x47864c = _0xc4e6af['parse'](_0xea3b40, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x159a64['blue'](_0x2745fb[_0x131787['Task']])), _0x2f8f64 = _0x2745fb[_0x131787['Task']], _0x47864c;
}
async function _0x3e6d79() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x3cf35c = 0x0; _0x3cf35c < _0x2b1f45['length']; _0x3cf35c++) {
        console['log']('\x20(' + _0x3cf35c + ')\x20' + _0x2b1f45[_0x3cf35c]);
    }
    console['log']('');
    var _0x3d3c84 = await _0xd518b['get']('Proxies'), _0x4a6777 = _0x1918a1['readFileSync']('../proxies/' + _0x2b1f45[_0x3d3c84['Proxies']], 'utf-8')['split']('\x0a');
    let _0x40c1aa = _0x4a6777['map']((_0x4f1b29, _0x3f998f) => {
        sanatizeProxy = _0x4f1b29['replace']('\x0d', '');
        if (_0x4a6777[_0x3f998f + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x11240 = _0x2b1f45[_0x3d3c84['Proxies']], console['clear'](), _0x40c1aa;
}
async function _0x47dea4() {
    var _0x2f5489 = await _0xd518b['get']('Value');
    return console['clear'](), _0x2f5489['Value'];
}
async function _0x5d0270(_0x364e9e) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x5b98ee = 0x0; _0x5b98ee < _0x364e9e['length']; _0x5b98ee++) {
        console['log']('\x20(' + _0x5b98ee + ')\x20[' + _0x364e9e[_0x5b98ee]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x29ef87 = await _0xd518b['get']('Module');
    return _0x29ef87['Module'];
}
async function _0x3a6986() {
    var _0x200968 = await _0xd518b['get']('Password');
    return console['clear'](), _0x200968['Password'];
}
;
async function _0x49b7c1() {
    var _0x2cbd88 = await _0xd518b['get']('Links');
    return _0x2cbd88['Links'];
}
;
async function _0x22309b() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0xad182f = 0x0; _0xad182f < _0x4d71ca['length']; _0xad182f++) {
        console['log']('\x20(' + _0xad182f + ')\x20' + _0x4d71ca[_0xad182f]);
    }
    ;
    console['log']();
    let _0x54437d = await _0xd518b['get']('Product');
    console['clear'](), _0x333b2b = _0x54437d['Product'];
    return;
}
;
function _0x92a1de() {
    var _0x3e79ce = new Date(Date['now']())['toLocaleTimeString']();
    return _0x3e79ce;
}
;
const _0x2dd3af = [
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
async function _0x3a99aa(_0xb2628e, _0x4f303f) {
    let _0x45d00e = { 'headers': { 'content-type': 'application/json' } };
    await _0x457a0a['post'](_0xb2628e, _0x4f303f, _0x45d00e);
}
;
async function _0xfdf155(_0x16e8c7, _0x254e55) {
    var _0x1da0f3 = _0x16e8c7[_0x254e55]['Address1']['split'](''), _0x134195 = _0x16e8c7[_0x254e55]['Address2']['split'](''), _0x2714fa = _0x16e8c7[_0x254e55]['Email']['split']('@');
    for (var _0x25cd34 = 0x0; _0x25cd34 < _0x1da0f3['length']; _0x25cd34++) {
        if (_0x1da0f3[_0x25cd34] == 'X') {
            var _0x4929ca = Math['round'](Math['random']() * (_0x521f0a['length'] - 0x1));
            _0x1da0f3[_0x25cd34] = _0x2aa951[_0x4929ca];
        }
    }
    ;
    for (var _0x25cd34 = 0x0; _0x25cd34 < _0x134195['length']; _0x25cd34++) {
        if (_0x134195[_0x25cd34] == 'X') {
            var _0x4929ca = Math['round'](Math['random']() * (_0x521f0a['length'] - 0x1));
            _0x134195[_0x25cd34] = _0x2aa951[_0x4929ca];
        }
    }
    ;
    _0x16e8c7[_0x254e55]['FirstName'] == 'RANDOM' && (_0x16e8c7[_0x254e55]['FirstName'] = _0x3ff66a['first']());
    _0x16e8c7[_0x254e55]['LastName'] == 'RANDOM' && (_0x16e8c7[_0x254e55]['LastName'] = _0x3ff66a['last']());
    _0x2714fa[0x0] == 'RANDOM' ? _0x2714fa[0x0] = '' + _0x3ff66a['first']() + _0x3ff66a['last']() + '@' : _0x2714fa[0x0] = _0x2714fa[0x0] + '@';
    _0x16e8c7[_0x254e55]['Phone'] == 'RANDOM' && (_0x16e8c7[_0x254e55]['Phone'] = _0x3f7556(0x3b9aca00, 0x2540be3ff));
    if (_0x16e8c7[_0x254e55]['Follower'] == 'RANDOM') {
        var _0x29f06a = _0x3f7556(0x1, 0x270f);
        _0x16e8c7[_0x254e55]['Follower'] = '' + _0x3ff66a['first']() + _0x3ff66a['last']() + _0x29f06a;
    }
    _0x16e8c7[_0x254e55]['Email'] = _0x2714fa['join'](''), _0x16e8c7[_0x254e55]['Address1'] = _0x1da0f3['join'](''), _0x16e8c7[_0x254e55]['Address2'] = _0x134195['join']('');
    return;
}
;
function _0x40cf02() {
    let _0x35807d = proxyFile['split']('\x0a'), _0xe016f = _0x35807d['map']((_0x11ecc1, _0x2aa04d) => {
        sanatizeProxy = _0x11ecc1['replace']('\x0d', '');
        if (_0x35807d[_0x2aa04d + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0xe016f;
}
;
async function _0x10d300(_0x5cf069) {
    var _0x2c301a = _0x5cf069[0x1]['split'](':');
    const _0x36b070 = await _0xb88319['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x2c301a[0x0] + ':' + _0x2c301a[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x59f878 = await _0x36b070['newPage']();
        await _0x59f878['authenticate']({
            'username': '' + _0x2c301a[0x2],
            'password': '' + _0x2c301a[0x3]
        }), console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x59f878['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x59f878['setRequestInterception'](!![]), _0x59f878['on']('request', _0x2601a1 => {
            _0x2601a1['resourceType']() === 'image' || _0x2601a1['resourceType']() === 'font' || _0x2601a1['resourceType']() === 'media' ? _0x2601a1['abort']() : _0x2601a1['continue']();
        }), await _0x59f878['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x59f878['waitForTimeout'](0xbb8), await _0x59f878['waitForSelector']('.product-card');
        const _0x39adf7 = await _0x59f878['$$eval']('a.product-card', _0x50bc9c => {
            return _0x50bc9c['map'](_0x4bc01d => _0x4bc01d['href']);
        });
        return _0x4d71ca = _0x39adf7;
    } catch (_0x54b97d) {
        console['log']('\x20' + _0x54b97d);
    } finally {
        _0x36b070['close'](), console['clear']();
    }
}
;
async function _0x13a74c(_0x193a4e, _0x18a85a, _0x4944ab, _0x272218, _0x16fb93) {
    await _0xfdf155(_0x272218, _0x193a4e);
    var _0x2dc7fc = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x3b5beb
            },
            {
                'name': 'Size',
                'value': '' + _0x272218[_0x193a4e]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x222040['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x4fe7b4
            }
        ]
    }];
    const _0x5f3b27 = { 'embeds': _0x2dc7fc };
    if (_0x222040['useRandomProxy'] = ![])
        var _0x19ffe8 = _0x16fb93[_0x193a4e]['split'](':');
    else
        var _0x291a88 = Math['round'](Math['random']() * (_0x16fb93['length'] - 0x1)), _0x19ffe8 = _0x16fb93[_0x291a88]['split'](':');
    var _0x2f8f79 = _0x4944ab['data'];
    _0x18a85a == 'exp' ? _0x2f8f79['data']['attributes']['email'] = '' + _0x272218[_0x193a4e]['FirstName'] + _0x272218[_0x193a4e]['LastName'] + _0x222040['catchall'] : _0x2f8f79['data']['attributes']['email'] = '' + _0x272218[_0x193a4e]['Email'];
    _0x2f8f79['data']['attributes']['properties']['$first_name'] = '' + _0x272218[_0x193a4e]['FirstName'], _0x2f8f79['data']['attributes']['properties']['$last_name'] = '' + _0x272218[_0x193a4e]['LastName'], _0x2f8f79['data']['attributes']['properties']['$address1'] = _0x272218[_0x193a4e]['Address1'] + '\x20' + _0x272218[_0x193a4e]['Address2'], _0x2f8f79['data']['attributes']['properties']['$zip'] = '' + _0x272218[_0x193a4e]['Zip'], _0x2f8f79['data']['attributes']['properties']['$city'] = '' + _0x272218[_0x193a4e]['City'], _0x2f8f79['data']['attributes']['properties']['$country'] = '' + _0x272218[_0x193a4e]['Country'], _0x2f8f79['data']['attributes']['properties']['Size'] = '' + _0x272218[_0x193a4e]['Size'], _0x2f8f79['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x272218[_0x193a4e]['Follower'];
    var _0x462809 = {
        'jar': _0x27c0b7,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x4944ab['url'],
        'headers': _0x4944ab['headers'],
        'body': JSON['stringify'](_0x2f8f79),
        'proxy': 'http://' + _0x19ffe8[0x2] + ':' + _0x19ffe8[0x3] + '@' + _0x19ffe8[0x0] + ':' + _0x19ffe8[0x1]
    };
    return _0x18a85a === 'ver' && (_0x462809['method'] = 'GET'), new Promise(function (_0x35c05c, _0x4af545) {
        callback = async (_0x5179f0, _0x1cd92a, _0x381ea) => {
            !_0x5179f0 && _0x1cd92a['statusCode'] == 0xca || !_0x5179f0 && _0x1cd92a['statusCode'] == 0xc8 ? _0x35c05c(console['log'](_0x159a64['green'](_0x92a1de() + '\x20[' + _0x4944ab['name'] + ']\x20Task\x20' + (_0x193a4e + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x2dc7fc[0x0]['title'] = 'Failed\x20entry', _0x2dc7fc[0x0]['description'] = '' + _0x5179f0, await _0x3a99aa(_0x9cf284, _0x5f3b27), _0x4af545(console['log'](_0x92a1de() + '\x20[' + _0x4944ab['name'] + ']\x20Task\x20' + (_0x193a4e + 0x1) + ':\x20' + _0x5179f0)));
        };
        try {
            _0x18a85a === 'ver' ? console['log'](_0x92a1de() + '\x20[' + _0x4944ab['name'] + ']\x20Task\x20' + (_0x193a4e + 0x1) + ':\x20Verifying.') : console['log'](_0x92a1de() + '\x20[' + _0x4944ab['name'] + ']\x20Task\x20' + (_0x193a4e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2f8f79['data']['attributes']['email']), _0x375cf2(_0x462809, callback);
        } catch (_0xf28493) {
            console['log'](_0x92a1de() + '\x20Task\x20' + (_0x193a4e + 0x1) + ':\x20' + _0xf28493);
        }
    });
}
;
async function _0x3548e(_0x1995c6, _0x2278cb) {
    _0xb88319['use'](_0x4cd4c1()), _0xb88319['use'](_0x1cd94a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x222040['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1f734e = 0x0; _0x1f734e < _0x1995c6['length']; _0x1f734e++) {
        var _0x653485 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x1995c6[_0x1f734e]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1995c6[_0x1f734e]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x3b5beb
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x222040['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4fe7b4
                }
            ]
        }];
        const _0x582967 = { 'embeds': _0x653485 };
        await _0xfdf155(_0x1995c6, _0x1f734e);
        if (_0x1995c6[_0x1f734e]['Email'] == '' || _0x1995c6[_0x1f734e]['FirstName'] == '' || _0x1995c6[_0x1f734e]['LastName'] == '' || _0x1995c6[_0x1f734e]['Country'] == '' || _0x1995c6[_0x1f734e]['Size'] == '' || _0x1995c6[_0x1f734e]['Address1'] == '' || _0x1995c6[_0x1f734e]['Zip'] == '') {
            console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x1f734e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1995c6[_0x1f734e]['Email'] == '' || _0x1995c6[_0x1f734e]['FirstName'] == '' || _0x1995c6[_0x1f734e]['LastName'] == '' || _0x1995c6[_0x1f734e]['Country'] == '' || _0x1995c6[_0x1f734e]['Size'] == '' || _0x1995c6[_0x1f734e]['Address1'] == '' || _0x1995c6[_0x1f734e]['Zip'] == '' || _0x1995c6[_0x1f734e]['Phone'] == '') {
            console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x1f734e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x29b3ea = '' + _0x1995c6[_0x1f734e]['Url'];
        if (_0x222040['useRandomProxy'] = ![])
            var _0x50f9da = _0x2278cb[_0x1f734e]['split'](':');
        else
            var _0x39fb8c = Math['round'](Math['random']() * (_0x2278cb['length'] - 0x1)), _0x50f9da = _0x2278cb[_0x39fb8c]['split'](':');
        const _0x5e4139 = await _0xb88319['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x50f9da[0x0] + ':' + _0x50f9da[0x1]]
        });
        try {
            const _0x3bfdcc = await _0x5e4139['newPage']();
            await _0x3bfdcc['authenticate']({
                'username': '' + _0x50f9da[0x2],
                'password': '' + _0x50f9da[0x3]
            }), console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x1f734e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3bfdcc['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3bfdcc['setRequestInterception'](!![]), _0x3bfdcc['on']('request', _0x284d07 => {
                _0x284d07['resourceType']() === 'image' || _0x284d07['resourceType']() === 'font' || _0x284d07['resourceType']() === 'media' ? _0x284d07['abort']() : _0x284d07['continue']();
            }), await _0x3bfdcc['goto'](_0x29b3ea), await _0x304dee(0xbb8), await _0x3bfdcc['waitForSelector']('.control__JhutY'), await _0x3bfdcc['click']('.control__JhutY'), await _0x304dee(0x1f4);
            if (_0x1995c6[_0x1f734e]['Size'] != 'RANDOM')
                try {
                    const _0x139c3a = await _0x3bfdcc['$x']('//div[contains(text(),\x20\x27' + _0x1995c6[_0x1f734e]['Size'] + '\x27)]');
                    await _0x139c3a[0x0]['click']();
                } catch {
                    console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x1f734e + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x308888 = await _0x3bfdcc['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x3acf6b = Math['round'](Math['random']() * (_0x308888['length'] - 0x1));
                await _0x308888[_0x3acf6b]['click']();
            }
            await _0x304dee(0x4b0);
            const _0x131cba = await _0x3bfdcc['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x131cba[0x0]['click'](), await _0x3bfdcc['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x1f734e + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x3bfdcc['type']('input[name=\x22email\x22]', '' + _0x1995c6[_0x1f734e]['Email']), await _0x304dee(0x640), await _0x3bfdcc['type']('input[name=\x22phone\x22]', '' + _0x1995c6[_0x1f734e]['Phone']), await _0x304dee(0x4b0), await _0x3bfdcc['click']('button.btn.continue-button__1RtsS'), await _0x304dee(0x4b0);
            try {
                await _0x3bfdcc['type']('input[name=\x22firstName\x22]', '' + _0x1995c6[_0x1f734e]['FirstName']), await _0x304dee(0x258);
            } catch {
                const _0x117e57 = await _0x3bfdcc['$$eval']('.invalid-feedback\x20>\x20div', _0x1d90b0 => {
                    return _0x1d90b0['map'](_0x3e1d6 => _0x3e1d6['innerText']);
                });
                console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x1f734e + 0x1) + '\x20:\x20' + _0x117e57));
                continue;
            }
            await _0x3bfdcc['type']('input[name=\x22lastName\x22]', '' + _0x1995c6[_0x1f734e]['LastName']), await _0x304dee(0xc8), await _0x3bfdcc['type']('input[name=\x22instagramUsername\x22]', '' + _0x1995c6[_0x1f734e]['Follower']), await _0x304dee(0x4b0), await _0x3bfdcc['click']('button.btn.continue-button__1RtsS'), await _0x304dee(0x3e8), console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x1f734e + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x3bfdcc['select']('select[name=\x22country\x22]', '' + _0x1995c6[_0x1f734e]['Country']), await _0x304dee(0x2bc), await _0x3bfdcc['type']('input[name=\x22streetName\x22]', '' + _0x1995c6[_0x1f734e]['Address1']), await _0x304dee(0x258), await _0x3bfdcc['type']('input[name=\x22houseNumber\x22]', _0x1995c6[_0x1f734e]['HouseNumber'] + '\x20' + _0x1995c6[_0x1f734e]['Address2']), await _0x304dee(0xc8), await _0x3bfdcc['type']('input[name=\x22postalCode\x22]', '' + _0x1995c6[_0x1f734e]['Zip']), await _0x304dee(0x1f4), await _0x3bfdcc['type']('input[name=\x22city\x22]', '' + _0x1995c6[_0x1f734e]['City']), await _0x304dee(0x4b0), await _0x3bfdcc['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x304dee(0x4b0), await _0x3bfdcc['click']('button.btn.continue-button__1RtsS'), await _0x304dee(0x4b0), console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x1f734e + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x3bfdcc['solveRecaptchas'](), console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x1f734e + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x304dee(0xbb8), await _0x3bfdcc['click']('button.btn.continue-button__1RtsS'), await _0x304dee(0x1388), console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x1f734e + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x3bfdcc['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3bfdcc['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x304dee(0x4b0), await _0x3bfdcc['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x1995c6[_0x1f734e]['CardNumber']), await _0x304dee(0x320), await _0x3bfdcc['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3bfdcc['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x1995c6[_0x1f734e]['ExpiryDate']), await _0x304dee(0x4b0), await _0x3bfdcc['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3bfdcc['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x1995c6[_0x1f734e]['CVV']), await _0x304dee(0x226), await _0x3bfdcc['type']('input[name=\x22holderName\x22]', '' + _0x1995c6[_0x1f734e]['NameOnCard']), await _0x304dee(0x226), await _0x3bfdcc['click']('button.adyen-checkout__button'), console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x1f734e + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x3bfdcc['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x304dee(0xbb8), console['log'](_0x159a64['green'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x1f734e + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x3a99aa(_0x571a63, _0x582967);
            } catch {
                console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x1f734e + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x1834f2) {
            console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x1f734e + 0x1) + '\x20:\x20' + _0x1834f2);
        } finally {
            _0x5e4139['close'](), console['log']('Waiting\x20for\x20' + _0x222040['footshopDelay'] + '\x20ms'), await _0x304dee(_0x222040['footshopDelay']);
        }
    }
}
afewFunction = async (_0x1c6585, _0x4520cf, _0x5bd4f9, _0x148e1a, _0x1555e5) => {
    for (var _0x389cc3 = 0x0; _0x389cc3 < _0x148e1a['length']; _0x389cc3++) {
        _0x42dae0(_0x5bd4f9['name'] + '\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20/\x20' + _0x148e1a['length'] + '\x20||\x20File:\x20' + _0x2f8f64 + '\x20Proxies:\x20' + _0x11240), await _0xfdf155(_0x148e1a, _0x389cc3);
        var _0x51a6e5 = [{
            'type': 'rich',
            'title': 'Succesful\x20AFEW\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3b5beb
                },
                {
                    'name': 'Product',
                    'value': '' + _0x1c6585
                },
                {
                    'name': 'Size',
                    'value': '' + _0x148e1a[_0x389cc3]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x222040['AfewDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4fe7b4
                }
            ]
        }];
        const _0x2060a0 = { 'embeds': _0x51a6e5 };
        if (_0x148e1a[_0x389cc3]['Email'] == '' || _0x148e1a[_0x389cc3]['FirstName'] == '' || _0x148e1a[_0x389cc3]['LastName'] == '' || _0x148e1a[_0x389cc3]['Country'] == '' || _0x148e1a[_0x389cc3]['Size'] == '' || _0x148e1a[_0x389cc3]['Address1'] == '' || _0x148e1a[_0x389cc3]['Zip'] == '') {
            console['log'](_0x92a1de() + '\x20[' + _0x5bd4f9['name'] + ']\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x222040['useRandomProxy'] = ![])
            var _0x2208a0 = _0x1555e5[_0x389cc3]['split'](':');
        else
            var _0x334177 = Math['round'](Math['random']() * (_0x1555e5['length'] - 0x1)), _0x2208a0 = _0x1555e5[_0x334177]['split'](':');
        const _0x125817 = await _0xb88319['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2208a0[0x0] + ':' + _0x2208a0[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x230a90 = await _0x125817['newPage']();
            await _0x230a90['setDefaultNavigationTimeout'](0x1d4c0), await _0x230a90['authenticate']({
                'username': '' + _0x2208a0[0x2],
                'password': '' + _0x2208a0[0x3]
            }), console['log'](_0x92a1de() + '\x20[' + _0x5bd4f9['name'] + ']\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x230a90['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x230a90['setRequestInterception'](!![]), _0x230a90['on']('request', _0x16df6a => {
                _0x16df6a['resourceType']() === 'image' || _0x16df6a['resourceType']() === 'font' || _0x16df6a['resourceType']() === 'media' ? _0x16df6a['abort']() : _0x16df6a['continue']();
            }), await _0x230a90['goto'](_0x1c6585, { 'waitUntil': 'networkidle2' }), console['log'](_0x92a1de() + '\x20[' + _0x5bd4f9['name'] + ']\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x230a90['waitForTimeout'](0xfa0), console['log'](_0x92a1de() + '\x20[' + _0x5bd4f9['name'] + ']\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x230a90['waitForTimeout'](0x320);
            if (_0x148e1a[_0x389cc3]['Size'] == 'RANDOM') {
                console['log'](_0x92a1de() + '\x20[' + _0x5bd4f9['name'] + ']\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x53e803 = await _0x230a90['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x2ab972 => {
                    return _0x2ab972['map'](_0x2cdcb9 => _0x2cdcb9['href']);
                });
                var _0x2aeca6 = Math['round'](Math['random']() * (_0x53e803['length'] - 0x1));
                await _0x230a90['goto']('' + _0x53e803[_0x2aeca6]);
            } else {
                console['log'](_0x92a1de() + '\x20[' + _0x5bd4f9['name'] + ']\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x148e1a[_0x389cc3]['Size']);
                try {
                    const _0xb9c51b = await _0x230a90['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x148e1a[_0x389cc3]['Size'] + '\x22]\x20>\x20a', _0x503b64 => {
                        return _0x503b64['map'](_0x279904 => _0x279904['href']);
                    });
                    await _0x230a90['goto']('' + _0xb9c51b[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x41a6ab) {
                    console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x5bd4f9['name'] + ']\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20:\x20' + _0x41a6ab + '\x20Size\x20not\x20found')), _0x51a6e5[0x0]['title'] = 'Failed\x20entry', _0x51a6e5[0x0]['description'] = 'Size\x20not\x20found', await _0x3a99aa(_0x9cf284, _0x2060a0);
                    continue;
                }
                try {
                    await _0x230a90['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x148e1a[_0x389cc3]['Size'] + '\x22]'), await _0x230a90['waitForTimeout'](0x320), await _0x230a90['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x148e1a[_0x389cc3]['Size'] + '\x22]');
                } catch (_0x1a3d81) {
                    console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x5bd4f9['name'] + ']\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20:\x20' + _0x1a3d81 + '\x20Size\x20not\x20found')), _0x51a6e5[0x0]['title'] = 'Failed\x20entry', _0x51a6e5[0x0]['description'] = 'Size\x20not\x20found', await _0x3a99aa(_0x9cf284, _0x2060a0);
                    continue;
                }
            }
            await _0x230a90['waitForTimeout'](0x258), await _0x230a90['type']('#raffle-instagram', '' + _0x148e1a[_0x389cc3]['Follower'], { 'delay': 0x64 }), await _0x230a90['waitForTimeout'](0x384), await _0x230a90['click']('#raffle-terms'), await _0x230a90['waitForTimeout'](0x384), await _0x230a90['evaluate'](() => {
                const _0x2aefc5 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x2aefc5['click']();
            }), await _0x230a90['waitForTimeout'](0xbb8), await _0x230a90['waitForSelector']('#checkout_email'), await _0x304dee(0x3e8), console['log'](_0x92a1de() + '\x20[' + _0x5bd4f9['name'] + ']\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x4520cf == 'sec' ? await _0x230a90['type']('#checkout_email', '' + _0x148e1a[_0x389cc3]['FirstName'] + _0x148e1a[_0x389cc3]['LastName'] + _0x222040['catchall'], 0x32) : await _0x230a90['type']('#checkout_email', '' + _0x148e1a[_0x389cc3]['Email'], 0x32);
            await _0x304dee(0x320), await _0x230a90['select']('#checkout_shipping_address_country', '' + _0x148e1a[_0x389cc3]['Country']), await _0x230a90['waitForTimeout'](0x258), await _0x230a90['type']('#checkout_shipping_address_first_name', '' + _0x148e1a[_0x389cc3]['FirstName']), await _0x230a90['waitForTimeout'](0x320), await _0x230a90['type']('#checkout_shipping_address_last_name', '' + _0x148e1a[_0x389cc3]['LastName']), await _0x230a90['waitForTimeout'](0x2bc), await _0x230a90['type']('#checkout_shipping_address_address1', _0x148e1a[_0x389cc3]['Address1'] + '\x20' + _0x148e1a[_0x389cc3]['HouseNumber']), await _0x230a90['waitForTimeout'](0x2bc), await _0x230a90['type']('#checkout_shipping_address_address2', '' + _0x148e1a[_0x389cc3]['Address2']), await _0x230a90['waitForTimeout'](0x2bc);
            _0x148e1a[_0x389cc3]['Postcode'] == undefined ? await _0x230a90['type']('#checkout_shipping_address_zip', '' + _0x148e1a[_0x389cc3]['Zip']) : await _0x230a90['type']('#checkout_shipping_address_zip', '' + _0x148e1a[_0x389cc3]['Postcode']);
            await _0x230a90['waitForTimeout'](0x2bc), await _0x230a90['type']('#checkout_shipping_address_city', '' + _0x148e1a[_0x389cc3]['City']), await _0x230a90['waitForTimeout'](0x2bc), console['log'](_0x92a1de() + '\x20[' + _0x5bd4f9['name'] + ']\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x230a90['evaluate'](() => {
                const _0x3cfaf2 = document['querySelector']('#continue_button');
                for (var _0xfb6105 = 0x0; _0xfb6105 < 0x5; _0xfb6105++) {
                    if (_0x3cfaf2) {
                        _0x3cfaf2['click']();
                        break;
                    } else
                        _0x304dee(0xfa0);
                }
            }), await _0x230a90['waitForTimeout'](0x1194), await _0x230a90['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), _0x230a90['evaluate'](() => {
                const _0x3eb3ec = document['querySelector']('#continue_button');
                for (var _0x38cdae = 0x0; _0x38cdae < 0x5; _0x38cdae++) {
                    if (_0x3eb3ec) {
                        _0x3eb3ec['click']();
                        break;
                    } else
                        _0x304dee(0xfa0);
                }
            }), await _0x230a90['waitForTimeout'](0x7d0), console['log'](_0x92a1de() + '\x20[' + _0x5bd4f9['name'] + ']\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x230a90['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x230a90['evaluate'](() => {
                const _0x35398a = document['querySelector']('#continue_button');
                for (var _0x1c0bc1 = 0x0; _0x1c0bc1 < 0x5; _0x1c0bc1++) {
                    if (_0x35398a) {
                        _0x35398a['click']();
                        break;
                    } else
                        _0x304dee(0xfa0);
                }
            }), await _0x230a90['waitForTimeout'](0x1194), await _0x230a90['waitForSelector']('#continue_button'), _0x230a90['evaluate'](() => {
                const _0x3349d9 = document['querySelector']('#continue_button');
                for (var _0x6f7ceb = 0x0; _0x6f7ceb < 0x5; _0x6f7ceb++) {
                    if (_0x3349d9) {
                        _0x3349d9['click']();
                        break;
                    } else
                        _0x304dee(0xfa0);
                }
            });
            try {
                await _0x230a90['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x3764c1) {
                console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x5bd4f9['name'] + ']\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x3764c1));
            }
            console['log'](_0x159a64['green'](_0x92a1de() + '\x20[' + _0x5bd4f9['name'] + ']\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x3a99aa(_0x571a63, _0x2060a0);
        } catch (_0x1bca5b) {
            console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x5bd4f9['name'] + ']\x20Task\x20' + (_0x389cc3 + 0x1) + '\x20:\x20' + _0x1bca5b)), _0x51a6e5[0x0]['title'] = 'Failed\x20entry', _0x51a6e5[0x0]['description'] = '' + _0x1bca5b, await _0x3a99aa(_0x9cf284, _0x2060a0);
        } finally {
            _0x125817 && _0x125817['close']();
            if (_0x389cc3 + 0x1 == _0x148e1a['length']) {
                console['log'](_0x159a64['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x304dee(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x222040['AfewDelay'] + '\x20ms'), await _0x304dee(_0x222040['AfewDelay']);
        }
    }
};
async function _0x4e0b00(_0x65b8f1, _0x59aec7, _0x2867e1, _0xd429bc) {
    _0xb88319['use'](_0x4cd4c1()), _0xb88319['use'](_0x1cd94a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x222040['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x19e965 = 0x0; _0x19e965 < _0x2867e1['length']; _0x19e965++) {
        _0x42dae0(_0x59aec7['name'] + '\x20Task\x20' + (_0x19e965 + 0x1) + '\x20/\x20' + _0x2867e1['length'] + '\x20||\x20File:\x20' + _0x2f8f64 + '\x20Proxies:\x20' + _0x11240);
        var _0x1192a1 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3b5beb
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x222040['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4fe7b4
                }
            ]
        }];
        const _0x14aa21 = { 'embeds': _0x1192a1 };
        await _0xfdf155(_0x2867e1, _0x19e965);
        if (_0x2867e1[_0x19e965]['Email'] == '' || _0x2867e1[_0x19e965]['Password'] == '' || _0x2867e1[_0x19e965]['FirstName'] == '' || _0x2867e1[_0x19e965]['LastName'] == '') {
            console['log'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x222040['useRandomProxy'] = ![])
            var _0xa7805a = _0xd429bc[_0x19e965]['split'](':');
        else
            var _0x51dfc2 = Math['round'](Math['random']() * (_0xd429bc['length'] - 0x1)), _0xa7805a = _0xd429bc[_0x51dfc2]['split'](':');
        const _0x30a9ee = await _0xb88319['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0xa7805a[0x0] + ':' + _0xa7805a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3eec8a = await _0x30a9ee['newPage']();
            await _0x3eec8a['authenticate']({
                'username': '' + _0xa7805a[0x2],
                'password': '' + _0xa7805a[0x3]
            }), console['log'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3eec8a['setRequestInterception'](!![]), _0x3eec8a['on']('request', _0x4b15a0 => {
                _0x4b15a0['resourceType']() === 'image' || _0x4b15a0['resourceType']() === 'font' || _0x4b15a0['resourceType']() === 'media' ? _0x4b15a0['abort']() : _0x4b15a0['continue']();
            }), await _0x3eec8a['goto'](_0x65b8f1), await _0x304dee(0xbb8), console['log'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x3eec8a['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3eec8a['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3eec8a['waitForSelector']('#button-register'), await _0x304dee(0x7d0), await _0x3eec8a['evaluate'](() => {
                const _0x183fc7 = document['querySelector']('#button-register');
                _0x183fc7['click']();
            }), console['log'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x304dee(0x1388), await _0x3eec8a['waitForSelector']('#customer_salutation'), await _0x3eec8a['select']('#customer_salutation', 'mr'), await _0x304dee(0x7d0), await _0x3eec8a['waitForSelector']('#customer_firstname'), await _0x3eec8a['type']('#customer_firstname', '' + _0x2867e1[_0x19e965]['FirstName']), await _0x304dee(0x352), await _0x3eec8a['waitForSelector']('#customer_lastname'), await _0x3eec8a['type']('#customer_lastname', '' + _0x2867e1[_0x19e965]['LastName']), await _0x304dee(0x352), await _0x3eec8a['type']('#email-input', '' + _0x2867e1[_0x19e965]['Email']), await _0x304dee(0x352), await _0x3eec8a['type']('#email-confirm-input', '' + _0x2867e1[_0x19e965]['Email']), await _0x304dee(0x352), await _0x3eec8a['type']('#register-password', '' + _0x2867e1[_0x19e965]['Password']), await _0x304dee(0x352), await _0x3eec8a['type']('#password-confirm', '' + _0x2867e1[_0x19e965]['Password']), await _0x304dee(0x352), console['log'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x3eec8a['click']('#consent'), await _0x304dee(0x1f4);
            const _0x3ff248 = await _0x3eec8a['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x3ff248) {
                console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x3eec8a['click']('#buttonRegister');
            try {
                await _0x3eec8a['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x159a64['yellow'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20Account\x20' + _0x2867e1[_0x19e965]['Email'] + '\x20Generated!')), console['log'](_0x159a64['yellow'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x2867e1[_0x19e965]['Email'])), await _0x304dee(0x4b0);
            async function _0x5464a1() {
                console['log'](_0x159a64['yellow'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x268ff1 = await _0xd518b['get']('Code');
                return _0x268ff1['Code'];
            }
            ;
            code = await _0x5464a1(), _0x304dee(0x320), console['log'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20Verifying..'), await _0x3eec8a['type']('#verificationCode', code), await _0x304dee(0x1f4), await _0x3eec8a['click']('#buttonVerify'), await _0x304dee(0x190), await _0x3eec8a['click']('#buttonVerify'), await _0x304dee(0x3e8);
            try {
                await _0x3eec8a['waitForSelector']('div.b-user_greeting'), console['log'](_0x159a64['green'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20Account\x20' + _0x2867e1[_0x19e965]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x1918a1['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x2867e1[_0x19e965]['Email'] + ',' + _0x2867e1[_0x19e965]['Password'] + ','), console['log'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20Account\x20' + _0x2867e1[_0x19e965]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27'), await _0x3a99aa(_0x571a63, _0x14aa21);
            } catch {
                console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x262d64) {
            console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x59aec7['name'] + ']\x20Task\x20' + (_0x19e965 + 0x1) + '\x20:\x20' + _0x262d64)), _0x1192a1[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x1192a1[0x0]['description'] = '' + _0x262d64, await _0x3a99aa(_0x9cf284, _0x14aa21);
        } finally {
            _0x30a9ee && _0x30a9ee['close'](), console['log']('Waiting\x20for\x20' + _0x222040['delay'] + '\x20ms'), await _0x304dee(_0x222040['delay']);
        }
    }
}
async function _0x3ad07e(_0x2cc16c, _0x485b65, _0x4228df) {
    _0xb88319['use'](_0x4cd4c1()), _0xb88319['use'](_0x1cd94a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x222040['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xeb1227 = 0x0; _0xeb1227 < _0x485b65['length']; _0xeb1227++) {
        _0x42dae0(_0x2cc16c['name'] + '\x20Task\x20' + (_0xeb1227 + 0x1) + '\x20/\x20' + _0x485b65['length'] + '\x20||\x20File:\x20' + _0x2f8f64 + '\x20Proxies:\x20' + _0x11240);
        var _0x252e00 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3b5beb
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x222040['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4fe7b4
                }
            ]
        }];
        const _0x28998f = { 'embeds': _0x252e00 };
        await _0xfdf155(_0x485b65, _0xeb1227);
        if (_0x485b65[_0xeb1227]['Email'] == '' || _0x485b65[_0xeb1227]['Password'] == '' || _0x485b65[_0xeb1227]['FirstName'] == '' || _0x485b65[_0xeb1227]['LastName'] == '') {
            console['log'](_0x92a1de() + '\x20[' + _0x2cc16c['name'] + ']\x20Task\x20' + (_0xeb1227 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x222040['useRandomProxy'] = ![])
            var _0x199709 = _0x4228df[_0xeb1227]['split'](':');
        else
            var _0x3e2b89 = Math['round'](Math['random']() * (_0x4228df['length'] - 0x1)), _0x199709 = _0x4228df[_0x3e2b89]['split'](':');
        const _0x222d10 = await _0xb88319['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x199709[0x0] + ':' + _0x199709[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x129c60 = await _0x222d10['newPage']();
            await _0x129c60['authenticate']({
                'username': '' + _0x199709[0x2],
                'password': '' + _0x199709[0x3]
            }), console['log'](_0x92a1de() + '\x20[' + _0x2cc16c['name'] + ']\x20Task\x20' + (_0xeb1227 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x129c60['setRequestInterception'](!![]), _0x129c60['on']('request', _0x200b1d => {
                _0x200b1d['resourceType']() === 'image' || _0x200b1d['resourceType']() === 'font' || _0x200b1d['resourceType']() === 'media' ? _0x200b1d['abort']() : _0x200b1d['continue']();
            }), await _0x129c60['goto']('https://www.kickz.com/nl/login/', { 'waitUntil': 'networkidle2' }), await _0x304dee(0xbb8), console['log'](_0x92a1de() + '\x20[' + _0x2cc16c['name'] + ']\x20Task\x20' + (_0xeb1227 + 0x1) + '\x20:\x20Logging\x20in'), await _0x129c60['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x129c60['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x129c60['waitForSelector']('#username'), await _0x129c60['type']('#username', _0x485b65[_0xeb1227]['Email']), await _0x129c60['waitForSelector']('#password'), await _0x129c60['type']('#password', _0x485b65[_0xeb1227]['Password']), await _0x304dee(0x190), await _0x129c60['click']('#buttonSubmit'), await _0x129c60['waitForSelector']('div.b-user_greeting'), console['log'](_0x92a1de() + '\x20[' + _0x2cc16c['name'] + ']\x20Task\x20' + (_0xeb1227 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x304dee(0x1f4), await _0x129c60['goto']('' + _0x485b65[_0xeb1227]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x92a1de() + '\x20[' + _0x2cc16c['name'] + ']\x20Task\x20' + (_0xeb1227 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x485b65[_0xeb1227]['Size']);
            let _0x11b052 = _0x485b65[_0xeb1227]['Size']['replace']('.5', '\x201/2');
            await _0x129c60['click']('button[title=\x22' + _0x11b052 + '\x22]'), await _0x304dee(0x1f4);
            try {
                await _0x129c60['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x304dee(0x12c), console['log'](_0x92a1de() + '\x20[' + _0x2cc16c['name'] + ']\x20Task\x20' + (_0xeb1227 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x129c60['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x304dee(0x12c), await _0x129c60['type']('#dwfrm_raffle_addressFields_firstName', _0x485b65[_0xeb1227]['FirstName']), await _0x304dee(0x12c), await _0x129c60['type']('#dwfrm_raffle_addressFields_lastName', _0x485b65[_0xeb1227]['LastName']), await _0x304dee(0x12c), await _0x129c60['select']('#dwfrm_raffle_addressFields_country', _0x485b65[_0xeb1227]['Country']), await _0x304dee(0x12c), await _0x129c60['type']('#dwfrm_raffle_addressFields_city', _0x485b65[_0xeb1227]['City']), await _0x304dee(0x12c);
            _0x485b65[_0xeb1227]['Postcode'] == undefined && (_0x485b65[_0xeb1227]['Postcode'] = _0x485b65[_0xeb1227]['Zip']);
            await _0x129c60['type']('#dwfrm_raffle_addressFields_postalCode', _0x485b65[_0xeb1227]['Postcode']), await _0x304dee(0x12c), await _0x129c60['type']('#dwfrm_raffle_addressFields_address1', _0x485b65[_0xeb1227]['Address1']), await _0x304dee(0x12c), await _0x129c60['type']('#dwfrm_raffle_addressFields_address2', _0x485b65[_0xeb1227]['HouseNumber']), await _0x304dee(0x12c), await _0x129c60['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x485b65[_0xeb1227]['Address2']), await _0x304dee(0x12c), await _0x129c60['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x304dee(0x12c), await _0x129c60['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x485b65[_0xeb1227]['Follower']), await _0x304dee(0x1f4), await _0x129c60['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x304dee(0x1f4), console['log'](_0x92a1de() + '\x20[' + _0x2cc16c['name'] + ']\x20Task\x20' + (_0xeb1227 + 0x1) + '\x20:\x20' + _0x159a64['blue']('Awaiting\x20Paypal\x20Payment')), await _0x129c60['click']('.paypal-buttons.paypal-buttons-context-iframe.paypal-buttons-label-checkout.paypal-buttons-layout-vertical');
            try {
                await _0x129c60['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x159a64['green'](_0x92a1de() + '\x20[' + _0x2cc16c['name'] + ']\x20Task\x20' + (_0xeb1227 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x3a99aa(_0x571a63, _0x28998f);
            } catch (_0x180b8f) {
                console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x2cc16c['name'] + ']\x20Task\x20' + (_0xeb1227 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x180b8f));
            }
        } catch (_0x59941c) {
            console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x2cc16c['name'] + ']\x20Task\x20' + (_0xeb1227 + 0x1) + '\x20:\x20' + _0x59941c)), _0x252e00[0x0]['title'] = 'Failed\x20kickz\x20Entry', _0x252e00[0x0]['description'] = '' + _0x59941c, await _0x3a99aa(_0x9cf284, _0x28998f);
        } finally {
            _0x222d10 && _0x222d10['close'](), console['log']('Waiting\x20for\x20' + _0x222040['AfewDelay'] + '\x20ms'), await _0x304dee(_0x222040['AfewDelay']);
        }
    }
}
async function _0x5339cb(_0x21c11e, _0x9520db) {
    _0xb88319['use'](_0x4cd4c1()), _0xb88319['use'](_0x1cd94a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x222040['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4f08fb = 0x0; _0x4f08fb < bouncewear['length']; _0x4f08fb++) {
        await _0xfdf155(bouncewear, _0x4f08fb);
        if (bouncewear[_0x4f08fb]['Email'] == '' || bouncewear[_0x4f08fb]['Password'] == '' || bouncewear[_0x4f08fb]['FirstName'] == '' || bouncewear[_0x4f08fb]['LastName'] == '') {
            console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x4f08fb + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x222040['useRandomProxy'] = ![])
            var _0x1a61c6 = _0x40cf02()[_0x4f08fb]['split'](':');
        else
            var _0x565b7d = Math['round'](Math['random']() * (_0x40cf02()['length'] - 0x1)), _0x1a61c6 = _0x40cf02()[_0x565b7d]['split'](':');
        const _0x404ece = await _0xb88319['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1a61c6[0x0] + ':' + _0x1a61c6[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x50df91 = await _0x404ece['newPage']();
            await _0x50df91['authenticate']({
                'username': '' + _0x1a61c6[0x2],
                'password': '' + _0x1a61c6[0x3]
            }), console['log'](_0x92a1de() + '\x20[' + _0x9520db['name'] + ']\x20Task\x20' + (_0x4f08fb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x50df91['setRequestInterception'](!![]), _0x50df91['on']('request', _0x12e10a => {
                _0x12e10a['resourceType']() === 'image' || _0x12e10a['resourceType']() === 'font' || _0x12e10a['resourceType']() === 'media' ? _0x12e10a['abort']() : _0x12e10a['continue']();
            }), await _0x50df91['goto'](_0x21c11e), await _0x304dee(0xbb8), await _0x50df91['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x92a1de() + '\x20[' + _0x9520db['name'] + ']\x20Task\x20' + (_0x4f08fb + 0x1) + '\x20:\x20Filling\x20information'), await _0x50df91['type']('#RegisterForm-FirstName', '' + bouncewear[_0x4f08fb]['FirstName']), await _0x304dee(0x226), await _0x50df91['type']('#RegisterForm-LastName', '' + bouncewear[_0x4f08fb]['LastName']), await _0x304dee(0x226), await _0x50df91['type']('#RegisterForm-email', '' + bouncewear[_0x4f08fb]['Email']), await _0x304dee(0x226), await _0x50df91['type']('#RegisterForm-password', '' + bouncewear[_0x4f08fb]['Password']), await _0x304dee(0x226), await _0x50df91['click']('#marketing'), console['log'](_0x92a1de() + '\x20[' + _0x9520db['name'] + ']\x20Task\x20' + (_0x4f08fb + 0x1) + '\x20:\x20Submitting..'), await _0x50df91['$eval']('#RegisterForm', _0x25d133 => _0x25d133['submit']()), await _0x304dee(0x1f40), console['log'](_0x92a1de() + '\x20[' + _0x9520db['name'] + ']\x20Task\x20' + (_0x4f08fb + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x50df91['solveRecaptchas'](), await _0x50df91['click']('.shopify-challenge__button.btn');
            async function _0x4b125e() {
                for (var _0x49ba4d = 0x0; _0x49ba4d < 0x4; _0x49ba4d++) {
                    try {
                        console['log']('try'), await _0x50df91['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x92a1de() + '\x20[' + _0x9520db['name'] + ']\x20Task\x20' + (_0x4f08fb + 0x1) + '\x20:\x20' + _0x159a64['red']('Catpcha\x20failed,\x20retrying..')), await _0x50df91['solveRecaptchas'](), await _0x50df91['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x4b125e(), console['log'](_0x92a1de() + '\x20[' + _0x9520db['name'] + ']\x20Task\x20' + (_0x4f08fb + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x304dee(0x1f4);
            try {
                await _0x50df91['waitForSelector']('.featured-title'), await _0x304dee(0x1f4), console['log'](_0x159a64['green'](_0x92a1de() + '\x20[' + _0x9520db['name'] + ']\x20Task\x20' + (_0x4f08fb + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x4f08fb]['Email'] + '\x20Generated!')), _0x1918a1['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x4f08fb]['Email'] + ',' + bouncewear[_0x4f08fb]['Password']), console['log'](_0x159a64['yellow'](_0x92a1de() + '\x20[' + _0x9520db['name'] + ']\x20Task\x20' + (_0x4f08fb + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x4f08fb]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x4403e9) {
                console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x4f08fb + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4403e9));
            }
        } catch (_0x40e57f) {
            console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x4f08fb + 0x1) + '\x20:\x20' + _0x40e57f));
        } finally {
            _0x404ece && _0x404ece['close'](), console['log']('Waiting\x20for\x20' + _0x222040['delay'] + '\x20ms'), await _0x304dee(_0x222040['delay']);
        }
    }
}
async function _0x2960f0(_0x8e0c20, _0x2b3542, _0xbd945, _0x5976ca) {
    _0xb88319['use'](_0x4cd4c1()), _0xb88319['use'](_0x1cd94a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x222040['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x214db2 = 0x0; _0x214db2 < _0xbd945['length']; _0x214db2++) {
        _0x42dae0(_0x2b3542['name'] + '\x20Task\x20' + (_0x214db2 + 0x1) + '\x20/\x20' + _0xbd945['length'] + '\x20||\x20File:\x20' + _0x2f8f64 + '\x20Proxies:\x20' + _0x11240), await _0xfdf155(_0xbd945, _0x214db2);
        if (_0xbd945[_0x214db2]['Email'] == '' || _0xbd945[_0x214db2]['Password'] == '' || _0xbd945[_0x214db2]['Password'] == undefined || _0xbd945[_0x214db2]['FirstName'] == '' || _0xbd945[_0x214db2]['LastName'] == '') {
            console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x214db2 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x222040['useRandomProxy'] = ![])
            var _0x525c63 = _0x5976ca[_0x214db2]['split'](':');
        else
            var _0xeeca0b = Math['round'](Math['random']() * (_0x5976ca['length'] - 0x1)), _0x525c63 = _0x5976ca[_0xeeca0b]['split'](':');
        const _0x393512 = await _0xb88319['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x525c63[0x0] + ':' + _0x525c63[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4bc2d5 = await _0x393512['newPage']();
            await _0x4bc2d5['authenticate']({
                'username': '' + _0x525c63[0x2],
                'password': '' + _0x525c63[0x3]
            }), console['log'](_0x92a1de() + '\x20[' + _0x2b3542['name'] + ']\x20Task\x20' + (_0x214db2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4bc2d5['setRequestInterception'](!![]), _0x4bc2d5['on']('request', _0x46706d => {
                _0x46706d['resourceType']() === 'image' || _0x46706d['resourceType']() === 'font' || _0x46706d['resourceType']() === 'media' ? _0x46706d['abort']() : _0x46706d['continue']();
            }), await _0x4bc2d5['goto'](_0x8e0c20), await _0x304dee(0xbb8), await _0x4bc2d5['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x92a1de() + '\x20[' + _0x2b3542['name'] + ']\x20Task\x20' + (_0x214db2 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4bc2d5['type']('#RegisterForm-FirstName', '' + _0xbd945[_0x214db2]['FirstName']), await _0x304dee(0x226), await _0x4bc2d5['type']('#RegisterForm-LastName', '' + _0xbd945[_0x214db2]['LastName']), await _0x304dee(0x226), await _0x4bc2d5['type']('#RegisterForm-email', '' + _0xbd945[_0x214db2]['Email']), await _0x304dee(0x226), await _0x4bc2d5['type']('#RegisterForm-password', '' + _0xbd945[_0x214db2]['Password']), await _0x304dee(0x226), console['log'](_0x92a1de() + '\x20[' + _0x2b3542['name'] + ']\x20Task\x20' + (_0x214db2 + 0x1) + '\x20:\x20Submitting..'), await _0x4bc2d5['$eval']('#RegisterForm', _0x1bb68d => _0x1bb68d['submit']()), await _0x304dee(0x1f40);
            try {
                await _0x4bc2d5['waitForSelector']('.home-page-grid__collection'), await _0x304dee(0x1f4), console['log'](_0x159a64['green'](_0x92a1de() + '\x20[' + _0x2b3542['name'] + ']\x20Task\x20' + (_0x214db2 + 0x1) + '\x20:\x20Account\x20' + _0xbd945[_0x214db2]['Email'] + '\x20Generated!')), _0x1918a1['appendFileSync']('../accounts/patta.csv', '\x0a' + _0xbd945[_0x214db2]['Email'] + ',' + _0xbd945[_0x214db2]['Password']), console['log'](_0x159a64['yellow'](_0x92a1de() + '\x20[' + _0x2b3542['name'] + ']\x20Task\x20' + (_0x214db2 + 0x1) + '\x20:\x20Account\x20' + _0xbd945[_0x214db2]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
            } catch (_0x70c04a) {
                console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x214db2 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x70c04a));
            }
        } catch (_0x5be488) {
            console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x214db2 + 0x1) + '\x20:\x20' + _0x5be488));
        } finally {
            _0x393512 && _0x393512['close'](), console['log']('Waiting\x20for\x20' + _0x222040['delay'] + '\x20ms'), await _0x304dee(_0x222040['delay']);
        }
    }
}
async function _0x220174(_0x1f933e, _0x3f82a3, _0x3bab2b, _0x709cc7) {
    _0xb88319['use'](_0x4cd4c1()), _0xb88319['use'](_0x1cd94a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x222040['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2fc451 = 0x0; _0x2fc451 < _0x3bab2b['length']; _0x2fc451++) {
        _0x42dae0(_0x3f82a3['name'] + '\x20Task\x20' + (_0x2fc451 + 0x1) + '\x20/\x20' + _0x3bab2b['length'] + '\x20||\x20File:\x20' + _0x2f8f64 + '\x20Proxies:\x20' + _0x11240), await _0xfdf155(_0x3bab2b, _0x2fc451);
        if (_0x3bab2b[_0x2fc451]['Email'] == '' || _0x3bab2b[_0x2fc451]['Password'] == '' || _0x3bab2b[_0x2fc451]['FirstName'] == '' || _0x3bab2b[_0x2fc451]['LastName'] == '') {
            console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x2fc451 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x222040['useRandomProxy'] = ![])
            var _0xea90ef = _0x709cc7[_0x2fc451]['split'](':');
        else
            var _0x2afbec = Math['round'](Math['random']() * (_0x709cc7['length'] - 0x1)), _0xea90ef = _0x709cc7[_0x2afbec]['split'](':');
        const _0x426991 = await _0xb88319['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xea90ef[0x0] + ':' + _0xea90ef[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x30a33f = await _0x426991['newPage']();
            await _0x30a33f['authenticate']({
                'username': '' + _0xea90ef[0x2],
                'password': '' + _0xea90ef[0x3]
            }), console['log'](_0x92a1de() + '\x20[' + _0x3f82a3['name'] + ']\x20Task\x20' + (_0x2fc451 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x30a33f['setRequestInterception'](!![]), _0x30a33f['on']('request', _0xcfcf2a => {
                _0xcfcf2a['resourceType']() === 'image' || _0xcfcf2a['resourceType']() === 'font' || _0xcfcf2a['resourceType']() === 'media' ? _0xcfcf2a['abort']() : _0xcfcf2a['continue']();
            }), await _0x30a33f['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x30a33f['waitForSelector']('#CustomerEmail'), console['log'](_0x92a1de() + '\x20[' + _0x3f82a3['name'] + ']\x20Task\x20' + (_0x2fc451 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x30a33f['type']('#CustomerEmail', '' + _0x3bab2b[_0x2fc451]['Email']), await _0x304dee(0x12c), await _0x30a33f['type']('#CustomerPassword', '' + _0x3bab2b[_0x2fc451]['Password']), await _0x304dee(0x226), await _0x30a33f['$eval']('#customer_login', _0x4d5f6b => _0x4d5f6b['submit']());
            try {
                await _0x30a33f['waitForSelector']('#orders'), await _0x304dee(0x4b0);
            } catch {
                console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x3f82a3['name'] + ']\x20Task\x20' + (_0x2fc451 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x30a33f['goto']('' + _0x3bab2b[_0x2fc451]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x304dee(0xbb8), console['log'](_0x92a1de() + '\x20[' + _0x3f82a3['name'] + ']\x20Task\x20' + (_0x2fc451 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x30a33f['waitForSelector']('#email');
            } catch {
                console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x3f82a3['name'] + ']\x20Task\x20' + (_0x2fc451 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x30a33f['type']('#email', '' + _0x3bab2b[_0x2fc451]['Email']), await _0x304dee(0x384), await _0x30a33f['type']('#first_name', '' + _0x3bab2b[_0x2fc451]['FirstName']), await _0x304dee(0x514), await _0x30a33f['type']('#last_name', '' + _0x3bab2b[_0x2fc451]['LastName']), await _0x304dee(0x514), await _0x30a33f['type']('#street_address', _0x3bab2b[_0x2fc451]['Address1'] + '\x20' + _0x3bab2b[_0x2fc451]['HouseNumber'] + '\x20' + _0x3bab2b[_0x2fc451]['Address2']), await _0x304dee(0x2bc);
            _0x3bab2b[_0x2fc451]['Postcode'] == undefined && (_0x3bab2b[_0x2fc451]['Postcode'] = _0x3bab2b[_0x2fc451]['Zip']);
            await _0x30a33f['type']('#zip_code', '' + _0x3bab2b[_0x2fc451]['Postcode']), await _0x304dee(0x320), await _0x30a33f['type']('#city', '' + _0x3bab2b[_0x2fc451]['City']), await _0x304dee(0x320), await _0x30a33f['type']('#bday', '' + _0x3bab2b[_0x2fc451]['Bday']), await _0x304dee(0x320), await _0x30a33f['type']('#instagram', '' + _0x3bab2b[_0x2fc451]['Follower']), await _0x304dee(0x352);
            if (_0x3bab2b[_0x2fc451]['Size'] == 'RANDOM') {
                const _0x16a600 = await _0x30a33f['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x26fb25 => {
                    return _0x26fb25['map'](_0x258ac1 => _0x258ac1['textContent']);
                });
                var _0x2124ec = Math['round'](Math['random']() * (_0x16a600['length'] - 0x1));
                console['log'](_0x92a1de() + '\x20[' + _0x3f82a3['name'] + ']\x20Task\x20' + (_0x2fc451 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x16a600[_0x2124ec]), await _0x30a33f['click']('label[data-eu-size=\x22' + _0x16a600[_0x2124ec] + '\x22]');
            } else {
                console['log'](_0x92a1de() + '\x20[' + _0x3f82a3['name'] + ']\x20Task\x20' + (_0x2fc451 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x3bab2b[_0x2fc451]['Size']);
                try {
                    await _0x30a33f['click']('label[data-eu-size=\x22' + _0x3bab2b[_0x2fc451]['Size'] + '\x22]');
                } catch {
                    await _0x30a33f['click']('label[data-eu-size=\x22' + _0x3bab2b[_0x2fc451]['Size'] + '.0\x22]');
                }
            }
            await _0x304dee(0xbb8), await _0x30a33f['$$eval']('.raffle__checkbox-label', _0x4b130a => _0x4b130a['forEach'](_0x510241 => _0x510241['click']())), await _0x304dee(0x7d0), console['log'](_0x92a1de() + '\x20[' + _0x3f82a3['name'] + ']\x20Task\x20' + (_0x2fc451 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x30a33f['click']('#raffle__form-submit'), await _0x304dee(0x1388);
            try {
                await _0x30a33f['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x159a64['green'](_0x92a1de() + '\x20[' + _0x3f82a3['name'] + ']\x20Task\x20' + (_0x2fc451 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x4a7bd7) {
                console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x2fc451 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x4a7bd7));
            }
        } catch (_0x13a495) {
            console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x2fc451 + 0x1) + '\x20:\x20' + _0x13a495));
        } finally {
            _0x426991 && _0x426991['close'](), console['log']('Waiting\x20for\x20' + _0x222040['delay'] + '\x20ms'), await _0x304dee(_0x222040['delay']);
        }
    }
}
async function _0x42a838(_0x39d71a, _0x5aa432, _0x15a431) {
    var _0x14c2bd = ![], _0x5dfb63 = ![];
    if (_0x222040['captchaKey'] == '' || _0x222040['captchaKey'] == undefined)
        return console['log'](_0x159a64['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0xb88319['use'](_0x4cd4c1()), _0xb88319['use'](_0x1cd94a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x222040['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2f7495 = 0x0; _0x2f7495 < _0x5aa432['length']; _0x2f7495++) {
        var _0x33d924 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x5aa432[_0x2f7495]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5aa432[_0x2f7495]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x3b5beb
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x222040['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4fe7b4
                }
            ]
        }];
        const _0x27193e = { 'embeds': _0x33d924 };
        _0x42dae0(_0x39d71a['name'] + '\x20Task\x20' + (_0x2f7495 + 0x1) + '\x20/\x20' + _0x5aa432['length'] + '\x20||\x20File:\x20' + _0x2f8f64 + '\x20Proxies:\x20' + _0x11240), await _0xfdf155(_0x5aa432, _0x2f7495);
        if (_0x5aa432[_0x2f7495]['Email'] == '' || _0x5aa432[_0x2f7495]['Url'] == '' || _0x5aa432[_0x2f7495]['FirstName'] == '' || _0x5aa432[_0x2f7495]['LastName'] == '') {
            console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x2f7495 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x222040['useRandomProxy'] = ![])
            var _0x3fec7a = _0x15a431[_0x2f7495]['split'](':');
        else
            var _0x17e12b = Math['round'](Math['random']() * (_0x15a431['length'] - 0x1)), _0x3fec7a = _0x15a431[_0x17e12b]['split'](':');
        const _0x3bd505 = await _0xb88319['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3fec7a[0x0] + ':' + _0x3fec7a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x50c22d = await _0x3bd505['newPage']();
            await _0x50c22d['authenticate']({
                'username': '' + _0x3fec7a[0x2],
                'password': '' + _0x3fec7a[0x3]
            }), console['log'](_0x92a1de() + '\x20[' + _0x39d71a['name'] + ']\x20Task\x20' + (_0x2f7495 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x50c22d['setRequestInterception'](!![]), _0x50c22d['on']('request', _0x9b2b65 => {
                _0x9b2b65['resourceType']() === 'image' || _0x9b2b65['resourceType']() === 'font' || _0x9b2b65['resourceType']() === 'media' ? _0x9b2b65['abort']() : _0x9b2b65['continue']();
            }), await _0x50c22d['goto']('' + _0x5aa432[_0x2f7495]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](_0x92a1de() + '\x20[' + _0x39d71a['name'] + ']\x20Task\x20' + (_0x2f7495 + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x50c22d['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x50c22d['type']('#comp_firstname', '' + _0x5aa432[_0x2f7495]['FirstName']), await _0x50c22d['waitForSelector']('#comp_lastname'), await _0x50c22d['type']('#comp_lastname', '' + _0x5aa432[_0x2f7495]['LastName']), await _0x50c22d['waitForSelector']('#comp_email'), await _0x50c22d['type']('#comp_email', '' + _0x5aa432[_0x2f7495]['Email']), await _0x50c22d['waitForSelector']('#comp_paypalemail'), await _0x50c22d['type']('#comp_paypalemail', '' + _0x5aa432[_0x2f7495]['Email']), await _0x50c22d['waitForSelector']('#comp_mobile_end'), await _0x50c22d['type']('#comp_mobile_end', '' + _0x5aa432[_0x2f7495]['Phone']), await _0x50c22d['waitForSelector']('#comp_dob'), await _0x50c22d['type']('#comp_dob', '08/09/1992'), console['log'](_0x92a1de() + '\x20[' + _0x39d71a['name'] + ']\x20Task\x20' + (_0x2f7495 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x5aa432[_0x2f7495]['Size'] == 'RANDOM') {
                const _0x209239 = await _0x50c22d['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xfa0809 => {
                    return _0xfa0809['map'](_0x1b8987 => _0x1b8987['value']);
                });
                var _0x41faf5 = Math['round'](Math['random']() * (_0x209239['length'] - 0x2));
                await _0x50c22d['select']('#shoesize', _0x209239[_0x41faf5 + 0x1]), await _0x304dee(0x3e8);
            } else {
                const _0x152200 = await _0x50c22d['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x20f64 => {
                    return _0x20f64['map'](_0x918982 => _0x918982['innerText']);
                }), _0x2afdc0 = await _0x50c22d['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x586913 => {
                    return _0x586913['map'](_0x268d04 => _0x268d04['value']);
                });
                var _0x47c4df = _0x5aa432[_0x2f7495]['Size'];
                for (var _0x510c83 = 0x1; _0x510c83 < _0x2afdc0['length']; _0x510c83++) {
                    var _0x348411 = _0x152200[_0x510c83]['split']('\x20')[0x0];
                    if (_0x348411 == _0x47c4df) {
                        await _0x50c22d['select']('#shoesize', _0x2afdc0[_0x510c83]);
                        break;
                    } else {
                        if (_0x510c83 + 0x1 == _0x2afdc0['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x50c22d['waitForSelector']('#comp_address1'), await _0x50c22d['type']('#comp_address1', _0x5aa432[_0x2f7495]['Address1'] + '\x20' + _0x5aa432[_0x2f7495]['HouseNumber']), await _0x50c22d['waitForSelector']('#comp_address2'), await _0x50c22d['type']('#comp_address2', '' + _0x5aa432[_0x2f7495]['Address2']), await _0x50c22d['waitForSelector']('#comp_address2'), await _0x50c22d['type']('#comp_address3', '' + _0x5aa432[_0x2f7495]['City']), await _0x50c22d['waitForSelector']('#comp_postcode'), await _0x50c22d['type']('#comp_postcode', '' + _0x5aa432[_0x2f7495]['Zip']), console['log'](_0x92a1de() + '\x20[' + _0x39d71a['name'] + ']\x20Task\x20' + (_0x2f7495 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x304dee(0x4b0), await _0x50c22d['click']('label#emailhold'), await _0x304dee(0x5dc), await _0x50c22d['click']('#preauth_tandc_email\x20>\x20label'), await _0x304dee(0x5dc), await _0x50c22d['click']('#submit'), await _0x50c22d['waitForSelector']('#paymentWrap'), console['log'](_0x92a1de() + '\x20[' + _0x39d71a['name'] + ']\x20Task\x20' + (_0x2f7495 + 0x1) + '\x20:\x20' + _0x159a64['blue']('Awaiting\x20Paypal\x20Payment')), _0x3bd505['on']('targetcreated', async _0x39e346 => {
                if (_0x39e346['type']() === 'page') {
                    const _0x39f753 = await _0x39e346['page']();
                    async function _0x1c80a6() {
                        try {
                            await _0x50c22d['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x5dfb63 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x87110c() {
                        try {
                            await _0x50c22d['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x14c2bd = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x87110c(), _0x1c80a6(), await _0x304dee(0x493e0);
                }
            });
            async function _0x3def19() {
                for (let _0x48baed = 0x0; _0x48baed < 0x12c; _0x48baed++) {
                    if (_0x14c2bd == !![]) {
                        console['log'](_0x159a64['green'](_0x92a1de() + '\x20[' + _0x39d71a['name'] + ']\x20Task\x20' + (_0x2f7495 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x3a99aa(_0x571a63, _0x27193e);
                        return;
                    } else {
                        if (_0x5dfb63)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x304dee(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x304dee(0xbb8), await _0x50c22d['click']('.zoid-outlet'), await _0x304dee(0x7d0), await _0x3def19();
        } catch (_0x12827d) {
            console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x39d71a['name'] + ']\x20Task\x20' + (_0x2f7495 + 0x1) + '\x20:\x20' + _0x12827d)), _0x33d924[0x0]['title'] = 'Failed\x20entry', _0x33d924[0x0]['description'] = _0x39d71a['name'] + ':\x20' + _0x12827d, await _0x3a99aa(_0x9cf284, _0x27193e);
        } finally {
            _0x3bd505 && _0x3bd505['close'](), console['log']('Waiting\x20for\x20' + _0x222040['delay'] + '\x20ms'), await _0x304dee(_0x222040['delay']);
        }
    }
}
async function _0x586286(_0x49ada3, _0x5ebc21, _0x232a8a, _0x1f7af2) {
    var _0x41fffb = {}, _0xd55087 = [], _0x32b59e = {}, _0x43f305 = [
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
    !_0x1f7af2 && (_0x1f7af2 = {});
    if (_0x5ebc21 != 'ver') {
        _0x42dae0(_0x232a8a['name'] + '\x20Task\x20' + (_0x49ada3 + 0x1) + '\x20/\x20' + _0x1f7af2['length'] + '\x20||\x20File:\x20' + _0x2f8f64 + '\x20Proxies:\x20' + _0x11240), await _0xfdf155(_0x1f7af2, _0x49ada3), _0xd55087 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3b5beb
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1f7af2[_0x49ada3]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x222040['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4fe7b4
                }
            ]
        }], _0x32b59e = { 'embeds': _0xd55087 }, _0x41fffb = _0x232a8a['data'];
        _0x5ebc21 == 'exp' ? _0x41fffb['data']['attributes']['email'] = '' + _0x1f7af2[_0x49ada3]['FirstName'] + _0x1f7af2[_0x49ada3]['LastName'] + _0x222040['catchall'] : _0x41fffb['data']['attributes']['email'] = '' + _0x1f7af2[_0x49ada3]['Email'];
        if (_0x1f7af2[_0x49ada3]['Size'] == 'RANDOM') {
        }
        _0x41fffb['data']['attributes']['properties']['$first_name'] = '' + _0x1f7af2[_0x49ada3]['FirstName'], _0x41fffb['data']['attributes']['properties']['$last_name'] = '' + _0x1f7af2[_0x49ada3]['LastName'], _0x41fffb['data']['attributes']['properties']['$address1'] = _0x1f7af2[_0x49ada3]['Address1'] + '\x20' + _0x1f7af2[_0x49ada3]['Address2'] + '\x20' + _0x1f7af2[_0x49ada3]['HouseNumber'], _0x41fffb['data']['attributes']['properties']['$zip'] = '' + _0x1f7af2[_0x49ada3]['Zip'], _0x41fffb['data']['attributes']['properties']['$city'] = '' + _0x1f7af2[_0x49ada3]['City'], _0x41fffb['data']['attributes']['properties']['$country'] = '' + _0x1f7af2[_0x49ada3]['Country'], _0x41fffb['data']['attributes']['properties']['Size'] = '' + _0x1f7af2[_0x49ada3]['Size'], _0x41fffb['data']['attributes']['properties']['$phone_number'] = '' + _0x1f7af2[_0x49ada3]['Phone'], _0x41fffb['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x1f7af2[_0x49ada3]['Follower'];
    }
    if (_0x222040['useRandomProxy'] = ![])
        var _0x439809 = _0x40cf02()[_0x49ada3]['split'](':');
    else
        var _0x5bb1a6 = Math['round'](Math['random']() * (_0x40cf02()['length'] - 0x1)), _0x439809 = _0x40cf02()[_0x5bb1a6]['split'](':');
    var _0x4bbbbf = {
        'jar': _0x27c0b7,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x232a8a['url'],
        'headers': _0x232a8a['headers'],
        'body': JSON['stringify'](_0x41fffb),
        'proxy': 'http://' + _0x439809[0x2] + ':' + _0x439809[0x3] + '@' + _0x439809[0x0] + ':' + _0x439809[0x1]
    };
    return _0x5ebc21 != 'ver' && (_0x4bbbbf['url'] = _0x232a8a['url'], _0x4bbbbf['headers'] = _0x232a8a['headers']), _0x5ebc21 == 'ver' && (_0x4bbbbf['method'] = 'GET'), new Promise(function (_0x1359c4, _0x264149) {
        callback = async (_0x428099, _0x5c9fe4, _0x275ee7) => {
            !_0x428099 && _0x5c9fe4['statusCode'] == 0xca || !_0x428099 && _0x5c9fe4['statusCode'] == 0xc8 ? (_0x5ebc21 != 'ver' && await _0x3a99aa(_0x571a63, _0x32b59e), _0x1359c4(console['log'](_0x159a64['green'](_0x92a1de() + '\x20[' + _0x232a8a['name'] + ']\x20Task\x20' + (_0x49ada3 + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x5ebc21 != 'ver' && (_0xd55087[0x0]['title'] = 'Failed\x20entry', _0xd55087[0x0]['description'] = '' + _0x428099, await _0x3a99aa(_0x9cf284, _0x32b59e)), _0x264149(console['log'](_0x92a1de() + '\x20[' + _0x232a8a['name'] + ']\x20Task\x20' + (_0x49ada3 + 0x1) + ':\x20' + _0x428099)));
        };
        try {
            _0x5ebc21 != 'ver' && console['log'](_0x92a1de() + '\x20[' + _0x232a8a['name'] + ']\x20Task\x20' + (_0x49ada3 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x41fffb['data']['attributes']['email']), _0x375cf2(_0x4bbbbf, callback);
        } catch (_0xa129c7) {
            console['log'](_0x92a1de() + '\x20Task\x20' + (_0x49ada3 + 0x1) + ':\x20' + _0xa129c7);
        }
    });
}
;
async function _0xc62c29() {
    await _0x42f0f0(), console['clear']();
    if (_0x4fe7b4 != 'devkey') {
        let _0x5950d0 = await _0x4eae43['autoUpdate']();
        if (_0x5950d0 === 'yes')
            return _0x2c5340('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x49382a == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x304dee(0x2710);
        ;
    }
    await _0x41312f(_0x49382a);
    if (_0x45f94a === ![])
        return console['log']('Closing\x20Browser'), await _0x304dee(0xbb8);
    else
        try {
            async function _0x251e2d() {
                _0x42dae0('JRaffles\x20' + _0x4fe7b4), console['clear'](), console['log']('Welcome\x20to\x20' + _0x159a64['cyan']('JRaffles();') + '\x20' + _0x4fe7b4), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x542c13 = 0x0; _0x542c13 < _0x2dd3af['length']; _0x542c13++) {
                    if (_0x2dd3af[_0x542c13]['name'] === 'Reload\x20Settings' || _0x2dd3af[_0x542c13]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x542c13 + ')\x20[' + _0x2dd3af[_0x542c13]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x2dd3af['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x2dd3af['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x172f2b();
                if (_0x2dd3af[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x5d0270(_0x2dd3af[taskModule]['modules']);
                    var _0x4426c2 = _0x2dd3af[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x312bcd = await _0x3e6d79();
                    await _0x10d300(_0x312bcd), await _0x22309b();
                    var _0x5a9951 = await _0x2b72a3();
                    return await afewFunction(_0x4d71ca[_0x333b2b], 'nor', _0x4426c2, _0x5a9951, _0x312bcd), _0x251e2d();
                } else {
                    if (_0x2dd3af[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x5d0270(_0x2dd3af[taskModule]['modules']);
                        var _0x4426c2 = _0x2dd3af[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x312bcd = await _0x3e6d79(), _0xf9b4f3 = await _0x2b72a3();
                            console['log']('Starting\x20' + _0xf9b4f3['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x291d16 = 0x0; _0x291d16 < _0xf9b4f3['length']; _0x291d16++) {
                                console['log'](_0x92a1de() + '\x20[' + _0x4426c2['name'] + ']\x20Task\x20' + (_0x291d16 + 0x1) + ':\x20Getting\x20Session'), await _0x13a74c(_0x291d16, 'nor', _0x4426c2, _0xf9b4f3, _0x312bcd), console['log'](_0x92a1de() + '\x20[' + _0x4426c2['name'] + ']\x20Sleeping\x20for\x20' + _0x222040['MahaDelay'] + '\x20ms'), await _0x304dee(_0x222040['MahaDelay']);
                            }
                            ;
                            return _0x251e2d();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x312bcd = await _0x3e6d79();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x49b7c1(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x291d16 = 0x0; _0x291d16 < links['length']; _0x291d16++) {
                                    _0x4426c2['url'] = links[_0x291d16], console['log'](_0x92a1de() + '\x20[' + _0x4426c2['name'] + ']\x20Task\x20' + (_0x291d16 + 0x1) + ':\x20Getting\x20Session'), await _0x13a74c(_0x291d16, 'ver', _0x4426c2, _0xf9b4f3, _0x312bcd), console['log'](_0x92a1de() + '\x20[' + _0x4426c2['name'] + ']\x20Sleeping\x20for\x20' + _0x222040['verificationDelay'] + '\x20ms'), await _0x304dee(_0x222040['verificationDelay']);
                                }
                                ;
                                return _0x251e2d();
                            }
                        }
                    } else {
                        if (_0x2dd3af[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x312bcd = await _0x3e6d79(), _0x37aab4 = await _0x2b72a3();
                            return await _0x3548e(_0x37aab4, _0x312bcd), await _0x304dee(0x1388), _0x251e2d();
                        } else {
                            if (_0x2dd3af[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x5d0270(_0x2dd3af[taskModule]['modules']);
                                var _0x4426c2 = _0x2dd3af[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x47bf7f = await _0x2b72a3();
                                    console['log']('Starting\x20' + _0x159a64['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x291d16 = 0x0; _0x291d16 < _0x47bf7f['length']; _0x291d16++) {
                                        console['log'](_0x92a1de() + '\x20[' + _0x4426c2['name'] + ']\x20Task\x20' + (_0x291d16 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x586286(_0x291d16, 'nor', _0x4426c2, _0x47bf7f);
                                        } catch {
                                            console['log'](_0x159a64['red'](_0x92a1de() + '\x20[' + _0x4426c2['name'] + ']\x20Task\x20' + (_0x291d16 + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](_0x92a1de() + '\x20[' + _0x4426c2['name'] + ']\x20Sleeping\x20for\x20' + _0x222040['delay'] + '\x20ms'), await _0x304dee(_0x222040['delay']);
                                    }
                                    return _0x251e2d();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x49b7c1(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x291d16 = 0x0; _0x291d16 < links['length']; _0x291d16++) {
                                            try {
                                                _0x4426c2['url'] = links[_0x291d16], console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Task\x20' + (_0x291d16 + 0x1) + ':\x20Getting\x20Session'), await _0x586286(_0x291d16, 'ver', _0x4426c2), console['log'](_0x92a1de() + '\x20[' + _0x2dd3af[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x222040['verificationDelay'] + '\x20ms'), await _0x304dee(_0x222040['verificationDelay']);
                                            } catch (_0x3b29d8) {
                                                console['log'](_0x3b29d8);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x251e2d();
                                    }
                                }
                                ;
                            } else {
                                if (_0x2dd3af[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x5d0270(_0x2dd3af[taskModule]['modules']);
                                    var _0x4426c2 = _0x2dd3af[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x5339cb('https://bouncewear.com/nl/account/register', _0x4426c2);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x2dd3af[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x5d0270(_0x2dd3af[taskModule]['modules']);
                                        var _0x4426c2 = _0x2dd3af[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x312bcd = await _0x3e6d79(), _0x229024 = await _0x2b72a3();
                                            return await _0x2960f0('https://patta.nl/account/register', _0x4426c2, _0x229024, _0x312bcd), _0x251e2d();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x312bcd = await _0x3e6d79(), _0x229024 = await _0x2b72a3();
                                                return await _0x220174('', _0x4426c2, _0x229024, _0x312bcd), _0x251e2d();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x2dd3af[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await _0x5d0270(_0x2dd3af[taskModule]['modules']);
                                            var _0x4426c2 = _0x2dd3af[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x312bcd = await _0x3e6d79(), _0x3d772 = await _0x2b72a3();
                                                return await _0x4e0b00('https://www.kickz.com/nl/login/', _0x4426c2, _0x3d772, _0x312bcd), _0x251e2d();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x312bcd = await _0x3e6d79(), _0x3d772 = await _0x2b72a3();
                                                    return await _0x3ad07e(_0x4426c2, _0x3d772, _0x312bcd), _0x251e2d();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x2dd3af[taskModule]['name'] == 'JD') {
                                                taskFunction = await _0x5d0270(_0x2dd3af[taskModule]['modules']);
                                                var _0x4426c2 = _0x2dd3af[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x312bcd = await _0x3e6d79(), _0x580c22 = await _0x2b72a3();
                                                    return await _0x42a838(_0x4426c2, _0x580c22, _0x312bcd), _0x251e2d();
                                                }
                                            } else {
                                                if (_0x2dd3af[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x2cafab = 0x0;
                                                    for (const _0xda4d05 in _0x222040) {
                                                        console['log']('(' + _0x2cafab + ')\x20' + _0xda4d05 + '\x20:\x20' + _0x222040[_0xda4d05]), _0x2cafab++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x2cafab + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0xf70ca1 = await _0x2026d3();
                                                    if (_0xf70ca1 == _0x2cafab)
                                                        return _0x251e2d();
                                                    console['clear'];
                                                    var _0x49d1a5 = 0x0;
                                                    for (var _0x1b82dd in _0x222040) {
                                                        if (_0xf70ca1 == _0x49d1a5) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x1b82dd + '\x20:'), _0x222040[_0x1b82dd] = await _0x47dea4(), _0x1918a1['writeFileSync']('../settings.json', JSON['stringify'](_0x222040));
                                                            break;
                                                        } else
                                                            _0x49d1a5++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await _0x304dee(0xbb8), _0x251e2d();
                                                } else {
                                                    if (_0x2dd3af[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await _0x42f0f0(), _0x251e2d();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            _0x2dd3af[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x1cd66e = await _0x3a6986();
                                                            _0x1cd66e == 'ModuleVoorDeBoys' ? (await _0x10d300(), await _0x22309b(), await afewFunction(_0x4d71ca[_0x333b2b], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x304dee(0xbb8));
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
            await _0x251e2d();
        } catch (_0x34da61) {
            return console['log'](_0x34da61), await _0x304dee(0x3a98);
        }
}
;
_0x42dae0('JRaffles\x20' + _0x4fe7b4), _0x42f0f0(), _0xc62c29();