const { EmbedBuilder: _0x215ad7 } = require('discord.js');
var _0x20d954 = require('exe');
const { execFile: _0x1ac494 } = require('child_process'), _0x422ef2 = require('puppeteer-extra'), _0x4b1476 = require('puppeteer-extra-plugin-recaptcha'), _0x4f4dc3 = require('puppeteer-extra-plugin-stealth'), _0x178ebf = require('chalk'), _0x27b422 = require('node-bash-title'), _0x278a25 = require('fs'), _0x8a36a6 = require('axios'), _0x1ac372 = require('papaparse');
var _0x5734b3 = require('random-name');
const _0x89cea3 = require('request');
var _0x292933 = require('prompt');
const _0x4ea6b0 = _0x89cea3['jar']();
var _0x74362e = {};
const _0x57f11e = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x4e085e = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x1b6c78 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x2aeda0 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x3ea1e9 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x359bcf = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x7966e9 = 'https://discord.com/api/webhooks/', _0xcb8772 = '' + _0x7966e9 + _0x1b6c78, _0x485afe = '' + _0x7966e9 + _0x2aeda0, _0x4f32a3 = '' + _0x7966e9 + _0x57f11e, _0xab417d = '' + _0x7966e9 + _0x4e085e, _0x1f889a = '' + _0x7966e9 + _0x3ea1e9, _0xe62ef2 = '' + _0x7966e9 + _0x359bcf;
const _0xd1d378 = JSON['parse'](_0x278a25['readFileSync']('../package.json', 'utf-8')), _0x1574e6 = _0xd1d378['version'];
var _0x2a553f, _0xfc070a, _0x5ef447, _0x30345a, _0x1be2eb, _0x43c65c, _0x295d29, _0x4d3c30;
const _0x35103c = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x3bc9e6 = ![];
const _0x117f9d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x4dcc32 = '0123456789';
var _0x314da7 = _0x117f9d['split']('');
const _0xb974d4 = require('auto-git-update'), { PageEmittedEvents: _0x146637 } = require('puppeteer'), { getRandomValues: _0x1cb429 } = require('crypto'), { resolve: _0x552967 } = require('path'), { Console: _0x20d751 } = require('console'), _0x26cc62 = {
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
}, _0x22b7ea = new _0xb974d4(_0x26cc62);
async function _0x189550() {
    _0x1be2eb = _0x278a25['readdirSync']('../proxies'), _0x30345a = _0x278a25['readdirSync']('../tasks'), !_0x278a25['existsSync']('../accounts/fenom.csv') && _0x278a25['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x278a25['existsSync']('../accounts/bstn.csv') && _0x278a25['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x278a25['existsSync']('../failed-tasks.csv') && _0x278a25['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x278a25['existsSync']('../successful-tasks.csv') && _0x278a25['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x74362e = JSON['parse'](_0x278a25['readFileSync']('../settings.json', 'utf-8')), !_0x74362e['delay'] && (_0x74362e['delay'] = 0x2710, _0x278a25['writeFileSync']('../settings.json', JSON['stringify'](_0x74362e))), !_0x74362e['captchaKey'] && (_0x74362e['captchaKey'] = '', _0x278a25['writeFileSync']('../settings.json', JSON['stringify'](_0x74362e))), !_0x74362e['useRandomProxy'] && (_0x74362e['useRandomProxy'] = !![], _0x278a25['writeFileSync']('../settings.json', JSON['stringify'](_0x74362e))), !_0x74362e['webhook'] && (_0x74362e['webhook'] = '', _0x278a25['writeFileSync']('../settings.json', JSON['stringify'](_0x74362e))), _0x74362e['MahaDelay'] = _0x74362e['delay'], _0x7966e9 = _0x74362e['webhook'], _0x43c65c = _0x74362e['licenseKey'];
}
let _0x3fab1e, _0x10eec2 = [], _0x51e7fe;
const _0x14ae3c = _0xef4d6e => new Promise(_0x51595 => setTimeout(_0x51595, _0xef4d6e));
function _0x1a3fd4(_0xb5e4c3, _0x5d6f3c) {
    return Math['floor'](Math['random']() * (_0x5d6f3c - _0xb5e4c3 + 0x1) + _0xb5e4c3);
}
async function _0x25a02b(_0x4d64e9) {
    return _0x8a36a6['get']('https://api.hyper.co/v4/licenses/' + _0x4d64e9, { 'headers': { 'Authorization': 'Bearer\x20' + _0x35103c } })['then'](_0x4a32ed => _0x4a32ed['data'])['catch'](() => null);
}
;
async function _0x4af1e8(_0x11b25b) {
    console['clear']();
    if (_0x11b25b == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x97a75b = await _0x292933['get']('License');
        if (_0x97a75b['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x14ae3c(0xbb8), _0x4af1e8(_0x11b25b);
        _0x11b25b = _0x97a75b['License'], _0x74362e['licenseKey'] = _0x11b25b, _0x43c65c = _0x11b25b, _0x278a25['writeFileSync']('../settings.json', JSON['stringify'](_0x74362e));
    }
    console['log']('Checking\x20license\x20' + _0x43c65c + '...'), await _0x14ae3c(0x320);
    const _0x3051ed = await _0x25a02b(_0x11b25b);
    _0x295d29 = JSON['stringify'](_0x3051ed['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x4d3c30 = JSON['stringify'](_0x3051ed['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x3051ed)
        return console['log']('License\x20not\x20found');
    if (!_0x3051ed['user'])
        return console['log']('License\x20not\x20bound');
    return _0x3051ed['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x3bc9e6 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x3bc9e6 = ![]);
}
async function _0x1871a6() {
    var _0x479656 = await _0x292933['get']('Module');
    return console['clear'](), _0x479656['Module'];
}
;
async function _0x98b48() {
    var _0x37a88a = await _0x292933['get']('Setting');
    return console['clear'](), _0x37a88a['Setting'];
}
async function _0x2e4a12() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x1fe7f9 = 0x0; _0x1fe7f9 < _0x30345a['length']; _0x1fe7f9++) {
        console['log']('\x20(' + _0x1fe7f9 + ')\x20' + _0x30345a[_0x1fe7f9]);
    }
    console['log']('');
    var _0xa3df56 = await _0x292933['get']('Task');
    if (_0xa3df56['Task'] > _0x30345a['length'] - 0x1 || isNaN(_0xa3df56['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x14ae3c(0x3e8), _0x2e4a12();
    var _0x465700 = _0x278a25['readFileSync']('../tasks/' + _0x30345a[_0xa3df56['Task']], 'utf-8');
    return _0x5ef447 = _0x1ac372['parse'](_0x465700, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x178ebf['blue'](_0x30345a[_0xa3df56['Task']])), _0x2a553f = _0x30345a[_0xa3df56['Task']], _0x5ef447;
}
async function _0x9b8c0f() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x32af2c = 0x0; _0x32af2c < _0x1be2eb['length']; _0x32af2c++) {
        console['log']('\x20(' + _0x32af2c + ')\x20' + _0x1be2eb[_0x32af2c]);
    }
    console['log']('');
    var _0x53bb25 = await _0x292933['get']('Proxies');
    if (_0x53bb25['Proxies'] > _0x1be2eb['length'] - 0x1 || isNaN(_0x53bb25['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x14ae3c(0x3e8), _0x9b8c0f();
    var _0x358296 = _0x278a25['readFileSync']('../proxies/' + _0x1be2eb[_0x53bb25['Proxies']], 'utf-8')['split']('\x0a');
    let _0x4e8ffe = _0x358296['map']((_0x184ef2, _0x19f2c1) => {
        sanatizeProxy = _0x184ef2['replace']('\x0d', '');
        if (_0x358296[_0x19f2c1 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0xfc070a = _0x1be2eb[_0x53bb25['Proxies']], console['clear'](), _0x4e8ffe;
}
async function _0x31fba8() {
    var _0x39108f = await _0x292933['get']('Value');
    return console['clear'](), _0x39108f['Value'];
}
async function _0x39581e(_0x4efb6a) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x39607c = 0x0; _0x39607c < _0x4efb6a['length']; _0x39607c++) {
        console['log']('\x20(' + _0x39607c + ')\x20[' + _0x4efb6a[_0x39607c]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x2516e4 = await _0x292933['get']('Module');
    return _0x2516e4['Module'];
}
async function _0x3e397c() {
    var _0x554ee6 = await _0x292933['get']('Password');
    return console['clear'](), _0x554ee6['Password'];
}
;
async function _0x2baae7() {
    var _0x3b40ef = await _0x292933['get']('Links');
    return _0x3b40ef['Links'];
}
;
async function _0x489260() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x21edef = 0x0; _0x21edef < _0x10eec2['length']; _0x21edef++) {
        console['log']('\x20(' + _0x21edef + ')\x20' + _0x10eec2[_0x21edef]);
    }
    ;
    console['log']();
    let _0x24eb8a = await _0x292933['get']('Product');
    return console['clear'](), _0x24eb8a['Product'];
}
;
function _0x51e22d() {
    var _0x5d3fee = new Date(Date['now']())['toLocaleTimeString']();
    return _0x5d3fee;
}
;
function _0x20da28() {
    var _0x1497c2 = new Date(Date['now']())['toLocaleString']();
    return _0x1497c2['replace'](',', '');
}
const _0x3915d9 = [
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
async function _0x39d9c6(_0xbf79dd, _0x1741a2) {
    let _0x2ec640 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x1574e6 != 'devkey') {
        await _0x8a36a6['post'](_0xbf79dd, _0x1741a2, _0x2ec640);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x549c09(_0x364174, _0x3b8cf2, _0x4e5c97, _0x274abf, _0x9b8a3f) {
    if (!_0x274abf && _0x4e5c97 == 'dev') {
        var _0x34c06e = new _0x215ad7()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x3b8cf2['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x3b8cf2['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x364174['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x74362e['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x295d29,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x364174['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x1574e6,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x34c06e['data'];
    } else {
        if (_0x274abf && _0x4e5c97 == 'dev') {
            var _0x34c06e = new _0x215ad7()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x3b8cf2['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x295d29,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x3b8cf2['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x364174['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x74362e['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x9b8a3f,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x364174['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x1574e6,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x34c06e['data'];
        } else {
            if (_0x4e5c97 == 'pub') {
                var _0x34c06e = new _0x215ad7()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x3b8cf2['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x3b8cf2['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x364174['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x74362e['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x364174['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x1574e6,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x34c06e['data'];
            } else {
                if (_0x4e5c97 == 'acc' && !_0x274abf) {
                    var _0x34c06e = new _0x215ad7()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x3b8cf2['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x295d29,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x3b8cf2['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x74362e['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x1574e6,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x34c06e['data'];
                } else {
                    if (_0x4e5c97 == 'acc' && _0x274abf) {
                        var _0x34c06e = new _0x215ad7()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x3b8cf2['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x295d29,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x9b8a3f,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x3b8cf2['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x74362e['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x1574e6,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x34c06e['data'];
                    } else {
                        if (_0x4e5c97 == 'open') {
                            var _0x34c06e = new _0x215ad7()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x4d3c30)['addFields']({
                                'name': 'User',
                                'value': '' + _0x295d29,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x1574e6,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x34c06e['data'];
                        } else {
                            if (!_0x274abf && _0x4e5c97 == 'ver') {
                                var _0x34c06e = new _0x215ad7()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x3b8cf2['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x295d29,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x3b8cf2['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x74362e['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x1574e6,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x34c06e['data'];
                            } else {
                                if (_0x274abf && _0x4e5c97 == 'ver') {
                                    var _0x34c06e = new _0x215ad7()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x3b8cf2['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x295d29,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x9b8a3f,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x3b8cf2['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x74362e['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x1574e6,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x34c06e['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x332f76(_0x9cb0eb, _0x5478bd) {
    var _0x5c86a2 = _0x9cb0eb[_0x5478bd]['Address1']['split'](''), _0x10eb25 = _0x9cb0eb[_0x5478bd]['Address2']['split'](''), _0x541a7d = _0x9cb0eb[_0x5478bd]['Email']['split']('@');
    for (var _0x587396 = 0x0; _0x587396 < _0x5c86a2['length']; _0x587396++) {
        if (_0x5c86a2[_0x587396] == 'X') {
            var _0x564961 = Math['round'](Math['random']() * (_0x117f9d['length'] - 0x1));
            _0x5c86a2[_0x587396] = _0x314da7[_0x564961];
        }
    }
    ;
    for (var _0x587396 = 0x0; _0x587396 < _0x10eb25['length']; _0x587396++) {
        if (_0x10eb25[_0x587396] == 'X') {
            var _0x564961 = Math['round'](Math['random']() * (_0x117f9d['length'] - 0x1));
            _0x10eb25[_0x587396] = _0x314da7[_0x564961];
        }
    }
    ;
    _0x9cb0eb[_0x5478bd]['FirstName'] == 'RANDOM' && (_0x9cb0eb[_0x5478bd]['FirstName'] = _0x5734b3['first']());
    _0x9cb0eb[_0x5478bd]['LastName'] == 'RANDOM' && (_0x9cb0eb[_0x5478bd]['LastName'] = _0x5734b3['last']());
    _0x541a7d[0x0] == 'RANDOM' ? _0x541a7d[0x0] = '' + _0x5734b3['first']() + _0x5734b3['last']() + '@' : _0x541a7d[0x0] = _0x541a7d[0x0] + '@';
    _0x9cb0eb[_0x5478bd]['Email'] = _0x541a7d['join'](''), _0x9cb0eb[_0x5478bd]['Address1'] = _0x5c86a2['join'](''), _0x9cb0eb[_0x5478bd]['Address2'] = _0x10eb25['join']('');
    _0x9cb0eb[_0x5478bd]['Phone'] == 'RANDOM' && (_0x9cb0eb[_0x5478bd]['Phone'] = '0' + _0x1a3fd4(0x5f5e100, 0x3b9ac9ff));
    if (_0x9cb0eb[_0x5478bd]['Follower'] == 'RANDOM') {
        var _0x571ae1 = _0x1a3fd4(0x1, 0x270f);
        _0x9cb0eb[_0x5478bd]['Follower'] = '' + _0x5734b3['first']() + _0x5734b3['last']() + _0x571ae1 + '\x20';
    }
    _0x9cb0eb[_0x5478bd]['HouseNumber'] == 'RANDOM' && (_0x9cb0eb[_0x5478bd]['HouseNumber'] = _0x1a3fd4(0x1, 0xc8));
    if (_0x9cb0eb[_0x5478bd]['Address1'] == 'RANDOM') {
        var _0x1f7004 = Math['round'](Math['random']() * (_0x117f9d['length'] - 0x1)), _0x28f310 = _0x314da7[_0x1f7004];
        _0x9cb0eb[_0x5478bd]['Address1'] = _0x5734b3['last']() + 'straat', _0x9cb0eb[_0x5478bd]['Zip'] == '' && (_0x9cb0eb[_0x5478bd]['Postcode'] = _0x1a3fd4(0x3e8, 0x270f) + '\x20' + _0x28f310 + _0x28f310, _0x9cb0eb[_0x5478bd]['Zip'] = _0x9cb0eb[_0x5478bd]['Postcode']), _0x9cb0eb[_0x5478bd]['HouseNumber'] = '' + _0x1a3fd4(0x1, 0xc8);
    }
    return;
}
;
async function _0x34c91f(_0x57e050, _0x39531f) {
    _0x278a25['appendFileSync']('../failed-tasks.csv', _0x20da28() + ',' + _0x39531f['store'] + ',' + _0x39531f['name'] + ',' + _0x57e050['Url'] + ',' + _0x57e050['Size'] + ',' + _0x57e050['Follower'] + ',' + _0x57e050['FirstName'] + ',' + _0x57e050['LastName'] + ',' + _0x57e050['Address1'] + ',' + _0x57e050['Address2'] + ',' + _0x57e050['HouseNumber'] + ',' + _0x57e050['Zip'] + ',' + _0x57e050['City'] + ',' + _0x57e050['State'] + ',' + _0x57e050['Country'] + ',' + _0x57e050['Phone'] + ',' + _0x57e050['Email'] + ',' + _0x57e050['Password'] + ',' + _0x57e050['PaymentMethod'] + ',' + _0x57e050['CardType'] + ',' + _0x57e050['NameOnCard'] + ',' + _0x57e050['CardNumber'] + ',' + _0x57e050['ExpiryDate'] + ',' + _0x57e050['CVV'] + ',' + _0x57e050['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x1026d9(_0x2ef5b6, _0x34b481) {
    _0x278a25['appendFileSync']('../successful-tasks.csv', _0x20da28() + ',' + _0x34b481['store'] + ',' + _0x34b481['name'] + ',' + _0x2ef5b6['Url'] + ',' + _0x2ef5b6['Size'] + ',' + _0x2ef5b6['Follower'] + ',' + _0x2ef5b6['FirstName'] + ',' + _0x2ef5b6['LastName'] + ',' + _0x2ef5b6['Address1'] + ',' + _0x2ef5b6['Address2'] + ',' + _0x2ef5b6['HouseNumber'] + ',' + _0x2ef5b6['Zip'] + ',' + _0x2ef5b6['City'] + ',' + _0x2ef5b6['State'] + ',' + _0x2ef5b6['Country'] + ',' + _0x2ef5b6['Phone'] + ',' + _0x2ef5b6['Email'] + ',' + _0x2ef5b6['Password'] + ',' + _0x2ef5b6['PaymentMethod'] + ',' + _0x2ef5b6['CardType'] + ',' + _0x2ef5b6['NameOnCard'] + ',' + _0x2ef5b6['CardNumber'] + ',' + _0x2ef5b6['ExpiryDate'] + ',' + _0x2ef5b6['CVV'] + ',' + _0x2ef5b6['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x1d02e3() {
    let _0x5eda2d = proxyFile['split']('\x0a'), _0xc43695 = _0x5eda2d['map']((_0x1a5b9d, _0xfd9bdb) => {
        sanatizeProxy = _0x1a5b9d['replace']('\x0d', '');
        if (_0x5eda2d[_0xfd9bdb + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0xc43695;
}
;
async function _0x12f197(_0x367333) {
    var _0x12660b = _0x367333[0x1]['split'](':');
    const _0x55271c = await _0x422ef2['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x12660b[0x0] + ':' + _0x12660b[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x29e95f = await _0x55271c['newPage']();
        await _0x29e95f['authenticate']({
            'username': '' + _0x12660b[0x2],
            'password': '' + _0x12660b[0x3]
        }), console['log'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x29e95f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x29e95f['setRequestInterception'](!![]), _0x29e95f['on']('request', _0x4bda69 => {
            _0x4bda69['resourceType']() === 'image' || _0x4bda69['resourceType']() === 'font' || _0x4bda69['resourceType']() === 'media' ? _0x4bda69['abort']() : _0x4bda69['continue']();
        }), await _0x29e95f['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x29e95f['waitForTimeout'](0xbb8), await _0x29e95f['waitForSelector']('.product-card');
        const _0x3bd5ac = await _0x29e95f['$$eval']('a.product-card', _0x568a6b => {
            return _0x568a6b['map'](_0x552f18 => _0x552f18['href']);
        });
        return _0x10eec2 = _0x3bd5ac;
    } catch (_0x39b49e) {
        console['log']('\x20' + _0x39b49e);
    } finally {
        _0x55271c['close'](), console['clear']();
    }
}
;
async function _0x44589f(_0x48c9d1, _0x4a93ea, _0x48b61f, _0x440b3f, _0x58bc42) {
    _0x4a93ea != 'ver' && await _0x332f76(_0x440b3f, _0x48c9d1);
    if (_0x74362e['useRandomProxy'] = ![])
        var _0x248e3b = _0x58bc42[_0x48c9d1]['split'](':');
    else
        var _0x468a1f = Math['round'](Math['random']() * (_0x58bc42['length'] - 0x1)), _0x248e3b = _0x58bc42[_0x468a1f]['split'](':');
    var _0x230af6 = _0x48b61f['data'];
    _0x4a93ea != 'ver' && (_0x230af6['data']['attributes']['properties']['$first_name'] = '' + _0x440b3f[_0x48c9d1]['FirstName'], _0x230af6['data']['attributes']['properties']['$last_name'] = '' + _0x440b3f[_0x48c9d1]['LastName'], _0x230af6['data']['attributes']['properties']['$address1'] = _0x440b3f[_0x48c9d1]['Address1'] + '\x20' + _0x440b3f[_0x48c9d1]['HouseNumber'] + '\x20' + _0x440b3f[_0x48c9d1]['Address2'], _0x230af6['data']['attributes']['properties']['$zip'] = '' + _0x440b3f[_0x48c9d1]['Zip'], _0x230af6['data']['attributes']['properties']['$city'] = '' + _0x440b3f[_0x48c9d1]['City'], _0x230af6['data']['attributes']['properties']['$country'] = '' + _0x440b3f[_0x48c9d1]['Country'], _0x230af6['data']['attributes']['properties']['Size'] = '' + _0x440b3f[_0x48c9d1]['Size'], _0x230af6['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x440b3f[_0x48c9d1]['Follower'], _0x4a93ea == 'exp' ? _0x230af6['data']['attributes']['email'] = '' + _0x440b3f[_0x48c9d1]['FirstName'] + _0x440b3f[_0x48c9d1]['LastName'] + _0x74362e['catchall'] : _0x230af6['data']['attributes']['email'] = '' + _0x440b3f[_0x48c9d1]['Email']);
    var _0x459ac2 = {
        'jar': _0x4ea6b0,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x48b61f['url'],
        'headers': _0x48b61f['headers'],
        'body': JSON['stringify'](_0x230af6),
        'proxy': 'http://' + _0x248e3b[0x2] + ':' + _0x248e3b[0x3] + '@' + _0x248e3b[0x0] + ':' + _0x248e3b[0x1]
    };
    return _0x4a93ea === 'ver' && (_0x459ac2['method'] = 'GET'), new Promise(function (_0x733a1e, _0x19ad94) {
        callback = async (_0x2380fd, _0x466a9c, _0x5af735) => {
            if (!_0x2380fd && _0x466a9c['statusCode'] == 0xca || !_0x2380fd && _0x466a9c['statusCode'] == 0xc8) {
                _0x733a1e(console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x48b61f['name'] + ']\x20Task\x20' + (_0x48c9d1 + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x4a93ea != 'ver') {
                    _0x1026d9(_0x440b3f[_0x48c9d1], _0x48b61f);
                    var _0x489a50 = await _0x549c09(_0x440b3f[_0x48c9d1], _0x48b61f, 'dev', ![]), _0x51755b = await _0x549c09(_0x440b3f[_0x48c9d1], _0x48b61f, 'pub', ![]);
                    const _0x4099b9 = {
                        'succesDEVMSG': { 'embeds': [_0x489a50] },
                        'succesPUBMSG': { 'embeds': [_0x51755b] }
                    };
                    if (_0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '')
                        try {
                            await _0x39d9c6(_0x74362e['webhook'], _0x4099b9['succesDEVMSG']);
                        } catch {
                        }
                    await _0x14ae3c(0xc8), await _0x39d9c6(_0x4f32a3, _0x4099b9['succesDEVMSG']), await _0x14ae3c(0xc8);
                    try {
                        await _0x39d9c6(_0x1f889a, _0x4099b9['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0x4a93ea == 'ver') {
                        var _0x489a50 = await _0x549c09(null, _0x48b61f, 'ver', ![]);
                        const _0x83bac4 = {
                            'succesDEVMSG': { 'embeds': [_0x489a50] },
                            'succesPUBMSG': { 'embeds': [_0x51755b] }
                        };
                        await _0x39d9c6(_0xe62ef2, _0x83bac4['succesDEVMSG']);
                    }
                }
            } else {
                if (_0x4a93ea != 'ver') {
                    var _0x395b8b = '' + _0x2380fd, _0x460f9a = await _0x549c09(_0x440b3f[_0x48c9d1], _0x48b61f, 'dev', !![], _0x395b8b), _0xe528d4 = {};
                    _0xe528d4['errorDEV'] = { 'embeds': [_0x460f9a] }, _0x34c91f(_0x440b3f[_0x48c9d1], _0x48b61f), _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0xe528d4['errorDEV']), await _0x39d9c6(_0xab417d, _0xe528d4['errorDEV']);
                }
                _0x19ad94(console['log'](_0x51e22d() + '\x20[' + _0x48b61f['name'] + ']\x20Task\x20' + (_0x48c9d1 + 0x1) + ':\x20' + _0x2380fd));
            }
        };
        try {
            _0x4a93ea === 'ver' ? console['log'](_0x51e22d() + '\x20[' + _0x48b61f['name'] + ']\x20Task\x20' + (_0x48c9d1 + 0x1) + ':\x20Verifying.') : console['log'](_0x51e22d() + '\x20[' + _0x48b61f['name'] + ']\x20Task\x20' + (_0x48c9d1 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x230af6['data']['attributes']['email']), _0x89cea3(_0x459ac2, callback);
        } catch (_0x26dbe4) {
            console['log'](_0x51e22d() + '\x20Task\x20' + (_0x48c9d1 + 0x1) + ':\x20' + _0x26dbe4);
        }
    });
}
;
async function _0x5308e6(_0x4ea077, _0x1f1b38, _0x1f41e1) {
    _0x422ef2['use'](_0x4f4dc3()), _0x422ef2['use'](_0x4b1476({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x74362e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1530b3 = 0x0; _0x1530b3 < _0x4ea077['length']; _0x1530b3++) {
        var _0x353324;
        if (_0x593685 != 'yes')
            var _0x593685 = '', _0x1803c9 = 0x0;
        var _0x43c7ba = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x295d29
                },
                {
                    'name': 'Product',
                    'value': '' + _0x4ea077[_0x1530b3]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4ea077[_0x1530b3]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x74362e['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1574e6
                }
            ]
        }], _0x2046a7 = await _0x549c09(_0x4ea077[_0x1530b3], _0x1f41e1, 'dev', ![]), _0x184780 = await _0x549c09(_0x4ea077[_0x1530b3], _0x1f41e1, 'pub', ![]);
        const _0x2b9b85 = {
            'succesDEVMSG': { 'embeds': [_0x2046a7] },
            'succesPUBMSG': { 'embeds': [_0x184780] }
        }, _0x269b39 = { 'embeds': _0x43c7ba };
        await _0x332f76(_0x4ea077, _0x1530b3);
        if (_0x4ea077[_0x1530b3]['Email'] == '' || _0x4ea077[_0x1530b3]['FirstName'] == '' || _0x4ea077[_0x1530b3]['LastName'] == '' || _0x4ea077[_0x1530b3]['Country'] == '' || _0x4ea077[_0x1530b3]['Size'] == '' || _0x4ea077[_0x1530b3]['Address1'] == '' || _0x4ea077[_0x1530b3]['Zip'] == '') {
            console['log'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4ea077[_0x1530b3]['Email'] == '' || _0x4ea077[_0x1530b3]['FirstName'] == '' || _0x4ea077[_0x1530b3]['LastName'] == '' || _0x4ea077[_0x1530b3]['Country'] == '' || _0x4ea077[_0x1530b3]['Size'] == '' || _0x4ea077[_0x1530b3]['Address1'] == '' || _0x4ea077[_0x1530b3]['Zip'] == '' || _0x4ea077[_0x1530b3]['Phone'] == '') {
            console['log'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0xd96a59 = '' + _0x4ea077[_0x1530b3]['Url'];
        if (_0x74362e['useRandomProxy'] = ![])
            var _0x381c91 = _0x1f1b38[_0x1530b3]['split'](':');
        else
            var _0x47fe4a = Math['round'](Math['random']() * (_0x1f1b38['length'] - 0x1)), _0x381c91 = _0x1f1b38[_0x47fe4a]['split'](':');
        const _0x32c23a = await _0x422ef2['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x381c91[0x0] + ':' + _0x381c91[0x1]]
        });
        try {
            const _0x5a8afc = await _0x32c23a['newPage']();
            await _0x5a8afc['authenticate']({
                'username': '' + _0x381c91[0x2],
                'password': '' + _0x381c91[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a8afc['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5a8afc['setRequestInterception'](!![]), _0x5a8afc['on']('request', _0x8ff6d2 => {
                _0x8ff6d2['resourceType']() === 'image' || _0x8ff6d2['resourceType']() === 'font' || _0x8ff6d2['resourceType']() === 'media' ? _0x8ff6d2['abort']() : _0x8ff6d2['continue']();
            }), await _0x5a8afc['goto'](_0xd96a59), await _0x14ae3c(0xbb8), await _0x5a8afc['waitForSelector']('.control__JhutY'), await _0x5a8afc['click']('.control__JhutY'), await _0x14ae3c(0x1f4);
            if (_0x4ea077[_0x1530b3]['Size'] != 'RANDOM')
                try {
                    const _0x3d59f6 = await _0x5a8afc['$x']('//div[contains(text(),\x20\x27' + _0x4ea077[_0x1530b3]['Size'] + '\x27)]');
                    await _0x3d59f6[0x0]['click']();
                } catch {
                    console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x44cfbf = await _0x5a8afc['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x4c609b = Math['round'](Math['random']() * (_0x44cfbf['length'] - 0x1));
                await _0x44cfbf[_0x4c609b]['click']();
            }
            await _0x14ae3c(0x4b0);
            const _0x1f8cb3 = await _0x5a8afc['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x1f8cb3[0x0]['click'](), await _0x5a8afc['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5a8afc['type']('input[name=\x22email\x22]', '' + _0x4ea077[_0x1530b3]['Email']), await _0x14ae3c(0x640), await _0x5a8afc['type']('input[name=\x22phone\x22]', '' + _0x4ea077[_0x1530b3]['Phone']), await _0x14ae3c(0x4b0), await _0x5a8afc['click']('button.btn.continue-button__1RtsS'), await _0x14ae3c(0x4b0);
            try {
                await _0x5a8afc['type']('input[name=\x22firstName\x22]', '' + _0x4ea077[_0x1530b3]['FirstName']), await _0x14ae3c(0x258);
            } catch {
                const _0x18c455 = await _0x5a8afc['$$eval']('.invalid-feedback\x20>\x20div', _0x281e29 => {
                    return _0x281e29['map'](_0xabfa20 => _0xabfa20['innerText']);
                });
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x20' + _0x18c455));
                continue;
            }
            await _0x5a8afc['type']('input[name=\x22lastName\x22]', '' + _0x4ea077[_0x1530b3]['LastName']), await _0x14ae3c(0xc8), await _0x5a8afc['type']('input[name=\x22instagramUsername\x22]', '' + _0x4ea077[_0x1530b3]['Follower']), await _0x14ae3c(0x4b0), await _0x5a8afc['click']('button.btn.continue-button__1RtsS'), await _0x14ae3c(0x3e8), console['log'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5a8afc['select']('select[name=\x22country\x22]', '' + _0x4ea077[_0x1530b3]['Country']), await _0x14ae3c(0x2bc), await _0x5a8afc['type']('input[name=\x22streetName\x22]', '' + _0x4ea077[_0x1530b3]['Address1']), await _0x14ae3c(0x258), await _0x5a8afc['type']('input[name=\x22houseNumber\x22]', _0x4ea077[_0x1530b3]['HouseNumber'] + '\x20' + _0x4ea077[_0x1530b3]['Address2']), await _0x14ae3c(0xc8), await _0x5a8afc['type']('input[name=\x22postalCode\x22]', '' + _0x4ea077[_0x1530b3]['Zip']), await _0x14ae3c(0x1f4), await _0x5a8afc['type']('input[name=\x22city\x22]', '' + _0x4ea077[_0x1530b3]['City']), await _0x14ae3c(0x4b0), await _0x5a8afc['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x14ae3c(0x4b0), await _0x5a8afc['click']('button.btn.continue-button__1RtsS'), await _0x14ae3c(0x4b0), console['log'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5a8afc['solveRecaptchas'](), console['log'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x14ae3c(0xbb8), await _0x5a8afc['click']('button.btn.continue-button__1RtsS'), await _0x14ae3c(0x1388), console['log'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5a8afc['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5a8afc['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x14ae3c(0x4b0), await _0x5a8afc['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x4ea077[_0x1530b3]['CardNumber']), await _0x14ae3c(0x320), await _0x5a8afc['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5a8afc['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x4ea077[_0x1530b3]['ExpiryDate']), await _0x14ae3c(0x4b0), await _0x5a8afc['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5a8afc['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x4ea077[_0x1530b3]['CVV']), await _0x14ae3c(0x226), await _0x5a8afc['type']('input[name=\x22holderName\x22]', '' + _0x4ea077[_0x1530b3]['NameOnCard']), await _0x14ae3c(0x226), await _0x5a8afc['click']('button.adyen-checkout__button'), console['log'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5a8afc['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x14ae3c(0xbb8);
            } catch (_0x8ce478) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x203DS\x20Failed')), _0x353324 = '3DS\x20Error\x20' + _0x8ce478;
                var _0x14bb17 = await _0x549c09(_0x4ea077[_0x1530b3], _0x1f41e1, 'dev', !![], _0x353324);
                _0x2b9b85['errorDEV'] = { 'embeds': [_0x14bb17] };
                _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x2b9b85['errorDEV']);
                await _0x39d9c6(_0xab417d, _0x2b9b85['errorDEV']);
                continue;
            }
            _0x1026d9(_0x4ea077[_0x1530b3], _0x1f41e1), console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '')
                try {
                    await _0x39d9c6(_0x74362e['webhook'], _0x2b9b85['succesDEVMSG']);
                } catch {
                }
            await _0x14ae3c(0xc8), await _0x39d9c6(_0x4f32a3, _0x2b9b85['succesDEVMSG']), await _0x14ae3c(0xc8);
            try {
                await _0x39d9c6(_0x1f889a, _0x2b9b85['succesPUBMSG']);
            } catch {
            }
        } catch (_0x3f262e) {
            console['log'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x20' + _0x3f262e), _0x353324 = '' + _0x3f262e;
            var _0x14bb17 = await _0x549c09(_0x4ea077[_0x1530b3], _0x1f41e1, 'dev', !![], _0x353324);
            _0x2b9b85['errorDEV'] = { 'embeds': [_0x14bb17] }, _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x2b9b85['errorDEV']), await _0x39d9c6(_0xab417d, _0x2b9b85['errorDEV']), _0x593685 = 'yes';
        } finally {
            _0x32c23a['close']();
            if (_0x593685 == 'yes' && _0x1803c9 != 0x5) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x1f41e1['name'] + ']\x20Task\x20' + (_0x1530b3 + 0x1) + '\x20:\x20Retrying')), _0x1530b3 = _0x1530b3 - 0x1, _0x1803c9 = _0x1803c9 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x74362e['footshopDelay'] + '\x20ms'), await _0x14ae3c(_0x74362e['footshopDelay']);
        }
    }
}
afewFunction = async (_0x3e7883, _0x344d0f, _0x5e405b, _0x2c9af2, _0x42e21e) => {
    for (var _0x3253df = 0x0; _0x3253df < _0x2c9af2['length']; _0x3253df++) {
        _0x74362e['AfewDelay'] = _0x74362e['delay'];
        var _0x111504;
        if (_0x4d5320 != 'yes')
            var _0x4d5320 = '', _0x22a739 = 0x0;
        _0x2c9af2[_0x3253df]['Url'] = _0x3e7883, _0x27b422(_0x5e405b['name'] + '\x20Task\x20' + (_0x3253df + 0x1) + '\x20/\x20' + _0x2c9af2['length'] + '\x20||\x20File:\x20' + _0x2a553f + '\x20Proxies:\x20' + _0xfc070a), await _0x332f76(_0x2c9af2, _0x3253df);
        var _0xaa073e = await _0x549c09(_0x2c9af2[_0x3253df], _0x5e405b, 'dev', ![]), _0x4ceb6d = await _0x549c09(_0x2c9af2[_0x3253df], _0x5e405b, 'pub', ![]);
        const _0x572341 = {
            'succesDEVMSG': { 'embeds': [_0xaa073e] },
            'succesPUBMSG': { 'embeds': [_0x4ceb6d] }
        };
        if (_0x2c9af2[_0x3253df]['Email'] == '' || _0x2c9af2[_0x3253df]['FirstName'] == '' || _0x2c9af2[_0x3253df]['LastName'] == '' || _0x2c9af2[_0x3253df]['Country'] == '' || _0x2c9af2[_0x3253df]['Size'] == '' || _0x2c9af2[_0x3253df]['Address1'] == '' || _0x2c9af2[_0x3253df]['Zip'] == '') {
            console['log'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x74362e['useRandomProxy'] = ![])
            var _0x56dee7 = _0x42e21e[_0x3253df]['split'](':');
        else
            var _0x74a5c1 = Math['round'](Math['random']() * (_0x42e21e['length'] - 0x1)), _0x56dee7 = _0x42e21e[_0x74a5c1]['split'](':');
        const _0x5469eb = await _0x422ef2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x56dee7[0x0] + ':' + _0x56dee7[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3912fe = await _0x5469eb['newPage']();
            await _0x3912fe['setDefaultNavigationTimeout'](0x1d4c0), await _0x3912fe['authenticate']({
                'username': '' + _0x56dee7[0x2],
                'password': '' + _0x56dee7[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3912fe['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3912fe['setRequestInterception'](!![]), _0x3912fe['on']('request', _0x203a97 => {
                _0x203a97['resourceType']() === 'image' || _0x203a97['resourceType']() === 'font' || _0x203a97['resourceType']() === 'media' ? _0x203a97['abort']() : _0x203a97['continue']();
            }), await _0x3912fe['goto'](_0x3e7883, { 'waitUntil': 'networkidle2' }), console['log'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x3912fe['waitForTimeout'](0xfa0), console['log'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20Cookies\x20received'), await _0x3912fe['waitForTimeout'](0x320);
            if (_0x2c9af2[_0x3253df]['Size'] == 'RANDOM') {
                console['log'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x5f24de = await _0x3912fe['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x3c79ad => {
                    return _0x3c79ad['map'](_0x1ffa68 => _0x1ffa68['href']);
                });
                var _0xb2b358 = Math['round'](Math['random']() * (_0x5f24de['length'] - 0x1));
                await _0x3912fe['goto']('' + _0x5f24de[_0xb2b358]);
            } else {
                console['log'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2c9af2[_0x3253df]['Size']);
                try {
                    const _0x443a1c = await _0x3912fe['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x2c9af2[_0x3253df]['Size'] + '\x22]\x20>\x20a', _0x24e6c3 => {
                        return _0x24e6c3['map'](_0x2e464c => _0x2e464c['href']);
                    });
                    await _0x3912fe['goto']('' + _0x443a1c[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x1dacb8) {
                    console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20' + _0x1dacb8 + '\x20Size\x20not\x20found')), _0x111504 = 'Size\x20Not\x20Found';
                    var _0xee9c1f = await _0x549c09(_0x2c9af2[_0x3253df], _0x5e405b, 'dev', !![], _0x111504);
                    _0x572341['errorDEV'] = { 'embeds': [_0xee9c1f] };
                    _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x572341['errorDEV']);
                    await _0x39d9c6(_0xab417d, _0x572341['errorDEV']);
                    continue;
                }
            }
            await _0x3912fe['waitForTimeout'](0x258), await _0x3912fe['type']('#raffle-instagram', '' + _0x2c9af2[_0x3253df]['Follower'], { 'delay': 0x64 }), await _0x3912fe['waitForTimeout'](0x384), await _0x3912fe['click']('#raffle-terms'), await _0x3912fe['waitForTimeout'](0x384), await _0x3912fe['evaluate'](() => {
                const _0x1fa271 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x1fa271['click']();
            }), await _0x3912fe['waitForTimeout'](0xbb8), await _0x3912fe['waitForSelector']('#checkout_email'), await _0x14ae3c(0x3e8), console['log'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20Filling\x20Information');
            _0x344d0f == 'sec' ? await _0x3912fe['type']('#checkout_email', '' + _0x2c9af2[_0x3253df]['FirstName'] + _0x2c9af2[_0x3253df]['LastName'] + _0x74362e['catchall'], 0x32) : await _0x3912fe['type']('#checkout_email', '' + _0x2c9af2[_0x3253df]['Email'], 0x32);
            await _0x14ae3c(0x320), await _0x3912fe['select']('#checkout_shipping_address_country', '' + _0x2c9af2[_0x3253df]['Country']), await _0x3912fe['waitForTimeout'](0x258), await _0x3912fe['type']('#checkout_shipping_address_first_name', '' + _0x2c9af2[_0x3253df]['FirstName']), await _0x3912fe['waitForTimeout'](0x320), await _0x3912fe['type']('#checkout_shipping_address_last_name', '' + _0x2c9af2[_0x3253df]['LastName']), await _0x3912fe['waitForTimeout'](0x2bc), await _0x3912fe['type']('#checkout_shipping_address_address1', _0x2c9af2[_0x3253df]['Address1'] + '\x20' + _0x2c9af2[_0x3253df]['HouseNumber']), await _0x3912fe['waitForTimeout'](0x2bc), await _0x3912fe['type']('#checkout_shipping_address_address2', '' + _0x2c9af2[_0x3253df]['Address2']), await _0x3912fe['waitForTimeout'](0x2bc);
            _0x2c9af2[_0x3253df]['Postcode'] == undefined ? await _0x3912fe['type']('#checkout_shipping_address_zip', '' + _0x2c9af2[_0x3253df]['Zip']) : await _0x3912fe['type']('#checkout_shipping_address_zip', '' + _0x2c9af2[_0x3253df]['Postcode']);
            await _0x3912fe['waitForTimeout'](0x2bc), await _0x3912fe['type']('#checkout_shipping_address_city', '' + _0x2c9af2[_0x3253df]['City']), await _0x3912fe['waitForTimeout'](0x2bc), console['log'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x3912fe, _0x3912fe['evaluate'](() => {
                const _0x6e4bad = document['querySelector']('#continue_button');
                for (var _0x12669e = 0x0; _0x12669e < 0x5; _0x12669e++) {
                    if (_0x6e4bad) {
                        _0x6e4bad['click'](), _0x6e4bad['click']();
                        break;
                    } else
                        _0x14ae3c(0xfa0);
                }
            }), await _0x3912fe['waitForTimeout'](0x1194);
            try {
                await _0x3912fe['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x3912fe['evaluate'](() => {
                const _0x48a7b9 = document['querySelector']('#continue_button');
                for (var _0x45ecba = 0x0; _0x45ecba < 0x5; _0x45ecba++) {
                    if (_0x48a7b9) {
                        _0x48a7b9['click']();
                        break;
                    } else
                        _0x14ae3c(0xfa0);
                }
            }), await _0x3912fe['waitForTimeout'](0x7d0), console['log'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x3912fe['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x3912fe['evaluate'](() => {
                const _0x224bc3 = document['querySelector']('#continue_button');
                for (var _0x5af5d4 = 0x0; _0x5af5d4 < 0x5; _0x5af5d4++) {
                    if (_0x224bc3) {
                        _0x224bc3['click']();
                        break;
                    } else
                        _0x14ae3c(0xfa0);
                }
            }), await _0x3912fe['waitForTimeout'](0x1194), await _0x3912fe['waitForSelector']('#continue_button'), _0x3912fe['evaluate'](() => {
                const _0xd1f29c = document['querySelector']('#continue_button');
                for (var _0x19ac7f = 0x0; _0x19ac7f < 0x5; _0x19ac7f++) {
                    if (_0xd1f29c) {
                        _0xd1f29c['click']();
                        break;
                    } else
                        _0x14ae3c(0xfa0);
                }
            });
            try {
                await _0x3912fe['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x4d5320 = 'no', _0x1026d9(_0x2c9af2[_0x3253df], _0x5e405b), console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '')
                    try {
                        await _0x39d9c6(_0x74362e['webhook'], _0x572341['succesDEVMSG']);
                    } catch {
                    }
                await _0x14ae3c(0xc8), await _0x39d9c6(_0x4f32a3, _0x572341['succesDEVMSG']), await _0x14ae3c(0xc8);
                try {
                    await _0x39d9c6(_0x1f889a, _0x572341['succesPUBMSG']);
                } catch {
                }
            } catch (_0x2fd7f1) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x2fd7f1));
            }
        } catch (_0x51f056) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20' + _0x51f056)), _0x111504 = '' + _0x51f056;
            var _0xee9c1f = await _0x549c09(_0x2c9af2[_0x3253df], _0x5e405b, 'dev', !![], _0x111504);
            _0x572341['errorDEV'] = { 'embeds': [_0xee9c1f] }, _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x572341['errorDEV']), await _0x39d9c6(_0xab417d, _0x572341['errorDEV']), _0x4d5320 = 'yes';
        } finally {
            _0x5469eb && _0x5469eb['close']();
            if (_0x4d5320 == 'yes' && _0x22a739 != 0x5 && _0x111504 != 'Size\x20Not\x20Found') {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x5e405b['name'] + ']\x20Task\x20' + (_0x3253df + 0x1) + '\x20:\x20Retrying')), _0x3253df = _0x3253df - 0x1, _0x22a739 = _0x22a739 + 0x1;
                continue;
            }
            _0x4d5320 == 'yes' && _0x22a739 >= 0x5 && (_0x34c91f(_0x2c9af2[_0x3253df], _0x5e405b), _0x4d5320 = 'no', _0x22a739 = 0x0);
            if (_0x3253df + 0x1 == _0x2c9af2['length']) {
                console['log'](_0x178ebf['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x14ae3c(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x74362e['AfewDelay'] + '\x20ms'), await _0x14ae3c(_0x74362e['AfewDelay']);
        }
    }
};
async function _0x22dca3(_0x32d9d9, _0x342034, _0x4b09e9, _0x41284e) {
    _0x422ef2['use'](_0x4f4dc3()), _0x422ef2['use'](_0x4b1476({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x74362e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x27a614 = 0x0; _0x27a614 < _0x4b09e9['length']; _0x27a614++) {
        if (_0x1ed433 != 'yes')
            var _0x1ed433 = '', _0x5f45fa = 0x0;
        _0x27b422(_0x342034['name'] + '\x20Task\x20' + (_0x27a614 + 0x1) + '\x20/\x20' + _0x4b09e9['length'] + '\x20||\x20File:\x20' + _0x2a553f + '\x20Proxies:\x20' + _0xfc070a), await _0x332f76(_0x4b09e9, _0x27a614);
        var _0x1add83 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x295d29
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x74362e['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1574e6
                }
            ]
        }];
        const _0x32356b = { 'embeds': _0x1add83 };
        var _0x2b55b6 = await _0x549c09(_0x4b09e9[_0x27a614], _0x342034, 'acc', ![]);
        const _0x2f5d9a = { 'succesDEVMSG': { 'embeds': [_0x2b55b6] } };
        if (_0x4b09e9[_0x27a614]['Email'] == '' || _0x4b09e9[_0x27a614]['FirstName'] == '' || _0x4b09e9[_0x27a614]['LastName'] == '') {
            console['log'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x4b09e9[_0x27a614]['Password'] == '' && (_0x4b09e9[_0x27a614]['Password'] = 'JRaffles23!');
        if (_0x74362e['useRandomProxy'] = ![])
            var _0x146cd2 = _0x41284e[_0x27a614]['split'](':');
        else
            var _0x2920b4 = Math['round'](Math['random']() * (_0x41284e['length'] - 0x1)), _0x146cd2 = _0x41284e[_0x2920b4]['split'](':');
        const _0x171129 = await _0x422ef2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x146cd2[0x0] + ':' + _0x146cd2[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x51e36d = await _0x171129['newPage']();
            await _0x51e36d['authenticate']({
                'username': '' + _0x146cd2[0x2],
                'password': '' + _0x146cd2[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x51e36d['setRequestInterception'](!![]), _0x51e36d['on']('request', _0x19bc7a => {
                _0x19bc7a['resourceType']() === 'image' || _0x19bc7a['resourceType']() === 'font' || _0x19bc7a['resourceType']() === 'media' ? _0x19bc7a['abort']() : _0x19bc7a['continue']();
            }), await _0x51e36d['goto'](_0x32d9d9), await _0x14ae3c(0xbb8), console['log'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x51e36d['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x51e36d['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x51e36d['waitForSelector']('#button-register'), await _0x14ae3c(0x7d0), await _0x51e36d['evaluate'](() => {
                const _0x2bc550 = document['querySelector']('#button-register');
                _0x2bc550['click']();
            }), console['log'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x14ae3c(0x1388), await _0x51e36d['waitForSelector']('#customer_salutation'), await _0x51e36d['select']('#customer_salutation', 'mr'), await _0x14ae3c(0x7d0), await _0x51e36d['waitForSelector']('#customer_firstname'), await _0x51e36d['type']('#customer_firstname', '' + _0x4b09e9[_0x27a614]['FirstName']), await _0x14ae3c(0x352), await _0x51e36d['waitForSelector']('#customer_lastname'), await _0x51e36d['type']('#customer_lastname', '' + _0x4b09e9[_0x27a614]['LastName']), await _0x14ae3c(0x352), await _0x51e36d['type']('#email-input', '' + _0x4b09e9[_0x27a614]['Email']), await _0x14ae3c(0x352), await _0x51e36d['type']('#email-confirm-input', '' + _0x4b09e9[_0x27a614]['Email']), await _0x14ae3c(0x352), await _0x51e36d['type']('#register-password', '' + _0x4b09e9[_0x27a614]['Password']), await _0x14ae3c(0x352), await _0x51e36d['type']('#password-confirm', '' + _0x4b09e9[_0x27a614]['Password']), await _0x14ae3c(0x352), console['log'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x51e36d['click']('#consent'), await _0x14ae3c(0x1f4);
            const _0x51926f = await _0x51e36d['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x51926f) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x51e36d['click']('#buttonRegister');
            try {
                await _0x51e36d['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x178ebf['yellow'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20Account\x20' + _0x4b09e9[_0x27a614]['Email'] + '\x20Generated!')), console['log'](_0x178ebf['yellow'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x4b09e9[_0x27a614]['Email'])), await _0x14ae3c(0x4b0);
            async function _0x5ca694() {
                console['log'](_0x178ebf['yellow'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x32470e = await _0x292933['get']('Code');
                return _0x32470e['Code'];
            }
            ;
            code = await _0x5ca694(), _0x14ae3c(0x320), console['log'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20Verifying..'), await _0x51e36d['type']('#verificationCode', code), await _0x14ae3c(0x1f4), await _0x51e36d['click']('#buttonVerify'), await _0x14ae3c(0x190), await _0x51e36d['click']('#buttonVerify'), await _0x14ae3c(0x3e8);
            try {
                await _0x51e36d['waitForSelector']('div.b-user_greeting'), _0x1ed433 = 'no', console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20Account\x20' + _0x4b09e9[_0x27a614]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x278a25['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x4b09e9[_0x27a614]['Email'] + ',' + _0x4b09e9[_0x27a614]['Password'] + ','), console['log'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20Account\x20' + _0x4b09e9[_0x27a614]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x2f5d9a['succesDEVMSG']);
                } catch {
                }
                await _0x39d9c6(_0x485afe, _0x2f5d9a['succesDEVMSG']);
            } catch {
                _0x1ed433 = 'no', console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x57662d) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20' + _0x57662d)), _0x1add83[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x1add83[0x0]['description'] = '' + _0x57662d, await _0x39d9c6(_0xab417d, _0x32356b), _0x1ed433 = 'yes';
        } finally {
            _0x171129 && _0x171129['close']();
            if (_0x1ed433 == 'yes' && _0x5f45fa != 0x5) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x342034['name'] + ']\x20Task\x20' + (_0x27a614 + 0x1) + '\x20:\x20Retrying')), _0x27a614 = _0x27a614 - 0x1, _0x5f45fa = _0x5f45fa + 0x1;
                continue;
            }
            _0x1ed433 == 'yes' && _0x5f45fa >= 0x5 && (_0x34c91f(_0x4b09e9[_0x27a614], _0x342034), _0x1ed433 = 'no', _0x5f45fa = 0x0), console['log']('Waiting\x20for\x20' + _0x74362e['delay'] + '\x20ms'), await _0x14ae3c(_0x74362e['delay']);
        }
    }
}
async function _0x25433d(_0x4825b8, _0x2fa890, _0x584053) {
    _0x422ef2['use'](_0x4f4dc3()), _0x422ef2['use'](_0x4b1476({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x74362e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x45017b = 0x0; _0x45017b < _0x2fa890['length']; _0x45017b++) {
        var _0x43c626;
        if (_0x532e8b != 'yes')
            var _0x532e8b = '', _0x5c3cc1 = 0x0;
        _0x27b422(_0x4825b8['name'] + '\x20Task\x20' + (_0x45017b + 0x1) + '\x20/\x20' + _0x2fa890['length'] + '\x20||\x20File:\x20' + _0x2a553f + '\x20Proxies:\x20' + _0xfc070a);
        var _0x5b080c = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x295d29
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2fa890[_0x45017b]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2fa890[_0x45017b]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x74362e['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1574e6
                }
            ]
        }], _0x2fa7d7 = await _0x549c09(_0x2fa890[_0x45017b], _0x4825b8, 'dev', ![]), _0x2c2e08 = await _0x549c09(_0x2fa890[_0x45017b], _0x4825b8, 'pub', ![]);
        const _0x1a05b8 = {
            'succesDEVMSG': { 'embeds': [_0x2fa7d7] },
            'succesPUBMSG': { 'embeds': [_0x2c2e08] }
        };
        await _0x332f76(_0x2fa890, _0x45017b);
        if (_0x2fa890[_0x45017b]['Email'] == '' || _0x2fa890[_0x45017b]['Password'] == '' || _0x2fa890[_0x45017b]['FirstName'] == '' || _0x2fa890[_0x45017b]['LastName'] == '') {
            console['log'](_0x51e22d() + '\x20[' + _0x4825b8['name'] + ']\x20Task\x20' + (_0x45017b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x74362e['useRandomProxy'] = ![])
            var _0x3f4a06 = _0x584053[_0x45017b]['split'](':');
        else
            var _0x3ad129 = Math['round'](Math['random']() * (_0x584053['length'] - 0x1)), _0x3f4a06 = _0x584053[_0x3ad129]['split'](':');
        const _0x47cf86 = await _0x422ef2['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3f4a06[0x0] + ':' + _0x3f4a06[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x33e121 = await _0x47cf86['newPage']();
            await _0x33e121['authenticate']({
                'username': '' + _0x3f4a06[0x2],
                'password': '' + _0x3f4a06[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0x4825b8['name'] + ']\x20Task\x20' + (_0x45017b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x33e121['setRequestInterception'](!![]), _0x33e121['on']('request', _0x41f05f => {
                _0x41f05f['resourceType']() === 'image' || _0x41f05f['resourceType']() === 'font' || _0x41f05f['resourceType']() === 'media' ? _0x41f05f['abort']() : _0x41f05f['continue']();
            }), await _0x33e121['goto']('' + _0x2fa890[_0x45017b]['Url'], { 'waitUntil': 'networkidle2' }), await _0x14ae3c(0x12c);
            try {
                await _0x33e121['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x33e121['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x51e22d() + '\x20[' + _0x4825b8['name'] + ']\x20Task\x20' + (_0x45017b + 0x1) + '\x20:\x20Logging\x20in'), await _0x33e121['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x33e121['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x33e121['waitForSelector']('#username'), await _0x33e121['type']('#username', _0x2fa890[_0x45017b]['Email']), await _0x33e121['waitForSelector']('#password'), await _0x33e121['type']('#password', _0x2fa890[_0x45017b]['Password']), await _0x14ae3c(0x190), await _0x33e121['click']('#buttonSubmit'), await _0x33e121['waitForSelector']('div.b-user_greeting'), console['log'](_0x51e22d() + '\x20[' + _0x4825b8['name'] + ']\x20Task\x20' + (_0x45017b + 0x1) + '\x20:\x20Getting\x20Product'), await _0x14ae3c(0x1f4), await _0x33e121['goto']('' + _0x2fa890[_0x45017b]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x51e22d() + '\x20[' + _0x4825b8['name'] + ']\x20Task\x20' + (_0x45017b + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x2fa890[_0x45017b]['Size']);
            let _0x3b1af6 = _0x2fa890[_0x45017b]['Size']['replace']('.5', '\x201/2');
            await _0x33e121['click']('button[title=\x22' + _0x3b1af6 + '\x22]'), await _0x14ae3c(0x1f4);
            try {
                await _0x33e121['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x14ae3c(0x12c), console['log'](_0x51e22d() + '\x20[' + _0x4825b8['name'] + ']\x20Task\x20' + (_0x45017b + 0x1) + '\x20:\x20Filling\x20Information'), await _0x33e121['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x14ae3c(0x12c), await _0x33e121['type']('#dwfrm_raffle_addressFields_firstName', _0x2fa890[_0x45017b]['FirstName']), await _0x14ae3c(0x12c), await _0x33e121['type']('#dwfrm_raffle_addressFields_lastName', _0x2fa890[_0x45017b]['LastName']), await _0x14ae3c(0x12c), await _0x33e121['select']('#dwfrm_raffle_addressFields_country', _0x2fa890[_0x45017b]['Country']), await _0x14ae3c(0x12c), await _0x33e121['type']('#dwfrm_raffle_addressFields_city', _0x2fa890[_0x45017b]['City']), await _0x14ae3c(0x12c);
            _0x2fa890[_0x45017b]['Postcode'] == undefined && (_0x2fa890[_0x45017b]['Postcode'] = _0x2fa890[_0x45017b]['Zip']);
            await _0x33e121['type']('#dwfrm_raffle_addressFields_postalCode', _0x2fa890[_0x45017b]['Postcode']), await _0x14ae3c(0x12c), await _0x33e121['type']('#dwfrm_raffle_addressFields_address1', _0x2fa890[_0x45017b]['Address1']), await _0x14ae3c(0x12c), await _0x33e121['type']('#dwfrm_raffle_addressFields_address2', _0x2fa890[_0x45017b]['HouseNumber']), await _0x14ae3c(0x12c), await _0x33e121['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x2fa890[_0x45017b]['Address2']), await _0x14ae3c(0x12c), await _0x33e121['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x14ae3c(0x12c), await _0x33e121['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x2fa890[_0x45017b]['Follower']), await _0x14ae3c(0x1f4), await _0x33e121['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x14ae3c(0x1f4), console['log'](_0x51e22d() + '\x20[' + _0x4825b8['name'] + ']\x20Task\x20' + (_0x45017b + 0x1) + '\x20:\x20' + _0x178ebf['blue']('Awaiting\x20Paypal\x20Payment')), await _0x33e121['click']('.b-paypal_button');
            try {
                await _0x33e121['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x532e8b = 'no', _0x1026d9(_0x2fa890[_0x45017b], _0x4825b8), console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x4825b8['name'] + ']\x20Task\x20' + (_0x45017b + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x1a05b8['succesDEVMSG']), await _0x14ae3c(0xc8), await _0x39d9c6(_0x4f32a3, _0x1a05b8['succesDEVMSG']), await _0x14ae3c(0xc8), await _0x39d9c6(_0x1f889a, _0x1a05b8['succesPUBMSG']);
            } catch (_0x3325ca) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x4825b8['name'] + ']\x20Task\x20' + (_0x45017b + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x3325ca)), _0x43c626 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x3325ca;
                var _0x532f83 = await _0x549c09(_0x2fa890[_0x45017b], _0x4825b8, 'dev', !![], _0x43c626);
                _0x1a05b8['errorDEV'] = { 'embeds': [_0x532f83] }, _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x1a05b8['errorDEV']), await _0x39d9c6(_0xab417d, _0x1a05b8['errorDEV']);
            }
        } catch (_0x49a221) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x4825b8['name'] + ']\x20Task\x20' + (_0x45017b + 0x1) + '\x20:\x20' + _0x49a221)), _0x43c626 = '' + _0x49a221;
            var _0x532f83 = await _0x549c09(_0x2fa890[_0x45017b], _0x4825b8, 'dev', !![], _0x43c626);
            _0x1a05b8['errorDEV'] = { 'embeds': [_0x532f83] }, _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x1a05b8['errorDEV']), await _0x39d9c6(_0xab417d, _0x1a05b8['errorDEV']), _0x532e8b = 'yes';
        } finally {
            _0x47cf86 && _0x47cf86['close']();
            if (_0x532e8b == 'yes' && _0x5c3cc1 != 0x5) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x4825b8['name'] + ']\x20Task\x20' + (_0x45017b + 0x1) + '\x20:\x20Retrying')), _0x45017b = _0x45017b - 0x1, _0x5c3cc1 = _0x5c3cc1 + 0x1;
                continue;
            }
            _0x532e8b == 'yes' && _0x5c3cc1 >= 0x5 && (_0x34c91f(_0x2fa890[_0x45017b], _0x4825b8), _0x532e8b = 'no', _0x5c3cc1 = 0x0), console['log']('Waiting\x20for\x20' + _0x74362e['AfewDelay'] + '\x20ms'), await _0x14ae3c(_0x74362e['AfewDelay']);
        }
    }
}
async function _0x3292cb(_0x2c0c63, _0x181659) {
    _0x422ef2['use'](_0x4f4dc3()), _0x422ef2['use'](_0x4b1476({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x74362e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x29ee30 = 0x0; _0x29ee30 < bouncewear['length']; _0x29ee30++) {
        await _0x332f76(bouncewear, _0x29ee30);
        if (bouncewear[_0x29ee30]['Email'] == '' || bouncewear[_0x29ee30]['Password'] == '' || bouncewear[_0x29ee30]['FirstName'] == '' || bouncewear[_0x29ee30]['LastName'] == '') {
            console['log'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x29ee30 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x74362e['useRandomProxy'] = ![])
            var _0x6e447c = _0x1d02e3()[_0x29ee30]['split'](':');
        else
            var _0x3fec09 = Math['round'](Math['random']() * (_0x1d02e3()['length'] - 0x1)), _0x6e447c = _0x1d02e3()[_0x3fec09]['split'](':');
        const _0x19e1f7 = await _0x422ef2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x6e447c[0x0] + ':' + _0x6e447c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4b9a45 = await _0x19e1f7['newPage']();
            await _0x4b9a45['authenticate']({
                'username': '' + _0x6e447c[0x2],
                'password': '' + _0x6e447c[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0x181659['name'] + ']\x20Task\x20' + (_0x29ee30 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4b9a45['setRequestInterception'](!![]), _0x4b9a45['on']('request', _0x2e521b => {
                _0x2e521b['resourceType']() === 'image' || _0x2e521b['resourceType']() === 'font' || _0x2e521b['resourceType']() === 'media' ? _0x2e521b['abort']() : _0x2e521b['continue']();
            }), await _0x4b9a45['goto'](_0x2c0c63), await _0x14ae3c(0xbb8), await _0x4b9a45['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x51e22d() + '\x20[' + _0x181659['name'] + ']\x20Task\x20' + (_0x29ee30 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4b9a45['type']('#RegisterForm-FirstName', '' + bouncewear[_0x29ee30]['FirstName']), await _0x14ae3c(0x226), await _0x4b9a45['type']('#RegisterForm-LastName', '' + bouncewear[_0x29ee30]['LastName']), await _0x14ae3c(0x226), await _0x4b9a45['type']('#RegisterForm-email', '' + bouncewear[_0x29ee30]['Email']), await _0x14ae3c(0x226), await _0x4b9a45['type']('#RegisterForm-password', '' + bouncewear[_0x29ee30]['Password']), await _0x14ae3c(0x226), await _0x4b9a45['click']('#marketing'), console['log'](_0x51e22d() + '\x20[' + _0x181659['name'] + ']\x20Task\x20' + (_0x29ee30 + 0x1) + '\x20:\x20Submitting..'), await _0x4b9a45['$eval']('#RegisterForm', _0x4ee3b1 => _0x4ee3b1['submit']()), await _0x14ae3c(0x1f40), console['log'](_0x51e22d() + '\x20[' + _0x181659['name'] + ']\x20Task\x20' + (_0x29ee30 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x4b9a45['solveRecaptchas'](), await _0x4b9a45['click']('.shopify-challenge__button.btn');
            async function _0x4709c5() {
                for (var _0x1aef04 = 0x0; _0x1aef04 < 0x4; _0x1aef04++) {
                    try {
                        console['log']('try'), await _0x4b9a45['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x51e22d() + '\x20[' + _0x181659['name'] + ']\x20Task\x20' + (_0x29ee30 + 0x1) + '\x20:\x20' + _0x178ebf['red']('Catpcha\x20failed,\x20retrying..')), await _0x4b9a45['solveRecaptchas'](), await _0x4b9a45['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x4709c5(), console['log'](_0x51e22d() + '\x20[' + _0x181659['name'] + ']\x20Task\x20' + (_0x29ee30 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x14ae3c(0x1f4);
            try {
                await _0x4b9a45['waitForSelector']('.featured-title'), await _0x14ae3c(0x1f4), console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x181659['name'] + ']\x20Task\x20' + (_0x29ee30 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x29ee30]['Email'] + '\x20Generated!')), _0x278a25['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x29ee30]['Email'] + ',' + bouncewear[_0x29ee30]['Password']), console['log'](_0x178ebf['yellow'](_0x51e22d() + '\x20[' + _0x181659['name'] + ']\x20Task\x20' + (_0x29ee30 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x29ee30]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x1f2c37) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x29ee30 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1f2c37));
            }
        } catch (_0x235f84) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x29ee30 + 0x1) + '\x20:\x20' + _0x235f84));
        } finally {
            _0x19e1f7 && _0x19e1f7['close'](), console['log']('Waiting\x20for\x20' + _0x74362e['delay'] + '\x20ms'), await _0x14ae3c(_0x74362e['delay']);
        }
    }
}
async function _0x3f3c38(_0xaa397a, _0x35d7d2, _0x434cc4, _0xe41751) {
    _0x422ef2['use'](_0x4f4dc3()), _0x422ef2['use'](_0x4b1476({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x74362e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1aa012 = 0x0; _0x1aa012 < _0x434cc4['length']; _0x1aa012++) {
        var _0x606ebf = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x295d29
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x74362e['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1574e6
                }
            ]
        }];
        const _0x4cba08 = { 'embeds': _0x606ebf };
        _0x27b422(_0x35d7d2['name'] + '\x20Task\x20' + (_0x1aa012 + 0x1) + '\x20/\x20' + _0x434cc4['length'] + '\x20||\x20File:\x20' + _0x2a553f + '\x20Proxies:\x20' + _0xfc070a), await _0x332f76(_0x434cc4, _0x1aa012);
        var _0x303f83 = await _0x549c09(_0x434cc4[_0x1aa012], _0x35d7d2, 'acc', ![]);
        const _0x321235 = { 'succesDEVMSG': { 'embeds': [_0x303f83] } };
        if (_0x434cc4[_0x1aa012]['Email'] == '' || _0x434cc4[_0x1aa012]['FirstName'] == '' || _0x434cc4[_0x1aa012]['LastName'] == '') {
            console['log'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x1aa012 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x14ae3c(0x7d0);
            continue;
        }
        (_0x434cc4[_0x1aa012]['Password'] == '' || _0x434cc4[_0x1aa012] == undefined) && _0x434cc4[_0x1aa012]['Password'] == 'JRaffles23!';
        if (_0x74362e['useRandomProxy'] = ![])
            var _0x52f2b6 = _0xe41751[_0x1aa012]['split'](':');
        else
            var _0xa535a3 = Math['round'](Math['random']() * (_0xe41751['length'] - 0x1)), _0x52f2b6 = _0xe41751[_0xa535a3]['split'](':');
        const _0x4c6089 = await _0x422ef2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x52f2b6[0x0] + ':' + _0x52f2b6[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5466cd = await _0x4c6089['newPage']();
            await _0x5466cd['authenticate']({
                'username': '' + _0x52f2b6[0x2],
                'password': '' + _0x52f2b6[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0x35d7d2['name'] + ']\x20Task\x20' + (_0x1aa012 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5466cd['setRequestInterception'](!![]), _0x5466cd['on']('request', _0x169ca7 => {
                _0x169ca7['resourceType']() === 'image' || _0x169ca7['resourceType']() === 'font' || _0x169ca7['resourceType']() === 'media' ? _0x169ca7['abort']() : _0x169ca7['continue']();
            }), await _0x5466cd['goto'](_0xaa397a), await _0x14ae3c(0xbb8), await _0x5466cd['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x51e22d() + '\x20[' + _0x35d7d2['name'] + ']\x20Task\x20' + (_0x1aa012 + 0x1) + '\x20:\x20Filling\x20information'), await _0x5466cd['type']('#RegisterForm-FirstName', '' + _0x434cc4[_0x1aa012]['FirstName']), await _0x14ae3c(0x226), await _0x5466cd['type']('#RegisterForm-LastName', '' + _0x434cc4[_0x1aa012]['LastName']), await _0x14ae3c(0x226), await _0x5466cd['type']('#RegisterForm-email', '' + _0x434cc4[_0x1aa012]['Email']), await _0x14ae3c(0x226), await _0x5466cd['type']('#RegisterForm-password', '' + _0x434cc4[_0x1aa012]['Password']), await _0x14ae3c(0x226), console['log'](_0x51e22d() + '\x20[' + _0x35d7d2['name'] + ']\x20Task\x20' + (_0x1aa012 + 0x1) + '\x20:\x20Submitting..'), await _0x5466cd['$eval']('#RegisterForm', _0x523148 => _0x523148['submit']()), await _0x14ae3c(0x1f40);
            try {
                await _0x5466cd['waitForSelector']('.home-page-grid__collection'), await _0x14ae3c(0x1f4), console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x35d7d2['name'] + ']\x20Task\x20' + (_0x1aa012 + 0x1) + '\x20:\x20Account\x20' + _0x434cc4[_0x1aa012]['Email'] + '\x20Generated!')), _0x278a25['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x434cc4[_0x1aa012]['Email'] + ',' + _0x434cc4[_0x1aa012]['Password']), console['log'](_0x178ebf['yellow'](_0x51e22d() + '\x20[' + _0x35d7d2['name'] + ']\x20Task\x20' + (_0x1aa012 + 0x1) + '\x20:\x20Account\x20' + _0x434cc4[_0x1aa012]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x321235['succesDEVMSG']);
                } catch {
                }
                await _0x39d9c6(_0x485afe, _0x321235['succesDEVMSG']);
            } catch (_0x41a2ed) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x1aa012 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x41a2ed));
            }
        } catch (_0x1beb67) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x1aa012 + 0x1) + '\x20:\x20' + _0x1beb67));
        } finally {
            _0x4c6089 && _0x4c6089['close'](), console['log']('Waiting\x20for\x20' + _0x74362e['delay'] + '\x20ms'), await _0x14ae3c(_0x74362e['delay']);
        }
    }
}
async function _0x431ceb(_0xbaea12, _0x15aad7, _0x3236ee, _0x5f3654) {
    _0x422ef2['use'](_0x4f4dc3()), _0x422ef2['use'](_0x4b1476({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x74362e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x23d431 = 0x0; _0x23d431 < _0x3236ee['length']; _0x23d431++) {
        var _0xcd16ba;
        if (_0x3dbe7e != 'yes')
            var _0x3dbe7e = '', _0x5ab827 = 0x0;
        _0x27b422(_0x15aad7['name'] + '\x20Task\x20' + (_0x23d431 + 0x1) + '\x20/\x20' + _0x3236ee['length'] + '\x20||\x20File:\x20' + _0x2a553f + '\x20Proxies:\x20' + _0xfc070a), await _0x332f76(_0x3236ee, _0x23d431);
        if (_0x3236ee[_0x23d431]['Email'] == '' || _0x3236ee[_0x23d431]['Password'] == '' || _0x3236ee[_0x23d431]['FirstName'] == '' || _0x3236ee[_0x23d431]['LastName'] == '') {
            console['log'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x23d431 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x74362e['useRandomProxy'] = ![])
            var _0x17c285 = _0x5f3654[_0x23d431]['split'](':');
        else
            var _0x4f98f0 = Math['round'](Math['random']() * (_0x5f3654['length'] - 0x1)), _0x17c285 = _0x5f3654[_0x4f98f0]['split'](':');
        const _0x22d52d = await _0x422ef2['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x17c285[0x0] + ':' + _0x17c285[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1c695c = await _0x22d52d['newPage']();
            await _0x1c695c['authenticate']({
                'username': '' + _0x17c285[0x2],
                'password': '' + _0x17c285[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0x15aad7['name'] + ']\x20Task\x20' + (_0x23d431 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1c695c['setRequestInterception'](!![]), _0x1c695c['on']('request', _0x1a42ea => {
                _0x1a42ea['resourceType']() === 'image' || _0x1a42ea['resourceType']() === 'font' || _0x1a42ea['resourceType']() === 'media' ? _0x1a42ea['abort']() : _0x1a42ea['continue']();
            }), await _0x1c695c['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x1c695c['waitForSelector']('#CustomerEmail'), console['log'](_0x51e22d() + '\x20[' + _0x15aad7['name'] + ']\x20Task\x20' + (_0x23d431 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1c695c['type']('#CustomerEmail', '' + _0x3236ee[_0x23d431]['Email']), await _0x14ae3c(0x12c), await _0x1c695c['type']('#CustomerPassword', '' + _0x3236ee[_0x23d431]['Password']), await _0x14ae3c(0x226), await _0x1c695c['$eval']('#customer_login', _0x2e133b => _0x2e133b['submit']());
            try {
                await _0x1c695c['waitForSelector']('#orders'), await _0x14ae3c(0x4b0);
            } catch {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x15aad7['name'] + ']\x20Task\x20' + (_0x23d431 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x1c695c['goto']('' + _0x3236ee[_0x23d431]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x14ae3c(0xbb8), console['log'](_0x51e22d() + '\x20[' + _0x15aad7['name'] + ']\x20Task\x20' + (_0x23d431 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x1c695c['waitForSelector']('#email');
            } catch {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x15aad7['name'] + ']\x20Task\x20' + (_0x23d431 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x1c695c['type']('#email', '' + _0x3236ee[_0x23d431]['Email']), await _0x14ae3c(0x384), await _0x1c695c['type']('#first_name', '' + _0x3236ee[_0x23d431]['FirstName']), await _0x14ae3c(0x514), await _0x1c695c['type']('#last_name', '' + _0x3236ee[_0x23d431]['LastName']), await _0x14ae3c(0x514), await _0x1c695c['type']('#street_address', _0x3236ee[_0x23d431]['Address1'] + '\x20' + _0x3236ee[_0x23d431]['HouseNumber'] + '\x20' + _0x3236ee[_0x23d431]['Address2']), await _0x14ae3c(0x2bc);
            _0x3236ee[_0x23d431]['Postcode'] == undefined && (_0x3236ee[_0x23d431]['Postcode'] = _0x3236ee[_0x23d431]['Zip']);
            await _0x1c695c['type']('#zip_code', '' + _0x3236ee[_0x23d431]['Postcode']), await _0x14ae3c(0x320), await _0x1c695c['type']('#city', '' + _0x3236ee[_0x23d431]['City']), await _0x14ae3c(0x320), await _0x1c695c['type']('#bday', '01/01/1994'), await _0x14ae3c(0x320), await _0x1c695c['type']('#instagram', '' + _0x3236ee[_0x23d431]['Follower']), await _0x14ae3c(0x352);
            if (_0x3236ee[_0x23d431]['Size'] == 'RANDOM') {
                const _0x5ef95c = await _0x1c695c['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x12472f => {
                    return _0x12472f['map'](_0x3963ef => _0x3963ef['textContent']);
                });
                var _0x54b8aa = Math['round'](Math['random']() * (_0x5ef95c['length'] - 0x1));
                console['log'](_0x51e22d() + '\x20[' + _0x15aad7['name'] + ']\x20Task\x20' + (_0x23d431 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x5ef95c[_0x54b8aa]), await _0x1c695c['click']('label[data-eu-size=\x22' + _0x5ef95c[_0x54b8aa] + '\x22]');
            } else {
                console['log'](_0x51e22d() + '\x20[' + _0x15aad7['name'] + ']\x20Task\x20' + (_0x23d431 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x3236ee[_0x23d431]['Size']);
                try {
                    await _0x1c695c['click']('label[data-eu-size=\x22' + _0x3236ee[_0x23d431]['Size'] + '\x22]');
                } catch {
                    await _0x1c695c['click']('label[data-eu-size=\x22' + _0x3236ee[_0x23d431]['Size'] + '.0\x22]');
                }
            }
            await _0x14ae3c(0xbb8), await _0x1c695c['$$eval']('.raffle__checkbox-label', _0x38be8d => _0x38be8d['forEach'](_0x266ccf => _0x266ccf['click']())), await _0x14ae3c(0x7d0), console['log'](_0x51e22d() + '\x20[' + _0x15aad7['name'] + ']\x20Task\x20' + (_0x23d431 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x1c695c['click']('#raffle__form-submit'), await _0x14ae3c(0x1388);
            try {
                await _0x1c695c['waitForSelector']('#raffle__confirmation-message-container'), _0x3dbe7e = 'no', _0x1026d9(_0x3236ee[_0x23d431], _0x15aad7), console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x15aad7['name'] + ']\x20Task\x20' + (_0x23d431 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x51376b) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x23d431 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x51376b));
            }
        } catch (_0x3ca56b) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x23d431 + 0x1) + '\x20:\x20' + _0x3ca56b)), _0x3dbe7e = 'yes';
        } finally {
            _0x22d52d && _0x22d52d['close']();
            if (_0x3dbe7e == 'yes' && _0x5ab827 != 0x5 && _0xcd16ba != 'Size\x20Not\x20Found') {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x15aad7['name'] + ']\x20Task\x20' + (_0x23d431 + 0x1) + '\x20:\x20Retrying')), _0x23d431 = _0x23d431 - 0x1, _0x5ab827 = _0x5ab827 + 0x1;
                continue;
            }
            _0x3dbe7e == 'yes' && _0x5ab827 >= 0x5 && (_0x34c91f(_0x3236ee[_0x23d431], _0x15aad7), _0x3dbe7e = 'no', _0x5ab827 = 0x0), console['log']('Waiting\x20for\x20' + _0x74362e['delay'] + '\x20ms'), await _0x14ae3c(_0x74362e['delay']);
        }
    }
}
async function _0x531a45(_0x45d099, _0x2f6090, _0x4f618f, _0x4c24d0) {
    _0x422ef2['use'](_0x4f4dc3()), _0x422ef2['use'](_0x4b1476({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x74362e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x48dae7 = 0x0; _0x48dae7 < _0x4f618f['length']; _0x48dae7++) {
        if (_0x550f22 != 'yes')
            var _0x550f22 = '', _0xd1581b = 0x0;
        var _0x26b4e4 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x295d29
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x74362e['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1574e6
                }
            ]
        }];
        const _0x3403d6 = { 'embeds': _0x26b4e4 };
        _0x27b422(_0x2f6090['name'] + '\x20Task\x20' + (_0x48dae7 + 0x1) + '\x20/\x20' + _0x4f618f['length'] + '\x20||\x20File:\x20' + _0x2a553f + '\x20Proxies:\x20' + _0xfc070a), await _0x332f76(_0x4f618f, _0x48dae7);
        var _0x24eea4 = await _0x549c09(_0x4f618f[_0x48dae7], _0x2f6090, 'acc', ![]);
        const _0x5dc174 = { 'succesDEVMSG': { 'embeds': [_0x24eea4] } };
        if (_0x4f618f[_0x48dae7]['Email'] == '' || _0x4f618f[_0x48dae7]['FirstName'] == '' || _0x4f618f[_0x48dae7]['LastName'] == '') {
            console['log'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x48dae7 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x14ae3c(0x7d0);
            continue;
        }
        (_0x4f618f[_0x48dae7]['Password'] == '' || _0x4f618f[_0x48dae7] == undefined) && _0x4f618f[_0x48dae7]['Password'] == 'JRaffles23!';
        if (_0x74362e['useRandomProxy'] = ![])
            var _0x3fbb95 = _0x4c24d0[_0x48dae7]['split'](':');
        else
            var _0x1ec18a = Math['round'](Math['random']() * (_0x4c24d0['length'] - 0x1)), _0x3fbb95 = _0x4c24d0[_0x1ec18a]['split'](':');
        const _0x2eaa0b = await _0x422ef2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3fbb95[0x0] + ':' + _0x3fbb95[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x10c060 = await _0x2eaa0b['newPage']();
            await _0x10c060['authenticate']({
                'username': '' + _0x3fbb95[0x2],
                'password': '' + _0x3fbb95[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0x2f6090['name'] + ']\x20Task\x20' + (_0x48dae7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x10c060['setRequestInterception'](!![]), _0x10c060['on']('request', _0x1006e1 => {
                _0x1006e1['resourceType']() === 'image' || _0x1006e1['resourceType']() === 'font' || _0x1006e1['resourceType']() === 'media' ? _0x1006e1['abort']() : _0x1006e1['continue']();
            }), await _0x10c060['goto']('https://drop.slamjam.com/account/register'), await _0x14ae3c(0xbb8), await _0x10c060['waitForSelector']('#FirstName'), await _0x10c060['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x10c060['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x51e22d() + '\x20[' + _0x2f6090['name'] + ']\x20Task\x20' + (_0x48dae7 + 0x1) + '\x20:\x20Filling\x20information'), await _0x14ae3c(0x4b0), await _0x10c060['type']('#FirstName', '' + _0x4f618f[_0x48dae7]['FirstName']), await _0x14ae3c(0x226), await _0x10c060['type']('#LastName', '' + _0x4f618f[_0x48dae7]['LastName']), await _0x14ae3c(0x226), await _0x10c060['type']('#Email', '' + _0x4f618f[_0x48dae7]['Email']), await _0x14ae3c(0x2ee), await _0x10c060['type']('#ConfirmEmail', '' + _0x4f618f[_0x48dae7]['Email']), await _0x14ae3c(0x2ee), await _0x10c060['type']('#CreatePassword', '' + _0x4f618f[_0x48dae7]['Password']), await _0x14ae3c(0x2ee), await _0x10c060['type']('#CreateConfirmPassword', '' + _0x4f618f[_0x48dae7]['Password']), await _0x14ae3c(0x226), console['log'](_0x51e22d() + '\x20[' + _0x2f6090['name'] + ']\x20Task\x20' + (_0x48dae7 + 0x1) + '\x20:\x20Submitting..'), await _0x10c060['$eval']('#create_customer', _0x3723a0 => _0x3723a0['submit']()), await _0x14ae3c(0x1388), console['log'](_0x51e22d() + '\x20[' + _0x2f6090['name'] + ']\x20Task\x20' + (_0x48dae7 + 0x1) + '\x20:\x20' + _0x178ebf['cyan']('Solving\x20Captcha')), await _0x10c060['solveRecaptchas'](), console['log'](_0x51e22d() + '\x20[' + _0x2f6090['name'] + ']\x20Task\x20' + (_0x48dae7 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x10c060['$eval']('.shopify-challenge__container\x20>\x20form', _0x4fd9bf => _0x4fd9bf['submit']());
            try {
                await _0x10c060['waitForSelector']('.product-card__image'), await _0x14ae3c(0x1f4), _0x550f22 = 'no', console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x2f6090['name'] + ']\x20Task\x20' + (_0x48dae7 + 0x1) + '\x20:\x20Account\x20' + _0x4f618f[_0x48dae7]['Email'] + '\x20Generated!')), _0x278a25['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x4f618f[_0x48dae7]['Email'] + ',' + _0x4f618f[_0x48dae7]['Password']), console['log'](_0x178ebf['yellow'](_0x51e22d() + '\x20[' + _0x2f6090['name'] + ']\x20Task\x20' + (_0x48dae7 + 0x1) + '\x20:\x20Account\x20' + _0x4f618f[_0x48dae7]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x5dc174['succesDEVMSG']);
                } catch {
                }
                await _0x39d9c6(_0x485afe, _0x5dc174['succesDEVMSG']);
            } catch (_0xbb9a52) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x48dae7 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xbb9a52));
            }
        } catch (_0x4f2f91) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x48dae7 + 0x1) + '\x20:\x20' + _0x4f2f91));
        } finally {
            _0x2eaa0b && _0x2eaa0b['close']();
            if (_0x550f22 == 'yes' && _0xd1581b != 0x5) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x2f6090['name'] + ']\x20Task\x20' + (_0x48dae7 + 0x1) + '\x20:\x20Retrying')), _0x48dae7 = _0x48dae7 - 0x1, _0xd1581b = _0xd1581b + 0x1;
                continue;
            }
            _0x550f22 == 'yes' && _0xd1581b >= 0x5 && (_0x34c91f(_0x4f618f[_0x48dae7], _0x2f6090), _0x550f22 = 'no', _0xd1581b = 0x0), console['log']('Waiting\x20for\x20' + _0x74362e['delay'] + '\x20ms'), await _0x14ae3c(_0x74362e['delay']);
        }
    }
}
async function _0x278674(_0xbcae5f, _0x5df812, _0x36479a, _0x3bcadc) {
    _0x422ef2['use'](_0x4f4dc3()), _0x422ef2['use'](_0x4b1476({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x74362e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x181356 = 0x0; _0x181356 < _0x36479a['length']; _0x181356++) {
        var _0x5104ff;
        if (_0x100557 != 'yes')
            var _0x100557 = '', _0x58422d = 0x0;
        _0x27b422(_0x5df812['name'] + '\x20Task\x20' + (_0x181356 + 0x1) + '\x20/\x20' + _0x36479a['length'] + '\x20||\x20File:\x20' + _0x2a553f + '\x20Proxies:\x20' + _0xfc070a), await _0x332f76(_0x36479a, _0x181356);
        if (_0x36479a[_0x181356]['Email'] == '' || _0x36479a[_0x181356]['Password'] == '' || _0x36479a[_0x181356]['FirstName'] == '' || _0x36479a[_0x181356]['LastName'] == '') {
            console['log'](_0x51e22d() + '\x20[' + _0x5df812['name'] + ']\x20Task\x20' + (_0x181356 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x74362e['useRandomProxy'] = ![])
            var _0x3d753d = _0x3bcadc[_0x181356]['split'](':');
        else
            var _0x3e1d70 = Math['round'](Math['random']() * (_0x3bcadc['length'] - 0x1)), _0x3d753d = _0x3bcadc[_0x3e1d70]['split'](':');
        const _0x18c3a6 = await _0x422ef2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3d753d[0x0] + ':' + _0x3d753d[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x105b63 = await _0x18c3a6['newPage']();
            await _0x105b63['authenticate']({
                'username': '' + _0x3d753d[0x2],
                'password': '' + _0x3d753d[0x3]
            }), await _0x105b63['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x51e22d() + '\x20[' + _0x5df812['name'] + ']\x20Task\x20' + (_0x181356 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x105b63['setRequestInterception'](!![]), _0x105b63['on']('request', _0xc2ffe8 => {
                _0xc2ffe8['resourceType']() === 'image' || _0xc2ffe8['resourceType']() === 'font' || _0xc2ffe8['resourceType']() === 'media' ? _0xc2ffe8['abort']() : _0xc2ffe8['continue']();
            }), await _0x105b63['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x105b63['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x105b63['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x14ae3c(0x258), await _0x105b63['waitForSelector']('#CustomerEmail'), console['log'](_0x51e22d() + '\x20[' + _0x5df812['name'] + ']\x20Task\x20' + (_0x181356 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x105b63['type']('#CustomerEmail', '' + _0x36479a[_0x181356]['Email']), await _0x14ae3c(0x12c), await _0x105b63['type']('#CustomerPassword', '' + _0x36479a[_0x181356]['Password']), await _0x14ae3c(0x226), await _0x105b63['$eval']('#customer_login', _0x49ff67 => _0x49ff67['submit']()), await _0x14ae3c(0x7d0), await _0x105b63['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x51e22d() + '\x20[' + _0x5df812['name'] + ']\x20Task\x20' + (_0x181356 + 0x1) + '\x20:\x20' + _0x178ebf['cyan']('Solving\x20Captcha')), await _0x105b63['solveRecaptchas'](), console['log'](_0x51e22d() + '\x20[' + _0x5df812['name'] + ']\x20Task\x20' + (_0x181356 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x105b63['$eval']('.shopify-challenge__container\x20>\x20form', _0x3dd1e8 => _0x3dd1e8['submit']());
            try {
                await _0x105b63['waitForSelector']('.nav-account'), await _0x14ae3c(0x4b0);
            } catch {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x5df812['name'] + ']\x20Task\x20' + (_0x181356 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x105b63['goto']('' + _0x36479a[_0x181356]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x14ae3c(0xbb8), console['log'](_0x51e22d() + '\x20[' + _0x5df812['name'] + ']\x20Task\x20' + (_0x181356 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x105b63['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x105b63['click']('.product-select-variant-wrapper'), await _0x14ae3c(0x320), await _0x105b63['click']('li.product-select-variant__value[data-size=\x22' + _0x36479a[_0x181356]['Size'] + '\x22]'), await _0x14ae3c(0x384), await _0x105b63['$eval']('#AddToCartForm-product-template-raffle', _0x326545 => _0x326545['submit']()), await _0x105b63['waitForSelector']('.cart-order-summary__content'), await _0x14ae3c(0x514), await _0x105b63['goto']('https://drop.slamjam.com/checkout'), await _0x14ae3c(0x514), await _0x105b63['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x51e22d() + '\x20[' + _0x5df812['name'] + ']\x20Task\x20' + (_0x181356 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x105b63['select']('#checkout_shipping_address_country', '' + _0x36479a[_0x181356]['Country']), await _0x14ae3c(0x200), await _0x105b63['waitForSelector']('#checkout_shipping_address_first_name'), await _0x105b63['type']('#checkout_shipping_address_first_name', '' + _0x36479a[_0x181356]['FirstName']), await _0x14ae3c(0x237), await _0x105b63['type']('#checkout_shipping_address_last_name', '' + _0x36479a[_0x181356]['LastName']), await _0x14ae3c(0x1e0), await _0x105b63['type']('#checkout_shipping_address_address1', _0x36479a[_0x181356]['Address1'] + '\x20' + _0x36479a[_0x181356]['HouseNumber']), await _0x14ae3c(0x514), await _0x105b63['type']('#checkout_shipping_address_address2', '' + _0x36479a[_0x181356]['Address2']), await _0x14ae3c(0x514);
            _0x36479a[_0x181356]['Postcode'] == undefined && (_0x36479a[_0x181356]['Postcode'] = _0x36479a[_0x181356]['Zip']);
            await _0x105b63['type']('#checkout_shipping_address_zip', '' + _0x36479a[_0x181356]['Postcode']), await _0x14ae3c(0x2bc), await _0x105b63['type']('#checkout_shipping_address_city', '' + _0x36479a[_0x181356]['City']), await _0x14ae3c(0x320), await _0x105b63['type']('#checkout_shipping_address_phone', '' + _0x36479a[_0x181356]['Phone']), await _0x14ae3c(0x320), await _0x105b63['click']('#continue_button'), await _0x14ae3c(0xbb8), await _0x105b63['waitForSelector']('.summary-title'), await _0x14ae3c(0x320), await _0x105b63['click']('#continue_button'), await _0x14ae3c(0x320), console['log'](_0x51e22d() + '\x20[' + _0x5df812['name'] + ']\x20Task\x20' + (_0x181356 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x105b63['waitForSelector']('#checkout_credit_card_vault'), await _0x14ae3c(0x3e8);
            var _0x53a044 = await _0x105b63['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x49e6e4 = await _0x53a044['contentFrame']();
            await _0x49e6e4['click']('#number'), await _0x14ae3c(0x3e8), await _0x49e6e4['type']('#number', '' + _0x36479a[_0x181356]['CardNumber'], { 'delay': 0x78 }), _0x53a044 = await _0x105b63['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x49e6e4 = await _0x53a044['contentFrame'](), await _0x14ae3c(0x1c2), await _0x49e6e4['click']('#name'), await _0x14ae3c(0x1f4), await _0x49e6e4['type']('#name', '' + _0x36479a[_0x181356]['NameOnCard'], { 'delay': 0x78 }), _0x53a044 = await _0x105b63['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x49e6e4 = await _0x53a044['contentFrame'](), await _0x14ae3c(0x1c2), await _0x49e6e4['click']('#expiry'), await _0x14ae3c(0x1f4), await _0x49e6e4['type']('#expiry', '' + _0x36479a[_0x181356]['ExpiryDate'], { 'delay': 0x78 }), _0x53a044 = await _0x105b63['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x49e6e4 = await _0x53a044['contentFrame'](), await _0x14ae3c(0x1c2), await _0x49e6e4['click']('#verification_value'), await _0x14ae3c(0x1f4), await _0x49e6e4['type']('#verification_value', '' + _0x36479a[_0x181356]['CVV'], { 'delay': 0x78 }), await _0x105b63['$eval']('#accepts-flag-raffle', _0x271967 => _0x271967['click']()), await _0x14ae3c(0x7d0), console['log'](_0x51e22d() + '\x20[' + _0x5df812['name'] + ']\x20Task\x20' + (_0x181356 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x105b63['$eval']('#continue_button', _0x4b7757 => _0x4b7757['click']()), await _0x14ae3c(0x1b58), await _0x105b63['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x105b63['$eval']('.edit_checkout.animate-floating-labels', _0x57cdce => _0x57cdce['submit']()), await _0x14ae3c(0x7d0);
            try {
                await _0x105b63['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x100557 = 'no', _0x1026d9(_0x36479a[_0x181356], _0x5df812), console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x5df812['name'] + ']\x20Task\x20' + (_0x181356 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x40b1bb) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x40b1bb['message']);
            }
            var _0x4ed224 = await _0x549c09(_0x36479a[_0x181356], _0x5df812, 'dev', ![]), _0x30abcb = await _0x549c09(_0x36479a[_0x181356], _0x5df812, 'pub', ![]);
            const _0x2d271b = {
                'succesDEVMSG': { 'embeds': [_0x4ed224] },
                'succesPUBMSG': { 'embeds': [_0x30abcb] }
            };
            try {
                _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x2d271b['succesDEVMSG']), await _0x14ae3c(0xc8), await _0x39d9c6(_0x4f32a3, _0x2d271b['succesDEVMSG']), await _0x14ae3c(0xc8), await _0x39d9c6(_0x1f889a, _0x2d271b['succesPUBMSG']);
            } catch (_0x16ff16) {
                console['log'](_0x178ebf['yellow'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x181356 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x16ff16));
            }
        } catch (_0x1c2ccf) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x181356 + 0x1) + '\x20:\x20' + _0x1c2ccf)), _0x5104ff = '' + _0x1c2ccf;
            var _0x33e142 = await _0x549c09(kickz[_0x181356], _0x5df812, 'dev', !![], _0x5104ff);
            EMBEDS['errorDEV'] = { 'embeds': [_0x33e142] }, _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], EMBEDS['errorDEV']), await _0x39d9c6(_0xab417d, EMBEDS['errorDEV']), _0x100557 = 'yes';
        } finally {
            _0x18c3a6 && _0x18c3a6['close']();
            if (_0x100557 == 'yes' && _0x58422d != 0x5 && _0x5104ff != 'Size\x20Not\x20Found') {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x5df812['name'] + ']\x20Task\x20' + (_0x181356 + 0x1) + '\x20:\x20Retrying')), _0x181356 = _0x181356 - 0x1, _0x58422d = _0x58422d + 0x1;
                continue;
            }
            _0x100557 == 'yes' && _0x58422d >= 0x5 && (_0x34c91f(_0x36479a[_0x181356], _0x5df812), _0x100557 = 'no', _0x58422d = 0x0), console['log']('Waiting\x20for\x20' + _0x74362e['delay'] + '\x20ms'), await _0x14ae3c(_0x74362e['delay']);
        }
    }
}
async function _0x3fe0cd(_0x561271, _0x9bd5d6, _0x8b65bf) {
    var _0xb5a35c = ![], _0x299d35 = ![];
    if (_0x74362e['captchaKey'] == '' || _0x74362e['captchaKey'] == undefined)
        return console['log'](_0x178ebf['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x422ef2['use'](_0x4f4dc3()), _0x422ef2['use'](_0x4b1476({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x74362e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x320b5f = 0x0; _0x320b5f < _0x9bd5d6['length']; _0x320b5f++) {
        if (_0x16e9fb != 'yes')
            var _0x16e9fb = '', _0x5af517 = 0x0;
        var _0x58255a, _0x539585 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x9bd5d6[_0x320b5f]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x9bd5d6[_0x320b5f]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x295d29
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x74362e['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1574e6
                }
            ]
        }];
        const _0x335912 = { 'embeds': _0x539585 };
        _0x27b422(_0x561271['name'] + '\x20Task\x20' + (_0x320b5f + 0x1) + '\x20/\x20' + _0x9bd5d6['length'] + '\x20||\x20File:\x20' + _0x2a553f + '\x20Proxies:\x20' + _0xfc070a), await _0x332f76(_0x9bd5d6, _0x320b5f);
        var _0x78fb = await _0x549c09(_0x9bd5d6[_0x320b5f], _0x561271, 'dev', ![]), _0x255014 = await _0x549c09(_0x9bd5d6[_0x320b5f], _0x561271, 'pub', ![]);
        const _0x196e25 = {
            'succesDEVMSG': { 'embeds': [_0x78fb] },
            'succesPUBMSG': { 'embeds': [_0x255014] }
        };
        if (_0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '')
            try {
                await _0x39d9c6(_0x74362e['webhook'], _0x196e25['succesDEVMSG']);
            } catch {
            }
        await _0x14ae3c(0xc8), await _0x39d9c6(_0x4f32a3, _0x196e25['succesDEVMSG']), await _0x14ae3c(0xc8);
        try {
            await _0x39d9c6(_0x1f889a, _0x196e25['succesPUBMSG']);
        } catch {
        }
        if (_0x9bd5d6[_0x320b5f]['Email'] == '' || _0x9bd5d6[_0x320b5f]['Url'] == '' || _0x9bd5d6[_0x320b5f]['FirstName'] == '' || _0x9bd5d6[_0x320b5f]['LastName'] == '') {
            console['log'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x320b5f + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x74362e['useRandomProxy'] = ![])
            var _0x11b795 = _0x8b65bf[_0x320b5f]['split'](':');
        else
            var _0x19c942 = Math['round'](Math['random']() * (_0x8b65bf['length'] - 0x1)), _0x11b795 = _0x8b65bf[_0x19c942]['split'](':');
        const _0x1acf04 = await _0x422ef2['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x11b795[0x0] + ':' + _0x11b795[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x55df43 = await _0x1acf04['newPage']();
            await _0x55df43['authenticate']({
                'username': '' + _0x11b795[0x2],
                'password': '' + _0x11b795[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0x561271['name'] + ']\x20Task\x20' + (_0x320b5f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x55df43['setRequestInterception'](!![]), _0x55df43['on']('request', _0x47af85 => {
                _0x47af85['resourceType']() === 'image' || _0x47af85['resourceType']() === 'font' || _0x47af85['resourceType']() === 'media' ? _0x47af85['abort']() : _0x47af85['continue']();
            }), await _0x55df43['goto']('' + _0x9bd5d6[_0x320b5f]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x55df43['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x51e22d() + '\x20[' + _0x561271['name'] + ']\x20Task\x20' + (_0x320b5f + 0x1) + '\x20:\x20Filling\x20Information'), await _0x55df43['type']('#comp_firstname', '' + _0x9bd5d6[_0x320b5f]['FirstName']), await _0x55df43['waitForSelector']('#comp_lastname'), await _0x55df43['type']('#comp_lastname', '' + _0x9bd5d6[_0x320b5f]['LastName']), await _0x55df43['waitForSelector']('#comp_email'), await _0x55df43['type']('#comp_email', '' + _0x9bd5d6[_0x320b5f]['Email']), await _0x55df43['waitForSelector']('#comp_paypalemail'), await _0x55df43['type']('#comp_paypalemail', '' + _0x9bd5d6[_0x320b5f]['Email']), await _0x55df43['waitForSelector']('#comp_mobile_end'), await _0x55df43['type']('#comp_mobile_end', '' + _0x9bd5d6[_0x320b5f]['Phone']), await _0x55df43['waitForSelector']('#comp_dob'), await _0x55df43['type']('#comp_dob', '08/09/1992'), console['log'](_0x51e22d() + '\x20[' + _0x561271['name'] + ']\x20Task\x20' + (_0x320b5f + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x9bd5d6[_0x320b5f]['Size'] == 'RANDOM') {
                const _0x2bc617 = await _0x55df43['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x8be35c => {
                    return _0x8be35c['map'](_0x1dcac4 => _0x1dcac4['value']);
                });
                var _0x2da85a = Math['round'](Math['random']() * (_0x2bc617['length'] - 0x2));
                await _0x55df43['select']('#shoesize', _0x2bc617[_0x2da85a + 0x1]), await _0x14ae3c(0x3e8);
            } else {
                const _0xaf5b99 = await _0x55df43['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1e2e01 => {
                    return _0x1e2e01['map'](_0x2e8c92 => _0x2e8c92['innerText']);
                }), _0x5413c4 = await _0x55df43['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x530463 => {
                    return _0x530463['map'](_0x25d946 => _0x25d946['value']);
                });
                var _0x16db56 = _0x9bd5d6[_0x320b5f]['Size'];
                for (var _0x50e1e8 = 0x1; _0x50e1e8 < _0x5413c4['length']; _0x50e1e8++) {
                    var _0x4e17db = _0xaf5b99[_0x50e1e8]['split']('\x20')[0x0];
                    if (_0x4e17db == _0x16db56) {
                        await _0x55df43['select']('#shoesize', _0x5413c4[_0x50e1e8]);
                        break;
                    } else {
                        if (_0x50e1e8 + 0x1 == _0x5413c4['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x55df43['waitForSelector']('#comp_address1'), await _0x55df43['type']('#comp_address1', _0x9bd5d6[_0x320b5f]['Address1'] + '\x20' + _0x9bd5d6[_0x320b5f]['HouseNumber']), await _0x55df43['waitForSelector']('#comp_address2'), await _0x55df43['type']('#comp_address2', '' + _0x9bd5d6[_0x320b5f]['Address2']), await _0x55df43['waitForSelector']('#comp_address2'), await _0x55df43['type']('#comp_address3', '' + _0x9bd5d6[_0x320b5f]['City']), await _0x55df43['waitForSelector']('#comp_postcode'), await _0x55df43['type']('#comp_postcode', '' + _0x9bd5d6[_0x320b5f]['Zip']), console['log'](_0x51e22d() + '\x20[' + _0x561271['name'] + ']\x20Task\x20' + (_0x320b5f + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x14ae3c(0x4b0), await _0x55df43['click']('label#emailhold'), await _0x14ae3c(0x5dc), await _0x55df43['click']('#preauth_tandc_email\x20>\x20label'), await _0x14ae3c(0x5dc), await _0x55df43['click']('#submit'), await _0x55df43['waitForSelector']('#paymentWrap'), console['log'](_0x51e22d() + '\x20[' + _0x561271['name'] + ']\x20Task\x20' + (_0x320b5f + 0x1) + '\x20:\x20' + _0x178ebf['blue']('Awaiting\x20Paypal\x20Payment')), _0x1acf04['on']('targetcreated', async _0x42a7e6 => {
                if (_0x42a7e6['type']() === 'page') {
                    const _0x324bf2 = await _0x42a7e6['page']();
                    async function _0x543ba0() {
                        try {
                            await _0x55df43['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x299d35 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x3f306b() {
                        try {
                            await _0x55df43['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0xb5a35c = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x3f306b(), _0x543ba0(), await _0x14ae3c(0x493e0);
                }
            });
            async function _0x25d84d() {
                for (let _0x449167 = 0x0; _0x449167 < 0x12c; _0x449167++) {
                    if (_0xb5a35c == !![]) {
                        _0x16e9fb = 'no', _0x1026d9(_0x9bd5d6[_0x320b5f], _0x561271), console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x561271['name'] + ']\x20Task\x20' + (_0x320b5f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '')
                            try {
                                await _0x39d9c6(_0x74362e['webhook'], _0x196e25['succesDEVMSG']);
                            } catch {
                            }
                        await _0x14ae3c(0xc8), await _0x39d9c6(_0x4f32a3, _0x196e25['succesDEVMSG']), await _0x14ae3c(0xc8);
                        try {
                            await _0x39d9c6(_0x1f889a, _0x196e25['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x299d35)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x14ae3c(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x14ae3c(0xbb8), await _0x55df43['click']('.zoid-outlet'), await _0x14ae3c(0x7d0), await _0x25d84d();
        } catch (_0x24104e) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x561271['name'] + ']\x20Task\x20' + (_0x320b5f + 0x1) + '\x20:\x20' + _0x24104e)), _0x58255a = '' + _0x24104e;
            var _0x3ef835 = await _0x549c09(_0x9bd5d6[_0x320b5f], _0x561271, 'dev', !![], _0x58255a);
            _0x196e25['errorDEV'] = { 'embeds': [_0x3ef835] }, _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x196e25['errorDEV']), await _0x39d9c6(_0xab417d, _0x196e25['errorDEV']);
        } finally {
            _0x1acf04 && _0x1acf04['close']();
            if (_0x16e9fb == 'yes' && _0x5af517 != 0x5 && _0x58255a != 'Size\x20Not\x20Found') {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x561271['name'] + ']\x20Task\x20' + (_0x320b5f + 0x1) + '\x20:\x20Retrying')), _0x320b5f = _0x320b5f - 0x1, _0x5af517 = _0x5af517 + 0x1;
                continue;
            }
            _0x16e9fb == 'yes' && _0x5af517 >= 0x5 && (_0x34c91f(afew[_0x320b5f], _0x561271), _0x16e9fb = 'no', _0x5af517 = 0x0), console['log']('Waiting\x20for\x20' + _0x74362e['delay'] + '\x20ms'), await _0x14ae3c(_0x74362e['delay']);
        }
    }
}
async function _0x53ca9c(_0xead0be, _0x2c2eae, _0x49693a) {
    _0x422ef2['use'](_0x4f4dc3()), _0x422ef2['use'](_0x4b1476({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x74362e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5d7712 = 0x0; _0x5d7712 < _0x2c2eae['length']; _0x5d7712++) {
        _0x27b422(_0xead0be['name'] + '\x20Task\x20' + (_0x5d7712 + 0x1) + '\x20/\x20' + _0x2c2eae['length'] + '\x20||\x20File:\x20' + _0x2a553f + '\x20Proxies:\x20' + _0xfc070a);
        var _0x3f5799 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x295d29
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2c2eae[_0x5d7712]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2c2eae[_0x5d7712]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x74362e['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x74362e['version']
                }
            ]
        }];
        const _0x10f20a = { 'embeds': _0x3f5799 };
        await _0x332f76(_0x2c2eae, _0x5d7712);
        if (_0x2c2eae[_0x5d7712]['Email'] == '' || _0x2c2eae[_0x5d7712]['Password'] == '' || _0x2c2eae[_0x5d7712]['FirstName'] == '' || _0x2c2eae[_0x5d7712]['LastName'] == '') {
            console['log'](_0x51e22d() + '\x20[' + _0xead0be['name'] + ']\x20Task\x20' + (_0x5d7712 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x2c2eae[_0x5d7712]['Password'] == '' || _0x2c2eae[_0x5d7712]['Password'] == undefined) && (_0x2c2eae[_0x5d7712]['Password'] = 'ErehsaWonRaj1!');
        if (_0x74362e['useRandomProxy'] = ![])
            var _0xa79ca8 = _0x49693a[_0x5d7712]['split'](':');
        else
            var _0x43a095 = Math['round'](Math['random']() * (_0x49693a['length'] - 0x1)), _0xa79ca8 = _0x49693a[_0x43a095]['split'](':');
        const _0x2f4cb4 = await _0x422ef2['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xa79ca8[0x0] + ':' + _0xa79ca8[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x28abc3 = await _0x2f4cb4['newPage']();
            await _0x28abc3['authenticate']({
                'username': '' + _0xa79ca8[0x2],
                'password': '' + _0xa79ca8[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0xead0be['name'] + ']\x20Task\x20' + (_0x5d7712 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x28abc3['setRequestInterception'](!![]), _0x28abc3['on']('request', _0x97bc89 => {
                _0x97bc89['resourceType']() === 'image' || _0x97bc89['resourceType']() === 'font' || _0x97bc89['resourceType']() === 'media' ? _0x97bc89['abort']() : _0x97bc89['continue']();
            }), await _0x28abc3['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x28abc3['goto']('' + _0x2c2eae[_0x5d7712]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x28abc3['waitForSelector']('#btnPdpAtb'), console['log'](_0x51e22d() + '\x20[' + _0xead0be['name'] + ']\x20Task\x20' + (_0x5d7712 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x2c2eae[_0x5d7712]['Size']);
            const _0x21690f = await _0x28abc3['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x33f503 => {
                return _0x33f503['map'](_0x598d1b => _0x598d1b['innerText']);
            }), _0x39142b = await _0x28abc3['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x9924cf = ![];
            if (_0x2c2eae[_0x5d7712]['Size'] == 'RANDOM') {
                var _0x4f9d44 = Math['round'](Math['random']() * (_0x39142b['length'] - 0x1));
                await _0x39142b[_0x4f9d44]['click']();
            } else
                for (var _0x181eda = 0x0; _0x181eda < _0x21690f['length']; _0x181eda++) {
                    if (_0x21690f[_0x181eda] != _0x2c2eae[_0x5d7712]['Size'])
                        continue;
                    try {
                        await _0x39142b[_0x181eda]['click']();
                    } catch {
                        console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0xead0be['name'] + ']\x20Task\x20' + (_0x5d7712 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x9924cf = !![];
                    }
                }
            if (_0x9924cf)
                continue;
            await _0x14ae3c(0x578), await _0x28abc3['click']('#btnPdpAtb'), await _0x28abc3['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x14ae3c(0x3e8), console['log'](_0x51e22d() + '\x20[' + _0xead0be['name'] + ']\x20Task\x20' + (_0x5d7712 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x28abc3['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x28abc3['waitForSelector']('#email'), await _0x28abc3['type']('#email', _0x2c2eae[_0x5d7712]['Email']), await _0x14ae3c(0x226), await _0x28abc3['click']('#guest-submit'), await _0x14ae3c(0x1b58), console['log'](_0x51e22d() + '\x20[' + _0xead0be['name'] + ']\x20Task\x20' + (_0x5d7712 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x28abc3['waitForSelector']('#firstname'), await _0x28abc3['type']('#firstname', _0x2c2eae[_0x5d7712]['FirstName'], 0x1f4), await _0x14ae3c(0x190), await _0x28abc3['waitForSelector']('#surname'), await _0x28abc3['type']('#surname', _0x2c2eae[_0x5d7712]['LastName'], 0x1f4), await _0x14ae3c(0x190), await _0x28abc3['waitForSelector']('#mobile'), await _0x28abc3['type']('#mobile', _0x2c2eae[_0x5d7712]['Phone'], 0x1f4), await _0x14ae3c(0x190), await _0x28abc3['click']('#enterManualDiv'), await _0x14ae3c(0x5dc), await _0x28abc3['waitForSelector']('#address1'), await _0x28abc3['type']('#address1', _0x2c2eae[_0x5d7712]['Address1'] + '\x20' + _0x2c2eae[_0x5d7712]['HouseNumber'], 0x226), await _0x14ae3c(0x384), await _0x28abc3['waitForSelector']('#address2'), await _0x28abc3['type']('#address2', '' + _0x2c2eae[_0x5d7712]['Address2'], 0x226), await _0x14ae3c(0x320);
            const _0x39f072 = await _0x28abc3['$$eval']('#countryselect_view3\x20>\x20option', _0x24cf3d => {
                return _0x24cf3d['map'](_0x5dab83 => _0x5dab83['value']);
            });
            var _0x27cdc8;
            for (var _0x1aa7f0 = 0x0; _0x1aa7f0 < _0x39f072['length']; _0x1aa7f0++) {
                if (_0x39f072[_0x1aa7f0]['startsWith']('' + _0x2c2eae[_0x5d7712]['Country'])) {
                    _0x27cdc8 = _0x39f072[_0x1aa7f0];
                    break;
                }
                continue;
            }
            await _0x28abc3['select']('#countryselect_view3', '' + _0x27cdc8), await _0x28abc3['waitForSelector']('#address4'), await _0x28abc3['type']('#address4', '' + _0x2c2eae[_0x5d7712]['City'], 0x1f4), await _0x14ae3c(0x384), await _0x28abc3['waitForSelector']('#postcode'), await _0x28abc3['type']('#postcode', '' + _0x2c2eae[_0x5d7712]['Zip'], 0x1f4), await _0x14ae3c(0x4b0);
            const _0x3b41ef = await _0x28abc3['url']();
            console['log'](_0x51e22d() + '\x20[' + _0xead0be['name'] + ']\x20Task\x20' + (_0x5d7712 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x35e0ae = _0x3b41ef['split']('?')[0x1], _0x4e187f = await _0x28abc3['$']('#co_address_submit');
            await _0x4e187f['evaluate'](_0x3e3b59 => _0x3e3b59['click']()), await _0x14ae3c(0x1388), await _0x28abc3['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x35e0ae), console['log'](_0x51e22d() + '\x20[' + _0xead0be['name'] + ']\x20Task\x20' + (_0x5d7712 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x28abc3['waitForSelector']('#paymentbuttons'), await _0x14ae3c(0x1388), await _0x28abc3['click']('#paymentbuttons\x20>\x20div'), await _0x14ae3c(0x1c2), await _0x28abc3['waitForSelector']('#card-number'), await _0x28abc3['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x43abcf = await _0x28abc3['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x311fa9 = await _0x43abcf['contentFrame']();
            await _0x311fa9['waitForSelector']('.InputContainer'), await _0x311fa9['click']('.InputContainer\x20>\x20input'), await _0x14ae3c(0x578), await _0x28abc3['type']('#card-number', '' + _0x2c2eae[_0x5d7712]['CreditNumber']), await _0x14ae3c(0xfa), await _0x28abc3['type']('#card-expiry', '' + _0x2c2eae[_0x5d7712]['ExpiryDate']), await _0x14ae3c(0xfa), await _0x28abc3['type']('#card-cvc', '' + _0x2c2eae[_0x5d7712]['CVV']), await _0x14ae3c(0x7d0), await _0x28abc3['click']('#card-button'), console['log'](_0x51e22d() + '\x20[' + _0xead0be['name'] + ']\x20Task\x20' + (_0x5d7712 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x28abc3['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0xead0be['name'] + ']\x20Task\x20' + (_0x5d7712 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x39d9c6(_0x4f32a3, _0x10f20a);
            } catch {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0xead0be['name'] + ']\x20Task\x20' + (_0x5d7712 + 0x1) + '\x20:\x203DS\x20Failed')), _0x3f5799[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x3f5799[0x0]['description'] = '3DS\x20Failed', await _0x39d9c6(_0xab417d, _0x10f20a);
            }
        } catch (_0xb5afe4) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0xead0be['name'] + ']\x20Task\x20' + (_0x5d7712 + 0x1) + '\x20:\x20' + _0xb5afe4)), _0x3f5799[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x3f5799[0x0]['description'] = '' + _0xb5afe4, await _0x39d9c6(_0xab417d, _0x10f20a);
        } finally {
            _0x2f4cb4 && _0x2f4cb4['close']();
            if (_0x5d7712 + 0x1 == _0x2c2eae['length']) {
                console['log'](_0x178ebf['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x14ae3c(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x74362e['AfewDelay'] + '\x20ms'), await _0x14ae3c(_0x74362e['AfewDelay']);
        }
    }
}
async function _0x43640d(_0x46d5e3, _0xe176f3, _0x3e0cb1, _0x2bf458, _0x5622b4) {
    var _0x30e2ae, _0x482a5b = {}, _0x211bd0 = [], _0xe36f9b = {}, _0xc64ec7 = [
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
    !_0x2bf458 && (_0x2bf458 = {});
    if (_0xe176f3 != 'ver') {
        _0x27b422(_0x3e0cb1['name'] + '\x20Task\x20' + (_0x46d5e3 + 0x1) + '\x20/\x20' + _0x2bf458['length'] + '\x20||\x20File:\x20' + _0x2a553f + '\x20Proxies:\x20' + _0xfc070a), await _0x332f76(_0x2bf458, _0x46d5e3), _0x211bd0 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x295d29
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2bf458[_0x46d5e3]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x74362e['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x1574e6
                }
            ]
        }], _0xe36f9b = { 'embeds': _0x211bd0 }, _0x482a5b = _0x3e0cb1['data'];
        _0xe176f3 == 'exp' ? _0x482a5b['data']['attributes']['email'] = '' + _0x2bf458[_0x46d5e3]['FirstName'] + _0x2bf458[_0x46d5e3]['LastName'] + _0x74362e['catchall'] : _0x482a5b['data']['attributes']['email'] = '' + _0x2bf458[_0x46d5e3]['Email'];
        if (_0x2bf458[_0x46d5e3]['Size'] == 'RANDOM') {
        }
        _0x482a5b['data']['attributes']['properties']['$first_name'] = '' + _0x2bf458[_0x46d5e3]['FirstName'], _0x482a5b['data']['attributes']['properties']['$last_name'] = '' + _0x2bf458[_0x46d5e3]['LastName'], _0x482a5b['data']['attributes']['properties']['$address1'] = _0x2bf458[_0x46d5e3]['Address1'] + '\x20' + _0x2bf458[_0x46d5e3]['Address2'] + '\x20' + _0x2bf458[_0x46d5e3]['HouseNumber'], _0x482a5b['data']['attributes']['properties']['$zip'] = '' + _0x2bf458[_0x46d5e3]['Zip'], _0x482a5b['data']['attributes']['properties']['$city'] = '' + _0x2bf458[_0x46d5e3]['City'], _0x482a5b['data']['attributes']['properties']['$country'] = '' + _0x2bf458[_0x46d5e3]['Country'], _0x482a5b['data']['attributes']['properties']['Size'] = '' + _0x2bf458[_0x46d5e3]['Size'], _0x482a5b['data']['attributes']['properties']['$phone_number'] = '' + _0x2bf458[_0x46d5e3]['Phone'], _0x482a5b['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2bf458[_0x46d5e3]['Follower'];
    }
    if (_0x74362e['useRandomProxy'] = ![])
        var _0x1a4a19 = _0x5622b4[_0x46d5e3]['split'](':');
    else
        var _0x3ca413 = Math['round'](Math['random']() * (_0x5622b4['length'] - 0x1)), _0x1a4a19 = _0x5622b4[_0x3ca413]['split'](':');
    var _0x344637 = {
        'jar': _0x4ea6b0,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x3e0cb1['url'],
        'headers': _0x3e0cb1['headers'],
        'body': JSON['stringify'](_0x482a5b),
        'proxy': 'http://' + _0x1a4a19[0x2] + ':' + _0x1a4a19[0x3] + '@' + _0x1a4a19[0x0] + ':' + _0x1a4a19[0x1]
    };
    return _0xe176f3 != 'ver' && (_0x344637['url'] = _0x3e0cb1['url'], _0x344637['headers'] = _0x3e0cb1['headers']), _0xe176f3 == 'ver' && (_0x344637['method'] = 'GET'), new Promise(function (_0x466307, _0x47150a) {
        callback = async (_0x3a90e6, _0xcda48a, _0x3a3fc2) => {
            if (!_0x3a90e6 && _0xcda48a['statusCode'] == 0xca || !_0x3a90e6 && _0xcda48a['statusCode'] == 0xc8) {
                if (_0xe176f3 != 'ver') {
                    var _0x4d3dc4 = await _0x549c09(_0x2bf458[_0x46d5e3], _0x3e0cb1, 'dev', ![]), _0x3add69 = await _0x549c09(_0x2bf458[_0x46d5e3], _0x3e0cb1, 'pub', ![]);
                    const _0x86706b = {
                        'succesDEVMSG': { 'embeds': [_0x4d3dc4] },
                        'succesPUBMSG': { 'embeds': [_0x3add69] }
                    };
                    if (_0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '')
                        try {
                            await _0x39d9c6(_0x74362e['webhook'], _0x86706b['succesDEVMSG']);
                        } catch {
                        }
                    await _0x14ae3c(0xc8), await _0x39d9c6(_0x4f32a3, _0x86706b['succesDEVMSG']), await _0x14ae3c(0xc8);
                    try {
                        await _0x39d9c6(_0x1f889a, _0x86706b['succesPUBMSG']);
                    } catch {
                    }
                    _0x1026d9(_0x2bf458[_0x46d5e3], _0x3e0cb1);
                }
                _0x466307(console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x3e0cb1['name'] + ']\x20Task\x20' + (_0x46d5e3 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0xe176f3 != 'ver') {
                    var _0x22e6e0 = '' + _0x3a90e6, _0xe6e428 = await _0x549c09(_0x2bf458[_0x46d5e3], _0x3e0cb1, 'dev', !![], _0x22e6e0), _0x336865 = {};
                    _0x336865['errorDEV'] = { 'embeds': [_0xe6e428] }, _0x34c91f(_0x2bf458[_0x46d5e3], _0x3e0cb1), _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x336865['errorDEV']), await _0x39d9c6(_0xab417d, _0x336865['errorDEV']);
                }
                _0x47150a(console['log'](_0x51e22d() + '\x20[' + _0x3e0cb1['name'] + ']\x20Task\x20' + (_0x46d5e3 + 0x1) + ':\x20' + _0x3a90e6));
            }
        };
        try {
            _0xe176f3 != 'ver' && console['log'](_0x51e22d() + '\x20[' + _0x3e0cb1['name'] + ']\x20Task\x20' + (_0x46d5e3 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x482a5b['data']['attributes']['email']), _0x89cea3(_0x344637, callback);
        } catch (_0x5e5415) {
            console['log'](_0x51e22d() + '\x20Task\x20' + (_0x46d5e3 + 0x1) + ':\x20' + _0x5e5415);
        }
    });
}
;
async function _0x5b94c5(_0x48e401, _0x22a26b, _0x86b1e3) {
    var _0x10267d;
    _0x27b422('' + _0x22a26b);
    var _0x360110 = _0x86b1e3[0x0]['split'](':');
    const _0x310aa3 = await _0x422ef2['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x360110[0x0] + ':' + _0x360110[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x51e22d() + '\x20[' + _0x22a26b + ']\x20Getting\x20Session');
        const _0x49901c = JSON['parse'](_0x278a25['readFileSync']('sessions/log.json')), _0x1b152c = await _0x310aa3['newPage']();
        await _0x1b152c['authenticate']({
            'username': '' + _0x360110[0x2],
            'password': '' + _0x360110[0x3]
        }), await _0x1b152c['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x1b152c, await _0x1b152c['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x51e22d() + '\x20[' + _0x22a26b + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x1b152c['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x51e22d() + '\x20[' + _0x22a26b + ']\x20Successfully\x20logged\x20in'), await _0x14ae3c(0x2710), _0x10267d = await _0x1b152c['cookies'](), _0x278a25['writeFileSync']('sessions/log.json', '' + JSON['stringify'](_0x10267d));
        } catch (_0x480a59) {
            throw new Error('Login\x20session\x20expired\x20' + _0x480a59);
        }
        for (var _0x4b59bb = 0x0; _0x4b59bb < _0x48e401['length']; _0x4b59bb++) {
            console['log'](_0x51e22d() + '\x20[' + _0x22a26b + ']\x20Task\x20' + (_0x4b59bb + 0x1) + '\x20:\x20Starting\x20Verification'), _0x27b422(_0x22a26b + '\x20Task\x20' + (_0x4b59bb + 0x1) + '\x20/\x20' + _0x48e401['length']);
            const _0x41b8b7 = await _0x310aa3['newPage']();
            await _0x41b8b7['goto']('' + _0x48e401[_0x4b59bb], { 'waitUntil': 'networkidle2' }), await _0x14ae3c(0xbb8);
            try {
                const _0x4ccf6b = await _0x41b8b7['$']('#challenge-heading');
                _0x4ccf6b && (console['log'](_0x51e22d() + '\x20[' + _0x22a26b + ']\x20Task\x20' + (_0x4b59bb + 0x1) + '\x20:\x20' + _0x178ebf['yellow']('2FA\x20Required')), await _0x41b8b7['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x14ae3c(0x61a8), await _0x41b8b7['waitForSelector']('#payment-submit-btn'), await _0x41b8b7['$eval']('#payment-submit-btn', _0x1e0be1 => _0x1e0be1['click']()), await _0x41b8b7['click']('#payment-submit-btn');
                try {
                    await _0x41b8b7['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x14ae3c(0x5dc), console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x22a26b + ']\x20Task\x20' + (_0x4b59bb + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x2718b7) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x2718b7['message']);
                } finally {
                    await _0x41b8b7['close'](), await _0x14ae3c(0x4650);
                }
            } catch (_0x4b6fb8) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x22a26b + ']\x20Task\x20' + (_0x4b59bb + 0x1) + '\x20:\x20' + _0x4b6fb8));
            }
        }
    } catch (_0x4ea47a) {
        console['log'](_0x178ebf['red']('' + _0x4ea47a));
    } finally {
        await _0x310aa3['close']();
    }
}
async function _0x4c3517(_0x182aec, _0x59af2a, _0x484e3e) {
    _0x422ef2['use'](_0x4f4dc3()), _0x422ef2['use'](_0x4b1476({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x74362e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3a41fa = 0x0; _0x3a41fa < _0x182aec['length']; _0x3a41fa++) {
        if (_0x3a0e6b != 'yes')
            var _0x3a0e6b = '', _0x5bfe66 = 0x0;
        var _0x569897;
        await _0x332f76(_0x182aec, _0x3a41fa), _0x27b422(_0x484e3e['name'] + '\x20Task\x20' + (_0x3a41fa + 0x1) + '\x20/\x20' + _0x182aec['length'] + '\x20||\x20File:\x20' + _0x2a553f + '\x20Proxies:\x20' + _0xfc070a);
        var _0x2d866b = await _0x549c09(_0x182aec[_0x3a41fa], _0x484e3e, 'acc', ![]);
        const _0x54cb61 = { 'succesDEVMSG': { 'embeds': [_0x2d866b] } }, _0x3148ad = 'https://www.bstn.com/eu_en/customer/account/';
        var _0xa0b5b0 = Math['round'](Math['random']() * (_0x59af2a['length'] - 0x1)), _0xb13e8f = _0x59af2a[_0xa0b5b0]['split'](':');
        const _0x1efcca = await _0x422ef2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0xb13e8f[0x0] + ':' + _0xb13e8f[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--force-device-scale-factor=0.3'
            ]
        });
        try {
            const _0x44f7de = await _0x1efcca['newPage']();
            await _0x44f7de['authenticate']({
                'username': '' + _0xb13e8f[0x2],
                'password': '' + _0xb13e8f[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0x484e3e['name'] + ']\x20Task\x20' + (_0x3a41fa + 0x1) + '\x20:\x20Getting\x20Session'), await _0x44f7de['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x44f7de['setRequestInterception'](!![]), _0x44f7de['on']('request', _0x54edee => {
                _0x54edee['resourceType']() === 'image' ? _0x54edee['abort']() : _0x54edee['continue']();
            }), await _0x44f7de['goto']('' + _0x3148ad), await _0x44f7de['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x44f7de['click']('button[class=\x22cf2Lf6\x22]'), await _0x44f7de['waitForSelector']('a.action.create.primary.social-login'), console['log'](_0x51e22d() + '\x20[' + _0x484e3e['name'] + ']\x20Task\x20' + (_0x3a41fa + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x14ae3c(0x7d0), await _0x44f7de['click']('a.action.create.primary.social-login'), await _0x14ae3c(0x7d0), await _0x44f7de['click']('button.button.dashboard-actions-toolbar__item'), console['log'](_0x51e22d() + '\x20[' + _0x484e3e['name'] + ']\x20Task\x20' + (_0x3a41fa + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x14ae3c(0x190), await _0x44f7de['type']('#firstname', _0x182aec[_0x3a41fa]['FirstName'], { 'delay': 0xf0 }), await _0x14ae3c(0x190), await _0x44f7de['type']('#lastname', _0x182aec[_0x3a41fa]['LastName'], { 'delay': 0xe6 }), await _0x14ae3c(0x190), await _0x44f7de['type']('#bss_email_address', _0x182aec[_0x3a41fa]['Email'], { 'delay': 0x122 }), await _0x14ae3c(0x190), await _0x44f7de['type']('#password', _0x182aec[_0x3a41fa]['Password'], { 'delay': 0x1e0 }), console['log'](_0x51e22d() + '\x20[' + _0x484e3e['name'] + ']\x20Task\x20' + (_0x3a41fa + 0x1) + '\x20:\x20Sending\x20Request'), await _0x14ae3c(0x2bc), await _0x44f7de['click']('#bt-social-create'), await _0x44f7de['click']('#bt-social-create'), await _0x14ae3c(0x1388);
            const _0x476364 = await _0x44f7de['$']('#bss_email_address-error');
            if (_0x476364)
                throw new Error('Invalid\x20Email');
            const _0x2571c7 = await _0x44f7de['$']('#password-error');
            if (_0x2571c7)
                throw new Error('Invalid\x20Password');
            await _0x44f7de['waitForSelector']('div.mesg-success'), _0x3a0e6b = 'no', console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x484e3e['name'] + ']\x20Task\x20' + (_0x3a41fa + 0x1) + '\x20:\x20Account\x20' + _0x182aec[_0x3a41fa]['Email'] + '\x20Generated')), _0x278a25['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x182aec[_0x3a41fa]['Email'] + ',' + _0x182aec[_0x3a41fa]['Password']);
            try {
                _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x54cb61['succesDEVMSG']);
            } catch {
            }
            await _0x39d9c6(_0x485afe, _0x54cb61['succesDEVMSG']), console['log'](_0x178ebf['yellow'](_0x51e22d() + '\x20[' + _0x484e3e['name'] + ']\x20Task\x20' + (_0x3a41fa + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
        } catch (_0x37c299) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x484e3e['name'] + ']\x20Task\x20' + (_0x3a41fa + 0x1) + '\x20:\x20' + _0x37c299)), _0x569897 = '' + _0x37c299;
            var _0x102287 = await _0x549c09(_0x182aec[_0x3a41fa], _0x484e3e, 'acc', !![], _0x569897);
            _0x54cb61['errorDEV'] = { 'embeds': [_0x102287] }, _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x54cb61['errorDEV']), await _0x39d9c6(_0xab417d, _0x54cb61['errorDEV']);
        } finally {
            _0x1efcca['close']();
            if (_0x3a0e6b == 'yes' && _0x5bfe66 != 0x5) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x484e3e['name'] + ']\x20Task\x20' + (_0x3a41fa + 0x1) + '\x20:\x20Retrying')), _0x3a41fa = _0x3a41fa - 0x1, _0x5bfe66 = _0x5bfe66 + 0x1;
                continue;
            }
            _0x3a0e6b == 'yes' && _0x5bfe66 >= 0x5 && (_0x34c91f(_0x182aec[_0x3a41fa], _0x484e3e), _0x3a0e6b = 'no', _0x5bfe66 = 0x0), console['log'](_0x51e22d() + '\x20[' + _0x484e3e['name'] + ']\x20Waiting\x20for\x20' + _0x74362e['delay'] + '\x20ms'), await _0x14ae3c(_0x74362e['delay']);
        }
    }
}
async function _0x563798(_0xda64aa, _0x4dfe61, _0x61836a) {
    _0x422ef2['use'](_0x4f4dc3());
    for (var _0x4de8cd = 0x0; _0x4de8cd < _0xda64aa['length']; _0x4de8cd++) {
        if (_0x58e9ee != 'yes')
            var _0x58e9ee = '', _0x2b5b5f = 0x0;
        var _0x53d6fb = Math['round'](Math['random']() * (_0x4dfe61['length'] - 0x1)), _0x2112ae = _0x4dfe61[_0x53d6fb]['split'](':');
        const _0xd8d9e5 = await _0x422ef2['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2112ae[0x0] + ':' + _0x2112ae[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x268f8f = await _0xd8d9e5['newPage']();
            await _0x268f8f['authenticate']({
                'username': '' + _0x2112ae[0x2],
                'password': '' + _0x2112ae[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0x61836a['name'] + ']\x20Task\x20' + (_0x4de8cd + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x268f8f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x268f8f['setRequestInterception'](!![]), _0x268f8f['on']('request', _0x5597d5 => {
                _0x5597d5['resourceType']() === 'image' || _0x5597d5['resourceType']() === 'font' || _0x5597d5['resourceType']() === 'media' ? _0x5597d5['abort']() : _0x5597d5['continue']();
            }), console['log'](_0x51e22d() + '\x20[' + _0x61836a['name'] + ']\x20Task\x20' + (_0x4de8cd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x268f8f['goto'](_0xda64aa[_0x4de8cd]), console['log'](_0x51e22d() + '\x20[' + _0x61836a['name'] + ']\x20Task\x20' + (_0x4de8cd + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x268f8f['waitForTimeout'](0xbb8);
            try {
                await _0x268f8f['waitForSelector']('.dashboard-main_title'), _0x58e9ee = 'no', console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x61836a['name'] + ']\x20Task\x20' + (_0x4de8cd + 0x1) + '\x20:\x20Verification\x20Successful'));
                var _0x5f1505 = await _0x549c09(null, _0x61836a, 'ver', ![]);
                const _0x2db717 = { 'succesDEVMSG': { 'embeds': [_0x5f1505] } };
                await _0x39d9c6(_0xe62ef2, _0x2db717['succesDEVMSG']);
            } catch (_0x2c49cd) {
                throw new Error(_0x2c49cd);
            }
        } catch (_0x52d9b6) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x61836a['name'] + ']\x20Task\x20' + (_0x4de8cd + 0x1) + '\x20:\x20' + _0x52d9b6));
            var _0x46b521 = _0x52d9b6, _0x45d0e6 = await _0x549c09(null, _0x61836a, 'ver', !![], _0x46b521);
            const _0x25d3f3 = { 'errorDEVMSG': { 'embeds': [_0x45d0e6] } };
            _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x25d3f3['errorDEVMSG']), await _0x39d9c6(_0xab417d, _0x25d3f3['errorDEVMSG']), _0x58e9ee = 'yes';
        } finally {
            _0xd8d9e5['close']();
            if (_0x58e9ee == 'yes' && _0x2b5b5f != 0x5) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x61836a['name'] + ']\x20Task\x20' + (_0x4de8cd + 0x1) + '\x20:\x20Retrying')), _0x4de8cd = _0x4de8cd - 0x1, _0x2b5b5f = _0x2b5b5f + 0x1;
                continue;
            }
            _0x58e9ee == 'yes' && _0x2b5b5f >= 0x5 && (_0x34c91f(bstn[_0x4de8cd], _0x61836a), _0x58e9ee = 'no', _0x2b5b5f = 0x0), console['log'](_0x51e22d() + '\x20[' + _0x61836a['name'] + ']\x20Waiting\x20for\x20' + _0x74362e['delay'] + '\x20ms'), await _0x14ae3c(_0x74362e['delay']);
        }
    }
}
async function _0x24aec1(_0x3d784a, _0x1dfeb7, _0x4fb02d) {
    _0x422ef2['use'](_0x4f4dc3()), _0x422ef2['use'](_0x4b1476({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x74362e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x239a05 = 0x0; _0x239a05 < _0x3d784a['length']; _0x239a05++) {
        var _0x5ad442;
        await _0x332f76(_0x3d784a, _0x239a05);
        if (_0x22cf4b != 'yes')
            var _0x22cf4b = '', _0x82b5a8 = 0x0;
        _0x27b422(_0x4fb02d['name'] + '\x20Task\x20' + (_0x239a05 + 0x1) + '\x20/\x20' + _0x3d784a['length'] + '\x20||\x20File:\x20' + _0x2a553f + '\x20Proxies:\x20' + _0xfc070a);
        var _0x1e3c4b = Math['round'](Math['random']() * (_0x1dfeb7['length'] - 0x1)), _0x41a50d = _0x1dfeb7[_0x1e3c4b]['split'](':'), _0x11120e;
        try {
            _0x11120e = await _0x422ef2['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x41a50d[0x0] + ':' + _0x41a50d[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x11120e = await _0x422ef2['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x41a50d[0x0] + ':' + _0x41a50d[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x367402 = await _0x11120e['newPage'](), _0x17bc59 = await _0x367402['target']()['createCDPSession'](), { windowId: _0x30f9e6 } = await _0x17bc59['send']('Browser.getWindowForTarget');
            await _0x367402['setViewport']({
                'width': 0x501,
                'height': 0x2d0
            });
            var _0x433955 = [{
                'name': 'cf_clearance',
                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                'domain': '.bstn.com',
                'path': '/',
                'expires': 1707818183.331533,
                'httpOnly': !![],
                'secure': !![]
            }];
            await _0x367402['authenticate']({
                'username': '' + _0x41a50d[0x2],
                'password': '' + _0x41a50d[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0x4fb02d['name'] + ']\x20Task\x20' + (_0x239a05 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x367402['goto']('' + _0x3d784a[_0x239a05]['Url']), console['log'](_0x51e22d() + '\x20[' + _0x4fb02d['name'] + ']\x20Task\x20' + (_0x239a05 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x367402['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x17bc59['send']('Browser.setWindowBounds', {
                'windowId': _0x30f9e6,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x14ae3c(0x1388), await _0x367402['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x367402['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x14ae3c(0x1f4), console['log'](_0x51e22d() + '\x20[' + _0x4fb02d['name'] + ']\x20Task\x20' + (_0x239a05 + 0x1) + '\x20:\x20Logging\x20in'), await _0x367402['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x2a4259 => _0x2a4259['click']()), await _0x367402['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x367402['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x14ae3c(0x7d0), await _0x367402['waitForSelector']('#email-login'), await _0x367402['type']('#email-login', '' + _0x3d784a[_0x239a05]['Email']), await _0x14ae3c(0x1f4), await _0x367402['waitForSelector']('#password'), await _0x367402['type']('#password', '' + _0x3d784a[_0x239a05]['Password']), await _0x14ae3c(0x1f4);
            try {
                await _0x367402['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x1fa706 => _0x1fa706['click']()), await _0x367402['click']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]');
            } catch {
            }
            try {
                await _0x367402['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
            } catch (_0xfe34c7) {
            }
            await _0x14ae3c(0x3e8);
            const _0x40ce5e = await _0x367402['$']('.enteredDraw_container__2KmQ_');
            if (_0x40ce5e)
                throw new Error('Duplicate\x20Entry');
            console['log'](_0x51e22d() + '\x20[' + _0x4fb02d['name'] + ']\x20Task\x20' + (_0x239a05 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3d784a[_0x239a05]['Size']);
            if (_0x3d784a[_0x239a05]['Size'] != 'RANDOM') {
                var _0x3923d4 = _0x3d784a[_0x239a05]['Size']['replace']('.', ',');
                const _0xc10ad2 = await _0x367402['$x']('//div[contains(text(),\x20' + _0x3923d4 + ')]');
                await _0xc10ad2[0x0]['click']();
            } else {
                const _0x4cbba1 = await _0x367402['$$']('div.swatchTile_tile__IRH9Q');
                var _0x51a1a8 = Math['round'](Math['random']() * (_0x4cbba1['length'] - 0x1));
                await _0x4cbba1[_0x51a1a8]['click']();
            }
            await _0x14ae3c(0x1f4);
            const _0x5da0c4 = await _0x367402['$']('.addressList_addressItem__LE2PB');
            if (_0x5da0c4) {
            } else
                console['log'](_0x51e22d() + '\x20[' + _0x4fb02d['name'] + ']\x20Task\x20' + (_0x239a05 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x367402['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x14ae3c(0x5dc), await _0x367402['waitForSelector']('#firstname'), await _0x367402['type']('#firstname', '' + _0x3d784a[_0x239a05]['FirstName']), await _0x14ae3c(0x1f4), await _0x367402['waitForSelector']('#firstname'), await _0x367402['type']('#lastname', '' + _0x3d784a[_0x239a05]['LastName']), await _0x14ae3c(0x1f4), await _0x367402['waitForSelector']('#firstname'), await _0x367402['type']('#street', '' + _0x3d784a[_0x239a05]['Address1']), await _0x14ae3c(0x1f4), await _0x367402['waitForSelector']('#firstname'), await _0x367402['type']('#houseNumber', _0x3d784a[_0x239a05]['HouseNumber'] + '\x20' + _0x3d784a[_0x239a05]['Address2']), await _0x14ae3c(0x1f4), await _0x367402['waitForSelector']('#firstname'), await _0x367402['select']('#country_code', '' + _0x3d784a[_0x239a05]['Country']), await _0x14ae3c(0x1f4), await _0x367402['type']('#postcode', '' + _0x3d784a[_0x239a05]['Zip']), await _0x14ae3c(0x1f4), await _0x367402['type']('#city', '' + _0x3d784a[_0x239a05]['City']), await _0x14ae3c(0x1f4), await _0x367402['type']('#telephone', '' + _0x3d784a[_0x239a05]['Phone']), await _0x14ae3c(0x1f4), await _0x367402['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
            await _0x14ae3c(0x9c4);
            try {
                await _0x367402['type']('#instagram_name', '' + _0x3d784a[_0x239a05]['Follower']), await _0x367402['click']('.note_groupBtn__WLDwH\x20>\x20button');
            } catch {
            }
            console['log'](_0x51e22d() + '\x20[' + _0x4fb02d['name'] + ']\x20Task\x20' + (_0x239a05 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x14ae3c(0x5dc);
            try {
                await _0x367402['click']('.checkBox_boxHolder__wLGVe');
            } catch {
            }
            await _0x14ae3c(0x5dc), await _0x367402['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3602e1 => _0x3602e1['click']()), await _0x14ae3c(0x1388);
            try {
                await _0x367402['waitForSelector']('.success_msg__2HjJY');
            } catch {
                await _0x367402['reload']({ 'waitUntil': 'networkidle2' });
                if (_0x3d784a[_0x239a05]['Size'] != 'RANDOM') {
                    var _0x3923d4 = _0x3d784a[_0x239a05]['Size']['replace']('.', ',');
                    const _0x45ef49 = await _0x367402['$x']('//div[contains(text(),\x20' + _0x3923d4 + ')]');
                    await _0x45ef49[0x0]['click']();
                } else {
                    const _0x2779d0 = await _0x367402['$$']('div.swatchTile_tile__IRH9Q');
                    var _0x51a1a8 = Math['round'](Math['random']() * (_0x2779d0['length'] - 0x1));
                    await _0x2779d0[_0x51a1a8]['click']();
                }
                await _0x14ae3c(0x5dc);
                try {
                    await _0x367402['hover']('#instagram_name'), await _0x367402['type']('#instagram_name', '' + _0x3d784a[_0x239a05]['Follower']), await _0x367402['click']('.note_groupBtn__WLDwH\x20>\x20button');
                } catch {
                }
                console['log'](_0x51e22d() + '\x20[' + _0x4fb02d['name'] + ']\x20Task\x20' + (_0x239a05 + 0x1) + '\x20:\x20Retrying'), await _0x367402['hover']('.checkBox_boxHolder__wLGVe'), await _0x14ae3c(0x5dc), await _0x367402['click']('.checkBox_boxHolder__wLGVe'), await _0x14ae3c(0x157c), await _0x367402['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x1a522c => _0x1a522c['click']()), await _0x14ae3c(0x1388), await _0x367402['waitForSelector']('.success_msg__2HjJY');
            }
            _0x22cf4b = 'no', _0x1026d9(_0x3d784a[_0x239a05], _0x4fb02d), console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x4fb02d['name'] + ']\x20Task\x20' + (_0x239a05 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            var _0x324e49 = await _0x549c09(_0x3d784a[_0x239a05], _0x4fb02d, 'dev', ![]), _0x59c3d3 = await _0x549c09(_0x3d784a[_0x239a05], _0x4fb02d, 'pub', ![]);
            const _0x4a8e48 = {
                'succesDEVMSG': { 'embeds': [_0x324e49] },
                'succesPUBMSG': { 'embeds': [_0x59c3d3] }
            };
            try {
                _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x4a8e48['succesDEVMSG']), await _0x14ae3c(0xc8), await _0x39d9c6(_0x4f32a3, _0x4a8e48['succesDEVMSG']), await _0x14ae3c(0xc8), await _0x39d9c6(_0x1f889a, _0x4a8e48['succesPUBMSG']);
            } catch (_0x226078) {
                console['log'](_0x178ebf['yellow'](_0x51e22d() + '\x20[' + _0x4fb02d['name'] + ']\x20Task\x20' + (_0x239a05 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x226078));
            }
        } catch (_0x3361b9) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x4fb02d['name'] + ']\x20Task\x20' + (_0x239a05 + 0x1) + '\x20:\x20' + _0x3361b9)), _0x22cf4b = 'yes', _0x5ad442 = '' + _0x3361b9;
            var _0x1f90f5 = await _0x549c09(_0x3d784a[_0x239a05], _0x4fb02d, 'dev', !![], _0x5ad442), _0x324e49 = await _0x549c09(_0x3d784a[_0x239a05], _0x4fb02d, 'dev', ![]), _0x59c3d3 = await _0x549c09(_0x3d784a[_0x239a05], _0x4fb02d, 'pub', ![]);
            const _0x120007 = {
                'succesDEVMSG': { 'embeds': [_0x324e49] },
                'succesPUBMSG': { 'embeds': [_0x59c3d3] }
            };
            _0x120007['errorDEV'] = { 'embeds': [_0x1f90f5] }, _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x120007['errorDEV']), await _0x39d9c6(_0xab417d, _0x120007['errorDEV']);
        } finally {
            _0x11120e['close']();
            if (_0x22cf4b == 'yes' && _0x82b5a8 != 0x5) {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x4fb02d['name'] + ']\x20Task\x20' + (_0x239a05 + 0x1) + '\x20:\x20Retrying')), _0x239a05 = _0x239a05 - 0x1, _0x82b5a8 = _0x82b5a8 + 0x1;
                continue;
            }
            _0x22cf4b == 'yes' && _0x82b5a8 >= 0x5 && (_0x34c91f(_0x3d784a[_0x239a05], _0x4fb02d), _0x22cf4b = 'no', _0x82b5a8 = 0x0), console['log'](_0x51e22d() + '\x20[' + _0x4fb02d['name'] + ']\x20Waiting\x20for\x20' + _0x74362e['delay'] + '\x20ms'), await _0x14ae3c(_0x74362e['delay']);
        }
    }
}
async function _0x381819(_0x250d65, _0x5add50, _0x337303) {
    _0x422ef2['use'](_0x4f4dc3()), _0x422ef2['use'](_0x4b1476({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x74362e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xc127e5 = 0x0; _0xc127e5 < _0x250d65['length']; _0xc127e5++) {
        if (_0x344809 != 'yes')
            var _0x344809 = '', _0x4f9284 = 0x0;
        var _0x4bf1dc;
        await _0x332f76(_0x250d65, _0xc127e5), _0x27b422(_0x337303['name'] + '\x20Task\x20' + (_0xc127e5 + 0x1) + '\x20/\x20' + _0x250d65['length'] + '\x20||\x20File:\x20' + _0x2a553f + '\x20Proxies:\x20' + _0xfc070a);
        var _0x42a858 = await _0x549c09(_0x250d65[_0xc127e5], _0x337303, 'acc', ![]);
        const _0x48c6d4 = { 'succesDEVMSG': { 'embeds': [_0x42a858] } }, _0x4f7ae3 = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x4d8dc4 = Math['round'](Math['random']() * (_0x5add50['length'] - 0x1)), _0x5943e2 = _0x5add50[_0x4d8dc4]['split'](':'), _0x47f30a;
        try {
            _0x47f30a = await _0x422ef2['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x5943e2[0x0] + ':' + _0x5943e2[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x47f30a = await _0x422ef2['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x5943e2[0x0] + ':' + _0x5943e2[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x994dab = await _0x47f30a['newPage']();
            await _0x994dab['setViewport']({
                'width': 0x500 + _0x1a3fd4(0x1, 0x32),
                'height': 0x2d9 + _0x1a3fd4(0x1, 0x32)
            });
            const _0x5df774 = await _0x994dab['target']()['createCDPSession'](), { windowId: _0x1c475d } = await _0x5df774['send']('Browser.getWindowForTarget');
            await _0x994dab['authenticate']({
                'username': '' + _0x5943e2[0x2],
                'password': '' + _0x5943e2[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0x337303['name'] + ']\x20Task\x20' + (_0xc127e5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x994dab['goto']('' + _0x4f7ae3, { 'waitUntil': 'networkidle2' }), await _0x14ae3c(0x1388), console['log'](_0x51e22d() + '\x20[' + _0x337303['name'] + ']\x20Task\x20' + (_0xc127e5 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
            try {
                const _0x3ed770 = await _0x994dab['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                _0x3ed770 && await _0x3ed770['click']();
            } catch {
            }
            await _0x5df774['send']('Browser.setWindowBounds', {
                'windowId': _0x1c475d,
                'bounds': { 'windowState': 'minimized' }
            });
            try {
                await _0x994dab['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x14ae3c(0xfa0);
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            console['log'](_0x51e22d() + '\x20[' + _0x337303['name'] + ']\x20Task\x20' + (_0xc127e5 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x994dab['type']('input[name=\x22firstname\x22]', '' + _0x250d65[_0xc127e5]['FirstName']), await _0x14ae3c(0x1f4), await _0x994dab['type']('input[name=\x22lastname\x22]', '' + _0x250d65[_0xc127e5]['LastName']), await _0x14ae3c(0x1f4), await _0x994dab['type']('input[name=\x22email\x22]', '' + _0x250d65[_0xc127e5]['Email']), await _0x14ae3c(0x1f4), await _0x994dab['type']('input[name=\x22password\x22]', '' + _0x250d65[_0xc127e5]['Password']), await _0x14ae3c(0x258), await _0x994dab['$eval']('input[name=\x22psgdpr\x22]', _0x1d840f => _0x1d840f['click']()), await _0x14ae3c(0x1f4), console['log'](_0x51e22d() + '\x20[' + _0x337303['name'] + ']\x20Task\x20' + (_0xc127e5 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x994dab['$eval']('#customer-form', _0x4d3a5e => _0x4d3a5e['submit']());
            try {
                await _0x994dab['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x344809 = 'no', console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x337303['name'] + ']\x20Task\x20' + (_0xc127e5 + 0x1) + '\x20:\x20Account\x20' + _0x250d65[_0xc127e5]['Email'] + '\x20Generated')), _0x278a25['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x250d65[_0xc127e5]['Email'] + ',' + _0x250d65[_0xc127e5]['Password']);
                try {
                    _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x48c6d4['succesDEVMSG']);
                } catch {
                }
                await _0x39d9c6(_0x485afe, _0x48c6d4['succesDEVMSG']);
            } catch (_0x4145fb) {
                throw new Error('Account\x20generation\x20failed:\x20' + _0x4145fb);
            }
        } catch (_0x4ace4a) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x337303['name'] + ']\x20Task\x20' + (_0xc127e5 + 0x1) + '\x20:\x20' + _0x4ace4a)), _0x4bf1dc = '' + _0x4ace4a;
            var _0x41d9b3 = await _0x549c09(_0x250d65[_0xc127e5], _0x337303, 'acc', !![], _0x4bf1dc);
            _0x48c6d4['errorDEV'] = { 'embeds': [_0x41d9b3] }, _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x48c6d4['errorDEV']), await _0x39d9c6(_0xab417d, _0x48c6d4['errorDEV']), _0x344809 = 'yes';
        } finally {
            _0x47f30a['close']();
            if (_0x344809 == 'yes' && _0x4f9284 != 0x5 && _0x4bf1dc != 'Size\x20Not\x20Found') {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x337303['name'] + ']\x20Task\x20' + (_0xc127e5 + 0x1) + '\x20:\x20Retrying')), _0xc127e5 = _0xc127e5 - 0x1, _0x4f9284 = _0x4f9284 + 0x1;
                continue;
            }
            _0x344809 == 'yes' && _0x4f9284 >= 0x5 && (_0x34c91f(_0x250d65[_0xc127e5], _0x337303), _0x344809 = 'no', _0x4f9284 = 0x0), console['log'](_0x51e22d() + '\x20[' + _0x337303['name'] + ']\x20Waiting\x20for\x20' + _0x74362e['delay'] + '\x20ms'), await _0x14ae3c(_0x74362e['delay']);
        }
    }
}
async function _0x4e84a8(_0x2612b5, _0x357c4a, _0x446753) {
    _0x422ef2['use'](_0x4f4dc3()), _0x422ef2['use'](_0x4b1476({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x74362e['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x42790a = 0x0; _0x42790a < _0x2612b5['length']; _0x42790a++) {
        if (_0x5740af != 'yes')
            var _0x5740af = '', _0x1c1b67 = 0x0;
        var _0x3e62b5;
        await _0x332f76(_0x2612b5, _0x42790a), _0x27b422(_0x446753['name'] + '\x20Task\x20' + (_0x42790a + 0x1) + '\x20/\x20' + _0x2612b5['length'] + '\x20||\x20File:\x20' + _0x2a553f + '\x20Proxies:\x20' + _0xfc070a);
        const _0x2cef67 = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x2c203a = Math['round'](Math['random']() * (_0x357c4a['length'] - 0x1)), _0x1a5fc3 = _0x357c4a[_0x2c203a]['split'](':'), _0x519427;
        try {
            _0x519427 = await _0x422ef2['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x1a5fc3[0x0] + ':' + _0x1a5fc3[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x519427 = await _0x422ef2['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x1a5fc3[0x0] + ':' + _0x1a5fc3[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x49d8dc = await _0x519427['newPage'](), _0x22a502 = await _0x49d8dc['target']()['createCDPSession'](), { windowId: _0x2e88cc } = await _0x22a502['send']('Browser.getWindowForTarget');
            await _0x49d8dc['authenticate']({
                'username': '' + _0x1a5fc3[0x2],
                'password': '' + _0x1a5fc3[0x3]
            }), console['log'](_0x51e22d() + '\x20[' + _0x446753['name'] + ']\x20Task\x20' + (_0x42790a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x49d8dc['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x51e22d() + '\x20[' + _0x446753['name'] + ']\x20Task\x20' + (_0x42790a + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x14ae3c(0xbb8), await _0x22a502['send']('Browser.setWindowBounds', {
                'windowId': _0x2e88cc,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x14ae3c(0x1f40);
            try {
                await _0x49d8dc['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            await _0x14ae3c(0x1388), console['log'](_0x51e22d() + '\x20[' + _0x446753['name'] + ']\x20Task\x20' + (_0x42790a + 0x1) + '\x20:\x20Logging\x20in'), await _0x49d8dc['type']('input[name=\x22email\x22]', '' + _0x2612b5[_0x42790a]['Email']), await _0x14ae3c(0x1f4), await _0x49d8dc['type']('input[name=\x22password\x22]', '' + _0x2612b5[_0x42790a]['Password']), await _0x14ae3c(0x258), await _0x49d8dc['$eval']('#login-form', _0x13cf83 => _0x13cf83['submit']()), await _0x49d8dc['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x14ae3c(0x1f4), await _0x49d8dc['goto']('' + _0x2612b5[_0x42790a]['Url']), await _0x49d8dc['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x51e22d() + '\x20[' + _0x446753['name'] + ']\x20Task\x20' + (_0x42790a + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2612b5[_0x42790a]['Size']);
            if (_0x2612b5[_0x42790a]['Size'] != 'RANDOM') {
                var _0x46d198 = '\x20' + _0x2612b5[_0x42790a]['Size'] + '\x20';
                const _0x438b4d = await _0x49d8dc['$x']('//span[contains(text(),\x20' + _0x46d198 + ')]');
                await _0x438b4d[0x0]['click']();
            } else {
                const _0x3e9dab = await _0x49d8dc['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                var _0x5e20a1 = Math['round'](Math['random']() * (_0x3e9dab['length'] - 0x1));
                await _0x3e9dab[_0x5e20a1]['click']();
            }
            await _0x14ae3c(0x258), await _0x49d8dc['click']('#cookieChoiceDismiss'), await _0x14ae3c(0x3e8), await _0x49d8dc['type']('#instagram-account', '' + _0x2612b5[_0x42790a]['Follower']), await _0x14ae3c(0x28a), await _0x49d8dc['click']('#book-btn'), await _0x14ae3c(0xbb8), await _0x49d8dc['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x14ae3c(0x1f4), console['log'](_0x51e22d() + '\x20[' + _0x446753['name'] + ']\x20Task\x20' + (_0x42790a + 0x1) + '\x20:\x20' + _0x178ebf['cyan']('Solving\x20Captcha')), await _0x49d8dc['solveRecaptchas'](), console['log'](_0x51e22d() + '\x20[' + _0x446753['name'] + ']\x20Task\x20' + (_0x42790a + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x14ae3c(0x7d0), await _0x49d8dc['$eval']('#book-btn-for-sure', _0x4bd3bd => _0x4bd3bd['click']()), await _0x14ae3c(0x12c), await _0x49d8dc['click']('#book-btn-for-sure'), await _0x14ae3c(0xdac);
            const _0x3778ed = await _0x49d8dc['$eval']('.reservation-popup\x20>\x20.title', _0x32444e => {
                return _0x32444e['innerHTML'];
            });
            if (_0x3778ed) {
                _0x5740af = 'no', _0x1026d9(_0x2612b5[_0x42790a], _0x446753), console['log'](_0x178ebf['green'](_0x51e22d() + '\x20[' + _0x446753['name'] + ']\x20Task\x20' + (_0x42790a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                var _0x4d4bcd = await _0x549c09(_0x2612b5[_0x42790a], _0x446753, 'dev', ![]), _0x1dedb2 = await _0x549c09(_0x2612b5[_0x42790a], _0x446753, 'pub', ![]);
                const _0x40899a = {
                    'succesDEVMSG': { 'embeds': [_0x4d4bcd] },
                    'succesPUBMSG': { 'embeds': [_0x1dedb2] }
                };
                try {
                    _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x40899a['succesDEVMSG']), await _0x14ae3c(0xc8), await _0x39d9c6(_0x4f32a3, _0x40899a['succesDEVMSG']), await _0x14ae3c(0xc8), await _0x39d9c6(_0x1f889a, _0x40899a['succesPUBMSG']);
                } catch (_0x2e06eb) {
                    console['log'](_0x178ebf['yellow'](_0x51e22d() + '\x20[' + _0x446753['name'] + ']\x20Task\x20' + (_0x42790a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2e06eb));
                }
            } else
                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
        } catch (_0x2241f1) {
            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x446753['name'] + ']\x20Task\x20' + (_0x42790a + 0x1) + '\x20:\x20' + _0x2241f1)), _0x3e62b5 = '' + _0x2241f1;
            var _0x51e9c2 = await _0x549c09(_0x2612b5[_0x42790a], _0x446753, 'dev', !![], _0x3e62b5), _0x4d4bcd = await _0x549c09(_0x2612b5[_0x42790a], _0x446753, 'dev', ![]), _0x1dedb2 = await _0x549c09(_0x2612b5[_0x42790a], _0x446753, 'pub', ![]);
            const _0x585d19 = {
                'succesDEVMSG': { 'embeds': [_0x4d4bcd] },
                'succesPUBMSG': { 'embeds': [_0x1dedb2] }
            };
            _0x585d19['errorDEV'] = { 'embeds': [_0x51e9c2] }, _0x74362e['webhook'] != undefined && _0x74362e['webhook'] != '' && await _0x39d9c6(_0x74362e['webhook'], _0x585d19['errorDEV']), await _0x39d9c6(_0xab417d, _0x585d19['errorDEV']), _0x2241f1 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x5740af = 'yes');
        } finally {
            _0x519427['close']();
            if (_0x5740af == 'yes' && _0x1c1b67 != 0x5 && _0x3e62b5 != 'Size\x20Not\x20Found') {
                console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x446753['name'] + ']\x20Task\x20' + (_0x42790a + 0x1) + '\x20:\x20Retrying')), _0x42790a = _0x42790a - 0x1, _0x1c1b67 = _0x1c1b67 + 0x1;
                continue;
            }
            _0x5740af == 'yes' && _0x1c1b67 >= 0x5 && (_0x34c91f(_0x2612b5[_0x42790a], _0x446753), _0x5740af = 'no', _0x1c1b67 = 0x0), console['log'](_0x51e22d() + '\x20[' + _0x446753['name'] + ']\x20Waiting\x20for\x20' + _0x74362e['delay'] + '\x20ms'), await _0x14ae3c(_0x74362e['delay']);
        }
    }
}
async function _0x407933() {
    await _0x189550(), console['clear']();
    if (_0x1574e6 != 'devkey') {
        let _0x368eee = await _0x22b7ea['autoUpdate']();
        if (_0x368eee === 'yes')
            return _0x20d954('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x43c65c == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x14ae3c(0x2710);
        ;
    }
    await _0x4af1e8(_0x43c65c);
    if (_0x3bc9e6 === ![])
        return console['log']('Closing\x20Browser'), await _0x14ae3c(0xbb8);
    else
        try {
            var _0x227e12 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x295d29
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x1574e6
                    }
                ]
            }];
            const _0x28f9b6 = { 'embeds': _0x227e12 };
            var _0x2c56f4 = await _0x549c09(null, null, 'open', ![]);
            const _0x4f24ea = { 'openDEVMSG': { 'embeds': [_0x2c56f4] } };
            await _0x39d9c6(_0xcb8772, _0x4f24ea['openDEVMSG']);
            async function _0x180c35() {
                _0x27b422('JRaffles\x20' + _0x1574e6), console['clear'](), console['log']('Welcome\x20to\x20' + _0x178ebf['cyan']('JRaffles();') + '\x20' + _0x1574e6), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x3cdc2e = 0x0; _0x3cdc2e < _0x3915d9['length'] - 0x3; _0x3cdc2e++) {
                    if (_0x3915d9[_0x3cdc2e]['name'] === 'Reload\x20Settings' || _0x3915d9[_0x3cdc2e]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x3cdc2e + ')\x20[' + _0x3915d9[_0x3cdc2e]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x3915d9['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x3915d9['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x3915d9['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x1871a6();
                if (taskModule > _0x3915d9['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x14ae3c(0x3e8), _0x180c35();
                if (_0x3915d9[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x39581e(_0x3915d9[taskModule]['modules']);
                    var _0x435c9a = _0x3915d9[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x48690e = await _0x9b8c0f(), _0x22e753 = await _0x2e4a12();
                        await _0x24aec1(_0x22e753, _0x48690e, _0x435c9a);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x48690e = await _0x9b8c0f(), _0x22e753 = await _0x2e4a12();
                            await _0x4c3517(_0x22e753, _0x48690e, _0x435c9a);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x48690e = await _0x9b8c0f(), _0x1c4e75 = await _0x2baae7(), _0x127ad4 = _0x1c4e75['split'](';');
                                await _0x563798(_0x127ad4, _0x48690e, _0x435c9a);
                            }
                        }
                    }
                    return _0x180c35();
                }
                if (_0x3915d9[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x39581e(_0x3915d9[taskModule]['modules']);
                        var _0x435c9a = _0x3915d9[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x48690e = await _0x9b8c0f(), _0x3f07c8 = await _0x2e4a12();
                            await _0x4e84a8(_0x3f07c8, _0x48690e, _0x435c9a);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x48690e = await _0x9b8c0f(), _0x3f07c8 = await _0x2e4a12();
                                await _0x381819(_0x3f07c8, _0x48690e, _0x435c9a);
                            }
                        }
                    } catch (_0x61b927) {
                        console['log'](_0x61b927), await _0x14ae3c(0xfa0);
                    }
                    return _0x180c35();
                }
                if (_0x3915d9[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x39581e(_0x3915d9[taskModule]['modules']);
                    var _0x435c9a = _0x3915d9[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x48690e = await _0x9b8c0f(), _0x34a716 = await _0x2e4a12();
                    if (_0x34a716[0x0]['Url'] == '' || _0x34a716[0x0]['Url'] == undefined) {
                        await _0x12f197(_0x48690e);
                        var _0x1ce881 = await _0x489260();
                        return await afewFunction('' + _0x10eec2[_0x1ce881], 'nor', _0x435c9a, _0x34a716, _0x48690e), _0x180c35();
                    }
                    return await afewFunction(_0x34a716[0x0]['Url'], 'nor', _0x435c9a, _0x34a716, _0x48690e), _0x180c35();
                } else {
                    if (_0x3915d9[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x39581e(_0x3915d9[taskModule]['modules']);
                        var _0x435c9a = _0x3915d9[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x48690e = await _0x9b8c0f(), _0x4d2f50 = await _0x2e4a12();
                            console['log']('Starting\x20' + _0x4d2f50['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x60c6ea = 0x0; _0x60c6ea < _0x4d2f50['length']; _0x60c6ea++) {
                                console['log'](_0x51e22d() + '\x20[' + _0x435c9a['name'] + ']\x20Task\x20' + (_0x60c6ea + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x44589f(_0x60c6ea, 'nor', _0x435c9a, _0x4d2f50, _0x48690e), console['log'](_0x51e22d() + '\x20[' + _0x435c9a['name'] + ']\x20Sleeping\x20for\x20' + _0x74362e['MahaDelay'] + '\x20ms'), await _0x14ae3c(_0x74362e['MahaDelay']);
                                } catch (_0x480139) {
                                    console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x435c9a['name'] + ']\x20Task\x20' + (_0x60c6ea + 0x1) + ':\x20Error\x20' + _0x480139));
                                }
                            }
                            ;
                            return _0x180c35();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x48690e = await _0x9b8c0f();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x1c4e75 = await _0x2baae7(), _0x127ad4 = _0x1c4e75['split'](';'), console['log'](_0x127ad4['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x60c6ea = 0x0; _0x60c6ea < _0x127ad4['length']; _0x60c6ea++) {
                                    _0x435c9a['url'] = _0x127ad4[_0x60c6ea], console['log'](_0x51e22d() + '\x20[' + _0x435c9a['name'] + ']\x20Task\x20' + (_0x60c6ea + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x44589f(_0x60c6ea, 'ver', _0x435c9a, _0x4d2f50, _0x48690e), console['log'](_0x51e22d() + '\x20[' + _0x435c9a['name'] + ']\x20Sleeping\x20for\x20' + _0x74362e['verificationDelay'] + '\x20ms'), await _0x14ae3c(_0x74362e['verificationDelay']);
                                    } catch (_0x4a02b3) {
                                        console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x435c9a['name'] + ']\x20Task\x20' + (_0x60c6ea + 0x1) + ':\x20Error\x20' + _0x4a02b3));
                                    }
                                }
                                ;
                                return _0x180c35();
                            }
                        }
                    } else {
                        if (_0x3915d9[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x39581e(_0x3915d9[taskModule]['modules']);
                            var _0x435c9a = _0x3915d9[taskModule]['modules'][taskFunction], _0x48690e = await _0x9b8c0f(), _0x35eec6 = await _0x2e4a12();
                            return await _0x5308e6(_0x35eec6, _0x48690e, _0x435c9a), await _0x14ae3c(0x1388), _0x180c35();
                        } else {
                            if (_0x3915d9[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x39581e(_0x3915d9[taskModule]['modules']);
                                var _0x435c9a = _0x3915d9[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x48690e = await _0x9b8c0f(), _0x414b49 = await _0x2e4a12();
                                    console['log']('Starting\x20' + _0x178ebf['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x60c6ea = 0x0; _0x60c6ea < _0x414b49['length']; _0x60c6ea++) {
                                        console['log'](_0x51e22d() + '\x20[' + _0x435c9a['name'] + ']\x20Task\x20' + (_0x60c6ea + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x43640d(_0x60c6ea, 'nor', _0x435c9a, _0x414b49, _0x48690e);
                                        } catch (_0x25445d) {
                                            console['log'](_0x178ebf['red'](_0x51e22d() + '\x20[' + _0x435c9a['name'] + ']\x20Task\x20' + (_0x60c6ea + 0x1) + ':\x20Task\x20failed\x20' + _0x25445d));
                                        }
                                        console['log'](_0x51e22d() + '\x20[' + _0x435c9a['name'] + ']\x20Sleeping\x20for\x20' + _0x74362e['delay'] + '\x20ms'), await _0x14ae3c(_0x74362e['delay']);
                                    }
                                    return _0x180c35();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x48690e = await _0x9b8c0f();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x1c4e75 = await _0x2baae7(), _0x127ad4 = _0x1c4e75['split'](';'), console['log'](_0x127ad4['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x60c6ea = 0x0; _0x60c6ea < _0x127ad4['length']; _0x60c6ea++) {
                                            try {
                                                _0x435c9a['url'] = _0x127ad4[_0x60c6ea], console['log'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Task\x20' + (_0x60c6ea + 0x1) + ':\x20Getting\x20Session'), await _0x43640d(_0x60c6ea, 'ver', _0x435c9a, null, _0x48690e), console['log'](_0x51e22d() + '\x20[' + _0x3915d9[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x74362e['verificationDelay'] + '\x20ms'), await _0x14ae3c(_0x74362e['verificationDelay']);
                                            } catch (_0x345e09) {
                                                console['log'](_0x345e09), await _0x14ae3c(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x180c35();
                                    }
                                }
                                ;
                            } else {
                                if (_0x3915d9[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x39581e(_0x3915d9[taskModule]['modules']);
                                    var _0x435c9a = _0x3915d9[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x3292cb('https://bouncewear.com/nl/account/register', _0x435c9a);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x3915d9[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x39581e(_0x3915d9[taskModule]['modules']);
                                        var _0x435c9a = _0x3915d9[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x48690e = await _0x9b8c0f(), _0x8298b = await _0x2e4a12();
                                            return await _0x3f3c38('https://patta.nl/account/register', _0x435c9a, _0x8298b, _0x48690e), _0x180c35();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x48690e = await _0x9b8c0f(), _0x8298b = await _0x2e4a12();
                                                return await _0x431ceb('', _0x435c9a, _0x8298b, _0x48690e), _0x180c35();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x3915d9[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x39581e(_0x3915d9[taskModule]['modules']);
                                            var _0x435c9a = _0x3915d9[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x48690e = await _0x9b8c0f(), _0x1b2c5e = await _0x2e4a12();
                                                return await _0x531a45('https://slamjam.nl/account/register', _0x435c9a, _0x1b2c5e, _0x48690e), _0x180c35();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x48690e = await _0x9b8c0f(), _0x1b2c5e = await _0x2e4a12();
                                                    return await _0x278674('', _0x435c9a, _0x1b2c5e, _0x48690e), _0x180c35();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x3915d9[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x39581e(_0x3915d9[taskModule]['modules']);
                                                var _0x435c9a = _0x3915d9[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x48690e = await _0x9b8c0f(), _0x3a6f86 = await _0x2e4a12();
                                                    return await _0x22dca3('https://www.kickz.com/nl/login/', _0x435c9a, _0x3a6f86, _0x48690e), _0x180c35();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x48690e = await _0x9b8c0f(), _0x3a6f86 = await _0x2e4a12();
                                                        return await _0x25433d(_0x435c9a, _0x3a6f86, _0x48690e), _0x180c35();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x3915d9[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x39581e(_0x3915d9[taskModule]['modules']);
                                                    var _0x435c9a = _0x3915d9[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x48690e = await _0x9b8c0f(), _0x4e4242 = await _0x2e4a12();
                                                        return await _0x3fe0cd(_0x435c9a, _0x4e4242, _0x48690e), _0x180c35();
                                                    }
                                                } else {
                                                    if (_0x3915d9[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x14ae3c(0x3e8), _0x180c35();
                                                    else {
                                                        if (_0x3915d9[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x57d9af = _0x3915d9[taskModule]['name'], _0x48690e = await _0x9b8c0f();
                                                            const _0x3cd259 = await _0x2baae7();
                                                            var _0x127ad4 = _0x3cd259['split'](';');
                                                            await _0x5b94c5(_0x127ad4, _0x57d9af, _0x48690e);
                                                        } else {
                                                            if (_0x3915d9[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0xc7053 = 0x0;
                                                                for (const _0x2f0ab9 in _0x74362e) {
                                                                    console['log']('(' + _0xc7053 + ')\x20' + _0x2f0ab9 + '\x20:\x20' + _0x74362e[_0x2f0ab9]), _0xc7053++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0xc7053 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x4bffc7 = await _0x98b48();
                                                                if (_0x4bffc7 == _0xc7053)
                                                                    return _0x180c35();
                                                                console['clear'];
                                                                var _0x2f40f3 = 0x0;
                                                                for (var _0x4d860b in _0x74362e) {
                                                                    if (_0x4bffc7 == _0x2f40f3) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x4d860b + '\x20:'), _0x74362e[_0x4d860b] = await _0x31fba8(), _0x278a25['writeFileSync']('../settings.json', JSON['stringify'](_0x74362e));
                                                                        break;
                                                                    } else
                                                                        _0x2f40f3++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x14ae3c(0xbb8), _0x180c35();
                                                            } else {
                                                                if (_0x3915d9[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x189550(), _0x180c35();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x3915d9[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x38b241 = await _0x3e397c();
                                                                        _0x38b241 == 'ModuleVoorDeBoys' ? (await _0x12f197(), await _0x489260(), await afewFunction(_0x10eec2[_0x1ce881], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x14ae3c(0xbb8));
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
            await _0x180c35();
        } catch (_0x109ad1) {
            return console['log'](_0x109ad1), await _0x14ae3c(0x3a98);
        }
}
;
_0x27b422('JRaffles\x20' + _0x1574e6), _0x189550();
try {
    _0x407933();
} catch (_0x115dca) {
    var _0xce2c74 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x295d29
            },
            {
                'name': 'Version',
                'value': '' + _0x1574e6
            },
            {
                'name': 'Error',
                'value': '' + _0x115dca
            }
        ]
    }];
    const _0x3e373c = { 'embeds': _0xce2c74 };
    _0x39d9c6(_0xab417d, _0x3e373c);
}