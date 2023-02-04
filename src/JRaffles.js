const { EmbedBuilder: _0x33b88a } = require('discord.js');
var _0x45fa90 = require('exe');
const { execFile: _0x76cc4f } = require('child_process'), _0x34c3d8 = require('puppeteer-extra'), _0x28915c = require('puppeteer-extra-plugin-recaptcha'), _0x247c05 = require('puppeteer-extra-plugin-stealth'), _0x59ec4b = require('chalk'), _0x560768 = require('node-bash-title'), _0x4957d2 = require('fs'), _0x1327d6 = require('axios'), _0x402f19 = require('papaparse');
var _0x4313b1 = require('random-name');
const _0x134e8e = require('request');
var _0x4b4bf7 = require('prompt');
const _0x1ae82d = _0x134e8e['jar']();
var _0x413ed8 = {};
const _0x5d018d = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x421077 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x5f0197 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x30aced = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x8fde59 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn';
var _0x492ad8 = 'https://discord.com/api/webhooks/', _0x23a13f = '' + _0x492ad8 + _0x5f0197, _0x4ce0d4 = '' + _0x492ad8 + _0x30aced, _0xc93bfc = '' + _0x492ad8 + _0x5d018d, _0x4a6e1d = '' + _0x492ad8 + _0x421077, _0x29fdbb = '' + _0x492ad8 + _0x8fde59;
const _0x332066 = JSON['parse'](_0x4957d2['readFileSync']('../package.json', 'utf-8')), _0x2d0bbd = _0x332066['version'];
var _0x4ad4b6, _0x513560, _0x334ca3, _0x3da686, _0x49650f, _0x2f602e, _0x3d4b33;
const _0x5030e1 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x1a3e40 = ![];
const _0x14a3c0 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x5ee2ab = '0123456789';
var _0x24da21 = _0x14a3c0['split']('');
const _0x31e251 = require('auto-git-update'), { PageEmittedEvents: _0x1205fd } = require('puppeteer'), { getRandomValues: _0x966316 } = require('crypto'), { resolve: _0x220228 } = require('path'), _0x480a84 = {
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
}, _0xca9b99 = new _0x31e251(_0x480a84);
async function _0x6634aa() {
    _0x49650f = _0x4957d2['readdirSync']('../proxies'), _0x3da686 = _0x4957d2['readdirSync']('../tasks'), _0x413ed8 = JSON['parse'](_0x4957d2['readFileSync']('../settings.json', 'utf-8')), !_0x413ed8['delay'] && (_0x413ed8['delay'] = 0x2710, _0x4957d2['writeFileSync']('../settings.json', JSON['stringify'](_0x413ed8))), !_0x413ed8['captchaKey'] && (_0x413ed8['captchaKey'] = '', _0x4957d2['writeFileSync']('../settings.json', JSON['stringify'](_0x413ed8))), !_0x413ed8['useRandomProxy'] && (_0x413ed8['useRandomProxy'] = !![], _0x4957d2['writeFileSync']('../settings.json', JSON['stringify'](_0x413ed8))), !_0x413ed8['webhook'] && (_0x413ed8['webhook'] = '', _0x4957d2['writeFileSync']('../settings.json', JSON['stringify'](_0x413ed8))), _0x492ad8 = _0x413ed8['webhook'], _0x2f602e = _0x413ed8['licenseKey'];
}
let _0x422595, _0x34f3a0 = [], _0x2c9b62;
const _0x5bfa8d = _0x1fb255 => new Promise(_0x516526 => setTimeout(_0x516526, _0x1fb255));
function _0x3f8e25(_0x1edb70, _0x4fe7ec) {
    return Math['floor'](Math['random']() * (_0x4fe7ec - _0x1edb70 + 0x1) + _0x1edb70);
}
async function _0x28e058(_0xc070cf) {
    return _0x1327d6['get']('https://api.hyper.co/v4/licenses/' + _0xc070cf, { 'headers': { 'Authorization': 'Bearer\x20' + _0x5030e1 } })['then'](_0x3c2132 => _0x3c2132['data'])['catch'](() => null);
}
;
async function _0xba6fd0(_0x5ae022) {
    console['clear']();
    if (_0x5ae022 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x21e1da = await _0x4b4bf7['get']('License');
        if (_0x21e1da['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x5bfa8d(0xbb8), _0xba6fd0(_0x5ae022);
        _0x5ae022 = _0x21e1da['License'], _0x413ed8['licenseKey'] = _0x5ae022, _0x2f602e = _0x5ae022, _0x4957d2['writeFileSync']('../settings.json', JSON['stringify'](_0x413ed8));
    }
    console['log']('Checking\x20license\x20' + _0x2f602e + '...'), await _0x5bfa8d(0x5dc);
    const _0x2fbb90 = await _0x28e058(_0x5ae022);
    _0x3d4b33 = JSON['stringify'](_0x2fbb90['user']['username'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x2fbb90)
        return console['log']('License\x20not\x20found');
    if (!_0x2fbb90['user'])
        return console['log']('License\x20not\x20bound');
    return _0x2fbb90['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x1a3e40 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x1a3e40 = ![]);
}
async function _0x3c72cd() {
    var _0x590d62 = await _0x4b4bf7['get']('Module');
    return console['clear'](), _0x590d62['Module'];
}
;
async function _0x1685a8() {
    var _0x5c17ca = await _0x4b4bf7['get']('Setting');
    return console['clear'](), _0x5c17ca['Setting'];
}
async function _0x2e133f() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x371390 = 0x0; _0x371390 < _0x3da686['length']; _0x371390++) {
        console['log']('\x20(' + _0x371390 + ')\x20' + _0x3da686[_0x371390]);
    }
    console['log']('');
    var _0x4b6962 = await _0x4b4bf7['get']('Task');
    if (_0x4b6962['Task'] > _0x3da686['length'] - 0x1 || isNaN(_0x4b6962['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x5bfa8d(0x3e8), _0x2e133f();
    var _0x2e568b = _0x4957d2['readFileSync']('../tasks/' + _0x3da686[_0x4b6962['Task']], 'utf-8');
    return _0x334ca3 = _0x402f19['parse'](_0x2e568b, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x59ec4b['blue'](_0x3da686[_0x4b6962['Task']])), _0x4ad4b6 = _0x3da686[_0x4b6962['Task']], _0x334ca3;
}
async function _0x4684ed() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x13a3c1 = 0x0; _0x13a3c1 < _0x49650f['length']; _0x13a3c1++) {
        console['log']('\x20(' + _0x13a3c1 + ')\x20' + _0x49650f[_0x13a3c1]);
    }
    console['log']('');
    var _0x2593c5 = await _0x4b4bf7['get']('Proxies');
    if (_0x2593c5['Proxies'] > _0x49650f['length'] - 0x1 || isNaN(_0x2593c5['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x5bfa8d(0x3e8), _0x4684ed();
    var _0x3aff66 = _0x4957d2['readFileSync']('../proxies/' + _0x49650f[_0x2593c5['Proxies']], 'utf-8')['split']('\x0a');
    let _0x12e870 = _0x3aff66['map']((_0x1a476c, _0x436f56) => {
        sanatizeProxy = _0x1a476c['replace']('\x0d', '');
        if (_0x3aff66[_0x436f56 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x513560 = _0x49650f[_0x2593c5['Proxies']], console['clear'](), _0x12e870;
}
async function _0x580f76() {
    var _0x479364 = await _0x4b4bf7['get']('Value');
    return console['clear'](), _0x479364['Value'];
}
async function _0x57165f(_0x394952) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x3d5725 = 0x0; _0x3d5725 < _0x394952['length']; _0x3d5725++) {
        console['log']('\x20(' + _0x3d5725 + ')\x20[' + _0x394952[_0x3d5725]['name'] + ']');
    }
    ;
    console['log']('');
    var _0xd5ce0f = await _0x4b4bf7['get']('Module');
    return _0xd5ce0f['Module'];
}
async function _0x1f5d05() {
    var _0x234f0a = await _0x4b4bf7['get']('Password');
    return console['clear'](), _0x234f0a['Password'];
}
;
async function _0x4e8084() {
    var _0x36c8b = await _0x4b4bf7['get']('Links');
    return _0x36c8b['Links'];
}
;
async function _0x505bd9() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x501c32 = 0x0; _0x501c32 < _0x34f3a0['length']; _0x501c32++) {
        console['log']('\x20(' + _0x501c32 + ')\x20' + _0x34f3a0[_0x501c32]);
    }
    ;
    console['log']();
    let _0x269a7b = await _0x4b4bf7['get']('Product');
    return console['clear'](), _0x269a7b['Product'];
}
;
function _0x1c0231() {
    var _0x4af0d9 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x4af0d9;
}
;
const _0x2a036a = [
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
async function _0x3e98c7(_0x2e8d15, _0x5f3ed0) {
    let _0x364006 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x2d0bbd != 'devkey') {
        await _0x1327d6['post'](_0x2e8d15, _0x5f3ed0, _0x364006);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x1bb9e2(_0x1faa87, _0x28dce2, _0x3d4505, _0x39885e, _0x49101f) {
    if (!_0x39885e && _0x3d4505 == 'dev') {
        var _0x53fa51 = new _0x33b88a()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x28dce2['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x28dce2['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x1faa87['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x413ed8['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x3d4b33,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x1faa87['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x2d0bbd,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x53fa51['data'];
    } else {
        if (_0x39885e && _0x3d4505 == 'dev') {
            var _0x53fa51 = new _0x33b88a()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x28dce2['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x3d4b33,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x28dce2['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x1faa87['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x413ed8['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x49101f,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x1faa87['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x2d0bbd,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x53fa51['data'];
        } else {
            if (_0x3d4505 == 'pub') {
                var _0x53fa51 = new _0x33b88a()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x28dce2['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x28dce2['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x1faa87['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x413ed8['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x1faa87['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x2d0bbd,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x53fa51['data'];
            } else {
                if (_0x3d4505 == 'acc') {
                    var _0x53fa51 = new _0x33b88a()['setColor']('#282525')['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x28dce2['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x3d4b33,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x28dce2['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x413ed8['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x2d0bbd,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x53fa51['data'];
                }
            }
        }
    }
}
async function _0x542345(_0x242d32, _0x557c2e) {
    var _0x10547c = _0x242d32[_0x557c2e]['Address1']['split'](''), _0x118d0f = _0x242d32[_0x557c2e]['Address2']['split'](''), _0x18db1a = _0x242d32[_0x557c2e]['Email']['split']('@');
    for (var _0x3f2607 = 0x0; _0x3f2607 < _0x10547c['length']; _0x3f2607++) {
        if (_0x10547c[_0x3f2607] == 'X') {
            var _0x4ebb72 = Math['round'](Math['random']() * (_0x14a3c0['length'] - 0x1));
            _0x10547c[_0x3f2607] = _0x24da21[_0x4ebb72];
        }
    }
    ;
    for (var _0x3f2607 = 0x0; _0x3f2607 < _0x118d0f['length']; _0x3f2607++) {
        if (_0x118d0f[_0x3f2607] == 'X') {
            var _0x4ebb72 = Math['round'](Math['random']() * (_0x14a3c0['length'] - 0x1));
            _0x118d0f[_0x3f2607] = _0x24da21[_0x4ebb72];
        }
    }
    ;
    _0x242d32[_0x557c2e]['FirstName'] == 'RANDOM' && (_0x242d32[_0x557c2e]['FirstName'] = _0x4313b1['first']());
    _0x242d32[_0x557c2e]['LastName'] == 'RANDOM' && (_0x242d32[_0x557c2e]['LastName'] = _0x4313b1['last']());
    _0x18db1a[0x0] == 'RANDOM' ? _0x18db1a[0x0] = '' + _0x4313b1['first']() + _0x4313b1['last']() + '@' : _0x18db1a[0x0] = _0x18db1a[0x0] + '@';
    _0x242d32[_0x557c2e]['Phone'] == 'RANDOM' && (_0x242d32[_0x557c2e]['Phone'] = _0x3f8e25(0x3b9aca00, 0x2540be3ff));
    if (_0x242d32[_0x557c2e]['Follower'] == 'RANDOM') {
        var _0x590671 = _0x3f8e25(0x1, 0x270f);
        _0x242d32[_0x557c2e]['Follower'] = '' + _0x4313b1['first']() + _0x4313b1['last']() + _0x590671;
    }
    _0x242d32[_0x557c2e]['Email'] = _0x18db1a['join'](''), _0x242d32[_0x557c2e]['Address1'] = _0x10547c['join'](''), _0x242d32[_0x557c2e]['Address2'] = _0x118d0f['join']('');
    return;
}
;
function _0x1f2464() {
    let _0x10608a = proxyFile['split']('\x0a'), _0x461445 = _0x10608a['map']((_0x56ffb0, _0x5d50eb) => {
        sanatizeProxy = _0x56ffb0['replace']('\x0d', '');
        if (_0x10608a[_0x5d50eb + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x461445;
}
;
async function _0x530358(_0x4ad62) {
    var _0x3e7626 = _0x4ad62[0x1]['split'](':');
    const _0x164352 = await _0x34c3d8['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x3e7626[0x0] + ':' + _0x3e7626[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x388ea1 = await _0x164352['newPage']();
        await _0x388ea1['authenticate']({
            'username': '' + _0x3e7626[0x2],
            'password': '' + _0x3e7626[0x3]
        }), console['log'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x388ea1['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x388ea1['setRequestInterception'](!![]), _0x388ea1['on']('request', _0xdb389d => {
            _0xdb389d['resourceType']() === 'image' || _0xdb389d['resourceType']() === 'font' || _0xdb389d['resourceType']() === 'media' ? _0xdb389d['abort']() : _0xdb389d['continue']();
        }), await _0x388ea1['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x388ea1['waitForTimeout'](0xbb8), await _0x388ea1['waitForSelector']('.product-card');
        const _0x28cca2 = await _0x388ea1['$$eval']('a.product-card', _0x5d304b => {
            return _0x5d304b['map'](_0x8388b9 => _0x8388b9['href']);
        });
        return _0x34f3a0 = _0x28cca2;
    } catch (_0x49f42d) {
        console['log']('\x20' + _0x49f42d);
    } finally {
        _0x164352['close'](), console['clear']();
    }
}
;
async function _0xcc9f28(_0x1cd93e, _0x203bd8, _0x55539d, _0x224fe1, _0x24a8d0) {
    await _0x542345(_0x224fe1, _0x1cd93e);
    var _0x4b6708 = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x3d4b33
            },
            {
                'name': 'Size',
                'value': '' + _0x224fe1[_0x1cd93e]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x413ed8['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x2d0bbd
            }
        ]
    }];
    const _0x130991 = { 'embeds': _0x4b6708 };
    if (_0x413ed8['useRandomProxy'] = ![])
        var _0x1f1b35 = _0x24a8d0[_0x1cd93e]['split'](':');
    else
        var _0xd0f794 = Math['round'](Math['random']() * (_0x24a8d0['length'] - 0x1)), _0x1f1b35 = _0x24a8d0[_0xd0f794]['split'](':');
    var _0x2d8486 = _0x55539d['data'];
    _0x203bd8 == 'exp' ? _0x2d8486['data']['attributes']['email'] = '' + _0x224fe1[_0x1cd93e]['FirstName'] + _0x224fe1[_0x1cd93e]['LastName'] + _0x413ed8['catchall'] : _0x2d8486['data']['attributes']['email'] = '' + _0x224fe1[_0x1cd93e]['Email'];
    _0x2d8486['data']['attributes']['properties']['$first_name'] = '' + _0x224fe1[_0x1cd93e]['FirstName'], _0x2d8486['data']['attributes']['properties']['$last_name'] = '' + _0x224fe1[_0x1cd93e]['LastName'], _0x2d8486['data']['attributes']['properties']['$address1'] = _0x224fe1[_0x1cd93e]['Address1'] + '\x20' + _0x224fe1[_0x1cd93e]['Address2'], _0x2d8486['data']['attributes']['properties']['$zip'] = '' + _0x224fe1[_0x1cd93e]['Zip'], _0x2d8486['data']['attributes']['properties']['$city'] = '' + _0x224fe1[_0x1cd93e]['City'], _0x2d8486['data']['attributes']['properties']['$country'] = '' + _0x224fe1[_0x1cd93e]['Country'], _0x2d8486['data']['attributes']['properties']['Size'] = '' + _0x224fe1[_0x1cd93e]['Size'], _0x2d8486['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x224fe1[_0x1cd93e]['Follower'];
    var _0x460d28 = {
        'jar': _0x1ae82d,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x55539d['url'],
        'headers': _0x55539d['headers'],
        'body': JSON['stringify'](_0x2d8486),
        'proxy': 'http://' + _0x1f1b35[0x2] + ':' + _0x1f1b35[0x3] + '@' + _0x1f1b35[0x0] + ':' + _0x1f1b35[0x1]
    };
    return _0x203bd8 === 'ver' && (_0x460d28['method'] = 'GET'), new Promise(function (_0x2bc004, _0x231700) {
        callback = async (_0x4b139a, _0x13ff80, _0x3cf456) => {
            !_0x4b139a && _0x13ff80['statusCode'] == 0xca || !_0x4b139a && _0x13ff80['statusCode'] == 0xc8 ? _0x2bc004(console['log'](_0x59ec4b['green'](_0x1c0231() + '\x20[' + _0x55539d['name'] + ']\x20Task\x20' + (_0x1cd93e + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x4b6708[0x0]['title'] = 'Failed\x20entry', _0x4b6708[0x0]['description'] = '' + _0x4b139a, await _0x3e98c7(_0x4a6e1d, _0x130991), _0x231700(console['log'](_0x1c0231() + '\x20[' + _0x55539d['name'] + ']\x20Task\x20' + (_0x1cd93e + 0x1) + ':\x20' + _0x4b139a)));
        };
        try {
            _0x203bd8 === 'ver' ? console['log'](_0x1c0231() + '\x20[' + _0x55539d['name'] + ']\x20Task\x20' + (_0x1cd93e + 0x1) + ':\x20Verifying.') : console['log'](_0x1c0231() + '\x20[' + _0x55539d['name'] + ']\x20Task\x20' + (_0x1cd93e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2d8486['data']['attributes']['email']), _0x134e8e(_0x460d28, callback);
        } catch (_0x2a036f) {
            console['log'](_0x1c0231() + '\x20Task\x20' + (_0x1cd93e + 0x1) + ':\x20' + _0x2a036f);
        }
    });
}
;
async function _0x55f7b7(_0x2dfd70, _0x1ab217, _0x561be8) {
    _0x34c3d8['use'](_0x247c05()), _0x34c3d8['use'](_0x28915c({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x413ed8['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3504ca = 0x0; _0x3504ca < _0x2dfd70['length']; _0x3504ca++) {
        var _0x11f811, _0x42024a = '', _0x18e960 = 0x0, _0x50cb10 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3d4b33
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2dfd70[_0x3504ca]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2dfd70[_0x3504ca]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x413ed8['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2d0bbd
                }
            ]
        }], _0x37cb63 = await _0x1bb9e2(_0x2dfd70[_0x3504ca], _0x561be8, 'dev', ![]), _0x449c7c = await _0x1bb9e2(_0x2dfd70[_0x3504ca], _0x561be8, 'pub', ![]);
        const _0x3500ab = {
            'succesDEVMSG': { 'embeds': [_0x37cb63] },
            'succesPUBMSG': { 'embeds': [_0x449c7c] }
        }, _0x20d2dd = { 'embeds': _0x50cb10 };
        await _0x542345(_0x2dfd70, _0x3504ca);
        if (_0x2dfd70[_0x3504ca]['Email'] == '' || _0x2dfd70[_0x3504ca]['FirstName'] == '' || _0x2dfd70[_0x3504ca]['LastName'] == '' || _0x2dfd70[_0x3504ca]['Country'] == '' || _0x2dfd70[_0x3504ca]['Size'] == '' || _0x2dfd70[_0x3504ca]['Address1'] == '' || _0x2dfd70[_0x3504ca]['Zip'] == '') {
            console['log'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2dfd70[_0x3504ca]['Email'] == '' || _0x2dfd70[_0x3504ca]['FirstName'] == '' || _0x2dfd70[_0x3504ca]['LastName'] == '' || _0x2dfd70[_0x3504ca]['Country'] == '' || _0x2dfd70[_0x3504ca]['Size'] == '' || _0x2dfd70[_0x3504ca]['Address1'] == '' || _0x2dfd70[_0x3504ca]['Zip'] == '' || _0x2dfd70[_0x3504ca]['Phone'] == '') {
            console['log'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x2d5b58 = '' + _0x2dfd70[_0x3504ca]['Url'];
        if (_0x413ed8['useRandomProxy'] = ![])
            var _0x6e4414 = _0x1ab217[_0x3504ca]['split'](':');
        else
            var _0x141c50 = Math['round'](Math['random']() * (_0x1ab217['length'] - 0x1)), _0x6e4414 = _0x1ab217[_0x141c50]['split'](':');
        const _0x4a3dce = await _0x34c3d8['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x6e4414[0x0] + ':' + _0x6e4414[0x1]]
        });
        try {
            const _0x29d482 = await _0x4a3dce['newPage']();
            await _0x29d482['authenticate']({
                'username': '' + _0x6e4414[0x2],
                'password': '' + _0x6e4414[0x3]
            }), console['log'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x20Getting\x20Session'), await _0x29d482['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x29d482['setRequestInterception'](!![]), _0x29d482['on']('request', _0x193d4b => {
                _0x193d4b['resourceType']() === 'image' || _0x193d4b['resourceType']() === 'font' || _0x193d4b['resourceType']() === 'media' ? _0x193d4b['abort']() : _0x193d4b['continue']();
            }), await _0x29d482['goto'](_0x2d5b58), await _0x5bfa8d(0xbb8), await _0x29d482['waitForSelector']('.control__JhutY'), await _0x29d482['click']('.control__JhutY'), await _0x5bfa8d(0x1f4);
            if (_0x2dfd70[_0x3504ca]['Size'] != 'RANDOM')
                try {
                    const _0x5e8999 = await _0x29d482['$x']('//div[contains(text(),\x20\x27' + _0x2dfd70[_0x3504ca]['Size'] + '\x27)]');
                    await _0x5e8999[0x0]['click']();
                } catch {
                    console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x59238e = await _0x29d482['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x52387b = Math['round'](Math['random']() * (_0x59238e['length'] - 0x1));
                await _0x59238e[_0x52387b]['click']();
            }
            await _0x5bfa8d(0x4b0);
            const _0x178704 = await _0x29d482['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x178704[0x0]['click'](), await _0x29d482['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x29d482['type']('input[name=\x22email\x22]', '' + _0x2dfd70[_0x3504ca]['Email']), await _0x5bfa8d(0x640), await _0x29d482['type']('input[name=\x22phone\x22]', '' + _0x2dfd70[_0x3504ca]['Phone']), await _0x5bfa8d(0x4b0), await _0x29d482['click']('button.btn.continue-button__1RtsS'), await _0x5bfa8d(0x4b0);
            try {
                await _0x29d482['type']('input[name=\x22firstName\x22]', '' + _0x2dfd70[_0x3504ca]['FirstName']), await _0x5bfa8d(0x258);
            } catch {
                const _0x4b2625 = await _0x29d482['$$eval']('.invalid-feedback\x20>\x20div', _0x38343c => {
                    return _0x38343c['map'](_0x5bd644 => _0x5bd644['innerText']);
                });
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x20' + _0x4b2625));
                continue;
            }
            await _0x29d482['type']('input[name=\x22lastName\x22]', '' + _0x2dfd70[_0x3504ca]['LastName']), await _0x5bfa8d(0xc8), await _0x29d482['type']('input[name=\x22instagramUsername\x22]', '' + _0x2dfd70[_0x3504ca]['Follower']), await _0x5bfa8d(0x4b0), await _0x29d482['click']('button.btn.continue-button__1RtsS'), await _0x5bfa8d(0x3e8), console['log'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x29d482['select']('select[name=\x22country\x22]', '' + _0x2dfd70[_0x3504ca]['Country']), await _0x5bfa8d(0x2bc), await _0x29d482['type']('input[name=\x22streetName\x22]', '' + _0x2dfd70[_0x3504ca]['Address1']), await _0x5bfa8d(0x258), await _0x29d482['type']('input[name=\x22houseNumber\x22]', _0x2dfd70[_0x3504ca]['HouseNumber'] + '\x20' + _0x2dfd70[_0x3504ca]['Address2']), await _0x5bfa8d(0xc8), await _0x29d482['type']('input[name=\x22postalCode\x22]', '' + _0x2dfd70[_0x3504ca]['Zip']), await _0x5bfa8d(0x1f4), await _0x29d482['type']('input[name=\x22city\x22]', '' + _0x2dfd70[_0x3504ca]['City']), await _0x5bfa8d(0x4b0), await _0x29d482['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x5bfa8d(0x4b0), await _0x29d482['click']('button.btn.continue-button__1RtsS'), await _0x5bfa8d(0x4b0), console['log'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x29d482['solveRecaptchas'](), console['log'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x5bfa8d(0xbb8), await _0x29d482['click']('button.btn.continue-button__1RtsS'), await _0x5bfa8d(0x1388), console['log'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x29d482['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x29d482['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5bfa8d(0x4b0), await _0x29d482['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2dfd70[_0x3504ca]['CardNumber']), await _0x5bfa8d(0x320), await _0x29d482['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x29d482['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2dfd70[_0x3504ca]['ExpiryDate']), await _0x5bfa8d(0x4b0), await _0x29d482['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x29d482['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2dfd70[_0x3504ca]['CVV']), await _0x5bfa8d(0x226), await _0x29d482['type']('input[name=\x22holderName\x22]', '' + _0x2dfd70[_0x3504ca]['NameOnCard']), await _0x5bfa8d(0x226), await _0x29d482['click']('button.adyen-checkout__button'), console['log'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x29d482['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x5bfa8d(0xbb8);
            } catch (_0x3109a9) {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x203DS\x20Failed')), _0x11f811 = '3DS\x20Error\x20' + _0x3109a9;
                var _0x47bff6 = await _0x1bb9e2(_0x2dfd70[_0x3504ca], _0x561be8, 'dev', !![], _0x11f811);
                _0x3500ab['errorDEV'] = { 'embeds': [_0x47bff6] };
                _0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '' && await _0x3e98c7(_0x413ed8['webhook'], _0x3500ab['errorDEV']);
                await _0x3e98c7(_0x4a6e1d, _0x3500ab['errorDEV']);
                continue;
            }
            console['log'](_0x59ec4b['green'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '')
                try {
                    await _0x3e98c7(_0x413ed8['webhook'], _0x3500ab['succesDEVMSG']);
                } catch {
                }
            await _0x5bfa8d(0xc8), await _0x3e98c7(_0xc93bfc, _0x3500ab['succesDEVMSG']), await _0x5bfa8d(0xc8);
            try {
                await _0x3e98c7(_0x29fdbb, _0x3500ab['succesPUBMSG']);
            } catch {
            }
        } catch (_0xedadf1) {
            console['log'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x20' + _0xedadf1), _0x11f811 = '' + _0xedadf1;
            var _0x47bff6 = await _0x1bb9e2(_0x2dfd70[_0x3504ca], _0x561be8, 'dev', !![], _0x11f811);
            _0x3500ab['errorDEV'] = { 'embeds': [_0x47bff6] }, _0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '' && await _0x3e98c7(_0x413ed8['webhook'], _0x3500ab['errorDEV']), await _0x3e98c7(_0x4a6e1d, _0x3500ab['errorDEV']), _0x42024a = 'yes';
        } finally {
            _0x4a3dce['close']();
            if (_0x42024a == 'yes' && _0x18e960 != 0x5) {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x561be8['name'] + ']\x20Task\x20' + (_0x3504ca + 0x1) + '\x20:\x20Retrying')), _0x3504ca = _0x3504ca - 0x1, _0x18e960 = _0x18e960 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x413ed8['footshopDelay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['footshopDelay']);
        }
    }
}
afewFunction = async (_0x291ba7, _0xc9c5e0, _0x2154b8, _0x4b7ef8, _0x496abd) => {
    for (var _0x35b0ad = 0x0; _0x35b0ad < _0x4b7ef8['length']; _0x35b0ad++) {
        var _0x52df36, _0x4aa986 = '', _0x57ceed = 0x0;
        _0x4b7ef8[_0x35b0ad]['Url'] = _0x291ba7, _0x560768(_0x2154b8['name'] + '\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20/\x20' + _0x4b7ef8['length'] + '\x20||\x20File:\x20' + _0x4ad4b6 + '\x20Proxies:\x20' + _0x513560), await _0x542345(_0x4b7ef8, _0x35b0ad);
        var _0x4afcd6 = await _0x1bb9e2(_0x4b7ef8[_0x35b0ad], _0x2154b8, 'dev', ![]), _0x19ef2e = await _0x1bb9e2(_0x4b7ef8[_0x35b0ad], _0x2154b8, 'pub', ![]);
        const _0x2ebfe5 = {
            'succesDEVMSG': { 'embeds': [_0x4afcd6] },
            'succesPUBMSG': { 'embeds': [_0x19ef2e] }
        };
        if (_0x4b7ef8[_0x35b0ad]['Email'] == '' || _0x4b7ef8[_0x35b0ad]['FirstName'] == '' || _0x4b7ef8[_0x35b0ad]['LastName'] == '' || _0x4b7ef8[_0x35b0ad]['Country'] == '' || _0x4b7ef8[_0x35b0ad]['Size'] == '' || _0x4b7ef8[_0x35b0ad]['Address1'] == '' || _0x4b7ef8[_0x35b0ad]['Zip'] == '') {
            console['log'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x413ed8['useRandomProxy'] = ![])
            var _0x29698b = _0x496abd[_0x35b0ad]['split'](':');
        else
            var _0x3fc123 = Math['round'](Math['random']() * (_0x496abd['length'] - 0x1)), _0x29698b = _0x496abd[_0x3fc123]['split'](':');
        const _0x3e8245 = await _0x34c3d8['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x29698b[0x0] + ':' + _0x29698b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1b7616 = await _0x3e8245['newPage']();
            await _0x1b7616['setDefaultNavigationTimeout'](0x1d4c0), await _0x1b7616['authenticate']({
                'username': '' + _0x29698b[0x2],
                'password': '' + _0x29698b[0x3]
            }), console['log'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1b7616['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1b7616['setRequestInterception'](!![]), _0x1b7616['on']('request', _0xb4a860 => {
                _0xb4a860['resourceType']() === 'image' || _0xb4a860['resourceType']() === 'font' || _0xb4a860['resourceType']() === 'media' ? _0xb4a860['abort']() : _0xb4a860['continue']();
            }), await _0x1b7616['goto'](_0x291ba7, { 'waitUntil': 'networkidle2' }), console['log'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x1b7616['waitForTimeout'](0xfa0), console['log'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20Cookies\x20received'), await _0x1b7616['waitForTimeout'](0x320);
            if (_0x4b7ef8[_0x35b0ad]['Size'] == 'RANDOM') {
                console['log'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x5a6926 = await _0x1b7616['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x48ae27 => {
                    return _0x48ae27['map'](_0x54003c => _0x54003c['href']);
                });
                var _0x47ef3f = Math['round'](Math['random']() * (_0x5a6926['length'] - 0x1));
                await _0x1b7616['goto']('' + _0x5a6926[_0x47ef3f]);
            } else {
                console['log'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4b7ef8[_0x35b0ad]['Size']);
                try {
                    const _0x37d923 = await _0x1b7616['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x4b7ef8[_0x35b0ad]['Size'] + '\x22]\x20>\x20a', _0x3b603a => {
                        return _0x3b603a['map'](_0x31c38f => _0x31c38f['href']);
                    });
                    await _0x1b7616['goto']('' + _0x37d923[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x539cfb) {
                    console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20' + _0x539cfb + '\x20Size\x20not\x20found')), _0x52df36 = 'Size\x20Not\x20Found';
                    var _0x4ee73d = await _0x1bb9e2(_0x4b7ef8[_0x35b0ad], _0x2154b8, 'dev', !![], _0x52df36);
                    _0x2ebfe5['errorDEV'] = { 'embeds': [_0x4ee73d] };
                    _0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '' && await _0x3e98c7(_0x413ed8['webhook'], _0x2ebfe5['errorDEV']);
                    await _0x3e98c7(_0x4a6e1d, _0x2ebfe5['errorDEV']);
                    continue;
                }
            }
            await _0x1b7616['waitForTimeout'](0x258), await _0x1b7616['type']('#raffle-instagram', '' + _0x4b7ef8[_0x35b0ad]['Follower'], { 'delay': 0x64 }), await _0x1b7616['waitForTimeout'](0x384), await _0x1b7616['click']('#raffle-terms'), await _0x1b7616['waitForTimeout'](0x384), await _0x1b7616['evaluate'](() => {
                const _0x1e5639 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x1e5639['click']();
            }), await _0x1b7616['waitForTimeout'](0xbb8), await _0x1b7616['waitForSelector']('#checkout_email'), await _0x5bfa8d(0x3e8), console['log'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20Filling\x20Information');
            _0xc9c5e0 == 'sec' ? await _0x1b7616['type']('#checkout_email', '' + _0x4b7ef8[_0x35b0ad]['FirstName'] + _0x4b7ef8[_0x35b0ad]['LastName'] + _0x413ed8['catchall'], 0x32) : await _0x1b7616['type']('#checkout_email', '' + _0x4b7ef8[_0x35b0ad]['Email'], 0x32);
            await _0x5bfa8d(0x320), await _0x1b7616['select']('#checkout_shipping_address_country', '' + _0x4b7ef8[_0x35b0ad]['Country']), await _0x1b7616['waitForTimeout'](0x258), await _0x1b7616['type']('#checkout_shipping_address_first_name', '' + _0x4b7ef8[_0x35b0ad]['FirstName']), await _0x1b7616['waitForTimeout'](0x320), await _0x1b7616['type']('#checkout_shipping_address_last_name', '' + _0x4b7ef8[_0x35b0ad]['LastName']), await _0x1b7616['waitForTimeout'](0x2bc), await _0x1b7616['type']('#checkout_shipping_address_address1', _0x4b7ef8[_0x35b0ad]['Address1'] + '\x20' + _0x4b7ef8[_0x35b0ad]['HouseNumber']), await _0x1b7616['waitForTimeout'](0x2bc), await _0x1b7616['type']('#checkout_shipping_address_address2', '' + _0x4b7ef8[_0x35b0ad]['Address2']), await _0x1b7616['waitForTimeout'](0x2bc);
            _0x4b7ef8[_0x35b0ad]['Postcode'] == undefined ? await _0x1b7616['type']('#checkout_shipping_address_zip', '' + _0x4b7ef8[_0x35b0ad]['Zip']) : await _0x1b7616['type']('#checkout_shipping_address_zip', '' + _0x4b7ef8[_0x35b0ad]['Postcode']);
            await _0x1b7616['waitForTimeout'](0x2bc), await _0x1b7616['type']('#checkout_shipping_address_city', '' + _0x4b7ef8[_0x35b0ad]['City']), await _0x1b7616['waitForTimeout'](0x2bc), console['log'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x1b7616, _0x1b7616['evaluate'](() => {
                const _0x19d5bc = document['querySelector']('#continue_button');
                for (var _0x341ba6 = 0x0; _0x341ba6 < 0x5; _0x341ba6++) {
                    if (_0x19d5bc) {
                        _0x19d5bc['click'](), _0x19d5bc['click']();
                        break;
                    } else
                        _0x5bfa8d(0xfa0);
                }
            }), await _0x1b7616['waitForTimeout'](0x1194);
            try {
                await _0x1b7616['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x1b7616['evaluate'](() => {
                const _0x519c3b = document['querySelector']('#continue_button');
                for (var _0x543cce = 0x0; _0x543cce < 0x5; _0x543cce++) {
                    if (_0x519c3b) {
                        _0x519c3b['click']();
                        break;
                    } else
                        _0x5bfa8d(0xfa0);
                }
            }), await _0x1b7616['waitForTimeout'](0x7d0), console['log'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1b7616['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x1b7616['evaluate'](() => {
                const _0x2b6fe0 = document['querySelector']('#continue_button');
                for (var _0x72c76a = 0x0; _0x72c76a < 0x5; _0x72c76a++) {
                    if (_0x2b6fe0) {
                        _0x2b6fe0['click']();
                        break;
                    } else
                        _0x5bfa8d(0xfa0);
                }
            }), await _0x1b7616['waitForTimeout'](0x1194), await _0x1b7616['waitForSelector']('#continue_button'), _0x1b7616['evaluate'](() => {
                const _0x329b18 = document['querySelector']('#continue_button');
                for (var _0x20381a = 0x0; _0x20381a < 0x5; _0x20381a++) {
                    if (_0x329b18) {
                        _0x329b18['click']();
                        break;
                    } else
                        _0x5bfa8d(0xfa0);
                }
            });
            try {
                await _0x1b7616['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x59ec4b['green'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '')
                    try {
                        await _0x3e98c7(_0x413ed8['webhook'], _0x2ebfe5['succesDEVMSG']);
                    } catch {
                    }
                await _0x5bfa8d(0xc8), await _0x3e98c7(_0xc93bfc, _0x2ebfe5['succesDEVMSG']), await _0x5bfa8d(0xc8);
                try {
                    await _0x3e98c7(_0x29fdbb, _0x2ebfe5['succesPUBMSG']);
                } catch {
                }
            } catch (_0x4c24c1) {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x4c24c1));
            }
        } catch (_0x3b130e) {
            console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20' + _0x3b130e)), _0x52df36 = '' + _0x3b130e;
            var _0x4ee73d = await _0x1bb9e2(_0x4b7ef8[_0x35b0ad], _0x2154b8, 'dev', !![], _0x52df36);
            _0x2ebfe5['errorDEV'] = { 'embeds': [_0x4ee73d] }, _0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '' && await _0x3e98c7(_0x413ed8['webhook'], _0x2ebfe5['errorDEV']), await _0x3e98c7(_0x4a6e1d, _0x2ebfe5['errorDEV']), _0x4aa986 = 'yes';
        } finally {
            _0x3e8245 && _0x3e8245['close']();
            if (_0x4aa986 == 'yes' && _0x57ceed != 0x5 && _0x52df36 != 'Size\x20Not\x20Found') {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x2154b8['name'] + ']\x20Task\x20' + (_0x35b0ad + 0x1) + '\x20:\x20Retrying')), _0x35b0ad = _0x35b0ad - 0x1, _0x57ceed = _0x57ceed + 0x1;
                continue;
            }
            if (_0x35b0ad + 0x1 == _0x4b7ef8['length']) {
                console['log'](_0x59ec4b['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x5bfa8d(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x413ed8['AfewDelay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['AfewDelay']);
        }
    }
};
async function _0x520c3f(_0x1f1731, _0x1f16bd, _0x49420d, _0x6da2e5) {
    _0x34c3d8['use'](_0x247c05()), _0x34c3d8['use'](_0x28915c({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x413ed8['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xe5cbaf = 0x0; _0xe5cbaf < _0x49420d['length']; _0xe5cbaf++) {
        var _0x2081f4 = '', _0x4cf071 = 0x0;
        _0x560768(_0x1f16bd['name'] + '\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20/\x20' + _0x49420d['length'] + '\x20||\x20File:\x20' + _0x4ad4b6 + '\x20Proxies:\x20' + _0x513560), await _0x542345(_0x49420d, _0xe5cbaf);
        var _0x121cec = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3d4b33
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x413ed8['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2d0bbd
                }
            ]
        }];
        const _0x3709d0 = { 'embeds': _0x121cec };
        var _0x2e0507 = await _0x1bb9e2(_0x49420d[_0xe5cbaf], _0x1f16bd, 'acc', ![]);
        const _0x3bd784 = { 'succesDEVMSG': { 'embeds': [_0x2e0507] } };
        if (_0x49420d[_0xe5cbaf]['Email'] == '' || _0x49420d[_0xe5cbaf]['FirstName'] == '' || _0x49420d[_0xe5cbaf]['LastName'] == '') {
            console['log'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x49420d[_0xe5cbaf]['Password'] == '' && (_0x49420d[_0xe5cbaf]['Password'] = 'JRaffles23!');
        if (_0x413ed8['useRandomProxy'] = ![])
            var _0x520d28 = _0x6da2e5[_0xe5cbaf]['split'](':');
        else
            var _0x4c193a = Math['round'](Math['random']() * (_0x6da2e5['length'] - 0x1)), _0x520d28 = _0x6da2e5[_0x4c193a]['split'](':');
        const _0x2cc265 = await _0x34c3d8['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x520d28[0x0] + ':' + _0x520d28[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x51b5a2 = await _0x2cc265['newPage']();
            await _0x51b5a2['authenticate']({
                'username': '' + _0x520d28[0x2],
                'password': '' + _0x520d28[0x3]
            }), console['log'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x51b5a2['setRequestInterception'](!![]), _0x51b5a2['on']('request', _0x40e530 => {
                _0x40e530['resourceType']() === 'image' || _0x40e530['resourceType']() === 'font' || _0x40e530['resourceType']() === 'media' ? _0x40e530['abort']() : _0x40e530['continue']();
            }), await _0x51b5a2['goto'](_0x1f1731), await _0x5bfa8d(0xbb8), console['log'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x51b5a2['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x51b5a2['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x51b5a2['waitForSelector']('#button-register'), await _0x5bfa8d(0x7d0), await _0x51b5a2['evaluate'](() => {
                const _0x29a595 = document['querySelector']('#button-register');
                _0x29a595['click']();
            }), console['log'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x5bfa8d(0x1388), await _0x51b5a2['waitForSelector']('#customer_salutation'), await _0x51b5a2['select']('#customer_salutation', 'mr'), await _0x5bfa8d(0x7d0), await _0x51b5a2['waitForSelector']('#customer_firstname'), await _0x51b5a2['type']('#customer_firstname', '' + _0x49420d[_0xe5cbaf]['FirstName']), await _0x5bfa8d(0x352), await _0x51b5a2['waitForSelector']('#customer_lastname'), await _0x51b5a2['type']('#customer_lastname', '' + _0x49420d[_0xe5cbaf]['LastName']), await _0x5bfa8d(0x352), await _0x51b5a2['type']('#email-input', '' + _0x49420d[_0xe5cbaf]['Email']), await _0x5bfa8d(0x352), await _0x51b5a2['type']('#email-confirm-input', '' + _0x49420d[_0xe5cbaf]['Email']), await _0x5bfa8d(0x352), await _0x51b5a2['type']('#register-password', '' + _0x49420d[_0xe5cbaf]['Password']), await _0x5bfa8d(0x352), await _0x51b5a2['type']('#password-confirm', '' + _0x49420d[_0xe5cbaf]['Password']), await _0x5bfa8d(0x352), console['log'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x51b5a2['click']('#consent'), await _0x5bfa8d(0x1f4);
            const _0x58713d = await _0x51b5a2['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x58713d) {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x51b5a2['click']('#buttonRegister');
            try {
                await _0x51b5a2['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x59ec4b['yellow'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20Account\x20' + _0x49420d[_0xe5cbaf]['Email'] + '\x20Generated!')), console['log'](_0x59ec4b['yellow'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x49420d[_0xe5cbaf]['Email'])), await _0x5bfa8d(0x4b0);
            async function _0x26ac6e() {
                console['log'](_0x59ec4b['yellow'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x2a38c2 = await _0x4b4bf7['get']('Code');
                return _0x2a38c2['Code'];
            }
            ;
            code = await _0x26ac6e(), _0x5bfa8d(0x320), console['log'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20Verifying..'), await _0x51b5a2['type']('#verificationCode', code), await _0x5bfa8d(0x1f4), await _0x51b5a2['click']('#buttonVerify'), await _0x5bfa8d(0x190), await _0x51b5a2['click']('#buttonVerify'), await _0x5bfa8d(0x3e8);
            try {
                await _0x51b5a2['waitForSelector']('div.b-user_greeting'), console['log'](_0x59ec4b['green'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20Account\x20' + _0x49420d[_0xe5cbaf]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x4957d2['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x49420d[_0xe5cbaf]['Email'] + ',' + _0x49420d[_0xe5cbaf]['Password'] + ','), console['log'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20Account\x20' + _0x49420d[_0xe5cbaf]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '' && await _0x3e98c7(_0x413ed8['webhook'], _0x3bd784['succesDEVMSG']);
                } catch {
                }
                await _0x3e98c7(_0x4ce0d4, _0x3bd784['succesDEVMSG']);
            } catch {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x414492) {
            console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20' + _0x414492)), _0x121cec[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x121cec[0x0]['description'] = '' + _0x414492, await _0x3e98c7(_0x4a6e1d, _0x3709d0), _0x2081f4 = 'yes';
        } finally {
            _0x2cc265 && _0x2cc265['close']();
            if (_0x2081f4 == 'yes' && _0x4cf071 != 0x5) {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x1f16bd['name'] + ']\x20Task\x20' + (_0xe5cbaf + 0x1) + '\x20:\x20Retrying')), _0xe5cbaf = _0xe5cbaf - 0x1, _0x4cf071 = _0x4cf071 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x413ed8['delay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['delay']);
        }
    }
}
async function _0xa12518(_0x47b009, _0xf703ad, _0x5dc7ba) {
    _0x34c3d8['use'](_0x247c05()), _0x34c3d8['use'](_0x28915c({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x413ed8['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2eb788 = 0x0; _0x2eb788 < _0xf703ad['length']; _0x2eb788++) {
        var _0x2d6a74, _0x33d514 = '', _0x20946a = 0x0;
        _0x560768(_0x47b009['name'] + '\x20Task\x20' + (_0x2eb788 + 0x1) + '\x20/\x20' + _0xf703ad['length'] + '\x20||\x20File:\x20' + _0x4ad4b6 + '\x20Proxies:\x20' + _0x513560);
        var _0x5f1133 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3d4b33
                },
                {
                    'name': 'Product',
                    'value': '' + _0xf703ad[_0x2eb788]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0xf703ad[_0x2eb788]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x413ed8['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2d0bbd
                }
            ]
        }], _0x24cffd = await _0x1bb9e2(_0xf703ad[_0x2eb788], _0x47b009, 'dev', ![]), _0xa8a26c = await _0x1bb9e2(_0xf703ad[_0x2eb788], _0x47b009, 'pub', ![]);
        const _0x2e1331 = {
            'succesDEVMSG': { 'embeds': [_0x24cffd] },
            'succesPUBMSG': { 'embeds': [_0xa8a26c] }
        };
        await _0x542345(_0xf703ad, _0x2eb788);
        if (_0xf703ad[_0x2eb788]['Email'] == '' || _0xf703ad[_0x2eb788]['Password'] == '' || _0xf703ad[_0x2eb788]['FirstName'] == '' || _0xf703ad[_0x2eb788]['LastName'] == '') {
            console['log'](_0x1c0231() + '\x20[' + _0x47b009['name'] + ']\x20Task\x20' + (_0x2eb788 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x413ed8['useRandomProxy'] = ![])
            var _0x288c75 = _0x5dc7ba[_0x2eb788]['split'](':');
        else
            var _0x2e8670 = Math['round'](Math['random']() * (_0x5dc7ba['length'] - 0x1)), _0x288c75 = _0x5dc7ba[_0x2e8670]['split'](':');
        const _0x163571 = await _0x34c3d8['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x288c75[0x0] + ':' + _0x288c75[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x41ac67 = await _0x163571['newPage']();
            await _0x41ac67['authenticate']({
                'username': '' + _0x288c75[0x2],
                'password': '' + _0x288c75[0x3]
            }), console['log'](_0x1c0231() + '\x20[' + _0x47b009['name'] + ']\x20Task\x20' + (_0x2eb788 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x41ac67['setRequestInterception'](!![]), _0x41ac67['on']('request', _0x5a40d => {
                _0x5a40d['resourceType']() === 'image' || _0x5a40d['resourceType']() === 'font' || _0x5a40d['resourceType']() === 'media' ? _0x5a40d['abort']() : _0x5a40d['continue']();
            }), await _0x41ac67['goto']('' + _0xf703ad[_0x2eb788]['Url'], { 'waitUntil': 'networkidle2' }), await _0x5bfa8d(0x12c);
            try {
                await _0x41ac67['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x41ac67['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x1c0231() + '\x20[' + _0x47b009['name'] + ']\x20Task\x20' + (_0x2eb788 + 0x1) + '\x20:\x20Logging\x20in'), await _0x41ac67['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x41ac67['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x41ac67['waitForSelector']('#username'), await _0x41ac67['type']('#username', _0xf703ad[_0x2eb788]['Email']), await _0x41ac67['waitForSelector']('#password'), await _0x41ac67['type']('#password', _0xf703ad[_0x2eb788]['Password']), await _0x5bfa8d(0x190), await _0x41ac67['click']('#buttonSubmit'), await _0x41ac67['waitForSelector']('div.b-user_greeting'), console['log'](_0x1c0231() + '\x20[' + _0x47b009['name'] + ']\x20Task\x20' + (_0x2eb788 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x5bfa8d(0x1f4), await _0x41ac67['goto']('' + _0xf703ad[_0x2eb788]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1c0231() + '\x20[' + _0x47b009['name'] + ']\x20Task\x20' + (_0x2eb788 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0xf703ad[_0x2eb788]['Size']);
            let _0x5e06ff = _0xf703ad[_0x2eb788]['Size']['replace']('.5', '\x201/2');
            await _0x41ac67['click']('button[title=\x22' + _0x5e06ff + '\x22]'), await _0x5bfa8d(0x1f4);
            try {
                await _0x41ac67['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x5bfa8d(0x12c), console['log'](_0x1c0231() + '\x20[' + _0x47b009['name'] + ']\x20Task\x20' + (_0x2eb788 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x41ac67['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x5bfa8d(0x12c), await _0x41ac67['type']('#dwfrm_raffle_addressFields_firstName', _0xf703ad[_0x2eb788]['FirstName']), await _0x5bfa8d(0x12c), await _0x41ac67['type']('#dwfrm_raffle_addressFields_lastName', _0xf703ad[_0x2eb788]['LastName']), await _0x5bfa8d(0x12c), await _0x41ac67['select']('#dwfrm_raffle_addressFields_country', _0xf703ad[_0x2eb788]['Country']), await _0x5bfa8d(0x12c), await _0x41ac67['type']('#dwfrm_raffle_addressFields_city', _0xf703ad[_0x2eb788]['City']), await _0x5bfa8d(0x12c);
            _0xf703ad[_0x2eb788]['Postcode'] == undefined && (_0xf703ad[_0x2eb788]['Postcode'] = _0xf703ad[_0x2eb788]['Zip']);
            await _0x41ac67['type']('#dwfrm_raffle_addressFields_postalCode', _0xf703ad[_0x2eb788]['Postcode']), await _0x5bfa8d(0x12c), await _0x41ac67['type']('#dwfrm_raffle_addressFields_address1', _0xf703ad[_0x2eb788]['Address1']), await _0x5bfa8d(0x12c), await _0x41ac67['type']('#dwfrm_raffle_addressFields_address2', _0xf703ad[_0x2eb788]['HouseNumber']), await _0x5bfa8d(0x12c), await _0x41ac67['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0xf703ad[_0x2eb788]['Address2']), await _0x5bfa8d(0x12c), await _0x41ac67['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x5bfa8d(0x12c), await _0x41ac67['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0xf703ad[_0x2eb788]['Follower']), await _0x5bfa8d(0x1f4), await _0x41ac67['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x5bfa8d(0x1f4), console['log'](_0x1c0231() + '\x20[' + _0x47b009['name'] + ']\x20Task\x20' + (_0x2eb788 + 0x1) + '\x20:\x20' + _0x59ec4b['blue']('Awaiting\x20Paypal\x20Payment')), await _0x41ac67['click']('.b-paypal_button');
            try {
                await _0x41ac67['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x59ec4b['green'](_0x1c0231() + '\x20[' + _0x47b009['name'] + ']\x20Task\x20' + (_0x2eb788 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '' && await _0x3e98c7(_0x413ed8['webhook'], _0x2e1331['succesDEVMSG']), await _0x5bfa8d(0xc8), await _0x3e98c7(_0xc93bfc, _0x2e1331['succesDEVMSG']), await _0x5bfa8d(0xc8), await _0x3e98c7(_0x29fdbb, _0x2e1331['succesPUBMSG']);
            } catch (_0x185e38) {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x47b009['name'] + ']\x20Task\x20' + (_0x2eb788 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x185e38)), _0x2d6a74 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x185e38;
                var _0x48d9ff = await _0x1bb9e2(_0xf703ad[_0x2eb788], _0x47b009, 'dev', !![], _0x2d6a74);
                _0x2e1331['errorDEV'] = { 'embeds': [_0x48d9ff] }, _0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '' && await _0x3e98c7(_0x413ed8['webhook'], _0x2e1331['errorDEV']), await _0x3e98c7(_0x4a6e1d, _0x2e1331['errorDEV']);
            }
        } catch (_0xc7adff) {
            console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x47b009['name'] + ']\x20Task\x20' + (_0x2eb788 + 0x1) + '\x20:\x20' + _0xc7adff)), _0x2d6a74 = '' + _0xc7adff;
            var _0x48d9ff = await _0x1bb9e2(_0xf703ad[_0x2eb788], _0x47b009, 'dev', !![], _0x2d6a74);
            _0x2e1331['errorDEV'] = { 'embeds': [_0x48d9ff] }, _0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '' && await _0x3e98c7(_0x413ed8['webhook'], _0x2e1331['errorDEV']), await _0x3e98c7(_0x4a6e1d, _0x2e1331['errorDEV']), _0x33d514 = 'yes';
        } finally {
            _0x163571 && _0x163571['close']();
            if (_0x33d514 == 'yes' && _0x20946a != 0x5) {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x47b009['name'] + ']\x20Task\x20' + (_0x2eb788 + 0x1) + '\x20:\x20Retrying')), _0x2eb788 = _0x2eb788 - 0x1, _0x20946a = _0x20946a + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x413ed8['AfewDelay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['AfewDelay']);
        }
    }
}
async function _0x23fd10(_0x3e33cd, _0x56d4b9) {
    _0x34c3d8['use'](_0x247c05()), _0x34c3d8['use'](_0x28915c({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x413ed8['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x517832 = 0x0; _0x517832 < bouncewear['length']; _0x517832++) {
        await _0x542345(bouncewear, _0x517832);
        if (bouncewear[_0x517832]['Email'] == '' || bouncewear[_0x517832]['Password'] == '' || bouncewear[_0x517832]['FirstName'] == '' || bouncewear[_0x517832]['LastName'] == '') {
            console['log'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0x517832 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x413ed8['useRandomProxy'] = ![])
            var _0x50ac61 = _0x1f2464()[_0x517832]['split'](':');
        else
            var _0x56dd30 = Math['round'](Math['random']() * (_0x1f2464()['length'] - 0x1)), _0x50ac61 = _0x1f2464()[_0x56dd30]['split'](':');
        const _0xafa3db = await _0x34c3d8['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x50ac61[0x0] + ':' + _0x50ac61[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5d90ca = await _0xafa3db['newPage']();
            await _0x5d90ca['authenticate']({
                'username': '' + _0x50ac61[0x2],
                'password': '' + _0x50ac61[0x3]
            }), console['log'](_0x1c0231() + '\x20[' + _0x56d4b9['name'] + ']\x20Task\x20' + (_0x517832 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5d90ca['setRequestInterception'](!![]), _0x5d90ca['on']('request', _0xd4f5e6 => {
                _0xd4f5e6['resourceType']() === 'image' || _0xd4f5e6['resourceType']() === 'font' || _0xd4f5e6['resourceType']() === 'media' ? _0xd4f5e6['abort']() : _0xd4f5e6['continue']();
            }), await _0x5d90ca['goto'](_0x3e33cd), await _0x5bfa8d(0xbb8), await _0x5d90ca['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1c0231() + '\x20[' + _0x56d4b9['name'] + ']\x20Task\x20' + (_0x517832 + 0x1) + '\x20:\x20Filling\x20information'), await _0x5d90ca['type']('#RegisterForm-FirstName', '' + bouncewear[_0x517832]['FirstName']), await _0x5bfa8d(0x226), await _0x5d90ca['type']('#RegisterForm-LastName', '' + bouncewear[_0x517832]['LastName']), await _0x5bfa8d(0x226), await _0x5d90ca['type']('#RegisterForm-email', '' + bouncewear[_0x517832]['Email']), await _0x5bfa8d(0x226), await _0x5d90ca['type']('#RegisterForm-password', '' + bouncewear[_0x517832]['Password']), await _0x5bfa8d(0x226), await _0x5d90ca['click']('#marketing'), console['log'](_0x1c0231() + '\x20[' + _0x56d4b9['name'] + ']\x20Task\x20' + (_0x517832 + 0x1) + '\x20:\x20Submitting..'), await _0x5d90ca['$eval']('#RegisterForm', _0x44e2bc => _0x44e2bc['submit']()), await _0x5bfa8d(0x1f40), console['log'](_0x1c0231() + '\x20[' + _0x56d4b9['name'] + ']\x20Task\x20' + (_0x517832 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x5d90ca['solveRecaptchas'](), await _0x5d90ca['click']('.shopify-challenge__button.btn');
            async function _0x18e02f() {
                for (var _0x2d7373 = 0x0; _0x2d7373 < 0x4; _0x2d7373++) {
                    try {
                        console['log']('try'), await _0x5d90ca['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x1c0231() + '\x20[' + _0x56d4b9['name'] + ']\x20Task\x20' + (_0x517832 + 0x1) + '\x20:\x20' + _0x59ec4b['red']('Catpcha\x20failed,\x20retrying..')), await _0x5d90ca['solveRecaptchas'](), await _0x5d90ca['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x18e02f(), console['log'](_0x1c0231() + '\x20[' + _0x56d4b9['name'] + ']\x20Task\x20' + (_0x517832 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x5bfa8d(0x1f4);
            try {
                await _0x5d90ca['waitForSelector']('.featured-title'), await _0x5bfa8d(0x1f4), console['log'](_0x59ec4b['green'](_0x1c0231() + '\x20[' + _0x56d4b9['name'] + ']\x20Task\x20' + (_0x517832 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x517832]['Email'] + '\x20Generated!')), _0x4957d2['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x517832]['Email'] + ',' + bouncewear[_0x517832]['Password']), console['log'](_0x59ec4b['yellow'](_0x1c0231() + '\x20[' + _0x56d4b9['name'] + ']\x20Task\x20' + (_0x517832 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x517832]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x16dbc4) {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0x517832 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x16dbc4));
            }
        } catch (_0x1363ab) {
            console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0x517832 + 0x1) + '\x20:\x20' + _0x1363ab));
        } finally {
            _0xafa3db && _0xafa3db['close'](), console['log']('Waiting\x20for\x20' + _0x413ed8['delay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['delay']);
        }
    }
}
async function _0x3c9d1c(_0x5be5c6, _0x12c528, _0x240f1f, _0x2f2a71) {
    _0x34c3d8['use'](_0x247c05()), _0x34c3d8['use'](_0x28915c({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x413ed8['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xd3aa6f = 0x0; _0xd3aa6f < _0x240f1f['length']; _0xd3aa6f++) {
        var _0x71761a = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3d4b33
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x413ed8['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2d0bbd
                }
            ]
        }];
        const _0x176a29 = { 'embeds': _0x71761a };
        _0x560768(_0x12c528['name'] + '\x20Task\x20' + (_0xd3aa6f + 0x1) + '\x20/\x20' + _0x240f1f['length'] + '\x20||\x20File:\x20' + _0x4ad4b6 + '\x20Proxies:\x20' + _0x513560), await _0x542345(_0x240f1f, _0xd3aa6f);
        var _0x291d01 = await _0x1bb9e2(_0x240f1f[_0xd3aa6f], _0x12c528, 'acc', ![]);
        const _0x1b2c02 = { 'succesDEVMSG': { 'embeds': [_0x291d01] } };
        if (_0x240f1f[_0xd3aa6f]['Email'] == '' || _0x240f1f[_0xd3aa6f]['FirstName'] == '' || _0x240f1f[_0xd3aa6f]['LastName'] == '') {
            console['log'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0xd3aa6f + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x5bfa8d(0x7d0);
            continue;
        }
        (_0x240f1f[_0xd3aa6f]['Password'] == '' || _0x240f1f[_0xd3aa6f] == undefined) && _0x240f1f[_0xd3aa6f]['Password'] == 'JRaffles23!';
        if (_0x413ed8['useRandomProxy'] = ![])
            var _0xa43496 = _0x2f2a71[_0xd3aa6f]['split'](':');
        else
            var _0x4b0bef = Math['round'](Math['random']() * (_0x2f2a71['length'] - 0x1)), _0xa43496 = _0x2f2a71[_0x4b0bef]['split'](':');
        const _0x3bb343 = await _0x34c3d8['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0xa43496[0x0] + ':' + _0xa43496[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x423ded = await _0x3bb343['newPage']();
            await _0x423ded['authenticate']({
                'username': '' + _0xa43496[0x2],
                'password': '' + _0xa43496[0x3]
            }), console['log'](_0x1c0231() + '\x20[' + _0x12c528['name'] + ']\x20Task\x20' + (_0xd3aa6f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x423ded['setRequestInterception'](!![]), _0x423ded['on']('request', _0x1679fe => {
                _0x1679fe['resourceType']() === 'image' || _0x1679fe['resourceType']() === 'font' || _0x1679fe['resourceType']() === 'media' ? _0x1679fe['abort']() : _0x1679fe['continue']();
            }), await _0x423ded['goto'](_0x5be5c6), await _0x5bfa8d(0xbb8), await _0x423ded['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1c0231() + '\x20[' + _0x12c528['name'] + ']\x20Task\x20' + (_0xd3aa6f + 0x1) + '\x20:\x20Filling\x20information'), await _0x423ded['type']('#RegisterForm-FirstName', '' + _0x240f1f[_0xd3aa6f]['FirstName']), await _0x5bfa8d(0x226), await _0x423ded['type']('#RegisterForm-LastName', '' + _0x240f1f[_0xd3aa6f]['LastName']), await _0x5bfa8d(0x226), await _0x423ded['type']('#RegisterForm-email', '' + _0x240f1f[_0xd3aa6f]['Email']), await _0x5bfa8d(0x226), await _0x423ded['type']('#RegisterForm-password', '' + _0x240f1f[_0xd3aa6f]['Password']), await _0x5bfa8d(0x226), console['log'](_0x1c0231() + '\x20[' + _0x12c528['name'] + ']\x20Task\x20' + (_0xd3aa6f + 0x1) + '\x20:\x20Submitting..'), await _0x423ded['$eval']('#RegisterForm', _0x32a946 => _0x32a946['submit']()), await _0x5bfa8d(0x1f40);
            try {
                await _0x423ded['waitForSelector']('.home-page-grid__collection'), await _0x5bfa8d(0x1f4), console['log'](_0x59ec4b['green'](_0x1c0231() + '\x20[' + _0x12c528['name'] + ']\x20Task\x20' + (_0xd3aa6f + 0x1) + '\x20:\x20Account\x20' + _0x240f1f[_0xd3aa6f]['Email'] + '\x20Generated!')), _0x4957d2['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x240f1f[_0xd3aa6f]['Email'] + ',' + _0x240f1f[_0xd3aa6f]['Password']), console['log'](_0x59ec4b['yellow'](_0x1c0231() + '\x20[' + _0x12c528['name'] + ']\x20Task\x20' + (_0xd3aa6f + 0x1) + '\x20:\x20Account\x20' + _0x240f1f[_0xd3aa6f]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '' && await _0x3e98c7(_0x413ed8['webhook'], _0x1b2c02['succesDEVMSG']);
                } catch {
                }
                await _0x3e98c7(_0x4ce0d4, _0x1b2c02['succesDEVMSG']);
            } catch (_0x370a6e) {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0xd3aa6f + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x370a6e));
            }
        } catch (_0x4232d3) {
            console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0xd3aa6f + 0x1) + '\x20:\x20' + _0x4232d3));
        } finally {
            _0x3bb343 && _0x3bb343['close'](), console['log']('Waiting\x20for\x20' + _0x413ed8['delay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['delay']);
        }
    }
}
async function _0x3a2bc9(_0x3f1646, _0x68bf80, _0x49623c, _0x4017a5) {
    _0x34c3d8['use'](_0x247c05()), _0x34c3d8['use'](_0x28915c({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x413ed8['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x21635d = 0x0; _0x21635d < _0x49623c['length']; _0x21635d++) {
        var _0x9b7427, _0x57587 = '', _0x471308 = 0x0;
        _0x560768(_0x68bf80['name'] + '\x20Task\x20' + (_0x21635d + 0x1) + '\x20/\x20' + _0x49623c['length'] + '\x20||\x20File:\x20' + _0x4ad4b6 + '\x20Proxies:\x20' + _0x513560), await _0x542345(_0x49623c, _0x21635d);
        if (_0x49623c[_0x21635d]['Email'] == '' || _0x49623c[_0x21635d]['Password'] == '' || _0x49623c[_0x21635d]['FirstName'] == '' || _0x49623c[_0x21635d]['LastName'] == '') {
            console['log'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0x21635d + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x413ed8['useRandomProxy'] = ![])
            var _0x532779 = _0x4017a5[_0x21635d]['split'](':');
        else
            var _0x288970 = Math['round'](Math['random']() * (_0x4017a5['length'] - 0x1)), _0x532779 = _0x4017a5[_0x288970]['split'](':');
        const _0x418769 = await _0x34c3d8['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x532779[0x0] + ':' + _0x532779[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xdec7bf = await _0x418769['newPage']();
            await _0xdec7bf['authenticate']({
                'username': '' + _0x532779[0x2],
                'password': '' + _0x532779[0x3]
            }), console['log'](_0x1c0231() + '\x20[' + _0x68bf80['name'] + ']\x20Task\x20' + (_0x21635d + 0x1) + '\x20:\x20Getting\x20Session'), await _0xdec7bf['setRequestInterception'](!![]), _0xdec7bf['on']('request', _0x50ab28 => {
                _0x50ab28['resourceType']() === 'image' || _0x50ab28['resourceType']() === 'font' || _0x50ab28['resourceType']() === 'media' ? _0x50ab28['abort']() : _0x50ab28['continue']();
            }), await _0xdec7bf['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0xdec7bf['waitForSelector']('#CustomerEmail'), console['log'](_0x1c0231() + '\x20[' + _0x68bf80['name'] + ']\x20Task\x20' + (_0x21635d + 0x1) + '\x20:\x20Logging\x20in..'), await _0xdec7bf['type']('#CustomerEmail', '' + _0x49623c[_0x21635d]['Email']), await _0x5bfa8d(0x12c), await _0xdec7bf['type']('#CustomerPassword', '' + _0x49623c[_0x21635d]['Password']), await _0x5bfa8d(0x226), await _0xdec7bf['$eval']('#customer_login', _0x37147d => _0x37147d['submit']());
            try {
                await _0xdec7bf['waitForSelector']('#orders'), await _0x5bfa8d(0x4b0);
            } catch {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x68bf80['name'] + ']\x20Task\x20' + (_0x21635d + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0xdec7bf['goto']('' + _0x49623c[_0x21635d]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x5bfa8d(0xbb8), console['log'](_0x1c0231() + '\x20[' + _0x68bf80['name'] + ']\x20Task\x20' + (_0x21635d + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0xdec7bf['waitForSelector']('#email');
            } catch {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x68bf80['name'] + ']\x20Task\x20' + (_0x21635d + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0xdec7bf['type']('#email', '' + _0x49623c[_0x21635d]['Email']), await _0x5bfa8d(0x384), await _0xdec7bf['type']('#first_name', '' + _0x49623c[_0x21635d]['FirstName']), await _0x5bfa8d(0x514), await _0xdec7bf['type']('#last_name', '' + _0x49623c[_0x21635d]['LastName']), await _0x5bfa8d(0x514), await _0xdec7bf['type']('#street_address', _0x49623c[_0x21635d]['Address1'] + '\x20' + _0x49623c[_0x21635d]['HouseNumber'] + '\x20' + _0x49623c[_0x21635d]['Address2']), await _0x5bfa8d(0x2bc);
            _0x49623c[_0x21635d]['Postcode'] == undefined && (_0x49623c[_0x21635d]['Postcode'] = _0x49623c[_0x21635d]['Zip']);
            await _0xdec7bf['type']('#zip_code', '' + _0x49623c[_0x21635d]['Postcode']), await _0x5bfa8d(0x320), await _0xdec7bf['type']('#city', '' + _0x49623c[_0x21635d]['City']), await _0x5bfa8d(0x320), await _0xdec7bf['type']('#bday', '01/01/1994'), await _0x5bfa8d(0x320), await _0xdec7bf['type']('#instagram', '' + _0x49623c[_0x21635d]['Follower']), await _0x5bfa8d(0x352);
            if (_0x49623c[_0x21635d]['Size'] == 'RANDOM') {
                const _0x4225a5 = await _0xdec7bf['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x565fde => {
                    return _0x565fde['map'](_0x50afa8 => _0x50afa8['textContent']);
                });
                var _0xf283a0 = Math['round'](Math['random']() * (_0x4225a5['length'] - 0x1));
                console['log'](_0x1c0231() + '\x20[' + _0x68bf80['name'] + ']\x20Task\x20' + (_0x21635d + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x4225a5[_0xf283a0]), await _0xdec7bf['click']('label[data-eu-size=\x22' + _0x4225a5[_0xf283a0] + '\x22]');
            } else {
                console['log'](_0x1c0231() + '\x20[' + _0x68bf80['name'] + ']\x20Task\x20' + (_0x21635d + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x49623c[_0x21635d]['Size']);
                try {
                    await _0xdec7bf['click']('label[data-eu-size=\x22' + _0x49623c[_0x21635d]['Size'] + '\x22]');
                } catch {
                    await _0xdec7bf['click']('label[data-eu-size=\x22' + _0x49623c[_0x21635d]['Size'] + '.0\x22]');
                }
            }
            await _0x5bfa8d(0xbb8), await _0xdec7bf['$$eval']('.raffle__checkbox-label', _0x5f2724 => _0x5f2724['forEach'](_0x267fee => _0x267fee['click']())), await _0x5bfa8d(0x7d0), console['log'](_0x1c0231() + '\x20[' + _0x68bf80['name'] + ']\x20Task\x20' + (_0x21635d + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0xdec7bf['click']('#raffle__form-submit'), await _0x5bfa8d(0x1388);
            try {
                await _0xdec7bf['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x59ec4b['green'](_0x1c0231() + '\x20[' + _0x68bf80['name'] + ']\x20Task\x20' + (_0x21635d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x20cb38) {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0x21635d + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x20cb38));
            }
        } catch (_0x131451) {
            console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0x21635d + 0x1) + '\x20:\x20' + _0x131451)), _0x57587 = 'yes';
        } finally {
            _0x418769 && _0x418769['close']();
            if (_0x57587 == 'yes' && _0x471308 != 0x5) {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x68bf80['name'] + ']\x20Task\x20' + (_0x21635d + 0x1) + '\x20:\x20Retrying')), _0x21635d = _0x21635d - 0x1, _0x471308 = _0x471308 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x413ed8['delay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['delay']);
        }
    }
}
async function _0x481bb0(_0x4ecb8c, _0x25dd06, _0x1a2a4e, _0x3c12f4) {
    _0x34c3d8['use'](_0x247c05()), _0x34c3d8['use'](_0x28915c({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x413ed8['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xde1203 = 0x0; _0xde1203 < _0x1a2a4e['length']; _0xde1203++) {
        var _0x3a7fd1 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3d4b33
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x413ed8['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2d0bbd
                }
            ]
        }];
        const _0x388ec6 = { 'embeds': _0x3a7fd1 };
        _0x560768(_0x25dd06['name'] + '\x20Task\x20' + (_0xde1203 + 0x1) + '\x20/\x20' + _0x1a2a4e['length'] + '\x20||\x20File:\x20' + _0x4ad4b6 + '\x20Proxies:\x20' + _0x513560), await _0x542345(_0x1a2a4e, _0xde1203);
        var _0x13d03d = await _0x1bb9e2(_0x1a2a4e[_0xde1203], _0x25dd06, 'acc', ![]);
        const _0x34ba81 = { 'succesDEVMSG': { 'embeds': [_0x13d03d] } };
        if (_0x1a2a4e[_0xde1203]['Email'] == '' || _0x1a2a4e[_0xde1203]['FirstName'] == '' || _0x1a2a4e[_0xde1203]['LastName'] == '') {
            console['log'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0xde1203 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x5bfa8d(0x7d0);
            continue;
        }
        (_0x1a2a4e[_0xde1203]['Password'] == '' || _0x1a2a4e[_0xde1203] == undefined) && _0x1a2a4e[_0xde1203]['Password'] == 'JRaffles23!';
        if (_0x413ed8['useRandomProxy'] = ![])
            var _0x1b7f3c = _0x3c12f4[_0xde1203]['split'](':');
        else
            var _0x10719f = Math['round'](Math['random']() * (_0x3c12f4['length'] - 0x1)), _0x1b7f3c = _0x3c12f4[_0x10719f]['split'](':');
        const _0x577bc3 = await _0x34c3d8['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1b7f3c[0x0] + ':' + _0x1b7f3c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3f33c0 = await _0x577bc3['newPage']();
            await _0x3f33c0['authenticate']({
                'username': '' + _0x1b7f3c[0x2],
                'password': '' + _0x1b7f3c[0x3]
            }), console['log'](_0x1c0231() + '\x20[' + _0x25dd06['name'] + ']\x20Task\x20' + (_0xde1203 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3f33c0['setRequestInterception'](!![]), _0x3f33c0['on']('request', _0xca53fe => {
                _0xca53fe['resourceType']() === 'image' || _0xca53fe['resourceType']() === 'font' || _0xca53fe['resourceType']() === 'media' ? _0xca53fe['abort']() : _0xca53fe['continue']();
            }), await _0x3f33c0['goto']('https://drop.slamjam.com/account/register'), await _0x5bfa8d(0xbb8), await _0x3f33c0['waitForSelector']('#FirstName'), await _0x3f33c0['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3f33c0['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x1c0231() + '\x20[' + _0x25dd06['name'] + ']\x20Task\x20' + (_0xde1203 + 0x1) + '\x20:\x20Filling\x20information'), await _0x5bfa8d(0x4b0), await _0x3f33c0['type']('#FirstName', '' + _0x1a2a4e[_0xde1203]['FirstName']), await _0x5bfa8d(0x226), await _0x3f33c0['type']('#LastName', '' + _0x1a2a4e[_0xde1203]['LastName']), await _0x5bfa8d(0x226), await _0x3f33c0['type']('#Email', '' + _0x1a2a4e[_0xde1203]['Email']), await _0x5bfa8d(0x2ee), await _0x3f33c0['type']('#ConfirmEmail', '' + _0x1a2a4e[_0xde1203]['Email']), await _0x5bfa8d(0x2ee), await _0x3f33c0['type']('#CreatePassword', '' + _0x1a2a4e[_0xde1203]['Password']), await _0x5bfa8d(0x2ee), await _0x3f33c0['type']('#CreateConfirmPassword', '' + _0x1a2a4e[_0xde1203]['Password']), await _0x5bfa8d(0x226), console['log'](_0x1c0231() + '\x20[' + _0x25dd06['name'] + ']\x20Task\x20' + (_0xde1203 + 0x1) + '\x20:\x20Submitting..'), await _0x3f33c0['$eval']('#create_customer', _0x1d7e91 => _0x1d7e91['submit']()), await _0x5bfa8d(0x1388), console['log'](_0x1c0231() + '\x20[' + _0x25dd06['name'] + ']\x20Task\x20' + (_0xde1203 + 0x1) + '\x20:\x20' + _0x59ec4b['cyan']('Solving\x20Captcha')), await _0x3f33c0['solveRecaptchas'](), console['log'](_0x1c0231() + '\x20[' + _0x25dd06['name'] + ']\x20Task\x20' + (_0xde1203 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x3f33c0['$eval']('.shopify-challenge__container\x20>\x20form', _0x4315a6 => _0x4315a6['submit']());
            try {
                await _0x3f33c0['waitForSelector']('.product-card__image'), await _0x5bfa8d(0x1f4), console['log'](_0x59ec4b['green'](_0x1c0231() + '\x20[' + _0x25dd06['name'] + ']\x20Task\x20' + (_0xde1203 + 0x1) + '\x20:\x20Account\x20' + _0x1a2a4e[_0xde1203]['Email'] + '\x20Generated!')), _0x4957d2['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x1a2a4e[_0xde1203]['Email'] + ',' + _0x1a2a4e[_0xde1203]['Password']), console['log'](_0x59ec4b['yellow'](_0x1c0231() + '\x20[' + _0x25dd06['name'] + ']\x20Task\x20' + (_0xde1203 + 0x1) + '\x20:\x20Account\x20' + _0x1a2a4e[_0xde1203]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '' && await _0x3e98c7(_0x413ed8['webhook'], _0x34ba81['succesDEVMSG']);
                } catch {
                }
                await _0x3e98c7(_0x4ce0d4, _0x34ba81['succesDEVMSG']);
            } catch (_0x1d1e8e) {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0xde1203 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1d1e8e));
            }
        } catch (_0x3d716b) {
            console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0xde1203 + 0x1) + '\x20:\x20' + _0x3d716b));
        } finally {
            _0x577bc3 && _0x577bc3['close'](), console['log']('Waiting\x20for\x20' + _0x413ed8['delay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['delay']);
        }
    }
}
async function _0x428584(_0x5cd483, _0xc3929b, _0x29ea5c, _0x480b0a) {
    _0x34c3d8['use'](_0x247c05()), _0x34c3d8['use'](_0x28915c({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x413ed8['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2720f5 = 0x0; _0x2720f5 < _0x29ea5c['length']; _0x2720f5++) {
        var _0x100db4, _0x285827 = '', _0x58433c = 0x0;
        _0x560768(_0xc3929b['name'] + '\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20/\x20' + _0x29ea5c['length'] + '\x20||\x20File:\x20' + _0x4ad4b6 + '\x20Proxies:\x20' + _0x513560), await _0x542345(_0x29ea5c, _0x2720f5);
        if (_0x29ea5c[_0x2720f5]['Email'] == '' || _0x29ea5c[_0x2720f5]['Password'] == '' || _0x29ea5c[_0x2720f5]['FirstName'] == '' || _0x29ea5c[_0x2720f5]['LastName'] == '') {
            console['log'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x413ed8['useRandomProxy'] = ![])
            var _0x15c88d = _0x480b0a[_0x2720f5]['split'](':');
        else
            var _0x1286d6 = Math['round'](Math['random']() * (_0x480b0a['length'] - 0x1)), _0x15c88d = _0x480b0a[_0x1286d6]['split'](':');
        const _0x1eec10 = await _0x34c3d8['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x15c88d[0x0] + ':' + _0x15c88d[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0xb6cc83 = await _0x1eec10['newPage']();
            await _0xb6cc83['authenticate']({
                'username': '' + _0x15c88d[0x2],
                'password': '' + _0x15c88d[0x3]
            }), await _0xb6cc83['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x1c0231() + '\x20[' + _0xc3929b['name'] + ']\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xb6cc83['setRequestInterception'](!![]), _0xb6cc83['on']('request', _0x9b24cb => {
                _0x9b24cb['resourceType']() === 'image' || _0x9b24cb['resourceType']() === 'font' || _0x9b24cb['resourceType']() === 'media' ? _0x9b24cb['abort']() : _0x9b24cb['continue']();
            }), await _0xb6cc83['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0xb6cc83['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xb6cc83['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5bfa8d(0x258), await _0xb6cc83['waitForSelector']('#CustomerEmail'), console['log'](_0x1c0231() + '\x20[' + _0xc3929b['name'] + ']\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20:\x20Logging\x20in..'), await _0xb6cc83['type']('#CustomerEmail', '' + _0x29ea5c[_0x2720f5]['Email']), await _0x5bfa8d(0x12c), await _0xb6cc83['type']('#CustomerPassword', '' + _0x29ea5c[_0x2720f5]['Password']), await _0x5bfa8d(0x226), await _0xb6cc83['$eval']('#customer_login', _0x39af04 => _0x39af04['submit']()), await _0x5bfa8d(0x7d0), await _0xb6cc83['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x1c0231() + '\x20[' + _0xc3929b['name'] + ']\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20:\x20' + _0x59ec4b['cyan']('Solving\x20Captcha')), await _0xb6cc83['solveRecaptchas'](), console['log'](_0x1c0231() + '\x20[' + _0xc3929b['name'] + ']\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0xb6cc83['$eval']('.shopify-challenge__container\x20>\x20form', _0x1e10e3 => _0x1e10e3['submit']());
            try {
                await _0xb6cc83['waitForSelector']('.nav-account'), await _0x5bfa8d(0x4b0);
            } catch {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0xc3929b['name'] + ']\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0xb6cc83['goto']('' + _0x29ea5c[_0x2720f5]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x5bfa8d(0xbb8), console['log'](_0x1c0231() + '\x20[' + _0xc3929b['name'] + ']\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0xb6cc83['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0xb6cc83['click']('.product-select-variant-wrapper'), await _0x5bfa8d(0x320), await _0xb6cc83['click']('li.product-select-variant__value[data-size=\x22' + _0x29ea5c[_0x2720f5]['Size'] + '\x22]'), await _0x5bfa8d(0x384), await _0xb6cc83['$eval']('#AddToCartForm-product-template-raffle', _0x358302 => _0x358302['submit']()), await _0xb6cc83['waitForSelector']('.cart-order-summary__content'), await _0x5bfa8d(0x514), await _0xb6cc83['goto']('https://drop.slamjam.com/checkout'), await _0x5bfa8d(0x514), await _0xb6cc83['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x1c0231() + '\x20[' + _0xc3929b['name'] + ']\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20:\x20Filling\x20Information'), await _0xb6cc83['select']('#checkout_shipping_address_country', '' + _0x29ea5c[_0x2720f5]['Country']), await _0x5bfa8d(0x200), await _0xb6cc83['waitForSelector']('#checkout_shipping_address_first_name'), await _0xb6cc83['type']('#checkout_shipping_address_first_name', '' + _0x29ea5c[_0x2720f5]['FirstName']), await _0x5bfa8d(0x237), await _0xb6cc83['type']('#checkout_shipping_address_last_name', '' + _0x29ea5c[_0x2720f5]['LastName']), await _0x5bfa8d(0x1e0), await _0xb6cc83['type']('#checkout_shipping_address_address1', _0x29ea5c[_0x2720f5]['Address1'] + '\x20' + _0x29ea5c[_0x2720f5]['HouseNumber']), await _0x5bfa8d(0x514), await _0xb6cc83['type']('#checkout_shipping_address_address2', '' + _0x29ea5c[_0x2720f5]['Address2']), await _0x5bfa8d(0x514);
            _0x29ea5c[_0x2720f5]['Postcode'] == undefined && (_0x29ea5c[_0x2720f5]['Postcode'] = _0x29ea5c[_0x2720f5]['Zip']);
            await _0xb6cc83['type']('#checkout_shipping_address_zip', '' + _0x29ea5c[_0x2720f5]['Postcode']), await _0x5bfa8d(0x2bc), await _0xb6cc83['type']('#checkout_shipping_address_city', '' + _0x29ea5c[_0x2720f5]['City']), await _0x5bfa8d(0x320), await _0xb6cc83['type']('#checkout_shipping_address_phone', '' + _0x29ea5c[_0x2720f5]['Phone']), await _0x5bfa8d(0x320), await _0xb6cc83['click']('#continue_button'), await _0x5bfa8d(0xbb8), await _0xb6cc83['waitForSelector']('.summary-title'), await _0x5bfa8d(0x320), await _0xb6cc83['click']('#continue_button'), await _0x5bfa8d(0x320), console['log'](_0x1c0231() + '\x20[' + _0xc3929b['name'] + ']\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0xb6cc83['waitForSelector']('#checkout_credit_card_vault'), await _0x5bfa8d(0x3e8);
            var _0xbc78c5 = await _0xb6cc83['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x1f57b5 = await _0xbc78c5['contentFrame']();
            await _0x1f57b5['click']('#number'), await _0x5bfa8d(0x3e8), await _0x1f57b5['type']('#number', '' + _0x29ea5c[_0x2720f5]['CardNumber'], { 'delay': 0x78 }), _0xbc78c5 = await _0xb6cc83['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x1f57b5 = await _0xbc78c5['contentFrame'](), await _0x5bfa8d(0x1c2), await _0x1f57b5['click']('#name'), await _0x5bfa8d(0x1f4), await _0x1f57b5['type']('#name', '' + _0x29ea5c[_0x2720f5]['NameOnCard'], { 'delay': 0x78 }), _0xbc78c5 = await _0xb6cc83['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x1f57b5 = await _0xbc78c5['contentFrame'](), await _0x5bfa8d(0x1c2), await _0x1f57b5['click']('#expiry'), await _0x5bfa8d(0x1f4), await _0x1f57b5['type']('#expiry', '' + _0x29ea5c[_0x2720f5]['ExpiryDate'], { 'delay': 0x78 }), _0xbc78c5 = await _0xb6cc83['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x1f57b5 = await _0xbc78c5['contentFrame'](), await _0x5bfa8d(0x1c2), await _0x1f57b5['click']('#verification_value'), await _0x5bfa8d(0x1f4), await _0x1f57b5['type']('#verification_value', '' + _0x29ea5c[_0x2720f5]['CVV'], { 'delay': 0x78 }), await _0xb6cc83['$eval']('#accepts-flag-raffle', _0x9c3119 => _0x9c3119['click']()), await _0x5bfa8d(0x7d0), console['log'](_0x1c0231() + '\x20[' + _0xc3929b['name'] + ']\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20:\x20Processing\x20Order'), await _0xb6cc83['$eval']('#continue_button', _0x3147f1 => _0x3147f1['click']()), await _0x5bfa8d(0x1b58), await _0xb6cc83['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0xb6cc83['$eval']('.edit_checkout.animate-floating-labels', _0x128d6a => _0x128d6a['submit']()), await _0x5bfa8d(0x7d0);
            try {
                await _0xb6cc83['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), console['log'](_0x59ec4b['green'](_0x1c0231() + '\x20[' + _0xc3929b['name'] + ']\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x414b8b) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x414b8b['message']);
            }
            var _0x373309 = await _0x1bb9e2(_0x29ea5c[_0x2720f5], _0xc3929b, 'dev', ![]), _0x15db37 = await _0x1bb9e2(_0x29ea5c[_0x2720f5], _0xc3929b, 'pub', ![]);
            const _0x475cdd = {
                'succesDEVMSG': { 'embeds': [_0x373309] },
                'succesPUBMSG': { 'embeds': [_0x15db37] }
            };
            try {
                _0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '' && await _0x3e98c7(_0x413ed8['webhook'], _0x475cdd['succesDEVMSG']), await _0x5bfa8d(0xc8), await _0x3e98c7(_0xc93bfc, _0x475cdd['succesDEVMSG']), await _0x5bfa8d(0xc8), await _0x3e98c7(_0x29fdbb, _0x475cdd['succesPUBMSG']);
            } catch (_0x3bd1a1) {
                console['log'](_0x59ec4b['yellow'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3bd1a1));
            }
        } catch (_0x147e8a) {
            console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20:\x20' + _0x147e8a)), _0x100db4 = '' + _0x147e8a;
            var _0x93b771 = await _0x1bb9e2(kickz[_0x2720f5], _0xc3929b, 'dev', !![], _0x100db4);
            EMBEDS['errorDEV'] = { 'embeds': [_0x93b771] }, _0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '' && await _0x3e98c7(_0x413ed8['webhook'], EMBEDS['errorDEV']), await _0x3e98c7(_0x4a6e1d, EMBEDS['errorDEV']), _0x285827 = 'yes';
        } finally {
            _0x1eec10 && _0x1eec10['close']();
            if (_0x285827 == 'yes' && _0x58433c != 0x5) {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0xc3929b['name'] + ']\x20Task\x20' + (_0x2720f5 + 0x1) + '\x20:\x20Retrying')), _0x2720f5 = _0x2720f5 - 0x1, _0x58433c = _0x58433c + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x413ed8['delay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['delay']);
        }
    }
}
async function _0x7e01d3(_0x4cb5e3, _0x5cc544, _0x2102e2) {
    var _0x1dc14f = ![], _0x4bd6e5 = ![];
    if (_0x413ed8['captchaKey'] == '' || _0x413ed8['captchaKey'] == undefined)
        return console['log'](_0x59ec4b['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x34c3d8['use'](_0x247c05()), _0x34c3d8['use'](_0x28915c({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x413ed8['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1a9779 = 0x0; _0x1a9779 < _0x5cc544['length']; _0x1a9779++) {
        var _0x21fc7b, _0x29de4c = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x5cc544[_0x1a9779]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5cc544[_0x1a9779]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x3d4b33
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x413ed8['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2d0bbd
                }
            ]
        }];
        const _0x242edd = { 'embeds': _0x29de4c };
        _0x560768(_0x4cb5e3['name'] + '\x20Task\x20' + (_0x1a9779 + 0x1) + '\x20/\x20' + _0x5cc544['length'] + '\x20||\x20File:\x20' + _0x4ad4b6 + '\x20Proxies:\x20' + _0x513560), await _0x542345(_0x5cc544, _0x1a9779);
        var _0x44c65d = await _0x1bb9e2(_0x5cc544[_0x1a9779], _0x4cb5e3, 'dev', ![]), _0x4c904e = await _0x1bb9e2(_0x5cc544[_0x1a9779], _0x4cb5e3, 'pub', ![]);
        const _0x564f25 = {
            'succesDEVMSG': { 'embeds': [_0x44c65d] },
            'succesPUBMSG': { 'embeds': [_0x4c904e] }
        };
        if (_0x5cc544[_0x1a9779]['Email'] == '' || _0x5cc544[_0x1a9779]['Url'] == '' || _0x5cc544[_0x1a9779]['FirstName'] == '' || _0x5cc544[_0x1a9779]['LastName'] == '') {
            console['log'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0x1a9779 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x413ed8['useRandomProxy'] = ![])
            var _0x445af1 = _0x2102e2[_0x1a9779]['split'](':');
        else
            var _0x2ef63e = Math['round'](Math['random']() * (_0x2102e2['length'] - 0x1)), _0x445af1 = _0x2102e2[_0x2ef63e]['split'](':');
        const _0x29bd57 = await _0x34c3d8['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x445af1[0x0] + ':' + _0x445af1[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1ade8f = await _0x29bd57['newPage']();
            await _0x1ade8f['authenticate']({
                'username': '' + _0x445af1[0x2],
                'password': '' + _0x445af1[0x3]
            }), console['log'](_0x1c0231() + '\x20[' + _0x4cb5e3['name'] + ']\x20Task\x20' + (_0x1a9779 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1ade8f['setRequestInterception'](!![]), _0x1ade8f['on']('request', _0x57c90d => {
                _0x57c90d['resourceType']() === 'image' || _0x57c90d['resourceType']() === 'font' || _0x57c90d['resourceType']() === 'media' ? _0x57c90d['abort']() : _0x57c90d['continue']();
            }), await _0x1ade8f['goto']('' + _0x5cc544[_0x1a9779]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x1ade8f['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x1c0231() + '\x20[' + _0x4cb5e3['name'] + ']\x20Task\x20' + (_0x1a9779 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1ade8f['type']('#comp_firstname', '' + _0x5cc544[_0x1a9779]['FirstName']), await _0x1ade8f['waitForSelector']('#comp_lastname'), await _0x1ade8f['type']('#comp_lastname', '' + _0x5cc544[_0x1a9779]['LastName']), await _0x1ade8f['waitForSelector']('#comp_email'), await _0x1ade8f['type']('#comp_email', '' + _0x5cc544[_0x1a9779]['Email']), await _0x1ade8f['waitForSelector']('#comp_paypalemail'), await _0x1ade8f['type']('#comp_paypalemail', '' + _0x5cc544[_0x1a9779]['Email']), await _0x1ade8f['waitForSelector']('#comp_mobile_end'), await _0x1ade8f['type']('#comp_mobile_end', '' + _0x5cc544[_0x1a9779]['Phone']), await _0x1ade8f['waitForSelector']('#comp_dob'), await _0x1ade8f['type']('#comp_dob', '08/09/1992'), console['log'](_0x1c0231() + '\x20[' + _0x4cb5e3['name'] + ']\x20Task\x20' + (_0x1a9779 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x5cc544[_0x1a9779]['Size'] == 'RANDOM') {
                const _0x2f42e6 = await _0x1ade8f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x30e875 => {
                    return _0x30e875['map'](_0x1423ce => _0x1423ce['value']);
                });
                var _0x87aed3 = Math['round'](Math['random']() * (_0x2f42e6['length'] - 0x2));
                await _0x1ade8f['select']('#shoesize', _0x2f42e6[_0x87aed3 + 0x1]), await _0x5bfa8d(0x3e8);
            } else {
                const _0x1facbb = await _0x1ade8f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x22853f => {
                    return _0x22853f['map'](_0x1e7f5f => _0x1e7f5f['innerText']);
                }), _0x3c74f3 = await _0x1ade8f['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1ad53e => {
                    return _0x1ad53e['map'](_0x362d84 => _0x362d84['value']);
                });
                var _0x36c67b = _0x5cc544[_0x1a9779]['Size'];
                for (var _0x271f34 = 0x1; _0x271f34 < _0x3c74f3['length']; _0x271f34++) {
                    var _0x208542 = _0x1facbb[_0x271f34]['split']('\x20')[0x0];
                    if (_0x208542 == _0x36c67b) {
                        await _0x1ade8f['select']('#shoesize', _0x3c74f3[_0x271f34]);
                        break;
                    } else {
                        if (_0x271f34 + 0x1 == _0x3c74f3['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x1ade8f['waitForSelector']('#comp_address1'), await _0x1ade8f['type']('#comp_address1', _0x5cc544[_0x1a9779]['Address1'] + '\x20' + _0x5cc544[_0x1a9779]['HouseNumber']), await _0x1ade8f['waitForSelector']('#comp_address2'), await _0x1ade8f['type']('#comp_address2', '' + _0x5cc544[_0x1a9779]['Address2']), await _0x1ade8f['waitForSelector']('#comp_address2'), await _0x1ade8f['type']('#comp_address3', '' + _0x5cc544[_0x1a9779]['City']), await _0x1ade8f['waitForSelector']('#comp_postcode'), await _0x1ade8f['type']('#comp_postcode', '' + _0x5cc544[_0x1a9779]['Zip']), console['log'](_0x1c0231() + '\x20[' + _0x4cb5e3['name'] + ']\x20Task\x20' + (_0x1a9779 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5bfa8d(0x4b0), await _0x1ade8f['click']('label#emailhold'), await _0x5bfa8d(0x5dc), await _0x1ade8f['click']('#preauth_tandc_email\x20>\x20label'), await _0x5bfa8d(0x5dc), await _0x1ade8f['click']('#submit'), await _0x1ade8f['waitForSelector']('#paymentWrap'), console['log'](_0x1c0231() + '\x20[' + _0x4cb5e3['name'] + ']\x20Task\x20' + (_0x1a9779 + 0x1) + '\x20:\x20' + _0x59ec4b['blue']('Awaiting\x20Paypal\x20Payment')), _0x29bd57['on']('targetcreated', async _0xee23a9 => {
                if (_0xee23a9['type']() === 'page') {
                    const _0x5c2ba = await _0xee23a9['page']();
                    async function _0x2b8137() {
                        try {
                            await _0x1ade8f['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x4bd6e5 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x11a73f() {
                        try {
                            await _0x1ade8f['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x1dc14f = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x11a73f(), _0x2b8137(), await _0x5bfa8d(0x493e0);
                }
            });
            async function _0x244add() {
                for (let _0x4a2545 = 0x0; _0x4a2545 < 0x12c; _0x4a2545++) {
                    if (_0x1dc14f == !![]) {
                        console['log'](_0x59ec4b['green'](_0x1c0231() + '\x20[' + _0x4cb5e3['name'] + ']\x20Task\x20' + (_0x1a9779 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '')
                            try {
                                await _0x3e98c7(_0x413ed8['webhook'], _0x564f25['succesDEVMSG']);
                            } catch {
                            }
                        await _0x5bfa8d(0xc8), await _0x3e98c7(_0xc93bfc, _0x564f25['succesDEVMSG']), await _0x5bfa8d(0xc8);
                        try {
                            await _0x3e98c7(_0x29fdbb, _0x564f25['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x4bd6e5)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x5bfa8d(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x5bfa8d(0xbb8), await _0x1ade8f['click']('.zoid-outlet'), await _0x5bfa8d(0x7d0), await _0x244add();
        } catch (_0x1d21d6) {
            console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x4cb5e3['name'] + ']\x20Task\x20' + (_0x1a9779 + 0x1) + '\x20:\x20' + _0x1d21d6)), _0x21fc7b = '' + _0x1d21d6;
            var _0x53ae8f = await _0x1bb9e2(_0x5cc544[_0x1a9779], _0x4cb5e3, 'dev', !![], _0x21fc7b);
            _0x564f25['errorDEV'] = { 'embeds': [_0x53ae8f] }, _0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '' && await _0x3e98c7(_0x413ed8['webhook'], _0x564f25['errorDEV']), await _0x3e98c7(_0x4a6e1d, _0x564f25['errorDEV']);
        } finally {
            _0x29bd57 && _0x29bd57['close'](), console['log']('Waiting\x20for\x20' + _0x413ed8['delay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['delay']);
        }
    }
}
async function _0x1d84c6(_0x3126e7, _0x3b322a, _0x536e47) {
    _0x34c3d8['use'](_0x247c05()), _0x34c3d8['use'](_0x28915c({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x413ed8['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1ad24c = 0x0; _0x1ad24c < _0x3b322a['length']; _0x1ad24c++) {
        _0x560768(_0x3126e7['name'] + '\x20Task\x20' + (_0x1ad24c + 0x1) + '\x20/\x20' + _0x3b322a['length'] + '\x20||\x20File:\x20' + _0x4ad4b6 + '\x20Proxies:\x20' + _0x513560);
        var _0x221aa3 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3d4b33
                },
                {
                    'name': 'Product',
                    'value': '' + _0x3b322a[_0x1ad24c]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3b322a[_0x1ad24c]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x413ed8['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x413ed8['version']
                }
            ]
        }];
        const _0x4a817d = { 'embeds': _0x221aa3 };
        await _0x542345(_0x3b322a, _0x1ad24c);
        if (_0x3b322a[_0x1ad24c]['Email'] == '' || _0x3b322a[_0x1ad24c]['Password'] == '' || _0x3b322a[_0x1ad24c]['FirstName'] == '' || _0x3b322a[_0x1ad24c]['LastName'] == '') {
            console['log'](_0x1c0231() + '\x20[' + _0x3126e7['name'] + ']\x20Task\x20' + (_0x1ad24c + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x3b322a[_0x1ad24c]['Password'] == '' || _0x3b322a[_0x1ad24c]['Password'] == undefined) && (_0x3b322a[_0x1ad24c]['Password'] = 'ErehsaWonRaj1!');
        if (_0x413ed8['useRandomProxy'] = ![])
            var _0xe63104 = _0x536e47[_0x1ad24c]['split'](':');
        else
            var _0xb7e52a = Math['round'](Math['random']() * (_0x536e47['length'] - 0x1)), _0xe63104 = _0x536e47[_0xb7e52a]['split'](':');
        const _0x35cc3d = await _0x34c3d8['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xe63104[0x0] + ':' + _0xe63104[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5ec23a = await _0x35cc3d['newPage']();
            await _0x5ec23a['authenticate']({
                'username': '' + _0xe63104[0x2],
                'password': '' + _0xe63104[0x3]
            }), console['log'](_0x1c0231() + '\x20[' + _0x3126e7['name'] + ']\x20Task\x20' + (_0x1ad24c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5ec23a['setRequestInterception'](!![]), _0x5ec23a['on']('request', _0x2cf3ab => {
                _0x2cf3ab['resourceType']() === 'image' || _0x2cf3ab['resourceType']() === 'font' || _0x2cf3ab['resourceType']() === 'media' ? _0x2cf3ab['abort']() : _0x2cf3ab['continue']();
            }), await _0x5ec23a['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x5ec23a['goto']('' + _0x3b322a[_0x1ad24c]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x5ec23a['waitForSelector']('#btnPdpAtb'), console['log'](_0x1c0231() + '\x20[' + _0x3126e7['name'] + ']\x20Task\x20' + (_0x1ad24c + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x3b322a[_0x1ad24c]['Size']);
            const _0x3aa243 = await _0x5ec23a['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x174c6d => {
                return _0x174c6d['map'](_0x2854b6 => _0x2854b6['innerText']);
            }), _0x1c11c3 = await _0x5ec23a['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x51a04a = ![];
            if (_0x3b322a[_0x1ad24c]['Size'] == 'RANDOM') {
                var _0x3733db = Math['round'](Math['random']() * (_0x1c11c3['length'] - 0x1));
                await _0x1c11c3[_0x3733db]['click']();
            } else
                for (var _0x4f1508 = 0x0; _0x4f1508 < _0x3aa243['length']; _0x4f1508++) {
                    if (_0x3aa243[_0x4f1508] != _0x3b322a[_0x1ad24c]['Size'])
                        continue;
                    try {
                        await _0x1c11c3[_0x4f1508]['click']();
                    } catch {
                        console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x3126e7['name'] + ']\x20Task\x20' + (_0x1ad24c + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x51a04a = !![];
                    }
                }
            if (_0x51a04a)
                continue;
            await _0x5bfa8d(0x578), await _0x5ec23a['click']('#btnPdpAtb'), await _0x5ec23a['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x5bfa8d(0x3e8), console['log'](_0x1c0231() + '\x20[' + _0x3126e7['name'] + ']\x20Task\x20' + (_0x1ad24c + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x5ec23a['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x5ec23a['waitForSelector']('#email'), await _0x5ec23a['type']('#email', _0x3b322a[_0x1ad24c]['Email']), await _0x5bfa8d(0x226), await _0x5ec23a['click']('#guest-submit'), await _0x5bfa8d(0x1b58), console['log'](_0x1c0231() + '\x20[' + _0x3126e7['name'] + ']\x20Task\x20' + (_0x1ad24c + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5ec23a['waitForSelector']('#firstname'), await _0x5ec23a['type']('#firstname', _0x3b322a[_0x1ad24c]['FirstName'], 0x1f4), await _0x5bfa8d(0x190), await _0x5ec23a['waitForSelector']('#surname'), await _0x5ec23a['type']('#surname', _0x3b322a[_0x1ad24c]['LastName'], 0x1f4), await _0x5bfa8d(0x190), await _0x5ec23a['waitForSelector']('#mobile'), await _0x5ec23a['type']('#mobile', _0x3b322a[_0x1ad24c]['Phone'], 0x1f4), await _0x5bfa8d(0x190), await _0x5ec23a['click']('#enterManualDiv'), await _0x5bfa8d(0x5dc), await _0x5ec23a['waitForSelector']('#address1'), await _0x5ec23a['type']('#address1', _0x3b322a[_0x1ad24c]['Address1'] + '\x20' + _0x3b322a[_0x1ad24c]['HouseNumber'], 0x226), await _0x5bfa8d(0x384), await _0x5ec23a['waitForSelector']('#address2'), await _0x5ec23a['type']('#address2', '' + _0x3b322a[_0x1ad24c]['Address2'], 0x226), await _0x5bfa8d(0x320);
            const _0x1d9d36 = await _0x5ec23a['$$eval']('#countryselect_view3\x20>\x20option', _0x1f43f0 => {
                return _0x1f43f0['map'](_0x4df623 => _0x4df623['value']);
            });
            var _0x3bddda;
            for (var _0x4ab50f = 0x0; _0x4ab50f < _0x1d9d36['length']; _0x4ab50f++) {
                if (_0x1d9d36[_0x4ab50f]['startsWith']('' + _0x3b322a[_0x1ad24c]['Country'])) {
                    _0x3bddda = _0x1d9d36[_0x4ab50f];
                    break;
                }
                continue;
            }
            await _0x5ec23a['select']('#countryselect_view3', '' + _0x3bddda), await _0x5ec23a['waitForSelector']('#address4'), await _0x5ec23a['type']('#address4', '' + _0x3b322a[_0x1ad24c]['City'], 0x1f4), await _0x5bfa8d(0x384), await _0x5ec23a['waitForSelector']('#postcode'), await _0x5ec23a['type']('#postcode', '' + _0x3b322a[_0x1ad24c]['Zip'], 0x1f4), await _0x5bfa8d(0x4b0);
            const _0x12c230 = await _0x5ec23a['url']();
            console['log'](_0x1c0231() + '\x20[' + _0x3126e7['name'] + ']\x20Task\x20' + (_0x1ad24c + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x3965f2 = _0x12c230['split']('?')[0x1], _0xc3b85c = await _0x5ec23a['$']('#co_address_submit');
            await _0xc3b85c['evaluate'](_0x1be58c => _0x1be58c['click']()), await _0x5bfa8d(0x1388), await _0x5ec23a['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x3965f2), console['log'](_0x1c0231() + '\x20[' + _0x3126e7['name'] + ']\x20Task\x20' + (_0x1ad24c + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x5ec23a['waitForSelector']('#paymentbuttons'), await _0x5bfa8d(0x1388), await _0x5ec23a['click']('#paymentbuttons\x20>\x20div'), await _0x5bfa8d(0x1c2), await _0x5ec23a['waitForSelector']('#card-number'), await _0x5ec23a['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x20752e = await _0x5ec23a['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x5d55e9 = await _0x20752e['contentFrame']();
            await _0x5d55e9['waitForSelector']('.InputContainer'), await _0x5d55e9['click']('.InputContainer\x20>\x20input'), await _0x5bfa8d(0x578), await _0x5ec23a['type']('#card-number', '' + _0x3b322a[_0x1ad24c]['CreditNumber']), await _0x5bfa8d(0xfa), await _0x5ec23a['type']('#card-expiry', '' + _0x3b322a[_0x1ad24c]['ExpiryDate']), await _0x5bfa8d(0xfa), await _0x5ec23a['type']('#card-cvc', '' + _0x3b322a[_0x1ad24c]['CVV']), await _0x5bfa8d(0x7d0), await _0x5ec23a['click']('#card-button'), console['log'](_0x1c0231() + '\x20[' + _0x3126e7['name'] + ']\x20Task\x20' + (_0x1ad24c + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5ec23a['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x59ec4b['green'](_0x1c0231() + '\x20[' + _0x3126e7['name'] + ']\x20Task\x20' + (_0x1ad24c + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x3e98c7(_0xc93bfc, _0x4a817d);
            } catch {
                console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x3126e7['name'] + ']\x20Task\x20' + (_0x1ad24c + 0x1) + '\x20:\x203DS\x20Failed')), _0x221aa3[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x221aa3[0x0]['description'] = '3DS\x20Failed', await _0x3e98c7(_0x4a6e1d, _0x4a817d);
            }
        } catch (_0x169dc2) {
            console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x3126e7['name'] + ']\x20Task\x20' + (_0x1ad24c + 0x1) + '\x20:\x20' + _0x169dc2)), _0x221aa3[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x221aa3[0x0]['description'] = '' + _0x169dc2, await _0x3e98c7(_0x4a6e1d, _0x4a817d);
        } finally {
            _0x35cc3d && _0x35cc3d['close']();
            if (_0x1ad24c + 0x1 == _0x3b322a['length']) {
                console['log'](_0x59ec4b['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x5bfa8d(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x413ed8['AfewDelay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['AfewDelay']);
        }
    }
}
async function _0x4be642(_0x1fc804, _0x38cbd0, _0x80af33, _0x2554dc, _0xd430c5) {
    var _0xeb4bf0, _0x10a7cd = {}, _0x64a2e1 = [], _0x148941 = {}, _0x26756d = [
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
    !_0x2554dc && (_0x2554dc = {});
    if (_0x38cbd0 != 'ver') {
        _0x560768(_0x80af33['name'] + '\x20Task\x20' + (_0x1fc804 + 0x1) + '\x20/\x20' + _0x2554dc['length'] + '\x20||\x20File:\x20' + _0x4ad4b6 + '\x20Proxies:\x20' + _0x513560), await _0x542345(_0x2554dc, _0x1fc804), _0x64a2e1 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3d4b33
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2554dc[_0x1fc804]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x413ed8['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2d0bbd
                }
            ]
        }], _0x148941 = { 'embeds': _0x64a2e1 }, _0x10a7cd = _0x80af33['data'];
        _0x38cbd0 == 'exp' ? _0x10a7cd['data']['attributes']['email'] = '' + _0x2554dc[_0x1fc804]['FirstName'] + _0x2554dc[_0x1fc804]['LastName'] + _0x413ed8['catchall'] : _0x10a7cd['data']['attributes']['email'] = '' + _0x2554dc[_0x1fc804]['Email'];
        if (_0x2554dc[_0x1fc804]['Size'] == 'RANDOM') {
        }
        _0x10a7cd['data']['attributes']['properties']['$first_name'] = '' + _0x2554dc[_0x1fc804]['FirstName'], _0x10a7cd['data']['attributes']['properties']['$last_name'] = '' + _0x2554dc[_0x1fc804]['LastName'], _0x10a7cd['data']['attributes']['properties']['$address1'] = _0x2554dc[_0x1fc804]['Address1'] + '\x20' + _0x2554dc[_0x1fc804]['Address2'] + '\x20' + _0x2554dc[_0x1fc804]['HouseNumber'], _0x10a7cd['data']['attributes']['properties']['$zip'] = '' + _0x2554dc[_0x1fc804]['Zip'], _0x10a7cd['data']['attributes']['properties']['$city'] = '' + _0x2554dc[_0x1fc804]['City'], _0x10a7cd['data']['attributes']['properties']['$country'] = '' + _0x2554dc[_0x1fc804]['Country'], _0x10a7cd['data']['attributes']['properties']['Size'] = '' + _0x2554dc[_0x1fc804]['Size'], _0x10a7cd['data']['attributes']['properties']['$phone_number'] = '' + _0x2554dc[_0x1fc804]['Phone'], _0x10a7cd['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2554dc[_0x1fc804]['Follower'];
    }
    if (_0x413ed8['useRandomProxy'] = ![])
        var _0x5acba9 = _0xd430c5[_0x1fc804]['split'](':');
    else
        var _0x3f68e6 = Math['round'](Math['random']() * (_0xd430c5['length'] - 0x1)), _0x5acba9 = _0xd430c5[_0x3f68e6]['split'](':');
    var _0x23823d = {
        'jar': _0x1ae82d,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x80af33['url'],
        'headers': _0x80af33['headers'],
        'body': JSON['stringify'](_0x10a7cd),
        'proxy': 'http://' + _0x5acba9[0x2] + ':' + _0x5acba9[0x3] + '@' + _0x5acba9[0x0] + ':' + _0x5acba9[0x1]
    };
    return _0x38cbd0 != 'ver' && (_0x23823d['url'] = _0x80af33['url'], _0x23823d['headers'] = _0x80af33['headers']), _0x38cbd0 == 'ver' && (_0x23823d['method'] = 'GET'), new Promise(function (_0x3a59d9, _0x2cf530) {
        callback = async (_0x404707, _0xd545d0, _0x46a353) => {
            if (!_0x404707 && _0xd545d0['statusCode'] == 0xca || !_0x404707 && _0xd545d0['statusCode'] == 0xc8) {
                if (_0x38cbd0 != 'ver') {
                    var _0x464a8f = await _0x1bb9e2(_0x2554dc[_0x1fc804], _0x80af33, 'dev', ![]), _0x557eba = await _0x1bb9e2(_0x2554dc[_0x1fc804], _0x80af33, 'pub', ![]);
                    const _0x322300 = {
                        'succesDEVMSG': { 'embeds': [_0x464a8f] },
                        'succesPUBMSG': { 'embeds': [_0x557eba] }
                    };
                    if (_0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '')
                        try {
                            await _0x3e98c7(_0x413ed8['webhook'], _0x322300['succesDEVMSG']);
                        } catch {
                        }
                    await _0x5bfa8d(0xc8), await _0x3e98c7(_0xc93bfc, _0x322300['succesDEVMSG']), await _0x5bfa8d(0xc8);
                    try {
                        await _0x3e98c7(_0x29fdbb, _0x322300['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x3a59d9(console['log'](_0x59ec4b['green'](_0x1c0231() + '\x20[' + _0x80af33['name'] + ']\x20Task\x20' + (_0x1fc804 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x38cbd0 != 'ver') {
                    var _0x476945 = '' + _0x404707, _0x5337c3 = await _0x1bb9e2(_0x2554dc[_0x1fc804], _0x80af33, 'dev', !![], _0x476945), _0x16cbb9 = {};
                    _0x16cbb9['errorDEV'] = { 'embeds': [_0x5337c3] }, _0x413ed8['webhook'] != undefined && _0x413ed8['webhook'] != '' && await _0x3e98c7(_0x413ed8['webhook'], _0x16cbb9['errorDEV']), await _0x3e98c7(_0x4a6e1d, _0x16cbb9['errorDEV']);
                }
                _0x2cf530(console['log'](_0x1c0231() + '\x20[' + _0x80af33['name'] + ']\x20Task\x20' + (_0x1fc804 + 0x1) + ':\x20' + _0x404707));
            }
        };
        try {
            _0x38cbd0 != 'ver' && console['log'](_0x1c0231() + '\x20[' + _0x80af33['name'] + ']\x20Task\x20' + (_0x1fc804 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x10a7cd['data']['attributes']['email']), _0x134e8e(_0x23823d, callback);
        } catch (_0x38d71a) {
            console['log'](_0x1c0231() + '\x20Task\x20' + (_0x1fc804 + 0x1) + ':\x20' + _0x38d71a);
        }
    });
}
;
async function _0x12f506() {
    await _0x6634aa(), console['clear']();
    if (_0x2d0bbd != 'devkey') {
        let _0xdd0e57 = await _0xca9b99['autoUpdate']();
        if (_0xdd0e57 === 'yes')
            return _0x45fa90('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x2f602e == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x5bfa8d(0x2710);
        ;
    }
    await _0xba6fd0(_0x2f602e);
    if (_0x1a3e40 === ![])
        return console['log']('Closing\x20Browser'), await _0x5bfa8d(0xbb8);
    else
        try {
            var _0x18c3c8 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x3d4b33
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x2d0bbd
                    }
                ]
            }];
            const _0x355a7a = { 'embeds': _0x18c3c8 };
            await _0x3e98c7(_0x23a13f, _0x355a7a);
            async function _0x1fdb40() {
                _0x560768('JRaffles\x20' + _0x2d0bbd), console['clear'](), console['log']('Welcome\x20to\x20' + _0x59ec4b['cyan']('JRaffles();') + '\x20' + _0x2d0bbd), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x488c99 = 0x0; _0x488c99 < _0x2a036a['length']; _0x488c99++) {
                    if (_0x2a036a[_0x488c99]['name'] === 'Reload\x20Settings' || _0x2a036a[_0x488c99]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x488c99 + ')\x20[' + _0x2a036a[_0x488c99]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x2a036a['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x2a036a['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x3c72cd();
                if (taskModule > _0x2a036a['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x5bfa8d(0x3e8), _0x1fdb40();
                if (_0x2a036a[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x57165f(_0x2a036a[taskModule]['modules']);
                    var _0x5a9f60 = _0x2a036a[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x46945d = await _0x4684ed(), _0x3d3243 = await _0x2e133f();
                    if (_0x3d3243[0x0]['Url'] == '' || _0x3d3243[0x0]['Url'] == undefined) {
                        await _0x530358(_0x46945d);
                        var _0x2e0ab9 = await _0x505bd9();
                        return await afewFunction('' + _0x34f3a0[_0x2e0ab9], 'nor', _0x5a9f60, _0x3d3243, _0x46945d), _0x1fdb40();
                    }
                    return await afewFunction(_0x3d3243[0x0]['Url'], 'nor', _0x5a9f60, _0x3d3243, _0x46945d), _0x1fdb40();
                } else {
                    if (_0x2a036a[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x57165f(_0x2a036a[taskModule]['modules']);
                        var _0x5a9f60 = _0x2a036a[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x46945d = await _0x4684ed(), _0x58641c = await _0x2e133f();
                            console['log']('Starting\x20' + _0x58641c['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x5430f6 = 0x0; _0x5430f6 < _0x58641c['length']; _0x5430f6++) {
                                console['log'](_0x1c0231() + '\x20[' + _0x5a9f60['name'] + ']\x20Task\x20' + (_0x5430f6 + 0x1) + ':\x20Getting\x20Session'), await _0xcc9f28(_0x5430f6, 'nor', _0x5a9f60, _0x58641c, _0x46945d), console['log'](_0x1c0231() + '\x20[' + _0x5a9f60['name'] + ']\x20Sleeping\x20for\x20' + _0x413ed8['MahaDelay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['MahaDelay']);
                            }
                            ;
                            return _0x1fdb40();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x46945d = await _0x4684ed();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x4e8084(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x5430f6 = 0x0; _0x5430f6 < links['length']; _0x5430f6++) {
                                    _0x5a9f60['url'] = links[_0x5430f6], console['log'](_0x1c0231() + '\x20[' + _0x5a9f60['name'] + ']\x20Task\x20' + (_0x5430f6 + 0x1) + ':\x20Getting\x20Session'), await _0xcc9f28(_0x5430f6, 'ver', _0x5a9f60, _0x58641c, _0x46945d), console['log'](_0x1c0231() + '\x20[' + _0x5a9f60['name'] + ']\x20Sleeping\x20for\x20' + _0x413ed8['verificationDelay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['verificationDelay']);
                                }
                                ;
                                return _0x1fdb40();
                            }
                        }
                    } else {
                        if (_0x2a036a[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x57165f(_0x2a036a[taskModule]['modules']);
                            var _0x5a9f60 = _0x2a036a[taskModule]['modules'][taskFunction], _0x46945d = await _0x4684ed(), _0xc4b6fa = await _0x2e133f();
                            return await _0x55f7b7(_0xc4b6fa, _0x46945d, _0x5a9f60), await _0x5bfa8d(0x1388), _0x1fdb40();
                        } else {
                            if (_0x2a036a[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x57165f(_0x2a036a[taskModule]['modules']);
                                var _0x5a9f60 = _0x2a036a[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x46945d = await _0x4684ed(), _0x5cc4c5 = await _0x2e133f();
                                    console['log']('Starting\x20' + _0x59ec4b['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x5430f6 = 0x0; _0x5430f6 < _0x5cc4c5['length']; _0x5430f6++) {
                                        console['log'](_0x1c0231() + '\x20[' + _0x5a9f60['name'] + ']\x20Task\x20' + (_0x5430f6 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x4be642(_0x5430f6, 'nor', _0x5a9f60, _0x5cc4c5, _0x46945d);
                                        } catch (_0x38e9a0) {
                                            console['log'](_0x59ec4b['red'](_0x1c0231() + '\x20[' + _0x5a9f60['name'] + ']\x20Task\x20' + (_0x5430f6 + 0x1) + ':\x20Task\x20failed\x20' + _0x38e9a0));
                                        }
                                        console['log'](_0x1c0231() + '\x20[' + _0x5a9f60['name'] + ']\x20Sleeping\x20for\x20' + _0x413ed8['delay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['delay']);
                                    }
                                    return _0x1fdb40();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x46945d = await _0x4684ed();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x4e8084(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x5430f6 = 0x0; _0x5430f6 < links['length']; _0x5430f6++) {
                                            try {
                                                _0x5a9f60['url'] = links[_0x5430f6], console['log'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Task\x20' + (_0x5430f6 + 0x1) + ':\x20Getting\x20Session'), await _0x4be642(_0x5430f6, 'ver', _0x5a9f60, null, _0x46945d), console['log'](_0x1c0231() + '\x20[' + _0x2a036a[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x413ed8['verificationDelay'] + '\x20ms'), await _0x5bfa8d(_0x413ed8['verificationDelay']);
                                            } catch (_0x4ce125) {
                                                console['log'](_0x4ce125), await _0x5bfa8d(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x1fdb40();
                                    }
                                }
                                ;
                            } else {
                                if (_0x2a036a[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x57165f(_0x2a036a[taskModule]['modules']);
                                    var _0x5a9f60 = _0x2a036a[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x23fd10('https://bouncewear.com/nl/account/register', _0x5a9f60);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x2a036a[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x57165f(_0x2a036a[taskModule]['modules']);
                                        var _0x5a9f60 = _0x2a036a[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x46945d = await _0x4684ed(), _0x4cd75a = await _0x2e133f();
                                            return await _0x3c9d1c('https://patta.nl/account/register', _0x5a9f60, _0x4cd75a, _0x46945d), _0x1fdb40();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x46945d = await _0x4684ed(), _0x4cd75a = await _0x2e133f();
                                                return await _0x3a2bc9('', _0x5a9f60, _0x4cd75a, _0x46945d), _0x1fdb40();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x2a036a[taskModule]['name'] == 'SLAMJAM') {
                                            taskFunction = await _0x57165f(_0x2a036a[taskModule]['modules']);
                                            var _0x5a9f60 = _0x2a036a[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x46945d = await _0x4684ed(), _0x167e4c = await _0x2e133f();
                                                return await _0x481bb0('https://slamjam.nl/account/register', _0x5a9f60, _0x167e4c, _0x46945d), _0x1fdb40();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x46945d = await _0x4684ed(), _0x167e4c = await _0x2e133f();
                                                    return await _0x428584('', _0x5a9f60, _0x167e4c, _0x46945d), _0x1fdb40();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x2a036a[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x57165f(_0x2a036a[taskModule]['modules']);
                                                var _0x5a9f60 = _0x2a036a[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x46945d = await _0x4684ed(), _0x424e57 = await _0x2e133f();
                                                    return await _0x520c3f('https://www.kickz.com/nl/login/', _0x5a9f60, _0x424e57, _0x46945d), _0x1fdb40();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x46945d = await _0x4684ed(), _0x424e57 = await _0x2e133f();
                                                        return await _0xa12518(_0x5a9f60, _0x424e57, _0x46945d), _0x1fdb40();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x2a036a[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x57165f(_0x2a036a[taskModule]['modules']);
                                                    var _0x5a9f60 = _0x2a036a[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x46945d = await _0x4684ed(), _0x31be21 = await _0x2e133f();
                                                        return await _0x7e01d3(_0x5a9f60, _0x31be21, _0x46945d), _0x1fdb40();
                                                    }
                                                } else {
                                                    if (_0x2a036a[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x5bfa8d(0x3e8), _0x1fdb40();
                                                    else {
                                                        if (_0x2a036a[taskModule]['name'] == 'Change\x20Settings') {
                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                            var _0x7ab918 = 0x0;
                                                            for (const _0x35e977 in _0x413ed8) {
                                                                console['log']('(' + _0x7ab918 + ')\x20' + _0x35e977 + '\x20:\x20' + _0x413ed8[_0x35e977]), _0x7ab918++;
                                                            }
                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x7ab918 + ')\x20Return\x20to\x20Main\x20Menu');
                                                            var _0x4fcee3 = await _0x1685a8();
                                                            if (_0x4fcee3 == _0x7ab918)
                                                                return _0x1fdb40();
                                                            console['clear'];
                                                            var _0x26c7ed = 0x0;
                                                            for (var _0x745c0e in _0x413ed8) {
                                                                if (_0x4fcee3 == _0x26c7ed) {
                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x745c0e + '\x20:'), _0x413ed8[_0x745c0e] = await _0x580f76(), _0x4957d2['writeFileSync']('../settings.json', JSON['stringify'](_0x413ed8));
                                                                    break;
                                                                } else
                                                                    _0x26c7ed++;
                                                            }
                                                            return console['log']('Settings\x20Saved!'), await _0x5bfa8d(0xbb8), _0x1fdb40();
                                                        } else {
                                                            if (_0x2a036a[taskModule]['name'] == 'Reload\x20Settings')
                                                                return console['log']('Reloading\x20settings'), await _0x6634aa(), _0x1fdb40();
                                                            else {
                                                                if (taskModule == 0x45) {
                                                                    _0x2a036a[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                    var _0x210284 = await _0x1f5d05();
                                                                    _0x210284 == 'ModuleVoorDeBoys' ? (await _0x530358(), await _0x505bd9(), await afewFunction(_0x34f3a0[_0x2e0ab9], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x5bfa8d(0xbb8));
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
            await _0x1fdb40();
        } catch (_0x3eb876) {
            return console['log'](_0x3eb876), await _0x5bfa8d(0x3a98);
        }
}
;
_0x560768('JRaffles\x20' + _0x2d0bbd), _0x6634aa();
try {
    _0x12f506();
} catch (_0x2990b3) {
    var _0x124dd7 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x3d4b33
            },
            {
                'name': 'Version',
                'value': '' + _0x2d0bbd
            },
            {
                'name': 'Error',
                'value': '' + _0x2990b3
            }
        ]
    }];
    const _0x338ab7 = { 'embeds': _0x124dd7 };
    _0x3e98c7(_0x4a6e1d, _0x338ab7);
}