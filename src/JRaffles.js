var _0x8ec5de = require('exe');
const { execFile: _0x32b8e9 } = require('child_process'), _0x3a2bc2 = require('puppeteer-extra'), _0x3a3aeb = require('puppeteer-extra-plugin-recaptcha'), _0x4db75e = require('puppeteer-extra-plugin-stealth'), _0x5e4c6a = require('chalk'), _0x3f3a14 = require('node-bash-title'), _0x2294d1 = require('fs'), _0x547a56 = require('axios'), _0x4a5a50 = require('papaparse');
var _0x2508a8 = require('random-name');
const _0x5302e6 = require('request');
var _0x41d069 = require('prompt');
const _0x4f7497 = _0x5302e6['jar']();
var _0x1a926d = {};
const _0x4f6739 = 'https://discord.com/api/webhooks/1044989608708030595/HUZ2q06RoQQ24n_rWWEsL6AgM5yXEeUi2SO9VyOLuQgGBeHIlXpPl9Xr5jYMLXwJKwPS', _0x4a274a = 'https://discord.com/api/webhooks/1045001962262900766/ZXWdz3BSjNO08alABR8ERNBgR2SNcydTW-9XxsFuphHYfwHaojLBu3hkw1Ygi3MxOZdz';
var _0x43eaef;
const _0x366cca = JSON['parse'](_0x2294d1['readFileSync']('../package.json', 'utf-8')), _0x1701e7 = _0x366cca['version'];
var _0x2d0484, _0x1d998d, _0x342515, _0x21c217, _0x570c36, _0x32ef12, _0x4ed0e1;
const _0x2acc37 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x326dce = ![];
const _0x460fdf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x6cf884 = '0123456789';
var _0x2d1caf = _0x460fdf['split']('');
const _0x2379ed = require('auto-git-update'), { PageEmittedEvents: _0x5afe25 } = require('puppeteer'), { getRandomValues: _0x191fbd } = require('crypto'), { resolve: _0x28b196 } = require('path'), _0x57f595 = {
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
}, _0x5d5971 = new _0x2379ed(_0x57f595);
async function _0x3df126() {
    _0x570c36 = _0x2294d1['readdirSync']('../proxies'), _0x21c217 = _0x2294d1['readdirSync']('../tasks'), _0x1a926d = JSON['parse'](_0x2294d1['readFileSync']('../settings.json', 'utf-8')), !_0x1a926d['delay'] && (_0x1a926d['delay'] = 0x2710, _0x2294d1['writeFileSync']('../settings.json', JSON['stringify'](_0x1a926d))), !_0x1a926d['captchaKey'] && (_0x1a926d['captchaKey'] = '', _0x2294d1['writeFileSync']('../settings.json', JSON['stringify'](_0x1a926d))), !_0x1a926d['useRandomProxy'] && (_0x1a926d['useRandomProxy'] = ![], _0x2294d1['writeFileSync']('../settings.json', JSON['stringify'](_0x1a926d))), !_0x1a926d['webhook'] && (_0x1a926d['webhook'] = '', _0x2294d1['writeFileSync']('../settings.json', JSON['stringify'](_0x1a926d))), _0x43eaef = _0x1a926d['webhook'], _0x32ef12 = _0x1a926d['licenseKey'];
}
let _0x149e3b, _0x42cd58 = [], _0x9dcd91;
const _0x1f4f4c = _0x12d52a => new Promise(_0x128212 => setTimeout(_0x128212, _0x12d52a));
async function _0x40fdab(_0x3972e9) {
    return _0x547a56['get']('https://api.hyper.co/v4/licenses/' + _0x3972e9, { 'headers': { 'Authorization': 'Bearer\x20' + _0x2acc37 } })['then'](_0x552d04 => _0x552d04['data'])['catch'](() => null);
}
;
async function _0x21b1a1(_0x171025) {
    console['clear'](), console['log']('Checking\x20license\x20' + _0x32ef12 + '...'), await _0x1f4f4c(0x5dc);
    const _0x2e6a82 = await _0x40fdab(_0x171025);
    _0x4ed0e1 = JSON['stringify'](_0x2e6a82['user']['username']);
    if (!_0x2e6a82)
        return console['log']('License\x20not\x20found');
    if (!_0x2e6a82['user'])
        return console['log']('License\x20not\x20bound');
    return _0x2e6a82['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x326dce = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x326dce = ![]);
}
async function _0x56eb51() {
    var _0x254012 = await _0x41d069['get']('Module');
    return console['clear'](), _0x254012['Module'];
}
;
async function _0x1167a1() {
    var _0x10c030 = await _0x41d069['get']('Setting');
    return console['clear'](), _0x10c030['Setting'];
}
async function _0x4eb599() {
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x2808d9 = 0x0; _0x2808d9 < _0x21c217['length']; _0x2808d9++) {
        console['log']('\x20(' + _0x2808d9 + ')\x20' + _0x21c217[_0x2808d9]);
    }
    console['log']('');
    var _0x3b4be4 = await _0x41d069['get']('Task'), _0x3ea077 = _0x2294d1['readFileSync']('../tasks/' + _0x21c217[_0x3b4be4['Task']], 'utf-8');
    return _0x342515 = _0x4a5a50['parse'](_0x3ea077, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x5e4c6a['blue'](_0x21c217[_0x3b4be4['Task']])), _0x2d0484 = _0x21c217[_0x3b4be4['Task']], _0x342515;
}
async function _0x936acf() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x134f29 = 0x0; _0x134f29 < _0x570c36['length']; _0x134f29++) {
        console['log']('\x20(' + _0x134f29 + ')\x20' + _0x570c36[_0x134f29]);
    }
    console['log']('');
    var _0x3c1604 = await _0x41d069['get']('Proxies'), _0x30514b = _0x2294d1['readFileSync']('../proxies/' + _0x570c36[_0x3c1604['Proxies']], 'utf-8')['split']('\x0a');
    let _0x218619 = _0x30514b['map']((_0x5c5b8e, _0x2500ee) => {
        sanatizeProxy = _0x5c5b8e['replace']('\x0d', '');
        if (_0x30514b[_0x2500ee + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x1d998d = _0x570c36[_0x3c1604['Proxies']], console['clear'](), _0x218619;
}
async function _0xbb53be() {
    var _0x794c3a = await _0x41d069['get']('Value');
    return console['clear'](), _0x794c3a['Value'];
}
async function _0x1ece35(_0x56f2db) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x220d35 = 0x0; _0x220d35 < _0x56f2db['length']; _0x220d35++) {
        console['log']('\x20(' + _0x220d35 + ')\x20[' + _0x56f2db[_0x220d35]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x1437b5 = await _0x41d069['get']('Module');
    return _0x1437b5['Module'];
}
async function _0x245bc9() {
    var _0x5d9789 = await _0x41d069['get']('Password');
    return console['clear'](), _0x5d9789['Password'];
}
;
async function _0x16e38a() {
    var _0x2611f9 = await _0x41d069['get']('Links');
    return _0x2611f9['Links'];
}
;
async function _0x5e5e1e() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x256a92 = 0x0; _0x256a92 < _0x42cd58['length']; _0x256a92++) {
        console['log']('\x20(' + _0x256a92 + ')\x20' + _0x42cd58[_0x256a92]);
    }
    ;
    console['log']();
    let _0x20e0fa = await _0x41d069['get']('Product');
    console['clear'](), _0x9dcd91 = _0x20e0fa['Product'];
    return;
}
;
function _0x2a720b() {
    var _0x3bf6fc = new Date(Date['now']())['toLocaleTimeString']();
    return _0x3bf6fc;
}
;
const _0x13a6d3 = [
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
async function _0xf63e46(_0xebc908, _0x35d5e5) {
    let _0x5f14f1 = { 'headers': { 'content-type': 'application/json' } };
    await _0x547a56['post'](_0xebc908, _0x35d5e5, _0x5f14f1);
}
;
async function _0x5a298d(_0x347662, _0x42abec) {
    var _0x5c176d = _0x347662[_0x42abec]['Address1']['split'](''), _0x41d072 = _0x347662[_0x42abec]['Address2']['split'](''), _0x3d4911 = _0x347662[_0x42abec]['Email']['split']('@');
    for (var _0x4613b4 = 0x0; _0x4613b4 < _0x5c176d['length']; _0x4613b4++) {
        if (_0x5c176d[_0x4613b4] == 'X') {
            var _0x26910a = Math['round'](Math['random']() * (_0x460fdf['length'] - 0x1));
            _0x5c176d[_0x4613b4] = _0x2d1caf[_0x26910a];
        }
    }
    ;
    for (var _0x4613b4 = 0x0; _0x4613b4 < _0x41d072['length']; _0x4613b4++) {
        if (_0x41d072[_0x4613b4] == 'X') {
            var _0x26910a = Math['round'](Math['random']() * (_0x460fdf['length'] - 0x1));
            _0x41d072[_0x4613b4] = _0x2d1caf[_0x26910a];
        }
    }
    ;
    _0x347662[_0x42abec]['FirstName'] == 'RANDOM' && (_0x347662[_0x42abec]['FirstName'] = _0x2508a8['first']());
    _0x347662[_0x42abec]['LastName'] == 'RANDOM' && (_0x347662[_0x42abec]['LastName'] = _0x2508a8['last']());
    _0x3d4911[0x0] == 'RANDOM' ? _0x3d4911[0x0] = '' + _0x2508a8['first']() + _0x2508a8['last']() + '@' : _0x3d4911[0x0] = _0x3d4911[0x0] + '@';
    _0x347662[_0x42abec]['Email'] = _0x3d4911['join'](''), _0x347662[_0x42abec]['Address1'] = _0x5c176d['join'](''), _0x347662[_0x42abec]['Address2'] = _0x41d072['join']('');
    return;
}
;
function _0x3780fa() {
    let _0x9f5e49 = proxyFile['split']('\x0a'), _0x4676f5 = _0x9f5e49['map']((_0x4ed652, _0x460b4e) => {
        sanatizeProxy = _0x4ed652['replace']('\x0d', '');
        if (_0x9f5e49[_0x460b4e + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4676f5;
}
;
async function _0x32d3f9(_0x30d1b7) {
    var _0x48a42d = _0x30d1b7[0x1]['split'](':');
    const _0xb58c77 = await _0x3a2bc2['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x48a42d[0x0] + ':' + _0x48a42d[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x5e6240 = await _0xb58c77['newPage']();
        await _0x5e6240['authenticate']({
            'username': '' + _0x48a42d[0x2],
            'password': '' + _0x48a42d[0x3]
        }), console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x5e6240['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5e6240['setRequestInterception'](!![]), _0x5e6240['on']('request', _0x11690b => {
            _0x11690b['resourceType']() === 'image' || _0x11690b['resourceType']() === 'font' || _0x11690b['resourceType']() === 'media' ? _0x11690b['abort']() : _0x11690b['continue']();
        }), await _0x5e6240['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x5e6240['waitForTimeout'](0xbb8), await _0x5e6240['waitForSelector']('.product-card');
        const _0x40e38e = await _0x5e6240['$$eval']('a.product-card', _0x38bec7 => {
            return _0x38bec7['map'](_0x1ad61f => _0x1ad61f['href']);
        });
        return _0x42cd58 = _0x40e38e;
    } catch (_0x99868) {
        console['log']('\x20' + _0x99868);
    } finally {
        _0xb58c77['close'](), console['clear']();
    }
}
;
async function _0x29c1b3(_0x5c19e4, _0x4c9422, _0x55a80b, _0x538856, _0x579ed3) {
    await _0x5a298d(_0x538856, _0x5c19e4);
    var _0x24bc1a = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x4ed0e1
            },
            {
                'name': 'Size',
                'value': '' + _0x538856[_0x5c19e4]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x1a926d['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x1701e7
            }
        ]
    }];
    const _0x5c8d9e = { 'embeds': _0x24bc1a };
    if (_0x1a926d['useRandomProxy'] = ![])
        var _0x290407 = _0x579ed3[_0x5c19e4]['split'](':');
    else
        var _0x3007fb = Math['round'](Math['random']() * (_0x579ed3['length'] - 0x1)), _0x290407 = _0x579ed3[_0x3007fb]['split'](':');
    var _0x12e7d9 = _0x55a80b['data'];
    _0x4c9422 == 'exp' ? _0x12e7d9['data']['attributes']['email'] = '' + _0x538856[_0x5c19e4]['FirstName'] + _0x538856[_0x5c19e4]['LastName'] + _0x1a926d['catchall'] : _0x12e7d9['data']['attributes']['email'] = '' + _0x538856[_0x5c19e4]['Email'];
    _0x12e7d9['data']['attributes']['properties']['$first_name'] = '' + _0x538856[_0x5c19e4]['FirstName'], _0x12e7d9['data']['attributes']['properties']['$last_name'] = '' + _0x538856[_0x5c19e4]['LastName'], _0x12e7d9['data']['attributes']['properties']['$address1'] = _0x538856[_0x5c19e4]['Address1'] + '\x20' + _0x538856[_0x5c19e4]['Address2'], _0x12e7d9['data']['attributes']['properties']['$zip'] = '' + _0x538856[_0x5c19e4]['Zip'], _0x12e7d9['data']['attributes']['properties']['$city'] = '' + _0x538856[_0x5c19e4]['City'], _0x12e7d9['data']['attributes']['properties']['$country'] = '' + _0x538856[_0x5c19e4]['Country'], _0x12e7d9['data']['attributes']['properties']['Size'] = '' + _0x538856[_0x5c19e4]['Size'], _0x12e7d9['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x538856[_0x5c19e4]['Follower'];
    var _0x4b90a2 = {
        'jar': _0x4f7497,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x55a80b['url'],
        'headers': _0x55a80b['headers'],
        'body': JSON['stringify'](_0x12e7d9),
        'proxy': 'http://' + _0x290407[0x2] + ':' + _0x290407[0x3] + '@' + _0x290407[0x0] + ':' + _0x290407[0x1]
    };
    return _0x4c9422 === 'ver' && (_0x4b90a2['method'] = 'GET'), new Promise(function (_0x427f23, _0x1975e6) {
        callback = async (_0x119402, _0x5a08b0, _0x1d8ccf) => {
            !_0x119402 && _0x5a08b0['statusCode'] == 0xca || !_0x119402 && _0x5a08b0['statusCode'] == 0xc8 ? _0x427f23(console['log'](_0x5e4c6a['green'](_0x2a720b() + '\x20[' + _0x55a80b['name'] + ']\x20Task\x20' + (_0x5c19e4 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x24bc1a[0x0]['title'] = 'Failed\x20entry', _0x24bc1a[0x0]['description'] = '' + _0x119402, await _0xf63e46(_0x4a274a, _0x5c8d9e), _0x1975e6(console['log'](_0x2a720b() + '\x20[' + _0x55a80b['name'] + ']\x20Task\x20' + (_0x5c19e4 + 0x1) + ':\x20' + _0x119402)));
        };
        try {
            _0x4c9422 === 'ver' ? console['log'](_0x2a720b() + '\x20[' + _0x55a80b['name'] + ']\x20Task\x20' + (_0x5c19e4 + 0x1) + ':\x20Verifying.') : console['log'](_0x2a720b() + '\x20[' + _0x55a80b['name'] + ']\x20Task\x20' + (_0x5c19e4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x12e7d9['data']['attributes']['email']), _0x5302e6(_0x4b90a2, callback);
        } catch (_0x23719f) {
            console['log'](_0x2a720b() + '\x20Task\x20' + (_0x5c19e4 + 0x1) + ':\x20' + _0x23719f);
        }
    });
}
;
async function _0x4e8195(_0x3ef89d, _0x3fa3) {
    var _0x49fad2;
    _0x3a2bc2['use'](_0x4db75e()), _0x3a2bc2['use'](_0x3a3aeb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1a926d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x170a9f = 0x0; _0x170a9f < _0x3ef89d['length']; _0x170a9f++) {
        await _0x5a298d(_0x3ef89d, _0x170a9f);
        if (_0x3ef89d[_0x170a9f]['Email'] == '' || _0x3ef89d[_0x170a9f]['FirstName'] == '' || _0x3ef89d[_0x170a9f]['LastName'] == '' || _0x3ef89d[_0x170a9f]['Country'] == '' || _0x3ef89d[_0x170a9f]['Size'] == '' || _0x3ef89d[_0x170a9f]['Address1'] == '' || _0x3ef89d[_0x170a9f]['Zip'] == '') {
            console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        console['log'](_0x3ef89d[_0x170a9f]['Url']);
        async function _0x15b25e() {
            var _0x4ea962 = await _0x547a56['get']('https://releases.footshop.com/api/raffles/yHnlwoQB3xHSyCfZ5_K_')['then'](_0x5e9961 => _0x5e9961['data'])['catch'](() => undefined);
            console['log'](_0x4ea962);
            var _0x375252 = _0x4ea962['sizeSets']['Men']['sizes'];
            _0x375252['length'] == 0x0 && (_0x375252 = _0x4ea962['sizeSets']['Women']['sizes'], _0x375252['length'] == 0x0 && (_0x375252 = _0x4ea962['sizeSets']['Unisex']['sizes'], _0x375252['length'] == 0x0 && (_0x375252 = _0x4ea962['sizeSets']['Kids']['sizes'])));
            ;
            async function _0x3128b7() {
                for (var _0x264e84 = 0x0; _0x264e84 < _0x375252['length']; _0x264e84++) {
                    if (_0x375252[_0x264e84]['eur'] == _0x3ef89d[_0x170a9f]['Size'])
                        return _0x49fad2 = _0x375252[_0x264e84]['id'], console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x20Found\x20SizePid'), !![];
                }
                return console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x20Size\x20' + _0x3ef89d[_0x170a9f]['Size'] + '\x20not\x20found'), ![];
            }
            ;
            let _0x386c92 = await _0x3128b7();
            if (_0x386c92 == ![])
                return ![];
        }
        let _0x1290ee = await _0x15b25e();
        if (_0x1290ee == ![])
            continue;
        if (_0x3ef89d[_0x170a9f]['Email'] == '' || _0x3ef89d[_0x170a9f]['FirstName'] == '' || _0x3ef89d[_0x170a9f]['LastName'] == '' || _0x3ef89d[_0x170a9f]['Country'] == '' || _0x3ef89d[_0x170a9f]['Size'] == '' || _0x3ef89d[_0x170a9f]['Address1'] == '' || _0x3ef89d[_0x170a9f]['Zip'] == '' || _0x3ef89d[_0x170a9f]['Phone'] == '') {
            console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x31fb86 = 'https://releases.footshop.com/register/' + _0x3ef89d[_0x170a9f]['Url'] + '/Men/' + _0x49fad2;
        if (_0x1a926d['useRandomProxy'] = ![])
            var _0x4d7a21 = _0x3fa3[_0x170a9f]['split'](':');
        else
            var _0x462a80 = Math['round'](Math['random']() * (_0x3fa3['length'] - 0x1)), _0x4d7a21 = _0x3fa3[_0x462a80]['split'](':');
        const _0x443fff = await _0x3a2bc2['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x4d7a21[0x0] + ':' + _0x4d7a21[0x1]]
        });
        try {
            const _0x1a69a6 = await _0x443fff['newPage']();
            await _0x1a69a6['authenticate']({
                'username': '' + _0x4d7a21[0x2],
                'password': '' + _0x4d7a21[0x3]
            }), console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1a69a6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1a69a6['setRequestInterception'](!![]), _0x1a69a6['on']('request', _0x2100a1 => {
                _0x2100a1['resourceType']() === 'image' || _0x2100a1['resourceType']() === 'font' || _0x2100a1['resourceType']() === 'media' ? _0x2100a1['abort']() : _0x2100a1['continue']();
            }), await _0x1a69a6['goto']('' + _0x31fb86 + _0x49fad2), await _0x1a69a6['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1a69a6['type']('input[name=\x22email\x22]', '' + _0x3ef89d[_0x170a9f]['Email']), await _0x1f4f4c(0x640), await _0x1a69a6['type']('input[name=\x22phone\x22]', '' + _0x3ef89d[_0x170a9f]['Phone']), await _0x1f4f4c(0x4b0), await _0x1a69a6['click']('button.btn.continue-button__1RtsS'), await _0x1f4f4c(0x4b0);
            try {
                await _0x1a69a6['type']('input[name=\x22firstName\x22]', '' + _0x3ef89d[_0x170a9f]['FirstName']), await _0x1f4f4c(0x258);
            } catch {
                console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x20Duplicate\x20Entry'));
                continue;
            }
            await _0x1a69a6['type']('input[name=\x22lastName\x22]', '' + _0x3ef89d[_0x170a9f]['LastName']), await _0x1f4f4c(0xc8), await _0x1a69a6['type']('input[name=\x22instagramUsername\x22]', '' + _0x3ef89d[_0x170a9f]['Follower']), await _0x1f4f4c(0x4b0), await _0x1a69a6['click']('button.btn.continue-button__1RtsS'), await _0x1f4f4c(0x3e8), console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1a69a6['select']('select[name=\x22country\x22]', '' + _0x3ef89d[_0x170a9f]['Country']), await _0x1f4f4c(0x2bc), await _0x1a69a6['type']('input[name=\x22streetName\x22]', '' + _0x3ef89d[_0x170a9f]['Address1']), await _0x1f4f4c(0x258), await _0x1a69a6['type']('input[name=\x22houseNumber\x22]', '' + _0x3ef89d[_0x170a9f]['HouseNumber'] + _0x3ef89d[_0x170a9f]['Address2']), await _0x1f4f4c(0xc8), await _0x1a69a6['type']('input[name=\x22postalCode\x22]', '' + _0x3ef89d[_0x170a9f]['Zip']), await _0x1f4f4c(0x1f4), await _0x1a69a6['type']('input[name=\x22city\x22]', '' + _0x3ef89d[_0x170a9f]['City']), await _0x1f4f4c(0x4b0), await _0x1a69a6['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x1f4f4c(0x4b0), await _0x1a69a6['click']('button.btn.continue-button__1RtsS'), await _0x1f4f4c(0x4b0), console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1a69a6['solveRecaptchas'](), console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x1f4f4c(0xbb8), await _0x1a69a6['click']('button.btn.continue-button__1RtsS'), await _0x1f4f4c(0x1388), console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1a69a6['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1a69a6['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1f4f4c(0x4b0), await _0x1a69a6['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x3ef89d[_0x170a9f]['CardNumber']), await _0x1f4f4c(0x320), await _0x1a69a6['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x3ef89d[_0x170a9f]['ExpiryDate']), await _0x1f4f4c(0x4b0), await _0x1a69a6['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x3ef89d[_0x170a9f]['CVV']), await _0x1f4f4c(0x226), await _0x1a69a6['type']('input[name=\x22holderName\x22]', '' + _0x3ef89d[_0x170a9f]['NameOnCard']), await _0x1f4f4c(0x226), await _0x1a69a6['click']('button.adyen-checkout__button'), console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x1a69a6['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x1f4f4c(0xbb8), console['log'](_0x5e4c6a['green'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch {
                console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x203DS\x20Failed'));
            }
        } catch (_0x5b36dc) {
            console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x170a9f + 0x1) + '\x20:\x20' + _0x5b36dc);
        } finally {
            _0x443fff['close'](), console['log']('Waiting\x20for\x20' + _0x1a926d['footshopDelay'] + '\x20ms'), await _0x1f4f4c(_0x1a926d['footshopDelay']);
        }
    }
}
afewFunction = async (_0x52c66b, _0x11949e, _0x341f13, _0x573131, _0x1c687e) => {
    for (var _0x50fefa = 0x0; _0x50fefa < _0x573131['length']; _0x50fefa++) {
        _0x3f3a14(_0x341f13['name'] + '\x20Task\x20' + (_0x50fefa + 0x1) + '\x20/\x20' + _0x573131['length'] + '\x20||\x20File:\x20' + _0x2d0484 + '\x20Proxies:\x20' + _0x1d998d), await _0x5a298d(_0x573131, _0x50fefa);
        var _0x1941d4 = [{
            'type': 'rich',
            'title': 'Succesful\x20AFEW\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4ed0e1
                },
                {
                    'name': 'Product',
                    'value': '' + _0x52c66b
                },
                {
                    'name': 'Size',
                    'value': '' + _0x573131[_0x50fefa]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1a926d['AfewDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1701e7
                }
            ]
        }];
        const _0x58eff4 = { 'embeds': _0x1941d4 };
        if (_0x573131[_0x50fefa]['Email'] == '' || _0x573131[_0x50fefa]['FirstName'] == '' || _0x573131[_0x50fefa]['LastName'] == '' || _0x573131[_0x50fefa]['Country'] == '' || _0x573131[_0x50fefa]['Size'] == '' || _0x573131[_0x50fefa]['Address1'] == '' || _0x573131[_0x50fefa]['Zip'] == '') {
            console['log'](_0x2a720b() + '\x20[' + _0x341f13['name'] + ']\x20Task\x20' + (_0x50fefa + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1a926d['useRandomProxy'] = ![])
            var _0x35074e = _0x1c687e[_0x50fefa]['split'](':');
        else
            var _0x277fd1 = Math['round'](Math['random']() * (_0x1c687e['length'] - 0x1)), _0x35074e = _0x1c687e[_0x277fd1]['split'](':');
        const _0x919974 = await _0x3a2bc2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x35074e[0x0] + ':' + _0x35074e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4fd595 = await _0x919974['newPage']();
            await _0x4fd595['setDefaultNavigationTimeout'](0x1d4c0), await _0x4fd595['authenticate']({
                'username': '' + _0x35074e[0x2],
                'password': '' + _0x35074e[0x3]
            }), console['log'](_0x2a720b() + '\x20[' + _0x341f13['name'] + ']\x20Task\x20' + (_0x50fefa + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4fd595['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4fd595['setRequestInterception'](!![]), _0x4fd595['on']('request', _0x2cf132 => {
                _0x2cf132['resourceType']() === 'image' || _0x2cf132['resourceType']() === 'font' || _0x2cf132['resourceType']() === 'media' ? _0x2cf132['abort']() : _0x2cf132['continue']();
            }), await _0x4fd595['goto'](_0x52c66b, { 'waitUntil': 'networkidle2' }), console['log'](_0x2a720b() + '\x20[' + _0x341f13['name'] + ']\x20Task\x20' + (_0x50fefa + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x4fd595['waitForTimeout'](0xfa0), console['log'](_0x2a720b() + '\x20[' + _0x341f13['name'] + ']\x20Task\x20' + (_0x50fefa + 0x1) + '\x20:\x20Cookies\x20received'), await _0x4fd595['waitForTimeout'](0x320);
            if (_0x573131[_0x50fefa]['Size'] == 'RANDOM') {
                console['log'](_0x2a720b() + '\x20[' + _0x341f13['name'] + ']\x20Task\x20' + (_0x50fefa + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x14db36 = await _0x4fd595['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x5a2fbc => {
                    return _0x5a2fbc['map'](_0x5485c1 => _0x5485c1['href']);
                });
                var _0x11a801 = Math['round'](Math['random']() * (_0x14db36['length'] - 0x1));
                await _0x4fd595['goto']('' + _0x14db36[_0x11a801]);
            } else {
                console['log'](_0x2a720b() + '\x20[' + _0x341f13['name'] + ']\x20Task\x20' + (_0x50fefa + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x573131[_0x50fefa]['Size']);
                try {
                    const _0x53e5d7 = await _0x4fd595['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x573131[_0x50fefa]['Size'] + '\x22]\x20>\x20a', _0x3a69b0 => {
                        return _0x3a69b0['map'](_0x585a76 => _0x585a76['href']);
                    });
                    await _0x4fd595['goto']('' + _0x53e5d7[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x49962e) {
                    console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x341f13['name'] + ']\x20Task\x20' + (_0x50fefa + 0x1) + '\x20:\x20' + _0x49962e + '\x20Size\x20not\x20found')), _0x1941d4[0x0]['title'] = 'Failed\x20entry', _0x1941d4[0x0]['description'] = 'Size\x20not\x20found', await _0xf63e46(_0x4a274a, _0x58eff4);
                    continue;
                }
                try {
                    await _0x4fd595['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x573131[_0x50fefa]['Size'] + '\x22]'), await _0x4fd595['waitForTimeout'](0x320), await _0x4fd595['click']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x573131[_0x50fefa]['Size'] + '\x22]');
                } catch (_0x1dfb58) {
                    console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x341f13['name'] + ']\x20Task\x20' + (_0x50fefa + 0x1) + '\x20:\x20' + _0x1dfb58 + '\x20Size\x20not\x20found')), _0x1941d4[0x0]['title'] = 'Failed\x20entry', _0x1941d4[0x0]['description'] = 'Size\x20not\x20found', await _0xf63e46(_0x4a274a, _0x58eff4);
                    continue;
                }
            }
            await _0x4fd595['waitForTimeout'](0x258), await _0x4fd595['type']('#raffle-instagram', '' + _0x573131[_0x50fefa]['Follower'], { 'delay': 0x64 }), await _0x4fd595['waitForTimeout'](0x384), await _0x4fd595['click']('#raffle-terms'), await _0x4fd595['waitForTimeout'](0x384), await _0x4fd595['evaluate'](() => {
                const _0x5ee4b0 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x5ee4b0['click']();
            }), await _0x4fd595['waitForTimeout'](0xbb8), await _0x4fd595['waitForSelector']('#checkout_email'), await _0x1f4f4c(0x3e8), console['log'](_0x2a720b() + '\x20[' + _0x341f13['name'] + ']\x20Task\x20' + (_0x50fefa + 0x1) + '\x20:\x20Filling\x20Information');
            _0x11949e == 'sec' ? await _0x4fd595['type']('#checkout_email', '' + _0x573131[_0x50fefa]['FirstName'] + _0x573131[_0x50fefa]['LastName'] + _0x1a926d['catchall'], 0x32) : await _0x4fd595['type']('#checkout_email', '' + _0x573131[_0x50fefa]['Email'], 0x32);
            await _0x1f4f4c(0x320), await _0x4fd595['select']('#checkout_shipping_address_country', '' + _0x573131[_0x50fefa]['Country']), await _0x4fd595['waitForTimeout'](0x258), await _0x4fd595['type']('#checkout_shipping_address_first_name', '' + _0x573131[_0x50fefa]['FirstName']), await _0x4fd595['waitForTimeout'](0x320), await _0x4fd595['type']('#checkout_shipping_address_last_name', '' + _0x573131[_0x50fefa]['LastName']), await _0x4fd595['waitForTimeout'](0x2bc), await _0x4fd595['type']('#checkout_shipping_address_address1', _0x573131[_0x50fefa]['Address1'] + '\x20' + _0x573131[_0x50fefa]['HouseNumber']), await _0x4fd595['waitForTimeout'](0x2bc), await _0x4fd595['type']('#checkout_shipping_address_address2', '' + _0x573131[_0x50fefa]['Address2']), await _0x4fd595['waitForTimeout'](0x2bc);
            _0x573131[_0x50fefa]['Postcode'] == undefined ? await _0x4fd595['type']('#checkout_shipping_address_zip', '' + _0x573131[_0x50fefa]['Zip']) : await _0x4fd595['type']('#checkout_shipping_address_zip', '' + _0x573131[_0x50fefa]['Postcode']);
            await _0x4fd595['waitForTimeout'](0x2bc), await _0x4fd595['type']('#checkout_shipping_address_city', '' + _0x573131[_0x50fefa]['City']), await _0x4fd595['waitForTimeout'](0x2bc), console['log'](_0x2a720b() + '\x20[' + _0x341f13['name'] + ']\x20Task\x20' + (_0x50fefa + 0x1) + '\x20:\x20Getting\x20Shipping'), _0x4fd595['evaluate'](() => {
                const _0x124d9b = document['querySelector']('#continue_button');
                for (var _0xf3bd4d = 0x0; _0xf3bd4d < 0x5; _0xf3bd4d++) {
                    if (_0x124d9b) {
                        _0x124d9b['click']();
                        break;
                    } else
                        _0x1f4f4c(0xfa0);
                }
            }), await _0x4fd595['waitForTimeout'](0x1194), await _0x4fd595['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 }), _0x4fd595['evaluate'](() => {
                const _0x4ec9c8 = document['querySelector']('#continue_button');
                for (var _0x9f9feb = 0x0; _0x9f9feb < 0x5; _0x9f9feb++) {
                    if (_0x4ec9c8) {
                        _0x4ec9c8['click']();
                        break;
                    } else
                        _0x1f4f4c(0xfa0);
                }
            }), await _0x4fd595['waitForTimeout'](0x7d0), console['log'](_0x2a720b() + '\x20[' + _0x341f13['name'] + ']\x20Task\x20' + (_0x50fefa + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4fd595['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x4fd595['evaluate'](() => {
                const _0x582cd3 = document['querySelector']('#continue_button');
                for (var _0x56a80a = 0x0; _0x56a80a < 0x5; _0x56a80a++) {
                    if (_0x582cd3) {
                        _0x582cd3['click']();
                        break;
                    } else
                        _0x1f4f4c(0xfa0);
                }
            }), await _0x4fd595['waitForTimeout'](0x1194), await _0x4fd595['waitForSelector']('#continue_button'), _0x4fd595['evaluate'](() => {
                const _0x51879f = document['querySelector']('#continue_button');
                for (var _0x75d751 = 0x0; _0x75d751 < 0x5; _0x75d751++) {
                    if (_0x51879f) {
                        _0x51879f['click']();
                        break;
                    } else
                        _0x1f4f4c(0xfa0);
                }
            });
            try {
                await _0x4fd595['waitForSelector']('div[data-step=\x22thank_you\x22]');
            } catch (_0x41b561) {
                console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x341f13['name'] + ']\x20Task\x20' + (_0x50fefa + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x41b561));
            }
            console['log'](_0x5e4c6a['green'](_0x2a720b() + '\x20[' + _0x341f13['name'] + ']\x20Task\x20' + (_0x50fefa + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0xf63e46(_0x4f6739, _0x58eff4);
        } catch (_0x5765a3) {
            console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x341f13['name'] + ']\x20Task\x20' + (_0x50fefa + 0x1) + '\x20:\x20' + _0x5765a3)), _0x1941d4[0x0]['title'] = 'Failed\x20entry', _0x1941d4[0x0]['description'] = '' + _0x5765a3, await _0xf63e46(_0x4a274a, _0x58eff4);
        } finally {
            _0x919974 && _0x919974['close']();
            if (_0x50fefa + 0x1 == _0x573131['length']) {
                console['log'](_0x5e4c6a['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x1f4f4c(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x1a926d['AfewDelay'] + '\x20ms'), await _0x1f4f4c(_0x1a926d['AfewDelay']);
        }
    }
};
async function _0x473ea5(_0x4b2492, _0x4ecff6, _0x1ccf10, _0x1e43f9) {
    _0x3a2bc2['use'](_0x4db75e()), _0x3a2bc2['use'](_0x3a3aeb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1a926d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x7ab9d = 0x0; _0x7ab9d < _0x1ccf10['length']; _0x7ab9d++) {
        _0x3f3a14(_0x4ecff6['name'] + '\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20/\x20' + _0x1ccf10['length'] + '\x20||\x20File:\x20' + _0x2d0484 + '\x20Proxies:\x20' + _0x1d998d);
        var _0x57cd33 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4ed0e1
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1a926d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1701e7
                }
            ]
        }];
        const _0x2ed947 = { 'embeds': _0x57cd33 };
        await _0x5a298d(_0x1ccf10, _0x7ab9d);
        if (_0x1ccf10[_0x7ab9d]['Email'] == '' || _0x1ccf10[_0x7ab9d]['Password'] == '' || _0x1ccf10[_0x7ab9d]['FirstName'] == '' || _0x1ccf10[_0x7ab9d]['LastName'] == '') {
            console['log'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1a926d['useRandomProxy'] = ![])
            var _0x360a5b = _0x1e43f9[_0x7ab9d]['split'](':');
        else
            var _0x4dd1e2 = Math['round'](Math['random']() * (_0x1e43f9['length'] - 0x1)), _0x360a5b = _0x1e43f9[_0x4dd1e2]['split'](':');
        const _0x125ba8 = await _0x3a2bc2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x360a5b[0x0] + ':' + _0x360a5b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1349b8 = await _0x125ba8['newPage']();
            await _0x1349b8['authenticate']({
                'username': '' + _0x360a5b[0x2],
                'password': '' + _0x360a5b[0x3]
            }), console['log'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1349b8['setRequestInterception'](!![]), _0x1349b8['on']('request', _0x537b94 => {
                _0x537b94['resourceType']() === 'image' || _0x537b94['resourceType']() === 'font' || _0x537b94['resourceType']() === 'media' ? _0x537b94['abort']() : _0x537b94['continue']();
            }), await _0x1349b8['goto'](_0x4b2492), await _0x1f4f4c(0xbb8), console['log'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x1349b8['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1349b8['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1349b8['waitForSelector']('#button-register'), await _0x1f4f4c(0x7d0), await _0x1349b8['evaluate'](() => {
                const _0x126186 = document['querySelector']('#button-register');
                _0x126186['click']();
            }), console['log'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1f4f4c(0x1388), await _0x1349b8['waitForSelector']('#customer_salutation'), await _0x1349b8['select']('#customer_salutation', 'mr'), await _0x1f4f4c(0x7d0), await _0x1349b8['waitForSelector']('#customer_firstname'), await _0x1349b8['type']('#customer_firstname', '' + _0x1ccf10[_0x7ab9d]['FirstName']), await _0x1f4f4c(0x352), await _0x1349b8['waitForSelector']('#customer_lastname'), await _0x1349b8['type']('#customer_lastname', '' + _0x1ccf10[_0x7ab9d]['LastName']), await _0x1f4f4c(0x352), await _0x1349b8['type']('#email-input', '' + _0x1ccf10[_0x7ab9d]['Email']), await _0x1f4f4c(0x352), await _0x1349b8['type']('#email-confirm-input', '' + _0x1ccf10[_0x7ab9d]['Email']), await _0x1f4f4c(0x352), await _0x1349b8['type']('#register-password', '' + _0x1ccf10[_0x7ab9d]['Password']), await _0x1f4f4c(0x352), await _0x1349b8['type']('#password-confirm', '' + _0x1ccf10[_0x7ab9d]['Password']), await _0x1f4f4c(0x352), console['log'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x1349b8['click']('#consent'), await _0x1f4f4c(0x1f4);
            const _0x417f55 = await _0x1349b8['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x417f55) {
                console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x1349b8['click']('#buttonRegister');
            try {
                await _0x1349b8['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x5e4c6a['yellow'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20Account\x20' + _0x1ccf10[_0x7ab9d]['Email'] + '\x20Generated!')), console['log'](_0x5e4c6a['yellow'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x1ccf10[_0x7ab9d]['Email'])), await _0x1f4f4c(0x4b0);
            async function _0x314225() {
                console['log'](_0x5e4c6a['yellow'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x12dfc9 = await _0x41d069['get']('Code');
                return _0x12dfc9['Code'];
            }
            ;
            code = await _0x314225(), _0x1f4f4c(0x320), console['log'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20Verifying..'), await _0x1349b8['type']('#verificationCode', code), await _0x1f4f4c(0x1f4), await _0x1349b8['click']('#buttonVerify'), await _0x1f4f4c(0x190), await _0x1349b8['click']('#buttonVerify'), await _0x1f4f4c(0x3e8);
            try {
                await _0x1349b8['waitForSelector']('div.b-user_greeting'), console['log'](_0x5e4c6a['green'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20Account\x20' + _0x1ccf10[_0x7ab9d]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x2294d1['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x1ccf10[_0x7ab9d]['Email'] + ',' + _0x1ccf10[_0x7ab9d]['Password'] + ','), console['log'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20Account\x20' + _0x1ccf10[_0x7ab9d]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27'), await _0xf63e46(_0x4f6739, _0x2ed947);
            } catch {
                console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x3ff28c) {
            console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x4ecff6['name'] + ']\x20Task\x20' + (_0x7ab9d + 0x1) + '\x20:\x20' + _0x3ff28c)), _0x57cd33[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x57cd33[0x0]['description'] = '' + _0x3ff28c, await _0xf63e46(_0x4a274a, _0x2ed947);
        } finally {
            _0x125ba8 && _0x125ba8['close'](), console['log']('Waiting\x20for\x20' + _0x1a926d['delay'] + '\x20ms'), await _0x1f4f4c(_0x1a926d['delay']);
        }
    }
}
async function _0x16ab08(_0x15c9d2, _0xc8308c, _0xbeedf7) {
    _0x3a2bc2['use'](_0x4db75e()), _0x3a2bc2['use'](_0x3a3aeb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1a926d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x191a4e = 0x0; _0x191a4e < _0xc8308c['length']; _0x191a4e++) {
        _0x3f3a14(_0x15c9d2['name'] + '\x20Task\x20' + (_0x191a4e + 0x1) + '\x20/\x20' + _0xc8308c['length'] + '\x20||\x20File:\x20' + _0x2d0484 + '\x20Proxies:\x20' + _0x1d998d);
        var _0x3db297 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4ed0e1
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1a926d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1701e7
                }
            ]
        }];
        const _0x1554b5 = { 'embeds': _0x3db297 };
        await _0x5a298d(_0xc8308c, _0x191a4e);
        if (_0xc8308c[_0x191a4e]['Email'] == '' || _0xc8308c[_0x191a4e]['Password'] == '' || _0xc8308c[_0x191a4e]['FirstName'] == '' || _0xc8308c[_0x191a4e]['LastName'] == '') {
            console['log'](_0x2a720b() + '\x20[' + _0x15c9d2['name'] + ']\x20Task\x20' + (_0x191a4e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1a926d['useRandomProxy'] = ![])
            var _0x15e370 = _0xbeedf7[_0x191a4e]['split'](':');
        else
            var _0x33f19d = Math['round'](Math['random']() * (_0xbeedf7['length'] - 0x1)), _0x15e370 = _0xbeedf7[_0x33f19d]['split'](':');
        const _0x51f2c3 = await _0x3a2bc2['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x15e370[0x0] + ':' + _0x15e370[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x351798 = await _0x51f2c3['newPage']();
            await _0x351798['authenticate']({
                'username': '' + _0x15e370[0x2],
                'password': '' + _0x15e370[0x3]
            }), console['log'](_0x2a720b() + '\x20[' + _0x15c9d2['name'] + ']\x20Task\x20' + (_0x191a4e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x351798['setRequestInterception'](!![]), _0x351798['on']('request', _0x3e6789 => {
                _0x3e6789['resourceType']() === 'image' || _0x3e6789['resourceType']() === 'font' || _0x3e6789['resourceType']() === 'media' ? _0x3e6789['abort']() : _0x3e6789['continue']();
            }), await _0x351798['goto']('https://www.kickz.com/nl/login/', { 'waitUntil': 'networkidle2' }), await _0x1f4f4c(0xbb8), console['log'](_0x2a720b() + '\x20[' + _0x15c9d2['name'] + ']\x20Task\x20' + (_0x191a4e + 0x1) + '\x20:\x20Logging\x20in'), await _0x351798['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x351798['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x351798['waitForSelector']('#username'), await _0x351798['type']('#username', _0xc8308c[_0x191a4e]['Email']), await _0x351798['waitForSelector']('#password'), await _0x351798['type']('#password', _0xc8308c[_0x191a4e]['Password']), await _0x1f4f4c(0x190), await _0x351798['click']('#buttonSubmit'), await _0x351798['waitForSelector']('div.b-user_greeting'), console['log'](_0x2a720b() + '\x20[' + _0x15c9d2['name'] + ']\x20Task\x20' + (_0x191a4e + 0x1) + '\x20:\x20Getting\x20Product'), await _0x1f4f4c(0x1f4), await _0x351798['goto']('' + _0xc8308c[_0x191a4e]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x2a720b() + '\x20[' + _0x15c9d2['name'] + ']\x20Task\x20' + (_0x191a4e + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0xc8308c[_0x191a4e]['Size']);
            let _0x4f738d = _0xc8308c[_0x191a4e]['Size']['replace']('.5', '\x201/2');
            await _0x351798['click']('button[title=\x22' + _0x4f738d + '\x22]'), await _0x1f4f4c(0x1f4);
            try {
                await _0x351798['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x1f4f4c(0x12c), console['log'](_0x2a720b() + '\x20[' + _0x15c9d2['name'] + ']\x20Task\x20' + (_0x191a4e + 0x1) + '\x20:\x20Filling\x20Information'), await _0x351798['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x1f4f4c(0x12c), await _0x351798['type']('#dwfrm_raffle_addressFields_firstName', _0xc8308c[_0x191a4e]['FirstName']), await _0x1f4f4c(0x12c), await _0x351798['type']('#dwfrm_raffle_addressFields_lastName', _0xc8308c[_0x191a4e]['LastName']), await _0x1f4f4c(0x12c), await _0x351798['select']('#dwfrm_raffle_addressFields_country', _0xc8308c[_0x191a4e]['Country']), await _0x1f4f4c(0x12c), await _0x351798['type']('#dwfrm_raffle_addressFields_city', _0xc8308c[_0x191a4e]['City']), await _0x1f4f4c(0x12c);
            _0xc8308c[_0x191a4e]['Postcode'] == undefined && (_0xc8308c[_0x191a4e]['Postcode'] = _0xc8308c[_0x191a4e]['Zip']);
            await _0x351798['type']('#dwfrm_raffle_addressFields_postalCode', _0xc8308c[_0x191a4e]['Postcode']), await _0x1f4f4c(0x12c), await _0x351798['type']('#dwfrm_raffle_addressFields_address1', _0xc8308c[_0x191a4e]['Address1']), await _0x1f4f4c(0x12c), await _0x351798['type']('#dwfrm_raffle_addressFields_address2', _0xc8308c[_0x191a4e]['HouseNumber']), await _0x1f4f4c(0x12c), await _0x351798['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0xc8308c[_0x191a4e]['Address2']), await _0x1f4f4c(0x12c), await _0x351798['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x1f4f4c(0x12c), await _0x351798['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0xc8308c[_0x191a4e]['Follower']), await _0x1f4f4c(0x1f4), await _0x351798['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x1f4f4c(0x1f4), console['log'](_0x2a720b() + '\x20[' + _0x15c9d2['name'] + ']\x20Task\x20' + (_0x191a4e + 0x1) + '\x20:\x20' + _0x5e4c6a['blue']('Awaiting\x20Paypal\x20Payment')), await _0x351798['click']('.paypal-buttons.paypal-buttons-context-iframe.paypal-buttons-label-checkout.paypal-buttons-layout-vertical');
            try {
                await _0x351798['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x5e4c6a['green'](_0x2a720b() + '\x20[' + _0x15c9d2['name'] + ']\x20Task\x20' + (_0x191a4e + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0xf63e46(_0x4f6739, _0x1554b5);
            } catch (_0x4262e2) {
                console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x15c9d2['name'] + ']\x20Task\x20' + (_0x191a4e + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x4262e2));
            }
        } catch (_0x4dd251) {
            console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x15c9d2['name'] + ']\x20Task\x20' + (_0x191a4e + 0x1) + '\x20:\x20' + _0x4dd251)), _0x3db297[0x0]['title'] = 'Failed\x20kickz\x20Entry', _0x3db297[0x0]['description'] = '' + _0x4dd251, await _0xf63e46(_0x4a274a, _0x1554b5);
        } finally {
            _0x51f2c3 && _0x51f2c3['close'](), console['log']('Waiting\x20for\x20' + _0x1a926d['AfewDelay'] + '\x20ms'), await _0x1f4f4c(_0x1a926d['AfewDelay']);
        }
    }
}
async function _0x28c837(_0x57e8eb, _0x256567) {
    _0x3a2bc2['use'](_0x4db75e()), _0x3a2bc2['use'](_0x3a3aeb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1a926d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x260512 = 0x0; _0x260512 < bouncewear['length']; _0x260512++) {
        await _0x5a298d(bouncewear, _0x260512);
        if (bouncewear[_0x260512]['Email'] == '' || bouncewear[_0x260512]['Password'] == '' || bouncewear[_0x260512]['FirstName'] == '' || bouncewear[_0x260512]['LastName'] == '') {
            console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x260512 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1a926d['useRandomProxy'] = ![])
            var _0x34e0e8 = _0x3780fa()[_0x260512]['split'](':');
        else
            var _0x3d1311 = Math['round'](Math['random']() * (_0x3780fa()['length'] - 0x1)), _0x34e0e8 = _0x3780fa()[_0x3d1311]['split'](':');
        const _0x4630d5 = await _0x3a2bc2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x34e0e8[0x0] + ':' + _0x34e0e8[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x240c0c = await _0x4630d5['newPage']();
            await _0x240c0c['authenticate']({
                'username': '' + _0x34e0e8[0x2],
                'password': '' + _0x34e0e8[0x3]
            }), console['log'](_0x2a720b() + '\x20[' + _0x256567['name'] + ']\x20Task\x20' + (_0x260512 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x240c0c['setRequestInterception'](!![]), _0x240c0c['on']('request', _0x495f94 => {
                _0x495f94['resourceType']() === 'image' || _0x495f94['resourceType']() === 'font' || _0x495f94['resourceType']() === 'media' ? _0x495f94['abort']() : _0x495f94['continue']();
            }), await _0x240c0c['goto'](_0x57e8eb), await _0x1f4f4c(0xbb8), await _0x240c0c['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x2a720b() + '\x20[' + _0x256567['name'] + ']\x20Task\x20' + (_0x260512 + 0x1) + '\x20:\x20Filling\x20information'), await _0x240c0c['type']('#RegisterForm-FirstName', '' + bouncewear[_0x260512]['FirstName']), await _0x1f4f4c(0x226), await _0x240c0c['type']('#RegisterForm-LastName', '' + bouncewear[_0x260512]['LastName']), await _0x1f4f4c(0x226), await _0x240c0c['type']('#RegisterForm-email', '' + bouncewear[_0x260512]['Email']), await _0x1f4f4c(0x226), await _0x240c0c['type']('#RegisterForm-password', '' + bouncewear[_0x260512]['Password']), await _0x1f4f4c(0x226), await _0x240c0c['click']('#marketing'), console['log'](_0x2a720b() + '\x20[' + _0x256567['name'] + ']\x20Task\x20' + (_0x260512 + 0x1) + '\x20:\x20Submitting..'), await _0x240c0c['$eval']('#RegisterForm', _0x370b5e => _0x370b5e['submit']()), await _0x1f4f4c(0x1f40), console['log'](_0x2a720b() + '\x20[' + _0x256567['name'] + ']\x20Task\x20' + (_0x260512 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x240c0c['solveRecaptchas'](), await _0x240c0c['click']('.shopify-challenge__button.btn');
            async function _0x40dc9c() {
                for (var _0x32e897 = 0x0; _0x32e897 < 0x4; _0x32e897++) {
                    try {
                        console['log']('try'), await _0x240c0c['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x2a720b() + '\x20[' + _0x256567['name'] + ']\x20Task\x20' + (_0x260512 + 0x1) + '\x20:\x20' + _0x5e4c6a['red']('Catpcha\x20failed,\x20retrying..')), await _0x240c0c['solveRecaptchas'](), await _0x240c0c['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x40dc9c(), console['log'](_0x2a720b() + '\x20[' + _0x256567['name'] + ']\x20Task\x20' + (_0x260512 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x1f4f4c(0x1f4);
            try {
                await _0x240c0c['waitForSelector']('.featured-title'), await _0x1f4f4c(0x1f4), console['log'](_0x5e4c6a['green'](_0x2a720b() + '\x20[' + _0x256567['name'] + ']\x20Task\x20' + (_0x260512 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x260512]['Email'] + '\x20Generated!')), _0x2294d1['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x260512]['Email'] + ',' + bouncewear[_0x260512]['Password']), console['log'](_0x5e4c6a['yellow'](_0x2a720b() + '\x20[' + _0x256567['name'] + ']\x20Task\x20' + (_0x260512 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x260512]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x198a2e) {
                console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x260512 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x198a2e));
            }
        } catch (_0x5cc17d) {
            console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x260512 + 0x1) + '\x20:\x20' + _0x5cc17d));
        } finally {
            _0x4630d5 && _0x4630d5['close'](), console['log']('Waiting\x20for\x20' + _0x1a926d['delay'] + '\x20ms'), await _0x1f4f4c(_0x1a926d['delay']);
        }
    }
}
async function _0x56f995(_0x4403e7, _0x35a1cd, _0x55726b, _0x23c399) {
    _0x3a2bc2['use'](_0x4db75e()), _0x3a2bc2['use'](_0x3a3aeb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1a926d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x51b318 = 0x0; _0x51b318 < _0x55726b['length']; _0x51b318++) {
        _0x3f3a14(_0x35a1cd['name'] + '\x20Task\x20' + (_0x51b318 + 0x1) + '\x20/\x20' + _0x55726b['length'] + '\x20||\x20File:\x20' + _0x2d0484 + '\x20Proxies:\x20' + _0x1d998d), await _0x5a298d(_0x55726b, _0x51b318);
        if (_0x55726b[_0x51b318]['Email'] == '' || _0x55726b[_0x51b318]['Password'] == '' || _0x55726b[_0x51b318]['Password'] == undefined || _0x55726b[_0x51b318]['FirstName'] == '' || _0x55726b[_0x51b318]['LastName'] == '') {
            console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x51b318 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1a926d['useRandomProxy'] = ![])
            var _0x2f4ff2 = _0x23c399[_0x51b318]['split'](':');
        else
            var _0x57e97b = Math['round'](Math['random']() * (_0x23c399['length'] - 0x1)), _0x2f4ff2 = _0x23c399[_0x57e97b]['split'](':');
        const _0x32cc33 = await _0x3a2bc2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2f4ff2[0x0] + ':' + _0x2f4ff2[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xb65aae = await _0x32cc33['newPage']();
            await _0xb65aae['authenticate']({
                'username': '' + _0x2f4ff2[0x2],
                'password': '' + _0x2f4ff2[0x3]
            }), console['log'](_0x2a720b() + '\x20[' + _0x35a1cd['name'] + ']\x20Task\x20' + (_0x51b318 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xb65aae['setRequestInterception'](!![]), _0xb65aae['on']('request', _0x295ecf => {
                _0x295ecf['resourceType']() === 'image' || _0x295ecf['resourceType']() === 'font' || _0x295ecf['resourceType']() === 'media' ? _0x295ecf['abort']() : _0x295ecf['continue']();
            }), await _0xb65aae['goto'](_0x4403e7), await _0x1f4f4c(0xbb8), await _0xb65aae['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x2a720b() + '\x20[' + _0x35a1cd['name'] + ']\x20Task\x20' + (_0x51b318 + 0x1) + '\x20:\x20Filling\x20information'), await _0xb65aae['type']('#RegisterForm-FirstName', '' + _0x55726b[_0x51b318]['FirstName']), await _0x1f4f4c(0x226), await _0xb65aae['type']('#RegisterForm-LastName', '' + _0x55726b[_0x51b318]['LastName']), await _0x1f4f4c(0x226), await _0xb65aae['type']('#RegisterForm-email', '' + _0x55726b[_0x51b318]['Email']), await _0x1f4f4c(0x226), await _0xb65aae['type']('#RegisterForm-password', '' + _0x55726b[_0x51b318]['Password']), await _0x1f4f4c(0x226), console['log'](_0x2a720b() + '\x20[' + _0x35a1cd['name'] + ']\x20Task\x20' + (_0x51b318 + 0x1) + '\x20:\x20Submitting..'), await _0xb65aae['$eval']('#RegisterForm', _0xf7888b => _0xf7888b['submit']()), await _0x1f4f4c(0x1f40);
            try {
                await _0xb65aae['waitForSelector']('.home-page-grid__collection'), await _0x1f4f4c(0x1f4), console['log'](_0x5e4c6a['green'](_0x2a720b() + '\x20[' + _0x35a1cd['name'] + ']\x20Task\x20' + (_0x51b318 + 0x1) + '\x20:\x20Account\x20' + _0x55726b[_0x51b318]['Email'] + '\x20Generated!')), _0x2294d1['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x55726b[_0x51b318]['Email'] + ',' + _0x55726b[_0x51b318]['Password']), console['log'](_0x5e4c6a['yellow'](_0x2a720b() + '\x20[' + _0x35a1cd['name'] + ']\x20Task\x20' + (_0x51b318 + 0x1) + '\x20:\x20Account\x20' + _0x55726b[_0x51b318]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
            } catch (_0x37ecd6) {
                console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x51b318 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x37ecd6));
            }
        } catch (_0x34ab58) {
            console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x51b318 + 0x1) + '\x20:\x20' + _0x34ab58));
        } finally {
            _0x32cc33 && _0x32cc33['close'](), console['log']('Waiting\x20for\x20' + _0x1a926d['delay'] + '\x20ms'), await _0x1f4f4c(_0x1a926d['delay']);
        }
    }
}
async function _0x13b08e(_0xa04637, _0x602b2f, _0x23a264, _0x5be2b8) {
    _0x3a2bc2['use'](_0x4db75e()), _0x3a2bc2['use'](_0x3a3aeb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1a926d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x285e5b = 0x0; _0x285e5b < _0x23a264['length']; _0x285e5b++) {
        _0x3f3a14(_0x602b2f['name'] + '\x20Task\x20' + (_0x285e5b + 0x1) + '\x20/\x20' + _0x23a264['length'] + '\x20||\x20File:\x20' + _0x2d0484 + '\x20Proxies:\x20' + _0x1d998d), await _0x5a298d(_0x23a264, _0x285e5b);
        if (_0x23a264[_0x285e5b]['Email'] == '' || _0x23a264[_0x285e5b]['Password'] == '' || _0x23a264[_0x285e5b]['FirstName'] == '' || _0x23a264[_0x285e5b]['LastName'] == '') {
            console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x285e5b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1a926d['useRandomProxy'] = ![])
            var _0x74672d = _0x5be2b8[_0x285e5b]['split'](':');
        else
            var _0x1e1a9c = Math['round'](Math['random']() * (_0x5be2b8['length'] - 0x1)), _0x74672d = _0x5be2b8[_0x1e1a9c]['split'](':');
        const _0x371213 = await _0x3a2bc2['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x74672d[0x0] + ':' + _0x74672d[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5bb587 = await _0x371213['newPage']();
            await _0x5bb587['authenticate']({
                'username': '' + _0x74672d[0x2],
                'password': '' + _0x74672d[0x3]
            }), console['log'](_0x2a720b() + '\x20[' + _0x602b2f['name'] + ']\x20Task\x20' + (_0x285e5b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5bb587['setRequestInterception'](!![]), _0x5bb587['on']('request', _0x91aab3 => {
                _0x91aab3['resourceType']() === 'image' || _0x91aab3['resourceType']() === 'font' || _0x91aab3['resourceType']() === 'media' ? _0x91aab3['abort']() : _0x91aab3['continue']();
            }), await _0x5bb587['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x5bb587['waitForSelector']('#CustomerEmail'), console['log'](_0x2a720b() + '\x20[' + _0x602b2f['name'] + ']\x20Task\x20' + (_0x285e5b + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5bb587['type']('#CustomerEmail', '' + _0x23a264[_0x285e5b]['Email']), await _0x1f4f4c(0x12c), await _0x5bb587['type']('#CustomerPassword', '' + _0x23a264[_0x285e5b]['Password']), await _0x1f4f4c(0x226), await _0x5bb587['$eval']('#customer_login', _0x7e7aee => _0x7e7aee['submit']());
            try {
                await _0x5bb587['waitForSelector']('#orders'), await _0x1f4f4c(0x4b0);
            } catch {
                console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x602b2f['name'] + ']\x20Task\x20' + (_0x285e5b + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x5bb587['goto']('' + _0x23a264[_0x285e5b]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x1f4f4c(0xbb8), console['log'](_0x2a720b() + '\x20[' + _0x602b2f['name'] + ']\x20Task\x20' + (_0x285e5b + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x5bb587['waitForSelector']('#email');
            } catch {
                console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x602b2f['name'] + ']\x20Task\x20' + (_0x285e5b + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x5bb587['type']('#email', '' + _0x23a264[_0x285e5b]['Email']), await _0x1f4f4c(0x384), await _0x5bb587['type']('#first_name', '' + _0x23a264[_0x285e5b]['FirstName']), await _0x1f4f4c(0x514), await _0x5bb587['type']('#last_name', '' + _0x23a264[_0x285e5b]['LastName']), await _0x1f4f4c(0x514), await _0x5bb587['type']('#street_address', _0x23a264[_0x285e5b]['Address1'] + '\x20' + _0x23a264[_0x285e5b]['HouseNumber'] + '\x20' + _0x23a264[_0x285e5b]['Address2']), await _0x1f4f4c(0x2bc);
            _0x23a264[_0x285e5b]['Postcode'] == undefined && (_0x23a264[_0x285e5b]['Postcode'] = _0x23a264[_0x285e5b]['Zip']);
            await _0x5bb587['type']('#zip_code', '' + _0x23a264[_0x285e5b]['Postcode']), await _0x1f4f4c(0x320), await _0x5bb587['type']('#city', '' + _0x23a264[_0x285e5b]['City']), await _0x1f4f4c(0x320), await _0x5bb587['type']('#bday', '' + _0x23a264[_0x285e5b]['Bday']), await _0x1f4f4c(0x320), await _0x5bb587['type']('#instagram', '' + _0x23a264[_0x285e5b]['Follower']), await _0x1f4f4c(0x352);
            if (_0x23a264[_0x285e5b]['Size'] == 'RANDOM') {
                const _0x552ce4 = await _0x5bb587['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x1e7392 => {
                    return _0x1e7392['map'](_0x40de9a => _0x40de9a['textContent']);
                });
                var _0xfb8338 = Math['round'](Math['random']() * (_0x552ce4['length'] - 0x1));
                console['log'](_0x2a720b() + '\x20[' + _0x602b2f['name'] + ']\x20Task\x20' + (_0x285e5b + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x552ce4[_0xfb8338]), await _0x5bb587['click']('label[data-eu-size=\x22' + _0x552ce4[_0xfb8338] + '\x22]');
            } else {
                console['log'](_0x2a720b() + '\x20[' + _0x602b2f['name'] + ']\x20Task\x20' + (_0x285e5b + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x23a264[_0x285e5b]['Size']);
                try {
                    await _0x5bb587['click']('label[data-eu-size=\x22' + _0x23a264[_0x285e5b]['Size'] + '\x22]');
                } catch {
                    await _0x5bb587['click']('label[data-eu-size=\x22' + _0x23a264[_0x285e5b]['Size'] + '.0\x22]');
                }
            }
            await _0x1f4f4c(0xbb8), await _0x5bb587['$$eval']('.raffle__checkbox-label', _0x1c6353 => _0x1c6353['forEach'](_0x269f6b => _0x269f6b['click']())), await _0x1f4f4c(0x7d0), console['log'](_0x2a720b() + '\x20[' + _0x602b2f['name'] + ']\x20Task\x20' + (_0x285e5b + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x5bb587['click']('#raffle__form-submit'), await _0x1f4f4c(0x1388);
            try {
                await _0x5bb587['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x5e4c6a['green'](_0x2a720b() + '\x20[' + _0x602b2f['name'] + ']\x20Task\x20' + (_0x285e5b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x404df0) {
                console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x285e5b + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x404df0));
            }
        } catch (_0x3c1e17) {
            console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x285e5b + 0x1) + '\x20:\x20' + _0x3c1e17));
        } finally {
            _0x371213 && _0x371213['close'](), console['log']('Waiting\x20for\x20' + _0x1a926d['delay'] + '\x20ms'), await _0x1f4f4c(_0x1a926d['delay']);
        }
    }
}
async function _0x55313c(_0x28c31b, _0x40684b, _0x3b7aa1) {
    var _0x329e1d = ![], _0x51c4ee = ![];
    _0x3a2bc2['use'](_0x4db75e()), _0x3a2bc2['use'](_0x3a3aeb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1a926d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5206c2 = 0x0; _0x5206c2 < _0x40684b['length']; _0x5206c2++) {
        var _0x93bb62 = [{
            'type': 'rich',
            'title': 'Succesfull\x20Entry',
            'description': '' + _0x28c31b['name'],
            'color': 0xc0d6d6,
            'url': '',
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4ed0e1
                },
                {
                    'name': 'Product',
                    'value': '' + _0x40684b[_0x5206c2]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x40684b[_0x5206c2]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1a926d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1701e7
                }
            ]
        }];
        const _0x102aa2 = { 'embeds': _0x93bb62 };
        _0x3f3a14(_0x28c31b['name'] + '\x20Task\x20' + (_0x5206c2 + 0x1) + '\x20/\x20' + _0x40684b['length'] + '\x20||\x20File:\x20' + _0x2d0484 + '\x20Proxies:\x20' + _0x1d998d), await _0x5a298d(_0x40684b, _0x5206c2);
        if (_0x40684b[_0x5206c2]['Email'] == '' || _0x40684b[_0x5206c2]['Url'] == '' || _0x40684b[_0x5206c2]['FirstName'] == '' || _0x40684b[_0x5206c2]['LastName'] == '') {
            console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x5206c2 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1a926d['useRandomProxy'] = ![])
            var _0x195d2a = _0x3b7aa1[_0x5206c2]['split'](':');
        else
            var _0x3717a9 = Math['round'](Math['random']() * (_0x3b7aa1['length'] - 0x1)), _0x195d2a = _0x3b7aa1[_0x3717a9]['split'](':');
        const _0x1f87be = await _0x3a2bc2['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x195d2a[0x0] + ':' + _0x195d2a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4e5c53 = await _0x1f87be['newPage']();
            await _0x4e5c53['authenticate']({
                'username': '' + _0x195d2a[0x2],
                'password': '' + _0x195d2a[0x3]
            }), console['log'](_0x2a720b() + '\x20[' + _0x28c31b['name'] + ']\x20Task\x20' + (_0x5206c2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4e5c53['setRequestInterception'](!![]), _0x4e5c53['on']('request', _0x32a404 => {
                _0x32a404['resourceType']() === 'image' || _0x32a404['resourceType']() === 'font' || _0x32a404['resourceType']() === 'media' ? _0x32a404['abort']() : _0x32a404['continue']();
            }), await _0x4e5c53['goto']('' + _0x40684b[_0x5206c2]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), console['log'](_0x2a720b() + '\x20[' + _0x28c31b['name'] + ']\x20Task\x20' + (_0x5206c2 + 0x1) + '\x20:\x20Filling\x20Information');
            try {
                await _0x4e5c53['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            await _0x4e5c53['type']('#comp_firstname', '' + _0x40684b[_0x5206c2]['FirstName']), await _0x4e5c53['waitForSelector']('#comp_lastname'), await _0x4e5c53['type']('#comp_lastname', '' + _0x40684b[_0x5206c2]['LastName']), await _0x4e5c53['waitForSelector']('#comp_email'), await _0x4e5c53['type']('#comp_email', '' + _0x40684b[_0x5206c2]['Email']), await _0x4e5c53['waitForSelector']('#comp_paypalemail'), await _0x4e5c53['type']('#comp_paypalemail', '' + _0x40684b[_0x5206c2]['Email']), await _0x4e5c53['waitForSelector']('#comp_mobile_end'), await _0x4e5c53['type']('#comp_mobile_end', '' + _0x40684b[_0x5206c2]['Phone']), await _0x4e5c53['waitForSelector']('#comp_dob'), await _0x4e5c53['type']('#comp_dob', '08/09/1992'), console['log'](_0x2a720b() + '\x20[' + _0x28c31b['name'] + ']\x20Task\x20' + (_0x5206c2 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x40684b[_0x5206c2]['Size'] == 'RANDOM') {
                const _0x27a6fc = await _0x4e5c53['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xc23b9b => {
                    return _0xc23b9b['map'](_0x5c2df5 => _0x5c2df5['value']);
                });
                var _0x3c9ee0 = Math['round'](Math['random']() * (_0x27a6fc['length'] - 0x2));
                await _0x4e5c53['select']('#shoesize', _0x27a6fc[_0x3c9ee0 + 0x1]), await _0x1f4f4c(0x3e8);
            } else {
                const _0x1c9f64 = await _0x4e5c53['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x992d1e => {
                    return _0x992d1e['map'](_0x30d142 => _0x30d142['innerText']);
                }), _0x9ce688 = await _0x4e5c53['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xb265b1 => {
                    return _0xb265b1['map'](_0x1ce36b => _0x1ce36b['value']);
                });
                var _0x288e97 = _0x40684b[_0x5206c2]['Size'];
                for (var _0x25bd5a = 0x1; _0x25bd5a < _0x9ce688['length']; _0x25bd5a++) {
                    var _0x27eda3 = _0x1c9f64[_0x25bd5a]['split']('\x20')[0x0];
                    if (_0x27eda3 == _0x288e97) {
                        await _0x4e5c53['select']('#shoesize', _0x9ce688[_0x25bd5a]);
                        break;
                    } else {
                        if (_0x25bd5a + 0x1 == _0x9ce688['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x4e5c53['waitForSelector']('#comp_address1'), await _0x4e5c53['type']('#comp_address1', _0x40684b[_0x5206c2]['Address1'] + '\x20' + _0x40684b[_0x5206c2]['HouseNumber']), await _0x4e5c53['waitForSelector']('#comp_address2'), await _0x4e5c53['type']('#comp_address2', '' + _0x40684b[_0x5206c2]['Address2']), await _0x4e5c53['waitForSelector']('#comp_address2'), await _0x4e5c53['type']('#comp_address3', '' + _0x40684b[_0x5206c2]['City']), await _0x4e5c53['waitForSelector']('#comp_postcode'), await _0x4e5c53['type']('#comp_postcode', '' + _0x40684b[_0x5206c2]['Zip']), console['log'](_0x2a720b() + '\x20[' + _0x28c31b['name'] + ']\x20Task\x20' + (_0x5206c2 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1f4f4c(0x4b0), await _0x4e5c53['click']('label#emailhold'), await _0x1f4f4c(0x5dc), await _0x4e5c53['click']('#preauth_tandc_email\x20>\x20label'), await _0x1f4f4c(0x5dc), await _0x4e5c53['click']('#submit'), await _0x4e5c53['waitForSelector']('#paymentWrap'), console['log'](_0x2a720b() + '\x20[' + _0x28c31b['name'] + ']\x20Task\x20' + (_0x5206c2 + 0x1) + '\x20:\x20' + _0x5e4c6a['blue']('Awaiting\x20Paypal\x20Payment')), _0x1f87be['on']('targetcreated', async _0x45c5be => {
                if (_0x45c5be['type']() === 'page') {
                    const _0x234ef6 = await _0x45c5be['page']();
                    async function _0x59728a() {
                        try {
                            await _0x4e5c53['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x51c4ee = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x29fe85() {
                        try {
                            await _0x4e5c53['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x329e1d = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x29fe85(), _0x59728a(), await _0x1f4f4c(0x493e0);
                }
            });
            async function _0x9af382() {
                for (let _0x5ddda4 = 0x0; _0x5ddda4 < 0x12c; _0x5ddda4++) {
                    if (_0x329e1d == !![]) {
                        console['log'](_0x5e4c6a['green'](_0x2a720b() + '\x20[' + _0x28c31b['name'] + ']\x20Task\x20' + (_0x5206c2 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0xf63e46(_0x4f6739, _0x102aa2);
                        return;
                    } else {
                        if (_0x51c4ee)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x1f4f4c(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x1f4f4c(0xbb8), await _0x4e5c53['click']('.zoid-outlet'), await _0x1f4f4c(0x7d0), await _0x9af382();
        } catch (_0x2c3a89) {
            console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x28c31b['name'] + ']\x20Task\x20' + (_0x5206c2 + 0x1) + '\x20:\x20' + _0x2c3a89)), _0x93bb62[0x0]['title'] = 'Failed\x20entry', _0x93bb62[0x0]['description'] = _0x28c31b['name'] + ':\x20' + _0x2c3a89, await _0xf63e46(_0x4a274a, _0x102aa2);
        } finally {
            _0x1f87be && _0x1f87be['close'](), console['log']('Waiting\x20for\x20' + _0x1a926d['delay'] + '\x20ms'), await _0x1f4f4c(_0x1a926d['delay']);
        }
    }
}
async function _0x27deb7(_0x3aa13c, _0x5213fc, _0x108444, _0x156362) {
    var _0x330989 = {}, _0x33e895 = [], _0x6c0de9 = {}, _0x2ad3a9 = [
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
    !_0x156362 && (_0x156362 = {});
    if (_0x5213fc != 'ver') {
        _0x3f3a14(_0x108444['name'] + '\x20Task\x20' + (_0x3aa13c + 0x1) + '\x20/\x20' + _0x156362['length'] + '\x20||\x20File:\x20' + _0x2d0484 + '\x20Proxies:\x20' + _0x1d998d), await _0x5a298d(_0x156362, _0x3aa13c), _0x33e895 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4ed0e1
                },
                {
                    'name': 'Size',
                    'value': '' + _0x156362[_0x3aa13c]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1a926d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1701e7
                }
            ]
        }], _0x6c0de9 = { 'embeds': _0x33e895 }, _0x330989 = _0x108444['data'];
        _0x5213fc == 'exp' ? _0x330989['data']['attributes']['email'] = '' + _0x156362[_0x3aa13c]['FirstName'] + _0x156362[_0x3aa13c]['LastName'] + _0x1a926d['catchall'] : _0x330989['data']['attributes']['email'] = '' + _0x156362[_0x3aa13c]['Email'];
        if (_0x156362[_0x3aa13c]['Size'] == 'RANDOM') {
        }
        _0x330989['data']['attributes']['properties']['$first_name'] = '' + _0x156362[_0x3aa13c]['FirstName'], _0x330989['data']['attributes']['properties']['$last_name'] = '' + _0x156362[_0x3aa13c]['LastName'], _0x330989['data']['attributes']['properties']['$address1'] = _0x156362[_0x3aa13c]['Address1'] + '\x20' + _0x156362[_0x3aa13c]['Address2'] + '\x20' + _0x156362[_0x3aa13c]['HouseNumber'], _0x330989['data']['attributes']['properties']['$zip'] = '' + _0x156362[_0x3aa13c]['Zip'], _0x330989['data']['attributes']['properties']['$city'] = '' + _0x156362[_0x3aa13c]['City'], _0x330989['data']['attributes']['properties']['$country'] = '' + _0x156362[_0x3aa13c]['Country'], _0x330989['data']['attributes']['properties']['Size'] = '' + _0x156362[_0x3aa13c]['Size'], _0x330989['data']['attributes']['properties']['$phone_number'] = '' + _0x156362[_0x3aa13c]['Phone'], _0x330989['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x156362[_0x3aa13c]['Follower'];
    }
    if (_0x1a926d['useRandomProxy'] = ![])
        var _0x5b4508 = _0x3780fa()[_0x3aa13c]['split'](':');
    else
        var _0x13ef96 = Math['round'](Math['random']() * (_0x3780fa()['length'] - 0x1)), _0x5b4508 = _0x3780fa()[_0x13ef96]['split'](':');
    var _0xe41f5e = {
        'jar': _0x4f7497,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x108444['url'],
        'headers': _0x108444['headers'],
        'body': JSON['stringify'](_0x330989),
        'proxy': 'http://' + _0x5b4508[0x2] + ':' + _0x5b4508[0x3] + '@' + _0x5b4508[0x0] + ':' + _0x5b4508[0x1]
    };
    return _0x5213fc != 'ver' && (_0xe41f5e['url'] = _0x108444['url'], _0xe41f5e['headers'] = _0x108444['headers']), _0x5213fc == 'ver' && (_0xe41f5e['method'] = 'GET'), new Promise(function (_0x1ee903, _0x32fb28) {
        callback = async (_0x299fd0, _0x37733e, _0x1ac417) => {
            !_0x299fd0 && _0x37733e['statusCode'] == 0xca || !_0x299fd0 && _0x37733e['statusCode'] == 0xc8 ? (_0x5213fc != 'ver' && await _0xf63e46(_0x4f6739, _0x6c0de9), _0x1ee903(console['log'](_0x5e4c6a['green'](_0x2a720b() + '\x20[' + _0x108444['name'] + ']\x20Task\x20' + (_0x3aa13c + 0x1) + ':\x20Raffle\x20Entered!')))) : (_0x5213fc != 'ver' && (_0x33e895[0x0]['title'] = 'Failed\x20entry', _0x33e895[0x0]['description'] = '' + _0x299fd0, await _0xf63e46(_0x4a274a, _0x6c0de9)), _0x32fb28(console['log'](_0x2a720b() + '\x20[' + _0x108444['name'] + ']\x20Task\x20' + (_0x3aa13c + 0x1) + ':\x20' + _0x299fd0)));
        };
        try {
            _0x5213fc != 'ver' && console['log'](_0x2a720b() + '\x20[' + _0x108444['name'] + ']\x20Task\x20' + (_0x3aa13c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x330989['data']['attributes']['email']), _0x5302e6(_0xe41f5e, callback);
        } catch (_0x5a1e7f) {
            console['log'](_0x2a720b() + '\x20Task\x20' + (_0x3aa13c + 0x1) + ':\x20' + _0x5a1e7f);
        }
    });
}
;
async function _0x5ba6e4() {
    await _0x3df126(), console['clear']();
    if (_0x1701e7 != 'devkey') {
        let _0x1ff7f8 = await _0x5d5971['autoUpdate']();
        if (_0x1ff7f8 === 'yes')
            return _0x8ec5de('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x32ef12 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x1f4f4c(0x2710);
        ;
    }
    await _0x21b1a1(_0x32ef12);
    if (_0x326dce === ![])
        return console['log']('Closing\x20Browser'), await _0x1f4f4c(0xbb8);
    else
        try {
            async function _0x1b9719() {
                _0x3f3a14('JRaffles\x20' + _0x1701e7), console['clear'](), console['log']('Welcome\x20to\x20' + _0x5e4c6a['cyan']('JRaffles();') + '\x20' + _0x1701e7), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x4943f8 = 0x0; _0x4943f8 < _0x13a6d3['length']; _0x4943f8++) {
                    if (_0x13a6d3[_0x4943f8]['name'] === 'Reload\x20Settings' || _0x13a6d3[_0x4943f8]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x4943f8 + ')\x20[' + _0x13a6d3[_0x4943f8]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x13a6d3['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x13a6d3['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x56eb51();
                if (_0x13a6d3[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x1ece35(_0x13a6d3[taskModule]['modules']);
                    var _0x45def9 = _0x13a6d3[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x47d8cd = await _0x936acf();
                    await _0x32d3f9(_0x47d8cd), await _0x5e5e1e();
                    var _0x396776 = await _0x4eb599();
                    return await afewFunction(_0x42cd58[_0x9dcd91], 'nor', _0x45def9, _0x396776, _0x47d8cd), _0x1b9719();
                } else {
                    if (_0x13a6d3[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x1ece35(_0x13a6d3[taskModule]['modules']);
                        var _0x45def9 = _0x13a6d3[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x47d8cd = await _0x936acf(), _0x201d19 = await _0x4eb599();
                            console['log']('Starting\x20' + _0x201d19['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x1a9cfb = 0x0; _0x1a9cfb < _0x201d19['length']; _0x1a9cfb++) {
                                console['log'](_0x2a720b() + '\x20[' + _0x45def9['name'] + ']\x20Task\x20' + (_0x1a9cfb + 0x1) + ':\x20Getting\x20Session'), await _0x29c1b3(_0x1a9cfb, 'nor', _0x45def9, _0x201d19, _0x47d8cd), console['log'](_0x2a720b() + '\x20[' + _0x45def9['name'] + ']\x20Sleeping\x20for\x20' + _0x1a926d['MahaDelay'] + '\x20ms'), await _0x1f4f4c(_0x1a926d['MahaDelay']);
                            }
                            ;
                            return _0x1b9719();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x47d8cd = await _0x936acf();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x16e38a(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x1a9cfb = 0x0; _0x1a9cfb < links['length']; _0x1a9cfb++) {
                                    _0x45def9['url'] = links[_0x1a9cfb], console['log'](_0x2a720b() + '\x20[' + _0x45def9['name'] + ']\x20Task\x20' + (_0x1a9cfb + 0x1) + ':\x20Getting\x20Session'), await _0x29c1b3(_0x1a9cfb, 'ver', _0x45def9, _0x201d19, _0x47d8cd), console['log'](_0x2a720b() + '\x20[' + _0x45def9['name'] + ']\x20Sleeping\x20for\x20' + _0x1a926d['verificationDelay'] + '\x20ms'), await _0x1f4f4c(_0x1a926d['verificationDelay']);
                                }
                                ;
                                return _0x1b9719();
                            }
                        }
                    } else {
                        if (_0x13a6d3[taskModule]['name'] == 'FOOTSHOP') {
                            var _0x47d8cd = await _0x936acf(), _0xce8693 = await _0x4eb599();
                            return console['log'](_0xce8693), await _0x4e8195(_0xce8693, _0x47d8cd), await _0x1f4f4c(0x1388), _0x1b9719();
                        } else {
                            if (_0x13a6d3[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x1ece35(_0x13a6d3[taskModule]['modules']);
                                var _0x45def9 = _0x13a6d3[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0xd28b31 = await _0x4eb599();
                                    console['log']('Starting\x20' + _0x5e4c6a['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x1a9cfb = 0x0; _0x1a9cfb < _0xd28b31['length']; _0x1a9cfb++) {
                                        console['log'](_0x2a720b() + '\x20[' + _0x45def9['name'] + ']\x20Task\x20' + (_0x1a9cfb + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x27deb7(_0x1a9cfb, 'nor', _0x45def9, _0xd28b31);
                                        } catch {
                                            console['log'](_0x5e4c6a['red'](_0x2a720b() + '\x20[' + _0x45def9['name'] + ']\x20Task\x20' + (_0x1a9cfb + 0x1) + ':\x20Task\x20failed'));
                                        }
                                        console['log'](_0x2a720b() + '\x20[' + _0x45def9['name'] + ']\x20Sleeping\x20for\x20' + _0x1a926d['delay'] + '\x20ms'), await _0x1f4f4c(_0x1a926d['delay']);
                                    }
                                    return _0x1b9719();
                                } else {
                                    if (taskFunction == 0x1) {
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x16e38a(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x1a9cfb = 0x0; _0x1a9cfb < links['length']; _0x1a9cfb++) {
                                            try {
                                                _0x45def9['url'] = links[_0x1a9cfb], console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Task\x20' + (_0x1a9cfb + 0x1) + ':\x20Getting\x20Session'), await _0x27deb7(_0x1a9cfb, 'ver', _0x45def9), console['log'](_0x2a720b() + '\x20[' + _0x13a6d3[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x1a926d['verificationDelay'] + '\x20ms'), await _0x1f4f4c(_0x1a926d['verificationDelay']);
                                            } catch (_0x12b15f) {
                                                console['log'](_0x12b15f);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x1b9719();
                                    }
                                }
                                ;
                            } else {
                                if (_0x13a6d3[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x1ece35(_0x13a6d3[taskModule]['modules']);
                                    var _0x45def9 = _0x13a6d3[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x28c837('https://bouncewear.com/nl/account/register', _0x45def9);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x13a6d3[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x1ece35(_0x13a6d3[taskModule]['modules']);
                                        var _0x45def9 = _0x13a6d3[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x47d8cd = await _0x936acf(), _0x2f7b2d = await _0x4eb599();
                                            return await _0x56f995('https://patta.nl/account/register', _0x45def9, _0x2f7b2d, _0x47d8cd), _0x1b9719();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x47d8cd = await _0x936acf(), _0x2f7b2d = await _0x4eb599();
                                                return await _0x13b08e('', _0x45def9, _0x2f7b2d, _0x47d8cd), _0x1b9719();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x13a6d3[taskModule]['name'] == 'KICKZ') {
                                            taskFunction = await _0x1ece35(_0x13a6d3[taskModule]['modules']);
                                            var _0x45def9 = _0x13a6d3[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x47d8cd = await _0x936acf(), _0x336fca = await _0x4eb599();
                                                return await _0x473ea5('https://www.kickz.com/nl/login/', _0x45def9, _0x336fca, _0x47d8cd), _0x1b9719();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x47d8cd = await _0x936acf(), _0x336fca = await _0x4eb599();
                                                    return await _0x16ab08(_0x45def9, _0x336fca, _0x47d8cd), _0x1b9719();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x13a6d3[taskModule]['name'] == 'JD') {
                                                taskFunction = await _0x1ece35(_0x13a6d3[taskModule]['modules']);
                                                var _0x45def9 = _0x13a6d3[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x47d8cd = await _0x936acf(), _0xf40d1f = await _0x4eb599();
                                                    return await _0x55313c(_0x45def9, _0xf40d1f, _0x47d8cd), _0x1b9719();
                                                }
                                            } else {
                                                if (_0x13a6d3[taskModule]['name'] == 'Change\x20Settings') {
                                                    console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                    var _0x5120c0 = 0x0;
                                                    for (const _0x215ba1 in _0x1a926d) {
                                                        console['log']('(' + _0x5120c0 + ')\x20' + _0x215ba1 + '\x20:\x20' + _0x1a926d[_0x215ba1]), _0x5120c0++;
                                                    }
                                                    console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x5120c0 + ')\x20Return\x20to\x20Main\x20Menu');
                                                    var _0x5ce4e8 = await _0x1167a1();
                                                    if (_0x5ce4e8 == _0x5120c0)
                                                        return _0x1b9719();
                                                    console['clear'];
                                                    var _0x3cee03 = 0x0;
                                                    for (var _0x17611c in _0x1a926d) {
                                                        if (_0x5ce4e8 == _0x3cee03) {
                                                            console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x17611c + '\x20:'), _0x1a926d[_0x17611c] = await _0xbb53be(), _0x2294d1['writeFileSync']('../settings.json', JSON['stringify'](_0x1a926d));
                                                            break;
                                                        } else
                                                            _0x3cee03++;
                                                    }
                                                    return console['log']('Settings\x20Saved!'), await _0x1f4f4c(0xbb8), _0x1b9719();
                                                } else {
                                                    if (_0x13a6d3[taskModule]['name'] == 'Reload\x20Settings')
                                                        return console['log']('Reloading\x20settings'), await _0x3df126(), _0x1b9719();
                                                    else {
                                                        if (taskModule == 0x45) {
                                                            _0x13a6d3[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                            var _0x28ccb6 = await _0x245bc9();
                                                            _0x28ccb6 == 'ModuleVoorDeBoys' ? (await _0x32d3f9(), await _0x5e5e1e(), await afewFunction(_0x42cd58[_0x9dcd91], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x1f4f4c(0xbb8));
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
            await _0x1b9719();
        } catch (_0x10e942) {
            return console['log'](_0x10e942), await _0x1f4f4c(0x3a98);
        }
}
;
_0x3f3a14('JRaffles\x20' + _0x1701e7), _0x3df126(), _0x5ba6e4();