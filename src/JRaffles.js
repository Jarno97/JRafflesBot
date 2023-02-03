const { EmbedBuilder: _0x20d979 } = require('discord.js');
var _0x3b0800 = require('exe');
const { execFile: _0x1a0ee1 } = require('child_process'), _0x41677f = require('puppeteer-extra'), _0x46b222 = require('puppeteer-extra-plugin-recaptcha'), _0x3d5ce3 = require('puppeteer-extra-plugin-stealth'), _0x538f61 = require('chalk'), _0x1bc04d = require('node-bash-title'), _0x5a7d6f = require('fs'), _0x4c05dc = require('axios'), _0x1380c5 = require('papaparse');
var _0x1d0e35 = require('random-name');
const _0x191a2b = require('request');
var _0x4060ee = require('prompt');
const _0x12ea3c = _0x191a2b['jar']();
var _0x768262 = {};
const _0x4e0e7d = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x40f17a = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x2e055e = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x56a079 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x3226ea = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn';
var _0x2140b2 = 'https://discord.com/api/webhooks/', _0x31646e = '' + _0x2140b2 + _0x2e055e, _0x13ca97 = '' + _0x2140b2 + _0x56a079, _0x1a3f9f = '' + _0x2140b2 + _0x4e0e7d, _0x3eaa01 = '' + _0x2140b2 + _0x40f17a, _0x143420 = '' + _0x2140b2 + _0x3226ea;
const _0x437e32 = JSON['parse'](_0x5a7d6f['readFileSync']('../package.json', 'utf-8')), _0x1773f1 = _0x437e32['version'];
var _0x170675, _0x5b3c9a, _0xa08fe9, _0x12e363, _0x323bbf, _0x390649, _0x431edf;
const _0x1cd8c9 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x130274 = ![];
const _0x5c1336 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x3cc3f2 = '0123456789';
var _0x578998 = _0x5c1336['split']('');
const _0x196316 = require('auto-git-update'), { PageEmittedEvents: _0x1c6854 } = require('puppeteer'), { getRandomValues: _0x5651d0 } = require('crypto'), { resolve: _0x52d66a } = require('path'), _0x490128 = {
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
}, _0x4ccc7f = new _0x196316(_0x490128);
async function _0x5ee0b5() {
    _0x323bbf = _0x5a7d6f['readdirSync']('../proxies'), _0x12e363 = _0x5a7d6f['readdirSync']('../tasks'), _0x768262 = JSON['parse'](_0x5a7d6f['readFileSync']('../settings.json', 'utf-8')), !_0x768262['delay'] && (_0x768262['delay'] = 0x2710, _0x5a7d6f['writeFileSync']('../settings.json', JSON['stringify'](_0x768262))), !_0x768262['captchaKey'] && (_0x768262['captchaKey'] = '', _0x5a7d6f['writeFileSync']('../settings.json', JSON['stringify'](_0x768262))), !_0x768262['useRandomProxy'] && (_0x768262['useRandomProxy'] = !![], _0x5a7d6f['writeFileSync']('../settings.json', JSON['stringify'](_0x768262))), !_0x768262['webhook'] && (_0x768262['webhook'] = '', _0x5a7d6f['writeFileSync']('../settings.json', JSON['stringify'](_0x768262))), _0x2140b2 = _0x768262['webhook'], _0x390649 = _0x768262['licenseKey'];
}
let _0x2ac5a3, _0x1ac062 = [], _0x243e47;
const _0x2cffd7 = _0x52a650 => new Promise(_0x3df2ad => setTimeout(_0x3df2ad, _0x52a650));
function _0x2e322d(_0x513444, _0x32434b) {
    return Math['floor'](Math['random']() * (_0x32434b - _0x513444 + 0x1) + _0x513444);
}
async function _0x24a80a(_0x1f0646) {
    return _0x4c05dc['get']('https://api.hyper.co/v4/licenses/' + _0x1f0646, { 'headers': { 'Authorization': 'Bearer\x20' + _0x1cd8c9 } })['then'](_0x2f4077 => _0x2f4077['data'])['catch'](() => null);
}
;
async function _0x5f2d6f(_0x322311) {
    console['clear']();
    if (_0x322311 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x51f573 = await _0x4060ee['get']('License');
        if (_0x51f573['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x2cffd7(0xbb8), _0x5f2d6f(_0x322311);
        _0x322311 = _0x51f573['License'], _0x768262['licenseKey'] = _0x322311, _0x390649 = _0x322311, _0x5a7d6f['writeFileSync']('../settings.json', JSON['stringify'](_0x768262));
    }
    console['log']('Checking\x20license\x20' + _0x390649 + '...'), await _0x2cffd7(0x5dc);
    const _0x3c4f60 = await _0x24a80a(_0x322311);
    _0x431edf = JSON['stringify'](_0x3c4f60['user']['username'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x3c4f60)
        return console['log']('License\x20not\x20found');
    if (!_0x3c4f60['user'])
        return console['log']('License\x20not\x20bound');
    return _0x3c4f60['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x130274 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x130274 = ![]);
}
async function _0x216ac2() {
    var _0x101e31 = await _0x4060ee['get']('Module');
    return console['clear'](), _0x101e31['Module'];
}
;
async function _0x377518() {
    var _0x3f5aad = await _0x4060ee['get']('Setting');
    return console['clear'](), _0x3f5aad['Setting'];
}
async function _0x3ca36f() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x510e9d = 0x0; _0x510e9d < _0x12e363['length']; _0x510e9d++) {
        console['log']('\x20(' + _0x510e9d + ')\x20' + _0x12e363[_0x510e9d]);
    }
    console['log']('');
    var _0x2b3ad8 = await _0x4060ee['get']('Task');
    if (_0x2b3ad8['Task'] > _0x12e363['length'] - 0x1 || isNaN(_0x2b3ad8['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x2cffd7(0x3e8), _0x3ca36f();
    var _0x1cd7e3 = _0x5a7d6f['readFileSync']('../tasks/' + _0x12e363[_0x2b3ad8['Task']], 'utf-8');
    return _0xa08fe9 = _0x1380c5['parse'](_0x1cd7e3, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x538f61['blue'](_0x12e363[_0x2b3ad8['Task']])), _0x170675 = _0x12e363[_0x2b3ad8['Task']], _0xa08fe9;
}
async function _0x542597() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x3ccd88 = 0x0; _0x3ccd88 < _0x323bbf['length']; _0x3ccd88++) {
        console['log']('\x20(' + _0x3ccd88 + ')\x20' + _0x323bbf[_0x3ccd88]);
    }
    console['log']('');
    var _0x305106 = await _0x4060ee['get']('Proxies');
    if (_0x305106['Proxies'] > _0x323bbf['length'] - 0x1 || isNaN(_0x305106['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x2cffd7(0x3e8), _0x542597();
    var _0x438ef6 = _0x5a7d6f['readFileSync']('../proxies/' + _0x323bbf[_0x305106['Proxies']], 'utf-8')['split']('\x0a');
    let _0x4790d3 = _0x438ef6['map']((_0x2b5988, _0x2317c3) => {
        sanatizeProxy = _0x2b5988['replace']('\x0d', '');
        if (_0x438ef6[_0x2317c3 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x5b3c9a = _0x323bbf[_0x305106['Proxies']], console['clear'](), _0x4790d3;
}
async function _0x34b798() {
    var _0x75a51 = await _0x4060ee['get']('Value');
    return console['clear'](), _0x75a51['Value'];
}
async function _0x331c06(_0xd6bbf4) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0xb9e87e = 0x0; _0xb9e87e < _0xd6bbf4['length']; _0xb9e87e++) {
        console['log']('\x20(' + _0xb9e87e + ')\x20[' + _0xd6bbf4[_0xb9e87e]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x15acb8 = await _0x4060ee['get']('Module');
    return _0x15acb8['Module'];
}
async function _0x10d316() {
    var _0x25c171 = await _0x4060ee['get']('Password');
    return console['clear'](), _0x25c171['Password'];
}
;
async function _0x59792b() {
    var _0xc5b51b = await _0x4060ee['get']('Links');
    return _0xc5b51b['Links'];
}
;
async function _0x31f8b1() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x56bc58 = 0x0; _0x56bc58 < _0x1ac062['length']; _0x56bc58++) {
        console['log']('\x20(' + _0x56bc58 + ')\x20' + _0x1ac062[_0x56bc58]);
    }
    ;
    console['log']();
    let _0x37e2f0 = await _0x4060ee['get']('Product');
    console['clear'](), _0x243e47 = _0x37e2f0['Product'];
    return;
}
;
function _0x23ecd3() {
    var _0x5702b7 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x5702b7;
}
;
const _0x3cb1eb = [
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
async function _0x237f55(_0x53b42b, _0x3baed4) {
    let _0xa7f5b = { 'headers': { 'content-type': 'application/json' } };
    if (_0x1773f1 != 'devkey') {
        await _0x4c05dc['post'](_0x53b42b, _0x3baed4, _0xa7f5b);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x26ea6c(_0x1a25dd, _0x4af028, _0x1311a6, _0x15e515, _0x544d2c) {
    if (!_0x15e515 && _0x1311a6 == 'dev') {
        var _0x1d2c88 = new _0x20d979()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x4af028['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x4af028['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x1a25dd['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x768262['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x431edf,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x1a25dd['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x1773f1,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x1d2c88['data'];
    } else {
        if (_0x15e515 && _0x1311a6 == 'dev') {
            var _0x1d2c88 = new _0x20d979()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x4af028['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x431edf,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x4af028['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x1a25dd['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x768262['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x544d2c,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x1a25dd['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x1773f1,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x1d2c88['data'];
        } else {
            if (_0x1311a6 == 'pub') {
                var _0x1d2c88 = new _0x20d979()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x4af028['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x4af028['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x1a25dd['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x768262['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x1a25dd['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x1773f1,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x1d2c88['data'];
            } else {
                if (_0x1311a6 == 'acc') {
                    var _0x1d2c88 = new _0x20d979()['setColor']('#282525')['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x4af028['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x431edf,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x4af028['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x768262['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x1773f1,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x1d2c88['data'];
                }
            }
        }
    }
}
async function _0x2f2481(_0x5dea19, _0x3b1c94) {
    var _0xc135ef = _0x5dea19[_0x3b1c94]['Address1']['split'](''), _0x48a575 = _0x5dea19[_0x3b1c94]['Address2']['split'](''), _0x3e6e29 = _0x5dea19[_0x3b1c94]['Email']['split']('@');
    for (var _0x14aa00 = 0x0; _0x14aa00 < _0xc135ef['length']; _0x14aa00++) {
        if (_0xc135ef[_0x14aa00] == 'X') {
            var _0x425527 = Math['round'](Math['random']() * (_0x5c1336['length'] - 0x1));
            _0xc135ef[_0x14aa00] = _0x578998[_0x425527];
        }
    }
    ;
    for (var _0x14aa00 = 0x0; _0x14aa00 < _0x48a575['length']; _0x14aa00++) {
        if (_0x48a575[_0x14aa00] == 'X') {
            var _0x425527 = Math['round'](Math['random']() * (_0x5c1336['length'] - 0x1));
            _0x48a575[_0x14aa00] = _0x578998[_0x425527];
        }
    }
    ;
    _0x5dea19[_0x3b1c94]['FirstName'] == 'RANDOM' && (_0x5dea19[_0x3b1c94]['FirstName'] = _0x1d0e35['first']());
    _0x5dea19[_0x3b1c94]['LastName'] == 'RANDOM' && (_0x5dea19[_0x3b1c94]['LastName'] = _0x1d0e35['last']());
    _0x3e6e29[0x0] == 'RANDOM' ? _0x3e6e29[0x0] = '' + _0x1d0e35['first']() + _0x1d0e35['last']() + '@' : _0x3e6e29[0x0] = _0x3e6e29[0x0] + '@';
    _0x5dea19[_0x3b1c94]['Phone'] == 'RANDOM' && (_0x5dea19[_0x3b1c94]['Phone'] = _0x2e322d(0x3b9aca00, 0x2540be3ff));
    if (_0x5dea19[_0x3b1c94]['Follower'] == 'RANDOM') {
        var _0x2bee0d = _0x2e322d(0x1, 0x270f);
        _0x5dea19[_0x3b1c94]['Follower'] = '' + _0x1d0e35['first']() + _0x1d0e35['last']() + _0x2bee0d;
    }
    _0x5dea19[_0x3b1c94]['Email'] = _0x3e6e29['join'](''), _0x5dea19[_0x3b1c94]['Address1'] = _0xc135ef['join'](''), _0x5dea19[_0x3b1c94]['Address2'] = _0x48a575['join']('');
    return;
}
;
function _0x5cf776() {
    let _0x36ee0b = proxyFile['split']('\x0a'), _0x38aa1d = _0x36ee0b['map']((_0x3f2f2b, _0x883470) => {
        sanatizeProxy = _0x3f2f2b['replace']('\x0d', '');
        if (_0x36ee0b[_0x883470 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x38aa1d;
}
;
async function _0x4327ba(_0x27e1ca) {
    var _0x2fbb72 = _0x27e1ca[0x1]['split'](':');
    const _0xd41ad0 = await _0x41677f['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x2fbb72[0x0] + ':' + _0x2fbb72[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x52c67b = await _0xd41ad0['newPage']();
        await _0x52c67b['authenticate']({
            'username': '' + _0x2fbb72[0x2],
            'password': '' + _0x2fbb72[0x3]
        }), console['log'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x52c67b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x52c67b['setRequestInterception'](!![]), _0x52c67b['on']('request', _0x46ec61 => {
            _0x46ec61['resourceType']() === 'image' || _0x46ec61['resourceType']() === 'font' || _0x46ec61['resourceType']() === 'media' ? _0x46ec61['abort']() : _0x46ec61['continue']();
        }), await _0x52c67b['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x52c67b['waitForTimeout'](0xbb8), await _0x52c67b['waitForSelector']('.product-card');
        const _0x32a03a = await _0x52c67b['$$eval']('a.product-card', _0x52171a => {
            return _0x52171a['map'](_0x442902 => _0x442902['href']);
        });
        return _0x1ac062 = _0x32a03a;
    } catch (_0x56d9e6) {
        console['log']('\x20' + _0x56d9e6);
    } finally {
        _0xd41ad0['close'](), console['clear']();
    }
}
;
async function _0x483a42(_0x52b4b5, _0x3f7399, _0x34354c, _0x25ac22, _0x50b1cf) {
    await _0x2f2481(_0x25ac22, _0x52b4b5);
    var _0x386c9f = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x431edf
            },
            {
                'name': 'Size',
                'value': '' + _0x25ac22[_0x52b4b5]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x768262['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x1773f1
            }
        ]
    }];
    const _0x56b35f = { 'embeds': _0x386c9f };
    if (_0x768262['useRandomProxy'] = ![])
        var _0x20f4e1 = _0x50b1cf[_0x52b4b5]['split'](':');
    else
        var _0x386c04 = Math['round'](Math['random']() * (_0x50b1cf['length'] - 0x1)), _0x20f4e1 = _0x50b1cf[_0x386c04]['split'](':');
    var _0x2e65e0 = _0x34354c['data'];
    _0x3f7399 == 'exp' ? _0x2e65e0['data']['attributes']['email'] = '' + _0x25ac22[_0x52b4b5]['FirstName'] + _0x25ac22[_0x52b4b5]['LastName'] + _0x768262['catchall'] : _0x2e65e0['data']['attributes']['email'] = '' + _0x25ac22[_0x52b4b5]['Email'];
    _0x2e65e0['data']['attributes']['properties']['$first_name'] = '' + _0x25ac22[_0x52b4b5]['FirstName'], _0x2e65e0['data']['attributes']['properties']['$last_name'] = '' + _0x25ac22[_0x52b4b5]['LastName'], _0x2e65e0['data']['attributes']['properties']['$address1'] = _0x25ac22[_0x52b4b5]['Address1'] + '\x20' + _0x25ac22[_0x52b4b5]['Address2'], _0x2e65e0['data']['attributes']['properties']['$zip'] = '' + _0x25ac22[_0x52b4b5]['Zip'], _0x2e65e0['data']['attributes']['properties']['$city'] = '' + _0x25ac22[_0x52b4b5]['City'], _0x2e65e0['data']['attributes']['properties']['$country'] = '' + _0x25ac22[_0x52b4b5]['Country'], _0x2e65e0['data']['attributes']['properties']['Size'] = '' + _0x25ac22[_0x52b4b5]['Size'], _0x2e65e0['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x25ac22[_0x52b4b5]['Follower'];
    var _0x21a64c = {
        'jar': _0x12ea3c,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x34354c['url'],
        'headers': _0x34354c['headers'],
        'body': JSON['stringify'](_0x2e65e0),
        'proxy': 'http://' + _0x20f4e1[0x2] + ':' + _0x20f4e1[0x3] + '@' + _0x20f4e1[0x0] + ':' + _0x20f4e1[0x1]
    };
    return _0x3f7399 === 'ver' && (_0x21a64c['method'] = 'GET'), new Promise(function (_0x458854, _0x38f77e) {
        callback = async (_0x30d79a, _0x22933b, _0x54ef19) => {
            !_0x30d79a && _0x22933b['statusCode'] == 0xca || !_0x30d79a && _0x22933b['statusCode'] == 0xc8 ? _0x458854(console['log'](_0x538f61['green'](_0x23ecd3() + '\x20[' + _0x34354c['name'] + ']\x20Task\x20' + (_0x52b4b5 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x386c9f[0x0]['title'] = 'Failed\x20entry', _0x386c9f[0x0]['description'] = '' + _0x30d79a, await _0x237f55(_0x3eaa01, _0x56b35f), _0x38f77e(console['log'](_0x23ecd3() + '\x20[' + _0x34354c['name'] + ']\x20Task\x20' + (_0x52b4b5 + 0x1) + ':\x20' + _0x30d79a)));
        };
        try {
            _0x3f7399 === 'ver' ? console['log'](_0x23ecd3() + '\x20[' + _0x34354c['name'] + ']\x20Task\x20' + (_0x52b4b5 + 0x1) + ':\x20Verifying.') : console['log'](_0x23ecd3() + '\x20[' + _0x34354c['name'] + ']\x20Task\x20' + (_0x52b4b5 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2e65e0['data']['attributes']['email']), _0x191a2b(_0x21a64c, callback);
        } catch (_0x365cb5) {
            console['log'](_0x23ecd3() + '\x20Task\x20' + (_0x52b4b5 + 0x1) + ':\x20' + _0x365cb5);
        }
    });
}
;
async function _0x1f3e7f(_0x59cb03, _0x48d78f, _0x26b2dc) {
    _0x41677f['use'](_0x3d5ce3()), _0x41677f['use'](_0x46b222({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x768262['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x80883d = 0x0; _0x80883d < _0x59cb03['length']; _0x80883d++) {
        var _0x1cf5f3, _0x13c167 = '', _0x36460f = 0x0, _0x3fced1 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x431edf
                },
                {
                    'name': 'Product',
                    'value': '' + _0x59cb03[_0x80883d]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x59cb03[_0x80883d]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x768262['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1773f1
                }
            ]
        }], _0x3d6dd6 = await _0x26ea6c(_0x59cb03[_0x80883d], _0x26b2dc, 'dev', ![]), _0x4cf865 = await _0x26ea6c(_0x59cb03[_0x80883d], _0x26b2dc, 'pub', ![]);
        const _0xa122a3 = {
            'succesDEVMSG': { 'embeds': [_0x3d6dd6] },
            'succesPUBMSG': { 'embeds': [_0x4cf865] }
        }, _0x21efcc = { 'embeds': _0x3fced1 };
        await _0x2f2481(_0x59cb03, _0x80883d);
        if (_0x59cb03[_0x80883d]['Email'] == '' || _0x59cb03[_0x80883d]['FirstName'] == '' || _0x59cb03[_0x80883d]['LastName'] == '' || _0x59cb03[_0x80883d]['Country'] == '' || _0x59cb03[_0x80883d]['Size'] == '' || _0x59cb03[_0x80883d]['Address1'] == '' || _0x59cb03[_0x80883d]['Zip'] == '') {
            console['log'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x59cb03[_0x80883d]['Email'] == '' || _0x59cb03[_0x80883d]['FirstName'] == '' || _0x59cb03[_0x80883d]['LastName'] == '' || _0x59cb03[_0x80883d]['Country'] == '' || _0x59cb03[_0x80883d]['Size'] == '' || _0x59cb03[_0x80883d]['Address1'] == '' || _0x59cb03[_0x80883d]['Zip'] == '' || _0x59cb03[_0x80883d]['Phone'] == '') {
            console['log'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x2f8d5c = '' + _0x59cb03[_0x80883d]['Url'];
        if (_0x768262['useRandomProxy'] = ![])
            var _0x2cf14d = _0x48d78f[_0x80883d]['split'](':');
        else
            var _0x22ccd5 = Math['round'](Math['random']() * (_0x48d78f['length'] - 0x1)), _0x2cf14d = _0x48d78f[_0x22ccd5]['split'](':');
        const _0x212f1d = await _0x41677f['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x2cf14d[0x0] + ':' + _0x2cf14d[0x1]]
        });
        try {
            const _0x1fc081 = await _0x212f1d['newPage']();
            await _0x1fc081['authenticate']({
                'username': '' + _0x2cf14d[0x2],
                'password': '' + _0x2cf14d[0x3]
            }), console['log'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1fc081['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1fc081['setRequestInterception'](!![]), _0x1fc081['on']('request', _0x5a114c => {
                _0x5a114c['resourceType']() === 'image' || _0x5a114c['resourceType']() === 'font' || _0x5a114c['resourceType']() === 'media' ? _0x5a114c['abort']() : _0x5a114c['continue']();
            }), await _0x1fc081['goto'](_0x2f8d5c), await _0x2cffd7(0xbb8), await _0x1fc081['waitForSelector']('.control__JhutY'), await _0x1fc081['click']('.control__JhutY'), await _0x2cffd7(0x1f4);
            if (_0x59cb03[_0x80883d]['Size'] != 'RANDOM')
                try {
                    const _0x2bace5 = await _0x1fc081['$x']('//div[contains(text(),\x20\x27' + _0x59cb03[_0x80883d]['Size'] + '\x27)]');
                    await _0x2bace5[0x0]['click']();
                } catch {
                    console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0xbd38f1 = await _0x1fc081['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x400a8f = Math['round'](Math['random']() * (_0xbd38f1['length'] - 0x1));
                await _0xbd38f1[_0x400a8f]['click']();
            }
            await _0x2cffd7(0x4b0);
            const _0x2ef401 = await _0x1fc081['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x2ef401[0x0]['click'](), await _0x1fc081['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1fc081['type']('input[name=\x22email\x22]', '' + _0x59cb03[_0x80883d]['Email']), await _0x2cffd7(0x640), await _0x1fc081['type']('input[name=\x22phone\x22]', '' + _0x59cb03[_0x80883d]['Phone']), await _0x2cffd7(0x4b0), await _0x1fc081['click']('button.btn.continue-button__1RtsS'), await _0x2cffd7(0x4b0);
            try {
                await _0x1fc081['type']('input[name=\x22firstName\x22]', '' + _0x59cb03[_0x80883d]['FirstName']), await _0x2cffd7(0x258);
            } catch {
                const _0x499dc0 = await _0x1fc081['$$eval']('.invalid-feedback\x20>\x20div', _0x305f48 => {
                    return _0x305f48['map'](_0x5ef573 => _0x5ef573['innerText']);
                });
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x20' + _0x499dc0));
                continue;
            }
            await _0x1fc081['type']('input[name=\x22lastName\x22]', '' + _0x59cb03[_0x80883d]['LastName']), await _0x2cffd7(0xc8), await _0x1fc081['type']('input[name=\x22instagramUsername\x22]', '' + _0x59cb03[_0x80883d]['Follower']), await _0x2cffd7(0x4b0), await _0x1fc081['click']('button.btn.continue-button__1RtsS'), await _0x2cffd7(0x3e8), console['log'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1fc081['select']('select[name=\x22country\x22]', '' + _0x59cb03[_0x80883d]['Country']), await _0x2cffd7(0x2bc), await _0x1fc081['type']('input[name=\x22streetName\x22]', '' + _0x59cb03[_0x80883d]['Address1']), await _0x2cffd7(0x258), await _0x1fc081['type']('input[name=\x22houseNumber\x22]', _0x59cb03[_0x80883d]['HouseNumber'] + '\x20' + _0x59cb03[_0x80883d]['Address2']), await _0x2cffd7(0xc8), await _0x1fc081['type']('input[name=\x22postalCode\x22]', '' + _0x59cb03[_0x80883d]['Zip']), await _0x2cffd7(0x1f4), await _0x1fc081['type']('input[name=\x22city\x22]', '' + _0x59cb03[_0x80883d]['City']), await _0x2cffd7(0x4b0), await _0x1fc081['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x2cffd7(0x4b0), await _0x1fc081['click']('button.btn.continue-button__1RtsS'), await _0x2cffd7(0x4b0), console['log'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1fc081['solveRecaptchas'](), console['log'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x2cffd7(0xbb8), await _0x1fc081['click']('button.btn.continue-button__1RtsS'), await _0x2cffd7(0x1388), console['log'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1fc081['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1fc081['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2cffd7(0x4b0), await _0x1fc081['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x59cb03[_0x80883d]['CardNumber']), await _0x2cffd7(0x320), await _0x1fc081['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1fc081['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x59cb03[_0x80883d]['ExpiryDate']), await _0x2cffd7(0x4b0), await _0x1fc081['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1fc081['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x59cb03[_0x80883d]['CVV']), await _0x2cffd7(0x226), await _0x1fc081['type']('input[name=\x22holderName\x22]', '' + _0x59cb03[_0x80883d]['NameOnCard']), await _0x2cffd7(0x226), await _0x1fc081['click']('button.adyen-checkout__button'), console['log'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x1fc081['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x2cffd7(0xbb8);
            } catch (_0x3c1162) {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x203DS\x20Failed')), _0x1cf5f3 = '3DS\x20Error\x20' + _0x3c1162;
                var _0x4acf6c = await _0x26ea6c(_0x59cb03[_0x80883d], _0x26b2dc, 'dev', !![], _0x1cf5f3);
                _0xa122a3['errorDEV'] = { 'embeds': [_0x4acf6c] };
                _0x768262['webhook'] != undefined && _0x768262['webhook'] != '' && await _0x237f55(_0x768262['webhook'], _0xa122a3['errorDEV']);
                await _0x237f55(_0x3eaa01, _0xa122a3['errorDEV']);
                continue;
            }
            console['log'](_0x538f61['green'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x768262['webhook'] != undefined && _0x768262['webhook'] != '')
                try {
                    await _0x237f55(_0x768262['webhook'], _0xa122a3['succesDEVMSG']);
                } catch {
                }
            await _0x2cffd7(0xc8), await _0x237f55(_0x1a3f9f, _0xa122a3['succesDEVMSG']), await _0x2cffd7(0xc8);
            try {
                await _0x237f55(_0x143420, _0xa122a3['succesPUBMSG']);
            } catch {
            }
        } catch (_0x2094b7) {
            console['log'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x20' + _0x2094b7), _0x1cf5f3 = '' + _0x2094b7;
            var _0x4acf6c = await _0x26ea6c(_0x59cb03[_0x80883d], _0x26b2dc, 'dev', !![], _0x1cf5f3);
            _0xa122a3['errorDEV'] = { 'embeds': [_0x4acf6c] }, _0x768262['webhook'] != undefined && _0x768262['webhook'] != '' && await _0x237f55(_0x768262['webhook'], _0xa122a3['errorDEV']), await _0x237f55(_0x3eaa01, _0xa122a3['errorDEV']), _0x13c167 = 'yes';
        } finally {
            _0x212f1d['close']();
            if (_0x13c167 == 'yes' && _0x36460f != 0x5) {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x26b2dc['name'] + ']\x20Task\x20' + (_0x80883d + 0x1) + '\x20:\x20Retrying')), _0x80883d = _0x80883d - 0x1, _0x36460f = _0x36460f + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x768262['footshopDelay'] + '\x20ms'), await _0x2cffd7(_0x768262['footshopDelay']);
        }
    }
}
afewFunction = async (_0x413b79, _0x313544, _0x12f378, _0x24617b, _0x4c164f) => {
    for (var _0x27206c = 0x0; _0x27206c < _0x24617b['length']; _0x27206c++) {
        var _0xd8b1c1, _0x2ca31e = '', _0x57222c = 0x0;
        _0x1bc04d(_0x12f378['name'] + '\x20Task\x20' + (_0x27206c + 0x1) + '\x20/\x20' + _0x24617b['length'] + '\x20||\x20File:\x20' + _0x170675 + '\x20Proxies:\x20' + _0x5b3c9a), await _0x2f2481(_0x24617b, _0x27206c);
        var _0x28092a = await _0x26ea6c(_0x24617b[_0x27206c], _0x12f378, 'dev', ![]), _0x44cb36 = await _0x26ea6c(_0x24617b[_0x27206c], _0x12f378, 'pub', ![]);
        const _0x1121d0 = {
            'succesDEVMSG': { 'embeds': [_0x28092a] },
            'succesPUBMSG': { 'embeds': [_0x44cb36] }
        };
        if (_0x24617b[_0x27206c]['Email'] == '' || _0x24617b[_0x27206c]['FirstName'] == '' || _0x24617b[_0x27206c]['LastName'] == '' || _0x24617b[_0x27206c]['Country'] == '' || _0x24617b[_0x27206c]['Size'] == '' || _0x24617b[_0x27206c]['Address1'] == '' || _0x24617b[_0x27206c]['Zip'] == '') {
            console['log'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x768262['useRandomProxy'] = ![])
            var _0x23321a = _0x4c164f[_0x27206c]['split'](':');
        else
            var _0x12dbc0 = Math['round'](Math['random']() * (_0x4c164f['length'] - 0x1)), _0x23321a = _0x4c164f[_0x12dbc0]['split'](':');
        const _0x3338ca = await _0x41677f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x23321a[0x0] + ':' + _0x23321a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1532e8 = await _0x3338ca['newPage']();
            await _0x1532e8['setDefaultNavigationTimeout'](0x1d4c0), await _0x1532e8['authenticate']({
                'username': '' + _0x23321a[0x2],
                'password': '' + _0x23321a[0x3]
            }), console['log'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1532e8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1532e8['setRequestInterception'](!![]), _0x1532e8['on']('request', _0x58d9fa => {
                _0x58d9fa['resourceType']() === 'image' || _0x58d9fa['resourceType']() === 'font' || _0x58d9fa['resourceType']() === 'media' ? _0x58d9fa['abort']() : _0x58d9fa['continue']();
            }), await _0x1532e8['goto'](_0x413b79, { 'waitUntil': 'networkidle2' }), console['log'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x1532e8['waitForTimeout'](0xfa0), console['log'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20Cookies\x20received'), await _0x1532e8['waitForTimeout'](0x320);
            if (_0x24617b[_0x27206c]['Size'] == 'RANDOM') {
                console['log'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x49c9bf = await _0x1532e8['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x44dfc8 => {
                    return _0x44dfc8['map'](_0x3edc7a => _0x3edc7a['href']);
                });
                var _0x5a1090 = Math['round'](Math['random']() * (_0x49c9bf['length'] - 0x1));
                await _0x1532e8['goto']('' + _0x49c9bf[_0x5a1090]);
            } else {
                console['log'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x24617b[_0x27206c]['Size']);
                try {
                    const _0x40cbbc = await _0x1532e8['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x24617b[_0x27206c]['Size'] + '\x22]\x20>\x20a', _0x5dfcf8 => {
                        return _0x5dfcf8['map'](_0x3b358f => _0x3b358f['href']);
                    });
                    await _0x1532e8['goto']('' + _0x40cbbc[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x366311) {
                    console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20' + _0x366311 + '\x20Size\x20not\x20found')), _0xd8b1c1 = 'Size\x20Not\x20Found';
                    var _0x20d73b = await _0x26ea6c(_0x24617b[_0x27206c], _0x12f378, 'dev', !![], _0xd8b1c1);
                    _0x1121d0['errorDEV'] = { 'embeds': [_0x20d73b] };
                    _0x768262['webhook'] != undefined && _0x768262['webhook'] != '' && await _0x237f55(_0x768262['webhook'], _0x1121d0['errorDEV']);
                    await _0x237f55(_0x3eaa01, _0x1121d0['errorDEV']);
                    continue;
                }
            }
            await _0x1532e8['waitForTimeout'](0x258), await _0x1532e8['type']('#raffle-instagram', '' + _0x24617b[_0x27206c]['Follower'], { 'delay': 0x64 }), await _0x1532e8['waitForTimeout'](0x384), await _0x1532e8['click']('#raffle-terms'), await _0x1532e8['waitForTimeout'](0x384), await _0x1532e8['evaluate'](() => {
                const _0x512b59 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x512b59['click']();
            }), await _0x1532e8['waitForTimeout'](0xbb8), await _0x1532e8['waitForSelector']('#checkout_email'), await _0x2cffd7(0x3e8), console['log'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20Filling\x20Information');
            _0x313544 == 'sec' ? await _0x1532e8['type']('#checkout_email', '' + _0x24617b[_0x27206c]['FirstName'] + _0x24617b[_0x27206c]['LastName'] + _0x768262['catchall'], 0x32) : await _0x1532e8['type']('#checkout_email', '' + _0x24617b[_0x27206c]['Email'], 0x32);
            await _0x2cffd7(0x320), await _0x1532e8['select']('#checkout_shipping_address_country', '' + _0x24617b[_0x27206c]['Country']), await _0x1532e8['waitForTimeout'](0x258), await _0x1532e8['type']('#checkout_shipping_address_first_name', '' + _0x24617b[_0x27206c]['FirstName']), await _0x1532e8['waitForTimeout'](0x320), await _0x1532e8['type']('#checkout_shipping_address_last_name', '' + _0x24617b[_0x27206c]['LastName']), await _0x1532e8['waitForTimeout'](0x2bc), await _0x1532e8['type']('#checkout_shipping_address_address1', _0x24617b[_0x27206c]['Address1'] + '\x20' + _0x24617b[_0x27206c]['HouseNumber']), await _0x1532e8['waitForTimeout'](0x2bc), await _0x1532e8['type']('#checkout_shipping_address_address2', '' + _0x24617b[_0x27206c]['Address2']), await _0x1532e8['waitForTimeout'](0x2bc);
            _0x24617b[_0x27206c]['Postcode'] == undefined ? await _0x1532e8['type']('#checkout_shipping_address_zip', '' + _0x24617b[_0x27206c]['Zip']) : await _0x1532e8['type']('#checkout_shipping_address_zip', '' + _0x24617b[_0x27206c]['Postcode']);
            await _0x1532e8['waitForTimeout'](0x2bc), await _0x1532e8['type']('#checkout_shipping_address_city', '' + _0x24617b[_0x27206c]['City']), await _0x1532e8['waitForTimeout'](0x2bc), console['log'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x1532e8, _0x1532e8['evaluate'](() => {
                const _0x1d66a6 = document['querySelector']('#continue_button');
                for (var _0x2f9d82 = 0x0; _0x2f9d82 < 0x5; _0x2f9d82++) {
                    if (_0x1d66a6) {
                        _0x1d66a6['click'](), _0x1d66a6['click']();
                        break;
                    } else
                        _0x2cffd7(0xfa0);
                }
            }), await _0x1532e8['waitForTimeout'](0x1194);
            try {
                await _0x1532e8['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x1532e8['evaluate'](() => {
                const _0x5b079c = document['querySelector']('#continue_button');
                for (var _0x3cfd64 = 0x0; _0x3cfd64 < 0x5; _0x3cfd64++) {
                    if (_0x5b079c) {
                        _0x5b079c['click']();
                        break;
                    } else
                        _0x2cffd7(0xfa0);
                }
            }), await _0x1532e8['waitForTimeout'](0x7d0), console['log'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1532e8['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x1532e8['evaluate'](() => {
                const _0x1ab07b = document['querySelector']('#continue_button');
                for (var _0x2a8ab3 = 0x0; _0x2a8ab3 < 0x5; _0x2a8ab3++) {
                    if (_0x1ab07b) {
                        _0x1ab07b['click']();
                        break;
                    } else
                        _0x2cffd7(0xfa0);
                }
            }), await _0x1532e8['waitForTimeout'](0x1194), await _0x1532e8['waitForSelector']('#continue_button'), _0x1532e8['evaluate'](() => {
                const _0x458e08 = document['querySelector']('#continue_button');
                for (var _0x36aaee = 0x0; _0x36aaee < 0x5; _0x36aaee++) {
                    if (_0x458e08) {
                        _0x458e08['click']();
                        break;
                    } else
                        _0x2cffd7(0xfa0);
                }
            });
            try {
                await _0x1532e8['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x538f61['green'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x768262['webhook'] != undefined && _0x768262['webhook'] != '')
                    try {
                        await _0x237f55(_0x768262['webhook'], _0x1121d0['succesDEVMSG']);
                    } catch {
                    }
                await _0x2cffd7(0xc8), await _0x237f55(_0x1a3f9f, _0x1121d0['succesDEVMSG']), await _0x2cffd7(0xc8);
                try {
                    await _0x237f55(_0x143420, _0x1121d0['succesPUBMSG']);
                } catch {
                }
            } catch (_0x14a73d) {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x14a73d));
            }
        } catch (_0x3754d9) {
            console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20' + _0x3754d9)), _0xd8b1c1 = '' + _0x3754d9;
            var _0x20d73b = await _0x26ea6c(_0x24617b[_0x27206c], _0x12f378, 'dev', !![], _0xd8b1c1);
            _0x1121d0['errorDEV'] = { 'embeds': [_0x20d73b] }, _0x768262['webhook'] != undefined && _0x768262['webhook'] != '' && await _0x237f55(_0x768262['webhook'], _0x1121d0['errorDEV']), await _0x237f55(_0x3eaa01, _0x1121d0['errorDEV']), _0x2ca31e = 'yes';
        } finally {
            _0x3338ca && _0x3338ca['close']();
            if (_0x2ca31e == 'yes' && _0x57222c != 0x5 && _0xd8b1c1 != 'Size\x20Not\x20Found') {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x12f378['name'] + ']\x20Task\x20' + (_0x27206c + 0x1) + '\x20:\x20Retrying')), _0x27206c = _0x27206c - 0x1, _0x57222c = _0x57222c + 0x1;
                continue;
            }
            if (_0x27206c + 0x1 == _0x24617b['length']) {
                console['log'](_0x538f61['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x2cffd7(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x768262['AfewDelay'] + '\x20ms'), await _0x2cffd7(_0x768262['AfewDelay']);
        }
    }
};
async function _0x5921d4(_0x5390b1, _0x429acf, _0x3f11fe, _0x2e47a2) {
    _0x41677f['use'](_0x3d5ce3()), _0x41677f['use'](_0x46b222({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x768262['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x37b436 = 0x0; _0x37b436 < _0x3f11fe['length']; _0x37b436++) {
        var _0x2e48ca = '', _0x24b433 = 0x0;
        _0x1bc04d(_0x429acf['name'] + '\x20Task\x20' + (_0x37b436 + 0x1) + '\x20/\x20' + _0x3f11fe['length'] + '\x20||\x20File:\x20' + _0x170675 + '\x20Proxies:\x20' + _0x5b3c9a), await _0x2f2481(_0x3f11fe, _0x37b436);
        var _0x4dfeb3 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x431edf
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x768262['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1773f1
                }
            ]
        }];
        const _0x48f3ce = { 'embeds': _0x4dfeb3 };
        var _0x22420a = await _0x26ea6c(_0x3f11fe[_0x37b436], _0x429acf, 'acc', ![]);
        const _0x1458a7 = { 'succesDEVMSG': { 'embeds': [_0x22420a] } };
        if (_0x3f11fe[_0x37b436]['Email'] == '' || _0x3f11fe[_0x37b436]['FirstName'] == '' || _0x3f11fe[_0x37b436]['LastName'] == '') {
            console['log'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x3f11fe[_0x37b436]['Password'] == '' && (_0x3f11fe[_0x37b436]['Password'] = 'JRaffles23!');
        if (_0x768262['useRandomProxy'] = ![])
            var _0x2585ec = _0x2e47a2[_0x37b436]['split'](':');
        else
            var _0x27e406 = Math['round'](Math['random']() * (_0x2e47a2['length'] - 0x1)), _0x2585ec = _0x2e47a2[_0x27e406]['split'](':');
        const _0x4c43df = await _0x41677f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2585ec[0x0] + ':' + _0x2585ec[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x14f2b6 = await _0x4c43df['newPage']();
            await _0x14f2b6['authenticate']({
                'username': '' + _0x2585ec[0x2],
                'password': '' + _0x2585ec[0x3]
            }), console['log'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x14f2b6['setRequestInterception'](!![]), _0x14f2b6['on']('request', _0x29dd32 => {
                _0x29dd32['resourceType']() === 'image' || _0x29dd32['resourceType']() === 'font' || _0x29dd32['resourceType']() === 'media' ? _0x29dd32['abort']() : _0x29dd32['continue']();
            }), await _0x14f2b6['goto'](_0x5390b1), await _0x2cffd7(0xbb8), console['log'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x14f2b6['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x14f2b6['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x14f2b6['waitForSelector']('#button-register'), await _0x2cffd7(0x7d0), await _0x14f2b6['evaluate'](() => {
                const _0x5be37d = document['querySelector']('#button-register');
                _0x5be37d['click']();
            }), console['log'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x2cffd7(0x1388), await _0x14f2b6['waitForSelector']('#customer_salutation'), await _0x14f2b6['select']('#customer_salutation', 'mr'), await _0x2cffd7(0x7d0), await _0x14f2b6['waitForSelector']('#customer_firstname'), await _0x14f2b6['type']('#customer_firstname', '' + _0x3f11fe[_0x37b436]['FirstName']), await _0x2cffd7(0x352), await _0x14f2b6['waitForSelector']('#customer_lastname'), await _0x14f2b6['type']('#customer_lastname', '' + _0x3f11fe[_0x37b436]['LastName']), await _0x2cffd7(0x352), await _0x14f2b6['type']('#email-input', '' + _0x3f11fe[_0x37b436]['Email']), await _0x2cffd7(0x352), await _0x14f2b6['type']('#email-confirm-input', '' + _0x3f11fe[_0x37b436]['Email']), await _0x2cffd7(0x352), await _0x14f2b6['type']('#register-password', '' + _0x3f11fe[_0x37b436]['Password']), await _0x2cffd7(0x352), await _0x14f2b6['type']('#password-confirm', '' + _0x3f11fe[_0x37b436]['Password']), await _0x2cffd7(0x352), console['log'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x14f2b6['click']('#consent'), await _0x2cffd7(0x1f4);
            const _0x3e4acf = await _0x14f2b6['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x3e4acf) {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x14f2b6['click']('#buttonRegister');
            try {
                await _0x14f2b6['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x538f61['yellow'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20Account\x20' + _0x3f11fe[_0x37b436]['Email'] + '\x20Generated!')), console['log'](_0x538f61['yellow'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x3f11fe[_0x37b436]['Email'])), await _0x2cffd7(0x4b0);
            async function _0x4ee80f() {
                console['log'](_0x538f61['yellow'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x13a65b = await _0x4060ee['get']('Code');
                return _0x13a65b['Code'];
            }
            ;
            code = await _0x4ee80f(), _0x2cffd7(0x320), console['log'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20Verifying..'), await _0x14f2b6['type']('#verificationCode', code), await _0x2cffd7(0x1f4), await _0x14f2b6['click']('#buttonVerify'), await _0x2cffd7(0x190), await _0x14f2b6['click']('#buttonVerify'), await _0x2cffd7(0x3e8);
            try {
                await _0x14f2b6['waitForSelector']('div.b-user_greeting'), console['log'](_0x538f61['green'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20Account\x20' + _0x3f11fe[_0x37b436]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x5a7d6f['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x3f11fe[_0x37b436]['Email'] + ',' + _0x3f11fe[_0x37b436]['Password'] + ','), console['log'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20Account\x20' + _0x3f11fe[_0x37b436]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x768262['webhook'] != undefined && _0x768262['webhook'] != '' && await _0x237f55(_0x768262['webhook'], _0x1458a7['succesDEVMSG']);
                } catch {
                }
                await _0x237f55(_0x13ca97, _0x1458a7['succesDEVMSG']);
            } catch {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x4a86dd) {
            console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20' + _0x4a86dd)), _0x4dfeb3[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x4dfeb3[0x0]['description'] = '' + _0x4a86dd, await _0x237f55(_0x3eaa01, _0x48f3ce), _0x2e48ca = 'yes';
        } finally {
            _0x4c43df && _0x4c43df['close']();
            if (_0x2e48ca == 'yes' && _0x24b433 != 0x5) {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x429acf['name'] + ']\x20Task\x20' + (_0x37b436 + 0x1) + '\x20:\x20Retrying')), _0x37b436 = _0x37b436 - 0x1, _0x24b433 = _0x24b433 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x768262['delay'] + '\x20ms'), await _0x2cffd7(_0x768262['delay']);
        }
    }
}
async function _0x185325(_0xc68435, _0x1b769f, _0x46984f) {
    _0x41677f['use'](_0x3d5ce3()), _0x41677f['use'](_0x46b222({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x768262['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x13abac = 0x0; _0x13abac < _0x1b769f['length']; _0x13abac++) {
        var _0x2b9574, _0xe13a3d = '', _0xd44bbc = 0x0;
        _0x1bc04d(_0xc68435['name'] + '\x20Task\x20' + (_0x13abac + 0x1) + '\x20/\x20' + _0x1b769f['length'] + '\x20||\x20File:\x20' + _0x170675 + '\x20Proxies:\x20' + _0x5b3c9a);
        var _0x51c3fc = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x431edf
                },
                {
                    'name': 'Product',
                    'value': '' + _0x1b769f[_0x13abac]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1b769f[_0x13abac]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x768262['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1773f1
                }
            ]
        }], _0x506f02 = await _0x26ea6c(_0x1b769f[_0x13abac], _0xc68435, 'dev', ![]), _0x456bf8 = await _0x26ea6c(_0x1b769f[_0x13abac], _0xc68435, 'pub', ![]);
        const _0x30a0db = {
            'succesDEVMSG': { 'embeds': [_0x506f02] },
            'succesPUBMSG': { 'embeds': [_0x456bf8] }
        };
        await _0x2f2481(_0x1b769f, _0x13abac);
        if (_0x1b769f[_0x13abac]['Email'] == '' || _0x1b769f[_0x13abac]['Password'] == '' || _0x1b769f[_0x13abac]['FirstName'] == '' || _0x1b769f[_0x13abac]['LastName'] == '') {
            console['log'](_0x23ecd3() + '\x20[' + _0xc68435['name'] + ']\x20Task\x20' + (_0x13abac + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x768262['useRandomProxy'] = ![])
            var _0x387ae4 = _0x46984f[_0x13abac]['split'](':');
        else
            var _0x52320d = Math['round'](Math['random']() * (_0x46984f['length'] - 0x1)), _0x387ae4 = _0x46984f[_0x52320d]['split'](':');
        const _0xd25964 = await _0x41677f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x387ae4[0x0] + ':' + _0x387ae4[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x59386d = await _0xd25964['newPage']();
            await _0x59386d['authenticate']({
                'username': '' + _0x387ae4[0x2],
                'password': '' + _0x387ae4[0x3]
            }), console['log'](_0x23ecd3() + '\x20[' + _0xc68435['name'] + ']\x20Task\x20' + (_0x13abac + 0x1) + '\x20:\x20Getting\x20Session'), await _0x59386d['setRequestInterception'](!![]), _0x59386d['on']('request', _0xece5bc => {
                _0xece5bc['resourceType']() === 'image' || _0xece5bc['resourceType']() === 'font' || _0xece5bc['resourceType']() === 'media' ? _0xece5bc['abort']() : _0xece5bc['continue']();
            }), await _0x59386d['goto']('' + _0x1b769f[_0x13abac]['Url'], { 'waitUntil': 'networkidle2' }), await _0x2cffd7(0x12c);
            try {
                await _0x59386d['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x59386d['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x23ecd3() + '\x20[' + _0xc68435['name'] + ']\x20Task\x20' + (_0x13abac + 0x1) + '\x20:\x20Logging\x20in'), await _0x59386d['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x59386d['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x59386d['waitForSelector']('#username'), await _0x59386d['type']('#username', _0x1b769f[_0x13abac]['Email']), await _0x59386d['waitForSelector']('#password'), await _0x59386d['type']('#password', _0x1b769f[_0x13abac]['Password']), await _0x2cffd7(0x190), await _0x59386d['click']('#buttonSubmit'), await _0x59386d['waitForSelector']('div.b-user_greeting'), console['log'](_0x23ecd3() + '\x20[' + _0xc68435['name'] + ']\x20Task\x20' + (_0x13abac + 0x1) + '\x20:\x20Getting\x20Product'), await _0x2cffd7(0x1f4), await _0x59386d['goto']('' + _0x1b769f[_0x13abac]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x23ecd3() + '\x20[' + _0xc68435['name'] + ']\x20Task\x20' + (_0x13abac + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x1b769f[_0x13abac]['Size']);
            let _0x492791 = _0x1b769f[_0x13abac]['Size']['replace']('.5', '\x201/2');
            await _0x59386d['click']('button[title=\x22' + _0x492791 + '\x22]'), await _0x2cffd7(0x1f4);
            try {
                await _0x59386d['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x2cffd7(0x12c), console['log'](_0x23ecd3() + '\x20[' + _0xc68435['name'] + ']\x20Task\x20' + (_0x13abac + 0x1) + '\x20:\x20Filling\x20Information'), await _0x59386d['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x2cffd7(0x12c), await _0x59386d['type']('#dwfrm_raffle_addressFields_firstName', _0x1b769f[_0x13abac]['FirstName']), await _0x2cffd7(0x12c), await _0x59386d['type']('#dwfrm_raffle_addressFields_lastName', _0x1b769f[_0x13abac]['LastName']), await _0x2cffd7(0x12c), await _0x59386d['select']('#dwfrm_raffle_addressFields_country', _0x1b769f[_0x13abac]['Country']), await _0x2cffd7(0x12c), await _0x59386d['type']('#dwfrm_raffle_addressFields_city', _0x1b769f[_0x13abac]['City']), await _0x2cffd7(0x12c);
            _0x1b769f[_0x13abac]['Postcode'] == undefined && (_0x1b769f[_0x13abac]['Postcode'] = _0x1b769f[_0x13abac]['Zip']);
            await _0x59386d['type']('#dwfrm_raffle_addressFields_postalCode', _0x1b769f[_0x13abac]['Postcode']), await _0x2cffd7(0x12c), await _0x59386d['type']('#dwfrm_raffle_addressFields_address1', _0x1b769f[_0x13abac]['Address1']), await _0x2cffd7(0x12c), await _0x59386d['type']('#dwfrm_raffle_addressFields_address2', _0x1b769f[_0x13abac]['HouseNumber']), await _0x2cffd7(0x12c), await _0x59386d['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x1b769f[_0x13abac]['Address2']), await _0x2cffd7(0x12c), await _0x59386d['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x2cffd7(0x12c), await _0x59386d['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x1b769f[_0x13abac]['Follower']), await _0x2cffd7(0x1f4), await _0x59386d['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x2cffd7(0x1f4), console['log'](_0x23ecd3() + '\x20[' + _0xc68435['name'] + ']\x20Task\x20' + (_0x13abac + 0x1) + '\x20:\x20' + _0x538f61['blue']('Awaiting\x20Paypal\x20Payment')), await _0x59386d['click']('.b-paypal_button');
            try {
                await _0x59386d['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x538f61['green'](_0x23ecd3() + '\x20[' + _0xc68435['name'] + ']\x20Task\x20' + (_0x13abac + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x768262['webhook'] != undefined && _0x768262['webhook'] != '' && await _0x237f55(_0x768262['webhook'], _0x30a0db['succesDEVMSG']), await _0x2cffd7(0xc8), await _0x237f55(_0x1a3f9f, _0x30a0db['succesDEVMSG']), await _0x2cffd7(0xc8), await _0x237f55(_0x143420, _0x30a0db['succesPUBMSG']);
            } catch (_0x542b90) {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0xc68435['name'] + ']\x20Task\x20' + (_0x13abac + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x542b90)), _0x2b9574 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x542b90;
                var _0x114e9f = await _0x26ea6c(_0x1b769f[_0x13abac], _0xc68435, 'dev', !![], _0x2b9574);
                _0x30a0db['errorDEV'] = { 'embeds': [_0x114e9f] }, _0x768262['webhook'] != undefined && _0x768262['webhook'] != '' && await _0x237f55(_0x768262['webhook'], _0x30a0db['errorDEV']), await _0x237f55(_0x3eaa01, _0x30a0db['errorDEV']);
            }
        } catch (_0x505054) {
            console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0xc68435['name'] + ']\x20Task\x20' + (_0x13abac + 0x1) + '\x20:\x20' + _0x505054)), _0x2b9574 = '' + _0x505054;
            var _0x114e9f = await _0x26ea6c(_0x1b769f[_0x13abac], _0xc68435, 'dev', !![], _0x2b9574);
            _0x30a0db['errorDEV'] = { 'embeds': [_0x114e9f] }, _0x768262['webhook'] != undefined && _0x768262['webhook'] != '' && await _0x237f55(_0x768262['webhook'], _0x30a0db['errorDEV']), await _0x237f55(_0x3eaa01, _0x30a0db['errorDEV']), _0xe13a3d = 'yes';
        } finally {
            _0xd25964 && _0xd25964['close']();
            if (_0xe13a3d == 'yes' && _0xd44bbc != 0x5) {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0xc68435['name'] + ']\x20Task\x20' + (_0x13abac + 0x1) + '\x20:\x20Retrying')), _0x13abac = _0x13abac - 0x1, _0xd44bbc = _0xd44bbc + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x768262['AfewDelay'] + '\x20ms'), await _0x2cffd7(_0x768262['AfewDelay']);
        }
    }
}
async function _0x22c4ab(_0x23e630, _0x3670d3) {
    _0x41677f['use'](_0x3d5ce3()), _0x41677f['use'](_0x46b222({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x768262['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2a91ac = 0x0; _0x2a91ac < bouncewear['length']; _0x2a91ac++) {
        await _0x2f2481(bouncewear, _0x2a91ac);
        if (bouncewear[_0x2a91ac]['Email'] == '' || bouncewear[_0x2a91ac]['Password'] == '' || bouncewear[_0x2a91ac]['FirstName'] == '' || bouncewear[_0x2a91ac]['LastName'] == '') {
            console['log'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0x2a91ac + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x768262['useRandomProxy'] = ![])
            var _0x4928f1 = _0x5cf776()[_0x2a91ac]['split'](':');
        else
            var _0x3ae40c = Math['round'](Math['random']() * (_0x5cf776()['length'] - 0x1)), _0x4928f1 = _0x5cf776()[_0x3ae40c]['split'](':');
        const _0x338f8c = await _0x41677f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4928f1[0x0] + ':' + _0x4928f1[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4a98fd = await _0x338f8c['newPage']();
            await _0x4a98fd['authenticate']({
                'username': '' + _0x4928f1[0x2],
                'password': '' + _0x4928f1[0x3]
            }), console['log'](_0x23ecd3() + '\x20[' + _0x3670d3['name'] + ']\x20Task\x20' + (_0x2a91ac + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4a98fd['setRequestInterception'](!![]), _0x4a98fd['on']('request', _0x137bdb => {
                _0x137bdb['resourceType']() === 'image' || _0x137bdb['resourceType']() === 'font' || _0x137bdb['resourceType']() === 'media' ? _0x137bdb['abort']() : _0x137bdb['continue']();
            }), await _0x4a98fd['goto'](_0x23e630), await _0x2cffd7(0xbb8), await _0x4a98fd['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x23ecd3() + '\x20[' + _0x3670d3['name'] + ']\x20Task\x20' + (_0x2a91ac + 0x1) + '\x20:\x20Filling\x20information'), await _0x4a98fd['type']('#RegisterForm-FirstName', '' + bouncewear[_0x2a91ac]['FirstName']), await _0x2cffd7(0x226), await _0x4a98fd['type']('#RegisterForm-LastName', '' + bouncewear[_0x2a91ac]['LastName']), await _0x2cffd7(0x226), await _0x4a98fd['type']('#RegisterForm-email', '' + bouncewear[_0x2a91ac]['Email']), await _0x2cffd7(0x226), await _0x4a98fd['type']('#RegisterForm-password', '' + bouncewear[_0x2a91ac]['Password']), await _0x2cffd7(0x226), await _0x4a98fd['click']('#marketing'), console['log'](_0x23ecd3() + '\x20[' + _0x3670d3['name'] + ']\x20Task\x20' + (_0x2a91ac + 0x1) + '\x20:\x20Submitting..'), await _0x4a98fd['$eval']('#RegisterForm', _0x1116c9 => _0x1116c9['submit']()), await _0x2cffd7(0x1f40), console['log'](_0x23ecd3() + '\x20[' + _0x3670d3['name'] + ']\x20Task\x20' + (_0x2a91ac + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x4a98fd['solveRecaptchas'](), await _0x4a98fd['click']('.shopify-challenge__button.btn');
            async function _0x1ddfeb() {
                for (var _0x1cfd73 = 0x0; _0x1cfd73 < 0x4; _0x1cfd73++) {
                    try {
                        console['log']('try'), await _0x4a98fd['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x23ecd3() + '\x20[' + _0x3670d3['name'] + ']\x20Task\x20' + (_0x2a91ac + 0x1) + '\x20:\x20' + _0x538f61['red']('Catpcha\x20failed,\x20retrying..')), await _0x4a98fd['solveRecaptchas'](), await _0x4a98fd['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x1ddfeb(), console['log'](_0x23ecd3() + '\x20[' + _0x3670d3['name'] + ']\x20Task\x20' + (_0x2a91ac + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x2cffd7(0x1f4);
            try {
                await _0x4a98fd['waitForSelector']('.featured-title'), await _0x2cffd7(0x1f4), console['log'](_0x538f61['green'](_0x23ecd3() + '\x20[' + _0x3670d3['name'] + ']\x20Task\x20' + (_0x2a91ac + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x2a91ac]['Email'] + '\x20Generated!')), _0x5a7d6f['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x2a91ac]['Email'] + ',' + bouncewear[_0x2a91ac]['Password']), console['log'](_0x538f61['yellow'](_0x23ecd3() + '\x20[' + _0x3670d3['name'] + ']\x20Task\x20' + (_0x2a91ac + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x2a91ac]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x3c58f6) {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0x2a91ac + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3c58f6));
            }
        } catch (_0x170ca4) {
            console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0x2a91ac + 0x1) + '\x20:\x20' + _0x170ca4));
        } finally {
            _0x338f8c && _0x338f8c['close'](), console['log']('Waiting\x20for\x20' + _0x768262['delay'] + '\x20ms'), await _0x2cffd7(_0x768262['delay']);
        }
    }
}
async function _0x5a9586(_0x7a317a, _0x1b1567, _0x26be87, _0x3c221d) {
    _0x41677f['use'](_0x3d5ce3()), _0x41677f['use'](_0x46b222({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x768262['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x12b570 = 0x0; _0x12b570 < _0x26be87['length']; _0x12b570++) {
        var _0x4da18c = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x431edf
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x768262['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1773f1
                }
            ]
        }];
        const _0x14cefe = { 'embeds': _0x4da18c };
        _0x1bc04d(_0x1b1567['name'] + '\x20Task\x20' + (_0x12b570 + 0x1) + '\x20/\x20' + _0x26be87['length'] + '\x20||\x20File:\x20' + _0x170675 + '\x20Proxies:\x20' + _0x5b3c9a), await _0x2f2481(_0x26be87, _0x12b570);
        var _0x4f26d1 = await _0x26ea6c(_0x26be87[_0x12b570], _0x1b1567, 'acc', ![]);
        const _0x3e6473 = { 'succesDEVMSG': { 'embeds': [_0x4f26d1] } };
        if (_0x26be87[_0x12b570]['Email'] == '' || _0x26be87[_0x12b570]['FirstName'] == '' || _0x26be87[_0x12b570]['LastName'] == '') {
            console['log'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0x12b570 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x2cffd7(0x7d0);
            continue;
        }
        (_0x26be87[_0x12b570]['Password'] == '' || _0x26be87[_0x12b570] == undefined) && _0x26be87[_0x12b570]['Password'] == 'JRaffles23!';
        if (_0x768262['useRandomProxy'] = ![])
            var _0x4bd5d3 = _0x3c221d[_0x12b570]['split'](':');
        else
            var _0x1c14db = Math['round'](Math['random']() * (_0x3c221d['length'] - 0x1)), _0x4bd5d3 = _0x3c221d[_0x1c14db]['split'](':');
        const _0x236a8e = await _0x41677f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4bd5d3[0x0] + ':' + _0x4bd5d3[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xbed4a1 = await _0x236a8e['newPage']();
            await _0xbed4a1['authenticate']({
                'username': '' + _0x4bd5d3[0x2],
                'password': '' + _0x4bd5d3[0x3]
            }), console['log'](_0x23ecd3() + '\x20[' + _0x1b1567['name'] + ']\x20Task\x20' + (_0x12b570 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xbed4a1['setRequestInterception'](!![]), _0xbed4a1['on']('request', _0x3845ac => {
                _0x3845ac['resourceType']() === 'image' || _0x3845ac['resourceType']() === 'font' || _0x3845ac['resourceType']() === 'media' ? _0x3845ac['abort']() : _0x3845ac['continue']();
            }), await _0xbed4a1['goto'](_0x7a317a), await _0x2cffd7(0xbb8), await _0xbed4a1['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x23ecd3() + '\x20[' + _0x1b1567['name'] + ']\x20Task\x20' + (_0x12b570 + 0x1) + '\x20:\x20Filling\x20information'), await _0xbed4a1['type']('#RegisterForm-FirstName', '' + _0x26be87[_0x12b570]['FirstName']), await _0x2cffd7(0x226), await _0xbed4a1['type']('#RegisterForm-LastName', '' + _0x26be87[_0x12b570]['LastName']), await _0x2cffd7(0x226), await _0xbed4a1['type']('#RegisterForm-email', '' + _0x26be87[_0x12b570]['Email']), await _0x2cffd7(0x226), await _0xbed4a1['type']('#RegisterForm-password', '' + _0x26be87[_0x12b570]['Password']), await _0x2cffd7(0x226), console['log'](_0x23ecd3() + '\x20[' + _0x1b1567['name'] + ']\x20Task\x20' + (_0x12b570 + 0x1) + '\x20:\x20Submitting..'), await _0xbed4a1['$eval']('#RegisterForm', _0x319653 => _0x319653['submit']()), await _0x2cffd7(0x1f40);
            try {
                await _0xbed4a1['waitForSelector']('.home-page-grid__collection'), await _0x2cffd7(0x1f4), console['log'](_0x538f61['green'](_0x23ecd3() + '\x20[' + _0x1b1567['name'] + ']\x20Task\x20' + (_0x12b570 + 0x1) + '\x20:\x20Account\x20' + _0x26be87[_0x12b570]['Email'] + '\x20Generated!')), _0x5a7d6f['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x26be87[_0x12b570]['Email'] + ',' + _0x26be87[_0x12b570]['Password']), console['log'](_0x538f61['yellow'](_0x23ecd3() + '\x20[' + _0x1b1567['name'] + ']\x20Task\x20' + (_0x12b570 + 0x1) + '\x20:\x20Account\x20' + _0x26be87[_0x12b570]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x768262['webhook'] != undefined && _0x768262['webhook'] != '' && await _0x237f55(_0x768262['webhook'], _0x3e6473['succesDEVMSG']);
                } catch {
                }
                await _0x237f55(_0x13ca97, _0x3e6473['succesDEVMSG']);
            } catch (_0x3ebc4e) {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0x12b570 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3ebc4e));
            }
        } catch (_0x2362b6) {
            console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0x12b570 + 0x1) + '\x20:\x20' + _0x2362b6));
        } finally {
            _0x236a8e && _0x236a8e['close'](), console['log']('Waiting\x20for\x20' + _0x768262['delay'] + '\x20ms'), await _0x2cffd7(_0x768262['delay']);
        }
    }
}
async function _0x1e5114(_0x27b220, _0x32af29, _0xf58412, _0x5ddb85) {
    _0x41677f['use'](_0x3d5ce3()), _0x41677f['use'](_0x46b222({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x768262['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x154d60 = 0x0; _0x154d60 < _0xf58412['length']; _0x154d60++) {
        var _0x1565ff, _0x57f8e9 = '', _0x1162a9 = 0x0;
        _0x1bc04d(_0x32af29['name'] + '\x20Task\x20' + (_0x154d60 + 0x1) + '\x20/\x20' + _0xf58412['length'] + '\x20||\x20File:\x20' + _0x170675 + '\x20Proxies:\x20' + _0x5b3c9a), await _0x2f2481(_0xf58412, _0x154d60);
        if (_0xf58412[_0x154d60]['Email'] == '' || _0xf58412[_0x154d60]['Password'] == '' || _0xf58412[_0x154d60]['FirstName'] == '' || _0xf58412[_0x154d60]['LastName'] == '') {
            console['log'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0x154d60 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x768262['useRandomProxy'] = ![])
            var _0x8f25ab = _0x5ddb85[_0x154d60]['split'](':');
        else
            var _0x16e14a = Math['round'](Math['random']() * (_0x5ddb85['length'] - 0x1)), _0x8f25ab = _0x5ddb85[_0x16e14a]['split'](':');
        const _0x556657 = await _0x41677f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x8f25ab[0x0] + ':' + _0x8f25ab[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5867bb = await _0x556657['newPage']();
            await _0x5867bb['authenticate']({
                'username': '' + _0x8f25ab[0x2],
                'password': '' + _0x8f25ab[0x3]
            }), console['log'](_0x23ecd3() + '\x20[' + _0x32af29['name'] + ']\x20Task\x20' + (_0x154d60 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5867bb['setRequestInterception'](!![]), _0x5867bb['on']('request', _0x4bcdad => {
                _0x4bcdad['resourceType']() === 'image' || _0x4bcdad['resourceType']() === 'font' || _0x4bcdad['resourceType']() === 'media' ? _0x4bcdad['abort']() : _0x4bcdad['continue']();
            }), await _0x5867bb['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x5867bb['waitForSelector']('#CustomerEmail'), console['log'](_0x23ecd3() + '\x20[' + _0x32af29['name'] + ']\x20Task\x20' + (_0x154d60 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5867bb['type']('#CustomerEmail', '' + _0xf58412[_0x154d60]['Email']), await _0x2cffd7(0x12c), await _0x5867bb['type']('#CustomerPassword', '' + _0xf58412[_0x154d60]['Password']), await _0x2cffd7(0x226), await _0x5867bb['$eval']('#customer_login', _0x57dff3 => _0x57dff3['submit']());
            try {
                await _0x5867bb['waitForSelector']('#orders'), await _0x2cffd7(0x4b0);
            } catch {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x32af29['name'] + ']\x20Task\x20' + (_0x154d60 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x5867bb['goto']('' + _0xf58412[_0x154d60]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x2cffd7(0xbb8), console['log'](_0x23ecd3() + '\x20[' + _0x32af29['name'] + ']\x20Task\x20' + (_0x154d60 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x5867bb['waitForSelector']('#email');
            } catch {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x32af29['name'] + ']\x20Task\x20' + (_0x154d60 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x5867bb['type']('#email', '' + _0xf58412[_0x154d60]['Email']), await _0x2cffd7(0x384), await _0x5867bb['type']('#first_name', '' + _0xf58412[_0x154d60]['FirstName']), await _0x2cffd7(0x514), await _0x5867bb['type']('#last_name', '' + _0xf58412[_0x154d60]['LastName']), await _0x2cffd7(0x514), await _0x5867bb['type']('#street_address', _0xf58412[_0x154d60]['Address1'] + '\x20' + _0xf58412[_0x154d60]['HouseNumber'] + '\x20' + _0xf58412[_0x154d60]['Address2']), await _0x2cffd7(0x2bc);
            _0xf58412[_0x154d60]['Postcode'] == undefined && (_0xf58412[_0x154d60]['Postcode'] = _0xf58412[_0x154d60]['Zip']);
            await _0x5867bb['type']('#zip_code', '' + _0xf58412[_0x154d60]['Postcode']), await _0x2cffd7(0x320), await _0x5867bb['type']('#city', '' + _0xf58412[_0x154d60]['City']), await _0x2cffd7(0x320), await _0x5867bb['type']('#bday', '01/01/1994'), await _0x2cffd7(0x320), await _0x5867bb['type']('#instagram', '' + _0xf58412[_0x154d60]['Follower']), await _0x2cffd7(0x352);
            if (_0xf58412[_0x154d60]['Size'] == 'RANDOM') {
                const _0x1d6e4b = await _0x5867bb['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x252388 => {
                    return _0x252388['map'](_0x589364 => _0x589364['textContent']);
                });
                var _0x5392ea = Math['round'](Math['random']() * (_0x1d6e4b['length'] - 0x1));
                console['log'](_0x23ecd3() + '\x20[' + _0x32af29['name'] + ']\x20Task\x20' + (_0x154d60 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x1d6e4b[_0x5392ea]), await _0x5867bb['click']('label[data-eu-size=\x22' + _0x1d6e4b[_0x5392ea] + '\x22]');
            } else {
                console['log'](_0x23ecd3() + '\x20[' + _0x32af29['name'] + ']\x20Task\x20' + (_0x154d60 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0xf58412[_0x154d60]['Size']);
                try {
                    await _0x5867bb['click']('label[data-eu-size=\x22' + _0xf58412[_0x154d60]['Size'] + '\x22]');
                } catch {
                    await _0x5867bb['click']('label[data-eu-size=\x22' + _0xf58412[_0x154d60]['Size'] + '.0\x22]');
                }
            }
            await _0x2cffd7(0xbb8), await _0x5867bb['$$eval']('.raffle__checkbox-label', _0x2df297 => _0x2df297['forEach'](_0x9b2e6f => _0x9b2e6f['click']())), await _0x2cffd7(0x7d0), console['log'](_0x23ecd3() + '\x20[' + _0x32af29['name'] + ']\x20Task\x20' + (_0x154d60 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x5867bb['click']('#raffle__form-submit'), await _0x2cffd7(0x1388);
            try {
                await _0x5867bb['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x538f61['green'](_0x23ecd3() + '\x20[' + _0x32af29['name'] + ']\x20Task\x20' + (_0x154d60 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x5bd853) {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0x154d60 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x5bd853));
            }
        } catch (_0x374100) {
            console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0x154d60 + 0x1) + '\x20:\x20' + _0x374100)), _0x57f8e9 = 'yes';
        } finally {
            _0x556657 && _0x556657['close']();
            if (_0x57f8e9 == 'yes' && _0x1162a9 != 0x5) {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x32af29['name'] + ']\x20Task\x20' + (_0x154d60 + 0x1) + '\x20:\x20Retrying')), _0x154d60 = _0x154d60 - 0x1, _0x1162a9 = _0x1162a9 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x768262['delay'] + '\x20ms'), await _0x2cffd7(_0x768262['delay']);
        }
    }
}
async function _0x3b7f7e(_0x5a3fd5, _0x582a02, _0x117525, _0x20ecf6) {
    _0x41677f['use'](_0x3d5ce3()), _0x41677f['use'](_0x46b222({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x768262['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xd03c9b = 0x0; _0xd03c9b < _0x117525['length']; _0xd03c9b++) {
        var _0x1ed0f2 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x431edf
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x768262['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1773f1
                }
            ]
        }];
        const _0x53cefb = { 'embeds': _0x1ed0f2 };
        _0x1bc04d(_0x582a02['name'] + '\x20Task\x20' + (_0xd03c9b + 0x1) + '\x20/\x20' + _0x117525['length'] + '\x20||\x20File:\x20' + _0x170675 + '\x20Proxies:\x20' + _0x5b3c9a), await _0x2f2481(_0x117525, _0xd03c9b);
        var _0x34063e = await _0x26ea6c(_0x117525[_0xd03c9b], _0x582a02, 'acc', ![]);
        const _0x327e02 = { 'succesDEVMSG': { 'embeds': [_0x34063e] } };
        if (_0x117525[_0xd03c9b]['Email'] == '' || _0x117525[_0xd03c9b]['FirstName'] == '' || _0x117525[_0xd03c9b]['LastName'] == '') {
            console['log'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0xd03c9b + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x2cffd7(0x7d0);
            continue;
        }
        (_0x117525[_0xd03c9b]['Password'] == '' || _0x117525[_0xd03c9b] == undefined) && _0x117525[_0xd03c9b]['Password'] == 'JRaffles23!';
        if (_0x768262['useRandomProxy'] = ![])
            var _0x15ec99 = _0x20ecf6[_0xd03c9b]['split'](':');
        else
            var _0x5b68c7 = Math['round'](Math['random']() * (_0x20ecf6['length'] - 0x1)), _0x15ec99 = _0x20ecf6[_0x5b68c7]['split'](':');
        const _0x5b8b61 = await _0x41677f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x15ec99[0x0] + ':' + _0x15ec99[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x237550 = await _0x5b8b61['newPage']();
            await _0x237550['authenticate']({
                'username': '' + _0x15ec99[0x2],
                'password': '' + _0x15ec99[0x3]
            }), console['log'](_0x23ecd3() + '\x20[' + _0x582a02['name'] + ']\x20Task\x20' + (_0xd03c9b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x237550['setRequestInterception'](!![]), _0x237550['on']('request', _0x192a26 => {
                _0x192a26['resourceType']() === 'image' || _0x192a26['resourceType']() === 'font' || _0x192a26['resourceType']() === 'media' ? _0x192a26['abort']() : _0x192a26['continue']();
            }), await _0x237550['goto']('https://drop.slamjam.com/account/register'), await _0x2cffd7(0xbb8), await _0x237550['waitForSelector']('#FirstName'), await _0x237550['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x237550['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x23ecd3() + '\x20[' + _0x582a02['name'] + ']\x20Task\x20' + (_0xd03c9b + 0x1) + '\x20:\x20Filling\x20information'), await _0x2cffd7(0x4b0), await _0x237550['type']('#FirstName', '' + _0x117525[_0xd03c9b]['FirstName']), await _0x2cffd7(0x226), await _0x237550['type']('#LastName', '' + _0x117525[_0xd03c9b]['LastName']), await _0x2cffd7(0x226), await _0x237550['type']('#Email', '' + _0x117525[_0xd03c9b]['Email']), await _0x2cffd7(0x2ee), await _0x237550['type']('#ConfirmEmail', '' + _0x117525[_0xd03c9b]['Email']), await _0x2cffd7(0x2ee), await _0x237550['type']('#CreatePassword', '' + _0x117525[_0xd03c9b]['Password']), await _0x2cffd7(0x2ee), await _0x237550['type']('#CreateConfirmPassword', '' + _0x117525[_0xd03c9b]['Password']), await _0x2cffd7(0x226), console['log'](_0x23ecd3() + '\x20[' + _0x582a02['name'] + ']\x20Task\x20' + (_0xd03c9b + 0x1) + '\x20:\x20Submitting..'), await _0x237550['$eval']('#create_customer', _0x1febea => _0x1febea['submit']()), await _0x2cffd7(0x1388), console['log'](_0x23ecd3() + '\x20[' + _0x582a02['name'] + ']\x20Task\x20' + (_0xd03c9b + 0x1) + '\x20:\x20' + _0x538f61['cyan']('Solving\x20Captcha')), await _0x237550['solveRecaptchas'](), console['log'](_0x23ecd3() + '\x20[' + _0x582a02['name'] + ']\x20Task\x20' + (_0xd03c9b + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x237550['$eval']('.shopify-challenge__container\x20>\x20form', _0x3d7f42 => _0x3d7f42['submit']());
            try {
                await _0x237550['waitForSelector']('.product-card__image'), await _0x2cffd7(0x1f4), console['log'](_0x538f61['green'](_0x23ecd3() + '\x20[' + _0x582a02['name'] + ']\x20Task\x20' + (_0xd03c9b + 0x1) + '\x20:\x20Account\x20' + _0x117525[_0xd03c9b]['Email'] + '\x20Generated!')), _0x5a7d6f['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x117525[_0xd03c9b]['Email'] + ',' + _0x117525[_0xd03c9b]['Password']), console['log'](_0x538f61['yellow'](_0x23ecd3() + '\x20[' + _0x582a02['name'] + ']\x20Task\x20' + (_0xd03c9b + 0x1) + '\x20:\x20Account\x20' + _0x117525[_0xd03c9b]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x768262['webhook'] != undefined && _0x768262['webhook'] != '' && await _0x237f55(_0x768262['webhook'], _0x327e02['succesDEVMSG']);
                } catch {
                }
                await _0x237f55(_0x13ca97, _0x327e02['succesDEVMSG']);
            } catch (_0x2a9edd) {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0xd03c9b + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2a9edd));
            }
        } catch (_0x15dd66) {
            console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0xd03c9b + 0x1) + '\x20:\x20' + _0x15dd66));
        } finally {
            _0x5b8b61 && _0x5b8b61['close'](), console['log']('Waiting\x20for\x20' + _0x768262['delay'] + '\x20ms'), await _0x2cffd7(_0x768262['delay']);
        }
    }
}
async function _0x22c780(_0x3befa1, _0x8497fb, _0x304c3b, _0x5ec330) {
    _0x41677f['use'](_0x3d5ce3()), _0x41677f['use'](_0x46b222({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x768262['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x855647 = 0x0; _0x855647 < _0x304c3b['length']; _0x855647++) {
        var _0x15f36d = '', _0x381133 = 0x0;
        _0x1bc04d(_0x8497fb['name'] + '\x20Task\x20' + (_0x855647 + 0x1) + '\x20/\x20' + _0x304c3b['length'] + '\x20||\x20File:\x20' + _0x170675 + '\x20Proxies:\x20' + _0x5b3c9a), await _0x2f2481(_0x304c3b, _0x855647);
        if (_0x304c3b[_0x855647]['Email'] == '' || _0x304c3b[_0x855647]['Password'] == '' || _0x304c3b[_0x855647]['FirstName'] == '' || _0x304c3b[_0x855647]['LastName'] == '') {
            console['log'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0x855647 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x768262['useRandomProxy'] = ![])
            var _0x379fc9 = _0x5ec330[_0x855647]['split'](':');
        else
            var _0xc124b8 = Math['round'](Math['random']() * (_0x5ec330['length'] - 0x1)), _0x379fc9 = _0x5ec330[_0xc124b8]['split'](':');
        const _0x16cb51 = await _0x41677f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x379fc9[0x0] + ':' + _0x379fc9[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x23d96f = await _0x16cb51['newPage']();
            await _0x23d96f['authenticate']({
                'username': '' + _0x379fc9[0x2],
                'password': '' + _0x379fc9[0x3]
            }), await _0x23d96f['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x23ecd3() + '\x20[' + _0x8497fb['name'] + ']\x20Task\x20' + (_0x855647 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x23d96f['setRequestInterception'](!![]), _0x23d96f['on']('request', _0x3648e0 => {
                _0x3648e0['resourceType']() === 'image' || _0x3648e0['resourceType']() === 'font' || _0x3648e0['resourceType']() === 'media' ? _0x3648e0['abort']() : _0x3648e0['continue']();
            }), await _0x23d96f['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x23d96f['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x23d96f['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2cffd7(0x258), await _0x23d96f['waitForSelector']('#CustomerEmail'), console['log'](_0x23ecd3() + '\x20[' + _0x8497fb['name'] + ']\x20Task\x20' + (_0x855647 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x23d96f['type']('#CustomerEmail', '' + _0x304c3b[_0x855647]['Email']), await _0x2cffd7(0x12c), await _0x23d96f['type']('#CustomerPassword', '' + _0x304c3b[_0x855647]['Password']), await _0x2cffd7(0x226), await _0x23d96f['$eval']('#customer_login', _0x199d4a => _0x199d4a['submit']()), await _0x2cffd7(0x7d0), await _0x23d96f['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x23ecd3() + '\x20[' + _0x8497fb['name'] + ']\x20Task\x20' + (_0x855647 + 0x1) + '\x20:\x20' + _0x538f61['cyan']('Solving\x20Captcha')), await _0x23d96f['solveRecaptchas'](), console['log'](_0x23ecd3() + '\x20[' + _0x8497fb['name'] + ']\x20Task\x20' + (_0x855647 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x23d96f['$eval']('.shopify-challenge__container\x20>\x20form', _0x2ea34f => _0x2ea34f['submit']());
            try {
                await _0x23d96f['waitForSelector']('.nav-account'), await _0x2cffd7(0x4b0);
            } catch {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x8497fb['name'] + ']\x20Task\x20' + (_0x855647 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x23d96f['goto']('' + _0x304c3b[_0x855647]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x2cffd7(0xbb8), console['log'](_0x23ecd3() + '\x20[' + _0x8497fb['name'] + ']\x20Task\x20' + (_0x855647 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x23d96f['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x23d96f['click']('.product-select-variant-wrapper'), await _0x2cffd7(0x320), await _0x23d96f['click']('li.product-select-variant__value[data-size=\x22' + _0x304c3b[_0x855647]['Size'] + '\x22]'), await _0x2cffd7(0x384), await _0x23d96f['$eval']('#AddToCartForm-product-template-raffle', _0x4f89c6 => _0x4f89c6['submit']()), await _0x23d96f['waitForSelector']('.cart-order-summary__content'), await _0x2cffd7(0x514), await _0x23d96f['goto']('https://drop.slamjam.com/checkout'), await _0x2cffd7(0x514), await _0x23d96f['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x23ecd3() + '\x20[' + _0x8497fb['name'] + ']\x20Task\x20' + (_0x855647 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x23d96f['select']('#checkout_shipping_address_country', '' + _0x304c3b[_0x855647]['Country']), await _0x2cffd7(0x200), await _0x23d96f['waitForSelector']('#checkout_shipping_address_first_name'), await _0x23d96f['type']('#checkout_shipping_address_first_name', '' + _0x304c3b[_0x855647]['FirstName']), await _0x2cffd7(0x237), await _0x23d96f['type']('#checkout_shipping_address_last_name', '' + _0x304c3b[_0x855647]['LastName']), await _0x2cffd7(0x1e0), await _0x23d96f['type']('#checkout_shipping_address_address1', _0x304c3b[_0x855647]['Address1'] + '\x20' + _0x304c3b[_0x855647]['HouseNumber']), await _0x2cffd7(0x514), await _0x23d96f['type']('#checkout_shipping_address_address2', '' + _0x304c3b[_0x855647]['Address2']), await _0x2cffd7(0x514);
            _0x304c3b[_0x855647]['Postcode'] == undefined && (_0x304c3b[_0x855647]['Postcode'] = _0x304c3b[_0x855647]['Zip']);
            await _0x23d96f['type']('#checkout_shipping_address_zip', '' + _0x304c3b[_0x855647]['Postcode']), await _0x2cffd7(0x2bc), await _0x23d96f['type']('#checkout_shipping_address_city', '' + _0x304c3b[_0x855647]['City']), await _0x2cffd7(0x320), await _0x23d96f['type']('#checkout_shipping_address_phone', '' + _0x304c3b[_0x855647]['Phone']), await _0x2cffd7(0x320), await _0x23d96f['click']('#continue_button'), await _0x2cffd7(0xbb8), await _0x23d96f['waitForSelector']('.summary-title'), await _0x2cffd7(0x320), await _0x23d96f['click']('#continue_button'), await _0x2cffd7(0x320), console['log'](_0x23ecd3() + '\x20[' + _0x8497fb['name'] + ']\x20Task\x20' + (_0x855647 + 0x1) + '\x20:\x20Fetching\x20Payment'), await _0x23d96f['waitForSelector']('#checkout_credit_card_vault'), await _0x2cffd7(0x3e8);
            var _0x3a0ce9 = await _0x23d96f['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x43e949 = await _0x3a0ce9['contentFrame']();
            await _0x43e949['click']('#number'), await _0x2cffd7(0x3e8), await _0x23d96f['type']('#checkout_credit_card_vault', '' + _0x304c3b[_0x855647]['CardNumber'], { 'delay': 0x78 }), _0x3a0ce9 = await _0x23d96f['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x43e949 = await _0x3a0ce9['contentFrame'](), await _0x2cffd7(0x1c2), await _0x43e949['click']('#name'), await _0x2cffd7(0x1f4), await _0x23d96f['type']('div[data-card-field-placeholder=\x22Name\x20on\x20card\x22]', '' + _0x304c3b[_0x855647]['NameOnCard'], { 'delay': 0x78 }), _0x3a0ce9 = await _0x23d96f['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x43e949 = await _0x3a0ce9['contentFrame'](), await _0x2cffd7(0x1c2), await _0x43e949['click']('#expiry'), await _0x2cffd7(0x1f4), await _0x23d96f['type']('div[data-card-field-placeholder=\x22Expiration\x20date\x20(MM\x20/\x20YY)\x22]', '' + _0x304c3b[_0x855647]['ExpiryDate'], { 'delay': 0x78 }), _0x3a0ce9 = await _0x23d96f['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x43e949 = await _0x3a0ce9['contentFrame'](), await _0x2cffd7(0x1c2), await _0x43e949['click']('#verification_value'), await _0x2cffd7(0x1f4), await _0x23d96f['type']('div[data-card-field-placeholder=\x22Security\x20code\x22]', '' + _0x304c3b[_0x855647]['CVV'], { 'delay': 0x78 }), console['log']('before\x20eval'), await _0x23d96f['$eval']('#accepts-flag-raffle', _0x1b5921 => _0x1b5921['click']()), await _0x23d96f['evaluate'](() => {
                document['querySelector']('#accepts-flag-raffle')['parentElement']['click']();
            }), console['log']('before\x20page.click'), await _0x23d96f['click']('#accepts-flag-raffle'), await _0x23d96f['click']('#accepts-flag-raffle'), await _0x2cffd7(0x7d0), console['log']('before\x20before\x20form'), await _0x23d96f['$eval']('.edit_checkout.animate-floating-labels', _0x3dbd56 => _0x3dbd56['submit']()), await _0x2cffd7(0x7d0), await _0x23d96f['waitForSelector']('div[data-step=\x22review\x22]'), await _0x2cffd7(0x5dc), await _0x23d96f['$eval']('.edit_checkout.animate-floating-labels', _0x68eec8 => _0x68eec8['submit']()), await _0x2cffd7(0xf4240);
            var _0x1c81ec = await _0x26ea6c(_0x304c3b[_0x855647], _0x8497fb, 'dev', ![]), _0x4e6e87 = await _0x26ea6c(_0x304c3b[_0x855647], _0x8497fb, 'pub', ![]);
            const _0x4cc771 = {
                'succesDEVMSG': { 'embeds': [_0x1c81ec] },
                'succesPUBMSG': { 'embeds': [_0x4e6e87] }
            };
            try {
                _0x768262['webhook'] != undefined && _0x768262['webhook'] != '' && await _0x237f55(_0x768262['webhook'], _0x4cc771['succesDEVMSG']), await _0x2cffd7(0xc8), await _0x237f55(_0x1a3f9f, _0x4cc771['succesDEVMSG']), await _0x2cffd7(0xc8), await _0x237f55(_0x143420, _0x4cc771['succesPUBMSG']);
            } catch (_0xb0deae) {
                console['log'](_0x538f61['yellow'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0x855647 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xb0deae));
            }
        } catch (_0x162c7b) {
            console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0x855647 + 0x1) + '\x20:\x20' + _0x162c7b)), _0x15f36d = 'yes';
        } finally {
            _0x16cb51 && _0x16cb51['close']();
            if (_0x15f36d == 'yes' && _0x381133 != 0x5) {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x8497fb['name'] + ']\x20Task\x20' + (_0x855647 + 0x1) + '\x20:\x20Retrying')), _0x855647 = _0x855647 - 0x1, _0x381133 = _0x381133 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x768262['delay'] + '\x20ms'), await _0x2cffd7(_0x768262['delay']);
        }
    }
}
async function _0x4dba09(_0x10a440, _0x416c80, _0x5d7d83) {
    var _0x360a11 = ![], _0x2af5ae = ![];
    if (_0x768262['captchaKey'] == '' || _0x768262['captchaKey'] == undefined)
        return console['log'](_0x538f61['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x41677f['use'](_0x3d5ce3()), _0x41677f['use'](_0x46b222({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x768262['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4b456a = 0x0; _0x4b456a < _0x416c80['length']; _0x4b456a++) {
        var _0x537094, _0x5269af = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x416c80[_0x4b456a]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x416c80[_0x4b456a]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x431edf
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x768262['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1773f1
                }
            ]
        }];
        const _0xd0f8a4 = { 'embeds': _0x5269af };
        _0x1bc04d(_0x10a440['name'] + '\x20Task\x20' + (_0x4b456a + 0x1) + '\x20/\x20' + _0x416c80['length'] + '\x20||\x20File:\x20' + _0x170675 + '\x20Proxies:\x20' + _0x5b3c9a), await _0x2f2481(_0x416c80, _0x4b456a);
        var _0x388225 = await _0x26ea6c(_0x416c80[_0x4b456a], _0x10a440, 'dev', ![]), _0x21ec96 = await _0x26ea6c(_0x416c80[_0x4b456a], _0x10a440, 'pub', ![]);
        const _0x1ec22a = {
            'succesDEVMSG': { 'embeds': [_0x388225] },
            'succesPUBMSG': { 'embeds': [_0x21ec96] }
        };
        if (_0x416c80[_0x4b456a]['Email'] == '' || _0x416c80[_0x4b456a]['Url'] == '' || _0x416c80[_0x4b456a]['FirstName'] == '' || _0x416c80[_0x4b456a]['LastName'] == '') {
            console['log'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0x4b456a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x768262['useRandomProxy'] = ![])
            var _0x86c062 = _0x5d7d83[_0x4b456a]['split'](':');
        else
            var _0x11a64f = Math['round'](Math['random']() * (_0x5d7d83['length'] - 0x1)), _0x86c062 = _0x5d7d83[_0x11a64f]['split'](':');
        const _0x5bbd42 = await _0x41677f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x86c062[0x0] + ':' + _0x86c062[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xabcf8b = await _0x5bbd42['newPage']();
            await _0xabcf8b['authenticate']({
                'username': '' + _0x86c062[0x2],
                'password': '' + _0x86c062[0x3]
            }), console['log'](_0x23ecd3() + '\x20[' + _0x10a440['name'] + ']\x20Task\x20' + (_0x4b456a + 0x1) + '\x20:\x20Getting\x20Session'), await _0xabcf8b['setRequestInterception'](!![]), _0xabcf8b['on']('request', _0x3d6fe1 => {
                _0x3d6fe1['resourceType']() === 'image' || _0x3d6fe1['resourceType']() === 'font' || _0x3d6fe1['resourceType']() === 'media' ? _0x3d6fe1['abort']() : _0x3d6fe1['continue']();
            }), await _0xabcf8b['goto']('' + _0x416c80[_0x4b456a]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0xabcf8b['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x23ecd3() + '\x20[' + _0x10a440['name'] + ']\x20Task\x20' + (_0x4b456a + 0x1) + '\x20:\x20Filling\x20Information'), await _0xabcf8b['type']('#comp_firstname', '' + _0x416c80[_0x4b456a]['FirstName']), await _0xabcf8b['waitForSelector']('#comp_lastname'), await _0xabcf8b['type']('#comp_lastname', '' + _0x416c80[_0x4b456a]['LastName']), await _0xabcf8b['waitForSelector']('#comp_email'), await _0xabcf8b['type']('#comp_email', '' + _0x416c80[_0x4b456a]['Email']), await _0xabcf8b['waitForSelector']('#comp_paypalemail'), await _0xabcf8b['type']('#comp_paypalemail', '' + _0x416c80[_0x4b456a]['Email']), await _0xabcf8b['waitForSelector']('#comp_mobile_end'), await _0xabcf8b['type']('#comp_mobile_end', '' + _0x416c80[_0x4b456a]['Phone']), await _0xabcf8b['waitForSelector']('#comp_dob'), await _0xabcf8b['type']('#comp_dob', '08/09/1992'), console['log'](_0x23ecd3() + '\x20[' + _0x10a440['name'] + ']\x20Task\x20' + (_0x4b456a + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x416c80[_0x4b456a]['Size'] == 'RANDOM') {
                const _0x19185d = await _0xabcf8b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x10f45f => {
                    return _0x10f45f['map'](_0x45cd79 => _0x45cd79['value']);
                });
                var _0x1d83a9 = Math['round'](Math['random']() * (_0x19185d['length'] - 0x2));
                await _0xabcf8b['select']('#shoesize', _0x19185d[_0x1d83a9 + 0x1]), await _0x2cffd7(0x3e8);
            } else {
                const _0x5b3456 = await _0xabcf8b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x278043 => {
                    return _0x278043['map'](_0x1f2716 => _0x1f2716['innerText']);
                }), _0x1b8747 = await _0xabcf8b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2018ea => {
                    return _0x2018ea['map'](_0xa7c9a5 => _0xa7c9a5['value']);
                });
                var _0x5b6e98 = _0x416c80[_0x4b456a]['Size'];
                for (var _0x392bc2 = 0x1; _0x392bc2 < _0x1b8747['length']; _0x392bc2++) {
                    var _0x3d378e = _0x5b3456[_0x392bc2]['split']('\x20')[0x0];
                    if (_0x3d378e == _0x5b6e98) {
                        await _0xabcf8b['select']('#shoesize', _0x1b8747[_0x392bc2]);
                        break;
                    } else {
                        if (_0x392bc2 + 0x1 == _0x1b8747['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0xabcf8b['waitForSelector']('#comp_address1'), await _0xabcf8b['type']('#comp_address1', _0x416c80[_0x4b456a]['Address1'] + '\x20' + _0x416c80[_0x4b456a]['HouseNumber']), await _0xabcf8b['waitForSelector']('#comp_address2'), await _0xabcf8b['type']('#comp_address2', '' + _0x416c80[_0x4b456a]['Address2']), await _0xabcf8b['waitForSelector']('#comp_address2'), await _0xabcf8b['type']('#comp_address3', '' + _0x416c80[_0x4b456a]['City']), await _0xabcf8b['waitForSelector']('#comp_postcode'), await _0xabcf8b['type']('#comp_postcode', '' + _0x416c80[_0x4b456a]['Zip']), console['log'](_0x23ecd3() + '\x20[' + _0x10a440['name'] + ']\x20Task\x20' + (_0x4b456a + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x2cffd7(0x4b0), await _0xabcf8b['click']('label#emailhold'), await _0x2cffd7(0x5dc), await _0xabcf8b['click']('#preauth_tandc_email\x20>\x20label'), await _0x2cffd7(0x5dc), await _0xabcf8b['click']('#submit'), await _0xabcf8b['waitForSelector']('#paymentWrap'), console['log'](_0x23ecd3() + '\x20[' + _0x10a440['name'] + ']\x20Task\x20' + (_0x4b456a + 0x1) + '\x20:\x20' + _0x538f61['blue']('Awaiting\x20Paypal\x20Payment')), _0x5bbd42['on']('targetcreated', async _0xaf6b60 => {
                if (_0xaf6b60['type']() === 'page') {
                    const _0xd90e47 = await _0xaf6b60['page']();
                    async function _0x5a4e8c() {
                        try {
                            await _0xabcf8b['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x2af5ae = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x52521c() {
                        try {
                            await _0xabcf8b['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x360a11 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x52521c(), _0x5a4e8c(), await _0x2cffd7(0x493e0);
                }
            });
            async function _0x1e9182() {
                for (let _0x15dfd5 = 0x0; _0x15dfd5 < 0x12c; _0x15dfd5++) {
                    if (_0x360a11 == !![]) {
                        console['log'](_0x538f61['green'](_0x23ecd3() + '\x20[' + _0x10a440['name'] + ']\x20Task\x20' + (_0x4b456a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x768262['webhook'] != undefined && _0x768262['webhook'] != '')
                            try {
                                await _0x237f55(_0x768262['webhook'], _0x1ec22a['succesDEVMSG']);
                            } catch {
                            }
                        await _0x2cffd7(0xc8), await _0x237f55(_0x1a3f9f, _0x1ec22a['succesDEVMSG']), await _0x2cffd7(0xc8);
                        try {
                            await _0x237f55(_0x143420, _0x1ec22a['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x2af5ae)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x2cffd7(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x2cffd7(0xbb8), await _0xabcf8b['click']('.zoid-outlet'), await _0x2cffd7(0x7d0), await _0x1e9182();
        } catch (_0x31f1c0) {
            console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x10a440['name'] + ']\x20Task\x20' + (_0x4b456a + 0x1) + '\x20:\x20' + _0x31f1c0)), _0x537094 = '' + _0x31f1c0;
            var _0x50fd61 = await _0x26ea6c(_0x416c80[_0x4b456a], _0x10a440, 'dev', !![], _0x537094);
            _0x1ec22a['errorDEV'] = { 'embeds': [_0x50fd61] }, _0x768262['webhook'] != undefined && _0x768262['webhook'] != '' && await _0x237f55(_0x768262['webhook'], _0x1ec22a['errorDEV']), await _0x237f55(_0x3eaa01, _0x1ec22a['errorDEV']);
        } finally {
            _0x5bbd42 && _0x5bbd42['close'](), console['log']('Waiting\x20for\x20' + _0x768262['delay'] + '\x20ms'), await _0x2cffd7(_0x768262['delay']);
        }
    }
}
async function _0x56d462(_0x130217, _0x102230, _0x2e6eec) {
    _0x41677f['use'](_0x3d5ce3()), _0x41677f['use'](_0x46b222({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x768262['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2a9d58 = 0x0; _0x2a9d58 < _0x102230['length']; _0x2a9d58++) {
        _0x1bc04d(_0x130217['name'] + '\x20Task\x20' + (_0x2a9d58 + 0x1) + '\x20/\x20' + _0x102230['length'] + '\x20||\x20File:\x20' + _0x170675 + '\x20Proxies:\x20' + _0x5b3c9a);
        var _0x3201bf = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x431edf
                },
                {
                    'name': 'Product',
                    'value': '' + _0x102230[_0x2a9d58]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x102230[_0x2a9d58]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x768262['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x768262['version']
                }
            ]
        }];
        const _0xdc039c = { 'embeds': _0x3201bf };
        await _0x2f2481(_0x102230, _0x2a9d58);
        if (_0x102230[_0x2a9d58]['Email'] == '' || _0x102230[_0x2a9d58]['Password'] == '' || _0x102230[_0x2a9d58]['FirstName'] == '' || _0x102230[_0x2a9d58]['LastName'] == '') {
            console['log'](_0x23ecd3() + '\x20[' + _0x130217['name'] + ']\x20Task\x20' + (_0x2a9d58 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x102230[_0x2a9d58]['Password'] == '' || _0x102230[_0x2a9d58]['Password'] == undefined) && (_0x102230[_0x2a9d58]['Password'] = 'ErehsaWonRaj1!');
        if (_0x768262['useRandomProxy'] = ![])
            var _0x2b6f41 = _0x2e6eec[_0x2a9d58]['split'](':');
        else
            var _0x11f41d = Math['round'](Math['random']() * (_0x2e6eec['length'] - 0x1)), _0x2b6f41 = _0x2e6eec[_0x11f41d]['split'](':');
        const _0x2933ee = await _0x41677f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2b6f41[0x0] + ':' + _0x2b6f41[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1bd2d0 = await _0x2933ee['newPage']();
            await _0x1bd2d0['authenticate']({
                'username': '' + _0x2b6f41[0x2],
                'password': '' + _0x2b6f41[0x3]
            }), console['log'](_0x23ecd3() + '\x20[' + _0x130217['name'] + ']\x20Task\x20' + (_0x2a9d58 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1bd2d0['setRequestInterception'](!![]), _0x1bd2d0['on']('request', _0x470394 => {
                _0x470394['resourceType']() === 'image' || _0x470394['resourceType']() === 'font' || _0x470394['resourceType']() === 'media' ? _0x470394['abort']() : _0x470394['continue']();
            }), await _0x1bd2d0['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x1bd2d0['goto']('' + _0x102230[_0x2a9d58]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x1bd2d0['waitForSelector']('#btnPdpAtb'), console['log'](_0x23ecd3() + '\x20[' + _0x130217['name'] + ']\x20Task\x20' + (_0x2a9d58 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x102230[_0x2a9d58]['Size']);
            const _0x17aaea = await _0x1bd2d0['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x4ef06d => {
                return _0x4ef06d['map'](_0x477922 => _0x477922['innerText']);
            }), _0x4486bb = await _0x1bd2d0['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x20ee87 = ![];
            if (_0x102230[_0x2a9d58]['Size'] == 'RANDOM') {
                var _0x48f344 = Math['round'](Math['random']() * (_0x4486bb['length'] - 0x1));
                await _0x4486bb[_0x48f344]['click']();
            } else
                for (var _0x55a996 = 0x0; _0x55a996 < _0x17aaea['length']; _0x55a996++) {
                    if (_0x17aaea[_0x55a996] != _0x102230[_0x2a9d58]['Size'])
                        continue;
                    try {
                        await _0x4486bb[_0x55a996]['click']();
                    } catch {
                        console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x130217['name'] + ']\x20Task\x20' + (_0x2a9d58 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x20ee87 = !![];
                    }
                }
            if (_0x20ee87)
                continue;
            await _0x2cffd7(0x578), await _0x1bd2d0['click']('#btnPdpAtb'), await _0x1bd2d0['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x2cffd7(0x3e8), console['log'](_0x23ecd3() + '\x20[' + _0x130217['name'] + ']\x20Task\x20' + (_0x2a9d58 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x1bd2d0['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x1bd2d0['waitForSelector']('#email'), await _0x1bd2d0['type']('#email', _0x102230[_0x2a9d58]['Email']), await _0x2cffd7(0x226), await _0x1bd2d0['click']('#guest-submit'), await _0x2cffd7(0x1b58), console['log'](_0x23ecd3() + '\x20[' + _0x130217['name'] + ']\x20Task\x20' + (_0x2a9d58 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1bd2d0['waitForSelector']('#firstname'), await _0x1bd2d0['type']('#firstname', _0x102230[_0x2a9d58]['FirstName'], 0x1f4), await _0x2cffd7(0x190), await _0x1bd2d0['waitForSelector']('#surname'), await _0x1bd2d0['type']('#surname', _0x102230[_0x2a9d58]['LastName'], 0x1f4), await _0x2cffd7(0x190), await _0x1bd2d0['waitForSelector']('#mobile'), await _0x1bd2d0['type']('#mobile', _0x102230[_0x2a9d58]['Phone'], 0x1f4), await _0x2cffd7(0x190), await _0x1bd2d0['click']('#enterManualDiv'), await _0x2cffd7(0x5dc), await _0x1bd2d0['waitForSelector']('#address1'), await _0x1bd2d0['type']('#address1', _0x102230[_0x2a9d58]['Address1'] + '\x20' + _0x102230[_0x2a9d58]['HouseNumber'], 0x226), await _0x2cffd7(0x384), await _0x1bd2d0['waitForSelector']('#address2'), await _0x1bd2d0['type']('#address2', '' + _0x102230[_0x2a9d58]['Address2'], 0x226), await _0x2cffd7(0x320);
            const _0x2330b7 = await _0x1bd2d0['$$eval']('#countryselect_view3\x20>\x20option', _0x4c6e51 => {
                return _0x4c6e51['map'](_0x2b5d42 => _0x2b5d42['value']);
            });
            var _0x2fd965;
            for (var _0x21cf65 = 0x0; _0x21cf65 < _0x2330b7['length']; _0x21cf65++) {
                if (_0x2330b7[_0x21cf65]['startsWith']('' + _0x102230[_0x2a9d58]['Country'])) {
                    _0x2fd965 = _0x2330b7[_0x21cf65];
                    break;
                }
                continue;
            }
            await _0x1bd2d0['select']('#countryselect_view3', '' + _0x2fd965), await _0x1bd2d0['waitForSelector']('#address4'), await _0x1bd2d0['type']('#address4', '' + _0x102230[_0x2a9d58]['City'], 0x1f4), await _0x2cffd7(0x384), await _0x1bd2d0['waitForSelector']('#postcode'), await _0x1bd2d0['type']('#postcode', '' + _0x102230[_0x2a9d58]['Zip'], 0x1f4), await _0x2cffd7(0x4b0);
            const _0x5e1d7b = await _0x1bd2d0['url']();
            console['log'](_0x23ecd3() + '\x20[' + _0x130217['name'] + ']\x20Task\x20' + (_0x2a9d58 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x58105b = _0x5e1d7b['split']('?')[0x1], _0x1da0f = await _0x1bd2d0['$']('#co_address_submit');
            await _0x1da0f['evaluate'](_0x11a784 => _0x11a784['click']()), await _0x2cffd7(0x1388), await _0x1bd2d0['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x58105b), console['log'](_0x23ecd3() + '\x20[' + _0x130217['name'] + ']\x20Task\x20' + (_0x2a9d58 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x1bd2d0['waitForSelector']('#paymentbuttons'), await _0x2cffd7(0x1388), await _0x1bd2d0['click']('#paymentbuttons\x20>\x20div'), await _0x2cffd7(0x1c2), await _0x1bd2d0['waitForSelector']('#card-number'), await _0x1bd2d0['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x3b039d = await _0x1bd2d0['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x4ea73c = await _0x3b039d['contentFrame']();
            await _0x4ea73c['waitForSelector']('.InputContainer'), await _0x4ea73c['click']('.InputContainer\x20>\x20input'), await _0x2cffd7(0x578), await _0x1bd2d0['type']('#card-number', '' + _0x102230[_0x2a9d58]['CreditNumber']), await _0x2cffd7(0xfa), await _0x1bd2d0['type']('#card-expiry', '' + _0x102230[_0x2a9d58]['ExpiryDate']), await _0x2cffd7(0xfa), await _0x1bd2d0['type']('#card-cvc', '' + _0x102230[_0x2a9d58]['CVV']), await _0x2cffd7(0x7d0), await _0x1bd2d0['click']('#card-button'), console['log'](_0x23ecd3() + '\x20[' + _0x130217['name'] + ']\x20Task\x20' + (_0x2a9d58 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x1bd2d0['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x538f61['green'](_0x23ecd3() + '\x20[' + _0x130217['name'] + ']\x20Task\x20' + (_0x2a9d58 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x237f55(_0x1a3f9f, _0xdc039c);
            } catch {
                console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x130217['name'] + ']\x20Task\x20' + (_0x2a9d58 + 0x1) + '\x20:\x203DS\x20Failed')), _0x3201bf[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x3201bf[0x0]['description'] = '3DS\x20Failed', await _0x237f55(_0x3eaa01, _0xdc039c);
            }
        } catch (_0x3e1ee9) {
            console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x130217['name'] + ']\x20Task\x20' + (_0x2a9d58 + 0x1) + '\x20:\x20' + _0x3e1ee9)), _0x3201bf[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x3201bf[0x0]['description'] = '' + _0x3e1ee9, await _0x237f55(_0x3eaa01, _0xdc039c);
        } finally {
            _0x2933ee && _0x2933ee['close']();
            if (_0x2a9d58 + 0x1 == _0x102230['length']) {
                console['log'](_0x538f61['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x2cffd7(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x768262['AfewDelay'] + '\x20ms'), await _0x2cffd7(_0x768262['AfewDelay']);
        }
    }
}
async function _0xb4f768(_0x28663b, _0x15b5ac, _0x1eab64, _0x4941df, _0x391f56) {
    var _0x76ee, _0x27f042 = {}, _0x53276b = [], _0x53403e = {}, _0x53d154 = [
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
    !_0x4941df && (_0x4941df = {});
    if (_0x15b5ac != 'ver') {
        _0x1bc04d(_0x1eab64['name'] + '\x20Task\x20' + (_0x28663b + 0x1) + '\x20/\x20' + _0x4941df['length'] + '\x20||\x20File:\x20' + _0x170675 + '\x20Proxies:\x20' + _0x5b3c9a), await _0x2f2481(_0x4941df, _0x28663b), _0x53276b = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x431edf
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4941df[_0x28663b]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x768262['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1773f1
                }
            ]
        }], _0x53403e = { 'embeds': _0x53276b }, _0x27f042 = _0x1eab64['data'];
        _0x15b5ac == 'exp' ? _0x27f042['data']['attributes']['email'] = '' + _0x4941df[_0x28663b]['FirstName'] + _0x4941df[_0x28663b]['LastName'] + _0x768262['catchall'] : _0x27f042['data']['attributes']['email'] = '' + _0x4941df[_0x28663b]['Email'];
        if (_0x4941df[_0x28663b]['Size'] == 'RANDOM') {
        }
        _0x27f042['data']['attributes']['properties']['$first_name'] = '' + _0x4941df[_0x28663b]['FirstName'], _0x27f042['data']['attributes']['properties']['$last_name'] = '' + _0x4941df[_0x28663b]['LastName'], _0x27f042['data']['attributes']['properties']['$address1'] = _0x4941df[_0x28663b]['Address1'] + '\x20' + _0x4941df[_0x28663b]['Address2'] + '\x20' + _0x4941df[_0x28663b]['HouseNumber'], _0x27f042['data']['attributes']['properties']['$zip'] = '' + _0x4941df[_0x28663b]['Zip'], _0x27f042['data']['attributes']['properties']['$city'] = '' + _0x4941df[_0x28663b]['City'], _0x27f042['data']['attributes']['properties']['$country'] = '' + _0x4941df[_0x28663b]['Country'], _0x27f042['data']['attributes']['properties']['Size'] = '' + _0x4941df[_0x28663b]['Size'], _0x27f042['data']['attributes']['properties']['$phone_number'] = '' + _0x4941df[_0x28663b]['Phone'], _0x27f042['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4941df[_0x28663b]['Follower'];
    }
    if (_0x768262['useRandomProxy'] = ![])
        var _0x4b795 = _0x391f56[_0x28663b]['split'](':');
    else
        var _0x1d8353 = Math['round'](Math['random']() * (_0x391f56['length'] - 0x1)), _0x4b795 = _0x391f56[_0x1d8353]['split'](':');
    var _0x348942 = {
        'jar': _0x12ea3c,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x1eab64['url'],
        'headers': _0x1eab64['headers'],
        'body': JSON['stringify'](_0x27f042),
        'proxy': 'http://' + _0x4b795[0x2] + ':' + _0x4b795[0x3] + '@' + _0x4b795[0x0] + ':' + _0x4b795[0x1]
    };
    return _0x15b5ac != 'ver' && (_0x348942['url'] = _0x1eab64['url'], _0x348942['headers'] = _0x1eab64['headers']), _0x15b5ac == 'ver' && (_0x348942['method'] = 'GET'), new Promise(function (_0x2afb07, _0x3272d4) {
        callback = async (_0x415221, _0x32a4c5, _0x409e17) => {
            if (!_0x415221 && _0x32a4c5['statusCode'] == 0xca || !_0x415221 && _0x32a4c5['statusCode'] == 0xc8) {
                if (_0x15b5ac != 'ver') {
                    var _0x63a7ff = await _0x26ea6c(_0x4941df[_0x28663b], _0x1eab64, 'dev', ![]), _0x5da85e = await _0x26ea6c(_0x4941df[_0x28663b], _0x1eab64, 'pub', ![]);
                    const _0x4c66b0 = {
                        'succesDEVMSG': { 'embeds': [_0x63a7ff] },
                        'succesPUBMSG': { 'embeds': [_0x5da85e] }
                    };
                    if (_0x768262['webhook'] != undefined && _0x768262['webhook'] != '')
                        try {
                            await _0x237f55(_0x768262['webhook'], _0x4c66b0['succesDEVMSG']);
                        } catch {
                        }
                    await _0x2cffd7(0xc8), await _0x237f55(_0x1a3f9f, _0x4c66b0['succesDEVMSG']), await _0x2cffd7(0xc8);
                    try {
                        await _0x237f55(_0x143420, _0x4c66b0['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x2afb07(console['log'](_0x538f61['green'](_0x23ecd3() + '\x20[' + _0x1eab64['name'] + ']\x20Task\x20' + (_0x28663b + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x15b5ac != 'ver') {
                    var _0x53ebfa = '' + _0x415221, _0x30e04c = await _0x26ea6c(_0x4941df[_0x28663b], _0x1eab64, 'dev', !![], _0x53ebfa), _0x56805c = {};
                    _0x56805c['errorDEV'] = { 'embeds': [_0x30e04c] }, _0x768262['webhook'] != undefined && _0x768262['webhook'] != '' && await _0x237f55(_0x768262['webhook'], _0x56805c['errorDEV']), await _0x237f55(_0x3eaa01, _0x56805c['errorDEV']);
                }
                _0x3272d4(console['log'](_0x23ecd3() + '\x20[' + _0x1eab64['name'] + ']\x20Task\x20' + (_0x28663b + 0x1) + ':\x20' + _0x415221));
            }
        };
        try {
            _0x15b5ac != 'ver' && console['log'](_0x23ecd3() + '\x20[' + _0x1eab64['name'] + ']\x20Task\x20' + (_0x28663b + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x27f042['data']['attributes']['email']), _0x191a2b(_0x348942, callback);
        } catch (_0x4a4ad3) {
            console['log'](_0x23ecd3() + '\x20Task\x20' + (_0x28663b + 0x1) + ':\x20' + _0x4a4ad3);
        }
    });
}
;
async function _0x4852dd() {
    await _0x5ee0b5(), console['clear']();
    if (_0x1773f1 != 'devkey') {
        let _0x392c06 = await _0x4ccc7f['autoUpdate']();
        if (_0x392c06 === 'yes')
            return _0x3b0800('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x390649 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x2cffd7(0x2710);
        ;
    }
    await _0x5f2d6f(_0x390649);
    if (_0x130274 === ![])
        return console['log']('Closing\x20Browser'), await _0x2cffd7(0xbb8);
    else
        try {
            var _0x495582 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x431edf
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x1773f1
                    }
                ]
            }];
            const _0x2b9b85 = { 'embeds': _0x495582 };
            await _0x237f55(_0x31646e, _0x2b9b85);
            async function _0x2c6f80() {
                _0x1bc04d('JRaffles\x20' + _0x1773f1), console['clear'](), console['log']('Welcome\x20to\x20' + _0x538f61['cyan']('JRaffles();') + '\x20' + _0x1773f1), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x12f6be = 0x0; _0x12f6be < _0x3cb1eb['length']; _0x12f6be++) {
                    if (_0x3cb1eb[_0x12f6be]['name'] === 'Reload\x20Settings' || _0x3cb1eb[_0x12f6be]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x12f6be + ')\x20[' + _0x3cb1eb[_0x12f6be]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x3cb1eb['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x3cb1eb['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x216ac2();
                if (taskModule > _0x3cb1eb['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x2cffd7(0x3e8), _0x2c6f80();
                if (_0x3cb1eb[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x331c06(_0x3cb1eb[taskModule]['modules']);
                    var _0x36671e = _0x3cb1eb[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x1f48a6 = await _0x542597(), _0x1e48a4 = await _0x3ca36f();
                    if (_0x1e48a4[0x0]['Url'] == '' || _0x1e48a4[0x0]['Url'] == undefined) {
                        await _0x4327ba(_0x1f48a6);
                        var _0x22c02f = await _0x31f8b1();
                        return await afewFunction(_0x1ac062[_0x22c02f], 'nor', _0x36671e, _0x1e48a4, _0x1f48a6), _0x2c6f80();
                    }
                    return await afewFunction(_0x1e48a4[0x0]['Url'], 'nor', _0x36671e, _0x1e48a4, _0x1f48a6), _0x2c6f80();
                } else {
                    if (_0x3cb1eb[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x331c06(_0x3cb1eb[taskModule]['modules']);
                        var _0x36671e = _0x3cb1eb[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x1f48a6 = await _0x542597(), _0x5846e9 = await _0x3ca36f();
                            console['log']('Starting\x20' + _0x5846e9['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x1b07bc = 0x0; _0x1b07bc < _0x5846e9['length']; _0x1b07bc++) {
                                console['log'](_0x23ecd3() + '\x20[' + _0x36671e['name'] + ']\x20Task\x20' + (_0x1b07bc + 0x1) + ':\x20Getting\x20Session'), await _0x483a42(_0x1b07bc, 'nor', _0x36671e, _0x5846e9, _0x1f48a6), console['log'](_0x23ecd3() + '\x20[' + _0x36671e['name'] + ']\x20Sleeping\x20for\x20' + _0x768262['MahaDelay'] + '\x20ms'), await _0x2cffd7(_0x768262['MahaDelay']);
                            }
                            ;
                            return _0x2c6f80();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x1f48a6 = await _0x542597();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x59792b(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x1b07bc = 0x0; _0x1b07bc < links['length']; _0x1b07bc++) {
                                    _0x36671e['url'] = links[_0x1b07bc], console['log'](_0x23ecd3() + '\x20[' + _0x36671e['name'] + ']\x20Task\x20' + (_0x1b07bc + 0x1) + ':\x20Getting\x20Session'), await _0x483a42(_0x1b07bc, 'ver', _0x36671e, _0x5846e9, _0x1f48a6), console['log'](_0x23ecd3() + '\x20[' + _0x36671e['name'] + ']\x20Sleeping\x20for\x20' + _0x768262['verificationDelay'] + '\x20ms'), await _0x2cffd7(_0x768262['verificationDelay']);
                                }
                                ;
                                return _0x2c6f80();
                            }
                        }
                    } else {
                        if (_0x3cb1eb[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x331c06(_0x3cb1eb[taskModule]['modules']);
                            var _0x36671e = _0x3cb1eb[taskModule]['modules'][taskFunction], _0x1f48a6 = await _0x542597(), _0x47c070 = await _0x3ca36f();
                            return await _0x1f3e7f(_0x47c070, _0x1f48a6, _0x36671e), await _0x2cffd7(0x1388), _0x2c6f80();
                        } else {
                            if (_0x3cb1eb[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x331c06(_0x3cb1eb[taskModule]['modules']);
                                var _0x36671e = _0x3cb1eb[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x1f48a6 = await _0x542597(), _0x4523ce = await _0x3ca36f();
                                    console['log']('Starting\x20' + _0x538f61['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x1b07bc = 0x0; _0x1b07bc < _0x4523ce['length']; _0x1b07bc++) {
                                        console['log'](_0x23ecd3() + '\x20[' + _0x36671e['name'] + ']\x20Task\x20' + (_0x1b07bc + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0xb4f768(_0x1b07bc, 'nor', _0x36671e, _0x4523ce, _0x1f48a6);
                                        } catch (_0x581ba7) {
                                            console['log'](_0x538f61['red'](_0x23ecd3() + '\x20[' + _0x36671e['name'] + ']\x20Task\x20' + (_0x1b07bc + 0x1) + ':\x20Task\x20failed\x20' + _0x581ba7));
                                        }
                                        console['log'](_0x23ecd3() + '\x20[' + _0x36671e['name'] + ']\x20Sleeping\x20for\x20' + _0x768262['delay'] + '\x20ms'), await _0x2cffd7(_0x768262['delay']);
                                    }
                                    return _0x2c6f80();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x1f48a6 = await _0x542597();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x59792b(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x1b07bc = 0x0; _0x1b07bc < links['length']; _0x1b07bc++) {
                                            try {
                                                _0x36671e['url'] = links[_0x1b07bc], console['log'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Task\x20' + (_0x1b07bc + 0x1) + ':\x20Getting\x20Session'), await _0xb4f768(_0x1b07bc, 'ver', _0x36671e, null, _0x1f48a6), console['log'](_0x23ecd3() + '\x20[' + _0x3cb1eb[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x768262['verificationDelay'] + '\x20ms'), await _0x2cffd7(_0x768262['verificationDelay']);
                                            } catch (_0x4b88c0) {
                                                console['log'](_0x4b88c0), await _0x2cffd7(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x2c6f80();
                                    }
                                }
                                ;
                            } else {
                                if (_0x3cb1eb[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x331c06(_0x3cb1eb[taskModule]['modules']);
                                    var _0x36671e = _0x3cb1eb[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x22c4ab('https://bouncewear.com/nl/account/register', _0x36671e);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x3cb1eb[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x331c06(_0x3cb1eb[taskModule]['modules']);
                                        var _0x36671e = _0x3cb1eb[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x1f48a6 = await _0x542597(), _0x48c802 = await _0x3ca36f();
                                            return await _0x5a9586('https://patta.nl/account/register', _0x36671e, _0x48c802, _0x1f48a6), _0x2c6f80();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x1f48a6 = await _0x542597(), _0x48c802 = await _0x3ca36f();
                                                return await _0x1e5114('', _0x36671e, _0x48c802, _0x1f48a6), _0x2c6f80();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x3cb1eb[taskModule]['name'] == 'SLAMJAM')
                                            return console['log']('inalid\x20selection'), _0x2c6f80();
                                        else {
                                            if (_0x3cb1eb[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x331c06(_0x3cb1eb[taskModule]['modules']);
                                                var _0x36671e = _0x3cb1eb[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x1f48a6 = await _0x542597(), _0x1bfb79 = await _0x3ca36f();
                                                    return await _0x5921d4('https://www.kickz.com/nl/login/', _0x36671e, _0x1bfb79, _0x1f48a6), _0x2c6f80();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x1f48a6 = await _0x542597(), _0x1bfb79 = await _0x3ca36f();
                                                        return await _0x185325(_0x36671e, _0x1bfb79, _0x1f48a6), _0x2c6f80();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x3cb1eb[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x331c06(_0x3cb1eb[taskModule]['modules']);
                                                    var _0x36671e = _0x3cb1eb[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x1f48a6 = await _0x542597(), _0x5360bc = await _0x3ca36f();
                                                        return await _0x4dba09(_0x36671e, _0x5360bc, _0x1f48a6), _0x2c6f80();
                                                    }
                                                } else {
                                                    if (_0x3cb1eb[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x2cffd7(0x3e8), _0x2c6f80();
                                                    else {
                                                        if (_0x3cb1eb[taskModule]['name'] == 'Change\x20Settings') {
                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                            var _0x136739 = 0x0;
                                                            for (const _0x5c7bb5 in _0x768262) {
                                                                console['log']('(' + _0x136739 + ')\x20' + _0x5c7bb5 + '\x20:\x20' + _0x768262[_0x5c7bb5]), _0x136739++;
                                                            }
                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x136739 + ')\x20Return\x20to\x20Main\x20Menu');
                                                            var _0x13dc6b = await _0x377518();
                                                            if (_0x13dc6b == _0x136739)
                                                                return _0x2c6f80();
                                                            console['clear'];
                                                            var _0x4038d3 = 0x0;
                                                            for (var _0xaad7b9 in _0x768262) {
                                                                if (_0x13dc6b == _0x4038d3) {
                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0xaad7b9 + '\x20:'), _0x768262[_0xaad7b9] = await _0x34b798(), _0x5a7d6f['writeFileSync']('../settings.json', JSON['stringify'](_0x768262));
                                                                    break;
                                                                } else
                                                                    _0x4038d3++;
                                                            }
                                                            return console['log']('Settings\x20Saved!'), await _0x2cffd7(0xbb8), _0x2c6f80();
                                                        } else {
                                                            if (_0x3cb1eb[taskModule]['name'] == 'Reload\x20Settings')
                                                                return console['log']('Reloading\x20settings'), await _0x5ee0b5(), _0x2c6f80();
                                                            else {
                                                                if (taskModule == 0x45) {
                                                                    _0x3cb1eb[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                    var _0x39e38e = await _0x10d316();
                                                                    _0x39e38e == 'ModuleVoorDeBoys' ? (await _0x4327ba(), await _0x31f8b1(), await afewFunction(_0x1ac062[_0x22c02f], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x2cffd7(0xbb8));
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
            await _0x2c6f80();
        } catch (_0x3c2d51) {
            return console['log'](_0x3c2d51), await _0x2cffd7(0x3a98);
        }
}
;
_0x1bc04d('JRaffles\x20' + _0x1773f1), _0x5ee0b5();
try {
    _0x4852dd();
} catch (_0x4076b0) {
    var _0x4512e2 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x431edf
            },
            {
                'name': 'Version',
                'value': '' + _0x1773f1
            },
            {
                'name': 'Error',
                'value': '' + _0x4076b0
            }
        ]
    }];
    const _0x4a651b = { 'embeds': _0x4512e2 };
    _0x237f55(_0x3eaa01, _0x4a651b);
}