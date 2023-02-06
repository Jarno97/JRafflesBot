const { EmbedBuilder: _0x230025 } = require('discord.js');
var _0x5f3664 = require('exe');
const { execFile: _0x52768d } = require('child_process'), _0x5db176 = require('puppeteer-extra'), _0x49c62b = require('puppeteer-extra-plugin-recaptcha'), _0x3a789f = require('puppeteer-extra-plugin-stealth'), _0x2c0849 = require('chalk'), _0x3b155e = require('node-bash-title'), _0x20e1e0 = require('fs'), _0x47ff14 = require('axios'), _0x26db99 = require('papaparse');
var _0xa7e7dc = require('random-name');
const _0x566fc0 = require('request');
var _0x390598 = require('prompt');
const _0x378912 = _0x566fc0['jar']();
var _0x311f21 = {};
const _0x342f2a = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x1a8abe = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x34ea26 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x51f50a = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x54d223 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn';
var _0x391dc5 = 'https://discord.com/api/webhooks/', _0x3ced52 = '' + _0x391dc5 + _0x34ea26, _0x29e4a7 = '' + _0x391dc5 + _0x51f50a, _0x53b103 = '' + _0x391dc5 + _0x342f2a, _0x535335 = '' + _0x391dc5 + _0x1a8abe, _0x363803 = '' + _0x391dc5 + _0x54d223;
const _0x472f4f = JSON['parse'](_0x20e1e0['readFileSync']('../package.json', 'utf-8')), _0x135d81 = _0x472f4f['version'];
var _0x6b361d, _0x51e6b1, _0x598773, _0x33f600, _0x33385b, _0x294da3, _0x572eb5;
const _0x5b64f8 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x423453 = ![];
const _0x3cd084 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x27829d = '0123456789';
var _0x26f0d7 = _0x3cd084['split']('');
const _0x1f03dd = require('auto-git-update'), { PageEmittedEvents: _0x5ace69 } = require('puppeteer'), { getRandomValues: _0x3e0923 } = require('crypto'), { resolve: _0x1939ed } = require('path'), _0x14b5fe = {
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
}, _0x2a9d81 = new _0x1f03dd(_0x14b5fe);
async function _0x1ba0f1() {
    _0x33385b = _0x20e1e0['readdirSync']('../proxies'), _0x33f600 = _0x20e1e0['readdirSync']('../tasks'), _0x311f21 = JSON['parse'](_0x20e1e0['readFileSync']('../settings.json', 'utf-8')), !_0x311f21['delay'] && (_0x311f21['delay'] = 0x2710, _0x20e1e0['writeFileSync']('../settings.json', JSON['stringify'](_0x311f21))), !_0x311f21['captchaKey'] && (_0x311f21['captchaKey'] = '', _0x20e1e0['writeFileSync']('../settings.json', JSON['stringify'](_0x311f21))), !_0x311f21['useRandomProxy'] && (_0x311f21['useRandomProxy'] = !![], _0x20e1e0['writeFileSync']('../settings.json', JSON['stringify'](_0x311f21))), !_0x311f21['webhook'] && (_0x311f21['webhook'] = '', _0x20e1e0['writeFileSync']('../settings.json', JSON['stringify'](_0x311f21))), _0x391dc5 = _0x311f21['webhook'], _0x294da3 = _0x311f21['licenseKey'];
}
let _0x2beb03, _0x2ff0c2 = [], _0x154d83;
const _0x3fa784 = _0x553d71 => new Promise(_0x29d8e4 => setTimeout(_0x29d8e4, _0x553d71));
function _0x548fc4(_0x436c00, _0x54db53) {
    return Math['floor'](Math['random']() * (_0x54db53 - _0x436c00 + 0x1) + _0x436c00);
}
async function _0x138852(_0x5ee44d) {
    return _0x47ff14['get']('https://api.hyper.co/v4/licenses/' + _0x5ee44d, { 'headers': { 'Authorization': 'Bearer\x20' + _0x5b64f8 } })['then'](_0x45fa86 => _0x45fa86['data'])['catch'](() => null);
}
;
async function _0x3ca585(_0x18c27e) {
    console['clear']();
    if (_0x18c27e == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x3c6541 = await _0x390598['get']('License');
        if (_0x3c6541['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x3fa784(0xbb8), _0x3ca585(_0x18c27e);
        _0x18c27e = _0x3c6541['License'], _0x311f21['licenseKey'] = _0x18c27e, _0x294da3 = _0x18c27e, _0x20e1e0['writeFileSync']('../settings.json', JSON['stringify'](_0x311f21));
    }
    console['log']('Checking\x20license\x20' + _0x294da3 + '...'), await _0x3fa784(0x5dc);
    const _0x31d02c = await _0x138852(_0x18c27e);
    _0x572eb5 = JSON['stringify'](_0x31d02c['user']['username'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x31d02c)
        return console['log']('License\x20not\x20found');
    if (!_0x31d02c['user'])
        return console['log']('License\x20not\x20bound');
    return _0x31d02c['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x423453 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x423453 = ![]);
}
async function _0x3495f6() {
    var _0x294453 = await _0x390598['get']('Module');
    return console['clear'](), _0x294453['Module'];
}
;
async function _0x40aa2b() {
    var _0x3faed4 = await _0x390598['get']('Setting');
    return console['clear'](), _0x3faed4['Setting'];
}
async function _0x3d4821() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x12ca86 = 0x0; _0x12ca86 < _0x33f600['length']; _0x12ca86++) {
        console['log']('\x20(' + _0x12ca86 + ')\x20' + _0x33f600[_0x12ca86]);
    }
    console['log']('');
    var _0x33a8a9 = await _0x390598['get']('Task');
    if (_0x33a8a9['Task'] > _0x33f600['length'] - 0x1 || isNaN(_0x33a8a9['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x3fa784(0x3e8), _0x3d4821();
    var _0x461b50 = _0x20e1e0['readFileSync']('../tasks/' + _0x33f600[_0x33a8a9['Task']], 'utf-8');
    return _0x598773 = _0x26db99['parse'](_0x461b50, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x2c0849['blue'](_0x33f600[_0x33a8a9['Task']])), _0x6b361d = _0x33f600[_0x33a8a9['Task']], _0x598773;
}
async function _0x4e2d31() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x5f06fc = 0x0; _0x5f06fc < _0x33385b['length']; _0x5f06fc++) {
        console['log']('\x20(' + _0x5f06fc + ')\x20' + _0x33385b[_0x5f06fc]);
    }
    console['log']('');
    var _0x2e8742 = await _0x390598['get']('Proxies');
    if (_0x2e8742['Proxies'] > _0x33385b['length'] - 0x1 || isNaN(_0x2e8742['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x3fa784(0x3e8), _0x4e2d31();
    var _0x5dd5a6 = _0x20e1e0['readFileSync']('../proxies/' + _0x33385b[_0x2e8742['Proxies']], 'utf-8')['split']('\x0a');
    let _0x460e4d = _0x5dd5a6['map']((_0x4d7e72, _0xab04b6) => {
        sanatizeProxy = _0x4d7e72['replace']('\x0d', '');
        if (_0x5dd5a6[_0xab04b6 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x51e6b1 = _0x33385b[_0x2e8742['Proxies']], console['clear'](), _0x460e4d;
}
async function _0x524057() {
    var _0x3a32ec = await _0x390598['get']('Value');
    return console['clear'](), _0x3a32ec['Value'];
}
async function _0x3559a3(_0x4de2c5) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x565867 = 0x0; _0x565867 < _0x4de2c5['length']; _0x565867++) {
        console['log']('\x20(' + _0x565867 + ')\x20[' + _0x4de2c5[_0x565867]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x1d775b = await _0x390598['get']('Module');
    return _0x1d775b['Module'];
}
async function _0x49440b() {
    var _0x50d9f2 = await _0x390598['get']('Password');
    return console['clear'](), _0x50d9f2['Password'];
}
;
async function _0x39173f() {
    var _0xf6b254 = await _0x390598['get']('Links');
    return _0xf6b254['Links'];
}
;
async function _0x9f26bd() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x42e770 = 0x0; _0x42e770 < _0x2ff0c2['length']; _0x42e770++) {
        console['log']('\x20(' + _0x42e770 + ')\x20' + _0x2ff0c2[_0x42e770]);
    }
    ;
    console['log']();
    let _0x5a9971 = await _0x390598['get']('Product');
    return console['clear'](), _0x5a9971['Product'];
}
;
function _0xad40fc() {
    var _0x388340 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x388340;
}
;
const _0x4d2771 = [
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
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x32d330(_0x37959b, _0x1f358f) {
    let _0x2cf36b = { 'headers': { 'content-type': 'application/json' } };
    if (_0x135d81 != 'devkey') {
        await _0x47ff14['post'](_0x37959b, _0x1f358f, _0x2cf36b);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x3a5d47(_0x285d83, _0x49e029, _0x1d7cad, _0x5012d5, _0x49a90d) {
    if (!_0x5012d5 && _0x1d7cad == 'dev') {
        var _0x851a55 = new _0x230025()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x49e029['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x49e029['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x285d83['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x311f21['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x572eb5,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x285d83['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x135d81,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x851a55['data'];
    } else {
        if (_0x5012d5 && _0x1d7cad == 'dev') {
            var _0x851a55 = new _0x230025()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x49e029['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x572eb5,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x49e029['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x285d83['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x311f21['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x49a90d,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x285d83['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x135d81,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x851a55['data'];
        } else {
            if (_0x1d7cad == 'pub') {
                var _0x851a55 = new _0x230025()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x49e029['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x49e029['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x285d83['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x311f21['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x285d83['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x135d81,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x851a55['data'];
            } else {
                if (_0x1d7cad == 'acc') {
                    var _0x851a55 = new _0x230025()['setColor']('#282525')['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x49e029['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x572eb5,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x49e029['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x311f21['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x135d81,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x851a55['data'];
                }
            }
        }
    }
}
async function _0xdfddbf(_0x3014cd, _0x3f0351) {
    var _0x21917b = _0x3014cd[_0x3f0351]['Address1']['split'](''), _0x5e9c3a = _0x3014cd[_0x3f0351]['Address2']['split'](''), _0x1ff420 = _0x3014cd[_0x3f0351]['Email']['split']('@');
    for (var _0x257df0 = 0x0; _0x257df0 < _0x21917b['length']; _0x257df0++) {
        if (_0x21917b[_0x257df0] == 'X') {
            var _0x4c4470 = Math['round'](Math['random']() * (_0x3cd084['length'] - 0x1));
            _0x21917b[_0x257df0] = _0x26f0d7[_0x4c4470];
        }
    }
    ;
    for (var _0x257df0 = 0x0; _0x257df0 < _0x5e9c3a['length']; _0x257df0++) {
        if (_0x5e9c3a[_0x257df0] == 'X') {
            var _0x4c4470 = Math['round'](Math['random']() * (_0x3cd084['length'] - 0x1));
            _0x5e9c3a[_0x257df0] = _0x26f0d7[_0x4c4470];
        }
    }
    ;
    _0x3014cd[_0x3f0351]['FirstName'] == 'RANDOM' && (_0x3014cd[_0x3f0351]['FirstName'] = _0xa7e7dc['first']());
    _0x3014cd[_0x3f0351]['LastName'] == 'RANDOM' && (_0x3014cd[_0x3f0351]['LastName'] = _0xa7e7dc['last']());
    _0x1ff420[0x0] == 'RANDOM' ? _0x1ff420[0x0] = '' + _0xa7e7dc['first']() + _0xa7e7dc['last']() + '@' : _0x1ff420[0x0] = _0x1ff420[0x0] + '@';
    _0x3014cd[_0x3f0351]['Phone'] == 'RANDOM' && (_0x3014cd[_0x3f0351]['Phone'] = _0x548fc4(0x3b9aca00, 0x2540be3ff));
    if (_0x3014cd[_0x3f0351]['Follower'] == 'RANDOM') {
        var _0x3a83e1 = _0x548fc4(0x1, 0x270f);
        _0x3014cd[_0x3f0351]['Follower'] = '' + _0xa7e7dc['first']() + _0xa7e7dc['last']() + _0x3a83e1;
    }
    _0x3014cd[_0x3f0351]['Email'] = _0x1ff420['join'](''), _0x3014cd[_0x3f0351]['Address1'] = _0x21917b['join'](''), _0x3014cd[_0x3f0351]['Address2'] = _0x5e9c3a['join']('');
    return;
}
;
function _0x364248() {
    let _0x976eaf = proxyFile['split']('\x0a'), _0x3f701e = _0x976eaf['map']((_0x14e6df, _0x3d3fb1) => {
        sanatizeProxy = _0x14e6df['replace']('\x0d', '');
        if (_0x976eaf[_0x3d3fb1 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3f701e;
}
;
async function _0x2dd891(_0x3a5177) {
    var _0x165f03 = _0x3a5177[0x1]['split'](':');
    const _0x4af1bb = await _0x5db176['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x165f03[0x0] + ':' + _0x165f03[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x4c97cf = await _0x4af1bb['newPage']();
        await _0x4c97cf['authenticate']({
            'username': '' + _0x165f03[0x2],
            'password': '' + _0x165f03[0x3]
        }), console['log'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x4c97cf['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4c97cf['setRequestInterception'](!![]), _0x4c97cf['on']('request', _0xe6678a => {
            _0xe6678a['resourceType']() === 'image' || _0xe6678a['resourceType']() === 'font' || _0xe6678a['resourceType']() === 'media' ? _0xe6678a['abort']() : _0xe6678a['continue']();
        }), await _0x4c97cf['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x4c97cf['waitForTimeout'](0xbb8), await _0x4c97cf['waitForSelector']('.product-card');
        const _0x2cb1e3 = await _0x4c97cf['$$eval']('a.product-card', _0x509da8 => {
            return _0x509da8['map'](_0x42d709 => _0x42d709['href']);
        });
        return _0x2ff0c2 = _0x2cb1e3;
    } catch (_0x5d878c) {
        console['log']('\x20' + _0x5d878c);
    } finally {
        _0x4af1bb['close'](), console['clear']();
    }
}
;
async function _0x387a83(_0x1a8b56, _0x23e0ce, _0xfa65c9, _0x195afd, _0x837cc3) {
    await _0xdfddbf(_0x195afd, _0x1a8b56);
    var _0x11f4d2 = [{
        'type': 'rich',
        'title': 'Succesful\x20OQIUM\x20Entry',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x572eb5
            },
            {
                'name': 'Size',
                'value': '' + _0x195afd[_0x1a8b56]['Size']
            },
            {
                'name': 'Delay',
                'value': '' + _0x311f21['delay']
            },
            {
                'name': 'Version',
                'value': '' + _0x135d81
            }
        ]
    }];
    const _0x4add0f = { 'embeds': _0x11f4d2 };
    if (_0x311f21['useRandomProxy'] = ![])
        var _0x2823c3 = _0x837cc3[_0x1a8b56]['split'](':');
    else
        var _0x3cfe00 = Math['round'](Math['random']() * (_0x837cc3['length'] - 0x1)), _0x2823c3 = _0x837cc3[_0x3cfe00]['split'](':');
    var _0x484ef8 = _0xfa65c9['data'];
    _0x23e0ce == 'exp' ? _0x484ef8['data']['attributes']['email'] = '' + _0x195afd[_0x1a8b56]['FirstName'] + _0x195afd[_0x1a8b56]['LastName'] + _0x311f21['catchall'] : _0x484ef8['data']['attributes']['email'] = '' + _0x195afd[_0x1a8b56]['Email'];
    _0x484ef8['data']['attributes']['properties']['$first_name'] = '' + _0x195afd[_0x1a8b56]['FirstName'], _0x484ef8['data']['attributes']['properties']['$last_name'] = '' + _0x195afd[_0x1a8b56]['LastName'], _0x484ef8['data']['attributes']['properties']['$address1'] = _0x195afd[_0x1a8b56]['Address1'] + '\x20' + _0x195afd[_0x1a8b56]['Address2'], _0x484ef8['data']['attributes']['properties']['$zip'] = '' + _0x195afd[_0x1a8b56]['Zip'], _0x484ef8['data']['attributes']['properties']['$city'] = '' + _0x195afd[_0x1a8b56]['City'], _0x484ef8['data']['attributes']['properties']['$country'] = '' + _0x195afd[_0x1a8b56]['Country'], _0x484ef8['data']['attributes']['properties']['Size'] = '' + _0x195afd[_0x1a8b56]['Size'], _0x484ef8['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x195afd[_0x1a8b56]['Follower'];
    var _0x3baca6 = {
        'jar': _0x378912,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0xfa65c9['url'],
        'headers': _0xfa65c9['headers'],
        'body': JSON['stringify'](_0x484ef8),
        'proxy': 'http://' + _0x2823c3[0x2] + ':' + _0x2823c3[0x3] + '@' + _0x2823c3[0x0] + ':' + _0x2823c3[0x1]
    };
    return _0x23e0ce === 'ver' && (_0x3baca6['method'] = 'GET'), new Promise(function (_0xd7d290, _0x2b49c1) {
        callback = async (_0x28da5a, _0x7f898, _0x8db587) => {
            !_0x28da5a && _0x7f898['statusCode'] == 0xca || !_0x28da5a && _0x7f898['statusCode'] == 0xc8 ? _0xd7d290(console['log'](_0x2c0849['green'](_0xad40fc() + '\x20[' + _0xfa65c9['name'] + ']\x20Task\x20' + (_0x1a8b56 + 0x1) + ':\x20Raffle\x20Entered!'))) : (_0x11f4d2[0x0]['title'] = 'Failed\x20entry', _0x11f4d2[0x0]['description'] = '' + _0x28da5a, await _0x32d330(_0x535335, _0x4add0f), _0x2b49c1(console['log'](_0xad40fc() + '\x20[' + _0xfa65c9['name'] + ']\x20Task\x20' + (_0x1a8b56 + 0x1) + ':\x20' + _0x28da5a)));
        };
        try {
            _0x23e0ce === 'ver' ? console['log'](_0xad40fc() + '\x20[' + _0xfa65c9['name'] + ']\x20Task\x20' + (_0x1a8b56 + 0x1) + ':\x20Verifying.') : console['log'](_0xad40fc() + '\x20[' + _0xfa65c9['name'] + ']\x20Task\x20' + (_0x1a8b56 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x484ef8['data']['attributes']['email']), _0x566fc0(_0x3baca6, callback);
        } catch (_0x5f04ed) {
            console['log'](_0xad40fc() + '\x20Task\x20' + (_0x1a8b56 + 0x1) + ':\x20' + _0x5f04ed);
        }
    });
}
;
async function _0x3fefb3(_0x2bf83e, _0x16b071, _0x4b43fd) {
    _0x5db176['use'](_0x3a789f()), _0x5db176['use'](_0x49c62b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x311f21['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5848ce = 0x0; _0x5848ce < _0x2bf83e['length']; _0x5848ce++) {
        var _0x2bc13d, _0x42af63 = '', _0x3986ab = 0x0, _0x2a480b = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x572eb5
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2bf83e[_0x5848ce]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2bf83e[_0x5848ce]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x311f21['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x135d81
                }
            ]
        }], _0x4b52fb = await _0x3a5d47(_0x2bf83e[_0x5848ce], _0x4b43fd, 'dev', ![]), _0x7dd477 = await _0x3a5d47(_0x2bf83e[_0x5848ce], _0x4b43fd, 'pub', ![]);
        const _0x4a6975 = {
            'succesDEVMSG': { 'embeds': [_0x4b52fb] },
            'succesPUBMSG': { 'embeds': [_0x7dd477] }
        }, _0x4aa08e = { 'embeds': _0x2a480b };
        await _0xdfddbf(_0x2bf83e, _0x5848ce);
        if (_0x2bf83e[_0x5848ce]['Email'] == '' || _0x2bf83e[_0x5848ce]['FirstName'] == '' || _0x2bf83e[_0x5848ce]['LastName'] == '' || _0x2bf83e[_0x5848ce]['Country'] == '' || _0x2bf83e[_0x5848ce]['Size'] == '' || _0x2bf83e[_0x5848ce]['Address1'] == '' || _0x2bf83e[_0x5848ce]['Zip'] == '') {
            console['log'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2bf83e[_0x5848ce]['Email'] == '' || _0x2bf83e[_0x5848ce]['FirstName'] == '' || _0x2bf83e[_0x5848ce]['LastName'] == '' || _0x2bf83e[_0x5848ce]['Country'] == '' || _0x2bf83e[_0x5848ce]['Size'] == '' || _0x2bf83e[_0x5848ce]['Address1'] == '' || _0x2bf83e[_0x5848ce]['Zip'] == '' || _0x2bf83e[_0x5848ce]['Phone'] == '') {
            console['log'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x4da113 = '' + _0x2bf83e[_0x5848ce]['Url'];
        if (_0x311f21['useRandomProxy'] = ![])
            var _0x432f3f = _0x16b071[_0x5848ce]['split'](':');
        else
            var _0x4ac0a6 = Math['round'](Math['random']() * (_0x16b071['length'] - 0x1)), _0x432f3f = _0x16b071[_0x4ac0a6]['split'](':');
        const _0x4f91fd = await _0x5db176['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x432f3f[0x0] + ':' + _0x432f3f[0x1]]
        });
        try {
            const _0x1b8c40 = await _0x4f91fd['newPage']();
            await _0x1b8c40['authenticate']({
                'username': '' + _0x432f3f[0x2],
                'password': '' + _0x432f3f[0x3]
            }), console['log'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1b8c40['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1b8c40['setRequestInterception'](!![]), _0x1b8c40['on']('request', _0x455bf7 => {
                _0x455bf7['resourceType']() === 'image' || _0x455bf7['resourceType']() === 'font' || _0x455bf7['resourceType']() === 'media' ? _0x455bf7['abort']() : _0x455bf7['continue']();
            }), await _0x1b8c40['goto'](_0x4da113), await _0x3fa784(0xbb8), await _0x1b8c40['waitForSelector']('.control__JhutY'), await _0x1b8c40['click']('.control__JhutY'), await _0x3fa784(0x1f4);
            if (_0x2bf83e[_0x5848ce]['Size'] != 'RANDOM')
                try {
                    const _0x4b919e = await _0x1b8c40['$x']('//div[contains(text(),\x20\x27' + _0x2bf83e[_0x5848ce]['Size'] + '\x27)]');
                    await _0x4b919e[0x0]['click']();
                } catch {
                    console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x498385 = await _0x1b8c40['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x484d70 = Math['round'](Math['random']() * (_0x498385['length'] - 0x1));
                await _0x498385[_0x484d70]['click']();
            }
            await _0x3fa784(0x4b0);
            const _0x26508a = await _0x1b8c40['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x26508a[0x0]['click'](), await _0x1b8c40['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1b8c40['type']('input[name=\x22email\x22]', '' + _0x2bf83e[_0x5848ce]['Email']), await _0x3fa784(0x640), await _0x1b8c40['type']('input[name=\x22phone\x22]', '' + _0x2bf83e[_0x5848ce]['Phone']), await _0x3fa784(0x4b0), await _0x1b8c40['click']('button.btn.continue-button__1RtsS'), await _0x3fa784(0x4b0);
            try {
                await _0x1b8c40['type']('input[name=\x22firstName\x22]', '' + _0x2bf83e[_0x5848ce]['FirstName']), await _0x3fa784(0x258);
            } catch {
                const _0x378d9e = await _0x1b8c40['$$eval']('.invalid-feedback\x20>\x20div', _0x5c75a4 => {
                    return _0x5c75a4['map'](_0x23aeaf => _0x23aeaf['innerText']);
                });
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x20' + _0x378d9e));
                continue;
            }
            await _0x1b8c40['type']('input[name=\x22lastName\x22]', '' + _0x2bf83e[_0x5848ce]['LastName']), await _0x3fa784(0xc8), await _0x1b8c40['type']('input[name=\x22instagramUsername\x22]', '' + _0x2bf83e[_0x5848ce]['Follower']), await _0x3fa784(0x4b0), await _0x1b8c40['click']('button.btn.continue-button__1RtsS'), await _0x3fa784(0x3e8), console['log'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1b8c40['select']('select[name=\x22country\x22]', '' + _0x2bf83e[_0x5848ce]['Country']), await _0x3fa784(0x2bc), await _0x1b8c40['type']('input[name=\x22streetName\x22]', '' + _0x2bf83e[_0x5848ce]['Address1']), await _0x3fa784(0x258), await _0x1b8c40['type']('input[name=\x22houseNumber\x22]', _0x2bf83e[_0x5848ce]['HouseNumber'] + '\x20' + _0x2bf83e[_0x5848ce]['Address2']), await _0x3fa784(0xc8), await _0x1b8c40['type']('input[name=\x22postalCode\x22]', '' + _0x2bf83e[_0x5848ce]['Zip']), await _0x3fa784(0x1f4), await _0x1b8c40['type']('input[name=\x22city\x22]', '' + _0x2bf83e[_0x5848ce]['City']), await _0x3fa784(0x4b0), await _0x1b8c40['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x3fa784(0x4b0), await _0x1b8c40['click']('button.btn.continue-button__1RtsS'), await _0x3fa784(0x4b0), console['log'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1b8c40['solveRecaptchas'](), console['log'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x3fa784(0xbb8), await _0x1b8c40['click']('button.btn.continue-button__1RtsS'), await _0x3fa784(0x1388), console['log'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1b8c40['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1b8c40['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3fa784(0x4b0), await _0x1b8c40['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2bf83e[_0x5848ce]['CardNumber']), await _0x3fa784(0x320), await _0x1b8c40['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1b8c40['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2bf83e[_0x5848ce]['ExpiryDate']), await _0x3fa784(0x4b0), await _0x1b8c40['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1b8c40['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2bf83e[_0x5848ce]['CVV']), await _0x3fa784(0x226), await _0x1b8c40['type']('input[name=\x22holderName\x22]', '' + _0x2bf83e[_0x5848ce]['NameOnCard']), await _0x3fa784(0x226), await _0x1b8c40['click']('button.adyen-checkout__button'), console['log'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x1b8c40['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x3fa784(0xbb8);
            } catch (_0x843a56) {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x203DS\x20Failed')), _0x2bc13d = '3DS\x20Error\x20' + _0x843a56;
                var _0x258ff5 = await _0x3a5d47(_0x2bf83e[_0x5848ce], _0x4b43fd, 'dev', !![], _0x2bc13d);
                _0x4a6975['errorDEV'] = { 'embeds': [_0x258ff5] };
                _0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '' && await _0x32d330(_0x311f21['webhook'], _0x4a6975['errorDEV']);
                await _0x32d330(_0x535335, _0x4a6975['errorDEV']);
                continue;
            }
            console['log'](_0x2c0849['green'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '')
                try {
                    await _0x32d330(_0x311f21['webhook'], _0x4a6975['succesDEVMSG']);
                } catch {
                }
            await _0x3fa784(0xc8), await _0x32d330(_0x53b103, _0x4a6975['succesDEVMSG']), await _0x3fa784(0xc8);
            try {
                await _0x32d330(_0x363803, _0x4a6975['succesPUBMSG']);
            } catch {
            }
        } catch (_0x4080b8) {
            console['log'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x20' + _0x4080b8), _0x2bc13d = '' + _0x4080b8;
            var _0x258ff5 = await _0x3a5d47(_0x2bf83e[_0x5848ce], _0x4b43fd, 'dev', !![], _0x2bc13d);
            _0x4a6975['errorDEV'] = { 'embeds': [_0x258ff5] }, _0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '' && await _0x32d330(_0x311f21['webhook'], _0x4a6975['errorDEV']), await _0x32d330(_0x535335, _0x4a6975['errorDEV']), _0x42af63 = 'yes';
        } finally {
            _0x4f91fd['close']();
            if (_0x42af63 == 'yes' && _0x3986ab != 0x5) {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4b43fd['name'] + ']\x20Task\x20' + (_0x5848ce + 0x1) + '\x20:\x20Retrying')), _0x5848ce = _0x5848ce - 0x1, _0x3986ab = _0x3986ab + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x311f21['footshopDelay'] + '\x20ms'), await _0x3fa784(_0x311f21['footshopDelay']);
        }
    }
}
afewFunction = async (_0x35c6e5, _0x9b756a, _0x8af853, _0x5b5649, _0x1a1bed) => {
    for (var _0x544aeb = 0x0; _0x544aeb < _0x5b5649['length']; _0x544aeb++) {
        var _0x2194ed, _0x5a3bfc = '', _0x237d54 = 0x0;
        _0x5b5649[_0x544aeb]['Url'] = _0x35c6e5, _0x3b155e(_0x8af853['name'] + '\x20Task\x20' + (_0x544aeb + 0x1) + '\x20/\x20' + _0x5b5649['length'] + '\x20||\x20File:\x20' + _0x6b361d + '\x20Proxies:\x20' + _0x51e6b1), await _0xdfddbf(_0x5b5649, _0x544aeb);
        var _0x1d19d3 = await _0x3a5d47(_0x5b5649[_0x544aeb], _0x8af853, 'dev', ![]), _0x40bf49 = await _0x3a5d47(_0x5b5649[_0x544aeb], _0x8af853, 'pub', ![]);
        const _0x3e0be0 = {
            'succesDEVMSG': { 'embeds': [_0x1d19d3] },
            'succesPUBMSG': { 'embeds': [_0x40bf49] }
        };
        if (_0x5b5649[_0x544aeb]['Email'] == '' || _0x5b5649[_0x544aeb]['FirstName'] == '' || _0x5b5649[_0x544aeb]['LastName'] == '' || _0x5b5649[_0x544aeb]['Country'] == '' || _0x5b5649[_0x544aeb]['Size'] == '' || _0x5b5649[_0x544aeb]['Address1'] == '' || _0x5b5649[_0x544aeb]['Zip'] == '') {
            console['log'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x311f21['useRandomProxy'] = ![])
            var _0xfc739e = _0x1a1bed[_0x544aeb]['split'](':');
        else
            var _0x40f322 = Math['round'](Math['random']() * (_0x1a1bed['length'] - 0x1)), _0xfc739e = _0x1a1bed[_0x40f322]['split'](':');
        const _0x59ffad = await _0x5db176['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0xfc739e[0x0] + ':' + _0xfc739e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x30e5a1 = await _0x59ffad['newPage']();
            await _0x30e5a1['setDefaultNavigationTimeout'](0x1d4c0), await _0x30e5a1['authenticate']({
                'username': '' + _0xfc739e[0x2],
                'password': '' + _0xfc739e[0x3]
            }), console['log'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x30e5a1['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x30e5a1['setRequestInterception'](!![]), _0x30e5a1['on']('request', _0x287149 => {
                _0x287149['resourceType']() === 'image' || _0x287149['resourceType']() === 'font' || _0x287149['resourceType']() === 'media' ? _0x287149['abort']() : _0x287149['continue']();
            }), await _0x30e5a1['goto'](_0x35c6e5, { 'waitUntil': 'networkidle2' }), console['log'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x30e5a1['waitForTimeout'](0xfa0), console['log'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20Cookies\x20received'), await _0x30e5a1['waitForTimeout'](0x320);
            if (_0x5b5649[_0x544aeb]['Size'] == 'RANDOM') {
                console['log'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x3d017d = await _0x30e5a1['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0xcb5ffd => {
                    return _0xcb5ffd['map'](_0x8a3a43 => _0x8a3a43['href']);
                });
                var _0x35ed18 = Math['round'](Math['random']() * (_0x3d017d['length'] - 0x1));
                await _0x30e5a1['goto']('' + _0x3d017d[_0x35ed18]);
            } else {
                console['log'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x5b5649[_0x544aeb]['Size']);
                try {
                    const _0x129b6b = await _0x30e5a1['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x5b5649[_0x544aeb]['Size'] + '\x22]\x20>\x20a', _0x20b337 => {
                        return _0x20b337['map'](_0x3949bc => _0x3949bc['href']);
                    });
                    await _0x30e5a1['goto']('' + _0x129b6b[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x20cc28) {
                    console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20' + _0x20cc28 + '\x20Size\x20not\x20found')), _0x2194ed = 'Size\x20Not\x20Found';
                    var _0x17272a = await _0x3a5d47(_0x5b5649[_0x544aeb], _0x8af853, 'dev', !![], _0x2194ed);
                    _0x3e0be0['errorDEV'] = { 'embeds': [_0x17272a] };
                    _0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '' && await _0x32d330(_0x311f21['webhook'], _0x3e0be0['errorDEV']);
                    await _0x32d330(_0x535335, _0x3e0be0['errorDEV']);
                    continue;
                }
            }
            await _0x30e5a1['waitForTimeout'](0x258), await _0x30e5a1['type']('#raffle-instagram', '' + _0x5b5649[_0x544aeb]['Follower'], { 'delay': 0x64 }), await _0x30e5a1['waitForTimeout'](0x384), await _0x30e5a1['click']('#raffle-terms'), await _0x30e5a1['waitForTimeout'](0x384), await _0x30e5a1['evaluate'](() => {
                const _0x107fbe = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x107fbe['click']();
            }), await _0x30e5a1['waitForTimeout'](0xbb8), await _0x30e5a1['waitForSelector']('#checkout_email'), await _0x3fa784(0x3e8), console['log'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20Filling\x20Information');
            _0x9b756a == 'sec' ? await _0x30e5a1['type']('#checkout_email', '' + _0x5b5649[_0x544aeb]['FirstName'] + _0x5b5649[_0x544aeb]['LastName'] + _0x311f21['catchall'], 0x32) : await _0x30e5a1['type']('#checkout_email', '' + _0x5b5649[_0x544aeb]['Email'], 0x32);
            await _0x3fa784(0x320), await _0x30e5a1['select']('#checkout_shipping_address_country', '' + _0x5b5649[_0x544aeb]['Country']), await _0x30e5a1['waitForTimeout'](0x258), await _0x30e5a1['type']('#checkout_shipping_address_first_name', '' + _0x5b5649[_0x544aeb]['FirstName']), await _0x30e5a1['waitForTimeout'](0x320), await _0x30e5a1['type']('#checkout_shipping_address_last_name', '' + _0x5b5649[_0x544aeb]['LastName']), await _0x30e5a1['waitForTimeout'](0x2bc), await _0x30e5a1['type']('#checkout_shipping_address_address1', _0x5b5649[_0x544aeb]['Address1'] + '\x20' + _0x5b5649[_0x544aeb]['HouseNumber']), await _0x30e5a1['waitForTimeout'](0x2bc), await _0x30e5a1['type']('#checkout_shipping_address_address2', '' + _0x5b5649[_0x544aeb]['Address2']), await _0x30e5a1['waitForTimeout'](0x2bc);
            _0x5b5649[_0x544aeb]['Postcode'] == undefined ? await _0x30e5a1['type']('#checkout_shipping_address_zip', '' + _0x5b5649[_0x544aeb]['Zip']) : await _0x30e5a1['type']('#checkout_shipping_address_zip', '' + _0x5b5649[_0x544aeb]['Postcode']);
            await _0x30e5a1['waitForTimeout'](0x2bc), await _0x30e5a1['type']('#checkout_shipping_address_city', '' + _0x5b5649[_0x544aeb]['City']), await _0x30e5a1['waitForTimeout'](0x2bc), console['log'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x30e5a1, _0x30e5a1['evaluate'](() => {
                const _0x14adbf = document['querySelector']('#continue_button');
                for (var _0x410904 = 0x0; _0x410904 < 0x5; _0x410904++) {
                    if (_0x14adbf) {
                        _0x14adbf['click'](), _0x14adbf['click']();
                        break;
                    } else
                        _0x3fa784(0xfa0);
                }
            }), await _0x30e5a1['waitForTimeout'](0x1194);
            try {
                await _0x30e5a1['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x30e5a1['evaluate'](() => {
                const _0x44f54b = document['querySelector']('#continue_button');
                for (var _0x1946ee = 0x0; _0x1946ee < 0x5; _0x1946ee++) {
                    if (_0x44f54b) {
                        _0x44f54b['click']();
                        break;
                    } else
                        _0x3fa784(0xfa0);
                }
            }), await _0x30e5a1['waitForTimeout'](0x7d0), console['log'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x30e5a1['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x30e5a1['evaluate'](() => {
                const _0x253ed4 = document['querySelector']('#continue_button');
                for (var _0x4b21fa = 0x0; _0x4b21fa < 0x5; _0x4b21fa++) {
                    if (_0x253ed4) {
                        _0x253ed4['click']();
                        break;
                    } else
                        _0x3fa784(0xfa0);
                }
            }), await _0x30e5a1['waitForTimeout'](0x1194), await _0x30e5a1['waitForSelector']('#continue_button'), _0x30e5a1['evaluate'](() => {
                const _0x1c79e5 = document['querySelector']('#continue_button');
                for (var _0x164485 = 0x0; _0x164485 < 0x5; _0x164485++) {
                    if (_0x1c79e5) {
                        _0x1c79e5['click']();
                        break;
                    } else
                        _0x3fa784(0xfa0);
                }
            });
            try {
                await _0x30e5a1['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x2c0849['green'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '')
                    try {
                        await _0x32d330(_0x311f21['webhook'], _0x3e0be0['succesDEVMSG']);
                    } catch {
                    }
                await _0x3fa784(0xc8), await _0x32d330(_0x53b103, _0x3e0be0['succesDEVMSG']), await _0x3fa784(0xc8);
                try {
                    await _0x32d330(_0x363803, _0x3e0be0['succesPUBMSG']);
                } catch {
                }
            } catch (_0x297fd1) {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x297fd1));
            }
        } catch (_0x26b5d5) {
            console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20' + _0x26b5d5)), _0x2194ed = '' + _0x26b5d5;
            var _0x17272a = await _0x3a5d47(_0x5b5649[_0x544aeb], _0x8af853, 'dev', !![], _0x2194ed);
            _0x3e0be0['errorDEV'] = { 'embeds': [_0x17272a] }, _0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '' && await _0x32d330(_0x311f21['webhook'], _0x3e0be0['errorDEV']), await _0x32d330(_0x535335, _0x3e0be0['errorDEV']), _0x5a3bfc = 'yes';
        } finally {
            _0x59ffad && _0x59ffad['close']();
            if (_0x5a3bfc == 'yes' && _0x237d54 != 0x5 && _0x2194ed != 'Size\x20Not\x20Found') {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x8af853['name'] + ']\x20Task\x20' + (_0x544aeb + 0x1) + '\x20:\x20Retrying')), _0x544aeb = _0x544aeb - 0x1, _0x237d54 = _0x237d54 + 0x1;
                continue;
            }
            if (_0x544aeb + 0x1 == _0x5b5649['length']) {
                console['log'](_0x2c0849['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x3fa784(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x311f21['AfewDelay'] + '\x20ms'), await _0x3fa784(_0x311f21['AfewDelay']);
        }
    }
};
async function _0x372d70(_0x5df4d6, _0x2312f9, _0x463d5e, _0x3f5003) {
    _0x5db176['use'](_0x3a789f()), _0x5db176['use'](_0x49c62b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x311f21['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3477a5 = 0x0; _0x3477a5 < _0x463d5e['length']; _0x3477a5++) {
        var _0x3ec4da = '', _0x311ccf = 0x0;
        _0x3b155e(_0x2312f9['name'] + '\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20/\x20' + _0x463d5e['length'] + '\x20||\x20File:\x20' + _0x6b361d + '\x20Proxies:\x20' + _0x51e6b1), await _0xdfddbf(_0x463d5e, _0x3477a5);
        var _0x5b0fd9 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x572eb5
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x311f21['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x135d81
                }
            ]
        }];
        const _0x56df88 = { 'embeds': _0x5b0fd9 };
        var _0x978e8b = await _0x3a5d47(_0x463d5e[_0x3477a5], _0x2312f9, 'acc', ![]);
        const _0x388820 = { 'succesDEVMSG': { 'embeds': [_0x978e8b] } };
        if (_0x463d5e[_0x3477a5]['Email'] == '' || _0x463d5e[_0x3477a5]['FirstName'] == '' || _0x463d5e[_0x3477a5]['LastName'] == '') {
            console['log'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x463d5e[_0x3477a5]['Password'] == '' && (_0x463d5e[_0x3477a5]['Password'] = 'JRaffles23!');
        if (_0x311f21['useRandomProxy'] = ![])
            var _0x1e0807 = _0x3f5003[_0x3477a5]['split'](':');
        else
            var _0x134167 = Math['round'](Math['random']() * (_0x3f5003['length'] - 0x1)), _0x1e0807 = _0x3f5003[_0x134167]['split'](':');
        const _0x4abcde = await _0x5db176['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1e0807[0x0] + ':' + _0x1e0807[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3a9303 = await _0x4abcde['newPage']();
            await _0x3a9303['authenticate']({
                'username': '' + _0x1e0807[0x2],
                'password': '' + _0x1e0807[0x3]
            }), console['log'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3a9303['setRequestInterception'](!![]), _0x3a9303['on']('request', _0x47d9ca => {
                _0x47d9ca['resourceType']() === 'image' || _0x47d9ca['resourceType']() === 'font' || _0x47d9ca['resourceType']() === 'media' ? _0x47d9ca['abort']() : _0x47d9ca['continue']();
            }), await _0x3a9303['goto'](_0x5df4d6), await _0x3fa784(0xbb8), console['log'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x3a9303['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3a9303['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3a9303['waitForSelector']('#button-register'), await _0x3fa784(0x7d0), await _0x3a9303['evaluate'](() => {
                const _0x50ce39 = document['querySelector']('#button-register');
                _0x50ce39['click']();
            }), console['log'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x3fa784(0x1388), await _0x3a9303['waitForSelector']('#customer_salutation'), await _0x3a9303['select']('#customer_salutation', 'mr'), await _0x3fa784(0x7d0), await _0x3a9303['waitForSelector']('#customer_firstname'), await _0x3a9303['type']('#customer_firstname', '' + _0x463d5e[_0x3477a5]['FirstName']), await _0x3fa784(0x352), await _0x3a9303['waitForSelector']('#customer_lastname'), await _0x3a9303['type']('#customer_lastname', '' + _0x463d5e[_0x3477a5]['LastName']), await _0x3fa784(0x352), await _0x3a9303['type']('#email-input', '' + _0x463d5e[_0x3477a5]['Email']), await _0x3fa784(0x352), await _0x3a9303['type']('#email-confirm-input', '' + _0x463d5e[_0x3477a5]['Email']), await _0x3fa784(0x352), await _0x3a9303['type']('#register-password', '' + _0x463d5e[_0x3477a5]['Password']), await _0x3fa784(0x352), await _0x3a9303['type']('#password-confirm', '' + _0x463d5e[_0x3477a5]['Password']), await _0x3fa784(0x352), console['log'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x3a9303['click']('#consent'), await _0x3fa784(0x1f4);
            const _0x2ace34 = await _0x3a9303['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x2ace34) {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x3a9303['click']('#buttonRegister');
            try {
                await _0x3a9303['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x2c0849['yellow'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20Account\x20' + _0x463d5e[_0x3477a5]['Email'] + '\x20Generated!')), console['log'](_0x2c0849['yellow'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x463d5e[_0x3477a5]['Email'])), await _0x3fa784(0x4b0);
            async function _0x39558a() {
                console['log'](_0x2c0849['yellow'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x346cba = await _0x390598['get']('Code');
                return _0x346cba['Code'];
            }
            ;
            code = await _0x39558a(), _0x3fa784(0x320), console['log'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20Verifying..'), await _0x3a9303['type']('#verificationCode', code), await _0x3fa784(0x1f4), await _0x3a9303['click']('#buttonVerify'), await _0x3fa784(0x190), await _0x3a9303['click']('#buttonVerify'), await _0x3fa784(0x3e8);
            try {
                await _0x3a9303['waitForSelector']('div.b-user_greeting'), console['log'](_0x2c0849['green'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20Account\x20' + _0x463d5e[_0x3477a5]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x20e1e0['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x463d5e[_0x3477a5]['Email'] + ',' + _0x463d5e[_0x3477a5]['Password'] + ','), console['log'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20Account\x20' + _0x463d5e[_0x3477a5]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '' && await _0x32d330(_0x311f21['webhook'], _0x388820['succesDEVMSG']);
                } catch {
                }
                await _0x32d330(_0x29e4a7, _0x388820['succesDEVMSG']);
            } catch {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x360ffe) {
            console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20' + _0x360ffe)), _0x5b0fd9[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x5b0fd9[0x0]['description'] = '' + _0x360ffe, await _0x32d330(_0x535335, _0x56df88), _0x3ec4da = 'yes';
        } finally {
            _0x4abcde && _0x4abcde['close']();
            if (_0x3ec4da == 'yes' && _0x311ccf != 0x5) {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x2312f9['name'] + ']\x20Task\x20' + (_0x3477a5 + 0x1) + '\x20:\x20Retrying')), _0x3477a5 = _0x3477a5 - 0x1, _0x311ccf = _0x311ccf + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x311f21['delay'] + '\x20ms'), await _0x3fa784(_0x311f21['delay']);
        }
    }
}
async function _0x156936(_0x28dae7, _0x3ac224, _0x32b218) {
    _0x5db176['use'](_0x3a789f()), _0x5db176['use'](_0x49c62b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x311f21['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1ed10b = 0x0; _0x1ed10b < _0x3ac224['length']; _0x1ed10b++) {
        var _0x44f2b, _0x42f8cb = '', _0x3e5607 = 0x0;
        _0x3b155e(_0x28dae7['name'] + '\x20Task\x20' + (_0x1ed10b + 0x1) + '\x20/\x20' + _0x3ac224['length'] + '\x20||\x20File:\x20' + _0x6b361d + '\x20Proxies:\x20' + _0x51e6b1);
        var _0x122e43 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x572eb5
                },
                {
                    'name': 'Product',
                    'value': '' + _0x3ac224[_0x1ed10b]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3ac224[_0x1ed10b]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x311f21['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x135d81
                }
            ]
        }], _0x366c16 = await _0x3a5d47(_0x3ac224[_0x1ed10b], _0x28dae7, 'dev', ![]), _0x1efed2 = await _0x3a5d47(_0x3ac224[_0x1ed10b], _0x28dae7, 'pub', ![]);
        const _0x100be2 = {
            'succesDEVMSG': { 'embeds': [_0x366c16] },
            'succesPUBMSG': { 'embeds': [_0x1efed2] }
        };
        await _0xdfddbf(_0x3ac224, _0x1ed10b);
        if (_0x3ac224[_0x1ed10b]['Email'] == '' || _0x3ac224[_0x1ed10b]['Password'] == '' || _0x3ac224[_0x1ed10b]['FirstName'] == '' || _0x3ac224[_0x1ed10b]['LastName'] == '') {
            console['log'](_0xad40fc() + '\x20[' + _0x28dae7['name'] + ']\x20Task\x20' + (_0x1ed10b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x311f21['useRandomProxy'] = ![])
            var _0x4766a0 = _0x32b218[_0x1ed10b]['split'](':');
        else
            var _0x359fc1 = Math['round'](Math['random']() * (_0x32b218['length'] - 0x1)), _0x4766a0 = _0x32b218[_0x359fc1]['split'](':');
        const _0x4dc281 = await _0x5db176['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4766a0[0x0] + ':' + _0x4766a0[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x58e75b = await _0x4dc281['newPage']();
            await _0x58e75b['authenticate']({
                'username': '' + _0x4766a0[0x2],
                'password': '' + _0x4766a0[0x3]
            }), console['log'](_0xad40fc() + '\x20[' + _0x28dae7['name'] + ']\x20Task\x20' + (_0x1ed10b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x58e75b['setRequestInterception'](!![]), _0x58e75b['on']('request', _0x1da4fa => {
                _0x1da4fa['resourceType']() === 'image' || _0x1da4fa['resourceType']() === 'font' || _0x1da4fa['resourceType']() === 'media' ? _0x1da4fa['abort']() : _0x1da4fa['continue']();
            }), await _0x58e75b['goto']('' + _0x3ac224[_0x1ed10b]['Url'], { 'waitUntil': 'networkidle2' }), await _0x3fa784(0x12c);
            try {
                await _0x58e75b['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x58e75b['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0xad40fc() + '\x20[' + _0x28dae7['name'] + ']\x20Task\x20' + (_0x1ed10b + 0x1) + '\x20:\x20Logging\x20in'), await _0x58e75b['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x58e75b['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x58e75b['waitForSelector']('#username'), await _0x58e75b['type']('#username', _0x3ac224[_0x1ed10b]['Email']), await _0x58e75b['waitForSelector']('#password'), await _0x58e75b['type']('#password', _0x3ac224[_0x1ed10b]['Password']), await _0x3fa784(0x190), await _0x58e75b['click']('#buttonSubmit'), await _0x58e75b['waitForSelector']('div.b-user_greeting'), console['log'](_0xad40fc() + '\x20[' + _0x28dae7['name'] + ']\x20Task\x20' + (_0x1ed10b + 0x1) + '\x20:\x20Getting\x20Product'), await _0x3fa784(0x1f4), await _0x58e75b['goto']('' + _0x3ac224[_0x1ed10b]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0xad40fc() + '\x20[' + _0x28dae7['name'] + ']\x20Task\x20' + (_0x1ed10b + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x3ac224[_0x1ed10b]['Size']);
            let _0x4566df = _0x3ac224[_0x1ed10b]['Size']['replace']('.5', '\x201/2');
            await _0x58e75b['click']('button[title=\x22' + _0x4566df + '\x22]'), await _0x3fa784(0x1f4);
            try {
                await _0x58e75b['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x3fa784(0x12c), console['log'](_0xad40fc() + '\x20[' + _0x28dae7['name'] + ']\x20Task\x20' + (_0x1ed10b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x58e75b['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x3fa784(0x12c), await _0x58e75b['type']('#dwfrm_raffle_addressFields_firstName', _0x3ac224[_0x1ed10b]['FirstName']), await _0x3fa784(0x12c), await _0x58e75b['type']('#dwfrm_raffle_addressFields_lastName', _0x3ac224[_0x1ed10b]['LastName']), await _0x3fa784(0x12c), await _0x58e75b['select']('#dwfrm_raffle_addressFields_country', _0x3ac224[_0x1ed10b]['Country']), await _0x3fa784(0x12c), await _0x58e75b['type']('#dwfrm_raffle_addressFields_city', _0x3ac224[_0x1ed10b]['City']), await _0x3fa784(0x12c);
            _0x3ac224[_0x1ed10b]['Postcode'] == undefined && (_0x3ac224[_0x1ed10b]['Postcode'] = _0x3ac224[_0x1ed10b]['Zip']);
            await _0x58e75b['type']('#dwfrm_raffle_addressFields_postalCode', _0x3ac224[_0x1ed10b]['Postcode']), await _0x3fa784(0x12c), await _0x58e75b['type']('#dwfrm_raffle_addressFields_address1', _0x3ac224[_0x1ed10b]['Address1']), await _0x3fa784(0x12c), await _0x58e75b['type']('#dwfrm_raffle_addressFields_address2', _0x3ac224[_0x1ed10b]['HouseNumber']), await _0x3fa784(0x12c), await _0x58e75b['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x3ac224[_0x1ed10b]['Address2']), await _0x3fa784(0x12c), await _0x58e75b['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x3fa784(0x12c), await _0x58e75b['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x3ac224[_0x1ed10b]['Follower']), await _0x3fa784(0x1f4), await _0x58e75b['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x3fa784(0x1f4), console['log'](_0xad40fc() + '\x20[' + _0x28dae7['name'] + ']\x20Task\x20' + (_0x1ed10b + 0x1) + '\x20:\x20' + _0x2c0849['blue']('Awaiting\x20Paypal\x20Payment')), await _0x58e75b['click']('.b-paypal_button');
            try {
                await _0x58e75b['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x2c0849['green'](_0xad40fc() + '\x20[' + _0x28dae7['name'] + ']\x20Task\x20' + (_0x1ed10b + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '' && await _0x32d330(_0x311f21['webhook'], _0x100be2['succesDEVMSG']), await _0x3fa784(0xc8), await _0x32d330(_0x53b103, _0x100be2['succesDEVMSG']), await _0x3fa784(0xc8), await _0x32d330(_0x363803, _0x100be2['succesPUBMSG']);
            } catch (_0x3d25f0) {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x28dae7['name'] + ']\x20Task\x20' + (_0x1ed10b + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x3d25f0)), _0x44f2b = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x3d25f0;
                var _0x128098 = await _0x3a5d47(_0x3ac224[_0x1ed10b], _0x28dae7, 'dev', !![], _0x44f2b);
                _0x100be2['errorDEV'] = { 'embeds': [_0x128098] }, _0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '' && await _0x32d330(_0x311f21['webhook'], _0x100be2['errorDEV']), await _0x32d330(_0x535335, _0x100be2['errorDEV']);
            }
        } catch (_0x46ea92) {
            console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x28dae7['name'] + ']\x20Task\x20' + (_0x1ed10b + 0x1) + '\x20:\x20' + _0x46ea92)), _0x44f2b = '' + _0x46ea92;
            var _0x128098 = await _0x3a5d47(_0x3ac224[_0x1ed10b], _0x28dae7, 'dev', !![], _0x44f2b);
            _0x100be2['errorDEV'] = { 'embeds': [_0x128098] }, _0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '' && await _0x32d330(_0x311f21['webhook'], _0x100be2['errorDEV']), await _0x32d330(_0x535335, _0x100be2['errorDEV']), _0x42f8cb = 'yes';
        } finally {
            _0x4dc281 && _0x4dc281['close']();
            if (_0x42f8cb == 'yes' && _0x3e5607 != 0x5) {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x28dae7['name'] + ']\x20Task\x20' + (_0x1ed10b + 0x1) + '\x20:\x20Retrying')), _0x1ed10b = _0x1ed10b - 0x1, _0x3e5607 = _0x3e5607 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x311f21['AfewDelay'] + '\x20ms'), await _0x3fa784(_0x311f21['AfewDelay']);
        }
    }
}
async function _0xa732b1(_0x3b4fdc, _0x33e961) {
    _0x5db176['use'](_0x3a789f()), _0x5db176['use'](_0x49c62b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x311f21['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x235862 = 0x0; _0x235862 < bouncewear['length']; _0x235862++) {
        await _0xdfddbf(bouncewear, _0x235862);
        if (bouncewear[_0x235862]['Email'] == '' || bouncewear[_0x235862]['Password'] == '' || bouncewear[_0x235862]['FirstName'] == '' || bouncewear[_0x235862]['LastName'] == '') {
            console['log'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x235862 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x311f21['useRandomProxy'] = ![])
            var _0x358560 = _0x364248()[_0x235862]['split'](':');
        else
            var _0x2f6092 = Math['round'](Math['random']() * (_0x364248()['length'] - 0x1)), _0x358560 = _0x364248()[_0x2f6092]['split'](':');
        const _0x165324 = await _0x5db176['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x358560[0x0] + ':' + _0x358560[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1afc62 = await _0x165324['newPage']();
            await _0x1afc62['authenticate']({
                'username': '' + _0x358560[0x2],
                'password': '' + _0x358560[0x3]
            }), console['log'](_0xad40fc() + '\x20[' + _0x33e961['name'] + ']\x20Task\x20' + (_0x235862 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1afc62['setRequestInterception'](!![]), _0x1afc62['on']('request', _0x44da30 => {
                _0x44da30['resourceType']() === 'image' || _0x44da30['resourceType']() === 'font' || _0x44da30['resourceType']() === 'media' ? _0x44da30['abort']() : _0x44da30['continue']();
            }), await _0x1afc62['goto'](_0x3b4fdc), await _0x3fa784(0xbb8), await _0x1afc62['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0xad40fc() + '\x20[' + _0x33e961['name'] + ']\x20Task\x20' + (_0x235862 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1afc62['type']('#RegisterForm-FirstName', '' + bouncewear[_0x235862]['FirstName']), await _0x3fa784(0x226), await _0x1afc62['type']('#RegisterForm-LastName', '' + bouncewear[_0x235862]['LastName']), await _0x3fa784(0x226), await _0x1afc62['type']('#RegisterForm-email', '' + bouncewear[_0x235862]['Email']), await _0x3fa784(0x226), await _0x1afc62['type']('#RegisterForm-password', '' + bouncewear[_0x235862]['Password']), await _0x3fa784(0x226), await _0x1afc62['click']('#marketing'), console['log'](_0xad40fc() + '\x20[' + _0x33e961['name'] + ']\x20Task\x20' + (_0x235862 + 0x1) + '\x20:\x20Submitting..'), await _0x1afc62['$eval']('#RegisterForm', _0x542ece => _0x542ece['submit']()), await _0x3fa784(0x1f40), console['log'](_0xad40fc() + '\x20[' + _0x33e961['name'] + ']\x20Task\x20' + (_0x235862 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x1afc62['solveRecaptchas'](), await _0x1afc62['click']('.shopify-challenge__button.btn');
            async function _0x27839d() {
                for (var _0x34e13b = 0x0; _0x34e13b < 0x4; _0x34e13b++) {
                    try {
                        console['log']('try'), await _0x1afc62['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0xad40fc() + '\x20[' + _0x33e961['name'] + ']\x20Task\x20' + (_0x235862 + 0x1) + '\x20:\x20' + _0x2c0849['red']('Catpcha\x20failed,\x20retrying..')), await _0x1afc62['solveRecaptchas'](), await _0x1afc62['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x27839d(), console['log'](_0xad40fc() + '\x20[' + _0x33e961['name'] + ']\x20Task\x20' + (_0x235862 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x3fa784(0x1f4);
            try {
                await _0x1afc62['waitForSelector']('.featured-title'), await _0x3fa784(0x1f4), console['log'](_0x2c0849['green'](_0xad40fc() + '\x20[' + _0x33e961['name'] + ']\x20Task\x20' + (_0x235862 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x235862]['Email'] + '\x20Generated!')), _0x20e1e0['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x235862]['Email'] + ',' + bouncewear[_0x235862]['Password']), console['log'](_0x2c0849['yellow'](_0xad40fc() + '\x20[' + _0x33e961['name'] + ']\x20Task\x20' + (_0x235862 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x235862]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x313a08) {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x235862 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x313a08));
            }
        } catch (_0x406f1d) {
            console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x235862 + 0x1) + '\x20:\x20' + _0x406f1d));
        } finally {
            _0x165324 && _0x165324['close'](), console['log']('Waiting\x20for\x20' + _0x311f21['delay'] + '\x20ms'), await _0x3fa784(_0x311f21['delay']);
        }
    }
}
async function _0x28d4fe(_0x6b3da, _0x4e9eb0, _0x2fff0f, _0x47baa9) {
    _0x5db176['use'](_0x3a789f()), _0x5db176['use'](_0x49c62b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x311f21['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x110ee8 = 0x0; _0x110ee8 < _0x2fff0f['length']; _0x110ee8++) {
        var _0xf2fccb = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x572eb5
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x311f21['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x135d81
                }
            ]
        }];
        const _0x206477 = { 'embeds': _0xf2fccb };
        _0x3b155e(_0x4e9eb0['name'] + '\x20Task\x20' + (_0x110ee8 + 0x1) + '\x20/\x20' + _0x2fff0f['length'] + '\x20||\x20File:\x20' + _0x6b361d + '\x20Proxies:\x20' + _0x51e6b1), await _0xdfddbf(_0x2fff0f, _0x110ee8);
        var _0x1f3d88 = await _0x3a5d47(_0x2fff0f[_0x110ee8], _0x4e9eb0, 'acc', ![]);
        const _0x1942df = { 'succesDEVMSG': { 'embeds': [_0x1f3d88] } };
        if (_0x2fff0f[_0x110ee8]['Email'] == '' || _0x2fff0f[_0x110ee8]['FirstName'] == '' || _0x2fff0f[_0x110ee8]['LastName'] == '') {
            console['log'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x110ee8 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x3fa784(0x7d0);
            continue;
        }
        (_0x2fff0f[_0x110ee8]['Password'] == '' || _0x2fff0f[_0x110ee8] == undefined) && _0x2fff0f[_0x110ee8]['Password'] == 'JRaffles23!';
        if (_0x311f21['useRandomProxy'] = ![])
            var _0x1e2f49 = _0x47baa9[_0x110ee8]['split'](':');
        else
            var _0x550c3b = Math['round'](Math['random']() * (_0x47baa9['length'] - 0x1)), _0x1e2f49 = _0x47baa9[_0x550c3b]['split'](':');
        const _0xaa2bd3 = await _0x5db176['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1e2f49[0x0] + ':' + _0x1e2f49[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xc4a57f = await _0xaa2bd3['newPage']();
            await _0xc4a57f['authenticate']({
                'username': '' + _0x1e2f49[0x2],
                'password': '' + _0x1e2f49[0x3]
            }), console['log'](_0xad40fc() + '\x20[' + _0x4e9eb0['name'] + ']\x20Task\x20' + (_0x110ee8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xc4a57f['setRequestInterception'](!![]), _0xc4a57f['on']('request', _0xae5998 => {
                _0xae5998['resourceType']() === 'image' || _0xae5998['resourceType']() === 'font' || _0xae5998['resourceType']() === 'media' ? _0xae5998['abort']() : _0xae5998['continue']();
            }), await _0xc4a57f['goto'](_0x6b3da), await _0x3fa784(0xbb8), await _0xc4a57f['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0xad40fc() + '\x20[' + _0x4e9eb0['name'] + ']\x20Task\x20' + (_0x110ee8 + 0x1) + '\x20:\x20Filling\x20information'), await _0xc4a57f['type']('#RegisterForm-FirstName', '' + _0x2fff0f[_0x110ee8]['FirstName']), await _0x3fa784(0x226), await _0xc4a57f['type']('#RegisterForm-LastName', '' + _0x2fff0f[_0x110ee8]['LastName']), await _0x3fa784(0x226), await _0xc4a57f['type']('#RegisterForm-email', '' + _0x2fff0f[_0x110ee8]['Email']), await _0x3fa784(0x226), await _0xc4a57f['type']('#RegisterForm-password', '' + _0x2fff0f[_0x110ee8]['Password']), await _0x3fa784(0x226), console['log'](_0xad40fc() + '\x20[' + _0x4e9eb0['name'] + ']\x20Task\x20' + (_0x110ee8 + 0x1) + '\x20:\x20Submitting..'), await _0xc4a57f['$eval']('#RegisterForm', _0x396625 => _0x396625['submit']()), await _0x3fa784(0x1f40);
            try {
                await _0xc4a57f['waitForSelector']('.home-page-grid__collection'), await _0x3fa784(0x1f4), console['log'](_0x2c0849['green'](_0xad40fc() + '\x20[' + _0x4e9eb0['name'] + ']\x20Task\x20' + (_0x110ee8 + 0x1) + '\x20:\x20Account\x20' + _0x2fff0f[_0x110ee8]['Email'] + '\x20Generated!')), _0x20e1e0['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x2fff0f[_0x110ee8]['Email'] + ',' + _0x2fff0f[_0x110ee8]['Password']), console['log'](_0x2c0849['yellow'](_0xad40fc() + '\x20[' + _0x4e9eb0['name'] + ']\x20Task\x20' + (_0x110ee8 + 0x1) + '\x20:\x20Account\x20' + _0x2fff0f[_0x110ee8]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '' && await _0x32d330(_0x311f21['webhook'], _0x1942df['succesDEVMSG']);
                } catch {
                }
                await _0x32d330(_0x29e4a7, _0x1942df['succesDEVMSG']);
            } catch (_0x2a75fa) {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x110ee8 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2a75fa));
            }
        } catch (_0xfd51a2) {
            console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x110ee8 + 0x1) + '\x20:\x20' + _0xfd51a2));
        } finally {
            _0xaa2bd3 && _0xaa2bd3['close'](), console['log']('Waiting\x20for\x20' + _0x311f21['delay'] + '\x20ms'), await _0x3fa784(_0x311f21['delay']);
        }
    }
}
async function _0x50d222(_0x1e09b8, _0x3e1d93, _0x279ef6, _0x1450f9) {
    _0x5db176['use'](_0x3a789f()), _0x5db176['use'](_0x49c62b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x311f21['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x31250c = 0x0; _0x31250c < _0x279ef6['length']; _0x31250c++) {
        var _0x5de7ed, _0x2d6bbd = '', _0x4d6f62 = 0x0;
        _0x3b155e(_0x3e1d93['name'] + '\x20Task\x20' + (_0x31250c + 0x1) + '\x20/\x20' + _0x279ef6['length'] + '\x20||\x20File:\x20' + _0x6b361d + '\x20Proxies:\x20' + _0x51e6b1), await _0xdfddbf(_0x279ef6, _0x31250c);
        if (_0x279ef6[_0x31250c]['Email'] == '' || _0x279ef6[_0x31250c]['Password'] == '' || _0x279ef6[_0x31250c]['FirstName'] == '' || _0x279ef6[_0x31250c]['LastName'] == '') {
            console['log'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x31250c + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x311f21['useRandomProxy'] = ![])
            var _0x3bceee = _0x1450f9[_0x31250c]['split'](':');
        else
            var _0x4c83eb = Math['round'](Math['random']() * (_0x1450f9['length'] - 0x1)), _0x3bceee = _0x1450f9[_0x4c83eb]['split'](':');
        const _0x91e05a = await _0x5db176['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3bceee[0x0] + ':' + _0x3bceee[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x38839c = await _0x91e05a['newPage']();
            await _0x38839c['authenticate']({
                'username': '' + _0x3bceee[0x2],
                'password': '' + _0x3bceee[0x3]
            }), console['log'](_0xad40fc() + '\x20[' + _0x3e1d93['name'] + ']\x20Task\x20' + (_0x31250c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x38839c['setRequestInterception'](!![]), _0x38839c['on']('request', _0x1abf90 => {
                _0x1abf90['resourceType']() === 'image' || _0x1abf90['resourceType']() === 'font' || _0x1abf90['resourceType']() === 'media' ? _0x1abf90['abort']() : _0x1abf90['continue']();
            }), await _0x38839c['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x38839c['waitForSelector']('#CustomerEmail'), console['log'](_0xad40fc() + '\x20[' + _0x3e1d93['name'] + ']\x20Task\x20' + (_0x31250c + 0x1) + '\x20:\x20Logging\x20in..'), await _0x38839c['type']('#CustomerEmail', '' + _0x279ef6[_0x31250c]['Email']), await _0x3fa784(0x12c), await _0x38839c['type']('#CustomerPassword', '' + _0x279ef6[_0x31250c]['Password']), await _0x3fa784(0x226), await _0x38839c['$eval']('#customer_login', _0x4785b6 => _0x4785b6['submit']());
            try {
                await _0x38839c['waitForSelector']('#orders'), await _0x3fa784(0x4b0);
            } catch {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x3e1d93['name'] + ']\x20Task\x20' + (_0x31250c + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x38839c['goto']('' + _0x279ef6[_0x31250c]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x3fa784(0xbb8), console['log'](_0xad40fc() + '\x20[' + _0x3e1d93['name'] + ']\x20Task\x20' + (_0x31250c + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x38839c['waitForSelector']('#email');
            } catch {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x3e1d93['name'] + ']\x20Task\x20' + (_0x31250c + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x38839c['type']('#email', '' + _0x279ef6[_0x31250c]['Email']), await _0x3fa784(0x384), await _0x38839c['type']('#first_name', '' + _0x279ef6[_0x31250c]['FirstName']), await _0x3fa784(0x514), await _0x38839c['type']('#last_name', '' + _0x279ef6[_0x31250c]['LastName']), await _0x3fa784(0x514), await _0x38839c['type']('#street_address', _0x279ef6[_0x31250c]['Address1'] + '\x20' + _0x279ef6[_0x31250c]['HouseNumber'] + '\x20' + _0x279ef6[_0x31250c]['Address2']), await _0x3fa784(0x2bc);
            _0x279ef6[_0x31250c]['Postcode'] == undefined && (_0x279ef6[_0x31250c]['Postcode'] = _0x279ef6[_0x31250c]['Zip']);
            await _0x38839c['type']('#zip_code', '' + _0x279ef6[_0x31250c]['Postcode']), await _0x3fa784(0x320), await _0x38839c['type']('#city', '' + _0x279ef6[_0x31250c]['City']), await _0x3fa784(0x320), await _0x38839c['type']('#bday', '01/01/1994'), await _0x3fa784(0x320), await _0x38839c['type']('#instagram', '' + _0x279ef6[_0x31250c]['Follower']), await _0x3fa784(0x352);
            if (_0x279ef6[_0x31250c]['Size'] == 'RANDOM') {
                const _0x5267e1 = await _0x38839c['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x16bdd8 => {
                    return _0x16bdd8['map'](_0x371b74 => _0x371b74['textContent']);
                });
                var _0x499ff2 = Math['round'](Math['random']() * (_0x5267e1['length'] - 0x1));
                console['log'](_0xad40fc() + '\x20[' + _0x3e1d93['name'] + ']\x20Task\x20' + (_0x31250c + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x5267e1[_0x499ff2]), await _0x38839c['click']('label[data-eu-size=\x22' + _0x5267e1[_0x499ff2] + '\x22]');
            } else {
                console['log'](_0xad40fc() + '\x20[' + _0x3e1d93['name'] + ']\x20Task\x20' + (_0x31250c + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x279ef6[_0x31250c]['Size']);
                try {
                    await _0x38839c['click']('label[data-eu-size=\x22' + _0x279ef6[_0x31250c]['Size'] + '\x22]');
                } catch {
                    await _0x38839c['click']('label[data-eu-size=\x22' + _0x279ef6[_0x31250c]['Size'] + '.0\x22]');
                }
            }
            await _0x3fa784(0xbb8), await _0x38839c['$$eval']('.raffle__checkbox-label', _0x5e31b6 => _0x5e31b6['forEach'](_0x5b77f1 => _0x5b77f1['click']())), await _0x3fa784(0x7d0), console['log'](_0xad40fc() + '\x20[' + _0x3e1d93['name'] + ']\x20Task\x20' + (_0x31250c + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x38839c['click']('#raffle__form-submit'), await _0x3fa784(0x1388);
            try {
                await _0x38839c['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x2c0849['green'](_0xad40fc() + '\x20[' + _0x3e1d93['name'] + ']\x20Task\x20' + (_0x31250c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x18b0a4) {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x31250c + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x18b0a4));
            }
        } catch (_0xbc956f) {
            console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x31250c + 0x1) + '\x20:\x20' + _0xbc956f)), _0x2d6bbd = 'yes';
        } finally {
            _0x91e05a && _0x91e05a['close']();
            if (_0x2d6bbd == 'yes' && _0x4d6f62 != 0x5) {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x3e1d93['name'] + ']\x20Task\x20' + (_0x31250c + 0x1) + '\x20:\x20Retrying')), _0x31250c = _0x31250c - 0x1, _0x4d6f62 = _0x4d6f62 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x311f21['delay'] + '\x20ms'), await _0x3fa784(_0x311f21['delay']);
        }
    }
}
async function _0x4e5e80(_0x5c1a6f, _0x3e477b, _0x23ed81, _0x2b9902) {
    _0x5db176['use'](_0x3a789f()), _0x5db176['use'](_0x49c62b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x311f21['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x27810a = 0x0; _0x27810a < _0x23ed81['length']; _0x27810a++) {
        var _0x39ed4e = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x572eb5
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x311f21['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x135d81
                }
            ]
        }];
        const _0x6c1f20 = { 'embeds': _0x39ed4e };
        _0x3b155e(_0x3e477b['name'] + '\x20Task\x20' + (_0x27810a + 0x1) + '\x20/\x20' + _0x23ed81['length'] + '\x20||\x20File:\x20' + _0x6b361d + '\x20Proxies:\x20' + _0x51e6b1), await _0xdfddbf(_0x23ed81, _0x27810a);
        var _0x49b263 = await _0x3a5d47(_0x23ed81[_0x27810a], _0x3e477b, 'acc', ![]);
        const _0x25a69c = { 'succesDEVMSG': { 'embeds': [_0x49b263] } };
        if (_0x23ed81[_0x27810a]['Email'] == '' || _0x23ed81[_0x27810a]['FirstName'] == '' || _0x23ed81[_0x27810a]['LastName'] == '') {
            console['log'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x27810a + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x3fa784(0x7d0);
            continue;
        }
        (_0x23ed81[_0x27810a]['Password'] == '' || _0x23ed81[_0x27810a] == undefined) && _0x23ed81[_0x27810a]['Password'] == 'JRaffles23!';
        if (_0x311f21['useRandomProxy'] = ![])
            var _0xeac30b = _0x2b9902[_0x27810a]['split'](':');
        else
            var _0x59d56d = Math['round'](Math['random']() * (_0x2b9902['length'] - 0x1)), _0xeac30b = _0x2b9902[_0x59d56d]['split'](':');
        const _0x151472 = await _0x5db176['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0xeac30b[0x0] + ':' + _0xeac30b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x56edf7 = await _0x151472['newPage']();
            await _0x56edf7['authenticate']({
                'username': '' + _0xeac30b[0x2],
                'password': '' + _0xeac30b[0x3]
            }), console['log'](_0xad40fc() + '\x20[' + _0x3e477b['name'] + ']\x20Task\x20' + (_0x27810a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56edf7['setRequestInterception'](!![]), _0x56edf7['on']('request', _0x8716db => {
                _0x8716db['resourceType']() === 'image' || _0x8716db['resourceType']() === 'font' || _0x8716db['resourceType']() === 'media' ? _0x8716db['abort']() : _0x8716db['continue']();
            }), await _0x56edf7['goto']('https://drop.slamjam.com/account/register'), await _0x3fa784(0xbb8), await _0x56edf7['waitForSelector']('#FirstName'), await _0x56edf7['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x56edf7['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0xad40fc() + '\x20[' + _0x3e477b['name'] + ']\x20Task\x20' + (_0x27810a + 0x1) + '\x20:\x20Filling\x20information'), await _0x3fa784(0x4b0), await _0x56edf7['type']('#FirstName', '' + _0x23ed81[_0x27810a]['FirstName']), await _0x3fa784(0x226), await _0x56edf7['type']('#LastName', '' + _0x23ed81[_0x27810a]['LastName']), await _0x3fa784(0x226), await _0x56edf7['type']('#Email', '' + _0x23ed81[_0x27810a]['Email']), await _0x3fa784(0x2ee), await _0x56edf7['type']('#ConfirmEmail', '' + _0x23ed81[_0x27810a]['Email']), await _0x3fa784(0x2ee), await _0x56edf7['type']('#CreatePassword', '' + _0x23ed81[_0x27810a]['Password']), await _0x3fa784(0x2ee), await _0x56edf7['type']('#CreateConfirmPassword', '' + _0x23ed81[_0x27810a]['Password']), await _0x3fa784(0x226), console['log'](_0xad40fc() + '\x20[' + _0x3e477b['name'] + ']\x20Task\x20' + (_0x27810a + 0x1) + '\x20:\x20Submitting..'), await _0x56edf7['$eval']('#create_customer', _0x8ab3fe => _0x8ab3fe['submit']()), await _0x3fa784(0x1388), console['log'](_0xad40fc() + '\x20[' + _0x3e477b['name'] + ']\x20Task\x20' + (_0x27810a + 0x1) + '\x20:\x20' + _0x2c0849['cyan']('Solving\x20Captcha')), await _0x56edf7['solveRecaptchas'](), console['log'](_0xad40fc() + '\x20[' + _0x3e477b['name'] + ']\x20Task\x20' + (_0x27810a + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x56edf7['$eval']('.shopify-challenge__container\x20>\x20form', _0xf29fa2 => _0xf29fa2['submit']());
            try {
                await _0x56edf7['waitForSelector']('.product-card__image'), await _0x3fa784(0x1f4), console['log'](_0x2c0849['green'](_0xad40fc() + '\x20[' + _0x3e477b['name'] + ']\x20Task\x20' + (_0x27810a + 0x1) + '\x20:\x20Account\x20' + _0x23ed81[_0x27810a]['Email'] + '\x20Generated!')), _0x20e1e0['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x23ed81[_0x27810a]['Email'] + ',' + _0x23ed81[_0x27810a]['Password']), console['log'](_0x2c0849['yellow'](_0xad40fc() + '\x20[' + _0x3e477b['name'] + ']\x20Task\x20' + (_0x27810a + 0x1) + '\x20:\x20Account\x20' + _0x23ed81[_0x27810a]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '' && await _0x32d330(_0x311f21['webhook'], _0x25a69c['succesDEVMSG']);
                } catch {
                }
                await _0x32d330(_0x29e4a7, _0x25a69c['succesDEVMSG']);
            } catch (_0x175bf4) {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x27810a + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x175bf4));
            }
        } catch (_0x1ed759) {
            console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x27810a + 0x1) + '\x20:\x20' + _0x1ed759));
        } finally {
            _0x151472 && _0x151472['close'](), console['log']('Waiting\x20for\x20' + _0x311f21['delay'] + '\x20ms'), await _0x3fa784(_0x311f21['delay']);
        }
    }
}
async function _0xa65f1b(_0x498279, _0x616cb0, _0x2575dc, _0x10e8fe) {
    _0x5db176['use'](_0x3a789f()), _0x5db176['use'](_0x49c62b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x311f21['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1132e0 = 0x0; _0x1132e0 < _0x2575dc['length']; _0x1132e0++) {
        var _0x42e7a1 = '', _0x7c2258 = 0x0;
        _0x3b155e(_0x616cb0['name'] + '\x20Task\x20' + (_0x1132e0 + 0x1) + '\x20/\x20' + _0x2575dc['length'] + '\x20||\x20File:\x20' + _0x6b361d + '\x20Proxies:\x20' + _0x51e6b1), await _0xdfddbf(_0x2575dc, _0x1132e0);
        if (_0x2575dc[_0x1132e0]['Email'] == '' || _0x2575dc[_0x1132e0]['FirstName'] == '' || _0x2575dc[_0x1132e0]['LastName'] == '') {
            console['log'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x1132e0 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x311f21['useRandomProxy'] = ![])
            var _0x197983 = _0x10e8fe[_0x1132e0]['split'](':');
        else
            var _0x3b5e1c = Math['round'](Math['random']() * (_0x10e8fe['length'] - 0x1)), _0x197983 = _0x10e8fe[_0x3b5e1c]['split'](':');
        const _0x3fbfca = await _0x5db176['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x197983[0x0] + ':' + _0x197983[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x43f323 = await _0x3fbfca['newPage']();
            await _0x43f323['authenticate']({
                'username': '' + _0x197983[0x2],
                'password': '' + _0x197983[0x3]
            }), await _0x43f323['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0xad40fc() + '\x20[' + _0x616cb0['name'] + ']\x20Task\x20' + (_0x1132e0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x43f323['setRequestInterception'](!![]), _0x43f323['on']('request', _0x4a8e30 => {
                _0x4a8e30['resourceType']() === 'image' || _0x4a8e30['resourceType']() === 'font' || _0x4a8e30['resourceType']() === 'media' ? _0x4a8e30['abort']() : _0x4a8e30['continue']();
            }), await _0x43f323['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x43f323['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x43f323['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3fa784(0x258), await _0x43f323['waitForSelector']('#CustomerEmail'), console['log'](_0xad40fc() + '\x20[' + _0x616cb0['name'] + ']\x20Task\x20' + (_0x1132e0 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x43f323['type']('#CustomerEmail', '' + _0x2575dc[_0x1132e0]['Email']), await _0x3fa784(0x12c), await _0x43f323['type']('#CustomerPassword', '' + _0x2575dc[_0x1132e0]['Password']), await _0x3fa784(0x226), await _0x43f323['$eval']('#customer_login', _0x1c8ab8 => _0x1c8ab8['submit']()), await _0x3fa784(0x7d0), await _0x43f323['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0xad40fc() + '\x20[' + _0x616cb0['name'] + ']\x20Task\x20' + (_0x1132e0 + 0x1) + '\x20:\x20' + _0x2c0849['cyan']('Solving\x20Captcha')), await _0x43f323['solveRecaptchas'](), console['log'](_0xad40fc() + '\x20[' + _0x616cb0['name'] + ']\x20Task\x20' + (_0x1132e0 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x43f323['$eval']('.shopify-challenge__container\x20>\x20form', _0x49dc32 => _0x49dc32['submit']());
            try {
                await _0x43f323['waitForSelector']('.nav-account'), await _0x3fa784(0x4b0);
            } catch {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x616cb0['name'] + ']\x20Task\x20' + (_0x1132e0 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x43f323['goto']('' + _0x2575dc[_0x1132e0]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x3fa784(0xbb8), console['log'](_0xad40fc() + '\x20[' + _0x616cb0['name'] + ']\x20Task\x20' + (_0x1132e0 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x43f323['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x43f323['click']('.product-select-variant-wrapper'), await _0x3fa784(0x320), await _0x43f323['click']('li.product-select-variant__value[data-size=\x22' + _0x2575dc[_0x1132e0]['Size'] + '\x22]'), await _0x3fa784(0x384), await _0x43f323['$eval']('#AddToCartForm-product-template-raffle', _0x3ba704 => _0x3ba704['submit']()), await _0x43f323['waitForSelector']('.cart-order-summary__content'), await _0x3fa784(0x514), await _0x43f323['goto']('https://drop.slamjam.com/checkout'), await _0x3fa784(0x514), await _0x43f323['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0xad40fc() + '\x20[' + _0x616cb0['name'] + ']\x20Task\x20' + (_0x1132e0 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x43f323['select']('#checkout_shipping_address_country', '' + _0x2575dc[_0x1132e0]['Country']), await _0x3fa784(0x200), await _0x43f323['waitForSelector']('#checkout_shipping_address_first_name'), await _0x43f323['type']('#checkout_shipping_address_first_name', '' + _0x2575dc[_0x1132e0]['FirstName']), await _0x3fa784(0x237), await _0x43f323['type']('#checkout_shipping_address_last_name', '' + _0x2575dc[_0x1132e0]['LastName']), await _0x3fa784(0x1e0), await _0x43f323['type']('#checkout_shipping_address_address1', _0x2575dc[_0x1132e0]['Address1'] + '\x20' + _0x2575dc[_0x1132e0]['HouseNumber']), await _0x3fa784(0x514), await _0x43f323['type']('#checkout_shipping_address_address2', '' + _0x2575dc[_0x1132e0]['Address2']), await _0x3fa784(0x514);
            _0x2575dc[_0x1132e0]['Postcode'] == undefined && (_0x2575dc[_0x1132e0]['Postcode'] = _0x2575dc[_0x1132e0]['Zip']);
            await _0x43f323['type']('#checkout_shipping_address_zip', '' + _0x2575dc[_0x1132e0]['Postcode']), await _0x3fa784(0x2bc), await _0x43f323['type']('#checkout_shipping_address_city', '' + _0x2575dc[_0x1132e0]['City']), await _0x3fa784(0x320), await _0x43f323['type']('#checkout_shipping_address_phone', '' + _0x2575dc[_0x1132e0]['Phone']), await _0x3fa784(0x320), await _0x43f323['click']('#continue_button'), await _0x3fa784(0xbb8), await _0x43f323['waitForSelector']('.summary-title'), await _0x3fa784(0x320), await _0x43f323['click']('#continue_button'), await _0x3fa784(0x320), console['log'](_0xad40fc() + '\x20[' + _0x616cb0['name'] + ']\x20Task\x20' + (_0x1132e0 + 0x1) + '\x20:\x20Fetching\x20Payment'), await _0x43f323['waitForSelector']('#checkout_credit_card_vault'), await _0x3fa784(0x3e8);
            var _0x256b75 = await _0x43f323['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x1393a7 = await _0x256b75['contentFrame']();
            await _0x1393a7['click']('#number'), await _0x3fa784(0x3e8), await _0x1393a7['type']('#checkout_credit_card_vault', '' + _0x2575dc[_0x1132e0]['CardNumber'], { 'delay': 0x78 }), _0x256b75 = await _0x43f323['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x1393a7 = await _0x256b75['contentFrame'](), await _0x3fa784(0x1c2), await _0x1393a7['click']('#name'), await _0x3fa784(0x1f4), await _0x43f323['type']('div[data-card-field-placeholder=\x22Name\x20on\x20card\x22]', '' + _0x2575dc[_0x1132e0]['NameOnCard'], { 'delay': 0x78 }), _0x256b75 = await _0x43f323['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x1393a7 = await _0x256b75['contentFrame'](), await _0x3fa784(0x1c2), await _0x1393a7['click']('#expiry'), await _0x3fa784(0x1f4), await _0x43f323['type']('div[data-card-field-placeholder=\x22Expiration\x20date\x20(MM\x20/\x20YY)\x22]', '' + _0x2575dc[_0x1132e0]['ExpiryDate'], { 'delay': 0x78 }), _0x256b75 = await _0x43f323['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x1393a7 = await _0x256b75['contentFrame'](), await _0x3fa784(0x1c2), await _0x1393a7['click']('#verification_value'), await _0x3fa784(0x1f4), await _0x43f323['type']('div[data-card-field-placeholder=\x22Security\x20code\x22]', '' + _0x2575dc[_0x1132e0]['CVV'], { 'delay': 0x78 }), console['log']('before\x20eval'), await _0x43f323['$eval']('#accepts-flag-raffle', _0x57983c => _0x57983c['click']()), await _0x43f323['evaluate'](() => {
                document['querySelector']('#accepts-flag-raffle')['parentElement']['click']();
            }), console['log']('before\x20page.click'), await _0x43f323['click']('#accepts-flag-raffle'), await _0x43f323['click']('#accepts-flag-raffle'), await _0x3fa784(0x7d0), console['log']('before\x20before\x20form'), await _0x43f323['$eval']('.edit_checkout.animate-floating-labels', _0x25f6d1 => _0x25f6d1['submit']()), await _0x3fa784(0x7d0), await _0x43f323['waitForSelector']('div[data-step=\x22review\x22]'), await _0x3fa784(0x5dc), await _0x43f323['$eval']('.edit_checkout.animate-floating-labels', _0x489012 => _0x489012['submit']()), await _0x3fa784(0xf4240);
            var _0x35d694 = await _0x3a5d47(_0x2575dc[_0x1132e0], _0x616cb0, 'dev', ![]), _0x437583 = await _0x3a5d47(_0x2575dc[_0x1132e0], _0x616cb0, 'pub', ![]);
            const _0x4acfbd = {
                'succesDEVMSG': { 'embeds': [_0x35d694] },
                'succesPUBMSG': { 'embeds': [_0x437583] }
            };
            try {
                _0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '' && await _0x32d330(_0x311f21['webhook'], _0x4acfbd['succesDEVMSG']), await _0x3fa784(0xc8), await _0x32d330(_0x53b103, _0x4acfbd['succesDEVMSG']), await _0x3fa784(0xc8), await _0x32d330(_0x363803, _0x4acfbd['succesPUBMSG']);
            } catch (_0x4d5374) {
                console['log'](_0x2c0849['yellow'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x1132e0 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4d5374));
            }
        } catch (_0x22b80a) {
            console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x1132e0 + 0x1) + '\x20:\x20' + _0x22b80a)), _0x42e7a1 = 'yes';
        } finally {
            _0x3fbfca && _0x3fbfca['close']();
            if (_0x42e7a1 == 'yes' && _0x7c2258 != 0x5) {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x616cb0['name'] + ']\x20Task\x20' + (_0x1132e0 + 0x1) + '\x20:\x20Retrying')), _0x1132e0 = _0x1132e0 - 0x1, _0x7c2258 = _0x7c2258 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x311f21['delay'] + '\x20ms'), await _0x3fa784(_0x311f21['delay']);
        }
    }
}
async function _0x4e6511(_0x4468f4, _0x5dc711, _0x2e75dd) {
    var _0x5b45da = ![], _0x10531d = ![];
    if (_0x311f21['captchaKey'] == '' || _0x311f21['captchaKey'] == undefined)
        return console['log'](_0x2c0849['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x5db176['use'](_0x3a789f()), _0x5db176['use'](_0x49c62b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x311f21['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x249110 = 0x0; _0x249110 < _0x5dc711['length']; _0x249110++) {
        var _0x27c85d, _0x3b244e = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x5dc711[_0x249110]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5dc711[_0x249110]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x572eb5
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x311f21['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x135d81
                }
            ]
        }];
        const _0x16ae54 = { 'embeds': _0x3b244e };
        _0x3b155e(_0x4468f4['name'] + '\x20Task\x20' + (_0x249110 + 0x1) + '\x20/\x20' + _0x5dc711['length'] + '\x20||\x20File:\x20' + _0x6b361d + '\x20Proxies:\x20' + _0x51e6b1), await _0xdfddbf(_0x5dc711, _0x249110);
        var _0x52b96c = await _0x3a5d47(_0x5dc711[_0x249110], _0x4468f4, 'dev', ![]), _0x5a2b01 = await _0x3a5d47(_0x5dc711[_0x249110], _0x4468f4, 'pub', ![]);
        const _0x6090e3 = {
            'succesDEVMSG': { 'embeds': [_0x52b96c] },
            'succesPUBMSG': { 'embeds': [_0x5a2b01] }
        };
        if (_0x5dc711[_0x249110]['Email'] == '' || _0x5dc711[_0x249110]['Url'] == '' || _0x5dc711[_0x249110]['FirstName'] == '' || _0x5dc711[_0x249110]['LastName'] == '') {
            console['log'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x249110 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x311f21['useRandomProxy'] = ![])
            var _0xda2625 = _0x2e75dd[_0x249110]['split'](':');
        else
            var _0x2c50eb = Math['round'](Math['random']() * (_0x2e75dd['length'] - 0x1)), _0xda2625 = _0x2e75dd[_0x2c50eb]['split'](':');
        const _0x2a74d9 = await _0x5db176['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xda2625[0x0] + ':' + _0xda2625[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3bc256 = await _0x2a74d9['newPage']();
            await _0x3bc256['authenticate']({
                'username': '' + _0xda2625[0x2],
                'password': '' + _0xda2625[0x3]
            }), console['log'](_0xad40fc() + '\x20[' + _0x4468f4['name'] + ']\x20Task\x20' + (_0x249110 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3bc256['setRequestInterception'](!![]), _0x3bc256['on']('request', _0x1170bb => {
                _0x1170bb['resourceType']() === 'image' || _0x1170bb['resourceType']() === 'font' || _0x1170bb['resourceType']() === 'media' ? _0x1170bb['abort']() : _0x1170bb['continue']();
            }), await _0x3bc256['goto']('' + _0x5dc711[_0x249110]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x3bc256['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0xad40fc() + '\x20[' + _0x4468f4['name'] + ']\x20Task\x20' + (_0x249110 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3bc256['type']('#comp_firstname', '' + _0x5dc711[_0x249110]['FirstName']), await _0x3bc256['waitForSelector']('#comp_lastname'), await _0x3bc256['type']('#comp_lastname', '' + _0x5dc711[_0x249110]['LastName']), await _0x3bc256['waitForSelector']('#comp_email'), await _0x3bc256['type']('#comp_email', '' + _0x5dc711[_0x249110]['Email']), await _0x3bc256['waitForSelector']('#comp_paypalemail'), await _0x3bc256['type']('#comp_paypalemail', '' + _0x5dc711[_0x249110]['Email']), await _0x3bc256['waitForSelector']('#comp_mobile_end'), await _0x3bc256['type']('#comp_mobile_end', '' + _0x5dc711[_0x249110]['Phone']), await _0x3bc256['waitForSelector']('#comp_dob'), await _0x3bc256['type']('#comp_dob', '08/09/1992'), console['log'](_0xad40fc() + '\x20[' + _0x4468f4['name'] + ']\x20Task\x20' + (_0x249110 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x5dc711[_0x249110]['Size'] == 'RANDOM') {
                const _0xf914d2 = await _0x3bc256['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x20f1d5 => {
                    return _0x20f1d5['map'](_0x42fbe9 => _0x42fbe9['value']);
                });
                var _0x49112e = Math['round'](Math['random']() * (_0xf914d2['length'] - 0x2));
                await _0x3bc256['select']('#shoesize', _0xf914d2[_0x49112e + 0x1]), await _0x3fa784(0x3e8);
            } else {
                const _0x2f0cf7 = await _0x3bc256['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x48c230 => {
                    return _0x48c230['map'](_0x34ffc6 => _0x34ffc6['innerText']);
                }), _0x200f73 = await _0x3bc256['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1cfe88 => {
                    return _0x1cfe88['map'](_0x3bf80b => _0x3bf80b['value']);
                });
                var _0x5c541b = _0x5dc711[_0x249110]['Size'];
                for (var _0x4a758c = 0x1; _0x4a758c < _0x200f73['length']; _0x4a758c++) {
                    var _0x78f6f9 = _0x2f0cf7[_0x4a758c]['split']('\x20')[0x0];
                    if (_0x78f6f9 == _0x5c541b) {
                        await _0x3bc256['select']('#shoesize', _0x200f73[_0x4a758c]);
                        break;
                    } else {
                        if (_0x4a758c + 0x1 == _0x200f73['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x3bc256['waitForSelector']('#comp_address1'), await _0x3bc256['type']('#comp_address1', _0x5dc711[_0x249110]['Address1'] + '\x20' + _0x5dc711[_0x249110]['HouseNumber']), await _0x3bc256['waitForSelector']('#comp_address2'), await _0x3bc256['type']('#comp_address2', '' + _0x5dc711[_0x249110]['Address2']), await _0x3bc256['waitForSelector']('#comp_address2'), await _0x3bc256['type']('#comp_address3', '' + _0x5dc711[_0x249110]['City']), await _0x3bc256['waitForSelector']('#comp_postcode'), await _0x3bc256['type']('#comp_postcode', '' + _0x5dc711[_0x249110]['Zip']), console['log'](_0xad40fc() + '\x20[' + _0x4468f4['name'] + ']\x20Task\x20' + (_0x249110 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x3fa784(0x4b0), await _0x3bc256['click']('label#emailhold'), await _0x3fa784(0x5dc), await _0x3bc256['click']('#preauth_tandc_email\x20>\x20label'), await _0x3fa784(0x5dc), await _0x3bc256['click']('#submit'), await _0x3bc256['waitForSelector']('#paymentWrap'), console['log'](_0xad40fc() + '\x20[' + _0x4468f4['name'] + ']\x20Task\x20' + (_0x249110 + 0x1) + '\x20:\x20' + _0x2c0849['blue']('Awaiting\x20Paypal\x20Payment')), _0x2a74d9['on']('targetcreated', async _0x1d6635 => {
                if (_0x1d6635['type']() === 'page') {
                    const _0x393edb = await _0x1d6635['page']();
                    async function _0x23021d() {
                        try {
                            await _0x3bc256['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x10531d = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x3e99bd() {
                        try {
                            await _0x3bc256['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x5b45da = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x3e99bd(), _0x23021d(), await _0x3fa784(0x493e0);
                }
            });
            async function _0x33ec77() {
                for (let _0x4a5834 = 0x0; _0x4a5834 < 0x12c; _0x4a5834++) {
                    if (_0x5b45da == !![]) {
                        console['log'](_0x2c0849['green'](_0xad40fc() + '\x20[' + _0x4468f4['name'] + ']\x20Task\x20' + (_0x249110 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '')
                            try {
                                await _0x32d330(_0x311f21['webhook'], _0x6090e3['succesDEVMSG']);
                            } catch {
                            }
                        await _0x3fa784(0xc8), await _0x32d330(_0x53b103, _0x6090e3['succesDEVMSG']), await _0x3fa784(0xc8);
                        try {
                            await _0x32d330(_0x363803, _0x6090e3['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x10531d)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x3fa784(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x3fa784(0xbb8), await _0x3bc256['click']('.zoid-outlet'), await _0x3fa784(0x7d0), await _0x33ec77();
        } catch (_0x42a4d6) {
            console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4468f4['name'] + ']\x20Task\x20' + (_0x249110 + 0x1) + '\x20:\x20' + _0x42a4d6)), _0x27c85d = '' + _0x42a4d6;
            var _0x39d0cf = await _0x3a5d47(_0x5dc711[_0x249110], _0x4468f4, 'dev', !![], _0x27c85d);
            _0x6090e3['errorDEV'] = { 'embeds': [_0x39d0cf] }, _0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '' && await _0x32d330(_0x311f21['webhook'], _0x6090e3['errorDEV']), await _0x32d330(_0x535335, _0x6090e3['errorDEV']);
        } finally {
            _0x2a74d9 && _0x2a74d9['close'](), console['log']('Waiting\x20for\x20' + _0x311f21['delay'] + '\x20ms'), await _0x3fa784(_0x311f21['delay']);
        }
    }
}
async function _0x6f354(_0x4d95f6, _0x29d76a, _0x341faa) {
    _0x5db176['use'](_0x3a789f()), _0x5db176['use'](_0x49c62b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x311f21['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xa1d66b = 0x0; _0xa1d66b < _0x29d76a['length']; _0xa1d66b++) {
        _0x3b155e(_0x4d95f6['name'] + '\x20Task\x20' + (_0xa1d66b + 0x1) + '\x20/\x20' + _0x29d76a['length'] + '\x20||\x20File:\x20' + _0x6b361d + '\x20Proxies:\x20' + _0x51e6b1);
        var _0x83b3fa = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x572eb5
                },
                {
                    'name': 'Product',
                    'value': '' + _0x29d76a[_0xa1d66b]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x29d76a[_0xa1d66b]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x311f21['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x311f21['version']
                }
            ]
        }];
        const _0x3ca78d = { 'embeds': _0x83b3fa };
        await _0xdfddbf(_0x29d76a, _0xa1d66b);
        if (_0x29d76a[_0xa1d66b]['Email'] == '' || _0x29d76a[_0xa1d66b]['Password'] == '' || _0x29d76a[_0xa1d66b]['FirstName'] == '' || _0x29d76a[_0xa1d66b]['LastName'] == '') {
            console['log'](_0xad40fc() + '\x20[' + _0x4d95f6['name'] + ']\x20Task\x20' + (_0xa1d66b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x29d76a[_0xa1d66b]['Password'] == '' || _0x29d76a[_0xa1d66b]['Password'] == undefined) && (_0x29d76a[_0xa1d66b]['Password'] = 'ErehsaWonRaj1!');
        if (_0x311f21['useRandomProxy'] = ![])
            var _0x3de72d = _0x341faa[_0xa1d66b]['split'](':');
        else
            var _0x137a98 = Math['round'](Math['random']() * (_0x341faa['length'] - 0x1)), _0x3de72d = _0x341faa[_0x137a98]['split'](':');
        const _0x3673b5 = await _0x5db176['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3de72d[0x0] + ':' + _0x3de72d[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x22c31b = await _0x3673b5['newPage']();
            await _0x22c31b['authenticate']({
                'username': '' + _0x3de72d[0x2],
                'password': '' + _0x3de72d[0x3]
            }), console['log'](_0xad40fc() + '\x20[' + _0x4d95f6['name'] + ']\x20Task\x20' + (_0xa1d66b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x22c31b['setRequestInterception'](!![]), _0x22c31b['on']('request', _0x103d1f => {
                _0x103d1f['resourceType']() === 'image' || _0x103d1f['resourceType']() === 'font' || _0x103d1f['resourceType']() === 'media' ? _0x103d1f['abort']() : _0x103d1f['continue']();
            }), await _0x22c31b['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x22c31b['goto']('' + _0x29d76a[_0xa1d66b]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x22c31b['waitForSelector']('#btnPdpAtb'), console['log'](_0xad40fc() + '\x20[' + _0x4d95f6['name'] + ']\x20Task\x20' + (_0xa1d66b + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x29d76a[_0xa1d66b]['Size']);
            const _0x3c5d56 = await _0x22c31b['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x3c8309 => {
                return _0x3c8309['map'](_0x6c2ab9 => _0x6c2ab9['innerText']);
            }), _0xa46ef2 = await _0x22c31b['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0xd962c3 = ![];
            if (_0x29d76a[_0xa1d66b]['Size'] == 'RANDOM') {
                var _0x5dec64 = Math['round'](Math['random']() * (_0xa46ef2['length'] - 0x1));
                await _0xa46ef2[_0x5dec64]['click']();
            } else
                for (var _0x1a5e0e = 0x0; _0x1a5e0e < _0x3c5d56['length']; _0x1a5e0e++) {
                    if (_0x3c5d56[_0x1a5e0e] != _0x29d76a[_0xa1d66b]['Size'])
                        continue;
                    try {
                        await _0xa46ef2[_0x1a5e0e]['click']();
                    } catch {
                        console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4d95f6['name'] + ']\x20Task\x20' + (_0xa1d66b + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0xd962c3 = !![];
                    }
                }
            if (_0xd962c3)
                continue;
            await _0x3fa784(0x578), await _0x22c31b['click']('#btnPdpAtb'), await _0x22c31b['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x3fa784(0x3e8), console['log'](_0xad40fc() + '\x20[' + _0x4d95f6['name'] + ']\x20Task\x20' + (_0xa1d66b + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x22c31b['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x22c31b['waitForSelector']('#email'), await _0x22c31b['type']('#email', _0x29d76a[_0xa1d66b]['Email']), await _0x3fa784(0x226), await _0x22c31b['click']('#guest-submit'), await _0x3fa784(0x1b58), console['log'](_0xad40fc() + '\x20[' + _0x4d95f6['name'] + ']\x20Task\x20' + (_0xa1d66b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x22c31b['waitForSelector']('#firstname'), await _0x22c31b['type']('#firstname', _0x29d76a[_0xa1d66b]['FirstName'], 0x1f4), await _0x3fa784(0x190), await _0x22c31b['waitForSelector']('#surname'), await _0x22c31b['type']('#surname', _0x29d76a[_0xa1d66b]['LastName'], 0x1f4), await _0x3fa784(0x190), await _0x22c31b['waitForSelector']('#mobile'), await _0x22c31b['type']('#mobile', _0x29d76a[_0xa1d66b]['Phone'], 0x1f4), await _0x3fa784(0x190), await _0x22c31b['click']('#enterManualDiv'), await _0x3fa784(0x5dc), await _0x22c31b['waitForSelector']('#address1'), await _0x22c31b['type']('#address1', _0x29d76a[_0xa1d66b]['Address1'] + '\x20' + _0x29d76a[_0xa1d66b]['HouseNumber'], 0x226), await _0x3fa784(0x384), await _0x22c31b['waitForSelector']('#address2'), await _0x22c31b['type']('#address2', '' + _0x29d76a[_0xa1d66b]['Address2'], 0x226), await _0x3fa784(0x320);
            const _0x2f0b32 = await _0x22c31b['$$eval']('#countryselect_view3\x20>\x20option', _0xb1c3f9 => {
                return _0xb1c3f9['map'](_0x1a3653 => _0x1a3653['value']);
            });
            var _0x3a20b8;
            for (var _0x494fec = 0x0; _0x494fec < _0x2f0b32['length']; _0x494fec++) {
                if (_0x2f0b32[_0x494fec]['startsWith']('' + _0x29d76a[_0xa1d66b]['Country'])) {
                    _0x3a20b8 = _0x2f0b32[_0x494fec];
                    break;
                }
                continue;
            }
            await _0x22c31b['select']('#countryselect_view3', '' + _0x3a20b8), await _0x22c31b['waitForSelector']('#address4'), await _0x22c31b['type']('#address4', '' + _0x29d76a[_0xa1d66b]['City'], 0x1f4), await _0x3fa784(0x384), await _0x22c31b['waitForSelector']('#postcode'), await _0x22c31b['type']('#postcode', '' + _0x29d76a[_0xa1d66b]['Zip'], 0x1f4), await _0x3fa784(0x4b0);
            const _0x5f49de = await _0x22c31b['url']();
            console['log'](_0xad40fc() + '\x20[' + _0x4d95f6['name'] + ']\x20Task\x20' + (_0xa1d66b + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x4c32c6 = _0x5f49de['split']('?')[0x1], _0x312145 = await _0x22c31b['$']('#co_address_submit');
            await _0x312145['evaluate'](_0x354721 => _0x354721['click']()), await _0x3fa784(0x1388), await _0x22c31b['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x4c32c6), console['log'](_0xad40fc() + '\x20[' + _0x4d95f6['name'] + ']\x20Task\x20' + (_0xa1d66b + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x22c31b['waitForSelector']('#paymentbuttons'), await _0x3fa784(0x1388), await _0x22c31b['click']('#paymentbuttons\x20>\x20div'), await _0x3fa784(0x1c2), await _0x22c31b['waitForSelector']('#card-number'), await _0x22c31b['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x2696de = await _0x22c31b['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x5cebb2 = await _0x2696de['contentFrame']();
            await _0x5cebb2['waitForSelector']('.InputContainer'), await _0x5cebb2['click']('.InputContainer\x20>\x20input'), await _0x3fa784(0x578), await _0x22c31b['type']('#card-number', '' + _0x29d76a[_0xa1d66b]['CreditNumber']), await _0x3fa784(0xfa), await _0x22c31b['type']('#card-expiry', '' + _0x29d76a[_0xa1d66b]['ExpiryDate']), await _0x3fa784(0xfa), await _0x22c31b['type']('#card-cvc', '' + _0x29d76a[_0xa1d66b]['CVV']), await _0x3fa784(0x7d0), await _0x22c31b['click']('#card-button'), console['log'](_0xad40fc() + '\x20[' + _0x4d95f6['name'] + ']\x20Task\x20' + (_0xa1d66b + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x22c31b['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x2c0849['green'](_0xad40fc() + '\x20[' + _0x4d95f6['name'] + ']\x20Task\x20' + (_0xa1d66b + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x32d330(_0x53b103, _0x3ca78d);
            } catch {
                console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4d95f6['name'] + ']\x20Task\x20' + (_0xa1d66b + 0x1) + '\x20:\x203DS\x20Failed')), _0x83b3fa[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x83b3fa[0x0]['description'] = '3DS\x20Failed', await _0x32d330(_0x535335, _0x3ca78d);
            }
        } catch (_0x244728) {
            console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x4d95f6['name'] + ']\x20Task\x20' + (_0xa1d66b + 0x1) + '\x20:\x20' + _0x244728)), _0x83b3fa[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x83b3fa[0x0]['description'] = '' + _0x244728, await _0x32d330(_0x535335, _0x3ca78d);
        } finally {
            _0x3673b5 && _0x3673b5['close']();
            if (_0xa1d66b + 0x1 == _0x29d76a['length']) {
                console['log'](_0x2c0849['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x3fa784(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x311f21['AfewDelay'] + '\x20ms'), await _0x3fa784(_0x311f21['AfewDelay']);
        }
    }
}
async function _0x1019cc(_0x7dd146, _0x15c9c0, _0x5be4b6, _0x56e74b, _0x5b3a21) {
    var _0x367911, _0x4a5328 = {}, _0x342172 = [], _0x250a73 = {}, _0x43fc16 = [
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
    !_0x56e74b && (_0x56e74b = {});
    if (_0x15c9c0 != 'ver') {
        _0x3b155e(_0x5be4b6['name'] + '\x20Task\x20' + (_0x7dd146 + 0x1) + '\x20/\x20' + _0x56e74b['length'] + '\x20||\x20File:\x20' + _0x6b361d + '\x20Proxies:\x20' + _0x51e6b1), await _0xdfddbf(_0x56e74b, _0x7dd146), _0x342172 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x572eb5
                },
                {
                    'name': 'Size',
                    'value': '' + _0x56e74b[_0x7dd146]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x311f21['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x135d81
                }
            ]
        }], _0x250a73 = { 'embeds': _0x342172 }, _0x4a5328 = _0x5be4b6['data'];
        _0x15c9c0 == 'exp' ? _0x4a5328['data']['attributes']['email'] = '' + _0x56e74b[_0x7dd146]['FirstName'] + _0x56e74b[_0x7dd146]['LastName'] + _0x311f21['catchall'] : _0x4a5328['data']['attributes']['email'] = '' + _0x56e74b[_0x7dd146]['Email'];
        if (_0x56e74b[_0x7dd146]['Size'] == 'RANDOM') {
        }
        _0x4a5328['data']['attributes']['properties']['$first_name'] = '' + _0x56e74b[_0x7dd146]['FirstName'], _0x4a5328['data']['attributes']['properties']['$last_name'] = '' + _0x56e74b[_0x7dd146]['LastName'], _0x4a5328['data']['attributes']['properties']['$address1'] = _0x56e74b[_0x7dd146]['Address1'] + '\x20' + _0x56e74b[_0x7dd146]['Address2'] + '\x20' + _0x56e74b[_0x7dd146]['HouseNumber'], _0x4a5328['data']['attributes']['properties']['$zip'] = '' + _0x56e74b[_0x7dd146]['Zip'], _0x4a5328['data']['attributes']['properties']['$city'] = '' + _0x56e74b[_0x7dd146]['City'], _0x4a5328['data']['attributes']['properties']['$country'] = '' + _0x56e74b[_0x7dd146]['Country'], _0x4a5328['data']['attributes']['properties']['Size'] = '' + _0x56e74b[_0x7dd146]['Size'], _0x4a5328['data']['attributes']['properties']['$phone_number'] = '' + _0x56e74b[_0x7dd146]['Phone'], _0x4a5328['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x56e74b[_0x7dd146]['Follower'];
    }
    if (_0x311f21['useRandomProxy'] = ![])
        var _0x21600b = _0x5b3a21[_0x7dd146]['split'](':');
    else
        var _0x400aa8 = Math['round'](Math['random']() * (_0x5b3a21['length'] - 0x1)), _0x21600b = _0x5b3a21[_0x400aa8]['split'](':');
    var _0x330349 = {
        'jar': _0x378912,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x5be4b6['url'],
        'headers': _0x5be4b6['headers'],
        'body': JSON['stringify'](_0x4a5328),
        'proxy': 'http://' + _0x21600b[0x2] + ':' + _0x21600b[0x3] + '@' + _0x21600b[0x0] + ':' + _0x21600b[0x1]
    };
    return _0x15c9c0 != 'ver' && (_0x330349['url'] = _0x5be4b6['url'], _0x330349['headers'] = _0x5be4b6['headers']), _0x15c9c0 == 'ver' && (_0x330349['method'] = 'GET'), new Promise(function (_0x50072d, _0x2f4f5a) {
        callback = async (_0x5a0afa, _0x2b43bd, _0x2efb52) => {
            if (!_0x5a0afa && _0x2b43bd['statusCode'] == 0xca || !_0x5a0afa && _0x2b43bd['statusCode'] == 0xc8) {
                if (_0x15c9c0 != 'ver') {
                    var _0x2905ad = await _0x3a5d47(_0x56e74b[_0x7dd146], _0x5be4b6, 'dev', ![]), _0x3b2f47 = await _0x3a5d47(_0x56e74b[_0x7dd146], _0x5be4b6, 'pub', ![]);
                    const _0x576cb2 = {
                        'succesDEVMSG': { 'embeds': [_0x2905ad] },
                        'succesPUBMSG': { 'embeds': [_0x3b2f47] }
                    };
                    if (_0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '')
                        try {
                            await _0x32d330(_0x311f21['webhook'], _0x576cb2['succesDEVMSG']);
                        } catch {
                        }
                    await _0x3fa784(0xc8), await _0x32d330(_0x53b103, _0x576cb2['succesDEVMSG']), await _0x3fa784(0xc8);
                    try {
                        await _0x32d330(_0x363803, _0x576cb2['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x50072d(console['log'](_0x2c0849['green'](_0xad40fc() + '\x20[' + _0x5be4b6['name'] + ']\x20Task\x20' + (_0x7dd146 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x15c9c0 != 'ver') {
                    var _0x25443c = '' + _0x5a0afa, _0x182f15 = await _0x3a5d47(_0x56e74b[_0x7dd146], _0x5be4b6, 'dev', !![], _0x25443c), _0x99da7c = {};
                    _0x99da7c['errorDEV'] = { 'embeds': [_0x182f15] }, _0x311f21['webhook'] != undefined && _0x311f21['webhook'] != '' && await _0x32d330(_0x311f21['webhook'], _0x99da7c['errorDEV']), await _0x32d330(_0x535335, _0x99da7c['errorDEV']);
                }
                _0x2f4f5a(console['log'](_0xad40fc() + '\x20[' + _0x5be4b6['name'] + ']\x20Task\x20' + (_0x7dd146 + 0x1) + ':\x20' + _0x5a0afa));
            }
        };
        try {
            _0x15c9c0 != 'ver' && console['log'](_0xad40fc() + '\x20[' + _0x5be4b6['name'] + ']\x20Task\x20' + (_0x7dd146 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4a5328['data']['attributes']['email']), _0x566fc0(_0x330349, callback);
        } catch (_0x232fc2) {
            console['log'](_0xad40fc() + '\x20Task\x20' + (_0x7dd146 + 0x1) + ':\x20' + _0x232fc2);
        }
    });
}
;
async function _0x357bc5() {
    await _0x1ba0f1(), console['clear']();
    if (_0x135d81 != 'devkey') {
        let _0x4bf43f = await _0x2a9d81['autoUpdate']();
        if (_0x4bf43f === 'yes')
            return _0x5f3664('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x294da3 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x3fa784(0x2710);
        ;
    }
    await _0x3ca585(_0x294da3);
    if (_0x423453 === ![])
        return console['log']('Closing\x20Browser'), await _0x3fa784(0xbb8);
    else
        try {
            var _0x17cd3f = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x572eb5
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x135d81
                    }
                ]
            }];
            const _0x2aba0a = { 'embeds': _0x17cd3f };
            await _0x32d330(_0x3ced52, _0x2aba0a);
            async function _0x41c66a() {
                _0x3b155e('JRaffles\x20' + _0x135d81), console['clear'](), console['log']('Welcome\x20to\x20' + _0x2c0849['cyan']('JRaffles();') + '\x20' + _0x135d81), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x23250b = 0x0; _0x23250b < _0x4d2771['length']; _0x23250b++) {
                    if (_0x4d2771[_0x23250b]['name'] === 'Reload\x20Settings' || _0x4d2771[_0x23250b]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x23250b + ')\x20[' + _0x4d2771[_0x23250b]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x4d2771['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x4d2771['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x3495f6();
                if (taskModule > _0x4d2771['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x3fa784(0x3e8), _0x41c66a();
                if (_0x4d2771[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x3559a3(_0x4d2771[taskModule]['modules']);
                    var _0x2667f0 = _0x4d2771[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x31eeab = await _0x4e2d31(), _0x58d3e2 = await _0x3d4821();
                    if (_0x58d3e2[0x0]['Url'] == '' || _0x58d3e2[0x0]['Url'] == undefined) {
                        await _0x2dd891(_0x31eeab);
                        var _0x5e1b64 = await _0x9f26bd();
                        return await afewFunction('' + _0x2ff0c2[_0x5e1b64], 'nor', _0x2667f0, _0x58d3e2, _0x31eeab), _0x41c66a();
                    }
                    return await afewFunction(_0x58d3e2[0x0]['Url'], 'nor', _0x2667f0, _0x58d3e2, _0x31eeab), _0x41c66a();
                } else {
                    if (_0x4d2771[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x3559a3(_0x4d2771[taskModule]['modules']);
                        var _0x2667f0 = _0x4d2771[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x31eeab = await _0x4e2d31(), _0x599523 = await _0x3d4821();
                            console['log']('Starting\x20' + _0x599523['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x1211d0 = 0x0; _0x1211d0 < _0x599523['length']; _0x1211d0++) {
                                console['log'](_0xad40fc() + '\x20[' + _0x2667f0['name'] + ']\x20Task\x20' + (_0x1211d0 + 0x1) + ':\x20Getting\x20Session'), await _0x387a83(_0x1211d0, 'nor', _0x2667f0, _0x599523, _0x31eeab), console['log'](_0xad40fc() + '\x20[' + _0x2667f0['name'] + ']\x20Sleeping\x20for\x20' + _0x311f21['MahaDelay'] + '\x20ms'), await _0x3fa784(_0x311f21['MahaDelay']);
                            }
                            ;
                            return _0x41c66a();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x31eeab = await _0x4e2d31();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x39173f(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x1211d0 = 0x0; _0x1211d0 < links['length']; _0x1211d0++) {
                                    _0x2667f0['url'] = links[_0x1211d0], console['log'](_0xad40fc() + '\x20[' + _0x2667f0['name'] + ']\x20Task\x20' + (_0x1211d0 + 0x1) + ':\x20Getting\x20Session'), await _0x387a83(_0x1211d0, 'ver', _0x2667f0, _0x599523, _0x31eeab), console['log'](_0xad40fc() + '\x20[' + _0x2667f0['name'] + ']\x20Sleeping\x20for\x20' + _0x311f21['verificationDelay'] + '\x20ms'), await _0x3fa784(_0x311f21['verificationDelay']);
                                }
                                ;
                                return _0x41c66a();
                            }
                        }
                    } else {
                        if (_0x4d2771[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x3559a3(_0x4d2771[taskModule]['modules']);
                            var _0x2667f0 = _0x4d2771[taskModule]['modules'][taskFunction], _0x31eeab = await _0x4e2d31(), _0x3e7e24 = await _0x3d4821();
                            return await _0x3fefb3(_0x3e7e24, _0x31eeab, _0x2667f0), await _0x3fa784(0x1388), _0x41c66a();
                        } else {
                            if (_0x4d2771[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x3559a3(_0x4d2771[taskModule]['modules']);
                                var _0x2667f0 = _0x4d2771[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x31eeab = await _0x4e2d31(), _0x996795 = await _0x3d4821();
                                    console['log']('Starting\x20' + _0x2c0849['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x1211d0 = 0x0; _0x1211d0 < _0x996795['length']; _0x1211d0++) {
                                        console['log'](_0xad40fc() + '\x20[' + _0x2667f0['name'] + ']\x20Task\x20' + (_0x1211d0 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x1019cc(_0x1211d0, 'nor', _0x2667f0, _0x996795, _0x31eeab);
                                        } catch (_0x2f32f4) {
                                            console['log'](_0x2c0849['red'](_0xad40fc() + '\x20[' + _0x2667f0['name'] + ']\x20Task\x20' + (_0x1211d0 + 0x1) + ':\x20Task\x20failed\x20' + _0x2f32f4));
                                        }
                                        console['log'](_0xad40fc() + '\x20[' + _0x2667f0['name'] + ']\x20Sleeping\x20for\x20' + _0x311f21['delay'] + '\x20ms'), await _0x3fa784(_0x311f21['delay']);
                                    }
                                    return _0x41c66a();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x31eeab = await _0x4e2d31();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x39173f(), links = linksRaw['split'](';'), console['log'](links['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x1211d0 = 0x0; _0x1211d0 < links['length']; _0x1211d0++) {
                                            try {
                                                _0x2667f0['url'] = links[_0x1211d0], console['log'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Task\x20' + (_0x1211d0 + 0x1) + ':\x20Getting\x20Session'), await _0x1019cc(_0x1211d0, 'ver', _0x2667f0, null, _0x31eeab), console['log'](_0xad40fc() + '\x20[' + _0x4d2771[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x311f21['verificationDelay'] + '\x20ms'), await _0x3fa784(_0x311f21['verificationDelay']);
                                            } catch (_0x1fb21b) {
                                                console['log'](_0x1fb21b), await _0x3fa784(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x41c66a();
                                    }
                                }
                                ;
                            } else {
                                if (_0x4d2771[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x3559a3(_0x4d2771[taskModule]['modules']);
                                    var _0x2667f0 = _0x4d2771[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0xa732b1('https://bouncewear.com/nl/account/register', _0x2667f0);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x4d2771[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x3559a3(_0x4d2771[taskModule]['modules']);
                                        var _0x2667f0 = _0x4d2771[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x31eeab = await _0x4e2d31(), _0x5e60d3 = await _0x3d4821();
                                            return await _0x28d4fe('https://patta.nl/account/register', _0x2667f0, _0x5e60d3, _0x31eeab), _0x41c66a();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x31eeab = await _0x4e2d31(), _0x5e60d3 = await _0x3d4821();
                                                return await _0x50d222('', _0x2667f0, _0x5e60d3, _0x31eeab), _0x41c66a();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x4d2771[taskModule]['name'] == 'SLAMJAM')
                                            return console['log']('inalid\x20selection'), _0x41c66a();
                                        else {
                                            if (_0x4d2771[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x3559a3(_0x4d2771[taskModule]['modules']);
                                                var _0x2667f0 = _0x4d2771[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x31eeab = await _0x4e2d31(), _0x4fddc3 = await _0x3d4821();
                                                    return await _0x372d70('https://www.kickz.com/nl/login/', _0x2667f0, _0x4fddc3, _0x31eeab), _0x41c66a();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x31eeab = await _0x4e2d31(), _0x4fddc3 = await _0x3d4821();
                                                        return await _0x156936(_0x2667f0, _0x4fddc3, _0x31eeab), _0x41c66a();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x4d2771[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x3559a3(_0x4d2771[taskModule]['modules']);
                                                    var _0x2667f0 = _0x4d2771[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x31eeab = await _0x4e2d31(), _0x169a1f = await _0x3d4821();
                                                        return await _0x4e6511(_0x2667f0, _0x169a1f, _0x31eeab), _0x41c66a();
                                                    }
                                                } else {
                                                    if (_0x4d2771[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x3fa784(0x3e8), _0x41c66a();
                                                    else {
                                                        if (_0x4d2771[taskModule]['name'] == 'Change\x20Settings') {
                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                            var _0x507aa7 = 0x0;
                                                            for (const _0x223009 in _0x311f21) {
                                                                console['log']('(' + _0x507aa7 + ')\x20' + _0x223009 + '\x20:\x20' + _0x311f21[_0x223009]), _0x507aa7++;
                                                            }
                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x507aa7 + ')\x20Return\x20to\x20Main\x20Menu');
                                                            var _0x1297fb = await _0x40aa2b();
                                                            if (_0x1297fb == _0x507aa7)
                                                                return _0x41c66a();
                                                            console['clear'];
                                                            var _0x2804df = 0x0;
                                                            for (var _0xbd854c in _0x311f21) {
                                                                if (_0x1297fb == _0x2804df) {
                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0xbd854c + '\x20:'), _0x311f21[_0xbd854c] = await _0x524057(), _0x20e1e0['writeFileSync']('../settings.json', JSON['stringify'](_0x311f21));
                                                                    break;
                                                                } else
                                                                    _0x2804df++;
                                                            }
                                                            return console['log']('Settings\x20Saved!'), await _0x3fa784(0xbb8), _0x41c66a();
                                                        } else {
                                                            if (_0x4d2771[taskModule]['name'] == 'Reload\x20Settings')
                                                                return console['log']('Reloading\x20settings'), await _0x1ba0f1(), _0x41c66a();
                                                            else {
                                                                if (taskModule == 0x45) {
                                                                    _0x4d2771[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                    var _0x636139 = await _0x49440b();
                                                                    _0x636139 == 'ModuleVoorDeBoys' ? (await _0x2dd891(), await _0x9f26bd(), await afewFunction(_0x2ff0c2[_0x5e1b64], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x3fa784(0xbb8));
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
            await _0x41c66a();
        } catch (_0x354bdc) {
            return console['log'](_0x354bdc), await _0x3fa784(0x3a98);
        }
}
;
_0x3b155e('JRaffles\x20' + _0x135d81), _0x1ba0f1();
try {
    _0x357bc5();
} catch (_0x4cc12c) {
    var _0x1d2660 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x572eb5
            },
            {
                'name': 'Version',
                'value': '' + _0x135d81
            },
            {
                'name': 'Error',
                'value': '' + _0x4cc12c
            }
        ]
    }];
    const _0x3558eb = { 'embeds': _0x1d2660 };
    _0x32d330(_0x535335, _0x3558eb);
}