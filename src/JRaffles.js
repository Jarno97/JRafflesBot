const { EmbedBuilder: _0xc5e70e } = require('discord.js');
var _0x34c18a = require('exe');
const { execFile: _0x37fadc } = require('child_process'), _0x1f09f1 = require('puppeteer-extra'), _0x3db05d = require('puppeteer-extra-plugin-recaptcha'), _0x468b50 = require('puppeteer-extra-plugin-stealth'), _0x331029 = require('chalk'), _0x194b67 = require('node-bash-title'), _0x4ec151 = require('fs'), _0x19fcd5 = require('axios'), _0x29222e = require('papaparse');
var _0x5030c7 = require('random-name');
const _0x18344e = require('request');
var _0x4f1d56 = require('prompt');
const _0x4dafe3 = _0x18344e['jar']();
var _0xfbfb8a = {};
const _0x23eaa6 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x5ea3ef = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x47a104 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x1bb8dc = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x510f41 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn';
var _0x5b06e5 = 'https://discord.com/api/webhooks/', _0x1a55fe = '' + _0x5b06e5 + _0x47a104, _0x5529a0 = '' + _0x5b06e5 + _0x1bb8dc, _0x57d5d3 = '' + _0x5b06e5 + _0x23eaa6, _0x2d1d89 = '' + _0x5b06e5 + _0x5ea3ef, _0x1a2d91 = '' + _0x5b06e5 + _0x510f41;
const _0x135d5d = JSON['parse'](_0x4ec151['readFileSync']('../package.json', 'utf-8')), _0x3744f4 = _0x135d5d['version'];
var _0x4c776e, _0x196516, _0x543ea8, _0x4c901a, _0x2021b1, _0x1642b, _0x194107, _0x1068fc;
const _0x5b96eb = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x2a6136 = ![];
const _0x2be686 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x1accad = '0123456789';
var _0x576d08 = _0x2be686['split']('');
const _0x54957f = require('auto-git-update'), { PageEmittedEvents: _0x23f7f9 } = require('puppeteer'), { getRandomValues: _0x548e70 } = require('crypto'), { resolve: _0x331e8b } = require('path'), { Console: _0x2e32e8 } = require('console'), _0xd1c17d = {
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
}, _0x27ee70 = new _0x54957f(_0xd1c17d);
async function _0x1438a6() {
    _0x2021b1 = _0x4ec151['readdirSync']('../proxies'), _0x4c901a = _0x4ec151['readdirSync']('../tasks'), _0xfbfb8a = JSON['parse'](_0x4ec151['readFileSync']('../settings.json', 'utf-8')), !_0xfbfb8a['delay'] && (_0xfbfb8a['delay'] = 0x2710, _0x4ec151['writeFileSync']('../settings.json', JSON['stringify'](_0xfbfb8a))), !_0xfbfb8a['captchaKey'] && (_0xfbfb8a['captchaKey'] = '', _0x4ec151['writeFileSync']('../settings.json', JSON['stringify'](_0xfbfb8a))), !_0xfbfb8a['useRandomProxy'] && (_0xfbfb8a['useRandomProxy'] = !![], _0x4ec151['writeFileSync']('../settings.json', JSON['stringify'](_0xfbfb8a))), !_0xfbfb8a['webhook'] && (_0xfbfb8a['webhook'] = '', _0x4ec151['writeFileSync']('../settings.json', JSON['stringify'](_0xfbfb8a))), _0xfbfb8a['MahaDelay'] = _0xfbfb8a['delay'], _0x5b06e5 = _0xfbfb8a['webhook'], _0x1642b = _0xfbfb8a['licenseKey'];
}
let _0x566b98, _0x15e76d = [], _0xffc8d4;
const _0x432b68 = _0xbfa809 => new Promise(_0x117284 => setTimeout(_0x117284, _0xbfa809));
function _0x4fede6(_0x5d6216, _0x5cf7ca) {
    return Math['floor'](Math['random']() * (_0x5cf7ca - _0x5d6216 + 0x1) + _0x5d6216);
}
async function _0x269478(_0xad347d) {
    return _0x19fcd5['get']('https://api.hyper.co/v4/licenses/' + _0xad347d, { 'headers': { 'Authorization': 'Bearer\x20' + _0x5b96eb } })['then'](_0x4d6ca3 => _0x4d6ca3['data'])['catch'](() => null);
}
;
async function _0x951a11(_0xbff944) {
    console['clear']();
    if (_0xbff944 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x4d70b7 = await _0x4f1d56['get']('License');
        if (_0x4d70b7['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x432b68(0xbb8), _0x951a11(_0xbff944);
        _0xbff944 = _0x4d70b7['License'], _0xfbfb8a['licenseKey'] = _0xbff944, _0x1642b = _0xbff944, _0x4ec151['writeFileSync']('../settings.json', JSON['stringify'](_0xfbfb8a));
    }
    console['log']('Checking\x20license\x20' + _0x1642b + '...'), await _0x432b68(0x320);
    const _0x19a4bd = await _0x269478(_0xbff944);
    _0x194107 = JSON['stringify'](_0x19a4bd['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x1068fc = JSON['stringify'](_0x19a4bd['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x19a4bd)
        return console['log']('License\x20not\x20found');
    if (!_0x19a4bd['user'])
        return console['log']('License\x20not\x20bound');
    return _0x19a4bd['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x2a6136 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x2a6136 = ![]);
}
async function _0x180b51() {
    var _0x268ba6 = await _0x4f1d56['get']('Module');
    return console['clear'](), _0x268ba6['Module'];
}
;
async function _0x56579d() {
    var _0x1222c4 = await _0x4f1d56['get']('Setting');
    return console['clear'](), _0x1222c4['Setting'];
}
async function _0x379ffe() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x124b4e = 0x0; _0x124b4e < _0x4c901a['length']; _0x124b4e++) {
        console['log']('\x20(' + _0x124b4e + ')\x20' + _0x4c901a[_0x124b4e]);
    }
    console['log']('');
    var _0xd1fe67 = await _0x4f1d56['get']('Task');
    if (_0xd1fe67['Task'] > _0x4c901a['length'] - 0x1 || isNaN(_0xd1fe67['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x432b68(0x3e8), _0x379ffe();
    var _0x480069 = _0x4ec151['readFileSync']('../tasks/' + _0x4c901a[_0xd1fe67['Task']], 'utf-8');
    return _0x543ea8 = _0x29222e['parse'](_0x480069, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x331029['blue'](_0x4c901a[_0xd1fe67['Task']])), _0x4c776e = _0x4c901a[_0xd1fe67['Task']], _0x543ea8;
}
async function _0x1d1357() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x4c8877 = 0x0; _0x4c8877 < _0x2021b1['length']; _0x4c8877++) {
        console['log']('\x20(' + _0x4c8877 + ')\x20' + _0x2021b1[_0x4c8877]);
    }
    console['log']('');
    var _0x495988 = await _0x4f1d56['get']('Proxies');
    if (_0x495988['Proxies'] > _0x2021b1['length'] - 0x1 || isNaN(_0x495988['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x432b68(0x3e8), _0x1d1357();
    var _0x1f76df = _0x4ec151['readFileSync']('../proxies/' + _0x2021b1[_0x495988['Proxies']], 'utf-8')['split']('\x0a');
    let _0x343ee4 = _0x1f76df['map']((_0x11136d, _0x3e3c5d) => {
        sanatizeProxy = _0x11136d['replace']('\x0d', '');
        if (_0x1f76df[_0x3e3c5d + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x196516 = _0x2021b1[_0x495988['Proxies']], console['clear'](), _0x343ee4;
}
async function _0x52f5a8() {
    var _0xb2da50 = await _0x4f1d56['get']('Value');
    return console['clear'](), _0xb2da50['Value'];
}
async function _0x12c26c(_0xa088df) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x6f1eea = 0x0; _0x6f1eea < _0xa088df['length']; _0x6f1eea++) {
        console['log']('\x20(' + _0x6f1eea + ')\x20[' + _0xa088df[_0x6f1eea]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x10d4b7 = await _0x4f1d56['get']('Module');
    return _0x10d4b7['Module'];
}
async function _0x3f9e91() {
    var _0x1ee9cc = await _0x4f1d56['get']('Password');
    return console['clear'](), _0x1ee9cc['Password'];
}
;
async function _0x494740() {
    var _0x2338d0 = await _0x4f1d56['get']('Links');
    return _0x2338d0['Links'];
}
;
async function _0x15711e() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x207669 = 0x0; _0x207669 < _0x15e76d['length']; _0x207669++) {
        console['log']('\x20(' + _0x207669 + ')\x20' + _0x15e76d[_0x207669]);
    }
    ;
    console['log']();
    let _0x55fd0c = await _0x4f1d56['get']('Product');
    return console['clear'](), _0x55fd0c['Product'];
}
;
function _0x232351() {
    var _0x3e4bc2 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x3e4bc2;
}
;
const _0x18039d = [
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
async function _0x53da27(_0x34880d, _0x1672da) {
    let _0x591e55 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x3744f4 != 'devkey') {
        await _0x19fcd5['post'](_0x34880d, _0x1672da, _0x591e55);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x5e9d34(_0x566c38, _0x1d76bf, _0x5070c7, _0x2caa53, _0x909f03) {
    if (!_0x2caa53 && _0x5070c7 == 'dev') {
        var _0x50316e = new _0xc5e70e()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x1d76bf['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x1d76bf['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x566c38['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0xfbfb8a['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x194107,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x566c38['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x3744f4,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x50316e['data'];
    } else {
        if (_0x2caa53 && _0x5070c7 == 'dev') {
            var _0x50316e = new _0xc5e70e()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x1d76bf['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x194107,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x1d76bf['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x566c38['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0xfbfb8a['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x909f03,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x566c38['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x3744f4,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x50316e['data'];
        } else {
            if (_0x5070c7 == 'pub') {
                var _0x50316e = new _0xc5e70e()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x1d76bf['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x1d76bf['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x566c38['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0xfbfb8a['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x566c38['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x3744f4,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x50316e['data'];
            } else {
                if (_0x5070c7 == 'acc') {
                    var _0x50316e = new _0xc5e70e()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x1d76bf['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x194107,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x1d76bf['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0xfbfb8a['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x3744f4,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x50316e['data'];
                } else {
                    if (_0x5070c7 == 'open') {
                        var _0x50316e = new _0xc5e70e()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x1068fc)['addFields']({
                            'name': 'User',
                            'value': '' + _0x194107,
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x3744f4,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x50316e['data'];
                    }
                }
            }
        }
    }
}
async function _0x1527ec(_0x32b689, _0x128b74) {
    var _0xe3e0ac = _0x32b689[_0x128b74]['Address1']['split'](''), _0x5846f3 = _0x32b689[_0x128b74]['Address2']['split'](''), _0x1db4f3 = _0x32b689[_0x128b74]['Email']['split']('@');
    for (var _0x342fc7 = 0x0; _0x342fc7 < _0xe3e0ac['length']; _0x342fc7++) {
        if (_0xe3e0ac[_0x342fc7] == 'X') {
            var _0x5d1059 = Math['round'](Math['random']() * (_0x2be686['length'] - 0x1));
            _0xe3e0ac[_0x342fc7] = _0x576d08[_0x5d1059];
        }
    }
    ;
    for (var _0x342fc7 = 0x0; _0x342fc7 < _0x5846f3['length']; _0x342fc7++) {
        if (_0x5846f3[_0x342fc7] == 'X') {
            var _0x5d1059 = Math['round'](Math['random']() * (_0x2be686['length'] - 0x1));
            _0x5846f3[_0x342fc7] = _0x576d08[_0x5d1059];
        }
    }
    ;
    _0x32b689[_0x128b74]['FirstName'] == 'RANDOM' && (_0x32b689[_0x128b74]['FirstName'] = _0x5030c7['first']());
    _0x32b689[_0x128b74]['LastName'] == 'RANDOM' && (_0x32b689[_0x128b74]['LastName'] = _0x5030c7['last']());
    _0x1db4f3[0x0] == 'RANDOM' ? _0x1db4f3[0x0] = '' + _0x5030c7['first']() + _0x5030c7['last']() + '@' : _0x1db4f3[0x0] = _0x1db4f3[0x0] + '@';
    _0x32b689[_0x128b74]['Email'] = _0x1db4f3['join'](''), _0x32b689[_0x128b74]['Address1'] = _0xe3e0ac['join'](''), _0x32b689[_0x128b74]['Address2'] = _0x5846f3['join']('');
    _0x32b689[_0x128b74]['Phone'] == 'RANDOM' && (_0x32b689[_0x128b74]['Phone'] = '0' + _0x4fede6(0x5f5e100, 0x3b9ac9ff));
    if (_0x32b689[_0x128b74]['Follower'] == 'RANDOM') {
        var _0x12a731 = _0x4fede6(0x1, 0x270f);
        _0x32b689[_0x128b74]['Follower'] = '' + _0x5030c7['first']() + _0x5030c7['last']() + _0x12a731 + '\x20';
    }
    _0x32b689[_0x128b74]['HouseNumber'] == 'RANDOM' && (_0x32b689[_0x128b74]['HouseNumber'] = _0x4fede6(0x1, 0xc8));
    if (_0x32b689[_0x128b74]['Address1'] == 'RANDOM') {
        var _0x1ea654 = Math['round'](Math['random']() * (_0x2be686['length'] - 0x1)), _0x41ac96 = _0x576d08[_0x1ea654];
        _0x32b689[_0x128b74]['Address1'] = _0x5030c7['last']() + 'straat', _0x32b689[_0x128b74]['Postcode'] = _0x4fede6(0x3e8, 0x270f) + '\x20' + _0x41ac96 + _0x41ac96, _0x32b689[_0x128b74]['Zip'] = _0x32b689[_0x128b74]['Postcode'], _0x32b689[_0x128b74]['HouseNumber'] = '' + _0x4fede6(0x1, 0xc8);
    }
    return;
}
;
function _0x3d53d3() {
    let _0x4ec90e = proxyFile['split']('\x0a'), _0x11bfe9 = _0x4ec90e['map']((_0x1e32cd, _0xf06c67) => {
        sanatizeProxy = _0x1e32cd['replace']('\x0d', '');
        if (_0x4ec90e[_0xf06c67 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x11bfe9;
}
;
async function _0x34f976(_0x19ffdc) {
    var _0x96d050 = _0x19ffdc[0x1]['split'](':');
    const _0x4691bd = await _0x1f09f1['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x96d050[0x0] + ':' + _0x96d050[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x5da399 = await _0x4691bd['newPage']();
        await _0x5da399['authenticate']({
            'username': '' + _0x96d050[0x2],
            'password': '' + _0x96d050[0x3]
        }), console['log'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x5da399['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5da399['setRequestInterception'](!![]), _0x5da399['on']('request', _0x1a53cf => {
            _0x1a53cf['resourceType']() === 'image' || _0x1a53cf['resourceType']() === 'font' || _0x1a53cf['resourceType']() === 'media' ? _0x1a53cf['abort']() : _0x1a53cf['continue']();
        }), await _0x5da399['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x5da399['waitForTimeout'](0xbb8), await _0x5da399['waitForSelector']('.product-card');
        const _0x4b9e5b = await _0x5da399['$$eval']('a.product-card', _0x31f30a => {
            return _0x31f30a['map'](_0x25cdc5 => _0x25cdc5['href']);
        });
        return _0x15e76d = _0x4b9e5b;
    } catch (_0x5e33a2) {
        console['log']('\x20' + _0x5e33a2);
    } finally {
        _0x4691bd['close'](), console['clear']();
    }
}
;
async function _0x5136b1(_0x2ec395, _0x19d64e, _0x5f0a6d, _0x50afa2, _0x4c15f6) {
    _0x19d64e != 'ver' && await _0x1527ec(_0x50afa2, _0x2ec395);
    if (_0xfbfb8a['useRandomProxy'] = ![])
        var _0x2c1bf5 = _0x4c15f6[_0x2ec395]['split'](':');
    else
        var _0x4c0e2b = Math['round'](Math['random']() * (_0x4c15f6['length'] - 0x1)), _0x2c1bf5 = _0x4c15f6[_0x4c0e2b]['split'](':');
    var _0x35d854 = _0x5f0a6d['data'];
    _0x19d64e != 'ver' && (_0x35d854['data']['attributes']['properties']['$first_name'] = '' + _0x50afa2[_0x2ec395]['FirstName'], _0x35d854['data']['attributes']['properties']['$last_name'] = '' + _0x50afa2[_0x2ec395]['LastName'], _0x35d854['data']['attributes']['properties']['$address1'] = _0x50afa2[_0x2ec395]['Address1'] + '\x20' + _0x50afa2[_0x2ec395]['HouseNumber'] + '\x20' + _0x50afa2[_0x2ec395]['Address2'], _0x35d854['data']['attributes']['properties']['$zip'] = '' + _0x50afa2[_0x2ec395]['Zip'], _0x35d854['data']['attributes']['properties']['$city'] = '' + _0x50afa2[_0x2ec395]['City'], _0x35d854['data']['attributes']['properties']['$country'] = '' + _0x50afa2[_0x2ec395]['Country'], _0x35d854['data']['attributes']['properties']['Size'] = '' + _0x50afa2[_0x2ec395]['Size'], _0x35d854['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x50afa2[_0x2ec395]['Follower'], _0x19d64e == 'exp' ? _0x35d854['data']['attributes']['email'] = '' + _0x50afa2[_0x2ec395]['FirstName'] + _0x50afa2[_0x2ec395]['LastName'] + _0xfbfb8a['catchall'] : _0x35d854['data']['attributes']['email'] = '' + _0x50afa2[_0x2ec395]['Email']);
    var _0x381d32 = {
        'jar': _0x4dafe3,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x5f0a6d['url'],
        'headers': _0x5f0a6d['headers'],
        'body': JSON['stringify'](_0x35d854),
        'proxy': 'http://' + _0x2c1bf5[0x2] + ':' + _0x2c1bf5[0x3] + '@' + _0x2c1bf5[0x0] + ':' + _0x2c1bf5[0x1]
    };
    return _0x19d64e === 'ver' && (_0x381d32['method'] = 'GET'), new Promise(function (_0x5e84eb, _0x42cbdf) {
        callback = async (_0x2be722, _0x10d31e, _0x468888) => {
            if (!_0x2be722 && _0x10d31e['statusCode'] == 0xca || !_0x2be722 && _0x10d31e['statusCode'] == 0xc8) {
                _0x5e84eb(console['log'](_0x331029['green'](_0x232351() + '\x20[' + _0x5f0a6d['name'] + ']\x20Task\x20' + (_0x2ec395 + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x19d64e != 'ver') {
                    var _0x4186c8 = await _0x5e9d34(_0x50afa2[_0x2ec395], _0x5f0a6d, 'dev', ![]), _0x355884 = await _0x5e9d34(_0x50afa2[_0x2ec395], _0x5f0a6d, 'pub', ![]);
                    const _0x39c457 = {
                        'succesDEVMSG': { 'embeds': [_0x4186c8] },
                        'succesPUBMSG': { 'embeds': [_0x355884] }
                    };
                    if (_0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '')
                        try {
                            await _0x53da27(_0xfbfb8a['webhook'], _0x39c457['succesDEVMSG']);
                        } catch {
                        }
                    await _0x432b68(0xc8), await _0x53da27(_0x57d5d3, _0x39c457['succesDEVMSG']), await _0x432b68(0xc8);
                    try {
                        await _0x53da27(_0x1a2d91, _0x39c457['succesPUBMSG']);
                    } catch {
                    }
                }
            } else {
                if (_0x19d64e != 'ver') {
                    var _0x115d04 = '' + _0x2be722, _0x1e148b = await _0x5e9d34(_0x50afa2[_0x2ec395], _0x5f0a6d, 'dev', !![], _0x115d04), _0x36ff86 = {};
                    _0x36ff86['errorDEV'] = { 'embeds': [_0x1e148b] }, _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], _0x36ff86['errorDEV']), await _0x53da27(_0x2d1d89, _0x36ff86['errorDEV']);
                }
                _0x42cbdf(console['log'](_0x232351() + '\x20[' + _0x5f0a6d['name'] + ']\x20Task\x20' + (_0x2ec395 + 0x1) + ':\x20' + _0x2be722));
            }
        };
        try {
            _0x19d64e === 'ver' ? console['log'](_0x232351() + '\x20[' + _0x5f0a6d['name'] + ']\x20Task\x20' + (_0x2ec395 + 0x1) + ':\x20Verifying.') : console['log'](_0x232351() + '\x20[' + _0x5f0a6d['name'] + ']\x20Task\x20' + (_0x2ec395 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x35d854['data']['attributes']['email']), _0x18344e(_0x381d32, callback);
        } catch (_0x245165) {
            console['log'](_0x232351() + '\x20Task\x20' + (_0x2ec395 + 0x1) + ':\x20' + _0x245165);
        }
    });
}
;
async function _0x4f746b(_0x14ec18, _0x2d8432, _0x225f4b) {
    _0x1f09f1['use'](_0x468b50()), _0x1f09f1['use'](_0x3db05d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xfbfb8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x27f325 = 0x0; _0x27f325 < _0x14ec18['length']; _0x27f325++) {
        var _0x19772e, _0x198ac3 = '', _0x39781b = 0x0, _0x408339 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x194107
                },
                {
                    'name': 'Product',
                    'value': '' + _0x14ec18[_0x27f325]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x14ec18[_0x27f325]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xfbfb8a['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3744f4
                }
            ]
        }], _0x28036d = await _0x5e9d34(_0x14ec18[_0x27f325], _0x225f4b, 'dev', ![]), _0x52ff3f = await _0x5e9d34(_0x14ec18[_0x27f325], _0x225f4b, 'pub', ![]);
        const _0x2e4ab1 = {
            'succesDEVMSG': { 'embeds': [_0x28036d] },
            'succesPUBMSG': { 'embeds': [_0x52ff3f] }
        }, _0x3f4ae8 = { 'embeds': _0x408339 };
        await _0x1527ec(_0x14ec18, _0x27f325);
        if (_0x14ec18[_0x27f325]['Email'] == '' || _0x14ec18[_0x27f325]['FirstName'] == '' || _0x14ec18[_0x27f325]['LastName'] == '' || _0x14ec18[_0x27f325]['Country'] == '' || _0x14ec18[_0x27f325]['Size'] == '' || _0x14ec18[_0x27f325]['Address1'] == '' || _0x14ec18[_0x27f325]['Zip'] == '') {
            console['log'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x14ec18[_0x27f325]['Email'] == '' || _0x14ec18[_0x27f325]['FirstName'] == '' || _0x14ec18[_0x27f325]['LastName'] == '' || _0x14ec18[_0x27f325]['Country'] == '' || _0x14ec18[_0x27f325]['Size'] == '' || _0x14ec18[_0x27f325]['Address1'] == '' || _0x14ec18[_0x27f325]['Zip'] == '' || _0x14ec18[_0x27f325]['Phone'] == '') {
            console['log'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x4fb782 = '' + _0x14ec18[_0x27f325]['Url'];
        if (_0xfbfb8a['useRandomProxy'] = ![])
            var _0x882eac = _0x2d8432[_0x27f325]['split'](':');
        else
            var _0x3c9c9a = Math['round'](Math['random']() * (_0x2d8432['length'] - 0x1)), _0x882eac = _0x2d8432[_0x3c9c9a]['split'](':');
        const _0x2d4105 = await _0x1f09f1['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x882eac[0x0] + ':' + _0x882eac[0x1]]
        });
        try {
            const _0x4b34c9 = await _0x2d4105['newPage']();
            await _0x4b34c9['authenticate']({
                'username': '' + _0x882eac[0x2],
                'password': '' + _0x882eac[0x3]
            }), console['log'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4b34c9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4b34c9['setRequestInterception'](!![]), _0x4b34c9['on']('request', _0xe0e50c => {
                _0xe0e50c['resourceType']() === 'image' || _0xe0e50c['resourceType']() === 'font' || _0xe0e50c['resourceType']() === 'media' ? _0xe0e50c['abort']() : _0xe0e50c['continue']();
            }), await _0x4b34c9['goto'](_0x4fb782), await _0x432b68(0xbb8), await _0x4b34c9['waitForSelector']('.control__JhutY'), await _0x4b34c9['click']('.control__JhutY'), await _0x432b68(0x1f4);
            if (_0x14ec18[_0x27f325]['Size'] != 'RANDOM')
                try {
                    const _0x33f6ca = await _0x4b34c9['$x']('//div[contains(text(),\x20\x27' + _0x14ec18[_0x27f325]['Size'] + '\x27)]');
                    await _0x33f6ca[0x0]['click']();
                } catch {
                    console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x2a2b95 = await _0x4b34c9['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x5958ca = Math['round'](Math['random']() * (_0x2a2b95['length'] - 0x1));
                await _0x2a2b95[_0x5958ca]['click']();
            }
            await _0x432b68(0x4b0);
            const _0x5d7fed = await _0x4b34c9['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x5d7fed[0x0]['click'](), await _0x4b34c9['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x4b34c9['type']('input[name=\x22email\x22]', '' + _0x14ec18[_0x27f325]['Email']), await _0x432b68(0x640), await _0x4b34c9['type']('input[name=\x22phone\x22]', '' + _0x14ec18[_0x27f325]['Phone']), await _0x432b68(0x4b0), await _0x4b34c9['click']('button.btn.continue-button__1RtsS'), await _0x432b68(0x4b0);
            try {
                await _0x4b34c9['type']('input[name=\x22firstName\x22]', '' + _0x14ec18[_0x27f325]['FirstName']), await _0x432b68(0x258);
            } catch {
                const _0x38be59 = await _0x4b34c9['$$eval']('.invalid-feedback\x20>\x20div', _0x4176c4 => {
                    return _0x4176c4['map'](_0x45cc2e => _0x45cc2e['innerText']);
                });
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x20' + _0x38be59));
                continue;
            }
            await _0x4b34c9['type']('input[name=\x22lastName\x22]', '' + _0x14ec18[_0x27f325]['LastName']), await _0x432b68(0xc8), await _0x4b34c9['type']('input[name=\x22instagramUsername\x22]', '' + _0x14ec18[_0x27f325]['Follower']), await _0x432b68(0x4b0), await _0x4b34c9['click']('button.btn.continue-button__1RtsS'), await _0x432b68(0x3e8), console['log'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x4b34c9['select']('select[name=\x22country\x22]', '' + _0x14ec18[_0x27f325]['Country']), await _0x432b68(0x2bc), await _0x4b34c9['type']('input[name=\x22streetName\x22]', '' + _0x14ec18[_0x27f325]['Address1']), await _0x432b68(0x258), await _0x4b34c9['type']('input[name=\x22houseNumber\x22]', _0x14ec18[_0x27f325]['HouseNumber'] + '\x20' + _0x14ec18[_0x27f325]['Address2']), await _0x432b68(0xc8), await _0x4b34c9['type']('input[name=\x22postalCode\x22]', '' + _0x14ec18[_0x27f325]['Zip']), await _0x432b68(0x1f4), await _0x4b34c9['type']('input[name=\x22city\x22]', '' + _0x14ec18[_0x27f325]['City']), await _0x432b68(0x4b0), await _0x4b34c9['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x432b68(0x4b0), await _0x4b34c9['click']('button.btn.continue-button__1RtsS'), await _0x432b68(0x4b0), console['log'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x4b34c9['solveRecaptchas'](), console['log'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x432b68(0xbb8), await _0x4b34c9['click']('button.btn.continue-button__1RtsS'), await _0x432b68(0x1388), console['log'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x4b34c9['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4b34c9['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x432b68(0x4b0), await _0x4b34c9['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x14ec18[_0x27f325]['CardNumber']), await _0x432b68(0x320), await _0x4b34c9['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x4b34c9['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x14ec18[_0x27f325]['ExpiryDate']), await _0x432b68(0x4b0), await _0x4b34c9['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x4b34c9['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x14ec18[_0x27f325]['CVV']), await _0x432b68(0x226), await _0x4b34c9['type']('input[name=\x22holderName\x22]', '' + _0x14ec18[_0x27f325]['NameOnCard']), await _0x432b68(0x226), await _0x4b34c9['click']('button.adyen-checkout__button'), console['log'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x4b34c9['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x432b68(0xbb8);
            } catch (_0x2f3b45) {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x203DS\x20Failed')), _0x19772e = '3DS\x20Error\x20' + _0x2f3b45;
                var _0x4084a0 = await _0x5e9d34(_0x14ec18[_0x27f325], _0x225f4b, 'dev', !![], _0x19772e);
                _0x2e4ab1['errorDEV'] = { 'embeds': [_0x4084a0] };
                _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], _0x2e4ab1['errorDEV']);
                await _0x53da27(_0x2d1d89, _0x2e4ab1['errorDEV']);
                continue;
            }
            console['log'](_0x331029['green'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '')
                try {
                    await _0x53da27(_0xfbfb8a['webhook'], _0x2e4ab1['succesDEVMSG']);
                } catch {
                }
            await _0x432b68(0xc8), await _0x53da27(_0x57d5d3, _0x2e4ab1['succesDEVMSG']), await _0x432b68(0xc8);
            try {
                await _0x53da27(_0x1a2d91, _0x2e4ab1['succesPUBMSG']);
            } catch {
            }
        } catch (_0x1045db) {
            console['log'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x20' + _0x1045db), _0x19772e = '' + _0x1045db;
            var _0x4084a0 = await _0x5e9d34(_0x14ec18[_0x27f325], _0x225f4b, 'dev', !![], _0x19772e);
            _0x2e4ab1['errorDEV'] = { 'embeds': [_0x4084a0] }, _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], _0x2e4ab1['errorDEV']), await _0x53da27(_0x2d1d89, _0x2e4ab1['errorDEV']), _0x198ac3 = 'yes';
        } finally {
            _0x2d4105['close']();
            if (_0x198ac3 == 'yes' && _0x39781b != 0x5) {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x225f4b['name'] + ']\x20Task\x20' + (_0x27f325 + 0x1) + '\x20:\x20Retrying')), _0x27f325 = _0x27f325 - 0x1, _0x39781b = _0x39781b + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xfbfb8a['footshopDelay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['footshopDelay']);
        }
    }
}
afewFunction = async (_0x57a1c4, _0x52cf0b, _0x413e02, _0x6bde53, _0x403b4e) => {
    for (var _0xfca9ec = 0x0; _0xfca9ec < _0x6bde53['length']; _0xfca9ec++) {
        _0xfbfb8a['AfewDelay'] = _0xfbfb8a['delay'];
        var _0x12c25b, _0x4e23a1 = '', _0x486818 = 0x0;
        _0x6bde53[_0xfca9ec]['Url'] = _0x57a1c4, _0x194b67(_0x413e02['name'] + '\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20/\x20' + _0x6bde53['length'] + '\x20||\x20File:\x20' + _0x4c776e + '\x20Proxies:\x20' + _0x196516), await _0x1527ec(_0x6bde53, _0xfca9ec);
        var _0x4460d7 = await _0x5e9d34(_0x6bde53[_0xfca9ec], _0x413e02, 'dev', ![]), _0x5c658e = await _0x5e9d34(_0x6bde53[_0xfca9ec], _0x413e02, 'pub', ![]);
        const _0x18c999 = {
            'succesDEVMSG': { 'embeds': [_0x4460d7] },
            'succesPUBMSG': { 'embeds': [_0x5c658e] }
        };
        if (_0x6bde53[_0xfca9ec]['Email'] == '' || _0x6bde53[_0xfca9ec]['FirstName'] == '' || _0x6bde53[_0xfca9ec]['LastName'] == '' || _0x6bde53[_0xfca9ec]['Country'] == '' || _0x6bde53[_0xfca9ec]['Size'] == '' || _0x6bde53[_0xfca9ec]['Address1'] == '' || _0x6bde53[_0xfca9ec]['Zip'] == '') {
            console['log'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xfbfb8a['useRandomProxy'] = ![])
            var _0x460f99 = _0x403b4e[_0xfca9ec]['split'](':');
        else
            var _0x1d932f = Math['round'](Math['random']() * (_0x403b4e['length'] - 0x1)), _0x460f99 = _0x403b4e[_0x1d932f]['split'](':');
        const _0x11718f = await _0x1f09f1['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x460f99[0x0] + ':' + _0x460f99[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x28dd5b = await _0x11718f['newPage']();
            await _0x28dd5b['setDefaultNavigationTimeout'](0x1d4c0), await _0x28dd5b['authenticate']({
                'username': '' + _0x460f99[0x2],
                'password': '' + _0x460f99[0x3]
            }), console['log'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20Getting\x20Session'), await _0x28dd5b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x28dd5b['setRequestInterception'](!![]), _0x28dd5b['on']('request', _0x55f1cd => {
                _0x55f1cd['resourceType']() === 'image' || _0x55f1cd['resourceType']() === 'font' || _0x55f1cd['resourceType']() === 'media' ? _0x55f1cd['abort']() : _0x55f1cd['continue']();
            }), await _0x28dd5b['goto'](_0x57a1c4, { 'waitUntil': 'networkidle2' }), console['log'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x28dd5b['waitForTimeout'](0xfa0), console['log'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20Cookies\x20received'), await _0x28dd5b['waitForTimeout'](0x320);
            if (_0x6bde53[_0xfca9ec]['Size'] == 'RANDOM') {
                console['log'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x22bda5 = await _0x28dd5b['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x29b019 => {
                    return _0x29b019['map'](_0x37b08b => _0x37b08b['href']);
                });
                var _0x39acbb = Math['round'](Math['random']() * (_0x22bda5['length'] - 0x1));
                await _0x28dd5b['goto']('' + _0x22bda5[_0x39acbb]);
            } else {
                console['log'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x6bde53[_0xfca9ec]['Size']);
                try {
                    const _0x2e9eb9 = await _0x28dd5b['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x6bde53[_0xfca9ec]['Size'] + '\x22]\x20>\x20a', _0x159dd4 => {
                        return _0x159dd4['map'](_0x4a36bd => _0x4a36bd['href']);
                    });
                    await _0x28dd5b['goto']('' + _0x2e9eb9[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x2bd1ac) {
                    console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20' + _0x2bd1ac + '\x20Size\x20not\x20found')), _0x12c25b = 'Size\x20Not\x20Found';
                    var _0x294904 = await _0x5e9d34(_0x6bde53[_0xfca9ec], _0x413e02, 'dev', !![], _0x12c25b);
                    _0x18c999['errorDEV'] = { 'embeds': [_0x294904] };
                    _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], _0x18c999['errorDEV']);
                    await _0x53da27(_0x2d1d89, _0x18c999['errorDEV']);
                    continue;
                }
            }
            await _0x28dd5b['waitForTimeout'](0x258), await _0x28dd5b['type']('#raffle-instagram', '' + _0x6bde53[_0xfca9ec]['Follower'], { 'delay': 0x64 }), await _0x28dd5b['waitForTimeout'](0x384), await _0x28dd5b['click']('#raffle-terms'), await _0x28dd5b['waitForTimeout'](0x384), await _0x28dd5b['evaluate'](() => {
                const _0x3f93c3 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x3f93c3['click']();
            }), await _0x28dd5b['waitForTimeout'](0xbb8), await _0x28dd5b['waitForSelector']('#checkout_email'), await _0x432b68(0x3e8), console['log'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20Filling\x20Information');
            _0x52cf0b == 'sec' ? await _0x28dd5b['type']('#checkout_email', '' + _0x6bde53[_0xfca9ec]['FirstName'] + _0x6bde53[_0xfca9ec]['LastName'] + _0xfbfb8a['catchall'], 0x32) : await _0x28dd5b['type']('#checkout_email', '' + _0x6bde53[_0xfca9ec]['Email'], 0x32);
            await _0x432b68(0x320), await _0x28dd5b['select']('#checkout_shipping_address_country', '' + _0x6bde53[_0xfca9ec]['Country']), await _0x28dd5b['waitForTimeout'](0x258), await _0x28dd5b['type']('#checkout_shipping_address_first_name', '' + _0x6bde53[_0xfca9ec]['FirstName']), await _0x28dd5b['waitForTimeout'](0x320), await _0x28dd5b['type']('#checkout_shipping_address_last_name', '' + _0x6bde53[_0xfca9ec]['LastName']), await _0x28dd5b['waitForTimeout'](0x2bc), await _0x28dd5b['type']('#checkout_shipping_address_address1', _0x6bde53[_0xfca9ec]['Address1'] + '\x20' + _0x6bde53[_0xfca9ec]['HouseNumber']), await _0x28dd5b['waitForTimeout'](0x2bc), await _0x28dd5b['type']('#checkout_shipping_address_address2', '' + _0x6bde53[_0xfca9ec]['Address2']), await _0x28dd5b['waitForTimeout'](0x2bc);
            _0x6bde53[_0xfca9ec]['Postcode'] == undefined ? await _0x28dd5b['type']('#checkout_shipping_address_zip', '' + _0x6bde53[_0xfca9ec]['Zip']) : await _0x28dd5b['type']('#checkout_shipping_address_zip', '' + _0x6bde53[_0xfca9ec]['Postcode']);
            await _0x28dd5b['waitForTimeout'](0x2bc), await _0x28dd5b['type']('#checkout_shipping_address_city', '' + _0x6bde53[_0xfca9ec]['City']), await _0x28dd5b['waitForTimeout'](0x2bc), console['log'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x28dd5b, _0x28dd5b['evaluate'](() => {
                const _0x525af0 = document['querySelector']('#continue_button');
                for (var _0x2aae93 = 0x0; _0x2aae93 < 0x5; _0x2aae93++) {
                    if (_0x525af0) {
                        _0x525af0['click'](), _0x525af0['click']();
                        break;
                    } else
                        _0x432b68(0xfa0);
                }
            }), await _0x28dd5b['waitForTimeout'](0x1194);
            try {
                await _0x28dd5b['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x28dd5b['evaluate'](() => {
                const _0x4289ac = document['querySelector']('#continue_button');
                for (var _0x38e6b8 = 0x0; _0x38e6b8 < 0x5; _0x38e6b8++) {
                    if (_0x4289ac) {
                        _0x4289ac['click']();
                        break;
                    } else
                        _0x432b68(0xfa0);
                }
            }), await _0x28dd5b['waitForTimeout'](0x7d0), console['log'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x28dd5b['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x28dd5b['evaluate'](() => {
                const _0x2d4a31 = document['querySelector']('#continue_button');
                for (var _0x6e89d1 = 0x0; _0x6e89d1 < 0x5; _0x6e89d1++) {
                    if (_0x2d4a31) {
                        _0x2d4a31['click']();
                        break;
                    } else
                        _0x432b68(0xfa0);
                }
            }), await _0x28dd5b['waitForTimeout'](0x1194), await _0x28dd5b['waitForSelector']('#continue_button'), _0x28dd5b['evaluate'](() => {
                const _0x3f204e = document['querySelector']('#continue_button');
                for (var _0x2b654a = 0x0; _0x2b654a < 0x5; _0x2b654a++) {
                    if (_0x3f204e) {
                        _0x3f204e['click']();
                        break;
                    } else
                        _0x432b68(0xfa0);
                }
            });
            try {
                await _0x28dd5b['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x331029['green'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '')
                    try {
                        await _0x53da27(_0xfbfb8a['webhook'], _0x18c999['succesDEVMSG']);
                    } catch {
                    }
                await _0x432b68(0xc8), await _0x53da27(_0x57d5d3, _0x18c999['succesDEVMSG']), await _0x432b68(0xc8);
                try {
                    await _0x53da27(_0x1a2d91, _0x18c999['succesPUBMSG']);
                } catch {
                }
            } catch (_0x3af8ea) {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x3af8ea));
            }
        } catch (_0x22b015) {
            console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20' + _0x22b015)), _0x12c25b = '' + _0x22b015;
            var _0x294904 = await _0x5e9d34(_0x6bde53[_0xfca9ec], _0x413e02, 'dev', !![], _0x12c25b);
            _0x18c999['errorDEV'] = { 'embeds': [_0x294904] }, _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], _0x18c999['errorDEV']), await _0x53da27(_0x2d1d89, _0x18c999['errorDEV']), _0x4e23a1 = 'yes';
        } finally {
            _0x11718f && _0x11718f['close']();
            if (_0x4e23a1 == 'yes' && _0x486818 != 0x5 && _0x12c25b != 'Size\x20Not\x20Found') {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x413e02['name'] + ']\x20Task\x20' + (_0xfca9ec + 0x1) + '\x20:\x20Retrying')), _0xfca9ec = _0xfca9ec - 0x1, _0x486818 = _0x486818 + 0x1;
                continue;
            }
            if (_0xfca9ec + 0x1 == _0x6bde53['length']) {
                console['log'](_0x331029['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x432b68(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0xfbfb8a['AfewDelay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['AfewDelay']);
        }
    }
};
async function _0x47081b(_0x37a64f, _0x352e5f, _0x41400f, _0xf0135f) {
    _0x1f09f1['use'](_0x468b50()), _0x1f09f1['use'](_0x3db05d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xfbfb8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x45e075 = 0x0; _0x45e075 < _0x41400f['length']; _0x45e075++) {
        var _0x3cbd1c = '', _0x347155 = 0x0;
        _0x194b67(_0x352e5f['name'] + '\x20Task\x20' + (_0x45e075 + 0x1) + '\x20/\x20' + _0x41400f['length'] + '\x20||\x20File:\x20' + _0x4c776e + '\x20Proxies:\x20' + _0x196516), await _0x1527ec(_0x41400f, _0x45e075);
        var _0x35be19 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x194107
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xfbfb8a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3744f4
                }
            ]
        }];
        const _0x1b06c4 = { 'embeds': _0x35be19 };
        var _0xa5badf = await _0x5e9d34(_0x41400f[_0x45e075], _0x352e5f, 'acc', ![]);
        const _0x58a012 = { 'succesDEVMSG': { 'embeds': [_0xa5badf] } };
        if (_0x41400f[_0x45e075]['Email'] == '' || _0x41400f[_0x45e075]['FirstName'] == '' || _0x41400f[_0x45e075]['LastName'] == '') {
            console['log'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x41400f[_0x45e075]['Password'] == '' && (_0x41400f[_0x45e075]['Password'] = 'JRaffles23!');
        if (_0xfbfb8a['useRandomProxy'] = ![])
            var _0x54f8f5 = _0xf0135f[_0x45e075]['split'](':');
        else
            var _0x4d3525 = Math['round'](Math['random']() * (_0xf0135f['length'] - 0x1)), _0x54f8f5 = _0xf0135f[_0x4d3525]['split'](':');
        const _0x468c56 = await _0x1f09f1['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x54f8f5[0x0] + ':' + _0x54f8f5[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3d4041 = await _0x468c56['newPage']();
            await _0x3d4041['authenticate']({
                'username': '' + _0x54f8f5[0x2],
                'password': '' + _0x54f8f5[0x3]
            }), console['log'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3d4041['setRequestInterception'](!![]), _0x3d4041['on']('request', _0x3132b1 => {
                _0x3132b1['resourceType']() === 'image' || _0x3132b1['resourceType']() === 'font' || _0x3132b1['resourceType']() === 'media' ? _0x3132b1['abort']() : _0x3132b1['continue']();
            }), await _0x3d4041['goto'](_0x37a64f), await _0x432b68(0xbb8), console['log'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x3d4041['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3d4041['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3d4041['waitForSelector']('#button-register'), await _0x432b68(0x7d0), await _0x3d4041['evaluate'](() => {
                const _0x11d0f1 = document['querySelector']('#button-register');
                _0x11d0f1['click']();
            }), console['log'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x432b68(0x1388), await _0x3d4041['waitForSelector']('#customer_salutation'), await _0x3d4041['select']('#customer_salutation', 'mr'), await _0x432b68(0x7d0), await _0x3d4041['waitForSelector']('#customer_firstname'), await _0x3d4041['type']('#customer_firstname', '' + _0x41400f[_0x45e075]['FirstName']), await _0x432b68(0x352), await _0x3d4041['waitForSelector']('#customer_lastname'), await _0x3d4041['type']('#customer_lastname', '' + _0x41400f[_0x45e075]['LastName']), await _0x432b68(0x352), await _0x3d4041['type']('#email-input', '' + _0x41400f[_0x45e075]['Email']), await _0x432b68(0x352), await _0x3d4041['type']('#email-confirm-input', '' + _0x41400f[_0x45e075]['Email']), await _0x432b68(0x352), await _0x3d4041['type']('#register-password', '' + _0x41400f[_0x45e075]['Password']), await _0x432b68(0x352), await _0x3d4041['type']('#password-confirm', '' + _0x41400f[_0x45e075]['Password']), await _0x432b68(0x352), console['log'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x3d4041['click']('#consent'), await _0x432b68(0x1f4);
            const _0x44d9d7 = await _0x3d4041['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x44d9d7) {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x3d4041['click']('#buttonRegister');
            try {
                await _0x3d4041['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x331029['yellow'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20Account\x20' + _0x41400f[_0x45e075]['Email'] + '\x20Generated!')), console['log'](_0x331029['yellow'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x41400f[_0x45e075]['Email'])), await _0x432b68(0x4b0);
            async function _0x3df4fc() {
                console['log'](_0x331029['yellow'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x3ad01c = await _0x4f1d56['get']('Code');
                return _0x3ad01c['Code'];
            }
            ;
            code = await _0x3df4fc(), _0x432b68(0x320), console['log'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20Verifying..'), await _0x3d4041['type']('#verificationCode', code), await _0x432b68(0x1f4), await _0x3d4041['click']('#buttonVerify'), await _0x432b68(0x190), await _0x3d4041['click']('#buttonVerify'), await _0x432b68(0x3e8);
            try {
                await _0x3d4041['waitForSelector']('div.b-user_greeting'), console['log'](_0x331029['green'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20Account\x20' + _0x41400f[_0x45e075]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x4ec151['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x41400f[_0x45e075]['Email'] + ',' + _0x41400f[_0x45e075]['Password'] + ','), console['log'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20Account\x20' + _0x41400f[_0x45e075]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], _0x58a012['succesDEVMSG']);
                } catch {
                }
                await _0x53da27(_0x5529a0, _0x58a012['succesDEVMSG']);
            } catch {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x36dddd) {
            console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20' + _0x36dddd)), _0x35be19[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x35be19[0x0]['description'] = '' + _0x36dddd, await _0x53da27(_0x2d1d89, _0x1b06c4), _0x3cbd1c = 'yes';
        } finally {
            _0x468c56 && _0x468c56['close']();
            if (_0x3cbd1c == 'yes' && _0x347155 != 0x5) {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x352e5f['name'] + ']\x20Task\x20' + (_0x45e075 + 0x1) + '\x20:\x20Retrying')), _0x45e075 = _0x45e075 - 0x1, _0x347155 = _0x347155 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xfbfb8a['delay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['delay']);
        }
    }
}
async function _0x4fe741(_0x46457c, _0x987065, _0x169685) {
    _0x1f09f1['use'](_0x468b50()), _0x1f09f1['use'](_0x3db05d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xfbfb8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x91499 = 0x0; _0x91499 < _0x987065['length']; _0x91499++) {
        var _0x3695b8, _0x28c83f = '', _0x1cb425 = 0x0;
        _0x194b67(_0x46457c['name'] + '\x20Task\x20' + (_0x91499 + 0x1) + '\x20/\x20' + _0x987065['length'] + '\x20||\x20File:\x20' + _0x4c776e + '\x20Proxies:\x20' + _0x196516);
        var _0x1bab90 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x194107
                },
                {
                    'name': 'Product',
                    'value': '' + _0x987065[_0x91499]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x987065[_0x91499]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xfbfb8a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3744f4
                }
            ]
        }], _0xdb255b = await _0x5e9d34(_0x987065[_0x91499], _0x46457c, 'dev', ![]), _0x1362bb = await _0x5e9d34(_0x987065[_0x91499], _0x46457c, 'pub', ![]);
        const _0x1d6bda = {
            'succesDEVMSG': { 'embeds': [_0xdb255b] },
            'succesPUBMSG': { 'embeds': [_0x1362bb] }
        };
        await _0x1527ec(_0x987065, _0x91499);
        if (_0x987065[_0x91499]['Email'] == '' || _0x987065[_0x91499]['Password'] == '' || _0x987065[_0x91499]['FirstName'] == '' || _0x987065[_0x91499]['LastName'] == '') {
            console['log'](_0x232351() + '\x20[' + _0x46457c['name'] + ']\x20Task\x20' + (_0x91499 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xfbfb8a['useRandomProxy'] = ![])
            var _0x8282a5 = _0x169685[_0x91499]['split'](':');
        else
            var _0x18f6cb = Math['round'](Math['random']() * (_0x169685['length'] - 0x1)), _0x8282a5 = _0x169685[_0x18f6cb]['split'](':');
        const _0x25a19e = await _0x1f09f1['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x8282a5[0x0] + ':' + _0x8282a5[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xc6dd62 = await _0x25a19e['newPage']();
            await _0xc6dd62['authenticate']({
                'username': '' + _0x8282a5[0x2],
                'password': '' + _0x8282a5[0x3]
            }), console['log'](_0x232351() + '\x20[' + _0x46457c['name'] + ']\x20Task\x20' + (_0x91499 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xc6dd62['setRequestInterception'](!![]), _0xc6dd62['on']('request', _0x51240c => {
                _0x51240c['resourceType']() === 'image' || _0x51240c['resourceType']() === 'font' || _0x51240c['resourceType']() === 'media' ? _0x51240c['abort']() : _0x51240c['continue']();
            }), await _0xc6dd62['goto']('' + _0x987065[_0x91499]['Url'], { 'waitUntil': 'networkidle2' }), await _0x432b68(0x12c);
            try {
                await _0xc6dd62['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0xc6dd62['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x232351() + '\x20[' + _0x46457c['name'] + ']\x20Task\x20' + (_0x91499 + 0x1) + '\x20:\x20Logging\x20in'), await _0xc6dd62['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xc6dd62['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xc6dd62['waitForSelector']('#username'), await _0xc6dd62['type']('#username', _0x987065[_0x91499]['Email']), await _0xc6dd62['waitForSelector']('#password'), await _0xc6dd62['type']('#password', _0x987065[_0x91499]['Password']), await _0x432b68(0x190), await _0xc6dd62['click']('#buttonSubmit'), await _0xc6dd62['waitForSelector']('div.b-user_greeting'), console['log'](_0x232351() + '\x20[' + _0x46457c['name'] + ']\x20Task\x20' + (_0x91499 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x432b68(0x1f4), await _0xc6dd62['goto']('' + _0x987065[_0x91499]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x232351() + '\x20[' + _0x46457c['name'] + ']\x20Task\x20' + (_0x91499 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x987065[_0x91499]['Size']);
            let _0x2f6008 = _0x987065[_0x91499]['Size']['replace']('.5', '\x201/2');
            await _0xc6dd62['click']('button[title=\x22' + _0x2f6008 + '\x22]'), await _0x432b68(0x1f4);
            try {
                await _0xc6dd62['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x432b68(0x12c), console['log'](_0x232351() + '\x20[' + _0x46457c['name'] + ']\x20Task\x20' + (_0x91499 + 0x1) + '\x20:\x20Filling\x20Information'), await _0xc6dd62['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x432b68(0x12c), await _0xc6dd62['type']('#dwfrm_raffle_addressFields_firstName', _0x987065[_0x91499]['FirstName']), await _0x432b68(0x12c), await _0xc6dd62['type']('#dwfrm_raffle_addressFields_lastName', _0x987065[_0x91499]['LastName']), await _0x432b68(0x12c), await _0xc6dd62['select']('#dwfrm_raffle_addressFields_country', _0x987065[_0x91499]['Country']), await _0x432b68(0x12c), await _0xc6dd62['type']('#dwfrm_raffle_addressFields_city', _0x987065[_0x91499]['City']), await _0x432b68(0x12c);
            _0x987065[_0x91499]['Postcode'] == undefined && (_0x987065[_0x91499]['Postcode'] = _0x987065[_0x91499]['Zip']);
            await _0xc6dd62['type']('#dwfrm_raffle_addressFields_postalCode', _0x987065[_0x91499]['Postcode']), await _0x432b68(0x12c), await _0xc6dd62['type']('#dwfrm_raffle_addressFields_address1', _0x987065[_0x91499]['Address1']), await _0x432b68(0x12c), await _0xc6dd62['type']('#dwfrm_raffle_addressFields_address2', _0x987065[_0x91499]['HouseNumber']), await _0x432b68(0x12c), await _0xc6dd62['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x987065[_0x91499]['Address2']), await _0x432b68(0x12c), await _0xc6dd62['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x432b68(0x12c), await _0xc6dd62['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x987065[_0x91499]['Follower']), await _0x432b68(0x1f4), await _0xc6dd62['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x432b68(0x1f4), console['log'](_0x232351() + '\x20[' + _0x46457c['name'] + ']\x20Task\x20' + (_0x91499 + 0x1) + '\x20:\x20' + _0x331029['blue']('Awaiting\x20Paypal\x20Payment')), await _0xc6dd62['click']('.b-paypal_button');
            try {
                await _0xc6dd62['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x331029['green'](_0x232351() + '\x20[' + _0x46457c['name'] + ']\x20Task\x20' + (_0x91499 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], _0x1d6bda['succesDEVMSG']), await _0x432b68(0xc8), await _0x53da27(_0x57d5d3, _0x1d6bda['succesDEVMSG']), await _0x432b68(0xc8), await _0x53da27(_0x1a2d91, _0x1d6bda['succesPUBMSG']);
            } catch (_0x254a64) {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x46457c['name'] + ']\x20Task\x20' + (_0x91499 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x254a64)), _0x3695b8 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x254a64;
                var _0x3accda = await _0x5e9d34(_0x987065[_0x91499], _0x46457c, 'dev', !![], _0x3695b8);
                _0x1d6bda['errorDEV'] = { 'embeds': [_0x3accda] }, _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], _0x1d6bda['errorDEV']), await _0x53da27(_0x2d1d89, _0x1d6bda['errorDEV']);
            }
        } catch (_0x43e14a) {
            console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x46457c['name'] + ']\x20Task\x20' + (_0x91499 + 0x1) + '\x20:\x20' + _0x43e14a)), _0x3695b8 = '' + _0x43e14a;
            var _0x3accda = await _0x5e9d34(_0x987065[_0x91499], _0x46457c, 'dev', !![], _0x3695b8);
            _0x1d6bda['errorDEV'] = { 'embeds': [_0x3accda] }, _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], _0x1d6bda['errorDEV']), await _0x53da27(_0x2d1d89, _0x1d6bda['errorDEV']), _0x28c83f = 'yes';
        } finally {
            _0x25a19e && _0x25a19e['close']();
            if (_0x28c83f == 'yes' && _0x1cb425 != 0x5) {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x46457c['name'] + ']\x20Task\x20' + (_0x91499 + 0x1) + '\x20:\x20Retrying')), _0x91499 = _0x91499 - 0x1, _0x1cb425 = _0x1cb425 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xfbfb8a['AfewDelay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['AfewDelay']);
        }
    }
}
async function _0x5789ae(_0x2c37ab, _0x2600d3) {
    _0x1f09f1['use'](_0x468b50()), _0x1f09f1['use'](_0x3db05d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xfbfb8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2b86d4 = 0x0; _0x2b86d4 < bouncewear['length']; _0x2b86d4++) {
        await _0x1527ec(bouncewear, _0x2b86d4);
        if (bouncewear[_0x2b86d4]['Email'] == '' || bouncewear[_0x2b86d4]['Password'] == '' || bouncewear[_0x2b86d4]['FirstName'] == '' || bouncewear[_0x2b86d4]['LastName'] == '') {
            console['log'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0x2b86d4 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xfbfb8a['useRandomProxy'] = ![])
            var _0x4f6844 = _0x3d53d3()[_0x2b86d4]['split'](':');
        else
            var _0xc5adcf = Math['round'](Math['random']() * (_0x3d53d3()['length'] - 0x1)), _0x4f6844 = _0x3d53d3()[_0xc5adcf]['split'](':');
        const _0x208a81 = await _0x1f09f1['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4f6844[0x0] + ':' + _0x4f6844[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xe89487 = await _0x208a81['newPage']();
            await _0xe89487['authenticate']({
                'username': '' + _0x4f6844[0x2],
                'password': '' + _0x4f6844[0x3]
            }), console['log'](_0x232351() + '\x20[' + _0x2600d3['name'] + ']\x20Task\x20' + (_0x2b86d4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xe89487['setRequestInterception'](!![]), _0xe89487['on']('request', _0x7ec4e1 => {
                _0x7ec4e1['resourceType']() === 'image' || _0x7ec4e1['resourceType']() === 'font' || _0x7ec4e1['resourceType']() === 'media' ? _0x7ec4e1['abort']() : _0x7ec4e1['continue']();
            }), await _0xe89487['goto'](_0x2c37ab), await _0x432b68(0xbb8), await _0xe89487['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x232351() + '\x20[' + _0x2600d3['name'] + ']\x20Task\x20' + (_0x2b86d4 + 0x1) + '\x20:\x20Filling\x20information'), await _0xe89487['type']('#RegisterForm-FirstName', '' + bouncewear[_0x2b86d4]['FirstName']), await _0x432b68(0x226), await _0xe89487['type']('#RegisterForm-LastName', '' + bouncewear[_0x2b86d4]['LastName']), await _0x432b68(0x226), await _0xe89487['type']('#RegisterForm-email', '' + bouncewear[_0x2b86d4]['Email']), await _0x432b68(0x226), await _0xe89487['type']('#RegisterForm-password', '' + bouncewear[_0x2b86d4]['Password']), await _0x432b68(0x226), await _0xe89487['click']('#marketing'), console['log'](_0x232351() + '\x20[' + _0x2600d3['name'] + ']\x20Task\x20' + (_0x2b86d4 + 0x1) + '\x20:\x20Submitting..'), await _0xe89487['$eval']('#RegisterForm', _0x40ab7a => _0x40ab7a['submit']()), await _0x432b68(0x1f40), console['log'](_0x232351() + '\x20[' + _0x2600d3['name'] + ']\x20Task\x20' + (_0x2b86d4 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0xe89487['solveRecaptchas'](), await _0xe89487['click']('.shopify-challenge__button.btn');
            async function _0x2ccfc4() {
                for (var _0x4e8b5b = 0x0; _0x4e8b5b < 0x4; _0x4e8b5b++) {
                    try {
                        console['log']('try'), await _0xe89487['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x232351() + '\x20[' + _0x2600d3['name'] + ']\x20Task\x20' + (_0x2b86d4 + 0x1) + '\x20:\x20' + _0x331029['red']('Catpcha\x20failed,\x20retrying..')), await _0xe89487['solveRecaptchas'](), await _0xe89487['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x2ccfc4(), console['log'](_0x232351() + '\x20[' + _0x2600d3['name'] + ']\x20Task\x20' + (_0x2b86d4 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x432b68(0x1f4);
            try {
                await _0xe89487['waitForSelector']('.featured-title'), await _0x432b68(0x1f4), console['log'](_0x331029['green'](_0x232351() + '\x20[' + _0x2600d3['name'] + ']\x20Task\x20' + (_0x2b86d4 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x2b86d4]['Email'] + '\x20Generated!')), _0x4ec151['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x2b86d4]['Email'] + ',' + bouncewear[_0x2b86d4]['Password']), console['log'](_0x331029['yellow'](_0x232351() + '\x20[' + _0x2600d3['name'] + ']\x20Task\x20' + (_0x2b86d4 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x2b86d4]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x505dc1) {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0x2b86d4 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x505dc1));
            }
        } catch (_0x57df36) {
            console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0x2b86d4 + 0x1) + '\x20:\x20' + _0x57df36));
        } finally {
            _0x208a81 && _0x208a81['close'](), console['log']('Waiting\x20for\x20' + _0xfbfb8a['delay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['delay']);
        }
    }
}
async function _0x65e61e(_0x34332, _0x4e5e8b, _0x38fb6b, _0x37853c) {
    _0x1f09f1['use'](_0x468b50()), _0x1f09f1['use'](_0x3db05d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xfbfb8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5ec3a4 = 0x0; _0x5ec3a4 < _0x38fb6b['length']; _0x5ec3a4++) {
        var _0x3a2dc1 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x194107
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xfbfb8a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3744f4
                }
            ]
        }];
        const _0x10ec1b = { 'embeds': _0x3a2dc1 };
        _0x194b67(_0x4e5e8b['name'] + '\x20Task\x20' + (_0x5ec3a4 + 0x1) + '\x20/\x20' + _0x38fb6b['length'] + '\x20||\x20File:\x20' + _0x4c776e + '\x20Proxies:\x20' + _0x196516), await _0x1527ec(_0x38fb6b, _0x5ec3a4);
        var _0x4bcce6 = await _0x5e9d34(_0x38fb6b[_0x5ec3a4], _0x4e5e8b, 'acc', ![]);
        const _0x4d0690 = { 'succesDEVMSG': { 'embeds': [_0x4bcce6] } };
        if (_0x38fb6b[_0x5ec3a4]['Email'] == '' || _0x38fb6b[_0x5ec3a4]['FirstName'] == '' || _0x38fb6b[_0x5ec3a4]['LastName'] == '') {
            console['log'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0x5ec3a4 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x432b68(0x7d0);
            continue;
        }
        (_0x38fb6b[_0x5ec3a4]['Password'] == '' || _0x38fb6b[_0x5ec3a4] == undefined) && _0x38fb6b[_0x5ec3a4]['Password'] == 'JRaffles23!';
        if (_0xfbfb8a['useRandomProxy'] = ![])
            var _0x5f51dc = _0x37853c[_0x5ec3a4]['split'](':');
        else
            var _0x18c9d4 = Math['round'](Math['random']() * (_0x37853c['length'] - 0x1)), _0x5f51dc = _0x37853c[_0x18c9d4]['split'](':');
        const _0x1efbcf = await _0x1f09f1['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5f51dc[0x0] + ':' + _0x5f51dc[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x8c4764 = await _0x1efbcf['newPage']();
            await _0x8c4764['authenticate']({
                'username': '' + _0x5f51dc[0x2],
                'password': '' + _0x5f51dc[0x3]
            }), console['log'](_0x232351() + '\x20[' + _0x4e5e8b['name'] + ']\x20Task\x20' + (_0x5ec3a4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x8c4764['setRequestInterception'](!![]), _0x8c4764['on']('request', _0x348f4b => {
                _0x348f4b['resourceType']() === 'image' || _0x348f4b['resourceType']() === 'font' || _0x348f4b['resourceType']() === 'media' ? _0x348f4b['abort']() : _0x348f4b['continue']();
            }), await _0x8c4764['goto'](_0x34332), await _0x432b68(0xbb8), await _0x8c4764['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x232351() + '\x20[' + _0x4e5e8b['name'] + ']\x20Task\x20' + (_0x5ec3a4 + 0x1) + '\x20:\x20Filling\x20information'), await _0x8c4764['type']('#RegisterForm-FirstName', '' + _0x38fb6b[_0x5ec3a4]['FirstName']), await _0x432b68(0x226), await _0x8c4764['type']('#RegisterForm-LastName', '' + _0x38fb6b[_0x5ec3a4]['LastName']), await _0x432b68(0x226), await _0x8c4764['type']('#RegisterForm-email', '' + _0x38fb6b[_0x5ec3a4]['Email']), await _0x432b68(0x226), await _0x8c4764['type']('#RegisterForm-password', '' + _0x38fb6b[_0x5ec3a4]['Password']), await _0x432b68(0x226), console['log'](_0x232351() + '\x20[' + _0x4e5e8b['name'] + ']\x20Task\x20' + (_0x5ec3a4 + 0x1) + '\x20:\x20Submitting..'), await _0x8c4764['$eval']('#RegisterForm', _0x351f09 => _0x351f09['submit']()), await _0x432b68(0x1f40);
            try {
                await _0x8c4764['waitForSelector']('.home-page-grid__collection'), await _0x432b68(0x1f4), console['log'](_0x331029['green'](_0x232351() + '\x20[' + _0x4e5e8b['name'] + ']\x20Task\x20' + (_0x5ec3a4 + 0x1) + '\x20:\x20Account\x20' + _0x38fb6b[_0x5ec3a4]['Email'] + '\x20Generated!')), _0x4ec151['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x38fb6b[_0x5ec3a4]['Email'] + ',' + _0x38fb6b[_0x5ec3a4]['Password']), console['log'](_0x331029['yellow'](_0x232351() + '\x20[' + _0x4e5e8b['name'] + ']\x20Task\x20' + (_0x5ec3a4 + 0x1) + '\x20:\x20Account\x20' + _0x38fb6b[_0x5ec3a4]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], _0x4d0690['succesDEVMSG']);
                } catch {
                }
                await _0x53da27(_0x5529a0, _0x4d0690['succesDEVMSG']);
            } catch (_0x3f3953) {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0x5ec3a4 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3f3953));
            }
        } catch (_0xd9c939) {
            console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0x5ec3a4 + 0x1) + '\x20:\x20' + _0xd9c939));
        } finally {
            _0x1efbcf && _0x1efbcf['close'](), console['log']('Waiting\x20for\x20' + _0xfbfb8a['delay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['delay']);
        }
    }
}
async function _0x3b73e2(_0x2b0f60, _0x173800, _0x407e8a, _0x47ad43) {
    _0x1f09f1['use'](_0x468b50()), _0x1f09f1['use'](_0x3db05d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xfbfb8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x189abc = 0x0; _0x189abc < _0x407e8a['length']; _0x189abc++) {
        var _0x4916b2, _0x30bfcd = '', _0x13356f = 0x0;
        _0x194b67(_0x173800['name'] + '\x20Task\x20' + (_0x189abc + 0x1) + '\x20/\x20' + _0x407e8a['length'] + '\x20||\x20File:\x20' + _0x4c776e + '\x20Proxies:\x20' + _0x196516), await _0x1527ec(_0x407e8a, _0x189abc);
        if (_0x407e8a[_0x189abc]['Email'] == '' || _0x407e8a[_0x189abc]['Password'] == '' || _0x407e8a[_0x189abc]['FirstName'] == '' || _0x407e8a[_0x189abc]['LastName'] == '') {
            console['log'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0x189abc + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xfbfb8a['useRandomProxy'] = ![])
            var _0x2b26fe = _0x47ad43[_0x189abc]['split'](':');
        else
            var _0x5b5597 = Math['round'](Math['random']() * (_0x47ad43['length'] - 0x1)), _0x2b26fe = _0x47ad43[_0x5b5597]['split'](':');
        const _0x2bc6e3 = await _0x1f09f1['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2b26fe[0x0] + ':' + _0x2b26fe[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x47f66c = await _0x2bc6e3['newPage']();
            await _0x47f66c['authenticate']({
                'username': '' + _0x2b26fe[0x2],
                'password': '' + _0x2b26fe[0x3]
            }), console['log'](_0x232351() + '\x20[' + _0x173800['name'] + ']\x20Task\x20' + (_0x189abc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x47f66c['setRequestInterception'](!![]), _0x47f66c['on']('request', _0x37029f => {
                _0x37029f['resourceType']() === 'image' || _0x37029f['resourceType']() === 'font' || _0x37029f['resourceType']() === 'media' ? _0x37029f['abort']() : _0x37029f['continue']();
            }), await _0x47f66c['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x47f66c['waitForSelector']('#CustomerEmail'), console['log'](_0x232351() + '\x20[' + _0x173800['name'] + ']\x20Task\x20' + (_0x189abc + 0x1) + '\x20:\x20Logging\x20in..'), await _0x47f66c['type']('#CustomerEmail', '' + _0x407e8a[_0x189abc]['Email']), await _0x432b68(0x12c), await _0x47f66c['type']('#CustomerPassword', '' + _0x407e8a[_0x189abc]['Password']), await _0x432b68(0x226), await _0x47f66c['$eval']('#customer_login', _0x1b2826 => _0x1b2826['submit']());
            try {
                await _0x47f66c['waitForSelector']('#orders'), await _0x432b68(0x4b0);
            } catch {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x173800['name'] + ']\x20Task\x20' + (_0x189abc + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x47f66c['goto']('' + _0x407e8a[_0x189abc]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x432b68(0xbb8), console['log'](_0x232351() + '\x20[' + _0x173800['name'] + ']\x20Task\x20' + (_0x189abc + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x47f66c['waitForSelector']('#email');
            } catch {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x173800['name'] + ']\x20Task\x20' + (_0x189abc + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x47f66c['type']('#email', '' + _0x407e8a[_0x189abc]['Email']), await _0x432b68(0x384), await _0x47f66c['type']('#first_name', '' + _0x407e8a[_0x189abc]['FirstName']), await _0x432b68(0x514), await _0x47f66c['type']('#last_name', '' + _0x407e8a[_0x189abc]['LastName']), await _0x432b68(0x514), await _0x47f66c['type']('#street_address', _0x407e8a[_0x189abc]['Address1'] + '\x20' + _0x407e8a[_0x189abc]['HouseNumber'] + '\x20' + _0x407e8a[_0x189abc]['Address2']), await _0x432b68(0x2bc);
            _0x407e8a[_0x189abc]['Postcode'] == undefined && (_0x407e8a[_0x189abc]['Postcode'] = _0x407e8a[_0x189abc]['Zip']);
            await _0x47f66c['type']('#zip_code', '' + _0x407e8a[_0x189abc]['Postcode']), await _0x432b68(0x320), await _0x47f66c['type']('#city', '' + _0x407e8a[_0x189abc]['City']), await _0x432b68(0x320), await _0x47f66c['type']('#bday', '01/01/1994'), await _0x432b68(0x320), await _0x47f66c['type']('#instagram', '' + _0x407e8a[_0x189abc]['Follower']), await _0x432b68(0x352);
            if (_0x407e8a[_0x189abc]['Size'] == 'RANDOM') {
                const _0x47b673 = await _0x47f66c['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x5e8f0b => {
                    return _0x5e8f0b['map'](_0x174275 => _0x174275['textContent']);
                });
                var _0x21fd72 = Math['round'](Math['random']() * (_0x47b673['length'] - 0x1));
                console['log'](_0x232351() + '\x20[' + _0x173800['name'] + ']\x20Task\x20' + (_0x189abc + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x47b673[_0x21fd72]), await _0x47f66c['click']('label[data-eu-size=\x22' + _0x47b673[_0x21fd72] + '\x22]');
            } else {
                console['log'](_0x232351() + '\x20[' + _0x173800['name'] + ']\x20Task\x20' + (_0x189abc + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x407e8a[_0x189abc]['Size']);
                try {
                    await _0x47f66c['click']('label[data-eu-size=\x22' + _0x407e8a[_0x189abc]['Size'] + '\x22]');
                } catch {
                    await _0x47f66c['click']('label[data-eu-size=\x22' + _0x407e8a[_0x189abc]['Size'] + '.0\x22]');
                }
            }
            await _0x432b68(0xbb8), await _0x47f66c['$$eval']('.raffle__checkbox-label', _0xacf571 => _0xacf571['forEach'](_0x1ccdf5 => _0x1ccdf5['click']())), await _0x432b68(0x7d0), console['log'](_0x232351() + '\x20[' + _0x173800['name'] + ']\x20Task\x20' + (_0x189abc + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x47f66c['click']('#raffle__form-submit'), await _0x432b68(0x1388);
            try {
                await _0x47f66c['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x331029['green'](_0x232351() + '\x20[' + _0x173800['name'] + ']\x20Task\x20' + (_0x189abc + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x575a2d) {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0x189abc + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x575a2d));
            }
        } catch (_0x14e756) {
            console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0x189abc + 0x1) + '\x20:\x20' + _0x14e756)), _0x30bfcd = 'yes';
        } finally {
            _0x2bc6e3 && _0x2bc6e3['close']();
            if (_0x30bfcd == 'yes' && _0x13356f != 0x5) {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x173800['name'] + ']\x20Task\x20' + (_0x189abc + 0x1) + '\x20:\x20Retrying')), _0x189abc = _0x189abc - 0x1, _0x13356f = _0x13356f + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xfbfb8a['delay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['delay']);
        }
    }
}
async function _0x35980f(_0x3683a4, _0x5a3caf, _0x21a3b4, _0x4f5da5) {
    _0x1f09f1['use'](_0x468b50()), _0x1f09f1['use'](_0x3db05d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xfbfb8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3a0772 = 0x0; _0x3a0772 < _0x21a3b4['length']; _0x3a0772++) {
        var _0x748143 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x194107
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xfbfb8a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3744f4
                }
            ]
        }];
        const _0x3de0fa = { 'embeds': _0x748143 };
        _0x194b67(_0x5a3caf['name'] + '\x20Task\x20' + (_0x3a0772 + 0x1) + '\x20/\x20' + _0x21a3b4['length'] + '\x20||\x20File:\x20' + _0x4c776e + '\x20Proxies:\x20' + _0x196516), await _0x1527ec(_0x21a3b4, _0x3a0772);
        var _0x2f164e = await _0x5e9d34(_0x21a3b4[_0x3a0772], _0x5a3caf, 'acc', ![]);
        const _0x3d14cf = { 'succesDEVMSG': { 'embeds': [_0x2f164e] } };
        if (_0x21a3b4[_0x3a0772]['Email'] == '' || _0x21a3b4[_0x3a0772]['FirstName'] == '' || _0x21a3b4[_0x3a0772]['LastName'] == '') {
            console['log'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0x3a0772 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x432b68(0x7d0);
            continue;
        }
        (_0x21a3b4[_0x3a0772]['Password'] == '' || _0x21a3b4[_0x3a0772] == undefined) && _0x21a3b4[_0x3a0772]['Password'] == 'JRaffles23!';
        if (_0xfbfb8a['useRandomProxy'] = ![])
            var _0x234f3f = _0x4f5da5[_0x3a0772]['split'](':');
        else
            var _0x1bde50 = Math['round'](Math['random']() * (_0x4f5da5['length'] - 0x1)), _0x234f3f = _0x4f5da5[_0x1bde50]['split'](':');
        const _0x37bae3 = await _0x1f09f1['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x234f3f[0x0] + ':' + _0x234f3f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x13de57 = await _0x37bae3['newPage']();
            await _0x13de57['authenticate']({
                'username': '' + _0x234f3f[0x2],
                'password': '' + _0x234f3f[0x3]
            }), console['log'](_0x232351() + '\x20[' + _0x5a3caf['name'] + ']\x20Task\x20' + (_0x3a0772 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x13de57['setRequestInterception'](!![]), _0x13de57['on']('request', _0x2e4c03 => {
                _0x2e4c03['resourceType']() === 'image' || _0x2e4c03['resourceType']() === 'font' || _0x2e4c03['resourceType']() === 'media' ? _0x2e4c03['abort']() : _0x2e4c03['continue']();
            }), await _0x13de57['goto']('https://drop.slamjam.com/account/register'), await _0x432b68(0xbb8), await _0x13de57['waitForSelector']('#FirstName'), await _0x13de57['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x13de57['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x232351() + '\x20[' + _0x5a3caf['name'] + ']\x20Task\x20' + (_0x3a0772 + 0x1) + '\x20:\x20Filling\x20information'), await _0x432b68(0x4b0), await _0x13de57['type']('#FirstName', '' + _0x21a3b4[_0x3a0772]['FirstName']), await _0x432b68(0x226), await _0x13de57['type']('#LastName', '' + _0x21a3b4[_0x3a0772]['LastName']), await _0x432b68(0x226), await _0x13de57['type']('#Email', '' + _0x21a3b4[_0x3a0772]['Email']), await _0x432b68(0x2ee), await _0x13de57['type']('#ConfirmEmail', '' + _0x21a3b4[_0x3a0772]['Email']), await _0x432b68(0x2ee), await _0x13de57['type']('#CreatePassword', '' + _0x21a3b4[_0x3a0772]['Password']), await _0x432b68(0x2ee), await _0x13de57['type']('#CreateConfirmPassword', '' + _0x21a3b4[_0x3a0772]['Password']), await _0x432b68(0x226), console['log'](_0x232351() + '\x20[' + _0x5a3caf['name'] + ']\x20Task\x20' + (_0x3a0772 + 0x1) + '\x20:\x20Submitting..'), await _0x13de57['$eval']('#create_customer', _0x2f9c74 => _0x2f9c74['submit']()), await _0x432b68(0x1388), console['log'](_0x232351() + '\x20[' + _0x5a3caf['name'] + ']\x20Task\x20' + (_0x3a0772 + 0x1) + '\x20:\x20' + _0x331029['cyan']('Solving\x20Captcha')), await _0x13de57['solveRecaptchas'](), console['log'](_0x232351() + '\x20[' + _0x5a3caf['name'] + ']\x20Task\x20' + (_0x3a0772 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x13de57['$eval']('.shopify-challenge__container\x20>\x20form', _0xda6c0d => _0xda6c0d['submit']());
            try {
                await _0x13de57['waitForSelector']('.product-card__image'), await _0x432b68(0x1f4), console['log'](_0x331029['green'](_0x232351() + '\x20[' + _0x5a3caf['name'] + ']\x20Task\x20' + (_0x3a0772 + 0x1) + '\x20:\x20Account\x20' + _0x21a3b4[_0x3a0772]['Email'] + '\x20Generated!')), _0x4ec151['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x21a3b4[_0x3a0772]['Email'] + ',' + _0x21a3b4[_0x3a0772]['Password']), console['log'](_0x331029['yellow'](_0x232351() + '\x20[' + _0x5a3caf['name'] + ']\x20Task\x20' + (_0x3a0772 + 0x1) + '\x20:\x20Account\x20' + _0x21a3b4[_0x3a0772]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], _0x3d14cf['succesDEVMSG']);
                } catch {
                }
                await _0x53da27(_0x5529a0, _0x3d14cf['succesDEVMSG']);
            } catch (_0x30847a) {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0x3a0772 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x30847a));
            }
        } catch (_0x3d4b6d) {
            console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0x3a0772 + 0x1) + '\x20:\x20' + _0x3d4b6d));
        } finally {
            _0x37bae3 && _0x37bae3['close'](), console['log']('Waiting\x20for\x20' + _0xfbfb8a['delay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['delay']);
        }
    }
}
async function _0x172308(_0x585762, _0x19b6c4, _0x5d4260, _0x194bbe) {
    _0x1f09f1['use'](_0x468b50()), _0x1f09f1['use'](_0x3db05d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xfbfb8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xd39c81 = 0x0; _0xd39c81 < _0x5d4260['length']; _0xd39c81++) {
        var _0x357cc0, _0x32f865 = '', _0x238cd8 = 0x0;
        _0x194b67(_0x19b6c4['name'] + '\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20/\x20' + _0x5d4260['length'] + '\x20||\x20File:\x20' + _0x4c776e + '\x20Proxies:\x20' + _0x196516), await _0x1527ec(_0x5d4260, _0xd39c81);
        if (_0x5d4260[_0xd39c81]['Email'] == '' || _0x5d4260[_0xd39c81]['Password'] == '' || _0x5d4260[_0xd39c81]['FirstName'] == '' || _0x5d4260[_0xd39c81]['LastName'] == '') {
            console['log'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xfbfb8a['useRandomProxy'] = ![])
            var _0x2c2c48 = _0x194bbe[_0xd39c81]['split'](':');
        else
            var _0x593e63 = Math['round'](Math['random']() * (_0x194bbe['length'] - 0x1)), _0x2c2c48 = _0x194bbe[_0x593e63]['split'](':');
        const _0x5b8be6 = await _0x1f09f1['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2c2c48[0x0] + ':' + _0x2c2c48[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x365408 = await _0x5b8be6['newPage']();
            await _0x365408['authenticate']({
                'username': '' + _0x2c2c48[0x2],
                'password': '' + _0x2c2c48[0x3]
            }), await _0x365408['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x232351() + '\x20[' + _0x19b6c4['name'] + ']\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x365408['setRequestInterception'](!![]), _0x365408['on']('request', _0x1f7383 => {
                _0x1f7383['resourceType']() === 'image' || _0x1f7383['resourceType']() === 'font' || _0x1f7383['resourceType']() === 'media' ? _0x1f7383['abort']() : _0x1f7383['continue']();
            }), await _0x365408['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x365408['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x365408['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x432b68(0x258), await _0x365408['waitForSelector']('#CustomerEmail'), console['log'](_0x232351() + '\x20[' + _0x19b6c4['name'] + ']\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x365408['type']('#CustomerEmail', '' + _0x5d4260[_0xd39c81]['Email']), await _0x432b68(0x12c), await _0x365408['type']('#CustomerPassword', '' + _0x5d4260[_0xd39c81]['Password']), await _0x432b68(0x226), await _0x365408['$eval']('#customer_login', _0x3e08b6 => _0x3e08b6['submit']()), await _0x432b68(0x7d0), await _0x365408['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x232351() + '\x20[' + _0x19b6c4['name'] + ']\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20:\x20' + _0x331029['cyan']('Solving\x20Captcha')), await _0x365408['solveRecaptchas'](), console['log'](_0x232351() + '\x20[' + _0x19b6c4['name'] + ']\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x365408['$eval']('.shopify-challenge__container\x20>\x20form', _0x1ffbc6 => _0x1ffbc6['submit']());
            try {
                await _0x365408['waitForSelector']('.nav-account'), await _0x432b68(0x4b0);
            } catch {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x19b6c4['name'] + ']\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x365408['goto']('' + _0x5d4260[_0xd39c81]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x432b68(0xbb8), console['log'](_0x232351() + '\x20[' + _0x19b6c4['name'] + ']\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x365408['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x365408['click']('.product-select-variant-wrapper'), await _0x432b68(0x320), await _0x365408['click']('li.product-select-variant__value[data-size=\x22' + _0x5d4260[_0xd39c81]['Size'] + '\x22]'), await _0x432b68(0x384), await _0x365408['$eval']('#AddToCartForm-product-template-raffle', _0x382ee8 => _0x382ee8['submit']()), await _0x365408['waitForSelector']('.cart-order-summary__content'), await _0x432b68(0x514), await _0x365408['goto']('https://drop.slamjam.com/checkout'), await _0x432b68(0x514), await _0x365408['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x232351() + '\x20[' + _0x19b6c4['name'] + ']\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x365408['select']('#checkout_shipping_address_country', '' + _0x5d4260[_0xd39c81]['Country']), await _0x432b68(0x200), await _0x365408['waitForSelector']('#checkout_shipping_address_first_name'), await _0x365408['type']('#checkout_shipping_address_first_name', '' + _0x5d4260[_0xd39c81]['FirstName']), await _0x432b68(0x237), await _0x365408['type']('#checkout_shipping_address_last_name', '' + _0x5d4260[_0xd39c81]['LastName']), await _0x432b68(0x1e0), await _0x365408['type']('#checkout_shipping_address_address1', _0x5d4260[_0xd39c81]['Address1'] + '\x20' + _0x5d4260[_0xd39c81]['HouseNumber']), await _0x432b68(0x514), await _0x365408['type']('#checkout_shipping_address_address2', '' + _0x5d4260[_0xd39c81]['Address2']), await _0x432b68(0x514);
            _0x5d4260[_0xd39c81]['Postcode'] == undefined && (_0x5d4260[_0xd39c81]['Postcode'] = _0x5d4260[_0xd39c81]['Zip']);
            await _0x365408['type']('#checkout_shipping_address_zip', '' + _0x5d4260[_0xd39c81]['Postcode']), await _0x432b68(0x2bc), await _0x365408['type']('#checkout_shipping_address_city', '' + _0x5d4260[_0xd39c81]['City']), await _0x432b68(0x320), await _0x365408['type']('#checkout_shipping_address_phone', '' + _0x5d4260[_0xd39c81]['Phone']), await _0x432b68(0x320), await _0x365408['click']('#continue_button'), await _0x432b68(0xbb8), await _0x365408['waitForSelector']('.summary-title'), await _0x432b68(0x320), await _0x365408['click']('#continue_button'), await _0x432b68(0x320), console['log'](_0x232351() + '\x20[' + _0x19b6c4['name'] + ']\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x365408['waitForSelector']('#checkout_credit_card_vault'), await _0x432b68(0x3e8);
            var _0x50ce88 = await _0x365408['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x3ccf1d = await _0x50ce88['contentFrame']();
            await _0x3ccf1d['click']('#number'), await _0x432b68(0x3e8), await _0x3ccf1d['type']('#number', '' + _0x5d4260[_0xd39c81]['CardNumber'], { 'delay': 0x78 }), _0x50ce88 = await _0x365408['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x3ccf1d = await _0x50ce88['contentFrame'](), await _0x432b68(0x1c2), await _0x3ccf1d['click']('#name'), await _0x432b68(0x1f4), await _0x3ccf1d['type']('#name', '' + _0x5d4260[_0xd39c81]['NameOnCard'], { 'delay': 0x78 }), _0x50ce88 = await _0x365408['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x3ccf1d = await _0x50ce88['contentFrame'](), await _0x432b68(0x1c2), await _0x3ccf1d['click']('#expiry'), await _0x432b68(0x1f4), await _0x3ccf1d['type']('#expiry', '' + _0x5d4260[_0xd39c81]['ExpiryDate'], { 'delay': 0x78 }), _0x50ce88 = await _0x365408['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x3ccf1d = await _0x50ce88['contentFrame'](), await _0x432b68(0x1c2), await _0x3ccf1d['click']('#verification_value'), await _0x432b68(0x1f4), await _0x3ccf1d['type']('#verification_value', '' + _0x5d4260[_0xd39c81]['CVV'], { 'delay': 0x78 }), await _0x365408['$eval']('#accepts-flag-raffle', _0x1b69d4 => _0x1b69d4['click']()), await _0x432b68(0x7d0), console['log'](_0x232351() + '\x20[' + _0x19b6c4['name'] + ']\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x365408['$eval']('#continue_button', _0x59cd80 => _0x59cd80['click']()), await _0x432b68(0x1b58), await _0x365408['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x365408['$eval']('.edit_checkout.animate-floating-labels', _0x5cef17 => _0x5cef17['submit']()), await _0x432b68(0x7d0);
            try {
                await _0x365408['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), console['log'](_0x331029['green'](_0x232351() + '\x20[' + _0x19b6c4['name'] + ']\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x397ca4) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x397ca4['message']);
            }
            var _0x5dd928 = await _0x5e9d34(_0x5d4260[_0xd39c81], _0x19b6c4, 'dev', ![]), _0x5c906e = await _0x5e9d34(_0x5d4260[_0xd39c81], _0x19b6c4, 'pub', ![]);
            const _0x2ac331 = {
                'succesDEVMSG': { 'embeds': [_0x5dd928] },
                'succesPUBMSG': { 'embeds': [_0x5c906e] }
            };
            try {
                _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], _0x2ac331['succesDEVMSG']), await _0x432b68(0xc8), await _0x53da27(_0x57d5d3, _0x2ac331['succesDEVMSG']), await _0x432b68(0xc8), await _0x53da27(_0x1a2d91, _0x2ac331['succesPUBMSG']);
            } catch (_0xbeb729) {
                console['log'](_0x331029['yellow'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xbeb729));
            }
        } catch (_0x22b42f) {
            console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20:\x20' + _0x22b42f)), _0x357cc0 = '' + _0x22b42f;
            var _0x12b891 = await _0x5e9d34(kickz[_0xd39c81], _0x19b6c4, 'dev', !![], _0x357cc0);
            EMBEDS['errorDEV'] = { 'embeds': [_0x12b891] }, _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], EMBEDS['errorDEV']), await _0x53da27(_0x2d1d89, EMBEDS['errorDEV']), _0x32f865 = 'yes';
        } finally {
            _0x5b8be6 && _0x5b8be6['close']();
            if (_0x32f865 == 'yes' && _0x238cd8 != 0x5) {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x19b6c4['name'] + ']\x20Task\x20' + (_0xd39c81 + 0x1) + '\x20:\x20Retrying')), _0xd39c81 = _0xd39c81 - 0x1, _0x238cd8 = _0x238cd8 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xfbfb8a['delay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['delay']);
        }
    }
}
async function _0x40ca31(_0x31984f, _0x32070a, _0x2a3a39) {
    var _0x3f2837 = ![], _0x55adbe = ![];
    if (_0xfbfb8a['captchaKey'] == '' || _0xfbfb8a['captchaKey'] == undefined)
        return console['log'](_0x331029['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x1f09f1['use'](_0x468b50()), _0x1f09f1['use'](_0x3db05d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xfbfb8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xfe07ae = 0x0; _0xfe07ae < _0x32070a['length']; _0xfe07ae++) {
        var _0x2eaac8, _0x1d7e7d = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x32070a[_0xfe07ae]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x32070a[_0xfe07ae]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x194107
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xfbfb8a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3744f4
                }
            ]
        }];
        const _0x7b2ec3 = { 'embeds': _0x1d7e7d };
        _0x194b67(_0x31984f['name'] + '\x20Task\x20' + (_0xfe07ae + 0x1) + '\x20/\x20' + _0x32070a['length'] + '\x20||\x20File:\x20' + _0x4c776e + '\x20Proxies:\x20' + _0x196516), await _0x1527ec(_0x32070a, _0xfe07ae);
        var _0x2cfe8c = await _0x5e9d34(_0x32070a[_0xfe07ae], _0x31984f, 'dev', ![]), _0x253e9e = await _0x5e9d34(_0x32070a[_0xfe07ae], _0x31984f, 'pub', ![]);
        const _0x15607c = {
            'succesDEVMSG': { 'embeds': [_0x2cfe8c] },
            'succesPUBMSG': { 'embeds': [_0x253e9e] }
        };
        if (_0x32070a[_0xfe07ae]['Email'] == '' || _0x32070a[_0xfe07ae]['Url'] == '' || _0x32070a[_0xfe07ae]['FirstName'] == '' || _0x32070a[_0xfe07ae]['LastName'] == '') {
            console['log'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0xfe07ae + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xfbfb8a['useRandomProxy'] = ![])
            var _0x25f0c6 = _0x2a3a39[_0xfe07ae]['split'](':');
        else
            var _0x433ea6 = Math['round'](Math['random']() * (_0x2a3a39['length'] - 0x1)), _0x25f0c6 = _0x2a3a39[_0x433ea6]['split'](':');
        const _0xa1c806 = await _0x1f09f1['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x25f0c6[0x0] + ':' + _0x25f0c6[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x26fbb8 = await _0xa1c806['newPage']();
            await _0x26fbb8['authenticate']({
                'username': '' + _0x25f0c6[0x2],
                'password': '' + _0x25f0c6[0x3]
            }), console['log'](_0x232351() + '\x20[' + _0x31984f['name'] + ']\x20Task\x20' + (_0xfe07ae + 0x1) + '\x20:\x20Getting\x20Session'), await _0x26fbb8['setRequestInterception'](!![]), _0x26fbb8['on']('request', _0x17c8a5 => {
                _0x17c8a5['resourceType']() === 'image' || _0x17c8a5['resourceType']() === 'font' || _0x17c8a5['resourceType']() === 'media' ? _0x17c8a5['abort']() : _0x17c8a5['continue']();
            }), await _0x26fbb8['goto']('' + _0x32070a[_0xfe07ae]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x26fbb8['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x232351() + '\x20[' + _0x31984f['name'] + ']\x20Task\x20' + (_0xfe07ae + 0x1) + '\x20:\x20Filling\x20Information'), await _0x26fbb8['type']('#comp_firstname', '' + _0x32070a[_0xfe07ae]['FirstName']), await _0x26fbb8['waitForSelector']('#comp_lastname'), await _0x26fbb8['type']('#comp_lastname', '' + _0x32070a[_0xfe07ae]['LastName']), await _0x26fbb8['waitForSelector']('#comp_email'), await _0x26fbb8['type']('#comp_email', '' + _0x32070a[_0xfe07ae]['Email']), await _0x26fbb8['waitForSelector']('#comp_paypalemail'), await _0x26fbb8['type']('#comp_paypalemail', '' + _0x32070a[_0xfe07ae]['Email']), await _0x26fbb8['waitForSelector']('#comp_mobile_end'), await _0x26fbb8['type']('#comp_mobile_end', '' + _0x32070a[_0xfe07ae]['Phone']), await _0x26fbb8['waitForSelector']('#comp_dob'), await _0x26fbb8['type']('#comp_dob', '08/09/1992'), console['log'](_0x232351() + '\x20[' + _0x31984f['name'] + ']\x20Task\x20' + (_0xfe07ae + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x32070a[_0xfe07ae]['Size'] == 'RANDOM') {
                const _0x310086 = await _0x26fbb8['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4cdf0c => {
                    return _0x4cdf0c['map'](_0x475d91 => _0x475d91['value']);
                });
                var _0x1ded99 = Math['round'](Math['random']() * (_0x310086['length'] - 0x2));
                await _0x26fbb8['select']('#shoesize', _0x310086[_0x1ded99 + 0x1]), await _0x432b68(0x3e8);
            } else {
                const _0x340baf = await _0x26fbb8['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2e2c67 => {
                    return _0x2e2c67['map'](_0x45f34e => _0x45f34e['innerText']);
                }), _0x4d0ae0 = await _0x26fbb8['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3aa8c6 => {
                    return _0x3aa8c6['map'](_0x1cb2df => _0x1cb2df['value']);
                });
                var _0x4e469a = _0x32070a[_0xfe07ae]['Size'];
                for (var _0x401855 = 0x1; _0x401855 < _0x4d0ae0['length']; _0x401855++) {
                    var _0x211478 = _0x340baf[_0x401855]['split']('\x20')[0x0];
                    if (_0x211478 == _0x4e469a) {
                        await _0x26fbb8['select']('#shoesize', _0x4d0ae0[_0x401855]);
                        break;
                    } else {
                        if (_0x401855 + 0x1 == _0x4d0ae0['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x26fbb8['waitForSelector']('#comp_address1'), await _0x26fbb8['type']('#comp_address1', _0x32070a[_0xfe07ae]['Address1'] + '\x20' + _0x32070a[_0xfe07ae]['HouseNumber']), await _0x26fbb8['waitForSelector']('#comp_address2'), await _0x26fbb8['type']('#comp_address2', '' + _0x32070a[_0xfe07ae]['Address2']), await _0x26fbb8['waitForSelector']('#comp_address2'), await _0x26fbb8['type']('#comp_address3', '' + _0x32070a[_0xfe07ae]['City']), await _0x26fbb8['waitForSelector']('#comp_postcode'), await _0x26fbb8['type']('#comp_postcode', '' + _0x32070a[_0xfe07ae]['Zip']), console['log'](_0x232351() + '\x20[' + _0x31984f['name'] + ']\x20Task\x20' + (_0xfe07ae + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x432b68(0x4b0), await _0x26fbb8['click']('label#emailhold'), await _0x432b68(0x5dc), await _0x26fbb8['click']('#preauth_tandc_email\x20>\x20label'), await _0x432b68(0x5dc), await _0x26fbb8['click']('#submit'), await _0x26fbb8['waitForSelector']('#paymentWrap'), console['log'](_0x232351() + '\x20[' + _0x31984f['name'] + ']\x20Task\x20' + (_0xfe07ae + 0x1) + '\x20:\x20' + _0x331029['blue']('Awaiting\x20Paypal\x20Payment')), _0xa1c806['on']('targetcreated', async _0x5dc802 => {
                if (_0x5dc802['type']() === 'page') {
                    const _0x3aca54 = await _0x5dc802['page']();
                    async function _0x806809() {
                        try {
                            await _0x26fbb8['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x55adbe = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x435df9() {
                        try {
                            await _0x26fbb8['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x3f2837 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x435df9(), _0x806809(), await _0x432b68(0x493e0);
                }
            });
            async function _0x572844() {
                for (let _0x3a940f = 0x0; _0x3a940f < 0x12c; _0x3a940f++) {
                    if (_0x3f2837 == !![]) {
                        console['log'](_0x331029['green'](_0x232351() + '\x20[' + _0x31984f['name'] + ']\x20Task\x20' + (_0xfe07ae + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '')
                            try {
                                await _0x53da27(_0xfbfb8a['webhook'], _0x15607c['succesDEVMSG']);
                            } catch {
                            }
                        await _0x432b68(0xc8), await _0x53da27(_0x57d5d3, _0x15607c['succesDEVMSG']), await _0x432b68(0xc8);
                        try {
                            await _0x53da27(_0x1a2d91, _0x15607c['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x55adbe)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x432b68(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x432b68(0xbb8), await _0x26fbb8['click']('.zoid-outlet'), await _0x432b68(0x7d0), await _0x572844();
        } catch (_0x4b53e3) {
            console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x31984f['name'] + ']\x20Task\x20' + (_0xfe07ae + 0x1) + '\x20:\x20' + _0x4b53e3)), _0x2eaac8 = '' + _0x4b53e3;
            var _0x4ed1bb = await _0x5e9d34(_0x32070a[_0xfe07ae], _0x31984f, 'dev', !![], _0x2eaac8);
            _0x15607c['errorDEV'] = { 'embeds': [_0x4ed1bb] }, _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], _0x15607c['errorDEV']), await _0x53da27(_0x2d1d89, _0x15607c['errorDEV']);
        } finally {
            _0xa1c806 && _0xa1c806['close'](), console['log']('Waiting\x20for\x20' + _0xfbfb8a['delay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['delay']);
        }
    }
}
async function _0x5ccd4a(_0x4015a5, _0x219f34, _0x55fb9e) {
    _0x1f09f1['use'](_0x468b50()), _0x1f09f1['use'](_0x3db05d({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xfbfb8a['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x40e4b5 = 0x0; _0x40e4b5 < _0x219f34['length']; _0x40e4b5++) {
        _0x194b67(_0x4015a5['name'] + '\x20Task\x20' + (_0x40e4b5 + 0x1) + '\x20/\x20' + _0x219f34['length'] + '\x20||\x20File:\x20' + _0x4c776e + '\x20Proxies:\x20' + _0x196516);
        var _0x1213c2 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x194107
                },
                {
                    'name': 'Product',
                    'value': '' + _0x219f34[_0x40e4b5]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x219f34[_0x40e4b5]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xfbfb8a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0xfbfb8a['version']
                }
            ]
        }];
        const _0x108f66 = { 'embeds': _0x1213c2 };
        await _0x1527ec(_0x219f34, _0x40e4b5);
        if (_0x219f34[_0x40e4b5]['Email'] == '' || _0x219f34[_0x40e4b5]['Password'] == '' || _0x219f34[_0x40e4b5]['FirstName'] == '' || _0x219f34[_0x40e4b5]['LastName'] == '') {
            console['log'](_0x232351() + '\x20[' + _0x4015a5['name'] + ']\x20Task\x20' + (_0x40e4b5 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x219f34[_0x40e4b5]['Password'] == '' || _0x219f34[_0x40e4b5]['Password'] == undefined) && (_0x219f34[_0x40e4b5]['Password'] = 'ErehsaWonRaj1!');
        if (_0xfbfb8a['useRandomProxy'] = ![])
            var _0x44b3d4 = _0x55fb9e[_0x40e4b5]['split'](':');
        else
            var _0x319a89 = Math['round'](Math['random']() * (_0x55fb9e['length'] - 0x1)), _0x44b3d4 = _0x55fb9e[_0x319a89]['split'](':');
        const _0x58c518 = await _0x1f09f1['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x44b3d4[0x0] + ':' + _0x44b3d4[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xa20753 = await _0x58c518['newPage']();
            await _0xa20753['authenticate']({
                'username': '' + _0x44b3d4[0x2],
                'password': '' + _0x44b3d4[0x3]
            }), console['log'](_0x232351() + '\x20[' + _0x4015a5['name'] + ']\x20Task\x20' + (_0x40e4b5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xa20753['setRequestInterception'](!![]), _0xa20753['on']('request', _0x39a696 => {
                _0x39a696['resourceType']() === 'image' || _0x39a696['resourceType']() === 'font' || _0x39a696['resourceType']() === 'media' ? _0x39a696['abort']() : _0x39a696['continue']();
            }), await _0xa20753['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0xa20753['goto']('' + _0x219f34[_0x40e4b5]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0xa20753['waitForSelector']('#btnPdpAtb'), console['log'](_0x232351() + '\x20[' + _0x4015a5['name'] + ']\x20Task\x20' + (_0x40e4b5 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x219f34[_0x40e4b5]['Size']);
            const _0x523507 = await _0xa20753['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x51bc12 => {
                return _0x51bc12['map'](_0x13ae62 => _0x13ae62['innerText']);
            }), _0x57a3f0 = await _0xa20753['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x3e9528 = ![];
            if (_0x219f34[_0x40e4b5]['Size'] == 'RANDOM') {
                var _0x4f98f5 = Math['round'](Math['random']() * (_0x57a3f0['length'] - 0x1));
                await _0x57a3f0[_0x4f98f5]['click']();
            } else
                for (var _0x5a3add = 0x0; _0x5a3add < _0x523507['length']; _0x5a3add++) {
                    if (_0x523507[_0x5a3add] != _0x219f34[_0x40e4b5]['Size'])
                        continue;
                    try {
                        await _0x57a3f0[_0x5a3add]['click']();
                    } catch {
                        console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x4015a5['name'] + ']\x20Task\x20' + (_0x40e4b5 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x3e9528 = !![];
                    }
                }
            if (_0x3e9528)
                continue;
            await _0x432b68(0x578), await _0xa20753['click']('#btnPdpAtb'), await _0xa20753['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x432b68(0x3e8), console['log'](_0x232351() + '\x20[' + _0x4015a5['name'] + ']\x20Task\x20' + (_0x40e4b5 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0xa20753['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0xa20753['waitForSelector']('#email'), await _0xa20753['type']('#email', _0x219f34[_0x40e4b5]['Email']), await _0x432b68(0x226), await _0xa20753['click']('#guest-submit'), await _0x432b68(0x1b58), console['log'](_0x232351() + '\x20[' + _0x4015a5['name'] + ']\x20Task\x20' + (_0x40e4b5 + 0x1) + '\x20:\x20Filling\x20Information'), await _0xa20753['waitForSelector']('#firstname'), await _0xa20753['type']('#firstname', _0x219f34[_0x40e4b5]['FirstName'], 0x1f4), await _0x432b68(0x190), await _0xa20753['waitForSelector']('#surname'), await _0xa20753['type']('#surname', _0x219f34[_0x40e4b5]['LastName'], 0x1f4), await _0x432b68(0x190), await _0xa20753['waitForSelector']('#mobile'), await _0xa20753['type']('#mobile', _0x219f34[_0x40e4b5]['Phone'], 0x1f4), await _0x432b68(0x190), await _0xa20753['click']('#enterManualDiv'), await _0x432b68(0x5dc), await _0xa20753['waitForSelector']('#address1'), await _0xa20753['type']('#address1', _0x219f34[_0x40e4b5]['Address1'] + '\x20' + _0x219f34[_0x40e4b5]['HouseNumber'], 0x226), await _0x432b68(0x384), await _0xa20753['waitForSelector']('#address2'), await _0xa20753['type']('#address2', '' + _0x219f34[_0x40e4b5]['Address2'], 0x226), await _0x432b68(0x320);
            const _0x2a541e = await _0xa20753['$$eval']('#countryselect_view3\x20>\x20option', _0x53e91d => {
                return _0x53e91d['map'](_0x1820e8 => _0x1820e8['value']);
            });
            var _0x1e9105;
            for (var _0x21adba = 0x0; _0x21adba < _0x2a541e['length']; _0x21adba++) {
                if (_0x2a541e[_0x21adba]['startsWith']('' + _0x219f34[_0x40e4b5]['Country'])) {
                    _0x1e9105 = _0x2a541e[_0x21adba];
                    break;
                }
                continue;
            }
            await _0xa20753['select']('#countryselect_view3', '' + _0x1e9105), await _0xa20753['waitForSelector']('#address4'), await _0xa20753['type']('#address4', '' + _0x219f34[_0x40e4b5]['City'], 0x1f4), await _0x432b68(0x384), await _0xa20753['waitForSelector']('#postcode'), await _0xa20753['type']('#postcode', '' + _0x219f34[_0x40e4b5]['Zip'], 0x1f4), await _0x432b68(0x4b0);
            const _0x7751a1 = await _0xa20753['url']();
            console['log'](_0x232351() + '\x20[' + _0x4015a5['name'] + ']\x20Task\x20' + (_0x40e4b5 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x5cd6f1 = _0x7751a1['split']('?')[0x1], _0x4ba853 = await _0xa20753['$']('#co_address_submit');
            await _0x4ba853['evaluate'](_0x155bb5 => _0x155bb5['click']()), await _0x432b68(0x1388), await _0xa20753['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x5cd6f1), console['log'](_0x232351() + '\x20[' + _0x4015a5['name'] + ']\x20Task\x20' + (_0x40e4b5 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0xa20753['waitForSelector']('#paymentbuttons'), await _0x432b68(0x1388), await _0xa20753['click']('#paymentbuttons\x20>\x20div'), await _0x432b68(0x1c2), await _0xa20753['waitForSelector']('#card-number'), await _0xa20753['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x3b10b3 = await _0xa20753['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x444c68 = await _0x3b10b3['contentFrame']();
            await _0x444c68['waitForSelector']('.InputContainer'), await _0x444c68['click']('.InputContainer\x20>\x20input'), await _0x432b68(0x578), await _0xa20753['type']('#card-number', '' + _0x219f34[_0x40e4b5]['CreditNumber']), await _0x432b68(0xfa), await _0xa20753['type']('#card-expiry', '' + _0x219f34[_0x40e4b5]['ExpiryDate']), await _0x432b68(0xfa), await _0xa20753['type']('#card-cvc', '' + _0x219f34[_0x40e4b5]['CVV']), await _0x432b68(0x7d0), await _0xa20753['click']('#card-button'), console['log'](_0x232351() + '\x20[' + _0x4015a5['name'] + ']\x20Task\x20' + (_0x40e4b5 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0xa20753['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x331029['green'](_0x232351() + '\x20[' + _0x4015a5['name'] + ']\x20Task\x20' + (_0x40e4b5 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x53da27(_0x57d5d3, _0x108f66);
            } catch {
                console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x4015a5['name'] + ']\x20Task\x20' + (_0x40e4b5 + 0x1) + '\x20:\x203DS\x20Failed')), _0x1213c2[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x1213c2[0x0]['description'] = '3DS\x20Failed', await _0x53da27(_0x2d1d89, _0x108f66);
            }
        } catch (_0x14159b) {
            console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x4015a5['name'] + ']\x20Task\x20' + (_0x40e4b5 + 0x1) + '\x20:\x20' + _0x14159b)), _0x1213c2[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x1213c2[0x0]['description'] = '' + _0x14159b, await _0x53da27(_0x2d1d89, _0x108f66);
        } finally {
            _0x58c518 && _0x58c518['close']();
            if (_0x40e4b5 + 0x1 == _0x219f34['length']) {
                console['log'](_0x331029['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x432b68(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0xfbfb8a['AfewDelay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['AfewDelay']);
        }
    }
}
async function _0x3a15b5(_0x2fdba3, _0x5565aa, _0x4472bc, _0x5b8a5c, _0x1a3143) {
    var _0x444f0c, _0x407e1c = {}, _0x254a4b = [], _0x195d23 = {}, _0x5bdc84 = [
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
    !_0x5b8a5c && (_0x5b8a5c = {});
    if (_0x5565aa != 'ver') {
        _0x194b67(_0x4472bc['name'] + '\x20Task\x20' + (_0x2fdba3 + 0x1) + '\x20/\x20' + _0x5b8a5c['length'] + '\x20||\x20File:\x20' + _0x4c776e + '\x20Proxies:\x20' + _0x196516), await _0x1527ec(_0x5b8a5c, _0x2fdba3), _0x254a4b = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x194107
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5b8a5c[_0x2fdba3]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xfbfb8a['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x3744f4
                }
            ]
        }], _0x195d23 = { 'embeds': _0x254a4b }, _0x407e1c = _0x4472bc['data'];
        _0x5565aa == 'exp' ? _0x407e1c['data']['attributes']['email'] = '' + _0x5b8a5c[_0x2fdba3]['FirstName'] + _0x5b8a5c[_0x2fdba3]['LastName'] + _0xfbfb8a['catchall'] : _0x407e1c['data']['attributes']['email'] = '' + _0x5b8a5c[_0x2fdba3]['Email'];
        if (_0x5b8a5c[_0x2fdba3]['Size'] == 'RANDOM') {
        }
        _0x407e1c['data']['attributes']['properties']['$first_name'] = '' + _0x5b8a5c[_0x2fdba3]['FirstName'], _0x407e1c['data']['attributes']['properties']['$last_name'] = '' + _0x5b8a5c[_0x2fdba3]['LastName'], _0x407e1c['data']['attributes']['properties']['$address1'] = _0x5b8a5c[_0x2fdba3]['Address1'] + '\x20' + _0x5b8a5c[_0x2fdba3]['Address2'] + '\x20' + _0x5b8a5c[_0x2fdba3]['HouseNumber'], _0x407e1c['data']['attributes']['properties']['$zip'] = '' + _0x5b8a5c[_0x2fdba3]['Zip'], _0x407e1c['data']['attributes']['properties']['$city'] = '' + _0x5b8a5c[_0x2fdba3]['City'], _0x407e1c['data']['attributes']['properties']['$country'] = '' + _0x5b8a5c[_0x2fdba3]['Country'], _0x407e1c['data']['attributes']['properties']['Size'] = '' + _0x5b8a5c[_0x2fdba3]['Size'], _0x407e1c['data']['attributes']['properties']['$phone_number'] = '' + _0x5b8a5c[_0x2fdba3]['Phone'], _0x407e1c['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x5b8a5c[_0x2fdba3]['Follower'];
    }
    if (_0xfbfb8a['useRandomProxy'] = ![])
        var _0x49e73c = _0x1a3143[_0x2fdba3]['split'](':');
    else
        var _0x45563e = Math['round'](Math['random']() * (_0x1a3143['length'] - 0x1)), _0x49e73c = _0x1a3143[_0x45563e]['split'](':');
    var _0x3dfd2c = {
        'jar': _0x4dafe3,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x4472bc['url'],
        'headers': _0x4472bc['headers'],
        'body': JSON['stringify'](_0x407e1c),
        'proxy': 'http://' + _0x49e73c[0x2] + ':' + _0x49e73c[0x3] + '@' + _0x49e73c[0x0] + ':' + _0x49e73c[0x1]
    };
    return _0x5565aa != 'ver' && (_0x3dfd2c['url'] = _0x4472bc['url'], _0x3dfd2c['headers'] = _0x4472bc['headers']), _0x5565aa == 'ver' && (_0x3dfd2c['method'] = 'GET'), new Promise(function (_0x121352, _0x163409) {
        callback = async (_0x440110, _0x20844a, _0x189e7a) => {
            if (!_0x440110 && _0x20844a['statusCode'] == 0xca || !_0x440110 && _0x20844a['statusCode'] == 0xc8) {
                if (_0x5565aa != 'ver') {
                    var _0x1911b8 = await _0x5e9d34(_0x5b8a5c[_0x2fdba3], _0x4472bc, 'dev', ![]), _0x190c6a = await _0x5e9d34(_0x5b8a5c[_0x2fdba3], _0x4472bc, 'pub', ![]);
                    const _0x2cb76c = {
                        'succesDEVMSG': { 'embeds': [_0x1911b8] },
                        'succesPUBMSG': { 'embeds': [_0x190c6a] }
                    };
                    if (_0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '')
                        try {
                            await _0x53da27(_0xfbfb8a['webhook'], _0x2cb76c['succesDEVMSG']);
                        } catch {
                        }
                    await _0x432b68(0xc8), await _0x53da27(_0x57d5d3, _0x2cb76c['succesDEVMSG']), await _0x432b68(0xc8);
                    try {
                        await _0x53da27(_0x1a2d91, _0x2cb76c['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x121352(console['log'](_0x331029['green'](_0x232351() + '\x20[' + _0x4472bc['name'] + ']\x20Task\x20' + (_0x2fdba3 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x5565aa != 'ver') {
                    var _0x575477 = '' + _0x440110, _0x140244 = await _0x5e9d34(_0x5b8a5c[_0x2fdba3], _0x4472bc, 'dev', !![], _0x575477), _0x566f8b = {};
                    _0x566f8b['errorDEV'] = { 'embeds': [_0x140244] }, _0xfbfb8a['webhook'] != undefined && _0xfbfb8a['webhook'] != '' && await _0x53da27(_0xfbfb8a['webhook'], _0x566f8b['errorDEV']), await _0x53da27(_0x2d1d89, _0x566f8b['errorDEV']);
                }
                _0x163409(console['log'](_0x232351() + '\x20[' + _0x4472bc['name'] + ']\x20Task\x20' + (_0x2fdba3 + 0x1) + ':\x20' + _0x440110));
            }
        };
        try {
            _0x5565aa != 'ver' && console['log'](_0x232351() + '\x20[' + _0x4472bc['name'] + ']\x20Task\x20' + (_0x2fdba3 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x407e1c['data']['attributes']['email']), _0x18344e(_0x3dfd2c, callback);
        } catch (_0x44bdf6) {
            console['log'](_0x232351() + '\x20Task\x20' + (_0x2fdba3 + 0x1) + ':\x20' + _0x44bdf6);
        }
    });
}
;
async function _0x1d7ae0(_0x574b95, _0x6a2a5e, _0x4c7f52) {
    _0x194b67('' + _0x6a2a5e), _0x1f09f1['use'](_0x468b50());
    const _0x2a408f = await _0x1f09f1['launch']({
        'headless': ![],
        'args': [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security'
        ]
    });
    try {
        console['log'](_0x232351() + '\x20[' + _0x6a2a5e + ']\x20Getting\x20Session');
        const _0x2fee26 = await _0x2a408f['newPage']();
        await _0x2fee26['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x2fee26['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x232351() + '\x20[' + _0x6a2a5e + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x2fee26['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x232351() + '\x20[' + _0x6a2a5e + ']\x20Successfully\x20logged\x20in'), await _0x432b68(0x2710);
        } catch {
            throw new Error('Login\x20session\x20expired');
        }
        for (var _0x239139 = 0x0; _0x239139 < _0x574b95['length']; _0x239139++) {
            console['log'](_0x232351() + '\x20[' + _0x6a2a5e + ']\x20Task\x20' + (_0x239139 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x194b67(_0x6a2a5e + '\x20Task\x20' + (_0x239139 + 0x1) + '\x20/\x20' + _0x574b95['length']), await _0x2fee26['goto']('' + _0x574b95[_0x239139], { 'waitUntil': 'networkidle2' }), await _0x432b68(0xbb8);
            try {
                const _0x2c63ac = await _0x2fee26['$']('#challenge-heading');
                _0x2c63ac && console['log'](_0x232351() + '\x20[' + _0x6a2a5e + ']\x20Task\x20' + (_0x239139 + 0x1) + '\x20:\x20' + _0x331029['yellow']('2FA\x20Required'));
                console['log']('after\x20network'), await _0x2fee26['waitForSelector']('#payment-submit-btn', { 'timeout': 0x493e0 }), console['log']('after\x20waitfor'), await _0x432b68(0x5dc), await _0x2fee26['$eval']('#payment-submit-btn', _0x5c39d1 => _0x5c39d1['click']()), await _0x2fee26['click']('#payment-submit-btn');
                try {
                    await _0x2fee26['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x432b68(0x5dc), console['log'](_0x331029['green'](_0x232351() + '\x20[' + _0x6a2a5e + ']\x20Task\x20' + (_0x239139 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x2066d1) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x2066d1['message']);
                }
            } catch {
            }
            await _0x432b68(0xf4240);
        }
    } catch (_0x280306) {
        console['log'](_0x331029['red']('' + _0x280306));
    } finally {
        await _0x2a408f['close']();
    }
}
async function _0x4094e0() {
    await _0x1438a6(), console['clear']();
    if (_0x3744f4 != 'devkey') {
        let _0x5e8895 = await _0x27ee70['autoUpdate']();
        if (_0x5e8895 === 'yes')
            return _0x34c18a('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1642b == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x432b68(0x2710);
        ;
    }
    await _0x951a11(_0x1642b);
    if (_0x2a6136 === ![])
        return console['log']('Closing\x20Browser'), await _0x432b68(0xbb8);
    else
        try {
            var _0x2265cf = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x194107
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x3744f4
                    }
                ]
            }];
            const _0x3e61d4 = { 'embeds': _0x2265cf };
            var _0x6f8d43 = await _0x5e9d34(null, null, 'open', ![]);
            const _0x1a8ef6 = { 'openDEVMSG': { 'embeds': [_0x6f8d43] } };
            await _0x53da27(_0x1a55fe, _0x1a8ef6['openDEVMSG']);
            async function _0xd76713() {
                _0x194b67('JRaffles\x20' + _0x3744f4), console['clear'](), console['log']('Welcome\x20to\x20' + _0x331029['cyan']('JRaffles();') + '\x20' + _0x3744f4), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x1ff97c = 0x0; _0x1ff97c < _0x18039d['length'] - 0x2; _0x1ff97c++) {
                    if (_0x18039d[_0x1ff97c]['name'] === 'Reload\x20Settings' || _0x18039d[_0x1ff97c]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x1ff97c + ')\x20[' + _0x18039d[_0x1ff97c]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x18039d['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x18039d['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x180b51();
                if (taskModule > _0x18039d['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x432b68(0x3e8), _0xd76713();
                if (_0x18039d[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x12c26c(_0x18039d[taskModule]['modules']);
                    var _0x2a8f47 = _0x18039d[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x29442b = await _0x1d1357(), _0x4d57ce = await _0x379ffe();
                    if (_0x4d57ce[0x0]['Url'] == '' || _0x4d57ce[0x0]['Url'] == undefined) {
                        await _0x34f976(_0x29442b);
                        var _0x5305a2 = await _0x15711e();
                        return await afewFunction('' + _0x15e76d[_0x5305a2], 'nor', _0x2a8f47, _0x4d57ce, _0x29442b), _0xd76713();
                    }
                    return await afewFunction(_0x4d57ce[0x0]['Url'], 'nor', _0x2a8f47, _0x4d57ce, _0x29442b), _0xd76713();
                } else {
                    if (_0x18039d[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x12c26c(_0x18039d[taskModule]['modules']);
                        var _0x2a8f47 = _0x18039d[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x29442b = await _0x1d1357(), _0xc4fe6d = await _0x379ffe();
                            console['log']('Starting\x20' + _0xc4fe6d['length'] + '\x20MAHA\x20Tasks');
                            for (var _0xce6e8a = 0x0; _0xce6e8a < _0xc4fe6d['length']; _0xce6e8a++) {
                                console['log'](_0x232351() + '\x20[' + _0x2a8f47['name'] + ']\x20Task\x20' + (_0xce6e8a + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x5136b1(_0xce6e8a, 'nor', _0x2a8f47, _0xc4fe6d, _0x29442b), console['log'](_0x232351() + '\x20[' + _0x2a8f47['name'] + ']\x20Sleeping\x20for\x20' + _0xfbfb8a['MahaDelay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['MahaDelay']);
                                } catch (_0x5e3191) {
                                    console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x2a8f47['name'] + ']\x20Task\x20' + (_0xce6e8a + 0x1) + ':\x20Error\x20' + _0x5e3191));
                                }
                            }
                            ;
                            return _0xd76713();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x29442b = await _0x1d1357();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x494740(), _0x183149 = linksRaw['split'](';'), console['log'](_0x183149['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0xce6e8a = 0x0; _0xce6e8a < _0x183149['length']; _0xce6e8a++) {
                                    _0x2a8f47['url'] = _0x183149[_0xce6e8a], console['log'](_0x232351() + '\x20[' + _0x2a8f47['name'] + ']\x20Task\x20' + (_0xce6e8a + 0x1) + ':\x20Getting\x20Session'), await _0x5136b1(_0xce6e8a, 'ver', _0x2a8f47, _0xc4fe6d, _0x29442b), console['log'](_0x232351() + '\x20[' + _0x2a8f47['name'] + ']\x20Sleeping\x20for\x20' + _0xfbfb8a['verificationDelay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['verificationDelay']);
                                }
                                ;
                                return _0xd76713();
                            }
                        }
                    } else {
                        if (_0x18039d[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x12c26c(_0x18039d[taskModule]['modules']);
                            var _0x2a8f47 = _0x18039d[taskModule]['modules'][taskFunction], _0x29442b = await _0x1d1357(), _0x446542 = await _0x379ffe();
                            return await _0x4f746b(_0x446542, _0x29442b, _0x2a8f47), await _0x432b68(0x1388), _0xd76713();
                        } else {
                            if (_0x18039d[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x12c26c(_0x18039d[taskModule]['modules']);
                                var _0x2a8f47 = _0x18039d[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x29442b = await _0x1d1357(), _0x597379 = await _0x379ffe();
                                    console['log']('Starting\x20' + _0x331029['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0xce6e8a = 0x0; _0xce6e8a < _0x597379['length']; _0xce6e8a++) {
                                        console['log'](_0x232351() + '\x20[' + _0x2a8f47['name'] + ']\x20Task\x20' + (_0xce6e8a + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x3a15b5(_0xce6e8a, 'nor', _0x2a8f47, _0x597379, _0x29442b);
                                        } catch (_0x5e2a69) {
                                            console['log'](_0x331029['red'](_0x232351() + '\x20[' + _0x2a8f47['name'] + ']\x20Task\x20' + (_0xce6e8a + 0x1) + ':\x20Task\x20failed\x20' + _0x5e2a69));
                                        }
                                        console['log'](_0x232351() + '\x20[' + _0x2a8f47['name'] + ']\x20Sleeping\x20for\x20' + _0xfbfb8a['delay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['delay']);
                                    }
                                    return _0xd76713();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x29442b = await _0x1d1357();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), linksRaw = await _0x494740(), _0x183149 = linksRaw['split'](';'), console['log'](_0x183149['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0xce6e8a = 0x0; _0xce6e8a < _0x183149['length']; _0xce6e8a++) {
                                            try {
                                                _0x2a8f47['url'] = _0x183149[_0xce6e8a], console['log'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Task\x20' + (_0xce6e8a + 0x1) + ':\x20Getting\x20Session'), await _0x3a15b5(_0xce6e8a, 'ver', _0x2a8f47, null, _0x29442b), console['log'](_0x232351() + '\x20[' + _0x18039d[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0xfbfb8a['verificationDelay'] + '\x20ms'), await _0x432b68(_0xfbfb8a['verificationDelay']);
                                            } catch (_0x1d12bb) {
                                                console['log'](_0x1d12bb), await _0x432b68(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0xd76713();
                                    }
                                }
                                ;
                            } else {
                                if (_0x18039d[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x12c26c(_0x18039d[taskModule]['modules']);
                                    var _0x2a8f47 = _0x18039d[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x5789ae('https://bouncewear.com/nl/account/register', _0x2a8f47);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x18039d[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x12c26c(_0x18039d[taskModule]['modules']);
                                        var _0x2a8f47 = _0x18039d[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x29442b = await _0x1d1357(), _0x1b532d = await _0x379ffe();
                                            return await _0x65e61e('https://patta.nl/account/register', _0x2a8f47, _0x1b532d, _0x29442b), _0xd76713();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x29442b = await _0x1d1357(), _0x1b532d = await _0x379ffe();
                                                return await _0x3b73e2('', _0x2a8f47, _0x1b532d, _0x29442b), _0xd76713();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x18039d[taskModule]['name'] == 'SLAMJAM') {
                                            taskFunction = await _0x12c26c(_0x18039d[taskModule]['modules']);
                                            var _0x2a8f47 = _0x18039d[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x29442b = await _0x1d1357(), _0x257cf5 = await _0x379ffe();
                                                return await _0x35980f('https://slamjam.nl/account/register', _0x2a8f47, _0x257cf5, _0x29442b), _0xd76713();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x29442b = await _0x1d1357(), _0x257cf5 = await _0x379ffe();
                                                    return await _0x172308('', _0x2a8f47, _0x257cf5, _0x29442b), _0xd76713();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x18039d[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x12c26c(_0x18039d[taskModule]['modules']);
                                                var _0x2a8f47 = _0x18039d[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x29442b = await _0x1d1357(), _0x5faf87 = await _0x379ffe();
                                                    return await _0x47081b('https://www.kickz.com/nl/login/', _0x2a8f47, _0x5faf87, _0x29442b), _0xd76713();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x29442b = await _0x1d1357(), _0x5faf87 = await _0x379ffe();
                                                        return await _0x4fe741(_0x2a8f47, _0x5faf87, _0x29442b), _0xd76713();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x18039d[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x12c26c(_0x18039d[taskModule]['modules']);
                                                    var _0x2a8f47 = _0x18039d[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x29442b = await _0x1d1357(), _0x3ee42b = await _0x379ffe();
                                                        return await _0x40ca31(_0x2a8f47, _0x3ee42b, _0x29442b), _0xd76713();
                                                    }
                                                } else {
                                                    if (_0x18039d[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x432b68(0x3e8), _0xd76713();
                                                    else {
                                                        if (_0x18039d[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0xb4d444 = _0x18039d[taskModule]['name'];
                                                            const _0x5159bc = await _0x494740();
                                                            var _0x183149 = _0x5159bc['split'](';');
                                                            await _0x1d7ae0(_0x183149, _0xb4d444);
                                                        } else {
                                                            if (_0x18039d[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x802c48 = 0x0;
                                                                for (const _0x4e197d in _0xfbfb8a) {
                                                                    console['log']('(' + _0x802c48 + ')\x20' + _0x4e197d + '\x20:\x20' + _0xfbfb8a[_0x4e197d]), _0x802c48++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x802c48 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x62e9e5 = await _0x56579d();
                                                                if (_0x62e9e5 == _0x802c48)
                                                                    return _0xd76713();
                                                                console['clear'];
                                                                var _0x4c6829 = 0x0;
                                                                for (var _0x2297a6 in _0xfbfb8a) {
                                                                    if (_0x62e9e5 == _0x4c6829) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x2297a6 + '\x20:'), _0xfbfb8a[_0x2297a6] = await _0x52f5a8(), _0x4ec151['writeFileSync']('../settings.json', JSON['stringify'](_0xfbfb8a));
                                                                        break;
                                                                    } else
                                                                        _0x4c6829++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x432b68(0xbb8), _0xd76713();
                                                            } else {
                                                                if (_0x18039d[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x1438a6(), _0xd76713();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x18039d[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x84ce29 = await _0x3f9e91();
                                                                        _0x84ce29 == 'ModuleVoorDeBoys' ? (await _0x34f976(), await _0x15711e(), await afewFunction(_0x15e76d[_0x5305a2], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x432b68(0xbb8));
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
            await _0xd76713();
        } catch (_0x3d759d) {
            return console['log'](_0x3d759d), await _0x432b68(0x3a98);
        }
}
;
_0x194b67('JRaffles\x20' + _0x3744f4), _0x1438a6();
try {
    _0x4094e0();
} catch (_0x3087df) {
    var _0x5e234c = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x194107
            },
            {
                'name': 'Version',
                'value': '' + _0x3744f4
            },
            {
                'name': 'Error',
                'value': '' + _0x3087df
            }
        ]
    }];
    const _0x5d3b85 = { 'embeds': _0x5e234c };
    _0x53da27(_0x2d1d89, _0x5d3b85);
}