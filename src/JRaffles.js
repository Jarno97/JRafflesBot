const { EmbedBuilder: _0x1a291c } = require('discord.js');
var _0x54a12c = require('exe');
const { execFile: _0x56ab97 } = require('child_process'), _0x491b02 = require('puppeteer-extra'), _0x500fb3 = require('puppeteer-extra-plugin-recaptcha'), _0x5b4fc0 = require('puppeteer-extra-plugin-stealth'), _0x46322d = require('chalk'), _0x4b46b5 = require('node-bash-title'), _0x147bd5 = require('fs'), _0x5c2df7 = require('axios'), _0x53ad1c = require('papaparse');
var _0x1054ba = require('random-name');
const _0x27b086 = require('request');
var _0x48e1f5 = require('prompt');
const _0x9b0eab = _0x27b086['jar']();
var _0x20363f = {};
const _0x1f7c40 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x161760 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x5b756d = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x59a9c6 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x2f8532 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn';
var _0x5b0188 = 'https://discord.com/api/webhooks/', _0x11e1f1 = '' + _0x5b0188 + _0x5b756d, _0x4cce15 = '' + _0x5b0188 + _0x59a9c6, _0x11a452 = '' + _0x5b0188 + _0x1f7c40, _0x31debd = '' + _0x5b0188 + _0x161760, _0x3f49d0 = '' + _0x5b0188 + _0x2f8532;
const _0x51e523 = JSON['parse'](_0x147bd5['readFileSync']('../package.json', 'utf-8')), _0x316d08 = _0x51e523['version'];
var _0xad8e8d, _0x2db857, _0x9fe88a, _0x4329b0, _0xf6e4e4, _0x9a6f24, _0x2cd057;
const _0x116fbb = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x4ee7c8 = ![];
const _0x4c91e4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x2ffaf7 = '0123456789';
var _0x41131a = _0x4c91e4['split']('');
const _0x3536d1 = require('auto-git-update'), { PageEmittedEvents: _0x599b67 } = require('puppeteer'), { getRandomValues: _0x354ea9 } = require('crypto'), { resolve: _0x5a30e1 } = require('path'), _0x553a49 = {
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
}, _0x58115b = new _0x3536d1(_0x553a49);
async function _0xcbe983() {
    _0xf6e4e4 = _0x147bd5['readdirSync']('../proxies'), _0x4329b0 = _0x147bd5['readdirSync']('../tasks'), _0x20363f = JSON['parse'](_0x147bd5['readFileSync']('../settings.json', 'utf-8')), !_0x20363f['delay'] && (_0x20363f['delay'] = 0x2710, _0x147bd5['writeFileSync']('../settings.json', JSON['stringify'](_0x20363f))), !_0x20363f['captchaKey'] && (_0x20363f['captchaKey'] = '', _0x147bd5['writeFileSync']('../settings.json', JSON['stringify'](_0x20363f))), !_0x20363f['useRandomProxy'] && (_0x20363f['useRandomProxy'] = !![], _0x147bd5['writeFileSync']('../settings.json', JSON['stringify'](_0x20363f))), !_0x20363f['webhook'] && (_0x20363f['webhook'] = '', _0x147bd5['writeFileSync']('../settings.json', JSON['stringify'](_0x20363f))), _0x5b0188 = _0x20363f['webhook'], _0x9a6f24 = _0x20363f['licenseKey'];
}
let _0x1a3377, _0x5a594b = [], _0x2753fa;
const _0x13c894 = _0x2f8de8 => new Promise(_0x41b8f9 => setTimeout(_0x41b8f9, _0x2f8de8));
function _0x236dab(_0x402328, _0x3fa988) {
    return Math['floor'](Math['random']() * (_0x3fa988 - _0x402328 + 0x1) + _0x402328);
}
async function _0x3e9ad7(_0x8423bb) {
    return _0x5c2df7['get']('https://api.hyper.co/v4/licenses/' + _0x8423bb, { 'headers': { 'Authorization': 'Bearer\x20' + _0x116fbb } })['then'](_0x54f7c0 => _0x54f7c0['data'])['catch'](() => null);
}
;
async function _0x39d378(_0x135f5a) {
    console['clear']();
    if (_0x135f5a == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x19f840 = await _0x48e1f5['get']('License');
        if (_0x19f840['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x13c894(0xbb8), _0x39d378(_0x135f5a);
        _0x135f5a = _0x19f840['License'], _0x20363f['licenseKey'] = _0x135f5a, _0x9a6f24 = _0x135f5a, _0x147bd5['writeFileSync']('../settings.json', JSON['stringify'](_0x20363f));
    }
    console['log']('Checking\x20license\x20' + _0x9a6f24 + '...'), await _0x13c894(0x5dc);
    const _0x1a2acd = await _0x3e9ad7(_0x135f5a);
    _0x2cd057 = JSON['stringify'](_0x1a2acd['user']['username'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x1a2acd)
        return console['log']('License\x20not\x20found');
    if (!_0x1a2acd['user'])
        return console['log']('License\x20not\x20bound');
    return _0x1a2acd['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x4ee7c8 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x4ee7c8 = ![]);
}
async function _0x5e0813() {
    var _0x5c2001 = await _0x48e1f5['get']('Module');
    return console['clear'](), _0x5c2001['Module'];
}
;
async function _0xc9ce8c() {
    var _0x3fb8a1 = await _0x48e1f5['get']('Setting');
    return console['clear'](), _0x3fb8a1['Setting'];
}
async function _0x2062b9() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x25e5fd = 0x0; _0x25e5fd < _0x4329b0['length']; _0x25e5fd++) {
        console['log']('\x20(' + _0x25e5fd + ')\x20' + _0x4329b0[_0x25e5fd]);
    }
    console['log']('');
    var _0x3d3c49 = await _0x48e1f5['get']('Task');
    if (_0x3d3c49['Task'] > _0x4329b0['length'] - 0x1 || isNaN(_0x3d3c49['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x13c894(0x3e8), _0x2062b9();
    var _0x5dbbef = _0x147bd5['readFileSync']('../tasks/' + _0x4329b0[_0x3d3c49['Task']], 'utf-8');
    return _0x9fe88a = _0x53ad1c['parse'](_0x5dbbef, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x46322d['blue'](_0x4329b0[_0x3d3c49['Task']])), _0xad8e8d = _0x4329b0[_0x3d3c49['Task']], _0x9fe88a;
}
async function _0x46cf47() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x32f993 = 0x0; _0x32f993 < _0xf6e4e4['length']; _0x32f993++) {
        console['log']('\x20(' + _0x32f993 + ')\x20' + _0xf6e4e4[_0x32f993]);
    }
    console['log']('');
    var _0x4be780 = await _0x48e1f5['get']('Proxies');
    if (_0x4be780['Proxies'] > _0xf6e4e4['length'] - 0x1 || isNaN(_0x4be780['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x13c894(0x3e8), _0x46cf47();
    var _0x5966a1 = _0x147bd5['readFileSync']('../proxies/' + _0xf6e4e4[_0x4be780['Proxies']], 'utf-8')['split']('\x0a');
    let _0x451763 = _0x5966a1['map']((_0x5b2e82, _0x1494f7) => {
        sanatizeProxy = _0x5b2e82['replace']('\x0d', '');
        if (_0x5966a1[_0x1494f7 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2db857 = _0xf6e4e4[_0x4be780['Proxies']], console['clear'](), _0x451763;
}
async function _0x33502f() {
    var _0x1d23c3 = await _0x48e1f5['get']('Value');
    return console['clear'](), _0x1d23c3['Value'];
}
async function _0x471d1e(_0x614a7) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x2c8a0f = 0x0; _0x2c8a0f < _0x614a7['length']; _0x2c8a0f++) {
        console['log']('\x20(' + _0x2c8a0f + ')\x20[' + _0x614a7[_0x2c8a0f]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x5a421c = await _0x48e1f5['get']('Module');
    return _0x5a421c['Module'];
}
async function _0x5cda76() {
    var _0x976c5b = await _0x48e1f5['get']('Password');
    return console['clear'](), _0x976c5b['Password'];
}
;
async function _0x38a2e4() {
    var _0x3d938e = await _0x48e1f5['get']('Links');
    return _0x3d938e['Links'];
}
;
async function _0x3ebcfe() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x121aae = 0x0; _0x121aae < _0x5a594b['length']; _0x121aae++) {
        console['log']('\x20(' + _0x121aae + ')\x20' + _0x5a594b[_0x121aae]);
    }
    ;
    console['log']();
    let _0x27d1ed = await _0x48e1f5['get']('Product');
    return console['clear'](), _0x27d1ed['Product'];
}
;
function _0x599664() {
    var _0x3c3808 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x3c3808;
}
;
const _0x3d241d = [
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
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x2d3c9d(_0x5c5fca, _0x10cac4) {
    let _0x26f077 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x316d08 != 'devkey') {
        await _0x5c2df7['post'](_0x5c5fca, _0x10cac4, _0x26f077);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x17fd16(_0x257725, _0x44d58e, _0x177ec0, _0x3d79b8, _0xc09192) {
    if (!_0x3d79b8 && _0x177ec0 == 'dev') {
        var _0x25e2c8 = new _0x1a291c()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x44d58e['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x44d58e['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x257725['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x20363f['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x2cd057,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x257725['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x316d08,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x25e2c8['data'];
    } else {
        if (_0x3d79b8 && _0x177ec0 == 'dev') {
            var _0x25e2c8 = new _0x1a291c()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x44d58e['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x2cd057,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x44d58e['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x257725['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x20363f['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0xc09192,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x257725['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x316d08,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x25e2c8['data'];
        } else {
            if (_0x177ec0 == 'pub') {
                var _0x25e2c8 = new _0x1a291c()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x44d58e['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x44d58e['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x257725['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x20363f['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x257725['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x316d08,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x25e2c8['data'];
            } else {
                if (_0x177ec0 == 'acc') {
                    var _0x25e2c8 = new _0x1a291c()['setColor']('#282525')['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x44d58e['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x2cd057,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x44d58e['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x20363f['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x316d08,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x25e2c8['data'];
                }
            }
        }
    }
}
async function _0x1726ee(_0x39592a, _0x3c0086) {
    var _0x309586 = _0x39592a[_0x3c0086]['Address1']['split'](''), _0xf5d8ea = _0x39592a[_0x3c0086]['Address2']['split'](''), _0x4cf6d1 = _0x39592a[_0x3c0086]['Email']['split']('@');
    for (var _0x20612d = 0x0; _0x20612d < _0x309586['length']; _0x20612d++) {
        if (_0x309586[_0x20612d] == 'X') {
            var _0x2b42f1 = Math['round'](Math['random']() * (_0x4c91e4['length'] - 0x1));
            _0x309586[_0x20612d] = _0x41131a[_0x2b42f1];
        }
    }
    ;
    for (var _0x20612d = 0x0; _0x20612d < _0xf5d8ea['length']; _0x20612d++) {
        if (_0xf5d8ea[_0x20612d] == 'X') {
            var _0x2b42f1 = Math['round'](Math['random']() * (_0x4c91e4['length'] - 0x1));
            _0xf5d8ea[_0x20612d] = _0x41131a[_0x2b42f1];
        }
    }
    ;
    _0x39592a[_0x3c0086]['FirstName'] == 'RANDOM' && (_0x39592a[_0x3c0086]['FirstName'] = _0x1054ba['first']());
    _0x39592a[_0x3c0086]['LastName'] == 'RANDOM' && (_0x39592a[_0x3c0086]['LastName'] = _0x1054ba['last']());
    _0x4cf6d1[0x0] == 'RANDOM' ? _0x4cf6d1[0x0] = '' + _0x1054ba['first']() + _0x1054ba['last']() + '@' : _0x4cf6d1[0x0] = _0x4cf6d1[0x0] + '@';
    _0x39592a[_0x3c0086]['Phone'] == 'RANDOM' && (_0x39592a[_0x3c0086]['Phone'] = _0x236dab(0x3b9aca00, 0x2540be3ff));
    if (_0x39592a[_0x3c0086]['Follower'] == 'RANDOM') {
        var _0x224ec3 = _0x236dab(0x1, 0x270f);
        _0x39592a[_0x3c0086]['Follower'] = '' + _0x1054ba['first']() + _0x1054ba['last']() + _0x224ec3;
    }
    _0x39592a[_0x3c0086]['Email'] = _0x4cf6d1['join'](''), _0x39592a[_0x3c0086]['Address1'] = _0x309586['join'](''), _0x39592a[_0x3c0086]['Address2'] = _0xf5d8ea['join']('');
    return;
}
;
function _0x16adf4() {
    let _0x2805dd = proxyFile['split']('\x0a'), _0x573dd2 = _0x2805dd['map']((_0x41c475, _0x54f663) => {
        sanatizeProxy = _0x41c475['replace']('\x0d', '');
        if (_0x2805dd[_0x54f663 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x573dd2;
}
;
async function _0x3ca076(_0x506b57) {
    var _0x2a4352 = _0x506b57[0x1]['split'](':');
    const _0x1d44c9 = await _0x491b02['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x2a4352[0x0] + ':' + _0x2a4352[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x2e619f = await _0x1d44c9['newPage']();
        await _0x2e619f['authenticate']({
            'username': '' + _0x2a4352[0x2],
            'password': '' + _0x2a4352[0x3]
        }), console['log'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x2e619f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2e619f['setRequestInterception'](!![]), _0x2e619f['on']('request', _0x4c0593 => {
            _0x4c0593['resourceType']() === 'image' || _0x4c0593['resourceType']() === 'font' || _0x4c0593['resourceType']() === 'media' ? _0x4c0593['abort']() : _0x4c0593['continue']();
        }), await _0x2e619f['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x2e619f['waitForTimeout'](0xbb8), await _0x2e619f['waitForSelector']('.product-card');
        const _0x515065 = await _0x2e619f['$$eval']('a.product-card', _0x3badb8 => {
            return _0x3badb8['map'](_0x5f5d01 => _0x5f5d01['href']);
        });
        return _0x5a594b = _0x515065;
    } catch (_0x15242e) {
        console['log']('\x20' + _0x15242e);
    } finally {
        _0x1d44c9['close'](), console['clear']();
    }
}
;
async function _0x107245(_0x1947a9, _0x3ecaac, _0x1dd58a, _0x1d15e8, _0x5da8b5) {
    await _0x1726ee(_0x1d15e8, _0x1947a9);
    var _0x494667 = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x2cd057
            },
            {
                'name': 'Size',
                'value': '' + _0x1d15e8[_0x1947a9]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x20363f['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x316d08
            }
        ]
    }];
    const _0x1d270d = { 'embeds': _0x494667 };
    if (_0x20363f['useRandomProxy'] = ![])
        var _0x2d23f2 = _0x5da8b5[_0x1947a9]['split'](':');
    else
        var _0xfbfe7d = Math['round'](Math['random']() * (_0x5da8b5['length'] - 0x1)), _0x2d23f2 = _0x5da8b5[_0xfbfe7d]['split'](':');
    var _0x63d6f3 = _0x1dd58a['data'];
    _0x3ecaac == 'exp' ? _0x63d6f3['data']['attributes']['email'] = '' + _0x1d15e8[_0x1947a9]['FirstName'] + _0x1d15e8[_0x1947a9]['LastName'] + _0x20363f['catchall'] : _0x63d6f3['data']['attributes']['email'] = '' + _0x1d15e8[_0x1947a9]['Email'];
    _0x63d6f3['data']['attributes']['properties']['$first_name'] = '' + _0x1d15e8[_0x1947a9]['FirstName'], _0x63d6f3['data']['attributes']['properties']['$last_name'] = '' + _0x1d15e8[_0x1947a9]['LastName'], _0x63d6f3['data']['attributes']['properties']['$address1'] = _0x1d15e8[_0x1947a9]['Address1'] + '\x20' + _0x1d15e8[_0x1947a9]['Address2'], _0x63d6f3['data']['attributes']['properties']['$zip'] = '' + _0x1d15e8[_0x1947a9]['Zip'], _0x63d6f3['data']['attributes']['properties']['$city'] = '' + _0x1d15e8[_0x1947a9]['City'], _0x63d6f3['data']['attributes']['properties']['$country'] = '' + _0x1d15e8[_0x1947a9]['Country'], _0x63d6f3['data']['attributes']['properties']['Size'] = '' + _0x1d15e8[_0x1947a9]['Size'], _0x63d6f3['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x1d15e8[_0x1947a9]['Follower'];
    var _0x3c521d = {
        'jar': _0x9b0eab,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x1dd58a['url'],
        'headers': _0x1dd58a['headers'],
        'body': JSON['stringify'](_0x63d6f3),
        'proxy': 'http://' + _0x2d23f2[0x2] + ':' + _0x2d23f2[0x3] + '@' + _0x2d23f2[0x0] + ':' + _0x2d23f2[0x1]
    };
    return _0x3ecaac === 'ver' && (_0x3c521d['method'] = 'GET'), new Promise(function (_0x3b99bb, _0x5531c1) {
        callback = async (_0x3cf68c, _0x5433eb, _0x11f4bc) => {
            if (!_0x3cf68c && _0x5433eb['statusCode'] == 0xca || !_0x3cf68c && _0x5433eb['statusCode'] == 0xc8) {
                if (_0x3ecaac !== 'ver') {
                    var _0x3688e1 = await _0x17fd16(_0x1d15e8[_0x1947a9], _0x1dd58a, 'dev', ![]), _0x2427b4 = await _0x17fd16(_0x1d15e8[_0x1947a9], _0x1dd58a, 'pub', ![]);
                    const _0x598a20 = {
                        'succesDEVMSG': { 'embeds': [_0x3688e1] },
                        'succesPUBMSG': { 'embeds': [_0x2427b4] }
                    };
                    if (_0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '')
                        try {
                            await _0x2d3c9d(_0x20363f['webhook'], _0x598a20['succesDEVMSG']);
                        } catch {
                        }
                    await _0x13c894(0xc8), await _0x2d3c9d(_0x11a452, _0x598a20['succesDEVMSG']), await _0x13c894(0xc8);
                    try {
                        await _0x2d3c9d(_0x3f49d0, _0x598a20['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x3b99bb(console['log'](_0x46322d['green'](_0x599664() + '\x20[' + _0x1dd58a['name'] + ']\x20Task\x20' + (_0x1947a9 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x3ecaac != 'ver') {
                    var _0x2c6874 = '' + _0x3cf68c, _0xbb69ea = await _0x17fd16(_0x1d15e8[_0x1947a9], _0x1dd58a, 'dev', !![], _0x2c6874), _0x23215b = {};
                    _0x23215b['errorDEV'] = { 'embeds': [_0xbb69ea] }, _0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '' && await _0x2d3c9d(_0x20363f['webhook'], _0x23215b['errorDEV']), await _0x2d3c9d(_0x31debd, _0x23215b['errorDEV']);
                }
                _0x5531c1(console['log'](_0x599664() + '\x20[' + _0x1dd58a['name'] + ']\x20Task\x20' + (_0x1947a9 + 0x1) + ':\x20' + _0x3cf68c));
            }
        };
        try {
            _0x3ecaac === 'ver' ? console['log'](_0x599664() + '\x20[' + _0x1dd58a['name'] + ']\x20Task\x20' + (_0x1947a9 + 0x1) + ':\x20Verifying.') : console['log'](_0x599664() + '\x20[' + _0x1dd58a['name'] + ']\x20Task\x20' + (_0x1947a9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x63d6f3['data']['attributes']['email']), _0x27b086(_0x3c521d, callback);
        } catch (_0x330f68) {
            console['log'](_0x599664() + '\x20Task\x20' + (_0x1947a9 + 0x1) + ':\x20' + _0x330f68);
        }
    });
}
;
async function _0x5f3ea9(_0x3a920d, _0x408e72, _0x5f59e9) {
    _0x491b02['use'](_0x5b4fc0()), _0x491b02['use'](_0x500fb3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x20363f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x233e07 = 0x0; _0x233e07 < _0x3a920d['length']; _0x233e07++) {
        var _0x27545d, _0x576a03 = '', _0x7574ac = 0x0, _0x2dfc2c = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2cd057
                },
                {
                    'name': 'Product',
                    'value': '' + _0x3a920d[_0x233e07]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3a920d[_0x233e07]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x20363f['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x316d08
                }
            ]
        }], _0x337cb4 = await _0x17fd16(_0x3a920d[_0x233e07], _0x5f59e9, 'dev', ![]), _0x5054fd = await _0x17fd16(_0x3a920d[_0x233e07], _0x5f59e9, 'pub', ![]);
        const _0x1787c6 = {
            'succesDEVMSG': { 'embeds': [_0x337cb4] },
            'succesPUBMSG': { 'embeds': [_0x5054fd] }
        }, _0x26454f = { 'embeds': _0x2dfc2c };
        await _0x1726ee(_0x3a920d, _0x233e07);
        if (_0x3a920d[_0x233e07]['Email'] == '' || _0x3a920d[_0x233e07]['FirstName'] == '' || _0x3a920d[_0x233e07]['LastName'] == '' || _0x3a920d[_0x233e07]['Country'] == '' || _0x3a920d[_0x233e07]['Size'] == '' || _0x3a920d[_0x233e07]['Address1'] == '' || _0x3a920d[_0x233e07]['Zip'] == '') {
            console['log'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3a920d[_0x233e07]['Email'] == '' || _0x3a920d[_0x233e07]['FirstName'] == '' || _0x3a920d[_0x233e07]['LastName'] == '' || _0x3a920d[_0x233e07]['Country'] == '' || _0x3a920d[_0x233e07]['Size'] == '' || _0x3a920d[_0x233e07]['Address1'] == '' || _0x3a920d[_0x233e07]['Zip'] == '' || _0x3a920d[_0x233e07]['Phone'] == '') {
            console['log'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x579b03 = '' + _0x3a920d[_0x233e07]['Url'];
        if (_0x20363f['useRandomProxy'] = ![])
            var _0x672d74 = _0x408e72[_0x233e07]['split'](':');
        else
            var _0x172787 = Math['round'](Math['random']() * (_0x408e72['length'] - 0x1)), _0x672d74 = _0x408e72[_0x172787]['split'](':');
        const _0x186cec = await _0x491b02['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x672d74[0x0] + ':' + _0x672d74[0x1]]
        });
        try {
            const _0x5e61be = await _0x186cec['newPage']();
            await _0x5e61be['authenticate']({
                'username': '' + _0x672d74[0x2],
                'password': '' + _0x672d74[0x3]
            }), console['log'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5e61be['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5e61be['setRequestInterception'](!![]), _0x5e61be['on']('request', _0x5234ea => {
                _0x5234ea['resourceType']() === 'image' || _0x5234ea['resourceType']() === 'font' || _0x5234ea['resourceType']() === 'media' ? _0x5234ea['abort']() : _0x5234ea['continue']();
            }), await _0x5e61be['goto'](_0x579b03), await _0x13c894(0xbb8), await _0x5e61be['waitForSelector']('.control__JhutY'), await _0x5e61be['click']('.control__JhutY'), await _0x13c894(0x1f4);
            if (_0x3a920d[_0x233e07]['Size'] != 'RANDOM')
                try {
                    const _0x255a89 = await _0x5e61be['$x']('//div[contains(text(),\x20\x27' + _0x3a920d[_0x233e07]['Size'] + '\x27)]');
                    await _0x255a89[0x0]['click']();
                } catch {
                    console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x3608b8 = await _0x5e61be['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x1b3e9a = Math['round'](Math['random']() * (_0x3608b8['length'] - 0x1));
                await _0x3608b8[_0x1b3e9a]['click']();
            }
            await _0x13c894(0x4b0);
            const _0xbe572d = await _0x5e61be['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0xbe572d[0x0]['click'](), await _0x5e61be['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5e61be['type']('input[name=\x22email\x22]', '' + _0x3a920d[_0x233e07]['Email']), await _0x13c894(0x640), await _0x5e61be['type']('input[name=\x22phone\x22]', '' + _0x3a920d[_0x233e07]['Phone']), await _0x13c894(0x4b0), await _0x5e61be['click']('button.btn.continue-button__1RtsS'), await _0x13c894(0x4b0);
            try {
                await _0x5e61be['type']('input[name=\x22firstName\x22]', '' + _0x3a920d[_0x233e07]['FirstName']), await _0x13c894(0x258);
            } catch {
                const _0x46630d = await _0x5e61be['$$eval']('.invalid-feedback\x20>\x20div', _0x45d70b => {
                    return _0x45d70b['map'](_0x3e0395 => _0x3e0395['innerText']);
                });
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x20' + _0x46630d));
                continue;
            }
            await _0x5e61be['type']('input[name=\x22lastName\x22]', '' + _0x3a920d[_0x233e07]['LastName']), await _0x13c894(0xc8), await _0x5e61be['type']('input[name=\x22instagramUsername\x22]', '' + _0x3a920d[_0x233e07]['Follower']), await _0x13c894(0x4b0), await _0x5e61be['click']('button.btn.continue-button__1RtsS'), await _0x13c894(0x3e8), console['log'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5e61be['select']('select[name=\x22country\x22]', '' + _0x3a920d[_0x233e07]['Country']), await _0x13c894(0x2bc), await _0x5e61be['type']('input[name=\x22streetName\x22]', '' + _0x3a920d[_0x233e07]['Address1']), await _0x13c894(0x258), await _0x5e61be['type']('input[name=\x22houseNumber\x22]', _0x3a920d[_0x233e07]['HouseNumber'] + '\x20' + _0x3a920d[_0x233e07]['Address2']), await _0x13c894(0xc8), await _0x5e61be['type']('input[name=\x22postalCode\x22]', '' + _0x3a920d[_0x233e07]['Zip']), await _0x13c894(0x1f4), await _0x5e61be['type']('input[name=\x22city\x22]', '' + _0x3a920d[_0x233e07]['City']), await _0x13c894(0x4b0), await _0x5e61be['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x13c894(0x4b0), await _0x5e61be['click']('button.btn.continue-button__1RtsS'), await _0x13c894(0x4b0), console['log'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5e61be['solveRecaptchas'](), console['log'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x13c894(0xbb8), await _0x5e61be['click']('button.btn.continue-button__1RtsS'), await _0x13c894(0x1388), console['log'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5e61be['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5e61be['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x13c894(0x4b0), await _0x5e61be['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x3a920d[_0x233e07]['CardNumber']), await _0x13c894(0x320), await _0x5e61be['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5e61be['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x3a920d[_0x233e07]['ExpiryDate']), await _0x13c894(0x4b0), await _0x5e61be['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5e61be['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x3a920d[_0x233e07]['CVV']), await _0x13c894(0x226), await _0x5e61be['type']('input[name=\x22holderName\x22]', '' + _0x3a920d[_0x233e07]['NameOnCard']), await _0x13c894(0x226), await _0x5e61be['click']('button.adyen-checkout__button'), console['log'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5e61be['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x13c894(0xbb8);
            } catch (_0x1d4eb1) {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x203DS\x20Failed')), _0x27545d = '3DS\x20Error\x20' + _0x1d4eb1;
                var _0x382911 = await _0x17fd16(_0x3a920d[_0x233e07], _0x5f59e9, 'dev', !![], _0x27545d);
                _0x1787c6['errorDEV'] = { 'embeds': [_0x382911] };
                _0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '' && await _0x2d3c9d(_0x20363f['webhook'], _0x1787c6['errorDEV']);
                await _0x2d3c9d(_0x31debd, _0x1787c6['errorDEV']);
                continue;
            }
            console['log'](_0x46322d['green'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '')
                try {
                    await _0x2d3c9d(_0x20363f['webhook'], _0x1787c6['succesDEVMSG']);
                } catch {
                }
            await _0x13c894(0xc8), await _0x2d3c9d(_0x11a452, _0x1787c6['succesDEVMSG']), await _0x13c894(0xc8);
            try {
                await _0x2d3c9d(_0x3f49d0, _0x1787c6['succesPUBMSG']);
            } catch {
            }
        } catch (_0x1df646) {
            console['log'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x20' + _0x1df646), _0x27545d = '' + _0x1df646;
            var _0x382911 = await _0x17fd16(_0x3a920d[_0x233e07], _0x5f59e9, 'dev', !![], _0x27545d);
            _0x1787c6['errorDEV'] = { 'embeds': [_0x382911] }, _0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '' && await _0x2d3c9d(_0x20363f['webhook'], _0x1787c6['errorDEV']), await _0x2d3c9d(_0x31debd, _0x1787c6['errorDEV']), _0x576a03 = 'yes';
        } finally {
            _0x186cec['close']();
            if (_0x576a03 == 'yes' && _0x7574ac != 0x5) {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x5f59e9['name'] + ']\x20Task\x20' + (_0x233e07 + 0x1) + '\x20:\x20Retrying')), _0x233e07 = _0x233e07 - 0x1, _0x7574ac = _0x7574ac + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x20363f['footshopDelay'] + '\x20ms'), await _0x13c894(_0x20363f['footshopDelay']);
        }
    }
}
afewFunction = async (_0x293b3c, _0x3b06c6, _0x54402a, _0x342151, _0x5b376c) => {
    for (var _0x327ba7 = 0x0; _0x327ba7 < _0x342151['length']; _0x327ba7++) {
        var _0x3897c0, _0x1d8cae = '', _0x4953bb = 0x0;
        _0x342151[_0x327ba7]['Url'] = _0x293b3c, _0x4b46b5(_0x54402a['name'] + '\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20/\x20' + _0x342151['length'] + '\x20||\x20File:\x20' + _0xad8e8d + '\x20Proxies:\x20' + _0x2db857), await _0x1726ee(_0x342151, _0x327ba7);
        var _0x2d53c6 = await _0x17fd16(_0x342151[_0x327ba7], _0x54402a, 'dev', ![]), _0x592e11 = await _0x17fd16(_0x342151[_0x327ba7], _0x54402a, 'pub', ![]);
        const _0x5f1f16 = {
            'succesDEVMSG': { 'embeds': [_0x2d53c6] },
            'succesPUBMSG': { 'embeds': [_0x592e11] }
        };
        if (_0x342151[_0x327ba7]['Email'] == '' || _0x342151[_0x327ba7]['FirstName'] == '' || _0x342151[_0x327ba7]['LastName'] == '' || _0x342151[_0x327ba7]['Country'] == '' || _0x342151[_0x327ba7]['Size'] == '' || _0x342151[_0x327ba7]['Address1'] == '' || _0x342151[_0x327ba7]['Zip'] == '') {
            console['log'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x20363f['useRandomProxy'] = ![])
            var _0x5e4855 = _0x5b376c[_0x327ba7]['split'](':');
        else
            var _0x4150af = Math['round'](Math['random']() * (_0x5b376c['length'] - 0x1)), _0x5e4855 = _0x5b376c[_0x4150af]['split'](':');
        const _0xaddac7 = await _0x491b02['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5e4855[0x0] + ':' + _0x5e4855[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x23e12b = await _0xaddac7['newPage']();
            await _0x23e12b['setDefaultNavigationTimeout'](0x1d4c0), await _0x23e12b['authenticate']({
                'username': '' + _0x5e4855[0x2],
                'password': '' + _0x5e4855[0x3]
            }), console['log'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x23e12b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x23e12b['setRequestInterception'](!![]), _0x23e12b['on']('request', _0x38f224 => {
                _0x38f224['resourceType']() === 'image' || _0x38f224['resourceType']() === 'font' || _0x38f224['resourceType']() === 'media' ? _0x38f224['abort']() : _0x38f224['continue']();
            }), await _0x23e12b['goto'](_0x293b3c, { 'waitUntil': 'networkidle2' }), console['log'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x23e12b['waitForTimeout'](0xfa0), console['log'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x23e12b['waitForTimeout'](0x320);
            if (_0x342151[_0x327ba7]['Size'] == 'RANDOM') {
                console['log'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x830219 = await _0x23e12b['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x6f74b3 => {
                    return _0x6f74b3['map'](_0x26e455 => _0x26e455['href']);
                });
                var _0xfde051 = Math['round'](Math['random']() * (_0x830219['length'] - 0x1));
                await _0x23e12b['goto']('' + _0x830219[_0xfde051]);
            } else {
                console['log'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x342151[_0x327ba7]['Size']);
                try {
                    const _0x53725a = await _0x23e12b['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x342151[_0x327ba7]['Size'] + '\x22]\x20>\x20a', _0x3d1171 => {
                        return _0x3d1171['map'](_0xb7b612 => _0xb7b612['href']);
                    });
                    await _0x23e12b['goto']('' + _0x53725a[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x43f1d2) {
                    console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20' + _0x43f1d2 + '\x20Size\x20not\x20found')), _0x3897c0 = 'Size\x20Not\x20Found';
                    var _0x39d07e = await _0x17fd16(_0x342151[_0x327ba7], _0x54402a, 'dev', !![], _0x3897c0);
                    _0x5f1f16['errorDEV'] = { 'embeds': [_0x39d07e] };
                    _0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '' && await _0x2d3c9d(_0x20363f['webhook'], _0x5f1f16['errorDEV']);
                    await _0x2d3c9d(_0x31debd, _0x5f1f16['errorDEV']);
                    continue;
                }
            }
            await _0x23e12b['waitForTimeout'](0x258), await _0x23e12b['type']('#raffle-instagram', '' + _0x342151[_0x327ba7]['Follower'], { 'delay': 0x64 }), await _0x23e12b['waitForTimeout'](0x384), await _0x23e12b['click']('#raffle-terms'), await _0x23e12b['waitForTimeout'](0x384), await _0x23e12b['evaluate'](() => {
                const _0x179bc1 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x179bc1['click']();
            }), await _0x23e12b['waitForTimeout'](0xbb8), await _0x23e12b['waitForSelector']('#checkout_email'), await _0x13c894(0x3e8), console['log'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x3b06c6 == 'sec' ? await _0x23e12b['type']('#checkout_email', '' + _0x342151[_0x327ba7]['FirstName'] + _0x342151[_0x327ba7]['LastName'] + _0x20363f['catchall'], 0x32) : await _0x23e12b['type']('#checkout_email', '' + _0x342151[_0x327ba7]['Email'], 0x32);
            await _0x13c894(0x320), await _0x23e12b['select']('#checkout_shipping_address_country', '' + _0x342151[_0x327ba7]['Country']), await _0x23e12b['waitForTimeout'](0x258), await _0x23e12b['type']('#checkout_shipping_address_first_name', '' + _0x342151[_0x327ba7]['FirstName']), await _0x23e12b['waitForTimeout'](0x320), await _0x23e12b['type']('#checkout_shipping_address_last_name', '' + _0x342151[_0x327ba7]['LastName']), await _0x23e12b['waitForTimeout'](0x2bc), await _0x23e12b['type']('#checkout_shipping_address_address1', _0x342151[_0x327ba7]['Address1'] + '\x20' + _0x342151[_0x327ba7]['HouseNumber']), await _0x23e12b['waitForTimeout'](0x2bc), await _0x23e12b['type']('#checkout_shipping_address_address2', '' + _0x342151[_0x327ba7]['Address2']), await _0x23e12b['waitForTimeout'](0x2bc);
            _0x342151[_0x327ba7]['Postcode'] == undefined ? await _0x23e12b['type']('#checkout_shipping_address_zip', '' + _0x342151[_0x327ba7]['Zip']) : await _0x23e12b['type']('#checkout_shipping_address_zip', '' + _0x342151[_0x327ba7]['Postcode']);
            await _0x23e12b['waitForTimeout'](0x2bc), await _0x23e12b['type']('#checkout_shipping_address_city', '' + _0x342151[_0x327ba7]['City']), await _0x23e12b['waitForTimeout'](0x2bc), console['log'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x23e12b, _0x23e12b['evaluate'](() => {
                const _0x1fbd2f = document['querySelector']('#continue_button');
                for (var _0x406611 = 0x0; _0x406611 < 0x5; _0x406611++) {
                    if (_0x1fbd2f) {
                        _0x1fbd2f['click'](), _0x1fbd2f['click']();
                        break;
                    } else
                        _0x13c894(0xfa0);
                }
            }), await _0x23e12b['waitForTimeout'](0x1194);
            try {
                await _0x23e12b['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x23e12b['evaluate'](() => {
                const _0x3bf92c = document['querySelector']('#continue_button');
                for (var _0x1e05bd = 0x0; _0x1e05bd < 0x5; _0x1e05bd++) {
                    if (_0x3bf92c) {
                        _0x3bf92c['click']();
                        break;
                    } else
                        _0x13c894(0xfa0);
                }
            }), await _0x23e12b['waitForTimeout'](0x7d0), console['log'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x23e12b['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x23e12b['evaluate'](() => {
                const _0x2b8db5 = document['querySelector']('#continue_button');
                for (var _0x3b08f2 = 0x0; _0x3b08f2 < 0x5; _0x3b08f2++) {
                    if (_0x2b8db5) {
                        _0x2b8db5['click']();
                        break;
                    } else
                        _0x13c894(0xfa0);
                }
            }), await _0x23e12b['waitForTimeout'](0x1194), await _0x23e12b['waitForSelector']('#continue_button'), _0x23e12b['evaluate'](() => {
                const _0x438390 = document['querySelector']('#continue_button');
                for (var _0x3ab202 = 0x0; _0x3ab202 < 0x5; _0x3ab202++) {
                    if (_0x438390) {
                        _0x438390['click']();
                        break;
                    } else
                        _0x13c894(0xfa0);
                }
            });
            try {
                await _0x23e12b['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x46322d['green'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '')
                    try {
                        await _0x2d3c9d(_0x20363f['webhook'], _0x5f1f16['succesDEVMSG']);
                    } catch {
                    }
                await _0x13c894(0xc8), await _0x2d3c9d(_0x11a452, _0x5f1f16['succesDEVMSG']), await _0x13c894(0xc8);
                try {
                    await _0x2d3c9d(_0x3f49d0, _0x5f1f16['succesPUBMSG']);
                } catch {
                }
            } catch (_0x3296f6) {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x3296f6));
            }
        } catch (_0x2e828e) {
            console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20' + _0x2e828e)), _0x3897c0 = '' + _0x2e828e;
            var _0x39d07e = await _0x17fd16(_0x342151[_0x327ba7], _0x54402a, 'dev', !![], _0x3897c0);
            _0x5f1f16['errorDEV'] = { 'embeds': [_0x39d07e] }, _0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '' && await _0x2d3c9d(_0x20363f['webhook'], _0x5f1f16['errorDEV']), await _0x2d3c9d(_0x31debd, _0x5f1f16['errorDEV']), _0x1d8cae = 'yes';
        } finally {
            _0xaddac7 && _0xaddac7['close']();
            if (_0x1d8cae == 'yes' && _0x4953bb != 0x5 && _0x3897c0 != 'Size\x20Not\x20Found') {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x54402a['name'] + ']\x20Task\x20' + (_0x327ba7 + 0x1) + '\x20:\x20Retrying')), _0x327ba7 = _0x327ba7 - 0x1, _0x4953bb = _0x4953bb + 0x1;
                continue;
            }
            if (_0x327ba7 + 0x1 == _0x342151['length']) {
                console['log'](_0x46322d['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x13c894(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x20363f['AfewDelay'] + '\x20ms'), await _0x13c894(_0x20363f['AfewDelay']);
        }
    }
};
async function _0x4ef082(_0x2d2fbe, _0x32c04d, _0x34b8e8, _0x1b4a48) {
    _0x491b02['use'](_0x5b4fc0()), _0x491b02['use'](_0x500fb3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x20363f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4f5f68 = 0x0; _0x4f5f68 < _0x34b8e8['length']; _0x4f5f68++) {
        var _0x2a942b = '', _0x23856b = 0x0;
        _0x4b46b5(_0x32c04d['name'] + '\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20/\x20' + _0x34b8e8['length'] + '\x20||\x20File:\x20' + _0xad8e8d + '\x20Proxies:\x20' + _0x2db857), await _0x1726ee(_0x34b8e8, _0x4f5f68);
        var _0x356aaa = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2cd057
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x20363f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x316d08
                }
            ]
        }];
        const _0x2777c4 = { 'embeds': _0x356aaa };
        var _0x10860c = await _0x17fd16(_0x34b8e8[_0x4f5f68], _0x32c04d, 'acc', ![]);
        const _0x3ea2c0 = { 'succesDEVMSG': { 'embeds': [_0x10860c] } };
        if (_0x34b8e8[_0x4f5f68]['Email'] == '' || _0x34b8e8[_0x4f5f68]['FirstName'] == '' || _0x34b8e8[_0x4f5f68]['LastName'] == '') {
            console['log'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x34b8e8[_0x4f5f68]['Password'] == '' && (_0x34b8e8[_0x4f5f68]['Password'] = 'JRaffles23!');
        if (_0x20363f['useRandomProxy'] = ![])
            var _0x59c24b = _0x1b4a48[_0x4f5f68]['split'](':');
        else
            var _0x13df52 = Math['round'](Math['random']() * (_0x1b4a48['length'] - 0x1)), _0x59c24b = _0x1b4a48[_0x13df52]['split'](':');
        const _0x4d6308 = await _0x491b02['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x59c24b[0x0] + ':' + _0x59c24b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5bce2c = await _0x4d6308['newPage']();
            await _0x5bce2c['authenticate']({
                'username': '' + _0x59c24b[0x2],
                'password': '' + _0x59c24b[0x3]
            }), console['log'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5bce2c['setRequestInterception'](!![]), _0x5bce2c['on']('request', _0x2ade5f => {
                _0x2ade5f['resourceType']() === 'image' || _0x2ade5f['resourceType']() === 'font' || _0x2ade5f['resourceType']() === 'media' ? _0x2ade5f['abort']() : _0x2ade5f['continue']();
            }), await _0x5bce2c['goto'](_0x2d2fbe), await _0x13c894(0xbb8), console['log'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x5bce2c['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5bce2c['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5bce2c['waitForSelector']('#button-register'), await _0x13c894(0x7d0), await _0x5bce2c['evaluate'](() => {
                const _0x16db97 = document['querySelector']('#button-register');
                _0x16db97['click']();
            }), console['log'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x13c894(0x1388), await _0x5bce2c['waitForSelector']('#customer_salutation'), await _0x5bce2c['select']('#customer_salutation', 'mr'), await _0x13c894(0x7d0), await _0x5bce2c['waitForSelector']('#customer_firstname'), await _0x5bce2c['type']('#customer_firstname', '' + _0x34b8e8[_0x4f5f68]['FirstName']), await _0x13c894(0x352), await _0x5bce2c['waitForSelector']('#customer_lastname'), await _0x5bce2c['type']('#customer_lastname', '' + _0x34b8e8[_0x4f5f68]['LastName']), await _0x13c894(0x352), await _0x5bce2c['type']('#email-input', '' + _0x34b8e8[_0x4f5f68]['Email']), await _0x13c894(0x352), await _0x5bce2c['type']('#email-confirm-input', '' + _0x34b8e8[_0x4f5f68]['Email']), await _0x13c894(0x352), await _0x5bce2c['type']('#register-password', '' + _0x34b8e8[_0x4f5f68]['Password']), await _0x13c894(0x352), await _0x5bce2c['type']('#password-confirm', '' + _0x34b8e8[_0x4f5f68]['Password']), await _0x13c894(0x352), console['log'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x5bce2c['click']('#consent'), await _0x13c894(0x1f4);
            const _0x2802f6 = await _0x5bce2c['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x2802f6) {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x5bce2c['click']('#buttonRegister');
            try {
                await _0x5bce2c['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x46322d['yellow'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20Account\x20' + _0x34b8e8[_0x4f5f68]['Email'] + '\x20Generated!')), console['log'](_0x46322d['yellow'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x34b8e8[_0x4f5f68]['Email'])), await _0x13c894(0x4b0);
            async function _0x127a6c() {
                console['log'](_0x46322d['yellow'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x4e1fcc = await _0x48e1f5['get']('Code');
                return _0x4e1fcc['Code'];
            }
            ;
            code = await _0x127a6c(), _0x13c894(0x320), console['log'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20Verifying..'), await _0x5bce2c['type']('#verificationCode', code), await _0x13c894(0x1f4), await _0x5bce2c['click']('#buttonVerify'), await _0x13c894(0x190), await _0x5bce2c['click']('#buttonVerify'), await _0x13c894(0x3e8);
            try {
                await _0x5bce2c['waitForSelector']('div.b-user_greeting'), console['log'](_0x46322d['green'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20Account\x20' + _0x34b8e8[_0x4f5f68]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x147bd5['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x34b8e8[_0x4f5f68]['Email'] + ',' + _0x34b8e8[_0x4f5f68]['Password'] + ','), console['log'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20Account\x20' + _0x34b8e8[_0x4f5f68]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '' && await _0x2d3c9d(_0x20363f['webhook'], _0x3ea2c0['succesDEVMSG']);
                } catch {
                }
                await _0x2d3c9d(_0x4cce15, _0x3ea2c0['succesDEVMSG']);
            } catch {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x41dd04) {
            console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20' + _0x41dd04)), _0x356aaa[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x356aaa[0x0]['description'] = '' + _0x41dd04, await _0x2d3c9d(_0x31debd, _0x2777c4), _0x2a942b = 'yes';
        } finally {
            _0x4d6308 && _0x4d6308['close']();
            if (_0x2a942b == 'yes' && _0x23856b != 0x5) {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x32c04d['name'] + ']\x20Task\x20' + (_0x4f5f68 + 0x1) + '\x20:\x20Retrying')), _0x4f5f68 = _0x4f5f68 - 0x1, _0x23856b = _0x23856b + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x20363f['delay'] + '\x20ms'), await _0x13c894(_0x20363f['delay']);
        }
    }
}
async function _0x4c19c5(_0x3c9ea3, _0x5d64e2, _0x2b72b3) {
    _0x491b02['use'](_0x5b4fc0()), _0x491b02['use'](_0x500fb3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x20363f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x9aa7fb = 0x0; _0x9aa7fb < _0x5d64e2['length']; _0x9aa7fb++) {
        var _0x37fb92, _0x2b7934 = '', _0x360ff2 = 0x0;
        _0x4b46b5(_0x3c9ea3['name'] + '\x20Task\x20' + (_0x9aa7fb + 0x1) + '\x20/\x20' + _0x5d64e2['length'] + '\x20||\x20File:\x20' + _0xad8e8d + '\x20Proxies:\x20' + _0x2db857);
        var _0x508aca = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2cd057
                },
                {
                    'name': 'Product',
                    'value': '' + _0x5d64e2[_0x9aa7fb]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5d64e2[_0x9aa7fb]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x20363f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x316d08
                }
            ]
        }], _0x527a61 = await _0x17fd16(_0x5d64e2[_0x9aa7fb], _0x3c9ea3, 'dev', ![]), _0x1e9133 = await _0x17fd16(_0x5d64e2[_0x9aa7fb], _0x3c9ea3, 'pub', ![]);
        const _0x4182d3 = {
            'succesDEVMSG': { 'embeds': [_0x527a61] },
            'succesPUBMSG': { 'embeds': [_0x1e9133] }
        };
        await _0x1726ee(_0x5d64e2, _0x9aa7fb);
        if (_0x5d64e2[_0x9aa7fb]['Email'] == '' || _0x5d64e2[_0x9aa7fb]['Password'] == '' || _0x5d64e2[_0x9aa7fb]['FirstName'] == '' || _0x5d64e2[_0x9aa7fb]['LastName'] == '') {
            console['log'](_0x599664() + '\x20[' + _0x3c9ea3['name'] + ']\x20Task\x20' + (_0x9aa7fb + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x20363f['useRandomProxy'] = ![])
            var _0x18dac5 = _0x2b72b3[_0x9aa7fb]['split'](':');
        else
            var _0x308644 = Math['round'](Math['random']() * (_0x2b72b3['length'] - 0x1)), _0x18dac5 = _0x2b72b3[_0x308644]['split'](':');
        const _0x43320f = await _0x491b02['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x18dac5[0x0] + ':' + _0x18dac5[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2a43c8 = await _0x43320f['newPage']();
            await _0x2a43c8['authenticate']({
                'username': '' + _0x18dac5[0x2],
                'password': '' + _0x18dac5[0x3]
            }), console['log'](_0x599664() + '\x20[' + _0x3c9ea3['name'] + ']\x20Task\x20' + (_0x9aa7fb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2a43c8['setRequestInterception'](!![]), _0x2a43c8['on']('request', _0x252601 => {
                _0x252601['resourceType']() === 'image' || _0x252601['resourceType']() === 'font' || _0x252601['resourceType']() === 'media' ? _0x252601['abort']() : _0x252601['continue']();
            }), await _0x2a43c8['goto']('' + _0x5d64e2[_0x9aa7fb]['Url'], { 'waitUntil': 'networkidle2' }), await _0x13c894(0x12c);
            try {
                await _0x2a43c8['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x2a43c8['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x599664() + '\x20[' + _0x3c9ea3['name'] + ']\x20Task\x20' + (_0x9aa7fb + 0x1) + '\x20:\x20Logging\x20in'), await _0x2a43c8['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2a43c8['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2a43c8['waitForSelector']('#username'), await _0x2a43c8['type']('#username', _0x5d64e2[_0x9aa7fb]['Email']), await _0x2a43c8['waitForSelector']('#password'), await _0x2a43c8['type']('#password', _0x5d64e2[_0x9aa7fb]['Password']), await _0x13c894(0x190), await _0x2a43c8['click']('#buttonSubmit'), await _0x2a43c8['waitForSelector']('div.b-user_greeting'), console['log'](_0x599664() + '\x20[' + _0x3c9ea3['name'] + ']\x20Task\x20' + (_0x9aa7fb + 0x1) + '\x20:\x20Getting\x20Product'), await _0x13c894(0x1f4), await _0x2a43c8['goto']('' + _0x5d64e2[_0x9aa7fb]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x599664() + '\x20[' + _0x3c9ea3['name'] + ']\x20Task\x20' + (_0x9aa7fb + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x5d64e2[_0x9aa7fb]['Size']);
            let _0x3513f8 = _0x5d64e2[_0x9aa7fb]['Size']['replace']('.5', '\x201/2');
            await _0x2a43c8['click']('button[title=\x22' + _0x3513f8 + '\x22]'), await _0x13c894(0x1f4);
            try {
                await _0x2a43c8['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x13c894(0x12c), console['log'](_0x599664() + '\x20[' + _0x3c9ea3['name'] + ']\x20Task\x20' + (_0x9aa7fb + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2a43c8['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x13c894(0x12c), await _0x2a43c8['type']('#dwfrm_raffle_addressFields_firstName', _0x5d64e2[_0x9aa7fb]['FirstName']), await _0x13c894(0x12c), await _0x2a43c8['type']('#dwfrm_raffle_addressFields_lastName', _0x5d64e2[_0x9aa7fb]['LastName']), await _0x13c894(0x12c), await _0x2a43c8['select']('#dwfrm_raffle_addressFields_country', _0x5d64e2[_0x9aa7fb]['Country']), await _0x13c894(0x12c), await _0x2a43c8['type']('#dwfrm_raffle_addressFields_city', _0x5d64e2[_0x9aa7fb]['City']), await _0x13c894(0x12c);
            _0x5d64e2[_0x9aa7fb]['Postcode'] == undefined && (_0x5d64e2[_0x9aa7fb]['Postcode'] = _0x5d64e2[_0x9aa7fb]['Zip']);
            await _0x2a43c8['type']('#dwfrm_raffle_addressFields_postalCode', _0x5d64e2[_0x9aa7fb]['Postcode']), await _0x13c894(0x12c), await _0x2a43c8['type']('#dwfrm_raffle_addressFields_address1', _0x5d64e2[_0x9aa7fb]['Address1']), await _0x13c894(0x12c), await _0x2a43c8['type']('#dwfrm_raffle_addressFields_address2', _0x5d64e2[_0x9aa7fb]['HouseNumber']), await _0x13c894(0x12c), await _0x2a43c8['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x5d64e2[_0x9aa7fb]['Address2']), await _0x13c894(0x12c), await _0x2a43c8['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x13c894(0x12c), await _0x2a43c8['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x5d64e2[_0x9aa7fb]['Follower']), await _0x13c894(0x1f4), await _0x2a43c8['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x13c894(0x1f4), console['log'](_0x599664() + '\x20[' + _0x3c9ea3['name'] + ']\x20Task\x20' + (_0x9aa7fb + 0x1) + '\x20:\x20' + _0x46322d['blue']('Awaiting\x20Paypal\x20Payment')), await _0x2a43c8['click']('.b-paypal_button');
            try {
                await _0x2a43c8['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x46322d['green'](_0x599664() + '\x20[' + _0x3c9ea3['name'] + ']\x20Task\x20' + (_0x9aa7fb + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '' && await _0x2d3c9d(_0x20363f['webhook'], _0x4182d3['succesDEVMSG']), await _0x13c894(0xc8), await _0x2d3c9d(_0x11a452, _0x4182d3['succesDEVMSG']), await _0x13c894(0xc8), await _0x2d3c9d(_0x3f49d0, _0x4182d3['succesPUBMSG']);
            } catch (_0x26a582) {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x3c9ea3['name'] + ']\x20Task\x20' + (_0x9aa7fb + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x26a582)), _0x37fb92 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x26a582;
                var _0x3f2926 = await _0x17fd16(_0x5d64e2[_0x9aa7fb], _0x3c9ea3, 'dev', !![], _0x37fb92);
                _0x4182d3['errorDEV'] = { 'embeds': [_0x3f2926] }, _0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '' && await _0x2d3c9d(_0x20363f['webhook'], _0x4182d3['errorDEV']), await _0x2d3c9d(_0x31debd, _0x4182d3['errorDEV']);
            }
        } catch (_0x2d06b5) {
            console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x3c9ea3['name'] + ']\x20Task\x20' + (_0x9aa7fb + 0x1) + '\x20:\x20' + _0x2d06b5)), _0x37fb92 = '' + _0x2d06b5;
            var _0x3f2926 = await _0x17fd16(_0x5d64e2[_0x9aa7fb], _0x3c9ea3, 'dev', !![], _0x37fb92);
            _0x4182d3['errorDEV'] = { 'embeds': [_0x3f2926] }, _0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '' && await _0x2d3c9d(_0x20363f['webhook'], _0x4182d3['errorDEV']), await _0x2d3c9d(_0x31debd, _0x4182d3['errorDEV']), _0x2b7934 = 'yes';
        } finally {
            _0x43320f && _0x43320f['close']();
            if (_0x2b7934 == 'yes' && _0x360ff2 != 0x5) {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x3c9ea3['name'] + ']\x20Task\x20' + (_0x9aa7fb + 0x1) + '\x20:\x20Retrying')), _0x9aa7fb = _0x9aa7fb - 0x1, _0x360ff2 = _0x360ff2 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x20363f['AfewDelay'] + '\x20ms'), await _0x13c894(_0x20363f['AfewDelay']);
        }
    }
}
async function _0x3e1d3a(_0x345617, _0x14be7e) {
    _0x491b02['use'](_0x5b4fc0()), _0x491b02['use'](_0x500fb3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x20363f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x23ae48 = 0x0; _0x23ae48 < bouncewear['length']; _0x23ae48++) {
        await _0x1726ee(bouncewear, _0x23ae48);
        if (bouncewear[_0x23ae48]['Email'] == '' || bouncewear[_0x23ae48]['Password'] == '' || bouncewear[_0x23ae48]['FirstName'] == '' || bouncewear[_0x23ae48]['LastName'] == '') {
            console['log'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x23ae48 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x20363f['useRandomProxy'] = ![])
            var _0x33922 = _0x16adf4()[_0x23ae48]['split'](':');
        else
            var _0x22b535 = Math['round'](Math['random']() * (_0x16adf4()['length'] - 0x1)), _0x33922 = _0x16adf4()[_0x22b535]['split'](':');
        const _0x2b014e = await _0x491b02['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x33922[0x0] + ':' + _0x33922[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x347dc9 = await _0x2b014e['newPage']();
            await _0x347dc9['authenticate']({
                'username': '' + _0x33922[0x2],
                'password': '' + _0x33922[0x3]
            }), console['log'](_0x599664() + '\x20[' + _0x14be7e['name'] + ']\x20Task\x20' + (_0x23ae48 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x347dc9['setRequestInterception'](!![]), _0x347dc9['on']('request', _0x30b3c3 => {
                _0x30b3c3['resourceType']() === 'image' || _0x30b3c3['resourceType']() === 'font' || _0x30b3c3['resourceType']() === 'media' ? _0x30b3c3['abort']() : _0x30b3c3['continue']();
            }), await _0x347dc9['goto'](_0x345617), await _0x13c894(0xbb8), await _0x347dc9['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x599664() + '\x20[' + _0x14be7e['name'] + ']\x20Task\x20' + (_0x23ae48 + 0x1) + '\x20:\x20Filling\x20information'), await _0x347dc9['type']('#RegisterForm-FirstName', '' + bouncewear[_0x23ae48]['FirstName']), await _0x13c894(0x226), await _0x347dc9['type']('#RegisterForm-LastName', '' + bouncewear[_0x23ae48]['LastName']), await _0x13c894(0x226), await _0x347dc9['type']('#RegisterForm-email', '' + bouncewear[_0x23ae48]['Email']), await _0x13c894(0x226), await _0x347dc9['type']('#RegisterForm-password', '' + bouncewear[_0x23ae48]['Password']), await _0x13c894(0x226), await _0x347dc9['click']('#marketing'), console['log'](_0x599664() + '\x20[' + _0x14be7e['name'] + ']\x20Task\x20' + (_0x23ae48 + 0x1) + '\x20:\x20Submitting..'), await _0x347dc9['$eval']('#RegisterForm', _0x2e6d1f => _0x2e6d1f['submit']()), await _0x13c894(0x1f40), console['log'](_0x599664() + '\x20[' + _0x14be7e['name'] + ']\x20Task\x20' + (_0x23ae48 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x347dc9['solveRecaptchas'](), await _0x347dc9['click']('.shopify-challenge__button.btn');
            async function _0x2c0cbc() {
                for (var _0x4d9776 = 0x0; _0x4d9776 < 0x4; _0x4d9776++) {
                    try {
                        console['log']('try'), await _0x347dc9['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x599664() + '\x20[' + _0x14be7e['name'] + ']\x20Task\x20' + (_0x23ae48 + 0x1) + '\x20:\x20' + _0x46322d['red']('Catpcha\x20failed,\x20retrying..')), await _0x347dc9['solveRecaptchas'](), await _0x347dc9['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x2c0cbc(), console['log'](_0x599664() + '\x20[' + _0x14be7e['name'] + ']\x20Task\x20' + (_0x23ae48 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x13c894(0x1f4);
            try {
                await _0x347dc9['waitForSelector']('.featured-title'), await _0x13c894(0x1f4), console['log'](_0x46322d['green'](_0x599664() + '\x20[' + _0x14be7e['name'] + ']\x20Task\x20' + (_0x23ae48 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x23ae48]['Email'] + '\x20Generated!')), _0x147bd5['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x23ae48]['Email'] + ',' + bouncewear[_0x23ae48]['Password']), console['log'](_0x46322d['yellow'](_0x599664() + '\x20[' + _0x14be7e['name'] + ']\x20Task\x20' + (_0x23ae48 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x23ae48]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0xbd6aad) {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x23ae48 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xbd6aad));
            }
        } catch (_0x3fab9d) {
            console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x23ae48 + 0x1) + '\x20:\x20' + _0x3fab9d));
        } finally {
            _0x2b014e && _0x2b014e['close'](), console['log']('Waiting\x20for\x20' + _0x20363f['delay'] + '\x20ms'), await _0x13c894(_0x20363f['delay']);
        }
    }
}
async function _0x230879(_0x19a42a, _0x1b9bbf, _0xb74674, _0x4fe1cf) {
    _0x491b02['use'](_0x5b4fc0()), _0x491b02['use'](_0x500fb3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x20363f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x158e49 = 0x0; _0x158e49 < _0xb74674['length']; _0x158e49++) {
        var _0xdda758 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2cd057
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x20363f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x316d08
                }
            ]
        }];
        const _0x1a174d = { 'embeds': _0xdda758 };
        _0x4b46b5(_0x1b9bbf['name'] + '\x20Task\x20' + (_0x158e49 + 0x1) + '\x20/\x20' + _0xb74674['length'] + '\x20||\x20File:\x20' + _0xad8e8d + '\x20Proxies:\x20' + _0x2db857), await _0x1726ee(_0xb74674, _0x158e49);
        var _0x370cba = await _0x17fd16(_0xb74674[_0x158e49], _0x1b9bbf, 'acc', ![]);
        const _0xa4811b = { 'succesDEVMSG': { 'embeds': [_0x370cba] } };
        if (_0xb74674[_0x158e49]['Email'] == '' || _0xb74674[_0x158e49]['FirstName'] == '' || _0xb74674[_0x158e49]['LastName'] == '') {
            console['log'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x158e49 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x13c894(0x7d0);
            continue;
        }
        (_0xb74674[_0x158e49]['Password'] == '' || _0xb74674[_0x158e49] == undefined) && _0xb74674[_0x158e49]['Password'] == 'JRaffles23!';
        if (_0x20363f['useRandomProxy'] = ![])
            var _0x291335 = _0x4fe1cf[_0x158e49]['split'](':');
        else
            var _0x254ab8 = Math['round'](Math['random']() * (_0x4fe1cf['length'] - 0x1)), _0x291335 = _0x4fe1cf[_0x254ab8]['split'](':');
        const _0x1d56df = await _0x491b02['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x291335[0x0] + ':' + _0x291335[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x498847 = await _0x1d56df['newPage']();
            await _0x498847['authenticate']({
                'username': '' + _0x291335[0x2],
                'password': '' + _0x291335[0x3]
            }), console['log'](_0x599664() + '\x20[' + _0x1b9bbf['name'] + ']\x20Task\x20' + (_0x158e49 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x498847['setRequestInterception'](!![]), _0x498847['on']('request', _0x14d82c => {
                _0x14d82c['resourceType']() === 'image' || _0x14d82c['resourceType']() === 'font' || _0x14d82c['resourceType']() === 'media' ? _0x14d82c['abort']() : _0x14d82c['continue']();
            }), await _0x498847['goto'](_0x19a42a), await _0x13c894(0xbb8), await _0x498847['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x599664() + '\x20[' + _0x1b9bbf['name'] + ']\x20Task\x20' + (_0x158e49 + 0x1) + '\x20:\x20Filling\x20information'), await _0x498847['type']('#RegisterForm-FirstName', '' + _0xb74674[_0x158e49]['FirstName']), await _0x13c894(0x226), await _0x498847['type']('#RegisterForm-LastName', '' + _0xb74674[_0x158e49]['LastName']), await _0x13c894(0x226), await _0x498847['type']('#RegisterForm-email', '' + _0xb74674[_0x158e49]['Email']), await _0x13c894(0x226), await _0x498847['type']('#RegisterForm-password', '' + _0xb74674[_0x158e49]['Password']), await _0x13c894(0x226), console['log'](_0x599664() + '\x20[' + _0x1b9bbf['name'] + ']\x20Task\x20' + (_0x158e49 + 0x1) + '\x20:\x20Submitting..'), await _0x498847['$eval']('#RegisterForm', _0x427f27 => _0x427f27['submit']()), await _0x13c894(0x1f40);
            try {
                await _0x498847['waitForSelector']('.home-page-grid__collection'), await _0x13c894(0x1f4), console['log'](_0x46322d['green'](_0x599664() + '\x20[' + _0x1b9bbf['name'] + ']\x20Task\x20' + (_0x158e49 + 0x1) + '\x20:\x20Account\x20' + _0xb74674[_0x158e49]['Email'] + '\x20Generated!')), _0x147bd5['appendFileSync']('../accounts/patta.csv', '\x0a' + _0xb74674[_0x158e49]['Email'] + ',' + _0xb74674[_0x158e49]['Password']), console['log'](_0x46322d['yellow'](_0x599664() + '\x20[' + _0x1b9bbf['name'] + ']\x20Task\x20' + (_0x158e49 + 0x1) + '\x20:\x20Account\x20' + _0xb74674[_0x158e49]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '' && await _0x2d3c9d(_0x20363f['webhook'], _0xa4811b['succesDEVMSG']);
                } catch {
                }
                await _0x2d3c9d(_0x4cce15, _0xa4811b['succesDEVMSG']);
            } catch (_0x1220e9) {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x158e49 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1220e9));
            }
        } catch (_0x264df6) {
            console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x158e49 + 0x1) + '\x20:\x20' + _0x264df6));
        } finally {
            _0x1d56df && _0x1d56df['close'](), console['log']('Waiting\x20for\x20' + _0x20363f['delay'] + '\x20ms'), await _0x13c894(_0x20363f['delay']);
        }
    }
}
async function _0x1b2282(_0x4726d7, _0x4b688f, _0x20d5b2, _0x4c413e) {
    _0x491b02['use'](_0x5b4fc0()), _0x491b02['use'](_0x500fb3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x20363f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5934e2 = 0x0; _0x5934e2 < _0x20d5b2['length']; _0x5934e2++) {
        var _0x1fefee, _0x3aeac1 = '', _0x3e8d68 = 0x0;
        _0x4b46b5(_0x4b688f['name'] + '\x20Task\x20' + (_0x5934e2 + 0x1) + '\x20/\x20' + _0x20d5b2['length'] + '\x20||\x20File:\x20' + _0xad8e8d + '\x20Proxies:\x20' + _0x2db857), await _0x1726ee(_0x20d5b2, _0x5934e2);
        if (_0x20d5b2[_0x5934e2]['Email'] == '' || _0x20d5b2[_0x5934e2]['Password'] == '' || _0x20d5b2[_0x5934e2]['FirstName'] == '' || _0x20d5b2[_0x5934e2]['LastName'] == '') {
            console['log'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x5934e2 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x20363f['useRandomProxy'] = ![])
            var _0xacf363 = _0x4c413e[_0x5934e2]['split'](':');
        else
            var _0x3ce402 = Math['round'](Math['random']() * (_0x4c413e['length'] - 0x1)), _0xacf363 = _0x4c413e[_0x3ce402]['split'](':');
        const _0xaa464f = await _0x491b02['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xacf363[0x0] + ':' + _0xacf363[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1cc92b = await _0xaa464f['newPage']();
            await _0x1cc92b['authenticate']({
                'username': '' + _0xacf363[0x2],
                'password': '' + _0xacf363[0x3]
            }), console['log'](_0x599664() + '\x20[' + _0x4b688f['name'] + ']\x20Task\x20' + (_0x5934e2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1cc92b['setRequestInterception'](!![]), _0x1cc92b['on']('request', _0x22760c => {
                _0x22760c['resourceType']() === 'image' || _0x22760c['resourceType']() === 'font' || _0x22760c['resourceType']() === 'media' ? _0x22760c['abort']() : _0x22760c['continue']();
            }), await _0x1cc92b['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x1cc92b['waitForSelector']('#CustomerEmail'), console['log'](_0x599664() + '\x20[' + _0x4b688f['name'] + ']\x20Task\x20' + (_0x5934e2 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1cc92b['type']('#CustomerEmail', '' + _0x20d5b2[_0x5934e2]['Email']), await _0x13c894(0x12c), await _0x1cc92b['type']('#CustomerPassword', '' + _0x20d5b2[_0x5934e2]['Password']), await _0x13c894(0x226), await _0x1cc92b['$eval']('#customer_login', _0x4e3885 => _0x4e3885['submit']());
            try {
                await _0x1cc92b['waitForSelector']('#orders'), await _0x13c894(0x4b0);
            } catch {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x4b688f['name'] + ']\x20Task\x20' + (_0x5934e2 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x1cc92b['goto']('' + _0x20d5b2[_0x5934e2]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x13c894(0xbb8), console['log'](_0x599664() + '\x20[' + _0x4b688f['name'] + ']\x20Task\x20' + (_0x5934e2 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x1cc92b['waitForSelector']('#email');
            } catch {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x4b688f['name'] + ']\x20Task\x20' + (_0x5934e2 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x1cc92b['type']('#email', '' + _0x20d5b2[_0x5934e2]['Email']), await _0x13c894(0x384), await _0x1cc92b['type']('#first_name', '' + _0x20d5b2[_0x5934e2]['FirstName']), await _0x13c894(0x514), await _0x1cc92b['type']('#last_name', '' + _0x20d5b2[_0x5934e2]['LastName']), await _0x13c894(0x514), await _0x1cc92b['type']('#street_address', _0x20d5b2[_0x5934e2]['Address1'] + '\x20' + _0x20d5b2[_0x5934e2]['HouseNumber'] + '\x20' + _0x20d5b2[_0x5934e2]['Address2']), await _0x13c894(0x2bc);
            _0x20d5b2[_0x5934e2]['Postcode'] == undefined && (_0x20d5b2[_0x5934e2]['Postcode'] = _0x20d5b2[_0x5934e2]['Zip']);
            await _0x1cc92b['type']('#zip_code', '' + _0x20d5b2[_0x5934e2]['Postcode']), await _0x13c894(0x320), await _0x1cc92b['type']('#city', '' + _0x20d5b2[_0x5934e2]['City']), await _0x13c894(0x320), await _0x1cc92b['type']('#bday', '01/01/1994'), await _0x13c894(0x320), await _0x1cc92b['type']('#instagram', '' + _0x20d5b2[_0x5934e2]['Follower']), await _0x13c894(0x352);
            if (_0x20d5b2[_0x5934e2]['Size'] == 'RANDOM') {
                const _0x10d2db = await _0x1cc92b['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x1a2196 => {
                    return _0x1a2196['map'](_0x41e7ca => _0x41e7ca['textContent']);
                });
                var _0x222165 = Math['round'](Math['random']() * (_0x10d2db['length'] - 0x1));
                console['log'](_0x599664() + '\x20[' + _0x4b688f['name'] + ']\x20Task\x20' + (_0x5934e2 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x10d2db[_0x222165]), await _0x1cc92b['click']('label[data-eu-size=\x22' + _0x10d2db[_0x222165] + '\x22]');
            } else {
                console['log'](_0x599664() + '\x20[' + _0x4b688f['name'] + ']\x20Task\x20' + (_0x5934e2 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x20d5b2[_0x5934e2]['Size']);
                try {
                    await _0x1cc92b['click']('label[data-eu-size=\x22' + _0x20d5b2[_0x5934e2]['Size'] + '\x22]');
                } catch {
                    await _0x1cc92b['click']('label[data-eu-size=\x22' + _0x20d5b2[_0x5934e2]['Size'] + '.0\x22]');
                }
            }
            await _0x13c894(0xbb8), await _0x1cc92b['$$eval']('.raffle__checkbox-label', _0x81afe3 => _0x81afe3['forEach'](_0x1f8b42 => _0x1f8b42['click']())), await _0x13c894(0x7d0), console['log'](_0x599664() + '\x20[' + _0x4b688f['name'] + ']\x20Task\x20' + (_0x5934e2 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x1cc92b['click']('#raffle__form-submit'), await _0x13c894(0x1388);
            try {
                await _0x1cc92b['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x46322d['green'](_0x599664() + '\x20[' + _0x4b688f['name'] + ']\x20Task\x20' + (_0x5934e2 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x51ece2) {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x5934e2 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x51ece2));
            }
        } catch (_0x53053d) {
            console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x5934e2 + 0x1) + '\x20:\x20' + _0x53053d)), _0x3aeac1 = 'yes';
        } finally {
            _0xaa464f && _0xaa464f['close']();
            if (_0x3aeac1 == 'yes' && _0x3e8d68 != 0x5) {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x4b688f['name'] + ']\x20Task\x20' + (_0x5934e2 + 0x1) + '\x20:\x20Retrying')), _0x5934e2 = _0x5934e2 - 0x1, _0x3e8d68 = _0x3e8d68 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x20363f['delay'] + '\x20ms'), await _0x13c894(_0x20363f['delay']);
        }
    }
}
async function _0x21eae0(_0x4052a9, _0x4ef760, _0x45ba71, _0x255b4e) {
    _0x491b02['use'](_0x5b4fc0()), _0x491b02['use'](_0x500fb3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x20363f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2371be = 0x0; _0x2371be < _0x45ba71['length']; _0x2371be++) {
        var _0x438626 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2cd057
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x20363f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x316d08
                }
            ]
        }];
        const _0x17e1f0 = { 'embeds': _0x438626 };
        _0x4b46b5(_0x4ef760['name'] + '\x20Task\x20' + (_0x2371be + 0x1) + '\x20/\x20' + _0x45ba71['length'] + '\x20||\x20File:\x20' + _0xad8e8d + '\x20Proxies:\x20' + _0x2db857), await _0x1726ee(_0x45ba71, _0x2371be);
        var _0x49328f = await _0x17fd16(_0x45ba71[_0x2371be], _0x4ef760, 'acc', ![]);
        const _0x4a4d2c = { 'succesDEVMSG': { 'embeds': [_0x49328f] } };
        if (_0x45ba71[_0x2371be]['Email'] == '' || _0x45ba71[_0x2371be]['FirstName'] == '' || _0x45ba71[_0x2371be]['LastName'] == '') {
            console['log'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x2371be + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x13c894(0x7d0);
            continue;
        }
        (_0x45ba71[_0x2371be]['Password'] == '' || _0x45ba71[_0x2371be] == undefined) && _0x45ba71[_0x2371be]['Password'] == 'JRaffles23!';
        if (_0x20363f['useRandomProxy'] = ![])
            var _0x43e429 = _0x255b4e[_0x2371be]['split'](':');
        else
            var _0x35be24 = Math['round'](Math['random']() * (_0x255b4e['length'] - 0x1)), _0x43e429 = _0x255b4e[_0x35be24]['split'](':');
        const _0x4ce4ef = await _0x491b02['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x43e429[0x0] + ':' + _0x43e429[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5058d6 = await _0x4ce4ef['newPage']();
            await _0x5058d6['authenticate']({
                'username': '' + _0x43e429[0x2],
                'password': '' + _0x43e429[0x3]
            }), console['log'](_0x599664() + '\x20[' + _0x4ef760['name'] + ']\x20Task\x20' + (_0x2371be + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5058d6['setRequestInterception'](!![]), _0x5058d6['on']('request', _0x4e9ff8 => {
                _0x4e9ff8['resourceType']() === 'image' || _0x4e9ff8['resourceType']() === 'font' || _0x4e9ff8['resourceType']() === 'media' ? _0x4e9ff8['abort']() : _0x4e9ff8['continue']();
            }), await _0x5058d6['goto']('https://drop.slamjam.com/account/register'), await _0x13c894(0xbb8), await _0x5058d6['waitForSelector']('#FirstName'), await _0x5058d6['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5058d6['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x599664() + '\x20[' + _0x4ef760['name'] + ']\x20Task\x20' + (_0x2371be + 0x1) + '\x20:\x20Filling\x20information'), await _0x13c894(0x4b0), await _0x5058d6['type']('#FirstName', '' + _0x45ba71[_0x2371be]['FirstName']), await _0x13c894(0x226), await _0x5058d6['type']('#LastName', '' + _0x45ba71[_0x2371be]['LastName']), await _0x13c894(0x226), await _0x5058d6['type']('#Email', '' + _0x45ba71[_0x2371be]['Email']), await _0x13c894(0x2ee), await _0x5058d6['type']('#ConfirmEmail', '' + _0x45ba71[_0x2371be]['Email']), await _0x13c894(0x2ee), await _0x5058d6['type']('#CreatePassword', '' + _0x45ba71[_0x2371be]['Password']), await _0x13c894(0x2ee), await _0x5058d6['type']('#CreateConfirmPassword', '' + _0x45ba71[_0x2371be]['Password']), await _0x13c894(0x226), console['log'](_0x599664() + '\x20[' + _0x4ef760['name'] + ']\x20Task\x20' + (_0x2371be + 0x1) + '\x20:\x20Submitting..'), await _0x5058d6['$eval']('#create_customer', _0x2e6ae4 => _0x2e6ae4['submit']()), await _0x13c894(0x1388), console['log'](_0x599664() + '\x20[' + _0x4ef760['name'] + ']\x20Task\x20' + (_0x2371be + 0x1) + '\x20:\x20' + _0x46322d['cyan']('Solving\x20Captcha')), await _0x5058d6['solveRecaptchas'](), console['log'](_0x599664() + '\x20[' + _0x4ef760['name'] + ']\x20Task\x20' + (_0x2371be + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x5058d6['$eval']('.shopify-challenge__container\x20>\x20form', _0x1af36c => _0x1af36c['submit']());
            try {
                await _0x5058d6['waitForSelector']('.product-card__image'), await _0x13c894(0x1f4), console['log'](_0x46322d['green'](_0x599664() + '\x20[' + _0x4ef760['name'] + ']\x20Task\x20' + (_0x2371be + 0x1) + '\x20:\x20Account\x20' + _0x45ba71[_0x2371be]['Email'] + '\x20Generated!')), _0x147bd5['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x45ba71[_0x2371be]['Email'] + ',' + _0x45ba71[_0x2371be]['Password']), console['log'](_0x46322d['yellow'](_0x599664() + '\x20[' + _0x4ef760['name'] + ']\x20Task\x20' + (_0x2371be + 0x1) + '\x20:\x20Account\x20' + _0x45ba71[_0x2371be]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '' && await _0x2d3c9d(_0x20363f['webhook'], _0x4a4d2c['succesDEVMSG']);
                } catch {
                }
                await _0x2d3c9d(_0x4cce15, _0x4a4d2c['succesDEVMSG']);
            } catch (_0xf8a132) {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x2371be + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xf8a132));
            }
        } catch (_0x2ff3a7) {
            console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x2371be + 0x1) + '\x20:\x20' + _0x2ff3a7));
        } finally {
            _0x4ce4ef && _0x4ce4ef['close'](), console['log']('Waiting\x20for\x20' + _0x20363f['delay'] + '\x20ms'), await _0x13c894(_0x20363f['delay']);
        }
    }
}
async function _0x287d50(_0x330235, _0x278dd9, _0x5ea2e9, _0x1b87d3) {
    _0x491b02['use'](_0x5b4fc0()), _0x491b02['use'](_0x500fb3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x20363f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x59aeef = 0x0; _0x59aeef < _0x5ea2e9['length']; _0x59aeef++) {
        var _0x4b6f49 = '', _0x4bae67 = 0x0;
        _0x4b46b5(_0x278dd9['name'] + '\x20Task\x20' + (_0x59aeef + 0x1) + '\x20/\x20' + _0x5ea2e9['length'] + '\x20||\x20File:\x20' + _0xad8e8d + '\x20Proxies:\x20' + _0x2db857), await _0x1726ee(_0x5ea2e9, _0x59aeef);
        if (_0x5ea2e9[_0x59aeef]['Email'] == '' || _0x5ea2e9[_0x59aeef]['FirstName'] == '' || _0x5ea2e9[_0x59aeef]['LastName'] == '') {
            console['log'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x59aeef + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x20363f['useRandomProxy'] = ![])
            var _0x143fbd = _0x1b87d3[_0x59aeef]['split'](':');
        else
            var _0x592693 = Math['round'](Math['random']() * (_0x1b87d3['length'] - 0x1)), _0x143fbd = _0x1b87d3[_0x592693]['split'](':');
        const _0x84245c = await _0x491b02['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x143fbd[0x0] + ':' + _0x143fbd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x57caea = await _0x84245c['newPage']();
            await _0x57caea['authenticate']({
                'username': '' + _0x143fbd[0x2],
                'password': '' + _0x143fbd[0x3]
            }), await _0x57caea['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x599664() + '\x20[' + _0x278dd9['name'] + ']\x20Task\x20' + (_0x59aeef + 0x1) + '\x20:\x20Getting\x20Session'), await _0x57caea['setRequestInterception'](!![]), _0x57caea['on']('request', _0x111697 => {
                _0x111697['resourceType']() === 'image' || _0x111697['resourceType']() === 'font' || _0x111697['resourceType']() === 'media' ? _0x111697['abort']() : _0x111697['continue']();
            }), await _0x57caea['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x57caea['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x57caea['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x13c894(0x258), await _0x57caea['waitForSelector']('#CustomerEmail'), console['log'](_0x599664() + '\x20[' + _0x278dd9['name'] + ']\x20Task\x20' + (_0x59aeef + 0x1) + '\x20:\x20Logging\x20in..'), await _0x57caea['type']('#CustomerEmail', '' + _0x5ea2e9[_0x59aeef]['Email']), await _0x13c894(0x12c), await _0x57caea['type']('#CustomerPassword', '' + _0x5ea2e9[_0x59aeef]['Password']), await _0x13c894(0x226), await _0x57caea['$eval']('#customer_login', _0x3e80af => _0x3e80af['submit']()), await _0x13c894(0x7d0), await _0x57caea['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x599664() + '\x20[' + _0x278dd9['name'] + ']\x20Task\x20' + (_0x59aeef + 0x1) + '\x20:\x20' + _0x46322d['cyan']('Solving\x20Captcha')), await _0x57caea['solveRecaptchas'](), console['log'](_0x599664() + '\x20[' + _0x278dd9['name'] + ']\x20Task\x20' + (_0x59aeef + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x57caea['$eval']('.shopify-challenge__container\x20>\x20form', _0x261e90 => _0x261e90['submit']());
            try {
                await _0x57caea['waitForSelector']('.nav-account'), await _0x13c894(0x4b0);
            } catch {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x278dd9['name'] + ']\x20Task\x20' + (_0x59aeef + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x57caea['goto']('' + _0x5ea2e9[_0x59aeef]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x13c894(0xbb8), console['log'](_0x599664() + '\x20[' + _0x278dd9['name'] + ']\x20Task\x20' + (_0x59aeef + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x57caea['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x57caea['click']('.product-select-variant-wrapper'), await _0x13c894(0x320), await _0x57caea['click']('li.product-select-variant__value[data-size=\x22' + _0x5ea2e9[_0x59aeef]['Size'] + '\x22]'), await _0x13c894(0x384), await _0x57caea['$eval']('#AddToCartForm-product-template-raffle', _0x2e8788 => _0x2e8788['submit']()), await _0x57caea['waitForSelector']('.cart-order-summary__content'), await _0x13c894(0x514), await _0x57caea['goto']('https://drop.slamjam.com/checkout'), await _0x13c894(0x514), await _0x57caea['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x599664() + '\x20[' + _0x278dd9['name'] + ']\x20Task\x20' + (_0x59aeef + 0x1) + '\x20:\x20Filling\x20Information'), await _0x57caea['select']('#checkout_shipping_address_country', '' + _0x5ea2e9[_0x59aeef]['Country']), await _0x13c894(0x200), await _0x57caea['waitForSelector']('#checkout_shipping_address_first_name'), await _0x57caea['type']('#checkout_shipping_address_first_name', '' + _0x5ea2e9[_0x59aeef]['FirstName']), await _0x13c894(0x237), await _0x57caea['type']('#checkout_shipping_address_last_name', '' + _0x5ea2e9[_0x59aeef]['LastName']), await _0x13c894(0x1e0), await _0x57caea['type']('#checkout_shipping_address_address1', _0x5ea2e9[_0x59aeef]['Address1'] + '\x20' + _0x5ea2e9[_0x59aeef]['HouseNumber']), await _0x13c894(0x514), await _0x57caea['type']('#checkout_shipping_address_address2', '' + _0x5ea2e9[_0x59aeef]['Address2']), await _0x13c894(0x514);
            _0x5ea2e9[_0x59aeef]['Postcode'] == undefined && (_0x5ea2e9[_0x59aeef]['Postcode'] = _0x5ea2e9[_0x59aeef]['Zip']);
            await _0x57caea['type']('#checkout_shipping_address_zip', '' + _0x5ea2e9[_0x59aeef]['Postcode']), await _0x13c894(0x2bc), await _0x57caea['type']('#checkout_shipping_address_city', '' + _0x5ea2e9[_0x59aeef]['City']), await _0x13c894(0x320), await _0x57caea['type']('#checkout_shipping_address_phone', '' + _0x5ea2e9[_0x59aeef]['Phone']), await _0x13c894(0x320), await _0x57caea['click']('#continue_button'), await _0x13c894(0xbb8), await _0x57caea['waitForSelector']('.summary-title'), await _0x13c894(0x320), await _0x57caea['click']('#continue_button'), await _0x13c894(0x320), console['log'](_0x599664() + '\x20[' + _0x278dd9['name'] + ']\x20Task\x20' + (_0x59aeef + 0x1) + '\x20:\x20Fetching\x20Payment'), await _0x57caea['waitForSelector']('#checkout_credit_card_vault'), await _0x13c894(0x3e8);
            var _0x100b15 = await _0x57caea['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x1c3731 = await _0x100b15['contentFrame']();
            await _0x1c3731['click']('#number'), await _0x13c894(0x3e8), await _0x1c3731['type']('#checkout_credit_card_vault', '' + _0x5ea2e9[_0x59aeef]['CardNumber'], { 'delay': 0x78 }), _0x100b15 = await _0x57caea['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x1c3731 = await _0x100b15['contentFrame'](), await _0x13c894(0x1c2), await _0x1c3731['click']('#name'), await _0x13c894(0x1f4), await _0x57caea['type']('div[data-card-field-placeholder=\x22Name\x20on\x20card\x22]', '' + _0x5ea2e9[_0x59aeef]['NameOnCard'], { 'delay': 0x78 }), _0x100b15 = await _0x57caea['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x1c3731 = await _0x100b15['contentFrame'](), await _0x13c894(0x1c2), await _0x1c3731['click']('#expiry'), await _0x13c894(0x1f4), await _0x57caea['type']('div[data-card-field-placeholder=\x22Expiration\x20date\x20(MM\x20/\x20YY)\x22]', '' + _0x5ea2e9[_0x59aeef]['ExpiryDate'], { 'delay': 0x78 }), _0x100b15 = await _0x57caea['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x1c3731 = await _0x100b15['contentFrame'](), await _0x13c894(0x1c2), await _0x1c3731['click']('#verification_value'), await _0x13c894(0x1f4), await _0x57caea['type']('div[data-card-field-placeholder=\x22Security\x20code\x22]', '' + _0x5ea2e9[_0x59aeef]['CVV'], { 'delay': 0x78 }), console['log']('before\x20eval'), await _0x57caea['$eval']('#accepts-flag-raffle', _0x2eb4ef => _0x2eb4ef['click']()), await _0x57caea['evaluate'](() => {
                document['querySelector']('#accepts-flag-raffle')['parentElement']['click']();
            }), console['log']('before\x20page.click'), await _0x57caea['click']('#accepts-flag-raffle'), await _0x57caea['click']('#accepts-flag-raffle'), await _0x13c894(0x7d0), console['log']('before\x20before\x20form'), await _0x57caea['$eval']('.edit_checkout.animate-floating-labels', _0x4c7fce => _0x4c7fce['submit']()), await _0x13c894(0x7d0), await _0x57caea['waitForSelector']('div[data-step=\x22review\x22]'), await _0x13c894(0x5dc), await _0x57caea['$eval']('.edit_checkout.animate-floating-labels', _0x2aeb1c => _0x2aeb1c['submit']()), await _0x13c894(0xf4240);
            var _0x3f91d5 = await _0x17fd16(_0x5ea2e9[_0x59aeef], _0x278dd9, 'dev', ![]), _0x4ac4d6 = await _0x17fd16(_0x5ea2e9[_0x59aeef], _0x278dd9, 'pub', ![]);
            const _0x2aaa3b = {
                'succesDEVMSG': { 'embeds': [_0x3f91d5] },
                'succesPUBMSG': { 'embeds': [_0x4ac4d6] }
            };
            try {
                _0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '' && await _0x2d3c9d(_0x20363f['webhook'], _0x2aaa3b['succesDEVMSG']), await _0x13c894(0xc8), await _0x2d3c9d(_0x11a452, _0x2aaa3b['succesDEVMSG']), await _0x13c894(0xc8), await _0x2d3c9d(_0x3f49d0, _0x2aaa3b['succesPUBMSG']);
            } catch (_0x54dbc1) {
                console['log'](_0x46322d['yellow'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x59aeef + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x54dbc1));
            }
        } catch (_0x444515) {
            console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x59aeef + 0x1) + '\x20:\x20' + _0x444515)), _0x4b6f49 = 'yes';
        } finally {
            _0x84245c && _0x84245c['close']();
            if (_0x4b6f49 == 'yes' && _0x4bae67 != 0x5) {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x278dd9['name'] + ']\x20Task\x20' + (_0x59aeef + 0x1) + '\x20:\x20Retrying')), _0x59aeef = _0x59aeef - 0x1, _0x4bae67 = _0x4bae67 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x20363f['delay'] + '\x20ms'), await _0x13c894(_0x20363f['delay']);
        }
    }
}
async function _0x17f3cb(_0x529401, _0x2ae7d6, _0x2800fe) {
    var _0x528f77 = ![], _0x226b31 = ![];
    if (_0x20363f['captchaKey'] == '' || _0x20363f['captchaKey'] == undefined)
        return console['log'](_0x46322d['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x491b02['use'](_0x5b4fc0()), _0x491b02['use'](_0x500fb3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x20363f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xedb7ad = 0x0; _0xedb7ad < _0x2ae7d6['length']; _0xedb7ad++) {
        var _0x3affc3, _0x4a1880 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x2ae7d6[_0xedb7ad]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2ae7d6[_0xedb7ad]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x2cd057
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x20363f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x316d08
                }
            ]
        }];
        const _0x18ca70 = { 'embeds': _0x4a1880 };
        _0x4b46b5(_0x529401['name'] + '\x20Task\x20' + (_0xedb7ad + 0x1) + '\x20/\x20' + _0x2ae7d6['length'] + '\x20||\x20File:\x20' + _0xad8e8d + '\x20Proxies:\x20' + _0x2db857), await _0x1726ee(_0x2ae7d6, _0xedb7ad);
        var _0x1404c3 = await _0x17fd16(_0x2ae7d6[_0xedb7ad], _0x529401, 'dev', ![]), _0x105e7e = await _0x17fd16(_0x2ae7d6[_0xedb7ad], _0x529401, 'pub', ![]);
        const _0x191dbc = {
            'succesDEVMSG': { 'embeds': [_0x1404c3] },
            'succesPUBMSG': { 'embeds': [_0x105e7e] }
        };
        if (_0x2ae7d6[_0xedb7ad]['Email'] == '' || _0x2ae7d6[_0xedb7ad]['Url'] == '' || _0x2ae7d6[_0xedb7ad]['FirstName'] == '' || _0x2ae7d6[_0xedb7ad]['LastName'] == '') {
            console['log'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0xedb7ad + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x20363f['useRandomProxy'] = ![])
            var _0x4c5330 = _0x2800fe[_0xedb7ad]['split'](':');
        else
            var _0x30ce6d = Math['round'](Math['random']() * (_0x2800fe['length'] - 0x1)), _0x4c5330 = _0x2800fe[_0x30ce6d]['split'](':');
        const _0x1758f0 = await _0x491b02['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4c5330[0x0] + ':' + _0x4c5330[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2083ed = await _0x1758f0['newPage']();
            await _0x2083ed['authenticate']({
                'username': '' + _0x4c5330[0x2],
                'password': '' + _0x4c5330[0x3]
            }), console['log'](_0x599664() + '\x20[' + _0x529401['name'] + ']\x20Task\x20' + (_0xedb7ad + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2083ed['setRequestInterception'](!![]), _0x2083ed['on']('request', _0x3dbed3 => {
                _0x3dbed3['resourceType']() === 'image' || _0x3dbed3['resourceType']() === 'font' || _0x3dbed3['resourceType']() === 'media' ? _0x3dbed3['abort']() : _0x3dbed3['continue']();
            }), await _0x2083ed['goto']('' + _0x2ae7d6[_0xedb7ad]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x2083ed['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x599664() + '\x20[' + _0x529401['name'] + ']\x20Task\x20' + (_0xedb7ad + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2083ed['type']('#comp_firstname', '' + _0x2ae7d6[_0xedb7ad]['FirstName']), await _0x2083ed['waitForSelector']('#comp_lastname'), await _0x2083ed['type']('#comp_lastname', '' + _0x2ae7d6[_0xedb7ad]['LastName']), await _0x2083ed['waitForSelector']('#comp_email'), await _0x2083ed['type']('#comp_email', '' + _0x2ae7d6[_0xedb7ad]['Email']), await _0x2083ed['waitForSelector']('#comp_paypalemail'), await _0x2083ed['type']('#comp_paypalemail', '' + _0x2ae7d6[_0xedb7ad]['Email']), await _0x2083ed['waitForSelector']('#comp_mobile_end'), await _0x2083ed['type']('#comp_mobile_end', '' + _0x2ae7d6[_0xedb7ad]['Phone']), await _0x2083ed['waitForSelector']('#comp_dob'), await _0x2083ed['type']('#comp_dob', '08/09/1992'), console['log'](_0x599664() + '\x20[' + _0x529401['name'] + ']\x20Task\x20' + (_0xedb7ad + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x2ae7d6[_0xedb7ad]['Size'] == 'RANDOM') {
                const _0x52413e = await _0x2083ed['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x21dddd => {
                    return _0x21dddd['map'](_0x449711 => _0x449711['value']);
                });
                var _0x61fa57 = Math['round'](Math['random']() * (_0x52413e['length'] - 0x2));
                await _0x2083ed['select']('#shoesize', _0x52413e[_0x61fa57 + 0x1]), await _0x13c894(0x3e8);
            } else {
                const _0x45277b = await _0x2083ed['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x19bc37 => {
                    return _0x19bc37['map'](_0x4b0978 => _0x4b0978['innerText']);
                }), _0x3c65e2 = await _0x2083ed['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x46210e => {
                    return _0x46210e['map'](_0x9e4d9e => _0x9e4d9e['value']);
                });
                var _0x20c449 = _0x2ae7d6[_0xedb7ad]['Size'];
                for (var _0x1d7e91 = 0x1; _0x1d7e91 < _0x3c65e2['length']; _0x1d7e91++) {
                    var _0x66bfde = _0x45277b[_0x1d7e91]['split']('\x20')[0x0];
                    if (_0x66bfde == _0x20c449) {
                        await _0x2083ed['select']('#shoesize', _0x3c65e2[_0x1d7e91]);
                        break;
                    } else {
                        if (_0x1d7e91 + 0x1 == _0x3c65e2['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x2083ed['waitForSelector']('#comp_address1'), await _0x2083ed['type']('#comp_address1', _0x2ae7d6[_0xedb7ad]['Address1'] + '\x20' + _0x2ae7d6[_0xedb7ad]['HouseNumber']), await _0x2083ed['waitForSelector']('#comp_address2'), await _0x2083ed['type']('#comp_address2', '' + _0x2ae7d6[_0xedb7ad]['Address2']), await _0x2083ed['waitForSelector']('#comp_address2'), await _0x2083ed['type']('#comp_address3', '' + _0x2ae7d6[_0xedb7ad]['City']), await _0x2083ed['waitForSelector']('#comp_postcode'), await _0x2083ed['type']('#comp_postcode', '' + _0x2ae7d6[_0xedb7ad]['Zip']), console['log'](_0x599664() + '\x20[' + _0x529401['name'] + ']\x20Task\x20' + (_0xedb7ad + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x13c894(0x4b0), await _0x2083ed['click']('label#emailhold'), await _0x13c894(0x5dc), await _0x2083ed['click']('#preauth_tandc_email\x20>\x20label'), await _0x13c894(0x5dc), await _0x2083ed['click']('#submit'), await _0x2083ed['waitForSelector']('#paymentWrap'), console['log'](_0x599664() + '\x20[' + _0x529401['name'] + ']\x20Task\x20' + (_0xedb7ad + 0x1) + '\x20:\x20' + _0x46322d['blue']('Awaiting\x20Paypal\x20Payment')), _0x1758f0['on']('targetcreated', async _0x51561 => {
                if (_0x51561['type']() === 'page') {
                    const _0x437bf0 = await _0x51561['page']();
                    async function _0x540281() {
                        try {
                            await _0x2083ed['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x226b31 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x50e7d0() {
                        try {
                            await _0x2083ed['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x528f77 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x50e7d0(), _0x540281(), await _0x13c894(0x493e0);
                }
            });
            async function _0x391d12() {
                for (let _0x30da45 = 0x0; _0x30da45 < 0x12c; _0x30da45++) {
                    if (_0x528f77 == !![]) {
                        console['log'](_0x46322d['green'](_0x599664() + '\x20[' + _0x529401['name'] + ']\x20Task\x20' + (_0xedb7ad + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '')
                            try {
                                await _0x2d3c9d(_0x20363f['webhook'], _0x191dbc['succesDEVMSG']);
                            } catch {
                            }
                        await _0x13c894(0xc8), await _0x2d3c9d(_0x11a452, _0x191dbc['succesDEVMSG']), await _0x13c894(0xc8);
                        try {
                            await _0x2d3c9d(_0x3f49d0, _0x191dbc['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x226b31)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x13c894(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x13c894(0xbb8), await _0x2083ed['click']('.zoid-outlet'), await _0x13c894(0x7d0), await _0x391d12();
        } catch (_0x2b94b7) {
            console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x529401['name'] + ']\x20Task\x20' + (_0xedb7ad + 0x1) + '\x20:\x20' + _0x2b94b7)), _0x3affc3 = '' + _0x2b94b7;
            var _0x16a674 = await _0x17fd16(_0x2ae7d6[_0xedb7ad], _0x529401, 'dev', !![], _0x3affc3);
            _0x191dbc['errorDEV'] = { 'embeds': [_0x16a674] }, _0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '' && await _0x2d3c9d(_0x20363f['webhook'], _0x191dbc['errorDEV']), await _0x2d3c9d(_0x31debd, _0x191dbc['errorDEV']);
        } finally {
            _0x1758f0 && _0x1758f0['close'](), console['log']('Waiting\x20for\x20' + _0x20363f['delay'] + '\x20ms'), await _0x13c894(_0x20363f['delay']);
        }
    }
}
async function _0x4e577d(_0x1c3d37, _0x1299cb, _0x2953db) {
    _0x491b02['use'](_0x5b4fc0()), _0x491b02['use'](_0x500fb3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x20363f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5eec9f = 0x0; _0x5eec9f < _0x1299cb['length']; _0x5eec9f++) {
        _0x4b46b5(_0x1c3d37['name'] + '\x20Task\x20' + (_0x5eec9f + 0x1) + '\x20/\x20' + _0x1299cb['length'] + '\x20||\x20File:\x20' + _0xad8e8d + '\x20Proxies:\x20' + _0x2db857);
        var _0x207535 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2cd057
                },
                {
                    'name': 'Product',
                    'value': '' + _0x1299cb[_0x5eec9f]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1299cb[_0x5eec9f]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x20363f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x20363f['version']
                }
            ]
        }];
        const _0x35aa9f = { 'embeds': _0x207535 };
        await _0x1726ee(_0x1299cb, _0x5eec9f);
        if (_0x1299cb[_0x5eec9f]['Email'] == '' || _0x1299cb[_0x5eec9f]['Password'] == '' || _0x1299cb[_0x5eec9f]['FirstName'] == '' || _0x1299cb[_0x5eec9f]['LastName'] == '') {
            console['log'](_0x599664() + '\x20[' + _0x1c3d37['name'] + ']\x20Task\x20' + (_0x5eec9f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x1299cb[_0x5eec9f]['Password'] == '' || _0x1299cb[_0x5eec9f]['Password'] == undefined) && (_0x1299cb[_0x5eec9f]['Password'] = 'ErehsaWonRaj1!');
        if (_0x20363f['useRandomProxy'] = ![])
            var _0x12e73f = _0x2953db[_0x5eec9f]['split'](':');
        else
            var _0x4dcfd8 = Math['round'](Math['random']() * (_0x2953db['length'] - 0x1)), _0x12e73f = _0x2953db[_0x4dcfd8]['split'](':');
        const _0x2100ff = await _0x491b02['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x12e73f[0x0] + ':' + _0x12e73f[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5ac56e = await _0x2100ff['newPage']();
            await _0x5ac56e['authenticate']({
                'username': '' + _0x12e73f[0x2],
                'password': '' + _0x12e73f[0x3]
            }), console['log'](_0x599664() + '\x20[' + _0x1c3d37['name'] + ']\x20Task\x20' + (_0x5eec9f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5ac56e['setRequestInterception'](!![]), _0x5ac56e['on']('request', _0x29865d => {
                _0x29865d['resourceType']() === 'image' || _0x29865d['resourceType']() === 'font' || _0x29865d['resourceType']() === 'media' ? _0x29865d['abort']() : _0x29865d['continue']();
            }), await _0x5ac56e['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x5ac56e['goto']('' + _0x1299cb[_0x5eec9f]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x5ac56e['waitForSelector']('#btnPdpAtb'), console['log'](_0x599664() + '\x20[' + _0x1c3d37['name'] + ']\x20Task\x20' + (_0x5eec9f + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x1299cb[_0x5eec9f]['Size']);
            const _0x4bcc9b = await _0x5ac56e['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x479ac9 => {
                return _0x479ac9['map'](_0x20b64a => _0x20b64a['innerText']);
            }), _0xeac2db = await _0x5ac56e['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x58ade4 = ![];
            if (_0x1299cb[_0x5eec9f]['Size'] == 'RANDOM') {
                var _0x228e19 = Math['round'](Math['random']() * (_0xeac2db['length'] - 0x1));
                await _0xeac2db[_0x228e19]['click']();
            } else
                for (var _0x551913 = 0x0; _0x551913 < _0x4bcc9b['length']; _0x551913++) {
                    if (_0x4bcc9b[_0x551913] != _0x1299cb[_0x5eec9f]['Size'])
                        continue;
                    try {
                        await _0xeac2db[_0x551913]['click']();
                    } catch {
                        console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x1c3d37['name'] + ']\x20Task\x20' + (_0x5eec9f + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x58ade4 = !![];
                    }
                }
            if (_0x58ade4)
                continue;
            await _0x13c894(0x578), await _0x5ac56e['click']('#btnPdpAtb'), await _0x5ac56e['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x13c894(0x3e8), console['log'](_0x599664() + '\x20[' + _0x1c3d37['name'] + ']\x20Task\x20' + (_0x5eec9f + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x5ac56e['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x5ac56e['waitForSelector']('#email'), await _0x5ac56e['type']('#email', _0x1299cb[_0x5eec9f]['Email']), await _0x13c894(0x226), await _0x5ac56e['click']('#guest-submit'), await _0x13c894(0x1b58), console['log'](_0x599664() + '\x20[' + _0x1c3d37['name'] + ']\x20Task\x20' + (_0x5eec9f + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5ac56e['waitForSelector']('#firstname'), await _0x5ac56e['type']('#firstname', _0x1299cb[_0x5eec9f]['FirstName'], 0x1f4), await _0x13c894(0x190), await _0x5ac56e['waitForSelector']('#surname'), await _0x5ac56e['type']('#surname', _0x1299cb[_0x5eec9f]['LastName'], 0x1f4), await _0x13c894(0x190), await _0x5ac56e['waitForSelector']('#mobile'), await _0x5ac56e['type']('#mobile', _0x1299cb[_0x5eec9f]['Phone'], 0x1f4), await _0x13c894(0x190), await _0x5ac56e['click']('#enterManualDiv'), await _0x13c894(0x5dc), await _0x5ac56e['waitForSelector']('#address1'), await _0x5ac56e['type']('#address1', _0x1299cb[_0x5eec9f]['Address1'] + '\x20' + _0x1299cb[_0x5eec9f]['HouseNumber'], 0x226), await _0x13c894(0x384), await _0x5ac56e['waitForSelector']('#address2'), await _0x5ac56e['type']('#address2', '' + _0x1299cb[_0x5eec9f]['Address2'], 0x226), await _0x13c894(0x320);
            const _0x315b19 = await _0x5ac56e['$$eval']('#countryselect_view3\x20>\x20option', _0x35495f => {
                return _0x35495f['map'](_0x188609 => _0x188609['value']);
            });
            var _0xfe44fc;
            for (var _0x255691 = 0x0; _0x255691 < _0x315b19['length']; _0x255691++) {
                if (_0x315b19[_0x255691]['startsWith']('' + _0x1299cb[_0x5eec9f]['Country'])) {
                    _0xfe44fc = _0x315b19[_0x255691];
                    break;
                }
                continue;
            }
            await _0x5ac56e['select']('#countryselect_view3', '' + _0xfe44fc), await _0x5ac56e['waitForSelector']('#address4'), await _0x5ac56e['type']('#address4', '' + _0x1299cb[_0x5eec9f]['City'], 0x1f4), await _0x13c894(0x384), await _0x5ac56e['waitForSelector']('#postcode'), await _0x5ac56e['type']('#postcode', '' + _0x1299cb[_0x5eec9f]['Zip'], 0x1f4), await _0x13c894(0x4b0);
            const _0x1d18d6 = await _0x5ac56e['url']();
            console['log'](_0x599664() + '\x20[' + _0x1c3d37['name'] + ']\x20Task\x20' + (_0x5eec9f + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x14d786 = _0x1d18d6['split']('?')[0x1], _0x255010 = await _0x5ac56e['$']('#co_address_submit');
            await _0x255010['evaluate'](_0x345b48 => _0x345b48['click']()), await _0x13c894(0x1388), await _0x5ac56e['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x14d786), console['log'](_0x599664() + '\x20[' + _0x1c3d37['name'] + ']\x20Task\x20' + (_0x5eec9f + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x5ac56e['waitForSelector']('#paymentbuttons'), await _0x13c894(0x1388), await _0x5ac56e['click']('#paymentbuttons\x20>\x20div'), await _0x13c894(0x1c2), await _0x5ac56e['waitForSelector']('#card-number'), await _0x5ac56e['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x258a11 = await _0x5ac56e['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x18562e = await _0x258a11['contentFrame']();
            await _0x18562e['waitForSelector']('.InputContainer'), await _0x18562e['click']('.InputContainer\x20>\x20input'), await _0x13c894(0x578), await _0x5ac56e['type']('#card-number', '' + _0x1299cb[_0x5eec9f]['CreditNumber']), await _0x13c894(0xfa), await _0x5ac56e['type']('#card-expiry', '' + _0x1299cb[_0x5eec9f]['ExpiryDate']), await _0x13c894(0xfa), await _0x5ac56e['type']('#card-cvc', '' + _0x1299cb[_0x5eec9f]['CVV']), await _0x13c894(0x7d0), await _0x5ac56e['click']('#card-button'), console['log'](_0x599664() + '\x20[' + _0x1c3d37['name'] + ']\x20Task\x20' + (_0x5eec9f + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5ac56e['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x46322d['green'](_0x599664() + '\x20[' + _0x1c3d37['name'] + ']\x20Task\x20' + (_0x5eec9f + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x2d3c9d(_0x11a452, _0x35aa9f);
            } catch {
                console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x1c3d37['name'] + ']\x20Task\x20' + (_0x5eec9f + 0x1) + '\x20:\x203DS\x20Failed')), _0x207535[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x207535[0x0]['description'] = '3DS\x20Failed', await _0x2d3c9d(_0x31debd, _0x35aa9f);
            }
        } catch (_0x1ef53f) {
            console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x1c3d37['name'] + ']\x20Task\x20' + (_0x5eec9f + 0x1) + '\x20:\x20' + _0x1ef53f)), _0x207535[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x207535[0x0]['description'] = '' + _0x1ef53f, await _0x2d3c9d(_0x31debd, _0x35aa9f);
        } finally {
            _0x2100ff && _0x2100ff['close']();
            if (_0x5eec9f + 0x1 == _0x1299cb['length']) {
                console['log'](_0x46322d['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x13c894(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x20363f['AfewDelay'] + '\x20ms'), await _0x13c894(_0x20363f['AfewDelay']);
        }
    }
}
async function _0x3f5cb7(_0x499e92, _0x43c0ee, _0x4742ee, _0x451c13, _0x26cbe4) {
    var _0x129d56, _0x781ae1 = {}, _0x220b83 = [], _0x3420fd = {}, _0x236e7d = [
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
    !_0x451c13 && (_0x451c13 = {});
    if (_0x43c0ee != 'ver') {
        _0x4b46b5(_0x4742ee['name'] + '\x20Task\x20' + (_0x499e92 + 0x1) + '\x20/\x20' + _0x451c13['length'] + '\x20||\x20File:\x20' + _0xad8e8d + '\x20Proxies:\x20' + _0x2db857), await _0x1726ee(_0x451c13, _0x499e92), _0x220b83 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x2cd057
                },
                {
                    'name': 'Size',
                    'value': '' + _0x451c13[_0x499e92]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x20363f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x316d08
                }
            ]
        }], _0x3420fd = { 'embeds': _0x220b83 }, _0x781ae1 = _0x4742ee['data'];
        _0x43c0ee == 'exp' ? _0x781ae1['data']['attributes']['email'] = '' + _0x451c13[_0x499e92]['FirstName'] + _0x451c13[_0x499e92]['LastName'] + _0x20363f['catchall'] : _0x781ae1['data']['attributes']['email'] = '' + _0x451c13[_0x499e92]['Email'];
        if (_0x451c13[_0x499e92]['Size'] == 'RANDOM') {
        }
        _0x781ae1['data']['attributes']['properties']['$first_name'] = '' + _0x451c13[_0x499e92]['FirstName'], _0x781ae1['data']['attributes']['properties']['$last_name'] = '' + _0x451c13[_0x499e92]['LastName'], _0x781ae1['data']['attributes']['properties']['$address1'] = _0x451c13[_0x499e92]['Address1'] + '\x20' + _0x451c13[_0x499e92]['Address2'] + '\x20' + _0x451c13[_0x499e92]['HouseNumber'], _0x781ae1['data']['attributes']['properties']['$zip'] = '' + _0x451c13[_0x499e92]['Zip'], _0x781ae1['data']['attributes']['properties']['$city'] = '' + _0x451c13[_0x499e92]['City'], _0x781ae1['data']['attributes']['properties']['$country'] = '' + _0x451c13[_0x499e92]['Country'], _0x781ae1['data']['attributes']['properties']['Size'] = '' + _0x451c13[_0x499e92]['Size'], _0x781ae1['data']['attributes']['properties']['$phone_number'] = '' + _0x451c13[_0x499e92]['Phone'], _0x781ae1['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x451c13[_0x499e92]['Follower'];
    }
    if (_0x20363f['useRandomProxy'] = ![])
        var _0x4870c6 = _0x26cbe4[_0x499e92]['split'](':');
    else
        var _0x1a0ba5 = Math['round'](Math['random']() * (_0x26cbe4['length'] - 0x1)), _0x4870c6 = _0x26cbe4[_0x1a0ba5]['split'](':');
    var _0x2fe972 = {
        'jar': _0x9b0eab,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x4742ee['url'],
        'headers': _0x4742ee['headers'],
        'body': JSON['stringify'](_0x781ae1),
        'proxy': 'http://' + _0x4870c6[0x2] + ':' + _0x4870c6[0x3] + '@' + _0x4870c6[0x0] + ':' + _0x4870c6[0x1]
    };
    return _0x43c0ee != 'ver' && (_0x2fe972['url'] = _0x4742ee['url'], _0x2fe972['headers'] = _0x4742ee['headers']), _0x43c0ee == 'ver' && (_0x2fe972['method'] = 'GET'), new Promise(function (_0x26e071, _0x50fe24) {
        callback = async (_0x346aa5, _0x3e1bac, _0x42c4d8) => {
            if (!_0x346aa5 && _0x3e1bac['statusCode'] == 0xca || !_0x346aa5 && _0x3e1bac['statusCode'] == 0xc8) {
                if (_0x43c0ee != 'ver') {
                    var _0x4b9fc3 = await _0x17fd16(_0x451c13[_0x499e92], _0x4742ee, 'dev', ![]), _0x160df5 = await _0x17fd16(_0x451c13[_0x499e92], _0x4742ee, 'pub', ![]);
                    const _0x53e66a = {
                        'succesDEVMSG': { 'embeds': [_0x4b9fc3] },
                        'succesPUBMSG': { 'embeds': [_0x160df5] }
                    };
                    if (_0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '')
                        try {
                            await _0x2d3c9d(_0x20363f['webhook'], _0x53e66a['succesDEVMSG']);
                        } catch {
                        }
                    await _0x13c894(0xc8), await _0x2d3c9d(_0x11a452, _0x53e66a['succesDEVMSG']), await _0x13c894(0xc8);
                    try {
                        await _0x2d3c9d(_0x3f49d0, _0x53e66a['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x26e071(console['log'](_0x46322d['green'](_0x599664() + '\x20[' + _0x4742ee['name'] + ']\x20Task\x20' + (_0x499e92 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x43c0ee != 'ver') {
                    var _0x2eea99 = '' + _0x346aa5, _0x29bfbc = await _0x17fd16(_0x451c13[_0x499e92], _0x4742ee, 'dev', !![], _0x2eea99), _0x53794a = {};
                    _0x53794a['errorDEV'] = { 'embeds': [_0x29bfbc] }, _0x20363f['webhook'] != undefined && _0x20363f['webhook'] != '' && await _0x2d3c9d(_0x20363f['webhook'], _0x53794a['errorDEV']), await _0x2d3c9d(_0x31debd, _0x53794a['errorDEV']);
                }
                _0x50fe24(console['log'](_0x599664() + '\x20[' + _0x4742ee['name'] + ']\x20Task\x20' + (_0x499e92 + 0x1) + ':\x20' + _0x346aa5));
            }
        };
        try {
            _0x43c0ee != 'ver' && console['log'](_0x599664() + '\x20[' + _0x4742ee['name'] + ']\x20Task\x20' + (_0x499e92 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x781ae1['data']['attributes']['email']), _0x27b086(_0x2fe972, callback);
        } catch (_0x387c9b) {
            console['log'](_0x599664() + '\x20Task\x20' + (_0x499e92 + 0x1) + ':\x20' + _0x387c9b);
        }
    });
}
;
async function _0x19d6b3() {
    await _0xcbe983(), console['clear']();
    if (_0x316d08 != 'devkey') {
        let _0x1a6693 = await _0x58115b['autoUpdate']();
        if (_0x1a6693 === 'yes')
            return _0x54a12c('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x9a6f24 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x13c894(0x2710);
        ;
    }
    await _0x39d378(_0x9a6f24);
    if (_0x4ee7c8 === ![])
        return console['log']('Closing\x20Browser'), await _0x13c894(0xbb8);
    else
        try {
            var _0x1264a7 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x2cd057
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x316d08
                    }
                ]
            }];
            const _0x3b9b31 = { 'embeds': _0x1264a7 };
            await _0x2d3c9d(_0x11e1f1, _0x3b9b31);
            async function _0x85ec01() {
                _0x4b46b5('JRaffles\x20' + _0x316d08), console['clear'](), console['log']('Welcome\x20to\x20' + _0x46322d['cyan']('JRaffles();') + '\x20' + _0x316d08), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x1653d6 = 0x0; _0x1653d6 < _0x3d241d['length']; _0x1653d6++) {
                    if (_0x3d241d[_0x1653d6]['name'] === 'Reload\x20Settings' || _0x3d241d[_0x1653d6]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x1653d6 + ')\x20[' + _0x3d241d[_0x1653d6]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x3d241d['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x3d241d['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x5e0813();
                if (taskModule > _0x3d241d['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x13c894(0x3e8), _0x85ec01();
                if (_0x3d241d[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x471d1e(_0x3d241d[taskModule]['modules']);
                    var _0x2a0623 = _0x3d241d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x135b45 = await _0x46cf47(), _0x36cdbc = await _0x2062b9();
                    if (_0x36cdbc[0x0]['Url'] == '' || _0x36cdbc[0x0]['Url'] == undefined) {
                        await _0x3ca076(_0x135b45);
                        var _0x2ac2c2 = await _0x3ebcfe();
                        return await afewFunction('' + _0x5a594b[_0x2ac2c2], 'nor', _0x2a0623, _0x36cdbc, _0x135b45), _0x85ec01();
                    }
                    return await afewFunction(_0x36cdbc[0x0]['Url'], 'nor', _0x2a0623, _0x36cdbc, _0x135b45), _0x85ec01();
                } else {
                    if (_0x3d241d[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x471d1e(_0x3d241d[taskModule]['modules']);
                        var _0x2a0623 = _0x3d241d[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x135b45 = await _0x46cf47(), _0x3e30d8 = await _0x2062b9();
                            console['log']('Starting\x20' + _0x3e30d8['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x3d03f3 = 0x0; _0x3d03f3 < _0x3e30d8['length']; _0x3d03f3++) {
                                console['log'](_0x599664() + '\x20[' + _0x2a0623['name'] + ']\x20Task\x20' + (_0x3d03f3 + 0x1) + ':\x20Getting\x20Session'), await _0x107245(_0x3d03f3, 'nor', _0x2a0623, _0x3e30d8, _0x135b45), console['log'](_0x599664() + '\x20[' + _0x2a0623['name'] + ']\x20Sleeping\x20for\x20' + _0x20363f['MahaDelay'] + '\x20ms'), await _0x13c894(_0x20363f['MahaDelay']);
                            }
                            ;
                            return _0x85ec01();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x135b45 = await _0x46cf47();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x38a2e4(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x3d03f3 = 0x0; _0x3d03f3 < links['length']; _0x3d03f3++) {
                                    _0x2a0623['url'] = links[_0x3d03f3], console['log'](_0x599664() + '\x20[' + _0x2a0623['name'] + ']\x20Task\x20' + (_0x3d03f3 + 0x1) + ':\x20Getting\x20Session'), await _0x107245(_0x3d03f3, 'ver', _0x2a0623, _0x3e30d8, _0x135b45), console['log'](_0x599664() + '\x20[' + _0x2a0623['name'] + ']\x20Sleeping\x20for\x20' + _0x20363f['verificationDelay'] + '\x20ms'), await _0x13c894(_0x20363f['verificationDelay']);
                                }
                                ;
                                return _0x85ec01();
                            }
                        }
                    } else {
                        if (_0x3d241d[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x471d1e(_0x3d241d[taskModule]['modules']);
                            var _0x2a0623 = _0x3d241d[taskModule]['modules'][taskFunction], _0x135b45 = await _0x46cf47(), _0x58fdd4 = await _0x2062b9();
                            return await _0x5f3ea9(_0x58fdd4, _0x135b45, _0x2a0623), await _0x13c894(0x1388), _0x85ec01();
                        } else {
                            if (_0x3d241d[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x471d1e(_0x3d241d[taskModule]['modules']);
                                var _0x2a0623 = _0x3d241d[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x135b45 = await _0x46cf47(), _0x163f14 = await _0x2062b9();
                                    console['log']('Starting\x20' + _0x46322d['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x3d03f3 = 0x0; _0x3d03f3 < _0x163f14['length']; _0x3d03f3++) {
                                        console['log'](_0x599664() + '\x20[' + _0x2a0623['name'] + ']\x20Task\x20' + (_0x3d03f3 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x3f5cb7(_0x3d03f3, 'nor', _0x2a0623, _0x163f14, _0x135b45);
                                        } catch (_0x1a753c) {
                                            console['log'](_0x46322d['red'](_0x599664() + '\x20[' + _0x2a0623['name'] + ']\x20Task\x20' + (_0x3d03f3 + 0x1) + ':\x20Task\x20failed\x20' + _0x1a753c));
                                        }
                                        console['log'](_0x599664() + '\x20[' + _0x2a0623['name'] + ']\x20Sleeping\x20for\x20' + _0x20363f['delay'] + '\x20ms'), await _0x13c894(_0x20363f['delay']);
                                    }
                                    return _0x85ec01();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x135b45 = await _0x46cf47();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x38a2e4(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x3d03f3 = 0x0; _0x3d03f3 < links['length']; _0x3d03f3++) {
                                            try {
                                                _0x2a0623['url'] = links[_0x3d03f3], console['log'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Task\x20' + (_0x3d03f3 + 0x1) + ':\x20Getting\x20Session'), await _0x3f5cb7(_0x3d03f3, 'ver', _0x2a0623, null, _0x135b45), console['log'](_0x599664() + '\x20[' + _0x3d241d[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x20363f['verificationDelay'] + '\x20ms'), await _0x13c894(_0x20363f['verificationDelay']);
                                            } catch (_0x48c245) {
                                                console['log'](_0x48c245), await _0x13c894(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x85ec01();
                                    }
                                }
                                ;
                            } else {
                                if (_0x3d241d[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x471d1e(_0x3d241d[taskModule]['modules']);
                                    var _0x2a0623 = _0x3d241d[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x3e1d3a('https://bouncewear.com/nl/account/register', _0x2a0623);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x3d241d[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x471d1e(_0x3d241d[taskModule]['modules']);
                                        var _0x2a0623 = _0x3d241d[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x135b45 = await _0x46cf47(), _0x2f9758 = await _0x2062b9();
                                            return await _0x230879('https://patta.nl/account/register', _0x2a0623, _0x2f9758, _0x135b45), _0x85ec01();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x135b45 = await _0x46cf47(), _0x2f9758 = await _0x2062b9();
                                                return await _0x1b2282('', _0x2a0623, _0x2f9758, _0x135b45), _0x85ec01();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x3d241d[taskModule]['name'] == 'SLAMJAM')
                                            return console['log']('inalid\x20selection'), _0x85ec01();
                                        else {
                                            if (_0x3d241d[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x471d1e(_0x3d241d[taskModule]['modules']);
                                                var _0x2a0623 = _0x3d241d[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x135b45 = await _0x46cf47(), _0x1ef725 = await _0x2062b9();
                                                    return await _0x4ef082('https://www.kickz.com/nl/login/', _0x2a0623, _0x1ef725, _0x135b45), _0x85ec01();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x135b45 = await _0x46cf47(), _0x1ef725 = await _0x2062b9();
                                                        return await _0x4c19c5(_0x2a0623, _0x1ef725, _0x135b45), _0x85ec01();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x3d241d[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x471d1e(_0x3d241d[taskModule]['modules']);
                                                    var _0x2a0623 = _0x3d241d[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x135b45 = await _0x46cf47(), _0x1d7229 = await _0x2062b9();
                                                        return await _0x17f3cb(_0x2a0623, _0x1d7229, _0x135b45), _0x85ec01();
                                                    }
                                                } else {
                                                    if (_0x3d241d[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x13c894(0x3e8), _0x85ec01();
                                                    else {
                                                        if (_0x3d241d[taskModule]['name'] == 'Change\x20Settings') {
                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                            var _0x54f6f3 = 0x0;
                                                            for (const _0x17c722 in _0x20363f) {
                                                                console['log']('(' + _0x54f6f3 + ')\x20' + _0x17c722 + '\x20:\x20' + _0x20363f[_0x17c722]), _0x54f6f3++;
                                                            }
                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x54f6f3 + ')\x20Return\x20to\x20Main\x20Menu');
                                                            var _0x2e7ee7 = await _0xc9ce8c();
                                                            if (_0x2e7ee7 == _0x54f6f3)
                                                                return _0x85ec01();
                                                            console['clear'];
                                                            var _0x3b2bd4 = 0x0;
                                                            for (var _0x127b52 in _0x20363f) {
                                                                if (_0x2e7ee7 == _0x3b2bd4) {
                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x127b52 + '\x20:'), _0x20363f[_0x127b52] = await _0x33502f(), _0x147bd5['writeFileSync']('../settings.json', JSON['stringify'](_0x20363f));
                                                                    break;
                                                                } else
                                                                    _0x3b2bd4++;
                                                            }
                                                            return console['log']('Settings\x20Saved!'), await _0x13c894(0xbb8), _0x85ec01();
                                                        } else {
                                                            if (_0x3d241d[taskModule]['name'] == 'Reload\x20Settings')
                                                                return console['log']('Reloading\x20settings'), await _0xcbe983(), _0x85ec01();
                                                            else {
                                                                if (taskModule == 0x45) {
                                                                    _0x3d241d[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                    var _0x353add = await _0x5cda76();
                                                                    _0x353add == 'ModuleVoorDeBoys' ? (await _0x3ca076(), await _0x3ebcfe(), await afewFunction(_0x5a594b[_0x2ac2c2], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x13c894(0xbb8));
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
            await _0x85ec01();
        } catch (_0x36bd69) {
            return console['log'](_0x36bd69), await _0x13c894(0x3a98);
        }
}
;
_0x4b46b5('JRaffles\x20' + _0x316d08), _0xcbe983();
try {
    _0x19d6b3();
} catch (_0x278f6b) {
    var _0x24a653 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x2cd057
            },
            {
                'name': 'Version',
                'value': '' + _0x316d08
            },
            {
                'name': 'Error',
                'value': '' + _0x278f6b
            }
        ]
    }];
    const _0x414ba5 = { 'embeds': _0x24a653 };
    _0x2d3c9d(_0x31debd, _0x414ba5);
}