const { EmbedBuilder: _0x185bff } = require('discord.js');
var _0x4f932f = require('exe');
const { execFile: _0x3cf58c } = require('child_process'), _0x52eb11 = require('puppeteer-extra'), _0x315cd9 = require('puppeteer-extra-plugin-recaptcha'), _0x14af75 = require('puppeteer-extra-plugin-stealth'), _0x3d6019 = require('chalk'), _0x180b8a = require('node-bash-title'), _0x44b12e = require('fs'), _0x48bc3c = require('axios'), _0x36189f = require('papaparse');
var _0x1dbef3 = require('random-name');
const _0x1b3c90 = require('request');
var _0x32de93 = require('prompt');
const _0xa1437f = _0x1b3c90['jar']();
var _0x30a907 = {};
const _0x224ded = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x4eda06 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x45792e = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x1a1794 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x173e59 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x32190b = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0xdf2bc9 = 'https://discord.com/api/webhooks/', _0x31d724 = '' + _0xdf2bc9 + _0x45792e, _0x567e6c = '' + _0xdf2bc9 + _0x1a1794, _0x14ae8c = '' + _0xdf2bc9 + _0x224ded, _0x2e30ca = '' + _0xdf2bc9 + _0x4eda06, _0x25e6a4 = '' + _0xdf2bc9 + _0x173e59, _0x2c49af = '' + _0xdf2bc9 + _0x32190b;
const _0x1a46d9 = JSON['parse'](_0x44b12e['readFileSync']('../package.json', 'utf-8')), _0x11eacc = _0x1a46d9['version'];
var _0x3e23a7, _0x37e473, _0x4797a4, _0x483a14, _0x3caaa8, _0x3a0802, _0x21dc83, _0x35df88;
const _0x58d1c0 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0xcee717 = ![];
const _0x4fccca = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x787f3e = '0123456789';
var _0x339269 = _0x4fccca['split']('');
const _0x2f7b79 = require('auto-git-update'), { PageEmittedEvents: _0x37f3da } = require('puppeteer'), { getRandomValues: _0x55915f } = require('crypto'), { resolve: _0x2b4212 } = require('path'), { Console: _0x317e9f } = require('console'), _0x443d09 = {
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
}, _0x33e0b2 = new _0x2f7b79(_0x443d09);
async function _0x4350c5() {
    _0x3caaa8 = _0x44b12e['readdirSync']('../proxies'), _0x483a14 = _0x44b12e['readdirSync']('../tasks'), _0x30a907 = JSON['parse'](_0x44b12e['readFileSync']('../settings.json', 'utf-8')), !_0x30a907['delay'] && (_0x30a907['delay'] = 0x2710, _0x44b12e['writeFileSync']('../settings.json', JSON['stringify'](_0x30a907))), !_0x30a907['captchaKey'] && (_0x30a907['captchaKey'] = '', _0x44b12e['writeFileSync']('../settings.json', JSON['stringify'](_0x30a907))), !_0x30a907['useRandomProxy'] && (_0x30a907['useRandomProxy'] = !![], _0x44b12e['writeFileSync']('../settings.json', JSON['stringify'](_0x30a907))), !_0x30a907['webhook'] && (_0x30a907['webhook'] = '', _0x44b12e['writeFileSync']('../settings.json', JSON['stringify'](_0x30a907))), _0x30a907['MahaDelay'] = _0x30a907['delay'], _0xdf2bc9 = _0x30a907['webhook'], _0x3a0802 = _0x30a907['licenseKey'];
}
let _0x130d6a, _0x1058e3 = [], _0x78712d;
const _0x599511 = _0x150085 => new Promise(_0x1aa97b => setTimeout(_0x1aa97b, _0x150085));
function _0x522bdc(_0xb78f64, _0xea8f31) {
    return Math['floor'](Math['random']() * (_0xea8f31 - _0xb78f64 + 0x1) + _0xb78f64);
}
async function _0x13dcaa(_0x147062) {
    return _0x48bc3c['get']('https://api.hyper.co/v4/licenses/' + _0x147062, { 'headers': { 'Authorization': 'Bearer\x20' + _0x58d1c0 } })['then'](_0x22fe4f => _0x22fe4f['data'])['catch'](() => null);
}
;
async function _0x1ef279(_0x36defa) {
    console['clear']();
    if (_0x36defa == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x179c11 = await _0x32de93['get']('License');
        if (_0x179c11['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x599511(0xbb8), _0x1ef279(_0x36defa);
        _0x36defa = _0x179c11['License'], _0x30a907['licenseKey'] = _0x36defa, _0x3a0802 = _0x36defa, _0x44b12e['writeFileSync']('../settings.json', JSON['stringify'](_0x30a907));
    }
    console['log']('Checking\x20license\x20' + _0x3a0802 + '...'), await _0x599511(0x320);
    const _0x184b7d = await _0x13dcaa(_0x36defa);
    _0x21dc83 = JSON['stringify'](_0x184b7d['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x35df88 = JSON['stringify'](_0x184b7d['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x184b7d)
        return console['log']('License\x20not\x20found');
    if (!_0x184b7d['user'])
        return console['log']('License\x20not\x20bound');
    return _0x184b7d['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0xcee717 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0xcee717 = ![]);
}
async function _0xabd63a() {
    var _0xb7760d = await _0x32de93['get']('Module');
    return console['clear'](), _0xb7760d['Module'];
}
;
async function _0x118655() {
    var _0x34285d = await _0x32de93['get']('Setting');
    return console['clear'](), _0x34285d['Setting'];
}
async function _0x22f965() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x2c7404 = 0x0; _0x2c7404 < _0x483a14['length']; _0x2c7404++) {
        console['log']('\x20(' + _0x2c7404 + ')\x20' + _0x483a14[_0x2c7404]);
    }
    console['log']('');
    var _0xebe32e = await _0x32de93['get']('Task');
    if (_0xebe32e['Task'] > _0x483a14['length'] - 0x1 || isNaN(_0xebe32e['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x599511(0x3e8), _0x22f965();
    var _0x5003cb = _0x44b12e['readFileSync']('../tasks/' + _0x483a14[_0xebe32e['Task']], 'utf-8');
    return _0x4797a4 = _0x36189f['parse'](_0x5003cb, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x3d6019['blue'](_0x483a14[_0xebe32e['Task']])), _0x3e23a7 = _0x483a14[_0xebe32e['Task']], _0x4797a4;
}
async function _0x20049c() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x3716a = 0x0; _0x3716a < _0x3caaa8['length']; _0x3716a++) {
        console['log']('\x20(' + _0x3716a + ')\x20' + _0x3caaa8[_0x3716a]);
    }
    console['log']('');
    var _0x3a5194 = await _0x32de93['get']('Proxies');
    if (_0x3a5194['Proxies'] > _0x3caaa8['length'] - 0x1 || isNaN(_0x3a5194['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x599511(0x3e8), _0x20049c();
    var _0x342a4d = _0x44b12e['readFileSync']('../proxies/' + _0x3caaa8[_0x3a5194['Proxies']], 'utf-8')['split']('\x0a');
    let _0x4adaf9 = _0x342a4d['map']((_0x24cc7d, _0x57273e) => {
        sanatizeProxy = _0x24cc7d['replace']('\x0d', '');
        if (_0x342a4d[_0x57273e + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x37e473 = _0x3caaa8[_0x3a5194['Proxies']], console['clear'](), _0x4adaf9;
}
async function _0x46f69f() {
    var _0x4f6135 = await _0x32de93['get']('Value');
    return console['clear'](), _0x4f6135['Value'];
}
async function _0x357f44(_0x1f9188) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x70dd81 = 0x0; _0x70dd81 < _0x1f9188['length']; _0x70dd81++) {
        console['log']('\x20(' + _0x70dd81 + ')\x20[' + _0x1f9188[_0x70dd81]['name'] + ']');
    }
    ;
    console['log']('');
    var _0xe04f5c = await _0x32de93['get']('Module');
    return _0xe04f5c['Module'];
}
async function _0x37924e() {
    var _0x33f972 = await _0x32de93['get']('Password');
    return console['clear'](), _0x33f972['Password'];
}
;
async function _0x13f02d() {
    var _0x4e9b60 = await _0x32de93['get']('Links');
    return _0x4e9b60['Links'];
}
;
async function _0x543efc() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x3feb03 = 0x0; _0x3feb03 < _0x1058e3['length']; _0x3feb03++) {
        console['log']('\x20(' + _0x3feb03 + ')\x20' + _0x1058e3[_0x3feb03]);
    }
    ;
    console['log']();
    let _0x220c37 = await _0x32de93['get']('Product');
    return console['clear'](), _0x220c37['Product'];
}
;
function _0x2ae997() {
    var _0x4ce68d = new Date(Date['now']())['toLocaleTimeString']();
    return _0x4ce68d;
}
;
const _0x3db39b = [
    {
        'name': 'AFEW\x20Store',
        'modules': [{
            'name': 'AFEW\x20Raffle\x20Entries',
            'store': 'AFEW',
            'logo': 'https://d19kzigy6tpscu.cloudfront.net/media/CACHE/images/logo_thumbnail/afew_logo_100x100_1647428869.png'
        }]
    },
    {
        'name': 'BSTN',
        'modules': [
            {
                'name': 'BSTN\x20Account\x20Generator',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png'
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png'
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png'
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
                'store': 'MAHA',
                'logo': 'https://i1.sndcdn.com/avatars-XIAMNs5LPWV2iRwj-SNwa5A-t500x500.jpg',
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
                            'list_id': 'WdVw7N',
                            'custom_source': 'DV3742-021',
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
                                '$consent_form_id': 'S8GH2D',
                                '$consent_form_version': 0x7d9216,
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
        'name': 'SLAM\x20JAM',
        'modules': [
            {
                'name': 'SLAM\x20JAM\x20Account\x20Generator',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505'
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505'
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x309275(_0x36ad5c, _0x6151db) {
    let _0x99a4 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x11eacc != 'devkey') {
        await _0x48bc3c['post'](_0x36ad5c, _0x6151db, _0x99a4);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x1bffbc(_0x335305, _0x3dbdc8, _0x21bf65, _0x52e363, _0x18f87b) {
    if (!_0x52e363 && _0x21bf65 == 'dev') {
        var _0x2b1479 = new _0x185bff()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x3dbdc8['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x3dbdc8['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x335305['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x30a907['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x21dc83,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x335305['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x11eacc,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x2b1479['data'];
    } else {
        if (_0x52e363 && _0x21bf65 == 'dev') {
            var _0x2b1479 = new _0x185bff()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x3dbdc8['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x21dc83,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x3dbdc8['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x335305['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x30a907['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x18f87b,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x335305['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x11eacc,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x2b1479['data'];
        } else {
            if (_0x21bf65 == 'pub') {
                var _0x2b1479 = new _0x185bff()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x3dbdc8['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x3dbdc8['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x335305['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x30a907['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x335305['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x11eacc,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x2b1479['data'];
            } else {
                if (_0x21bf65 == 'acc') {
                    var _0x2b1479 = new _0x185bff()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x3dbdc8['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x21dc83,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x3dbdc8['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x30a907['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x11eacc,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x2b1479['data'];
                } else {
                    if (_0x21bf65 == 'open') {
                        var _0x2b1479 = new _0x185bff()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x35df88)['addFields']({
                            'name': 'User',
                            'value': '' + _0x21dc83,
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x11eacc,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x2b1479['data'];
                    } else {
                        if (!_0x52e363 && _0x21bf65 == 'ver') {
                            var _0x2b1479 = new _0x185bff()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x3dbdc8['logo'])['addFields']({
                                'name': 'User',
                                'value': '' + _0x21dc83,
                                'inline': !![]
                            }, {
                                'name': 'Store',
                                'value': '' + _0x3dbdc8['store'],
                                'inline': !![]
                            }, {
                                'name': 'Delay',
                                'value': '' + _0x30a907['delay'],
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x11eacc,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x2b1479['data'];
                        } else {
                            if (_0x52e363 && _0x21bf65 == 'ver') {
                                var _0x2b1479 = new _0x185bff()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x3dbdc8['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x21dc83,
                                    'inline': !![]
                                }, {
                                    'name': 'Error',
                                    'value': '' + _0x18f87b,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x3dbdc8['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x30a907['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x11eacc,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x2b1479['data'];
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x53a5ee(_0x2b3936, _0xba60c8) {
    var _0x5b8ba1 = _0x2b3936[_0xba60c8]['Address1']['split'](''), _0x2f093e = _0x2b3936[_0xba60c8]['Address2']['split'](''), _0x4556ab = _0x2b3936[_0xba60c8]['Email']['split']('@');
    for (var _0xb1456a = 0x0; _0xb1456a < _0x5b8ba1['length']; _0xb1456a++) {
        if (_0x5b8ba1[_0xb1456a] == 'X') {
            var _0x2e970f = Math['round'](Math['random']() * (_0x4fccca['length'] - 0x1));
            _0x5b8ba1[_0xb1456a] = _0x339269[_0x2e970f];
        }
    }
    ;
    for (var _0xb1456a = 0x0; _0xb1456a < _0x2f093e['length']; _0xb1456a++) {
        if (_0x2f093e[_0xb1456a] == 'X') {
            var _0x2e970f = Math['round'](Math['random']() * (_0x4fccca['length'] - 0x1));
            _0x2f093e[_0xb1456a] = _0x339269[_0x2e970f];
        }
    }
    ;
    _0x2b3936[_0xba60c8]['FirstName'] == 'RANDOM' && (_0x2b3936[_0xba60c8]['FirstName'] = _0x1dbef3['first']());
    _0x2b3936[_0xba60c8]['LastName'] == 'RANDOM' && (_0x2b3936[_0xba60c8]['LastName'] = _0x1dbef3['last']());
    _0x4556ab[0x0] == 'RANDOM' ? _0x4556ab[0x0] = '' + _0x1dbef3['first']() + _0x1dbef3['last']() + '@' : _0x4556ab[0x0] = _0x4556ab[0x0] + '@';
    _0x2b3936[_0xba60c8]['Email'] = _0x4556ab['join'](''), _0x2b3936[_0xba60c8]['Address1'] = _0x5b8ba1['join'](''), _0x2b3936[_0xba60c8]['Address2'] = _0x2f093e['join']('');
    _0x2b3936[_0xba60c8]['Phone'] == 'RANDOM' && (_0x2b3936[_0xba60c8]['Phone'] = '0' + _0x522bdc(0x5f5e100, 0x3b9ac9ff));
    if (_0x2b3936[_0xba60c8]['Follower'] == 'RANDOM') {
        var _0x555f4b = _0x522bdc(0x1, 0x270f);
        _0x2b3936[_0xba60c8]['Follower'] = '' + _0x1dbef3['first']() + _0x1dbef3['last']() + _0x555f4b + '\x20';
    }
    _0x2b3936[_0xba60c8]['HouseNumber'] == 'RANDOM' && (_0x2b3936[_0xba60c8]['HouseNumber'] = _0x522bdc(0x1, 0xc8));
    if (_0x2b3936[_0xba60c8]['Address1'] == 'RANDOM') {
        var _0x8acb3d = Math['round'](Math['random']() * (_0x4fccca['length'] - 0x1)), _0x20a04a = _0x339269[_0x8acb3d];
        _0x2b3936[_0xba60c8]['Address1'] = _0x1dbef3['last']() + 'straat', _0x2b3936[_0xba60c8]['Zip'] == '' && (_0x2b3936[_0xba60c8]['Postcode'] = _0x522bdc(0x3e8, 0x270f) + '\x20' + _0x20a04a + _0x20a04a, _0x2b3936[_0xba60c8]['Zip'] = _0x2b3936[_0xba60c8]['Postcode']), _0x2b3936[_0xba60c8]['HouseNumber'] = '' + _0x522bdc(0x1, 0xc8);
    }
    return;
}
;
function _0x3ec2f5() {
    let _0x5e063a = proxyFile['split']('\x0a'), _0x30e89d = _0x5e063a['map']((_0x68da49, _0x1cddd7) => {
        sanatizeProxy = _0x68da49['replace']('\x0d', '');
        if (_0x5e063a[_0x1cddd7 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x30e89d;
}
;
async function _0x267671(_0x4bb764) {
    var _0x38b182 = _0x4bb764[0x1]['split'](':');
    const _0x88862c = await _0x52eb11['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x38b182[0x0] + ':' + _0x38b182[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x4f2c96 = await _0x88862c['newPage']();
        await _0x4f2c96['authenticate']({
            'username': '' + _0x38b182[0x2],
            'password': '' + _0x38b182[0x3]
        }), console['log'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x4f2c96['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4f2c96['setRequestInterception'](!![]), _0x4f2c96['on']('request', _0x16625e => {
            _0x16625e['resourceType']() === 'image' || _0x16625e['resourceType']() === 'font' || _0x16625e['resourceType']() === 'media' ? _0x16625e['abort']() : _0x16625e['continue']();
        }), await _0x4f2c96['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x4f2c96['waitForTimeout'](0xbb8), await _0x4f2c96['waitForSelector']('.product-card');
        const _0x27455d = await _0x4f2c96['$$eval']('a.product-card', _0x16de20 => {
            return _0x16de20['map'](_0x4578ff => _0x4578ff['href']);
        });
        return _0x1058e3 = _0x27455d;
    } catch (_0x1463b2) {
        console['log']('\x20' + _0x1463b2);
    } finally {
        _0x88862c['close'](), console['clear']();
    }
}
;
async function _0x207fc9(_0x1afd38, _0xd85645, _0x5bb47f, _0x1f107f, _0x106297) {
    _0xd85645 != 'ver' && await _0x53a5ee(_0x1f107f, _0x1afd38);
    if (_0x30a907['useRandomProxy'] = ![])
        var _0x13bce3 = _0x106297[_0x1afd38]['split'](':');
    else
        var _0x521354 = Math['round'](Math['random']() * (_0x106297['length'] - 0x1)), _0x13bce3 = _0x106297[_0x521354]['split'](':');
    var _0x1aca84 = _0x5bb47f['data'];
    _0xd85645 != 'ver' && (_0x1aca84['data']['attributes']['properties']['$first_name'] = '' + _0x1f107f[_0x1afd38]['FirstName'], _0x1aca84['data']['attributes']['properties']['$last_name'] = '' + _0x1f107f[_0x1afd38]['LastName'], _0x1aca84['data']['attributes']['properties']['$address1'] = _0x1f107f[_0x1afd38]['Address1'] + '\x20' + _0x1f107f[_0x1afd38]['HouseNumber'] + '\x20' + _0x1f107f[_0x1afd38]['Address2'], _0x1aca84['data']['attributes']['properties']['$zip'] = '' + _0x1f107f[_0x1afd38]['Zip'], _0x1aca84['data']['attributes']['properties']['$city'] = '' + _0x1f107f[_0x1afd38]['City'], _0x1aca84['data']['attributes']['properties']['$country'] = '' + _0x1f107f[_0x1afd38]['Country'], _0x1aca84['data']['attributes']['properties']['Size'] = '' + _0x1f107f[_0x1afd38]['Size'], _0x1aca84['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x1f107f[_0x1afd38]['Follower'], _0xd85645 == 'exp' ? _0x1aca84['data']['attributes']['email'] = '' + _0x1f107f[_0x1afd38]['FirstName'] + _0x1f107f[_0x1afd38]['LastName'] + _0x30a907['catchall'] : _0x1aca84['data']['attributes']['email'] = '' + _0x1f107f[_0x1afd38]['Email']);
    var _0x48ea4b = {
        'jar': _0xa1437f,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x5bb47f['url'],
        'headers': _0x5bb47f['headers'],
        'body': JSON['stringify'](_0x1aca84),
        'proxy': 'http://' + _0x13bce3[0x2] + ':' + _0x13bce3[0x3] + '@' + _0x13bce3[0x0] + ':' + _0x13bce3[0x1]
    };
    return _0xd85645 === 'ver' && (_0x48ea4b['method'] = 'GET'), new Promise(function (_0x1edb87, _0x40fb80) {
        callback = async (_0x3a6f8f, _0x46d9d3, _0x5662f5) => {
            if (!_0x3a6f8f && _0x46d9d3['statusCode'] == 0xca || !_0x3a6f8f && _0x46d9d3['statusCode'] == 0xc8) {
                _0x1edb87(console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x5bb47f['name'] + ']\x20Task\x20' + (_0x1afd38 + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0xd85645 != 'ver') {
                    var _0x1cda8f = await _0x1bffbc(_0x1f107f[_0x1afd38], _0x5bb47f, 'dev', ![]), _0x18b00b = await _0x1bffbc(_0x1f107f[_0x1afd38], _0x5bb47f, 'pub', ![]);
                    const _0x32a82b = {
                        'succesDEVMSG': { 'embeds': [_0x1cda8f] },
                        'succesPUBMSG': { 'embeds': [_0x18b00b] }
                    };
                    if (_0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '')
                        try {
                            await _0x309275(_0x30a907['webhook'], _0x32a82b['succesDEVMSG']);
                        } catch {
                        }
                    await _0x599511(0xc8), await _0x309275(_0x14ae8c, _0x32a82b['succesDEVMSG']), await _0x599511(0xc8);
                    try {
                        await _0x309275(_0x25e6a4, _0x32a82b['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0xd85645 == 'ver') {
                        var _0x1cda8f = await _0x1bffbc(null, _0x5bb47f, 'ver', ![]);
                        const _0x5aead0 = {
                            'succesDEVMSG': { 'embeds': [_0x1cda8f] },
                            'succesPUBMSG': { 'embeds': [_0x18b00b] }
                        };
                        await _0x309275(_0x2c49af, _0x5aead0['succesDEVMSG']);
                    }
                }
            } else {
                if (_0xd85645 != 'ver') {
                    var _0x245a5d = '' + _0x3a6f8f, _0x2f3aff = await _0x1bffbc(_0x1f107f[_0x1afd38], _0x5bb47f, 'dev', !![], _0x245a5d), _0x13b692 = {};
                    _0x13b692['errorDEV'] = { 'embeds': [_0x2f3aff] }, _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x13b692['errorDEV']), await _0x309275(_0x2e30ca, _0x13b692['errorDEV']);
                }
                _0x40fb80(console['log'](_0x2ae997() + '\x20[' + _0x5bb47f['name'] + ']\x20Task\x20' + (_0x1afd38 + 0x1) + ':\x20' + _0x3a6f8f));
            }
        };
        try {
            _0xd85645 === 'ver' ? console['log'](_0x2ae997() + '\x20[' + _0x5bb47f['name'] + ']\x20Task\x20' + (_0x1afd38 + 0x1) + ':\x20Verifying.') : console['log'](_0x2ae997() + '\x20[' + _0x5bb47f['name'] + ']\x20Task\x20' + (_0x1afd38 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1aca84['data']['attributes']['email']), _0x1b3c90(_0x48ea4b, callback);
        } catch (_0x1777ef) {
            console['log'](_0x2ae997() + '\x20Task\x20' + (_0x1afd38 + 0x1) + ':\x20' + _0x1777ef);
        }
    });
}
;
async function _0x1b57e9(_0x9bec8c, _0x1c8bc, _0x891949) {
    _0x52eb11['use'](_0x14af75()), _0x52eb11['use'](_0x315cd9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x30a907['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x222a80 = 0x0; _0x222a80 < _0x9bec8c['length']; _0x222a80++) {
        var _0x18be51, _0x1e0100 = '', _0x30bc81 = 0x0, _0x46c933 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x21dc83
                },
                {
                    'name': 'Product',
                    'value': '' + _0x9bec8c[_0x222a80]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x9bec8c[_0x222a80]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x30a907['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x11eacc
                }
            ]
        }], _0x4030cd = await _0x1bffbc(_0x9bec8c[_0x222a80], _0x891949, 'dev', ![]), _0x1b30f1 = await _0x1bffbc(_0x9bec8c[_0x222a80], _0x891949, 'pub', ![]);
        const _0x3e8143 = {
            'succesDEVMSG': { 'embeds': [_0x4030cd] },
            'succesPUBMSG': { 'embeds': [_0x1b30f1] }
        }, _0x38f875 = { 'embeds': _0x46c933 };
        await _0x53a5ee(_0x9bec8c, _0x222a80);
        if (_0x9bec8c[_0x222a80]['Email'] == '' || _0x9bec8c[_0x222a80]['FirstName'] == '' || _0x9bec8c[_0x222a80]['LastName'] == '' || _0x9bec8c[_0x222a80]['Country'] == '' || _0x9bec8c[_0x222a80]['Size'] == '' || _0x9bec8c[_0x222a80]['Address1'] == '' || _0x9bec8c[_0x222a80]['Zip'] == '') {
            console['log'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x9bec8c[_0x222a80]['Email'] == '' || _0x9bec8c[_0x222a80]['FirstName'] == '' || _0x9bec8c[_0x222a80]['LastName'] == '' || _0x9bec8c[_0x222a80]['Country'] == '' || _0x9bec8c[_0x222a80]['Size'] == '' || _0x9bec8c[_0x222a80]['Address1'] == '' || _0x9bec8c[_0x222a80]['Zip'] == '' || _0x9bec8c[_0x222a80]['Phone'] == '') {
            console['log'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x4d690e = '' + _0x9bec8c[_0x222a80]['Url'];
        if (_0x30a907['useRandomProxy'] = ![])
            var _0x4e435f = _0x1c8bc[_0x222a80]['split'](':');
        else
            var _0x54790a = Math['round'](Math['random']() * (_0x1c8bc['length'] - 0x1)), _0x4e435f = _0x1c8bc[_0x54790a]['split'](':');
        const _0x74c62c = await _0x52eb11['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x4e435f[0x0] + ':' + _0x4e435f[0x1]]
        });
        try {
            const _0x10aea5 = await _0x74c62c['newPage']();
            await _0x10aea5['authenticate']({
                'username': '' + _0x4e435f[0x2],
                'password': '' + _0x4e435f[0x3]
            }), console['log'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x10aea5['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x10aea5['setRequestInterception'](!![]), _0x10aea5['on']('request', _0xd30a39 => {
                _0xd30a39['resourceType']() === 'image' || _0xd30a39['resourceType']() === 'font' || _0xd30a39['resourceType']() === 'media' ? _0xd30a39['abort']() : _0xd30a39['continue']();
            }), await _0x10aea5['goto'](_0x4d690e), await _0x599511(0xbb8), await _0x10aea5['waitForSelector']('.control__JhutY'), await _0x10aea5['click']('.control__JhutY'), await _0x599511(0x1f4);
            if (_0x9bec8c[_0x222a80]['Size'] != 'RANDOM')
                try {
                    const _0x157028 = await _0x10aea5['$x']('//div[contains(text(),\x20\x27' + _0x9bec8c[_0x222a80]['Size'] + '\x27)]');
                    await _0x157028[0x0]['click']();
                } catch {
                    console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x368726 = await _0x10aea5['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x355751 = Math['round'](Math['random']() * (_0x368726['length'] - 0x1));
                await _0x368726[_0x355751]['click']();
            }
            await _0x599511(0x4b0);
            const _0x2d126b = await _0x10aea5['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x2d126b[0x0]['click'](), await _0x10aea5['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x10aea5['type']('input[name=\x22email\x22]', '' + _0x9bec8c[_0x222a80]['Email']), await _0x599511(0x640), await _0x10aea5['type']('input[name=\x22phone\x22]', '' + _0x9bec8c[_0x222a80]['Phone']), await _0x599511(0x4b0), await _0x10aea5['click']('button.btn.continue-button__1RtsS'), await _0x599511(0x4b0);
            try {
                await _0x10aea5['type']('input[name=\x22firstName\x22]', '' + _0x9bec8c[_0x222a80]['FirstName']), await _0x599511(0x258);
            } catch {
                const _0x43cd45 = await _0x10aea5['$$eval']('.invalid-feedback\x20>\x20div', _0x66f8ab => {
                    return _0x66f8ab['map'](_0x4a32df => _0x4a32df['innerText']);
                });
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x20' + _0x43cd45));
                continue;
            }
            await _0x10aea5['type']('input[name=\x22lastName\x22]', '' + _0x9bec8c[_0x222a80]['LastName']), await _0x599511(0xc8), await _0x10aea5['type']('input[name=\x22instagramUsername\x22]', '' + _0x9bec8c[_0x222a80]['Follower']), await _0x599511(0x4b0), await _0x10aea5['click']('button.btn.continue-button__1RtsS'), await _0x599511(0x3e8), console['log'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x10aea5['select']('select[name=\x22country\x22]', '' + _0x9bec8c[_0x222a80]['Country']), await _0x599511(0x2bc), await _0x10aea5['type']('input[name=\x22streetName\x22]', '' + _0x9bec8c[_0x222a80]['Address1']), await _0x599511(0x258), await _0x10aea5['type']('input[name=\x22houseNumber\x22]', _0x9bec8c[_0x222a80]['HouseNumber'] + '\x20' + _0x9bec8c[_0x222a80]['Address2']), await _0x599511(0xc8), await _0x10aea5['type']('input[name=\x22postalCode\x22]', '' + _0x9bec8c[_0x222a80]['Zip']), await _0x599511(0x1f4), await _0x10aea5['type']('input[name=\x22city\x22]', '' + _0x9bec8c[_0x222a80]['City']), await _0x599511(0x4b0), await _0x10aea5['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x599511(0x4b0), await _0x10aea5['click']('button.btn.continue-button__1RtsS'), await _0x599511(0x4b0), console['log'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x10aea5['solveRecaptchas'](), console['log'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x599511(0xbb8), await _0x10aea5['click']('button.btn.continue-button__1RtsS'), await _0x599511(0x1388), console['log'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x10aea5['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x10aea5['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x599511(0x4b0), await _0x10aea5['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x9bec8c[_0x222a80]['CardNumber']), await _0x599511(0x320), await _0x10aea5['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x10aea5['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x9bec8c[_0x222a80]['ExpiryDate']), await _0x599511(0x4b0), await _0x10aea5['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x10aea5['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x9bec8c[_0x222a80]['CVV']), await _0x599511(0x226), await _0x10aea5['type']('input[name=\x22holderName\x22]', '' + _0x9bec8c[_0x222a80]['NameOnCard']), await _0x599511(0x226), await _0x10aea5['click']('button.adyen-checkout__button'), console['log'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x10aea5['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x599511(0xbb8);
            } catch (_0x554e01) {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x203DS\x20Failed')), _0x18be51 = '3DS\x20Error\x20' + _0x554e01;
                var _0x13fa67 = await _0x1bffbc(_0x9bec8c[_0x222a80], _0x891949, 'dev', !![], _0x18be51);
                _0x3e8143['errorDEV'] = { 'embeds': [_0x13fa67] };
                _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x3e8143['errorDEV']);
                await _0x309275(_0x2e30ca, _0x3e8143['errorDEV']);
                continue;
            }
            console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '')
                try {
                    await _0x309275(_0x30a907['webhook'], _0x3e8143['succesDEVMSG']);
                } catch {
                }
            await _0x599511(0xc8), await _0x309275(_0x14ae8c, _0x3e8143['succesDEVMSG']), await _0x599511(0xc8);
            try {
                await _0x309275(_0x25e6a4, _0x3e8143['succesPUBMSG']);
            } catch {
            }
        } catch (_0x1157b9) {
            console['log'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x20' + _0x1157b9), _0x18be51 = '' + _0x1157b9;
            var _0x13fa67 = await _0x1bffbc(_0x9bec8c[_0x222a80], _0x891949, 'dev', !![], _0x18be51);
            _0x3e8143['errorDEV'] = { 'embeds': [_0x13fa67] }, _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x3e8143['errorDEV']), await _0x309275(_0x2e30ca, _0x3e8143['errorDEV']), _0x1e0100 = 'yes';
        } finally {
            _0x74c62c['close']();
            if (_0x1e0100 == 'yes' && _0x30bc81 != 0x5) {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x891949['name'] + ']\x20Task\x20' + (_0x222a80 + 0x1) + '\x20:\x20Retrying')), _0x222a80 = _0x222a80 - 0x1, _0x30bc81 = _0x30bc81 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x30a907['footshopDelay'] + '\x20ms'), await _0x599511(_0x30a907['footshopDelay']);
        }
    }
}
afewFunction = async (_0x431ddf, _0x29d89b, _0x50ab22, _0x1f5acc, _0x6ea0f5) => {
    for (var _0x32e25b = 0x0; _0x32e25b < _0x1f5acc['length']; _0x32e25b++) {
        _0x30a907['AfewDelay'] = _0x30a907['delay'];
        var _0x35aca7, _0x488efc = '', _0x465a8f = 0x0;
        _0x1f5acc[_0x32e25b]['Url'] = _0x431ddf, _0x180b8a(_0x50ab22['name'] + '\x20Task\x20' + (_0x32e25b + 0x1) + '\x20/\x20' + _0x1f5acc['length'] + '\x20||\x20File:\x20' + _0x3e23a7 + '\x20Proxies:\x20' + _0x37e473), await _0x53a5ee(_0x1f5acc, _0x32e25b);
        var _0xffaf0b = await _0x1bffbc(_0x1f5acc[_0x32e25b], _0x50ab22, 'dev', ![]), _0x5840c0 = await _0x1bffbc(_0x1f5acc[_0x32e25b], _0x50ab22, 'pub', ![]);
        const _0x9d78fc = {
            'succesDEVMSG': { 'embeds': [_0xffaf0b] },
            'succesPUBMSG': { 'embeds': [_0x5840c0] }
        };
        if (_0x1f5acc[_0x32e25b]['Email'] == '' || _0x1f5acc[_0x32e25b]['FirstName'] == '' || _0x1f5acc[_0x32e25b]['LastName'] == '' || _0x1f5acc[_0x32e25b]['Country'] == '' || _0x1f5acc[_0x32e25b]['Size'] == '' || _0x1f5acc[_0x32e25b]['Address1'] == '' || _0x1f5acc[_0x32e25b]['Zip'] == '') {
            console['log'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x30a907['useRandomProxy'] = ![])
            var _0x55a6c7 = _0x6ea0f5[_0x32e25b]['split'](':');
        else
            var _0x2017c1 = Math['round'](Math['random']() * (_0x6ea0f5['length'] - 0x1)), _0x55a6c7 = _0x6ea0f5[_0x2017c1]['split'](':');
        const _0x5547c3 = await _0x52eb11['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x55a6c7[0x0] + ':' + _0x55a6c7[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5bdc56 = await _0x5547c3['newPage']();
            await _0x5bdc56['setDefaultNavigationTimeout'](0x1d4c0), await _0x5bdc56['authenticate']({
                'username': '' + _0x55a6c7[0x2],
                'password': '' + _0x55a6c7[0x3]
            }), console['log'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5bdc56['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5bdc56['setRequestInterception'](!![]), _0x5bdc56['on']('request', _0x1765af => {
                _0x1765af['resourceType']() === 'image' || _0x1765af['resourceType']() === 'font' || _0x1765af['resourceType']() === 'media' ? _0x1765af['abort']() : _0x1765af['continue']();
            }), await _0x5bdc56['goto'](_0x431ddf, { 'waitUntil': 'networkidle2' }), console['log'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x5bdc56['waitForTimeout'](0xfa0), console['log'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20Cookies\x20received'), await _0x5bdc56['waitForTimeout'](0x320);
            if (_0x1f5acc[_0x32e25b]['Size'] == 'RANDOM') {
                console['log'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x2511bb = await _0x5bdc56['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x1cee5e => {
                    return _0x1cee5e['map'](_0x536ea6 => _0x536ea6['href']);
                });
                var _0x12ee33 = Math['round'](Math['random']() * (_0x2511bb['length'] - 0x1));
                await _0x5bdc56['goto']('' + _0x2511bb[_0x12ee33]);
            } else {
                console['log'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1f5acc[_0x32e25b]['Size']);
                try {
                    const _0x32da87 = await _0x5bdc56['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x1f5acc[_0x32e25b]['Size'] + '\x22]\x20>\x20a', _0x14726d => {
                        return _0x14726d['map'](_0x5978a9 => _0x5978a9['href']);
                    });
                    await _0x5bdc56['goto']('' + _0x32da87[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x406a79) {
                    console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20' + _0x406a79 + '\x20Size\x20not\x20found')), _0x35aca7 = 'Size\x20Not\x20Found';
                    var _0x21438d = await _0x1bffbc(_0x1f5acc[_0x32e25b], _0x50ab22, 'dev', !![], _0x35aca7);
                    _0x9d78fc['errorDEV'] = { 'embeds': [_0x21438d] };
                    _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x9d78fc['errorDEV']);
                    await _0x309275(_0x2e30ca, _0x9d78fc['errorDEV']);
                    continue;
                }
            }
            await _0x5bdc56['waitForTimeout'](0x258), await _0x5bdc56['type']('#raffle-instagram', '' + _0x1f5acc[_0x32e25b]['Follower'], { 'delay': 0x64 }), await _0x5bdc56['waitForTimeout'](0x384), await _0x5bdc56['click']('#raffle-terms'), await _0x5bdc56['waitForTimeout'](0x384), await _0x5bdc56['evaluate'](() => {
                const _0x4edad6 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x4edad6['click']();
            }), await _0x5bdc56['waitForTimeout'](0xbb8), await _0x5bdc56['waitForSelector']('#checkout_email'), await _0x599511(0x3e8), console['log'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20Filling\x20Information');
            _0x29d89b == 'sec' ? await _0x5bdc56['type']('#checkout_email', '' + _0x1f5acc[_0x32e25b]['FirstName'] + _0x1f5acc[_0x32e25b]['LastName'] + _0x30a907['catchall'], 0x32) : await _0x5bdc56['type']('#checkout_email', '' + _0x1f5acc[_0x32e25b]['Email'], 0x32);
            await _0x599511(0x320), await _0x5bdc56['select']('#checkout_shipping_address_country', '' + _0x1f5acc[_0x32e25b]['Country']), await _0x5bdc56['waitForTimeout'](0x258), await _0x5bdc56['type']('#checkout_shipping_address_first_name', '' + _0x1f5acc[_0x32e25b]['FirstName']), await _0x5bdc56['waitForTimeout'](0x320), await _0x5bdc56['type']('#checkout_shipping_address_last_name', '' + _0x1f5acc[_0x32e25b]['LastName']), await _0x5bdc56['waitForTimeout'](0x2bc), await _0x5bdc56['type']('#checkout_shipping_address_address1', _0x1f5acc[_0x32e25b]['Address1'] + '\x20' + _0x1f5acc[_0x32e25b]['HouseNumber']), await _0x5bdc56['waitForTimeout'](0x2bc), await _0x5bdc56['type']('#checkout_shipping_address_address2', '' + _0x1f5acc[_0x32e25b]['Address2']), await _0x5bdc56['waitForTimeout'](0x2bc);
            _0x1f5acc[_0x32e25b]['Postcode'] == undefined ? await _0x5bdc56['type']('#checkout_shipping_address_zip', '' + _0x1f5acc[_0x32e25b]['Zip']) : await _0x5bdc56['type']('#checkout_shipping_address_zip', '' + _0x1f5acc[_0x32e25b]['Postcode']);
            await _0x5bdc56['waitForTimeout'](0x2bc), await _0x5bdc56['type']('#checkout_shipping_address_city', '' + _0x1f5acc[_0x32e25b]['City']), await _0x5bdc56['waitForTimeout'](0x2bc), console['log'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x5bdc56, _0x5bdc56['evaluate'](() => {
                const _0x21b3f0 = document['querySelector']('#continue_button');
                for (var _0x4ba4fe = 0x0; _0x4ba4fe < 0x5; _0x4ba4fe++) {
                    if (_0x21b3f0) {
                        _0x21b3f0['click'](), _0x21b3f0['click']();
                        break;
                    } else
                        _0x599511(0xfa0);
                }
            }), await _0x5bdc56['waitForTimeout'](0x1194);
            try {
                await _0x5bdc56['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x5bdc56['evaluate'](() => {
                const _0x2baf27 = document['querySelector']('#continue_button');
                for (var _0x272327 = 0x0; _0x272327 < 0x5; _0x272327++) {
                    if (_0x2baf27) {
                        _0x2baf27['click']();
                        break;
                    } else
                        _0x599511(0xfa0);
                }
            }), await _0x5bdc56['waitForTimeout'](0x7d0), console['log'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x5bdc56['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x5bdc56['evaluate'](() => {
                const _0x2850a0 = document['querySelector']('#continue_button');
                for (var _0x46142f = 0x0; _0x46142f < 0x5; _0x46142f++) {
                    if (_0x2850a0) {
                        _0x2850a0['click']();
                        break;
                    } else
                        _0x599511(0xfa0);
                }
            }), await _0x5bdc56['waitForTimeout'](0x1194), await _0x5bdc56['waitForSelector']('#continue_button'), _0x5bdc56['evaluate'](() => {
                const _0x2c5314 = document['querySelector']('#continue_button');
                for (var _0x4feea6 = 0x0; _0x4feea6 < 0x5; _0x4feea6++) {
                    if (_0x2c5314) {
                        _0x2c5314['click']();
                        break;
                    } else
                        _0x599511(0xfa0);
                }
            });
            try {
                await _0x5bdc56['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '')
                    try {
                        await _0x309275(_0x30a907['webhook'], _0x9d78fc['succesDEVMSG']);
                    } catch {
                    }
                await _0x599511(0xc8), await _0x309275(_0x14ae8c, _0x9d78fc['succesDEVMSG']), await _0x599511(0xc8);
                try {
                    await _0x309275(_0x25e6a4, _0x9d78fc['succesPUBMSG']);
                } catch {
                }
            } catch (_0x2a9010) {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x2a9010));
            }
        } catch (_0x9c6a09) {
            console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20' + _0x9c6a09)), _0x35aca7 = '' + _0x9c6a09;
            var _0x21438d = await _0x1bffbc(_0x1f5acc[_0x32e25b], _0x50ab22, 'dev', !![], _0x35aca7);
            _0x9d78fc['errorDEV'] = { 'embeds': [_0x21438d] }, _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x9d78fc['errorDEV']), await _0x309275(_0x2e30ca, _0x9d78fc['errorDEV']), _0x488efc = 'yes';
        } finally {
            _0x5547c3 && _0x5547c3['close']();
            if (_0x488efc == 'yes' && _0x465a8f != 0x5 && _0x35aca7 != 'Size\x20Not\x20Found') {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x50ab22['name'] + ']\x20Task\x20' + (_0x32e25b + 0x1) + '\x20:\x20Retrying')), _0x32e25b = _0x32e25b - 0x1, _0x465a8f = _0x465a8f + 0x1;
                continue;
            }
            if (_0x32e25b + 0x1 == _0x1f5acc['length']) {
                console['log'](_0x3d6019['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x599511(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x30a907['AfewDelay'] + '\x20ms'), await _0x599511(_0x30a907['AfewDelay']);
        }
    }
};
async function _0xc039a5(_0x28519c, _0x329a86, _0x1adb48, _0x4e6b1b) {
    _0x52eb11['use'](_0x14af75()), _0x52eb11['use'](_0x315cd9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x30a907['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1ca7d8 = 0x0; _0x1ca7d8 < _0x1adb48['length']; _0x1ca7d8++) {
        var _0x37f24d = '', _0x4a2e21 = 0x0;
        _0x180b8a(_0x329a86['name'] + '\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20/\x20' + _0x1adb48['length'] + '\x20||\x20File:\x20' + _0x3e23a7 + '\x20Proxies:\x20' + _0x37e473), await _0x53a5ee(_0x1adb48, _0x1ca7d8);
        var _0x279f74 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x21dc83
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x30a907['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x11eacc
                }
            ]
        }];
        const _0x8de3cb = { 'embeds': _0x279f74 };
        var _0xf4e9c1 = await _0x1bffbc(_0x1adb48[_0x1ca7d8], _0x329a86, 'acc', ![]);
        const _0x560bfb = { 'succesDEVMSG': { 'embeds': [_0xf4e9c1] } };
        if (_0x1adb48[_0x1ca7d8]['Email'] == '' || _0x1adb48[_0x1ca7d8]['FirstName'] == '' || _0x1adb48[_0x1ca7d8]['LastName'] == '') {
            console['log'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x1adb48[_0x1ca7d8]['Password'] == '' && (_0x1adb48[_0x1ca7d8]['Password'] = 'JRaffles23!');
        if (_0x30a907['useRandomProxy'] = ![])
            var _0x132498 = _0x4e6b1b[_0x1ca7d8]['split'](':');
        else
            var _0x2cebe = Math['round'](Math['random']() * (_0x4e6b1b['length'] - 0x1)), _0x132498 = _0x4e6b1b[_0x2cebe]['split'](':');
        const _0x29d831 = await _0x52eb11['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x132498[0x0] + ':' + _0x132498[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x20fded = await _0x29d831['newPage']();
            await _0x20fded['authenticate']({
                'username': '' + _0x132498[0x2],
                'password': '' + _0x132498[0x3]
            }), console['log'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x20fded['setRequestInterception'](!![]), _0x20fded['on']('request', _0x497867 => {
                _0x497867['resourceType']() === 'image' || _0x497867['resourceType']() === 'font' || _0x497867['resourceType']() === 'media' ? _0x497867['abort']() : _0x497867['continue']();
            }), await _0x20fded['goto'](_0x28519c), await _0x599511(0xbb8), console['log'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x20fded['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x20fded['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x20fded['waitForSelector']('#button-register'), await _0x599511(0x7d0), await _0x20fded['evaluate'](() => {
                const _0x221caf = document['querySelector']('#button-register');
                _0x221caf['click']();
            }), console['log'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x599511(0x1388), await _0x20fded['waitForSelector']('#customer_salutation'), await _0x20fded['select']('#customer_salutation', 'mr'), await _0x599511(0x7d0), await _0x20fded['waitForSelector']('#customer_firstname'), await _0x20fded['type']('#customer_firstname', '' + _0x1adb48[_0x1ca7d8]['FirstName']), await _0x599511(0x352), await _0x20fded['waitForSelector']('#customer_lastname'), await _0x20fded['type']('#customer_lastname', '' + _0x1adb48[_0x1ca7d8]['LastName']), await _0x599511(0x352), await _0x20fded['type']('#email-input', '' + _0x1adb48[_0x1ca7d8]['Email']), await _0x599511(0x352), await _0x20fded['type']('#email-confirm-input', '' + _0x1adb48[_0x1ca7d8]['Email']), await _0x599511(0x352), await _0x20fded['type']('#register-password', '' + _0x1adb48[_0x1ca7d8]['Password']), await _0x599511(0x352), await _0x20fded['type']('#password-confirm', '' + _0x1adb48[_0x1ca7d8]['Password']), await _0x599511(0x352), console['log'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x20fded['click']('#consent'), await _0x599511(0x1f4);
            const _0x1a0f97 = await _0x20fded['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x1a0f97) {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x20fded['click']('#buttonRegister');
            try {
                await _0x20fded['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x3d6019['yellow'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20Account\x20' + _0x1adb48[_0x1ca7d8]['Email'] + '\x20Generated!')), console['log'](_0x3d6019['yellow'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x1adb48[_0x1ca7d8]['Email'])), await _0x599511(0x4b0);
            async function _0x1d336a() {
                console['log'](_0x3d6019['yellow'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x4e4505 = await _0x32de93['get']('Code');
                return _0x4e4505['Code'];
            }
            ;
            code = await _0x1d336a(), _0x599511(0x320), console['log'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20Verifying..'), await _0x20fded['type']('#verificationCode', code), await _0x599511(0x1f4), await _0x20fded['click']('#buttonVerify'), await _0x599511(0x190), await _0x20fded['click']('#buttonVerify'), await _0x599511(0x3e8);
            try {
                await _0x20fded['waitForSelector']('div.b-user_greeting'), console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20Account\x20' + _0x1adb48[_0x1ca7d8]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x44b12e['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x1adb48[_0x1ca7d8]['Email'] + ',' + _0x1adb48[_0x1ca7d8]['Password'] + ','), console['log'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20Account\x20' + _0x1adb48[_0x1ca7d8]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x560bfb['succesDEVMSG']);
                } catch {
                }
                await _0x309275(_0x567e6c, _0x560bfb['succesDEVMSG']);
            } catch {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x31d4db) {
            console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20' + _0x31d4db)), _0x279f74[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x279f74[0x0]['description'] = '' + _0x31d4db, await _0x309275(_0x2e30ca, _0x8de3cb), _0x37f24d = 'yes';
        } finally {
            _0x29d831 && _0x29d831['close']();
            if (_0x37f24d == 'yes' && _0x4a2e21 != 0x5) {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x329a86['name'] + ']\x20Task\x20' + (_0x1ca7d8 + 0x1) + '\x20:\x20Retrying')), _0x1ca7d8 = _0x1ca7d8 - 0x1, _0x4a2e21 = _0x4a2e21 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x30a907['delay'] + '\x20ms'), await _0x599511(_0x30a907['delay']);
        }
    }
}
async function _0x193f7f(_0x1f31a7, _0x28a64d, _0x30373) {
    _0x52eb11['use'](_0x14af75()), _0x52eb11['use'](_0x315cd9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x30a907['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3c6918 = 0x0; _0x3c6918 < _0x28a64d['length']; _0x3c6918++) {
        var _0x537e72, _0x222fb8 = '', _0x259505 = 0x0;
        _0x180b8a(_0x1f31a7['name'] + '\x20Task\x20' + (_0x3c6918 + 0x1) + '\x20/\x20' + _0x28a64d['length'] + '\x20||\x20File:\x20' + _0x3e23a7 + '\x20Proxies:\x20' + _0x37e473);
        var _0x4e8244 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x21dc83
                },
                {
                    'name': 'Product',
                    'value': '' + _0x28a64d[_0x3c6918]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x28a64d[_0x3c6918]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x30a907['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x11eacc
                }
            ]
        }], _0x478394 = await _0x1bffbc(_0x28a64d[_0x3c6918], _0x1f31a7, 'dev', ![]), _0x13e9fe = await _0x1bffbc(_0x28a64d[_0x3c6918], _0x1f31a7, 'pub', ![]);
        const _0x1f705f = {
            'succesDEVMSG': { 'embeds': [_0x478394] },
            'succesPUBMSG': { 'embeds': [_0x13e9fe] }
        };
        await _0x53a5ee(_0x28a64d, _0x3c6918);
        if (_0x28a64d[_0x3c6918]['Email'] == '' || _0x28a64d[_0x3c6918]['Password'] == '' || _0x28a64d[_0x3c6918]['FirstName'] == '' || _0x28a64d[_0x3c6918]['LastName'] == '') {
            console['log'](_0x2ae997() + '\x20[' + _0x1f31a7['name'] + ']\x20Task\x20' + (_0x3c6918 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x30a907['useRandomProxy'] = ![])
            var _0x4820e7 = _0x30373[_0x3c6918]['split'](':');
        else
            var _0x4ab5cb = Math['round'](Math['random']() * (_0x30373['length'] - 0x1)), _0x4820e7 = _0x30373[_0x4ab5cb]['split'](':');
        const _0x31725f = await _0x52eb11['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4820e7[0x0] + ':' + _0x4820e7[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x297529 = await _0x31725f['newPage']();
            await _0x297529['authenticate']({
                'username': '' + _0x4820e7[0x2],
                'password': '' + _0x4820e7[0x3]
            }), console['log'](_0x2ae997() + '\x20[' + _0x1f31a7['name'] + ']\x20Task\x20' + (_0x3c6918 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x297529['setRequestInterception'](!![]), _0x297529['on']('request', _0x30e18e => {
                _0x30e18e['resourceType']() === 'image' || _0x30e18e['resourceType']() === 'font' || _0x30e18e['resourceType']() === 'media' ? _0x30e18e['abort']() : _0x30e18e['continue']();
            }), await _0x297529['goto']('' + _0x28a64d[_0x3c6918]['Url'], { 'waitUntil': 'networkidle2' }), await _0x599511(0x12c);
            try {
                await _0x297529['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x297529['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x2ae997() + '\x20[' + _0x1f31a7['name'] + ']\x20Task\x20' + (_0x3c6918 + 0x1) + '\x20:\x20Logging\x20in'), await _0x297529['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x297529['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x297529['waitForSelector']('#username'), await _0x297529['type']('#username', _0x28a64d[_0x3c6918]['Email']), await _0x297529['waitForSelector']('#password'), await _0x297529['type']('#password', _0x28a64d[_0x3c6918]['Password']), await _0x599511(0x190), await _0x297529['click']('#buttonSubmit'), await _0x297529['waitForSelector']('div.b-user_greeting'), console['log'](_0x2ae997() + '\x20[' + _0x1f31a7['name'] + ']\x20Task\x20' + (_0x3c6918 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x599511(0x1f4), await _0x297529['goto']('' + _0x28a64d[_0x3c6918]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x2ae997() + '\x20[' + _0x1f31a7['name'] + ']\x20Task\x20' + (_0x3c6918 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x28a64d[_0x3c6918]['Size']);
            let _0x25f220 = _0x28a64d[_0x3c6918]['Size']['replace']('.5', '\x201/2');
            await _0x297529['click']('button[title=\x22' + _0x25f220 + '\x22]'), await _0x599511(0x1f4);
            try {
                await _0x297529['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x599511(0x12c), console['log'](_0x2ae997() + '\x20[' + _0x1f31a7['name'] + ']\x20Task\x20' + (_0x3c6918 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x297529['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x599511(0x12c), await _0x297529['type']('#dwfrm_raffle_addressFields_firstName', _0x28a64d[_0x3c6918]['FirstName']), await _0x599511(0x12c), await _0x297529['type']('#dwfrm_raffle_addressFields_lastName', _0x28a64d[_0x3c6918]['LastName']), await _0x599511(0x12c), await _0x297529['select']('#dwfrm_raffle_addressFields_country', _0x28a64d[_0x3c6918]['Country']), await _0x599511(0x12c), await _0x297529['type']('#dwfrm_raffle_addressFields_city', _0x28a64d[_0x3c6918]['City']), await _0x599511(0x12c);
            _0x28a64d[_0x3c6918]['Postcode'] == undefined && (_0x28a64d[_0x3c6918]['Postcode'] = _0x28a64d[_0x3c6918]['Zip']);
            await _0x297529['type']('#dwfrm_raffle_addressFields_postalCode', _0x28a64d[_0x3c6918]['Postcode']), await _0x599511(0x12c), await _0x297529['type']('#dwfrm_raffle_addressFields_address1', _0x28a64d[_0x3c6918]['Address1']), await _0x599511(0x12c), await _0x297529['type']('#dwfrm_raffle_addressFields_address2', _0x28a64d[_0x3c6918]['HouseNumber']), await _0x599511(0x12c), await _0x297529['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x28a64d[_0x3c6918]['Address2']), await _0x599511(0x12c), await _0x297529['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x599511(0x12c), await _0x297529['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x28a64d[_0x3c6918]['Follower']), await _0x599511(0x1f4), await _0x297529['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x599511(0x1f4), console['log'](_0x2ae997() + '\x20[' + _0x1f31a7['name'] + ']\x20Task\x20' + (_0x3c6918 + 0x1) + '\x20:\x20' + _0x3d6019['blue']('Awaiting\x20Paypal\x20Payment')), await _0x297529['click']('.b-paypal_button');
            try {
                await _0x297529['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x1f31a7['name'] + ']\x20Task\x20' + (_0x3c6918 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x1f705f['succesDEVMSG']), await _0x599511(0xc8), await _0x309275(_0x14ae8c, _0x1f705f['succesDEVMSG']), await _0x599511(0xc8), await _0x309275(_0x25e6a4, _0x1f705f['succesPUBMSG']);
            } catch (_0x8b6073) {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x1f31a7['name'] + ']\x20Task\x20' + (_0x3c6918 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x8b6073)), _0x537e72 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x8b6073;
                var _0x3e1275 = await _0x1bffbc(_0x28a64d[_0x3c6918], _0x1f31a7, 'dev', !![], _0x537e72);
                _0x1f705f['errorDEV'] = { 'embeds': [_0x3e1275] }, _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x1f705f['errorDEV']), await _0x309275(_0x2e30ca, _0x1f705f['errorDEV']);
            }
        } catch (_0x27cb87) {
            console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x1f31a7['name'] + ']\x20Task\x20' + (_0x3c6918 + 0x1) + '\x20:\x20' + _0x27cb87)), _0x537e72 = '' + _0x27cb87;
            var _0x3e1275 = await _0x1bffbc(_0x28a64d[_0x3c6918], _0x1f31a7, 'dev', !![], _0x537e72);
            _0x1f705f['errorDEV'] = { 'embeds': [_0x3e1275] }, _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x1f705f['errorDEV']), await _0x309275(_0x2e30ca, _0x1f705f['errorDEV']), _0x222fb8 = 'yes';
        } finally {
            _0x31725f && _0x31725f['close']();
            if (_0x222fb8 == 'yes' && _0x259505 != 0x5) {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x1f31a7['name'] + ']\x20Task\x20' + (_0x3c6918 + 0x1) + '\x20:\x20Retrying')), _0x3c6918 = _0x3c6918 - 0x1, _0x259505 = _0x259505 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x30a907['AfewDelay'] + '\x20ms'), await _0x599511(_0x30a907['AfewDelay']);
        }
    }
}
async function _0x3574b3(_0x2976af, _0x68489f) {
    _0x52eb11['use'](_0x14af75()), _0x52eb11['use'](_0x315cd9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x30a907['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3a4b2e = 0x0; _0x3a4b2e < bouncewear['length']; _0x3a4b2e++) {
        await _0x53a5ee(bouncewear, _0x3a4b2e);
        if (bouncewear[_0x3a4b2e]['Email'] == '' || bouncewear[_0x3a4b2e]['Password'] == '' || bouncewear[_0x3a4b2e]['FirstName'] == '' || bouncewear[_0x3a4b2e]['LastName'] == '') {
            console['log'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4b2e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x30a907['useRandomProxy'] = ![])
            var _0x363ce0 = _0x3ec2f5()[_0x3a4b2e]['split'](':');
        else
            var _0x41605d = Math['round'](Math['random']() * (_0x3ec2f5()['length'] - 0x1)), _0x363ce0 = _0x3ec2f5()[_0x41605d]['split'](':');
        const _0x37fed5 = await _0x52eb11['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x363ce0[0x0] + ':' + _0x363ce0[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1c99ba = await _0x37fed5['newPage']();
            await _0x1c99ba['authenticate']({
                'username': '' + _0x363ce0[0x2],
                'password': '' + _0x363ce0[0x3]
            }), console['log'](_0x2ae997() + '\x20[' + _0x68489f['name'] + ']\x20Task\x20' + (_0x3a4b2e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1c99ba['setRequestInterception'](!![]), _0x1c99ba['on']('request', _0xd3111b => {
                _0xd3111b['resourceType']() === 'image' || _0xd3111b['resourceType']() === 'font' || _0xd3111b['resourceType']() === 'media' ? _0xd3111b['abort']() : _0xd3111b['continue']();
            }), await _0x1c99ba['goto'](_0x2976af), await _0x599511(0xbb8), await _0x1c99ba['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x2ae997() + '\x20[' + _0x68489f['name'] + ']\x20Task\x20' + (_0x3a4b2e + 0x1) + '\x20:\x20Filling\x20information'), await _0x1c99ba['type']('#RegisterForm-FirstName', '' + bouncewear[_0x3a4b2e]['FirstName']), await _0x599511(0x226), await _0x1c99ba['type']('#RegisterForm-LastName', '' + bouncewear[_0x3a4b2e]['LastName']), await _0x599511(0x226), await _0x1c99ba['type']('#RegisterForm-email', '' + bouncewear[_0x3a4b2e]['Email']), await _0x599511(0x226), await _0x1c99ba['type']('#RegisterForm-password', '' + bouncewear[_0x3a4b2e]['Password']), await _0x599511(0x226), await _0x1c99ba['click']('#marketing'), console['log'](_0x2ae997() + '\x20[' + _0x68489f['name'] + ']\x20Task\x20' + (_0x3a4b2e + 0x1) + '\x20:\x20Submitting..'), await _0x1c99ba['$eval']('#RegisterForm', _0x507ae9 => _0x507ae9['submit']()), await _0x599511(0x1f40), console['log'](_0x2ae997() + '\x20[' + _0x68489f['name'] + ']\x20Task\x20' + (_0x3a4b2e + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x1c99ba['solveRecaptchas'](), await _0x1c99ba['click']('.shopify-challenge__button.btn');
            async function _0x212dd0() {
                for (var _0x5b8136 = 0x0; _0x5b8136 < 0x4; _0x5b8136++) {
                    try {
                        console['log']('try'), await _0x1c99ba['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x2ae997() + '\x20[' + _0x68489f['name'] + ']\x20Task\x20' + (_0x3a4b2e + 0x1) + '\x20:\x20' + _0x3d6019['red']('Catpcha\x20failed,\x20retrying..')), await _0x1c99ba['solveRecaptchas'](), await _0x1c99ba['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x212dd0(), console['log'](_0x2ae997() + '\x20[' + _0x68489f['name'] + ']\x20Task\x20' + (_0x3a4b2e + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x599511(0x1f4);
            try {
                await _0x1c99ba['waitForSelector']('.featured-title'), await _0x599511(0x1f4), console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x68489f['name'] + ']\x20Task\x20' + (_0x3a4b2e + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3a4b2e]['Email'] + '\x20Generated!')), _0x44b12e['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x3a4b2e]['Email'] + ',' + bouncewear[_0x3a4b2e]['Password']), console['log'](_0x3d6019['yellow'](_0x2ae997() + '\x20[' + _0x68489f['name'] + ']\x20Task\x20' + (_0x3a4b2e + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3a4b2e]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x1e18e4) {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4b2e + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1e18e4));
            }
        } catch (_0x2c2977) {
            console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x3a4b2e + 0x1) + '\x20:\x20' + _0x2c2977));
        } finally {
            _0x37fed5 && _0x37fed5['close'](), console['log']('Waiting\x20for\x20' + _0x30a907['delay'] + '\x20ms'), await _0x599511(_0x30a907['delay']);
        }
    }
}
async function _0x4fbd20(_0x1b4c7e, _0x3b19af, _0x54fce6, _0x594038) {
    _0x52eb11['use'](_0x14af75()), _0x52eb11['use'](_0x315cd9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x30a907['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3db595 = 0x0; _0x3db595 < _0x54fce6['length']; _0x3db595++) {
        var _0x2e824c = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x21dc83
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x30a907['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x11eacc
                }
            ]
        }];
        const _0x2a34ac = { 'embeds': _0x2e824c };
        _0x180b8a(_0x3b19af['name'] + '\x20Task\x20' + (_0x3db595 + 0x1) + '\x20/\x20' + _0x54fce6['length'] + '\x20||\x20File:\x20' + _0x3e23a7 + '\x20Proxies:\x20' + _0x37e473), await _0x53a5ee(_0x54fce6, _0x3db595);
        var _0x345e34 = await _0x1bffbc(_0x54fce6[_0x3db595], _0x3b19af, 'acc', ![]);
        const _0x761131 = { 'succesDEVMSG': { 'embeds': [_0x345e34] } };
        if (_0x54fce6[_0x3db595]['Email'] == '' || _0x54fce6[_0x3db595]['FirstName'] == '' || _0x54fce6[_0x3db595]['LastName'] == '') {
            console['log'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x3db595 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x599511(0x7d0);
            continue;
        }
        (_0x54fce6[_0x3db595]['Password'] == '' || _0x54fce6[_0x3db595] == undefined) && _0x54fce6[_0x3db595]['Password'] == 'JRaffles23!';
        if (_0x30a907['useRandomProxy'] = ![])
            var _0x15dcc3 = _0x594038[_0x3db595]['split'](':');
        else
            var _0x5de6bf = Math['round'](Math['random']() * (_0x594038['length'] - 0x1)), _0x15dcc3 = _0x594038[_0x5de6bf]['split'](':');
        const _0x5a9a4d = await _0x52eb11['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x15dcc3[0x0] + ':' + _0x15dcc3[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2998d8 = await _0x5a9a4d['newPage']();
            await _0x2998d8['authenticate']({
                'username': '' + _0x15dcc3[0x2],
                'password': '' + _0x15dcc3[0x3]
            }), console['log'](_0x2ae997() + '\x20[' + _0x3b19af['name'] + ']\x20Task\x20' + (_0x3db595 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2998d8['setRequestInterception'](!![]), _0x2998d8['on']('request', _0x5e3570 => {
                _0x5e3570['resourceType']() === 'image' || _0x5e3570['resourceType']() === 'font' || _0x5e3570['resourceType']() === 'media' ? _0x5e3570['abort']() : _0x5e3570['continue']();
            }), await _0x2998d8['goto'](_0x1b4c7e), await _0x599511(0xbb8), await _0x2998d8['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x2ae997() + '\x20[' + _0x3b19af['name'] + ']\x20Task\x20' + (_0x3db595 + 0x1) + '\x20:\x20Filling\x20information'), await _0x2998d8['type']('#RegisterForm-FirstName', '' + _0x54fce6[_0x3db595]['FirstName']), await _0x599511(0x226), await _0x2998d8['type']('#RegisterForm-LastName', '' + _0x54fce6[_0x3db595]['LastName']), await _0x599511(0x226), await _0x2998d8['type']('#RegisterForm-email', '' + _0x54fce6[_0x3db595]['Email']), await _0x599511(0x226), await _0x2998d8['type']('#RegisterForm-password', '' + _0x54fce6[_0x3db595]['Password']), await _0x599511(0x226), console['log'](_0x2ae997() + '\x20[' + _0x3b19af['name'] + ']\x20Task\x20' + (_0x3db595 + 0x1) + '\x20:\x20Submitting..'), await _0x2998d8['$eval']('#RegisterForm', _0x5c29dc => _0x5c29dc['submit']()), await _0x599511(0x1f40);
            try {
                await _0x2998d8['waitForSelector']('.home-page-grid__collection'), await _0x599511(0x1f4), console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x3b19af['name'] + ']\x20Task\x20' + (_0x3db595 + 0x1) + '\x20:\x20Account\x20' + _0x54fce6[_0x3db595]['Email'] + '\x20Generated!')), _0x44b12e['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x54fce6[_0x3db595]['Email'] + ',' + _0x54fce6[_0x3db595]['Password']), console['log'](_0x3d6019['yellow'](_0x2ae997() + '\x20[' + _0x3b19af['name'] + ']\x20Task\x20' + (_0x3db595 + 0x1) + '\x20:\x20Account\x20' + _0x54fce6[_0x3db595]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x761131['succesDEVMSG']);
                } catch {
                }
                await _0x309275(_0x567e6c, _0x761131['succesDEVMSG']);
            } catch (_0x671785) {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x3db595 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x671785));
            }
        } catch (_0x46d0f3) {
            console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x3db595 + 0x1) + '\x20:\x20' + _0x46d0f3));
        } finally {
            _0x5a9a4d && _0x5a9a4d['close'](), console['log']('Waiting\x20for\x20' + _0x30a907['delay'] + '\x20ms'), await _0x599511(_0x30a907['delay']);
        }
    }
}
async function _0x2ccde9(_0x2fa267, _0xf11e7c, _0x15d9b4, _0x4da8ed) {
    _0x52eb11['use'](_0x14af75()), _0x52eb11['use'](_0x315cd9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x30a907['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x764f05 = 0x0; _0x764f05 < _0x15d9b4['length']; _0x764f05++) {
        var _0x3c2315, _0x18ecb4 = '', _0x406bcc = 0x0;
        _0x180b8a(_0xf11e7c['name'] + '\x20Task\x20' + (_0x764f05 + 0x1) + '\x20/\x20' + _0x15d9b4['length'] + '\x20||\x20File:\x20' + _0x3e23a7 + '\x20Proxies:\x20' + _0x37e473), await _0x53a5ee(_0x15d9b4, _0x764f05);
        if (_0x15d9b4[_0x764f05]['Email'] == '' || _0x15d9b4[_0x764f05]['Password'] == '' || _0x15d9b4[_0x764f05]['FirstName'] == '' || _0x15d9b4[_0x764f05]['LastName'] == '') {
            console['log'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x764f05 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x30a907['useRandomProxy'] = ![])
            var _0x2031dc = _0x4da8ed[_0x764f05]['split'](':');
        else
            var _0x54aacd = Math['round'](Math['random']() * (_0x4da8ed['length'] - 0x1)), _0x2031dc = _0x4da8ed[_0x54aacd]['split'](':');
        const _0x7035f1 = await _0x52eb11['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2031dc[0x0] + ':' + _0x2031dc[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x56848f = await _0x7035f1['newPage']();
            await _0x56848f['authenticate']({
                'username': '' + _0x2031dc[0x2],
                'password': '' + _0x2031dc[0x3]
            }), console['log'](_0x2ae997() + '\x20[' + _0xf11e7c['name'] + ']\x20Task\x20' + (_0x764f05 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56848f['setRequestInterception'](!![]), _0x56848f['on']('request', _0x160af8 => {
                _0x160af8['resourceType']() === 'image' || _0x160af8['resourceType']() === 'font' || _0x160af8['resourceType']() === 'media' ? _0x160af8['abort']() : _0x160af8['continue']();
            }), await _0x56848f['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x56848f['waitForSelector']('#CustomerEmail'), console['log'](_0x2ae997() + '\x20[' + _0xf11e7c['name'] + ']\x20Task\x20' + (_0x764f05 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x56848f['type']('#CustomerEmail', '' + _0x15d9b4[_0x764f05]['Email']), await _0x599511(0x12c), await _0x56848f['type']('#CustomerPassword', '' + _0x15d9b4[_0x764f05]['Password']), await _0x599511(0x226), await _0x56848f['$eval']('#customer_login', _0x2df9a8 => _0x2df9a8['submit']());
            try {
                await _0x56848f['waitForSelector']('#orders'), await _0x599511(0x4b0);
            } catch {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0xf11e7c['name'] + ']\x20Task\x20' + (_0x764f05 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x56848f['goto']('' + _0x15d9b4[_0x764f05]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x599511(0xbb8), console['log'](_0x2ae997() + '\x20[' + _0xf11e7c['name'] + ']\x20Task\x20' + (_0x764f05 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x56848f['waitForSelector']('#email');
            } catch {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0xf11e7c['name'] + ']\x20Task\x20' + (_0x764f05 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x56848f['type']('#email', '' + _0x15d9b4[_0x764f05]['Email']), await _0x599511(0x384), await _0x56848f['type']('#first_name', '' + _0x15d9b4[_0x764f05]['FirstName']), await _0x599511(0x514), await _0x56848f['type']('#last_name', '' + _0x15d9b4[_0x764f05]['LastName']), await _0x599511(0x514), await _0x56848f['type']('#street_address', _0x15d9b4[_0x764f05]['Address1'] + '\x20' + _0x15d9b4[_0x764f05]['HouseNumber'] + '\x20' + _0x15d9b4[_0x764f05]['Address2']), await _0x599511(0x2bc);
            _0x15d9b4[_0x764f05]['Postcode'] == undefined && (_0x15d9b4[_0x764f05]['Postcode'] = _0x15d9b4[_0x764f05]['Zip']);
            await _0x56848f['type']('#zip_code', '' + _0x15d9b4[_0x764f05]['Postcode']), await _0x599511(0x320), await _0x56848f['type']('#city', '' + _0x15d9b4[_0x764f05]['City']), await _0x599511(0x320), await _0x56848f['type']('#bday', '01/01/1994'), await _0x599511(0x320), await _0x56848f['type']('#instagram', '' + _0x15d9b4[_0x764f05]['Follower']), await _0x599511(0x352);
            if (_0x15d9b4[_0x764f05]['Size'] == 'RANDOM') {
                const _0x4fd482 = await _0x56848f['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x32389b => {
                    return _0x32389b['map'](_0x126caf => _0x126caf['textContent']);
                });
                var _0x3bffe1 = Math['round'](Math['random']() * (_0x4fd482['length'] - 0x1));
                console['log'](_0x2ae997() + '\x20[' + _0xf11e7c['name'] + ']\x20Task\x20' + (_0x764f05 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x4fd482[_0x3bffe1]), await _0x56848f['click']('label[data-eu-size=\x22' + _0x4fd482[_0x3bffe1] + '\x22]');
            } else {
                console['log'](_0x2ae997() + '\x20[' + _0xf11e7c['name'] + ']\x20Task\x20' + (_0x764f05 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x15d9b4[_0x764f05]['Size']);
                try {
                    await _0x56848f['click']('label[data-eu-size=\x22' + _0x15d9b4[_0x764f05]['Size'] + '\x22]');
                } catch {
                    await _0x56848f['click']('label[data-eu-size=\x22' + _0x15d9b4[_0x764f05]['Size'] + '.0\x22]');
                }
            }
            await _0x599511(0xbb8), await _0x56848f['$$eval']('.raffle__checkbox-label', _0x2dcda5 => _0x2dcda5['forEach'](_0x20043e => _0x20043e['click']())), await _0x599511(0x7d0), console['log'](_0x2ae997() + '\x20[' + _0xf11e7c['name'] + ']\x20Task\x20' + (_0x764f05 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x56848f['click']('#raffle__form-submit'), await _0x599511(0x1388);
            try {
                await _0x56848f['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0xf11e7c['name'] + ']\x20Task\x20' + (_0x764f05 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0xf9e2b1) {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x764f05 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0xf9e2b1));
            }
        } catch (_0x11cc7e) {
            console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x764f05 + 0x1) + '\x20:\x20' + _0x11cc7e)), _0x18ecb4 = 'yes';
        } finally {
            _0x7035f1 && _0x7035f1['close']();
            if (_0x18ecb4 == 'yes' && _0x406bcc != 0x5) {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0xf11e7c['name'] + ']\x20Task\x20' + (_0x764f05 + 0x1) + '\x20:\x20Retrying')), _0x764f05 = _0x764f05 - 0x1, _0x406bcc = _0x406bcc + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x30a907['delay'] + '\x20ms'), await _0x599511(_0x30a907['delay']);
        }
    }
}
async function _0x1e1054(_0x18599b, _0x1cf3ba, _0x2808bd, _0x6b2846) {
    _0x52eb11['use'](_0x14af75()), _0x52eb11['use'](_0x315cd9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x30a907['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x32fb33 = 0x0; _0x32fb33 < _0x2808bd['length']; _0x32fb33++) {
        var _0x2bbfcb = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x21dc83
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x30a907['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x11eacc
                }
            ]
        }];
        const _0x307d87 = { 'embeds': _0x2bbfcb };
        _0x180b8a(_0x1cf3ba['name'] + '\x20Task\x20' + (_0x32fb33 + 0x1) + '\x20/\x20' + _0x2808bd['length'] + '\x20||\x20File:\x20' + _0x3e23a7 + '\x20Proxies:\x20' + _0x37e473), await _0x53a5ee(_0x2808bd, _0x32fb33);
        var _0x45f4fa = await _0x1bffbc(_0x2808bd[_0x32fb33], _0x1cf3ba, 'acc', ![]);
        const _0x1a2539 = { 'succesDEVMSG': { 'embeds': [_0x45f4fa] } };
        if (_0x2808bd[_0x32fb33]['Email'] == '' || _0x2808bd[_0x32fb33]['FirstName'] == '' || _0x2808bd[_0x32fb33]['LastName'] == '') {
            console['log'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x32fb33 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x599511(0x7d0);
            continue;
        }
        (_0x2808bd[_0x32fb33]['Password'] == '' || _0x2808bd[_0x32fb33] == undefined) && _0x2808bd[_0x32fb33]['Password'] == 'JRaffles23!';
        if (_0x30a907['useRandomProxy'] = ![])
            var _0x14c425 = _0x6b2846[_0x32fb33]['split'](':');
        else
            var _0x3ca455 = Math['round'](Math['random']() * (_0x6b2846['length'] - 0x1)), _0x14c425 = _0x6b2846[_0x3ca455]['split'](':');
        const _0x1cc89f = await _0x52eb11['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x14c425[0x0] + ':' + _0x14c425[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4921fc = await _0x1cc89f['newPage']();
            await _0x4921fc['authenticate']({
                'username': '' + _0x14c425[0x2],
                'password': '' + _0x14c425[0x3]
            }), console['log'](_0x2ae997() + '\x20[' + _0x1cf3ba['name'] + ']\x20Task\x20' + (_0x32fb33 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4921fc['setRequestInterception'](!![]), _0x4921fc['on']('request', _0x56013d => {
                _0x56013d['resourceType']() === 'image' || _0x56013d['resourceType']() === 'font' || _0x56013d['resourceType']() === 'media' ? _0x56013d['abort']() : _0x56013d['continue']();
            }), await _0x4921fc['goto']('https://drop.slamjam.com/account/register'), await _0x599511(0xbb8), await _0x4921fc['waitForSelector']('#FirstName'), await _0x4921fc['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4921fc['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x2ae997() + '\x20[' + _0x1cf3ba['name'] + ']\x20Task\x20' + (_0x32fb33 + 0x1) + '\x20:\x20Filling\x20information'), await _0x599511(0x4b0), await _0x4921fc['type']('#FirstName', '' + _0x2808bd[_0x32fb33]['FirstName']), await _0x599511(0x226), await _0x4921fc['type']('#LastName', '' + _0x2808bd[_0x32fb33]['LastName']), await _0x599511(0x226), await _0x4921fc['type']('#Email', '' + _0x2808bd[_0x32fb33]['Email']), await _0x599511(0x2ee), await _0x4921fc['type']('#ConfirmEmail', '' + _0x2808bd[_0x32fb33]['Email']), await _0x599511(0x2ee), await _0x4921fc['type']('#CreatePassword', '' + _0x2808bd[_0x32fb33]['Password']), await _0x599511(0x2ee), await _0x4921fc['type']('#CreateConfirmPassword', '' + _0x2808bd[_0x32fb33]['Password']), await _0x599511(0x226), console['log'](_0x2ae997() + '\x20[' + _0x1cf3ba['name'] + ']\x20Task\x20' + (_0x32fb33 + 0x1) + '\x20:\x20Submitting..'), await _0x4921fc['$eval']('#create_customer', _0x400901 => _0x400901['submit']()), await _0x599511(0x1388), console['log'](_0x2ae997() + '\x20[' + _0x1cf3ba['name'] + ']\x20Task\x20' + (_0x32fb33 + 0x1) + '\x20:\x20' + _0x3d6019['cyan']('Solving\x20Captcha')), await _0x4921fc['solveRecaptchas'](), console['log'](_0x2ae997() + '\x20[' + _0x1cf3ba['name'] + ']\x20Task\x20' + (_0x32fb33 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x4921fc['$eval']('.shopify-challenge__container\x20>\x20form', _0x1d2ba0 => _0x1d2ba0['submit']());
            try {
                await _0x4921fc['waitForSelector']('.product-card__image'), await _0x599511(0x1f4), console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x1cf3ba['name'] + ']\x20Task\x20' + (_0x32fb33 + 0x1) + '\x20:\x20Account\x20' + _0x2808bd[_0x32fb33]['Email'] + '\x20Generated!')), _0x44b12e['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x2808bd[_0x32fb33]['Email'] + ',' + _0x2808bd[_0x32fb33]['Password']), console['log'](_0x3d6019['yellow'](_0x2ae997() + '\x20[' + _0x1cf3ba['name'] + ']\x20Task\x20' + (_0x32fb33 + 0x1) + '\x20:\x20Account\x20' + _0x2808bd[_0x32fb33]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x1a2539['succesDEVMSG']);
                } catch {
                }
                await _0x309275(_0x567e6c, _0x1a2539['succesDEVMSG']);
            } catch (_0x303070) {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x32fb33 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x303070));
            }
        } catch (_0x62c809) {
            console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x32fb33 + 0x1) + '\x20:\x20' + _0x62c809));
        } finally {
            _0x1cc89f && _0x1cc89f['close'](), console['log']('Waiting\x20for\x20' + _0x30a907['delay'] + '\x20ms'), await _0x599511(_0x30a907['delay']);
        }
    }
}
async function _0x3705fa(_0xc1df39, _0x369447, _0x206145, _0x25d60f) {
    _0x52eb11['use'](_0x14af75()), _0x52eb11['use'](_0x315cd9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x30a907['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x8b1664 = 0x0; _0x8b1664 < _0x206145['length']; _0x8b1664++) {
        var _0x362764, _0x5bd6c0 = '', _0x19b414 = 0x0;
        _0x180b8a(_0x369447['name'] + '\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20/\x20' + _0x206145['length'] + '\x20||\x20File:\x20' + _0x3e23a7 + '\x20Proxies:\x20' + _0x37e473), await _0x53a5ee(_0x206145, _0x8b1664);
        if (_0x206145[_0x8b1664]['Email'] == '' || _0x206145[_0x8b1664]['Password'] == '' || _0x206145[_0x8b1664]['FirstName'] == '' || _0x206145[_0x8b1664]['LastName'] == '') {
            console['log'](_0x2ae997() + '\x20[' + _0x369447['name'] + ']\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x30a907['useRandomProxy'] = ![])
            var _0x4fa2dd = _0x25d60f[_0x8b1664]['split'](':');
        else
            var _0x96b6e9 = Math['round'](Math['random']() * (_0x25d60f['length'] - 0x1)), _0x4fa2dd = _0x25d60f[_0x96b6e9]['split'](':');
        const _0x3e9757 = await _0x52eb11['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4fa2dd[0x0] + ':' + _0x4fa2dd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x2ce34f = await _0x3e9757['newPage']();
            await _0x2ce34f['authenticate']({
                'username': '' + _0x4fa2dd[0x2],
                'password': '' + _0x4fa2dd[0x3]
            }), await _0x2ce34f['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x2ae997() + '\x20[' + _0x369447['name'] + ']\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2ce34f['setRequestInterception'](!![]), _0x2ce34f['on']('request', _0x4ba448 => {
                _0x4ba448['resourceType']() === 'image' || _0x4ba448['resourceType']() === 'font' || _0x4ba448['resourceType']() === 'media' ? _0x4ba448['abort']() : _0x4ba448['continue']();
            }), await _0x2ce34f['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x2ce34f['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2ce34f['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x599511(0x258), await _0x2ce34f['waitForSelector']('#CustomerEmail'), console['log'](_0x2ae997() + '\x20[' + _0x369447['name'] + ']\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2ce34f['type']('#CustomerEmail', '' + _0x206145[_0x8b1664]['Email']), await _0x599511(0x12c), await _0x2ce34f['type']('#CustomerPassword', '' + _0x206145[_0x8b1664]['Password']), await _0x599511(0x226), await _0x2ce34f['$eval']('#customer_login', _0x167fe1 => _0x167fe1['submit']()), await _0x599511(0x7d0), await _0x2ce34f['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x2ae997() + '\x20[' + _0x369447['name'] + ']\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20:\x20' + _0x3d6019['cyan']('Solving\x20Captcha')), await _0x2ce34f['solveRecaptchas'](), console['log'](_0x2ae997() + '\x20[' + _0x369447['name'] + ']\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x2ce34f['$eval']('.shopify-challenge__container\x20>\x20form', _0x42e41c => _0x42e41c['submit']());
            try {
                await _0x2ce34f['waitForSelector']('.nav-account'), await _0x599511(0x4b0);
            } catch {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x369447['name'] + ']\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x2ce34f['goto']('' + _0x206145[_0x8b1664]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x599511(0xbb8), console['log'](_0x2ae997() + '\x20[' + _0x369447['name'] + ']\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x2ce34f['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x2ce34f['click']('.product-select-variant-wrapper'), await _0x599511(0x320), await _0x2ce34f['click']('li.product-select-variant__value[data-size=\x22' + _0x206145[_0x8b1664]['Size'] + '\x22]'), await _0x599511(0x384), await _0x2ce34f['$eval']('#AddToCartForm-product-template-raffle', _0x41b939 => _0x41b939['submit']()), await _0x2ce34f['waitForSelector']('.cart-order-summary__content'), await _0x599511(0x514), await _0x2ce34f['goto']('https://drop.slamjam.com/checkout'), await _0x599511(0x514), await _0x2ce34f['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x2ae997() + '\x20[' + _0x369447['name'] + ']\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2ce34f['select']('#checkout_shipping_address_country', '' + _0x206145[_0x8b1664]['Country']), await _0x599511(0x200), await _0x2ce34f['waitForSelector']('#checkout_shipping_address_first_name'), await _0x2ce34f['type']('#checkout_shipping_address_first_name', '' + _0x206145[_0x8b1664]['FirstName']), await _0x599511(0x237), await _0x2ce34f['type']('#checkout_shipping_address_last_name', '' + _0x206145[_0x8b1664]['LastName']), await _0x599511(0x1e0), await _0x2ce34f['type']('#checkout_shipping_address_address1', _0x206145[_0x8b1664]['Address1'] + '\x20' + _0x206145[_0x8b1664]['HouseNumber']), await _0x599511(0x514), await _0x2ce34f['type']('#checkout_shipping_address_address2', '' + _0x206145[_0x8b1664]['Address2']), await _0x599511(0x514);
            _0x206145[_0x8b1664]['Postcode'] == undefined && (_0x206145[_0x8b1664]['Postcode'] = _0x206145[_0x8b1664]['Zip']);
            await _0x2ce34f['type']('#checkout_shipping_address_zip', '' + _0x206145[_0x8b1664]['Postcode']), await _0x599511(0x2bc), await _0x2ce34f['type']('#checkout_shipping_address_city', '' + _0x206145[_0x8b1664]['City']), await _0x599511(0x320), await _0x2ce34f['type']('#checkout_shipping_address_phone', '' + _0x206145[_0x8b1664]['Phone']), await _0x599511(0x320), await _0x2ce34f['click']('#continue_button'), await _0x599511(0xbb8), await _0x2ce34f['waitForSelector']('.summary-title'), await _0x599511(0x320), await _0x2ce34f['click']('#continue_button'), await _0x599511(0x320), console['log'](_0x2ae997() + '\x20[' + _0x369447['name'] + ']\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x2ce34f['waitForSelector']('#checkout_credit_card_vault'), await _0x599511(0x3e8);
            var _0x10d862 = await _0x2ce34f['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x55b7cc = await _0x10d862['contentFrame']();
            await _0x55b7cc['click']('#number'), await _0x599511(0x3e8), await _0x55b7cc['type']('#number', '' + _0x206145[_0x8b1664]['CardNumber'], { 'delay': 0x78 }), _0x10d862 = await _0x2ce34f['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x55b7cc = await _0x10d862['contentFrame'](), await _0x599511(0x1c2), await _0x55b7cc['click']('#name'), await _0x599511(0x1f4), await _0x55b7cc['type']('#name', '' + _0x206145[_0x8b1664]['NameOnCard'], { 'delay': 0x78 }), _0x10d862 = await _0x2ce34f['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x55b7cc = await _0x10d862['contentFrame'](), await _0x599511(0x1c2), await _0x55b7cc['click']('#expiry'), await _0x599511(0x1f4), await _0x55b7cc['type']('#expiry', '' + _0x206145[_0x8b1664]['ExpiryDate'], { 'delay': 0x78 }), _0x10d862 = await _0x2ce34f['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x55b7cc = await _0x10d862['contentFrame'](), await _0x599511(0x1c2), await _0x55b7cc['click']('#verification_value'), await _0x599511(0x1f4), await _0x55b7cc['type']('#verification_value', '' + _0x206145[_0x8b1664]['CVV'], { 'delay': 0x78 }), await _0x2ce34f['$eval']('#accepts-flag-raffle', _0x138a11 => _0x138a11['click']()), await _0x599511(0x7d0), console['log'](_0x2ae997() + '\x20[' + _0x369447['name'] + ']\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x2ce34f['$eval']('#continue_button', _0x1c1b58 => _0x1c1b58['click']()), await _0x599511(0x1b58), await _0x2ce34f['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x2ce34f['$eval']('.edit_checkout.animate-floating-labels', _0x40946f => _0x40946f['submit']()), await _0x599511(0x7d0);
            try {
                await _0x2ce34f['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x369447['name'] + ']\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x6b91aa) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x6b91aa['message']);
            }
            var _0x22edc0 = await _0x1bffbc(_0x206145[_0x8b1664], _0x369447, 'dev', ![]), _0x33ffb0 = await _0x1bffbc(_0x206145[_0x8b1664], _0x369447, 'pub', ![]);
            const _0x57b5cc = {
                'succesDEVMSG': { 'embeds': [_0x22edc0] },
                'succesPUBMSG': { 'embeds': [_0x33ffb0] }
            };
            try {
                _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x57b5cc['succesDEVMSG']), await _0x599511(0xc8), await _0x309275(_0x14ae8c, _0x57b5cc['succesDEVMSG']), await _0x599511(0xc8), await _0x309275(_0x25e6a4, _0x57b5cc['succesPUBMSG']);
            } catch (_0x1a38b4) {
                console['log'](_0x3d6019['yellow'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1a38b4));
            }
        } catch (_0x3b34ee) {
            console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20:\x20' + _0x3b34ee)), _0x362764 = '' + _0x3b34ee;
            var _0x24aaf9 = await _0x1bffbc(kickz[_0x8b1664], _0x369447, 'dev', !![], _0x362764);
            EMBEDS['errorDEV'] = { 'embeds': [_0x24aaf9] }, _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], EMBEDS['errorDEV']), await _0x309275(_0x2e30ca, EMBEDS['errorDEV']), _0x5bd6c0 = 'yes';
        } finally {
            _0x3e9757 && _0x3e9757['close']();
            if (_0x5bd6c0 == 'yes' && _0x19b414 != 0x5) {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x369447['name'] + ']\x20Task\x20' + (_0x8b1664 + 0x1) + '\x20:\x20Retrying')), _0x8b1664 = _0x8b1664 - 0x1, _0x19b414 = _0x19b414 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x30a907['delay'] + '\x20ms'), await _0x599511(_0x30a907['delay']);
        }
    }
}
async function _0x3349d1(_0x87a273, _0x47deb3, _0x3941ae) {
    var _0x3c9a2f = ![], _0x5359ec = ![];
    if (_0x30a907['captchaKey'] == '' || _0x30a907['captchaKey'] == undefined)
        return console['log'](_0x3d6019['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x52eb11['use'](_0x14af75()), _0x52eb11['use'](_0x315cd9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x30a907['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x487e0a = 0x0; _0x487e0a < _0x47deb3['length']; _0x487e0a++) {
        var _0x42e009, _0x5af3e6 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x47deb3[_0x487e0a]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x47deb3[_0x487e0a]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x21dc83
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x30a907['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x11eacc
                }
            ]
        }];
        const _0x57145e = { 'embeds': _0x5af3e6 };
        _0x180b8a(_0x87a273['name'] + '\x20Task\x20' + (_0x487e0a + 0x1) + '\x20/\x20' + _0x47deb3['length'] + '\x20||\x20File:\x20' + _0x3e23a7 + '\x20Proxies:\x20' + _0x37e473), await _0x53a5ee(_0x47deb3, _0x487e0a);
        var _0x3095e4 = await _0x1bffbc(_0x47deb3[_0x487e0a], _0x87a273, 'dev', ![]), _0x528cc0 = await _0x1bffbc(_0x47deb3[_0x487e0a], _0x87a273, 'pub', ![]);
        const _0x5a3800 = {
            'succesDEVMSG': { 'embeds': [_0x3095e4] },
            'succesPUBMSG': { 'embeds': [_0x528cc0] }
        };
        if (_0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '')
            try {
                await _0x309275(_0x30a907['webhook'], _0x5a3800['succesDEVMSG']);
            } catch {
            }
        await _0x599511(0xc8), await _0x309275(_0x14ae8c, _0x5a3800['succesDEVMSG']), await _0x599511(0xc8);
        try {
            await _0x309275(_0x25e6a4, _0x5a3800['succesPUBMSG']);
        } catch {
        }
        if (_0x47deb3[_0x487e0a]['Email'] == '' || _0x47deb3[_0x487e0a]['Url'] == '' || _0x47deb3[_0x487e0a]['FirstName'] == '' || _0x47deb3[_0x487e0a]['LastName'] == '') {
            console['log'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x487e0a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x30a907['useRandomProxy'] = ![])
            var _0x3fa161 = _0x3941ae[_0x487e0a]['split'](':');
        else
            var _0x38a4d4 = Math['round'](Math['random']() * (_0x3941ae['length'] - 0x1)), _0x3fa161 = _0x3941ae[_0x38a4d4]['split'](':');
        const _0x177abd = await _0x52eb11['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3fa161[0x0] + ':' + _0x3fa161[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x36dfe1 = await _0x177abd['newPage']();
            await _0x36dfe1['authenticate']({
                'username': '' + _0x3fa161[0x2],
                'password': '' + _0x3fa161[0x3]
            }), console['log'](_0x2ae997() + '\x20[' + _0x87a273['name'] + ']\x20Task\x20' + (_0x487e0a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x36dfe1['setRequestInterception'](!![]), _0x36dfe1['on']('request', _0xb17215 => {
                _0xb17215['resourceType']() === 'image' || _0xb17215['resourceType']() === 'font' || _0xb17215['resourceType']() === 'media' ? _0xb17215['abort']() : _0xb17215['continue']();
            }), await _0x36dfe1['goto']('' + _0x47deb3[_0x487e0a]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x36dfe1['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x2ae997() + '\x20[' + _0x87a273['name'] + ']\x20Task\x20' + (_0x487e0a + 0x1) + '\x20:\x20Filling\x20Information'), await _0x36dfe1['type']('#comp_firstname', '' + _0x47deb3[_0x487e0a]['FirstName']), await _0x36dfe1['waitForSelector']('#comp_lastname'), await _0x36dfe1['type']('#comp_lastname', '' + _0x47deb3[_0x487e0a]['LastName']), await _0x36dfe1['waitForSelector']('#comp_email'), await _0x36dfe1['type']('#comp_email', '' + _0x47deb3[_0x487e0a]['Email']), await _0x36dfe1['waitForSelector']('#comp_paypalemail'), await _0x36dfe1['type']('#comp_paypalemail', '' + _0x47deb3[_0x487e0a]['Email']), await _0x36dfe1['waitForSelector']('#comp_mobile_end'), await _0x36dfe1['type']('#comp_mobile_end', '' + _0x47deb3[_0x487e0a]['Phone']), await _0x36dfe1['waitForSelector']('#comp_dob'), await _0x36dfe1['type']('#comp_dob', '08/09/1992'), console['log'](_0x2ae997() + '\x20[' + _0x87a273['name'] + ']\x20Task\x20' + (_0x487e0a + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x47deb3[_0x487e0a]['Size'] == 'RANDOM') {
                const _0x521439 = await _0x36dfe1['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x874d47 => {
                    return _0x874d47['map'](_0x211966 => _0x211966['value']);
                });
                var _0x276182 = Math['round'](Math['random']() * (_0x521439['length'] - 0x2));
                await _0x36dfe1['select']('#shoesize', _0x521439[_0x276182 + 0x1]), await _0x599511(0x3e8);
            } else {
                const _0x3f330a = await _0x36dfe1['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x27aac5 => {
                    return _0x27aac5['map'](_0x25b381 => _0x25b381['innerText']);
                }), _0x1aabfb = await _0x36dfe1['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xa82b8c => {
                    return _0xa82b8c['map'](_0x2d18f5 => _0x2d18f5['value']);
                });
                var _0x432d81 = _0x47deb3[_0x487e0a]['Size'];
                for (var _0x356e93 = 0x1; _0x356e93 < _0x1aabfb['length']; _0x356e93++) {
                    var _0x353e62 = _0x3f330a[_0x356e93]['split']('\x20')[0x0];
                    if (_0x353e62 == _0x432d81) {
                        await _0x36dfe1['select']('#shoesize', _0x1aabfb[_0x356e93]);
                        break;
                    } else {
                        if (_0x356e93 + 0x1 == _0x1aabfb['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x36dfe1['waitForSelector']('#comp_address1'), await _0x36dfe1['type']('#comp_address1', _0x47deb3[_0x487e0a]['Address1'] + '\x20' + _0x47deb3[_0x487e0a]['HouseNumber']), await _0x36dfe1['waitForSelector']('#comp_address2'), await _0x36dfe1['type']('#comp_address2', '' + _0x47deb3[_0x487e0a]['Address2']), await _0x36dfe1['waitForSelector']('#comp_address2'), await _0x36dfe1['type']('#comp_address3', '' + _0x47deb3[_0x487e0a]['City']), await _0x36dfe1['waitForSelector']('#comp_postcode'), await _0x36dfe1['type']('#comp_postcode', '' + _0x47deb3[_0x487e0a]['Zip']), console['log'](_0x2ae997() + '\x20[' + _0x87a273['name'] + ']\x20Task\x20' + (_0x487e0a + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x599511(0x4b0), await _0x36dfe1['click']('label#emailhold'), await _0x599511(0x5dc), await _0x36dfe1['click']('#preauth_tandc_email\x20>\x20label'), await _0x599511(0x5dc), await _0x36dfe1['click']('#submit'), await _0x36dfe1['waitForSelector']('#paymentWrap'), console['log'](_0x2ae997() + '\x20[' + _0x87a273['name'] + ']\x20Task\x20' + (_0x487e0a + 0x1) + '\x20:\x20' + _0x3d6019['blue']('Awaiting\x20Paypal\x20Payment')), _0x177abd['on']('targetcreated', async _0x3bb6fa => {
                if (_0x3bb6fa['type']() === 'page') {
                    const _0x4e1e55 = await _0x3bb6fa['page']();
                    async function _0x4b22e3() {
                        try {
                            await _0x36dfe1['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x5359ec = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x2a0518() {
                        try {
                            await _0x36dfe1['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x3c9a2f = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x2a0518(), _0x4b22e3(), await _0x599511(0x493e0);
                }
            });
            async function _0x2bd229() {
                for (let _0x3f8347 = 0x0; _0x3f8347 < 0x12c; _0x3f8347++) {
                    if (_0x3c9a2f == !![]) {
                        console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x87a273['name'] + ']\x20Task\x20' + (_0x487e0a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '')
                            try {
                                await _0x309275(_0x30a907['webhook'], _0x5a3800['succesDEVMSG']);
                            } catch {
                            }
                        await _0x599511(0xc8), await _0x309275(_0x14ae8c, _0x5a3800['succesDEVMSG']), await _0x599511(0xc8);
                        try {
                            await _0x309275(_0x25e6a4, _0x5a3800['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x5359ec)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x599511(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x599511(0xbb8), await _0x36dfe1['click']('.zoid-outlet'), await _0x599511(0x7d0), await _0x2bd229();
        } catch (_0x4b27b4) {
            console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x87a273['name'] + ']\x20Task\x20' + (_0x487e0a + 0x1) + '\x20:\x20' + _0x4b27b4)), _0x42e009 = '' + _0x4b27b4;
            var _0x36216d = await _0x1bffbc(_0x47deb3[_0x487e0a], _0x87a273, 'dev', !![], _0x42e009);
            _0x5a3800['errorDEV'] = { 'embeds': [_0x36216d] }, _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x5a3800['errorDEV']), await _0x309275(_0x2e30ca, _0x5a3800['errorDEV']);
        } finally {
            _0x177abd && _0x177abd['close'](), console['log']('Waiting\x20for\x20' + _0x30a907['delay'] + '\x20ms'), await _0x599511(_0x30a907['delay']);
        }
    }
}
async function _0x4aae62(_0x521adf, _0x2ee23c, _0x122427) {
    _0x52eb11['use'](_0x14af75()), _0x52eb11['use'](_0x315cd9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x30a907['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x39493b = 0x0; _0x39493b < _0x2ee23c['length']; _0x39493b++) {
        _0x180b8a(_0x521adf['name'] + '\x20Task\x20' + (_0x39493b + 0x1) + '\x20/\x20' + _0x2ee23c['length'] + '\x20||\x20File:\x20' + _0x3e23a7 + '\x20Proxies:\x20' + _0x37e473);
        var _0x3c7fe4 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x21dc83
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2ee23c[_0x39493b]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2ee23c[_0x39493b]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x30a907['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x30a907['version']
                }
            ]
        }];
        const _0x180716 = { 'embeds': _0x3c7fe4 };
        await _0x53a5ee(_0x2ee23c, _0x39493b);
        if (_0x2ee23c[_0x39493b]['Email'] == '' || _0x2ee23c[_0x39493b]['Password'] == '' || _0x2ee23c[_0x39493b]['FirstName'] == '' || _0x2ee23c[_0x39493b]['LastName'] == '') {
            console['log'](_0x2ae997() + '\x20[' + _0x521adf['name'] + ']\x20Task\x20' + (_0x39493b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x2ee23c[_0x39493b]['Password'] == '' || _0x2ee23c[_0x39493b]['Password'] == undefined) && (_0x2ee23c[_0x39493b]['Password'] = 'ErehsaWonRaj1!');
        if (_0x30a907['useRandomProxy'] = ![])
            var _0x5662be = _0x122427[_0x39493b]['split'](':');
        else
            var _0x31bdb0 = Math['round'](Math['random']() * (_0x122427['length'] - 0x1)), _0x5662be = _0x122427[_0x31bdb0]['split'](':');
        const _0x1df67e = await _0x52eb11['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5662be[0x0] + ':' + _0x5662be[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x35e3aa = await _0x1df67e['newPage']();
            await _0x35e3aa['authenticate']({
                'username': '' + _0x5662be[0x2],
                'password': '' + _0x5662be[0x3]
            }), console['log'](_0x2ae997() + '\x20[' + _0x521adf['name'] + ']\x20Task\x20' + (_0x39493b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x35e3aa['setRequestInterception'](!![]), _0x35e3aa['on']('request', _0xdb2b6f => {
                _0xdb2b6f['resourceType']() === 'image' || _0xdb2b6f['resourceType']() === 'font' || _0xdb2b6f['resourceType']() === 'media' ? _0xdb2b6f['abort']() : _0xdb2b6f['continue']();
            }), await _0x35e3aa['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x35e3aa['goto']('' + _0x2ee23c[_0x39493b]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x35e3aa['waitForSelector']('#btnPdpAtb'), console['log'](_0x2ae997() + '\x20[' + _0x521adf['name'] + ']\x20Task\x20' + (_0x39493b + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x2ee23c[_0x39493b]['Size']);
            const _0x51e140 = await _0x35e3aa['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x29d482 => {
                return _0x29d482['map'](_0x4a05a2 => _0x4a05a2['innerText']);
            }), _0x529424 = await _0x35e3aa['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x12578d = ![];
            if (_0x2ee23c[_0x39493b]['Size'] == 'RANDOM') {
                var _0x4d73a0 = Math['round'](Math['random']() * (_0x529424['length'] - 0x1));
                await _0x529424[_0x4d73a0]['click']();
            } else
                for (var _0x162a38 = 0x0; _0x162a38 < _0x51e140['length']; _0x162a38++) {
                    if (_0x51e140[_0x162a38] != _0x2ee23c[_0x39493b]['Size'])
                        continue;
                    try {
                        await _0x529424[_0x162a38]['click']();
                    } catch {
                        console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x521adf['name'] + ']\x20Task\x20' + (_0x39493b + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x12578d = !![];
                    }
                }
            if (_0x12578d)
                continue;
            await _0x599511(0x578), await _0x35e3aa['click']('#btnPdpAtb'), await _0x35e3aa['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x599511(0x3e8), console['log'](_0x2ae997() + '\x20[' + _0x521adf['name'] + ']\x20Task\x20' + (_0x39493b + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x35e3aa['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x35e3aa['waitForSelector']('#email'), await _0x35e3aa['type']('#email', _0x2ee23c[_0x39493b]['Email']), await _0x599511(0x226), await _0x35e3aa['click']('#guest-submit'), await _0x599511(0x1b58), console['log'](_0x2ae997() + '\x20[' + _0x521adf['name'] + ']\x20Task\x20' + (_0x39493b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x35e3aa['waitForSelector']('#firstname'), await _0x35e3aa['type']('#firstname', _0x2ee23c[_0x39493b]['FirstName'], 0x1f4), await _0x599511(0x190), await _0x35e3aa['waitForSelector']('#surname'), await _0x35e3aa['type']('#surname', _0x2ee23c[_0x39493b]['LastName'], 0x1f4), await _0x599511(0x190), await _0x35e3aa['waitForSelector']('#mobile'), await _0x35e3aa['type']('#mobile', _0x2ee23c[_0x39493b]['Phone'], 0x1f4), await _0x599511(0x190), await _0x35e3aa['click']('#enterManualDiv'), await _0x599511(0x5dc), await _0x35e3aa['waitForSelector']('#address1'), await _0x35e3aa['type']('#address1', _0x2ee23c[_0x39493b]['Address1'] + '\x20' + _0x2ee23c[_0x39493b]['HouseNumber'], 0x226), await _0x599511(0x384), await _0x35e3aa['waitForSelector']('#address2'), await _0x35e3aa['type']('#address2', '' + _0x2ee23c[_0x39493b]['Address2'], 0x226), await _0x599511(0x320);
            const _0xe7c9de = await _0x35e3aa['$$eval']('#countryselect_view3\x20>\x20option', _0x1db76e => {
                return _0x1db76e['map'](_0x3ef12f => _0x3ef12f['value']);
            });
            var _0x4b8e1a;
            for (var _0x728638 = 0x0; _0x728638 < _0xe7c9de['length']; _0x728638++) {
                if (_0xe7c9de[_0x728638]['startsWith']('' + _0x2ee23c[_0x39493b]['Country'])) {
                    _0x4b8e1a = _0xe7c9de[_0x728638];
                    break;
                }
                continue;
            }
            await _0x35e3aa['select']('#countryselect_view3', '' + _0x4b8e1a), await _0x35e3aa['waitForSelector']('#address4'), await _0x35e3aa['type']('#address4', '' + _0x2ee23c[_0x39493b]['City'], 0x1f4), await _0x599511(0x384), await _0x35e3aa['waitForSelector']('#postcode'), await _0x35e3aa['type']('#postcode', '' + _0x2ee23c[_0x39493b]['Zip'], 0x1f4), await _0x599511(0x4b0);
            const _0x1eedd5 = await _0x35e3aa['url']();
            console['log'](_0x2ae997() + '\x20[' + _0x521adf['name'] + ']\x20Task\x20' + (_0x39493b + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0xa0bca7 = _0x1eedd5['split']('?')[0x1], _0x52a702 = await _0x35e3aa['$']('#co_address_submit');
            await _0x52a702['evaluate'](_0x34d0dd => _0x34d0dd['click']()), await _0x599511(0x1388), await _0x35e3aa['goto']('https://www.sevenstore.com/checkout/pay/?' + _0xa0bca7), console['log'](_0x2ae997() + '\x20[' + _0x521adf['name'] + ']\x20Task\x20' + (_0x39493b + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x35e3aa['waitForSelector']('#paymentbuttons'), await _0x599511(0x1388), await _0x35e3aa['click']('#paymentbuttons\x20>\x20div'), await _0x599511(0x1c2), await _0x35e3aa['waitForSelector']('#card-number'), await _0x35e3aa['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x6aa239 = await _0x35e3aa['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x243709 = await _0x6aa239['contentFrame']();
            await _0x243709['waitForSelector']('.InputContainer'), await _0x243709['click']('.InputContainer\x20>\x20input'), await _0x599511(0x578), await _0x35e3aa['type']('#card-number', '' + _0x2ee23c[_0x39493b]['CreditNumber']), await _0x599511(0xfa), await _0x35e3aa['type']('#card-expiry', '' + _0x2ee23c[_0x39493b]['ExpiryDate']), await _0x599511(0xfa), await _0x35e3aa['type']('#card-cvc', '' + _0x2ee23c[_0x39493b]['CVV']), await _0x599511(0x7d0), await _0x35e3aa['click']('#card-button'), console['log'](_0x2ae997() + '\x20[' + _0x521adf['name'] + ']\x20Task\x20' + (_0x39493b + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x35e3aa['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x521adf['name'] + ']\x20Task\x20' + (_0x39493b + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x309275(_0x14ae8c, _0x180716);
            } catch {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x521adf['name'] + ']\x20Task\x20' + (_0x39493b + 0x1) + '\x20:\x203DS\x20Failed')), _0x3c7fe4[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x3c7fe4[0x0]['description'] = '3DS\x20Failed', await _0x309275(_0x2e30ca, _0x180716);
            }
        } catch (_0x49d673) {
            console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x521adf['name'] + ']\x20Task\x20' + (_0x39493b + 0x1) + '\x20:\x20' + _0x49d673)), _0x3c7fe4[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x3c7fe4[0x0]['description'] = '' + _0x49d673, await _0x309275(_0x2e30ca, _0x180716);
        } finally {
            _0x1df67e && _0x1df67e['close']();
            if (_0x39493b + 0x1 == _0x2ee23c['length']) {
                console['log'](_0x3d6019['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x599511(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x30a907['AfewDelay'] + '\x20ms'), await _0x599511(_0x30a907['AfewDelay']);
        }
    }
}
async function _0x2f8e6f(_0x3d238a, _0x5ad264, _0x4a5851, _0x10224e, _0x45b578) {
    var _0xc70b4d, _0xfeb1e3 = {}, _0x7b03d = [], _0x4ba76b = {}, _0x5e0af0 = [
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
    !_0x10224e && (_0x10224e = {});
    if (_0x5ad264 != 'ver') {
        _0x180b8a(_0x4a5851['name'] + '\x20Task\x20' + (_0x3d238a + 0x1) + '\x20/\x20' + _0x10224e['length'] + '\x20||\x20File:\x20' + _0x3e23a7 + '\x20Proxies:\x20' + _0x37e473), await _0x53a5ee(_0x10224e, _0x3d238a), _0x7b03d = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x21dc83
                },
                {
                    'name': 'Size',
                    'value': '' + _0x10224e[_0x3d238a]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x30a907['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x11eacc
                }
            ]
        }], _0x4ba76b = { 'embeds': _0x7b03d }, _0xfeb1e3 = _0x4a5851['data'];
        _0x5ad264 == 'exp' ? _0xfeb1e3['data']['attributes']['email'] = '' + _0x10224e[_0x3d238a]['FirstName'] + _0x10224e[_0x3d238a]['LastName'] + _0x30a907['catchall'] : _0xfeb1e3['data']['attributes']['email'] = '' + _0x10224e[_0x3d238a]['Email'];
        if (_0x10224e[_0x3d238a]['Size'] == 'RANDOM') {
        }
        _0xfeb1e3['data']['attributes']['properties']['$first_name'] = '' + _0x10224e[_0x3d238a]['FirstName'], _0xfeb1e3['data']['attributes']['properties']['$last_name'] = '' + _0x10224e[_0x3d238a]['LastName'], _0xfeb1e3['data']['attributes']['properties']['$address1'] = _0x10224e[_0x3d238a]['Address1'] + '\x20' + _0x10224e[_0x3d238a]['Address2'] + '\x20' + _0x10224e[_0x3d238a]['HouseNumber'], _0xfeb1e3['data']['attributes']['properties']['$zip'] = '' + _0x10224e[_0x3d238a]['Zip'], _0xfeb1e3['data']['attributes']['properties']['$city'] = '' + _0x10224e[_0x3d238a]['City'], _0xfeb1e3['data']['attributes']['properties']['$country'] = '' + _0x10224e[_0x3d238a]['Country'], _0xfeb1e3['data']['attributes']['properties']['Size'] = '' + _0x10224e[_0x3d238a]['Size'], _0xfeb1e3['data']['attributes']['properties']['$phone_number'] = '' + _0x10224e[_0x3d238a]['Phone'], _0xfeb1e3['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x10224e[_0x3d238a]['Follower'];
    }
    if (_0x30a907['useRandomProxy'] = ![])
        var _0x4259e1 = _0x45b578[_0x3d238a]['split'](':');
    else
        var _0x3675f4 = Math['round'](Math['random']() * (_0x45b578['length'] - 0x1)), _0x4259e1 = _0x45b578[_0x3675f4]['split'](':');
    var _0xd392c9 = {
        'jar': _0xa1437f,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x4a5851['url'],
        'headers': _0x4a5851['headers'],
        'body': JSON['stringify'](_0xfeb1e3),
        'proxy': 'http://' + _0x4259e1[0x2] + ':' + _0x4259e1[0x3] + '@' + _0x4259e1[0x0] + ':' + _0x4259e1[0x1]
    };
    return _0x5ad264 != 'ver' && (_0xd392c9['url'] = _0x4a5851['url'], _0xd392c9['headers'] = _0x4a5851['headers']), _0x5ad264 == 'ver' && (_0xd392c9['method'] = 'GET'), new Promise(function (_0x33fddd, _0x361279) {
        callback = async (_0x45be5c, _0x6ebd02, _0x1e4756) => {
            if (!_0x45be5c && _0x6ebd02['statusCode'] == 0xca || !_0x45be5c && _0x6ebd02['statusCode'] == 0xc8) {
                if (_0x5ad264 != 'ver') {
                    var _0x254f76 = await _0x1bffbc(_0x10224e[_0x3d238a], _0x4a5851, 'dev', ![]), _0x1fdbb9 = await _0x1bffbc(_0x10224e[_0x3d238a], _0x4a5851, 'pub', ![]);
                    const _0x1e0993 = {
                        'succesDEVMSG': { 'embeds': [_0x254f76] },
                        'succesPUBMSG': { 'embeds': [_0x1fdbb9] }
                    };
                    if (_0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '')
                        try {
                            await _0x309275(_0x30a907['webhook'], _0x1e0993['succesDEVMSG']);
                        } catch {
                        }
                    await _0x599511(0xc8), await _0x309275(_0x14ae8c, _0x1e0993['succesDEVMSG']), await _0x599511(0xc8);
                    try {
                        await _0x309275(_0x25e6a4, _0x1e0993['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x33fddd(console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x4a5851['name'] + ']\x20Task\x20' + (_0x3d238a + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x5ad264 != 'ver') {
                    var _0x56e081 = '' + _0x45be5c, _0x70a771 = await _0x1bffbc(_0x10224e[_0x3d238a], _0x4a5851, 'dev', !![], _0x56e081), _0x375727 = {};
                    _0x375727['errorDEV'] = { 'embeds': [_0x70a771] }, _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x375727['errorDEV']), await _0x309275(_0x2e30ca, _0x375727['errorDEV']);
                }
                _0x361279(console['log'](_0x2ae997() + '\x20[' + _0x4a5851['name'] + ']\x20Task\x20' + (_0x3d238a + 0x1) + ':\x20' + _0x45be5c));
            }
        };
        try {
            _0x5ad264 != 'ver' && console['log'](_0x2ae997() + '\x20[' + _0x4a5851['name'] + ']\x20Task\x20' + (_0x3d238a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xfeb1e3['data']['attributes']['email']), _0x1b3c90(_0xd392c9, callback);
        } catch (_0x2bf9d8) {
            console['log'](_0x2ae997() + '\x20Task\x20' + (_0x3d238a + 0x1) + ':\x20' + _0x2bf9d8);
        }
    });
}
;
async function _0x2dcd98(_0x2b0414, _0x2712f8, _0x691ebf) {
    var _0x877b53;
    _0x180b8a('' + _0x2712f8);
    var _0x16b0b2 = _0x691ebf[0x0]['split'](':');
    const _0x285959 = await _0x52eb11['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x16b0b2[0x0] + ':' + _0x16b0b2[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x2ae997() + '\x20[' + _0x2712f8 + ']\x20Getting\x20Session');
        const _0x2d38df = JSON['parse'](_0x44b12e['readFileSync']('sessions/log.json')), _0x4bdec3 = await _0x285959['newPage']();
        await _0x4bdec3['authenticate']({
            'username': '' + _0x16b0b2[0x2],
            'password': '' + _0x16b0b2[0x3]
        }), await _0x4bdec3['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x4bdec3, await _0x4bdec3['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x2ae997() + '\x20[' + _0x2712f8 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x4bdec3['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x2ae997() + '\x20[' + _0x2712f8 + ']\x20Successfully\x20logged\x20in'), await _0x599511(0x2710), _0x877b53 = await _0x4bdec3['cookies'](), _0x44b12e['writeFileSync']('sessions/log.json', '' + JSON['stringify'](_0x877b53));
        } catch (_0x48480c) {
            throw new Error('Login\x20session\x20expired\x20' + _0x48480c);
        }
        for (var _0x31126d = 0x0; _0x31126d < _0x2b0414['length']; _0x31126d++) {
            console['log'](_0x2ae997() + '\x20[' + _0x2712f8 + ']\x20Task\x20' + (_0x31126d + 0x1) + '\x20:\x20Starting\x20Verification'), _0x180b8a(_0x2712f8 + '\x20Task\x20' + (_0x31126d + 0x1) + '\x20/\x20' + _0x2b0414['length']);
            const _0x3f57cd = await _0x285959['newPage']();
            await _0x3f57cd['goto']('' + _0x2b0414[_0x31126d], { 'waitUntil': 'networkidle2' }), await _0x599511(0xbb8);
            try {
                const _0x32f538 = await _0x3f57cd['$']('#challenge-heading');
                _0x32f538 && (console['log'](_0x2ae997() + '\x20[' + _0x2712f8 + ']\x20Task\x20' + (_0x31126d + 0x1) + '\x20:\x20' + _0x3d6019['yellow']('2FA\x20Required')), await _0x3f57cd['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x599511(0x61a8), await _0x3f57cd['waitForSelector']('#payment-submit-btn'), await _0x3f57cd['$eval']('#payment-submit-btn', _0x55bfae => _0x55bfae['click']()), await _0x3f57cd['click']('#payment-submit-btn');
                try {
                    await _0x3f57cd['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x599511(0x5dc), console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x2712f8 + ']\x20Task\x20' + (_0x31126d + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x2b1046) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x2b1046['message']);
                } finally {
                    await _0x3f57cd['close'](), await _0x599511(0x4650);
                }
            } catch (_0x349042) {
                console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x2712f8 + ']\x20Task\x20' + (_0x31126d + 0x1) + '\x20:\x20' + _0x349042));
            }
        }
    } catch (_0x3d404f) {
        console['log'](_0x3d6019['red']('' + _0x3d404f));
    } finally {
        await _0x285959['close']();
    }
}
async function _0x4fc9c9(_0x5de582, _0x9ac045, _0x1b947a) {
    _0x52eb11['use'](_0x14af75()), _0x52eb11['use'](_0x315cd9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x30a907['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x81d594 = 0x0; _0x81d594 < _0x5de582['length']; _0x81d594++) {
        var _0x301912;
        await _0x53a5ee(_0x5de582, _0x81d594), _0x180b8a(_0x1b947a['name'] + '\x20Task\x20' + (_0x81d594 + 0x1) + '\x20/\x20' + _0x5de582['length'] + '\x20||\x20File:\x20' + _0x3e23a7 + '\x20Proxies:\x20' + _0x37e473);
        var _0x5a3d8f = await _0x1bffbc(_0x5de582[_0x81d594], _0x1b947a, 'acc', ![]);
        const _0x33e54d = { 'succesDEVMSG': { 'embeds': [_0x5a3d8f] } }, _0x17ab0d = 'https://www.bstn.com/eu_en/customer/account/';
        var _0x4644f3 = Math['round'](Math['random']() * (_0x9ac045['length'] - 0x1)), _0x5836db = _0x9ac045[_0x4644f3]['split'](':');
        const _0x171d43 = await _0x52eb11['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5836db[0x0] + ':' + _0x5836db[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--force-device-scale-factor=0.3'
            ]
        });
        try {
            const _0x5ce95f = await _0x171d43['newPage']();
            await _0x5ce95f['authenticate']({
                'username': '' + _0x5836db[0x2],
                'password': '' + _0x5836db[0x3]
            }), console['log'](_0x2ae997() + '\x20[' + _0x1b947a['name'] + ']\x20Task\x20' + (_0x81d594 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5ce95f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5ce95f['setRequestInterception'](!![]), _0x5ce95f['on']('request', _0x5d48d7 => {
                _0x5d48d7['resourceType']() === 'image' ? _0x5d48d7['abort']() : _0x5d48d7['continue']();
            }), await _0x5ce95f['goto']('' + _0x17ab0d), await _0x5ce95f['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x5ce95f['click']('button[class=\x22cf2Lf6\x22]'), await _0x5ce95f['waitForSelector']('a.action.create.primary.social-login'), console['log'](_0x2ae997() + '\x20[' + _0x1b947a['name'] + ']\x20Task\x20' + (_0x81d594 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x599511(0x7d0), await _0x5ce95f['click']('a.action.create.primary.social-login'), await _0x599511(0x7d0), await _0x5ce95f['click']('button.button.dashboard-actions-toolbar__item'), console['log'](_0x2ae997() + '\x20[' + _0x1b947a['name'] + ']\x20Task\x20' + (_0x81d594 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x599511(0x190), await _0x5ce95f['type']('#firstname', _0x5de582[_0x81d594]['FirstName'], { 'delay': 0xf0 }), await _0x599511(0x190), await _0x5ce95f['type']('#lastname', _0x5de582[_0x81d594]['LastName'], { 'delay': 0xe6 }), await _0x599511(0x190), await _0x5ce95f['type']('#bss_email_address', _0x5de582[_0x81d594]['Email'], { 'delay': 0x122 }), await _0x599511(0x190), await _0x5ce95f['type']('#password', _0x5de582[_0x81d594]['Password'], { 'delay': 0x1e0 }), console['log'](_0x2ae997() + '\x20[' + _0x1b947a['name'] + ']\x20Task\x20' + (_0x81d594 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x599511(0x2bc), await _0x5ce95f['click']('#bt-social-create'), await _0x5ce95f['click']('#bt-social-create'), await _0x599511(0x1388), await _0x5ce95f['waitForSelector']('div.mesg-success'), console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x1b947a['name'] + ']\x20Task\x20' + (_0x81d594 + 0x1) + '\x20:\x20Account\x20' + _0x5de582[_0x81d594]['Email'] + '\x20Generated')), _0x44b12e['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x5de582[_0x81d594]['Email'] + ',' + _0x5de582[_0x81d594]['Password']);
            try {
                _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x33e54d['succesDEVMSG']);
            } catch {
            }
            await _0x309275(_0x567e6c, _0x33e54d['succesDEVMSG']), console['log'](_0x3d6019['yellow'](_0x2ae997() + '\x20[' + _0x1b947a['name'] + ']\x20Task\x20' + (_0x81d594 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
        } catch (_0x1dcb60) {
            console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x1b947a['name'] + ']\x20Task\x20' + (_0x81d594 + 0x1) + '\x20:\x20' + _0x1dcb60)), _0x301912 = '' + _0x1dcb60;
            var _0x30752b = await _0x1bffbc(_0x5de582[_0x81d594], _0x1b947a, 'dev', !![], _0x301912);
            _0x33e54d['errorDEV'] = { 'embeds': [_0x30752b] }, _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x33e54d['errorDEV']), await _0x309275(_0x2e30ca, _0x33e54d['errorDEV']);
        } finally {
            _0x171d43['close'](), console['log'](_0x2ae997() + '\x20[' + _0x1b947a['name'] + ']\x20Waiting\x20for\x20' + _0x30a907['delay'] + '\x20ms'), await _0x599511(_0x30a907['delay']);
        }
    }
}
async function _0x50ecdd(_0x27182f, _0x3a74a1, _0x1b0e6d) {
    _0x52eb11['use'](_0x14af75());
    for (var _0x2db3ba = 0x0; _0x2db3ba < _0x27182f['length']; _0x2db3ba++) {
        var _0x428fc6 = Math['round'](Math['random']() * (_0x3a74a1['length'] - 0x1)), _0x1118cd = _0x3a74a1[_0x428fc6]['split'](':');
        const _0xad51eb = await _0x52eb11['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1118cd[0x0] + ':' + _0x1118cd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x14e759 = await _0xad51eb['newPage']();
            await _0x14e759['authenticate']({
                'username': '' + _0x1118cd[0x2],
                'password': '' + _0x1118cd[0x3]
            }), console['log'](_0x2ae997() + '\x20[' + _0x1b0e6d['name'] + ']\x20Task\x20' + (_0x2db3ba + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x14e759['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x14e759['setRequestInterception'](!![]), _0x14e759['on']('request', _0x2ae38d => {
                _0x2ae38d['resourceType']() === 'image' || _0x2ae38d['resourceType']() === 'font' || _0x2ae38d['resourceType']() === 'media' ? _0x2ae38d['abort']() : _0x2ae38d['continue']();
            }), console['log'](_0x2ae997() + '\x20[' + _0x1b0e6d['name'] + ']\x20Task\x20' + (_0x2db3ba + 0x1) + '\x20:\x20Getting\x20Session'), await _0x14e759['goto'](_0x27182f[_0x2db3ba]), console['log'](_0x2ae997() + '\x20[' + _0x1b0e6d['name'] + ']\x20Task\x20' + (_0x2db3ba + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x14e759['waitForTimeout'](0xbb8);
            try {
                await _0x14e759['waitForSelector']('.dashboard-main_title'), console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x1b0e6d['name'] + ']\x20Task\x20' + (_0x2db3ba + 0x1) + '\x20:\x20Verification\x20Successful'));
                var _0x553eea = await _0x1bffbc(null, _0x1b0e6d, 'ver', ![]);
                const _0x525254 = { 'succesDEVMSG': { 'embeds': [_0x553eea] } };
                await _0x309275(_0x2c49af, _0x525254['succesDEVMSG']);
            } catch (_0x593cb1) {
                throw new Error(_0x593cb1);
            }
        } catch (_0x24e55a) {
            console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x1b0e6d['name'] + ']\x20Task\x20' + (_0x2db3ba + 0x1) + '\x20:\x20' + _0x24e55a));
            var _0x5ce27f = _0x24e55a, _0x26adf8 = await _0x1bffbc(null, _0x1b0e6d, 'ver', !![], _0x5ce27f);
            const _0x485207 = { 'errorDEVMSG': { 'embeds': [_0x26adf8] } };
            _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0x485207['errorDEVMSG']), await _0x309275(_0x2e30ca, _0x485207['errorDEVMSG']);
        } finally {
            _0xad51eb['close'](), console['log'](_0x2ae997() + '\x20[' + _0x1b0e6d['name'] + ']\x20Waiting\x20for\x20' + _0x30a907['delay'] + '\x20ms'), await _0x599511(_0x30a907['delay']);
        }
    }
}
async function _0x3ade97(_0x3ef04d, _0x1501dd, _0x33595f) {
    _0x52eb11['use'](_0x14af75()), _0x52eb11['use'](_0x315cd9({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x30a907['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x309952 = 0x0; _0x309952 < _0x3ef04d['length']; _0x309952++) {
        var _0x910004;
        await _0x53a5ee(_0x3ef04d, _0x309952), _0x180b8a(_0x33595f['name'] + '\x20Task\x20' + (_0x309952 + 0x1) + '\x20/\x20' + _0x3ef04d['length'] + '\x20||\x20File:\x20' + _0x3e23a7 + '\x20Proxies:\x20' + _0x37e473);
        var _0x5f2721 = Math['round'](Math['random']() * (_0x1501dd['length'] - 0x1)), _0x5f23ba = _0x1501dd[_0x5f2721]['split'](':');
        const _0x1d920b = await _0x52eb11['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5f23ba[0x0] + ':' + _0x5f23ba[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x47cb73 = await _0x1d920b['newPage'](), _0x200e48 = await _0x47cb73['target']()['createCDPSession'](), { windowId: _0x241d9c } = await _0x200e48['send']('Browser.getWindowForTarget');
            await _0x47cb73['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            });
            var _0x29aa8f = [{
                'name': 'cf_clearance',
                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                'domain': '.bstn.com',
                'path': '/',
                'expires': 1707818183.331533,
                'httpOnly': !![],
                'secure': !![]
            }];
            await _0x47cb73['setCookie'](_0x29aa8f[0x0]), await _0x47cb73['authenticate']({
                'username': '' + _0x5f23ba[0x2],
                'password': '' + _0x5f23ba[0x3]
            }), console['log'](_0x2ae997() + '\x20[' + _0x33595f['name'] + ']\x20Task\x20' + (_0x309952 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x47cb73['goto']('' + _0x3ef04d[_0x309952]['Url']), console['log'](_0x2ae997() + '\x20[' + _0x33595f['name'] + ']\x20Task\x20' + (_0x309952 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x47cb73['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x200e48['send']('Browser.setWindowBounds', {
                'windowId': _0x241d9c,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x599511(0x1388), await _0x47cb73['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x47cb73['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x599511(0x1f4), console['log'](_0x2ae997() + '\x20[' + _0x33595f['name'] + ']\x20Task\x20' + (_0x309952 + 0x1) + '\x20:\x20Logging\x20in'), await _0x47cb73['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x11e119 => _0x11e119['click']()), await _0x47cb73['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x47cb73['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x599511(0x7d0), await _0x47cb73['waitForSelector']('#email-login'), await _0x47cb73['type']('#email-login', '' + _0x3ef04d[_0x309952]['Email']), await _0x599511(0x1f4), await _0x47cb73['waitForSelector']('#password'), await _0x47cb73['type']('#password', '' + _0x3ef04d[_0x309952]['Password']), await _0x599511(0x1f4);
            try {
                await _0x47cb73['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x316c44 => _0x316c44['click']()), await _0x47cb73['click']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]');
            } catch {
            }
            try {
                await _0x47cb73['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
            } catch (_0x48c94d) {
            }
            await _0x599511(0x3e8);
            const _0x258b14 = await _0x47cb73['$']('.enteredDraw_container__2KmQ_');
            if (_0x258b14)
                throw new Error('Duplicate\x20Entry');
            console['log'](_0x2ae997() + '\x20[' + _0x33595f['name'] + ']\x20Task\x20' + (_0x309952 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3ef04d[_0x309952]['Size']);
            if (_0x3ef04d[_0x309952]['Size'] != 'RANDOM') {
                var _0x1b6570 = _0x3ef04d[_0x309952]['Size']['replace']('.', ',');
                const _0x546df3 = await _0x47cb73['$x']('//div[contains(text(),\x20' + _0x1b6570 + ')]');
                await _0x546df3[0x0]['click']();
            } else {
                const _0xfbbeb1 = await _0x47cb73['$$']('div.swatchTile_tile__IRH9Q');
                var _0x5a3c49 = Math['round'](Math['random']() * (_0xfbbeb1['length'] - 0x1));
                await _0xfbbeb1[_0x5a3c49]['click']();
            }
            await _0x599511(0x1f4);
            const _0x4cffdc = await _0x47cb73['$']('.addressList_addressItem__LE2PB');
            if (_0x4cffdc) {
            } else
                console['log'](_0x2ae997() + '\x20[' + _0x33595f['name'] + ']\x20Task\x20' + (_0x309952 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x47cb73['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x599511(0x5dc), await _0x47cb73['waitForSelector']('#firstname'), await _0x47cb73['type']('#firstname', '' + _0x3ef04d[_0x309952]['FirstName']), await _0x599511(0x1f4), await _0x47cb73['waitForSelector']('#firstname'), await _0x47cb73['type']('#lastname', '' + _0x3ef04d[_0x309952]['LastName']), await _0x599511(0x1f4), await _0x47cb73['waitForSelector']('#firstname'), await _0x47cb73['type']('#street', '' + _0x3ef04d[_0x309952]['Address1']), await _0x599511(0x1f4), await _0x47cb73['waitForSelector']('#firstname'), await _0x47cb73['type']('#houseNumber', _0x3ef04d[_0x309952]['HouseNumber'] + '\x20' + _0x3ef04d[_0x309952]['Address2']), await _0x599511(0x1f4), await _0x47cb73['waitForSelector']('#firstname'), await _0x47cb73['select']('#country_code', '' + _0x3ef04d[_0x309952]['Country']), await _0x599511(0x1f4), await _0x47cb73['type']('#postcode', '' + _0x3ef04d[_0x309952]['Zip']), await _0x599511(0x1f4), await _0x47cb73['type']('#city', '' + _0x3ef04d[_0x309952]['City']), await _0x599511(0x1f4), await _0x47cb73['type']('#telephone', '' + _0x3ef04d[_0x309952]['Phone']), await _0x599511(0x1f4), await _0x47cb73['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
            await _0x599511(0x9c4);
            try {
                await _0x47cb73['type']('#instagram_name', '' + _0x3ef04d[_0x309952]['Follower']), await _0x47cb73['click']('.note_groupBtn__WLDwH\x20>\x20button');
            } catch {
            }
            await _0x599511(0x5dc), await _0x47cb73['click']('.checkBox_boxHolder__wLGVe'), await _0x599511(0x1f4), await _0x47cb73['click']('.termConditions_TC__hll9k\x20>\x20button'), await _0x599511(0x1388), await _0x47cb73['waitForSelector']('.success_msg__2HjJY'), console['log'](_0x3d6019['green'](_0x2ae997() + '\x20[' + _0x33595f['name'] + ']\x20Task\x20' + (_0x309952 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            var _0x1a60de = await _0x1bffbc(_0x3ef04d[_0x309952], _0x33595f, 'dev', ![]), _0x44f75b = await _0x1bffbc(_0x3ef04d[_0x309952], _0x33595f, 'pub', ![]);
            const _0xcef450 = {
                'succesDEVMSG': { 'embeds': [_0x1a60de] },
                'succesPUBMSG': { 'embeds': [_0x44f75b] }
            };
            try {
                _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0xcef450['succesDEVMSG']), await _0x599511(0xc8), await _0x309275(_0x14ae8c, _0xcef450['succesDEVMSG']), await _0x599511(0xc8), await _0x309275(_0x25e6a4, _0xcef450['succesPUBMSG']);
            } catch (_0x4d42f5) {
                console['log'](_0x3d6019['yellow'](_0x2ae997() + '\x20[' + _0x33595f['name'] + ']\x20Task\x20' + (_0x309952 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4d42f5));
            }
        } catch (_0x6d9207) {
            console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x33595f['name'] + ']\x20Task\x20' + (_0x309952 + 0x1) + '\x20:\x20' + _0x6d9207)), _0x910004 = '' + _0x6d9207;
            var _0x1844b8 = await _0x1bffbc(_0x3ef04d[_0x309952], _0x33595f, 'dev', !![], _0x910004), _0x1a60de = await _0x1bffbc(_0x3ef04d[_0x309952], _0x33595f, 'dev', ![]), _0x44f75b = await _0x1bffbc(_0x3ef04d[_0x309952], _0x33595f, 'pub', ![]);
            const _0xa862de = {
                'succesDEVMSG': { 'embeds': [_0x1a60de] },
                'succesPUBMSG': { 'embeds': [_0x44f75b] }
            };
            _0xa862de['errorDEV'] = { 'embeds': [_0x1844b8] }, _0x30a907['webhook'] != undefined && _0x30a907['webhook'] != '' && await _0x309275(_0x30a907['webhook'], _0xa862de['errorDEV']), await _0x309275(_0x2e30ca, _0xa862de['errorDEV']);
        } finally {
            _0x1d920b['close'](), console['log'](_0x2ae997() + '\x20[' + _0x33595f['name'] + ']\x20Waiting\x20for\x20' + _0x30a907['delay'] + '\x20ms'), await _0x599511(_0x30a907['delay']);
        }
    }
}
async function _0x2ede28() {
    await _0x4350c5(), console['clear']();
    if (_0x11eacc != 'devkey') {
        let _0x4006c6 = await _0x33e0b2['autoUpdate']();
        if (_0x4006c6 === 'yes')
            return _0x4f932f('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x3a0802 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x599511(0x2710);
        ;
    }
    await _0x1ef279(_0x3a0802);
    if (_0xcee717 === ![])
        return console['log']('Closing\x20Browser'), await _0x599511(0xbb8);
    else
        try {
            var _0x10e415 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x21dc83
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x11eacc
                    }
                ]
            }];
            const _0x915703 = { 'embeds': _0x10e415 };
            var _0x4a5bef = await _0x1bffbc(null, null, 'open', ![]);
            const _0xe25019 = { 'openDEVMSG': { 'embeds': [_0x4a5bef] } };
            await _0x309275(_0x31d724, _0xe25019['openDEVMSG']);
            async function _0x599156() {
                _0x180b8a('JRaffles\x20' + _0x11eacc), console['clear'](), console['log']('Welcome\x20to\x20' + _0x3d6019['cyan']('JRaffles();') + '\x20' + _0x11eacc), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x47134d = 0x0; _0x47134d < _0x3db39b['length'] - 0x3; _0x47134d++) {
                    if (_0x3db39b[_0x47134d]['name'] === 'Reload\x20Settings' || _0x3db39b[_0x47134d]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x47134d + ')\x20[' + _0x3db39b[_0x47134d]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x3db39b['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x3db39b['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x3db39b['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0xabd63a();
                if (taskModule > _0x3db39b['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x599511(0x3e8), _0x599156();
                if (_0x3db39b[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x357f44(_0x3db39b[taskModule]['modules']);
                    var _0x1e0bcf = _0x3db39b[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x120019 = await _0x20049c(), _0x30f858 = await _0x22f965();
                        await _0x3ade97(_0x30f858, _0x120019, _0x1e0bcf);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x120019 = await _0x20049c(), _0x30f858 = await _0x22f965();
                            await _0x4fc9c9(_0x30f858, _0x120019, _0x1e0bcf);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x120019 = await _0x20049c(), _0x5ef9c3 = await _0x13f02d(), _0x418486 = _0x5ef9c3['split'](';');
                                await _0x50ecdd(_0x418486, _0x120019, _0x1e0bcf);
                            }
                        }
                    }
                }
                if (_0x3db39b[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x357f44(_0x3db39b[taskModule]['modules']);
                    var _0x1e0bcf = _0x3db39b[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x120019 = await _0x20049c(), _0x4accf8 = await _0x22f965();
                    if (_0x4accf8[0x0]['Url'] == '' || _0x4accf8[0x0]['Url'] == undefined) {
                        await _0x267671(_0x120019);
                        var _0x545bae = await _0x543efc();
                        return await afewFunction('' + _0x1058e3[_0x545bae], 'nor', _0x1e0bcf, _0x4accf8, _0x120019), _0x599156();
                    }
                    return await afewFunction(_0x4accf8[0x0]['Url'], 'nor', _0x1e0bcf, _0x4accf8, _0x120019), _0x599156();
                } else {
                    if (_0x3db39b[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x357f44(_0x3db39b[taskModule]['modules']);
                        var _0x1e0bcf = _0x3db39b[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x120019 = await _0x20049c(), _0x32f074 = await _0x22f965();
                            console['log']('Starting\x20' + _0x32f074['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x4c622e = 0x0; _0x4c622e < _0x32f074['length']; _0x4c622e++) {
                                console['log'](_0x2ae997() + '\x20[' + _0x1e0bcf['name'] + ']\x20Task\x20' + (_0x4c622e + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x207fc9(_0x4c622e, 'nor', _0x1e0bcf, _0x32f074, _0x120019), console['log'](_0x2ae997() + '\x20[' + _0x1e0bcf['name'] + ']\x20Sleeping\x20for\x20' + _0x30a907['MahaDelay'] + '\x20ms'), await _0x599511(_0x30a907['MahaDelay']);
                                } catch (_0x264437) {
                                    console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x1e0bcf['name'] + ']\x20Task\x20' + (_0x4c622e + 0x1) + ':\x20Error\x20' + _0x264437));
                                }
                            }
                            ;
                            return _0x599156();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x120019 = await _0x20049c();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x5ef9c3 = await _0x13f02d(), _0x418486 = _0x5ef9c3['split'](';'), console['log'](_0x418486['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x4c622e = 0x0; _0x4c622e < _0x418486['length']; _0x4c622e++) {
                                    _0x1e0bcf['url'] = _0x418486[_0x4c622e], console['log'](_0x2ae997() + '\x20[' + _0x1e0bcf['name'] + ']\x20Task\x20' + (_0x4c622e + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x207fc9(_0x4c622e, 'ver', _0x1e0bcf, _0x32f074, _0x120019), console['log'](_0x2ae997() + '\x20[' + _0x1e0bcf['name'] + ']\x20Sleeping\x20for\x20' + _0x30a907['verificationDelay'] + '\x20ms'), await _0x599511(_0x30a907['verificationDelay']);
                                    } catch (_0x1b6b28) {
                                        console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x1e0bcf['name'] + ']\x20Task\x20' + (_0x4c622e + 0x1) + ':\x20Error\x20' + _0x1b6b28));
                                    }
                                }
                                ;
                                return _0x599156();
                            }
                        }
                    } else {
                        if (_0x3db39b[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x357f44(_0x3db39b[taskModule]['modules']);
                            var _0x1e0bcf = _0x3db39b[taskModule]['modules'][taskFunction], _0x120019 = await _0x20049c(), _0x2c7fe7 = await _0x22f965();
                            return await _0x1b57e9(_0x2c7fe7, _0x120019, _0x1e0bcf), await _0x599511(0x1388), _0x599156();
                        } else {
                            if (_0x3db39b[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x357f44(_0x3db39b[taskModule]['modules']);
                                var _0x1e0bcf = _0x3db39b[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x120019 = await _0x20049c(), _0x704ea7 = await _0x22f965();
                                    console['log']('Starting\x20' + _0x3d6019['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x4c622e = 0x0; _0x4c622e < _0x704ea7['length']; _0x4c622e++) {
                                        console['log'](_0x2ae997() + '\x20[' + _0x1e0bcf['name'] + ']\x20Task\x20' + (_0x4c622e + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x2f8e6f(_0x4c622e, 'nor', _0x1e0bcf, _0x704ea7, _0x120019);
                                        } catch (_0x93dce5) {
                                            console['log'](_0x3d6019['red'](_0x2ae997() + '\x20[' + _0x1e0bcf['name'] + ']\x20Task\x20' + (_0x4c622e + 0x1) + ':\x20Task\x20failed\x20' + _0x93dce5));
                                        }
                                        console['log'](_0x2ae997() + '\x20[' + _0x1e0bcf['name'] + ']\x20Sleeping\x20for\x20' + _0x30a907['delay'] + '\x20ms'), await _0x599511(_0x30a907['delay']);
                                    }
                                    return _0x599156();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x120019 = await _0x20049c();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x5ef9c3 = await _0x13f02d(), _0x418486 = _0x5ef9c3['split'](';'), console['log'](_0x418486['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x4c622e = 0x0; _0x4c622e < _0x418486['length']; _0x4c622e++) {
                                            try {
                                                _0x1e0bcf['url'] = _0x418486[_0x4c622e], console['log'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Task\x20' + (_0x4c622e + 0x1) + ':\x20Getting\x20Session'), await _0x2f8e6f(_0x4c622e, 'ver', _0x1e0bcf, null, _0x120019), console['log'](_0x2ae997() + '\x20[' + _0x3db39b[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x30a907['verificationDelay'] + '\x20ms'), await _0x599511(_0x30a907['verificationDelay']);
                                            } catch (_0x1ce4a8) {
                                                console['log'](_0x1ce4a8), await _0x599511(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x599156();
                                    }
                                }
                                ;
                            } else {
                                if (_0x3db39b[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x357f44(_0x3db39b[taskModule]['modules']);
                                    var _0x1e0bcf = _0x3db39b[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x3574b3('https://bouncewear.com/nl/account/register', _0x1e0bcf);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x3db39b[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x357f44(_0x3db39b[taskModule]['modules']);
                                        var _0x1e0bcf = _0x3db39b[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x120019 = await _0x20049c(), _0x152197 = await _0x22f965();
                                            return await _0x4fbd20('https://patta.nl/account/register', _0x1e0bcf, _0x152197, _0x120019), _0x599156();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x120019 = await _0x20049c(), _0x152197 = await _0x22f965();
                                                return await _0x2ccde9('', _0x1e0bcf, _0x152197, _0x120019), _0x599156();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x3db39b[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x357f44(_0x3db39b[taskModule]['modules']);
                                            var _0x1e0bcf = _0x3db39b[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x120019 = await _0x20049c(), _0x503cf6 = await _0x22f965();
                                                return await _0x1e1054('https://slamjam.nl/account/register', _0x1e0bcf, _0x503cf6, _0x120019), _0x599156();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x120019 = await _0x20049c(), _0x503cf6 = await _0x22f965();
                                                    return await _0x3705fa('', _0x1e0bcf, _0x503cf6, _0x120019), _0x599156();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x3db39b[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x357f44(_0x3db39b[taskModule]['modules']);
                                                var _0x1e0bcf = _0x3db39b[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x120019 = await _0x20049c(), _0x2da56e = await _0x22f965();
                                                    return await _0xc039a5('https://www.kickz.com/nl/login/', _0x1e0bcf, _0x2da56e, _0x120019), _0x599156();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x120019 = await _0x20049c(), _0x2da56e = await _0x22f965();
                                                        return await _0x193f7f(_0x1e0bcf, _0x2da56e, _0x120019), _0x599156();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x3db39b[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x357f44(_0x3db39b[taskModule]['modules']);
                                                    var _0x1e0bcf = _0x3db39b[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x120019 = await _0x20049c(), _0x36d0f7 = await _0x22f965();
                                                        return await _0x3349d1(_0x1e0bcf, _0x36d0f7, _0x120019), _0x599156();
                                                    }
                                                } else {
                                                    if (_0x3db39b[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x599511(0x3e8), _0x599156();
                                                    else {
                                                        if (_0x3db39b[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x4f8c64 = _0x3db39b[taskModule]['name'], _0x120019 = await _0x20049c();
                                                            const _0x3736ab = await _0x13f02d();
                                                            var _0x418486 = _0x3736ab['split'](';');
                                                            await _0x2dcd98(_0x418486, _0x4f8c64, _0x120019);
                                                        } else {
                                                            if (_0x3db39b[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x5c0481 = 0x0;
                                                                for (const _0x153375 in _0x30a907) {
                                                                    console['log']('(' + _0x5c0481 + ')\x20' + _0x153375 + '\x20:\x20' + _0x30a907[_0x153375]), _0x5c0481++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x5c0481 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x465800 = await _0x118655();
                                                                if (_0x465800 == _0x5c0481)
                                                                    return _0x599156();
                                                                console['clear'];
                                                                var _0x511d60 = 0x0;
                                                                for (var _0x43298a in _0x30a907) {
                                                                    if (_0x465800 == _0x511d60) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x43298a + '\x20:'), _0x30a907[_0x43298a] = await _0x46f69f(), _0x44b12e['writeFileSync']('../settings.json', JSON['stringify'](_0x30a907));
                                                                        break;
                                                                    } else
                                                                        _0x511d60++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x599511(0xbb8), _0x599156();
                                                            } else {
                                                                if (_0x3db39b[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x4350c5(), _0x599156();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x3db39b[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x258446 = await _0x37924e();
                                                                        _0x258446 == 'ModuleVoorDeBoys' ? (await _0x267671(), await _0x543efc(), await afewFunction(_0x1058e3[_0x545bae], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x599511(0xbb8));
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
            await _0x599156();
        } catch (_0x25ce9e) {
            return console['log'](_0x25ce9e), await _0x599511(0x3a98);
        }
}
;
_0x180b8a('JRaffles\x20' + _0x11eacc), _0x4350c5();
try {
    _0x2ede28();
} catch (_0x4d2198) {
    var _0x5ca092 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x21dc83
            },
            {
                'name': 'Version',
                'value': '' + _0x11eacc
            },
            {
                'name': 'Error',
                'value': '' + _0x4d2198
            }
        ]
    }];
    const _0x59dc4a = { 'embeds': _0x5ca092 };
    _0x309275(_0x2e30ca, _0x59dc4a);
}