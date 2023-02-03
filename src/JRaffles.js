const { EmbedBuilder: _0x26e67f } = require('discord.js');
var _0x5b0591 = require('exe');
const { execFile: _0x4a2607 } = require('child_process'), _0x45d1b7 = require('puppeteer-extra'), _0x3a0174 = require('puppeteer-extra-plugin-recaptcha'), _0x59265c = require('puppeteer-extra-plugin-stealth'), _0x83832e = require('chalk'), _0x29b05f = require('node-bash-title'), _0x4795e1 = require('fs'), _0x34e720 = require('axios'), _0x4e7ed0 = require('papaparse');
var _0x34055d = require('random-name');
const _0x4f51b9 = require('request');
var _0x3b7e07 = require('prompt');
const _0x3a4ace = _0x4f51b9['jar']();
var _0x1cd004 = {};
const _0x44111c = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x12247e = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x846609 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x41f3aa = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0xf63243 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn';
var _0x355ac1 = 'https://discord.com/api/webhooks/', _0x936e28 = '' + _0x355ac1 + _0x846609, _0x3cfe11 = '' + _0x355ac1 + _0x41f3aa, _0x56f4d7 = '' + _0x355ac1 + _0x44111c, _0x5c3e5c = '' + _0x355ac1 + _0x12247e, _0x56a82e = '' + _0x355ac1 + _0xf63243;
const _0x37e623 = JSON['parse'](_0x4795e1['readFileSync']('../package.json', 'utf-8')), _0x524cd1 = _0x37e623['version'];
var _0x3851ce, _0x567018, _0x2d4a34, _0x37cffe, _0x564283, _0x2c5115, _0xb83366;
const _0x1aa6ed = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x24a809 = ![];
const _0x27a79f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x5428a4 = '0123456789';
var _0x498cee = _0x27a79f['split']('');
const _0x4b2990 = require('auto-git-update'), { PageEmittedEvents: _0x1f5935 } = require('puppeteer'), { getRandomValues: _0xe76975 } = require('crypto'), { resolve: _0x202ab6 } = require('path'), _0x4088f7 = {
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
}, _0x4dcd51 = new _0x4b2990(_0x4088f7);
async function _0x23ae70() {
    _0x564283 = _0x4795e1['readdirSync']('../proxies'), _0x37cffe = _0x4795e1['readdirSync']('../tasks'), _0x1cd004 = JSON['parse'](_0x4795e1['readFileSync']('../settings.json', 'utf-8')), !_0x1cd004['delay'] && (_0x1cd004['delay'] = 0x2710, _0x4795e1['writeFileSync']('../settings.json', JSON['stringify'](_0x1cd004))), !_0x1cd004['captchaKey'] && (_0x1cd004['captchaKey'] = '', _0x4795e1['writeFileSync']('../settings.json', JSON['stringify'](_0x1cd004))), !_0x1cd004['useRandomProxy'] && (_0x1cd004['useRandomProxy'] = !![], _0x4795e1['writeFileSync']('../settings.json', JSON['stringify'](_0x1cd004))), !_0x1cd004['webhook'] && (_0x1cd004['webhook'] = '', _0x4795e1['writeFileSync']('../settings.json', JSON['stringify'](_0x1cd004))), _0x355ac1 = _0x1cd004['webhook'], _0x2c5115 = _0x1cd004['licenseKey'];
}
let _0x3ab84f, _0x63869c = [], _0x12d45e;
const _0x18b118 = _0x3547c6 => new Promise(_0x2c5286 => setTimeout(_0x2c5286, _0x3547c6));
function _0xf42493(_0x1927f4, _0x11706f) {
    return Math['floor'](Math['random']() * (_0x11706f - _0x1927f4 + 0x1) + _0x1927f4);
}
async function _0x14c677(_0x29801a) {
    return _0x34e720['get']('https://api.hyper.co/v4/licenses/' + _0x29801a, { 'headers': { 'Authorization': 'Bearer\x20' + _0x1aa6ed } })['then'](_0x999af6 => _0x999af6['data'])['catch'](() => null);
}
;
async function _0x522bc8(_0x2c1610) {
    console['clear']();
    if (_0x2c1610 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x52d6f2 = await _0x3b7e07['get']('License');
        if (_0x52d6f2['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x18b118(0xbb8), _0x522bc8(_0x2c1610);
        _0x2c1610 = _0x52d6f2['License'], _0x1cd004['licenseKey'] = _0x2c1610, _0x2c5115 = _0x2c1610, _0x4795e1['writeFileSync']('../settings.json', JSON['stringify'](_0x1cd004));
    }
    console['log']('Checking\x20license\x20' + _0x2c5115 + '...'), await _0x18b118(0x5dc);
    const _0x388fb4 = await _0x14c677(_0x2c1610);
    _0xb83366 = JSON['stringify'](_0x388fb4['user']['username'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x388fb4)
        return console['log']('License\x20not\x20found');
    if (!_0x388fb4['user'])
        return console['log']('License\x20not\x20bound');
    return _0x388fb4['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x24a809 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x24a809 = ![]);
}
async function _0x48824a() {
    var _0x2baa71 = await _0x3b7e07['get']('Module');
    return console['clear'](), _0x2baa71['Module'];
}
;
async function _0x5bf9cd() {
    var _0x2c467f = await _0x3b7e07['get']('Setting');
    return console['clear'](), _0x2c467f['Setting'];
}
async function _0x27f6ed() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x32d379 = 0x0; _0x32d379 < _0x37cffe['length']; _0x32d379++) {
        console['log']('\x20(' + _0x32d379 + ')\x20' + _0x37cffe[_0x32d379]);
    }
    console['log']('');
    var _0x5921b4 = await _0x3b7e07['get']('Task');
    if (_0x5921b4['Task'] > _0x37cffe['length'] - 0x1 || isNaN(_0x5921b4['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x18b118(0x3e8), _0x27f6ed();
    var _0x197033 = _0x4795e1['readFileSync']('../tasks/' + _0x37cffe[_0x5921b4['Task']], 'utf-8');
    return _0x2d4a34 = _0x4e7ed0['parse'](_0x197033, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x83832e['blue'](_0x37cffe[_0x5921b4['Task']])), _0x3851ce = _0x37cffe[_0x5921b4['Task']], _0x2d4a34;
}
async function _0x34f7f2() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x450306 = 0x0; _0x450306 < _0x564283['length']; _0x450306++) {
        console['log']('\x20(' + _0x450306 + ')\x20' + _0x564283[_0x450306]);
    }
    console['log']('');
    var _0x104147 = await _0x3b7e07['get']('Proxies');
    if (_0x104147['Proxies'] > _0x564283['length'] - 0x1 || isNaN(_0x104147['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x18b118(0x3e8), _0x34f7f2();
    var _0x244110 = _0x4795e1['readFileSync']('../proxies/' + _0x564283[_0x104147['Proxies']], 'utf-8')['split']('\x0a');
    let _0x2aaa9e = _0x244110['map']((_0x39249a, _0x539568) => {
        sanatizeProxy = _0x39249a['replace']('\x0d', '');
        if (_0x244110[_0x539568 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x567018 = _0x564283[_0x104147['Proxies']], console['clear'](), _0x2aaa9e;
}
async function _0x51239a() {
    var _0x3c297e = await _0x3b7e07['get']('Value');
    return console['clear'](), _0x3c297e['Value'];
}
async function _0x31a4b5(_0x53bab0) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x4e74d8 = 0x0; _0x4e74d8 < _0x53bab0['length']; _0x4e74d8++) {
        console['log']('\x20(' + _0x4e74d8 + ')\x20[' + _0x53bab0[_0x4e74d8]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x4223dc = await _0x3b7e07['get']('Module');
    return _0x4223dc['Module'];
}
async function _0x6196e8() {
    var _0x13b2b2 = await _0x3b7e07['get']('Password');
    return console['clear'](), _0x13b2b2['Password'];
}
;
async function _0x5561a2() {
    var _0x18cd24 = await _0x3b7e07['get']('Links');
    return _0x18cd24['Links'];
}
;
async function _0x4c7cc4() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x597005 = 0x0; _0x597005 < _0x63869c['length']; _0x597005++) {
        console['log']('\x20(' + _0x597005 + ')\x20' + _0x63869c[_0x597005]);
    }
    ;
    console['log']();
    let _0x344e07 = await _0x3b7e07['get']('Product');
    console['clear'](), _0x12d45e = _0x344e07['Product'];
    return;
}
;
function _0x131181() {
    var _0xe3c78e = new Date(Date['now']())['toLocaleTimeString']();
    return _0xe3c78e;
}
;
const _0xa6e999 = [
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
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x3b1992(_0x35f333, _0x4c1f5a) {
    let _0x42eb23 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x524cd1 != 'devkey') {
        await _0x34e720['post'](_0x35f333, _0x4c1f5a, _0x42eb23);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x3c0821(_0x3dd847, _0x4463f8, _0x597d80, _0x4f9053, _0x111b8e) {
    if (!_0x4f9053 && _0x597d80 == 'dev') {
        var _0x30a30a = new _0x26e67f()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x4463f8['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x4463f8['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x3dd847['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x1cd004['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0xb83366,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x3dd847['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x524cd1,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x30a30a['data'];
    } else {
        if (_0x4f9053 && _0x597d80 == 'dev') {
            var _0x30a30a = new _0x26e67f()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x4463f8['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0xb83366,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x4463f8['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x3dd847['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x1cd004['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x111b8e,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x3dd847['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x524cd1,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x30a30a['data'];
        } else {
            if (_0x597d80 == 'pub') {
                var _0x30a30a = new _0x26e67f()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x4463f8['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x4463f8['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x3dd847['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x1cd004['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x3dd847['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x524cd1,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x30a30a['data'];
            } else {
                if (_0x597d80 == 'acc') {
                    var _0x30a30a = new _0x26e67f()['setColor']('#282525')['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x4463f8['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0xb83366,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x4463f8['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x1cd004['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x524cd1,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x30a30a['data'];
                }
            }
        }
    }
}
async function _0x3f7bcb(_0x4fda07, _0x592009) {
    var _0x212107 = _0x4fda07[_0x592009]['Address1']['split'](''), _0x27204d = _0x4fda07[_0x592009]['Address2']['split'](''), _0x2bacfc = _0x4fda07[_0x592009]['Email']['split']('@');
    for (var _0xaacc47 = 0x0; _0xaacc47 < _0x212107['length']; _0xaacc47++) {
        if (_0x212107[_0xaacc47] == 'X') {
            var _0x4d648a = Math['round'](Math['random']() * (_0x27a79f['length'] - 0x1));
            _0x212107[_0xaacc47] = _0x498cee[_0x4d648a];
        }
    }
    ;
    for (var _0xaacc47 = 0x0; _0xaacc47 < _0x27204d['length']; _0xaacc47++) {
        if (_0x27204d[_0xaacc47] == 'X') {
            var _0x4d648a = Math['round'](Math['random']() * (_0x27a79f['length'] - 0x1));
            _0x27204d[_0xaacc47] = _0x498cee[_0x4d648a];
        }
    }
    ;
    _0x4fda07[_0x592009]['FirstName'] == 'RANDOM' && (_0x4fda07[_0x592009]['FirstName'] = _0x34055d['first']());
    _0x4fda07[_0x592009]['LastName'] == 'RANDOM' && (_0x4fda07[_0x592009]['LastName'] = _0x34055d['last']());
    _0x2bacfc[0x0] == 'RANDOM' ? _0x2bacfc[0x0] = '' + _0x34055d['first']() + _0x34055d['last']() + '@' : _0x2bacfc[0x0] = _0x2bacfc[0x0] + '@';
    _0x4fda07[_0x592009]['Phone'] == 'RANDOM' && (_0x4fda07[_0x592009]['Phone'] = _0xf42493(0x3b9aca00, 0x2540be3ff));
    if (_0x4fda07[_0x592009]['Follower'] == 'RANDOM') {
        var _0x33146a = _0xf42493(0x1, 0x270f);
        _0x4fda07[_0x592009]['Follower'] = '' + _0x34055d['first']() + _0x34055d['last']() + _0x33146a;
    }
    _0x4fda07[_0x592009]['Email'] = _0x2bacfc['join'](''), _0x4fda07[_0x592009]['Address1'] = _0x212107['join'](''), _0x4fda07[_0x592009]['Address2'] = _0x27204d['join']('');
    return;
}
;
function _0x2a42e8() {
    let _0x185c82 = proxyFile['split']('\x0a'), _0x495e42 = _0x185c82['map']((_0x5803ab, _0x5880f3) => {
        sanatizeProxy = _0x5803ab['replace']('\x0d', '');
        if (_0x185c82[_0x5880f3 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x495e42;
}
;
async function _0x461880(_0x4723e8) {
    var _0x1798fd = _0x4723e8[0x1]['split'](':');
    const _0x24353b = await _0x45d1b7['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x1798fd[0x0] + ':' + _0x1798fd[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x3ac3b2 = await _0x24353b['newPage']();
        await _0x3ac3b2['authenticate']({
            'username': '' + _0x1798fd[0x2],
            'password': '' + _0x1798fd[0x3]
        }), console['log'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x3ac3b2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3ac3b2['setRequestInterception'](!![]), _0x3ac3b2['on']('request', _0x1f4b7b => {
            _0x1f4b7b['resourceType']() === 'image' || _0x1f4b7b['resourceType']() === 'font' || _0x1f4b7b['resourceType']() === 'media' ? _0x1f4b7b['abort']() : _0x1f4b7b['continue']();
        }), await _0x3ac3b2['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x3ac3b2['waitForTimeout'](0xbb8), await _0x3ac3b2['waitForSelector']('.product-card');
        const _0x300411 = await _0x3ac3b2['$$eval']('a.product-card', _0x37266e => {
            return _0x37266e['map'](_0x5ddad5 => _0x5ddad5['href']);
        });
        return _0x63869c = _0x300411;
    } catch (_0x5cdc41) {
        console['log']('\x20' + _0x5cdc41);
    } finally {
        _0x24353b['close'](), console['clear']();
    }
}
;
async function _0x292fd4(_0x452e3b, _0xc98896, _0x427cd7, _0x210874, _0x49f8f9) {
    await _0x3f7bcb(_0x210874, _0x452e3b);
    var _0x3ac85e = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0xb83366
            },
            {
                'name': 'Size',
                'value': '' + _0x210874[_0x452e3b]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x1cd004['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x524cd1
            }
        ]
    }];
    const _0x78f1dc = { 'embeds': _0x3ac85e };
    if (_0x1cd004['useRandomProxy'] = ![])
        var _0x388862 = _0x49f8f9[_0x452e3b]['split'](':');
    else
        var _0x2ff89c = Math['round'](Math['random']() * (_0x49f8f9['length'] - 0x1)), _0x388862 = _0x49f8f9[_0x2ff89c]['split'](':');
    var _0xe8e446 = _0x427cd7['data'];
    _0xc98896 == 'exp' ? _0xe8e446['data']['attributes']['email'] = '' + _0x210874[_0x452e3b]['FirstName'] + _0x210874[_0x452e3b]['LastName'] + _0x1cd004['catchall'] : _0xe8e446['data']['attributes']['email'] = '' + _0x210874[_0x452e3b]['Email'];
    _0xe8e446['data']['attributes']['properties']['$first_name'] = '' + _0x210874[_0x452e3b]['FirstName'], _0xe8e446['data']['attributes']['properties']['$last_name'] = '' + _0x210874[_0x452e3b]['LastName'], _0xe8e446['data']['attributes']['properties']['$address1'] = _0x210874[_0x452e3b]['Address1'] + '\x20' + _0x210874[_0x452e3b]['Address2'], _0xe8e446['data']['attributes']['properties']['$zip'] = '' + _0x210874[_0x452e3b]['Zip'], _0xe8e446['data']['attributes']['properties']['$city'] = '' + _0x210874[_0x452e3b]['City'], _0xe8e446['data']['attributes']['properties']['$country'] = '' + _0x210874[_0x452e3b]['Country'], _0xe8e446['data']['attributes']['properties']['Size'] = '' + _0x210874[_0x452e3b]['Size'], _0xe8e446['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x210874[_0x452e3b]['Follower'];
    var _0x1c564a = {
        'jar': _0x3a4ace,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x427cd7['url'],
        'headers': _0x427cd7['headers'],
        'body': JSON['stringify'](_0xe8e446),
        'proxy': 'http://' + _0x388862[0x2] + ':' + _0x388862[0x3] + '@' + _0x388862[0x0] + ':' + _0x388862[0x1]
    };
    return _0xc98896 === 'ver' && (_0x1c564a['method'] = 'GET'), new Promise(function (_0x4e7ff0, _0x3cd9da) {
        callback = async (_0x5a4411, _0x26351a, _0x5cbd8b) => {
            !_0x5a4411 && _0x26351a['statusCode'] == 0xca || !_0x5a4411 && _0x26351a['statusCode'] == 0xc8 ? _0x4e7ff0(console['log'](_0x83832e['green'](_0x131181() + '\x20[' + _0x427cd7['name'] + ']\x20Task\x20' + (_0x452e3b + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x3ac85e[0x0]['title'] = 'Failed\x20entry', _0x3ac85e[0x0]['description'] = '' + _0x5a4411, await _0x3b1992(_0x5c3e5c, _0x78f1dc), _0x3cd9da(console['log'](_0x131181() + '\x20[' + _0x427cd7['name'] + ']\x20Task\x20' + (_0x452e3b + 0x1) + ':\x20' + _0x5a4411)));
        };
        try {
            _0xc98896 === 'ver' ? console['log'](_0x131181() + '\x20[' + _0x427cd7['name'] + ']\x20Task\x20' + (_0x452e3b + 0x1) + ':\x20Verifying.') : console['log'](_0x131181() + '\x20[' + _0x427cd7['name'] + ']\x20Task\x20' + (_0x452e3b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xe8e446['data']['attributes']['email']), _0x4f51b9(_0x1c564a, callback);
        } catch (_0x46ab19) {
            console['log'](_0x131181() + '\x20Task\x20' + (_0x452e3b + 0x1) + ':\x20' + _0x46ab19);
        }
    });
}
;
async function _0x92fe8d(_0x327789, _0x14e3b6, _0x5529e7) {
    _0x45d1b7['use'](_0x59265c()), _0x45d1b7['use'](_0x3a0174({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1cd004['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x347c07 = 0x0; _0x347c07 < _0x327789['length']; _0x347c07++) {
        var _0x7d2442, _0xd80ae5 = '', _0x27722c = 0x0, _0x4b01f7 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xb83366
                },
                {
                    'name': 'Product',
                    'value': '' + _0x327789[_0x347c07]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x327789[_0x347c07]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1cd004['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x524cd1
                }
            ]
        }], _0x4444d3 = await _0x3c0821(_0x327789[_0x347c07], _0x5529e7, 'dev', ![]), _0x184aa9 = await _0x3c0821(_0x327789[_0x347c07], _0x5529e7, 'pub', ![]);
        const _0x5d11e4 = {
            'succesDEVMSG': { 'embeds': [_0x4444d3] },
            'succesPUBMSG': { 'embeds': [_0x184aa9] }
        }, _0x377226 = { 'embeds': _0x4b01f7 };
        await _0x3f7bcb(_0x327789, _0x347c07);
        if (_0x327789[_0x347c07]['Email'] == '' || _0x327789[_0x347c07]['FirstName'] == '' || _0x327789[_0x347c07]['LastName'] == '' || _0x327789[_0x347c07]['Country'] == '' || _0x327789[_0x347c07]['Size'] == '' || _0x327789[_0x347c07]['Address1'] == '' || _0x327789[_0x347c07]['Zip'] == '') {
            console['log'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x327789[_0x347c07]['Email'] == '' || _0x327789[_0x347c07]['FirstName'] == '' || _0x327789[_0x347c07]['LastName'] == '' || _0x327789[_0x347c07]['Country'] == '' || _0x327789[_0x347c07]['Size'] == '' || _0x327789[_0x347c07]['Address1'] == '' || _0x327789[_0x347c07]['Zip'] == '' || _0x327789[_0x347c07]['Phone'] == '') {
            console['log'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x1ed7ed = '' + _0x327789[_0x347c07]['Url'];
        if (_0x1cd004['useRandomProxy'] = ![])
            var _0xa64d6a = _0x14e3b6[_0x347c07]['split'](':');
        else
            var _0x5af376 = Math['round'](Math['random']() * (_0x14e3b6['length'] - 0x1)), _0xa64d6a = _0x14e3b6[_0x5af376]['split'](':');
        const _0x5d54f0 = await _0x45d1b7['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0xa64d6a[0x0] + ':' + _0xa64d6a[0x1]]
        });
        try {
            const _0xb26e66 = await _0x5d54f0['newPage']();
            await _0xb26e66['authenticate']({
                'username': '' + _0xa64d6a[0x2],
                'password': '' + _0xa64d6a[0x3]
            }), console['log'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xb26e66['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xb26e66['setRequestInterception'](!![]), _0xb26e66['on']('request', _0x34f880 => {
                _0x34f880['resourceType']() === 'image' || _0x34f880['resourceType']() === 'font' || _0x34f880['resourceType']() === 'media' ? _0x34f880['abort']() : _0x34f880['continue']();
            }), await _0xb26e66['goto'](_0x1ed7ed), await _0x18b118(0xbb8), await _0xb26e66['waitForSelector']('.control__JhutY'), await _0xb26e66['click']('.control__JhutY'), await _0x18b118(0x1f4);
            if (_0x327789[_0x347c07]['Size'] != 'RANDOM')
                try {
                    const _0xd8ae6d = await _0xb26e66['$x']('//div[contains(text(),\x20\x27' + _0x327789[_0x347c07]['Size'] + '\x27)]');
                    await _0xd8ae6d[0x0]['click']();
                } catch {
                    console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x4b8100 = await _0xb26e66['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x275d33 = Math['round'](Math['random']() * (_0x4b8100['length'] - 0x1));
                await _0x4b8100[_0x275d33]['click']();
            }
            await _0x18b118(0x4b0);
            const _0x2065fa = await _0xb26e66['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x2065fa[0x0]['click'](), await _0xb26e66['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0xb26e66['type']('input[name=\x22email\x22]', '' + _0x327789[_0x347c07]['Email']), await _0x18b118(0x640), await _0xb26e66['type']('input[name=\x22phone\x22]', '' + _0x327789[_0x347c07]['Phone']), await _0x18b118(0x4b0), await _0xb26e66['click']('button.btn.continue-button__1RtsS'), await _0x18b118(0x4b0);
            try {
                await _0xb26e66['type']('input[name=\x22firstName\x22]', '' + _0x327789[_0x347c07]['FirstName']), await _0x18b118(0x258);
            } catch {
                const _0x171dd7 = await _0xb26e66['$$eval']('.invalid-feedback\x20>\x20div', _0x5eee10 => {
                    return _0x5eee10['map'](_0x1d669a => _0x1d669a['innerText']);
                });
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x20' + _0x171dd7));
                continue;
            }
            await _0xb26e66['type']('input[name=\x22lastName\x22]', '' + _0x327789[_0x347c07]['LastName']), await _0x18b118(0xc8), await _0xb26e66['type']('input[name=\x22instagramUsername\x22]', '' + _0x327789[_0x347c07]['Follower']), await _0x18b118(0x4b0), await _0xb26e66['click']('button.btn.continue-button__1RtsS'), await _0x18b118(0x3e8), console['log'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0xb26e66['select']('select[name=\x22country\x22]', '' + _0x327789[_0x347c07]['Country']), await _0x18b118(0x2bc), await _0xb26e66['type']('input[name=\x22streetName\x22]', '' + _0x327789[_0x347c07]['Address1']), await _0x18b118(0x258), await _0xb26e66['type']('input[name=\x22houseNumber\x22]', _0x327789[_0x347c07]['HouseNumber'] + '\x20' + _0x327789[_0x347c07]['Address2']), await _0x18b118(0xc8), await _0xb26e66['type']('input[name=\x22postalCode\x22]', '' + _0x327789[_0x347c07]['Zip']), await _0x18b118(0x1f4), await _0xb26e66['type']('input[name=\x22city\x22]', '' + _0x327789[_0x347c07]['City']), await _0x18b118(0x4b0), await _0xb26e66['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x18b118(0x4b0), await _0xb26e66['click']('button.btn.continue-button__1RtsS'), await _0x18b118(0x4b0), console['log'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0xb26e66['solveRecaptchas'](), console['log'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x18b118(0xbb8), await _0xb26e66['click']('button.btn.continue-button__1RtsS'), await _0x18b118(0x1388), console['log'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0xb26e66['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xb26e66['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x18b118(0x4b0), await _0xb26e66['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x327789[_0x347c07]['CardNumber']), await _0x18b118(0x320), await _0xb26e66['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xb26e66['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x327789[_0x347c07]['ExpiryDate']), await _0x18b118(0x4b0), await _0xb26e66['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xb26e66['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x327789[_0x347c07]['CVV']), await _0x18b118(0x226), await _0xb26e66['type']('input[name=\x22holderName\x22]', '' + _0x327789[_0x347c07]['NameOnCard']), await _0x18b118(0x226), await _0xb26e66['click']('button.adyen-checkout__button'), console['log'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0xb26e66['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x18b118(0xbb8);
            } catch (_0x392e9a) {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x203DS\x20Failed')), _0x7d2442 = '3DS\x20Error\x20' + _0x392e9a;
                var _0x1a7cd0 = await _0x3c0821(_0x327789[_0x347c07], _0x5529e7, 'dev', !![], _0x7d2442);
                _0x5d11e4['errorDEV'] = { 'embeds': [_0x1a7cd0] };
                _0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '' && await _0x3b1992(_0x1cd004['webhook'], _0x5d11e4['errorDEV']);
                await _0x3b1992(_0x5c3e5c, _0x5d11e4['errorDEV']);
                continue;
            }
            console['log'](_0x83832e['green'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '')
                try {
                    await _0x3b1992(_0x1cd004['webhook'], _0x5d11e4['succesDEVMSG']);
                } catch {
                }
            await _0x18b118(0xc8), await _0x3b1992(_0x56f4d7, _0x5d11e4['succesDEVMSG']), await _0x18b118(0xc8);
            try {
                await _0x3b1992(_0x56a82e, _0x5d11e4['succesPUBMSG']);
            } catch {
            }
        } catch (_0x23324a) {
            console['log'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x20' + _0x23324a), _0x7d2442 = '' + _0x23324a;
            var _0x1a7cd0 = await _0x3c0821(_0x327789[_0x347c07], _0x5529e7, 'dev', !![], _0x7d2442);
            _0x5d11e4['errorDEV'] = { 'embeds': [_0x1a7cd0] }, _0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '' && await _0x3b1992(_0x1cd004['webhook'], _0x5d11e4['errorDEV']), await _0x3b1992(_0x5c3e5c, _0x5d11e4['errorDEV']), _0xd80ae5 = 'yes';
        } finally {
            _0x5d54f0['close']();
            if (_0xd80ae5 == 'yes' && _0x27722c != 0x5) {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x5529e7['name'] + ']\x20Task\x20' + (_0x347c07 + 0x1) + '\x20:\x20Retrying')), _0x347c07 = _0x347c07 - 0x1, _0x27722c = _0x27722c + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x1cd004['footshopDelay'] + '\x20ms'), await _0x18b118(_0x1cd004['footshopDelay']);
        }
    }
}
afewFunction = async (_0x1b8f56, _0x719ef, _0x41b8d5, _0x6edc29, _0xb4f8fc) => {
    for (var _0x5c18e9 = 0x0; _0x5c18e9 < _0x6edc29['length']; _0x5c18e9++) {
        var _0x376389, _0x386a47 = '', _0xefb6b8 = 0x0;
        _0x29b05f(_0x41b8d5['name'] + '\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20/\x20' + _0x6edc29['length'] + '\x20||\x20File:\x20' + _0x3851ce + '\x20Proxies:\x20' + _0x567018), await _0x3f7bcb(_0x6edc29, _0x5c18e9);
        var _0x241c6f = await _0x3c0821(_0x6edc29[_0x5c18e9], _0x41b8d5, 'dev', ![]), _0x3eb266 = await _0x3c0821(_0x6edc29[_0x5c18e9], _0x41b8d5, 'pub', ![]);
        const _0x27d6ad = {
            'succesDEVMSG': { 'embeds': [_0x241c6f] },
            'succesPUBMSG': { 'embeds': [_0x3eb266] }
        };
        if (_0x6edc29[_0x5c18e9]['Email'] == '' || _0x6edc29[_0x5c18e9]['FirstName'] == '' || _0x6edc29[_0x5c18e9]['LastName'] == '' || _0x6edc29[_0x5c18e9]['Country'] == '' || _0x6edc29[_0x5c18e9]['Size'] == '' || _0x6edc29[_0x5c18e9]['Address1'] == '' || _0x6edc29[_0x5c18e9]['Zip'] == '') {
            console['log'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1cd004['useRandomProxy'] = ![])
            var _0x504954 = _0xb4f8fc[_0x5c18e9]['split'](':');
        else
            var _0x497cb7 = Math['round'](Math['random']() * (_0xb4f8fc['length'] - 0x1)), _0x504954 = _0xb4f8fc[_0x497cb7]['split'](':');
        const _0x37a37d = await _0x45d1b7['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x504954[0x0] + ':' + _0x504954[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3d8725 = await _0x37a37d['newPage']();
            await _0x3d8725['setDefaultNavigationTimeout'](0x1d4c0), await _0x3d8725['authenticate']({
                'username': '' + _0x504954[0x2],
                'password': '' + _0x504954[0x3]
            }), console['log'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3d8725['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3d8725['setRequestInterception'](!![]), _0x3d8725['on']('request', _0x3f2dcb => {
                _0x3f2dcb['resourceType']() === 'image' || _0x3f2dcb['resourceType']() === 'font' || _0x3f2dcb['resourceType']() === 'media' ? _0x3f2dcb['abort']() : _0x3f2dcb['continue']();
            }), await _0x3d8725['goto'](_0x1b8f56, { 'waitUntil': 'networkidle2' }), console['log'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x3d8725['waitForTimeout'](0xfa0), console['log'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x3d8725['waitForTimeout'](0x320);
            if (_0x6edc29[_0x5c18e9]['Size'] == 'RANDOM') {
                console['log'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x51662b = await _0x3d8725['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x424185 => {
                    return _0x424185['map'](_0x130590 => _0x130590['href']);
                });
                var _0x2bb8fc = Math['round'](Math['random']() * (_0x51662b['length'] - 0x1));
                await _0x3d8725['goto']('' + _0x51662b[_0x2bb8fc]);
            } else {
                console['log'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x6edc29[_0x5c18e9]['Size']);
                try {
                    const _0xe617a0 = await _0x3d8725['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x6edc29[_0x5c18e9]['Size'] + '\x22]\x20>\x20a', _0xf1373e => {
                        return _0xf1373e['map'](_0x1350cc => _0x1350cc['href']);
                    });
                    await _0x3d8725['goto']('' + _0xe617a0[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x1d09c9) {
                    console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20' + _0x1d09c9 + '\x20Size\x20not\x20found')), _0x376389 = 'Size\x20Not\x20Found';
                    var _0x2b4dcd = await _0x3c0821(_0x6edc29[_0x5c18e9], _0x41b8d5, 'dev', !![], _0x376389);
                    _0x27d6ad['errorDEV'] = { 'embeds': [_0x2b4dcd] };
                    _0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '' && await _0x3b1992(_0x1cd004['webhook'], _0x27d6ad['errorDEV']);
                    await _0x3b1992(_0x5c3e5c, _0x27d6ad['errorDEV']);
                    continue;
                }
            }
            await _0x3d8725['waitForTimeout'](0x258), await _0x3d8725['type']('#raffle-instagram', '' + _0x6edc29[_0x5c18e9]['Follower'], { 'delay': 0x64 }), await _0x3d8725['waitForTimeout'](0x384), await _0x3d8725['click']('#raffle-terms'), await _0x3d8725['waitForTimeout'](0x384), await _0x3d8725['evaluate'](() => {
                const _0xe5788c = document['querySelector']('button.btn[name=\x27add\x27]');
                _0xe5788c['click']();
            }), await _0x3d8725['waitForTimeout'](0xbb8), await _0x3d8725['waitForSelector']('#checkout_email'), await _0x18b118(0x3e8), console['log'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x719ef == 'sec' ? await _0x3d8725['type']('#checkout_email', '' + _0x6edc29[_0x5c18e9]['FirstName'] + _0x6edc29[_0x5c18e9]['LastName'] + _0x1cd004['catchall'], 0x32) : await _0x3d8725['type']('#checkout_email', '' + _0x6edc29[_0x5c18e9]['Email'], 0x32);
            await _0x18b118(0x320), await _0x3d8725['select']('#checkout_shipping_address_country', '' + _0x6edc29[_0x5c18e9]['Country']), await _0x3d8725['waitForTimeout'](0x258), await _0x3d8725['type']('#checkout_shipping_address_first_name', '' + _0x6edc29[_0x5c18e9]['FirstName']), await _0x3d8725['waitForTimeout'](0x320), await _0x3d8725['type']('#checkout_shipping_address_last_name', '' + _0x6edc29[_0x5c18e9]['LastName']), await _0x3d8725['waitForTimeout'](0x2bc), await _0x3d8725['type']('#checkout_shipping_address_address1', _0x6edc29[_0x5c18e9]['Address1'] + '\x20' + _0x6edc29[_0x5c18e9]['HouseNumber']), await _0x3d8725['waitForTimeout'](0x2bc), await _0x3d8725['type']('#checkout_shipping_address_address2', '' + _0x6edc29[_0x5c18e9]['Address2']), await _0x3d8725['waitForTimeout'](0x2bc);
            _0x6edc29[_0x5c18e9]['Postcode'] == undefined ? await _0x3d8725['type']('#checkout_shipping_address_zip', '' + _0x6edc29[_0x5c18e9]['Zip']) : await _0x3d8725['type']('#checkout_shipping_address_zip', '' + _0x6edc29[_0x5c18e9]['Postcode']);
            await _0x3d8725['waitForTimeout'](0x2bc), await _0x3d8725['type']('#checkout_shipping_address_city', '' + _0x6edc29[_0x5c18e9]['City']), await _0x3d8725['waitForTimeout'](0x2bc), console['log'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x3d8725, _0x3d8725['evaluate'](() => {
                const _0x4ea68d = document['querySelector']('#continue_button');
                for (var _0x29b001 = 0x0; _0x29b001 < 0x5; _0x29b001++) {
                    if (_0x4ea68d) {
                        _0x4ea68d['click'](), _0x4ea68d['click']();
                        break;
                    } else
                        _0x18b118(0xfa0);
                }
            }), await _0x3d8725['waitForTimeout'](0x1194);
            try {
                await _0x3d8725['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x3d8725['evaluate'](() => {
                const _0x57e759 = document['querySelector']('#continue_button');
                for (var _0x52a5b1 = 0x0; _0x52a5b1 < 0x5; _0x52a5b1++) {
                    if (_0x57e759) {
                        _0x57e759['click']();
                        break;
                    } else
                        _0x18b118(0xfa0);
                }
            }), await _0x3d8725['waitForTimeout'](0x7d0), console['log'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3d8725['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x3d8725['evaluate'](() => {
                const _0x3365e1 = document['querySelector']('#continue_button');
                for (var _0x491a8e = 0x0; _0x491a8e < 0x5; _0x491a8e++) {
                    if (_0x3365e1) {
                        _0x3365e1['click']();
                        break;
                    } else
                        _0x18b118(0xfa0);
                }
            }), await _0x3d8725['waitForTimeout'](0x1194), await _0x3d8725['waitForSelector']('#continue_button'), _0x3d8725['evaluate'](() => {
                const _0x712f0d = document['querySelector']('#continue_button');
                for (var _0x89669a = 0x0; _0x89669a < 0x5; _0x89669a++) {
                    if (_0x712f0d) {
                        _0x712f0d['click']();
                        break;
                    } else
                        _0x18b118(0xfa0);
                }
            });
            try {
                await _0x3d8725['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x83832e['green'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '')
                    try {
                        await _0x3b1992(_0x1cd004['webhook'], _0x27d6ad['succesDEVMSG']);
                    } catch {
                    }
                await _0x18b118(0xc8), await _0x3b1992(_0x56f4d7, _0x27d6ad['succesDEVMSG']), await _0x18b118(0xc8);
                try {
                    await _0x3b1992(_0x56a82e, _0x27d6ad['succesPUBMSG']);
                } catch {
                }
            } catch (_0x5f1454) {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x5f1454));
            }
        } catch (_0x124708) {
            console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20' + _0x124708)), _0x376389 = '' + _0x124708;
            var _0x2b4dcd = await _0x3c0821(_0x6edc29[_0x5c18e9], _0x41b8d5, 'dev', !![], _0x376389);
            _0x27d6ad['errorDEV'] = { 'embeds': [_0x2b4dcd] }, _0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '' && await _0x3b1992(_0x1cd004['webhook'], _0x27d6ad['errorDEV']), await _0x3b1992(_0x5c3e5c, _0x27d6ad['errorDEV']), _0x386a47 = 'yes';
        } finally {
            _0x37a37d && _0x37a37d['close']();
            if (_0x386a47 == 'yes' && _0xefb6b8 != 0x5 && _0x376389 != 'Size\x20Not\x20Found') {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x41b8d5['name'] + ']\x20Task\x20' + (_0x5c18e9 + 0x1) + '\x20:\x20Retrying')), _0x5c18e9 = _0x5c18e9 - 0x1, _0xefb6b8 = _0xefb6b8 + 0x1;
                continue;
            }
            if (_0x5c18e9 + 0x1 == _0x6edc29['length']) {
                console['log'](_0x83832e['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x18b118(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x1cd004['AfewDelay'] + '\x20ms'), await _0x18b118(_0x1cd004['AfewDelay']);
        }
    }
};
async function _0x8fd97a(_0x39bf1f, _0x40de46, _0x55ace7, _0x12a44e) {
    _0x45d1b7['use'](_0x59265c()), _0x45d1b7['use'](_0x3a0174({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1cd004['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2a60ef = 0x0; _0x2a60ef < _0x55ace7['length']; _0x2a60ef++) {
        var _0x28c28f = '', _0xac9240 = 0x0;
        _0x29b05f(_0x40de46['name'] + '\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20/\x20' + _0x55ace7['length'] + '\x20||\x20File:\x20' + _0x3851ce + '\x20Proxies:\x20' + _0x567018), await _0x3f7bcb(_0x55ace7, _0x2a60ef);
        var _0x165c41 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xb83366
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1cd004['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x524cd1
                }
            ]
        }];
        const _0x2ea7a6 = { 'embeds': _0x165c41 };
        var _0x47ded5 = await _0x3c0821(_0x55ace7[_0x2a60ef], _0x40de46, 'acc', ![]);
        const _0x54e1dd = { 'succesDEVMSG': { 'embeds': [_0x47ded5] } };
        if (_0x55ace7[_0x2a60ef]['Email'] == '' || _0x55ace7[_0x2a60ef]['FirstName'] == '' || _0x55ace7[_0x2a60ef]['LastName'] == '') {
            console['log'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x55ace7[_0x2a60ef]['Password'] == '' && (_0x55ace7[_0x2a60ef]['Password'] = 'JRaffles23!');
        if (_0x1cd004['useRandomProxy'] = ![])
            var _0x5cf3dc = _0x12a44e[_0x2a60ef]['split'](':');
        else
            var _0x51afe8 = Math['round'](Math['random']() * (_0x12a44e['length'] - 0x1)), _0x5cf3dc = _0x12a44e[_0x51afe8]['split'](':');
        const _0x979954 = await _0x45d1b7['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5cf3dc[0x0] + ':' + _0x5cf3dc[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x442bf7 = await _0x979954['newPage']();
            await _0x442bf7['authenticate']({
                'username': '' + _0x5cf3dc[0x2],
                'password': '' + _0x5cf3dc[0x3]
            }), console['log'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20Getting\x20Session'), await _0x442bf7['setRequestInterception'](!![]), _0x442bf7['on']('request', _0x107d2f => {
                _0x107d2f['resourceType']() === 'image' || _0x107d2f['resourceType']() === 'font' || _0x107d2f['resourceType']() === 'media' ? _0x107d2f['abort']() : _0x107d2f['continue']();
            }), await _0x442bf7['goto'](_0x39bf1f), await _0x18b118(0xbb8), console['log'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x442bf7['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x442bf7['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x442bf7['waitForSelector']('#button-register'), await _0x18b118(0x7d0), await _0x442bf7['evaluate'](() => {
                const _0x3e9af0 = document['querySelector']('#button-register');
                _0x3e9af0['click']();
            }), console['log'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x18b118(0x1388), await _0x442bf7['waitForSelector']('#customer_salutation'), await _0x442bf7['select']('#customer_salutation', 'mr'), await _0x18b118(0x7d0), await _0x442bf7['waitForSelector']('#customer_firstname'), await _0x442bf7['type']('#customer_firstname', '' + _0x55ace7[_0x2a60ef]['FirstName']), await _0x18b118(0x352), await _0x442bf7['waitForSelector']('#customer_lastname'), await _0x442bf7['type']('#customer_lastname', '' + _0x55ace7[_0x2a60ef]['LastName']), await _0x18b118(0x352), await _0x442bf7['type']('#email-input', '' + _0x55ace7[_0x2a60ef]['Email']), await _0x18b118(0x352), await _0x442bf7['type']('#email-confirm-input', '' + _0x55ace7[_0x2a60ef]['Email']), await _0x18b118(0x352), await _0x442bf7['type']('#register-password', '' + _0x55ace7[_0x2a60ef]['Password']), await _0x18b118(0x352), await _0x442bf7['type']('#password-confirm', '' + _0x55ace7[_0x2a60ef]['Password']), await _0x18b118(0x352), console['log'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x442bf7['click']('#consent'), await _0x18b118(0x1f4);
            const _0x20a75b = await _0x442bf7['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x20a75b) {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x442bf7['click']('#buttonRegister');
            try {
                await _0x442bf7['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x83832e['yellow'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20Account\x20' + _0x55ace7[_0x2a60ef]['Email'] + '\x20Generated!')), console['log'](_0x83832e['yellow'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x55ace7[_0x2a60ef]['Email'])), await _0x18b118(0x4b0);
            async function _0x324c3e() {
                console['log'](_0x83832e['yellow'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x3d0892 = await _0x3b7e07['get']('Code');
                return _0x3d0892['Code'];
            }
            ;
            code = await _0x324c3e(), _0x18b118(0x320), console['log'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20Verifying..'), await _0x442bf7['type']('#verificationCode', code), await _0x18b118(0x1f4), await _0x442bf7['click']('#buttonVerify'), await _0x18b118(0x190), await _0x442bf7['click']('#buttonVerify'), await _0x18b118(0x3e8);
            try {
                await _0x442bf7['waitForSelector']('div.b-user_greeting'), console['log'](_0x83832e['green'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20Account\x20' + _0x55ace7[_0x2a60ef]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x4795e1['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x55ace7[_0x2a60ef]['Email'] + ',' + _0x55ace7[_0x2a60ef]['Password'] + ','), console['log'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20Account\x20' + _0x55ace7[_0x2a60ef]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '' && await _0x3b1992(_0x1cd004['webhook'], _0x54e1dd['succesDEVMSG']);
                } catch {
                }
                await _0x3b1992(_0x3cfe11, _0x54e1dd['succesDEVMSG']);
            } catch {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x558a1e) {
            console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20' + _0x558a1e)), _0x165c41[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x165c41[0x0]['description'] = '' + _0x558a1e, await _0x3b1992(_0x5c3e5c, _0x2ea7a6), _0x28c28f = 'yes';
        } finally {
            _0x979954 && _0x979954['close']();
            if (_0x28c28f == 'yes' && _0xac9240 != 0x5) {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x40de46['name'] + ']\x20Task\x20' + (_0x2a60ef + 0x1) + '\x20:\x20Retrying')), _0x2a60ef = _0x2a60ef - 0x1, _0xac9240 = _0xac9240 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x1cd004['delay'] + '\x20ms'), await _0x18b118(_0x1cd004['delay']);
        }
    }
}
async function _0xa19d6f(_0x5e06a6, _0xe22e05, _0x5a3940) {
    _0x45d1b7['use'](_0x59265c()), _0x45d1b7['use'](_0x3a0174({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1cd004['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4fbab1 = 0x0; _0x4fbab1 < _0xe22e05['length']; _0x4fbab1++) {
        var _0x26b6c4, _0x246514 = '', _0x470a75 = 0x0;
        _0x29b05f(_0x5e06a6['name'] + '\x20Task\x20' + (_0x4fbab1 + 0x1) + '\x20/\x20' + _0xe22e05['length'] + '\x20||\x20File:\x20' + _0x3851ce + '\x20Proxies:\x20' + _0x567018);
        var _0x5b90b1 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xb83366
                },
                {
                    'name': 'Product',
                    'value': '' + _0xe22e05[_0x4fbab1]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0xe22e05[_0x4fbab1]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1cd004['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x524cd1
                }
            ]
        }], _0xa3c0ce = await _0x3c0821(_0xe22e05[_0x4fbab1], _0x5e06a6, 'dev', ![]), _0x18c0ff = await _0x3c0821(_0xe22e05[_0x4fbab1], _0x5e06a6, 'pub', ![]);
        const _0x4b4748 = {
            'succesDEVMSG': { 'embeds': [_0xa3c0ce] },
            'succesPUBMSG': { 'embeds': [_0x18c0ff] }
        };
        await _0x3f7bcb(_0xe22e05, _0x4fbab1);
        if (_0xe22e05[_0x4fbab1]['Email'] == '' || _0xe22e05[_0x4fbab1]['Password'] == '' || _0xe22e05[_0x4fbab1]['FirstName'] == '' || _0xe22e05[_0x4fbab1]['LastName'] == '') {
            console['log'](_0x131181() + '\x20[' + _0x5e06a6['name'] + ']\x20Task\x20' + (_0x4fbab1 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1cd004['useRandomProxy'] = ![])
            var _0x3e62ea = _0x5a3940[_0x4fbab1]['split'](':');
        else
            var _0x2a1bdc = Math['round'](Math['random']() * (_0x5a3940['length'] - 0x1)), _0x3e62ea = _0x5a3940[_0x2a1bdc]['split'](':');
        const _0x959630 = await _0x45d1b7['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3e62ea[0x0] + ':' + _0x3e62ea[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x11c8b0 = await _0x959630['newPage']();
            await _0x11c8b0['authenticate']({
                'username': '' + _0x3e62ea[0x2],
                'password': '' + _0x3e62ea[0x3]
            }), console['log'](_0x131181() + '\x20[' + _0x5e06a6['name'] + ']\x20Task\x20' + (_0x4fbab1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x11c8b0['setRequestInterception'](!![]), _0x11c8b0['on']('request', _0x3fd575 => {
                _0x3fd575['resourceType']() === 'image' || _0x3fd575['resourceType']() === 'font' || _0x3fd575['resourceType']() === 'media' ? _0x3fd575['abort']() : _0x3fd575['continue']();
            }), await _0x11c8b0['goto']('' + _0xe22e05[_0x4fbab1]['Url'], { 'waitUntil': 'networkidle2' }), await _0x18b118(0x12c);
            try {
                await _0x11c8b0['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x11c8b0['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x131181() + '\x20[' + _0x5e06a6['name'] + ']\x20Task\x20' + (_0x4fbab1 + 0x1) + '\x20:\x20Logging\x20in'), await _0x11c8b0['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x11c8b0['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x11c8b0['waitForSelector']('#username'), await _0x11c8b0['type']('#username', _0xe22e05[_0x4fbab1]['Email']), await _0x11c8b0['waitForSelector']('#password'), await _0x11c8b0['type']('#password', _0xe22e05[_0x4fbab1]['Password']), await _0x18b118(0x190), await _0x11c8b0['click']('#buttonSubmit'), await _0x11c8b0['waitForSelector']('div.b-user_greeting'), console['log'](_0x131181() + '\x20[' + _0x5e06a6['name'] + ']\x20Task\x20' + (_0x4fbab1 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x18b118(0x1f4), await _0x11c8b0['goto']('' + _0xe22e05[_0x4fbab1]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x131181() + '\x20[' + _0x5e06a6['name'] + ']\x20Task\x20' + (_0x4fbab1 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0xe22e05[_0x4fbab1]['Size']);
            let _0x85bda5 = _0xe22e05[_0x4fbab1]['Size']['replace']('.5', '\x201/2');
            await _0x11c8b0['click']('button[title=\x22' + _0x85bda5 + '\x22]'), await _0x18b118(0x1f4);
            try {
                await _0x11c8b0['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x18b118(0x12c), console['log'](_0x131181() + '\x20[' + _0x5e06a6['name'] + ']\x20Task\x20' + (_0x4fbab1 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x11c8b0['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x18b118(0x12c), await _0x11c8b0['type']('#dwfrm_raffle_addressFields_firstName', _0xe22e05[_0x4fbab1]['FirstName']), await _0x18b118(0x12c), await _0x11c8b0['type']('#dwfrm_raffle_addressFields_lastName', _0xe22e05[_0x4fbab1]['LastName']), await _0x18b118(0x12c), await _0x11c8b0['select']('#dwfrm_raffle_addressFields_country', _0xe22e05[_0x4fbab1]['Country']), await _0x18b118(0x12c), await _0x11c8b0['type']('#dwfrm_raffle_addressFields_city', _0xe22e05[_0x4fbab1]['City']), await _0x18b118(0x12c);
            _0xe22e05[_0x4fbab1]['Postcode'] == undefined && (_0xe22e05[_0x4fbab1]['Postcode'] = _0xe22e05[_0x4fbab1]['Zip']);
            await _0x11c8b0['type']('#dwfrm_raffle_addressFields_postalCode', _0xe22e05[_0x4fbab1]['Postcode']), await _0x18b118(0x12c), await _0x11c8b0['type']('#dwfrm_raffle_addressFields_address1', _0xe22e05[_0x4fbab1]['Address1']), await _0x18b118(0x12c), await _0x11c8b0['type']('#dwfrm_raffle_addressFields_address2', _0xe22e05[_0x4fbab1]['HouseNumber']), await _0x18b118(0x12c), await _0x11c8b0['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0xe22e05[_0x4fbab1]['Address2']), await _0x18b118(0x12c), await _0x11c8b0['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x18b118(0x12c), await _0x11c8b0['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0xe22e05[_0x4fbab1]['Follower']), await _0x18b118(0x1f4), await _0x11c8b0['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x18b118(0x1f4), console['log'](_0x131181() + '\x20[' + _0x5e06a6['name'] + ']\x20Task\x20' + (_0x4fbab1 + 0x1) + '\x20:\x20' + _0x83832e['blue']('Awaiting\x20Paypal\x20Payment')), await _0x11c8b0['click']('.b-paypal_button');
            try {
                await _0x11c8b0['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x83832e['green'](_0x131181() + '\x20[' + _0x5e06a6['name'] + ']\x20Task\x20' + (_0x4fbab1 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '' && await _0x3b1992(_0x1cd004['webhook'], _0x4b4748['succesDEVMSG']), await _0x18b118(0xc8), await _0x3b1992(_0x56f4d7, _0x4b4748['succesDEVMSG']), await _0x18b118(0xc8), await _0x3b1992(_0x56a82e, _0x4b4748['succesPUBMSG']);
            } catch (_0xcfc1ad) {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x5e06a6['name'] + ']\x20Task\x20' + (_0x4fbab1 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0xcfc1ad)), _0x26b6c4 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0xcfc1ad;
                var _0xc4e1d2 = await _0x3c0821(_0xe22e05[_0x4fbab1], _0x5e06a6, 'dev', !![], _0x26b6c4);
                _0x4b4748['errorDEV'] = { 'embeds': [_0xc4e1d2] }, _0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '' && await _0x3b1992(_0x1cd004['webhook'], _0x4b4748['errorDEV']), await _0x3b1992(_0x5c3e5c, _0x4b4748['errorDEV']);
            }
        } catch (_0x3e1d03) {
            console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x5e06a6['name'] + ']\x20Task\x20' + (_0x4fbab1 + 0x1) + '\x20:\x20' + _0x3e1d03)), _0x26b6c4 = '' + _0x3e1d03;
            var _0xc4e1d2 = await _0x3c0821(_0xe22e05[_0x4fbab1], _0x5e06a6, 'dev', !![], _0x26b6c4);
            _0x4b4748['errorDEV'] = { 'embeds': [_0xc4e1d2] }, _0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '' && await _0x3b1992(_0x1cd004['webhook'], _0x4b4748['errorDEV']), await _0x3b1992(_0x5c3e5c, _0x4b4748['errorDEV']), _0x246514 = 'yes';
        } finally {
            _0x959630 && _0x959630['close']();
            if (_0x246514 == 'yes' && _0x470a75 != 0x5) {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x5e06a6['name'] + ']\x20Task\x20' + (_0x4fbab1 + 0x1) + '\x20:\x20Retrying')), _0x4fbab1 = _0x4fbab1 - 0x1, _0x470a75 = _0x470a75 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x1cd004['AfewDelay'] + '\x20ms'), await _0x18b118(_0x1cd004['AfewDelay']);
        }
    }
}
async function _0xd72051(_0x450116, _0x1ea710) {
    _0x45d1b7['use'](_0x59265c()), _0x45d1b7['use'](_0x3a0174({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1cd004['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xa9c41 = 0x0; _0xa9c41 < bouncewear['length']; _0xa9c41++) {
        await _0x3f7bcb(bouncewear, _0xa9c41);
        if (bouncewear[_0xa9c41]['Email'] == '' || bouncewear[_0xa9c41]['Password'] == '' || bouncewear[_0xa9c41]['FirstName'] == '' || bouncewear[_0xa9c41]['LastName'] == '') {
            console['log'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0xa9c41 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1cd004['useRandomProxy'] = ![])
            var _0xcb384f = _0x2a42e8()[_0xa9c41]['split'](':');
        else
            var _0x54bd84 = Math['round'](Math['random']() * (_0x2a42e8()['length'] - 0x1)), _0xcb384f = _0x2a42e8()[_0x54bd84]['split'](':');
        const _0x8f3303 = await _0x45d1b7['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0xcb384f[0x0] + ':' + _0xcb384f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4710b3 = await _0x8f3303['newPage']();
            await _0x4710b3['authenticate']({
                'username': '' + _0xcb384f[0x2],
                'password': '' + _0xcb384f[0x3]
            }), console['log'](_0x131181() + '\x20[' + _0x1ea710['name'] + ']\x20Task\x20' + (_0xa9c41 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4710b3['setRequestInterception'](!![]), _0x4710b3['on']('request', _0x2c81ab => {
                _0x2c81ab['resourceType']() === 'image' || _0x2c81ab['resourceType']() === 'font' || _0x2c81ab['resourceType']() === 'media' ? _0x2c81ab['abort']() : _0x2c81ab['continue']();
            }), await _0x4710b3['goto'](_0x450116), await _0x18b118(0xbb8), await _0x4710b3['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x131181() + '\x20[' + _0x1ea710['name'] + ']\x20Task\x20' + (_0xa9c41 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4710b3['type']('#RegisterForm-FirstName', '' + bouncewear[_0xa9c41]['FirstName']), await _0x18b118(0x226), await _0x4710b3['type']('#RegisterForm-LastName', '' + bouncewear[_0xa9c41]['LastName']), await _0x18b118(0x226), await _0x4710b3['type']('#RegisterForm-email', '' + bouncewear[_0xa9c41]['Email']), await _0x18b118(0x226), await _0x4710b3['type']('#RegisterForm-password', '' + bouncewear[_0xa9c41]['Password']), await _0x18b118(0x226), await _0x4710b3['click']('#marketing'), console['log'](_0x131181() + '\x20[' + _0x1ea710['name'] + ']\x20Task\x20' + (_0xa9c41 + 0x1) + '\x20:\x20Submitting..'), await _0x4710b3['$eval']('#RegisterForm', _0x49fa3d => _0x49fa3d['submit']()), await _0x18b118(0x1f40), console['log'](_0x131181() + '\x20[' + _0x1ea710['name'] + ']\x20Task\x20' + (_0xa9c41 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x4710b3['solveRecaptchas'](), await _0x4710b3['click']('.shopify-challenge__button.btn');
            async function _0x36bef0() {
                for (var _0x2542d6 = 0x0; _0x2542d6 < 0x4; _0x2542d6++) {
                    try {
                        console['log']('try'), await _0x4710b3['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x131181() + '\x20[' + _0x1ea710['name'] + ']\x20Task\x20' + (_0xa9c41 + 0x1) + '\x20:\x20' + _0x83832e['red']('Catpcha\x20failed,\x20retrying..')), await _0x4710b3['solveRecaptchas'](), await _0x4710b3['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x36bef0(), console['log'](_0x131181() + '\x20[' + _0x1ea710['name'] + ']\x20Task\x20' + (_0xa9c41 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x18b118(0x1f4);
            try {
                await _0x4710b3['waitForSelector']('.featured-title'), await _0x18b118(0x1f4), console['log'](_0x83832e['green'](_0x131181() + '\x20[' + _0x1ea710['name'] + ']\x20Task\x20' + (_0xa9c41 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0xa9c41]['Email'] + '\x20Generated!')), _0x4795e1['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0xa9c41]['Email'] + ',' + bouncewear[_0xa9c41]['Password']), console['log'](_0x83832e['yellow'](_0x131181() + '\x20[' + _0x1ea710['name'] + ']\x20Task\x20' + (_0xa9c41 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0xa9c41]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x31d65d) {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0xa9c41 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x31d65d));
            }
        } catch (_0x1f4c7b) {
            console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0xa9c41 + 0x1) + '\x20:\x20' + _0x1f4c7b));
        } finally {
            _0x8f3303 && _0x8f3303['close'](), console['log']('Waiting\x20for\x20' + _0x1cd004['delay'] + '\x20ms'), await _0x18b118(_0x1cd004['delay']);
        }
    }
}
async function _0x5b92dc(_0x582b7f, _0x1f2ecc, _0xa0b1c9, _0x48f76b) {
    _0x45d1b7['use'](_0x59265c()), _0x45d1b7['use'](_0x3a0174({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1cd004['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x10c426 = 0x0; _0x10c426 < _0xa0b1c9['length']; _0x10c426++) {
        var _0x308635 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xb83366
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1cd004['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x524cd1
                }
            ]
        }];
        const _0x313755 = { 'embeds': _0x308635 };
        _0x29b05f(_0x1f2ecc['name'] + '\x20Task\x20' + (_0x10c426 + 0x1) + '\x20/\x20' + _0xa0b1c9['length'] + '\x20||\x20File:\x20' + _0x3851ce + '\x20Proxies:\x20' + _0x567018), await _0x3f7bcb(_0xa0b1c9, _0x10c426);
        var _0x1d67d6 = await _0x3c0821(_0xa0b1c9[_0x10c426], _0x1f2ecc, 'acc', ![]);
        const _0x3fb82a = { 'succesDEVMSG': { 'embeds': [_0x1d67d6] } };
        if (_0xa0b1c9[_0x10c426]['Email'] == '' || _0xa0b1c9[_0x10c426]['FirstName'] == '' || _0xa0b1c9[_0x10c426]['LastName'] == '') {
            console['log'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0x10c426 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x18b118(0x7d0);
            continue;
        }
        (_0xa0b1c9[_0x10c426]['Password'] == '' || _0xa0b1c9[_0x10c426] == undefined) && _0xa0b1c9[_0x10c426]['Password'] == 'JRaffles23!';
        if (_0x1cd004['useRandomProxy'] = ![])
            var _0x511ef1 = _0x48f76b[_0x10c426]['split'](':');
        else
            var _0x176653 = Math['round'](Math['random']() * (_0x48f76b['length'] - 0x1)), _0x511ef1 = _0x48f76b[_0x176653]['split'](':');
        const _0xbfcb3 = await _0x45d1b7['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x511ef1[0x0] + ':' + _0x511ef1[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x490e57 = await _0xbfcb3['newPage']();
            await _0x490e57['authenticate']({
                'username': '' + _0x511ef1[0x2],
                'password': '' + _0x511ef1[0x3]
            }), console['log'](_0x131181() + '\x20[' + _0x1f2ecc['name'] + ']\x20Task\x20' + (_0x10c426 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x490e57['setRequestInterception'](!![]), _0x490e57['on']('request', _0x3e9489 => {
                _0x3e9489['resourceType']() === 'image' || _0x3e9489['resourceType']() === 'font' || _0x3e9489['resourceType']() === 'media' ? _0x3e9489['abort']() : _0x3e9489['continue']();
            }), await _0x490e57['goto'](_0x582b7f), await _0x18b118(0xbb8), await _0x490e57['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x131181() + '\x20[' + _0x1f2ecc['name'] + ']\x20Task\x20' + (_0x10c426 + 0x1) + '\x20:\x20Filling\x20information'), await _0x490e57['type']('#RegisterForm-FirstName', '' + _0xa0b1c9[_0x10c426]['FirstName']), await _0x18b118(0x226), await _0x490e57['type']('#RegisterForm-LastName', '' + _0xa0b1c9[_0x10c426]['LastName']), await _0x18b118(0x226), await _0x490e57['type']('#RegisterForm-email', '' + _0xa0b1c9[_0x10c426]['Email']), await _0x18b118(0x226), await _0x490e57['type']('#RegisterForm-password', '' + _0xa0b1c9[_0x10c426]['Password']), await _0x18b118(0x226), console['log'](_0x131181() + '\x20[' + _0x1f2ecc['name'] + ']\x20Task\x20' + (_0x10c426 + 0x1) + '\x20:\x20Submitting..'), await _0x490e57['$eval']('#RegisterForm', _0x21457a => _0x21457a['submit']()), await _0x18b118(0x1f40);
            try {
                await _0x490e57['waitForSelector']('.home-page-grid__collection'), await _0x18b118(0x1f4), console['log'](_0x83832e['green'](_0x131181() + '\x20[' + _0x1f2ecc['name'] + ']\x20Task\x20' + (_0x10c426 + 0x1) + '\x20:\x20Account\x20' + _0xa0b1c9[_0x10c426]['Email'] + '\x20Generated!')), _0x4795e1['appendFileSync']('../accounts/patta.csv', '\x0a' + _0xa0b1c9[_0x10c426]['Email'] + ',' + _0xa0b1c9[_0x10c426]['Password']), console['log'](_0x83832e['yellow'](_0x131181() + '\x20[' + _0x1f2ecc['name'] + ']\x20Task\x20' + (_0x10c426 + 0x1) + '\x20:\x20Account\x20' + _0xa0b1c9[_0x10c426]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '' && await _0x3b1992(_0x1cd004['webhook'], _0x3fb82a['succesDEVMSG']);
                } catch {
                }
                await _0x3b1992(_0x3cfe11, _0x3fb82a['succesDEVMSG']);
            } catch (_0x24a6d2) {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0x10c426 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x24a6d2));
            }
        } catch (_0x3bd3e5) {
            console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0x10c426 + 0x1) + '\x20:\x20' + _0x3bd3e5));
        } finally {
            _0xbfcb3 && _0xbfcb3['close'](), console['log']('Waiting\x20for\x20' + _0x1cd004['delay'] + '\x20ms'), await _0x18b118(_0x1cd004['delay']);
        }
    }
}
async function _0x2926e7(_0x3f8773, _0x44df86, _0x4ea6aa, _0x8b0ad6) {
    _0x45d1b7['use'](_0x59265c()), _0x45d1b7['use'](_0x3a0174({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1cd004['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x44f204 = 0x0; _0x44f204 < _0x4ea6aa['length']; _0x44f204++) {
        var _0x4ccb01, _0x44172b = '', _0x38e1d1 = 0x0;
        _0x29b05f(_0x44df86['name'] + '\x20Task\x20' + (_0x44f204 + 0x1) + '\x20/\x20' + _0x4ea6aa['length'] + '\x20||\x20File:\x20' + _0x3851ce + '\x20Proxies:\x20' + _0x567018), await _0x3f7bcb(_0x4ea6aa, _0x44f204);
        if (_0x4ea6aa[_0x44f204]['Email'] == '' || _0x4ea6aa[_0x44f204]['Password'] == '' || _0x4ea6aa[_0x44f204]['FirstName'] == '' || _0x4ea6aa[_0x44f204]['LastName'] == '') {
            console['log'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0x44f204 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1cd004['useRandomProxy'] = ![])
            var _0x1c095a = _0x8b0ad6[_0x44f204]['split'](':');
        else
            var _0x3f88dc = Math['round'](Math['random']() * (_0x8b0ad6['length'] - 0x1)), _0x1c095a = _0x8b0ad6[_0x3f88dc]['split'](':');
        const _0x1b13d4 = await _0x45d1b7['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1c095a[0x0] + ':' + _0x1c095a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x200d53 = await _0x1b13d4['newPage']();
            await _0x200d53['authenticate']({
                'username': '' + _0x1c095a[0x2],
                'password': '' + _0x1c095a[0x3]
            }), console['log'](_0x131181() + '\x20[' + _0x44df86['name'] + ']\x20Task\x20' + (_0x44f204 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x200d53['setRequestInterception'](!![]), _0x200d53['on']('request', _0x35d8f5 => {
                _0x35d8f5['resourceType']() === 'image' || _0x35d8f5['resourceType']() === 'font' || _0x35d8f5['resourceType']() === 'media' ? _0x35d8f5['abort']() : _0x35d8f5['continue']();
            }), await _0x200d53['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x200d53['waitForSelector']('#CustomerEmail'), console['log'](_0x131181() + '\x20[' + _0x44df86['name'] + ']\x20Task\x20' + (_0x44f204 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x200d53['type']('#CustomerEmail', '' + _0x4ea6aa[_0x44f204]['Email']), await _0x18b118(0x12c), await _0x200d53['type']('#CustomerPassword', '' + _0x4ea6aa[_0x44f204]['Password']), await _0x18b118(0x226), await _0x200d53['$eval']('#customer_login', _0x51bf95 => _0x51bf95['submit']());
            try {
                await _0x200d53['waitForSelector']('#orders'), await _0x18b118(0x4b0);
            } catch {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x44df86['name'] + ']\x20Task\x20' + (_0x44f204 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x200d53['goto']('' + _0x4ea6aa[_0x44f204]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x18b118(0xbb8), console['log'](_0x131181() + '\x20[' + _0x44df86['name'] + ']\x20Task\x20' + (_0x44f204 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x200d53['waitForSelector']('#email');
            } catch {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x44df86['name'] + ']\x20Task\x20' + (_0x44f204 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x200d53['type']('#email', '' + _0x4ea6aa[_0x44f204]['Email']), await _0x18b118(0x384), await _0x200d53['type']('#first_name', '' + _0x4ea6aa[_0x44f204]['FirstName']), await _0x18b118(0x514), await _0x200d53['type']('#last_name', '' + _0x4ea6aa[_0x44f204]['LastName']), await _0x18b118(0x514), await _0x200d53['type']('#street_address', _0x4ea6aa[_0x44f204]['Address1'] + '\x20' + _0x4ea6aa[_0x44f204]['HouseNumber'] + '\x20' + _0x4ea6aa[_0x44f204]['Address2']), await _0x18b118(0x2bc);
            _0x4ea6aa[_0x44f204]['Postcode'] == undefined && (_0x4ea6aa[_0x44f204]['Postcode'] = _0x4ea6aa[_0x44f204]['Zip']);
            await _0x200d53['type']('#zip_code', '' + _0x4ea6aa[_0x44f204]['Postcode']), await _0x18b118(0x320), await _0x200d53['type']('#city', '' + _0x4ea6aa[_0x44f204]['City']), await _0x18b118(0x320), await _0x200d53['type']('#bday', '01/01/1994'), await _0x18b118(0x320), await _0x200d53['type']('#instagram', '' + _0x4ea6aa[_0x44f204]['Follower']), await _0x18b118(0x352);
            if (_0x4ea6aa[_0x44f204]['Size'] == 'RANDOM') {
                const _0x4deac5 = await _0x200d53['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x53eb53 => {
                    return _0x53eb53['map'](_0x41eafb => _0x41eafb['textContent']);
                });
                var _0x29e0d6 = Math['round'](Math['random']() * (_0x4deac5['length'] - 0x1));
                console['log'](_0x131181() + '\x20[' + _0x44df86['name'] + ']\x20Task\x20' + (_0x44f204 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x4deac5[_0x29e0d6]), await _0x200d53['click']('label[data-eu-size=\x22' + _0x4deac5[_0x29e0d6] + '\x22]');
            } else {
                console['log'](_0x131181() + '\x20[' + _0x44df86['name'] + ']\x20Task\x20' + (_0x44f204 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x4ea6aa[_0x44f204]['Size']);
                try {
                    await _0x200d53['click']('label[data-eu-size=\x22' + _0x4ea6aa[_0x44f204]['Size'] + '\x22]');
                } catch {
                    await _0x200d53['click']('label[data-eu-size=\x22' + _0x4ea6aa[_0x44f204]['Size'] + '.0\x22]');
                }
            }
            await _0x18b118(0xbb8), await _0x200d53['$$eval']('.raffle__checkbox-label', _0x1d9e39 => _0x1d9e39['forEach'](_0x590dfe => _0x590dfe['click']())), await _0x18b118(0x7d0), console['log'](_0x131181() + '\x20[' + _0x44df86['name'] + ']\x20Task\x20' + (_0x44f204 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x200d53['click']('#raffle__form-submit'), await _0x18b118(0x1388);
            try {
                await _0x200d53['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x83832e['green'](_0x131181() + '\x20[' + _0x44df86['name'] + ']\x20Task\x20' + (_0x44f204 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x11af14) {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0x44f204 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x11af14));
            }
        } catch (_0x213e25) {
            console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0x44f204 + 0x1) + '\x20:\x20' + _0x213e25)), _0x44172b = 'yes';
        } finally {
            _0x1b13d4 && _0x1b13d4['close']();
            if (_0x44172b == 'yes' && _0x38e1d1 != 0x5) {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x44df86['name'] + ']\x20Task\x20' + (_0x44f204 + 0x1) + '\x20:\x20Retrying')), _0x44f204 = _0x44f204 - 0x1, _0x38e1d1 = _0x38e1d1 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x1cd004['delay'] + '\x20ms'), await _0x18b118(_0x1cd004['delay']);
        }
    }
}
async function _0x28897f(_0x2a905b, _0x55a6ab, _0x5978a5, _0x51f3bc) {
    _0x45d1b7['use'](_0x59265c()), _0x45d1b7['use'](_0x3a0174({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1cd004['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x525b8a = 0x0; _0x525b8a < _0x5978a5['length']; _0x525b8a++) {
        var _0x1f7a27 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xb83366
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1cd004['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x524cd1
                }
            ]
        }];
        const _0x4c0944 = { 'embeds': _0x1f7a27 };
        _0x29b05f(_0x55a6ab['name'] + '\x20Task\x20' + (_0x525b8a + 0x1) + '\x20/\x20' + _0x5978a5['length'] + '\x20||\x20File:\x20' + _0x3851ce + '\x20Proxies:\x20' + _0x567018), await _0x3f7bcb(_0x5978a5, _0x525b8a);
        var _0x49c410 = await _0x3c0821(_0x5978a5[_0x525b8a], _0x55a6ab, 'acc', ![]);
        const _0x19cb9d = { 'succesDEVMSG': { 'embeds': [_0x49c410] } };
        if (_0x5978a5[_0x525b8a]['Email'] == '' || _0x5978a5[_0x525b8a]['FirstName'] == '' || _0x5978a5[_0x525b8a]['LastName'] == '') {
            console['log'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0x525b8a + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x18b118(0x7d0);
            continue;
        }
        (_0x5978a5[_0x525b8a]['Password'] == '' || _0x5978a5[_0x525b8a] == undefined) && _0x5978a5[_0x525b8a]['Password'] == 'JRaffles23!';
        if (_0x1cd004['useRandomProxy'] = ![])
            var _0x5c57d1 = _0x51f3bc[_0x525b8a]['split'](':');
        else
            var _0x2694eb = Math['round'](Math['random']() * (_0x51f3bc['length'] - 0x1)), _0x5c57d1 = _0x51f3bc[_0x2694eb]['split'](':');
        const _0x15cb4 = await _0x45d1b7['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5c57d1[0x0] + ':' + _0x5c57d1[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2c4743 = await _0x15cb4['newPage']();
            await _0x2c4743['authenticate']({
                'username': '' + _0x5c57d1[0x2],
                'password': '' + _0x5c57d1[0x3]
            }), console['log'](_0x131181() + '\x20[' + _0x55a6ab['name'] + ']\x20Task\x20' + (_0x525b8a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2c4743['setRequestInterception'](!![]), _0x2c4743['on']('request', _0x3940e9 => {
                _0x3940e9['resourceType']() === 'image' || _0x3940e9['resourceType']() === 'font' || _0x3940e9['resourceType']() === 'media' ? _0x3940e9['abort']() : _0x3940e9['continue']();
            }), await _0x2c4743['goto']('https://drop.slamjam.com/account/register'), await _0x18b118(0xbb8), await _0x2c4743['waitForSelector']('#FirstName'), await _0x2c4743['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2c4743['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x131181() + '\x20[' + _0x55a6ab['name'] + ']\x20Task\x20' + (_0x525b8a + 0x1) + '\x20:\x20Filling\x20information'), await _0x18b118(0x4b0), await _0x2c4743['type']('#FirstName', '' + _0x5978a5[_0x525b8a]['FirstName']), await _0x18b118(0x226), await _0x2c4743['type']('#LastName', '' + _0x5978a5[_0x525b8a]['LastName']), await _0x18b118(0x226), await _0x2c4743['type']('#Email', '' + _0x5978a5[_0x525b8a]['Email']), await _0x18b118(0x2ee), await _0x2c4743['type']('#ConfirmEmail', '' + _0x5978a5[_0x525b8a]['Email']), await _0x18b118(0x2ee), await _0x2c4743['type']('#CreatePassword', '' + _0x5978a5[_0x525b8a]['Password']), await _0x18b118(0x2ee), await _0x2c4743['type']('#CreateConfirmPassword', '' + _0x5978a5[_0x525b8a]['Password']), await _0x18b118(0x226), console['log'](_0x131181() + '\x20[' + _0x55a6ab['name'] + ']\x20Task\x20' + (_0x525b8a + 0x1) + '\x20:\x20Submitting..'), await _0x2c4743['$eval']('#create_customer', _0x1609df => _0x1609df['submit']()), await _0x18b118(0x1388), console['log'](_0x131181() + '\x20[' + _0x55a6ab['name'] + ']\x20Task\x20' + (_0x525b8a + 0x1) + '\x20:\x20' + _0x83832e['cyan']('Solving\x20Captcha')), await _0x2c4743['solveRecaptchas'](), console['log'](_0x131181() + '\x20[' + _0x55a6ab['name'] + ']\x20Task\x20' + (_0x525b8a + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x2c4743['$eval']('.shopify-challenge__container\x20>\x20form', _0x52836a => _0x52836a['submit']());
            try {
                await _0x2c4743['waitForSelector']('.product-card__image'), await _0x18b118(0x1f4), console['log'](_0x83832e['green'](_0x131181() + '\x20[' + _0x55a6ab['name'] + ']\x20Task\x20' + (_0x525b8a + 0x1) + '\x20:\x20Account\x20' + _0x5978a5[_0x525b8a]['Email'] + '\x20Generated!')), _0x4795e1['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x5978a5[_0x525b8a]['Email'] + ',' + _0x5978a5[_0x525b8a]['Password']), console['log'](_0x83832e['yellow'](_0x131181() + '\x20[' + _0x55a6ab['name'] + ']\x20Task\x20' + (_0x525b8a + 0x1) + '\x20:\x20Account\x20' + _0x5978a5[_0x525b8a]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '' && await _0x3b1992(_0x1cd004['webhook'], _0x19cb9d['succesDEVMSG']);
                } catch {
                }
                await _0x3b1992(_0x3cfe11, _0x19cb9d['succesDEVMSG']);
            } catch (_0x15f3a3) {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0x525b8a + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x15f3a3));
            }
        } catch (_0x264bb5) {
            console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0x525b8a + 0x1) + '\x20:\x20' + _0x264bb5));
        } finally {
            _0x15cb4 && _0x15cb4['close'](), console['log']('Waiting\x20for\x20' + _0x1cd004['delay'] + '\x20ms'), await _0x18b118(_0x1cd004['delay']);
        }
    }
}
async function _0x25af15(_0x1d7109, _0x26589f, _0x4032ce, _0x30aab4) {
    _0x45d1b7['use'](_0x59265c()), _0x45d1b7['use'](_0x3a0174({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1cd004['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x415d0a = 0x0; _0x415d0a < _0x4032ce['length']; _0x415d0a++) {
        var _0x3badde = '', _0x1697fd = 0x0;
        _0x29b05f(_0x26589f['name'] + '\x20Task\x20' + (_0x415d0a + 0x1) + '\x20/\x20' + _0x4032ce['length'] + '\x20||\x20File:\x20' + _0x3851ce + '\x20Proxies:\x20' + _0x567018), await _0x3f7bcb(_0x4032ce, _0x415d0a);
        if (_0x4032ce[_0x415d0a]['Email'] == '' || _0x4032ce[_0x415d0a]['Password'] == '' || _0x4032ce[_0x415d0a]['FirstName'] == '' || _0x4032ce[_0x415d0a]['LastName'] == '') {
            console['log'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0x415d0a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1cd004['useRandomProxy'] = ![])
            var _0x3a44ef = _0x30aab4[_0x415d0a]['split'](':');
        else
            var _0x45ac0e = Math['round'](Math['random']() * (_0x30aab4['length'] - 0x1)), _0x3a44ef = _0x30aab4[_0x45ac0e]['split'](':');
        const _0xd8fa44 = await _0x45d1b7['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3a44ef[0x0] + ':' + _0x3a44ef[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x289b74 = await _0xd8fa44['newPage']();
            await _0x289b74['authenticate']({
                'username': '' + _0x3a44ef[0x2],
                'password': '' + _0x3a44ef[0x3]
            }), await _0x289b74['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x131181() + '\x20[' + _0x26589f['name'] + ']\x20Task\x20' + (_0x415d0a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x289b74['setRequestInterception'](!![]), _0x289b74['on']('request', _0x39a70f => {
                _0x39a70f['resourceType']() === 'image' || _0x39a70f['resourceType']() === 'font' || _0x39a70f['resourceType']() === 'media' ? _0x39a70f['abort']() : _0x39a70f['continue']();
            }), await _0x289b74['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x289b74['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x289b74['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x18b118(0x258), await _0x289b74['waitForSelector']('#CustomerEmail'), console['log'](_0x131181() + '\x20[' + _0x26589f['name'] + ']\x20Task\x20' + (_0x415d0a + 0x1) + '\x20:\x20Logging\x20in..'), await _0x289b74['type']('#CustomerEmail', '' + _0x4032ce[_0x415d0a]['Email']), await _0x18b118(0x12c), await _0x289b74['type']('#CustomerPassword', '' + _0x4032ce[_0x415d0a]['Password']), await _0x18b118(0x226), await _0x289b74['$eval']('#customer_login', _0x1b3350 => _0x1b3350['submit']()), await _0x18b118(0x7d0), await _0x289b74['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x131181() + '\x20[' + _0x26589f['name'] + ']\x20Task\x20' + (_0x415d0a + 0x1) + '\x20:\x20' + _0x83832e['cyan']('Solving\x20Captcha')), await _0x289b74['solveRecaptchas'](), console['log'](_0x131181() + '\x20[' + _0x26589f['name'] + ']\x20Task\x20' + (_0x415d0a + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x289b74['$eval']('.shopify-challenge__container\x20>\x20form', _0x4cae84 => _0x4cae84['submit']());
            try {
                await _0x289b74['waitForSelector']('.nav-account'), await _0x18b118(0x4b0);
            } catch {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x26589f['name'] + ']\x20Task\x20' + (_0x415d0a + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x289b74['goto']('' + _0x4032ce[_0x415d0a]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x18b118(0xbb8), console['log'](_0x131181() + '\x20[' + _0x26589f['name'] + ']\x20Task\x20' + (_0x415d0a + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x289b74['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x289b74['click']('.product-select-variant-wrapper'), await _0x18b118(0x320), await _0x289b74['click']('li.product-select-variant__value[data-size=\x22' + _0x4032ce[_0x415d0a]['Size'] + '\x22]'), await _0x18b118(0x384), await _0x289b74['$eval']('#AddToCartForm-product-template-raffle', _0x59da3f => _0x59da3f['submit']()), await _0x289b74['waitForSelector']('.cart-order-summary__content'), await _0x18b118(0x514), await _0x289b74['goto']('https://drop.slamjam.com/checkout'), await _0x18b118(0x514), await _0x289b74['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x131181() + '\x20[' + _0x26589f['name'] + ']\x20Task\x20' + (_0x415d0a + 0x1) + '\x20:\x20Filling\x20Information'), await _0x289b74['select']('#checkout_shipping_address_country', '' + _0x4032ce[_0x415d0a]['Country']), await _0x18b118(0x200), await _0x289b74['waitForSelector']('#checkout_shipping_address_first_name'), await _0x289b74['type']('#checkout_shipping_address_first_name', '' + _0x4032ce[_0x415d0a]['FirstName']), await _0x18b118(0x237), await _0x289b74['type']('#checkout_shipping_address_last_name', '' + _0x4032ce[_0x415d0a]['LastName']), await _0x18b118(0x1e0), await _0x289b74['type']('#checkout_shipping_address_address1', _0x4032ce[_0x415d0a]['Address1'] + '\x20' + _0x4032ce[_0x415d0a]['HouseNumber']), await _0x18b118(0x514), await _0x289b74['type']('#checkout_shipping_address_address2', '' + _0x4032ce[_0x415d0a]['Address2']), await _0x18b118(0x514);
            _0x4032ce[_0x415d0a]['Postcode'] == undefined && (_0x4032ce[_0x415d0a]['Postcode'] = _0x4032ce[_0x415d0a]['Zip']);
            await _0x289b74['type']('#checkout_shipping_address_zip', '' + _0x4032ce[_0x415d0a]['Postcode']), await _0x18b118(0x2bc), await _0x289b74['type']('#checkout_shipping_address_city', '' + _0x4032ce[_0x415d0a]['City']), await _0x18b118(0x320), await _0x289b74['type']('#checkout_shipping_address_phone', '' + _0x4032ce[_0x415d0a]['Phone']), await _0x18b118(0x320), await _0x289b74['click']('#continue_button'), await _0x18b118(0xbb8), await _0x289b74['waitForSelector']('.summary-title'), await _0x18b118(0x320), await _0x289b74['click']('#continue_button'), await _0x18b118(0x320), console['log'](_0x131181() + '\x20[' + _0x26589f['name'] + ']\x20Task\x20' + (_0x415d0a + 0x1) + '\x20:\x20Fetching\x20Payment'), await _0x289b74['waitForSelector']('#checkout_credit_card_vault'), await _0x18b118(0x3e8);
            var _0x125bf3 = await _0x289b74['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x3d75a0 = await _0x125bf3['contentFrame']();
            await _0x3d75a0['click']('#number'), await _0x18b118(0x3e8), await _0x289b74['type']('#checkout_credit_card_vault', '' + _0x4032ce[_0x415d0a]['CardNumber'], { 'delay': 0x78 }), _0x125bf3 = await _0x289b74['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x3d75a0 = await _0x125bf3['contentFrame'](), await _0x18b118(0x1c2), await _0x3d75a0['click']('#name'), await _0x18b118(0x1f4), await _0x289b74['type']('div[data-card-field-placeholder=\x22Name\x20on\x20card\x22]', '' + _0x4032ce[_0x415d0a]['NameOnCard'], { 'delay': 0x78 }), _0x125bf3 = await _0x289b74['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x3d75a0 = await _0x125bf3['contentFrame'](), await _0x18b118(0x1c2), await _0x3d75a0['click']('#expiry'), await _0x18b118(0x1f4), await _0x289b74['type']('div[data-card-field-placeholder=\x22Expiration\x20date\x20(MM\x20/\x20YY)\x22]', '' + _0x4032ce[_0x415d0a]['ExpiryDate'], { 'delay': 0x78 }), _0x125bf3 = await _0x289b74['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x3d75a0 = await _0x125bf3['contentFrame'](), await _0x18b118(0x1c2), await _0x3d75a0['click']('#verification_value'), await _0x18b118(0x1f4), await _0x289b74['type']('div[data-card-field-placeholder=\x22Security\x20code\x22]', '' + _0x4032ce[_0x415d0a]['CVV'], { 'delay': 0x78 }), console['log']('before\x20eval'), await _0x289b74['$eval']('#accepts-flag-raffle', _0x2d3b1f => _0x2d3b1f['click']()), await _0x289b74['evaluate'](() => {
                document['querySelector']('#accepts-flag-raffle')['parentElement']['click']();
            }), console['log']('before\x20page.click'), await _0x289b74['click']('#accepts-flag-raffle'), await _0x289b74['click']('#accepts-flag-raffle'), await _0x18b118(0x7d0), console['log']('before\x20before\x20form'), await _0x289b74['$eval']('.edit_checkout.animate-floating-labels', _0x26ce78 => _0x26ce78['submit']()), await _0x18b118(0x7d0), await _0x289b74['waitForSelector']('div[data-step=\x22review\x22]'), await _0x18b118(0x5dc), await _0x289b74['$eval']('.edit_checkout.animate-floating-labels', _0x45c425 => _0x45c425['submit']()), await _0x18b118(0xf4240);
            var _0x5ddc8a = await _0x3c0821(_0x4032ce[_0x415d0a], _0x26589f, 'dev', ![]), _0x4ade45 = await _0x3c0821(_0x4032ce[_0x415d0a], _0x26589f, 'pub', ![]);
            const _0x4310f8 = {
                'succesDEVMSG': { 'embeds': [_0x5ddc8a] },
                'succesPUBMSG': { 'embeds': [_0x4ade45] }
            };
            try {
                _0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '' && await _0x3b1992(_0x1cd004['webhook'], _0x4310f8['succesDEVMSG']), await _0x18b118(0xc8), await _0x3b1992(_0x56f4d7, _0x4310f8['succesDEVMSG']), await _0x18b118(0xc8), await _0x3b1992(_0x56a82e, _0x4310f8['succesPUBMSG']);
            } catch (_0x1ba879) {
                console['log'](_0x83832e['yellow'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0x415d0a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1ba879));
            }
        } catch (_0xa98470) {
            console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0x415d0a + 0x1) + '\x20:\x20' + _0xa98470)), _0x3badde = 'yes';
        } finally {
            _0xd8fa44 && _0xd8fa44['close']();
            if (_0x3badde == 'yes' && _0x1697fd != 0x5) {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x26589f['name'] + ']\x20Task\x20' + (_0x415d0a + 0x1) + '\x20:\x20Retrying')), _0x415d0a = _0x415d0a - 0x1, _0x1697fd = _0x1697fd + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x1cd004['delay'] + '\x20ms'), await _0x18b118(_0x1cd004['delay']);
        }
    }
}
async function _0x3ffec5(_0x1e3e2d, _0x4ecaf2, _0x5d426f) {
    var _0x279bf5 = ![], _0x2a7ba1 = ![];
    if (_0x1cd004['captchaKey'] == '' || _0x1cd004['captchaKey'] == undefined)
        return console['log'](_0x83832e['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x45d1b7['use'](_0x59265c()), _0x45d1b7['use'](_0x3a0174({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1cd004['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3a6fa6 = 0x0; _0x3a6fa6 < _0x4ecaf2['length']; _0x3a6fa6++) {
        var _0x13b2d9, _0x241406 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x4ecaf2[_0x3a6fa6]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4ecaf2[_0x3a6fa6]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0xb83366
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1cd004['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x524cd1
                }
            ]
        }];
        const _0x574f7d = { 'embeds': _0x241406 };
        _0x29b05f(_0x1e3e2d['name'] + '\x20Task\x20' + (_0x3a6fa6 + 0x1) + '\x20/\x20' + _0x4ecaf2['length'] + '\x20||\x20File:\x20' + _0x3851ce + '\x20Proxies:\x20' + _0x567018), await _0x3f7bcb(_0x4ecaf2, _0x3a6fa6);
        var _0x237c31 = await _0x3c0821(_0x4ecaf2[_0x3a6fa6], _0x1e3e2d, 'dev', ![]), _0x4daa58 = await _0x3c0821(_0x4ecaf2[_0x3a6fa6], _0x1e3e2d, 'pub', ![]);
        const _0x3fe3fa = {
            'succesDEVMSG': { 'embeds': [_0x237c31] },
            'succesPUBMSG': { 'embeds': [_0x4daa58] }
        };
        if (_0x4ecaf2[_0x3a6fa6]['Email'] == '' || _0x4ecaf2[_0x3a6fa6]['Url'] == '' || _0x4ecaf2[_0x3a6fa6]['FirstName'] == '' || _0x4ecaf2[_0x3a6fa6]['LastName'] == '') {
            console['log'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0x3a6fa6 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1cd004['useRandomProxy'] = ![])
            var _0x166e23 = _0x5d426f[_0x3a6fa6]['split'](':');
        else
            var _0x70625c = Math['round'](Math['random']() * (_0x5d426f['length'] - 0x1)), _0x166e23 = _0x5d426f[_0x70625c]['split'](':');
        const _0x7e9ab2 = await _0x45d1b7['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x166e23[0x0] + ':' + _0x166e23[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2779cc = await _0x7e9ab2['newPage']();
            await _0x2779cc['authenticate']({
                'username': '' + _0x166e23[0x2],
                'password': '' + _0x166e23[0x3]
            }), console['log'](_0x131181() + '\x20[' + _0x1e3e2d['name'] + ']\x20Task\x20' + (_0x3a6fa6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2779cc['setRequestInterception'](!![]), _0x2779cc['on']('request', _0x4d75b2 => {
                _0x4d75b2['resourceType']() === 'image' || _0x4d75b2['resourceType']() === 'font' || _0x4d75b2['resourceType']() === 'media' ? _0x4d75b2['abort']() : _0x4d75b2['continue']();
            }), await _0x2779cc['goto']('' + _0x4ecaf2[_0x3a6fa6]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x2779cc['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x131181() + '\x20[' + _0x1e3e2d['name'] + ']\x20Task\x20' + (_0x3a6fa6 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2779cc['type']('#comp_firstname', '' + _0x4ecaf2[_0x3a6fa6]['FirstName']), await _0x2779cc['waitForSelector']('#comp_lastname'), await _0x2779cc['type']('#comp_lastname', '' + _0x4ecaf2[_0x3a6fa6]['LastName']), await _0x2779cc['waitForSelector']('#comp_email'), await _0x2779cc['type']('#comp_email', '' + _0x4ecaf2[_0x3a6fa6]['Email']), await _0x2779cc['waitForSelector']('#comp_paypalemail'), await _0x2779cc['type']('#comp_paypalemail', '' + _0x4ecaf2[_0x3a6fa6]['Email']), await _0x2779cc['waitForSelector']('#comp_mobile_end'), await _0x2779cc['type']('#comp_mobile_end', '' + _0x4ecaf2[_0x3a6fa6]['Phone']), await _0x2779cc['waitForSelector']('#comp_dob'), await _0x2779cc['type']('#comp_dob', '08/09/1992'), console['log'](_0x131181() + '\x20[' + _0x1e3e2d['name'] + ']\x20Task\x20' + (_0x3a6fa6 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x4ecaf2[_0x3a6fa6]['Size'] == 'RANDOM') {
                const _0x53f7fe = await _0x2779cc['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xf12539 => {
                    return _0xf12539['map'](_0x1d5873 => _0x1d5873['value']);
                });
                var _0x426dbb = Math['round'](Math['random']() * (_0x53f7fe['length'] - 0x2));
                await _0x2779cc['select']('#shoesize', _0x53f7fe[_0x426dbb + 0x1]), await _0x18b118(0x3e8);
            } else {
                const _0x18fba0 = await _0x2779cc['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x557d77 => {
                    return _0x557d77['map'](_0x560579 => _0x560579['innerText']);
                }), _0xd33808 = await _0x2779cc['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3a23dd => {
                    return _0x3a23dd['map'](_0x27afc4 => _0x27afc4['value']);
                });
                var _0x119757 = _0x4ecaf2[_0x3a6fa6]['Size'];
                for (var _0x14b094 = 0x1; _0x14b094 < _0xd33808['length']; _0x14b094++) {
                    var _0xcaa4e9 = _0x18fba0[_0x14b094]['split']('\x20')[0x0];
                    if (_0xcaa4e9 == _0x119757) {
                        await _0x2779cc['select']('#shoesize', _0xd33808[_0x14b094]);
                        break;
                    } else {
                        if (_0x14b094 + 0x1 == _0xd33808['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x2779cc['waitForSelector']('#comp_address1'), await _0x2779cc['type']('#comp_address1', _0x4ecaf2[_0x3a6fa6]['Address1'] + '\x20' + _0x4ecaf2[_0x3a6fa6]['HouseNumber']), await _0x2779cc['waitForSelector']('#comp_address2'), await _0x2779cc['type']('#comp_address2', '' + _0x4ecaf2[_0x3a6fa6]['Address2']), await _0x2779cc['waitForSelector']('#comp_address2'), await _0x2779cc['type']('#comp_address3', '' + _0x4ecaf2[_0x3a6fa6]['City']), await _0x2779cc['waitForSelector']('#comp_postcode'), await _0x2779cc['type']('#comp_postcode', '' + _0x4ecaf2[_0x3a6fa6]['Zip']), console['log'](_0x131181() + '\x20[' + _0x1e3e2d['name'] + ']\x20Task\x20' + (_0x3a6fa6 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x18b118(0x4b0), await _0x2779cc['click']('label#emailhold'), await _0x18b118(0x5dc), await _0x2779cc['click']('#preauth_tandc_email\x20>\x20label'), await _0x18b118(0x5dc), await _0x2779cc['click']('#submit'), await _0x2779cc['waitForSelector']('#paymentWrap'), console['log'](_0x131181() + '\x20[' + _0x1e3e2d['name'] + ']\x20Task\x20' + (_0x3a6fa6 + 0x1) + '\x20:\x20' + _0x83832e['blue']('Awaiting\x20Paypal\x20Payment')), _0x7e9ab2['on']('targetcreated', async _0x597803 => {
                if (_0x597803['type']() === 'page') {
                    const _0x375994 = await _0x597803['page']();
                    async function _0x46b523() {
                        try {
                            await _0x2779cc['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x2a7ba1 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x8a8d28() {
                        try {
                            await _0x2779cc['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x279bf5 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x8a8d28(), _0x46b523(), await _0x18b118(0x493e0);
                }
            });
            async function _0x1ed803() {
                for (let _0x566945 = 0x0; _0x566945 < 0x12c; _0x566945++) {
                    if (_0x279bf5 == !![]) {
                        console['log'](_0x83832e['green'](_0x131181() + '\x20[' + _0x1e3e2d['name'] + ']\x20Task\x20' + (_0x3a6fa6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '')
                            try {
                                await _0x3b1992(_0x1cd004['webhook'], _0x3fe3fa['succesDEVMSG']);
                            } catch {
                            }
                        await _0x18b118(0xc8), await _0x3b1992(_0x56f4d7, _0x3fe3fa['succesDEVMSG']), await _0x18b118(0xc8);
                        try {
                            await _0x3b1992(_0x56a82e, _0x3fe3fa['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x2a7ba1)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x18b118(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x18b118(0xbb8), await _0x2779cc['click']('.zoid-outlet'), await _0x18b118(0x7d0), await _0x1ed803();
        } catch (_0x2ed834) {
            console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x1e3e2d['name'] + ']\x20Task\x20' + (_0x3a6fa6 + 0x1) + '\x20:\x20' + _0x2ed834)), _0x13b2d9 = '' + _0x2ed834;
            var _0x1c8c15 = await _0x3c0821(_0x4ecaf2[_0x3a6fa6], _0x1e3e2d, 'dev', !![], _0x13b2d9);
            _0x3fe3fa['errorDEV'] = { 'embeds': [_0x1c8c15] }, _0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '' && await _0x3b1992(_0x1cd004['webhook'], _0x3fe3fa['errorDEV']), await _0x3b1992(_0x5c3e5c, _0x3fe3fa['errorDEV']);
        } finally {
            _0x7e9ab2 && _0x7e9ab2['close'](), console['log']('Waiting\x20for\x20' + _0x1cd004['delay'] + '\x20ms'), await _0x18b118(_0x1cd004['delay']);
        }
    }
}
async function _0x1448d6(_0x3a6e8d, _0x4832ed, _0x593921) {
    _0x45d1b7['use'](_0x59265c()), _0x45d1b7['use'](_0x3a0174({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1cd004['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x193315 = 0x0; _0x193315 < _0x4832ed['length']; _0x193315++) {
        _0x29b05f(_0x3a6e8d['name'] + '\x20Task\x20' + (_0x193315 + 0x1) + '\x20/\x20' + _0x4832ed['length'] + '\x20||\x20File:\x20' + _0x3851ce + '\x20Proxies:\x20' + _0x567018);
        var _0x17c30e = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xb83366
                },
                {
                    'name': 'Product',
                    'value': '' + _0x4832ed[_0x193315]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4832ed[_0x193315]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1cd004['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1cd004['version']
                }
            ]
        }];
        const _0xb464ed = { 'embeds': _0x17c30e };
        await _0x3f7bcb(_0x4832ed, _0x193315);
        if (_0x4832ed[_0x193315]['Email'] == '' || _0x4832ed[_0x193315]['Password'] == '' || _0x4832ed[_0x193315]['FirstName'] == '' || _0x4832ed[_0x193315]['LastName'] == '') {
            console['log'](_0x131181() + '\x20[' + _0x3a6e8d['name'] + ']\x20Task\x20' + (_0x193315 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x4832ed[_0x193315]['Password'] == '' || _0x4832ed[_0x193315]['Password'] == undefined) && (_0x4832ed[_0x193315]['Password'] = 'ErehsaWonRaj1!');
        if (_0x1cd004['useRandomProxy'] = ![])
            var _0x39f82e = _0x593921[_0x193315]['split'](':');
        else
            var _0x4cc2c1 = Math['round'](Math['random']() * (_0x593921['length'] - 0x1)), _0x39f82e = _0x593921[_0x4cc2c1]['split'](':');
        const _0x21238f = await _0x45d1b7['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x39f82e[0x0] + ':' + _0x39f82e[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2bf861 = await _0x21238f['newPage']();
            await _0x2bf861['authenticate']({
                'username': '' + _0x39f82e[0x2],
                'password': '' + _0x39f82e[0x3]
            }), console['log'](_0x131181() + '\x20[' + _0x3a6e8d['name'] + ']\x20Task\x20' + (_0x193315 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2bf861['setRequestInterception'](!![]), _0x2bf861['on']('request', _0x2f99a9 => {
                _0x2f99a9['resourceType']() === 'image' || _0x2f99a9['resourceType']() === 'font' || _0x2f99a9['resourceType']() === 'media' ? _0x2f99a9['abort']() : _0x2f99a9['continue']();
            }), await _0x2bf861['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x2bf861['goto']('' + _0x4832ed[_0x193315]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x2bf861['waitForSelector']('#btnPdpAtb'), console['log'](_0x131181() + '\x20[' + _0x3a6e8d['name'] + ']\x20Task\x20' + (_0x193315 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x4832ed[_0x193315]['Size']);
            const _0x7e99b0 = await _0x2bf861['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x13a207 => {
                return _0x13a207['map'](_0x3bab47 => _0x3bab47['innerText']);
            }), _0x40be0f = await _0x2bf861['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x42b9ed = ![];
            if (_0x4832ed[_0x193315]['Size'] == 'RANDOM') {
                var _0x28e718 = Math['round'](Math['random']() * (_0x40be0f['length'] - 0x1));
                await _0x40be0f[_0x28e718]['click']();
            } else
                for (var _0x38fdd7 = 0x0; _0x38fdd7 < _0x7e99b0['length']; _0x38fdd7++) {
                    if (_0x7e99b0[_0x38fdd7] != _0x4832ed[_0x193315]['Size'])
                        continue;
                    try {
                        await _0x40be0f[_0x38fdd7]['click']();
                    } catch {
                        console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x3a6e8d['name'] + ']\x20Task\x20' + (_0x193315 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x42b9ed = !![];
                    }
                }
            if (_0x42b9ed)
                continue;
            await _0x18b118(0x578), await _0x2bf861['click']('#btnPdpAtb'), await _0x2bf861['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x18b118(0x3e8), console['log'](_0x131181() + '\x20[' + _0x3a6e8d['name'] + ']\x20Task\x20' + (_0x193315 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x2bf861['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x2bf861['waitForSelector']('#email'), await _0x2bf861['type']('#email', _0x4832ed[_0x193315]['Email']), await _0x18b118(0x226), await _0x2bf861['click']('#guest-submit'), await _0x18b118(0x1b58), console['log'](_0x131181() + '\x20[' + _0x3a6e8d['name'] + ']\x20Task\x20' + (_0x193315 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2bf861['waitForSelector']('#firstname'), await _0x2bf861['type']('#firstname', _0x4832ed[_0x193315]['FirstName'], 0x1f4), await _0x18b118(0x190), await _0x2bf861['waitForSelector']('#surname'), await _0x2bf861['type']('#surname', _0x4832ed[_0x193315]['LastName'], 0x1f4), await _0x18b118(0x190), await _0x2bf861['waitForSelector']('#mobile'), await _0x2bf861['type']('#mobile', _0x4832ed[_0x193315]['Phone'], 0x1f4), await _0x18b118(0x190), await _0x2bf861['click']('#enterManualDiv'), await _0x18b118(0x5dc), await _0x2bf861['waitForSelector']('#address1'), await _0x2bf861['type']('#address1', _0x4832ed[_0x193315]['Address1'] + '\x20' + _0x4832ed[_0x193315]['HouseNumber'], 0x226), await _0x18b118(0x384), await _0x2bf861['waitForSelector']('#address2'), await _0x2bf861['type']('#address2', '' + _0x4832ed[_0x193315]['Address2'], 0x226), await _0x18b118(0x320);
            const _0x3fa65b = await _0x2bf861['$$eval']('#countryselect_view3\x20>\x20option', _0x33aadc => {
                return _0x33aadc['map'](_0x1f1994 => _0x1f1994['value']);
            });
            var _0xd5a742;
            for (var _0x5cc18b = 0x0; _0x5cc18b < _0x3fa65b['length']; _0x5cc18b++) {
                if (_0x3fa65b[_0x5cc18b]['startsWith']('' + _0x4832ed[_0x193315]['Country'])) {
                    _0xd5a742 = _0x3fa65b[_0x5cc18b];
                    break;
                }
                continue;
            }
            await _0x2bf861['select']('#countryselect_view3', '' + _0xd5a742), await _0x2bf861['waitForSelector']('#address4'), await _0x2bf861['type']('#address4', '' + _0x4832ed[_0x193315]['City'], 0x1f4), await _0x18b118(0x384), await _0x2bf861['waitForSelector']('#postcode'), await _0x2bf861['type']('#postcode', '' + _0x4832ed[_0x193315]['Zip'], 0x1f4), await _0x18b118(0x4b0);
            const _0x169dba = await _0x2bf861['url']();
            console['log'](_0x131181() + '\x20[' + _0x3a6e8d['name'] + ']\x20Task\x20' + (_0x193315 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x48fa02 = _0x169dba['split']('?')[0x1], _0xf510c3 = await _0x2bf861['$']('#co_address_submit');
            await _0xf510c3['evaluate'](_0x22ecd1 => _0x22ecd1['click']()), await _0x18b118(0x1388), await _0x2bf861['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x48fa02), console['log'](_0x131181() + '\x20[' + _0x3a6e8d['name'] + ']\x20Task\x20' + (_0x193315 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x2bf861['waitForSelector']('#paymentbuttons'), await _0x18b118(0x1388), await _0x2bf861['click']('#paymentbuttons\x20>\x20div'), await _0x18b118(0x1c2), await _0x2bf861['waitForSelector']('#card-number'), await _0x2bf861['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x367d6c = await _0x2bf861['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0xe51ce9 = await _0x367d6c['contentFrame']();
            await _0xe51ce9['waitForSelector']('.InputContainer'), await _0xe51ce9['click']('.InputContainer\x20>\x20input'), await _0x18b118(0x578), await _0x2bf861['type']('#card-number', '' + _0x4832ed[_0x193315]['CreditNumber']), await _0x18b118(0xfa), await _0x2bf861['type']('#card-expiry', '' + _0x4832ed[_0x193315]['ExpiryDate']), await _0x18b118(0xfa), await _0x2bf861['type']('#card-cvc', '' + _0x4832ed[_0x193315]['CVV']), await _0x18b118(0x7d0), await _0x2bf861['click']('#card-button'), console['log'](_0x131181() + '\x20[' + _0x3a6e8d['name'] + ']\x20Task\x20' + (_0x193315 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x2bf861['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x83832e['green'](_0x131181() + '\x20[' + _0x3a6e8d['name'] + ']\x20Task\x20' + (_0x193315 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x3b1992(_0x56f4d7, _0xb464ed);
            } catch {
                console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x3a6e8d['name'] + ']\x20Task\x20' + (_0x193315 + 0x1) + '\x20:\x203DS\x20Failed')), _0x17c30e[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x17c30e[0x0]['description'] = '3DS\x20Failed', await _0x3b1992(_0x5c3e5c, _0xb464ed);
            }
        } catch (_0x4442c0) {
            console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0x3a6e8d['name'] + ']\x20Task\x20' + (_0x193315 + 0x1) + '\x20:\x20' + _0x4442c0)), _0x17c30e[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x17c30e[0x0]['description'] = '' + _0x4442c0, await _0x3b1992(_0x5c3e5c, _0xb464ed);
        } finally {
            _0x21238f && _0x21238f['close']();
            if (_0x193315 + 0x1 == _0x4832ed['length']) {
                console['log'](_0x83832e['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x18b118(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x1cd004['AfewDelay'] + '\x20ms'), await _0x18b118(_0x1cd004['AfewDelay']);
        }
    }
}
async function _0x19f6fe(_0x53f922, _0x1b9b21, _0x2387b8, _0xf61b8f, _0x261a13) {
    var _0x537ee5, _0x3a85eb = {}, _0x5698cb = [], _0x2897e3 = {}, _0x36dd5b = [
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
    !_0xf61b8f && (_0xf61b8f = {});
    if (_0x1b9b21 != 'ver') {
        _0x29b05f(_0x2387b8['name'] + '\x20Task\x20' + (_0x53f922 + 0x1) + '\x20/\x20' + _0xf61b8f['length'] + '\x20||\x20File:\x20' + _0x3851ce + '\x20Proxies:\x20' + _0x567018), await _0x3f7bcb(_0xf61b8f, _0x53f922), _0x5698cb = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xb83366
                },
                {
                    'name': 'Size',
                    'value': '' + _0xf61b8f[_0x53f922]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1cd004['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x524cd1
                }
            ]
        }], _0x2897e3 = { 'embeds': _0x5698cb }, _0x3a85eb = _0x2387b8['data'];
        _0x1b9b21 == 'exp' ? _0x3a85eb['data']['attributes']['email'] = '' + _0xf61b8f[_0x53f922]['FirstName'] + _0xf61b8f[_0x53f922]['LastName'] + _0x1cd004['catchall'] : _0x3a85eb['data']['attributes']['email'] = '' + _0xf61b8f[_0x53f922]['Email'];
        if (_0xf61b8f[_0x53f922]['Size'] == 'RANDOM') {
        }
        _0x3a85eb['data']['attributes']['properties']['$first_name'] = '' + _0xf61b8f[_0x53f922]['FirstName'], _0x3a85eb['data']['attributes']['properties']['$last_name'] = '' + _0xf61b8f[_0x53f922]['LastName'], _0x3a85eb['data']['attributes']['properties']['$address1'] = _0xf61b8f[_0x53f922]['Address1'] + '\x20' + _0xf61b8f[_0x53f922]['Address2'] + '\x20' + _0xf61b8f[_0x53f922]['HouseNumber'], _0x3a85eb['data']['attributes']['properties']['$zip'] = '' + _0xf61b8f[_0x53f922]['Zip'], _0x3a85eb['data']['attributes']['properties']['$city'] = '' + _0xf61b8f[_0x53f922]['City'], _0x3a85eb['data']['attributes']['properties']['$country'] = '' + _0xf61b8f[_0x53f922]['Country'], _0x3a85eb['data']['attributes']['properties']['Size'] = '' + _0xf61b8f[_0x53f922]['Size'], _0x3a85eb['data']['attributes']['properties']['$phone_number'] = '' + _0xf61b8f[_0x53f922]['Phone'], _0x3a85eb['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0xf61b8f[_0x53f922]['Follower'];
    }
    if (_0x1cd004['useRandomProxy'] = ![])
        var _0x29cde9 = _0x261a13[_0x53f922]['split'](':');
    else
        var _0x111573 = Math['round'](Math['random']() * (_0x261a13['length'] - 0x1)), _0x29cde9 = _0x261a13[_0x111573]['split'](':');
    var _0x2191b8 = {
        'jar': _0x3a4ace,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x2387b8['url'],
        'headers': _0x2387b8['headers'],
        'body': JSON['stringify'](_0x3a85eb),
        'proxy': 'http://' + _0x29cde9[0x2] + ':' + _0x29cde9[0x3] + '@' + _0x29cde9[0x0] + ':' + _0x29cde9[0x1]
    };
    return _0x1b9b21 != 'ver' && (_0x2191b8['url'] = _0x2387b8['url'], _0x2191b8['headers'] = _0x2387b8['headers']), _0x1b9b21 == 'ver' && (_0x2191b8['method'] = 'GET'), new Promise(function (_0xe125d8, _0x53c12a) {
        callback = async (_0x2309b2, _0x486414, _0x48cba0) => {
            if (!_0x2309b2 && _0x486414['statusCode'] == 0xca || !_0x2309b2 && _0x486414['statusCode'] == 0xc8) {
                if (_0x1b9b21 != 'ver') {
                    var _0x546178 = await _0x3c0821(_0xf61b8f[_0x53f922], _0x2387b8, 'dev', ![]), _0x2d6d77 = await _0x3c0821(_0xf61b8f[_0x53f922], _0x2387b8, 'pub', ![]);
                    const _0x42bb45 = {
                        'succesDEVMSG': { 'embeds': [_0x546178] },
                        'succesPUBMSG': { 'embeds': [_0x2d6d77] }
                    };
                    if (_0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '')
                        try {
                            await _0x3b1992(_0x1cd004['webhook'], _0x42bb45['succesDEVMSG']);
                        } catch {
                        }
                    await _0x18b118(0xc8), await _0x3b1992(_0x56f4d7, _0x42bb45['succesDEVMSG']), await _0x18b118(0xc8);
                    try {
                        await _0x3b1992(_0x56a82e, _0x42bb45['succesPUBMSG']);
                    } catch {
                    }
                }
                _0xe125d8(console['log'](_0x83832e['green'](_0x131181() + '\x20[' + _0x2387b8['name'] + ']\x20Task\x20' + (_0x53f922 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x1b9b21 != 'ver') {
                    var _0x2c942f = '' + _0x2309b2, _0x2b6022 = await _0x3c0821(_0xf61b8f[_0x53f922], _0x2387b8, 'dev', !![], _0x2c942f), _0x4b4d3d = {};
                    _0x4b4d3d['errorDEV'] = { 'embeds': [_0x2b6022] }, _0x1cd004['webhook'] != undefined && _0x1cd004['webhook'] != '' && await _0x3b1992(_0x1cd004['webhook'], _0x4b4d3d['errorDEV']), await _0x3b1992(_0x5c3e5c, _0x4b4d3d['errorDEV']);
                }
                _0x53c12a(console['log'](_0x131181() + '\x20[' + _0x2387b8['name'] + ']\x20Task\x20' + (_0x53f922 + 0x1) + ':\x20' + _0x2309b2));
            }
        };
        try {
            _0x1b9b21 != 'ver' && console['log'](_0x131181() + '\x20[' + _0x2387b8['name'] + ']\x20Task\x20' + (_0x53f922 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3a85eb['data']['attributes']['email']), _0x4f51b9(_0x2191b8, callback);
        } catch (_0x11449f) {
            console['log'](_0x131181() + '\x20Task\x20' + (_0x53f922 + 0x1) + ':\x20' + _0x11449f);
        }
    });
}
;
async function _0x45ae01() {
    await _0x23ae70(), console['clear']();
    if (_0x524cd1 != 'devkey') {
        let _0x2150ce = await _0x4dcd51['autoUpdate']();
        if (_0x2150ce === 'yes')
            return _0x5b0591('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x2c5115 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x18b118(0x2710);
        ;
    }
    await _0x522bc8(_0x2c5115);
    if (_0x24a809 === ![])
        return console['log']('Closing\x20Browser'), await _0x18b118(0xbb8);
    else
        try {
            var _0x11732a = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0xb83366
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x524cd1
                    }
                ]
            }];
            const _0x26cc1d = { 'embeds': _0x11732a };
            await _0x3b1992(_0x936e28, _0x26cc1d);
            async function _0x90ae5d() {
                _0x29b05f('JRaffles\x20' + _0x524cd1), console['clear'](), console['log']('Welcome\x20to\x20' + _0x83832e['cyan']('JRaffles();') + '\x20' + _0x524cd1), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x40475d = 0x0; _0x40475d < _0xa6e999['length']; _0x40475d++) {
                    if (_0xa6e999[_0x40475d]['name'] === 'Reload\x20Settings' || _0xa6e999[_0x40475d]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x40475d + ')\x20[' + _0xa6e999[_0x40475d]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0xa6e999['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0xa6e999['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x48824a();
                if (taskModule > _0xa6e999['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x18b118(0x3e8), _0x90ae5d();
                if (_0xa6e999[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x31a4b5(_0xa6e999[taskModule]['modules']);
                    var _0xe2ff4a = _0xa6e999[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x34e2e5 = await _0x34f7f2(), _0x2790cb = await _0x27f6ed();
                    if (_0x2790cb[0x0]['Url'] == '')
                        return await _0x461880(_0x34e2e5), await _0x4c7cc4(), await afewFunction(_0x63869c[_0x12d45e], 'nor', _0xe2ff4a, _0x2790cb, _0x34e2e5), _0x90ae5d();
                    return await afewFunction(_0x2790cb[0x0]['Url'], 'nor', _0xe2ff4a, _0x2790cb, _0x34e2e5), _0x90ae5d();
                } else {
                    if (_0xa6e999[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x31a4b5(_0xa6e999[taskModule]['modules']);
                        var _0xe2ff4a = _0xa6e999[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x34e2e5 = await _0x34f7f2(), _0x3df7cc = await _0x27f6ed();
                            console['log']('Starting\x20' + _0x3df7cc['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x4fc998 = 0x0; _0x4fc998 < _0x3df7cc['length']; _0x4fc998++) {
                                console['log'](_0x131181() + '\x20[' + _0xe2ff4a['name'] + ']\x20Task\x20' + (_0x4fc998 + 0x1) + ':\x20Getting\x20Session'), await _0x292fd4(_0x4fc998, 'nor', _0xe2ff4a, _0x3df7cc, _0x34e2e5), console['log'](_0x131181() + '\x20[' + _0xe2ff4a['name'] + ']\x20Sleeping\x20for\x20' + _0x1cd004['MahaDelay'] + '\x20ms'), await _0x18b118(_0x1cd004['MahaDelay']);
                            }
                            ;
                            return _0x90ae5d();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x34e2e5 = await _0x34f7f2();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x5561a2(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x4fc998 = 0x0; _0x4fc998 < links['length']; _0x4fc998++) {
                                    _0xe2ff4a['url'] = links[_0x4fc998], console['log'](_0x131181() + '\x20[' + _0xe2ff4a['name'] + ']\x20Task\x20' + (_0x4fc998 + 0x1) + ':\x20Getting\x20Session'), await _0x292fd4(_0x4fc998, 'ver', _0xe2ff4a, _0x3df7cc, _0x34e2e5), console['log'](_0x131181() + '\x20[' + _0xe2ff4a['name'] + ']\x20Sleeping\x20for\x20' + _0x1cd004['verificationDelay'] + '\x20ms'), await _0x18b118(_0x1cd004['verificationDelay']);
                                }
                                ;
                                return _0x90ae5d();
                            }
                        }
                    } else {
                        if (_0xa6e999[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x31a4b5(_0xa6e999[taskModule]['modules']);
                            var _0xe2ff4a = _0xa6e999[taskModule]['modules'][taskFunction], _0x34e2e5 = await _0x34f7f2(), _0x40a3a2 = await _0x27f6ed();
                            return await _0x92fe8d(_0x40a3a2, _0x34e2e5, _0xe2ff4a), await _0x18b118(0x1388), _0x90ae5d();
                        } else {
                            if (_0xa6e999[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x31a4b5(_0xa6e999[taskModule]['modules']);
                                var _0xe2ff4a = _0xa6e999[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x34e2e5 = await _0x34f7f2(), _0xb5d65a = await _0x27f6ed();
                                    console['log']('Starting\x20' + _0x83832e['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x4fc998 = 0x0; _0x4fc998 < _0xb5d65a['length']; _0x4fc998++) {
                                        console['log'](_0x131181() + '\x20[' + _0xe2ff4a['name'] + ']\x20Task\x20' + (_0x4fc998 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x19f6fe(_0x4fc998, 'nor', _0xe2ff4a, _0xb5d65a, _0x34e2e5);
                                        } catch (_0x56e32c) {
                                            console['log'](_0x83832e['red'](_0x131181() + '\x20[' + _0xe2ff4a['name'] + ']\x20Task\x20' + (_0x4fc998 + 0x1) + ':\x20Task\x20failed\x20' + _0x56e32c));
                                        }
                                        console['log'](_0x131181() + '\x20[' + _0xe2ff4a['name'] + ']\x20Sleeping\x20for\x20' + _0x1cd004['delay'] + '\x20ms'), await _0x18b118(_0x1cd004['delay']);
                                    }
                                    return _0x90ae5d();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x34e2e5 = await _0x34f7f2();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x5561a2(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x4fc998 = 0x0; _0x4fc998 < links['length']; _0x4fc998++) {
                                            try {
                                                _0xe2ff4a['url'] = links[_0x4fc998], console['log'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Task\x20' + (_0x4fc998 + 0x1) + ':\x20Getting\x20Session'), await _0x19f6fe(_0x4fc998, 'ver', _0xe2ff4a, null, _0x34e2e5), console['log'](_0x131181() + '\x20[' + _0xa6e999[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x1cd004['verificationDelay'] + '\x20ms'), await _0x18b118(_0x1cd004['verificationDelay']);
                                            } catch (_0x479f6c) {
                                                console['log'](_0x479f6c), await _0x18b118(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x90ae5d();
                                    }
                                }
                                ;
                            } else {
                                if (_0xa6e999[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x31a4b5(_0xa6e999[taskModule]['modules']);
                                    var _0xe2ff4a = _0xa6e999[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0xd72051('https://bouncewear.com/nl/account/register', _0xe2ff4a);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0xa6e999[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x31a4b5(_0xa6e999[taskModule]['modules']);
                                        var _0xe2ff4a = _0xa6e999[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x34e2e5 = await _0x34f7f2(), _0x20dc17 = await _0x27f6ed();
                                            return await _0x5b92dc('https://patta.nl/account/register', _0xe2ff4a, _0x20dc17, _0x34e2e5), _0x90ae5d();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x34e2e5 = await _0x34f7f2(), _0x20dc17 = await _0x27f6ed();
                                                return await _0x2926e7('', _0xe2ff4a, _0x20dc17, _0x34e2e5), _0x90ae5d();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0xa6e999[taskModule]['name'] == 'SLAMJAM')
                                            return console['log']('inalid\x20selection'), _0x90ae5d();
                                        else {
                                            if (_0xa6e999[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x31a4b5(_0xa6e999[taskModule]['modules']);
                                                var _0xe2ff4a = _0xa6e999[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x34e2e5 = await _0x34f7f2(), _0x4ad7b9 = await _0x27f6ed();
                                                    return await _0x8fd97a('https://www.kickz.com/nl/login/', _0xe2ff4a, _0x4ad7b9, _0x34e2e5), _0x90ae5d();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x34e2e5 = await _0x34f7f2(), _0x4ad7b9 = await _0x27f6ed();
                                                        return await _0xa19d6f(_0xe2ff4a, _0x4ad7b9, _0x34e2e5), _0x90ae5d();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0xa6e999[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x31a4b5(_0xa6e999[taskModule]['modules']);
                                                    var _0xe2ff4a = _0xa6e999[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x34e2e5 = await _0x34f7f2(), _0x5852ce = await _0x27f6ed();
                                                        return await _0x3ffec5(_0xe2ff4a, _0x5852ce, _0x34e2e5), _0x90ae5d();
                                                    }
                                                } else {
                                                    if (_0xa6e999[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x18b118(0x3e8), _0x90ae5d();
                                                    else {
                                                        if (_0xa6e999[taskModule]['name'] == 'Change\x20Settings') {
                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                            var _0x2a8b48 = 0x0;
                                                            for (const _0x2a7adb in _0x1cd004) {
                                                                console['log']('(' + _0x2a8b48 + ')\x20' + _0x2a7adb + '\x20:\x20' + _0x1cd004[_0x2a7adb]), _0x2a8b48++;
                                                            }
                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x2a8b48 + ')\x20Return\x20to\x20Main\x20Menu');
                                                            var _0xe3e0c2 = await _0x5bf9cd();
                                                            if (_0xe3e0c2 == _0x2a8b48)
                                                                return _0x90ae5d();
                                                            console['clear'];
                                                            var _0xd8ab41 = 0x0;
                                                            for (var _0x46eedc in _0x1cd004) {
                                                                if (_0xe3e0c2 == _0xd8ab41) {
                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x46eedc + '\x20:'), _0x1cd004[_0x46eedc] = await _0x51239a(), _0x4795e1['writeFileSync']('../settings.json', JSON['stringify'](_0x1cd004));
                                                                    break;
                                                                } else
                                                                    _0xd8ab41++;
                                                            }
                                                            return console['log']('Settings\x20Saved!'), await _0x18b118(0xbb8), _0x90ae5d();
                                                        } else {
                                                            if (_0xa6e999[taskModule]['name'] == 'Reload\x20Settings')
                                                                return console['log']('Reloading\x20settings'), await _0x23ae70(), _0x90ae5d();
                                                            else {
                                                                if (taskModule == 0x45) {
                                                                    _0xa6e999[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                    var _0x528d15 = await _0x6196e8();
                                                                    _0x528d15 == 'ModuleVoorDeBoys' ? (await _0x461880(), await _0x4c7cc4(), await afewFunction(_0x63869c[_0x12d45e], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x18b118(0xbb8));
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
            await _0x90ae5d();
        } catch (_0x19039a) {
            return console['log'](_0x19039a), await _0x18b118(0x3a98);
        }
}
;
_0x29b05f('JRaffles\x20' + _0x524cd1), _0x23ae70();
try {
    _0x45ae01();
} catch (_0x543cd8) {
    var _0x37e940 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0xb83366
            },
            {
                'name': 'Version',
                'value': '' + _0x524cd1
            },
            {
                'name': 'Error',
                'value': '' + _0x543cd8
            }
        ]
    }];
    const _0x3f61c8 = { 'embeds': _0x37e940 };
    _0x3b1992(_0x5c3e5c, _0x3f61c8);
}