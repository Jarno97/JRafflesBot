const { EmbedBuilder: _0x243f17 } = require('discord.js');
var _0x52783a = require('exe');
const { execFile: _0x4eae66 } = require('child_process'), _0x11d919 = require('puppeteer-extra'), _0x34cf32 = require('puppeteer-extra-plugin-recaptcha'), _0x585d0c = require('puppeteer-extra-plugin-stealth'), _0x2c7c07 = require('chalk'), _0x356443 = require('node-bash-title'), _0x4c4e71 = require('fs'), _0x1bd543 = require('axios'), _0x19894c = require('papaparse');
var _0x1a603f = require('random-name');
const _0x4ef6f3 = require('request');
var _0x4d0251 = require('prompt');
const _0x5c26db = _0x4ef6f3['jar']();
var _0x4751e2 = {};
const _0x1c61b9 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x156519 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x33c6cb = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x4e2c39 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x565860 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn';
var _0x2d6860 = 'https://discord.com/api/webhooks/', _0x1321d2 = '' + _0x2d6860 + _0x33c6cb, _0x289980 = '' + _0x2d6860 + _0x4e2c39, _0xfcf874 = '' + _0x2d6860 + _0x1c61b9, _0x5a1b60 = '' + _0x2d6860 + _0x156519, _0x43f811 = '' + _0x2d6860 + _0x565860;
const _0x1ae938 = JSON['parse'](_0x4c4e71['readFileSync']('../package.json', 'utf-8')), _0x57831b = _0x1ae938['version'];
var _0x3dd657, _0x350e1c, _0x17d0a8, _0x325a31, _0x541394, _0x15185b, _0x217831, _0xaa5261;
const _0x1ef43c = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x330184 = ![];
const _0x2b53cc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x43b898 = '0123456789';
var _0x56feae = _0x2b53cc['split']('');
const _0x5df146 = require('auto-git-update'), { PageEmittedEvents: _0x21fa51 } = require('puppeteer'), { getRandomValues: _0x3b6335 } = require('crypto'), { resolve: _0x4a9b4a } = require('path'), { Console: _0x168fb8 } = require('console'), _0x45b353 = {
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
}, _0x3576c0 = new _0x5df146(_0x45b353);
async function _0x52da34() {
    _0x541394 = _0x4c4e71['readdirSync']('../proxies'), _0x325a31 = _0x4c4e71['readdirSync']('../tasks'), _0x4751e2 = JSON['parse'](_0x4c4e71['readFileSync']('../settings.json', 'utf-8')), !_0x4751e2['delay'] && (_0x4751e2['delay'] = 0x2710, _0x4c4e71['writeFileSync']('../settings.json', JSON['stringify'](_0x4751e2))), !_0x4751e2['captchaKey'] && (_0x4751e2['captchaKey'] = '', _0x4c4e71['writeFileSync']('../settings.json', JSON['stringify'](_0x4751e2))), !_0x4751e2['useRandomProxy'] && (_0x4751e2['useRandomProxy'] = !![], _0x4c4e71['writeFileSync']('../settings.json', JSON['stringify'](_0x4751e2))), !_0x4751e2['webhook'] && (_0x4751e2['webhook'] = '', _0x4c4e71['writeFileSync']('../settings.json', JSON['stringify'](_0x4751e2))), _0x4751e2['MahaDelay'] = _0x4751e2['delay'], _0x2d6860 = _0x4751e2['webhook'], _0x15185b = _0x4751e2['licenseKey'];
}
let _0x33f9cd, _0x27944f = [], _0x3a8867;
const _0x4babe3 = _0xe2b4ed => new Promise(_0x5cb5d3 => setTimeout(_0x5cb5d3, _0xe2b4ed));
function _0x32bb45(_0x3f10f5, _0xbac04f) {
    return Math['floor'](Math['random']() * (_0xbac04f - _0x3f10f5 + 0x1) + _0x3f10f5);
}
async function _0x3ef94c(_0x52d6b1) {
    return _0x1bd543['get']('https://api.hyper.co/v4/licenses/' + _0x52d6b1, { 'headers': { 'Authorization': 'Bearer\x20' + _0x1ef43c } })['then'](_0x323457 => _0x323457['data'])['catch'](() => null);
}
;
async function _0x227959(_0x5dbc39) {
    console['clear']();
    if (_0x5dbc39 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x4ccb65 = await _0x4d0251['get']('License');
        if (_0x4ccb65['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x4babe3(0xbb8), _0x227959(_0x5dbc39);
        _0x5dbc39 = _0x4ccb65['License'], _0x4751e2['licenseKey'] = _0x5dbc39, _0x15185b = _0x5dbc39, _0x4c4e71['writeFileSync']('../settings.json', JSON['stringify'](_0x4751e2));
    }
    console['log']('Checking\x20license\x20' + _0x15185b + '...'), await _0x4babe3(0x320);
    const _0x449fa7 = await _0x3ef94c(_0x5dbc39);
    _0x217831 = JSON['stringify'](_0x449fa7['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0xaa5261 = JSON['stringify'](_0x449fa7['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x449fa7)
        return console['log']('License\x20not\x20found');
    if (!_0x449fa7['user'])
        return console['log']('License\x20not\x20bound');
    return _0x449fa7['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x330184 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x330184 = ![]);
}
async function _0x3c1c9a() {
    var _0xfb1c4e = await _0x4d0251['get']('Module');
    return console['clear'](), _0xfb1c4e['Module'];
}
;
async function _0x11870f() {
    var _0x1d49a2 = await _0x4d0251['get']('Setting');
    return console['clear'](), _0x1d49a2['Setting'];
}
async function _0x3c38f6() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x43dcde = 0x0; _0x43dcde < _0x325a31['length']; _0x43dcde++) {
        console['log']('\x20(' + _0x43dcde + ')\x20' + _0x325a31[_0x43dcde]);
    }
    console['log']('');
    var _0x3bdf8f = await _0x4d0251['get']('Task');
    if (_0x3bdf8f['Task'] > _0x325a31['length'] - 0x1 || isNaN(_0x3bdf8f['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4babe3(0x3e8), _0x3c38f6();
    var _0x611a97 = _0x4c4e71['readFileSync']('../tasks/' + _0x325a31[_0x3bdf8f['Task']], 'utf-8');
    return _0x17d0a8 = _0x19894c['parse'](_0x611a97, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x2c7c07['blue'](_0x325a31[_0x3bdf8f['Task']])), _0x3dd657 = _0x325a31[_0x3bdf8f['Task']], _0x17d0a8;
}
async function _0x102b88() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x64c8a2 = 0x0; _0x64c8a2 < _0x541394['length']; _0x64c8a2++) {
        console['log']('\x20(' + _0x64c8a2 + ')\x20' + _0x541394[_0x64c8a2]);
    }
    console['log']('');
    var _0x1eb050 = await _0x4d0251['get']('Proxies');
    if (_0x1eb050['Proxies'] > _0x541394['length'] - 0x1 || isNaN(_0x1eb050['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4babe3(0x3e8), _0x102b88();
    var _0x2469fb = _0x4c4e71['readFileSync']('../proxies/' + _0x541394[_0x1eb050['Proxies']], 'utf-8')['split']('\x0a');
    let _0x4acabb = _0x2469fb['map']((_0x1b8e7f, _0x278263) => {
        sanatizeProxy = _0x1b8e7f['replace']('\x0d', '');
        if (_0x2469fb[_0x278263 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x350e1c = _0x541394[_0x1eb050['Proxies']], console['clear'](), _0x4acabb;
}
async function _0x335a8f() {
    var _0x595deb = await _0x4d0251['get']('Value');
    return console['clear'](), _0x595deb['Value'];
}
async function _0x431b49(_0x33d255) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0xa010d8 = 0x0; _0xa010d8 < _0x33d255['length']; _0xa010d8++) {
        console['log']('\x20(' + _0xa010d8 + ')\x20[' + _0x33d255[_0xa010d8]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x101c6d = await _0x4d0251['get']('Module');
    return _0x101c6d['Module'];
}
async function _0x516454() {
    var _0x3b9777 = await _0x4d0251['get']('Password');
    return console['clear'](), _0x3b9777['Password'];
}
;
async function _0x152d0b() {
    var _0xdafbd = await _0x4d0251['get']('Links');
    return _0xdafbd['Links'];
}
;
async function _0x448fbd() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x110701 = 0x0; _0x110701 < _0x27944f['length']; _0x110701++) {
        console['log']('\x20(' + _0x110701 + ')\x20' + _0x27944f[_0x110701]);
    }
    ;
    console['log']();
    let _0x281ea5 = await _0x4d0251['get']('Product');
    return console['clear'](), _0x281ea5['Product'];
}
;
function _0xc2164e() {
    var _0x332cb7 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x332cb7;
}
;
const _0x4653ae = [
    {
        'name': 'AFEW\x20Store',
        'modules': [{
            'name': 'AFEW\x20Raffle\x20Entries',
            'store': 'AFEW',
            'logo': 'https://d19kzigy6tpscu.cloudfront.net/media/CACHE/images/logo_thumbnail/afew_logo_100x100_1647428869.png'
        }]
    },
    {
        'name': 'MAHA\x20Amsterdam',
        'modules': [
            {
                'name': 'MAHA\x20Raffle\x20Entries',
                'store': 'MAHA',
                'logo': 'https://i1.sndcdn.com/avatars-XIAMNs5LPWV2iRwj-SNwa5A-t500x500.jpg',
                'url': 'https://a.klaviyo.com/client/subscriptions/?company_id=THxSew',
                'data': {
                    'data': {
                        'type': 'subscription',
                        'attributes': {
                            'list_id': 'VFB8Tq',
                            'custom_source': 'Air\x20Jordan\x204\x20Seafoam',
                            'email': '',
                            'properties': {
                                '$address1': '',
                                '$city': '',
                                '$country': '',
                                '$first_name': '',
                                '$last_name': '',
                                '$zip': '',
                                '$consent_method': 'Klaviyo\x20Form',
                                '$consent_form_id': 'RW67e2',
                                '$consent_form_version': 0x7d2f63,
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
    {
        'name': 'FOOTSHOP',
        'modules': [{
            'name': 'FOOTSHOP\x20Raffle\x20Entries',
            'store': 'Footshop',
            'logo': 'https://images.easyfundraising.org.uk/retailer/cropped/logo-footshop-1615542072.png'
        }]
    },
    {
        'name': 'OQIUM\x20Store',
        'modules': [
            {
                'name': 'OQIUM\x20Raffle\x20Entries',
                'store': 'OQIUM',
                'logo': 'https://s3-eu-west-1.amazonaws.com/tpd/logos/5e8e742e8f9bb4000118f0bc/0x0.png',
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
            {
                'name': 'PATTA\x20Account\x20Generator',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562'
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562'
            }
        ]
    },
    {
        'name': 'JD',
        'modules': [{
            'name': 'JD\x20Raffle\x20Entries',
            'store': 'JD',
            'logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/JD_Sports_logo.svg/2048px-JD_Sports_logo.svg.png'
        }]
    },
    {
        'name': 'KICKZ',
        'modules': [
            {
                'name': 'KICKZ\x20Account\x20Generator',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b'
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b'
            }
        ]
    },
    {
        'name': 'SLAMJAM',
        'modules': [
            {
                'name': 'SLAMJAM\x20Account\x20Generator',
                'store': 'SLAMJAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505'
            },
            {
                'name': 'SLAMJAM\x20Raffle\x20Entries',
                'store': 'SLAMJAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505'
            }
        ]
    },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x246459(_0x39d779, _0x4b014e) {
    let _0x5e6114 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x57831b != 'devkey') {
        await _0x1bd543['post'](_0x39d779, _0x4b014e, _0x5e6114);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x514389(_0x29138f, _0x4e14f6, _0x257c00, _0x1a66b9, _0x135337) {
    if (!_0x1a66b9 && _0x257c00 == 'dev') {
        var _0x4c894c = new _0x243f17()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x4e14f6['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x4e14f6['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x29138f['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x4751e2['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x217831,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x29138f['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x57831b,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x4c894c['data'];
    } else {
        if (_0x1a66b9 && _0x257c00 == 'dev') {
            var _0x4c894c = new _0x243f17()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x4e14f6['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x217831,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x4e14f6['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x29138f['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x4751e2['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x135337,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x29138f['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x57831b,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x4c894c['data'];
        } else {
            if (_0x257c00 == 'pub') {
                var _0x4c894c = new _0x243f17()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x4e14f6['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x4e14f6['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x29138f['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x4751e2['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x29138f['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x57831b,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x4c894c['data'];
            } else {
                if (_0x257c00 == 'acc') {
                    var _0x4c894c = new _0x243f17()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x4e14f6['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x217831,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x4e14f6['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x4751e2['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x57831b,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x4c894c['data'];
                } else {
                    if (_0x257c00 == 'open') {
                        var _0x4c894c = new _0x243f17()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0xaa5261)['addFields']({
                            'name': 'User',
                            'value': '' + _0x217831,
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x57831b,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x4c894c['data'];
                    }
                }
            }
        }
    }
}
async function _0x34ce09(_0x5e04e2, _0x128b24) {
    var _0x110769 = _0x5e04e2[_0x128b24]['Address1']['split'](''), _0xcf7c37 = _0x5e04e2[_0x128b24]['Address2']['split'](''), _0x180234 = _0x5e04e2[_0x128b24]['Email']['split']('@');
    for (var _0x888929 = 0x0; _0x888929 < _0x110769['length']; _0x888929++) {
        if (_0x110769[_0x888929] == 'X') {
            var _0x5c6101 = Math['round'](Math['random']() * (_0x2b53cc['length'] - 0x1));
            _0x110769[_0x888929] = _0x56feae[_0x5c6101];
        }
    }
    ;
    for (var _0x888929 = 0x0; _0x888929 < _0xcf7c37['length']; _0x888929++) {
        if (_0xcf7c37[_0x888929] == 'X') {
            var _0x5c6101 = Math['round'](Math['random']() * (_0x2b53cc['length'] - 0x1));
            _0xcf7c37[_0x888929] = _0x56feae[_0x5c6101];
        }
    }
    ;
    _0x5e04e2[_0x128b24]['FirstName'] == 'RANDOM' && (_0x5e04e2[_0x128b24]['FirstName'] = _0x1a603f['first']());
    _0x5e04e2[_0x128b24]['LastName'] == 'RANDOM' && (_0x5e04e2[_0x128b24]['LastName'] = _0x1a603f['last']());
    _0x180234[0x0] == 'RANDOM' ? _0x180234[0x0] = '' + _0x1a603f['first']() + _0x1a603f['last']() + '@' : _0x180234[0x0] = _0x180234[0x0] + '@';
    _0x5e04e2[_0x128b24]['Email'] = _0x180234['join'](''), _0x5e04e2[_0x128b24]['Address1'] = _0x110769['join'](''), _0x5e04e2[_0x128b24]['Address2'] = _0xcf7c37['join']('');
    _0x5e04e2[_0x128b24]['Phone'] == 'RANDOM' && (_0x5e04e2[_0x128b24]['Phone'] = '0' + _0x32bb45(0x5f5e100, 0x3b9ac9ff));
    if (_0x5e04e2[_0x128b24]['Follower'] == 'RANDOM') {
        var _0x5c82aa = _0x32bb45(0x1, 0x270f);
        _0x5e04e2[_0x128b24]['Follower'] = '' + _0x1a603f['first']() + _0x1a603f['last']() + _0x5c82aa + '\x20';
    }
    _0x5e04e2[_0x128b24]['HouseNumber'] == 'RANDOM' && (_0x5e04e2[_0x128b24]['HouseNumber'] = _0x32bb45(0x1, 0xc8));
    if (_0x5e04e2[_0x128b24]['Address1'] == 'RANDOM') {
        var _0x274d39 = Math['round'](Math['random']() * (_0x2b53cc['length'] - 0x1)), _0x13bfd0 = _0x56feae[_0x274d39];
        _0x5e04e2[_0x128b24]['Address1'] = _0x1a603f['last']() + 'straat', _0x5e04e2[_0x128b24]['Postcode'] = _0x32bb45(0x3e8, 0x270f) + '\x20' + _0x13bfd0 + _0x13bfd0, _0x5e04e2[_0x128b24]['Zip'] = _0x5e04e2[_0x128b24]['Postcode'], _0x5e04e2[_0x128b24]['HouseNumber'] = '' + _0x32bb45(0x1, 0xc8);
    }
    return;
}
;
function _0x1ae98d() {
    let _0x1d93e7 = proxyFile['split']('\x0a'), _0x1140af = _0x1d93e7['map']((_0x5c70b2, _0x44772e) => {
        sanatizeProxy = _0x5c70b2['replace']('\x0d', '');
        if (_0x1d93e7[_0x44772e + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x1140af;
}
;
async function _0xb1d14(_0x182f2c) {
    var _0x2c2ff6 = _0x182f2c[0x1]['split'](':');
    const _0x43ec47 = await _0x11d919['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x2c2ff6[0x0] + ':' + _0x2c2ff6[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x270d4a = await _0x43ec47['newPage']();
        await _0x270d4a['authenticate']({
            'username': '' + _0x2c2ff6[0x2],
            'password': '' + _0x2c2ff6[0x3]
        }), console['log'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x270d4a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x270d4a['setRequestInterception'](!![]), _0x270d4a['on']('request', _0x3de91f => {
            _0x3de91f['resourceType']() === 'image' || _0x3de91f['resourceType']() === 'font' || _0x3de91f['resourceType']() === 'media' ? _0x3de91f['abort']() : _0x3de91f['continue']();
        }), await _0x270d4a['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x270d4a['waitForTimeout'](0xbb8), await _0x270d4a['waitForSelector']('.product-card');
        const _0x4b3681 = await _0x270d4a['$$eval']('a.product-card', _0x41af3e => {
            return _0x41af3e['map'](_0x3b9cd3 => _0x3b9cd3['href']);
        });
        return _0x27944f = _0x4b3681;
    } catch (_0x1fe2f6) {
        console['log']('\x20' + _0x1fe2f6);
    } finally {
        _0x43ec47['close'](), console['clear']();
    }
}
;
async function _0x23e405(_0x5f31ac, _0x15adce, _0xa613d4, _0x55308b, _0x1e30aa) {
    _0x15adce != 'ver' && await _0x34ce09(_0x55308b, _0x5f31ac);
    if (_0x4751e2['useRandomProxy'] = ![])
        var _0x5d32c9 = _0x1e30aa[_0x5f31ac]['split'](':');
    else
        var _0x3c945c = Math['round'](Math['random']() * (_0x1e30aa['length'] - 0x1)), _0x5d32c9 = _0x1e30aa[_0x3c945c]['split'](':');
    var _0x4ca5ef = _0xa613d4['data'];
    _0x15adce != 'ver' && (_0x4ca5ef['data']['attributes']['properties']['$first_name'] = '' + _0x55308b[_0x5f31ac]['FirstName'], _0x4ca5ef['data']['attributes']['properties']['$last_name'] = '' + _0x55308b[_0x5f31ac]['LastName'], _0x4ca5ef['data']['attributes']['properties']['$address1'] = _0x55308b[_0x5f31ac]['Address1'] + '\x20' + _0x55308b[_0x5f31ac]['HouseNumber'] + '\x20' + _0x55308b[_0x5f31ac]['Address2'], _0x4ca5ef['data']['attributes']['properties']['$zip'] = '' + _0x55308b[_0x5f31ac]['Zip'], _0x4ca5ef['data']['attributes']['properties']['$city'] = '' + _0x55308b[_0x5f31ac]['City'], _0x4ca5ef['data']['attributes']['properties']['$country'] = '' + _0x55308b[_0x5f31ac]['Country'], _0x4ca5ef['data']['attributes']['properties']['Size'] = '' + _0x55308b[_0x5f31ac]['Size'], _0x4ca5ef['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x55308b[_0x5f31ac]['Follower'], _0x15adce == 'exp' ? _0x4ca5ef['data']['attributes']['email'] = '' + _0x55308b[_0x5f31ac]['FirstName'] + _0x55308b[_0x5f31ac]['LastName'] + _0x4751e2['catchall'] : _0x4ca5ef['data']['attributes']['email'] = '' + _0x55308b[_0x5f31ac]['Email']);
    var _0x300186 = {
        'jar': _0x5c26db,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0xa613d4['url'],
        'headers': _0xa613d4['headers'],
        'body': JSON['stringify'](_0x4ca5ef),
        'proxy': 'http://' + _0x5d32c9[0x2] + ':' + _0x5d32c9[0x3] + '@' + _0x5d32c9[0x0] + ':' + _0x5d32c9[0x1]
    };
    return _0x15adce === 'ver' && (_0x300186['method'] = 'GET'), new Promise(function (_0x4c78f6, _0x37ac96) {
        callback = async (_0x874dac, _0x4c5b21, _0x1b1ae7) => {
            if (!_0x874dac && _0x4c5b21['statusCode'] == 0xca || !_0x874dac && _0x4c5b21['statusCode'] == 0xc8) {
                _0x4c78f6(console['log'](_0x2c7c07['green'](_0xc2164e() + '\x20[' + _0xa613d4['name'] + ']\x20Task\x20' + (_0x5f31ac + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x15adce != 'ver') {
                    var _0x57b4e2 = await _0x514389(_0x55308b[_0x5f31ac], _0xa613d4, 'dev', ![]), _0x369f84 = await _0x514389(_0x55308b[_0x5f31ac], _0xa613d4, 'pub', ![]);
                    const _0x3e3c67 = {
                        'succesDEVMSG': { 'embeds': [_0x57b4e2] },
                        'succesPUBMSG': { 'embeds': [_0x369f84] }
                    };
                    if (_0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '')
                        try {
                            await _0x246459(_0x4751e2['webhook'], _0x3e3c67['succesDEVMSG']);
                        } catch {
                        }
                    await _0x4babe3(0xc8), await _0x246459(_0xfcf874, _0x3e3c67['succesDEVMSG']), await _0x4babe3(0xc8);
                    try {
                        await _0x246459(_0x43f811, _0x3e3c67['succesPUBMSG']);
                    } catch {
                    }
                }
            } else {
                if (_0x15adce != 'ver') {
                    var _0x2d3629 = '' + _0x874dac, _0x43a345 = await _0x514389(_0x55308b[_0x5f31ac], _0xa613d4, 'dev', !![], _0x2d3629), _0x316261 = {};
                    _0x316261['errorDEV'] = { 'embeds': [_0x43a345] }, _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], _0x316261['errorDEV']), await _0x246459(_0x5a1b60, _0x316261['errorDEV']);
                }
                _0x37ac96(console['log'](_0xc2164e() + '\x20[' + _0xa613d4['name'] + ']\x20Task\x20' + (_0x5f31ac + 0x1) + ':\x20' + _0x874dac));
            }
        };
        try {
            _0x15adce === 'ver' ? console['log'](_0xc2164e() + '\x20[' + _0xa613d4['name'] + ']\x20Task\x20' + (_0x5f31ac + 0x1) + ':\x20Verifying.') : console['log'](_0xc2164e() + '\x20[' + _0xa613d4['name'] + ']\x20Task\x20' + (_0x5f31ac + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4ca5ef['data']['attributes']['email']), _0x4ef6f3(_0x300186, callback);
        } catch (_0xa694b4) {
            console['log'](_0xc2164e() + '\x20Task\x20' + (_0x5f31ac + 0x1) + ':\x20' + _0xa694b4);
        }
    });
}
;
async function _0x22c938(_0x53673f, _0x2ffd04, _0x987588) {
    _0x11d919['use'](_0x585d0c()), _0x11d919['use'](_0x34cf32({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4751e2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x43401a = 0x0; _0x43401a < _0x53673f['length']; _0x43401a++) {
        var _0x360830, _0x315a76 = '', _0xf9f2b = 0x0, _0x56268b = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x217831
                },
                {
                    'name': 'Product',
                    'value': '' + _0x53673f[_0x43401a]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x53673f[_0x43401a]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4751e2['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x57831b
                }
            ]
        }], _0x1337cf = await _0x514389(_0x53673f[_0x43401a], _0x987588, 'dev', ![]), _0x418d6c = await _0x514389(_0x53673f[_0x43401a], _0x987588, 'pub', ![]);
        const _0x371c59 = {
            'succesDEVMSG': { 'embeds': [_0x1337cf] },
            'succesPUBMSG': { 'embeds': [_0x418d6c] }
        }, _0x5b7807 = { 'embeds': _0x56268b };
        await _0x34ce09(_0x53673f, _0x43401a);
        if (_0x53673f[_0x43401a]['Email'] == '' || _0x53673f[_0x43401a]['FirstName'] == '' || _0x53673f[_0x43401a]['LastName'] == '' || _0x53673f[_0x43401a]['Country'] == '' || _0x53673f[_0x43401a]['Size'] == '' || _0x53673f[_0x43401a]['Address1'] == '' || _0x53673f[_0x43401a]['Zip'] == '') {
            console['log'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x53673f[_0x43401a]['Email'] == '' || _0x53673f[_0x43401a]['FirstName'] == '' || _0x53673f[_0x43401a]['LastName'] == '' || _0x53673f[_0x43401a]['Country'] == '' || _0x53673f[_0x43401a]['Size'] == '' || _0x53673f[_0x43401a]['Address1'] == '' || _0x53673f[_0x43401a]['Zip'] == '' || _0x53673f[_0x43401a]['Phone'] == '') {
            console['log'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x2e82d1 = '' + _0x53673f[_0x43401a]['Url'];
        if (_0x4751e2['useRandomProxy'] = ![])
            var _0x32aa43 = _0x2ffd04[_0x43401a]['split'](':');
        else
            var _0x3c19b9 = Math['round'](Math['random']() * (_0x2ffd04['length'] - 0x1)), _0x32aa43 = _0x2ffd04[_0x3c19b9]['split'](':');
        const _0x1ac9c6 = await _0x11d919['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x32aa43[0x0] + ':' + _0x32aa43[0x1]]
        });
        try {
            const _0x5ababe = await _0x1ac9c6['newPage']();
            await _0x5ababe['authenticate']({
                'username': '' + _0x32aa43[0x2],
                'password': '' + _0x32aa43[0x3]
            }), console['log'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5ababe['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5ababe['setRequestInterception'](!![]), _0x5ababe['on']('request', _0x4c5368 => {
                _0x4c5368['resourceType']() === 'image' || _0x4c5368['resourceType']() === 'font' || _0x4c5368['resourceType']() === 'media' ? _0x4c5368['abort']() : _0x4c5368['continue']();
            }), await _0x5ababe['goto'](_0x2e82d1), await _0x4babe3(0xbb8), await _0x5ababe['waitForSelector']('.control__JhutY'), await _0x5ababe['click']('.control__JhutY'), await _0x4babe3(0x1f4);
            if (_0x53673f[_0x43401a]['Size'] != 'RANDOM')
                try {
                    const _0xead8e3 = await _0x5ababe['$x']('//div[contains(text(),\x20\x27' + _0x53673f[_0x43401a]['Size'] + '\x27)]');
                    await _0xead8e3[0x0]['click']();
                } catch {
                    console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x1d64a5 = await _0x5ababe['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x99b12e = Math['round'](Math['random']() * (_0x1d64a5['length'] - 0x1));
                await _0x1d64a5[_0x99b12e]['click']();
            }
            await _0x4babe3(0x4b0);
            const _0x3b7a67 = await _0x5ababe['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x3b7a67[0x0]['click'](), await _0x5ababe['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5ababe['type']('input[name=\x22email\x22]', '' + _0x53673f[_0x43401a]['Email']), await _0x4babe3(0x640), await _0x5ababe['type']('input[name=\x22phone\x22]', '' + _0x53673f[_0x43401a]['Phone']), await _0x4babe3(0x4b0), await _0x5ababe['click']('button.btn.continue-button__1RtsS'), await _0x4babe3(0x4b0);
            try {
                await _0x5ababe['type']('input[name=\x22firstName\x22]', '' + _0x53673f[_0x43401a]['FirstName']), await _0x4babe3(0x258);
            } catch {
                const _0x376827 = await _0x5ababe['$$eval']('.invalid-feedback\x20>\x20div', _0x51fdcd => {
                    return _0x51fdcd['map'](_0x40279c => _0x40279c['innerText']);
                });
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x20' + _0x376827));
                continue;
            }
            await _0x5ababe['type']('input[name=\x22lastName\x22]', '' + _0x53673f[_0x43401a]['LastName']), await _0x4babe3(0xc8), await _0x5ababe['type']('input[name=\x22instagramUsername\x22]', '' + _0x53673f[_0x43401a]['Follower']), await _0x4babe3(0x4b0), await _0x5ababe['click']('button.btn.continue-button__1RtsS'), await _0x4babe3(0x3e8), console['log'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5ababe['select']('select[name=\x22country\x22]', '' + _0x53673f[_0x43401a]['Country']), await _0x4babe3(0x2bc), await _0x5ababe['type']('input[name=\x22streetName\x22]', '' + _0x53673f[_0x43401a]['Address1']), await _0x4babe3(0x258), await _0x5ababe['type']('input[name=\x22houseNumber\x22]', _0x53673f[_0x43401a]['HouseNumber'] + '\x20' + _0x53673f[_0x43401a]['Address2']), await _0x4babe3(0xc8), await _0x5ababe['type']('input[name=\x22postalCode\x22]', '' + _0x53673f[_0x43401a]['Zip']), await _0x4babe3(0x1f4), await _0x5ababe['type']('input[name=\x22city\x22]', '' + _0x53673f[_0x43401a]['City']), await _0x4babe3(0x4b0), await _0x5ababe['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x4babe3(0x4b0), await _0x5ababe['click']('button.btn.continue-button__1RtsS'), await _0x4babe3(0x4b0), console['log'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5ababe['solveRecaptchas'](), console['log'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x4babe3(0xbb8), await _0x5ababe['click']('button.btn.continue-button__1RtsS'), await _0x4babe3(0x1388), console['log'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5ababe['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5ababe['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4babe3(0x4b0), await _0x5ababe['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x53673f[_0x43401a]['CardNumber']), await _0x4babe3(0x320), await _0x5ababe['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5ababe['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x53673f[_0x43401a]['ExpiryDate']), await _0x4babe3(0x4b0), await _0x5ababe['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5ababe['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x53673f[_0x43401a]['CVV']), await _0x4babe3(0x226), await _0x5ababe['type']('input[name=\x22holderName\x22]', '' + _0x53673f[_0x43401a]['NameOnCard']), await _0x4babe3(0x226), await _0x5ababe['click']('button.adyen-checkout__button'), console['log'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5ababe['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x4babe3(0xbb8);
            } catch (_0x53aa68) {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x203DS\x20Failed')), _0x360830 = '3DS\x20Error\x20' + _0x53aa68;
                var _0xa72f70 = await _0x514389(_0x53673f[_0x43401a], _0x987588, 'dev', !![], _0x360830);
                _0x371c59['errorDEV'] = { 'embeds': [_0xa72f70] };
                _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], _0x371c59['errorDEV']);
                await _0x246459(_0x5a1b60, _0x371c59['errorDEV']);
                continue;
            }
            console['log'](_0x2c7c07['green'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '')
                try {
                    await _0x246459(_0x4751e2['webhook'], _0x371c59['succesDEVMSG']);
                } catch {
                }
            await _0x4babe3(0xc8), await _0x246459(_0xfcf874, _0x371c59['succesDEVMSG']), await _0x4babe3(0xc8);
            try {
                await _0x246459(_0x43f811, _0x371c59['succesPUBMSG']);
            } catch {
            }
        } catch (_0x1cf598) {
            console['log'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x20' + _0x1cf598), _0x360830 = '' + _0x1cf598;
            var _0xa72f70 = await _0x514389(_0x53673f[_0x43401a], _0x987588, 'dev', !![], _0x360830);
            _0x371c59['errorDEV'] = { 'embeds': [_0xa72f70] }, _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], _0x371c59['errorDEV']), await _0x246459(_0x5a1b60, _0x371c59['errorDEV']), _0x315a76 = 'yes';
        } finally {
            _0x1ac9c6['close']();
            if (_0x315a76 == 'yes' && _0xf9f2b != 0x5) {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x987588['name'] + ']\x20Task\x20' + (_0x43401a + 0x1) + '\x20:\x20Retrying')), _0x43401a = _0x43401a - 0x1, _0xf9f2b = _0xf9f2b + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x4751e2['footshopDelay'] + '\x20ms'), await _0x4babe3(_0x4751e2['footshopDelay']);
        }
    }
}
afewFunction = async (_0x1d0331, _0x112707, _0x23efcb, _0x3cfe35, _0x1c70d5) => {
    for (var _0x5d2308 = 0x0; _0x5d2308 < _0x3cfe35['length']; _0x5d2308++) {
        _0x4751e2['AfewDelay'] = _0x4751e2['delay'];
        var _0x5df7eb, _0x18e156 = '', _0x38e925 = 0x0;
        _0x3cfe35[_0x5d2308]['Url'] = _0x1d0331, _0x356443(_0x23efcb['name'] + '\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20/\x20' + _0x3cfe35['length'] + '\x20||\x20File:\x20' + _0x3dd657 + '\x20Proxies:\x20' + _0x350e1c), await _0x34ce09(_0x3cfe35, _0x5d2308);
        var _0x4580bb = await _0x514389(_0x3cfe35[_0x5d2308], _0x23efcb, 'dev', ![]), _0x1d5a8a = await _0x514389(_0x3cfe35[_0x5d2308], _0x23efcb, 'pub', ![]);
        const _0x210e3f = {
            'succesDEVMSG': { 'embeds': [_0x4580bb] },
            'succesPUBMSG': { 'embeds': [_0x1d5a8a] }
        };
        if (_0x3cfe35[_0x5d2308]['Email'] == '' || _0x3cfe35[_0x5d2308]['FirstName'] == '' || _0x3cfe35[_0x5d2308]['LastName'] == '' || _0x3cfe35[_0x5d2308]['Country'] == '' || _0x3cfe35[_0x5d2308]['Size'] == '' || _0x3cfe35[_0x5d2308]['Address1'] == '' || _0x3cfe35[_0x5d2308]['Zip'] == '') {
            console['log'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4751e2['useRandomProxy'] = ![])
            var _0x47affe = _0x1c70d5[_0x5d2308]['split'](':');
        else
            var _0x5ab3a9 = Math['round'](Math['random']() * (_0x1c70d5['length'] - 0x1)), _0x47affe = _0x1c70d5[_0x5ab3a9]['split'](':');
        const _0x25b86a = await _0x11d919['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x47affe[0x0] + ':' + _0x47affe[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2d617e = await _0x25b86a['newPage']();
            await _0x2d617e['setDefaultNavigationTimeout'](0x1d4c0), await _0x2d617e['authenticate']({
                'username': '' + _0x47affe[0x2],
                'password': '' + _0x47affe[0x3]
            }), console['log'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2d617e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2d617e['setRequestInterception'](!![]), _0x2d617e['on']('request', _0x79ede5 => {
                _0x79ede5['resourceType']() === 'image' || _0x79ede5['resourceType']() === 'font' || _0x79ede5['resourceType']() === 'media' ? _0x79ede5['abort']() : _0x79ede5['continue']();
            }), await _0x2d617e['goto'](_0x1d0331, { 'waitUntil': 'networkidle2' }), console['log'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x2d617e['waitForTimeout'](0xfa0), console['log'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x2d617e['waitForTimeout'](0x320);
            if (_0x3cfe35[_0x5d2308]['Size'] == 'RANDOM') {
                console['log'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x363372 = await _0x2d617e['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x155453 => {
                    return _0x155453['map'](_0x379843 => _0x379843['href']);
                });
                var _0x581b4d = Math['round'](Math['random']() * (_0x363372['length'] - 0x1));
                await _0x2d617e['goto']('' + _0x363372[_0x581b4d]);
            } else {
                console['log'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3cfe35[_0x5d2308]['Size']);
                try {
                    const _0x5a55cf = await _0x2d617e['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x3cfe35[_0x5d2308]['Size'] + '\x22]\x20>\x20a', _0x53cbc4 => {
                        return _0x53cbc4['map'](_0x434c1c => _0x434c1c['href']);
                    });
                    await _0x2d617e['goto']('' + _0x5a55cf[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x29efe9) {
                    console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20' + _0x29efe9 + '\x20Size\x20not\x20found')), _0x5df7eb = 'Size\x20Not\x20Found';
                    var _0x307006 = await _0x514389(_0x3cfe35[_0x5d2308], _0x23efcb, 'dev', !![], _0x5df7eb);
                    _0x210e3f['errorDEV'] = { 'embeds': [_0x307006] };
                    _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], _0x210e3f['errorDEV']);
                    await _0x246459(_0x5a1b60, _0x210e3f['errorDEV']);
                    continue;
                }
            }
            await _0x2d617e['waitForTimeout'](0x258), await _0x2d617e['type']('#raffle-instagram', '' + _0x3cfe35[_0x5d2308]['Follower'], { 'delay': 0x64 }), await _0x2d617e['waitForTimeout'](0x384), await _0x2d617e['click']('#raffle-terms'), await _0x2d617e['waitForTimeout'](0x384), await _0x2d617e['evaluate'](() => {
                const _0x3767ac = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x3767ac['click']();
            }), await _0x2d617e['waitForTimeout'](0xbb8), await _0x2d617e['waitForSelector']('#checkout_email'), await _0x4babe3(0x3e8), console['log'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x112707 == 'sec' ? await _0x2d617e['type']('#checkout_email', '' + _0x3cfe35[_0x5d2308]['FirstName'] + _0x3cfe35[_0x5d2308]['LastName'] + _0x4751e2['catchall'], 0x32) : await _0x2d617e['type']('#checkout_email', '' + _0x3cfe35[_0x5d2308]['Email'], 0x32);
            await _0x4babe3(0x320), await _0x2d617e['select']('#checkout_shipping_address_country', '' + _0x3cfe35[_0x5d2308]['Country']), await _0x2d617e['waitForTimeout'](0x258), await _0x2d617e['type']('#checkout_shipping_address_first_name', '' + _0x3cfe35[_0x5d2308]['FirstName']), await _0x2d617e['waitForTimeout'](0x320), await _0x2d617e['type']('#checkout_shipping_address_last_name', '' + _0x3cfe35[_0x5d2308]['LastName']), await _0x2d617e['waitForTimeout'](0x2bc), await _0x2d617e['type']('#checkout_shipping_address_address1', _0x3cfe35[_0x5d2308]['Address1'] + '\x20' + _0x3cfe35[_0x5d2308]['HouseNumber']), await _0x2d617e['waitForTimeout'](0x2bc), await _0x2d617e['type']('#checkout_shipping_address_address2', '' + _0x3cfe35[_0x5d2308]['Address2']), await _0x2d617e['waitForTimeout'](0x2bc);
            _0x3cfe35[_0x5d2308]['Postcode'] == undefined ? await _0x2d617e['type']('#checkout_shipping_address_zip', '' + _0x3cfe35[_0x5d2308]['Zip']) : await _0x2d617e['type']('#checkout_shipping_address_zip', '' + _0x3cfe35[_0x5d2308]['Postcode']);
            await _0x2d617e['waitForTimeout'](0x2bc), await _0x2d617e['type']('#checkout_shipping_address_city', '' + _0x3cfe35[_0x5d2308]['City']), await _0x2d617e['waitForTimeout'](0x2bc), console['log'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x2d617e, _0x2d617e['evaluate'](() => {
                const _0x426530 = document['querySelector']('#continue_button');
                for (var _0x5a6c2f = 0x0; _0x5a6c2f < 0x5; _0x5a6c2f++) {
                    if (_0x426530) {
                        _0x426530['click'](), _0x426530['click']();
                        break;
                    } else
                        _0x4babe3(0xfa0);
                }
            }), await _0x2d617e['waitForTimeout'](0x1194);
            try {
                await _0x2d617e['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x2d617e['evaluate'](() => {
                const _0x38c6a7 = document['querySelector']('#continue_button');
                for (var _0x5c7a04 = 0x0; _0x5c7a04 < 0x5; _0x5c7a04++) {
                    if (_0x38c6a7) {
                        _0x38c6a7['click']();
                        break;
                    } else
                        _0x4babe3(0xfa0);
                }
            }), await _0x2d617e['waitForTimeout'](0x7d0), console['log'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x2d617e['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x2d617e['evaluate'](() => {
                const _0x50baa9 = document['querySelector']('#continue_button');
                for (var _0x207902 = 0x0; _0x207902 < 0x5; _0x207902++) {
                    if (_0x50baa9) {
                        _0x50baa9['click']();
                        break;
                    } else
                        _0x4babe3(0xfa0);
                }
            }), await _0x2d617e['waitForTimeout'](0x1194), await _0x2d617e['waitForSelector']('#continue_button'), _0x2d617e['evaluate'](() => {
                const _0x3dbe2a = document['querySelector']('#continue_button');
                for (var _0x1cbba1 = 0x0; _0x1cbba1 < 0x5; _0x1cbba1++) {
                    if (_0x3dbe2a) {
                        _0x3dbe2a['click']();
                        break;
                    } else
                        _0x4babe3(0xfa0);
                }
            });
            try {
                await _0x2d617e['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x2c7c07['green'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '')
                    try {
                        await _0x246459(_0x4751e2['webhook'], _0x210e3f['succesDEVMSG']);
                    } catch {
                    }
                await _0x4babe3(0xc8), await _0x246459(_0xfcf874, _0x210e3f['succesDEVMSG']), await _0x4babe3(0xc8);
                try {
                    await _0x246459(_0x43f811, _0x210e3f['succesPUBMSG']);
                } catch {
                }
            } catch (_0x4ef9c4) {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x4ef9c4));
            }
        } catch (_0x16a1a0) {
            console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20' + _0x16a1a0)), _0x5df7eb = '' + _0x16a1a0;
            var _0x307006 = await _0x514389(_0x3cfe35[_0x5d2308], _0x23efcb, 'dev', !![], _0x5df7eb);
            _0x210e3f['errorDEV'] = { 'embeds': [_0x307006] }, _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], _0x210e3f['errorDEV']), await _0x246459(_0x5a1b60, _0x210e3f['errorDEV']), _0x18e156 = 'yes';
        } finally {
            _0x25b86a && _0x25b86a['close']();
            if (_0x18e156 == 'yes' && _0x38e925 != 0x5 && _0x5df7eb != 'Size\x20Not\x20Found') {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x23efcb['name'] + ']\x20Task\x20' + (_0x5d2308 + 0x1) + '\x20:\x20Retrying')), _0x5d2308 = _0x5d2308 - 0x1, _0x38e925 = _0x38e925 + 0x1;
                continue;
            }
            if (_0x5d2308 + 0x1 == _0x3cfe35['length']) {
                console['log'](_0x2c7c07['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x4babe3(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x4751e2['AfewDelay'] + '\x20ms'), await _0x4babe3(_0x4751e2['AfewDelay']);
        }
    }
};
async function _0x4baa3d(_0x355b10, _0x3f3a74, _0x8aa547, _0x4e3863) {
    _0x11d919['use'](_0x585d0c()), _0x11d919['use'](_0x34cf32({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4751e2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x497b8b = 0x0; _0x497b8b < _0x8aa547['length']; _0x497b8b++) {
        var _0x2ca789 = '', _0x620912 = 0x0;
        _0x356443(_0x3f3a74['name'] + '\x20Task\x20' + (_0x497b8b + 0x1) + '\x20/\x20' + _0x8aa547['length'] + '\x20||\x20File:\x20' + _0x3dd657 + '\x20Proxies:\x20' + _0x350e1c), await _0x34ce09(_0x8aa547, _0x497b8b);
        var _0x175b1f = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x217831
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4751e2['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x57831b
                }
            ]
        }];
        const _0x2d1178 = { 'embeds': _0x175b1f };
        var _0x5b8aa4 = await _0x514389(_0x8aa547[_0x497b8b], _0x3f3a74, 'acc', ![]);
        const _0x41205e = { 'succesDEVMSG': { 'embeds': [_0x5b8aa4] } };
        if (_0x8aa547[_0x497b8b]['Email'] == '' || _0x8aa547[_0x497b8b]['FirstName'] == '' || _0x8aa547[_0x497b8b]['LastName'] == '') {
            console['log'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x8aa547[_0x497b8b]['Password'] == '' && (_0x8aa547[_0x497b8b]['Password'] = 'JRaffles23!');
        if (_0x4751e2['useRandomProxy'] = ![])
            var _0x4768c7 = _0x4e3863[_0x497b8b]['split'](':');
        else
            var _0x1f5153 = Math['round'](Math['random']() * (_0x4e3863['length'] - 0x1)), _0x4768c7 = _0x4e3863[_0x1f5153]['split'](':');
        const _0x14534e = await _0x11d919['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4768c7[0x0] + ':' + _0x4768c7[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xfb303b = await _0x14534e['newPage']();
            await _0xfb303b['authenticate']({
                'username': '' + _0x4768c7[0x2],
                'password': '' + _0x4768c7[0x3]
            }), console['log'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20Getting\x20Session'), await _0xfb303b['setRequestInterception'](!![]), _0xfb303b['on']('request', _0x2ee517 => {
                _0x2ee517['resourceType']() === 'image' || _0x2ee517['resourceType']() === 'font' || _0x2ee517['resourceType']() === 'media' ? _0x2ee517['abort']() : _0x2ee517['continue']();
            }), await _0xfb303b['goto'](_0x355b10), await _0x4babe3(0xbb8), console['log'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20Starting\x20Registration'), await _0xfb303b['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xfb303b['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xfb303b['waitForSelector']('#button-register'), await _0x4babe3(0x7d0), await _0xfb303b['evaluate'](() => {
                const _0x56b214 = document['querySelector']('#button-register');
                _0x56b214['click']();
            }), console['log'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4babe3(0x1388), await _0xfb303b['waitForSelector']('#customer_salutation'), await _0xfb303b['select']('#customer_salutation', 'mr'), await _0x4babe3(0x7d0), await _0xfb303b['waitForSelector']('#customer_firstname'), await _0xfb303b['type']('#customer_firstname', '' + _0x8aa547[_0x497b8b]['FirstName']), await _0x4babe3(0x352), await _0xfb303b['waitForSelector']('#customer_lastname'), await _0xfb303b['type']('#customer_lastname', '' + _0x8aa547[_0x497b8b]['LastName']), await _0x4babe3(0x352), await _0xfb303b['type']('#email-input', '' + _0x8aa547[_0x497b8b]['Email']), await _0x4babe3(0x352), await _0xfb303b['type']('#email-confirm-input', '' + _0x8aa547[_0x497b8b]['Email']), await _0x4babe3(0x352), await _0xfb303b['type']('#register-password', '' + _0x8aa547[_0x497b8b]['Password']), await _0x4babe3(0x352), await _0xfb303b['type']('#password-confirm', '' + _0x8aa547[_0x497b8b]['Password']), await _0x4babe3(0x352), console['log'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0xfb303b['click']('#consent'), await _0x4babe3(0x1f4);
            const _0x4e0017 = await _0xfb303b['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x4e0017) {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0xfb303b['click']('#buttonRegister');
            try {
                await _0xfb303b['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x2c7c07['yellow'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20Account\x20' + _0x8aa547[_0x497b8b]['Email'] + '\x20Generated!')), console['log'](_0x2c7c07['yellow'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x8aa547[_0x497b8b]['Email'])), await _0x4babe3(0x4b0);
            async function _0x3c114c() {
                console['log'](_0x2c7c07['yellow'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x4be374 = await _0x4d0251['get']('Code');
                return _0x4be374['Code'];
            }
            ;
            code = await _0x3c114c(), _0x4babe3(0x320), console['log'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20Verifying..'), await _0xfb303b['type']('#verificationCode', code), await _0x4babe3(0x1f4), await _0xfb303b['click']('#buttonVerify'), await _0x4babe3(0x190), await _0xfb303b['click']('#buttonVerify'), await _0x4babe3(0x3e8);
            try {
                await _0xfb303b['waitForSelector']('div.b-user_greeting'), console['log'](_0x2c7c07['green'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20Account\x20' + _0x8aa547[_0x497b8b]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x4c4e71['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x8aa547[_0x497b8b]['Email'] + ',' + _0x8aa547[_0x497b8b]['Password'] + ','), console['log'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20Account\x20' + _0x8aa547[_0x497b8b]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], _0x41205e['succesDEVMSG']);
                } catch {
                }
                await _0x246459(_0x289980, _0x41205e['succesDEVMSG']);
            } catch {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x5c8d40) {
            console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20' + _0x5c8d40)), _0x175b1f[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x175b1f[0x0]['description'] = '' + _0x5c8d40, await _0x246459(_0x5a1b60, _0x2d1178), _0x2ca789 = 'yes';
        } finally {
            _0x14534e && _0x14534e['close']();
            if (_0x2ca789 == 'yes' && _0x620912 != 0x5) {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x3f3a74['name'] + ']\x20Task\x20' + (_0x497b8b + 0x1) + '\x20:\x20Retrying')), _0x497b8b = _0x497b8b - 0x1, _0x620912 = _0x620912 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x4751e2['delay'] + '\x20ms'), await _0x4babe3(_0x4751e2['delay']);
        }
    }
}
async function _0x13a302(_0x27996e, _0x15fe53, _0xff7412) {
    _0x11d919['use'](_0x585d0c()), _0x11d919['use'](_0x34cf32({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4751e2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x335591 = 0x0; _0x335591 < _0x15fe53['length']; _0x335591++) {
        var _0x35adad, _0x301329 = '', _0x58ab7a = 0x0;
        _0x356443(_0x27996e['name'] + '\x20Task\x20' + (_0x335591 + 0x1) + '\x20/\x20' + _0x15fe53['length'] + '\x20||\x20File:\x20' + _0x3dd657 + '\x20Proxies:\x20' + _0x350e1c);
        var _0x390c07 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x217831
                },
                {
                    'name': 'Product',
                    'value': '' + _0x15fe53[_0x335591]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x15fe53[_0x335591]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4751e2['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x57831b
                }
            ]
        }], _0x486320 = await _0x514389(_0x15fe53[_0x335591], _0x27996e, 'dev', ![]), _0x527417 = await _0x514389(_0x15fe53[_0x335591], _0x27996e, 'pub', ![]);
        const _0x110145 = {
            'succesDEVMSG': { 'embeds': [_0x486320] },
            'succesPUBMSG': { 'embeds': [_0x527417] }
        };
        await _0x34ce09(_0x15fe53, _0x335591);
        if (_0x15fe53[_0x335591]['Email'] == '' || _0x15fe53[_0x335591]['Password'] == '' || _0x15fe53[_0x335591]['FirstName'] == '' || _0x15fe53[_0x335591]['LastName'] == '') {
            console['log'](_0xc2164e() + '\x20[' + _0x27996e['name'] + ']\x20Task\x20' + (_0x335591 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4751e2['useRandomProxy'] = ![])
            var _0x8c969c = _0xff7412[_0x335591]['split'](':');
        else
            var _0x50165b = Math['round'](Math['random']() * (_0xff7412['length'] - 0x1)), _0x8c969c = _0xff7412[_0x50165b]['split'](':');
        const _0x4736fb = await _0x11d919['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x8c969c[0x0] + ':' + _0x8c969c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3be500 = await _0x4736fb['newPage']();
            await _0x3be500['authenticate']({
                'username': '' + _0x8c969c[0x2],
                'password': '' + _0x8c969c[0x3]
            }), console['log'](_0xc2164e() + '\x20[' + _0x27996e['name'] + ']\x20Task\x20' + (_0x335591 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3be500['setRequestInterception'](!![]), _0x3be500['on']('request', _0x7b1337 => {
                _0x7b1337['resourceType']() === 'image' || _0x7b1337['resourceType']() === 'font' || _0x7b1337['resourceType']() === 'media' ? _0x7b1337['abort']() : _0x7b1337['continue']();
            }), await _0x3be500['goto']('' + _0x15fe53[_0x335591]['Url'], { 'waitUntil': 'networkidle2' }), await _0x4babe3(0x12c);
            try {
                await _0x3be500['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x3be500['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0xc2164e() + '\x20[' + _0x27996e['name'] + ']\x20Task\x20' + (_0x335591 + 0x1) + '\x20:\x20Logging\x20in'), await _0x3be500['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3be500['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3be500['waitForSelector']('#username'), await _0x3be500['type']('#username', _0x15fe53[_0x335591]['Email']), await _0x3be500['waitForSelector']('#password'), await _0x3be500['type']('#password', _0x15fe53[_0x335591]['Password']), await _0x4babe3(0x190), await _0x3be500['click']('#buttonSubmit'), await _0x3be500['waitForSelector']('div.b-user_greeting'), console['log'](_0xc2164e() + '\x20[' + _0x27996e['name'] + ']\x20Task\x20' + (_0x335591 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x4babe3(0x1f4), await _0x3be500['goto']('' + _0x15fe53[_0x335591]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0xc2164e() + '\x20[' + _0x27996e['name'] + ']\x20Task\x20' + (_0x335591 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x15fe53[_0x335591]['Size']);
            let _0xaf5d19 = _0x15fe53[_0x335591]['Size']['replace']('.5', '\x201/2');
            await _0x3be500['click']('button[title=\x22' + _0xaf5d19 + '\x22]'), await _0x4babe3(0x1f4);
            try {
                await _0x3be500['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x4babe3(0x12c), console['log'](_0xc2164e() + '\x20[' + _0x27996e['name'] + ']\x20Task\x20' + (_0x335591 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3be500['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x4babe3(0x12c), await _0x3be500['type']('#dwfrm_raffle_addressFields_firstName', _0x15fe53[_0x335591]['FirstName']), await _0x4babe3(0x12c), await _0x3be500['type']('#dwfrm_raffle_addressFields_lastName', _0x15fe53[_0x335591]['LastName']), await _0x4babe3(0x12c), await _0x3be500['select']('#dwfrm_raffle_addressFields_country', _0x15fe53[_0x335591]['Country']), await _0x4babe3(0x12c), await _0x3be500['type']('#dwfrm_raffle_addressFields_city', _0x15fe53[_0x335591]['City']), await _0x4babe3(0x12c);
            _0x15fe53[_0x335591]['Postcode'] == undefined && (_0x15fe53[_0x335591]['Postcode'] = _0x15fe53[_0x335591]['Zip']);
            await _0x3be500['type']('#dwfrm_raffle_addressFields_postalCode', _0x15fe53[_0x335591]['Postcode']), await _0x4babe3(0x12c), await _0x3be500['type']('#dwfrm_raffle_addressFields_address1', _0x15fe53[_0x335591]['Address1']), await _0x4babe3(0x12c), await _0x3be500['type']('#dwfrm_raffle_addressFields_address2', _0x15fe53[_0x335591]['HouseNumber']), await _0x4babe3(0x12c), await _0x3be500['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x15fe53[_0x335591]['Address2']), await _0x4babe3(0x12c), await _0x3be500['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x4babe3(0x12c), await _0x3be500['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x15fe53[_0x335591]['Follower']), await _0x4babe3(0x1f4), await _0x3be500['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x4babe3(0x1f4), console['log'](_0xc2164e() + '\x20[' + _0x27996e['name'] + ']\x20Task\x20' + (_0x335591 + 0x1) + '\x20:\x20' + _0x2c7c07['blue']('Awaiting\x20Paypal\x20Payment')), await _0x3be500['click']('.b-paypal_button');
            try {
                await _0x3be500['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x2c7c07['green'](_0xc2164e() + '\x20[' + _0x27996e['name'] + ']\x20Task\x20' + (_0x335591 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], _0x110145['succesDEVMSG']), await _0x4babe3(0xc8), await _0x246459(_0xfcf874, _0x110145['succesDEVMSG']), await _0x4babe3(0xc8), await _0x246459(_0x43f811, _0x110145['succesPUBMSG']);
            } catch (_0x117e8b) {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x27996e['name'] + ']\x20Task\x20' + (_0x335591 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x117e8b)), _0x35adad = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x117e8b;
                var _0x291ca2 = await _0x514389(_0x15fe53[_0x335591], _0x27996e, 'dev', !![], _0x35adad);
                _0x110145['errorDEV'] = { 'embeds': [_0x291ca2] }, _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], _0x110145['errorDEV']), await _0x246459(_0x5a1b60, _0x110145['errorDEV']);
            }
        } catch (_0x2fb321) {
            console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x27996e['name'] + ']\x20Task\x20' + (_0x335591 + 0x1) + '\x20:\x20' + _0x2fb321)), _0x35adad = '' + _0x2fb321;
            var _0x291ca2 = await _0x514389(_0x15fe53[_0x335591], _0x27996e, 'dev', !![], _0x35adad);
            _0x110145['errorDEV'] = { 'embeds': [_0x291ca2] }, _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], _0x110145['errorDEV']), await _0x246459(_0x5a1b60, _0x110145['errorDEV']), _0x301329 = 'yes';
        } finally {
            _0x4736fb && _0x4736fb['close']();
            if (_0x301329 == 'yes' && _0x58ab7a != 0x5) {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x27996e['name'] + ']\x20Task\x20' + (_0x335591 + 0x1) + '\x20:\x20Retrying')), _0x335591 = _0x335591 - 0x1, _0x58ab7a = _0x58ab7a + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x4751e2['AfewDelay'] + '\x20ms'), await _0x4babe3(_0x4751e2['AfewDelay']);
        }
    }
}
async function _0x2fa8cf(_0x2efa3d, _0x2dc692) {
    _0x11d919['use'](_0x585d0c()), _0x11d919['use'](_0x34cf32({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4751e2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4126fb = 0x0; _0x4126fb < bouncewear['length']; _0x4126fb++) {
        await _0x34ce09(bouncewear, _0x4126fb);
        if (bouncewear[_0x4126fb]['Email'] == '' || bouncewear[_0x4126fb]['Password'] == '' || bouncewear[_0x4126fb]['FirstName'] == '' || bouncewear[_0x4126fb]['LastName'] == '') {
            console['log'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x4126fb + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4751e2['useRandomProxy'] = ![])
            var _0x5cd0c9 = _0x1ae98d()[_0x4126fb]['split'](':');
        else
            var _0x5d48a3 = Math['round'](Math['random']() * (_0x1ae98d()['length'] - 0x1)), _0x5cd0c9 = _0x1ae98d()[_0x5d48a3]['split'](':');
        const _0x7d9d37 = await _0x11d919['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5cd0c9[0x0] + ':' + _0x5cd0c9[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2e3292 = await _0x7d9d37['newPage']();
            await _0x2e3292['authenticate']({
                'username': '' + _0x5cd0c9[0x2],
                'password': '' + _0x5cd0c9[0x3]
            }), console['log'](_0xc2164e() + '\x20[' + _0x2dc692['name'] + ']\x20Task\x20' + (_0x4126fb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2e3292['setRequestInterception'](!![]), _0x2e3292['on']('request', _0x5ad296 => {
                _0x5ad296['resourceType']() === 'image' || _0x5ad296['resourceType']() === 'font' || _0x5ad296['resourceType']() === 'media' ? _0x5ad296['abort']() : _0x5ad296['continue']();
            }), await _0x2e3292['goto'](_0x2efa3d), await _0x4babe3(0xbb8), await _0x2e3292['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0xc2164e() + '\x20[' + _0x2dc692['name'] + ']\x20Task\x20' + (_0x4126fb + 0x1) + '\x20:\x20Filling\x20information'), await _0x2e3292['type']('#RegisterForm-FirstName', '' + bouncewear[_0x4126fb]['FirstName']), await _0x4babe3(0x226), await _0x2e3292['type']('#RegisterForm-LastName', '' + bouncewear[_0x4126fb]['LastName']), await _0x4babe3(0x226), await _0x2e3292['type']('#RegisterForm-email', '' + bouncewear[_0x4126fb]['Email']), await _0x4babe3(0x226), await _0x2e3292['type']('#RegisterForm-password', '' + bouncewear[_0x4126fb]['Password']), await _0x4babe3(0x226), await _0x2e3292['click']('#marketing'), console['log'](_0xc2164e() + '\x20[' + _0x2dc692['name'] + ']\x20Task\x20' + (_0x4126fb + 0x1) + '\x20:\x20Submitting..'), await _0x2e3292['$eval']('#RegisterForm', _0x1a23d4 => _0x1a23d4['submit']()), await _0x4babe3(0x1f40), console['log'](_0xc2164e() + '\x20[' + _0x2dc692['name'] + ']\x20Task\x20' + (_0x4126fb + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x2e3292['solveRecaptchas'](), await _0x2e3292['click']('.shopify-challenge__button.btn');
            async function _0x4b6318() {
                for (var _0x494cf1 = 0x0; _0x494cf1 < 0x4; _0x494cf1++) {
                    try {
                        console['log']('try'), await _0x2e3292['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0xc2164e() + '\x20[' + _0x2dc692['name'] + ']\x20Task\x20' + (_0x4126fb + 0x1) + '\x20:\x20' + _0x2c7c07['red']('Catpcha\x20failed,\x20retrying..')), await _0x2e3292['solveRecaptchas'](), await _0x2e3292['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x4b6318(), console['log'](_0xc2164e() + '\x20[' + _0x2dc692['name'] + ']\x20Task\x20' + (_0x4126fb + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x4babe3(0x1f4);
            try {
                await _0x2e3292['waitForSelector']('.featured-title'), await _0x4babe3(0x1f4), console['log'](_0x2c7c07['green'](_0xc2164e() + '\x20[' + _0x2dc692['name'] + ']\x20Task\x20' + (_0x4126fb + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x4126fb]['Email'] + '\x20Generated!')), _0x4c4e71['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x4126fb]['Email'] + ',' + bouncewear[_0x4126fb]['Password']), console['log'](_0x2c7c07['yellow'](_0xc2164e() + '\x20[' + _0x2dc692['name'] + ']\x20Task\x20' + (_0x4126fb + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x4126fb]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x769290) {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x4126fb + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x769290));
            }
        } catch (_0x2f9e2e) {
            console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x4126fb + 0x1) + '\x20:\x20' + _0x2f9e2e));
        } finally {
            _0x7d9d37 && _0x7d9d37['close'](), console['log']('Waiting\x20for\x20' + _0x4751e2['delay'] + '\x20ms'), await _0x4babe3(_0x4751e2['delay']);
        }
    }
}
async function _0x1865eb(_0x43b5d1, _0x2b7906, _0x5dde2a, _0x259dec) {
    _0x11d919['use'](_0x585d0c()), _0x11d919['use'](_0x34cf32({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4751e2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x26f374 = 0x0; _0x26f374 < _0x5dde2a['length']; _0x26f374++) {
        var _0xbc1c60 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x217831
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4751e2['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x57831b
                }
            ]
        }];
        const _0x220a95 = { 'embeds': _0xbc1c60 };
        _0x356443(_0x2b7906['name'] + '\x20Task\x20' + (_0x26f374 + 0x1) + '\x20/\x20' + _0x5dde2a['length'] + '\x20||\x20File:\x20' + _0x3dd657 + '\x20Proxies:\x20' + _0x350e1c), await _0x34ce09(_0x5dde2a, _0x26f374);
        var _0x863d4a = await _0x514389(_0x5dde2a[_0x26f374], _0x2b7906, 'acc', ![]);
        const _0x4273a7 = { 'succesDEVMSG': { 'embeds': [_0x863d4a] } };
        if (_0x5dde2a[_0x26f374]['Email'] == '' || _0x5dde2a[_0x26f374]['FirstName'] == '' || _0x5dde2a[_0x26f374]['LastName'] == '') {
            console['log'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x26f374 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4babe3(0x7d0);
            continue;
        }
        (_0x5dde2a[_0x26f374]['Password'] == '' || _0x5dde2a[_0x26f374] == undefined) && _0x5dde2a[_0x26f374]['Password'] == 'JRaffles23!';
        if (_0x4751e2['useRandomProxy'] = ![])
            var _0x1b2d66 = _0x259dec[_0x26f374]['split'](':');
        else
            var _0x995e73 = Math['round'](Math['random']() * (_0x259dec['length'] - 0x1)), _0x1b2d66 = _0x259dec[_0x995e73]['split'](':');
        const _0x27e5d8 = await _0x11d919['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1b2d66[0x0] + ':' + _0x1b2d66[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1cf804 = await _0x27e5d8['newPage']();
            await _0x1cf804['authenticate']({
                'username': '' + _0x1b2d66[0x2],
                'password': '' + _0x1b2d66[0x3]
            }), console['log'](_0xc2164e() + '\x20[' + _0x2b7906['name'] + ']\x20Task\x20' + (_0x26f374 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1cf804['setRequestInterception'](!![]), _0x1cf804['on']('request', _0x5dab16 => {
                _0x5dab16['resourceType']() === 'image' || _0x5dab16['resourceType']() === 'font' || _0x5dab16['resourceType']() === 'media' ? _0x5dab16['abort']() : _0x5dab16['continue']();
            }), await _0x1cf804['goto'](_0x43b5d1), await _0x4babe3(0xbb8), await _0x1cf804['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0xc2164e() + '\x20[' + _0x2b7906['name'] + ']\x20Task\x20' + (_0x26f374 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1cf804['type']('#RegisterForm-FirstName', '' + _0x5dde2a[_0x26f374]['FirstName']), await _0x4babe3(0x226), await _0x1cf804['type']('#RegisterForm-LastName', '' + _0x5dde2a[_0x26f374]['LastName']), await _0x4babe3(0x226), await _0x1cf804['type']('#RegisterForm-email', '' + _0x5dde2a[_0x26f374]['Email']), await _0x4babe3(0x226), await _0x1cf804['type']('#RegisterForm-password', '' + _0x5dde2a[_0x26f374]['Password']), await _0x4babe3(0x226), console['log'](_0xc2164e() + '\x20[' + _0x2b7906['name'] + ']\x20Task\x20' + (_0x26f374 + 0x1) + '\x20:\x20Submitting..'), await _0x1cf804['$eval']('#RegisterForm', _0x4c3f4b => _0x4c3f4b['submit']()), await _0x4babe3(0x1f40);
            try {
                await _0x1cf804['waitForSelector']('.home-page-grid__collection'), await _0x4babe3(0x1f4), console['log'](_0x2c7c07['green'](_0xc2164e() + '\x20[' + _0x2b7906['name'] + ']\x20Task\x20' + (_0x26f374 + 0x1) + '\x20:\x20Account\x20' + _0x5dde2a[_0x26f374]['Email'] + '\x20Generated!')), _0x4c4e71['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x5dde2a[_0x26f374]['Email'] + ',' + _0x5dde2a[_0x26f374]['Password']), console['log'](_0x2c7c07['yellow'](_0xc2164e() + '\x20[' + _0x2b7906['name'] + ']\x20Task\x20' + (_0x26f374 + 0x1) + '\x20:\x20Account\x20' + _0x5dde2a[_0x26f374]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], _0x4273a7['succesDEVMSG']);
                } catch {
                }
                await _0x246459(_0x289980, _0x4273a7['succesDEVMSG']);
            } catch (_0x1f4194) {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x26f374 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1f4194));
            }
        } catch (_0x3fd2d3) {
            console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x26f374 + 0x1) + '\x20:\x20' + _0x3fd2d3));
        } finally {
            _0x27e5d8 && _0x27e5d8['close'](), console['log']('Waiting\x20for\x20' + _0x4751e2['delay'] + '\x20ms'), await _0x4babe3(_0x4751e2['delay']);
        }
    }
}
async function _0x27519d(_0x219d36, _0x266cdd, _0x5610cf, _0x33bc8a) {
    _0x11d919['use'](_0x585d0c()), _0x11d919['use'](_0x34cf32({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4751e2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x562316 = 0x0; _0x562316 < _0x5610cf['length']; _0x562316++) {
        var _0x1ef9ad, _0x8cdecf = '', _0x545999 = 0x0;
        _0x356443(_0x266cdd['name'] + '\x20Task\x20' + (_0x562316 + 0x1) + '\x20/\x20' + _0x5610cf['length'] + '\x20||\x20File:\x20' + _0x3dd657 + '\x20Proxies:\x20' + _0x350e1c), await _0x34ce09(_0x5610cf, _0x562316);
        if (_0x5610cf[_0x562316]['Email'] == '' || _0x5610cf[_0x562316]['Password'] == '' || _0x5610cf[_0x562316]['FirstName'] == '' || _0x5610cf[_0x562316]['LastName'] == '') {
            console['log'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x562316 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4751e2['useRandomProxy'] = ![])
            var _0x4e078a = _0x33bc8a[_0x562316]['split'](':');
        else
            var _0x470210 = Math['round'](Math['random']() * (_0x33bc8a['length'] - 0x1)), _0x4e078a = _0x33bc8a[_0x470210]['split'](':');
        const _0x2f7c08 = await _0x11d919['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4e078a[0x0] + ':' + _0x4e078a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2dc80c = await _0x2f7c08['newPage']();
            await _0x2dc80c['authenticate']({
                'username': '' + _0x4e078a[0x2],
                'password': '' + _0x4e078a[0x3]
            }), console['log'](_0xc2164e() + '\x20[' + _0x266cdd['name'] + ']\x20Task\x20' + (_0x562316 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2dc80c['setRequestInterception'](!![]), _0x2dc80c['on']('request', _0x3296d9 => {
                _0x3296d9['resourceType']() === 'image' || _0x3296d9['resourceType']() === 'font' || _0x3296d9['resourceType']() === 'media' ? _0x3296d9['abort']() : _0x3296d9['continue']();
            }), await _0x2dc80c['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x2dc80c['waitForSelector']('#CustomerEmail'), console['log'](_0xc2164e() + '\x20[' + _0x266cdd['name'] + ']\x20Task\x20' + (_0x562316 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2dc80c['type']('#CustomerEmail', '' + _0x5610cf[_0x562316]['Email']), await _0x4babe3(0x12c), await _0x2dc80c['type']('#CustomerPassword', '' + _0x5610cf[_0x562316]['Password']), await _0x4babe3(0x226), await _0x2dc80c['$eval']('#customer_login', _0xdd71a6 => _0xdd71a6['submit']());
            try {
                await _0x2dc80c['waitForSelector']('#orders'), await _0x4babe3(0x4b0);
            } catch {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x266cdd['name'] + ']\x20Task\x20' + (_0x562316 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x2dc80c['goto']('' + _0x5610cf[_0x562316]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4babe3(0xbb8), console['log'](_0xc2164e() + '\x20[' + _0x266cdd['name'] + ']\x20Task\x20' + (_0x562316 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x2dc80c['waitForSelector']('#email');
            } catch {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x266cdd['name'] + ']\x20Task\x20' + (_0x562316 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x2dc80c['type']('#email', '' + _0x5610cf[_0x562316]['Email']), await _0x4babe3(0x384), await _0x2dc80c['type']('#first_name', '' + _0x5610cf[_0x562316]['FirstName']), await _0x4babe3(0x514), await _0x2dc80c['type']('#last_name', '' + _0x5610cf[_0x562316]['LastName']), await _0x4babe3(0x514), await _0x2dc80c['type']('#street_address', _0x5610cf[_0x562316]['Address1'] + '\x20' + _0x5610cf[_0x562316]['HouseNumber'] + '\x20' + _0x5610cf[_0x562316]['Address2']), await _0x4babe3(0x2bc);
            _0x5610cf[_0x562316]['Postcode'] == undefined && (_0x5610cf[_0x562316]['Postcode'] = _0x5610cf[_0x562316]['Zip']);
            await _0x2dc80c['type']('#zip_code', '' + _0x5610cf[_0x562316]['Postcode']), await _0x4babe3(0x320), await _0x2dc80c['type']('#city', '' + _0x5610cf[_0x562316]['City']), await _0x4babe3(0x320), await _0x2dc80c['type']('#bday', '01/01/1994'), await _0x4babe3(0x320), await _0x2dc80c['type']('#instagram', '' + _0x5610cf[_0x562316]['Follower']), await _0x4babe3(0x352);
            if (_0x5610cf[_0x562316]['Size'] == 'RANDOM') {
                const _0x4286c5 = await _0x2dc80c['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x5a071b => {
                    return _0x5a071b['map'](_0x5672e8 => _0x5672e8['textContent']);
                });
                var _0x4c9522 = Math['round'](Math['random']() * (_0x4286c5['length'] - 0x1));
                console['log'](_0xc2164e() + '\x20[' + _0x266cdd['name'] + ']\x20Task\x20' + (_0x562316 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x4286c5[_0x4c9522]), await _0x2dc80c['click']('label[data-eu-size=\x22' + _0x4286c5[_0x4c9522] + '\x22]');
            } else {
                console['log'](_0xc2164e() + '\x20[' + _0x266cdd['name'] + ']\x20Task\x20' + (_0x562316 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x5610cf[_0x562316]['Size']);
                try {
                    await _0x2dc80c['click']('label[data-eu-size=\x22' + _0x5610cf[_0x562316]['Size'] + '\x22]');
                } catch {
                    await _0x2dc80c['click']('label[data-eu-size=\x22' + _0x5610cf[_0x562316]['Size'] + '.0\x22]');
                }
            }
            await _0x4babe3(0xbb8), await _0x2dc80c['$$eval']('.raffle__checkbox-label', _0x17525f => _0x17525f['forEach'](_0x4ebc93 => _0x4ebc93['click']())), await _0x4babe3(0x7d0), console['log'](_0xc2164e() + '\x20[' + _0x266cdd['name'] + ']\x20Task\x20' + (_0x562316 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x2dc80c['click']('#raffle__form-submit'), await _0x4babe3(0x1388);
            try {
                await _0x2dc80c['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x2c7c07['green'](_0xc2164e() + '\x20[' + _0x266cdd['name'] + ']\x20Task\x20' + (_0x562316 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x58924d) {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x562316 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x58924d));
            }
        } catch (_0xc51c38) {
            console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x562316 + 0x1) + '\x20:\x20' + _0xc51c38)), _0x8cdecf = 'yes';
        } finally {
            _0x2f7c08 && _0x2f7c08['close']();
            if (_0x8cdecf == 'yes' && _0x545999 != 0x5) {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x266cdd['name'] + ']\x20Task\x20' + (_0x562316 + 0x1) + '\x20:\x20Retrying')), _0x562316 = _0x562316 - 0x1, _0x545999 = _0x545999 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x4751e2['delay'] + '\x20ms'), await _0x4babe3(_0x4751e2['delay']);
        }
    }
}
async function _0x4078e5(_0x541810, _0x348e05, _0x3ae638, _0x547e05) {
    _0x11d919['use'](_0x585d0c()), _0x11d919['use'](_0x34cf32({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4751e2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x18076e = 0x0; _0x18076e < _0x3ae638['length']; _0x18076e++) {
        var _0x924e98 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x217831
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4751e2['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x57831b
                }
            ]
        }];
        const _0x13fbbd = { 'embeds': _0x924e98 };
        _0x356443(_0x348e05['name'] + '\x20Task\x20' + (_0x18076e + 0x1) + '\x20/\x20' + _0x3ae638['length'] + '\x20||\x20File:\x20' + _0x3dd657 + '\x20Proxies:\x20' + _0x350e1c), await _0x34ce09(_0x3ae638, _0x18076e);
        var _0x3c5875 = await _0x514389(_0x3ae638[_0x18076e], _0x348e05, 'acc', ![]);
        const _0x5226fc = { 'succesDEVMSG': { 'embeds': [_0x3c5875] } };
        if (_0x3ae638[_0x18076e]['Email'] == '' || _0x3ae638[_0x18076e]['FirstName'] == '' || _0x3ae638[_0x18076e]['LastName'] == '') {
            console['log'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x18076e + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4babe3(0x7d0);
            continue;
        }
        (_0x3ae638[_0x18076e]['Password'] == '' || _0x3ae638[_0x18076e] == undefined) && _0x3ae638[_0x18076e]['Password'] == 'JRaffles23!';
        if (_0x4751e2['useRandomProxy'] = ![])
            var _0x54245e = _0x547e05[_0x18076e]['split'](':');
        else
            var _0x386cc9 = Math['round'](Math['random']() * (_0x547e05['length'] - 0x1)), _0x54245e = _0x547e05[_0x386cc9]['split'](':');
        const _0xa95a9f = await _0x11d919['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x54245e[0x0] + ':' + _0x54245e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x10cf29 = await _0xa95a9f['newPage']();
            await _0x10cf29['authenticate']({
                'username': '' + _0x54245e[0x2],
                'password': '' + _0x54245e[0x3]
            }), console['log'](_0xc2164e() + '\x20[' + _0x348e05['name'] + ']\x20Task\x20' + (_0x18076e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x10cf29['setRequestInterception'](!![]), _0x10cf29['on']('request', _0x5bd522 => {
                _0x5bd522['resourceType']() === 'image' || _0x5bd522['resourceType']() === 'font' || _0x5bd522['resourceType']() === 'media' ? _0x5bd522['abort']() : _0x5bd522['continue']();
            }), await _0x10cf29['goto']('https://drop.slamjam.com/account/register'), await _0x4babe3(0xbb8), await _0x10cf29['waitForSelector']('#FirstName'), await _0x10cf29['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x10cf29['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0xc2164e() + '\x20[' + _0x348e05['name'] + ']\x20Task\x20' + (_0x18076e + 0x1) + '\x20:\x20Filling\x20information'), await _0x4babe3(0x4b0), await _0x10cf29['type']('#FirstName', '' + _0x3ae638[_0x18076e]['FirstName']), await _0x4babe3(0x226), await _0x10cf29['type']('#LastName', '' + _0x3ae638[_0x18076e]['LastName']), await _0x4babe3(0x226), await _0x10cf29['type']('#Email', '' + _0x3ae638[_0x18076e]['Email']), await _0x4babe3(0x2ee), await _0x10cf29['type']('#ConfirmEmail', '' + _0x3ae638[_0x18076e]['Email']), await _0x4babe3(0x2ee), await _0x10cf29['type']('#CreatePassword', '' + _0x3ae638[_0x18076e]['Password']), await _0x4babe3(0x2ee), await _0x10cf29['type']('#CreateConfirmPassword', '' + _0x3ae638[_0x18076e]['Password']), await _0x4babe3(0x226), console['log'](_0xc2164e() + '\x20[' + _0x348e05['name'] + ']\x20Task\x20' + (_0x18076e + 0x1) + '\x20:\x20Submitting..'), await _0x10cf29['$eval']('#create_customer', _0x802306 => _0x802306['submit']()), await _0x4babe3(0x1388), console['log'](_0xc2164e() + '\x20[' + _0x348e05['name'] + ']\x20Task\x20' + (_0x18076e + 0x1) + '\x20:\x20' + _0x2c7c07['cyan']('Solving\x20Captcha')), await _0x10cf29['solveRecaptchas'](), console['log'](_0xc2164e() + '\x20[' + _0x348e05['name'] + ']\x20Task\x20' + (_0x18076e + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x10cf29['$eval']('.shopify-challenge__container\x20>\x20form', _0x11c87b => _0x11c87b['submit']());
            try {
                await _0x10cf29['waitForSelector']('.product-card__image'), await _0x4babe3(0x1f4), console['log'](_0x2c7c07['green'](_0xc2164e() + '\x20[' + _0x348e05['name'] + ']\x20Task\x20' + (_0x18076e + 0x1) + '\x20:\x20Account\x20' + _0x3ae638[_0x18076e]['Email'] + '\x20Generated!')), _0x4c4e71['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x3ae638[_0x18076e]['Email'] + ',' + _0x3ae638[_0x18076e]['Password']), console['log'](_0x2c7c07['yellow'](_0xc2164e() + '\x20[' + _0x348e05['name'] + ']\x20Task\x20' + (_0x18076e + 0x1) + '\x20:\x20Account\x20' + _0x3ae638[_0x18076e]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], _0x5226fc['succesDEVMSG']);
                } catch {
                }
                await _0x246459(_0x289980, _0x5226fc['succesDEVMSG']);
            } catch (_0x306b53) {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x18076e + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x306b53));
            }
        } catch (_0x5604b8) {
            console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x18076e + 0x1) + '\x20:\x20' + _0x5604b8));
        } finally {
            _0xa95a9f && _0xa95a9f['close'](), console['log']('Waiting\x20for\x20' + _0x4751e2['delay'] + '\x20ms'), await _0x4babe3(_0x4751e2['delay']);
        }
    }
}
async function _0x4ac2e9(_0x4bb841, _0x375391, _0x552fbf, _0x21145f) {
    _0x11d919['use'](_0x585d0c()), _0x11d919['use'](_0x34cf32({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4751e2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x51f355 = 0x0; _0x51f355 < _0x552fbf['length']; _0x51f355++) {
        var _0x3a6f08, _0x2a8825 = '', _0x4a6145 = 0x0;
        _0x356443(_0x375391['name'] + '\x20Task\x20' + (_0x51f355 + 0x1) + '\x20/\x20' + _0x552fbf['length'] + '\x20||\x20File:\x20' + _0x3dd657 + '\x20Proxies:\x20' + _0x350e1c), await _0x34ce09(_0x552fbf, _0x51f355);
        if (_0x552fbf[_0x51f355]['Email'] == '' || _0x552fbf[_0x51f355]['Password'] == '' || _0x552fbf[_0x51f355]['FirstName'] == '' || _0x552fbf[_0x51f355]['LastName'] == '') {
            console['log'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x51f355 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4751e2['useRandomProxy'] = ![])
            var _0x2ae624 = _0x21145f[_0x51f355]['split'](':');
        else
            var _0x2f9eff = Math['round'](Math['random']() * (_0x21145f['length'] - 0x1)), _0x2ae624 = _0x21145f[_0x2f9eff]['split'](':');
        const _0x5010b1 = await _0x11d919['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2ae624[0x0] + ':' + _0x2ae624[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x23ed05 = await _0x5010b1['newPage']();
            await _0x23ed05['authenticate']({
                'username': '' + _0x2ae624[0x2],
                'password': '' + _0x2ae624[0x3]
            }), await _0x23ed05['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0xc2164e() + '\x20[' + _0x375391['name'] + ']\x20Task\x20' + (_0x51f355 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x23ed05['setRequestInterception'](!![]), _0x23ed05['on']('request', _0x22f9f8 => {
                _0x22f9f8['resourceType']() === 'image' || _0x22f9f8['resourceType']() === 'font' || _0x22f9f8['resourceType']() === 'media' ? _0x22f9f8['abort']() : _0x22f9f8['continue']();
            }), await _0x23ed05['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x23ed05['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x23ed05['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4babe3(0x258), await _0x23ed05['waitForSelector']('#CustomerEmail'), console['log'](_0xc2164e() + '\x20[' + _0x375391['name'] + ']\x20Task\x20' + (_0x51f355 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x23ed05['type']('#CustomerEmail', '' + _0x552fbf[_0x51f355]['Email']), await _0x4babe3(0x12c), await _0x23ed05['type']('#CustomerPassword', '' + _0x552fbf[_0x51f355]['Password']), await _0x4babe3(0x226), await _0x23ed05['$eval']('#customer_login', _0x1f647e => _0x1f647e['submit']()), await _0x4babe3(0x7d0), await _0x23ed05['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0xc2164e() + '\x20[' + _0x375391['name'] + ']\x20Task\x20' + (_0x51f355 + 0x1) + '\x20:\x20' + _0x2c7c07['cyan']('Solving\x20Captcha')), await _0x23ed05['solveRecaptchas'](), console['log'](_0xc2164e() + '\x20[' + _0x375391['name'] + ']\x20Task\x20' + (_0x51f355 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x23ed05['$eval']('.shopify-challenge__container\x20>\x20form', _0x5df6d6 => _0x5df6d6['submit']());
            try {
                await _0x23ed05['waitForSelector']('.nav-account'), await _0x4babe3(0x4b0);
            } catch {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x375391['name'] + ']\x20Task\x20' + (_0x51f355 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x23ed05['goto']('' + _0x552fbf[_0x51f355]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4babe3(0xbb8), console['log'](_0xc2164e() + '\x20[' + _0x375391['name'] + ']\x20Task\x20' + (_0x51f355 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x23ed05['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x23ed05['click']('.product-select-variant-wrapper'), await _0x4babe3(0x320), await _0x23ed05['click']('li.product-select-variant__value[data-size=\x22' + _0x552fbf[_0x51f355]['Size'] + '\x22]'), await _0x4babe3(0x384), await _0x23ed05['$eval']('#AddToCartForm-product-template-raffle', _0x4eecbb => _0x4eecbb['submit']()), await _0x23ed05['waitForSelector']('.cart-order-summary__content'), await _0x4babe3(0x514), await _0x23ed05['goto']('https://drop.slamjam.com/checkout'), await _0x4babe3(0x514), await _0x23ed05['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0xc2164e() + '\x20[' + _0x375391['name'] + ']\x20Task\x20' + (_0x51f355 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x23ed05['select']('#checkout_shipping_address_country', '' + _0x552fbf[_0x51f355]['Country']), await _0x4babe3(0x200), await _0x23ed05['waitForSelector']('#checkout_shipping_address_first_name'), await _0x23ed05['type']('#checkout_shipping_address_first_name', '' + _0x552fbf[_0x51f355]['FirstName']), await _0x4babe3(0x237), await _0x23ed05['type']('#checkout_shipping_address_last_name', '' + _0x552fbf[_0x51f355]['LastName']), await _0x4babe3(0x1e0), await _0x23ed05['type']('#checkout_shipping_address_address1', _0x552fbf[_0x51f355]['Address1'] + '\x20' + _0x552fbf[_0x51f355]['HouseNumber']), await _0x4babe3(0x514), await _0x23ed05['type']('#checkout_shipping_address_address2', '' + _0x552fbf[_0x51f355]['Address2']), await _0x4babe3(0x514);
            _0x552fbf[_0x51f355]['Postcode'] == undefined && (_0x552fbf[_0x51f355]['Postcode'] = _0x552fbf[_0x51f355]['Zip']);
            await _0x23ed05['type']('#checkout_shipping_address_zip', '' + _0x552fbf[_0x51f355]['Postcode']), await _0x4babe3(0x2bc), await _0x23ed05['type']('#checkout_shipping_address_city', '' + _0x552fbf[_0x51f355]['City']), await _0x4babe3(0x320), await _0x23ed05['type']('#checkout_shipping_address_phone', '' + _0x552fbf[_0x51f355]['Phone']), await _0x4babe3(0x320), await _0x23ed05['click']('#continue_button'), await _0x4babe3(0xbb8), await _0x23ed05['waitForSelector']('.summary-title'), await _0x4babe3(0x320), await _0x23ed05['click']('#continue_button'), await _0x4babe3(0x320), console['log'](_0xc2164e() + '\x20[' + _0x375391['name'] + ']\x20Task\x20' + (_0x51f355 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x23ed05['waitForSelector']('#checkout_credit_card_vault'), await _0x4babe3(0x3e8);
            var _0x45bd8a = await _0x23ed05['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x275f33 = await _0x45bd8a['contentFrame']();
            await _0x275f33['click']('#number'), await _0x4babe3(0x3e8), await _0x275f33['type']('#number', '' + _0x552fbf[_0x51f355]['CardNumber'], { 'delay': 0x78 }), _0x45bd8a = await _0x23ed05['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x275f33 = await _0x45bd8a['contentFrame'](), await _0x4babe3(0x1c2), await _0x275f33['click']('#name'), await _0x4babe3(0x1f4), await _0x275f33['type']('#name', '' + _0x552fbf[_0x51f355]['NameOnCard'], { 'delay': 0x78 }), _0x45bd8a = await _0x23ed05['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x275f33 = await _0x45bd8a['contentFrame'](), await _0x4babe3(0x1c2), await _0x275f33['click']('#expiry'), await _0x4babe3(0x1f4), await _0x275f33['type']('#expiry', '' + _0x552fbf[_0x51f355]['ExpiryDate'], { 'delay': 0x78 }), _0x45bd8a = await _0x23ed05['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x275f33 = await _0x45bd8a['contentFrame'](), await _0x4babe3(0x1c2), await _0x275f33['click']('#verification_value'), await _0x4babe3(0x1f4), await _0x275f33['type']('#verification_value', '' + _0x552fbf[_0x51f355]['CVV'], { 'delay': 0x78 }), await _0x23ed05['$eval']('#accepts-flag-raffle', _0x49fcfb => _0x49fcfb['click']()), await _0x4babe3(0x7d0), console['log'](_0xc2164e() + '\x20[' + _0x375391['name'] + ']\x20Task\x20' + (_0x51f355 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x23ed05['$eval']('#continue_button', _0x2d3955 => _0x2d3955['click']()), await _0x4babe3(0x1b58), await _0x23ed05['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x23ed05['$eval']('.edit_checkout.animate-floating-labels', _0x100081 => _0x100081['submit']()), await _0x4babe3(0x7d0);
            try {
                await _0x23ed05['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), console['log'](_0x2c7c07['green'](_0xc2164e() + '\x20[' + _0x375391['name'] + ']\x20Task\x20' + (_0x51f355 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x265130) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x265130['message']);
            }
            var _0x14a636 = await _0x514389(_0x552fbf[_0x51f355], _0x375391, 'dev', ![]), _0x3a23e4 = await _0x514389(_0x552fbf[_0x51f355], _0x375391, 'pub', ![]);
            const _0x46a34e = {
                'succesDEVMSG': { 'embeds': [_0x14a636] },
                'succesPUBMSG': { 'embeds': [_0x3a23e4] }
            };
            try {
                _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], _0x46a34e['succesDEVMSG']), await _0x4babe3(0xc8), await _0x246459(_0xfcf874, _0x46a34e['succesDEVMSG']), await _0x4babe3(0xc8), await _0x246459(_0x43f811, _0x46a34e['succesPUBMSG']);
            } catch (_0x590cde) {
                console['log'](_0x2c7c07['yellow'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x51f355 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x590cde));
            }
        } catch (_0x494ddb) {
            console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x51f355 + 0x1) + '\x20:\x20' + _0x494ddb)), _0x3a6f08 = '' + _0x494ddb;
            var _0x1cb044 = await _0x514389(kickz[_0x51f355], _0x375391, 'dev', !![], _0x3a6f08);
            EMBEDS['errorDEV'] = { 'embeds': [_0x1cb044] }, _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], EMBEDS['errorDEV']), await _0x246459(_0x5a1b60, EMBEDS['errorDEV']), _0x2a8825 = 'yes';
        } finally {
            _0x5010b1 && _0x5010b1['close']();
            if (_0x2a8825 == 'yes' && _0x4a6145 != 0x5) {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x375391['name'] + ']\x20Task\x20' + (_0x51f355 + 0x1) + '\x20:\x20Retrying')), _0x51f355 = _0x51f355 - 0x1, _0x4a6145 = _0x4a6145 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x4751e2['delay'] + '\x20ms'), await _0x4babe3(_0x4751e2['delay']);
        }
    }
}
async function _0x34890d(_0x32bae5, _0x1114bd, _0x200f4f) {
    var _0x294743 = ![], _0x1370f6 = ![];
    if (_0x4751e2['captchaKey'] == '' || _0x4751e2['captchaKey'] == undefined)
        return console['log'](_0x2c7c07['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x11d919['use'](_0x585d0c()), _0x11d919['use'](_0x34cf32({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4751e2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x177f21 = 0x0; _0x177f21 < _0x1114bd['length']; _0x177f21++) {
        var _0x48527b, _0x1815f5 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x1114bd[_0x177f21]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1114bd[_0x177f21]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x217831
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4751e2['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x57831b
                }
            ]
        }];
        const _0x37e3ce = { 'embeds': _0x1815f5 };
        _0x356443(_0x32bae5['name'] + '\x20Task\x20' + (_0x177f21 + 0x1) + '\x20/\x20' + _0x1114bd['length'] + '\x20||\x20File:\x20' + _0x3dd657 + '\x20Proxies:\x20' + _0x350e1c), await _0x34ce09(_0x1114bd, _0x177f21);
        var _0x504eb = await _0x514389(_0x1114bd[_0x177f21], _0x32bae5, 'dev', ![]), _0x20bfa7 = await _0x514389(_0x1114bd[_0x177f21], _0x32bae5, 'pub', ![]);
        const _0x32f5b9 = {
            'succesDEVMSG': { 'embeds': [_0x504eb] },
            'succesPUBMSG': { 'embeds': [_0x20bfa7] }
        };
        if (_0x1114bd[_0x177f21]['Email'] == '' || _0x1114bd[_0x177f21]['Url'] == '' || _0x1114bd[_0x177f21]['FirstName'] == '' || _0x1114bd[_0x177f21]['LastName'] == '') {
            console['log'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x177f21 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4751e2['useRandomProxy'] = ![])
            var _0x21573b = _0x200f4f[_0x177f21]['split'](':');
        else
            var _0x10bf31 = Math['round'](Math['random']() * (_0x200f4f['length'] - 0x1)), _0x21573b = _0x200f4f[_0x10bf31]['split'](':');
        const _0x3be81b = await _0x11d919['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x21573b[0x0] + ':' + _0x21573b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5ecd5f = await _0x3be81b['newPage']();
            await _0x5ecd5f['authenticate']({
                'username': '' + _0x21573b[0x2],
                'password': '' + _0x21573b[0x3]
            }), console['log'](_0xc2164e() + '\x20[' + _0x32bae5['name'] + ']\x20Task\x20' + (_0x177f21 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5ecd5f['setRequestInterception'](!![]), _0x5ecd5f['on']('request', _0x29fa4d => {
                _0x29fa4d['resourceType']() === 'image' || _0x29fa4d['resourceType']() === 'font' || _0x29fa4d['resourceType']() === 'media' ? _0x29fa4d['abort']() : _0x29fa4d['continue']();
            }), await _0x5ecd5f['goto']('' + _0x1114bd[_0x177f21]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x5ecd5f['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0xc2164e() + '\x20[' + _0x32bae5['name'] + ']\x20Task\x20' + (_0x177f21 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5ecd5f['type']('#comp_firstname', '' + _0x1114bd[_0x177f21]['FirstName']), await _0x5ecd5f['waitForSelector']('#comp_lastname'), await _0x5ecd5f['type']('#comp_lastname', '' + _0x1114bd[_0x177f21]['LastName']), await _0x5ecd5f['waitForSelector']('#comp_email'), await _0x5ecd5f['type']('#comp_email', '' + _0x1114bd[_0x177f21]['Email']), await _0x5ecd5f['waitForSelector']('#comp_paypalemail'), await _0x5ecd5f['type']('#comp_paypalemail', '' + _0x1114bd[_0x177f21]['Email']), await _0x5ecd5f['waitForSelector']('#comp_mobile_end'), await _0x5ecd5f['type']('#comp_mobile_end', '' + _0x1114bd[_0x177f21]['Phone']), await _0x5ecd5f['waitForSelector']('#comp_dob'), await _0x5ecd5f['type']('#comp_dob', '08/09/1992'), console['log'](_0xc2164e() + '\x20[' + _0x32bae5['name'] + ']\x20Task\x20' + (_0x177f21 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x1114bd[_0x177f21]['Size'] == 'RANDOM') {
                const _0x423056 = await _0x5ecd5f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5b1941 => {
                    return _0x5b1941['map'](_0x6c0568 => _0x6c0568['value']);
                });
                var _0x212716 = Math['round'](Math['random']() * (_0x423056['length'] - 0x2));
                await _0x5ecd5f['select']('#shoesize', _0x423056[_0x212716 + 0x1]), await _0x4babe3(0x3e8);
            } else {
                const _0x34841e = await _0x5ecd5f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x598e0c => {
                    return _0x598e0c['map'](_0x3d1b21 => _0x3d1b21['innerText']);
                }), _0x27c505 = await _0x5ecd5f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xafc153 => {
                    return _0xafc153['map'](_0xc6a001 => _0xc6a001['value']);
                });
                var _0x1a9090 = _0x1114bd[_0x177f21]['Size'];
                for (var _0x261757 = 0x1; _0x261757 < _0x27c505['length']; _0x261757++) {
                    var _0x3205c6 = _0x34841e[_0x261757]['split']('\x20')[0x0];
                    if (_0x3205c6 == _0x1a9090) {
                        await _0x5ecd5f['select']('#shoesize', _0x27c505[_0x261757]);
                        break;
                    } else {
                        if (_0x261757 + 0x1 == _0x27c505['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x5ecd5f['waitForSelector']('#comp_address1'), await _0x5ecd5f['type']('#comp_address1', _0x1114bd[_0x177f21]['Address1'] + '\x20' + _0x1114bd[_0x177f21]['HouseNumber']), await _0x5ecd5f['waitForSelector']('#comp_address2'), await _0x5ecd5f['type']('#comp_address2', '' + _0x1114bd[_0x177f21]['Address2']), await _0x5ecd5f['waitForSelector']('#comp_address2'), await _0x5ecd5f['type']('#comp_address3', '' + _0x1114bd[_0x177f21]['City']), await _0x5ecd5f['waitForSelector']('#comp_postcode'), await _0x5ecd5f['type']('#comp_postcode', '' + _0x1114bd[_0x177f21]['Zip']), console['log'](_0xc2164e() + '\x20[' + _0x32bae5['name'] + ']\x20Task\x20' + (_0x177f21 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4babe3(0x4b0), await _0x5ecd5f['click']('label#emailhold'), await _0x4babe3(0x5dc), await _0x5ecd5f['click']('#preauth_tandc_email\x20>\x20label'), await _0x4babe3(0x5dc), await _0x5ecd5f['click']('#submit'), await _0x5ecd5f['waitForSelector']('#paymentWrap'), console['log'](_0xc2164e() + '\x20[' + _0x32bae5['name'] + ']\x20Task\x20' + (_0x177f21 + 0x1) + '\x20:\x20' + _0x2c7c07['blue']('Awaiting\x20Paypal\x20Payment')), _0x3be81b['on']('targetcreated', async _0x1b3941 => {
                if (_0x1b3941['type']() === 'page') {
                    const _0x3dc28b = await _0x1b3941['page']();
                    async function _0x33b940() {
                        try {
                            await _0x5ecd5f['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x1370f6 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x6bc892() {
                        try {
                            await _0x5ecd5f['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x294743 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x6bc892(), _0x33b940(), await _0x4babe3(0x493e0);
                }
            });
            async function _0x3e9c36() {
                for (let _0x4d77df = 0x0; _0x4d77df < 0x12c; _0x4d77df++) {
                    if (_0x294743 == !![]) {
                        console['log'](_0x2c7c07['green'](_0xc2164e() + '\x20[' + _0x32bae5['name'] + ']\x20Task\x20' + (_0x177f21 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '')
                            try {
                                await _0x246459(_0x4751e2['webhook'], _0x32f5b9['succesDEVMSG']);
                            } catch {
                            }
                        await _0x4babe3(0xc8), await _0x246459(_0xfcf874, _0x32f5b9['succesDEVMSG']), await _0x4babe3(0xc8);
                        try {
                            await _0x246459(_0x43f811, _0x32f5b9['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x1370f6)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x4babe3(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x4babe3(0xbb8), await _0x5ecd5f['click']('.zoid-outlet'), await _0x4babe3(0x7d0), await _0x3e9c36();
        } catch (_0xc646a2) {
            console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x32bae5['name'] + ']\x20Task\x20' + (_0x177f21 + 0x1) + '\x20:\x20' + _0xc646a2)), _0x48527b = '' + _0xc646a2;
            var _0x2e1456 = await _0x514389(_0x1114bd[_0x177f21], _0x32bae5, 'dev', !![], _0x48527b);
            _0x32f5b9['errorDEV'] = { 'embeds': [_0x2e1456] }, _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], _0x32f5b9['errorDEV']), await _0x246459(_0x5a1b60, _0x32f5b9['errorDEV']);
        } finally {
            _0x3be81b && _0x3be81b['close'](), console['log']('Waiting\x20for\x20' + _0x4751e2['delay'] + '\x20ms'), await _0x4babe3(_0x4751e2['delay']);
        }
    }
}
async function _0x4d3415(_0xdbadb6, _0x35f204, _0xa0dc63) {
    _0x11d919['use'](_0x585d0c()), _0x11d919['use'](_0x34cf32({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4751e2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x27d680 = 0x0; _0x27d680 < _0x35f204['length']; _0x27d680++) {
        _0x356443(_0xdbadb6['name'] + '\x20Task\x20' + (_0x27d680 + 0x1) + '\x20/\x20' + _0x35f204['length'] + '\x20||\x20File:\x20' + _0x3dd657 + '\x20Proxies:\x20' + _0x350e1c);
        var _0x196d66 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x217831
                },
                {
                    'name': 'Product',
                    'value': '' + _0x35f204[_0x27d680]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x35f204[_0x27d680]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4751e2['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4751e2['version']
                }
            ]
        }];
        const _0xaeca06 = { 'embeds': _0x196d66 };
        await _0x34ce09(_0x35f204, _0x27d680);
        if (_0x35f204[_0x27d680]['Email'] == '' || _0x35f204[_0x27d680]['Password'] == '' || _0x35f204[_0x27d680]['FirstName'] == '' || _0x35f204[_0x27d680]['LastName'] == '') {
            console['log'](_0xc2164e() + '\x20[' + _0xdbadb6['name'] + ']\x20Task\x20' + (_0x27d680 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x35f204[_0x27d680]['Password'] == '' || _0x35f204[_0x27d680]['Password'] == undefined) && (_0x35f204[_0x27d680]['Password'] = 'ErehsaWonRaj1!');
        if (_0x4751e2['useRandomProxy'] = ![])
            var _0x3b81e1 = _0xa0dc63[_0x27d680]['split'](':');
        else
            var _0x445d91 = Math['round'](Math['random']() * (_0xa0dc63['length'] - 0x1)), _0x3b81e1 = _0xa0dc63[_0x445d91]['split'](':');
        const _0x411840 = await _0x11d919['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3b81e1[0x0] + ':' + _0x3b81e1[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x100bbc = await _0x411840['newPage']();
            await _0x100bbc['authenticate']({
                'username': '' + _0x3b81e1[0x2],
                'password': '' + _0x3b81e1[0x3]
            }), console['log'](_0xc2164e() + '\x20[' + _0xdbadb6['name'] + ']\x20Task\x20' + (_0x27d680 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x100bbc['setRequestInterception'](!![]), _0x100bbc['on']('request', _0x2a3abb => {
                _0x2a3abb['resourceType']() === 'image' || _0x2a3abb['resourceType']() === 'font' || _0x2a3abb['resourceType']() === 'media' ? _0x2a3abb['abort']() : _0x2a3abb['continue']();
            }), await _0x100bbc['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x100bbc['goto']('' + _0x35f204[_0x27d680]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x100bbc['waitForSelector']('#btnPdpAtb'), console['log'](_0xc2164e() + '\x20[' + _0xdbadb6['name'] + ']\x20Task\x20' + (_0x27d680 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x35f204[_0x27d680]['Size']);
            const _0x5a4ce2 = await _0x100bbc['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x2b323d => {
                return _0x2b323d['map'](_0x5ad0d6 => _0x5ad0d6['innerText']);
            }), _0x156e3d = await _0x100bbc['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x37e9c4 = ![];
            if (_0x35f204[_0x27d680]['Size'] == 'RANDOM') {
                var _0x386d22 = Math['round'](Math['random']() * (_0x156e3d['length'] - 0x1));
                await _0x156e3d[_0x386d22]['click']();
            } else
                for (var _0x1d97de = 0x0; _0x1d97de < _0x5a4ce2['length']; _0x1d97de++) {
                    if (_0x5a4ce2[_0x1d97de] != _0x35f204[_0x27d680]['Size'])
                        continue;
                    try {
                        await _0x156e3d[_0x1d97de]['click']();
                    } catch {
                        console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0xdbadb6['name'] + ']\x20Task\x20' + (_0x27d680 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x37e9c4 = !![];
                    }
                }
            if (_0x37e9c4)
                continue;
            await _0x4babe3(0x578), await _0x100bbc['click']('#btnPdpAtb'), await _0x100bbc['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x4babe3(0x3e8), console['log'](_0xc2164e() + '\x20[' + _0xdbadb6['name'] + ']\x20Task\x20' + (_0x27d680 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x100bbc['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x100bbc['waitForSelector']('#email'), await _0x100bbc['type']('#email', _0x35f204[_0x27d680]['Email']), await _0x4babe3(0x226), await _0x100bbc['click']('#guest-submit'), await _0x4babe3(0x1b58), console['log'](_0xc2164e() + '\x20[' + _0xdbadb6['name'] + ']\x20Task\x20' + (_0x27d680 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x100bbc['waitForSelector']('#firstname'), await _0x100bbc['type']('#firstname', _0x35f204[_0x27d680]['FirstName'], 0x1f4), await _0x4babe3(0x190), await _0x100bbc['waitForSelector']('#surname'), await _0x100bbc['type']('#surname', _0x35f204[_0x27d680]['LastName'], 0x1f4), await _0x4babe3(0x190), await _0x100bbc['waitForSelector']('#mobile'), await _0x100bbc['type']('#mobile', _0x35f204[_0x27d680]['Phone'], 0x1f4), await _0x4babe3(0x190), await _0x100bbc['click']('#enterManualDiv'), await _0x4babe3(0x5dc), await _0x100bbc['waitForSelector']('#address1'), await _0x100bbc['type']('#address1', _0x35f204[_0x27d680]['Address1'] + '\x20' + _0x35f204[_0x27d680]['HouseNumber'], 0x226), await _0x4babe3(0x384), await _0x100bbc['waitForSelector']('#address2'), await _0x100bbc['type']('#address2', '' + _0x35f204[_0x27d680]['Address2'], 0x226), await _0x4babe3(0x320);
            const _0x46d188 = await _0x100bbc['$$eval']('#countryselect_view3\x20>\x20option', _0x271593 => {
                return _0x271593['map'](_0x4797b1 => _0x4797b1['value']);
            });
            var _0x29dcc9;
            for (var _0x41835f = 0x0; _0x41835f < _0x46d188['length']; _0x41835f++) {
                if (_0x46d188[_0x41835f]['startsWith']('' + _0x35f204[_0x27d680]['Country'])) {
                    _0x29dcc9 = _0x46d188[_0x41835f];
                    break;
                }
                continue;
            }
            await _0x100bbc['select']('#countryselect_view3', '' + _0x29dcc9), await _0x100bbc['waitForSelector']('#address4'), await _0x100bbc['type']('#address4', '' + _0x35f204[_0x27d680]['City'], 0x1f4), await _0x4babe3(0x384), await _0x100bbc['waitForSelector']('#postcode'), await _0x100bbc['type']('#postcode', '' + _0x35f204[_0x27d680]['Zip'], 0x1f4), await _0x4babe3(0x4b0);
            const _0x3bf2a9 = await _0x100bbc['url']();
            console['log'](_0xc2164e() + '\x20[' + _0xdbadb6['name'] + ']\x20Task\x20' + (_0x27d680 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x358fbd = _0x3bf2a9['split']('?')[0x1], _0x47ba78 = await _0x100bbc['$']('#co_address_submit');
            await _0x47ba78['evaluate'](_0xe4048f => _0xe4048f['click']()), await _0x4babe3(0x1388), await _0x100bbc['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x358fbd), console['log'](_0xc2164e() + '\x20[' + _0xdbadb6['name'] + ']\x20Task\x20' + (_0x27d680 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x100bbc['waitForSelector']('#paymentbuttons'), await _0x4babe3(0x1388), await _0x100bbc['click']('#paymentbuttons\x20>\x20div'), await _0x4babe3(0x1c2), await _0x100bbc['waitForSelector']('#card-number'), await _0x100bbc['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x94df0e = await _0x100bbc['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x417939 = await _0x94df0e['contentFrame']();
            await _0x417939['waitForSelector']('.InputContainer'), await _0x417939['click']('.InputContainer\x20>\x20input'), await _0x4babe3(0x578), await _0x100bbc['type']('#card-number', '' + _0x35f204[_0x27d680]['CreditNumber']), await _0x4babe3(0xfa), await _0x100bbc['type']('#card-expiry', '' + _0x35f204[_0x27d680]['ExpiryDate']), await _0x4babe3(0xfa), await _0x100bbc['type']('#card-cvc', '' + _0x35f204[_0x27d680]['CVV']), await _0x4babe3(0x7d0), await _0x100bbc['click']('#card-button'), console['log'](_0xc2164e() + '\x20[' + _0xdbadb6['name'] + ']\x20Task\x20' + (_0x27d680 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x100bbc['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x2c7c07['green'](_0xc2164e() + '\x20[' + _0xdbadb6['name'] + ']\x20Task\x20' + (_0x27d680 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x246459(_0xfcf874, _0xaeca06);
            } catch {
                console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0xdbadb6['name'] + ']\x20Task\x20' + (_0x27d680 + 0x1) + '\x20:\x203DS\x20Failed')), _0x196d66[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x196d66[0x0]['description'] = '3DS\x20Failed', await _0x246459(_0x5a1b60, _0xaeca06);
            }
        } catch (_0xfca83e) {
            console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0xdbadb6['name'] + ']\x20Task\x20' + (_0x27d680 + 0x1) + '\x20:\x20' + _0xfca83e)), _0x196d66[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x196d66[0x0]['description'] = '' + _0xfca83e, await _0x246459(_0x5a1b60, _0xaeca06);
        } finally {
            _0x411840 && _0x411840['close']();
            if (_0x27d680 + 0x1 == _0x35f204['length']) {
                console['log'](_0x2c7c07['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x4babe3(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x4751e2['AfewDelay'] + '\x20ms'), await _0x4babe3(_0x4751e2['AfewDelay']);
        }
    }
}
async function _0x257702(_0x2c436a, _0x390c4b, _0x412b8c, _0xfe0206, _0x1139e6) {
    var _0x3136c6, _0x27ed22 = {}, _0x56d24c = [], _0x333f6e = {}, _0x4fc5da = [
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
    !_0xfe0206 && (_0xfe0206 = {});
    if (_0x390c4b != 'ver') {
        _0x356443(_0x412b8c['name'] + '\x20Task\x20' + (_0x2c436a + 0x1) + '\x20/\x20' + _0xfe0206['length'] + '\x20||\x20File:\x20' + _0x3dd657 + '\x20Proxies:\x20' + _0x350e1c), await _0x34ce09(_0xfe0206, _0x2c436a), _0x56d24c = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x217831
                },
                {
                    'name': 'Size',
                    'value': '' + _0xfe0206[_0x2c436a]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4751e2['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x57831b
                }
            ]
        }], _0x333f6e = { 'embeds': _0x56d24c }, _0x27ed22 = _0x412b8c['data'];
        _0x390c4b == 'exp' ? _0x27ed22['data']['attributes']['email'] = '' + _0xfe0206[_0x2c436a]['FirstName'] + _0xfe0206[_0x2c436a]['LastName'] + _0x4751e2['catchall'] : _0x27ed22['data']['attributes']['email'] = '' + _0xfe0206[_0x2c436a]['Email'];
        if (_0xfe0206[_0x2c436a]['Size'] == 'RANDOM') {
        }
        _0x27ed22['data']['attributes']['properties']['$first_name'] = '' + _0xfe0206[_0x2c436a]['FirstName'], _0x27ed22['data']['attributes']['properties']['$last_name'] = '' + _0xfe0206[_0x2c436a]['LastName'], _0x27ed22['data']['attributes']['properties']['$address1'] = _0xfe0206[_0x2c436a]['Address1'] + '\x20' + _0xfe0206[_0x2c436a]['Address2'] + '\x20' + _0xfe0206[_0x2c436a]['HouseNumber'], _0x27ed22['data']['attributes']['properties']['$zip'] = '' + _0xfe0206[_0x2c436a]['Zip'], _0x27ed22['data']['attributes']['properties']['$city'] = '' + _0xfe0206[_0x2c436a]['City'], _0x27ed22['data']['attributes']['properties']['$country'] = '' + _0xfe0206[_0x2c436a]['Country'], _0x27ed22['data']['attributes']['properties']['Size'] = '' + _0xfe0206[_0x2c436a]['Size'], _0x27ed22['data']['attributes']['properties']['$phone_number'] = '' + _0xfe0206[_0x2c436a]['Phone'], _0x27ed22['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0xfe0206[_0x2c436a]['Follower'];
    }
    if (_0x4751e2['useRandomProxy'] = ![])
        var _0x387b21 = _0x1139e6[_0x2c436a]['split'](':');
    else
        var _0x21c769 = Math['round'](Math['random']() * (_0x1139e6['length'] - 0x1)), _0x387b21 = _0x1139e6[_0x21c769]['split'](':');
    var _0x2089cc = {
        'jar': _0x5c26db,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x412b8c['url'],
        'headers': _0x412b8c['headers'],
        'body': JSON['stringify'](_0x27ed22),
        'proxy': 'http://' + _0x387b21[0x2] + ':' + _0x387b21[0x3] + '@' + _0x387b21[0x0] + ':' + _0x387b21[0x1]
    };
    return _0x390c4b != 'ver' && (_0x2089cc['url'] = _0x412b8c['url'], _0x2089cc['headers'] = _0x412b8c['headers']), _0x390c4b == 'ver' && (_0x2089cc['method'] = 'GET'), new Promise(function (_0x277713, _0x136dbe) {
        callback = async (_0x2e3a99, _0x2c865a, _0x4f8f21) => {
            if (!_0x2e3a99 && _0x2c865a['statusCode'] == 0xca || !_0x2e3a99 && _0x2c865a['statusCode'] == 0xc8) {
                if (_0x390c4b != 'ver') {
                    var _0x4f40f5 = await _0x514389(_0xfe0206[_0x2c436a], _0x412b8c, 'dev', ![]), _0x3ca79a = await _0x514389(_0xfe0206[_0x2c436a], _0x412b8c, 'pub', ![]);
                    const _0x55f146 = {
                        'succesDEVMSG': { 'embeds': [_0x4f40f5] },
                        'succesPUBMSG': { 'embeds': [_0x3ca79a] }
                    };
                    if (_0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '')
                        try {
                            await _0x246459(_0x4751e2['webhook'], _0x55f146['succesDEVMSG']);
                        } catch {
                        }
                    await _0x4babe3(0xc8), await _0x246459(_0xfcf874, _0x55f146['succesDEVMSG']), await _0x4babe3(0xc8);
                    try {
                        await _0x246459(_0x43f811, _0x55f146['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x277713(console['log'](_0x2c7c07['green'](_0xc2164e() + '\x20[' + _0x412b8c['name'] + ']\x20Task\x20' + (_0x2c436a + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x390c4b != 'ver') {
                    var _0x1e3847 = '' + _0x2e3a99, _0x43203e = await _0x514389(_0xfe0206[_0x2c436a], _0x412b8c, 'dev', !![], _0x1e3847), _0x247a9e = {};
                    _0x247a9e['errorDEV'] = { 'embeds': [_0x43203e] }, _0x4751e2['webhook'] != undefined && _0x4751e2['webhook'] != '' && await _0x246459(_0x4751e2['webhook'], _0x247a9e['errorDEV']), await _0x246459(_0x5a1b60, _0x247a9e['errorDEV']);
                }
                _0x136dbe(console['log'](_0xc2164e() + '\x20[' + _0x412b8c['name'] + ']\x20Task\x20' + (_0x2c436a + 0x1) + ':\x20' + _0x2e3a99));
            }
        };
        try {
            _0x390c4b != 'ver' && console['log'](_0xc2164e() + '\x20[' + _0x412b8c['name'] + ']\x20Task\x20' + (_0x2c436a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x27ed22['data']['attributes']['email']), _0x4ef6f3(_0x2089cc, callback);
        } catch (_0x4c67dd) {
            console['log'](_0xc2164e() + '\x20Task\x20' + (_0x2c436a + 0x1) + ':\x20' + _0x4c67dd);
        }
    });
}
;
async function _0x380476(_0x3092ad, _0x31ad6b, _0x14ccbe) {
    _0x356443('' + _0x31ad6b), _0x11d919['use'](_0x585d0c());
    const _0x51c34f = await _0x11d919['launch']({
        'headless': ![],
        'args': [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security'
        ]
    });
    try {
        console['log'](_0xc2164e() + '\x20[' + _0x31ad6b + ']\x20Getting\x20Session');
        const _0x55b786 = await _0x51c34f['newPage']();
        await _0x55b786['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x55b786['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0xc2164e() + '\x20[' + _0x31ad6b + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x55b786['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0xc2164e() + '\x20[' + _0x31ad6b + ']\x20Successfully\x20logged\x20in'), await _0x4babe3(0x2710);
        } catch {
            throw new Error('Login\x20session\x20expired');
        }
        for (var _0x52714b = 0x0; _0x52714b < _0x3092ad['length']; _0x52714b++) {
            console['log'](_0xc2164e() + '\x20[' + _0x31ad6b + ']\x20Task\x20' + (_0x52714b + 0x1) + '\x20:\x20Starting\x20Verification'), _0x356443(_0x31ad6b + '\x20Task\x20' + (_0x52714b + 0x1) + '\x20/\x20' + _0x3092ad['length']), await _0x55b786['goto']('' + _0x3092ad[_0x52714b], { 'waitUntil': 'networkidle2' }), await _0x4babe3(0xbb8);
            try {
                const _0x1f24d0 = await _0x55b786['$']('#challenge-heading');
                _0x1f24d0 && console['log'](_0xc2164e() + '\x20[' + _0x31ad6b + ']\x20Task\x20' + (_0x52714b + 0x1) + '\x20:\x20' + _0x2c7c07['yellow']('2FA\x20Required'));
                console['log']('after\x20network'), await _0x55b786['waitForSelector']('#payment-submit-btn', { 'timeout': 0x493e0 }), console['log']('after\x20waitfor'), await _0x4babe3(0x5dc), await _0x55b786['$eval']('#payment-submit-btn', _0x3df8d8 => _0x3df8d8['click']()), await _0x55b786['click']('#payment-submit-btn');
                try {
                    await _0x55b786['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x4babe3(0x5dc), console['log'](_0x2c7c07['green'](_0xc2164e() + '\x20[' + _0x31ad6b + ']\x20Task\x20' + (_0x52714b + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x3c8fd5) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x3c8fd5['message']);
                }
            } catch {
            }
            await _0x4babe3(0xf4240);
        }
    } catch (_0x1d6903) {
        console['log'](_0x2c7c07['red']('' + _0x1d6903));
    } finally {
        await _0x51c34f['close']();
    }
}
async function _0xdf9d3c() {
    await _0x52da34(), console['clear']();
    if (_0x57831b != 'devkey') {
        let _0x29bcf9 = await _0x3576c0['autoUpdate']();
        if (_0x29bcf9 === 'yes')
            return _0x52783a('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x15185b == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x4babe3(0x2710);
        ;
    }
    await _0x227959(_0x15185b);
    if (_0x330184 === ![])
        return console['log']('Closing\x20Browser'), await _0x4babe3(0xbb8);
    else
        try {
            var _0x42d1e3 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x217831
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x57831b
                    }
                ]
            }];
            const _0x172295 = { 'embeds': _0x42d1e3 };
            var _0x4e7068 = await _0x514389(null, null, 'open', ![]);
            const _0x53f9f6 = { 'openDEVMSG': { 'embeds': [_0x4e7068] } };
            await _0x246459(_0x1321d2, _0x53f9f6['openDEVMSG']);
            async function _0x9f9982() {
                _0x356443('JRaffles\x20' + _0x57831b), console['clear'](), console['log']('Welcome\x20to\x20' + _0x2c7c07['cyan']('JRaffles();') + '\x20' + _0x57831b), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x496191 = 0x0; _0x496191 < _0x4653ae['length'] - 0x2; _0x496191++) {
                    if (_0x4653ae[_0x496191]['name'] === 'Reload\x20Settings' || _0x4653ae[_0x496191]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x496191 + ')\x20[' + _0x4653ae[_0x496191]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x4653ae['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x4653ae['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x3c1c9a();
                if (taskModule > _0x4653ae['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x4babe3(0x3e8), _0x9f9982();
                if (_0x4653ae[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x431b49(_0x4653ae[taskModule]['modules']);
                    var _0x42a0eb = _0x4653ae[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5362d9 = await _0x102b88(), _0x57a776 = await _0x3c38f6();
                    if (_0x57a776[0x0]['Url'] == '' || _0x57a776[0x0]['Url'] == undefined) {
                        await _0xb1d14(_0x5362d9);
                        var _0x3e6149 = await _0x448fbd();
                        return await afewFunction('' + _0x27944f[_0x3e6149], 'nor', _0x42a0eb, _0x57a776, _0x5362d9), _0x9f9982();
                    }
                    return await afewFunction(_0x57a776[0x0]['Url'], 'nor', _0x42a0eb, _0x57a776, _0x5362d9), _0x9f9982();
                } else {
                    if (_0x4653ae[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x431b49(_0x4653ae[taskModule]['modules']);
                        var _0x42a0eb = _0x4653ae[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x5362d9 = await _0x102b88(), _0x247945 = await _0x3c38f6();
                            console['log']('Starting\x20' + _0x247945['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x29cedf = 0x0; _0x29cedf < _0x247945['length']; _0x29cedf++) {
                                console['log'](_0xc2164e() + '\x20[' + _0x42a0eb['name'] + ']\x20Task\x20' + (_0x29cedf + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x23e405(_0x29cedf, 'nor', _0x42a0eb, _0x247945, _0x5362d9), console['log'](_0xc2164e() + '\x20[' + _0x42a0eb['name'] + ']\x20Sleeping\x20for\x20' + _0x4751e2['MahaDelay'] + '\x20ms'), await _0x4babe3(_0x4751e2['MahaDelay']);
                                } catch (_0x45a922) {
                                    console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x42a0eb['name'] + ']\x20Task\x20' + (_0x29cedf + 0x1) + ':\x20Error\x20' + _0x45a922));
                                }
                            }
                            ;
                            return _0x9f9982();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x5362d9 = await _0x102b88();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x152d0b(), _0x457af9 = linksRaw['split'](';'), console['log'](_0x457af9['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x29cedf = 0x0; _0x29cedf < _0x457af9['length']; _0x29cedf++) {
                                    _0x42a0eb['url'] = _0x457af9[_0x29cedf], console['log'](_0xc2164e() + '\x20[' + _0x42a0eb['name'] + ']\x20Task\x20' + (_0x29cedf + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x23e405(_0x29cedf, 'ver', _0x42a0eb, _0x247945, _0x5362d9), console['log'](_0xc2164e() + '\x20[' + _0x42a0eb['name'] + ']\x20Sleeping\x20for\x20' + _0x4751e2['verificationDelay'] + '\x20ms'), await _0x4babe3(_0x4751e2['verificationDelay']);
                                    } catch (_0x2c2ba2) {
                                        console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x42a0eb['name'] + ']\x20Task\x20' + (_0x29cedf + 0x1) + ':\x20Error\x20' + _0x2c2ba2));
                                    }
                                }
                                ;
                                return _0x9f9982();
                            }
                        }
                    } else {
                        if (_0x4653ae[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x431b49(_0x4653ae[taskModule]['modules']);
                            var _0x42a0eb = _0x4653ae[taskModule]['modules'][taskFunction], _0x5362d9 = await _0x102b88(), _0x41574a = await _0x3c38f6();
                            return await _0x22c938(_0x41574a, _0x5362d9, _0x42a0eb), await _0x4babe3(0x1388), _0x9f9982();
                        } else {
                            if (_0x4653ae[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x431b49(_0x4653ae[taskModule]['modules']);
                                var _0x42a0eb = _0x4653ae[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x5362d9 = await _0x102b88(), _0x47bfce = await _0x3c38f6();
                                    console['log']('Starting\x20' + _0x2c7c07['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x29cedf = 0x0; _0x29cedf < _0x47bfce['length']; _0x29cedf++) {
                                        console['log'](_0xc2164e() + '\x20[' + _0x42a0eb['name'] + ']\x20Task\x20' + (_0x29cedf + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x257702(_0x29cedf, 'nor', _0x42a0eb, _0x47bfce, _0x5362d9);
                                        } catch (_0x3a89dc) {
                                            console['log'](_0x2c7c07['red'](_0xc2164e() + '\x20[' + _0x42a0eb['name'] + ']\x20Task\x20' + (_0x29cedf + 0x1) + ':\x20Task\x20failed\x20' + _0x3a89dc));
                                        }
                                        console['log'](_0xc2164e() + '\x20[' + _0x42a0eb['name'] + ']\x20Sleeping\x20for\x20' + _0x4751e2['delay'] + '\x20ms'), await _0x4babe3(_0x4751e2['delay']);
                                    }
                                    return _0x9f9982();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x5362d9 = await _0x102b88();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x152d0b(), _0x457af9 = linksRaw['split'](';'), console['log'](_0x457af9['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x29cedf = 0x0; _0x29cedf < _0x457af9['length']; _0x29cedf++) {
                                            try {
                                                _0x42a0eb['url'] = _0x457af9[_0x29cedf], console['log'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Task\x20' + (_0x29cedf + 0x1) + ':\x20Getting\x20Session'), await _0x257702(_0x29cedf, 'ver', _0x42a0eb, null, _0x5362d9), console['log'](_0xc2164e() + '\x20[' + _0x4653ae[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x4751e2['verificationDelay'] + '\x20ms'), await _0x4babe3(_0x4751e2['verificationDelay']);
                                            } catch (_0x5bf496) {
                                                console['log'](_0x5bf496), await _0x4babe3(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x9f9982();
                                    }
                                }
                                ;
                            } else {
                                if (_0x4653ae[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x431b49(_0x4653ae[taskModule]['modules']);
                                    var _0x42a0eb = _0x4653ae[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x2fa8cf('https://bouncewear.com/nl/account/register', _0x42a0eb);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x4653ae[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x431b49(_0x4653ae[taskModule]['modules']);
                                        var _0x42a0eb = _0x4653ae[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x5362d9 = await _0x102b88(), _0x41db1e = await _0x3c38f6();
                                            return await _0x1865eb('https://patta.nl/account/register', _0x42a0eb, _0x41db1e, _0x5362d9), _0x9f9982();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x5362d9 = await _0x102b88(), _0x41db1e = await _0x3c38f6();
                                                return await _0x27519d('', _0x42a0eb, _0x41db1e, _0x5362d9), _0x9f9982();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x4653ae[taskModule]['name'] == 'SLAMJAM') {
                                            taskFunction = await _0x431b49(_0x4653ae[taskModule]['modules']);
                                            var _0x42a0eb = _0x4653ae[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x5362d9 = await _0x102b88(), _0x3b1ad4 = await _0x3c38f6();
                                                return await _0x4078e5('https://slamjam.nl/account/register', _0x42a0eb, _0x3b1ad4, _0x5362d9), _0x9f9982();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x5362d9 = await _0x102b88(), _0x3b1ad4 = await _0x3c38f6();
                                                    return await _0x4ac2e9('', _0x42a0eb, _0x3b1ad4, _0x5362d9), _0x9f9982();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x4653ae[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x431b49(_0x4653ae[taskModule]['modules']);
                                                var _0x42a0eb = _0x4653ae[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x5362d9 = await _0x102b88(), _0x48be69 = await _0x3c38f6();
                                                    return await _0x4baa3d('https://www.kickz.com/nl/login/', _0x42a0eb, _0x48be69, _0x5362d9), _0x9f9982();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x5362d9 = await _0x102b88(), _0x48be69 = await _0x3c38f6();
                                                        return await _0x13a302(_0x42a0eb, _0x48be69, _0x5362d9), _0x9f9982();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x4653ae[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x431b49(_0x4653ae[taskModule]['modules']);
                                                    var _0x42a0eb = _0x4653ae[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x5362d9 = await _0x102b88(), _0x2ffbec = await _0x3c38f6();
                                                        return await _0x34890d(_0x42a0eb, _0x2ffbec, _0x5362d9), _0x9f9982();
                                                    }
                                                } else {
                                                    if (_0x4653ae[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x4babe3(0x3e8), _0x9f9982();
                                                    else {
                                                        if (_0x4653ae[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x37f1cd = _0x4653ae[taskModule]['name'];
                                                            const _0x351311 = await _0x152d0b();
                                                            var _0x457af9 = _0x351311['split'](';');
                                                            await _0x380476(_0x457af9, _0x37f1cd);
                                                        } else {
                                                            if (_0x4653ae[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x2f40ab = 0x0;
                                                                for (const _0x2c9d92 in _0x4751e2) {
                                                                    console['log']('(' + _0x2f40ab + ')\x20' + _0x2c9d92 + '\x20:\x20' + _0x4751e2[_0x2c9d92]), _0x2f40ab++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x2f40ab + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x3821f5 = await _0x11870f();
                                                                if (_0x3821f5 == _0x2f40ab)
                                                                    return _0x9f9982();
                                                                console['clear'];
                                                                var _0x5441ea = 0x0;
                                                                for (var _0x105ace in _0x4751e2) {
                                                                    if (_0x3821f5 == _0x5441ea) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x105ace + '\x20:'), _0x4751e2[_0x105ace] = await _0x335a8f(), _0x4c4e71['writeFileSync']('../settings.json', JSON['stringify'](_0x4751e2));
                                                                        break;
                                                                    } else
                                                                        _0x5441ea++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x4babe3(0xbb8), _0x9f9982();
                                                            } else {
                                                                if (_0x4653ae[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x52da34(), _0x9f9982();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x4653ae[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x1a79bf = await _0x516454();
                                                                        _0x1a79bf == 'ModuleVoorDeBoys' ? (await _0xb1d14(), await _0x448fbd(), await afewFunction(_0x27944f[_0x3e6149], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x4babe3(0xbb8));
                                                                    } else {
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
                    }
                }
            }
            await _0x9f9982();
        } catch (_0x9d0fb7) {
            return console['log'](_0x9d0fb7), await _0x4babe3(0x3a98);
        }
}
;
_0x356443('JRaffles\x20' + _0x57831b), _0x52da34();
try {
    _0xdf9d3c();
} catch (_0xce769a) {
    var _0x48fb7a = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x217831
            },
            {
                'name': 'Version',
                'value': '' + _0x57831b
            },
            {
                'name': 'Error',
                'value': '' + _0xce769a
            }
        ]
    }];
    const _0x4259b0 = { 'embeds': _0x48fb7a };
    _0x246459(_0x5a1b60, _0x4259b0);
}