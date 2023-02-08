const { EmbedBuilder: _0x4f724f } = require('discord.js');
var _0x15c0af = require('exe');
const { execFile: _0x2bfbcc } = require('child_process'), _0x4a6475 = require('puppeteer-extra'), _0x3efdc3 = require('puppeteer-extra-plugin-recaptcha'), _0x4c388a = require('puppeteer-extra-plugin-stealth'), _0x374717 = require('chalk'), _0x4429cd = require('node-bash-title'), _0x1d991e = require('fs'), _0x4f0c0d = require('axios'), _0x18009a = require('papaparse');
var _0x4b10fb = require('random-name');
const _0x17670e = require('request');
var _0x1bb0e8 = require('prompt');
const _0x3d3fd7 = _0x17670e['jar']();
var _0x2a6b6a = {};
const _0x557afd = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x1211ee = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x2fbaab = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x524772 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x41fff6 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x34b6f4 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x462662 = 'https://discord.com/api/webhooks/', _0x4e13a7 = '' + _0x462662 + _0x2fbaab, _0x18c62e = '' + _0x462662 + _0x524772, _0x3fc099 = '' + _0x462662 + _0x557afd, _0x4fe737 = '' + _0x462662 + _0x1211ee, _0x54c664 = '' + _0x462662 + _0x41fff6, _0x59c0b4 = '' + _0x462662 + _0x34b6f4;
const _0x4c3972 = JSON['parse'](_0x1d991e['readFileSync']('../package.json', 'utf-8')), _0x1b89b3 = _0x4c3972['version'];
var _0xb07819, _0x2e7035, _0xdd82af, _0x39b1e7, _0x5b3b41, _0x99159, _0xb0edae, _0x2adadb;
const _0x56b0a7 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x548d64 = ![];
const _0x25d18f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x4589ce = '0123456789';
var _0x40a2d0 = _0x25d18f['split']('');
const _0x28c21b = require('auto-git-update'), { PageEmittedEvents: _0x43f0fa } = require('puppeteer'), { getRandomValues: _0x4ad92f } = require('crypto'), { resolve: _0x168917 } = require('path'), { Console: _0x5482e7 } = require('console'), _0x264526 = {
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
}, _0x2cbfb5 = new _0x28c21b(_0x264526);
async function _0x424a42() {
    _0x5b3b41 = _0x1d991e['readdirSync']('../proxies'), _0x39b1e7 = _0x1d991e['readdirSync']('../tasks'), _0x2a6b6a = JSON['parse'](_0x1d991e['readFileSync']('../settings.json', 'utf-8')), !_0x2a6b6a['delay'] && (_0x2a6b6a['delay'] = 0x2710, _0x1d991e['writeFileSync']('../settings.json', JSON['stringify'](_0x2a6b6a))), !_0x2a6b6a['captchaKey'] && (_0x2a6b6a['captchaKey'] = '', _0x1d991e['writeFileSync']('../settings.json', JSON['stringify'](_0x2a6b6a))), !_0x2a6b6a['useRandomProxy'] && (_0x2a6b6a['useRandomProxy'] = !![], _0x1d991e['writeFileSync']('../settings.json', JSON['stringify'](_0x2a6b6a))), !_0x2a6b6a['webhook'] && (_0x2a6b6a['webhook'] = '', _0x1d991e['writeFileSync']('../settings.json', JSON['stringify'](_0x2a6b6a))), _0x2a6b6a['MahaDelay'] = _0x2a6b6a['delay'], _0x462662 = _0x2a6b6a['webhook'], _0x99159 = _0x2a6b6a['licenseKey'];
}
let _0x3cf1f4, _0x40b6da = [], _0x1b5e48;
const _0x337c83 = _0xfc3742 => new Promise(_0x74b210 => setTimeout(_0x74b210, _0xfc3742));
function _0x5ccfa7(_0x3ffc3a, _0x5b7823) {
    return Math['floor'](Math['random']() * (_0x5b7823 - _0x3ffc3a + 0x1) + _0x3ffc3a);
}
async function _0x266d9a(_0x121502) {
    return _0x4f0c0d['get']('https://api.hyper.co/v4/licenses/' + _0x121502, { 'headers': { 'Authorization': 'Bearer\x20' + _0x56b0a7 } })['then'](_0x2fd4db => _0x2fd4db['data'])['catch'](() => null);
}
;
async function _0x500d55(_0x590cd7) {
    console['clear']();
    if (_0x590cd7 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x33ca1d = await _0x1bb0e8['get']('License');
        if (_0x33ca1d['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x337c83(0xbb8), _0x500d55(_0x590cd7);
        _0x590cd7 = _0x33ca1d['License'], _0x2a6b6a['licenseKey'] = _0x590cd7, _0x99159 = _0x590cd7, _0x1d991e['writeFileSync']('../settings.json', JSON['stringify'](_0x2a6b6a));
    }
    console['log']('Checking\x20license\x20' + _0x99159 + '...'), await _0x337c83(0x320);
    const _0x3f2070 = await _0x266d9a(_0x590cd7);
    _0xb0edae = JSON['stringify'](_0x3f2070['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x2adadb = JSON['stringify'](_0x3f2070['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x3f2070)
        return console['log']('License\x20not\x20found');
    if (!_0x3f2070['user'])
        return console['log']('License\x20not\x20bound');
    return _0x3f2070['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x548d64 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x548d64 = ![]);
}
async function _0xc592e1() {
    var _0x26fc64 = await _0x1bb0e8['get']('Module');
    return console['clear'](), _0x26fc64['Module'];
}
;
async function _0x3e88fa() {
    var _0x36c0a1 = await _0x1bb0e8['get']('Setting');
    return console['clear'](), _0x36c0a1['Setting'];
}
async function _0x4861ec() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x4f9821 = 0x0; _0x4f9821 < _0x39b1e7['length']; _0x4f9821++) {
        console['log']('\x20(' + _0x4f9821 + ')\x20' + _0x39b1e7[_0x4f9821]);
    }
    console['log']('');
    var _0x1ddccf = await _0x1bb0e8['get']('Task');
    if (_0x1ddccf['Task'] > _0x39b1e7['length'] - 0x1 || isNaN(_0x1ddccf['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x337c83(0x3e8), _0x4861ec();
    var _0x18ec0e = _0x1d991e['readFileSync']('../tasks/' + _0x39b1e7[_0x1ddccf['Task']], 'utf-8');
    return _0xdd82af = _0x18009a['parse'](_0x18ec0e, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x374717['blue'](_0x39b1e7[_0x1ddccf['Task']])), _0xb07819 = _0x39b1e7[_0x1ddccf['Task']], _0xdd82af;
}
async function _0x1a9245() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x317aec = 0x0; _0x317aec < _0x5b3b41['length']; _0x317aec++) {
        console['log']('\x20(' + _0x317aec + ')\x20' + _0x5b3b41[_0x317aec]);
    }
    console['log']('');
    var _0x3ed801 = await _0x1bb0e8['get']('Proxies');
    if (_0x3ed801['Proxies'] > _0x5b3b41['length'] - 0x1 || isNaN(_0x3ed801['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x337c83(0x3e8), _0x1a9245();
    var _0x22fd97 = _0x1d991e['readFileSync']('../proxies/' + _0x5b3b41[_0x3ed801['Proxies']], 'utf-8')['split']('\x0a');
    let _0x39dd65 = _0x22fd97['map']((_0x2becfd, _0x2bcf76) => {
        sanatizeProxy = _0x2becfd['replace']('\x0d', '');
        if (_0x22fd97[_0x2bcf76 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2e7035 = _0x5b3b41[_0x3ed801['Proxies']], console['clear'](), _0x39dd65;
}
async function _0x588bb4() {
    var _0x2383dd = await _0x1bb0e8['get']('Value');
    return console['clear'](), _0x2383dd['Value'];
}
async function _0x48f874(_0x4ace79) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x15ca65 = 0x0; _0x15ca65 < _0x4ace79['length']; _0x15ca65++) {
        console['log']('\x20(' + _0x15ca65 + ')\x20[' + _0x4ace79[_0x15ca65]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x1a3039 = await _0x1bb0e8['get']('Module');
    return _0x1a3039['Module'];
}
async function _0x224568() {
    var _0x534e0e = await _0x1bb0e8['get']('Password');
    return console['clear'](), _0x534e0e['Password'];
}
;
async function _0x4adb4a() {
    var _0x1ebb98 = await _0x1bb0e8['get']('Links');
    return _0x1ebb98['Links'];
}
;
async function _0x4aefa4() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x53c986 = 0x0; _0x53c986 < _0x40b6da['length']; _0x53c986++) {
        console['log']('\x20(' + _0x53c986 + ')\x20' + _0x40b6da[_0x53c986]);
    }
    ;
    console['log']();
    let _0x588f61 = await _0x1bb0e8['get']('Product');
    return console['clear'](), _0x588f61['Product'];
}
;
function _0x27dcd5() {
    var _0x229bf1 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x229bf1;
}
;
const _0x5995b0 = [
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
async function _0x38601b(_0x150b2d, _0x54e711) {
    let _0x35e117 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x1b89b3 != 'devkey') {
        await _0x4f0c0d['post'](_0x150b2d, _0x54e711, _0x35e117);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x17584c(_0xa3423f, _0x1340f2, _0x131bbc, _0x3e8516, _0x44c124) {
    if (!_0x3e8516 && _0x131bbc == 'dev') {
        var _0x163ddd = new _0x4f724f()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x1340f2['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x1340f2['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0xa3423f['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x2a6b6a['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0xb0edae,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0xa3423f['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x1b89b3,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x163ddd['data'];
    } else {
        if (_0x3e8516 && _0x131bbc == 'dev') {
            var _0x163ddd = new _0x4f724f()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x1340f2['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0xb0edae,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x1340f2['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0xa3423f['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x2a6b6a['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x44c124,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0xa3423f['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x1b89b3,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x163ddd['data'];
        } else {
            if (_0x131bbc == 'pub') {
                var _0x163ddd = new _0x4f724f()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x1340f2['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x1340f2['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0xa3423f['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x2a6b6a['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0xa3423f['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x1b89b3,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x163ddd['data'];
            } else {
                if (_0x131bbc == 'acc') {
                    var _0x163ddd = new _0x4f724f()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x1340f2['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0xb0edae,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x1340f2['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x2a6b6a['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x1b89b3,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x163ddd['data'];
                } else {
                    if (_0x131bbc == 'open') {
                        var _0x163ddd = new _0x4f724f()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x2adadb)['addFields']({
                            'name': 'User',
                            'value': '' + _0xb0edae,
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x1b89b3,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x163ddd['data'];
                    } else {
                        if (_0x131bbc == 'ver') {
                            var _0x163ddd = new _0x4f724f()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20verification')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x1340f2['logo'])['addFields']({
                                'name': 'User',
                                'value': '' + _0xb0edae,
                                'inline': !![]
                            }, {
                                'name': 'Store',
                                'value': '' + _0x1340f2['store'],
                                'inline': !![]
                            }, {
                                'name': 'Delay',
                                'value': '' + _0x2a6b6a['delay'],
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x1b89b3,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x163ddd['data'];
                        }
                    }
                }
            }
        }
    }
}
async function _0x223f18(_0x1afc53, _0x2c4ebb) {
    var _0x3310d2 = _0x1afc53[_0x2c4ebb]['Address1']['split'](''), _0xf4c033 = _0x1afc53[_0x2c4ebb]['Address2']['split'](''), _0x1e058b = _0x1afc53[_0x2c4ebb]['Email']['split']('@');
    for (var _0x2a899c = 0x0; _0x2a899c < _0x3310d2['length']; _0x2a899c++) {
        if (_0x3310d2[_0x2a899c] == 'X') {
            var _0x2ba0c9 = Math['round'](Math['random']() * (_0x25d18f['length'] - 0x1));
            _0x3310d2[_0x2a899c] = _0x40a2d0[_0x2ba0c9];
        }
    }
    ;
    for (var _0x2a899c = 0x0; _0x2a899c < _0xf4c033['length']; _0x2a899c++) {
        if (_0xf4c033[_0x2a899c] == 'X') {
            var _0x2ba0c9 = Math['round'](Math['random']() * (_0x25d18f['length'] - 0x1));
            _0xf4c033[_0x2a899c] = _0x40a2d0[_0x2ba0c9];
        }
    }
    ;
    _0x1afc53[_0x2c4ebb]['FirstName'] == 'RANDOM' && (_0x1afc53[_0x2c4ebb]['FirstName'] = _0x4b10fb['first']());
    _0x1afc53[_0x2c4ebb]['LastName'] == 'RANDOM' && (_0x1afc53[_0x2c4ebb]['LastName'] = _0x4b10fb['last']());
    _0x1e058b[0x0] == 'RANDOM' ? _0x1e058b[0x0] = '' + _0x4b10fb['first']() + _0x4b10fb['last']() + '@' : _0x1e058b[0x0] = _0x1e058b[0x0] + '@';
    _0x1afc53[_0x2c4ebb]['Email'] = _0x1e058b['join'](''), _0x1afc53[_0x2c4ebb]['Address1'] = _0x3310d2['join'](''), _0x1afc53[_0x2c4ebb]['Address2'] = _0xf4c033['join']('');
    _0x1afc53[_0x2c4ebb]['Phone'] == 'RANDOM' && (_0x1afc53[_0x2c4ebb]['Phone'] = '0' + _0x5ccfa7(0x5f5e100, 0x3b9ac9ff));
    if (_0x1afc53[_0x2c4ebb]['Follower'] == 'RANDOM') {
        var _0x38a6b1 = _0x5ccfa7(0x1, 0x270f);
        _0x1afc53[_0x2c4ebb]['Follower'] = '' + _0x4b10fb['first']() + _0x4b10fb['last']() + _0x38a6b1 + '\x20';
    }
    _0x1afc53[_0x2c4ebb]['HouseNumber'] == 'RANDOM' && (_0x1afc53[_0x2c4ebb]['HouseNumber'] = _0x5ccfa7(0x1, 0xc8));
    if (_0x1afc53[_0x2c4ebb]['Address1'] == 'RANDOM') {
        var _0x19057c = Math['round'](Math['random']() * (_0x25d18f['length'] - 0x1)), _0x3252a2 = _0x40a2d0[_0x19057c];
        _0x1afc53[_0x2c4ebb]['Address1'] = _0x4b10fb['last']() + 'straat', _0x1afc53[_0x2c4ebb]['Postcode'] = _0x5ccfa7(0x3e8, 0x270f) + '\x20' + _0x3252a2 + _0x3252a2, _0x1afc53[_0x2c4ebb]['Zip'] = _0x1afc53[_0x2c4ebb]['Postcode'], _0x1afc53[_0x2c4ebb]['HouseNumber'] = '' + _0x5ccfa7(0x1, 0xc8);
    }
    return;
}
;
function _0x1fb50b() {
    let _0x3cd037 = proxyFile['split']('\x0a'), _0x2fb51e = _0x3cd037['map']((_0x42d1ab, _0x247a1a) => {
        sanatizeProxy = _0x42d1ab['replace']('\x0d', '');
        if (_0x3cd037[_0x247a1a + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2fb51e;
}
;
async function _0x267865(_0x4cdff7) {
    var _0x100d2d = _0x4cdff7[0x1]['split'](':');
    const _0xcc9799 = await _0x4a6475['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x100d2d[0x0] + ':' + _0x100d2d[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x28ad10 = await _0xcc9799['newPage']();
        await _0x28ad10['authenticate']({
            'username': '' + _0x100d2d[0x2],
            'password': '' + _0x100d2d[0x3]
        }), console['log'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x28ad10['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x28ad10['setRequestInterception'](!![]), _0x28ad10['on']('request', _0x20afff => {
            _0x20afff['resourceType']() === 'image' || _0x20afff['resourceType']() === 'font' || _0x20afff['resourceType']() === 'media' ? _0x20afff['abort']() : _0x20afff['continue']();
        }), await _0x28ad10['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x28ad10['waitForTimeout'](0xbb8), await _0x28ad10['waitForSelector']('.product-card');
        const _0x3864f0 = await _0x28ad10['$$eval']('a.product-card', _0x447945 => {
            return _0x447945['map'](_0x49ef55 => _0x49ef55['href']);
        });
        return _0x40b6da = _0x3864f0;
    } catch (_0x4908b2) {
        console['log']('\x20' + _0x4908b2);
    } finally {
        _0xcc9799['close'](), console['clear']();
    }
}
;
async function _0x56ab25(_0x54d057, _0x5df5ce, _0x24f1aa, _0x48beea, _0xfbc08f) {
    _0x5df5ce != 'ver' && await _0x223f18(_0x48beea, _0x54d057);
    if (_0x2a6b6a['useRandomProxy'] = ![])
        var _0x8dbd57 = _0xfbc08f[_0x54d057]['split'](':');
    else
        var _0xece13d = Math['round'](Math['random']() * (_0xfbc08f['length'] - 0x1)), _0x8dbd57 = _0xfbc08f[_0xece13d]['split'](':');
    var _0x27724f = _0x24f1aa['data'];
    _0x5df5ce != 'ver' && (_0x27724f['data']['attributes']['properties']['$first_name'] = '' + _0x48beea[_0x54d057]['FirstName'], _0x27724f['data']['attributes']['properties']['$last_name'] = '' + _0x48beea[_0x54d057]['LastName'], _0x27724f['data']['attributes']['properties']['$address1'] = _0x48beea[_0x54d057]['Address1'] + '\x20' + _0x48beea[_0x54d057]['HouseNumber'] + '\x20' + _0x48beea[_0x54d057]['Address2'], _0x27724f['data']['attributes']['properties']['$zip'] = '' + _0x48beea[_0x54d057]['Zip'], _0x27724f['data']['attributes']['properties']['$city'] = '' + _0x48beea[_0x54d057]['City'], _0x27724f['data']['attributes']['properties']['$country'] = '' + _0x48beea[_0x54d057]['Country'], _0x27724f['data']['attributes']['properties']['Size'] = '' + _0x48beea[_0x54d057]['Size'], _0x27724f['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x48beea[_0x54d057]['Follower'], _0x5df5ce == 'exp' ? _0x27724f['data']['attributes']['email'] = '' + _0x48beea[_0x54d057]['FirstName'] + _0x48beea[_0x54d057]['LastName'] + _0x2a6b6a['catchall'] : _0x27724f['data']['attributes']['email'] = '' + _0x48beea[_0x54d057]['Email']);
    var _0x293610 = {
        'jar': _0x3d3fd7,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x24f1aa['url'],
        'headers': _0x24f1aa['headers'],
        'body': JSON['stringify'](_0x27724f),
        'proxy': 'http://' + _0x8dbd57[0x2] + ':' + _0x8dbd57[0x3] + '@' + _0x8dbd57[0x0] + ':' + _0x8dbd57[0x1]
    };
    return _0x5df5ce === 'ver' && (_0x293610['method'] = 'GET'), new Promise(function (_0x5bd26d, _0x128a54) {
        callback = async (_0x2710da, _0x9f8887, _0x5c7d48) => {
            if (!_0x2710da && _0x9f8887['statusCode'] == 0xca || !_0x2710da && _0x9f8887['statusCode'] == 0xc8) {
                _0x5bd26d(console['log'](_0x374717['green'](_0x27dcd5() + '\x20[' + _0x24f1aa['name'] + ']\x20Task\x20' + (_0x54d057 + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x5df5ce != 'ver') {
                    var _0x54292f = await _0x17584c(_0x48beea[_0x54d057], _0x24f1aa, 'dev', ![]), _0x104e51 = await _0x17584c(_0x48beea[_0x54d057], _0x24f1aa, 'pub', ![]);
                    const _0x1e3abd = {
                        'succesDEVMSG': { 'embeds': [_0x54292f] },
                        'succesPUBMSG': { 'embeds': [_0x104e51] }
                    };
                    if (_0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '')
                        try {
                            await _0x38601b(_0x2a6b6a['webhook'], _0x1e3abd['succesDEVMSG']);
                        } catch {
                        }
                    await _0x337c83(0xc8), await _0x38601b(_0x3fc099, _0x1e3abd['succesDEVMSG']), await _0x337c83(0xc8);
                    try {
                        await _0x38601b(_0x54c664, _0x1e3abd['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0x5df5ce == 'ver') {
                        var _0x54292f = await _0x17584c(null, _0x24f1aa, 'ver', ![]);
                        const _0x52b02b = {
                            'succesDEVMSG': { 'embeds': [_0x54292f] },
                            'succesPUBMSG': { 'embeds': [_0x104e51] }
                        };
                        await _0x38601b(_0x59c0b4, _0x52b02b['succesDEVMSG']);
                    }
                }
            } else {
                if (_0x5df5ce != 'ver') {
                    var _0x2e72ce = '' + _0x2710da, _0x196ce9 = await _0x17584c(_0x48beea[_0x54d057], _0x24f1aa, 'dev', !![], _0x2e72ce), _0x1832f2 = {};
                    _0x1832f2['errorDEV'] = { 'embeds': [_0x196ce9] }, _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], _0x1832f2['errorDEV']), await _0x38601b(_0x4fe737, _0x1832f2['errorDEV']);
                }
                _0x128a54(console['log'](_0x27dcd5() + '\x20[' + _0x24f1aa['name'] + ']\x20Task\x20' + (_0x54d057 + 0x1) + ':\x20' + _0x2710da));
            }
        };
        try {
            _0x5df5ce === 'ver' ? console['log'](_0x27dcd5() + '\x20[' + _0x24f1aa['name'] + ']\x20Task\x20' + (_0x54d057 + 0x1) + ':\x20Verifying.') : console['log'](_0x27dcd5() + '\x20[' + _0x24f1aa['name'] + ']\x20Task\x20' + (_0x54d057 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x27724f['data']['attributes']['email']), _0x17670e(_0x293610, callback);
        } catch (_0x4d689e) {
            console['log'](_0x27dcd5() + '\x20Task\x20' + (_0x54d057 + 0x1) + ':\x20' + _0x4d689e);
        }
    });
}
;
async function _0x2a141f(_0x223f0e, _0xd74e4, _0x3ed9b8) {
    _0x4a6475['use'](_0x4c388a()), _0x4a6475['use'](_0x3efdc3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2a6b6a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2bb8c5 = 0x0; _0x2bb8c5 < _0x223f0e['length']; _0x2bb8c5++) {
        var _0x4e1fca, _0x296ec3 = '', _0x4210f2 = 0x0, _0x2540cb = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xb0edae
                },
                {
                    'name': 'Product',
                    'value': '' + _0x223f0e[_0x2bb8c5]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x223f0e[_0x2bb8c5]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2a6b6a['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1b89b3
                }
            ]
        }], _0x5a6600 = await _0x17584c(_0x223f0e[_0x2bb8c5], _0x3ed9b8, 'dev', ![]), _0x20310e = await _0x17584c(_0x223f0e[_0x2bb8c5], _0x3ed9b8, 'pub', ![]);
        const _0x3ef8b6 = {
            'succesDEVMSG': { 'embeds': [_0x5a6600] },
            'succesPUBMSG': { 'embeds': [_0x20310e] }
        }, _0xb7f461 = { 'embeds': _0x2540cb };
        await _0x223f18(_0x223f0e, _0x2bb8c5);
        if (_0x223f0e[_0x2bb8c5]['Email'] == '' || _0x223f0e[_0x2bb8c5]['FirstName'] == '' || _0x223f0e[_0x2bb8c5]['LastName'] == '' || _0x223f0e[_0x2bb8c5]['Country'] == '' || _0x223f0e[_0x2bb8c5]['Size'] == '' || _0x223f0e[_0x2bb8c5]['Address1'] == '' || _0x223f0e[_0x2bb8c5]['Zip'] == '') {
            console['log'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x223f0e[_0x2bb8c5]['Email'] == '' || _0x223f0e[_0x2bb8c5]['FirstName'] == '' || _0x223f0e[_0x2bb8c5]['LastName'] == '' || _0x223f0e[_0x2bb8c5]['Country'] == '' || _0x223f0e[_0x2bb8c5]['Size'] == '' || _0x223f0e[_0x2bb8c5]['Address1'] == '' || _0x223f0e[_0x2bb8c5]['Zip'] == '' || _0x223f0e[_0x2bb8c5]['Phone'] == '') {
            console['log'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x117668 = '' + _0x223f0e[_0x2bb8c5]['Url'];
        if (_0x2a6b6a['useRandomProxy'] = ![])
            var _0x372c0f = _0xd74e4[_0x2bb8c5]['split'](':');
        else
            var _0x5a7f18 = Math['round'](Math['random']() * (_0xd74e4['length'] - 0x1)), _0x372c0f = _0xd74e4[_0x5a7f18]['split'](':');
        const _0x207d2f = await _0x4a6475['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x372c0f[0x0] + ':' + _0x372c0f[0x1]]
        });
        try {
            const _0x13ca39 = await _0x207d2f['newPage']();
            await _0x13ca39['authenticate']({
                'username': '' + _0x372c0f[0x2],
                'password': '' + _0x372c0f[0x3]
            }), console['log'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x13ca39['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x13ca39['setRequestInterception'](!![]), _0x13ca39['on']('request', _0x235044 => {
                _0x235044['resourceType']() === 'image' || _0x235044['resourceType']() === 'font' || _0x235044['resourceType']() === 'media' ? _0x235044['abort']() : _0x235044['continue']();
            }), await _0x13ca39['goto'](_0x117668), await _0x337c83(0xbb8), await _0x13ca39['waitForSelector']('.control__JhutY'), await _0x13ca39['click']('.control__JhutY'), await _0x337c83(0x1f4);
            if (_0x223f0e[_0x2bb8c5]['Size'] != 'RANDOM')
                try {
                    const _0x5633e4 = await _0x13ca39['$x']('//div[contains(text(),\x20\x27' + _0x223f0e[_0x2bb8c5]['Size'] + '\x27)]');
                    await _0x5633e4[0x0]['click']();
                } catch {
                    console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0xd32b99 = await _0x13ca39['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x25a6e8 = Math['round'](Math['random']() * (_0xd32b99['length'] - 0x1));
                await _0xd32b99[_0x25a6e8]['click']();
            }
            await _0x337c83(0x4b0);
            const _0x374a7a = await _0x13ca39['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x374a7a[0x0]['click'](), await _0x13ca39['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x13ca39['type']('input[name=\x22email\x22]', '' + _0x223f0e[_0x2bb8c5]['Email']), await _0x337c83(0x640), await _0x13ca39['type']('input[name=\x22phone\x22]', '' + _0x223f0e[_0x2bb8c5]['Phone']), await _0x337c83(0x4b0), await _0x13ca39['click']('button.btn.continue-button__1RtsS'), await _0x337c83(0x4b0);
            try {
                await _0x13ca39['type']('input[name=\x22firstName\x22]', '' + _0x223f0e[_0x2bb8c5]['FirstName']), await _0x337c83(0x258);
            } catch {
                const _0x4f6f74 = await _0x13ca39['$$eval']('.invalid-feedback\x20>\x20div', _0x2272d0 => {
                    return _0x2272d0['map'](_0x5ed8b3 => _0x5ed8b3['innerText']);
                });
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x20' + _0x4f6f74));
                continue;
            }
            await _0x13ca39['type']('input[name=\x22lastName\x22]', '' + _0x223f0e[_0x2bb8c5]['LastName']), await _0x337c83(0xc8), await _0x13ca39['type']('input[name=\x22instagramUsername\x22]', '' + _0x223f0e[_0x2bb8c5]['Follower']), await _0x337c83(0x4b0), await _0x13ca39['click']('button.btn.continue-button__1RtsS'), await _0x337c83(0x3e8), console['log'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x13ca39['select']('select[name=\x22country\x22]', '' + _0x223f0e[_0x2bb8c5]['Country']), await _0x337c83(0x2bc), await _0x13ca39['type']('input[name=\x22streetName\x22]', '' + _0x223f0e[_0x2bb8c5]['Address1']), await _0x337c83(0x258), await _0x13ca39['type']('input[name=\x22houseNumber\x22]', _0x223f0e[_0x2bb8c5]['HouseNumber'] + '\x20' + _0x223f0e[_0x2bb8c5]['Address2']), await _0x337c83(0xc8), await _0x13ca39['type']('input[name=\x22postalCode\x22]', '' + _0x223f0e[_0x2bb8c5]['Zip']), await _0x337c83(0x1f4), await _0x13ca39['type']('input[name=\x22city\x22]', '' + _0x223f0e[_0x2bb8c5]['City']), await _0x337c83(0x4b0), await _0x13ca39['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x337c83(0x4b0), await _0x13ca39['click']('button.btn.continue-button__1RtsS'), await _0x337c83(0x4b0), console['log'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x13ca39['solveRecaptchas'](), console['log'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x337c83(0xbb8), await _0x13ca39['click']('button.btn.continue-button__1RtsS'), await _0x337c83(0x1388), console['log'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x13ca39['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x13ca39['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x337c83(0x4b0), await _0x13ca39['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x223f0e[_0x2bb8c5]['CardNumber']), await _0x337c83(0x320), await _0x13ca39['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x13ca39['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x223f0e[_0x2bb8c5]['ExpiryDate']), await _0x337c83(0x4b0), await _0x13ca39['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x13ca39['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x223f0e[_0x2bb8c5]['CVV']), await _0x337c83(0x226), await _0x13ca39['type']('input[name=\x22holderName\x22]', '' + _0x223f0e[_0x2bb8c5]['NameOnCard']), await _0x337c83(0x226), await _0x13ca39['click']('button.adyen-checkout__button'), console['log'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x13ca39['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x337c83(0xbb8);
            } catch (_0x39da4c) {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x203DS\x20Failed')), _0x4e1fca = '3DS\x20Error\x20' + _0x39da4c;
                var _0x364db6 = await _0x17584c(_0x223f0e[_0x2bb8c5], _0x3ed9b8, 'dev', !![], _0x4e1fca);
                _0x3ef8b6['errorDEV'] = { 'embeds': [_0x364db6] };
                _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], _0x3ef8b6['errorDEV']);
                await _0x38601b(_0x4fe737, _0x3ef8b6['errorDEV']);
                continue;
            }
            console['log'](_0x374717['green'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '')
                try {
                    await _0x38601b(_0x2a6b6a['webhook'], _0x3ef8b6['succesDEVMSG']);
                } catch {
                }
            await _0x337c83(0xc8), await _0x38601b(_0x3fc099, _0x3ef8b6['succesDEVMSG']), await _0x337c83(0xc8);
            try {
                await _0x38601b(_0x54c664, _0x3ef8b6['succesPUBMSG']);
            } catch {
            }
        } catch (_0x3c251e) {
            console['log'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x20' + _0x3c251e), _0x4e1fca = '' + _0x3c251e;
            var _0x364db6 = await _0x17584c(_0x223f0e[_0x2bb8c5], _0x3ed9b8, 'dev', !![], _0x4e1fca);
            _0x3ef8b6['errorDEV'] = { 'embeds': [_0x364db6] }, _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], _0x3ef8b6['errorDEV']), await _0x38601b(_0x4fe737, _0x3ef8b6['errorDEV']), _0x296ec3 = 'yes';
        } finally {
            _0x207d2f['close']();
            if (_0x296ec3 == 'yes' && _0x4210f2 != 0x5) {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x3ed9b8['name'] + ']\x20Task\x20' + (_0x2bb8c5 + 0x1) + '\x20:\x20Retrying')), _0x2bb8c5 = _0x2bb8c5 - 0x1, _0x4210f2 = _0x4210f2 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x2a6b6a['footshopDelay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['footshopDelay']);
        }
    }
}
afewFunction = async (_0x119138, _0x1cca1d, _0x441f93, _0x15e8bd, _0x7447be) => {
    for (var _0x28a899 = 0x0; _0x28a899 < _0x15e8bd['length']; _0x28a899++) {
        _0x2a6b6a['AfewDelay'] = _0x2a6b6a['delay'];
        var _0x417bc4, _0x21d437 = '', _0x28952c = 0x0;
        _0x15e8bd[_0x28a899]['Url'] = _0x119138, _0x4429cd(_0x441f93['name'] + '\x20Task\x20' + (_0x28a899 + 0x1) + '\x20/\x20' + _0x15e8bd['length'] + '\x20||\x20File:\x20' + _0xb07819 + '\x20Proxies:\x20' + _0x2e7035), await _0x223f18(_0x15e8bd, _0x28a899);
        var _0x3482e5 = await _0x17584c(_0x15e8bd[_0x28a899], _0x441f93, 'dev', ![]), _0x2b5ab9 = await _0x17584c(_0x15e8bd[_0x28a899], _0x441f93, 'pub', ![]);
        const _0x253762 = {
            'succesDEVMSG': { 'embeds': [_0x3482e5] },
            'succesPUBMSG': { 'embeds': [_0x2b5ab9] }
        };
        if (_0x15e8bd[_0x28a899]['Email'] == '' || _0x15e8bd[_0x28a899]['FirstName'] == '' || _0x15e8bd[_0x28a899]['LastName'] == '' || _0x15e8bd[_0x28a899]['Country'] == '' || _0x15e8bd[_0x28a899]['Size'] == '' || _0x15e8bd[_0x28a899]['Address1'] == '' || _0x15e8bd[_0x28a899]['Zip'] == '') {
            console['log'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2a6b6a['useRandomProxy'] = ![])
            var _0x38d9cd = _0x7447be[_0x28a899]['split'](':');
        else
            var _0x22561a = Math['round'](Math['random']() * (_0x7447be['length'] - 0x1)), _0x38d9cd = _0x7447be[_0x22561a]['split'](':');
        const _0x13b815 = await _0x4a6475['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x38d9cd[0x0] + ':' + _0x38d9cd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x100edc = await _0x13b815['newPage']();
            await _0x100edc['setDefaultNavigationTimeout'](0x1d4c0), await _0x100edc['authenticate']({
                'username': '' + _0x38d9cd[0x2],
                'password': '' + _0x38d9cd[0x3]
            }), console['log'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x100edc['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x100edc['setRequestInterception'](!![]), _0x100edc['on']('request', _0xbf60a9 => {
                _0xbf60a9['resourceType']() === 'image' || _0xbf60a9['resourceType']() === 'font' || _0xbf60a9['resourceType']() === 'media' ? _0xbf60a9['abort']() : _0xbf60a9['continue']();
            }), await _0x100edc['goto'](_0x119138, { 'waitUntil': 'networkidle2' }), console['log'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x100edc['waitForTimeout'](0xfa0), console['log'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x100edc['waitForTimeout'](0x320);
            if (_0x15e8bd[_0x28a899]['Size'] == 'RANDOM') {
                console['log'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x2e0b07 = await _0x100edc['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x3a4794 => {
                    return _0x3a4794['map'](_0x166e42 => _0x166e42['href']);
                });
                var _0x33103c = Math['round'](Math['random']() * (_0x2e0b07['length'] - 0x1));
                await _0x100edc['goto']('' + _0x2e0b07[_0x33103c]);
            } else {
                console['log'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x15e8bd[_0x28a899]['Size']);
                try {
                    const _0x5f0a73 = await _0x100edc['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x15e8bd[_0x28a899]['Size'] + '\x22]\x20>\x20a', _0xcb5304 => {
                        return _0xcb5304['map'](_0xa257 => _0xa257['href']);
                    });
                    await _0x100edc['goto']('' + _0x5f0a73[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x2cd4ee) {
                    console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20' + _0x2cd4ee + '\x20Size\x20not\x20found')), _0x417bc4 = 'Size\x20Not\x20Found';
                    var _0x1577fb = await _0x17584c(_0x15e8bd[_0x28a899], _0x441f93, 'dev', !![], _0x417bc4);
                    _0x253762['errorDEV'] = { 'embeds': [_0x1577fb] };
                    _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], _0x253762['errorDEV']);
                    await _0x38601b(_0x4fe737, _0x253762['errorDEV']);
                    continue;
                }
            }
            await _0x100edc['waitForTimeout'](0x258), await _0x100edc['type']('#raffle-instagram', '' + _0x15e8bd[_0x28a899]['Follower'], { 'delay': 0x64 }), await _0x100edc['waitForTimeout'](0x384), await _0x100edc['click']('#raffle-terms'), await _0x100edc['waitForTimeout'](0x384), await _0x100edc['evaluate'](() => {
                const _0x42f3a6 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x42f3a6['click']();
            }), await _0x100edc['waitForTimeout'](0xbb8), await _0x100edc['waitForSelector']('#checkout_email'), await _0x337c83(0x3e8), console['log'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x1cca1d == 'sec' ? await _0x100edc['type']('#checkout_email', '' + _0x15e8bd[_0x28a899]['FirstName'] + _0x15e8bd[_0x28a899]['LastName'] + _0x2a6b6a['catchall'], 0x32) : await _0x100edc['type']('#checkout_email', '' + _0x15e8bd[_0x28a899]['Email'], 0x32);
            await _0x337c83(0x320), await _0x100edc['select']('#checkout_shipping_address_country', '' + _0x15e8bd[_0x28a899]['Country']), await _0x100edc['waitForTimeout'](0x258), await _0x100edc['type']('#checkout_shipping_address_first_name', '' + _0x15e8bd[_0x28a899]['FirstName']), await _0x100edc['waitForTimeout'](0x320), await _0x100edc['type']('#checkout_shipping_address_last_name', '' + _0x15e8bd[_0x28a899]['LastName']), await _0x100edc['waitForTimeout'](0x2bc), await _0x100edc['type']('#checkout_shipping_address_address1', _0x15e8bd[_0x28a899]['Address1'] + '\x20' + _0x15e8bd[_0x28a899]['HouseNumber']), await _0x100edc['waitForTimeout'](0x2bc), await _0x100edc['type']('#checkout_shipping_address_address2', '' + _0x15e8bd[_0x28a899]['Address2']), await _0x100edc['waitForTimeout'](0x2bc);
            _0x15e8bd[_0x28a899]['Postcode'] == undefined ? await _0x100edc['type']('#checkout_shipping_address_zip', '' + _0x15e8bd[_0x28a899]['Zip']) : await _0x100edc['type']('#checkout_shipping_address_zip', '' + _0x15e8bd[_0x28a899]['Postcode']);
            await _0x100edc['waitForTimeout'](0x2bc), await _0x100edc['type']('#checkout_shipping_address_city', '' + _0x15e8bd[_0x28a899]['City']), await _0x100edc['waitForTimeout'](0x2bc), console['log'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x100edc, _0x100edc['evaluate'](() => {
                const _0x1a65ff = document['querySelector']('#continue_button');
                for (var _0x3798d4 = 0x0; _0x3798d4 < 0x5; _0x3798d4++) {
                    if (_0x1a65ff) {
                        _0x1a65ff['click'](), _0x1a65ff['click']();
                        break;
                    } else
                        _0x337c83(0xfa0);
                }
            }), await _0x100edc['waitForTimeout'](0x1194);
            try {
                await _0x100edc['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x100edc['evaluate'](() => {
                const _0x39aad8 = document['querySelector']('#continue_button');
                for (var _0x43f875 = 0x0; _0x43f875 < 0x5; _0x43f875++) {
                    if (_0x39aad8) {
                        _0x39aad8['click']();
                        break;
                    } else
                        _0x337c83(0xfa0);
                }
            }), await _0x100edc['waitForTimeout'](0x7d0), console['log'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x100edc['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x100edc['evaluate'](() => {
                const _0x17fd42 = document['querySelector']('#continue_button');
                for (var _0x12d1e7 = 0x0; _0x12d1e7 < 0x5; _0x12d1e7++) {
                    if (_0x17fd42) {
                        _0x17fd42['click']();
                        break;
                    } else
                        _0x337c83(0xfa0);
                }
            }), await _0x100edc['waitForTimeout'](0x1194), await _0x100edc['waitForSelector']('#continue_button'), _0x100edc['evaluate'](() => {
                const _0x1d18b9 = document['querySelector']('#continue_button');
                for (var _0x35fb60 = 0x0; _0x35fb60 < 0x5; _0x35fb60++) {
                    if (_0x1d18b9) {
                        _0x1d18b9['click']();
                        break;
                    } else
                        _0x337c83(0xfa0);
                }
            });
            try {
                await _0x100edc['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x374717['green'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '')
                    try {
                        await _0x38601b(_0x2a6b6a['webhook'], _0x253762['succesDEVMSG']);
                    } catch {
                    }
                await _0x337c83(0xc8), await _0x38601b(_0x3fc099, _0x253762['succesDEVMSG']), await _0x337c83(0xc8);
                try {
                    await _0x38601b(_0x54c664, _0x253762['succesPUBMSG']);
                } catch {
                }
            } catch (_0x2fea05) {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x2fea05));
            }
        } catch (_0x4d159c) {
            console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20' + _0x4d159c)), _0x417bc4 = '' + _0x4d159c;
            var _0x1577fb = await _0x17584c(_0x15e8bd[_0x28a899], _0x441f93, 'dev', !![], _0x417bc4);
            _0x253762['errorDEV'] = { 'embeds': [_0x1577fb] }, _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], _0x253762['errorDEV']), await _0x38601b(_0x4fe737, _0x253762['errorDEV']), _0x21d437 = 'yes';
        } finally {
            _0x13b815 && _0x13b815['close']();
            if (_0x21d437 == 'yes' && _0x28952c != 0x5 && _0x417bc4 != 'Size\x20Not\x20Found') {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x441f93['name'] + ']\x20Task\x20' + (_0x28a899 + 0x1) + '\x20:\x20Retrying')), _0x28a899 = _0x28a899 - 0x1, _0x28952c = _0x28952c + 0x1;
                continue;
            }
            if (_0x28a899 + 0x1 == _0x15e8bd['length']) {
                console['log'](_0x374717['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x337c83(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x2a6b6a['AfewDelay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['AfewDelay']);
        }
    }
};
async function _0x38e6ac(_0x3a8a17, _0x1d61f2, _0x465964, _0x4c3af2) {
    _0x4a6475['use'](_0x4c388a()), _0x4a6475['use'](_0x3efdc3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2a6b6a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x20ea4b = 0x0; _0x20ea4b < _0x465964['length']; _0x20ea4b++) {
        var _0x32c901 = '', _0x157ace = 0x0;
        _0x4429cd(_0x1d61f2['name'] + '\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20/\x20' + _0x465964['length'] + '\x20||\x20File:\x20' + _0xb07819 + '\x20Proxies:\x20' + _0x2e7035), await _0x223f18(_0x465964, _0x20ea4b);
        var _0x508ab7 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xb0edae
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2a6b6a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1b89b3
                }
            ]
        }];
        const _0x228bad = { 'embeds': _0x508ab7 };
        var _0xf3b96a = await _0x17584c(_0x465964[_0x20ea4b], _0x1d61f2, 'acc', ![]);
        const _0x807d94 = { 'succesDEVMSG': { 'embeds': [_0xf3b96a] } };
        if (_0x465964[_0x20ea4b]['Email'] == '' || _0x465964[_0x20ea4b]['FirstName'] == '' || _0x465964[_0x20ea4b]['LastName'] == '') {
            console['log'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x465964[_0x20ea4b]['Password'] == '' && (_0x465964[_0x20ea4b]['Password'] = 'JRaffles23!');
        if (_0x2a6b6a['useRandomProxy'] = ![])
            var _0x42cc7b = _0x4c3af2[_0x20ea4b]['split'](':');
        else
            var _0x16c8f8 = Math['round'](Math['random']() * (_0x4c3af2['length'] - 0x1)), _0x42cc7b = _0x4c3af2[_0x16c8f8]['split'](':');
        const _0x278632 = await _0x4a6475['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x42cc7b[0x0] + ':' + _0x42cc7b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xab24c2 = await _0x278632['newPage']();
            await _0xab24c2['authenticate']({
                'username': '' + _0x42cc7b[0x2],
                'password': '' + _0x42cc7b[0x3]
            }), console['log'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20Getting\x20Session'), await _0xab24c2['setRequestInterception'](!![]), _0xab24c2['on']('request', _0x35c3e9 => {
                _0x35c3e9['resourceType']() === 'image' || _0x35c3e9['resourceType']() === 'font' || _0x35c3e9['resourceType']() === 'media' ? _0x35c3e9['abort']() : _0x35c3e9['continue']();
            }), await _0xab24c2['goto'](_0x3a8a17), await _0x337c83(0xbb8), console['log'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20Starting\x20Registration'), await _0xab24c2['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xab24c2['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xab24c2['waitForSelector']('#button-register'), await _0x337c83(0x7d0), await _0xab24c2['evaluate'](() => {
                const _0x34cb28 = document['querySelector']('#button-register');
                _0x34cb28['click']();
            }), console['log'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x337c83(0x1388), await _0xab24c2['waitForSelector']('#customer_salutation'), await _0xab24c2['select']('#customer_salutation', 'mr'), await _0x337c83(0x7d0), await _0xab24c2['waitForSelector']('#customer_firstname'), await _0xab24c2['type']('#customer_firstname', '' + _0x465964[_0x20ea4b]['FirstName']), await _0x337c83(0x352), await _0xab24c2['waitForSelector']('#customer_lastname'), await _0xab24c2['type']('#customer_lastname', '' + _0x465964[_0x20ea4b]['LastName']), await _0x337c83(0x352), await _0xab24c2['type']('#email-input', '' + _0x465964[_0x20ea4b]['Email']), await _0x337c83(0x352), await _0xab24c2['type']('#email-confirm-input', '' + _0x465964[_0x20ea4b]['Email']), await _0x337c83(0x352), await _0xab24c2['type']('#register-password', '' + _0x465964[_0x20ea4b]['Password']), await _0x337c83(0x352), await _0xab24c2['type']('#password-confirm', '' + _0x465964[_0x20ea4b]['Password']), await _0x337c83(0x352), console['log'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0xab24c2['click']('#consent'), await _0x337c83(0x1f4);
            const _0x4f9cb0 = await _0xab24c2['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x4f9cb0) {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0xab24c2['click']('#buttonRegister');
            try {
                await _0xab24c2['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x374717['yellow'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20Account\x20' + _0x465964[_0x20ea4b]['Email'] + '\x20Generated!')), console['log'](_0x374717['yellow'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x465964[_0x20ea4b]['Email'])), await _0x337c83(0x4b0);
            async function _0x50edb3() {
                console['log'](_0x374717['yellow'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x4af252 = await _0x1bb0e8['get']('Code');
                return _0x4af252['Code'];
            }
            ;
            code = await _0x50edb3(), _0x337c83(0x320), console['log'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20Verifying..'), await _0xab24c2['type']('#verificationCode', code), await _0x337c83(0x1f4), await _0xab24c2['click']('#buttonVerify'), await _0x337c83(0x190), await _0xab24c2['click']('#buttonVerify'), await _0x337c83(0x3e8);
            try {
                await _0xab24c2['waitForSelector']('div.b-user_greeting'), console['log'](_0x374717['green'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20Account\x20' + _0x465964[_0x20ea4b]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x1d991e['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x465964[_0x20ea4b]['Email'] + ',' + _0x465964[_0x20ea4b]['Password'] + ','), console['log'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20Account\x20' + _0x465964[_0x20ea4b]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], _0x807d94['succesDEVMSG']);
                } catch {
                }
                await _0x38601b(_0x18c62e, _0x807d94['succesDEVMSG']);
            } catch {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x533988) {
            console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20' + _0x533988)), _0x508ab7[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x508ab7[0x0]['description'] = '' + _0x533988, await _0x38601b(_0x4fe737, _0x228bad), _0x32c901 = 'yes';
        } finally {
            _0x278632 && _0x278632['close']();
            if (_0x32c901 == 'yes' && _0x157ace != 0x5) {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x1d61f2['name'] + ']\x20Task\x20' + (_0x20ea4b + 0x1) + '\x20:\x20Retrying')), _0x20ea4b = _0x20ea4b - 0x1, _0x157ace = _0x157ace + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x2a6b6a['delay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['delay']);
        }
    }
}
async function _0x3be789(_0x384f21, _0x25d154, _0x451295) {
    _0x4a6475['use'](_0x4c388a()), _0x4a6475['use'](_0x3efdc3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2a6b6a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5b3f02 = 0x0; _0x5b3f02 < _0x25d154['length']; _0x5b3f02++) {
        var _0x3e3aa4, _0x45d6e0 = '', _0x117d6e = 0x0;
        _0x4429cd(_0x384f21['name'] + '\x20Task\x20' + (_0x5b3f02 + 0x1) + '\x20/\x20' + _0x25d154['length'] + '\x20||\x20File:\x20' + _0xb07819 + '\x20Proxies:\x20' + _0x2e7035);
        var _0x23faca = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xb0edae
                },
                {
                    'name': 'Product',
                    'value': '' + _0x25d154[_0x5b3f02]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x25d154[_0x5b3f02]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2a6b6a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1b89b3
                }
            ]
        }], _0x4528c1 = await _0x17584c(_0x25d154[_0x5b3f02], _0x384f21, 'dev', ![]), _0x5c8bc4 = await _0x17584c(_0x25d154[_0x5b3f02], _0x384f21, 'pub', ![]);
        const _0x27d86a = {
            'succesDEVMSG': { 'embeds': [_0x4528c1] },
            'succesPUBMSG': { 'embeds': [_0x5c8bc4] }
        };
        await _0x223f18(_0x25d154, _0x5b3f02);
        if (_0x25d154[_0x5b3f02]['Email'] == '' || _0x25d154[_0x5b3f02]['Password'] == '' || _0x25d154[_0x5b3f02]['FirstName'] == '' || _0x25d154[_0x5b3f02]['LastName'] == '') {
            console['log'](_0x27dcd5() + '\x20[' + _0x384f21['name'] + ']\x20Task\x20' + (_0x5b3f02 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2a6b6a['useRandomProxy'] = ![])
            var _0x1efe85 = _0x451295[_0x5b3f02]['split'](':');
        else
            var _0x2c05b9 = Math['round'](Math['random']() * (_0x451295['length'] - 0x1)), _0x1efe85 = _0x451295[_0x2c05b9]['split'](':');
        const _0x1c3b88 = await _0x4a6475['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1efe85[0x0] + ':' + _0x1efe85[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x389331 = await _0x1c3b88['newPage']();
            await _0x389331['authenticate']({
                'username': '' + _0x1efe85[0x2],
                'password': '' + _0x1efe85[0x3]
            }), console['log'](_0x27dcd5() + '\x20[' + _0x384f21['name'] + ']\x20Task\x20' + (_0x5b3f02 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x389331['setRequestInterception'](!![]), _0x389331['on']('request', _0x1a8479 => {
                _0x1a8479['resourceType']() === 'image' || _0x1a8479['resourceType']() === 'font' || _0x1a8479['resourceType']() === 'media' ? _0x1a8479['abort']() : _0x1a8479['continue']();
            }), await _0x389331['goto']('' + _0x25d154[_0x5b3f02]['Url'], { 'waitUntil': 'networkidle2' }), await _0x337c83(0x12c);
            try {
                await _0x389331['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x389331['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x27dcd5() + '\x20[' + _0x384f21['name'] + ']\x20Task\x20' + (_0x5b3f02 + 0x1) + '\x20:\x20Logging\x20in'), await _0x389331['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x389331['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x389331['waitForSelector']('#username'), await _0x389331['type']('#username', _0x25d154[_0x5b3f02]['Email']), await _0x389331['waitForSelector']('#password'), await _0x389331['type']('#password', _0x25d154[_0x5b3f02]['Password']), await _0x337c83(0x190), await _0x389331['click']('#buttonSubmit'), await _0x389331['waitForSelector']('div.b-user_greeting'), console['log'](_0x27dcd5() + '\x20[' + _0x384f21['name'] + ']\x20Task\x20' + (_0x5b3f02 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x337c83(0x1f4), await _0x389331['goto']('' + _0x25d154[_0x5b3f02]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x27dcd5() + '\x20[' + _0x384f21['name'] + ']\x20Task\x20' + (_0x5b3f02 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x25d154[_0x5b3f02]['Size']);
            let _0x1db981 = _0x25d154[_0x5b3f02]['Size']['replace']('.5', '\x201/2');
            await _0x389331['click']('button[title=\x22' + _0x1db981 + '\x22]'), await _0x337c83(0x1f4);
            try {
                await _0x389331['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x337c83(0x12c), console['log'](_0x27dcd5() + '\x20[' + _0x384f21['name'] + ']\x20Task\x20' + (_0x5b3f02 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x389331['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x337c83(0x12c), await _0x389331['type']('#dwfrm_raffle_addressFields_firstName', _0x25d154[_0x5b3f02]['FirstName']), await _0x337c83(0x12c), await _0x389331['type']('#dwfrm_raffle_addressFields_lastName', _0x25d154[_0x5b3f02]['LastName']), await _0x337c83(0x12c), await _0x389331['select']('#dwfrm_raffle_addressFields_country', _0x25d154[_0x5b3f02]['Country']), await _0x337c83(0x12c), await _0x389331['type']('#dwfrm_raffle_addressFields_city', _0x25d154[_0x5b3f02]['City']), await _0x337c83(0x12c);
            _0x25d154[_0x5b3f02]['Postcode'] == undefined && (_0x25d154[_0x5b3f02]['Postcode'] = _0x25d154[_0x5b3f02]['Zip']);
            await _0x389331['type']('#dwfrm_raffle_addressFields_postalCode', _0x25d154[_0x5b3f02]['Postcode']), await _0x337c83(0x12c), await _0x389331['type']('#dwfrm_raffle_addressFields_address1', _0x25d154[_0x5b3f02]['Address1']), await _0x337c83(0x12c), await _0x389331['type']('#dwfrm_raffle_addressFields_address2', _0x25d154[_0x5b3f02]['HouseNumber']), await _0x337c83(0x12c), await _0x389331['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x25d154[_0x5b3f02]['Address2']), await _0x337c83(0x12c), await _0x389331['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x337c83(0x12c), await _0x389331['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x25d154[_0x5b3f02]['Follower']), await _0x337c83(0x1f4), await _0x389331['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x337c83(0x1f4), console['log'](_0x27dcd5() + '\x20[' + _0x384f21['name'] + ']\x20Task\x20' + (_0x5b3f02 + 0x1) + '\x20:\x20' + _0x374717['blue']('Awaiting\x20Paypal\x20Payment')), await _0x389331['click']('.b-paypal_button');
            try {
                await _0x389331['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x374717['green'](_0x27dcd5() + '\x20[' + _0x384f21['name'] + ']\x20Task\x20' + (_0x5b3f02 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], _0x27d86a['succesDEVMSG']), await _0x337c83(0xc8), await _0x38601b(_0x3fc099, _0x27d86a['succesDEVMSG']), await _0x337c83(0xc8), await _0x38601b(_0x54c664, _0x27d86a['succesPUBMSG']);
            } catch (_0x206f56) {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x384f21['name'] + ']\x20Task\x20' + (_0x5b3f02 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x206f56)), _0x3e3aa4 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x206f56;
                var _0x2c3f19 = await _0x17584c(_0x25d154[_0x5b3f02], _0x384f21, 'dev', !![], _0x3e3aa4);
                _0x27d86a['errorDEV'] = { 'embeds': [_0x2c3f19] }, _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], _0x27d86a['errorDEV']), await _0x38601b(_0x4fe737, _0x27d86a['errorDEV']);
            }
        } catch (_0x66c78a) {
            console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x384f21['name'] + ']\x20Task\x20' + (_0x5b3f02 + 0x1) + '\x20:\x20' + _0x66c78a)), _0x3e3aa4 = '' + _0x66c78a;
            var _0x2c3f19 = await _0x17584c(_0x25d154[_0x5b3f02], _0x384f21, 'dev', !![], _0x3e3aa4);
            _0x27d86a['errorDEV'] = { 'embeds': [_0x2c3f19] }, _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], _0x27d86a['errorDEV']), await _0x38601b(_0x4fe737, _0x27d86a['errorDEV']), _0x45d6e0 = 'yes';
        } finally {
            _0x1c3b88 && _0x1c3b88['close']();
            if (_0x45d6e0 == 'yes' && _0x117d6e != 0x5) {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x384f21['name'] + ']\x20Task\x20' + (_0x5b3f02 + 0x1) + '\x20:\x20Retrying')), _0x5b3f02 = _0x5b3f02 - 0x1, _0x117d6e = _0x117d6e + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x2a6b6a['AfewDelay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['AfewDelay']);
        }
    }
}
async function _0x488dbd(_0x1bdd02, _0x5ec80e) {
    _0x4a6475['use'](_0x4c388a()), _0x4a6475['use'](_0x3efdc3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2a6b6a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xd34dc3 = 0x0; _0xd34dc3 < bouncewear['length']; _0xd34dc3++) {
        await _0x223f18(bouncewear, _0xd34dc3);
        if (bouncewear[_0xd34dc3]['Email'] == '' || bouncewear[_0xd34dc3]['Password'] == '' || bouncewear[_0xd34dc3]['FirstName'] == '' || bouncewear[_0xd34dc3]['LastName'] == '') {
            console['log'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0xd34dc3 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2a6b6a['useRandomProxy'] = ![])
            var _0x46865c = _0x1fb50b()[_0xd34dc3]['split'](':');
        else
            var _0x392cda = Math['round'](Math['random']() * (_0x1fb50b()['length'] - 0x1)), _0x46865c = _0x1fb50b()[_0x392cda]['split'](':');
        const _0x23aea0 = await _0x4a6475['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x46865c[0x0] + ':' + _0x46865c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xf60690 = await _0x23aea0['newPage']();
            await _0xf60690['authenticate']({
                'username': '' + _0x46865c[0x2],
                'password': '' + _0x46865c[0x3]
            }), console['log'](_0x27dcd5() + '\x20[' + _0x5ec80e['name'] + ']\x20Task\x20' + (_0xd34dc3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xf60690['setRequestInterception'](!![]), _0xf60690['on']('request', _0x30ceeb => {
                _0x30ceeb['resourceType']() === 'image' || _0x30ceeb['resourceType']() === 'font' || _0x30ceeb['resourceType']() === 'media' ? _0x30ceeb['abort']() : _0x30ceeb['continue']();
            }), await _0xf60690['goto'](_0x1bdd02), await _0x337c83(0xbb8), await _0xf60690['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x27dcd5() + '\x20[' + _0x5ec80e['name'] + ']\x20Task\x20' + (_0xd34dc3 + 0x1) + '\x20:\x20Filling\x20information'), await _0xf60690['type']('#RegisterForm-FirstName', '' + bouncewear[_0xd34dc3]['FirstName']), await _0x337c83(0x226), await _0xf60690['type']('#RegisterForm-LastName', '' + bouncewear[_0xd34dc3]['LastName']), await _0x337c83(0x226), await _0xf60690['type']('#RegisterForm-email', '' + bouncewear[_0xd34dc3]['Email']), await _0x337c83(0x226), await _0xf60690['type']('#RegisterForm-password', '' + bouncewear[_0xd34dc3]['Password']), await _0x337c83(0x226), await _0xf60690['click']('#marketing'), console['log'](_0x27dcd5() + '\x20[' + _0x5ec80e['name'] + ']\x20Task\x20' + (_0xd34dc3 + 0x1) + '\x20:\x20Submitting..'), await _0xf60690['$eval']('#RegisterForm', _0x243919 => _0x243919['submit']()), await _0x337c83(0x1f40), console['log'](_0x27dcd5() + '\x20[' + _0x5ec80e['name'] + ']\x20Task\x20' + (_0xd34dc3 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0xf60690['solveRecaptchas'](), await _0xf60690['click']('.shopify-challenge__button.btn');
            async function _0xc279d4() {
                for (var _0x37768a = 0x0; _0x37768a < 0x4; _0x37768a++) {
                    try {
                        console['log']('try'), await _0xf60690['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x27dcd5() + '\x20[' + _0x5ec80e['name'] + ']\x20Task\x20' + (_0xd34dc3 + 0x1) + '\x20:\x20' + _0x374717['red']('Catpcha\x20failed,\x20retrying..')), await _0xf60690['solveRecaptchas'](), await _0xf60690['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0xc279d4(), console['log'](_0x27dcd5() + '\x20[' + _0x5ec80e['name'] + ']\x20Task\x20' + (_0xd34dc3 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x337c83(0x1f4);
            try {
                await _0xf60690['waitForSelector']('.featured-title'), await _0x337c83(0x1f4), console['log'](_0x374717['green'](_0x27dcd5() + '\x20[' + _0x5ec80e['name'] + ']\x20Task\x20' + (_0xd34dc3 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0xd34dc3]['Email'] + '\x20Generated!')), _0x1d991e['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0xd34dc3]['Email'] + ',' + bouncewear[_0xd34dc3]['Password']), console['log'](_0x374717['yellow'](_0x27dcd5() + '\x20[' + _0x5ec80e['name'] + ']\x20Task\x20' + (_0xd34dc3 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0xd34dc3]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x18e7b1) {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0xd34dc3 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x18e7b1));
            }
        } catch (_0x2d6c8f) {
            console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0xd34dc3 + 0x1) + '\x20:\x20' + _0x2d6c8f));
        } finally {
            _0x23aea0 && _0x23aea0['close'](), console['log']('Waiting\x20for\x20' + _0x2a6b6a['delay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['delay']);
        }
    }
}
async function _0xb575e6(_0x4c2165, _0x3a3376, _0x20c34d, _0x394d63) {
    _0x4a6475['use'](_0x4c388a()), _0x4a6475['use'](_0x3efdc3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2a6b6a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5e597e = 0x0; _0x5e597e < _0x20c34d['length']; _0x5e597e++) {
        var _0x1c61d0 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xb0edae
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2a6b6a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1b89b3
                }
            ]
        }];
        const _0x1c7197 = { 'embeds': _0x1c61d0 };
        _0x4429cd(_0x3a3376['name'] + '\x20Task\x20' + (_0x5e597e + 0x1) + '\x20/\x20' + _0x20c34d['length'] + '\x20||\x20File:\x20' + _0xb07819 + '\x20Proxies:\x20' + _0x2e7035), await _0x223f18(_0x20c34d, _0x5e597e);
        var _0x371435 = await _0x17584c(_0x20c34d[_0x5e597e], _0x3a3376, 'acc', ![]);
        const _0x3adec2 = { 'succesDEVMSG': { 'embeds': [_0x371435] } };
        if (_0x20c34d[_0x5e597e]['Email'] == '' || _0x20c34d[_0x5e597e]['FirstName'] == '' || _0x20c34d[_0x5e597e]['LastName'] == '') {
            console['log'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0x5e597e + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x337c83(0x7d0);
            continue;
        }
        (_0x20c34d[_0x5e597e]['Password'] == '' || _0x20c34d[_0x5e597e] == undefined) && _0x20c34d[_0x5e597e]['Password'] == 'JRaffles23!';
        if (_0x2a6b6a['useRandomProxy'] = ![])
            var _0x2f14b9 = _0x394d63[_0x5e597e]['split'](':');
        else
            var _0x1c33f5 = Math['round'](Math['random']() * (_0x394d63['length'] - 0x1)), _0x2f14b9 = _0x394d63[_0x1c33f5]['split'](':');
        const _0xf85060 = await _0x4a6475['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2f14b9[0x0] + ':' + _0x2f14b9[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x262c1f = await _0xf85060['newPage']();
            await _0x262c1f['authenticate']({
                'username': '' + _0x2f14b9[0x2],
                'password': '' + _0x2f14b9[0x3]
            }), console['log'](_0x27dcd5() + '\x20[' + _0x3a3376['name'] + ']\x20Task\x20' + (_0x5e597e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x262c1f['setRequestInterception'](!![]), _0x262c1f['on']('request', _0x12a3b7 => {
                _0x12a3b7['resourceType']() === 'image' || _0x12a3b7['resourceType']() === 'font' || _0x12a3b7['resourceType']() === 'media' ? _0x12a3b7['abort']() : _0x12a3b7['continue']();
            }), await _0x262c1f['goto'](_0x4c2165), await _0x337c83(0xbb8), await _0x262c1f['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x27dcd5() + '\x20[' + _0x3a3376['name'] + ']\x20Task\x20' + (_0x5e597e + 0x1) + '\x20:\x20Filling\x20information'), await _0x262c1f['type']('#RegisterForm-FirstName', '' + _0x20c34d[_0x5e597e]['FirstName']), await _0x337c83(0x226), await _0x262c1f['type']('#RegisterForm-LastName', '' + _0x20c34d[_0x5e597e]['LastName']), await _0x337c83(0x226), await _0x262c1f['type']('#RegisterForm-email', '' + _0x20c34d[_0x5e597e]['Email']), await _0x337c83(0x226), await _0x262c1f['type']('#RegisterForm-password', '' + _0x20c34d[_0x5e597e]['Password']), await _0x337c83(0x226), console['log'](_0x27dcd5() + '\x20[' + _0x3a3376['name'] + ']\x20Task\x20' + (_0x5e597e + 0x1) + '\x20:\x20Submitting..'), await _0x262c1f['$eval']('#RegisterForm', _0x14f913 => _0x14f913['submit']()), await _0x337c83(0x1f40);
            try {
                await _0x262c1f['waitForSelector']('.home-page-grid__collection'), await _0x337c83(0x1f4), console['log'](_0x374717['green'](_0x27dcd5() + '\x20[' + _0x3a3376['name'] + ']\x20Task\x20' + (_0x5e597e + 0x1) + '\x20:\x20Account\x20' + _0x20c34d[_0x5e597e]['Email'] + '\x20Generated!')), _0x1d991e['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x20c34d[_0x5e597e]['Email'] + ',' + _0x20c34d[_0x5e597e]['Password']), console['log'](_0x374717['yellow'](_0x27dcd5() + '\x20[' + _0x3a3376['name'] + ']\x20Task\x20' + (_0x5e597e + 0x1) + '\x20:\x20Account\x20' + _0x20c34d[_0x5e597e]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], _0x3adec2['succesDEVMSG']);
                } catch {
                }
                await _0x38601b(_0x18c62e, _0x3adec2['succesDEVMSG']);
            } catch (_0xb15d3f) {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0x5e597e + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xb15d3f));
            }
        } catch (_0x3d0489) {
            console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0x5e597e + 0x1) + '\x20:\x20' + _0x3d0489));
        } finally {
            _0xf85060 && _0xf85060['close'](), console['log']('Waiting\x20for\x20' + _0x2a6b6a['delay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['delay']);
        }
    }
}
async function _0x53edd3(_0x532d1f, _0x396a20, _0x39be36, _0x8bef3a) {
    _0x4a6475['use'](_0x4c388a()), _0x4a6475['use'](_0x3efdc3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2a6b6a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1f5a8b = 0x0; _0x1f5a8b < _0x39be36['length']; _0x1f5a8b++) {
        var _0x3acb8a, _0x39f5ea = '', _0x2ceaba = 0x0;
        _0x4429cd(_0x396a20['name'] + '\x20Task\x20' + (_0x1f5a8b + 0x1) + '\x20/\x20' + _0x39be36['length'] + '\x20||\x20File:\x20' + _0xb07819 + '\x20Proxies:\x20' + _0x2e7035), await _0x223f18(_0x39be36, _0x1f5a8b);
        if (_0x39be36[_0x1f5a8b]['Email'] == '' || _0x39be36[_0x1f5a8b]['Password'] == '' || _0x39be36[_0x1f5a8b]['FirstName'] == '' || _0x39be36[_0x1f5a8b]['LastName'] == '') {
            console['log'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0x1f5a8b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2a6b6a['useRandomProxy'] = ![])
            var _0x31c0c4 = _0x8bef3a[_0x1f5a8b]['split'](':');
        else
            var _0x5dfe9a = Math['round'](Math['random']() * (_0x8bef3a['length'] - 0x1)), _0x31c0c4 = _0x8bef3a[_0x5dfe9a]['split'](':');
        const _0x2c390e = await _0x4a6475['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x31c0c4[0x0] + ':' + _0x31c0c4[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x502bc2 = await _0x2c390e['newPage']();
            await _0x502bc2['authenticate']({
                'username': '' + _0x31c0c4[0x2],
                'password': '' + _0x31c0c4[0x3]
            }), console['log'](_0x27dcd5() + '\x20[' + _0x396a20['name'] + ']\x20Task\x20' + (_0x1f5a8b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x502bc2['setRequestInterception'](!![]), _0x502bc2['on']('request', _0x86d3b8 => {
                _0x86d3b8['resourceType']() === 'image' || _0x86d3b8['resourceType']() === 'font' || _0x86d3b8['resourceType']() === 'media' ? _0x86d3b8['abort']() : _0x86d3b8['continue']();
            }), await _0x502bc2['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x502bc2['waitForSelector']('#CustomerEmail'), console['log'](_0x27dcd5() + '\x20[' + _0x396a20['name'] + ']\x20Task\x20' + (_0x1f5a8b + 0x1) + '\x20:\x20Logging\x20in..'), await _0x502bc2['type']('#CustomerEmail', '' + _0x39be36[_0x1f5a8b]['Email']), await _0x337c83(0x12c), await _0x502bc2['type']('#CustomerPassword', '' + _0x39be36[_0x1f5a8b]['Password']), await _0x337c83(0x226), await _0x502bc2['$eval']('#customer_login', _0x28c487 => _0x28c487['submit']());
            try {
                await _0x502bc2['waitForSelector']('#orders'), await _0x337c83(0x4b0);
            } catch {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x396a20['name'] + ']\x20Task\x20' + (_0x1f5a8b + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x502bc2['goto']('' + _0x39be36[_0x1f5a8b]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x337c83(0xbb8), console['log'](_0x27dcd5() + '\x20[' + _0x396a20['name'] + ']\x20Task\x20' + (_0x1f5a8b + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x502bc2['waitForSelector']('#email');
            } catch {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x396a20['name'] + ']\x20Task\x20' + (_0x1f5a8b + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x502bc2['type']('#email', '' + _0x39be36[_0x1f5a8b]['Email']), await _0x337c83(0x384), await _0x502bc2['type']('#first_name', '' + _0x39be36[_0x1f5a8b]['FirstName']), await _0x337c83(0x514), await _0x502bc2['type']('#last_name', '' + _0x39be36[_0x1f5a8b]['LastName']), await _0x337c83(0x514), await _0x502bc2['type']('#street_address', _0x39be36[_0x1f5a8b]['Address1'] + '\x20' + _0x39be36[_0x1f5a8b]['HouseNumber'] + '\x20' + _0x39be36[_0x1f5a8b]['Address2']), await _0x337c83(0x2bc);
            _0x39be36[_0x1f5a8b]['Postcode'] == undefined && (_0x39be36[_0x1f5a8b]['Postcode'] = _0x39be36[_0x1f5a8b]['Zip']);
            await _0x502bc2['type']('#zip_code', '' + _0x39be36[_0x1f5a8b]['Postcode']), await _0x337c83(0x320), await _0x502bc2['type']('#city', '' + _0x39be36[_0x1f5a8b]['City']), await _0x337c83(0x320), await _0x502bc2['type']('#bday', '01/01/1994'), await _0x337c83(0x320), await _0x502bc2['type']('#instagram', '' + _0x39be36[_0x1f5a8b]['Follower']), await _0x337c83(0x352);
            if (_0x39be36[_0x1f5a8b]['Size'] == 'RANDOM') {
                const _0x44d794 = await _0x502bc2['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0xeb81e0 => {
                    return _0xeb81e0['map'](_0x423f92 => _0x423f92['textContent']);
                });
                var _0x41aed2 = Math['round'](Math['random']() * (_0x44d794['length'] - 0x1));
                console['log'](_0x27dcd5() + '\x20[' + _0x396a20['name'] + ']\x20Task\x20' + (_0x1f5a8b + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x44d794[_0x41aed2]), await _0x502bc2['click']('label[data-eu-size=\x22' + _0x44d794[_0x41aed2] + '\x22]');
            } else {
                console['log'](_0x27dcd5() + '\x20[' + _0x396a20['name'] + ']\x20Task\x20' + (_0x1f5a8b + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x39be36[_0x1f5a8b]['Size']);
                try {
                    await _0x502bc2['click']('label[data-eu-size=\x22' + _0x39be36[_0x1f5a8b]['Size'] + '\x22]');
                } catch {
                    await _0x502bc2['click']('label[data-eu-size=\x22' + _0x39be36[_0x1f5a8b]['Size'] + '.0\x22]');
                }
            }
            await _0x337c83(0xbb8), await _0x502bc2['$$eval']('.raffle__checkbox-label', _0xfb8d5d => _0xfb8d5d['forEach'](_0x207c63 => _0x207c63['click']())), await _0x337c83(0x7d0), console['log'](_0x27dcd5() + '\x20[' + _0x396a20['name'] + ']\x20Task\x20' + (_0x1f5a8b + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x502bc2['click']('#raffle__form-submit'), await _0x337c83(0x1388);
            try {
                await _0x502bc2['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x374717['green'](_0x27dcd5() + '\x20[' + _0x396a20['name'] + ']\x20Task\x20' + (_0x1f5a8b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x5a90f7) {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0x1f5a8b + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x5a90f7));
            }
        } catch (_0x573795) {
            console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0x1f5a8b + 0x1) + '\x20:\x20' + _0x573795)), _0x39f5ea = 'yes';
        } finally {
            _0x2c390e && _0x2c390e['close']();
            if (_0x39f5ea == 'yes' && _0x2ceaba != 0x5) {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x396a20['name'] + ']\x20Task\x20' + (_0x1f5a8b + 0x1) + '\x20:\x20Retrying')), _0x1f5a8b = _0x1f5a8b - 0x1, _0x2ceaba = _0x2ceaba + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x2a6b6a['delay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['delay']);
        }
    }
}
async function _0x3689f7(_0x48e37f, _0x5795f7, _0x598dfa, _0x29c1e7) {
    _0x4a6475['use'](_0x4c388a()), _0x4a6475['use'](_0x3efdc3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2a6b6a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x583cad = 0x0; _0x583cad < _0x598dfa['length']; _0x583cad++) {
        var _0x2e8d42 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xb0edae
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2a6b6a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1b89b3
                }
            ]
        }];
        const _0x31367c = { 'embeds': _0x2e8d42 };
        _0x4429cd(_0x5795f7['name'] + '\x20Task\x20' + (_0x583cad + 0x1) + '\x20/\x20' + _0x598dfa['length'] + '\x20||\x20File:\x20' + _0xb07819 + '\x20Proxies:\x20' + _0x2e7035), await _0x223f18(_0x598dfa, _0x583cad);
        var _0x371635 = await _0x17584c(_0x598dfa[_0x583cad], _0x5795f7, 'acc', ![]);
        const _0x9019d2 = { 'succesDEVMSG': { 'embeds': [_0x371635] } };
        if (_0x598dfa[_0x583cad]['Email'] == '' || _0x598dfa[_0x583cad]['FirstName'] == '' || _0x598dfa[_0x583cad]['LastName'] == '') {
            console['log'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0x583cad + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x337c83(0x7d0);
            continue;
        }
        (_0x598dfa[_0x583cad]['Password'] == '' || _0x598dfa[_0x583cad] == undefined) && _0x598dfa[_0x583cad]['Password'] == 'JRaffles23!';
        if (_0x2a6b6a['useRandomProxy'] = ![])
            var _0x54f8ef = _0x29c1e7[_0x583cad]['split'](':');
        else
            var _0x57eb99 = Math['round'](Math['random']() * (_0x29c1e7['length'] - 0x1)), _0x54f8ef = _0x29c1e7[_0x57eb99]['split'](':');
        const _0x33a19a = await _0x4a6475['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x54f8ef[0x0] + ':' + _0x54f8ef[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x192f22 = await _0x33a19a['newPage']();
            await _0x192f22['authenticate']({
                'username': '' + _0x54f8ef[0x2],
                'password': '' + _0x54f8ef[0x3]
            }), console['log'](_0x27dcd5() + '\x20[' + _0x5795f7['name'] + ']\x20Task\x20' + (_0x583cad + 0x1) + '\x20:\x20Getting\x20Session'), await _0x192f22['setRequestInterception'](!![]), _0x192f22['on']('request', _0x2b6fa0 => {
                _0x2b6fa0['resourceType']() === 'image' || _0x2b6fa0['resourceType']() === 'font' || _0x2b6fa0['resourceType']() === 'media' ? _0x2b6fa0['abort']() : _0x2b6fa0['continue']();
            }), await _0x192f22['goto']('https://drop.slamjam.com/account/register'), await _0x337c83(0xbb8), await _0x192f22['waitForSelector']('#FirstName'), await _0x192f22['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x192f22['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x27dcd5() + '\x20[' + _0x5795f7['name'] + ']\x20Task\x20' + (_0x583cad + 0x1) + '\x20:\x20Filling\x20information'), await _0x337c83(0x4b0), await _0x192f22['type']('#FirstName', '' + _0x598dfa[_0x583cad]['FirstName']), await _0x337c83(0x226), await _0x192f22['type']('#LastName', '' + _0x598dfa[_0x583cad]['LastName']), await _0x337c83(0x226), await _0x192f22['type']('#Email', '' + _0x598dfa[_0x583cad]['Email']), await _0x337c83(0x2ee), await _0x192f22['type']('#ConfirmEmail', '' + _0x598dfa[_0x583cad]['Email']), await _0x337c83(0x2ee), await _0x192f22['type']('#CreatePassword', '' + _0x598dfa[_0x583cad]['Password']), await _0x337c83(0x2ee), await _0x192f22['type']('#CreateConfirmPassword', '' + _0x598dfa[_0x583cad]['Password']), await _0x337c83(0x226), console['log'](_0x27dcd5() + '\x20[' + _0x5795f7['name'] + ']\x20Task\x20' + (_0x583cad + 0x1) + '\x20:\x20Submitting..'), await _0x192f22['$eval']('#create_customer', _0x5d4e4c => _0x5d4e4c['submit']()), await _0x337c83(0x1388), console['log'](_0x27dcd5() + '\x20[' + _0x5795f7['name'] + ']\x20Task\x20' + (_0x583cad + 0x1) + '\x20:\x20' + _0x374717['cyan']('Solving\x20Captcha')), await _0x192f22['solveRecaptchas'](), console['log'](_0x27dcd5() + '\x20[' + _0x5795f7['name'] + ']\x20Task\x20' + (_0x583cad + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x192f22['$eval']('.shopify-challenge__container\x20>\x20form', _0x7a855a => _0x7a855a['submit']());
            try {
                await _0x192f22['waitForSelector']('.product-card__image'), await _0x337c83(0x1f4), console['log'](_0x374717['green'](_0x27dcd5() + '\x20[' + _0x5795f7['name'] + ']\x20Task\x20' + (_0x583cad + 0x1) + '\x20:\x20Account\x20' + _0x598dfa[_0x583cad]['Email'] + '\x20Generated!')), _0x1d991e['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x598dfa[_0x583cad]['Email'] + ',' + _0x598dfa[_0x583cad]['Password']), console['log'](_0x374717['yellow'](_0x27dcd5() + '\x20[' + _0x5795f7['name'] + ']\x20Task\x20' + (_0x583cad + 0x1) + '\x20:\x20Account\x20' + _0x598dfa[_0x583cad]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], _0x9019d2['succesDEVMSG']);
                } catch {
                }
                await _0x38601b(_0x18c62e, _0x9019d2['succesDEVMSG']);
            } catch (_0x2c4d31) {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0x583cad + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2c4d31));
            }
        } catch (_0x4fcaf8) {
            console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0x583cad + 0x1) + '\x20:\x20' + _0x4fcaf8));
        } finally {
            _0x33a19a && _0x33a19a['close'](), console['log']('Waiting\x20for\x20' + _0x2a6b6a['delay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['delay']);
        }
    }
}
async function _0x35e966(_0x3e8f5e, _0x56c3ca, _0x2c44b7, _0x465505) {
    _0x4a6475['use'](_0x4c388a()), _0x4a6475['use'](_0x3efdc3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2a6b6a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x577716 = 0x0; _0x577716 < _0x2c44b7['length']; _0x577716++) {
        var _0x3f5bbd, _0x2966dc = '', _0x2ec3ba = 0x0;
        _0x4429cd(_0x56c3ca['name'] + '\x20Task\x20' + (_0x577716 + 0x1) + '\x20/\x20' + _0x2c44b7['length'] + '\x20||\x20File:\x20' + _0xb07819 + '\x20Proxies:\x20' + _0x2e7035), await _0x223f18(_0x2c44b7, _0x577716);
        if (_0x2c44b7[_0x577716]['Email'] == '' || _0x2c44b7[_0x577716]['Password'] == '' || _0x2c44b7[_0x577716]['FirstName'] == '' || _0x2c44b7[_0x577716]['LastName'] == '') {
            console['log'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0x577716 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2a6b6a['useRandomProxy'] = ![])
            var _0x1707b3 = _0x465505[_0x577716]['split'](':');
        else
            var _0x28c1b1 = Math['round'](Math['random']() * (_0x465505['length'] - 0x1)), _0x1707b3 = _0x465505[_0x28c1b1]['split'](':');
        const _0xd32515 = await _0x4a6475['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1707b3[0x0] + ':' + _0x1707b3[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x3f9c7e = await _0xd32515['newPage']();
            await _0x3f9c7e['authenticate']({
                'username': '' + _0x1707b3[0x2],
                'password': '' + _0x1707b3[0x3]
            }), await _0x3f9c7e['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x27dcd5() + '\x20[' + _0x56c3ca['name'] + ']\x20Task\x20' + (_0x577716 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3f9c7e['setRequestInterception'](!![]), _0x3f9c7e['on']('request', _0x2b0ce4 => {
                _0x2b0ce4['resourceType']() === 'image' || _0x2b0ce4['resourceType']() === 'font' || _0x2b0ce4['resourceType']() === 'media' ? _0x2b0ce4['abort']() : _0x2b0ce4['continue']();
            }), await _0x3f9c7e['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x3f9c7e['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3f9c7e['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x337c83(0x258), await _0x3f9c7e['waitForSelector']('#CustomerEmail'), console['log'](_0x27dcd5() + '\x20[' + _0x56c3ca['name'] + ']\x20Task\x20' + (_0x577716 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3f9c7e['type']('#CustomerEmail', '' + _0x2c44b7[_0x577716]['Email']), await _0x337c83(0x12c), await _0x3f9c7e['type']('#CustomerPassword', '' + _0x2c44b7[_0x577716]['Password']), await _0x337c83(0x226), await _0x3f9c7e['$eval']('#customer_login', _0x5da9a4 => _0x5da9a4['submit']()), await _0x337c83(0x7d0), await _0x3f9c7e['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x27dcd5() + '\x20[' + _0x56c3ca['name'] + ']\x20Task\x20' + (_0x577716 + 0x1) + '\x20:\x20' + _0x374717['cyan']('Solving\x20Captcha')), await _0x3f9c7e['solveRecaptchas'](), console['log'](_0x27dcd5() + '\x20[' + _0x56c3ca['name'] + ']\x20Task\x20' + (_0x577716 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x3f9c7e['$eval']('.shopify-challenge__container\x20>\x20form', _0x41d4d0 => _0x41d4d0['submit']());
            try {
                await _0x3f9c7e['waitForSelector']('.nav-account'), await _0x337c83(0x4b0);
            } catch {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x56c3ca['name'] + ']\x20Task\x20' + (_0x577716 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x3f9c7e['goto']('' + _0x2c44b7[_0x577716]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x337c83(0xbb8), console['log'](_0x27dcd5() + '\x20[' + _0x56c3ca['name'] + ']\x20Task\x20' + (_0x577716 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x3f9c7e['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x3f9c7e['click']('.product-select-variant-wrapper'), await _0x337c83(0x320), await _0x3f9c7e['click']('li.product-select-variant__value[data-size=\x22' + _0x2c44b7[_0x577716]['Size'] + '\x22]'), await _0x337c83(0x384), await _0x3f9c7e['$eval']('#AddToCartForm-product-template-raffle', _0x3cbc48 => _0x3cbc48['submit']()), await _0x3f9c7e['waitForSelector']('.cart-order-summary__content'), await _0x337c83(0x514), await _0x3f9c7e['goto']('https://drop.slamjam.com/checkout'), await _0x337c83(0x514), await _0x3f9c7e['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x27dcd5() + '\x20[' + _0x56c3ca['name'] + ']\x20Task\x20' + (_0x577716 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3f9c7e['select']('#checkout_shipping_address_country', '' + _0x2c44b7[_0x577716]['Country']), await _0x337c83(0x200), await _0x3f9c7e['waitForSelector']('#checkout_shipping_address_first_name'), await _0x3f9c7e['type']('#checkout_shipping_address_first_name', '' + _0x2c44b7[_0x577716]['FirstName']), await _0x337c83(0x237), await _0x3f9c7e['type']('#checkout_shipping_address_last_name', '' + _0x2c44b7[_0x577716]['LastName']), await _0x337c83(0x1e0), await _0x3f9c7e['type']('#checkout_shipping_address_address1', _0x2c44b7[_0x577716]['Address1'] + '\x20' + _0x2c44b7[_0x577716]['HouseNumber']), await _0x337c83(0x514), await _0x3f9c7e['type']('#checkout_shipping_address_address2', '' + _0x2c44b7[_0x577716]['Address2']), await _0x337c83(0x514);
            _0x2c44b7[_0x577716]['Postcode'] == undefined && (_0x2c44b7[_0x577716]['Postcode'] = _0x2c44b7[_0x577716]['Zip']);
            await _0x3f9c7e['type']('#checkout_shipping_address_zip', '' + _0x2c44b7[_0x577716]['Postcode']), await _0x337c83(0x2bc), await _0x3f9c7e['type']('#checkout_shipping_address_city', '' + _0x2c44b7[_0x577716]['City']), await _0x337c83(0x320), await _0x3f9c7e['type']('#checkout_shipping_address_phone', '' + _0x2c44b7[_0x577716]['Phone']), await _0x337c83(0x320), await _0x3f9c7e['click']('#continue_button'), await _0x337c83(0xbb8), await _0x3f9c7e['waitForSelector']('.summary-title'), await _0x337c83(0x320), await _0x3f9c7e['click']('#continue_button'), await _0x337c83(0x320), console['log'](_0x27dcd5() + '\x20[' + _0x56c3ca['name'] + ']\x20Task\x20' + (_0x577716 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x3f9c7e['waitForSelector']('#checkout_credit_card_vault'), await _0x337c83(0x3e8);
            var _0x39b1c7 = await _0x3f9c7e['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0xbd1a36 = await _0x39b1c7['contentFrame']();
            await _0xbd1a36['click']('#number'), await _0x337c83(0x3e8), await _0xbd1a36['type']('#number', '' + _0x2c44b7[_0x577716]['CardNumber'], { 'delay': 0x78 }), _0x39b1c7 = await _0x3f9c7e['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0xbd1a36 = await _0x39b1c7['contentFrame'](), await _0x337c83(0x1c2), await _0xbd1a36['click']('#name'), await _0x337c83(0x1f4), await _0xbd1a36['type']('#name', '' + _0x2c44b7[_0x577716]['NameOnCard'], { 'delay': 0x78 }), _0x39b1c7 = await _0x3f9c7e['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0xbd1a36 = await _0x39b1c7['contentFrame'](), await _0x337c83(0x1c2), await _0xbd1a36['click']('#expiry'), await _0x337c83(0x1f4), await _0xbd1a36['type']('#expiry', '' + _0x2c44b7[_0x577716]['ExpiryDate'], { 'delay': 0x78 }), _0x39b1c7 = await _0x3f9c7e['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0xbd1a36 = await _0x39b1c7['contentFrame'](), await _0x337c83(0x1c2), await _0xbd1a36['click']('#verification_value'), await _0x337c83(0x1f4), await _0xbd1a36['type']('#verification_value', '' + _0x2c44b7[_0x577716]['CVV'], { 'delay': 0x78 }), await _0x3f9c7e['$eval']('#accepts-flag-raffle', _0x1043f8 => _0x1043f8['click']()), await _0x337c83(0x7d0), console['log'](_0x27dcd5() + '\x20[' + _0x56c3ca['name'] + ']\x20Task\x20' + (_0x577716 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x3f9c7e['$eval']('#continue_button', _0x291afd => _0x291afd['click']()), await _0x337c83(0x1b58), await _0x3f9c7e['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x3f9c7e['$eval']('.edit_checkout.animate-floating-labels', _0x9f34de => _0x9f34de['submit']()), await _0x337c83(0x7d0);
            try {
                await _0x3f9c7e['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), console['log'](_0x374717['green'](_0x27dcd5() + '\x20[' + _0x56c3ca['name'] + ']\x20Task\x20' + (_0x577716 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x5a994e) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x5a994e['message']);
            }
            var _0x56cb13 = await _0x17584c(_0x2c44b7[_0x577716], _0x56c3ca, 'dev', ![]), _0x4b008a = await _0x17584c(_0x2c44b7[_0x577716], _0x56c3ca, 'pub', ![]);
            const _0x417ff7 = {
                'succesDEVMSG': { 'embeds': [_0x56cb13] },
                'succesPUBMSG': { 'embeds': [_0x4b008a] }
            };
            try {
                _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], _0x417ff7['succesDEVMSG']), await _0x337c83(0xc8), await _0x38601b(_0x3fc099, _0x417ff7['succesDEVMSG']), await _0x337c83(0xc8), await _0x38601b(_0x54c664, _0x417ff7['succesPUBMSG']);
            } catch (_0x788d75) {
                console['log'](_0x374717['yellow'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0x577716 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x788d75));
            }
        } catch (_0x27ca1e) {
            console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0x577716 + 0x1) + '\x20:\x20' + _0x27ca1e)), _0x3f5bbd = '' + _0x27ca1e;
            var _0x4ddef9 = await _0x17584c(kickz[_0x577716], _0x56c3ca, 'dev', !![], _0x3f5bbd);
            EMBEDS['errorDEV'] = { 'embeds': [_0x4ddef9] }, _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], EMBEDS['errorDEV']), await _0x38601b(_0x4fe737, EMBEDS['errorDEV']), _0x2966dc = 'yes';
        } finally {
            _0xd32515 && _0xd32515['close']();
            if (_0x2966dc == 'yes' && _0x2ec3ba != 0x5) {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x56c3ca['name'] + ']\x20Task\x20' + (_0x577716 + 0x1) + '\x20:\x20Retrying')), _0x577716 = _0x577716 - 0x1, _0x2ec3ba = _0x2ec3ba + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x2a6b6a['delay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['delay']);
        }
    }
}
async function _0x5d8a90(_0x1dd9db, _0x399051, _0x205fd0) {
    var _0x1d9967 = ![], _0x264922 = ![];
    if (_0x2a6b6a['captchaKey'] == '' || _0x2a6b6a['captchaKey'] == undefined)
        return console['log'](_0x374717['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x4a6475['use'](_0x4c388a()), _0x4a6475['use'](_0x3efdc3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2a6b6a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4d77ed = 0x0; _0x4d77ed < _0x399051['length']; _0x4d77ed++) {
        var _0xa9b702, _0x50c773 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x399051[_0x4d77ed]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x399051[_0x4d77ed]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0xb0edae
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2a6b6a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1b89b3
                }
            ]
        }];
        const _0x4e71e8 = { 'embeds': _0x50c773 };
        _0x4429cd(_0x1dd9db['name'] + '\x20Task\x20' + (_0x4d77ed + 0x1) + '\x20/\x20' + _0x399051['length'] + '\x20||\x20File:\x20' + _0xb07819 + '\x20Proxies:\x20' + _0x2e7035), await _0x223f18(_0x399051, _0x4d77ed);
        var _0x39caab = await _0x17584c(_0x399051[_0x4d77ed], _0x1dd9db, 'dev', ![]), _0x4dbd5d = await _0x17584c(_0x399051[_0x4d77ed], _0x1dd9db, 'pub', ![]);
        const _0x5e005e = {
            'succesDEVMSG': { 'embeds': [_0x39caab] },
            'succesPUBMSG': { 'embeds': [_0x4dbd5d] }
        };
        if (_0x399051[_0x4d77ed]['Email'] == '' || _0x399051[_0x4d77ed]['Url'] == '' || _0x399051[_0x4d77ed]['FirstName'] == '' || _0x399051[_0x4d77ed]['LastName'] == '') {
            console['log'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0x4d77ed + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2a6b6a['useRandomProxy'] = ![])
            var _0x1a5bd5 = _0x205fd0[_0x4d77ed]['split'](':');
        else
            var _0x32e788 = Math['round'](Math['random']() * (_0x205fd0['length'] - 0x1)), _0x1a5bd5 = _0x205fd0[_0x32e788]['split'](':');
        const _0x8e8895 = await _0x4a6475['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1a5bd5[0x0] + ':' + _0x1a5bd5[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x8d28b9 = await _0x8e8895['newPage']();
            await _0x8d28b9['authenticate']({
                'username': '' + _0x1a5bd5[0x2],
                'password': '' + _0x1a5bd5[0x3]
            }), console['log'](_0x27dcd5() + '\x20[' + _0x1dd9db['name'] + ']\x20Task\x20' + (_0x4d77ed + 0x1) + '\x20:\x20Getting\x20Session'), await _0x8d28b9['setRequestInterception'](!![]), _0x8d28b9['on']('request', _0x215718 => {
                _0x215718['resourceType']() === 'image' || _0x215718['resourceType']() === 'font' || _0x215718['resourceType']() === 'media' ? _0x215718['abort']() : _0x215718['continue']();
            }), await _0x8d28b9['goto']('' + _0x399051[_0x4d77ed]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x8d28b9['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x27dcd5() + '\x20[' + _0x1dd9db['name'] + ']\x20Task\x20' + (_0x4d77ed + 0x1) + '\x20:\x20Filling\x20Information'), await _0x8d28b9['type']('#comp_firstname', '' + _0x399051[_0x4d77ed]['FirstName']), await _0x8d28b9['waitForSelector']('#comp_lastname'), await _0x8d28b9['type']('#comp_lastname', '' + _0x399051[_0x4d77ed]['LastName']), await _0x8d28b9['waitForSelector']('#comp_email'), await _0x8d28b9['type']('#comp_email', '' + _0x399051[_0x4d77ed]['Email']), await _0x8d28b9['waitForSelector']('#comp_paypalemail'), await _0x8d28b9['type']('#comp_paypalemail', '' + _0x399051[_0x4d77ed]['Email']), await _0x8d28b9['waitForSelector']('#comp_mobile_end'), await _0x8d28b9['type']('#comp_mobile_end', '' + _0x399051[_0x4d77ed]['Phone']), await _0x8d28b9['waitForSelector']('#comp_dob'), await _0x8d28b9['type']('#comp_dob', '08/09/1992'), console['log'](_0x27dcd5() + '\x20[' + _0x1dd9db['name'] + ']\x20Task\x20' + (_0x4d77ed + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x399051[_0x4d77ed]['Size'] == 'RANDOM') {
                const _0x10c167 = await _0x8d28b9['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4dba52 => {
                    return _0x4dba52['map'](_0x2ca493 => _0x2ca493['value']);
                });
                var _0x4acb78 = Math['round'](Math['random']() * (_0x10c167['length'] - 0x2));
                await _0x8d28b9['select']('#shoesize', _0x10c167[_0x4acb78 + 0x1]), await _0x337c83(0x3e8);
            } else {
                const _0x54f2be = await _0x8d28b9['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3f233b => {
                    return _0x3f233b['map'](_0x432caa => _0x432caa['innerText']);
                }), _0x145870 = await _0x8d28b9['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x21f799 => {
                    return _0x21f799['map'](_0x26fbf0 => _0x26fbf0['value']);
                });
                var _0x19bd89 = _0x399051[_0x4d77ed]['Size'];
                for (var _0x2750ab = 0x1; _0x2750ab < _0x145870['length']; _0x2750ab++) {
                    var _0x1ca6c7 = _0x54f2be[_0x2750ab]['split']('\x20')[0x0];
                    if (_0x1ca6c7 == _0x19bd89) {
                        await _0x8d28b9['select']('#shoesize', _0x145870[_0x2750ab]);
                        break;
                    } else {
                        if (_0x2750ab + 0x1 == _0x145870['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x8d28b9['waitForSelector']('#comp_address1'), await _0x8d28b9['type']('#comp_address1', _0x399051[_0x4d77ed]['Address1'] + '\x20' + _0x399051[_0x4d77ed]['HouseNumber']), await _0x8d28b9['waitForSelector']('#comp_address2'), await _0x8d28b9['type']('#comp_address2', '' + _0x399051[_0x4d77ed]['Address2']), await _0x8d28b9['waitForSelector']('#comp_address2'), await _0x8d28b9['type']('#comp_address3', '' + _0x399051[_0x4d77ed]['City']), await _0x8d28b9['waitForSelector']('#comp_postcode'), await _0x8d28b9['type']('#comp_postcode', '' + _0x399051[_0x4d77ed]['Zip']), console['log'](_0x27dcd5() + '\x20[' + _0x1dd9db['name'] + ']\x20Task\x20' + (_0x4d77ed + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x337c83(0x4b0), await _0x8d28b9['click']('label#emailhold'), await _0x337c83(0x5dc), await _0x8d28b9['click']('#preauth_tandc_email\x20>\x20label'), await _0x337c83(0x5dc), await _0x8d28b9['click']('#submit'), await _0x8d28b9['waitForSelector']('#paymentWrap'), console['log'](_0x27dcd5() + '\x20[' + _0x1dd9db['name'] + ']\x20Task\x20' + (_0x4d77ed + 0x1) + '\x20:\x20' + _0x374717['blue']('Awaiting\x20Paypal\x20Payment')), _0x8e8895['on']('targetcreated', async _0x4a71b1 => {
                if (_0x4a71b1['type']() === 'page') {
                    const _0x5508ab = await _0x4a71b1['page']();
                    async function _0x3b08ee() {
                        try {
                            await _0x8d28b9['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x264922 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x18a072() {
                        try {
                            await _0x8d28b9['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x1d9967 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x18a072(), _0x3b08ee(), await _0x337c83(0x493e0);
                }
            });
            async function _0x277a80() {
                for (let _0x563ec5 = 0x0; _0x563ec5 < 0x12c; _0x563ec5++) {
                    if (_0x1d9967 == !![]) {
                        console['log'](_0x374717['green'](_0x27dcd5() + '\x20[' + _0x1dd9db['name'] + ']\x20Task\x20' + (_0x4d77ed + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '')
                            try {
                                await _0x38601b(_0x2a6b6a['webhook'], _0x5e005e['succesDEVMSG']);
                            } catch {
                            }
                        await _0x337c83(0xc8), await _0x38601b(_0x3fc099, _0x5e005e['succesDEVMSG']), await _0x337c83(0xc8);
                        try {
                            await _0x38601b(_0x54c664, _0x5e005e['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x264922)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x337c83(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x337c83(0xbb8), await _0x8d28b9['click']('.zoid-outlet'), await _0x337c83(0x7d0), await _0x277a80();
        } catch (_0xda7022) {
            console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x1dd9db['name'] + ']\x20Task\x20' + (_0x4d77ed + 0x1) + '\x20:\x20' + _0xda7022)), _0xa9b702 = '' + _0xda7022;
            var _0x2e8926 = await _0x17584c(_0x399051[_0x4d77ed], _0x1dd9db, 'dev', !![], _0xa9b702);
            _0x5e005e['errorDEV'] = { 'embeds': [_0x2e8926] }, _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], _0x5e005e['errorDEV']), await _0x38601b(_0x4fe737, _0x5e005e['errorDEV']);
        } finally {
            _0x8e8895 && _0x8e8895['close'](), console['log']('Waiting\x20for\x20' + _0x2a6b6a['delay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['delay']);
        }
    }
}
async function _0x3c887b(_0x1b1a21, _0x31dea0, _0xfc9ab4) {
    _0x4a6475['use'](_0x4c388a()), _0x4a6475['use'](_0x3efdc3({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2a6b6a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xf34d4f = 0x0; _0xf34d4f < _0x31dea0['length']; _0xf34d4f++) {
        _0x4429cd(_0x1b1a21['name'] + '\x20Task\x20' + (_0xf34d4f + 0x1) + '\x20/\x20' + _0x31dea0['length'] + '\x20||\x20File:\x20' + _0xb07819 + '\x20Proxies:\x20' + _0x2e7035);
        var _0x41f7ef = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xb0edae
                },
                {
                    'name': 'Product',
                    'value': '' + _0x31dea0[_0xf34d4f]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x31dea0[_0xf34d4f]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2a6b6a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2a6b6a['version']
                }
            ]
        }];
        const _0xed3137 = { 'embeds': _0x41f7ef };
        await _0x223f18(_0x31dea0, _0xf34d4f);
        if (_0x31dea0[_0xf34d4f]['Email'] == '' || _0x31dea0[_0xf34d4f]['Password'] == '' || _0x31dea0[_0xf34d4f]['FirstName'] == '' || _0x31dea0[_0xf34d4f]['LastName'] == '') {
            console['log'](_0x27dcd5() + '\x20[' + _0x1b1a21['name'] + ']\x20Task\x20' + (_0xf34d4f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x31dea0[_0xf34d4f]['Password'] == '' || _0x31dea0[_0xf34d4f]['Password'] == undefined) && (_0x31dea0[_0xf34d4f]['Password'] = 'ErehsaWonRaj1!');
        if (_0x2a6b6a['useRandomProxy'] = ![])
            var _0x94f112 = _0xfc9ab4[_0xf34d4f]['split'](':');
        else
            var _0x5f016d = Math['round'](Math['random']() * (_0xfc9ab4['length'] - 0x1)), _0x94f112 = _0xfc9ab4[_0x5f016d]['split'](':');
        const _0x357ac4 = await _0x4a6475['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x94f112[0x0] + ':' + _0x94f112[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x9f0d56 = await _0x357ac4['newPage']();
            await _0x9f0d56['authenticate']({
                'username': '' + _0x94f112[0x2],
                'password': '' + _0x94f112[0x3]
            }), console['log'](_0x27dcd5() + '\x20[' + _0x1b1a21['name'] + ']\x20Task\x20' + (_0xf34d4f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x9f0d56['setRequestInterception'](!![]), _0x9f0d56['on']('request', _0x18c5aa => {
                _0x18c5aa['resourceType']() === 'image' || _0x18c5aa['resourceType']() === 'font' || _0x18c5aa['resourceType']() === 'media' ? _0x18c5aa['abort']() : _0x18c5aa['continue']();
            }), await _0x9f0d56['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x9f0d56['goto']('' + _0x31dea0[_0xf34d4f]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x9f0d56['waitForSelector']('#btnPdpAtb'), console['log'](_0x27dcd5() + '\x20[' + _0x1b1a21['name'] + ']\x20Task\x20' + (_0xf34d4f + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x31dea0[_0xf34d4f]['Size']);
            const _0x17a3ce = await _0x9f0d56['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x22c258 => {
                return _0x22c258['map'](_0x187af4 => _0x187af4['innerText']);
            }), _0x2568cf = await _0x9f0d56['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x393eb5 = ![];
            if (_0x31dea0[_0xf34d4f]['Size'] == 'RANDOM') {
                var _0x4fcc1c = Math['round'](Math['random']() * (_0x2568cf['length'] - 0x1));
                await _0x2568cf[_0x4fcc1c]['click']();
            } else
                for (var _0x8ac8f = 0x0; _0x8ac8f < _0x17a3ce['length']; _0x8ac8f++) {
                    if (_0x17a3ce[_0x8ac8f] != _0x31dea0[_0xf34d4f]['Size'])
                        continue;
                    try {
                        await _0x2568cf[_0x8ac8f]['click']();
                    } catch {
                        console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x1b1a21['name'] + ']\x20Task\x20' + (_0xf34d4f + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x393eb5 = !![];
                    }
                }
            if (_0x393eb5)
                continue;
            await _0x337c83(0x578), await _0x9f0d56['click']('#btnPdpAtb'), await _0x9f0d56['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x337c83(0x3e8), console['log'](_0x27dcd5() + '\x20[' + _0x1b1a21['name'] + ']\x20Task\x20' + (_0xf34d4f + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x9f0d56['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x9f0d56['waitForSelector']('#email'), await _0x9f0d56['type']('#email', _0x31dea0[_0xf34d4f]['Email']), await _0x337c83(0x226), await _0x9f0d56['click']('#guest-submit'), await _0x337c83(0x1b58), console['log'](_0x27dcd5() + '\x20[' + _0x1b1a21['name'] + ']\x20Task\x20' + (_0xf34d4f + 0x1) + '\x20:\x20Filling\x20Information'), await _0x9f0d56['waitForSelector']('#firstname'), await _0x9f0d56['type']('#firstname', _0x31dea0[_0xf34d4f]['FirstName'], 0x1f4), await _0x337c83(0x190), await _0x9f0d56['waitForSelector']('#surname'), await _0x9f0d56['type']('#surname', _0x31dea0[_0xf34d4f]['LastName'], 0x1f4), await _0x337c83(0x190), await _0x9f0d56['waitForSelector']('#mobile'), await _0x9f0d56['type']('#mobile', _0x31dea0[_0xf34d4f]['Phone'], 0x1f4), await _0x337c83(0x190), await _0x9f0d56['click']('#enterManualDiv'), await _0x337c83(0x5dc), await _0x9f0d56['waitForSelector']('#address1'), await _0x9f0d56['type']('#address1', _0x31dea0[_0xf34d4f]['Address1'] + '\x20' + _0x31dea0[_0xf34d4f]['HouseNumber'], 0x226), await _0x337c83(0x384), await _0x9f0d56['waitForSelector']('#address2'), await _0x9f0d56['type']('#address2', '' + _0x31dea0[_0xf34d4f]['Address2'], 0x226), await _0x337c83(0x320);
            const _0x2284a4 = await _0x9f0d56['$$eval']('#countryselect_view3\x20>\x20option', _0x5e43c9 => {
                return _0x5e43c9['map'](_0x4f7e90 => _0x4f7e90['value']);
            });
            var _0x3013c0;
            for (var _0x4fb168 = 0x0; _0x4fb168 < _0x2284a4['length']; _0x4fb168++) {
                if (_0x2284a4[_0x4fb168]['startsWith']('' + _0x31dea0[_0xf34d4f]['Country'])) {
                    _0x3013c0 = _0x2284a4[_0x4fb168];
                    break;
                }
                continue;
            }
            await _0x9f0d56['select']('#countryselect_view3', '' + _0x3013c0), await _0x9f0d56['waitForSelector']('#address4'), await _0x9f0d56['type']('#address4', '' + _0x31dea0[_0xf34d4f]['City'], 0x1f4), await _0x337c83(0x384), await _0x9f0d56['waitForSelector']('#postcode'), await _0x9f0d56['type']('#postcode', '' + _0x31dea0[_0xf34d4f]['Zip'], 0x1f4), await _0x337c83(0x4b0);
            const _0xa57190 = await _0x9f0d56['url']();
            console['log'](_0x27dcd5() + '\x20[' + _0x1b1a21['name'] + ']\x20Task\x20' + (_0xf34d4f + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x44295c = _0xa57190['split']('?')[0x1], _0x4d1df7 = await _0x9f0d56['$']('#co_address_submit');
            await _0x4d1df7['evaluate'](_0x257659 => _0x257659['click']()), await _0x337c83(0x1388), await _0x9f0d56['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x44295c), console['log'](_0x27dcd5() + '\x20[' + _0x1b1a21['name'] + ']\x20Task\x20' + (_0xf34d4f + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x9f0d56['waitForSelector']('#paymentbuttons'), await _0x337c83(0x1388), await _0x9f0d56['click']('#paymentbuttons\x20>\x20div'), await _0x337c83(0x1c2), await _0x9f0d56['waitForSelector']('#card-number'), await _0x9f0d56['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x4b2f66 = await _0x9f0d56['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x38c5d2 = await _0x4b2f66['contentFrame']();
            await _0x38c5d2['waitForSelector']('.InputContainer'), await _0x38c5d2['click']('.InputContainer\x20>\x20input'), await _0x337c83(0x578), await _0x9f0d56['type']('#card-number', '' + _0x31dea0[_0xf34d4f]['CreditNumber']), await _0x337c83(0xfa), await _0x9f0d56['type']('#card-expiry', '' + _0x31dea0[_0xf34d4f]['ExpiryDate']), await _0x337c83(0xfa), await _0x9f0d56['type']('#card-cvc', '' + _0x31dea0[_0xf34d4f]['CVV']), await _0x337c83(0x7d0), await _0x9f0d56['click']('#card-button'), console['log'](_0x27dcd5() + '\x20[' + _0x1b1a21['name'] + ']\x20Task\x20' + (_0xf34d4f + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x9f0d56['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x374717['green'](_0x27dcd5() + '\x20[' + _0x1b1a21['name'] + ']\x20Task\x20' + (_0xf34d4f + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x38601b(_0x3fc099, _0xed3137);
            } catch {
                console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x1b1a21['name'] + ']\x20Task\x20' + (_0xf34d4f + 0x1) + '\x20:\x203DS\x20Failed')), _0x41f7ef[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x41f7ef[0x0]['description'] = '3DS\x20Failed', await _0x38601b(_0x4fe737, _0xed3137);
            }
        } catch (_0x1d2dd7) {
            console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x1b1a21['name'] + ']\x20Task\x20' + (_0xf34d4f + 0x1) + '\x20:\x20' + _0x1d2dd7)), _0x41f7ef[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x41f7ef[0x0]['description'] = '' + _0x1d2dd7, await _0x38601b(_0x4fe737, _0xed3137);
        } finally {
            _0x357ac4 && _0x357ac4['close']();
            if (_0xf34d4f + 0x1 == _0x31dea0['length']) {
                console['log'](_0x374717['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x337c83(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x2a6b6a['AfewDelay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['AfewDelay']);
        }
    }
}
async function _0x3894a9(_0x43b505, _0x46f358, _0x3f2787, _0x4906dc, _0x4b22f6) {
    var _0x183b2e, _0x2fdef2 = {}, _0x342c41 = [], _0x5738c4 = {}, _0x155d00 = [
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
    !_0x4906dc && (_0x4906dc = {});
    if (_0x46f358 != 'ver') {
        _0x4429cd(_0x3f2787['name'] + '\x20Task\x20' + (_0x43b505 + 0x1) + '\x20/\x20' + _0x4906dc['length'] + '\x20||\x20File:\x20' + _0xb07819 + '\x20Proxies:\x20' + _0x2e7035), await _0x223f18(_0x4906dc, _0x43b505), _0x342c41 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xb0edae
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4906dc[_0x43b505]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2a6b6a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1b89b3
                }
            ]
        }], _0x5738c4 = { 'embeds': _0x342c41 }, _0x2fdef2 = _0x3f2787['data'];
        _0x46f358 == 'exp' ? _0x2fdef2['data']['attributes']['email'] = '' + _0x4906dc[_0x43b505]['FirstName'] + _0x4906dc[_0x43b505]['LastName'] + _0x2a6b6a['catchall'] : _0x2fdef2['data']['attributes']['email'] = '' + _0x4906dc[_0x43b505]['Email'];
        if (_0x4906dc[_0x43b505]['Size'] == 'RANDOM') {
        }
        _0x2fdef2['data']['attributes']['properties']['$first_name'] = '' + _0x4906dc[_0x43b505]['FirstName'], _0x2fdef2['data']['attributes']['properties']['$last_name'] = '' + _0x4906dc[_0x43b505]['LastName'], _0x2fdef2['data']['attributes']['properties']['$address1'] = _0x4906dc[_0x43b505]['Address1'] + '\x20' + _0x4906dc[_0x43b505]['Address2'] + '\x20' + _0x4906dc[_0x43b505]['HouseNumber'], _0x2fdef2['data']['attributes']['properties']['$zip'] = '' + _0x4906dc[_0x43b505]['Zip'], _0x2fdef2['data']['attributes']['properties']['$city'] = '' + _0x4906dc[_0x43b505]['City'], _0x2fdef2['data']['attributes']['properties']['$country'] = '' + _0x4906dc[_0x43b505]['Country'], _0x2fdef2['data']['attributes']['properties']['Size'] = '' + _0x4906dc[_0x43b505]['Size'], _0x2fdef2['data']['attributes']['properties']['$phone_number'] = '' + _0x4906dc[_0x43b505]['Phone'], _0x2fdef2['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4906dc[_0x43b505]['Follower'];
    }
    if (_0x2a6b6a['useRandomProxy'] = ![])
        var _0x59d90d = _0x4b22f6[_0x43b505]['split'](':');
    else
        var _0x4ef673 = Math['round'](Math['random']() * (_0x4b22f6['length'] - 0x1)), _0x59d90d = _0x4b22f6[_0x4ef673]['split'](':');
    var _0x567b62 = {
        'jar': _0x3d3fd7,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x3f2787['url'],
        'headers': _0x3f2787['headers'],
        'body': JSON['stringify'](_0x2fdef2),
        'proxy': 'http://' + _0x59d90d[0x2] + ':' + _0x59d90d[0x3] + '@' + _0x59d90d[0x0] + ':' + _0x59d90d[0x1]
    };
    return _0x46f358 != 'ver' && (_0x567b62['url'] = _0x3f2787['url'], _0x567b62['headers'] = _0x3f2787['headers']), _0x46f358 == 'ver' && (_0x567b62['method'] = 'GET'), new Promise(function (_0x48e702, _0x1aecb0) {
        callback = async (_0xd36f93, _0x255fde, _0xcc478d) => {
            if (!_0xd36f93 && _0x255fde['statusCode'] == 0xca || !_0xd36f93 && _0x255fde['statusCode'] == 0xc8) {
                if (_0x46f358 != 'ver') {
                    var _0x5373f1 = await _0x17584c(_0x4906dc[_0x43b505], _0x3f2787, 'dev', ![]), _0x42cf69 = await _0x17584c(_0x4906dc[_0x43b505], _0x3f2787, 'pub', ![]);
                    const _0x187643 = {
                        'succesDEVMSG': { 'embeds': [_0x5373f1] },
                        'succesPUBMSG': { 'embeds': [_0x42cf69] }
                    };
                    if (_0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '')
                        try {
                            await _0x38601b(_0x2a6b6a['webhook'], _0x187643['succesDEVMSG']);
                        } catch {
                        }
                    await _0x337c83(0xc8), await _0x38601b(_0x3fc099, _0x187643['succesDEVMSG']), await _0x337c83(0xc8);
                    try {
                        await _0x38601b(_0x54c664, _0x187643['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x48e702(console['log'](_0x374717['green'](_0x27dcd5() + '\x20[' + _0x3f2787['name'] + ']\x20Task\x20' + (_0x43b505 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x46f358 != 'ver') {
                    var _0x176a1e = '' + _0xd36f93, _0x5dbb06 = await _0x17584c(_0x4906dc[_0x43b505], _0x3f2787, 'dev', !![], _0x176a1e), _0x35b1d9 = {};
                    _0x35b1d9['errorDEV'] = { 'embeds': [_0x5dbb06] }, _0x2a6b6a['webhook'] != undefined && _0x2a6b6a['webhook'] != '' && await _0x38601b(_0x2a6b6a['webhook'], _0x35b1d9['errorDEV']), await _0x38601b(_0x4fe737, _0x35b1d9['errorDEV']);
                }
                _0x1aecb0(console['log'](_0x27dcd5() + '\x20[' + _0x3f2787['name'] + ']\x20Task\x20' + (_0x43b505 + 0x1) + ':\x20' + _0xd36f93));
            }
        };
        try {
            _0x46f358 != 'ver' && console['log'](_0x27dcd5() + '\x20[' + _0x3f2787['name'] + ']\x20Task\x20' + (_0x43b505 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2fdef2['data']['attributes']['email']), _0x17670e(_0x567b62, callback);
        } catch (_0x3fc902) {
            console['log'](_0x27dcd5() + '\x20Task\x20' + (_0x43b505 + 0x1) + ':\x20' + _0x3fc902);
        }
    });
}
;
async function _0x971be4(_0x3f49c8, _0x29b8a4, _0x5f0126) {
    _0x4429cd('' + _0x29b8a4), _0x4a6475['use'](_0x4c388a());
    const _0x1c4407 = await _0x4a6475['launch']({
        'headless': ![],
        'args': [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security'
        ]
    });
    try {
        console['log'](_0x27dcd5() + '\x20[' + _0x29b8a4 + ']\x20Getting\x20Session');
        const _0x1fe1ef = await _0x1c4407['newPage']();
        await _0x1fe1ef['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x1fe1ef['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x27dcd5() + '\x20[' + _0x29b8a4 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x1fe1ef['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x27dcd5() + '\x20[' + _0x29b8a4 + ']\x20Successfully\x20logged\x20in'), await _0x337c83(0x2710);
        } catch {
            throw new Error('Login\x20session\x20expired');
        }
        for (var _0x155753 = 0x0; _0x155753 < _0x3f49c8['length']; _0x155753++) {
            console['log'](_0x27dcd5() + '\x20[' + _0x29b8a4 + ']\x20Task\x20' + (_0x155753 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x4429cd(_0x29b8a4 + '\x20Task\x20' + (_0x155753 + 0x1) + '\x20/\x20' + _0x3f49c8['length']), await _0x1fe1ef['goto']('' + _0x3f49c8[_0x155753], { 'waitUntil': 'networkidle2' }), await _0x337c83(0xbb8);
            try {
                const _0x263ff8 = await _0x1fe1ef['$']('#challenge-heading');
                _0x263ff8 && console['log'](_0x27dcd5() + '\x20[' + _0x29b8a4 + ']\x20Task\x20' + (_0x155753 + 0x1) + '\x20:\x20' + _0x374717['yellow']('2FA\x20Required'));
                console['log']('after\x20network'), await _0x1fe1ef['waitForSelector']('#payment-submit-btn', { 'timeout': 0x493e0 }), console['log']('after\x20waitfor'), await _0x337c83(0x5dc), await _0x1fe1ef['$eval']('#payment-submit-btn', _0x3fc339 => _0x3fc339['click']()), await _0x1fe1ef['click']('#payment-submit-btn');
                try {
                    await _0x1fe1ef['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x337c83(0x5dc), console['log'](_0x374717['green'](_0x27dcd5() + '\x20[' + _0x29b8a4 + ']\x20Task\x20' + (_0x155753 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x56a3df) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x56a3df['message']);
                }
            } catch {
            }
            await _0x337c83(0xf4240);
        }
    } catch (_0x5c2b68) {
        console['log'](_0x374717['red']('' + _0x5c2b68));
    } finally {
        await _0x1c4407['close']();
    }
}
async function _0x46560b() {
    await _0x424a42(), console['clear']();
    if (_0x1b89b3 != 'devkey') {
        let _0x3200fb = await _0x2cbfb5['autoUpdate']();
        if (_0x3200fb === 'yes')
            return _0x15c0af('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x99159 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x337c83(0x2710);
        ;
    }
    await _0x500d55(_0x99159);
    if (_0x548d64 === ![])
        return console['log']('Closing\x20Browser'), await _0x337c83(0xbb8);
    else
        try {
            var _0x54fc55 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0xb0edae
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x1b89b3
                    }
                ]
            }];
            const _0x4244a1 = { 'embeds': _0x54fc55 };
            var _0x5be190 = await _0x17584c(null, null, 'open', ![]);
            const _0x53df3c = { 'openDEVMSG': { 'embeds': [_0x5be190] } };
            await _0x38601b(_0x4e13a7, _0x53df3c['openDEVMSG']);
            async function _0x282daa() {
                _0x4429cd('JRaffles\x20' + _0x1b89b3), console['clear'](), console['log']('Welcome\x20to\x20' + _0x374717['cyan']('JRaffles();') + '\x20' + _0x1b89b3), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x342b67 = 0x0; _0x342b67 < _0x5995b0['length'] - 0x2; _0x342b67++) {
                    if (_0x5995b0[_0x342b67]['name'] === 'Reload\x20Settings' || _0x5995b0[_0x342b67]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x342b67 + ')\x20[' + _0x5995b0[_0x342b67]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x5995b0['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x5995b0['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0xc592e1();
                if (taskModule > _0x5995b0['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x337c83(0x3e8), _0x282daa();
                if (_0x5995b0[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x48f874(_0x5995b0[taskModule]['modules']);
                    var _0x290c5e = _0x5995b0[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x3bd4dd = await _0x1a9245(), _0x3ae413 = await _0x4861ec();
                    if (_0x3ae413[0x0]['Url'] == '' || _0x3ae413[0x0]['Url'] == undefined) {
                        await _0x267865(_0x3bd4dd);
                        var _0x164cd7 = await _0x4aefa4();
                        return await afewFunction('' + _0x40b6da[_0x164cd7], 'nor', _0x290c5e, _0x3ae413, _0x3bd4dd), _0x282daa();
                    }
                    return await afewFunction(_0x3ae413[0x0]['Url'], 'nor', _0x290c5e, _0x3ae413, _0x3bd4dd), _0x282daa();
                } else {
                    if (_0x5995b0[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x48f874(_0x5995b0[taskModule]['modules']);
                        var _0x290c5e = _0x5995b0[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x3bd4dd = await _0x1a9245(), _0x3364a6 = await _0x4861ec();
                            console['log']('Starting\x20' + _0x3364a6['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x5e79f7 = 0x0; _0x5e79f7 < _0x3364a6['length']; _0x5e79f7++) {
                                console['log'](_0x27dcd5() + '\x20[' + _0x290c5e['name'] + ']\x20Task\x20' + (_0x5e79f7 + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x56ab25(_0x5e79f7, 'nor', _0x290c5e, _0x3364a6, _0x3bd4dd), console['log'](_0x27dcd5() + '\x20[' + _0x290c5e['name'] + ']\x20Sleeping\x20for\x20' + _0x2a6b6a['MahaDelay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['MahaDelay']);
                                } catch (_0xf8faf6) {
                                    console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x290c5e['name'] + ']\x20Task\x20' + (_0x5e79f7 + 0x1) + ':\x20Error\x20' + _0xf8faf6));
                                }
                            }
                            ;
                            return _0x282daa();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x3bd4dd = await _0x1a9245();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x4adb4a(), _0x2013ae = linksRaw['split'](';'), console['log'](_0x2013ae['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x5e79f7 = 0x0; _0x5e79f7 < _0x2013ae['length']; _0x5e79f7++) {
                                    _0x290c5e['url'] = _0x2013ae[_0x5e79f7], console['log'](_0x27dcd5() + '\x20[' + _0x290c5e['name'] + ']\x20Task\x20' + (_0x5e79f7 + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x56ab25(_0x5e79f7, 'ver', _0x290c5e, _0x3364a6, _0x3bd4dd), console['log'](_0x27dcd5() + '\x20[' + _0x290c5e['name'] + ']\x20Sleeping\x20for\x20' + _0x2a6b6a['verificationDelay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['verificationDelay']);
                                    } catch (_0x2b91b6) {
                                        console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x290c5e['name'] + ']\x20Task\x20' + (_0x5e79f7 + 0x1) + ':\x20Error\x20' + _0x2b91b6));
                                    }
                                }
                                ;
                                return _0x282daa();
                            }
                        }
                    } else {
                        if (_0x5995b0[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x48f874(_0x5995b0[taskModule]['modules']);
                            var _0x290c5e = _0x5995b0[taskModule]['modules'][taskFunction], _0x3bd4dd = await _0x1a9245(), _0x7c870a = await _0x4861ec();
                            return await _0x2a141f(_0x7c870a, _0x3bd4dd, _0x290c5e), await _0x337c83(0x1388), _0x282daa();
                        } else {
                            if (_0x5995b0[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x48f874(_0x5995b0[taskModule]['modules']);
                                var _0x290c5e = _0x5995b0[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x3bd4dd = await _0x1a9245(), _0x12e93e = await _0x4861ec();
                                    console['log']('Starting\x20' + _0x374717['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x5e79f7 = 0x0; _0x5e79f7 < _0x12e93e['length']; _0x5e79f7++) {
                                        console['log'](_0x27dcd5() + '\x20[' + _0x290c5e['name'] + ']\x20Task\x20' + (_0x5e79f7 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x3894a9(_0x5e79f7, 'nor', _0x290c5e, _0x12e93e, _0x3bd4dd);
                                        } catch (_0x5130a1) {
                                            console['log'](_0x374717['red'](_0x27dcd5() + '\x20[' + _0x290c5e['name'] + ']\x20Task\x20' + (_0x5e79f7 + 0x1) + ':\x20Task\x20failed\x20' + _0x5130a1));
                                        }
                                        console['log'](_0x27dcd5() + '\x20[' + _0x290c5e['name'] + ']\x20Sleeping\x20for\x20' + _0x2a6b6a['delay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['delay']);
                                    }
                                    return _0x282daa();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x3bd4dd = await _0x1a9245();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x4adb4a(), _0x2013ae = linksRaw['split'](';'), console['log'](_0x2013ae['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x5e79f7 = 0x0; _0x5e79f7 < _0x2013ae['length']; _0x5e79f7++) {
                                            try {
                                                _0x290c5e['url'] = _0x2013ae[_0x5e79f7], console['log'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Task\x20' + (_0x5e79f7 + 0x1) + ':\x20Getting\x20Session'), await _0x3894a9(_0x5e79f7, 'ver', _0x290c5e, null, _0x3bd4dd), console['log'](_0x27dcd5() + '\x20[' + _0x5995b0[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x2a6b6a['verificationDelay'] + '\x20ms'), await _0x337c83(_0x2a6b6a['verificationDelay']);
                                            } catch (_0x1b0591) {
                                                console['log'](_0x1b0591), await _0x337c83(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x282daa();
                                    }
                                }
                                ;
                            } else {
                                if (_0x5995b0[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x48f874(_0x5995b0[taskModule]['modules']);
                                    var _0x290c5e = _0x5995b0[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x488dbd('https://bouncewear.com/nl/account/register', _0x290c5e);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x5995b0[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x48f874(_0x5995b0[taskModule]['modules']);
                                        var _0x290c5e = _0x5995b0[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x3bd4dd = await _0x1a9245(), _0x3cf067 = await _0x4861ec();
                                            return await _0xb575e6('https://patta.nl/account/register', _0x290c5e, _0x3cf067, _0x3bd4dd), _0x282daa();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x3bd4dd = await _0x1a9245(), _0x3cf067 = await _0x4861ec();
                                                return await _0x53edd3('', _0x290c5e, _0x3cf067, _0x3bd4dd), _0x282daa();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x5995b0[taskModule]['name'] == 'SLAMJAM') {
                                            taskFunction = await _0x48f874(_0x5995b0[taskModule]['modules']);
                                            var _0x290c5e = _0x5995b0[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x3bd4dd = await _0x1a9245(), _0x1c50e4 = await _0x4861ec();
                                                return await _0x3689f7('https://slamjam.nl/account/register', _0x290c5e, _0x1c50e4, _0x3bd4dd), _0x282daa();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x3bd4dd = await _0x1a9245(), _0x1c50e4 = await _0x4861ec();
                                                    return await _0x35e966('', _0x290c5e, _0x1c50e4, _0x3bd4dd), _0x282daa();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x5995b0[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x48f874(_0x5995b0[taskModule]['modules']);
                                                var _0x290c5e = _0x5995b0[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x3bd4dd = await _0x1a9245(), _0x191e56 = await _0x4861ec();
                                                    return await _0x38e6ac('https://www.kickz.com/nl/login/', _0x290c5e, _0x191e56, _0x3bd4dd), _0x282daa();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x3bd4dd = await _0x1a9245(), _0x191e56 = await _0x4861ec();
                                                        return await _0x3be789(_0x290c5e, _0x191e56, _0x3bd4dd), _0x282daa();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x5995b0[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x48f874(_0x5995b0[taskModule]['modules']);
                                                    var _0x290c5e = _0x5995b0[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x3bd4dd = await _0x1a9245(), _0x184de2 = await _0x4861ec();
                                                        return await _0x5d8a90(_0x290c5e, _0x184de2, _0x3bd4dd), _0x282daa();
                                                    }
                                                } else {
                                                    if (_0x5995b0[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x337c83(0x3e8), _0x282daa();
                                                    else {
                                                        if (_0x5995b0[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x2bfdc7 = _0x5995b0[taskModule]['name'];
                                                            const _0x4127af = await _0x4adb4a();
                                                            var _0x2013ae = _0x4127af['split'](';');
                                                            await _0x971be4(_0x2013ae, _0x2bfdc7);
                                                        } else {
                                                            if (_0x5995b0[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x37285d = 0x0;
                                                                for (const _0x2c815e in _0x2a6b6a) {
                                                                    console['log']('(' + _0x37285d + ')\x20' + _0x2c815e + '\x20:\x20' + _0x2a6b6a[_0x2c815e]), _0x37285d++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x37285d + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x50625c = await _0x3e88fa();
                                                                if (_0x50625c == _0x37285d)
                                                                    return _0x282daa();
                                                                console['clear'];
                                                                var _0xa8002 = 0x0;
                                                                for (var _0x2c93b7 in _0x2a6b6a) {
                                                                    if (_0x50625c == _0xa8002) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x2c93b7 + '\x20:'), _0x2a6b6a[_0x2c93b7] = await _0x588bb4(), _0x1d991e['writeFileSync']('../settings.json', JSON['stringify'](_0x2a6b6a));
                                                                        break;
                                                                    } else
                                                                        _0xa8002++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x337c83(0xbb8), _0x282daa();
                                                            } else {
                                                                if (_0x5995b0[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x424a42(), _0x282daa();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x5995b0[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x539bd9 = await _0x224568();
                                                                        _0x539bd9 == 'ModuleVoorDeBoys' ? (await _0x267865(), await _0x4aefa4(), await afewFunction(_0x40b6da[_0x164cd7], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x337c83(0xbb8));
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
            await _0x282daa();
        } catch (_0x21a7a5) {
            return console['log'](_0x21a7a5), await _0x337c83(0x3a98);
        }
}
;
_0x4429cd('JRaffles\x20' + _0x1b89b3), _0x424a42();
try {
    _0x46560b();
} catch (_0x27085c) {
    var _0x585fec = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0xb0edae
            },
            {
                'name': 'Version',
                'value': '' + _0x1b89b3
            },
            {
                'name': 'Error',
                'value': '' + _0x27085c
            }
        ]
    }];
    const _0x401ff0 = { 'embeds': _0x585fec };
    _0x38601b(_0x4fe737, _0x401ff0);
}